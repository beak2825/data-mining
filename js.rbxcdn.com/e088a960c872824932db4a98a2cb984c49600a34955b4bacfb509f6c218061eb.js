! function() {
	"use strict";
	var e = {
			n: function(t) {
				var n = t && t.__esModule ? function() {
					return t.default
				} : function() {
					return t
				};
				return e.d(n, {
					a: n
				}), n
			},
			d: function(t, n) {
				for (var r in n) e.o(n, r) && !e.o(t, r) && Object.defineProperty(t, r, {
					enumerable: !0,
					get: n[r]
				})
			},
			o: function(e, t) {
				return Object.prototype.hasOwnProperty.call(e, t)
			},
			r: function(e) {
				"undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
					value: "Module"
				}), Object.defineProperty(e, "__esModule", {
					value: !0
				})
			}
		},
		t = {};
	e.r(t), e.d(t, {
		getMetadata: function() {
			return z
		}
	});
	var n = {};
	e.r(n), e.d(n, {
		getEmailConfiguration: function() {
			return te
		},
		updateForCurrentUser: function() {
			return ee
		}
	});
	var r = {};
	e.r(r), e.d(r, {
		getDetailsForUniverseIds: function() {
			return ie
		}
	});
	var o = {};
	e.r(o), e.d(o, {
		getMySettingsInfo: function() {
			return ce
		}
	});
	var i = {};
	e.r(i), e.d(i, {
		getMetadata: function() {
			return Oe
		},
		resendCode: function() {
			return Ne
		},
		sendCodeForUser: function() {
			return _e
		},
		validateCode: function() {
			return Te
		}
	});
	var a = {};
	e.r(a), e.d(a, {
		changeForCurrentUser: function() {
			return Me
		},
		resetSendPrompted: function() {
			return ke
		},
		validate: function() {
			return Ve
		}
	});
	var u = {};
	e.r(u), e.d(u, {
		getPhoneConfiguration: function() {
			return qe
		},
		getPhonePrefixList: function() {
			return Xe
		},
		prioritizeDefaultPrefix: function() {
			return ze
		}
	});
	var s = {};
	e.r(s), e.d(s, {
		disconnectPlaystation: function() {
			return at
		},
		getPlaystationConnection: function() {
			return it
		}
	});
	var c = {};
	e.r(c), e.d(c, {
		getAllForCurrentUser: function() {
			return ht
		},
		updateForCurrentUser: function() {
			return St
		}
	});
	var l = {};
	e.r(l), e.d(l, {
		verifyPuzzle: function() {
			return yt
		}
	});
	var p = {};
	e.r(p), e.d(p, {
		getPuzzle: function() {
			return gt
		},
		verifyPuzzle: function() {
			return Lt
		}
	});
	var d = {};
	e.r(d), e.d(d, {
		generateToken: function() {
			return xt
		}
	});
	var f = {};
	e.r(f), e.d(f, {
		verifyPuzzle: function() {
			return zt
		}
	});
	var E = {};
	e.r(E), e.d(E, {
		answerQuestion: function() {
			return on
		},
		getQuestion: function() {
			return rn
		}
	});
	var m = {};
	e.r(m), e.d(m, {
		getSessions: function() {
			return An
		},
		logoutFromAllSessionsAndReauthenticate: function() {
			return Nn
		},
		logoutSession: function() {
			return _n
		}
	});
	var h = {};
	e.r(h), e.d(h, {
		getIconsForUniverseIds: function() {
			return In
		}
	});
	var S = {};
	e.r(S), e.d(S, {
		deleteSecurityKey: function() {
			return Nr
		},
		disableAuthenticator: function() {
			return cr
		},
		disableEmailTwoStepVerification: function() {
			return ir
		},
		disableSmsTwoStepVerification: function() {
			return hr
		},
		enableAuthenticator: function() {
			return ar
		},
		enableEmailTwoStepVerification: function() {
			return nr
		},
		enableSecurityKey: function() {
			return Sr
		},
		enableSmsTwoStepVerification: function() {
			return fr
		},
		enableVerifyAuthenticator: function() {
			return ur
		},
		enableVerifySecurityKey: function() {
			return vr
		},
		generateRecoveryCodes: function() {
			return dr
		},
		generateResaleFrictionChallenge: function() {
			return Pr
		},
		generateSpendFrictionChallenge: function() {
			return Ir
		},
		generateTradeFrictionChallenge: function() {
			return wr
		},
		getMetadata: function() {
			return er
		},
		getPasskeyOptions: function() {
			return Or
		},
		getRecoveryCodesStatus: function() {
			return pr
		},
		getResaleFrictionStatus: function() {
			return Cr
		},
		getSecurityKeyOptions: function() {
			return Ar
		},
		getSpendFrictionStatus: function() {
			return yr
		},
		getTradeFrictionStatus: function() {
			return Rr
		},
		getUserConfiguration: function() {
			return tr
		},
		listSecurityKey: function() {
			return Tr
		},
		redeemResaleFrictionChallenge: function() {
			return gr
		},
		redeemSpendFrictionChallenge: function() {
			return Dr
		},
		redeemTradeFrictionChallenge: function() {
			return Ur
		},
		retractCrossDevice: function() {
			return kr
		},
		retryCrossDevice: function() {
			return Lr
		},
		sendEmailCode: function() {
			return rr
		},
		sendSmsCode: function() {
			return Er
		},
		verifyAuthenticatorCode: function() {
			return sr
		},
		verifyCrossDevice: function() {
			return Mr
		},
		verifyEmailCode: function() {
			return or
		},
		verifyPasskeyCredential: function() {
			return br
		},
		verifyPasswordCode: function() {
			return Vr
		},
		verifyRecoveryCode: function() {
			return lr
		},
		verifySecurityKeyCredential: function() {
			return _r
		},
		verifySmsCode: function() {
			return mr
		}
	});
	var v = {};
	e.r(v), e.d(v, {
		getSettingsUiPolicy: function() {
			return Gr
		}
	});
	var A = {};
	e.r(A), e.d(A, {
		disconnectXbox: function() {
			return Zr
		},
		getXboxConnection: function() {
			return Jr
		}
	});
	var _ = {};
	e.r(_), e.d(_, {
		recordMetric: function() {
			return ro
		}
	});
	var N = {};
	e.r(N), e.d(N, {
		getPatToken: function() {
			return lo
		}
	});
	var T = {};
	e.r(T), e.d(T, {
		continueChallenge: function() {
			return Ao
		}
	});
	var O = {};
	e.r(O), e.d(O, {
		deletePasskeyBatch: function() {
			return Uo
		},
		finishPasskeyRegistration: function() {
			return Do
		},
		listAllCredentials: function() {
			return go
		},
		resetPassword: function() {
			return Lo
		},
		startPasskeyRegistration: function() {
			return Po
		},
		startPreAuthPasskeyRegistration: function() {
			return wo
		}
	});
	var b = {};
	e.r(b), e.d(b, {
		getNativeResponse: function() {
			return xo
		},
		getNavigatorCredentials: function() {
			return Wo
		}
	});
	var y = {};
	e.r(y), e.d(y, {
		recoverySessionMetadata: function() {
			return ei
		},
		requestRecovery: function() {
			return jo
		},
		resendCode: function() {
			return Zo
		},
		sendCode: function() {
			return Jo
		},
		setEmail: function() {
			return ti
		},
		verifyCode: function() {
			return $o
		}
	});
	var R, C, I = Roblox,
		w = e.n(I),
		P = React,
		D = e.n(P),
		U = ReactDOM,
		g = CoreUtilities,
		L = function(e) {
			return {
				isError: !1,
				value: e
			}
		},
		M = L,
		k = function(e, t, n) {
			return void 0 === n && (n = null), {
				isError: !0,
				error: e,
				errorRaw: t,
				errorStatusCode: n
			}
		},
		V = function(e, t) {
			return e.isError ? e : L(t(e.value))
		},
		F = function(e, t, n, r) {
			return new(n || (n = Promise))((function(o, i) {
				function a(e) {
					try {
						s(r.next(e))
					} catch (e) {
						i(e)
					}
				}

				function u(e) {
					try {
						s(r.throw(e))
					} catch (e) {
						i(e)
					}
				}

				function s(e) {
					var t;
					e.done ? o(e.value) : (t = e.value, t instanceof n ? t : new n((function(e) {
						e(t)
					}))).then(a, u)
				}
				s((r = r.apply(e, t || [])).next())
			}))
		},
		x = function(e, t) {
			var n, r, o, i, a = {
				label: 0,
				sent: function() {
					if (1 & o[0]) throw o[1];
					return o[1]
				},
				trys: [],
				ops: []
			};
			return i = {
				next: u(0),
				throw: u(1),
				return: u(2)
			}, "function" == typeof Symbol && (i[Symbol.iterator] = function() {
				return this
			}), i;

			function u(i) {
				return function(u) {
					return function(i) {
						if (n) throw new TypeError("Generator is already executing.");
						for (; a;) try {
							if (n = 1, r && (o = 2 & i[0] ? r.return : i[0] ? r.throw || ((o = r.return) && o.call(r), 0) : r.next) && !(o = o.call(r, i[1])).done) return o;
							switch (r = 0, o && (i = [2 & i[0], o.value]), i[0]) {
								case 0:
								case 1:
									o = i;
									break;
								case 4:
									return a.label++, {
										value: i[1],
										done: !1
									};
								case 5:
									a.label++, r = i[1], i = [0];
									continue;
								case 7:
									i = a.ops.pop(), a.trys.pop();
									continue;
								default:
									if (!(o = a.trys, (o = o.length > 0 && o[o.length - 1]) || 6 !== i[0] && 2 !== i[0])) {
										a = 0;
										continue
									}
									if (3 === i[0] && (!o || i[1] > o[0] && i[1] < o[3])) {
										a.label = i[1];
										break
									}
									if (6 === i[0] && a.label < o[1]) {
										a.label = o[1], o = i;
										break
									}
									if (o && a.label < o[2]) {
										a.label = o[2], a.ops.push(i);
										break
									}
									o[2] && a.ops.pop(), a.trys.pop();
									continue
							}
							i = t.call(e, a)
						} catch (e) {
							i = [6, e], r = 0
						} finally {
							n = o = 0
						}
						if (5 & i[0]) throw i[1];
						return {
							value: i[0] ? i[1] : void 0,
							done: !0
						}
					}([i, u])
				}
			}
		},
		W = function(e) {
			return "object" != typeof e ? null : function(e) {
				var t = [];
				if (!e || "object" != typeof e) return [];
				var n = e.errors;
				return n instanceof Array ? (n.forEach((function(e) {
					if (e && "object" == typeof e) {
						var n = e.code;
						"number" == typeof n && t.push(n)
					}
				})), t) : []
			}(e.data)[0] || null
		},
		H = function(e, t) {
			return null == e ? null : Object.values(e).includes(t) ? t : null
		},
		Y = function(e, t, n) {
			return F(void 0, void 0, Promise, (function() {
				var r, o, i, a;
				return x(this, (function(u) {
					switch (u.label) {
						case 0:
							return u.trys.push([0, 2, , 3]), [4, e];
						case 1:
							return r = u.sent(), void 0 !== n ? [2, M(n(r.data))] : [2, M(r.data)];
						case 2:
							return o = u.sent(), i = W(o), a = function(e) {
								if ("object" != typeof e || null === e) return null;
								var t = e.status || null;
								return "number" != typeof t ? null : t
							}(o), [2, k(H(t, i), o, a)];
						case 3:
							return [2]
					}
				}))
			}))
		},
		B = function(e, t, n, r) {
			return void 0 === n && (n = W), F(void 0, void 0, Promise, (function() {
				var o, i, a;
				return x(this, (function(u) {
					switch (u.label) {
						case 0:
							return u.trys.push([0, 2, , 3]), [4, e];
						case 1:
							return o = u.sent(), void 0 !== r ? [2, M(r(o))] : [2, M(o)];
						case 2:
							return i = u.sent(), a = n(i), [2, k(H(t, a), i, 0)];
						case 3:
							return [2]
					}
				}))
			}))
		},
		G = (null !== (R = I.EnvironmentUrls.apiGatewayCdnUrl) && void 0 !== R ? R : "URL_NOT_FOUND") + "/captcha";
	! function(e) {
		e[e.UNKNOWN = 0] = "UNKNOWN"
	}(C || (C = {}));
	var K, Q, q = {
			url: G + "/v1/metadata",
			timeout: 6e4
		},
		z = function() {
			return Y(g.httpService.get(q, {}), C)
		},
		X = null !== (K = I.EnvironmentUrls.accountSettingsApi) && void 0 !== K ? K : "URL_NOT_FOUND";
	! function(e) {
		e[e.FEATURE_DISABLED = 2] = "FEATURE_DISABLED", e[e.TOO_MANY_ACCOUNTS_ON_EMAIL = 3] = "TOO_MANY_ACCOUNTS_ON_EMAIL", e[e.TOO_MANY_ATTEMPTS_TO_UPDATE_EMAIL = 6] = "TOO_MANY_ATTEMPTS_TO_UPDATE_EMAIL", e[e.INVALID_EMAIL_ADDRESS = 9] = "INVALID_EMAIL_ADDRESS"
	}(Q || (Q = {}));
	var j, J, Z = {
			withCredentials: !0,
			url: X + "/v1/email",
			timeout: 1e4
		},
		$ = {
			withCredentials: !0,
			url: X + "/v1/email",
			timeout: 1e4
		},
		ee = function(e) {
			return Y(g.httpService.post(Z, {
				emailAddress: e,
				skipVerificationEmail: !0
			}), Q)
		},
		te = function() {
			return Y(g.httpService.get($), Q)
		},
		ne = null !== (j = I.EnvironmentUrls.gamesApi) && void 0 !== j ? j : "URL_NOT_FOUND";
	! function(e) {
		e[e.UNKNOWN = 0] = "UNKNOWN"
	}(J || (J = {}));
	var re, oe = {
			url: ne + "/v1/games",
			timeout: 1e4
		},
		ie = function(e) {
			return Y(g.httpService.get(oe, {
				universeIds: e
			}), J)
		};
	! function(e) {
		e[e.UNKNOWN = 0] = "UNKNOWN"
	}(re || (re = {}));
	var ae, ue, se = {
			withCredentials: !0,
			url: "/my/settings/json",
			timeout: 1e4
		},
		ce = function() {
			return Y(g.httpService.get(se, {}), re)
		},
		le = (null !== (ae = I.EnvironmentUrls.apiGatewayUrl) && void 0 !== ae ? ae : "URL_NOT_FOUND") + "/otp-service";
	! function(e) {
		e[e.NO_ERROR = 0] = "NO_ERROR", e[e.UNKNOWN = 1] = "UNKNOWN", e[e.INVALID_CODE = 2] = "INVALID_CODE", e[e.INVALID_SESSION_TOKEN = 3] = "INVALID_SESSION_TOKEN", e[e.CODE_EXPIRED = 4] = "CODE_EXPIRED", e[e.UNVALIDATED_SESSION_TOKEN = 5] = "UNVALIDATED_SESSION_TOKEN", e[e.TOO_MANY_REQUESTS = 6] = "TOO_MANY_REQUESTS", e[e.CONTACT_MALFORMED = 7] = "CONTACT_MALFORMED", e[e.VPN_REQUIRED = 8] = "VPN_REQUIRED", e[e.UNAUTHENTICATED = 9] = "UNAUTHENTICATED", e[e.METHOD_UNAVAILABLE = 10] = "METHOD_UNAVAILABLE"
	}(ue || (ue = {}));
	var pe, de, fe, Ee = {
			withCredentials: !0,
			url: le + "/v1/sendCodeForUser",
			timeout: 1e4
		},
		me = {
			withCredentials: !0,
			url: le + "/v1/resendCode",
			timeout: 1e4
		},
		he = {
			withCredentials: !0,
			url: le + "/v1/validateCode",
			timeout: 1e4
		},
		Se = {
			withCredentials: !0,
			url: le + "/v1/metadata",
			timeout: 1e4
		};
	! function(e) {
		e.Unset = "Unset", e.Email = "Email"
	}(pe || (pe = {})),
	function(e) {
		e.Reauth = "Reauth", e.Challenge = "Challenge"
	}(de || (de = {})),
	function(e) {
		e.Default = "Default"
	}(fe || (fe = {}));
	var ve, Ae, _e = function(e) {
			return Y(g.httpService.post(Ee, {
				contactType: e,
				origin: de.Reauth,
				messageVariant: fe.Default
			}), ue)
		},
		Ne = function(e, t) {
			return Y(g.httpService.post(me, {
				contactType: e,
				origin: de.Reauth,
				otpSessionToken: t
			}), ue)
		},
		Te = function(e, t, n) {
			return Y(g.httpService.post(he, {
				contactType: e,
				origin: de.Reauth,
				passCode: n,
				otpSessionToken: t
			}), ue)
		},
		Oe = function(e) {
			return Y(g.httpService.get(Se, {
				Origin: e
			}), ue)
		},
		be = null !== (ve = I.EnvironmentUrls.authApi) && void 0 !== ve ? ve : "URL_NOT_FOUND";
	! function(e) {
		e[e.FLOODED = 2] = "FLOODED", e[e.INVALID_PASSWORD = 7] = "INVALID_PASSWORD", e[e.INVALID_CURRENT_PASSWORD = 8] = "INVALID_CURRENT_PASSWORD"
	}(Ae || (Ae = {}));
	var ye, Re = {
		withCredentials: !0,
		url: be + "/v2/user/passwords/change",
		timeout: 1e4
	};
	! function(e) {
		e[e.USER_DOES_NOT_HAVE_EMAIL = 22] = "USER_DOES_NOT_HAVE_EMAIL"
	}(ye || (ye = {}));
	var Ce, Ie = {
		withCredentials: !0,
		url: be + "/v2/passwords/reset/send-prompted",
		timeout: 1e4
	};
	! function(e) {
		e[e.VALID_PASSWORD = 0] = "VALID_PASSWORD", e[e.WEAK_PASSWORD = 1] = "WEAK_PASSWORD", e[e.SHORT_PASSWORD = 2] = "SHORT_PASSWORD", e[e.PASSWORD_SAME_AS_USERNAME = 3] = "PASSWORD_SAME_AS_USERNAME", e[e.FORBIDDEN_PASSWORD = 4] = "FORBIDDEN_PASSWORD", e[e.DUMB_STRINGS = 5] = "DUMB_STRINGS"
	}(Ce || (Ce = {}));
	var we, Pe, De, Ue = {
			withCredentials: !0,
			url: be + "/v2/passwords/validate",
			timeout: 1e4
		},
		ge = function(e, t, n, r) {
			return new(n || (n = Promise))((function(o, i) {
				function a(e) {
					try {
						s(r.next(e))
					} catch (e) {
						i(e)
					}
				}

				function u(e) {
					try {
						s(r.throw(e))
					} catch (e) {
						i(e)
					}
				}

				function s(e) {
					var t;
					e.done ? o(e.value) : (t = e.value, t instanceof n ? t : new n((function(e) {
						e(t)
					}))).then(a, u)
				}
				s((r = r.apply(e, t || [])).next())
			}))
		},
		Le = function(e, t) {
			var n, r, o, i, a = {
				label: 0,
				sent: function() {
					if (1 & o[0]) throw o[1];
					return o[1]
				},
				trys: [],
				ops: []
			};
			return i = {
				next: u(0),
				throw: u(1),
				return: u(2)
			}, "function" == typeof Symbol && (i[Symbol.iterator] = function() {
				return this
			}), i;

			function u(i) {
				return function(u) {
					return function(i) {
						if (n) throw new TypeError("Generator is already executing.");
						for (; a;) try {
							if (n = 1, r && (o = 2 & i[0] ? r.return : i[0] ? r.throw || ((o = r.return) && o.call(r), 0) : r.next) && !(o = o.call(r, i[1])).done) return o;
							switch (r = 0, o && (i = [2 & i[0], o.value]), i[0]) {
								case 0:
								case 1:
									o = i;
									break;
								case 4:
									return a.label++, {
										value: i[1],
										done: !1
									};
								case 5:
									a.label++, r = i[1], i = [0];
									continue;
								case 7:
									i = a.ops.pop(), a.trys.pop();
									continue;
								default:
									if (!(o = a.trys, (o = o.length > 0 && o[o.length - 1]) || 6 !== i[0] && 2 !== i[0])) {
										a = 0;
										continue
									}
									if (3 === i[0] && (!o || i[1] > o[0] && i[1] < o[3])) {
										a.label = i[1];
										break
									}
									if (6 === i[0] && a.label < o[1]) {
										a.label = o[1], o = i;
										break
									}
									if (o && a.label < o[2]) {
										a.label = o[2], a.ops.push(i);
										break
									}
									o[2] && a.ops.pop(), a.trys.pop();
									continue
							}
							i = t.call(e, a)
						} catch (e) {
							i = [6, e], r = 0
						} finally {
							n = o = 0
						}
						if (5 & i[0]) throw i[1];
						return {
							value: i[0] ? i[1] : void 0,
							done: !0
						}
					}([i, u])
				}
			}
		},
		Me = function(e, t) {
			return Y(g.httpService.post(Re, {
				currentPassword: e,
				newPassword: t
			}), Ae)
		},
		ke = function() {
			return Y(g.httpService.post(Ie), ye)
		},
		Ve = function(e, t) {
			return ge(void 0, void 0, Promise, (function() {
				return Le(this, (function(n) {
					return [2, Y(g.httpService.post(Ue, {
						username: e,
						password: t
					}), null).then((function(e) {
						return V(e, (function(e) {
							return H(Ce, e.code)
						}))
					}))]
				}))
			}))
		},
		Fe = "URL_NOT_FOUND",
		xe = null !== (we = I.EnvironmentUrls.accountInformationApi) && void 0 !== we ? we : Fe,
		We = null !== (Pe = I.EnvironmentUrls.apiGatewayUrl) && void 0 !== Pe ? Pe : Fe;
	! function(e) {
		e[e.UNKNOWN = 0] = "UNKNOWN"
	}(De || (De = {}));
	var He, Ye, Be = {
			withCredentials: !0,
			url: xe + "/v1/phone",
			timeout: 1e4
		},
		Ge = {
			withCredentials: !0,
			url: We + "/phone-number-api/v1/phone-prefix-list",
			timeout: 1e4
		},
		Ke = function(e, t, n, r) {
			return new(n || (n = Promise))((function(o, i) {
				function a(e) {
					try {
						s(r.next(e))
					} catch (e) {
						i(e)
					}
				}

				function u(e) {
					try {
						s(r.throw(e))
					} catch (e) {
						i(e)
					}
				}

				function s(e) {
					var t;
					e.done ? o(e.value) : (t = e.value, t instanceof n ? t : new n((function(e) {
						e(t)
					}))).then(a, u)
				}
				s((r = r.apply(e, t || [])).next())
			}))
		},
		Qe = function(e, t) {
			var n, r, o, i, a = {
				label: 0,
				sent: function() {
					if (1 & o[0]) throw o[1];
					return o[1]
				},
				trys: [],
				ops: []
			};
			return i = {
				next: u(0),
				throw: u(1),
				return: u(2)
			}, "function" == typeof Symbol && (i[Symbol.iterator] = function() {
				return this
			}), i;

			function u(i) {
				return function(u) {
					return function(i) {
						if (n) throw new TypeError("Generator is already executing.");
						for (; a;) try {
							if (n = 1, r && (o = 2 & i[0] ? r.return : i[0] ? r.throw || ((o = r.return) && o.call(r), 0) : r.next) && !(o = o.call(r, i[1])).done) return o;
							switch (r = 0, o && (i = [2 & i[0], o.value]), i[0]) {
								case 0:
								case 1:
									o = i;
									break;
								case 4:
									return a.label++, {
										value: i[1],
										done: !1
									};
								case 5:
									a.label++, r = i[1], i = [0];
									continue;
								case 7:
									i = a.ops.pop(), a.trys.pop();
									continue;
								default:
									if (!(o = a.trys, (o = o.length > 0 && o[o.length - 1]) || 6 !== i[0] && 2 !== i[0])) {
										a = 0;
										continue
									}
									if (3 === i[0] && (!o || i[1] > o[0] && i[1] < o[3])) {
										a.label = i[1];
										break
									}
									if (6 === i[0] && a.label < o[1]) {
										a.label = o[1], o = i;
										break
									}
									if (o && a.label < o[2]) {
										a.label = o[2], a.ops.push(i);
										break
									}
									o[2] && a.ops.pop(), a.trys.pop();
									continue
							}
							i = t.call(e, a)
						} catch (e) {
							i = [6, e], r = 0
						} finally {
							n = o = 0
						}
						if (5 & i[0]) throw i[1];
						return {
							value: i[0] ? i[1] : void 0,
							done: !0
						}
					}([i, u])
				}
			}
		},
		qe = function() {
			return Ke(void 0, void 0, Promise, (function() {
				return Qe(this, (function(e) {
					return [2, Y(g.httpService.get(Be, {}), De)]
				}))
			}))
		},
		ze = function(e) {
			var t = e.find((function(e) {
					return e.isDefault
				})),
				n = e;
			return void 0 !== t && (n = e.filter((function(e) {
				return e.code !== t.code
			}))).unshift(t), n
		},
		Xe = function() {
			return Ke(void 0, void 0, Promise, (function() {
				return Qe(this, (function(e) {
					return [2, Y(g.httpService.get(Ge, {}), De, ze)]
				}))
			}))
		},
		je = null !== (He = I.EnvironmentUrls.authApi) && void 0 !== He ? He : "URL_NOT_FOUND",
		Je = "palisades-live";
	! function(e) {
		e[e.UNKNOWN = 0] = "UNKNOWN"
	}(Ye || (Ye = {}));
	var Ze, $e, et, tt, nt, rt = {
			withCredentials: !0,
			url: je + "/v1/" + Je + "/is-live",
			timeout: 1e4
		},
		ot = {
			withCredentials: !0,
			url: je + "/v1/" + Je + "/disconnect",
			timeout: 1e4
		},
		it = function() {
			return Y(g.httpService.get(rt, {}), Ye)
		},
		at = function() {
			return Y(g.httpService.post(ot, {}), Ye)
		},
		ut = (null !== (Ze = I.EnvironmentUrls.apiGatewayUrl) && void 0 !== Ze ? Ze : "URL_NOT_FOUND") + "/account-security-service";
	! function(e) {
		e[e.UNKNOWN = 1] = "UNKNOWN", e[e.REQUEST_TYPE_WAS_INVALID = 2] = "REQUEST_TYPE_WAS_INVALID", e[e.PROMPT_ASSIGNMENT_WAS_NOT_UPDATED = 3] = "PROMPT_ASSIGNMENT_WAS_NOT_UPDATED", e[e.UNKNOWN_PROMPT_TYPE = 4] = "UNKNOWN_PROMPT_TYPE"
	}($e || ($e = {})),
	function(e) {
		e.TEXT_ONLY_BANNER = "DISPLAY_TYPE_TEXT_ONLY_BANNER"
	}(et || (et = {})),
	function(e) {
		e.GLOBAL = "PAGE_RESTRICTION_GLOBAL", e.HOME_PAGE_ONLY = "PAGE_RESTRICTION_HOME_PAGE"
	}(tt || (tt = {})),
	function(e) {
		e.CHANGE_PASSWORD__SUSPECTED_COMPROMISE = "PROMPT_TYPE_CHANGE_PASSWORD__SUSPECTED_COMPROMISE", e.CHANGE_PASSWORD__BREACHED_CREDENTIAL = "PROMPT_TYPE_CHANGE_PASSWORD__BREACHED_CREDENTIAL", e.AUTHENTICATOR_UPSELL = "PROMPT_TYPE_AUTHENTICATOR_UPSELL", e.ACCOUNT_RESTORES_POLICY_UPDATE = "PROMPT_TYPE_ACCOUNT_RESTORES_POLICY_UPDATE", e.ACCOUNT_RESTORES_POLICY_UPDATE_V2 = "PROMPT_TYPE_ACCOUNT_RESTORES_POLICY_UPDATE_V2", e.ACCOUNT_RESTORES_POLICY_UPDATE_V3 = "PROMPT_TYPE_ACCOUNT_RESTORES_POLICY_UPDATE_V3", e.ACCOUNT_RESTORES_POLICY_UPSELL = "PROMPT_TYPE_ACCOUNT_RESTORES_POLICY_UPSELL", e.BROADER_AUTHENTICATOR_UPSELL = "PROMPT_TYPE_BROADER_AUTHENTICATOR_UPSELL", e.EMAIL_2SV_UPSELL = "PROMPT_TYPE_EMAIL_2SV_UPSELL"
	}(nt || (nt = {}));
	var st, ct = {
		withCredentials: !0,
		url: ut + "/v1/prompt-assignments",
		timeout: 1e4
	};
	! function(e) {
		e.DISMISS_PROMPT = "DISMISS_PROMPT", e.DISABLE_PROMPT = "DISABLE_PROMPT"
	}(st || (st = {}));
	var lt, pt, dt = {
			withCredentials: !0,
			url: ut + "/v1/prompt-assignments",
			timeout: 1e4
		},
		ft = function() {
			return ft = Object.assign || function(e) {
				for (var t, n = 1, r = arguments.length; n < r; n++)
					for (var o in t = arguments[n]) Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
				return e
			}, ft.apply(this, arguments)
		},
		Et = function(e, t, n, r) {
			return new(n || (n = Promise))((function(o, i) {
				function a(e) {
					try {
						s(r.next(e))
					} catch (e) {
						i(e)
					}
				}

				function u(e) {
					try {
						s(r.throw(e))
					} catch (e) {
						i(e)
					}
				}

				function s(e) {
					var t;
					e.done ? o(e.value) : (t = e.value, t instanceof n ? t : new n((function(e) {
						e(t)
					}))).then(a, u)
				}
				s((r = r.apply(e, t || [])).next())
			}))
		},
		mt = function(e, t) {
			var n, r, o, i, a = {
				label: 0,
				sent: function() {
					if (1 & o[0]) throw o[1];
					return o[1]
				},
				trys: [],
				ops: []
			};
			return i = {
				next: u(0),
				throw: u(1),
				return: u(2)
			}, "function" == typeof Symbol && (i[Symbol.iterator] = function() {
				return this
			}), i;

			function u(i) {
				return function(u) {
					return function(i) {
						if (n) throw new TypeError("Generator is already executing.");
						for (; a;) try {
							if (n = 1, r && (o = 2 & i[0] ? r.return : i[0] ? r.throw || ((o = r.return) && o.call(r), 0) : r.next) && !(o = o.call(r, i[1])).done) return o;
							switch (r = 0, o && (i = [2 & i[0], o.value]), i[0]) {
								case 0:
								case 1:
									o = i;
									break;
								case 4:
									return a.label++, {
										value: i[1],
										done: !1
									};
								case 5:
									a.label++, r = i[1], i = [0];
									continue;
								case 7:
									i = a.ops.pop(), a.trys.pop();
									continue;
								default:
									if (!(o = a.trys, (o = o.length > 0 && o[o.length - 1]) || 6 !== i[0] && 2 !== i[0])) {
										a = 0;
										continue
									}
									if (3 === i[0] && (!o || i[1] > o[0] && i[1] < o[3])) {
										a.label = i[1];
										break
									}
									if (6 === i[0] && a.label < o[1]) {
										a.label = o[1], o = i;
										break
									}
									if (o && a.label < o[2]) {
										a.label = o[2], a.ops.push(i);
										break
									}
									o[2] && a.ops.pop(), a.trys.pop();
									continue
							}
							i = t.call(e, a)
						} catch (e) {
							i = [6, e], r = 0
						} finally {
							n = o = 0
						}
						if (5 & i[0]) throw i[1];
						return {
							value: i[0] ? i[1] : void 0,
							done: !0
						}
					}([i, u])
				}
			}
		},
		ht = function() {
			return Et(void 0, void 0, Promise, (function() {
				var e;
				return mt(this, (function(t) {
					switch (t.label) {
						case 0:
							return [4, Y(g.httpService.get(ct, {
								shouldReturnMetadata: !0
							}), $e)];
						case 1:
							return (e = t.sent()).isError ? [2, e] : [2, e = ft(ft({}, e), {
								value: e.value.filter((function(e) {
									return e.isGeneric ? Object.values(et).includes(e.metadata.displayType) : Object.values(nt).includes(e.promptType)
								}))
							})]
					}
				}))
			}))
		},
		St = function(e, t) {
			return Y(g.httpService.post(dt, {
				action: e,
				promptType: t
			}), $e)
		},
		vt = (null !== (lt = I.EnvironmentUrls.apiGatewayUrl) && void 0 !== lt ? lt : "URL_NOT_FOUND") + "/proof-of-space";
	! function(e) {
		e[e.UNKNOWN = 0] = "UNKNOWN", e[e.INTERNAL_ERROR = 1] = "INTERNAL_ERROR", e[e.INVALID_REQUEST = 2] = "INVALID_REQUEST", e[e.INVALID_SESSION = 3] = "INVALID_SESSION"
	}(pt || (pt = {}));
	var At, _t, Nt, Tt = {
			withCredentials: !0,
			url: vt + "/v1/verify",
			timeout: 1e4
		},
		Ot = function(e, t, n, r) {
			return new(n || (n = Promise))((function(o, i) {
				function a(e) {
					try {
						s(r.next(e))
					} catch (e) {
						i(e)
					}
				}

				function u(e) {
					try {
						s(r.throw(e))
					} catch (e) {
						i(e)
					}
				}

				function s(e) {
					var t;
					e.done ? o(e.value) : (t = e.value, t instanceof n ? t : new n((function(e) {
						e(t)
					}))).then(a, u)
				}
				s((r = r.apply(e, t || [])).next())
			}))
		},
		bt = function(e, t) {
			var n, r, o, i, a = {
				label: 0,
				sent: function() {
					if (1 & o[0]) throw o[1];
					return o[1]
				},
				trys: [],
				ops: []
			};
			return i = {
				next: u(0),
				throw: u(1),
				return: u(2)
			}, "function" == typeof Symbol && (i[Symbol.iterator] = function() {
				return this
			}), i;

			function u(i) {
				return function(u) {
					return function(i) {
						if (n) throw new TypeError("Generator is already executing.");
						for (; a;) try {
							if (n = 1, r && (o = 2 & i[0] ? r.return : i[0] ? r.throw || ((o = r.return) && o.call(r), 0) : r.next) && !(o = o.call(r, i[1])).done) return o;
							switch (r = 0, o && (i = [2 & i[0], o.value]), i[0]) {
								case 0:
								case 1:
									o = i;
									break;
								case 4:
									return a.label++, {
										value: i[1],
										done: !1
									};
								case 5:
									a.label++, r = i[1], i = [0];
									continue;
								case 7:
									i = a.ops.pop(), a.trys.pop();
									continue;
								default:
									if (!(o = a.trys, (o = o.length > 0 && o[o.length - 1]) || 6 !== i[0] && 2 !== i[0])) {
										a = 0;
										continue
									}
									if (3 === i[0] && (!o || i[1] > o[0] && i[1] < o[3])) {
										a.label = i[1];
										break
									}
									if (6 === i[0] && a.label < o[1]) {
										a.label = o[1], o = i;
										break
									}
									if (o && a.label < o[2]) {
										a.label = o[2], a.ops.push(i);
										break
									}
									o[2] && a.ops.pop(), a.trys.pop();
									continue
							}
							i = t.call(e, a)
						} catch (e) {
							i = [6, e], r = 0
						} finally {
							n = o = 0
						}
						if (5 & i[0]) throw i[1];
						return {
							value: i[0] ? i[1] : void 0,
							done: !0
						}
					}([i, u])
				}
			}
		},
		yt = function(e, t) {
			return Ot(void 0, void 0, Promise, (function() {
				return bt(this, (function(n) {
					return [2, Y(g.httpService.post(Tt, {
						challengeId: e,
						solution: t
					}), pt)]
				}))
			}))
		},
		Rt = (null !== (At = I.EnvironmentUrls.apiGatewayUrl) && void 0 !== At ? At : "URL_NOT_FOUND") + "/proof-of-work-service";
	! function(e) {
		e[e.UNKNOWN = 0] = "UNKNOWN", e[e.REQUEST_INVALID = 1] = "REQUEST_INVALID", e[e.SESSION_INACTIVE = 2] = "SESSION_INACTIVE"
	}(_t || (_t = {})),
	function(e) {
		e[e.TIME_LOCK = 0] = "TIME_LOCK"
	}(Nt || (Nt = {}));
	var Ct, It, wt = {
			withCredentials: !0,
			url: Rt + "/v1/pow-puzzle",
			timeout: 1e4
		},
		Pt = {
			withCredentials: !0,
			url: Rt + "/v1/pow-puzzle",
			timeout: 1e4
		},
		Dt = function(e, t, n, r) {
			return new(n || (n = Promise))((function(o, i) {
				function a(e) {
					try {
						s(r.next(e))
					} catch (e) {
						i(e)
					}
				}

				function u(e) {
					try {
						s(r.throw(e))
					} catch (e) {
						i(e)
					}
				}

				function s(e) {
					var t;
					e.done ? o(e.value) : (t = e.value, t instanceof n ? t : new n((function(e) {
						e(t)
					}))).then(a, u)
				}
				s((r = r.apply(e, t || [])).next())
			}))
		},
		Ut = function(e, t) {
			var n, r, o, i, a = {
				label: 0,
				sent: function() {
					if (1 & o[0]) throw o[1];
					return o[1]
				},
				trys: [],
				ops: []
			};
			return i = {
				next: u(0),
				throw: u(1),
				return: u(2)
			}, "function" == typeof Symbol && (i[Symbol.iterator] = function() {
				return this
			}), i;

			function u(i) {
				return function(u) {
					return function(i) {
						if (n) throw new TypeError("Generator is already executing.");
						for (; a;) try {
							if (n = 1, r && (o = 2 & i[0] ? r.return : i[0] ? r.throw || ((o = r.return) && o.call(r), 0) : r.next) && !(o = o.call(r, i[1])).done) return o;
							switch (r = 0, o && (i = [2 & i[0], o.value]), i[0]) {
								case 0:
								case 1:
									o = i;
									break;
								case 4:
									return a.label++, {
										value: i[1],
										done: !1
									};
								case 5:
									a.label++, r = i[1], i = [0];
									continue;
								case 7:
									i = a.ops.pop(), a.trys.pop();
									continue;
								default:
									if (!(o = a.trys, (o = o.length > 0 && o[o.length - 1]) || 6 !== i[0] && 2 !== i[0])) {
										a = 0;
										continue
									}
									if (3 === i[0] && (!o || i[1] > o[0] && i[1] < o[3])) {
										a.label = i[1];
										break
									}
									if (6 === i[0] && a.label < o[1]) {
										a.label = o[1], o = i;
										break
									}
									if (o && a.label < o[2]) {
										a.label = o[2], a.ops.push(i);
										break
									}
									o[2] && a.ops.pop(), a.trys.pop();
									continue
							}
							i = t.call(e, a)
						} catch (e) {
							i = [6, e], r = 0
						} finally {
							n = o = 0
						}
						if (5 & i[0]) throw i[1];
						return {
							value: i[0] ? i[1] : void 0,
							done: !0
						}
					}([i, u])
				}
			}
		},
		gt = function(e) {
			return Y(g.httpService.get(wt, {
				sessionID: e
			}), _t)
		},
		Lt = function(e, t) {
			return Dt(void 0, void 0, Promise, (function() {
				return Ut(this, (function(n) {
					return [2, Y(g.httpService.post(Pt, {
						sessionID: e,
						solution: t
					}), _t)]
				}))
			}))
		},
		Mt = (null !== (Ct = I.EnvironmentUrls.apiGatewayUrl) && void 0 !== Ct ? Ct : "URL_NOT_FOUND") + "/reauthentication-service";
	! function(e) {
		e[e.UNKNOWN = 1] = "UNKNOWN", e[e.REQUEST_TYPE_WAS_INVALID = 2] = "REQUEST_TYPE_WAS_INVALID", e[e.PASSWORD_INCORRECT = 3] = "PASSWORD_INCORRECT", e[e.OTP_EMAIL_REDEEM_FAILURE = 4] = "OTP_EMAIL_REDEEM_FAILURE"
	}(It || (It = {}));
	var kt, Vt, Ft = {
			withCredentials: !0,
			url: Mt + "/v1/token/generate",
			timeout: 1e4
		},
		xt = function(e) {
			return Y(g.httpService.post(Ft, e), It)
		},
		Wt = (null !== (kt = I.EnvironmentUrls.apiGatewayUrl) && void 0 !== kt ? kt : "URL_NOT_FOUND") + "/rostile";
	! function(e) {
		e[e.UNKNOWN = 0] = "UNKNOWN", e[e.INTERNAL_ERROR = 1] = "INTERNAL_ERROR", e[e.INVALID_REQUEST = 2] = "INVALID_REQUEST", e[e.INVALID_SESSION = 3] = "INVALID_SESSION"
	}(Vt || (Vt = {}));
	var Ht, Yt, Bt, Gt, Kt = {
			withCredentials: !0,
			url: Wt + "/v1/verify",
			timeout: 1e4
		},
		Qt = function(e, t, n, r) {
			return new(n || (n = Promise))((function(o, i) {
				function a(e) {
					try {
						s(r.next(e))
					} catch (e) {
						i(e)
					}
				}

				function u(e) {
					try {
						s(r.throw(e))
					} catch (e) {
						i(e)
					}
				}

				function s(e) {
					var t;
					e.done ? o(e.value) : (t = e.value, t instanceof n ? t : new n((function(e) {
						e(t)
					}))).then(a, u)
				}
				s((r = r.apply(e, t || [])).next())
			}))
		},
		qt = function(e, t) {
			var n, r, o, i, a = {
				label: 0,
				sent: function() {
					if (1 & o[0]) throw o[1];
					return o[1]
				},
				trys: [],
				ops: []
			};
			return i = {
				next: u(0),
				throw: u(1),
				return: u(2)
			}, "function" == typeof Symbol && (i[Symbol.iterator] = function() {
				return this
			}), i;

			function u(i) {
				return function(u) {
					return function(i) {
						if (n) throw new TypeError("Generator is already executing.");
						for (; a;) try {
							if (n = 1, r && (o = 2 & i[0] ? r.return : i[0] ? r.throw || ((o = r.return) && o.call(r), 0) : r.next) && !(o = o.call(r, i[1])).done) return o;
							switch (r = 0, o && (i = [2 & i[0], o.value]), i[0]) {
								case 0:
								case 1:
									o = i;
									break;
								case 4:
									return a.label++, {
										value: i[1],
										done: !1
									};
								case 5:
									a.label++, r = i[1], i = [0];
									continue;
								case 7:
									i = a.ops.pop(), a.trys.pop();
									continue;
								default:
									if (!(o = a.trys, (o = o.length > 0 && o[o.length - 1]) || 6 !== i[0] && 2 !== i[0])) {
										a = 0;
										continue
									}
									if (3 === i[0] && (!o || i[1] > o[0] && i[1] < o[3])) {
										a.label = i[1];
										break
									}
									if (6 === i[0] && a.label < o[1]) {
										a.label = o[1], o = i;
										break
									}
									if (o && a.label < o[2]) {
										a.label = o[2], a.ops.push(i);
										break
									}
									o[2] && a.ops.pop(), a.trys.pop();
									continue
							}
							i = t.call(e, a)
						} catch (e) {
							i = [6, e], r = 0
						} finally {
							n = o = 0
						}
						if (5 & i[0]) throw i[1];
						return {
							value: i[0] ? i[1] : void 0,
							done: !0
						}
					}([i, u])
				}
			}
		},
		zt = function(e, t) {
			return Qt(void 0, void 0, Promise, (function() {
				return qt(this, (function(n) {
					return [2, Y(g.httpService.post(Kt, {
						challengeId: e,
						solution: t
					}), Vt)]
				}))
			}))
		},
		Xt = (null !== (Ht = I.EnvironmentUrls.apiGatewayUrl) && void 0 !== Ht ? Ht : "URL_NOT_FOUND") + "/account-security-service";
	! function(e) {
		e[e.UNKNOWN = 1] = "UNKNOWN", e[e.REQUEST_TYPE_WAS_INVALID = 2] = "REQUEST_TYPE_WAS_INVALID", e[e.SECURITY_QUESTIONS_DISABLED = 3] = "SECURITY_QUESTIONS_DISABLED", e[e.SESSION_INACTIVE = 4] = "SESSION_INACTIVE", e[e.QUESTION_NOT_FOUND = 5] = "QUESTION_NOT_FOUND", e[e.ANSWER_WRONG_FORMAT = 6] = "ANSWER_WRONG_FORMAT"
	}(Yt || (Yt = {})),
	function(e) {
		e[e.INVALID = 0] = "INVALID", e[e.MOST_RECENT_GAMES_PLAYED = 1] = "MOST_RECENT_GAMES_PLAYED"
	}(Bt || (Bt = {})),
	function(e) {
		e[e.PICK_ALL_CORRECT_CHOICES = 0] = "PICK_ALL_CORRECT_CHOICES", e[e.PICK_C_CORRECT_CHOICES = 1] = "PICK_C_CORRECT_CHOICES"
	}(Gt || (Gt = {}));
	var jt, Jt, Zt, $t, en, tn = {
			withCredentials: !0,
			url: Xt + "/v1/security-question",
			timeout: 1e4
		},
		nn = {
			withCredentials: !0,
			url: Xt + "/v1/security-question",
			timeout: 1e4
		},
		rn = function(e, t) {
			return Y(g.httpService.get(tn, {
				userId: e,
				sessionId: t
			}), Yt)
		},
		on = function(e, t, n) {
			return Y(g.httpService.post(nn, {
				userId: e,
				answer: t,
				sessionId: n
			}), Yt)
		},
		an = "URL_NOT_FOUND",
		un = null !== (jt = I.EnvironmentUrls.apiGatewayUrl) && void 0 !== jt ? jt : an,
		sn = null !== (Jt = I.EnvironmentUrls.authApi) && void 0 !== Jt ? Jt : an,
		cn = un + "/token-metadata-service";
	! function(e) {
		e[e.UNKNOWN = 1] = "UNKNOWN", e[e.REQUEST_TYPE_WAS_INVALID = 2] = "REQUEST_TYPE_WAS_INVALID", e[e.ATTEMPT_TO_INVALIDATE_CURRENT_TOKEN = 3] = "ATTEMPT_TO_INVALIDATE_CURRENT_TOKEN"
	}(Zt || (Zt = {})),
	function(e) {
		e[e.UNKNOWN = 1] = "UNKNOWN"
	}($t || ($t = {})),
	function(e) {
		e.UNKNOWN = "Unknown", e.APP = "App", e.BROWSER = "Browser", e.STUDIO = "Studio"
	}(en || (en = {}));
	var ln, pn, dn, fn, En = {
			withCredentials: !0,
			url: cn + "/v1/sessions",
			timeout: 1e4
		},
		mn = {
			withCredentials: !0,
			url: cn + "/v1/logout",
			timeout: 1e4
		},
		hn = {
			withCredentials: !0,
			url: sn + "/v1/logoutfromallsessionsandreauthenticate",
			timeout: 1e4
		},
		Sn = function(e, t, n, r) {
			return new(n || (n = Promise))((function(o, i) {
				function a(e) {
					try {
						s(r.next(e))
					} catch (e) {
						i(e)
					}
				}

				function u(e) {
					try {
						s(r.throw(e))
					} catch (e) {
						i(e)
					}
				}

				function s(e) {
					var t;
					e.done ? o(e.value) : (t = e.value, t instanceof n ? t : new n((function(e) {
						e(t)
					}))).then(a, u)
				}
				s((r = r.apply(e, t || [])).next())
			}))
		},
		vn = function(e, t) {
			var n, r, o, i, a = {
				label: 0,
				sent: function() {
					if (1 & o[0]) throw o[1];
					return o[1]
				},
				trys: [],
				ops: []
			};
			return i = {
				next: u(0),
				throw: u(1),
				return: u(2)
			}, "function" == typeof Symbol && (i[Symbol.iterator] = function() {
				return this
			}), i;

			function u(i) {
				return function(u) {
					return function(i) {
						if (n) throw new TypeError("Generator is already executing.");
						for (; a;) try {
							if (n = 1, r && (o = 2 & i[0] ? r.return : i[0] ? r.throw || ((o = r.return) && o.call(r), 0) : r.next) && !(o = o.call(r, i[1])).done) return o;
							switch (r = 0, o && (i = [2 & i[0], o.value]), i[0]) {
								case 0:
								case 1:
									o = i;
									break;
								case 4:
									return a.label++, {
										value: i[1],
										done: !1
									};
								case 5:
									a.label++, r = i[1], i = [0];
									continue;
								case 7:
									i = a.ops.pop(), a.trys.pop();
									continue;
								default:
									if (!(o = a.trys, (o = o.length > 0 && o[o.length - 1]) || 6 !== i[0] && 2 !== i[0])) {
										a = 0;
										continue
									}
									if (3 === i[0] && (!o || i[1] > o[0] && i[1] < o[3])) {
										a.label = i[1];
										break
									}
									if (6 === i[0] && a.label < o[1]) {
										a.label = o[1], o = i;
										break
									}
									if (o && a.label < o[2]) {
										a.label = o[2], a.ops.push(i);
										break
									}
									o[2] && a.ops.pop(), a.trys.pop();
									continue
							}
							i = t.call(e, a)
						} catch (e) {
							i = [6, e], r = 0
						} finally {
							n = o = 0
						}
						if (5 & i[0]) throw i[1];
						return {
							value: i[0] ? i[1] : void 0,
							done: !0
						}
					}([i, u])
				}
			}
		},
		An = function(e, t) {
			return Sn(void 0, void 0, Promise, (function() {
				return vn(this, (function(n) {
					return [2, Y(g.httpService.get(En, {
						nextCursor: e,
						desiredLimit: t
					}), Zt)]
				}))
			}))
		},
		_n = function(e) {
			return Sn(void 0, void 0, Promise, (function() {
				return vn(this, (function(t) {
					return [2, Y(g.httpService.post(mn, {
						token: e
					}), Zt)]
				}))
			}))
		},
		Nn = function(e) {
			return Sn(void 0, void 0, Promise, (function() {
				return vn(this, (function(t) {
					return [2, Y(g.httpService.post(hn, {
						secureAuthenticationIntent: e
					}), $t)]
				}))
			}))
		},
		Tn = null !== (ln = I.EnvironmentUrls.thumbnailsApi) && void 0 !== ln ? ln : "URL_NOT_FOUND";
	! function(e) {
		e[e.UNKNOWN = 0] = "UNKNOWN"
	}(pn || (pn = {})),
	function(e) {
		e.PNG = "Png", e.JPEG = "Jpeg"
	}(dn || (dn = {})),
	function(e) {
		e.ERROR = "Error", e.COMPLETED = "Completed", e.IN_REVIEW = "InReview", e.PENDING = "Pending", e.BLOCKED = "Blocked"
	}(fn || (fn = {}));
	var On, bn, yn, Rn, Cn = {
			url: Tn + "/v1/games/icons",
			timeout: 1e4
		},
		In = function(e, t, n, r) {
			return Y(g.httpService.get(Cn, {
				universeIds: e,
				size: t,
				format: n,
				isCircular: r
			}), pn)
		},
		wn = CoreRobloxUtilities,
		Pn = "URL_NOT_FOUND",
		Dn = null !== (On = I.EnvironmentUrls.twoStepVerificationApi) && void 0 !== On ? On : Pn,
		Un = null !== (bn = I.EnvironmentUrls.economyApi) && void 0 !== bn ? bn : Pn,
		gn = null !== (yn = I.EnvironmentUrls.tradesApi) && void 0 !== yn ? yn : Pn,
		Ln = 1e4;
	! function(e) {
		e[e.UNKNOWN = 0] = "UNKNOWN", e[e.INVALID_CHALLENGE_ID = 1] = "INVALID_CHALLENGE_ID", e[e.INVALID_USER_ID = 2] = "INVALID_USER_ID", e[e.INVALID_EMAIL = 3] = "INVALID_EMAIL", e[e.INVALID_PASSWORD = 4] = "INVALID_PASSWORD", e[e.TOO_MANY_REQUESTS = 5] = "TOO_MANY_REQUESTS", e[e.PIN_LOCKED = 6] = "PIN_LOCKED", e[e.FEATURE_DISABLED = 7] = "FEATURE_DISABLED", e[e.NOT_ALLOWED = 8] = "NOT_ALLOWED", e[e.INVALID_CONFIGURATION = 9] = "INVALID_CONFIGURATION", e[e.INVALID_CODE = 10] = "INVALID_CODE", e[e.CONFIGURATION_ALREADY_ENABLED = 11] = "CONFIGURATION_ALREADY_ENABLED", e[e.INVALID_SETUP_TOKEN = 12] = "INVALID_SETUP_TOKEN", e[e.REAUTHENTICATION_REQUIRED = 13] = "REAUTHENTICATION_REQUIRED", e[e.INVALID_PHONE_NUMBER = 15] = "INVALID_PHONE_NUMBER", e[e.EXCEEDED_REGISTERED_KEYS_LIMIT = 16] = "EXCEEDED_REGISTERED_KEYS_LIMIT", e[e.INVALID_CREDENTIAL_NICKNAME = 17] = "INVALID_CREDENTIAL_NICKNAME", e[e.AUTHENTICATOR_CODE_ALREADY_USED = 18] = "AUTHENTICATOR_CODE_ALREADY_USED", e[e.CHALLENGE_DENIED = 19] = "CHALLENGE_DENIED", e[e.CROSS_DEVICE_DIALOG_EXPIRED = 20] = "CROSS_DEVICE_DIALOG_EXPIRED"
	}(Rn || (Rn = {}));
	var Mn, kn, Vn = {
			url: Dn + "/v1/metadata",
			withCredentials: !0,
			timeout: Ln
		},
		Fn = function(e) {
			return {
				withCredentials: !0,
				url: Dn + "/v1/users/" + e + "/configuration/email/enable",
				timeout: Ln
			}
		},
		xn = function(e) {
			return {
				withCredentials: !0,
				url: Dn + "/v1/users/" + e + "/configuration/authenticator/enable-verify",
				timeout: Ln
			}
		},
		Wn = function(e) {
			return {
				withCredentials: !0,
				url: Dn + "/v1/users/" + e + "/configuration/sms/enable",
				timeout: Ln
			}
		},
		Hn = function(e) {
			return {
				withCredentials: !0,
				url: Dn + "/v1/users/" + e + "/configuration/security-key/enable-verify",
				timeout: Ln
			}
		},
		Yn = {
			withCredentials: !0,
			url: Un + "/v2/spend-friction/two-step-verification/status",
			timeout: Ln
		},
		Bn = {
			withCredentials: !0,
			url: gn + "/v1/trade-friction/two-step-verification/status",
			timeout: Ln
		},
		Gn = {
			withCredentials: !0,
			url: Un + "/v2/resale-friction/two-step-verification/status",
			timeout: Ln
		},
		Kn = {
			withCredentials: !0,
			url: Un + "/v2/spend-friction/two-step-verification/generate",
			timeout: Ln
		},
		Qn = {
			withCredentials: !0,
			url: gn + "/v1/trade-friction/two-step-verification/generate",
			timeout: Ln
		},
		qn = {
			withCredentials: !0,
			url: Un + "/v2/resale-friction/two-step-verification/generate",
			timeout: Ln
		},
		zn = {
			withCredentials: !0,
			url: Un + "/v2/spend-friction/two-step-verification/redeem",
			timeout: Ln
		},
		Xn = {
			withCredentials: !0,
			url: gn + "/v1/trade-friction/two-step-verification/redeem",
			timeout: Ln
		},
		jn = {
			withCredentials: !0,
			url: Un + "/v2/resale-friction/two-step-verification/redeem",
			timeout: Ln
		},
		Jn = function(e, t, n, r) {
			return new(n || (n = Promise))((function(o, i) {
				function a(e) {
					try {
						s(r.next(e))
					} catch (e) {
						i(e)
					}
				}

				function u(e) {
					try {
						s(r.throw(e))
					} catch (e) {
						i(e)
					}
				}

				function s(e) {
					var t;
					e.done ? o(e.value) : (t = e.value, t instanceof n ? t : new n((function(e) {
						e(t)
					}))).then(a, u)
				}
				s((r = r.apply(e, t || [])).next())
			}))
		},
		Zn = function(e, t) {
			var n, r, o, i, a = {
				label: 0,
				sent: function() {
					if (1 & o[0]) throw o[1];
					return o[1]
				},
				trys: [],
				ops: []
			};
			return i = {
				next: u(0),
				throw: u(1),
				return: u(2)
			}, "function" == typeof Symbol && (i[Symbol.iterator] = function() {
				return this
			}), i;

			function u(i) {
				return function(u) {
					return function(i) {
						if (n) throw new TypeError("Generator is already executing.");
						for (; a;) try {
							if (n = 1, r && (o = 2 & i[0] ? r.return : i[0] ? r.throw || ((o = r.return) && o.call(r), 0) : r.next) && !(o = o.call(r, i[1])).done) return o;
							switch (r = 0, o && (i = [2 & i[0], o.value]), i[0]) {
								case 0:
								case 1:
									o = i;
									break;
								case 4:
									return a.label++, {
										value: i[1],
										done: !1
									};
								case 5:
									a.label++, r = i[1], i = [0];
									continue;
								case 7:
									i = a.ops.pop(), a.trys.pop();
									continue;
								default:
									if (!(o = a.trys, (o = o.length > 0 && o[o.length - 1]) || 6 !== i[0] && 2 !== i[0])) {
										a = 0;
										continue
									}
									if (3 === i[0] && (!o || i[1] > o[0] && i[1] < o[3])) {
										a.label = i[1];
										break
									}
									if (6 === i[0] && a.label < o[1]) {
										a.label = o[1], o = i;
										break
									}
									if (o && a.label < o[2]) {
										a.label = o[2], a.ops.push(i);
										break
									}
									o[2] && a.ops.pop(), a.trys.pop();
									continue
							}
							i = t.call(e, a)
						} catch (e) {
							i = [6, e], r = 0
						} finally {
							n = o = 0
						}
						if (5 & i[0]) throw i[1];
						return {
							value: i[0] ? i[1] : void 0,
							done: !0
						}
					}([i, u])
				}
			}
		},
		$n = wn.cryptoUtil.generateSecureAuthIntent,
		er = function(e) {
			return Y(g.httpService.get(Vn, e || {}), Rn)
		},
		tr = function(e, t) {
			return Y(g.httpService.get(function(e) {
				return {
					withCredentials: !0,
					url: Dn + "/v1/users/" + e + "/configuration",
					timeout: Ln
				}
			}(e), t || {}), Rn)
		},
		nr = function(e) {
			return Jn(void 0, void 0, Promise, (function() {
				var t;
				return Zn(this, (function(n) {
					switch (n.label) {
						case 0:
							return [4, $n()];
						case 1:
							return t = n.sent(), [2, Y(g.httpService.post(Fn(e), {
								secureAuthenticationIntent: t
							}), Rn)]
					}
				}))
			}))
		},
		rr = function(e, t) {
			return Y(g.httpService.post(function(e) {
				return {
					withCredentials: !0,
					url: Dn + "/v1/users/" + e + "/challenges/email/send-code",
					timeout: Ln
				}
			}(e), t), Rn)
		},
		or = function(e, t) {
			return Y(g.httpService.post(function(e) {
				return {
					withCredentials: !0,
					url: Dn + "/v1/users/" + e + "/challenges/email/verify",
					timeout: Ln
				}
			}(e), t), Rn)
		},
		ir = function(e) {
			return Y(g.httpService.post(function(e) {
				return {
					withCredentials: !0,
					url: Dn + "/v1/users/" + e + "/configuration/email/disable",
					timeout: Ln
				}
			}(e), {}), Rn)
		},
		ar = function(e) {
			return Y(g.httpService.post(function(e) {
				return {
					withCredentials: !0,
					url: Dn + "/v1/users/" + e + "/configuration/authenticator/enable",
					timeout: Ln
				}
			}(e), {}), Rn)
		},
		ur = function(e, t, n) {
			return Jn(void 0, void 0, Promise, (function() {
				var r;
				return Zn(this, (function(o) {
					switch (o.label) {
						case 0:
							return [4, $n()];
						case 1:
							return r = o.sent(), [2, Y(g.httpService.post(xn(e), {
								setupToken: t,
								code: n,
								secureAuthenticationIntent: r
							}), Rn)]
					}
				}))
			}))
		},
		sr = function(e, t) {
			return Y(g.httpService.post(function(e) {
				return {
					withCredentials: !0,
					url: Dn + "/v1/users/" + e + "/challenges/authenticator/verify",
					timeout: Ln
				}
			}(e), t), Rn)
		},
		cr = function(e) {
			return Y(g.httpService.post(function(e) {
				return {
					withCredentials: !0,
					url: Dn + "/v1/users/" + e + "/configuration/authenticator/disable",
					timeout: Ln
				}
			}(e), {}), Rn)
		},
		lr = function(e, t) {
			return Y(g.httpService.post(function(e) {
				return {
					withCredentials: !0,
					url: Dn + "/v1/users/" + e + "/challenges/recovery-codes/verify",
					timeout: Ln
				}
			}(e), t), Rn)
		},
		pr = function(e) {
			return Y(g.httpService.get(function(e) {
				return {
					withCredentials: !0,
					url: Dn + "/v1/users/" + e + "/recovery-codes",
					timeout: Ln
				}
			}(e)), Rn)
		},
		dr = function(e) {
			return Y(g.httpService.post(function(e) {
				return {
					withCredentials: !0,
					url: Dn + "/v1/users/" + e + "/recovery-codes/regenerate",
					timeout: Ln
				}
			}(e), {
				password: "password"
			}), Rn)
		},
		fr = function(e) {
			return Jn(void 0, void 0, Promise, (function() {
				var t;
				return Zn(this, (function(n) {
					switch (n.label) {
						case 0:
							return [4, $n()];
						case 1:
							return t = n.sent(), [2, Y(g.httpService.post(Wn(e), {
								secureAuthenticationIntent: t
							}), Rn)]
					}
				}))
			}))
		},
		Er = function(e, t) {
			return Y(g.httpService.post(function(e) {
				return {
					withCredentials: !0,
					url: Dn + "/v1/users/" + e + "/challenges/sms/send-code",
					timeout: Ln
				}
			}(e), t), Rn)
		},
		mr = function(e, t) {
			return Y(g.httpService.post(function(e) {
				return {
					withCredentials: !0,
					url: Dn + "/v1/users/" + e + "/challenges/sms/verify",
					timeout: Ln
				}
			}(e), t), Rn)
		},
		hr = function(e) {
			return Y(g.httpService.post(function(e) {
				return {
					withCredentials: !0,
					url: Dn + "/v1/users/" + e + "/configuration/sms/disable",
					timeout: Ln
				}
			}(e), {}), Rn)
		},
		Sr = function(e) {
			return Y(g.httpService.post(function(e) {
				return {
					withCredentials: !0,
					url: Dn + "/v1/users/" + e + "/configuration/security-key/enable",
					timeout: Ln
				}
			}(e), {}), Rn, (function(e) {
				return {
					creationOptions: JSON.parse(e.creationOptions),
					sessionId: e.sessionId
				}
			}))
		},
		vr = function(e, t, n, r) {
			return Jn(void 0, void 0, Promise, (function() {
				var o;
				return Zn(this, (function(i) {
					switch (i.label) {
						case 0:
							return [4, $n()];
						case 1:
							return o = i.sent(), [2, Y(g.httpService.post(Hn(e), {
								sessionId: t,
								credentialNickname: n,
								attestationResponse: r,
								secureAuthenticationIntent: o
							}), Rn)]
					}
				}))
			}))
		},
		Ar = function(e, t) {
			return Y(g.httpService.post(function(e) {
				return {
					withCredentials: !0,
					url: Dn + "/v1/users/" + e + "/challenges/security-key/verify-start",
					timeout: Ln
				}
			}(e), t), Rn)
		},
		_r = function(e, t) {
			return Y(g.httpService.post(function(e) {
				return {
					withCredentials: !0,
					url: Dn + "/v1/users/" + e + "/challenges/security-key/verify-finish",
					timeout: Ln
				}
			}(e), t), Rn)
		},
		Nr = function(e, t) {
			return Y(g.httpService.post(function(e) {
				return {
					withCredentials: !0,
					url: Dn + "/v1/users/" + e + "/configuration/security-key/disable",
					timeout: Ln
				}
			}(e), {
				credentialNicknames: t
			}), Rn)
		},
		Tr = function(e) {
			return Y(g.httpService.post(function(e) {
				return {
					withCredentials: !0,
					url: Dn + "/v1/users/" + e + "/configuration/security-key/list",
					timeout: Ln
				}
			}(e), {}), Rn)
		},
		Or = function(e, t) {
			return Y(g.httpService.post(function(e) {
				return {
					withCredentials: !0,
					url: Dn + "/v1/users/" + e + "/challenges/passkey/verify-start",
					timeout: Ln
				}
			}(e), t), Rn)
		},
		br = function(e, t) {
			return Y(g.httpService.post(function(e) {
				return {
					withCredentials: !0,
					url: Dn + "/v1/users/" + e + "/challenges/passkey/verify-finish",
					timeout: Ln
				}
			}(e), t), Rn)
		},
		yr = function() {
			return Y(g.httpService.get(Yn, {}), Rn)
		},
		Rr = function() {
			return Y(g.httpService.get(Bn, {}), Rn)
		},
		Cr = function() {
			return Y(g.httpService.get(Gn, {}), Rn)
		},
		Ir = function() {
			return Y(g.httpService.post(Kn, {}), Rn)
		},
		wr = function() {
			return Y(g.httpService.post(Qn, {}), Rn)
		},
		Pr = function() {
			return Y(g.httpService.post(qn, {}), Rn)
		},
		Dr = function(e, t) {
			return Y(g.httpService.post(zn, {
				challengeToken: e,
				verificationToken: t
			}), Rn)
		},
		Ur = function(e, t) {
			return Y(g.httpService.post(Xn, {
				challengeToken: e,
				verificationToken: t
			}), Rn)
		},
		gr = function(e, t) {
			return Y(g.httpService.post(jn, {
				challengeToken: e,
				verificationToken: t
			}), Rn)
		},
		Lr = function(e, t) {
			return Y(g.httpService.post(function(e) {
				return {
					withCredentials: !0,
					url: Dn + "/v1/users/" + e + "/challenges/cross-device/retry",
					timeout: Ln
				}
			}(e), t), Rn)
		},
		Mr = function(e, t) {
			return Y(g.httpService.post(function(e) {
				return {
					withCredentials: !0,
					url: Dn + "/v1/users/" + e + "/challenges/cross-device/verify",
					timeout: Ln
				}
			}(e), t), Rn)
		},
		kr = function(e, t) {
			return Y(g.httpService.post(function(e) {
				return {
					withCredentials: !0,
					url: Dn + "/v1/users/" + e + "/challenges/cross-device/retract",
					timeout: Ln
				}
			}(e), t), Rn)
		},
		Vr = function(e, t) {
			return Y(g.httpService.post(function(e) {
				return {
					withCredentials: !0,
					url: Dn + "/v1/users/" + e + "/challenges/password/verify",
					timeout: Ln
				}
			}(e), t), Rn)
		},
		Fr = null !== (Mn = I.EnvironmentUrls.universalAppConfigurationApi) && void 0 !== Mn ? Mn : "URL_NOT_FOUND";
	! function(e) {
		e[e.INTERNAL_ERROR = 9] = "INTERNAL_ERROR"
	}(kn || (kn = {}));
	var xr, Wr, Hr = {
			withCredentials: !0,
			url: Fr + "/v1/behaviors/account-settings-ui/content",
			timeout: 1e4
		},
		Yr = function(e, t, n, r) {
			return new(n || (n = Promise))((function(o, i) {
				function a(e) {
					try {
						s(r.next(e))
					} catch (e) {
						i(e)
					}
				}

				function u(e) {
					try {
						s(r.throw(e))
					} catch (e) {
						i(e)
					}
				}

				function s(e) {
					var t;
					e.done ? o(e.value) : (t = e.value, t instanceof n ? t : new n((function(e) {
						e(t)
					}))).then(a, u)
				}
				s((r = r.apply(e, t || [])).next())
			}))
		},
		Br = function(e, t) {
			var n, r, o, i, a = {
				label: 0,
				sent: function() {
					if (1 & o[0]) throw o[1];
					return o[1]
				},
				trys: [],
				ops: []
			};
			return i = {
				next: u(0),
				throw: u(1),
				return: u(2)
			}, "function" == typeof Symbol && (i[Symbol.iterator] = function() {
				return this
			}), i;

			function u(i) {
				return function(u) {
					return function(i) {
						if (n) throw new TypeError("Generator is already executing.");
						for (; a;) try {
							if (n = 1, r && (o = 2 & i[0] ? r.return : i[0] ? r.throw || ((o = r.return) && o.call(r), 0) : r.next) && !(o = o.call(r, i[1])).done) return o;
							switch (r = 0, o && (i = [2 & i[0], o.value]), i[0]) {
								case 0:
								case 1:
									o = i;
									break;
								case 4:
									return a.label++, {
										value: i[1],
										done: !1
									};
								case 5:
									a.label++, r = i[1], i = [0];
									continue;
								case 7:
									i = a.ops.pop(), a.trys.pop();
									continue;
								default:
									if (!(o = a.trys, (o = o.length > 0 && o[o.length - 1]) || 6 !== i[0] && 2 !== i[0])) {
										a = 0;
										continue
									}
									if (3 === i[0] && (!o || i[1] > o[0] && i[1] < o[3])) {
										a.label = i[1];
										break
									}
									if (6 === i[0] && a.label < o[1]) {
										a.label = o[1], o = i;
										break
									}
									if (o && a.label < o[2]) {
										a.label = o[2], a.ops.push(i);
										break
									}
									o[2] && a.ops.pop(), a.trys.pop();
									continue
							}
							i = t.call(e, a)
						} catch (e) {
							i = [6, e], r = 0
						} finally {
							n = o = 0
						}
						if (5 & i[0]) throw i[1];
						return {
							value: i[0] ? i[1] : void 0,
							done: !0
						}
					}([i, u])
				}
			}
		},
		Gr = function() {
			return Yr(void 0, void 0, Promise, (function() {
				return Br(this, (function(e) {
					return [2, Y(g.httpService.get(Hr, {}), kn)]
				}))
			}))
		},
		Kr = null !== (xr = I.EnvironmentUrls.authApi) && void 0 !== xr ? xr : "URL_NOT_FOUND";
	! function(e) {
		e[e.UNKNOWN = 0] = "UNKNOWN"
	}(Wr || (Wr = {}));
	var Qr, qr, zr, Xr = {
			withCredentials: !0,
			url: Kr + "/v1/xbox/connection",
			timeout: 1e4
		},
		jr = {
			withCredentials: !0,
			url: Kr + "/v1/xbox/disconnect",
			timeout: 1e4
		},
		Jr = function() {
			return Y(g.httpService.get(Xr, {}), Wr)
		},
		Zr = function() {
			return Y(g.httpService.post(jr, {}), Wr)
		},
		$r = (null !== (Qr = I.EnvironmentUrls.apiGatewayUrl) && void 0 !== Qr ? Qr : "URL_NOT_FOUND") + "/account-security-service";
	! function(e) {
		e[e.UNKNOWN = 1] = "UNKNOWN", e[e.REQUEST_TYPE_WAS_INVALID = 2] = "REQUEST_TYPE_WAS_INVALID", e[e.INVAID_METRIC_NAME = 3] = "INVAID_METRIC_NAME", e[e.INVALID_METRIC_LABELS = 4] = "INVALID_METRIC_LABELS"
	}(qr || (qr = {})),
	function(e) {
		e.Event2sv = "event_2sv", e.SolveTime2sv = "solve_time_2sv", e.EventCaptcha = "event_captcha", e.SolveTimeCaptcha = "solve_time_captcha", e.EventPat = "event_pat", e.SolveTimePat = "solve_time_pat", e.EventPos = "event_pos", e.PuzzleComputeTimePos = "puzzle_compute_time_pos", e.SolveTimePos = "solve_time_pos", e.EventPow = "event_pow", e.PuzzleComputeTimePow = "puzzle_compute_time_pow", e.SolveTimePow = "solve_time_pow", e.EventRostile = "event_rostile", e.SolveTimeRostile = "solve_time_rostile", e.EventSecurityQuestion = "event_security_question", e.EventGeneric = "event_generic", e.EventReauthentication = "event_reauthentication", e.SolveTimeReauthentication = "solve_time_reauthentication", e.EventDeviceIntegrity = "event_device_integrity", e.SolveTimeDeviceIntegrity = "solve_time_device_integrity", e.EventPhoneVerification = "event_phone_verification", e.SolveTimePhoneVerification = "solve_time_phone_verification", e.EventEmailVerification = "event_email_verification", e.SolveTimeEmailVerification = "solve_time_email_verification"
	}(zr || (zr = {}));
	var eo, to, no = {
			withCredentials: !0,
			url: $r + "/v1/metrics/record",
			timeout: 1e4
		},
		ro = function(e) {
			return Y(g.httpService.post(no, e), qr)
		},
		oo = (null !== (eo = I.EnvironmentUrls.apiGatewayUrl) && void 0 !== eo ? eo : "URL_NOT_FOUND") + "/private-access-token";
	! function(e) {
		e[e.UNKNOWN = 0] = "UNKNOWN"
	}(to || (to = {}));
	var io, ao, uo = {
			withCredentials: !0,
			url: oo + "/v1/getPATToken",
			timeout: 1e4
		},
		so = function(e, t, n, r) {
			return new(n || (n = Promise))((function(o, i) {
				function a(e) {
					try {
						s(r.next(e))
					} catch (e) {
						i(e)
					}
				}

				function u(e) {
					try {
						s(r.throw(e))
					} catch (e) {
						i(e)
					}
				}

				function s(e) {
					var t;
					e.done ? o(e.value) : (t = e.value, t instanceof n ? t : new n((function(e) {
						e(t)
					}))).then(a, u)
				}
				s((r = r.apply(e, t || [])).next())
			}))
		},
		co = function(e, t) {
			var n, r, o, i, a = {
				label: 0,
				sent: function() {
					if (1 & o[0]) throw o[1];
					return o[1]
				},
				trys: [],
				ops: []
			};
			return i = {
				next: u(0),
				throw: u(1),
				return: u(2)
			}, "function" == typeof Symbol && (i[Symbol.iterator] = function() {
				return this
			}), i;

			function u(i) {
				return function(u) {
					return function(i) {
						if (n) throw new TypeError("Generator is already executing.");
						for (; a;) try {
							if (n = 1, r && (o = 2 & i[0] ? r.return : i[0] ? r.throw || ((o = r.return) && o.call(r), 0) : r.next) && !(o = o.call(r, i[1])).done) return o;
							switch (r = 0, o && (i = [2 & i[0], o.value]), i[0]) {
								case 0:
								case 1:
									o = i;
									break;
								case 4:
									return a.label++, {
										value: i[1],
										done: !1
									};
								case 5:
									a.label++, r = i[1], i = [0];
									continue;
								case 7:
									i = a.ops.pop(), a.trys.pop();
									continue;
								default:
									if (!(o = a.trys, (o = o.length > 0 && o[o.length - 1]) || 6 !== i[0] && 2 !== i[0])) {
										a = 0;
										continue
									}
									if (3 === i[0] && (!o || i[1] > o[0] && i[1] < o[3])) {
										a.label = i[1];
										break
									}
									if (6 === i[0] && a.label < o[1]) {
										a.label = o[1], o = i;
										break
									}
									if (o && a.label < o[2]) {
										a.label = o[2], a.ops.push(i);
										break
									}
									o[2] && a.ops.pop(), a.trys.pop();
									continue
							}
							i = t.call(e, a)
						} catch (e) {
							i = [6, e], r = 0
						} finally {
							n = o = 0
						}
						if (5 & i[0]) throw i[1];
						return {
							value: i[0] ? i[1] : void 0,
							done: !0
						}
					}([i, u])
				}
			}
		},
		lo = function(e) {
			return so(void 0, void 0, Promise, (function() {
				return co(this, (function(t) {
					return [2, Y(g.httpService.post(uo, {
						challengeId: e
					}), to)]
				}))
			}))
		},
		po = (null !== (io = I.EnvironmentUrls.apiGatewayUrl) && void 0 !== io ? io : "URL_NOT_FOUND") + "/challenge";
	! function(e) {
		e[e.UNKNOWN = 1] = "UNKNOWN"
	}(ao || (ao = {}));
	var fo, Eo, mo, ho = {
			withCredentials: !0,
			url: po + "/v1/continue",
			timeout: 1e4
		},
		So = function(e, t, n, r) {
			return new(n || (n = Promise))((function(o, i) {
				function a(e) {
					try {
						s(r.next(e))
					} catch (e) {
						i(e)
					}
				}

				function u(e) {
					try {
						s(r.throw(e))
					} catch (e) {
						i(e)
					}
				}

				function s(e) {
					var t;
					e.done ? o(e.value) : (t = e.value, t instanceof n ? t : new n((function(e) {
						e(t)
					}))).then(a, u)
				}
				s((r = r.apply(e, t || [])).next())
			}))
		},
		vo = function(e, t) {
			var n, r, o, i, a = {
				label: 0,
				sent: function() {
					if (1 & o[0]) throw o[1];
					return o[1]
				},
				trys: [],
				ops: []
			};
			return i = {
				next: u(0),
				throw: u(1),
				return: u(2)
			}, "function" == typeof Symbol && (i[Symbol.iterator] = function() {
				return this
			}), i;

			function u(i) {
				return function(u) {
					return function(i) {
						if (n) throw new TypeError("Generator is already executing.");
						for (; a;) try {
							if (n = 1, r && (o = 2 & i[0] ? r.return : i[0] ? r.throw || ((o = r.return) && o.call(r), 0) : r.next) && !(o = o.call(r, i[1])).done) return o;
							switch (r = 0, o && (i = [2 & i[0], o.value]), i[0]) {
								case 0:
								case 1:
									o = i;
									break;
								case 4:
									return a.label++, {
										value: i[1],
										done: !1
									};
								case 5:
									a.label++, r = i[1], i = [0];
									continue;
								case 7:
									i = a.ops.pop(), a.trys.pop();
									continue;
								default:
									if (!(o = a.trys, (o = o.length > 0 && o[o.length - 1]) || 6 !== i[0] && 2 !== i[0])) {
										a = 0;
										continue
									}
									if (3 === i[0] && (!o || i[1] > o[0] && i[1] < o[3])) {
										a.label = i[1];
										break
									}
									if (6 === i[0] && a.label < o[1]) {
										a.label = o[1], o = i;
										break
									}
									if (o && a.label < o[2]) {
										a.label = o[2], a.ops.push(i);
										break
									}
									o[2] && a.ops.pop(), a.trys.pop();
									continue
							}
							i = t.call(e, a)
						} catch (e) {
							i = [6, e], r = 0
						} finally {
							n = o = 0
						}
						if (5 & i[0]) throw i[1];
						return {
							value: i[0] ? i[1] : void 0,
							done: !0
						}
					}([i, u])
				}
			}
		},
		Ao = function(e, t, n) {
			return So(void 0, void 0, Promise, (function() {
				return vo(this, (function(r) {
					return [2, Y(g.httpService.post(ho, {
						challengeId: e,
						challengeType: t,
						challengeMetadata: n
					}), ao)]
				}))
			}))
		},
		_o = null !== (fo = I.EnvironmentUrls.authApi) && void 0 !== fo ? fo : "URL_NOT_FOUND",
		No = 1e4;
	! function(e) {
		e[e.UNKNOWN = 0] = "UNKNOWN", e[e.EXCEEDED_REGISTERED_KEYS_LIMIT = 1] = "EXCEEDED_REGISTERED_KEYS_LIMIT", e[e.FEATURE_DISABLED = 2] = "FEATURE_DISABLED", e[e.INVALID_CREDENTIAL_NICKNAME = 3] = "INVALID_CREDENTIAL_NICKNAME"
	}(Eo || (Eo = {})),
	function(e) {
		e[e.UNKNOWN = 0] = "UNKNOWN", e[e.FEATURE_DISABLED = 1] = "FEATURE_DISABLED", e[e.FLOODED = 2] = "FLOODED", e[e.INVALID_PASSWORD = 20] = "INVALID_PASSWORD", e[e.PASSWORDS_DO_NOT_MATCH = 21] = "PASSWORDS_DO_NOT_MATCH", e[e.TWO_STEP_VERIFICATION_REQUIRED = 24] = "TWO_STEP_VERIFICATION_REQUIRED"
	}(mo || (mo = {}));
	var To, Oo = {
			withCredentials: !0,
			url: _o + "/v1/passkey/StartRegistration",
			timeout: No
		},
		bo = {
			withCredentials: !0,
			url: _o + "/v1/passkey/start-preauth-registration",
			timeout: No
		},
		yo = {
			withCredentials: !0,
			url: _o + "/v1/passkey/FinishRegistration",
			timeout: No
		},
		Ro = {
			withCredentials: !0,
			url: _o + "/v1/passkey/DeleteCredentialBatch",
			timeout: No
		},
		Co = {
			withCredentials: !0,
			url: _o + "/v1/passkey/ListCredentials",
			timeout: No
		},
		Io = {
			withCredentials: !0,
			url: _o + "/v2/passwords/reset",
			timeout: No
		},
		wo = function(e) {
			return Y(g.httpService.post(bo, {
				username: e
			}), Eo, (function(e) {
				return {
					creationOptions: JSON.parse(e.creationOptions),
					sessionId: e.sessionId
				}
			}))
		},
		Po = function() {
			return Y(g.httpService.post(Oo, {}), Eo, (function(e) {
				return {
					creationOptions: JSON.parse(e.creationOptions),
					sessionId: e.sessionId
				}
			}))
		},
		Do = function(e, t, n) {
			return Y(g.httpService.post(yo, {
				sessionId: e,
				credentialNickname: t,
				attestationResponse: n
			}), Eo)
		},
		Uo = function(e) {
			return Y(g.httpService.post(Ro, {
				credentialNicknames: e
			}), Eo)
		},
		go = function() {
			return Y(g.httpService.post(Co, {
				all: !0
			}), Eo)
		},
		Lo = function(e, t, n, r, o, i, a, u, s, c, l) {
			return Y(g.httpService.post(Io, {
				targetType: e,
				ticket: t,
				userId: n,
				password: r,
				passwordRepeated: o,
				twoStepVerificationChallengeId: i,
				twoStepVerificationToken: a,
				accountBlob: u,
				secureAuthenticationIntent: s,
				passkeySessionId: c,
				passkeyRegistrationResponse: l
			}), mo)
		};
	! function(e) {
		e[e.UNKNOWN = 0] = "UNKNOWN", e[e.CANCELLATION_ERROR = 1] = "CANCELLATION_ERROR", e[e.INTERRUPTED_ERROR = 2] = "INTERRUPTED_ERROR", e[e.INVALID_REQUEST = 3] = "INVALID_REQUEST", e[e.JSON_EXCEPTION = 4] = "JSON_EXCEPTION", e[e.CREDENTIALS_PROTOCOL_NOT_SUPPORTED = 5] = "CREDENTIALS_PROTOCOL_NOT_SUPPORTED", e[e.NO_CREDENTIALS_FOUND = 6] = "NO_CREDENTIALS_FOUND", e[e.INVALID_STATE_ERROR = 11] = "INVALID_STATE_ERROR"
	}(To || (To = {}));
	var Mo, ko, Vo, Fo = function(e) {
			return e.code
		},
		xo = function(e, t, n) {
			return B(wn.hybridResponseService.getNativeResponse(e, t, n), To, Fo, (function(e) {
				if (null === e) return null;
				var t = JSON.parse(e);
				if (void 0 !== t.errorCode) throw {
					name: "getNativeResponse Error",
					message: t.errorMsg,
					code: t.errorCode
				};
				return !(I.DeviceMeta && (0, I.DeviceMeta)().isInApp && (0, I.DeviceMeta)().isAndroidApp) ? wn.fido2Util.formatCredentialAuthenticationResponseApp(e) : e
			}))
		},
		Wo = function(e) {
			return B(navigator.credentials.get(e), To).then((function(e) {
				return V(e, (function(e) {
					return null === e ? null : wn.fido2Util.formatCredentialAuthenticationResponseWeb(e)
				}))
			}))
		},
		Ho = (null !== (Mo = I.EnvironmentUrls.apiGatewayUrl) && void 0 !== Mo ? Mo : "URL_NOT_FOUND") + "/account-recovery-service";
	! function(e) {
		e[e.UNKNOWN = 1] = "UNKNOWN", e[e.REQUEST_TYPE_WAS_INVALID = 2] = "REQUEST_TYPE_WAS_INVALID", e[e.IDENTIFIER_INVALID = 3] = "IDENTIFIER_INVALID", e[e.TOO_MANY_REQUESTS = 4] = "TOO_MANY_REQUESTS", e[e.ACCOUNT_NOT_VERIFIED = 5] = "ACCOUNT_NOT_VERIFIED", e[e.INVALID_CODE = 6] = "INVALID_CODE"
	}(ko || (ko = {})),
	function(e) {
		e.Invalid = "RECOVERY_STATE_INVALID", e.AccountIdentifierRequired = "RECOVERY_STATE_ACCOUNT_IDENTIFIER_REQUIRED", e.ContactMethodVerificationRequired = "RECOVERY_STATE_CONTACT_METHOD_VERIFICATION_REQUIRED", e.AwaitingContactMethodVerification = "RECOVERY_STATE_AWAITING_CONTACT_METHOD_VERIFICATION", e.AccountVerified = "RECOVERY_STATE_ACCOUNT_VERIFIED"
	}(Vo || (Vo = {}));
	var Yo, Bo = {
		url: Ho + "/v1/request-recovery",
		timeout: 1e4
	};
	! function(e) {
		e[e.Email = 2] = "Email", e[e.Phone = 3] = "Phone"
	}(Yo || (Yo = {}));
	var Go, Ko = {
			url: Ho + "/v1/send-code",
			timeout: 1e4
		},
		Qo = {
			url: Ho + "/v1/resend-code",
			timeout: 1e4
		},
		qo = {
			url: Ho + "/v1/verify-code",
			timeout: 1e4
		},
		zo = {
			url: Ho + "/v1/recovery-session-metadata",
			timeout: 1e4
		},
		Xo = {
			url: Ho + "/v1/set-email",
			timeout: 1e4
		},
		jo = function(e, t, n) {
			return Y(g.httpService.post(Bo, {
				identifier: e,
				identifierType: t,
				recoverySessionId: n
			}), ko)
		},
		Jo = function(e, t, n) {
			return Y(g.httpService.post(Ko, {
				contactMethod: e,
				contactMethodType: t,
				recoverySessionId: n
			}), ko)
		},
		Zo = function(e) {
			return Y(g.httpService.post(Qo, {
				recoverySessionId: e
			}), ko)
		},
		$o = function(e, t) {
			return Y(g.httpService.post(qo, {
				recoverySessionId: e,
				code: t
			}), ko)
		},
		ei = function(e) {
			return Y(g.httpService.post(zo, {
				recoverySessionId: e
			}), ko)
		},
		ti = function(e) {
			return Y(g.httpService.post(Xo, {
				recoverySessionId: e
			}), ko)
		},
		ni = function() {
			this.captcha = t, this.email = n, this.fido2 = b, this.games = r, this.metrics = _, this.myAccount = o, this.otp = i, this.password = a, this.phone = u, this.playstation = s, this.promptAssignments = c, this.securityQuestions = E, this.sessionManagement = m, this.reauthentication = d, this.rostile = f, this.thumbnails = h, this.twoStepVerification = S, this.universalAppConfiguration = v, this.proofOfSpace = l, this.proofOfWork = p, this.xbox = A, this.privateAccessToken = N, this.genericChallenge = T, this.authApi = O, this.accountRecoveryApi = y
		},
		ri = ReactUtilities,
		oi = "Account Security Prompt:",
		ii = "authpopup",
		ai = "emailhighlight",
		ui = "/my/account#!/security?src=",
		si = "https://en.help.roblox.com/hc/articles/212459863-Add-2-Step-Verification-to-Your-Account",
		ci = "accountSecurityPromptEvent",
		li = {
			modalStateViewed: "modalStateViewed"
		},
		pi = ReactStyleGuide,
		di = function(e, t) {
			switch (t) {
				case Ce.VALID_PASSWORD:
					return null;
				case Ce.WEAK_PASSWORD:
					return e.Message.Error.PasswordValidation.WeakPassword;
				case Ce.SHORT_PASSWORD:
					return e.Message.Error.PasswordValidation.ShortPassword;
				case Ce.PASSWORD_SAME_AS_USERNAME:
					return e.Message.Error.PasswordValidation.PasswordSameAsUsername;
				case Ce.FORBIDDEN_PASSWORD:
					return e.Message.Error.PasswordValidation.ForbiddenPassword;
				case Ce.DUMB_STRINGS:
					return e.Message.Error.PasswordValidation.DumbStrings;
				default:
					return e.Message.Error.PasswordValidation.Default
			}
		};
	! function(e) {
		e.NONE = "NONE", e.CHANGE_PASSWORD_INTRO = "CHANGE_PASSWORD_INTRO", e.CHANGE_PASSWORD_FORM = "CHANGE_PASSWORD_FORM", e.CHANGE_PASSWORD_CONFIRMATION = "CHANGE_PASSWORD_CONFIRMATION", e.CHANGE_PASSWORD_DISMISS_CONFIRMATION = "CHANGE_PASSWORD_DISMISS_CONFIRMATION", e.AUTHENTICATOR_UPSELL_OPENING = "AUTHENTICATOR_UPSELL_OPENING", e.AUTHENTICATOR_UPSELL_DOWNLOAD_APPS = "AUTHENTICATOR_UPSELL_DOWNLOAD_APPS", e.ACCOUNT_RESTORE_POLICY_UPSELL = "ACCOUNT_RESTORE_POLICY_UPSELL", e.EMAIL_2SV_UPSELL = "EMAIL_2SV_UPSELL"
	}(Go || (Go = {}));
	var fi, Ei = Go;
	! function(e) {
		e[e.DISMISS_TEMPORARY = 0] = "DISMISS_TEMPORARY", e[e.DISMISS_FOREVER = 1] = "DISMISS_FOREVER", e[e.SET_FLOW_COMPLETE = 2] = "SET_FLOW_COMPLETE", e[e.SET_MODAL_STATE = 3] = "SET_MODAL_STATE", e[e.SET_EMAIL_ADDRESS = 4] = "SET_EMAIL_ADDRESS"
	}(fi || (fi = {}));
	var mi, hi = function() {
			return hi = Object.assign || function(e) {
				for (var t, n = 1, r = arguments.length; n < r; n++)
					for (var o in t = arguments[n]) Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
				return e
			}, hi.apply(this, arguments)
		},
		Si = function(e, t) {
			var n = hi({}, e);
			switch (t.type) {
				case fi.DISMISS_TEMPORARY:
				case fi.DISMISS_FOREVER:
					return n.isFlowComplete = !0, n;
				case fi.SET_MODAL_STATE:
					return n.lastModalState = e.modalState, n.modalState = t.modalState, n.modalState === Ei.CHANGE_PASSWORD_CONFIRMATION && (n.isFlowComplete = !0), n;
				case fi.SET_EMAIL_ADDRESS:
					return n.emailAddress = t.emailAddress, n;
				default:
					return e
			}
		},
		vi = (0, P.createContext)(null),
		Ai = function(e) {
			var t = e.promptAssignment,
				n = e.username,
				r = e.isUserUnder13,
				o = e.eventService,
				i = e.requestService,
				a = e.translate,
				u = e.children,
				s = Ei.NONE,
				c = t.promptType === nt.BROADER_AUTHENTICATOR_UPSELL && !0 !== t.isGeneric && !t.metadata.showBanner,
				l = t.promptType === nt.EMAIL_2SV_UPSELL && !0 !== t.isGeneric && !t.metadata.showBanner;
			t.promptType === nt.AUTHENTICATOR_UPSELL || c ? s = Ei.AUTHENTICATOR_UPSELL_OPENING : t.promptType === nt.ACCOUNT_RESTORES_POLICY_UPSELL ? s = Ei.ACCOUNT_RESTORE_POLICY_UPSELL : t.promptType === nt.EMAIL_2SV_UPSELL && l && (s = Ei.EMAIL_2SV_UPSELL);
			var p = (0, P.useState)((function() {
					return function(e, t) {
						return {
							Action: {
								AbortDismissForeverAddEmail: e("Action.AbortDismissForeverAddEmail"),
								AbortDismissForeverChangePassword: e("Action.AbortDismissForeverChangePassword"),
								AccountRestoreOpenSettings: e("Action.OpenSettings"),
								AuthenticatorUpsellSetupAuthenticatorButtonMessage: e("Label.AuthenticatorUpsellSetupAuthenticatorButtonMessage"),
								AuthenticatorUpsellNextButtonMessage: e("Action.AuthenticatorUpsellNextButtonMessage"),
								ChangeEmail: e("Action.ChangeEmail"),
								ConfirmDismissForeverAddEmail: e("Action.ConfirmDismissForeverAddEmail"),
								ConfirmDismissForeverChangePassword: e("Action.ConfirmDismissForeverChangePassword"),
								ContinueAddEmail: e("Action.ContinueAddEmail"),
								ContinueChangePassword: e("Action.ContinueChangePassword"),
								DismissForever: e("Action.DismissForever"),
								RemindMeLater: e("Action.RemindMeLater"),
								ResendPasswordResetEmail: e("Action.ResendPasswordResetEmail"),
								SecureAccount: e("Action.SecureAccount"),
								SetUpAuthenticatorInBanner: e("Action.SetUpAuthenticatorInBanner"),
								SetUpAuthenticatorAccountRestoresPolicyUpsell: e("Action.SetUpAuthenticatorAccountRestoresPolicyUpsell"),
								SetUpEmail2SV: e("Action.SetUpEmail2SV"),
								SubmitChangePassword: e("Action.SubmitChangePassword")
							},
							Message: {
								Error: {
									Email: {
										FeatureDisabled: e("Message.Error.Email.FeatureDisabled"),
										TooManyAccountsOnEmail: e("Message.Error.Email.TooManyAccountsOnEmail"),
										TooManyAttemptsToUpdateEmail: e("Message.Error.Email.TooManyAttemptsToUpdateEmail"),
										InvalidEmailAddress: e("Message.Error.Email.InvalidEmailAddress"),
										Default: e("Message.Error.Email.Default")
									},
									Input: {
										InvalidEmail: e("Message.Error.Input.InvalidEmail"),
										PasswordsDoNotMatch: e("Message.Error.Input.PasswordsDoNotMatch")
									},
									Passwords: {
										Flooded: e("Message.Error.Password.Flooded"),
										InvalidPassword: e("Message.Error.Password.InvalidPassword"),
										InvalidCurrentPassword: e("Message.Error.Password.InvalidCurrentPassword"),
										Default: e("Message.Error.Password.Default")
									},
									PasswordReset: {
										UserDoesNotHaveEmail: e("Message.Error.PasswordReset.UserDoesNotHaveEmail"),
										Default: e("Message.Error.PasswordReset.Default")
									},
									PasswordValidation: {
										WeakPassword: e("Message.Error.PasswordValidation.WeakPassword"),
										ShortPassword: e("Message.Error.PasswordValidation.ShortPassword"),
										PasswordSameAsUsername: e("Message.Error.PasswordValidation.PasswordSameAsUsername"),
										ForbiddenPassword: e("Message.Error.PasswordValidation.ForbiddenPassword"),
										DumbStrings: e("Message.Error.PasswordValidation.DumbStrings"),
										Default: e("Message.Error.PasswordValidation.Default")
									},
									PromptAssignments: {
										Default: e("Message.Error.PromptAssignments.Default")
									}
								}
							},
							Description: {
								AccountRestoresPolicyUpdateV3: function(t) {
									return e("Description.AccountRestoresPolicyUpdateV3", {
										linkStart: '<a href="' + t + '" class="text-link" target="_blank">',
										linkEnd: "</a>"
									})
								},
								AccountRestoresPolicyUpsellMessageBody: function(t) {
									return e("Description.AccountRestoresPolicyUpsellMessageBody", {
										linkStartSettings: '<a href="' + t + '" class="text-link" target="_blank">',
										linkEndSettings: "</a>"
									})
								},
								AccountRestoresPolicyWithDate: function(t) {
									return e("Description.AccountRestoresPolicyWithDate", {
										date: t
									})
								},
								AddYourEmail: e(t ? "Description.AddYourEmailUnder13" : "Description.AddYourEmail"),
								AreYouSureDismissForeverAddEmail: e(t ? "Description.AreYouSureDismissForeverAddEmailUnder13" : "Description.AreYouSureDismissForeverAddEmail"),
								AreYouSureDismissForeverChangePassword: e("Description.AreYouSureDismissForeverChangePassword"),
								AuthenticatorSetupPrompt: function(t) {
									return e("Description.AuthenticatorSetupPrompt", {
										linkStart: '<a href="' + t + '" class="text-link" target="_blank">',
										linkEnd: "</a>"
									})
								},
								AuthenticatorSetupPromptNew: function(t) {
									return e("Description.AuthenticatorSetupPromptNew", {
										linkStart: '<a href="' + t + '" class="text-link" target="_blank">',
										linkEnd: "</a>"
									})
								},
								ChangeYourPassword: e("Description.ChangeYourPassword"),
								ChangeYourPasswordImmediately: e("Description.ChangeYourPasswordImmediately"),
								ChangeYourPasswordSuccess: e("Description.ChangeYourPasswordSuccess"),
								CheckYourEmail: function(n) {
									return e(t ? "Description.CheckYourEmailUnder13" : "Description.CheckYourEmail", {
										emailAddress: "<b>" + n + "</b>"
									})
								},
								Email2SVUpsellMessageBody: function(t) {
									return e("Description.Email2SVUpsellMessageBody", {
										linkStart: '<a href="' + t + '" class="text-link" target="_blank">',
										linkEnd: "</a>"
									})
								},
								GenericTextOnlyBanner: function(t) {
									return e(t)
								},
								LearnMoreHere: function(t) {
									return e("Description.LearnMoreHere", {
										linkStart: '<a href="' + t + '" class="text-link" target="_blank">',
										linkEnd: "</a>"
									})
								},
								NoChangeForceReset: function(t) {
									return e(t <= 1 ? "Description.NoChangeForceResetSingular" : "Description.NoChangeForceReset", {
										days: t,
										boldStart: "<b>",
										boldEnd: "</b>"
									}).replace("1", t < 1 ? "< 1" : "1")
								},
								ReceiveSecurityCodesMessage: e("Description.ReceiveSecurityCodesMessage"),
								UnusualActivity: e("Description.UnusualActivity")
							},
							Header: {
								AccountRestoresPolicyUpdate: e("Header.AccountRestoresPolicyUpdate"),
								AccountRestoresPolicyUpdateV3: e("Header.AccountRestoresPolicyUpdateV3"),
								AccountRestoresPolicyUpsell: e("Header.AccountRestoresPolicyUpsell"),
								AddYourEmail: e(t ? "Header.AddYourEmailUnder13" : "Header.AddYourEmail"),
								AreYouSure: e("Header.AreYouSure"),
								AuthenticatorUpsellDownloadAuthenticator: e("Header.AuthenticatorUpsellDownloadAuthenticator"),
								AuthenticatorUpsellWelcomeMessage: e("Header.AuthenticatorUpsellWelcomeMessage"),
								BoostYourAccountSecurity: e("Header.BoostYourAccountSecurity"),
								ChangeYourPassword: e("Header.ChangeYourPassword"),
								CheckYourEmail: e(t ? "Header.CheckYourEmailUnder13" : "Header.CheckYourEmail"),
								CreateAStrongPassword: e("Header.CreateAStrongPassword"),
								GenericTextOnlyBanner: function(t) {
									return e(t)
								},
								Email2SVUpsell: e("Header.Email2SVUpsell"),
								KeepYourAccountSafeLong: e("Header.KeepYourAccountSafeLong"),
								Success: e("Header.Success"),
								UnusualActivityDetected: e("Header.UnusualActivityDetected"),
								YourPasswordMightBeStolen: e("Header.YourPasswordMightBeStolen")
							},
							Label: {
								AtLeastCharacters: function(t) {
									return e("Label.AtLeastCharacters", {
										count: t
									})
								},
								AuthenticatorUpsellBadActorHeadline: e("Label.AuthenticatorUpsellBadActorHeadline"),
								AuthenticatorUpsellBadActorMessage: e("Label.AuthenticatorUpsellBadActorMessage"),
								AuthenticatorUpsellDownloadInstruction: e("Label.AuthenticatorUpsellDownloadInstruction"),
								AuthenticatorUpsellGoogleOption: e("Label.AuthenticatorUpsellGoogleOption"),
								AuthenticatorUpsellMicrosoftOption: e("Label.AuthenticatorUpsellMicrosoftOption"),
								AuthenticatorUpsellProtectRobuxHeadline: e("Label.AuthenticatorUpsellProtectRobuxHeadline"),
								AuthenticatorUpsellProtectRobuxMessage: e("Label.AuthenticatorUpsellProtectRobuxMessage"),
								AuthenticatorUpsellTwilioOption: e("Label.AuthenticatorUpsellTwilioOption"),
								AuthenticatorUpsellTwoFactorHeadline: e("Label.AuthenticatorUpsellTwoFactorHeadline"),
								AuthenticatorUpsellTwoFactorMessage: e("Label.AuthenticatorUpsellTwoFactorMessage"),
								ConfirmNewPassword: e("Label.ConfirmNewPassword"),
								CurrentPassword: e("Label.CurrentPassword"),
								IForgotMyPassword: e("Label.IForgotMyPassword"),
								MinutesSeconds: function(t, n) {
									return e("Label.MinutesSeconds", {
										minutes: t,
										seconds: n
									})
								},
								NewPassword: e("Label.NewPassword"),
								TimeRemaining: e("Label.TimeRemaining"),
								UseAUniquePassword: e("Label.UseAUniquePassword"),
								YourEmail: e(t ? "Label.YourEmailUnder13" : "Label.YourEmail")
							}
						}
					}(a, r)
				}))[0],
				d = (0, P.useState)((function() {
					return {
						promptAssignment: t,
						username: n,
						resources: p,
						requestService: i,
						isFlowComplete: !1,
						modalState: s,
						lastModalState: null,
						emailAddress: ""
					}
				}))[0],
				f = (0, P.useReducer)(Si, d),
				E = f[0],
				m = f[1];
			return (0, P.useEffect)((function() {
				return function(e, t, n) {
					t !== n && e.sendModalStateViewedEvent(t)
				}(o, E.modalState, E.lastModalState)
			}), [o, E.modalState, E.lastModalState]), D().createElement(vi.Provider, {
				value: {
					state: E,
					dispatch: m
				}
			}, u)
		},
		_i = function() {
			var e = (0, P.useContext)(vi);
			if (null === e) throw new Error("AccountSecurityPromptContext was not provided in the current scope");
			return e
		},
		Ni = function(e) {
			var t = parseInt(e, 10);
			if (Number.isNaN(t) || !Number.isSafeInteger(t)) return 14;
			var n = Math.max(0, t - Date.now());
			return Math.floor(n / 864e5)
		},
		Ti = function(e, t, n, r) {
			return new(n || (n = Promise))((function(o, i) {
				function a(e) {
					try {
						s(r.next(e))
					} catch (e) {
						i(e)
					}
				}

				function u(e) {
					try {
						s(r.throw(e))
					} catch (e) {
						i(e)
					}
				}

				function s(e) {
					var t;
					e.done ? o(e.value) : (t = e.value, t instanceof n ? t : new n((function(e) {
						e(t)
					}))).then(a, u)
				}
				s((r = r.apply(e, t || [])).next())
			}))
		},
		Oi = function(e, t) {
			var n, r, o, i, a = {
				label: 0,
				sent: function() {
					if (1 & o[0]) throw o[1];
					return o[1]
				},
				trys: [],
				ops: []
			};
			return i = {
				next: u(0),
				throw: u(1),
				return: u(2)
			}, "function" == typeof Symbol && (i[Symbol.iterator] = function() {
				return this
			}), i;

			function u(i) {
				return function(u) {
					return function(i) {
						if (n) throw new TypeError("Generator is already executing.");
						for (; a;) try {
							if (n = 1, r && (o = 2 & i[0] ? r.return : i[0] ? r.throw || ((o = r.return) && o.call(r), 0) : r.next) && !(o = o.call(r, i[1])).done) return o;
							switch (r = 0, o && (i = [2 & i[0], o.value]), i[0]) {
								case 0:
								case 1:
									o = i;
									break;
								case 4:
									return a.label++, {
										value: i[1],
										done: !1
									};
								case 5:
									a.label++, r = i[1], i = [0];
									continue;
								case 7:
									i = a.ops.pop(), a.trys.pop();
									continue;
								default:
									if (!(o = a.trys, (o = o.length > 0 && o[o.length - 1]) || 6 !== i[0] && 2 !== i[0])) {
										a = 0;
										continue
									}
									if (3 === i[0] && (!o || i[1] > o[0] && i[1] < o[3])) {
										a.label = i[1];
										break
									}
									if (6 === i[0] && a.label < o[1]) {
										a.label = o[1], o = i;
										break
									}
									if (o && a.label < o[2]) {
										a.label = o[2], a.ops.push(i);
										break
									}
									o[2] && a.ops.pop(), a.trys.pop();
									continue
							}
							i = t.call(e, a)
						} catch (e) {
							i = [6, e], r = 0
						} finally {
							n = o = 0
						}
						if (5 & i[0]) throw i[1];
						return {
							value: i[0] ? i[1] : void 0,
							done: !0
						}
					}([i, u])
				}
			}
		},
		bi = function() {
			var e = _i(),
				t = e.state,
				n = t.promptAssignment,
				r = t.resources,
				o = t.requestService,
				i = e.dispatch,
				a = (0, P.useState)(!1),
				u = a[0],
				s = a[1],
				c = function() {
					return Ti(void 0, void 0, Promise, (function() {
						var e;
						return Oi(this, (function(t) {
							switch (t.label) {
								case 0:
									return s(!0), [4, o.promptAssignments.updateForCurrentUser(st.DISABLE_PROMPT, n.promptType)];
								case 1:
									return (e = t.sent()).isError && (s(!1), console.warn(oi, "Disabling prompt failed with error", e.error && $e[e.error])), i({
										type: fi.DISMISS_FOREVER
									}), [2]
							}
						}))
					}))
				},
				l = function() {
					return Ti(void 0, void 0, Promise, (function() {
						var e;
						return Oi(this, (function(t) {
							switch (t.label) {
								case 0:
									return s(!0), [4, o.promptAssignments.updateForCurrentUser(st.DISMISS_PROMPT, n.promptType)];
								case 1:
									return (e = t.sent()).isError && (s(!1), console.warn(oi, "Dismissing prompt failed with error", e.error && $e[e.error])), i({
										type: fi.DISMISS_TEMPORARY
									}), [2]
							}
						}))
					}))
				},
				p = [nt.BROADER_AUTHENTICATOR_UPSELL.toString(), nt.ACCOUNT_RESTORES_POLICY_UPDATE_V3.toString(), nt.EMAIL_2SV_UPSELL.toString()].includes(n.promptType.toString()),
				d = !p,
				f = nt.ACCOUNT_RESTORES_POLICY_UPDATE_V3 !== n.promptType,
				E = nt.CHANGE_PASSWORD__SUSPECTED_COMPROMISE === n.promptType,
				m = [nt.CHANGE_PASSWORD__SUSPECTED_COMPROMISE.toString(), nt.ACCOUNT_RESTORES_POLICY_UPDATE.toString(), nt.ACCOUNT_RESTORES_POLICY_UPDATE_V2.toString(), nt.ACCOUNT_RESTORES_POLICY_UPDATE_V3.toString(), nt.BROADER_AUTHENTICATOR_UPSELL.toString(), nt.EMAIL_2SV_UPSELL.toString()].includes(n.promptType.toString());
			n.isGeneric && (d = n.metadata.showAlertIcon, f = !1, E = !1, m = n.metadata.showXButtonForDisable);
			var h, S, v = r.Action.SubmitChangePassword;
			if (n.promptType === nt.ACCOUNT_RESTORES_POLICY_UPDATE || n.promptType === nt.ACCOUNT_RESTORES_POLICY_UPDATE_V2 ? v = r.Action.AccountRestoreOpenSettings : n.promptType === nt.BROADER_AUTHENTICATOR_UPSELL ? v = r.Action.SetUpAuthenticatorInBanner : n.promptType === nt.EMAIL_2SV_UPSELL && (v = r.Action.SetUpEmail2SV), n.isGeneric)
				if (n.metadata.displayType === et.TEXT_ONLY_BANNER) h = r.Description.GenericTextOnlyBanner(n.metadata.headerResource);
				else h = "";
			else switch (n.promptType) {
				case nt.CHANGE_PASSWORD__SUSPECTED_COMPROMISE:
					h = r.Header.UnusualActivityDetected;
					break;
				case nt.CHANGE_PASSWORD__BREACHED_CREDENTIAL:
					h = r.Header.YourPasswordMightBeStolen;
					break;
				case nt.ACCOUNT_RESTORES_POLICY_UPDATE:
					h = r.Header.AccountRestoresPolicyUpdate;
					break;
				case nt.ACCOUNT_RESTORES_POLICY_UPDATE_V2:
					h = r.Header.KeepYourAccountSafeLong;
					break;
				case nt.ACCOUNT_RESTORES_POLICY_UPDATE_V3:
					h = r.Header.AccountRestoresPolicyUpdateV3;
					break;
				case nt.BROADER_AUTHENTICATOR_UPSELL:
					h = r.Header.BoostYourAccountSecurity;
					break;
				case nt.EMAIL_2SV_UPSELL:
					h = r.Header.Email2SVUpsell;
					break;
				default:
					h = ""
			}
			if (n.isGeneric)
				if (n.metadata.displayType === et.TEXT_ONLY_BANNER) S = r.Header.GenericTextOnlyBanner(n.metadata.bodyResource);
				else S = "";
			else switch (n.promptType) {
				case nt.ACCOUNT_RESTORES_POLICY_UPDATE:
					var A = new Date(n.metadata.accountRestoresPolicyEffectiveTimestamp).toLocaleDateString(void 0, {
						year: "numeric",
						month: "short",
						day: "numeric"
					});
					S = r.Description.AccountRestoresPolicyWithDate(A) + " " + r.Description.AuthenticatorSetupPrompt(si);
					break;
				case nt.ACCOUNT_RESTORES_POLICY_UPDATE_V2:
					S = r.Description.AuthenticatorSetupPromptNew(si);
					break;
				case nt.ACCOUNT_RESTORES_POLICY_UPDATE_V3:
					S = r.Description.AccountRestoresPolicyUpdateV3(ui);
					break;
				case nt.CHANGE_PASSWORD__SUSPECTED_COMPROMISE:
					S = r.Description.UnusualActivity + " " + r.Description.ChangeYourPassword;
					break;
				case nt.CHANGE_PASSWORD__BREACHED_CREDENTIAL:
					S = r.Description.ChangeYourPasswordImmediately + " " + r.Description.NoChangeForceReset(Ni(n.metadata.forceResetTimestamp)) + " " + r.Description.LearnMoreHere("https://en.help.roblox.com/hc/articles/4416940180500-Why-am-I-seeing-a-banner-asking-me-to-change-my-password-");
					break;
				case nt.BROADER_AUTHENTICATOR_UPSELL:
					S = r.Description.ReceiveSecurityCodesMessage;
					break;
				case nt.EMAIL_2SV_UPSELL:
					S = r.Description.Email2SVUpsellMessageBody(ui);
					break;
				default:
					S = ""
			}
			return "" === h || "" === S ? D().createElement(D().Fragment, null) : D().createElement("div", {
				className: "security-banner-wrapper"
			}, D().createElement("div", {
				className: "security-banner"
			}, D().createElement("div", {
				className: "banner-start"
			}, d && D().createElement("div", {
				className: "banner-icon"
			}, D().createElement("div", {
				className: "icon-warning"
			})), p && D().createElement("div", {
				className: "banner-icon-lock"
			}), D().createElement("div", {
				className: "banner-content"
			}, D().createElement("h2", {
				className: "banner-header"
			}, h), D().createElement("div", {
				className: "banner-description",
				dangerouslySetInnerHTML: {
					__html: S
				}
			})), m && D().createElement("button", {
				type: "button",
				className: "close banner-close",
				"aria-label": r.Action.RemindMeLater,
				onClick: l
			}, D().createElement("span", {
				className: "icon-close"
			}))), D().createElement("div", {
				className: "banner-buttons"
			}, E && D().createElement("span", {
				className: "banner-button"
			}, D().createElement("button", {
				type: "button",
				className: "btn-secondary-md",
				"aria-label": r.Action.DismissForever,
				onClick: function() {
					i({
						type: fi.SET_MODAL_STATE,
						modalState: Ei.CHANGE_PASSWORD_DISMISS_CONFIRMATION
					})
				},
				disabled: u
			}, r.Action.DismissForever)), f && D().createElement("span", {
				className: "banner-button banner-button-last"
			}, D().createElement("button", {
				type: "button",
				className: "btn-cta-md",
				"aria-label": v,
				onClick: function() {
					return Ti(void 0, void 0, void 0, (function() {
						return Oi(this, (function(e) {
							switch (e.label) {
								case 0:
									return n.promptType !== nt.ACCOUNT_RESTORES_POLICY_UPDATE && n.promptType !== nt.ACCOUNT_RESTORES_POLICY_UPDATE_V2 ? [3, 2] : [4, c()];
								case 1:
									return e.sent(), window.open(ui + ii, "_self"), [3, 3];
								case 2:
									n.promptType === nt.BROADER_AUTHENTICATOR_UPSELL ? i({
										type: fi.SET_MODAL_STATE,
										modalState: Ei.AUTHENTICATOR_UPSELL_OPENING
									}) : n.promptType === nt.EMAIL_2SV_UPSELL ? window.open(ui + ai, "_self") : i({
										type: fi.SET_MODAL_STATE,
										modalState: Ei.CHANGE_PASSWORD_INTRO
									}), e.label = 3;
								case 3:
									return [2]
							}
						}))
					}))
				},
				disabled: u
			}, v)), m && D().createElement(P.Fragment, null, u ? D().createElement("span", {
				className: "banner-close icon-close spinner-circle"
			}) : D().createElement("button", {
				type: "button",
				className: "close banner-close",
				"aria-label": r.Action.RemindMeLater,
				onClick: function() {
					return Ti(void 0, void 0, Promise, (function() {
						return Oi(this, (function(e) {
							switch (e.label) {
								case 0:
									return n.promptType === nt.ACCOUNT_RESTORES_POLICY_UPDATE || n.promptType === nt.ACCOUNT_RESTORES_POLICY_UPDATE_V2 || n.promptType === nt.ACCOUNT_RESTORES_POLICY_UPDATE_V3 || n.isGeneric && n.metadata.displayType === et.TEXT_ONLY_BANNER ? [4, c()] : [3, 2];
								case 1:
									return e.sent(), [3, 4];
								case 2:
									return [4, l()];
								case 3:
									e.sent(), e.label = 4;
								case 4:
									return [2]
							}
						}))
					}))
				}
			}, D().createElement("span", {
				className: "icon-close"
			}))))))
		},
		yi = function(e) {
			var t = e.positiveButton,
				n = e.negativeButton,
				r = e.children;
			return D().createElement(pi.Modal.Footer, null, D().createElement("div", {
				className: "modal-modern-footer-buttons"
			}, null !== n && D().createElement("button", {
				type: "button",
				className: "btn-secondary-md modal-modern-footer-button",
				"aria-label": n.label,
				disabled: !n.enabled,
				onClick: n.action
			}, n.content), D().createElement("button", {
				type: "button",
				className: "btn-cta-md modal-modern-footer-button",
				"aria-label": t.label,
				disabled: !t.enabled,
				onClick: t.action
			}, t.content)), r)
		};
	! function(e) {
		e.BACK = "BACK", e.CLOSE = "CLOSE", e.HIDDEN = "HIDDEN"
	}(mi || (mi = {}));
	var Ri = function(e) {
			var t = e.headerText,
				n = e.buttonType,
				r = e.buttonAction,
				o = e.buttonEnabled,
				i = e.headerInfo;
			return D().createElement(pi.Modal.Header, {
				useBaseBootstrapComponent: !0
			}, function(e, t, n) {
				switch (e) {
					case mi.BACK:
						return D().createElement("button", {
							type: "button",
							className: "modal-modern-header-button",
							onClick: t,
							disabled: !n
						}, D().createElement("span", {
							className: "icon-back"
						}));
					case mi.CLOSE:
						return D().createElement("button", {
							type: "button",
							className: "modal-modern-header-button",
							onClick: t,
							disabled: !n
						}, D().createElement("span", {
							className: "icon-close"
						}));
					case mi.HIDDEN:
					default:
						return D().createElement("div", null)
				}
			}(n, r, o), D().createElement(pi.Modal.Title, null, t), D().createElement("div", {
				className: "modal-modern-header-info"
			}, i))
		},
		Ci = function(e, t, n, r) {
			return new(n || (n = Promise))((function(o, i) {
				function a(e) {
					try {
						s(r.next(e))
					} catch (e) {
						i(e)
					}
				}

				function u(e) {
					try {
						s(r.throw(e))
					} catch (e) {
						i(e)
					}
				}

				function s(e) {
					var t;
					e.done ? o(e.value) : (t = e.value, t instanceof n ? t : new n((function(e) {
						e(t)
					}))).then(a, u)
				}
				s((r = r.apply(e, t || [])).next())
			}))
		},
		Ii = function(e, t) {
			var n, r, o, i, a = {
				label: 0,
				sent: function() {
					if (1 & o[0]) throw o[1];
					return o[1]
				},
				trys: [],
				ops: []
			};
			return i = {
				next: u(0),
				throw: u(1),
				return: u(2)
			}, "function" == typeof Symbol && (i[Symbol.iterator] = function() {
				return this
			}), i;

			function u(i) {
				return function(u) {
					return function(i) {
						if (n) throw new TypeError("Generator is already executing.");
						for (; a;) try {
							if (n = 1, r && (o = 2 & i[0] ? r.return : i[0] ? r.throw || ((o = r.return) && o.call(r), 0) : r.next) && !(o = o.call(r, i[1])).done) return o;
							switch (r = 0, o && (i = [2 & i[0], o.value]), i[0]) {
								case 0:
								case 1:
									o = i;
									break;
								case 4:
									return a.label++, {
										value: i[1],
										done: !1
									};
								case 5:
									a.label++, r = i[1], i = [0];
									continue;
								case 7:
									i = a.ops.pop(), a.trys.pop();
									continue;
								default:
									if (!(o = a.trys, (o = o.length > 0 && o[o.length - 1]) || 6 !== i[0] && 2 !== i[0])) {
										a = 0;
										continue
									}
									if (3 === i[0] && (!o || i[1] > o[0] && i[1] < o[3])) {
										a.label = i[1];
										break
									}
									if (6 === i[0] && a.label < o[1]) {
										a.label = o[1], o = i;
										break
									}
									if (o && a.label < o[2]) {
										a.label = o[2], a.ops.push(i);
										break
									}
									o[2] && a.ops.pop(), a.trys.pop();
									continue
							}
							i = t.call(e, a)
						} catch (e) {
							i = [6, e], r = 0
						} finally {
							n = o = 0
						}
						if (5 & i[0]) throw i[1];
						return {
							value: i[0] ? i[1] : void 0,
							done: !0
						}
					}([i, u])
				}
			}
		},
		wi = function(e) {
			var t = e.closeModal,
				n = _i().state,
				r = n.resources,
				o = n.requestService,
				i = n.promptAssignment,
				a = (0, P.useState)(null),
				u = a[0],
				s = a[1],
				c = (0, P.useState)(!1),
				l = c[0],
				p = c[1],
				d = function() {
					return Ci(void 0, void 0, void 0, (function() {
						var e;
						return Ii(this, (function(t) {
							switch (t.label) {
								case 0:
									return [4, o.promptAssignments.updateForCurrentUser(st.DISMISS_PROMPT, i.promptType)];
								case 1:
									return (e = t.sent()).isError && console.warn(oi, "Dismissing Account Restores Policy Upsell prompt failed with error", e.error && $e[e.error]), [2]
							}
						}))
					}))
				},
				f = {
					content: l ? D().createElement("span", {
						className: "spinner spinner-xs spinner-no-margin"
					}) : r.Action.SetUpAuthenticatorAccountRestoresPolicyUpsell,
					label: r.Action.SetUpAuthenticatorAccountRestoresPolicyUpsell,
					enabled: !l,
					action: function() {
						return Ci(void 0, void 0, void 0, (function() {
							return Ii(this, (function(e) {
								switch (e.label) {
									case 0:
										return s(null), p(!0), [4, d()];
									case 1:
										return e.sent(), window.open(ui + ii, "_self"), [2]
								}
							}))
						}))
					}
				};
			return D().createElement(D().Fragment, null, D().createElement(Ri, {
				headerText: r.Header.AccountRestoresPolicyUpsell,
				buttonType: mi.CLOSE,
				buttonAction: function() {
					return Ci(void 0, void 0, void 0, (function() {
						return Ii(this, (function(e) {
							switch (e.label) {
								case 0:
									return t(), [4, d()];
								case 1:
									return e.sent(), [2]
							}
						}))
					}))
				},
				buttonEnabled: !0,
				headerInfo: null
			}), D().createElement(pi.Modal.Body, null, D().createElement("div", {
				className: "modal-lock-icon"
			}), D().createElement("p", {
				className: "modal-margin-bottom-sm",
				dangerouslySetInnerHTML: {
					__html: r.Description.AccountRestoresPolicyUpsellMessageBody(ui)
				}
			}), D().createElement("p", {
				className: "text-error xsmall"
			}, u)), D().createElement(yi, {
				positiveButton: f,
				negativeButton: null
			}))
		},
		Pi = function(e, t, n, r) {
			return new(n || (n = Promise))((function(o, i) {
				function a(e) {
					try {
						s(r.next(e))
					} catch (e) {
						i(e)
					}
				}

				function u(e) {
					try {
						s(r.throw(e))
					} catch (e) {
						i(e)
					}
				}

				function s(e) {
					var t;
					e.done ? o(e.value) : (t = e.value, t instanceof n ? t : new n((function(e) {
						e(t)
					}))).then(a, u)
				}
				s((r = r.apply(e, t || [])).next())
			}))
		},
		Di = function(e, t) {
			var n, r, o, i, a = {
				label: 0,
				sent: function() {
					if (1 & o[0]) throw o[1];
					return o[1]
				},
				trys: [],
				ops: []
			};
			return i = {
				next: u(0),
				throw: u(1),
				return: u(2)
			}, "function" == typeof Symbol && (i[Symbol.iterator] = function() {
				return this
			}), i;

			function u(i) {
				return function(u) {
					return function(i) {
						if (n) throw new TypeError("Generator is already executing.");
						for (; a;) try {
							if (n = 1, r && (o = 2 & i[0] ? r.return : i[0] ? r.throw || ((o = r.return) && o.call(r), 0) : r.next) && !(o = o.call(r, i[1])).done) return o;
							switch (r = 0, o && (i = [2 & i[0], o.value]), i[0]) {
								case 0:
								case 1:
									o = i;
									break;
								case 4:
									return a.label++, {
										value: i[1],
										done: !1
									};
								case 5:
									a.label++, r = i[1], i = [0];
									continue;
								case 7:
									i = a.ops.pop(), a.trys.pop();
									continue;
								default:
									if (!(o = a.trys, (o = o.length > 0 && o[o.length - 1]) || 6 !== i[0] && 2 !== i[0])) {
										a = 0;
										continue
									}
									if (3 === i[0] && (!o || i[1] > o[0] && i[1] < o[3])) {
										a.label = i[1];
										break
									}
									if (6 === i[0] && a.label < o[1]) {
										a.label = o[1], o = i;
										break
									}
									if (o && a.label < o[2]) {
										a.label = o[2], a.ops.push(i);
										break
									}
									o[2] && a.ops.pop(), a.trys.pop();
									continue
							}
							i = t.call(e, a)
						} catch (e) {
							i = [6, e], r = 0
						} finally {
							n = o = 0
						}
						if (5 & i[0]) throw i[1];
						return {
							value: i[0] ? i[1] : void 0,
							done: !0
						}
					}([i, u])
				}
			}
		},
		Ui = function(e) {
			var t = e.closeModal,
				n = _i().state,
				r = n.resources,
				o = n.requestService,
				i = n.promptAssignment,
				a = (0, P.useState)(null),
				u = a[0],
				s = a[1],
				c = (0, P.useState)(!1),
				l = c[0],
				p = c[1],
				d = function() {
					return Pi(void 0, void 0, void 0, (function() {
						var e;
						return Di(this, (function(t) {
							switch (t.label) {
								case 0:
									return [4, o.promptAssignments.updateForCurrentUser(st.DISMISS_PROMPT, i.promptType)];
								case 1:
									return (e = t.sent()).isError && console.warn(oi, "Dismissing Authenticator Upsell prompt failed with error", e.error && $e[e.error]), [2]
							}
						}))
					}))
				},
				f = {
					content: l ? D().createElement("span", {
						className: "spinner spinner-xs spinner-no-margin"
					}) : r.Action.AuthenticatorUpsellNextButtonMessage,
					label: r.Action.AuthenticatorUpsellNextButtonMessage,
					enabled: !l,
					action: function() {
						return Pi(void 0, void 0, void 0, (function() {
							return Di(this, (function(e) {
								switch (e.label) {
									case 0:
										return s(null), p(!0), [4, d()];
									case 1:
										return e.sent(), window.open(ui + ii, "_self"), [2]
								}
							}))
						}))
					}
				};
			return D().createElement(D().Fragment, null, D().createElement(Ri, {
				headerText: r.Header.AuthenticatorUpsellDownloadAuthenticator,
				buttonType: mi.CLOSE,
				buttonAction: function() {
					return Pi(void 0, void 0, void 0, (function() {
						return Di(this, (function(e) {
							switch (e.label) {
								case 0:
									return t(), [4, d()];
								case 1:
									return e.sent(), [2]
							}
						}))
					}))
				},
				buttonEnabled: !l,
				headerInfo: null
			}), D().createElement(pi.Modal.Body, null, D().createElement("div", null, D().createElement("p", null, r.Label.AuthenticatorUpsellDownloadInstruction)), D().createElement("div", {
				className: "authenticator-upsell-download-grid"
			}, D().createElement("div", {
				className: "grid-container"
			}, D().createElement("div", {
				className: "grid-item"
			}, D().createElement("div", {
				className: "modal-checkmark-icon"
			})), D().createElement("div", {
				className: "grid-item"
			}, D().createElement("div", null, r.Label.AuthenticatorUpsellMicrosoftOption)), D().createElement("div", {
				className: "grid-item"
			}, D().createElement("div", {
				className: "modal-checkmark-icon"
			})), D().createElement("div", {
				className: "grid-item"
			}, D().createElement("div", null, r.Label.AuthenticatorUpsellGoogleOption)), D().createElement("div", {
				className: "grid-item"
			}, D().createElement("div", {
				className: "modal-checkmark-icon"
			})), D().createElement("div", {
				className: "grid-item"
			}, D().createElement("div", null, r.Label.AuthenticatorUpsellTwilioOption)))), D().createElement("p", {
				className: "text-error xsmall"
			}, u)), D().createElement(yi, {
				positiveButton: f,
				negativeButton: null
			}))
		},
		gi = function(e, t, n, r) {
			return new(n || (n = Promise))((function(o, i) {
				function a(e) {
					try {
						s(r.next(e))
					} catch (e) {
						i(e)
					}
				}

				function u(e) {
					try {
						s(r.throw(e))
					} catch (e) {
						i(e)
					}
				}

				function s(e) {
					var t;
					e.done ? o(e.value) : (t = e.value, t instanceof n ? t : new n((function(e) {
						e(t)
					}))).then(a, u)
				}
				s((r = r.apply(e, t || [])).next())
			}))
		},
		Li = function(e, t) {
			var n, r, o, i, a = {
				label: 0,
				sent: function() {
					if (1 & o[0]) throw o[1];
					return o[1]
				},
				trys: [],
				ops: []
			};
			return i = {
				next: u(0),
				throw: u(1),
				return: u(2)
			}, "function" == typeof Symbol && (i[Symbol.iterator] = function() {
				return this
			}), i;

			function u(i) {
				return function(u) {
					return function(i) {
						if (n) throw new TypeError("Generator is already executing.");
						for (; a;) try {
							if (n = 1, r && (o = 2 & i[0] ? r.return : i[0] ? r.throw || ((o = r.return) && o.call(r), 0) : r.next) && !(o = o.call(r, i[1])).done) return o;
							switch (r = 0, o && (i = [2 & i[0], o.value]), i[0]) {
								case 0:
								case 1:
									o = i;
									break;
								case 4:
									return a.label++, {
										value: i[1],
										done: !1
									};
								case 5:
									a.label++, r = i[1], i = [0];
									continue;
								case 7:
									i = a.ops.pop(), a.trys.pop();
									continue;
								default:
									if (!(o = a.trys, (o = o.length > 0 && o[o.length - 1]) || 6 !== i[0] && 2 !== i[0])) {
										a = 0;
										continue
									}
									if (3 === i[0] && (!o || i[1] > o[0] && i[1] < o[3])) {
										a.label = i[1];
										break
									}
									if (6 === i[0] && a.label < o[1]) {
										a.label = o[1], o = i;
										break
									}
									if (o && a.label < o[2]) {
										a.label = o[2], a.ops.push(i);
										break
									}
									o[2] && a.ops.pop(), a.trys.pop();
									continue
							}
							i = t.call(e, a)
						} catch (e) {
							i = [6, e], r = 0
						} finally {
							n = o = 0
						}
						if (5 & i[0]) throw i[1];
						return {
							value: i[0] ? i[1] : void 0,
							done: !0
						}
					}([i, u])
				}
			}
		},
		Mi = function(e) {
			var t = e.closeModal,
				n = _i(),
				r = n.state,
				o = r.resources,
				i = r.requestService,
				a = r.promptAssignment,
				u = n.dispatch,
				s = (0, P.useState)(null),
				c = s[0],
				l = s[1],
				p = (0, P.useState)(!1),
				d = p[0],
				f = p[1],
				E = {
					content: d ? D().createElement("span", {
						className: "spinner spinner-xs spinner-no-margin"
					}) : o.Action.AuthenticatorUpsellSetupAuthenticatorButtonMessage,
					label: o.Action.AuthenticatorUpsellSetupAuthenticatorButtonMessage,
					enabled: !d,
					action: function() {
						l(null), f(!0), u({
							type: fi.SET_MODAL_STATE,
							modalState: Ei.AUTHENTICATOR_UPSELL_DOWNLOAD_APPS
						})
					}
				};
			return D().createElement(D().Fragment, null, D().createElement(Ri, {
				headerText: o.Header.AuthenticatorUpsellWelcomeMessage,
				buttonType: mi.CLOSE,
				buttonAction: function() {
					return gi(void 0, void 0, void 0, (function() {
						return Li(this, (function(e) {
							switch (e.label) {
								case 0:
									return t(), [4, gi(void 0, void 0, void 0, (function() {
										var e;
										return Li(this, (function(t) {
											switch (t.label) {
												case 0:
													return [4, i.promptAssignments.updateForCurrentUser(st.DISMISS_PROMPT, a.promptType)];
												case 1:
													return (e = t.sent()).isError && console.warn(oi, "Dismissing Authenticator Upsell prompt failed with error", e.error && $e[e.error]), [2]
											}
										}))
									}))];
								case 1:
									return e.sent(), [2]
							}
						}))
					}))
				},
				buttonEnabled: !d,
				headerInfo: null
			}), D().createElement(pi.Modal.Body, null, D().createElement("div", {
				className: "authenticator-upsell-intro-grid"
			}, D().createElement("div", {
				className: "grid-container"
			}, D().createElement("div", {
				className: "grid-item"
			}, D().createElement("div", {
				className: "modal-two-factors-icon"
			})), D().createElement("div", {
				className: "grid-item"
			}, D().createElement("b", null, o.Label.AuthenticatorUpsellTwoFactorHeadline), D().createElement("div", null, o.Label.AuthenticatorUpsellTwoFactorMessage)), D().createElement("div", {
				className: "grid-item"
			}, D().createElement("div", {
				className: "modal-protect-icon"
			})), D().createElement("div", {
				className: "grid-item"
			}, D().createElement("b", null, o.Label.AuthenticatorUpsellProtectRobuxHeadline), D().createElement("div", null, o.Label.AuthenticatorUpsellProtectRobuxMessage)), D().createElement("div", {
				className: "grid-item"
			}, D().createElement("div", {
				className: "modal-keep-bad-icon"
			})), D().createElement("div", {
				className: "grid-item"
			}, D().createElement("b", null, o.Label.AuthenticatorUpsellBadActorHeadline), D().createElement("div", null, o.Label.AuthenticatorUpsellBadActorMessage)))), D().createElement("p", {
				className: "text-error xsmall"
			}, c)), D().createElement(yi, {
				positiveButton: E,
				negativeButton: null
			}))
		},
		ki = function(e) {
			var t = e.closeModal,
				n = _i().state.resources;
			return D().createElement(D().Fragment, null, D().createElement(Ri, {
				headerText: n.Header.Success,
				buttonType: mi.CLOSE,
				buttonAction: t,
				buttonEnabled: !0,
				headerInfo: null
			}), D().createElement(pi.Modal.Body, null, D().createElement("div", {
				className: "modal-lock-icon"
			}), D().createElement("p", {
				className: "modal-margin-bottom-large"
			}, n.Description.ChangeYourPasswordSuccess)))
		},
		Vi = function(e, t, n, r) {
			return new(n || (n = Promise))((function(o, i) {
				function a(e) {
					try {
						s(r.next(e))
					} catch (e) {
						i(e)
					}
				}

				function u(e) {
					try {
						s(r.throw(e))
					} catch (e) {
						i(e)
					}
				}

				function s(e) {
					var t;
					e.done ? o(e.value) : (t = e.value, t instanceof n ? t : new n((function(e) {
						e(t)
					}))).then(a, u)
				}
				s((r = r.apply(e, t || [])).next())
			}))
		},
		Fi = function(e, t) {
			var n, r, o, i, a = {
				label: 0,
				sent: function() {
					if (1 & o[0]) throw o[1];
					return o[1]
				},
				trys: [],
				ops: []
			};
			return i = {
				next: u(0),
				throw: u(1),
				return: u(2)
			}, "function" == typeof Symbol && (i[Symbol.iterator] = function() {
				return this
			}), i;

			function u(i) {
				return function(u) {
					return function(i) {
						if (n) throw new TypeError("Generator is already executing.");
						for (; a;) try {
							if (n = 1, r && (o = 2 & i[0] ? r.return : i[0] ? r.throw || ((o = r.return) && o.call(r), 0) : r.next) && !(o = o.call(r, i[1])).done) return o;
							switch (r = 0, o && (i = [2 & i[0], o.value]), i[0]) {
								case 0:
								case 1:
									o = i;
									break;
								case 4:
									return a.label++, {
										value: i[1],
										done: !1
									};
								case 5:
									a.label++, r = i[1], i = [0];
									continue;
								case 7:
									i = a.ops.pop(), a.trys.pop();
									continue;
								default:
									if (!(o = a.trys, (o = o.length > 0 && o[o.length - 1]) || 6 !== i[0] && 2 !== i[0])) {
										a = 0;
										continue
									}
									if (3 === i[0] && (!o || i[1] > o[0] && i[1] < o[3])) {
										a.label = i[1];
										break
									}
									if (6 === i[0] && a.label < o[1]) {
										a.label = o[1], o = i;
										break
									}
									if (o && a.label < o[2]) {
										a.label = o[2], a.ops.push(i);
										break
									}
									o[2] && a.ops.pop(), a.trys.pop();
									continue
							}
							i = t.call(e, a)
						} catch (e) {
							i = [6, e], r = 0
						} finally {
							n = o = 0
						}
						if (5 & i[0]) throw i[1];
						return {
							value: i[0] ? i[1] : void 0,
							done: !0
						}
					}([i, u])
				}
			}
		},
		xi = function(e, t) {
			return function(n) {
				return Vi(void 0, void 0, Promise, (function() {
					return Fi(this, (function(r) {
						switch (r.label) {
							case 0:
								return "Enter" === n.key && t ? (n.preventDefault(), n.stopPropagation(), [4, e()]) : [3, 2];
							case 1:
								r.sent(), r.label = 2;
							case 2:
								return [2]
						}
					}))
				}))
			}
		},
		Wi = function() {
			return Promise.resolve(null)
		},
		Hi = function(e, t, n, r) {
			return function(o) {
				return Vi(void 0, void 0, void 0, (function() {
					var i;
					return Fi(this, (function(a) {
						switch (a.label) {
							case 0:
								return [4, e.password.validate(n, o)];
							case 1:
								return (i = a.sent()).isError ? [2, r] : [2, di(t, i.value)]
						}
					}))
				}))
			}
		},
		Yi = function(e, t) {
			return function(n) {
				return Vi(void 0, void 0, void 0, (function() {
					return Fi(this, (function(r) {
						return n === t ? [2, Promise.resolve(null)] : [2, Promise.resolve(e)]
					}))
				}))
			}
		},
		Bi = function() {
			for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
			return function(t) {
				return Vi(void 0, void 0, void 0, (function() {
					var n, r;
					return Fi(this, (function(o) {
						switch (o.label) {
							case 0:
								n = 0, o.label = 1;
							case 1:
								return n < e.length ? [4, e[n](t)] : [3, 4];
							case 2:
								if (null !== (r = o.sent())) return [2, r];
								o.label = 3;
							case 3:
								return n += 1, [3, 1];
							case 4:
								return [2, null]
						}
					}))
				}))
			}
		},
		Gi = function(e, t, n, r, o, i) {
			return function(a) {
				return Vi(void 0, void 0, Promise, (function() {
					var u, s;
					return Fi(this, (function(c) {
						switch (c.label) {
							case 0:
								return u = a.currentTarget.value, void 0 === t || t.test(u) || (u = e), void 0 !== i && i(u), r(u), s = o, [4, n(u)];
							case 1:
								return s.apply(void 0, [c.sent()]), [2]
						}
					}))
				}))
			}
		},
		Ki = function(e) {
			var t = e.id,
				n = e.inputType,
				r = e.placeholder,
				o = e.disabled,
				i = e.value,
				a = e.error,
				u = e.canSubmit,
				s = e.validate,
				c = e.setValue,
				l = e.setError,
				p = e.handleSubmit,
				d = e.onChange,
				f = e.label,
				E = e.bottomLabel,
				m = e.inputMode,
				h = e.autoComplete,
				S = e.maxLength,
				v = e.validCharactersRegEx,
				A = e.hideFeedback,
				_ = e.concealInput,
				N = e.autoFocus,
				T = "" !== i && null === a,
				O = "" !== i && null !== a,
				b = T || O;
			return D().createElement("div", {
				className: "input-control-wrapper"
			}, f && D().createElement("label", {
				className: "text-label xsmall",
				htmlFor: t
			}, f), D().createElement(pi.FormGroup, {
				controlId: t,
				className: (b ? "form-has-feedback" : "") + " " + (T ? "form-has-success" : "") + " " + (O ? "form-has-error" : "")
			}, D().createElement(pi.FormControl, {
				as: "input",
				className: "input-field" + (_ && i.length > 0 ? " input-field-concealed" : ""),
				type: n,
				inputMode: m,
				autoComplete: h,
				maxLength: S,
				disabled: o,
				value: i,
				placeholder: r,
				onChange: Gi(i, v, s, c, l, d),
				onKeyDown: xi(p, u),
				autoFocus: N
			}), !o && !A && T && D().createElement("span", {
				className: "icon-checkmark-on"
			}), !o && !A && O && D().createElement("span", {
				className: "icon-close"
			}), D().createElement("div", {
				className: "form-control-label bottom-label xsmall"
			}, !o && O ? a : E || " ")))
		},
		Qi = function(e) {
			return function() {
				return e({
					type: fi.SET_MODAL_STATE,
					modalState: Ei.CHANGE_PASSWORD_INTRO
				})
			}
		},
		qi = function(e, t, n, r) {
			return new(n || (n = Promise))((function(o, i) {
				function a(e) {
					try {
						s(r.next(e))
					} catch (e) {
						i(e)
					}
				}

				function u(e) {
					try {
						s(r.throw(e))
					} catch (e) {
						i(e)
					}
				}

				function s(e) {
					var t;
					e.done ? o(e.value) : (t = e.value, t instanceof n ? t : new n((function(e) {
						e(t)
					}))).then(a, u)
				}
				s((r = r.apply(e, t || [])).next())
			}))
		},
		zi = function(e, t) {
			var n, r, o, i, a = {
				label: 0,
				sent: function() {
					if (1 & o[0]) throw o[1];
					return o[1]
				},
				trys: [],
				ops: []
			};
			return i = {
				next: u(0),
				throw: u(1),
				return: u(2)
			}, "function" == typeof Symbol && (i[Symbol.iterator] = function() {
				return this
			}), i;

			function u(i) {
				return function(u) {
					return function(i) {
						if (n) throw new TypeError("Generator is already executing.");
						for (; a;) try {
							if (n = 1, r && (o = 2 & i[0] ? r.return : i[0] ? r.throw || ((o = r.return) && o.call(r), 0) : r.next) && !(o = o.call(r, i[1])).done) return o;
							switch (r = 0, o && (i = [2 & i[0], o.value]), i[0]) {
								case 0:
								case 1:
									o = i;
									break;
								case 4:
									return a.label++, {
										value: i[1],
										done: !1
									};
								case 5:
									a.label++, r = i[1], i = [0];
									continue;
								case 7:
									i = a.ops.pop(), a.trys.pop();
									continue;
								default:
									if (!(o = a.trys, (o = o.length > 0 && o[o.length - 1]) || 6 !== i[0] && 2 !== i[0])) {
										a = 0;
										continue
									}
									if (3 === i[0] && (!o || i[1] > o[0] && i[1] < o[3])) {
										a.label = i[1];
										break
									}
									if (6 === i[0] && a.label < o[1]) {
										a.label = o[1], o = i;
										break
									}
									if (o && a.label < o[2]) {
										a.label = o[2], a.ops.push(i);
										break
									}
									o[2] && a.ops.pop(), a.trys.pop();
									continue
							}
							i = t.call(e, a)
						} catch (e) {
							i = [6, e], r = 0
						} finally {
							n = o = 0
						}
						if (5 & i[0]) throw i[1];
						return {
							value: i[0] ? i[1] : void 0,
							done: !0
						}
					}([i, u])
				}
			}
		},
		Xi = function() {
			var e = _i(),
				t = e.state,
				n = t.username,
				r = t.resources,
				o = t.requestService,
				i = e.dispatch,
				a = (0, P.useState)(""),
				u = a[0],
				s = a[1],
				c = (0, P.useState)(null),
				l = c[0],
				p = c[1],
				d = (0, P.useState)(""),
				f = d[0],
				E = d[1],
				m = (0, P.useState)(null),
				h = m[0],
				S = m[1],
				v = (0, P.useState)(""),
				A = v[0],
				_ = v[1],
				N = (0, P.useState)(null),
				T = N[0],
				O = N[1],
				b = (0, P.useState)(null),
				y = b[0],
				R = b[1],
				C = (0, P.useState)(!1),
				I = C[0],
				w = C[1],
				U = (0, P.useState)(!1),
				g = U[0],
				L = U[1],
				M = function() {
					return R(null)
				},
				k = function() {
					for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
					return function(t) {
						e.forEach((function(e) {
							return e(t)
						}))
					}
				},
				V = function() {
					return qi(void 0, void 0, void 0, (function() {
						var e;
						return zi(this, (function(t) {
							switch (t.label) {
								case 0:
									return R(null), L(!0), [4, o.password.changeForCurrentUser(u, f)];
								case 1:
									return (e = t.sent()).isError ? (L(!1), e.error === Ae.INVALID_CURRENT_PASSWORD ? w(!0) : w(!1), R(function(e, t) {
										switch (t) {
											case Ae.FLOODED:
												return e.Message.Error.Passwords.Flooded;
											case Ae.INVALID_PASSWORD:
												return e.Message.Error.Passwords.InvalidPassword;
											case Ae.INVALID_CURRENT_PASSWORD:
												return e.Message.Error.Passwords.InvalidCurrentPassword;
											default:
												return e.Message.Error.Passwords.Default
										}
									}(r, e.error)), [2]) : (i({
										type: fi.SET_MODAL_STATE,
										modalState: Ei.CHANGE_PASSWORD_CONFIRMATION
									}), [2])
							}
						}))
					}))
				},
				F = "" !== u && null === l && "" !== f && null === h && "" !== A && null === T,
				x = {
					content: g ? D().createElement("span", {
						className: "spinner spinner-xs spinner-no-margin"
					}) : r.Action.SubmitChangePassword,
					label: r.Action.SubmitChangePassword,
					enabled: !g && F,
					action: V
				},
				W = D().createElement("a", {
					href: "https://en.help.roblox.com/hc/articles/203313070-I-Forgot-My-Password",
					className: "bottom-label-link",
					target: "_blank",
					rel: "noreferrer"
				}, r.Label.IForgotMyPassword),
				H = D().createElement(P.Fragment, null, D().createElement("div", {
					className: "shield-check-icon xsmall"
				}), D().createElement("div", {
					className: "bottom-label-text-with-start-margin text-label xsmall"
				}, r.Label.UseAUniquePassword));
			return D().createElement(D().Fragment, null, D().createElement(Ri, {
				headerText: r.Header.CreateAStrongPassword,
				buttonType: mi.BACK,
				buttonAction: Qi(i),
				buttonEnabled: !g,
				headerInfo: null
			}), D().createElement(pi.Modal.Body, null, D().createElement(Ki, {
				id: "inputCurrentPassword",
				label: r.Label.CurrentPassword,
				bottomLabel: W,
				inputType: "password",
				autoComplete: "current-password",
				placeholder: "",
				disabled: g,
				value: u,
				setValue: s,
				error: l || I && y || null,
				setError: p,
				validate: Wi,
				canSubmit: F,
				handleSubmit: V,
				onChange: M
			}), D().createElement(Ki, {
				id: "inputNewPassword",
				label: r.Label.NewPassword,
				bottomLabel: H,
				inputType: "password",
				autoComplete: "new-password",
				placeholder: r.Label.AtLeastCharacters(8),
				disabled: g,
				value: f,
				setValue: E,
				error: h,
				setError: k((function() {
					return O(null)
				}), S),
				validate: Bi(Hi(o, r, n, r.Message.Error.PasswordValidation.Default), "" !== A ? Yi(r.Message.Error.Input.PasswordsDoNotMatch, A) : Wi),
				canSubmit: F,
				handleSubmit: V,
				onChange: M
			}), D().createElement(Ki, {
				id: "inputNewPasswordAgain",
				label: r.Label.ConfirmNewPassword,
				inputType: "password",
				autoComplete: "new-password",
				placeholder: "",
				disabled: g,
				value: A,
				setValue: _,
				error: T || !I && y || null,
				setError: k((function() {
					return S(null)
				}), O),
				validate: Bi(Yi(r.Message.Error.Input.PasswordsDoNotMatch, f), Hi(o, r, n, r.Message.Error.PasswordValidation.Default)),
				canSubmit: F,
				handleSubmit: V,
				onChange: M
			})), D().createElement(yi, {
				positiveButton: x,
				negativeButton: null
			}))
		},
		ji = function(e) {
			var t = e.closeModal,
				n = _i(),
				r = n.state,
				o = r.promptAssignment,
				i = r.resources,
				a = (r.requestService, n.dispatch),
				u = (0, P.useState)(null),
				s = u[0],
				c = u[1],
				l = (0, P.useState)(!1),
				p = l[0],
				d = l[1],
				f = "An unexpected issue occurred while displaying this text.";
			o.isGeneric || (f = o.promptType !== nt.CHANGE_PASSWORD__BREACHED_CREDENTIAL ? i.Description.UnusualActivity + " " + i.Description.ChangeYourPassword : i.Description.ChangeYourPasswordImmediately + " " + i.Description.NoChangeForceReset(Ni(o.metadata.forceResetTimestamp)));
			var E = {
				content: p ? D().createElement("span", {
					className: "spinner spinner-xs spinner-no-margin"
				}) : i.Action.ContinueChangePassword,
				label: i.Action.ContinueChangePassword,
				enabled: !p,
				action: function() {
					c(null), d(!0), a({
						type: fi.SET_MODAL_STATE,
						modalState: Ei.CHANGE_PASSWORD_FORM
					})
				}
			};
			return D().createElement(D().Fragment, null, D().createElement(Ri, {
				headerText: i.Header.ChangeYourPassword,
				buttonType: mi.CLOSE,
				buttonAction: t,
				buttonEnabled: !p,
				headerInfo: null
			}), D().createElement(pi.Modal.Body, null, D().createElement("div", {
				className: "modal-lock-icon"
			}), D().createElement("p", {
				className: "modal-margin-bottom",
				dangerouslySetInnerHTML: {
					__html: f
				}
			}), D().createElement("p", {
				className: "text-error xsmall"
			}, s)), D().createElement(yi, {
				positiveButton: E,
				negativeButton: null
			}))
		},
		Ji = function(e, t, n, r) {
			return new(n || (n = Promise))((function(o, i) {
				function a(e) {
					try {
						s(r.next(e))
					} catch (e) {
						i(e)
					}
				}

				function u(e) {
					try {
						s(r.throw(e))
					} catch (e) {
						i(e)
					}
				}

				function s(e) {
					var t;
					e.done ? o(e.value) : (t = e.value, t instanceof n ? t : new n((function(e) {
						e(t)
					}))).then(a, u)
				}
				s((r = r.apply(e, t || [])).next())
			}))
		},
		Zi = function(e, t) {
			var n, r, o, i, a = {
				label: 0,
				sent: function() {
					if (1 & o[0]) throw o[1];
					return o[1]
				},
				trys: [],
				ops: []
			};
			return i = {
				next: u(0),
				throw: u(1),
				return: u(2)
			}, "function" == typeof Symbol && (i[Symbol.iterator] = function() {
				return this
			}), i;

			function u(i) {
				return function(u) {
					return function(i) {
						if (n) throw new TypeError("Generator is already executing.");
						for (; a;) try {
							if (n = 1, r && (o = 2 & i[0] ? r.return : i[0] ? r.throw || ((o = r.return) && o.call(r), 0) : r.next) && !(o = o.call(r, i[1])).done) return o;
							switch (r = 0, o && (i = [2 & i[0], o.value]), i[0]) {
								case 0:
								case 1:
									o = i;
									break;
								case 4:
									return a.label++, {
										value: i[1],
										done: !1
									};
								case 5:
									a.label++, r = i[1], i = [0];
									continue;
								case 7:
									i = a.ops.pop(), a.trys.pop();
									continue;
								default:
									if (!(o = a.trys, (o = o.length > 0 && o[o.length - 1]) || 6 !== i[0] && 2 !== i[0])) {
										a = 0;
										continue
									}
									if (3 === i[0] && (!o || i[1] > o[0] && i[1] < o[3])) {
										a.label = i[1];
										break
									}
									if (6 === i[0] && a.label < o[1]) {
										a.label = o[1], o = i;
										break
									}
									if (o && a.label < o[2]) {
										a.label = o[2], a.ops.push(i);
										break
									}
									o[2] && a.ops.pop(), a.trys.pop();
									continue
							}
							i = t.call(e, a)
						} catch (e) {
							i = [6, e], r = 0
						} finally {
							n = o = 0
						}
						if (5 & i[0]) throw i[1];
						return {
							value: i[0] ? i[1] : void 0,
							done: !0
						}
					}([i, u])
				}
			}
		},
		$i = function(e) {
			var t = e.closeModal,
				n = _i(),
				r = n.state,
				o = r.promptAssignment,
				i = r.resources,
				a = r.requestService,
				u = n.dispatch,
				s = (0, P.useState)(!1),
				c = s[0],
				l = s[1],
				p = i.Description.AreYouSureDismissForeverChangePassword,
				d = i.Action.ConfirmDismissForeverChangePassword,
				f = i.Action.AbortDismissForeverChangePassword,
				E = {
					content: f,
					label: f,
					enabled: !c,
					action: function() {
						u({
							type: fi.SET_MODAL_STATE,
							modalState: Ei.CHANGE_PASSWORD_INTRO
						})
					}
				},
				m = {
					content: c ? D().createElement("span", {
						className: "spinner spinner-xs spinner-no-margin"
					}) : d,
					label: d,
					enabled: !c,
					action: function() {
						return Ji(void 0, void 0, void 0, (function() {
							var e;
							return Zi(this, (function(n) {
								switch (n.label) {
									case 0:
										return l(!0), [4, a.promptAssignments.updateForCurrentUser(st.DISABLE_PROMPT, o.promptType)];
									case 1:
										return (e = n.sent()).isError ? (l(!1), console.warn(oi, "Disabling prompt failed with error", e.error && $e[e.error]), [2]) : (u({
											type: fi.DISMISS_FOREVER
										}), t(), [2])
								}
							}))
						}))
					}
				};
			return D().createElement(D().Fragment, null, D().createElement(Ri, {
				headerText: i.Header.AreYouSure,
				buttonType: mi.HIDDEN,
				buttonAction: t,
				buttonEnabled: !0,
				headerInfo: null
			}), D().createElement(pi.Modal.Body, null, D().createElement("div", {
				className: "modal-lock-icon"
			}), D().createElement("p", null, p)), D().createElement(yi, {
				positiveButton: E,
				negativeButton: m
			}))
		},
		ea = function(e, t, n, r) {
			return new(n || (n = Promise))((function(o, i) {
				function a(e) {
					try {
						s(r.next(e))
					} catch (e) {
						i(e)
					}
				}

				function u(e) {
					try {
						s(r.throw(e))
					} catch (e) {
						i(e)
					}
				}

				function s(e) {
					var t;
					e.done ? o(e.value) : (t = e.value, t instanceof n ? t : new n((function(e) {
						e(t)
					}))).then(a, u)
				}
				s((r = r.apply(e, t || [])).next())
			}))
		},
		ta = function(e, t) {
			var n, r, o, i, a = {
				label: 0,
				sent: function() {
					if (1 & o[0]) throw o[1];
					return o[1]
				},
				trys: [],
				ops: []
			};
			return i = {
				next: u(0),
				throw: u(1),
				return: u(2)
			}, "function" == typeof Symbol && (i[Symbol.iterator] = function() {
				return this
			}), i;

			function u(i) {
				return function(u) {
					return function(i) {
						if (n) throw new TypeError("Generator is already executing.");
						for (; a;) try {
							if (n = 1, r && (o = 2 & i[0] ? r.return : i[0] ? r.throw || ((o = r.return) && o.call(r), 0) : r.next) && !(o = o.call(r, i[1])).done) return o;
							switch (r = 0, o && (i = [2 & i[0], o.value]), i[0]) {
								case 0:
								case 1:
									o = i;
									break;
								case 4:
									return a.label++, {
										value: i[1],
										done: !1
									};
								case 5:
									a.label++, r = i[1], i = [0];
									continue;
								case 7:
									i = a.ops.pop(), a.trys.pop();
									continue;
								default:
									if (!(o = a.trys, (o = o.length > 0 && o[o.length - 1]) || 6 !== i[0] && 2 !== i[0])) {
										a = 0;
										continue
									}
									if (3 === i[0] && (!o || i[1] > o[0] && i[1] < o[3])) {
										a.label = i[1];
										break
									}
									if (6 === i[0] && a.label < o[1]) {
										a.label = o[1], o = i;
										break
									}
									if (o && a.label < o[2]) {
										a.label = o[2], a.ops.push(i);
										break
									}
									o[2] && a.ops.pop(), a.trys.pop();
									continue
							}
							i = t.call(e, a)
						} catch (e) {
							i = [6, e], r = 0
						} finally {
							n = o = 0
						}
						if (5 & i[0]) throw i[1];
						return {
							value: i[0] ? i[1] : void 0,
							done: !0
						}
					}([i, u])
				}
			}
		},
		na = function(e) {
			var t = e.closeModal,
				n = _i().state,
				r = n.resources,
				o = n.requestService,
				i = n.promptAssignment,
				a = (0, P.useState)(null),
				u = a[0],
				s = a[1],
				c = (0, P.useState)(!1),
				l = c[0],
				p = c[1],
				d = function() {
					return ea(void 0, void 0, void 0, (function() {
						var e;
						return ta(this, (function(t) {
							switch (t.label) {
								case 0:
									return [4, o.promptAssignments.updateForCurrentUser(st.DISMISS_PROMPT, i.promptType)];
								case 1:
									return (e = t.sent()).isError && console.warn(oi, "Dismissing Account Restores Policy Upsell prompt failed with error", e.error && $e[e.error]), [2]
							}
						}))
					}))
				},
				f = {
					content: l ? D().createElement("span", {
						className: "spinner spinner-xs spinner-no-margin"
					}) : r.Action.SetUpEmail2SV,
					label: r.Action.SetUpEmail2SV,
					enabled: !l,
					action: function() {
						return ea(void 0, void 0, void 0, (function() {
							return ta(this, (function(e) {
								switch (e.label) {
									case 0:
										return s(null), p(!0), [4, d()];
									case 1:
										return e.sent(), window.open(ui + ai, "_self"), [2]
								}
							}))
						}))
					}
				};
			return D().createElement(D().Fragment, null, D().createElement(Ri, {
				headerText: r.Header.Email2SVUpsell,
				buttonType: mi.CLOSE,
				buttonAction: function() {
					return ea(void 0, void 0, void 0, (function() {
						return ta(this, (function(e) {
							switch (e.label) {
								case 0:
									return t(), [4, d()];
								case 1:
									return e.sent(), [2]
							}
						}))
					}))
				},
				buttonEnabled: !0,
				headerInfo: null
			}), D().createElement(pi.Modal.Body, null, D().createElement("div", {
				className: "modal-lock-icon"
			}), D().createElement("p", {
				className: "modal-margin-bottom-sm",
				dangerouslySetInnerHTML: {
					__html: r.Description.Email2SVUpsellMessageBody(ui)
				}
			}), D().createElement("p", {
				className: "text-error xsmall"
			}, u)), D().createElement(yi, {
				positiveButton: f,
				negativeButton: null
			}))
		},
		ra = function() {
			var e = _i(),
				t = e.state,
				n = t.isFlowComplete,
				r = t.modalState,
				o = t.promptAssignment,
				i = e.dispatch,
				a = (0, P.useState)(!0),
				u = a[0],
				s = a[1],
				c = function() {
					return s(!1)
				},
				l = function(e) {
					switch (e) {
						case Ei.CHANGE_PASSWORD_INTRO:
							return {
								innerFragment: ji, canClickBackdropToClose: !0
							};
						case Ei.CHANGE_PASSWORD_FORM:
							return {
								innerFragment: Xi, canClickBackdropToClose: !1
							};
						case Ei.CHANGE_PASSWORD_CONFIRMATION:
							return {
								innerFragment: ki, canClickBackdropToClose: !0
							};
						case Ei.CHANGE_PASSWORD_DISMISS_CONFIRMATION:
							return {
								innerFragment: $i, canClickBackdropToClose: !1
							};
						case Ei.AUTHENTICATOR_UPSELL_OPENING:
							return {
								innerFragment: Mi, canClickBackdropToClose: !1
							};
						case Ei.AUTHENTICATOR_UPSELL_DOWNLOAD_APPS:
							return {
								innerFragment: Ui, canClickBackdropToClose: !1
							};
						case Ei.ACCOUNT_RESTORE_POLICY_UPSELL:
							return {
								innerFragment: wi, canClickBackdropToClose: !1
							};
						case Ei.EMAIL_2SV_UPSELL:
							return {
								innerFragment: na, canClickBackdropToClose: !1
							};
						default:
							return null
					}
				}(r),
				p = o.promptType === nt.AUTHENTICATOR_UPSELL || o.promptType === nt.ACCOUNT_RESTORES_POLICY_UPSELL || o.promptType === nt.BROADER_AUTHENTICATOR_UPSELL && !0 !== o.isGeneric && !o.metadata.showBanner || o.promptType === nt.EMAIL_2SV_UPSELL && !0 !== o.isGeneric && !o.metadata.showBanner;
			return D().createElement(D().Fragment, null, !n && !p && D().createElement(bi, null), l && D().createElement(pi.Modal, {
				className: "modal-modern modal-modern-security-prompt",
				show: u,
				onHide: c,
				onExited: function() {
					i({
						type: fi.SET_MODAL_STATE,
						modalState: Ei.NONE
					}), s(!0)
				},
				backdrop: l.canClickBackdropToClose ? void 0 : "static"
			}, D().createElement(l.innerFragment, {
				closeModal: c
			})))
		},
		oa = (0, ri.withTranslations)((function(e) {
			var t = e.promptAssignment,
				n = e.username,
				r = e.isUserUnder13,
				o = e.eventService,
				i = e.requestService,
				a = e.translate;
			return D().createElement(Ai, {
				promptAssignment: t,
				username: n,
				isUserUnder13: r,
				eventService: o,
				requestService: i,
				translate: a
			}, D().createElement(ra, null))
		}), {
			common: [],
			feature: "Feature.AccountSecurityPrompt"
		}),
		ia = function() {
			function e(e) {
				this.promptType = e
			}
			return e.prototype.sendModalStateViewedEvent = function(e) {
				w().EventStream.SendEventWithTarget(ci, li.modalStateViewed, {
					promptType: this.promptType,
					state: e
				}, w().EventStream.TargetTypes.WWW)
			}, e
		}(),
		aa = function(e, t, n, r) {
			return new(n || (n = Promise))((function(o, i) {
				function a(e) {
					try {
						s(r.next(e))
					} catch (e) {
						i(e)
					}
				}

				function u(e) {
					try {
						s(r.throw(e))
					} catch (e) {
						i(e)
					}
				}

				function s(e) {
					var t;
					e.done ? o(e.value) : (t = e.value, t instanceof n ? t : new n((function(e) {
						e(t)
					}))).then(a, u)
				}
				s((r = r.apply(e, t || [])).next())
			}))
		},
		ua = function(e, t) {
			var n, r, o, i, a = {
				label: 0,
				sent: function() {
					if (1 & o[0]) throw o[1];
					return o[1]
				},
				trys: [],
				ops: []
			};
			return i = {
				next: u(0),
				throw: u(1),
				return: u(2)
			}, "function" == typeof Symbol && (i[Symbol.iterator] = function() {
				return this
			}), i;

			function u(i) {
				return function(u) {
					return function(i) {
						if (n) throw new TypeError("Generator is already executing.");
						for (; a;) try {
							if (n = 1, r && (o = 2 & i[0] ? r.return : i[0] ? r.throw || ((o = r.return) && o.call(r), 0) : r.next) && !(o = o.call(r, i[1])).done) return o;
							switch (r = 0, o && (i = [2 & i[0], o.value]), i[0]) {
								case 0:
								case 1:
									o = i;
									break;
								case 4:
									return a.label++, {
										value: i[1],
										done: !1
									};
								case 5:
									a.label++, r = i[1], i = [0];
									continue;
								case 7:
									i = a.ops.pop(), a.trys.pop();
									continue;
								default:
									if (!(o = a.trys, (o = o.length > 0 && o[o.length - 1]) || 6 !== i[0] && 2 !== i[0])) {
										a = 0;
										continue
									}
									if (3 === i[0] && (!o || i[1] > o[0] && i[1] < o[3])) {
										a.label = i[1];
										break
									}
									if (6 === i[0] && a.label < o[1]) {
										a.label = o[1], o = i;
										break
									}
									if (o && a.label < o[2]) {
										a.label = o[2], a.ops.push(i);
										break
									}
									o[2] && a.ops.pop(), a.trys.pop();
									continue
							}
							i = t.call(e, a)
						} catch (e) {
							i = [6, e], r = 0
						} finally {
							n = o = 0
						}
						if (5 & i[0]) throw i[1];
						return {
							value: i[0] ? i[1] : void 0,
							done: !0
						}
					}([i, u])
				}
			}
		},
		sa = new ni,
		ca = function(e, t, n) {
			var r = document.getElementById("account-security-prompt-container");
			if (null !== r) {
				(0, U.unmountComponentAtNode)(r);
				var o = new ia(e.promptType);
				(0, U.render)(D().createElement(oa, {
					promptAssignment: e,
					username: t,
					isUserUnder13: n,
					eventService: o,
					requestService: sa
				}), r)
			}
		};
	I.CurrentUser && I.CurrentUser.isAuthenticated && "unknown" === (0, I.DeviceMeta)().appType && (Object.assign(w(), {
		AccountSecurityPrompt: {
			render: ca,
			PromptType: nt
		}
	}), aa(void 0, void 0, Promise, (function() {
		var e, t, n, r, o;
		return ua(this, (function(i) {
			switch (i.label) {
				case 0:
					return [4, sa.promptAssignments.getAllForCurrentUser()];
				case 1:
					if ((e = i.sent()).isError) return console.warn(oi, "Retrieving prompt assignments failed with error", e.error && $e[e.error]), [2];
					if (0 === (t = e.value).length) return console.log(oi, "No assignments were retrieved"), [2];
					if (window.location.href.includes(ii) || window.location.href.includes(".com/my/account")) return [2];
					for (n = null, r = 0; r < t.length; r++) {
						if ((o = t[r]).promptType !== nt.BROADER_AUTHENTICATOR_UPSELL && o.promptType !== nt.EMAIL_2SV_UPSELL || !1 !== o.isGeneric || o.metadata.pageRestriction !== tt.HOME_PAGE_ONLY || window.location.href.includes(".com/home")) {
							n = o;
							break
						}
						n = null
					}
					return null === n || ca(n, I.CurrentUser.name, I.CurrentUser.isUnder13), [2]
			}
		}))
	})))
}();
//# sourceMappingURL=https://sourcemaps.rbxcdn.com/fbb03681b5f084a26f0f9833250aff9b-accountSecurityPrompt.bundle.min.js.map

/* Bundle detector */
window.Roblox && window.Roblox.BundleDetector && window.Roblox.BundleDetector.bundleDetected("AccountSecurityPrompt");