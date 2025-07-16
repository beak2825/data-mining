"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
	["80393"], {
		334136: function(e) {
			e.exports = "/assets/573976ea56ebddcd.svg"
		},
		581257: function(e) {
			e.exports = "/assets/df1be54a7d6a8857.svg"
		},
		354429: function(e) {
			e.exports = "/assets/9dabbd95e9e8a278.svg"
		},
		36317: function(e) {
			e.exports = "/assets/273a82a28d0e1160.svg"
		},
		382563: function(e) {
			e.exports = "/assets/f50ede2a8b3701be.svg"
		},
		282762: function(e) {
			e.exports = "/assets/24243230825c2c4e.svg"
		},
		408240: function(e) {
			e.exports = "/assets/798d305c92bcebf6.svg"
		},
		273654: function(e) {
			e.exports = "/assets/83d40d9ba3a9db6f.svg"
		},
		495343: function(e) {
			e.exports = "/assets/06e0c61b48f72f6d.svg"
		},
		180868: function(e) {
			e.exports = "/assets/39fa213330e56d4a.svg"
		},
		74641: function(e) {
			e.exports = "/assets/b120d96b118bf2c1.svg"
		},
		413659: function(e) {
			e.exports = "/assets/feaccc58464f03a4.svg"
		},
		134752: function(e) {
			e.exports = "/assets/14bedd367511ce89.svg"
		},
		370968: function(e) {
			e.exports = "/assets/c54e976df2bc84cb.svg"
		},
		818219: function(e) {
			e.exports = "/assets/3934256e60927112.svg"
		},
		714029: function(e) {
			e.exports = "/assets/b59ebc1822da2a0e.svg"
		},
		731045: function(e) {
			e.exports = "/assets/e8e77b2ca603a44a.svg"
		},
		641390: function(e) {
			e.exports = "/assets/4161f29c69130cdd.svg"
		},
		859787: function(e) {
			e.exports = "/assets/ac84ae8206a6f5e1.svg"
		},
		70911: function(e) {
			e.exports = "/assets/69869694b4135993.svg"
		},
		880216: function(e) {
			e.exports = "/assets/606a039f64780e30.svg"
		},
		74834: function(e) {
			e.exports = "/assets/90a2a4f8d8fa159f.svg"
		},
		536433: function(e) {
			e.exports = "/assets/0f213e7334ec406b.svg"
		},
		61018: function(e) {
			e.exports = "/assets/440d208fccbaba65.svg"
		},
		193967: function(e) {
			e.exports = "/assets/83713b6ddb3aaba9.svg"
		},
		859121: function(e) {
			e.exports = "/assets/0119c42e7eb9c848.svg"
		},
		767628: function(e) {
			e.exports = "/assets/e50ed58cbe31755a.svg"
		},
		676069: function(e) {
			e.exports = "/assets/e168c3c034c1d0cb.svg"
		},
		902697: function(e) {
			e.exports = "/assets/69a57bf1542db6d0.svg"
		},
		671643: function(e) {
			e.exports = "/assets/0f665f281fbc0180.svg"
		},
		312488: function(e) {
			e.exports = "/assets/e35fcd676e720a43.svg"
		},
		770004: function(e) {
			e.exports = "/assets/f0d99535c0dceb52.svg"
		},
		494037: function(e) {
			e.exports = "/assets/02df409dfd89ffbc.svg"
		},
		711931: function(e) {
			e.exports = "/assets/e850e1e3d9500baa.svg"
		},
		869776: function(e) {
			e.exports = "/assets/eea18d5e3a85428c.svg"
		},
		77282: function(e) {
			e.exports = "/assets/f21dd7f12034e6cb.svg"
		},
		31667: function(e) {
			e.exports = "/assets/547b254784ef1abb.svg"
		},
		835441: function(e) {
			e.exports = "/assets/c7cf6befa3c699d9.svg"
		},
		10331: function(e) {
			e.exports = "/assets/b81e4773a96fb05d.svg"
		},
		511796: function(e) {
			e.exports = "/assets/d6e3f94f5910677c.svg"
		},
		445256: function(e) {
			e.exports = "/assets/6d6c4298fbda978b.svg"
		},
		307451: function(e) {
			e.exports = "/assets/608c1103a1687613.svg"
		},
		969413: function(e) {
			e.exports = "/assets/f31aad3177a6c7c8.svg"
		},
		347233: function(e) {
			e.exports = "/assets/c7b5dc58ffc4e595.svg"
		},
		777492: function(e) {
			e.exports = "/assets/b74a77e98b76ceb0.svg"
		},
		342773: function(e) {
			e.exports = "/assets/10d3479da12f9040.svg"
		},
		62975: function(e) {
			e.exports = "/assets/91bd7f1643fe02ff.svg"
		},
		254374: function(e) {
			e.exports = "/assets/bdf6c4d043e4e45c.svg"
		},
		266138: function(e) {
			e.exports = "/assets/a0ba681b0596ef90.svg"
		},
		480137: function(e, t, n) {
			n.d(t, {
				OY: () => c,
				ZX: () => E,
				bY: () => u,
				gV: () => _,
				uo: () => d
			});
			var r = n(544891),
				l = n(570140),
				i = n(987707),
				s = n(981631);

			function a() {
				return i.Z.isLoading || i.Z.isLoadingNextPage
			}

			function o(e, t) {
				let n = function(e) {
					let {
						before: t,
						userId: n,
						targetId: r,
						action: l
					} = e, a = null != n ? n : i.Z.userIdFilter, o = null != l ? l : i.Z.actionFilter, u = null != r ? r : i.Z.targetIdFilter, c = {
						limit: s.Rg9
					};
					return null != t && (c.before = t), null != a && (c.user_id = a), null != o && (c.action_type = o), null != u && (c.target_id = u), c
				}(t);
				return r.tn.get({
					url: s.ANM.GUILD_AUDIT_LOG(e),
					query: n,
					oldFormErrors: !0,
					rejectWithError: !0
				})
			}

			function u(e, t, n, r) {
				if (!a() && null != e) return l.Z.dispatch({
					type: "AUDIT_LOG_FETCH_START"
				}), o(e, {
					userId: t,
					action: r,
					targetId: n
				}).then(e => {
					let {
						audit_log_entries: t,
						integrations: n,
						users: r,
						webhooks: i,
						guild_scheduled_events: s,
						auto_moderation_rules: a,
						threads: o,
						application_commands: u
					} = e.body;
					l.Z.dispatch({
						type: "AUDIT_LOG_FETCH_SUCCESS",
						logs: t,
						integrations: n,
						users: r,
						webhooks: i,
						guildScheduledEvents: s,
						automodRules: a,
						threads: o,
						applicationCommands: u
					})
				}, () => l.Z.dispatch({
					type: "AUDIT_LOG_FETCH_FAIL"
				}))
			}

			function c(e) {
				let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
				if (!i.Z.hasOlderLogs || a() || null == e) return;
				let n = i.Z.logs,
					r = n[n.length - 1],
					s = null;
				return null != r && (s = r.id), l.Z.dispatch({
					type: "AUDIT_LOG_FETCH_NEXT_PAGE_START",
					before: s,
					isGroupedFetch: t
				}), o(e, {
					before: s
				}).then(e => {
					let {
						audit_log_entries: t,
						integrations: n,
						users: r,
						webhooks: i,
						guild_scheduled_events: s,
						auto_moderation_rules: a,
						threads: o,
						application_commands: u
					} = e.body;
					l.Z.dispatch({
						type: "AUDIT_LOG_FETCH_NEXT_PAGE_SUCCESS",
						logs: t,
						integrations: n,
						users: r,
						webhooks: i,
						guildScheduledEvents: s,
						automodRules: a,
						threads: o,
						applicationCommands: u
					})
				}, () => l.Z.dispatch({
					type: "AUDIT_LOG_FETCH_NEXT_PAGE_FAIL"
				}))
			}

			function E(e, t) {
				if (!a() && null != t) return l.Z.dispatch({
					type: "AUDIT_LOG_FILTER_BY_ACTION",
					action: e
				}), u(t, null, null, e)
			}

			function d(e, t) {
				if (!a() && null != t) return l.Z.dispatch({
					type: "AUDIT_LOG_FILTER_BY_USER",
					userId: e
				}), u(t, e)
			}

			function _(e, t) {
				if (!a() && null != t) return l.Z.dispatch({
					type: "AUDIT_LOG_FILTER_BY_TARGET",
					targetId: e
				}), u(t, null, e)
			}
		},
		412899: function(e, t, n) {
			n.d(t, {
				UB: () => F,
				ZP: () => W
			}), n(388685), n(642613), n(415506);
			var r = n(255367),
				l = n(73800),
				i = n(120356),
				s = n.n(i),
				a = n(512722),
				o = n.n(a),
				u = n(772848),
				c = n(91192),
				E = n(924826),
				d = n(866442),
				_ = n(442837),
				A = n(692547),
				T = n(481060),
				I = n(239091),
				g = n(749210),
				m = n(112724),
				f = n(607070),
				O = n(605436),
				N = n(134433),
				h = n(600164),
				R = n(91218),
				p = n(313201),
				S = n(518738),
				C = n(434404),
				b = n(884902),
				D = n(271383),
				v = n(485386),
				U = n(496675),
				L = n(594174),
				M = n(700785),
				x = n(944613),
				P = n(981631),
				j = n(388032),
				y = n(78248);

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

			function G(e, t) {
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

			function z(e, t) {
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
			}
			let Z = () => Promise.resolve();

			function B(e) {
				let {
					userRoles: t,
					position: n
				} = e, l = z(e, ["userRoles", "position"]), i = (0, p.Dt)();
				return (0, r.jsxs)(T.VqE, {
					className: s()(y.overflowRolesPopout, {
						[y.popoutBottom]: "bottom" === n,
						[y.popoutTop]: "top" === n
					}),
					"aria-labelledby": i,
					children: [(0, r.jsx)("div", {
						className: y.overflowRolesPopoutArrowWrapper,
						children: (0, r.jsx)("div", {
							className: y.overflowRolesPopoutArrow
						})
					}), (0, r.jsxs)(h.Z, {
						className: y.overflowRolesPopoutHeader,
						align: h.Z.Align.CENTER,
						children: [(0, r.jsx)(T.U65, {
							size: "xs",
							color: A.Z.unsafe_rawColors.PRIMARY_400.css,
							className: y.overflowRolesPopoutHeaderIcon
						}), (0, r.jsx)("div", {
							className: y.overflowRolesPopoutHeaderText,
							id: i,
							children: j.intl.format(j.t.PCs0oq, {
								numRoles: t.length
							})
						})]
					}), (0, r.jsx)(k, G(w({}, l), {
						wrap: !0,
						userRoles: t
					}))]
				})
			}
			let F = l.forwardRef(function(e, t) {
				var i, a, o;
				let u, {
						canRemove: E,
						className: g,
						role: m,
						onRemove: O,
						guildId: h,
						disableBorderColor: p,
						onMouseDown: C
					} = e,
					D = (0, c.JA)(m.id),
					{
						tabIndex: v
					} = D,
					U = z(D, ["tabIndex"]),
					L = (0, S.p9)({
						roleId: m.id,
						size: 16,
						guildId: h
					}),
					M = (0, _.e7)([f.Z], () => f.Z.roleStyle),
					x = (0, b._f)(h, m, m.colorStrings),
					P = (null == (i = m.tags) ? void 0 : i.guild_connections) === null,
					Z = l.useCallback(e => {
						(0, I.jW)(e, async () => {
							let {
								default: e
							} = await n.e("5396").then(n.bind(n, 731646));
							return t => (0, r.jsx)(e, G(w({}, t), {
								id: m.id,
								label: j.intl.string(j.t.sMsaLi)
							}))
						})
					}, [m.id]),
					B = (0, T.dQu)(A.Z.unsafe_rawColors.PRIMARY_300).hsl(),
					F = null != (a = m.colorString) ? a : B,
					V = null != (o = (0, d.wK)(F, .6)) ? o : void 0,
					H = A.Z.unsafe_rawColors.WHITE_500.css,
					k = (0, d._i)(F);
				null != k && .3 > (0, d.Bd)(k) && (H = A.Z.unsafe_rawColors.PRIMARY_630.css), u = P ? (0, r.jsx)(N.Z, {
					className: y.roleFlowerStar,
					iconClassName: E ? y.roleVerifiedIcon : void 0,
					color: F,
					size: 14
				}) : "dot" === M ? (0, r.jsx)(T.FhE, {
					className: y.roleDot,
					color: F,
					colors: x,
					background: !1,
					tooltip: !1
				}) : (0, r.jsx)(T.xko, {
					color: F,
					colors: x
				});
				let K = l.useMemo(() => {
					var t;
					return w({
						borderColor: p ? void 0 : V
					}, null != (t = e.style) ? t : {})
				}, [V, p, e.style]);
				return (0, r.jsx)(T.tEY, {
					children: (0, r.jsxs)("div", G(w({
						ref: t,
						className: s()(y.role, g),
						style: K,
						onContextMenu: Z,
						onMouseDown: C,
						"aria-label": m.name,
						tabIndex: v
					}, U), {
						children: [(0, r.jsxs)(T.P3F, {
							className: s()(E && y.roleRemoveButtonCanRemove, y.roleRemoveButton),
							onClick: E ? O : void 0,
							tabIndex: E ? v : -1,
							focusProps: {
								focusClassName: y.roleRemoveIconFocused
							},
							"aria-hidden": !E,
							"aria-label": j.intl.formatToPlainString(j.t.QrxwhY, {
								roleName: m.name
							}),
							children: [u, E ? (0, r.jsx)(T.Dio, {
								size: "md",
								color: H,
								className: y.roleRemoveIcon,
								"aria-hidden": !0
							}) : null]
						}), null != L ? (0, r.jsx)(R.Z, G(w({
							className: y.roleIcon
						}, L), {
							enableTooltip: !1
						})) : null, (0, r.jsx)("div", {
							"aria-hidden": !0,
							className: y.roleName,
							children: (0, r.jsx)(T.Text, {
								variant: "text-xs/medium",
								className: y.roleNameOverflow,
								children: m.name
							})
						})]
					}))
				})
			});

			function V(e) {
				let {
					user: t,
					numRolesHidden: n,
					roleClassName: i
				} = e, a = (0, c.JA)("overflow-more-roles-".concat(t.id)), o = l.useRef(null);
				return (0, r.jsx)(T.yRy, {
					targetElementRef: o,
					renderPopout: t => {
						let {
							position: n
						} = t;
						return (0, r.jsx)(B, G(w({}, e), {
							position: null != n ? n : "top"
						}))
					},
					position: "top",
					align: "center",
					children: e => (0, r.jsx)(T.tEY, {
						children: (0, r.jsx)("button", G(w(G(w({
							ref: o
						}, e), {
							className: s()(y.overflowButton, i)
						}), a), {
							children: "+".concat(n)
						}))
					})
				})
			}

			function H(e) {
				let t = l.useRef(null),
					{
						guild: n,
						user: i,
						handleAddRole: a,
						roleClassName: o,
						addButtonClassName: u,
						addButtonIconClassName: E
					} = e,
					d = (0, c.JA)("overflow-add-roles-".concat(i.id)),
					A = (0, _.e7)([f.Z], () => f.Z.roleStyle),
					I = U.Z.getHighestRole(n),
					g = D.ZP.getMember(n.id, i.id),
					m = e => (0, O.Gy)(n.id, e.id) && !e.managed && U.Z.isRoleHigher(n, I, e) && (null == g || -1 === g.roles.indexOf(e.id));
				return (0, r.jsx)(T.yRy, {
					targetElementRef: t,
					renderPopout: e => {
						let {
							closePopout: t
						} = e;
						return (0, r.jsx)(x.Z, {
							guild: n,
							roleStyle: A,
							roleFilter: m,
							onSelect: a,
							onClose: t
						})
					},
					position: "bottom",
					align: "center",
					children: e => (0, r.jsx)(T.tEY, {
						children: (0, r.jsx)("button", G(w(G(w({
							ref: t
						}, e), {
							className: s()(y.addButton, o, u),
							"aria-label": j.intl.string(j.t.e3Wly8),
							type: "button"
						}), d), {
							children: (0, r.jsx)(T.qJs, {
								size: "md",
								color: "currentColor",
								className: s()(y.addButtonIcon, E),
								"aria-hidden": !0
							})
						}))
					})
				})
			}

			function k(e) {
				let t, {
						user: n,
						guild: i,
						userRoles: a,
						wrap: d = !0,
						width: A,
						className: T,
						readOnly: I,
						roleClassName: m,
						disableBorderColor: f
					} = e,
					O = l.useRef({}),
					N = l.useCallback(e => {
						var t;
						let r = a.filter(t => t !== e.id);
						(null == (t = e.tags) ? void 0 : t.guild_connections) === null ? g.Z.unassignGuildRoleConnection(i.id, e.id) : C.Z.updateMemberRoles(i.id, n.id, r, [], [e.id])
					}, [a, i.id, n.id]),
					h = l.useCallback(e => {
						let t = a; - 1 === t.indexOf(e) && (t = t.concat([e])), C.Z.updateMemberRoles(i.id, n.id, t, [e], [])
					}, [a, i.id, n.id]),
					[R, p] = l.useState(null),
					S = (0, _.e7)([v.Z], () => v.Z.getRoles(i.id)),
					b = l.useMemo(() => {
						let e = Object.values(S).filter(e => a.includes(e.id)).sort((e, t) => {
							var n, r;
							let l = (null == (n = e.tags) ? void 0 : n.guild_connections) !== null,
								i = (null == (r = t.tags) ? void 0 : r.guild_connections) !== null;
							return l && !i ? 1 : !l && i ? -1 : 0
						});
						return null != R ? e.slice(0, R) : e
					}, [S, R, a]),
					D = a.length - b.length;
				l.useLayoutEffect(() => {
					if (d) return;
					if ("number" != typeof A) throw Error("Unexpected null width");
					let e = 0,
						t = 0,
						n = A - 30 - 4;
					for (let r = 0; r < b.length; r++) {
						let l = b[r],
							i = O.current[l.id];
						if (null != i) {
							if ((t += i.offsetWidth + 4) > n) break;
							e++
						}
					}
					p(t => e < b.length ? e : t)
				}, [d, A, b]);
				let x = L.default.getCurrentUser();
				o()(null != x, "MemberRolesList: currentUser cannot be undefined");
				let B = !I && U.Z.can(P.Plq.MANAGE_ROLES, i),
					k = M.e9(i, x.id),
					K = l.useMemo(() => "roles-".concat((0, u.Z)()), []),
					W = (0, E.ZP)({
						id: K,
						isEnabled: !0,
						scrollToStart: Z,
						scrollToEnd: Z,
						wrap: !0
					}),
					q = b.map(e => {
						var t;
						return (0, r.jsx)(F, {
							className: m,
							role: e,
							canRemove: (null == (t = e.tags) ? void 0 : t.guild_connections) === null ? n.id === x.id : B && M.r6(i, x.id, k, e),
							onRemove: () => N(e),
							ref: t => {
								var n;
								return n = e.id, void(null != t ? O.current[n] = t : delete O.current[n])
							},
							guildId: i.id,
							disableBorderColor: f
						}, e.id)
					});
				return null != R && 0 !== D ? t = (0, r.jsx)(V, G(w({}, e), {
					numRolesHidden: D
				})) : B && (t = (0, r.jsx)(H, G(w({}, e), {
					handleAddRole: h
				}))), (0, r.jsx)(c.bG, {
					navigator: W,
					children: (0, r.jsx)(c.SJ, {
						children: e => {
							var {
								ref: n
							} = e, l = z(e, ["ref"]);
							return (0, r.jsxs)("div", G(w({
								className: s()(y.root, T),
								"aria-label": j.intl.formatToPlainString(j.t.PCs0oq, {
									numRoles: a.length
								}),
								ref: n
							}, l), {
								children: [q, t]
							}))
						}
					})
				})
			}
			let K = (0, m.Z)(k);

			function W(e) {
				return (0, _.e7)([U.Z], () => {
					var t;
					return U.Z.getGuildVersion(null == (t = e.guild) ? void 0 : t.id)
				}), !1 === e.wrap ? (0, r.jsx)(K, w({}, e)) : (0, r.jsx)(k, w({}, e))
			}
		},
		599059: function(e, t, n) {
			n.d(t, {
				Z: () => c
			}), n(388685);
			var r = n(255367),
				l = n(73800),
				i = n(120356),
				s = n.n(i),
				a = n(981631),
				o = n(516459);

			function u(e, t, n) {
				return t in e ? Object.defineProperty(e, t, {
					value: n,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : e[t] = n, e
			}
			class c extends l.Component {
				componentDidUpdate(e, t) {
					if (t.focused !== this.state.focused && this.state.focused) {
						var n;
						null == (n = this.inputRef.current) || n.focus()
					}
					null !== this.props.value && this.props.value !== e.value && this.props.value !== this.state.value && E(this.props.value, this.props, this.state) && this.setState({
						value: this.props.value
					})
				}
				render() {
					let e, {
							className: t,
							name: n,
							autoComplete: l,
							maxLen: i,
							disabled: a
						} = this.props,
						u = {
							position: "absolute",
							left: 0,
							width: "100%",
							opacity: 1
						};
					return this.state.focused ? e = {
						visibility: "hidden",
						pointerEvents: "none"
					} : u.opacity = 0, (0, r.jsx)("div", {
						className: s()(o.outer, t),
						children: (0, r.jsxs)("div", {
							className: o.container,
							children: [(0, r.jsx)("input", {
								type: "text",
								className: o.input,
								ref: this.inputRef,
								style: u,
								value: this.state.value,
								name: n,
								maxLength: i,
								autoComplete: l,
								onKeyPress: this.handleKeyPress,
								onChange: this.handleChange,
								onFocus: this.handleFocus,
								onBlur: this.handleBlur,
								onMouseEnter: this.handleMouseEnter,
								disabled: a
							}), (0, r.jsx)("div", {
								className: o.input,
								style: e,
								children: this.state.value
							})]
						})
					})
				}
				constructor(...e) {
					super(...e), u(this, "inputRef", l.createRef()), u(this, "state", {
						focused: !1,
						lastGoodValue: this.props.value,
						value: this.props.value
					}), u(this, "handleChange", e => {
						let {
							onChange: t
						} = this.props;
						this.setState({
							value: e.currentTarget.value
						}), null == t || t(e)
					}), u(this, "handleFocus", e => {
						let {
							onFocus: t
						} = this.props;
						this.setState({
							focused: !0,
							lastGoodValue: e.currentTarget.value
						}), null == t || t(e)
					}), u(this, "handleBlur", e => {
						if (E("", this.props, this.state)) {
							this.setState({
								focused: !1
							});
							let {
								onBlur: t
							} = this.props;
							null == t || t(e)
						} else this.setState({
							focused: !1,
							value: this.state.lastGoodValue
						})
					}), u(this, "handleMouseEnter", e => {
						let {
							onMouseEnter: t
						} = this.props;
						null == t || t(e)
					}), u(this, "handleKeyPress", e => {
						if (e.which === a.yXg.ENTER) {
							var t;
							null == (t = this.inputRef.current) || t.blur()
						}
					})
				}
			}

			function E() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "",
					t = arguments.length > 1 ? arguments[1] : void 0,
					n = arguments.length > 2 ? arguments[2] : void 0,
					r = "" !== e ? e : null != n.value && "" !== n.value ? n.value : "";
				return (null == t.minLen || !(r.length < t.minLen)) && (null == t.maxLen || !(r.length > t.maxLen))
			}
		},
		34586: function(e, t, n) {
			n.d(t, {
				E: () => a
			});
			var r = n(442837),
				l = n(650774),
				i = n(206583),
				s = n(981631);

			function a(e) {
				return (0, r.e7)([l.Z], () => {
					if (null == e) return;
					let t = l.Z.getMemberCount(e.id),
						n = e.features.has(s.oNc.ACTIVITY_FEED_ENABLED_BY_USER),
						r = e.features.has(s.oNc.ACTIVITY_FEED_DISABLED_BY_USER),
						a = null != t && t < i.k4;
					return n || r ? n : a
				})
			}
		},
		479099: function(e, t, n) {
			n.d(t, {
				Z: () => h,
				f: () => R
			}), n(388685);
			var r, l = n(255367),
				i = n(73800),
				s = n(120356),
				a = n.n(s),
				o = n(91192),
				u = n(442837),
				c = n(481060),
				E = n(239091),
				d = n(596454),
				_ = n(607070),
				A = n(339085),
				T = n(695346),
				I = n(572004),
				g = n(388032),
				m = n(559297);

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
			var N = ((r = N || {})[r.SMALL = 0] = "SMALL", r[r.MEDIUM = 1] = "MEDIUM", r);

			function h(e) {
				let {
					tag: t,
					size: r = 1,
					disabled: s,
					className: N,
					onClick: h,
					onRemove: R,
					selected: p,
					ariaLabel: S
				} = e, {
					name: C,
					emojiId: b,
					emojiName: D
				} = t, v = null != R, [U, L] = i.useState(!1), M = (0, u.e7)([A.ZP], () => null != b ? A.ZP.getUsableCustomEmojiById(b) : null), x = v || null != h, P = (!v || !U) && (null != b || null != D), j = 0 === r, y = i.useRef(null), w = (0, u.e7)([_.Z], () => _.Z.keyboardModeEnabled), G = e => {
					let r = T.Sb.getSetting();
					I.wS && r && (0, E.jW)(e, async () => {
						let {
							default: e
						} = await n.e("29646").then(n.bind(n, 955116));
						return n => (0, l.jsx)(e, O(f({}, n), {
							tag: t
						}))
					})
				}, z = (0, l.jsxs)(l.Fragment, {
					children: [P ? (0, l.jsx)(d.Z, {
						className: a()(m.emoji, {
							[m.small]: j
						}),
						emojiId: b,
						emojiName: D,
						animated: !!(null == M ? void 0 : M.animated),
						size: "reaction"
					}) : null, U && v && (0, l.jsx)("div", {
						className: m.closeCircle,
						children: (0, l.jsx)(c.Dio, {
							size: "md",
							color: "currentColor",
							className: m.close
						})
					}), (0, l.jsx)(c.Text, {
						variant: j ? "text-xs/semibold" : "text-sm/semibold",
						lineClamp: 1,
						color: "currentColor",
						children: C
					})]
				}), Z = {
					key: t.id,
					className: a()(m.pill, {
						[m.disabled]: s,
						[m.clickable]: x,
						[m.small]: j,
						[m.selected]: p,
						[m[t.color]]: null != t.color && !x
					}, N),
					onClick: e => {
						null == h || h(e), null == R || R(t), w || null == y.current || y.current.blur()
					},
					onContextMenu: e => G(e),
					onMouseEnter: () => v && L(!0),
					onMouseLeave: () => v && L(!1)
				}, B = (0, o.JA)("forum-tag-".concat(t.id));
				return x ? (0, l.jsx)(c.P3F, O(f(O(f({}, B), {
					innerRef: y,
					focusProps: {
						ringTarget: y
					},
					"aria-label": null != S ? S : g.intl.formatToPlainString(g.t.iyRTLi, {
						tagName: C
					}),
					role: "button",
					"aria-pressed": p
				}), Z), {
					children: z
				})) : (0, l.jsx)("div", O(f({}, Z), {
					children: z
				}))
			}

			function R(e) {
				let {
					tags: t,
					count: n,
					size: r = 1
				} = e, i = 0 === r;
				return (0, l.jsx)(c.ua7, {
					"aria-label": g.intl.string(g.t["P/y+sr"]),
					text: (0, l.jsx)(l.Fragment, {
						children: t.map(e => (0, l.jsx)(h, {
							tag: e,
							className: m.tooltipPill,
							size: h.Sizes.SMALL
						}, e.id))
					}),
					children: e => (0, l.jsx)("div", O(f({}, e), {
						className: a()(m.pill, {
							[m.small]: i
						}),
						children: (0, l.jsxs)(c.Text, {
							variant: i ? "text-xs/semibold" : "text-sm/semibold",
							children: ["+", n]
						})
					}))
				})
			}
			h.Sizes = N
		},
		810123: function(e, t, n) {
			n.d(t, {
				E: () => E,
				Z: () => A
			});
			var r, l = n(255367),
				i = n(120356),
				s = n.n(i),
				a = n(471445),
				o = n(686546),
				u = n(601964),
				c = n(292895),
				E = ((r = {}).SMALL_32 = "SMALL_32", r);
			let d = {
					SMALL_32: 24
				},
				_ = {
					SMALL_32: [13, 11, 10, 10, 10, 10, 10]
				},
				A = function(e) {
					let {
						className: t,
						iconClassName: n,
						size: r,
						channel: i,
						guild: E,
						locked: A,
						hasActiveThreads: T
					} = e;
					if (null == E) return null;
					let I = (0, u.EB)(E, 48),
						g = _[r],
						m = d[r],
						f = (0, a.KS)(i, E, {
							locked: A,
							hasActiveThreads: T
						});
					if (null == f) return null;
					let O = null != E ? (0, u.gM)(E) : "";
					return (0, l.jsxs)("div", {
						role: "img",
						className: t,
						children: [(0, l.jsx)(o.ZP, {
							mask: o.QS.GUILD_ICON_WITH_CHANNEL_TYPE,
							children: null != I ? (0, l.jsx)("img", {
								alt: "",
								src: I,
								className: c.channelGuildIcon,
								style: {
									width: m,
									height: m
								}
							}) : (0, l.jsx)("div", {
								className: s()(c.channelGuildIcon, c.acronym),
								style: {
									fontSize: O.length - 1 > g.length ? g[g.length - 1] : g[O.length - 1],
									width: m,
									height: m
								},
								children: O
							})
						}), (0, l.jsx)(f, {
							className: s()(c.icon, c.iconWithGuildIcon, n),
							color: "currentColor"
						})]
					})
				}
		},
		251794: function(e, t, n) {
			n.d(t, {
				q: () => a,
				z: () => s
			});
			var r = n(255367);
			n(73800);
			var l = n(481060);

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

			function s(e) {
				let {
					guildId: t,
					userId: s,
					anaylticsLocations: a,
					modReportId: o
				} = e;
				(0, l.ZDy)(async () => {
					let {
						default: e
					} = await n.e("72920").then(n.bind(n, 109730));
					return n => (0, r.jsx)(e, i({
						guildId: t,
						userId: s,
						anaylticsLocations: a,
						modReportId: o
					}, n))
				})
			}

			function a(e) {
				let {
					guildId: t,
					userId: s,
					anaylticsLocations: a
				} = e;
				(0, l.ZDy)(async () => {
					let {
						default: e
					} = await n.e("76233").then(n.bind(n, 171494));
					return n => (0, r.jsx)(e, i({
						guildId: t,
						userId: s,
						anaylticsLocations: a
					}, n))
				})
			}
		},
		356778: function(e, t, n) {
			n.d(t, {
				II: () => A,
				Ow: () => N,
				P2: () => p,
				mw: () => T,
				z0: () => h
			}), n(49124), n(388685);
			var r, l = n(73800),
				i = n(94171),
				s = n(362383),
				a = n(731965),
				o = n(570140),
				u = n(110924),
				c = n(840877),
				E = n(952537),
				d = n(981631);

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
			let A = -1;
			var T = ((r = {}).MESSAGES = "messages", r.LINKS = "links", r.MEDIA = "media", r.ALL_COUNTS = "all_counts", r);

			function I(e, t, n) {
				let r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {},
					l = arguments.length > 4 && void 0 !== arguments[4] && arguments[4],
					i = JSON.stringify(r);
				return l ? "guild_".concat(t, "_search_tab_").concat(n, "_for_").concat(e, "_with_additonal_").concat(i) : "guild_".concat(t, "_search_").concat(n, "_for_").concat(e, "_with_additonal_").concat(i)
			}
			let g = {
					searchFetcher: null,
					searchTabFetcher: null,
					result: null,
					messageCount: A,
					lastMessage: null
				},
				m = (0, s.F)(() => new Map),
				f = (e, t) => {
					(0, a.j)(() => {
						m.setState(n => {
							let r = n.get(e);
							return null == r ? n.set(e, _({}, g, t)) : n.set(e, _({}, r, t)), n
						})
					})
				},
				O = e => m(t => t.get(e), i.X);

			function N(e, t, n) {
				let r = null != n ? n : {};
				switch (t) {
					case "links":
						return _({
							author_id: e,
							has: ["link"]
						}, r);
					case "media":
						return _({
							author_id: e,
							attachment_extension: ["png", "jpg", "webp", "mov", "mp4", "gif", "mp3", "wav", "flac", "ogg", "opus"]
						}, r);
					case "all_counts":
						return _({
							author_id: [e],
							limit: 1,
							cursor: null
						}, r);
					default:
						return _({
							author_id: e
						}, r)
				}
			}

			function h(e, t, n) {
				return function(e, t, n, r) {
					let {
						addtionalQuery: i,
						shouldDispatch: s = !1
					} = r, a = l.useMemo(() => I(e, t, n, i), [e, t, n, i]), _ = O(a), T = (0, u.Z)(a), [m, h] = l.useState({});
					return l.useEffect(() => {
						if (T !== a) {
							let r = N(e, n, i),
								l = new c.ZP(t, d.aib.GUILD, r);
							f(a, {
								searchFetcher: l,
								messageCount: A,
								lastMessage: null
							}), setTimeout(() => {
								l.fetch(e => {
									let n = e.body,
										r = n.messages[0];
									if (f(a, {
											searchFetcher: l,
											result: n,
											messageCount: n.total_results,
											lastMessage: r
										}), h({}), s) {
										var i, u;
										o.Z.dispatch({
											type: "MOD_VIEW_SEARCH_FINISH",
											searchId: t,
											guildId: t,
											analyticsId: n.analytics_id,
											totalResults: n.total_results,
											channels: n.channels,
											messages: n.messages,
											threads: null != (i = n.threads) ? i : [],
											members: (null != (u = n.members) ? u : []).map(e => (0, E.Z)(e)),
											hasError: !1,
											doingHistoricalIndex: n.doing_deep_historical_index,
											documentsIndexed: n.documents_indexed
										})
									}
								}, e => {}, e => {
									f(a, {
										messageCount: 0,
										lastMessage: null
									}), h({})
								})
							})
						}
						return () => {}
					}, [e, t, _, a, n, i, T, s]), null != _ ? _ : g
				}(e, t, "messages", n)
			}

			function R(e, t, n, r) {
				let i = l.useMemo(() => I(e, t, n, r, !0), [e, t, n, r]),
					s = O(i),
					a = (0, u.Z)(i);
				return {
					key: i,
					previousKey: a,
					state: s
				}
			}

			function p(e, t, n) {
				var r, i, s;
				let {
					key: a,
					state: o
				} = R(e, t, "messages", n), {
					key: u,
					state: E
				} = R(e, t, "links", n), {
					key: _,
					state: T
				} = R(e, t, "media", n), I = l.useMemo(() => N(e, "all_counts", n), [e, n]), g = l.useMemo(() => ({
					tabs: {
						messages: N(e, "messages", I),
						links: N(e, "links", I),
						media: N(e, "media", I)
					},
					track_exact_total_hits: !0,
					include_nsfw: !0
				}), [e, I]), m = l.useCallback(e => {
					let t = e.messages,
						n = e.links,
						r = e.media;
					f(a, t), f(u, n), f(_, r)
				}, [u, _, a]), O = l.useCallback(e => {
					m({
						messages: e,
						links: e,
						media: e
					})
				}, [m]);
				l.useEffect(() => {
					let e = new c.tJ(t, d.aib.GUILD, I, g);
					O({
						searchTabFetcher: e,
						messageCount: A,
						lastMessage: null
					});
					let n = setTimeout(async () => {
						let t = null;
						try {
							let n = await e.makeRequest();
							t = null == n ? void 0 : n.body
						} catch (e) {
							t = null
						}
						if (null == t) O({
							messageCount: 0,
							lastMessage: null
						});
						else {
							var n, r, l, i, s, a;
							let e = t.tabs.messages,
								o = t.tabs.links,
								u = t.tabs.media;
							m({
								messages: {
									messageCount: null != (n = null == e ? void 0 : e.total_results) ? n : 0,
									lastMessage: null != (r = null == e ? void 0 : e.messages[0]) ? r : null
								},
								links: {
									messageCount: null != (l = null == o ? void 0 : o.total_results) ? l : 0,
									lastMessage: null != (i = null == o ? void 0 : o.messages[0]) ? i : null
								},
								media: {
									messageCount: null != (s = null == u ? void 0 : u.total_results) ? s : 0,
									lastMessage: null != (a = null == u ? void 0 : u.messages[0]) ? a : null
								}
							})
						}
						p({})
					});
					return () => {
						e.cancel(), clearTimeout(n)
					}
				}, [e, t, I, g, O, m]);
				let [h, p] = l.useState({});
				return {
					messagesCount: null != (r = null == o ? void 0 : o.messageCount) ? r : A,
					linksCount: null != (i = null == E ? void 0 : E.messageCount) ? i : A,
					mediaCount: null != (s = null == T ? void 0 : T.messageCount) ? s : A
				}
			}
		},
		613464: function(e, t, n) {
			n.d(t, {
				Z: () => S
			}), n(388685);
			var r = n(255367),
				l = n(73800),
				i = n(120356),
				s = n.n(i),
				a = n(442837),
				o = n(481060),
				u = n(749210),
				c = n(110924),
				E = n(410030),
				d = n(616780),
				_ = n(100527),
				A = n(906732),
				T = n(527379),
				I = n(687158),
				g = n(184301),
				m = n(502762),
				f = n(271383),
				O = n(594174),
				N = n(189357),
				h = n(718617),
				R = n(327250),
				p = n(50767);

			function S(e) {
				let {
					userId: t,
					guildId: n,
					onClose: i,
					className: S,
					infoPanelClassName: C,
					style: b
				} = e, D = (0, N.m)(n), v = (0, a.e7)([O.default], () => O.default.getUser(t), [t]), U = (0, a.e7)([f.ZP], () => f.ZP.getMember(n, t), [n, t]), [L, M] = l.useState(null == v || null == U), x = (0, c.Z)(U), P = l.useRef(null), {
					analyticsLocations: j
				} = (0, A.ZP)(_.Z.GUILD_MEMBER_MOD_VIEW), y = (0, I.ZP)(t, n), w = (0, E.ZP)();
				return (l.useEffect(() => {
					D || i()
				}, [D, i]), l.useEffect(() => {
					null == x || null != U || L || i()
				}, [L, U, i, x]), l.useEffect(() => {
					null != v && null != U && M(!1)
				}, [v, U]), l.useEffect(() => {
					let e = null == U;
					return !L && e && (P.current = window.setTimeout(i, 500)), () => {
						null != P.current && window.clearTimeout(P.current)
					}
				}, [L, U, i]), (0, d.$)({
					[n]: [t]
				}), l.useEffect(() => {
					!async function() {
						let e = [u.Z.requestMembersById(n, [t]), (0, T.nb)(n, [t]), (0, g.Z)(t, void 0, {
							guildId: n,
							dispatchWait: !0
						})];
						await Promise.all(e), M(!1)
					}()
				}, [n, t]), D) ? L || null == v || null == U ? (0, r.jsx)("div", {
					className: s()(p.sidebarContainer, p.loadingContainer, S),
					style: b,
					children: (0, r.jsx)(o.$jN, {
						animated: !0,
						type: L ? o.$jN.Type.SPINNING_CIRCLE : o.$jN.Type.CHASING_DOTS
					})
				}) : (0, r.jsx)(A.Gt, {
					value: j,
					children: (0, r.jsx)("div", {
						className: s()(p.sidebarContainer, S),
						style: b,
						children: (0, r.jsx)(m.Z, {
							user: v,
							displayProfile: y,
							themeType: null,
							themeOverride: w,
							forceShowPremium: !0,
							className: p.profileThemedContainer,
							children: (0, r.jsxs)("div", {
								className: p.innerContainer,
								children: [(0, r.jsx)(R.ZP, {
									userId: t,
									guildId: n,
									onClose: i
								}), (0, r.jsx)(h.Z, {
									userId: t,
									guildId: n,
									onClose: i,
									className: C
								})]
							})
						})
					})
				}) : null
			}
		},
		370595: function(e, t, n) {
			n.d(t, {
				Z: () => u
			});
			var r = n(255367);
			n(73800);
			var l = n(481060),
				i = n(50493),
				s = n(388032),
				a = n(792461),
				o = n(12740);

			function u(e) {
				let {
					onNavigate: t,
					backPanel: n = i.k.INFO
				} = e;
				return (0, r.jsxs)("div", {
					className: o.header,
					children: [(0, r.jsx)("div", {
						className: o.headerTitle,
						children: (0, r.jsxs)(l.P3F, {
							className: a.backButton,
							onClick: () => null == t ? void 0 : t(n),
							children: [(0, r.jsx)(l.whL, {
								size: "custom",
								width: 20,
								height: 20
							}), (0, r.jsx)(l.X6q, {
								variant: "heading-md/semibold",
								children: s.intl.string(s.t["13/7kZ"])
							})]
						})
					}), (0, r.jsx)(l.M2$, {
						shortcut: "esc",
						keyClassName: a.keyComboInner,
						className: a.keyComboContainer
					})]
				})
			}
		},
		718617: function(e, t, n) {
			n.d(t, {
				Z: () => O
			});
			var r = n(255367),
				l = n(73800),
				i = n(108542),
				s = n(442837),
				a = n(186325),
				o = n(481060),
				u = n(110924),
				c = n(714338),
				E = n(237617),
				d = n(433355),
				_ = n(189432),
				A = n(727381),
				T = n(313692),
				I = n(596443),
				g = n(50493),
				m = n(981631);

			function f(e, t) {
				return n => {
					if (0 === n) return "auto";
					let r = "forwards" === t.current,
						l = n > 0,
						i = !1;
					return l && r && "left" === e && (i = !0), l && !r && "right" === e && (i = !0), !l && r && "right" === e && (i = !0), l || r || "left" !== e || (i = !0), i ? "calc(".concat(100 * Math.abs(n), "% + ").concat(Math.round(12 * Math.abs(n)), "px)") : "auto"
				}
			}

			function O(e) {
				var t;
				let {
					userId: n,
					guildId: O,
					onClose: N,
					analyticsLocation: h,
					className: R
				} = e, p = (0, s.e7)([d.ZP], () => d.ZP.getGuildSidebarState(O), [O]), S = null != (t = null == p ? void 0 : p.details.modViewPanel) ? t : g.k.INFO, C = (0, u.Z)(n), b = null == S ? null : S === g.k.INFO ? "backwards" : "forwards", D = (0, E.Z)(b), {
					reducedMotion: v
				} = l.useContext(a.S), U = l.useCallback(e => {
					null != p && (0, _.r)(O, n, p.baseChannelId, {
						modViewPanel: e
					})
				}, [p, O, n]), L = l.useMemo(() => ({
					[m.EkH.CLOSE_MODAL]: {
						binds: ["esc"],
						comboKeysBindGlobal: !0,
						action: () => S === g.k.INFO ? N() : U(g.k.INFO)
					}
				}), [N, S, U]);
				l.useEffect(() => (c.Z.enable(), c.Z.enableTemp(L), () => c.Z.disableTemp()), [L]);
				let M = (0, o.Yzy)(S, {
					value: 0,
					from: {
						value: 1
					},
					enter: {
						value: 0
					},
					leave: {
						value: -1
					}
				}, C !== n ? "animate-never" : "animate-always");
				return (0, r.jsx)(i.animated.div, {
					style: {
						position: "relative",
						height: "100%",
						flex: 1,
						overflow: "hidden"
					},
					children: M((e, t, l) => {
						var s, a, o;
						let {
							key: u
						} = l;
						return (0, r.jsx)(i.animated.div, {
							style: function(e) {
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
								position: "absolute",
								display: "flex",
								flexDirection: "column",
								backfaceVisibility: "hidden",
								width: "100%",
								height: "100%"
							}, v.enabled ? {
								opacity: null == (s = e.value) ? void 0 : s.to(e => 1 - Math.abs(e))
							} : {
								left: null == (a = e.value) ? void 0 : a.to(f("left", D)),
								right: null == (o = e.value) ? void 0 : o.to(f("right", D))
							}),
							children: function(e) {
								switch (e) {
									case g.k.INFO:
										return (0, r.jsx)(A.Z, {
											userId: n,
											guildId: O,
											onNavigate: U,
											className: R
										});
									case g.k.MESSAGE_HISTORY:
										return (0, r.jsx)(T.Z, {
											userId: n,
											guildId: O,
											onNavigate: () => U(g.k.INFO),
											className: R
										});
									case g.k.PERMISSIONS:
										return (0, r.jsx)(I.Z, {
											userId: n,
											guildId: O,
											onNavigate: () => U(g.k.INFO),
											className: R
										});
									default:
										return null
								}
							}(t)
						}, u)
					})
				})
			}
		},
		753042: function(e, t, n) {
			n.d(t, {
				Z: () => m
			});
			var r = n(255367),
				l = n(73800),
				i = n(399606),
				s = n(481060),
				a = n(388905),
				o = n(527379),
				u = n(376923),
				c = n(16829),
				E = n(430824),
				d = n(944486),
				_ = n(189432),
				A = n(776767),
				T = n(981631),
				I = n(388032),
				g = n(12740);

			function m(e) {
				let {
					member: t
				} = e, n = (0, i.e7)([E.Z], () => E.Z.getGuild(t.guildId), [t.guildId]), m = (0, u.mh)(t.userId, t.guildId), f = (0, u.mV)(t.userId, t.guildId), O = (0, u.LD)(t.userId), N = (0, u.wi)(t.userId, t.guildId);
				return (l.useEffect(() => {
					(0, o.zO)(t.guildId)
				}, [t.guildId]), null == n) ? null : (0, r.jsx)(s.xJW, {
					title: I.intl.string(I.t["ldCE/v"]),
					titleClassName: g.infoTitle,
					children: (0, r.jsxs)(A.WM, {
						children: [(0, r.jsx)(A._2, {
							icon: (0, r.jsx)(s.lZ8, {
								size: "custom",
								width: A.Mn,
								height: A.Mn
							}),
							name: (0, r.jsx)(s.Text, {
								variant: "text-sm/medium",
								color: "text-default",
								children: I.intl.string(I.t.nzGai4)
							}),
							description: m ? (0, r.jsx)(s.sV5, {
								size: "custom",
								width: A.Mn,
								height: A.Mn,
								color: s.TVs.colors.STATUS_POSITIVE
							}) : (0, r.jsx)(s.CTb, {
								size: "custom",
								width: A.Mn,
								height: A.Mn,
								color: s.TVs.colors.STATUS_DANGER
							})
						}), f !== u.qc.NO_GATE && (0, r.jsx)(A._2, {
							icon: (0, r.jsx)(s.snC, {
								size: "custom",
								width: A.Mn,
								height: A.Mn
							}),
							name: (0, r.jsx)(s.Text, {
								variant: "text-sm/medium",
								color: "text-default",
								children: I.intl.string(I.t["93hqlp"])
							}),
							description: f === u.qc.AGREED ? (0, r.jsx)(s.sV5, {
								size: "custom",
								width: A.Mn,
								height: A.Mn,
								color: s.TVs.colors.STATUS_POSITIVE
							}) : (0, r.jsx)(s.CTb, {
								size: "custom",
								width: A.Mn,
								height: A.Mn,
								color: s.TVs.colors.STATUS_DANGER
							})
						}), (0, r.jsx)(A._2, {
							icon: (0, r.jsx)(s.gw7, {
								size: "custom",
								color: "currentColor",
								width: A.Mn,
								height: A.Mn
							}),
							name: (0, r.jsx)(s.Text, {
								variant: "text-sm/medium",
								color: "text-default",
								children: I.intl.string(I.t.SaDIpK)
							}),
							description: (0, r.jsx)(s.Text, {
								variant: "text-sm/medium",
								color: "text-default",
								children: O
							})
						}), (0, r.jsx)(A._2, {
							icon: (0, r.jsx)(a.Vj, {
								guild: n,
								size: a.Vj.Sizes.SMOL,
								animate: !1,
								className: g.guildIcon
							}),
							name: (0, r.jsx)(s.Text, {
								variant: "text-sm/medium",
								color: "text-default",
								children: I.intl.string(I.t["NQJ+WF"])
							}),
							description: (0, r.jsx)(s.Text, {
								variant: "text-sm/medium",
								color: "text-default",
								children: N
							})
						}), (0, r.jsx)(A._2, {
							icon: (0, r.jsx)(s.ejJ, {
								size: "custom",
								width: A.Mn,
								height: A.Mn
							}),
							name: (0, r.jsx)(s.Text, {
								variant: "text-sm/medium",
								color: "text-default",
								children: I.intl.string(I.t["eJOq+f"])
							}),
							description: (0, r.jsx)(s.Text, {
								variant: "text-sm/medium",
								color: "text-default",
								children: (0, r.jsx)(c.ZP, {
									userId: t.userId,
									guildId: t.guildId,
									showInviterAsFooter: !0,
									onClickInviter: e => {
										let n = d.Z.getChannelId();
										(0, _.r)(t.guildId, e.id, null != n ? n : T.lds)
									}
								})
							})
						})]
					})
				})
			}
		},
		787469: function(e, t, n) {
			n.d(t, {
				Z: () => f
			}), n(642613);
			var r = n(255367),
				l = n(73800),
				i = n(120356),
				s = n.n(i),
				a = n(399606),
				o = n(481060),
				u = n(893966),
				c = n(472596),
				E = n(285173),
				d = n(485386),
				_ = n(430824),
				A = n(496675),
				T = n(776767),
				I = n(981631),
				g = n(388032),
				m = n(12740);

			function f(e) {
				let {
					member: t
				} = e, n = (0, a.e7)([_.Z], () => _.Z.getGuild(t.guildId)), i = (0, a.e7)([d.Z], () => d.Z.getRoles(t.guildId)), f = l.useMemo(() => null == n ? [] : null == t.highestRoleId ? t.roles : Object.values(i).filter(e => e.id !== t.highestRoleId && t.roles.includes(e.id)).sort((e, t) => {
					var n, r;
					return null != (r = null != (n = null == e ? void 0 : e.position) ? n : 0 - (null == t ? void 0 : t.position)) ? r : 0
				}).map(e => e.id), [t.roles, t.highestRoleId, n, i]), O = (0, a.e7)([u.Z], () => u.Z.getEnhancedMember(t.guildId, t.userId), [t.guildId, t.userId]), N = (0, c.zq)(O), h = (0, c.vN)(t), R = (0, a.e7)([A.Z], () => A.Z.can(I.Plq.MANAGE_ROLES, n), [n]);
				return null == n ? null : (0, r.jsx)(o.xJW, {
					title: g.intl.string(g.t.LPJmLy),
					titleClassName: m.infoTitle,
					children: (0, r.jsx)(T.WM, {
						children: (0, r.jsx)(T._2, {
							description: t.roles.length > 0 || R ? (0, r.jsxs)("div", {
								className: m.roleContainer,
								children: [(0, r.jsx)(o.ua7, {
									"aria-label": g.intl.string(g.t["0g8Xd3"]),
									allowOverflow: !0,
									text: g.intl.string(g.t["93S+lJ"]),
									children: e => {
										let {
											onMouseEnter: n,
											onMouseLeave: l
										} = e;
										return (0, r.jsx)(o.P3F, {
											onMouseEnter: n,
											onMouseLeave: l,
											children: (0, r.jsx)(E.Z, {
												className: s()(m.roleTooltipItem, m.highestRole),
												role: N,
												guildId: t.guildId
											})
										})
									}
								}), f.map(e => (0, r.jsx)(E.Z, {
									className: m.roleTooltipItem,
									role: i[e],
									guildId: t.guildId
								}, e)), R && (0, r.jsx)(o.ua7, {
									"aria-label": g.intl.string(g.t.ljnBlp),
									allowOverflow: !0,
									text: g.intl.string(g.t.ljnBlp),
									children: e => {
										let {
											onMouseEnter: t,
											onMouseLeave: n
										} = e;
										return (0, r.jsx)(o.P3F, {
											className: m.addRoleContainer,
											onClick: h,
											onMouseEnter: t,
											onMouseLeave: n,
											children: (0, r.jsx)(o.oFk, {
												size: "custom",
												color: "currentColor",
												className: m.addRoleIcon,
												width: 20,
												height: 20
											})
										})
									}
								})]
							}) : (0, r.jsx)("div", {
								className: m.noRoles,
								children: (0, r.jsx)(o.Text, {
									variant: "text-sm/normal",
									children: g.intl.string(g.t.nZfHsb)
								})
							})
						})
					})
				})
			}
		},
		477718: function(e, t, n) {
			n.d(t, {
				Z: () => v
			});
			var r = n(255367),
				l = n(73800),
				i = n(120356),
				s = n.n(i),
				a = n(913527),
				o = n.n(a),
				u = n(399606),
				c = n(481060),
				E = n(480137),
				d = n(906732),
				_ = n(376923),
				A = n(472596),
				T = n(987707),
				I = n(909746),
				g = n(501801),
				m = n(884902),
				f = n(271383),
				O = n(430824),
				N = n(5192),
				h = n(776767),
				R = n(981631),
				p = n(388032),
				S = n(54433),
				C = n(44946),
				b = n(12740);

			function D(e) {
				var t;
				let {
					log: n,
					member: i,
					guild: a
				} = e, {
					analyticsLocations: E
				} = (0, d.ZP)(), T = I.nm(n), O = I.QM(n), h = null == (t = I.V$(R.zUn.REASON, n)) ? void 0 : t.newValue, b = I.J5(n), D = (0, _.LJ)(n.id), v = (0, u.e7)([f.ZP], () => null != n.userId ? f.ZP.getMember(i.guildId, n.userId) : null, [i.guildId, n.userId]), U = (0, m.X7)(null == v ? void 0 : v.guildId, null == v ? void 0 : v.userId, null == v ? void 0 : v.colorStrings), L = l.useCallback(e => t => {
					t.preventDefault(), t.stopPropagation(), null != e && (0, A.RE)(e, E)
				}, [E]), M = l.useCallback(() => null == n.user ? null : (0, r.jsx)(c.ua7, {
					text: p.intl.string(p.t.mvsi9v),
					children: e => {
						var t;
						let {
							onMouseEnter: l,
							onMouseLeave: s
						} = e;
						return (0, r.jsx)(c.P3F, {
							tag: "span",
							className: S.username,
							onClick: L(v),
							onMouseEnter: l,
							onMouseLeave: s,
							children: (0, r.jsxs)(c.Text, {
								variant: "text-sm/medium",
								tag: "span",
								children: ["@", (0, r.jsx)(c.PUh, {
									name: N.ZP.getName(i.guildId, null, n.user),
									color: null != (t = null == v ? void 0 : v.colorString) ? t : void 0,
									roleColors: U
								})]
							})
						})
					}
				}), [L, n.user, i.guildId, v, U])();
				return (0, r.jsxs)("div", {
					className: s()(C.modInfoItem, S.auditLogItem),
					children: [(0, r.jsxs)("div", {
						className: S.auditLogItemTitleContainer,
						children: [(0, r.jsxs)("div", {
							className: S.auditLogItemTitle,
							children: [null != T && (0, r.jsx)(c.Text, {
								variant: "text-sm/semibold",
								color: "header-primary",
								children: T
							}), null != O && (0, r.jsxs)(c.Text, {
								variant: "text-sm/normal",
								color: "header-secondary",
								children: ["(", "string" == typeof O ? O : o()(O).fromNow(), ")"]
							})]
						}), (0, r.jsx)("div", {
							className: S.auditLogItemDate,
							children: (0, r.jsx)(c.Text, {
								variant: "text-sm/medium",
								color: "header-primary",
								children: D
							})
						})]
					}), null != h && (0, r.jsx)("div", {
						className: S.auditLogSecondaryContainer,
						children: (0, r.jsxs)("div", {
							className: S.auditLogReason,
							children: [M, (0, r.jsx)(c.Text, {
								variant: "text-sm/normal",
								color: "text-muted",
								tag: "span",
								children: h
							})]
						})
					}), null == h && null != b && (0, r.jsx)("div", {
						className: S.auditLogSecondaryContainer,
						children: (0, r.jsxs)("div", {
							className: S.auditLogSecondary,
							children: [M, (0, r.jsx)(c.Text, {
								variant: "text-sm/normal",
								color: "text-muted",
								tag: "span",
								children: b
							})]
						})
					}), null == h && null == b && (0, r.jsx)("div", {
						className: S.auditLogSecondaryContainer,
						children: (0, r.jsx)("div", {
							className: S.auditLogSecondary,
							children: (0, r.jsx)(c.Text, {
								variant: "text-sm/normal",
								color: "text-muted",
								tag: "span",
								children: (0, r.jsx)(g.tP, {
									log: n,
									guild: a,
									onContentClick: () => {},
									className: S.auditLogExpandedChangeDetails
								})
							})
						})
					})]
				})
			}

			function v(e) {
				let {
					member: t
				} = e, n = (0, u.e7)([O.Z], () => O.Z.getGuild(t.guildId), [t.guildId]), i = (0, u.e7)([T.Z], () => {
					let e = T.Z.logs;
					return null == e || null == n ? [] : I._$(e, n)
				}, [n]);
				return (l.useEffect(() => {
					!async function(e, t) {
						await E.gV(t, e)
					}(t.guildId, t.userId)
				}, [t.guildId, t.userId]), null == n || 0 === i.length) ? null : (0, r.jsx)(c.xJW, {
					title: p.intl.string(p.t.flCxLi),
					titleClassName: b.infoTitle,
					children: i.length > 0 ? (0, r.jsx)(h.WM, {
						children: i.map(e => (0, r.jsx)(D, {
							log: e,
							member: t,
							guild: n
						}, e.id))
					}) : null
				})
			}
		},
		776767: function(e, t, n) {
			n.d(t, {
				Mn: () => o,
				WM: () => c,
				_2: () => u
			}), n(953529);
			var r = n(255367);
			n(73800);
			var l = n(120356),
				i = n.n(l),
				s = n(481060),
				a = n(44946);
			let o = 16;

			function u(e) {
				let {
					description: t,
					name: n,
					icon: l,
					onNavigate: u,
					className: c,
					missingNavIcon: E
				} = e;
				return (0, r.jsxs)(s.P3F, {
					onClick: u,
					className: i()(a.modInfoItem, null != u && a.modInfoAction, c),
					children: [null != l && (0, r.jsx)("div", {
						className: a.modInfoItemIcon,
						children: l
					}), null != n && (0, r.jsx)("div", {
						className: a.modInfoItemName,
						children: n
					}), (0, r.jsx)("div", {
						className: a.modInfoItemDescription,
						children: t
					}), null != u && (0, r.jsx)("div", {
						className: a.modInfoItemActionIcon,
						children: (0, r.jsx)(s.LJT, {
							size: "custom",
							width: o,
							height: o
						})
					}), null == u && null != E && (0, r.jsx)("div", {
						className: a.modInfoItemActionIcon,
						children: E
					})]
				})
			}

			function c(e) {
				let {
					children: t
				} = e;
				return (0, r.jsx)("div", {
					className: a.modInfoItemContainer,
					children: t
				})
			}
		},
		791176: function(e, t, n) {
			n.d(t, {
				Z: () => N
			}), n(539854);
			var r = n(255367),
				l = n(73800),
				i = n(120356),
				s = n.n(i),
				a = n(399606),
				o = n(481060),
				u = n(285173),
				c = n(422559),
				E = n(485386),
				d = n(430824),
				_ = n(233608),
				A = n(776767),
				T = n(351127),
				I = n(50493),
				g = n(981631),
				m = n(388032),
				f = n(514983);

			function O(e) {
				var t, n;
				let {
					permission: l,
					roleIds: i,
					guild: d,
					specMap: _
				} = e, A = g.Plq[l], I = null != (n = null == (t = _[A.toString()]) ? void 0 : t.title) ? n : (0, c.wt)(A), O = T._o.has(A), N = (0, a.e7)([E.Z], () => E.Z.getRoles(d.id));
				return (0, r.jsx)(o.ua7, {
					"aria-label": m.intl.string(m.t["0g8Xd3"]),
					tooltipClassName: f.roleTooltipContainer,
					tooltipContentClassName: f.roleTooltipContentContainer,
					allowOverflow: !0,
					text: (0, r.jsxs)(r.Fragment, {
						children: [(0, r.jsx)(o.Text, {
							variant: "text-sm/normal",
							children: O ? m.intl.string(m.t["GEuu/P"]) : m.intl.string(m.t.wgGiCg)
						}), i.map(e => (0, r.jsx)("div", {
							className: f.roleTooltipItem,
							children: (0, r.jsx)(u.Z, {
								role: N[e],
								guildId: d.id
							})
						}, e))]
					}),
					children: e => {
						let {
							onMouseEnter: t,
							onMouseLeave: n
						} = e;
						return (0, r.jsxs)(o.P3F, {
							className: s()(f.permissionChiplet, {
								[f.elevatedPermission]: O
							}),
							onMouseEnter: t,
							onMouseLeave: n,
							children: [O && (0, r.jsx)(o.tQf, {
								size: "custom",
								width: 16,
								height: 16,
								color: o.TVs.colors.TEXT_BRAND
							}), (0, r.jsx)(o.Text, {
								variant: "text-xs/medium",
								color: "interactive-normal",
								children: I
							})]
						})
					}
				})
			}
			let N = l.memo(function(e) {
				let {
					member: t,
					onNavigate: n
				} = e, i = (0, a.e7)([d.Z], () => d.Z.getGuild(t.guildId), [t.guildId]), u = (0, T.B2)(t.userId, t.guildId, T.Qn), c = (0, T.B2)(t.userId, t.guildId, T.pd), E = Object.keys(u).length, N = Object.keys(c).length, h = l.useMemo(() => null != i ? _.Z.getGuildPermissionSpecMap(i) : null, [i]), R = l.useMemo(() => null != i ? _.Z.generateGuildPermissionSpec(i) : null, [i]), p = l.useMemo(() => {
					if (null == i || null == h) return null;
					if (0 === E) return (0, r.jsx)("div", {
						className: s()(f.permissionChiplet, f.noModPerms),
						children: (0, r.jsx)(o.Text, {
							variant: "text-sm/normal",
							color: "text-feedback-positive",
							children: m.intl.string(m.t.sXhykZ)
						})
					});
					let e = [];
					return null == R || R.forEach(t => {
						t.permissions.forEach(t => {
							let n = t.flag,
								l = T.pd.find(e => g.Plq[e] === n);
							if (null == l) return;
							let s = u[l];
							null != s && e.push((0, r.jsx)(O, {
								permission: l,
								roleIds: s,
								guild: i,
								specMap: h
							}, l))
						})
					}), e
				}, [i, E, u, R, h]);
				return null == i ? null : (0, r.jsx)(o.xJW, {
					title: (0, r.jsxs)("div", {
						className: f.headerContainer,
						children: [(0, r.jsx)(o.Text, {
							variant: "eyebrow",
							color: "header-secondary",
							children: m.intl.string(m.t.ZCq2nJ)
						}), (0, r.jsxs)(o.P3F, {
							className: f.viewAllPermissions,
							onClick: () => n(I.k.PERMISSIONS),
							children: [(0, r.jsx)(o.Text, {
								variant: "eyebrow",
								color: "interactive-normal",
								children: m.intl.format(m.t["0x6aTk"], {
									count: N
								})
							}), (0, r.jsx)(o.Fbu, {
								size: "custom",
								width: 16,
								height: 16
							})]
						})]
					}),
					children: (0, r.jsx)(A.WM, {
						children: (0, r.jsx)(A._2, {
							description: (0, r.jsx)("div", {
								className: f.permissionsContainer,
								children: p
							})
						})
					})
				})
			})
		},
		727381: function(e, t, n) {
			n.d(t, {
				Z: () => O
			});
			var r = n(255367);
			n(73800);
			var l = n(120356),
				i = n.n(l),
				s = n(399606),
				a = n(481060),
				o = n(271383),
				u = n(594174),
				c = n(777288),
				E = n(753042),
				d = n(787469),
				_ = n(477718),
				A = n(791176),
				T = n(908474),
				I = n(467014),
				g = n(388032),
				m = n(12740);

			function f() {
				return (0, r.jsxs)("div", {
					className: m.header,
					children: [(0, r.jsxs)("div", {
						className: m.headerTitle,
						children: [(0, r.jsx)(c.Z, {
							width: 16,
							height: 16
						}), (0, r.jsx)(a.X6q, {
							variant: "heading-md/semibold",
							children: g.intl.string(g.t.cf5lgo)
						})]
					}), (0, r.jsx)("div", {
						children: (0, r.jsx)(a.M2$, {
							shortcut: "esc",
							keyClassName: m.keyComboInner,
							className: m.keyComboContainer
						})
					})]
				})
			}

			function O(e) {
				let {
					userId: t,
					guildId: n,
					location: l,
					className: c,
					onNavigate: g
				} = e, O = (0, s.e7)([u.default], () => u.default.getUser(t), [t]), N = (0, s.e7)([o.ZP], () => o.ZP.getMember(n, t), [n, t]);
				return null == O || null == N ? null : (0, r.jsxs)("div", {
					className: i()(m.container, c),
					children: [(0, r.jsx)(f, {}), (0, r.jsxs)(a.Ttm, {
						className: m.innerContainer,
						children: [(0, r.jsx)(T.Z, {
							member: N
						}), (0, r.jsx)(I.Z, {
							userId: t,
							guildId: n
						}), (0, r.jsx)(A.Z, {
							member: N,
							onNavigate: g
						}), (0, r.jsx)(d.Z, {
							member: N
						}), (0, r.jsx)(E.Z, {
							member: N
						}), (0, r.jsx)(_.Z, {
							member: N
						})]
					})]
				})
			}
		},
		908474: function(e, t, n) {
			n.d(t, {
				Z: () => A
			});
			var r = n(255367),
				l = n(73800),
				i = n(399606),
				s = n(481060),
				a = n(346486),
				o = n(69882),
				u = n(815790),
				c = n(893966),
				E = n(776767),
				d = n(388032),
				_ = n(12740);

			function A(e) {
				let {
					member: t
				} = e, n = t.userId, A = t.guildId, T = (0, i.e7)([c.Z], () => c.Z.getEnhancedMember(A, n), [n, A]), I = (null != T ? T : t).unusualDMActivityUntil, g = l.useCallback(e => {
					if (null == e) return null;
					let t = new Date(e).getTime();
					return (0, u.fv)(t, u.jq.JOINED_AT)
				}, []), m = l.useMemo(() => null == t ? null : g(I), [t, g, I]), f = l.useMemo(() => (0, o.J)(t.communicationDisabledUntil), [t.communicationDisabledUntil]), O = l.useMemo(() => null == t.communicationDisabledUntil ? new Date : new Date(t.communicationDisabledUntil), [t.communicationDisabledUntil]);
				return null != I || f ? (0, r.jsx)(s.xJW, {
					title: d.intl.string(d.t["7V375+"]),
					titleClassName: _.infoTitle,
					children: (0, r.jsxs)(E.WM, {
						children: [null != I && (0, r.jsx)(E._2, {
							icon: (0, r.jsx)(s.b6m, {
								size: "custom",
								color: "currentColor",
								width: E.Mn,
								height: E.Mn
							}),
							name: (0, r.jsx)(s.Text, {
								variant: "text-sm/semibold",
								color: "text-default",
								children: d.intl.string(d.t.ZRnONz)
							}),
							description: (0, r.jsx)(s.Text, {
								variant: "text-sm/semibold",
								color: "text-default",
								children: m
							})
						}), f && null != O && (0, r.jsx)(E._2, {
							icon: (0, r.jsx)(s.YlB, {
								size: "custom",
								color: "currentColor",
								width: E.Mn,
								height: E.Mn
							}),
							name: (0, r.jsx)(s.Text, {
								variant: "text-sm/semibold",
								color: "text-default",
								children: d.intl.string(d.t["TJ8/tL"])
							}),
							description: (0, r.jsx)(s.Text, {
								variant: "text-sm/semibold",
								color: "text-default",
								children: (0, r.jsx)(a.Z, {
									deadline: O,
									showUnits: !0,
									stopAtOneSec: !0
								})
							})
						})]
					})
				}) : null
			}
		},
		467014: function(e, t, n) {
			n.d(t, {
				Z: () => A
			});
			var r = n(255367),
				l = n(73800),
				i = n(442837),
				s = n(481060),
				a = n(433355),
				o = n(189432),
				u = n(356778),
				c = n(776767),
				E = n(50493),
				d = n(388032),
				_ = n(12740);

			function A(e) {
				let {
					userId: t,
					guildId: n
				} = e, A = (0, i.e7)([a.ZP], () => a.ZP.getGuildSidebarState(n), [n]), {
					messagesCount: T,
					linksCount: I,
					mediaCount: g
				} = (0, u.P2)(t, n), m = new Intl.NumberFormat(d.intl.currentLocale).format(T), f = new Intl.NumberFormat(d.intl.currentLocale).format(I), O = new Intl.NumberFormat(d.intl.currentLocale).format(g), N = l.useCallback(async e => {
					if (null == A) return;
					let r = (0, u.Ow)(t, e, {
						include_nsfw: !0
					});
					await (0, o.r)(n, t, A.baseChannelId, {
						modViewPanel: E.k.MESSAGE_HISTORY,
						additionalSearchQuery: r
					})
				}, [n, A, t]);
				return (0, r.jsx)(s.xJW, {
					title: d.intl.string(d.t.vCn2Tk),
					titleClassName: _.infoTitle,
					children: (0, r.jsxs)(c.WM, {
						children: [(0, r.jsx)(c._2, {
							icon: (0, r.jsx)(s.kBi, {
								size: "custom",
								color: "currentColor",
								width: c.Mn,
								height: c.Mn
							}),
							name: (0, r.jsx)(s.Text, {
								variant: "text-sm/semibold",
								color: "text-default",
								children: d.intl.string(d.t.OIgYlZ)
							}),
							description: T === u.II ? (0, r.jsx)(s.$jN, {
								type: s.RAz.SPINNING_CIRCLE,
								className: _.loadingSpinner
							}) : (0, r.jsx)(s.Text, {
								variant: "text-sm/semibold",
								color: "interactive-normal",
								children: m
							}),
							onNavigate: T > 0 ? () => N(u.mw.MESSAGES) : void 0
						}), (0, r.jsx)(c._2, {
							icon: (0, r.jsx)(s.xPt, {
								size: "custom",
								width: c.Mn,
								height: c.Mn
							}),
							name: (0, r.jsx)(s.Text, {
								variant: "text-sm/semibold",
								color: "text-default",
								children: d.intl.string(d.t.DFSvTk)
							}),
							description: I === u.II ? (0, r.jsx)(s.$jN, {
								type: s.RAz.SPINNING_CIRCLE,
								className: _.loadingSpinner
							}) : (0, r.jsx)(s.Text, {
								variant: "text-sm/semibold",
								color: "interactive-normal",
								children: f
							}),
							onNavigate: I > 0 ? () => N(u.mw.LINKS) : void 0
						}), (0, r.jsx)(c._2, {
							icon: (0, r.jsx)(s.Ka2, {
								size: "custom",
								width: c.Mn,
								height: c.Mn
							}),
							name: (0, r.jsx)(s.Text, {
								variant: "text-sm/semibold",
								color: "text-default",
								children: d.intl.string(d.t["Aw9+/P"])
							}),
							description: g === u.II ? (0, r.jsx)(s.$jN, {
								type: s.RAz.SPINNING_CIRCLE,
								className: _.loadingSpinner
							}) : (0, r.jsx)(s.Text, {
								variant: "text-sm/semibold",
								color: "interactive-normal",
								children: O
							}),
							onNavigate: g > 0 ? () => N(u.mw.MEDIA) : void 0
						})]
					})
				})
			}
		},
		313692: function(e, t, n) {
			n.d(t, {
				Z: () => S
			}), n(388685);
			var r = n(255367),
				l = n(73800),
				i = n(120356),
				s = n.n(i),
				a = n(392711),
				o = n(399606),
				u = n(481060),
				c = n(493773),
				E = n(963374),
				d = n(735020),
				_ = n(786761),
				A = n(937889),
				T = n(619753),
				I = n(433355),
				g = n(271383),
				m = n(594174),
				f = n(189432),
				O = n(356778),
				N = n(370595),
				h = n(50493),
				R = n(12740),
				p = n(450355);

			function S(e) {
				var t, n;
				let {
					userId: i,
					guildId: S,
					location: C,
					className: b,
					onNavigate: D
				} = e, v = l.useRef(null), U = (0, o.e7)([I.ZP], () => I.ZP.getGuildSidebarState(S), [S]), L = l.useRef(0), [M, x] = l.useState(null != (t = null == U ? void 0 : U.details.additionalSearchQuery) ? t : {}), P = (0, O.z0)(i, S, {
					addtionalQuery: M,
					shouldDispatch: !0
				}), j = (0, o.e7)([m.default], () => m.default.getUser(i), [i]), y = (0, o.e7)([g.ZP], () => g.ZP.getMember(S, i), [S, i]);
				(0, c.Ng)(() => {
					let e = null == U ? void 0 : U.details.scrollOffset;
					if (null != e) {
						var t;
						null == (t = v.current) || t.scrollTo({
							to: e,
							animate: !1
						})
					}
				});
				let w = l.useCallback(e => {
						null != U && (L.current = e.target.scrollTop, (0, f.r)(S, i, U.baseChannelId, {
							modViewPanel: h.k.MESSAGE_HISTORY,
							additionalSearchQuery: M,
							scrollOffset: L.current
						}))
					}, [S, i, U, M]),
					G = (0, a.throttle)(w, 300),
					z = l.useCallback(e => {
						var t, n;
						if (null == U) return;
						let r = (t = function(e) {
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
						}({}, M), n = n = {
							offset: 25 * e
						}, Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : (function(e, t) {
							var n = Object.keys(e);
							if (Object.getOwnPropertySymbols) {
								var r = Object.getOwnPropertySymbols(e);
								n.push.apply(n, r)
							}
							return n
						})(Object(n)).forEach(function(e) {
							Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
						}), t);
						x(r), (0, f.r)(S, i, U.baseChannelId, {
							modViewPanel: h.k.MESSAGE_HISTORY,
							additionalSearchQuery: r,
							scrollOffset: L.current
						})
					}, [S, i, U, M]),
					Z = null != (n = null == M ? void 0 : M.offset) ? n : 0,
					B = (0, o.e7)([d.Z], () => {
						if (null == P.result) return [];
						let e = P.result.messages,
							t = (0, E.nC)("");
						return e.map(e => e.map(e => {
							let n = d.Z.getMessage(e.id, e.channel_id),
								r = (0, _.e5)(e);
							return null != n && (r = r.merge({
								attachments: n.attachments,
								embeds: n.embeds
							})), r.isSearchHit ? r.set("customRenderedContent", (0, A.ZP)(r, {
								postProcessor: t,
								allowHeading: !0,
								allowList: !0
							})) : r
						}))
					}, [P.result]),
					F = l.useMemo(() => {
						var e, t, n, r;
						return null == P.result ? {
							documentsIndexed: 0,
							isSearching: !0,
							isIndexing: !1,
							isHistoricalIndexing: !1,
							offset: Z,
							totalResults: 0,
							hasError: !1,
							showBlockedResults: !1,
							showNoResultsAlt: !1
						} : {
							documentsIndexed: null != (e = P.result.documents_indexed) ? e : 0,
							isSearching: !1,
							isIndexing: null != (t = P.result.doing_deep_historical_index) && t,
							isHistoricalIndexing: null != (n = P.result.doing_deep_historical_index) && n,
							offset: Z,
							totalResults: null != (r = P.result.total_results) ? r : 0,
							hasError: !1,
							showBlockedResults: !1,
							showNoResultsAlt: !1
						}
					}, [P.result, Z]);
				return null == j || null == y || null == F ? null : (0, r.jsxs)("div", {
					className: s()(R.container, b),
					children: [(0, r.jsx)(N.Z, {
						guildId: S,
						userId: i,
						onNavigate: D
					}), (0, r.jsx)(u.Den, {
						className: p.innerContainer,
						ref: v,
						onScroll: G,
						children: (0, r.jsx)(T.Z, {
							searchResults: B,
							search: F,
							searchId: i,
							renderEmbeds: !0,
							blockCount: 0,
							ignoreCount: 0,
							scrollTo: () => {},
							onPageChange: z
						})
					})]
				})
			}
		},
		596443: function(e, t, n) {
			n.d(t, {
				Z: () => U
			}), n(953529), n(388685), n(539854);
			var r = n(255367),
				l = n(73800),
				i = n(120356),
				s = n.n(i),
				a = n(954955),
				o = n.n(a),
				u = n(399606),
				c = n(481060),
				E = n(605436),
				d = n(79712),
				_ = n(285173),
				A = n(434404),
				T = n(422559),
				I = n(271383),
				g = n(485386),
				m = n(430824),
				f = n(496675),
				O = n(594174),
				N = n(233608),
				h = n(370595),
				R = n(351127),
				p = n(981631),
				S = n(388032),
				C = n(12740),
				b = n(444021);

			function D(e) {
				var t, n, i, a;
				let {
					permission: o,
					roleIds: I,
					guild: m,
					specMap: O,
					categoryTitle: N,
					userId: h
				} = e, C = (0, u.e7)([g.Z], () => g.Z.getRoles(m.id)), D = p.Plq[o], v = null != (i = null == (t = O[D.toString()]) ? void 0 : t.title) ? i : (0, T.wt)(D), U = null != (a = null == (n = O[D.toString()]) ? void 0 : n.description) ? a : "", L = R._o.has(D), M = R.Qn.includes(o), x = I.length, P = (0, u.e7)([f.Z], () => f.Z.can(p.Plq.MANAGE_ROLES, m), [m]), j = l.useCallback(async e => {
					P && (await A.Z.open(m.id, p.pNK.ROLES), await A.Z.selectRole(e))
				}, [P, m.id]);
				return (0, r.jsxs)("div", {
					className: s()(b.permissionItemContainer, {
						[b.elevatedPermission]: L
					}),
					children: [(0, r.jsxs)("div", {
						className: b.permissionItemHeader,
						children: [(0, r.jsxs)("div", {
							className: b.permissionTitle,
							children: [(0, r.jsx)(c.Text, {
								variant: "text-md/medium",
								color: "header-primary",
								children: v
							}), null != N && (0, r.jsxs)("div", {
								className: b.permissionItemSubheader,
								children: [(0, r.jsx)(c.Text, {
									variant: "text-xs/normal",
									color: "header-muted",
									children: N
								}), L && (0, r.jsxs)(r.Fragment, {
									children: [(0, r.jsx)(d.Z, {
										height: 4,
										width: 4,
										"aria-hidden": "true",
										color: c.TVs.colors.INTERACTIVE_MUTED.css
									}), (0, r.jsx)(c.ua7, {
										text: S.intl.string(S.t.GZvXuL),
										children: e => {
											var t, n;
											return (0, r.jsxs)(c.P3F, (t = function(e) {
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
												className: b.elevatedPermissionContainer
											}, e), n = n = {
												children: [(0, r.jsx)(c.tQf, {
													size: "custom",
													width: 12,
													height: 12,
													color: c.TVs.colors.TEXT_BRAND
												}), (0, r.jsx)(c.Text, {
													variant: "text-xs/normal",
													color: "text-brand",
													children: S.intl.string(S.t.k7Kqj4)
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
									})]
								}), !L && M && (0, r.jsxs)(r.Fragment, {
									children: [(0, r.jsx)(d.Z, {
										height: 4,
										width: 4,
										"aria-hidden": "true",
										color: c.TVs.colors.INTERACTIVE_MUTED.css
									}), (0, r.jsx)("div", {
										className: b.elevatedPermissionContainer,
										children: (0, r.jsx)(c.Text, {
											variant: "text-xs/normal",
											color: "header-muted",
											children: S.intl.string(S.t.IfqUEB)
										})
									})]
								})]
							})]
						}), (0, r.jsx)(c.Text, {
							variant: "text-sm/medium",
							color: "text-default",
							children: S.intl.format(S.t.KmJI4O, {
								roleCount: x
							})
						})]
					}), null != U && (0, r.jsx)("div", {
						className: b.permissionItemDescription,
						children: (0, r.jsx)(c.Text, {
							variant: "text-sm/normal",
							color: "text-secondary",
							children: U
						})
					}), (0, r.jsx)("div", {
						className: b.permissionItemRoleContainer,
						children: I.map(e => (0, R.Ov)(e, h) ? (0, r.jsx)("div", {
							className: b.roleTooltipItem,
							children: (0, r.jsx)("div", {
								className: b.roleChiplet,
								children: (0, r.jsx)(c.Text, {
									variant: "text-xs/medium",
									color: "text-default",
									children: S.intl.string(S.t.pclUFB)
								})
							})
						}, e) : (0, r.jsx)(c.P3F, {
							className: s()(b.roleTooltipItem, {
								[b.editable]: P && !(0, E.pM)(m.id, e)
							}),
							onClick: () => j(e),
							children: (0, r.jsx)(_.Z, {
								role: C[e],
								guildId: m.id,
								className: b.roleChiplet
							})
						}, e))
					})]
				})
			}

			function v(e, t) {
				return t.toLowerCase().includes(e.toLowerCase())
			}

			function U(e) {
				let {
					userId: t,
					guildId: n,
					location: i,
					className: a,
					onNavigate: E
				} = e, d = (0, u.e7)([O.default], () => O.default.getUser(t), [t]), _ = (0, u.e7)([m.Z], () => m.Z.getGuild(n), [n]), A = (0, u.e7)([I.ZP], () => I.ZP.getMember(n, t), [n, t]), g = (0, R.B2)(t, n, R.pd), f = Object.keys(g).length, U = l.useMemo(() => null != _ ? N.Z.getGuildPermissionSpecMap(_) : null, [_]), L = l.useMemo(() => null != _ ? N.Z.generateGuildPermissionSpec(_) : null, [_]), [M, x] = l.useState(""), [P, j] = l.useState(""), y = l.useMemo(() => o()(j, 300), []), w = l.useCallback(e => {
					x(e), y(e)
				}, [y]), G = l.useCallback(() => {
					x(""), j("")
				}, []), z = l.useMemo(() => {
					if (null == _ || null == U || null == A) return null;
					if (0 === f) return (0, r.jsx)(c.Text, {
						variant: "text-sm/normal",
						children: S.intl.string(S.t.DEBGqK)
					});
					let e = [];
					return null == L || L.forEach(n => {
						n.permissions.forEach(l => {
							let i = l.flag,
								s = R.pd.find(e => p.Plq[e] === i);
							if (null == s) return;
							let a = g[s];
							if (null != a) {
								if (P.length > 0) {
									var o, u, c, E, d;
									let e = null != (E = null == (o = U[i.toString()]) ? void 0 : o.title) ? E : (0, T.wt)(i),
										t = null != (d = null == (c = U[i.toString()]) || null == (u = c.description) ? void 0 : u.toString()) ? d : "",
										r = n.title,
										l = R._o.has(i),
										a = R.Qn.includes(s),
										_ = l ? S.intl.string(S.t.k7Kqj4) : a ? S.intl.string(S.t.IfqUEB) : null,
										A = v(P, e),
										I = v(P, t),
										g = v(P, r),
										m = null != _ && v(P, _);
									if (!A && !I && !g && !m) return
								}
								e.push((0, r.jsx)(D, {
									permission: s,
									roleIds: a,
									guild: _,
									specMap: U,
									categoryTitle: n.title,
									userId: t
								}, s))
							}
						})
					}), e
				}, [_, U, A, f, L, g, P, t]);
				return null == d || null == A ? null : (0, r.jsxs)("div", {
					className: s()(C.container, a),
					children: [(0, r.jsx)(h.Z, {
						guildId: n,
						userId: t,
						onNavigate: E
					}), (0, r.jsx)(c.Ttm, {
						className: b.permissionsGroupContainer,
						children: (0, r.jsx)(c.xJW, {
							title: S.intl.string(S.t.BBWnpq),
							children: (0, r.jsxs)("div", {
								className: b.permissionsItemContainer,
								children: [(0, r.jsx)(c.E1j, {
									className: b.searchBar,
									query: M,
									placeholder: S.intl.string(S.t["yD9+dH"]),
									onChange: w,
									onClear: G,
									autoComplete: "off",
									inputProps: {
										autoCapitalize: "none",
										autoCorrect: "off",
										spellCheck: "false"
									}
								}), z]
							})
						})
					})]
				})
			}
		},
		351127: function(e, t, n) {
			n.d(t, {
				B2: () => g,
				Ov: () => I,
				Qn: () => A,
				_o: () => T,
				pd: () => _
			}), n(388685), n(415506), n(539854);
			var r = n(149765),
				l = n(399606),
				i = n(601964),
				s = n(271383),
				a = n(485386),
				o = n(430824),
				u = n(594174),
				c = n(700785),
				E = n(981631),
				d = n(135899);
			let _ = Object.keys(E.Plq),
				A = Array.from(new Set([...d.$X, ...E.yYS, E.Plq.ADMINISTRATOR, E.Plq.KICK_MEMBERS, E.Plq.BAN_MEMBERS, E.Plq.MANAGE_GUILD, E.Plq.MANAGE_CHANNELS, E.Plq.MANAGE_ROLES, E.Plq.MANAGE_MESSAGES, E.Plq.MANAGE_THREADS, E.Plq.MANAGE_GUILD_EXPRESSIONS, E.Plq.CREATE_GUILD_EXPRESSIONS, E.Plq.MANAGE_EVENTS, E.Plq.CREATE_EVENTS, E.Plq.MODERATE_MEMBERS, E.Plq.MENTION_EVERYONE, E.Plq.MANAGE_WEBHOOKS])).map(e => {
					let t = _.find(t => E.Plq[t] === e);
					if (null == t) throw Error("Permission ".concat(e, " not found in Permissions"));
					return t
				}),
				T = new Set(E.yYS);

			function I(e, t) {
				return e === t
			}

			function g(e, t, n) {
				let d = (0, l.e7)([o.Z], () => o.Z.getGuild(t), [t]);
				return (0, l.e7)([s.ZP, u.default, a.Z], () => {
					let l = {},
						o = s.ZP.getMember(t, e),
						_ = u.default.getUser(e);
					if (null == d || null == o || null == _) return l;
					let A = a.Z.getEveryoneRole(d),
						T = c.uB({
							user: _,
							context: d
						});
					for (let e of n) {
						let t = E.Plq[e];
						if (r.e$(T, t)) {
							for (let n of (l[e] = [], o.roles)) {
								let i = a.Z.getRole(d.id, n);
								null != i && (r.e$(i.permissions, E.Plq.ADMINISTRATOR) || r.Db(i.permissions, t)) && l[e].push(i.id)
							}(r.e$(A.permissions, E.Plq.ADMINISTRATOR) || r.Db(A.permissions, t)) && l[e].push(A.id), (0, i.eM)(d, _) && l[e].push(_.id)
						}
					}
					return l
				}, [d, t, n, e])
			}
		},
		327250: function(e, t, n) {
			n.d(t, {
				ZP: () => y
			});
			var r = n(255367);
			n(73800);
			var l = n(120356),
				i = n.n(l),
				s = n(399606),
				a = n(481060),
				o = n(493683),
				u = n(906732),
				c = n(69882),
				E = n(251794),
				d = n(386696),
				_ = n(946273),
				A = n(910693),
				T = n(172751),
				I = n(314897),
				g = n(592125),
				m = n(271383),
				f = n(430824),
				O = n(496675),
				N = n(158776),
				h = n(944486),
				R = n(885110),
				p = n(594174),
				S = n(572004),
				C = n(5192),
				b = n(51144),
				D = n(131085),
				v = n(388032),
				U = n(157092);

			function L(e) {
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

			function M(e, t) {
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

			function x(e) {
				let {
					user: t,
					guildId: n,
					onClose: l
				} = e, i = t.id, o = (0, s.e7)([R.Z, N.Z, I.default], () => i === I.default.getId() ? R.Z.getStatus() : N.Z.getStatus(i, n), [i, n]);
				return (0, r.jsxs)("div", {
					className: U.topRow,
					children: [(0, r.jsxs)("div", {
						className: U.memberNameContainer,
						children: [(0, r.jsx)("div", {
							className: U.memberAvatar,
							children: (0, r.jsx)(a.qEK, {
								src: t.getAvatarURL(n, 48),
								"aria-label": t.username,
								size: a.EFr.SIZE_48,
								status: o
							})
						}), (0, r.jsxs)("div", {
							className: U.memberNameAndTagContainer,
							children: [(0, r.jsxs)("div", {
								className: U.memberNameTextContainer,
								children: [(0, r.jsx)(a.Text, {
									variant: "text-lg/medium",
									children: (0, r.jsx)(a.PUh, {
										name: C.ZP.getName(n, null, t),
										color: a.TVs.colors.HEADER_PRIMARY.css
									})
								}), (0, r.jsx)(T.ZP, {
									primaryGuild: null == t ? void 0 : t.primaryGuild,
									userId: null == t ? void 0 : t.id,
									contextGuildId: n,
									badgeSize: D.Gg.SIZE_16,
									textVariant: "heading-md/semibold",
									className: U.memberClanTag,
									containerClassName: U.memberClanTagContainer
								})]
							}), (0, r.jsx)(a.Text, {
								variant: "text-md/medium",
								color: "text-default",
								children: b.ZP.getUserTag(t)
							})]
						})]
					}), (0, r.jsx)(a.Text, {
						variant: "text-md/medium",
						color: "text-default",
						children: (0, r.jsx)(a.P3F, {
							className: U.closeAction,
							onClick: l,
							children: (0, r.jsx)(a.Dio, {
								size: "md",
								color: "currentColor"
							})
						})
					})]
				})
			}

			function P(e) {
				var {
					tag: t = "div",
					text: n,
					disabled: l,
					children: s,
					onClick: o
				} = e, u = function(e, t) {
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
				}(e, ["tag", "text", "disabled", "children", "onClick"]);
				return (0, r.jsx)(a.ua7, {
					text: n,
					children: e => (0, r.jsx)(a.P3F, M(L({}, u, e), {
						tag: t,
						"aria-label": n,
						className: i()(U.bottomRowAction, {
							[U.bottomRowActionDisabled]: l
						}),
						onClick: l ? void 0 : o,
						children: (0, r.jsx)("div", {
							className: U.innerBottomRowAction,
							children: s
						})
					}))
				})
			}

			function j(e) {
				let {
					user: t,
					member: l,
					guildId: i
				} = e, T = (0, s.e7)([f.Z], () => f.Z.getGuild(i)), {
					canKickUser: m,
					canBanUser: N,
					canModerateMembers: R
				} = (0, s.cj)([O.Z, p.default, f.Z], () => ({
					canKickUser: (0, _.BK)(t, T),
					canBanUser: (0, _.mm)(t, T),
					canModerateMembers: null != T && (0, d.F)(T.id, t.id, [p.default, f.Z, O.Z])
				}), [t, T]), C = (0, c.b)(l), {
					analyticsLocations: b,
					newestAnalyticsLocation: D
				} = (0, u.ZP)(), x = (0, A.sE)(i, {
					targetUserId: t.id,
					location: D,
					locations: b
				}), j = (0, s.e7)([I.default], () => I.default.getId() === (null == t ? void 0 : t.id)), y = (0, s.e7)([h.Z, g.Z], () => {
					let e = h.Z.getChannelId(i),
						t = null != e ? g.Z.getChannel(e) : null,
						n = null != t && t.isModeratorReportChannel() ? e : void 0;
					return null != n ? n : void 0
				}, [i]);
				return (0, r.jsxs)("div", {
					className: U.bottomRow,
					children: [(0, r.jsx)(P, {
						disabled: j,
						text: v.intl.string(v.t["g33r/P"]),
						onClick: () => {
							o.Z.openPrivateChannel({
								recipientIds: t.id
							})
						},
						children: (0, r.jsx)(a.kBi, {
							size: "custom",
							color: "currentColor",
							width: 24,
							height: 24
						})
					}), (0, r.jsx)(P, {
						disabled: !m,
						text: v.intl.string(v.t["3glT6e"]),
						onClick: () => {
							(0, a.ZDy)(async () => {
								let {
									default: e
								} = await n.e("36760").then(n.bind(n, 854360));
								return n => (0, r.jsx)(e, M(L({}, n), {
									location: D,
									guildId: i,
									user: t,
									modReportId: y
								}))
							})
						},
						children: (0, r.jsx)(a.I9k, {
							size: "custom",
							width: 24,
							height: 24,
							color: a.TVs.colors.TEXT_DEFAULT.css
						})
					}), (0, r.jsx)(P, {
						disabled: !N,
						text: v.intl.string(v.t["5MBJ5O"]),
						onClick: () => {
							(0, a.ZDy)(async () => {
								let {
									default: e
								} = await n.e("4114").then(n.bind(n, 98746));
								return n => (0, r.jsx)(e, M(L({}, n), {
									location: D,
									guildId: i,
									user: t,
									modReportId: y
								}))
							})
						},
						children: (0, r.jsx)(a.pgN, {
							size: "custom",
							width: 24,
							height: 24,
							color: a.TVs.colors.TEXT_DEFAULT.css
						})
					}), (0, r.jsx)(P, {
						disabled: !R,
						text: C ? v.intl.string(v.t.N86XcH) : v.intl.string(v.t.kTlLr6),
						onClick: () => {
							C ? (0, E.q)({
								guildId: l.guildId,
								userId: l.userId,
								anaylticsLocations: b
							}) : (0, E.z)({
								guildId: l.guildId,
								userId: l.userId,
								anaylticsLocations: b,
								modReportId: y
							})
						},
						children: (0, r.jsx)(a.YlB, {
							size: "custom",
							width: 24,
							height: 24,
							color: a.TVs.colors.TEXT_DEFAULT.css
						})
					}), (0, r.jsx)(P, {
						text: v.intl.string(v.t.IHTjzM),
						onClick: () => {
							x(A.jQ.COPY_ID), (0, S.JG)(t.id)
						},
						disabled: !S.wS,
						children: (0, r.jsx)(a.VuL, {
							size: "custom",
							width: 24,
							height: 24,
							color: a.TVs.colors.TEXT_DEFAULT.css
						})
					})]
				})
			}

			function y(e) {
				let {
					userId: t,
					guildId: n,
					onClose: l
				} = e, i = (0, s.e7)([p.default], () => p.default.getUser(t), [t]), a = (0, s.e7)([m.ZP], () => m.ZP.getMember(n, t), [n, t]);
				return null == i || null == a ? null : (0, r.jsxs)("div", {
					className: U.container,
					children: [(0, r.jsx)(x, {
						user: i,
						guildId: n,
						onClose: l
					}), (0, r.jsx)(j, {
						user: i,
						member: a,
						guildId: n
					})]
				})
			}
		},
		910693: function(e, t, n) {
			n.d(t, {
				BG: () => _,
				aY: () => A,
				dW: () => T,
				gm: () => d,
				h1: () => m,
				jQ: () => I,
				sE: () => g
			});
			var r, l, i = n(73800),
				s = n(100527),
				a = n(367907),
				o = n(314897),
				u = n(626135),
				c = n(981631);

			function E(e, t, n) {
				var r;
				let l = function(e) {
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
				}({}, t, (0, a.hH)(null != (r = t.guild_id) ? r : n));
				u.default.track(e, l)
			}

			function d(e) {
				return i.useCallback(t => {
					let n = {
						guild_id: e,
						location: s.Z.MEMBER_SAFETY_PAGE
					};
					E(c.rMx.MOD_DASH_SEARCH_MEMBERS, n)
				}, [e])
			}

			function _(e) {
				return i.useCallback(t => {
					let n = {
						selected_role_count: t.size,
						guild_id: e,
						location: s.Z.MEMBER_SAFETY_PAGE
					};
					E(c.rMx.MOD_DASH_FILTER_ROLES, n)
				}, [e])
			}
			var A = ((r = {}).UNUSUAL_DM_ACTIVITY = "unusual_dm_activity", r.COMMUNICATION_DISABLED = "communication_disabled", r.UNUSUAL_ACCOUNT_ACTIVITY = "unusual_account_activity", r.USERNAME_QUARANTINED = "username_quarantined", r);

			function T(e) {
				return i.useCallback(t => {
					let n = {
						flag_type: t,
						guild_id: e,
						location: s.Z.MEMBER_SAFETY_PAGE
					};
					E(c.rMx.MOD_DASH_FILTER_SAFETY_FLAGS, n)
				}, [e])
			}
			var I = ((l = {}).BAN = "ban", l.KICK = "kick", l.MUTE = "mute", l.TIMEOUT = "timeout", l.ADD_ROLE = "add_role", l.REMOVE_ROLE = "remove_role", l.COPY_ID = "copy_id", l.CHANGE_NICKNAME = "change_nickname", l);

			function g(e, t) {
				let {
					location: n,
					targetUserId: r,
					targets: l,
					locations: s
				} = t;
				return i.useCallback(t => {
					let i = {
						action_type: t,
						mod_user_id: o.default.getId(),
						guild_id: e,
						location: n,
						locations: s,
						target_user_id: null != r ? r : void 0,
						targets: null != l ? l : void 0
					};
					E(c.rMx.MODERATION_ACTION, i)
				}, [e, n, r, l, s])
			}

			function m(e, t) {
				E(c.rMx.MOD_DASH_MEMBERS_TABLE_VIEWED, {
					guild_id: e,
					location: t
				})
			}
		},
		376923: function(e, t, n) {
			n.d(t, {
				LD: () => f,
				LJ: () => O,
				mV: () => g,
				mh: () => m,
				qc: () => I,
				wi: () => N
			}), n(997841), n(388685);
			var r, l = n(73800),
				i = n(399606),
				s = n(983736),
				a = n(706454),
				o = n(271383),
				u = n(430824),
				c = n(594174),
				E = n(630388),
				d = n(709054);
			n(893966), n(527379);
			var _ = n(372897);
			let A = {
					month: "short",
					day: "numeric",
					year: "numeric"
				},
				T = {
					month: "numeric",
					day: "numeric",
					year: "numeric"
				};
			var I = ((r = {})[r.NO_GATE = 0] = "NO_GATE", r[r.NO_AGREEMENT = 1] = "NO_AGREEMENT", r[r.AGREED = 2] = "AGREED", r);

			function g(e, t) {
				var n, r;
				let l = (0, i.e7)([c.default], () => c.default.getUser(e), [e]),
					a = (0, i.e7)([o.ZP], () => o.ZP.getMember(t, e), [t, e]),
					d = (0, i.e7)([u.Z], () => u.Z.getGuild(t), [t]);
				return (0, s.Dc)(d) ? null == l || null == a || null == d ? 1 : (0, E.yE)(null != (n = a.flags) ? n : 0, _.q.BYPASSES_VERIFICATION) || (0, E.yE)(null != (r = a.flags) ? r : 0, _.q.COMPLETED_ONBOARDING) || null != a.isPending && !a.isPending ? 2 : 1 : 0
			}

			function m(e, t) {
				var n;
				let r = (0, i.e7)([c.default], () => c.default.getUser(e), [e]),
					l = (0, i.e7)([o.ZP], () => o.ZP.getMember(t, e), [t, e]);
				if (null == r || null == l) return !1;
				let s = (0, E.yE)(null != (n = l.flags) ? n : 0, _.q.BYPASSES_VERIFICATION),
					a = (null == r ? void 0 : r.isPhoneVerified()) || (null == r ? void 0 : r.isStaff()),
					u = (null == l ? void 0 : l.joinedAt) != null;
				return r.verified || a || u || s
			}

			function f(e) {
				let t = (0, i.e7)([a.default], () => a.default.locale);
				return l.useMemo(() => new Date(d.default.extractTimestamp(e)).toLocaleDateString(t, A), [e, t])
			}

			function O(e) {
				let t = (0, i.e7)([a.default], () => a.default.locale);
				return l.useMemo(() => new Date(d.default.extractTimestamp(e)).toLocaleDateString(t, T), [e, t])
			}

			function N(e, t) {
				let n = (0, i.e7)([a.default], () => a.default.locale),
					r = (0, i.e7)([o.ZP], () => o.ZP.getMember(t, e), [t, e]),
					s = null == r ? void 0 : r.joinedAt;
				return l.useMemo(() => null == s ? "" : new Date(s).toLocaleDateString(n, A), [s, n])
			}
		},
		16829: function(e, t, n) {
			n.d(t, {
				ZP: () => M
			}), n(781311);
			var r = n(255367),
				l = n(73800),
				i = n(120356),
				s = n.n(i),
				a = n(442837),
				o = n(481060),
				u = n(749210),
				c = n(700582),
				E = n(884902),
				d = n(484459),
				_ = n(271383),
				A = n(246946),
				T = n(594174),
				I = n(785195),
				g = n(5192),
				m = n(893966),
				f = n(527379),
				O = n(327999),
				N = n(388032),
				h = n(615133);

			function R(e) {
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

			function p(e, t) {
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
			let S = l.memo(function() {
					return (0, r.jsx)(o.ua7, {
						text: N.intl.string(N.t["vu/MiY"]),
						children: e => (0, r.jsx)(o.Text, p(R({}, e), {
							variant: "text-sm/medium",
							color: "text-muted",
							className: h.unknownInvite,
							children: N.intl.string(N.t.yobFdn)
						}))
					})
				}),
				C = l.memo(function() {
					return (0, r.jsx)(o.ua7, {
						text: N.intl.string(N.t.OrCp9v),
						children: e => (0, r.jsx)(o.Text, p(R({}, e), {
							variant: "text-sm/medium",
							color: "text-muted",
							className: h.unknownInvite,
							children: N.intl.string(N.t["4upToa"])
						}))
					})
				}),
				b = {
					[O.gq.UNSPECIFIED]: {
						type: O.gq.UNSPECIFIED,
						getJoinTypeLabel: () => N.intl.string(N.t.DvMBkZ),
						icon: null,
						hasTooltip: !1
					},
					[O.gq.BOT]: {
						type: O.gq.BOT,
						getJoinTypeLabel: () => N.intl.string(N.t.HumZAg),
						icon: (0, r.jsx)(o.wGt, {
							size: "custom",
							color: "currentColor",
							className: h.robot,
							height: 12,
							width: 12
						}),
						hasTooltip: !0
					},
					[O.gq.INTEGRATION]: {
						type: O.gq.INTEGRATION,
						getJoinTypeLabel: () => N.intl.string(N.t.gmCUFx),
						icon: (0, r.jsx)(o.tYf, {
							size: "custom",
							color: "currentColor",
							height: 12,
							width: 12
						}),
						hasTooltip: !1
					},
					[O.gq.DISCOVERY]: {
						type: O.gq.DISCOVERY,
						getJoinTypeLabel: () => N.intl.string(N.t["Ql/e9f"]),
						icon: (0, r.jsx)(o.Jmo, {
							size: "custom",
							color: "currentColor",
							height: 12,
							width: 12
						}),
						hasTooltip: !1
					},
					[O.gq.HUB]: {
						type: O.gq.HUB,
						getJoinTypeLabel: () => N.intl.string(N.t.Op8B3N),
						icon: (0, r.jsx)(o.aVH, {
							size: "custom",
							color: "currentColor",
							height: 12,
							width: 12
						}),
						hasTooltip: !1
					},
					[O.gq.INVITE]: {
						type: O.gq.INVITE,
						getJoinTypeLabel: e => e,
						icon: (0, r.jsx)(o.xPt, {
							size: "custom",
							color: "currentColor",
							height: 12,
							width: 12
						}),
						hasTooltip: !0
					},
					[O.gq.VANITY_URL]: {
						type: O.gq.VANITY_URL,
						getJoinTypeLabel: e => e,
						icon: (0, r.jsx)(o.xPt, {
							size: "custom",
							color: "currentColor",
							height: 12,
							width: 12
						}),
						hasTooltip: !1
					},
					[O.gq.MANUAL_MEMBER_VERIFICATION]: {
						type: O.gq.MANUAL_MEMBER_VERIFICATION,
						getJoinTypeLabel: e => null != e ? N.intl.formatToPlainString(N.t["VHLp+v"], {
							code: e
						}) : N.intl.string(N.t.vdu7oa),
						icon: (0, r.jsx)(I.Z, {
							height: 12,
							width: 12
						}),
						hasTooltip: !1
					}
				};

			function D(e) {
				var t;
				let {
					guildId: n,
					inviterUser: i,
					joinSourceType: u,
					className: d,
					onClickInviter: A
				} = e, T = (0, a.e7)([_.ZP], () => null == i ? null : _.ZP.getMember(n, i.id), [i, n]), I = (0, E.X7)(null == T ? void 0 : T.guildId, null == T ? void 0 : T.userId, null == T ? void 0 : T.colorStrings), m = l.useCallback(e => {
					e.stopPropagation(), e.preventDefault(), null != i && (null == A || A(i))
				}, [i, A]);
				return null == i ? null : (0, r.jsxs)("div", {
					className: s()(h.inviterTooltipContainer, d),
					children: [(0, r.jsx)(o.Text, {
						variant: "text-xs/medium",
						children: u !== O.gq.BOT ? N.intl.string(N.t.azhY2t) : N.intl.string(N.t["2ByN2t"])
					}), (0, r.jsxs)(o.P3F, {
						className: s()(h.inviterUserContainer, null != A && h.clickable),
						onClick: m,
						children: [(0, r.jsx)(c.Z, {
							user: i,
							size: o.EFr.SIZE_16
						}), (0, r.jsx)(o.Text, {
							variant: "text-xs/medium",
							children: (0, r.jsx)(o.PUh, {
								name: g.ZP.getName(n, null, i),
								color: null != (t = null == T ? void 0 : T.colorString) ? t : void 0,
								roleColors: I
							})
						})]
					})]
				})
			}

			function v(e) {
				let {
					children: t,
					hasTooltip: n,
					guildId: l,
					inviterUser: i,
					joinSourceType: s
				} = e;
				return n && null != i ? (0, r.jsx)(o.ua7, {
					"aria-label": s !== O.gq.BOT ? N.intl.string(N.t.azhY2t) : N.intl.string(N.t["2ByN2t"]),
					allowOverflow: !0,
					text: (0, r.jsx)(D, {
						guildId: l,
						inviterUser: i,
						joinSourceType: s
					}),
					children: e => (0, r.jsx)(r.Fragment, {
						children: t(e)
					})
				}) : (0, r.jsx)(r.Fragment, {
					children: t({})
				})
			}

			function U(e) {
				let {
					type: t
				} = e, n = (0, O.Ph)(t);
				return null == n ? null : (0, r.jsx)("div", {
					className: h.integrationIcon,
					style: {
						width: 12,
						height: 12,
						backgroundImage: n
					}
				})
			}

			function L(e) {
				var {
					sourceInviteCode: t,
					joinSourceType: n,
					integrationType: i,
					showInviterAsFooter: a,
					guildId: u,
					inviterUser: c,
					onClickInviter: E
				} = e, d = function(e, t) {
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
				}(e, ["sourceInviteCode", "joinSourceType", "integrationType", "showInviterAsFooter", "guildId", "inviterUser", "onClickInviter"]);
				let _ = null != n ? b[n] : null,
					A = n === O.gq.INTEGRATION && null != i,
					T = l.useCallback(e => {
						switch (e.stopPropagation(), e.preventDefault(), !0) {
							case null == t && null == n:
							case null == n:
								return;
							case n === O.gq.INVITE && null != t:
								var r;
								(0, f.Dr)(u, {
									selectedSourceInviteCode: null != (r = null == t ? void 0 : t.trim()) ? r : void 0,
									selectedJoinSourceType: n
								});
								return;
							default:
								return void(0, f.Dr)(u, {
									selectedSourceInviteCode: null,
									selectedJoinSourceType: null != n ? n : void 0
								})
						}
					}, [u, n, t]);
				switch (!0) {
					case null == _:
					case null == n:
					case n === O.gq.UNSPECIFIED:
						return (0, r.jsx)(S, R({}, d));
					case null != i && A:
						return (0, r.jsxs)(o.P3F, p(R({
							className: h.inviteContainer
						}, d), {
							"aria-label": (0, O.MS)(i),
							role: "button",
							tabIndex: 0,
							onClick: T,
							children: [(0, r.jsx)(U, {
								type: i
							}), (0, r.jsx)(o.Text, {
								variant: "text-sm/medium",
								children: (0, O.MS)(i)
							})]
						}));
					case null != _:
						return (0, r.jsxs)("div", {
							className: s()(a && h.footerAlignment),
							children: [(0, r.jsxs)(o.P3F, p(R({
								className: h.inviteContainer
							}, d), {
								"aria-label": null == _ ? void 0 : _.getJoinTypeLabel(null != t ? t : void 0),
								role: "button",
								tabIndex: 0,
								onClick: T,
								children: [null == _ ? void 0 : _.icon, (0, r.jsx)(o.Text, {
									variant: "text-sm/medium",
									children: null == _ ? void 0 : _.getJoinTypeLabel(null != t ? t : void 0)
								})]
							})), a && (0, r.jsx)(D, {
								guildId: u,
								inviterUser: c,
								joinSourceType: n,
								className: h.inviterFooter,
								onClickInviter: E
							})]
						});
					default:
						return (0, r.jsx)(S, R({}, d))
				}
			}
			let M = l.memo(function(e) {
				var t, n;
				let {
					userId: i,
					guildId: s,
					showInviterAsFooter: o,
					onClickInviter: c
				} = e, E = (0, a.e7)([m.Z], () => m.Z.getEnhancedMember(s, i), [s, i]), _ = null != (t = null == E ? void 0 : E.inviterId) ? t : null, I = (0, a.e7)([T.default], () => T.default.getUser(_), [_]);
				l.useEffect(() => {
					null != _ && (u.Z.requestMembersById(s, [_]), (0, d.Z)(_, void 0, {
						guildId: s
					}))
				}, [s, _]);
				let g = (0, a.e7)([A.Z], () => A.Z.hideInstantInvites, []);
				if (null == E) return (0, r.jsx)(S, {});
				let {
					sourceInviteCode: f,
					joinSourceType: N,
					integrationType: h
				} = E, p = null != N ? b[N] : null, D = null != (n = null == p ? void 0 : p.hasTooltip) && n;
				return (N === O.gq.INVITE || N === O.gq.VANITY_URL || N === O.gq.MANUAL_MEMBER_VERIFICATION && null != f) && g ? (0, r.jsx)(C, {}) : (0, r.jsx)(v, {
					hasTooltip: D && !o,
					inviterUser: null != I ? I : null,
					guildId: s,
					joinSourceType: N,
					children: e => (0, r.jsx)(L, R({
						sourceInviteCode: f,
						joinSourceType: N,
						integrationType: h,
						showInviterAsFooter: o,
						inviterUser: null != I ? I : null,
						guildId: s,
						onClickInviter: c
					}, e))
				})
			})
		},
		472596: function(e, t, n) {
			n.d(t, {
				RE: () => d,
				RN: () => A,
				po: () => I,
				vN: () => _,
				xb: () => g,
				zq: () => T
			});
			var r, l = n(73800),
				i = n(399606),
				s = n(906732),
				a = n(892001),
				o = n(485386),
				u = n(430824),
				c = n(594174),
				E = n(91047);
			let d = (e, t) => {
				let {
					guildId: n,
					userId: r,
					colorRoleId: l
				} = e;
				(0, a.openUserProfileModal)({
					userId: r,
					guildId: n,
					sourceAnalyticsLocations: t,
					roleId: l
				})
			};

			function _(e, t, n, r) {
				let {
					analyticsLocations: i
				} = (0, s.ZP)();
				return l.useCallback(l => {
					if (null == e) return;
					let s = c.default.getUser(e.userId);
					null != s && (l.stopPropagation(), (0, E.nm)(l, {
						user: s,
						guildId: e.guildId,
						analyticsLocations: null != n ? [n] : i,
						onCloseContextMenu: r,
						isViewOnly: t
					}))
				}, [e, i, r, n, t])
			}

			function A(e, t, n) {
				let {
					analyticsLocations: r
				} = (0, s.ZP)();
				return l.useCallback(l => {
					if (null == e) return;
					let i = c.default.getUser(e.userId);
					null != i && (l.stopPropagation(), (0, E._j)(l, {
						user: i,
						guildId: e.guildId,
						analyticsLocations: null != t ? [t] : r,
						onCloseContextMenu: n,
						showTransferOwnershipItem: !0
					}))
				}, [e, n, r, t])
			}

			function T(e) {
				return (0, i.e7)([u.Z, o.Z], () => {
					var t;
					if (null == e) return null;
					let n = u.Z.getGuild(e.guildId);
					return null == n || null == e.highestRoleId ? null : null != (t = o.Z.getRole(n.id, e.highestRoleId)) ? t : null
				}, [e])
			}
			var I = ((r = {})[r.LOADING = 0] = "LOADING", r[r.SUCCESS_STILL_INDEXING = 1] = "SUCCESS_STILL_INDEXING", r[r.SUCCESS_EMPTY = 2] = "SUCCESS_EMPTY", r[r.SUCCESS_FULL = 3] = "SUCCESS_FULL", r);

			function g(e, t, n) {
				return t ? 0 : e ? 1 : n <= 0 ? 2 : 3
			}
		},
		285173: function(e, t, n) {
			n.d(t, {
				Z: () => o
			});
			var r = n(255367),
				l = n(73800),
				i = n(481060),
				s = n(412899),
				a = n(231338);

			function o(e) {
				var t;
				let {
					guildId: n,
					role: o,
					className: u,
					canRemove: c = !1,
					onRemove: E = a.dG
				} = e, d = (0, i.dQu)(i.TVs.unsafe_rawColors.PRIMARY_300).hex(), _ = null != (t = null == o ? void 0 : o.colorString) ? t : d, A = l.useMemo(() => ({
					backgroundColor: "".concat(_, "27")
				}), [_]);
				return null == o ? null : (0, r.jsx)(i.P3F, {
					children: (0, r.jsx)(s.UB, {
						className: u,
						style: A,
						role: o,
						guildId: n,
						canRemove: c,
						onRemove: E
					})
				})
			}
		},
		987707: function(e, t, n) {
			n.d(t, {
				Z: () => Z
			}), n(583741), n(539854), n(388685), n(290780);
			var r, l, i, s = n(392711),
				a = n.n(s),
				o = n(149765),
				u = n(442837),
				c = n(570140),
				E = n(387667),
				d = n(131704),
				_ = n(271383),
				A = n(485386),
				T = n(430824),
				I = n(981631);
			let g = [I.Plq.KICK_MEMBERS, I.Plq.BAN_MEMBERS, I.Plq.ADMINISTRATOR, I.Plq.MANAGE_CHANNELS, I.Plq.MANAGE_GUILD, I.Plq.MANAGE_MESSAGES, I.Plq.MANAGE_NICKNAMES, I.Plq.MANAGE_ROLES, I.Plq.MANAGE_WEBHOOKS, I.Plq.MANAGE_GUILD_EXPRESSIONS, I.Plq.MOVE_MEMBERS, I.Plq.MUTE_MEMBERS, I.Plq.DEAFEN_MEMBERS],
				m = null,
				f = [],
				O = [],
				N = [],
				h = [],
				R = [],
				p = [],
				S = [],
				C = [],
				b = !0,
				D = !1,
				v = !1,
				U = !0,
				L = !1,
				M = null,
				x = I.rsA.ALL,
				P = null,
				j = {},
				y = 0;

			function w(e) {
				let t = [],
					n = 0;
				return e.reverse().forEach(e => {
					var r, l, i;
					let s = [],
						o = null,
						u = null,
						c = null;
					if (null != e.reason && s.push(new E.ms(I.zUn.REASON, null, e.reason)), null != e.changes)
						for (let t of e.changes) {
							let e = new E.ms(t.key, t.old_value, t.new_value);
							s.push(e), e.key === I.zUn.NAME ? o = e : e.key === I.zUn.TYPE ? c = e : e.key === I.zUn.TITLE && (u = e)
						}
					if (e.action_type === I.rsA.MEMBER_PRUNE) {
						let t = null != e && null != e.options && null != e.options.delete_member_days ? e.options.delete_member_days : 1,
							n = new E.ms(I.zUn.PRUNE_DELETE_DAYS, null, t);
						s.push(n)
					}
					e.action_type === I.rsA.AUTO_MODERATION_BLOCK_MESSAGE && (null == (l = e.options) ? void 0 : l.auto_moderation_rule_name) != null && s.push(new E.ms(I.zUn.AUTO_MODERATION_TRIGGERED_RULE_NAME, null, e.options.auto_moderation_rule_name)), e.action_type === I.rsA.VOICE_CHANNEL_STATUS_CREATE && (null == (r = e.options) ? void 0 : r.status) != null && s.push(new E.ms(I.zUn.STATUS, null, e.options.status));
					let _ = new E.ZP({
							id: e.id,
							action: e.action_type,
							targetId: e.target_id,
							userId: e.user_id,
							changes: s,
							options: e.options
						}),
						A = t[0];
					if (function(e, t, n) {
							let r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 30,
								l = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 50;
							return null != e && e.action === t.action && e.targetId === t.targetId && e.userId === t.userId && a().isEqual(e.options, t.options) && t.timestampStart.diff(e.timestampStart, "minutes") < r && n < l && t.targetType !== I.KFR.INVITE && t.action !== I.rsA.MESSAGE_DELETE && t.action !== I.rsA.MESSAGE_BULK_DELETE && t.action !== I.rsA.MESSAGE_PIN && t.action !== I.rsA.MESSAGE_UNPIN && t.action !== I.rsA.MEMBER_MOVE && t.action !== I.rsA.MEMBER_DISCONNECT && t.action !== I.rsA.BOT_ADD && t.action !== I.rsA.APPLICATION_COMMAND_PERMISSION_UPDATE && t.action !== I.rsA.MEMBER_PRUNE
						}(A, _, n)) {
						t[0] = A.merge({
							changes: [...A.changes, ..._.changes],
							timestampEnd: _.timestampStart
						}), n++;
						return
					}
					if (_.actionType === I.vB8.DELETE && (null != o || null != u)) {
						let e = null != (i = null == o ? void 0 : o.oldValue) ? i : null == u ? void 0 : u.oldValue;
						(_.targetType === I.KFR.CHANNEL || _.targetType === I.KFR.CHANNEL_OVERWRITE) && null !== c && (0, d.r8)(c.oldValue) && (e = "#".concat(e)), null == j[_.targetType] ? j[_.targetType] = {
							[_.targetId]: e
						} : j[_.targetType][_.targetId] = e
					}
					n = 0, t.unshift(_)
				}), t
			}

			function G(e) {
				let {
					section: t
				} = e;
				if (t !== I.pNK.AUDIT_LOG) return !1;
				let n = _.ZP.getMembers(m),
					r = T.Z.getGuild(m),
					l = null != m ? A.Z.getRoles(m) : void 0;
				N = a()(n).filter(e => e.roles.some(t => {
					if (null != r) {
						if (e.userId === r.ownerId) return !0;
						let n = null == l ? void 0 : l[t];
						return null != n && g.some(e => o.e$(n.permissions, e))
					}
				})).map(e => e.userId).value()
			}
			class z extends(r = u.ZP.Store) {
				initialize() {
					this.waitFor(T.Z, A.Z, _.ZP)
				}
				get logs() {
					return f
				}
				get integrations() {
					return O
				}
				get webhooks() {
					return h
				}
				get guildScheduledEvents() {
					return R
				}
				get automodRules() {
					return p
				}
				get threads() {
					return S
				}
				get applicationCommands() {
					return C
				}
				get isInitialLoading() {
					return b
				}
				get isLoading() {
					return D
				}
				get isLoadingNextPage() {
					return v
				}
				get hasOlderLogs() {
					return U
				}
				get hasError() {
					return L
				}
				get userIds() {
					return N
				}
				get userIdFilter() {
					return M
				}
				get targetIdFilter() {
					return P
				}
				get actionFilter() {
					return x
				}
				get deletedTargets() {
					return j
				}
				get groupedFetchCount() {
					return y
				}
			}
			i = "GuildSettingsAuditLogStore", (l = "displayName") in z ? Object.defineProperty(z, l, {
				value: i,
				enumerable: !0,
				configurable: !0,
				writable: !0
			}) : z[l] = i;
			let Z = new z(c.Z, {
				AUDIT_LOG_FETCH_START: function() {
					D = !0
				},
				AUDIT_LOG_FETCH_SUCCESS: function(e) {
					var t;
					y = 0, b = !1, D = !1, U = !0, L = !1, f = w(e.logs), O = e.integrations, h = e.webhooks, R = e.guildScheduledEvents, p = null != (t = e.automodRules) ? t : [], S = e.threads, C = e.applicationCommands, e.logs.length < I.Rg9 && (U = !1)
				},
				AUDIT_LOG_FETCH_FAIL: function() {
					D = !1, L = !0, f = []
				},
				AUDIT_LOG_FETCH_NEXT_PAGE_START: function(e) {
					let {
						isGroupedFetch: t
					} = e;
					v = !0, t && y++
				},
				AUDIT_LOG_FETCH_NEXT_PAGE_SUCCESS: function(e) {
					let {
						logs: t,
						integrations: n,
						webhooks: r,
						guildScheduledEvents: l,
						automodRules: i,
						threads: s,
						applicationCommands: a
					} = e;
					if (v = !1, O = n, h = r, R = l, p = i, S = s, C = a, (0 === t.length || t.length < I.Rg9) && (U = !1), t.length > 0) {
						let e = w(t);
						f = [...f, ...e]
					}
				},
				AUDIT_LOG_FETCH_NEXT_PAGE_FAIL: function() {
					v = !1
				},
				AUDIT_LOG_FILTER_BY_ACTION: function(e) {
					let {
						action: t
					} = e;
					x = t
				},
				AUDIT_LOG_FILTER_BY_USER: function(e) {
					let {
						userId: t
					} = e;
					M = t
				},
				AUDIT_LOG_FILTER_BY_TARGET: function(e) {
					let {
						targetId: t
					} = e;
					P = t
				},
				GUILD_SETTINGS_SET_SECTION: G,
				GUILD_SETTINGS_INIT: function(e) {
					let {
						guildId: t,
						section: n
					} = e;
					return m = t, P = null, G({
						section: n
					})
				},
				GUILD_SETTINGS_CLOSE: function() {
					f = [], N = [], x = I.rsA.ALL, M = null, P = null, j = {}, y = 0, b = !0, O = [], h = [], R = [], p = [], S = []
				}
			})
		},
		909746: function(e, t, n) {
			n.d(t, {
				Bq: () => X,
				C0: () => ei,
				C2: () => $,
				EN: () => K,
				F1: () => ea,
				HE: () => H,
				HN: () => q,
				Iv: () => ec,
				J5: () => eI,
				JA: () => es,
				K: () => Q,
				ML: () => F,
				N$: () => J,
				N5: () => eg,
				QM: () => eT,
				V$: () => eE,
				_$: () => eN,
				cT: () => ef,
				em: () => em,
				hQ: () => eO,
				hx: () => W,
				lR: () => Y,
				lU: () => V,
				nm: () => e_,
				oD: () => k,
				pA: () => en,
				pY: () => B,
				pi: () => et,
				rK: () => el,
				uB: () => ee,
				vc: () => eu,
				vm: () => er,
				zT: () => eo
			}), n(415506), n(539854), n(49124);
			var r = n(654861),
				l = n.n(r),
				i = n(913527),
				s = n.n(i),
				a = n(536402),
				o = n(533800),
				u = n(149765),
				c = n(866442),
				E = n(379649),
				d = n(911969),
				_ = n(933557),
				A = n(710845),
				T = n(339085),
				I = n(236413),
				g = n(45966),
				m = n(563534),
				f = n(427679),
				O = n(926491),
				N = n(387667),
				h = n(592125),
				R = n(485386),
				p = n(699516),
				S = n(594174),
				C = n(55935),
				b = n(630388),
				D = n(971130),
				v = n(709054),
				U = n(987707),
				L = n(981631),
				M = n(176505),
				x = n(273504),
				P = n(765305),
				j = n(388032);

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
			let G = new A.Z("AuditLogUtils"),
				z = [E.J6.DAYS, E.J6.HOURS, E.J6.MINUTES, E.J6.SECONDS],
				Z = () => ({
					[L.zUn.REASON]: () => j.t["2IW3Cw"]
				}),
				B = () => y({
					[L.zUn.NAME]: () => j.t.CkDiND,
					[L.zUn.DESCRIPTION]: eD(j.t.RP3Ey8, j.t.QAVj1d),
					[L.zUn.ICON_HASH]: () => j.t.iLZ8Q0,
					[L.zUn.SPLASH_HASH]: () => j.t["4VV6dn"],
					[L.zUn.DISCOVERY_SPLASH_HASH]: () => j.t["2pds6u"],
					[L.zUn.BANNER_HASH]: eD(j.t.Cxq4zM, j.t["H7eE//"]),
					[L.zUn.OWNER_ID]: () => j.t["8ltsLS"],
					[L.zUn.REGION]: () => j.t.X9r5KS,
					[L.zUn.PREFERRED_LOCALE]: () => j.t.UnXuDQ,
					[L.zUn.AFK_CHANNEL_ID]: eD(j.t.ClBuAw, j.t["ms+xtL"]),
					[L.zUn.AFK_TIMEOUT]: () => j.t.q21fHR,
					[L.zUn.SYSTEM_CHANNEL_ID]: eD(j.t.H1VXaW, j.t.XhtmxM),
					[L.zUn.RULES_CHANNEL_ID]: eD(j.t.OI6MGx, j.t.lik3tL),
					[L.zUn.PUBLIC_UPDATES_CHANNEL_ID]: eD(j.t.YxBKra, j.t.Ehsnio),
					[L.zUn.MFA_LEVEL]: eL({
						[L.BpS.NONE]: j.t.voaCCQ,
						[L.BpS.ELEVATED]: j.t.pRNVw8
					}),
					[L.zUn.WIDGET_ENABLED]: eU(j.t.ADIty8, j.t.nf58VV),
					[L.zUn.WIDGET_CHANNEL_ID]: eD(j.t["6SBsDQ"], j.t.deQ5wM),
					[L.zUn.VERIFICATION_LEVEL]: eL({
						[L.sFg.NONE]: j.t.W27rsb,
						[L.sFg.LOW]: j.t["V8P+Pz"],
						[L.sFg.MEDIUM]: j.t.ERQFam,
						[L.sFg.HIGH]: j.t["83fN0t"],
						[L.sFg.VERY_HIGH]: j.t.PnkQJC
					}),
					[L.zUn.DEFAULT_MESSAGE_NOTIFICATIONS]: eL({
						[L.bL.ALL_MESSAGES]: j.t.LDi76O,
						[L.bL.ONLY_MENTIONS]: j.t["6K83bW"]
					}),
					[L.zUn.VANITY_URL_CODE]: eD(j.t.Zplsoq, j.t.u6cArq),
					[L.zUn.EXPLICIT_CONTENT_FILTER]: eL({
						[L.lxg.DISABLED]: j.t.fmOeLy,
						[L.lxg.MEMBERS_WITHOUT_ROLES]: j.t["4FghY2"],
						[L.lxg.ALL_MEMBERS]: j.t.olyrSk
					}),
					[L.zUn.PREMIUM_PROGRESS_BAR_ENABLED]: eU(j.t.rBT0sr, j.t["gc+te3"]),
					[L.zUn.AUTO_MODERATION_TRIGGERED_RULE_NAME]: () => j.t.YbouFB,
					[L.zUn.SYSTEM_CHANNEL_FLAG_JOIN_NOTIFICATIONS]: () => j.t.g3DMjI,
					[L.zUn.SYSTEM_CHANNEL_FLAG_PREMIUM_SUBSCRIPTIONS]: () => j.t["+fQAen"],
					[L.zUn.SYSTEM_CHANNEL_FLAG_REMINDER_NOTIFICATIONS]: () => j.t.E1fc4u,
					[L.zUn.SYSTEM_CHANNEL_FLAG_JOIN_NOTIFICATION_REPLIES]: () => j.t.XbwtSE
				}, Z()),
				F = () => ({
					[L.zUn.NAME]: eb(j.t.f8Rh0d, j.t.ebD4Qk),
					[L.zUn.POSITION]: eb(j.t.isS8tb, j.t.t5uBio),
					[L.zUn.TOPIC]: ev(j.t.esQcxs, j.t["m+veAg"], j.t["ws/1FB"]),
					[L.zUn.BITRATE]: eb(j.t.fw81am, j.t.MFNlgY),
					[L.zUn.RTC_REGION_OVERRIDE]: ev(j.t["6kajx8"], j.t.eGOlmZ, j.t["0JMZd3"]),
					[L.zUn.USER_LIMIT]: eb(j.t.wk5t7u, j.t.XgjCEh),
					[L.zUn.RATE_LIMIT_PER_USER]: eb(j.t["7lirhI"], j.t.j4CCJS),
					[L.zUn.PERMISSIONS_RESET]: () => j.t["+vSBFR"],
					[L.zUn.PERMISSIONS_GRANTED]: () => j.t.EKLJv7,
					[L.zUn.PERMISSIONS_DENIED]: () => j.t.U3rO5e,
					[L.zUn.REASON]: () => j.t["2IW3Cw"],
					[L.zUn.NSFW]: eU(j.t.H8Ri2d, j.t.WW6cJy),
					[L.zUn.TYPE]: eb(j.t.Vn5zn5, j.t.aq4uWF),
					[L.zUn.VIDEO_QUALITY_MODE]: eb(j.t.e68fAQ, j.t.djbES0),
					[L.zUn.DEFAULT_AUTO_ARCHIVE_DURATION]: eb(j.t.nYz2mp, j.t.oczvRE),
					[L.zUn.FLAGS]: () => j.t.ImCQkp,
					[L.zUn.AVAILABLE_TAG_ADD]: () => j.t.H86QQU,
					[L.zUn.AVAILABLE_TAG_EDIT]: () => j.t.YtUzlp,
					[L.zUn.AVAILABLE_TAG_DELETE]: () => j.t["8QOsen"],
					[L.zUn.LINKED_LOBBY]: eD(j.t["+/3TkJ"], j.t["5kDYS0"])
				}),
				V = () => y({
					[L.zUn.NICK]: ev(j.t.qXDsHh, j.t["m+qur6"], j.t.DvLvjI),
					[L.zUn.DEAF]: eU(j.t.mArLlZ, j.t.ddvVYG),
					[L.zUn.MUTE]: eU(j.t["bxs/lZ"], j.t.FjecQE),
					[L.zUn.ROLES_REMOVE]: () => j.t["+2SDWV"],
					[L.zUn.ROLES_ADD]: () => j.t["B3/3IC"],
					[L.zUn.PRUNE_DELETE_DAYS]: () => j.t["+Cvc+P"],
					[L.zUn.COMMUNICATION_DISABLED_UNTIL]: ev(j.t.LXTQr6, j.t.LXTQr6, j.t.ULSdnJ),
					[L.zUn.BYPASSES_VERIFICATION]: eU(j.t.NBPBur, j.t.zATosr),
					[L.zUn.AUTO_MODERATION_TRIGGERED_RULE_NAME]: () => j.t.YbouFB
				}, Z()),
				H = () => y({
					[L.zUn.NAME]: eb(j.t.QBmlaG, j.t.Lfs4r6),
					[L.zUn.DESCRIPTION]: eb(j.t.XeYKWF, j.t.PSfeIi),
					[L.zUn.PERMISSIONS_GRANTED]: () => j.t["9i/DvL"],
					[L.zUn.PERMISSIONS_DENIED]: () => j.t.pa1ZVl,
					[L.zUn.COLOR]: eM({
						"#000000": j.t.TK6E1N
					}, j.t["2FQFi4"]),
					[L.zUn.COLORS]: e => null == e.newValue.secondary_color ? j.t.U44ttr : j.t.WnSwLy,
					[L.zUn.HOIST]: eU(j.t.gWfe29, j.t["+tb8kJ"]),
					[L.zUn.MENTIONABLE]: eU(j.t.LL8VFB, j.t.Z7xzmJ),
					[L.zUn.ICON_HASH]: () => j.t["iEE79/"],
					[L.zUn.UNICODE_EMOJI]: () => j.t.KiLMMz
				}, Z()),
				k = () => w(y({}, Z()), {
					[L.zUn.TITLE]: eb(j.t.sNpuy8, j.t["3Ukc/v"]),
					[L.zUn.DESCRIPTION]: eb(j.t.PP1q09, j.t.z7pYLi),
					[L.zUn.OPTIONS]: () => j.t["3G5C9/"],
					[L.zUn.SINGLE_SELECT]: eU(j.t.v4WnR0, j.t["6Qg3uL"]),
					[L.zUn.REQUIRED]: eU(j.t["0MPAMz"], j.t.pwsXio)
				}),
				K = () => w(y({}, Z()), {
					[L.zUn.DEFAULT_CHANNEL_IDS]: () => j.t["8M+D2t"],
					[L.zUn.ENABLE_DEFAULT_CHANNELS]: eU(j.t["EYd/lp"], j.t["36OZeX"]),
					[L.zUn.ENABLE_ONBOARDING_PROMPTS]: eU(j.t.V3u8PT, j.t.r66lc3),
					[L.zUn.ENABLED]: eU(j.t.SODVIi, j.t.u8HY5e)
				}),
				W = () => w(y({}, Z()), {
					[L.zUn.WELCOME_MESSAGE]: () => j.t.dKQ1xc,
					[L.zUn.NEW_MEMBER_ACTIONS]: () => j.t.jDUInp,
					[L.zUn.RESOURCE_CHANNELS]: () => j.t.SIX0mp
				}),
				q = () => y({
					[L.zUn.CODE]: () => j.t.rrRHgY,
					[L.zUn.CHANNEL_ID]: () => j.t.Q1vd5u,
					[L.zUn.MAX_USES]: eM({
						0: j.t.Yx8LNj
					}, j.t["3ygnwc"]),
					[L.zUn.MAX_AGE]: eM({
						[j.intl.string(j.t.PqEzn5)]: j.t.uWrLv7
					}, j.t["Q+5kcH"]),
					[L.zUn.TEMPORARY]: eU(j.t.MWp6Hx, j.t.omiqTE),
					[L.zUn.FLAGS]: eL({
						[o.$.IS_GUEST_INVITE]: j.t.XYZMbG
					})
				}, Z()),
				Y = () => ({
					[L.zUn.CHANNEL_ID]: eb(j.t.jhPpra, j.t.ar4qYG),
					[L.zUn.NAME]: eb(j.t.ZVGrzc, j.t.tywdZW),
					[L.zUn.AVATAR_HASH]: () => j.t.KB52Ul,
					[L.zUn.REASON]: () => j.t["2IW3Cw"]
				}),
				J = () => y({
					[L.zUn.NAME]: eb(j.t.ahU1o6, j.t["wxs+vb"])
				}, Z()),
				X = () => y({
					[L.zUn.NAME]: eb(j.t.cdl0Ym, j.t.o3W2l5),
					[L.zUn.TAGS]: eb(j.t["zwL+S0"], j.t.VYfKAw),
					[L.zUn.DESCRIPTION]: eb(j.t.XeYKWF, j.t.PSfeIi)
				}, Z()),
				Q = () => y({
					[L.zUn.ENABLE_EMOTICONS]: eU(j.t["FI0m5+"], j.t.olpKCw),
					[L.zUn.EXPIRE_BEHAVIOR]: eL({
						0: j.t["1Bb1+v"],
						1: j.t.vjlW6u
					}),
					[L.zUn.EXPIRE_GRACE_PERIOD]: () => j.t.iovXMT
				}, Z()),
				$ = () => y({
					[L.zUn.TOPIC]: eb(j.t["m+veAg"], j.t.esQcxs),
					[L.zUn.PRIVACY_LEVEL]: eL({
						[P.j8.GUILD_ONLY]: j.t["EC+CDg"],
						[P.j8.PUBLIC]: j.t["pK/WGx"]
					})
				}, Z()),
				ee = () => y({
					[L.zUn.NAME]: () => j.t["21EXHR"],
					[L.zUn.DESCRIPTION]: () => j.t.Vm1of3,
					[L.zUn.PRIVACY_LEVEL]: eL({
						[P.j8.GUILD_ONLY]: j.t["EC+CDg"],
						[P.j8.PUBLIC]: j.t["pK/WGx"]
					}),
					[L.zUn.STATUS]: eL({
						[P.p1.SCHEDULED]: j.t.hXKDgo,
						[P.p1.ACTIVE]: j.t.lRX1n5,
						[P.p1.COMPLETED]: j.t["/eFIho"],
						[P.p1.CANCELED]: j.t.NWIYho
					}),
					[L.zUn.ENTITY_TYPE]: eL({
						[P.WX.NONE]: j.t["6sO3Sk"],
						[P.WX.STAGE_INSTANCE]: j.t["Wo+s19"],
						[P.WX.VOICE]: j.t.XCVaIC,
						[P.WX.EXTERNAL]: j.t.IvhAj4
					}),
					[L.zUn.CHANNEL_ID]: eD(j.t.yJBIcX, j.t["+PqSsr"]),
					[L.zUn.LOCATION]: eD(j.t.GaMBHx, j.t.PsICk5),
					[L.zUn.IMAGE_HASH]: eD(j.t.S3vcRE, j.t.KQu47O)
				}, Z()),
				et = () => y({
					[L.zUn.SCHEDULED_START_TIME]: eD(j.t.zMIYVl, j.t.fzF8GR),
					[L.zUn.SCHEDULED_END_TIME]: eD(j.t.vONSQE, j.t.IlIti4),
					[L.zUn.IS_CANCELED]: e => {
						if (null != e.oldValue || !0 === e.newValue) {
							if (!e.oldValue && e.newValue) return j.t["7RkicX"];
							else if (e.oldValue && !e.newValue) return j.t.dRNTWV
						}
					}
				}, Z()),
				en = () => y({
					[L.zUn.NAME]: eb(j.t.tUKRzc, j.t.kPCHOD),
					[L.zUn.ARCHIVED]: eU(j.t.jDi9FB, j.t.F6dvbW),
					[L.zUn.LOCKED]: eU(j.t.JSy1QU, j.t.C7Jgo6),
					[L.zUn.INVITABLE]: eU(j.t.dxNUs7, j.t.biJvYG),
					[L.zUn.AUTO_ARCHIVE_DURATION]: eb(j.t.LuaG39, j.t["18d9qq"]),
					[L.zUn.RATE_LIMIT_PER_USER]: eb(j.t["7lirhI"], j.t.j4CCJS),
					[L.zUn.FLAGS]: () => j.t.sSAQtr
				}, Z()),
				er = e => {
					let t = y({}, Z());
					return null == e || e.forEach(e => {
						e.newValue ? e.newValue.permission ? t[e.key] = () => j.t["JH+89P"] : t[e.key] = () => j.t.HUrFDg : t[e.key] = () => j.t.vynxnZ
					}), t
				},
				el = () => y({
					[L.zUn.NAME]: () => j.t.XwxAJS,
					[L.zUn.AUTO_MODERATION_TRIGGER_TYPE]: () => j.t.fx0pys,
					[L.zUn.AUTO_MODERATION_EVENT_TYPE]: () => j.t["46Y+Ly"],
					[L.zUn.AUTO_MODERATION_ACTIONS]: () => j.t["8efxfn"],
					[L.zUn.AUTO_MODERATION_ENABLED]: e => {
						var t;
						return !0 === (null != (t = e.newValue) ? t : e.oldValue) ? j.t.fCmxCw : j.t.Wrg9Ji
					},
					[L.zUn.AUTO_MODERATION_EXEMPT_ROLES]: () => j.t.TRb7Nz,
					[L.zUn.AUTO_MODERATION_EXEMPT_CHANNELS]: () => j.t.mzitLC,
					[L.zUn.AUTO_MODERATION_TRIGGER_METADATA]: () => j.t["h/lM6+"],
					[L.zUn.AUTO_MODERATION_ADD_KEYWORDS]: () => j.t["9V2yaG"],
					[L.zUn.AUTO_MODERATION_REMOVE_KEYWORDS]: () => j.t["4Qe9n5"],
					[L.zUn.AUTO_MODERATION_ADD_REGEX_PATTERNS]: () => j.t.GyZtxs,
					[L.zUn.AUTO_MODERATION_REMOVE_REGEX_PATTERNS]: () => j.t.OQDadX,
					[L.zUn.AUTO_MODERATION_ADD_ALLOW_LIST]: () => j.t["FvvR+P"],
					[L.zUn.AUTO_MODERATION_REMOVE_ALLOW_LIST]: () => j.t.p5nSv7
				}, Z()),
				ei = () => y({
					[L.zUn.NAME]: eb(j.t.VOtRSE, j.t.OK7B8P),
					[L.zUn.VOLUME]: eb(j.t.igrDBw, j.t.L5lDFB),
					[L.zUn.EMOJI_NAME]: ev(j.t.IIanaW, j.t.z4w4U1, j.t.V8Tfyc),
					[L.zUn.EMOJI_ID]: ev(j.t.ainxMD, j.t["2NPsYm"], j.t["8crtnp"])
				}, Z()),
				es = () => y({
					[L.zUn.VERIFICATION_ENABLED]: e => !0 === e.newValue ? j.t.fnkzDQ : j.t.WYT6kZ,
					[L.zUn.MANUAL_APPROVAL_ENABLED]: e => !0 === e.newValue ? j.t.jzSvVV : j.t.WxyOtr
				}, Z()),
				ea = () => y({
					[L.zUn.STATUS]: () => j.t.HyCSnJ
				}, Z()),
				eo = () => ({
					[L.zUn.DESCRIPTION]: () => j.t.nsUZKS,
					[L.zUn.BRAND_COLOR_PRIMARY]: () => j.t.qe9mgI,
					[L.zUn.CUSTOM_BANNER_HASH]: () => j.t["04b5KC"],
					[L.zUn.TRAITS]: () => j.t.dEy9WF,
					[L.zUn.GAME_APPLICATION_IDS]: () => j.t["8BOT39"],
					[L.zUn.VISIBILITY]: () => j.t.bCl1Eh,
					[L.zUn.SERVER_TAG]: eD(j.t.ix1dnZ, j.t["4LKpKS"])
				}),
				eu = {
					[L.KFR.CHANNEL]: {
						[L.zUn.ID]: !0,
						[L.zUn.PERMISSION_OVERWRITES]: !0
					},
					[L.KFR.CHANNEL_OVERWRITE]: {
						[L.zUn.TYPE]: !0,
						[L.zUn.ID]: !0,
						[L.zUn.PERMISSION_OVERWRITES]: !0
					},
					[L.KFR.INVITE]: {
						[L.zUn.INVITER_ID]: !0,
						[L.zUn.USES]: !0
					},
					[L.KFR.WEBHOOK]: {
						[L.zUn.TYPE]: !0,
						[L.zUn.APPLICATION_ID]: !0
					},
					[L.KFR.INTEGRATION]: {
						[L.zUn.TYPE]: !0
					},
					[L.KFR.THREAD]: {
						[L.zUn.ID]: !0,
						[L.zUn.TYPE]: !0
					},
					[L.KFR.STICKER]: {
						[L.zUn.ID]: !0,
						[L.zUn.TYPE]: !0,
						[L.zUn.ASSET]: !0,
						[L.zUn.FORMAT_TYPE]: !0,
						[L.zUn.AVAILABLE]: !0,
						[L.zUn.GUILD_ID]: !0
					},
					[L.KFR.GUILD_HOME]: {
						[L.zUn.ENTITY_TYPE]: !0
					},
					[L.KFR.GUILD_ONBOARDING]: {
						[L.zUn.PROMPTS]: !0
					},
					[L.KFR.GUILD_SOUNDBOARD]: {
						[L.zUn.ID]: !0,
						[L.zUn.SOUND_ID]: !0
					}
				},
				ec = () => [{
					value: L.rsA.ALL,
					label: j.intl.string(j.t.QxEVcn),
					valueLabel: j.intl.string(j.t.an9Ry8)
				}, {
					value: L.rsA.GUILD_UPDATE,
					label: j.intl.string(j.t["5INZa2"])
				}, {
					value: L.rsA.CHANNEL_CREATE,
					label: j.intl.string(j.t["2uh4vL"])
				}, {
					value: L.rsA.CHANNEL_UPDATE,
					label: j.intl.string(j.t.mGsBLS)
				}, {
					value: L.rsA.CHANNEL_DELETE,
					label: j.intl.string(j.t.hCHzAg)
				}, {
					value: L.rsA.CHANNEL_OVERWRITE_CREATE,
					label: j.intl.string(j.t["8TnAMD"])
				}, {
					value: L.rsA.CHANNEL_OVERWRITE_UPDATE,
					label: j.intl.string(j.t.Jqx0Bg)
				}, {
					value: L.rsA.CHANNEL_OVERWRITE_DELETE,
					label: j.intl.string(j.t.gBXOr6)
				}, {
					value: L.rsA.MEMBER_KICK,
					label: j.intl.string(j.t["Q1/hNz"])
				}, {
					value: L.rsA.MEMBER_PRUNE,
					label: j.intl.string(j.t.tOTTjY)
				}, {
					value: L.rsA.MEMBER_BAN_ADD,
					label: j.intl.string(j.t["NfPn+f"])
				}, {
					value: L.rsA.MEMBER_BAN_REMOVE,
					label: j.intl.string(j.t.XCsGfH)
				}, {
					value: L.rsA.MEMBER_UPDATE,
					label: j.intl.string(j.t["F/jmND"])
				}, {
					value: L.rsA.MEMBER_ROLE_UPDATE,
					label: j.intl.string(j.t.zAveSE)
				}, {
					value: L.rsA.MEMBER_MOVE,
					label: j.intl.string(j.t.QshteX)
				}, {
					value: L.rsA.MEMBER_DISCONNECT,
					label: j.intl.string(j.t.Z45os7)
				}, {
					value: L.rsA.BOT_ADD,
					label: j.intl.string(j.t.vuH24e)
				}, {
					value: L.rsA.THREAD_CREATE,
					label: j.intl.string(j.t["+zl0DA"])
				}, {
					value: L.rsA.THREAD_UPDATE,
					label: j.intl.string(j.t.rbIry8)
				}, {
					value: L.rsA.THREAD_DELETE,
					label: j.intl.string(j.t.hFjNEB)
				}, {
					value: L.rsA.ROLE_CREATE,
					label: j.intl.string(j.t.AbxKtr)
				}, {
					value: L.rsA.ROLE_UPDATE,
					label: j.intl.string(j.t.t3Z6sb)
				}, {
					value: L.rsA.ROLE_DELETE,
					label: j.intl.string(j.t.YsFpa2)
				}, {
					value: L.rsA.ONBOARDING_PROMPT_CREATE,
					label: j.intl.string(j.t.ZV9tqa)
				}, {
					value: L.rsA.ONBOARDING_PROMPT_UPDATE,
					label: j.intl.string(j.t.PcOdvb)
				}, {
					value: L.rsA.ONBOARDING_PROMPT_DELETE,
					label: j.intl.string(j.t["+r33NT"])
				}, {
					value: L.rsA.ONBOARDING_CREATE,
					label: j.intl.string(j.t.uDADdX)
				}, {
					value: L.rsA.ONBOARDING_UPDATE,
					label: j.intl.string(j.t.J1H1ws)
				}, {
					value: L.rsA.HOME_SETTINGS_CREATE,
					label: j.intl.string(j.t.Di4cvL)
				}, {
					value: L.rsA.HOME_SETTINGS_UPDATE,
					label: j.intl.string(j.t.tzyrJC)
				}, {
					value: L.rsA.INVITE_CREATE,
					label: j.intl.string(j.t["0BNJdX"])
				}, {
					value: L.rsA.INVITE_UPDATE,
					label: j.intl.string(j.t["o++obW"])
				}, {
					value: L.rsA.INVITE_DELETE,
					label: j.intl.string(j.t.iP40Aw)
				}, {
					value: L.rsA.WEBHOOK_CREATE,
					label: j.intl.string(j.t["tBF4+f"])
				}, {
					value: L.rsA.WEBHOOK_UPDATE,
					label: j.intl.string(j.t.eV3McH)
				}, {
					value: L.rsA.WEBHOOK_DELETE,
					label: j.intl.string(j.t.AAL3Ky)
				}, {
					value: L.rsA.EMOJI_CREATE,
					label: j.intl.string(j.t.RuWm0d)
				}, {
					value: L.rsA.EMOJI_UPDATE,
					label: j.intl.string(j.t.WzdUY2)
				}, {
					value: L.rsA.EMOJI_DELETE,
					label: j.intl.string(j.t.c3dK2N)
				}, {
					value: L.rsA.MESSAGE_DELETE,
					label: j.intl.string(j.t.daTfXl)
				}, {
					value: L.rsA.MESSAGE_BULK_DELETE,
					label: j.intl.string(j.t.nrBxen)
				}, {
					value: L.rsA.MESSAGE_PIN,
					label: j.intl.string(j.t.MUldyM)
				}, {
					value: L.rsA.MESSAGE_UNPIN,
					label: j.intl.string(j.t.n4zKhI)
				}, {
					value: L.rsA.INTEGRATION_CREATE,
					label: j.intl.string(j.t["deNm8/"])
				}, {
					value: L.rsA.INTEGRATION_UPDATE,
					label: j.intl.string(j.t.HT7Sfn)
				}, {
					value: L.rsA.INTEGRATION_DELETE,
					label: j.intl.string(j.t["+kJ09v"])
				}, {
					value: L.rsA.STICKER_CREATE,
					label: j.intl.string(j.t["3DzNjY"])
				}, {
					value: L.rsA.STICKER_UPDATE,
					label: j.intl.string(j.t.tdhW5e)
				}, {
					value: L.rsA.STICKER_DELETE,
					label: j.intl.string(j.t["+ZhGOj"])
				}, {
					value: L.rsA.STAGE_INSTANCE_CREATE,
					label: j.intl.string(j.t.sPbjAw)
				}, {
					value: L.rsA.STAGE_INSTANCE_UPDATE,
					label: j.intl.string(j.t.cW9LfH)
				}, {
					value: L.rsA.STAGE_INSTANCE_DELETE,
					label: j.intl.string(j.t["U1r+yM"])
				}, {
					value: L.rsA.GUILD_SCHEDULED_EVENT_CREATE,
					label: j.intl.string(j.t.H81Zy8)
				}, {
					value: L.rsA.GUILD_SCHEDULED_EVENT_UPDATE,
					label: j.intl.string(j.t.FM69l5)
				}, {
					value: L.rsA.GUILD_SCHEDULED_EVENT_DELETE,
					label: j.intl.string(j.t.Rq28Bg)
				}, {
					value: L.rsA.APPLICATION_COMMAND_PERMISSION_UPDATE,
					label: j.intl.string(j.t.iPdFOj)
				}, {
					value: L.rsA.AUTO_MODERATION_BLOCK_MESSAGE,
					label: j.intl.string(j.t.gNq5z8)
				}, {
					value: L.rsA.AUTO_MODERATION_RULE_CREATE,
					label: j.intl.string(j.t.f72Zqa)
				}, {
					value: L.rsA.AUTO_MODERATION_RULE_UPDATE,
					label: j.intl.string(j.t.XeqIio)
				}, {
					value: L.rsA.AUTO_MODERATION_RULE_DELETE,
					label: j.intl.string(j.t.syAApa)
				}, {
					value: L.rsA.GUILD_HOME_FEATURE_ITEM,
					label: j.intl.string(j.t.lhG5KC)
				}, {
					value: L.rsA.GUILD_HOME_REMOVE_ITEM,
					label: j.intl.string(j.t.lRPRwc)
				}, {
					value: L.rsA.SOUNDBOARD_SOUND_CREATE,
					label: j.intl.string(j.t.yoRi5u)
				}, {
					value: L.rsA.SOUNDBOARD_SOUND_UPDATE,
					label: j.intl.string(j.t.uKlG0d)
				}, {
					value: L.rsA.SOUNDBOARD_SOUND_DELETE,
					label: j.intl.string(j.t.gq0iCQ)
				}, {
					value: L.rsA.VOICE_CHANNEL_STATUS_CREATE,
					label: j.intl.string(j.t.rGr0YG)
				}, {
					value: L.rsA.VOICE_CHANNEL_STATUS_DELETE,
					label: j.intl.string(j.t.V9PEQ0)
				}];

			function eE(e, t) {
				return null != t.changes ? t.changes.find(t => t.key === e) : null
			}

			function ed(e, t) {
				return null != t.changes ? t.changes.filter(t => t.key === e) : []
			}

			function e_(e) {
				var t;
				let n = ec().find(t => t.value === e.action);
				return null != eE(L.zUn.COMMUNICATION_DISABLED_UNTIL, e) ? j.intl.string(j.t.z3wbj4) : null != (t = null == n ? void 0 : n.label) ? t : null
			}
			let eA = {
				[E.J6.SECONDS]: e => j.intl.formatToPlainString(j.t.geSp4O, {
					seconds: e
				}),
				[E.J6.MINUTES]: e => j.intl.formatToPlainString(j.t.iXLF9f, {
					minutes: e
				}),
				[E.J6.HOURS]: e => j.intl.formatToPlainString(j.t.xCjYxM, {
					hours: e
				}),
				[E.J6.DAYS]: e => j.intl.formatToPlainString(j.t.k2UNz8, {
					days: e
				})
			};

			function eT(e) {
				let t = eE(L.zUn.COMMUNICATION_DISABLED_UNTIL, e),
					n = ed(L.zUn.ROLES_ADD, e).length > 0,
					r = ed(L.zUn.ROLES_REMOVE, e).length > 0;
				if (null != t) {
					if ((null == t ? void 0 : t.newValue) != null) {
						let n = new Date(null == t ? void 0 : t.newValue).getTime() - v.default.extractTimestamp(e.id),
							r = Math.round(n / 1e3 / 60),
							l = (0, E.CI)(r, z);
						if (null == l.unit || null == l.time) return null;
						if (l.unit in eA) {
							let e = l.unit,
								t = l.unit === E.J6.SECONDS ? Math.round(n / 1e3) : l.time;
							return eA[e](t)
						}
					} else if ((null == t ? void 0 : t.oldValue) != null) return j.intl.string(j.t.MA1ltr)
				} else if (n && r) return j.intl.string(j.t.RdMMe3);
				else if (n) return j.intl.string(j.t["4GQqs7"]);
				else if (r) return j.intl.string(j.t["8mQ6x8"]);
				return null
			}

			function eI(e) {
				let t = ed(L.zUn.ROLES_ADD, e),
					n = ed(L.zUn.ROLES_REMOVE, e),
					r = null == t ? void 0 : t.map(e => {
						let {
							newValue: t
						} = e;
						return null == t ? void 0 : t.map(e => {
							let {
								name: t
							} = e;
							return t
						}).join(", ")
					}).join(", "),
					l = null == n ? void 0 : n.map(e => {
						let {
							newValue: t
						} = e;
						return null == t ? void 0 : t.map(e => {
							let {
								name: t
							} = e;
							return t
						}).join(", ")
					}).join(", ");
				return t.length > 0 && n.length > 0 ? j.intl.formatToPlainString(j.t.tZw1ER, {
					roleNamesAdded: r,
					roleNamesRemoved: l
				}) : t.length > 0 ? j.intl.formatToPlainString(j.t["/mTqt7"], {
					roleNames: r
				}) : n.length > 0 ? j.intl.formatToPlainString(j.t.Wk4pAA, {
					roleNames: l
				}) : null
			}

			function eg(e) {
				switch (e.action) {
					case L.rsA.GUILD_UPDATE:
						return j.t.LjZO39;
					case L.rsA.CHANNEL_CREATE:
						let t = null != e.changes ? e.changes.find(e => e.key === L.zUn.TYPE) : null;
						if (null == t) throw Error("[AuditLog] Could not find type change for channel create");
						switch (t.newValue) {
							case L.d4z.GUILD_STAGE_VOICE:
								return j.t["OKp4+v"];
							case L.d4z.GUILD_VOICE:
								return j.t.NPOy4O;
							case L.d4z.GUILD_CATEGORY:
								return j.t.T3KIj4;
							default:
								return j.t.wrYNGx
						}
					case L.rsA.CHANNEL_UPDATE:
						return j.t.nTYk6O;
					case L.rsA.CHANNEL_DELETE:
						return j.t.ynfvkp;
					case L.rsA.CHANNEL_OVERWRITE_CREATE:
						return j.t.l5Cu1d;
					case L.rsA.CHANNEL_OVERWRITE_UPDATE:
						return j.t.uhtbNT;
					case L.rsA.CHANNEL_OVERWRITE_DELETE:
						return j.t["HASt//"];
					case L.rsA.MEMBER_KICK:
						return j.t.B5hDZW;
					case L.rsA.MEMBER_PRUNE:
						return j.t.qKOZTE;
					case L.rsA.MEMBER_BAN_ADD:
						return j.t.XklUm5;
					case L.rsA.MEMBER_BAN_REMOVE:
						return j.t.o3Y6HB;
					case L.rsA.MEMBER_UPDATE:
						return j.t.pznhLC;
					case L.rsA.MEMBER_ROLE_UPDATE:
						return j.t.VngfiY;
					case L.rsA.MEMBER_MOVE:
						return j.t.Yt6NkZ;
					case L.rsA.MEMBER_DISCONNECT:
						return j.t.K4eCZ2;
					case L.rsA.BOT_ADD:
						return j.t.fWvX0N;
					case L.rsA.ROLE_CREATE:
						return j.t.UTLTx8;
					case L.rsA.ROLE_UPDATE:
						return j.t.NRbN19;
					case L.rsA.ROLE_DELETE:
						return j.t["4s63tb"];
					case L.rsA.INVITE_CREATE:
						return j.t.YHOXW1;
					case L.rsA.INVITE_UPDATE:
						return j.t.ja3kGR;
					case L.rsA.INVITE_DELETE:
						return j.t["3n/iWl"];
					case L.rsA.WEBHOOK_CREATE:
						return j.t.MhYhio;
					case L.rsA.WEBHOOK_UPDATE:
						return j.t["6GTlWF"];
					case L.rsA.WEBHOOK_DELETE:
						return j.t.in0VjY;
					case L.rsA.EMOJI_CREATE:
						return j.t["7vekRE"];
					case L.rsA.EMOJI_UPDATE:
						return j.t.IsCKfn;
					case L.rsA.EMOJI_DELETE:
						return j.t.JnUaVF;
					case L.rsA.STICKER_CREATE:
						return j.t.DRZifn;
					case L.rsA.STICKER_UPDATE:
						return j.t.bhujGR;
					case L.rsA.STICKER_DELETE:
						return j.t.rGEP9f;
					case L.rsA.MESSAGE_DELETE:
						return j.t["HPkD+P"];
					case L.rsA.MESSAGE_BULK_DELETE:
						return j.t["3RIvLC"];
					case L.rsA.MESSAGE_PIN:
						return j.t.Yna7Ex;
					case L.rsA.MESSAGE_UNPIN:
						return j.t.NCxXUV;
					case L.rsA.INTEGRATION_CREATE:
						return j.t.HYvCb2;
					case L.rsA.INTEGRATION_UPDATE:
						return j.t.ibCCOT;
					case L.rsA.INTEGRATION_DELETE:
						return j.t["8zScWV"];
					case L.rsA.STAGE_INSTANCE_CREATE:
						return j.t["n7x/DA"];
					case L.rsA.STAGE_INSTANCE_UPDATE:
						return j.t["0hQYU1"];
					case L.rsA.STAGE_INSTANCE_DELETE:
						if (null != e.userId) return j.t["Oi/in5"];
						return j.t["7ZIFm5"];
					case L.rsA.GUILD_SCHEDULED_EVENT_CREATE:
						return j.t.S7k52t;
					case L.rsA.GUILD_SCHEDULED_EVENT_UPDATE:
						return j.t.ebTK19;
					case L.rsA.GUILD_SCHEDULED_EVENT_DELETE:
						return j.t["/ARPKS"];
					case L.rsA.GUILD_SCHEDULED_EVENT_EXCEPTION_CREATE:
					case L.rsA.GUILD_SCHEDULED_EVENT_EXCEPTION_UPDATE:
						return j.t["8qCI39"];
					case L.rsA.GUILD_SCHEDULED_EVENT_EXCEPTION_DELETE:
						return j.t.zYb2dX;
					case L.rsA.THREAD_CREATE:
						let n = null != e.changes ? e.changes.find(e => e.key === L.zUn.TYPE) : null;
						if (null == n) throw Error("[AuditLog] Could not find type change for thread create");
						switch (n.newValue) {
							case L.d4z.PRIVATE_THREAD:
								return j.t["Br0y5+"];
							case L.d4z.ANNOUNCEMENT_THREAD:
								return j.t["6uaMmJ"];
							default:
								return j.t["2cxQ7O"]
						}
					case L.rsA.THREAD_UPDATE:
						return j.t.PSsy4u;
					case L.rsA.THREAD_DELETE:
						return j.t.s3Khn5;
					case L.rsA.APPLICATION_COMMAND_PERMISSION_UPDATE:
						return j.t.uzCqBg;
					case L.rsA.AUTO_MODERATION_BLOCK_MESSAGE:
						return j.t.NqWv2N;
					case L.rsA.AUTO_MODERATION_FLAG_TO_CHANNEL:
						var r;
						if ((null == (r = e.options) ? void 0 : r.auto_moderation_rule_trigger_type) === x.fX.USER_PROFILE.toString()) return j.t.YQsjen;
						return j.t.SD0PwM;
					case L.rsA.AUTO_MODERATION_USER_COMMUNICATION_DISABLED:
						return j.t.Vk4Twc;
					case L.rsA.AUTO_MODERATION_QUARANTINE_USER:
						return j.t["/W5u5u"];
					case L.rsA.CREATOR_MONETIZATION_REQUEST_CREATED:
						return j.t.ONvWys;
					case L.rsA.CREATOR_MONETIZATION_TERMS_ACCEPTED:
						return j.t.ryGLk5;
					case L.rsA.AUTO_MODERATION_RULE_CREATE:
						return j.t.NKljj4;
					case L.rsA.AUTO_MODERATION_RULE_UPDATE:
						return j.t["3wEA9v"];
					case L.rsA.AUTO_MODERATION_RULE_DELETE:
						return j.t.umua3t;
					case L.rsA.ONBOARDING_PROMPT_CREATE:
						return j.t["/8A1g4"];
					case L.rsA.ONBOARDING_PROMPT_UPDATE:
						return j.t.ArIrWF;
					case L.rsA.ONBOARDING_PROMPT_DELETE:
						return j.t.IuBTam;
					case L.rsA.ONBOARDING_CREATE:
						return j.t.wDaq39;
					case L.rsA.ONBOARDING_UPDATE:
						return j.t["yONu/v"];
					case L.rsA.HOME_SETTINGS_CREATE:
						return j.t.dSdCjI;
					case L.rsA.HOME_SETTINGS_UPDATE:
						return j.t.XHE8qq;
					case L.rsA.GUILD_HOME_FEATURE_ITEM:
						let l = null != e.changes ? e.changes.find(e => e.key === L.zUn.ENTITY_TYPE) : null;
						if (null == l) return j.t["UZ+U3N"];
						switch (l.newValue) {
							case a.w.MESSAGE:
								return j.t["PyEa+P"];
							case a.w.FORUM_POST:
								return j.t.hCuAb2;
							default:
								return j.t["UZ+U3N"]
						}
					case L.rsA.GUILD_HOME_REMOVE_ITEM:
						return j.t.kPReur;
					case L.rsA.SOUNDBOARD_SOUND_CREATE:
						return j.t["0PD83d"];
					case L.rsA.SOUNDBOARD_SOUND_UPDATE:
						return j.t.CM8n19;
					case L.rsA.SOUNDBOARD_SOUND_DELETE:
						return j.t["kVz4//"];
					case L.rsA.VOICE_CHANNEL_STATUS_CREATE:
						return j.t.MWjnU1;
					case L.rsA.VOICE_CHANNEL_STATUS_DELETE:
						return j.t.aS8Krq;
					case L.rsA.GUILD_MEMBER_VERIFICATION_UPDATE:
						return j.t.NUKUb2;
					case L.rsA.GUILD_PROFILE_UPDATE:
						return j.t.Ed6hFx;
					default:
						return null
				}
			}

			function em(e) {
				switch (e) {
					case M.zZ.GUILD_FEED_REMOVED:
						return j.intl.string(j.t["5G8ZDw"]);
					case M.zZ.ACTIVE_CHANNELS_REMOVED:
						return j.intl.string(j.t["4YLtzM"]);
					case M.zZ.PINNED:
						return j.intl.string(j.t["1QLRYW"])
				}
				return null
			}

			function ef(e) {
				switch (e) {
					case M.zZ.GUILD_FEED_REMOVED:
						return j.intl.string(j.t.S5kuWV);
					case M.zZ.ACTIVE_CHANNELS_REMOVED:
						return j.intl.string(j.t["8qpgc3"]);
					case M.zZ.PINNED:
						return j.intl.string(j.t.CMweGB)
				}
				return null
			}

			function eO(e, t) {
				switch (e) {
					case L.Plq.CREATE_INSTANT_INVITE:
						return j.intl.string(j.t.zJrgTE);
					case L.Plq.KICK_MEMBERS:
						return j.intl.string(j.t.pBNv6u);
					case L.Plq.BAN_MEMBERS:
						return j.intl.string(j.t.oTBA7O);
					case L.Plq.ADMINISTRATOR:
						return j.intl.string(j.t.PGvZqa);
					case L.Plq.MANAGE_CHANNELS:
						if (t.targetType === L.KFR.CHANNEL || t.targetType === L.KFR.CHANNEL_OVERWRITE) return j.intl.string(j.t.nAw15O);
						return j.intl.string(j.t["9qLtWl"]);
					case L.Plq.MANAGE_GUILD:
						return j.intl.string(j.t.QZRcfH);
					case L.Plq.VIEW_GUILD_ANALYTICS:
						return j.intl.string(j.t.rQJBEx);
					case L.Plq.VIEW_CREATOR_MONETIZATION_ANALYTICS:
						return j.intl.string(j.t["0lTLTk"]);
					case L.Plq.CHANGE_NICKNAME:
						return j.intl.string(j.t.dilOFx);
					case L.Plq.MANAGE_NICKNAMES:
						return j.intl.string(j.t["t+Ct5+"]);
					case L.Plq.MANAGE_ROLES:
						return j.intl.string(j.t["C8d+oK"]);
					case L.Plq.MANAGE_WEBHOOKS:
						return j.intl.string(j.t["/ADKmJ"]);
					case L.Plq.CREATE_GUILD_EXPRESSIONS:
						return j.intl.string(j.t.HarVuL);
					case L.Plq.MANAGE_GUILD_EXPRESSIONS:
						return j.intl.string(j.t.bbuXIi);
					case L.Plq.VIEW_AUDIT_LOG:
						return j.intl.string(j.t.fZgLpK);
					case L.Plq.VIEW_CHANNEL:
						if (t.targetType === L.KFR.CHANNEL || t.targetType === L.KFR.CHANNEL_OVERWRITE) return j.intl.string(j.t["W/A4Qk"]);
						return j.intl.string(j.t.uV83ys);
					case L.Plq.SEND_MESSAGES:
						return j.intl.string(j.t.T32rkJ);
					case L.Plq.SEND_TTS_MESSAGES:
						return j.intl.string(j.t.Mg7bkp);
					case L.Plq.USE_APPLICATION_COMMANDS:
						return j.intl.string(j.t.shbR1d);
					case L.Plq.MANAGE_MESSAGES:
						return j.intl.string(j.t["6lU9xM"]);
					case L.Plq.EMBED_LINKS:
						return j.intl.string(j.t["969dEB"]);
					case L.Plq.ATTACH_FILES:
						return j.intl.string(j.t["3AS4UF"]);
					case L.Plq.READ_MESSAGE_HISTORY:
						return j.intl.string(j.t.l9ufaW);
					case L.Plq.MENTION_EVERYONE:
						return j.intl.string(j.t.Y78KGB);
					case L.Plq.USE_EXTERNAL_EMOJIS:
						return j.intl.string(j.t.BpBGZW);
					case L.Plq.USE_EXTERNAL_STICKERS:
						return j.intl.string(j.t["UeRs+f"]);
					case L.Plq.ADD_REACTIONS:
						return j.intl.string(j.t.yEoJAg);
					case L.Plq.CONNECT:
						return j.intl.string(j.t.S0W8Z2);
					case L.Plq.SPEAK:
						return j.intl.string(j.t["8w1tIS"]);
					case L.Plq.MUTE_MEMBERS:
						return j.intl.string(j.t["8EI309"]);
					case L.Plq.DEAFEN_MEMBERS:
						return j.intl.string(j.t["9L47Fh"]);
					case L.Plq.MOVE_MEMBERS:
						return j.intl.string(j.t.YtjJPT);
					case L.Plq.USE_VAD:
						return j.intl.string(j.t["08zAV1"]);
					case L.Plq.PRIORITY_SPEAKER:
						return j.intl.string(j.t.BVK71t);
					case L.Plq.STREAM:
						return j.intl.string(j.t.FlNoSU);
					case L.Plq.REQUEST_TO_SPEAK:
						return j.intl.string(j.t["5kicT0"]);
					case L.Plq.CREATE_EVENTS:
						return j.intl.string(j.t.qyjZub);
					case L.Plq.MANAGE_EVENTS:
						return j.intl.string(j.t.HIgA5e);
					case L.Plq.CREATE_PUBLIC_THREADS:
						return j.intl.string(j.t["25rKnZ"]);
					case L.Plq.CREATE_PRIVATE_THREADS:
						return j.intl.string(j.t.QwbTSU);
					case L.Plq.SEND_MESSAGES_IN_THREADS:
						return j.intl.string(j.t.fTE74u);
					case L.Plq.MANAGE_THREADS:
						return j.intl.string(j.t.kEqgr6);
					case L.Plq.MODERATE_MEMBERS:
						return j.intl.string(j.t["+RL6p6"]);
					case L.Plq.SET_VOICE_CHANNEL_STATUS:
						return j.intl.string(j.t.VBwkUV);
					case L.Plq.SEND_POLLS:
						return j.intl.string(j.t.UMQ7W1);
					case L.Plq.USE_EXTERNAL_APPS:
						return j.intl.string(j.t.TtA5rK)
				}
				return null
			}

			function eN(e, t) {
				let n = [];
				return e.forEach(e => {
					let r = function(e, t) {
							switch (e.targetType) {
								case L.KFR.GUILD:
								case L.KFR.GUILD_HOME:
								case L.KFR.GUILD_PROFILE:
									return t;
								case L.KFR.CHANNEL:
								case L.KFR.CHANNEL_OVERWRITE:
									return eS(e, L.zUn.NAME, e => h.Z.getChannel(e), e => (0, _.F6)(e, S.default, p.Z, !0));
								case L.KFR.USER:
									return eS(e, L.zUn.NICK, e => S.default.getUser(e), e => e);
								case L.KFR.ROLE:
									return eS(e, L.zUn.NAME, e => R.Z.getRole(t.id, e), e => e.name);
								case L.KFR.ONBOARDING_PROMPT:
									let n = eS(e, L.zUn.ID, e => g.Z.getOnboardingPrompt(e), e => e.title);
									return null == n || "" === n ? j.intl.string(j.t.ZNQyiY) : n;
								case L.KFR.GUILD_ONBOARDING:
								case L.KFR.GUILD_MEMBER_VERIFICATION:
									return t;
								case L.KFR.INVITE:
									return eS(e, L.zUn.CODE, L.VqG);
								case L.KFR.INTEGRATION:
									return eS(e, L.zUn.TYPE, e => U.Z.integrations.find(t => t.id === e), e => e.name);
								case L.KFR.WEBHOOK:
									return eS(e, L.zUn.NAME, e => U.Z.webhooks.find(t => t.id === e), e => e.name);
								case L.KFR.EMOJI:
									return eS(e, L.zUn.NAME, e => T.ZP.getGuildEmoji(t.id).find(t => t.id === e), e => e.name);
								case L.KFR.STICKER:
									return eS(e, L.zUn.NAME, e => O.Z.getStickerById(e), e => e.name);
								case L.KFR.STAGE_INSTANCE:
									return eS(e, L.zUn.TOPIC, e => {
										var n;
										return null == (n = Object.values(f.Z.getStageInstancesByGuild(t.id))) ? void 0 : n.find(t => t.id === e)
									}, e => e.topic);
								case L.KFR.GUILD_SCHEDULED_EVENT:
								case L.KFR.GUILD_SCHEDULED_EVENT_EXCEPTION:
									return eS(e, L.zUn.NAME, e => U.Z.guildScheduledEvents.find(t => t.id === e), e => e.name);
								case L.KFR.THREAD:
									return eS(e, L.zUn.NAME, e => U.Z.threads.find(t => t.id === e), e => e.name);
								case L.KFR.APPLICATION_COMMAND:
									if (e.targetId === e.options.application_id) {
										let t = U.Z.integrations.find(t => {
											var n;
											return (null == (n = t.application) ? void 0 : n.id) === e.targetId
										});
										if (null != t) return t.name;
										return e.targetId
									}
									return eS(e, L.zUn.NAME, e => U.Z.applicationCommands.find(t => t.id === e), e => {
										let t = null != e.name_localized && "" !== e.name_localized ? e.name_localized : e.name;
										return e.type === d.yU.CHAT ? "/⁠".concat(t) : t
									});
								case L.KFR.AUTO_MODERATION_RULE:
									return eS(e, L.zUn.NAME, e => U.Z.automodRules.find(t => t.id === e), e => e.name);
								case L.KFR.GUILD_SOUNDBOARD:
									return eS(e, L.zUn.NAME, L.VqG);
								case L.KFR.HOME_SETTINGS:
									return eS(e, L.zUn.GUILD_ID, e => m.Z.getSettings(e), () => j.intl.string(j.t.VbpLyc), t.id);
								case L.KFR.VOICE_CHANNEL_STATUS:
									return eS(e, L.zUn.STATUS, e => h.Z.getChannel(e), e => (0, _.F6)(e, S.default, p.Z, !0));
								default:
									return G.warn("Unknown targetType for log", e), null
							}
						}(e, t),
						i = S.default.getUser(e.userId);
					if (null != r || [L.rsA.MEMBER_PRUNE, L.rsA.MEMBER_DISCONNECT, L.rsA.MEMBER_MOVE, L.rsA.CREATOR_MONETIZATION_REQUEST_CREATED, L.rsA.CREATOR_MONETIZATION_TERMS_ACCEPTED].includes(e.action)) {
						if (null != (e = (e = (e = e.set("user", i)).set("target", r)).set("options", function(e) {
								if (null != e.options) {
									let n = y({}, e.options);
									switch (e.options.type) {
										case L.jwA.USER:
											n.subtarget = eC(e.options.id, e => S.default.getUser(e), e => e.tag);
											break;
										case L.jwA.ROLE:
											n.subtarget = eC(e.options.role_name, L.VqG)
									}
									if (null != e.options.channel_id && (n.channel = eS(e, "", e => h.Z.getChannel(e), e => e, e.options.channel_id)), null != e.options.members_removed && 0 !== e.options.members_removed && (n.count = e.options.members_removed), null != e.options.event_exception_id) {
										var t;
										let r = U.Z.guildScheduledEvents.find(t => t.id === e.targetId),
											l = null == r ? void 0 : r.guild_scheduled_event_exceptions.find(t => t.event_exception_id === e.options.event_exception_id);
										n.subtarget = (0, C.vc)(s()(v.default.extractTimestamp(null != (t = null == l ? void 0 : l.event_exception_id) ? t : "0")), "LL")
									}
									return n
								}
								return e.options
							}(e))).changes) {
							let n = [];
							e.changes.forEach(r => {
								let i = function(e, t, n) {
									if (t.action === L.rsA.APPLICATION_COMMAND_PERMISSION_UPDATE) {
										let t = e.newValue || e.oldValue;
										switch (t.type) {
											case L.ecB.ROLE:
												e.subtarget = eC(t.id, e => R.Z.getRole(n.id, e), e => e.name);
												break;
											case L.ecB.USER:
												e.subtarget = eC(t.id, e => S.default.getUser(e), e => e.tag);
												break;
											case L.ecB.CHANNEL:
												t.id === l()(n.id).subtract(1).toString() ? e.subtarget = j.intl.string(j.t.MSYhgo) : e.subtarget = eC(t.id, e => h.Z.getChannel(e), e => (0, _.F6)(e, S.default, p.Z, !0))
										}
										return e
									}
									switch (e.key) {
										case L.zUn.OWNER_ID:
											return ep(e, e => S.default.getUser(e));
										case L.zUn.CHANNEL_ID:
										case L.zUn.AFK_CHANNEL_ID:
										case L.zUn.SYSTEM_CHANNEL_ID:
										case L.zUn.RULES_CHANNEL_ID:
										case L.zUn.PUBLIC_UPDATES_CHANNEL_ID:
											return ep(e, e => h.Z.getChannel(e), e => (0, _.F6)(e, S.default, p.Z, !0));
										case L.zUn.AFK_TIMEOUT:
											return ep(e, e => e / 60);
										case L.zUn.BITRATE:
											return ep(e, e => e / 1e3);
										case L.zUn.COLOR:
											return ep(e, e => (0, c.Rf)(e).toUpperCase());
										case L.zUn.THEME_COLORS:
											return ep(e, e => "".concat((0, c.Rf)(e[0]).toUpperCase(), ", ").concat((0, c.Rf)(e[1]).toUpperCase()));
										case L.zUn.MAX_AGE:
											return ep(e, e => {
												let t = D.ZP.getMaxAgeOptions.find(t => {
													let {
														value: n
													} = t;
													return e === n
												});
												return t ? t.label : e
											});
										case L.zUn.PERMISSIONS: {
											let t = [],
												{
													added: n,
													removed: r
												} = eh(e.oldValue, e.newValue);
											if (n.length > 0) {
												let e = new N.ms(L.zUn.PERMISSIONS_GRANTED, null, n);
												t.push(e)
											}
											if (r.length > 0) {
												let e = new N.ms(L.zUn.PERMISSIONS_DENIED, null, r);
												t.push(e)
											}
											return t
										}
										case L.zUn.PERMISSIONS_GRANTED:
										case L.zUn.PERMISSIONS_DENIED: {
											let t = [],
												{
													added: n,
													removed: r
												} = eh(e.oldValue, e.newValue);
											if (n.length > 0) {
												let r = new N.ms(e.key, null, n);
												t.push(r)
											}
											if (r.length > 0) {
												let e = new N.ms(L.zUn.PERMISSIONS_RESET, r, r);
												t.push(e)
											}
											return t
										}
										case L.zUn.FLAGS: {
											let t = [],
												{
													added: n,
													removed: r
												} = function(e, t) {
													let n = "number" == typeof e ? e : 0,
														r = "number" == typeof t ? t : 0,
														l = b.Ge(r, n),
														i = b.Ge(n, r),
														s = [],
														a = [];
													for (let e in M.zZ) {
														let t = M.zZ[e];
														b.yE(l, t) && s.push(t), b.yE(i, t) && a.push(t)
													}
													return {
														added: s,
														removed: a
													}
												}(e.oldValue, e.newValue);
											if (n.length > 0) {
												let r = new N.ms(e.key, null, n);
												t.push(r)
											}
											if (r.length > 0) {
												let n = new N.ms(e.key, r, null);
												t.push(n)
											}
											return t
										}
										case L.zUn.PREFERRED_LOCALE:
											return ep(e, e => {
												let t = (0, j.getAvailableLocales)().find(t => t.value === e);
												return null != t ? t.name : null
											});
										case L.zUn.VIDEO_QUALITY_MODE:
											return ep(e, e => e === L.Ucd.FULL ? j.intl.string(j.t["7jOoJC"]) : j.intl.string(j.t.jjKYpq));
										case L.zUn.SYSTEM_CHANNEL_FLAGS:
											let r = {
													[L.xmn.SUPPRESS_JOIN_NOTIFICATIONS]: L.zUn.SYSTEM_CHANNEL_FLAG_JOIN_NOTIFICATIONS,
													[L.xmn.SUPPRESS_PREMIUM_SUBSCRIPTIONS]: L.zUn.SYSTEM_CHANNEL_FLAG_PREMIUM_SUBSCRIPTIONS,
													[L.xmn.SUPPRESS_GUILD_REMINDER_NOTIFICATIONS]: L.zUn.SYSTEM_CHANNEL_FLAG_REMINDER_NOTIFICATIONS,
													[L.xmn.SUPPRESS_JOIN_NOTIFICATION_REPLIES]: L.zUn.SYSTEM_CHANNEL_FLAG_JOIN_NOTIFICATION_REPLIES
												},
												i = [];
											return Object.values(L.xmn).forEach(t => {
												let n = (e.oldValue & t) === t,
													l = (e.newValue & t) === t;
												if (n === l) return;
												let s = new N.ms(r[t], !n, !l);
												i.push(s)
											}), i;
										case L.zUn.AUTO_MODERATION_ACTIONS:
											if (t.targetType === L.KFR.AUTO_MODERATION_RULE) return ep(e, e => e.map(e => e.type), e => e.map(I.ZF).join(", "));
											break;
										case L.zUn.AUTO_MODERATION_EVENT_TYPE:
											if (t.targetType === L.KFR.AUTO_MODERATION_RULE) return ep(e, I.YN);
											break;
										case L.zUn.AUTO_MODERATION_TRIGGER_TYPE:
											if (t.targetType === L.KFR.AUTO_MODERATION_RULE) return ep(e, I.Ar);
											break;
										case L.zUn.AUTO_MODERATION_TRIGGER_METADATA:
											if (t.targetType === L.KFR.AUTO_MODERATION_RULE) return ep(e, e => null != e && "object" == typeof e ? null != e.keyword_filter && Array.isArray(e.keyword_filter) ? j.intl.formatToMarkdownString(j.t.y91UXV, {
												newValue: e.keyword_filter.map(e => "'".concat(e, "'")).join(", ")
											}) : JSON.stringify(e) : e);
											break;
										case L.zUn.AUTO_MODERATION_ADD_KEYWORDS:
										case L.zUn.AUTO_MODERATION_REMOVE_KEYWORDS:
										case L.zUn.AUTO_MODERATION_ADD_REGEX_PATTERNS:
										case L.zUn.AUTO_MODERATION_REMOVE_REGEX_PATTERNS:
										case L.zUn.AUTO_MODERATION_ADD_ALLOW_LIST:
										case L.zUn.AUTO_MODERATION_REMOVE_ALLOW_LIST:
											if (t.targetType === L.KFR.AUTO_MODERATION_RULE) return ep(e, e => null != e && Array.isArray(e) ? e.map(e => "'".concat(e, "'")).join(", ") : JSON.stringify(e));
											break;
										case L.zUn.AUTO_MODERATION_EXEMPT_CHANNELS:
											if (t.targetType === L.KFR.AUTO_MODERATION_RULE) return ep(e, e => e.map(h.Z.getChannel).filter(e => null != e).map(e => (0, _.F6)(e, S.default, p.Z, !0)), e => null != e && e.length > 0 ? e.join(", ") : j.intl.string(j.t["K/EdV1"]));
											break;
										case L.zUn.AUTO_MODERATION_EXEMPT_ROLES:
											if (t.targetType === L.KFR.AUTO_MODERATION_RULE) return ep(e, e => e.map(e => R.Z.getRole(n.id, e)).filter(e => null != e).map(e => e.name), e => null != e && e.length > 0 ? e.join(", ") : j.intl.string(j.t["K/EdV1"]));
											break;
										case L.zUn.AVAILABLE_TAGS:
											return function(e) {
												let {
													oldValue: t,
													newValue: n
												} = e, r = Array.isArray(t) ? t : [], l = Array.isArray(n) ? n : [];
												if (0 === r.length && 0 === l.length) return e;
												let i = {},
													s = {};
												if (r.forEach(e => {
														i[e.id] = e
													}), l.forEach(e => {
														s[e.id] = e
													}), r.length < l.length) {
													for (let e in s)
														if (null == i[e]) return new N.ms(L.zUn.AVAILABLE_TAG_ADD, null, eR(s[e]))
												}
												if (r.length > l.length) {
													for (let e in i)
														if (null == s[e]) return new N.ms(L.zUn.AVAILABLE_TAG_DELETE, null, eR(i[e]))
												}
												for (let e in i) {
													let t = i[e],
														n = s[e];
													if ((null == n ? void 0 : n.name) !== t.name || (null == n ? void 0 : n.emoji_id) !== t.emoji_id || (null == n ? void 0 : n.emoji_name) !== t.emoji_name) return new N.ms(L.zUn.AVAILABLE_TAG_EDIT, eR(t), eR(n))
												}
												return e
											}(e);
										case L.zUn.SCHEDULED_START_TIME:
										case L.zUn.SCHEDULED_END_TIME:
											return ep(e, e => (0, C.vc)(s()(new Date(e)), "LLLL"))
									}
									return e
								}(r, e, t);
								Array.isArray(i) ? i.forEach(e => n.push(e)) : n.push(i)
							}), e = e.set("changes", n)
						}
						n.push(e)
					}
				}), n
			}

			function eh(e, t) {
				let n = u.vB("string" == typeof e ? e : 0),
					r = u.vB("string" == typeof t ? t : 0),
					l = u.Od(r, n),
					i = u.Od(n, r),
					s = [],
					a = [];
				for (let e in L.Plq) {
					let t = L.Plq[e];
					u.e$(l, t) && s.push(t), u.e$(i, t) && a.push(t)
				}
				return {
					added: s,
					removed: a
				}
			}

			function eR(e) {
				return null == e ? null : {
					id: e.id,
					name: e.name,
					emojiId: 0 !== e.emoji_id ? e.emoji_id : void 0,
					emojiName: e.emoji_name,
					moderated: e.moderated
				}
			}

			function ep(e, t, n) {
				let r = e.newValue,
					l = e.oldValue;
				return null != e.newValue && (r = t(e.newValue), null != n && null != r && (r = n(r))), null != e.oldValue && (l = t(e.oldValue), null != n && null != l && (l = n(l))), new N.ms(e.key, l || e.oldValue, r || e.newValue)
			}

			function eS(e, t, n, r, l) {
				let i = null,
					s = n(l = null != l ? l : e.targetId);
				if (null != s && null != r && (i = r(s)), null == i) {
					let t = U.Z.deletedTargets[e.targetType];
					null != t && null != t[l] && (i = t[l])
				}
				if (null == i && null != e.changes) {
					let n = e.changes.find(e => e.key === t);
					null != n && (i = n.newValue || n.oldValue)
				}
				return null != i ? i : l
			}

			function eC(e, t, n) {
				let r = e,
					l = t(e);
				return null != l && null != n && (r = n(l)), r
			}

			function eb(e, t) {
				return n => null == n.oldValue ? e : t
			}

			function eD(e, t) {
				return n => null == n.newValue ? e : t
			}

			function ev(e, t, n, r) {
				return l => null != l.newValue && null != l.oldValue ? e : null != l.newValue ? t : null != l.oldValue ? n : r
			}

			function eU(e, t) {
				return n => n.newValue ? e : t
			}

			function eL(e) {
				return t => e[t.newValue]
			}

			function eM(e, t) {
				return n => {
					var r;
					return null != (r = e[n.newValue]) ? r : t
				}
			}
		},
		501801: function(e, t, n) {
			n.d(t, {
				mp: () => L,
				tP: () => M,
				xO: () => b
			}), n(539854), n(953529);
			var r = n(255367),
				l = n(73800),
				i = n(120356),
				s = n.n(i),
				a = n(392711),
				o = n.n(a),
				u = n(913527),
				c = n.n(u),
				E = n(866442),
				d = n(481060),
				_ = n(596454),
				A = n(835473),
				T = n(479099),
				I = n(592125),
				g = n(485386),
				m = n(594174),
				f = n(934415),
				O = n(823379),
				N = n(624138),
				h = n(51144),
				R = n(909746),
				p = n(981631),
				S = n(388032),
				C = n(677234);

			function b(e, t) {
				let n = R.vc[e.targetType];
				return null != n && !0 === n[t.key]
			}
			let D = {
				[p.vB8.CREATE]: C.typeCreate,
				[p.vB8.UPDATE]: C.typeUpdate,
				[p.vB8.DELETE]: C.typeDelete
			};

			function v(e) {
				let {
					applicationId: t
				} = e, n = (0, A.q)(t);
				return null == n ? null : (0, r.jsx)(d.Text, {
					variant: "text-md/normal",
					children: n.name
				})
			}

			function U(e, t) {
				return (0, r.jsx)("div", {
					className: C.colorHook,
					style: {
						backgroundColor: t
					}
				}, e)
			}
			class L extends l.PureComponent {
				render() {
					let {
						actionType: e,
						targetType: t,
						action: n,
						themeOverride: l
					} = this.props, i = null != l ? C["themeOverride".concat((0, N.De)(l))] : null, a = s()(C.icon, D[e], n === p.rsA.MESSAGE_DELETE ? C.targetMessage : n === p.rsA.AUTO_MODERATION_BLOCK_MESSAGE || n === p.rsA.AUTO_MODERATION_FLAG_TO_CHANNEL || n === p.rsA.AUTO_MODERATION_USER_COMMUNICATION_DISABLED || n === p.rsA.AUTO_MODERATION_QUARANTINE_USER ? C.autoModerationBlockMessage : ({
						[p.KFR.ALL]: C.targetAll,
						[p.KFR.GUILD]: C.targetGuild,
						[p.KFR.CHANNEL]: C.targetChannel,
						[p.KFR.CHANNEL_OVERWRITE]: C.targetChannel,
						[p.KFR.USER]: C.targetMember,
						[p.KFR.ROLE]: C.targetRole,
						[p.KFR.ONBOARDING_PROMPT]: C.targetOnboarding,
						[p.KFR.GUILD_ONBOARDING]: C.targetOnboarding,
						[p.KFR.HOME_SETTINGS]: C.targetOnboarding,
						[p.KFR.INTEGRATION]: C.targetIntegration,
						[p.KFR.INVITE]: C.targetInvite,
						[p.KFR.WEBHOOK]: C.targetWebhook,
						[p.KFR.EMOJI]: C.targetEmoji,
						[p.KFR.STICKER]: C.targetSticker,
						[p.KFR.STAGE_INSTANCE]: C.targetStageInstance,
						[p.KFR.GUILD_SCHEDULED_EVENT]: C.targetGuildScheduledEvent,
						[p.KFR.GUILD_SCHEDULED_EVENT_EXCEPTION]: C.targetGuildScheduledEvent,
						[p.KFR.THREAD]: C.thread,
						[p.KFR.APPLICATION_COMMAND]: C.applicationCommand,
						[p.KFR.AUTO_MODERATION_RULE]: C.autoModerationRule,
						[p.KFR.GUILD_HOME]: C.targetGuildHome,
						[p.KFR.GUILD_SOUNDBOARD]: C.targetGuildSoundboard,
						[p.KFR.VOICE_CHANNEL_STATUS]: C.targetChannel,
						[p.KFR.GUILD_MEMBER_VERIFICATION]: C.targetMember,
						[p.KFR.GUILD_PROFILE]: C.targetGuild
					})[t], i);
					return (0, r.jsx)("div", {
						className: a
					})
				}
			}

			function M(e) {
				let {
					log: t,
					guild: n,
					onContentClick: i,
					className: a
				} = e, u = l.useCallback(e => {
					if (null == t.changes) return null;
					let u = 0,
						A = o().flatten(t.changes.map(i => {
							if (b(t, i)) return null;
							let {
								oldValue: s,
								newValue: a
							} = (() => {
								if ((t.action === p.rsA.CHANNEL_UPDATE || t.action === p.rsA.CHANNEL_CREATE) && i.key === p.zUn.TYPE) {
									var e, n;
									return {
										oldValue: null != (e = i.oldValue) ? e : (0, f.a5)({
											type: i.oldValue
										}),
										newValue: null != (n = i.newValue) ? n : (0, f.a5)({
											type: i.newValue
										})
									}
								}
								if (t.action === p.rsA.MEMBER_UPDATE && i.key === p.zUn.COMMUNICATION_DISABLED_UNTIL) {
									let e = c()(i.newValue);
									return {
										oldValue: i.oldValue,
										newValue: e.isValid() ? e.calendar() : i.newValue
									}
								}
								return t.action === p.rsA.GUILD_UPDATE && i.key === p.zUn.OWNER_ID ? {
									oldValue: h.ZP.getUserTag(i.oldValue, {
										mode: "username"
									}),
									newValue: h.ZP.getUserTag(i.newValue, {
										mode: "username"
									})
								} : i
							})(), A = (() => {
								if (t.action === p.rsA.MEMBER_ROLE_UPDATE) return function(e) {
									let {
										newValue: t
									} = e;
									return Array.isArray(t) ? t.map(e => (0, r.jsx)("div", {
										className: C.subListItem,
										children: e.name
									}, e.id)) : null
								}(i);
								if (t.targetType === p.KFR.ROLE || t.action === p.rsA.CHANNEL_OVERWRITE_CREATE || t.action === p.rsA.CHANNEL_OVERWRITE_UPDATE) return function(e, t) {
									let {
										newValue: n
									} = e;
									return Array.isArray(n) ? n.map((e, n) => (0, r.jsx)("div", {
										className: C.subListItem,
										children: R.hQ(e, t)
									}, n)) : null
								}(i, t);
								if ((t.action === p.rsA.CHANNEL_UPDATE || t.action === p.rsA.THREAD_UPDATE) && i.key === p.zUn.FLAGS) return function(e) {
									let {
										newValue: t,
										oldValue: n
									} = e, l = [];
									return (Array.isArray(n) && (l = l.concat(n.map(e => (0, r.jsx)("div", {
										className: C.subListItem,
										children: R.cT(e)
									}, e)))), Array.isArray(t) && (l = l.concat(t.map(e => (0, r.jsx)("div", {
										className: C.subListItem,
										children: R.em(e)
									}, e)))), l.length > 0) ? l : null
								}(i);
								if ((t.action === p.rsA.ONBOARDING_PROMPT_UPDATE || t.action === p.rsA.ONBOARDING_PROMPT_CREATE) && i.key === p.zUn.OPTIONS) return function(e, t, n) {
									let {
										newValue: l,
										oldValue: i
									} = e, s = e => {
										var t;
										let r = null != n ? null == (t = g.Z.getRole(n.id, e)) ? void 0 : t.name : void 0;
										return null == r ? null : "@".concat(r)
									}, a = e => {
										var t;
										let n = null == (t = I.Z.getChannel(e)) ? void 0 : t.name;
										return null == n ? null : "#".concat(n)
									}, u = (e, n) => {
										let {
											title: l,
											id: i
										} = n, u = e.role_ids.map(s).filter(O.lm), c = e.channel_ids.map(a).filter(O.lm), E = n.role_ids.map(s).filter(O.lm), _ = n.channel_ids.map(a).filter(O.lm), A = o().difference(E, u), T = o().difference(u, E), I = o().difference(_, c), g = o().difference(c, _), m = [];
										return (o().isEqual(e.title, n.title) || m.push("title"), o().isEqual(e.description, n.description) || m.push("description"), 0 === A.length && 0 === T.length && 0 === I.length && 0 === g.length && 0 === m.length) ? null : (0, r.jsxs)("li", {
											children: [(0, r.jsxs)("div", {
												className: C.onboardingChangeLogItemTitle,
												children: [(0, r.jsx)(L, {
													actionType: p.vB8.UPDATE,
													targetType: t.targetType,
													action: t.action
												}), (0, r.jsx)(d.Text, {
													variant: "text-md/normal",
													children: S.intl.format(S.t["WZO+iY"], {
														title: l
													})
												})]
											}), (0, r.jsxs)("div", {
												className: C.onboardingChangeLogItemChanges,
												children: [A.length > 0 && (0, r.jsx)(d.Text, {
													variant: "text-md/normal",
													children: S.intl.format(S.t["R+km+f"], {
														roles: A.join(", ")
													})
												}), T.length > 0 && (0, r.jsx)(d.Text, {
													variant: "text-md/normal",
													children: S.intl.format(S.t.xIVRoa, {
														roles: T.join(", ")
													})
												}), I.length > 0 && (0, r.jsx)(d.Text, {
													variant: "text-md/normal",
													children: S.intl.format(S.t.iYowX1, {
														channels: I.join(", ")
													})
												}), g.length > 0 && (0, r.jsx)(d.Text, {
													variant: "text-md/normal",
													children: S.intl.format(S.t.JLdJpK, {
														channels: g.join(", ")
													})
												}), m.map((t, l) => (0, r.jsx)(d.Text, {
													variant: "text-md/normal",
													children: S.intl.format(S.t["0698zc"], {
														key: t,
														oldValue: e[t],
														newValue: n[t]
													})
												}, l))]
											})]
										}, i)
									}, c = o().keyBy(null != i ? i : [], "id"), E = o().keyBy(null != l ? l : [], "id"), _ = o().difference(Object.keys(E), Object.keys(c)).map(e => E[e]), A = o().difference(Object.keys(c), Object.keys(E)).map(e => c[e]), T = o().intersection(Object.keys(E), Object.keys(c));
									return (0, r.jsxs)("ul", {
										className: C.onboardingChangeLogContainer,
										children: [_.map(e => {
											let {
												role_ids: n,
												channel_ids: l,
												title: i,
												id: o
											} = e, u = (null != n ? n : []).map(s).filter(O.lm), c = (null != l ? l : []).map(a).filter(O.lm);
											return (0, r.jsxs)("li", {
												children: [(0, r.jsxs)("div", {
													className: C.onboardingChangeLogItemTitle,
													children: [(0, r.jsx)(L, {
														actionType: p.vB8.CREATE,
														targetType: t.targetType,
														action: t.action
													}), (0, r.jsx)(d.Text, {
														variant: "text-md/normal",
														children: S.intl.format(S.t.CZ1tys, {
															title: i
														})
													})]
												}), (0, r.jsxs)("div", {
													className: C.onboardingChangeLogItemChanges,
													children: [u.length > 0 && (0, r.jsx)(d.Text, {
														variant: "text-md/normal",
														children: S.intl.format(S.t["gt/5z8"], {
															roles: u.join(", ")
														})
													}), c.length > 0 && (0, r.jsx)(d.Text, {
														variant: "text-md/normal",
														children: S.intl.format(S.t["4q006e"], {
															channels: c.join(", ")
														})
													})]
												})]
											}, o)
										}), A.map(e => (0, r.jsx)("li", {
											children: (0, r.jsxs)("div", {
												className: C.onboardingChangeLogItemTitle,
												children: [(0, r.jsx)(L, {
													actionType: p.vB8.DELETE,
													targetType: t.targetType,
													action: t.action
												}), (0, r.jsx)(d.Text, {
													variant: "text-md/normal",
													children: S.intl.format(S.t["m3dt+P"], {
														title: e.title
													})
												})]
											})
										}, e.id)), T.map(e => u(c[e], E[e]))]
									}, "options")
								}(i, t, n);
								if (t.action === p.rsA.HOME_SETTINGS_CREATE || t.action === p.rsA.HOME_SETTINGS_UPDATE) return function(e, t) {
									let {
										oldValue: n,
										newValue: l,
										key: i
									} = e, {
										targetType: s,
										action: a
									} = t;
									switch (i) {
										case p.zUn.WELCOME_MESSAGE:
											return ((e, t) => {
												var n, l, i, s, a;
												let o = m.default.getUser(null == t || null == (n = t.author_ids) ? void 0 : n[0]),
													u = m.default.getUser(null == (l = e.author_ids) ? void 0 : l[0]),
													c = (null == o ? void 0 : o.id) !== (null == u ? void 0 : u.id) ? (0, r.jsx)("li", {
														children: (0, r.jsx)("div", {
															className: C.onboardingChangeLogItemTitle,
															children: (0, r.jsx)(d.Text, {
																variant: "text-md/normal",
																children: S.intl.format(S.t.PrOzAw, {
																	oldUser: null != (i = null == o ? void 0 : o.username) ? i : S.intl.string(S.t.PoWNfX),
																	newUser: null != (s = null == u ? void 0 : u.username) ? s : S.intl.string(S.t.PoWNfX)
																})
															})
														})
													}) : null,
													E = (null == t ? void 0 : t.message) !== e.message ? (0, r.jsx)("li", {
														children: (0, r.jsx)("div", {
															className: C.onboardingChangeLogItemTitle,
															children: (0, r.jsx)(d.Text, {
																variant: "text-md/normal",
																children: S.intl.format(S.t.oB7rBQ, {
																	oldMessage: null != (a = null == t ? void 0 : t.message) ? a : S.intl.string(S.t.PoWNfX),
																	newMessage: e.message
																})
															})
														})
													}) : null;
												return (0, r.jsxs)("ul", {
													children: [c, E]
												})
											})(l, n);
										case p.zUn.NEW_MEMBER_ACTIONS:
											return ((e, t) => {
												let n = e.map(e => e.channel_id),
													l = t.map(e => e.channel_id),
													i = o().difference(l, n),
													u = o().difference(n, l),
													c = t.filter(e => i.includes(e.channel_id)),
													E = e.filter(e => u.includes(e.channel_id));
												return (0, r.jsxs)("ul", {
													children: [c.map(e => (0, r.jsx)("li", {
														children: (0, r.jsxs)("div", {
															className: C.onboardingChangeLogItemTitle,
															children: [(0, r.jsx)(L, {
																actionType: p.vB8.CREATE,
																targetType: s,
																action: a
															}), (0, r.jsx)(d.Text, {
																variant: "text-md/normal",
																children: S.intl.format(S.t["oFSu6+"], {
																	name: e.title
																})
															})]
														})
													}, e.channel_id)), E.map(e => (0, r.jsx)("li", {
														children: (0, r.jsxs)("div", {
															className: C.onboardingChangeLogItemTitle,
															children: [(0, r.jsx)(L, {
																actionType: p.vB8.DELETE,
																targetType: s,
																action: a
															}), (0, r.jsx)(d.Text, {
																variant: "text-md/normal",
																children: S.intl.format(S.t.GssWam, {
																	name: e.title
																})
															})]
														})
													}, e.channel_id))]
												})
											})(null != n ? n : [], l);
										case p.zUn.RESOURCE_CHANNELS:
											return ((e, t) => {
												let n = e.map(e => e.channel_id),
													l = t.map(e => e.channel_id),
													i = o().difference(l, n),
													u = o().difference(n, l),
													c = t.filter(e => i.includes(e.channel_id)),
													E = e.filter(e => u.includes(e.channel_id));
												return (0, r.jsxs)("ul", {
													children: [c.map(e => (0, r.jsx)("li", {
														children: (0, r.jsxs)("div", {
															className: C.onboardingChangeLogItemTitle,
															children: [(0, r.jsx)(L, {
																actionType: p.vB8.CREATE,
																targetType: s,
																action: a
															}), (0, r.jsx)(d.Text, {
																variant: "text-md/normal",
																children: S.intl.format(S.t.HlGndH, {
																	name: e.title
																})
															})]
														})
													}, e.channel_id)), E.map(e => (0, r.jsx)("li", {
														children: (0, r.jsxs)("div", {
															className: C.onboardingChangeLogItemTitle,
															children: [(0, r.jsx)(L, {
																actionType: p.vB8.DELETE,
																targetType: s,
																action: a
															}), (0, r.jsx)(d.Text, {
																variant: "text-md/normal",
																children: S.intl.format(S.t["7pysg4"], {
																	name: e.title
																})
															})]
														})
													}, e.channel_id))]
												})
											})(null != n ? n : [], l);
										default:
											return null
									}
								}(i, t);
								return null
							})(), N = e[i.key];
							return function(e) {
								var t, n;
								let {
									changeItem: i,
									subChanges: s,
									changeNumber: a,
									log: o,
									oldValue: u,
									newValue: c,
									change: A
								} = e;
								if (null == i) return console.warn("No change string for", A), null;
								let I = S.intl.format(i, {
									oldValue: u,
									newValue: c,
									count: Array.isArray(c) ? c.length : null,
									subtarget: null != (n = null != (t = o.options.subtarget) ? t : A.subtarget) ? n : null,
									newColorHook: (e, t) => U(t, A.newValue),
									newColorsHook: (e, t) => {
										let {
											primary_color: n,
											secondary_color: i,
											tertiary_color: s
										} = c;
										return (0, r.jsx)("span", {
											children: [n, i, s].filter(O.lm).map((e, n) => (0, r.jsxs)(l.Fragment, {
												children: [(0, r.jsx)("span", {
													className: C.colorsHook,
													children: "".concat(n > 0 ? ", " : "").concat((0, E.Rf)(e).toUpperCase(), " ")
												}), U(t, (0, E.Rf)(e))]
											}, n))
										}, t)
									},
									oldColorHook: (e, t) => U(t, A.oldValue),
									oldTagHook: (e, t) => (0, r.jsx)(T.Z, {
										tag: u,
										size: T.Z.Sizes.SMALL
									}, t),
									newTagHook: (e, t) => (0, r.jsx)(T.Z, {
										tag: c,
										size: T.Z.Sizes.SMALL
									}, t),
									oldEmojiHook: (e, t) => (0, r.jsx)(_.Z, {
										emojiId: u
									}, t),
									newEmojiHook: (e, t) => (0, r.jsx)(_.Z, {
										emojiId: c
									}, t),
									applicationHook: (e, t) => {
										var n;
										return (0, r.jsx)(v, {
											applicationId: null != (n = null == u ? void 0 : u.application_id) ? n : null == c ? void 0 : c.application_id
										}, t)
									}
								});
								return null == I ? null : (0, r.jsxs)("div", {
									className: C.detail,
									style: {
										position: "relative",
										top: 1
									},
									children: [(0, r.jsxs)(d.Text, {
										className: C.prefix,
										variant: "code",
										color: function(e) {
											switch (e) {
												case p.vB8.CREATE:
													return "text-feedback-positive";
												case p.vB8.DELETE:
													return "status-danger";
												default:
													return "text-feedback-warning"
											}
										}(o.actionType),
										children: [a < 10 ? "0".concat(a) : a, (0, r.jsx)("span", {
											className: C.dash,
											children: "—"
										})]
									}), (0, r.jsxs)("div", {
										className: C.change,
										children: [(0, r.jsx)("div", {
											className: C.changeStr,
											children: I
										}), null != s ? (0, r.jsx)("div", {
											children: s
										}) : null]
									})]
								}, a)
							}({
								changeItem: "function" == typeof N ? N(i) : N,
								subChanges: A,
								changeNumber: ++u,
								log: t,
								oldValue: s,
								newValue: a,
								change: i
							})
						})).filter(O.lm);
					return (0, r.jsx)(d.P3F, {
						onClick: i,
						className: s()(C.changeDetails, a),
						children: A
					})
				}, [t, n, i, a]);
				return l.useMemo(() => {
					switch (t.targetType) {
						case p.KFR.GUILD:
							return u(R.pY());
						case p.KFR.CHANNEL:
						case p.KFR.CHANNEL_OVERWRITE:
							return u(R.ML());
						case p.KFR.USER:
							return u(R.lU());
						case p.KFR.ROLE:
							return u(R.HE());
						case p.KFR.ONBOARDING_PROMPT:
							return u(R.oD());
						case p.KFR.GUILD_ONBOARDING:
							return u(R.EN());
						case p.KFR.HOME_SETTINGS:
							return u(R.hx());
						case p.KFR.INVITE:
							return u(R.HN());
						case p.KFR.WEBHOOK:
							return u(R.lR());
						case p.KFR.EMOJI:
							return u(R.N$());
						case p.KFR.STICKER:
							return u(R.Bq());
						case p.KFR.INTEGRATION:
							return u(R.K());
						case p.KFR.STAGE_INSTANCE:
							return u(R.C2());
						case p.KFR.GUILD_SCHEDULED_EVENT:
							return u(R.uB());
						case p.KFR.GUILD_SCHEDULED_EVENT_EXCEPTION:
							return u(R.pi());
						case p.KFR.THREAD:
							return u(R.pA());
						case p.KFR.APPLICATION_COMMAND:
							return u(R.vm(t.changes));
						case p.KFR.AUTO_MODERATION_RULE:
							return u(R.rK());
						case p.KFR.GUILD_SOUNDBOARD:
							return u(R.C0());
						case p.KFR.VOICE_CHANNEL_STATUS:
							return u(R.F1());
						case p.KFR.GUILD_MEMBER_VERIFICATION:
							return u(R.JA());
						case p.KFR.GUILD_PROFILE:
							return u(R.zT())
					}
				}, [t.targetType, t.changes, u])
			}
		},
		473403: function(e, t, n) {
			n.d(t, {
				ZP: () => P,
				_W: () => x,
				ge: () => L,
				je: () => M
			});
			var r = n(255367),
				l = n(73800),
				i = n(120356),
				s = n.n(i);
			if (12633 == n.j) var a = n(91192);
			var o = n(442837),
				u = n(481060),
				c = n(43267),
				E = n(933557),
				d = n(471445),
				_ = n(111028),
				A = n(727429),
				T = n(810123),
				I = n(690221),
				g = n(430824),
				m = n(158776),
				f = n(111583),
				O = n(594174),
				N = n(998502),
				h = n(981631),
				R = n(490897),
				p = n(915887),
				S = n(768107);

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
			let D = {
				SELECTED: S.modeSelected,
				CONNECTED: S.modeConnected,
				UNREAD_IMPORTANT: S.modeUnreadImportant,
				UNREAD_LESS_IMPORTANT: S.modeUnreadLessImportant,
				MUTED: S.modeMuted,
				LOCKED: S.modeLocked
			};

			function v(e) {
				e.preventDefault(), e.stopPropagation()
			}
			let U = N.ZP.getEnableHardwareAcceleration() ? u.Xo$ : u.qEK;

			function L(e) {
				let {
					channel: t,
					size: n = u.EFr.SIZE_20
				} = e;
				return (0, r.jsx)(U, {
					src: (0, c.x)(t),
					"aria-hidden": !0,
					size: n
				})
			}

			function M(e) {
				let {
					channel: t,
					size: n = u.EFr.SIZE_20
				} = e, l = (0, o.e7)([O.default], () => O.default.getUser(null == t ? void 0 : t.recipients[0])), i = (0, o.e7)([f.Z], () => !(null == l || null == t || t.isMultiUserDM()) && null != f.Z.getTypingUsers(null == t ? void 0 : t.id)[null == l ? void 0 : l.id]), {
					status: s,
					isMobile: a
				} = (0, o.cj)([m.Z], () => null == l || null == t || t.isMultiUserDM() ? {
					status: null,
					isMobile: !1
				} : {
					status: m.Z.getStatus(l.id),
					isMobile: m.Z.isMobileOnline(l.id)
				});
				return (0, r.jsx)(U, {
					size: n,
					src: null == l ? void 0 : l.getAvatarURL(void 0, 40),
					status: s,
					isMobile: a,
					isTyping: i,
					"aria-label": null == l ? void 0 : l.username,
					statusTooltip: !0
				})
			}
			let x = e => {
					let {
						className: t,
						containerClassName: n,
						channel: l,
						locked: i,
						hasActiveThreads: a,
						withGuildIcon: c
					} = e, E = (0, o.e7)([g.Z], () => g.Z.getGuild(l.guild_id), [l.guild_id]), _ = l.type === h.d4z.DM || l.type === h.d4z.GROUP_DM, A = null;
					if (c && null != E && !_) A = (0, r.jsx)(T.Z, {
						size: T.E.SMALL_32,
						className: S.iconContainerWithGuildIcon,
						iconClassName: S.iconWithGuildIcon,
						channel: l,
						guild: E,
						locked: i,
						hasActiveThreads: a
					});
					else {
						let e = function(e, t, n) {
							switch (e.type) {
								case h.d4z.DM:
									return function() {
										return (0, r.jsx)(M, {
											channel: e
										})
									};
								case h.d4z.GROUP_DM:
									return function() {
										return (0, r.jsx)(L, {
											channel: e
										})
									};
								default:
									return (0, d.KS)(e, t, n)
							}
						}(l, E, {
							locked: i,
							hasActiveThreads: a
						});
						if (null == e) return null;
						A = (0, r.jsx)(e, {
							color: "currentColor",
							className: s()(S.icon, t)
						})
					}
					let I = c ? null == E ? void 0 : E.name : (0, d.bT)(l, E, i, a),
						m = c && null != E ? "".concat(E.name, " - ").concat(I, " icon") : "".concat(I, " icon");
					return (0, r.jsx)(u.ua7, {
						text: I,
						delay: 500,
						children: e => (0, r.jsx)("div", b(C({}, e), {
							role: "img",
							"aria-label": m,
							className: s()(S.iconContainer, n),
							children: A
						}))
					})
				},
				P = 12633 == n.j ? l.forwardRef(function(e, t) {
					var n;
					let {
						channel: i,
						name: o,
						muted: c,
						selected: d,
						connected: T,
						unread: g,
						locked: m,
						hasActiveThreads: f,
						onClick: O,
						onMouseDown: N,
						onMouseUp: U,
						onContextMenu: L,
						connectDragPreview: M,
						className: P,
						iconClassName: j,
						subtitle: y,
						subtitleColor: w,
						channel: {
							type: G
						},
						onMouseEnter: z,
						onMouseLeave: Z,
						"aria-label": B,
						children: F,
						guild: V,
						channelTypeOverride: H,
						forceInteractable: k,
						mentionCount: K,
						resolvedUnreadSetting: W,
						isFavoriteSuggestion: q,
						withGuildIcon: Y,
						hasActiveEvent: J = !1
					} = e, X = W === R.i.ALL_MESSAGES || null != K && K > 0, Q = (0, a.JA)(i.id), {
						role: $
					} = Q, ee = function(e, t) {
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
					}(Q, ["role"]), et = l.useRef(null), en = l.useRef(null), er = (0, A.Z)(i), el = h.Z5c.CHANNEL(er, i.id), ei = (0, E.ZP)(i), es = i.isGuildVocal(), ea = (0, r.jsx)("div", {
						className: s()({
							[S.favoritesSuggestion]: q
						}),
						ref: en,
						children: (0, r.jsxs)(I.Z, b(C({
							role: es && !T ? "button" : "link",
							href: es ? void 0 : el,
							target: "_blank",
							ref: et,
							className: S.link,
							onClick: () => null == O ? void 0 : O(i)
						}, ee), {
							"aria-label": B,
							focusProps: {
								enabled: !1
							},
							children: [(0, r.jsxs)("div", {
								className: S.linkTop,
								children: [(0, r.jsx)(x, {
									className: j,
									channel: i,
									guild: V,
									hasActiveThreads: f,
									locked: m,
									withGuildIcon: Y
								}), (0, r.jsx)(_.Z, {
									className: s()(S.name, {
										[S.activeEvent]: J
									}),
									"aria-hidden": !0,
									children: null == o ? ei : o
								}), l.Children.count(F) > 0 ? (0, r.jsx)("div", {
									onClick: v,
									className: S.children,
									children: F
								}) : null]
							}), null != y ? (0, r.jsx)("div", {
								className: s()(S.linkBottom, {
									[S.withGuildIcon]: Y
								}),
								children: (0, r.jsx)(u.Text, {
									color: null != w ? w : "text-muted",
									variant: "text-xs/medium",
									className: S.subtitle,
									children: y
								})
							}) : null]
						}))
					});
					return (0, r.jsx)(u.tEY, {
						focusTarget: et,
						ringTarget: en,
						offset: {
							top: 2,
							bottom: 2,
							right: 4
						},
						children: (0, r.jsxs)("div", {
							ref: t,
							className: s()(P, null != O || null != U || null != N || k ? S.wrapper : S.notInteractive, (() => {
								if (d) return s()(p.selectedChannel, D.SELECTED);
								if (T) return s()(p.selectedChannel, D.CONNECTED);
								if (m) return D.LOCKED;
								if (c) return D.MUTED;
								if (g)
									if (X) return D.UNREAD_IMPORTANT;
									else return D.UNREAD_LESS_IMPORTANT;
								return null
							})(), function(e) {
								switch (e) {
									case h.d4z.GUILD_STAGE_VOICE:
									case h.d4z.GUILD_VOICE:
										return S.typeVoice;
									case h.d4z.ANNOUNCEMENT_THREAD:
									case h.d4z.PUBLIC_THREAD:
									case h.d4z.PRIVATE_THREAD:
										return S.typeThread;
									case h.d4z.GUILD_ANNOUNCEMENT:
									case h.d4z.GUILD_TEXT:
									case h.d4z.GUILD_STORE:
									case h.d4z.GUILD_FORUM:
									case h.d4z.GUILD_MEDIA:
									default:
										return S.typeDefault
								}
							}(null != H ? H : G)),
							onMouseUp: e => null == U ? void 0 : U(e, i),
							onMouseDown: e => null == N ? void 0 : N(e, i),
							onContextMenu: e => null == L ? void 0 : L(e, i),
							onMouseEnter: z,
							onMouseLeave: Z,
							children: [c || !g ? null : (0, r.jsx)("div", {
								className: s()(S.unread, X ? S.unreadImportant : void 0)
							}), null != (n = null == M ? void 0 : M(ea)) ? n : ea]
						})
					})
				}) : null
		},
		216306: function(e, t, n) {
			n.d(t, {
				Fo: () => b,
				KY: () => D,
				Uo: () => v,
				fU: () => L,
				qw: () => M,
				tn: () => U
			}), n(290780);
			var r = n(73800),
				l = n(658722),
				i = n.n(l),
				s = n(913527),
				a = n.n(s),
				o = n(442837),
				u = n(704215),
				c = n(45114),
				E = n(740504),
				d = n(266454),
				_ = n(931261),
				A = n(540126),
				T = n(671098),
				I = n(703656),
				g = n(592125),
				m = n(324067),
				f = n(306680),
				O = n(709054),
				N = n(981631),
				h = n(176505),
				R = n(443063),
				p = n(490897),
				S = n(388032);

			function C(e, t) {
				e.index = t
			}

			function b(e, t, n, l) {
				l = l.toLowerCase();
				let s = (0, _.g)(e),
					a = r.useCallback((e, t) => !(s && e.channel.hasFlag(h.zZ.IS_GUILD_RESOURCE_CHANNEL)) && e.channel.type !== N.d4z.GUILD_DIRECTORY && (0 === t.length || i()(t, e.channel.name.toLowerCase()) || e.channel.topic.toLowerCase().includes(t)), [s]);
				return r.useMemo(() => {
					let e = {
						null: [],
						_categories: []
					};
					return n[N.d4z.GUILD_CATEGORY].forEach(n => {
						let {
							channel: r
						} = n;
						"null" === r.id && (e.null = t.null.filter(e => a(e, l))), e[r.id] = t[r.id].filter(e => a(e, l))
					}), e._categories = t._categories.filter(t => "null" === t.channel.id || 0 === l.length || e[t.channel.id].length > 0), (0, E.Z)(e._categories, e).forEach(C), e
				}, [t, n, a, l])
			}

			function D(e) {
				let t = e.getSections(!1);
				if (t[A.wZ] > 0) switch (e.getGuildActionSection().getRow(0)) {
					case R.z.GUILD_HOME:
						return h.oC.GUILD_HOME;
					case R.z.GUILD_ROLE_SUBSCRIPTIONS:
						return h.oC.ROLE_SUBSCRIPTIONS
				}
				for (let r = A.wd; r < e.voiceChannelsSectionNumber; r++)
					if (t[r] > 0) {
						var n;
						let t = null == (n = e.getChannelFromSectionRow(r, 0)) ? void 0 : n.channel;
						if (null != t) return t.id
					} return null
			}

			function v(e, t) {
				let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
				(0, T.n)(e, t), (0, c.y5)(t.map(e => ({
					channelId: e,
					readStateType: p.W.CHANNEL,
					messageId: f.ZP.lastMessageId(e)
				}))), null != n && (0, I.uL)(N.Z5c.CHANNEL(e, n))
			}

			function U(e, t, n, r) {
				let l = (0, d.Nj)(u.z.CHANNEL_BROWSER_NUX),
					i = (0, o.cj)([g.Z], () => {
						let t = {},
							n = g.Z.getMutableGuildChannelsForGuild(e);
						for (let e in n) {
							let {
								parent_id: l
							} = n[e];
							if (null != l) {
								var r;
								t[l] = (null != (r = t[l]) ? r : 0) + 1
							}
						}
						return t
					}, [e]),
					s = t._categories.map(e => {
						let r = t[e.channel.id];
						return {
							rowCount: "null" !== e.channel.id && 0 === i[e.channel.id] ? 1 : r.length,
							rowHeight: 0 === r.length ? 0 : n
						}
					});
				return l || null == r || s.unshift({
					rowCount: 1,
					rowHeight: r
				}), s
			}

			function L(e) {
				var t, n;
				let r = (0, o.e7)([m.Z], () => m.Z.getCategories(e)),
					l = r._categories.length,
					i = r._categories[r._categories.length - 1];
				if (null == i) return 0;
				let s = r[null != (n = null == (t = i.channel) ? void 0 : t.id) ? n : "null"];
				return null == s ? 0 : 0 === s.length ? i.index + 2 - l : s[s.length - 1].index + 2 - l
			}

			function M(e) {
				var t;
				return S.intl.formatToPlainString(S.t["8N0BHR"], {
					timeAgo: a()(O.default.extractTimestamp(null != (t = f.ZP.lastMessageId(e)) ? t : e)).fromNow()
				})
			}
		},
		524329: function(e, t, n) {
			n.d(t, {
				Es: () => E,
				RM: () => a,
				VP: () => c,
				Xb: () => o,
				sm: () => u,
				y0: () => s
			}), n(953529);
			var r = n(544891),
				l = n(570140),
				i = n(981631);
			let s = function(e) {
					let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
					l.Z.dispatch({
						type: "WELCOME_SCREEN_VIEW",
						guildId: e,
						isLurking: t
					})
				},
				a = async e => {
					l.Z.dispatch({
						type: "WELCOME_SCREEN_FETCH_START"
					});
					try {
						let t = await r.tn.get({
							url: i.ANM.GUILD_WELCOME_SCREEN(e),
							oldFormErrors: !0,
							rejectWithError: !0
						});
						return l.Z.dispatch({
							type: "WELCOME_SCREEN_FETCH_SUCCESS",
							guildId: e,
							welcomeScreen: t.body
						}), t.body
					} catch (e) {
						l.Z.dispatch({
							type: "WELCOME_SCREEN_FETCH_FAIL"
						})
					}
				}, o = () => {
					l.Z.dispatch({
						type: "WELCOME_SCREEN_SETTINGS_RESET"
					})
				}, u = () => {
					l.Z.dispatch({
						type: "WELCOME_SCREEN_SETTINGS_CLEAR"
					})
				}, c = e => {
					l.Z.dispatch({
						type: "WELCOME_SCREEN_SETTINGS_UPDATE",
						settings: e
					})
				}, E = async (e, t) => {
					l.Z.dispatch({
						type: "WELCOME_SCREEN_SUBMIT"
					});
					try {
						let n = await r.tn.patch({
							url: i.ANM.GUILD_WELCOME_SCREEN(e),
							body: {
								description: t.description,
								welcome_channels: t.channels,
								enabled: t.enabled
							},
							oldFormErrors: !0,
							rejectWithError: !0
						});
						l.Z.dispatch({
							type: "WELCOME_SCREEN_SUBMIT_SUCCESS",
							guildId: e,
							welcomeScreen: n.body
						})
					} catch (e) {
						l.Z.dispatch({
							type: "WELCOME_SCREEN_SUBMIT_FAILURE"
						})
					}
				}
		},
		995532: function(e, t, n) {
			n.d(t, {
				Z: () => g,
				a: () => o
			});
			var r, l, i, s = n(442837),
				a = n(570140);
			let o = {},
				u = {},
				c = {},
				E = !1,
				d = !1,
				_ = !1;

			function A(e) {
				let {
					guild: t
				} = e.invite;
				return (null == t ? void 0 : t.welcome_screen) != null && (u[t.id] = t.welcome_screen, !0)
			}

			function T(e) {
				let {
					welcomeScreen: t,
					guildId: n
				} = e;
				u[n] = null != t ? t : o
			}
			class I extends(i = s.ZP.Store) {
				get(e) {
					if (null != e) return u[e]
				}
				isFetching() {
					return d
				}
				hasError() {
					return _
				}
				hasSeen(e) {
					let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
					return null != e && (t ? E : c[e] || !1)
				}
				isEmpty(e) {
					if (null == e) return !0;
					let t = u[e];
					return null == t || 0 === t.welcome_channels.length
				}
			}
			l = "WelcomeScreenStore", (r = "displayName") in I ? Object.defineProperty(I, r, {
				value: l,
				enumerable: !0,
				configurable: !0,
				writable: !0
			}) : I[r] = l;
			let g = new I(a.Z, {
				INVITE_RESOLVE_SUCCESS: A,
				INVITE_ACCEPT_SUCCESS: A,
				WELCOME_SCREEN_SUBMIT_SUCCESS: T,
				WELCOME_SCREEN_UPDATE: T,
				WELCOME_SCREEN_VIEW: function(e) {
					let {
						guildId: t,
						isLurking: n
					} = e;
					c[t] = !0, n && (E = !0)
				},
				GUILD_STOP_LURKING: function() {
					E = !1
				},
				GUILD_DELETE: function(e) {
					let {
						guild: {
							id: t
						}
					} = e;
					c[t] = !1
				},
				WELCOME_SCREEN_FETCH_START: function() {
					d = !0, _ = !1
				},
				WELCOME_SCREEN_FETCH_SUCCESS: function(e) {
					d = !1, _ = !1;
					let {
						welcomeScreen: t,
						guildId: n
					} = e;
					u[n] = null != t ? t : o
				},
				WELCOME_SCREEN_FETCH_FAIL: function() {
					d = !1, _ = !0
				}
			})
		},
		387667: function(e, t, n) {
			n.d(t, {
				Pw: () => E,
				ZP: () => A,
				ms: () => d,
				p5: () => c
			});
			var r = n(913527),
				l = n.n(r),
				i = n(81825),
				s = n(960048),
				a = n(709054),
				o = n(981631);

			function u(e, t, n) {
				return t in e ? Object.defineProperty(e, t, {
					value: n,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : e[t] = n, e
			}

			function c(e) {
				if (e === o.rsA.ALL) return o.KFR.ALL;
				if (e <= o.rsA.GUILD_UPDATE) return o.KFR.GUILD;
				if (e <= o.rsA.CHANNEL_DELETE || e === o.rsA.MESSAGE_BULK_DELETE) return o.KFR.CHANNEL;
				if (e <= o.rsA.CHANNEL_OVERWRITE_DELETE) return o.KFR.CHANNEL_OVERWRITE;
				if (e <= o.rsA.BOT_ADD || e === o.rsA.MESSAGE_DELETE || e === o.rsA.MESSAGE_PIN || e === o.rsA.MESSAGE_UNPIN) return o.KFR.USER;
				else if (e <= o.rsA.ROLE_DELETE) return o.KFR.ROLE;
				else if (e <= o.rsA.INVITE_DELETE) return o.KFR.INVITE;
				else if (e <= o.rsA.WEBHOOK_DELETE) return o.KFR.WEBHOOK;
				else if (e <= o.rsA.EMOJI_DELETE) return o.KFR.EMOJI;
				else if (e <= o.rsA.INTEGRATION_DELETE) return o.KFR.INTEGRATION;
				else if (e <= o.rsA.STAGE_INSTANCE_DELETE) return o.KFR.STAGE_INSTANCE;
				else if (e <= o.rsA.STICKER_DELETE) return o.KFR.STICKER;
				else if (e <= o.rsA.GUILD_SCHEDULED_EVENT_DELETE) return o.KFR.GUILD_SCHEDULED_EVENT;
				else if (e <= o.rsA.THREAD_DELETE) return o.KFR.THREAD;
				else if (e === o.rsA.APPLICATION_COMMAND_PERMISSION_UPDATE) return o.KFR.APPLICATION_COMMAND;
				else if (e <= o.rsA.SOUNDBOARD_SOUND_DELETE) return o.KFR.GUILD_SOUNDBOARD;
				else if (e < o.rsA.AUTO_MODERATION_BLOCK_MESSAGE) return o.KFR.AUTO_MODERATION_RULE;
				else if (e === o.rsA.AUTO_MODERATION_BLOCK_MESSAGE) return o.KFR.USER;
				else if (e === o.rsA.AUTO_MODERATION_FLAG_TO_CHANNEL) return o.KFR.USER;
				else if (e === o.rsA.AUTO_MODERATION_USER_COMMUNICATION_DISABLED) return o.KFR.USER;
				else if (e === o.rsA.AUTO_MODERATION_QUARANTINE_USER) return o.KFR.USER;
				else if (e <= o.rsA.CREATOR_MONETIZATION_TERMS_ACCEPTED) return o.KFR.GUILD;
				else if (e <= o.rsA.ONBOARDING_PROMPT_DELETE) return o.KFR.ONBOARDING_PROMPT;
				else if (e <= o.rsA.ONBOARDING_UPDATE) return o.KFR.GUILD_ONBOARDING;
				else if (e <= o.rsA.GUILD_HOME_REMOVE_ITEM) return o.KFR.GUILD_HOME;
				else if (e <= o.rsA.HARMFUL_LINKS_BLOCKED_MESSAGE) return o.KFR.GUILD;
				else if (e <= o.rsA.HOME_SETTINGS_UPDATE) return o.KFR.HOME_SETTINGS;
				else if (e <= o.rsA.VOICE_CHANNEL_STATUS_DELETE) return o.KFR.VOICE_CHANNEL_STATUS;
				else if (e <= o.rsA.GUILD_SCHEDULED_EVENT_EXCEPTION_DELETE) return o.KFR.GUILD_SCHEDULED_EVENT_EXCEPTION;
				else if (e <= o.rsA.GUILD_MEMBER_VERIFICATION_UPDATE) return o.KFR.GUILD_MEMBER_VERIFICATION;
				else if (e <= o.rsA.GUILD_PROFILE_UPDATE) return o.KFR.GUILD_PROFILE;
				return s.Z.captureMessage("Unknown target type for: ".concat(e)), o.KFR.UNKNOWN
			}

			function E(e) {
				switch (e) {
					case o.rsA.CHANNEL_CREATE:
					case o.rsA.CHANNEL_OVERWRITE_CREATE:
					case o.rsA.MEMBER_BAN_REMOVE:
					case o.rsA.ROLE_CREATE:
					case o.rsA.INVITE_CREATE:
					case o.rsA.WEBHOOK_CREATE:
					case o.rsA.EMOJI_CREATE:
					case o.rsA.STICKER_CREATE:
					case o.rsA.MESSAGE_PIN:
					case o.rsA.BOT_ADD:
					case o.rsA.INTEGRATION_CREATE:
					case o.rsA.STAGE_INSTANCE_CREATE:
					case o.rsA.GUILD_SCHEDULED_EVENT_CREATE:
					case o.rsA.THREAD_CREATE:
					case o.rsA.AUTO_MODERATION_RULE_CREATE:
					case o.rsA.CREATOR_MONETIZATION_REQUEST_CREATED:
					case o.rsA.ONBOARDING_PROMPT_CREATE:
					case o.rsA.ONBOARDING_CREATE:
					case o.rsA.GUILD_HOME_FEATURE_ITEM:
					case o.rsA.SOUNDBOARD_SOUND_CREATE:
					case o.rsA.HOME_SETTINGS_CREATE:
					case o.rsA.VOICE_CHANNEL_STATUS_CREATE:
						return o.vB8.CREATE;
					case o.rsA.CHANNEL_DELETE:
					case o.rsA.CHANNEL_OVERWRITE_DELETE:
					case o.rsA.MEMBER_KICK:
					case o.rsA.MEMBER_PRUNE:
					case o.rsA.MEMBER_BAN_ADD:
					case o.rsA.ROLE_DELETE:
					case o.rsA.INVITE_DELETE:
					case o.rsA.WEBHOOK_DELETE:
					case o.rsA.EMOJI_DELETE:
					case o.rsA.STICKER_DELETE:
					case o.rsA.MESSAGE_DELETE:
					case o.rsA.MESSAGE_BULK_DELETE:
					case o.rsA.MESSAGE_UNPIN:
					case o.rsA.INTEGRATION_DELETE:
					case o.rsA.MEMBER_DISCONNECT:
					case o.rsA.STAGE_INSTANCE_DELETE:
					case o.rsA.GUILD_SCHEDULED_EVENT_DELETE:
					case o.rsA.GUILD_SCHEDULED_EVENT_EXCEPTION_DELETE:
					case o.rsA.THREAD_DELETE:
					case o.rsA.AUTO_MODERATION_BLOCK_MESSAGE:
					case o.rsA.AUTO_MODERATION_RULE_DELETE:
					case o.rsA.ONBOARDING_PROMPT_DELETE:
					case o.rsA.GUILD_HOME_REMOVE_ITEM:
					case o.rsA.SOUNDBOARD_SOUND_DELETE:
					case o.rsA.VOICE_CHANNEL_STATUS_DELETE:
						return o.vB8.DELETE;
					case o.rsA.GUILD_UPDATE:
					case o.rsA.CHANNEL_UPDATE:
					case o.rsA.CHANNEL_OVERWRITE_UPDATE:
					case o.rsA.MEMBER_UPDATE:
					case o.rsA.MEMBER_ROLE_UPDATE:
					case o.rsA.ROLE_UPDATE:
					case o.rsA.INVITE_UPDATE:
					case o.rsA.WEBHOOK_UPDATE:
					case o.rsA.EMOJI_UPDATE:
					case o.rsA.STICKER_UPDATE:
					case o.rsA.INTEGRATION_UPDATE:
					case o.rsA.MEMBER_MOVE:
					case o.rsA.STAGE_INSTANCE_UPDATE:
					case o.rsA.GUILD_SCHEDULED_EVENT_UPDATE:
					case o.rsA.GUILD_SCHEDULED_EVENT_EXCEPTION_CREATE:
					case o.rsA.GUILD_SCHEDULED_EVENT_EXCEPTION_UPDATE:
					case o.rsA.THREAD_UPDATE:
					case o.rsA.APPLICATION_COMMAND_PERMISSION_UPDATE:
					case o.rsA.CREATOR_MONETIZATION_TERMS_ACCEPTED:
					case o.rsA.AUTO_MODERATION_RULE_UPDATE:
					case o.rsA.AUTO_MODERATION_FLAG_TO_CHANNEL:
					case o.rsA.AUTO_MODERATION_USER_COMMUNICATION_DISABLED:
					case o.rsA.AUTO_MODERATION_QUARANTINE_USER:
					case o.rsA.ONBOARDING_PROMPT_UPDATE:
					case o.rsA.ONBOARDING_UPDATE:
					case o.rsA.SOUNDBOARD_SOUND_UPDATE:
					case o.rsA.HOME_SETTINGS_UPDATE:
					case o.rsA.GUILD_MEMBER_VERIFICATION_UPDATE:
					case o.rsA.GUILD_PROFILE_UPDATE:
						return o.vB8.UPDATE
				}
				return o.vB8.ALL
			}
			class d {
				constructor(e, t, n) {
					u(this, "key", void 0), u(this, "oldValue", void 0), u(this, "newValue", void 0), u(this, "subtarget", void 0), this.key = e, this.oldValue = t, this.newValue = n
				}
			}
			class _ extends i.Z {
				constructor(e) {
					var t, n, r, i, s, o;
					super(), u(this, "id", void 0), u(this, "actionType", void 0), u(this, "action", void 0), u(this, "targetType", void 0), u(this, "targetId", void 0), u(this, "target", void 0), u(this, "userId", void 0), u(this, "changes", void 0), u(this, "timestampStart", void 0), u(this, "timestampEnd", void 0), u(this, "user", void 0), u(this, "options", void 0), this.id = e.id, this.action = e.action, this.actionType = E(this.action), this.targetId = e.targetId, this.timestampStart = null != (t = e.timestampStart) ? t : l()(a.default.extractTimestamp(this.id)), this.timestampEnd = null != (n = e.timestampEnd) ? n : this.timestampStart, this.userId = e.userId, this.changes = null != (r = e.changes) ? r : [], this.targetType = c(this.action), this.options = null != (i = e.options) ? i : {}, this.target = null != (s = e.target) ? s : e.id, this.user = null != (o = e.user) ? o : null
				}
			}
			let A = _
		},
		785195: function(e, t, n) {
			n.d(t, {
				Z: () => i
			});
			var r = n(255367);
			n(73800);
			var l = n(325767);

			function i(e) {
				var t, n, {
						width: i = 24,
						height: s = 24,
						color: a = "currentColor",
						foreground: o
					} = e,
					u = function(e, t) {
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
					}(e, ["width", "height", "color", "foreground"]);
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
				}({}, (0, l.Z)(u)), n = n = {
					width: i,
					height: s,
					viewBox: "0 0 24 24",
					children: [(0, r.jsx)("path", {
						d: "M20.414 2.58599C21.195 3.36699 21.195 4.63299 20.414 5.41399L14.051 11.779L11.222 8.94999L17.586 2.58599C18.367 1.80499 19.633 1.80499 20.414 2.58599Z",
						className: o,
						fill: a
					}), (0, r.jsx)("path", {
						d: "M13.622 15.035L6.552 16.449L7.966 9.378L13.344 4H4C2.897 4 2 4.898 2 6V20C2 21.103 2.897 22 4 22H18C19.103 22 20 21.103 20 20V8.656L13.622 15.035Z",
						className: o,
						fill: a
					}), (0, r.jsx)("path", {
						d: "M9.80801 10.365L12.636 13.192L9.10101 13.899L9.80801 10.365Z",
						className: o,
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
		777288: function(e, t, n) {
			n.d(t, {
				Z: () => i
			});
			var r = n(255367);
			n(73800);
			var l = n(325767);

			function i(e) {
				var t, n, {
						width: i = 16,
						height: s = 16,
						color: a = "currentColor",
						foreground: o
					} = e,
					u = function(e, t) {
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
					}(e, ["width", "height", "color", "foreground"]);
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
				}({}, (0, l.Z)(u)), n = n = {
					width: i,
					height: s,
					viewBox: "0 0 16 16",
					fill: "none",
					xmlns: "http://www.w3.org/2000/svg",
					children: [(0, r.jsx)("path", {
						d: "M8 6.66659C9.47275 6.66659 10.6667 5.47268 10.6667 3.99992C10.6667 2.52716 9.47275 1.33325 8 1.33325C6.52724 1.33325 5.33333 2.52716 5.33333 3.99992C5.33333 5.47268 6.52724 6.66659 8 6.66659Z",
						className: null != o ? o : void 0,
						fill: a
					}), (0, r.jsx)("path", {
						d: "M7.67717 7.33325C4.16709 7.33325 1.32161 10.1787 1.32161 13.6888C1.32161 14.2288 1.75938 14.6666 2.29939 14.6666H2.44652C2.60638 14.6666 2.74261 14.5527 2.78231 14.3979C2.97253 13.656 3.34264 12.9517 3.66169 12.4585C3.75185 12.3191 3.94872 12.3955 3.9322 12.5607L3.75826 14.3001C3.73864 14.4963 3.89273 14.6666 4.08994 14.6666H10.1602C9.75 13.8828 9.74609 12.9922 9.71094 12.7266V12.0664C9.71094 11.8086 9.84375 11.2539 10.2109 10.9648C10.4926 10.7431 10.9084 10.4775 11.1914 10.2969C11.0898 10.3555 11.3419 10.2008 11.1914 10.2969C11.3906 10.168 11.8047 9.91016 12.0234 9.78516C12.4023 9.58594 12.5625 9.5 13.082 9.5C12.2578 8.48047 10.4879 7.33325 8.29939 7.33325H7.67717Z",
						className: null != o ? o : void 0,
						fill: a
					}), (0, r.jsx)("path", {
						"fill-rule": "evenodd",
						"clip-rule": "evenodd",
						d: "M11.0366 11.5588C10.8379 11.6803 10.7166 11.8965 10.7166 12.1294V12.7063C10.7166 14.1173 11.5476 15.396 12.8371 15.9691C12.9294 16.0102 13.0348 16.0102 13.1271 15.9691C14.4166 15.396 15.2476 14.1173 15.2476 12.7063V12.1294C15.2476 11.8965 15.1263 11.6803 14.9275 11.5588L13.3759 10.6106C13.1341 10.4628 12.8301 10.4628 12.5883 10.6106L11.0366 11.5588ZM11.4718 12.1779L12.9821 11.2549V13.2647H11.5276C11.4909 13.0831 11.4718 12.8962 11.4718 12.7063V12.1779ZM12.9821 15.201L12.9821 13.2647H14.4366C14.2698 14.0894 13.7393 14.805 12.9821 15.201Z",
						className: null != o ? o : void 0,
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
		536402: function(e, t, n) {
			n.d(t, {
				w: () => l
			}), n(388685);
			var r, l = ((r = {}).MESSAGE = "message", r.FORUM_POST = "forum_post", r.MESSAGE_BUNDLE = "message_bundle", r.CONVERSATION = "conversation", r)
		},
		78248: function(e, t, n) {
			e.exports = {
				root: "root__48c1c",
				role: "role__48c1c",
				roleRemoveButton: "roleRemoveButton__48c1c",
				roleRemoveButtonCanRemove: "roleRemoveButtonCanRemove__48c1c",
				roleDot: "roleDot__48c1c",
				roleFlowerStar: "roleFlowerStar__48c1c",
				roleRemoveIcon: "roleRemoveIcon__48c1c",
				roleRemoveIconFocused: "roleRemoveIconFocused__48c1c",
				roleVerifiedIcon: "roleVerifiedIcon__48c1c",
				roleName: "roleName__48c1c",
				roleNameOverflow: "roleNameOverflow__48c1c",
				actionButton: "actionButton__48c1c role__48c1c",
				overflowButton: "overflowButton__48c1c actionButton__48c1c role__48c1c",
				addButton: "addButton__48c1c actionButton__48c1c role__48c1c",
				addButtonIcon: "addButtonIcon__48c1c",
				overflowRolesPopout: "overflowRolesPopout__48c1c",
				overflowRolesPopoutArrowWrapper: "overflowRolesPopoutArrowWrapper__48c1c",
				overflowRolesPopoutArrow: "overflowRolesPopoutArrow__48c1c",
				popoutBottom: "popoutBottom__48c1c",
				popoutTop: "popoutTop__48c1c",
				overflowRolesPopoutHeader: "overflowRolesPopoutHeader__48c1c",
				overflowRolesPopoutHeaderIcon: "overflowRolesPopoutHeaderIcon__48c1c",
				overflowRolesPopoutHeaderText: "overflowRolesPopoutHeaderText__48c1c",
				roleIcon: "roleIcon__48c1c"
			}
		},
		516459: function(e, t, n) {
			e.exports = {
				container: "container__4f074",
				input: "input__4f074",
				outer: "outer__4f074"
			}
		},
		910788: function(e, t, n) {
			e.exports = {
				container: "container__0e476",
				inner: "inner__0e476",
				disabled: "disabled__0e476",
				input: "input__0e476",
				tag: "tag__0e476",
				small: "small__0e476",
				medium: "medium__0e476",
				large: "large__0e476",
				richTag: "richTag__0e476",
				richTagInput: "richTagInput__0e476",
				tagLabel: "tagLabel__0e476",
				tagRoleColor: "tagRoleColor__0e476",
				close: "close__0e476"
			}
		},
		559297: function(e, t, n) {
			n.r(e.exports = {
				pill: "pill_a2c9e8",
				clickable: "clickable_a2c9e8",
				disabled: "disabled_a2c9e8",
				small: "small_a2c9e8",
				selected: "selected_a2c9e8",
				danger: "danger_a2c9e8",
				success: "success_a2c9e8",
				warning: "warning_a2c9e8",
				emoji: "emoji_a2c9e8",
				closeCircle: "closeCircle_a2c9e8 emoji_a2c9e8",
				close: "close_a2c9e8",
				tooltipPill: "tooltipPill_a2c9e8"
			})
		},
		292895: function(e, t, n) {
			e.exports = {
				icon: "icon__2894c",
				iconWithGuildIcon: "iconWithGuildIcon__2894c",
				channelGuildIcon: "channelGuildIcon__2894c",
				acronym: "acronym__2894c"
			}
		},
		466745: function(e, t, n) {
			e.exports = {
				actionContainer: "actionContainer_bc4513",
				actionIconContainer: "actionIconContainer_bc4513",
				actionIcon: "actionIcon_bc4513",
				actionTextContainer: "actionTextContainer_bc4513",
				actionTextHeader: "actionTextHeader_bc4513",
				actionTextHelper: "actionTextHelper_bc4513"
			}
		},
		50767: function(e, t, n) {
			e.exports = {
				sidebarContainer: "sidebarContainer__656be",
				loadingContainer: "loadingContainer__656be",
				profileThemedContainer: "profileThemedContainer__656be",
				innerContainer: "innerContainer__656be"
			}
		},
		792461: function(e, t, n) {
			e.exports = {
				keyComboInner: "keyComboInner__15c82",
				keyComboContainer: "keyComboContainer__15c82",
				backButton: "backButton__15c82"
			}
		},
		54433: function(e, t, n) {
			e.exports = {
				auditLogItem: "auditLogItem_b2f52f",
				auditLogItemTitleContainer: "auditLogItemTitleContainer_b2f52f",
				auditLogItemTitle: "auditLogItemTitle_b2f52f",
				username: "username_b2f52f",
				auditLogItemDate: "auditLogItemDate_b2f52f",
				auditLogReason: "auditLogReason_b2f52f",
				auditLogSecondaryContainer: "auditLogSecondaryContainer_b2f52f",
				auditLogSecondary: "auditLogSecondary_b2f52f",
				auditLogExpandedChangeDetails: "auditLogExpandedChangeDetails_b2f52f"
			}
		},
		44946: function(e, t, n) {
			e.exports = {
				modInfoItemContainer: "modInfoItemContainer__96c0b",
				modInfoItem: "modInfoItem__96c0b",
				modInfoItemIcon: "modInfoItemIcon__96c0b",
				modInfoItemName: "modInfoItemName__96c0b",
				modInfoItemDescription: "modInfoItemDescription__96c0b",
				modInfoAction: "modInfoAction__96c0b",
				modInfoItemActionIcon: "modInfoItemActionIcon__96c0b"
			}
		},
		514983: function(e, t, n) {
			e.exports = {
				roleTooltipContainer: "roleTooltipContainer__1ef77",
				roleTooltipContentContainer: "roleTooltipContentContainer__1ef77",
				roleTooltipItem: "roleTooltipItem__1ef77",
				permissionsContainer: "permissionsContainer__1ef77",
				permissionChiplet: "permissionChiplet__1ef77",
				noModPerms: "noModPerms__1ef77",
				elevatedPermission: "elevatedPermission__1ef77",
				headerContainer: "headerContainer__1ef77",
				viewAllPermissions: "viewAllPermissions__1ef77"
			}
		},
		12740: function(e, t, n) {
			e.exports = {
				container: "container__3a5a1",
				innerContainer: "innerContainer__3a5a1",
				keyComboInner: "keyComboInner__3a5a1",
				keyComboContainer: "keyComboContainer__3a5a1",
				header: "header__3a5a1",
				headerTitle: "headerTitle__3a5a1",
				infoTitle: "infoTitle__3a5a1",
				roleContainer: "roleContainer__3a5a1",
				highestRole: "highestRole__3a5a1",
				addRoleIcon: "addRoleIcon__3a5a1",
				roleTooltipItem: "roleTooltipItem__3a5a1",
				addRoleContainer: "addRoleContainer__3a5a1",
				guildIcon: "guildIcon__3a5a1",
				loadingSpinner: "loadingSpinner__3a5a1",
				noRoles: "noRoles__3a5a1"
			}
		},
		450355: function(e, t, n) {
			e.exports = {
				innerContainer: "innerContainer__39de8"
			}
		},
		444021: function(e, t, n) {
			e.exports = {
				permissionsGroupContainer: "permissionsGroupContainer__3f11f",
				permissionItemContainer: "permissionItemContainer__3f11f",
				permissionsItemContainer: "permissionsItemContainer__3f11f",
				elevatedPermission: "elevatedPermission__3f11f",
				permissionItemHeader: "permissionItemHeader__3f11f",
				permissionItemSubheader: "permissionItemSubheader__3f11f",
				elevatedPermissionContainer: "elevatedPermissionContainer__3f11f",
				permissionItemDescription: "permissionItemDescription__3f11f",
				permissionItemRoleContainer: "permissionItemRoleContainer__3f11f",
				permissionTitle: "permissionTitle__3f11f",
				roleTooltipItem: "roleTooltipItem__3f11f",
				editable: "editable__3f11f",
				roleChiplet: "roleChiplet__3f11f",
				searchBar: "searchBar__3f11f"
			}
		},
		157092: function(e, t, n) {
			e.exports = {
				container: "container__34940",
				topRow: "topRow__34940",
				memberNameAndTagContainer: "memberNameAndTagContainer__34940",
				memberNameContainer: "memberNameContainer__34940",
				memberNameTextContainer: "memberNameTextContainer__34940",
				memberClanTag: "memberClanTag__34940",
				memberClanTagContainer: "memberClanTagContainer__34940",
				memberAvatar: "memberAvatar__34940",
				closeAction: "closeAction__34940",
				bottomRow: "bottomRow__34940",
				bottomRowAction: "bottomRowAction__34940",
				innerBottomRowAction: "innerBottomRowAction__34940",
				bottomRowActionDisabled: "bottomRowActionDisabled__34940"
			}
		},
		615133: function(e, t, n) {
			e.exports = {
				inviteContainer: "inviteContainer__23437",
				inviterTooltipContainer: "inviterTooltipContainer__23437",
				robot: "robot__23437",
				integrationIcon: "integrationIcon__23437",
				unknownInvite: "unknownInvite__23437",
				inviterFooter: "inviterFooter__23437",
				inviterUserContainer: "inviterUserContainer__23437",
				clickable: "clickable__23437",
				footerAlignment: "footerAlignment__23437"
			}
		},
		677234: function(e, t, n) {
			n.r(e.exports = {
				auditLog: "auditLog__43dab",
				divider: "divider__43dab",
				header: "header__43dab",
				headerDefault: "headerDefault__43dab header__43dab",
				headerClickable: "headerClickable__43dab header__43dab",
				headerExpanded: "headerExpanded__43dab header__43dab",
				timeWrap: "timeWrap__43dab",
				title: "title__43dab",
				avatar: "avatar__43dab",
				expand: "expand__43dab",
				expandForeground: "expandForeground__43dab",
				colorsHook: "colorsHook__43dab",
				colorHook: "colorHook__43dab",
				userHook: "userHook__43dab",
				changeDetails: "changeDetails__43dab",
				detail: "detail__43dab",
				prefix: "prefix__43dab",
				typeCreate: "typeCreate__43dab",
				typeDelete: "typeDelete__43dab",
				typeUpdate: "typeUpdate__43dab",
				dash: "dash__43dab",
				change: "change__43dab",
				changeStr: "changeStr__43dab",
				overflowEllipsis: "overflowEllipsis__43dab",
				subListItem: "subListItem__43dab",
				onboardingChangeLogContainer: "onboardingChangeLogContainer__43dab",
				onboardingChangeLogItemTitle: "onboardingChangeLogItemTitle__43dab",
				onboardingChangeLogItemChanges: "onboardingChangeLogItemChanges__43dab",
				icon: "icon__43dab",
				timestamp: "timestamp__43dab",
				discrim: "discrim__43dab",
				themeOverrideLight: "themeOverrideLight__43dab",
				targetAll: "targetAll__43dab",
				targetBan: "targetBan__43dab",
				targetChannel: "targetChannel__43dab",
				targetGuild: "targetGuild__43dab",
				targetEmoji: "targetEmoji__43dab",
				targetSticker: "targetSticker__43dab",
				targetIntegration: "targetIntegration__43dab",
				targetInvite: "targetInvite__43dab",
				targetMemberRole: "targetMemberRole__43dab",
				targetMember: "targetMember__43dab",
				targetPermission: "targetPermission__43dab",
				targetRole: "targetRole__43dab",
				targetOnboarding: "targetOnboarding__43dab",
				targetVanityUrl: "targetVanityUrl__43dab",
				targetWebhook: "targetWebhook__43dab",
				targetWidget: "targetWidget__43dab",
				targetMessage: "targetMessage__43dab",
				targetStageInstance: "targetStageInstance__43dab",
				targetGuildScheduledEvent: "targetGuildScheduledEvent__43dab",
				thread: "thread__43dab",
				applicationCommand: "applicationCommand__43dab",
				autoModerationRule: "autoModerationRule__43dab",
				autoModerationBlockMessage: "autoModerationBlockMessage__43dab",
				targetGuildHome: "targetGuildHome__43dab",
				targetGuildSoundboard: "targetGuildSoundboard__43dab",
				themeOverrideDark: "themeOverrideDark__43dab"
			})
		},
		979263: function(e, t, n) {
			e.exports = {
				image: "image__5b754"
			}
		},
		915887: function(e, t, n) {
			e.exports = {
				containerDefault: "containerDefault_c69b6d",
				containerDragAfter: "containerDragAfter_c69b6d",
				containerDragBefore: "containerDragBefore_c69b6d",
				containerUserOver: "containerUserOver_c69b6d",
				iconBase: "iconBase_c69b6d",
				iconItem: "iconItem_c69b6d iconBase_c69b6d",
				alwaysShown: "alwaysShown_c69b6d",
				selected: "selected_c69b6d",
				iconNoChannelInfo: "iconNoChannelInfo_c69b6d",
				iconVisibility: "iconVisibility_c69b6d",
				iconWithChannelInfo: "iconWithChannelInfo_c69b6d",
				disabled: "disabled_c69b6d",
				actionIcon: "actionIcon_c69b6d",
				channelInfo: "channelInfo_c69b6d",
				iconLive: "iconLive_c69b6d",
				selectedChannel: "selectedChannel_c69b6d"
			}
		},
		768107: function(e, t, n) {
			e.exports = {
				wrapper: "wrapper__2ea32",
				icon: "icon__2ea32",
				typeThread: "typeThread__2ea32",
				unread: "unread__2ea32",
				withGuildIcon: "withGuildIcon__2ea32",
				modeUnreadImportant: "modeUnreadImportant__2ea32",
				name: "name__2ea32",
				modeSelected: "modeSelected__2ea32",
				modeLocked: "modeLocked__2ea32",
				iconContainer: "iconContainer__2ea32",
				iconContainerWithGuildIcon: "iconContainerWithGuildIcon__2ea32",
				favoritesSuggestion: "favoritesSuggestion__2ea32",
				link: "link__2ea32",
				basicChannelRowLink: "basicChannelRowLink__2ea32",
				linkTop: "linkTop__2ea32",
				linkBottom: "linkBottom__2ea32",
				subtitle: "subtitle__2ea32",
				children: "children__2ea32",
				modeMuted: "modeMuted__2ea32",
				iconWithGuildIcon: "iconWithGuildIcon__2ea32",
				modeConnected: "modeConnected__2ea32",
				notInteractive: "notInteractive__2ea32",
				unreadImportant: "unreadImportant__2ea32",
				numberBadge: "numberBadge__2ea32",
				activeEvent: "activeEvent__2ea32"
			}
		}
	}
]);
//# sourceMappingURL=c5170f853273dd96.js.map