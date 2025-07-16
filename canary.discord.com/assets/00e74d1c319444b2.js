(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
	["86915"], {
		790333: function(e, t, n) {
			e.exports = n(757009)(function(e, t, n) {
				e[+!n].push(t)
			}, function() {
				return [
					[],
					[]
				]
			})
		},
		309095: function(e) {
			"use strict";
			e.exports = "/assets/8819ff5e2c203fa4.svg"
		},
		316491: function(e) {
			"use strict";
			e.exports = "/assets/b00bbf36ff21d401.svg"
		},
		925442: function(e) {
			"use strict";
			e.exports = "/assets/74f00f2978cef9b7.svg"
		},
		301358: function(e) {
			"use strict";
			e.exports = "/assets/3380094bf65fc5f7.svg"
		},
		677374: function(e) {
			"use strict";
			e.exports = "/assets/e3f8c28855880b34.svg"
		},
		230608: function(e) {
			"use strict";
			e.exports = "/assets/9e832037368fddee.svg"
		},
		514811: function(e) {
			"use strict";
			e.exports = "/assets/b8fc53adc8de844f.svg"
		},
		27377: function(e) {
			"use strict";
			e.exports = "/assets/bb86eb0eca3eca1c.svg"
		},
		299603: function(e) {
			"use strict";
			e.exports = "/assets/608b16127646e28c.svg"
		},
		521715: function(e) {
			"use strict";
			e.exports = "/assets/ef103ccb22234d89.svg"
		},
		62640: function(e) {
			"use strict";
			e.exports = "/assets/6ca913b246a05ffc.svg"
		},
		639933: function(e) {
			"use strict";
			e.exports = "/assets/8f18dfd4baacebf4.svg"
		},
		668390: function(e, t, n) {
			"use strict";
			n.d(t, {
				Z: () => f
			}), n(388685);
			var i = n(255367),
				l = n(73800),
				r = n(120356),
				s = n.n(r),
				a = n(780384),
				o = n(481060),
				c = n(239091),
				d = n(741247),
				u = n(75464),
				h = n(884902),
				m = n(189173);

			function g(e) {
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

			function p(e) {
				let {
					role: t,
					guild: r
				} = e, [a, u] = l.useState(!1);
				return (0, d.e)(r, t) ? (0, i.jsx)(o.P3F, {
					onClick: e => {
						u(!0), (0, c.jW)(e, async () => {
							let {
								default: e
							} = await Promise.resolve().then(n.bind(n, 741247));
							return n => {
								var l, s;
								return (0, i.jsx)(e, (l = g({}, n), s = s = {
									role: t,
									guild: r
								}, Object.getOwnPropertyDescriptors ? Object.defineProperties(l, Object.getOwnPropertyDescriptors(s)) : (function(e, t) {
									var n = Object.keys(e);
									if (Object.getOwnPropertySymbols) {
										var i = Object.getOwnPropertySymbols(e);
										n.push.apply(n, i)
									}
									return n
								})(Object(s)).forEach(function(e) {
									Object.defineProperty(l, e, Object.getOwnPropertyDescriptor(s, e))
								}), l))
							}
						}, {
							onClose: () => u(!1)
						})
					},
					className: s()(m.roleOverflow, {
						[m.open]: a
					}),
					children: (0, i.jsx)(o.xhG, {
						size: "custom",
						color: "currentColor",
						width: 20,
						height: 20
					})
				}) : null
			}

			function f(e) {
				let {
					color: t,
					id: l,
					role: r,
					guild: s,
					children: c,
					isDragging: d,
					selectedItem: f,
					onItemSelect: x,
					itemType: j,
					locked: b,
					lockTooltip: v,
					showContextMenu: y,
					theme: C,
					roleStyle: N,
					onContextMenu: S,
					"aria-label": O
				} = e, E = (0, h._f)(s.id, r, null == r ? void 0 : r.colorStrings);
				return d ? (0, i.jsx)("div", {
					className: m.dragged
				}) : (0, i.jsx)(o.njP.Item, {
					className: m.role,
					id: l,
					selectedItem: f,
					onItemSelect: x,
					itemType: j,
					"aria-label": null != v ? "".concat(O, ", ").concat(v) : O,
					onContextMenu: S,
					children: (0, i.jsxs)("div", {
						className: m.roleContent,
						children: ["dot" === N ? (0, i.jsx)(o.FhE, {
							color: null != t ? t : void 0,
							colors: E,
							className: m.roleDot,
							background: !1,
							tooltip: !1
						}) : (0, i.jsx)(o.xko, {
							color: null != t ? t : void 0,
							colors: E,
							className: m.roleCircle
						}), function() {
							if (!b) return null;
							let e = (0, a.wj)(C) ? n(27377) : n(514811);
							return (0, i.jsx)(o.ua7, {
								text: v,
								color: o.ua7.Colors.RED,
								children: t => (0, i.jsx)(u.Z, g({
									className: m.lock,
									src: e
								}, t))
							})
						}(), (0, i.jsx)("div", {
							className: m.roleInner,
							children: c
						}), y && null != r ? (0, i.jsx)(p, {
							guild: s,
							role: r
						}) : null]
					})
				})
			}
		},
		129865: function(e, t, n) {
			"use strict";
			n.d(t, {
				Z: () => i
			});
			let i = (0, n(818083).B)({
				kind: "guild",
				id: "2024-03_advanced_slowmode_input",
				label: "advanced slowmode input",
				defaultConfig: {
					enabled: !1
				},
				treatments: [{
					id: 1,
					label: "enable the advanced slowmode input",
					config: {
						enabled: !0
					}
				}]
			})
		},
		940639: function(e, t, n) {
			"use strict";
			n.d(t, {
				Z: () => j
			}), n(539854), n(388685), n(413496), n(433524), n(35282), n(781311);
			var i, l = n(255367),
				r = n(73800),
				s = n(120356),
				a = n.n(s),
				o = n(442837),
				c = n(481060),
				d = n(607070),
				u = n(251625),
				h = n(226951),
				m = n(981631),
				g = n(388032),
				p = n(92304);

			function f(e, t, n) {
				return t in e ? Object.defineProperty(e, t, {
					value: n,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : e[t] = n, e
			}
			class x extends(i = r.Component) {
				getSelectedSection(e) {
					let {
						selectedSection: t
					} = this.state;
					if (null != t) return t;
					for (let t = 0; t < e.length; t++)
						if (e[t].length > 0) return t;
					return 0
				}
				componentDidMount() {
					this.focus()
				}
				render() {
					let {
						position: e
					} = this.props, t = this.getRows(), n = [];
					if (this.isEmpty()) n.push(1);
					else
						for (let e of t) n.push(e.length);
					return (0, l.jsxs)(c.VqE, {
						className: a()(p.container, "bottom" === e ? p.positionBottom : p.positionTop),
						"aria-label": this.props["aria-label"],
						children: [(0, l.jsx)("div", {
							className: p.autocompleteShadow
						}), (0, l.jsx)("div", {
							className: p.autocompleteArrowWrapper,
							children: (0, l.jsx)("div", {
								className: p.autocompleteArrow
							})
						}), (0, l.jsxs)("header", {
							className: p.header,
							children: [(0, l.jsx)("div", {
								className: p.autocompleteHeaderBackground
							}), (0, l.jsx)("div", {
								className: p.headerText,
								children: this.props.label
							}), (0, l.jsx)("input", {
								type: "text",
								className: p.input,
								placeholder: this.props.placeholder,
								ref: this.inputRef,
								onChange: this.handleChange,
								onKeyDown: this.handleKeyDown
							})]
						}), (0, l.jsx)("section", {
							className: p.sectionTag,
							children: (0, l.jsx)(c.aVo, {
								className: p.autocompleteScroller,
								fade: !0,
								sections: n,
								sectionHeight: this.getSectionHeight,
								rowHeight: 40,
								renderRow: this.renderRow,
								renderSection: this.renderSection
							})
						})]
					})
				}
				focus() {
					null != this.inputRef.current && this.inputRef.current.focus()
				}
				constructor(...e) {
					super(...e), f(this, "inputRef", r.createRef()), f(this, "state", {
						query: null,
						selectedSection: null,
						selectedRow: 0
					}), f(this, "memoizedGetRows", (0, u.oH)((e, t, n) => {
						let i = RegExp("^".concat(h.Z.escape(null != e ? e.trim() : "")), "i"),
							l = e => i.test(e);
						return n.map((e, n) => t(l, n))
					})), f(this, "getRows", () => {
						let {
							onFilterResults: e,
							sections: t
						} = this.props, {
							query: n
						} = this.state;
						return this.memoizedGetRows(n, e, t)
					}), f(this, "handleChange", e => {
						var t, n;
						let i = e.target.value;
						null == (t = (n = this.props).onQueryChange) || t.call(n, i), this.setState({
							query: i,
							selectedSection: null,
							selectedRow: 0
						})
					}), f(this, "handleMouseEnter", (e, t) => {
						this.setState({
							selectedSection: e,
							selectedRow: t
						})
					}), f(this, "handleClick", (e, t) => {
						let n = this.getRows();
						this.props.onSelect(n[e][t], e), this.props.onClose()
					}), f(this, "handleKeyDown", e => {
						let {
							keyboardModeEnabled: t
						} = this.props, {
							selectedRow: n
						} = this.state, i = this.getRows(), l = this.getSelectedSection(i);
						switch (e.keyCode) {
							case m.yXg.TAB:
								if (t) break;
							case m.yXg.ARROW_DOWN:
								e.preventDefault(), this.props.sections.length > l && ++n >= i[l].length && (++l >= this.props.sections.length && (l = 0), n = 0), this.setState({
									selectedSection: l,
									selectedRow: n
								});
								break;
							case m.yXg.ARROW_UP:
								e.preventDefault(), --n < 0 && (--l < 0 && (l = this.props.sections.length - 1), n = i[l].length - 1), this.setState({
									selectedSection: l,
									selectedRow: n
								});
								break;
							case m.yXg.ENTER:
								e.preventDefault(), this.props.sections.length > l && i[l].length > n && (this.props.onSelect(i[l][n], l), this.props.onClose());
								break;
							case m.yXg.ESCAPE:
								e.preventDefault(), this.props.onSelect(null, null), this.props.onClose()
						}
					}), f(this, "isEmpty", () => 0 === this.getRows().reduce((e, t) => e + t.length, 0)), f(this, "getSectionHeight", e => {
						let t = this.props.sections[e];
						return this.isEmpty() || null == t ? 0 : 44
					}), f(this, "renderSection", e => {
						let {
							section: t
						} = e, n = this.props.sections[t];
						return this.isEmpty() || null == n ? null : (0, l.jsx)("div", {
							className: p.section,
							children: n
						}, t)
					}), f(this, "renderRow", e => {
						var t;
						let {
							section: n,
							row: i
						} = e, {
							selectedRow: r
						} = this.state;
						if (this.isEmpty()) return (0, l.jsxs)("div", {
							className: p.empty,
							children: [(0, l.jsx)("p", {
								className: p.noResultsHeader,
								children: g.intl.string(g.t["4o4z3d"])
							}), (0, l.jsx)("p", {
								children: g.intl.string(g.t.QwSXv7)
							})]
						}, "empty");
						let s = this.getRows(),
							o = this.getSelectedSection(s),
							d = null == (t = s[n]) ? void 0 : t[i];
						return (0, l.jsx)(c.P3F, {
							onClick: this.handleClick.bind(this, n, i),
							onMouseEnter: this.handleMouseEnter.bind(this, n, i),
							className: a()(p.row, {
								[p.selected]: o === n && r === i
							}),
							children: (0, l.jsx)("div", {
								className: p.rowInner,
								children: this.props.onRenderResult(d, n)
							})
						}, "".concat(n, "-").concat(i))
					})
				}
			}
			f(x, "defaultProps", {
				sections: [null]
			});
			let j = o.ZP.connectStores([d.Z], () => ({
				keyboardModeEnabled: d.Z.keyboardModeEnabled
			}))(x)
		},
		429673: function(e, t, n) {
			"use strict";
			n.d(t, {
				s: () => l
			});
			let i = (0, n(818083).B)({
				kind: "guild",
				id: "2025-05_enable_emoji_in_channel_names_guild",
				label: "Emojis in Channel Name",
				defaultConfig: {
					enabled: !1
				},
				treatments: [{
					id: 1,
					label: "Show emoji picker in channel name input fields",
					config: {
						enabled: !0
					}
				}]
			});

			function l(e) {
				let {
					guildId: t,
					location: n
				} = e;
				return i.useExperiment({
					guildId: t,
					location: n
				}, {
					autoTrackExposure: !0
				}).enabled
			}
		},
		27544: function(e, t, n) {
			"use strict";
			n.d(t, {
				Z: () => p
			}), n(388685);
			var i = n(255367),
				l = n(73800),
				r = n(748780),
				s = n(442837),
				a = n(755721),
				o = n(481060),
				c = n(741361),
				d = n(856606),
				u = n(277053),
				h = n(259580),
				m = n(388032),
				g = n(241756);

			function p() {
				let e = (0, s.e7)([u.Z], () => u.Z.advancedMode),
					[t] = l.useState(new r.Z.Value(+!!e));
				return (0, i.jsxs)(i.Fragment, {
					children: [(0, i.jsx)(o.$i$, {
						className: g.advancedModeDivider
					}), (0, i.jsx)(o.y5t, {
						component: (0, i.jsx)(a.zx, {
							look: a.zx.Looks.BLANK,
							color: a.zx.Colors.TRANSPARENT,
							onClick: function() {
								e ? r.Z.timing(t, {
									toValue: 0,
									duration: 250
								}).start(() => {
									(0, c.d$)(!1)
								}) : ((0, c.d$)(!0), r.Z.timing(t, {
									toValue: 1,
									duration: 250
								}).start())
							},
							children: (0, i.jsxs)(o.vwX, {
								tag: "h1",
								className: g.advancedTitle,
								children: [m.intl.string(m.t.dYRsrq), (0, i.jsx)(h.Z, {
									expanded: e,
									className: g.titleCaret,
									width: 20,
									height: 20
								})]
							})
						}),
						children: e && (0, i.jsx)(r.Z.div, {
							style: {
								opacity: t
							},
							children: (0, i.jsx)(d.Z, {})
						})
					})]
				})
			}
		},
		351123: function(e, t, n) {
			"use strict";
			n.d(t, {
				Z: () => X
			}), n(388685);
			var i = n(255367),
				l = n(73800),
				r = n(120356),
				s = n.n(r),
				a = n(442837),
				o = n(755721),
				c = n(481060),
				d = n(668781),
				u = n(493683),
				h = n(787014),
				m = n(741361),
				g = n(911969),
				p = n(385499),
				f = n(134433),
				x = n(600164),
				j = n(156699),
				b = n(693196),
				v = n(434404),
				y = n(200498),
				C = n(146085),
				N = n(192079),
				S = n(277053),
				O = n(271383),
				E = n(485386),
				T = n(430824),
				w = n(496675),
				Z = n(594174),
				R = n(903386),
				I = n(700785),
				_ = n(605436),
				P = n(27544),
				A = n(415236),
				L = n(182905),
				D = n(71080),
				M = n(981631),
				k = n(231338),
				B = n(388032),
				V = n(690550);

			function U(e) {
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

			function W(e, t) {
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

			function H(e) {
				let {
					channel: t,
					roles: n,
					members: l,
					disabledReason: r,
					getRemoveTooltipHint: a
				} = e;
				return (0, i.jsx)(c.aVo, {
					className: V.roleMemberList,
					sections: [n.length, l.length],
					renderRow: function(e) {
						let o, h, j, {
								section: b,
								row: v
							} = e,
							C = !1;
						switch (b) {
							case D.m$.ROLES:
								var N;
								j = (h = n[v]).rowType === D.aC.ROLE && (null == (N = h.tags) ? void 0 : N.guild_connections) === null ? (0, i.jsx)(f.Z, {
									className: V.shield,
									color: h.colorString,
									size: 20
								}) : (0, i.jsx)(c.lZ8, {
									size: "custom",
									className: V.shield,
									color: h.colorString,
									height: 20
								}), o = (0, i.jsxs)(i.Fragment, {
									children: [(0, i.jsx)("div", {
										className: V.rowHeight,
										children: j
									}), (0, i.jsx)(c.Text, {
										variant: "text-sm/normal",
										className: V.rowLabel,
										color: h.disabled ? "text-muted" : "text-default",
										children: h.name
									})]
								}), C = h.disabled;
								break;
							case D.m$.MEMBERS:
								h = l[v], o = (0, i.jsxs)(i.Fragment, {
									children: [(0, i.jsx)(c.qEK, {
										src: h.avatarURL,
										size: c.EFr.SIZE_24,
										"aria-hidden": !0
									}), (0, i.jsx)(c.Text, {
										className: V.rowLabel,
										variant: "text-sm/normal",
										children: h.name
									}), h.bot && (0, i.jsx)(p.Z, {
										verified: h.verifiedBot,
										className: V.rowBotTag
									}), null != h.nickname && (0, i.jsx)(c.Text, {
										color: "text-muted",
										className: V.rowLabelSubText,
										variant: "text-sm/normal",
										children: h.username
									})]
								}), C = h.disabled;
								break;
							default:
								h = null
						}
						if (null == h) return null;
						let S = !C && null == r && null != h.id;
						return (0, i.jsxs)(x.Z, {
							justify: x.Z.Justify.BETWEEN,
							align: x.Z.Align.CENTER,
							className: V.memberRow,
							children: [(0, i.jsx)(x.Z, {
								justify: x.Z.Justify.START,
								align: x.Z.Align.CENTER,
								className: V.__invalid_memberRowBody,
								children: o
							}), (0, i.jsx)(c.Text, {
								color: "text-muted",
								variant: "text-xs/normal",
								children: _.zB(h.rowType)
							}), h.rowType !== D.aC.EMPTY_STATE && (0, i.jsx)(c.DY3, {
								className: V.removeIconContainer,
								text: null != r ? r : a(h.rowType, h.disabled),
								children: (0, i.jsx)(c.P3F, {
									onClick: () => {
										var e, n, i;
										return S && null != h && (e = h.id, n = h.name, i = h.rowType, void d.Z.show({
											title: B.intl.string(B.t.GuPYQE),
											body: B.intl.format(B.t.xERCnZ, {
												name: n
											}),
											cancelText: B.intl.string(B.t["ETE/oK"]),
											onConfirm: () => (function(e, n) {
												if (t.isGuildStageVoice()) {
													let i = (0, y._L)(e, n === D.aC.ROLE ? g.BN.ROLE : g.BN.MEMBER, t);
													(0, y.Os)(i) ? u.Z.clearPermissionOverwrite(t.id, i.id): (0, m.hw)(t.id, [i])
												} else u.Z.clearPermissionOverwrite(t.id, e)
											})(e, i)
										}))
									},
									"aria-disabled": !S,
									"aria-label": B.intl.string(B.t.N86XcH),
									children: (0, i.jsx)(c.k$p, {
										size: "md",
										color: "currentColor",
										className: s()(V.removeIcon, {
											[V.disabledRemoveIcon]: C || r
										})
									})
								})
							})]
						}, h.id)
					},
					rowHeight: 40,
					renderSection: function(e) {
						let {
							section: t
						} = e;
						switch (t) {
							case D.m$.ROLES:
								return (0, i.jsx)(z, {
									title: B.intl.string(B.t.LPJmLy)
								}, "roles-title");
							case D.m$.MEMBERS:
								return (0, i.jsx)(z, {
									title: B.intl.string(B.t["9Oq93t"])
								}, "members-title")
						}
					},
					sectionHeight: 49
				})
			}

			function G(e) {
				let {
					guild: t,
					channel: l,
					permissionUpdates: r
				} = e, o = (0, a.e7)([E.Z], () => E.Z.getRoles(t.id)), d = _.RZ(t, o, l, C.yP, r), u = (0, a.e7)([O.ZP], () => _.cR(O.ZP.getMemberIds(t.id), l, t, C.yP, r)), h = (0, y.nG)(l.id);

				function m() {
					(0, c.ZDy)(async () => {
						let {
							default: e
						} = await n.e("46786").then(n.bind(n, 388131));
						return t => (0, i.jsx)(e, W(U({}, t), {
							channelId: l.id
						}))
					})
				}
				return (0, i.jsxs)("div", {
					className: s()(V.settingCard, V.active),
					children: [(0, i.jsx)(A.Z, {
						label: B.intl.string(B.t.StpcFR),
						description: B.intl.string(B.t.f7VbhI),
						icon: (0, i.jsx)(c.ewx, {
							size: "custom",
							color: "currentColor",
							className: V.cardIcon,
							height: 20,
							width: 20
						}),
						id: "StageModeratorSettingCard"
					}), (0, i.jsxs)("div", {
						className: V.cardFolder,
						children: [(0, i.jsxs)(x.Z, {
							justify: x.Z.Justify.BETWEEN,
							align: x.Z.Align.CENTER,
							className: V.folderHeader,
							children: [(0, i.jsx)(c.vwX, {
								tag: "h5",
								className: V.folderTitle,
								children: B.intl.string(B.t["7BWDRU"])
							}), (0, i.jsx)(c.ua7, {
								text: B.intl.string(B.t.arRuER),
								shouldShow: !h,
								children: e => (0, i.jsx)(c.zxk, W(U({
									variant: "primary",
									size: "sm",
									text: B.intl.string(B.t.dMJ3Y2)
								}, e), {
									onClick: m,
									disabled: !h
								}))
							})]
						}), (0, i.jsx)(H, {
							channel: l,
							roles: d,
							members: u,
							disabledReason: h ? null : B.intl.string(B.t.arRuER),
							getRemoveTooltipHint: N.kk
						})]
					})]
				})
			}

			function F(e) {
				let {
					guild: t,
					channel: l,
					isPrivateGuildChannel: r,
					roles: d,
					members: u
				} = e, h = (0, a.e7)([w.Z], () => w.Z.can(k.Pl.ADMINISTRATOR, t)), m = I.Uu(k.Pl.VIEW_CHANNEL, t), g = I.Uu(k.Pl.ADMINISTRATOR, t);
				async function p() {
					let e = l.accessPermissions,
						s = Z.default.getCurrentUser();
					if (!r && null != await (0, b.T)(t.id, l.id)) return void(0, c.ZDy)(async () => {
						let {
							ConfirmModal: e
						} = await Promise.resolve().then(n.bind(n, 878678));
						return n => (0, i.jsx)(e, W(U({}, n), {
							confirmButtonColor: o.Tt.BRAND,
							header: B.intl.string(B.t.ZzdgUl),
							confirmText: B.intl.string(B.t.BddRzc),
							children: (0, i.jsx)(c.Text, {
								variant: "text-md/normal",
								children: B.intl.format(B.t.DwY2vL, {
									onClick: () => {
										v.Z.open(t.id, M.pNK.ONBOARDING), n.onClose()
									}
								})
							})
						}))
					});
					_.$e(l, e, r), r || null == s || h || _.Yh(l, e)
				}
				let f = {
					title: B.intl.string(B.t.aUI70t),
					subtitle: B.intl.string(B.t.hfbjIC),
					formLabel: B.intl.string(B.t.P6eCbG)
				};
				return l.isCategory() ? (f.title = B.intl.string(B.t.lEPAZ2), f.subtitle = B.intl.string(B.t["RQUk6+"]), f.formLabel = B.intl.string(B.t["8VIxJi"])) : l.type === M.d4z.GUILD_VOICE && (f.subtitle = B.intl.string(B.t.cLjvKi)), (0, i.jsxs)("div", {
					className: s()(V.settingCard, {
						[V.active]: r
					}),
					children: [(0, i.jsx)(A.Z, {
						description: f.subtitle,
						icon: (0, i.jsx)(c.mBM, {
							size: "custom",
							color: "currentColor",
							className: V.cardIcon,
							height: 20,
							width: 20
						}),
						id: "PrivateChannelSettingCard",
						label: f.title,
						onChange: p,
						value: r
					}), (0, i.jsxs)("div", {
						className: V.cardFolder,
						children: [g && (0, i.jsx)("div", {
							className: V.adminWarning,
							children: (0, i.jsx)(c.Wn, {
								messageType: c.QYI.WARNING,
								children: B.intl.string(B.t["5f3HIC"])
							})
						}), !m && !g && !r && (0, i.jsx)("div", {
							className: V.adminWarning,
							children: (0, i.jsx)(c.Wn, {
								messageType: c.QYI.WARNING,
								children: B.intl.string(B.t.ZAk4Q0)
							})
						}), r && (0, i.jsxs)(i.Fragment, {
							children: [(0, i.jsxs)(x.Z, {
								justify: x.Z.Justify.BETWEEN,
								align: x.Z.Align.CENTER,
								className: V.folderHeader,
								children: [(0, i.jsx)(c.vwX, {
									tag: "h5",
									className: V.folderTitle,
									children: f.formLabel
								}), (0, i.jsx)(c.zxk, {
									variant: "primary",
									size: "sm",
									text: B.intl.string(B.t.dMJ3Y2),
									onClick: function() {
										(0, c.ZDy)(async () => {
											let {
												default: e
											} = await Promise.resolve().then(n.bind(n, 185413));
											return t => (0, i.jsx)(e, W(U({}, t), {
												channelId: l.id,
												inSettings: !0
											}))
										})
									}
								})]
							}), (0, i.jsx)(H, {
								channel: l,
								roles: d,
								members: u,
								getRemoveTooltipHint: _.yv
							})]
						})]
					})]
				})
			}

			function z(e) {
				let {
					title: t
				} = e;
				return (0, i.jsxs)("div", {
					children: [(0, i.jsx)(c.$i$, {
						className: V.divider
					}), (0, i.jsx)(c.vwX, {
						className: s()(V.folderTitle, V.sectionTitle),
						tag: "h5",
						children: t
					})]
				})
			}
			let X = a.ZP.connectStores([S.Z, w.Z, O.ZP, T.Z, E.Z], () => {
				let e, t = S.Z.channel,
					n = S.Z.category,
					i = [],
					l = [],
					r = {},
					s = !1;
				if (null != t) {
					e = T.Z.getGuild(t.getGuildId());
					let n = O.ZP.getMemberIds(null == e ? void 0 : e.id);
					if (null != e) {
						let a = E.Z.getRoles(e.id);
						r = S.Z.editedPermissionIds.reduce((e, t) => {
							let n = S.Z.getPermissionOverwrite(t);
							return null != n && (e[t] = n), e
						}, {}), i = _.kA(e, a, t, t.accessPermissions, r), l = _.cR(n, t, e, t.accessPermissions, r), s = _.Yk(t, r)
					}
				}
				return {
					canSyncChannel: null != n && w.Z.can(k.Pl.MANAGE_ROLES, n),
					category: n,
					channel: t,
					filteredMembers: l,
					filteredRoles: i,
					guild: e,
					isPrivateGuildChannel: s,
					locked: S.Z.locked,
					permissionUpdates: r
				}
			})(function(e) {
				let {
					canSyncChannel: t,
					category: r,
					channel: s,
					filteredMembers: a,
					filteredRoles: o,
					guild: d,
					isPrivateGuildChannel: u,
					locked: m,
					permissionUpdates: g
				} = e, [p, f] = l.useState(!I.Uu(k.Pl.SEND_MESSAGES, s));
				if (null == s || null == d) return null;
				let x = {
					title: B.intl.string(B.t.BAZMBg),
					subtitle: B.intl.string(B.t.XLrZys)
				};
				return s.isCategory() && (x.title = B.intl.string(B.t["/uELTk"]), x.subtitle = B.intl.string(B.t["8iAg3d"])), (0, i.jsxs)(i.Fragment, {
					children: [(0, i.jsx)(c.vwX, {
						tag: "h1",
						children: x.title
					}), (0, i.jsx)(c.R94, {
						children: x.subtitle
					}), null != r && t ? m ? (0, i.jsx)(L.Z, {
						canSync: !1,
						icon: c.DuK,
						noticeText: B.intl.format(B.t.ETJqLi, {
							categoryName: r.name
						})
					}) : (0, i.jsx)(L.Z, {
						buttonText: B.intl.string(B.t.NVwuHh),
						canSync: !0,
						icon: (0, c.GSL)(R.Z),
						noticeText: B.intl.format(B.t.OIhm0N, {
							categoryName: r.name
						}),
						onClick: function() {
							null != r && (0, c.ZDy)(async () => {
								let {
									default: e
								} = await Promise.resolve().then(n.bind(n, 170509));
								return t => (0, i.jsx)(e, W(U({}, t), {
									channel: s,
									category: r,
									onConfirm: async () => {
										let {
											guild_id: e
										} = r, t = U({}, r.permissionOverwrites);
										null != e && null == t[e] && (t[e] = I.we(e)), await (0, j.u)(s, t[e].deny, t[e].allow) && (0, h.wk)(s.id, {
											permissionOverwrites: Object.values(t)
										})
									}
								}))
							})
						}
					}) : null, s.isGuildStageVoice() ? (0, i.jsx)(G, {
						guild: d,
						channel: s,
						permissionUpdates: g
					}) : null, (0, i.jsx)(F, {
						channel: s,
						guild: d,
						isPrivateGuildChannel: u,
						roles: o,
						members: a
					}), !1, (0, i.jsx)(P.Z, {})]
				})
			})
		},
		415236: function(e, t, n) {
			"use strict";
			n.d(t, {
				Z: () => a
			}), n(953529);
			var i = n(255367);
			n(73800);
			var l = n(481060),
				r = n(600164),
				s = n(332067);

			function a(e) {
				let {
					description: t,
					icon: n,
					id: a,
					label: o,
					onChange: c,
					value: d
				} = e;
				return (0, i.jsxs)("div", {
					className: s.cardContent,
					children: [(0, i.jsxs)(r.Z, {
						justify: r.Z.Justify.BETWEEN,
						align: r.Z.Align.CENTER,
						children: [n, (0, i.jsx)(r.Z.Child, {
							grow: 1,
							children: (0, i.jsx)(l.Text, {
								variant: "text-md/semibold",
								children: o
							})
						}), null != c && null != d && (0, i.jsx)(l.rsf, {
							id: a,
							checked: d,
							onChange: c
						})]
					}), (0, i.jsx)(l.Text, {
						variant: "text-xs/normal",
						color: "text-default",
						className: s.cardDescription,
						children: t
					})]
				})
			}
		},
		182905: function(e, t, n) {
			"use strict";
			n.d(t, {
				Z: () => u
			});
			var i = n(255367);
			n(73800);
			var l = n(120356),
				r = n.n(l),
				s = n(692547),
				a = n(755721),
				o = n(481060),
				c = n(600164),
				d = n(427256);
			let u = e => {
				let {
					className: t,
					icon: n,
					noticeText: l,
					buttonText: u,
					onClick: h,
					canSync: m
				} = e;
				return (0, i.jsx)(o.Zbd, {
					className: r()(t, d.card),
					children: (0, i.jsxs)(c.Z, {
						justify: c.Z.Justify.BETWEEN,
						align: c.Z.Align.CENTER,
						children: [(0, i.jsx)(n, {
							width: 20,
							height: 20,
							size: "custom",
							color: s.Z.unsafe_rawColors.YELLOW_300.css
						}), (0, i.jsx)("div", {
							className: d.label,
							children: (0, i.jsx)(o.Text, {
								variant: "text-md/normal",
								children: l
							})
						}), m && (0, i.jsx)(a.zx, {
							size: a.zx.Sizes.SMALL,
							color: a.zx.Colors.PRIMARY,
							onClick: h,
							children: u
						})]
					})
				})
			}
		},
		257017: function(e, t, n) {
			"use strict";
			n.d(t, {
				X: () => a
			});
			var i = n(668781),
				l = n(63063),
				r = n(981631),
				s = n(388032);

			function a(e) {
				i.Z.show({
					title: s.intl.string(s.t.vElC9f),
					body: s.intl.format(s.t.yslqFB, {
						name: e
					}),
					cancelText: s.intl.string(s.t.psXQHB),
					onCancel() {
						window.open(l.Z.getArticleURL(r.BhN.PERMISSIONS_LOCKOUT))
					}
				})
			}
		},
		188857: function(e, t, n) {
			"use strict";
			n.d(t, {
				Z: () => h
			}), n(388685);
			var i = n(73800),
				l = n(790333),
				r = n.n(l),
				s = n(442837),
				a = n(749210),
				o = n(911969),
				c = n(271383),
				d = n(594174),
				u = n(823379);

			function h(e, t) {
				let n = (0, s.Wu)([c.ZP], () => c.ZP.getMemberIds(e), [e]),
					[l, h] = i.useMemo(() => r()(null == t ? [] : Object.values(t).filter(e => e.type === o.BN.MEMBER).map(e => e.id), e => n.includes(e)), [t, n]);
				return i.useEffect(() => {
					h.length > 0 && null != e && a.Z.requestMembersById(e, h, !1)
				}, [h, e]), (0, s.Wu)([d.default], () => l.map(d.default.getUser).filter(u.lm), [l])
			}
		},
		732335: function(e, t, n) {
			"use strict";
			n.d(t, {
				Z: () => u
			}), n(388685), n(290780), n(539854);
			var i = n(255367),
				l = n(73800),
				r = n(481060),
				s = n(70956),
				a = n(129724),
				o = n(981631),
				c = n(388032),
				d = n(20493);

			function u(e) {
				let {
					channel: t,
					onChange: n
				} = e, [u, h] = l.useState(null), m = t.rateLimitPerUser, g = l.useMemo(() => {
					let e = [...null != u ? u : o.BiE];
					return e.includes(m) || e.unshift(m), e.map(e => ({
						label: (0, a.A)(e, !1),
						value: e
					}))
				}, [u, m]), p = l.useCallback(e => {
					n(e), h(null)
				}, [n]), f = l.useCallback(e => {
					if ("" === e) return void h(null);
					let t = [],
						n = parseInt(e, 10);
					if (Number.isNaN(n)) return void h(null);
					n <= o.GI0 && t.push(n);
					let i = n * s.Z.Seconds.MINUTE;
					i <= o.GI0 && t.push(i);
					let l = n * s.Z.Seconds.HOUR;
					l <= o.GI0 && t.push(l), h(t)
				}, []), x = l.useCallback(() => {
					h(null)
				}, []);
				return (0, i.jsx)(r.VcW, {
					className: d.marginBottom8,
					value: m,
					onChange: p,
					onSearchChange: f,
					options: g,
					onBlur: x,
					placeholder: c.intl.string(c.t.dBqQu7)
				})
			}
		},
		869779: function(e, t, n) {
			"use strict";
			n.r(t), n.d(t, {
				default: () => k
			});
			var i = n(255367),
				l = n(73800),
				r = n(442837),
				s = n(481060),
				a = n(570140),
				o = n(787014),
				c = n(37234),
				d = n(503089),
				u = n(493544),
				h = n(367907),
				m = n(933557),
				g = n(471445),
				p = n(351123),
				f = n(685929),
				x = n(665906),
				j = n(210887),
				b = n(131704),
				v = n(533947),
				y = n(277053),
				C = n(388610),
				N = n(592125),
				S = n(496675),
				O = n(699516),
				E = n(594174),
				T = n(585483),
				w = n(787263),
				Z = n(975316),
				R = n(428813),
				I = n(2147),
				_ = n(856606),
				P = n(981631),
				A = n(388032),
				L = n(511740);

			function D(e) {
				let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
					n = arguments.length > 2 ? arguments[2] : void 0;
				h.ZP.trackWithMetadata(P.rMx.SETTINGS_PANE_VIEWED, {
					settings_type: "channel",
					origin_pane: t,
					destination_pane: e,
					location: n
				})
			}
			class M extends l.PureComponent {
				componentDidMount() {
					D(this.props.section, null, this.props.analyticsLocation)
				}
				componentWillUnmount() {
					a.Z.wait(() => (0, o.xv)())
				}
				componentDidUpdate(e) {
					let {
						formState: t,
						section: n
					} = e, {
						formState: i,
						section: l,
						canManageRoles: r,
						canManageChannels: s,
						canManageWebhooks: a,
						canUnlinkChannel: o
					} = this.props;
					(s || r || a || o) && (i !== P.QZA.CLOSED || i === t) && (r || l !== P.CoT.PERMISSIONS) && (a || o || l !== P.CoT.INTEGRATIONS) ? l !== n && D(l, n): (0, c.xf)()
				}
				render() {
					let {
						theme: e,
						sidebarTheme: t,
						section: n,
						channel: l,
						category: r,
						canManageRoles: a,
						canManageChannels: h,
						canDeleteChannels: f,
						canManageWebhooks: x,
						canUnlinkChannel: j
					} = this.props;
					return null == l ? null : (0, i.jsx)(d.ZP, {
						theme: e,
						sidebarTheme: t,
						section: null != n ? n : P.CoT.OVERVIEW,
						onSetSection: o.zc,
						onClose: c.xf,
						sections: function(e) {
							let {
								channel: t,
								category: n,
								canManageRoles: l,
								canManageChannels: r,
								canDeleteChannels: a,
								canManageWebhooks: d,
								canUnlinkChannel: h
							} = e, f = (0, g.KS)(t), {
								GUILD_CATEGORY: x
							} = P.d4z, j = b.Ec.has(t.type), N = t.type === x ? A.intl.string(A.t.ifbXnJ) : j ? t.isForumPost() ? A.intl.string(A.t.nEOg1N) : A.intl.string(A.t.H7vTe3) : A.intl.string(A.t["8D8Rsb"]);
							return [{
								section: u.ID.HEADER,
								label: null != t ? (0, i.jsxs)(i.Fragment, {
									children: [null != f ? (0, i.jsx)(f, {
										size: "xxs",
										color: "currentColor",
										className: L.channelIcon
									}) : null, (0, m.F6)(t, E.default, O.Z), null != n ? (0, i.jsx)(s.Text, {
										tag: "span",
										variant: "text-xs/semibold",
										color: "header-secondary",
										lineClamp: 1,
										className: L.category,
										children: (0, m.F6)(n, E.default, O.Z)
									}) : null]
								}) : A.intl.string(A.t.XPDhcX)
							}, {
								section: P.CoT.OVERVIEW,
								label: A.intl.string(A.t["/dp6yc"]),
								ariaLabel: A.intl.string(A.t["/dp6yc"]),
								element: I.Z,
								notice: {
									element: I.G,
									stores: [C.Z]
								},
								predicate: () => !t.isModeratorReportChannel()
							}, {
								section: P.CoT.PERMISSIONS,
								label: A.intl.string(A.t.xrmhRU),
								element: p.Z,
								notice: {
									element: _.n,
									stores: [y.Z]
								},
								predicate: () => l && !j
							}, {
								section: P.CoT.INSTANT_INVITES,
								label: A.intl.string(A.t["9F90iY"]),
								element: R.Z,
								type: u.bT.CUSTOM,
								predicate: () => t.type !== x && r && !j && !t.isModeratorReportChannel()
							}, {
								section: P.CoT.INTEGRATIONS,
								label: A.intl.string(A.t.s69NLC),
								ariaLabel: A.intl.string(A.t.s69NLC),
								element: Z.Z,
								notice: {
									stores: [v.Z],
									element: Z.B
								},
								predicate: () => !(!d && !h || t.isModeratorReportChannel()) && b.Ti.has(t.type)
							}, {
								section: u.ID.DIVIDER
							}, {
								section: P.CoT.DELETE,
								onClick() {
									(0, w.w)(t, function() {
										T.S.subscribeOnce(P.CkL.LAYER_POP_COMPLETE, () => {
											(0, o.zz)(t.id)
										}), (0, c.xf)()
									})
								},
								label: N,
								ariaLabel: N,
								icon: (0, i.jsx)(s.XHJ, {
									size: "xs",
									color: "currentColor"
								}),
								variant: "destructive",
								predicate: () => a && !t.isModeratorReportChannel()
							}]
						}({
							channel: l,
							category: r,
							canManageRoles: a,
							canManageChannels: h,
							canDeleteChannels: f,
							canManageWebhooks: x,
							canUnlinkChannel: j
						})
					})
				}
			}

			function k() {
				let {
					channel: e,
					analyticsLocation: t
				} = (0, r.cj)([C.Z], () => C.Z.getProps()), n = (0, r.e7)([C.Z], () => C.Z.getFormState()), l = (0, r.e7)([C.Z], () => C.Z.getSection()), s = (0, r.e7)([j.Z], () => j.Z.theme), a = (0, r.e7)([j.Z], () => j.Z.darkSidebar ? P.BRd.DARK : void 0), o = (0, x.C7)(e), c = (0, x.Xb)(e), {
					canManageChannels: d,
					canManageRoles: u,
					canManageWebhooks: h,
					canUnlinkChannel: m
				} = (0, r.cj)([S.Z], () => ({
					canManageChannels: S.Z.can(P.Plq.MANAGE_CHANNELS, e),
					canManageRoles: null != e && S.Z.can(P.Plq.MANAGE_ROLES, e),
					canManageWebhooks: null != e && S.Z.can(P.Plq.MANAGE_WEBHOOKS, e),
					canUnlinkChannel: (0, f.C)(e, S.Z)
				})), g = (0, r.e7)([N.Z], () => N.Z.getChannel(null == e ? void 0 : e.parent_id));
				return (0, i.jsx)(M, {
					channel: e,
					category: g,
					canManageChannels: (null == e ? void 0 : e.isThread()) ? o : d,
					canDeleteChannels: (null == e ? void 0 : e.isThread()) ? c : d,
					canManageRoles: u,
					canManageWebhooks: h,
					canUnlinkChannel: m,
					formState: n,
					theme: s,
					sidebarTheme: a,
					section: l,
					analyticsLocation: t
				})
			}
		},
		975316: function(e, t, n) {
			"use strict";
			n.d(t, {
				B: () => h,
				Z: () => u
			});
			var i = n(255367);
			n(73800);
			var l = n(442837),
				r = n(139387),
				s = n(852860),
				a = n(490655),
				o = n(533947),
				c = n(388610),
				d = n(430824);

			function u(e) {
				let {
					refToScroller: t
				} = e, n = (0, l.e7)([c.Z], () => c.Z.getChannel(), []), r = (0, l.e7)([d.Z], () => null != n ? d.Z.getGuild(n.getGuildId()) : null, [n]), {
					section: s,
					sectionId: u,
					webhooks: h,
					editedWebhook: m,
					isFetching: g,
					errors: p
				} = (0, l.cj)([o.Z], () => o.Z.getProps(), []);
				return null == r || null == n ? null : (0, i.jsx)(a.Z, {
					guild: r,
					channel: n,
					section: s,
					sectionId: u,
					webhooks: h,
					editedWebhook: m,
					isFetchingWebhooks: g,
					hasChanges: o.Z.hasChanges,
					errors: p,
					refToScroller: t
				})
			}

			function h() {
				let {
					channel: e,
					submitting: t
				} = (0, l.cj)([c.Z], () => c.Z.getProps()), n = (0, l.e7)([o.Z], () => o.Z.editedWebhook), a = (0, l.e7)([d.Z], () => null != e ? d.Z.getGuild(e.getGuildId()) : null, [e]);
				return (0, i.jsx)(s.Z, {
					submitting: t,
					onReset: () => {
						r.Z.init()
					},
					onSave: () => {
						null != a && null != n && r.Z.saveWebhook(a.id, n)
					}
				})
			}
		},
		428813: function(e, t, n) {
			"use strict";
			n.d(t, {
				Z: () => u
			});
			var i = n(255367);
			n(73800);
			var l = n(442837),
				r = n(270394),
				s = n(388610),
				a = n(430824),
				o = n(496675),
				c = n(246946),
				d = n(981631);

			function u() {
				let e = (0, l.e7)([c.Z], () => c.Z.hideInstantInvites),
					{
						channel: t,
						guild: n
					} = (0, l.cj)([s.Z, a.Z], () => {
						let {
							channel: e
						} = s.Z.getProps(), t = null != e ? a.Z.getGuild(e.getGuildId()) : null;
						return {
							channel: e,
							guild: t
						}
					}, []),
					u = (0, l.e7)([o.Z], () => null != t && o.Z.can(d.Plq.CREATE_INSTANT_INVITE, t), [t]),
					{
						invites: h,
						loading: m
					} = (0, l.cj)([s.Z], () => s.Z.getInvites(), []);
				return (0, i.jsx)(r.Z, {
					invites: h,
					loading: m,
					guild: n,
					channel: t,
					canCreateInvites: u,
					hide: e
				})
			}
		},
		2147: function(e, t, n) {
			"use strict";
			n.d(t, {
				G: () => eZ,
				Z: () => e_
			}), n(997841), n(953529), n(290780);
			var i = n(255367),
				l = n(73800),
				r = n(120356),
				s = n.n(r),
				a = n(313361),
				o = n(697988),
				c = n(683860),
				d = n(442837),
				u = n(692547),
				h = n(780384),
				m = n(755721),
				g = n(481060),
				p = n(787014),
				f = n(771340),
				x = n(410575),
				j = n(852860),
				b = n(129865),
				v = n(902840),
				y = n(622822),
				C = n(429673),
				N = n(933557),
				S = n(541716),
				O = n(752305),
				E = n(893718),
				T = n(600164),
				w = n(313201),
				Z = n(318766),
				R = n(907040),
				I = n(906411),
				_ = n(633302),
				P = n(109434),
				A = n(162389),
				L = n(946458),
				D = n(968437),
				M = n(665906),
				k = n(456077),
				B = n(747212),
				V = n(210887),
				U = n(131704),
				W = n(601964),
				H = n(314897),
				G = n(388610),
				F = n(430824),
				z = n(496675),
				X = n(903223),
				Y = n(594174),
				J = n(934415),
				q = n(70956),
				$ = n(630388),
				Q = n(63063),
				K = n(129724),
				ee = n(732335),
				et = n(296146),
				en = n(564735),
				ei = n(981631),
				el = n(176505),
				er = n(185923),
				es = n(710352),
				ea = n(124368),
				eo = n(388032),
				ec = n(194512),
				ed = n(20493);

			function eu(e, t, n) {
				return t in e ? Object.defineProperty(e, t, {
					value: n,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : e[t] = n, e
			}

			function eh(e) {
				for (var t = 1; t < arguments.length; t++) {
					var n = null != arguments[t] ? arguments[t] : {},
						i = Object.keys(n);
					"function" == typeof Object.getOwnPropertySymbols && (i = i.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
						return Object.getOwnPropertyDescriptor(n, e).enumerable
					}))), i.forEach(function(t) {
						eu(e, t, n[t])
					})
				}
				return e
			}

			function em(e, t) {
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
			let eg = (0, w.hQ)(),
				ep = (0, w.hQ)(),
				ef = (0, w.hQ)(),
				ex = (0, w.hQ)(),
				ej = (0, w.hQ)(),
				eb = (0, w.hQ)(),
				ev = (0, w.hQ)(),
				ey = (0, w.hQ)(),
				eC = (0, w.hQ)(),
				eN = (0, w.hQ)(),
				eS = (0, w.hQ)(),
				eO = (0, U.kt)({
					id: "1",
					type: ei.d4z.DM
				}),
				eE = {
					popoutLocation: {
						page: ei.ZY5.CHANNEL_SETTINGS,
						section: ei.jXE.CHANNEL_DEFAULT_REACTION,
						object: ei.qAy.EMOJI_PICKER_BUTTON
					}
				},
				eT = {
					popoutLocation: {
						page: ei.ZY5.CHANNEL_SETTINGS,
						section: ei.jXE.CHANNEL_NAME,
						object: ei.qAy.EMOJI_PICKER_BUTTON
					}
				},
				ew = "AUTOMATIC_RTC_REGION",
				eZ = d.ZP.connectStores([G.Z], () => {
					let {
						channel: e,
						submitting: t
					} = G.Z.getProps();
					return {
						channel: e,
						submitting: t,
						onReset() {
							null != e && (0, p.S1)(e.id)
						},
						onSave() {
							if (null == e) return;
							let {
								name: t,
								type: n,
								topic: i,
								bitrate: l,
								userLimit: r,
								nsfw: s,
								flags: a,
								rateLimitPerUser: o,
								defaultThreadRateLimitPerUser: c,
								threadMetadata: d,
								defaultAutoArchiveDuration: u,
								template: h,
								rtcRegion: m,
								videoQualityMode: g,
								defaultReactionEmoji: f,
								availableTags: x,
								defaultSortOrder: j,
								defaultForumLayout: b,
								defaultTagSetting: v
							} = e;
							e.isThread() && (t = (0, k.Z)(t, !0)), (0, p.wk)(e.id, {
								name: t,
								type: n,
								topic: i,
								bitrate: l,
								userLimit: r,
								nsfw: s,
								flags: a,
								rateLimitPerUser: o,
								defaultThreadRateLimitPerUser: c,
								autoArchiveDuration: null == d ? void 0 : d.autoArchiveDuration,
								locked: null == d ? void 0 : d.locked,
								invitable: null == d ? void 0 : d.invitable,
								defaultAutoArchiveDuration: u,
								template: h,
								rtcRegion: m,
								videoQualityMode: g,
								defaultReactionEmoji: f,
								availableTags: x,
								defaultSortOrder: j,
								defaultForumLayout: b,
								defaultTagSetting: v
							})
						}
					}
				})(j.Z);

			function eR(e) {
				let {
					onEmojiPicked: t,
					channel: n,
					guildId: r
				} = e, s = l.useRef(null), a = l.useCallback(e => {
					let {
						closePopout: l
					} = e;
					return (0, i.jsx)(R.Z, {
						channel: n,
						guildId: r,
						pickerIntention: er.Hz.CHANNEL_NAME,
						closePopout: l,
						onNavigateAway: l,
						onSelectEmoji: e => {
							let {
								emoji: n,
								willClose: i
							} = e;
							null != n && n.type === I.B.UNICODE && t(n.surrogates), i && l()
						},
						showOnlyUnicode: !0,
						analyticsOverride: eT
					})
				}, [n, r, t]);
				return (0, i.jsx)(g.yRy, {
					targetElementRef: s,
					renderPopout: a,
					animation: g.yRy.Animation.NONE,
					position: "bottom",
					align: "right",
					children: (e, t) => {
						let {
							isShown: n
						} = t;
						return (0, i.jsx)(Z.Z, em(eh({}, e), {
							ref: s,
							active: n,
							className: ec.emojiButton,
							tabIndex: 0,
							focusProps: {
								offset: {
									top: 10,
									bottom: 10,
									left: -4,
									right: 10
								}
							}
						}))
					}
				})
			}
			class eI extends l.PureComponent {
				componentDidMount() {
					null == this.props.regions && null != this.props.guild && f.Z.fetchRegions(this.props.guild.id)
				}
				componentDidUpdate(e) {
					var t, n, i, l;
					let r = null != (i = null == (t = this.props.channel) ? void 0 : t.topic) ? i : "";
					(null != (l = null == (n = e.channel) ? void 0 : n.topic) ? l : "") !== r && r !== this.state.textTopicValue && this.setState({
						textTopicValue: r,
						richTopicValue: (0, O.JM)(r)
					})
				}
				getError(e) {
					let {
						errors: t
					} = this.props;
					return null == t ? void 0 : t[e]
				}
				getCooldownSliderMarker(e) {
					return (0, K.A)(e, !0)
				}
				getAutoArchiveDurationSliderMarker(e) {
					return (0, K.A)(e * q.Z.Seconds.MINUTE, !0)
				}
				renderChannelInfo(e, t) {
					var n, l, r, d, h, p;
					let f, j, {
							canManageChannels: b,
							canSendMessages: v,
							isThreadModerator: C,
							canManageThread: N,
							guild: O,
							isForumPost: T,
							isOwner: w,
							showAdvancedSlowModeSetting: Z
						} = this.props,
						R = U.Ec.has(e.type),
						I = e.isForumLikeChannel(),
						P = I && (null == (n = e.availableTags) ? void 0 : n.every(e => e.moderated)),
						M = (null == (l = Y.default.getCurrentUser()) ? void 0 : l.isStaff()) === !0,
						k = U.TK.has(e.type) ? (0, i.jsxs)("div", {
							children: [(0, i.jsx)(g.xJW, {
								title: I ? eo.intl.string(eo.t.yR6Hwc) : eo.intl.string(eo.t.X8jMDg),
								className: ed.marginTop20,
								children: (0, i.jsx)(E.Z, {
									innerClassName: ec.topic,
									characterCountClassName: ec.topicCharacterCount,
									maxCharacterCount: I ? el.Z7 : el.$x,
									onChange: this.handleChangeRichTopic,
									placeholder: eo.intl.string(eo.t["71fbmp"]),
									channel: eO,
									textValue: this.state.textTopicValue,
									richValue: this.state.richTopicValue,
									type: I ? S.Ie.FORUM_CHANNEL_GUIDELINES : S.Ie.CHANNEL_TOPIC,
									onFocus: () => {
										this.setState({
											topicFocused: !0
										})
									},
									onBlur: () => {
										this.setState({
											topicFocused: !1
										})
									},
									focused: this.state.topicFocused,
									onSubmit: this.handleSubmit,
									disableThemedBackground: !0,
									error: this.getError("topic"),
									disabled: !b
								})
							}), (0, i.jsx)(g.$i$, {
								className: s()(ed.marginTop40, ed.marginBottom40)
							})]
						}) : null,
						V = I && M ? (0, i.jsxs)("div", {
							children: [(0, i.jsx)(g.xJW, {
								title: eo.intl.string(eo.t.qk2jdX),
								className: ed.marginTop20,
								children: (0, i.jsx)(g.Kx8, {
									placeholder: eo.intl.string(eo.t.DDjD1N),
									value: _.ZP.translateSurrogatesToInlineEmoji(null != (r = e.template) ? r : ""),
									onChange: this.handleChangeTemplate,
									error: this.getError("template"),
									maxLength: es.Vb,
									disabled: !b,
									autosize: !0
								})
							}), (0, i.jsx)(g.$i$, {
								className: s()(ed.marginTop40, ed.marginBottom40)
							})]
						}) : null,
						H = e.isForumLikeChannel() ? (0, i.jsxs)("div", {
							children: [(0, i.jsxs)(g.xJW, {
								children: [(0, i.jsx)(g.vwX, {
									error: this.getError("available_tags"),
									id: eg,
									className: ec.formTitle,
									children: eo.intl.string(eo.t["P/y+sr"])
								}), (0, i.jsx)(g.R94, {
									id: ep,
									type: g.R94.Types.DESCRIPTION,
									className: ec.description,
									children: eo.intl.string(eo.t["/oQQ39"])
								}), (0, i.jsx)(A.Z, {
									channel: e
								})]
							}), (0, i.jsx)(g.XZJ, {
								disabled: !b || P,
								value: e.hasFlag(el.zZ.REQUIRE_TAG),
								type: g.XZJ.Types.INVERTED,
								onChange: (e, t) => this.handleRequireTagChanged(t),
								children: (0, i.jsx)(g.Text, {
									variant: "text-sm/normal",
									children: eo.intl.string(eo.t["9g2Zys"])
								})
							}), (0, i.jsx)(g.$i$, {
								className: s()(ed.marginTop40, ed.marginBottom40)
							})]
						}) : null,
						G = e.isForumLikeChannel() ? (0, i.jsxs)("div", {
							children: [(0, i.jsxs)("div", {
								className: ec.twoColumnSettings,
								children: [(0, i.jsxs)(g.xJW, {
									className: s()(ec.settingsLeft, ec.settingsDefaultReaction),
									children: [(0, i.jsx)(g.vwX, {
										id: ef,
										className: ec.formTitle,
										children: eo.intl.string(eo.t["8ao1+P"])
									}), (0, i.jsx)(g.R94, {
										id: ep,
										type: g.R94.Types.DESCRIPTION,
										className: ec.description,
										children: eo.intl.string(eo.t.SdbF0t)
									}), (0, i.jsxs)("div", {
										className: ec.buttonRow,
										children: [(0, i.jsx)(g.yRy, {
											targetElementRef: this.defaultReactionButtonRef,
											renderPopout: this.renderEmojiPicker,
											position: "right",
											animation: g.yRy.Animation.NONE,
											align: "center",
											children: e => (0, i.jsx)(m.zx, em(eh({}, e), {
												buttonRef: this.defaultReactionButtonRef,
												disabled: !b,
												onClick: t => {
													var n;
													null == (n = e.onClick) || n.call(e, t)
												},
												children: eo.intl.string(eo.t["59QgaG"])
											}))
										}), null != e.defaultReactionEmoji ? (0, i.jsx)(m.zx, {
											className: ec.removeButton,
											onClick: () => this.handleChangeDefaultReactionEmoji(null),
											size: m.zx.Sizes.MIN,
											look: m.zx.Looks.LINK,
											color: m.zx.Colors.RED,
											children: eo.intl.string(eo.t.N86XcH)
										}) : null]
									})]
								}), (0, i.jsx)(L.Z, {
									reactionEmoji: e.defaultReactionEmoji
								})]
							}), (0, i.jsx)(g.$i$, {
								className: s()(ed.marginTop40, ed.marginBottom40)
							})]
						}) : null,
						F = e.isForumChannel() ? (0, i.jsxs)("div", {
							children: [(0, i.jsxs)("div", {
								className: ec.twoColumnSettings,
								children: [(0, i.jsxs)(g.xJW, {
									className: s()(ec.settingsLeft, ec.settingsDefaultView),
									children: [(0, i.jsx)(g.hjN, {
										title: eo.intl.string(eo.t.kQvoCw),
										children: (0, i.jsx)(g.q4e, {
											options: [{
												label: eo.intl.string(eo.t["4HXEZG"]),
												value: a.X.LIST
											}, {
												label: eo.intl.string(eo.t["8RswJC"]),
												value: a.X.GRID
											}],
											value: null != (d = e.defaultForumLayout) ? d : a.X.LIST,
											onChange: this.handleChangeDefaultForumLayout
										})
									}), (0, i.jsx)(g.R94, {
										className: ed.marginTop8,
										type: g.R94.Types.DESCRIPTION,
										children: eo.intl.string(eo.t.mOSViY)
									})]
								}), e.defaultForumLayout === a.X.GRID ? (0, i.jsx)(et.Z, {
									className: ec.defaultImageView
								}) : (0, i.jsx)(en.Z, {
									className: ec.defaultImageView
								})]
							}), (0, i.jsx)(g.$i$, {
								className: s()(ed.marginTop40, ed.marginBottom40)
							})]
						}) : null,
						z = e.isForumLikeChannel() ? (0, i.jsxs)("div", {
							children: [(0, i.jsx)(g.xJW, {
								children: (0, i.jsx)(g.hjN, {
									title: eo.intl.string(eo.t.gePre3),
									children: (0, i.jsx)(g.q4e, {
										options: [{
											label: eo.intl.string(eo.t.ElZtzs),
											value: c.z.LATEST_ACTIVITY
										}, {
											label: eo.intl.string(eo.t.w28f3N),
											value: c.z.CREATION_DATE
										}],
										value: e.getDefaultSortOrder(),
										onChange: this.handleChangeDefaultSortOrder
									})
								})
							}), (0, i.jsx)(g.R94, {
								className: ed.marginTop8,
								type: g.R94.Types.DESCRIPTION,
								children: eo.intl.string(eo.t["165cVV"])
							}), (0, i.jsx)(g.$i$, {
								className: s()(ed.marginTop40, ed.marginBottom40)
							})]
						}) : null,
						X = e.isForumLikeChannel() ? (0, i.jsxs)("div", {
							children: [(0, i.jsx)(g.xJW, {
								children: (0, i.jsx)(g.hjN, {
									title: eo.intl.string(eo.t.Paxaur),
									children: (0, i.jsx)(g.q4e, {
										options: [{
											label: eo.intl.string(eo.t.rQ0ctb),
											value: o.z.MATCH_SOME
										}, {
											label: eo.intl.string(eo.t.FCXUu7),
											value: o.z.MATCH_ALL
										}],
										value: e.getDefaultTagSetting(),
										onChange: this.handleChangeDefaultTagSetting
									})
								})
							}), (0, i.jsx)(g.R94, {
								className: ed.marginTop8,
								type: g.R94.Types.DESCRIPTION,
								children: eo.intl.string(eo.t.DqOl8P)
							}), (0, i.jsx)(g.$i$, {
								className: s()(ed.marginTop40, ed.marginBottom40)
							})]
						}) : null,
						J = R ? C : b,
						q = U.X_.has(e.type) ? (0, i.jsxs)("div", {
							children: [(0, i.jsxs)(g.xJW, {
								children: [(0, i.jsx)(g.vwX, {
									id: ex,
									className: ed.marginBottom8,
									children: eo.intl.string(eo.t["tTHx9/"])
								}), I ? (0, i.jsx)(g.vwX, {
									className: ed.marginTop20,
									children: eo.intl.string(eo.t.O1c02t)
								}) : null, !0 === Z ? (0, i.jsx)(ee.Z, {
									channel: e,
									onChange: this.handleChangeSlowmode
								}) : (0, i.jsx)(g.iRW, {
									className: ed.marginTop20,
									initialValue: e.rateLimitPerUser,
									markers: ei.BiE,
									stickToMarkers: !0,
									onValueChange: this.handleChangeSlowmode,
									onMarkerRender: this.getCooldownSliderMarker,
									disabled: !J,
									equidistant: !0,
									"aria-labelledby": ex,
									"aria-describedby": ej
								}), (0, i.jsx)(g.R94, {
									id: ej,
									type: g.R94.Types.DESCRIPTION,
									children: I ? eo.intl.string(eo.t["a+1pdH"]) : R ? eo.intl.string(eo.t.OMmNCg) : eo.intl.string(eo.t["HEA/DQ"])
								}), I ? (0, i.jsxs)(i.Fragment, {
									children: [(0, i.jsx)(g.vwX, {
										className: ed.marginTop20,
										children: eo.intl.string(eo.t["fkY5+v"])
									}), (0, i.jsx)(g.iRW, {
										className: ed.marginTop20,
										initialValue: null != (h = e.defaultThreadRateLimitPerUser) ? h : 0,
										markers: ei.BiE,
										stickToMarkers: !0,
										onValueChange: this.handleChangeThreadMessageSlowmode,
										onMarkerRender: this.getCooldownSliderMarker,
										disabled: !J,
										equidistant: !0,
										"aria-labelledby": ex,
										"aria-describedby": ej
									}), (0, i.jsx)(g.R94, {
										type: g.R94.Types.DESCRIPTION,
										children: eo.intl.string(eo.t.kdZU6O)
									})]
								}) : null]
							}), (0, i.jsx)(g.$i$, {
								className: s()(ed.marginTop40, ed.marginBottom40)
							})]
						}) : null,
						$ = R && null != e.threadMetadata ? (0, i.jsxs)("div", {
							children: [(0, i.jsx)(g.xJW, {
								children: (0, i.jsx)(x.Z, {
									page: ei.ZY5.CHANNEL_SETTINGS,
									children: (0, i.jsx)(B.Z, {
										isDisabled: !N,
										autoArchiveDuration: null != (p = e.threadMetadata.autoArchiveDuration) ? p : ea.AX,
										onChange: this.handleAutoArchiveDurationChanged
									})
								})
							}), (0, i.jsx)(g.R94, {
								className: ed.marginTop8,
								type: g.R94.Types.DESCRIPTION,
								children: T ? eo.intl.string(eo.t["3aJN9P"]) : eo.intl.string(eo.t.YUXr4e)
							})]
						}) : null,
						K = e.type === ei.d4z.PRIVATE_THREAD && null != e.threadMetadata ? (0, i.jsx)("div", {
							children: (0, i.jsx)(g.j7V, {
								note: eo.intl.string(eo.t.cSyXJi),
								onChange: this.handleInvitableChanged,
								value: e.threadMetadata.invitable,
								hideBorder: !0,
								disabled: !N,
								children: eo.intl.string(eo.t.s2rpNT)
							})
						}) : null,
						er = null != O && (0, W.Y2)(O),
						eu = U.ov.has(e.type) ? (0, i.jsx)("div", {
							children: (0, i.jsx)(g.j7V, {
								note: eo.intl.string(eo.t["9eUgwc"]),
								onChange: this.handleNSFWChange,
								value: (0, y.aC)(e),
								hideBorder: !0,
								disabled: !b || null != e.linkedLobby || er,
								disabledText: null != e.linkedLobby ? eo.intl.string(eo.t.l6uSVV) : null,
								children: eo.intl.string(eo.t.Es25YW)
							})
						}) : null,
						eb = U.Y0.has(e.type) && null != O && O.features.has(ei.oNc.NEWS) && e.id !== (null == O ? void 0 : O.rulesChannelId) && e.id !== (null == O ? void 0 : O.publicUpdatesChannelId) ? (0, i.jsx)("div", {
							children: (0, i.jsx)(g.j7V, {
								note: (0, i.jsxs)(i.Fragment, {
									children: [(0, i.jsx)("div", {
										children: eo.intl.format(eo.t.tI7KNT, {
											documentationLink: Q.Z.getArticleURL(ei.BhN.ANNOUNCEMENT_CHANNELS)
										})
									}), (0, i.jsx)("div", {
										className: ed.marginTop8,
										children: eo.intl.string(eo.t["2Ab4IS"])
									})]
								}),
								onChange: this.handleNewsChange,
								value: e.type === ei.d4z.GUILD_ANNOUNCEMENT,
								hideBorder: !0,
								disabled: !b,
								children: eo.intl.string(eo.t.Au2b7u)
							})
						}) : null,
						ev = U.uC.has(e.type) ? (0, i.jsxs)("div", {
							children: [(0, i.jsx)(g.$i$, {
								className: s()(ed.marginTop40, ed.marginBottom40)
							}), (0, i.jsx)(x.Z, {
								page: ei.ZY5.CHANNEL_SETTINGS,
								children: (0, i.jsx)(B.Z, {
									isDisabled: !b,
									autoArchiveDuration: (0, D.WD)(e, null),
									onChange: this.handleChangeDefaultAutoArchiveDuration
								})
							}), (0, i.jsx)(g.R94, {
								className: ed.marginTop8,
								type: g.R94.Types.DESCRIPTION,
								children: e.isForumLikeChannel() ? eo.intl.string(eo.t.fyXclZ) : eo.intl.string(eo.t.W3Noi4)
							})]
						}) : null,
						ey = this.props.showChannelSummariesSettings ? (0, i.jsx)(g.j7V, {
							note: eo.intl.format(eo.t.feJW19, {
								helpdeskArticle: Q.Z.getArticleURL(ei.BhN.CONVERSATION_SUMMARIES)
							}),
							onChange: this.handleChannelSummariesToggled,
							value: !e.hasFlag(el.zZ.SUMMARIES_DISABLED) && (null == O ? void 0 : O.features.has(ei.oNc.SUMMARIES_ENABLED_BY_USER)),
							hideBorder: !0,
							disabled: !b || !(null == O ? void 0 : O.features.has(ei.oNc.SUMMARIES_ENABLED_BY_USER)),
							children: (0, i.jsxs)("div", {
								className: ec.badgedItem,
								children: [eo.intl.string(eo.t.id3ozs), (0, i.jsx)(g.IGR, {
									text: eo.intl.string(eo.t.oW0eUV),
									color: u.Z.colors.BG_BRAND.css
								})]
							})
						}) : null,
						eC = e.isMediaChannel() ? (0, i.jsxs)("div", {
							children: [(0, i.jsx)(g.$i$, {
								className: s()(ed.marginTop40, ed.marginBottom40)
							}), (0, i.jsx)(g.j7V, {
								onChange: this.handleShowMediaOptionsToggled,
								value: !e.hasFlag(el.zZ.HIDE_MEDIA_DOWNLOAD_OPTIONS),
								note: eo.intl.string(eo.t.J4wCc3),
								hideBorder: !0,
								disabled: !b,
								children: eo.intl.string(eo.t.u8LZOj)
							})]
						}) : null;
					return e.type === ei.d4z.GUILD_CATEGORY ? (j = eo.intl.string(eo.t.OCAkGB), f = "category-name") : e.isForumPost() ? (j = eo.intl.string(eo.t.uyVrTE), f = "post-title") : R ? (j = eo.intl.string(eo.t.j3XWjI), f = "thread-name") : (j = eo.intl.string(eo.t.PVbHDg), f = "channel-name"), (0, i.jsxs)("div", {
						children: [(0, i.jsx)(g.xJW, {
							title: j,
							children: this.props.isEmojiInChannelNamesEnabled ? (0, i.jsxs)("div", {
								className: ec.nameInput,
								children: [(0, i.jsx)(g.oil, {
									inputRef: this.nameInputRef,
									value: t,
									onChange: this.handleChangeName,
									onBlur: this.handleBlurName,
									error: this.getError("name"),
									name: f,
									autoFocus: !0,
									disabled: w ? !v : !b,
									maxLength: ei.HN8,
									className: ec.nameInputWrapperWithEmojiPicker,
									inputClassName: ec.nameInputInnerWithEmojiPicker,
									focusProps: {
										offset: {
											right: -30
										}
									}
								}), (0, i.jsx)(eR, {
									onEmojiPicked: this.insertEmojiAtPosition,
									channel: e,
									guildId: null == e ? void 0 : e.guild_id
								})]
							}) : (0, i.jsx)(g.oil, {
								inputRef: this.nameInputRef,
								value: t,
								onChange: this.handleChangeName,
								onBlur: this.handleBlurName,
								error: this.getError("name"),
								name: f,
								autoFocus: !0,
								disabled: w ? !v : !b,
								maxLength: ei.HN8
							})
						}), (0, i.jsx)(g.$i$, {
							className: s()(ed.marginTop40, ed.marginBottom40)
						}), k, V, H, G, q, $, F, z, X, K, eu, eb, ey, ev, eC]
					})
				}
				renderBitrate(e) {
					return "".concat(Math.round(e / 1e3), "kbps")
				}
				renderVoiceBitrate(e, t) {
					let {
						canManageChannels: n
					} = this.props;
					if (!this.showVoiceSettings()) return null;
					let l = (0, J.g7)(t, e),
						r = this.getError("bitrate");
					return (0, i.jsxs)(T.Z, {
						direction: T.Z.Direction.VERTICAL,
						className: ed.marginBottom40,
						children: [(0, i.jsx)(g.vwX, {
							id: eb,
							children: eo.intl.string(eo.t.w2d0vb)
						}), "" !== r && (0, i.jsx)(g.R94, {
							id: ev,
							type: g.geA.DESCRIPTION,
							style: {
								color: u.Z.unsafe_rawColors.RED_400.css
							},
							className: ed.marginBottom8,
							children: r
						}), (0, i.jsx)(g.iRW, {
							initialValue: Math.min(e.bitrate, l),
							onValueChange: this.handleChangeBitrate,
							onValueRender: this.renderBitrate,
							onMarkerRender: this.renderBitrate,
							markers: [ei.Fc, ei.epw, l],
							minValue: ei.Fc,
							maxValue: l,
							keyboardStep: ei.V7H,
							disabled: !n,
							"aria-labelledby": eb,
							"aria-describedby": null != r && "" !== r ? ev : ey
						}), l > ei.epw ? (0, i.jsx)(g.R94, {
							id: ey,
							type: g.geA.DESCRIPTION,
							children: eo.intl.format(eo.t.SbQJk5, {
								bitrate: ei.epw / 1e3
							})
						}) : null]
					})
				}
				showVoiceSettings() {
					let {
						channel: e
					} = this.props;
					return null != e && null != e.guild_id && U.vg.has(e.type) && (e.isGuildVocal() || M.tM.getCurrentConfig({
						guildId: e.guild_id,
						location: "9b50bd_1"
					}).enabled)
				}
				renderVideoQualityMode(e) {
					var t;
					let {
						canManageChannels: n
					} = this.props;
					if (!this.showVoiceSettings()) return null;
					let l = [{
						value: ei.Ucd.AUTO,
						name: eo.intl.string(eo.t.jjKYpq)
					}, {
						value: ei.Ucd.FULL,
						name: eo.intl.string(eo.t["7jOoJC"])
					}];
					return (0, i.jsxs)(T.Z, {
						direction: T.Z.Direction.VERTICAL,
						className: ed.marginBottom40,
						children: [(0, i.jsx)(g.xJW, {
							title: eo.intl.string(eo.t.jhJEJi),
							children: (0, i.jsx)(g.FXm, {
								onChange: e => {
									let {
										value: t
									} = e;
									return this.handleVideoQualityModeChange(t)
								},
								options: l,
								value: null != (t = e.videoQualityMode) ? t : ei.Ucd.AUTO,
								disabled: !n
							})
						}), (0, i.jsx)(g.R94, {
							type: g.geA.DESCRIPTION,
							children: eo.intl.format(eo.t.c5W7Sk, {})
						})]
					})
				}
				onRenderUserLimit(e) {
					return 0 === (e = Math.round(e)) ? eo.intl.string(eo.t.XX5ciY) : eo.intl.formatToPlainString(eo.t["3uHFUV"], {
						num: e
					})
				}
				renderUserLimit(e) {
					let {
						canManageChannels: t
					} = this.props;
					if (!this.showVoiceSettings()) return null;
					let n = this.getError("user_limit"),
						l = e.isGuildStageVoice() ? ei.xGv : ei.$pe;
					return (0, i.jsxs)(T.Z, {
						direction: T.Z.Direction.VERTICAL,
						className: ed.marginBottom40,
						children: [(0, i.jsx)(g.vwX, {
							id: eC,
							children: eo.intl.string(eo.t["/AoSGB"])
						}), "" !== n && (0, i.jsx)(g.R94, {
							id: eN,
							type: g.geA.DESCRIPTION,
							style: {
								color: u.Z.unsafe_rawColors.RED_400.css
							},
							className: ed.marginBottom8,
							children: n
						}), (0, i.jsx)(g.iRW, {
							initialValue: Math.min(e.userLimit, l),
							onValueChange: this.handleUserLimitChange,
							onValueRender: this.onRenderUserLimit,
							onMarkerRender: e => 0 === Math.round(e) ? "∞" : e,
							markers: [0, l],
							minValue: 0,
							maxValue: l,
							disabled: !t,
							"aria-labelledby": eC,
							"aria-describedby": null != n && "" !== n ? eN : eS
						}), (0, i.jsx)(g.R94, {
							id: eS,
							type: g.geA.DESCRIPTION,
							children: eo.intl.format(e.isGuildStageVoice() ? eo.t.OqZI8P : eo.t["8yb3JS"], {})
						})]
					})
				}
				renderRegionOverride(e) {
					var t;
					let {
						regions: n,
						canManageChannels: l,
						guild: r
					} = this.props;
					if (null == r || !this.showVoiceSettings() || e.isGuildStageVoice()) return null;
					let s = [];
					null != n && (s = n.filter(e => !e.deprecated && !e.hidden).map(e => ({
						label: e.name,
						value: e.id
					}))).unshift({
						label: eo.intl.string(eo.t.JEmsam),
						value: ew
					});
					let a = null != (t = e.rtcRegion) ? t : ew;
					return (0, i.jsxs)(T.Z, {
						direction: T.Z.Direction.VERTICAL,
						children: [(0, i.jsx)(g.vwX, {
							children: eo.intl.string(eo.t.Ms8bX1)
						}), (0, i.jsx)(g.q4e, {
							options: s,
							value: a,
							onChange: this.handleRegionChange,
							isDisabled: !l
						}), (0, i.jsx)(g.R94, {
							type: g.geA.DESCRIPTION,
							children: eo.intl.string(eo.t["dbTs+/"])
						})]
					})
				}
				renderJuiceImage(e) {
					let t, {
						theme: l
					} = this.props;
					return t = e.type === ei.d4z.GUILD_CATEGORY ? (0, h.wj)(l) ? n(309095) : n(925442) : (0, h.wj)(l) ? n(316491) : n(301358), (0, i.jsx)(T.Z, {
						justify: T.Z.Justify.CENTER,
						className: ed.marginTop60,
						children: (0, i.jsx)("img", {
							alt: "",
							width: 280,
							height: 165,
							src: t
						})
					})
				}
				render() {
					let {
						channel: e,
						channelName: t,
						guild: n
					} = this.props;
					return null == e || null == t || null == n ? null : (0, i.jsxs)(g.hjN, {
						className: "channel-settings-overview",
						tag: g.RB0.H1,
						title: eo.intl.string(eo.t["/dp6yc"]),
						children: [this.renderChannelInfo(e, t), this.showVoiceSettings() ? (0, i.jsx)(g.$i$, {
							className: s()(ed.marginTop40, ed.marginBottom40)
						}) : null, this.renderVoiceBitrate(e, n), this.renderVideoQualityMode(e), this.renderUserLimit(e), this.renderRegionOverride(e), this.renderJuiceImage(e)]
					})
				}
				handleSubmit() {
					return new Promise(e => {
						e({
							shouldClear: !1,
							shouldRefocus: !0
						})
					})
				}
				constructor(e) {
					var t, n;
					super(e), eu(this, "defaultReactionButtonRef", l.createRef()), eu(this, "nameInputRef", l.createRef()), eu(this, "cursorPosition", 0), eu(this, "renderEmojiPicker", e => {
						let {
							closePopout: t
						} = e, {
							channel: n
						} = this.props;
						return (0, i.jsx)(R.Z, {
							guildId: null == n ? void 0 : n.guild_id,
							closePopout: t,
							onSelectEmoji: e => {
								let {
									emoji: n,
									willClose: i
								} = e;
								this.handleChangeDefaultReactionEmoji(n), i && t()
							},
							pickerIntention: er.Hz.COMMUNITY_CONTENT,
							channel: n,
							analyticsOverride: eE
						})
					}), eu(this, "handleRequireTagChanged", e => {
						let {
							channel: t
						} = this.props;
						if (null == t) return null;
						let n = (0, $.mB)(t.flags, el.zZ.REQUIRE_TAG, e);
						(0, p.pW)({
							flags: n
						})
					}), eu(this, "handleChangeName", e => {
						var t, n;
						let {
							channel: i
						} = this.props;
						if (null == i) return;
						i.isThread() ? e = (0, k.Z)(e, !1) : ei.TPd.LIMITED_CHANNEL_NAME.has(i.type) && (e = (0, J.Nj)(e));
						let l = null != (n = null == (t = this.nameInputRef.current) ? void 0 : t.selectionStart) ? n : 0;
						(0, p.pW)({
							name: e
						}), setTimeout(() => {
							var e;
							null == (e = this.nameInputRef.current) || e.setSelectionRange(l, l)
						}, 0)
					}), eu(this, "handleBlurName", () => {
						let {
							channel: e,
							channelName: t
						} = this.props;
						if ((null == e ? void 0 : e.isThread()) && null != t) {
							let e = (0, k.Z)(t, !0);
							e !== t && (0, p.pW)({
								name: e
							})
						}
					}), eu(this, "insertEmojiAtPosition", e => {
						var t, n;
						let i = this.nameInputRef.current,
							l = null != (t = null == i ? void 0 : i.selectionStart) ? t : 0,
							r = null != (n = null == i ? void 0 : i.selectionEnd) ? n : 0,
							s = this.props.channelName,
							a = (null == s ? void 0 : s.substring(0, l)) + e + (null == s ? void 0 : s.substring(r));
						(0, p.pW)({
							name: a
						}), setTimeout(() => {
							let t = l + e.length;
							null == i || i.focus(), null == i || i.setSelectionRange(t, t)
						}, 0)
					}), eu(this, "handleChangeTopic", e => {
						(0, p.pW)({
							topic: _.ZP.translateInlineEmojiToSurrogates(e)
						})
					}), eu(this, "handleChangeRichTopic", (e, t, n) => {
						this.setState({
							textTopicValue: t,
							richTopicValue: n
						}), this.handleChangeTopic(t)
					}), eu(this, "handleChangeTemplate", e => {
						(0, p.pW)({
							template: _.ZP.translateInlineEmojiToSurrogates(e)
						})
					}), eu(this, "handleChangeDefaultReactionEmoji", e => {
						let t = null == e ? null : (null == e ? void 0 : e.id) != null ? {
							emojiId: e.id,
							emojiName: void 0
						} : {
							emojiId: void 0,
							emojiName: e.optionallyDiverseSequence
						};
						(0, p.pW)({
							defaultReactionEmoji: t
						})
					}), eu(this, "handleChangeDefaultForumLayout", e => {
						let {
							channel: t
						} = this.props;
						if (null == t) return null;
						(0, p.pW)({
							defaultForumLayout: e
						}), this.props.handleSetDefaultLayout(e)
					}), eu(this, "handleChangeDefaultSortOrder", e => {
						let {
							channel: t
						} = this.props;
						if (null == t) return null;
						(0, p.pW)({
							defaultSortOrder: e
						})
					}), eu(this, "handleChangeDefaultTagSetting", e => {
						let {
							channel: t
						} = this.props;
						if (null == t) return null;
						(0, p.pW)({
							defaultTagSetting: e
						})
					}), eu(this, "handleChangeBitrate", e => {
						(0, p.pW)({
							bitrate: 1e3 * Math.round(e / 1e3)
						})
					}), eu(this, "handleUserLimitChange", e => {
						(0, p.pW)({
							userLimit: Math.round(e)
						})
					}), eu(this, "handleNSFWChange", e => {
						(0, p.pW)({
							nsfw: e
						})
					}), eu(this, "handleActiveChannelsRemovedChange", e => {
						let {
							channel: t
						} = this.props;
						if (null == t) return null;
						let n = (0, $.mB)(t.flags, el.zZ.ACTIVE_CHANNELS_REMOVED, !e);
						(0, p.pW)({
							flags: n
						})
					}), eu(this, "handleNewsChange", e => {
						(0, p.pW)({
							type: e ? ei.d4z.GUILD_ANNOUNCEMENT : ei.d4z.GUILD_TEXT
						})
					}), eu(this, "handleChangeSlowmode", e => {
						(0, p.pW)({
							rateLimitPerUser: e
						})
					}), eu(this, "handleChangeThreadMessageSlowmode", e => {
						(0, p.pW)({
							defaultThreadRateLimitPerUser: e
						})
					}), eu(this, "handleChangeDefaultAutoArchiveDuration", e => {
						(0, p.pW)({
							defaultAutoArchiveDuration: e
						})
					}), eu(this, "handleRegionChange", e => {
						(0, p.pW)({
							rtcRegion: e === ew ? null : e
						})
					}), eu(this, "handleVideoQualityModeChange", e => {
						(0, p.pW)({
							videoQualityMode: e
						})
					}), eu(this, "handleAutoArchiveDurationChanged", e => {
						(0, p.pW)({
							autoArchiveDuration: e
						})
					}), eu(this, "handleInvitableChanged", e => {
						(0, p.pW)({
							invitable: e
						})
					}), eu(this, "handleChannelSummariesToggled", e => {
						let {
							channel: t
						} = this.props;
						if (null == t) return null;
						let n = (0, $.mB)(t.flags, el.zZ.SUMMARIES_DISABLED, !e);
						(0, p.pW)({
							flags: n
						})
					}), eu(this, "handleShowMediaOptionsToggled", e => {
						let {
							channel: t
						} = this.props;
						if (null == t) return null;
						let n = (0, $.mB)(t.flags, el.zZ.HIDE_MEDIA_DOWNLOAD_OPTIONS, !e);
						(0, p.pW)({
							flags: n
						})
					});
					let r = null != (n = null == (t = this.props.channel) ? void 0 : t.topic) ? n : "";
					this.state = {
						textTopicValue: r,
						richTopicValue: (0, O.JM)(r),
						topicFocused: !1,
						updateNameInputCursorPosition: !1
					}
				}
			}

			function e_() {
				let {
					errors: e,
					channel: t,
					submitting: n,
					subsection: r
				} = (0, d.cj)([G.Z], () => G.Z.getProps()), s = (0, d.e7)([X.Z], () => {
					var e;
					return X.Z.getRegions(null != (e = null == t ? void 0 : t.getGuildId()) ? e : null)
				}), a = (0, d.e7)([V.Z], () => V.Z.theme), o = (0, d.e7)([F.Z], () => F.Z.getGuild(null == t ? void 0 : t.getGuildId())), c = (0, M.C7)(t), u = (0, M.Xb)(t), {
					canManageChannels: h,
					canSendMessages: m
				} = (0, d.cj)([z.Z], () => ({
					canManageChannels: z.Z.can(ei.Plq.MANAGE_CHANNELS, t),
					canSendMessages: z.Z.can(ei.Plq.SEND_MESSAGES, t)
				})), g = (0, N.ZP)(t), p = H.default.getId(), f = (0, P.v)(), x = null == t ? void 0 : t.id, j = (0, v.ts)(t, !1, !0), y = b.Z.useExperiment({
					guildId: null == t ? void 0 : t.guild_id,
					location: "ChannelSettingsOverview"
				}).enabled, S = (0, C.s)({
					guildId: null == o ? void 0 : o.id,
					location: "ChannelSettingsOverview"
				}), O = l.useCallback(e => {
					null != x && f.getState().setLayoutType(x, e)
				}, [x, f]);
				return (0, i.jsx)(eI, {
					errors: e,
					channel: t,
					channelName: g,
					submitting: n,
					regions: s,
					theme: a,
					guild: o,
					canManageChannels: (null == t ? void 0 : t.isThread()) ? c : h,
					canSendMessages: m,
					isThreadModerator: u,
					canManageThread: c,
					subsection: r,
					isForumPost: null != t && t.isForumPost(),
					isOwner: null == t ? void 0 : t.isOwner(p),
					handleSetDefaultLayout: O,
					showChannelSummariesSettings: j,
					showAdvancedSlowModeSetting: y,
					isEmojiInChannelNamesEnabled: S
				})
			}
		},
		856606: function(e, t, n) {
			"use strict";
			n.d(t, {
				Z: () => K,
				n: () => X
			}), n(539854), n(415506);
			var i = n(255367),
				l = n(73800),
				r = n(392711),
				s = n.n(r),
				a = n(149765),
				o = n(442837),
				c = n(780384),
				d = n(481060),
				u = n(668781),
				h = n(493683),
				m = n(741361),
				g = n(239091),
				p = n(668390),
				f = n(144991),
				x = n(852860),
				j = n(911969),
				b = n(410030),
				v = n(607070),
				y = n(940639),
				C = n(325476),
				N = n(146085),
				S = n(601964),
				O = n(598077),
				E = n(277053),
				T = n(388610),
				w = n(271383),
				Z = n(485386),
				R = n(430824),
				I = n(496675),
				_ = n(594174),
				P = n(823379),
				A = n(892880),
				L = n(63063),
				D = n(5192),
				M = n(233608),
				k = n(700785),
				B = n(51144),
				V = n(257017),
				U = n(188857),
				W = n(981631),
				H = n(388032),
				G = n(483112);

			function F(e) {
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

			function z(e, t) {
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
			let X = o.ZP.connectStores([E.Z, T.Z], () => {
				let e = T.Z.getChannel();
				return {
					submitting: E.Z.formState === W.QZA.SUBMITTING,
					onReset() {
						(0, m.S1)()
					},
					onSave() {
						if (null == e) return;
						let t = E.Z.editedPermissionIds.reduce((e, t) => {
							let n = E.Z.getPermissionOverwrite(t);
							return null != n && e.push(n), e
						}, []);
						(0, m.hw)(e.id, t)
					}
				}
			})(x.Z);

			function Y(e) {
				let {
					overwrite: t
				} = e, n = (0, o.e7)([E.Z], () => E.Z.channel), l = (0, o.e7)([R.Z], () => null != n ? R.Z.getGuild(n.getGuildId()) : null), r = (0, o.e7)([Z.Z], () => null != l ? Z.Z.getRoles(l.id) : void 0);
				if (null == n || null == l || null == t) return null;
				let {
					guild_id: s,
					id: c
				} = n, {
					id: g
				} = t, p = () => {
					var e;
					if (null == R.Z.getGuild(s) || null == r) return "";
					let t = r[g],
						n = _.default.getUser(g),
						i = null != (e = null == n ? void 0 : n.username) ? e : "";
					return null != t ? t.name : i
				}, x = (e, i) => {
					if ("boolean" == typeof i) throw Error("Unexpected boolean action");
					let {
						allow: l,
						deny: r
					} = t;
					switch (r = a.Od(r, e), l = a.Od(l, e), i) {
						case "ALLOW":
							l = a.IH(l, e);
							break;
						case "DENY":
							r = a.IH(r, e)
					}
					if (I.Z.can(e, n, {
							[g]: z(F({}, t), {
								allow: l,
								deny: r
							})
						}))(0, m.kY)(n, g, l, r);
					else {
						let e;
						if (t.type === j.BN.MEMBER) {
							let n = _.default.getUser(t.id);
							null != n && (e = B.ZP.getName(n))
						} else if (t.type === j.BN.ROLE) {
							let i = R.Z.getGuild(n.getGuildId());
							if (null != i) {
								let n = Z.Z.getRole(i.id, t.id);
								null != n && (e = n.name)
							}
						}
						V.X(e)
					}
				}, b = e => {
					let t = I.Z.can(W.Plq.ADMINISTRATOR, l) || I.Z.can(W.Plq.MANAGE_ROLES, n, void 0, void 0, !0);
					return n.isGuildStageVoice() && N.xS.has(e) ? H.intl.string(H.t.bTS5lZ) : !((!a.fS(e, W.Plq.MANAGE_ROLES) || t) && (null == e || I.Z.can(e, l) || t)) && H.intl.string(H.t.nOtPMD)
				}, v = g === s, y = n.isForumLikeChannel() && a.e$(t.deny, W.Plq.SEND_MESSAGES), S = a.e$(t.deny, W.Plq.SEND_MESSAGES), O = a.e$(t.deny, W.Plq.READ_MESSAGE_HISTORY), T = M.Z.generateChannelPermissionSpec(s, n, v, {
					createPostsDisabled: y,
					sendMessagesDisabled: S,
					readMessageHistoryDisabled: O
				});
				return (0, i.jsxs)(C.ZP.Content, {
					className: G.layoutStyle,
					children: [T.map((e, n) => (0, i.jsx)(f.Z, {
						spec: e,
						allow: t.allow,
						deny: t.deny,
						onChange: x,
						permissionRender: b,
						className: G.permissionsForm
					}, n)), s === g ? null : (0, i.jsx)(d.zxk, {
						variant: "critical-secondary",
						text: H.intl.format(H.t.txPV7u, {
							name: p()
						}),
						onClick: () => {
							let e = p();
							u.Z.show({
								title: H.intl.string(H.t.GuPYQE),
								body: H.intl.format(H.t.xERCnZ, {
									name: e
								}),
								cancelText: H.intl.string(H.t["ETE/oK"]),
								onConfirm: () => h.Z.clearPermissionOverwrite(c, g)
							})
						}
					})]
				})
			}

			function J(e) {
				let {
					guildId: t,
					channelId: n,
					user: l
				} = e, r = l.getAvatarURL(t, 32), s = D.ZP.getNickname(t, n, l), a = B.ZP.useUserTag(l), o = null, c = null;
				return o = null != s ? s : l.hasAvatarForGuild(t) ? l.username : a, (null != s || l.hasAvatarForGuild(t)) && (c = (0, i.jsxs)("div", {
					className: G.userRowSubText,
					children: [l.hasAvatarForGuild(t) ? (0, i.jsx)(d.qEK, {
						className: G.userRowSubAvatar,
						size: d.EFr.SIZE_16,
						src: l.getAvatarURL(void 0, 16),
						"aria-label": l.username
					}) : null, (0, i.jsx)(d.Text, {
						variant: "text-xs/normal",
						color: "text-muted",
						children: a
					})]
				})), (0, i.jsxs)("div", {
					className: G.inline,
					children: [(0, i.jsx)(d.qEK, {
						size: d.EFr.SIZE_32,
						src: r,
						"aria-label": l.username,
						className: G.userRowAvatar
					}), (0, i.jsxs)("div", {
						className: G.userRowText,
						children: [(0, i.jsx)(d.Text, {
							className: G.userRowText,
							variant: "text-md/normal",
							children: o
						}), c]
					})]
				})
			}

			function q(e) {
				return "object" == typeof e && null != e && "colorString" in e && "name" in e
			}

			function $(e) {
				let {
					guild: t,
					channel: n,
					permissionOverwrites: l,
					onClose: r,
					onSelect: a,
					position: c
				} = e, d = (0, o.e7)([Z.Z], () => Z.Z.getRoles(t.id)), u = (0, o.Wu)([w.ZP], () => w.ZP.getMemberIds(t.id));
				return (0, i.jsx)(y.Z, {
					label: H.intl.string(H.t.lT5Ztr),
					placeholder: H.intl.string(H.t.V2pZRk),
					"aria-label": H.intl.string(H.t["Uvt+p6"]),
					sections: [H.intl.string(H.t.LPJmLy), H.intl.string(H.t["9Oq93t"])],
					onRenderResult: e => {
						if (q(e)) {
							let t;
							return null != e.colorString && (t = {
								color: e.colorString
							}), (0, i.jsx)("span", {
								style: t,
								children: e.name
							})
						}
						if (e instanceof O.Z) return (0, i.jsx)(J, {
							guildId: t.id,
							channelId: n.id,
							user: e
						})
					},
					onFilterResults: (e, t) => 0 === t ? s()(d).filter(t => null == l[t.id] && e(t.name)).sortBy(e => -e.position).value() : s()(u).map(_.default.getUser).filter(P.lm).filter(t => null == l[t.id] && e(t.username.toLowerCase())).sortBy(e => e.username.toLowerCase()).value(),
					onQueryChange: e => {
						A.Z.requestMembers(t.id, e, 20)
					},
					onSelect: e => {
						null != e && (q(e) ? a(e.id, j.BN.ROLE) : e instanceof O.Z && a(e.id, j.BN.MEMBER))
					},
					onClose: r,
					position: c
				})
			}

			function Q() {
				let e = l.useRef(null),
					{
						channel: t,
						permissionOverwrites: r,
						selectedOverwriteId: a
					} = (0, o.cj)([E.Z], () => E.Z),
					f = null == t ? void 0 : t.getGuildId(),
					{
						guild: x,
						guildRoles: y
					} = (0, o.cj)([R.Z, Z.Z], () => {
						let e = null != f ? R.Z.getGuild(f) : void 0,
							t = null != e ? Z.Z.getRoles(e.id) : void 0;
						return {
							guild: e,
							guildRoles: t
						}
					}, [f]),
					N = (0, U.Z)(f, r),
					O = (0, b.ZP)(),
					T = (0, o.e7)([v.Z], () => v.Z.roleStyle),
					w = l.useCallback((e, l) => {
						if (null == t) return null;
						(0, g.jW)(e, async () => {
							let {
								id: e,
								role: r,
								name: s
							} = l, a = null != x ? (0, S.lV)(x) : null, o = null != r && a === r.id, {
								default: c
							} = await n.e("83884").then(n.bind(n, 905687));
							return n => (0, i.jsx)(c, z(F({}, n), {
								id: e,
								role: r,
								handleDeletePermission: o ? void 0 : () => {
									u.Z.show({
										title: H.intl.string(H.t.GuPYQE),
										body: H.intl.format(H.t.xERCnZ, {
											name: s
										}),
										cancelText: H.intl.string(H.t["ETE/oK"]),
										onConfirm: () => h.Z.clearPermissionOverwrite(t.id, e)
									})
								}
							}))
						})
					}, [t, x]);
				if (null == x || null == y || null == t || null == r) return null;
				let I = e => {
						let {
							position: n,
							closePopout: l
						} = e;
						return (0, i.jsx)($, {
							guild: x,
							channel: t,
							permissionOverwrites: r,
							position: null != n ? n : "bottom",
							onSelect: _,
							onClose: l
						})
					},
					_ = (e, n) => {
						h.Z.updatePermissionOverwrite(t.id, {
							id: e,
							type: n,
							allow: k.Hn,
							deny: k.Hn
						}).then(() => (0, m.Aj)(e))
					};
				null != r && null == r[x.id] && (r[x.id] = k.we(x.id));
				let A = s()(r).filter(e => e.type === j.BN.ROLE).map(e => y[e.id]).filter(P.lm).sortBy(e => -e.position).map(e => (0, i.jsx)(p.Z, {
						theme: O,
						roleStyle: T,
						id: e.id,
						role: e,
						guild: x,
						color: e.colorString,
						"aria-label": e.name,
						onContextMenu: t => w(t, {
							id: e.id,
							name: e.name,
							role: e
						}),
						children: e.name
					}, "".concat(a, "-").concat(e.id))).value(),
					D = s()(N).sortBy(e => e.username.toLowerCase()).map(e => {
						let t = e.getAvatarURL(x.id, 24);
						return (0, i.jsx)(p.Z, {
							id: e.id,
							guild: x,
							theme: O,
							roleStyle: T,
							"aria-label": B.ZP.getUserTag(e, {
								decoration: "never"
							}),
							onContextMenu: t => w(t, {
								id: e.id,
								name: e.username
							}),
							children: (0, i.jsxs)("div", {
								className: G.inline,
								children: [(0, i.jsx)(d.qEK, {
									size: d.EFr.SIZE_20,
									src: t,
									"aria-label": e.username,
									className: G.xsmallAvatar
								}), (0, i.jsx)("span", {
									className: G.username,
									children: B.ZP.getUserTag(e)
								})]
							})
						}, "".concat(a, "-").concat(e.id))
					}).value();
				return (0, i.jsx)(C.ZP.Sidebar, {
					className: G.layoutStyle,
					scrollable: !0,
					children: (0, i.jsxs)(d.njP, {
						onItemSelect: m.Aj,
						selectedItem: a,
						orientation: "vertical",
						children: [(() => {
							let t = (0, c.wj)(O) ? n(521715) : n(299603);
							return (0, i.jsx)(d.yRy, {
								targetElementRef: e,
								renderPopout: I,
								position: "bottom",
								autoInvert: !1,
								clickTrap: !0,
								children: n => (0, i.jsx)(d.njP.Header, z(F({
									ref: e
								}, n), {
									children: (0, i.jsxs)("div", {
										className: G.sidebarHeaderDefault,
										children: [(0, i.jsxs)("span", {
											children: [H.intl.string(H.t.LPJmLy), "/", H.intl.string(H.t["9Oq93t"])]
										}), (0, i.jsx)("img", {
											alt: "",
											className: G.sidebarHeader,
											src: t
										})]
									})
								}))
							})
						})(), A, D, (0, i.jsxs)(l.Fragment, {
							children: [(0, i.jsx)(d.njP.Separator, {
								style: {
									marginTop: 20,
									marginBottom: 14
								}
							}), (0, i.jsx)(d.R94, {
								type: d.geA.DESCRIPTION,
								children: (0, i.jsx)(d.eee, {
									href: L.Z.getArticleURL(W.BhN.PERMISSIONS_TUTORIAL),
									target: "_blank",
									children: H.intl.string(H.t["pfoA8/"])
								})
							})]
						})]
					})
				})
			}

			function K() {
				let {
					channel: e,
					permissionOverwrites: t,
					selectedOverwriteId: n
				} = (0, o.cj)([E.Z], () => E.Z);
				if (null == (0, o.e7)([R.Z], () => null != e ? R.Z.getGuild(e.getGuildId()) : null) || null == e || null == t || null == n) return null;
				let l = t[n];
				return (0, i.jsxs)(C.ZP, {
					className: G.container,
					children: [(0, i.jsx)(Q, {}), (0, i.jsx)(Y, {
						overwrite: l
					})]
				})
			}
		},
		296146: function(e, t, n) {
			"use strict";
			n.d(t, {
				Z: () => r
			});
			var i = n(255367);
			n(73800);
			var l = n(325767);

			function r(e) {
				var t, n, {
						color: r = "currentColor",
						foreground: s,
						backgroundColor: a = "none"
					} = e,
					o = function(e, t) {
						if (null == e) return {};
						var n, i, l = function(e, t) {
							if (null == e) return {};
							var n, i, l = {},
								r = Object.keys(e);
							for (i = 0; i < r.length; i++) n = r[i], t.indexOf(n) >= 0 || (l[n] = e[n]);
							return l
						}(e, t);
						if (Object.getOwnPropertySymbols) {
							var r = Object.getOwnPropertySymbols(e);
							for (i = 0; i < r.length; i++) n = r[i], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (l[n] = e[n])
						}
						return l
					}(e, ["color", "foreground", "backgroundColor"]);
				return (0, i.jsxs)("svg", (t = function(e) {
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
				}({}, (0, l.Z)(o)), n = n = {
					width: "272",
					height: "143",
					viewBox: "0 0 272 143",
					fill: "none",
					xmlns: "http://www.w3.org/2000/svg",
					children: [(0, i.jsx)("rect", {
						className: s,
						width: "130",
						height: "143",
						rx: "12",
						fill: a
					}), (0, i.jsx)("path", {
						className: s,
						opacity: "0.5",
						d: "M0 12C0 5.37259 5.37258 0 12 0H118C124.627 0 130 5.37258 130 12V83H0V12Z",
						fill: r
					}), (0, i.jsx)("path", {
						className: s,
						fillRule: "evenodd",
						clipRule: "evenodd",
						d: "M57.641 30.3944C54.9317 30.3944 52.7354 32.488 52.7354 35.0705V49.0987C52.7354 51.6812 54.9317 53.7747 57.641 53.7747H72.358C75.0673 53.7747 77.2637 51.6812 77.2637 49.0987V35.0705C77.2637 32.488 75.0673 30.3944 72.358 30.3944H57.641ZM62.5467 37.4085C62.5467 36.117 61.4468 35.0705 60.0938 35.0705C58.7379 35.0705 57.641 36.117 57.641 37.4085C57.641 38.701 58.7379 39.7466 60.0938 39.7466C61.4468 39.7466 62.5467 38.701 62.5467 37.4085ZM61.3203 44.4226L57.641 49.0987H72.358L68.6787 40.9156L63.7731 46.7606L61.3203 44.4226Z",
						fill: "#C4C4C4"
					}), (0, i.jsx)("rect", {
						className: s,
						opacity: "0.5",
						x: "12",
						y: "99",
						width: "106",
						height: "8",
						rx: "4",
						fill: r
					}), (0, i.jsx)("rect", {
						className: s,
						opacity: "0.5",
						x: "12",
						y: "123",
						width: "32",
						height: "8",
						rx: "4",
						fill: r
					}), (0, i.jsx)("circle", {
						className: s,
						opacity: "0.5",
						cx: "54",
						cy: "127",
						r: "2",
						fill: r,
						fillOpacity: "0.48"
					}), (0, i.jsx)("rect", {
						className: s,
						opacity: "0.5",
						x: "64",
						y: "123",
						width: "54",
						height: "8",
						rx: "4",
						fill: r
					}), (0, i.jsx)("rect", {
						className: s,
						x: "0.5",
						y: "0.5",
						width: "129",
						height: "142",
						rx: "11.5",
						stroke: r,
						strokeOpacity: "0.3"
					}), (0, i.jsx)("rect", {
						className: s,
						x: "142",
						width: "130",
						height: "143",
						rx: "12",
						fill: a
					}), (0, i.jsx)("path", {
						className: s,
						opacity: "0.5",
						d: "M142 12C142 5.37259 147.373 0 154 0H260C266.627 0 272 5.37258 272 12V83H142V12Z",
						fill: r
					}), (0, i.jsx)("path", {
						className: s,
						fillRule: "evenodd",
						clipRule: "evenodd",
						d: "M199.641 30.3944C196.932 30.3944 194.735 32.488 194.735 35.0705V49.0987C194.735 51.6812 196.932 53.7747 199.641 53.7747H214.358C217.067 53.7747 219.264 51.6812 219.264 49.0987V35.0705C219.264 32.488 217.067 30.3944 214.358 30.3944H199.641ZM204.547 37.4085C204.547 36.117 203.447 35.0705 202.094 35.0705C200.738 35.0705 199.641 36.117 199.641 37.4085C199.641 38.701 200.738 39.7466 202.094 39.7466C203.447 39.7466 204.547 38.701 204.547 37.4085ZM203.32 44.4226L199.641 49.0987H214.358L210.679 40.9156L205.773 46.7606L203.32 44.4226Z",
						fill: "#C4C4C4"
					}), (0, i.jsx)("rect", {
						className: s,
						opacity: "0.5",
						x: "154",
						y: "99",
						width: "106",
						height: "8",
						rx: "4",
						fill: r
					}), (0, i.jsx)("rect", {
						className: s,
						opacity: "0.5",
						x: "154",
						y: "123",
						width: "32",
						height: "8",
						rx: "4",
						fill: r
					}), (0, i.jsx)("circle", {
						className: s,
						opacity: "0.5",
						cx: "196",
						cy: "127",
						r: "2",
						fill: r,
						fillOpacity: "0.48"
					}), (0, i.jsx)("rect", {
						className: s,
						opacity: "0.5",
						x: "206",
						y: "123",
						width: "54",
						height: "8",
						rx: "4",
						fill: r
					}), (0, i.jsx)("rect", {
						className: s,
						x: "142.5",
						y: "0.5",
						width: "129",
						height: "142",
						rx: "11.5",
						stroke: r,
						strokeOpacity: "0.3"
					})]
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
		},
		564735: function(e, t, n) {
			"use strict";
			n.d(t, {
				Z: () => r
			});
			var i = n(255367);
			n(73800);
			var l = n(325767);

			function r(e) {
				var t, n, {
						color: r = "currentColor",
						foreground: s,
						backgroundColor: a = "none"
					} = e,
					o = function(e, t) {
						if (null == e) return {};
						var n, i, l = function(e, t) {
							if (null == e) return {};
							var n, i, l = {},
								r = Object.keys(e);
							for (i = 0; i < r.length; i++) n = r[i], t.indexOf(n) >= 0 || (l[n] = e[n]);
							return l
						}(e, t);
						if (Object.getOwnPropertySymbols) {
							var r = Object.getOwnPropertySymbols(e);
							for (i = 0; i < r.length; i++) n = r[i], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (l[n] = e[n])
						}
						return l
					}(e, ["color", "foreground", "backgroundColor"]);
				return (0, i.jsxs)("svg", (t = function(e) {
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
				}({}, (0, l.Z)(o)), n = n = {
					width: "272",
					height: "143",
					viewBox: "0 0 272 143",
					fill: "none",
					xmlns: "http://www.w3.org/2000/svg",
					children: [(0, i.jsx)("rect", {
						className: s,
						y: "15.5",
						width: "272",
						height: "112",
						rx: "12",
						fill: a
					}), (0, i.jsx)("rect", {
						className: s,
						opacity: "0.5",
						x: "12",
						y: "27.5",
						width: "168",
						height: "8",
						rx: "4",
						fill: r
					}), (0, i.jsx)("rect", {
						className: s,
						opacity: "0.5",
						x: "12",
						y: "43.5",
						width: "96",
						height: "8",
						rx: "4",
						fill: r
					}), (0, i.jsx)("rect", {
						className: s,
						opacity: "0.5",
						x: "12",
						y: "67.5",
						width: "168",
						height: "8",
						rx: "4",
						fill: r
					}), (0, i.jsx)("rect", {
						className: s,
						opacity: "0.5",
						x: "12",
						y: "83.5",
						width: "168",
						height: "8",
						rx: "4",
						fill: r
					}), (0, i.jsx)("rect", {
						className: s,
						opacity: "0.5",
						x: "196",
						y: "27.5",
						width: "64",
						height: "64",
						rx: "8",
						fill: r
					}), (0, i.jsx)("path", {
						className: s,
						fillRule: "evenodd",
						clipRule: "evenodd",
						d: "M222 49.5C219.791 49.5 218 51.2909 218 53.5V65.5C218 67.7091 219.791 69.5 222 69.5H234C236.209 69.5 238 67.7091 238 65.5V53.5C238 51.2909 236.209 49.5 234 49.5H222ZM226 55.5C226 54.3952 225.103 53.5 224 53.5C222.894 53.5 222 54.3952 222 55.5C222 56.6056 222.894 57.5 224 57.5C225.103 57.5 226 56.6056 226 55.5ZM225 61.5L222 65.5H234L231 58.5L227 63.5L225 61.5Z",
						fill: "#C4C4C4"
					}), (0, i.jsx)("rect", {
						className: s,
						opacity: "0.5",
						x: "12",
						y: "107.5",
						width: "32",
						height: "8",
						rx: "4",
						fill: r
					}), (0, i.jsx)("circle", {
						className: s,
						opacity: "0.5",
						cx: "54",
						cy: "111.5",
						r: "2",
						fill: r,
						fillOpacity: "0.48"
					}), (0, i.jsx)("rect", {
						className: s,
						opacity: "0.5",
						x: "64",
						y: "107.5",
						width: "32",
						height: "8",
						rx: "4",
						fill: r
					}), (0, i.jsx)("rect", {
						className: s,
						x: "0.5",
						y: "16",
						width: "271",
						height: "111",
						rx: "11.5",
						stroke: r,
						strokeOpacity: "0.3"
					})]
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
		},
		162389: function(e, t, n) {
			"use strict";
			n.d(t, {
				Z: () => y
			});
			var i = n(255367),
				l = n(73800),
				r = n(120356),
				s = n.n(r),
				a = n(442837),
				o = n(692547),
				c = n(481060),
				d = n(787014),
				u = n(603211),
				h = n(710344),
				m = n(496675),
				g = n(479099),
				p = n(710352),
				f = n(981631),
				x = n(388032),
				j = n(628961);

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

			function v(e, t) {
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

			function y(e) {
				let {
					channel: t
				} = e, r = (0, a.e7)([m.Z], () => m.Z.can(f.Plq.MANAGE_CHANNELS, t), [t]), u = t.availableTags.length >= p.pC, g = t.availableTags.length > 0, y = l.useCallback(() => {
					let e = t.availableTags.length >= p.pC;
					r && !e && (0, c.ZDy)(async () => {
						let {
							default: e
						} = await n.e("21971").then(n.bind(n, 201049));
						return n => (0, i.jsx)(e, v(b({}, n), {
							channelId: t.id,
							guildId: t.guild_id
						}))
					})
				}, [t, r]), N = l.useCallback(e => {
					r && (0, c.ZDy)(async () => {
						let {
							default: l
						} = await n.e("21971").then(n.bind(n, 201049));
						return n => (0, i.jsx)(l, v(b({}, n), {
							channelId: t.id,
							guildId: t.guild_id,
							tag: e
						}))
					})
				}, [r, t]), {
					handleDragStart: S,
					handleDragReset: O,
					handleDragComplete: E
				} = (0, h.Z)(t.availableTags, e => {
					(0, d.pW)({
						availableTags: e
					})
				});
				return (0, i.jsxs)("div", {
					className: j.tags,
					children: [g ? t.availableTags.map(e => (0, i.jsx)(C, {
						tag: e,
						availableTags: t.availableTags,
						canManageChannels: r,
						onTagClick: N,
						onDragComplete: E,
						onDragReset: O,
						onDragStart: S
					}, e.id)) : null, g ? (0, i.jsx)(c.P3F, {
						onClick: y,
						className: s()(j.addTags, {
							[j.disabled]: !r || u
						}),
						children: (0, i.jsx)(c.qJs, {
							size: "custom",
							"aria-label": x.intl.string(x.t["/jubeH"]),
							color: o.Z.unsafe_rawColors.WHITE_500.css,
							width: 20,
							height: 20
						})
					}) : (0, i.jsx)(c.zxk, {
						variant: "primary",
						text: x.intl.string(x.t["/jubeH"]),
						disabled: !r,
						onClick: y
					})]
				})
			}

			function C(e) {
				let {
					tag: t,
					availableTags: n,
					canManageChannels: l,
					onTagClick: r,
					onDragComplete: a,
					onDragStart: o,
					onDragReset: c
				} = e, d = n.findIndex(e => e.id === t.id), {
					drag: h,
					dragSourcePosition: m,
					drop: p,
					setIsDraggable: f
				} = (0, u.Z)({
					type: "CHANNEL_SETTINGS_FORUM_TAGS",
					index: d,
					optionId: t.id,
					onDragStart: o,
					onDragComplete: a,
					onDragReset: c
				});
				return (0, i.jsx)("div", {
					className: s()(j.container, {
						[j.dropIndicatorBefore]: null != m && d < m,
						[j.dropIndicatorAfter]: null != m && d > m
					}),
					ref: e => {
						h(p(e))
					},
					onMouseEnter: () => f(l),
					onMouseLeave: () => f(!1),
					children: (0, i.jsx)(g.Z, {
						tag: t,
						disabled: !l,
						ariaLabel: x.intl.formatToPlainString(x.t.jhSvBw, {
							name: t.name
						}),
						onClick: l ? () => r(t) : void 0
					})
				})
			}
		},
		946458: function(e, t, n) {
			"use strict";
			n.d(t, {
				Z: () => c
			});
			var i = n(255367);
			n(73800);
			var l = n(442837),
				r = n(481060),
				s = n(596454),
				a = n(339085),
				o = n(939790);

			function c(e) {
				let {
					reactionEmoji: t
				} = e, n = (0, l.e7)([a.ZP], () => (null == t ? void 0 : t.emojiId) != null ? a.ZP.getUsableCustomEmojiById(t.emojiId) : null);
				return (0, i.jsxs)("div", {
					className: o.container,
					children: [(0, i.jsxs)("div", {
						className: o.body,
						children: [(0, i.jsxs)("div", {
							className: o.placeholderLines,
							children: [(0, i.jsx)(d, {
								width: "100%",
								marginBottom: 8
							}), (0, i.jsx)(d, {
								width: "80%",
								marginBottom: 16
							}), (0, i.jsx)(d, {
								width: "50%",
								marginBottom: 8
							}), (0, i.jsx)(d, {
								width: "60%",
								marginBottom: 16
							})]
						}), (0, i.jsx)("div", {
							className: o.placeholderMedia
						})]
					}), (0, i.jsxs)("div", {
						className: o.footer,
						children: [(0, i.jsxs)("div", {
							className: o.reaction,
							children: [null != t ? (0, i.jsx)(s.Z, {
								className: o.reactionEmote,
								emojiId: t.emojiId,
								emojiName: t.emojiName,
								animated: !!(null == n ? void 0 : n.animated)
							}) : (0, i.jsx)(r.EO4, {
								size: "sm",
								color: "currentColor",
								className: o.reactionEmote
							}), (0, i.jsx)(r.Text, {
								variant: "text-sm/semibold",
								color: "interactive-normal",
								children: 17
							})]
						}), (0, i.jsx)(d, {
							width: "24px",
							marginBottom: 0
						}), (0, i.jsx)("div", {
							className: o.dot
						}), (0, i.jsx)(d, {
							width: "24px",
							marginBottom: 0
						})]
					})]
				})
			}

			function d(e) {
				let {
					width: t,
					marginBottom: n
				} = e;
				return (0, i.jsx)("div", {
					className: o.placeholderLine,
					style: {
						width: t,
						marginBottom: n
					}
				})
			}
		},
		693196: function(e, t, n) {
			"use strict";
			n.d(t, {
				T: () => a
			});
			var i = n(526120),
				l = n(563534),
				r = n(734893),
				s = n(931261);
			async function a(e, t) {
				if (null == e || !(0, s.s)(e)) return;
				let n = l.Z.getSettings(e);
				if (n === l.P && (await (0, i.cP)(e), n = l.Z.getSettings(e)), n !== l.P && null != n) {
					if (null != n.newMemberActions && null != n.newMemberActions.find(e => e.channelId === t)) return r.j.TODO;
					if (null != n.resourceChannels && null != n.resourceChannels.find(e => e.channelId === t)) return r.j.RESOURCE
				}
			}
		},
		75464: function(e, t, n) {
			"use strict";
			n.d(t, {
				Z: () => g
			}), n(388685);
			var i, l = n(255367),
				r = n(73800),
				s = n(120356),
				a = n.n(s),
				o = n(153066),
				c = n(695294);

			function d(e, t, n) {
				return t in e ? Object.defineProperty(e, t, {
					value: n,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : e[t] = n, e
			}
			let u = {
					XSMALL: c.xsmall,
					SMALL: c.small,
					MEDIUM: c.medium,
					LARGE: c.large
				},
				h = {
					DEFAULT: "default",
					STATIC: "static"
				};
			class m extends(i = r.PureComponent) {
				render() {
					let e = this.props,
						{
							size: t,
							src: n,
							srcHover: i,
							className: r
						} = e,
						s = function(e, t) {
							if (null == e) return {};
							var n, i, l = function(e, t) {
								if (null == e) return {};
								var n, i, l = {},
									r = Object.keys(e);
								for (i = 0; i < r.length; i++) n = r[i], t.indexOf(n) >= 0 || (l[n] = e[n]);
								return l
							}(e, t);
							if (Object.getOwnPropertySymbols) {
								var r = Object.getOwnPropertySymbols(e);
								for (i = 0; i < r.length; i++) n = r[i], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (l[n] = e[n])
							}
							return l
						}(e, ["size", "src", "srcHover", "className"]),
						{
							hovered: u
						} = this.state,
						h = this.getMode();
					return (0, l.jsx)("button", function(e) {
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
					}({
						className: a()((0, o.l)(c, "iconButton", h), r, t),
						style: {
							backgroundImage: "url('".concat(u && null != i ? i : n, "')")
						},
						onMouseEnter: this.handleHover,
						onFocus: this.handleHover,
						onMouseLeave: this.handleBlur,
						onBlur: this.handleBlur
					}, s))
				}
				constructor(...e) {
					super(...e), d(this, "state", {
						hovered: !1
					}), d(this, "getMode", () => null != this.props.srcHover ? h.STATIC : h.DEFAULT), d(this, "handleHover", e => {
						let {
							onMouseEnter: t
						} = this.props;
						null == t || t(e), this.state.hovered || this.setState({
							hovered: !0
						})
					}), d(this, "handleBlur", e => {
						let {
							onMouseLeave: t
						} = this.props;
						null == t || t(e), this.state.hovered && this.setState({
							hovered: !1
						})
					})
				}
			}
			d(m, "Sizes", u), d(m, "defaultProps", {
				size: u.MEDIUM,
				disabled: !1
			});
			let g = m
		},
		208567: function(e, t, n) {
			"use strict";
			n.d(t, {
				S: () => b,
				Z: () => y
			}), n(35282), n(388685);
			var i, l = n(255367),
				r = n(73800),
				s = n(120356),
				a = n.n(s),
				o = n(512722),
				c = n.n(o),
				d = n(481060),
				u = n(624138),
				h = n(813197),
				m = n(981631),
				g = n(388032),
				p = n(348563);

			function f(e, t, n) {
				return t in e ? Object.defineProperty(e, t, {
					value: n,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : e[t] = n, e
			}

			function x(e) {
				for (var t = 1; t < arguments.length; t++) {
					var n = null != arguments[t] ? arguments[t] : {},
						i = Object.keys(n);
					"function" == typeof Object.getOwnPropertySymbols && (i = i.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
						return Object.getOwnPropertyDescriptor(n, e).enumerable
					}))), i.forEach(function(t) {
						f(e, t, n[t])
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

			function b(e) {
				let {
					className: t,
					icon: n = null
				} = e;
				return (0, l.jsx)(d.f6W, {
					theme: m.BRd.LIGHT,
					children: e => (0, l.jsx)("div", {
						className: a()(p.imageUploaderIcon, t, e),
						children: n
					})
				})
			}
			class v extends(i = r.PureComponent) {
				handleExternalFileChange(e) {
					c()(null != this.inputRef.current, "ImageInputRef asked to handleExternalFileChange when not mounted"), this.inputRef.current.handleFileChange(e)
				}
				render() {
					var e;
					let t, n, i, r, {
						image: s,
						hint: o,
						name: c,
						makeURL: f,
						disabled: v,
						onChange: y,
						showIcon: C,
						showIconDisabled: N,
						className: S,
						imageClassName: O,
						iconClassName: E,
						iconWrapperClassName: T,
						icon: w,
						hideSize: Z,
						imageStyle: R,
						showRemoveButton: I,
						maxFileSizeBytes: _,
						onFileSizeError: P,
						onOpenImageSelectModal: A,
						"aria-label": L
					} = this.props;
					if (null != (t = null != s && /^data:/.test(s) ? s : f(s)) ? n = 'url("'.concat(t, '")') : null != c && (i = (0, l.jsx)(d.X6q, {
							variant: "heading-xxl/normal",
							color: "always-white",
							className: p.imageUploaderAcronym,
							children: (0, u.Zg)(c)
						})), v) return (0, l.jsx)("div", {
						className: a()(p.imageUploader, p.disabled, S),
						children: (0, l.jsxs)("div", {
							className: a()(p.imageUploaderInner, O),
							style: j(x({}, R), {
								backgroundImage: n
							}),
							children: [i, N && (0, l.jsx)("div", {
								className: a()(p.imageUploaderIcon, p.imageUploaderIconDisabled, E),
								children: w
							})]
						})
					});
					null != s ? r = (0, l.jsx)(d.eee, {
						className: p.removeButton,
						onClick: this.handleRemove,
						children: g.intl.string(g.t.N86XcH)
					}) : Z || (r = (0, l.jsx)("small", {
						className: p.sizeInfo,
						children: g.intl.format(g.t.AH4c7e, {
							size: m.IXf
						})
					}));
					let D = null != (e = null != L ? L : o) ? e : g.intl.string(g.t["Ge+94+"]);
					return (0, l.jsxs)("div", {
						className: a()(p.imageUploader, S),
						children: [(0, l.jsx)(d.tEY, {
							within: !0,
							children: (0, l.jsxs)("div", {
								className: C ? a()(p.imageUploaderIconWrapper, T) : void 0,
								children: [(0, l.jsxs)("div", {
									className: a()(p.imageUploaderInner, O),
									style: j(x({}, R), {
										backgroundImage: n
									}),
									children: [(0, l.jsx)("span", {
										"aria-hidden": !0,
										children: i
									}), null != A ? (0, l.jsx)(d.P3F, {
										className: p.imageUploaderFileInput,
										"aria-label": D,
										onClick: A
									}) : (0, l.jsx)(h.ZP, {
										ref: this.inputRef,
										onChange: y,
										className: p.imageUploaderFileInput,
										"aria-label": D,
										tabIndex: 0,
										maxFileSizeBytes: _,
										onFileSizeError: P
									})]
								}), null != o && (0, l.jsx)("div", {
									className: p.imageUploaderHint,
									"aria-hidden": "true",
									children: o
								}), C && (0, l.jsx)(b, {
									className: E,
									icon: w
								})]
							})
						}), I ? r : null]
					})
				}
				constructor(...e) {
					super(...e), f(this, "inputRef", r.createRef()), f(this, "handleRemove", () => {
						this.props.onChange(null)
					})
				}
			}
			f(v, "defaultProps", {
				name: "",
				makeURL: e => e,
				disabled: !1,
				showIcon: !1,
				hideSize: !1,
				showRemoveButton: !0,
				maxFileSizeBytes: 1 / 0,
				icon: null
			});
			let y = v
		},
		603236: function(e, t, n) {
			"use strict";
			n.d(t, {
				I: () => S,
				S: () => N
			}), n(997841);
			var i = n(255367),
				l = n(73800),
				r = n(120356),
				s = n.n(r),
				a = n(533800),
				o = n(442837),
				c = n(755721),
				d = n(481060),
				u = n(484614),
				h = n(914010),
				m = n(246946),
				g = n(626135),
				p = n(630388),
				f = n(971130),
				x = n(530436),
				j = n(245335),
				b = n(981631),
				v = n(388032),
				y = n(821022),
				C = n(20493);
			let N = o.ZP.connectStores([m.Z], () => ({
					hideValue: m.Z.hideInstantInvites
				}))(e => {
					let {
						value: t,
						autoFocus: n,
						hideValue: l,
						onCopy: r,
						disabled: s
					} = e;
					return (0, i.jsx)(u.Z, {
						value: t,
						hideMessage: l ? v.intl.string(v.t["6HzNgY"]) : null,
						buttonColor: c.zx.Colors.BRAND,
						onCopy: r,
						autoFocus: n,
						disabled: s
					})
				}),
				S = e => {
					let {
						guild: t,
						noInvitesAvailable: n,
						showFriends: r,
						onClose: o,
						modalState: c,
						isApplicationBypassToggleEnabled: u,
						setInviteFlags: m,
						copyValue: S,
						changePage: O,
						inviteChannel: E,
						source: T,
						code: w,
						guildScheduledEvent: Z,
						disabled: R,
						application: I
					} = e, {
						maxAge: _,
						maxUses: P,
						networkError: A,
						showVanityURL: L,
						flags: D
					} = c, M = l.useCallback(() => {
						g.default.track(b.rMx.COPY_INSTANT_INVITE, {
							server: h.Z.getGuildId(),
							channel: null == E ? void 0 : E.id,
							channel_type: null == E ? void 0 : E.type,
							location: T,
							code: w,
							guild_scheduled_event_id: null == Z ? void 0 : Z.id,
							application_id: null == I ? void 0 : I.id
						})
					}, [null == I ? void 0 : I.id, E, T, w, Z]);
					return (0, i.jsxs)(i.Fragment, {
						children: [(0, i.jsx)(N, {
							value: S,
							autoFocus: r,
							onCopy: M,
							disabled: R
						}), u && (0, i.jsxs)(i.Fragment, {
							children: [(0, i.jsx)("div", {
								className: y.divider
							}), (0, i.jsx)(d.j7V, {
								className: y.toggle,
								value: (0, p.yE)(D, a.$.IS_APPLICATION_BYPASS),
								onChange: e => m((0, p.mB)(D, a.$.IS_APPLICATION_BYPASS, e)),
								disabled: R,
								hideBorder: !0,
								children: (0, i.jsxs)("div", {
									className: y.formText,
									children: [(0, i.jsx)(d.Text, {
										variant: "text-md/semibold",
										children: v.intl.string(v.t["1i1bUl"])
									}), (0, i.jsx)(d.ua7, {
										text: v.intl.string(v.t["jvd/LC"]),
										children: e => (0, i.jsx)(d.d3s, function(e) {
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
										}({
											size: "xs",
											color: "currentColor"
										}, e))
									})]
								})
							})]
						}), n || L ? null : (0, i.jsxs)(d.Text, {
							variant: "text-xs/normal",
							className: s()(C.marginTop8, y.footerText),
							children: [(0, f.Vg)(_, P), " ", r ? (0, i.jsx)(d.eee, {
								onClick: () => O(j.RV.SETTINGS),
								children: v.intl.string(v.t.VNe8Pz)
							}) : null]
						}), !n && r && L ? (0, i.jsxs)(d.Text, {
							variant: "text-xs/normal",
							className: s()(C.marginTop8, y.footerText),
							children: [v.intl.string(v.t["0M2U9/"]), " "]
						}) : null, null != A ? (0, i.jsx)(x.W, {
							guild: t,
							error: A,
							onClose: o
						}) : null]
					})
				}
		},
		530436: function(e, t, n) {
			"use strict";
			n.d(t, {
				W: () => h
			});
			var i = n(255367),
				l = n(73800),
				r = n(481060),
				s = n(479531),
				a = n(434404),
				o = n(496675),
				c = n(981631),
				d = n(388032),
				u = n(821022);

			function h(e) {
				let {
					guild: t,
					error: n,
					onClose: h
				} = e, m = t.id, g = l.useCallback(() => {
					h(), a.Z.open(m, c.pNK.INVITES)
				}, [m, h]), p = l.useCallback(e => (0, i.jsx)(r.P3F, {
					className: u.errorLink,
					onClick: g,
					children: (0, i.jsx)(r.Text, {
						variant: "text-xs/normal",
						color: "text-link",
						tag: "span",
						children: e
					})
				}), [g]), f = l.useCallback(e => (0, i.jsx)(r.eee, {
					href: c.EYA.INVITES_HELP,
					target: "_blank",
					children: (0, i.jsx)(r.Text, {
						variant: "text-xs/normal",
						color: "text-link",
						tag: "span",
						children: e
					})
				}), []), x = n instanceof s.Z ? n.code !== c.evJ.TOO_MANY_INVITES ? n.getAnyErrorMessage() : o.Z.can(c.Plq.MANAGE_GUILD, t) ? d.intl.format(d.t["H/RUY2"], {
					inviteListHook: p,
					inviteHelpHook: f
				}) : d.intl.string(d.t["/FxH6O"]) : "message" in n ? n.message : d.intl.string(d.t.eAn6z8);
				return (0, i.jsx)(r.Text, {
					className: u.errorMessage,
					variant: "text-xs/normal",
					color: "text-danger",
					children: x
				})
			}
		},
		747212: function(e, t, n) {
			"use strict";
			n.d(t, {
				Z: () => o
			});
			var i = n(255367);
			n(73800);
			var l = n(481060),
				r = n(968437),
				s = n(388032),
				a = n(830655);
			let o = e => {
				let {
					autoArchiveDuration: t,
					onChange: n,
					isDisabled: o
				} = e, c = (0, r.nt)();
				return (0, i.jsx)(l.hjN, {
					title: s.intl.string(s.t.FGjMZW),
					className: a.formSection,
					children: (0, i.jsx)(l.VcW, {
						isDisabled: o,
						options: c,
						value: t,
						onChange: n,
						optionClassName: a.dropdownOption
					})
				})
			}
		},
		903386: function(e, t, n) {
			"use strict";
			n.d(t, {
				Z: () => l
			});
			var i = n(255367);

			function l(e) {
				let {
					width: t = 18,
					height: n = 18,
					color: l = "currentColor",
					foreground: r,
					background: s,
					className: a
				} = e;
				return (0, i.jsx)("svg", {
					width: t,
					height: n,
					className: a,
					viewBox: "0 0 18 18",
					children: (0, i.jsxs)("g", {
						stroke: "none",
						strokeWidth: "1",
						fill: "none",
						fillRule: "evenodd",
						children: [(0, i.jsx)("polygon", {
							points: "0 0 18 0 18 18 0 18"
						}), (0, i.jsx)("path", {
							d: "M2.25,9 C2.25,10.6575 2.9325,12.15 4.02,13.23 L2.25,15 L6.75,15 L6.75,10.5 L5.07,12.18 C4.26,11.3625 3.75,10.245 3.75,9 C3.75,7.0425 5.0025,5.3775 6.75,4.7625 L6.75,3.195 C4.1625,3.8625 2.25,6.2025 2.25,9 Z M15.75,3 L11.25,3 L11.25,7.5 L12.93,5.82 C13.74,6.6375 14.25,7.755 14.25,9 C14.25,10.9575 12.9975,12.6225 11.25,13.2375 L11.25,14.805 C13.8375,14.1375 15.75,11.7975 15.75,9 C15.75,7.3425 15.0675,5.85 13.98,4.77 L15.75,3 Z",
							fillOpacity: "0.3",
							fill: l,
							fillRule: "nonzero",
							className: s
						}), (0, i.jsx)("path", {
							d: "M8.25,12.75 L8.25,11.25 L9.75,11.25 L9.75,12.75 L8.25,12.75 Z M8.25,9.75 L8.25,5.25 L9.75,5.25 L9.75,9.75 L8.25,9.75 Z",
							fill: l,
							className: r
						})]
					})
				})
			}
			n(73800)
		},
		129724: function(e, t, n) {
			"use strict";
			n.d(t, {
				A: () => s
			});
			var i = n(913527),
				l = n.n(i),
				r = n(388032);

			function s(e) {
				let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1],
					n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : r.intl.string(r.t["Yl1D8/"]),
					i = l().duration(e, "seconds");
				return i.days() > 0 ? r.intl.formatToPlainString(t ? r.t.GBLpQ0 : r.t.k2UNz8, {
					days: i.days()
				}) : i.hours() > 0 ? r.intl.formatToPlainString(t ? r.t.rhY1Rk : r.t.xCjYxM, {
					hours: i.hours()
				}) : i.minutes() > 0 ? r.intl.formatToPlainString(t ? r.t["XIGt+f"] : r.t.iXLF9f, {
					minutes: i.minutes()
				}) : e > 0 ? r.intl.formatToPlainString(t ? r.t.pyvjRk : r.t.geSp4O, {
					seconds: i.seconds()
				}) : t ? r.intl.string(r.t["Yl1D8/"]) : n
			}
		},
		189173: function(e, t, n) {
			"use strict";
			e.exports = {
				role: "role_f07e3e",
				roleOverflow: "roleOverflow_f07e3e",
				roleContent: "roleContent_f07e3e",
				roleInner: "roleInner_f07e3e",
				open: "open_f07e3e",
				roleDot: "roleDot_f07e3e",
				roleCircle: "roleCircle_f07e3e",
				lock: "lock_f07e3e",
				dragged: "dragged_f07e3e"
			}
		},
		92304: function(e, t, n) {
			"use strict";
			e.exports = {
				container: "container_d5ae15",
				sectionTag: "sectionTag_d5ae15",
				headerText: "headerText_d5ae15",
				input: "input_d5ae15",
				header: "header_d5ae15",
				autocompleteShadow: "autocompleteShadow_d5ae15",
				autocompleteArrowWrapper: "autocompleteArrowWrapper_d5ae15",
				autocompleteArrow: "autocompleteArrow_d5ae15",
				autocompleteHeaderBackground: "autocompleteHeaderBackground_d5ae15",
				autocompleteScroller: "autocompleteScroller_d5ae15",
				empty: "empty_d5ae15",
				section: "section_d5ae15",
				row: "row_d5ae15",
				rowInner: "rowInner_d5ae15",
				selected: "selected_d5ae15",
				noResultsHeader: "noResultsHeader_d5ae15",
				positionBottom: "positionBottom_d5ae15",
				positionTop: "positionTop_d5ae15"
			}
		},
		241756: function(e, t, n) {
			"use strict";
			e.exports = {
				advancedModeDivider: "advancedModeDivider__4914c",
				advancedTitle: "advancedTitle__4914c",
				titleCaret: "titleCaret__4914c"
			}
		},
		690550: function(e, t, n) {
			"use strict";
			e.exports = {
				settingCard: "settingCard__1a4ef",
				active: "active__1a4ef",
				shield: "shield__1a4ef " + n(361585).desaturateUserColors,
				cardIcon: "cardIcon__1a4ef",
				cardFolder: "cardFolder__1a4ef",
				adminWarning: "adminWarning__1a4ef",
				folderHeader: "folderHeader__1a4ef",
				folderTitle: "folderTitle__1a4ef",
				sectionTitle: "sectionTitle__1a4ef",
				roleMemberList: "roleMemberList__1a4ef",
				divider: "divider__1a4ef",
				memberRow: "memberRow__1a4ef",
				rowHeight: "rowHeight__1a4ef",
				rowLabel: "rowLabel__1a4ef",
				rowBotTag: "rowBotTag__1a4ef",
				rowLabelSubText: "rowLabelSubText__1a4ef",
				removeIconContainer: "removeIconContainer__1a4ef",
				removeIcon: "removeIcon__1a4ef",
				disabledRemoveIcon: "disabledRemoveIcon__1a4ef"
			}
		},
		332067: function(e, t, n) {
			"use strict";
			e.exports = {
				cardContent: "cardContent_f62fce",
				cardDescription: "cardDescription_f62fce"
			}
		},
		427256: function(e, t, n) {
			"use strict";
			e.exports = {
				card: "card_b651ff",
				label: "label_b651ff"
			}
		},
		511740: function(e, t, n) {
			"use strict";
			e.exports = {
				category: "category__3ddc0",
				channelIcon: "channelIcon__3ddc0"
			}
		},
		194512: function(e, t, n) {
			"use strict";
			e.exports = {
				formTitle: "formTitle__0511a",
				description: "description__0511a",
				topic: "topic__0511a",
				topicCharacterCount: "topicCharacterCount__0511a",
				badgedItem: "badgedItem__0511a",
				twoColumnSettings: "twoColumnSettings__0511a",
				settingsLeft: "settingsLeft__0511a",
				settingsDefaultReaction: "settingsDefaultReaction__0511a",
				settingsDefaultView: "settingsDefaultView__0511a",
				buttonRow: "buttonRow__0511a",
				removeButton: "removeButton__0511a",
				defaultImageView: "defaultImageView__0511a",
				nameInput: "nameInput__0511a",
				emojiButton: "emojiButton__0511a",
				nameInputWrapperWithEmojiPicker: "nameInputWrapperWithEmojiPicker__0511a",
				nameInputInnerWithEmojiPicker: "nameInputInnerWithEmojiPicker__0511a"
			}
		},
		483112: function(e, t, n) {
			"use strict";
			e.exports = {
				container: "container__0ab2c",
				sidebarHeader: "sidebarHeader__0ab2c",
				layoutStyle: "layoutStyle__0ab2c",
				inline: "inline__0ab2c",
				xsmallAvatar: "xsmallAvatar__0ab2c",
				sidebarHeaderDefault: "sidebarHeaderDefault__0ab2c sidebarHeader__0ab2c",
				username: "username__0ab2c",
				userRowAvatar: "userRowAvatar__0ab2c",
				userRowSubText: "userRowSubText__0ab2c",
				userRowText: "userRowText__0ab2c",
				userRowSubAvatar: "userRowSubAvatar__0ab2c",
				permissionsForm: "permissionsForm__0ab2c"
			}
		},
		628961: function(e, t, n) {
			"use strict";
			e.exports = {
				tags: "tags__3f6df",
				addTags: "addTags__3f6df",
				disabled: "disabled__3f6df",
				container: "container__3f6df",
				dropIndicatorBefore: "dropIndicatorBefore__3f6df",
				dropIndicatorAfter: "dropIndicatorAfter__3f6df"
			}
		},
		939790: function(e, t, n) {
			"use strict";
			e.exports = {
				container: "container_db5301",
				body: "body_db5301",
				footer: "footer_db5301",
				placeholderLines: "placeholderLines_db5301",
				placeholderLine: "placeholderLine_db5301",
				placeholderMedia: "placeholderMedia_db5301",
				reaction: "reaction_db5301",
				reactionEmote: "reactionEmote_db5301",
				dot: "dot_db5301"
			}
		},
		695294: function(e, t, n) {
			"use strict";
			n.r(e.exports = {
				iconButton: "iconButton_aa66d3",
				iconButtonDefault: "iconButtonDefault_aa66d3 iconButton_aa66d3",
				iconButtonStatic: "iconButtonStatic_aa66d3 iconButton_aa66d3",
				large: "large_aa66d3",
				medium: "medium_aa66d3",
				small: "small_aa66d3",
				xsmall: "xsmall_aa66d3"
			})
		},
		830655: function(e, t, n) {
			"use strict";
			e.exports = {
				formSection: "formSection__78ebf",
				dropdownOption: "dropdownOption__78ebf"
			}
		}
	}
]);
//# sourceMappingURL=00e74d1c319444b2.js.map