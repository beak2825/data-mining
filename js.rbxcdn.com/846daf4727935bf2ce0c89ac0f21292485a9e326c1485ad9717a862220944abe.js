! function() {
	"use strict";
	var n = {
			n: function(e) {
				var r = e && e.__esModule ? function() {
					return e.default
				} : function() {
					return e
				};
				return n.d(r, {
					a: r
				}), r
			},
			d: function(e, r) {
				for (var t in r) n.o(r, t) && !n.o(e, t) && Object.defineProperty(e, t, {
					enumerable: !0,
					get: r[t]
				})
			},
			o: function(e, r) {
				return Object.prototype.hasOwnProperty.call(e, r)
			}
		},
		t = CoreUtilities,
		c = React,
		i = n.n(c),
		r = ReactDOM,
		e = PropTypes,
		a = n.n(e),
		o = ReactUtilities,
		u = {
			common: ["CommonUI.UserAgreements", "CommonUI.Controls"],
			feature: null
		},
		s = Roblox,
		l = s.EnvironmentUrls.userAgreementsServiceApi,
		f = s.EnvironmentUrls.universalAppConfigurationApi,
		m = function() {
			return {
				withCredentials: !0,
				url: "".concat(l, "/v1/agreements-resolution/").concat("web")
			}
		},
		p = function() {
			return {
				withCredentials: !0,
				url: "".concat(l, "/v1/acceptances")
			}
		},
		d = function() {
			return {
				withCredentials: !0,
				url: "".concat(f, "/v1/behaviors/").concat("user-agreements-policy", "/content")
			}
		},
		v = function() {
			var e = m();
			return t.httpService.get(e)
		},
		g = function(e) {
			var r = p(),
				e = {
					acceptances: e.map(function(e) {
						return {
							agreementId: e
						}
					})
				};
			return t.httpService.post(r, e)
		},
		y = ReactStyleGuide,
		h = "Roblox.UserAgreements",
		b = 864e5,
		A = {
			TermsOfService: "Modal.Agreement.TermsOfService",
			PrivacyPolicy: "Modal.Agreement.PrivacyPolicy",
			RiderTerms: "Modal.Agreement.RiderTerms",
			ChildrenPrivacyPolicy: "Modal.Agreement.ChildrenPrivacyPolicy"
		},
		S = "Modal.Body",
		w = "Modal.Title",
		x = "Modal.Agree",
		T = CoreRobloxUtilities,
		E = HeaderScripts,
		R = function() {
			var e = d();
			return t.httpService.get(e)
		};

	function U(e, r, t, n, a, o, c) {
		try {
			var i = e[o](c),
				u = i.value
		} catch (e) {
			return void t(e)
		}
		i.done ? r(u) : Promise.resolve(u).then(n, a)
	}
	var k = {
		shouldFetchAgreements: function() {
			var i, e = (i = regeneratorRuntime.mark(function e(r) {
				var t, n, a, o;
				return regeneratorRuntime.wrap(function(e) {
					for (;;) switch (e.prev = e.next) {
						case 0:
							if (!!s.DeviceMeta && (0, s.DeviceMeta)().isInApp) return e.abrupt("return", !1);
							e.next = 3;
							break;
						case 3:
							if (E.authenticatedUser.isAuthenticated) {
								e.next = 6;
								break
							}
							return e.abrupt("return", !1);
						case 6:
							e.prev = 6, t = T.localStorageService.getLocalStorage(h), e.next = 15;
							break;
						case 10:
							if (e.prev = 10, e.t0 = e.catch(6), e.t0 instanceof SyntaxError) return e.abrupt("return", !0);
							e.next = 14;
							break;
						case 14:
							throw e.t0;
						case 15:
							if (null === t) return e.abrupt("return", !0);
							e.next = 17;
							break;
						case 17:
							if (n = t.lastFetchTimestamp, n = Date.parse(n), Number.isNaN(n)) return e.abrupt("return", !0);
							e.next = 21;
							break;
						case 21:
							if (t.doesUserNeedToAcceptAgreements) return e.abrupt("return", !0);
							e.next = 24;
							break;
						case 24:
							return a = r.getTime(), e.prev = 25, e.next = 28, R();
						case 28:
							o = e.sent, o = o.data.cooldownPeriodInMs, e.next = 35;
							break;
						case 32:
							e.prev = 32, e.t1 = e.catch(25), o = b;
						case 35:
							return e.abrupt("return", n + o < a);
						case 36:
						case "end":
							return e.stop()
					}
				}, e, null, [
					[6, 10],
					[25, 32]
				])
			}), function() {
				var e = this,
					c = arguments;
				return new Promise(function(r, t) {
					var n = i.apply(e, c);

					function a(e) {
						U(n, r, t, a, o, "next", e)
					}

					function o(e) {
						U(n, r, t, a, o, "throw", e)
					}
					a(void 0)
				})
			});
			return function() {
				return e.apply(this, arguments)
			}
		}(),
		updateDoesUserNeedToAcceptAgreements: function(e, r) {
			r = 1 < arguments.length && void 0 !== r ? r : null;
			if (e && !(r instanceof Date)) throw new TypeError("if doesUserNeedToAcceptAgreements is true then must provide a valid Date");
			var t, n = {
				doesUserNeedToAcceptAgreements: e
			};
			if (r instanceof Date) n.lastFetchTimestamp = r.toISOString();
			else try {
				t = T.localStorageService.getLocalStorage(h), n.lastFetchTimestamp = t.lastFetchTimestamp
			} catch (e) {
				if (e instanceof SyntaxError) return void T.localStorageService.removeLocalStorage(h);
				throw e
			}
			try {
				T.localStorageService.setLocalStorage(h, n)
			} catch (e) {
				console.error("Error updating doesUserNeedToAcceptAgreements ".concat(e))
			}
		}
	};

	function P(e, r, t, n, a, o, c) {
		try {
			var i = e[o](c),
				u = i.value
		} catch (e) {
			return void t(e)
		}
		i.done ? r(u) : Promise.resolve(u).then(n, a)
	}

	function M(e, r) {
		(null == r || r > e.length) && (r = e.length);
		for (var t = 0, n = new Array(r); t < r; t++) n[t] = e[t];
		return n
	}
	var N, O = (0, y.createModal)(),
		C = (e = (N = 2, function(e) {
			if (Array.isArray(e)) return e
		}(O = O) || function(e, r) {
			if ("undefined" == typeof Symbol || !(Symbol.iterator in Object(e))) return;
			var t = [],
				n = !0,
				a = !1,
				o = void 0;
			try {
				for (var c, i = e[Symbol.iterator](); !(n = (c = i.next()).done) && (t.push(c.value), !r || t.length !== r); n = !0);
			} catch (e) {
				a = !0, o = e
			} finally {
				try {
					n || null == i.return || i.return()
				} finally {
					if (a) throw o
				}
			}
			return t
		}(O, N) || function(e, r) {
			if (!e) return;
			if ("string" == typeof e) return M(e, r);
			var t = Object.prototype.toString.call(e).slice(8, -1);
			"Object" === t && e.constructor && (t = e.constructor.name);
			if ("Map" === t || "Set" === t) return Array.from(e);
			if ("Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)) return M(e, r)
		}(O, N) || function() {
			throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
		}()))[0],
		I = e[1];
	(e = function(e) {
		var t = e.translate,
			n = e.agreements,
			r = function() {
				var r = A,
					e = n.map(function(e) {
						return i().createElement("li", {
							key: e.id,
							className: "agreement-item"
						}, i().createElement(y.Link, {
							url: e.displayUrl,
							target: "_blank",
							rel: "noreferrer",
							className: "text-link"
						}, t(r[e.agreementType])))
					});
				return i().createElement("ul", null, e)
			},
			a = function() {
				var e = S;
				return i().createElement("div", null, t(e))
			},
			o = w,
			e = i().createElement("div", {
				className: "agreement-modal-body"
			}, i().createElement(a, null), i().createElement(r, {
				agreements: n
			})),
			a = x;
		(0, c.useEffect)(function() {
			I.open()
		}, []);
		r = function() {
			var i, e = (i = regeneratorRuntime.mark(function e() {
				return regeneratorRuntime.wrap(function(e) {
					for (;;) switch (e.prev = e.next) {
						case 0:
							return e.prev = 0, e.next = 3, g(n.map(function(e) {
								return e.id
							}));
						case 3:
							k.updateDoesUserNeedToAcceptAgreements(!1), e.next = 9;
							break;
						case 6:
							e.prev = 6, e.t0 = e.catch(0), console.error("Error accepting user agreements ".concat(e.t0));
						case 9:
						case "end":
							return e.stop()
					}
				}, e, null, [
					[0, 6]
				])
			}), function() {
				var e = this,
					c = arguments;
				return new Promise(function(r, t) {
					var n = i.apply(e, c);

					function a(e) {
						P(n, r, t, a, o, "next", e)
					}

					function o(e) {
						P(n, r, t, a, o, "throw", e)
					}
					a(void 0)
				})
			});
			return function() {
				return e.apply(this, arguments)
			}
		}();
		return i().createElement(C, {
			title: t(o),
			body: e,
			neutralButtonText: t(a),
			onNeutral: r,
			id: "user-agreements-checker-modal",
			closeable: !1
		})
	}).propTypes = {
		translate: a().func.isRequired,
		agreements: a().arrayOf(a().shape({
			displayUrl: a().string.isRequired,
			id: a().string.isRequired,
			agreementType: a().string.isRequired,
			clientType: a().string.isRequired,
			regulationType: a().string.isRequired
		})).isRequired
	};
	var D = e;

	function j(e, r, t, n, a, o, c) {
		try {
			var i = e[o](c),
				u = i.value
		} catch (e) {
			return void t(e)
		}
		i.done ? r(u) : Promise.resolve(u).then(n, a)
	}

	function q(e, r) {
		return function(e) {
			if (Array.isArray(e)) return e
		}(e) || function(e, r) {
			if ("undefined" == typeof Symbol || !(Symbol.iterator in Object(e))) return;
			var t = [],
				n = !0,
				a = !1,
				o = void 0;
			try {
				for (var c, i = e[Symbol.iterator](); !(n = (c = i.next()).done) && (t.push(c.value), !r || t.length !== r); n = !0);
			} catch (e) {
				a = !0, o = e
			} finally {
				try {
					n || null == i.return || i.return()
				} finally {
					if (a) throw o
				}
			}
			return t
		}(e, r) || function(e, r) {
			if (!e) return;
			if ("string" == typeof e) return F(e, r);
			var t = Object.prototype.toString.call(e).slice(8, -1);
			"Object" === t && e.constructor && (t = e.constructor.name);
			if ("Map" === t || "Set" === t) return Array.from(e);
			if ("Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)) return F(e, r)
		}(e, r) || function() {
			throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
		}()
	}

	function F(e, r) {
		(null == r || r > e.length) && (r = e.length);
		for (var t = 0, n = new Array(r); t < r; t++) n[t] = e[t];
		return n
	}(e = function(e) {
		var r = e.translate,
			t = q((0, c.useState)([]), 2),
			e = t[0],
			a = t[1];
		return (0, c.useEffect)(function() {
			var n = new Date;
			(function() {
				var i, e = (i = regeneratorRuntime.mark(function e() {
					var r, t;
					return regeneratorRuntime.wrap(function(e) {
						for (;;) switch (e.prev = e.next) {
							case 0:
								return r = !1, e.prev = 1, e.next = 4, k.shouldFetchAgreements(n);
							case 4:
								r = e.sent, e.next = 10;
								break;
							case 7:
								e.prev = 7, e.t0 = e.catch(1), console.error("Error calling shouldFetchAgreements ".concat(e.t0));
							case 10:
								if (r) return e.prev = 11, e.next = 14, v();
								e.next = 22;
								break;
							case 14:
								t = e.sent, a(t.data), 0 < t.data.length ? k.updateDoesUserNeedToAcceptAgreements(!0, n) : k.updateDoesUserNeedToAcceptAgreements(!1, n), e.next = 22;
								break;
							case 19:
								e.prev = 19, e.t1 = e.catch(11), console.error("Error fetching or caching user agreements ".concat(e.t1));
							case 22:
							case "end":
								return e.stop()
						}
					}, e, null, [
						[1, 7],
						[11, 19]
					])
				}), function() {
					var e = this,
						c = arguments;
					return new Promise(function(r, t) {
						var n = i.apply(e, c);

						function a(e) {
							j(n, r, t, a, o, "next", e)
						}

						function o(e) {
							j(n, r, t, a, o, "throw", e)
						}
						a(void 0)
					})
				});
				return function() {
					return e.apply(this, arguments)
				}
			})()()
		}, []), 0 < e.length ? i().createElement(D, {
			translate: r,
			agreements: e
		}) : null
	}).propTypes = {
		translate: a().func.isRequired
	};
	var L = (0, o.withTranslations)(e, u);
	(0, t.ready)(function() {
		var e = document.getElementById("user-agreements-checker-container");
		null !== e && (0, r.render)(i().createElement(L, null), e)
	})
}();
//# sourceMappingURL=https://js.rbxcdn.com/99491dd059ae8b61a7641a6a31fc0d03-userAgreementsChecker.bundle.min.js.map

/* Bundle detector */
window.Roblox && window.Roblox.BundleDetector && window.Roblox.BundleDetector.bundleDetected("UserAgreementsChecker");