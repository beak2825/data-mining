"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
	["89744"], {
		449757: function(e) {
			e.exports = "/assets/49ccdba4e630508d.svg"
		},
		32634: function(e) {
			e.exports = "/assets/d64f09e04e7e88f8.svg"
		},
		292824: function(e) {
			e.exports = "/assets/bdf03f89c231816a.svg"
		},
		457115: function(e) {
			e.exports = "/assets/ca4a0237223dab09.svg"
		},
		599857: function(e, t, n) {
			n.d(t, {
				Z: () => p,
				_: () => d
			}), n(388685);
			var r = n(255367),
				i = n(73800),
				a = n(15155),
				l = n(780384),
				c = n(481060),
				o = n(626135),
				s = n(756148),
				u = n(981631);

			function d(e) {
				let {
					sitekey: t,
					action: n,
					onVerify: a
				} = e, [l, d] = i.useState("uninitialized"), f = i.useCallback(e => {
					o.default.track(u.rMx.RECAPTCHA_MODAL_EVENT, {
						recaptcha_event_name: e
					})
				}, []), p = i.useCallback(e => {
					f("handle-verify"), a(e)
				}, [a, f]), m = i.useCallback(() => {
					var e, r, i;
					null == (i = window) || null == (r = i.grecaptcha) || null == (e = r.enterprise) || e.ready(async () => {
						var e;
						f("recaptcha-ready"), p(await (null == (e = window) ? void 0 : e.grecaptcha).enterprise.execute(t, null != n ? {
							action: n
						} : void 0)), d("loaded")
					})
				}, [t, n, p, f]), y = i.useCallback(() => {
					d("running"), f("recaptcha-loading"), s.I.loadRecaptchaScript(t, m, f)
				}, [t, m, f]);
				return i.useEffect(() => {
					"uninitialized" === l && y()
				}, [y, l]), i.useEffect(() => () => {
					f("recaptcha-unloading"), document.querySelectorAll('script[src*="recaptcha/enterprise.js"],.grecaptcha-badge').forEach(e => {
						var t;
						return null == (t = e.parentNode) ? void 0 : t.removeChild(e)
					}), null != window.grecaptcha && delete window.grecaptcha
				}, [f]), (0, r.jsx)(c.$jN, {})
			}
			let f = e => {
				var t, n, {
						theme: i
					} = e,
					c = function(e, t) {
						if (null == e) return {};
						var n, r, i = function(e, t) {
							if (null == e) return {};
							var n, r, i = {},
								a = Object.keys(e);
							for (r = 0; r < a.length; r++) n = a[r], t.indexOf(n) >= 0 || (i[n] = e[n]);
							return i
						}(e, t);
						if (Object.getOwnPropertySymbols) {
							var a = Object.getOwnPropertySymbols(e);
							for (r = 0; r < a.length; r++) n = a[r], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n])
						}
						return i
					}(e, ["theme"]);
				let o = (0, l.wj)(i) ? "dark" : "light";
				return (0, r.jsx)(a.Z, (t = function(e) {
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
					sitekey: u.OL7
				}, c), n = n = {
					theme: o
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
			f.Themes = {
				LIGHT: "light",
				DARK: "dark"
			}, f.Sizes = {
				COMPACT: "compact",
				NORMAL: "normal",
				INVISIBLE: "invisible"
			};
			let p = f
		},
		756148: function(e, t, n) {
			n.d(t, {
				I: () => r
			});
			class r {
				static getSiteKey(e) {
					return null != e ? e : "production" === window.GLOBAL_ENV.PROJECT_ENV ? "6LeYqFcqAAAAAD6iZesmNgVulsO4PkpBdr6NVG6M" : "6LdtfVMqAAAAAMurhtf2pDhK0oqD4eLqeQPh025y"
				}
				static loadRecaptchaScript(e, t, n) {
					if (null != document.getElementById("recaptcha-script-".concat(this.getSiteKey(e)))) {
						null != t && (null == n || n("recaptcha-element-exists-callback"), t());
						return
					}
					let r = document.createElement("script");
					r.src = "https://www.google.com/recaptcha/enterprise.js?render=".concat(this.getSiteKey(e)), r.id = "recaptcha-script-".concat(this.getSiteKey(e)), r.async = !0, r.defer = !0, document.body.appendChild(r), null != t && (r.onload = () => {
						null == n || n("recaptcha-script-onload-callback"), t()
					})
				}
			}
		},
		845077: function(e, t, n) {
			n.d(t, {
				PA: () => l,
				Wl: () => c
			});
			var r = n(990547);
			n(479531);
			var i = n(573261),
				a = n(981631);
			async function l() {
				let e = await i.Z.get({
					url: a.ANM.SAFETY_FLOWS_TASK,
					trackedActionData: {
						event: r.NetworkActionNames.USER_VERIFY
					},
					rejectWithError: !1
				});
				return 204 === e.status ? null : e.body
			}
			async function c(e) {
				return (await i.Z.post({
					url: a.ANM.SAFETY_FLOWS_TASK,
					body: e,
					trackedActionData: {
						event: r.NetworkActionNames.USER_VERIFY
					},
					rejectWithError: !0
				})).body
			}
		},
		118589: function(e, t, n) {
			n.d(t, {
				NS: () => c,
				UA: () => l,
				VZ: () => o
			}), n(388685), n(73800);
			var r, i = n(697498),
				a = n(388032),
				l = ((r = {})[r.REFRESH_APP = -1] = "REFRESH_APP", r[r.EMAIL_VERIFICATION = 3] = "EMAIL_VERIFICATION", r);
			let c = {
					EMAIL_VERIFICATION: "email_verification",
					PHONE_VERIFICATION: "phone_verification",
					GENERIC_CALL_TO_ACTION: "generic_call_to_action",
					REFRESH_APP: "refresh_app"
				},
				o = new Set(Object.values(c));
			a.intl.string(i.default["Qm6K/v"])
		},
		286813: function(e, t, n) {
			n.d(t, {
				Z: () => s
			}), n(953529);
			var r = n(255367),
				i = n(73800),
				a = n(481060),
				l = n(697498),
				c = n(388032),
				o = n(383932);
			let s = e => {
				let {
					onSubmit: t,
					disabled: n
				} = e, s = i.useCallback(async () => {
					await t({}), window.location.reload()
				}, [t]);
				return (0, r.jsxs)("div", {
					className: o.container,
					children: [(0, r.jsx)(a.X6q, {
						variant: "heading-lg/bold",
						className: o.title,
						children: c.intl.string(l.default.v52itr)
					}), (0, r.jsx)(a.Text, {
						variant: "text-md/normal",
						color: "text-muted",
						className: o.description,
						children: c.intl.string(l.default["5am8Dw"])
					}), (0, r.jsx)(a.Kqy, {
						direction: "horizontal",
						justify: "end",
						children: (0, r.jsx)(a.zxk, {
							variant: "primary",
							text: c.intl.string(l.default.GDsHl5),
							onClick: s,
							disabled: n
						})
					})]
				})
			}
		},
		918714: function(e, t, n) {
			n.d(t, {
				Z: () => p
			}), n(388685);
			var r = n(255367),
				i = n(73800),
				a = n(481060),
				l = n(624138),
				c = n(845077),
				o = n(118589),
				s = n(603700),
				u = n(697498),
				d = n(388032),
				f = n(70421);
			let p = () => {
				let [e, t] = i.useState(null), [n, p] = i.useState(!0), [m, y] = i.useState(null), [g, h] = i.useState(!1), b = i.useCallback(async () => {
					p(!0), y(null);
					try {
						var e;
						let n = await (0, c.PA)();
						if (null == n) return;
						!(0, l.Ew)(null == (e = n.ui_component) ? void 0 : e.type) && o.VZ.has(n.ui_component.type) ? t(n) : t({
							task_id: n.task_id,
							task_type: o.UA.REFRESH_APP,
							assignment_id: n.assignment_id,
							ui_component: {
								type: o.NS.REFRESH_APP,
								data: {}
							},
							flow_context: {
								tasks: [],
								flow_id: n.flow_context.flow_id
							}
						})
					} catch (e) {
						y(d.intl.string(u.default["/f++3t"]))
					} finally {
						p(!1)
					}
				}, []), E = i.useCallback(async t => {
					if (null !== e) {
						h(!0);
						try {
							var n;
							let r = {
								task_id: e.task_id,
								flow_id: null == (n = e.flow_context) ? void 0 : n.flow_id,
								data: t
							};
							await (0, c.Wl)(r), b()
						} catch (e) {
							y(d.intl.string(u.default["+QRSxc"]))
						} finally {
							h(!1)
						}
					}
				}, [e, b]);
				return i.useEffect(() => {
					b()
				}, [b]), (0, r.jsx)("div", {
					className: f.safetyFlow,
					children: (0, r.jsxs)("div", {
						className: f.container,
						children: [(0, r.jsx)(a.xBx, {
							separator: !1,
							className: f.header,
							children: (0, r.jsx)(a.X6q, {
								variant: "heading-xl/bold",
								children: d.intl.string(u.default.gqwhj4)
							})
						}), (0, r.jsxs)(a.hzk, {
							className: f.body,
							children: [n && (0, r.jsx)(a.Text, {
								variant: "text-md/normal",
								color: "text-muted",
								children: d.intl.string(u.default.v0H5Tk)
							}), null !== m && (0, r.jsx)(a.Text, {
								variant: "text-md/normal",
								color: "text-danger",
								className: f.error,
								children: m
							}), !n && null === m && null !== e && (0, r.jsx)(s.Z, {
								task: e,
								onSubmit: E,
								disabled: g
							})]
						})]
					})
				})
			}
		},
		603700: function(e, t, n) {
			n.d(t, {
				Z: () => a
			});
			var r = n(255367);
			n(73800);
			let i = {
					refresh_app: n(286813).Z
				},
				a = e => {
					var t;
					let {
						task: n,
						onSubmit: a,
						disabled: l
					} = e, c = i[n.ui_component.type];
					return null == c ? null : (0, r.jsx)(c, {
						configData: n.ui_component.data,
						onSubmit: a,
						taskId: n.task_id,
						flowId: null == (t = n.flow_context) ? void 0 : t.flow_id,
						assignmentId: n.assignment_id,
						disabled: l
					})
				}
		},
		886118: function(e, t, n) {
			n.d(t, {
				E: () => l,
				S: () => a
			});
			var r, i, a = ((r = {}).FUZZY = "fuzzy", r.EXACT = "exact", r.REGEX = "regex", r.JARO_WINKLER = "jaro_winkler", r),
				l = ((i = {}).NONE = "none", i.JARO_WINKLER = "jaro_winkler", i)
		},
		301801: function(e, t, n) {
			n.d(t, {
				BO: () => u
			}), n(190126), n(368063), n(65234), n(111804), n(490233), n(97749), n(388685), n(781311);
			var r = n(73800),
				i = n(348327),
				a = n.n(i),
				l = n(392711),
				c = n(823379),
				o = n(886118);
			let s = new Worker(new URL("/assets/" + n.u("56558"), n.b));

			function u(e, t, n, i) {
				let u = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : [],
					d = r.useRef(null),
					f = r.useRef(null),
					p = r.useRef(n),
					{
						searchStringGenerator: m
					} = i,
					y = function(e) {
						let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [],
							[n, i] = r.useState(e),
							l = r.useRef(e);
						return r.useEffect(() => {
							l.current = e
						}, [e]), r.useEffect(() => {
							i(e => {
								let t = l.current;
								return a()(e, t) ? e : t
							})
						}, t), n
					}(t.map(m), [t, m, ...u]),
					g = function(e) {
						let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [],
							[n, i] = r.useState(e),
							l = r.useRef(e);
						return r.useEffect(() => {
							l.current = e
						}, [e]), r.useEffect(() => {
							i(e => {
								let t = l.current;
								return a()(e, t) ? e : t
							})
						}, t), n
					}(t, [t]);
				r.useEffect(() => {
					p.current = n
				}, [n]);
				let h = r.useMemo(() => {
					let {
						throttleMs: e = 200,
						throttleLeading: t = !0,
						throttleTrailing: n = !0
					} = i;
					return f.current = (0, l.throttle)(async (e, t, n) => {
						if ("" === e.trim()) return void p.current(t);
						d.current = (0, l.uniqueId)();
						let r = await
						function(e, t, n, r) {
							var i;
							let a = null != (i = r.promiseUuid) ? i : (0, l.uniqueId)(),
								{
									searchType: u = o.S.FUZZY,
									sortType: d = o.E.NONE,
									jaroWinklerSearchThreshold: f = .85
								} = r;
							return new Promise(r => {
								let i = t => {
									let {
										data: {
											id: n,
											foundItemIndexes: l
										}
									} = t;
									a === n && (r(l.map(t => e[t]).filter(c.lm)), null == s || s.removeEventListener("message", i))
								};
								null == s || s.addEventListener("message", i), null == s || s.postMessage({
									id: a,
									searchTerm: t,
									searchStrings: n,
									searchType: u,
									sortType: d,
									jaroWinklerSearchThreshold: f
								})
							})
						}(t, e, n, function(e) {
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
							promiseUuid: d.current
						}, i));
						null != d.current && p.current(r)
					}, e, {
						leading: t,
						trailing: n
					}), f.current
				}, [i]);
				return r.useEffect(() => {
					h(e, g, y)
				}, [h, e, g, y, ...u]), r.useEffect(() => () => {
					null != f.current && f.current.cancel(), f.current = null, d.current = null
				}, [y, n, i]), h
			}
		},
		762756: function(e, t, n) {
			n.d(t, {
				Z: () => j
			}), n(388685);
			var r, i = n(255367),
				a = n(73800),
				l = n(120356),
				c = n.n(l),
				o = n(873546),
				s = n(755721),
				u = n(599857),
				d = n(600164),
				f = n(63063),
				p = n(1964),
				m = n(981631),
				y = n(388032),
				g = n(816676),
				h = n(20493);

			function b(e, t, n) {
				return t in e ? Object.defineProperty(e, t, {
					value: n,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : e[t] = n, e
			}
			let E = f.Z.getArticleURL(m.BhN.VERIFICATION_FAQ);
			class v extends(r = a.PureComponent) {
				renderFields() {
					let {
						types: e,
						captchaKey: t,
						theme: n,
						onCaptchaVerify: r
					} = this.props;
					return (0, i.jsx)(i.Fragment, {
						children: e.map(e => e === m.PUi.CAPTCHA ? (0, i.jsx)(u.Z, {
							onVerify: r,
							theme: n
						}, t) : (0, i.jsx)(s.zx, {
							className: h.marginBottom20,
							onClick: () => this.handleClick(e),
							children: p.Z.getButtonTitle(e)
						}, e))
					})
				}
				render() {
					return (0, i.jsxs)(d.Z, {
						className: g.verification,
						align: d.Z.Align.CENTER,
						direction: d.Z.Direction.VERTICAL,
						children: [(0, i.jsxs)(d.Z, {
							className: c()(g.container, {
								[g.isMobile]: o.tq
							}),
							direction: d.Z.Direction.VERTICAL,
							align: d.Z.Align.CENTER,
							justify: d.Z.Justify.CENTER,
							children: [(0, i.jsx)("div", {
								className: g.image
							}), (0, i.jsx)("div", {
								className: c()(g.title, h.marginTop20),
								children: y.intl.string(y.t.Iz0kDg)
							}), (0, i.jsx)("div", {
								className: c()(g.body, h.marginTop4, h.marginBottom20),
								children: y.intl.format(y.t["0rqMV1"], {
									helpCenterURL: E
								})
							}), (0, i.jsx)(d.Z, {
								grow: 0,
								direction: d.Z.Direction.VERTICAL,
								justify: d.Z.Justify.CENTER,
								children: this.renderFields()
							})]
						}), (0, i.jsx)("div", {
							className: c()(g.footer, h.marginTop20),
							children: y.intl.string(y.t.qqYun5)
						}), (0, i.jsxs)(d.Z, {
							className: c()(h.marginTop4, h.marginBottom20),
							grow: 0,
							children: [(0, i.jsx)("div", {
								className: c()(g.footer, g.footerAction),
								children: y.intl.format(y.t.WL51ZW, {
									supportURL: f.Z.getSubmitRequestURL()
								})
							}), (0, i.jsx)("div", {
								className: c()(g.footer, g.footerBullet),
								children: "•"
							}), (0, i.jsx)("div", {
								className: c()(g.footer, g.footerAction),
								children: y.intl.format(y.t.Hv7ztb, {
									logoutOnClick: this.props.onLogout
								})
							})]
						})]
					})
				}
				constructor(...e) {
					super(...e), b(this, "handleClick", e => {
						let {
							onClick: t
						} = this.props;
						null == t || t(e)
					})
				}
			}
			b(v, "defaultProps", {
				types: [m.PUi.CAPTCHA],
				onCaptchaVerify: m.dG4,
				onLogout: m.dG4
			});
			let j = v
		},
		852758: function(e, t, n) {
			n.d(t, {
				Z: () => P
			}), n(388685);
			var r = n(255367),
				i = n(73800),
				a = n(990547),
				l = n(442837),
				c = n(544891),
				o = n(481060),
				s = n(893776),
				u = n(37234),
				d = n(809206),
				f = n(110924),
				p = n(714338),
				m = n(213609),
				y = n(429142),
				g = n(144114),
				h = n(210887),
				b = n(23434),
				E = n(1964),
				v = n(762756),
				j = n(308569),
				O = n(981631),
				w = n(815660),
				x = n(388032);

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

			function P() {
				let {
					action: e,
					theme: t
				} = (0, l.cj)([b.Z, h.Z], () => ({
					action: b.Z.getAction(),
					theme: h.Z.theme
				})), P = E.Z.getVerificationTypes(e), [N, R] = i.useState(0), S = (0, f.Z)(P);
				(0, m.Z)({
					type: a.ImpressionTypes.MODAL,
					name: a.ImpressionNames.USER_ACTION_REQUIRED,
					properties: {
						verification_type: P[0],
						verification_types: P
					}
				}, {}, [P.toString()]);
				let C = () => {
						(0, d.FD)(), (0, o.ZDy)(async () => {
							let {
								default: e
							} = await n.e("35401").then(n.bind(n, 284549));
							return t => (0, r.jsx)(e, A({}, t))
						}, {
							modalKey: j.F0,
							Layer: y.ZP
						})
					},
					I = () => {
						(0, o.ZDy)(async () => {
							let {
								default: e
							} = await Promise.resolve().then(n.bind(n, 607018));
							return t => (0, r.jsx)(e, A({
								reason: g.L.USER_ACTION_REQUIRED
							}, t))
						}, {
							modalKey: w.M,
							Layer: y.ZP
						})
					};
				return i.useEffect(() => (p.Z.disable(), () => {
					p.Z.enable()
				}), []), i.useEffect(() => {
					(null == S ? void 0 : S[0]) === O.PUi.PHONE && (null == P ? void 0 : P[0]) === O.PUi.EMAIL && (0, o.ZDy)(async () => {
						let {
							default: e
						} = await Promise.resolve().then(n.bind(n, 468026));
						return t => (0, r.jsx)(e, _(A({}, t), {
							title: x.intl.string(x.t.KLnLIC),
							body: x.intl.string(x.t.XGbCq6),
							confirmText: x.intl.string(x.t["3oK4q6"])
						}))
					}, {
						modalKey: j.HR,
						Layer: y.ZP,
						onCloseCallback: C
					})
				}, [P, S]), (0, r.jsx)(v.Z, {
					types: P,
					captchaKey: N,
					onCaptchaVerify: e => {
						c.tn.post({
							url: O.ANM.CAPTCHA,
							body: {
								captcha_key: e
							},
							oldFormErrors: !0,
							rejectWithError: !0
						}).then(u.xf, () => {
							R(e => e + 1)
						})
					},
					theme: t,
					onClick: e => {
						e === O.PUi.EMAIL_OR_PHONE || e === O.PUi.EMAIL || e === O.PUi.REVERIFY_EMAIL ? C() : I()
					},
					onLogout: () => {
						(0, o.ZDy)(async () => {
							let {
								ConfirmModal: e,
								Text: t
							} = await Promise.resolve().then(n.bind(n, 481060));
							return n => (0, r.jsx)(e, _(A({
								header: x.intl.string(x.t["2jxGen"]),
								confirmText: x.intl.string(x.t["2jxGen"]),
								cancelText: x.intl.string(x.t["ETE/oK"]),
								onConfirm: () => s.Z.logout("verification")
							}, n), {
								children: (0, r.jsx)(t, {
									variant: "text-md/normal",
									children: x.intl.string(x.t.SUnWBA)
								})
							}))
						}, {
							Layer: y.ZP
						})
					}
				})
			}
		},
		697498: function(e, t, n) {
			n.r(t), n.d(t, {
				default: () => l,
				messagesLoader: () => i
			});
			let {
				createLoader: r
			} = n(515149), i = r({
				"en-US": () => n.e("88651").then(n.bind(n, 25555))
			}, "en-US"), {
				makeMessagesProxy: a
			} = n(515149), l = a(i)
		}
	}
]);
//# sourceMappingURL=9c527c7582939e77.js.map