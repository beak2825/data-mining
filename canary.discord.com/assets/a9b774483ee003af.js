"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
	["76540"], {
		279837: function(e, t, n) {
			n.d(t, {
				Z: () => u
			}), n(388685), n(457542);
			var s, i = n(255367),
				r = n(73800),
				l = n(481060),
				o = n(388032),
				a = n(460268);

			function c(e, t, n) {
				return t in e ? Object.defineProperty(e, t, {
					value: n,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : e[t] = n, e
			}
			class h extends(s = r.PureComponent) {
				render() {
					let {
						title: e,
						actionText: t,
						children: n,
						transitionState: s
					} = this.props, {
						error: c,
						isLoading: h,
						value: u
					} = this.state, d = r.Children.count(n) > 0 ? (0, i.jsx)(l.Zbd, {
						type: l.Zbd.Types.WARNING,
						className: a.card,
						children: (0, i.jsx)(l.Text, {
							color: "currentColor",
							variant: "text-md/normal",
							children: n
						})
					}) : null;
					return (0, i.jsx)(l.Y0X, {
						transitionState: s,
						parentComponent: "PasswordConfirm",
						children: (0, i.jsxs)("form", {
							onSubmit: this.handleSubmit,
							children: [(0, i.jsx)(l.xBx, {
								separator: !1,
								children: (0, i.jsx)(l.X6q, {
									variant: "heading-lg/semibold",
									children: e
								})
							}), (0, i.jsxs)(l.hzk, {
								children: [d, (0, i.jsxs)(l.xJW, {
									title: o.intl.string(o.t["CIGa+/"]),
									className: a.spacing,
									children: [(0, i.jsx)(l.oil, {
										type: "password",
										autoComplete: "off",
										autoFocus: !0,
										value: u,
										onChange: this.handlePasswordChange
									}), null != c && "" !== c ? (0, i.jsxs)(l.Text, {
										variant: "text-xs/normal",
										color: "text-danger",
										className: a.error,
										children: [" ", c, " "]
									}) : null]
								})]
							}), (0, i.jsx)(l.mzw, {
								children: (0, i.jsxs)(l.hE2, {
									direction: "horizontal-reverse",
									children: [(0, i.jsx)(l.zxk, {
										variant: "primary",
										text: null != t ? t : o.intl.string(o.t["cY+Ooa"]),
										type: "submit",
										disabled: h || 0 === u.length
									}), (0, i.jsx)(l.zxk, {
										variant: "secondary",
										text: o.intl.string(o.t["ETE/oK"]),
										onClick: this.handleCancel
									})]
								})
							})]
						})
					})
				}
				constructor(...e) {
					super(...e), c(this, "state", {
						value: "",
						error: null,
						isLoading: !1
					}), c(this, "handleSubmit", e => {
						e.preventDefault();
						let {
							value: t
						} = this.state, {
							handleSubmit: n,
							onClose: s,
							onError: i
						} = this.props;
						this.setState({
							isLoading: !0
						}), n(t).then(e => s(null != e ? e : void 0), e => {
							null != e.body && (null == i || i(e.body), !this.shouldSkipErrorMsgRender(e.body) && (e.body.password ? this.setState({
								error: e.body.password,
								isLoading: !1
							}) : e.body.message && this.setState({
								error: e.body.message,
								isLoading: !1
							})))
						}).finally(() => this.setState({
							isLoading: !1
						}))
					}), c(this, "shouldSkipErrorMsgRender", e => {
						let {
							skipErrorMsgAbortCode: t
						} = this.props;
						return null != t && (null == e ? void 0 : e.code) === t
					}), c(this, "handleCancel", () => {
						let {
							onClose: e
						} = this.props;
						e()
					}), c(this, "handlePasswordChange", e => {
						let {
							onPasswordChange: t
						} = this.props;
						null == t || t(e), this.setState({
							value: e
						})
					})
				}
			}
			c(h, "key", () => "password-confirm-modal");
			let u = h
		},
		7557: function(e, t, n) {
			n.d(t, {
				Z: () => p
			}), n(388685), n(539854);
			var s, i, r = n(255367),
				l = n(73800),
				o = n(120356),
				a = n.n(o),
				c = n(600164),
				h = n(713569);

			function u(e, t, n) {
				return t in e ? Object.defineProperty(e, t, {
					value: n,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : e[t] = n, e
			}
			class d extends(s = l.PureComponent) {
				render() {
					let {
						className: e
					} = this.props;
					return (0, r.jsx)("input", {
						ref: this.setCodeBlockRef,
						className: a()(h.input, e),
						maxLength: 1,
						value: null != this.props.code ? this.props.code : void 0,
						autoFocus: this.props.autoFocus,
						onKeyDown: this.handleKeyDown,
						onChange: this.handleChange
					})
				}
				focus() {
					var e;
					null == (e = this._codeBlockRef) || e.focus()
				}
				blur() {
					var e;
					null == (e = this._codeBlockRef) || e.blur()
				}
				constructor(...e) {
					super(...e), u(this, "_codeBlockRef", void 0), u(this, "setCodeBlockRef", e => {
						this._codeBlockRef = e
					}), u(this, "handleKeyDown", e => {
						let t = 8 === e.which || 37 === e.which || 39 === e.which,
							n = e.which >= 48 && e.which <= 57 || e.keyCode >= 96 && e.keyCode <= 105;
						t || n || e.preventDefault();
						let {
							onKeyDown: s
						} = this.props;
						null == s || s(e)
					}), u(this, "handleChange", e => {
						let {
							onChange: t
						} = this.props;
						null == t || t(e.currentTarget.value)
					})
				}
			}
			u(d, "defaultProps", {
				autoFocus: !1
			});
			class E extends(i = l.PureComponent) {
				render() {
					let {
						className: e,
						inputClassName: t
					} = this.props, {
						codes: n
					} = this.state, s = [];
					for (let e = 0; e < n.length; e++) e === n.length / 2 && s.push((0, r.jsx)("div", {
						className: h.spacer
					}, "spacer")), s.push((0, r.jsx)(d, {
						ref: t => this.setCodeBlockRef(e, t),
						code: n[e],
						autoFocus: 0 === e,
						onChange: t => this.handleChange(e, t),
						onKeyDown: t => this.handleKeyDown(e, t),
						className: t
					}, e));
					return (0, r.jsx)(c.Z, {
						align: c.Z.Align.CENTER,
						justify: c.Z.Justify.CENTER,
						className: e,
						children: s
					})
				}
				setCodeBlockRef(e, t) {
					this._codeBlockRefs[e] = t
				}
				handleChange(e, t) {
					this.state.codes[e] = t;
					let n = this.getCodeOrFirstEmptyIndex();
					if ("string" == typeof n) this.submit(n);
					else {
						let e = this._codeBlockRefs[n];
						null == e || e.focus()
					}
				}
				handleKeyDown(e, t) {
					let {
						codes: n
					} = this.state;
					if (8 === t.which && e > 0 && (null == n[e] || 0 === n[e].length)) {
						let t = e - 1;
						n[t] = "";
						let s = this._codeBlockRefs[t];
						null == s || s.focus()
					}
				}
				getCodeOrFirstEmptyIndex() {
					let {
						codes: e
					} = this.state, t = "";
					for (let n = 0; n < e.length; n++) {
						if (isNaN(parseInt(e[n]))) return n;
						t += e[n]
					}
					return t
				}
				submit(e) {
					let {
						onSubmit: t
					} = this.props;
					null == t || t(e)
				}
				constructor(e) {
					super(e), u(this, "_codeBlockRefs", Array(this.props.count)), this.state = {
						codes: Array(e.count)
					}
				}
			}
			u(E, "defaultProps", {
				count: 6
			});
			let p = E
		},
		317175: function(e, t, n) {
			n.d(t, {
				Z: () => C
			}), n(361932), n(187205);
			var s = n(255367),
				i = n(73800),
				r = n(120356),
				l = n.n(r),
				o = n(658722),
				a = n.n(o),
				c = n(392711),
				h = n.n(c),
				u = n(217986),
				d = n(481060),
				E = n(600164),
				p = n(133080),
				R = n(388032),
				m = n(939175),
				I = n(20795);

			function f(e, t, n) {
				return t in e ? Object.defineProperty(e, t, {
					value: n,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : e[t] = n, e
			}
			class C extends i.PureComponent {
				renderItems() {
					let {
						query: e
					} = this.state, t = u.Z.flatMap((e, t) => {
						let {
							alpha2: n,
							phoneCountryCodes: i,
							name: r
						} = e, l = (0, p.q9)(n);
						return i.map(e => ({
							key: "".concat(t, "-").concat(e),
							name: r,
							translatedName: l,
							countryData: {
								name: r,
								alpha2: n,
								code: e
							},
							children: (0, s.jsxs)(E.Z, {
								className: m.countryItem,
								justify: E.Z.Justify.CENTER,
								align: E.Z.Align.CENTER,
								children: [(0, s.jsx)(E.Z.Child, {
									className: m.countryName,
									children: l
								}), (0, s.jsx)(E.Z.Child, {
									className: m.countryCode,
									grow: 0,
									shrink: 0,
									children: e
								})]
							})
						}))
					}), n = h()(t).filter(t => 0 === e.length || a()(e.toLowerCase(), t.name.toLowerCase()) || a()(e.toLowerCase(), t.translatedName.toLowerCase())).map(e => {
						var t, n;
						return (0, i.createElement)(d.mzC.Item, (t = function(e) {
							for (var t = 1; t < arguments.length; t++) {
								var n = null != arguments[t] ? arguments[t] : {},
									s = Object.keys(n);
								"function" == typeof Object.getOwnPropertySymbols && (s = s.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
									return Object.getOwnPropertyDescriptor(n, e).enumerable
								}))), s.forEach(function(t) {
									f(e, t, n[t])
								})
							}
							return e
						}({}, e), n = n = {
							key: e.key,
							onClick: () => this.onClick(e.countryData)
						}, Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : (function(e, t) {
							var n = Object.keys(e);
							if (Object.getOwnPropertySymbols) {
								var s = Object.getOwnPropertySymbols(e);
								n.push.apply(n, s)
							}
							return n
						})(Object(n)).forEach(function(e) {
							Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
						}), t))
					}).value();
					return 0 === n.length ? (0, s.jsx)(d.mzC.Empty, {
						children: R.intl.string(R.t.PoWNfX)
					}) : (0, s.jsx)(d.w0Z, {
						className: m.phoneFieldScroller,
						children: n
					})
				}
				render() {
					let {
						className: e
					} = this.props;
					return (0, s.jsxs)(d.mzC, {
						className: l()(m.phoneFieldPopout, I.elevationBorderLow, e),
						children: [(0, s.jsx)(d.mzC.SearchBar, {
							query: this.state.query,
							placeholder: R.intl.string(R.t.hGOODg),
							onChange: this.onChangeQuery,
							onClear: this.onClearQuery,
							autoComplete: "off"
						}), (0, s.jsx)(d.mzC.Divider, {}), this.renderItems()]
					})
				}
				constructor(e) {
					super(e), f(this, "onChangeQuery", e => {
						this.setState({
							query: e
						})
					}), f(this, "onClearQuery", () => {
						this.setState({
							query: ""
						})
					}), f(this, "onClick", e => {
						var t, n;
						null == (t = (n = this.props).onClick) || t.call(n, e)
					}), this.state = {
						query: ""
					}
				}
			}
		},
		200357: function(e, t, n) {
			n.d(t, {
				Z: () => f
			}), n(388685), n(35282);
			var s = n(255367),
				i = n(73800),
				r = n(120356),
				l = n.n(r),
				o = n(217986),
				a = n(755721),
				c = n(600164),
				h = n(259580),
				u = n(317175),
				d = n(388032),
				E = n(159728),
				p = n(20795),
				R = n(20493);

			function m(e, t, n) {
				return t in e ? Object.defineProperty(e, t, {
					value: n,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : e[t] = n, e
			}
			class I extends i.PureComponent {
				render() {
					let {
						countryCode: e,
						phone: t,
						open: n
					} = this.state, {
						className: i,
						submitting: r
					} = this.props, [, o] = e.split("+");
					return (0, s.jsxs)(c.Z, {
						className: l()(E.phoneField, p.elevationLow, i),
						align: c.Z.Align.CENTER,
						grow: 0,
						children: [(0, s.jsxs)(a.zx, {
							size: a.Ph.SMALL,
							className: E.countryButton,
							color: a.Tt.PRIMARY,
							innerClassName: E.countryButtonInner,
							onClick: this.handleTogglePopout,
							children: [(0, s.jsxs)(c.Z, {
								className: l()(E.countryCodeContainer, R.marginReset),
								justify: c.Z.Justify.CENTER,
								children: [(0, s.jsx)("div", {
									className: E.plusSign,
									children: "+"
								}), (0, s.jsx)("div", {
									className: E.countryCode,
									children: o
								})]
							}), (0, s.jsx)(h.Z, {
								expanded: n,
								width: 16,
								height: 16
							})]
						}), (0, s.jsx)("input", {
							"aria-label": d.intl.string(d.t["64bX0N"]),
							className: E.inputField,
							value: t,
							onChange: this.handleChange,
							onKeyPress: this.handleKeyPress,
							autoFocus: !0
						}), (0, s.jsx)(a.zx, {
							className: E.sendButton,
							size: a.Ph.SMALL,
							submitting: r,
							onClick: this.handleSubmit,
							children: d.intl.string(d.t.TXNS7e)
						}), n ? (0, s.jsx)(u.Z, {
							onClick: this.handleClick
						}) : null]
					})
				}
				closePopout() {
					this.state.open && this.setState({
						open: !1
					})
				}
				constructor(e) {
					super(e), m(this, "handleChange", e => {
						this.closePopout(), this.setState({
							phone: e.currentTarget.value
						})
					}), m(this, "handleKeyPress", e => {
						this.closePopout(), 13 === e.which && (e.preventDefault(), this.handleSubmit())
					}), m(this, "handleSubmit", () => {
						let {
							onSubmit: e,
							submitting: t
						} = this.props, {
							countryCode: n,
							phone: s
						} = this.state;
						t || null == e || e("".concat(n).concat(s))
					}), m(this, "handleTogglePopout", () => {
						this.setState({
							open: !this.state.open
						})
					}), m(this, "handleClick", e => {
						let [t, n] = e.code.split(" ");
						this.setState({
							open: !1,
							countryCode: t,
							phone: null != n ? n : ""
						})
					});
					let [t, n] = o.Z.find(e => "United States" === e.name).phoneCountryCode.split(" ");
					this.state = {
						countryCode: t,
						phone: null != n ? n : "",
						open: !1
					}
				}
			}
			let f = I
		},
		145454: function(e, t, n) {
			n.d(t, {
				Z: () => g
			}), n(388685), n(953529);
			var s = n(255367),
				i = n(73800),
				r = n(120356),
				l = n.n(r),
				o = n(772848),
				a = n(990547),
				c = n(755721),
				h = n(481060),
				u = n(600164),
				d = n(7557),
				E = n(200357),
				p = n(388032),
				R = n(282287),
				m = n(893354),
				I = n(20493);

			function f(e, t, n) {
				return t in e ? Object.defineProperty(e, t, {
					value: n,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : e[t] = n, e
			}
			class C extends i.PureComponent {
				async componentDidMount() {
					let [e, {
						default: t
					}] = await Promise.all([n.e("93198").then(n.t.bind(n, 140523, 19)), Promise.resolve().then(n.t.bind(n, 500923, 23))]);
					null != this._lottieRef && (this._animItem = t.loadAnimation({
						container: this._lottieRef,
						renderer: "svg",
						loop: !0,
						autoplay: !1,
						animationData: e
					}))
				}
				componentWillUnmount() {
					null != this._animItem && (this._animItem.destroy(), this._animItem = void 0)
				}
				render() {
					let e, t, n, {
						error: i,
						working: r,
						transitionState: o,
						validPhone: f
					} = this.props;
					return e = null != i && "" !== i ? (0, s.jsx)("div", {
						className: l()(R.description, R.error, I.marginBottom20),
						children: i
					}) : f ? (0, s.jsx)("div", {
						className: l()(R.description, I.marginBottom20),
						children: p.intl.string(p.t["4qMI6O"])
					}) : (0, s.jsxs)(s.Fragment, {
						children: [(0, s.jsx)("div", {
							className: l()(R.description, I.marginBottom20),
							children: p.intl.string(p.t.Vp9je3)
						}), (0, s.jsx)("div", {
							className: l()(R.description, I.marginBottom20),
							children: p.intl.format(p.t["3BTmqa"], {})
						})]
					}), t = f ? (0, s.jsxs)(u.Z, {
						className: R.field,
						direction: u.Z.Direction.VERTICAL,
						align: u.Z.Align.CENTER,
						children: [(0, s.jsx)(d.Z, {
							onSubmit: this.handleVerifyPhone
						}), (0, s.jsx)(c.zx, {
							className: I.marginTop8,
							size: c.Ph.SMALL,
							look: c.iL.LINK,
							color: c.Tt.PRIMARY,
							onClick: this.handleResendCode,
							children: p.intl.string(p.t["5b60go"])
						})]
					}) : (0, s.jsx)(E.Z, {
						className: R.field,
						onSubmit: this.handleAddPhone,
						submitting: r
					}), n = f ? p.intl.string(p.t.Xclkxs) : p.intl.string(p.t.uR76s7), (0, s.jsxs)(h.Y0X, {
						impression: {
							impressionName: a.ImpressionNames.USER_VERIFY_PHONE
						},
						transitionState: o,
						className: l()(R.phoneVerificationModal, m.vertical, m.alignCenter, m.justifyCenter, I.marginTop60),
						"aria-labelledby": this.headerId,
						parentComponent: "PhoneVerificationModal",
						children: [(0, s.jsx)("div", {
							className: R.animationContainer,
							ref: this.setLottieRef
						}), (0, s.jsx)("div", {
							className: l()(R.title, I.marginBottom8),
							id: this.headerId,
							children: n
						}), e, t]
					})
				}
				constructor(e) {
					super(e), f(this, "_animItem", null), f(this, "_lottieRef", void 0), f(this, "headerId", (0, o.Z)()), f(this, "setLottieRef", e => {
						this._lottieRef = e
					}), f(this, "handleAddPhone", e => {
						this.state.animated || null == this._animItem ? this.setState({
							phone: e
						}) : (this._animItem.play(), this.setState({
							animated: !0,
							phone: e
						}));
						let {
							onAddPhone: t
						} = this.props;
						null == t || t(e)
					}), f(this, "handleVerifyPhone", e => {
						let {
							onVerifyPhone: t
						} = this.props;
						null == t || t(e)
					}), f(this, "handleResendCode", () => {
						let {
							onAddPhone: e
						} = this.props;
						null == e || e(this.state.phone)
					}), this.state = {
						animated: !1,
						phone: ""
					}
				}
			}
			let g = C
		},
		1964: function(e, t, n) {
			n.d(t, {
				Z: () => E
			});
			var s = n(392711),
				i = n.n(s),
				r = n(981631),
				l = n(388032);
			let {
				CAPTCHA: o,
				EMAIL: a,
				PHONE: c,
				REVERIFY_EMAIL: h,
				REVERIFY_PHONE: u
			} = r.PUi, d = {
				[r.c2C.REQUIRE_VERIFIED_EMAIL]: [a],
				[r.c2C.REQUIRE_VERIFIED_PHONE]: [c],
				[r.c2C.REQUIRE_REVERIFIED_EMAIL]: [h],
				[r.c2C.REQUIRE_REVERIFIED_PHONE]: [u],
				[r.c2C.REQUIRE_VERIFIED_EMAIL_OR_VERIFIED_PHONE]: [a, c],
				[r.c2C.REQUIRE_REVERIFIED_EMAIL_OR_VERIFIED_PHONE]: [c, h],
				[r.c2C.REQUIRE_VERIFIED_EMAIL_OR_REVERIFIED_PHONE]: [a, u],
				[r.c2C.REQUIRE_REVERIFIED_EMAIL_OR_REVERIFIED_PHONE]: [h, u],
				[r.c2C.REQUIRE_CAPTCHA]: [o],
				[r.c2C.AGREEMENTS]: [],
				[r.c2C.REQUIRE_SAFETY_FLOWS]: []
			}, E = {
				isPhoneReverification: (e, t) => void 0 !== e && e.isPhoneVerified() && (t === r.c2C.REQUIRE_REVERIFIED_PHONE || t === r.c2C.REQUIRE_REVERIFIED_EMAIL_OR_REVERIFIED_PHONE || t === r.c2C.REQUIRE_VERIFIED_EMAIL_OR_REVERIFIED_PHONE),
				isEmailReverification: e => e === r.c2C.REQUIRE_REVERIFIED_EMAIL || e === r.c2C.REQUIRE_REVERIFIED_EMAIL_OR_REVERIFIED_PHONE || e === r.c2C.REQUIRE_REVERIFIED_EMAIL_OR_VERIFIED_PHONE,
				isFullScreenVerification(e) {
					return e === r.c2C.REQUIRE_CAPTCHA || e === r.c2C.REQUIRE_VERIFIED_EMAIL || e === r.c2C.REQUIRE_VERIFIED_PHONE || e === r.c2C.REQUIRE_REVERIFIED_PHONE || e === r.c2C.REQUIRE_REVERIFIED_EMAIL_OR_REVERIFIED_PHONE || e === r.c2C.REQUIRE_VERIFIED_EMAIL_OR_REVERIFIED_PHONE || this.isEmailReverification(e)
				},
				getVerificationTypes: e => null == e || "symbol" == typeof e ? [] : d[e],
				getButtonTitle(e) {
					switch (e) {
						case r.PUi.EMAIL:
							return l.intl.string(l.t["1MPz29"]);
						case r.PUi.PHONE:
							return l.intl.string(l.t.mjJecn);
						case r.PUi.REVERIFY_EMAIL:
							return l.intl.string(l.t.nmdPFR);
						case r.PUi.REVERIFY_PHONE:
							return l.intl.string(l.t.of2129);
						default:
							return l.intl.string(l.t["oF6+W1"])
					}
				},
				areVerificationTypesEqual: (e, t) => i().isEqual(e, t)
			}
		},
		607018: function(e, t, n) {
			n.d(t, {
				default: () => p
			}), n(388685);
			var s = n(255367),
				i = n(73800),
				r = n(442837),
				l = n(279837),
				o = n(479531),
				a = n(144114),
				c = n(145454),
				h = n(23434),
				u = n(594174),
				d = n(1964),
				E = n(388032);
			let p = i.forwardRef(function(e, t) {
				let {
					onAddedPhone: n,
					onClose: p,
					transitionState: R,
					reason: m
				} = e, I = (0, r.e7)([u.default], () => u.default.getCurrentUser()), f = (0, r.e7)([h.Z], () => h.Z.getAction()), [C, g] = i.useState(null), [y, _] = i.useState(null), [P, b] = i.useState(null), [x, j] = i.useState(!1), v = i.useCallback(async e => {
					j(!0);
					try {
						d.Z.isPhoneReverification(I, f) ? await a.Z.beginReverifyPhone(e, m) : await a.Z.beginAddPhone(e, m), b(null), g(e)
					} catch (e) {
						b(new o.Z(e))
					}
					j(!1)
				}, [I, m, f]), N = i.useCallback(async e => {
					if (null != C && null != I) {
						j(!0);
						try {
							let {
								token: t
							} = await a.Z.verifyPhone(C, e);
							b(null), _(t)
						} catch (e) {
							b(new o.Z(e))
						}
						j(!1)
					}
				}, [I, C]), O = i.useCallback(async e => {
					null != y && (d.Z.isPhoneReverification(I, f) ? await a.Z.reverifyPhone(y, e, m) : await a.Z.addPhone(y, e, m), null == n || n(), p())
				}, [n, p, y, m, I, f]);
				return null != y ? (0, s.jsx)(l.Z, {
					onClose: p,
					transitionState: R,
					title: E.intl.string(E.t.ZtCDc3),
					handleSubmit: O
				}) : (0, s.jsx)(c.Z, {
					onClose: p,
					transitionState: R,
					error: null == P ? void 0 : P.getAnyErrorMessage(),
					working: x,
					validPhone: null != C,
					onAddPhone: v,
					onVerifyPhone: N
				})
			})
		}
	}
]);
//# sourceMappingURL=a9b774483ee003af.js.map