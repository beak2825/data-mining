"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
	["6850"], {
		48210: function(e, t, n) {
			n.d(t, {
				Z: () => o
			});
			var r = n(544891),
				l = n(981631);
			let o = {
				async updateEstimate(e) {
					let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 7,
						n = arguments.length > 2 ? arguments[2] : void 0;
					return (await r.tn.get({
						url: l.ANM.GUILD_PRUNE(e),
						query: {
							days: t,
							include_roles: n
						},
						oldFormErrors: !0,
						rejectWithError: !1
					})).body.pruned
				},
				prune: (e, t, n) => r.tn.post({
					url: l.ANM.GUILD_PRUNE(e),
					body: {
						days: t,
						compute_prune_count: !1,
						include_roles: n
					},
					oldFormErrors: !0,
					rejectWithError: !1
				})
			}
		},
		102560: function(e, t, n) {
			n.d(t, {
				Z: () => p
			}), n(388685);
			var r = n(255367),
				l = n(73800),
				o = n(392711),
				i = n.n(o),
				a = n(442837),
				s = n(481060),
				c = n(48210),
				u = n(605436),
				d = n(485386),
				C = n(496675),
				m = n(388032),
				b = n(201367);
			let p = e => {
				let {
					guild: t,
					transitionState: n,
					onClose: o
				} = e, [p, f] = l.useState(7), [h, j] = l.useState(null), [g, x] = l.useState([]), v = l.useCallback(async () => {
					j(null), j(await c.Z.updateEstimate(t.id, p, g))
				}, [p, t.id, g]);
				l.useEffect(() => {
					v()
				}, [v]);
				let y = (0, a.Wu)([C.Z, d.Z], () => {
					let e = C.Z.getHighestRole(t);
					return i()(d.Z.getRoles(t.id)).sortBy(e => e.position).filter(e => !(0, u.pM)(t.id, e.id)).filter(n => C.Z.isRoleHigher(t, e, n)).value().map(e => {
						let {
							id: t,
							name: n
						} = e;
						return {
							label: n,
							value: t
						}
					})
				}, [t]);
				return (0, r.jsxs)(s.Y0X, {
					transitionState: n,
					parentComponent: "PruneGuild",
					children: [(0, r.jsx)(s.xBx, {
						separator: !1,
						children: (0, r.jsxs)(s.X6q, {
							variant: "heading-lg/semibold",
							children: [m.intl.string(m.t.zbyz7u), "—", null != t ? t.name : ""]
						})
					}), (0, r.jsxs)("div", {
						className: b.content,
						children: [(0, r.jsx)(s.xJW, {
							title: m.intl.string(m.t.YccTvL),
							children: (0, r.jsx)(s.FXm, {
								value: p,
								options: [{
									name: m.intl.formatToPlainString(m.t.FM1dHR, {
										days: 7
									}),
									value: 7
								}, {
									name: m.intl.formatToPlainString(m.t.FM1dHR, {
										days: 30
									}),
									value: 30
								}],
								onChange: e => {
									let {
										value: t
									} = e;
									f(t)
								},
								className: b.spacing
							})
						}), (0, r.jsx)(s.xJW, {
							title: m.intl.string(m.t.buoe19),
							children: (0, r.jsx)(s.zJl, {
								className: b.scroller,
								children: (0, r.jsx)(s.VcW, {
									maxVisibleItems: 10,
									multi: !0,
									value: g,
									onChange: e => x(e),
									options: y
								})
							})
						}), (0, r.jsx)(s.R94, {
							type: s.R94.Types.DESCRIPTION,
							className: b.spacing,
							children: g.length > 0 ? m.intl.format(m.t["5WxHHh"], {
								members: h,
								days: p
							}) : m.intl.format(m.t.f13az8, {
								members: h,
								days: p
							})
						})]
					}), (0, r.jsx)(s.mzw, {
						children: (0, r.jsxs)(s.hE2, {
							direction: "horizontal-reverse",
							children: [(0, r.jsx)(s.zxk, {
								variant: "primary",
								text: m.intl.string(m.t["2mIlKS"]),
								onClick: () => {
									c.Z.prune(t.id, p, g), o()
								}
							}), (0, r.jsx)(s.zxk, {
								variant: "secondary",
								text: m.intl.string(m.t["ETE/oK"]),
								onClick: o
							})]
						})
					})]
				})
			}
		},
		512508: function(e, t, n) {
			n.d(t, {
				PM: () => M,
				WG: () => P,
				ZP: () => k
			}), n(388685), n(781311);
			var r = n(255367),
				l = n(73800),
				o = n(120356),
				i = n.n(o),
				a = n(658722),
				s = n.n(a),
				c = n(442837),
				u = n(481060),
				d = n(794433),
				C = n(933557),
				m = n(471445),
				b = n(91218),
				p = n(313201),
				f = n(518738),
				h = n(884902),
				j = n(439170),
				g = n(592125),
				x = n(485386),
				v = n(699516),
				y = n(594174),
				O = n(388032),
				_ = n(962923);

			function H(e) {
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

			function N(e) {
				var t = function(e, t) {
					if ("object" !== S(e) || null === e) return e;
					var n = e[Symbol.toPrimitive];
					if (void 0 !== n) {
						var r = n.call(e, t || "default");
						if ("object" !== S(r)) return r;
						throw TypeError("@@toPrimitive must return a primitive value.")
					}
					return ("string" === t ? String : Number)(e)
				}(e, "string");
				return "symbol" === S(t) ? t : String(t)
			}

			function S(e) {
				return e && "undefined" != typeof Symbol && e.constructor === Symbol ? "symbol" : typeof e
			}
			let D = (0, p.hQ)(),
				Z = (0, p.hQ)(),
				R = "text-sm/medium";

			function L(e) {
				return 1 === e.type
			}

			function I(e) {
				return 0 === e.type
			}

			function P(e) {
				let t = "".concat(!e.name.includes(j.CR) ? "@" : "").concat(e.name);
				return {
					tag: {
						type: d.F.ROLE,
						label: t
					},
					row: {
						id: e.id,
						display: t,
						type: 1,
						record: e
					}
				}
			}

			function M(e) {
				let t = (0, C.F6)(e, y.default, v.Z);
				return {
					tag: {
						type: d.F.CHANNEL,
						label: t
					},
					row: {
						id: e.id,
						display: t,
						type: 0,
						record: e
					}
				}
			}
			let V = l.memo(function(e) {
				var t;
				let {
					row: n,
					guildId: l,
					className: o
				} = e, {
					id: a,
					name: s
				} = n.record, d = (0, f.p9)({
					guildId: l,
					roleId: a,
					size: 16
				}), C = (0, c.e7)([x.Z], () => x.Z.getRole(l, a)), m = s.includes(j.CR) ? "" : "@", p = (0, u.dQu)(u.TVs.unsafe_rawColors.PRIMARY_300).hsl(), g = null != (t = null == C ? void 0 : C.colorString) ? t : p, v = (0, h._f)(l, C, null == C ? void 0 : C.colorStrings);
				return (0, r.jsxs)("div", {
					className: i()(_.rowLabel, _.roleTagContainer, o),
					children: [(0, r.jsx)(u.FhE, {
						className: _.__invalid_roleDot,
						color: g,
						colors: v,
						background: !1,
						tooltip: !1
					}), null != d ? (0, r.jsx)(b.Z, w(H({
						className: _.roleTagIcon
					}, d), {
						enableTooltip: !1
					})) : m, (0, r.jsx)(u.Text, {
						variant: R,
						className: _.roleTagLabel,
						children: s
					})]
				})
			});

			function E(e) {
				let {
					channel: t,
					row: n,
					className: l
				} = e, o = null != t.parent_id, a = (0, m.KS)(t);
				return (0, r.jsxs)("div", {
					className: i()(_.rowLabel, _.channelLabel, {
						[_.hasParent]: o
					}, l),
					children: [null != a && (0, r.jsx)(a, {
						size: "xs",
						color: "currentColor",
						className: _.channelIcon
					}), (0, r.jsx)(u.Text, {
						variant: t.isCategory() ? "eyebrow" : R,
						children: n.display
					})]
				})
			}

			function T(e, t, n) {
				return L(e) ? (0, r.jsx)(V, {
					row: e,
					guildId: t,
					className: n
				}, e.record.id) : I(e) ? (0, r.jsx)(E, {
					row: e,
					channel: e.record,
					className: n
				}, e.record.id) : null
			}

			function k(e) {
				let {
					guildId: t,
					roleRows: n = [],
					channelRows: o = [],
					selectedChannelIds: a = new Set,
					selectedRoleIds: C = new Set,
					onChange: m,
					placeholder: b,
					helperText: p,
					className: f
				} = e, h = (0, c.e7)([x.Z], () => x.Z.getRoles(t)), j = l.useMemo(() => (function(e, t, n) {
					if (null == e) return {};
					let r = {};
					return e.forEach(e => {
						let t = g.Z.getChannel(e);
						null != t && (r[e] = M(t))
					}), t.forEach(e => {
						e in n && (r[e] = P(n[e]))
					}), r
				})(a, C, h), [a, C, h]), v = l.useMemo(() => Object.keys(j), [j]), [y, S] = l.useState(""), [R, V] = l.useState(!1), [E, k] = l.useState(!1), [A, B] = l.useState(!1), U = l.useRef(null), {
					sections: F,
					sectionCounts: z
				} = l.useMemo(() => {
					let e = "" !== y ? o.filter(e => s()(y, e.display.toLocaleLowerCase())) : o,
						t = "" !== y ? n.filter(e => s()(y, e.display.toLocaleLowerCase())) : n,
						r = [],
						l = [];
					return r[0] = e, l[0] = e.length, r[1] = t, l[1] = t.length, {
						sections: r,
						sectionCounts: l
					}
				}, [y, o, n]), q = l.useCallback(e => {
					let t = Object.values(e),
						n = t.filter(e => {
							let {
								row: t
							} = e;
							return I(t)
						}).map(e => e.row.record.id),
						r = t.filter(e => {
							let {
								row: t
							} = e;
							return L(t)
						}).map(e => e.row.record.id);
					m(new Set(n), new Set(r))
				}, [m]), G = () => {
					V(!1), k(!1)
				};
				l.useEffect(() => {
					let e = setTimeout(() => {
						B(R || E)
					}, 32);
					return () => {
						clearTimeout(e)
					}
				}, [R, E]);
				let Y = (e, t, n) => {
						n.stopPropagation(), n.preventDefault(), 2 === t ? V(e) : (1 === t || V(e), k(e))
					},
					W = l.useCallback(e => {
						let t = H({}, j);
						I(e) ? t[e.id] = M(e.record) : L(e) && (t[e.id] = P(e.record)), q(t), S(""), G(), setTimeout(() => {
							var e;
							let t = null == (e = U.current) ? void 0 : e.containerRef.current,
								n = null == t ? void 0 : t.firstChild;
							null != n && n.scrollTo({
								top: n.scrollHeight,
								behavior: "smooth"
							})
						}, 16)
					}, [q, j]),
					X = l.useCallback(e => {
						let {
							section: n,
							row: l
						} = e, o = F[n][l];
						return (0, r.jsx)(u.P3F, {
							className: i()(_.selectableSearchRow, _.rowHeight),
							onClick: e => {
								e.stopPropagation(), W(o)
							},
							children: (0, r.jsx)("div", {
								className: _.rowContainer,
								children: T(o, t, _.searchRowLabel)
							})
						}, o.id)
					}, [t, W, F]),
					J = l.useMemo(() => v.map(e => {
						var n;
						return n = j[e], w(H({}, n.tag), {
							label: T(n.row, t, _.noIndent)
						})
					}), [j, v, t]);
				return (0, r.jsxs)("div", {
					className: i()(_.searchContainer, f),
					children: [(0, r.jsxs)("div", {
						className: _.searchBox,
						children: [(0, r.jsx)(d.Z, {
							tags: J,
							maxHeight: 98,
							size: d.Z.Sizes.MEDIUM,
							query: y,
							ref: U,
							onRemoveTag: e => {
								let t = v[e],
									{
										[t]: n
									} = j;
								q(function(e, t) {
									if (null == e) return {};
									var n, r, l = function(e, t) {
										if (null == e) return {};
										var n, r, l = {},
											o = Object.keys(e);
										for (r = 0; r < o.length; r++) n = o[r], t.indexOf(n) >= 0 || (l[n] = e[n]);
										return l
									}(e, t);
									if (Object.getOwnPropertySymbols) {
										var o = Object.getOwnPropertySymbols(e);
										for (r = 0; r < o.length; r++) n = o[r], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (l[n] = e[n])
									}
									return l
								}(j, [t].map(N))), S(""), G()
							},
							onQueryChange: e => {
								S(e.trim().toLocaleLowerCase())
							},
							placeholder: null != b ? b : O.intl.string(O.t.uqHLzc),
							sections: [v.length],
							inputProps: {
								"aria-labelledby": D,
								"aria-controls": Z,
								"aria-expanded": A,
								onFocus: e => Y(!0, 2, e),
								onBlur: e => Y(!1, 2, e)
							}
						}), A && (0, r.jsx)("div", {
							className: _.resultsListParent,
							onFocus: e => Y(!0, 1, e),
							onBlur: e => Y(!1, 1, e),
							tabIndex: -1,
							children: (0, r.jsx)(u._2F, {
								className: _.resultsListContainer,
								innerClassName: _.resultsList,
								sections: z,
								renderRow: X,
								rowHeight: 34,
								renderSection: e => {
									let {
										section: t
									} = e;
									return 0 === t ? (0, r.jsx)(u.vwX, {
										tag: "h5",
										className: i()(_.sectionTitle, _.sectionHeight),
										children: O.intl.string(O.t.OGiMXF)
									}, O.intl.string(O.t.OGiMXF)) : 1 === t ? (0, r.jsx)(u.vwX, {
										tag: "h5",
										className: i()(_.sectionTitle, _.sectionHeight),
										children: O.intl.string(O.t.LPJmLy)
									}, O.intl.string(O.t.LPJmLy)) : null
								},
								renderFooter: e => {
									let {
										section: t
									} = e;
									return 0 === t ? 0 === z[1] && z[0] > 0 ? null : (0, r.jsx)("div", {
										className: _.sectionFooter,
										children: (0, r.jsx)(u.$i$, {})
									}) : null
								},
								sectionHeight: 24,
								footerHeight: e => 0 === e ? 0 === z[1] && z[0] > 0 ? 0 : 32 : 0,
								role: void 0,
								innerRole: "listbox",
								innerId: Z,
								innerAriaOrientation: "vertical"
							})
						})]
					}), null != p && (0, r.jsx)(u.Text, {
						variant: "text-xs/normal",
						color: "text-muted",
						className: _.helperText,
						children: p
					})]
				})
			}
		},
		563115: function(e, t, n) {
			n.d(t, {
				Z: () => s,
				h: () => a
			});
			var r = n(255367);
			n(73800);
			var l = n(442837),
				o = n(485386),
				i = n(512508);

			function a(e, t, n, r) {
				return (0, l.Wu)([o.Z], () => Object.values(o.Z.getRoles(e)).filter(e => !t.has(e.id)).filter(t => !n || t.id !== e).filter(null != r ? r : () => !0).map(e => (0, i.WG)(e).row), [n, e, r, t])
			}

			function s(e) {
				let {
					guildId: t,
					selectedRoleIds: n,
					onChange: l,
					placeholder: o,
					disableEveryoneRole: s,
					helperText: c,
					className: u,
					selectableRoleFilter: d
				} = e, C = a(t, n, s, d);
				return (0, r.jsx)(i.ZP, {
					roleRows: C,
					guildId: t,
					selectedRoleIds: n,
					onChange: (e, t) => l(t),
					placeholder: o,
					helperText: c,
					className: u
				})
			}
		},
		571728: function(e, t, n) {
			n.d(t, {
				A: () => o
			});
			var r = n(442837),
				l = n(826581);

			function o(e) {
				let {
					guildId: t
				} = e;
				return (0, r.e7)([l.Z], () => null != t ? l.Z.getSubmittedGuildJoinRequestTotal(t) : void 0, [t])
			}
		},
		489813: function(e, t, n) {
			n.d(t, {
				CA: () => u,
				Ih: () => d,
				PU: () => C,
				hK: () => c
			});
			var r = n(255367);
			n(73800);
			var l = n(120356),
				o = n.n(l),
				i = n(692547),
				a = n(481060),
				s = n(396561);

			function c(e) {
				let {
					title: t,
					children: n
				} = e;
				return (0, r.jsxs)("div", {
					className: s.questionContainer,
					children: [(0, r.jsx)(a.Text, {
						className: s.questionTitle,
						variant: "text-md/normal",
						color: "header-primary",
						children: t
					}), n]
				})
			}

			function u(e) {
				let {
					title: t,
					children: n
				} = e;
				return (0, r.jsxs)("div", {
					className: s.disabledQuestionContainer,
					children: [(0, r.jsx)(a.Text, {
						className: s.questionTitle,
						variant: "text-sm/medium",
						color: "text-muted",
						children: t
					}), n]
				})
			}

			function d(e) {
				let {
					icon: t,
					text: n,
					meetsRequirement: l
				} = e;
				return (0, r.jsxs)("div", {
					className: s.requirementContainer,
					children: [(0, r.jsx)(t, {
						className: s.requirementIcon,
						height: 16,
						width: 16,
						size: "custom",
						color: "currentColor"
					}), (0, r.jsx)(a.Text, {
						className: s.requirementText,
						variant: "text-sm/medium",
						children: n
					}), l ? (0, r.jsx)(a.owK, {
						size: "sm",
						color: "currentColor",
						className: s.requirementSuccess,
						secondaryColor: i.Z.colors.WHITE.css
					}) : (0, r.jsx)(a.k$p, {
						size: "sm",
						color: "currentColor",
						className: s.requirementFailure,
						secondaryColor: i.Z.colors.WHITE.css
					})]
				})
			}

			function C(e) {
				let {
					icon: t,
					text: n,
					footnote: l,
					meetsRequirement: c,
					children: u,
					className: d
				} = e;
				return (0, r.jsxs)(r.Fragment, {
					children: [(0, r.jsxs)("div", {
						className: o()(s.requirementContainer, d),
						children: [(0, r.jsx)(t, {
							className: s.requirementIcon,
							height: 20,
							width: 20,
							size: "custom",
							color: "currentColor"
						}), (0, r.jsx)(a.Text, {
							className: s.requirementText,
							variant: "text-md/normal",
							children: n
						}), c ? (0, r.jsx)(a.owK, {
							size: "md",
							color: "currentColor",
							className: s.requirementSuccess,
							secondaryColor: i.Z.colors.WHITE.css
						}) : u]
					}), null != l && (0, r.jsx)(a.Text, {
						color: "header-secondary",
						className: s.footnote,
						variant: "text-xs/normal",
						children: l
					})]
				})
			}
		},
		186078: function(e, t, n) {
			n.d(t, {
				BO: () => d,
				QH: () => C,
				sp: () => m
			});
			var r = n(255367),
				l = n(73800),
				o = n(120356),
				i = n.n(o),
				a = n(481060),
				s = n(489813),
				c = n(707592),
				u = n(667084);

			function d(e) {
				let {
					disabled: t,
					field: n,
					value: o,
					radioItemClassName: s,
					radioItemIconClassName: c,
					onChange: d
				} = e, {
					choices: C
				} = n, m = l.useMemo(() => C.map((e, t) => ({
					name: e,
					value: t,
					radioItemIconClassName: i()(u.multipleChoiceIcon, c),
					radioBarClassName: u.multipleChoiceItem
				})), [C, c]);
				return (0, r.jsx)(a.FXm, {
					radioPosition: "right",
					disabled: t,
					options: m,
					value: o,
					onChange: d,
					radioItemClassName: s,
					itemTitleClassName: u.multipleChoiceTitle
				})
			}

			function C(e) {
				let {
					formField: t
				} = e, n = null != t.response ? t.choices[t.response] : "";
				return (0, r.jsx)(s.CA, {
					title: t.label,
					children: (0, r.jsx)(c.Gi, {
						className: u.disabledFieldBackground,
						value: n,
						disabled: !0
					})
				})
			}

			function m(e) {
				let {
					formField: t,
					onChange: n
				} = e;
				return (0, r.jsx)(s.hK, {
					title: t.label,
					children: (0, r.jsx)(d, {
						field: t,
						value: t.response,
						onChange: n
					})
				})
			}
		},
		73880: function(e, t, n) {
			n.d(t, {
				Q8: () => d,
				jn: () => C,
				lX: () => m
			});
			var r = n(255367);
			n(73800);
			var l = n(120356),
				o = n.n(l),
				i = n(481060),
				a = n(489813),
				s = n(592286),
				c = n(388032),
				u = n(667084);

			function d(e) {
				let {
					value: t,
					placeholder: n,
					onChange: l,
					disabled: a,
					className: c,
					autofocus: d
				} = e;
				return (0, r.jsx)(i.Kx8, {
					className: o()(u.paragraphFieldBody, c),
					maxLength: s.RS,
					value: null != t ? t : "",
					placeholder: null != n ? n : "",
					onChange: l,
					disabled: a,
					autoFocus: d,
					autosize: !0,
					showRemainingCharacterCount: !a
				})
			}

			function C(e) {
				let {
					formField: t
				} = e;
				return (0, r.jsx)(a.CA, {
					title: t.label,
					children: (0, r.jsx)(d, {
						className: u.disabledFieldBackground,
						value: t.response,
						disabled: !0
					})
				})
			}

			function m(e) {
				let {
					formField: t,
					autofocus: n,
					onChange: l
				} = e;
				return (0, r.jsx)(a.hK, {
					title: t.label,
					children: (0, r.jsx)(d, {
						value: t.response,
						onChange: l,
						autofocus: n,
						placeholder: c.intl.string(c.t["Sqn+Wl"])
					})
				})
			}
		},
		196345: function(e, t, n) {
			n.d(t, {
				EK: () => d,
				G0: () => C,
				QC: () => m,
				dd: () => b
			}), n(388685);
			var r = n(255367);
			n(73800);
			var l = n(120356),
				o = n.n(l),
				i = n(481060),
				a = n(454585),
				s = n(489813),
				c = n(388032),
				u = n(667084);

			function d(e) {
				let {
					terms: t,
					channelId: n,
					className: l
				} = e;
				return (0, r.jsx)("div", {
					className: o()(u.termsFieldBody, l),
					children: t.map((e, t) => (0, r.jsxs)("div", {
						className: u.termsRow,
						children: [(0, r.jsx)(i.Text, {
							variant: "text-md/normal",
							color: "text-muted",
							children: "".concat(t + 1, ".")
						}), (0, r.jsx)(i.Text, {
							variant: "text-md/normal",
							className: u.termsRowContent,
							children: a.Z.parseGuildVerificationFormRule(e, !0, {
								channelId: n
							})
						})]
					}, "term-".concat(t)))
				})
			}

			function C(e) {
				let {
					onChange: t,
					checked: n,
					disabled: l
				} = e;
				return (0, r.jsx)(i.XZJ, {
					size: 24,
					type: i.XZJ.Types.INVERTED,
					value: n,
					onChange: t,
					disabled: l,
					style: {
						borderWidth: 2
					},
					className: u.checkbox,
					children: (0, r.jsx)(i.Text, {
						variant: "text-md/normal",
						children: c.intl.string(c.t["2EXfGB"])
					})
				})
			}

			function m(e) {
				let {
					formField: t
				} = e;
				return (0, r.jsx)(s.Ih, {
					icon: i.snC,
					text: c.intl.string(c.t["2xbmoK"]),
					meetsRequirement: !!t.response
				})
			}
			let b = e => {
				let {
					channelId: t,
					formField: n,
					onChange: l
				} = e;
				return (0, r.jsxs)(s.hK, {
					title: c.intl.string(c.t.Q8OFNz),
					children: [(0, r.jsx)(d, {
						className: u.disabledFieldBackground,
						terms: n.values,
						channelId: t
					}), (0, r.jsx)(C, {
						onChange: l,
						checked: n.response
					})]
				})
			}
		},
		685244: function(e, t, n) {
			n.d(t, {
				Z: () => f
			}), n(388685);
			var r = n(255367),
				l = n(73800),
				o = n(498607),
				i = n.n(o),
				a = n(108542),
				s = n(748780),
				c = n(692547),
				u = n(481060),
				d = n(110924);

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

			function m(e, t) {
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
			let b = {
					duration: 100,
					easing: s.Z.Easing.inOut(s.Z.Easing.back()),
					clamp: !0
				},
				p = {
					duration: 2e3,
					easing: s.Z.Easing.quad,
					clamp: !0
				};

			function f(e) {
				var {
					value: t,
					children: n,
					equalityFn: o = i(),
					style: s
				} = e, f = function(e, t) {
					if (null == e) return {};
					var n, r, l = function(e, t) {
						if (null == e) return {};
						var n, r, l = {},
							o = Object.keys(e);
						for (r = 0; r < o.length; r++) n = o[r], t.indexOf(n) >= 0 || (l[n] = e[n]);
						return l
					}(e, t);
					if (Object.getOwnPropertySymbols) {
						var o = Object.getOwnPropertySymbols(e);
						for (r = 0; r < o.length; r++) n = o[r], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (l[n] = e[n])
					}
					return l
				}(e, ["value", "children", "equalityFn", "style"]);
				let h = (0, d.Z)(t),
					[{
						spring: j
					}, g] = (0, u.q_F)(() => ({
						spring: 0
					}), "animate-always"),
					x = (0, u.dQu)(c.Z.colors.BACKGROUND_BASE_LOW).hex(),
					v = (0, u.dQu)(c.Z.colors.CONTROL_BRAND_FOREGROUND).hex(),
					y = l.useCallback(() => {
						g({
							spring: 1,
							config: b
						}), g({
							spring: 0,
							config: p,
							delay: 300
						})
					}, [g]);
				l.useEffect(() => {
					null != t && null != h && (o(t, h) || y())
				}, [y, t, h, o]);
				let O = null == j ? void 0 : j.to({
						range: [0, 1],
						output: ["".concat(x, "00"), "".concat(v, "27")]
					}),
					_ = null != s ? m(C({}, s), {
						backgroundColor: O
					}) : {
						backgroundColor: O
					};
				return (0, r.jsx)(a.animated.tr, m(C({}, f), {
					style: _,
					children: n
				}))
			}
		},
		305473: function(e, t, n) {
			n.d(t, {
				Z: () => a
			});
			var r = n(255367);
			n(73800);
			var l = n(528011),
				o = n(533244),
				i = n(596482);

			function a(e) {
				let {
					guild: t
				} = e, {
					shouldShowIncidentActions: n,
					incidentData: a,
					isUnderLockdown: s
				} = (0, l.mI)(t.id), c = !1;
				return (null != a && (c = (0, o.i9)(a) && n), c || s) ? (0, r.jsx)(i.Z, {
					guild: t,
					incidentData: a,
					isUnderLockdown: s,
					isRaidDetected: c
				}) : null
			}
		},
		440857: function(e, t, n) {
			n.d(t, {
				Z: () => O
			}), n(388685);
			var r = n(255367),
				l = n(73800),
				o = n(692547),
				i = n(215569),
				a = n(180035),
				s = n(755721),
				c = n(481060),
				u = n(749210),
				d = n(852860),
				C = n(367907),
				m = n(314897),
				b = n(626135),
				p = n(910693),
				f = n(241559),
				h = n(256003),
				j = n(981631),
				g = n(388032),
				x = n(571031);

			function v(e) {
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

			function y(e, t) {
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

			function O(e) {
				let {
					guildId: t
				} = e, O = (0, f.xC)(t), {
					selectedUserIds: _,
					clearSelection: H
				} = (0, h.Z)(t), w = _.size > 0, N = async (e, t, n, r) => {
					try {
						let l = await u.Z.banMultipleUsers(e, t, n, r);
						(0, c.showToast)((0, c.createToast)(g.intl.string(g.t.AsCe5O), c.ToastType.SUCCESS)), b.default.track(j.rMx.BULK_MODERATION_ACTION_COMPLETED, y(v({}, (0, C.hH)(e)), {
							action_type: p.jQ.BAN,
							target_user_ids: [..._],
							mod_user_id: m.default.getId(),
							successful_user_ids: l.body.banned_users,
							location
						}))
					} catch (e) {
						(0, c.showToast)((0, c.createToast)(g.intl.string(g.t.mICAWV), c.ToastType.FAILURE))
					}
					H()
				}, S = l.useCallback(() => {
					H()
				}, [H]), D = (0, r.jsxs)("span", {
					className: x.messageContainer,
					children: [(0, r.jsx)(c.tBG, {
						size: "custom",
						width: 24,
						height: 24,
						color: (0, a.d)(o.Z.unsafe_rawColors.PRIMARY_500).hex()
					}), (0, r.jsx)(c.Text, {
						variant: "heading-md/bold",
						color: "text-default",
						children: g.intl.format(g.t.TstoSU, {
							count: _.size
						})
					}), (0, r.jsx)(s.zx, {
						color: s.zx.Colors.LINK,
						look: s.zx.Looks.LINK,
						onClick: S,
						className: x.clearButton,
						children: g.intl.string(g.t.yW6ZdH)
					})]
				}), Z = (0, r.jsxs)("span", {
					className: x.buttonContainer,
					children: [(0, r.jsx)(c.pgN, {
						size: "custom",
						color: "currentColor",
						width: 20,
						height: 20
					}), (0, r.jsx)(c.Text, {
						variant: "text-sm/semibold",
						color: "currentColor",
						children: g.intl.string(g.t["2a50fH"])
					})]
				});
				return O ? (0, r.jsx)(i.W, {
					component: "div",
					className: x.saveNoticeContainer,
					children: w && (0, r.jsx)(c.oXn, {
						children: (0, r.jsx)(d.Z, {
							onSave: () => {
								b.default.track(j.rMx.BULK_MODERATION_ACTION_STARTED, y(v({}, (0, C.hH)(t)), {
									action_type: p.jQ.BAN,
									target_user_ids: [..._],
									mod_user_id: m.default.getId(),
									location
								})), (0, c.ZDy)(async () => {
									let {
										default: e
									} = await n.e("4114").then(n.bind(n, 98746));
									return n => (0, r.jsx)(e, y(v({}, n), {
										guildId: t,
										canBulkBan: O,
										userIds: _,
										onBanMultiple: N
									}))
								})
							},
							onSaveText: Z,
							onSaveButtonColor: s.Tt.RED,
							message: D
						})
					})
				}) : null
			}
		},
		256003: function(e, t, n) {
			n.d(t, {
				Z: () => u
			}), n(388685);
			var r = n(94171),
				l = n(362383),
				o = n(731965);

			function i(e) {
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

			function a(e, t) {
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
			let s = (0, l.F)((e, t) => ({
					selectedUserIds: {},
					addUsers: (n, r) => {
						var l;
						let {
							selectedUserIds: s
						} = t(), c = new Set([...null != (l = s[n]) ? l : new Set, ...r]);
						(0, o.j)(() => {
							e({
								selectedUserIds: a(i({}, s), {
									[n]: c
								})
							})
						})
					},
					removeUser: (n, r) => {
						let {
							selectedUserIds: l
						} = t(), s = l[n];
						if (null == s) return;
						let c = [...s].filter(e => e !== r);
						(0, o.j)(() => {
							e({
								selectedUserIds: a(i({}, l), {
									[n]: new Set(c)
								})
							})
						})
					},
					clearSelection: n => {
						let {
							selectedUserIds: r
						} = t();
						null != r && (0, o.j)(() => {
							e({
								selectedUserIds: a(i({}, r), {
									[n]: new Set
								})
							})
						})
					}
				})),
				c = new Set;

			function u(e) {
				return s(t => {
					var n;
					return {
						selectedUserIds: null != (n = t.selectedUserIds[e]) ? n : c,
						addUsers: n => {
							t.addUsers(e, n)
						},
						removeUser: n => {
							t.removeUser(e, n)
						},
						clearSelection: () => {
							t.clearSelection(e)
						}
					}
				}, r.X)
			}
		},
		827657: function(e, t, n) {
			n.d(t, {
				Z: () => d
			});
			var r = n(255367),
				l = n(73800),
				o = n(481060),
				i = n(994463),
				a = n(472596),
				s = n(918192),
				c = n(388032),
				u = n(128863);

			function d(e) {
				let {
					searchState: t
				} = e, n = l.useMemo(() => ({
					[a.po.LOADING]: null,
					[a.po.SUCCESS_STILL_INDEXING]: {
						icon: (0, r.jsx)(i.Z, {}),
						message: c.intl.string(c.t.AXPbZm)
					},
					[a.po.SUCCESS_EMPTY]: {
						icon: (0, r.jsx)(s.Z, {}),
						message: c.intl.string(c.t["wdyR5+"])
					},
					[a.po.SUCCESS_FULL]: null
				}), [])[t];
				return null == n ? null : (0, r.jsxs)("div", {
					className: u.noResultsContainer,
					children: [(0, r.jsx)("div", {
						className: u.__invalid_noResultsIconContainer,
						children: n.icon
					}), (0, r.jsx)(o.Text, {
						variant: "text-md/normal",
						color: "text-muted",
						children: n.message
					})]
				})
			}
		},
		598948: function(e, t, n) {
			n.d(t, {
				Z: () => I
			}), n(388685);
			var r = n(255367),
				l = n(73800),
				o = n(120356),
				i = n.n(o),
				a = n(348327),
				s = n.n(a),
				c = n(399606),
				u = n(952265),
				d = n(481060),
				C = n(607070),
				m = n(906732),
				b = n(136015),
				p = n(506071),
				f = n(910693),
				h = n(893966),
				j = n(527379),
				g = n(827657),
				x = n(472596),
				v = n(201756),
				y = n(66747),
				O = n(852479),
				_ = n(420212),
				H = n(172796);
			let w = {
					transform: "translate3d(15%, 0, 0)",
					opacity: .3
				},
				N = {
					transform: "translate3d(5%, 0, 0)",
					opacity: .5
				},
				S = {
					transform: "translate3d(0, 0, 0)",
					opacity: 1
				},
				D = {
					mass: 1.1,
					friction: 24,
					tension: 260
				},
				Z = e => e.shiftKey || e.key === _.vn.SHIFT,
				R = e => e.metaKey || e.ctrlKey || ["Meta", "Control"].includes(e.key),
				L = l.memo(function(e) {
					let {
						members: t,
						guild: n,
						className: o,
						searchState: a,
						compact: s,
						onSelectRow: m,
						onResetForNewMembers: b
					} = e, f = (0, c.e7)([C.Z], () => C.Z.useReducedMotion), _ = (0, u.f9)(), L = (0, p.n)(), [I, P] = l.useState(!1), [M, V] = l.useState(!1), E = !_ && I && M;
					l.useEffect(() => {
						L || (P(!1), V(!1))
					}, [L]), l.useLayoutEffect(() => {
						let e = e => {
								Z(e) && P(!0), R(e) && V(!0)
							},
							t = e => {
								Z(e) && P(!1), R(e) && V(!1)
							};
						return window.addEventListener("keydown", e), window.addEventListener("keyup", t), () => {
							window.removeEventListener("keydown", e), window.removeEventListener("keyup", t)
						}
					}, []), l.useEffect(() => {
						(0, j.nb)(n.id, t)
					}, [n.id, t]);
					let T = t.length > 30,
						k = (0, d.Yzy)(t, {
							key: e => e,
							trail: T ? 5 : 15,
							from(e) {
								let t = h.Z.getEnhancedMember(n.id, e),
									r = h.Z.getLastRefreshTimestamp(n.id),
									l = null == t || 0 === r,
									o = null != t && t.refreshTimestamp === r;
								return l || !o ? S : T ? N : w
							},
							enter: S,
							config: D
						}),
						A = !f && a === x.po.LOADING;
					return (0, r.jsxs)("table", {
						className: i()(H.table, o),
						children: [(0, r.jsx)(v.Z, {
							guildId: n.id,
							currentPagedMembers: t
						}), (0, r.jsx)("tbody", {
							children: a === x.po.SUCCESS_FULL || a === x.po.LOADING ? (0, r.jsxs)(r.Fragment, {
								children: [(0, r.jsx)(O.Z, {
									guild: n,
									onSubmit: b
								}), k((e, t) => (0, r.jsx)(y.Z, {
									userId: t,
									guildId: n.id,
									style: e,
									onSelect: m,
									isHoldingAdvancedInfoKey: E,
									compact: s,
									isLoading: A
								}, t))]
							}) : (0, r.jsx)("td", {
								colSpan: 7,
								children: (0, r.jsx)(g.Z, {
									searchState: a
								})
							})
						})]
					})
				}, function(e, t) {
					let n = s()(e.members, t.members),
						r = e.guild.id === t.guild.id,
						l = e.searchState === t.searchState,
						o = e.compact === t.compact;
					return n && r && l && o
				}),
				I = function(e) {
					var t, n;
					let {
						guild: o,
						className: i,
						searchState: a,
						compact: s,
						onSelectRow: u,
						onResetForNewMembers: d
					} = e, C = (0, c.cj)([h.Z], () => h.Z.getPaginationStateByGuildId(o.id), [o.id]), [p] = (0, c.e7)([h.Z], () => h.Z.getPagedMembersByGuildId(o.id), [o.id], b.Q);
					l.useEffect(() => {
						(0, j.zO)(o.id)
					}, [o.id]);
					let g = l.useDeferredValue(null != (t = p[C.currentPage]) ? t : []),
						{
							analyticsLocations: x
						} = (0, m.ZP)(),
						v = null != (n = null == x ? void 0 : x[0]) ? n : null;
					return l.useEffect(() => {
						(0, f.h1)(o.id, v)
					}, [o.id, v]), (0, r.jsx)(L, {
						members: g,
						guild: o,
						className: i,
						searchState: a,
						compact: s,
						onSelectRow: u,
						onResetForNewMembers: d
					})
				}
		},
		170323: function(e, t, n) {
			n.d(t, {
				Z: () => p
			});
			var r = n(255367);
			n(73800);
			var l = n(498607),
				o = n.n(l),
				i = n(913527),
				a = n.n(i),
				s = n(399606),
				c = n(893966),
				u = n(527379),
				d = n(932039),
				C = n(388032);

			function m(e) {
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

			function p(e) {
				let {
					guildId: t,
					onClose: n
				} = e, l = (0, s.e7)([c.Z], () => c.Z.getSearchStateByGuildId(t), [t], o()), {
					selectedAccountAgeOption: i
				} = l, {
					afterDate: p,
					beforeDate: f,
					optionId: h
				} = i, j = h === d.Ol.CUSTOM, g = j && null != p ? a()(p).format(d.N2) : null, x = j && null != f ? a()(f).format(d.N2) : null;
				return (0, r.jsx)(d.ZP, {
					startDateLabel: g,
					endDateLabel: x,
					afterDate: p,
					beforeDate: f,
					selectedOption: h,
					isCustomDateRange: j,
					menuName: "account-age",
					accessibilityLabel: C.intl.string(C.t["D++TgY"]),
					onClose: n,
					onSelectDateOption: function(e, n) {
						let r = null != n ? a()().subtract(n.input, n.unit).valueOf() : null;
						(0, u.Dr)(t, b(m({}, l), {
							selectedAccountAgeOption: {
								optionId: e,
								afterDate: r,
								beforeDate: null
							}
						}))
					},
					onToggleCustomDateRange: function() {
						(0, u.Dr)(t, b(m({}, l), {
							selectedAccountAgeOption: {
								optionId: d.Ol.CUSTOM,
								afterDate: j ? p : null,
								beforeDate: j ? f : null
							}
						}))
					},
					onSelectStartDate: function(e) {
						(0, u.Dr)(t, b(m({}, l), {
							selectedAccountAgeOption: {
								optionId: d.Ol.CUSTOM,
								afterDate: e.valueOf(),
								beforeDate: f
							}
						}))
					},
					onSelectEndDate: function(e) {
						(0, u.Dr)(t, b(m({}, l), {
							selectedAccountAgeOption: {
								optionId: d.Ol.CUSTOM,
								afterDate: p,
								beforeDate: e.valueOf()
							}
						}))
					}
				})
			}
		},
		932039: function(e, t, n) {
			n.d(t, {
				N2: () => j,
				Ol: () => v,
				ZP: () => y
			}), n(388685);
			var r, l = n(255367),
				o = n(73800),
				i = n(120356),
				a = n.n(i),
				s = n(913527),
				c = n.n(s),
				u = n(608787),
				d = n(481060),
				C = n(553826),
				m = n(981631),
				b = n(388032),
				p = n(958404);

			function f(e) {
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
			let j = "MMM Do, YYYY",
				g = c()("2015-05-15").local(),
				x = (0, u.Un)({
					createPromise: () => Promise.resolve().then(n.bind(n, 547800)),
					webpackId: 547800
				});
			var v = ((r = {})[r.ALL = 0] = "ALL", r[r["1_HOUR"] = 1] = "1_HOUR", r[r["24_HOURS"] = 2] = "24_HOURS", r[r["7_DAYS"] = 3] = "7_DAYS", r[r["2_WEEKS"] = 4] = "2_WEEKS", r[r["4_WEEKS"] = 5] = "4_WEEKS", r[r["3_MONTHS"] = 6] = "3_MONTHS", r[r.CUSTOM = 7] = "CUSTOM", r);

			function y(e) {
				let {
					startDateLabel: t,
					endDateLabel: n,
					afterDate: r,
					beforeDate: i,
					selectedOption: s,
					isCustomDateRange: u,
					menuName: j,
					onClose: v,
					onSelectDateOption: y,
					onToggleCustomDateRange: O,
					onSelectStartDate: _,
					onSelectEndDate: H
				} = e, w = [{
					id: 0,
					option: null,
					label: b.intl.string(b.t.jelCiY)
				}, {
					id: 1,
					option: {
						input: 1,
						unit: "h"
					},
					label: b.intl.string(b.t["91RDqq"])
				}, {
					id: 2,
					option: {
						input: 24,
						unit: "h"
					},
					label: b.intl.string(b.t["Lj/1Tk"])
				}, {
					id: 3,
					option: {
						input: 7,
						unit: "d"
					},
					label: b.intl.string(b.t.NnUMSU)
				}, {
					id: 4,
					option: {
						input: 2,
						unit: "w"
					},
					label: b.intl.string(b.t.hY3XWF)
				}, {
					id: 5,
					option: {
						input: 4,
						unit: "w"
					},
					label: b.intl.string(b.t.kQTwT0)
				}, {
					id: 6,
					option: {
						input: 3,
						unit: "M"
					},
					label: b.intl.string(b.t.EPuP0t)
				}], [N, S] = o.useState(!1), D = 7 !== s ? null : null != t && null != n ? "".concat(t, " - ").concat(n) : null != t ? b.intl.formatToPlainString(b.t.ClmSzc, {
					date: t
				}) : null != n ? b.intl.formatToPlainString(b.t.YvNhsb, {
					date: n
				}) : null, Z = o.useCallback(() => {
					S(!0), O()
				}, [O]), R = o.useCallback(e => {
					_(e)
				}, [_]), L = o.useCallback(e => {
					H(e)
				}, [H]), I = o.useCallback(() => {
					null == i && null == r && y(0, null), S(!1)
				}, [r, i, y]);
				return (0, l.jsx)(d.v2r, {
					navId: "member-safety-guild-member-".concat(j, "-menu"),
					onClose: v,
					"aria-label": b.intl.string(b.t.k9m8Rk),
					onSelect: m.dG4,
					children: (0, l.jsx)(d.kSQ, {
						children: N ? (0, l.jsxs)(l.Fragment, {
							children: [(0, l.jsx)(d.sNh, {
								id: "back",
								action: I,
								render: e => (0, l.jsxs)("span", h(f({}, e), {
									className: p.nagivateBackContainer,
									children: [(0, l.jsx)(d.V7D, {
										size: "custom",
										color: "currentColor",
										width: 16,
										height: 16
									}), (0, l.jsx)(d.Text, {
										variant: "eyebrow",
										color: "header-primary",
										children: b.intl.string(b.t.BTfN6u)
									})]
								}))
							}), (0, l.jsx)(d.sNh, {
								id: "after-date-menu-item",
								label: b.intl.string(b.t.RDqVOD),
								subtext: t,
								subMenuClassName: p.calendarContainer,
								children: (0, l.jsx)(d.sNh, {
									id: "after-date-picker",
									render: e => (0, l.jsx)(x, h(f({}, e), {
										calendarClassName: p.calendar,
										value: u && null != r ? c()(r) : void 0,
										onSelect: R,
										maxDate: c()().local(),
										minDate: g
									}))
								})
							}), (0, l.jsx)(d.sNh, {
								id: "before-date-menu-item",
								label: b.intl.string(b.t.jF54hY),
								subtext: n,
								subMenuClassName: p.calendarContainer,
								children: (0, l.jsx)(d.sNh, {
									id: "before-date-picker",
									render: e => (0, l.jsx)(x, h(f({}, e), {
										calendarClassName: p.calendar,
										value: u && null != i ? c()(i) : void 0,
										onSelect: L,
										maxDate: c()().local(),
										minDate: u && null != r ? c()(r) : g
									}))
								})
							})]
						}) : (0, l.jsxs)(l.Fragment, {
							children: [w.map(e => {
								let {
									id: t,
									option: n,
									label: r
								} = e;
								return (0, l.jsx)(d.k5B, {
									group: "member-safety-guild-member-".concat(j, "-menu"),
									id: "guild-member-".concat(j, "-option-").concat(t),
									label: r,
									action: () => y(t, n),
									checked: t === s
								}, "option-".concat(t))
							}), (0, l.jsx)(d.Clw, {}), (0, l.jsx)(d.sNh, {
								id: "guild-member-".concat(j, "-custom-option}"),
								action: Z,
								render: e => (0, l.jsxs)("div", {
									className: a()(p.otherDatesContainer, {
										[p.focused]: e.isFocused
									}),
									children: [(0, l.jsxs)("div", {
										className: p.leftContainer,
										children: [(0, l.jsx)(d.Text, {
											className: a()(p.otherDateLabel, {
												[p.focused]: e.isFocused
											}),
											variant: "text-sm/medium",
											children: b.intl.string(b.t.BTfN6u)
										}), null != D && (0, l.jsx)(d.Text, {
											className: a()(p.otherDateLabel, {
												[p.focused]: e.isFocused
											}),
											color: "text-muted",
											variant: "text-xxs/medium",
											children: D
										})]
									}), 7 === s ? (0, l.jsx)(C.Z, {
										foreground: p.radioSelection,
										width: 18,
										height: 18
									}) : (0, l.jsx)(d.Fbu, {
										size: "custom",
										color: "currentColor",
										width: 16,
										height: 16,
										className: a()(p.otherDateLabel, {
											[p.focused]: e.isFocused
										})
									})]
								})
							})]
						})
					})
				})
			}
		},
		434368: function(e, t, n) {
			n.d(t, {
				Z: () => j
			});
			var r = n(255367),
				l = n(73800),
				o = n(498607),
				i = n.n(o),
				a = n(399606),
				s = n(481060),
				c = n(203893),
				u = n(910693),
				d = n(893966),
				C = n(527379),
				m = n(981631),
				b = n(388032),
				p = n(771221);

			function f(e) {
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

			function j(e) {
				let {
					guildId: t,
					onClose: n
				} = e, o = (0, a.e7)([d.Z], () => d.Z.getSearchStateByGuildId(t), [t], i()), j = (0, u.dW)(t), g = l.useCallback(() => {
					o.requireUnusualDmActivity || j(u.aY.UNUSUAL_DM_ACTIVITY), (0, C.Dr)(t, h(f({}, o), {
						requireUnusualDmActivity: !o.requireUnusualDmActivity
					}))
				}, [t, o, j]), x = l.useCallback(() => {
					o.requireCommunicationDisabled || j(u.aY.COMMUNICATION_DISABLED), (0, C.Dr)(t, h(f({}, o), {
						requireCommunicationDisabled: !o.requireCommunicationDisabled
					}))
				}, [t, o, j]), v = l.useCallback(() => {
					o.requireUnusualAccountActivity || j(u.aY.UNUSUAL_ACCOUNT_ACTIVITY), (0, C.Dr)(t, h(f({}, o), {
						requireUnusualAccountActivity: !o.requireUnusualAccountActivity
					}))
				}, [t, o, j]), y = l.useCallback(() => {
					o.requireUsernameQuarantined || j(u.aY.USERNAME_QUARANTINED), (0, C.Dr)(t, h(f({}, o), {
						requireUsernameQuarantined: !o.requireUsernameQuarantined
					}))
				}, [t, o, j]);
				return (0, r.jsx)(s.v2r, {
					navId: "member-safety-flags",
					onClose: n,
					"aria-label": b.intl.string(b.t.k9m8Rk),
					onSelect: m.dG4,
					children: (0, r.jsxs)(s.kSQ, {
						children: [(0, r.jsx)(s.S89, {
							id: "toggle-require-unusual-dm-activity",
							label: (0, r.jsxs)("div", {
								className: p.checkboxLabel,
								children: [(0, r.jsx)(s.b6m, {
									size: "custom",
									color: "currentColor",
									width: 16,
									height: 16,
									className: p.unusualDMLabelIcon
								}), b.intl.string(b.t.ZRnONz)]
							}),
							action: g,
							checked: o.requireUnusualDmActivity
						}), (0, r.jsx)(s.S89, {
							id: "toggle-require-communication-disabled",
							label: (0, r.jsxs)("div", {
								className: p.checkboxLabel,
								children: [(0, r.jsx)(s.YlB, {
									size: "custom",
									color: "currentColor",
									width: 16,
									height: 16,
									className: p.timeoutLabelIcon
								}), b.intl.string(b.t.z3wbj4)]
							}),
							action: x,
							checked: o.requireCommunicationDisabled
						}), (0, r.jsxs)(r.Fragment, {
							children: [(0, r.jsx)(s.S89, {
								id: "toggle-require-unusual-account-activity",
								label: (0, r.jsxs)("div", {
									className: p.checkboxLabel,
									children: [(0, r.jsx)(c.Z, {
										width: 16,
										height: 16,
										className: p.unusualAccountActivityLabelIcon
									}), b.intl.string(b.t.DIQsDw)]
								}),
								action: v,
								checked: o.requireUnusualAccountActivity
							}), (0, r.jsx)(s.S89, {
								id: "toggle-require-username-quarantined",
								label: (0, r.jsxs)("div", {
									className: p.checkboxLabel,
									children: [(0, r.jsx)(s.ics, {
										size: "custom",
										color: "currentColor",
										width: 16,
										height: 16,
										className: p.quarantinedLabelIcon
									}), b.intl.string(b.t.Jloklp)]
								}),
								action: y,
								checked: o.requireUsernameQuarantined
							})]
						})]
					})
				})
			}
		},
		201756: function(e, t, n) {
			n.d(t, {
				Z: () => Z
			});
			var r = n(255367),
				l = n(73800),
				o = n(120356),
				i = n.n(o),
				a = n(498607),
				s = n.n(a),
				c = n(399606),
				u = n(481060),
				d = n(430824),
				C = n(496675),
				m = n(588215),
				b = n(241559),
				p = n(893966),
				f = n(256003),
				h = n(170323),
				j = n(434368),
				g = n(42170),
				x = n(123846),
				v = n(42551),
				y = n(981631),
				O = n(388032),
				_ = n(771429),
				H = n(350381);

			function w(e) {
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

			function N(e, t) {
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
				if (null == e) return {};
				var n, r, l = function(e, t) {
					if (null == e) return {};
					var n, r, l = {},
						o = Object.keys(e);
					for (r = 0; r < o.length; r++) n = o[r], t.indexOf(n) >= 0 || (l[n] = e[n]);
					return l
				}(e, t);
				if (Object.getOwnPropertySymbols) {
					var o = Object.getOwnPropertySymbols(e);
					for (r = 0; r < o.length; r++) n = o[r], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (l[n] = e[n])
				}
				return l
			}
			let D = l.forwardRef(function(e, t) {
				var {
					label: n,
					onFilter: l,
					isFiltered: o,
					isSorted: a,
					className: s
				} = e, c = S(e, ["label", "onFilter", "isFiltered", "isSorted", "className"]);
				let d = o ? "header-primary" : "header-secondary";
				return a && (d = "text-brand"), (0, r.jsx)("th", {
					className: i()(_.tableHeaderCellContainer, s),
					children: (0, r.jsxs)(u.P3F, N(w({}, c), {
						innerRef: t,
						onClick: l,
						className: i()(_.tableHeaderCell, {
							[_.tableHeaderCellWithFilter]: null != l
						}),
						children: [(0, r.jsx)(u.Text, {
							variant: "eyebrow",
							color: d,
							children: n
						}), null != l && (0, r.jsx)("div", {
							className: _.filterIconButton,
							children: (0, r.jsx)(u.gXV, {
								size: "custom",
								className: _.filterIcon,
								color: o ? u.TVs.colors.CONTROL_BRAND_FOREGROUND.css : u.TVs.colors.TEXT_MUTED.css,
								width: 16,
								height: 16
							})
						})]
					}))
				})
			});

			function Z(e) {
				let {
					guildId: t,
					currentPagedMembers: n
				} = e, o = l.useRef(null), a = l.useRef(null), Z = l.useRef(null), R = l.useRef(null), L = l.useRef(null), I = (0, c.e7)([p.Z], () => p.Z.getSearchStateByGuildId(t), [t], s()), P = (0, c.e7)([C.Z, d.Z], () => C.Z.can(y.Plq.MANAGE_GUILD, d.Z.getGuild(t)), [t]), {
					selectedUserIds: M,
					addUsers: V,
					clearSelection: E
				} = (0, f.Z)(t), T = I.requireUnusualDmActivity || I.requireCommunicationDisabled || I.requireUnusualAccountActivity || I.requireUsernameQuarantined, k = I.selectedRoleIds.size > 0, A = null != I.selectedJoinDateOption.afterDate, B = I.selectedSort === m.d$.ORDER_BY_GUILD_JOINED_AT_ASC, U = null != I.selectedAccountAgeOption.afterDate, F = I.selectedSort === m.d$.ORDER_BY_USER_ID_ASC || I.selectedSort === m.d$.ORDER_BY_USER_ID_DESC, z = null != I.selectedSourceInviteCode && "" !== I.selectedSourceInviteCode, q = null != I.selectedJoinSourceType, G = z || q, Y = (0, b.xC)(t), W = l.useMemo(() => n.filter(e => (0, b.rX)(t, Y, e)), [Y, n, t]), X = W.length > 0, J = 0 === W.filter(e => !M.has(e)).length, K = l.useCallback(() => {
					X && (J ? E() : V(W))
				}, [X, J, E, V, W]);
				return (0, r.jsx)("thead", {
					children: (0, r.jsxs)("tr", {
						className: _.tableHeaderRow,
						children: [Y && (0, r.jsx)("th", {
							className: i()(_.tableHeaderCellContainer, H.xsmallCol),
							children: (0, r.jsx)(u.ua7, {
								shouldShow: !X,
								text: O.intl.string(O.t.tJEY0N),
								children: e => (0, r.jsx)(u.P3F, N(w({}, e), {
									onClick: K,
									className: _.tableHeaderCell,
									children: (0, r.jsx)(u.XZJ, {
										type: u.XZJ.Types.INVERTED,
										value: J,
										disabled: !X
									})
								}))
							})
						}), (0, r.jsx)(D, {
							label: O.intl.string(O.t.Es7n9f)
						}), P ? (0, r.jsxs)(r.Fragment, {
							children: [(0, r.jsx)(u.yRy, {
								targetElementRef: o,
								animation: u.yRy.Animation.FADE,
								position: "bottom",
								spacing: 4,
								align: "left",
								renderPopout: () => (0, r.jsx)(g.Z, {
									guildId: t,
									onClose: y.dG4
								}),
								closeOnScroll: !0,
								children: e => {
									var {
										onClick: t
									} = e, n = S(e, ["onClick"]);
									return (0, r.jsx)(D, w({
										ref: o,
										label: O.intl.string(O.t.xcKP1N),
										onFilter: t,
										isFiltered: A,
										isSorted: B,
										className: H.smallCol
									}, n))
								}
							}), (0, r.jsx)(u.yRy, {
								targetElementRef: a,
								animation: u.yRy.Animation.FADE,
								position: "bottom",
								spacing: 4,
								align: "left",
								renderPopout: () => (0, r.jsx)(h.Z, {
									guildId: t,
									onClose: y.dG4
								}),
								closeOnScroll: !0,
								children: e => {
									var {
										onClick: t
									} = e, n = S(e, ["onClick"]);
									return (0, r.jsx)(D, w({
										ref: a,
										label: O.intl.string(O.t.sPph4O),
										onFilter: t,
										isFiltered: U,
										isSorted: F,
										className: H.smallCol
									}, n))
								}
							})]
						}) : (0, r.jsxs)(r.Fragment, {
							children: [(0, r.jsx)(D, {
								label: O.intl.string(O.t.xcKP1N),
								className: H.smallCol
							}), (0, r.jsx)(D, {
								label: O.intl.string(O.t.sPph4O),
								className: H.smallCol
							})]
						}), P ? (0, r.jsx)(u.yRy, {
							targetElementRef: Z,
							animation: u.yRy.Animation.FADE,
							position: "bottom",
							spacing: 4,
							align: "left",
							renderPopout: () => (0, r.jsx)(x.Z, {
								guildId: t,
								onClose: y.dG4
							}),
							closeOnScroll: !0,
							children: e => {
								var {
									onClick: t
								} = e, n = S(e, ["onClick"]);
								return (0, r.jsx)(D, w({
									ref: Z,
									label: O.intl.string(O.t.yn0w19),
									onFilter: t,
									isFiltered: G,
									className: H.smallCol
								}, n))
							}
						}) : P && (0, r.jsx)(D, {
							label: O.intl.string(O.t.yn0w19),
							className: H.smallCol
						}), (0, r.jsx)(u.yRy, {
							targetElementRef: R,
							animation: u.yRy.Animation.FADE,
							position: "bottom",
							spacing: 4,
							align: "left",
							renderPopout: e => {
								let {
									closePopout: n
								} = e;
								return (0, r.jsx)(v.Z, {
									guildId: t,
									onClose: n
								})
							},
							children: e => {
								var {
									onClick: t
								} = e, n = S(e, ["onClick"]);
								return (0, r.jsx)(D, w({
									ref: R,
									label: O.intl.string(O.t["2SZsWV"]),
									onFilter: t,
									isFiltered: k,
									className: H.mediumCol
								}, n))
							}
						}), (0, r.jsx)(u.ua7, {
							text: O.intl.string(O.t["2cRO3d"]),
							position: "top",
							align: "left",
							shouldShow: !0,
							color: u.ua7.Colors.BRAND,
							children: e => (0, r.jsx)(u.yRy, {
								targetElementRef: L,
								animation: u.yRy.Animation.FADE,
								position: "bottom",
								spacing: 4,
								align: "left",
								renderPopout: e => {
									let {
										closePopout: n
									} = e;
									return (0, r.jsx)(j.Z, {
										guildId: t,
										onClose: n
									})
								},
								closeOnScroll: !0,
								children: t => (0, r.jsx)(D, {
									ref: L,
									label: O.intl.string(O.t["7V375+"]),
									"aria-label": O.intl.string(O.t["2cRO3d"]),
									onFilter: n => {
										var r, l;
										null == (r = t.onClick) || r.call(t, n), null == (l = e.onClick) || l.call(e)
									},
									isFiltered: T,
									className: H.smallCol,
									onMouseEnter: () => {
										var n, r;
										null == (n = e.onMouseEnter) || n.call(e), null == (r = t.onMouseEnter) || r.call(t)
									},
									onMouseDown: t.onMouseDown,
									onMouseLeave: e.onMouseLeave,
									onBlur: e.onBlur,
									onFocus: e.onFocus,
									onKeyDown: t.onKeyDown,
									"aria-controls": t["aria-controls"],
									"aria-expanded": t["aria-expanded"]
								})
							})
						}), (0, r.jsx)(D, {
							label: O.intl.string(O.t["5Q9xGh"]),
							className: H.smallCol
						})]
					})
				})
			}
		},
		734557: function(e, t, n) {
			n.d(t, {
				s: () => a
			}), n(388685), n(642613);
			var r = n(73800),
				l = n(544891),
				o = n(981631);
			let i = new Map;

			function a(e) {
				let [t, n] = r.useState(i.has(e) ? Array.from(i.get(e)) : []), [a, s] = r.useState(!1), c = r.useMemo(() => t.map(e => e.code), [t]), u = r.useMemo(() => t.reduce((e, t) => (e[t.code] = t, e), {}), [t]), d = r.useCallback(async () => {
					s(!0);
					let t = (await l.tn.get({
						url: o.ANM.GUILD_INSTANT_INVITES(e),
						rejectWithError: !0
					})).body.sort((e, t) => new Date(t.created_at).getTime() - new Date(e.created_at).getTime());
					n(t), i.set(e, new Set(t)), s(!1)
				}, [e]);
				return r.useEffect(() => {
					d()
				}, [e, d]), {
					invitesRaw: t,
					inviteCodes: c,
					invitesByCode: u,
					loading: a
				}
			}
		},
		42170: function(e, t, n) {
			n.d(t, {
				Z: () => p
			});
			var r = n(255367);
			n(73800);
			var l = n(498607),
				o = n.n(l),
				i = n(913527),
				a = n.n(i),
				s = n(399606),
				c = n(893966),
				u = n(527379),
				d = n(932039),
				C = n(388032);

			function m(e) {
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

			function p(e) {
				let {
					guildId: t,
					onClose: n
				} = e, l = (0, s.e7)([c.Z], () => c.Z.getSearchStateByGuildId(t), [t], o()), {
					selectedJoinDateOption: i
				} = l, {
					afterDate: p,
					beforeDate: f,
					optionId: h
				} = i, j = h === d.Ol.CUSTOM, g = j && null != p ? a()(p).format(d.N2) : null, x = j && null != f ? a()(f).format(d.N2) : null;
				return (0, r.jsx)(d.ZP, {
					startDateLabel: g,
					endDateLabel: x,
					afterDate: p,
					beforeDate: f,
					selectedOption: h,
					isCustomDateRange: j,
					menuName: "joined-date",
					accessibilityLabel: C.intl.string(C.t.XMVinZ),
					onClose: n,
					onSelectDateOption: function(e, n) {
						let r = null != n ? a()().subtract(n.input, n.unit).valueOf() : null;
						(0, u.Dr)(t, b(m({}, l), {
							selectedJoinDateOption: {
								optionId: e,
								afterDate: r,
								beforeDate: null
							}
						}))
					},
					onToggleCustomDateRange: function() {
						(0, u.Dr)(t, b(m({}, l), {
							selectedJoinDateOption: {
								optionId: d.Ol.CUSTOM,
								afterDate: j ? p : null,
								beforeDate: j ? f : null
							}
						}))
					},
					onSelectStartDate: function(e) {
						(0, u.Dr)(t, b(m({}, l), {
							selectedJoinDateOption: {
								optionId: d.Ol.CUSTOM,
								afterDate: e.valueOf(),
								beforeDate: f
							}
						}))
					},
					onSelectEndDate: function(e) {
						(0, u.Dr)(t, b(m({}, l), {
							selectedJoinDateOption: {
								optionId: d.Ol.CUSTOM,
								afterDate: p,
								beforeDate: e.valueOf()
							}
						}))
					}
				})
			}
		},
		123846: function(e, t, n) {
			n.d(t, {
				Z: () => D
			}), n(388685), n(781311);
			var r = n(255367),
				l = n(73800),
				o = n(120356),
				i = n.n(o),
				a = n(954955),
				s = n.n(a),
				c = n(498607),
				u = n.n(c),
				d = n(399606),
				C = n(481060),
				m = n(430824),
				b = n(246946),
				p = n(785195),
				f = n(553826),
				h = n(893966),
				j = n(527379),
				g = n(327999),
				x = n(734557),
				v = n(981631),
				y = n(388032),
				O = n(23),
				_ = n(906944);

			function H(e) {
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
			let N = [g.gq.DISCOVERY, g.gq.VANITY_URL, g.gq.BOT, g.gq.HUB, g.gq.MANUAL_MEMBER_VERIFICATION];

			function S(e) {
				let {
					type: t,
					text: n,
					size: l,
					vanityUrl: o,
					isFocused: a
				} = e, s = null != l ? l : 16, c = function(e, t) {
					switch (e) {
						case g.gq.BOT:
							return (0, r.jsx)(C.wGt, {
								size: "custom",
								color: "currentColor",
								className: O.icon,
								height: t,
								width: t
							});
						case g.gq.INTEGRATION:
							return (0, r.jsx)(C.tYf, {
								size: "custom",
								color: "currentColor",
								className: O.icon,
								height: t,
								width: t
							});
						case g.gq.DISCOVERY:
							return (0, r.jsx)(C.Jmo, {
								size: "custom",
								color: "currentColor",
								className: O.icon,
								height: t,
								width: t
							});
						case g.gq.HUB:
							return (0, r.jsx)(C.aVH, {
								size: "custom",
								color: "currentColor",
								className: O.icon,
								height: t,
								width: t
							});
						case g.gq.INVITE:
						case g.gq.VANITY_URL:
							return (0, r.jsx)(C.xPt, {
								size: "custom",
								color: "currentColor",
								className: O.icon,
								height: t,
								width: t
							});
						case g.gq.MANUAL_MEMBER_VERIFICATION:
							return (0, r.jsx)(p.Z, {
								className: O.icon,
								height: t,
								width: t
							});
						default:
							return null
					}
				}(t, s), u = (0, g.bE)(t, o);
				return (0, r.jsxs)("div", {
					className: O.labelWithIconContainer,
					"aria-label": u,
					children: [null != c ? c : null, (0, r.jsx)(C.Text, {
						variant: 12 === s ? "text-xs/medium" : "text-sm/medium",
						className: i()(O.labelText, {
							[O.focused]: a
						}),
						children: n
					})]
				})
			}

			function D(e) {
				var t;
				let {
					guildId: n,
					onClose: o
				} = e, a = (0, d.e7)([h.Z], () => h.Z.getSearchStateByGuildId(n), [n], u()), {
					inviteCodes: c
				} = (0, x.s)(n), p = (0, d.e7)([m.Z], () => m.Z.getGuild(n)), D = null != (t = null == p ? void 0 : p.vanityURLCode) ? t : null, [Z, R] = l.useState(!1), {
					selectedSourceInviteCode: L,
					selectedJoinSourceType: I
				} = a, P = null != I && I !== g.gq.UNSPECIFIED, M = (0, d.e7)([b.Z], () => b.Z.hideInstantInvites, []);
				M && (c = []);
				let V = s()(e => {
					let t = e.trim();
					(0, j.Dr)(n, {
						selectedSourceInviteCode: "" !== t ? t : void 0,
						selectedJoinSourceType: void 0
					})
				}, 300);
				l.useEffect(() => () => {
					V.cancel()
				}, [V]);
				let E = l.useCallback(e => {
						let t = e.trim();
						(0, j.Dr)(n, {
							selectedSourceInviteCode: "" !== t ? t : void 0,
							selectedJoinSourceType: void 0
						})
					}, [n]),
					T = l.useCallback(e => {
						e === I ? (0, j.Dr)(n, {
							selectedSourceInviteCode: void 0,
							selectedJoinSourceType: void 0
						}) : (0, j.Dr)(n, {
							selectedSourceInviteCode: null,
							selectedJoinSourceType: e
						}), R(!1)
					}, [n, I]),
					k = l.useCallback(e => {
						(0, j.Dr)(n, {
							selectedSourceInviteCode: e,
							selectedJoinSourceType: void 0
						}), V(e)
					}, [n, V]);
				return (0, r.jsx)(C.v2r, {
					navId: "members-table-join-method-menu",
					onClose: () => {
						o()
					},
					"aria-label": y.intl.string(y.t["u/7RdX"]),
					onSelect: v.dG4,
					children: Z ? (0, r.jsxs)(C.kSQ, {
						children: [(0, r.jsx)(C.sNh, {
							id: "back",
							action: () => R(!1),
							render: e => (0, r.jsxs)("span", w(H({}, e), {
								className: O.customLabelContainer,
								children: [(0, r.jsx)(C.V7D, {
									size: "custom",
									color: "currentColor",
									width: 16,
									height: 16,
									className: O.__invalid_caret
								}), (0, r.jsx)(C.Text, {
									variant: "eyebrow",
									color: "header-primary",
									children: y.intl.string(y.t["Kz/cho"])
								})]
							}))
						}), N.map(e => (0, r.jsx)(C.k5B, {
							id: "join-source-type-option-".concat(e),
							label: t => (0, r.jsx)(S, w(H({}, t), {
								type: e,
								vanityUrl: D,
								text: (0, g.bE)(e, D, M)
							})),
							checked: I === e,
							disabled: !1,
							action: () => T(e),
							group: "join-source-type-options"
						}, "join-source-type-option-".concat(e)))]
					}) : (0, r.jsxs)(C.kSQ, {
						children: [(0, r.jsx)(C.II_, {
							id: "members-table-invite-code-search",
							control: (e, t) => (0, r.jsx)(C.ne, w(H({}, e), {
								query: null != L ? L : "",
								onChange: k,
								ref: t,
								placeholder: y.intl.string(y.t.YwJnGx)
							}))
						}, "invite-code-filter-search"), (0, r.jsx)(C.Clw, {}), (0, r.jsx)(C.k5B, {
							id: "join-source-type-option-all",
							label: y.intl.string(y.t.an9Ry8),
							checked: null == L && null == I,
							disabled: !1,
							action: () => T(null),
							group: "join-source-type-options"
						}, "join-source-type-option-all"), c.map(e => (0, r.jsx)(C.k5B, {
							id: "join-source-type-option-".concat(e),
							label: t => (0, r.jsx)(S, w(H({}, t), {
								type: g.gq.INVITE,
								vanityUrl: D,
								text: e
							})),
							checked: L === e,
							disabled: !1,
							action: () => E(e),
							group: "join-source-type-options"
						}, "join-source-type-option-".concat(e))), (0, r.jsx)(C.Clw, {}), (0, r.jsx)(C.sNh, {
							id: "other-join-methods",
							action: () => R(!0),
							render: e => (0, r.jsxs)("div", {
								className: i()(O.containerWithRightCaret, O.customLabelContainer),
								children: [(0, r.jsxs)("div", {
									className: _.label,
									children: [(0, r.jsx)(C.Text, {
										variant: "text-sm/medium",
										className: i()(O.__invalid_selectedRadio, O.labelText, {
											[O.focused]: e.isFocused
										}),
										children: y.intl.string(y.t["Kz/cho"])
									}), P ? (0, r.jsx)("div", {
										className: O.selectedOption,
										children: (0, r.jsx)(S, w(H({}, e), {
											size: 12,
											text: (0, g.bE)(I, D, M),
											type: I,
											vanityUrl: D
										}))
									}) : null]
								}), P ? (0, r.jsx)(f.Z, {
									background: O.__invalid_radio,
									foreground: O.radioSelection,
									width: 16,
									height: 16
								}) : (0, r.jsx)(C.Fbu, {
									size: "custom",
									color: "currentColor",
									width: 16,
									height: 16,
									className: O.__invalid_caret
								})]
							})
						}, "other-join-methods")]
					})
				})
			}
		},
		428936: function(e, t, n) {
			n.d(t, {
				Z: () => p
			}), n(388685);
			var r = n(255367),
				l = n(73800),
				o = n(399606),
				i = n(481060),
				a = n(823596),
				s = n(201070),
				c = n(893966),
				u = n(527379),
				d = n(388032),
				C = n(673285);

			function m(e) {
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

			function p(e) {
				let {
					guildId: t,
					onPageChange: n
				} = e, [p, f] = l.useTransition(), h = (0, o.e7)([c.Z], () => c.Z.getEstimatedMemberSearchCountByGuildId(t), [t]), j = (0, o.cj)([c.Z], () => c.Z.getPaginationStateByGuildId(t), [t]), g = (0, s.$j)(t), x = l.useMemo(() => a.LU.map(e => ({
					value: e,
					label: Number(e).toLocaleString()
				})), []), v = new Intl.NumberFormat(d.intl.currentLocale).format(h), y = d.intl.formatToPlainString(d.t.RNDnQ0, {
					count: g ? "..." : v
				}), O = h > j.pageSize || g, _ = h > a.LU["0"];
				return (0, r.jsxs)("div", {
					className: C.paginationContainer,
					children: [(0, r.jsx)("div", {
						className: C.pageSizeSelection,
						children: _ ? (0, r.jsxs)(r.Fragment, {
							children: [(0, r.jsx)(i.Text, {
								variant: "text-md/normal",
								color: "text-muted",
								children: d.intl.string(d.t.jNwLu7)
							}), (0, r.jsx)(i.PhF, {
								"aria-label": y,
								className: C.pageSizeInput,
								options: x,
								isSelected: e => e === j.pageSize,
								select: e => {
									f(() => {
										(0, u._o)(t, b(m({}, j), {
											pageSize: e
										}))
									})
								},
								serialize: e => "".concat(e),
								popoutPosition: "top",
								popoutWidth: 72
							}), (0, r.jsx)(i.ua7, {
								text: d.intl.string(d.t.ZTNur6),
								shouldShow: g,
								children: e => (0, r.jsx)(i.Text, b(m({
									variant: "text-md/normal",
									color: "text-muted",
									className: C.pageLabel
								}, e), {
									children: y
								}))
							})]
						}) : (0, r.jsx)(i.Text, {
							variant: "text-md/normal",
							color: "text-muted",
							children: d.intl.format(d.t.GZpwMD, {
								count: h
							})
						})
					}), (0, r.jsx)("div", {
						className: C.pagination,
						children: O && (0, r.jsx)(i.DsT, {
							className: C.paginationInput,
							totalCount: h,
							pageSize: j.pageSize,
							disablePaginationGap: !0,
							hideMaxPage: !0,
							currentPage: j.currentPage,
							onPageChange: e => {
								null == n || n(e), requestIdleCallback(() => {
									f(() => {
										(0, u._o)(t, b(m({}, j), {
											currentPage: e
										}))
									})
								})
							},
							maxVisiblePages: a.hW
						})
					})]
				})
			}
		},
		42551: function(e, t, n) {
			n.d(t, {
				Z: () => _
			}), n(388685), n(539854);
			var r = n(255367),
				l = n(73800),
				o = n(120356),
				i = n.n(o),
				a = n(658722),
				s = n.n(a),
				c = n(954955),
				u = n.n(c),
				d = n(498607),
				C = n.n(d),
				m = n(399606),
				b = n(481060),
				p = n(563115),
				f = n(910693),
				h = n(893966),
				j = n(527379),
				g = n(285173),
				x = n(388032),
				v = n(506192),
				y = n(350381);
			let O = new Set;

			function _(e) {
				let {
					guildId: t,
					onClose: n
				} = e, o = (0, f.BG)(t), a = (0, m.e7)([h.Z], () => h.Z.getSearchStateByGuildId(t), [t], C()), [c, d] = l.useState(a.selectedRoleIds), _ = (0, p.h)(t, O, !0), H = (e, n) => {
					let {
						record: l
					} = e;
					return (0, r.jsx)(b.lo1, {
						value: l.id,
						children: (0, r.jsxs)("div", {
							className: v.roleNameContainer,
							children: [(0, r.jsxs)("div", {
								className: v.roleLabel,
								children: [(0, r.jsx)("div", {
									className: i()(v.labelBackground, n && v.selected)
								}), (0, r.jsx)(b.lo1.Label, {
									children: (0, r.jsx)(g.Z, {
										className: y.roleTooltipItem,
										role: l,
										guildId: t
									}, l.id)
								})]
							}), (0, r.jsx)("div", {
								className: v.checkboxContainer,
								children: (0, r.jsx)(b.lo1.Checkbox, {
									checked: n
								})
							})]
						})
					}, l.id)
				}, w = (e, t) => _.reduce((n, r) => {
					let {
						record: l
					} = r, o = e.has(l.id);
					return s()(t.toLowerCase(), l.name.toLowerCase()) ? n.push(H(r, o)) : o && n.push(H(r, o)), n
				}, []), N = l.useCallback(e => {
					(0, j.Dr)(t, {
						selectedRoleIds: e
					}), o(e)
				}, [t, o]), S = l.useMemo(() => u()(N, 300), [N]), D = l.useCallback(e => {
					let t;
					d(t = new Set(c.has(e) ? [...c].filter(t => t !== e) : [...c, e])), S(t)
				}, [c, S]);
				return (0, r.jsx)(b.DBG, {
					className: v.rolePopout,
					placeholder: x.intl.string(x.t.ZveC7e),
					value: c,
					onChange: D,
					onClose: () => {
						n()
					},
					multiSelect: !0,
					showScrollbar: !0,
					autoFocus: !0,
					children: e => w(c, e)
				})
			}
		},
		66747: function(e, t, n) {
			n.d(t, {
				Z: () => el
			}), n(388685);
			var r = n(255367),
				l = n(73800),
				o = n(120356),
				i = n.n(o),
				a = n(392711),
				s = n(498607),
				c = n.n(s),
				u = n(399606),
				d = n(692547),
				C = n(481060),
				m = n(700582),
				b = n(745735),
				p = n(906732),
				f = n(346486),
				h = n(715903),
				j = n(69882),
				g = n(189432),
				x = n(189357),
				v = n(172751),
				y = n(493892),
				O = n(884902),
				_ = n(433355),
				H = n(430824),
				w = n(496675),
				N = n(594174),
				S = n(203893),
				D = n(777288),
				Z = n(5192),
				R = n(709054),
				L = n(51144),
				I = n(815790),
				P = n(588215),
				M = n(241559),
				V = n(893966),
				E = n(685244),
				T = n(16829),
				k = n(256003),
				A = n(472596),
				B = n(285173),
				U = n(981631),
				F = n(176505),
				z = n(50493),
				q = n(388032),
				G = n(350381);

			function Y(e) {
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

			function W(e, t) {
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
			let X = l.memo(function(e) {
					let {
						member: t
					} = e, n = l.useMemo(() => (0, j.J)(t.communicationDisabledUntil), [t.communicationDisabledUntil]), o = l.useMemo(() => null == t.communicationDisabledUntil ? new Date : new Date(t.communicationDisabledUntil), [t.communicationDisabledUntil]);
					return (0, r.jsxs)("div", {
						className: G.flagContainer,
						children: [t.hasUnusualDmActivity && (0, r.jsx)(C.ua7, {
							text: q.intl.string(q.t.QrfVTk),
							children: e => {
								let {
									onMouseEnter: t,
									onMouseLeave: n
								} = e;
								return (0, r.jsx)(C.b6m, {
									size: "custom",
									width: 20,
									height: 20,
									onMouseEnter: t,
									onMouseLeave: n,
									color: d.Z.colors.TEXT_MUTED.css
								})
							}
						}), n && (0, r.jsx)(C.ua7, {
							"aria-label": q.intl.string(q.t["xfJP+v"]),
							allowOverflow: !0,
							text: (0, r.jsxs)("div", {
								className: G.communicationDisabledTooltip,
								children: [(0, r.jsx)("div", {
									children: q.intl.string(q.t["xfJP+v"])
								}), (0, r.jsx)(f.Z, {
									deadline: o,
									showUnits: !0,
									stopAtOneSec: !0
								})]
							}),
							children: e => {
								let {
									onMouseEnter: t,
									onMouseLeave: n
								} = e;
								return (0, r.jsx)(C.YlB, {
									size: "custom",
									width: 20,
									height: 20,
									onMouseEnter: t,
									onMouseLeave: n,
									color: d.Z.colors.TEXT_DANGER.css
								})
							}
						}), (0, y.He)(t.userId) && (0, r.jsx)(C.ua7, {
							text: q.intl.string(q.t.PK9FQ0),
							children: e => {
								let {
									onMouseEnter: t,
									onMouseLeave: n
								} = e;
								return (0, r.jsx)(S.Z, {
									width: 20,
									height: 20,
									onMouseEnter: t,
									onMouseLeave: n,
									color: d.Z.colors.TEXT_DANGER.css
								})
							}
						}), (0, h.EY)(t) && (0, r.jsx)(C.ua7, {
							text: q.intl.string(q.t.qOVbaW),
							children: e => {
								let {
									onMouseEnter: t,
									onMouseLeave: n
								} = e;
								return (0, r.jsx)(C.ics, {
									size: "custom",
									width: 20,
									height: 20,
									onMouseEnter: t,
									onMouseLeave: n,
									color: d.Z.colors.TEXT_MUTED.css
								})
							}
						})]
					})
				}),
				J = l.memo(function(e) {
					let {
						member: t,
						highestRole: n
					} = e, o = (0, u.e7)([H.Z], () => H.Z.getGuild(t.guildId), [t.guildId]), a = t.roles.length - 1, s = l.useMemo(() => new Intl.NumberFormat(q.intl.currentLocale).format(a), [a]), c = (0, A.vN)(t), d = (0, A.vN)(t, !0), m = (0, u.e7)([w.Z], () => w.Z.can(U.Plq.MANAGE_ROLES, o), [o]);
					return null == o ? null : (0, r.jsxs)("div", {
						className: G.roleContainer,
						children: [null != n && (0, r.jsx)(B.Z, {
							className: i()(G.roleTooltipItem, G.highestRole),
							role: n,
							guildId: t.guildId
						}), a > 0 && (0, r.jsx)(C.P3F, {
							className: G.otherRoles,
							onClick: e => d(e),
							children: (0, r.jsx)(C.ua7, {
								text: q.intl.string(q.t.DY6n4u),
								children: e => (0, r.jsxs)(C.Text, W(Y({
									variant: "text-xs/medium",
									color: "header-primary"
								}, e), {
									children: ["+", s]
								}))
							})
						}), m && (0, r.jsx)(C.ua7, {
							text: q.intl.string(q.t.h3pSLS),
							children: e => {
								let {
									onMouseEnter: t,
									onMouseLeave: n
								} = e;
								return (0, r.jsx)(C.P3F, {
									className: i()(G.otherRoles, G.addRoleContainer),
									onClick: c,
									onMouseEnter: t,
									onMouseLeave: n,
									children: (0, r.jsx)(C.qJs, {
										size: "custom",
										color: "currentColor",
										className: G.addRoleIcon,
										width: 16,
										height: 16
									})
								})
							}
						})]
					})
				}),
				K = l.memo(function(e) {
					var t;
					let {
						member: n,
						user: l
					} = e, o = (0, O.X7)(null == n ? void 0 : n.guildId, null == n ? void 0 : n.userId, null == n ? void 0 : n.colorStrings);
					return null == l || null == n ? null : (0, r.jsxs)("div", {
						className: G.memberNameContainer,
						children: [(0, r.jsx)("div", {
							className: G.memberAvatar,
							children: (0, r.jsx)(m.Z, {
								user: l
							})
						}), (0, r.jsx)("div", {
							className: G.memberName,
							children: (0, r.jsx)(C.Text, {
								variant: "text-sm/medium",
								children: (0, r.jsxs)("div", {
									className: G.nameContainer,
									children: [(0, r.jsx)(C.PUh, {
										name: Z.ZP.getName(n.guildId, null, l),
										color: null != (t = n.colorString) ? t : void 0,
										roleColors: o,
										className: G.memberNameText
									}), (0, r.jsx)(v.ZP, {
										primaryGuild: null == l ? void 0 : l.primaryGuild,
										userId: null == l ? void 0 : l.id,
										contextGuildId: n.guildId,
										containerClassName: G.memberClanTag
									})]
								})
							})
						}), (0, r.jsx)("div", {
							className: G.memberGlobalName,
							children: (0, r.jsx)(C.Text, {
								variant: "text-xs/normal",
								color: "header-secondary",
								tag: "span",
								children: L.ZP.getUserTag(l)
							})
						})]
					})
				});

			function Q(e) {
				return {
					short: null == e ? null : (0, I.fv)(e, I.jq.JOINED_AT),
					long: new Date(null != e ? e : 0).toLocaleDateString(q.intl.currentLocale, I.UG)
				}
			}

			function $(e) {
				let {
					member: t,
					showLongDate: n,
					isSortedBy: o
				} = e, [i, a] = l.useState(null);
				l.useEffect(() => {
					a(Q(t.joinedAtTimestamp))
				}, [t.joinedAtTimestamp]), (0, b.Z)(() => {
					a(Q(t.joinedAtTimestamp))
				}, 1e4);
				let s = o ? "text-brand" : "text-default";
				return (null == i ? void 0 : i.short) == null ? null : n ? (0, r.jsx)("div", {
					className: G.__invalid_joinedAtContainer,
					children: (0, r.jsx)(C.Text, {
						variant: "text-sm/medium",
						color: s,
						children: i.long
					})
				}) : (0, r.jsx)("div", {
					className: G.__invalid_joinedAtContainer,
					children: (0, r.jsx)(C.ua7, {
						align: "left",
						text: i.long,
						children: e => (0, r.jsx)(C.Text, W(Y({}, e), {
							variant: "text-sm/medium",
							color: s,
							children: i.short
						}))
					})
				})
			}
			let ee = l.memo(function(e) {
					let {
						member: t,
						showLongDate: n,
						isSortedBy: o
					} = e, {
						accountCreationDateShort: i,
						accountCreationDateLong: a
					} = l.useMemo(() => {
						let e = R.default.extractTimestamp(t.userId);
						return {
							accountCreationDateShort: (0, I.fv)(e, I.jq.ACCOUNT_AGE),
							accountCreationDateLong: new Date(e).toLocaleDateString(q.intl.currentLocale, I.I)
						}
					}, [t.userId]), s = o ? "text-brand" : "text-default";
					return n ? (0, r.jsx)(C.Text, {
						variant: "text-sm/medium",
						color: s,
						children: a
					}) : (0, r.jsx)(C.ua7, {
						align: "left",
						text: a,
						children: e => (0, r.jsx)(C.Text, W(Y({}, e), {
							variant: "text-sm/medium",
							color: s,
							children: i
						}))
					})
				}),
				et = l.memo(function(e) {
					let {
						member: t,
						user: n,
						highestRole: o,
						isHoldingAdvancedInfoKey: a,
						onOpenModerationMenu: s,
						onOpenMemberView: d,
						compact: m,
						hasModViewPanelAccess: b
					} = e, p = (0, u.e7)([w.Z, H.Z], () => w.Z.can(U.Plq.MANAGE_GUILD, H.Z.getGuild(t.guildId)), [t.guildId]), {
						selectedUserIds: f,
						addUsers: h,
						removeUser: j
					} = (0, k.Z)(t.guildId), g = (0, M.xC)(t.guildId), x = (0, M.hB)(t.guildId, g, t.userId), v = (0, u.e7)([V.Z], () => {
						var e;
						return null != (e = V.Z.getSearchStateByGuildId(t.guildId).selectedSort) ? e : P.d$.ORDER_BY_UNSPECIFIED
					}, [t.guildId], c()), y = l.useCallback(e => {
						e.stopPropagation(), e.preventDefault(), null != t && x && (f.has(t.userId) ? j(t.userId) : h([t.userId]))
					}, [h, x, t, j, f]), O = v === P.d$.ORDER_BY_GUILD_JOINED_AT_ASC, _ = v === P.d$.ORDER_BY_USER_ID_ASC || v === P.d$.ORDER_BY_USER_ID_DESC;
					return (0, r.jsxs)(r.Fragment, {
						children: [g && (0, r.jsx)(C.ua7, {
							tooltipClassName: G.disabledActionTooltip,
							shouldShow: !x,
							text: q.intl.string(q.t["Se4c7+"]),
							children: e => (0, r.jsx)("td", W(Y({}, e), {
								children: (0, r.jsx)("div", {
									className: i()(G.__invalid_checkbox, G.xsmallCol),
									children: (0, r.jsx)(C.P3F, {
										onClick: y,
										children: (0, r.jsx)(C.XZJ, {
											type: C.XZJ.Types.INVERTED,
											value: f.has(t.userId),
											disabled: !x
										})
									})
								})
							}))
						}), (0, r.jsx)("td", {
							className: i()({
								[G.compact]: m
							}),
							children: (0, r.jsx)(K, {
								member: t,
								user: n
							})
						}), (0, r.jsx)("td", {
							className: i()(G.smallCol, {
								[G.compact]: m
							}),
							children: (0, r.jsx)($, {
								showLongDate: a,
								member: t,
								isSortedBy: O
							})
						}), (0, r.jsx)("td", {
							className: i()(G.smallCol, {
								[G.compact]: m
							}),
							children: (0, r.jsx)(ee, {
								showLongDate: a,
								member: t,
								isSortedBy: _
							})
						}), p && (0, r.jsx)("td", {
							className: i()(G.smallCol, {
								[G.compact]: m
							}),
							children: (0, r.jsx)(T.ZP, {
								userId: t.userId,
								guildId: t.guildId
							})
						}), (0, r.jsx)("td", {
							className: i()(G.mediumCol, {
								[G.compact]: m
							}),
							children: (0, r.jsx)(J, {
								member: t,
								highestRole: o
							})
						}), (0, r.jsx)("td", {
							className: i()(G.smallCol, {
								[G.compact]: m
							}),
							children: (0, r.jsx)(X, {
								member: t
							})
						}), (0, r.jsx)("td", {
							className: i()(G.smallCol, {
								[G.compact]: m
							}),
							children: (0, r.jsxs)("div", {
								className: G.actionCell,
								children: [(0, r.jsx)(C.ua7, {
									text: b ? q.intl.string(q.t.nHfkf3) : q.intl.string(q.t.uTre29),
									children: e => {
										let {
											onMouseEnter: t,
											onMouseLeave: n
										} = e;
										return (0, r.jsx)(C.P3F, {
											onMouseEnter: t,
											onMouseLeave: n,
											onClick: d,
											className: G.button,
											children: b ? (0, r.jsx)(D.Z, {
												width: en,
												height: en
											}) : (0, r.jsx)(C.tBG, {
												size: "custom",
												color: "currentColor",
												width: en,
												height: en
											})
										})
									}
								}), (0, r.jsx)(C.ua7, {
									text: q.intl.string(q.t.x8Nn4O),
									children: e => {
										let {
											onMouseEnter: t,
											onMouseLeave: n
										} = e;
										return (0, r.jsx)(C.P3F, {
											onMouseEnter: t,
											onMouseLeave: n,
											onClick: s,
											className: G.button,
											children: (0, r.jsx)(C.Huf, {
												size: "custom",
												color: "currentColor",
												width: en,
												height: en
											})
										})
									}
								})]
							})
						})]
					})
				}),
				en = 18,
				er = ["sourceInviteCode", "joinSourceType", "inviterId", "integrationType", "joinedAt", "joinedAtTimestamp"],
				el = l.memo(function(e) {
					let {
						userId: t,
						guildId: n,
						style: o,
						rowSelected: s,
						isLoading: d = !1,
						isHoldingAdvancedInfoKey: C = !1,
						compact: m = !1
					} = e, {
						analyticsLocations: b
					} = (0, p.ZP)(), f = (0, u.e7)([_.ZP], () => _.ZP.getGuildSidebarState(n), [n]), h = (null == f ? void 0 : f.details.userId) === t, j = (0, u.e7)([V.Z], () => V.Z.getEnhancedMember(n, t), [n, t]), v = (0, A.zq)(j), y = (0, u.e7)([N.default], () => N.default.getUser(t), [t]), O = (0, x.m)(n), H = (0, A.RN)(null != j ? j : void 0), w = l.useCallback(e => {
						e.stopPropagation(), e.preventDefault(), H(e)
					}, [H]), S = l.useCallback(e => {
						e.stopPropagation(), e.preventDefault(), null != j && (0, A.RE)(j, b)
					}, [j, b]), D = l.useCallback(e => {
						e.stopPropagation(), e.preventDefault(), null != j && (O ? (0, g.r)(j.guildId, j.userId, F.oC.MEMBER_SAFETY, {
							modViewPanel: z.k.INFO
						}) : (0, A.RE)(j, b))
					}, [j, b, O]), Z = l.useCallback((e, t) => c()((0, a.omit)(e, er), (0, a.omit)(t, er)), []);
					return null == j ? null : (0, r.jsx)(E.Z, {
						role: "row",
						value: j,
						style: o,
						className: i()(G.roundedRow, G.memberRowContainer, s && G.selected, h && G.memberSelected, d && G.loading),
						equalityFn: Z,
						onClick: S,
						onContextMenu: w,
						children: (0, r.jsx)(et, {
							member: j,
							user: y,
							highestRole: v,
							isHoldingAdvancedInfoKey: C,
							onOpenModerationMenu: w,
							onOpenMemberView: D,
							compact: m,
							hasModViewPanelAccess: O
						})
					})
				})
		},
		41586: function(e, t, n) {
			n.d(t, {
				Z: () => N
			}), n(388685), n(781311);
			var r = n(255367),
				l = n(73800),
				o = n(954955),
				i = n.n(o),
				a = n(498607),
				s = n.n(a),
				c = n(149765),
				u = n(399606),
				d = n(780384),
				C = n(755721),
				m = n(481060),
				b = n(102560),
				p = n(210887),
				f = n(496675),
				h = n(910693),
				j = n(588215),
				g = n(893966),
				x = n(527379),
				v = n(855935),
				y = n(231338),
				O = n(388032),
				_ = n(630620);

			function H(e) {
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
			let N = l.forwardRef(function(e, t) {
				let {
					guild: n
				} = e, o = l.useRef(null), a = (0, u.e7)([g.Z], () => g.Z.hasDefaultSearchStateByGuildId(n.id), [n.id]), N = (0, u.e7)([p.Z], () => (0, d.wj)(p.Z.theme)), S = (0, u.e7)([f.Z], () => f.Z.can(c.$e(y.Pl.MANAGE_GUILD, y.Pl.KICK_MEMBERS), n)), D = l.useCallback(() => {
					null != n && S && (0, m.ZDy)(async () => e => (0, r.jsx)(b.Z, w(H({}, e), {
						guild: n
					})))
				}, [n, S]), Z = (0, u.e7)([g.Z], () => g.Z.getSearchStateByGuildId(n.id), [n.id], s()), R = (0, h.gm)(n.id), [L, I] = l.useState(Z.query), P = null != Z.selectedSort && Z.selectedSort !== j.d$.ORDER_BY_GUILD_JOINED_AT_DESC && Z.selectedSort !== j.d$.ORDER_BY_UNSPECIFIED, M = l.useCallback(e => {
					let t = e.trim();
					t.length > 0 && R(), (0, x.Dr)(n.id, {
						query: t
					})
				}, [n.id, R]), V = l.useMemo(() => i()(M, 300), [M]), E = l.useCallback(e => {
					I(e), V(e)
				}, [V]), T = l.useCallback(() => {
					I(""), M("")
				}, [M]);
				return l.useImperativeHandle(t, () => ({
					resetSearchText() {
						I("")
					}
				})), (0, r.jsxs)("div", {
					className: _.searchHeaderContainer,
					children: [(0, r.jsx)("div", {
						className: _.searchHeader,
						children: a ? (0, r.jsx)(m.X6q, {
							variant: "heading-md/medium",
							children: O.intl.string(O.t.y12ALC)
						}) : (0, r.jsx)(m.X6q, {
							variant: "heading-md/medium",
							children: O.intl.string(O.t.BUqwKy)
						})
					}), (0, r.jsx)("div", {
						className: _.searchInput,
						children: (0, r.jsx)("div", {
							className: _.searchHeader,
							children: (0, r.jsx)(m.E1j, {
								className: _.searchBar,
								query: L,
								placeholder: O.intl.string(O.t.NVoAMz),
								onChange: E,
								onClear: T,
								autoComplete: "off",
								inputProps: {
									autoCapitalize: "none",
									autoCorrect: "off",
									spellCheck: "false"
								}
							})
						})
					}), (0, r.jsx)("div", {
						children: (0, r.jsx)(m.yRy, {
							targetElementRef: o,
							animation: m.yRy.Animation.FADE,
							position: "bottom",
							spacing: 4,
							align: "left",
							renderPopout: () => (0, r.jsx)(v.Z, {
								guildId: n.id,
								onClose: void 0
							}),
							children: e => {
								var {
									onClick: t
								} = e, n = function(e, t) {
									if (null == e) return {};
									var n, r, l = function(e, t) {
										if (null == e) return {};
										var n, r, l = {},
											o = Object.keys(e);
										for (r = 0; r < o.length; r++) n = o[r], t.indexOf(n) >= 0 || (l[n] = e[n]);
										return l
									}(e, t);
									if (Object.getOwnPropertySymbols) {
										var o = Object.getOwnPropertySymbols(e);
										for (r = 0; r < o.length; r++) n = o[r], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (l[n] = e[n])
									}
									return l
								}(e, ["onClick"]);
								return (0, r.jsx)(C.zx, w(H({}, n), {
									buttonRef: o,
									onClick: t,
									"aria-label": O.intl.string(O.t.XvNMNj),
									color: N ? C.zx.Colors.PRIMARY : C.zx.Colors.TRANSPARENT,
									look: N ? C.zx.Looks.FILLED : C.zx.Looks.OUTLINED,
									size: C.zx.Sizes.SMALL,
									children: (0, r.jsxs)("div", {
										className: _.sortButton,
										children: [(0, r.jsx)(m.uVW, {
											size: "xs",
											color: P ? m.TVs.colors.INTERACTIVE_ACTIVE.css : m.TVs.colors.HEADER_SECONDARY.css
										}), (0, r.jsx)(m.Text, {
											variant: "text-sm/medium",
											color: P ? "interactive-active" : "header-secondary",
											className: _.sortText,
											children: O.intl.string(O.t.XvNMNj)
										})]
									})
								}))
							}
						})
					}), (0, r.jsx)("div", {
						className: _.tableOptions,
						children: S && (0, r.jsx)("div", {
							"data-button-hoisted-classname-wrapper": !0,
							className: _.__invalid_pruneButton,
							children: (0, r.jsx)(m.zxk, {
								variant: "critical-secondary",
								size: "sm",
								text: O.intl.string(O.t["2mIlKS"]),
								onClick: D,
								"aria-label": O.intl.string(O.t.zbyz7u)
							})
						})
					})]
				})
			})
		},
		855935: function(e, t, n) {
			n.d(t, {
				Z: () => p
			});
			var r = n(255367),
				l = n(73800),
				o = n(498607),
				i = n.n(o),
				a = n(399606),
				s = n(481060),
				c = n(588215),
				u = n(893966),
				d = n(527379),
				C = n(981631),
				m = n(388032);
			let b = [c.d$.ORDER_BY_GUILD_JOINED_AT_DESC, c.d$.ORDER_BY_GUILD_JOINED_AT_ASC, c.d$.ORDER_BY_USER_ID_DESC, c.d$.ORDER_BY_USER_ID_ASC];

			function p(e) {
				let {
					guildId: t,
					onClose: n
				} = e, o = (0, a.e7)([u.Z], () => u.Z.getSearchStateByGuildId(t), [t], i()), p = l.useCallback(e => {
					var n, r;
					(0, d.Dr)(t, (n = function(e) {
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
					}({}, o), r = r = {
						selectedSort: e
					}, Object.getOwnPropertyDescriptors ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(r)) : (function(e, t) {
						var n = Object.keys(e);
						if (Object.getOwnPropertySymbols) {
							var r = Object.getOwnPropertySymbols(e);
							n.push.apply(n, r)
						}
						return n
					})(Object(r)).forEach(function(e) {
						Object.defineProperty(n, e, Object.getOwnPropertyDescriptor(r, e))
					}), n))
				}, [t, o]);
				return (0, r.jsx)(s.v2r, {
					navId: "members-table-sort-menu",
					onClose: () => {
						null == n || n()
					},
					"aria-label": m.intl.string(m.t["u/7RdX"]),
					onSelect: C.dG4,
					children: (0, r.jsx)(s.kSQ, {
						children: b.map(e => {
							var t;
							return (0, r.jsx)(s.k5B, {
								id: "members-table-sort-".concat(e),
								label: function(e) {
									switch (e) {
										case c.d$.ORDER_BY_GUILD_JOINED_AT_DESC:
											return m.intl.string(m.t.V7zCwM);
										case c.d$.ORDER_BY_GUILD_JOINED_AT_ASC:
											return m.intl.string(m.t.l2Zaen);
										case c.d$.ORDER_BY_USER_ID_DESC:
											return m.intl.string(m.t.xMA6RE);
										case c.d$.ORDER_BY_USER_ID_ASC:
											return m.intl.string(m.t.bUKkZ2);
										default:
											return null
									}
								}(e),
								checked: (t = o.selectedSort) === c.d$.ORDER_BY_UNSPECIFIED || null == t ? e === c.d$.ORDER_BY_GUILD_JOINED_AT_DESC : e === t,
								disabled: !1,
								action: () => p(e),
								group: "members-table-sort"
							}, "members-table-sort-".concat(e))
						})
					})
				})
			}
		},
		852479: function(e, t, n) {
			n.d(t, {
				Z: () => h
			});
			var r = n(255367),
				l = n(73800),
				o = n(913527),
				i = n.n(o),
				a = n(399606),
				s = n(755721),
				c = n(481060),
				u = n(740900),
				d = n(241559),
				C = n(893966),
				m = n(527379),
				b = n(388032),
				p = n(350381),
				f = n(93163);

			function h(e) {
				let {
					guild: t,
					onSubmit: o
				} = e, h = (0, a.e7)([C.Z], () => C.Z.getMembersCountByGuildId(t.id, u.R_.NEW_GUILD_MEMBER), [t.id]), j = (0, a.e7)([C.Z], () => {
					let e = C.Z.getNewMemberTimestamp(t.id);
					return i()(e).format("h:mm A")
				}, [t.id]), g = (0, a.e7)([C.Z], () => C.Z.hasDefaultSearchStateByGuildId(t.id), [t.id]), x = l.useCallback(() => {
					(0, m.YO)(t.id), null == o || o()
				}, [t.id, o]), v = l.useCallback(() => {
					g ? x() : (0, c.ZDy)(async () => {
						let {
							default: e
						} = await n.e("24478").then(n.bind(n, 319481));
						return t => {
							var n, l;
							return (0, r.jsx)(e, (n = function(e) {
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
							}({}, t), l = l = {
								onConfirm: x
							}, Object.getOwnPropertyDescriptors ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(l)) : (function(e, t) {
								var n = Object.keys(e);
								if (Object.getOwnPropertySymbols) {
									var r = Object.getOwnPropertySymbols(e);
									n.push.apply(n, r)
								}
								return n
							})(Object(l)).forEach(function(e) {
								Object.defineProperty(n, e, Object.getOwnPropertyDescriptor(l, e))
							}), n))
						}
					})
				}, [x, g]), y = new Intl.NumberFormat(b.intl.currentLocale).format(h), O = (0, d.nX)(t.id), _ = (0, d.xC)(t.id), H = l.useMemo(() => 1 + +!!O + +!!_, [O, _]);
				return 0 === h ? null : (0, r.jsxs)("tr", {
					className: f.newMembersNotice,
					onClick: v,
					children: [(0, r.jsx)("td", {
						colSpan: 3,
						children: (0, r.jsx)(c.Text, {
							variant: "text-sm/normal",
							color: "always-white",
							children: b.intl.format(b.t["/i5uJy"], {
								count: y,
								date: j
							})
						})
					}), (0, r.jsx)("td", {
						colSpan: H
					}), (0, r.jsx)("td", {
						colSpan: 2,
						children: (0, r.jsx)("div", {
							className: p.actionCell,
							children: (0, r.jsx)(s.zx, {
								size: s.zx.Sizes.SMALL,
								color: s.zx.Colors.TRANSPARENT,
								look: s.zx.Looks.LINK,
								className: f.memberNoticeActionButton,
								children: (0, r.jsxs)(c.Text, {
									variant: "text-sm/normal",
									color: "always-white",
									className: f.memberNoticeAction,
									children: [(0, r.jsx)("div", {
										children: b.intl.string(b.t.rkyOzM)
									}), (0, r.jsx)(c.tBG, {
										size: "custom",
										color: "currentColor",
										width: 20,
										height: 20,
										className: f.memberNoticeActionIcon
									})]
								})
							})
						})
					})]
				})
			}
		},
		596482: function(e, t, n) {
			n.d(t, {
				Z: () => x
			});
			var r = n(255367),
				l = n(73800),
				o = n(722770),
				i = n(755721),
				a = n(481060),
				s = n(100527),
				c = n(666657),
				u = n(533244),
				d = n(664452),
				C = n(226192),
				m = n(223606),
				b = n(388032),
				p = n(708210);

			function f(e) {
				var t;
				if (null == (null != (t = e.dmsDisabledUntil) ? t : e.invitesDisabledUntil)) return "";
				let n = null != e.dmsDisabledUntil,
					r = null != e.invitesDisabledUntil;
				switch (!0) {
					case n && r:
						return b.intl.string(b.t.CEygFx);
					case n:
						return b.intl.string(b.t.Wmbjc3);
					case r:
						return b.intl.string(b.t.Q1QrAg);
					default:
						return ""
				}
			}

			function h(e) {
				var t;
				let {
					onHandleEnableLockdown: n,
					onHandleReportFalseAlarm: l,
					incidentData: s
				} = e, c = null != (t = s.raidDetectedAt) ? t : s.dmSpamDetectedAt;
				return (0, r.jsxs)("div", {
					className: p.subheaderContainer,
					children: [(0, r.jsxs)("div", {
						className: p.subHeaderTextContainer,
						children: [(0, r.jsx)(a.b7C, {
							size: "md",
							className: p.shieldIcon,
							color: o.Z.RED_345
						}), (0, r.jsxs)("div", {
							className: p.subHeaderText,
							children: [(0, r.jsx)(a.X6q, {
								className: p.heading,
								variant: "heading-lg/semibold",
								color: "text-danger",
								children: (0, u.kk)(s) ? b.intl.string(b.t.raRxxc) : b.intl.string(b.t["4nbAtb"])
							}), (0, r.jsx)(a.Text, {
								className: p.tagLine,
								variant: "text-sm/medium",
								children: b.intl.format(b.t["4QIIZm"], {
									dateTime: new Date(null != c ? c : "").toLocaleString(b.intl.currentLocale, u.pQ)
								})
							})]
						})]
					}), (0, r.jsxs)("div", {
						className: p.buttonContainer,
						children: [(0, r.jsx)(i.zx, {
							className: p.reportButton,
							color: i.zx.Colors.TRANSPARENT,
							onClick: l,
							children: (0, r.jsx)(a.Text, {
								variant: "text-sm/semibold",
								children: b.intl.string(b.t.ISiXbW)
							})
						}), (0, r.jsx)(a.gtL, {
							className: p.__invalid_lockdownButton,
							color: i.zx.Colors.RED,
							onClick: n,
							children: (0, r.jsxs)("div", {
								className: p.lockdownButtonInnerRaidDetected,
								children: [(0, r.jsx)(a.mBM, {
									size: "xs",
									color: "currentColor",
									className: p.lockIcon
								}), (0, r.jsx)(a.Text, {
									className: p.lockdownButtonText,
									variant: "text-sm/semibold",
									children: b.intl.string(b.t.UgXhdn)
								})]
							})
						})]
					})]
				})
			}

			function j(e) {
				let {
					onHandleEnableLockdown: t,
					incidentData: n,
					guildName: l
				} = e;
				return (0, r.jsxs)("div", {
					className: p.subheaderContainer,
					children: [(0, r.jsxs)("div", {
						className: p.subHeaderTextContainer,
						children: [(0, r.jsx)(a.b7C, {
							size: "md",
							className: p.shieldIcon,
							color: o.Z.BRAND_360
						}), (0, r.jsxs)("div", {
							className: p.subHeaderText,
							children: [(0, r.jsx)(a.X6q, {
								className: p.heading,
								variant: "heading-lg/semibold",
								color: "text-brand",
								children: f(n)
							}), (0, r.jsx)(a.Text, {
								className: p.tagLine,
								variant: "text-sm/medium",
								children: (0, u.OY)(n, l)
							})]
						})]
					}), (0, r.jsx)(i.zx, {
						className: p.lockdownNoticeButton,
						color: i.zx.Colors.BRAND,
						onClick: t,
						children: (0, r.jsxs)("div", {
							className: p.lockdownButtonInner,
							children: [(0, r.jsx)(a.mBM, {
								size: "xs",
								color: "currentColor",
								className: p.lockIcon
							}), (0, r.jsx)(a.Text, {
								className: p.lockdownButtonText,
								variant: "text-sm/semibold",
								children: b.intl.string(b.t.e1bMNT)
							})]
						})
					})]
				})
			}

			function g(e) {
				let {
					onHandleEnableLockdown: t,
					onHandleReportFalseAlarm: n,
					incidentData: l,
					guildName: s
				} = e;
				return (0, r.jsxs)("div", {
					className: p.subheaderContainer,
					children: [(0, r.jsxs)("div", {
						className: p.subHeaderTextContainer,
						children: [(0, r.jsx)(a.b7C, {
							size: "md",
							className: p.shieldIcon,
							color: o.Z.BRAND_360
						}), (0, r.jsxs)("div", {
							className: p.subHeaderText,
							children: [(0, r.jsx)(a.X6q, {
								className: p.heading,
								variant: "heading-lg/semibold",
								color: "text-brand",
								children: f(l)
							}), (0, r.jsx)(a.Text, {
								className: p.tagLine,
								variant: "text-sm/medium",
								children: (0, u.OY)(l, s)
							})]
						})]
					}), (0, r.jsxs)("div", {
						className: p.buttonContainer,
						children: [(0, r.jsx)(i.zx, {
							className: p.reportButton,
							color: i.zx.Colors.TRANSPARENT,
							onClick: n,
							children: (0, r.jsx)(a.Text, {
								variant: "text-sm/semibold",
								children: b.intl.string(b.t.ISiXbW)
							})
						}), (0, r.jsx)(i.zx, {
							className: p.__invalid_lockdownButton,
							color: i.zx.Colors.BRAND,
							onClick: t,
							children: (0, r.jsxs)("div", {
								className: p.lockdownButtonInnerRaidDetected,
								children: [(0, r.jsx)(a.mBM, {
									size: "xs",
									color: "currentColor",
									className: p.lockIcon
								}), (0, r.jsx)(a.Text, {
									className: p.lockdownButtonText,
									variant: "text-sm/semibold",
									children: b.intl.string(b.t.e1bMNT)
								})]
							})
						})]
					})]
				})
			}

			function x(e) {
				let {
					guild: t,
					incidentData: n,
					isUnderLockdown: o,
					isRaidDetected: i
				} = e, b = l.useCallback(() => {
					(0, a.ZDy)(async () => {
						let e = {
							source: c.Zu.MEMBER_SAFETY_PAGE,
							location: s.Z.MEMBER_SAFETY_PAGE,
							alertType: (0, u.T1)(n)
						};
						return n => {
							var l, o;
							return (0, r.jsx)(d.default, (l = function(e) {
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
								guildId: t.id,
								analyticsData: e
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
						}
					})
				}, [t.id, n]), p = l.useCallback(() => {
					let e = m.Z.getLastIncidentAlertMessage(t.id);
					(0, C.kW)(e, t.id)
				}, [t.id]), f = (() => {
					switch (!0) {
						case i && o:
							return 3;
						case i:
							return 1;
						case o:
							return 2;
						default:
							return 0
					}
				})();
				if (null == t || null == n) return null;
				switch (f) {
					case 1:
						return (0, r.jsx)(h, {
							onHandleEnableLockdown: b,
							onHandleReportFalseAlarm: p,
							incidentData: n
						});
					case 2:
						return (0, r.jsx)(j, {
							onHandleEnableLockdown: b,
							incidentData: n,
							guildName: t.name
						});
					case 3:
						return (0, r.jsx)(g, {
							onHandleEnableLockdown: b,
							onHandleReportFalseAlarm: p,
							incidentData: n,
							guildName: t.name
						});
					default:
						return null
				}
			}
		},
		918192: function(e, t, n) {
			n.d(t, {
				Z: () => l
			});
			var r = n(255367);

			function l(e) {
				let {
					width: t = 188,
					height: n = 90
				} = e;
				return (0, r.jsxs)("svg", {
					width: t,
					height: n,
					viewBox: "0 0 188 90",
					fill: "none",
					xmlns: "http://www.w3.org/2000/svg",
					children: [(0, r.jsx)("path", {
						fillRule: "evenodd",
						clipRule: "evenodd",
						d: "M146.377 16.3465V16.3479C146.377 23.7151 152.36 29.6875 159.74 29.6875H169.971C174.728 29.6875 178.583 33.5365 178.583 38.2845C178.583 43.0321 174.728 46.8816 169.971 46.8816H155.326C149.912 46.8816 145.524 51.2619 145.524 56.6659V56.6677C145.524 62.0722 149.912 66.453 155.326 66.453H175.988C182.378 66.453 187.556 71.6229 187.556 78.0004C187.556 84.3783 182.378 89.5486 175.988 89.5486H21.5273C11.8911 89.5486 4.0788 81.7501 4.0788 72.1308V72.1268C4.0788 62.5071 11.8911 54.709 21.5273 54.709H56.4707C63.9585 54.709 70.0282 48.6495 70.0282 41.1753V16.5405C70.0282 9.06585 76.0983 3.00684 83.5856 3.00684H133.013C140.394 3.00684 146.377 8.97923 146.377 16.3465Z",
						fill: "#4F545C",
						fillOpacity: "0.3"
					}), (0, r.jsx)("path", {
						fillRule: "evenodd",
						clipRule: "evenodd",
						d: "M105.198 50.9649V54.4836C105.198 57.309 103.815 59.8118 101.696 61.3745C101.521 64.4732 99.6978 67.1348 97.0816 68.4932L92.1707 89.0977H106.678V88.657C106.678 87.0983 107.845 85.8099 109.352 85.6078L115.146 61.2937C114.473 61.1056 113.976 60.4961 113.976 59.7676V51.7859C113.976 51.2121 114.285 50.7127 114.745 50.4325C114.954 50.2133 115.248 50.0752 115.576 50.0752H117.82L118.882 45.6186H117.988C117.749 45.6186 117.515 45.5446 117.32 45.4066L117.109 45.2568C117.104 45.2532 117.098 45.2509 117.093 45.2478L110.84 41.2563C110.379 40.9626 110.104 40.4618 110.104 39.9178C110.104 39.3728 110.379 38.8721 110.84 38.578L117.093 34.5873C117.098 34.5842 117.103 34.5819 117.108 34.5788L117.161 34.5413L111.167 9.39355L103.639 40.9806C103.581 41.2229 103.337 41.3736 103.095 41.3149L101.721 47.0789V47.2774C103.657 47.396 105.198 49.002 105.198 50.9649Z",
						fill: "#36393E"
					}), (0, r.jsx)("path", {
						fillRule: "evenodd",
						clipRule: "evenodd",
						d: "M15.8539 89.0976H21.6891L18.7715 76.8564L15.8539 89.0976Z",
						fill: "#36393E"
					}), (0, r.jsx)("path", {
						fillRule: "evenodd",
						clipRule: "evenodd",
						d: "M43.6508 50.158C46.252 47.5614 47.0794 38.2349 47.2457 35.9468C44.9532 36.1123 35.6103 36.9383 33.009 39.535C31.5082 41.0327 30.707 43.1318 30.8191 45.2466C30.8995 46.7552 31.3605 49.0045 32.4035 50.1558C33.6083 51.4848 36.5534 52.3581 38.3299 52.3581C40.3396 52.3581 42.2295 51.5768 43.6508 50.158Z",
						fill: "#72767D"
					}), (0, r.jsx)("path", {
						fillRule: "evenodd",
						clipRule: "evenodd",
						d: "M168.797 65.871C170.028 63.8681 171.499 61.9932 173.206 60.2893L173.845 60.9272C172.125 62.6437 170.647 64.5371 169.426 66.5658C172.365 69.4331 177.09 69.4155 180.003 66.5076C182.606 63.91 183.432 54.584 183.598 52.2959C181.307 52.4615 171.963 53.2875 169.362 55.8846C166.631 58.6102 166.445 62.9248 168.797 65.871Z",
						fill: "#4F545C"
					}), (0, r.jsx)("path", {
						fillRule: "evenodd",
						clipRule: "evenodd",
						d: "M152.509 89.0845C152.509 89.0827 152.509 89.0809 152.509 89.0791C152.509 87.8282 153.266 86.7513 154.346 86.2777C154.052 86.1545 153.729 86.0859 153.391 86.0859H151.957C150.592 86.0859 149.481 87.1948 149.481 88.5576V89.0724L152.509 89.0845Z",
						fill: "#72767D"
					}), (0, r.jsx)("path", {
						fillRule: "evenodd",
						clipRule: "evenodd",
						d: "M111.052 86.4795H109.762C108.559 86.4795 107.581 87.4562 107.581 88.6571V89.1204L113.233 89.0978V88.6571C113.233 87.4562 112.255 86.4795 111.052 86.4795Z",
						fill: "#36393E"
					}), (0, r.jsx)("path", {
						fillRule: "evenodd",
						clipRule: "evenodd",
						d: "M159.276 86.9219H155.573C154.381 86.9219 153.412 87.89 153.412 89.0791L161.418 89.0976C161.429 89.0976 161.437 89.0895 161.437 89.0791C161.437 87.89 160.468 86.9219 159.276 86.9219Z",
						fill: "#4F545C"
					}), (0, r.jsx)("path", {
						fillRule: "evenodd",
						clipRule: "evenodd",
						d: "M55.305 83.6938V88.0634C55.305 88.8096 55.9133 89.4168 56.6608 89.4168H57.8267C58.5742 89.4168 59.1825 88.8096 59.1825 88.0634V83.6938H55.305Z",
						fill: "#72767D"
					}), (0, r.jsx)("path", {
						fillRule: "evenodd",
						clipRule: "evenodd",
						d: "M63.9 69.4608C59.1576 69.4608 55.3137 65.6236 55.3137 60.8895V60.2625C53.9511 60.1204 52.7667 59.371 52.0377 58.2915H48.4269C44.2761 58.2915 40.9107 61.651 40.9107 65.7946V88.0633C40.9107 88.8108 41.5176 89.4166 42.2664 89.4166H43.4319C44.1807 89.4166 44.7876 88.8108 44.7876 88.0633V84.1448C44.7876 83.3973 45.395 82.7915 46.1434 82.7915H66.6992C66.1312 82.2289 65.7778 81.4512 65.7778 80.5913V74.2278C65.7778 73.9788 65.9802 73.7767 66.2297 73.7767V69.4608H63.9Z",
						fill: "#4F545C"
					}), (0, r.jsx)("path", {
						fillRule: "evenodd",
						clipRule: "evenodd",
						d: "M84.2862 88.0634V82.9283C84.2862 82.7325 84.4145 82.5656 84.5985 82.4988C86.525 81.8023 87.8184 79.9716 87.8184 77.9402V69.4609H66.2308V73.7768C66.4803 73.7768 66.6827 73.9789 66.6827 74.2279V80.5915C66.6827 81.7996 67.6629 82.7835 68.8713 82.7916C69.1271 82.7934 69.3386 82.9878 69.3386 83.2427V88.0634C69.3386 88.8109 69.946 89.4167 70.6944 89.4167H71.8603C72.6091 89.4167 73.2161 88.8109 73.2161 88.0634V83.6938C73.2161 83.1958 73.6205 82.7916 74.1199 82.7916H79.5054C80.0043 82.7916 80.4092 83.1958 80.4092 83.6938V88.0634C80.4092 88.8109 81.0161 89.4167 81.7649 89.4167H82.9304C83.6793 89.4167 84.2862 88.8109 84.2862 88.0634Z",
						fill: "#72767D"
					}), (0, r.jsx)("path", {
						fillRule: "evenodd",
						clipRule: "evenodd",
						d: "M65.7753 37.9727H63.8985C59.9583 37.9727 56.7049 40.9505 56.2693 44.7693H60.3325C60.6746 41.6087 62.855 38.9832 65.7753 37.9727ZM60.2833 60.8895V60.2882H56.216V60.8895C56.216 65.1184 59.6624 68.5586 63.8986 68.5586H65.7759C62.5899 67.4565 60.2833 64.4322 60.2833 60.8895Z",
						fill: "#4F545C"
					}), (0, r.jsx)("path", {
						fillRule: "evenodd",
						clipRule: "evenodd",
						d: "M83.5973 54.4837V50.9649C83.5973 49.7762 84.2476 48.7341 85.2088 48.168H83.055C81.5099 48.168 80.2531 49.4225 80.2531 50.9649V54.4837C80.2531 58.7125 83.6994 62.1527 87.9357 62.1527H89.0894C85.9038 61.0506 83.5973 58.0263 83.5973 54.4837Z",
						fill: "#72767D"
					}), (0, r.jsx)("path", {
						fillRule: "evenodd",
						clipRule: "evenodd",
						d: "M55.7882 59.3861H62.3862C62.6357 59.3861 62.8381 59.5882 62.8381 59.8372C62.8381 60.0862 62.6357 60.2883 62.3862 60.2883H60.2852V60.8897C60.2852 64.4328 62.5923 67.4566 65.7778 68.5587H93.1359C96.9921 68.5587 100.184 65.7049 100.728 62.0035C99.5047 62.673 98.1029 63.0551 96.6125 63.0551H87.9357C83.2014 63.0551 79.3493 59.2101 79.3493 54.4837V50.965C79.3493 48.9255 81.0119 47.2658 83.055 47.2658H87.9357C88.1851 47.2658 88.3876 47.4679 88.3876 47.7169H92.7052C92.7052 47.4679 92.9077 47.2658 93.1571 47.2658H100.818V45.6422C100.818 41.5154 97.5339 38.1486 93.4387 37.988C93.3948 38.7459 93.1829 39.4632 92.8019 40.1182C92.6763 40.3343 92.3997 40.4074 92.1841 40.282C92.1765 40.2775 92.1724 40.2698 92.1652 40.2648C91.9641 40.545 91.734 40.8066 91.4755 41.048C91.4796 41.0525 91.4855 41.0543 91.4891 41.0593C91.6459 41.2528 91.6152 41.537 91.4209 41.6931C90.5532 42.3919 89.4302 42.9413 88.1743 43.2828C87.2357 43.5382 86.2622 43.669 85.3196 43.669C85.0674 43.669 84.8175 43.6595 84.5712 43.6406C80.165 43.304 76.1714 41.7166 73.0234 39.05C72.7992 38.8601 72.5701 38.6485 72.4508 38.334C72.4047 38.214 72.3875 38.0931 72.3821 37.9731H65.7774C62.8571 38.9837 60.6766 41.6087 60.3345 44.7697H62.3862C62.6357 44.7697 62.8381 44.9718 62.8381 45.2209C62.8381 45.4699 62.6357 45.672 62.3862 45.672H55.7882C53.7948 45.672 52.1729 47.2911 52.1729 49.281V55.7771C52.1729 57.767 53.7948 59.3861 55.7882 59.3861Z",
						fill: "#72767D"
					}), (0, r.jsx)("path", {
						fillRule: "evenodd",
						clipRule: "evenodd",
						d: "M55.3349 49.7317V55.3256C55.3349 56.5711 56.3468 57.5812 57.5945 57.5812H60.5772C61.0765 57.5812 61.481 57.177 61.481 56.679V48.3783C61.481 47.8803 61.0765 47.4761 60.5772 47.4761H57.5945C56.3468 47.4761 55.3349 48.4857 55.3349 49.7317Z",
						fill: "#4F545C"
					}), (0, r.jsx)("path", {
						fillRule: "evenodd",
						clipRule: "evenodd",
						d: "M90.8405 56.2317H93.4964C94.2272 56.2317 94.8246 56.8285 94.8246 57.5576C94.8246 58.2866 94.2272 58.883 93.4964 58.883H90.8405C90.1098 58.883 89.5123 58.2866 89.5123 57.5576C89.5123 56.8285 90.1098 56.2317 90.8405 56.2317ZM98.2628 56.2317H99.8562C100.587 56.2317 101.184 56.8285 101.184 57.5576C101.184 58.2866 100.587 58.883 99.8562 58.883H98.2628C97.5325 58.883 96.9346 58.2866 96.9346 57.5576C96.9346 56.8285 97.5325 56.2317 98.2628 56.2317ZM87.9338 48.1679H85.2069C84.2457 48.7341 83.5954 49.7762 83.5954 50.9653V54.4836C83.5954 58.0267 85.9024 61.0506 89.088 62.1527H96.611C100.847 62.1527 104.294 58.7129 104.294 54.4836V50.9653C104.294 49.4229 103.036 48.1679 101.491 48.1679H93.1557C92.9058 48.1679 92.7038 47.9663 92.7038 47.7168H88.3857C88.3857 47.9663 88.1837 48.1679 87.9338 48.1679Z",
						fill: "#B9BBBE"
					}), (0, r.jsx)("path", {
						fillRule: "evenodd",
						clipRule: "evenodd",
						d: "M90.8398 58.8832H93.4957C94.2264 58.8832 94.8239 58.2868 94.8239 57.5578C94.8239 56.8283 94.2264 56.2319 93.4957 56.2319H90.8398C90.109 56.2319 89.5116 56.8283 89.5116 57.5578C89.5116 58.2868 90.109 58.8832 90.8398 58.8832ZM98.2619 58.8832H99.8554C100.586 58.8832 101.184 58.2868 101.184 57.5578C101.184 56.8283 100.586 56.2319 99.8554 56.2319H98.2619C97.5317 56.2319 96.9338 56.8283 96.9338 57.5578C96.9338 58.2868 97.5317 58.8832 98.2619 58.8832Z",
						fill: "#4F545C"
					}), (0, r.jsx)("path", {
						fillRule: "evenodd",
						clipRule: "evenodd",
						d: "M71.1924 23.3472C71.4373 23.3946 71.5978 23.6305 71.5508 23.875C71.5096 24.0911 71.3203 24.2414 71.1079 24.2414C71.0799 24.2414 71.0514 24.2391 71.0234 24.2337C70.8801 24.2066 68.1917 23.6612 66.2064 21.3682C65.975 21.951 65.9669 22.4775 66.1843 22.9773C66.506 23.7153 67.3597 24.397 68.5261 24.8477C70.5114 25.6141 72.5947 25.7359 74.3924 25.1896C74.0232 24.8463 73.6092 24.3451 73.4325 24.1313L73.3783 24.0659C73.0493 23.672 72.7565 23.2647 72.4736 22.8704C71.8088 21.9438 71.1802 21.0686 70.1724 20.4948C69.5741 20.1542 68.912 19.9751 68.3069 19.9751C68.0087 19.9751 67.7244 20.0184 67.4686 20.1077C67.1785 20.2088 66.9277 20.364 66.7184 20.571C68.5288 22.8068 71.1599 23.3409 71.1924 23.3472Z",
						fill: "#72767D"
					}), (0, r.jsx)("path", {
						fillRule: "evenodd",
						clipRule: "evenodd",
						d: "M97.3711 8.98776C97.9392 9.3658 98.5574 9.42625 99.2583 9.17182C98.2451 8.24025 97.5993 7.17876 97.1994 6.30855C97.095 6.08209 97.1944 5.81412 97.4213 5.70991C97.6477 5.6057 97.9161 5.70495 98.0205 5.93187C98.4065 6.7705 99.0541 7.80357 100.079 8.67874C100.29 8.47664 100.452 8.23349 100.561 7.94883C100.854 7.18373 100.736 6.1457 100.253 5.23939C99.708 4.21625 98.8498 3.56393 97.9414 2.87236C97.5555 2.57868 97.156 2.27507 96.7714 1.93493L96.7063 1.87809C96.4976 1.69538 96.0081 1.26772 95.6371 0.895996C95.0758 2.66755 95.1359 4.74993 95.8459 6.75381C95.9272 6.98388 95.8088 7.2329 95.5833 7.32177C95.8708 7.9971 96.2666 8.63047 96.7714 9.08566C96.9165 8.90476 97.1741 8.85648 97.3711 8.98776Z",
						fill: "#4F545C"
					}), (0, r.jsx)("path", {
						fillRule: "evenodd",
						clipRule: "evenodd",
						d: "M29.4622 71.9652C30.8821 72.3365 32.4082 71.782 33.2565 70.5848L36.6296 65.8268C36.7358 65.6766 36.6847 65.5318 36.658 65.4767C36.6309 65.4217 36.5487 65.2927 36.3647 65.2836H36.3643L30.5314 65.0026C30.4754 64.9999 30.4189 64.9985 30.3629 64.9985C28.9597 64.9985 27.6649 65.8403 27.1045 67.1346C26.6938 68.0838 26.7182 69.161 27.1719 70.0908C27.6256 71.0201 28.4603 71.7031 29.4622 71.9652Z",
						fill: "#72767D"
					}), (0, r.jsx)("path", {
						fillRule: "evenodd",
						clipRule: "evenodd",
						d: "M92.1639 40.2649C91.966 40.134 91.8982 39.8728 92.0193 39.6653C92.6484 38.5835 92.7144 37.3321 92.2164 35.9454C92.1924 35.8791 92.1612 35.8168 92.135 35.7523C90.0842 37.1016 87.7013 38.0205 85.133 38.4189C85.1095 38.4225 85.086 38.4238 85.063 38.4238C84.8443 38.4238 84.6518 38.265 84.617 38.0422C84.579 37.7959 84.7476 37.5653 84.9943 37.527C87.4645 37.1445 89.7521 36.2562 91.7116 34.9511C91.1788 34.1468 90.3979 33.4953 89.4303 33.0726C87.8771 32.3946 86.0486 32.3716 84.5397 33.0117C83.7285 33.3555 82.9842 33.8111 82.196 34.2934C81.7875 34.5437 81.3645 34.8027 80.9352 35.0413C79.5085 35.8358 77.977 36.4326 76.3826 36.816C75.8367 36.9478 75.2786 37.0542 74.7245 37.1336L74.631 37.1467C74.246 37.2008 73.8822 37.2523 73.6065 37.4219C73.3959 37.5509 73.2206 37.8198 73.2947 38.0138C73.3376 38.1274 73.4668 38.2434 73.6069 38.3616C76.6095 40.9046 80.4241 42.4185 84.6391 42.7411C85.7047 42.8227 86.8444 42.709 87.9358 42.4122C89.0724 42.1032 90.0811 41.6119 90.8529 40.9907C91.0423 40.8378 91.3161 40.8662 91.4748 41.048C91.7328 40.8067 91.9633 40.545 92.1639 40.2649ZM114.635 41.7746C114.635 40.9959 113.997 40.3621 113.213 40.3621H111.174C111.218 40.4122 111.267 40.4587 111.327 40.4966L114.437 42.4819C114.56 42.2731 114.635 42.0335 114.635 41.7746Z",
						fill: "#4F545C"
					}), (0, r.jsx)("path", {
						fillRule: "evenodd",
						clipRule: "evenodd",
						d: "M115.373 41.7744C115.373 40.5911 114.403 39.6284 113.212 39.6284H111.074C111.032 39.7173 111.006 39.8138 111.006 39.9176C111.006 40.0863 111.067 40.2401 111.174 40.3619H113.212C113.997 40.3619 114.634 40.9958 114.634 41.7744C114.634 42.0333 114.559 42.2729 114.436 42.4818L115.056 42.8774C115.253 42.5544 115.373 42.1791 115.373 41.7744Z",
						fill: "#36393E"
					}), (0, r.jsx)("path", {
						fillRule: "evenodd",
						clipRule: "evenodd",
						d: "M139.74 73.8389V84.0856C139.74 84.9531 140.26 85.6979 141.002 86.0376V84.2304C140.823 84.0229 140.71 83.7559 140.71 83.4608V74.493C140.71 74.198 140.823 73.9313 141.002 73.7238V71.8873C140.26 72.227 139.74 72.9714 139.74 73.8389ZM130.79 29.3618V34.2163H129.929V29.0893C129.728 29.0112 129.539 28.9296 129.374 28.8394V34.2163H128.46C128.47 34.2551 128.479 34.2948 128.479 34.3354H131.627V30.5044C131.627 30.2667 131.819 30.0745 132.058 30.0745C132.296 30.0745 132.488 30.2667 132.488 30.5044V34.3354H133.53V29.7799C132.543 29.7078 131.595 29.5697 130.79 29.3618Z",
						fill: "#36393E"
					}), (0, r.jsx)("path", {
						fillRule: "evenodd",
						clipRule: "evenodd",
						d: "M137.531 68.2954C137.293 68.2954 137.1 68.1032 137.1 67.8654V62.2815C137.1 62.0437 137.293 61.8516 137.531 61.8516C137.769 61.8516 137.962 62.0437 137.962 62.2815V67.8654C137.962 68.1032 137.769 68.2954 137.531 68.2954ZM134.606 74.7401C134.368 74.7401 134.175 74.5475 134.175 74.3102V62.2815C134.175 62.0437 134.368 61.8516 134.606 61.8516C134.844 61.8516 135.036 62.0437 135.036 62.2815V74.3102C135.036 74.5475 134.844 74.7401 134.606 74.7401ZM136.8 62.0379C136.679 62.0379 136.679 61.8516 136.8 61.8516C136.92 61.8516 136.92 62.0379 136.8 62.0379ZM139.739 65.0735C139.739 65.3112 139.546 65.5034 139.308 65.5034C139.07 65.5034 138.877 65.3112 138.877 65.0735V62.2815C138.877 62.0437 139.07 61.8516 139.308 61.8516C139.546 61.8516 139.739 62.0437 139.739 62.2815V65.0735ZM129.373 61.3594V89.0979H131.267V65.4826C131.267 65.2449 131.46 65.0527 131.698 65.0527C131.936 65.0527 132.129 65.2449 132.129 65.4826V89.0979H134.175V77.4428C134.175 77.205 134.368 77.0128 134.606 77.0128C134.844 77.0128 135.036 77.205 135.036 77.4428V89.0979H137.1V82.0289C137.1 81.7911 137.293 81.5989 137.531 81.5989C137.769 81.5989 137.962 81.7911 137.962 82.0289V89.0979H139.616C139.981 88.6779 140.457 88.3581 141.001 88.1898V86.961C139.772 86.5807 138.877 85.4357 138.877 84.0855V73.8388C138.877 72.489 139.772 71.3436 141.001 70.9633V69.6984C139.261 70.1035 137.962 71.6589 137.962 73.5135V79.4101C137.962 79.6478 137.769 79.84 137.531 79.84C137.293 79.84 137.1 79.6478 137.1 79.4101V73.5135C137.1 71.1812 138.783 69.236 141.001 68.8182V65.8282C140.764 65.3374 140.628 64.7897 140.628 64.2091V62.2815C140.628 62.064 140.791 61.8922 141.001 61.8633V61.3594H129.373Z",
						fill: "#36393E"
					}), (0, r.jsx)("path", {
						fillRule: "evenodd",
						clipRule: "evenodd",
						d: "M136.392 50.0753H137.253V45.6191H136.392V50.0753Z",
						fill: "#4F545C"
					}), (0, r.jsx)("path", {
						fillRule: "evenodd",
						clipRule: "evenodd",
						d: "M139.905 45.6188H139.044C139.173 47.2442 139.753 48.7749 140.718 50.075H141.001V48.9558C140.389 47.9448 140.011 46.8116 139.905 45.6188ZM139.009 32.2244V34.2161H139.871V32.2244V29.2849C139.633 29.3535 139.381 29.4184 139.103 29.4771C139.071 29.4834 139.041 29.4775 139.009 29.4775V32.2244ZM129.899 47.2008C129.661 47.2008 129.468 47.393 129.468 47.6312C129.468 47.8685 129.661 48.0611 129.899 48.0611C130.532 48.0611 131.048 48.5749 131.048 49.2074V50.0754H131.909V49.2074C131.909 48.1012 131.008 47.2008 129.899 47.2008ZM132.915 47.416V49.2796C132.915 49.5174 133.107 49.7095 133.345 49.7095C133.583 49.7095 133.776 49.5174 133.776 49.2796V47.416C133.776 46.6839 133.505 46.0153 133.059 45.4997H131.719C131.703 45.506 131.688 45.511 131.672 45.5168C132.402 45.8398 132.915 46.5684 132.915 47.416ZM129.805 45.6188H129.373V45.9369C129.501 45.811 129.648 45.7086 129.805 45.6188ZM133.553 34.2159H134.39V29.8256C134.102 29.8156 133.814 29.8003 133.529 29.7795V34.335H133.564C133.557 34.3065 133.546 34.2795 133.546 34.2488C133.546 34.2371 133.552 34.2271 133.553 34.2159ZM132.487 30.5043C132.487 30.2665 132.294 30.0743 132.056 30.0743C131.818 30.0743 131.625 30.2665 131.625 30.5043V34.3352H132.487V30.5043ZM129.927 34.2159H130.789V29.3613C130.477 29.2815 130.189 29.1899 129.927 29.0889V34.2159Z",
						fill: "#4F545C"
					}), (0, r.jsx)("path", {
						fillRule: "evenodd",
						clipRule: "evenodd",
						d: "M136.393 33.4189C136.393 33.6566 136.585 33.8492 136.824 33.8492C137.062 33.8492 137.254 33.6566 137.254 33.4189V29.1982L138.567 29.0768C138.546 28.8517 138.69 28.642 138.916 28.5941C140.507 28.2603 141.001 27.8101 141.001 27.6838C141.001 27.3197 138.963 26.4292 135.187 26.4292C131.41 26.4292 129.373 27.3197 129.373 27.6838C129.373 28.0478 131.41 28.9388 135.187 28.9388C135.422 28.9388 135.608 29.1197 135.631 29.3489L136.393 29.278V33.4189ZM132.129 65.4824C132.129 65.2447 131.936 65.0525 131.698 65.0525C131.46 65.0525 131.267 65.2447 131.267 65.4824V89.0977H132.129V65.4824ZM135.036 77.4429C135.036 77.2051 134.844 77.0125 134.606 77.0125C134.368 77.0125 134.175 77.2051 134.175 77.4429V89.0976H135.036V77.4429ZM135.036 62.2816C135.036 62.0438 134.844 61.8512 134.606 61.8512C134.368 61.8512 134.175 62.0438 134.175 62.2816V74.3098C134.175 74.5476 134.368 74.7398 134.606 74.7398C134.844 74.7398 135.036 74.5476 135.036 74.3098V62.2816ZM137.1 73.5136V79.4098C137.1 79.6475 137.293 79.8397 137.531 79.8397C137.769 79.8397 137.962 79.6475 137.962 79.4098V73.5136C137.962 71.6586 139.261 70.1036 141.001 69.698V68.8179C138.784 69.2361 137.1 71.1813 137.1 73.5136ZM137.962 82.0288C137.962 81.791 137.77 81.5988 137.531 81.5988C137.293 81.5988 137.1 81.791 137.1 82.0288V89.0978H137.962V82.0288Z",
						fill: "#4F545C"
					}), (0, r.jsx)("path", {
						fillRule: "evenodd",
						clipRule: "evenodd",
						d: "M138.877 73.8388V84.0856C138.877 85.4358 139.771 86.5807 141 86.961V86.0376C140.258 85.6979 139.738 84.9531 139.738 84.0856V73.8388C139.738 72.9713 140.258 72.2269 141 71.8872V70.9629C139.771 71.3436 138.877 72.489 138.877 73.8388ZM139.615 89.0978H141V88.1897C140.457 88.358 139.98 88.6778 139.615 89.0978Z",
						fill: "#4F545C"
					}), (0, r.jsx)("path", {
						fillRule: "evenodd",
						clipRule: "evenodd",
						d: "M140.709 83.4604C140.709 83.7554 140.822 84.0225 141.001 84.23V73.7234C140.822 73.9309 140.709 74.198 140.709 74.493V83.4604ZM137.963 62.2814C137.963 62.0437 137.77 61.8511 137.532 61.8511C137.294 61.8511 137.101 62.0437 137.101 62.2814V67.865C137.101 68.1027 137.294 68.2953 137.532 68.2953C137.77 68.2953 137.963 68.1027 137.963 67.865V62.2814ZM139.74 62.2814C139.74 62.0437 139.547 61.8511 139.309 61.8511C139.071 61.8511 138.878 62.0437 138.878 62.2814V65.073C138.878 65.3107 139.071 65.5034 139.309 65.5034C139.547 65.5034 139.74 65.3107 139.74 65.073V62.2814ZM140.628 62.2814V64.2086C140.628 64.7892 140.765 65.3369 141.001 65.8282V61.8628C140.792 61.8921 140.628 62.064 140.628 62.2814Z",
						fill: "#4F545C"
					}), (0, r.jsx)("path", {
						fillRule: "evenodd",
						clipRule: "evenodd",
						d: "M136.801 61.8516C136.681 61.8516 136.68 62.0383 136.801 62.0383C136.921 62.0383 136.922 61.8516 136.801 61.8516Z",
						fill: "#D5DBED"
					}), (0, r.jsx)("path", {
						fillRule: "evenodd",
						clipRule: "evenodd",
						d: "M152.942 51.2065C152.829 51.1348 152.699 51.0964 152.565 51.0964H151.29L156.524 54.4374C156.985 54.7316 157.26 55.2323 157.26 55.7768C157.26 56.3213 156.985 56.8221 156.524 57.1162L151.289 60.4568H152.565C152.699 60.4568 152.829 60.4189 152.942 60.3467L159.195 56.3561C159.398 56.2261 159.514 56.0155 159.514 55.7768C159.514 55.5382 159.398 55.3271 159.195 55.1976L152.942 51.2065ZM127.351 35.7159H137.8C138.004 35.7159 138.169 35.8797 138.169 36.0827C138.169 36.2853 138.004 36.4495 137.8 36.4495H127.351C127.147 36.4495 126.982 36.2853 126.982 36.0827C126.982 35.8797 127.147 35.7159 127.351 35.7159ZM118.89 39.6285H120.374C120.4 39.6285 120.424 39.6353 120.45 39.6357C120.475 39.6353 120.499 39.6285 120.525 39.6285H122.01C123.201 39.6285 124.171 40.5912 124.171 41.7745C124.171 42.9573 123.201 43.9205 122.01 43.9205H120.525C120.499 43.9205 120.475 43.9137 120.45 43.9128C120.424 43.9137 120.4 43.9205 120.374 43.9205H118.89C117.698 43.9205 116.728 42.9573 116.728 41.7745C116.728 40.5912 117.698 39.6285 118.89 39.6285ZM125.631 39.6285H126.969C127.173 39.6285 127.339 39.7927 127.339 39.9953C127.339 40.1978 127.173 40.362 126.969 40.362H125.631C125.427 40.362 125.262 40.1978 125.262 39.9953C125.262 39.7927 125.427 39.6285 125.631 39.6285ZM120.828 35.2373H117.956C117.822 35.2373 117.692 35.2752 117.579 35.3474L117.001 35.7159H123.415C123.619 35.7159 123.784 35.8797 123.784 36.0827C123.784 36.2853 123.619 36.4495 123.415 36.4495H115.852L111.326 39.338C111.211 39.4115 111.128 39.5126 111.074 39.6285H113.212C114.404 39.6285 115.374 40.5912 115.374 41.7745C115.374 42.1792 115.253 42.554 115.056 42.8775L117.579 44.4875C117.692 44.5597 117.823 44.5976 117.956 44.5976H120.828H124.576C125.26 44.2737 125.893 43.8402 126.444 43.293C127.855 41.8927 129.731 41.1208 131.726 41.1208H139.115H139.468H152.484V38.5278H115.025C114.821 38.5278 114.656 38.364 114.656 38.161C114.656 37.9585 114.821 37.7943 115.025 37.7943H152.484V35.9262C152.484 35.5463 152.171 35.2373 151.787 35.2373H120.828Z",
						fill: "#4F545C"
					}), (0, r.jsx)("path", {
						fillRule: "evenodd",
						clipRule: "evenodd",
						d: "M139.469 41.8545H139.117C137.319 41.8545 135.627 42.5502 134.356 43.8119C134.062 44.1038 133.744 44.3614 133.413 44.5978H151.789C152.173 44.5978 152.485 44.2883 152.485 43.9085V43.8124H138.935C138.73 43.8124 138.565 43.6486 138.565 43.4456C138.565 43.2431 138.73 43.0789 138.935 43.0789H152.485V41.8545H139.469ZM118.891 43.1867H118.912C118.576 42.8082 118.365 42.3174 118.365 41.7743C118.365 41.2316 118.576 40.7403 118.912 40.3618H118.891C118.107 40.3618 117.469 40.9956 117.469 41.7743C117.469 42.5529 118.107 43.1867 118.891 43.1867ZM120.451 43.179C121.2 43.1393 121.798 42.5272 121.798 41.7742C121.798 41.0213 121.2 40.4096 120.451 40.3694C119.702 40.4096 119.104 41.0213 119.104 41.7742C119.104 42.5272 119.702 43.1393 120.451 43.179ZM122.011 43.1867C122.796 43.1867 123.433 42.5529 123.433 41.7743C123.433 40.9956 122.796 40.3618 122.011 40.3618H121.99C122.326 40.7403 122.537 41.2316 122.537 41.7743C122.537 42.3174 122.326 42.8082 121.99 43.1867H122.011ZM135.889 41.8545H131.727C129.929 41.8545 128.239 42.5502 126.967 43.8119C126.674 44.1029 126.359 44.3637 126.027 44.5978H131.967C132.65 44.2739 133.283 43.8404 133.834 43.2932C134.441 42.6909 135.137 42.2127 135.889 41.8545Z",
						fill: "#4F545C"
					}), (0, r.jsx)("path", {
						fillRule: "evenodd",
						clipRule: "evenodd",
						d: "M139.467 41.1213H139.115H131.727C129.731 41.1213 127.855 41.8927 126.444 43.2934C125.893 43.8406 125.26 44.2742 124.577 44.5981H126.026C126.358 44.3639 126.673 44.1032 126.966 43.8122C128.238 42.55 129.928 41.8548 131.727 41.8548H135.887C135.136 42.213 134.44 42.6912 133.833 43.2934C133.282 43.8406 132.648 44.2742 131.965 44.5981H133.411C133.743 44.3617 134.061 44.1041 134.355 43.8122C135.626 42.55 137.317 41.8548 139.115 41.8548H139.467H152.484V41.1213H139.467ZM115.025 37.7947C114.821 37.7947 114.656 37.9589 114.656 38.1615C114.656 38.3645 114.821 38.5282 115.025 38.5282H152.484V37.7947H115.025ZM118.89 40.3622H118.911C118.575 40.7407 118.364 41.2315 118.364 41.7747C118.364 42.3174 118.575 42.8086 118.911 43.1871H118.89C118.105 43.1871 117.468 42.5533 117.468 41.7747C117.468 40.996 118.105 40.3622 118.89 40.3622ZM120.45 40.3699C121.198 40.4096 121.797 41.0217 121.797 41.7747C121.797 42.5276 121.198 43.1393 120.45 43.1795C119.701 43.1393 119.103 42.5276 119.103 41.7747C119.103 41.0217 119.701 40.4096 120.45 40.3699ZM121.989 40.3622H122.01C122.794 40.3622 123.432 40.996 123.432 41.7747C123.432 42.5533 122.794 43.1871 122.01 43.1871H121.989C122.325 42.8086 122.536 42.3174 122.536 41.7747C122.536 41.2315 122.325 40.7407 121.989 40.3622ZM118.89 43.9207H120.374C120.4 43.9207 120.424 43.9139 120.45 43.913C120.476 43.9139 120.5 43.9207 120.526 43.9207H122.01C123.201 43.9207 124.171 42.9575 124.171 41.7747C124.171 40.5914 123.201 39.6287 122.01 39.6287H120.526C120.5 39.6287 120.476 39.6355 120.45 39.6364C120.424 39.6355 120.4 39.6287 120.374 39.6287H118.89C117.699 39.6287 116.729 40.5914 116.729 41.7747C116.729 42.9575 117.699 43.9207 118.89 43.9207ZM127.351 36.4497H137.8C138.004 36.4497 138.169 36.2855 138.169 36.0829C138.169 35.8799 138.004 35.7162 137.8 35.7162H127.351C127.147 35.7162 126.982 35.8799 126.982 36.0829C126.982 36.2855 127.147 36.4497 127.351 36.4497ZM123.415 36.4497C123.619 36.4497 123.784 36.2855 123.784 36.0829C123.784 35.8799 123.619 35.7162 123.415 35.7162H117.002L115.852 36.4497H123.415ZM141.96 34.2161H141.001V28.8428C140.699 29.007 140.325 29.1554 139.871 29.2853V34.2161H139.01V29.478C138.801 29.477 138.612 29.3408 138.567 29.1283C138.563 29.1107 138.568 29.094 138.567 29.0765L137.254 29.1983V33.4189C137.254 33.6567 137.062 33.8493 136.824 33.8493C136.585 33.8493 136.393 33.6567 136.393 33.4189V29.2781L135.63 29.3489C135.631 29.3629 135.639 29.3755 135.639 29.39C135.639 29.639 135.436 29.8411 135.187 29.8411C134.922 29.8411 134.656 29.8348 134.39 29.8258V34.2161H133.553C133.552 34.2274 133.546 34.2373 133.546 34.249C133.546 34.2797 133.557 34.3068 133.564 34.3352H141.992C141.978 34.2968 141.966 34.2571 141.96 34.2161ZM136.393 50.0754H137.254V45.6192H136.393V50.0754ZM131.909 50.0754H131.047V49.2079C131.047 48.575 130.532 48.0611 129.899 48.0611C129.661 48.0611 129.468 47.869 129.468 47.6312C129.468 47.3935 129.661 47.2008 129.899 47.2008C131.007 47.2008 131.909 48.1017 131.909 49.2079V50.0754ZM141.001 48.9562V45.6192H141.266C141.271 45.5791 141.281 45.5394 141.294 45.5001H133.059C133.504 46.0153 133.776 46.6839 133.776 47.416V49.2801C133.776 49.5178 133.583 49.71 133.345 49.71C133.107 49.71 132.915 49.5178 132.915 49.2801V47.416C132.915 46.5684 132.402 45.8403 131.671 45.5173C131.687 45.5114 131.703 45.506 131.719 45.5001H128.241C128.255 45.5385 128.266 45.5782 128.272 45.6192H129.804C129.648 45.7085 129.5 45.8109 129.372 45.9368V50.0754H128.824C128.834 50.1146 128.84 50.1543 128.842 50.1945H141.163C141.166 50.1543 141.172 50.1146 141.182 50.0754H140.718C139.753 48.7748 139.173 47.2446 139.044 45.6192H139.905C140.011 46.812 140.389 47.9447 141.001 48.9562Z",
						fill: "#36393E"
					}), (0, r.jsx)("path", {
						fillRule: "evenodd",
						clipRule: "evenodd",
						d: "M138.934 43.0788C138.729 43.0788 138.564 43.243 138.564 43.4455C138.564 43.6485 138.729 43.8123 138.934 43.8123H152.484V43.0788H138.934ZM125.631 40.3619H126.969C127.173 40.3619 127.339 40.1977 127.339 39.9952C127.339 39.7926 127.173 39.6284 126.969 39.6284H125.631C125.427 39.6284 125.262 39.7926 125.262 39.9952C125.262 40.1977 125.427 40.3619 125.631 40.3619Z",
						fill: "#36393E"
					}), (0, r.jsx)("path", {
						fillRule: "evenodd",
						clipRule: "evenodd",
						d: "M129.833 53.2237C129.629 53.2237 129.464 53.0595 129.464 52.857C129.464 52.654 129.629 52.4902 129.833 52.4902H137.765C137.968 52.4902 138.134 52.654 138.134 52.857C138.134 53.0595 137.968 53.2237 137.765 53.2237H129.833ZM144.727 54.324C144.932 54.324 145.097 54.4882 145.097 54.6908C145.097 54.8938 144.932 55.0575 144.727 55.0575H134.279C134.075 55.0575 133.91 54.8938 133.91 54.6908C133.91 54.4882 134.075 54.324 134.279 54.324H144.727ZM133.897 58.2366C134.101 58.2366 134.266 58.4008 134.266 58.6033C134.266 58.8063 134.101 58.9701 133.897 58.9701H132.559C132.355 58.9701 132.19 58.8063 132.19 58.6033C132.19 58.4008 132.355 58.2366 132.559 58.2366H133.897ZM120.14 58.2366C121.332 58.2366 122.301 59.1997 122.301 60.3826C122.301 60.4083 122.295 60.4317 122.294 60.457H123.664C123.663 60.4317 123.657 60.4083 123.657 60.3826C123.657 59.1997 124.626 58.2366 125.817 58.2366H127.302C127.328 58.2366 127.352 58.2433 127.377 58.2443C127.403 58.2433 127.427 58.2366 127.453 58.2366H128.938C130.129 58.2366 131.098 59.1997 131.098 60.3826C131.098 60.4083 131.092 60.4317 131.091 60.457H135.439C136.431 59.986 137.521 59.7293 138.654 59.7293H146.043H146.395H150.753L154.815 57.1363H121.953C121.749 57.1363 121.583 56.9721 121.583 56.7695C121.583 56.567 121.749 56.4028 121.953 56.4028H155.965L156.037 56.3559C156.24 56.2264 156.356 56.0153 156.356 55.7771C156.356 55.538 156.24 55.3273 156.037 55.1974L152.945 53.2237H140.843C140.639 53.2237 140.474 53.0595 140.474 52.857C140.474 52.654 140.639 52.4902 140.843 52.4902H151.795L149.784 51.2068C149.672 51.135 149.541 51.0967 149.407 51.0967H118.734H115.576C115.192 51.0967 114.879 51.4061 114.879 51.786V52.4902H127.299C127.503 52.4902 127.668 52.654 127.668 52.857C127.668 53.0595 127.503 53.2237 127.299 53.2237H114.879V54.324H130.342C130.547 54.324 130.712 54.4882 130.712 54.6908C130.712 54.8938 130.547 55.0575 130.342 55.0575H114.879V56.4028H119.346C119.55 56.4028 119.715 56.567 119.715 56.7695C119.715 56.9721 119.55 57.1363 119.346 57.1363H114.879V58.2366H120.14Z",
						fill: "#4F545C"
					}), (0, r.jsx)("path", {
						fillRule: "evenodd",
						clipRule: "evenodd",
						d: "M115.576 60.4571H118.734H121.555C121.556 60.4319 121.562 60.4084 121.562 60.3827C121.562 59.604 120.924 58.9702 120.14 58.9702H114.879V59.7678C114.879 60.1476 115.192 60.4571 115.576 60.4571ZM125.839 58.9703H125.817C125.033 58.9703 124.395 59.6041 124.395 60.3827C124.395 60.4084 124.402 60.4319 124.403 60.4572H125.299C125.298 60.4319 125.292 60.408 125.292 60.3827C125.292 59.8396 125.502 59.3488 125.839 58.9703ZM128.938 58.9703H128.916C129.253 59.3488 129.464 59.8396 129.464 60.3827C129.464 60.408 129.457 60.4319 129.456 60.4572H130.352C130.353 60.4319 130.36 60.4084 130.36 60.3827C130.36 59.6041 129.722 58.9703 128.938 58.9703ZM127.378 58.9778C126.629 59.0179 126.03 59.6296 126.03 60.3825C126.03 60.4078 126.036 60.4322 126.038 60.457H128.718C128.719 60.4322 128.725 60.4078 128.725 60.3825C128.725 59.6296 128.126 59.0179 127.378 58.9778Z",
						fill: "#4F545C"
					}), (0, r.jsx)("path", {
						fillRule: "evenodd",
						clipRule: "evenodd",
						d: "M141.381 61.3595C141.33 61.3997 141.276 61.4367 141.226 61.4786H141.905H142.484C142.55 61.4376 142.617 61.3979 142.684 61.3595H141.381ZM146.395 59.7295H146.043H138.654C137.522 59.7295 136.431 59.9862 135.438 60.4572H149.407C149.541 60.4572 149.671 60.4193 149.784 60.3471L150.752 59.7295H146.395ZM120.14 58.9704C120.924 58.9704 121.562 59.6043 121.562 60.3829C121.562 60.4086 121.556 60.4321 121.555 60.4573H122.294C122.295 60.4321 122.301 60.4086 122.301 60.3829C122.301 59.1996 121.332 58.2369 120.14 58.2369H114.879V58.9704H120.14ZM119.346 57.1365C119.55 57.1365 119.715 56.9722 119.715 56.7697C119.715 56.5671 119.55 56.4029 119.346 56.4029H114.879V57.1365H119.346ZM121.953 56.4029C121.749 56.4029 121.584 56.5671 121.584 56.7697C121.584 56.9722 121.749 57.1365 121.953 57.1365H154.815L155.964 56.4029H121.953ZM128.469 61.4785H129.15C129.174 61.4411 129.19 61.3986 129.21 61.3594H128.324C128.281 61.4032 128.233 61.4411 128.186 61.4785H128.469ZM128.938 58.2367H127.453C127.427 58.2367 127.403 58.2435 127.378 58.2444C127.352 58.2435 127.327 58.2367 127.302 58.2367H125.818C124.626 58.2367 123.657 59.1998 123.657 60.3827C123.657 60.4084 123.663 60.4318 123.664 60.4571H124.403C124.401 60.4323 124.395 60.4084 124.395 60.3827C124.395 59.604 125.033 58.9702 125.818 58.9702H125.839C125.502 59.3487 125.292 59.84 125.292 60.3827C125.292 60.4079 125.298 60.4318 125.299 60.4571H126.038C126.036 60.4323 126.03 60.4079 126.03 60.3827C126.03 59.6298 126.629 59.018 127.378 58.9779C128.126 59.018 128.725 59.6298 128.725 60.3827C128.725 60.4079 128.719 60.4323 128.718 60.4571H129.456C129.457 60.4318 129.464 60.4079 129.464 60.3827C129.464 59.84 129.253 59.3487 128.916 58.9702H128.938C129.722 58.9702 130.36 59.604 130.36 60.3827C130.36 60.4084 130.353 60.4323 130.352 60.4571H131.091C131.092 60.4318 131.099 60.4084 131.099 60.3827C131.099 59.1998 130.129 58.2367 128.938 58.2367ZM134.279 54.3242C134.075 54.3242 133.91 54.4884 133.91 54.691C133.91 54.894 134.075 55.0577 134.279 55.0577H144.728C144.932 55.0577 145.097 54.894 145.097 54.691C145.097 54.4884 144.932 54.3242 144.728 54.3242H134.279ZM130.343 55.0577C130.547 55.0577 130.712 54.894 130.712 54.691C130.712 54.4884 130.547 54.3242 130.343 54.3242H114.879V55.0577H130.343ZM127.299 53.2239C127.503 53.2239 127.668 53.0597 127.668 52.8572C127.668 52.6542 127.503 52.4904 127.299 52.4904H114.879V53.2239H127.299ZM137.765 53.2239C137.969 53.2239 138.134 53.0597 138.134 52.8572C138.134 52.6542 137.969 52.4904 137.765 52.4904H129.833C129.629 52.4904 129.464 52.6542 129.464 52.8572C129.464 53.0597 129.629 53.2239 129.833 53.2239H137.765ZM140.843 52.4902C140.639 52.4902 140.474 52.6544 140.474 52.857C140.474 53.06 140.639 53.2237 140.843 53.2237H152.945L151.795 52.4902H140.843ZM132.19 58.6037C132.19 58.8062 132.355 58.9704 132.559 58.9704H133.897C134.101 58.9704 134.266 58.8062 134.266 58.6037C134.266 58.4007 134.101 58.2369 133.897 58.2369H132.559C132.355 58.2369 132.19 58.4007 132.19 58.6037ZM154.455 44.8218H153.099V34.7861H154.455C155.203 34.7861 155.81 35.392 155.81 36.1395V43.4684C155.81 44.2159 155.203 44.8218 154.455 44.8218Z",
						fill: "#36393E"
					}), (0, r.jsx)("path", {
						fillRule: "evenodd",
						clipRule: "evenodd",
						d: "M48.944 24.6072L49.2956 26.0824C49.3448 26.2895 49.5301 26.4289 49.7348 26.4289C49.7692 26.4289 49.8044 26.4248 49.8392 26.4167H49.8397C50.0824 26.3589 50.2324 26.1158 50.1745 25.8735L49.823 24.3984C49.7656 24.1561 49.5215 24.005 49.2788 24.0641C49.0362 24.1214 48.8861 24.365 48.944 24.6072Z",
						fill: "#202225"
					}), (0, r.jsx)("path", {
						fillRule: "evenodd",
						clipRule: "evenodd",
						d: "M161.419 89.0978L153.413 89.0793C153.413 87.8897 154.382 86.922 155.574 86.922H159.277C160.469 86.922 161.438 87.8897 161.438 89.0793C161.438 89.0892 161.429 89.0978 161.419 89.0978ZM152.509 89.0847L149.482 89.0721V88.5578C149.482 87.1945 150.592 86.0856 151.958 86.0856H153.391C153.729 86.0856 154.052 86.1546 154.346 86.2778C153.266 86.7515 152.509 87.8283 152.509 89.0793C152.509 89.0811 152.509 89.0829 152.509 89.0847ZM142.821 89.0978C142.315 89.0978 141.905 88.6886 141.905 88.1833V72.2421L145.922 89.0978H142.821ZM141.001 87.7444C141.001 88.4919 140.395 89.0978 139.646 89.0978H130.729C129.98 89.0978 129.373 88.4919 129.373 87.7444V63.1646C129.373 62.6661 129.778 62.2624 130.277 62.2624H140.098C140.597 62.2624 141.001 62.6661 141.001 63.1646V87.7444ZM126.038 60.457H125.299H124.403H123.664H122.294H121.555H118.734H115.576C115.192 60.457 114.879 60.1479 114.879 59.7677V58.9701V58.2365V57.1363V56.4027V55.0575V54.324V53.2237V52.4902V51.786C114.879 51.4061 115.192 51.0966 115.576 51.0966H118.734H149.407C149.541 51.0966 149.672 51.135 149.784 51.2067L151.795 52.4902L152.945 53.2237L156.038 55.1978C156.24 55.3273 156.357 55.5379 156.357 55.777C156.357 56.0157 156.24 56.2263 156.038 56.3558L155.965 56.4027L154.815 57.1363L150.752 59.7293L149.785 60.3469C149.671 60.4191 149.541 60.457 149.407 60.457H135.439H131.091H130.353H129.456H128.717H126.038ZM128.469 88.1833C128.469 88.7387 127.973 89.1785 127.4 89.0856C126.949 89.0125 126.637 88.5898 126.637 88.1342V87.5915C126.637 87.342 126.435 87.1404 126.185 87.1404C125.936 87.1404 125.733 87.342 125.733 87.5915V88.1833C125.733 88.6886 125.323 89.0978 124.817 89.0978H114.138V88.657C114.138 86.9563 112.756 85.5772 111.052 85.5772H110.287L116.059 61.3592H126.21C127.458 61.3592 128.469 62.3693 128.469 63.6148V88.1833ZM113.234 89.0978L107.582 89.1203V88.657C107.582 87.4561 108.56 86.4795 109.763 86.4795H111.052C112.255 86.4795 113.234 87.4561 113.234 88.657V89.0978ZM119.769 45.5H120.828H127.114C127.862 45.5 128.469 46.1059 128.469 46.8534V50.1944H118.734H118.728L119.769 45.5ZM141.001 47.3045V50.1944H129.373V47.3045C129.373 46.308 130.183 45.5 131.181 45.5H139.194C140.192 45.5 141.001 46.308 141.001 47.3045ZM117.957 44.5978C117.823 44.5978 117.693 44.5594 117.58 44.4877L115.057 42.8777L114.437 42.482L111.326 40.4966C111.267 40.4587 111.218 40.4123 111.174 40.3622C111.068 40.24 111.007 40.0866 111.007 39.9174C111.007 39.8141 111.033 39.7176 111.075 39.6287C111.128 39.5127 111.212 39.4117 111.326 39.3382L115.852 36.4496L117.002 35.7161L117.58 35.3475C117.692 35.2754 117.823 35.2375 117.957 35.2375H120.828H151.788C152.172 35.2375 152.485 35.5465 152.485 35.9263V37.7944V38.5279V41.121V41.8545V43.0789V43.8128V43.9085C152.485 44.2883 152.172 44.5978 151.788 44.5978H133.412H131.966H126.027H124.577H120.828H117.957ZM122.765 33.2241L127.246 14.4245C127.356 13.9621 128.015 13.9621 128.125 14.4245L130.88 25.9832C129.464 26.3346 128.469 26.8931 128.469 27.6839V32.9819C128.469 33.7294 127.862 34.3352 127.114 34.3352H123.645C123.061 34.3352 122.63 33.7912 122.765 33.2241ZM135.187 26.4293C138.964 26.4293 141.001 27.3198 141.001 27.6839C141.001 27.8102 140.507 28.2604 138.917 28.5943C138.69 28.6416 138.547 28.8518 138.567 29.0765C138.569 29.0941 138.564 29.1108 138.568 29.1284C138.613 29.3409 138.801 29.4771 139.01 29.4776C139.041 29.4776 139.071 29.4839 139.103 29.4771C139.382 29.4185 139.633 29.3535 139.872 29.2854C140.325 29.155 140.699 29.007 141.001 28.8428V32.5298C141.001 33.0283 140.597 33.4321 140.098 33.4321H130.277C129.778 33.4321 129.373 33.0283 129.373 32.5298V28.8392C129.538 28.9294 129.728 29.0111 129.928 29.0891C130.189 29.1902 130.478 29.2813 130.789 29.3616C131.594 29.5696 132.542 29.7076 133.529 29.7798C133.815 29.8006 134.102 29.8159 134.391 29.8254C134.657 29.8348 134.923 29.8412 135.187 29.8412C135.437 29.8412 135.639 29.6391 135.639 29.39C135.639 29.3751 135.632 29.363 135.631 29.349C135.609 29.1198 135.422 28.9389 135.187 28.9389C131.41 28.9389 129.373 28.0479 129.373 27.6839C129.373 27.3198 131.41 26.4293 135.187 26.4293ZM153.224 35.2375H154.659C155.043 35.2375 155.356 35.5465 155.356 35.9263V43.9085C155.356 44.2883 155.043 44.5978 154.659 44.5978H153.224C153.326 44.3885 153.388 44.1566 153.388 43.9085V35.9263C153.388 35.6787 153.326 35.4468 153.224 35.2375ZM152.566 51.0966C152.7 51.0966 152.83 51.135 152.943 51.2067L159.196 55.1978C159.398 55.3273 159.515 55.5379 159.515 55.777C159.515 56.0157 159.398 56.2263 159.196 56.3558L152.943 60.3469C152.83 60.4191 152.7 60.457 152.566 60.457H151.29L156.524 57.116C156.985 56.8223 157.26 56.3215 157.26 55.777C157.26 55.2325 156.985 54.7318 156.524 54.4376L151.29 51.0966H152.566ZM89.0999 89.0978H89.0411C88.4143 89.0978 87.9777 88.4761 88.1915 87.8879L88.4364 87.2139C88.5214 86.9797 88.4003 86.7208 88.1657 86.636C87.9321 86.5525 87.6722 86.6725 87.5868 86.9067L87.007 88.5032C86.8773 88.86 86.5379 89.0978 86.157 89.0978H84.9251C85.0877 88.7865 85.1885 88.4382 85.1885 88.0633V83.8093C85.1885 83.4827 85.3639 83.1777 85.6526 83.0243C86.7386 82.4469 87.6153 81.5307 88.1499 80.42C88.1572 80.4042 88.1648 80.3889 88.1721 80.3735C88.2254 80.2607 88.2751 80.1466 88.3212 80.0302C88.333 80 88.3429 79.9693 88.3546 79.9386C88.4184 79.7677 88.474 79.5935 88.5214 79.4153C88.5426 79.3359 88.5652 79.2574 88.5829 79.1771C88.5991 79.1036 88.6118 79.0296 88.6249 78.9557C88.6443 78.851 88.6601 78.7463 88.6732 78.6403C88.6809 78.5794 88.6891 78.5185 88.6945 78.4572C88.7099 78.2862 88.7207 78.1139 88.7207 77.9402V71.2654C88.7207 70.2689 89.5301 69.4609 90.5284 69.4609H93.1346C94.1577 69.4609 95.1347 69.2723 96.0453 68.943L91.7377 87.0176C91.4471 88.237 90.3557 89.0978 89.0999 89.0978ZM84.2847 82.9282V88.0633C84.2847 88.8109 83.6778 89.4167 82.929 89.4167H81.7635C81.0146 89.4167 80.4077 88.8109 80.4077 88.0633V83.6938C80.4077 83.1957 80.0028 82.7915 79.5039 82.7915H74.1184C73.619 82.7915 73.2146 83.1957 73.2146 83.6938V88.0633C73.2146 88.8109 72.6077 89.4167 71.8588 89.4167H70.6929C69.9445 89.4167 69.3371 88.8109 69.3371 88.0633V83.2427C69.3371 82.9873 69.1256 82.7933 68.8699 82.7915C67.6614 82.7834 66.6812 81.7995 66.6812 80.5914V74.2279C66.6812 73.9789 66.4788 73.7768 66.2293 73.7768C65.9799 73.7768 65.7774 73.9789 65.7774 74.2279V80.5914C65.7774 81.4513 66.1308 82.229 66.6984 82.7915H46.143C45.3942 82.7915 44.7873 83.3974 44.7873 84.1449V88.0633C44.7873 88.8109 44.1804 89.4167 43.4315 89.4167H42.2656C41.5172 89.4167 40.9099 88.8109 40.9099 88.0633V65.7946C40.9099 61.6511 44.2753 58.2916 48.4266 58.2916H51.3767C51.7762 58.2916 52.1463 58.4756 52.412 58.7734C53.1414 59.5913 54.1641 60.1425 55.3133 60.263V60.8896C55.3133 65.6237 59.1573 69.4609 63.8997 69.4609H66.2293H86.913C87.4119 69.4609 87.8169 69.8651 87.8169 70.3631V77.9402C87.8169 79.9716 86.5235 81.8018 84.5974 82.4988C84.413 82.5655 84.2847 82.7324 84.2847 82.9282ZM73.8549 89.0978C74.0176 88.7865 74.1184 88.4382 74.1184 88.0633V84.596C74.1184 84.098 74.5229 83.6938 75.0222 83.6938H78.6001C79.099 83.6938 79.5039 84.098 79.5039 84.596V88.0633C79.5039 88.4382 79.6047 88.7865 79.7673 89.0978H73.8549ZM64.8311 87.3641L63.9566 83.6938H67.5295C68.0288 83.6938 68.4333 84.098 68.4333 84.596V88.0633C68.4333 88.4382 68.5341 88.7865 68.6968 89.0978H67.0292C65.983 89.0978 65.0733 88.3805 64.8311 87.3641ZM59.8234 89.0978C59.9857 88.7865 60.0869 88.4382 60.0869 88.0633V84.596C60.0869 84.098 60.4913 83.6938 60.9907 83.6938H63.0275L64.3155 89.0978H59.8234ZM59.1831 88.0633C59.1831 88.8109 58.5757 89.4167 57.8273 89.4167H56.6614C55.9125 89.4167 55.3056 88.8109 55.3056 88.0633V84.1449C55.3056 83.8959 55.5081 83.6938 55.7575 83.6938H58.7311C58.9806 83.6938 59.1831 83.8959 59.1831 84.1449V88.0633ZM45.4277 89.0978C45.5903 88.7865 45.6911 88.4382 45.6911 88.0633V85.0471C45.6911 84.2996 46.298 83.6938 47.0469 83.6938H53.498C53.9969 83.6938 54.4018 84.098 54.4018 84.596V88.0633C54.4018 88.4382 54.5026 88.7865 54.6653 89.0978H45.4277ZM52.1716 49.2809C52.1716 47.2874 53.7904 45.6719 55.7869 45.6719H62.3849C62.6348 45.6719 62.8368 45.4698 62.8368 45.2208C62.8368 44.9718 62.6348 44.7697 62.3849 44.7697H60.3332H57.365C56.768 44.7697 56.3333 44.2013 56.4905 43.6265C57.3786 40.3726 60.3621 37.9726 63.8997 37.9726H65.776H72.3812C72.3862 38.0926 72.4034 38.214 72.4495 38.334C72.5688 38.6484 72.7979 38.86 73.0221 39.0499C76.1706 41.716 80.1637 43.3035 84.5699 43.6405C84.8161 43.6595 85.0661 43.6685 85.3182 43.6685C86.2609 43.6685 87.2343 43.5377 88.173 43.2828C89.4288 42.9413 90.5519 42.3918 91.42 41.693C91.6143 41.5369 91.6446 41.2527 91.4878 41.0587C91.4842 41.0542 91.4783 41.0524 91.4747 41.0479C91.316 40.8657 91.0422 40.8377 90.8528 40.9906C90.081 41.6118 89.0723 42.1031 87.9357 42.4121C86.8443 42.7089 85.7046 42.8226 84.639 42.741C80.424 42.4184 76.6094 40.9045 73.6068 38.3615C73.4667 38.2433 73.3375 38.1274 73.2946 38.0137C73.2205 37.8197 73.3958 37.5508 73.6064 37.4218C73.882 37.2522 74.2458 37.2008 74.6309 37.1466L74.7244 37.1335C75.2785 37.0541 75.8366 36.9477 76.3825 36.8159C77.9769 36.4325 79.5084 35.8357 80.9351 35.0412C81.3644 34.8026 81.7874 34.5436 82.1959 34.2933C82.9841 33.811 83.7284 33.3554 84.5396 33.0116C86.0485 32.3715 87.877 32.3945 89.4302 33.0725L89.4614 33.0865C90.8144 33.682 90.8108 35.5853 89.4655 36.1984C88.0749 36.8322 86.5718 37.2824 84.9942 37.5269C84.7475 37.5653 84.5789 37.7958 84.6169 38.0421C84.6517 38.2649 84.8442 38.4237 85.0629 38.4237C85.0859 38.4237 85.1094 38.4219 85.1329 38.4188C87.7012 38.0204 90.0841 37.1015 92.1349 35.7522C92.139 35.7536 92.1403 35.754 92.1449 35.7554C92.7192 37.2179 92.6768 38.5343 92.0192 39.6652C91.8981 39.8727 91.9659 40.1339 92.1638 40.2648C92.1711 40.2697 92.1751 40.2774 92.1828 40.2819C92.3988 40.4069 92.6754 40.3338 92.8006 40.1182C92.9276 39.8998 93.036 39.6742 93.1255 39.4428C93.4726 38.5451 94.4148 38.0272 95.3381 38.3037C98.5033 39.2497 100.817 42.178 100.817 45.6417V46.3635C100.817 46.8615 100.412 47.2657 99.9133 47.2657H93.1562C92.9068 47.2657 92.7043 47.4678 92.7043 47.7168C92.7043 47.9659 92.9068 48.168 93.1562 48.168H101.492C103.04 48.168 104.294 49.4203 104.294 50.9649V54.4837C104.294 58.7192 100.854 62.1527 96.6116 62.1527H89.0886H87.9348C83.6918 62.1527 80.2523 58.7192 80.2523 54.4837V50.9649C80.2523 49.4203 81.5063 48.168 83.0541 48.168H85.2075H87.9348C88.1843 48.168 88.3867 47.9659 88.3867 47.7168C88.3867 47.4678 88.1843 47.2657 87.9348 47.2657H83.0541C81.0074 47.2657 79.3484 48.9218 79.3484 50.9649V54.4837C79.3484 59.2177 83.1924 63.055 87.9348 63.055H96.6116C97.7807 63.055 98.8951 62.8199 99.9119 62.3954C100.27 62.2457 100.633 62.5655 100.529 62.9386C99.629 66.1749 96.659 68.5587 93.1346 68.5587H65.7765H63.8997C61.6062 68.5587 59.5478 67.5558 58.14 65.9656C56.3351 63.9261 57.5846 60.687 60.2817 60.2887L60.2844 60.2882H62.3849C62.6348 60.2882 62.8368 60.0861 62.8368 59.8371C62.8368 59.5877 62.6348 59.386 62.3849 59.386H55.7869C53.7904 59.386 52.1716 57.7701 52.1716 55.777V49.2809ZM29.1411 89.0978H29.0394V85.9399V81.4287V78.731V72.7757C29.1045 72.796 29.1677 72.8204 29.2342 72.838C29.6034 72.9345 29.978 72.981 30.3499 72.981H30.3816C31.7012 72.9715 32.7044 74.1462 32.3989 75.4279L29.1411 89.0978ZM27.1725 70.0907C26.7193 69.1614 26.6949 68.0836 27.1056 67.1349C27.666 65.8406 28.9608 64.9989 30.364 64.9989C30.42 64.9989 30.4765 65.0002 30.5325 65.0029L36.3654 65.284H36.3658C36.5498 65.2925 36.632 65.422 36.6591 65.477C36.6858 65.5321 36.7369 65.6764 36.6307 65.8267L33.2571 70.5851C32.4089 71.7824 30.8832 72.3363 29.4633 71.9651C28.4614 71.7034 27.6263 71.02 27.1725 70.0907ZM20.5447 89.0978H16.9977C16.4138 89.0978 15.9836 88.5537 16.1187 87.9866L18.3317 78.7012C18.442 78.2388 19.1009 78.2388 19.2107 78.7012L21.4242 87.9866C21.5593 88.5537 21.1286 89.0978 20.5447 89.0978ZM20.2185 57.4728C20.0422 57.2969 19.7561 57.2969 19.5799 57.4732C19.4032 57.6496 19.4037 57.9352 19.5799 58.1111C21.2072 59.7361 22.6159 61.5203 23.7976 63.4267C23.9919 63.7407 23.9391 64.1489 23.6779 64.4101L23.6724 64.416C20.7386 67.3442 15.9646 67.3447 13.0307 64.416C10.5963 61.9858 9.71549 53.6622 9.47598 50.7285C9.45338 50.4506 9.68295 50.2219 9.96088 50.2445C12.8997 50.4827 21.2371 51.3619 23.6724 53.7925C25.8326 55.9489 26.3993 59.0995 25.3775 61.7806C25.1389 62.4081 24.2884 62.4978 23.9115 61.9412C22.8378 60.3541 21.6054 58.8573 20.2185 57.4728ZM26.741 41.015C26.3781 41.605 25.5221 41.5956 25.1814 40.992C23.8496 38.6308 22.1906 36.4343 20.2185 34.4656C20.0422 34.2897 19.7561 34.2897 19.5799 34.4661C19.4032 34.6424 19.4037 34.928 19.5799 35.1039C21.1223 36.6436 22.4676 38.3267 23.6078 40.1213C24.668 41.7896 23.6607 43.9847 21.7025 44.2721C19.4308 44.605 17.0356 43.9026 15.2903 42.1604C13.7235 40.5963 12.8003 36.5917 12.2774 33.1537C11.8653 30.4457 14.2084 28.1201 16.9213 28.5315C20.3626 29.0535 24.4421 29.903 25.932 31.5374C29.3923 35.3349 27.901 39.1302 26.741 41.015ZM33.0095 39.5349C35.3079 37.2404 42.8707 36.3283 46.1814 36.0328C46.7423 35.9827 47.21 36.4496 47.1598 37.0099C46.8638 40.3144 45.9501 47.8635 43.6516 50.1579C42.2304 51.5766 40.3404 52.358 38.3308 52.358C37.0134 52.358 35.7494 52.0201 34.6346 51.3876C33.7375 50.8788 33.4808 49.6887 34.0611 48.8374C35.0096 47.4453 36.0852 46.1262 37.2832 44.8942C37.455 44.7173 37.4554 44.4372 37.281 44.2631C37.1025 44.0853 36.8101 44.0858 36.6343 44.2662C35.7481 45.1784 34.9269 46.137 34.1727 47.1367C33.2526 48.3556 31.2981 47.9235 30.9777 46.4307C30.4602 44.0208 31.1372 41.4039 33.0095 39.5349ZM160.824 74.9141C160.114 73.9175 159.327 72.9666 158.462 72.0706C158.286 71.8893 157.993 71.8893 157.814 72.0675V72.0679C157.64 72.2416 157.641 72.5204 157.812 72.6977C158.564 73.4763 159.464 74.9393 160.089 76.0337C160.596 76.9197 160.268 78.0534 159.36 78.5239C157.068 79.7126 154.171 79.3481 152.251 77.4309C150.451 75.634 149.695 69.8362 149.427 67.0068C149.374 66.4424 149.845 65.9715 150.411 66.0247C153.245 66.2913 159.052 67.0451 160.853 68.8429C162.429 70.4164 162.954 72.6445 162.434 74.6574C162.244 75.3913 161.264 75.5316 160.824 74.9141ZM167.162 61.0552C167.196 59.1789 167.928 57.3135 169.36 55.8844C171.658 53.5904 179.218 52.6783 182.529 52.3828C183.091 52.3323 183.56 52.8001 183.51 53.3613C183.214 56.6666 182.301 64.2125 180.002 66.5079C177.737 68.7684 174.378 69.2818 171.614 68.052C170.297 67.466 169.839 65.8321 170.676 64.6605C171.532 63.4614 172.485 62.3196 173.531 61.2442C173.703 61.0673 173.703 60.7872 173.529 60.613V60.6126C173.35 60.4349 173.058 60.4353 172.882 60.6158C172.279 61.237 171.705 61.8798 171.164 62.5425C169.807 64.1995 167.124 63.1944 167.162 61.0552ZM166.902 71.9583C167.655 69.7992 169.983 68.5388 172.168 69.2223C172.984 69.4776 173.832 69.6062 174.681 69.6062C176.839 69.6062 178.998 68.786 180.641 67.1457C183.842 63.9504 184.506 52.3296 184.533 51.8365C184.539 51.7084 184.492 51.5834 184.401 51.4932C184.31 51.4021 184.183 51.3556 184.057 51.3615C183.563 51.3881 171.921 52.0517 168.721 55.2465C166.104 57.8594 165.576 61.7742 167.13 64.9167C167.733 66.1357 167.808 67.5463 167.228 68.7761C165.369 72.7211 164.384 77.0573 164.384 81.5469V82.2182C163.94 80.7078 163.35 79.2484 162.623 77.8531C162.406 77.4358 162.417 76.9436 162.646 76.5327C164.13 73.8787 163.749 70.4583 161.492 68.205C158.848 65.5655 149.281 65.0205 148.875 64.9984C148.748 64.9925 148.622 65.0395 148.531 65.1301C148.44 65.2204 148.392 65.3453 148.399 65.4734C148.421 65.8785 148.967 75.4292 151.612 78.0687C152.974 79.4284 154.763 80.1083 156.552 80.1083C157.841 80.1083 159.129 79.7555 160.258 79.0504C160.952 78.6169 161.868 78.9182 162.176 79.6743C162.969 81.6132 164.189 84.8807 164.384 87.0316V87.9203C164.384 88.5704 163.856 89.0978 163.204 89.0978H162.34C162.34 89.0915 162.342 89.0856 162.342 89.0793C162.342 87.3925 160.967 86.0198 159.277 86.0198H155.611C155.016 85.5005 154.241 85.1834 153.391 85.1834H151.958C150.091 85.1834 148.578 86.6942 148.578 88.5573V89.0721C148.578 89.0811 148.58 89.0887 148.581 89.0978H148.579C147.566 89.0978 146.686 88.4035 146.452 87.4196L142.519 70.9189C142.111 69.2087 141.905 67.4561 141.905 65.6981V63.6148C141.905 62.3693 142.917 61.3592 144.165 61.3592H152.566C152.871 61.3592 153.172 61.2717 153.43 61.107L159.637 57.1457C159.996 56.917 160.277 56.5683 160.374 56.1542C160.535 55.4712 160.249 54.7985 159.683 54.4376L153.43 50.4466C153.172 50.2819 152.872 50.1944 152.566 50.1944H149.886C149.896 50.1994 149.797 50.2048 149.632 50.2102C149.557 50.1998 149.482 50.1944 149.407 50.1944H141.905V46.8534C141.905 46.1059 142.512 45.5 143.261 45.5H151.788C151.8 45.5 151.811 45.4978 151.823 45.4973C151.952 45.4991 152.104 45.5 152.289 45.5H154.659C155.54 45.5 156.26 44.7809 156.26 43.9022V35.9263C156.26 35.0475 155.546 34.3352 154.666 34.3352H152.29C152.104 34.3352 151.953 34.3361 151.827 34.3379C151.814 34.3375 151.801 34.3352 151.788 34.3352H143.261C142.512 34.3352 141.905 33.7294 141.905 32.9819V27.6839C141.905 26.202 138.423 25.5271 135.187 25.5271C134.798 25.5271 134.404 25.5366 134.014 25.5569C132.701 25.6241 131.52 24.7696 131.215 23.4925L128.125 10.5268C128.077 10.3234 127.895 10.1799 127.686 10.1799C127.477 10.1799 127.294 10.3234 127.246 10.5268L121.984 32.6052C121.789 33.4235 121.164 34.0984 120.342 34.2811C119.142 34.5473 118.009 33.8038 117.735 32.6724L111.607 7.34011C111.558 7.13666 111.377 6.99365 111.167 6.99365C110.958 6.99365 110.776 7.13666 110.728 7.34011L102.759 40.7718C102.702 41.0145 102.852 41.2577 103.094 41.3154C103.337 41.3736 103.581 41.2229 103.639 40.9807L109.848 14.9271C110.179 13.5408 112.156 13.5408 112.486 14.9271L117.161 34.5414L117.108 34.5788C117.103 34.582 117.097 34.5842 117.093 34.5874L110.886 38.5482C110.527 38.7774 110.246 39.1252 110.148 39.5394C109.987 40.2219 110.273 40.8954 110.84 41.2568L117.093 45.2479C117.101 45.2528 117.109 45.2551 117.116 45.2623C117.302 45.4531 117.593 45.4996 117.86 45.4996L118.84 45.5L118.113 48.7801C117.93 49.6061 117.196 50.1944 116.348 50.1944H115.576C115.27 50.1944 114.987 50.2846 114.744 50.433C114.285 50.7132 113.976 51.2126 113.976 51.786V59.7677C113.976 60.4967 114.473 61.1057 115.146 61.2938L109.352 85.6083C107.845 85.81 106.678 87.0984 106.678 88.657V89.0978H92.1706L97.0816 68.4937C99.6973 67.1349 101.521 64.4733 101.696 61.3745C103.815 59.8123 105.198 57.309 105.198 54.4837V50.9649C105.198 49.0025 103.657 47.3965 101.721 47.2775V47.079V45.6417C101.721 41.4106 98.6317 37.8937 94.5875 37.203C93.929 37.0907 93.3709 36.6292 93.1811 35.9895C93.1472 35.874 93.1088 35.7576 93.0672 35.6408C93.0157 35.4987 92.9542 35.3615 92.8919 35.2248C93.9439 34.4444 94.8961 33.5444 95.7227 32.5343C95.8804 32.3413 95.8515 32.0571 95.6581 31.8992C95.4651 31.7417 95.1799 31.7706 95.0222 31.9637C94.6733 32.39 94.3009 32.7965 93.9064 33.1808C93.2335 33.8372 92.1575 33.9157 91.4516 33.2945C90.9721 32.8722 90.4149 32.5181 89.7922 32.2461C88.0157 31.4702 85.9197 31.4458 84.1862 32.1811C83.3135 32.551 82.5051 33.0459 81.7237 33.5241C81.3174 33.7731 80.9107 34.0221 80.4949 34.2531C79.1401 35.0078 77.6849 35.5749 76.1706 35.939C75.6522 36.0639 75.1226 36.1654 74.5961 36.2403L74.5043 36.2534C74.066 36.3152 73.5689 36.3851 73.1323 36.6535C72.9642 36.7568 72.8101 36.9021 72.6831 37.0704H63.8997C59.4524 37.0704 55.7856 40.4628 55.3562 44.7913C55.1357 44.8125 54.9215 44.8527 54.7114 44.9041L50.9889 29.2854C50.9306 29.0427 50.6866 28.8929 50.4448 28.9506C50.2017 29.0084 50.0517 29.2515 50.1095 29.4938L53.855 45.2086C52.3284 45.9336 51.2678 47.4836 51.2678 49.2809V55.777C51.2678 55.8465 51.2696 55.916 51.2727 55.9845C51.3093 56.7515 50.6907 57.3893 49.9211 57.3893H48.4266C43.7759 57.3893 40.006 61.1526 40.006 65.7946V88.0633C40.006 88.4382 40.1073 88.7865 40.2695 89.0978H30.0702L34.4524 70.7096C34.5116 70.4624 34.6174 70.2287 34.7647 70.0207L37.332 66.3991C37.5404 66.105 37.647 65.7382 37.5747 65.3855C37.4568 64.8089 36.9692 64.4097 36.4092 64.3826L35.5063 64.3389L30.5764 64.1016C30.4087 64.0939 30.2419 64.0957 30.0774 64.107C29.5284 64.1444 29.0814 63.6834 29.1194 63.1353C29.4167 58.8582 30.6365 54.7638 32.6845 51.08C33.4939 51.8121 34.4213 52.3715 35.4222 52.7396C36.6854 53.2034 37.3696 54.5734 37.0582 55.8808L35.9564 60.5034C35.8986 60.7457 36.0486 60.9893 36.2913 61.0466C36.3261 61.0552 36.3613 61.0592 36.3961 61.0592C36.6008 61.0592 36.7861 60.9198 36.8354 60.7123L38.6146 53.2462C40.7589 53.1759 42.7663 52.3178 44.2906 50.7957C47.4911 47.6009 48.1559 35.9796 48.1825 35.4869C48.1893 35.3588 48.1414 35.2339 48.051 35.1432C47.9602 35.0525 47.8359 35.0033 47.7067 35.0119C47.5047 35.0227 45.4371 35.1405 42.8459 35.4942L46.7531 19.0999C46.8634 18.638 47.5223 18.638 47.6321 19.0999L48.1961 21.4638C48.2535 21.7061 48.4971 21.8559 48.7397 21.7981H48.7402C48.9829 21.7408 49.1329 21.4972 49.0751 21.255L47.6321 15.2023C47.5842 14.9988 47.4021 14.8553 47.1928 14.8553C46.9836 14.8553 46.8015 14.9988 46.7531 15.2023L42.5661 32.7698C42.1626 34.4638 40.8172 35.772 39.1108 36.1357C36.3473 36.7248 33.667 37.6031 32.3705 38.897C29.2075 42.0548 29.0981 47.1128 32.0243 50.4132C30.7006 52.7446 29.6929 55.2361 29.0394 57.8391V55.7238C29.0394 52.3778 27.638 46.7348 26.9466 44.1566C26.7328 43.3577 26.9018 42.51 27.3944 41.8441C29.8293 38.5537 29.555 33.8787 26.571 30.8995C23.3701 27.7046 11.7288 27.041 11.2348 27.0144C11.1056 27.0068 10.9813 27.0555 10.8909 27.1457C10.8001 27.2364 10.7522 27.3613 10.759 27.4895C10.7856 27.9821 11.4504 39.6034 14.6509 42.7983C16.2945 44.4385 18.4524 45.2587 20.6107 45.2587C21.6302 45.2587 22.6484 45.0724 23.6123 44.7038C24.7701 44.2608 26.0807 44.8847 26.4915 46.0527C27.5707 49.1189 28.1356 52.3774 28.1356 55.7238V64.2139C28.1356 64.4986 28.0032 64.7692 27.7713 64.9348C27.5865 65.0665 27.4111 65.2127 27.2475 65.371C26.8029 65.8032 26.0784 65.7008 25.7974 65.1477C25.7232 65.0029 25.6487 64.8586 25.5723 64.7151C25.3495 64.2942 25.3558 63.7917 25.599 63.382C27.5101 60.1561 27.0858 55.9241 24.3115 53.1547C21.1105 49.9598 9.4692 49.2962 8.97525 49.2696C8.84736 49.2642 8.72218 49.3102 8.63135 49.4009C8.54051 49.4916 8.49261 49.6165 8.49939 49.7446C8.52605 50.2373 9.19082 61.8586 12.3913 65.0539C14.0349 66.6942 16.1928 67.5143 18.3511 67.5143C20.5095 67.5143 22.6683 66.6937 24.3115 65.0539C24.405 64.9601 24.4868 64.8595 24.5754 64.7625C25.0616 65.6489 25.5013 66.5584 25.8909 67.489C25.9551 67.642 25.9691 67.8093 25.9478 67.9731C25.838 68.8244 25.9754 69.6973 26.3604 70.4858C26.5954 70.9681 26.9158 71.3931 27.2955 71.754C27.8481 74.0105 28.1356 76.3486 28.1356 78.731V81.4287V85.9399V89.0978H27.8997C27.4631 89.0978 27.0885 88.786 27.0107 88.3561L26.7604 86.9798C26.7161 86.7348 26.4802 86.5719 26.2353 86.6161C25.9899 86.6608 25.8267 86.8954 25.8715 87.1408L26.0333 88.0349C26.134 88.5884 25.7079 89.0978 25.1443 89.0978H24.0457C23.2088 89.0978 22.4812 88.5239 22.2869 87.711L19.2107 74.8031C19.1623 74.5996 18.9807 74.4562 18.7714 74.4562C18.5622 74.4562 18.3801 74.5996 18.3317 74.8031L15.2551 87.711C15.0616 88.5239 14.3341 89.0978 13.4967 89.0978H12.0998C11.7979 89.0978 11.5534 88.8533 11.5534 88.5519V88.3412C11.5534 88.0922 11.351 87.8901 11.1015 87.8901C10.8521 87.8901 10.6496 88.0922 10.6496 88.3412V88.5519C10.6496 88.8533 10.4047 89.0978 10.1028 89.0978C9.8009 89.0978 9.55642 88.8533 9.55642 88.5519V87.06C9.55642 86.811 9.35396 86.6089 9.1045 86.6089C8.85459 86.6089 8.65259 86.811 8.65259 87.06V88.5519C8.65259 88.8533 8.40765 89.0978 8.10577 89.0978H0.895458C0.646001 89.0978 0.443542 89.2994 0.443542 89.5489C0.443542 89.7984 0.646001 90 0.895458 90H29.4981H130.736H146.494H149.507H153.431H155.841H161.419H176.156C176.406 90 176.608 89.7984 176.608 89.5489C176.608 89.2994 176.406 89.0978 176.156 89.0978H170.612C170.256 89.0978 169.991 88.7666 170.072 88.4197L170.239 87.693C170.296 87.4503 170.144 87.208 169.901 87.1521C169.658 87.0966 169.415 87.2468 169.359 87.4904L169.087 88.6683C169.028 88.9196 168.804 89.0978 168.546 89.0978C168.24 89.0978 167.991 88.8496 167.991 88.5438V87.0582C167.991 86.8088 167.789 86.6071 167.539 86.6071C167.29 86.6071 167.087 86.8088 167.087 87.0582V88.5438C167.087 88.8496 166.839 89.0978 166.533 89.0978H166.532C165.902 89.0978 165.388 88.6038 165.356 87.9763C165.339 87.6506 165.316 87.3262 165.288 87.0032V81.5469C165.288 78.2307 165.842 75.0002 166.902 71.9583ZM178.941 89.0978H178.203C177.953 89.0978 177.751 89.2994 177.751 89.5489C177.751 89.7984 177.953 90 178.203 90H178.941C179.191 90 179.393 89.7984 179.393 89.5489C179.393 89.2994 179.191 89.0978 178.941 89.0978Z",
						fill: "#202225"
					}), (0, r.jsx)("path", {
						fillRule: "evenodd",
						clipRule: "evenodd",
						d: "M66.1693 22.9399C65.9315 22.3625 66.6582 21.8807 67.1354 22.2845C68.9404 23.8133 70.9022 24.2107 71.0242 24.2337C71.0522 24.2392 71.0807 24.2414 71.1087 24.2414C71.3211 24.2414 71.51 24.0912 71.5516 23.8751C71.5986 23.6306 71.4377 23.3947 71.1932 23.3473C71.1634 23.3419 68.9639 22.8948 67.2032 21.112C66.9036 20.8088 67.0066 20.2842 67.4048 20.1312C67.426 20.1231 67.4477 20.115 67.4694 20.1078C67.7252 20.0185 68.0094 19.9752 68.3077 19.9752C68.9124 19.9752 69.5749 20.1543 70.1732 20.4949C71.181 21.0687 71.8092 21.9439 72.4744 22.8705C72.7573 23.2647 73.0501 23.6721 73.3791 24.0659L73.4329 24.1313C73.6096 24.3452 74.0235 24.8464 74.3928 25.1897C72.595 25.736 70.5117 25.6142 68.5264 24.8477C67.36 24.3971 66.5068 23.7154 66.1851 22.9774C66.1796 22.9647 66.1747 22.9521 66.1693 22.9399ZM65.0575 18.5113C64.8266 18.6051 64.7154 18.8686 64.8099 19.0991C65.0331 19.6454 65.3002 20.1335 65.594 20.5729C65.5117 20.715 65.4353 20.863 65.3712 21.0222C65.0458 21.8333 65.0404 22.612 65.3563 23.3369C65.9275 24.6483 67.3835 25.3733 68.2006 25.6891C69.4718 26.1803 70.7842 26.4285 72.0536 26.4285C72.953 26.4285 73.831 26.3039 74.6562 26.0527C74.9518 25.9629 75.1755 25.7319 75.2541 25.4351C75.3323 25.1401 75.2532 24.831 75.0426 24.6091C74.7014 24.2486 74.2866 23.7465 74.1302 23.5571L74.0733 23.4885V23.488C73.7655 23.1199 73.4826 22.7261 73.2092 22.3449C72.5164 21.38 71.8006 20.3825 70.6211 19.7108C69.4908 19.0671 68.2011 18.8974 67.1716 19.2556C66.8037 19.3837 66.4797 19.5782 66.1991 19.8272C65.9957 19.4983 65.8059 19.1478 65.6468 18.758C65.5524 18.5275 65.2894 18.4156 65.0575 18.5113ZM95.5706 7.32932C95.5756 7.32752 95.5792 7.32346 95.5837 7.3212C95.8093 7.23278 95.9277 6.98331 95.8459 6.75369C95.1364 4.74981 95.0762 2.66743 95.6375 0.895879C96.0085 1.2676 96.498 1.69527 96.7068 1.87797L96.7718 1.93481C97.1564 2.27451 97.5559 2.57856 97.9418 2.87224C98.8502 3.56336 99.7084 4.21613 100.253 5.23928C100.736 6.14513 100.854 7.18361 100.561 7.94871L100.557 7.95909C100.392 8.3872 99.8399 8.48464 99.5231 8.15262C98.8122 7.40872 98.3318 6.60708 98.0209 5.9313C97.9165 5.70483 97.6481 5.60559 97.4217 5.7098C97.1948 5.81401 97.0954 6.08152 97.1993 6.30798C97.5148 6.99279 97.9812 7.79623 98.6599 8.56134C98.9261 8.86178 98.7137 9.34944 98.3129 9.32102C97.9821 9.29711 97.6702 9.18614 97.3715 8.98765C97.1745 8.85637 96.9169 8.90464 96.7718 9.08554C96.7637 9.09591 96.7519 9.10178 96.7447 9.11261C96.6064 9.32012 96.6625 9.59982 96.8699 9.73831C97.3571 10.0622 97.8921 10.2255 98.4534 10.2251C98.8208 10.2251 99.1995 10.1556 99.5832 10.0148C99.7459 9.9553 99.8973 9.88267 100.043 9.80418C100.473 10.1114 100.952 10.3933 101.493 10.632C101.552 10.6581 101.614 10.6708 101.675 10.6708C101.849 10.6708 102.014 10.5706 102.089 10.4024C102.189 10.1745 102.086 9.90793 101.858 9.80688C101.472 9.63636 101.129 9.43471 100.806 9.22223C101.062 8.9502 101.267 8.63306 101.405 8.27036C101.794 7.25398 101.662 5.96242 101.051 4.81522C100.413 3.6184 99.4354 2.8745 98.4896 2.15451C98.1163 1.87075 97.7308 1.57752 97.3711 1.25948L97.3024 1.19903C97.1175 1.03753 96.6272 0.608966 96.2774 0.258895C96.061 0.0423571 95.755 -0.046965 95.4568 0.0238611C95.1571 0.0933338 94.9194 0.309421 94.8205 0.601748C94.1557 2.56954 94.2172 4.86124 94.994 7.05459C95.0771 7.28917 95.3343 7.41323 95.5706 7.32932ZM63.0592 10.2271H63.7416V10.9082C63.7416 11.1573 63.9441 11.3594 64.1935 11.3594C64.4434 11.3594 64.6454 11.1573 64.6454 10.9082V10.2271H65.3278C65.5773 10.2271 65.7797 10.025 65.7797 9.77594C65.7797 9.52692 65.5773 9.32481 65.3278 9.32481H64.6454V8.64362C64.6454 8.3946 64.4434 8.1925 64.1935 8.1925C63.9441 8.1925 63.7416 8.3946 63.7416 8.64362V9.32481H63.0592C62.8098 9.32481 62.6073 9.52692 62.6073 9.77594C62.6073 10.025 62.8098 10.2271 63.0592 10.2271ZM92.7371 24.2416H93.4195V24.9227C93.4195 25.1718 93.622 25.3739 93.8714 25.3739C94.1213 25.3739 94.3234 25.1718 94.3234 24.9227V24.2416H95.0057C95.2552 24.2416 95.4577 24.0395 95.4577 23.7904C95.4577 23.5414 95.2552 23.3393 95.0057 23.3393H94.3234V22.6581C94.3234 22.4091 94.1213 22.207 93.8714 22.207C93.622 22.207 93.4195 22.4091 93.4195 22.6581V23.3393H92.7371C92.4877 23.3393 92.2852 23.5414 92.2852 23.7904C92.2852 24.0395 92.4877 24.2416 92.7371 24.2416ZM157.561 15.7581H158.244V16.4393C158.244 16.6883 158.446 16.8904 158.696 16.8904C158.945 16.8904 159.148 16.6883 159.148 16.4393V15.7581H159.83C160.079 15.7581 160.282 15.556 160.282 15.307C160.282 15.058 160.079 14.8559 159.83 14.8559H159.148V14.1747C159.148 13.9257 158.945 13.7236 158.696 13.7236C158.446 13.7236 158.244 13.9257 158.244 14.1747V14.8559H157.561C157.312 14.8559 157.109 15.058 157.109 15.307C157.109 15.556 157.312 15.7581 157.561 15.7581ZM83.0931 11.8932C83.2088 11.8932 83.3245 11.849 83.4126 11.761L83.9472 11.2269C84.1239 11.0509 84.1239 10.7654 83.9472 10.589C83.771 10.4131 83.4845 10.4131 83.3082 10.589L82.7736 11.1231C82.5969 11.2995 82.5969 11.5851 82.7736 11.761C82.8617 11.849 82.9774 11.8932 83.0931 11.8932ZM80.4194 14.5621C80.5351 14.5621 80.6507 14.5179 80.7389 14.4299L81.2739 13.8962C81.4502 13.7203 81.4502 13.4343 81.2739 13.2583C81.0972 13.0819 80.8112 13.0819 80.6349 13.2583L80.0999 13.792C79.9232 13.9679 79.9232 14.2535 80.0999 14.4299C80.188 14.5179 80.3037 14.5621 80.4194 14.5621ZM83.3083 14.4299C83.3964 14.5179 83.5121 14.5621 83.6278 14.5621C83.7435 14.5621 83.8592 14.5179 83.9473 14.4299C84.124 14.2535 84.124 13.9684 83.9473 13.792L83.4127 13.2583C83.236 13.0819 82.9504 13.0819 82.7737 13.2583C82.597 13.4343 82.597 13.7198 82.7737 13.8962L83.3083 14.4299ZM80.6347 11.7611C80.7228 11.849 80.8385 11.8932 80.9542 11.8932C81.0699 11.8932 81.1856 11.849 81.2737 11.7611C81.4504 11.5847 81.4504 11.2996 81.2737 11.1232L80.7386 10.589C80.5624 10.4131 80.2763 10.4131 80.0996 10.589C79.9234 10.7654 79.9234 11.051 80.0996 11.2269L80.6347 11.7611ZM73.5643 54.3332C74.6827 54.3332 75.5979 53.4197 75.5979 52.3032C75.5979 51.1866 74.6827 50.2731 73.5643 50.2731C72.4458 50.2731 71.5306 51.1866 71.5306 52.3032C71.5306 53.4197 72.4458 54.3332 73.5643 54.3332Z",
						fill: "#202225"
					})]
				})
			}
			n(73800)
		},
		203893: function(e, t, n) {
			n.d(t, {
				Z: () => o
			});
			var r = n(255367);
			n(73800);
			var l = n(325767);

			function o(e) {
				var t, n, {
						width: o = 24,
						height: i = 24,
						color: a = "currentColor"
					} = e,
					s = function(e, t) {
						if (null == e) return {};
						var n, r, l = function(e, t) {
							if (null == e) return {};
							var n, r, l = {},
								o = Object.keys(e);
							for (r = 0; r < o.length; r++) n = o[r], t.indexOf(n) >= 0 || (l[n] = e[n]);
							return l
						}(e, t);
						if (Object.getOwnPropertySymbols) {
							var o = Object.getOwnPropertySymbols(e);
							for (r = 0; r < o.length; r++) n = o[r], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (l[n] = e[n])
						}
						return l
					}(e, ["width", "height", "color"]);
				return (0, r.jsxs)("svg", (t = function(e) {
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
				}({}, (0, l.Z)(s)), n = n = {
					width: o,
					height: i,
					viewBox: "0 0 23 21",
					fill: "none",
					xmlns: "http://www.w3.org/2000/svg",
					children: [(0, r.jsx)("path", {
						d: "M11 8C13.2092 8 15 6.20914 15 4C15 1.79086 13.2092 0 11 0C8.7909 0 7.00004 1.79086 7.00004 4C7.00004 6.20914 8.7909 8 11 8Z",
						fill: a
					}), (0, r.jsx)("path", {
						d: "M10.4819 9C5.21683 9 0.948608 13.2682 0.948608 18.5333C0.948608 19.3434 1.60526 20 2.41528 20H2.63597C2.87577 20 3.08011 19.8292 3.13966 19.597C3.42499 18.4841 3.98016 17.4277 4.45873 16.6878C4.59397 16.4787 4.88927 16.5934 4.86449 16.8412L4.60358 19.4502C4.57415 19.7446 4.80529 20 5.1011 20H10.9805C10.9805 19 11.4727 18.4453 11.9844 17.5L14 13.9961C14 13.9961 15.1133 11.9805 15.5195 11.3672C15.8512 10.9263 16.315 10.5651 16.5 10.5C15.5 9.5 13.2847 9 11.4153 9H10.4819Z",
						fill: a
					}), (0, r.jsx)("path", {
						fillRule: "evenodd",
						clipRule: "evenodd",
						d: "M18.9108 12.6271C18.5159 11.9391 17.4841 11.9391 17.0892 12.6271L13.1302 19.524C12.7491 20.1878 13.2503 20.9999 14.041 20.9999L21.9591 21C22.7497 21 23.2509 20.1878 22.8699 19.5241L18.9108 12.6271ZM18.4457 14.5H17.5543C17.2579 14.5 17.0265 14.7565 17.057 15.0514L17.2654 17.0683C17.2819 17.2279 17.4424 17.3297 17.5993 17.296C17.726 17.2687 17.863 17.25 18 17.25C18.137 17.25 18.274 17.2687 18.4007 17.296C18.5576 17.3297 18.7182 17.2279 18.7347 17.0683L18.943 15.0514C18.9735 14.7565 18.7422 14.5 18.4457 14.5ZM19 19C19 19.5523 18.5523 20 18 20C17.4477 20 17 19.5523 17 19C17 18.4477 17.4477 18 18 18C18.5523 18 19 18.4477 19 19Z",
						fill: a
					})]
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
		},
		201367: function(e, t, n) {
			e.exports = {
				spacing: "spacing_bad290",
				content: "content_bad290",
				scroller: "scroller_bad290"
			}
		},
		962923: function(e, t, n) {
			e.exports = {
				searchContainer: "searchContainer__6ae25",
				searchBox: "searchBox__6ae25",
				resultsListContainer: "resultsListContainer__6ae25",
				resultsList: "resultsList__6ae25",
				resultsListParent: "resultsListParent__6ae25",
				sectionTitle: "sectionTitle__6ae25",
				selectableSearchRow: "selectableSearchRow__6ae25",
				rowHeight: "rowHeight__6ae25",
				sectionHeight: "sectionHeight__6ae25",
				sectionFooter: "sectionFooter__6ae25",
				rowContainer: "rowContainer__6ae25",
				rowLabel: "rowLabel__6ae25",
				searchRowLabel: "searchRowLabel__6ae25",
				roleTagContainer: "roleTagContainer__6ae25",
				roleTagIcon: "roleTagIcon__6ae25",
				roleTagLabel: "roleTagLabel__6ae25",
				channelLabel: "channelLabel__6ae25",
				helperText: "helperText__6ae25",
				hasParent: "hasParent__6ae25",
				noIndent: "noIndent__6ae25",
				channelIcon: "channelIcon__6ae25"
			}
		},
		396561: function(e, t, n) {
			e.exports = {
				questionContainer: "questionContainer__0a749",
				disabledQuestionContainer: "disabledQuestionContainer__0a749",
				questionTitle: "questionTitle__0a749",
				requirementContainer: "requirementContainer__0a749",
				requirementIcon: "requirementIcon__0a749",
				requirementText: "requirementText__0a749",
				requirementSuccess: "requirementSuccess__0a749",
				requirementFailure: "requirementFailure__0a749",
				footnote: "footnote__0a749"
			}
		},
		571031: function(e, t, n) {
			e.exports = {
				messageContainer: "messageContainer__7796e",
				saveNoticeContainer: "saveNoticeContainer__7796e",
				buttonContainer: "buttonContainer__7796e",
				clearButton: "clearButton__7796e"
			}
		},
		128863: function(e, t, n) {
			e.exports = {
				noResultsContainer: "noResultsContainer__9c6d0"
			}
		},
		172796: function(e, t, n) {
			e.exports = {
				table: "table_b4ec0b"
			}
		},
		958404: function(e, t, n) {
			e.exports = {
				nagivateBackContainer: "nagivateBackContainer__786f4",
				calendarContainer: "calendarContainer__786f4",
				calendar: "calendar__786f4",
				otherDatesContainer: "otherDatesContainer__786f4",
				focused: "focused__786f4",
				leftContainer: "leftContainer__786f4",
				otherDateLabel: "otherDateLabel__786f4",
				radioSelection: "radioSelection__786f4"
			}
		},
		771221: function(e, t, n) {
			e.exports = {
				checkboxLabel: "checkboxLabel__3ed1a",
				unusualDMLabelIcon: "unusualDMLabelIcon__3ed1a",
				timeoutLabelIcon: "timeoutLabelIcon__3ed1a",
				unusualAccountActivityLabelIcon: "unusualAccountActivityLabelIcon__3ed1a",
				quarantinedLabelIcon: "quarantinedLabelIcon__3ed1a"
			}
		},
		771429: function(e, t, n) {
			e.exports = {
				tableHeaderRow: "tableHeaderRow__9dd6b",
				tableHeaderCellContainer: "tableHeaderCellContainer__9dd6b",
				tableHeaderCellWithFilter: "tableHeaderCellWithFilter__9dd6b",
				tableHeaderCell: "tableHeaderCell__9dd6b",
				filterIcon: "filterIcon__9dd6b",
				filterIconButton: "filterIconButton__9dd6b"
			}
		},
		23: function(e, t, n) {
			e.exports = {
				labelWithIconContainer: "labelWithIconContainer_c2c6a6",
				icon: "icon_c2c6a6",
				radioSelection: "radioSelection_c2c6a6",
				customLabelContainer: "customLabelContainer_c2c6a6",
				labelText: "labelText_c2c6a6",
				focused: "focused_c2c6a6",
				selectedOption: "selectedOption_c2c6a6",
				containerWithRightCaret: "containerWithRightCaret_c2c6a6"
			}
		},
		673285: function(e, t, n) {
			e.exports = {
				paginationContainer: "paginationContainer_e8f197",
				pagination: "pagination_e8f197",
				paginationInput: "paginationInput_e8f197",
				pageSizeInput: "pageSizeInput_e8f197",
				pageSizeSelection: "pageSizeSelection_e8f197",
				pageLabel: "pageLabel_e8f197"
			}
		},
		506192: function(e, t, n) {
			e.exports = {
				rolePopout: "rolePopout__31b61",
				roleNameContainer: "roleNameContainer__31b61",
				roleLabel: "roleLabel__31b61",
				checkboxContainer: "checkboxContainer__31b61",
				labelBackground: "labelBackground__31b61",
				selected: "selected__31b61"
			}
		},
		350381: function(e, t, n) {
			e.exports = {
				flagContainer: "flagContainer__71c22",
				roleContainer: "roleContainer__71c22",
				roundedRow: "roundedRow__71c22",
				shimmer: "shimmer__71c22",
				memberRowContainer: "memberRowContainer__71c22",
				loading: "loading__71c22",
				actionCell: "actionCell__71c22",
				selected: "selected__71c22",
				memberSelected: "memberSelected__71c22",
				addRoleContainer: "addRoleContainer__71c22",
				compact: "compact__71c22",
				xsmallCol: "xsmallCol__71c22",
				smallCol: "smallCol__71c22",
				mediumCol: "mediumCol__71c22",
				memberNameContainer: "memberNameContainer__71c22",
				memberGlobalName: "memberGlobalName__71c22",
				memberNameText: "memberNameText__71c22",
				memberName: "memberName__71c22",
				memberAvatar: "memberAvatar__71c22",
				communicationDisabledTooltip: "communicationDisabledTooltip__71c22",
				button: "button__71c22",
				highestRole: "highestRole__71c22",
				otherRoles: "otherRoles__71c22",
				addRoleIcon: "addRoleIcon__71c22",
				roleTooltipItem: "roleTooltipItem__71c22",
				disabledActionTooltip: "disabledActionTooltip__71c22",
				nameContainer: "nameContainer__71c22",
				memberClanTag: "memberClanTag__71c22"
			}
		},
		630620: function(e, t, n) {
			e.exports = {
				searchBar: "searchBar__98d1c",
				searchHeaderContainer: "searchHeaderContainer__98d1c",
				searchHeader: "searchHeader__98d1c",
				searchInput: "searchInput__98d1c",
				tableOptions: "tableOptions__98d1c",
				sortButton: "sortButton__98d1c",
				sortText: "sortText__98d1c"
			}
		},
		93163: function(e, t, n) {
			e.exports = {
				newMembersNotice: "newMembersNotice_acdcc0",
				memberNoticeAction: "memberNoticeAction_acdcc0",
				memberNoticeActionButton: "memberNoticeActionButton_acdcc0",
				memberNoticeActionIcon: "memberNoticeActionIcon_acdcc0"
			}
		},
		708210: function(e, t, n) {
			e.exports = {
				subheaderContainer: "subheaderContainer__6f7ce",
				subHeaderTextContainer: "subHeaderTextContainer__6f7ce",
				subHeaderText: "subHeaderText__6f7ce",
				heading: "heading__6f7ce",
				tagLine: "tagLine__6f7ce",
				buttonContainer: "buttonContainer__6f7ce",
				reportButton: "reportButton__6f7ce",
				lockdownNoticeButton: "lockdownNoticeButton__6f7ce",
				lockdownButtonInner: "lockdownButtonInner__6f7ce",
				lockdownButtonInnerRaidDetected: "lockdownButtonInnerRaidDetected__6f7ce",
				lockIcon: "lockIcon__6f7ce",
				lockdownButtonText: "lockdownButtonText__6f7ce",
				shieldIcon: "shieldIcon__6f7ce"
			}
		}
	}
]);
//# sourceMappingURL=05c9e0c57a11df6d.js.map