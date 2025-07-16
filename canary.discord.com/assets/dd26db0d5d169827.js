"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
	["16705"], {
		332148: function(e, t, n) {
			n.d(t, {
				Z: () => u
			}), n(784620), n(973216);
			var i = n(544891),
				l = n(570140),
				r = n(346479),
				s = n(624453),
				a = n(668781),
				o = n(981631),
				c = n(388032);
			let d = {
					async pinMessage(e, t) {
						let {
							id: n,
							name: l
						} = e;
						await r.Z.unarchiveThreadIfNecessary(e.id), i.tn.put({
							url: o.ANM.PIN(n, t),
							oldFormErrors: !0,
							rejectWithError: !0
						}).catch(() => {
							let t;
							t = e.isPrivate() ? c.intl.formatToPlainString(c.t.Q89oQU, {
								maxPins: o.tG9
							}) : c.intl.formatToPlainString(c.t.NnO1S0, {
								maxPins: o.tG9,
								channelName: l
							}), a.Z.show({
								title: c.intl.string(c.t.HI88Q0),
								body: t,
								confirmText: c.intl.string(c.t.BddRzc)
							})
						})
					},
					async unpinMessage(e, t) {
						await r.Z.unarchiveThreadIfNecessary(e.id), i.tn.del({
							url: o.ANM.PIN(e.id, t),
							oldFormErrors: !0,
							rejectWithError: !0
						}).catch(() => a.Z.show({
							title: c.intl.string(c.t.xFjBys),
							body: c.intl.string(c.t["0R/Toa"]),
							confirmText: c.intl.string(c.t["7NqTJi"]),
							cancelText: c.intl.string(c.t["ETE/oK"]),
							onConfirm: d.unpinMessage.bind(d, e, t)
						}))
					},
					ackPins(e) {
						l.Z.dispatch({
							type: "CHANNEL_PINS_ACK",
							channelId: e
						})
					},
					fetchPins(e, t) {
						var n, r;
						let a = null != (n = null == t ? void 0 : t.reset) && n,
							c = null != (r = null == t ? void 0 : t.limit) ? r : 25,
							d = null == t ? void 0 : t.before;
						(a || function(e, t) {
							let n = s.Z.getPins(e);
							if (null == n) return !0;
							switch (n.state) {
								case s.M.FAILED:
									return !0;
								case s.M.LOADING:
								case s.M.LOADED_FINISHED:
									return !1;
								case s.M.LOADED_HAS_MORE:
									if (null == t) return 0 === n.items.length;
									return n.items.at(-1).pinnedAt === t
							}
						}(e, d)) && (l.Z.dispatch({
							type: "LOAD_PINNED_MESSAGES",
							channelId: e,
							reset: a
						}), i.tn.get({
							url: o.ANM.PINS(e),
							query: {
								limit: c,
								before: null == d ? void 0 : d.toISOString()
							},
							retries: 2,
							oldFormErrors: !0,
							rejectWithError: !0
						}).then(t => {
							l.Z.dispatch({
								type: "LOAD_PINNED_MESSAGES_SUCCESS",
								pins: t.body.items,
								channelId: e,
								hasMore: t.body.has_more
							})
						}, () => {
							l.Z.dispatch({
								type: "LOAD_PINNED_MESSAGES_FAILURE",
								channelId: e
							})
						}))
					}
				},
				u = d
		},
		257559: function(e, t, n) {
			n.d(t, {
				Z: () => C
			}), n(997841), n(388685);
			var i = n(255367),
				l = n(73800),
				r = n(120356),
				s = n.n(r),
				a = n(82659),
				o = n(755721),
				c = n(481060),
				d = n(332148),
				u = n(904245),
				g = n(933557),
				h = n(576855),
				f = n(724723),
				m = n(372900),
				E = n(726521),
				p = n(294218),
				v = n(501517),
				N = n(699516),
				O = n(594174),
				x = n(630388),
				S = n(970257),
				D = n(981631),
				j = n(388032),
				_ = n(130883),
				b = n(739788);

			function M(e, t, n) {
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
						i = Object.keys(n);
					"function" == typeof Object.getOwnPropertySymbols && (i = i.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
						return Object.getOwnPropertyDescriptor(n, e).enumerable
					}))), i.forEach(function(t) {
						M(e, t, n[t])
					})
				}
				return e
			}

			function I(e, t) {
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
			class A extends l.PureComponent {
				render() {
					let e, t, n = f.Z.getCurrentConfig({
							location: "DeleteModal"
						}).enabled,
						{
							report: l,
							resolveFlag: r
						} = this.state,
						s = this.props,
						{
							channel: o,
							message: d,
							showContextMenuHint: u,
							moderatorReportData: g
						} = s,
						E = function(e, t) {
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
						}(s, ["channel", "message", "showContextMenuHint", "moderatorReportData"]),
						v = o.type === D.d4z.GUILD_ANNOUNCEMENT && (0, x.yE)(d.flags, D.iLy.CROSSPOSTED);
					u && (e = (0, i.jsx)(h.Z, {
						className: b.spacingTop,
						children: j.intl.format(j.t.IxY7Ex, {})
					})), (0, S.vc)(d) && (t = (0, i.jsx)(c.j7V, {
						value: l,
						onChange: this.handleToggleReport,
						hideBorder: !0,
						className: b.spacingTop,
						children: j.intl.string(j.t.x0jzo6)
					}));
					let N = v ? j.intl.string(j.t["2kHABQ"]) : j.intl.string(j.t.AMvpS0),
						O = (0, i.jsxs)(i.Fragment, {
							children: [(0, i.jsx)("div", {
								className: b.message,
								children: (0, i.jsx)(p.Z, {
									channel: o,
									message: d,
									disableInteraction: !0
								})
							}), t, e]
						}),
						M = (0, i.jsxs)(i.Fragment, {
							children: [(0, i.jsx)(c.X6q, {
								variant: "heading-md/medium",
								className: b.spacing,
								children: N
							}), O]
						});
					if ((null == g ? void 0 : g.moderatorReportChannelId) != null) {
						let {
							isFlagResolved: e
						} = g;
						return (0, i.jsx)(m.Z.Provider, {
							value: o.guild_id,
							children: (0, i.jsxs)(c.Y0X, I(y({
								parentComponent: "DeleteModal"
							}, E), {
								children: [(0, i.jsx)(c.xBx, {
									separator: !1,
									children: (0, i.jsxs)(c.Kqy, {
										direction: "vertical",
										justify: "space-between",
										children: [(0, i.jsx)(c.olH, {
											className: b.closeButton,
											onClick: E.onClose
										}), (0, i.jsx)(c.X6q, {
											variant: "heading-xl/bold",
											children: j.intl.string(j.t.MWMcg4)
										})]
									})
								}), (0, i.jsx)(c.hzk, {
									children: M
								}), (0, i.jsxs)(c.mzw, {
									children: [(0, i.jsx)(c.zxk, {
										variant: "critical-primary",
										size: "sm",
										text: j.intl.string(j.t.oyYWHB),
										type: "submit",
										onClick: this.handleDelete
									}), !e && (0, i.jsx)(c.XZJ, {
										value: r,
										onChange: (e, t) => this.handleToggleResolveFlag(t),
										children: j.intl.string(_.default["8yIKen"])
									})]
								})]
							}))
						})
					}
					return (0, i.jsx)(m.Z.Provider, {
						value: o.guild_id,
						children: n ? (0, i.jsx)(a.u, {
							title: v ? j.intl.string(j.t.aIz1oa) : j.intl.string(j.t.MWMcg4),
							subtitle: N,
							actions: [{
								text: j.intl.string(j.t["ETE/oK"]),
								onClick: E.onClose,
								variant: "secondary"
							}, {
								text: j.intl.string(j.t.oyYWHB),
								onClick: this.handleDeleteMana,
								variant: "critical-primary"
							}],
							onClose: E.onClose,
							transitionState: E.transitionState,
							children: O
						}) : (0, i.jsx)(c.ConfirmModal, I(y({
							header: v ? j.intl.string(j.t.aIz1oa) : j.intl.string(j.t.MWMcg4),
							confirmText: j.intl.string(j.t.oyYWHB),
							cancelText: j.intl.string(j.t["ETE/oK"]),
							onConfirm: this.handleDelete
						}, E), {
							children: M
						}))
					})
				}
				constructor(...e) {
					super(...e), M(this, "state", {
						report: !1,
						resolveFlag: !1
					}), M(this, "handleDelete", () => {
						let {
							report: e,
							resolveFlag: t
						} = this.state, {
							channel: n,
							message: i,
							moderatorReportData: l
						} = this.props, {
							moderatorReportChannelId: r,
							isFlagResolved: s
						} = null != l ? l : {};
						e ? (0, E.ak)(i, "message_delete_alert", () => u.Z.deleteMessage(n.id, i.id).then(() => {
							if (null != r) {
								var e, n;
								t && !s && v.Z.resolveFlag(r), null == (e = (n = this.props).onClose) || e.call(n)
							}
						})) : u.Z.deleteMessage(n.id, i.id).then(() => {
							if (null != r) {
								var e, n;
								t && !s && v.Z.resolveFlag(r), null == (e = (n = this.props).onClose) || e.call(n)
							}
						})
					}), M(this, "handleDeleteMana", () => {
						var e, t;
						this.handleDelete(), null == (e = (t = this.props).onClose) || e.call(t)
					}), M(this, "handleToggleReport", e => {
						this.setState({
							report: e
						})
					}), M(this, "handleToggleResolveFlag", e => {
						this.setState({
							resolveFlag: e
						})
					})
				}
			}
			let C = {
				confirmPin: function(e, t) {
					(0, c.h7j)(n => {
						let l, r = (0, g.F6)(e, O.default, N.Z);
						return l = e.isPrivate() ? j.intl.string(j.t.hMRngI) : j.intl.formatToPlainString(j.t["3IRluL"], {
							channelName: r
						}), (0, i.jsx)(m.Z.Provider, {
							value: e.guild_id,
							children: (0, i.jsxs)(c.ConfirmModal, I(y({
								header: j.intl.string(j.t.bKMaZW),
								confirmText: j.intl.string(j.t.rOQ5BQ),
								cancelText: j.intl.string(j.t["ETE/oK"]),
								confirmButtonColor: o.zx.Colors.BRAND,
								onConfirm: () => d.Z.pinMessage(e, t.id)
							}, n), {
								children: [(0, i.jsx)(c.Text, {
									variant: "text-md/normal",
									className: b.spacing,
									children: l
								}), (0, i.jsx)("div", {
									className: b.message,
									children: (0, i.jsx)(p.Z, {
										channel: e,
										message: t,
										animateAvatar: !1,
										disableInteraction: !0
									})
								})]
							}))
						})
					})
				},
				confirmUnpin: function(e, t) {
					(0, c.h7j)(n => (0, i.jsx)(m.Z.Provider, {
						value: e.guild_id,
						children: (0, i.jsxs)(c.ConfirmModal, I(y({
							header: j.intl.string(j.t.CFF2vL),
							confirmText: j.intl.string(j.t.lAU5jI),
							cancelText: j.intl.string(j.t["ETE/oK"]),
							onConfirm: () => d.Z.unpinMessage(e, t.id)
						}, n), {
							children: [(0, i.jsx)(c.Text, {
								variant: "text-md/normal",
								className: b.spacing,
								children: j.intl.string(j.t.NjEPp6)
							}), (0, i.jsx)("div", {
								className: s()(b.message, b.spacing),
								children: (0, i.jsx)(p.Z, {
									channel: e,
									message: t,
									disableInteraction: !0
								})
							}), (0, i.jsx)(h.Z, {
								children: j.intl.format(j.t.oCVB3d, {})
							})]
						}))
					}))
				},
				confirmDelete: function(e, t) {
					let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
						l = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : void 0;
					(0, c.h7j)(r => (0, i.jsx)(A, y({
						channel: e,
						message: t,
						showContextMenuHint: n,
						moderatorReportData: l
					}, r)))
				},
				confirmEdit: function(e, t, n) {
					(0, c.h7j)(l => (0, i.jsx)(c.ConfirmModal, I(y({
						header: j.intl.string(j.t.aIz1oa),
						confirmText: j.intl.string(j.t["cY+Ooa"]),
						cancelText: j.intl.string(j.t["ETE/oK"]),
						confirmButtonColor: o.zx.Colors.BRAND,
						onConfirm: () => u.Z.editMessage(e, t, {
							content: n
						})
					}, l), {
						children: (0, i.jsx)(c.Text, {
							variant: "text-md/normal",
							className: b.spacing,
							children: j.intl.string(j.t.grBcMz)
						})
					})))
				}
			}
		},
		151007: function(e, t, n) {
			n.d(t, {
				Z: () => s
			});
			var i = n(665906),
				l = n(901461),
				r = n(981631);

			function s(e, t, n) {
				return !t.isSystemDM() && !(0, l.Z)(e) && (n || t.isPrivate()) && (0, i.RG)(t) && t.type !== r.d4z.GUILD_VOICE && t.type !== r.d4z.GUILD_STAGE_VOICE
			}
		},
		449751: function(e, t, n) {
			n.d(t, {
				Z: () => c
			});
			var i = n(255367);
			n(73800);
			var l = n(481060),
				r = n(626135),
				s = n(572004),
				a = n(981631),
				o = n(388032);

			function c(e, t) {
				return s.wS ? (0, i.jsx)(l.sNh, {
					id: "copy-link",
					label: o.intl.string(o.t.Xrt5Pj),
					icon: l.xPt,
					action: () => {
						(0, s.JG)("".concat(location.protocol, "//").concat(location.host).concat(a.Z5c.CHANNEL(t.guild_id, t.id, e.id))), r.default.track(a.rMx.MESSAGE_LINK_COPIED, {
							message_id: e.id,
							channel: e.channel_id
						})
					}
				}) : null
			}
		},
		601184: function(e, t, n) {
			n.d(t, {
				Z: () => h
			});
			var i = n(255367);
			n(73800);
			var l = n(442837),
				r = n(481060),
				s = n(904245),
				a = n(257559),
				o = n(665906),
				c = n(496675),
				d = n(594174),
				u = n(981631),
				g = n(388032);

			function h(e, t) {
				let n = (0, l.e7)([d.default], () => d.default.getCurrentUser()),
					h = (0, o.$R)(t),
					f = (0, l.e7)([c.Z], () => c.Z.can(u.Plq.MANAGE_MESSAGES, t), [t]) || null != n && e.canDeleteOwnMessage(n.id);
				return e.state === u.yb.SENDING || !f || u.V$x.UNDELETABLE.has(e.type) || !h ? null : (0, i.jsx)(r.sNh, {
					id: "delete",
					label: g.intl.string(g.t.xwMqDw),
					action: function(n) {
						e.state === u.yb.SEND_FAILED ? s.Z.deleteMessage(t.id, e.id, !0) : n.shiftKey ? s.Z.deleteMessage(t.id, e.id) : a.Z.confirmDelete(t, e, !0)
					},
					color: "danger",
					icon: r.XHJ
				})
			}
		},
		168405: function(e, t, n) {
			n.d(t, {
				Z: () => o
			});
			var i = n(255367);
			n(73800);
			var l = n(481060),
				r = n(665906),
				s = n(50284),
				a = n(388032);

			function o(e, t) {
				return (0, r.$R)(t) ? (0, i.jsx)(l.sNh, {
					id: "mark-unread",
					label: a.intl.string(a.t.RpE9k5),
					action: () => (0, s.Z)(t.id, e.id),
					icon: l.z7b
				}) : null
			}
		},
		536639: function(e, t, n) {
			n.d(t, {
				Z: () => g
			});
			var i = n(255367);
			n(73800);
			var l = n(442837),
				r = n(481060),
				s = n(332148),
				a = n(257559),
				o = n(496675),
				c = n(151007),
				d = n(981631),
				u = n(388032);

			function g(e, t) {
				let n = (0, l.e7)([o.Z], () => o.Z.can(d.Plq.MANAGE_MESSAGES, t), [t]);
				return e.state !== d.yb.SEND_FAILED && (0, c.Z)(e, t, n) ? !1 === e.pinned ? (0, i.jsx)(r.sNh, {
					id: "pin",
					action: function(n) {
						n.shiftKey ? s.Z.pinMessage(t, e.id) : a.Z.confirmPin(t, e)
					},
					label: u.intl.string(u.t["CvQ18/"]),
					icon: r.qQX
				}) : (0, i.jsx)(r.sNh, {
					id: "unpin",
					action: function(n) {
						n.shiftKey ? s.Z.unpinMessage(t, e.id) : a.Z.confirmUnpin(t, e)
					},
					label: u.intl.string(u.t["Bse+Fx"]),
					icon: r.qQX
				}) : null
			}
		},
		36998: function(e, t, n) {
			n.d(t, {
				v: () => r
			});
			var i = n(944486),
				l = n(176505);

			function r() {
				var e;
				let t = null != (e = i.Z.getCurrentlySelectedChannelId()) ? e : void 0;
				return null != t && (0, l.AB)(t) ? {
					channel_static_route: t
				} : {
					channel_id: t
				}
			}
		},
		26737: function(e, t, n) {
			n.d(t, {
				Z: () => o
			});
			var i = n(255367);
			n(73800);
			var l = n(481060),
				r = n(358085),
				s = n(998502),
				a = n(388032);

			function o(e, t) {
				return r.isPlatformEmbedded && (null == e ? void 0 : e.length) !== 0 ? (0, i.jsx)(l.sNh, {
					id: "copy",
					label: a.intl.string(a.t.OpuAlJ),
					hint: (0, r.isMac)() ? "⌘C" : "Ctrl+C",
					action: () => {
						s.ZP.copy(e), null == t || t.focus()
					}
				}) : null
			}
		},
		905041: function(e, t, n) {
			n.d(t, {
				Z: () => p
			}), n(704826), n(35282), n(539854), n(388685);
			var i = n(255367);
			n(73800);
			var l = n(481060),
				r = n(296182),
				s = n(976853),
				a = n(902676),
				o = n(626135),
				c = n(49012),
				d = n(358085),
				u = n(998502),
				g = n(36998),
				h = n(981631),
				f = n(388032);

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
			let E = /^(tel|sms|mailto):([^?;]+)/;

			function p(e, t, n, p) {
				let v = (0, s.Z)(null == n ? void 0 : n.getChannelId());
				if (!d.isPlatformEmbedded || null == e || "" === e || v || (null == p ? void 0 : p.shouldHideMediaOptions) === !0 || !(0, r.Jj)(e)) return null;
				let N = (0, a.F)(e),
					O = e => {
						o.default.track(h.rMx.CONTEXT_MENU_LINK_COPIED, m({
							hostname: N
						}, (0, g.v)())), u.ZP.copy(e), (0, l.showToast)((0, l.createToast)(f.intl.string(f.t["L/PwZW"]), l.ToastType.SUCCESS))
					},
					x = (n, i) => {
						let l = !0 === i ? e.replace("tel:", "sms:") : e;
						o.default.track(h.rMx.CONTEXT_MENU_LINK_OPENED, m({
							hostname: N
						}, (0, g.v)())), (0, c.q)({
							href: l,
							trusted: (0, c.r)(e, t),
							shouldConfirm: !0
						}, n)
					},
					S = [],
					D = e.match(E);
				if (null != D) {
					let e = f.intl.string("mailto" === D[1] ? f.t.ZYLVKi : f.t["3zozoa"]);
					S.push((0, i.jsx)(l.sNh, {
						id: "copy-native-contact",
						label: e,
						action: () => {
							O(D[2])
						}
					}, "copy-native-contact")), "tel" === D[1] && S.push((0, i.jsx)(l.sNh, {
						id: "native-send-sms",
						label: f.intl.string(f.t["+wbjMT"]),
						action: e => x(e, !0)
					}, "native-send-sms"))
				}
				return [(0, i.jsx)(l.sNh, {
					id: "copy-native-link",
					label: f.intl.string(f.t.WqhZsr),
					action: () => {
						O(e)
					}
				}, "copy-native-link"), ...S, (0, i.jsx)(l.sNh, {
					id: "open-native-link",
					label: f.intl.string(f.t.wuRE8P),
					action: e => x(e)
				}, "open-native-link")]
			}
		},
		89013: function(e, t, n) {
			n.d(t, {
				Z: () => g
			});
			var i = n(255367),
				l = n(73800),
				r = n(512722),
				s = n.n(r),
				a = n(481060),
				o = n(626135),
				c = n(358085),
				d = n(981631),
				u = n(388032);

			function g(e) {
				let t = l.useCallback(() => {
					s()(null != e, "text cannot be null"), o.default.track(d.rMx.MESSAGE_MENU_GOOGLE_SEARCHED), window.open("https://www.google.com/search?q=".concat(encodeURIComponent(e)), "_blank")
				}, [e]);
				return c.isPlatformEmbedded && null != e && (null == e ? void 0 : e.length) !== 0 ? [(0, i.jsx)(a.sNh, {
					id: "search-google",
					label: u.intl.string(u.t["Rd/Mkp"]),
					action: t
				}, "search-google")] : null
			}
		},
		501517: function(e, t, n) {
			n.d(t, {
				Z: () => r
			});
			var i = n(544891),
				l = n(981631);
			let r = {
				resolveFlag: e => i.tn.post({
					url: l.ANM.MODERATOR_REPORT_CLOSE(e),
					body: {},
					rejectWithError: !0
				}),
				reopenModReport: e => i.tn.put({
					url: l.ANM.REPORT_TO_MOD_REOPEN(e),
					rejectWithError: !0
				})
			}
		},
		624453: function(e, t, n) {
			n.d(t, {
				M: () => O,
				Z: () => _
			}), n(388685), n(290780);
			var i, l, r, s, a = n(392711),
				o = n.n(a),
				c = n(442837),
				d = n(570140),
				u = n(247206),
				g = n(786761),
				h = n(706454),
				f = n(592125),
				m = n(271383),
				E = n(430824),
				p = n(375954),
				v = n(699516),
				N = n(594174),
				O = ((l = {}).LOADING = "LOADING", l.LOADED_HAS_MORE = "LOADED_HAS_MORE", l.LOADED_FINISHED = "LOADING_FINISHED", l.FAILED = "FAILED", l);
			let x = {};

			function S(e) {
				let {
					channel: t
				} = e;
				delete x[t.id]
			}

			function D() {
				o().forEach(x, e => {
					e.items.forEach(e => {
						let {
							message: t
						} = e;
						t.set("blocked", v.Z.isBlockedForMessage(t)), t.set("ignored", v.Z.isIgnoredForMessage(t))
					}), e.items = e.items.slice()
				})
			}
			class j extends(i = c.ZP.Store) {
				initialize() {
					this.waitFor(f.Z, E.Z, m.ZP, p.Z, N.default, h.default)
				}
				getPins(e) {
					return x[e]
				}
			}
			s = "ChannelPinsStore", (r = "displayName") in j ? Object.defineProperty(j, r, {
				value: s,
				enumerable: !0,
				configurable: !0,
				writable: !0
			}) : j[r] = s;
			let _ = new j(d.Z, {
				CONNECTION_OPEN: function() {
					x = {}
				},
				LOAD_PINNED_MESSAGES: function(e) {
					var t, n;
					let {
						channelId: i,
						reset: l
					} = e;
					if (!l && null != x[i]) {
						x[i].state = "LOADING";
						return
					}
					let r = null != (n = null == (t = f.Z.getChannel(i)) ? void 0 : t.getGuildId()) ? n : void 0;
					x[i] = {
						id: i,
						items: [],
						state: "LOADING",
						guildId: r
					}
				},
				LOAD_PINNED_MESSAGES_SUCCESS: function(e) {
					let {
						channelId: t,
						pins: n,
						hasMore: i
					} = e, l = x[t];
					if (null == l) return !1;
					let r = n.map(e => {
						let {
							pinned_at: t,
							message: n
						} = e;
						return {
							pinnedAt: new Date(Date.parse(t)),
							message: (0, g.e5)(n)
						}
					});
					l.items = [...l.items, ...r], l.state = i ? "LOADED_HAS_MORE" : "LOADING_FINISHED"
				},
				LOAD_PINNED_MESSAGES_FAILURE: function(e) {
					let {
						channelId: t
					} = e, n = x[t];
					if (null == n) return !1;
					n.state = "FAILED"
				},
				CHANNEL_DELETE: S,
				THREAD_DELETE: S,
				GUILD_DELETE: function(e) {
					let {
						guild: t
					} = e;
					x = o()(x).filter(e => e.guildId !== t.id).keyBy("id").value()
				},
				MESSAGE_DELETE: function(e) {
					let {
						id: t,
						channelId: n
					} = e, i = x[n];
					if (null == i || 0 === o().remove(i.items, e => {
							let {
								message: n
							} = e;
							return n.id === t
						}).length) return !1;
					i.items = i.items.slice(), x[n] = i
				},
				MESSAGE_DELETE_BULK: function(e) {
					let {
						ids: t,
						channelId: n
					} = e, i = x[n];
					if (null == i) return !1;
					i.items = i.items.filter(e => {
						let {
							message: n
						} = e;
						return !t.includes(n.id)
					})
				},
				MESSAGE_UPDATE: function(e) {
					let t = e.message.id,
						n = e.message.channel_id;
					if (null == n) return !1;
					let i = x[n];
					if (null == i) return !1;
					if (null == e.message.author) {
						let l = o().findIndex(i.items, e => {
							let {
								message: n
							} = e;
							return n.id === t
						});
						if (-1 === l) return;
						let {
							pinnedAt: r,
							message: s
						} = i.items[l], a = (0, g.wi)(s, e.message);
						if (a !== s) {
							let e = i.items.slice();
							e[l] = {
								pinnedAt: r,
								message: a
							}, x[n].items = e
						}
						return
					}
					if (e.message.pinned) {
						i.items = i.items.slice();
						let n = o().findIndex(i.items, e => {
							let {
								message: n
							} = e;
							return n.id === t
						}); - 1 === n ? i.items.unshift({
							message: (0, g.e5)(e.message),
							pinnedAt: new Date
						}) : i.items[n].message = (0, g.wi)(i.items[n].message, e.message);
						return
					}
					let l = o().findIndex(i.items, e => {
						let {
							message: n
						} = e;
						return n.id === t
					});
					if (-1 === l) return !1;
					i.items = i.items.slice(), i.items.splice(l, 1)
				},
				RELATIONSHIP_ADD: D,
				RELATIONSHIP_REMOVE: D,
				RELATIONSHIP_UPDATE: D,
				MESSAGE_EXPLICIT_CONTENT_SCAN_TIMEOUT: function(e) {
					let {
						messageId: t,
						channelId: n
					} = e, i = x[n];
					if (null == i) return !1;
					let l = o().findIndex(i.items, e => {
						let {
							message: n
						} = e;
						return n.id === t
					});
					if (-1 === l) return !1;
					i.items = i.items.slice(), i.items[l].message = (0, u.Cm)(i.items[l].message)
				}
			})
		}
	}
]);
//# sourceMappingURL=dd26db0d5d169827.js.map