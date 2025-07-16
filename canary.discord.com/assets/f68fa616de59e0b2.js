"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
	["95336"], {
		618103: function(e) {
			e.exports = "/assets/c451b132a4f69f5b.svg"
		},
		552196: function(e) {
			e.exports = "/assets/5153f8efac26047f.svg"
		},
		894960: function(e) {
			e.exports = "/assets/140c2a4c9ce5623d.svg"
		},
		705432: function(e) {
			e.exports = "/assets/e83b7cd64938e9cb.svg"
		},
		182936: function(e) {
			e.exports = "/assets/0dfcd735f1a5349c.svg"
		},
		97984: function(e) {
			e.exports = "/assets/1fa1021e7db304e1.svg"
		},
		492764: function(e) {
			e.exports = "/assets/29e2479161d09050.png"
		},
		235810: function(e) {
			e.exports = "/assets/23b41cd4bc2db4cc.png"
		},
		494404: function(e, t, n) {
			n.d(t, {
				ZP: () => M,
				h4: () => N,
				nH: () => k
			}), n(388685), n(539854);
			var r = n(255367),
				s = n(73800),
				l = n(120356),
				a = n.n(l),
				o = n(392711),
				i = n.n(o),
				c = n(91192),
				u = n(442837),
				d = n(755721),
				h = n(481060),
				p = n(904245),
				f = n(724757),
				g = n(576855),
				m = n(804063),
				b = n(294218),
				y = n(703656),
				S = n(592125),
				x = n(375954),
				j = n(496675),
				O = n(933429),
				v = n(451478),
				_ = n(626135),
				E = n(585483),
				C = n(981631),
				I = n(388032),
				R = n(555565);

			function P(e, t, n) {
				return t in e ? Object.defineProperty(e, t, {
					value: n,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : e[t] = n, e
			}

			function T(e) {
				e.stopPropagation()
			}
			let N = e => {
					let {
						title: t,
						icon: n,
						children: s,
						className: l
					} = e;
					return (0, r.jsxs)("div", {
						className: a()(l, R.header),
						children: [(0, r.jsxs)("div", {
							className: R.titleContainer,
							children: [null != n ? (0, r.jsx)(n, {
								color: h.TVs.colors.INTERACTIVE_NORMAL
							}) : null, null == t ? null : (0, r.jsx)(h.Text, {
								variant: "text-lg/semibold",
								color: "interactive-active",
								children: t
							})]
						}), s]
					})
				},
				k = e => {
					let {
						msg: t,
						image: n
					} = e;
					return (0, r.jsxs)("div", {
						className: R.emptyPlaceholder,
						children: [(0, r.jsx)("div", {
							className: R.image,
							style: {
								backgroundImage: "url(".concat(n, ")")
							}
						}), (0, r.jsx)("div", {
							className: R.body,
							children: t
						})]
					})
				};
			class w extends s.PureComponent {
				renderJumpButton() {
					let {
						jumping: e
					} = this.props;
					return (0, r.jsxs)(h.P3F, {
						className: R.jumpButton,
						onClick: this.handleClickJump,
						children: [(0, r.jsx)("div", {
							className: a()(R.__invalid_text, {
								hidden: e
							}),
							children: I.intl.string(I.t.k5WiPT)
						}), (0, r.jsx)(h.$jN, {
							type: h.$jN.Type.PULSING_ELLIPSIS,
							className: a()(R.loading, {
								[R.visible]: e
							})
						})]
					})
				}
				renderCloseButton() {
					let {
						onCloseMessage: e,
						canCloseAllMessages: t,
						canManageMessages: n,
						channel: s
					} = this.props;
					return null != e && (t || n || null != s && s.isPrivate()) ? (0, r.jsx)(d.zx, {
						look: d.zx.Looks.BLANK,
						size: d.zx.Sizes.NONE,
						onClick: this.handleClickClose,
						children: (0, r.jsx)(h.Dio, {
							size: "md",
							color: "currentColor",
							className: R.closeIcon
						})
					}) : null
				}
				render() {
					return (0, r.jsxs)("div", {
						className: R.actionButtons,
						children: [this.renderJumpButton(), this.renderCloseButton()]
					})
				}
				constructor(...e) {
					super(...e), P(this, "handleClickJump", e => {
						let {
							jumpTo: t,
							message: n
						} = this.props;
						t(n, e)
					}), P(this, "handleClickClose", e => {
						let {
							onCloseMessage: t,
							message: n
						} = this.props;
						null != t && t(n, e)
					})
				}
			}
			let Z = u.ZP.connectStores([j.Z], e => {
				let {
					channel: t
				} = e;
				return {
					canManageMessages: null != t && j.Z.can(C.Plq.MANAGE_MESSAGES, t)
				}
			})(w);

			function A(e) {
				let {
					analyticsName: t,
					items: n,
					hasMore: l,
					loading: o,
					loadMore: p,
					renderHeader: m,
					renderEmptyState: b,
					renderItem: y,
					getProTip: S,
					scrollerClassName: x,
					className: j,
					listName: N
				} = e, k = s.useRef(null), w = (0, f.Z)(N, k), Z = (0, u.e7)([O.ZP], () => O.ZP.hasNotice()), A = (0, u.e7)([v.Z], () => v.Z.windowSize());
				s.useEffect(() => {
					_.default.track(C.rMx.OPEN_POPOUT, {
						type: t
					})
				}, [t]), s.useEffect(() => {
					function e() {
						var e;
						null == (e = k.current) || e.scrollPageUp({
							animate: !0
						})
					}

					function t() {
						var e;
						null == (e = k.current) || e.scrollPageDown({
							animate: !0
						})
					}
					return E.S.subscribe(C.CkL.SCROLL_PAGE_DOWN, t), E.S.subscribe(C.CkL.SCROLL_PAGE_UP, e), () => {
						E.S.unsubscribe(C.CkL.SCROLL_PAGE_DOWN, t), E.S.unsubscribe(C.CkL.SCROLL_PAGE_UP, e)
					}
				}, []);
				let M = s.useCallback(() => {
						var e;
						let t = null == (e = k.current) ? void 0 : e.getScrollerState();
						null != t && t.scrollHeight - t.scrollTop - t.offsetHeight < 250 && l && !o && (null == p || p())
					}, [l, p, o]),
					F = [],
					L = !0;
				null == n || o && 0 === n.length ? F = [(0, r.jsx)("div", {
					className: a()(R.emptyPlaceholder, R.loadingPlaceholder),
					children: (0, r.jsx)(h.$jN, {})
				}, "spinner")] : 0 === n.length ? F.push((0, r.jsx)(s.Fragment, {
					children: b()
				}, "empty-state")) : (L = !1, F = [], i().each(n, e => {
					F.push(...y(e))
				}));
				let D = null;
				null != n && n.length > 0 && null != p && (D = o ? (0, r.jsx)("div", {
					className: R.loadingMore,
					children: (0, r.jsx)(h.$jN, {})
				}, "loading-more-after") : l ? (0, r.jsx)("div", {
					className: R.hasMore,
					children: (0, r.jsx)(d.zx, {
						look: d.zx.Looks.FILLED,
						color: d.zx.Colors.PRIMARY,
						size: d.zx.Sizes.MAX,
						onClick: p,
						children: I.intl.string(I.t.XBlaiI)
					})
				}) : (0, r.jsx)("div", {
					className: R.scrollingFooterWrap,
					children: b()
				}));
				let H = null == S ? void 0 : S(),
					B = L && null != H ? (0, r.jsx)("div", {
						className: R.footer,
						children: (0, r.jsx)(g.Z, {
							style: {
								width: "100%",
								paddingTop: 10,
								paddingBottom: 10
							},
							children: H
						})
					}) : null,
					U = {
						maxHeight: A.height - 43 - 25 - 48
					};
				Z && (U.maxHeight -= 40);
				let G = null != p && l;
				return (0, r.jsx)("div", {
					className: a()(j, R.messagesPopoutWrap),
					style: U,
					onClick: T,
					onDoubleClick: T,
					"aria-label": e["aria-label"],
					children: (0, r.jsxs)(h.y5t, {
						component: m(),
						children: [(0, r.jsxs)(h.Den, {
							className: a()(R.messagesPopout, x),
							onScroll: G ? M : void 0,
							ref: k,
							children: [(0, r.jsx)(c.bG, {
								navigator: w,
								children: (0, r.jsx)(c.SJ, {
									children: e => {
										var t, n, {
												ref: s
											} = e,
											l = function(e, t) {
												if (null == e) return {};
												var n, r, s = function(e, t) {
													if (null == e) return {};
													var n, r, s = {},
														l = Object.keys(e);
													for (r = 0; r < l.length; r++) n = l[r], t.indexOf(n) >= 0 || (s[n] = e[n]);
													return s
												}(e, t);
												if (Object.getOwnPropertySymbols) {
													var l = Object.getOwnPropertySymbols(e);
													for (r = 0; r < l.length; r++) n = l[r], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (s[n] = e[n])
												}
												return s
											}(e, ["ref"]);
										return (0, r.jsx)("div", (t = function(e) {
											for (var t = 1; t < arguments.length; t++) {
												var n = null != arguments[t] ? arguments[t] : {},
													r = Object.keys(n);
												"function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
													return Object.getOwnPropertyDescriptor(n, e).enumerable
												}))), r.forEach(function(t) {
													P(e, t, n[t])
												})
											}
											return e
										}({
											ref: s
										}, l), n = n = {
											children: F
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
							}), D]
						}), B]
					})
				})
			}

			function M(e) {
				let {
					analyticsName: t,
					onFetch: n,
					channel: l,
					messages: a,
					hasMore: o,
					loading: i,
					loadMore: c,
					onJump: d,
					canCloseAllMessages: h = !1,
					renderHeader: f,
					renderEmptyState: g,
					renderMessage: j,
					getProTip: O,
					scrollerClassName: v,
					className: _,
					onCloseMessage: E,
					listName: I
				} = e, P = (0, u.e7)([x.Z], () => {
					let e = null != l ? x.Z.getMessages(l.id) : null;
					return null != e && null != e.jumpTargetId && e.loadingMore && null == e.get(e.jumpTargetId)
				});

				function T(e, n) {
					if ((0, m.Z)(e) && !P) {
						let {
							id: r,
							channel_id: s
						} = e, l = S.Z.getChannel(s);
						null != l && (p.Z.trackJump(s, r, t), (0, y.uL)(C.Z5c.CHANNEL(l.getGuildId(), s, r))), null == d || d(n)
					}
				}
				s.useEffect(() => {
					n(l)
				}, [l, n]);
				let N = s.useMemo(() => null == a ? void 0 : a.map(e => ({
					message: e,
					channel: l
				})), [a, l]);
				return (0, r.jsx)(A, {
					className: _,
					scrollerClassName: v,
					items: N,
					loading: i,
					analyticsName: t,
					renderEmptyState: g,
					renderHeader: f,
					hasMore: o,
					loadMore: c,
					getProTip: O,
					renderItem: function(e) {
						let {
							message: t,
							channel: n
						} = e;
						if (null == t) return [];
						if (null != j) return j(t, e => T(t, e));
						let s = [];
						return null == n ? [] : (s.push((0, r.jsxs)("div", {
							className: R.messageGroupWrapper,
							children: [(0, r.jsx)(b.Z, {
								className: R.messageGroupCozy,
								message: t,
								channel: n
							}), (0, r.jsx)(Z, {
								channel: l,
								message: t,
								jumping: P,
								canCloseAllMessages: h,
								jumpTo: T,
								onCloseMessage: E
							})]
						}, t.id)), s)
					},
					listName: I,
					"aria-label": e["aria-label"]
				})
			}
		},
		542051: function(e, t, n) {
			n.d(t, {
				M: () => m,
				Z: () => y
			}), n(415506), n(781311), n(388685);
			var r, s = n(255367),
				l = n(73800),
				a = n(120356),
				o = n.n(a),
				i = n(481060),
				c = n(405656),
				u = n(388032),
				d = n(953928);

			function h(e, t, n) {
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
						h(e, t, n[t])
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

			function g(e) {
				e.stopPropagation(), e.preventDefault()
			}

			function m(e, t, n) {
				return {
					id: "".concat(e, "-").concat(t),
					role: "option",
					tabIndex: -1,
					"aria-selected": n
				}
			}
			class b extends(r = l.PureComponent) {
				renderQuery(e) {
					let {
						query: t,
						navId: n,
						focusedIndex: r,
						onSelectQuery: l,
						onSelectSearchEverywhere: a,
						onHighlightQuery: c,
						hideQuery: h,
						searchFavorites: g
					} = this.props;
					if (e || h) return null;
					let b = -1 === r;
					return (0, s.jsxs)(s.Fragment, {
						children: [(0, s.jsxs)(i.P3F, f(p({
							className: o()(d.queryContainer, {
								[d.focused]: b
							})
						}, m(n, -1, b)), {
							onMouseEnter: c,
							onClick: l,
							children: [(0, s.jsx)("div", {
								className: d.queryText,
								children: g ? u.intl.string(u.t["6RVtLC"]) : u.intl.format(u.t.ub226e, {
									value: t
								})
							}), (0, s.jsx)("div", {
								className: d.queryShortcut,
								"aria-hidden": !0,
								children: (0, s.jsx)(i.M2$, {
									shortcut: "return",
									dim: !0,
									className: d.keyCombo
								})
							})]
						})), g && (0, s.jsxs)(i.P3F, f(p({
							className: o()(d.queryContainer, {
								[d.focused]: b
							})
						}, m(n, -1, b)), {
							onMouseEnter: c,
							onClick: a,
							children: [(0, s.jsx)("div", {
								className: d.queryText,
								children: u.intl.string(u.t.FtSUxc)
							}), (0, s.jsx)("div", {
								className: d.queryShortcut,
								"aria-hidden": !0,
								children: (0, s.jsx)(i.M2$, {
									shortcut: "shift+return",
									dim: !0,
									className: d.keyCombo
								})
							})]
						}))]
					})
				}
				renderResults(e) {
					let {
						numResults: t,
						renderNoResults: n,
						renderInitialState: r,
						renderResult: s,
						renderCustomResults: l
					} = this.props;
					if (e) return r();
					if (0 === t) return n();
					if (null != s) return Array.from({
						length: t
					}).map((e, t) => s(t));
					if (null != l) return l();
					throw Error("SearchResultsPopout.renderResults: Flow should never allow this...")
				}
				render() {
					let {
						query: e,
						focusedIndex: t,
						navId: n,
						width: r
					} = this.props, l = "" === e.trim();
					return (0, s.jsxs)("div", {
						className: d.container,
						style: {
							width: r
						},
						onMouseDown: g,
						role: "listbox",
						id: n,
						tabIndex: -1,
						"aria-activedescendant": "".concat(n, "-").concat(t),
						children: [this.renderQuery(l), this.renderSearchInSelectedChannelAutocomplete(), this.renderResults(l)]
					})
				}
				constructor(...e) {
					super(...e), h(this, "renderSearchInSelectedChannelAutocomplete", () => {
						let {
							navId: e,
							channel: t,
							showSearchInSelectedChannel: n,
							focusedIndex: r,
							onSelectSearchInSelectedChannel: l,
							renderChannel: a
						} = this.props;
						if (!n || null == t) return null;
						let o = (0, c.X3)(t),
							h = a(null, "", {
								channel: t,
								text: u.intl.formatToPlainString(u.t.LDpotL, {
									guildName: o
								})
							}, d.channelContainer, d.searchResultNameContainer);
						return (0, s.jsx)(i.P3F, f(p({}, m(e, -1, -1 === r)), {
							className: d.inChannelOptionContainer,
							onClick: l,
							children: (0, s.jsx)(i.Text, {
								variant: "text-md/normal",
								color: "interactive-normal",
								className: d.inChannelOption,
								children: u.intl.format(u.t.LDpotL, {
									guildName: h
								})
							})
						}))
					})
				}
			}
			h(b, "defaultProps", {
				renderInitialState: () => null,
				hideQuery: !1,
				width: 320
			});
			let y = b
		},
		395041: function(e, t, n) {
			n.d(t, {
				O: () => i,
				w: () => o
			});
			var r = n(255367);
			n(73800);
			var s = n(481060),
				l = n(277640);

			function a(e, t) {
				let {
					children: n
				} = e;
				return (0, r.jsx)(s.Text, {
					variant: "text-sm/medium",
					className: t,
					children: n
				})
			}
			let o = e => a(e, l.searchFilter),
				i = e => a(e, l.searchAnswer)
		},
		185935: function(e, t, n) {
			n.d(t, {
				Z: () => s
			});
			let r = (0, n(818083).B)({
				kind: "user",
				id: "2024-12_participants_panel",
				label: "Participants Panel",
				defaultConfig: {
					hasParticipantsPanel: !1
				},
				treatments: [{
					id: 1,
					label: "Participants panel in VC and GDM",
					config: {
						hasParticipantsPanel: !0
					}
				}]
			});

			function s(e) {
				return r.useExperiment(e)
			}
		},
		373662: function(e, t, n) {
			n.d(t, {
				ZP: () => b,
				fO: () => m,
				sF: () => g
			});
			var r = n(255367),
				s = n(73800),
				l = n(120356),
				a = n.n(l),
				o = n(481060),
				i = n(377171),
				c = n(951394),
				u = n(407477),
				d = n(388032),
				h = n(852747);

			function p(e) {
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
				if (null == e) return {};
				var n, r, s = function(e, t) {
					if (null == e) return {};
					var n, r, s = {},
						l = Object.keys(e);
					for (r = 0; r < l.length; r++) n = l[r], t.indexOf(n) >= 0 || (s[n] = e[n]);
					return s
				}(e, t);
				if (Object.getOwnPropertySymbols) {
					var l = Object.getOwnPropertySymbols(e);
					for (r = 0; r < l.length; r++) n = l[r], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (s[n] = e[n])
				}
				return s
			}
			let g = s.forwardRef(function(e, t) {
				var {
					label: n,
					ariaLabel: s,
					tooltipText: l,
					tooltipColor: g,
					icon: m,
					iconProps: b,
					onClick: y,
					onTooltipShow: S,
					onTooltipHide: x,
					disabled: j,
					dangerous: O,
					separator: v,
					sparkle: _,
					showNewBadge: E,
					buttonClassName: C,
					children: I
				} = e, R = f(e, ["label", "ariaLabel", "tooltipText", "tooltipColor", "icon", "iconProps", "onClick", "onTooltipShow", "onTooltipHide", "disabled", "dangerous", "separator", "sparkle", "showNewBadge", "buttonClassName", "children"]);
				let {
					canShowReactionsOnMessageHover: P
				} = u.ZP.useExperiment({
					location: "HoverBarButton"
				}, {
					autoTrackExposure: !0
				});
				return u.Xb.useExperiment({
					location: "HoverBarButton"
				}, {
					autoTrackExposure: !0
				}), (0, r.jsx)(o.ua7, {
					text: null != l ? l : n,
					color: null != g ? g : o.FGA.PRIMARY,
					"aria-label": n,
					onTooltipShow: S,
					onTooltipHide: x,
					hideOnClick: !0,
					tooltipClassName: h.tooltip,
					children: e => {
						var l, u;
						let {
							onMouseEnter: f,
							onMouseLeave: g,
							onClick: S
						} = e;
						return (0, r.jsxs)(r.Fragment, {
							children: [(0, r.jsxs)(c.zx, (l = p({
								ref: t,
								className: a()(C, {
									[h.hoverBarButton]: P
								}),
								onMouseEnter: f,
								onMouseLeave: g,
								onClick: e => {
									null == S || S(), y(e)
								},
								"aria-label": null != s ? s : n,
								disabled: j,
								dangerous: O
							}, R), u = u = {
								children: [null != m ? (0, r.jsx)(m, p({
									className: h.icon,
									color: "currentColor"
								}, b)) : null, null != I ? (0, r.jsx)("div", {
									className: a()(h.icon, h.buttonContent),
									children: I
								}) : null, _ && (0, r.jsx)(o.K1N, {}), E && (0, r.jsx)(o.IGR, {
									text: d.intl.string(d.t.y2b7CA),
									color: i.Z.BG_BRAND,
									className: h.newBadge
								})]
							}, Object.getOwnPropertyDescriptors ? Object.defineProperties(l, Object.getOwnPropertyDescriptors(u)) : (function(e, t) {
								var n = Object.keys(e);
								if (Object.getOwnPropertySymbols) {
									var r = Object.getOwnPropertySymbols(e);
									n.push.apply(n, r)
								}
								return n
							})(Object(u)).forEach(function(e) {
								Object.defineProperty(l, e, Object.getOwnPropertyDescriptor(u, e))
							}), l)), v && (0, r.jsx)(c.Z0, {})]
						})
					}
				})
			});

			function m(e) {
				let {
					className: t
				} = e;
				return (0, r.jsx)("div", {
					className: a()(h.separator, t)
				})
			}

			function b(e) {
				var {
					children: t
				} = e, n = f(e, ["children"]);
				let {
					canShowReactionsOnMessageHover: s
				} = u.ZP.useExperiment({
					location: "HoverBar"
				}, {
					autoTrackExposure: !0
				});
				return u.Xb.useExperiment({
					location: "HoverBar"
				}, {
					autoTrackExposure: !0
				}), (0, r.jsx)(c.ZP, {
					className: a()(n.className, h.popover, {
						[h.popoverReactionHoverBar]: s
					}),
					children: t
				})
			}
		},
		324701: function(e, t, n) {
			n.d(t, {
				x: () => m,
				z: () => g
			});
			var r = n(255367),
				s = n(481060),
				l = n(668781),
				a = n(100527),
				o = n(585483),
				i = n(192720),
				c = n(768943),
				u = n(175006),
				d = n(981631),
				h = n(989925),
				p = n(388032);

			function f(e, t) {
				if (null == e) return {};
				var n, r, s = function(e, t) {
					if (null == e) return {};
					var n, r, s = {},
						l = Object.keys(e);
					for (r = 0; r < l.length; r++) n = l[r], t.indexOf(n) >= 0 || (s[n] = e[n]);
					return s
				}(e, t);
				if (Object.getOwnPropertySymbols) {
					var l = Object.getOwnPropertySymbols(e);
					for (r = 0; r < l.length; r++) n = l[r], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (s[n] = e[n])
				}
				return s
			}
			async function g(e) {
				var {
					displayToast: t = !1
				} = e, g = f(e, ["displayToast"]);
				if (null == c.Z.getSavedMessage(g.channelId, g.messageId) && !(0, u.Z)()) return void(0, s.ZDy)(async () => {
					let {
						default: e
					} = await n.e("34906").then(n.bind(n, 639565));
					return t => (0, r.jsx)(e, function(e) {
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
						source: a.Z.FOR_LATER_HELPERS
					}, t))
				});
				if (null != await (0, i.XA)(g).catch(e => {
						var t, n, r;
						return (null == e || null == (t = e.body) ? void 0 : t.code) === d.evJ.TOO_MANY_SAVED_MESSAGES ? l.Z.show({
							title: p.intl.string(p.t.mlbiZW),
							body: p.intl.formatToPlainString(p.t["1zVbEB"], {
								max: h.D
							}),
							cancelText: p.intl.string(p.t.BddRzc),
							confirmText: p.intl.string(p.t.ZGbTc3),
							onConfirm: () => o.S.dispatch(d.CkL.TOGGLE_FOR_LATER)
						}) : (0, s.showToast)((0, s.createToast)(null != (r = null == e || null == (n = e.body) ? void 0 : n.message) ? r : p.intl.string(p.t.R0RpRU), s.ToastType.FAILURE)), null
					}) && t) {
					let e = null != g.dueAt ? p.intl.string(p.t.i1IsOz) : p.intl.string(p.t["WQdL//"]),
						t = null != g.dueAt ? s.ToastType.CLOCK : s.ToastType.BOOKMARK;
					(0, s.showToast)((0, s.createToast)(e, t))
				}
			}
			async function m(e) {
				var {
					displayToast: t = !1
				} = e, n = f(e, ["displayToast"]);
				if (null != await (0, i.ep)(n).catch(e => {
						var t, n;
						return (0, s.showToast)((0, s.createToast)(null != (n = null == e || null == (t = e.body) ? void 0 : t.message) ? n : p.intl.string(p.t.R0RpRU), s.ToastType.FAILURE)), null
					}) && t) {
					let e = null != n.dueAt ? p.intl.string(p.t.D0tS09) : p.intl.string(p.t["5KOMiY"]),
						t = null != n.dueAt ? s.ToastType.CLOCK : s.ToastType.BOOKMARK;
					(0, s.showToast)((0, s.createToast)(e, t))
				}
			}
		},
		575016: function(e, t, n) {
			n.d(t, {
				AT: () => g,
				fC: () => b,
				gr: () => m,
				hQ: () => f
			});
			var r, s = n(73800),
				l = n(913527),
				a = n.n(l),
				o = n(442837),
				i = n(493683),
				c = n(336197),
				u = n(131704),
				d = n(592125),
				h = n(981631),
				p = n(388032),
				f = ((r = {})[r.LONG = 0] = "LONG", r[r.SHORT = 1] = "SHORT", r);

			function g(e) {
				let {
					dueAt: t,
					now: n,
					type: r
				} = e;
				if (null == t) return {
					string: "",
					isOverdue: !1
				};
				let s = 0 === r ? p.t.TjNWND : p.t.H4gnX1,
					l = 0 === r ? p.t.haia19 : p.t["Uq7Y+/"],
					o = n > t;
				return {
					dueInText: p.intl.formatToPlainString(o ? l : s, {
						duration: a().duration(t.getTime() - n.getTime(), "millisecond").humanize()
					}),
					isOverdue: o
				}
			}

			function m(e) {
				let t = (0, o.e7)([d.Z], () => d.Z.getChannel(e.saveData.channelId));
				return s.useMemo(() => null != t ? t : null != e.message ? new u.nl({
					id: e.saveData.channelId,
					guild_id: e.saveData.guildId,
					type: h.d4z.UNKNOWN,
					name: p.intl.string(p.t.J90oLS)
				}) : void 0, [t, e])
			}
			async function b(e, t) {
				if ((null == t ? void 0 : t.type) === h.d4z.UNKNOWN && null == e.saveData.guildId) try {
					let t = await i.Z.fetchChannel(e.saveData.channelId);
					if (null == t.recipients || t.recipients.length > 1) return;
					await i.Z.ensurePrivateChannel(t.recipients.map(e => e.id))
				} catch (e) {}(0, c.Z)(h.Z5c.CHANNEL(null == t ? void 0 : t.getGuildId(), e.saveData.channelId, e.saveData.messageId), {
					openChannel: !0
				})
			}
		},
		175006: function(e, t, n) {
			n.d(t, {
				Z: () => a
			});
			var r = n(594174),
				s = n(111361),
				l = n(474936);

			function a() {
				let e = r.default.getCurrentUser();
				return (0, s.I5)(e, l.p9.TIER_2)
			}
		},
		429828: function(e, t, n) {
			n.d(t, {
				Z: () => l
			});
			var r = n(73800),
				s = n(192720);

			function l() {
				r.useEffect(() => {
					(0, s.sE)()
				}, [])
			}
		},
		664559: function(e, t, n) {
			n.d(t, {
				Z: () => o
			}), n(388685), n(539854);
			var r = n(73800),
				s = n(768943),
				l = n(429828);

			function a() {
				return s.Z.getSavedMessages().map(e => e.saveData)
			}

			function o() {
				let [e, t] = r.useState(a), n = r.useRef(s.Z.getIsStale());
				return r.useEffect(() => {
					let e = s.Z.getLastChanged();

					function r() {
						let r = s.Z.getLastChanged();
						if (e !== r) {
							if (e = r, n.current && !s.Z.getIsStale()) {
								n.current = !1, t(a());
								return
							}
							t(e => {
								let t = [...e],
									n = new Map(s.Z.getSavedMessages().map(e => [e.saveData.messageId, e]));
								for (let r of e) n.has(r.messageId) ? n.delete(r.messageId) : t.splice(t.indexOf(r), 1);
								for (let e of n.values()) t.push(e.saveData);
								return t
							})
						}
					}
					return s.Z.addChangeListener(r), () => {
						s.Z.removeChangeListener(r)
					}
				}, []), (0, l.Z)(), e
			}
		},
		954551: function(e, t, n) {
			n.d(t, {
				Z: () => c
			});
			var r = n(255367);
			n(73800);
			var s = n(481060),
				l = n(665149),
				a = n(388035),
				o = n(453473),
				i = n(388032);

			function c(e) {
				let {
					onOpen: t,
					onClose: n,
					className: c
				} = e;
				return (0, r.jsx)(o.P, {
					onOpen: t,
					onClose: n,
					popoutPosition: "bottom",
					popoutAlign: "right",
					children: (e, t, n, o, u) => {
						var d, h;
						return (0, r.jsx)(a.U, {
							location: "bookmarks-button",
							targetElementRef: u,
							children: (0, r.jsx)(l.JO, (d = function(e) {
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
							}({}, n), h = h = {
								ref: u,
								className: c,
								onClick: e,
								icon: s.plf,
								"aria-label": i.intl.string(i.t["2pAkDA"]),
								tooltip: t ? null : i.intl.string(i.t["2pAkDA"]),
								selected: t,
								showBadge: o
							}, Object.getOwnPropertyDescriptors ? Object.defineProperties(d, Object.getOwnPropertyDescriptors(h)) : (function(e, t) {
								var n = Object.keys(e);
								if (Object.getOwnPropertySymbols) {
									var r = Object.getOwnPropertySymbols(e);
									n.push.apply(n, r)
								}
								return n
							})(Object(h)).forEach(function(e) {
								Object.defineProperty(d, e, Object.getOwnPropertyDescriptor(h, e))
							}), d))
						})
					}
				})
			}
		},
		767893: function(e, t, n) {
			n.d(t, {
				Z: () => y
			});
			var r = n(255367),
				s = n(120356),
				l = n.n(s),
				a = n(708816),
				o = n(657707),
				i = n(442837),
				c = n(481060),
				u = n(933557),
				d = n(471445),
				h = n(266076),
				p = n(565138),
				f = n(430824),
				g = n(388032),
				m = n(432513);
			let b = {
				top: 8,
				bottom: 8,
				left: -4,
				right: -4
			};

			function y(e) {
				let {
					channel: t,
					children: n
				} = e;
				return (0, r.jsx)(a.tE, {
					offset: b,
					children: (0, r.jsxs)("div", {
						className: m.channelHeader,
						"data-recents-channel": t.id,
						children: [(0, r.jsx)(S, {
							channel: t
						}), t.isPrivate() ? null : (0, r.jsx)(o.Fbu, {
							size: "xxs"
						}), (0, r.jsx)(x, {
							channel: t
						}), n]
					})
				})
			}

			function S(e) {
				let {
					channel: t
				} = e, n = (0, i.e7)([f.Z], () => f.Z.getGuild(t.guild_id));
				return null != n ? (0, r.jsx)(p.Z, {
					className: m.icon,
					guild: n,
					size: p.Z.Sizes.SMALLER,
					"aria-hidden": !0
				}) : t.isGroupDM() ? (0, r.jsx)(h.Z, {
					channel: t,
					size: c.EFr.SIZE_24,
					experimentLocation: "ForLaterChannelHeader"
				}) : (0, r.jsx)("div", {
					className: l()(m.icon, m.dmIcon),
					children: (0, r.jsx)(o.kBi, {
						size: "xxs"
					})
				})
			}

			function x(e) {
				let {
					channel: t
				} = e, n = (0, i.e7)([f.Z], () => f.Z.getGuild(t.guild_id)), s = (0, u.ZP)(t, !1), l = (0, d.KS)(t, n), a = t.isPrivate() || null == l, o = t.isDM() ? g.intl.formatToPlainString(g.t.smD7XV, {
					username: s
				}) : s;
				return (0, r.jsxs)("div", {
					className: m.channelNameSection,
					children: [a ? null : (0, r.jsx)(l, {
						className: m.channelTypeIcon,
						size: "xxs"
					}), (0, r.jsx)(c.X6q, {
						variant: "text-md/semibold",
						color: "header-secondary",
						children: o
					})]
				})
			}
		},
		388035: function(e, t, n) {
			n.d(t, {
				U: () => b
			}), n(388685);
			var r = n(255367),
				s = n(704215),
				l = n(755721),
				a = n(481060),
				o = n(243778),
				i = n(970731),
				c = n(2818),
				u = n(921944),
				d = n(388032),
				h = n(327298),
				p = n(235810);
			let f = s.z.FOR_LATER_POPOUT_COACHMARK,
				g = () => (0, r.jsx)("div", {
					className: h.imageContainer,
					children: (0, r.jsx)("img", {
						className: h.image,
						src: p,
						alt: ""
					})
				}),
				m = e => (0, r.jsx)(i.ZP, {
					className: h.container,
					asset: (0, r.jsx)(g, {}),
					header: d.intl.string(d.t.qPbFKy),
					content: d.intl.string(d.t.URrJq6),
					buttonCTA: d.intl.string(d.t["NX+WJC"]),
					buttonProps: {
						color: l.Tt.WHITE,
						innerClassName: h.primaryButton
					},
					onClick: () => e(u.L.USER_DISMISS),
					markAsDismissed: e,
					caretPosition: i.DF.TOP_RIGHT
				});

			function b(e) {
				let {
					location: t,
					children: n,
					targetElementRef: s
				} = e, {
					enabled: l,
					inInbox: i
				} = c.Z.useExperiment({
					location: "ForLaterCoachmarkWeb"
				}, {
					autoTrackExposure: !1
				}), [u, d] = (0, o.US)(l && t === (i ? "inbox-button" : "bookmarks-button") ? [f] : [], void 0);
				return u !== f ? n : (0, r.jsx)(a.yRy, {
					targetElementRef: s,
					renderPopout: () => m(d),
					position: "bottom",
					align: "right",
					animation: a.yRy.Animation.TRANSLATE,
					shouldShow: !0,
					children: () => n
				})
			}
		},
		206697: function(e, t, n) {
			n.d(t, {
				w: () => x
			});
			var r = n(255367),
				s = n(73800),
				l = n(657707),
				a = n(793030),
				o = n(755721),
				i = n(481060),
				c = n(100527),
				u = n(436774),
				d = n(767714),
				h = n(74538),
				p = n(175006),
				f = n(981631),
				g = n(474936),
				m = n(388032),
				b = n(491350),
				y = n(492764),
				S = n(235810);

			function x() {
				return (0, p.Z)() ? (0, r.jsx)("div", {
					className: b.emptyContainer,
					children: (0, r.jsxs)("div", {
						className: b.emptyInner,
						children: [(0, r.jsx)("img", {
							src: y,
							className: b.image,
							alt: ""
						}), (0, r.jsx)(i.X6q, {
							className: b.header,
							variant: "heading-xl/semibold",
							color: "text-default",
							children: m.intl.string(m.t.erEf2t)
						}), (0, r.jsx)(a.xv, {
							variant: "text-md/medium",
							color: "text-muted",
							children: m.intl.string(m.t.NaRCXV)
						})]
					})
				}) : (0, r.jsxs)("div", {
					className: b.emptyContainer,
					children: [(0, r.jsxs)("div", {
						className: b.emptyInner,
						children: [(0, r.jsx)("img", {
							src: S,
							className: b.image,
							alt: ""
						}), (0, r.jsx)(i.X6q, {
							className: b.header,
							variant: "heading-xl/semibold",
							color: "text-default",
							children: m.intl.string(m.t.w4DRbW)
						}), (0, r.jsx)(a.xv, {
							variant: "text-md/medium",
							color: "text-muted",
							children: m.intl.string(m.t.F6u3Ex)
						})]
					}), (0, r.jsx)(j, {})]
				})
			}

			function j() {
				let e = (0, h.Px)(g.p9.TIER_2),
					t = s.useCallback(() => (0, i.ZDy)(async () => {
						let {
							default: e
						} = await n.e("50740").then(n.bind(n, 639565));
						return t => (0, r.jsx)(e, function(e) {
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
							source: c.Z.FOR_LATER_POPOUT
						}, t))
					}), []),
					p = m.intl.format(m.t.qXh3fn, {
						nitroTierName: e,
						onClick: t
					});
				return (0, r.jsxs)("div", {
					className: b.upsellContainer,
					children: [(0, r.jsx)(l.SrA, {
						size: "md",
						color: u.JX.PREMIUM_TIER_2
					}), (0, r.jsx)(a.xv, {
						variant: "text-xs/medium",
						color: "header-primary",
						className: b.upsellText,
						children: p
					}), (0, r.jsx)(d.Z, {
						className: b.upsellButton,
						size: o.Ph.TINY,
						shinyButtonClassName: b.upsellButton,
						subscriptionTier: g.Si.TIER_2,
						premiumModalAnalyticsLocation: {
							section: f.jXE.FOR_LATER_POPOUT_UPSELL
						}
					})]
				})
			}
		},
		453473: function(e, t, n) {
			n.d(t, {
				K: () => B,
				P: () => U
			}), n(388685);
			var r = n(255367),
				s = n(73800),
				l = n(120356),
				a = n.n(l),
				o = n(512722),
				i = n.n(o),
				c = n(913527),
				u = n.n(c),
				d = n(990547),
				h = n(91192),
				p = n(442837),
				f = n(481060),
				g = n(239091),
				m = n(494404),
				b = n(724757),
				y = n(213609),
				S = n(294218),
				x = n(373662),
				j = n(695346),
				O = n(496675),
				v = n(626135),
				_ = n(585483),
				E = n(70956),
				C = n(324701),
				I = n(575016),
				R = n(768943),
				P = n(686478),
				T = n(664559),
				N = n(767893),
				k = n(206697),
				w = n(74551),
				Z = n(981631),
				A = n(388032),
				M = n(585693);

			function F(e) {
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
			let D = {
				offset: {
					left: 4,
					right: -12
				}
			};

			function H(e) {
				let {
					closePopout: t
				} = e;
				return (0, r.jsx)(f.VqE, {
					"aria-label": A.intl.string(A.t["2pAkDA"]),
					children: (0, r.jsxs)("div", {
						className: M.popoutContainer,
						children: [(0, r.jsx)(m.h4, {
							icon: f.plf,
							title: A.intl.string(A.t["2pAkDA"])
						}), (0, r.jsx)(B, {
							closePopout: t
						})]
					})
				})
			}

			function B(e) {
				let {
					closePopout: t
				} = e, n = (0, T.Z)();
				return ((0, y.Z)({
					type: d.ImpressionTypes.POPOUT,
					name: d.ImpressionNames.FOR_LATER_LIST_VIEWED,
					properties: {
						total_count: n.length,
						overdue_count: R.Z.getOverdueMessageReminderCount()
					}
				}, {}, [n.length]), 0 === n.length) ? (0, r.jsx)(k.w, {}) : (0, r.jsx)(G, {
					savedMessageKeys: n,
					closePopout: t
				})
			}

			function U(e) {
				let {
					onOpen: t,
					onClose: n,
					children: l,
					popoutPosition: a,
					popoutAlign: o
				} = e, [i, c] = s.useState(!1), u = s.useRef(null), d = s.useCallback(() => {
					c(!1), i && (null == n || n())
				}, [n, i]), h = s.useCallback(() => {
					c(!i), i ? null == n || n() : null == t || t()
				}, [n, t, i]);
				s.useEffect(() => (_.S.subscribe(Z.CkL.TOGGLE_FOR_LATER, h), () => void _.S.unsubscribe(Z.CkL.TOGGLE_FOR_LATER, h)), [h]);
				let g = (0, p.e7)([R.Z], () => R.Z.hasOverdueReminder(), []);
				return (0, r.jsx)(f.yRy, {
					targetElementRef: u,
					animation: f.yRy.Animation.NONE,
					position: a,
					align: o,
					autoInvert: !1,
					shouldShow: i,
					onRequestClose: d,
					renderPopout: function() {
						return (0, r.jsx)(H, {
							closePopout: d
						})
					},
					ignoreModalClicks: !0,
					children: (e, t) => {
						let {
							isShown: n
						} = t;
						return l(h, n, e, g, u)
					}
				})
			}

			function G(e) {
				let {
					savedMessageKeys: t,
					closePopout: n
				} = e, l = s.useRef(null), a = (0, b.Z)("for-later", l), [o, i] = s.useState(new Date);
				return s.useEffect(() => {
					let e = setInterval(() => i(new Date), E.Z.Millis.MINUTE);
					return () => {
						clearInterval(e)
					}
				}, []), (0, r.jsx)(h.bG, {
					navigator: a,
					children: (0, r.jsx)(h.SJ, {
						children: e => {
							var {
								ref: s
							} = e, a = function(e, t) {
								if (null == e) return {};
								var n, r, s = function(e, t) {
									if (null == e) return {};
									var n, r, s = {},
										l = Object.keys(e);
									for (r = 0; r < l.length; r++) n = l[r], t.indexOf(n) >= 0 || (s[n] = e[n]);
									return s
								}(e, t);
								if (Object.getOwnPropertySymbols) {
									var l = Object.getOwnPropertySymbols(e);
									for (r = 0; r < l.length; r++) n = l[r], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (s[n] = e[n])
								}
								return s
							}(e, ["ref"]);
							return (0, r.jsx)(f.h21, L(F({
								ref: e => {
									var t;
									l.current = e, s.current = null != (t = null == e ? void 0 : e.getScrollerNode()) ? t : null
								},
								className: M.messagesScroller
							}, a), {
								children: t.map(e => (0, r.jsx)(z, {
									savedMessageKey: e,
									closePopout: n,
									throttledNow: o
								}, e.messageId))
							}))
						}
					})
				})
			}

			function W(e) {
				let {
					savedMessage: t,
					closePopout: n,
					throttledNow: l
				} = e, o = (0, I.gr)(t), i = s.useCallback(async e => {
					var r;
					await (0, I.fC)(t, o), e.shiftKey || n(), v.default.track(Z.rMx.FOR_LATER_SAVED_MESSAGE_JUMP, {
						channel_id: t.saveData.channelId,
						message_id: t.saveData.messageId,
						message_author_id: null == (r = t.message) ? void 0 : r.author.id,
						type: null != t.saveData.dueAt ? P._l.REMINDER : P._l.BOOKMARK,
						due_duration: null != t.saveData.dueAt ? u()().diff(t.saveData.dueAt) : void 0
					})
				}, [n, t, o]), c = (0, p.e7)([O.Z], () => !!((null == o ? void 0 : o.type) === Z.d4z.UNKNOWN || (null == o ? void 0 : o.isPrivate())) || O.Z.can(Z.Plq.VIEW_CHANNEL, o));
				return null != o && null != t.message && c ? (0, r.jsxs)("div", {
					className: M.messageContainer,
					children: [(0, r.jsx)(f.P3F, {
						className: M.clickableMessageBackground,
						onClick: i,
						"aria-label": A.intl.string(A.t["+TSRGB"])
					}), null != t.saveData.dueAt ? (0, r.jsx)(w.Z, {
						reminder: t,
						throttledNow: l
					}) : null, (0, r.jsx)(N.Z, {
						channel: o
					}), (0, r.jsx)(S.Z, {
						message: t.message,
						channel: o,
						className: M.message,
						compact: j.jU.getSetting(),
						animateAvatar: !1,
						focusProps: D,
						trackAnnouncementViews: !0
					}, t.message.id), (0, r.jsx)(x.ZP, {
						className: M.hoverBar,
						children: (0, r.jsx)(q, {
							savedMessage: t,
							jumpToMessage: i
						})
					})]
				}) : (0, r.jsxs)("div", {
					className: a()(M.messageContainer, M.deletedMessage),
					children: [(0, r.jsx)("div", {
						className: M.deleteIcon,
						children: (0, r.jsx)(f.P4T, {
							size: "xxs",
							color: f.TVs.colors.INTERACTIVE_ACTIVE
						})
					}), (0, r.jsx)(f.X6q, {
						variant: "text-md/semibold",
						color: "header-secondary",
						children: null != t.saveData.dueAt ? A.intl.string(A.t["wuQm+v"]) : A.intl.string(A.t.o572FR)
					}), (0, r.jsx)(x.ZP, {
						className: M.hoverBar,
						children: (0, r.jsx)(x.sF, {
							label: A.intl.string(A.t.SvXS1d),
							icon: f.XHJ,
							dangerous: !0,
							onClick: () => (0, C.x)(t.saveData)
						}, "delete")
					})]
				})
			}

			function z(e) {
				let {
					savedMessageKey: t,
					closePopout: n,
					throttledNow: s
				} = e, l = (0, p.e7)([R.Z], () => R.Z.getSavedMessage(t.channelId, t.messageId));
				return null == l ? null : (0, r.jsx)(W, {
					savedMessage: l,
					closePopout: n,
					throttledNow: s
				})
			}

			function q(e) {
				let {
					savedMessage: t,
					jumpToMessage: s
				} = e;
				return (i()(null != t.message, "Saved message must be cached for For Later action buttons"), null != t.saveData.dueAt) ? (0, r.jsxs)(r.Fragment, {
					children: [(0, r.jsx)(x.sF, {
						label: A.intl.string(A.t.yjGtdH),
						icon: f.dz2,
						onClick: () => (0, C.z)({
							channelId: t.saveData.channelId,
							messageId: t.saveData.messageId,
							dueAt: void 0
						})
					}, "mark-complete"), (0, r.jsx)(x.sF, {
						label: A.intl.string(A.t.vrbqs7),
						icon: f.vdY,
						onClick: e => (0, g.jW)(e, async () => {
							let {
								MessageReminderEditMenu: e
							} = await n.e("69818").then(n.bind(n, 898150));
							return n => (0, r.jsx)(e, L(F({}, n), {
								label: A.intl.string(A.t.roMu1N),
								message: t.message
							}))
						})
					}, "edit-reminder"), (0, r.jsx)(x.fO, {}), (0, r.jsx)(x.sF, {
						label: A.intl.string(A.t["+TSRGB"]),
						icon: f.d4D,
						onClick: e => s(e)
					}, "jump-to-message"), (0, r.jsx)(x.sF, {
						label: A.intl.string(A.t.SvXS1d),
						icon: f.plf,
						onClick: () => (0, C.x)(t.saveData)
					}, "remove-reminder")]
				}) : (0, r.jsxs)(r.Fragment, {
					children: [(0, r.jsx)(x.sF, {
						label: A.intl.string(A.t.mJ3P0N),
						icon: f.T39,
						onClick: e => (0, g.jW)(e, async () => {
							let {
								MessageReminderEditMenu: e
							} = await n.e("69818").then(n.bind(n, 898150));
							return n => (0, r.jsx)(e, L(F({}, n), {
								label: A.intl.string(A.t.mJ3P0N),
								message: t.message
							}))
						})
					}, "create-reminder"), (0, r.jsx)(x.sF, {
						label: A.intl.string(A.t["+TSRGB"]),
						icon: f.d4D,
						onClick: e => s(e)
					}, "jump-to-message"), (0, r.jsx)(x.sF, {
						label: A.intl.string(A.t.SvXS1d),
						icon: f.plf,
						onClick: () => (0, C.x)(t.saveData)
					}, "remove-bookmark")]
				})
			}
		},
		74551: function(e, t, n) {
			n.d(t, {
				Z: () => o
			});
			var r = n(255367),
				s = n(481060),
				l = n(575016),
				a = n(294117);

			function o(e) {
				let {
					reminder: t,
					throttledNow: n
				} = e, {
					dueInText: o,
					isOverdue: i
				} = (0, l.AT)({
					dueAt: null == t ? void 0 : t.saveData.dueAt,
					now: n,
					type: l.hQ.SHORT
				});
				if (null == t.saveData.dueAt) return null;
				let c = i ? "text-danger" : "text-default";
				return (0, r.jsxs)("div", {
					className: a.container,
					children: [(0, r.jsx)("div", {
						className: a.icon,
						children: (0, r.jsx)(s.T39, {
							size: "xxs",
							color: "text-danger" === c ? s.TVs.colors.TEXT_DANGER : s.TVs.colors.INTERACTIVE_ACTIVE
						})
					}), (0, r.jsx)(s.X6q, {
						variant: "text-md/semibold",
						color: c,
						children: o
					})]
				})
			}
		},
		854709: function(e, t, n) {
			n.d(t, {
				X: () => s
			});
			var r = n(594174);

			function s() {
				var e, t;
				return null != (t = null == (e = r.default.getCurrentUser()) ? void 0 : e.isStaff()) && t
			}
		},
		208450: function(e, t, n) {
			n.d(t, {
				Z: () => G
			}), n(35282), n(704826);
			var r = n(255367),
				s = n(73800),
				l = n(120356),
				a = n.n(l),
				o = n(399834),
				i = n(299608),
				c = n.n(i),
				u = n(442837),
				d = n(481060),
				h = n(603263),
				p = n(349033),
				f = n(999650),
				g = n(857595),
				m = n(607070),
				b = n(313201),
				y = n(977885),
				S = n(778877),
				x = n(903488),
				j = n(592125),
				O = n(768119),
				v = n(944486),
				_ = n(585483),
				E = n(72006),
				C = n(405656),
				I = n(181389),
				R = n(854709),
				P = n(652399),
				T = n(861262),
				N = n(611004),
				k = n(778177),
				w = n(981631),
				Z = n(388032),
				A = n(665333);

			function M(e, t, n) {
				return t in e ? Object.defineProperty(e, t, {
					value: n,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : e[t] = n, e
			}
			n(539658);
			let F = (0, b.hQ)(),
				L = c()(h.yC, 500);
			class D extends s.PureComponent {
				componentDidMount() {
					var e, t;
					_.S.subscribe(w.CkL.PERFORM_SEARCH, this.search), _.S.subscribe(w.CkL.SET_SEARCH_QUERY, this.handleSetSearchQuery), _.S.subscribe(w.CkL.FOCUS_SEARCH, this.handleFocusSearch), null == (t = this._editorRef) || null == (e = t.editor) || e.setAttribute("aria-haspopup", "listbox")
				}
				componentDidUpdate(e) {
					let {
						editorState: t,
						searchId: n
					} = this.props;
					if (t !== e.editorState) {
						let e = (0, C.kG)(E.Sq(t)),
							r = I.g9(e, t);
						h.u$(n, e, r), null != this._editorRef && E.iE(this._editorRef.editor)
					}
				}
				componentWillUnmount() {
					_.S.unsubscribe(w.CkL.PERFORM_SEARCH, this.search), _.S.unsubscribe(w.CkL.SET_SEARCH_QUERY, this.handleSetSearchQuery), _.S.unsubscribe(w.CkL.FOCUS_SEARCH, this.handleFocusSearch)
				}
				tokenize(e) {
					let t = (0, C.kG)(E.Sq(e)).filter(e => e.type !== p.ZP.NON_TOKEN_TYPE);
					return E.lv(t, e, f.ZP)
				}
				clearSearch() {
					let {
						searchId: e
					} = this.props;
					null != e && (h.qt(e), y.Z.clearSearchState(e))
				}
				handlePastedFiles() {
					return "handled"
				}
				handleDroppedFiles() {
					return "handled"
				}
				handleDrop() {
					return "handled"
				}
				renderInput(e) {
					let {
						editorState: t,
						placeholder: n
					} = this.props;
					return (0, r.jsx)(o.Editor, {
						autoCorrect: "off",
						ref: this.setEditorRef,
						onBlur: this.onBlur,
						onFocus: this.onFocus,
						handleReturn: this.handleReturn,
						handleBeforeInput: this.handleBeforeInput,
						handleKeyCommand: this.handleKeyCommand,
						handlePastedText: this.handlePastedText,
						handlePastedFiles: this.handlePastedFiles,
						handleDroppedFiles: this.handleDroppedFiles,
						handleDrop: this.handleDrop,
						keyBindingFn: this.handleKeyBind,
						placeholder: null != n ? n : Z.intl.string(Z.t["5h0QOD"]),
						editorState: t,
						onChange: this.setEditorState,
						role: "combobox",
						ariaExpanded: e,
						ariaControls: e ? F : void 0,
						ariaLabel: Z.intl.string(Z.t["5h0QOD"]),
						ariaAutoComplete: "list"
					})
				}
				render() {
					let {
						searchId: e,
						editorState: t,
						hasResults: n,
						className: s
					} = this.props, {
						focused: l
					} = this.state, o = E.Sq(t).length > 0;
					return null == e ? null : (0, r.jsx)(d.yRy, {
						targetElementRef: this._containerRef,
						renderPopout: this.renderPopout,
						position: "bottom",
						animation: d.yRy.Animation.NONE,
						shouldShow: l,
						autoInvert: !1,
						children: (t, i) => {
							var c;
							let {
								isShown: u
							} = i;
							return (0, r.jsx)("div", {
								className: s,
								ref: this._containerRef,
								children: (0, r.jsx)("div", {
									className: a()(A.search, {
										[A.open]: o || l,
										[A.focused]: l
									}),
									children: (0, r.jsx)(d.tEY, {
										focusTarget: {
											current: null == (c = this._editorRef) ? void 0 : c.editor
										},
										ringTarget: this._searchBarRef,
										children: (0, r.jsxs)("div", {
											className: A.searchBar,
											ref: this._searchBarRef,
											children: [this.renderInput(u), (0, r.jsx)(d.BK9, {
												onClear: this.handleClearSearch,
												hasContent: o || n,
												className: A.icon,
												isLoading: !1
											})]
										}, e)
									})
								})
							})
						}
					})
				}
				constructor(e) {
					super(e), M(this, "state", {
						focused: !1,
						selectedIndex: void 0
					}), M(this, "_editorRef", void 0), M(this, "_containerRef", s.createRef()), M(this, "_searchBarRef", s.createRef()), M(this, "_searchPopoutRef", s.createRef()), M(this, "handleSetSearchQuery", e => {
						let {
							query: t,
							anchor: n,
							focus: r,
							performSearch: s,
							replace: l
						} = e, {
							editorState: a
						} = this.props, o = E.Sq(a);
						" " !== t.charAt(t.length - 1) && (t += " "), null != n && 0 !== n && " " !== o.charAt(n - 1) && " " !== t.charAt(0) && (t = " " + t), l ? (a = E.c2(t, a), n = 0) : a = E.x0(t, a, n, r), a = E.Hl(a, 512), a = this.tokenize(a);
						let i = Number(n) + t.length;
						a = E.iK(i, a), this.setEditorState(a), s && this.search({
							queryString: E.Sq(a)
						})
					}), M(this, "handleSelectedIndexChanged", e => {
						var t, n;
						null == (n = this._editorRef) || null == (t = n.editor) || t.setAttribute("aria-activedescendant", null != e ? "".concat(F, "-").concat(e) : void 0), this.setState({
							selectedIndex: e
						})
					}), M(this, "renderPopout", () => (0, r.jsx)(k.ZP, {
						ref: this._searchPopoutRef,
						navId: F,
						onSelectedIndexChanged: this.handleSelectedIndexChanged
					})), M(this, "search", e => {
						let {
							searchId: t,
							isSearching: n
						} = this.props, {
							queryString: r,
							searchEverywhere: s
						} = null != e ? e : {};
						if (null == r || "" === r) {
							let {
								editorState: e
							} = this.props;
							r = E.Sq(e)
						}
						if (null != t && !n) {
							let e = (0, C.kG)(r),
								t = (0, C.$G)(e);
							for (let t = 0; t < e.length; t++)(0, C.Fr)(e[t], e[t + 1]) || (r = r.substring(0, e[t].start) + r.substring(e[t].end));
							if (0 === e.length || 0 === Object.keys(t).length) return !1;
							this.props.onSearch({
								queryString: r,
								query: t,
								searchEverywhere: null != s && s
							}), d.uvj.announce(Z.intl.string(Z.t.pKCxWF)), this.handleBlur(!0)
						}
						return !0
					}), M(this, "handleClearSearch", e => {
						let {
							editorState: t,
							searchId: n,
							searchType: r
						} = this.props, {
							focused: s
						} = this.state;
						if (e.preventDefault(), e.stopPropagation(), "" === E.Sq(t)) return void this.focusEditor();
						t = E.Hl(t, 0), this.setEditorState(t), null != n && (0, P.cy)({
							searchType: r,
							searchId: n
						}), s || Promise.resolve().then(() => this.blurEditor())
					}), M(this, "handleFocusSearch", e => {
						let {
							prefillCurrentChannel: t
						} = e;
						if (!t) return void this.focusEditor();
						let n = v.Z.getChannelId(),
							r = j.Z.getChannel(n);
						if ((null == r ? void 0 : r.isThread()) && (r = j.Z.getChannel(null == r ? void 0 : r.parent_id)), null == r) return void this.focusEditor();
						let {
							searchId: s,
							searchType: l
						} = this.props, a = (0, S.a)({
							location: "SearchBar_handleFocusSearch"
						}), o = this.props.searchId === w.aib.DMS && a;
						if (r.isPrivate() && !o) return void this.focusEditor();
						let i = (0, C.X3)(r);
						if (null == i) return void this.focusEditor();
						(0, P.PJ)({
							searchType: l,
							searchId: s
						}), Promise.resolve().then(() => {
							let {
								_editorRef: e
							} = this;
							null == e || e.focus(), this.handleSetSearchQuery({
								query: f.ZP[w.dCx.FILTER_IN].key + "".concat(i, " "),
								replace: !0
							})
						})
					}), M(this, "focusEditor", () => {
						let {
							_editorRef: e
						} = this;
						null != e && Promise.resolve().then(() => e.focus())
					}), M(this, "blurEditor", () => {
						let {
							_editorRef: e
						} = this;
						null != e && Promise.resolve().then(() => e.blur())
					}), M(this, "setEditorRef", e => {
						this._editorRef = e
					}), M(this, "onFocus", () => {
						let {
							searchId: e,
							searchType: t,
							isSearchActive: n
						} = this.props;
						this.setState({
							focused: !0
						}), null == e || n || (0, P.I1)({
							searchId: e,
							searchType: t
						})
					}), M(this, "handleBlur", e => {
						let {
							searchId: t,
							searchType: n,
							isSearchActive: r
						} = this.props;
						this.setState({
							focused: !1
						}, () => {
							null == t || r || e || (0, P.IZ)({
								searchId: t,
								searchType: n
							}), E.xb(this.props.editorState) && this.clearSearch()
						})
					}), M(this, "onBlur", e => {
						this.handleBlur()
					}), M(this, "handleOption", e => null != e && (-1 === e.state.selectedIndex && e.shouldShowSearchInSelectedChannel() ? e.handleSearchInChannel() : e.selectOption())), M(this, "handleReturn", e => {
						let {
							shiftKey: t
						} = e;
						e.preventDefault();
						let {
							current: n
						} = this._searchPopoutRef;
						return this.handleOption(n) || ((0, R.X)() && t ? this.search({
							searchEverywhere: !0
						}) : this.search()), "handled"
					}), M(this, "handleBeforeInput", e => {
						let {
							editorState: t
						} = this.props, {
							focused: n
						} = this.state;
						return E.Sq(t).length >= 512 || (t = E.x0(e, t), t = E.Hl(t, 512), t = this.tokenize(t), this.setEditorState(t), n || this.setState({
							focused: !0
						})), "handled"
					}), M(this, "handleKeyCommand", e => {
						let {
							editorState: t
						} = this.props, {
							focused: n
						} = this.state;
						switch (e) {
							case "backspace":
							case "backspace-word":
							case "backspace-to-start-of-line":
							case "delete":
							case "delete-word":
								return t = E.yd(e, t), t = this.tokenize(t), this.setEditorState(t), n || this.setState({
									focused: !0
								}), "handled";
							case "transpose-characters":
							case "move-selection-to-start-of-block":
							case "move-selection-to-end-of-block":
								return t = E.Zn(e, t), t = this.tokenize(t), this.setEditorState(t), "handled";
							case "split-block":
							case "underline":
							case "bold":
							case "italic":
								return "handled"
						}
						return "not-handled"
					}), M(this, "handlePastedText", e => {
						let {
							editorState: t
						} = this.props, {
							focused: n
						} = this.state;
						return e = null != e ? e.replace(/\n/g, "") : "", t = E.x0(e, t), t = E.Hl(t, 512), t = this.tokenize(t), n || this.setState({
							focused: !0
						}), this.setEditorState(t), "handled"
					}), M(this, "setEditorState", e => {
						let {
							searchId: t
						} = this.props;
						h.j8(t, e)
					}), M(this, "handleKeyBind", e => {
						let {
							key: t,
							metaKey: n,
							shiftKey: r
						} = e, {
							editorState: s,
							searchId: l,
							keyboardModeEnabled: a
						} = this.props;
						if (e.stopPropagation(), "Escape" === t) {
							if (e.preventDefault(), E.xb(s)) this.blurEditor();
							else {
								let e = E.FZ(s);
								h.j8(l, e), this.setState({
									focused: !0
								})
							}
							return !0
						}
						if ("ArrowUp" === t) {
							e.preventDefault();
							let {
								current: t
							} = this._searchPopoutRef;
							return null != t && t.focusPreviousOption(), !0
						}
						if ("ArrowDown" === t) {
							e.preventDefault();
							let {
								current: t
							} = this._searchPopoutRef;
							return null != t && t.focusNextOption(), !0
						}
						if ("Tab" === t) {
							if (a) return;
							return (0, g.Qj)(), !0
						}
						if ("Home" === t || "ArrowLeft" === t && n) return e.preventDefault(), s = r ? E.R8(s) : E.eE(s), this.setEditorState(s), !0;
						if ("End" === t || "ArrowRight" === t && n) return e.preventDefault(), s = r ? E.Wg(s) : E.NJ(s), this.setEditorState(s), !0;
						if (("Delete" === t || "Backspace" === t) && n) {
							let e = E.FZ(s);
							return this.setEditorState(e), !0
						}
						return E.q0(e)
					}), (0, C.WU)()
				}
			}

			function H(e) {
				let {
					isSearchActive: t,
					searchId: n,
					searchType: r
				} = e, l = s.useRef(t);
				s.useEffect(() => {
					l.current && !t && (l.current = !1, (0, P.IZ)({
						searchId: n,
						searchType: r
					})), !l.current && t && (l.current = !0)
				}, [t, n, r])
			}

			function B(e) {
				let {
					className: t,
					keyboardModeEnabled: n,
					editorState: l
				} = e, a = s.useMemo(() => ({
					type: w.aib.DMS
				}), []), o = (0, u.e7)([x.Z], () => {
					let e = x.Z.getTotalCount(w.aib.DMS);
					return null != e && e > 0
				}), i = (0, u.e7)([x.Z], () => x.Z.getIsFetching(w.aib.DMS)), c = i || o;
				H({
					isSearchActive: c,
					searchId: w.aib.DMS,
					searchType: w.aib.DMS
				});
				let d = s.useCallback(e => {
					let {
						queryString: t
					} = e;
					N.Z.fetchCrossDMMessages({
						searchContext: a,
						selectedPageIndex: 0,
						queryString: t
					})
				}, [a]);
				return (0, r.jsx)(D, {
					className: t,
					searchId: w.aib.DMS,
					searchType: w.aib.DMS,
					isSearching: i,
					editorState: l,
					hasResults: o,
					keyboardModeEnabled: n,
					onSearch: d,
					isSearchActive: c,
					placeholder: Z.intl.string(Z.t.m7OrlZ)
				})
			}

			function U(e) {
				let {
					className: t,
					keyboardModeEnabled: n,
					editorState: l
				} = e, a = (0, u.e7)([O.Z], () => O.Z.getCurrentSearchId()), o = (0, T.k)(a), i = (0, u.e7)([O.Z], () => O.Z.isActive(a)), c = (0, u.e7)([O.Z], () => O.Z.hasResults(a)), d = (0, u.e7)([O.Z], () => null != a && O.Z.isSearching(a));
				H({
					isSearchActive: i,
					searchId: a,
					searchType: o
				});
				let h = s.useCallback(e => {
					let {
						queryString: t,
						query: n,
						searchEverywhere: r
					} = e;
					null != a && L(a, n, t, !!r)
				}, [a]);
				return (0, r.jsx)(D, {
					className: t,
					searchId: a,
					searchType: o,
					isSearching: d,
					editorState: l,
					hasResults: c,
					keyboardModeEnabled: n,
					onSearch: h,
					isSearchActive: i
				})
			}

			function G(e) {
				let {
					className: t
				} = e, n = (0, u.e7)([O.Z], () => O.Z.getCurrentSearchId()), l = (0, u.e7)([m.Z], () => m.Z.keyboardModeEnabled), a = (0, u.e7)([O.Z], () => null != n ? O.Z.getEditorState(n) : null), o = s.useMemo(() => null != a ? a : E.nR(I.Jl(f.ZP)), [a]), i = (0, S.U)({
					location: "Search"
				});
				return n === w.aib.DMS && i ? (0, r.jsx)(B, {
					className: t,
					keyboardModeEnabled: l,
					editorState: o
				}) : (0, r.jsx)(U, {
					className: t,
					keyboardModeEnabled: l,
					editorState: o
				})
			}
		},
		406326: function(e, t, n) {
			n.d(t, {
				Z: () => m
			});
			var r = n(255367),
				s = n(73800),
				l = n(120356),
				a = n.n(l),
				o = n(442837),
				i = n(481060),
				c = n(778877),
				u = n(768119),
				d = n(63063),
				h = n(405656),
				p = n(981631),
				f = n(388032),
				g = n(107242);

			function m(e) {
				let {
					searchId: t,
					searchMode: n,
					onSearchModeChange: l,
					totalResults: d,
					isIndexing: m,
					isSearching: y,
					documentsIndexed: S
				} = e, x = (0, c.U)({
					location: "SearchHeader"
				}), j = (0, o.e7)([u.Z], () => u.Z.getSearchResultsQueryString(t)), O = s.useMemo(() => t === p.aib.DMS && x ? (0, h.j2)(null != j ? j : "", p.dCx.FILTER_IN) ? null : f.intl.string(f.t.tc619f) : null, [t, x, j]);
				return (0, r.jsxs)("header", {
					className: a()(g.searchHeader, {
						[g.searchHeaderWithSubtitle]: null != O
					}),
					children: [(0, r.jsx)("div", {
						className: g.totalResults,
						role: "status",
						children: (0, r.jsx)(b, {
							totalResults: d,
							subtitle: O,
							isIndexing: m,
							isSearching: y,
							documentsIndexed: S
						})
					}), (0, r.jsxs)(i.njP, {
						orientation: "horizontal",
						className: g.searchHeaderTabList,
						selectedItem: n,
						onItemSelect: l,
						children: [(0, r.jsx)(i.njP.Item, {
							className: g.searchHeaderTab,
							id: p.QIO.NEWEST,
							children: f.intl.string(f.t.rLjqbW)
						}), (0, r.jsx)(i.njP.Item, {
							className: g.searchHeaderTab,
							id: p.QIO.OLDEST,
							children: f.intl.string(f.t.a1BaUl)
						}), (0, r.jsx)(i.njP.Item, {
							className: g.searchHeaderTab,
							id: p.QIO.MOST_RELEVANT,
							children: f.intl.string(f.t.FtR97u)
						})]
					})]
				})
			}

			function b(e) {
				let {
					totalResults: t,
					subtitle: n,
					isSearching: s,
					isIndexing: l,
					documentsIndexed: a
				} = e;
				return l ? (0, r.jsx)(S, {
					documentsIndexed: a
				}) : s ? (0, r.jsx)(x, {}) : (0, r.jsx)(j, {
					totalResults: t,
					subtitle: n
				})
			}

			function y() {
				return (0, r.jsx)("div", {
					className: g.spinnerWrapper,
					children: (0, r.jsx)(i.$jN, {
						type: i.$jN.Type.SPINNING_CIRCLE,
						className: g.spinner,
						itemClassName: g.spinnerPath
					})
				})
			}

			function S(e) {
				let {
					documentsIndexed: t
				} = e;
				return (0, r.jsx)(i.ua7, {
					text: f.intl.formatToPlainString(f.t["4Y3O+P"], {
						count: t
					}),
					children: e => {
						var t, n;
						return (0, r.jsxs)("div", (t = function(e) {
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
							className: g.totalResultsWrapper
						}, e), n = n = {
							children: [(0, r.jsx)(i.Text, {
								variant: "text-md/medium",
								color: "text-muted",
								children: (0, r.jsx)(i.eee, {
									className: g.helpdeskLink,
									href: d.Z.getArticleURL(p.BhN.SEARCH_INDEXING),
									children: f.intl.string(f.t["G3EA+/"])
								})
							}), (0, r.jsx)(y, {})]
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
			}

			function x() {
				return (0, r.jsxs)(r.Fragment, {
					children: [(0, r.jsx)(i.Text, {
						variant: "text-md/medium",
						color: "header-secondary",
						children: f.intl.string(f.t.uixzLS)
					}), (0, r.jsx)(y, {})]
				})
			}

			function j(e) {
				let {
					totalResults: t,
					subtitle: n
				} = e, l = s.useMemo(() => t.toLocaleString(), [t]), a = (0, r.jsx)(i.Text, {
					variant: "text-md/medium",
					color: "header-primary",
					children: f.intl.format(f.t.ZGVL3t, {
						count: l
					})
				});
				return null != n ? (0, r.jsxs)("div", {
					className: g.totalResultsWithSubtitle,
					children: [a, null != n && (0, r.jsx)(i.Text, {
						variant: "text-xs/medium",
						color: "text-secondary",
						children: f.intl.string(f.t.tc619f)
					})]
				}) : a
			}
		},
		778177: function(e, t, n) {
			n.d(t, {
				ZP: () => et
			}), n(781311), n(35282), n(388685);
			var r = n(255367),
				s = n(73800),
				l = n(120356),
				a = n.n(l),
				o = n(512722),
				i = n.n(o),
				c = n(392711),
				u = n.n(c),
				d = n(913527),
				h = n.n(d),
				p = n(608787),
				f = n(442837),
				g = n(481060),
				m = n(603263),
				b = n(542051),
				y = n(349033),
				S = n(999650),
				x = n(933557),
				j = n(471445),
				O = n(266076),
				v = n(778877),
				_ = n(592125),
				E = n(271383),
				C = n(699516),
				I = n(250758),
				R = n(768119),
				P = n(944486),
				T = n(914010),
				N = n(246946),
				k = n(594174),
				w = n(585483),
				Z = n(63063),
				A = n(405656),
				M = n(51144),
				F = n(854709),
				L = n(652399),
				D = n(14091),
				H = n(981631),
				B = n(388032),
				U = n(290082);

			function G(e, t, n) {
				return t in e ? Object.defineProperty(e, t, {
					value: n,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : e[t] = n, e
			}

			function W(e) {
				for (var t = 1; t < arguments.length; t++) {
					var n = null != arguments[t] ? arguments[t] : {},
						r = Object.keys(n);
					"function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
						return Object.getOwnPropertyDescriptor(n, e).enumerable
					}))), r.forEach(function(t) {
						G(e, t, n[t])
					})
				}
				return e
			}

			function z(e, t) {
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

			function q(e, t) {
				if (null == e) return {};
				var n, r, s = function(e, t) {
					if (null == e) return {};
					var n, r, s = {},
						l = Object.keys(e);
					for (r = 0; r < l.length; r++) n = l[r], t.indexOf(n) >= 0 || (s[n] = e[n]);
					return s
				}(e, t);
				if (Object.getOwnPropertySymbols) {
					var l = Object.getOwnPropertySymbols(e);
					for (r = 0; r < l.length; r++) n = l[r], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (s[n] = e[n])
				}
				return s
			}
			let Q = h()("2015-05-15").local(),
				K = (0, p.Un)({
					createPromise: () => Promise.resolve().then(n.bind(n, 547800)),
					webpackId: 547800
				}),
				V = (e, t, n) => {
					var s, l, a;
					let {
						user: o,
						text: i
					} = n;
					if (null == o) return (0, r.jsx)("strong", {
						children: i
					});
					let c = k.default.getUser(o.id),
						u = _.Z.getChannel(e),
						d = (null == u ? void 0 : u.isPrivate()) ? C.Z.getNickname(o.id) : null,
						h = null != (l = null != (s = E.ZP.getNick(e, o.id)) ? s : d) ? l : M.ZP.getName(o),
						p = null != (a = null == c ? void 0 : c.getAvatarURL(e, 20)) ? a : o.getAvatarURL(null == u ? void 0 : u.guild_id, 20);
					return [(0, r.jsx)("img", {
						alt: "",
						className: U.displayAvatar,
						src: p
					}, "avatar-".concat(t, "-").concat(o.id)), (0, r.jsx)("span", {
						className: U.displayedNick,
						children: h
					}, "display-nick-".concat(t, "-").concat(o.id)), (0, r.jsx)("span", {
						className: U.displayUsername,
						children: M.ZP.getUserTag(o, {
							identifiable: N.Z.enabled && N.Z.hidePersonalInformation ? "never" : "always"
						})
					}, "display-username-".concat(t, "-").concat(o.id))]
				},
				X = (e, t, n, s, l) => {
					let {
						channel: o,
						text: i
					} = n;
					if (null == o) return (0, r.jsx)("strong", {
						children: i
					});
					let c = _.Z.getChannel(o.parent_id);
					return (0, r.jsxs)("div", {
						className: a()(U.resultChannel, s),
						children: [(() => {
							if (o.isDM()) {
								let e = o.getRecipientId(),
									t = k.default.getUser(e);
								if (null == t) return null;
								let n = t.getAvatarURL(null, 20);
								return (0, r.jsx)(g.qEK, {
									"aria-hidden": !0,
									className: U.searchResultDMChannelIcon,
									size: g.EFr.SIZE_20,
									src: n
								})
							} {
								if (o.isGroupDM()) return (0, r.jsx)(O.Z, {
									"aria-hidden": !0,
									className: U.searchResultGDMChannelIcon,
									channel: o,
									size: g.EFr.SIZE_20,
									experimentLocation: "search_popout"
								});
								let e = (0, j.KS)(o);
								return null == e ? null : (0, r.jsx)(e, {
									className: U.searchResultChannelIcon
								})
							}
						})(), (0, r.jsxs)("div", {
							className: l,
							children: [o.isDM() || o.isGroupDM() ? (0, r.jsx)("span", {
								className: U.searchResultDMChannelName,
								children: (0, x.F6)(o, k.default, C.Z)
							}) : (0, r.jsx)("strong", {
								children: (0, x.F6)(o, k.default, C.Z)
							}), (() => {
								if (o.isDM()) {
									let e = o.getRecipientId(),
										t = k.default.getUser(e);
									return null == t ? null : (0, r.jsx)("span", {
										className: U.searchResultDMUserName,
										children: M.ZP.getUserTag(t, {
											identifiable: N.Z.enabled && N.Z.hidePersonalInformation ? "never" : "always"
										})
									})
								}
								if (null != c) return (0, r.jsx)("span", {
									className: U.searchResultChannelCategory,
									children: (0, x.F6)(c, k.default, C.Z)
								})
							})()]
						})]
					})
				},
				J = e => {
					let t, n, {
						id: s,
						searchId: l,
						result: o,
						group: i,
						className: c,
						role: u,
						tabIndex: d,
						"aria-selected": h,
						onSelect: p,
						onFocus: f,
						showFilter: m,
						renderResult: b
					} = e;
					if (m) {
						var y, x;
						t = (0, r.jsx)("span", {
							className: U.filter,
							children: null != (x = null == (y = S.ZP[i]) ? void 0 : y.key) ? x : "addme:"
						})
					}
					return n = null != b ? b(l, i, o) : (0, r.jsx)("strong", {
						children: o.text
					}), (0, r.jsxs)(g.P3F, {
						tag: "li",
						className: a()(U.option, c),
						onClick: p,
						onFocus: f,
						id: s,
						role: u,
						tabIndex: d,
						"aria-selected": h,
						children: [(0, r.jsxs)("div", {
							className: U.content,
							children: [t, n]
						}), (0, r.jsx)(g.qJs, {
							size: "sm",
							color: "currentColor",
							className: U.plusIcon
						})]
					})
				},
				Y = e => (0, r.jsx)(J, z(W({}, e), {
					className: U.user,
					renderResult: V
				})),
				$ = {
					[H.dCx.FILTER_FROM]: {
						titleText: () => B.intl.string(B.t.catERE),
						component: Y
					},
					[H.dCx.FILTER_MENTIONS]: {
						titleText: () => B.intl.string(B.t.l3K4Bw),
						component: Y
					},
					[H.dCx.FILTER_HAS]: {
						titleText: () => B.intl.string(B.t.IC7gHB)
					},
					[H.dCx.FILTER_FILE_TYPE]: {
						titleText: () => B.intl.string(B.t.SXIfV1)
					},
					[H.dCx.FILTER_IN]: {
						titleText: () => B.intl.string(B.t.vHyCgo),
						component: e => (0, r.jsx)(J, z(W({}, e), {
							renderResult: X
						}))
					},
					[H.rtL.DATES]: {
						titleText: () => B.intl.string(B.t.UiL5e3)
					},
					[H.rtL.HISTORY]: {
						titleText: () => B.intl.string(B.t.tSZd5e),
						groupTip(e) {
							let {
								searchId: t
							} = e;
							return (0, r.jsx)(g.ua7, {
								text: B.intl.string(B.t.dwAvX1),
								position: "left",
								children: e => {
									let {
										onMouseEnter: n,
										onMouseLeave: s
									} = e;
									return (0, r.jsx)(g.P3F, {
										onClick: () => (0, m.QQ)(t),
										onMouseEnter: n,
										onMouseLeave: s,
										className: U.searchClearHistory,
										title: B.intl.string(B.t.dwAvX1),
										"aria-label": B.intl.string(B.t.dwAvX1),
										children: (0, r.jsx)(g.XHJ, {
											size: "md",
											color: "currentColor"
										})
									})
								}
							})
						},
						component: function(e) {
							var {
								onSelect: t,
								onFocus: n,
								result: l,
								showFilter: o,
								searchId: i,
								renderResult: c,
								group: u
							} = e, d = q(e, ["onSelect", "onFocus", "result", "showFilter", "searchId", "renderResult", "group"]);
							let h = "",
								p = s.useMemo(() => {
									var e;
									return e = l.text, A.kG(e).map((e, t, n) => A.Fr(e, n[t + 1]) ? e : new y.WU(e.getFullMatch(), y.Xe))
								}, [l.text]).map(e => {
									let t = e.getFullMatch();
									if ("" === t.trim()) return null;
									let n = H.TNx.test(e.type),
										s = H.KA4.test(e.type);
									return h += t, (0, r.jsx)("span", {
										className: a()(U.searchHistoryRow, {
											[U.filter]: n,
											[U.answer]: s,
											[U.nonText]: !n && !s
										}),
										children: t
									}, e.type + t)
								});
							return (0, r.jsxs)(g.P3F, z(W({
								className: U.option,
								onClick: t,
								onFocus: n
							}, d), {
								"aria-label": B.intl.formatToPlainString(B.t.WoiGra, {
									suggestion: h
								}),
								children: [p, (0, r.jsx)(g.qJs, {
									size: "sm",
									color: "currentColor",
									className: U.plusIcon
								})]
							}))
						}
					},
					[H.rtL.SEARCH_OPTIONS]: {
						titleText: () => B.intl.string(B.t["8Zkyw8"]),
						groupTip: () => (0, r.jsx)(g.ua7, {
							text: B.intl.string(B.t.hvVgAQ),
							position: "left",
							children: e => (0, r.jsx)("div", z(W({
								className: U.searchLearnMore
							}, e), {
								children: (0, r.jsx)(g.eee, {
									href: Z.Z.getArticleURL(H.BhN.USING_SEARCH),
									title: B.intl.string(B.t.hvVgAQ),
									children: (0, r.jsx)(g.idN, {
										size: "md",
										color: "currentColor"
									})
								})
							}))
						}),
						component: function(e) {
							var t, {
									result: n,
									onSelect: s,
									onFocus: l,
									showFilter: o,
									searchId: i
								} = e,
								c = q(e, ["result", "onSelect", "onFocus", "showFilter", "searchId"]);
							let u = A.Ko(null != (t = n.token) ? t : "");
							return (0, r.jsxs)(g.P3F, z(W({
								className: a()(U.option, U.searchOption),
								onClick: s,
								onFocus: l
							}, c), {
								children: [(0, r.jsx)("span", {
									className: U.filter,
									children: n.text
								}), (0, r.jsx)("span", {
									className: a()({
										[U.answer]: u
									}),
									children: u
								}), (0, r.jsx)(g.qJs, {
									size: "sm",
									color: "currentColor",
									className: U.plusIcon
								})]
							}))
						}
					}
				};
			class ee extends s.PureComponent {
				componentDidUpdate(e, t) {
					let {
						resultsState: n,
						totalResults: r
					} = this.props, {
						mode: s
					} = n, {
						resultsState: l
					} = e;
					null != s.filter && null == l.mode.filter && r > 0 ? this.setSelectedIndex(0) : s.type === H.Sap.FILTER_ALL && l.mode.type !== s.type ? this.setSelectedIndex(-1) : this.keepCurrentOptionSelected(e, t)
				}
				setSelectedIndex(e) {
					this.setState({
						selectedIndex: e
					}, () => this.props.onSelectedIndexChanged(e))
				}
				render() {
					let {
						selectedIndex: e
					} = this.state, {
						navId: t,
						resultsState: n,
						totalResults: s,
						searchId: l,
						channel: a
					} = this.props;
					return (0, r.jsx)(b.Z, {
						numResults: s,
						query: n.query,
						navId: t,
						hideQuery: !this.shouldShowSearchQuery(),
						focusedIndex: e,
						renderCustomResults: this.renderAutocompletes,
						renderInitialState: this.renderAutocompletes,
						onHighlightQuery: () => this.focusOption(-1),
						onSelectQuery: this.performSearch,
						onSelectSearchEverywhere: () => this.performSearch({
							searchEverywhere: !0
						}),
						renderNoResults: () => null,
						searchFavorites: l === H.I_8 && (0, F.X)(),
						showSearchInSelectedChannel: this.shouldShowSearchInSelectedChannel(),
						channel: a,
						onSelectSearchInSelectedChannel: this.handleSearchInChannel,
						renderChannel: X
					})
				}
				constructor(...e) {
					var t;
					super(...e), t = this, G(this, "state", {
						dateHint: (0, S.Pr)(),
						selectedIndex: -1
					}), G(this, "handleDateChange", e => {
						(0, L.bh)({
							searchId: this.props.searchId,
							searchQuery: R.Z.getQuery(this.props.searchId),
							searchQueryString: (0, D.$)(this.props.searchId),
							searchTokenType: this.props.resultsState.mode.filter,
							searchAutocompleteGroup: H.rtL.DATES,
							searchAutocompleteMode: this.props.resultsState.mode,
							isSearchFilterPrefix: !1,
							isSearchFilterAnswer: !0,
							isSearchFilterComplete: !1
						}), this.setSearchQuery(e.format(H.b2L) + " ", !0)
					}), G(this, "keepCurrentOptionSelected", (e, t) => {
						let {
							selectedIndex: n
						} = this.state, {
							resultsState: r,
							totalResults: s
						} = this.props, {
							mode: l,
							autocompletes: a
						} = r, {
							resultsState: o
						} = e;
						if (l.type !== o.mode.type) this.setSelectedIndex(-1);
						else if (t.selectedIndex >= 0 && (t.selectedIndex === n || o.autocompletes.length !== a.length)) {
							let e = A.i3(o.autocompletes, o.mode)[t.selectedIndex],
								n = A.i3(a, l).findIndex(t => {
									let {
										resultText: n
									} = t;
									return n === (null == e ? void 0 : e.resultText)
								}); - 1 !== n ? this.setSelectedIndex(n) : t.selectedIndex >= s && this.setSelectedIndex(s - 1)
						}
					}), G(this, "focusNextOption", () => {
						this.focusOtherOption(1)
					}), G(this, "focusPreviousOption", () => {
						this.focusOtherOption(-1)
					}), G(this, "focusOtherOption", e => {
						let {
							selectedIndex: t
						} = this.state, {
							resultsState: n
						} = this.props;
						A.Fz(n.mode.filter) || this.focusOption(t + e)
					}), G(this, "focusOption", e => {
						let t = e,
							{
								autocompletes: n
							} = this.props.resultsState,
							r = this.shouldShowSearchQuery(),
							s = this.shouldShowSearchInSelectedChannel();
						t < -1 || !r && !s && t < 0 ? t = A.BU(n) - 1 : (r || s) && t >= A.BU(n) ? t = -1 : !r && t >= A.BU(n) && (t = 0), this.setSelectedIndex(t)
					}), G(this, "selectOption", e => {
						let t = e;
						if (null == t && (t = this.state.selectedIndex), t < 0) return !1;
						let {
							autocompletes: n,
							mode: r
						} = this.props.resultsState;
						if (A.Fz(r.filter)) return;
						let s = A.i3(n, r);
						if (t >= s.length) return !1;
						let l = s[t],
							a = s.length;
						if (l.group === H.rtL.HISTORY) {
							let e = n.find(e => (null == e ? void 0 : e.group) === H.rtL.HISTORY);
							if (null != e) {
								let n = t - (a - e.results.length);
								(0, L.$z)({
									searchId: this.props.searchId,
									searchHistoryIndex: n,
									searchHistoryTotalResults: e.results.length
								})
							}
						} else {
							var o;
							let e = this.props.resultsState.mode.type,
								n = this.props.resultsState.mode.filter,
								{
									token: r,
									group: s
								} = l.result,
								i = null != r ? r : n,
								c = (0, S._m)(l.group) ? l.group : null != s && (0, S._m)(s) ? s : null;
							(0, L.bh)({
								searchId: this.props.searchId,
								searchQuery: R.Z.getQuery(this.props.searchId),
								searchQueryString: (0, D.$)(this.props.searchId),
								searchTokenType: null != i ? i : c,
								searchAutocompleteGroup: null != (o = l.group) ? o : s,
								searchAutocompleteMode: this.props.resultsState.mode,
								searchAutocompleteResultIndex: t,
								searchAutocompleteTotalResults: a,
								isSearchFilterPrefix: e === H.Sap.EMPTY,
								isSearchFilterAnswer: e === H.Sap.FILTER,
								isSearchFilterComplete: e === H.Sap.FILTER_ALL
							})
						}
						let i = function(e) {
							let t = !0,
								n = e.trim();
							return u()(S.ZP).forOwn(e => {
								"" !== e.key && null != e.key && n === e.key && (t = !1)
							}), t
						}(l.resultText);
						return this.setSearchQuery(l.resultText, i), !0
					}), G(this, "setSearchQuery", function(e) {
						let n = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
							{
								mode: r,
								cursorScope: s
							} = t.props.resultsState,
							l = 0;
						null != r.token ? l = r.token.start : (null == s ? void 0 : s.currentToken) != null && (l = s.currentToken.end);
						let a = null != r.token ? r.token.end : l;
						w.S.dispatch(H.CkL.SET_SEARCH_QUERY, {
							query: e,
							anchor: l,
							focus: a,
							performSearch: n
						}), t.setSelectedIndex(-1)
					}), G(this, "shouldShowSearchQuery", () => {
						let {
							mode: e
						} = this.props.resultsState;
						return e.type !== H.Sap.FILTER && e.type !== H.Sap.EMPTY && !A.Fz(e.filter)
					}), G(this, "shouldShowSearchInSelectedChannel", () => {
						let {
							searchId: e,
							resultsState: {
								mode: t
							}
						} = this.props;
						return e === H.aib.DMS && (0, A.R6)(e) && t.type === H.Sap.EMPTY && !A.Fz(t.filter)
					}), G(this, "handleSearchInChannel", () => {
						var e;
						let {
							channel: t
						} = this.props;
						if (!this.shouldShowSearchInSelectedChannel() || null == t) return !1;
						let n = H.dCx.FILTER_IN,
							r = S.ZP[n],
							s = (0, A.X3)(t),
							l = "".concat(null != (e = null == r ? void 0 : r.key) ? e : n.toString(), " ").concat(s);
						return this.setSearchQuery(l, !0), !0
					}), G(this, "renderDatePicker", () => (0, r.jsxs)("div", {
						className: U.datePicker,
						children: [(0, r.jsx)(K, {
							onSelect: this.handleDateChange,
							maxDate: h()().local(),
							minDate: Q
						}), (0, r.jsxs)("div", {
							className: U.datePickerHint,
							children: [(0, r.jsxs)("span", {
								className: U.hint,
								children: [B.intl.string(B.t.fmtCi4), "\xa0"]
							}), (0, r.jsx)(g.P3F, {
								tag: "span",
								className: U.hintValue,
								onClick: this.handleHintClick,
								children: this.state.dateHint
							})]
						})]
					})), G(this, "handleHintClick", () => {
						this.setSearchQuery(this.state.dateHint, !0)
					}), G(this, "performSearch", e => {
						w.S.dispatch(H.CkL.PERFORM_SEARCH, null != e ? e : {})
					}), G(this, "renderAutocompletes", () => {
						let {
							selectedIndex: e
						} = this.state, {
							navId: t,
							searchId: n
						} = this.props, {
							autocompletes: s,
							mode: l
						} = this.props.resultsState;
						if (A.Fz(l.filter)) return this.renderDatePicker();
						let a = -1;
						return s.map(s => {
							var o, i, c;
							let u, d;
							if (null == s || 0 === s.results.length) return null;
							let h = null != (o = $[s.group]) ? o : {};
							null != h.titleText && (d = "".concat(s.group, "-header"), u = (0, r.jsx)("div", {
								id: d,
								className: U.header,
								children: h.titleText()
							}));
							let p = null != (i = h.groupTip) ? i : null,
								f = null != p ? (0, r.jsx)(p, {
									searchId: n
								}) : null,
								g = null != (c = h.component) ? c : J,
								m = l.type === H.Sap.FILTER_ALL;
							return (0, r.jsxs)("ul", {
								role: "group",
								"aria-labelledby": d,
								className: U.resultsGroup,
								children: [u, f, s.results.map(l => {
									var o, i;
									if (null == l || null == s) return null;
									let c = e === (a += 1);
									return (0, r.jsx)(g, W({
										searchId: n,
										group: null != (o = l.group) ? o : s.group,
										result: l,
										showFilter: m,
										onSelect: this.selectOption.bind(null, a),
										onFocus: this.focusOption.bind(null, a)
									}, (0, b.M)(t, a, c)), "".concat(s.group, "-").concat(l.text, "-").concat(null != (i = l.key) ? i : ""))
								})]
							}, s.group)
						})
					})
				}
			}
			let et = s.forwardRef((e, t) => {
				let n = (0, v.U)({
						location: "SearchPopout"
					}),
					[s, l, a, o] = (0, f.Wu)([T.Z, P.Z, I.Z, _.Z], () => {
						let e = T.Z.getGuildId(),
							t = P.Z.getChannelId(),
							r = _.Z.getChannel(t),
							s = null != e ? e : n ? H.aib.DMS : t;
						i()(null != s, "SearchPopout.getStateFromStores - invalid searchId");
						let l = I.Z.getState(s),
							a = A.BU(l.autocompletes);
						return [s, l, a, r]
					});
				return (0, r.jsx)(ee, z(W({}, e), {
					searchId: s,
					resultsState: l,
					totalResults: a,
					ref: t,
					channel: o
				}))
			})
		},
		14091: function(e, t, n) {
			n.d(t, {
				$: () => D,
				Z: () => z
			}), n(388685), n(35282);
			var r = n(255367),
				s = n(73800),
				l = n(120356),
				a = n.n(l),
				o = n(392711),
				i = n.n(o),
				c = n(442837),
				u = n(481060),
				d = n(447543),
				h = n(603263),
				p = n(410030),
				f = n(169223),
				g = n(778877),
				m = n(903488),
				b = n(416638),
				y = n(695346),
				S = n(592125),
				x = n(768119),
				j = n(944486),
				O = n(585483),
				v = n(72006),
				_ = n(965996),
				E = n(652399),
				C = n(970850),
				I = n(861262),
				R = n(251285),
				P = n(406326),
				T = n(994463),
				N = n(611004),
				k = n(619753),
				w = n(902733),
				Z = n(981631),
				A = n(531578),
				M = n(388032),
				F = n(682065);

			function L(e, t, n) {
				return t in e ? Object.defineProperty(e, t, {
					value: n,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : e[t] = n, e
			}

			function D(e) {
				let t = null != e ? x.Z.getEditorState(e) : null;
				return null != t ? v.Sq(t) : null
			}
			class H extends s.Component {
				componentDidMount() {
					this.autoAnalytics()
				}
				componentDidUpdate(e) {
					(this.props.searchAnalyticsId !== e.searchAnalyticsId || this.props.searchOffset !== e.searchOffset) && this.autoAnalytics(e.searchAnalyticsId)
				}
				render() {
					return null
				}
				constructor(...e) {
					var t;
					super(...e), t = this, L(this, "autoAnalytics", function() {
						let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null;
						if (null == t.props.searchAnalyticsId || t.props.isSearching) return;
						let n = 0,
							r = 0,
							s = 0,
							l = 0;
						null != t.props.searchResults && i()(t.props.searchResults).flatten().filter(e => e.isSearchHit).forEach(e => {
							null != e.content && "" !== e.content && (n++, /https?:\/\/[^\s]+/.test(e.content) && l++), null != e.embeds && e.embeds.length > 0 && s++, null != e.attachments && e.attachments.length > 0 && r++
						}), 0 === n ? (0, E.Qb)({
							searchId: t.props.searchId,
							searchType: t.props.searchType,
							searchAnalyticsId: t.props.searchAnalyticsId,
							searchQueryString: D(t.props.searchId),
							searchQuery: x.Z.getQuery(t.props.searchId)
						}) : (0, E.hM)({
							searchType: t.props.searchType,
							searchId: t.props.searchId,
							searchAnalyticsId: t.props.searchAnalyticsId,
							prevSearchAnalyticsId: e !== t.props.searchAnalyticsId ? e : null,
							isError: t.props.searchHasError,
							limit: t.props.searchLimit,
							offset: t.props.searchOffset,
							page: Math.floor(t.props.searchOffset / t.props.searchLimit) + 1,
							totalResults: t.props.searchTotalResults,
							pageResults: null != t.props.searchResults ? t.props.searchResults.length : null,
							isIndexing: t.props.searchIsIndexing,
							pageNumMessages: n,
							pageNumLinks: l,
							pageNumEmbeds: s,
							pageNumAttachments: r,
							searchQueryString: D(t.props.searchId),
							searchQuery: x.Z.getQuery(t.props.searchId)
						})
					})
				}
			}
			let B = e => {
				let {
					children: t
				} = e;
				return (0, r.jsx)("div", {
					className: F.emptyResultsWrap,
					children: (0, r.jsx)("div", {
						className: F.emptyResultsContent,
						children: t
					})
				})
			};
			class U extends s.PureComponent {
				componentDidMount() {
					O.S.subscribe(Z.CkL.SEARCH_RESULTS_CLOSE, this.handleSearchResultsClose)
				}
				componentWillUnmount() {
					O.S.unsubscribe(Z.CkL.SEARCH_RESULTS_CLOSE, this.handleSearchResultsClose)
				}
				componentDidUpdate(e) {
					let {
						search: t
					} = e;
					if (this.props.search.showBlockedResults !== t.showBlockedResults) {
						let e = this.scrollerRef.current;
						if (null == e) return;
						e.scrollToBottom()
					}
				}
				render() {
					return (0, r.jsxs)("section", {
						className: F.searchResultsWrap,
						"aria-label": M.intl.string(M.t.zkoeq6),
						children: [this.renderHeader(), (0, r.jsx)(u.Den, {
							ref: this.scrollerRef,
							className: F.scroller,
							children: this.renderContent()
						}), this.renderFooter()]
					})
				}
				constructor(...e) {
					super(...e), L(this, "scrollerRef", s.createRef()), L(this, "scrollTo", (e, t, n) => {
						let r = this.scrollerRef.current;
						if (null == r) return;
						let s = r.getScrollerState().scrollTop - e;
						r.scrollTo({
							to: s,
							animate: t,
							callback: n
						})
					}), L(this, "selectChannel", e => {
						e !== j.Z.getChannelId() && d.ZP.transitionToInviteChannelSync(e)
					}), L(this, "handleSearchResultsClose", () => {
						let {
							searchId: e
						} = this.props;
						h.qt(e)
					}), L(this, "handleSearchModeChange", e => {
						let {
							searchId: t,
							searchType: n,
							search: {
								isSearching: r
							},
							searchAnalyticsId: s,
							onSearchModeChange: l,
							searchMode: a
						} = this.props;
						e === a || r || ((0, E.zW)({
							searchId: t,
							searchType: n,
							searchAnalyticsId: s,
							mode: e
						}), l(e))
					}), L(this, "toggleShowBlockedMessages", () => {
						let {
							searchId: e,
							search: {
								showBlockedResults: t
							}
						} = this.props;
						h.QY(e, !t)
					}), L(this, "renderFooter", () => this.props.isFeedbackVisible ? (0, r.jsx)(w.Z, {
						searchId: this.props.searchId,
						searchType: this.props.searchType,
						dismissFeedbackEntrypoint: this.props.dismissFeedbackEntrypoint
					}) : null), L(this, "renderHeader", () => {
						let {
							searchId: e,
							searchMode: t,
							search: {
								totalResults: n,
								isSearching: s,
								isHistoricalIndexing: l,
								documentsIndexed: a
							}
						} = this.props;
						return (0, r.jsx)(P.Z, {
							searchId: e,
							searchMode: t,
							onSearchModeChange: this.handleSearchModeChange,
							totalResults: n,
							isSearching: s,
							isIndexing: l,
							documentsIndexed: a
						})
					}), L(this, "renderIndexing", () => {
						let e = this.props.searchType === Z.aib.GUILD ? M.intl.string(M.t.AXPbZm) : M.intl.string(M.t.Q0JJjo);
						return (0, r.jsxs)(B, {
							children: [(0, r.jsx)(T.Z, {}), (0, r.jsx)("div", {
								className: (F.emptyResultsText, F.stillIndexing),
								children: e
							})]
						})
					}), L(this, "renderNoResults", () => {
						let {
							showNoResultsAlt: e
						} = this.props.search, t = e ? M.intl.string(M.t["VrK/2d"]) : M.intl.string(M.t.V6nAfH);
						return (0, r.jsxs)(B, {
							children: [(0, r.jsx)("div", {
								className: a()(F.noResultsImage, {
									[F.alt]: e
								})
							}), (0, r.jsx)("div", {
								className: a()(F.emptyResultsText, F.noResults, {
									[F.alt]: e
								}),
								children: t
							})]
						})
					}), L(this, "renderError", () => (0, r.jsxs)(B, {
						children: [(0, r.jsx)("div", {
							className: F.errorImage
						}), (0, r.jsx)("div", {
							className: a()(F.emptyResultsText, F.errorMessage),
							children: M.intl.string(M.t.uvDZBQ)
						})]
					})), L(this, "handleSearchResultClick", (e, t) => {
						let n = S.Z.getChannel(e.channel_id),
							r = null != n ? n.getGuildId() : null,
							{
								searchId: s,
								searchType: l,
								searchAnalyticsId: a
							} = this.props,
							{
								offset: o,
								totalResults: i
							} = this.props.search;
						(0, E.sL)({
							searchId: s,
							searchType: l,
							searchAnalyticsId: a,
							guildId: r,
							channelId: e.channel_id,
							pageResults: null != this.props.searchResults ? this.props.searchResults.length : null,
							totalResults: i,
							limit: Z.vpv,
							page: Math.floor(o / Z.vpv) + 1,
							offset: o,
							index: t,
							searchQueryString: D(s),
							searchQuery: x.Z.getQuery(s)
						})
					}), L(this, "renderContent", () => {
						let {
							searchResults: e,
							blockCount: t,
							ignoreCount: n,
							search: s,
							searchId: l,
							renderEmbeds: a,
							onPageChange: o
						} = this.props, {
							totalResults: i,
							isSearching: c,
							isIndexing: u,
							hasError: d
						} = s;
						return d ? this.renderError() : u ? this.renderIndexing() : c ? null : i > 0 ? (0, r.jsx)(k.Z, {
							search: s,
							searchResults: e,
							onClick: this.handleSearchResultClick,
							blockCount: t,
							ignoreCount: n,
							searchId: l,
							renderEmbeds: a,
							scrollTo: this.scrollTo,
							onPageChange: o
						}) : this.renderNoResults()
					})
				}
			}

			function G(e) {
				let {
					searchId: t,
					isFeedbackVisible: n,
					theme: l,
					dismissFeedbackEntrypoint: a
				} = e, o = (0, c.cj)([x.Z], () => x.Z.getResultsState(t), [t]), i = (0, I.k)(t), u = (0, c.e7)([x.Z], () => x.Z.getAnalyticsId(t)), {
					searchResults: d,
					ignoreCount: p,
					blockCount: f
				} = (0, R.Z)(t), {
					searchMode: g,
					setSearchMode: m
				} = (0, C.Z)({
					searchId: t
				}), b = s.useCallback(e => {
					m(e);
					let n = D(t);
					h.Nz(t, e, n)
				}, [t, m]), S = s.useCallback(e => {
					if (o.isSearching) return;
					let n = D(t);
					h.oO(t, e, n)
				}, [t, o.isSearching]), j = s.useDeferredValue(d), O = s.useDeferredValue(o);
				return (0, r.jsxs)(r.Fragment, {
					children: [(0, r.jsx)(U, {
						searchId: t,
						search: O,
						searchAnalyticsId: u,
						searchType: i,
						searchResults: j,
						ignoreCount: p,
						blockCount: f,
						renderEmbeds: y.NA.useSetting(),
						developerMode: y.Sb.useSetting(),
						theme: l,
						isFeedbackVisible: n,
						dismissFeedbackEntrypoint: a,
						onPageChange: S,
						onSearchModeChange: b,
						searchMode: g
					}), (0, r.jsx)(H, {
						searchId: t,
						searchType: i,
						searchAnalyticsId: u,
						searchResults: d,
						searchOffset: o.offset,
						searchLimit: Z.vpv,
						searchHasError: o.hasError,
						searchTotalResults: o.totalResults,
						searchIsIndexing: o.isHistoricalIndexing,
						isSearching: o.isSearching
					})]
				})
			}

			function W(e) {
				let {
					theme: t,
					isFeedbackVisible: n,
					dismissFeedbackEntrypoint: l
				} = e, a = s.useMemo(() => ({
					type: Z.aib.DMS
				}), []), o = (0, b.WJ)(a), i = (0, c.cj)([m.Z, x.Z], () => {
					var e, t, n, r;
					return {
						isSearching: null != (e = m.Z.getIsFetching(o)) && e,
						isIndexing: null != (t = m.Z.getIsIndexing(o)) && t,
						isHistoricalIndexing: null != (n = m.Z.getIsHistoricalIndexing(o)) && n,
						documentsIndexed: m.Z.getDocumentsIndexed(o),
						offset: x.Z.getOffset(o),
						totalResults: null != (r = m.Z.getTotalCount(o)) ? r : 0,
						hasError: null != m.Z.getError(o),
						showBlockedResults: x.Z.shouldShowBlockedResults(o),
						showNoResultsAlt: x.Z.shouldShowNoResultsAlt(o)
					}
				}), u = (0, c.e7)([m.Z], () => m.Z.getLastSearchAnalyticsId()), {
					searchResults: d,
					ignoreCount: h,
					blockCount: p
				} = (0, R.G)(a), {
					searchMode: f,
					setSearchMode: g
				} = (0, C.Z)({
					searchId: o
				}), S = s.useCallback(e => {
					g(e);
					let t = D(o);
					N.Z.fetchCrossDMMessages({
						searchContext: a,
						selectedPageIndex: 0,
						queryString: null != t ? t : "",
						searchMode: e
					})
				}, [a, o, g]), j = s.useCallback(e => {
					var t;
					N.Z.fetchCrossDMMessages({
						searchContext: a,
						queryString: null != (t = D(o)) ? t : "",
						selectedPageIndex: e,
						searchMode: f
					})
				}, [a, o, f]);
				return (0, r.jsxs)(r.Fragment, {
					children: [(0, r.jsx)(U, {
						searchId: Z.aib.DMS,
						search: i,
						searchAnalyticsId: u,
						searchType: Z.aib.DMS,
						searchResults: d,
						ignoreCount: h,
						blockCount: p,
						renderEmbeds: y.NA.useSetting(),
						developerMode: y.Sb.useSetting(),
						theme: t,
						isFeedbackVisible: n,
						dismissFeedbackEntrypoint: l,
						onPageChange: j,
						onSearchModeChange: S,
						searchMode: f
					}), (0, r.jsx)(H, {
						searchId: Z.aib.DMS,
						searchType: Z.aib.DMS,
						searchAnalyticsId: u,
						searchResults: d,
						searchOffset: i.offset,
						searchLimit: Z.vpv,
						searchHasError: i.hasError,
						searchTotalResults: i.totalResults,
						searchIsIndexing: i.isHistoricalIndexing,
						isSearching: i.isSearching
					})]
				})
			}

			function z(e) {
				let {
					searchId: t
				} = e, n = (0, p.ZP)(), l = (0, g.U)({
					location: "SearchResults"
				}), a = s.useRef(null), [o, i] = s.useState(!1), {
					enabled: c,
					force: u
				} = (0, _.f)({
					location: "SearchResults"
				});
				s.useEffect(() => {
					c && u && i(!0)
				}, [u, c]), s.useEffect(() => {
					c && (u || t !== a.current && (a.current = t, f.Z.possiblyShowFeedbackModal(A.nw.SEARCH_RESULTS, () => i(!0), () => i(!1))))
				}, [c, u, t]);
				let d = s.useCallback(() => {
					i(!1)
				}, []);
				return l && t === Z.aib.DMS ? (0, r.jsx)(W, {
					theme: n,
					isFeedbackVisible: o,
					dismissFeedbackEntrypoint: d
				}) : (0, r.jsx)(G, {
					theme: n,
					searchId: t,
					isFeedbackVisible: o,
					dismissFeedbackEntrypoint: d
				})
			}
		},
		902733: function(e, t, n) {
			n.d(t, {
				Z: () => h
			});
			var r = n(255367),
				s = n(73800),
				l = n(657707),
				a = n(481060),
				o = n(652399),
				i = n(531578),
				c = n(388032),
				u = n(175943);

			function d(e) {
				let {
					rating: t,
					onClick: n
				} = e, o = t === i.aZ.BAD ? l.kZ9 : l.lbB, c = s.useCallback(() => {
					n(t)
				}, [n, t]);
				return (0, r.jsx)(a.P3F, {
					onClick: c,
					className: u.iconContainer,
					children: (0, r.jsx)(o, {
						size: "md",
						color: "currentColor",
						className: u.icon
					})
				})
			}
			let h = function(e) {
				let {
					searchId: t,
					searchType: l,
					dismissFeedbackEntrypoint: h
				} = e;
				s.useEffect(() => {
					(0, o.bo)({
						searchId: t,
						searchType: l
					})
				}, [t, l]);
				let p = s.useCallback(e => {
					h(), (0, a.ZDy)(async () => {
						let {
							default: s
						} = await n.e("11298").then(n.bind(n, 229612));
						return n => {
							var a, o;
							return (0, r.jsx)(s, (a = function(e) {
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
							}({}, n), o = o = {
								searchId: t,
								searchType: l,
								rating: e
							}, Object.getOwnPropertyDescriptors ? Object.defineProperties(a, Object.getOwnPropertyDescriptors(o)) : (function(e, t) {
								var n = Object.keys(e);
								if (Object.getOwnPropertySymbols) {
									var r = Object.getOwnPropertySymbols(e);
									n.push.apply(n, r)
								}
								return n
							})(Object(o)).forEach(function(e) {
								Object.defineProperty(a, e, Object.getOwnPropertyDescriptor(o, e))
							}), a))
						}
					})
				}, [h, t, l]);
				return (0, r.jsxs)("div", {
					className: u.container,
					children: [(0, r.jsx)(a.Text, {
						variant: "text-sm/medium",
						color: "text-primary",
						children: c.intl.string(c.t["I+4OJC"])
					}), (0, r.jsxs)("div", {
						className: u.icons,
						children: [(0, r.jsx)(d, {
							rating: i.aZ.GOOD,
							onClick: p
						}), (0, r.jsx)(d, {
							rating: i.aZ.BAD,
							onClick: p
						})]
					})]
				})
			}
		},
		977885: function(e, t, n) {
			n.d(t, {
				Z: () => h
			}), n(388685);
			var r = n(392711),
				s = n.n(r),
				l = n(570140),
				a = n(603263),
				o = n(952537),
				i = n(405656),
				c = n(700366),
				u = n(416638),
				d = n(981631);
			let h = {
				fetchMessages: function(e) {
					let {
						searchContext: t,
						searchTabs: n,
						searchQueryString: r,
						pagination: h,
						trackExactTotalHits: p,
						getId: f,
						getLimit: g,
						onFetchStart: m,
						onFetchSuccess: b,
						searchMode: y = d.QIO.NEWEST
					} = e, S = i.kG(r), x = i.$G(S);
					! function(e) {
						if (!Array.isArray(e.pinned)) return;
						let t = e.pinned.some(e => !0 === e);
						e.pinned = t
					}(x);
					let j = function(e) {
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
						}({}, x, (0, a.zH)(y)),
						O = (0, u.s5)(t);
					null != O && i.jW(j, O);
					let v = c.Z.getSearchTabFetcher({
							searchContext: t,
							searchQuery: j,
							searchTabs: n,
							getLimit: g,
							pagination: h,
							trackExactTotalHits: p
						}),
						_ = n.map(e => f(e));
					return l.Z.dispatch({
						type: "SEARCH_MESSAGES_START",
						ids: _
					}), null == m || m({
						searchContext: t,
						searchQueryString: r,
						searchQuery: j
					}), v.fetch(e => {
						let {
							body: n
						} = e, r = Object.entries(n.tabs);
						l.Z.dispatch({
							type: "SEARCH_MESSAGES_SUCCESS",
							guildId: O,
							data: r.map(e => {
								var t, r, l;
								let [a, i] = e, c = f(a), u = i.cursor;
								return {
									id: c,
									analyticsId: n.analytics_id,
									totalResults: i.total_results,
									cursor: null != u && s().isEmpty(u) ? null : u,
									messages: i.messages,
									channels: null != (t = i.channels) ? t : [],
									threads: null != (r = i.threads) ? r : [],
									members: (null != (l = i.members) ? l : []).map(e => (0, o.Z)(e)),
									doingHistoricalIndex: n.doing_deep_historical_index,
									documentsIndexed: n.documents_indexed
								}
							})
						}), r.forEach(e => {
							var r, s;
							let [a, i] = e;
							l.Z.dispatch({
								type: "SEARCH_FINISH",
								searchId: (0, u.WJ)(t),
								guildId: (0, u.s5)(t),
								analyticsId: n.analytics_id,
								totalResults: i.total_results,
								channels: i.channels,
								messages: i.messages,
								threads: null != (r = i.threads) ? r : [],
								members: (null != (s = i.members) ? s : []).map(e => (0, o.Z)(e)),
								hasError: !1,
								doingHistoricalIndex: n.doing_deep_historical_index,
								documentsIndexed: n.documents_indexed
							})
						}), null == b || b({
							searchContext: t,
							tabEntries: r
						})
					}, () => {
						l.Z.dispatch({
							type: "SEARCH_MESSAGES_INDEXING",
							ids: _
						})
					}, e => {
						l.Z.dispatch({
							type: "SEARCH_MESSAGES_FAILURE",
							ids: _,
							error: e
						})
					}), !0
				},
				clearSearchRecentMessages: function() {
					l.Z.dispatch({
						type: "SEARCH_RECENT_MESSAGES_CLEAR"
					})
				},
				clearAllSearchStates: function() {
					l.Z.dispatch({
						type: "SEARCH_MESSAGES_CLEAR_ALL"
					})
				},
				clearSearchState: function(e) {
					l.Z.dispatch({
						type: "SEARCH_MESSAGES_CLEAR",
						id: e
					})
				},
				addSearchHistoryItem: function(e, t) {
					if (e.type !== d.aib.DMS && e.type !== d.aib.GUILD) return;
					let n = (0, u.Tm)(e);
					l.Z.dispatch({
						type: "SEARCH_HISTORY_ADD_ITEM",
						id: n,
						item: t
					})
				},
				removeSearchHistoryItem: function(e, t) {
					let n = (0, u.Tm)(e);
					l.Z.dispatch({
						type: "SEARCH_HISTORY_REMOVE_ITEM",
						id: n,
						item: t
					})
				},
				clearSearchHistory: function(e) {
					let t = (0, u.Tm)(e);
					l.Z.dispatch({
						type: "SEARCH_HISTORY_CLEAR_ITEMS",
						id: t
					})
				},
				openSearchScreen: function(e) {
					let t = (0, u.WJ)(e);
					l.Z.dispatch({
						type: "SEARCH_SCREEN_OPEN",
						searchId: t
					})
				}
			}
		},
		700366: function(e, t, n) {
			n.d(t, {
				Z: () => u
			}), n(415506), n(388685);
			var r = n(147913),
				s = n(840877),
				l = n(416638),
				a = n(862825),
				o = n(981631);

			function i(e, t, n) {
				return t in e ? Object.defineProperty(e, t, {
					value: n,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : e[t] = n, e
			}
			class c extends r.Z {
				createSearchTabsPayload(e) {
					let {
						searchQuery: t,
						searchTabs: n,
						getLimit: r,
						pagination: s,
						trackExactTotalHits: l
					} = e, {
						include_nsfw: o,
						channel_id: c
					} = t, u = function(e, t) {
						if (null == e) return {};
						var n, r, s = function(e, t) {
							if (null == e) return {};
							var n, r, s = {},
								l = Object.keys(e);
							for (r = 0; r < l.length; r++) n = l[r], t.indexOf(n) >= 0 || (s[n] = e[n]);
							return s
						}(e, t);
						if (Object.getOwnPropertySymbols) {
							var l = Object.getOwnPropertySymbols(e);
							for (r = 0; r < l.length; r++) n = l[r], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (s[n] = e[n])
						}
						return s
					}(t, ["include_nsfw", "channel_id"]), d = {
						include_nsfw: o,
						channel_ids: c,
						tabs: {},
						track_exact_total_hits: l
					};
					return n.forEach(e => {
						var t, n;
						let l = r(e),
							o = a.yY[e],
							c = null != o ? a.SO[o] : {};
						d.tabs[e] = (t = function(e) {
							for (var t = 1; t < arguments.length; t++) {
								var n = null != arguments[t] ? arguments[t] : {},
									r = Object.keys(n);
								"function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
									return Object.getOwnPropertyDescriptor(n, e).enumerable
								}))), r.forEach(function(t) {
									i(e, t, n[t])
								})
							}
							return e
						}({}, a.E2, c, u, s), n = n = {
							limit: l
						}, Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : (function(e, t) {
							var n = Object.keys(e);
							if (Object.getOwnPropertySymbols) {
								var r = Object.getOwnPropertySymbols(e);
								n.push.apply(n, r)
							}
							return n
						})(Object(n)).forEach(function(e) {
							Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
						}), t)
					}), d
				}
				createSearchTabFetcher(e) {
					let {
						searchContext: t,
						searchQuery: n,
						searchTabs: r,
						getLimit: l,
						pagination: a,
						trackExactTotalHits: i
					} = e, c = this.createSearchTabsPayload({
						searchQuery: n,
						searchTabs: r,
						getLimit: l,
						pagination: a,
						trackExactTotalHits: i
					});
					switch (t.type) {
						case o.aib.GUILD:
						case o.aib.GUILD_CHANNEL:
							return new s.tJ(t.guildId, t.type, n, c);
						case o.aib.CHANNEL:
							return new s.tJ(t.channelId, t.type, n, c);
						case o.aib.DMS:
							return new s.tJ(t.type, t.type, n, c);
						default:
							throw Error("[SearchFetchManager] Unsupported search context type: ".concat(t.type))
					}
				}
				_terminate() {
					this.searchTabFetchers.forEach(e => null == e ? void 0 : e.cancel()), this.searchTabFetchers.clear()
				}
				cancelInFlightRequests(e) {
					var t;
					let n = (0, l.Tm)(e);
					null == (t = this.searchTabFetchers.get(n)) || t.cancel()
				}
				getSearchTabFetcher(e) {
					let {
						searchContext: t,
						searchQuery: n,
						searchTabs: r,
						getLimit: s,
						pagination: a,
						trackExactTotalHits: o
					} = e;
					this.cancelInFlightRequests(t);
					let i = this.createSearchTabFetcher({
							searchContext: t,
							searchQuery: n,
							searchTabs: r,
							getLimit: s,
							pagination: a,
							trackExactTotalHits: o
						}),
						c = (0, l.Tm)(t);
					return this.searchTabFetchers.set(c, i), i
				}
				constructor(...e) {
					super(...e), i(this, "searchTabFetchers", new Map)
				}
			}
			let u = new c
		},
		975146: function(e, t, n) {
			n.d(t, {
				Z: () => d
			});
			var r = n(255367);
			n(73800);
			var s = n(120356),
				l = n.n(s),
				a = n(481060),
				o = n(871499),
				i = n(388032),
				c = n(486748);

			function u(e) {
				let {
					className: t,
					count: n
				} = e;
				return (0, r.jsxs)("div", {
					className: l()(c.root, c.comboIcon, t),
					children: [(0, r.jsx)(a.BFJ, {
						size: "md",
						color: "currentColor",
						className: c.icon
					}), null != n && (0, r.jsx)(a.Text, {
						color: "none",
						className: c.count,
						variant: "text-md/normal",
						children: n
					})]
				})
			}

			function d(e) {
				var {
					count: t
				} = e, n = function(e, t) {
					if (null == e) return {};
					var n, r, s = function(e, t) {
						if (null == e) return {};
						var n, r, s = {},
							l = Object.keys(e);
						for (r = 0; r < l.length; r++) n = l[r], t.indexOf(n) >= 0 || (s[n] = e[n]);
						return s
					}(e, t);
					if (Object.getOwnPropertySymbols) {
						var l = Object.getOwnPropertySymbols(e);
						for (r = 0; r < l.length; r++) n = l[r], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (s[n] = e[n])
					}
					return s
				}(e, ["count"]);
				return (0, r.jsx)(o.Z, function(e) {
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
					label: i.intl.string(i.t.jNqDh4),
					iconComponent: e => {
						let {
							className: n
						} = e;
						return (0, r.jsx)(u, {
							className: n,
							count: t
						})
					},
					tooltipPosition: "bottom"
				}, n))
			}
		},
		250758: function(e, t, n) {
			n.d(t, {
				Z: () => M
			}), n(388685), n(539854), n(781311), n(290780);
			var r, s, l, a = n(442837),
				o = n(570140),
				i = n(999650),
				c = n(279779),
				u = n(861262),
				d = n(483360),
				h = n(892880),
				p = n(405656),
				f = n(51144),
				g = n(592125),
				m = n(271383),
				b = n(430824),
				y = n(768119),
				S = n(944486),
				x = n(246946),
				j = n(594174),
				O = n(981631);
			let v = {},
				_ = {};

			function E(e) {
				let {
					searchId: t,
					query: n,
					mode: r,
					tokens: s,
					cursorScope: l,
					autocompletes: a
				} = e, o = _[t];
				return null == o && (o = {
					results: [],
					context: c.Z.getSearchContext(C.bind(null, t))
				}, _[t] = o), {
					query: null != n ? n : "",
					mode: null != r ? r : {
						type: O.Sap.EMPTY,
						filter: null,
						token: null
					},
					tokens: null != s ? s : [],
					cursorScope: null != l ? l : null,
					autocompletes: null != a ? a : []
				}
			}

			function C(e, t) {
				let {
					results: n
				} = t, r = _[e], s = v[e];
				if (null == r || null == s) return;
				let {
					type: l,
					filter: a
				} = s.mode;
				if (l === O.Sap.EMPTY || l === O.Sap.FILTER && a !== O.dCx.FILTER_FROM && a !== O.dCx.FILTER_MENTIONS) return;
				let o = 3;
				s.mode.type === O.Sap.FILTER && (o = 10), r.results = function(e) {
					let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 10;
					return (e = e.reduce((e, t) => {
						let n = j.default.getUser(t.id);
						return null == n || e.push({
							id: n.id,
							text: f.ZP.getUserTag(n),
							user: n
						}), e
					}, [])).length > t && (e.length = t), e
				}(n, o);
				let {
					query: i,
					mode: c,
					tokens: u,
					cursorScope: d
				} = s, {
					autocompletes: h
				} = s;
				h = P(e, c), v[e] = E({
					searchId: e,
					query: i,
					mode: c,
					tokens: u,
					cursorScope: d,
					autocompletes: h
				}), A.emitChange()
			}

			function I(e, t, n) {
				var r, s, l;
				let a, o = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 10;
				if (null == e) return null;
				let c = (0, u.g)(n),
					h = null != (s = null == t || null == (r = t.getFullMatch()) ? void 0 : r.trim()) ? s : "",
					p = e === O.dCx.FILTER_FROM || e === O.dCx.FILTER_MENTIONS;
				if (c === O.aib.GUILD && p) {
					let e = _[n];
					null == e ? a = null : ((null == t || 0 === h.length) && (e.results = d.ZP.getRecentlyTalked(n, 10).map(e => {
						let {
							record: t
						} = e;
						return {
							user: t,
							text: f.ZP.getUserTag(t)
						}
					})), a = e.results)
				} else {
					let t = null == (l = i.ZP[e]) ? void 0 : l.getAutocompletions;
					a = null != t ? t(h, n, null != o ? o : 10) : []
				}
				if (null != a && p && (0, i.co)(h)) {
					let e = j.default.getCurrentUser();
					null != e && (a = a.filter(t => {
						let {
							user: n
						} = t;
						return n.id !== e.id
					})).unshift({
						text: O.ME,
						user: e
					})
				}
				return null == a || 0 === a.length ? null : {
					group: e,
					results: a
				}
			}

			function R(e, t) {
				let n = (null != e ? e.getFullMatch() : "").trim(),
					r = function(e) {
						let t = (0, u.g)(e),
							n = (0, p.R6)(t);
						return new Map([
							[O.dCx.FILTER_FROM, !x.Z.hidePersonalInformation],
							[O.dCx.FILTER_MENTIONS, !x.Z.hidePersonalInformation],
							[O.dCx.FILTER_HAS, !0],
							[O.dCx.FILTER_BEFORE, !0],
							[O.dCx.FILTER_AFTER, !0],
							[O.dCx.FILTER_ON, !0],
							[O.dCx.FILTER_IN, n],
							[O.dCx.FILTER_PINNED, !0]
						])
					}(t),
					s = (0, i.nB)(n).filter(e => null != e.token && !0 === r.get(e.token));
				return {
					group: O.rtL.SEARCH_OPTIONS,
					results: s
				}
			}

			function P(e, t) {
				let n = [];
				return t.type === O.Sap.FILTER ? n.push(I(t.filter, t.token, e, 10)) : t.type === O.Sap.FILTER_ALL ? n = function(e, t) {
					let n = (null != e ? e.getFullMatch() : "").trim(),
						r = [];
					return null != n && "" !== n && ((function(e) {
						let t = (0, u.g)(e),
							n = [O.dCx.FILTER_HAS];
						return x.Z.hidePersonalInformation || (n.push(O.dCx.FILTER_FROM), n.push(O.dCx.FILTER_MENTIONS)), (0, p.R6)(t) && n.push(O.dCx.FILTER_IN), n
					})(t).forEach(n => {
						if (null == n) return;
						let s = I(n, e, t, 3);
						null != s && r.push(s)
					}), r.push(function(e, t) {
						let n = (null != e ? e.getFullMatch() : "").trim();
						if (null != n && "" !== n) {
							var r, s, l;
							let e = null == (r = i.ZP[O.dCx.FILTER_BEFORE]) ? void 0 : r.getAutocompletions(n, t, 1)[0],
								a = null == (s = i.ZP[O.dCx.FILTER_ON]) ? void 0 : s.getAutocompletions(n, t, 1)[0],
								o = null == (l = i.ZP[O.dCx.FILTER_AFTER]) ? void 0 : l.getAutocompletions(n, t, 1)[0];
							return null == e ? null : {
								group: O.rtL.DATES,
								results: [e, a, o]
							}
						}
					}(e, t))), 5 > (0, p.BU)(r) && r.push(R(e, t)), r
				}(t.token, e) : t.type === O.Sap.EMPTY && (n.push(R(t.token, e)), n.push(function(e) {
					if (x.Z.hidePersonalInformation) return null;
					let t = y.Z.getHistory(e);
					return null == t ? null : {
						group: O.rtL.HISTORY,
						results: t.map(e => ({
							text: e
						}))
					}
				}(e))), n
			}

			function T() {
				(0, p.WU)()
			}

			function N(e) {
				let t = v[e];
				if (null == t) return;
				let {
					query: n,
					mode: r,
					tokens: s,
					cursorScope: l,
					autocompletes: a
				} = t;
				v[e] = E({
					searchId: e,
					query: n,
					mode: r,
					tokens: s,
					cursorScope: l,
					autocompletes: a.map(e => (null == e ? void 0 : e.group) === O.rtL.HISTORY ? null : e)
				})
			}

			function k(e) {
				if (null == e || null == v[e]) return !1;
				let {
					query: t,
					mode: n,
					tokens: r,
					cursorScope: s
				} = v[e];
				v[e] = E({
					searchId: e,
					query: t,
					mode: n,
					tokens: r,
					cursorScope: s,
					autocompletes: P(e, n)
				})
			}

			function w() {
				return k(y.Z.getCurrentSearchId())
			}
			class Z extends(r = a.ZP.Store) {
				initialize() {
					this.waitFor(m.ZP, x.Z, g.Z, b.Z, S.Z)
				}
				getState(e) {
					var t;
					return null != (t = v[e]) ? t : E({
						searchId: e
					})
				}
			}
			l = "SearchAutocompleteStore", (s = "displayName") in Z ? Object.defineProperty(Z, s, {
				value: l,
				enumerable: !0,
				configurable: !0,
				writable: !0
			}) : Z[s] = l;
			let A = new Z(o.Z, {
					SEARCH_AUTOCOMPLETE_QUERY_UPDATE: function(e) {
						var t;
						let n, {
								searchId: r,
								tokens: s,
								cursorScope: l
							} = e,
							a = (0, p.cl)(s),
							o = (0, p.qc)(l, s),
							i = null != (t = v[r]) ? t : {},
							c = _[r],
							u = !0;
						if (a === i.query && (null == i.mode || i.mode.filter === o.filter)) n = i.autocompletes, u = !1;
						else if (o.type === O.Sap.EMPTY || o.type === O.Sap.FILTER && o.filter !== O.dCx.FILTER_FROM && o.filter !== O.dCx.FILTER_MENTIONS) null != c && (c.context.clearQuery(), c.results = []), n = P(r, o);
						else if (null != c) {
							let {
								token: e
							} = o;
							null != e && e.getFullMatch().trim().length > 0 ? (h.Z.requestMembers(r, e.getFullMatch().trim(), 10), c.context.setQuery({
								query: e.getFullMatch().trim(),
								filters: {
									guild: r
								}
							}), n = i.autocompletes, u = !1) : (c.context.clearQuery(), n = P(r, o))
						}
						return v[r] = E({
							searchId: r,
							query: a,
							mode: o,
							tokens: s,
							cursorScope: l,
							autocompletes: n
						}), u
					},
					SEARCH_EDITOR_STATE_CLEAR: function(e) {
						let {
							searchId: t
						} = e, n = _[t];
						null != n && (n.context.destroy(), n.results = [], delete _[t]), delete v[t]
					},
					CHANNEL_CREATE: T,
					CHANNEL_DELETE: T,
					STREAMER_MODE_UPDATE: w,
					SEARCH_SCREEN_OPEN: w,
					SEARCH_CLEAR_HISTORY: function(e) {
						let {
							searchId: t
						} = e;
						null != t ? N(t) : Object.keys(v).forEach(N)
					},
					CHANNEL_SELECT: function(e) {
						let {
							channelId: t
						} = e, n = y.Z.getCurrentSearchId();
						if (null == n) return !1;
						if (n === O.aib.DMS && (0, p.R6)(n)) {
							let e = g.Z.getChannel(t);
							if (null == e || !e.isPrivate()) return !1;
							let r = v[n];
							if (null == r) return !1;
							let {
								type: s,
								filter: l
							} = r.mode;
							return s === O.Sap.FILTER && l === O.dCx.FILTER_IN && k(n)
						}
						return !1
					},
					LOGOUT: function() {
						Object.keys(v).forEach(N)
					}
				}),
				M = A
		},
		72006: function(e, t, n) {
			n.d(t, {
				FZ: () => N,
				Hl: () => L,
				NJ: () => Z,
				R8: () => M,
				Sq: () => R,
				Wg: () => F,
				Zn: () => I,
				c2: () => k,
				eE: () => A,
				iE: () => D,
				iK: () => w,
				lv: () => P,
				nR: () => T,
				q0: () => l.a,
				x0: () => E,
				xb: () => H,
				yd: () => C
			}), n(388685), n(539854);
			var r = n(399834),
				s = n(598335),
				l = n.n(s),
				a = n(596464),
				o = n.n(a),
				i = n(476363),
				c = n.n(i),
				u = n(963782),
				d = n.n(u),
				h = n(904112),
				p = n.n(h),
				f = n(599552),
				g = n.n(f),
				m = n(544611),
				b = n.n(m),
				y = n(803068),
				S = n.n(y),
				x = n(561099),
				j = n.n(x),
				O = n(655e3),
				v = n.n(O);

			function _(e, t, n, s) {
				let l = s.getCurrentContent(),
					a = null;
				null != e && (a = (l = l.createEntity(...e)).getLastCreatedEntityKey());
				let o = l.getFirstBlock(),
					i = new r.SelectionState({
						anchorKey: o.getKey(),
						anchorOffset: t,
						focusKey: o.getKey(),
						focusOffset: n
					});
				return l = r.Modifier.applyEntity(l, i, a), r.EditorState.set(s, {
					currentContent: l
				})
			}

			function E(e, t, n, s) {
				let l, a, i = t.getCurrentContent(),
					c = i.getFirstBlock(),
					u = c.getText();
				"number" == typeof n ? (n > u.length && (n = u.length), null != s && s > u.length && (s = u.length), l = new r.SelectionState({
					anchorKey: c.getKey(),
					anchorOffset: n,
					focusKey: c.getKey(),
					focusOffset: null != s && 0 !== s ? s : n
				})) : l = t.getSelection();
				let d = t.getCurrentInlineStyle(),
					h = o()(i, l);
				return l.isCollapsed() ? (i = r.Modifier.insertText(i, l, e, d, h), a = "insert-characters") : (i = r.Modifier.replaceText(i, l, e, d, h), a = "replace-characters"), r.EditorState.push(t, i, a)
			}

			function C(e, t) {
				switch (e) {
					case "delete":
						return j()(t);
					case "delete-word":
						return p()(t);
					case "backspace":
						return S()(t);
					case "backspace-word":
						return d()(t);
					case "backspace-to-start-of-line":
						return c()(t);
					default:
						return t
				}
			}

			function I(e, t) {
				switch (e) {
					case "transpose-characters":
						return v()(t);
					case "move-selection-to-start-of-block":
						return b()(t);
					case "move-selection-to-end-of-block":
						return g()(t);
					default:
						return t
				}
			}

			function R(e) {
				return e.getCurrentContent().getFirstBlock().getText()
			}

			function P(e, t) {
				let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
					r = t.getCurrentContent(),
					s = r.getFirstBlock(),
					l = s.getText(),
					a = [];
				return s.findEntityRanges(e => null !== e.getEntity(), (e, t) => {
					let n = r.getEntity(s.getEntityAt(e)).getType(),
						o = l.substring(e, t);
					a.push({
						processed: !1,
						type: n,
						start: e,
						end: t,
						text: o
					})
				}), e.forEach(e => {
					let r = !1;
					if (a.forEach(n => {
							let {
								type: s,
								start: l,
								end: a
							} = e, o = e.getFullMatch();
							!n.processed && (n.type === s && n.start === l && n.text === o ? (n.processed = !0, r = !0) : (l >= n.start && l < n.end || a > n.start && a <= n.end) && (n.processed = !0, t = _(null, n.start, n.end, t)))
						}), r) return;
					let s = n[e.type];
					t = _([e.type, null != s && s.mutable ? "MUTABLE" : "IMMUTABLE", {
						token: e
					}], e.start, e.end, t)
				}), a.forEach(e => {
					e.processed || (t = _(null, e.start, e.end, t))
				}), t
			}

			function T(e) {
				return r.EditorState.createEmpty(new r.CompositeDecorator(e))
			}

			function N(e) {
				let t = r.EditorState.push(e, r.ContentState.createFromText("")),
					n = e.getSelection();
				return null != n && n.hasFocus && (t = r.EditorState.moveFocusToEnd(t)), t
			}

			function k(e, t) {
				let n = R(t);
				return E(e, t, 0, n.length)
			}

			function w(e, t) {
				let n = t.getSelection();
				return n = (n = n.set("focusOffset", e)).set("anchorOffset", e), r.EditorState.forceSelection(t, n)
			}

			function Z(e) {
				return w(e.getCurrentContent().getFirstBlock().getText().length, e)
			}

			function A(e) {
				return w(0, e)
			}

			function M(e) {
				let t = e.getSelection();
				return t = (t = t.set("focusOffset", 0)).set("isBackward", !0), r.EditorState.forceSelection(e, t)
			}

			function F(e) {
				let t = R(e),
					n = e.getSelection();
				return n = (n = n.set("focusOffset", t.length)).set("isBackward", !1), r.EditorState.forceSelection(e, n)
			}

			function L(e) {
				let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 512,
					n = R(e);
				if (n.length > t) {
					let s = e.getSelection();
					e = E("", e, t, n.length), s.getAnchorOffset() > t && (s = s.set("anchorOffset", t)), s.getFocusOffset() > t && (s = s.set("focusOffset", t)), e = r.EditorState.forceSelection(e, s)
				}
				return e
			}

			function D(e) {
				let t = window.getSelection();
				if (null == t || "Caret" !== t.type || null == e) return;
				let n = t.getRangeAt(0);
				if (! function(e, t) {
						for (; null != e;) {
							if (e === t) return !0;
							e = e.parentNode
						}
						return !1
					}(n.commonAncestorContainer, e)) return;
				let r = n.getClientRects()[0],
					s = e.getClientRects()[0];
				if (null == r || null == s) return;
				let l = r.left - s.left + e.scrollLeft;
				l < e.scrollLeft ? e.scrollLeft = l - 10 : l > e.scrollLeft + e.offsetWidth && (e.scrollLeft = l - e.offsetWidth + 3)
			}

			function H(e) {
				return 0 === R(e).length
			}
		},
		181389: function(e, t, n) {
			n.d(t, {
				Jl: () => o,
				g9: () => i
			}), n(539854), n(35282);
			var r = n(395041);
			n(349033);
			var s = n(999650);
			n(72006);
			var l = n(405656);
			n(981631);
			let a = {
				[s.Qe.FILTER]: r.w,
				[s.Qe.ANSWER]: r.O
			};

			function o() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
					t = [];
				return Object.keys(e).forEach(n => {
					let r = e[n];
					t.push({
						strategy: (e, t, r) => {
							e.findEntityRanges(e => {
								let t = e.getEntity();
								return null !== t && r.getEntity(t).getType() === n
							}, t)
						},
						component: a[r.componentType]
					})
				}), t
			}

			function i(e, t) {
				let {
					focusOffset: n,
					anchorOffset: r
				} = t.getSelection();
				return (0, l.g9)(e, n, r)
			}
		},
		989925: function(e, t, n) {
			n.d(t, {
				D: () => r
			});
			let r = 200
		},
		555565: function(e, t, n) {
			e.exports = {
				messagesPopoutWrap: "messagesPopoutWrap__45690",
				header: "header__45690",
				titleContainer: "titleContainer__45690",
				footer: "footer__45690",
				loadingMore: "loadingMore__45690",
				hasMore: "hasMore__45690",
				messagesPopout: "messagesPopout__45690",
				messageGroupWrapper: "messageGroupWrapper__45690",
				messageGroupCozy: "messageGroupCozy__45690",
				scrollingFooterWrap: "scrollingFooterWrap__45690",
				emptyPlaceholder: "emptyPlaceholder__45690",
				image: "image__45690",
				loadingPlaceholder: "loadingPlaceholder__45690",
				body: "body__45690",
				actionButtons: "actionButtons__45690",
				jumpButton: "jumpButton__45690",
				loading: "loading__45690",
				visible: "visible__45690",
				closeIcon: "closeIcon__45690"
			}
		},
		953928: function(e, t, n) {
			e.exports = {
				container: "container__55c99",
				queryContainer: "queryContainer__55c99",
				queryShortcut: "queryShortcut__55c99",
				queryText: "queryText__55c99",
				keyCombo: "keyCombo__55c99",
				focused: "focused__55c99",
				inChannelOptionContainer: "inChannelOptionContainer__55c99",
				inChannelOption: "inChannelOption__55c99",
				searchResultNameContainer: "searchResultNameContainer__55c99",
				channelContainer: "channelContainer__55c99"
			}
		},
		277640: function(e, t, n) {
			e.exports = {
				searchAnswer: "searchAnswer_bd8186",
				searchFilter: "searchFilter_bd8186"
			}
		},
		108921: function(e, t, n) {
			e.exports = {
				pro: "pro__30cbe",
				tip: "tip__30cbe",
				block: "block__30cbe",
				inline: "inline__30cbe"
			}
		},
		220705: function(e, t, n) {
			e.exports = {
				arrowBounce: "arrowBounce__49676",
				updateIconForeground: "updateIconForeground__49676",
				search: "search__49676",
				downloadArrow: "downloadArrow__49676",
				cloud: "cloud__49676",
				controlButtonWrapper: "controlButtonWrapper__49676"
			}
		},
		852747: function(e, t, n) {
			e.exports = {
				popover: "popover_f84418",
				popoverReactionHoverBar: "popoverReactionHoverBar_f84418",
				hoverBarButton: "hoverBarButton_f84418",
				icon: "icon_f84418",
				buttonContent: "buttonContent_f84418",
				tooltip: "tooltip_f84418",
				newBadge: "newBadge_f84418",
				separator: "separator_f84418"
			}
		},
		432513: function(e, t, n) {
			e.exports = {
				channelHeader: "channelHeader__06fb5",
				icon: "icon__06fb5",
				dmIcon: "dmIcon__06fb5",
				channelNameSection: "channelNameSection__06fb5",
				channelTypeIcon: "channelTypeIcon__06fb5"
			}
		},
		327298: function(e, t, n) {
			e.exports = {
				container: "container_e512ac",
				imageContainer: "imageContainer_e512ac",
				image: "image_e512ac",
				primaryButton: "primaryButton_e512ac"
			}
		},
		491350: function(e, t, n) {
			e.exports = {
				emptyContainer: "emptyContainer__4a7f0",
				emptyInner: "emptyInner__4a7f0",
				image: "image__4a7f0",
				header: "header__4a7f0",
				upsellButton: "upsellButton__4a7f0",
				upsellContainer: "upsellContainer__4a7f0",
				upsellText: "upsellText__4a7f0"
			}
		},
		585693: function(e, t, n) {
			e.exports = {
				popoutContainer: "popoutContainer__4ad69",
				messagesScroller: "messagesScroller__4ad69",
				message: "message__4ad69",
				messageContainer: "messageContainer__4ad69",
				hoverBar: "hoverBar__4ad69",
				clickableMessageBackground: "clickableMessageBackground__4ad69",
				deletedMessage: "deletedMessage__4ad69",
				deleteIcon: "deleteIcon__4ad69"
			}
		},
		294117: function(e, t, n) {
			e.exports = {
				container: "container_ea9851",
				icon: "icon_ea9851"
			}
		},
		665333: function(e, t, n) {
			e.exports = {
				search: "search__97492",
				searchBar: "searchBar__97492",
				icon: "icon__97492",
				focused: "focused__97492",
				open: "open__97492"
			}
		},
		107242: function(e, t, n) {
			e.exports = {
				searchHeader: "searchHeader_f3b986",
				searchHeaderWithSubtitle: "searchHeaderWithSubtitle_f3b986",
				searchHeaderTabList: "searchHeaderTabList_f3b986",
				searchHeaderTab: "searchHeaderTab_f3b986",
				helpdeskLink: "helpdeskLink_f3b986",
				totalResultsWrapper: "totalResultsWrapper_f3b986",
				totalResults: "totalResults_f3b986",
				totalResultsWithSubtitle: "totalResultsWithSubtitle_f3b986",
				spinnerWrapper: "spinnerWrapper_f3b986",
				spinner: "spinner_f3b986",
				spinnerPath: "spinnerPath_f3b986"
			}
		},
		290082: function(e, t, n) {
			e.exports = {
				resultsGroup: "resultsGroup__56fec",
				header: "header__56fec",
				searchClearHistory: "searchClearHistory__56fec",
				searchLearnMore: "searchLearnMore__56fec",
				searchHistoryRow: "searchHistoryRow__56fec",
				content: "content__56fec",
				option: "option__56fec",
				plusIcon: "plusIcon__56fec",
				nonText: "nonText__56fec",
				filter: "filter__56fec",
				answer: "answer__56fec",
				user: "user__56fec",
				displayAvatar: "displayAvatar__56fec",
				displayedNick: "displayedNick__56fec",
				displayUsername: "displayUsername__56fec",
				searchOption: "searchOption__56fec",
				datePicker: "datePicker__56fec",
				datePickerHint: "datePickerHint__56fec",
				hint: "hint__56fec",
				hintValue: "hintValue__56fec",
				searchResultChannelIcon: "searchResultChannelIcon__56fec",
				searchResultDMChannelIcon: "searchResultDMChannelIcon__56fec",
				searchResultGDMChannelIcon: "searchResultGDMChannelIcon__56fec",
				searchResultDMChannelName: "searchResultDMChannelName__56fec",
				searchResultDMUserName: "searchResultDMUserName__56fec",
				searchResultChannelCategory: "searchResultChannelCategory__56fec",
				resultChannel: "resultChannel__56fec"
			}
		},
		682065: function(e, t, n) {
			e.exports = {
				searchResultsWrap: "searchResultsWrap_a9e706",
				scroller: "scroller_a9e706",
				emptyResultsWrap: "emptyResultsWrap_a9e706",
				emptyResultsContent: "emptyResultsContent_a9e706",
				emptyResultsText: "emptyResultsText_a9e706",
				stillIndexing: "stillIndexing_a9e706",
				noResultsImage: "noResultsImage_a9e706",
				errorImage: "errorImage_a9e706",
				errorMessage: "errorMessage_a9e706",
				noResults: "noResults_a9e706",
				alt: "alt_a9e706"
			}
		},
		175943: function(e, t, n) {
			e.exports = {
				container: "container__3379f",
				icons: "icons__3379f",
				iconContainer: "iconContainer__3379f",
				icon: "icon__3379f"
			}
		},
		486748: function(e, t, n) {
			e.exports = {
				root: "root__85d05",
				comboIcon: "comboIcon__85d05",
				count: "count__85d05",
				icon: "icon__85d05"
			}
		},
		539658: function(e, t, n) {
			e.exports = {}
		}
	}
]);
//# sourceMappingURL=f68fa616de59e0b2.js.map