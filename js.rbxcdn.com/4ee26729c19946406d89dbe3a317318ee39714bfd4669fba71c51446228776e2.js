! function() {
	var e = {
			671: function(e) {
				function n(e) {
					return e && "undefined" != typeof Symbol && e.constructor === Symbol ? "symbol" : typeof e
				}!
				/*!
					Copyright (c) 2018 Jed Watson.
					Licensed under the MIT License (MIT), see
					http://jedwatson.github.io/classnames
				*/
				function() {
					"use strict";
					var t = {}.hasOwnProperty;

					function o() {
						for (var e = "", r = 0; r < arguments.length; r++) {
							var a = arguments[r];
							a && (e = i(e, function(e) {
								if ("string" == typeof e || "number" == typeof e) return e;
								if ((void 0 === e ? "undefined" : n(e)) !== "object") return "";
								if (Array.isArray(e)) return o.apply(null, e);
								if (e.toString !== Object.prototype.toString && !e.toString.toString().includes("[native code]")) return e.toString();
								var r = "";
								for (var a in e) t.call(e, a) && e[a] && (r = i(r, a));
								return r
							}(a)))
						}
						return e
					}

					function i(e, n) {
						return n ? e ? e + " " + n : e + n : e
					}
					e.exports ? (o.default = o, e.exports = o) : "function" == typeof define && "object" === n(define.amd) && define.amd ? define("classnames", [], function() {
						return o
					}) : window.classNames = o
				}()
			},
			630: function(e, n, t) {
				"use strict";
				e.exports = {}
			}
		},
		n = {};

	function t(o) {
		var i = n[o];
		if (void 0 !== i) return i.exports;
		var r = n[o] = {
			exports: {}
		};
		return e[o](r, r.exports, t), r.exports
	}
	t.m = e, t.n = function(e) {
			var n = e && e.__esModule ? function() {
				return e.default
			} : function() {
				return e
			};
			return t.d(n, {
				a: n
			}), n
		}, t.d = function(e, n) {
			for (var o in n) t.o(n, o) && !t.o(e, o) && Object.defineProperty(e, o, {
				enumerable: !0,
				get: n[o]
			})
		}, t.k = function(e) {
			return "" + e + ".css"
		}, t.g = function() {
			if ("object" == typeof globalThis) return globalThis;
			try {
				return this || Function("return this")()
			} catch (e) {
				if ("object" == typeof window) return window
			}
		}(), t.o = function(e, n) {
			return Object.prototype.hasOwnProperty.call(e, n)
		}, t.r = function(e) {
			"undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
				value: "Module"
			}), Object.defineProperty(e, "__esModule", {
				value: !0
			})
		}, t.rv = function() {
			return "1.2.8"
		},
		function() {
			t.g.importScripts && (e = t.g.location + "");
			var e, n = t.g.document;
			if (!e && n && (n.currentScript && "SCRIPT" === n.currentScript.tagName.toUpperCase() && (e = n.currentScript.src), !e)) {
				var o = n.getElementsByTagName("script");
				if (o.length)
					for (var i = o.length - 1; i > -1 && (!e || !/^http(s?):/.test(e));) e = o[i--].src
			}
			if (!e) throw Error("Automatic publicPath is not supported in this browser");
			e = e.replace(/^blob:/, "").replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/"), t.p = e
		}(), t.ruid = "bundler=rspack@1.2.8",
		function() {
			"use strict";
			var e, n, o = window.ReactJSX,
				i = window.Roblox["core-scripts"].util.ready,
				r = t.n(i),
				a = window.Roblox["core-scripts"].react,
				c = {
					banner: "banner",
					consentTool: "consentTool"
				},
				s = window.React,
				l = window.ReactUtilities,
				u = function(e) {
					var n, t = "".concat(e, "="),
						o = null === (n = document.cookie.split("; ").find(function(e) {
							return e.startsWith(t)
						})) || void 0 === n ? void 0 : n.split("=")[1];
					return null != o ? decodeURIComponent(o) : null
				},
				d = JSON.parse('{"x":["CommonUI.Messages","CommonUI.Controls","Feature.Tracking"]}'),
				f = window.CoreUtilities,
				p = window.Roblox["core-scripts"].environmentUrls,
				h = t.n(p),
				y = window.Roblox["core-scripts"].endpoints,
				m = h().universalAppConfigurationApi,
				b = (0, y.getAbsoluteUrl)("/info/privacy"),
				x = (0, y.getAbsoluteUrl)("/support"),
				g = {
					privacyPolicyUrl: b,
					getCookiePolicyConfig: {
						withCredentials: !0,
						url: "".concat(m, "/v1/behaviors/cookie-policy/content")
					},
					googleAnalyticsWebsite: "https://marketingplatform.google.com/about/analytics/",
					supportUrl: x,
					googleAnalyticsReadMore: "https://developers.google.com/analytics/devguides/collection/analyticsjs/cookie-usage"
				};

			function v(e, n, t, o, i, r, a) {
				try {
					var c = e[r](a),
						s = c.value
				} catch (e) {
					t(e);
					return
				}
				c.done ? n(s) : Promise.resolve(s).then(o, i)
			}
			var k = {
					getCookiePolicy: (e = function() {
						var e;
						return function(e, n) {
							var t, o, i, r, a = {
								label: 0,
								sent: function() {
									if (1 & i[0]) throw i[1];
									return i[1]
								},
								trys: [],
								ops: []
							};
							return r = {
								next: c(0),
								throw: c(1),
								return: c(2)
							}, "function" == typeof Symbol && (r[Symbol.iterator] = function() {
								return this
							}), r;

							function c(r) {
								return function(c) {
									return function(r) {
										if (t) throw TypeError("Generator is already executing.");
										for (; a;) try {
											if (t = 1, o && (i = 2 & r[0] ? o.return : r[0] ? o.throw || ((i = o.return) && i.call(o), 0) : o.next) && !(i = i.call(o, r[1])).done) return i;
											switch (o = 0, i && (r = [2 & r[0], i.value]), r[0]) {
												case 0:
												case 1:
													i = r;
													break;
												case 4:
													return a.label++, {
														value: r[1],
														done: !1
													};
												case 5:
													a.label++, o = r[1], r = [0];
													continue;
												case 7:
													r = a.ops.pop(), a.trys.pop();
													continue;
												default:
													if (!(i = (i = a.trys).length > 0 && i[i.length - 1]) && (6 === r[0] || 2 === r[0])) {
														a = 0;
														continue
													}
													if (3 === r[0] && (!i || r[1] > i[0] && r[1] < i[3])) {
														a.label = r[1];
														break
													}
													if (6 === r[0] && a.label < i[1]) {
														a.label = i[1], i = r;
														break
													}
													if (i && a.label < i[2]) {
														a.label = i[2], a.ops.push(r);
														break
													}
													i[2] && a.ops.pop(), a.trys.pop();
													continue
											}
											r = n.call(e, a)
										} catch (e) {
											r = [6, e], o = 0
										} finally {
											t = i = 0
										}
										if (5 & r[0]) throw r[1];
										return {
											value: r[0] ? r[1] : void 0,
											done: !0
										}
									}([r, c])
								}
							}
						}(this, function(n) {
							switch (n.label) {
								case 0:
									return e = g.getCookiePolicyConfig, [4, f.httpService.get(e)];
								case 1:
									return [2, n.sent().data]
							}
						})
					}, n = function() {
						var n = this,
							t = arguments;
						return new Promise(function(o, i) {
							var r = e.apply(n, t);

							function a(e) {
								v(r, o, i, a, c, "next", e)
							}

							function c(e) {
								v(r, o, i, a, c, "throw", e)
							}
							a(void 0)
						})
					}, function() {
						return n.apply(this, arguments)
					})
				},
				j = {
					consentCookieName: "RBXcb",
					consentExpirationDays: 180,
					cookieBannerContent: "Description.CookieBannerContent",
					declineBtnText: "Action.DeclineAll",
					acceptBtnText: "Action.AcceptAll",
					privacyPolicy: "Description.PrivacyPolicy",
					privacyPolicyLinkPlaceholder: "{privacyPolicyLink}",
					cookieConsent: "Action.SetCookieOptions"
				},
				C = function() {
					var e = window.location.hostname;
					return e.startsWith("www.") ? e.substring(4) : e
				},
				w = function(e) {
					var n = "".concat(e, "=; ").concat("expires=Thu, 01 Jan 1970 00:00:00 UTC", "; path=").concat("/"),
						t = window.location.hostname,
						o = C();
					document.cookie = "".concat(n, "; domain=").concat(t, ";"), o !== t && (document.cookie = "".concat(n, "; domain=").concat(o, ";")), o.split(".").length >= 2 && (document.cookie = "".concat(n, "; domain=.").concat(o, ";")), document.cookie = "".concat(n, ";")
				},
				N = function(e, n, t) {
					var o = new Date;
					o.setTime(o.getTime() + 864e5 * t);
					var i = "expires=".concat(o.toUTCString()),
						r = C();
					document.cookie = "".concat(e, "=").concat(encodeURIComponent(n), ";").concat(i).concat(";domain=.".concat(r))
				},
				S = {
					setUserConsent: function(e, n) {
						var t = u(j.consentCookieName);
						t && t.length > 0 && w(j.consentCookieName);
						var o = "",
							i = [];
						n.forEach(function(t, r) {
							e.includes(t) ? o += "".concat(t, "=true&") : (o += "".concat(t, "=false&"), i.push(t)), r === n.length - 1 && (o = o.slice(0, -1))
						}), i.forEach(function(e) {
							w(e)
						}), N(j.consentCookieName, o, j.consentExpirationDays)
					},
					isAnalyticsCookieAccepted: function() {
						var e = u(j.consentCookieName);
						return !!e && "" !== e && !!e.split("&").find(function(e) {
							return "true" === e.split("=")[1]
						})
					}
				},
				A = window.Roblox["core-scripts"].intl.intl,
				P = t.n(A),
				T = window.ReactStyleGuide,
				D = function(e) {
					var n = e.nonEssentialCookieList,
						t = e.closeBanner,
						i = e.showConsentTool,
						r = e.translate,
						a = new(P())().getRobloxLocale(),
						c = r(j.cookieBannerContent),
						l = c.indexOf(j.privacyPolicyLinkPlaceholder),
						u = f.urlService.getUrlWithLocale("string" == typeof g.privacyPolicyUrl ? g.privacyPolicyUrl : "", a),
						d = (0, o.jsx)("span", {
							className: "text",
							children: c.substring(0, l)
						}),
						p = j.privacyPolicyLinkPlaceholder.length,
						h = (0, o.jsx)("span", {
							className: "text",
							children: c.substring(l + p)
						}),
						y = (0, o.jsx)("a", {
							className: "text-link",
							target: "_blank",
							href: u,
							rel: "noreferrer",
							children: r(j.privacyPolicy)
						}),
						m = function(e) {
							S.setUserConsent(e, n), t()
						};
					return (0, o.jsxs)(s.Fragment, {
						children: [(0, o.jsxs)("div", {
							className: "cookie-banner",
							children: [(0, o.jsxs)("div", {
								className: "cookie-description-content",
								children: [d, y, h]
							}), (0, o.jsx)("div", {
								children: (0, o.jsxs)("div", {
									className: "cookie-button-container",
									children: [(0, o.jsx)(T.Button, {
										className: "see-all-link btn-secondary-md consent-tool-link",
										onClick: i,
										children: r(j.cookieConsent)
									}), (0, o.jsxs)("div", {
										className: "cookie-btn-float",
										children: [(0, o.jsx)(T.Button, {
											className: "btn-secondary-lg cookie-btn",
											onClick: function() {
												m([""])
											},
											children: r(j.declineBtnText)
										}), (0, o.jsx)(T.Button, {
											className: "btn-cta-lg cookie-btn",
											onClick: function() {
												m(n)
											},
											children: r(j.acceptBtnText)
										})]
									})]
								})
							})]
						}), (0, o.jsx)("div", {
							className: "cookie-banner-bg",
							onClick: function() {
								m([""])
							},
							"aria-hidden": "true"
						})]
					})
				},
				U = t(671),
				B = t.n(U),
				L = "RBXViralAcquisition",
				R = "Description.RBXViralAcquisition",
				E = "RBXSource",
				I = "Description.RBXSource",
				O = "Heading.GoogleAnalytics",
				M = [{
					label: "Label.DataCollected",
					content: "Description.DataCollected"
				}, {
					label: "Label.DataSharing",
					content: "Description.DataSharing"
				}, {
					label: "Label.DataRetention",
					content: "Description.DataRetention"
				}, {
					label: "Label.DataUse",
					content: "Description.DataUse"
				}, {
					label: "Label.DataStorage",
					content: "Description.Undisclosed"
				}],
				H = function(e) {
					var n = e.cookieName,
						t = e.description;
					return (0, o.jsxs)("div", {
						className: "cookie-item",
						children: [(0, o.jsx)("p", {
							className: "cookie-name font-body text",
							children: n
						}), (0, o.jsx)("p", {
							className: "cookie-description font-footer",
							children: t
						})]
					})
				},
				G = function(e) {
					var n = e.translate,
						t = e.isNonEssentialCookieListVisible,
						i = B()({
							hidden: !t
						}),
						r = M.map(function(e) {
							return (0, o.jsxs)("div", {
								className: "google-analytics-company-info-sec",
								children: [(0, o.jsx)("p", {
									className: "font-caption-header text-emphasis",
									children: n(e.label)
								}), (0, o.jsx)("p", {
									className: "font-caption-body text",
									children: n(e.content)
								})]
							}, e.label)
						}),
						a = (0, o.jsx)("a", {
							className: "text-link",
							target: "_blank",
							href: g.googleAnalyticsReadMore,
							rel: "noreferrer",
							children: n(O)
						}),
						c = n("Description.GAReadMore"),
						s = c.indexOf("{googleAnalyticsLink}"),
						l = (0, o.jsxs)("p", {
							className: "font-caption-body text",
							children: [c.substring(0, s), a]
						}),
						u = (0, o.jsxs)("div", {
							children: [(0, o.jsxs)("a", {
								className: "font-header-2 text-emphasis",
								href: g.googleAnalyticsWebsite,
								children: [n(O), (0, o.jsx)("span", {
									className: "icon-nav-external-link-sm cookie-external-link-icon"
								})]
							}), (0, o.jsxs)("div", {
								children: [(0, o.jsx)("span", {
									className: "google-analytics-info-subheader",
									children: n("Label.OwnedBy")
								}), (0, o.jsx)("span", {
									className: "font-caption-header text-emphasis",
									children: "Google Inc."
								})]
							}), (0, o.jsx)("p", {
								className: "text-emphasis google-analytics-company-info-sec",
								children: n("Heading.GoogleAnalyticsPurpose")
							}), (0, o.jsx)("span", {
								className: "font-caption-body text",
								children: n("Description.GoogleAnalyticsPurpose")
							}), (0, o.jsx)("p", {
								className: "text-emphasis google-analytics-company-info-sec",
								children: n("Heading.CompanyCollection")
							}), r, l]
						}),
						d = (0, o.jsxs)("div", {
							className: "analytics-cookie-list",
							children: [(0, o.jsx)(H, {
								cookieName: L,
								description: n(R)
							}), (0, o.jsx)(H, {
								cookieName: E,
								description: n(I)
							})]
						});
					return (0, o.jsxs)("div", {
						className: i,
						children: [d, u]
					})
				};

			function _(e, n) {
				(null == n || n > e.length) && (n = e.length);
				for (var t = 0, o = Array(n); t < n; t++) o[t] = e[t];
				return o
			}

			function W(e, n) {
				return function(e) {
					if (Array.isArray(e)) return e
				}(e) || function(e, n) {
					var t, o, i = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
					if (null != i) {
						var r = [],
							a = !0,
							c = !1;
						try {
							for (i = i.call(e); !(a = (t = i.next()).done) && (r.push(t.value), !n || r.length !== n); a = !0);
						} catch (e) {
							c = !0, o = e
						} finally {
							try {
								a || null == i.return || i.return()
							} finally {
								if (c) throw o
							}
						}
						return r
					}
				}(e, n) || function(e, n) {
					if (e) {
						if ("string" == typeof e) return _(e, n);
						var t = Object.prototype.toString.call(e).slice(8, -1);
						if ("Object" === t && e.constructor && (t = e.constructor.name), "Map" === t || "Set" === t) return Array.from(t);
						if ("Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)) return _(e, n)
					}
				}(e, n) || function() {
					throw TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
				}()
			}
			var V = W((0, T.createModal)(), 2),
				X = V[0],
				$ = V[1],
				q = function(e) {
					var n = e.nonEssentialCookieList,
						t = e.essentialCookieList,
						i = e.translate,
						r = e.closeConsentTool,
						a = S.isAnalyticsCookieAccepted(),
						l = W((0, s.useState)(a), 2),
						u = l[0],
						d = l[1],
						p = W((0, s.useState)(!1), 2),
						h = p[0],
						y = p[1],
						m = W((0, s.useState)(!1), 2),
						b = m[0],
						x = m[1];
					(0, s.useEffect)(function() {
						$.open()
					}, []);
					var v = B()({
							hidden: !h
						}),
						k = B()("cookie-consent-tool-collaps", {
							on: b
						}),
						C = B()("cookie-consent-tool-collaps font-header-2 text-emphasis ", {
							on: h
						}),
						w = new(P())().getRobloxLocale(),
						N = f.urlService.getUrlWithLocale("string" == typeof g.privacyPolicyUrl ? g.privacyPolicyUrl : "", w),
						A = (0, o.jsx)("div", {
							className: "cookie-consent-tool-info-link",
							children: (0, o.jsxs)("a", {
								className: "text-link",
								target: "_blank",
								href: N,
								rel: "noreferrer",
								children: [i(j.privacyPolicy), (0, o.jsx)("span", {
									className: "icon-nav-external-link-sm cookie-external-link-icon"
								})]
							})
						}),
						D = "string" == typeof g.supportUrl ? g.supportUrl : "",
						U = (0, o.jsx)("div", {
							className: "cookie-consent-tool-info-link",
							children: (0, o.jsxs)("a", {
								className: "text-link",
								target: "_blank",
								href: D,
								rel: "noreferrer",
								children: [i("Action.RequestData"), (0, o.jsx)("span", {
									className: "icon-nav-external-link-sm cookie-external-link-icon"
								})]
							})
						}),
						L = (0, o.jsxs)("div", {
							children: [(0, o.jsxs)("div", {
								className: "static-section",
								children: [(0, o.jsx)("div", {
									className: "font-header-2 text-emphasis google-analytics-company-info-sec",
									children: i("Heading.InformationCollection")
								}), (0, o.jsx)("p", {
									className: "font-caption-body text",
									children: i("Description.InformationCollection")
								})]
							}), (0, o.jsxs)("div", {
								className: "static-section",
								children: [(0, o.jsx)("div", {
									className: "font-header-2 text-emphasis google-analytics-company-info-sec",
									children: i("Heading.InformationCollection2")
								}), (0, o.jsx)("p", {
									className: "font-caption-body text",
									children: i("Description.InformationCollection2")
								})]
							}), (0, o.jsxs)("div", {
								className: "static-section",
								children: [(0, o.jsx)("div", {
									className: "font-header-2 text-emphasis google-analytics-company-info-sec",
									children: i("Heading.InformationPartnerCollection")
								}), (0, o.jsx)("p", {
									className: "font-caption-body text",
									children: i("Description.InformationPartnerCollection")
								})]
							})]
						}),
						R = (0, o.jsxs)("div", {
							children: [(0, o.jsx)("button", {
								className: k,
								type: "button",
								onClick: function() {
									x(!b)
								},
								children: (0, o.jsx)("span", {
									className: "font-header-2 text-emphasis",
									children: i("Heading.AnalyticsCookies")
								})
							}), (0, o.jsx)(T.Toggle, {
								className: "cookie-toggle",
								isOn: u,
								onToggle: function() {
									d(!u)
								}
							})]
						}),
						E = t.map(function(e) {
							return (0, o.jsx)(H, {
								cookieName: e.cookieName,
								description: i(e.description)
							}, e.cookieName)
						}),
						I = (0, o.jsxs)("div", {
							children: [U, A]
						}),
						O = (0, o.jsxs)("div", {
							className: "essential-cookie-section",
							children: [(0, o.jsx)("button", {
								className: C,
								type: "button",
								onClick: function() {
									y(!h)
								},
								children: i("Heading.EssentialCookies")
							}), (0, o.jsx)("div", {
								className: v,
								children: E
							})]
						}),
						M = (0, o.jsxs)("div", {
							className: "cookie-consent-tool-body",
							children: [L, I, O, R, (0, o.jsx)(G, {
								isNonEssentialCookieListVisible: b,
								translate: i
							})]
						});
					return (0, o.jsx)(X, {
						title: i("Heading.CookieSettings"),
						body: M,
						actionButtonShow: !0,
						actionButtonText: i("Action.SavePreferences"),
						neutralButtonText: i("Action.Cancel"),
						onAction: function() {
							var e = u ? n : [];
							S.setUserConsent(e, n), r(null)
						},
						onNeutral: function() {
							r(c.banner)
						},
						id: "cookie-consent-tool-modal",
						size: "lg"
					})
				};

			function F(e, n) {
				(null == n || n > e.length) && (n = e.length);
				for (var t = 0, o = Array(n); t < n; t++) o[t] = e[t];
				return o
			}

			function J(e, n, t, o, i, r, a) {
				try {
					var c = e[r](a),
						s = c.value
				} catch (e) {
					t(e);
					return
				}
				c.done ? n(s) : Promise.resolve(s).then(o, i)
			}

			function z(e, n) {
				return function(e) {
					if (Array.isArray(e)) return e
				}(e) || function(e, n) {
					var t, o, i = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
					if (null != i) {
						var r = [],
							a = !0,
							c = !1;
						try {
							for (i = i.call(e); !(a = (t = i.next()).done) && (r.push(t.value), !n || r.length !== n); a = !0);
						} catch (e) {
							c = !0, o = e
						} finally {
							try {
								a || null == i.return || i.return()
							} finally {
								if (c) throw o
							}
						}
						return r
					}
				}(e, n) || function(e, n) {
					if (e) {
						if ("string" == typeof e) return F(e, n);
						var t = Object.prototype.toString.call(e).slice(8, -1);
						if ("Object" === t && e.constructor && (t = e.constructor.name), "Map" === t || "Set" === t) return Array.from(t);
						if ("Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)) return F(e, n)
					}
				}(e, n) || function() {
					throw TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
				}()
			}
			var K = (0, l.withTranslations)(function(e) {
				var n = e.translate,
					t = z((0, s.useState)([]), 2),
					i = t[0],
					r = t[1],
					a = z((0, s.useState)([]), 2),
					l = a[0],
					d = a[1],
					f = z((0, s.useState)(null), 2),
					p = f[0],
					h = f[1];
				switch ((0, s.useEffect)(function() {
						var e, n, t = (e = function() {
								var e;
								return function(e, n) {
									var t, o, i, r, a = {
										label: 0,
										sent: function() {
											if (1 & i[0]) throw i[1];
											return i[1]
										},
										trys: [],
										ops: []
									};
									return r = {
										next: c(0),
										throw: c(1),
										return: c(2)
									}, "function" == typeof Symbol && (r[Symbol.iterator] = function() {
										return this
									}), r;

									function c(r) {
										return function(c) {
											return function(r) {
												if (t) throw TypeError("Generator is already executing.");
												for (; a;) try {
													if (t = 1, o && (i = 2 & r[0] ? o.return : r[0] ? o.throw || ((i = o.return) && i.call(o), 0) : o.next) && !(i = i.call(o, r[1])).done) return i;
													switch (o = 0, i && (r = [2 & r[0], i.value]), r[0]) {
														case 0:
														case 1:
															i = r;
															break;
														case 4:
															return a.label++, {
																value: r[1],
																done: !1
															};
														case 5:
															a.label++, o = r[1], r = [0];
															continue;
														case 7:
															r = a.ops.pop(), a.trys.pop();
															continue;
														default:
															if (!(i = (i = a.trys).length > 0 && i[i.length - 1]) && (6 === r[0] || 2 === r[0])) {
																a = 0;
																continue
															}
															if (3 === r[0] && (!i || r[1] > i[0] && r[1] < i[3])) {
																a.label = r[1];
																break
															}
															if (6 === r[0] && a.label < i[1]) {
																a.label = i[1], i = r;
																break
															}
															if (i && a.label < i[2]) {
																a.label = i[2], a.ops.push(r);
																break
															}
															i[2] && a.ops.pop(), a.trys.pop();
															continue
													}
													r = n.call(e, a)
												} catch (e) {
													r = [6, e], o = 0
												} finally {
													t = i = 0
												}
												if (5 & r[0]) throw r[1];
												return {
													value: r[0] ? r[1] : void 0,
													done: !0
												}
											}([r, c])
										}
									}
								}(this, function(n) {
									switch (n.label) {
										case 0:
											return [4, k.getCookiePolicy()];
										case 1:
											return (e = n.sent()).ShouldDisplayCookieBannerV3 && e.EssentialCookieList ? (r(e.NonEssentialCookieList), d(e.EssentialCookieList), h(c.banner)) : S.setUserConsent(e.NonEssentialCookieList, e.NonEssentialCookieList), [2]
									}
								})
							}, n = function() {
								var n = this,
									t = arguments;
								return new Promise(function(o, i) {
									var r = e.apply(n, t);

									function a(e) {
										J(r, o, i, a, c, "next", e)
									}

									function c(e) {
										J(r, o, i, a, c, "throw", e)
									}
									a(void 0)
								})
							}, function() {
								return n.apply(this, arguments)
							}),
							o = u(j.consentCookieName);
						o && "" !== o || t()
					}, []), p) {
					case c.banner:
						return (0, o.jsx)(D, {
							translate: n,
							nonEssentialCookieList: i,
							closeBanner: function() {
								h(null)
							},
							showConsentTool: function() {
								h(c.consentTool)
							}
						});
					case c.consentTool:
						return (0, o.jsx)(q, {
							translate: n,
							essentialCookieList: l,
							nonEssentialCookieList: i,
							closeConsentTool: h
						});
					default:
						return (0, o.jsx)("div", {})
				}
			}, d.x);
			t(630);
			var Q = document.getElementById("cookie-banner-wrapper");
			r()(function() {
				Q && (0, a.renderWithErrorBoundary)((0, o.jsx)(K, {}), Q)
			})
		}()
}(), window.Roblox && window.Roblox.BundleDetector && window.Roblox.BundleDetector.bundleDetected("CookieBannerV3");
//# debugId=e0873721-d896-451d-a8d8-3e4fc9b9431a
//# sourceMappingURL=https://sourcemaps.rbxcdn.com/cookieBannerV3-36a04b9513e52714.js.map