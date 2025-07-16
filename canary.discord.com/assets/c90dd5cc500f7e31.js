"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
	["48812"], {
		117266: function(e, t, n) {
			n.d(t, {
				Z: () => i
			});
			var r = n(570140);

			function i(e) {
				r.Z.dispatch({
					type: "DETECTED_OFF_PLATFORM_PREMIUM_PERKS_DISMISS",
					skuId: e
				})
			}
		},
		195500: function(e, t, n) {
			n.d(t, {
				Z: () => i
			});
			var r = n(570140);
			let i = {
				clearRemoteDisconnectVoiceChannelId() {
					r.Z.dispatch({
						type: "CLEAR_REMOTE_DISCONNECT_VOICE_CHANNEL_ID"
					})
				},
				clearLastSessionVoiceChannelId() {
					r.Z.dispatch({
						type: "CLEAR_LAST_SESSION_VOICE_CHANNEL_ID"
					})
				}
			}
		},
		205355: function(e, t, n) {
			n.d(t, {
				Z: () => c
			}), n(388685);
			var r = n(544891),
				i = n(570140),
				l = n(981631);
			let a = "".concat(l.dGm, "/api/v2/scheduled-maintenances"),
				o = "".concat(l.dGm, "/api/v2/incidents/unresolved.json"),
				c = {
					checkIncidents() {
						Promise.all([r.tn.get({
							url: "".concat(a, "/active.json"),
							rejectWithError: !0
						}), r.tn.get(o)]).then(e => {
							let [t, n] = e, [r] = t.body.scheduled_maintenances, [l] = n.body.incidents;
							i.Z.dispatch({
								type: "STATUS_PAGE_INCIDENT",
								incident: l || r
							})
						})
					},
					checkScheduledMaintenances() {
						r.tn.get({
							url: "".concat(a, "/upcoming.json"),
							rejectWithError: !0
						}).then(e => {
							let [t] = e.body.scheduled_maintenances;
							i.Z.dispatch({
								type: "STATUS_PAGE_SCHEDULED_MAINTENANCE",
								maintenance: t
							})
						})
					},
					ackScheduledMaintenance() {
						i.Z.dispatch({
							type: "STATUS_PAGE_SCHEDULED_MAINTENANCE_ACK"
						})
					}
				}
		},
		223245: function(e, t, n) {
			n.d(t, {
				Z: () => i
			}), n(388685);
			var r = n(570140);
			let i = {
				setEnabled(e) {
					this.update({
						enabled: e
					})
				},
				update(e) {
					for (let t of Object.keys(e)) r.Z.dispatch({
						type: "STREAMER_MODE_UPDATE",
						key: t,
						value: e[t]
					})
				}
			}
		},
		491428: function(e, t, n) {
			n.d(t, {
				Xq: () => u,
				g8: () => E,
				hZ: () => d,
				wk: () => _
			});
			var r = n(990547),
				i = n(283693),
				l = n(570140),
				a = n(558724),
				o = n(626135),
				c = n(573261),
				s = n(981631);

			function u(e) {
				l.Z.dispatch({
					type: "SURVEY_OVERRIDE",
					id: e
				})
			}

			function d(e, t) {
				l.Z.dispatch({
					type: "SURVEY_HIDE",
					key: e
				}), t ? o.default.track(s.rMx.APP_NOTICE_CLOSED, {
					notice_type: s.kVF.SURVEY,
					survey_id: e,
					dismissed: t
				}) : o.default.track(s.rMx.APP_NOTICE_PRIMARY_CTA_OPENED, {
					notice_type: s.kVF.SURVEY
				})
			}

			function _(e, t) {
				var n = {};
				return null != e && (n.survey_override = e), null != t && (n.disable_auto_seen = t), c.Z.get({
					url: s.ANM.USER_SURVEY,
					query: n,
					trackedActionData: {
						event: r.NetworkActionNames.USER_SURVEY_FETCH,
						properties: e => {
							var t;
							let n = null == e || null == (t = e.body) ? void 0 : t.survey;
							return (0, i.iG)({
								key: null == n ? void 0 : n.key
							})
						}
					},
					rejectWithError: !1
				}).then(e => {
					var t;
					l.Z.dispatch({
						type: "SURVEY_FETCHED",
						survey: null == e || null == (t = e.body) ? void 0 : t.survey
					})
				}, () => {
					l.Z.dispatch({
						type: "SURVEY_FETCHED",
						survey: null
					})
				})
			}

			function E(e) {
				let t = a.Z.getLastSeenTimestamp();
				if (null === t || null != t && Date.now() - t >= a.J) return l.Z.dispatch({
					type: "SURVEY_SEEN",
					key: e
				}), c.Z.post({
					url: s.ANM.USER_SURVEY_SEEN(e),
					trackedActionData: {
						event: r.NetworkActionNames.USER_SURVEY_SEEN,
						properties: t => (0, i.iG)({
							key: e
						})
					},
					rejectWithError: !1
				})
			}
		},
		401430: function(e, t, n) {
			n.d(t, {
				Wt: () => _,
				mc: () => E,
				q$: () => I
			}), n(415506), n(997841), n(35282);
			var r = n(570140),
				i = n(566620),
				l = n(728345),
				a = n(812206),
				o = n(973616),
				c = n(630388),
				s = n(591759),
				u = n(978085),
				d = n(981631);
			async function _(e, t) {
				r.Z.dispatch({
					applicationId: e,
					type: "DEVELOPER_TEST_MODE_AUTHORIZATION_START"
				});
				try {
					if (!await (0, i.W5)(e)) throw Error("Do not have access!");
					let n = a.Z.getApplication(e);
					null == n && (n = o.ZP.createFromServer(await l.ZP.fetchApplication(e)));
					let _ = (0, c.yE)(n.flags, d.udG.EMBEDDED);
					if (_ && (null == t || !s.Z.URL_REGEX.test(t))) throw Error("Invalid Origin URL for embedded application");
					return _ || u.GR(n), r.Z.dispatch({
						type: "DEVELOPER_TEST_MODE_AUTHORIZATION_SUCCESS",
						applicationId: e,
						originURL: _ ? t : null
					}), n
				} catch (t) {
					return r.Z.dispatch({
						type: "DEVELOPER_TEST_MODE_AUTHORIZATION_FAIL",
						applicationId: e,
						error: t.message
					}), null
				}
			}

			function E() {
				r.Z.dispatch({
					type: "DEVELOPER_TEST_MODE_RESET"
				})
			}

			function I() {
				r.Z.dispatch({
					type: "DEVELOPER_TEST_MODE_RESET_ERROR"
				})
			}
		},
		72924: function(e, t, n) {
			n.d(t, {
				S: () => S
			});
			var r = n(255367);
			n(73800);
			var i = n(512722),
				l = n.n(i),
				a = n(481060),
				o = n(558381),
				c = n(821849),
				s = n(531826),
				u = n(15640),
				d = n(724870),
				_ = n(87484),
				E = n(928518),
				I = n(106976),
				O = n(689011),
				p = n(55563),
				T = n(981631);
			async function S(e) {
				var t, n, i, S, N;
				let {
					applicationId: f,
					skuId: m,
					initialPlanId: A,
					analyticsLocations: g,
					analyticsLocationObject: R
				} = e, C = p.Z.get(m);
				if (null == C) {
					let e = (await (0, o.oJ)(f)).find(e => e.sku.id === m);
					l()(null != e, "Could not find store listing for sku"), e.sku.type === T.epS.SUBSCRIPTION_GROUP && await (0, I.rx)(f, e.id)
				}
				C = null != C ? C : p.Z.get(m), l()(null != C && C.applicationId === f, "SKU must belong to application"), C.type !== T.epS.SUBSCRIPTION || (0, u.a)([C.id]) || await (0, c.GZ)(C.id);
				let P = function(e) {
					let t = (0, s.jA)({
							applicationId: e
						}),
						n = null != t ? E.Z.getWindow(t) : void 0;
					return null == n || n.closed ? a.z1l : a.u1M
				}(f);
				if (C.type !== T.epS.SUBSCRIPTION) return new Promise((e, t) => {
					(0, _.Z)({
						applicationId: f,
						skuId: m,
						analyticsLocationObject: R,
						analyticsLocations: g,
						contextKey: P,
						onComplete: t => {
							var n;
							e(null != (n = null == t ? void 0 : t.entitlements) ? n : [])
						},
						onClose: e => {
							e || t()
						}
					})
				});
				await (t = f, n = m, i = A, S = R, N = g, (0, d.m)({
					applicationId: t,
					skuId: n,
					initialPlanId: i,
					analyticsLocationObject: S,
					analyticsLocations: N,
					renderHeader: (e, t, n) => (0, r.jsx)(O.t, {
						step: n,
						onClose: () => t(!1)
					})
				}))
			}
		},
		69499: function(e, t, n) {
			n.d(t, {
				E: () => I,
				Z: () => p
			}), n(388685), n(642613);
			var r = n(255367),
				i = n(73800),
				l = n(442837),
				a = n(481060),
				o = n(239091),
				c = n(585237),
				s = n(812206),
				u = n(55563),
				d = n(73346),
				_ = n(388032);

			function E(e, t, n) {
				return t in e ? Object.defineProperty(e, t, {
					value: n,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : e[t] = n, e
			}
			let I = {
				DropdownSizes: c.Z.DropdownSizes,
				Sizes: c.Z.Sizes,
				Colors: c.Z.Colors,
				Looks: c.Z.Looks
			};
			class O extends i.PureComponent {
				render() {
					var e, t;
					let n = this.props,
						{
							skus: i,
							children: l,
							applicationId: a,
							primarySKU: o,
							onSKUSelect: s
						} = n,
						u = function(e, t) {
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
						}(n, ["skus", "children", "applicationId", "primarySKU", "onSKUSelect"]);
					return (0, r.jsx)(c.Z, (e = function(e) {
						for (var t = 1; t < arguments.length; t++) {
							var n = null != arguments[t] ? arguments[t] : {},
								r = Object.keys(n);
							"function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
								return Object.getOwnPropertyDescriptor(n, e).enumerable
							}))), r.forEach(function(t) {
								E(e, t, n[t])
							})
						}
						return e
					}({
						onClick: this.handleClick,
						onDropdownClick: i.length > 0 ? this.handleContextMenu : null,
						onContextMenu: i.length > 0 ? this.handleContextMenu : void 0
					}, u), t = t = {
						children: l
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
				}
				constructor(...e) {
					super(...e), E(this, "renderContextMenu", () => {
						let {
							skus: e,
							onSKUSelect: t,
							onMenuSelect: n
						} = this.props;
						return (0, r.jsx)(a.v2r, {
							onSelect: n,
							navId: "test-skus",
							"aria-label": _.intl.string(_.t.ogxXGh),
							onClose: o.Zy,
							children: e.map(e => (0, r.jsx)(a.sNh, {
								id: "".concat(e.id),
								label: e.name,
								action: () => {
									null == t || t(e)
								}
							}, "".concat(e.id)))
						})
					}), E(this, "handleContextMenu", e => {
						e.stopPropagation(), o.vq(e, this.renderContextMenu)
					}), E(this, "handleClick", () => {
						let {
							onSKUSelect: e,
							primarySKU: t
						} = this.props;
						null != t && (null == e || e(t))
					})
				}
			}
			let p = l.ZP.connectStores([u.Z, s.Z], e => {
				var t;
				let {
					applicationId: n
				} = e, r = (0, d.uF)(n, s.Z, u.Z);
				return {
					skus: (null != (t = u.Z.getForApplication(n)) ? t : []).sort((e, t) => null != r && e.id === r.id ? -1 : null != r && t.id === r.id ? 1 : e.name >= t.name ? -1 : 1),
					primarySKU: r
				}
			})(O)
		},
		912193: function(e, t, n) {
			n.d(t, {
				b: () => d
			});
			var r = n(255367);
			n(73800);
			var i = n(481060),
				l = n(846027),
				a = n(468026),
				o = n(388032);
			let c = null;

			function s() {
				null !== c && (0, i.Mr3)(c), c = null
			}

			function u() {
				l.Z.setSilenceWarning(!1)
			}

			function d() {
				c = (0, i.h7j)(e => (0, r.jsx)(a.default, function(e) {
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
					title: o.intl.string(o.t["zQ1+Jy"]),
					body: o.intl.string(o.t.K1gWXl),
					secondaryConfirmText: o.intl.string(o.t.XAiAgI),
					onConfirmSecondary: u,
					onConfirm: s,
					confirmText: o.intl.string(o.t.BddRzc)
				}, e)))
			}
		},
		963374: function(e, t, n) {
			n.d(t, {
				nC: () => d
			}), n(388685), n(704826), n(35282), n(539854);
			var r = n(392711),
				i = n.n(r),
				l = n(697741);
			let a = new Set(["a", "an", "and", "are", "as", "at", "be", "but", "by", "for", "if", "in", "into", "is", "it", "no", "not", "of", "on", "or", "such", "that", "the", "their", "then", "there", "these", "they", "this", "to", "was", "will", "with"]);

			function o(e) {
				return e.replace(/('|\u2019|\uFF07)(s|S)$/, "")
			}

			function c(e) {
				return e.toLowerCase()
			}

			function s(e) {
				return a.has(e)
			}

			function u(e) {
				return 0 === e.length
			}

			function d(e) {
				let t = new Set(i()(e.split(/\W+/)).map(o).reject(u).map(c).reject(s).map(l.$).value());
				return e => (function e(t, n) {
					if (Array.isArray(t)) t.forEach(t => e(t, n));
					else if ("string" == typeof t.content && "codeBlock" !== t.type) {
						let e = [],
							r = "";
						t.content.split(/(\W+)/g).forEach(t => {
							var i;
							!u(i = c(o(i = t))) && !s(i) && n.has((0, l.$)(i)) ? (r.length > 0 && e.push({
								type: "text",
								content: r
							}), e.push({
								type: "highlight",
								content: t
							}), r = "") : r += t
						}), e.length > 0 && (r.length > 0 && e.push({
							type: "text",
							content: r
						}), "text" === t.type ? t.content = e : t.content = [{
							type: "text",
							content: e
						}])
					} else null != t.content && e(t.content, n);
					return t
				})(e, t)
			}
		},
		724757: function(e, t, n) {
			n.d(t, {
				Z: () => o
			});
			var r = n(73800),
				i = n(924826),
				l = n(442837),
				a = n(607070);

			function o(e, t, n) {
				let o = (0, l.e7)([a.Z], () => a.Z.keyboardModeEnabled),
					c = r.useCallback(e => {
						let n = document.querySelector(e),
							r = t.current;
						null != n && null != r && (n.focus(), r.scrollIntoViewNode({
							node: n,
							padding: 80
						}))
					}, [t]),
					s = r.useCallback(() => new Promise(e => {
						let n = t.current;
						if (null == n) return e();
						n.scrollTo({
							to: 0,
							callback: () => requestAnimationFrame(() => e())
						})
					}), [t]),
					u = r.useCallback(() => new Promise(e => {
						let n = t.current;
						if (null == n) return e();
						n.scrollTo({
							to: Number.MAX_SAFE_INTEGER,
							callback: () => requestAnimationFrame(() => e())
						})
					}), [t]);
				return (0, i.ZP)({
					id: e,
					isEnabled: o,
					setFocus: c,
					scrollToStart: s,
					scrollToEnd: u,
					orientation: null == n ? void 0 : n.orientation
				})
			}
		},
		361213: function(e, t, n) {
			n.d(t, {
				Z: () => i
			});
			var r = n(981631);

			function i(e, t) {
				let n, i = window.GLOBAL_ENV.CDN_HOST,
					l = window.GLOBAL_ENV.API_ENDPOINT;
				return null != i ? "https://".concat(i, "/app-assets/").concat(e, "/store/").concat(t, ".mp4") : "".concat(location.protocol).concat(l).concat(r.ANM.STORE_ASSET(e, t, "mp4"))
			}
		},
		778569: function(e, t, n) {
			n.d(t, {
				Z: () => a
			}), n(388685);
			var r = n(73800),
				i = n(81063);
			let l = ["embedded_cover", "embedded_background"];

			function a(e) {
				let {
					applicationId: t,
					size: n,
					names: a = l
				} = e, [o, c] = r.useState(null), [s, u] = r.useState(!0), d = (0, i.xF)(t, o, n), _ = r.useRef(a);
				return r.useEffect(() => {
					_.current = a
				}), r.useEffect(() => {
					let {
						current: e
					} = _;
					null != t && (0, i.Vh)(t).then(t => {
						for (let [n, r] of(u(!1), Object.entries(t)))
							if (null != r && "" !== r.id && e.includes(r.name)) return void c(r.id)
					})
				}, [t]), {
					url: d,
					state: s ? "loading" : null != d ? "fetched" : "not-found"
				}
			}
		},
		753194: function(e, t, n) {
			n.d(t, {
				Z: () => d
			}), n(388685);
			var r = n(255367);
			n(73800);
			var i = n(866442),
				l = n(442837),
				a = n(692547),
				o = n(481060),
				c = n(607070),
				s = n(297700),
				u = n(388032);

			function d(e) {
				let t, {
						color: n,
						size: d,
						forcedIconColor: _,
						className: E,
						iconClassName: I,
						tooltipText: O
					} = e,
					[p, T] = (0, l.Wu)([c.Z], () => [c.Z.desaturateUserColors, c.Z.saturation]),
					S = (0, o.dQu)(a.Z.unsafe_rawColors.PRIMARY_300).hex(),
					N = (0, i._i)(null != n ? n : S),
					f = (0, i.ho)(N, !1, p ? T : null);
				return t = null != _ ? _ : .3 > (0, i.Bd)(N) ? a.Z.unsafe_rawColors.PRIMARY_630.css : a.Z.unsafe_rawColors.WHITE_500.css, (0, r.jsx)(o.ua7, {
					text: null != O ? O : u.intl.string(u.t.T3PvV1),
					children: e => {
						var n, i;
						return (0, r.jsx)(s.Z, (n = function(e) {
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
							className: E,
							color: f,
							size: d,
							children: (0, r.jsx)(o.kmB, {
								size: "custom",
								color: t,
								height: d,
								width: d,
								className: I
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
					}
				})
			}
		},
		576855: function(e, t, n) {
			n.d(t, {
				Z: () => I
			});
			var r, i, l = n(255367),
				a = n(73800),
				o = n(120356),
				c = n.n(o),
				s = n(481060),
				u = n(388032),
				d = n(108921);
			let _ = {
				BLOCK: d.block,
				INLINE: d.inline
			};
			class E extends(i = a.PureComponent) {
				render() {
					let {
						children: e,
						className: t,
						textClassName: n,
						type: r = _.BLOCK,
						style: i
					} = this.props;
					return (0, l.jsxs)("div", {
						className: c()(t, r),
						style: i,
						children: [(0, l.jsxs)(s.Text, {
							variant: "text-sm/bold",
							tag: "div",
							color: "text-feedback-positive",
							className: d.pro,
							children: [u.intl.string(u.t["8tvIiI"]), ":"]
						}), (0, l.jsx)(s.Text, {
							className: c()(d.tip, n),
							variant: "text-sm/normal",
							children: e
						})]
					})
				}
			}(r = "Types") in E ? Object.defineProperty(E, r, {
				value: _,
				enumerable: !0,
				configurable: !0,
				writable: !0
			}) : E[r] = _;
			let I = E
		},
		333866: function(e, t, n) {
			n.d(t, {
				a3: () => o,
				eJ: () => c,
				kL: () => s,
				zJ: () => a
			});
			var r, i, l = n(388032),
				a = ((r = {})[r.NAME = 1] = "NAME", r[r.PRICE_ASC = 2] = "PRICE_ASC", r[r.PRICE_DESC = 3] = "PRICE_DESC", r[r.NEWEST_ARRIVALS = 4] = "NEWEST_ARRIVALS", r),
				o = ((i = {})[i.SUBS_FIRST = 1] = "SUBS_FIRST", i[i.PRODUCTS_FIRST = 2] = "PRODUCTS_FIRST", i);

			function c(e) {
				return ({
					4: l.intl.string(l.t["5tzSRE"]),
					2: l.intl.string(l.t["WWIr5+"]),
					3: l.intl.string(l.t.WlSInZ),
					1: l.intl.string(l.t.uOU7Pz)
				})[e]
			}
			let s = [4, 2, 3, 1]
		},
		629481: function(e, t, n) {
			n.d(t, {
				Hr: () => o,
				P4: () => s,
				TR: () => u,
				mz: () => l,
				tM: () => c,
				xv: () => a
			});
			var r, i, l = ((r = {}).GET_STARTED_CLICK = "get_started_click", r.DISMISS_FULL_PREVIEW = "dismiss_full_preview", r.DISMISS_TAB_PREVIEW = "dismiss_tab_preview", r.DISMISS_CHANNEL_ROW = "dismiss_channel_row", r),
				a = ((i = {}).CHANNEL_ROW_CONTEXT_MENU = "channel_row_context_menu", i.SHOP_HEADER_BUTTON = "shop_header_button", i);
			let o = "hasClickedGuildShopProductPreviewTab",
				c = "hasClickedGuildShopChannelRow",
				s = "https://discord.com/servershop",
				u = "1 GB"
		},
		847033: function(e, t, n) {
			n.d(t, {
				Z: () => P,
				m: () => C
			}), n(539854), n(388685);
			var r = n(255367),
				i = n(73800),
				l = n(512722),
				a = n.n(l),
				o = n(399606),
				c = n(704215),
				s = n(367907),
				u = n(266454),
				d = n(584825),
				_ = n(994592),
				E = n(160404),
				I = n(703656),
				O = n(984933),
				p = n(430824),
				T = n(626135),
				S = n(652515),
				N = n(550951),
				f = n(544978),
				m = n(333866),
				A = n(629481),
				g = n(981631);
			let R = i.createContext(void 0);

			function C() {
				let e = i.useContext(R);
				return a()(null != e, "must use useGuildShopDisplayContext within a GuildShopDisplayContextProvider"), e
			}

			function P(e) {
				var t;
				let {
					children: n,
					initialTab: l,
					guildId: a
				} = e, C = (0, o.e7)([p.Z], () => p.Z.getGuild(a)), P = (0, o.e7)([E.Z], () => E.Z.isViewingServerShop(a)), y = (0, N.g)(C, "guild_shop_page"), b = (0, S.RF)(a, "guild_shop_page"), D = (null == C ? void 0 : C.features.has(g.oNc.PRODUCTS_AVAILABLE_FOR_PURCHASE)) === !0, h = (0, _.mY)(null == C ? void 0 : C.id), U = null == (t = (0, d.YB)(a)) ? void 0 : t.server_shop_tab_order, M = [], v = f.y.GUILD_SHOP_FULL_PREVIEW;
				P || D && h ? (M.push(U === m.a3.PRODUCTS_FIRST ? f.y.GUILD_PRODUCTS : f.y.GUILD_ROLE_SUBSCRIPTIONS), M.push(U === m.a3.PRODUCTS_FIRST ? f.y.GUILD_ROLE_SUBSCRIPTIONS : f.y.GUILD_PRODUCTS), v = M[0]) : D && !h ? (M.push(f.y.GUILD_PRODUCTS), v = f.y.GUILD_PRODUCTS) : !D && h && (M.push(f.y.GUILD_ROLE_SUBSCRIPTIONS), v = f.y.GUILD_ROLE_SUBSCRIPTIONS, y && M.push(f.y.GUILD_PRODUCTS_PREVIEW)), l = null != l ? l : v;
				let [Z, L] = i.useState(l), j = y && !(h && b) || Z === f.y.GUILD_PRODUCTS_PREVIEW;
				return i.useEffect(() => {
					L(l)
				}, [l]), (0, r.jsx)(R.Provider, {
					value: {
						selectedTab: Z,
						setSelectedTab: L,
						categoryTabs: M,
						isPhantomPreview: j,
						handlePreviewDismiss: e => {
							(0, u.Q3)(c.z.SERVER_SHOP_PHANTOM_PREVIEW);
							let t = function(e) {
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
							}({}, (0, s.hH)(a));
							if (Z === f.y.GUILD_PRODUCTS_PREVIEW) e.stopPropagation(), L(f.y.GUILD_ROLE_SUBSCRIPTIONS), t.action_taken = A.mz.DISMISS_TAB_PREVIEW;
							else {
								var n;
								(0, I.dL)(g.Z5c.CHANNEL(a, null == (n = O.ZP.getDefaultChannel(a)) ? void 0 : n.id)), t.action_taken = A.mz.DISMISS_FULL_PREVIEW
							}
							T.default.track(g.rMx.GUILD_SHOP_PREVIEW_CLICK, t)
						}
					},
					children: n
				})
			}
		},
		544978: function(e, t, n) {
			n.d(t, {
				y: () => i
			});
			var r, i = ((r = {}).GUILD_PRODUCTS = "guild_products", r.GUILD_ROLE_SUBSCRIPTIONS = "guild_role_subscriptions", r.GUILD_PRODUCTS_PREVIEW = "guild_products_preview", r.GUILD_SHOP_FULL_PREVIEW = "guild_shop_full_preview", r)
		},
		893182: function(e, t, n) {
			n.d(t, {
				Z: () => l
			});
			var r = n(255367);
			n(73800);
			var i = n(952265);

			function l(e) {
				(0, i.ZD)(async () => {
					let {
						default: t
					} = await n.e("86060").then(n.bind(n, 816607));
					return n => (0, r.jsx)(t, function(e) {
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
					}({}, e, n))
				})
			}
		},
		841762: function(e, t, n) {
			n.d(t, {
				Z: () => _
			}), n(388685);
			var r = n(255367),
				i = n(73800),
				l = n(120356),
				a = n.n(l),
				o = n(481060),
				c = n(900609);

			function s(e) {
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

			function d(e) {
				var t, n, {
						alt: l
					} = e,
					a = u(e, ["alt"]);
				let [d, _] = i.useState(!0);
				return (0, r.jsxs)(r.Fragment, {
					children: [d && (0, r.jsx)(o.$jN, {
						type: o.$jN.Type.LOW_MOTION,
						className: c.loader
					}), (0, r.jsx)("img", (t = s({}, a), n = n = {
						alt: l,
						onLoad: () => _(!1)
					}, Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : (function(e, t) {
						var n = Object.keys(e);
						if (Object.getOwnPropertySymbols) {
							var r = Object.getOwnPropertySymbols(e);
							n.push.apply(n, r)
						}
						return n
					})(Object(n)).forEach(function(e) {
						Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
					}), t))]
				})
			}

			function _(e) {
				var {
					src: t,
					backgroundSrc: n,
					alt: i,
					aspectRatio: l,
					className: o,
					imageChildClassName: _
				} = e, E = u(e, ["src", "backgroundSrc", "alt", "aspectRatio", "className", "imageChildClassName"]);
				return (0, r.jsxs)("div", {
					className: a()(c.container, o),
					children: [(0, r.jsx)("img", {
						src: n,
						alt: i,
						className: c.backgroundImage
					}), (0, r.jsx)("div", {
						className: c.backgroundImageFilter
					}), (0, r.jsx)("div", {
						style: {
							aspectRatio: l
						},
						className: c.imageContainer,
						children: (0, r.jsx)(d, s({
							src: t,
							alt: i,
							className: a()(c.image, _)
						}, E))
					})]
				})
			}
		},
		696014: function(e, t, n) {
			n.d(t, {
				s: () => c
			}), n(388685);
			var r = n(255367),
				i = n(73800),
				l = n(120356),
				a = n.n(l),
				o = n(366736);

			function c() {
				let [e, t] = i.useState(!1);
				return {
					isTruncated: e,
					ExpandableTextContainer: i.memo(function(e) {
						let {
							showAll: n = !1,
							className: i,
							children: l,
							lineClamp: c = 2
						} = e;
						return (0, r.jsx)("div", {
							ref: e => {
								null != e && t(e.scrollHeight - e.clientHeight > 1)
							},
							className: a()(o.lineClamp, i),
							style: n ? void 0 : {
								lineClamp: c,
								WebkitLineClamp: c
							},
							children: l
						})
					})
				}
			}
		},
		674525: function(e, t, n) {
			n.d(t, {
				Z: () => u
			});
			var r, i, l, a = n(442837),
				o = n(570140);
			let c = [];
			class s extends(l = a.ZP.Store) {
				getEligibleGuildsForNagActivate() {
					return c
				}
			}
			i = "CreatorMonetizationMarketingStore", (r = "displayName") in s ? Object.defineProperty(s, r, {
				value: i,
				enumerable: !0,
				configurable: !0,
				writable: !0
			}) : s[r] = i;
			let u = new s(o.Z, {
				CREATOR_MONETIZATION_NAG_ACTIVATE_ELIGIBLITY_FETCH_SUCCESS: function(e) {
					let {
						eligibleGuilds: t
					} = e;
					c = t
				}
			})
		},
		749277: function(e, t, n) {
			n.d(t, {
				A: () => h
			});
			var r = n(255367);
			n(73800);
			var i = n(442837),
				l = n(704215),
				a = n(481060),
				o = n(232567),
				c = n(230711),
				s = n(726542),
				u = n(100527),
				d = n(231757),
				_ = n(674525),
				E = n(963249),
				I = n(303172),
				O = n(463230),
				p = n(246965),
				T = n(703656),
				S = n(914010),
				N = n(594174),
				f = n(933429),
				m = n(395361),
				A = n(626135),
				g = n(243778),
				R = n(921944),
				C = n(981631),
				P = n(801461),
				y = n(474936),
				b = n(388032),
				D = n(131715);
			let h = e => {
				let {
					dismissibleContent: t,
					noticeType: h
				} = e, U = (0, i.e7)([f.ZP], () => f.ZP.getNotice()), M = (0, i.e7)([N.default], () => N.default.getCurrentUser()), v = (0, i.e7)([S.Z], () => S.Z.getGuildId());
				return (0, r.jsx)(g.ZP, {
					contentTypes: [t],
					groupName: R.R.NOTICE_BAR,
					bypassAutoDismiss: !0,
					children: e => {
						let {
							visibleContent: t,
							markAsDismissed: i
						} = e;
						switch (t) {
							case l.z.NAGBAR_NOTICE_DOWNLOAD:
								return (0, r.jsxs)(a.qXd, {
									color: a.DM8.DEFAULT,
									children: [(0, r.jsx)(a.RyX, {
										onClick: () => i(R.L.UNKNOWN),
										noticeType: h
									}), b.intl.string(b.t["+xn1o6"]), (0, r.jsx)("i", {
										className: D.iconApple
									}), (0, r.jsx)("i", {
										className: D.iconAndroid
									}), (0, r.jsx)("i", {
										className: D.iconWindows
									}), (0, r.jsx)(a.NoS, {
										noticeType: h,
										onClick: () => {
											(0, a.ZDy)(async () => {
												let {
													default: e
												} = await Promise.resolve().then(n.bind(n, 431583));
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
													source: "Top Bar Nag"
												}, t))
											})
										},
										children: b.intl.string(b.t["1WjMbG"])
									})]
								});
							case l.z.NAGBAR_NOTICE_CONNECT_SPOTIFY:
								return (0, r.jsxs)(a.qXd, {
									color: a.DM8.SPOTIFY,
									children: [(0, r.jsx)(a.RyX, {
										onClick: () => i(R.L.UNKNOWN),
										noticeType: h
									}), (0, r.jsx)(m.Z, {
										className: D.platformIcon
									}), b.intl.string(b.t["5NUVHB"]), (0, r.jsx)(a.NoS, {
										onClick: () => (0, d.Z)({
											platformType: C.ABu.SPOTIFY,
											location: "Notice Bar"
										}),
										noticeType: h,
										children: b.intl.string(b.t.S0W8Z2)
									})]
								});
							case l.z.NAGBAR_NOTICE_CONNECT_PLAYSTATION:
								return (0, r.jsxs)(a.qXd, {
									color: a.DM8.PLAYSTATION,
									children: [(0, r.jsx)(a.RyX, {
										onClick: () => i(R.L.UNKNOWN)
									}), (0, r.jsx)("img", {
										alt: "",
										className: D.platformIcon,
										src: s.Z.get(C.ABu.PLAYSTATION).icon.whiteSVG
									}), b.intl.string(b.t.WHWgoa), (0, r.jsx)(a.EyT, {
										onClick: () => (0, d.Z)({
											platformType: C.ABu.PLAYSTATION,
											location: "Notice Bar"
										}),
										children: b.intl.string(b.t.S0W8Z2)
									})]
								});
							case l.z.NAGBAR_NOTICE_MFA_SMS_BACKUP:
								return (0, r.jsxs)(a.qXd, {
									color: a.DM8.DEFAULT,
									children: [(0, r.jsx)(a.RyX, {
										onClick: () => i(R.L.UNKNOWN),
										noticeType: h
									}), b.intl.string(b.t.B2hnhY), (0, r.jsx)(a.NoS, {
										onClick: () => c.Z.open(C.oAB.ACCOUNT),
										noticeType: h,
										children: b.intl.string(b.t["50KYxs"])
									})]
								});
							case l.z.NAGBAR_NOTICE_PREMIUM_PROMO:
								return (0, r.jsxs)(a.qXd, {
									color: a.DM8.PREMIUM_TIER_2,
									children: [(0, r.jsx)("span", {
										className: D.premiumLogo
									}), (0, r.jsx)("span", {
										className: D.premiumText,
										children: b.intl.string(b.t["+urf7+"])
									}), (0, r.jsx)(a.NoS, {
										className: D.premiumAction,
										noticeType: h,
										onClick: () => {
											A.default.track(C.rMx.PREMIUM_PROMOTION_OPENED, {
												location_section: C.jXE.NOTIFICATION_BAR,
												location_object: C.qAy.BUTTON_CTA
											}), c.Z.open(C.oAB.PREMIUM)
										},
										children: b.intl.string(b.t["8JC5e3"])
									}), (0, r.jsx)(a.RyX, {
										onClick: () => {
											i(R.L.UNKNOWN), (0, o.mB)(C.xW$.PREMIUM_PROMO_DISMISSED, !0)
										},
										noticeType: h
									})]
								});
							case l.z.NAGBAR_NOTICE_PREMIUM_TIER_TWO_TRIAL_ENDING:
								return (0, r.jsx)(p.Z, {
									dismissCurrentNotice: () => i(R.L.UNKNOWN),
									subscriptionTier: y.Si.TIER_2
								});
							case l.z.NAGBAR_NOTICE_PREMIUM_TIER_0_TRIAL_ENDING:
								return (0, r.jsx)(p.Z, {
									dismissCurrentNotice: () => i(R.L.UNKNOWN),
									subscriptionTier: y.Si.TIER_0
								});
							case l.z.NAGBAR_NOTICE_PREMIUM_REACTIVATE:
								return (0, r.jsxs)(a.qXd, {
									color: a.DM8.PREMIUM_TIER_2,
									children: [(0, r.jsx)(a.RyX, {
										noticeType: h,
										onClick: () => i(R.L.UNKNOWN)
									}), b.intl.string(b.t["0KFB2N"]), (0, r.jsx)(a.NoS, {
										noticeType: h,
										onClick: () => {
											i(R.L.UNKNOWN), c.Z.open(C.oAB.PREMIUM)
										},
										children: b.intl.string(b.t.pyYSiI)
									})]
								});
							case l.z.NAGBAR_NOTICE_LOCALIZED_PRICING:
								return (0, r.jsx)(O.Z, {
									notice: U,
									noticeType: h,
									dismissCurrentNotice: () => i(R.L.UNKNOWN)
								});
							case l.z.NAGBAR_BOUNCED_EMAIL_NOTICE:
								return (0, r.jsxs)(a.qXd, {
									color: a.DM8.DANGER,
									children: [(0, r.jsx)(a.RyX, {
										onClick: () => i(R.L.UNKNOWN),
										noticeType: h
									}), b.intl.string(b.t["7490vb"]), (0, r.jsx)(a.NoS, {
										noticeType: h,
										onClick: () => {
											(0, T.uL)(C.Z5c.SETTINGS("account"))
										},
										children: b.intl.string(b.t.Vm8akJ)
									})]
								});
							case l.z.NAGBAR_ACTIVATE_SERVER_SUBSCRIPTION:
								let S = _.Z.getEligibleGuildsForNagActivate();
								return (0, r.jsxs)(a.qXd, {
									color: a.DM8.DEFAULT,
									children: [(0, r.jsx)(a.RyX, {
										onClick: () => i(R.L.UNKNOWN),
										noticeType: h
									}), b.intl.string(b.t.pJ4hJC), (0, r.jsx)(a.NoS, {
										noticeType: h,
										onClick: () => {
											i(R.L.PRIMARY), (0, T.uL)(1 === S.length ? C.Z5c.GUILD_SETTINGS(S[0], "role-subscriptions") : C.Z5c.PICK_GUILD_SETTINGS("role-subscriptions", void 0, "server-subscriptions-finish-setting-up"))
										},
										children: b.intl.string(b.t["74s74O"])
									})]
								});
							case l.z.NAGBAR_NOTICE_POMELO:
								return (0, r.jsxs)(a.qXd, {
									color: a.DM8.WARNING,
									children: [(0, r.jsx)(a.RyX, {
										onClick: () => i(R.L.UNKNOWN),
										noticeType: h
									}), b.intl.format(b.t.pdYZys, {}), (0, r.jsx)(a.NoS, {
										onClick: () => (0, I.Z)(P.Kq.NOTICE),
										noticeType: h,
										children: b.intl.string(b.t.LhlgY2)
									})]
								});
							case l.z.CHECKOUT_RECOVERY_NAGBAR:
								return (0, r.jsxs)(a.qXd, {
									color: a.DM8.PREMIUM_TIER_2,
									children: [(0, r.jsx)(a.RyX, {
										onClick: () => i(R.L.UNKNOWN),
										noticeType: h
									}), b.intl.string(b.t["O9GI+v"]), (0, r.jsx)(a.NoS, {
										onClick: () => {
											(0, E.Z)({
												subscriptionTier: y.Si.TIER_2,
												analyticsLocations: [u.Z.CHECKOUT_RECOVERY_NAGBAR],
												analyticsLocation: C.Sbl.CHECKOUT_RECOVERY_NAGBAR,
												onClose: () => i(R.L.UNKNOWN)
											})
										},
										noticeType: h,
										children: b.intl.string(b.t.Zi69Dw)
									})]
								});
							case l.z.REPORT_TO_MOD_SURVEY_NOTICE:
								return (0, r.jsxs)(a.qXd, {
									color: a.DM8.BRAND,
									children: [(0, r.jsx)(a.RyX, {
										onClick: () => i(R.L.USER_DISMISS),
										noticeType: C.kVF.REPORT_TO_MOD_SURVEY
									}), b.intl.string(b.t["Aa+l7e"]), (0, r.jsx)(a.NoS, {
										onClick: () => {
											window.open("https://discord.sjc1.qualtrics.com/jfe/form/SV_5uP0NWTpoXsYSUu?user_id=".concat(null == M ? void 0 : M.id, "&guild_id=").concat(v), "_blank"), i(R.L.TAKE_ACTION)
										},
										noticeType: C.kVF.REPORT_TO_MOD_SURVEY,
										children: b.intl.string(b.t["iT+wQ0"])
									})]
								})
						}
					}
				})
			}
		},
		196068: function(e, t, n) {
			n.d(t, {
				c: () => C
			});
			var r = n(255367),
				i = n(73800),
				l = n(793030),
				a = n(442837),
				o = n(704215),
				c = n(481060),
				s = n(230711),
				u = n(2052),
				d = n(906732),
				_ = n(963249),
				E = n(163684),
				I = n(518638),
				O = n(748770),
				p = n(594174),
				T = n(626135),
				S = n(74538),
				N = n(243778),
				f = n(921944),
				m = n(981631),
				A = n(474936),
				g = n(388032),
				R = n(134772);
			let C = e => {
				let {
					dismissibleContent: t
				} = e, n = (0, I.a0)(), C = (0, a.e7)([p.default], () => S.ZP.isPremiumExactly(p.default.getCurrentUser(), A.p9.TIER_2)), {
					enabled: P,
					getNitroCTA: y
				} = E.g.useExperiment({
					location: "OutboundPromotionNotice"
				}, {
					autoTrackExposure: !1,
					disable: C
				}), {
					location: b
				} = (0, u.O)(), {
					analyticsLocations: D
				} = (0, d.ZP)(), h = i.useCallback(() => {
					var e, t;
					(0, _.Z)({
						subscriptionTier: S.ZP.getSkuIdForPremiumType(A.p9.TIER_2),
						analyticsLocations: D,
						analyticsObject: (e = function(e) {
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
						}({}, b), t = t = {
							object: m.qAy.BUTTON_CTA,
							objectType: m.Qqv.TIER_2
						}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : (function(e, t) {
							var n = Object.keys(e);
							if (Object.getOwnPropertySymbols) {
								var r = Object.getOwnPropertySymbols(e);
								n.push.apply(n, r)
							}
							return n
						})(Object(t)).forEach(function(n) {
							Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
						}), e)
					})
				}, [D, b]), U = i.useCallback(() => {
					s.Z.open(m.oAB.INVENTORY), O.ZP.dismissOutboundPromotionNotice()
				}, []), M = i.useCallback(() => {
					T.default.track(m.rMx.OUTBOUND_PROMOTION_NOTICE_CLICKED), y ? h() : U()
				}, [y, h, U]);
				if (null == n) return null;
				let v = e => (0, r.jsxs)(c.qXd, {
					color: c.DM8.PREMIUM_TIER_2,
					children: [(0, r.jsx)(c.RyX, {
						noticeType: m.kVF.OUTBOUND_PROMOTION,
						onClick: () => {
							O.ZP.dismissOutboundPromotionNotice(), null !== e && e(f.L.USER_DISMISS)
						}
					}), (0, r.jsx)(c.SrA, {
						size: "md",
						color: "currentColor",
						className: R.premiumIcon
					}), P ? y ? (0, r.jsxs)(l.xv, {
						variant: "text-sm/normal",
						className: R.text,
						children: [g.intl.string(g.t["5JMiOj"]), " ", g.intl.format(g.t.fjSvsL, {
							onClick: U
						})]
					}) : g.intl.string(g.t["5JMiOj"]) : g.intl.string(g.t["Pzh+Gx"]), (0, r.jsx)(c.NoS, {
						noticeType: m.kVF.OUTBOUND_PROMOTION,
						onClick: () => {
							M(), null !== e && e(f.L.TAKE_ACTION)
						},
						children: y ? g.intl.string(g.t.pj0XBA) : g.intl.string(g.t.jVcuVV)
					})]
				});
				return (0, r.jsx)(N.O1, {
					contentType: t,
					newSnowflakeId: n,
					timeRecurringConfig: {
						cooldownDurationMs: 0
					},
					groupName: f.R.NOTICE_BAR,
					bypassAutoDismiss: !0,
					children: e => {
						let {
							visibleContent: t,
							markAsDismissed: n
						} = e;
						if (t === o.z.THIRD_PARTY_OUTBOUND_PROMO_NAGBAR) return v(n)
					}
				})
			}
		},
		131130: function(e, t, n) {
			n.d(t, {
				q: () => E
			}), n(953529);
			var r = n(255367);
			n(73800);
			var i = n(704215),
				l = n(481060),
				a = n(906732),
				o = n(963249),
				c = n(286961),
				s = n(644916),
				u = n(243778),
				d = n(921944),
				_ = n(131715);
			let E = e => {
				let {
					dismissibleContent: t,
					noticeType: n
				} = e, {
					analyticsLocations: E
				} = (0, a.ZP)(), I = (0, c.Z)();
				return (0, r.jsx)(u.Xf, {
					contentType: t,
					latestVersion: (0, s.t)(t),
					groupName: d.R.NOTICE_BAR,
					bypassAutoDismiss: !0,
					children: e => {
						let {
							visibleContent: t,
							markAsDismissed: a
						} = e;
						if (t === i.z.GIFTING_PROMOTION_REMINDER) {
							let e = null == I ? void 0 : I.reminderNagbar;
							return (0, r.jsxs)(l.qXd, {
								color: l.DM8.PREMIUM_TIER_2,
								children: [(0, r.jsx)(l.RyX, {
									onClick: () => a(d.L.USER_DISMISS),
									noticeType: n
								}), (0, r.jsx)(l.OgN, {
									size: "custom",
									width: 20,
									height: 20,
									color: "currentColor",
									className: _.giftIcon
								}), null == e ? void 0 : e.description(), (0, r.jsx)(l.NoS, {
									onClick: () => {
										(0, o.Z)({
											isGift: !0,
											initialPlanId: null,
											analyticsLocations: E,
											analyticsLocation: null == e ? void 0 : e.analyticsLocation,
											analyticsObject: {
												page: null == e ? void 0 : e.analyticsPage
											}
										})
									},
									noticeType: n,
									children: null == e ? void 0 : e.cta()
								})]
							})
						}
					}
				})
			}
		},
		749681: function(e, t, n) {
			n.r(t), n.d(t, {
				transitionToGlobalDiscovery: () => function e(t) {
					var n, O, p;
					let T = t.tab;
					switch (u.Z.setState({
							selectedTab: T
						}), T) {
						case d.GlobalDiscoveryTab.SERVERS:
							let S = t.selectedServersTab;
							return null != S ? l.Z.setState({
								selectedTab: S,
								entrypoint: null != (n = t.entrypoint) ? n : I.Qq.UNKNOWN
							}) : l.Z.setState({
								entrypoint: null != (O = t.entrypoint) ? O : I.Qq.UNKNOWN
							}), (0, o.uL)(_.Z5c.GLOBAL_DISCOVERY_SERVERS, t.extra);
						case d.GlobalDiscoveryTab.APPS:
							if (null != t.newSessionState) {
								let n = (0, i.PM)(),
									{
										guildId: l,
										entrypoint: a
									} = t.newSessionState;
								if (r.z8.setState({
										sessionId: n,
										guildId: null != l ? l : null,
										entrypoint: a,
										trackedOpenedFromExternalEntrypoint: !1
									}), s.default.track(_.rMx.APP_DIRECTORY_OPENED, {
										source: null == a ? void 0 : a.name,
										session_id: n,
										guild_id: l,
										user_id: null == (p = c.default.getCurrentUser()) ? void 0 : p.id
									}), t.newSessionState.restorePreviousView) return e(function() {
									let {
										lastItem: e
									} = r.aQ.getState();
									if (null != e) switch (e.type) {
										case r.m_.APPLICATION:
											return {
												tab: d.GlobalDiscoveryTab.APPS, applicationId: e.applicationId, section: e.section
											};
										case r.m_.CATEGORY:
											return {
												tab: d.GlobalDiscoveryTab.APPS, categoryId: Number(e.categoryId)
											};
										case r.m_.SEARCH:
											var t;
											return {
												tab: d.GlobalDiscoveryTab.APPS, query: null != (t = e.query) ? t : "", page: e.page, categoryId: null != e.categoryId ? Number(e.categoryId) : void 0
											}
									}
									return {
										tab: d.GlobalDiscoveryTab.APPS
									}
								}())
							}
							if (null != t.applicationId) {
								if (t.section === E.GlobalDiscoveryAppsSections.STORE)
									if (null != t.skuId) return (0, o.uL)(_.Z5c.GLOBAL_DISCOVERY_APPS_PROFILE_STORE_SKU(t.applicationId, t.skuId));
									else return (0, o.uL)(_.Z5c.GLOBAL_DISCOVERY_APPS_PROFILE_SECTION(t.applicationId, E.GlobalDiscoveryAppsSections.STORE));
								return (0, o.uL)(_.Z5c.GLOBAL_DISCOVERY_APPS_PROFILE(t.applicationId))
							}
							if (null != t.query) {
								let e = new URLSearchParams;
								return "" !== t.query && e.set("q", t.query), null != t.categoryId && e.set("category_id", t.categoryId.toString()), null != t.page && e.set("page", t.page.toString()), (0, o.uL)(_.Z5c.GLOBAL_DISCOVERY_APPS_SEARCH, {
									search: e.toString()
								})
							}
							if (null != t.categoryId) return (0, o.uL)(_.Z5c.GLOBAL_DISCOVERY_APPS_CATEGORY(t.categoryId.toString()));
							else return (0, o.uL)(_.Z5c.GLOBAL_DISCOVERY_APPS);
						case d.GlobalDiscoveryTab.QUESTS:
							return (0, a.navigateToQuestHome)({
								fromContent: t.questContent,
								questId: t.questId
							});
						default:
							throw Error("[transitionToGlobalDiscovery] Unhandled tab type: ".concat(T))
					}
				}
			}), n(65234), n(111804), n(490233), n(97749), n(388685), n(415506);
			var r = n(258971),
				i = n(726115),
				l = n(859921),
				a = n(341907),
				o = n(703656),
				c = n(594174),
				s = n(626135),
				u = n(836768),
				d = n(49898),
				_ = n(981631),
				E = n(979007),
				I = n(128449)
		},
		859921: function(e, t, n) {
			n.d(t, {
				Z: () => l
			});
			var r = n(972959);
			let i = Object.freeze({
					selectedTab: null,
					isSearchVisible: !1,
					entrypoint: null,
					searchBarState: n(49898).GlobalDiscoverySearchBarState.DEFAULT
				}),
				l = (0, r.H)(() => i)
		},
		528011: function(e, t, n) {
			n.d(t, {
				g: () => p,
				mI: () => O
			}), n(388685);
			var r = n(149765),
				i = n(399606),
				l = n(581883),
				a = n(430824),
				o = n(496675),
				c = n(914010),
				s = n(594174),
				u = n(700785),
				d = n(709054),
				_ = n(533244),
				E = n(487419),
				I = n(676770);

			function O(e) {
				let t = (0, i.e7)([a.Z, o.Z], () => {
						let t = a.Z.getGuild(e);
						if (null == t) return !1;
						let n = o.Z.getGuildPermissions(t);
						return null != n && r.Db(n, I.cv)
					}),
					n = (0, i.e7)([E.Z], () => null != e ? E.Z.getGuildIncident(e) : null),
					l = null != n && (0, _.ur)(n);
				return {
					shouldShowIncidentActions: t,
					incidentData: n,
					isUnderLockdown: l
				}
			}

			function p() {
				var e;
				let t = function(e) {
						let t = s.default.getCurrentUser(),
							n = E.Z.getIncidentsByGuild();
						for (let i of d.default.keys(n).map(e => a.Z.getGuild(e))) {
							if (null == i) continue;
							let l = n[i.id];
							if (!(null == l || !(0, _.i9)(l) && !(0, _.ur)(l) || (0, _.ur)(l) && i.id !== e) && r.Db(u.uB({
									user: t,
									context: i,
									checkElevated: !1
								}), I.cv)) return i.id
						}
						return null
					}(c.Z.getGuildId()),
					n = null != (e = l.Z.getGuildsProto()) ? e : {},
					i = null != t ? n[t] : null,
					o = null != i && i.disableRaidAlertNag;
				return {
					show: null != t && !o,
					guildId: t
				}
			}
			n(981631)
		},
		506357: function(e, t, n) {
			n.d(t, {
				Z: () => m
			});
			var r = n(255367),
				i = n(73800),
				l = n(442837),
				a = n(481060),
				o = n(565138),
				c = n(241559),
				s = n(527379),
				u = n(430824),
				d = n(944486),
				_ = n(914010),
				E = n(626135),
				I = n(528011),
				O = n(666657),
				p = n(533244),
				T = n(981631),
				S = n(176505),
				N = n(388032),
				f = n(302654);

			function m(e) {
				var t, m;
				let {
					onDismiss: A
				} = e, g = (0, l.e7)([_.Z], () => _.Z.getGuildId()), R = (0, l.e7)([d.Z], () => null != g ? d.Z.getChannelId(g) : null, [g]), C = null != g ? g : null, P = (0, l.e7)([u.Z], () => null != C ? u.Z.getGuild(C) : null, [C]), {
					shouldShowIncidentActions: y,
					incidentData: b,
					isUnderLockdown: D
				} = (0, I.mI)(C), h = (0, c.n2)(null != (t = null == P ? void 0 : P.id) ? t : T.lds), U = i.useCallback(() => null != P && (0, s._X)(P.id), [P]);
				if (null == P || null == b || !y) return null;
				let M = e => {
						if (e && h && R !== S.oC.MEMBER_SAFETY && U()) return void E.default.track(T.rMx.APP_NOTICE_PRIMARY_CTA_OPENED, {
							notice_type: T.kVF.GUILD_RAID_NOTIFICATION,
							guild_id: P.id
						});
						(0, a.ZDy)(async () => {
							let e = {
									source: O.Zu.NAGBAR,
									alertType: (0, p.T1)(b)
								},
								{
									default: t
								} = await n.e("58175").then(n.bind(n, 664452));
							return n => {
								var i, l;
								return (0, r.jsx)(t, (i = function(e) {
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
								}({}, n), l = l = {
									guildId: P.id,
									analyticsData: e
								}, Object.getOwnPropertyDescriptors ? Object.defineProperties(i, Object.getOwnPropertyDescriptors(l)) : (function(e, t) {
									var n = Object.keys(e);
									if (Object.getOwnPropertySymbols) {
										var r = Object.getOwnPropertySymbols(e);
										n.push.apply(n, r)
									}
									return n
								})(Object(l)).forEach(function(e) {
									Object.defineProperty(i, e, Object.getOwnPropertyDescriptor(l, e))
								}), i))
							}
						})
					},
					v = (0, r.jsx)(o.Z, {
						className: f.guildIcon,
						guild: P,
						size: o.Z.Sizes.MINI
					}),
					Z = (0, p.OY)(b, P.name);
				if (null != (null != (m = b.dmsDisabledUntil) ? m : b.invitesDisabledUntil) && D) return (0, r.jsxs)(a.qXd, {
					className: f.notice,
					color: a.DM8.NEUTRAL,
					children: [(0, r.jsx)(a.RyX, {
						onClick: A,
						noticeType: T.kVF.GUILD_RAID_NOTIFICATION
					}), v, Z, (0, r.jsx)(a.EyT, {
						className: f.actionButton,
						onClick: () => M(!1),
						children: (0, r.jsxs)("div", {
							className: f.actionButtonInner,
							children: [(0, r.jsx)(a.mBM, {
								size: "xs",
								color: "currentColor"
							}), (0, r.jsx)("span", {
								children: N.intl.string(N.t["c+7oa2"])
							})]
						})
					})]
				});
				let L = (0, p.CG)(b) ? N.intl.formatToPlainString(N.t.tZTx2N, {
						guildName: P.name
					}) : (0, p.kk)(b) ? N.intl.formatToPlainString(N.t["1bSmxs"], {
						guildName: P.name
					}) : N.intl.formatToPlainString(N.t.W87xDA, {
						guildName: P.name
					}),
					j = h && R === S.oC.MEMBER_SAFETY;
				return (0, r.jsxs)(a.qXd, {
					className: f.notice,
					color: a.DM8.WARNING,
					children: [(0, r.jsx)(a.RyX, {
						onClick: A,
						noticeType: T.kVF.GUILD_RAID_NOTIFICATION
					}), v, L, !j && (0, r.jsx)(a.EyT, {
						className: f.actionButton,
						onClick: () => M(!0),
						children: (0, r.jsx)("div", {
							className: f.actionButtonInner,
							children: (0, r.jsx)("span", {
								children: N.intl.string(N.t.zDJDho)
							})
						})
					})]
				})
			}
		},
		295474: function(e, t, n) {
			n.d(t, {
				Ux: () => T,
				gS: () => S,
				ww: () => N
			}), n(997841);
			var r = n(73800),
				i = n(399606),
				l = n(230711),
				a = n(18438),
				o = n(314897),
				c = n(271383),
				s = n(430824),
				u = n(496675),
				d = n(914010),
				_ = n(715903),
				E = n(981631),
				I = n(372897),
				O = n(526761),
				p = n(388032);

			function T(e) {
				return (0, i.e7)([o.default, c.ZP], () => {
					if (null == e) return !1;
					let t = o.default.getId();
					return (0, _.EY)(c.ZP.getMember(e, t))
				}, [e])
			}

			function S(e) {
				return (0, i.cj)([o.default, c.ZP, d.Z, s.Z], () => {
					let t = {
							nick: void 0,
							bio: void 0
						},
						n = d.Z.getGuildId(),
						r = null != e ? e : n,
						i = s.Z.getGuild(r);
					if (null == i || null == r) return t;
					let l = o.default.getId(),
						a = c.ZP.getMember(r, l),
						u = (0, _.Ow)(null == a ? void 0 : a.flags);
					if (0 === u.size) return t;
					if (u.has(I.q.AUTOMOD_QUARANTINED_USERNAME_OR_GUILD_NICKNAME))
						if (null == e) {
							var E;
							t.nick = [p.intl.formatToPlainString(p.t.WBUh3N, {
								guildName: null != (E = i.name) ? E : ""
							})]
						} else t.nick = [p.intl.string(p.t.EPZCrK)];
					return u.has(I.q.AUTOMOD_QUARANTINED_BIO) && (t.bio = [p.intl.string(p.t.dZh1v7)]), t
				}, [e])
			}

			function N(e) {
				let {
					guildId: t,
					scrollPosition: n,
					analyticsLocation: o,
					analyticsLocations: c,
					openWithoutBackstack: d
				} = e, _ = (0, i.e7)([s.Z], () => s.Z.getGuild(t), [t]), I = (0, i.e7)([u.Z], () => null != _ && u.Z.can(E.Plq.CHANGE_NICKNAME, _), [_]);
				return [r.useCallback(() => {
					if (null == _) return;
					let e = E.oAB.PROFILE_CUSTOMIZATION,
						t = O.NB.GUILD;
					I ? (0, a.Fq)(_) : t = O.NB.USER_PROFILE, l.Z.open(e, t, {
						scrollPosition: n,
						analyticsLocation: o,
						analyticsLocations: c,
						openWithoutBackstack: d
					})
				}, [I, n, o, c, d, _]), I]
			}
		},
		226192: function(e, t, n) {
			n.d(t, {
				UV: () => _,
				_s: () => u,
				kW: () => d,
				km: () => s
			});
			var r = n(255367);
			n(73800);
			var i = n(481060),
				l = n(273504),
				a = n(388032);

			function o(e) {
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

			function c(e, t) {
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

			function s(e) {
				return {
					[l.jj.BLOCK_MESSAGE]: (e, t) => new Promise(e => {
						(0, i.ZDy)(async () => {
							let {
								default: i
							} = await n.e("94005").then(n.bind(n, 144462));
							return n => {
								var l;
								return (0, r.jsx)(i, c(o({
									initialCustomMessage: null != (l = t.metadata.customMessage) ? l : "",
									onSubmit: r => {
										t.metadata.customMessage = r, e(t), n.onClose()
									}
								}, n), {
									onClose: () => (e(null), n.onClose())
								}))
							}
						})
					}),
					[l.jj.FLAG_TO_CHANNEL]: (t, a) => new Promise(s => {
						(0, i.ZDy)(async () => {
							let {
								default: i
							} = await n.e("74543").then(n.bind(n, 643611)), u = t.actions.find(e => e.type === l.jj.FLAG_TO_CHANNEL);
							return n => (0, r.jsx)(i, c(o({
								action: a,
								isEdit: null != u,
								triggerType: t.triggerType,
								guildId: e,
								onEditChannel: e => {
									a.metadata.channelId = e, t.exemptChannels.add(e), s(a), n.onClose()
								}
							}, n), {
								onClose: () => (s(null), n.onClose())
							}))
						})
					}),
					[l.jj.USER_COMMUNICATION_DISABLED]: (e, t) => new Promise(a => {
						(0, i.ZDy)(async () => {
							let {
								default: i
							} = await n.e("78273").then(n.bind(n, 41767)), s = e.actions.find(e => e.type === l.jj.USER_COMMUNICATION_DISABLED);
							return n => (0, r.jsx)(i, c(o({
								action: t,
								isEdit: null != s,
								triggerType: e.triggerType,
								onUpdateDuration: e => {
									null != e && (t.metadata.durationSeconds = e), a(t), n.onClose()
								}
							}, n), {
								onClose: () => (a(null), n.onClose())
							}))
						})
					})
				}
			}

			function u(e, t, l, a) {
				(0, i.ZDy)(async () => {
					let {
						default: i
					} = await n.e("37483").then(n.bind(n, 241046));
					return n => (0, r.jsx)(i, c(o({}, n), {
						automodDecision: {
							messageId: e,
							messageContent: t,
							decisionId: l,
							channel: a
						}
					}))
				})
			}

			function d(e, t) {
				(0, i.ZDy)(async () => {
					let {
						default: i
					} = await n.e("28382").then(n.bind(n, 537623));
					return n => (0, r.jsx)(i, c(o({}, n), {
						messageId: e,
						guildId: t
					}))
				})
			}

			function _(e) {
				(0, i.h7j)(t => (0, r.jsx)(i.ConfirmModal, c(o({
					header: a.intl.string(a.t.wLGrjI),
					confirmText: a.intl.string(a.t["cY+Ooa"]),
					onConfirm: e,
					cancelText: a.intl.string(a.t["ETE/oK"])
				}, t), {
					children: (0, r.jsx)(i.Text, {
						variant: "text-md/normal",
						children: a.intl.string(a.t.arYQ2d)
					})
				})))
			}
		},
		36459: function(e, t, n) {
			n.d(t, {
				$Y: () => A,
				JK: () => N,
				Je: () => f,
				T9: () => C,
				UE: () => R,
				Xx: () => g,
				mm: () => m,
				qY: () => S
			}), n(388685);
			var r = n(544891),
				i = n(570140),
				l = n(367907),
				a = n(430824),
				o = n(496675),
				c = n(823379),
				s = n(709054),
				u = n(177862),
				d = n(787824),
				_ = n(226192),
				E = n(981631);

			function I(e) {
				return {
					type: e.type,
					metadata: (0, d.X)(e.metadata)
				}
			}

			function O(e) {
				var t, n;
				let r = (0, d.X)(e.triggerMetadata);
				return null != r && delete r.keywordLists, {
					id: e.id,
					name: e.name,
					guild_id: e.guildId,
					event_type: e.eventType,
					trigger_type: e.triggerType,
					trigger_metadata: r,
					actions: e.actions.filter(c.lm).map(I),
					enabled: e.enabled,
					creator_id: e.creatorId,
					position: e.position,
					exempt_channels: Array.from(null != (t = e.exemptChannels) ? t : []),
					exempt_roles: Array.from(null != (n = e.exemptRoles) ? n : [])
				}
			}

			function p(e) {
				return {
					type: e.type,
					metadata: (0, d.C)(e.metadata)
				}
			}

			function T(e) {
				var t, n, r;
				let i = {
					id: null != (t = e.id) ? t : s.default.fromTimestamp(Date.now()),
					name: e.name,
					guildId: e.guild_id,
					eventType: e.event_type,
					triggerType: e.trigger_type,
					triggerMetadata: (0, d.C)(e.trigger_metadata),
					actions: e.actions.filter(c.lm).map(p),
					enabled: e.enabled,
					creatorId: e.creator_id,
					position: e.position,
					exemptChannels: new Set(null != (n = e.exempt_channels) ? n : []),
					exemptRoles: new Set(null != (r = e.exempt_roles) ? r : [])
				};
				return null != i.triggerMetadata && delete i.triggerMetadata.keywordLists, i
			}
			async function S(e) {
				let t = O(e),
					n = await r.tn.post({
						url: E.ANM.GUILD_AUTOMOD_VALIDATE_RULE(e.guildId),
						body: t,
						rejectWithError: !1
					});
				return (0, d.C)(n.body)
			}
			async function N(e) {
				let t = O(e);
				return delete t.id, T((await r.tn.post({
					url: E.ANM.GUILD_AUTOMOD_RULES(e.guildId),
					body: t,
					rejectWithError: !1
				})).body)
			}
			async function f(e) {
				let t = O(e);
				return T((await r.tn.patch({
					url: E.ANM.GUILD_AUTOMOD_RULE(e.guildId, e.id),
					body: t,
					rejectWithError: !1
				})).body)
			}
			async function m(e, t) {
				return await r.tn.del({
					url: E.ANM.GUILD_AUTOMOD_RULE(t, e),
					rejectWithError: !1
				}), !0
			}
			async function A(e) {
				let t = await r.tn.get({
					url: E.ANM.GUILD_AUTOMOD_RULES(e),
					rejectWithError: !1
				});
				return Array.isArray(t.body) ? t.body.map(T) : []
			}
			async function g(e, t, n) {
				o.Z.can(E.Plq.MANAGE_MESSAGES, t) && await r.tn.post({
					url: E.ANM.GUILD_AUTOMOD_ALERT_ACTION(t.guild_id),
					body: {
						message_id: e,
						channel_id: t.id,
						alert_action_type: n
					},
					rejectWithError: !1
				})
			}

			function R(e, t, n) {
				let i = a.Z.getGuild(e);
				null != i && o.Z.can(E.Plq.MANAGE_GUILD, i) && (0, _.UV)(() => {
					(0, l.yw)(E.rMx.GUILD_AUTOMOD_FEEDBACK, {
						feedback_type: u.x2.MENTION_RAID_REMOVE_RESTRICTION,
						decision_id: t
					}), r.tn.post({
						url: E.ANM.GUILD_AUTOMOD_CLEAR_MENTION_RAID(e),
						rejectWithError: !0
					}), n()
				})
			}

			function C(e) {
				i.Z.dispatch({
					type: "AUTO_MODERATION_MENTION_RAID_NOTICE_DISMISS",
					guildId: e
				})
			}
		},
		236069: function(e, t, n) {
			n.d(t, {
				Z: () => T
			}), n(388685);
			var r = n(255367);
			n(73800);
			var i = n(442837),
				l = n(481060),
				a = n(300284),
				o = n(314897),
				c = n(271383),
				s = n(715903),
				u = n(295474),
				d = n(372897),
				_ = n(526761),
				E = n(388032);

			function I(e) {
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

			function O(e) {
				let {
					guildId: t,
					analyticsLocations: n,
					analyticsLocation: i
				} = e, [a, o] = (0, u.ww)({
					guildId: t,
					analyticsLocations: n,
					analyticsLocation: i,
					openWithoutBackstack: !0
				}), c = o ? E.intl.string(E.t["6ndMcn"]) : E.intl.string(E.t["0eiu6O"]), s = o ? E.intl.string(E.t.S09nw8) : E.intl.string(E.t.tEttXV);
				return (0, r.jsxs)(l.qXd, {
					color: l.DM8.DANGER,
					children: [c, (0, r.jsx)(l.EyT, {
						onClick: a,
						children: s
					})]
				})
			}

			function p() {
				let e = (0, a.Z)({
					scrollPosition: _.Y_.GUILD_TAG
				});
				return (0, r.jsxs)(l.qXd, {
					color: l.DM8.DANGER,
					children: [E.intl.string(E.t.ZqlecX), (0, r.jsx)(l.EyT, {
						onClick: e,
						children: E.intl.string(E.t.SJehVV)
					})]
				})
			}

			function T(e) {
				let t = (0, i.e7)([o.default, c.ZP], () => {
					if (null == e.guildId) return new Set;
					let t = o.default.getId();
					return (0, s.no)(c.ZP.getMember(e.guildId, t))
				}, [e.guildId]);
				return t.has(d.q.AUTOMOD_QUARANTINED_USERNAME_OR_GUILD_NICKNAME) || t.has(d.q.AUTOMOD_QUARANTINED_BIO) ? (0, r.jsx)(O, I({}, e)) : t.has(d.q.AUTOMOD_QUARANTINED_SERVER_TAG) ? (0, r.jsx)(p, {}) : (0, r.jsx)(O, I({}, e))
			}
		},
		693546: function(e, t, n) {
			n.d(t, {
				Z: () => I
			});
			var r = n(544891),
				i = n(570140),
				l = n(668781),
				a = n(287734),
				o = n(131704),
				c = n(926526),
				s = n(826581),
				u = n(246364),
				d = n(937111),
				_ = n(981631),
				E = n(388032);
			let I = {
				fetchGuildJoinRequest: async e => {
					let t = await r.tn.get({
							url: _.ANM.GUILD_JOIN_REQUEST_BY_ID(e),
							rejectWithError: !1
						}),
						n = (0, d.j)(t.body);
					return i.Z.dispatch({
						type: "GUILD_JOIN_REQUEST_BY_ID_FETCH_SUCCESS",
						joinRequest: n
					}), t
				},
				fetchGuildJoinRequests: async e => {
					let {
						guildId: t,
						status: n = u.wB.SUBMITTED,
						before: l,
						after: a,
						limit: o = u.tB,
						force: c = !1
					} = e, E = c || !s.Z.hasFetched(t);
					if (!s.Z.isFetching() && E) {
						i.Z.dispatch({
							type: "GUILD_JOIN_REQUESTS_FETCH_START"
						});
						try {
							var I;
							let e = await r.tn.get({
									url: _.ANM.GUILD_JOIN_REQUESTS(t),
									query: {
										status: n,
										limit: o,
										before: l,
										after: a
									},
									rejectWithError: !1
								}),
								c = e.body.total,
								s = (null != (I = e.body.guild_join_requests) ? I : []).map(d.j);
							return i.Z.dispatch({
								type: "GUILD_JOIN_REQUESTS_FETCH_SUCCESS",
								status: n,
								requests: s,
								total: c,
								limit: o,
								guildId: t
							}), e
						} catch (e) {
							throw i.Z.dispatch({
								type: "GUILD_JOIN_REQUESTS_FETCH_FAILURE"
							}), e
						}
					}
				},
				ackUserGuildJoinRequest: async (e, t) => {
					try {
						return await r.tn.post({
							url: _.ANM.GUILD_JOIN_REQUEST_ACK(e, t),
							rejectWithError: !1
						})
					} catch (e) {} finally {
						i.Z.dispatch({
							type: "ACK_APPROVED_GUILD_JOIN_REQUEST",
							id: t,
							guildId: e
						})
					}
				},
				removeGuildJoinRequest: async e => {
					try {
						let t = await r.tn.del({
							url: _.ANM.GUILD_MEMBER_REQUEST_TO_JOIN(e),
							rejectWithError: !1
						});
						return i.Z.dispatch({
							type: "USER_GUILD_JOIN_REQUEST_UPDATE",
							guildId: e,
							request: null
						}), t
					} catch (e) {
						throw e
					}
				},
				updateGuildJoinRequest: async function(e, t, n) {
					let a = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : u.wB.APPROVED,
						o = arguments.length > 4 ? arguments[4] : void 0;
					(0, c.ID)({
						guildId: e,
						actionType: a,
						applicationUserId: t
					});
					let s = await r.tn.patch({
						url: _.ANM.GUILD_JOIN_REQUEST_ID(e, n),
						body: {
							action: a,
							rejection_reason: o
						},
						rejectWithError: !1
					}).catch(e => (e && e.body && e.body.code === _.evJ.REQUEST_TO_JOIN_USER_INELIGIBLE && l.Z.show({
						title: E.intl.string(E.t.DxJj4e),
						body: E.intl.string(E.t.rSAOk5)
					}), Promise.reject(e)));
					i.Z.dispatch({
						type: "GUILD_JOIN_REQUEST_UPDATE",
						guildId: e,
						status: s.body.application_status,
						request: s.body
					})
				},
				actionAllPendingJoinRequests: async (e, t) => {
					let n = await r.tn.patch({
						url: _.ANM.GUILD_JOIN_REQUESTS(e),
						body: {
							action: t
						},
						rejectWithError: !1
					});
					return i.Z.dispatch({
						type: "GUILD_JOIN_REQUESTS_BULK_ACTION",
						guildId: e,
						action: t
					}), n.body
				},
				resetGuildJoinRequest: async e => {
					try {
						let {
							body: t
						} = await r.tn.post({
							url: _.ANM.GUILD_MEMBER_REQUEST_TO_JOIN(e),
							rejectWithError: !1
						});
						return i.Z.dispatch({
							type: "USER_GUILD_JOIN_REQUEST_UPDATE",
							guildId: e,
							request: t
						}), t
					} catch (e) {
						throw e
					}
				},
				fetchRequestToJoinGuilds: async () => {
					let e = await r.tn.get({
						url: _.ANM.USER_JOIN_REQUEST_GUILDS,
						rejectWithError: !1
					});
					i.Z.dispatch({
						type: "USER_JOIN_REQUEST_GUILDS_FETCH",
						guilds: e.body
					})
				},
				setSelectedApplicationTab: (e, t) => {
					i.Z.dispatch({
						type: "GUILD_JOIN_REQUESTS_SET_APPLICATION_TAB",
						guildId: e,
						applicationTab: t
					})
				},
				setSelectedSortOrder: (e, t) => {
					i.Z.dispatch({
						type: "GUILD_JOIN_REQUESTS_SET_SORT_ORDER",
						guildId: e,
						sortOrder: t
					})
				},
				setSelectedGuildJoinRequest: (e, t) => {
					null != t && (0, c.Dq)({
						guildId: e,
						applicationStatus: t.applicationStatus,
						applicationUserId: t.userId
					}), i.Z.dispatch({
						type: "GUILD_JOIN_REQUESTS_SET_SELECTED",
						guildId: e,
						request: t
					})
				},
				createOrEnterJoinRequestInterview: async function(e) {
					let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1],
						n = await r.tn.post({
							url: _.ANM.GUILD_JOIN_REQUEST_INTERVIEW(e),
							rejectWithError: !1
						}),
						l = (0, o.q_)(n.body);
					return i.Z.dispatch({
						type: "CHANNEL_CREATE",
						channel: l
					}), t && a.default.selectPrivateChannel(l.id), l.id
				},
				fetchJoinRequestCooldown: async e => {
					try {
						let t = await r.tn.get({
							url: _.ANM.GUILD_MEMBER_JOIN_REQUEST_COOLDOWN(e),
							rejectWithError: !1
						});
						return i.Z.dispatch({
							type: "USER_GUILD_JOIN_REQUEST_COOLDOWN_FETCH",
							guildId: e,
							cooldown: t.body.cooldown
						}), t
					} catch (t) {
						throw i.Z.dispatch({
							type: "USER_GUILD_JOIN_REQUEST_COOLDOWN_FETCH",
							guildId: e,
							cooldown: null
						}), t
					}
				}
			}
		},
		574650: function(e, t, n) {
			n.d(t, {
				Z: () => g
			}), n(539854), n(388685);
			var r = n(255367);
			n(73800);
			var i = n(120356),
				l = n.n(i),
				a = n(114858),
				o = n(442837),
				c = n(755721),
				s = n(481060),
				u = n(430824),
				d = n(914010),
				_ = n(693546),
				E = n(305325),
				I = n(246364),
				O = n(983736),
				p = n(937111),
				T = n(981631),
				S = n(176505),
				N = n(388032),
				f = n(246752),
				m = n(240211);

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
			let g = () => {
				var e, t;
				let i = (0, o.e7)([d.Z], () => d.Z.getGuildId(), []),
					g = (0, o.e7)([u.Z], () => u.Z.getGuild(i), [i]),
					R = (0, o.e7)([p.Z], () => null != i ? p.Z.getRequest(i) : null, [i]),
					C = (0, a.TH)(),
					P = (null == (e = (0, a.LX)(C.pathname, T.Z5c.CHANNEL(null == g ? void 0 : g.id, S.oC.GUILD_ONBOARDING))) ? void 0 : e.isExact) === !0;
				if (null == g || !(0, O.Dc)(g) || P) return null;
				let y = null != (t = null == R ? void 0 : R.applicationStatus) ? t : I.wB.STARTED,
					b = null,
					D = null,
					h = null,
					U = [f.notice, m.notice];
				switch (y) {
					case I.wB.SUBMITTED:
						b = N.intl.string(N.t["5iLvS0"]), D = N.intl.string(N.t.mqtdmZ), h = () => {
							(0, s.h7j)(e => {
								var t, n;
								return (0, r.jsx)(s.ConfirmModal, (t = A({
									header: N.intl.string(N.t.aIz1oa),
									confirmText: N.intl.string(N.t["cY+Ooa"]),
									cancelText: N.intl.string(N.t["ETE/oK"]),
									onConfirm: () => _.Z.removeGuildJoinRequest(g.id),
									confirmButtonColor: c.zx.Colors.BRAND
								}, e), n = n = {
									children: (0, r.jsx)(s.Text, {
										variant: "text-md/normal",
										children: N.intl.string(N.t["13tjTU"])
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
						};
						break;
					case I.wB.REJECTED:
						b = N.intl.string(N.t.lk30cX), D = N.intl.string(N.t["8RrsHh"]), h = () => {
							(0, s.ZDy)(async () => {
								let {
									default: e
								} = await n.e("3378").then(n.bind(n, 76075));
								return t => (0, r.jsx)(e, A({
									guildId: g.id
								}, t))
							})
						}, U.push(f.error);
						break;
					default:
						b = N.intl.string(N.t.G5YKXF), D = N.intl.string(N.t["r8/DT0"]), h = () => {
							(0, E.hk)(g.id)
						}
				}
				return (0, r.jsxs)("div", {
					className: l()(...U),
					children: [(0, r.jsx)(s.Text, {
						className: f.header,
						variant: "text-sm/normal",
						children: b
					}), (0, r.jsx)(s.zxk, {
						variant: "overlay-primary",
						size: "sm",
						onClick: h,
						text: D
					})]
				})
			}
		},
		584825: function(e, t, n) {
			n.d(t, {
				GG: () => p,
				HQ: () => m,
				JH: () => R,
				QV: () => g,
				YB: () => A,
				_1: () => f,
				_k: () => I,
				jO: () => O,
				oC: () => C,
				qi: () => T,
				r4: () => N,
				sp: () => S
			}), n(388685), n(539854);
			var r = n(73800),
				i = n(442837),
				l = n(990169),
				a = n(935369),
				o = n(38618);
			n(823379);
			var c = n(730647),
				s = n(423117),
				u = n(289393),
				d = n(697227);
			let _ = [],
				E = function(e) {
					let {
						refetchOnMount: t = !1,
						includeSoftDeleted: n = !0,
						countryCode: a,
						dontFetchWhileTrue: c
					} = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}, d = (0, i.e7)([o.Z], () => o.Z.isConnected()), _ = (0, i.e7)([u.Z], () => null != e ? u.Z.getSubscriptionGroupListingsForGuildFetchState(e) : u.M.FETCHED), E = r.useRef(t);
					r.useEffect(() => {
						if (null == e || !d || !0 === c) return;
						let r = u.Z.getSubscriptionGroupListingsForGuildFetchState(e);
						(t || r === u.M.NOT_FETCHED) && (E.current = !1, s.FP(e, {
							includeSoftDeleted: n,
							countryCode: a
						}))
					}, [d, e, n, t, a, c]);
					let I = (0, l.Z)(E);
					return {
						listingsLoaded: _ === u.M.FETCHED && !0 !== I
					}
				},
				I = function(e) {
					let {
						includeSoftDeleted: t = !1,
						includeUnpublished: n = !0
					} = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
					return (0, i.Wu)([u.Z], () => {
						if (null == e) return [];
						let r = u.Z.getSubscriptionGroupListing(e);
						if (null == r) return [];
						let i = [];
						for (let e of r.subscription_listings_ids) {
							let r = u.Z.getSubscriptionListing(e);
							null != r && (!r.soft_deleted || t) && (r.published || n) && i.push(r)
						}
						return i
					}, [e, t, n])
				},
				O = e => (0, i.e7)([u.Z], () => null != e ? u.Z.getSubscriptionListing(e) : null),
				p = e => {
					let t = (0, c.f)("useGroupListingsForGuild");
					return (0, i.e7)([u.Z], () => null != e && t ? u.Z.getSubscriptionGroupListingsForGuild(e) : _)
				},
				T = function(e) {
					let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {
						includeSoftDeleted: !1,
						sortDeletedListingsLast: !1
					};
					return E(e), (0, i.Wu)([u.Z], () => {
						let n = null != e ? u.Z.getSubscriptionGroupListingsForGuild(e) : _,
							r = [];
						for (let e of n)
							for (let n of e.subscription_listings_ids) {
								let e = u.Z.getSubscriptionListing(n);
								null != e && (t.includeSoftDeleted || !e.soft_deleted) && r.push(e)
							}
						return t.includeSoftDeleted && t.sortDeletedListingsLast ? [...r.filter(e => !e.soft_deleted), ...r.filter(e => e.soft_deleted)] : r
					})
				},
				S = e => {
					let [t, n] = r.useState(!1), l = r.useMemo(() => e.map(d.W), [e]), a = (0, i.Wu)([u.Z], () => l.filter(e => !u.Z.getDidFetchListingForSubscriptionPlanId(e)), [l]);
					return r.useEffect(() => {
						!t && a.length > 0 && (n(!0), Promise.all(a.map(e => s.vY(e))).catch(() => {}).then(() => {
							n(!1)
						}))
					}, [t, a]), {
						loading: t
					}
				},
				N = () => {
					let [e, t] = r.useState(!1), [n, i] = r.useState(null);
					return {
						error: n,
						submitting: e,
						deleteSubscriptionListing: async (e, n, r) => {
							try {
								return t(!0), i(null), await s._d(e, n, r), !0
							} catch (e) {
								i(e)
							} finally {
								t(!1)
							}
						}
					}
				},
				f = () => {
					let [e, t] = (0, a.Z)(s.AE), {
						loading: n,
						error: r
					} = t;
					return {
						error: r,
						submitting: n,
						archiveSubscriptionListing: e
					}
				},
				m = () => {
					let [e, t] = r.useState(!1), [n, i] = r.useState(null);
					return {
						error: n,
						submitting: e,
						publishSubscriptionListing: async e => {
							let {
								guildId: n,
								groupListingId: r,
								listingId: l
							} = e;
							try {
								return t(!0), i(null), await s.O0({
									guildId: n,
									groupListingId: r,
									listingId: l,
									data: {
										published: !0
									}
								}), !0
							} catch (e) {
								i(e)
							} finally {
								t(!1)
							}
						},
						clearError: () => i(null)
					}
				},
				A = e => (0, i.e7)([u.Z], () => null != e ? u.Z.getSubscriptionSettings(e) : void 0),
				g = () => {
					let [e, t] = r.useState(!1), [n, i] = r.useState(null);
					return {
						loading: e,
						updateSubscriptionsSettings: r.useCallback(async (e, n) => {
							t(!0), i(null);
							try {
								await s.W2(e, n)
							} catch (e) {
								i(e)
							} finally {
								t(!1)
							}
						}, []),
						error: n
					}
				},
				R = () => {
					let [e, t] = r.useState(!1), [n, i] = r.useState(null);
					return {
						loading: e,
						fetchSubscriptionsSettings: r.useCallback(async e => {
							t(!0), i(null);
							try {
								await s.Qb(e)
							} catch (e) {
								i(e)
							} finally {
								t(!1)
							}
						}, []),
						error: n
					}
				},
				C = e => (0, i.e7)([u.Z], () => null != e ? u.Z.getSubscriptionTrial(e) : null)
		},
		665302: function(e, t, n) {
			n.d(t, {
				h: () => s
			});
			var r = n(255367);
			n(73800);
			var i = n(755721),
				l = n(481060),
				a = n(671533),
				o = n(981631),
				c = n(261496);

			function s(e) {
				let {
					buttonText: t,
					onGoBack: n,
					onDismiss: s,
					showCloseButton: u
				} = e;
				return (0, r.jsxs)(l.qXd, {
					className: c.backNotice,
					children: [u && (0, r.jsx)(l.RyX, {
						onClick: s,
						noticeType: o.kVF.BACK_TO_PREVIOUS_SCREEN
					}), (0, r.jsxs)(i.zx, {
						className: c.backButton,
						innerClassName: c.backButtonInner,
						look: i.zx.Looks.OUTLINED,
						color: i.zx.Colors.WHITE,
						size: i.zx.Sizes.NONE,
						onClick: n,
						children: [(0, r.jsx)(a.Z, {
							width: 16,
							height: 16,
							direction: a.Z.Directions.LEFT,
							className: c.__invalid_backArrow
						}), t]
					})]
				})
			}
		},
		11868: function(e, t, n) {
			n.d(t, {
				Qt: () => Z,
				ZP: () => x
			}), n(953529);
			var r = n(255367),
				i = n(73800),
				l = n(120356),
				a = n.n(l),
				o = n(442837),
				c = n(755721),
				s = n(481060),
				u = n(447543),
				d = n(287734),
				_ = n(372769),
				E = n(955415),
				I = n(922482),
				O = n(592125),
				p = n(430824),
				T = n(411198),
				S = n(15274),
				N = n(924301),
				f = n(725436),
				m = n(978227),
				A = n(236373),
				g = n(854698),
				R = n(405613),
				C = n(95291),
				P = n(742593),
				y = n(217804),
				b = n(139712),
				D = n(765305),
				h = n(388032),
				U = n(690606);
			let M = (e, t) => n => {
					n.stopPropagation(), d.default.selectVoiceChannel(e.channel_id, !1), null == t || t(n)
				},
				v = (e, t) => n => {
					let r = O.Z.getChannel(e.channel_id);
					null != r && (n.stopPropagation(), (0, I.Cq)(r), null == t || t(n))
				},
				Z = (e, t) => {
					switch (null == e ? void 0 : e.entity_type) {
						case D.WX.STAGE_INSTANCE:
							return v(e, t);
						case D.WX.VOICE:
							return M(e, t)
					}
					return () => {}
				},
				L = (e, t) => t && [D.WX.STAGE_INSTANCE, D.WX.VOICE].includes(null == e ? void 0 : e.entity_type),
				j = i.memo(function(e) {
					var t;
					let {
						guild: n,
						guildScheduledEvent: l,
						channel: a,
						isMember: c
					} = e, d = (0, o.e7)([p.Z], () => {
						if (null == n) return null;
						let e = p.Z.getGuild(n.id);
						return null != e ? e : (0, T.lM)(n) ? n : (0, T.Qs)(n)
					}, [n]), I = (0, y.u)(l, a), O = i.useCallback(e => {
						c && null != l && (e.stopPropagation(), (0, u.Bk)(l))
					}, [c, l]), S = i.useCallback(e => {
						Z(l)(e)
					}, [l]);
					if (null == d) return null;
					let N = null == I ? void 0 : I.IconComponent,
						m = (0, r.jsxs)(r.Fragment, {
							children: [null != N && (0, r.jsx)(N, {
								size: "xs",
								color: "currentColor",
								className: U.channelIcon
							}), (0, r.jsx)(s.Text, {
								className: U.channelDescription,
								variant: "text-xs/normal",
								children: (0, f.m)(null != (t = null == I ? void 0 : I.locationName) ? t : "", !0)
							})]
						});
					return (0, r.jsxs)("div", {
						className: U.inviteDetailsContainer,
						children: [(0, r.jsx)(E.Z.Icon, {
							guild: d,
							onClick: O
						}), (0, r.jsxs)("div", {
							className: U.verticalContainer,
							children: [(0, r.jsxs)("div", {
								className: U.guildChannelInfoContainer,
								children: [(0, r.jsx)(_.Z, {
									guild: d,
									tooltipPosition: "top",
									tooltipColor: s.ua7.Colors.PRIMARY,
									size: 16,
									className: U.guildBadge
								}), (0, r.jsx)(s.P3F, {
									className: U.guildNameClickable,
									onClick: O,
									children: (0, r.jsx)(s.X6q, {
										className: c ? U.guildNameLinkable : U.guildName,
										variant: "text-sm/medium",
										children: d.name
									})
								})]
							}), (0, r.jsx)("div", {
								className: U.channelInfoContainer,
								children: L(l, c) ? (0, r.jsx)(s.P3F, {
									className: U.channelLocationLink,
									onClick: S,
									children: m
								}) : m
							})]
						})]
					})
				}),
				k = i.memo(function(e) {
					let {
						guildId: t,
						guildScheduledEventId: n,
						recurrenceId: i,
						isActive: l,
						isEnded: a,
						isMember: u,
						isExternal: d,
						onAcceptInstantInvite: _,
						onTransitionToInviteChannel: E
					} = e, I = (0, o.e7)([N.ZP], () => N.ZP.isInterestedInEventRecurrence(n, i), [n, i]), O = e => {
						e.stopPropagation(), u ? l && E() : _()
					};
					return u ? l ? (0, r.jsx)(c.zx, {
						className: U.button,
						size: c.zx.Sizes.SMALL,
						onClick: e => {
							d || O(e)
						},
						color: d ? c.zx.Colors.TRANSPARENT : c.zx.Colors.GREEN,
						children: d ? h.intl.string(h.t.GoCQxc) : h.intl.string(h.t.XpeFYm)
					}) : a ? (0, r.jsx)(c.zx, {
						className: U.button,
						size: c.zx.Sizes.SMALL,
						disabled: !0,
						color: c.zx.Colors.PRIMARY,
						look: c.zx.Looks.OUTLINED,
						children: h.intl.string(h.t.Pj7Xrq)
					}) : (0, r.jsxs)(c.zx, {
						className: U.button,
						innerClassName: U.innerButton,
						size: c.zx.Sizes.SMALL,
						color: c.zx.Colors.PRIMARY,
						look: I ? c.zx.Looks.OUTLINED : c.zx.Looks.FILLED,
						onClick: e => {
							e.stopPropagation(), (0, b.Z)(n, i, t)
						},
						children: [I ? (0, r.jsx)(s.dz2, {
							size: "xs",
							color: "currentColor",
							className: U.buttonIcon
						}) : (0, r.jsx)(s.Dkj, {
							size: "xs",
							color: "currentColor",
							className: U.buttonIcon
						}), h.intl.string(h.t.DlcqlZ)]
					}) : (0, r.jsx)(c.zx, {
						className: U.button,
						size: c.zx.Sizes.SMALL,
						onClick: O,
						color: c.zx.Colors.GREEN,
						children: h.intl.string(h.t.XpeFYm)
					})
				}),
				x = i.memo(function(e) {
					var t;
					let {
						guildScheduledEvent: n,
						guild: l,
						channel: o,
						isMember: c,
						recurrenceId: u,
						onAcceptInstantInvite: d,
						onTransitionToInviteChannel: _
					} = e, I = null != u ? u : null != n ? (0, g.DK)(n) : null, O = (null == n ? void 0 : n.recurrence_rule) == null || null == I || (0, g.Rp)((0, A.KV)(null == n ? void 0 : n.recurrence_rule), I), p = (0, m.Z)(n), T = i.useCallback(() => {
						c && null != n && (0, S.bO)({
							eventId: n.id,
							recurrenceId: I
						})
					}, [c, n, I]);
					if (null == n || !O) return null;
					let f = (0, N.xt)(n),
						y = (0, N.Z2)(n),
						b = n.entity_type === D.WX.EXTERNAL;
					return (0, r.jsx)(E.Z, {
						className: a()({
							[U.clickable]: c
						}),
						children: (0, r.jsxs)(s.P3F, {
							onClick: T,
							children: [null != n.image && (0, r.jsx)(C.Z, {
								source: (0, R.Z)(n),
								className: U.banner
							}), (0, r.jsx)(P.ZP, {
								name: n.name,
								description: null != (t = n.description) ? t : void 0,
								descriptionClassName: U.eventDescription,
								guildId: n.guild_id,
								creator: p,
								guildEvent: n,
								eventPreview: n,
								recurrenceId: I
							}), (0, r.jsxs)("div", {
								className: U.footerContainer,
								children: [(0, r.jsx)(j, {
									guild: l,
									channel: o,
									guildScheduledEvent: n,
									isMember: c
								}), (0, r.jsx)(k, {
									isActive: f,
									isEnded: y,
									isMember: c,
									guildId: n.guild_id,
									guildScheduledEventId: n.id,
									recurrenceId: I,
									onAcceptInstantInvite: d,
									onTransitionToInviteChannel: _,
									isExternal: b
								})]
							})]
						})
					})
				})
		},
		984370: function(e, t, n) {
			n.d(t, {
				O: () => R,
				Z: () => b
			}), n(35282);
			var r = n(255367);
			n(73800);
			var i = n(873546),
				l = n(442837),
				a = n(475179),
				o = n(100527),
				c = n(906732),
				s = n(358221),
				u = n(185935),
				d = n(2818),
				_ = n(954551),
				E = n(208450),
				I = n(975146),
				O = n(979651),
				p = n(358085),
				T = n(998502),
				S = n(665149),
				N = n(981631),
				f = n(176505),
				m = n(220705);

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

			function g(e, t) {
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
			async function R(e) {
				if (!e && (0, p.isMac)() && p.isPlatformEmbedded) {
					var t, n, r;
					let e = null != (r = await (null == (t = (n = window.DiscordNative.remoteApp).getDefaultDoubleClickAction) ? void 0 : t.call(n))) ? r : "Maximize";
					"Minimize" === e ? T.ZP.minimize() : "Maximize" === e && T.ZP.maximize()
				}
			}

			function C(e) {
				let {
					children: t,
					className: n,
					channelId: o,
					channelType: c,
					guildId: p,
					innerClassname: T,
					transparent: A = !1,
					showToolbar: g = !0,
					toolbar: C,
					mobileToolbar: P,
					"aria-label": y,
					"aria-labelledby": b,
					scrollable: D,
					role: h,
					hideSearch: U,
					showDivider: M,
					disableDoubleClick: v
				} = e, Z = null == o || (0, f.AB)(o) ? null : o, L = (0, l.e7)([O.Z], () => O.Z.isInChannel(Z) || !1), j = (0, l.e7)([s.Z], () => null != Z && s.Z.getParticipantsListOpen(Z)), {
					enabled: k,
					inInbox: x
				} = d.Z.useExperiment({
					location: "HeaderBar"
				}), {
					hasParticipantsPanel: F
				} = (0, u.Z)({
					location: "HeaderBar"
				});
				return (0, r.jsx)(S.ZP, {
					className: n,
					innerClassName: T,
					toolbar: function() {
						if (null == C) return null;
						let e = null != o && !U;
						return i.tq ? P : (0, r.jsxs)(r.Fragment, {
							children: [C, e ? (0, r.jsx)(E.Z, {
								className: m.search
							}, null != p ? p : o) : null, M && (0, r.jsx)(S.ZP.Divider, {}), k && !x ? (0, r.jsx)(_.Z, {}) : null, F && L && null != Z && !j && c === N.d4z.GROUP_DM && (0, r.jsxs)("div", {
								className: m.controlButtonWrapper,
								children: [(0, r.jsx)(S.ZP.Divider, {}), (0, r.jsx)(I.Z, {
									onClick: () => a.Z.toggleParticipantsList(Z, !j)
								})]
							})]
						})
					}(),
					transparent: A,
					showToolbar: g,
					onDoubleClick: () => R(v),
					"aria-label": y,
					"aria-labelledby": b,
					role: h,
					scrollable: D,
					children: t
				})
			}

			function P(e) {
				let {
					children: t,
					className: n,
					"aria-label": i,
					"aria-labelledby": l,
					role: a,
					disableDoubleClick: o
				} = e;
				return (0, r.jsx)(S.ZP, {
					className: n,
					onDoubleClick: () => R(o),
					"aria-label": i,
					"aria-labelledby": l,
					role: a,
					children: t
				})
			}

			function y(e) {
				var {
					isAuthenticated: t = !0
				} = e, n = function(e, t) {
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
				}(e, ["isAuthenticated"]);
				let {
					analyticsLocations: i
				} = (0, c.ZP)(o.Z.HEADER_BAR);
				return (0, r.jsx)(c.Gt, {
					value: i,
					children: t ? (0, r.jsx)(C, g(A({}, n), {
						className: n.className
					})) : (0, r.jsx)(P, g(A({}, n), {
						className: n.className
					}))
				})
			}
			y.Title = S.ZP.Title, y.Icon = S.ZP.Icon, y.Divider = S.ZP.Divider, y.Caret = S.ZP.Caret;
			let b = y
		},
		918658: function(e, t, n) {
			n.d(t, {
				Z: () => v,
				d: () => Z
			});
			var r = n(255367),
				i = n(73800),
				l = n(120356),
				a = n.n(l),
				o = n(442837),
				c = n(692547),
				s = n(755721),
				u = n(481060),
				d = n(549817),
				_ = n(819553),
				E = n(17181),
				I = n(303737),
				O = n(434404),
				p = n(703656),
				T = n(944486),
				S = n(914010),
				N = n(671533),
				f = n(259580),
				m = n(358085),
				A = n(962086),
				g = n(160404),
				R = n(889695),
				C = n(981631),
				P = n(176505),
				y = n(302463),
				b = n(293810),
				D = n(388032),
				h = n(800515);

			function U(e) {
				let {
					className: t,
					onClick: n,
					children: i,
					buttonRef: l
				} = e;
				return (0, r.jsx)(s.zx, {
					buttonRef: l,
					className: a()(h.button, t),
					innerClassName: h.buttonInner,
					look: s.zx.Looks.OUTLINED,
					color: s.zx.Colors.WHITE,
					size: s.zx.Sizes.NONE,
					onClick: n,
					children: i
				})
			}

			function M(e) {
				let {
					onClick: t
				} = e;
				return (0, r.jsx)(U, {
					onClick: t,
					children: D.intl.string(D.t.R9GHyc)
				})
			}

			function v() {
				let e = i.useRef(null),
					t = (0, o.e7)([S.Z], () => S.Z.getGuildId()),
					n = (0, o.e7)([T.Z], () => T.Z.getChannelId(t)),
					{
						viewingRoles: l,
						backNavigationSection: a,
						isFullServerPreview: s,
						isServerShopPreview: m
					} = (0, o.cj)([g.Z], () => ({
						viewingRoles: null != t ? g.Z.getViewingRoles(t) : null,
						backNavigationSection: g.Z.getBackNavigationSection(t),
						isFullServerPreview: null != t && g.Z.isFullServerPreview(t),
						isServerShopPreview: null != t && g.Z.isViewingServerShop(t)
					}));
				if (null == l || null == t) return null;
				let v = function(e) {
						switch (e) {
							case C.pNK.INTEGRATIONS:
								return D.intl.string(D.t.k7LGdn);
							case C.pNK.ROLE_SUBSCRIPTIONS:
								return D.intl.string(D.t.bRqiqa);
							case C.pNK.ONBOARDING:
								return D.intl.string(D.t.qZpU3d);
							default:
								return D.intl.string(D.t.MTIXho)
						}
					}(a),
					Z = a === C.pNK.ROLE_SUBSCRIPTIONS ? D.intl.string(D.t.hZUCzc) : D.intl.string(D.t["/djIh4"]),
					L = n === P.oC.GUILD_ONBOARDING,
					j = e => {
						let {
							backToSettings: n
						} = e;
						null != t && (g.Z.isFullServerPreview(t) && (0, p.uL)(C.Z5c.CHANNEL(t)), _.ZP.shouldShowOnboarding(t) && (d.Z.finishOnboarding(t), (0, E.EI)(t)), (0, A.mL)(t), n && O.Z.open(t, a), a === C.pNK.ROLE_SUBSCRIPTIONS && (0, I.GN)(t))
					};
				return (0, r.jsxs)(u.qXd, {
					color: u.DM8.BRAND,
					className: h.notice,
					children: [(0, r.jsxs)(U, {
						onClick: () => j({
							backToSettings: !0
						}),
						className: h.backButton,
						children: [(0, r.jsx)(N.Z, {
							width: 16,
							height: 16,
							direction: N.Z.Directions.LEFT,
							className: h.backArrow
						}), v]
					}), L && s ? (0, r.jsx)("div", {
						className: h.noticeContents,
						children: (0, r.jsx)("div", {
							className: h.noticeText,
							children: D.intl.string(D.t.PxbiAQ)
						})
					}) : (0, r.jsxs)("div", {
						className: h.noticeContents,
						children: [(0, r.jsx)("div", {
							className: h.noticeText,
							children: s ? D.intl.formatToPlainString(D.t["0PHahI"], {
								numRoles: Object.keys(l).length
							}) : D.intl.formatToPlainString(D.t.vMlK8v, {
								numRoles: Object.keys(l).length
							})
						}), (0, r.jsx)(u.yRy, {
							targetElementRef: e,
							position: "bottom",
							renderPopout: () => (0, r.jsx)(R.Z, {
								guildId: t
							}),
							children: t => {
								let {
									onClick: n
								} = t;
								return (0, r.jsxs)(U, {
									onClick: n,
									buttonRef: e,
									children: [Z, (0, r.jsx)(f.Z, {
										width: 16,
										height: 16,
										direction: f.Z.Directions.DOWN,
										className: h.selectCaret
									})]
								})
							}
						}), s && (0, r.jsx)(u.DY3, {
							className: h.previewWarning,
							text: D.intl.string(D.t.mW4DUF),
							children: (0, r.jsx)(u.P4T, {
								size: "xs",
								color: c.Z.unsafe_rawColors.YELLOW_300.css
							})
						}), m && (0, r.jsx)(u.DY3, {
							className: h.previewWarning,
							text: D.intl.formatToPlainString(D.t.eummvb, {
								maxTiers: b.fF,
								maxProducts: y.dD
							}),
							children: (0, r.jsx)(u.P4T, {
								size: "xs",
								color: c.Z.unsafe_rawColors.YELLOW_300.css
							})
						})]
					}), s || a === C.pNK.ROLE_SUBSCRIPTIONS ? null : (0, r.jsx)(M, {
						onClick: () => j({
							backToSettings: !1
						})
					})]
				})
			}

			function Z(e) {
				let {
					guildId: t
				} = e;
				return (0, o.e7)([g.Z], () => g.Z.isViewingRoles(t)) ? (0, r.jsx)("div", {
					className: a()(h.settingsWrapper, {
						[h.windows]: (0, m.isWindows)(),
						[h.osx]: (0, m.isMac)()
					}),
					children: (0, r.jsx)(v, {})
				}) : null
			}
		},
		859428: function(e, t, n) {
			n.d(t, {
				Z: () => N
			}), n(388685);
			var r = n(255367),
				i = n(73800),
				l = n(120356),
				a = n.n(l),
				o = n(442837),
				c = n(755721),
				s = n(481060),
				u = n(749210),
				d = n(703656),
				_ = n(430824),
				E = n(914010),
				I = n(900849),
				O = n(981631),
				p = n(388032),
				T = n(8940),
				S = n(240211);
			let N = () => {
				let e = (0, o.e7)([E.Z], () => E.Z.getGuildId(), []),
					t = (0, o.e7)([_.Z], () => _.Z.getGuild(e), [e]),
					[n, l] = i.useState(!1);
				if (null == t) return null;
				let N = async () => {
					l(!0);
					try {
						I.mT(t.id), await u.Z.joinGuild(t.id, {
							source: O.vtS.NOTICE_BAR
						})
					} catch (e) {
						l(!1)
					}
				};
				return (0, r.jsxs)("div", {
					className: a()(T.notice, S.notice),
					children: [(0, r.jsxs)(c.zx, {
						look: c.zx.Looks.OUTLINED,
						color: c.zx.Colors.WHITE,
						size: c.zx.Sizes.NONE,
						className: a()(T.button, T.back),
						innerClassName: T.iconButton,
						onClick: () => {
							(0, d.s1)().goBack()
						},
						children: [(0, r.jsx)(s.whL, {
							size: "xs",
							color: "currentColor",
							className: T.arrow
						}), p.intl.string(p.t["13/7kZ"])]
					}), (0, r.jsx)(s.Text, {
						className: T.header,
						variant: "text-sm/normal",
						children: p.intl.string(p.t["N/y2WF"])
					}), (0, r.jsx)(c.zx, {
						className: T.button,
						look: c.zx.Looks.OUTLINED,
						color: c.zx.Colors.WHITE,
						size: c.zx.Sizes.NONE,
						submitting: n,
						onClick: N,
						children: p.intl.format(p.t.uHN7n5, {
							guild: t.name
						})
					})]
				})
			}
		},
		368859: function(e, t, n) {
			n.d(t, {
				Z: () => i
			});
			var r = n(981631);

			function i(e) {
				return e.type === r.uaV.DEFAULT && null != e.messageReference && e.messageReference.type !== r.Uvt.FORWARD
			}
		},
		463396: function(e, t, n) {
			n.d(t, {
				f: () => l
			}), n(997841);
			var r = n(630388),
				i = n(981631);
			let l = e => null != e && null != e.attachments && !(e.attachments.length < 1) && e.attachments.some(e => null != e.flags && (0, r.yE)(e.flags, i.J0y.IS_REMIX))
		},
		50284: function(e, t, n) {
			n.d(t, {
				Z: () => I
			}), n(642613), n(583741);
			var r = n(544891),
				i = n(710845),
				l = n(569471),
				a = n(346479),
				o = n(592125),
				c = n(375954),
				s = n(306680),
				u = n(594174),
				d = n(709054),
				_ = n(981631);
			let E = new i.Z("markUnread");
			async function I(e, t) {
				let n = u.default.getCurrentUser();
				if (null == n) return;
				let i = c.Z.getMessages(e),
					I = i.toArray().filter(e => 0 > d.default.compare(e.id, t)).sort((e, t) => d.default.compare(e.id, t.id)).reverse()[0],
					O = null == I ? d.default.atPreviousMillisecond(t) : I.id,
					p = 0;
				i.forAll(e => {
					d.default.compare(e.id, O) > 0 && (0, s.Ex)(e, n) && p++
				});
				let T = o.Z.getChannel(e);
				null != T && T.isThread() && (T.isArchivedThread() && await a.Z.unarchiveThread(T, !1), l.Z.hasJoined(e) || await a.Z.joinThread(T, "Mark Unread")), E.log("Marking unread", {
					channelId: e,
					messageId: t
				}), r.tn.post({
					url: _.ANM.MESSAGE_ACK(e, O),
					body: {
						manual: !0,
						mention_count: p
					},
					oldFormErrors: !0,
					rejectWithError: !0
				})
			}
		},
		421399: function(e, t, n) {
			n.d(t, {
				Z: () => L,
				a: () => v
			});
			var r, i = n(255367),
				l = n(73800),
				a = n(120356),
				o = n.n(a),
				c = n(873546),
				s = n(442837),
				u = n(573385),
				d = n(865672),
				_ = n(481060),
				E = n(607070),
				I = n(100527),
				O = n(906732),
				p = n(385499),
				T = n(7284),
				S = n(372900),
				N = n(172751),
				f = n(606318),
				m = n(402235),
				A = n(477734),
				g = n(670188),
				R = n(485386),
				C = n(768581),
				P = n(585483),
				y = n(463396),
				b = n(935910),
				D = n(981631),
				h = n(848697);

			function U(e) {
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
			var v = ((r = {})[r.SYSTEM_TAG = 0] = "SYSTEM_TAG", r[r.BADGES = 1] = "BADGES", r);

			function Z(e) {
				let {
					compact: t
				} = e;
				return (0, i.jsx)(p.Z, {
					className: t ? h.botTagCompact : h.botTagCozy,
					type: p.Z.Types.REMIX,
					useRemSizes: !0
				})
			}

			function L(e) {
				var t;
				let {
					author: n,
					message: r,
					channel: a,
					userOverride: p,
					compact: v = !1,
					withMentionPrefix: L = !1,
					showPopout: j = !1,
					hideGuildTag: k = !1,
					hideSystemTag: x = !1,
					className: F,
					onClick: G,
					onContextMenu: w,
					onPopoutRequestClose: V,
					renderPopout: B,
					renderRemixTag: W = !1,
					decorations: H,
					previewGuildId: z,
					subscribeToGroupId: Y
				} = e, K = l.useRef(null), q = l.useContext(S.Z), X = null != (t = null == a ? void 0 : a.guild_id) ? t : q, {
					analyticsLocations: Q
				} = (0, O.ZP)(I.Z.USERNAME), J = L ? "@" : "", {
					nick: $,
					colorString: ee,
					colorStrings: et,
					colorRoleName: en,
					displayNameStyles: er
				} = n, ei = (0, s.e7)([E.Z], () => E.Z.roleStyle), el = "username" === ei, ea = (0, A.X$)(), eo = (0, T.j)({
					displayNameStyles: er
				}), ec = (0, s.e7)([R.Z], () => null == n.guildId || null == n.colorRoleId ? null : R.Z.getRole(n.guildId, n.colorRoleId)), es = (0, m.yH)(null != z ? z : X, ec), eu = (0, b.Z)(r), ed = l.useContext(u.d), e_ = es && (0, f.S2)(n), eE = el && e_;
				l.useEffect(() => {
					if (null == Y || !eE || null == ed) return;
					let {
						setAnimate: e
					} = ed;
					return P.S.subscribeKeyed(D.LPv.ANIMATE_CHAT_AVATAR, "".concat(Y, ":").concat(r.author.id), e), () => void P.S.unsubscribeKeyed(D.LPv.ANIMATE_CHAT_AVATAR, "".concat(Y, ":").concat(r.author.id), e)
				}, [r.author.id, Y, eE, ed]);
				let {
					gradientStyle: eI,
					gradientClassname: eO
				} = (0, _.Icv)({
					primaryColor: null == et ? void 0 : et.primaryColor,
					secondaryColor: null == et ? void 0 : et.secondaryColor,
					tertiaryColor: null == et ? void 0 : et.tertiaryColor,
					roleStyle: "username",
					includeConvenienceGlow: !0,
					animateGradient: null == ed ? void 0 : ed.animate
				}), ep = (0, d.EJ)(J + $), eT = {
					className: o()([h.username, eE && eO, eo]),
					style: (() => {
						if (el) return eE && null != et ? M(U({}, eI), {
							textDecorationColor: null == et ? void 0 : et.primaryColor
						}) : null != ee ? {
							color: ee
						} : void 0
					})(),
					onClick: G,
					onContextMenu: w,
					children: ep,
					"data-text": J + $
				}, eS = l.useMemo(() => v && !k ? (0, i.jsx)(N.ZP, {
					primaryGuild: n.primaryGuild,
					userId: r.author.id,
					contextGuildId: X,
					className: h.clanTagChiplet
				}) : null, [v, n.primaryGuild, X, r.author.id, k]), eN = null != p ? p : r.author, ef = null != B && null != j ? (0, i.jsx)(g.Z, {
					targetElementRef: K,
					user: eN,
					renderPopout: B,
					shouldShow: j,
					shouldPreload: eu,
					position: c.tq ? "window_center" : "right",
					avatarUrl: null != n.guildMemberAvatar && null != X ? (0, C.JM)({
						guildId: X,
						userId: eN.id,
						avatar: n.guildMemberAvatar,
						size: 80
					}) : void 0,
					onRequestClose: V,
					clickTrap: j,
					children: e => {
						var {
							onClick: t
						} = e, n = function(e, t) {
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
						}(e, ["onClick"]);
						return (0, i.jsxs)(i.Fragment, {
							children: [(0, i.jsx)(_.P3F, M(U({
								tag: "span",
								innerRef: K
							}, n, eT), {
								className: o()(eT.className, h.clickable, F)
							})), eS]
						})
					}
				}) : (0, i.jsxs)(i.Fragment, {
					children: [(0, i.jsx)(_.P3F, M(U({}, eT), {
						className: o()(eT.className, F)
					})), eS]
				}), em = null != H ? H[0] : null, eA = null != H ? H[1] : null;
				return (0, i.jsxs)(O.Gt, {
					value: Q,
					children: [null != em && !x && v ? (0, i.jsxs)(i.Fragment, {
						children: [" ", em, " "]
					}) : null, "dot" === ei ? (0, i.jsx)(_.FhE, {
						color: ee,
						colors: e_ ? et : null,
						name: en,
						className: h.roleDot,
						hoverOverride: null == ed ? void 0 : ed.animate
					}) : null, ef, !v && !k && (0, i.jsx)(N.ZP, {
						primaryGuild: n.primaryGuild,
						userId: r.author.id,
						contextGuildId: X,
						className: h.clanTagChiplet
					}), null != eA ? eA : null, null == em || x || v ? null : em, null != r && (0, y.f)(r) && ea && W ? (0, i.jsx)(Z, {}) : null]
				})
			}
		},
		294218: function(e, t, n) {
			n.d(t, {
				Z: () => h
			});
			var r = n(255367),
				i = n(73800),
				l = n(120356),
				a = n.n(l),
				o = n(91192),
				c = n(442837),
				s = n(518738),
				u = n(628238),
				d = n(869765),
				_ = n(592125),
				E = n(709054),
				I = n(786761),
				O = n(739566),
				p = n(492593),
				T = n(453687),
				S = n(25015),
				N = n(689674),
				f = n(438075),
				m = n(963550),
				A = n(845080),
				g = n(295790),
				R = n(145807),
				C = n(56744),
				P = n(981631),
				y = n(30804);

			function b(e) {
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

			function D(e, t) {
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
			let h = i.memo(function(e) {
				var t, n;
				let {
					message: i,
					compact: l = !1,
					className: h,
					onContextMenu: U,
					onClick: M,
					hideSimpleEmbedContent: v = !0,
					channel: Z,
					isGroupStart: L,
					animateAvatar: j,
					subscribeToComponentDispatch: k,
					renderThreadAccessory: x,
					trackAnnouncementViews: F = !1
				} = e, G = function(e, t) {
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
				}(e, ["message", "compact", "className", "onContextMenu", "onClick", "hideSimpleEmbedContent", "channel", "isGroupStart", "animateAvatar", "subscribeToComponentDispatch", "renderThreadAccessory", "trackAnnouncementViews"]), w = i.type === P.uaV.POLL_RESULT || null != (t = e.disableInteraction) && t, V = i.isFirstMessageInForumPost(Z), B = (0, u.A)((null != (n = i.editedTimestamp) ? n : i.timestamp).valueOf()), {
					content: W,
					hasSpoilerEmbeds: H
				} = (0, S.Z)(i, {
					hideSimpleEmbedContent: v,
					allowList: V || B,
					allowHeading: V || B,
					allowLinks: !0,
					previewLinkTarget: !0
				}), z = i.type === P.uaV.REPLY ? i.messageReference : void 0, Y = (0, c.e7)([d.Z], () => d.Z.getMessageByReference(z)), K = (0, o.JA)(i.id), q = (0, O.ZP)(i), X = (0, c.e7)([_.Z], () => i.hasFlag(P.iLy.HAS_THREAD) && _.Z.getChannel(E.default.castMessageIdAsChannelId(i.id))), Q = (0, s.p9)({
					guildId: Z.guild_id,
					roleId: q.iconRoleId
				}), J = (0, N.Z)({
					message: i,
					channel: Z,
					enabled: F
				}), $ = (0, T.iG)(i), ee = (0, T.Gx)(i);
				return (0, r.jsx)(p.Z, b({
					compact: l,
					className: a()(h, {
						[y.ephemeral]: (0, I.Pv)(i),
						[y.disableInteraction]: w
					}),
					disableInteraction: w,
					childrenRepliedMessage: (0, C.Z)(i, Z, z, Y, l),
					childrenExecutedCommand: (0, R.Z)(i, Z, l),
					childrenHeader: (0, A.Z)(D(b({}, e), {
						guildId: Z.guild_id,
						author: q,
						roleIcon: Q
					})),
					childrenAccessories: e.hideAccessories ? void 0 : (0, f.Q)(e, H),
					childrenMessageContent: (0, m.Z)(e, W),
					childrenSystemMessage: (0, g.Z)(D(b({}, e), {
						disableInteraction: w
					})),
					onContextMenu: U,
					onClick: M,
					hasThread: x && null != X && i.hasFlag(P.iLy.HAS_THREAD),
					hasReply: i.type === P.uaV.REPLY,
					"aria-labelledby": $,
					"aria-describedby": ee,
					messageRef: J,
					author: q
				}, K, G))
			})
		},
		47930: function(e, t, n) {
			n.d(t, {
				b: () => c,
				x: () => s
			});
			var r = n(255367);
			n(73800);
			var i = n(385499),
				l = n(245315),
				a = n(368859),
				o = n(848697);

			function c(e) {
				let t, {
					message: n,
					channel: r,
					user: o,
					isRepliedMessage: c
				} = e;
				return (null == n ? void 0 : n.isSystemDM()) ? t = i.Z.Types.SYSTEM_DM : null != n && (0, a.Z)(n) ? t = (0, l.cp)(n) ? i.Z.Types.OFFICIAL : i.Z.Types.SERVER : (null == o ? void 0 : o.bot) ? t = i.Z.Types.BOT : null != r && r.isForumPost() && r.ownerId === (null == o ? void 0 : o.id) && !c && (t = i.Z.Types.ORIGINAL_POSTER), t
			}

			function s(e) {
				let {
					message: t,
					channel: n,
					user: l,
					compact: a,
					isRepliedMessage: s,
					hideIcon: u = !1,
					children: d
				} = e, _ = c({
					message: t,
					channel: n,
					user: l,
					compact: a,
					isRepliedMessage: s,
					hideIcon: u,
					children: d
				});
				return null == _ ? null : (0, r.jsx)(i.Z, {
					className: a ? o.botTagCompact : o.botTagCozy,
					type: _,
					verified: null == l ? void 0 : l.isVerifiedBot(),
					hideIcon: u,
					useRemSizes: !0,
					children: d
				})
			}
		},
		935910: function(e, t, n) {
			n.d(t, {
				Z: () => l
			});
			var r = n(245315),
				i = n(368859);

			function l(e) {
				var t;
				return !((0, r.cp)(e) || (0, i.Z)(e) && (null == (t = e.messageReference) ? void 0 : t.guild_id) != null) && (null == e.interaction || "SENDING" !== e.state)
			}
		},
		332473: function(e, t, n) {
			n.d(t, {
				b: () => o,
				e: () => a
			});
			var r = n(399606),
				i = n(594174),
				l = n(918505);
			let a = () => c(i.default.getCurrentUser(), (0, l.JH)()),
				o = () => c((0, r.e7)([i.default], () => i.default.getCurrentUser()), (0, l.o9)());

			function c(e, t) {
				return !(null == e || e.isPomelo()) && !!e.hasVerifiedEmailOrPhone() && !!t
			}
		},
		91802: function(e, t, n) {
			n.d(t, {
				n: () => l
			});
			var r = n(442837),
				i = n(351402);

			function l() {
				let {
					localizedPricingPromo: e,
					hasError: t
				} = (0, r.cj)([i.Z], () => ({
					localizedPricingPromo: i.Z.localizedPricingPromo,
					hasError: i.Z.localizedPricingPromoHasError
				}));
				return t ? null : e
			}
		},
		222727: function(e, t, n) {
			n.d(t, {
				U: () => l
			});
			var r = n(990547),
				i = n(213609);

			function l(e, t) {
				(0, i.Z)({
					type: r.ImpressionTypes.VIEW,
					name: r.ImpressionNames.LOCALIZED_PRICING_UPSELL_VIEWED,
					properties: {
						country_code: t,
						action_location: e
					}
				})
			}
		},
		463230: function(e, t, n) {
			n.d(t, {
				Z: () => E
			});
			var r = n(255367);
			n(73800);
			var i = n(481060),
				l = n(230711),
				a = n(985754),
				o = n(91802),
				c = n(222727),
				s = n(981631),
				u = n(921944),
				d = n(388032),
				_ = n(131715);
			let E = e => {
				let {
					notice: t,
					noticeType: n,
					dismissCurrentNotice: E
				} = e, I = (null == t ? void 0 : t.metadata.premiumSubscription) != null, O = (0, o.n)();
				if ((0, c.U)(s.jXE.NOTIFICATION_BAR, null == O ? void 0 : O.countryCode), null == O) return null;
				let p = O.countryCode,
					T = O.currency,
					S = O.paymentSourceTypes.length > 0;
				return (0, r.jsxs)(i.qXd, {
					color: I ? i.DM8.BRAND : i.DM8.PREMIUM_TIER_2,
					children: [(0, r.jsx)(i.RyX, {
						onClick: () => E(u.L.UNKNOWN),
						noticeType: n
					}), !I && (0, r.jsx)(i.SrA, {
						size: "md",
						color: "currentColor",
						className: _.premiumIcon
					}), (0, a.Gv)(p, T, S, I), (0, r.jsx)(i.NoS, {
						onClick: () => {
							E(u.L.UNKNOWN), l.Z.open(s.oAB.PREMIUM)
						},
						noticeType: n,
						children: d.intl.string(d.t.hvVgAQ)
					})]
				})
			}
		},
		246965: function(e, t, n) {
			n.d(t, {
				Z: () => p
			}), n(415506);
			var r = n(255367);
			n(73800);
			var i = n(990547),
				l = n(481060),
				a = n(774078),
				o = n(100527),
				c = n(906732),
				s = n(213609),
				u = n(963249),
				d = n(639119),
				_ = n(474936),
				E = n(981631),
				I = n(388032),
				O = n(131715);
			let p = function(e) {
				var t;
				let {
					dismissCurrentNotice: n,
					subscriptionTier: p
				} = e, {
					analyticsLocations: T
				} = (0, c.ZP)(function(e) {
					switch (e) {
						case _.Si.TIER_0:
							return o.Z.PREMIUM_TIER_0_TRIAL_ENDING_NOTICE;
						case _.Si.TIER_2:
							return o.Z.PREMIUM_TIER_2_TRIAL_ENDING_NOTICE;
						default:
							throw Error("Unsupported subscription tier: ".concat(e))
					}
				}(p)), S = (0, d.N)(), N = (0, a.Z)(null != S && null != S.expires_at ? Date.parse(S.expires_at) : 0), f = null == S || (null == (t = S.subscription_trial) ? void 0 : t.sku_id) !== p || null == S.expires_at || Object.values(N).every(e => 0 === e);
				return ((0, s.Z)({
					type: i.ImpressionTypes.VIEW,
					name: i.ImpressionNames.TRIAL_NOTICE,
					properties: {
						trial_id: null == S ? void 0 : S.trial_id
					}
				}, {
					disableTrack: f
				}), f) ? null : (0, r.jsxs)(l.qXd, {
					color: function(e) {
						switch (e) {
							case _.Si.TIER_0:
								return l.DM8.PREMIUM_TIER_0;
							case _.Si.TIER_2:
								return l.DM8.PREMIUM_TIER_2;
							default:
								throw Error("Unsupported subscription tier: ".concat(e))
						}
					}(p),
					children: [(0, r.jsx)(l.RyX, {
						onClick: n
					}), (0, r.jsx)(l.SrA, {
						size: "md",
						color: "currentColor",
						className: O.premiumIcon
					}), function(e, t) {
						switch (e) {
							case _.Si.TIER_0:
								return t.days > 0 ? I.intl.formatToPlainString(I.t.sP5OqK, {
									days: t.days
								}) : t.hours > 0 ? I.intl.formatToPlainString(I.t["7Lhfu7"], {
									hours: t.hours
								}) : I.intl.formatToPlainString(I.t.coDiS0, {
									minutes: Math.max(t.minutes, 1)
								});
							case _.Si.TIER_2:
								return t.days > 0 ? I.intl.formatToPlainString(I.t["4prs5e"], {
									days: t.days
								}) : t.hours > 0 ? I.intl.formatToPlainString(I.t.OD5nIS, {
									hours: t.hours
								}) : I.intl.formatToPlainString(I.t.rvyXjI, {
									minutes: Math.max(t.minutes, 1)
								});
							default:
								throw Error("Unsupported subscription tier: ".concat(e))
						}
					}(p, N), (0, r.jsx)(l.EyT, {
						onClick: () => {
							(0, u.Z)({
								trialId: S.trial_id,
								subscriptionTier: p,
								analyticsLocations: T,
								analyticsObject: {
									page: E.ZY5.IN_APP,
									section: E.jXE.NOTIFICATION_BAR,
									object: E.qAy.BUTTON_CTA
								}
							})
						},
						children: function(e) {
							switch (e) {
								case _.Si.TIER_0:
									return I.intl.string(I.t.mCG029);
								case _.Si.TIER_2:
									return I.intl.string(I.t["7590PT"]);
								default:
									throw Error("Unsupported subscription tier: ".concat(e))
							}
						}(p)
					})]
				})
			}
		},
		801249: function(e, t, n) {
			let r;
			n.d(t, {
				Z: () => u
			});
			var i, l = n(442837),
				a = n(570140);

			function o(e, t, n) {
				return t in e ? Object.defineProperty(e, t, {
					value: n,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : e[t] = n, e
			}
			let c = {
				lastGuildDismissedTime: {}
			};
			class s extends(i = l.ZP.DeviceSettingsStore) {
				initialize() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : c;
					r = e
				}
				getUserAgnosticState() {
					return r
				}
				getLastGuildDismissedTime(e) {
					return r.lastGuildDismissedTime[e]
				}
			}
			o(s, "displayName", "ApplicationSubscriptionChannelNoticeStore"), o(s, "persistKey", "ApplicationSubscriptionChannelNoticeStore");
			let u = new s(a.Z, {
				APPLICATION_SUBSCRIPTIONS_CHANNEL_NOTICE_DISMISSED: function(e) {
					let {
						guildId: t
					} = e;
					r.lastGuildDismissedTime[t] = Date.now()
				}
			})
		},
		245315: function(e, t, n) {
			n.d(t, {
				BF: () => d,
				QA: () => u,
				cp: () => s
			});
			var r = n(367907),
				i = n(368859),
				l = n(626135),
				a = n(135899),
				o = n(981631),
				c = n(943702);

			function s(e) {
				return (0, i.Z)(e) && e.messageReference.guild_id === a.M_ || null != e.author && e.author.id === a.c9
			}

			function u() {
				return c
			}
			let d = e => {
				l.default.track(o.rMx.USER_FLOW_TRANSITION, function(e) {
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
					flow_type: a.tA,
					from_step: e.fromStep,
					to_step: e.toStep
				}, (0, r.hH)(e.guildId)))
			}
		},
		610674: function(e, t, n) {
			n.d(t, {
				Z: () => r
			});
			let r = "https://dis.gd/appeal"
		},
		477734: function(e, t, n) {
			n.d(t, {
				X$: () => i,
				_f: () => l
			}), n(906732);
			let r = (0, n(818083).B)({
				kind: "user",
				id: "2023-08_remix_ga",
				label: "Remix General Available",
				defaultConfig: {
					canSeeRemixBadge: !1,
					canRemix: !1,
					isNitroPerk: !1
				},
				treatments: [{
					id: 1,
					label: "Remix for Nitro Subscribers",
					config: {
						canSeeRemixBadge: !0,
						canRemix: !0,
						isNitroPerk: !0
					}
				}, {
					id: 3,
					label: "Upsell Remix for Non-Nitro Users",
					config: {
						canSeeRemixBadge: !0,
						canRemix: !1,
						isNitroPerk: !0
					}
				}, {
					id: 5,
					label: "Remix GA for everyone",
					config: {
						canSeeRemixBadge: !0,
						canRemix: !0,
						isNitroPerk: !1
					}
				}]
			});

			function i() {
				return r.useExperiment({
					location: "canSeeRemixBadge"
				}, {
					autoTrackExposure: !0
				}).canSeeRemixBadge
			}

			function l() {
				return !!r.useExperiment({
					location: "isRemixANitroPerkHook"
				}, {
					autoTrackExposure: !0
				}).isNitroPerk
			}
		},
		523255: function(e, t, n) {
			n.d(t, {
				SI: () => s,
				hZ: () => d
			});
			var r = n(913527),
				i = n.n(r),
				l = n(835913),
				a = n(675478),
				o = n(581883),
				c = n(905567);
			let s = e => {
					var t;
					if (!u(e)) return !1;
					let n = null == (t = o.Z.settings.userContent) ? void 0 : t.safetyUserSentimentNoticeDismissedAt,
						r = null != n ? l.E.toDate(n) : void 0,
						a = null != r ? i()().diff(r, "days") : null;
					if (null != n && !(null != a && a > 30)) return !1;
					let {
						isEligible: s
					} = c.C.getCurrentConfig({
						location: "657a81_1"
					}, {
						autoTrackExposure: !0
					});
					return s
				},
				u = e => null != e && Date.now() - e.createdAt.getTime() > 2592e6,
				d = () => {
					let e = l.E.now();
					a.hW.updateAsync("userContent", t => {
						t.safetyUserSentimentNoticeDismissedAt = e
					}, a.fy.INFREQUENT_USER_ACTION)
				}
		},
		970850: function(e, t, n) {
			n.d(t, {
				Z: () => c
			}), n(388685), n(49124);
			var r = n(73800),
				i = n(442837),
				l = n(603263),
				a = n(768119),
				o = n(981631);

			function c(e) {
				let {
					searchId: t
				} = e, [n, c] = r.useState(o.QIO.NEWEST), s = (0, i.e7)([a.Z], () => a.Z.getQuery(t)), u = r.useRef(null);
				return r.useEffect(() => {
					JSON.stringify(u.current) !== JSON.stringify(s) && (c(l.Vj({
						sort_by: null == s ? void 0 : s.sort_by,
						sort_order: null == s ? void 0 : s.sort_order
					})), u.current = s)
				}, [s]), {
					searchMode: n,
					setSearchMode: c
				}
			}
		},
		251285: function(e, t, n) {
			n.d(t, {
				G: () => T,
				Z: () => S
			}), n(388685), n(539854);
			var r = n(442837),
				i = n(963374),
				l = n(735020),
				a = n(627050),
				o = n(905405),
				c = n(786761),
				s = n(937889),
				u = n(903488),
				d = n(416638),
				_ = n(23750),
				E = n(699516),
				I = n(768119);

			function O(e, t) {
				let [n] = t, r = n.getMessage(e.id, e.channel_id);
				return null != r && (e = e.merge({
					attachments: r.attachments,
					embeds: r.embeds
				})), e
			}

			function p(e) {
				return (0, r.e7)([E.Z], () => {
					let t = 0,
						n = 0;
					return [e.map(e => e.filter(e => {
						let r = E.Z.isBlockedForMessage(e),
							i = E.Z.isIgnoredForMessage(e);
						return r && e.isSearchHit ? t++ : i && e.isSearchHit && n++, !r && !i || e.isSearchHit
					})), t, n]
				}, [e], r.pF)
			}

			function T(e) {
				let t = (0, o.p)(),
					[n, a, c] = p((0, r.e7)([I.Z, u.Z, l.Z], () => {
						var n;
						let r = (0, d.WJ)(e),
							a = I.Z.getSearchResultsQuery(r),
							o = u.Z.getMessages(r);
						if (null == o || 0 === o.length) return [];
						let c = (0, i.nC)(null != (n = null == a ? void 0 : a.content) ? n : ""),
							E = [];
						return o.forEach(e => {
							let n = new _.ZP(e);
							(n = O(n, [l.Z])).set("customRenderedContent", (0, s.ZP)(n, {
								postProcessor: c,
								allowHeading: !0,
								allowList: !0,
								shouldFilterKeywords: t
							})), E.push([n])
						}), E
					}, [e, t], r.pF));
				return {
					searchResults: n,
					blockCount: a,
					ignoreCount: c
				}
			}

			function S(e) {
				let t = (0, o.p)(),
					n = a.d.useExperiment({
						location: "useMessageRenderedContent"
					}).enabled,
					[u, d, _] = p((0, r.e7)([I.Z, l.Z], () => {
						var r;
						let a = I.Z.getQuery(e),
							o = I.Z.getRawResults(e);
						if (null == a || null == o) return [];
						let u = (0, i.nC)(null != (r = a.content) ? r : "");
						return o.map(e => e.map(e => {
							let r = O((0, c.e5)(e), [l.Z]);
							return r.isSearchHit ? r.set("customRenderedContent", (0, s.ZP)(r, {
								postProcessor: u,
								allowHeading: !0,
								allowList: !0,
								allowGameMentions: n,
								shouldFilterKeywords: t
							})) : r
						}))
					}, [e, t, n], r.pF));
				return {
					searchResults: u,
					blockCount: d,
					ignoreCount: _
				}
			}
		},
		611004: function(e, t, n) {
			n.d(t, {
				Z: () => s
			});
			var r = n(603263),
				i = n(977885),
				l = n(416638),
				a = n(652399),
				o = n(981631),
				c = n(862825);
			let s = {
				fetchCrossDMMessages: function(e) {
					let {
						searchContext: t,
						selectedPageIndex: n,
						queryString: s,
						searchMode: u
					} = e, d = (0, l.WJ)(t);
					r.Gn(d), r.QY(d, !1), r.h7(d, s), i.Z.clearSearchState(d), i.Z.fetchMessages({
						searchContext: t,
						searchTabs: [c.sR.MESSAGES],
						searchQueryString: s,
						searchMode: u,
						getId: () => d,
						getLimit: () => o.vpv,
						onFetchStart: e => {
							let {
								searchQueryString: i,
								searchQuery: l
							} = e;
							r.Vs(d, i, l, n * o.vpv), (0, a.tI)({
								searchType: t.type,
								searchId: d,
								query: l,
								queryString: i
							})
						},
						pagination: {
							offset: n * o.vpv
						},
						trackExactTotalHits: !0
					})
				}
			}
		},
		416638: function(e, t, n) {
			n.d(t, {
				Tm: () => l,
				WJ: () => a,
				s5: () => o
			}), n(539854), n(997841), n(913527);
			var r = n(592125);
			n(630388), n(862825);
			var i = n(981631);

			function l(e) {
				switch (e.type) {
					case i.aib.GUILD:
						return e.guildId;
					case i.aib.GUILD_CHANNEL:
					case i.aib.CHANNEL:
					case i.aib.THREAD:
						return e.channelId;
					case i.aib.DMS:
					case i.aib.FAVORITES:
						return e.type
				}
			}

			function a(e) {
				switch (e.type) {
					case i.aib.GUILD:
					case i.aib.GUILD_CHANNEL:
						return e.guildId;
					case i.aib.CHANNEL:
					case i.aib.THREAD:
						return e.channelId;
					case i.aib.DMS:
					case i.aib.FAVORITES:
						return e.type
				}
			}

			function o(e) {
				switch (e.type) {
					case i.aib.GUILD_CHANNEL:
					case i.aib.GUILD:
						return e.guildId;
					case i.aib.CHANNEL:
						var t;
						let n = r.Z.getChannel(e.channelId);
						return null != (t = null == n ? void 0 : n.guild_id) ? t : null;
					default:
						return null
				}
			}
			n(388032)
		},
		305587: function(e, t, n) {
			n.d(t, {
				Xs: () => i
			});
			let r = (0, n(818083).B)({
				kind: "user",
				id: "2024-09_dm_mute_feedback",
				label: "DM Mute Feedback Experiment",
				defaultConfig: {
					enabled: !1
				},
				treatments: [{
					id: 1,
					label: "Enable DM Mute Feedback Survey",
					config: {
						enabled: !0
					}
				}]
			});

			function i(e) {
				let {
					enabled: t
				} = r.getCurrentConfig({
					location: e
				}, {
					autoTrackExposure: !0
				});
				return t
			}
		},
		101879: function(e, t, n) {
			n.d(t, {
				Z: () => _
			}), n(388685);
			var r = n(255367),
				i = n(704215),
				l = n(481060),
				a = n(243778),
				o = n(496729),
				c = n(987562),
				s = n(981631),
				u = n(921944),
				d = n(388032);

			function _() {
				let [e, t] = (0, a.bf)(i.z.NAGBAR_NOTICE_IGNORE_USER_FEEDBACK, {
					cooldownDurationMs: c.pv
				});
				return e !== i.z.NAGBAR_NOTICE_IGNORE_USER_FEEDBACK ? null : (0, r.jsxs)(l.qXd, {
					color: l.DM8.BRAND,
					children: [(0, r.jsx)(l.RyX, {
						onClick: () => t(u.L.DISMISS),
						noticeType: s.kVF.IGNORE_USER_FEEDBACK_NAGBAR
					}), d.intl.string(d.t.XkeW9P), (0, r.jsx)(l.NoS, {
						onClick: () => {
							(0, o.v3)(), t(u.L.TAKE_ACTION)
						},
						noticeType: s.kVF.IGNORE_USER_FEEDBACK_NAGBAR,
						children: d.intl.string(d.t.vcdNKi)
					})]
				})
			}
		},
		496729: function(e, t, n) {
			n.d(t, {
				ZZ: () => _,
				sT: () => d,
				v3: () => E
			});
			var r = n(255367),
				i = n(704215),
				l = n(481060),
				a = n(570140),
				o = n(266454),
				c = n(592125),
				s = n(305587);

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

			function d(e) {
				let {
					channelId: t,
					location: n
				} = e, r = c.Z.getChannel(t), l = (0, o.zu)(i.z.USER_DM_MUTE_FEEDBACK);
				null != r && r.isDM() && !l && (0, s.Xs)(n) && a.Z.dispatch({
					type: "USER_DM_MUTE_SHOW_FEEDBACK",
					channel: r
				})
			}

			function _() {
				(0, l.ZDy)(async () => {
					let {
						default: e
					} = await Promise.all([n.e("60137"), n.e("37332")]).then(n.bind(n, 180970));
					return t => (0, r.jsx)(e, u({}, t))
				})
			}

			function E() {
				(0, l.ZDy)(async () => {
					let {
						default: e
					} = await Promise.all([n.e("60137"), n.e("46355")]).then(n.bind(n, 746147));
					return t => (0, r.jsx)(e, u({}, t))
				})
			}
		},
		471253: function(e, t, n) {
			n.d(t, {
				DT: () => g,
				Ef: () => y,
				HO: () => P,
				NZ: () => b,
				Pq: () => C,
				Q1: () => N,
				RK: () => m,
				_0: () => f,
				hz: () => R,
				yi: () => A
			});
			var r = n(512722),
				i = n.n(r),
				l = n(149765),
				a = n(544891),
				o = n(493683);
			n(749210);
			var c = n(911969),
				s = n(367907),
				u = n(944486),
				d = n(979651),
				_ = n(700785),
				E = n(922482),
				I = n(192079),
				O = n(706058),
				p = n(590415),
				T = n(981631);

			function S(e) {
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
				let n = e.getGuildId();
				return i()(null != n, "This channel cannot be guildless."), t && (0, s.yw)(T.rMx.REQUEST_TO_SPEAK_INITIATED, S({}, (0, I.s$)(e))), a.tn.patch({
					url: T.ANM.UPDATE_VOICE_STATE(n),
					body: {
						request_to_speak_timestamp: t ? new Date().toISOString() : null,
						channel_id: e.id
					},
					rejectWithError: !1
				})
			}

			function f(e, t) {
				let n = e.getGuildId();
				return i()(null != n, "This channel cannot be guildless."), a.tn.patch({
					url: T.ANM.UPDATE_VOICE_STATE(n, t),
					body: {
						suppress: !1,
						request_to_speak_timestamp: new Date().toISOString(),
						channel_id: e.id
					},
					rejectWithError: !1
				})
			}

			function m(e, t) {
				let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
					r = null == e ? void 0 : e.getGuildId();
				i()(null != r, "This channel cannot be guildless.");
				let l = d.Z.getVoiceStateForChannel(e.id);
				return (0, p.gf)(l) !== p.xO.REQUESTED_TO_SPEAK_AND_AWAITING_USER_ACK || t || (0, s.yw)(T.rMx.PROMOTED_TO_SPEAKER, S({}, (0, I.s$)(e))), a.tn.patch({
					url: T.ANM.UPDATE_VOICE_STATE(r),
					body: S({
						suppress: t,
						request_to_speak_timestamp: null,
						channel_id: e.id
					}, n ? {
						silent: n
					} : {}),
					rejectWithError: !1
				})
			}

			function A(e) {
				let t = null == e ? void 0 : e.getGuildId();
				return i()(null != t, "This channel cannot be guildless."), a.tn.patch({
					url: T.ANM.UPDATE_VOICE_STATE(t),
					body: {
						suppress: !0,
						channel_id: e.id,
						self_video: !1,
						self_stream: !1
					},
					rejectWithError: !1
				})
			}

			function g(e, t, n) {
				let r = e.getGuildId();
				return i()(null != r, "This channel cannot be guildless."), a.tn.patch({
					url: T.ANM.UPDATE_VOICE_STATE(r, t),
					body: {
						suppress: n,
						channel_id: e.id
					},
					rejectWithError: !1
				})
			}

			function R(e, t) {
				if (null == t || null == e) return;
				let n = t.getGuildId();
				return i()(null != n, "This channel cannot be guildless."), g(t, e.id, !0), a.tn.patch({
					url: T.ANM.UPDATE_VOICE_STATE(n, e.id),
					body: {
						suppress: !0,
						channel_id: t.id,
						self_video: !1,
						self_stream: !1
					},
					rejectWithError: !1
				})
			}

			function C(e, t, n) {
				let r = e.getGuildId();
				i()(null != r, "Channel cannot be guildless");
				let a = e.permissionOverwrites[r],
					s = S({
						id: r,
						type: c.BN.ROLE,
						allow: _.Hn,
						deny: _.Hn
					}, a);
				n ? (s.allow = l.IH(s.allow, t), s.deny = l.Od(s.deny, t)) : (s.allow = l.Od(s.allow, t), s.deny = l.IH(s.deny, t)), o.Z.updatePermissionOverwrite(e.id, s)
			}
			async function P(e, t, n, r) {
				if ("" === t) return;
				u.Z.getVoiceChannelId() !== e.id && (0, E.TM)(e);
				let i = await (0, O.me)(e.id, t, n, r);
				return m(e, !1, !0), i
			}
			async function y(e, t, n) {
				if ("" !== t) return await (0, O.Dk)(e.id, t, n)
			}
			async function b(e) {
				await (0, O.Ix)(e.id)
			}
		},
		623633: function(e, t, n) {
			n.d(t, {
				Z: () => a
			});
			var r = n(442837),
				i = n(592125),
				l = n(944486);

			function a() {
				return (0, r.e7)([l.Z, i.Z], () => {
					let e = l.Z.getVoiceChannelId();
					if (null != e) {
						let t = i.Z.getChannel(e);
						if (null == t ? void 0 : t.isGuildStageVoice()) return t
					}
					return null
				})
			}
		},
		852923: function(e, t, n) {
			n.d(t, {
				Z: () => T
			});
			var r = n(255367);
			n(73800);
			var i = n(120356),
				l = n.n(i),
				a = n(755721),
				o = n(481060),
				c = n(592125),
				s = n(944486),
				u = n(471253),
				d = n(623633),
				_ = n(930180),
				E = n(388032),
				I = n(957991);

			function O(e) {
				let t = s.Z.getVoiceChannelId();
				if (null == t) return;
				let n = c.Z.getChannel(t);
				null != n && (0, u.RK)(n, e)
			}

			function p(e) {
				var t, n;
				let {
					channelId: i
				} = e, a = null != (t = (0, _._d)(i)) ? t : 0, o = null != (n = (0, _.K3)(i)) ? n : 0;
				return a > 0 && o > 0 ? (0, r.jsx)("div", {
					className: I.blocked,
					children: (0, r.jsx)("div", {
						className: l()(I.blockedText, I.noIcon),
						children: E.intl.string(E.t.xlJRfn)
					})
				}) : a > 0 ? (0, r.jsx)("div", {
					className: I.blocked,
					children: (0, r.jsx)("div", {
						className: l()(I.blockedText, I.noIcon),
						children: E.intl.string(E.t.WYad9f)
					})
				}) : o > 0 ? (0, r.jsx)("div", {
					className: I.blocked,
					children: (0, r.jsx)("div", {
						className: l()(I.blockedText, I.noIcon),
						children: E.intl.string(E.t.eHq2OD)
					})
				}) : null
			}

			function T() {
				let e = (0, d.Z)();
				return null == e ? null : (0, r.jsxs)(o.qXd, {
					className: I.container,
					color: o.DM8.DEFAULT,
					children: [(0, r.jsx)("div", {
						children: E.intl.string(E.t.Ul1RJS)
					}), (0, r.jsx)(p, {
						channelId: e.id
					}), (0, r.jsx)(a.zx, {
						className: I.acceptButton,
						size: a.zx.Sizes.MIN,
						color: a.zx.Colors.WHITE,
						onClick: () => O(!1),
						children: (0, r.jsx)(o.Text, {
							className: I.acceptText,
							variant: "text-xs/normal",
							color: "none",
							children: E.intl.string(E.t.MpO0p6)
						})
					}), (0, r.jsx)(a.zx, {
						className: I.declineButton,
						look: a.zx.Looks.OUTLINED,
						size: a.zx.Sizes.MIN,
						color: a.zx.Colors.WHITE,
						onClick: () => O(!0),
						children: (0, r.jsx)(o.Text, {
							className: I.declineText,
							variant: "text-xs/normal",
							color: "none",
							children: E.intl.string(E.t["1YDv7e"])
						})
					})]
				})
			}
		},
		822857: function(e, t, n) {
			n.d(t, {
				CE: () => s,
				WX: () => u,
				hl: () => d
			});
			var r = n(211242),
				i = n(594174),
				l = n(603077),
				a = n(278401),
				o = n(907584);
			let c = e => {
					let t = i.default.getCurrentUser();
					return !(null != t && t.isStaff()) && !l.Z.getCurrentConfig(e).enabled
				},
				s = e => c(e) ? {
					enabled: !1
				} : {
					enabled: o.Z.getCurrentConfig(e).enabled
				},
				u = e => {
					let t = o.Z.useExperiment(e);
					return c(e) ? {
						enabled: !1
					} : {
						enabled: t.enabled
					}
				},
				d = e => {
					let t = (0, r.Q)(),
						{
							enabled: n
						} = u(e),
						i = a.Z.useExperiment(e);
					return t ? {
						enabled: !1
					} : {
						enabled: n && i.enabled
					}
				}
		},
		933429: function(e, t, n) {
			n.d(t, {
				ZP: () => eq,
				m9: () => eU,
				nA: () => ev,
				o: () => eM
			}), n(388685), n(35282);
			var r, i = n(913527),
				l = n.n(i),
				a = n(442837),
				o = n(743426),
				c = n(704215),
				s = n(433517),
				u = n(570140),
				d = n(579806),
				_ = n(726542),
				E = n(812206),
				I = n(223892),
				O = n(674525),
				p = n(266454),
				T = n(605236),
				S = n(458725),
				N = n(915525),
				f = n(353926),
				m = n(594190),
				A = n(38618),
				g = n(569545),
				R = n(528011),
				C = n(487419),
				P = n(715903),
				y = n(223606),
				b = n(160404),
				D = n(41776),
				h = n(332473),
				U = n(30684),
				M = n(646476),
				v = n(616106),
				Z = n(518638),
				L = n(1844),
				j = n(621615),
				k = n(417626),
				x = n(569984),
				F = n(338247),
				G = n(523255),
				w = n(867003),
				V = n(768419),
				B = n(590415),
				W = n(581883),
				H = n(199902),
				z = n(314897),
				Y = n(881998),
				K = n(463395),
				q = n(592125),
				X = n(553795),
				Q = n(427123),
				J = n(271383),
				$ = n(430824),
				ee = n(131951),
				et = n(292959),
				en = n(496675),
				er = n(571474),
				ei = n(19780),
				el = n(944486),
				ea = n(914010),
				eo = n(215427),
				ec = n(246946),
				es = n(558724),
				eu = n(23434),
				ed = n(594174),
				e_ = n(979651),
				eE = n(351402),
				eI = n(853872),
				eO = n(78839),
				ep = n(431),
				eT = n(580130),
				eS = n(695103),
				eN = n(358085),
				ef = n(74538),
				em = n(922156),
				eA = n(436181),
				eg = n(941128),
				eR = n(981631),
				eC = n(188785),
				eP = n(474936),
				ey = n(46140),
				eb = n(231338),
				eD = n(65154);

			function eh(e, t, n) {
				return t in e ? Object.defineProperty(e, t, {
					value: n,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : e[t] = n, e
			}
			let eU = {
					[eR.kVF.LOCALIZED_PRICING]: c.z.NAGBAR_NOTICE_LOCALIZED_PRICING,
					[eR.kVF.DOWNLOAD_NAG]: c.z.NAGBAR_NOTICE_DOWNLOAD,
					[eR.kVF.CONNECT_SPOTIFY]: c.z.NAGBAR_NOTICE_CONNECT_SPOTIFY,
					[eR.kVF.CONNECT_PLAYSTATION]: c.z.NAGBAR_NOTICE_CONNECT_PLAYSTATION,
					[eR.kVF.MFA_SMS_BACKUP]: c.z.NAGBAR_NOTICE_MFA_SMS_BACKUP,
					[eR.kVF.PREMIUM_TIER_2_TRIAL_ENDING]: c.z.NAGBAR_NOTICE_PREMIUM_TIER_TWO_TRIAL_ENDING,
					[eR.kVF.PREMIUM_REACTIVATE]: c.z.NAGBAR_NOTICE_PREMIUM_REACTIVATE,
					[eR.kVF.BOUNCED_EMAIL_DETECTED]: c.z.NAGBAR_BOUNCED_EMAIL_NOTICE,
					[eR.kVF.ACTIVATE_SERVER_SUBSCRIPTION]: c.z.NAGBAR_ACTIVATE_SERVER_SUBSCRIPTION,
					[eR.kVF.PREMIUM_TIER_0_TRIAL_ENDING]: c.z.NAGBAR_NOTICE_PREMIUM_TIER_0_TRIAL_ENDING,
					[eR.kVF.POMELO_ELIGIBLE]: c.z.NAGBAR_NOTICE_POMELO,
					[eR.kVF.CHECKOUT_RECOVERY_NAGBAR]: c.z.CHECKOUT_RECOVERY_NAGBAR,
					[eR.kVF.REPORT_TO_MOD_SURVEY]: c.z.REPORT_TO_MOD_SURVEY_NOTICE
				},
				eM = {
					[eR.kVF.GIFTING_PROMOTION_REMINDER]: c.z.GIFTING_PROMOTION_REMINDER
				},
				ev = {
					[eR.kVF.OUTBOUND_PROMOTION]: c.z.THIRD_PARTY_OUTBOUND_PROMO_NAGBAR
				},
				eZ = {
					[eR.kVF.DETECTED_OFF_PLATFORM_PREMIUM_PERK_UPSELL]: "hideDetectedOffPlatformPremiumPerkUpsell",
					[eR.kVF.PREMIUM_UNCANCEL]: "hideUncancelReminder",
					[eR.kVF.PREMIUM_MISSING_PAYMENT]: "hideMissingPaymentReminder",
					[eR.kVF.PREMIUM_PAST_DUE_MISSING_PAYMENT]: "hidePastDueMissingPaymentReminder",
					[eR.kVF.PREMIUM_PAST_DUE_INVALID_PAYMENT]: "hidePastDueInvalidPaymentReminder",
					[eR.kVF.PREMIUM_PAST_DUE_ONE_TIME_PAYMENT]: "hidePastDueOneTimePaymentReminder",
					[eR.kVF.AUTO_MODERATION_MENTION_RAID_DETECTION]: "hideAutoModerationMentionRaidDetectionNotice",
					[eR.kVF.GUILD_RAID_NOTIFICATION]: "hideGuildRaidDetectionNotice",
					[eR.kVF.WIN32_DEPRECATED_MESSAGE]: "hideWin32DeprecationMessageNotice",
					[eR.kVF.WIN7_8_DEPRECATED_MESSAGE]: "hideWin78DeprecationMessageNotice",
					[eR.kVF.PREMIUM_TIER_2_TRIAL_ENDING]: "hidePremiumTier2TrialOfferEndingNotice",
					[eR.kVF.BLOCK_USER_FEEDBACK_NAGBAR]: "hideNagbarBlockUserFeedbackNotice",
					[eR.kVF.MACOS_19_DEPRECATED_MESSAGE]: "hideMacOS19DeprecationMessageNotice"
				},
				eL = new Set([eR.kVF.NO_INPUT_DETECTED, eR.kVF.NO_INPUT_DEVICES_DETECTED, eR.kVF.STREAMER_MODE, eR.kVF.VIDEO_UNSUPPORTED_BROWSER, eR.kVF.SPOTIFY_AUTO_PAUSED, eR.kVF.DISPATCH_ERROR, eR.kVF.DISPATCH_ERROR, eR.kVF.DISPATCH_INSTALL_SCRIPT_PROGRESS, eR.kVF.BLOCKED_BY_PROXY]),
				ej = {},
				ek = {},
				ex = Object.freeze({
					id: null,
					message: null,
					buttonText: null,
					callback: void 0,
					metadata: null
				}),
				eF = null;

			function eG(e) {
				return eZ[e] + "-untilAtLeast"
			}

			function ew(e, t, n) {
				if (null == e) return;
				let r = eZ[e];
				(null == r || t || s.K.set(r, !0), eL.has(e) && (ej[e] = !0), null != n && null != r) ? s.K.set(eG(e), n.format("YYYY-MM-DDTHH:mm:ss.SSSZ")): s.K.remove(eG(e))
			}

			function eV(e) {
				if (null == e) return !1;
				let t = eM[e];
				if (null != t) return (0, T.H4)(t).isDismissed;
				let n = eU[e];
				if (null != n) return (0, p.zu)(n);
				let r = eZ[e];
				if (null != r) {
					let t = function(e) {
						let t = s.K.get(eG(e));
						return null != t ? l()(t) : null
					}(e);
					if (null != t) return null == t ? void 0 : t.isAfter(l()())
				}
				let i = ej[e];
				return !!i || (null != r && "" !== r ? s.K.get(r) : !!eL.has(e) && i)
			}
			let eB = [eR.kVF.QUARANTINED, eR.kVF.AUTOMOD_QUARANTINED_USER_PROFILE, eR.kVF.VIEWING_ROLES, eR.kVF.INVITED_TO_SPEAK, eR.kVF.LURKING_GUILD, eR.kVF.VOICE_DISABLED, eR.kVF.NO_INPUT_DEVICES_DETECTED, eR.kVF.NO_INPUT_DETECTED, eR.kVF.HARDWARE_MUTE, eR.kVF.H264_DISABLED, eR.kVF.DISPATCH_ERROR, eR.kVF.DISPATCH_INSTALL_SCRIPT_PROGRESS, eR.kVF.SPOTIFY_AUTO_PAUSED, eR.kVF.WIN32_DEPRECATED_MESSAGE, eR.kVF.WIN7_8_DEPRECATED_MESSAGE, eR.kVF.MACOS_19_DEPRECATED_MESSAGE, eR.kVF.BLOCKED_BY_PROXY, eR.kVF.VOICE_CONNECTED_LAST_SESSION, eR.kVF.AUTO_MODERATION_MENTION_RAID_DETECTION, eR.kVF.GUILD_RAID_NOTIFICATION, eR.kVF.GIFTING_PROMOTION_REMINDER, eR.kVF.QUESTS_PROGRESS_INTERRUPTION, eR.kVF.UNCLAIMED_ACCOUNT, eR.kVF.POMELO_ELIGIBLE, eR.kVF.PENDING_MEMBER, eR.kVF.CHECKOUT_RECOVERY_NAGBAR, eR.kVF.OUTBOUND_PROMOTION, eR.kVF.CORRUPT_INSTALLATION, eR.kVF.VIDEO_UNSUPPORTED_BROWSER, eR.kVF.DETECTED_OFF_PLATFORM_PREMIUM_PERK, eR.kVF.DETECTED_OFF_PLATFORM_PREMIUM_PERK_UPSELL, eR.kVF.STREAMER_MODE, eR.kVF.SCHEDULED_MAINTENANCE, eR.kVF.BOUNCED_EMAIL_DETECTED, eR.kVF.UNVERIFIED_ACCOUNT, eR.kVF.PREMIUM_TIER_2_TRIAL_ENDING, eR.kVF.PREMIUM_TIER_0_TRIAL_ENDING, eR.kVF.PREMIUM_UNCANCEL, eR.kVF.PREMIUM_MISSING_PAYMENT, eR.kVF.PREMIUM_PAST_DUE_INVALID_PAYMENT, eR.kVF.PREMIUM_PAST_DUE_MISSING_PAYMENT, eR.kVF.PREMIUM_PAST_DUE_ONE_TIME_PAYMENT, eR.kVF.PREMIUM_REACTIVATE, eR.kVF.ACTIVATE_SERVER_SUBSCRIPTION, eR.kVF.MFA_SMS_BACKUP, eR.kVF.APPLICATION_TEST_MODE, eR.kVF.LOCALIZED_PRICING, eR.kVF.DOWNLOAD_NAG, eR.kVF.CONNECT_SPOTIFY, eR.kVF.CONNECT_PLAYSTATION, eR.kVF.SURVEY, eR.kVF.SAFETY_USER_SENTIMENT_NAGBAR, eR.kVF.BLOCK_USER_FEEDBACK_NAGBAR, eR.kVF.IGNORE_USER_FEEDBACK_NAGBAR, eR.kVF.REPORT_TO_MOD_SURVEY],
				eW = [eR.kVF.QUARANTINED, eR.kVF.AUTOMOD_QUARANTINED_USER_PROFILE, eR.kVF.VIEWING_ROLES, eR.kVF.INVITED_TO_SPEAK, eR.kVF.LURKING_GUILD, eR.kVF.VOICE_DISABLED, eR.kVF.NO_INPUT_DETECTED, eR.kVF.HARDWARE_MUTE, eR.kVF.H264_DISABLED, eR.kVF.DISPATCH_ERROR, eR.kVF.DISPATCH_INSTALL_SCRIPT_PROGRESS, eR.kVF.SPOTIFY_AUTO_PAUSED, eR.kVF.BLOCKED_BY_PROXY, eR.kVF.VOICE_CONNECTED_LAST_SESSION, eR.kVF.PENDING_MEMBER, eR.kVF.STREAMER_MODE, eR.kVF.SCHEDULED_MAINTENANCE],
				eH = {
					[eR.kVF.GIFTING_PROMOTION_REMINDER]: {
						predicate: () => {
							let {
								enabled: e
							} = M.Ys.getCurrentConfig({
								location: "NoticeStore"
							}, {
								autoTrackExposure: !1
							}), {
								enabled: t
							} = M.ZP.getCurrentConfig({
								location: "NoticeStore"
							}, {
								autoTrackExposure: !1
							});
							return e && t && (0, T.H4)(c.z.GIFTING_PROMOTION_DESKTOP_FIRST_TIME_COACHMARK).isDismissed && !eV(eR.kVF.GIFTING_PROMOTION_REMINDER)
						}
					},
					[eR.kVF.GUILD_RAID_NOTIFICATION]: {
						predicate: () => (0, R.g)().show && !eV(eR.kVF.GUILD_RAID_NOTIFICATION),
						metadata: () => ({
							dismissUntil: l()().add(3, "hours").toDate()
						})
					},
					[eR.kVF.AUTOMOD_QUARANTINED_USER_PROFILE]: {
						predicate: e => {
							let {
								currentUser: t,
								selectedGuildId: n
							} = e;
							if (null == n) return !1;
							let r = J.ZP.getMember(n, t.id);
							return null != r && !r.isPending && (0, P.EY)(r)
						}
					},
					[eR.kVF.QUARANTINED]: {
						predicate: e => {
							let {
								currentUser: t
							} = e;
							return t.hasFlag(eR.xW$.QUARANTINED)
						}
					},
					[eR.kVF.VIEWING_ROLES]: {
						predicate: e => {
							let {
								selectedGuildId: t
							} = e;
							return b.Z.isViewingRoles(t)
						}
					},
					[eR.kVF.INVITED_TO_SPEAK]: {
						predicate: e => {
							let {
								voiceState: t
							} = e;
							return (0, B.gf)(t) === B.xO.REQUESTED_TO_SPEAK_AND_AWAITING_USER_ACK
						}
					},
					[eR.kVF.LURKING_GUILD]: {
						predicate: e => {
							let {
								selectedGuildId: t
							} = e;
							return null != t && D.Z.isLurking(t)
						}
					},
					[eR.kVF.VOICE_DISABLED]: {
						predicate: () => null != ei.Z.getRemoteDisconnectVoiceChannelId()
					},
					[eR.kVF.VOICE_CONNECTED_LAST_SESSION]: {
						predicate: () => null != ei.Z.getLastSessionVoiceChannelId()
					},
					[eR.kVF.NO_INPUT_DETECTED]: {
						predicate: () => N.Z.hasActiveErrorOfType(S.u.NO_AUDIO_INPUT_DETECTED)
					},
					[eR.kVF.NO_INPUT_DEVICES_DETECTED]: {
						predicate: () => N.Z.hasActiveErrorOfType(S.u.NO_INPUT_DEVICES)
					},
					[eR.kVF.H264_DISABLED]: {
						predicate: e => {
							let {
								voiceChannelId: t
							} = e, n = q.Z.getChannel(t);
							return !ee.Z.getOpenH264() && null != t && e_.Z.hasVideo(t) && null != n && n.isGuildStageVoice()
						}
					},
					[eR.kVF.HARDWARE_MUTE]: {
						predicate: () => ei.Z.isConnected() && ee.Z.isHardwareMute() && ee.Z.isEnableHardwareMuteNotice(),
						metadata: () => {
							let e = ee.Z.getInputDeviceId(),
								t = K.Z.getVendor(e),
								n = K.Z.getModel(e);
							if (null != t && null != n) return {
								vendor: t,
								model: n
							}
						}
					},
					[eR.kVF.DISPATCH_ERROR]: {
						predicate: () => null != em.Z.getLastError(),
						metadata: () => ({
							error: em.Z.getLastError()
						})
					},
					[eR.kVF.DISPATCH_INSTALL_SCRIPT_PROGRESS]: {
						predicate: () => null != eA.Z.getLastProgress(),
						metadata: () => eA.Z.getLastProgress()
					},
					[eR.kVF.SPOTIFY_AUTO_PAUSED]: {
						predicate: () => V.Z.wasAutoPaused()
					},
					[eR.kVF.BLOCKED_BY_PROXY]: {
						predicate: () => !eV(eR.kVF.BLOCKED_BY_PROXY) && k.Z.blockedByProxy && j.Z.getCurrentConfig({
							location: "notice_store"
						}).eligibleForNotice
					},
					[eR.kVF.UNCLAIMED_ACCOUNT]: {
						predicate: e => {
							let {
								currentUser: t
							} = e;
							return null != t && !t.isClaimed()
						}
					},
					[eR.kVF.PENDING_MEMBER]: {
						predicate: e => {
							var t, n, r;
							let {
								selectedGuildId: i,
								currentUser: l
							} = e;
							return null != (r = null != i && null != l && !(null == (t = $.Z.getGuild(i)) ? void 0 : t.features.has(eR.oNc.GUILD_ONBOARDING)) && (null == (n = J.ZP.getMember(i, l.id)) ? void 0 : n.isPending)) && r
						}
					},
					[eR.kVF.OUTBOUND_PROMOTION]: {
						predicate: () => (0, Z.tq)()
					},
					[eR.kVF.CORRUPT_INSTALLATION]: {
						predicate: () => eN.isPlatformEmbedded && (!o.Z.supported() || eg.Z.isCorruptInstallation())
					},
					[eR.kVF.VIDEO_UNSUPPORTED_BROWSER]: {
						predicate: e => {
							let {
								voiceChannelId: t
							} = e;
							return null != t && e_.Z.hasVideo(t) && !ee.Z.supports(eD.AN.VIDEO) && !eV(eR.kVF.VIDEO_UNSUPPORTED_BROWSER)
						}
					},
					[eR.kVF.DETECTED_OFF_PLATFORM_PREMIUM_PERK]: {
						predicate: e => {
							let {
								currentUser: t
							} = e;
							return ef.ZP.canRedeemPremiumPerks(t) && Q.Z.getDetectedOffPlatformPremiumPerks().length > 0
						},
						metadata: () => Q.Z.getDetectedOffPlatformPremiumPerks()[0]
					},
					[eR.kVF.DETECTED_OFF_PLATFORM_PREMIUM_PERK_UPSELL]: {
						predicate: () => !eV(eR.kVF.DETECTED_OFF_PLATFORM_PREMIUM_PERK_UPSELL) && Q.Z.getDetectedOffPlatformPremiumPerks().length > 0,
						metadata: () => Q.Z.getDetectedOffPlatformPremiumPerks()[0]
					},
					[eR.kVF.STREAMER_MODE]: {
						predicate: () => ec.Z.enabled
					},
					[eR.kVF.DOWNLOAD_NAG]: {
						predicate: () => !eN.isPlatformEmbedded && !eV(eR.kVF.DOWNLOAD_NAG)
					},
					[eR.kVF.SCHEDULED_MAINTENANCE]: {
						predicate: () => null != eo.Z.getScheduledMaintenance(),
						metadata: () => {
							let e = eo.Z.getScheduledMaintenance();
							if (null != e) return {
								id: e.id,
								start: new Date(e.scheduled_for),
								end: new Date(e.scheduled_until)
							}
						}
					},
					[eR.kVF.SURVEY]: {
						predicate: () => null != es.Z.getCurrentSurvey(),
						metadata: () => es.Z.getCurrentSurvey()
					},
					[eR.kVF.UNVERIFIED_ACCOUNT]: {
						predicate: e => {
							let {
								currentUser: t
							} = e;
							return (null == t ? void 0 : t.email) != null && !t.verified
						}
					},
					[eR.kVF.BOUNCED_EMAIL_DETECTED]: {
						predicate: e => {
							let {
								currentUser: t
							} = e;
							return null == t ? void 0 : t.hasBouncedEmail
						}
					},
					[eR.kVF.CONNECT_SPOTIFY]: {
						predicate: () => !V.Z.hasConnectedAccount() && m.ZP.isObservedAppRunning(_.Z.get(eR.ABu.SPOTIFY).name) && !eV(eR.kVF.CONNECT_SPOTIFY)
					},
					[eR.kVF.WIN32_DEPRECATED_MESSAGE]: {
						predicate: () => (null === d.Z || void 0 === d.Z ? void 0 : d.Z.os.arch) === "ia32" && (null === d.Z || void 0 === d.Z ? void 0 : d.Z.process.platform) === "win32",
						metadata: () => ({
							dismissUntil: l()().add(5, "days").toDate()
						})
					},
					[eR.kVF.WIN7_8_DEPRECATED_MESSAGE]: {
						predicate: () => {
							if ((null === d.Z || void 0 === d.Z ? void 0 : d.Z.process.platform) === "win32") try {
								return 10 > parseInt(null === d.Z || void 0 === d.Z ? void 0 : d.Z.os.release.split(".")[0])
							} catch (e) {}
							return !1
						},
						metadata: () => ({
							dismissUntil: l()().add(5, "days").toDate()
						})
					},
					[eR.kVF.MACOS_19_DEPRECATED_MESSAGE]: {
						predicate: () => {
							if ((null === d.Z || void 0 === d.Z ? void 0 : d.Z.process.platform) === "darwin") try {
								return 20 > parseInt(null === d.Z || void 0 === d.Z ? void 0 : d.Z.os.release.split(".")[0])
							} catch (e) {}
							return !1
						},
						metadata: () => ({
							dismissUntil: l()().add(5, "days").toDate()
						})
					},
					[eR.kVF.CONNECT_PLAYSTATION]: {
						predicate: () => X.Z.isSuggestedAccountType(eR.ABu.PLAYSTATION) && null == X.Z.getAccount(null, eR.ABu.PLAYSTATION) && !eV(eR.kVF.CONNECT_PLAYSTATION)
					},
					[eR.kVF.PREMIUM_TIER_2_TRIAL_ENDING]: {
						predicate: () => ep.Z.getAlmostExpiringTrialOffers([eP.Si.TIER_2]).length > 0 && !eV(eR.kVF.PREMIUM_TIER_2_TRIAL_ENDING)
					},
					[eR.kVF.PREMIUM_TIER_0_TRIAL_ENDING]: {
						predicate: () => ep.Z.getAlmostExpiringTrialOffers([eP.Si.TIER_0]).length > 0 && !eV(eR.kVF.PREMIUM_TIER_0_TRIAL_ENDING)
					},
					[eR.kVF.PREMIUM_UNCANCEL]: {
						predicate: e => {
							let {
								premiumSubscription: t,
								currentUser: n
							} = e, r = null != t ? l()(t.currentPeriodEnd).diff(l()().startOf("day"), "days") : 0, i = (null == t ? void 0 : t.canceledAt) != null && (null == t ? void 0 : t.status) === eR.O0b.CANCELED && 1 >= l()().diff(l()(t.canceledAt), "days"), a = null != t && l()(t.currentPeriodEnd).isBefore(l()()), o = null != t && t.status === eR.O0b.CANCELED && !a && r <= 7 && r >= 0 && (0, ef.M5)(n, eP.p9.TIER_2) && !i && !n.hasFreePremium() && !t.isPurchasedExternally;
							return !eV(eR.kVF.PREMIUM_UNCANCEL) && o
						},
						metadata: e => {
							var t;
							let {
								premiumSubscription: n
							} = e, r = null != n ? l()(n.currentPeriodEnd).diff(l()().startOf("day"), "days") : 0, i = null != n ? null == (t = (0, ef.Af)(n)) ? void 0 : t.planId : null;
							return {
								daysLeft: r,
								premiumType: null != i ? ef.ZP.getPremiumType(i) : null,
								premiumSubscription: n
							}
						}
					},
					[eR.kVF.PREMIUM_MISSING_PAYMENT]: {
						predicate: e => {
							let {
								premiumSubscription: t,
								currentUser: n
							} = e, r = null != t ? l()(t.currentPeriodEnd).diff(l()().startOf("day"), "days") : 0, i = null != t ? l()(t.currentPeriodEnd).diff(l()(t.currentPeriodStart).startOf("day"), "days") : 0, a = null != t && l()(t.currentPeriodEnd).isBefore(l()()), o = eT.Z.applicationIdsFetched.has(eP.CL), c = eT.Z.getForApplication(eP.CL), s = null != t ? (0, ef.Af)(t) : null, u = null != s ? ef.ZP.getSkuIdForPlan(s.planId) : null, d = null != c && null != s && Array.from(c).filter(e => {
								let {
									skuId: t,
									consumed: n
								} = e;
								return !n && t === u
							}).length > 0, _ = null != t && r <= (i > 14 ? 7 : 2) && r >= 0 && t.status !== eR.O0b.PAST_DUE && !a && o && !d && null === t.paymentSourceId && !n.hasFreePremium() && !t.isPurchasedExternally;
							return !eV(eR.kVF.PREMIUM_MISSING_PAYMENT) && _
						},
						metadata: e => {
							var t;
							let {
								premiumSubscription: n
							} = e, r = null != n ? l()(n.currentPeriodEnd).diff(l()().startOf("day"), "days") : 0, i = null != n ? null == (t = (0, ef.Af)(n)) ? void 0 : t.planId : null;
							return {
								daysLeft: r,
								premiumType: null != i ? ef.ZP.getPremiumType(i) : null,
								premiumSubscription: n
							}
						}
					},
					[eR.kVF.PREMIUM_PAST_DUE_INVALID_PAYMENT]: {
						predicate: e => {
							let {
								premiumSubscription: t,
								currentUser: n
							} = e, r = null != t && null != t.paymentSourceId ? eI.Z.getPaymentSource(t.paymentSourceId) : null, i = null != t && l()(t.currentPeriodEnd).isBefore(l()()), a = null != t && t.status === eR.O0b.PAST_DUE && !i && null != r && r.invalid && !n.hasFreePremium() && !t.isPurchasedExternally;
							return !eV(eR.kVF.PREMIUM_PAST_DUE_INVALID_PAYMENT) && a
						},
						metadata: e => {
							let {
								premiumSubscription: t
							} = e;
							return {
								premiumSubscription: t
							}
						}
					},
					[eR.kVF.PREMIUM_PAST_DUE_MISSING_PAYMENT]: {
						predicate: e => {
							let {
								premiumSubscription: t,
								currentUser: n
							} = e, r = null != t && l()(t.currentPeriodEnd).isBefore(l()()), i = null != t && t.status === eR.O0b.PAST_DUE && !r && null === t.paymentSourceId && !n.hasFreePremium() && !t.isPurchasedExternally;
							return !eV(eR.kVF.PREMIUM_PAST_DUE_MISSING_PAYMENT) && i
						},
						metadata: e => {
							let {
								premiumSubscription: t
							} = e;
							return {
								premiumSubscription: t
							}
						}
					},
					[eR.kVF.MFA_SMS_BACKUP]: {
						predicate: e => {
							let {
								currentUser: t
							} = e;
							return null != t && t.mfaEnabled && !t.hasFlag(eR.xW$.MFA_SMS) && !t.hasFlag(eR.xW$.STAFF) && !t.hasFlag(eR.xW$.PARTNER) && !eV(eR.kVF.MFA_SMS_BACKUP)
						}
					},
					[eR.kVF.APPLICATION_TEST_MODE]: {
						predicate: () => null != eS.Z.testModeApplicationId,
						metadata: () => {
							if (null == eS.Z.testModeApplicationId) return {};
							let e = eS.Z.testModeApplicationId,
								t = E.Z.getApplication(e);
							return {
								applicationName: null != t ? t.name : e,
								applicationId: e
							}
						}
					},
					[eR.kVF.PREMIUM_REACTIVATE]: {
						predicate: () => !eV(eR.kVF.PREMIUM_REACTIVATE) && v.Z.shouldShowReactivateNotice()
					},
					[eR.kVF.LOCALIZED_PRICING]: {
						predicate: e => {
							let {
								isLocalizedPromoEnabled: t
							} = e;
							return !eV(eR.kVF.LOCALIZED_PRICING) && t
						},
						metadata: e => {
							let {
								premiumSubscription: t
							} = e;
							return {
								premiumSubscription: t
							}
						}
					},
					[eR.kVF.PREMIUM_PAST_DUE_ONE_TIME_PAYMENT]: {
						predicate: e => {
							let {
								premiumSubscription: t,
								currentUser: n
							} = e, r = null != t && l()(t.currentPeriodEnd).isBefore(l()()), i = null != t && null != t.paymentSourceId ? eI.Z.getPaymentSource(t.paymentSourceId) : null, a = null != i && eb.Uk.has(i.type), o = null != t && t.status === eR.O0b.PAST_DUE && !r && a && !n.hasFreePremium() && !t.isPurchasedExternally;
							return !eV(eR.kVF.PREMIUM_PAST_DUE_ONE_TIME_PAYMENT) && o
						},
						metadata: e => {
							let {
								premiumSubscription: t
							} = e;
							return null == t ? {
								daysPastDue: 0,
								dismissUntil: l()().toDate()
							} : {
								daysPastDue: t.status === eR.O0b.PAST_DUE ? l()().diff(t.currentPeriodStart, "days") : 0,
								dismissUntil: (0, ef.lY)(t).expiresDate.toDate()
							}
						}
					},
					[eR.kVF.POMELO_ELIGIBLE]: {
						predicate: () => (0, h.e)() && !eV(eR.kVF.POMELO_ELIGIBLE)
					},
					[eR.kVF.AUTO_MODERATION_MENTION_RAID_DETECTION]: {
						predicate: e => {
							let {
								selectedGuildId: t
							} = e, n = null != t ? $.Z.getGuild(t) : null;
							return null != t && null != y.Z.getMentionRaidDetected(t) && (null == n ? void 0 : n.features.has(eR.oNc.COMMUNITY)) && !eV(eR.kVF.AUTO_MODERATION_MENTION_RAID_DETECTION) || !1
						},
						metadata: e => {
							let {
								selectedGuildId: t
							} = e, n = {
								dismissUntil: l()().add(2, "hours").toDate()
							};
							if (null != t) {
								let e = y.Z.getMentionRaidDetected(t);
								null != e && (n.decisionId = e.decisionId)
							}
							return n
						}
					},
					[eR.kVF.ACTIVATE_SERVER_SUBSCRIPTION]: {
						predicate: () => !eV(eR.kVF.ACTIVATE_SERVER_SUBSCRIPTION) && 0 !== O.Z.getEligibleGuildsForNagActivate().length && (0, I.Lm)()
					},
					[eR.kVF.SAFETY_USER_SENTIMENT_NAGBAR]: {
						predicate: e => {
							let {
								currentUser: t
							} = e;
							return G.SI(t)
						}
					},
					[eR.kVF.QUESTS_PROGRESS_INTERRUPTION]: {
						predicate: () => {
							let e = H.Z.getCurrentUserActiveStream();
							if (null == e) return !1;
							let t = (0, g.V9)(e),
								n = x.Z.getStreamHeartbeatFailure(t);
							return null != n && Date.now() - n.firstFailedAt >= ey.Ot
						},
						metadata: () => {
							let e = H.Z.getCurrentUserActiveStream();
							return {
								streamKey: null != e ? (0, g.V9)(e) : null
							}
						}
					},
					[eR.kVF.CHECKOUT_RECOVERY_NAGBAR]: {
						predicate: e => {
							var t;
							let {
								currentUser: n
							} = e, r = null != (t = eI.Z.paymentSources) ? t : {};
							return U.Z.getIsTargeted() && !(0, ef.I5)(n) && 0 !== Object.keys(r).length
						}
					},
					[eR.kVF.BLOCK_USER_FEEDBACK_NAGBAR]: {
						predicate: () => !eV(eR.kVF.BLOCK_USER_FEEDBACK_NAGBAR) && w.L0(),
						metadata: () => ({
							dismissUntil: l()().add(180, "days").toDate(),
							sampleRate: .1
						})
					},
					[eR.kVF.IGNORE_USER_FEEDBACK_NAGBAR]: {
						predicate: () => w.Rr(),
						metadata: () => ({
							sampleRate: .1
						})
					},
					[eR.kVF.REPORT_TO_MOD_SURVEY]: {
						predicate: e => {
							let {
								currentUser: t,
								selectedGuildId: n
							} = e;
							return null != n && (0, F.s)(t, n)
						}
					}
				};

			function ez() {
				var e, t, n;
				if (!A.Z.isConnected()) return !1;
				eF = null;
				let r = ed.default.getCurrentUser();
				if (null == r) return !1;
				let i = eO.Z.getPremiumSubscription(),
					l = eE.Z.isLocalizedPromoEnabled,
					a = ea.Z.getGuildId(),
					o = el.Z.getVoiceChannelId(),
					c = null != o ? e_.Z.getVoiceStateForChannel(o) : null;
				for (let n of eC.a ? eW : eB)
					if (null != eH[n] && eH[n].predicate({
							selectedGuildId: a,
							voiceChannelId: o,
							voiceState: c,
							currentUser: r,
							premiumSubscription: i,
							isLocalizedPromoEnabled: l
						})) {
						let l = null == (e = (t = eH[n]).metadata) ? void 0 : e.call(t, {
							currentUser: r,
							premiumSubscription: i,
							selectedGuildId: a
						});
						eF = function(e, t) {
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
						}(function(e) {
							for (var t = 1; t < arguments.length; t++) {
								var n = null != arguments[t] ? arguments[t] : {},
									r = Object.keys(n);
								"function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
									return Object.getOwnPropertyDescriptor(n, e).enumerable
								}))), r.forEach(function(t) {
									eh(e, t, n[t])
								})
							}
							return e
						}({}, ex), {
							type: n,
							metadata: l
						});
						break
					} if (null != eF) {
					(null == (n = eF.metadata) ? void 0 : n.sampleRate) != null && null == ek[eF.type] && (ek[eF.type] = Math.random() <= eF.metadata.sampleRate);
					let e = !1 === ek[eF.type];
					(eV(eF.type) || e) && (eF = null)
				}
			}

			function eY() {
				return ec.Z.enabled || delete ej[eR.kVF.STREAMER_MODE], ez()
			}
			class eK extends(r = a.ZP.Store) {
				initialize() {
					this.syncWith([es.Z, er.Z, Q.Z, ea.Z, L.Z, ep.Z, Y.Z, X.Z, W.Z, C.Z, x.Z, H.Z], ez), this.waitFor(ed.default, eo.Z, $.Z, J.ZP, ei.Z, ee.Z, ec.Z, f.Z, ea.Z, eu.Z, V.Z, m.ZP, er.Z, em.Z, eA.Z, eS.Z, et.Z, eO.Z, eg.Z, Q.Z, eI.Z, en.Z, L.Z, eT.Z, ep.Z, X.Z, D.Z, O.Z, k.Z, x.Z, H.Z)
				}
				hasNotice() {
					return null != eF && null != eF.type
				}
				getNotice() {
					return null == eu.Z.getAction() ? eF : null
				}
				isNoticeDismissed(e) {
					return eV(e)
				}
			}
			eh(eK, "displayName", "NoticeStore");
			let eq = new eK(u.Z, {
				CURRENT_USER_UPDATE: ez,
				MEDIA_ENGINE_SET_AUDIO_ENABLED: ez,
				CLEAR_REMOTE_DISCONNECT_VOICE_CHANNEL_ID: ez,
				CLEAR_LAST_SESSION_VOICE_CHANNEL_ID: ez,
				STATUS_PAGE_SCHEDULED_MAINTENANCE: ez,
				STATUS_PAGE_SCHEDULED_MAINTENANCE_ACK: ez,
				GUILD_CREATE: ez,
				GUILD_DELETE: ez,
				AUDIO_INPUT_DETECTED: ez,
				AUDIO_SET_DISPLAY_SILENCE_WARNING: ez,
				CERTIFIED_DEVICES_SET: ez,
				AUDIO_SET_INPUT_DEVICE: ez,
				AUDIO_SET_OUTPUT_DEVICE: ez,
				MEDIA_ENGINE_DEVICES: ez,
				RTC_CONNECTION_STATE: ez,
				RPC_APP_AUTHENTICATED: ez,
				RPC_APP_DISCONNECTED: ez,
				USER_CONNECTIONS_UPDATE: ez,
				WINDOW_FOCUS: ez,
				INSTANT_INVITE_CREATE: ez,
				INSTANT_INVITE_REVOKE_SUCCESS: ez,
				SPOTIFY_PLAYER_PAUSE: ez,
				RUNNING_GAMES_CHANGE: ez,
				EXPERIMENTS_FETCH_SUCCESS: ez,
				PREMIUM_PAYMENT_SUBSCRIBE_SUCCESS: ez,
				DEVELOPER_TEST_MODE_AUTHORIZATION_SUCCESS: ez,
				DEVELOPER_TEST_MODE_AUTHORIZATION_FAIL: ez,
				DEVELOPER_TEST_MODE_RESET: ez,
				BILLING_SUBSCRIPTION_FETCH_SUCCESS: ez,
				DISPATCH_APPLICATION_INSTALL: ez,
				IMPERSONATE_STOP: ez,
				IMPERSONATE_UPDATE: ez,
				GUILD_MEMBER_ADD: function(e) {
					return e.user.id === z.default.getId() && ez()
				},
				GUILD_MEMBER_UPDATE: ez,
				SURVEY_FETCHED: ez,
				ENTITLEMENT_FETCH_APPLICATION_SUCCESS: ez,
				BILLING_PAYMENT_SOURCE_REMOVE_SUCCESS: ez,
				BILLING_SUBSCRIPTION_UPDATE_SUCCESS: ez,
				BILLING_MOST_RECENT_SUBSCRIPTION_FETCH_SUCCESS: ez,
				VOICE_STATE_UPDATES: function(e) {
					let {
						voiceStates: t
					} = e;
					return t.some(e => {
						let {
							userId: t
						} = e;
						return t !== z.default.getId()
					}) && ez()
				},
				STREAMER_MODE_UPDATE: eY,
				RUNNING_STREAMER_TOOLS_CHANGE: eY,
				DISPATCH_APPLICATION_ERROR: function() {
					return delete ej[eR.kVF.DISPATCH_ERROR], ez()
				},
				DISPATCH_APPLICATION_LAUNCH_SETUP_START: function() {
					return delete ej[eR.kVF.DISPATCH_INSTALL_SCRIPT_PROGRESS], ez()
				},
				DISPATCH_APPLICATION_INSTALL_SCRIPTS_PROGRESS_UPDATE: function() {
					return ez()
				},
				DISPATCH_APPLICATION_LAUNCH_SETUP_COMPLETE: function() {
					return ez()
				},
				NOTICE_SHOW: function(e) {
					eF = e.notice
				},
				NOTICE_DISMISS: function(e) {
					return null != eF && (null == e.id || e.id === eF.id) && (ew(eF.type, e.isTemporary, e.untilAtLeast), ez())
				},
				NOTICE_DISABLE: function(e) {
					let {
						noticeType: t
					} = e;
					return ew(t), ez()
				},
				LOGOUT: function() {
					ej = {}, ek = {}, eF = null
				},
				SUBSCRIPTION_PLANS_FETCH_SUCCESS: ez,
				AUTO_MODERATION_MENTION_RAID_DETECTION: ez,
				CREATOR_MONETIZATION_NAG_ACTIVATE_ELIGIBLITY_FETCH_SUCCESS: ez,
				PROXY_BLOCKED_REQUEST: ez,
				REPORT_AV_ERROR: ez
			})
		},
		671533: function(e, t, n) {
			n.d(t, {
				Z: () => d
			}), n(415506);
			var r, i = n(255367);
			n(73800);
			var l = n(120356),
				a = n.n(l),
				o = n(325767),
				c = n(789700),
				s = ((r = {}).LEFT = "LEFT", r.RIGHT = "RIGHT", r.UP = "UP", r.DOWN = "DOWN", r.UP_LEFT = "UP_LEFT", r.DOWN_RIGHT = "DOWN_RIGHT", r);
			let u = e => {
				var t, n, {
						width: r = 24,
						height: l = 24,
						color: s = "currentColor",
						direction: u,
						foreground: d,
						className: _,
						title: E
					} = e,
					I = function(e, t) {
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
					}(e, ["width", "height", "color", "direction", "foreground", "className", "title"]);
				return (0, i.jsxs)("svg", (t = function(e) {
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
				}({}, (0, o.Z)(I)), n = n = {
					width: r,
					height: l,
					className: a()(_, function(e) {
						switch (e) {
							case "LEFT":
								return c.left;
							case "RIGHT":
								return c.right;
							case "UP":
								return null;
							case "DOWN":
								return c.down;
							case "UP_LEFT":
								return c.upLeft;
							case "DOWN_RIGHT":
								return c.downRight;
							default:
								throw Error("Invalid Direction ".concat(e))
						}
					}(u)),
					viewBox: "0 0 24 24",
					children: [null != E ? (0, i.jsx)("title", {
						children: E
					}) : null, (0, i.jsx)("polygon", {
						className: d,
						fill: s,
						fillRule: "nonzero",
						points: "13 20 11 20 11 8 5.5 13.5 4.08 12.08 12 4.16 19.92 12.08 18.5 13.5 13 8"
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
			};
			u.Directions = s;
			let d = u
		},
		131715: function(e, t, n) {
			e.exports = {
				premiumIcon: "premiumIcon__9671b",
				platformIcon: "platformIcon__9671b",
				giftIcon: "giftIcon__9671b",
				icon: "icon__9671b",
				iconWindows: "iconWindows__9671b icon__9671b",
				iconApple: "iconApple__9671b icon__9671b",
				iconAndroid: "iconAndroid__9671b icon__9671b",
				textLink: "textLink__9671b",
				textLinkSmall: "textLinkSmall__9671b textLink__9671b",
				testModeSKUSelector: "testModeSKUSelector__9671b",
				premiumLogo: "premiumLogo__9671b",
				premiumText: "premiumText__9671b",
				premiumAction: "premiumAction__9671b",
				ellipsis: "ellipsis__9671b",
				quarantineLearnMoreLink: "quarantineLearnMoreLink__9671b",
				errorCodeNoticeText: "errorCodeNoticeText__9671b",
				errorCodeNoticeClickable: "errorCodeNoticeClickable__9671b"
			}
		},
		900609: function(e, t, n) {
			e.exports = {
				container: "container__06f11",
				imageContainer: "imageContainer__06f11",
				image: "image__06f11",
				backgroundImage: "backgroundImage__06f11",
				backgroundImageFilter: "backgroundImageFilter__06f11",
				loader: "loader__06f11"
			}
		},
		366736: function(e, t, n) {
			e.exports = {
				lineClamp: "lineClamp__0b48b"
			}
		},
		134772: function(e, t, n) {
			e.exports = {
				text: "text__7b750",
				premiumIcon: "premiumIcon__7b750"
			}
		},
		302654: function(e, t, n) {
			e.exports = {
				notice: "notice__36c3e",
				guildIcon: "guildIcon__36c3e",
				actionButton: "actionButton__36c3e",
				actionButtonInner: "actionButtonInner__36c3e"
			}
		},
		246752: function(e, t, n) {
			e.exports = {
				notice: "notice__30f28",
				error: "error__30f28",
				header: "header__30f28"
			}
		},
		261496: function(e, t, n) {
			e.exports = {
				backButtonInner: "backButtonInner__84419",
				backButton: "backButton__84419",
				backNotice: "backNotice__84419"
			}
		},
		8940: function(e, t, n) {
			e.exports = {
				notice: "notice_c5cd6a",
				button: "button_c5cd6a",
				back: "back_c5cd6a",
				iconButton: "iconButton_c5cd6a",
				arrow: "arrow_c5cd6a",
				header: "header_c5cd6a"
			}
		},
		848697: function(e, t, n) {
			e.exports = {
				wrapper: "wrapper_c19a55",
				compact: "compact_c19a55",
				cozy: "cozy_c19a55",
				contentOnly: "contentOnly_c19a55",
				preview: "preview_c19a55",
				repliedMessage: "repliedMessage_c19a55",
				executedCommand: "executedCommand_c19a55",
				threadMessageAccessory: "threadMessageAccessory_c19a55",
				latin12CompactTimeStamp: "latin12CompactTimeStamp_c19a55",
				latin24CompactTimeStamp: "latin24CompactTimeStamp_c19a55",
				asianCompactTimeStamp: "asianCompactTimeStamp_c19a55",
				contextCommandMessage: "contextCommandMessage_c19a55",
				messageSpine: "messageSpine_c19a55",
				repliedMessageClickableSpine: "repliedMessageClickableSpine_c19a55",
				repliedMessageContentHovered: "repliedMessageContentHovered_c19a55",
				executedCommandAvatar: "executedCommandAvatar_c19a55",
				replyAvatar: "replyAvatar_c19a55",
				replyBadge: "replyBadge_c19a55",
				replyChatIconContainer: "replyChatIconContainer_c19a55",
				threadMessageAccessoryAvatar: "threadMessageAccessoryAvatar_c19a55",
				replyIcon: "replyIcon_c19a55",
				clanTagChiplet: "clanTagChiplet_c19a55",
				ticketIcon: "ticketIcon_c19a55",
				userJoinSystemMessageIcon: "userJoinSystemMessageIcon_c19a55",
				commandIcon: "commandIcon_c19a55",
				commandName: "commandName_c19a55",
				username: "username_c19a55 " + n(361585).desaturateUserColors,
				roleDot: "roleDot_c19a55",
				botTag: "botTag_c19a55",
				appsIcon: "appsIcon_c19a55",
				appLauncherOnboardingCommandName: "appLauncherOnboardingCommandName_c19a55",
				targetUsername: "targetUsername_c19a55",
				executedCommandSeparator: "executedCommandSeparator_c19a55",
				repliedTextPreview: "repliedTextPreview_c19a55",
				threadMessageAccessoryPreview: "threadMessageAccessoryPreview_c19a55",
				repliedTextContent: "repliedTextContent_c19a55",
				clickable: "clickable_c19a55",
				repliedMessageClickableSpineHovered: "repliedMessageClickableSpineHovered_c19a55",
				threadMessageAccessoryContent: "threadMessageAccessoryContent_c19a55",
				repliedTextPlaceholder: "repliedTextPlaceholder_c19a55",
				threadMessageAccessoryPlaceholder: "threadMessageAccessoryPlaceholder_c19a55",
				repliedTextContentTrailingIcon: "repliedTextContentTrailingIcon_c19a55",
				threadMessageAccessoryContentTrailingIcon: "threadMessageAccessoryContentTrailingIcon_c19a55",
				repliedTextContentLeadingIcon: "repliedTextContentLeadingIcon_c19a55",
				threadMessageAccessoryContentLeadingIcon: "threadMessageAccessoryContentLeadingIcon_c19a55",
				contents: "contents_c19a55",
				zalgo: "zalgo_c19a55",
				messageContent: "messageContent_c19a55",
				gradient: "gradient_c19a55",
				header: "header_c19a55",
				buttonContainer: "buttonContainer_c19a55",
				avatar: "avatar_c19a55",
				avatarDecoration: "avatarDecoration_c19a55",
				roleIcon: "roleIcon_c19a55",
				timestamp: "timestamp_c19a55",
				timestampInline: "timestampInline_c19a55",
				alt: "alt_c19a55",
				timestampTooltip: "timestampTooltip_c19a55",
				timestampVisibleOnHover: "timestampVisibleOnHover_c19a55",
				nitroAuthorBadgeTootip: "nitroAuthorBadgeTootip_c19a55",
				headerText: "headerText_c19a55",
				hasRoleIcon: "hasRoleIcon_c19a55",
				hasBadges: "hasBadges_c19a55",
				botTagCompact: "botTagCompact_c19a55 botTag_c19a55",
				botTagCozy: "botTagCozy_c19a55 botTag_c19a55",
				nitroBadgeSvg: "nitroBadgeSvg_c19a55 botTag_c19a55",
				nitroAuthorBadgeContainer: "nitroAuthorBadgeContainer_c19a55",
				separator: "separator_c19a55",
				hasThread: "hasThread_c19a55",
				isSystemMessage: "isSystemMessage_c19a55",
				hasReply: "hasReply_c19a55",
				markupRtl: "markupRtl_c19a55",
				isSending: "isSending_c19a55",
				isFailed: "isFailed_c19a55",
				isUnsupported: "isUnsupported_c19a55",
				edited: "edited_c19a55",
				communicationDisabled: "communicationDisabled_c19a55",
				compactCommunicationDisabled: "compactCommunicationDisabled_c19a55",
				communicationDisabledOpacity: "communicationDisabledOpacity_c19a55",
				badgesContainer: "badgesContainer_c19a55"
			}
		},
		957991: function(e, t, n) {
			e.exports = {
				container: "container__477aa",
				acceptButton: "acceptButton__477aa",
				acceptText: "acceptText__477aa",
				declineButton: "declineButton__477aa",
				declineText: "declineText__477aa",
				blocked: "blocked__477aa",
				blockedText: "blockedText__477aa",
				noIcon: "noIcon__477aa"
			}
		},
		789700: function(e, t, n) {
			e.exports = {
				left: "left_caab99",
				right: "right_caab99",
				down: "down_caab99",
				downRight: "downRight_caab99",
				upLeft: "upLeft_caab99"
			}
		},
		820468: function(e, t, n) {
			e.exports = {
				hoverCard: "hoverCard__26e8b"
			}
		}
	}
]);
//# sourceMappingURL=c90dd5cc500f7e31.js.map