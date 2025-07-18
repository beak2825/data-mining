! function() {
	"use strict";
	var M, o = {
			n: function(e) {
				var t = e && e.__esModule ? function() {
					return e.default
				} : function() {
					return e
				};
				return o.d(t, {
					a: t
				}), t
			},
			d: function(e, t) {
				for (var n in t) o.o(t, n) && !o.o(e, n) && Object.defineProperty(e, n, {
					enumerable: !0,
					get: t[n]
				})
			},
			o: function(e, t) {
				return Object.prototype.hasOwnProperty.call(e, t)
			}
		},
		t = Roblox,
		e = o.n(t),
		R = React,
		N = o.n(R),
		m = ReactDOM,
		D = ReactStyleGuide,
		I = ReactUtilities,
		B = "enterEmail",
		F = "enterCode",
		f = "Label.Email",
		S = "Response.InvalidEmail",
		T = "Action.SendCode",
		P = "Label.SixDigitCode",
		L = "Label.CodeSent",
		A = "Action.Resend",
		V = "Action.Continue",
		G = "Action.ChangeEmail",
		U = "Description.EnterCodeHelpV3",
		K = "Action.DidntReceiveCode",
		z = "Response.TooManyAttemptsPleaseWait",
		H = "Response.ErrorUseCorporateNetwork",
		W = "Response.UnknownError",
		j = "Response.IncorrectOtpCode",
		q = 3,
		X = 6,
		Y = 8,
		$ = 2,
		J = 429,
		Q = "email",
		i = function() {
			return (i = Object.assign || function(e) {
				for (var t, n = 1, o = arguments.length; n < o; n++)
					for (var i in t = arguments[n]) Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
				return e
			}).apply(this, arguments)
		};

	function r(e, t) {
		var n = i({}, e);
		switch (t.type) {
			case M.SET_ENTER_EMAIL_PAGE:
				return n.emailVerifyCodeModalPage = B, n;
			case M.SET_ENTER_CODE_PAGE:
				return n.emailVerifyCodeModalPage = F, n;
			case M.SET_EMAIL:
				return n.email = t.email, n;
			case M.SET_SESSION_TOKEN:
				return n.sessionToken = t.sessionToken, n;
			case M.SET_OTP_CODE:
				return n.code = t.code, n;
			case M.SET_LEGAL_CHECK:
				return n.isChecked = t.isChecked, n;
			case M.SET_CODE_VALID:
				return n.isCodeValid = t.isCodeValid, n;
			case M.SET_LOADING:
				return n.isLoading = t.isLoading, n;
			case M.SET_CHECKBOX_AND_CONTINUE_BUTTON_STATE:
				return n.isContinueButtonEnabled = t.isContinueButtonEnabled, n.isCheckboxEnabled = t.isCheckboxEnabled, n;
			case M.SET_ERROR:
				return n.errorMessage = t.errorMessage, n;
			case M.CLOSE_MODAL:
				return n.isModalOpen = !1, n;
			default:
				return e
		}
	}

	function p(e) {
		var t = e.children,
			e = (n = (0, R.useReducer)(r, c))[0],
			n = n[1];
		return N().createElement(s.Provider, {
			value: {
				state: e,
				dispatch: n
			}
		}, t)
	}

	function C(e) {
		return new RegExp("^\\w+([-+.]\\w+)*@\\w+([-.]\\w+)*\\.\\w+([-.]\\w+)*$").test(e)
	}

	function Z(e) {
		var t = e.ctx,
			n = e.field,
			o = e.origin,
			i = e.entered,
			r = e.state;
		(e = {}).field = n, i && (e.entered = i), r && (e.state = r), o && (e.origin = o), le.eventStreamService.sendEventWithTarget(se.schematizedEventTypes.authFormInteraction, t, e)
	}

	function a(e) {
		var t;
		return ((t = {})[se.context.validateOTP] = se.context.schematizedEnterOTP, t[se.context.enterOTP] = se.context.schematizedEnterOTP, t[se.context.sendOTP] = se.context.schematizedSendOTP, t)[e] || e
	}

	function ee(e) {
		var t = e.ctx,
			n = e.field,
			o = e.btn,
			i = e.aType,
			r = e.errorCode,
			a = e.origin;
		(e = {}).field = n, o && (e.btn = o), i && (e.aType = i), r && (e.errorCode = r), a && (e.origin = a), le.eventStreamService.sendEventWithTarget(ue.formInteraction, t, e)
	}

	function te(e, t, n) {
		ee({
			ctx: e,
			field: se.field.errorMessage,
			aType: se.aType.shown,
			errorCode: t,
			origin: n
		}), le.eventStreamService.sendEventWithTarget(se.schematizedEventTypes.authMsgShown, a(e), {
			field: e === se.context.enterOTP ? se.field.resendErrorMessage : se.field.errorMessage,
			errorCode: t,
			origin: n
		})
	}

	function ne(e, t, n) {
		le.eventStreamService.sendEventWithTarget(ue.buttonClick, e, {
			btn: t,
			origin: n
		}), le.eventStreamService.sendEventWithTarget(se.schematizedEventTypes.authButtonClick, a(e), {
			btn: t,
			origin: n
		})
	}

	function oe(e, t, n) {
		le.eventStreamService.sendEventWithTarget(ue.modalAction, e, {
			aType: t,
			origin: n
		})
	}

	function ie(e, t) {
		le.eventStreamService.sendEventWithTarget(se.schematizedEventTypes.authPageLoad, a(e), {
			origin: t
		})
	}

	function re(e) {
		var t = e.id,
			n = e.legalText,
			o = void 0 !== (i = e.isChecked) && i,
			i = void 0 !== (i = e.disabled) && i,
			e = e.onCheckBoxChanged;
		return N().createElement("div", {
			className: "legal-text-container"
		}, N().createElement("div", {
			className: "terms-agreement terms-agreement-checkbox"
		}, N().createElement("input", {
			id: t,
			className: "checkbox",
			type: "checkbox",
			checked: o,
			onChange: e,
			disabled: i
		}), N().createElement("label", {
			htmlFor: t,
			dangerouslySetInnerHTML: {
				__html: n
			}
		})))
	}

	function ae(e) {
		return t.EnvironmentUrls.apiGatewayUrl + "/otp-service/v1/" + e
	}(n = M = M || {})[n.SET_ENTER_EMAIL_PAGE = 0] = "SET_ENTER_EMAIL_PAGE", n[n.SET_ENTER_CODE_PAGE = 1] = "SET_ENTER_CODE_PAGE", n[n.SET_EMAIL = 2] = "SET_EMAIL", n[n.SET_SESSION_TOKEN = 3] = "SET_SESSION_TOKEN", n[n.SET_OTP_CODE = 4] = "SET_OTP_CODE", n[n.SET_LEGAL_CHECK = 5] = "SET_LEGAL_CHECK", n[n.SET_CODE_VALID = 6] = "SET_CODE_VALID", n[n.SET_LOADING = 7] = "SET_LOADING", n[n.SET_CHECKBOX_AND_CONTINUE_BUTTON_STATE = 8] = "SET_CHECKBOX_AND_CONTINUE_BUTTON_STATE", n[n.SET_ERROR = 9] = "SET_ERROR", n[n.CLOSE_MODAL = 10] = "CLOSE_MODAL";
	var c = {
			emailVerifyCodeModalPage: B,
			email: "",
			sessionToken: "",
			code: "",
			isChecked: !1,
			isCheckboxEnabled: !1,
			isLoading: !1,
			isCodeValid: !1,
			isContinueButtonEnabled: !1,
			errorMessage: "",
			isModalOpen: !0
		},
		s = (0, R.createContext)(null),
		ce = function() {
			var e = (0, R.useContext)(s);
			if (null === e) throw new Error("EmailVerifyCodeModalContext was not provided in the current scope");
			return e
		},
		n = {
			common: ["Common.Captcha"],
			feature: "Authentication.Login"
		},
		se = {
			schematizedEventTypes: {
				authFormInteraction: "authFormInteraction",
				authButtonClick: "authButtonClick",
				authMsgShown: "authMsgShown",
				authPageLoad: "authPageload",
				authModalShown: "authModalShown",
				authClientError: "authClientError",
				usernameSuggestionShown: "usernameSuggestionShown"
			},
			eventName: {
				loginOtherDevice: "loginOtherDevice",
				formValidation: "formValidation",
				authPageLoad: "authPageload",
				authFormInteraction: "authFormInteraction",
				authButtonClick: "authButtonClick",
				authModalShown: "authModalShown",
				saiCreated: "saiCreated",
				saiMissing: "saiMissing",
				signupUsernameKeystrokes: "accountIntegrityKeystrokeEvents",
				qualifiedSignup: "qualifiedSignup"
			},
			context: {
				loginPage: "loginPage",
				loginForm: "LoginForm",
				schematizedLoginForm: "loginForm",
				landingPage: "Multiverse",
				ssoLtiInit: "ssoLtiInit",
				ssoLtiLaunch: "ssoLtiLaunch",
				ssoError: "ssoError",
				signupForm: "MultiverseSignupForm",
				schematizedSignupForm: "signupForm",
				sendOTP: "sendOTP",
				schematizedSendOTP: "sendOtp",
				enterOTP: "enterOTP",
				schematizedEnterOTP: "enterOtp",
				validateOTP: "validateOTP",
				disambiguationOTP: "disambiguationOTP",
				disambiguationEmail: "disambiguationEmail",
				disambiguationPhone: "disambiguationPhone",
				disambigOTP: "disambigOtp",
				revertAccount: "revertAccount",
				accountSwitcherConfirmation: "accountSwitcherConfirmation",
				accountSwitcherModal: "accountSwitcherModal",
				accountSwitcherLimitError: "accountSwitcherLimitError",
				accountSwitcherLogin: "accountSwitcherLogin",
				accountSwitcherSignup: "accountSwitcherSignup",
				accountSwitcherBackendRequestFailure: "accountSwitcherBackendRequestFailure",
				accountSwitcherLocalStorageFailure: "accountSwitcherLocalStorageFailure",
				accountSwitcherVpcLogin: "accountSwitcherVpcLogin",
				accountSwitcherVpcSignup: "accountSwitcherVpcSignup",
				passkeyLogin: "passkeyLogin",
				hba: "hba"
			},
			verifiedParentalConsentContext: {
				chargeback: {
					finishParentalSignup: "finishParentalSignup",
					homepage: "homepage"
				},
				savePaymentMethods: {
					finishParentalSignup: "finishParentalSignupDevsubs",
					homepage: "homepageDevsubs"
				},
				changeBirthdayContext: {
					finishParentalSignup: "finishParentalSignupAgeChange",
					homepage: "homepageAgeChange"
				}
			},
			aType: {
				buttonClick: "buttonClick",
				click: "click",
				offFocus: "offFocus",
				focus: "focus",
				shown: "shown",
				dismissed: "dismissed"
			},
			field: {
				loginOtherDevice: "loginOtherDevice",
				loginOTP: "loginOTP",
				OTP: "otp",
				loginSubmitButtonName: "loginSubmit",
				password: "password",
				username: "username",
				signupSubmitButtonName: "signupSubmit",
				appButtonClickName: "AppLink",
				showPassword: "showPassword",
				hidePassword: "hidePassword",
				birthdayDay: "birthdayDay",
				birthdayMonth: "birthdayMonth",
				birthdayYear: "birthdayYear",
				signupUsername: "signupUsername",
				signupPassword: "signupPassword",
				signupEmail: "signupEmail",
				parentEmail: "parentEmail",
				genderMale: "genderMale",
				genderFemale: "genderFemale",
				email: "email",
				code: "code",
				otpCode: "OTPcode",
				errorMessage: "errorMessage",
				resendErrorMessage: "resendErrorMessage",
				accountSelection: "accountSelection",
				checked: "checked",
				unchecked: "unchecked",
				usernameValid: "usernameValid",
				revertAccountSubmitButtonName: "revertAccountSubmit",
				birthday: "birthday",
				accountSwitcher: "accountSwitcher",
				logoutPopup: "logoutPopup",
				hasAuthIntent: "hasAuthIntent"
			},
			btn: {
				cancel: "cancel",
				sendCode: "sendCode",
				resendCode: "resendCode",
				resend: "resend",
				login: "login",
				logoutAll: "logoutAll",
				signup: "signup",
				continue: "continue",
				changeEmail: "changeEmail",
				select: "select",
				parentalConsentCheckbox: "pc_checkbox",
				termsOfServiceCheckbox: "tos_checkbox",
				privacyPolicyCheckbox: "pp_checkbox",
				submitRevertAccount: "submitRevertAccount",
				dismiss: "dismiss",
				switch: "switch",
				addAccount: "addAccount",
				primaryButton: "primaryButton",
				secondaryButton: "secondaryButton",
				usernameSuggestion: "usernameSuggestion",
				launchSsoDeeplink: "launchSsoDeeplink",
				koreaConsentAllCheckbox: "koreaConsentAll",
				koreaTosAndPrivacyPolicyCheckbox: "koreaToS1",
				koreaThirdPartyPersonalInfoCheckbox: "koreaToS2",
				koreaTransferPersonalInfoCheckbox: "koreaToS3",
				koreaPersonalInfoCheckbox: "koreaToS4",
				koreaOptionalPersonalInfoCheckbox: "koreaToS5Optional",
				koreaAgreeTermsOfService: "koreaAgreeToS",
				logoutPopupLogout: "logoutPopupLogout"
			},
			input: {
				redacted: "[Redacted]"
			},
			origin: {
				webVerifiedSignup: "WebVerifiedSignup",
				signup: "signup",
				login: "login"
			},
			text: {
				finishCreatingYourAccount: "Create Your Roblox Account",
				signup: "Sign Up",
				createAccount: "Create Account",
				logout: "Log Out"
			},
			clientErrorTypes: {
				pageLoadFailed: "pageLoadFailed",
				userInfoFetchFailed: "userInfoFetchFailed",
				localStorageSetFailure: "localStorageSetFailure",
				localStorageGetFailure: "localStorageGetFailure",
				localStorageRemoveFailure: "localStorageRemoveFailure",
				logoutAllAccountSwitcherAccounts: "logoutAllAccountSwitcherAccounts"
			}
		},
		le = CoreRobloxUtilities,
		ue = le.eventStreamService.eventTypes,
		de = (0, I.withTranslations)(function(e) {
			function t() {
				g(!0), ne(m, se.btn.sendCode, n), r()
			}
			var n = e.origin,
				o = e.titleText,
				i = e.descriptionText,
				r = e.onSendCode,
				a = e.errorMessage,
				c = e.onClose,
				s = e.translate,
				e = ce(),
				l = e.state.email,
				u = e.dispatch,
				e = (0, R.useState)(!0),
				d = e[0],
				h = e[1],
				e = (0, R.useState)(!1),
				E = e[0],
				g = e[1],
				m = se.context.sendOTP,
				p = (0, I.useDebounce)(l, 200);
			(0, R.useEffect)(function() {
				var e;
				d && 0 < l.length && (h(!1), e = n, ee({
					ctx: se.context.sendOTP,
					field: se.field.email,
					origin: e
				}), Z({
					ctx: se.context.schematizedSendOTP,
					field: se.field.email,
					origin: e
				})), !C(p) && 0 < p.length ? u({
					type: M.SET_ERROR,
					errorMessage: s(S)
				}) : u({
					type: M.SET_ERROR,
					errorMessage: ""
				})
			}, [p]), (0, R.useEffect)(function() {
				a && g(!1)
			}, [a]);
			return (0, R.useEffect)(function() {
				oe(m, se.aType.shown, n), ie(m, n)
			}, []), N().createElement(R.Fragment, null, N().createElement(D.Modal.Header, {
				title: o,
				onClose: function() {
					ne(m, se.btn.cancel, n), oe(m, se.aType.dismissed, n), c()
				}
			}), N().createElement(D.Modal.Body, null, N().createElement("p", {
				className: "email-verify-code-help-text"
			}, i), N().createElement("input", {
				placeholder: s(f),
				onChange: function(e) {
					return e = e.target.value, void u({
						type: M.SET_EMAIL,
						email: e
					})
				},
				type: "email",
				autoFocus: !0,
				className: "form-control input-field email-verify-code-input",
				autoComplete: "email",
				maxLength: 320,
				onKeyPress: function(e) {
					"Enter" === e.key && C(l) && !E && t()
				},
				value: l
			}), N().createElement("p", {
				className: "text-error input-validation email-verify-code-error-text"
			}, a), N().createElement(D.Button, {
				className: "email-verify-code-button",
				variant: D.Button.variants.secondary,
				isDisabled: E || !C(l),
				onClick: t
			}, s(T))))
		}, n),
		he = (0, I.withTranslations)(function(e) {
			function t() {
				var t;
				y(!1), 0 === O && (t = setInterval(function() {
					_(function(e) {
						return 1 === e && (clearInterval(t), y(!0)), e - 1
					})
				}, 1e3)), _(30)
			}

			function n() {
				ne(x, se.btn.resendCode, i), E(), t()
			}

			function o(e) {
				var t, n, o;
				v({
					type: M.SET_LEGAL_CHECK,
					isChecked: e.target.checked
				}), t = x, n = se.btn.parentalConsentCheckbox, o = e.target.checked, e = i, le.eventStreamService.sendEventWithTarget(ue.buttonClick, t, {
					btn: n,
					field: o ? se.field.checked : se.field.unchecked,
					origin: e
				})
			}
			var i = e.origin,
				r = e.titleText,
				a = e.descriptionText,
				c = e.legalCheckboxLabel,
				s = e.code,
				l = e.codeLength,
				u = e.isCheckboxEnabled,
				d = e.isContinueButtonEnabled,
				h = e.onContinueButtonPressed,
				E = e.onResendCode,
				g = e.onClose,
				m = e.translate,
				p = e.isChangeEmailEnabled,
				f = ce(),
				S = f.state,
				e = S.email,
				T = S.isChecked,
				C = S.isLoading,
				S = S.errorMessage,
				v = f.dispatch,
				f = (0, R.useState)(!0),
				b = f[0],
				y = f[1],
				f = (0, R.useState)(0),
				O = f[0],
				_ = f[1],
				f = (0, R.useState)(!0),
				k = f[0],
				w = f[1],
				f = (0, I.useDebounce)(s, 200),
				x = se.context.enterOTP;
			(0, R.useEffect)(function() {
				var e;
				k && 0 < s.length && (w(!1), e = i, ee({
					ctx: se.context.enterOTP,
					field: se.field.otpCode,
					origin: e
				}), Z({
					ctx: se.context.schematizedEnterOTP,
					field: se.field.code,
					origin: e
				}))
			}, [f]);
			e = N().createElement("div", {
				className: "email-verify-code-help-text",
				dangerouslySetInnerHTML: {
					__html: "<p className='email-verify-code-help-text'>" + m(U, {
						email: "<b>" + e + "</b>"
					}) + "</p>"
				}
			});
			return (0, R.useEffect)(function() {
				oe(x, se.aType.shown, i), ie(x, i), t()
			}, []), N().createElement(R.Fragment, null, N().createElement(D.Modal.Header, {
				title: r,
				onClose: function() {
					ne(x, se.btn.cancel, i), oe(x, se.aType.dismissed, i), g()
				}
			}), N().createElement(D.Modal.Body, null, p ? N().createElement(R.Fragment, null, e, N().createElement("div", {
				className: "email-verify-code-email-display"
			}, N().createElement("button", {
				className: "email-verify-code-change-email-link text-link",
				type: "button",
				onClick: function() {
					v({
						type: M.SET_ENTER_EMAIL_PAGE
					}), ne(x, se.btn.changeEmail, i)
				}
			}, m(G)))) : N().createElement("p", {
				className: "email-verify-code-help-text"
			}, a), N().createElement("input", {
				placeholder: m(P),
				onChange: function(e) {
					return function(e) {
						v({
							type: M.SET_ERROR,
							errorMessage: ""
						});
						e = e.replace(/\D/g, "");
						v({
							type: M.SET_OTP_CODE,
							code: e
						})
					}(e.target.value)
				},
				type: "text",
				inputMode: "numeric",
				maxLength: l,
				autoFocus: !0,
				className: "form-control input-field email-verify-code-input",
				value: s,
				disabled: C
			}), N().createElement("p", {
				className: "text-error email-verify-code-error-text"
			}, S), N().createElement(function() {
				return c ? N().createElement("div", {
					className: "legal-checkbox-container"
				}, N().createElement(re, {
					id: "parent-consent",
					legalText: c,
					isChecked: T,
					disabled: !u,
					onCheckBoxChanged: o
				})) : null
			}, null), N().createElement(function() {
				return c ? N().createElement(D.Button, {
					className: "email-verify-code-button",
					variant: D.Button.variants.primary,
					onClick: h,
					isDisabled: !d
				}, m(V)) : null
			}, null), N().createElement(function() {
				return C ? N().createElement(D.Loading, null) : N().createElement(D.Button, {
					className: "email-verify-code-button",
					variant: D.Button.variants.secondary,
					onClick: n,
					isDisabled: !b
				}, b ? m(A) : m(L) + " (" + O + ")")
			}, null), N().createElement(function() {
				return c ? null : N().createElement("div", {
					className: "font-caption-header email-verify-code-help-link"
				}, N().createElement("a", {
					className: "text-link",
					href: "https://en.help.roblox.com/hc/articles/11014749736980",
					target: "_blank",
					rel: "noreferrer"
				}, m(K)))
			}, null)))
		}, {
			common: [],
			feature: "Authentication.OneTimePasscode"
		}),
		Ee = CoreUtilities,
		ge = function(e, a, c, s) {
			return new(c = c || Promise)(function(n, t) {
				function o(e) {
					try {
						r(s.next(e))
					} catch (e) {
						t(e)
					}
				}

				function i(e) {
					try {
						r(s.throw(e))
					} catch (e) {
						t(e)
					}
				}

				function r(e) {
					var t;
					e.done ? n(e.value) : ((t = e.value) instanceof c ? t : new c(function(e) {
						e(t)
					})).then(o, i)
				}
				r((s = s.apply(e, a || [])).next())
			})
		},
		me = function(n, o) {
			var i, r, a, c = {
					label: 0,
					sent: function() {
						if (1 & a[0]) throw a[1];
						return a[1]
					},
					trys: [],
					ops: []
				},
				e = {
					next: t(0),
					throw: t(1),
					return: t(2)
				};
			return "function" == typeof Symbol && (e[Symbol.iterator] = function() {
				return this
			}), e;

			function t(t) {
				return function(e) {
					return function(t) {
						if (i) throw new TypeError("Generator is already executing.");
						for (; c;) try {
							if (i = 1, r && (a = 2 & t[0] ? r.return : t[0] ? r.throw || ((a = r.return) && a.call(r), 0) : r.next) && !(a = a.call(r, t[1])).done) return a;
							switch (r = 0, a && (t = [2 & t[0], a.value]), t[0]) {
								case 0:
								case 1:
									a = t;
									break;
								case 4:
									return c.label++, {
										value: t[1],
										done: !1
									};
								case 5:
									c.label++, r = t[1], t = [0];
									continue;
								case 7:
									t = c.ops.pop(), c.trys.pop();
									continue;
								default:
									if (!(a = 0 < (a = c.trys).length && a[a.length - 1]) && (6 === t[0] || 2 === t[0])) {
										c = 0;
										continue
									}
									if (3 === t[0] && (!a || t[1] > a[0] && t[1] < a[3])) {
										c.label = t[1];
										break
									}
									if (6 === t[0] && c.label < a[1]) {
										c.label = a[1], a = t;
										break
									}
									if (a && c.label < a[2]) {
										c.label = a[2], c.ops.push(t);
										break
									}
									a[2] && c.ops.pop(), c.trys.pop();
									continue
							}
							t = o.call(n, c)
						} catch (e) {
							t = [6, e], r = 0
						} finally {
							i = a = 0
						}
						if (5 & t[0]) throw t[1];
						return {
							value: t[0] ? t[1] : void 0,
							done: !0
						}
					}([t, e])
				}
			}
		},
		pe = function(e, a, c, s) {
			return new(c = c || Promise)(function(n, t) {
				function o(e) {
					try {
						r(s.next(e))
					} catch (e) {
						t(e)
					}
				}

				function i(e) {
					try {
						r(s.throw(e))
					} catch (e) {
						t(e)
					}
				}

				function r(e) {
					var t;
					e.done ? n(e.value) : ((t = e.value) instanceof c ? t : new c(function(e) {
						e(t)
					})).then(o, i)
				}
				r((s = s.apply(e, a || [])).next())
			})
		},
		fe = function(n, o) {
			var i, r, a, c = {
					label: 0,
					sent: function() {
						if (1 & a[0]) throw a[1];
						return a[1]
					},
					trys: [],
					ops: []
				},
				e = {
					next: t(0),
					throw: t(1),
					return: t(2)
				};
			return "function" == typeof Symbol && (e[Symbol.iterator] = function() {
				return this
			}), e;

			function t(t) {
				return function(e) {
					return function(t) {
						if (i) throw new TypeError("Generator is already executing.");
						for (; c;) try {
							if (i = 1, r && (a = 2 & t[0] ? r.return : t[0] ? r.throw || ((a = r.return) && a.call(r), 0) : r.next) && !(a = a.call(r, t[1])).done) return a;
							switch (r = 0, a && (t = [2 & t[0], a.value]), t[0]) {
								case 0:
								case 1:
									a = t;
									break;
								case 4:
									return c.label++, {
										value: t[1],
										done: !1
									};
								case 5:
									c.label++, r = t[1], t = [0];
									continue;
								case 7:
									t = c.ops.pop(), c.trys.pop();
									continue;
								default:
									if (!(a = 0 < (a = c.trys).length && a[a.length - 1]) && (6 === t[0] || 2 === t[0])) {
										c = 0;
										continue
									}
									if (3 === t[0] && (!a || t[1] > a[0] && t[1] < a[3])) {
										c.label = t[1];
										break
									}
									if (6 === t[0] && c.label < a[1]) {
										c.label = a[1], a = t;
										break
									}
									if (a && c.label < a[2]) {
										c.label = a[2], c.ops.push(t);
										break
									}
									a[2] && c.ops.pop(), c.trys.pop();
									continue
							}
							t = o.call(n, c)
						} catch (e) {
							t = [6, e], r = 0
						} finally {
							i = a = 0
						}
						if (5 & t[0]) throw t[1];
						return {
							value: t[0] ? t[1] : void 0,
							done: !0
						}
					}([t, e])
				}
			}
		},
		v = (0, I.withTranslations)(function(e) {
			e.containerId;
			var t = e.codeLength,
				n = e.onEmailCodeEntered,
				o = e.onComplete,
				i = e.onModalAbandoned,
				r = e.enterEmailTitle,
				a = e.enterEmailDescription,
				c = e.enterCodeTitle,
				s = e.enterCodeDescription,
				l = e.legalCheckboxLabel,
				u = e.origin,
				d = e.translate,
				h = e.isChangeEmailEnabled,
				E = void 0 !== h && h,
				g = e.renderInWebview,
				m = ce(),
				p = m.state,
				f = p.emailVerifyCodeModalPage,
				S = p.email,
				T = p.sessionToken,
				C = p.code,
				v = p.isChecked,
				b = p.isCheckboxEnabled,
				y = p.isLoading,
				O = p.isCodeValid,
				h = p.errorMessage,
				e = p.isModalOpen,
				_ = p.isContinueButtonEnabled,
				k = m.dispatch,
				w = (0, I.useDebounce)(C, 200);
			(0, R.useEffect)(function() {
				n && !l && w.length === t ? (A(), k({
					type: M.SET_LOADING,
					isLoading: !0
				}), ne(se.context.enterOTP, se.btn.login, u)) : l && k({
					type: M.SET_CHECKBOX_AND_CONTINUE_BUTTON_STATE,
					isContinueButtonEnabled: w.length === t && v,
					isCheckboxEnabled: w.length === t
				})
			}, [w, v]), (0, R.useEffect)(function() {
				l && o && O ? (k({
					type: M.CLOSE_MODAL
				}), oe(se.context.enterOTP, se.aType.dismissed, u), ne(se.context.enterOTP, se.btn.signup, u), o({
					otpSessionToken: T,
					otpContactType: Q
				})) : O && n && (k({
					type: M.CLOSE_MODAL
				}), n(T, w))
			}, [O]), (0, R.useEffect)(function() {
				function e(e) {
					if (e.detail) {
						if (e.detail.shouldCloseModal) return void P();
						k({
							type: M.SET_ERROR,
							errorMessage: e.detail.errorMessage
						})
					}
					k({
						type: M.SET_OTP_CODE,
						code: ""
					}), k({
						type: M.SET_LOADING,
						isLoading: !1
					})
				}
				return window.addEventListener("onEnterEmailVerifyCodeError", e),
					function() {
						window.removeEventListener("onEnterEmailVerifyCodeError", e)
					}
			}, []), (0, R.useEffect)(function() {
				window.addEventListener("closeEmailVerifyCodeModal", P)
			}, []);

			function x(e, t) {
				var n = e.data,
					e = e.status;
				return k({
					type: M.SET_LOADING,
					isLoading: !1
				}), n === X ? (k({
					type: M.SET_ERROR,
					errorMessage: d(z)
				}), void te(t, String(n), u)) : n === Y ? (k({
					type: M.SET_ERROR,
					errorMessage: d(H)
				}), void te(t, String(n), u)) : n === $ ? (k({
					type: M.SET_ERROR,
					errorMessage: d(j)
				}), void te(t, String(n), u)) : e === J ? (k({
					type: M.SET_ERROR,
					errorMessage: d(z)
				}), void te(t, String(e), u)) : n === q ? (te(t, String(n), u), void L()) : (te(t, String(n), u), void k({
					type: M.SET_ERROR,
					errorMessage: d(W)
				}))
			}
			var P = function() {
					i(), k({
						type: M.CLOSE_MODAL
					})
				},
				L = function() {
					return pe(void 0, void 0, void 0, function() {
						var t;
						return fe(this, function(e) {
							switch (e.label) {
								case 0:
									return e.trys.push([0, 2, , 3]), [4, (n = {
										origin: u,
										contactType: Q,
										contactValue: S
									}, ge(void 0, void 0, Promise, function() {
										var t;
										return me(this, function(e) {
											switch (e.label) {
												case 0:
													return t = ae("sendCode"), t = {
														url: t,
														withCredentials: !0
													}, [4, Ee.httpService.post(t, n)];
												case 1:
													return [2, e.sent().data]
											}
										})
									}))];
								case 1:
									return t = e.sent(), k({
										type: M.SET_SESSION_TOKEN,
										sessionToken: null !== (t = null == t ? void 0 : t.otpSessionToken) && void 0 !== t ? t : ""
									}), k({
										type: M.SET_ERROR,
										errorMessage: ""
									}), k({
										type: M.SET_ENTER_CODE_PAGE
									}), [3, 3];
								case 2:
									return t = e.sent(), x(t, se.context.sendOTP), [3, 3];
								case 3:
									return [2]
							}
							var n
						})
					})
				},
				A = function() {
					return pe(void 0, void 0, void 0, function() {
						var t;
						return fe(this, function(e) {
							switch (e.label) {
								case 0:
									return e.trys.push([0, 2, , 3]), [4, (n = {
										passCode: w,
										otpSessionToken: T,
										contactType: Q,
										origin: u
									}, ge(void 0, void 0, Promise, function() {
										var t;
										return me(this, function(e) {
											switch (e.label) {
												case 0:
													return t = ae("validateCode"), t = {
														url: t,
														withCredentials: !0
													}, [4, Ee.httpService.post(t, n)];
												case 1:
													return [2, e.sent().data]
											}
										})
									}))];
								case 1:
									return e.sent(), k({
										type: M.SET_CODE_VALID,
										isCodeValid: !0
									}), [3, 3];
								case 2:
									return t = e.sent(), x(t, se.context.validateOTP), [3, 3];
								case 3:
									return [2]
							}
							var n
						})
					})
				};
			return N().createElement(D.Modal, {
				className: g ? "email-verify-code-webview" : "email-verify-code-modal",
				show: e,
				size: "lg",
				backdrop: "static",
				onHide: P
			}, N().createElement(R.Fragment, null, f === B && N().createElement(de, {
				origin: u,
				titleText: r,
				descriptionText: a,
				onSendCode: L,
				errorMessage: h,
				onClose: P,
				translate: d
			}), f === F && T && N().createElement(he, {
				origin: u,
				titleText: c,
				descriptionText: s,
				legalCheckboxLabel: l,
				code: C,
				codeLength: t,
				onContinueButtonPressed: function() {
					_ && (ne(se.context.enterOTP, se.btn.continue, u), A())
				},
				onResendCode: function() {
					return pe(void 0, void 0, void 0, function() {
						var t;
						return fe(this, function(e) {
							switch (e.label) {
								case 0:
									return e.trys.push([0, 2, , 3]), [4, (n = {
										contactType: Q,
										origin: u,
										otpSessionToken: T
									}, ge(void 0, void 0, Promise, function() {
										var t;
										return me(this, function(e) {
											switch (e.label) {
												case 0:
													return t = ae("resendCode"), t = {
														url: t,
														withCredentials: !0
													}, [4, Ee.httpService.post(t, n)];
												case 1:
													return [2, e.sent().data]
											}
										})
									}))];
								case 1:
									return t = e.sent(), k({
										type: M.SET_SESSION_TOKEN,
										sessionToken: null !== (t = null == t ? void 0 : t.otpSessionToken) && void 0 !== t ? t : ""
									}), k({
										type: M.SET_ERROR,
										errorMessage: ""
									}), [3, 3];
								case 2:
									return t = e.sent(), x(t, se.context.enterOTP), [3, 3];
								case 3:
									return [2]
							}
							var n
						})
					})
				},
				isLoading: y,
				isContinueButtonEnabled: _,
				isCheckboxEnabled: b,
				isChecked: v,
				errorMessage: h,
				onClose: P,
				translate: d,
				isChangeEmailEnabled: E
			})))
		}, n),
		n = {
			renderEmailVerifyCodeModal: n = function(e) {
				var t = e.containerId,
					n = e.codeLength,
					o = e.onEmailCodeEntered,
					i = e.onComplete,
					r = e.onModalAbandoned,
					a = e.enterEmailTitle,
					c = e.enterEmailDescription,
					s = e.enterCodeTitle,
					l = e.enterCodeDescription,
					u = e.legalCheckboxLabel,
					d = e.origin,
					h = e.translate,
					E = e.isChangeEmailEnabled,
					g = e.renderInWebview,
					e = document.getElementById(t);
				return null != e && ((0, m.unmountComponentAtNode)(e), (0, m.render)(N().createElement(p, null, N().createElement(v, {
					containerId: t,
					codeLength: n,
					onEmailCodeEntered: o,
					onModalAbandoned: r,
					legalCheckboxLabel: u,
					onComplete: i,
					enterEmailTitle: a,
					enterEmailDescription: c,
					enterCodeTitle: s,
					enterCodeDescription: l,
					origin: d,
					translate: h,
					isChangeEmailEnabled: E,
					renderInWebview: g
				})), e), !0)
			}
		};
	Object.assign(e(), {
		EmailVerifyCodeModalService: n
	})
}();
//# sourceMappingURL=https://js.rbxcdn.com/ffa08c6a06874e0b2e0e02b8f953b849-emailVerifyCodeModal.bundle.min.js.map

/* Bundle detector */
window.Roblox && window.Roblox.BundleDetector && window.Roblox.BundleDetector.bundleDetected("EmailVerifyCodeModal");