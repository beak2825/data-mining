"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
	["7590"], {
		185413: function(e, t, n) {
			n.d(t, {
				U: () => k,
				default: () => P,
				t: () => Z
			}), n(953529), n(388685), n(781311), n(413496), n(433524), n(35282), n(539854);
			var r = n(255367),
				l = n(73800),
				i = n(442837),
				a = n(755721),
				s = n(481060),
				o = n(741361),
				c = n(794433),
				d = n(600164),
				u = n(313201),
				m = n(131704),
				x = n(592125),
				h = n(271383),
				b = n(485386),
				y = n(430824),
				f = n(626135),
				p = n(934415),
				g = n(892880),
				j = n(226951),
				v = n(605436),
				E = n(971628),
				S = n(71080),
				T = n(981631),
				w = n(494831),
				R = n(388032),
				O = n(208838);

			function C(e) {
				var t = function(e, t) {
					if ("object" !== N(e) || null === e) return e;
					var n = e[Symbol.toPrimitive];
					if (void 0 !== n) {
						var r = n.call(e, t || "default");
						if ("object" !== N(r)) return r;
						throw TypeError("@@toPrimitive must return a primitive value.")
					}
					return ("string" === t ? String : Number)(e)
				}(e, "string");
				return "symbol" === N(t) ? t : String(t)
			}

			function N(e) {
				return e && "undefined" != typeof Symbol && e.constructor === Symbol ? "symbol" : typeof e
			}
			let M = (0, u.hQ)();

			function L(e, t) {
				return t ? e.slice(1) : e
			}

			function k(e) {
				let t, {
						guild: n,
						channel: a,
						permission: s,
						pendingAdditions: o,
						setPendingAdditions: d,
						isStageChannel: u = null != a && a.isGuildStageVoice(),
						description: m
					} = e,
					[x, y] = l.useState(!1),
					[f, p] = l.useState(""),
					T = (0, i.e7)([b.Z], () => b.Z.getRoles(n.id));

				function w(e) {
					let t = L(f.trim(), x);
					return RegExp("".concat(j.Z.escape(t)), "i").test(e)
				}
				let O = (0, i.Wu)([h.ZP], () => h.ZP.getMemberIds(n.id));
				x ? t = [] : u ? t = v.Wx(n, T, a, s, w) : 0 !== (t = v.ik(n, T, a, s, w)).length || "" !== f.trim() || v.RD(n, T) || (t = v.aq());
				let N = v.iI(O, a, n, s, w),
					{
						placeholderText: M,
						hintText: k,
						renderEmptyText: P
					} = {
						placeholderText: R.intl.string(R.t.iezLLi),
						hintText: R.intl.string(R.t["rwFx8/"]),
						renderEmptyText: e => R.intl.format(R.t.ErpIY2, {
							query: e
						})
					};
				return (0, r.jsx)(Z, {
					pendingAdditions: o,
					query: f,
					onQueryChange: function(e) {
						let t = e.trim(),
							r = "@" === t.charAt(0);
						g.Z.requestMembers(n.id, L(t, r), S.EQ), p(e), y(r)
					},
					onClickRow: function(e) {
						let t = (0, E.G)(e);
						d(n => {
							let r = function(e) {
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
							}({}, n);
							if (t in r) delete r[t];
							else {
								let n;
								e.rowType === S.aC.ROLE || e.rowType === S.aC.ADMINISTRATOR ? n = {
									type: c.F.ROLE,
									label: e.name,
									color: e.colorString
								} : (e.rowType === S.aC.MEMBER || e.rowType === S.aC.OWNER) && (n = {
									type: c.F.MEMBER,
									label: e.name,
									avatar: e.avatarURL
								}), null != n && (r[t] = {
									display: n,
									row: e
								})
							}
							return r
						})
					},
					onRemovePendingAddition: function(e) {
						d(t => {
							let {
								[e]: n
							} = t;
							return function(e, t) {
								if (null == e) return {};
								var n, r, l = function(e, t) {
									if (null == e) return {};
									var n, r, l = {},
										i = Object.keys(e);
									for (r = 0; r < i.length; r++) n = i[r], t.indexOf(n) >= 0 || (l[n] = e[n]);
									return l
								}(e, t);
								if (Object.getOwnPropertySymbols) {
									var i = Object.getOwnPropertySymbols(e);
									for (r = 0; r < i.length; r++) n = i[r], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (l[n] = e[n])
								}
								return l
							}(t, [e].map(C))
						})
					},
					roles: t,
					members: N,
					placeholderText: M,
					hintText: k,
					renderEmptyText: P,
					isStageChannel: u,
					description: m
				})
			}

			function Z(e) {
				let t, {
					listClassName: n,
					pendingAdditions: l,
					query: i,
					onQueryChange: a,
					onClickRow: o,
					onRemovePendingAddition: c,
					roles: d,
					members: u,
					placeholderText: m,
					hintText: x,
					renderEmptyText: h,
					isStageChannel: b,
					focusSearchAfterReady: y,
					isReady: f,
					description: p
				} = e;
				return (0, r.jsxs)("div", {
					className: O.content,
					children: [(null == (t = p) && b && (t = R.intl.string(R.t.f7VbhI)), null == t || "" === t) ? null : (0, r.jsx)(s.Text, {
						color: "header-secondary",
						className: O.description,
						variant: "text-sm/normal",
						children: t
					}), (0, r.jsx)(E.Z, {
						listClassName: n,
						pendingAdditions: l,
						query: i,
						onQueryChange: a,
						onClickRow: o,
						onRemovePendingAddition: c,
						roles: d,
						members: u,
						placeholderText: m,
						hintText: x,
						renderEmptyText: h,
						disabledText: b ? R.intl.string(R.t.MVVOCg) : null,
						focusSearchAfterReady: y,
						isReady: f,
						maxCount: w.ey
					})]
				})
			}

			function P(e) {
				let {
					transitionState: t,
					onClose: n,
					channelId: c,
					newChannel: u,
					inSettings: h
				} = e, [b, g] = l.useState(!1), [j, v] = l.useState({}), E = (0, i.e7)([x.Z], () => x.Z.getChannel(c), [c]), w = (0, i.e7)([y.Z], () => y.Z.getGuild(null == E ? void 0 : E.getGuildId()));
				if (l.useEffect(() => {
						f.default.track(T.rMx.OPEN_MODAL, {
							type: "Grant Channel Access"
						})
					}, []), null == E || null == w) return null;
				let C = u && 0 === Object.keys(j).length;
				async function N() {
					if (null == E || 0 === Object.keys(j).length) return void n();
					g(!0);
					try {
						await
						function(e, t, n) {
							let r = [];
							return Object.values(t).forEach(t => {
								let {
									row: n
								} = t;
								null != n.id && "" !== n.id && (n.rowType === S.aC.ROLE ? r.push((0, p.rX)(n.id, e.type)) : n.rowType === S.aC.MEMBER && r.push((0, p.jZ)(n.id, e.type)))
							}), (0, o.hw)(e.id, r, n)
						}(E, j, h), n(), g(!1)
					} catch (e) {
						g(!1)
					}
				}
				let L = (0, m.zi)(E.type) ? s.W4G : s.gjC;
				return (0, r.jsxs)(s.Y0X, {
					transitionState: t,
					size: s.CgR.SMALL,
					"aria-labelledby": M,
					className: O.modalRoot,
					parentComponent: "AddMembersModal",
					children: [(0, r.jsxs)(s.xBx, {
						separator: !1,
						direction: d.Z.Direction.VERTICAL,
						align: d.Z.Align.CENTER,
						className: O.header,
						children: [(0, r.jsx)(s.X6q, {
							id: M,
							variant: "heading-xl/semibold",
							children: R.intl.string(R.t.dMJ3Y2)
						}), (0, r.jsxs)(s.Text, {
							variant: "text-md/normal",
							color: "header-secondary",
							className: O.headerSubtitle,
							children: [(0, r.jsx)(L, {
								size: "xs",
								color: "currentColor",
								className: O.headerSubtitleIcon
							}), E.name]
						})]
					}), (0, r.jsx)(k, {
						guild: w,
						channel: E,
						permission: E.accessPermissions,
						pendingAdditions: j,
						setPendingAdditions: v
					}), (0, r.jsxs)(s.mzw, {
						children: [!C && (0, r.jsxs)(r.Fragment, {
							children: [(0, r.jsx)("div", {
								"data-button-hoisted-classname-wrapper": !0,
								className: O.button,
								children: (0, r.jsx)(s.zxk, {
									variant: "primary",
									size: "sm",
									text: R.intl.string(R.t.i4jeWV),
									onClick: N,
									loading: b
								})
							}), (0, r.jsx)(a.zx, {
								look: a.zx.Looks.LINK,
								color: a.zx.Colors.TRANSPARENT,
								onClick: n,
								size: a.zx.Sizes.SMALL,
								children: R.intl.string(R.t["ETE/oK"])
							})]
						}), C && (0, r.jsx)(s.zxk, {
							variant: "secondary",
							size: "sm",
							text: R.intl.string(R.t.u46sxc),
							onClick: n
						})]
					})]
				})
			}
		},
		971628: function(e, t, n) {
			n.d(t, {
				G: () => v,
				Z: () => T
			}), n(388685), n(781311);
			var r = n(255367),
				l = n(73800),
				i = n(120356),
				a = n.n(i),
				s = n(91192),
				o = n(481060),
				c = n(385499),
				d = n(600164),
				u = n(313201),
				m = n(565138),
				x = n(631969),
				h = n(605436),
				b = n(537383),
				y = n(71080),
				f = n(388032),
				p = n(208838);
			let g = (0, u.hQ)(),
				j = (0, u.hQ)();

			function v(e) {
				return "".concat(e.rowType, ":").concat(e.id)
			}

			function E(e) {
				return (0, r.jsx)(o.vwX, {
					tag: "h5",
					className: a()(p.sectionTitle, p.rowHeight),
					children: e
				}, e)
			}

			function S(e) {
				var t, n;
				let {
					id: l,
					children: i,
					rowLabel: c,
					checked: u,
					onSelect: m,
					disabled: x,
					showCheckbox: h,
					selected: b,
					onMouseEnter: y,
					"aria-posinset": f,
					"aria-setsize": g
				} = e, j = (0, s.JA)(l);
				return (0, r.jsx)(o.P3F, (t = function(e) {
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
				}({}, j), n = n = {
					id: l,
					className: a()(p.addMemberRow, {
						[p.selectedRow]: b
					}),
					onClick: e => {
						x || (e.preventDefault(), m())
					},
					onMouseEnter: y,
					role: "option",
					"aria-disabled": x,
					"aria-selected": u,
					"aria-setsize": g,
					"aria-posinset": f,
					children: (0, r.jsxs)(d.Z, {
						justify: d.Z.Justify.BETWEEN,
						align: d.Z.Align.CENTER,
						children: [h ? (0, r.jsx)(o.XZJ, {
							displayOnly: !0,
							size: 18,
							value: u,
							type: o.XZJ.Types.INVERTED,
							disabled: x,
							children: (0, r.jsx)("div", {
								className: p.checkboxLabel,
								children: i
							})
						}) : i, null != c ? (0, r.jsx)(o.Text, {
							color: "text-muted",
							variant: "text-xs/normal",
							children: c
						}) : null]
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

			function T(e) {
				let {
					listClassName: t,
					pendingAdditions: n,
					query: i,
					onQueryChange: s,
					onClickRow: u,
					onRemovePendingAddition: T,
					roles: w = [],
					members: R = [],
					users: O = [],
					guilds: C = [],
					placeholderText: N,
					disabledText: M,
					hintText: L,
					searchTitleText: k,
					renderEmptyText: Z,
					focusSearchAfterReady: P,
					isReady: A,
					maxCount: z,
					hideRowLabel: I = !1
				} = e, B = l.useRef(null), D = l.useRef(null), $ = [w.length, R.length, O.length, C.length], [U, _] = l.useState(!1), [q, G] = l.useState(0), [F, Q] = l.useState(-1);
				l.useEffect(() => {
					var e;
					null == (e = B.current) || e.focus()
				}, []);
				let V = l.useCallback(function(e, t) {
						let n = !(arguments.length > 2) || void 0 === arguments[2] || arguments[2];
						if (G(e), Q(t), n) {
							var r;
							null == (r = D.current) || r.scrollToIndex({
								section: null != e ? e : 0,
								row: null != t ? t : 0,
								padding: 8
							})
						}
					}, []),
					J = l.useCallback((e, t) => {
						if (null == t) return;
						s("");
						let n = (e === y.m$.ROLES ? w : [])[t];
						n.rowType !== y.aC.EMPTY_STATE && u(n)
					}, [w, u, s]),
					X = l.useCallback(e => {
						var t;
						null != e && e.rowType !== y.aC.EMPTY_STATE && (u(e), s(""), null == (t = B.current) || t.focus())
					}, [u, s]),
					Y = l.useMemo(() => Object.keys(n), [n]),
					H = l.useMemo(() => R.some(e => !e.disabled) || w.some(e => !e.disabled) || O.some(e => !e.disabled) || C.some(e => !e.disabled), [R, w, O, C]) || "" === i.trim();

				function W() {
					var e;
					_(!(null == (e = D.current) ? void 0 : e.isScrolledToTop()) && H)
				}
				return l.useEffect(() => {
					W()
				}), (0, r.jsxs)(r.Fragment, {
					children: [(0, r.jsxs)("div", {
						className: a()(p.searchBox, {
							[p.scrollSeparator]: U
						}),
						children: [null != k && (0, r.jsx)(o.vwX, {
							tag: o.RB0.H5,
							children: k
						}), (0, r.jsx)(b.Z, {
							ref: B,
							query: i,
							onQueryChange: s,
							selectedSection: q,
							selectedRow: F,
							onSelectionChange: V,
							onSelect: J,
							tags: Y.map(e => n[e].display),
							sections: $,
							onRemoveTag: function(e) {
								T(Y[e])
							},
							placeholder: N,
							focusAfterReady: P,
							isReady: A,
							"aria-labelledby": g,
							"aria-controls": j
						}), null != L ? (0, r.jsx)(o.Text, {
							variant: "text-xs/normal",
							children: L
						}) : null]
					}), H ? (0, r.jsx)(o.aVo, {
						ref: D,
						className: a()(p.roleMemberList, t),
						sections: $,
						renderRow: e => {
							let t, l, {
									section: i,
									row: s
								} = e,
								d = null,
								u = !1,
								x = !1,
								b = !1,
								f = null != z && Object.keys(n).length >= z;
							switch (i) {
								case y.m$.ROLES:
									u = (l = v(d = w[s])) in n || d.disabled, x = d.disabled || !u && f, b = q === y.m$.ROLES && F === s, t = (0, r.jsxs)("div", {
										className: p.rowBody,
										children: [(0, r.jsx)("div", {
											className: a()(p.rowHeight, p.alignCenter),
											children: (0, r.jsx)(o.lZ8, {
												size: "custom",
												color: d.colorString,
												height: 20
											})
										}), (0, r.jsxs)("div", {
											className: p.rowLabel,
											children: [(0, r.jsx)(o.Text, {
												variant: "text-sm/medium",
												className: p.__invalid_rowTitle,
												color: d.rowType === y.aC.EMPTY_STATE ? "text-muted" : "text-default",
												children: d.name
											}), d.disabled && null != M ? (0, r.jsx)(o.Text, {
												color: "header-secondary",
												variant: "text-xs/normal",
												children: M
											}) : null]
										})]
									});
									break;
								case y.m$.MEMBERS:
									u = (l = v(d = R[s])) in n || d.disabled, x = d.disabled || !u && f, b = q === y.m$.MEMBERS && F === s, t = (0, r.jsxs)("div", {
										className: p.rowBody,
										children: [(0, r.jsx)(o.qEK, {
											src: d.avatarURL,
											size: o.EFr.SIZE_24,
											"aria-label": ""
										}), (0, r.jsx)(o.Text, {
											className: p.rowLabel,
											variant: "text-sm/normal",
											children: d.name
										}), null != d.nickname ? (0, r.jsx)(o.Text, {
											color: "text-muted",
											className: p.rowLabelSubText,
											variant: "text-sm/normal",
											"aria-hidden": !0,
											children: d.username
										}) : null, d.bot && (0, r.jsx)(c.Z, {
											verified: d.verifiedBot
										})]
									});
									break;
								case y.m$.USERS:
									u = (l = v(d = O[s])) in n || d.disabled, x = d.disabled || !u && f, b = q === y.m$.USERS && F === s, t = (0, r.jsxs)("div", {
										className: p.rowBody,
										children: [(0, r.jsx)(o.qEK, {
											src: d.avatarURL,
											size: o.EFr.SIZE_24,
											"aria-label": ""
										}), (0, r.jsxs)("div", {
											className: p.rowLabel,
											children: [(0, r.jsx)(o.Text, {
												variant: "text-sm/normal",
												children: d.name
											}), d.disabled && null != M ? (0, r.jsx)(o.Text, {
												color: "header-secondary",
												variant: "text-xs/normal",
												children: M
											}) : null]
										})]
									});
									break;
								case y.m$.GUILDS:
									u = (l = v(d = C[s])) in n || d.disabled, x = d.disabled || !u && f, b = q === y.m$.GUILDS && F === s, t = (0, r.jsxs)("div", {
										className: p.rowBody,
										children: [(0, r.jsx)(m.Z, {
											guild: d.guild,
											active: !0,
											size: m.Z.Sizes.SMALLER
										}), (0, r.jsx)("div", {
											className: p.rowLabel,
											children: (0, r.jsx)(o.Text, {
												variant: "text-sm/medium",
												color: "text-default",
												children: d.name
											})
										})]
									})
							}
							return null == d ? null : (0, r.jsx)(S, {
								id: "user-row-".concat(s),
								rowLabel: I ? null : h.zB(d.rowType),
								checked: u,
								disabled: x,
								onSelect: () => X(d),
								showCheckbox: d.rowType !== y.aC.EMPTY_STATE,
								onMouseEnter: () => V(i, s, !1),
								selected: b,
								"aria-posinset": s + 1,
								"aria-setsize": $.reduce((e, t) => e + t, 0),
								children: t
							}, l)
						},
						rowHeight: 40,
						renderSection: e => {
							let {
								section: t
							} = e;
							switch (t) {
								case y.m$.ROLES:
									return E(f.intl.string(f.t.LPJmLy));
								case y.m$.MEMBERS:
									return E(f.intl.string(f.t["9Oq93t"]));
								case y.m$.USERS:
									return E(f.intl.string(f.t.nqDUBQ));
								case y.m$.GUILDS:
									return E(f.intl.string(f.t["7hB4kp"]))
							}
						},
						sectionHeight: 32,
						onScroll: W,
						role: void 0,
						innerRole: "listbox",
						innerId: j,
						innerAriaMultiselectable: !0,
						innerAriaOrientation: "vertical"
					}) : (0, r.jsxs)(d.Z, {
						className: t,
						align: d.Z.Align.CENTER,
						justify: d.Z.Justify.CENTER,
						direction: d.Z.Direction.VERTICAL,
						children: [(0, r.jsx)(x.Z, {
							className: p.noResultIcon
						}), (0, r.jsx)(o.Text, {
							variant: "text-sm/normal",
							children: Z(i)
						})]
					})]
				})
			}
		},
		537383: function(e, t, n) {
			n.d(t, {
				Z: () => s
			});
			var r = n(255367),
				l = n(73800),
				i = n(794433),
				a = n(932197);
			let s = l.forwardRef(function(e, t) {
				let {
					query: n,
					onQueryChange: l,
					onRemoveTag: s,
					onSelect: o,
					onSelectionChange: c,
					selectedSection: d,
					selectedRow: u,
					tags: m,
					sections: x,
					placeholder: h = "",
					focusAfterReady: b,
					isReady: y,
					"aria-labelledby": f,
					"aria-controls": p
				} = e;
				return (0, r.jsx)(i.Z, {
					autoFocus: !0,
					className: a.searchBar,
					maxHeight: 100,
					onQueryChange: l,
					onRemoveTag: s,
					selectedSection: d,
					selectedRow: u,
					onSelect: o,
					onSelectionChange: c,
					placeholder: 0 === m.length ? h : "",
					query: n,
					ref: t,
					size: i.Z.Sizes.MEDIUM,
					tags: m,
					sections: x,
					focusAfterReady: b,
					isReady: y,
					inputProps: {
						"aria-labelledby": f,
						"aria-controls": p,
						"aria-expanded": !0,
						"aria-activedescendant": "user-row-".concat(u)
					}
				})
			})
		}
	}
]);
//# sourceMappingURL=363508234756849c.js.map