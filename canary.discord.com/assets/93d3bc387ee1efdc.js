"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
	["7104"], {
		914814: function(e) {
			e.exports = "/assets/cbb4a0ecd21297ba.svg"
		},
		370392: function(e) {
			e.exports = "/assets/8a9849bb1cbefd39.svg"
		},
		790904: function(e) {
			e.exports = "/assets/35c8990288849b40.svg"
		},
		609182: function(e) {
			e.exports = "/assets/9d2bd46b521600c7.svg"
		},
		893916: function(e) {
			e.exports = "/assets/a29cabf3e1357986.svg"
		},
		408942: function(e) {
			e.exports = "/assets/c733a28e6fcba3ef.svg"
		},
		509399: function(e) {
			e.exports = "/assets/48b60325911c81e0.svg"
		},
		144991: function(e, t, n) {
			n.d(t, {
				Z: () => g
			}), n(415506), n(953529);
			var r = n(255367),
				i = n(73800),
				l = n(120356),
				o = n.n(l),
				a = n(149765),
				s = n(481060),
				c = n(208884),
				d = n(453628),
				u = n(996987),
				p = n(326946),
				m = n(20493);
			class b extends i.PureComponent {
				getOverwriteValue(e) {
					let {
						allow: t,
						deny: n
					} = this.props;
					if (null == t || null == n) throw Error("PermissionsForm.getOverwriteValue: Invalid allow or deny props");
					return a.e$(t, e) ? d.y.ALLOW : a.e$(n, e) ? d.y.DENY : d.y.PASSTHROUGH
				}
				getPermissionValue(e, t) {
					return a.e$(t, e)
				}
				handleChange(e, t) {
					let {
						onChange: n
					} = this.props;
					n(e, t)
				}
				renderDisabledIndicator(e) {
					return (0, r.jsx)(s.ua7, {
						text: e,
						position: "top",
						color: s.ua7.Colors.RED,
						children: e => {
							var t, n;
							return (0, r.jsx)("span", (t = function(e) {
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
							}({}, e), n = n = {
								children: (0, r.jsx)(s.t6m, {
									size: "sm",
									color: "currentColor",
									className: p.icon
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
					})
				}
				renderComponent(e) {
					let {
						title: t,
						description: n,
						helpdeskArticleId: i,
						flag: l
					} = e, {
						permissions: a,
						locked: d,
						permissionRender: m
					} = this.props, b = null == m ? void 0 : m(l), g = !!(d || b), f = "string" == typeof b ? this.renderDisabledIndicator(b) : null, h = o()({
						[p.title]: null != f
					});
					return null == a ? (0, r.jsxs)(u.Z, {
						disabled: g,
						value: this.getOverwriteValue(l),
						onChange: e => this.handleChange(l, e),
						note: (0, c._u)(n),
						helpdeskArticleId: i,
						children: [f, (0, r.jsx)("span", {
							className: h,
							children: t
						})]
					}, String(l)) : (0, r.jsxs)(s.j7V, {
						disabled: g,
						value: this.getPermissionValue(l, a),
						onChange: e => this.handleChange(l, e),
						note: (0, c._u)(n),
						children: [f, (0, r.jsx)("span", {
							className: h,
							children: t
						})]
					}, String(l))
				}
				render() {
					let {
						spec: e,
						className: t
					} = this.props;
					return (0, r.jsx)(s.hjN, {
						className: t,
						children: (0, r.jsxs)(s.y5t, {
							component: (0, r.jsx)(s.vwX, {
								tag: s.RB0.H5,
								className: null != e.description ? m.marginBottom8 : m.marginBottom20,
								children: e.title
							}),
							children: [null != e.description && (0, r.jsx)(s.Text, {
								variant: "text-sm/normal",
								color: "header-secondary",
								className: m.marginBottom20,
								children: e.description
							}), e.permissions.map(this.renderComponent, this)]
						})
					})
				}
			}
			let g = b
		},
		228643: function(e, t, n) {
			n.d(t, {
				L_: () => s,
				nj: () => c,
				sE: () => a
			});
			var r = n(544891),
				i = n(570140),
				l = n(480608),
				o = n(981631);

			function a(e, t) {
				r.tn.get({
					url: o.ANM.GUILD_ROLE_CONNECTIONS_CONFIGURATION(e, t),
					rejectWithError: !0
				}).then(e => {
					let n = [];
					e.body.length > 0 && (n = e.body.map(e => e.map(e => ({
						connectionType: e.connection_type,
						connectionMetadataField: e.connection_metadata_field,
						applicationId: e.application_id,
						operator: e.operator,
						value: e.value
					})))), i.Z.dispatch({
						type: "GUILD_ROLE_CONNECTIONS_CONFIGURATIONS_FETCH_SUCCESS",
						roleId: t,
						roleConnectionConfigurations: n
					})
				}).catch(() => {})
			}
			async function s(e, t, n) {
				let a = n.map(e => e.map(e => ({
						connection_type: e.connectionType,
						connection_metadata_field: e.connectionMetadataField,
						application_id: e.applicationId,
						operator: e.operator,
						value: e.value
					}))),
					s = await r.tn.put({
						url: o.ANM.GUILD_ROLE_CONNECTIONS_CONFIGURATION(e, t),
						body: 0 === a.length ? [] : a,
						oldFormErrors: !0,
						rejectWithError: !1
					}).then(e => {
						let t = [];
						return e.body.length > 0 && (t = e.body.map(e => e.map(e => ({
							connectionType: e.connection_type,
							connectionMetadataField: e.connection_metadata_field,
							applicationId: e.application_id,
							operator: e.operator,
							value: e.value
						})))), t
					}),
					c = await (0, l.H)(e, t, !1);
				null != c && i.Z.dispatch({
					type: "GUILD_ROLE_MEMBER_COUNT_UPDATE",
					guildId: e,
					roleId: t,
					count: c
				}), i.Z.dispatch({
					type: "GUILD_ROLE_CONNECTIONS_CONFIGURATIONS_FETCH_SUCCESS",
					roleId: t,
					roleConnectionConfigurations: s
				})
			}
			async function c() {
				return (await r.tn.get({
					url: o.ANM.APPLICATION_USER_ROLE_CONNECTIONS,
					rejectWithError: !1
				})).body
			}
		},
		325476: function(e, t, n) {
			n.d(t, {
				ZP: () => j
			});
			var r, i, l = n(255367),
				o = n(73800),
				a = n(120356),
				s = n.n(a),
				c = n(481060),
				d = n(600164),
				u = n(416746);

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

			function g(e, t) {
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
			}
			class f extends(r = o.PureComponent) {
				render() {
					let e = this.props,
						{
							scrollable: t
						} = e,
						n = g(e, ["scrollable"]);
					return t ? (0, l.jsx)("aside", {
						className: u.sidebarScrollable,
						children: (0, l.jsx)(c.Ttm, {
							fade: !0,
							className: u.scroller,
							children: (0, l.jsx)(d.Z.Child, b(m({}, n), {
								wrap: !0
							}))
						})
					}) : (0, l.jsx)(d.Z.Child, b(m({}, n), {
						wrap: !0
					}))
				}
			}
			p(f, "defaultProps", {
				basis: 232,
				grow: 0,
				shrink: 0
			});
			class h extends o.PureComponent {
				render() {
					let e = this.props,
						{
							className: t
						} = e,
						n = g(e, ["className"]);
					return (0, l.jsx)(d.Z.Child, m({
						className: s()(u.content, t),
						wrap: !0
					}, n))
				}
			}
			class x extends(i = o.PureComponent) {
				render() {
					return (0, l.jsx)(d.Z, m({}, this.props))
				}
			}
			p(x, "defaultProps", {
				direction: d.Z.Direction.HORIZONTAL,
				justify: d.Z.Justify.START,
				align: d.Z.Align.START,
				wrap: d.Z.Wrap.NO_WRAP,
				shrink: 1,
				grow: 1,
				basis: "auto"
			}), p(x, "Direction", d.Z.Direction), p(x, "Justify", d.Z.Justify), p(x, "Align", d.Z.Align), p(x, "Wrap", d.Z.Wrap), p(x, "Sidebar", f), p(x, "Content", h);
			let j = x
		},
		603211: function(e, t, n) {
			n.d(t, {
				Z: () => o
			}), n(388685);
			var r = n(73800),
				i = n(562075),
				l = n(539202);

			function o(e) {
				let {
					type: t,
					index: n,
					optionId: o,
					onDragStart: a,
					onDragComplete: s,
					onDragReset: c
				} = e, [d, u] = r.useState(!1), [, p] = (0, i.c)({
					type: t,
					item: () => (a(o), {
						id: o,
						position: n
					}),
					canDrag: () => d,
					collect: e => ({
						isDragging: e.isDragging()
					}),
					end: (e, t) => {
						let n = t.getDropResult();
						if (null == n) return void c();
						s(n.optionId)
					}
				}), [{
					dragSourcePosition: m
				}, b] = (0, l.L)({
					accept: t,
					canDrop: () => !0,
					collect: e => {
						let t = e.getItem();
						return null != t && e.isOver() && e.canDrop() ? {
							dragSourcePosition: t.position
						} : {
							dragSourcePosition: null
						}
					},
					drop: () => ({
						optionId: o
					})
				});
				return {
					drag: p,
					dragSourcePosition: m,
					drop: b,
					setIsDraggable: u
				}
			}
		},
		710344: function(e, t, n) {
			n.d(t, {
				Z: () => i
			}), n(388685);
			var r = n(73800);

			function i(e, t) {
				let [n, i] = r.useState(null), l = r.useCallback(e => {
					i(e)
				}, []), o = r.useCallback(() => {
					i(null)
				}, []), a = r.useCallback(r => {
					o();
					let i = e.find(e => {
							let {
								id: t
							} = e;
							return n === t
						}),
						l = e.find(e => {
							let {
								id: t
							} = e;
							return r === t
						});
					if (null == i || null == l || i === l) return;
					let a = [...e],
						s = a.indexOf(i),
						c = a.indexOf(l),
						d = +(c - s > 0);
					a.splice(s, 1), c = a.indexOf(l), a.splice(c + d, 0, i), t(a)
				}, [e, n, o, t]);
				return {
					draggingId: n,
					handleDragStart: l,
					handleDragReset: o,
					handleDragComplete: a
				}
			}
		},
		741247: function(e, t, n) {
			n.d(t, {
				default: () => c,
				e: () => s
			});
			var r = n(255367);
			n(73800);
			var i = n(481060),
				l = n(239091),
				o = n(241635),
				a = n(388032);

			function s(e, t) {
				return (0, o.Z)(e, t).length > 0
			}

			function c(e) {
				let {
					role: t,
					guild: n,
					onSelect: s
				} = e, c = (0, o.Z)(n, t);
				return 0 === c.length ? null : (0, r.jsx)(i.v2r, {
					navId: "guild-settings-role-context",
					"aria-label": a.intl.string(a.t["337Ja2"]),
					onClose: l.Zy,
					onSelect: s,
					children: c
				})
			}
		},
		241635: function(e, t, n) {
			n.d(t, {
				Z: () => b
			}), n(539854);
			var r = n(255367);
			n(73800);
			var i = n(442837),
				l = n(481060),
				o = n(749210),
				a = n(240872),
				s = n(605436),
				c = n(228643),
				d = n(299206),
				u = n(496675),
				p = n(867108),
				m = n(388032);

			function b(e, t) {
				var n;
				let b = (0, i.e7)([u.Z], () => {
						let n = u.Z.getHighestRole(e);
						return !u.Z.isRoleHigher(e, n, t)
					}),
					g = [],
					f = (0, p.Z)(e, t);
				null != f && g.push(f);
				let h = (0, d.Z)({
					id: t.id,
					label: m.intl.string(m.t.sMsaLi)
				});
				null != h && g.push(h);
				let x = (null == (n = t.tags) ? void 0 : n.guild_connections) === null,
					j = t.managed && !x,
					O = null != t && (0, s.pM)(e.id, t.id);
				return b || j || O || g.push((0, r.jsx)(l.kSQ, {
					children: (0, r.jsx)(l.sNh, {
						id: "delete-role",
						label: m.intl.string(m.t.oyYWHB),
						color: "danger",
						icon: l.XHJ,
						action: () => {
							a.Z.show({
								title: m.intl.string(m.t.YWISbW),
								body: m.intl.format(m.t["9+nrUV"], {
									name: t.name
								}),
								cancelText: m.intl.string(m.t["ETE/oK"]),
								onConfirm: async () => {
									x && await (0, c.L_)(e.id, t.id, []), o.Z.deleteRole(e.id, t.id)
								}
							})
						}
					})
				}, "delete-role")), g
			}
		},
		867108: function(e, t, n) {
			n.d(t, {
				Z: () => p
			});
			var r = n(255367);
			n(73800);
			var i = n(442837),
				l = n(481060),
				o = n(434404),
				a = n(962086),
				s = n(225675),
				c = n(496675),
				d = n(981631),
				u = n(388032);

			function p(e, t) {
				let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : d.pNK.ROLES;
				return (0, i.e7)([c.Z], () => c.Z.canImpersonateRole(e, t)) ? (0, r.jsx)(l.sNh, {
					id: "view-as-role",
					label: u.intl.string(u.t.arFPfH),
					icon: l.ZSh,
					action: () => {
						o.Z.close(), (0, a.iD)(e.id, {
							type: s.z.ROLES,
							roles: {
								[t.id]: t
							},
							returnToSection: n
						})
					}
				}, "view-as-role") : null
			}
		},
		369994: function(e, t, n) {
			n.d(t, {
				C4: () => f,
				Fi: () => g,
				KK: () => p,
				f6: () => m,
				n: () => b
			}), n(388685);
			var r = n(913527),
				i = n.n(r),
				l = n(544891),
				o = n(367907),
				a = n(434404),
				s = n(430824),
				c = n(626135),
				d = n(173530),
				u = n(981631);

			function p(e) {
				let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [];
				if (0 !== t.length) {
					var n, r;
					c.default.track(u.rMx.GUILD_RAID_REPORTED, (n = function(e) {
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
					}({}, (0, o.hH)(e)), r = r = {
						guild_id: e,
						raid_types: t
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
				}
			}
			async function m(e, t) {
				let n = new Set(e.features);
				n.has(u.oNc.COMMUNITY) ? t ? n.delete(u.oNc.RAID_ALERTS_DISABLED) : n.add(u.oNc.RAID_ALERTS_DISABLED) : t ? n.add(u.oNc.NON_COMMUNITY_RAID_ALERTS) : n.delete(u.oNc.NON_COMMUNITY_RAID_ALERTS), await a.Z.saveGuild(e.id, {
					features: n
				}, {
					throwErr: !0
				})
			}
			async function b(e, t, n, r) {
				let o = i()().add(r, "hours").toISOString();
				return await l.tn.put({
					url: u.ANM.GUILD_INCIDENT_ACTIONS(e),
					body: {
						invites_disabled_until: t ? o : null,
						dms_disabled_until: n ? o : null
					},
					rejectWithError: !1
				})
			}
			async function g(e, t, n) {
				let r = s.Z.getGuild(e);
				return null == (null != r ? (0, d.Z)(r) : null) ? null : await l.tn.post({
					url: u.ANM.GUILD_INCIDENT_REPORT_FALSE_ALARM(e),
					body: {
						alert_message_id: t,
						reason: n
					},
					rejectWithError: !1
				})
			}
			async function f(e) {
				let t = s.Z.getGuild(e);
				return null == (null != t ? (0, d.Z)(t) : null) ? null : await l.tn.post({
					url: u.ANM.GUILD_INCIDENT_REPORT_RAID(e),
					rejectWithError: !1
				})
			}
		},
		162157: function(e, t, n) {
			n.d(t, {
				BT: () => c,
				N8: () => s
			});
			var r = n(442837);
			n(467319);
			var i = n(496675),
				l = n(533244),
				o = n(487419),
				a = n(981631);

			function s(e) {
				let t = (0, r.e7)([i.Z], () => (function(e) {
						let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : i.Z;
						return t.can(a.Plq.BAN_MEMBERS, e) || t.can(a.Plq.KICK_MEMBERS, e) || t.can(a.Plq.MANAGE_GUILD, e)
					})(e, i.Z), [e]),
					n = (0, r.e7)([o.Z], () => null != e ? o.Z.getGuildIncident(e.id) : null, [e]);
				return !(null != n && (0, l.i9)(n)) && t
			}

			function c(e) {
				return (0, r.e7)([i.Z], () => (function(e) {
					let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : i.Z;
					return t.can(a.Plq.MANAGE_GUILD, e)
				})(e, i.Z), [e])
			}
		},
		173530: function(e, t, n) {
			n.d(t, {
				Z: () => r
			});

			function r(e) {
				var t;
				return null != (t = e.safetyAlertsChannelId) ? t : e.publicUpdatesChannelId
			}
		},
		821312: function(e, t, n) {
			n.d(t, {
				Z: () => b
			}), n(388685);
			var r = n(255367),
				i = n(73800),
				l = n(120356),
				o = n.n(l),
				a = n(831209),
				s = n(481060),
				c = n(367907),
				d = n(177862),
				u = n(981631),
				p = n(388032),
				m = n(147612);

			function b(e) {
				let {
					guildId: t,
					transitionState: n,
					onClose: l
				} = e, [b, g] = i.useState([]), [f, h] = i.useState(), x = [{
					text: p.intl.string(p.t["//3pvr"]),
					value: d.C2.DM_SPAM
				}, {
					text: p.intl.string(p.t.SdVsio),
					value: d.C2.MENTION_SPAM
				}, {
					text: p.intl.string(p.t.uTiSVF),
					value: d.C2.CHANNEL_SPAM
				}, {
					text: p.intl.string(p.t.GQczU1),
					value: d.C2.SUS_NEW_MEMBERS
				}, {
					text: p.intl.string(p.t.AAgqy8),
					value: d.C2.CHANGING_SETTINGS
				}, {
					text: p.intl.string(p.t.ryPKb2),
					value: d.C2.OTHER
				}];

				function j(e) {
					b.includes(e) ? g(t => t.filter(t => t !== e)) : g(t => [...t, e])
				}
				return null == t ? (l(), null) : (0, r.jsxs)(s.Y0X, {
					transitionState: n,
					size: s.CgR.MEDIUM,
					parentComponent: "GuildRaidLockdownFeedbackModal",
					children: [(0, r.jsx)(s.xBx, {
						separator: !0,
						children: (0, r.jsxs)("div", {
							className: m.headerContainer,
							children: [(0, r.jsxs)("div", {
								className: m.headerText,
								children: [(0, r.jsx)(s.mBM, {
									size: "xs",
									color: a.Z.INTERACTIVE_NORMAL
								}), (0, r.jsx)(s.X6q, {
									color: "header-primary",
									variant: "heading-md/semibold",
									children: p.intl.string(p.t.f5hd9P)
								})]
							}), (0, r.jsx)(s.P3F, {
								onClick: l,
								children: (0, r.jsx)(s.Dio, {
									size: "xs",
									color: "currentColor",
									className: m.closeIcon
								})
							})]
						})
					}), (0, r.jsx)(s.hzk, {
						children: (0, r.jsx)("div", {
							className: m.options,
							children: x.map(e => {
								let {
									text: t,
									value: n
								} = e;
								return (0, r.jsxs)("div", {
									className: o()(m.optionContainer, {
										[m.optionContainerOther]: n === d.C2.OTHER
									}),
									children: [(0, r.jsxs)(s.P3F, {
										className: m.optionText,
										onClick: () => j(n),
										children: [(0, r.jsx)("div", {
											children: (0, r.jsx)(s.XZJ, {
												type: s.XZJ.Types.INVERTED,
												size: 20,
												value: b.includes(n),
												onChange: () => j(n)
											})
										}), (0, r.jsx)(s.Text, {
											variant: "text-md/medium",
											color: b.includes(n) ? "interactive-active" : "interactive-normal",
											children: t
										})]
									}), n === d.C2.OTHER && b.includes(d.C2.OTHER) && (0, r.jsx)("div", {
										className: m.textboxContainer,
										children: (0, r.jsx)(s.Kx8, {
											className: m.serverLockdownReasonText,
											placeholder: p.intl.string(p.t["PAM+JS"]),
											onChange: e => h(e),
											value: f,
											rows: 2,
											autoFocus: !0,
											flex: !0
										})
									})]
								}, n)
							})
						})
					}), (0, r.jsx)(s.mzw, {
						children: (0, r.jsx)(s.zxk, {
							variant: "primary",
							text: p.intl.string(p.t.nAt0rK),
							onClick: function() {
								(0, c.yw)(u.rMx.GUILD_RAID_LOCKDOWN_FEEDBACK, {
									raid_lockdown_feedback_type: b,
									raid_lockdown_feedback_other_reason: f,
									guild_id: t
								}), l()
							},
							loading: !1
						})
					})]
				})
			}
		},
		664452: function(e, t, n) {
			n.d(t, {
				default: () => y
			}), n(388685);
			var r = n(255367),
				i = n(73800),
				l = n(831209),
				o = n(442837),
				a = n(481060),
				s = n(688465),
				c = n(430824),
				d = n(626135),
				u = n(369994),
				p = n(162157),
				m = n(533244),
				b = n(487419),
				g = n(821312),
				f = n(676770),
				h = n(981631),
				x = n(388032),
				j = n(613915);

			function O(e) {
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

			function v(e, t) {
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

			function y(e) {
				let {
					guildId: t,
					transitionState: n,
					onClose: y,
					analyticsData: _
				} = e, C = (0, o.e7)([c.Z], () => c.Z.getGuild(t), [t]), N = !!(null == C ? void 0 : C.features.has(h.oNc.INVITES_DISABLED)), [I] = i.useState(!1), [E, S] = i.useState(f.Fl), T = (0, o.e7)([b.Z], () => b.Z.getGuildIncident(t)), w = (0, p.BT)(C), P = (0, m.SG)(T) || N, Z = (0, m.sN)(T), [A, k] = i.useState(P), [D, R] = i.useState(Z), [L, M] = i.useState(!1), B = A !== P || D !== Z || L, U = N && !w;
				if (null == C) return y(), null;

				function W() {
					k(e => !e)
				}
				return (0, r.jsxs)(a.Y0X, {
					transitionState: n,
					size: a.CgR.MEDIUM,
					parentComponent: "GuildRaidServerLockdownModal",
					children: [(0, r.jsx)(a.xBx, {
						separator: !0,
						children: (0, r.jsxs)("div", {
							className: j.headerContainer,
							children: [(0, r.jsx)(a.mBM, {
								size: "xs",
								color: l.Z.INTERACTIVE_NORMAL
							}), (0, r.jsx)(a.X6q, {
								color: "header-primary",
								variant: "heading-md/semibold",
								children: x.intl.string(x.t.oCYAc3)
							}), (0, r.jsx)(s.Z, {})]
						})
					}), (0, r.jsx)(a.hzk, {
						children: (0, r.jsxs)("div", {
							className: j.mainContainer,
							children: [(0, r.jsx)(a.PhF, {
								placeholder: x.intl.string(x.t.vKYZzc),
								options: (0, f.c1)(),
								select: e => {
									S(e), M(!0)
								},
								isSelected: e => e === E,
								serialize: e => String(e)
							}), (0, r.jsxs)("div", {
								className: j.pauseContainer,
								children: [(0, r.jsxs)("div", {
									className: j.pauseText,
									children: [(0, r.jsx)(a.Text, {
										variant: "text-md/semibold",
										color: "header-primary",
										children: x.intl.string(x.t.Uwsjn5)
									}), (0, r.jsx)(a.Text, {
										variant: "text-sm/normal",
										color: "text-muted",
										children: x.intl.string(x.t.qPJkZm)
									})]
								}), (0, r.jsx)(a.ua7, {
									text: x.intl.string(x.t["9GPbsb"]),
									shouldShow: N,
									children: e => (0, r.jsx)("div", v(O({}, e), {
										children: (0, r.jsx)(a.rsf, {
											className: j.toggle,
											onChange: W,
											checked: A,
											disabled: U
										})
									}))
								})]
							}), (0, r.jsxs)("div", {
								className: j.pauseContainer,
								children: [(0, r.jsxs)("div", {
									className: j.pauseText,
									children: [(0, r.jsx)(a.Text, {
										variant: "text-md/semibold",
										color: "header-primary",
										children: x.intl.string(x.t.wrDmAw)
									}), (0, r.jsx)(a.Text, {
										variant: "text-sm/normal",
										color: "text-muted",
										children: x.intl.string(x.t.UQbJW1)
									})]
								}), (0, r.jsx)(a.rsf, {
									className: j.toggle,
									onChange: function() {
										R(e => !e)
									},
									checked: D
								})]
							})]
						})
					}), (0, r.jsx)(a.mzw, {
						children: (0, r.jsxs)(a.hE2, {
							direction: "horizontal-reverse",
							children: [(0, r.jsx)(a.zxk, {
								variant: "primary",
								text: x.intl.string(x.t["pwm/z8"]),
								onClick: () => {
									(P || Z) && !A && !D ? ((0, u.n)(C.id, !1, !1), (0, a.ZDy)(() => Promise.resolve(e => (0, r.jsx)(g.Z, v(O({}, e), {
										guildId: t
									}))))) : (0, u.n)(C.id, A, D, E);
									let {
										source: e,
										alertType: n,
										messageId: i
									} = _;
									d.default.track(h.rMx.GUILD_RAID_INTERVENTION_STATE_CHANGE, {
										guild_id: t,
										source: e,
										raid_alert_id: i,
										raid_alert_type: n,
										intervention_type_enabled: (0, m.sO)(A, D),
										intervention_type_disabled: (0, m.lk)(A, D),
										duration: 60 * E
									}), y()
								},
								loading: I,
								disabled: !B
							}), (0, r.jsx)(a.zxk, {
								variant: "secondary",
								text: x.intl.string(x.t["ETE/oK"]),
								onClick: y,
								disabled: I
							})]
						})
					})]
				})
			}
		},
		282923: function(e, t, n) {
			n.d(t, {
				B: () => l
			}), n(539854), n(388685);
			var r = n(658722),
				i = n.n(r);

			function l(e, t, n) {
				if ("" === n) return e;
				let r = n.toLowerCase(),
					l = [];
				for (let o of e) {
					let {
						id: e,
						names: a
					} = t(o);
					if (e === n) return [o];
					a.some(e => i()(r, e.toLowerCase())) && l.push(o)
				}
				return l
			}
		},
		905753: function(e, t, n) {
			let r, i, l;
			n.d(t, {
				Z: () => h
			}), n(467055), n(388685);
			var o, a = n(442837),
				s = n(570140),
				c = n(581364),
				d = n(399860);

			function u(e, t, n) {
				return t in e ? Object.defineProperty(e, t, {
					value: n,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : e[t] = n, e
			}
			let p = {},
				m = {},
				b = !1;

			function g() {
				r = void 0, p = {}, m = {}, i = void 0, l = void 0, b = !1
			}
			class f extends(o = a.ZP.Store) {
				getApplicationPermissions() {
					return p
				}
				getCommands() {
					return m
				}
				getCommand(e) {
					return null == m ? void 0 : m[e]
				}
				getEditedApplication() {
					return i
				}
				getEditedCommand() {
					return l
				}
				isUnavailable() {
					return b
				}
				getApplicationId() {
					return r
				}
			}
			u(f, "displayName", "IntegrationPermissionStore");
			let h = new f(s.Z, {
				LOGOUT: g,
				INTEGRATION_PERMISSION_SETTINGS_APPLICATION_PERMISSIONS_FETCH_FAILURE: function(e) {
					let {
						applicationId: t
					} = e;
					if (t !== r) return !1;
					b = !0
				},
				INTEGRATION_PERMISSION_SETTINGS_CLEAR: g,
				INTEGRATION_PERMISSION_SETTINGS_INIT: function(e) {
					let {
						applicationId: t
					} = e;
					g(), r = t
				},
				INTEGRATION_PERMISSION_SETTINGS_COMMAND_UPDATE: function(e) {
					var t, n;
					let {
						applicationId: i,
						commandId: l,
						permissions: o
					} = e;
					if (i !== r) return !1;
					if (l === r) {
						p = (0, d.tk)(o);
						return
					}
					let a = m[l];
					if (null == a) return !1;
					m[l] = (t = function(e) {
						for (var t = 1; t < arguments.length; t++) {
							var n = null != arguments[t] ? arguments[t] : {},
								r = Object.keys(n);
							"function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
								return Object.getOwnPropertyDescriptor(n, e).enumerable
							}))), r.forEach(function(t) {
								u(e, t, n[t])
							})
						}
						return e
					}({}, a), n = n = {
						permissions: (0, d.tk)(o)
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
				},
				INTEGRATION_PERMISSION_SETTINGS_EDIT: function(e) {
					let {
						applicationId: t,
						commandId: n,
						permissions: o
					} = e;
					if (t !== r) return !1;
					n === r ? i = o : l = {
						commandId: n,
						permissions: o
					}
				},
				INTEGRATION_PERMISSION_SETTINGS_RESET: function(e) {
					let {
						commandId: t
					} = e;
					null == t ? i = void 0 : l = void 0
				},
				INTEGRATION_PERMISSION_SETTINGS_COMMANDS_FETCH_FAILURE: function(e) {
					let {
						applicationId: t
					} = e;
					if (t !== r) return !1;
					b = !0
				},
				INTEGRATION_PERMISSION_SETTINGS_COMMANDS_FETCH_SUCCESS: function(e) {
					let {
						applicationId: t,
						commands: n,
						permissions: i
					} = e;
					if (t !== r) return !1;
					let l = Object.fromEntries(i.map(e => [e.id, e.permissions])),
						o = {};
					for (let e of n)
						if (e.application_id === r) {
							let t = (0, c.Z8)({
									rootCommand: e,
									command: e,
									applicationId: e.application_id
								}),
								n = l[e.id];
							null != n && (t.permissions = (0, d.tk)(n)), o[e.id] = t
						} m = o
				}
			})
		},
		937427: function(e, t, n) {
			n.d(t, {
				w: () => d
			}), n(388685), n(539854), n(290780);
			var r = n(73800),
				i = n(581364),
				l = n(984933),
				o = n(496675),
				a = n(282923),
				s = n(981631),
				c = n(388032);

			function d(e) {
				let t = r.useMemo(() => {
						let t = l.ZP.getChannels(e),
							n = [...t[l.sH]];
						n.push(...t[l.Zb].filter(e => e.channel.isGuildVocal()));
						let r = n.map(e => ({
							id: e.channel.id,
							name: e.channel.name,
							canManage: o.Z.can(s.Plq.MANAGE_ROLES, e.channel)
						}));
						return r.unshift({
							id: (0, i.bD)(e),
							name: c.intl.string(c.t["7YqSGx"]),
							canManage: !0
						}), r
					}, [e]),
					[n, d] = r.useState(""),
					p = r.useMemo(() => {
						var e;
						let r = (e = n).startsWith("#") ? e.substr(1) : e;
						return (0, a.B)(t, u, r)
					}, [t, n]);
				return {
					query: n,
					results: p,
					setQuery: d,
					unfilteredCount: t.length
				}
			}

			function u(e) {
				return {
					id: e.id,
					names: [e.name]
				}
			}
		},
		932776: function(e, t, n) {
			n.d(t, {
				O: () => c
			}), n(388685), n(642613);
			var r = n(73800),
				i = n(373793),
				l = n(442837),
				o = n(911969),
				a = n(282923),
				s = n(905753);

			function c() {
				let e = (0, l.cj)([s.Z], () => {
						var e;
						return Object.values(null != (e = s.Z.getCommands()) ? e : {})
					}),
					[t, n] = r.useState(""),
					c = r.useMemo(() => e.filter(e => {
						var t;
						return (null == e.integration_types || e.integration_types.includes(i.Y.GUILD_INSTALL)) && (null == e.contexts || (null == (t = e.contexts) ? void 0 : t.includes(o.D.GUILD)))
					}), [e]),
					u = r.useMemo(() => [...c].sort((e, t) => {
						let n = o.yU.CHAT + 1,
							r = (t.type > n ? n : t.type) - (e.type > n ? n : e.type);
						return 0 !== r ? r : e.untranslatedName.localeCompare(t.untranslatedName)
					}), [c]),
					p = r.useMemo(() => t.startsWith("/") ? u.filter(e => e.type === o.yU.CHAT) : u, [t, u]),
					m = r.useMemo(() => t.startsWith("/") ? t.substring(1) : t, [t]);
				return {
					query: t,
					results: r.useMemo(() => (0, a.B)(p, d, m), [p, m]),
					setQuery: n,
					unfilteredCount: e.length
				}
			}

			function d(e) {
				return {
					id: e.id,
					names: [e.displayName]
				}
			}
		},
		643886: function(e, t, n) {
			n.d(t, {
				U: () => f
			}), n(539854), n(388685), n(290780);
			var r = n(73800),
				i = n(512722),
				l = n.n(i),
				o = n(149765),
				a = n(442837),
				s = n(271383),
				c = n(485386),
				d = n(430824),
				u = n(496675),
				p = n(594174),
				m = n(700785),
				b = n(282923),
				g = n(981631);

			function f(e) {
				let t = (0, a.e7)([d.Z], () => d.Z.getGuild(e));
				l()(null != t, "guild must be present to be editing its integration settings");
				let n = (0, a.e7)([u.Z], () => u.Z.getHighestRole(t)),
					i = (0, a.Wu)([s.ZP], () => s.ZP.getMembers(e), [e]),
					f = (0, a.cj)([p.default], () => p.default.getUsers()),
					j = (0, a.Wu)([c.Z], () => Object.values(c.Z.getRoles(e)), [e]),
					O = r.useMemo(() => {
						let e = [];
						for (let n of i) {
							let r = f[n.userId];
							if (null == r || r.bot) continue;
							let i = r.id !== t.ownerId && !m.BT({
								permission: g.Plq.ADMINISTRATOR,
								user: r,
								context: t
							}) && u.Z.canManageUser(g.Plq.USE_APPLICATION_COMMANDS, r, t);
							e.push({
								id: r.id,
								canManage: i,
								nick: n.nick,
								username: r.username
							})
						}
						return e
					}, [t, i, f]),
					v = e => {
						var t;
						return e.managed && (null == (t = e.tags) ? void 0 : t.bot_id) != null
					},
					y = r.useMemo(() => {
						let r = [];
						for (let i of j) {
							if (v(i)) continue;
							let l = !o.e$(i.permissions, g.Plq.ADMINISTRATOR) && u.Z.isRoleHigher(t, n, i),
								a = {
									id: i.id,
									name: i.name,
									canManage: l
								};
							i.id === e ? r.unshift(a) : r.push(a)
						}
						return r
					}, [j, e, t, n]),
					[_, C] = r.useState(""),
					N = r.useMemo(() => {
						var t;
						let n = (t = _).startsWith("@") ? t.substr(1) : t,
							r = _.startsWith("@") ? y.filter(t => t.id === e) : y;
						return {
							members: (0, b.B)(O, h, n),
							roles: (0, b.B)(r, x, n)
						}
					}, [e, O, _, y]);
				return {
					query: _,
					results: N,
					setQuery: C,
					unfilteredCount: N.members.length + N.roles.length
				}
			}

			function h(e) {
				let t = [e.username];
				return (null == e ? void 0 : e.nick) != null && t.push(e.nick), {
					id: e.id,
					names: t
				}
			}

			function x(e) {
				return {
					id: e.id,
					names: [e.name]
				}
			}
		},
		995390: function(e, t, n) {
			n.d(t, {
				Z: () => y
			}), n(539854), n(388685), n(467055);
			var r = n(73800),
				i = n(512722),
				l = n.n(i),
				o = n(392711),
				a = n.n(o),
				s = n(442837),
				c = n(139387),
				d = n(895924),
				u = n(581364),
				p = n(592125),
				m = n(485386),
				b = n(430824),
				g = n(496675),
				f = n(594174),
				h = n(823379),
				x = n(905753),
				j = n(399860),
				O = n(981631);

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

			function y(e, t, n) {
				let i = (0, s.e7)([x.Z], () => x.Z.getApplicationPermissions()),
					o = r.useMemo(() => (function(e, t) {
						let n = v({}, t),
							r = (0, u.bD)(e),
							i = (0, j.rE)(r, d.Kw.CHANNEL),
							l = (0, j.rE)(e, d.Kw.ROLE);
						return l in n || (n[l] = {
							id: e,
							permission: !0,
							type: d.Kw.ROLE
						}), i in n || (n[i] = {
							id: r,
							permission: !0,
							type: d.Kw.CHANNEL
						}), n
					})(e, null != i ? i : {}), [i, e]),
					y = (0, s.e7)([x.Z], () => {
						var e;
						if (null == n) return;
						let t = x.Z.getCommand(n);
						return null != (e = null == t ? void 0 : t.permissions) ? e : {}
					}, [n]),
					_ = (0, s.e7)([x.Z], () => {
						var e;
						return null == n ? x.Z.getEditedApplication() : null == (e = x.Z.getEditedCommand()) ? void 0 : e.permissions
					}, [n]),
					C = null != n ? n : t,
					N = null != n ? y : o,
					I = r.useMemo(() => null != _ ? _ : v({}, null != N ? N : {}), [_, N]),
					E = r.useMemo(() => Object.keys(I).length, [I]),
					S = r.useMemo(() => null == N || null == I ? null : !a().isEqual(N, I), [N, I]);
				return r.useEffect(() => {
					C === t && (S ? c.Z.startEditingCommandPermissions(C) : c.Z.stopEditingCommandPermissions(C))
				}, [t, S, C]), {
					originalApplicationPermissions: o,
					originalCommandPermissions: y,
					editedTargetPermissions: function(e, t) {
						let n = (0, s.e7)([b.Z], () => b.Z.getGuild(e), [e]);
						l()(null != n, "guild must be present to be editing its integration settings");
						let i = (0, s.e7)([g.Z], () => g.Z.getHighestRole(n), [n]),
							o = (0, s.e7)([f.default], () => {
								var e;
								return null == (e = f.default.getCurrentUser()) ? void 0 : e.id
							});
						l()(null != o, "useComputePermissions: currentUserId must not be null");
						let a = o === n.ownerId,
							{
								channelIds: c,
								roleIds: x,
								userIds: j
							} = r.useMemo(() => {
								let e = [],
									n = [],
									r = [];
								for (let i of Object.values(t)) i.type === d.Kw.CHANNEL ? e.push(i.id) : i.type === d.Kw.ROLE ? n.push(i.id) : i.type === d.Kw.USER && r.push(i.id);
								return {
									channelIds: e,
									roleIds: n,
									userIds: r
								}
							}, [t]),
							y = (0, s.cj)([p.Z], () => Object.fromEntries(c.map(p.Z.getChannel).filter(h.lm).map(e => [e.id, e])), [c]),
							_ = (0, s.cj)([m.Z], () => Object.fromEntries(x.map(t => m.Z.getRole(e, t)).filter(h.lm).map(e => [e.id, e])), [x, e]),
							C = (0, s.cj)([f.default], () => Object.fromEntries(j.map(f.default.getUser).filter(h.lm).map(e => [e.id, e])), [j]);
						return r.useMemo(() => {
							let e = n.id,
								r = (0, u.bD)(n.id),
								l = {};
							for (let [o, s] of Object.entries(t)) {
								let t = !1,
									c = !1;
								if (s.type === d.Kw.CHANNEL) {
									let e = s.id === r,
										n = y[s.id];
									t = e || g.Z.can(O.Plq.VIEW_CHANNEL, n), c = !0
								} else if (s.type === d.Kw.ROLE) {
									let r = s.id === e,
										l = _[s.id];
									t = r || null != l, c = a || r || g.Z.isRoleHigher(n, i, l)
								} else if (s.type === d.Kw.USER) {
									let e = C[s.id];
									t = null != e, c = null != e && (a || g.Z.canManageUser(O.Plq.USE_APPLICATION_COMMANDS, e, n))
								}
								l[o] = function(e, t) {
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
								}(v({}, s), {
									canRead: t,
									canWrite: c
								})
							}
							return l
						}, [y, n, i, a, t, _, C])
					}(e, I),
					hasChanges: S,
					selectedPermissionCount: E
				}
			}
		},
		680298: function(e, t, n) {
			n.d(t, {
				Z: () => p
			});
			var r = n(255367),
				i = n(73800),
				l = n(481060),
				o = n(239091),
				a = n(911969),
				s = n(399860),
				c = n(388032),
				d = n(508815);

			function u(e) {
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

			function p(e) {
				let {
					applicationIcon: t,
					applicationName: p,
					canNavigate: m,
					command: b,
					guildId: g
				} = e, f = i.useMemo(() => {
					var e;
					return 0 !== Object.keys(null != (e = b.permissions) ? e : {}).length
				}, [b.permissions]), h = i.useCallback(() => {
					null != b && m() && (0, l.ZDy)(async () => {
						let {
							default: e
						} = await n.e("78786").then(n.bind(n, 50474));
						return n => (0, r.jsx)(e, u({
							applicationIcon: t,
							applicationId: b.applicationId,
							applicationName: p,
							command: b,
							guildId: g
						}, n))
					})
				}, [t, p, m, b, g]), x = i.useCallback(e => {
					(0, o.jW)(e, async () => {
						let {
							default: e
						} = await n.e("5396").then(n.bind(n, 731646));
						return t => {
							var n, i;
							return (0, r.jsx)(e, (n = u({}, t), i = i = {
								id: b.id,
								label: c.intl.string(c.t.oJ1Mu7)
							}, Object.getOwnPropertyDescriptors ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(i)) : (function(e, t) {
								var n = Object.keys(e);
								if (Object.getOwnPropertySymbols) {
									var r = Object.getOwnPropertySymbols(e);
									n.push.apply(n, r)
								}
								return n
							})(Object(i)).forEach(function(e) {
								Object.defineProperty(n, e, Object.getOwnPropertyDescriptor(i, e))
							}), n))
						}
					})
				}, [b]), j = b.type === a.yU.CHAT ? l.SsZ : l.hH0, O = (0, s.gw)(b.type, b.displayName);
				return (0, r.jsxs)(l.P3F, {
					onClick: h,
					className: d.item,
					onContextMenu: x,
					children: [(0, r.jsxs)("div", {
						className: d.identifier,
						children: [(0, r.jsx)(j, {
							className: d.icon,
							size: "md",
							color: "currentColor"
						}), (0, r.jsx)(l.Text, {
							variant: "text-md/normal",
							children: O
						})]
					}), (0, r.jsx)("div", {
						className: d.statusContainer,
						children: f ? (0, r.jsxs)("div", {
							className: d.statusLine,
							children: [(0, r.jsx)(l.Text, {
								variant: "text-md/normal",
								children: c.intl.string(c.t.jH4B9P)
							}), (0, r.jsx)(l.d3s, {
								size: "sm",
								color: "currentColor",
								className: d.statusIcon
							})]
						}) : null
					})]
				})
			}
		},
		469880: function(e, t, n) {
			n.d(t, {
				Z: () => u
			});
			var r = n(255367),
				i = n(73800),
				l = n(481060),
				o = n(932776),
				a = n(680298),
				s = n(289465),
				c = n(388032),
				d = n(298040);

			function u(e) {
				let {
					applicationIcon: t,
					applicationName: n,
					canNavigate: u,
					guildId: p
				} = e, {
					results: m,
					query: b,
					setQuery: g,
					unfilteredCount: f
				} = (0, o.O)();
				return null != m && f > 0 ? (0, r.jsx)(s.Z, {
					bar: (0, r.jsx)(l.E1j, {
						query: b,
						onChange: g,
						onClear: () => g("")
					}),
					inModal: !1,
					title: c.intl.string(c.t["0hKkS0"]),
					children: m.map((e, o) => (0, r.jsxs)(i.Fragment, {
						children: [(0, r.jsx)(a.Z, {
							applicationIcon: t,
							applicationName: n,
							canNavigate: u,
							command: e,
							guildId: p
						}), o < m.length - 1 ? (0, r.jsx)(l.$i$, {}) : null]
					}, e.id))
				}) : (0, r.jsx)(l.Zbd, {
					className: d.emptyCard,
					editable: !0,
					children: (0, r.jsx)(l.Text, {
						color: "text-muted",
						variant: "text-sm/normal",
						children: c.intl.string(c.t["x78c+P"])
					})
				})
			}
		},
		335049: function(e, t, n) {
			n.d(t, {
				Z: () => T
			});
			var r = n(255367),
				i = n(73800),
				l = n(120356),
				o = n.n(l),
				a = n(512722),
				s = n.n(a),
				c = n(866442),
				d = n(442837),
				u = n(481060),
				p = n(239091),
				m = n(895924),
				b = n(581364),
				g = n(471445),
				f = n(91218),
				h = n(518738),
				x = n(592125),
				j = n(271383),
				O = n(485386),
				v = n(246946),
				y = n(594174),
				_ = n(51144),
				C = n(981631),
				N = n(388032),
				I = n(555781);

			function E(e) {
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

			function S(e, t) {
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

			function T(e) {
				let {
					guild: t,
					id: l,
					type: o,
					isLocked: a,
					lockTooltipText: c
				} = e, d = !a || null != c;
				s()(d, "No lockTooltipText provided while isLocked=true");
				let u = i.useCallback(e => {
					(0, p.jW)(e, async () => {
						let {
							default: e
						} = await n.e("5396").then(n.bind(n, 731646));
						return t => (0, r.jsx)(e, S(E({}, t), {
							id: l,
							label: N.intl.string(N.t.oJ1Mu7)
						}))
					})
				}, [l]);
				switch (o) {
					case m.Kw.CHANNEL:
						return (0, r.jsx)(w, {
							guild: t,
							id: l,
							isLocked: a,
							lockTooltipText: c,
							openEntryContextMenu: u
						});
					case m.Kw.ROLE:
						return (0, r.jsx)(P, {
							guild: t,
							id: l,
							isLocked: a,
							lockTooltipText: c,
							openEntryContextMenu: u
						});
					case m.Kw.USER:
						return (0, r.jsx)(Z, {
							guild: t,
							id: l,
							isLocked: a,
							lockTooltipText: c,
							openEntryContextMenu: u
						})
				}
			}

			function w(e) {
				let {
					guild: t,
					id: n,
					isLocked: l,
					lockTooltipText: a,
					openEntryContextMenu: s
				} = e, c = (0, b.bD)(t.id), {
					icon: p,
					name: m,
					categoryName: f
				} = (0, d.cj)([x.Z], () => {
					if (c === n) return {
						name: N.intl.string(N.t["7YqSGx"]),
						icon: u.VL1
					};
					let e = x.Z.getChannel(n),
						r = (null == e ? void 0 : e.parent_id) != null ? x.Z.getChannel(e.parent_id) : null;
					return {
						icon: null != e ? (0, g.KS)(e, t) : null,
						name: null == e ? void 0 : e.name,
						categoryName: null == r ? void 0 : r.name
					}
				}, [c, t, n]), h = i.useCallback(e => {
					n !== c && s(e)
				}, [c, n, s]);
				return null == p || null == m ? null : (0, r.jsxs)("div", {
					onContextMenu: h,
					className: I.identifier,
					children: [(0, r.jsx)(p, {
						size: "custom",
						width: 20,
						height: 20,
						color: "currentColor",
						className: o()(I.channelIcon, I.image)
					}), (0, r.jsx)(u.Text, {
						className: I.roleName,
						color: "header-primary",
						variant: "text-md/normal",
						children: m
					}), null != f ? (0, r.jsxs)(u.Text, {
						className: I.tag,
						variant: "text-sm/normal",
						children: ["(", f, ")"]
					}) : null, l ? (0, r.jsx)(A, {
						tooltipText: a
					}) : null]
				})
			}

			function P(e) {
				var t;
				let {
					guild: l,
					id: a,
					isLocked: s,
					lockTooltipText: m
				} = e, b = (0, d.e7)([O.Z], () => O.Z.getRole(l.id, a)), g = (0, h.p9)({
					guildId: l.id,
					roleId: a,
					size: 24
				}), x = i.useCallback(e => {
					null != l && null != b && (0, p.jW)(e, async () => {
						let {
							default: e
						} = await n.e("14486").then(n.bind(n, 786746));
						return t => (0, r.jsx)(e, S(E({}, t), {
							guild: l,
							role: b
						}))
					})
				}, [l, b]);
				return (null == b ? void 0 : b.name) == null ? null : (0, r.jsxs)("div", {
					onContextMenu: x,
					className: I.identifier,
					children: [null != g ? (0, r.jsx)(f.Z, E({
						className: o()(I.__invalid_icon, I.image)
					}, g)) : (0, r.jsx)(u.lZ8, {
						size: "custom",
						width: 23,
						height: 23,
						className: o()(I.shield, I.image),
						color: null != (t = b.colorString) ? t : (0, c.Rf)(C.p6O)
					}), (0, r.jsx)(u.Text, {
						className: I.roleName,
						color: "header-primary",
						variant: "text-md/normal",
						children: b.name
					}), s ? (0, r.jsx)(A, {
						tooltipText: m
					}) : null]
				})
			}

			function Z(e) {
				let {
					guild: t,
					id: n,
					isLocked: i,
					lockTooltipText: l,
					openEntryContextMenu: o
				} = e, a = (0, d.e7)([y.default], () => y.default.getUser(n)), s = (0, d.e7)([j.ZP], () => {
					var e;
					return null == (e = j.ZP.getMember(t.id, n)) ? void 0 : e.nick
				}, [t.id, n]), c = (0, d.e7)([v.Z], () => v.Z.hidePersonalInformation);
				return null == a ? null : (0, r.jsxs)("div", {
					onContextMenu: o,
					className: I.identifier,
					children: [(0, r.jsx)(u.qEK, {
						className: I.image,
						src: a.getAvatarURL(t.id, 24),
						"aria-label": a.username,
						size: u.EFr.SIZE_24
					}), (0, r.jsx)(u.Text, {
						className: I.roleName,
						color: "header-primary",
						variant: "text-md/normal",
						children: null != s ? s : a.username
					}), c ? null : (0, r.jsx)(u.Text, {
						className: I.tag,
						variant: "text-sm/normal",
						children: _.ZP.getUserTag(a)
					}), i ? (0, r.jsx)(A, {
						tooltipText: l
					}) : null]
				})
			}

			function A(e) {
				let {
					tooltipText: t
				} = e;
				return (0, r.jsx)(u.ua7, {
					text: t,
					children: e => (0, r.jsx)("div", S(E({
						className: I.lockIcon
					}, e), {
						children: (0, r.jsx)(u.mBM, {
							size: "xs",
							color: "currentColor"
						})
					}))
				})
			}
		},
		869157: function(e, t, n) {
			n.d(t, {
				Z: () => D
			}), n(388685), n(642613);
			var r = n(255367),
				i = n(73800),
				l = n(512722),
				o = n.n(l),
				a = n(392711),
				s = n.n(a),
				c = n(442837),
				d = n(481060),
				u = n(749210),
				p = n(367907),
				m = n(895924),
				b = n(581364),
				g = n(929507),
				f = n(997787),
				h = n(970731),
				x = n(314897),
				j = n(485386),
				O = n(430824),
				v = n(594174),
				y = n(626135),
				_ = n(5192),
				C = n(709054),
				N = n(360606),
				I = n(905753),
				E = n(399860),
				S = n(335049),
				T = n(617012),
				w = n(981631),
				P = n(388032),
				Z = n(981263);

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

			function k(e, t) {
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

			function D(e) {
				let {
					commandId: t,
					editPermissions: n,
					guildId: l,
					noneSelectedText: a,
					overwrites: p,
					hasAccessToMutatePermissions: g
				} = e, h = (0, c.e7)([O.Z], () => O.Z.getGuild(l));
				o()(null != h, "");
				let x = (0, c.e7)([j.Z], () => j.Z.getRoles(l)),
					[y, S] = i.useState(new Set),
					T = i.useMemo(() => {
						let e = (0, b.bD)(l),
							t = s()(x).sortBy(e => e.position).reduce((e, t, n) => (e[t.id] = n, e), {});
						return Object.values(p).filter(e => e.canRead).sort((n, r) => {
							let i = n.type - r.type;
							if (0 !== i) return i;
							switch (n.type) {
								case m.Kw.USER:
									return function(e, t, n) {
										let r = Number(e.canWrite) - Number(t.canWrite);
										if (0 !== r) return r;
										let i = v.default.getUser(e.id),
											l = v.default.getUser(t.id);
										if (null != i && null != l) {
											let e = _.ZP.getName(n, void 0, i),
												t = _.ZP.getName(n, void 0, l);
											return null == e ? void 0 : e.localeCompare(t)
										}
										return C.default.compare(e.id, t.id)
									}(n, r, l);
								case m.Kw.ROLE:
									if (n.id === l) return -1;
									if (r.id === l) return 1;
									return t[n.id] > t[r.id] ? -1 : 1;
								case m.Kw.CHANNEL:
									if (n.id === e) return -1;
									if (r.id === e) return 1;
									let o = Number(n.canWrite) - Number(r.canWrite);
									return 0 !== o ? o : C.default.compare(n.id, r.id)
							}
						})
					}, [l, p, x]),
					w = i.useCallback((e, t) => {
						n({}, [(0, E.rE)(e, t)])
					}, [n]),
					P = i.useCallback((e, t, r) => {
						let i = (0, E.rE)(e, t);
						null != p[i] && n({
							[i]: {
								id: e,
								permission: r,
								type: t
							}
						}, [])
					}, [n, p]);
				i.useEffect(() => {
					let e = Object.values(p).filter(e => e.type === m.Kw.USER && !e.canRead && !y.has(e.id)).map(e => e.id);
					0 !== e.length && (u.Z.requestMembersById(l, e, !1), S(t => new Set([...t, ...e])))
				}, [l, p, y, S]);
				let A = (0, c.e7)([I.Z], () => I.Z.getApplicationId()),
					k = (0, c.e7)([N.default], () => null == A ? void 0 : N.default.integrations.find(e => {
						var t;
						return (null == (t = e.application) ? void 0 : t.id) === A
					})),
					D = (0, c.e7)([f.Z], () => void 0 !== k && f.Z.canShowToggleTooltip(k.id));
				return T.length > 0 ? T.map(e => (0, r.jsx)(R, {
					guild: h,
					commandId: t,
					onChange: t => P(e.id, e.type, t),
					onRemove: () => w(e.id, e.type),
					overwrite: e,
					integration: k,
					canShowMigrationTooltip: D,
					hasAccessToMutatePermissions: g
				}, e.id)) : (0, r.jsx)("div", {
					className: Z.noItemsSelected,
					children: (0, r.jsx)(d.Text, {
						color: "text-muted",
						variant: "text-sm/normal",
						children: a
					})
				})
			}

			function R(e) {
				var t, n, l;
				let o, {
						guild: a,
						commandId: s,
						onChange: c,
						onRemove: u,
						overwrite: f,
						integration: j,
						canShowMigrationTooltip: O,
						hasAccessToMutatePermissions: v
					} = e,
					_ = f.id === a.id || f.id === (0, b.bD)(a.id),
					C = null == j || null == (n = j.application) || null == (t = n.bot) ? void 0 : t.username,
					N = !f.canWrite || !v,
					I = x.default.getId();
				v ? f.canWrite || (f.type === m.Kw.USER ? o = f.id === I ? P.intl.string(P.t["1VF/09"]) : P.intl.string(P.t.P1GnER) : f.type === m.Kw.ROLE && (o = P.intl.string(P.t.mcAijY))) : o = null != s ? P.intl.string(P.t.tybdam) : P.intl.string(P.t.z2hjk5);
				let E = O && null != j && f.id === a.id && void 0 !== C && !f.permission;
				i.useEffect(() => {
					if (E) {
						var e;
						y.default.track(w.rMx.COMMANDS_MIGRATION_TOOLTIP_VIEWED, k(A({}, (0, p.hH)(a.id)), {
							application_id: null == j || null == (e = j.application) ? void 0 : e.id,
							location: "toggle"
						}))
					}
				}, [a.id, null == j || null == (l = j.application) ? void 0 : l.id, E]);
				let D = i.useRef(null),
					R = (0, r.jsx)(d.ua7, {
						tooltipClassName: Z.tooltip,
						text: o,
						shouldShow: N,
						position: "left",
						hideOnClick: !1,
						children: e => (0, r.jsx)("div", k(A({}, e), {
							ref: D,
							children: (0, r.jsx)(T.Z, {
								isDisabled: N,
								currentValue: f.permission,
								onChange: E ? e => {
									g.Z.dismissToggleTooltip(a.id, j), c(e)
								} : c
							})
						}))
					}),
					M = (0, r.jsx)(d.yRy, {
						targetElementRef: D,
						renderPopout: () => (0, r.jsx)(d.P3F, {
							onClick: e => {
								e.stopPropagation(), g.Z.dismissToggleTooltip(a.id, j)
							},
							children: (0, r.jsx)(h.ZP, {
								className: Z.tooltip,
								content: P.intl.format(P.t.pW4Cr6, {
									botName: C,
									link: "https://discord.com/blog/welcome-to-the-new-era-of-discord-apps/"
								}),
								onClick: () => {}
							})
						}),
						position: "bottom",
						align: "center",
						animation: d.yRy.Animation.TRANSLATE,
						onRequestClose: () => g.Z.dismissToggleTooltip(a.id, j),
						shouldShow: E,
						closeOnScroll: !0,
						children: () => R
					});
				return (0, r.jsxs)("div", {
					className: Z.entryItem,
					children: [(0, r.jsx)("div", {
						className: Z.entryName,
						children: (0, r.jsx)(S.Z, {
							guild: a,
							id: f.id,
							type: f.type,
							isLocked: N,
							lockTooltipText: o
						})
					}), (0, r.jsxs)("div", {
						className: Z.entryActions,
						children: [(0, r.jsx)(L, {
							commandId: s,
							isSentinel: _,
							isDisabled: !v,
							onRemove: u
						}), M]
					})]
				}, f.id)
			}

			function L(e) {
				let {
					commandId: t,
					isSentinel: n,
					isDisabled: i,
					onRemove: l
				} = e;
				return i ? null : null == t && n ? null : (0, r.jsx)("div", {
					className: Z.removeActions,
					children: (0, r.jsx)(d.P3F, {
						className: Z.removeContainer,
						"aria-label": P.intl.string(P.t.mT0CQE),
						onClick: l,
						children: (0, r.jsx)(d.XHJ, {
							size: "md",
							color: "currentColor",
							className: Z.removeIcon
						})
					})
				})
			}
		},
		665578: function(e, t, n) {
			n.d(t, {
				Z: () => P
			}), n(388685);
			var r = n(255367),
				i = n(73800),
				l = n(392711),
				o = n.n(l),
				a = n(149765),
				s = n(442837),
				c = n(755721),
				d = n(481060),
				u = n(895924),
				p = n(581364),
				m = n(605436),
				b = n(271383),
				g = n(485386),
				f = n(430824),
				h = n(496675),
				x = n(821864),
				j = n(905753),
				O = n(937427),
				v = n(643886),
				y = n(869157),
				_ = n(454092),
				C = n(289465),
				N = n(981631),
				I = n(689079),
				E = n(388032),
				S = n(190434);

			function T(e) {
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

			function P(e) {
				let {
					applicationId: t,
					commandId: l,
					guildId: O,
					inModal: v,
					editedTargetPermissions: P,
					originalApplicationPermissions: k,
					originalCommandPermissions: D,
					selectedPermissionCount: R
				} = e, L = (0, s.e7)([j.Z], () => null == l ? null : j.Z.getCommand(l), [l]), M = (null == L ? void 0 : L.defaultMemberPermissions) != null, B = (0, s.e7)([f.Z, b.ZP, h.Z], () => {
					let e = f.Z.getGuild(O),
						t = b.ZP.getSelfMember(O);
					return null != e && null != t && (0, p.Ft)({
						PermissionStore: h.Z,
						guild: e,
						selfMember: t,
						applicationLevelPermissions: k,
						commandLevelPermissions: D,
						defaultMemberPermissions: null == L ? void 0 : L.defaultMemberPermissions
					})
				}, [O, L, k, D]), U = null != l ? l : t, [W, H] = i.useMemo(() => {
					let e = {},
						t = {};
					for (let [n, r] of Object.entries(P)) r.type === u.Kw.CHANNEL ? e[n] = r : t[n] = r;
					return [e, t]
				}, [P]), G = i.useCallback(e => {
					let t = f.Z.getGuild(O),
						n = b.ZP.getSelfMember(O);
					return null != t && null != n && (null != l ? (0, p.Ft)({
						PermissionStore: h.Z,
						guild: t,
						selfMember: n,
						applicationLevelPermissions: k,
						commandLevelPermissions: e,
						defaultMemberPermissions: null == L ? void 0 : L.defaultMemberPermissions
					}) : (0, p.Ft)({
						PermissionStore: h.Z,
						guild: t,
						selfMember: n,
						applicationLevelPermissions: e
					}))
				}, [O, L, l, k]), z = i.useCallback((e, t) => {
					let n, r = null;
					if (0 !== t.length) {
						let e = P[t[0]];
						if (e.type === u.Kw.USER) n = _.s.REMOVE_SELF;
						else {
							let t = e.id;
							if (n = _.s.REMOVE_ROLE, (0, m.pM)(O, t)) r = "@everyone";
							else {
								let e = g.Z.getRole(O, t);
								r = null != e ? e.name : "role"
							}
						}
					} else {
						let t = Object.values(e)[0].id;
						if (n = _.s.DENY_ROLE, (0, m.pM)(O, t)) r = "@everyone";
						else {
							let e = g.Z.getRole(O, t);
							r = null != e ? e.name : "role"
						}
					}(0, _._)(n, r)
				}, [O, P]), F = i.useCallback((e, n) => {
					let r = {};
					for (let [e, t] of Object.entries(P)) r[e] = {
						id: t.id,
						permission: t.permission,
						type: t.type
					};
					if (r = Object.assign(r, e), n.length > 0 && (r = o().omit(r, n)), !G(r)) return void z(e, n);
					x.W4(t, U, r)
				}, [t, P, U, G, z]), V = i.useCallback(() => {
					let e = Object.keys(W);
					return (0, d.ZDy)(async () => {
						let {
							default: t
						} = await n.e("64908").then(n.bind(n, 557944));
						return n => (0, r.jsx)(t, T({
							editPermissions: F,
							guildId: O,
							headerText: E.intl.string(E.t["i1c+kZ"]),
							hasMemberSearch: !1,
							overwrittenKeys: e,
							search: Z,
							searchPlaceholderText: E.intl.string(E.t["TLQo/v"]),
							selectedPermissionCount: R
						}, n))
					})
				}, [F, W, O, R]), K = i.useCallback(() => {
					let e = Object.keys(H);
					return (0, d.ZDy)(async () => {
						let {
							default: t
						} = await n.e("64908").then(n.bind(n, 557944));
						return n => (0, r.jsx)(t, T({
							editPermissions: F,
							guildId: O,
							hasMemberSearch: !0,
							headerText: E.intl.string(E.t["56jRn5"]),
							overwrittenKeys: e,
							search: A,
							searchPlaceholderText: E.intl.string(E.t.wAfO5e),
							selectedPermissionCount: R
						}, n))
					})
				}, [F, O, H, R]), q = i.useCallback(() => (0, d.ZDy)(async () => {
					let {
						default: e
					} = await n.e("21897").then(n.bind(n, 303313)), t = L.defaultMemberPermissions;
					return a.fS(t, p.BO) && (t = N.Plq.ADMINISTRATOR), n => (0, r.jsx)(e, w(T({}, n), {
						defaultMemberPermissions: t
					}))
				}), [L]), Y = R - I._n, X = Y >= 0, $ = [{
					buttonClick: K,
					buttonText: E.intl.string(E.t["56jRn5"]),
					noneSelectedText: E.intl.string(E.t.C0rYfn),
					overwrites: H,
					title: null == l ? E.intl.string(E.t["vPWe+/"]) : E.intl.string(E.t["1jLVGB"])
				}, {
					buttonClick: V,
					buttonText: E.intl.string(E.t["i1c+kZ"]),
					noneSelectedText: E.intl.string(E.t.UBJhCw),
					overwrites: W,
					title: null == l ? E.intl.string(E.t.OGiMXF) : E.intl.string(E.t.Ujbaqq)
				}];
				return (0, r.jsxs)(i.Fragment, {
					children: [Y > 0 ? (0, r.jsx)(d.Wn, {
						messageType: d.QYI.WARNING,
						children: E.intl.format(E.t["B/dFBA"], {
							removeCount: Y
						})
					}) : null, M ? (0, r.jsxs)("div", {
						className: S.requiredPermissionsBanner,
						children: [(0, r.jsx)(d.d3s, {
							size: "sm",
							color: "currentColor",
							className: S.icon
						}), (0, r.jsx)("span", {
							className: S.message,
							children: E.intl.format(E.t["2889Gh"], {})
						}), (0, r.jsx)(c.zx, {
							color: c.zx.Colors.PRIMARY,
							onClick: q,
							size: c.zx.Sizes.SMALL,
							className: S.addButton,
							children: E.intl.string(E.t["HO/oXl"])
						})]
					}) : null, $.map((e, t) => {
						let n = t => (0, r.jsx)(c.zx, w(T({}, t), {
								color: c.zx.Colors.PRIMARY,
								disabled: X || !B,
								onClick: e.buttonClick,
								size: c.zx.Sizes.TINY,
								className: S.addButton,
								children: e.buttonText
							})),
							i = null;
						return B ? X && (i = E.intl.string(E.t.XTwtW1)) : i = null != l ? E.intl.string(E.t.tybdam) : E.intl.string(E.t.z2hjk5), (0, r.jsx)(C.Z, {
							bar: (0, r.jsx)(d.ua7, {
								tooltipClassName: S.tooltip,
								text: i,
								shouldShow: null != i,
								children: e => n(e)
							}),
							inModal: v,
							title: e.title,
							children: (0, r.jsx)("div", {
								className: v ? void 0 : S.listContainer,
								children: (0, r.jsx)(y.Z, {
									guildId: O,
									commandId: l,
									noneSelectedText: e.noneSelectedText,
									overwrites: e.overwrites,
									editPermissions: F,
									hasAccessToMutatePermissions: B
								})
							})
						}, t)
					})]
				})
			}

			function Z(e) {
				let t = (0, O.w)(e);
				return w(T({}, t), {
					results: t.results.map(e => w(T({}, e), {
						type: u.Kw.CHANNEL
					}))
				})
			}

			function A(e) {
				let t = (0, v.U)(e);
				return w(T({}, t), {
					results: t.results.roles.map(e => w(T({}, e), {
						type: u.Kw.ROLE
					})).concat(t.results.members.map(e => w(T({}, e), {
						type: u.Kw.USER
					})))
				})
			}
		},
		617012: function(e, t, n) {
			n.d(t, {
				Z: () => m
			});
			var r = n(255367),
				i = n(73800),
				l = n(120356),
				o = n.n(l),
				a = n(481060),
				s = n(388032),
				c = n(857538);

			function d(e) {
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

			function u(e, t) {
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
			let p = [!1, !0];

			function m(e) {
				let {
					isDisabled: t,
					currentValue: n,
					onChange: l
				} = e, s = (0, a.arW)({
					orientation: "horizontal",
					isDisabled: t
				}), {
					ref: m
				} = s, g = function(e, t) {
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
				}(s, ["ref"]), f = i.useCallback(e => {
					t || e === n || l(e)
				}, [t, n, l]);
				return (0, r.jsx)("div", u(d({
					className: o()(c.group, {
						[c.disabled]: t
					}),
					ref: m
				}, g), {
					children: p.map(e => (0, r.jsx)(b, {
						isSelected: n === e,
						itemValue: e,
						onClick: () => f(e)
					}, e.toString()))
				}))
			}

			function b(e) {
				let {
					isSelected: t,
					itemValue: n,
					onClick: i
				} = e, l = n ? c.allow : c.deny, p = n ? a.dz2 : a.Dio, m = n ? s.intl.string(s.t.RzDfSk) : s.intl.string(s.t["6639Oz"]), b = (0, a.xUy)({
					isSelected: t,
					label: m
				});
				return (0, r.jsx)(a.P3F, u(d({
					className: o()(c.item, l, {
						[c.selected]: t
					}),
					onClick: i
				}, b), {
					children: (0, r.jsx)(p, {
						size: "xs",
						color: "currentColor"
					})
				}))
			}
		},
		454092: function(e, t, n) {
			n.d(t, {
				_: () => c,
				s: () => s
			});
			var r, i = n(668781),
				l = n(63063),
				o = n(981631),
				a = n(388032),
				s = ((r = {})[r.REMOVE_SELF = 0] = "REMOVE_SELF", r[r.REMOVE_ROLE = 1] = "REMOVE_ROLE", r[r.DENY_ROLE = 2] = "DENY_ROLE", r);

			function c(e, t) {
				let n;
				0 === e ? n = a.intl.format(a.t["/S6f5+"], {}) : 1 === e ? n = a.intl.format(a.t.EBhv4e, {
					name: t
				}) : 2 === e && (n = a.intl.format(a.t["59Dbw8"], {
					name: t
				})), i.Z.show({
					title: a.intl.string(a.t.vElC9f),
					body: n,
					cancelText: a.intl.string(a.t.psXQHB),
					onCancel() {
						window.open(l.Z.getArticleURL(o.BhN.APPLICATION_COMMAND_PERMISSIONS_LOCKOUT))
					}
				})
			}
		},
		289465: function(e, t, n) {
			n.d(t, {
				Z: () => s
			});
			var r = n(255367);
			n(73800);
			var i = n(120356),
				l = n.n(i),
				o = n(481060),
				a = n(272997);

			function s(e) {
				let {
					bar: t,
					children: n,
					className: i,
					inModal: s,
					title: c
				} = e;
				return (0, r.jsxs)(o.Zbd, {
					editable: !0,
					className: l()(a.card, i, {
						[a.inModal]: s
					}),
					children: [(0, r.jsxs)("div", {
						className: l()(a.cardHeader, {
							[a.inModal]: s
						}),
						children: [(0, r.jsx)(o.Text, {
							variant: "text-sm/semibold",
							children: c
						}), (0, r.jsx)("div", {
							children: t
						})]
					}), s ? (0, r.jsx)(o.$i$, {}) : null, n]
				})
			}
		},
		590157: function(e, t, n) {
			n.d(t, {
				Z: () => g
			});
			var r = n(255367),
				i = n(73800),
				l = n(442837),
				o = n(481060),
				a = n(366598),
				s = n(821864),
				c = n(905753),
				d = n(995390),
				u = n(469880),
				p = n(665578),
				m = n(388032),
				b = n(883685);

			function g(e) {
				let {
					application: t,
					canNavigate: n,
					guildId: d
				} = e, p = (0, l.e7)([c.Z], () => c.Z.isUnavailable());
				return (i.useEffect(() => (s.I4(t.id), s.kZ), [t.id]), i.useEffect(() => {
					s.gq(t.id, d, t.id), s.Sn(d, t.id)
				}, [t.id, d]), p) ? null : (0, r.jsxs)(i.Fragment, {
					children: [(0, r.jsx)(a.Z, {
						icon: (0, r.jsx)(o.SsZ, {
							size: "md",
							color: "currentColor"
						}),
						title: m.intl.string(m.t.RGoJND)
					}), (0, r.jsx)(o.Text, {
						color: "text-muted",
						variant: "text-sm/normal",
						children: m.intl.string(m.t.sCkD3d)
					}), (0, r.jsx)(f, {
						guildId: d,
						applicationId: t.id
					}), (0, r.jsx)(u.Z, {
						applicationIcon: t.icon,
						applicationName: t.name,
						canNavigate: n,
						guildId: d
					})]
				})
			}

			function f(e) {
				let {
					applicationId: t,
					guildId: n
				} = e, {
					originalApplicationPermissions: i,
					editedTargetPermissions: l,
					selectedPermissionCount: o
				} = (0, d.Z)(n, t);
				return (0, r.jsx)("div", {
					className: b.applicationPermissions,
					children: (0, r.jsx)(p.Z, {
						applicationId: t,
						guildId: n,
						inModal: !1,
						editedTargetPermissions: l,
						originalApplicationPermissions: i,
						selectedPermissionCount: o
					})
				})
			}
		},
		270394: function(e, t, n) {
			n.d(t, {
				Z: () => H
			}), n(997841), n(388685);
			var r = n(255367),
				i = n(73800),
				l = n(120356),
				o = n.n(l),
				a = n(512722),
				s = n.n(a),
				c = n(392711),
				d = n.n(c),
				u = n(533800),
				p = n(692547),
				m = n(755721),
				b = n(481060),
				g = n(447543),
				f = n(225433),
				h = n(129861),
				x = n(493544),
				j = n(700582),
				O = n(410030),
				v = n(933557),
				y = n(346486),
				_ = n(600164),
				C = n(666657),
				N = n(664452),
				I = n(560114),
				E = n(699516),
				S = n(594174),
				T = n(630388),
				w = n(965638),
				P = n(757539),
				Z = n(981631),
				A = n(388032),
				k = n(541056),
				D = n(588866),
				R = n(20493);

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
			let B = {
					INVITER: 3,
					INVITE_CODE: 3,
					USES: 1,
					EXPIRES: 2
				},
				U = {
					HEADER: 0,
					ACTIONS_V1: 1,
					ACTIONS_V2: 2,
					TABLE: 3
				};

			function W(e) {
				var t;
				let {
					invite: n,
					showChannel: i = !1,
					inviteDisabled: l = !1,
					hide: a = !1
				} = e, s = n.uses;
				return n.maxUses > 0 && (s = "".concat(n.uses, "/").concat(n.maxUses)), (0, r.jsxs)(_.Z, {
					className: o()(k.inviteSettingsInviteRow, D.card, {
						[k.inviteDisabledRow]: l
					}),
					children: [(0, r.jsxs)(_.Z, {
						grow: B.INVITER,
						basis: 0,
						align: _.Z.Align.CENTER,
						className: k.text,
						children: [null != n.inviter && (0, r.jsx)(j.Z, {
							user: n.inviter,
							size: b.EFr.SIZE_24,
							className: k.avatar
						}), (0, r.jsxs)("div", {
							children: [null != n.inviter && (0, r.jsx)(h.Z, {
								discriminatorClass: k.discriminator,
								user: n.inviter
							}), i && (0, r.jsx)(b.Text, {
								variant: "text-xs/normal",
								color: "header-secondary",
								children: (0, v.F6)(n.channel, S.default, E.Z, !0)
							})]
						})]
					}), (0, r.jsx)(_.Z, {
						grow: B.INVITE_CODE,
						shrink: 1,
						basis: 0,
						align: _.Z.Align.CENTER,
						className: k.text,
						children: (0, r.jsxs)("div", {
							children: [(0, r.jsx)(b.Text, {
								className: k.inviteCode,
								variant: "text-sm/normal",
								children: a ? "..." : n.code
							}), !a && (0, T.yE)(null != (t = n.flags) ? t : 0, u.$.IS_APPLICATION_BYPASS) ? (0, r.jsxs)("div", {
								className: k.bypass,
								children: [(0, r.jsx)(b.Text, {
									className: k.text,
									variant: "text-xs/normal",
									color: "text-muted",
									children: A.intl.string(A.t["1i1bUl"])
								}), (0, r.jsx)(b.ua7, {
									text: A.intl.string(A.t["jvd/LC"]),
									children: e => (0, r.jsx)(b.d3s, M(L({
										size: "xxs",
										color: "currentColor"
									}, e), {
										className: k.infoIcon
									}))
								})]
							}) : null]
						})
					}), (0, r.jsx)(_.Z, {
						grow: B.USES,
						basis: 0,
						align: _.Z.Align.CENTER,
						className: k.text,
						children: (0, r.jsx)(b.Text, {
							className: k.uses,
							variant: "text-sm/normal",
							children: s
						})
					}), (0, r.jsx)(_.Z, {
						grow: B.EXPIRES,
						basis: 0,
						align: _.Z.Align.CENTER,
						className: o()(k.text, k.countdownColumn),
						children: (0, r.jsx)(b.Text, {
							className: k.countdown,
							variant: "text-sm/normal",
							children: (0, r.jsx)(y.Z, {
								deadline: n.getExpiresAt()
							})
						})
					}), (0, r.jsx)(f.Z, {
						className: k.revokeInvite,
						onClick: () => {
							g.ZP.revokeInvite(n)
						}
					})]
				})
			}

			function H(e) {
				let {
					invites: t,
					guild: l,
					hide: o,
					canCreateInvites: a,
					withV2Actions: c,
					channel: u = null,
					showChannel: g = !1,
					loading: f = !1
				} = e;
				s()(null != l, "guild is required");
				let h = (0, O.ZP)(),
					j = (0, w.MQ)(l),
					v = (0, w.O4)(l),
					y = i.useMemo(() => null == t || f ? [] : d()(t).sortBy(e => {
						var t, n;
						return (null != (n = null == (t = e.inviter) ? void 0 : t.username) ? n : "").toLowerCase()
					}).value(), [t, f]),
					E = () => {
						(0, b.ZDy)(async () => e => (0, r.jsx)(I.default, M(L({}, e), {
							channel: u,
							guild: l,
							source: Z.t4x.SETTINGS_INVITE
						})))
					},
					[S, T] = i.useState(62),
					D = () => {
						let e = {
							source: C.Zu.GUILD_SETTINGS
						};
						(0, b.ZDy)(async () => t => (0, r.jsx)(N.default, M(L({}, t), {
							guildId: l.id,
							analyticsData: e
						})))
					};
				return (0, r.jsx)(x.Xi, {
					sections: [1, +!c, +!!c, Math.max(1, y.length)],
					renderSection: e => {
						let {
							section: t
						} = e;
						if (t === U.TABLE)
							if (0 === y.length && !f) return (0, r.jsx)("div", {
								children: (0, r.jsxs)(b.ubH, {
									theme: h,
									children: [(0, r.jsx)(b.oxh, {
										darkSrc: n(914814),
										lightSrc: n(370392),
										width: 256,
										height: 130
									}), (0, r.jsx)(b.OZU, {
										note: A.intl.string(A.t.F53CAQ),
										children: A.intl.string(A.t["+nLJkZ"])
									})]
								})
							});
							else return (0, r.jsxs)(_.Z, {
								children: [(0, r.jsx)(_.Z.Child, {
									grow: B.INVITER,
									basis: 0,
									className: R.marginReset,
									children: (0, r.jsx)(b.vwX, {
										children: A.intl.string(A.t.EgHyKy)
									})
								}), (0, r.jsx)(_.Z.Child, {
									basis: 0,
									grow: B.INVITE_CODE,
									className: R.marginReset,
									children: (0, r.jsx)(b.vwX, {
										children: A.intl.string(A.t.LBlFEB)
									})
								}), (0, r.jsx)(_.Z.Child, {
									grow: B.USES,
									basis: 0,
									children: (0, r.jsx)(b.vwX, {
										children: A.intl.string(A.t.erWrmJ)
									})
								}), (0, r.jsx)(_.Z.Child, {
									grow: B.EXPIRES,
									basis: 0,
									children: (0, r.jsx)(b.vwX, {
										children: A.intl.string(A.t["1aM27e"])
									})
								})]
							});
						return null
					},
					renderRow: e => {
						let {
							section: t,
							row: n
						} = e;
						if (t === U.HEADER) return (0, r.jsx)(b.X6q, {
							variant: "heading-lg/semibold",
							color: "header-primary",
							className: k.header,
							children: A.intl.string(A.t["9F90iY"])
						});
						if (t === U.ACTIONS_V1) return (0, r.jsxs)(b.hjN, {
							className: k.actions,
							children: [(0, r.jsx)(b.R94, {
								className: R.marginBottom20,
								type: b.geA.DESCRIPTION,
								children: !0 === a ? A.intl.format(A.t["97VdNj"], {
									onCreateInvite: E
								}) : A.intl.string(A.t.WDw38P)
							}), (0, r.jsxs)("div", {
								className: k.inviteDisabledContainer,
								children: [(0, r.jsx)(m.zx, {
									size: m.zx.Sizes.SMALL,
									color: v ? m.zx.Colors.BRAND : m.zx.Colors.RED,
									disabled: !j,
									onClick: D,
									children: v ? A.intl.string(A.t["/dbw3N"]) : A.intl.string(A.t.Uwsjn5)
								}), v && (0, r.jsxs)("div", {
									className: k.inviteDisabledTip,
									children: [(0, r.jsx)(b.P4T, {
										size: "custom",
										width: 20,
										height: 20,
										color: p.Z.unsafe_rawColors.YELLOW_300.css
									}), (0, r.jsx)(b.Text, {
										variant: "text-sm/normal",
										children: A.intl.string(A.t["2LLbj4"])
									})]
								})]
							}), (0, r.jsx)(b.$i$, {
								className: k.headerDivider
							})]
						}, "header");
						if (t === U.ACTIONS_V2) return (0, r.jsx)(P.Y, {
							hasInvites: y.length > 0,
							setHeight: T,
							onShowDisableInvites: D,
							onShowInviteModal: E,
							hasInviteDisabledPermission: j,
							invitesDisabled: v,
							canCreateInvites: a
						});
						if (t === U.TABLE) {
							if (0 === y.length && 0 === n && f) return (0, r.jsx)(b.$jN, {
								className: R.marginTop20,
								type: b.$jN.Type.SPINNING_CIRCLE
							}, "spinner");
							let e = y[n];
							return null == e ? null : (0, r.jsx)(W, {
								hide: o,
								invite: e,
								showChannel: g,
								inviteDisabled: v
							}, e.code)
						}
					},
					rowHeight: (e, t) => e === U.HEADER ? 64 : e === U.ACTIONS_V1 ? 109 : e === U.ACTIONS_V2 ? S : e === U.TABLE ? 0 === y.length && 0 === t && f ? 62 : 62 * (null != y[t]) : 0,
					sectionHeight: e => e === U.TABLE ? 0 !== y.length || f ? 28 : 240 : 0
				})
			}
		},
		757539: function(e, t, n) {
			n.d(t, {
				Y: () => p
			});
			var r = n(255367),
				i = n(73800),
				l = n(392711),
				o = n(793030),
				a = n(755721),
				s = n(481060),
				c = n(393903),
				d = n(388032),
				u = n(351462);

			function p(e) {
				let {
					hasInvites: t,
					setHeight: n,
					onShowDisableInvites: p,
					onShowInviteModal: m,
					hasInviteDisabledPermission: b,
					invitesDisabled: g,
					canCreateInvites: f
				} = e, h = i.useMemo(() => (0, l.debounce)(n, 100), [n]), x = i.useCallback(e => {
					let t = e.contentRect;
					null != t && h(t.height)
				}, [h]), j = (0, c.y)(x);
				return (0, r.jsxs)("div", {
					ref: j,
					className: u.actions,
					children: [(0, r.jsx)(o.X6, {
						variant: "text-xs/bold",
						color: "text-muted",
						className: u.eyebrow,
						children: t ? d.intl.string(d.t.DjWsyc) : d.intl.string(d.t.AmwmLi)
					}), (0, r.jsxs)("div", {
						className: u.inviteButtons,
						children: [(0, r.jsx)(a.zx, {
							size: a.zx.Sizes.MEDIUM,
							color: g ? a.zx.Colors.BRAND : a.zx.Colors.RED,
							look: a.zx.Looks.OUTLINED,
							disabled: !b,
							onClick: p,
							children: g ? d.intl.string(d.t["/dbw3N"]) : d.intl.string(d.t.Uwsjn5)
						}), !0 === f ? (0, r.jsx)(s.zxk, {
							variant: "primary",
							text: d.intl.string(d.t.KmK3q6),
							onClick: m
						}) : null]
					})]
				})
			}
		},
		486199: function(e, t, n) {
			n.d(t, {
				Z: () => d
			}), n(953529);
			var r = n(255367);
			n(73800);
			var i = n(120356),
				l = n.n(i),
				o = n(481060),
				a = n(600164),
				s = n(388032),
				c = n(410322);

			function d(e) {
				let {
					name: t,
					description: n,
					icon: i,
					imageSrc: d,
					iconBackgroundColor: u,
					iconClassName: p,
					iconWrapperClassName: m,
					details: b,
					detailsClassName: g,
					isHeader: f,
					isPremium: h
				} = e;
				return (0, r.jsxs)(a.Z, {
					justify: a.Z.Justify.CENTER,
					className: c.wrapper,
					children: [null != i || null != d ? (0, r.jsx)(a.Z.Child, {
						shrink: 0,
						grow: 0,
						children: function(e, t, n, i, o) {
							if (null != t) return (0, r.jsx)("img", {
								alt: "",
								src: t,
								className: l()(c.iconWrapper, i)
							});
							let s = null;
							return null != e && (s = "string" == typeof e ? (0, r.jsx)("img", {
								alt: "",
								src: e,
								className: l()(c.icon, i)
							}) : (0, r.jsx)(e, {
								className: l()(c.icon, i),
								color: "currentColor"
							})), (0, r.jsx)(a.Z, {
								align: a.Z.Align.CENTER,
								justify: a.Z.Justify.CENTER,
								style: {
									backgroundColor: n
								},
								className: l()(c.iconWrapper, o),
								children: s
							})
						}(i, d, u, p, m)
					}) : null, function(e) {
						let {
							name: t,
							description: n,
							details: i,
							detailsClassName: d,
							isHeader: u,
							isPremium: p
						} = e, m = null == i ? void 0 : i.map((e, t) => {
							let {
								icon: n,
								text: i
							} = e;
							return (0, r.jsxs)("div", {
								className: l()(c.detailsWrapper, u ? c.headerDetailsWrapper : null),
								children: [null != n ? (0, r.jsx)(n, {
									size: "xs",
									color: "currentColor",
									className: c.detailsIcon
								}) : null, (0, r.jsx)(o.Text, {
									variant: "text-xs/normal",
									color: "header-secondary",
									className: d,
									children: i
								})]
							}, t)
						});
						return (0, r.jsxs)(a.Z, {
							direction: a.Z.Direction.VERTICAL,
							children: [(0, r.jsxs)(o.X6q, {
								variant: u ? "heading-xl/semibold" : "heading-md/medium",
								className: u ? c.header : c.secondaryHeader,
								children: [t, p && (0, r.jsx)(o.ua7, {
									text: s.intl.string(s.t.VFuFur),
									children: e => {
										var t, n;
										return (0, r.jsx)(o.Prq, (t = function(e) {
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
											size: "xs",
											color: "currentColor"
										}, e), n = n = {
											className: c.premiumIcon
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
							}), null != n ? (0, r.jsx)(o.Text, {
								variant: "text-sm/normal",
								color: "header-secondary",
								children: n
							}) : null, (0, r.jsx)(a.Z, {
								direction: a.Z.Direction.HORIZONTAL,
								align: a.Z.Align.CENTER,
								wrap: a.Z.Wrap.WRAP,
								children: m
							})]
						})
					}({
						name: t,
						description: n,
						details: b,
						detailsClassName: g,
						isHeader: f,
						isPremium: h
					})]
				})
			}
		},
		366598: function(e, t, n) {
			n.d(t, {
				Z: () => c
			});
			var r = n(255367),
				i = n(73800),
				l = n(120356),
				o = n.n(l),
				a = n(481060),
				s = n(258163);

			function c(e) {
				let {
					children: t,
					icon: n,
					title: l
				} = e;
				return (0, r.jsxs)("header", {
					className: s.header,
					children: [(0, r.jsxs)("div", {
						className: s.name,
						children: [i.cloneElement(n, {
							className: o()(n.props.className, s.icon),
							height: 24,
							width: 24
						}), (0, r.jsx)(a.X6q, {
							variant: "heading-md/semibold",
							className: s.title,
							children: l
						})]
					}), t]
				})
			}
		},
		919196: function(e, t, n) {
			n.d(t, {
				Z: () => I
			}), n(388685), n(539854), n(953529);
			var r = n(255367),
				i = n(73800),
				l = n(243814),
				o = n(442837),
				a = n(481060),
				s = n(668781),
				c = n(600164),
				d = n(434404),
				u = n(590157),
				p = n(280885),
				m = n(496675),
				b = n(768581),
				g = n(709054),
				f = n(51144),
				h = n(486199),
				x = n(366598),
				j = n(125657),
				O = n(725875),
				v = n(981631),
				y = n(388032),
				_ = n(704526);

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

			function N(e) {
				var t, n, {
						application: i,
						guild: l,
						integration: o
					} = e,
					c = function(e, t) {
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
					}(e, ["application", "guild", "integration"]);
				return (0, r.jsx)(a.ConfirmModal, (t = C({}, c), n = n = {
					header: y.intl.formatToPlainString(y.t["rL9d//"], {
						applicationName: i.name
					}),
					confirmText: y.intl.string(y.t.ebGf4u),
					cancelText: y.intl.string(y.t["ETE/oK"]),
					onConfirm: () => {
						d.Z.disableIntegration(l.id, o.id).catch(() => {
							s.Z.show({
								title: y.intl.string(y.t.wYqMmJ),
								body: y.intl.string(y.t.A4Mnsr)
							})
						})
					},
					children: (0, r.jsx)(a.Text, {
						variant: "text-md/normal",
						children: y.intl.format(y.t.FGE8yc, {
							applicationName: i.name
						})
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

			function I(e) {
				var t;
				let {
					guild: n,
					applicationIntegration: s,
					selectableWebhookChannels: d,
					editedWebhook: I,
					errors: E,
					canNavigate: S
				} = e, {
					application: T,
					integration: w,
					webhooks: P
				} = s, [Z, A] = (0, o.Wu)([m.Z], () => [m.Z.can(v.Plq.MANAGE_ROLES, n), null == T.bot || m.Z.canManageUser(v.Plq.MANAGE_GUILD, T.bot.id, n)], [T.bot, n]), k = (0, o.e7)([m.Z], () => m.Z.can(v.Plq.MANAGE_WEBHOOKS, n), [n]), D = i.useCallback(() => {
					S() && (0, a.h7j)(e => (0, r.jsx)(N, C({
						guild: n,
						application: T,
						integration: w
					}, e)))
				}, [T, S, n, w]), R = i.useMemo(() => {
					let e = [{
						icon: a.T39,
						text: y.intl.formatToPlainString(y.t.gcdJ8P, {
							timestamp: g.default.extractTimestamp(w.id)
						})
					}];
					return null != w.user && e.push({
						icon: a.tBG,
						text: y.intl.formatToPlainString(y.t.qE7oqq, {
							user: f.ZP.getUserTag(w.user)
						})
					}), e
				}, [w.id, w.user]), L = i.useMemo(() => {
					var e;
					return null != T.bot && (null == (e = w.scopes) ? void 0 : e.includes(l.x.BOT)) ? (0, r.jsx)(j.Z, {
						guild: n,
						applicationIntegration: s
					}) : (0, r.jsx)(a.Zbd, {
						className: _.emptyCard,
						editable: !0,
						children: (0, r.jsx)(a.Text, {
							color: "text-muted",
							variant: "text-sm/normal",
							children: y.intl.string(y.t.pfLnzc)
						})
					})
				}, [T.bot, s, n, w.scopes]);
				return (0, r.jsxs)(r.Fragment, {
					children: [(0, r.jsx)(h.Z, {
						name: T.name,
						imageSrc: null != (t = T.getIconURL(32)) ? t : b.pK["0"],
						details: R,
						isHeader: !0
					}), (null == T ? void 0 : T.description) != null ? (0, r.jsx)(p.Z, {
						userBio: T.description,
						className: _.headerDescription
					}) : null, Z ? (0, r.jsx)(u.Z, {
						application: T,
						canNavigate: S,
						guildId: n.id
					}) : null, (0, r.jsx)(a.$i$, {
						className: _.headerDivider
					}), null != T.bot ? (0, r.jsxs)("div", {
						className: _.section,
						children: [(0, r.jsx)(x.Z, {
							icon: (0, r.jsx)(a.wGt, {
								size: "xs",
								color: "currentColor"
							}),
							title: y.intl.string(y.t.AOdOYm)
						}), L]
					}) : null, (0, r.jsxs)("div", {
						className: _.section,
						children: [(0, r.jsx)(x.Z, {
							icon: (0, r.jsx)(a.tYf, {
								size: "md",
								color: "currentColor"
							}),
							title: y.intl.string(y.t["t9ZX/P"])
						}), P.length > 0 ? (0, r.jsx)(O.Z, {
							webhooks: P,
							editedWebhook: I,
							selectableWebhookChannels: d,
							errors: E,
							canNavigate: S
						}) : (0, r.jsx)(a.Zbd, {
							className: _.emptyCard,
							editable: !0,
							children: (0, r.jsx)(a.Text, {
								color: "text-muted",
								variant: "text-sm/normal",
								children: k ? y.intl.string(y.t.ahPd2d) : y.intl.string(y.t.axqYMj)
							})
						})]
					}), (0, r.jsx)(a.$i$, {
						className: _.headerDivider
					}), (0, r.jsxs)(c.Z, {
						className: _.section,
						justify: c.Z.Justify.BETWEEN,
						align: c.Z.Align.CENTER,
						children: [(0, r.jsx)(a.Text, {
							color: "header-secondary",
							variant: "text-sm/normal",
							children: A ? y.intl.string(y.t.hdneLy) : y.intl.string(y.t.xRCMq6)
						}), (0, r.jsx)(c.Z.Child, {
							grow: 0,
							shrink: 0,
							children: (0, r.jsx)(a.zxk, {
								variant: "critical-primary",
								size: "sm",
								text: y.intl.string(y.t.ebGf4u),
								disabled: !A,
								onClick: D
							})
						})]
					})]
				})
			}
		},
		731072: function(e, t, n) {
			n.d(t, {
				Z: () => p
			});
			var r = n(255367),
				i = n(73800),
				l = n(481060),
				o = n(139387),
				a = n(726542),
				s = n(434404),
				c = n(486199),
				d = n(13051),
				u = n(621057);

			function p(e) {
				let {
					integrations: t,
					editedIntegration: n,
					guild: p,
					platformType: m,
					labelText: b,
					descriptionText: g,
					helpText: f,
					canNavigate: h
				} = e, x = a.Z.get(m), j = i.useCallback(async e => {
					h() && (await s.Z.enableIntegration(p.id, e.type, e.id), o.Z.startEditingIntegration(e.id))
				}, [h, p.id]), O = i.useCallback(e => {
					h() && (e.id === (null == n ? void 0 : n.id) && o.Z.stopEditingIntegration(), s.Z.disableIntegration(p.id, e.id))
				}, [h, n, p.id]), v = i.useCallback(e => {
					h() && (e === (null == n ? void 0 : n.id) ? o.Z.stopEditingIntegration() : o.Z.startEditingIntegration(e))
				}, [h, n]);
				return (0, r.jsxs)(r.Fragment, {
					children: [(0, r.jsx)(c.Z, {
						name: b,
						icon: null == x ? void 0 : x.icon.whiteSVG,
						iconBackgroundColor: null == x ? void 0 : x.color,
						iconClassName: u.platformIcon,
						description: g,
						isHeader: !0
					}), (0, r.jsx)(l.$i$, {
						className: u.headerDivider
					}), t.map(e => (0, r.jsx)(d.Z, {
						integration: e,
						editedIntegration: n,
						guild: p,
						isExpanded: (null == n ? void 0 : n.id) === e.id,
						onEnable: j,
						onDisable: O,
						onToggleExpand: () => v(e.id)
					}, e.id)), (0, r.jsx)(l.Text, {
						className: u.helpText,
						color: "text-muted",
						variant: "text-sm/normal",
						children: f
					})]
				})
			}
		},
		494118: function(e, t, n) {
			n.d(t, {
				Z: () => g
			});
			var r = n(255367);
			n(73800);
			var i = n(780384),
				l = n(481060),
				o = n(410030),
				a = n(600164),
				s = n(63063),
				c = n(725875),
				d = n(981631),
				u = n(388032),
				p = n(431349),
				m = n(893916),
				b = n(408942);

			function g(e) {
				let {
					followedChannelWebhooks: t,
					editedWebhook: n,
					selectableWebhookChannels: g,
					errors: f,
					canNavigate: h
				} = e, x = (0, o.ZP)();
				return (0, r.jsxs)(l.hjN, {
					children: [(0, r.jsx)(l.R94, {
						type: l.geA.DESCRIPTION,
						children: u.intl.format(u.t["5u+aV1"], {
							helpdeskArticle: s.Z.getArticleURL(d.BhN.CHANNEL_FOLLOWING)
						})
					}), (0, r.jsx)(l.$i$, {
						className: p.headerDivider
					}), t.length > 0 ? (0, r.jsx)(c.Z, {
						webhooks: t,
						editedWebhook: n,
						selectableWebhookChannels: g,
						errors: f,
						canNavigate: h
					}) : function(e, t) {
						let n = (0, i.wj)(e) ? m : b;
						return (0, r.jsxs)(a.Z, {
							direction: a.Z.Direction.VERTICAL,
							align: a.Z.Align.CENTER,
							children: [(0, r.jsx)("img", {
								alt: "",
								src: n,
								className: p.emptyStateImage
							}), (0, r.jsx)(l.X6q, {
								variant: "heading-md/semibold",
								children: u.intl.string(u.t.gzuVHx)
							}), (0, r.jsx)("div", {
								"data-button-hoisted-classname-wrapper": !0,
								className: p.emptyStateButton,
								children: (0, r.jsx)(l.zxk, {
									variant: "primary",
									text: u.intl.string(u.t["ZwSt+f"]),
									onClick: t
								})
							})]
						})
					}(x, () => open(s.Z.getArticleURL(d.BhN.CHANNEL_FOLLOWING)))]
				})
			}
		},
		466070: function(e, t, n) {
			n.d(t, {
				t: () => d
			});
			var r = n(255367),
				i = n(73800),
				l = n(481060),
				o = n(296023),
				a = n(768581),
				s = n(585835);

			function c(e) {
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

			function d(e) {
				var t, {
						channel: d,
						application: u,
						showApplicationImage: p
					} = e,
					m = function(e, t) {
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
					}(e, ["channel", "application", "showApplicationImage"]);
				let b = (0, o.w)(d),
					g = i.useCallback(() => (0, l.ZDy)(async () => {
						let {
							default: e
						} = await n.e("30019").then(n.bind(n, 719498));
						return t => {
							var n, i;
							return (0, r.jsx)(e, (n = c({}, t), i = i = {
								channel: d,
								application: u
							}, Object.getOwnPropertyDescriptors ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(i)) : (function(e, t) {
								var n = Object.keys(e);
								if (Object.getOwnPropertySymbols) {
									var r = Object.getOwnPropertySymbols(e);
									n.push.apply(n, r)
								}
								return n
							})(Object(i)).forEach(function(e) {
								Object.defineProperty(n, e, Object.getOwnPropertyDescriptor(i, e))
							}), n))
						}
					}), [u, d]),
					f = p ? null != (t = u.getIconURL(48)) ? t : a.pK["0"] : void 0;
				return (0, r.jsx)(s.Z, c({
					imageSrc: f,
					onButtonClick: g,
					details: null != b ? [{
						text: b
					}] : void 0
				}, m))
			}
		},
		37607: function(e, t, n) {
			n.d(t, {
				Z: () => j
			});
			var r = n(255367),
				i = n(73800),
				l = n(392711),
				o = n.n(l),
				a = n(481060),
				s = n(139387),
				c = n(835473),
				d = n(471445),
				u = n(925329),
				p = n(163400),
				m = n(63063),
				b = n(466070),
				g = n(981631),
				f = n(388032),
				h = n(5692);

			function x(e) {
				let {
					applicationId: t,
					channels: n
				} = e, i = (0, c.q)(t);
				return 0 === n.length || null == i ? null : (0, r.jsxs)("div", {
					className: h.applicationGroup,
					children: [(0, r.jsxs)("div", {
						className: h.header,
						children: [(0, r.jsx)(u.Z, {
							game: i,
							size: u.Z.Sizes.XSMALL
						}), (0, r.jsx)(a.X6q, {
							variant: "heading-md/semibold",
							children: null == i ? void 0 : i.name
						})]
					}), n.map(e => {
						var t;
						return (0, r.jsx)(b.t, {
							channel: e,
							application: i,
							name: e.name,
							icon: null != (t = (0, d.KS)(e)) ? t : void 0,
							iconWrapperClassName: h.iconwrapper,
							hasNextSection: !0,
							trailing: (0, r.jsx)(a.vdY, {
								size: "xs"
							})
						}, e.id)
					})]
				})
			}

			function j(e) {
				let {
					guild: t
				} = e, n = (0, p.F)(t.id), l = o().groupBy(n, e => {
					var t;
					return null == (t = e.linkedLobby) ? void 0 : t.application_id
				}), c = Object.keys(l);
				return i.useEffect(() => {
					0 === n.length && s.Z.setSection(g.b4C.OVERVIEW)
				}, [n]), (0, r.jsxs)(a.hjN, {
					children: [(0, r.jsx)(a.R94, {
						type: a.geA.DESCRIPTION,
						children: f.intl.format(f.t["9gsSLi"], {
							helpdeskArticle: m.Z.getArticleURL(g.BhN.LINKED_LOBBIES)
						})
					}), (0, r.jsx)(a.$i$, {
						className: h.headerDivider
					}), c.map(e => (0, r.jsx)(x, {
						applicationId: e,
						channels: l[e]
					}, e))]
				})
			}
		},
		351644: function(e, t, n) {
			n.d(t, {
				Z: () => W
			}), n(539854), n(781311), n(388685);
			var r = n(255367),
				i = n(73800),
				l = n(120356),
				o = n.n(l),
				a = n(658722),
				s = n.n(a),
				c = n(442837),
				d = n(780384),
				u = n(481060),
				p = n(37234),
				m = n(410030),
				b = n(726542),
				g = n(835473),
				f = n(231757),
				h = n(600164),
				x = n(749681),
				j = n(258971),
				O = n(685929),
				v = n(163400),
				y = n(553795),
				_ = n(496675),
				C = n(626135),
				N = n(768581),
				I = n(63063),
				E = n(709054),
				S = n(51144),
				T = n(466070),
				w = n(585835),
				P = n(997787),
				Z = n(981631),
				A = n(49898),
				k = n(388032),
				D = n(709677),
				R = n(509399),
				L = n(790904),
				M = n(609182);

			function B(e, t) {
				return t.includes(e)
			}

			function U(e) {
				let {
					query: t,
					setQuery: n
				} = e, l = i.useCallback(e => {
					n(e)
				}, [n]);
				return (0, r.jsx)("div", {
					className: D.searchContainer,
					children: (0, r.jsx)(u.E1j, {
						size: u.E1j.Sizes.MEDIUM,
						query: t,
						onChange: l,
						onClear: () => n(""),
						placeholder: k.intl.string(k.t["5prvKS"]),
						"aria-label": k.intl.string(k.t["5prvKS"])
					})
				})
			}

			function W(e) {
				var t, n, l, a;
				let {
					guild: W,
					channel: H,
					applicationIntegrations: G,
					builtInIntegrations: z,
					customWebhooks: F,
					followedChannelWebhooks: V,
					isLoadingWebhooks: K,
					canCreateWebhook: q,
					onManageBuiltIn: Y,
					onManageCustomWebhooks: X,
					onManageFollowedChannels: $,
					onManageApplication: J,
					onManageLobbiesLinked: Q
				} = e, ee = (0, m.ZP)(), [et, en] = i.useState(""), {
					isFetchingConnections: er,
					accounts: ei
				} = (0, c.cj)([y.Z], () => ({
					isFetchingConnections: y.Z.isFetching(),
					accounts: y.Z.getAccounts()
				}), []), {
					canManageWebhooks: el,
					canManageGuild: eo
				} = (0, c.cj)([_.Z], () => ({
					canManageWebhooks: null != W && _.Z.can(Z.Plq.MANAGE_WEBHOOKS, W) || null != H && _.Z.can(Z.Plq.MANAGE_WEBHOOKS, H),
					canManageGuild: null != W && null == H && _.Z.can(Z.Plq.MANAGE_GUILD, W)
				}), [W, H]), ea = (0, O.Y)(H), es = (0, g.q)(null == H || null == (t = H.linkedLobby) ? void 0 : t.application_id), ec = (0, v.F)(null == W ? void 0 : W.id), {
					availableTwitchIntegrations: ed,
					availableYoutubeIntegrations: eu,
					guildTwitchIntegrations: ep,
					guildYoutubeIntegrations: em
				} = i.useMemo(() => {
					var e, t, n, r, i, l, o, a;
					return {
						availableTwitchIntegrations: null != (i = null == (e = z.twitch) ? void 0 : e.length) ? i : 0,
						availableYoutubeIntegrations: null != (l = null == (t = z.youtube) ? void 0 : t.length) ? l : 0,
						guildTwitchIntegrations: null != (o = null == (n = z.twitch) ? void 0 : n.filter(e => e.enabled).length) ? o : 0,
						guildYoutubeIntegrations: null != (a = null == (r = z.youtube) ? void 0 : r.filter(e => e.enabled).length) ? a : 0
					}
				}, [z.twitch, z.youtube]), {
					showTwitchCard: eb,
					showYoutubeCard: eg
				} = i.useMemo(() => {
					if (er || !eo) return {
						showTwitchCard: !1,
						showYoutubeCard: !1
					};
					let e = null == W ? void 0 : W.features.has(Z.oNc.COMMUNITY),
						t = ei.filter(e => e.type === Z.ABu.TWITCH).length > 0,
						n = ei.filter(e => e.type === Z.ABu.YOUTUBE).length > 0;
					return {
						showTwitchCard: ed > 0 || !t && e,
						showYoutubeCard: eu > 0 || !n && e
					}
				}, [er, eo, W, ei, ed, eu]), ef = Object.values(G).length, eh = i.useMemo(() => {
					let e = ef > 100 ? B : s();
					return Object.values(G).filter(t => {
						var n;
						let {
							application: r
						} = t;
						return !!("" === (n = (n = et).trim().toLowerCase()) || r.id === n || e(n, r.name.toLowerCase()) || null != r.bot && e(n, r.bot.username.toLowerCase()))
					})
				}, [G, ef, et]), ex = (0, c.e7)([P.Z], () => {
					if (null != W) return eh.find(e => P.Z.canShowOverviewTooltip(W.id, e.integration.id))
				}, [eh, W]), ej = i.useMemo(() => void 0 !== ex ? [ex, ...eh.filter(e => e.integration.id !== ex.integration.id)] : eh, [eh, ex]), eO = (0, u.s9z)(u.JQI), [ev, ey] = i.useState(!1), e_ = i.useRef(0), eC = () => {
					ey(!0), clearTimeout(e_.current), e_.current = setTimeout(() => {
						ey(!1)
					}, 200)
				};
				i.useEffect(() => (window.addEventListener("scroll", eC, !0), () => window.removeEventListener("scroll", eC)));
				let eN = ej.map(e => {
						var t;
						let n = !eO && e.integration.id === (null == ex ? void 0 : ex.integration.id),
							{
								application: i,
								integration: l
							} = e,
							o = [];
						return null != l.user ? o.push({
							icon: u.T39,
							text: k.intl.formatToPlainString(k.t.Nu9sam, {
								timestamp: E.default.extractTimestamp(l.id),
								user: S.ZP.getUserTag(l.user)
							})
						}) : o.push({
							icon: u.T39,
							text: k.intl.formatToPlainString(k.t.gcdJ8P, {
								timestamp: E.default.extractTimestamp(l.id)
							})
						}), (0, r.jsx)(w.Z, {
							name: i.name,
							imageSrc: null != (t = i.getIconURL(48)) ? t : N.pK["0"],
							integration: e,
							buttonText: k.intl.string(k.t["Z/qRnJ"]),
							hasNextSection: !0,
							onButtonClick: () => {
								J(i.id), C.default.track(Z.rMx.APP_MANAGE_CTA_CLICKED, {
									application_id: i.id,
									guild_id: null == W ? void 0 : W.id,
									is_admin: null != W ? _.Z.can(Z.Plq.ADMINISTRATOR, W) : void 0
								})
							},
							details: o,
							guildId: null == W ? void 0 : W.id,
							isScrolling: ev,
							canShowMigrationTooltip: n
						}, "integration-".concat(l.id))
					}),
					eI = (0, r.jsx)("div", {
						className: D.footerImage
					});
				0 === eN.length && eo && (eN = function(e, t, n) {
					let i = (0, d.wj)(e) ? L : M,
						l = (0, r.jsxs)(h.Z, {
							direction: h.Z.Direction.VERTICAL,
							align: h.Z.Align.CENTER,
							className: D.emptyStateWrapper,
							children: [(0, r.jsx)("img", {
								alt: "",
								src: i,
								className: D.emptyStateSearchImage
							}), (0, r.jsx)(u.Zbd, {
								editable: !0,
								className: D.emptyStateCard,
								children: (0, r.jsx)(u.Text, {
									color: "text-muted",
									variant: "text-sm/normal",
									children: k.intl.string(k.t.EVWFNj)
								})
							})]
						}),
						o = (0, r.jsx)(u.Zbd, {
							editable: !0,
							className: D.emptyStateCard,
							children: (0, r.jsxs)("div", {
								className: D.emptyStateText,
								children: [(0, r.jsx)("img", {
									alt: "",
									src: R,
									className: D.emptyStateImage
								}), (0, r.jsx)(u.X6q, {
									color: "header-secondary",
									variant: "heading-xl/bold",
									children: k.intl.string(k.t.nQQeFB)
								}), (0, r.jsx)(u.Text, {
									color: "header-secondary",
									variant: "text-sm/normal",
									children: k.intl.format(k.t.snvKU1, {
										handleGoToAppDirectory: () => {
											(0, x.transitionToGlobalDiscovery)({
												tab: A.GlobalDiscoveryTab.APPS,
												newSessionState: {
													entrypoint: {
														name: j.xF.GUILD_INTEGRATION_SETTINGS
													},
													guildId: n
												}
											}), (0, p.xf)()
										}
									})
								})]
							})
						});
					return t > 0 ? l : o
				}(ee, ef, null == W ? void 0 : W.id), eI = null);
				let eE = I.Z.getArticleURL(Z.BhN.INTEGRATIONS),
					eS = null != H ? k.t.YV0vh4 : k.t.FnZEJi,
					eT = [];
				if (el) {
					let e, t, i, o, a;
					eT.push((n = F.length, n > 0 ? t = (0, r.jsx)(u.LJT, {
						size: "xs"
					}) : e = k.intl.string(k.t.lOQqJC), (0, r.jsx)(w.Z, {
						name: k.intl.string(k.t.xOg4SE),
						icon: u.tYf,
						buttonText: e,
						buttonDisabled: !q,
						trailing: t,
						onButtonClick: X,
						hasNextSection: n > 0,
						details: [{
							text: k.intl.formatToPlainString(k.t["6HqDfX"], {
								count: n
							})
						}]
					}, "webhooks"))), (null == H ? void 0 : H.type) === Z.d4z.GUILD_VOICE || (null == H ? void 0 : H.type) != null && Z.TPd.GUILD_THREADS_ONLY.has(H.type) || eT.push((l = V.length, l > 0 ? (a = (0, r.jsx)(u.LJT, {
						size: "xs"
					}), o = $) : (i = k.intl.string(k.t["ZwSt+f"]), o = () => open(I.Z.getArticleURL(Z.BhN.CHANNEL_FOLLOWING))), (0, r.jsx)(w.Z, {
						name: k.intl.string(k.t.OrV60t),
						icon: u.AsW,
						buttonText: i,
						onButtonClick: o,
						trailing: a,
						hasNextSection: l > 0,
						details: [{
							text: k.intl.formatToPlainString(k.t.JUNGIS, {
								count: l
							})
						}]
					}, "channels-followed")))
				}
				null == H && ec.length > 0 && eT.push((a = ec.length, (0, r.jsx)(w.Z, {
					name: k.intl.string(k.t.tqtDXF),
					icon: u.DuK,
					trailing: (0, r.jsx)(u.LJT, {
						size: "xs"
					}),
					onButtonClick: Q,
					hasNextSection: !0,
					details: [{
						text: k.intl.formatToPlainString(k.t["puxS4+"], {
							count: a
						})
					}]
				}, "channels-syncing"))), eb && eT.push(function(e, t, n) {
					let i, l, o, a, s = b.Z.get(Z.ABu.TWITCH);
					return e > 0 ? (a = (0, r.jsx)(u.LJT, {
						size: "xs"
					}), l = k.intl.formatToPlainString(k.t.FFpnT0, {
						count: t
					}), o = () => n(Z.ABu.TWITCH)) : (i = k.intl.string(k.t.bkvGkp), l = k.intl.string(k.t.Qq3X2N), o = () => (0, f.Z)({
						platformType: Z.ABu.TWITCH,
						location: "Integration Settings"
					})), (0, r.jsx)(w.Z, {
						name: k.intl.string(k.t.q4pBGx),
						icon: s.icon.whiteSVG,
						iconBackgroundColor: s.color,
						iconClassName: D.platformIcon,
						buttonText: i,
						onButtonClick: o,
						trailing: a,
						hasNextSection: e > 0,
						details: [{
							text: l
						}]
					}, "integrations-twitch")
				}(ed, ep, Y)), eg && eT.push(function(e, t, n) {
					let i, l, o, a, s = b.Z.get(Z.ABu.YOUTUBE);
					return e > 0 ? (a = (0, r.jsx)(u.LJT, {
						size: "xs"
					}), l = k.intl.formatToPlainString(k.t.b2g5vL, {
						count: t
					}), o = () => n(Z.ABu.YOUTUBE)) : (i = k.intl.string(k.t.xEyQ3d), l = k.intl.string(k.t.T0ivgY), o = () => (0, f.Z)({
						platformType: Z.ABu.YOUTUBE,
						location: "Integration Settings"
					})), (0, r.jsx)(w.Z, {
						name: k.intl.string(k.t.aS6cKy),
						icon: s.icon.whiteSVG,
						iconBackgroundColor: s.color,
						iconClassName: D.platformIcon,
						buttonText: i,
						onButtonClick: o,
						trailing: a,
						hasNextSection: e > 0,
						details: [{
							text: l
						}]
					}, "integrations-youtube")
				}(eu, em, Y));
				let ew = null != H && ea && null != es;
				return (0, r.jsxs)(u.hjN, {
					className: o()(null != eI ? D.footerPlaceholder : null),
					children: [(0, r.jsx)(u.R94, {
						type: u.geA.DESCRIPTION,
						children: k.intl.format(eS, {
							helpdeskArticle: eE
						})
					}), (0, r.jsx)(u.$i$, {
						className: D.divider
					}), K || er || null == W ? (0, r.jsx)(u.$jN, {
						className: D.__invalid_spinner,
						type: u.$jN.Type.SPINNING_CIRCLE
					}) : (0, r.jsxs)(r.Fragment, {
						children: [eT, ew && (0, r.jsxs)(r.Fragment, {
							children: [eT.length > 0 ? (0, r.jsx)(u.$i$, {
								className: D.divider
							}) : null, (0, r.jsx)(u.X6q, {
								variant: "heading-md/semibold",
								className: D.sectionHeader,
								children: k.intl.string(k.t.oAvIAg)
							}), (0, r.jsx)(T.t, {
								channel: H,
								application: es,
								showApplicationImage: !0,
								name: es.name,
								hasNextSection: !0,
								iconClassName: D.linkedLobbyIcon,
								trailing: (0, r.jsx)(u.vdY, {
									size: "xs"
								})
							})]
						}), eo ? (0, r.jsxs)(r.Fragment, {
							children: [eT.length > 0 || ew ? (0, r.jsx)(u.$i$, {
								className: D.divider
							}) : null, (0, r.jsx)(u.X6q, {
								variant: "heading-md/semibold",
								className: D.sectionHeader,
								children: k.intl.string(k.t.pUBKho)
							}), ef > 4 ? (0, r.jsx)(U, {
								query: et,
								setQuery: en
							}) : null, eN]
						}) : null, eI]
					})]
				})
			}
		},
		108053: function(e, t, n) {
			n.d(t, {
				Z: () => j
			}), n(388685);
			var r = n(255367),
				i = n(73800),
				l = n(780384),
				o = n(481060),
				a = n(668781),
				s = n(308063),
				c = n(493773),
				d = n(410030),
				u = n(600164),
				p = n(63063),
				m = n(725875),
				b = n(981631),
				g = n(388032),
				f = n(14119),
				h = n(893916),
				x = n(408942);

			function j(e) {
				let t, {
						guild: n,
						channel: j,
						customWebhooks: O,
						editedWebhook: v,
						selectableWebhookChannels: y,
						refToScroller: _,
						errors: C,
						canNavigate: N
					} = e,
					I = (0, d.ZP)(),
					[E, S] = i.useState(null),
					[T, w] = i.useState(null);
				if (null != j) t = j;
				else {
					let e = Object.values(y);
					t = e.length > 0 ? e[0] : null
				}
				let P = i.useCallback(async () => {
					if (N() && null !== t) {
						let e = await s.Z.create(n.id, t.id).catch(e => {
							let {
								body: t,
								status: n
							} = e;
							return t && t.code === b.evJ.TOO_MANY_WEBHOOKS ? a.Z.show({
								title: g.intl.string(g.t.cCqscX),
								body: g.intl.string(g.t["w+QZoa"])
							}) : 429 === n ? a.Z.show({
								title: g.intl.string(g.t.cCqscX),
								body: g.intl.string(g.t["YBM+UV"])
							}) : a.Z.show({
								title: g.intl.string(g.t.cCqscX),
								body: g.intl.string(g.t["/4TwKS"])
							}), null
						});
						null != e && (w(e.id), S(e))
					}
				}, [N, t, n]);
				(0, c.ZP)(() => {
					0 === O.length && P()
				});
				let Z = null !== t;
				return (0, r.jsxs)(o.hjN, {
					children: [(0, r.jsx)(o.R94, {
						type: o.geA.DESCRIPTION,
						children: g.intl.format(g.t.WL0d0d, {
							helpdeskArticle: p.Z.getArticleURL(b.BhN.WEBHOOKS),
							developersArticle: b.EYA.API_DOCS_WEBHOOKS
						})
					}), (0, r.jsx)(o.$i$, {
						className: f.headerDivider
					}), O.length > 0 ? (0, r.jsxs)(r.Fragment, {
						children: [(0, r.jsx)("div", {
							"data-button-hoisted-classname-wrapper": !0,
							className: f.createButton,
							children: (0, r.jsx)(o.zxk, {
								variant: "primary",
								size: "sm",
								text: g.intl.string(g.t["nrO/HB"]),
								disabled: !Z,
								onClick: P
							})
						}), (0, r.jsx)(m.Z, {
							webhooks: O,
							editedWebhook: v,
							selectableWebhookChannels: y,
							lastCreatedWebhookId: null == E ? void 0 : E.id,
							errors: C,
							canNavigate: N
						})]
					}) : function(e, t, n) {
						let i = (0, l.wj)(e) ? h : x;
						return (0, r.jsxs)(u.Z, {
							direction: u.Z.Direction.VERTICAL,
							align: u.Z.Align.CENTER,
							children: [(0, r.jsx)("img", {
								alt: "",
								src: i,
								className: f.emptyStateImage
							}), (0, r.jsx)(o.X6q, {
								variant: "heading-md/semibold",
								children: g.intl.string(g.t.LzmsWl)
							}), (0, r.jsx)("div", {
								"data-button-hoisted-classname-wrapper": !0,
								className: f.emptyStateButton,
								children: (0, r.jsx)(o.zxk, {
									variant: "primary",
									text: g.intl.string(g.t.lOQqJC),
									disabled: !t,
									onClick: n
								})
							})]
						})
					}(I, Z, P)]
				})
			}
		},
		490655: function(e, t, n) {
			n.d(t, {
				Z: () => T
			}), n(388685), n(539854);
			var r = n(255367),
				i = n(73800),
				l = n(392711),
				o = n.n(l),
				a = n(442837),
				s = n(481060),
				c = n(139387),
				d = n(503089),
				u = n(231757),
				p = n(600164),
				m = n(106976),
				b = n(488915),
				g = n(984933),
				f = n(496675),
				h = n(585483),
				x = n(63063),
				j = n(919196),
				O = n(731072),
				v = n(494118),
				y = n(37607),
				_ = n(351644),
				C = n(108053),
				N = n(981631),
				I = n(388032),
				E = n(498181);

			function S(e, t) {
				switch (e) {
					case N.b4C.APPLICATION:
						var n;
						return null != (n = null == t ? void 0 : t.application.name) ? n : "";
					case N.b4C.OVERVIEW:
						return I.intl.string(I.t.s69NLC);
					case N.b4C.CHANNEL_FOLLOWING:
						return I.intl.string(I.t.OrV60t);
					case N.b4C.TWITCH:
						return I.intl.string(I.t.q4pBGx);
					case N.b4C.WEBHOOKS:
						return I.intl.string(I.t.xOg4SE);
					case N.b4C.YOUTUBE:
						return I.intl.string(I.t.aS6cKy);
					case N.b4C.LOBBIES_LINKED:
						return I.intl.string(I.t.tqtDXF);
					default:
						return ""
				}
			}
			let T = i.memo(function(e) {
				let {
					section: t,
					sectionId: n,
					guild: l,
					channel: T,
					integrations: w,
					editedIntegration: P,
					webhooks: Z,
					editedWebhook: A,
					isFetchingWebhooks: k,
					refToScroller: D,
					errors: R,
					hasChanges: L
				} = e, M = (0, a.e7)([g.ZP], () => null != l ? g.ZP.getDefaultChannel(l.id) : null), B = (0, a.cj)([g.ZP], () => g.ZP.getChannels(null == l ? void 0 : l.id)), U = (0, a.cj)([f.Z], () => o().keyBy(B.SELECTABLE.map(e => e.channel).filter(e => f.Z.can(N.Plq.MANAGE_WEBHOOKS, e)), "id")), W = (0, a.cj)([f.Z], () => o().keyBy(B.VOCAL.map(e => e.channel).filter(e => e.isGuildVocal() && f.Z.can(N.Plq.MANAGE_WEBHOOKS, e)), "id")), H = null != T ? T : M, G = t === N.b4C.APPLICATION ? n : null, [z, F] = i.useState(d.$x), V = i.useCallback(() => L() ? (h.S.dispatch(N.CkL.SHAKE_APP, {
					duration: 300,
					intensity: z
				}), F(Math.min(z + d.d7, d.w6)), h.S.dispatch(N.CkL.EMPHASIZE_NOTICE), !1) : (F(d.$x), !0), [L, z]), K = i.useCallback(e => !!V() && (c.Z.setSection(e), !0), [V]), {
					applicationIntegrations: q,
					applicationBotIds: Y,
					builtInIntegrations: X,
					customWebhooks: $,
					followedChannelWebhooks: J
				} = i.useMemo(() => {
					let e = {},
						t = {},
						n = {},
						r = [],
						i = [];
					if (null != w)
						for (let r of w)
							if ("discord" === r.type) {
								if (null != r.application) {
									var l;
									e[r.application.id] = {
										application: r.application,
										integration: r,
										webhooks: []
									}, (null == (l = r.application.bot) ? void 0 : l.id) !== void 0 && (t[r.application.bot.id] = r.application.id)
								}
							} else r.type in n || (n[r.type] = []), n[r.type].push(r);
					for (let t of Z)(t.channel_id in U || t.channel_id in W) && (null != t.application_id && t.application_id in e ? e[t.application_id].webhooks.push(t) : t.type === N.ylB.CHANNEL_FOLLOWER ? i.push(t) : r.push(t));
					return {
						applicationIntegrations: e,
						applicationBotIds: t,
						builtInIntegrations: n,
						customWebhooks: r,
						followedChannelWebhooks: i
					}
				}, [w, U, W, Z]);
				i.useEffect(() => {
					if (!k) switch (t) {
						case N.b4C.TWITCH:
							null == X[N.ABu.TWITCH] && c.Z.setSection(N.b4C.OVERVIEW);
							break;
						case N.b4C.YOUTUBE:
							null == X[N.ABu.YOUTUBE] && c.Z.setSection(N.b4C.OVERVIEW);
							break;
						case N.b4C.APPLICATION:
							null != G && (G in Y || G in q) || c.Z.setSection(N.b4C.OVERVIEW)
					}
				}, [q, Y, X, G, t, k]), i.useEffect(() => {
					(null == l ? void 0 : l.id) != null && b.Z.getEntitlementsForGuildFetchState(l.id) === b.M.NOT_FETCHED && m.i1(l.id)
				}, [null == l ? void 0 : l.id]), i.useEffect(() => () => {
					c.Z.setSection(N.b4C.OVERVIEW, null)
				}, []);
				let Q = null;
				switch (t) {
					case N.b4C.TWITCH:
						null != X[N.ABu.TWITCH] && (Q = (0, r.jsx)(O.Z, {
							guild: l,
							integrations: X[N.ABu.TWITCH],
							editedIntegration: P,
							labelText: I.intl.string(I.t.q4pBGx),
							platformType: N.ABu.TWITCH,
							descriptionText: I.intl.string(I.t.V9kNqq),
							helpText: I.intl.format(I.t.ro1jEB, {
								connectAction: () => (0, u.Z)({
									platformType: N.ABu.TWITCH,
									location: "Integration Settings"
								}),
								helpdeskArticle: x.Z.getArticleURL(N.BhN.TWITCH_INTEGRATION)
							}),
							canNavigate: V
						}));
						break;
					case N.b4C.YOUTUBE:
						null != X[N.ABu.YOUTUBE] && (Q = (0, r.jsx)(O.Z, {
							guild: l,
							integrations: X[N.ABu.YOUTUBE],
							editedIntegration: P,
							labelText: I.intl.string(I.t.aS6cKy),
							platformType: N.ABu.YOUTUBE,
							descriptionText: I.intl.string(I.t["7Tv7JC"]),
							helpText: I.intl.format(I.t["4OSAQ0"], {
								connectAction: () => (0, u.Z)({
									platformType: N.ABu.YOUTUBE
								}),
								helpdeskArticle: x.Z.getArticleURL(N.BhN.YOUTUBE_INTEGRATION)
							}),
							canNavigate: V
						}));
						break;
					case N.b4C.APPLICATION:
						var ee;
						let et = null != G ? null != (ee = q[Y[G]]) ? ee : q[G] : null;
						null != et && (Q = (0, r.jsx)(j.Z, {
							guild: l,
							applicationIntegration: et,
							editedWebhook: A,
							selectableWebhookChannels: U,
							errors: R,
							canNavigate: V
						}));
						break;
					case N.b4C.CHANNEL_FOLLOWING:
						Q = (0, r.jsx)(v.Z, {
							followedChannelWebhooks: J,
							editedWebhook: A,
							selectableWebhookChannels: U,
							canNavigate: V,
							errors: R
						});
						break;
					case N.b4C.WEBHOOKS:
						Q = (0, r.jsx)(C.Z, {
							guild: l,
							channel: T,
							customWebhooks: $,
							editedWebhook: A,
							selectableWebhookChannels: function(e) {
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
							}({}, U, W),
							canNavigate: V,
							refToScroller: D,
							errors: R
						});
						break;
					case N.b4C.LOBBIES_LINKED:
						Q = (0, r.jsx)(y.Z, {
							guild: l
						});
						break;
					default:
						Q = (0, r.jsx)(_.Z, {
							guild: l,
							channel: T,
							applicationIntegrations: q,
							builtInIntegrations: X,
							customWebhooks: $,
							followedChannelWebhooks: J,
							isLoadingWebhooks: k || null == l,
							canCreateWebhook: null != H,
							onManageCustomWebhooks: () => {
								c.Z.setSection(N.b4C.WEBHOOKS)
							},
							onManageFollowedChannels: () => {
								c.Z.setSection(N.b4C.CHANNEL_FOLLOWING)
							},
							onManageApplication: e => {
								c.Z.setSection(N.b4C.APPLICATION, e)
							},
							onManageBuiltIn: e => {
								switch (e) {
									case N.ABu.TWITCH:
										c.Z.setSection(N.b4C.TWITCH);
										break;
									case N.ABu.YOUTUBE:
										c.Z.setSection(N.b4C.YOUTUBE)
								}
							},
							onManageLobbiesLinked: () => {
								c.Z.setSection(N.b4C.LOBBIES_LINKED)
							}
						})
				}
				return (0, r.jsxs)(r.Fragment, {
					children: [(0, r.jsx)(p.Z, {
						align: p.Z.Align.CENTER,
						className: E.breadcrumbs,
						children: t === N.b4C.OVERVIEW ? (0, r.jsx)(s.vwX, {
							tag: "h1",
							children: S(N.b4C.OVERVIEW)
						}) : (0, r.jsx)(s.OoM, {
							activeId: t.toString(),
							breadcrumbs: [N.b4C.OVERVIEW, t].map(e => ({
								id: e.toString(),
								label: S(e, q[G])
							})),
							onBreadcrumbClick: e => {
								t !== parseInt(e.id) && K(parseInt(e.id))
							},
							renderCustomBreadcrumb: (e, t) => (0, r.jsx)(s.vwX, {
								tag: "h1",
								className: t ? E.breadcrumbActive : E.breadcrumbInactive,
								children: e.label
							})
						})
					}), Q]
				})
			})
		},
		125657: function(e, t, n) {
			n.d(t, {
				Z: () => y
			}), n(539854), n(388685);
			var r = n(255367),
				i = n(73800),
				l = n(149765),
				o = n(442837),
				a = n(481060),
				s = n(749210),
				c = n(412899),
				d = n(995648),
				u = n(385499),
				p = n(600164),
				m = n(422559),
				b = n(601964),
				g = n(598077),
				f = n(271383),
				h = n(485386),
				x = n(823379),
				j = n(700785),
				O = n(388032),
				v = n(439478);

			function y(e) {
				var t;
				let {
					guild: n,
					applicationIntegration: y
				} = e, _ = (0, o.e7)([h.Z], () => h.Z.getRoles(n.id)), {
					application: C
				} = y, N = null != C.bot ? new g.Z(C.bot) : null, I = (0, o.e7)([f.ZP], () => null != N ? f.ZP.getMember(n.id, N.id) : null, [N, n]), E = null == N ? void 0 : N.id;
				i.useEffect(() => {
					null != E && s.Z.requestMembersById(n.id, E)
				}, [n.id, E]);
				let S = i.useMemo(() => {
					var e, t, r;
					let i = _[(0, b.lV)(n)],
						o = null != (t = null == I || null == (e = I.roles) ? void 0 : e.map(e => _[e]).filter(x.lm)) ? t : [],
						a = null != (r = null == i ? void 0 : i.permissions) ? r : j.Hn;
					for (let e of o) a = l.IH(a, e.permissions);
					return a
				}, [n, _, I]);
				return null == N ? null : (0, r.jsx)(a.Zbd, {
					editable: !0,
					className: v.card,
					children: (0, r.jsxs)(p.Z, {
						direction: p.Z.Direction.VERTICAL,
						children: [(0, r.jsxs)(p.Z, {
							align: p.Z.Align.CENTER,
							children: [(0, r.jsx)("img", {
								alt: "",
								src: N.getAvatarURL(n.id, 32),
								className: v.iconWrapper
							}), (0, r.jsx)(a.Text, {
								color: "header-primary",
								variant: "text-sm/normal",
								children: O.intl.format(O.t.GyhzGx, {
									user: N.toString()
								})
							}), (0, r.jsx)(u.Z, {
								className: v.tag,
								verified: N.isVerifiedBot()
							})]
						}), function(e, t, n, i) {
							let o = [],
								s = [];
							for (let e of m.VY) l.e$(i, e) ? o.push(e) : s.push(e);
							return (0, r.jsxs)(r.Fragment, {
								children: [(0, r.jsx)(a.$i$, {
									className: v.divider
								}), n.length > 0 ? (0, r.jsxs)(r.Fragment, {
									children: [(0, r.jsx)(a.vwX, {
										className: v.permissionHeader,
										children: O.intl.format(O.t.PCs0oq, {
											numRoles: n.length
										})
									}), (0, r.jsx)(c.ZP, {
										className: v.rolePills,
										user: e,
										guild: t,
										userRoles: n,
										wrap: !1,
										readOnly: !0
									})]
								}) : null, o.length > 0 || s.length > 0 ? (0, r.jsx)(d.Z, {
									grantedPermissions: o,
									grantedPermissionsHeader: O.intl.string(O.t["hA4+sr"]),
									disabledPermissions: s,
									disabledPermissionsHeader: O.intl.string(O.t["/rEZ2t"])
								}) : null]
							})
						}(N, n, null != (t = null == I ? void 0 : I.roles) ? t : [], S)]
					})
				})
			}
		},
		13051: function(e, t, n) {
			n.d(t, {
				Z: () => P
			}), n(388685), n(642613), n(190126), n(368063), n(65234), n(111804), n(490233), n(97749), n(953529);
			var r = n(255367),
				i = n(73800),
				l = n(120356),
				o = n.n(l),
				a = n(913527),
				s = n.n(a),
				c = n(951284),
				d = n(442837),
				u = n(755721),
				p = n(481060),
				m = n(139387),
				b = n(726542),
				g = n(600164),
				f = n(339085),
				h = n(434404),
				x = n(598077),
				j = n(485386),
				O = n(246946),
				v = n(259580),
				y = n(531087),
				_ = n(768581),
				C = n(709054),
				N = n(486199),
				I = n(981631),
				E = n(388032),
				S = n(796920),
				T = n(20493);

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

			function P(e) {
				let t, {
						guild: n,
						integration: l,
						editedIntegration: a,
						isExpanded: P,
						onToggleExpand: Z,
						onDisable: A,
						onEnable: k
					} = e,
					D = (0, d.e7)([j.Z], () => j.Z.getRoles(n.id)),
					[R, L] = i.useState(!1),
					M = (0, d.e7)([O.Z], () => O.Z.hidePersonalInformation),
					B = i.useCallback(() => {
						L(!0), k(l)
					}, [l, k]),
					U = i.useCallback(() => {
						l.syncing || (0, p.h7j)(e => {
							var t, n;
							let i = 0 === l.expire_behavior ? E.intl.string(E.t["6kpw4u"]) : E.intl.string(E.t.fQUQIC);
							return (0, r.jsx)(p.ConfirmModal, (t = w({}, e), n = n = {
								header: E.intl.string(E.t.emx3lJ),
								confirmText: i,
								cancelText: E.intl.string(E.t["ETE/oK"]),
								onConfirm: () => A(l),
								children: (0, r.jsx)(p.Text, {
									variant: "text-md/normal",
									children: l.type === c.b.YOUTUBE ? E.intl.string(E.t.anKQWV) : E.intl.string(E.t["BW/xtr"])
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
						})
					}, [l, A]),
					W = i.useCallback(() => {
						h.Z.syncIntegration(n.id, l.id)
					}, [n.id, l.id]),
					H = i.useCallback(() => {
						null != l.role_id && (h.Z.setSection(I.pNK.ROLES), h.Z.selectRole(l.role_id))
					}, [l.role_id]),
					{
						serviceName: G,
						channelURL: z,
						expireBehaviorLabel: F,
						syncLabel: V,
						subscribersText: K
					} = i.useMemo(() => {
						var e, t, n, r, i;
						let o = null != (n = null == (t = b.Z.get(l.type)) || null == (e = t.getPlatformUserUrl) ? void 0 : e.call(t, {
							id: l.account.id,
							name: l.account.name
						})) ? n : "";
						switch (l.type) {
							case c.b.YOUTUBE:
								return {
									serviceName: E.intl.string(E.t.aS6cKy), expireBehaviorLabel: E.intl.string(E.t.A5MiqK), syncLabel: E.intl.string(E.t["7vHKVV"]), subscribersText: E.intl.formatToPlainString(E.t["7lNtcX"], {
										subscribers: null != (r = l.subscriber_count) ? r : 0
									}), channelURL: o
								};
							case c.b.TWITCH:
							default:
								return {
									serviceName: E.intl.string(E.t.q4pBGx), expireBehaviorLabel: E.intl.string(E.t["S/WCrK"]), syncLabel: E.intl.string(E.t["0jbPKy"]), subscribersText: E.intl.formatToPlainString(E.t.RdUTrq, {
										subscribers: null != (i = l.subscriber_count) ? i : 0
									}), channelURL: o
								}
						}
					}, [l.account, l.subscriber_count, l.type]),
					{
						roleLink: q,
						syncDescriptionText: Y
					} = i.useMemo(() => {
						let e, t, n = null != l.role_id ? D[l.role_id] : null;
						e = null != n ? (0, r.jsx)(p.eee, {
							onClick: H,
							children: n.name
						}) : E.intl.string(E.t.PoWNfX);
						let i = b.Z.get(l.type);
						return {
							roleLink: e,
							syncDescriptionText: l.revoked && null != i ? E.intl.formatToPlainString(E.t.G16Wjo, {
								user: l.user,
								platformName: i.name
							}) : E.intl.formatToPlainString(E.t.unl3AA, {
								datetime: s()(l.synced_at).calendar()
							})
						}
					}, [D, H, l.revoked, l.role_id, l.synced_at, l.type, l.user]),
					X = i.useMemo(() => {
						let e = f.ZP.getGuildEmoji(n.id),
							t = Object.values(D).filter(e => null != e.tags && e.tags.integration_id === l.id).map(e => e.id);
						return l.enable_emoticons ? e.sort((e, t) => e.name.localeCompare(t.name)).filter(e => null != l.role_id && (null == e ? void 0 : e.roles.some(e => t.includes(e)))) : []
					}, [n.id, D, l.enable_emoticons, l.id, l.role_id]);
				if (i.useEffect(() => {
						(null == a ? void 0 : a.id) === l.id && (null == a ? void 0 : a.enabled) === !0 && L(!1)
					}, [a, l.id]), l.enabled && null != l.user) t = [{
					icon: p.T39,
					text: M ? E.intl.formatToPlainString(E.t.gcdJ8P, {
						timestamp: C.default.extractTimestamp(l.id)
					}) : E.intl.formatToPlainString(E.t.Nu9sam, {
						user: null != l.user ? new x.Z(l.user).tag : null,
						timestamp: C.default.extractTimestamp(l.id)
					})
				}];
				else {
					let e = new URL(z);
					t = [{
						text: E.intl.format(E.t.BegylZ, {
							serviceName: G,
							accountUrl: z,
							accountUrlText: e.hostname + e.pathname
						})
					}]
				}
				let $ = (0, r.jsxs)(g.Z, {
						className: S.header,
						align: g.Z.Align.CENTER,
						children: [(0, r.jsx)(N.Z, {
							name: "".concat(l.name),
							detailsClassName: S.description,
							details: t
						}), l.enabled ? (0, r.jsx)(g.Z.Child, {
							shrink: 0,
							grow: 0,
							children: (0, r.jsx)(v.Z, {
								className: S.expandIcon,
								expanded: P && !R,
								"aria-hidden": !0
							})
						}) : (0, r.jsx)(g.Z.Child, {
							shrink: 0,
							grow: 0,
							children: (0, r.jsx)(u.zx, {
								size: u.zx.Sizes.SMALL,
								color: u.zx.Colors.PRIMARY,
								onClick: B,
								disabled: R,
								children: R ? (0, r.jsx)(y.Z, {
									width: 24,
									height: 24
								}) : (0, r.jsx)(r.Fragment, {
									children: E.intl.string(E.t["7sCN8v"])
								})
							})
						})]
					}),
					J = null;
				return P && !R && null != a && (J = (0, r.jsxs)(g.Z, {
					className: S.body,
					direction: g.Z.Direction.VERTICAL,
					children: [(0, r.jsx)(p.$i$, {
						className: S.topDivider
					}), function(e) {
						let {
							integration: t,
							labelText: n,
							subscribersText: i,
							descriptionText: l,
							roleLink: o,
							onSync: a
						} = e;
						return (0, r.jsxs)(g.Z, {
							children: [(0, r.jsxs)(g.Z.Child, {
								basis: "50%",
								children: [(0, r.jsx)(p.vwX, {
									className: T.marginBottom8,
									children: E.intl.string(E.t.eBtNBQ)
								}), (0, r.jsx)(p.Text, {
									className: S.syncedRole,
									color: "header-primary",
									variant: "text-sm/normal",
									children: o
								})]
							}), (0, r.jsxs)(g.Z.Child, {
								basis: "50%",
								children: [(0, r.jsx)(p.vwX, {
									className: T.marginBottom8,
									children: n
								}), (0, r.jsxs)(g.Z, {
									justify: g.Z.Justify.BETWEEN,
									children: [(0, r.jsxs)(g.Z, {
										direction: g.Z.Direction.VERTICAL,
										children: [(0, r.jsx)(p.Text, {
											color: "header-primary",
											variant: "text-sm/normal",
											children: i
										}), (0, r.jsx)(p.Text, {
											color: "header-secondary",
											variant: "text-xs/normal",
											children: l
										})]
									}), (0, r.jsx)(u.zx, {
										size: u.zx.Sizes.SMALL,
										look: u.zx.Looks.FILLED,
										color: u.zx.Colors.PRIMARY,
										disabled: t.syncing || t.revoked,
										onClick: a
									})]
								})]
							})]
						})
					}({
						integration: a,
						labelText: V,
						subscribersText: K,
						descriptionText: Y,
						roleLink: q,
						onSync: W
					}), (0, r.jsx)(p.$i$, {
						className: S.midDivider
					}), function(e) {
						let {
							integration: t,
							labelText: n,
							onBehaviorChange: i,
							onGracePeriodChange: l
						} = e;
						return (0, r.jsxs)(g.Z, {
							children: [(0, r.jsxs)(g.Z.Child, {
								basis: "50%",
								children: [(0, r.jsx)(p.vwX, {
									className: T.marginBottom8,
									children: n
								}), (0, r.jsx)(p.q4e, {
									placeholder: n,
									value: "".concat(t.expire_behavior),
									options: [{
										value: "0",
										label: E.intl.string(E.t["6kpw4u"])
									}, {
										value: "1",
										label: E.intl.string(E.t.fQUQIC)
									}],
									isDisabled: t.syncing,
									onChange: e => i(parseInt(e))
								})]
							}), (0, r.jsxs)(g.Z.Child, {
								basis: "50%",
								children: [(0, r.jsx)(p.vwX, {
									className: T.marginBottom8,
									children: E.intl.string(E.t.uiXMo6)
								}), (0, r.jsx)(p.q4e, {
									placeholder: E.intl.string(E.t.uiXMo6),
									maxVisibleItems: 5,
									value: "".concat(t.expire_grace_period),
									options: [1, 3, 7, 14, 30].map(e => ({
										value: "".concat(e),
										label: E.intl.formatToPlainString(E.t.eGjmy8, {
											days: e
										})
									})),
									onChange: e => l(parseInt(e)),
									isDisabled: t.syncing
								})]
							})]
						})
					}({
						integration: a,
						labelText: F,
						onBehaviorChange: function(e) {
							m.Z.updateIntegration({
								expireBehavior: e
							})
						},
						onGracePeriodChange: function(e) {
							m.Z.updateIntegration({
								expireGracePeriod: e
							})
						}
					}), l.type === c.b.TWITCH ? function(e) {
						let {
							integration: t,
							emojis: n,
							onToggle: i
						} = e;
						return (0, r.jsxs)(g.Z, {
							direction: g.Z.Direction.VERTICAL,
							children: [(0, r.jsx)(p.XZJ, {
								type: p.XZJ.Types.INVERTED,
								className: o()(T.marginTop20, T.marginBottom8),
								value: t.enable_emoticons,
								disabled: t.syncing,
								onChange: e => {
									let {
										currentTarget: t
									} = e;
									return i(t.checked)
								},
								children: (0, r.jsx)(p.R94, {
									children: E.intl.string(E.t["7r4OKi"])
								})
							}), (0, r.jsx)(g.Z, {
								wrap: g.Z.Wrap.WRAP,
								className: S.__invalid_twitchEmojis,
								children: n.map((e, t) => (0, r.jsx)(p.ua7, {
									text: e.name,
									children: t => (0, r.jsx)("img", w({
										alt: E.intl.formatToPlainString(E.t.n6ZZn5, {
											name: e.name
										}),
										draggable: !1,
										className: o()(S.emoji, "emoji", "jumboable"),
										src: _.ZP.getEmojiURL({
											id: e.id,
											animated: e.animated,
											size: 28
										})
									}, t), e.name)
								}, t))
							})]
						})
					}({
						integration: a,
						emojis: X,
						onToggle: function(e) {
							m.Z.updateIntegration({
								enableEmoticons: e
							})
						}
					}) : null, (0, r.jsx)(p.$i$, {
						className: S.bottomDivider
					}), (0, r.jsx)(g.Z, {
						children: (0, r.jsx)(u.zx, {
							className: S.disableButton,
							size: u.zx.Sizes.SMALL,
							color: u.zx.Colors.RED,
							look: u.zx.Looks.LINK,
							onClick: U,
							children: E.intl.string(E.t.M6q6eX)
						})
					})]
				})), (0, r.jsx)(p.Zbd, {
					editable: !0,
					className: S.card,
					children: (0, r.jsxs)(g.Z, {
						direction: g.Z.Direction.VERTICAL,
						children: [l.enabled ? (0, r.jsx)(p.P3F, {
							className: S.expandableHeader,
							"aria-expanded": P && !R,
							onClick: Z,
							children: $
						}) : $, J]
					})
				})
			}
		},
		491302: function(e, t, n) {
			n.d(t, {
				Z: () => h
			}), n(35282), n(539854);
			var r = n(255367),
				i = n(73800),
				l = n(755721),
				o = n(481060),
				a = n(668781),
				s = n(139387),
				c = n(308063),
				d = n(600164),
				u = n(259580),
				p = n(768581),
				m = n(486199),
				b = n(981631),
				g = n(388032),
				f = n(405920);

			function h(e) {
				let {
					webhook: t,
					editedWebhook: n,
					channelOptions: h,
					isExpanded: x,
					errors: j,
					onToggleExpand: O
				} = e, v = i.useMemo(() => {
					var e;
					return null != (e = t.avatar) && /^data:/.test(e) ? e : (0, p.ov)({
						id: t.id,
						avatar: e,
						discriminator: b.fo$
					})
				}, [t]), y = i.useCallback(() => {
					(0, o.h7j)(e => {
						var n, i;
						return (0, r.jsx)(o.ConfirmModal, (n = function(e) {
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
							header: g.intl.formatToPlainString(g.t.gBKqZ2, {
								name: t.name
							}),
							confirmText: g.intl.string(g.t.CMy0Cg),
							cancelText: g.intl.string(g.t["ETE/oK"]),
							onConfirm: () => {
								c.Z.delete(t.guild_id, t.id).catch(() => {
									a.Z.show({
										title: g.intl.string(g.t.LpbaFR),
										body: g.intl.string(g.t["/4TwKS"])
									})
								})
							},
							children: (0, r.jsx)(o.Text, {
								variant: "text-md/normal",
								children: g.intl.string(g.t.zO9jrK)
							})
						}, Object.getOwnPropertyDescriptors ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(i)) : (function(e, t) {
							var n = Object.keys(e);
							if (Object.getOwnPropertySymbols) {
								var r = Object.getOwnPropertySymbols(e);
								n.push.apply(n, r)
							}
							return n
						})(Object(i)).forEach(function(e) {
							Object.defineProperty(n, e, Object.getOwnPropertyDescriptor(i, e))
						}), n))
					})
				}, [t.guild_id, t.id, t.name]), _ = [];
				null != t.source_channel && null != t.source_guild && (_.push({
					icon: o.MqZ,
					text: t.source_channel.name
				}), _.push({
					text: (0, r.jsx)("span", {
						className: f.guildSource,
						children: g.intl.format(g.t["H/jJ6e"], {
							guildHook: () => (0, r.jsx)("span", {
								className: f.sourceName,
								children: t.source_guild.name
							}, t.id)
						})
					}, "guild-source")
				}));
				let C = null;
				return x && null != n && (C = (0, r.jsxs)("div", {
					className: f.body,
					children: [(0, r.jsx)(o.$i$, {
						className: f.topDivider
					}), (0, r.jsx)(d.Z, {
						children: (0, r.jsxs)(d.Z, {
							direction: d.Z.Direction.VERTICAL,
							children: [(0, r.jsxs)(d.Z, {
								children: [(0, r.jsx)(d.Z.Child, {
									basis: "50%",
									children: (0, r.jsx)(o.xJW, {
										title: g.intl.string(g.t.I1o5gY),
										children: (0, r.jsx)(o.oil, {
											value: n.name,
											onChange: e => {
												s.Z.updateWebhook({
													name: e
												})
											},
											maxLength: 80,
											error: j.name
										})
									})
								}), (0, r.jsx)(d.Z.Child, {
									basis: "50%",
									children: (0, r.jsx)(o.xJW, {
										title: g.intl.string(g.t["4TuWfX"]),
										children: (0, r.jsx)(o.q4e, {
											value: n.channel_id,
											options: h,
											onChange: e => {
												s.Z.updateWebhook({
													channelId: e
												})
											}
										})
									})
								})]
							}), (0, r.jsx)(o.$i$, {
								className: f.bottomDivider
							}), (0, r.jsx)(d.Z, {
								children: (0, r.jsx)(l.zx, {
									onClick: y,
									size: l.zx.Sizes.SMALL,
									color: l.zx.Colors.RED,
									look: l.zx.Looks.LINK,
									className: f.removeButton,
									children: g.intl.string(g.t.CMy0Cg)
								})
							})]
						})
					})]
				})), (0, r.jsx)(o.Zbd, {
					editable: !0,
					className: f.card,
					children: (0, r.jsxs)(d.Z, {
						direction: d.Z.Direction.VERTICAL,
						children: [(0, r.jsx)(o.P3F, {
							className: f.header,
							"aria-expanded": x,
							onClick: O,
							children: (0, r.jsxs)(d.Z, {
								align: d.Z.Align.CENTER,
								children: [(0, r.jsx)(m.Z, {
									name: t.name,
									imageSrc: v,
									detailsClassName: f.__invalid_description,
									details: _
								}), (0, r.jsx)(u.Z, {
									className: f.expandIcon,
									expanded: x,
									"aria-hidden": !0
								})]
							})
						}), C]
					})
				})
			}
		},
		585835: function(e, t, n) {
			n.d(t, {
				Z: () => _
			}), n(539854), n(388685);
			var r = n(255367),
				i = n(73800),
				l = n(120356),
				o = n.n(l),
				a = n(243814),
				s = n(442837),
				c = n(755721),
				d = n(481060),
				u = n(367907),
				p = n(213459),
				m = n(600164),
				b = n(488915),
				g = n(970731),
				f = n(598077),
				h = n(626135),
				x = n(486199),
				j = n(929507),
				O = n(981631),
				v = n(388032),
				y = n(694095);

			function _(e) {
				var t, n, l;
				let {
					name: _,
					icon: C,
					imageSrc: N,
					iconBackgroundColor: I,
					iconClassName: E,
					iconWrapperClassName: S,
					details: T,
					integration: w,
					buttonText: P,
					buttonDisabled: Z,
					hasNextSection: A,
					onButtonClick: k,
					guildId: D,
					isScrolling: R,
					canShowMigrationTooltip: L,
					trailing: M
				} = e, [B, U] = i.useState(!1), [W, H] = i.useState(!1), G = L && !R && !W && void 0 !== D && null != w, z = i.useRef(null), F = i.useRef(null), V = i.useCallback((e, t, n, i) => null == e || null == i ? null : n ? (0, r.jsxs)(m.Z, {
					align: m.Z.Align.CENTER,
					ref: F,
					children: [(0, r.jsx)(d.Text, {
						variant: "text-sm/normal",
						children: e
					}), n ? (0, r.jsx)(d.Fbu, {
						size: "custom",
						color: "currentColor",
						width: 10,
						height: 10,
						className: y.caret
					}) : null]
				}) : (0, r.jsx)(c.zx, {
					buttonRef: z,
					size: c.zx.Sizes.SMALL,
					look: n ? c.zx.Looks.LINK : c.zx.Looks.FILLED,
					color: n ? c.zx.Colors.PRIMARY : c.zx.Colors.BRAND,
					disabled: t,
					onClick: i,
					children: e
				}), [z, F])(P, Z, A, k);
				i.useEffect(() => {
					var e, t;
					G && h.default.track(O.rMx.COMMANDS_MIGRATION_TOOLTIP_VIEWED, (e = function(e) {
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
					}({}, (0, u.hH)(D)), t = t = {
						application_id: null == w ? void 0 : w.application.id,
						location: "overview"
					}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : (function(e, t) {
						var n = Object.keys(e);
						if (Object.getOwnPropertySymbols) {
							var r = Object.getOwnPropertySymbols(e);
							n.push.apply(n, r)
						}
						return n
					})(Object(t)).forEach(function(n) {
						Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
					}), e))
				}, [D, null == w ? void 0 : w.application.id, G]);
				let K = G ? (0, r.jsx)(d.yRy, {
						targetElementRef: A ? F : z,
						renderPopout: () => (0, r.jsx)(d.P3F, {
							onClick: e => {
								e.stopPropagation(), H(!0), j.Z.dismissOverviewTooltip(D, w.integration)
							},
							children: (0, r.jsx)(g.ZP, {
								content: v.intl.string(v.t.TyMJwM),
								onClick: () => {}
							})
						}),
						position: "bottom",
						align: "center",
						animation: d.yRy.Animation.TRANSLATE,
						shouldShow: !0,
						children: () => V
					}) : V,
					q = (0, s.Wu)([b.Z], () => {
						var e;
						return null != w && null != D && null != (e = b.Z.getApplicationEntitlementsForGuild(w.application.id, D)) ? e : []
					}),
					Y = (0, p.LD)(D, !0),
					X = (null == w ? void 0 : w.application) != null && Object.keys(null != (l = null == (n = Y.result) || null == (t = n.sections[w.application.id]) ? void 0 : t.commands) ? l : {}).length > 0,
					$ = (0, r.jsxs)(m.Z, {
						children: [(0, r.jsx)(x.Z, {
							name: _,
							icon: C,
							imageSrc: N,
							iconBackgroundColor: I,
							iconClassName: E,
							iconWrapperClassName: S,
							details: T,
							isPremium: q.length > 0
						}), (0, r.jsx)(m.Z.Child, {
							shrink: 0,
							grow: 0,
							children: (0, r.jsxs)(m.Z, {
								align: m.Z.Align.CENTER,
								justify: m.Z.Justify.END,
								children: [function(e, t, n) {
									var i, l;
									if (null == e) return null;
									let o = [],
										{
											application: s,
											integration: c,
											webhooks: u
										} = e;
									return null != s.bot && (null == c || null == (i = c.scopes) ? void 0 : i.includes(a.x.BOT)) && o.push((0, r.jsx)(d.DY3, {
										forceOpen: t,
										text: new f.Z(s.bot).isVerifiedBot() ? v.intl.string(v.t.xxcTGx) : v.intl.string(v.t.AOdOYm),
										className: y.feature,
										children: (0, r.jsx)(d.wGt, {
											size: "md",
											color: "currentColor",
											className: y.featureIcon
										})
									}, "bot")), u.length > 0 && o.push((0, r.jsx)(d.DY3, {
										forceOpen: t,
										text: v.intl.formatToPlainString(v.t["6HqDfX"], {
											count: u.length
										}),
										className: y.feature,
										children: (0, r.jsx)(d.tYf, {
											size: "md",
											color: "currentColor",
											className: y.featureIcon
										})
									}, "webhooks")), (null == c || null == (l = c.scopes) ? void 0 : l.includes(a.x.APPLICATIONS_COMMANDS)) === !0 && n && o.push((0, r.jsx)(d.DY3, {
										forceOpen: t,
										text: v.intl.string(v.t["0hKkS0"]),
										className: y.feature,
										children: (0, r.jsx)(d.SsZ, {
											size: "md",
											color: "currentColor",
											className: y.featureIcon
										})
									}, "commands")), o
								}(w, B, X), K, M]
							})
						})]
					});
				return A ? (0, r.jsx)(d.P3F, {
					onClick: () => {
						L && null != D && null != w && j.Z.dismissOverviewTooltip(D, w.integration), null == k || k()
					},
					onFocus: () => U(!0),
					onBlur: () => U(!1),
					children: (0, r.jsx)(d.Zbd, {
						editable: !0,
						className: o()(y.card, y.clickable),
						children: $
					})
				}) : (0, r.jsx)(d.Zbd, {
					editable: !0,
					className: y.card,
					children: $
				})
			}
		},
		936726: function(e, t, n) {
			n.d(t, {
				Z: () => T
			}), n(35282), n(388685), n(539854);
			var r = n(255367),
				i = n(73800),
				l = n(120356),
				o = n.n(l),
				a = n(544891),
				s = n(846519),
				c = n(481060),
				d = n(668781),
				u = n(139387),
				p = n(308063),
				m = n(600164),
				b = n(208567),
				g = n(598077),
				f = n(259580),
				h = n(768581),
				x = n(572004),
				j = n(709054),
				O = n(51144),
				v = n(486199),
				y = n(981631),
				_ = n(388032),
				C = n(368938);

			function N(e) {
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

			function I(e, t) {
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
			let E = e => {
				if (null == e) return null;
				let t = new g.Z(e);
				return O.ZP.getUserTag(t)
			};

			function S(e, t) {
				return null != t && /^data:/.test(t) ? t : (0, h.ov)({
					id: e.id,
					avatar: t,
					discriminator: y.fo$
				})
			}

			function T(e) {
				let {
					id: t,
					webhook: n,
					editedWebhook: l,
					channelOptions: g,
					isExpanded: h,
					isNew: O,
					errors: T,
					onToggleExpand: w
				} = e, [P, Z] = i.useState(!1), [A] = i.useState(new s.V7);
				i.useEffect(() => () => A.stop(), [A]);
				let k = i.useMemo(() => S(n, n.avatar), [n]),
					D = i.useCallback(() => {
						let e = "".concat((0, a.K0)(!1)).concat(y.ANM.WEBHOOK_INTEGRATION(n.id, n.token));
						(0, x.JG)(e)
					}, [n]),
					R = i.useCallback(() => {
						(0, c.h7j)(e => (0, r.jsx)(c.ConfirmModal, I(N({}, e), {
							header: _.intl.formatToPlainString(_.t.QVFjHh, {
								name: n.name
							}),
							confirmText: _.intl.string(_.t["W+K1Fh"]),
							cancelText: _.intl.string(_.t.xNhj0N),
							onConfirm: () => {
								p.Z.delete(n.guild_id, n.id).catch(e => {
									let {
										status: t
									} = e;
									429 === t ? d.Z.show({
										title: _.intl.string(_.t.N5riYm),
										body: _.intl.string(_.t.eAxcCQ)
									}) : d.Z.show({
										title: _.intl.string(_.t.N5riYm),
										body: _.intl.string(_.t["/4TwKS"])
									})
								})
							},
							children: (0, r.jsx)(c.Text, {
								variant: "text-md/normal",
								children: _.intl.format(_.t["rIWe+/"], {
									name: n.name
								})
							})
						})))
					}, [n.guild_id, n.id, n.name]),
					L = [];
				null != n.user ? L.push({
					icon: c.T39,
					text: _.intl.formatToPlainString(_.t["7EcUbm"], {
						user: E(n.user),
						timestamp: j.default.extractTimestamp(n.id)
					})
				}) : L.push({
					icon: c.T39,
					text: _.intl.formatToPlainString(_.t["7mv59P"], {
						timestamp: j.default.extractTimestamp(n.id)
					})
				});
				let M = null;
				return h && null != l && (M = (0, r.jsxs)("div", {
					className: C.body,
					children: [(0, r.jsx)(c.$i$, {
						className: C.topDivider
					}), (0, r.jsxs)(m.Z, {
						children: [(0, r.jsx)(m.Z.Child, {
							shrink: 1,
							grow: 0,
							children: (0, r.jsxs)(m.Z, {
								className: C.avatarWrapper,
								direction: m.Z.Direction.VERTICAL,
								children: [(0, r.jsx)(b.Z, {
									image: l.avatar,
									onChange: e => {
										u.Z.updateWebhook({
											avatar: e
										})
									},
									makeURL: e => S(n, e),
									imageClassName: C.avatarUploaderInner,
									showIcon: !0
								}), null != T.avatar && "" !== T.avatar ? (0, r.jsx)(c.Text, {
									color: "text-danger",
									variant: "text-sm/normal",
									children: T.avatar
								}) : null]
							})
						}), (0, r.jsxs)(m.Z, {
							direction: m.Z.Direction.VERTICAL,
							children: [(0, r.jsxs)(m.Z, {
								children: [(0, r.jsx)(m.Z.Child, {
									basis: "50%",
									children: (0, r.jsx)(c.xJW, {
										title: _.intl.string(_.t.ukdxur),
										children: (0, r.jsx)(c.oil, {
											value: l.name,
											onChange: e => {
												u.Z.updateWebhook({
													name: e
												})
											},
											maxLength: 80,
											error: T.name
										})
									})
								}), (0, r.jsx)(m.Z.Child, {
									basis: "50%",
									children: (0, r.jsx)(c.xJW, {
										title: _.intl.string(_.t.GK18KC),
										children: (0, r.jsx)(c.VcW, {
											value: l.channel_id,
											options: g,
											onChange: e => {
												u.Z.updateWebhook({
													channelId: e
												})
											},
											placeholder: _.intl.string(_.t.r2pts7)
										})
									})
								})]
							}), (0, r.jsx)(c.$i$, {
								className: C.bottomDivider
							}), (0, r.jsxs)(m.Z, {
								children: [(0, r.jsx)(c.ua7, {
									text: _.intl.string(_.t.wwdb3t),
									forceOpen: P,
									color: c.FGA.GREEN,
									disableTooltipPointerEvents: !0,
									children: e => {
										var {
											onClick: t,
											onMouseEnter: i,
											onMouseLeave: l,
											onBlur: o,
											onFocus: a
										} = e, s = function(e, t) {
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
										}(e, ["onClick", "onMouseEnter", "onMouseLeave", "onBlur", "onFocus"]);
										return (0, r.jsx)("div", {
											"data-button-hoisted-classname-wrapper": !0,
											className: C.copyButton,
											children: (0, r.jsx)(c.zxk, I(N({
												variant: "secondary",
												size: "sm",
												text: _.intl.string(_.t.Ae9rUV)
											}, s), {
												"aria-label": "",
												onClick: () => {
													null == t || t(), Z(!0), c.uvj.announce(_.intl.string(_.t.wwdb3t)), A.start(1e3, () => Z(!1)), D()
												},
												disabled: null == n.token || "" === n.token
											}))
										})
									}
								}), (0, r.jsx)(c.zxk, {
									variant: "critical-secondary",
									size: "sm",
									text: _.intl.string(_.t.jVrUnJ),
									onClick: R
								})]
							})]
						})]
					})]
				})), (0, r.jsx)(c.Zbd, {
					editable: !0,
					id: t,
					className: o()(C.card, O ? C.pulse : null),
					children: (0, r.jsxs)(m.Z, {
						direction: m.Z.Direction.VERTICAL,
						children: [(0, r.jsx)(c.P3F, {
							className: C.header,
							"aria-expanded": h,
							onClick: w,
							children: (0, r.jsxs)(m.Z, {
								align: m.Z.Align.CENTER,
								children: [(0, r.jsx)(v.Z, {
									name: n.name,
									imageSrc: k,
									details: L
								}), (0, r.jsx)(f.Z, {
									className: C.expandIcon,
									expanded: h,
									"aria-hidden": !0
								})]
							})
						}), M]
					})
				})
			}
		},
		725875: function(e, t, n) {
			n.d(t, {
				Z: () => g
			}), n(539854), n(388685), n(642613);
			var r = n(255367),
				i = n(73800),
				l = n(481060),
				o = n(139387),
				a = n(933557),
				s = n(699516),
				c = n(594174),
				d = n(491302),
				u = n(936726),
				p = n(981631),
				m = n(388032),
				b = n(274008);

			function g(e) {
				let {
					webhooks: t,
					selectableWebhookChannels: n,
					lastCreatedWebhookId: g,
					editedWebhook: f,
					errors: h,
					canNavigate: x
				} = e, j = i.useMemo(() => Object.values(n).map(e => ({
					value: e.id,
					label: (0, a.F6)(e, c.default, s.Z, !0)
				})), [n]), O = i.useMemo(() => {
					let e = {};
					for (let r of t)
						if (r.channel_id in e) e[r.channel_id].webhooks.push(r);
						else {
							let t = n[r.channel_id];
							null != t && (e[r.channel_id] = {
								channel: t,
								webhooks: [r]
							})
						} return Object.values(e).sort((e, t) => e.channel.name.localeCompare(t.channel.name))
				}, [n, t]), v = i.useCallback(e => {
					x() && (e === (null == f ? void 0 : f.id) ? o.Z.stopEditingWebhook() : o.Z.startEditingWebhook(e))
				}, [x, f]);
				return (0, r.jsx)("div", {
					className: b.__invalid_list,
					children: O.map(e => {
						let {
							channel: t,
							webhooks: n
						} = e;
						return function(e) {
							let {
								channel: t,
								webhooks: n,
								channelOptions: i,
								lastCreatedWebhookId: o,
								editedWebhook: g,
								errors: f,
								toggleWebhookExpand: h
							} = e;
							return (0, r.jsxs)("div", {
								children: [(0, r.jsx)(l.vwX, {
									className: b.groupHeader,
									children: m.intl.format(m.t.TKDIZm, {
										channelHook: () => (0, r.jsx)("span", {
											className: b.channelName,
											children: (0, a.F6)(t, c.default, s.Z, !0)
										}, t.id)
									})
								}), n.map(e => {
									var t;
									return e.type === p.ylB.CHANNEL_FOLLOWER ? (0, r.jsx)(d.Z, {
										webhook: e,
										editedWebhook: g,
										channelOptions: i,
										isExpanded: (null == g ? void 0 : g.id) === e.id,
										onToggleExpand: () => h(e.id),
										errors: f
									}, e.id) : (0, r.jsx)(u.Z, {
										id: (t = e.id, "settings-integrations-webhook-".concat(t)),
										webhook: e,
										editedWebhook: g,
										channelOptions: i,
										isExpanded: (null == g ? void 0 : g.id) === e.id,
										isNew: o === e.id,
										onToggleExpand: () => h(e.id),
										errors: f
									}, e.id)
								})]
							}, t.id)
						}({
							channel: t,
							webhooks: n,
							channelOptions: j,
							lastCreatedWebhookId: g,
							editedWebhook: f,
							errors: h,
							toggleWebhookExpand: v
						})
					})
				})
			}
		},
		685929: function(e, t, n) {
			n.d(t, {
				C: () => o,
				Y: () => a
			});
			var r = n(442837),
				i = n(496675),
				l = n(981631);

			function o(e) {
				let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : i.Z;
				return null != e && null != e.linkedLobby && t.can(l.Plq.MANAGE_CHANNELS, e) && t.can(l.Plq.VIEW_CHANNEL, e) && t.can(l.Plq.SEND_MESSAGES, e)
			}

			function a(e) {
				return (0, r.e7)([i.Z], () => o(e, i.Z))
			}
		},
		163400: function(e, t, n) {
			n.d(t, {
				F: () => s,
				p: () => a
			});
			var r = n(442837),
				i = n(984933),
				l = n(496675),
				o = n(685929);

			function a(e) {
				let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : i.ZP,
					n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : l.Z;
				return null == e ? [] : t.getChannels(e)[i.sH].filter(e => (0, o.C)(e.channel, n)).map(e => e.channel)
			}

			function s(e) {
				return (0, r.Wu)([l.Z, i.ZP], () => a(e, i.ZP, l.Z))
			}
		},
		296023: function(e, t, n) {
			n.d(t, {
				w: () => a
			});
			var r = n(73800),
				i = n(442837),
				l = n(594174),
				o = n(388032);

			function a(e) {
				var t;
				let n = null == (t = e.linkedLobby) ? void 0 : t.linked_at,
					a = (0, i.e7)([l.default], () => {
						var t;
						return l.default.getUser(null == (t = e.linkedLobby) ? void 0 : t.linked_by)
					});
				return r.useMemo(() => {
					if (null == n) return;
					let e = new Date(n);
					return null != a ? o.intl.format(o.t["xPrJ+v"], {
						username: a.username,
						linkedAtDate: e
					}) : o.intl.formatToPlainString(o.t.EyygeH, {
						linkedAtDate: e
					})
				}, [n, a])
			}
		},
		453628: function(e, t, n) {
			n.d(t, {
				Z: () => f,
				y: () => p
			});
			var r, i = n(255367);
			n(73800);
			var l = n(120356),
				o = n.n(l),
				a = n(481060),
				s = n(388032),
				c = n(81206);

			function d(e) {
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

			function u(e, t) {
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
			var p = ((r = {}).DENY = "DENY", r.PASSTHROUGH = "PASSTHROUGH", r.ALLOW = "ALLOW", r);
			let m = Object.keys(p);

			function b(e) {
				let {
					value: t = "PASSTHROUGH",
					onChange: n,
					labelledBy: r,
					disabled: l = !1
				} = e, s = (0, a.arW)({
					orientation: "horizontal",
					isDisabled: l,
					labelledBy: r
				}), {
					ref: p
				} = s, b = function(e, t) {
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
				}(s, ["ref"]);
				return (0, i.jsx)("div", u(d({
					className: o()(c.group, {
						[c.disabled]: l
					}),
					ref: p
				}, b), {
					children: m.map(e => (0, i.jsx)(g, {
						type: e,
						isSelected: t === e,
						onSelect: e => {
							t === e || l || n(e)
						}
					}, e))
				}))
			}

			function g(e) {
				let t, n, r, {
					type: l,
					onSelect: p,
					isSelected: m
				} = e;
				switch (l) {
					case "DENY":
						r = s.intl.string(s.t["6639Oz"]), t = a.Dio, n = c.deny;
						break;
					case "ALLOW":
						r = s.intl.string(s.t.RzDfSk), t = a.dz2, n = c.allow;
						break;
					default:
						r = s.intl.string(s.t.ujC3ZW), t = a.XZC, n = c.passthrough
				}
				let b = (0, a.xUy)({
					isSelected: m,
					label: r
				});
				return (0, i.jsx)(a.P3F, u(d({
					className: o()(c.item, n, {
						[c.selected]: m
					}),
					onClick: () => p(l)
				}, b), {
					children: (0, i.jsx)(t, {
						color: "currentColor",
						size: "xs"
					})
				}))
			}
			b.Types = p;
			let f = b
		},
		996987: function(e, t, n) {
			n.d(t, {
				Z: () => u
			});
			var r = n(255367);
			n(73800);
			var i = n(481060),
				l = n(600164),
				o = n(313201),
				a = n(63063),
				s = n(453628),
				c = n(388032),
				d = n(20493);

			function u(e) {
				let {
					value: t,
					onChange: n,
					children: u,
					note: p,
					helpdeskArticleId: m,
					style: b,
					disabled: g = !1,
					hideBorder: f = !1,
					className: h = d.marginBottom20
				} = e, x = (0, o.Dt)();
				return (0, r.jsxs)(l.Z, {
					style: b,
					className: h,
					direction: l.Z.Direction.VERTICAL,
					children: [(0, r.jsxs)(l.Z, {
						children: [(0, r.jsx)(l.Z.Child, {
							children: (0, r.jsx)(i.vwX, {
								id: x,
								className: d.marginReset,
								tag: i.RB0.H3,
								disabled: g,
								children: u
							})
						}), (0, r.jsx)(l.Z.Child, {
							grow: 0,
							shrink: 0,
							children: (0, r.jsx)(s.Z, {
								value: t,
								onChange: n,
								disabled: g,
								labelledBy: x
							})
						})]
					}), null != p && (0, r.jsx)(l.Z.Child, {
						className: d.marginTop4,
						children: (0, r.jsx)(i.R94, {
							type: i.geA.DESCRIPTION,
							children: p
						})
					}), null != m && (0, r.jsx)(l.Z.Child, {
						className: d.marginTop4,
						children: (0, r.jsx)(i.R94, {
							disabled: g,
							type: i.geA.DESCRIPTION,
							children: (0, r.jsx)(i.eee, {
								href: a.Z.getArticleURL(m),
								children: c.intl.string(c.t.hvVgAQ)
							})
						})
					}), !f && (0, r.jsx)(l.Z.Child, {
						className: d.marginTop20,
						children: (0, r.jsx)(i.$i$, {})
					})]
				})
			}
			s.Z.Types, u.Types = s.Z.Types
		},
		531087: function(e, t, n) {
			n.d(t, {
				Z: () => s
			});
			var r = n(255367);
			n(73800);
			var i = n(120356),
				l = n.n(i),
				o = n(325767),
				a = n(58482);

			function s(e) {
				var t, n, {
						width: i = 16,
						height: s = 16,
						color: c = "currentColor",
						foreground: d,
						className: u
					} = e,
					p = function(e, t) {
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
					}(e, ["width", "height", "color", "foreground", "className"]);
				return (0, r.jsx)("svg", (t = function(e) {
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
					className: l()(a.updateAvailable, u)
				}, (0, o.Z)(p)), n = n = {
					width: i,
					height: s,
					viewBox: "0 0 24 24",
					children: (0, r.jsxs)("g", {
						fill: "none",
						fillRule: "evenodd",
						children: [(0, r.jsx)("path", {
							fill: c,
							className: d,
							fillRule: "nonzero",
							d: "M5,8 L9,12 L6,12 C6,15.31 8.69,18 12,18 C13.01,18 13.97,17.75 14.8,17.3 L16.26,18.76 C15.03,19.54 13.57,20 12,20 C7.58,20 4,16.42 4,12 L1,12 L5,8 Z M18,12 C18,8.69 15.31,6 12,6 C10.99,6 10.03,6.25 9.2,6.7 L7.74,5.24 C8.97,4.46 10.43,4 12,4 C16.42,4 20,7.58 20,12 L23,12 L19,16 L15,12 L18,12 Z"
						}), (0, r.jsx)("polygon", {
							points: "24 0 0 0 0 24 24 24"
						})]
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
		},
		951284: function(e, t, n) {
			n.d(t, {
				b: () => i
			}), n(388685);
			var r, i = ((r = {}).DISCORD = "discord", r.TWITCH = "twitch", r.YOUTUBE = "youtube", r.GUILD_SUBSCRIPTION = "guild_subscription", r)
		},
		326946: function(e, t, n) {
			e.exports = {
				title: "title__97dce",
				icon: "icon__97dce"
			}
		},
		416746: function(e, t, n) {
			e.exports = {
				sidebarScrollable: "sidebarScrollable__53543",
				content: "content__53543",
				scroller: "scroller__53543"
			}
		},
		147612: function(e, t, n) {
			e.exports = {
				headerContainer: "headerContainer__7e1d8",
				headerText: "headerText__7e1d8",
				closeIcon: "closeIcon__7e1d8",
				options: "options__7e1d8",
				optionContainer: "optionContainer__7e1d8",
				optionContainerOther: "optionContainerOther__7e1d8",
				optionText: "optionText__7e1d8",
				textboxContainer: "textboxContainer__7e1d8",
				serverLockdownReasonText: "serverLockdownReasonText__7e1d8"
			}
		},
		613915: function(e, t, n) {
			e.exports = {
				headerContainer: "headerContainer_c38e9f",
				mainContainer: "mainContainer_c38e9f",
				pauseContainer: "pauseContainer_c38e9f",
				pauseText: "pauseText_c38e9f",
				toggle: "toggle_c38e9f"
			}
		},
		508815: function(e, t, n) {
			e.exports = {
				icon: "icon_b28dff",
				identifier: "identifier_b28dff",
				item: "item_b28dff",
				statusContainer: "statusContainer_b28dff",
				statusLine: "statusLine_b28dff",
				statusIcon: "statusIcon_b28dff"
			}
		},
		298040: function(e, t, n) {
			e.exports = {
				emptyCard: "emptyCard__0a9e8"
			}
		},
		555781: function(e, t, n) {
			e.exports = {
				channelIcon: "channelIcon_e98186",
				lockIcon: "lockIcon_e98186",
				identifier: "identifier_e98186",
				image: "image_e98186 " + n(361585).desaturateUserColors,
				shield: "shield_e98186 " + n(361585).desaturateUserColors,
				roleName: "roleName_e98186",
				tag: "tag_e98186"
			}
		},
		981263: function(e, t, n) {
			e.exports = {
				entryActions: "entryActions__3f339",
				entryItem: "entryItem__3f339",
				entryName: "entryName__3f339",
				noItemsSelected: "noItemsSelected__3f339",
				removeActions: "removeActions__3f339",
				removeIcon: "removeIcon__3f339",
				removeContainer: "removeContainer__3f339",
				tooltip: "tooltip__3f339"
			}
		},
		190434: function(e, t, n) {
			e.exports = {
				addButton: "addButton__9c74b",
				listContainer: "listContainer__9c74b",
				tooltip: "tooltip__9c74b",
				requiredPermissionsBanner: "requiredPermissionsBanner__9c74b",
				message: "message__9c74b",
				icon: "icon__9c74b"
			}
		},
		857538: function(e, t, n) {
			e.exports = {
				group: "group_f5fff4",
				disabled: "disabled_f5fff4",
				item: "item_f5fff4",
				allow: "allow_f5fff4",
				selected: "selected_f5fff4",
				deny: "deny_f5fff4"
			}
		},
		272997: function(e, t, n) {
			e.exports = {
				card: "card_b44011",
				inModal: "inModal_b44011",
				cardHeader: "cardHeader_b44011"
			}
		},
		883685: function(e, t, n) {
			e.exports = {
				applicationPermissions: "applicationPermissions__9a8ce"
			}
		},
		541056: function(e, t, n) {
			e.exports = {
				inviteSettingsInviteRow: "inviteSettingsInviteRow__1de14",
				header: "header__1de14",
				actions: "actions__1de14",
				headerDivider: "headerDivider__1de14",
				revokeInvite: "revokeInvite__1de14",
				text: "text__1de14",
				inviteDisabledRow: "inviteDisabledRow__1de14",
				inviteDisabledTip: "inviteDisabledTip__1de14",
				inviteDisabledContainer: "inviteDisabledContainer__1de14",
				countdownColumn: "countdownColumn__1de14",
				inviteCode: "inviteCode__1de14",
				countdown: "countdown__1de14",
				uses: "uses__1de14",
				discriminator: "discriminator__1de14",
				avatar: "avatar__1de14",
				bypass: "bypass__1de14",
				infoIcon: "infoIcon__1de14"
			}
		},
		351462: function(e, t, n) {
			e.exports = {
				eyebrow: "eyebrow__72025",
				actions: "actions__72025",
				inviteButtons: "inviteButtons__72025"
			}
		},
		348563: function(e, t, n) {
			e.exports = {
				imageUploader: "imageUploader_e4d0bf",
				removeButton: "removeButton_e4d0bf",
				sizeInfo: "sizeInfo_e4d0bf",
				disabled: "disabled_e4d0bf",
				imageUploaderInner: "imageUploaderInner_e4d0bf",
				imageUploaderIconWrapper: "imageUploaderIconWrapper_e4d0bf",
				imageUploaderFileInput: "imageUploaderFileInput_e4d0bf",
				imageUploaderAcronym: "imageUploaderAcronym_e4d0bf",
				imageUploaderHint: "imageUploaderHint_e4d0bf",
				imageUploaderIcon: "imageUploaderIcon_e4d0bf",
				imageUploaderIconDisabled: "imageUploaderIconDisabled_e4d0bf"
			}
		},
		821022: function(e, t, n) {
			e.exports = {
				wrapper: "wrapper__67dba",
				scroller: "scroller__67dba",
				modal: "modal__67dba",
				closeButton: "closeButton__67dba",
				headerCloseButtonSpacing: "headerCloseButtonSpacing__67dba",
				header: "header__67dba",
				headerText: "headerText__67dba",
				headerChannelContainer: "headerChannelContainer__67dba",
				channelIcon: "channelIcon__67dba",
				searchBar: "searchBar__67dba",
				hubHeader: "hubHeader__67dba",
				hubInviteTitle: "hubInviteTitle__67dba",
				hubFriendSearch: "hubFriendSearch__67dba",
				inviteRow: "inviteRow__67dba",
				inviteRowAvatar: "inviteRowAvatar__67dba",
				inviteRowInfo: "inviteRowInfo__67dba",
				inviteRowName: "inviteRowName__67dba",
				inviteRowButton: "inviteRowButton__67dba",
				inviteRowEmptyState: "inviteRowEmptyState__67dba",
				warningContainer: "warningContainer__67dba",
				warningIcon: "warningIcon__67dba",
				noPadding: "noPadding__67dba",
				content: "content__67dba",
				subText: "subText__67dba",
				formText: "formText__67dba",
				toggle: "toggle__67dba",
				noScroll: "noScroll__67dba",
				settingsFooter: "settingsFooter__67dba",
				footer: "footer__67dba",
				footerText: "footerText__67dba",
				headerContainer: "headerContainer__67dba",
				welcomeImage: "welcomeImage__67dba",
				welcomeHeading: "welcomeHeading__67dba",
				welcomeSubheading: "welcomeSubheading__67dba",
				errorMessage: "errorMessage__67dba",
				errorLink: "errorLink__67dba",
				acronym: "acronym__67dba",
				divider: "divider__67dba"
			}
		},
		942558: function(e, t, n) {
			e.exports = {
				footer: "footer__6be55",
				guildRow: "guildRow__6be55",
				inviteIcon: "inviteIcon__6be55",
				inviteTarget: "inviteTarget__6be55",
				inviteTargetIcon: "inviteTargetIcon__6be55",
				inviteTargetHeading: "inviteTargetHeading__6be55",
				guildPresence: "guildPresence__6be55",
				memberCount: "memberCount__6be55",
				onlineCount: "onlineCount__6be55",
				dot: "dot__6be55",
				settingsButton: "settingsButton__6be55",
				settingsOpen: "settingsOpen__6be55",
				advancedOptions: "advancedOptions__6be55",
				advancedOption: "advancedOption__6be55",
				advancedOptionInner: "advancedOptionInner__6be55",
				advancedOptionContent: "advancedOptionContent__6be55",
				buttonRow: "buttonRow__6be55",
				button: "button__6be55",
				buttonInner: "buttonInner__6be55"
			}
		},
		910420: function(e, t, n) {
			e.exports = {
				modal: "modal__28554",
				header: "header__28554",
				titleLine: "titleLine__28554",
				title: "title__28554",
				body: "body__28554",
				closeButton: "closeButton__28554",
				empty: "empty__28554",
				recipientList: "recipientList__28554",
				recipientRow: "recipientRow__28554",
				recipientAsset: "recipientAsset__28554",
				recipientLabels: "recipientLabels__28554",
				recipientLabel: "recipientLabel__28554",
				recipientSublabel: "recipientSublabel__28554",
				checkbox: "checkbox__28554",
				disabled: "disabled__28554",
				footer: "footer__28554",
				footerContent: "footerContent__28554"
			}
		},
		842515: function(e, t, n) {
			e.exports = {
				noScroll: "noScroll_e81c2b",
				settingsContent: "settingsContent_e81c2b noScroll_e81c2b",
				settingsForm: "settingsForm_e81c2b",
				switch: "switch_e81c2b"
			}
		},
		410322: function(e, t, n) {
			e.exports = {
				wrapper: "wrapper__4a3a5",
				header: "header__4a3a5",
				secondaryHeader: "secondaryHeader__4a3a5",
				icon: "icon__4a3a5",
				iconWrapper: "iconWrapper__4a3a5",
				detailsIcon: "detailsIcon__4a3a5",
				detailsWrapper: "detailsWrapper__4a3a5",
				headerDetailsWrapper: "headerDetailsWrapper__4a3a5",
				premiumIcon: "premiumIcon__4a3a5"
			}
		},
		258163: function(e, t, n) {
			e.exports = {
				header: "header__3633a",
				icon: "icon__3633a",
				name: "name__3633a",
				title: "title__3633a"
			}
		},
		704526: function(e, t, n) {
			e.exports = {
				headerDivider: "headerDivider__7fc1d",
				headerDescription: "headerDescription__7fc1d",
				section: "section__7fc1d",
				emptyCard: "emptyCard__7fc1d"
			}
		},
		621057: function(e, t, n) {
			e.exports = {
				headerDivider: "headerDivider__9e732",
				platformIcon: "platformIcon__9e732",
				helpText: "helpText__9e732"
			}
		},
		431349: function(e, t, n) {
			e.exports = {
				headerDivider: "headerDivider__59048",
				emptyStateImage: "emptyStateImage__59048",
				emptyStateButton: "emptyStateButton__59048"
			}
		},
		5692: function(e, t, n) {
			e.exports = {
				headerDivider: "headerDivider__774bc",
				header: "header__774bc",
				applicationGroup: "applicationGroup__774bc",
				iconwrapper: "iconwrapper__774bc"
			}
		},
		709677: function(e, t, n) {
			e.exports = {
				divider: "divider__98b95",
				sectionHeader: "sectionHeader__98b95",
				emptyStateWrapper: "emptyStateWrapper__98b95",
				emptyStateImage: "emptyStateImage__98b95",
				emptyStateText: "emptyStateText__98b95",
				emptyStateCard: "emptyStateCard__98b95",
				emptyStateSearchImage: "emptyStateSearchImage__98b95",
				footerPlaceholder: "footerPlaceholder__98b95",
				footerImage: "footerImage__98b95",
				linkedLobbyIcon: "linkedLobbyIcon__98b95",
				platformIcon: "platformIcon__98b95",
				searchContainer: "searchContainer__98b95"
			}
		},
		14119: function(e, t, n) {
			e.exports = {
				headerDivider: "headerDivider__97dd8",
				createButton: "createButton__97dd8",
				emptyStateImage: "emptyStateImage__97dd8",
				emptyStateButton: "emptyStateButton__97dd8"
			}
		},
		498181: function(e, t, n) {
			e.exports = {
				breadcrumbs: "breadcrumbs_befe67",
				breadcrumbActive: "breadcrumbActive_befe67",
				breadcrumbInactive: "breadcrumbInactive_befe67"
			}
		},
		439478: function(e, t, n) {
			e.exports = {
				card: "card__83361",
				iconWrapper: "iconWrapper__83361",
				tag: "tag__83361",
				divider: "divider__83361",
				permissionHeader: "permissionHeader__83361",
				rolePills: "rolePills__83361"
			}
		},
		796920: function(e, t, n) {
			e.exports = {
				card: "card__24585",
				header: "header__24585",
				expandableHeader: "expandableHeader__24585",
				body: "body__24585",
				topDivider: "topDivider__24585",
				midDivider: "midDivider__24585",
				bottomDivider: "bottomDivider__24585",
				description: "description__24585",
				syncedRole: "syncedRole__24585",
				emoji: "emoji__24585",
				expandIcon: "expandIcon__24585",
				disableButton: "disableButton__24585"
			}
		},
		405920: function(e, t, n) {
			e.exports = {
				card: "card_ebafdd",
				header: "header_ebafdd",
				body: "body_ebafdd",
				topDivider: "topDivider_ebafdd",
				bottomDivider: "bottomDivider_ebafdd",
				expandIcon: "expandIcon_ebafdd",
				sourceName: "sourceName_ebafdd",
				guildSource: "guildSource_ebafdd",
				removeButton: "removeButton_ebafdd"
			}
		},
		694095: function(e, t, n) {
			e.exports = {
				card: "card_dc2e44",
				caret: "caret_dc2e44",
				feature: "feature_dc2e44",
				featureIcon: "featureIcon_dc2e44",
				clickable: "clickable_dc2e44"
			}
		},
		368938: function(e, t, n) {
			e.exports = {
				card: "card_eafb9c",
				pulse: "pulse_eafb9c",
				pulseBorder: "pulseBorder_eafb9c",
				header: "header_eafb9c",
				body: "body_eafb9c",
				avatarWrapper: "avatarWrapper_eafb9c",
				avatarUploaderInner: "avatarUploaderInner_eafb9c",
				topDivider: "topDivider_eafb9c",
				bottomDivider: "bottomDivider_eafb9c",
				copyButton: "copyButton_eafb9c",
				expandIcon: "expandIcon_eafb9c"
			}
		},
		274008: function(e, t, n) {
			e.exports = {
				groupHeader: "groupHeader__5df34",
				channelName: "channelName__5df34"
			}
		},
		81206: function(e, t, n) {
			e.exports = {
				group: "group__344e6",
				item: "item__344e6",
				disabled: "disabled__344e6",
				allow: "allow__344e6",
				selected: "selected__344e6",
				deny: "deny__344e6",
				passthrough: "passthrough__344e6"
			}
		},
		58482: function(e, t, n) {
			e.exports = {
				updateAvailable: "updateAvailable__9f94c",
				spin: "spin__9f94c"
			}
		}
	}
]);
//# sourceMappingURL=93d3bc387ee1efdc.js.map