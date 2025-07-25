! function() {
	var n = {
			989: function(e, t) {
				"use strict";

				function n(e) {
					return (n = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
						return typeof e
					} : function(e) {
						return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
					})(e)
				}

				function c(e) {
					var t = e && !e.advancedFraudSignals ? "?advancedFraudSignals=false" : "";
					if ((e = document.createElement("script")).src = "".concat(u).concat(t), !(t = document.head || document.body)) throw new Error("Expected document.body not to be null. Stripe.js requires a <body> element.");
					return t.appendChild(e), e
				}

				function i(s) {
					return null !== p ? p : (p = new Promise(function(e, t) {
						var n, r, i;
						if ("undefined" != typeof window && "undefined" != typeof document)
							if (window.Stripe && s && console.warn(d), window.Stripe) e(window.Stripe);
							else try {
								var o, a = function() {
									for (var e = document.querySelectorAll('script[src^="'.concat(u, '"]')), t = 0; t < e.length; t++) {
										var n = e[t];
										if (l.test(n.src)) return n
									}
									return null
								}();
								a && s ? console.warn(d) : a ? a && null !== f && null !== E && (a.removeEventListener("load", f), a.removeEventListener("error", E), null !== (o = a.parentNode) && void 0 !== o && o.removeChild(a), a = c(s)) : a = c(s), r = e, f = function() {
									window.Stripe ? r(window.Stripe) : i(new Error("Stripe.js not available"))
								}, n = i = t, E = function() {
									n(new Error("Failed to load Stripe.js"))
								}, a.addEventListener("load", f), a.addEventListener("error", E)
							} catch (e) {
								return void t(e)
							} else e(null)
					})).catch(function(e) {
						return p = null, Promise.reject(e)
					})
				}

				function r(e) {
					var t = "invalid load parameters; expected object of shape\n\n    {advancedFraudSignals: boolean}\n\nbut received\n\n    ".concat(JSON.stringify(e), "\n");
					if (null === e || "object" !== n(e)) throw new Error(t);
					if (1 === Object.keys(e).length && "boolean" == typeof e.advancedFraudSignals) return e;
					throw new Error(t)
				}

				function o() {
					for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++) t[n] = arguments[n];
					s = !0;
					var r = Date.now();
					return i(a).then(function(e) {
						return function(e, t, n) {
							if (null === e) return null;
							e = e.apply(void 0, t);
							return t = n, (n = e) && n._registerWrapper && n._registerWrapper({
								name: "stripe-js",
								version: "3.3.0",
								startTime: t
							}), e
						}(e, t, r)
					})
				}
				var a, u = "https://js.stripe.com/v3",
					l = /^https:\/\/js\.stripe\.com\/v3\/?(\?.*)?$/,
					d = "loadStripe.setLoadParameters was called but an existing Stripe.js script already exists in the document; existing script parameters will be used",
					p = null,
					E = null,
					f = null,
					s = !{
						value: !0
					};
				o.setLoadParameters = function(n) {
					if (s && a) {
						var e = r(n);
						if (Object.keys(e).reduce(function(e, t) {
								return e && n[t] === (null === a || void 0 === a ? void 0 : a[t])
							}, !0)) return
					}
					if (s) throw new Error("You cannot change load parameters after calling loadStripe");
					a = r(n)
				}, t.loadStripe = o
			},
			900: function(e, t, n) {
				e.exports = n(989)
			},
			158: function(e, t, n) {
				var r;

				function i(e) {
					return (i = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
						return typeof e
					} : function(e) {
						return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
					})(e)
				}
				r = function(e, D) {
					"use strict";

					function r(t, e) {
						var n, r = Object.keys(t);
						return Object.getOwnPropertySymbols && (n = Object.getOwnPropertySymbols(t), e && (n = n.filter(function(e) {
							return Object.getOwnPropertyDescriptor(t, e).enumerable
						})), r.push.apply(r, n)), r
					}

					function E(t) {
						for (var e = 1; e < arguments.length; e++) {
							var n = null != arguments[e] ? arguments[e] : {};
							e % 2 ? r(Object(n), !0).forEach(function(e) {
								a(t, e, n[e])
							}) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : r(Object(n)).forEach(function(e) {
								Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
							})
						}
						return t
					}

					function t(e) {
						return (t = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
							return typeof e
						} : function(e) {
							return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
						})(e)
					}

					function a(e, t, n) {
						return t in e ? Object.defineProperty(e, t, {
							value: n,
							enumerable: !0,
							configurable: !0,
							writable: !0
						}) : e[t] = n, e
					}

					function f(e, t) {
						if (null == e) return {};
						var n, r = function(e, t) {
							if (null == e) return {};
							for (var n, r = {}, i = Object.keys(e), o = 0; o < i.length; o++) n = i[o], 0 <= t.indexOf(n) || (r[n] = e[n]);
							return r
						}(e, t);
						if (Object.getOwnPropertySymbols)
							for (var i = Object.getOwnPropertySymbols(e), o = 0; o < i.length; o++) n = i[o], 0 <= t.indexOf(n) || Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n]);
						return r
					}

					function N(e, t) {
						return function(e) {
							if (Array.isArray(e)) return e
						}(e) || function(e, t) {
							var n = e && ("undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"]);
							if (null == n) return;
							var r, i, o = [],
								a = !0,
								s = !1;
							try {
								for (n = n.call(e); !(a = (r = n.next()).done) && (o.push(r.value), !t || o.length !== t); a = !0);
							} catch (e) {
								s = !0, i = e
							} finally {
								try {
									a || null == n.return || n.return()
								} finally {
									if (s) throw i
								}
							}
							return o
						}(e, t) || function(e, t) {
							if (!e) return;
							if ("string" == typeof e) return i(e, t);
							var n = Object.prototype.toString.call(e).slice(8, -1);
							"Object" === n && e.constructor && (n = e.constructor.name);
							if ("Map" === n || "Set" === n) return Array.from(e);
							if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return i(e, t)
						}(e, t) || function() {
							throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
						}()
					}

					function i(e, t) {
						(null == t || t > e.length) && (t = e.length);
						for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
						return r
					}

					function n(e) {
						return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e
					}
					var o, s, c, u, l = {
						exports: {}
					};
					l.exports = function() {
						if (u) return c;
						u = 1;
						var a = s ? o : (s = 1, o = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");

						function r() {}

						function i() {}
						return i.resetWarningCache = r, c = function() {
							function e(e, t, n, r, i, o) {
								if (o !== a) {
									o = new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");
									throw o.name = "Invariant Violation", o
								}
							}

							function t() {
								return e
							}
							var n = {
								array: e.isRequired = e,
								bool: e,
								func: e,
								number: e,
								object: e,
								string: e,
								symbol: e,
								any: e,
								arrayOf: t,
								element: e,
								elementType: e,
								instanceOf: t,
								node: e,
								objectOf: t,
								oneOf: t,
								oneOfType: t,
								shape: t,
								exact: t,
								checkPropTypes: i,
								resetWarningCache: r
							};
							return n.PropTypes = n
						}
					}()();

					function I(t, n, e) {
						var r = !!e,
							i = D.useRef(e);
						D.useEffect(function() {
							i.current = e
						}, [e]), D.useEffect(function() {
							if (!r || !t) return function() {};

							function e() {
								i.current && i.current.apply(i, arguments)
							}
							return t.on(n, e),
								function() {
									t.off(n, e)
								}
						}, [r, n, t, i])
					}

					function O(e) {
						var t = D.useRef(e);
						return D.useEffect(function() {
							t.current = e
						}, [e]), t.current
					}

					function m(e) {
						return null !== e && "object" === t(e)
					}

					function S(e, t) {
						if (!m(e) || !m(t)) return e === t;
						var n = Array.isArray(e);
						if (n !== Array.isArray(t)) return !1;
						var r = Object.prototype.toString.call(e) === v;
						if (r != (Object.prototype.toString.call(t) === v)) return !1;
						if (!r && !n) return e === t;
						var i = Object.keys(e),
							o = Object.keys(t);
						if (i.length !== o.length) return !1;
						for (var a = {}, s = 0; s < i.length; s += 1) a[i[s]] = !0;
						for (var c = 0; c < o.length; c += 1) a[o[c]] = !0;
						if ((n = Object.keys(a)).length !== i.length) return !1;
						var u = e,
							l = t;
						return n.every(function(e) {
							return S(u[e], l[e])
						})
					}

					function R(r, i, o) {
						return m(r) ? Object.keys(r).reduce(function(e, t) {
							var n = !m(i) || !S(r[t], i[t]);
							return o.includes(t) ? (n && console.warn("Unsupported prop change: options.".concat(t, " is not a mutable property.")), e) : n ? E(E({}, e || {}), {}, a({}, t, r[t])) : e
						}, null) : null
					}

					function d(e, t) {
						var n = 1 < arguments.length && void 0 !== t ? t : P;
						if (null === e || m(t = e) && "function" == typeof t.elements && "function" == typeof t.createToken && "function" == typeof t.createPaymentMethod && "function" == typeof t.confirmCardPayment) return e;
						throw new Error(n)
					}

					function b(e, t) {
						var n = 1 < arguments.length && void 0 !== t ? t : P;
						return m(t = e) && "function" == typeof t.then ? {
							tag: "async",
							stripePromise: Promise.resolve(e).then(function(e) {
								return d(e, n)
							})
						} : null === (e = d(e, n)) ? {
							tag: "empty"
						} : {
							tag: "sync",
							stripe: e
						}
					}

					function h(e) {
						e && e._registerWrapper && e.registerAppInfo && (e._registerWrapper({
							name: "react-stripe-js",
							version: "2.7.0"
						}), e.registerAppInfo({
							name: "react-stripe-js",
							version: "2.7.0",
							url: "https://stripe.com/docs/stripe-js/react"
						}))
					}
					var p = n(l.exports),
						v = "[object Object]",
						P = "Invalid prop `stripe` supplied to `Elements`. We recommend using the `loadStripe` utility from `@stripe/stripe-js`. See https://stripe.com/docs/stripe-js/react#elements-props-stripe for details.",
						_ = D.createContext(null);
					_.displayName = "ElementsContext";

					function C(e, t) {
						if (!e) throw new Error("Could not find Elements context; You need to wrap the part of your app that ".concat(t, " in an <Elements> provider."));
						return e
					}

					function y(e) {
						var t = e.stripe,
							r = e.options,
							n = e.children,
							i = D.useMemo(function() {
								return b(t)
							}, [t]),
							o = (e = N(D.useState(function() {
								return {
									stripe: "sync" === i.tag ? i.stripe : null,
									elements: "sync" === i.tag ? i.stripe.elements(r) : null
								}
							}), 2))[0],
							a = e[1];
						D.useEffect(function() {
							function t(t) {
								a(function(e) {
									return e.stripe ? e : {
										stripe: t,
										elements: t.elements(r)
									}
								})
							}
							var n = !0;
							return "async" !== i.tag || o.stripe ? "sync" !== i.tag || o.stripe || t(i.stripe) : i.stripePromise.then(function(e) {
									e && n && t(e)
								}),
								function() {
									n = !1
								}
						}, [i, o, r]);
						var s = O(t);
						D.useEffect(function() {
							null !== s && s !== t && console.warn("Unsupported prop change on Elements: You cannot change the `stripe` prop after setting it.")
						}, [s, t]);
						var c = O(r);
						return D.useEffect(function() {
							var e;
							!o.elements || (e = R(r, c, ["clientSecret", "fonts"])) && o.elements.update(e)
						}, [r, c, o.elements]), D.useEffect(function() {
							h(o.stripe)
						}, [o.stripe]), D.createElement(_.Provider, {
							value: o
						}, n)
					}
					y.propTypes = {
						stripe: p.any,
						options: p.object
					};

					function A(e) {
						var t = D.useContext(_);
						return C(t, e)
					}

					function T(e) {
						return (0, e.children)(A("mounts <ElementsConsumer>"))
					}
					T.propTypes = {
						children: p.func.isRequired
					};
					var g = ["on", "session"],
						w = D.createContext(null);
					w.displayName = "CustomCheckoutSdkContext";

					function U(e, t) {
						if (!e) throw new Error("Could not find CustomCheckoutProvider context; You need to wrap the part of your app that ".concat(t, " in an <CustomCheckoutProvider> provider."));
						return e
					}
					var M = D.createContext(null);
					M.displayName = "CustomCheckoutContext";

					function L(e) {
						function n(t, n) {
							u(function(e) {
								return e.stripe && e.customCheckoutSdk ? e : {
									stripe: t,
									customCheckoutSdk: n
								}
							})
						}
						var t = e.stripe,
							r = e.options,
							i = e.children,
							o = D.useMemo(function() {
								return b(t, "Invalid prop `stripe` supplied to `CustomCheckoutProvider`. We recommend using the `loadStripe` utility from `@stripe/stripe-js`. See https://stripe.com/docs/stripe-js/react#elements-props-stripe for details.")
							}, [t]),
							a = (e = N(D.useState(null), 2))[0],
							s = e[1],
							c = (e = N(D.useState(function() {
								return {
									stripe: "sync" === o.tag ? o.stripe : null,
									customCheckoutSdk: null
								}
							}), 2))[0],
							u = e[1],
							l = D.useRef(!1);
						D.useEffect(function() {
							var e = !0;
							return "async" !== o.tag || c.stripe ? "sync" === o.tag && o.stripe && !l.current && (l.current = !0, o.stripe.initCustomCheckout(r).then(function(e) {
									e && (n(o.stripe, e), e.on("change", s))
								})) : o.stripePromise.then(function(t) {
									t && e && !l.current && (l.current = !0, t.initCustomCheckout(r).then(function(e) {
										e && (n(t, e), e.on("change", s))
									}))
								}),
								function() {
									e = !1
								}
						}, [o, c, r, s]);
						var d = O(t);
						D.useEffect(function() {
							null !== d && d !== t && console.warn("Unsupported prop change on CustomCheckoutProvider: You cannot change the `stripe` prop after setting it.")
						}, [d, t]);
						var p = O(r);
						return D.useEffect(function() {
							var e, t;
							c.customCheckoutSdk && (!r.clientSecret || m(p) || S(r.clientSecret, p.clientSecret) || console.warn("Unsupported prop change: options.client_secret is not a mutable property."), e = null == p || null === (e = p.elementsOptions) || void 0 === e ? void 0 : e.appearance, (t = null == r || null === (t = r.elementsOptions) || void 0 === t ? void 0 : t.appearance) && !S(t, e) && c.customCheckoutSdk.changeAppearance(t))
						}, [r, p, c.customCheckoutSdk]), D.useEffect(function() {
							h(c.stripe)
						}, [c.stripe]), e = D.useMemo(function() {
							return function(e, t) {
								if (!e) return null;
								e.on, e.session;
								var n = f(e, g);
								return E(E({}, n), t || e.session())
							}(c.customCheckoutSdk, a)
						}, [c.customCheckoutSdk, a]), c.customCheckoutSdk ? D.createElement(w.Provider, {
							value: c
						}, D.createElement(M.Provider, {
							value: e
						}, i)) : null
					}
					L.propTypes = {
						stripe: p.any,
						options: p.shape({
							clientSecret: p.string.isRequired,
							elementsOptions: p.object
						}).isRequired
					};

					function k(e) {
						var t = D.useContext(w),
							n = D.useContext(_);
						if (t && n) throw new Error("You cannot wrap the part of your app that ".concat(e, " in both <CustomCheckoutProvider> and <Elements> providers."));
						return t ? U(t, e) : C(n, e)
					}

					function x(T, e) {
						var t, g = "".concat((t = T).charAt(0).toUpperCase() + t.slice(1), "Element");
						return (e = e ? function(e) {
							k("mounts <".concat(g, ">"));
							var t = e.id,
								e = e.className;
							return D.createElement("div", {
								id: t,
								className: e
							})
						} : function(e) {
							var t, n = e.id,
								r = e.className,
								i = e.options,
								o = void 0 === i ? {} : i,
								a = e.onBlur,
								s = e.onFocus,
								c = e.onReady,
								u = e.onChange,
								l = e.onEscape,
								d = e.onClick,
								p = e.onLoadError,
								E = e.onLoaderStart,
								f = e.onNetworksChange,
								m = e.onConfirm,
								S = e.onCancel,
								b = e.onShippingAddressChange,
								i = e.onShippingRateChange,
								e = k("mounts <".concat(g, ">")),
								h = "elements" in e ? e.elements : null,
								v = "customCheckoutSdk" in e ? e.customCheckoutSdk : null,
								e = N(D.useState(null), 2),
								P = e[0],
								_ = e[1],
								C = D.useRef(null),
								y = D.useRef(null);
							I(P, "blur", a), I(P, "focus", s), I(P, "escape", l), I(P, "click", d), I(P, "loaderror", p), I(P, "loaderstart", E), I(P, "networkschange", f), I(P, "confirm", m), I(P, "cancel", S), I(P, "shippingaddresschange", b), I(P, "shippingratechange", i), I(P, "change", u), c && (t = "expressCheckout" === T ? c : function() {
								c(P)
							}), I(P, "ready", t), D.useLayoutEffect(function() {
								var e;
								null === C.current && null !== y.current && (h || v) && (e = null, v ? e = v.createElement(T, o) : h && (e = h.create(T, o)), C.current = e, _(e), e && e.mount(y.current))
							}, [h, v, o]);
							var A = O(o);
							return D.useEffect(function() {
								var e;
								!C.current || (e = R(o, A, ["paymentRequest"])) && C.current.update(e)
							}, [o, A]), D.useLayoutEffect(function() {
								return function() {
									if (C.current && "function" == typeof C.current.destroy) try {
										C.current.destroy(), C.current = null
									} catch (e) {}
								}
							}, []), D.createElement("div", {
								id: n,
								className: r,
								ref: y
							})
						}).propTypes = {
							id: p.string,
							className: p.string,
							onChange: p.func,
							onBlur: p.func,
							onFocus: p.func,
							onReady: p.func,
							onEscape: p.func,
							onClick: p.func,
							onLoadError: p.func,
							onLoaderStart: p.func,
							onNetworksChange: p.func,
							onConfirm: p.func,
							onCancel: p.func,
							onShippingAddressChange: p.func,
							onShippingRateChange: p.func,
							options: p.object
						}, e.displayName = g, e.__elementType = T, e
					}
					var G = "undefined" == typeof window,
						B = D.createContext(null);
					B.displayName = "EmbeddedCheckoutProviderContext";

					function F() {
						var e = D.useContext(B);
						if (!e) throw new Error("<EmbeddedCheckout> must be used within <EmbeddedCheckoutProvider>");
						return e
					}
					var H = G ? function(e) {
							var t = e.id,
								e = e.className;
							return F(), D.createElement("div", {
								id: t,
								className: e
							})
						} : function(e) {
							var t = e.id,
								e = e.className,
								n = F().embeddedCheckout,
								r = D.useRef(!1),
								i = D.useRef(null);
							return D.useLayoutEffect(function() {
								return !r.current && n && null !== i.current && (n.mount(i.current), r.current = !0),
									function() {
										if (r.current && n) try {
											n.unmount(), r.current = !1
										} catch (e) {}
									}
							}, [n]), D.createElement("div", {
								ref: i,
								id: t,
								className: e
							})
						},
						V = x("auBankAccount", G),
						Y = x("card", G),
						j = x("cardNumber", G),
						W = x("cardExpiry", G),
						K = x("cardCvc", G),
						z = x("fpxBank", G),
						X = x("iban", G),
						q = x("idealBank", G),
						Q = x("p24Bank", G),
						J = x("epsBank", G),
						Z = x("payment", G),
						$ = x("expressCheckout", G),
						ee = x("paymentRequestButton", G),
						te = x("linkAuthentication", G),
						ne = x("address", G),
						re = x("shippingAddress", G),
						ie = x("paymentMethodMessaging", G),
						l = x("affirmMessage", G),
						G = x("afterpayClearpayMessage", G);
					e.AddressElement = ne, e.AffirmMessageElement = l, e.AfterpayClearpayMessageElement = G, e.AuBankAccountElement = V, e.CardCvcElement = K, e.CardElement = Y, e.CardExpiryElement = W, e.CardNumberElement = j, e.CustomCheckoutProvider = L, e.Elements = y, e.ElementsConsumer = T, e.EmbeddedCheckout = H, e.EmbeddedCheckoutProvider = function(e) {
						var t = e.stripe,
							n = e.options,
							r = e.children,
							i = D.useMemo(function() {
								return b(t, "Invalid prop `stripe` supplied to `EmbeddedCheckoutProvider`. We recommend using the `loadStripe` utility from `@stripe/stripe-js`. See https://stripe.com/docs/stripe-js/react#elements-props-stripe for details.")
							}, [t]),
							o = D.useRef(null),
							a = D.useRef(null),
							e = N(D.useState({
								embeddedCheckout: null
							}), 2),
							s = e[0],
							c = e[1];
						D.useEffect(function() {
							var t;
							a.current || o.current || (t = function(e) {
								a.current || o.current || (a.current = e, o.current = a.current.initEmbeddedCheckout(n).then(function(e) {
									c({
										embeddedCheckout: e
									})
								}))
							}, "async" !== i.tag || a.current || !n.clientSecret && !n.fetchClientSecret ? "sync" !== i.tag || a.current || !n.clientSecret && !n.fetchClientSecret || t(i.stripe) : i.stripePromise.then(function(e) {
								e && t(e)
							}))
						}, [i, n, s, a]), D.useEffect(function() {
							return function() {
								s.embeddedCheckout ? (o.current = null, s.embeddedCheckout.destroy()) : o.current && o.current.then(function() {
									o.current = null, s.embeddedCheckout && s.embeddedCheckout.destroy()
								})
							}
						}, [s.embeddedCheckout]), D.useEffect(function() {
							h(a)
						}, [a]);
						var u = O(t);
						D.useEffect(function() {
							null !== u && u !== t && console.warn("Unsupported prop change on EmbeddedCheckoutProvider: You cannot change the `stripe` prop after setting it.")
						}, [u, t]);
						var l = O(n);
						return D.useEffect(function() {
							null != l && (null != n ? (void 0 === n.clientSecret && void 0 === n.fetchClientSecret && console.warn("Invalid props passed to EmbeddedCheckoutProvider: You must provide one of either `options.fetchClientSecret` or `options.clientSecret`."), null != l.clientSecret && n.clientSecret !== l.clientSecret && console.warn("Unsupported prop change on EmbeddedCheckoutProvider: You cannot change the client secret after setting it. Unmount and create a new instance of EmbeddedCheckoutProvider instead."), null != l.fetchClientSecret && n.fetchClientSecret !== l.fetchClientSecret && console.warn("Unsupported prop change on EmbeddedCheckoutProvider: You cannot change fetchClientSecret after setting it. Unmount and create a new instance of EmbeddedCheckoutProvider instead."), null != l.onComplete && n.onComplete !== l.onComplete && console.warn("Unsupported prop change on EmbeddedCheckoutProvider: You cannot change the onComplete option after setting it.")) : console.warn("Unsupported prop change on EmbeddedCheckoutProvider: You cannot unset options after setting them."))
						}, [l, n]), D.createElement(B.Provider, {
							value: s
						}, r)
					}, e.EpsBankElement = J, e.ExpressCheckoutElement = $, e.FpxBankElement = z, e.IbanElement = X, e.IdealBankElement = q, e.LinkAuthenticationElement = te, e.P24BankElement = Q, e.PaymentElement = Z, e.PaymentMethodMessagingElement = ie, e.PaymentRequestButtonElement = ee, e.ShippingAddressElement = re, e.useCustomCheckout = function() {
						var e;
						t = "calls useCustomCheckout()", e = D.useContext(w), U(e, t);
						var t = D.useContext(M);
						if (!t) throw new Error("Could not find CustomCheckout Context; You need to wrap the part of your app that calls useCustomCheckout() in an <CustomCheckoutProvider> provider.");
						return t
					}, e.useElements = function() {
						return A("calls useElements()").elements
					}, e.useStripe = function() {
						return k("calls useStripe()").stripe
					}
				}, "object" === i(t) ? r(t, n(804)) : (n = [t, n(804)], void 0 === (r = "function" == typeof(r = r) ? r.apply(t, n) : r) || (e.exports = r))
			},
			779: function(e, t) {
				var n;
				/*!
					Copyright (c) 2018 Jed Watson.
					Licensed under the MIT License (MIT), see
					http://jedwatson.github.io/classnames
				*/
				! function() {
					"use strict";
					var a = {}.hasOwnProperty;

					function s() {
						for (var e = [], t = 0; t < arguments.length; t++) {
							var n = arguments[t];
							if (n) {
								var r, i = typeof n;
								if ("string" == i || "number" == i) e.push(n);
								else if (Array.isArray(n)) !n.length || (r = s.apply(null, n)) && e.push(r);
								else if ("object" == i)
									if (n.toString === Object.prototype.toString || n.toString.toString().includes("[native code]"))
										for (var o in n) a.call(n, o) && n[o] && e.push(o);
									else e.push(n.toString())
							}
						}
						return e.join(" ")
					}
					e.exports ? (s.default = s, e.exports = s) : void 0 === (n = function() {
						return s
					}.apply(t, [])) || (e.exports = n)
				}()
			},
			804: function(e) {
				"use strict";
				e.exports = React
			}
		},
		r = {};

	function Je(e) {
		if (r[e]) return r[e].exports;
		var t = r[e] = {
			exports: {}
		};
		return n[e].call(t.exports, t, t.exports, Je), t.exports
	}
	Je.n = function(e) {
			var t = e && e.__esModule ? function() {
				return e.default
			} : function() {
				return e
			};
			return Je.d(t, {
				a: t
			}), t
		}, Je.d = function(e, t) {
			for (var n in t) Je.o(t, n) && !Je.o(e, n) && Object.defineProperty(e, n, {
				enumerable: !0,
				get: t[n]
			})
		}, Je.o = function(e, t) {
			return Object.prototype.hasOwnProperty.call(e, t)
		},
		function() {
			"use strict";
			var I = Je(804),
				O = Je.n(I),
				e = ReactDOM,
				R = ReactUtilities,
				b = HeaderScripts,
				h = CoreUtilities,
				v = ReactRouterDOM,
				D = Roblox,
				t = PropTypes,
				n = Je.n(t),
				c = {
					Basic: "basic",
					Extended: "extended"
				},
				r = Je(779),
				u = Je.n(r);

			function i() {
				return (i = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n, r = arguments[t];
						for (n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n])
					}
					return e
				}).apply(this, arguments)
			}

			function o(e, t) {
				if (null == e) return {};
				var n, r = function(e, t) {
					if (null == e) return {};
					var n, r, i = {},
						o = Object.keys(e);
					for (r = 0; r < o.length; r++) n = o[r], 0 <= t.indexOf(n) || (i[n] = e[n]);
					return i
				}(e, t);
				if (Object.getOwnPropertySymbols)
					for (var i = Object.getOwnPropertySymbols(e), o = 0; o < i.length; o++) n = i[o], 0 <= t.indexOf(n) || Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n]);
				return r
			}

			function a(e) {
				var t = e.className,
					n = e.disabled,
					r = e.children,
					e = o(e, ["className", "disabled", "children"]);
				return O().createElement("button", i({
					type: "button",
					className: t,
					disabled: n
				}, e), r)
			}
			a.defaultProps = {
				className: "",
				disabled: !1,
				children: null
			}, a.propTypes = {
				className: n().string,
				disabled: n().bool,
				children: n().node
			};
			var l = a,
				s = {
					large: "lg",
					medium: "md",
					small: "sm",
					extraSmall: "xs",
					default: ""
				},
				t = {
					generic: "generic",
					navigation: "navigation",
					download: "download"
				};

			function d() {
				return (d = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n, r = arguments[t];
						for (n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n])
					}
					return e
				}).apply(this, arguments)
			}

			function p(e, t) {
				if (null == e) return {};
				var n, r = function(e, t) {
					if (null == e) return {};
					var n, r, i = {},
						o = Object.keys(e);
					for (r = 0; r < o.length; r++) n = o[r], 0 <= t.indexOf(n) || (i[n] = e[n]);
					return i
				}(e, t);
				if (Object.getOwnPropertySymbols)
					for (var i = Object.getOwnPropertySymbols(e), o = 0; o < i.length; o++) n = i[o], 0 <= t.indexOf(n) || Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n]);
				return r
			}
			var r = Object.values(t),
				E = Object.values(s);

			function f(e) {
				var t = e.className,
					n = e.iconType,
					r = e.iconName,
					i = e.size,
					o = e.isDisabled,
					a = e.isLoading,
					s = e.altName,
					e = p(e, ["className", "iconType", "iconName", "size", "isDisabled", "isLoading", "altName"]),
					i = u()(t, (t = n, n = r, i = i, E.includes(i) ? "btn-".concat(t, "-").concat(n, "-").concat(i) : null));
				return O().createElement(l, d({}, e, {
					className: i,
					disabled: o || a,
					title: s || r.replace(/-/g, " ")
				}), O().createElement("span", {
					className: "icon-".concat(r)
				}))
			}
			f.defaultProps = {
				className: null,
				iconType: t.generic,
				size: s.medium,
				isDisabled: !1,
				isLoading: !1,
				altName: ""
			}, f.propTypes = {
				className: n().string,
				iconType: n().oneOf(r),
				iconName: n().string.isRequired,
				size: n().oneOf(E),
				isDisabled: n().bool,
				isLoading: n().bool,
				altName: n().string
			}, f.iconTypes = t, f.sizes = s;
			var m = f;

			function S(e) {
				var t = e.type,
					n = e.onChange,
					r = e.current,
					i = e.total,
					o = e.hasNext,
					a = t === c.Extended,
					s = 1 === r,
					e = r === i || !o,
					t = 1 < i ? "".concat(r, " / ").concat(i) : r;
				return O().createElement("div", {
					className: "pager-holder"
				}, O().createElement("ul", {
					className: "pager"
				}, a && O().createElement("li", {
					className: "first"
				}, O().createElement(m, {
					iconName: "first-page",
					size: m.sizes.small,
					onClick: function() {
						return n(1)
					},
					isDisabled: s
				})), O().createElement("li", {
					className: "pager-prev"
				}, O().createElement(m, {
					iconName: "left",
					size: m.sizes.small,
					onClick: function() {
						return 1 < r && n(r - 1)
					},
					isDisabled: s
				})), O().createElement("li", {
					className: "pager-cur"
				}, O().createElement("span", {
					id: "rbx-current-page"
				}, t)), O().createElement("li", {
					className: "pager-next"
				}, O().createElement(m, {
					iconName: "right",
					size: m.sizes.small,
					onClick: function() {
						return (r < i || o) && n(r + 1)
					},
					isDisabled: e
				})), a && O().createElement("li", {
					className: "last"
				}, O().createElement(m, {
					iconName: "last-page",
					size: m.sizes.small,
					onClick: function() {
						return n(i)
					},
					isDisabled: e
				}))))
			}
			S.defaultProps = {
				type: c.Basic,
				total: 0,
				hasNext: !1
			}, S.propTypes = {
				type: n().oneOf(Object.values(c)),
				onChange: n().func.isRequired,
				current: n().number.isRequired,
				total: n().number,
				hasNext: n().bool
			}, S.Types = c;
			var P, w, U, _ = S;

			function C() {
				return document.getElementById(g)
			}

			function y(t) {
				return F(void 0, void 0, Promise, function() {
					return H(this, function(e) {
						switch (e.label) {
							case 0:
								return e.trys.push([0, 2, , 3]), [4, h.httpService.get(G.url.getSubscriptions, B({}, t))];
							case 1:
								return [2, e.sent().data];
							case 2:
								return e.sent(), [2, {
									subscriptionProductsInfo: []
								}];
							case 3:
								return [2]
						}
					})
				})
			}

			function A(t) {
				return F(void 0, void 0, Promise, function() {
					return H(this, function(e) {
						switch (e.label) {
							case 0:
								return e.trys.push([0, 2, , 3]), [4, h.httpService.get(G.url.getSubscriptionStatuses(t.subscriptionProductTargetKeys))];
							case 1:
								return [2, e.sent().data];
							case 2:
								return e.sent(), [2, {
									subscriptionStatuses: {}
								}];
							case 3:
								return [2]
						}
					})
				})
			}

			function T(t) {
				return F(void 0, void 0, Promise, function() {
					return H(this, function(e) {
						switch (e.label) {
							case 0:
								return [4, h.httpService.post(G.url.purchaseSubscription(t.targetKey), B({}, t))];
							case 1:
								return [2, e.sent().data]
						}
					})
				})
			}(r = {}).INVALID = "Invalid", r.DEVELOPER_SUBSCRIPTION_PRODUCT = "DeveloperSubscriptionProduct", (t = {}).INVALID = "Invalid", t.MONTH = "Month", t.YEAR = "Year", (s = {}).INVALID = "Invalid", s.DESKTOP = "Desktop", s.APPLE = "Apple", s.GOOGLE = "Google", (n = P = P || {})[n.INVALID = 0] = "INVALID", n[n.DEVELOPER_SUBSCRIPTION_PRODUCT = 1] = "DEVELOPER_SUBSCRIPTION_PRODUCT", (r = w = w || {})[r.INVALID = 0] = "INVALID", r[r.UNKNOWN = 1] = "UNKNOWN", r[r.INVALID_PRODUCT = 2] = "INVALID_PRODUCT", r[r.PRODUCT_NOT_FOR_SALE = 3] = "PRODUCT_NOT_FOR_SALE", r[r.USER_ALREADY_SUBSCRIBED = 4] = "USER_ALREADY_SUBSCRIBED", r[r.SAVED_CC_REQUIRED = 5] = "SAVED_CC_REQUIRED", r[r.VPC_REQUIRED = 6] = "VPC_REQUIRED", r[r.VPC_PENDING_APPROVAL = 7] = "VPC_PENDING_APPROVAL", r[r.INVALID_INPUT = 8] = "INVALID_INPUT", r[r.PURCHASE_PLATFORM_NOT_SUPPORTED = 9] = "PURCHASE_PLATFORM_NOT_SUPPORTED", r[r.INVALID_SALE_LOCATION = 10] = "INVALID_SALE_LOCATION", r[r.USER_HAS_SPEND_LIMIT_SET = 11] = "USER_HAS_SPEND_LIMIT_SET", r[r.RESTRICTED_USER = 12] = "RESTRICTED_USER", r[r.UNSUPPORTED_LOCALE = 13] = "UNSUPPORTED_LOCALE", r[r.UNAUTHORIZED = 14] = "UNAUTHORIZED", r[r.EXCEED_PARENTAL_SPEND_LIMIT = 15] = "EXCEED_PARENTAL_SPEND_LIMIT", (t = U = U || {}).INVALID = "Invalid", t.STRIPE = "Stripe", t.APPLEAPPSTORE = "AppleAppStore", t.GOOGLEPLAYSTORE = "GooglePlayStore", t.CREDITBALANCE = "CreditBalance";
			var M = {
					HeadingSubscriptions: "Heading.Subscriptions",
					LabelPerMonth: "Text.PerMonth",
					ActionReportSubscription: "Action.ReportSubscription",
					HeadingGetSubscription: "Heading.GetSubscription",
					ActionSubscribe: "Action.Subscribe",
					ActionSubscribeWithRobloxCredit: "Action.SubscribeWithRobloxCredit",
					ActionSubscribeWithCreditDebitCard: "Action.SubscribeWithCreditDebitCard",
					ActionSubscribePayAnotherWay: "Action.SubscribePayAnotherWay",
					MessageMonthlyCadenceDisclaimer: "Text.DisclaimerMonthly",
					MessageNoSubscriptionsAvailable: "Message.NoSubscriptionsAvailable",
					LabelSubscribed: "Text.Subscribed",
					HeadingAddPaymentMethod: "Heading.AddPaymentMethod",
					MessageStripeEmailInputSubText: "Message.StripeEmailInputSubText",
					MessageStripeAddPaymentMethodDisclosure: "Message.StripeAddPaymentMethodDisclosure",
					ErrorStripeCardDeclined: "Error.StripeCardDeclined",
					ErrorStripeCardExpired: "Error.StripeCardExpired",
					ErrorStripeIncorrectCVC: "Error.StripeIncorrectCVC",
					ErrorStripeSaveCardGeneralError: "Error.StripeSaveCardGeneralError",
					ErrorGenericError: "Error.GenericError",
					ErrorStripeSavedCardSomethingWentWrong: "Error.StripeSavedCardSomethingWentWrong",
					HeadingStripeFormAddPaymentMethod: "Heading.StripeFormAddPaymentMethodNote",
					HeadingBillingEmail: "Heading.BillingEmail",
					HeadingBillingAddress: "Heading.BillingAddress",
					HeadingParentPermissionNeeded: "Heading.ParentPermissionNeeded",
					MessageParentPermissionVPC: "Message.ParentPermissionVPC",
					ActionParentOrGuardian: "Action.ParentOrGuardian",
					HeadingCannotSubscribe: "Heading.CannotSubscribe",
					MessageMonthlySpendRestrictionsSubscriptionUnavailable: "Message.MonthlySpendRestrictions.SubscriptionUnavailable",
					MessageMonthlySpendLimitExceed: "Message.MonthlySpendRestrictionsMonthlyLimitExceed",
					MessageSubscriptionNotAvailableInCountry: "Message.SubscriptionNotAvailableInCountry",
					MessageSubscriptionNotAvailableAgeRestriction: "Message.SubscriptionNotAvailableExperienceOver17",
					MessageCannotPlayInExperience: "Message.CannotPlayInExperience",
					ErrorParentalRestriction: "Error.ParentalRestriction",
					MessageReportSubmitted: "Message.ReportSubmitted",
					ActionSeeMore: "Action.SeeMore"
				},
				L = ((s = {})[w.INVALID] = M.ErrorGenericError, s[w.INVALID_INPUT] = M.ErrorGenericError, s[w.INVALID_PRODUCT] = M.ErrorGenericError, s[w.INVALID_SALE_LOCATION] = M.ErrorGenericError, s[w.PURCHASE_PLATFORM_NOT_SUPPORTED] = M.ErrorGenericError, s[w.RESTRICTED_USER] = M.MessageCannotPlayInExperience, s[w.SAVED_CC_REQUIRED] = M.ErrorGenericError, s[w.UNKNOWN] = M.ErrorGenericError, s[w.UNSUPPORTED_LOCALE] = M.MessageSubscriptionNotAvailableInCountry, s[w.USER_ALREADY_SUBSCRIBED] = M.ErrorGenericError, s[w.USER_HAS_SPEND_LIMIT_SET] = M.MessageMonthlySpendRestrictionsSubscriptionUnavailable, s[w.EXCEED_PARENTAL_SPEND_LIMIT] = M.MessageMonthlySpendLimitExceed, s[w.VPC_PENDING_APPROVAL] = M.ErrorGenericError, s[w.VPC_REQUIRED] = M.MessageParentPermissionVPC, s),
				g = "game-detail-meta-data",
				N = function() {
					var e, r = (null === (e = C()) || void 0 === e ? void 0 : e.dataset) || {};
					return Object.keys(r).reduce(function(e, t) {
						var n = r[t].toLowerCase();
						return e[t] = "true" === n || "false" !== n && r[t], e
					}, {})
				},
				k = D.EnvironmentUrls.apiGatewayUrl,
				x = D.EnvironmentUrls.premiumFeaturesApi,
				G = {
					url: {
						getSubscriptions: {
							url: k + "/v1/subscriptions/active-subscription-products",
							withCredentials: !0
						},
						getSubscriptionStatuses: function(e) {
							return {
								url: k + "/v1/subscriptions/statuses?" + e.map(function(e) {
									return "subscriptionProductTargetKeys=" + e
								}).join("&"),
								withCredentials: !0
							}
						},
						getSubscriptionMetadata: {
							url: k + "/v1/subscriptions/metadata",
							withCredentials: !0
						},
						getSubscriptionPaymentMethods: function(e) {
							return {
								url: k + "/v1/subscriptions/payment-methods/" + e,
								withCredentials: !0
							}
						},
						purchaseSubscription: function(e) {
							return {
								url: k + "/v1/subscriptions/prepare-purchase/" + e + "/web",
								withCredentials: !0
							}
						},
						getUserPremiumSubscription: function(e) {
							return {
								url: x + "/v1/users/" + e + "/subscriptions/details",
								withCredentials: !0
							}
						},
						getUserSubscriptions: {
							url: k + "/v1/subscriptions/user",
							withCredentials: !0
						},
						cancelSubscription: function(e) {
							return {
								url: k + "/v1/subscriptions/" + e + "/cancel",
								withCredentials: !0
							}
						},
						cancelPremiumSubscription: function(e) {
							return {
								url: x + "/v1/users/" + e + "/subscriptions/cancel",
								withCredentials: !0
							}
						},
						dismissSubscriptionNotification: function(e) {
							return {
								url: k + "/v1/subscriptions/" + e + "/dismiss-notification",
								withCredentials: !0
							}
						},
						updateSubscriptionPaymentProfile: function(e) {
							return {
								withCredentials: !0,
								url: D.EnvironmentUrls.apiGatewayUrl + "/v1/subscriptions/" + e + "/payment-methods"
							}
						},
						verifyPaymentProfileCreation: function(e) {
							return {
								url: k + "/payments-gateway/v1/payment-profile/by-provider-id/" + U.STRIPE + "/" + e,
								withCredentials: !0
							}
						},
						getSavedPaymentProfiles: function() {
							return {
								withCredentials: !0,
								url: D.EnvironmentUrls.apiGatewayUrl + "/payments-gateway/v1/payment-profiles"
							}
						},
						getPaymentProfileSetupUrlConfig: function() {
							return {
								withCredentials: !0,
								url: D.EnvironmentUrls.apiGatewayUrl + "/payments-gateway/v1/payment-profile/prepare"
							}
						},
						getStripeEnabledForUserConfig: function() {
							return {
								withCredentials: !0,
								url: D.EnvironmentUrls.apiGatewayUrl + "/payments-gateway/v1/stripe/enabled-for-user"
							}
						},
						updatePaymentProfile: function(e) {
							return {
								url: k + "/payments-gateway/v1/payment-profile/" + e,
								withCredentials: !0
							}
						},
						submitSafetyEvent: {
							url: k + "/abuse-reporting/v1/safety-event",
							retryable: !0,
							withCredentials: !0
						},
						getUserCreditBalance: function() {
							return {
								url: k + "/credit-balance/v1/get-credit-balance",
								withCredentials: !0
							}
						},
						getUserBirthdateUrlConfig: function() {
							return {
								withCredentials: !0,
								url: D.EnvironmentUrls.usersApi + "/v1/birthdate"
							}
						}
					}
				},
				B = function() {
					return (B = Object.assign || function(e) {
						for (var t, n = 1, r = arguments.length; n < r; n++)
							for (var i in t = arguments[n]) Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
						return e
					}).apply(this, arguments)
				},
				F = function(e, a, s, c) {
					return new(s = s || Promise)(function(n, t) {
						function r(e) {
							try {
								o(c.next(e))
							} catch (e) {
								t(e)
							}
						}

						function i(e) {
							try {
								o(c.throw(e))
							} catch (e) {
								t(e)
							}
						}

						function o(e) {
							var t;
							e.done ? n(e.value) : ((t = e.value) instanceof s ? t : new s(function(e) {
								e(t)
							})).then(r, i)
						}
						o((c = c.apply(e, a || [])).next())
					})
				},
				H = function(n, r) {
					var i, o, a, s = {
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
								for (; s;) try {
									if (i = 1, o && (a = 2 & t[0] ? o.return : t[0] ? o.throw || ((a = o.return) && a.call(o), 0) : o.next) && !(a = a.call(o, t[1])).done) return a;
									switch (o = 0, a && (t = [2 & t[0], a.value]), t[0]) {
										case 0:
										case 1:
											a = t;
											break;
										case 4:
											return s.label++, {
												value: t[1],
												done: !1
											};
										case 5:
											s.label++, o = t[1], t = [0];
											continue;
										case 7:
											t = s.ops.pop(), s.trys.pop();
											continue;
										default:
											if (!(a = 0 < (a = s.trys).length && a[a.length - 1]) && (6 === t[0] || 2 === t[0])) {
												s = 0;
												continue
											}
											if (3 === t[0] && (!a || t[1] > a[0] && t[1] < a[3])) {
												s.label = t[1];
												break
											}
											if (6 === t[0] && s.label < a[1]) {
												s.label = a[1], a = t;
												break
											}
											if (a && s.label < a[2]) {
												s.label = a[2], s.ops.push(t);
												break
											}
											a[2] && s.ops.pop(), s.trys.pop();
											continue
									}
									t = r.call(n, s)
								} catch (e) {
									t = [6, e], o = 0
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
				V = ReactStyleGuide,
				Y = window.EventTracker ? EventTracker : {
					fireEvent: console.log,
					start: console.log,
					endSuccess: console.log,
					endCancel: console.log,
					endFailure: console.log
				},
				j = RobloxThumbnails,
				W = h.urlService.getAbsoluteUrl("/parents/account-setup?consentType=SavePaymentMethods"),
				K = h.urlService.getAbsoluteUrl("/upgrades/redeem?ap=0&subscriptionTargetKey="),
				z = (h.urlService.getAbsoluteUrl("/upgrades/checkout/success"), h.urlService.getAbsoluteUrl("/redeem"), h.urlService.getAbsoluteUrl("/giftcards"), (0, I.createContext)(null)),
				X = function() {
					var e = (0, I.useContext)(z);
					if (null === e) throw new Error("System feedback context was not provided in the current scope!");
					return e
				};
			(n = (0, I.createContext)({
				openModal: function() {
					return {}
				},
				closeModal: function() {
					return {}
				},
				updateModalContent: function(e, t, n, r, i) {
					return {}
				}
			})).displayName = "singleButtonModal";
			var q, Q = n;

			function J() {
				return (0, I.useContext)(Q)
			}

			function Z(e) {
				void 0 === e && (e = {
					baseUrl: ""
				}), this.configuration = e, this.baseUrl = this.configuration.baseUrl
			}

			function $(e) {
				void 0 === e && (e = new Z), this.configuration = e, this.baseUrl = e.baseUrl
			}(r = q = q || {}).UPDATE_PAGE = "UPDATE_PAGE", r.LOAD_SUBSCRIPTIONS = "LOAD_SUBSCRIPTIONS", r.OPEN_STRIPE_MODAL = "OPEN_STRIPE_MODAL", r.CLOSE_STRIPE_MODAL = "CLOSE_STRIPE_MODAL", r.SEND_STORE_PAGE_LOAD_EVENT = "SEND_STORE_PAGE_LOAD_EVENT", $.prototype.sendEvent = function(e) {
				var t = e.localTime,
					n = e.target,
					r = e.eventType,
					i = e.context,
					o = e.additionalProperties,
					a = e.currentUrl,
					s = e.guestId,
					e = e.sessionId,
					t = t.toISOString(),
					c = new URL("".concat(this.baseUrl, "/pe"));
				return c.searchParams.append("t", n), c.searchParams.append("evt", r), c.searchParams.append("ctx", i), c.searchParams.append("lt", t), c.searchParams.append("url", a || window.location.href), void 0 !== s && c.searchParams.append("gid", s), void 0 !== e && c.searchParams.append("sid", e), void 0 !== o && Object.keys(o).forEach(function(e) {
					c.searchParams.append(e, (null !== (e = o[e]) && void 0 !== e ? e : "").toString())
				}), fetch(c.href, {
					credentials: "same-origin"
				})
			}, $.prototype.sendEventViaImg = function(e, t) {
				var n = e.localTime,
					r = e.target,
					i = e.eventType,
					o = e.context,
					a = e.additionalProperties,
					s = e.currentUrl,
					c = e.guestId,
					e = e.sessionId,
					n = n.toISOString(),
					u = new URL("".concat(this.baseUrl, "/e.png"));
				u.searchParams.append("t", r), u.searchParams.append("evt", i), u.searchParams.append("ctx", o), u.searchParams.append("lt", n), u.searchParams.append("url", s || window.location.href), void 0 !== c && u.searchParams.append("gid", c), void 0 !== e && u.searchParams.append("sid", e), void 0 !== a && Object.keys(a).forEach(function(e) {
					u.searchParams.append(e, (null !== (e = a[e]) && void 0 !== e ? e : "").toString())
				});
				e = new Image;
				return e.src = u.href, e.onload = function() {
					void 0 !== t && t(!0)
				}, e.onerror = function(e) {
					void 0 !== t && t(!1), console.error(e)
				}, e
			}, t = $;
			var ee, te, ne, re = function() {
					return (re = Object.assign || function(e) {
						for (var t, n = 1, r = arguments.length; n < r; n++)
							for (var i in t = arguments[n]) Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
						return e
					}).apply(this, arguments)
				},
				s = D.EnvironmentUrls.domain;
			(n = ee = ee || {}).IMPRESSION = "Impression", n.USER_INPUT = "UserInput", n.VIEW_SHOWN = "ViewShown", (r = te = te || {}).SUBSCRIBE = "Subscribe", r.OPEN_PURCHASE_MODAL = "OpenPurchaseModal", r.CANCEL = "Cancel", r.I_AM_A_PARENT_OR_GUARDIAN_BUTTON = "IAmAParentOrGuardianButton", r.SAVE_NEW_PAYMENT_METHOD = "SaveNewPaymentMethod", (n = ne = ne || {}).GAME_DETAILS = "GameDetails", n.PURCHASE_MODAL = "PurchaseModal", n.PARENT_PERMISSION_NEEDED_MODAL = "ParentPermissionNeededModal", n.VPC_NEW_PAYMENT_MODAL = "VPCNewPaymentModal", n.DEVSUB_CARD = "DevSubCard", n.STRIPE_CHECKOUT = "StripeCheckout", n.CREDIT_BALANCE_CHECKOUT = "CreditBalanceCheckout", n.ERROR = "Error";
			var ie = new t(new Z({
					baseUrl: "https://ecsv2." + s + "/www"
				})),
				oe = ((r = {})[ee.USER_INPUT] = ((n = {})[ne.PURCHASE_MODAL] = ((s = {})[te.SUBSCRIBE] = "GameSubscriptionsPurchaseModalSubscribeClicked", s[te.CANCEL] = "GameSubscriptionsPurchaseModalCancelClicked", s), n[ne.DEVSUB_CARD] = ((s = {})[te.OPEN_PURCHASE_MODAL] = "GameSubscriptionsDevSubCardOpenPurchaseModalClicked", s), n), r),
				ae = {
					sendExperienceSubscriptionEvent: function(e, t, n, r, i) {
						if (e) {
							var t = {
								purchaseFlowUuid: e,
								purchaseFlowEventType: t,
								viewName: n
							};
							i && (t.inputType = i), t.subscriptionProviderId = r.subscriptionProviderId;
							var n = r.subscriptionTargetKey.split("-"),
								i = n[0],
								n = n[1];
							t.subscriptionProductTypePrefix = i, t.subscriptionId = n, t.localizedSubscriptionName = r.name, t.localizedSubscriptionDescription = r.description, t.priceInCentsUsd = r.priceTier, t.displayPrice = r.displayPrice;
							i = {
								target: "www",
								localTime: new Date,
								eventType: "SubscriptionPurchase",
								context: "",
								additionalProperties: re({}, t)
							};
							return (n = t).purchaseFlowEventType && n.viewName && n.inputType && (r = n.purchaseFlowEventType, t = n.viewName, n = n.inputType, (n = null === (t = null === (r = oe[r]) || void 0 === r ? void 0 : r[t]) || void 0 === t ? void 0 : t[n]) && (0, Y.fireEvent)(n)), ie.sendEventViaImg(i)
						}
						return null
					}
				},
				se = function() {
					return (se = Object.assign || function(e) {
						for (var t, n = 1, r = arguments.length; n < r; n++)
							for (var i in t = arguments[n]) Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
						return e
					}).apply(this, arguments)
				},
				ce = {
					subscriptions: [],
					subscriptionsPerPage: null !== (n = b.deviceMeta.getDeviceMeta()) && void 0 !== n && n.isUniversalApp ? 8 : 4,
					subscriptionsInPage: [],
					currentPage: 1,
					totalPages: 0,
					pagesSeen: new Set,
					showPagination: !1,
					stripeClientSecret: "",
					showStripeModal: !1,
					purchaseFlowUuid: h.uuidService.generateRandomUuid(),
					selectedSubscription: null,
					pathName: function() {
						var e = window.location.pathname;
						D.Endpoints && D.Endpoints.supportLocalizedUrls && (e = D.Endpoints.removeUrlLocale(e));
						e = e.substring(1);
						return e.startsWith("games/store-section") ? e : e + "#!/store"
					}()
				};

			function ue(t) {
				t.subscriptionsInPage.forEach(function(e) {
					ae.sendExperienceSubscriptionEvent(t.purchaseFlowUuid, ee.IMPRESSION, ne.GAME_DETAILS, e)
				})
			}

			function le(e, t) {
				var n = (t - 1) * e.subscriptionsPerPage;
				return e.subscriptions.slice(n, Math.min(t * e.subscriptionsPerPage, e.subscriptions.length))
			}

			function de(e, t) {
				switch (t.type) {
					case q.UPDATE_PAGE:
						var n = se(se({}, e), {
							subscriptionsInPage: le(e, t.newPage),
							currentPage: t.newPage
						});
						return e.pagesSeen.has(t.newPage) || ue(n), se(se({}, n), {
							pagesSeen: e.pagesSeen.add(t.newPage)
						});
					case q.LOAD_SUBSCRIPTIONS:
						var r = Math.ceil(t.subscriptions.length / e.subscriptionsPerPage),
							n = se(se({}, e), {
								totalPages: r,
								subscriptions: t.subscriptions,
								showPagination: 1 < r
							});
						return se(se({}, n), {
							subscriptionsInPage: le(n, 1)
						});
					case q.OPEN_STRIPE_MODAL:
						return se(se({}, e), {
							showStripeModal: !0,
							stripeClientSecret: t.clientSecret,
							selectedSubscription: t.subscription
						});
					case q.CLOSE_STRIPE_MODAL:
						return se(se({}, e), {
							showStripeModal: !1
						});
					case q.SEND_STORE_PAGE_LOAD_EVENT:
						return e.pagesSeen.has(e.currentPage) ? e : (ue(e), se(se({}, e), {
							pagesSeen: e.pagesSeen.add(e.currentPage)
						}));
					default:
						return e
				}
			}
			var pe = (0, I.createContext)(null);

			function Ee() {
				var e = (0, I.useContext)(pe);
				if (null == e) throw new Error("GameSubscriptionsContext was not provided in the current scope.");
				return e
			}

			function fe(i, o, a, s, c, u, l) {
				return he(void 0, void 0, Promise, function() {
					var n, r;
					return ve(this, function(e) {
						switch (e.label) {
							case 0:
								return e.trys.push([0, 2, , 3]), [4, T({
									targetKey: s.subscriptionTargetKey,
									stripeCancelUrlPathName: u,
									paymentProvider: l
								})];
							case 1:
								return r = e.sent(), l === U.STRIPE && r.providerPayload ? (n = JSON.parse(r.providerPayload)).CheckoutUrl && (ae.sendExperienceSubscriptionEvent(c, ee.VIEW_SHOWN, ne.STRIPE_CHECKOUT, s, te.SUBSCRIBE), a(), window.location.href = n.CheckoutUrl) : l === U.CREDITBALANCE && r.providerPayload ? (ae.sendExperienceSubscriptionEvent(c, ee.VIEW_SHOWN, ne.CREDIT_BALANCE_CHECKOUT, s, te.SUBSCRIBE), a(), window.location.href = (t = s.subscriptionTargetKey, "" + K + t)) : i(), [3, 3];
							case 2:
								return r = e.sent(), 500 === (r = r).status && i(), o(r), [3, 3];
							case 3:
								return [2]
						}
						var t
					})
				})
			}

			function me(e) {
				var t = e.title,
					n = e.show,
					r = e.assetId,
					i = e.provider,
					o = e.name,
					a = e.displayPrice,
					s = e.description,
					c = e.isForSale,
					u = e.cadence,
					l = e.cadenceDisclaimer,
					d = e.closeModal,
					p = e.primaryPaymentProviderType,
					E = e.allPaymentProviderTypes,
					f = e.subscription,
					m = X().systemFeedbackService,
					S = J(),
					b = S.updateModalContent,
					h = S.openModal,
					v = S.closeModal,
					e = (C = (0, I.useState)(!0))[0],
					P = C[1],
					_ = (0, R.useTranslation)().translate,
					C = (S = Ee()).state,
					y = S.dispatch,
					A = C.purchaseFlowUuid,
					T = C.pathName,
					g = 1 < E.length,
					D = (0, I.useCallback)(function() {
						ae.sendExperienceSubscriptionEvent(A, ee.USER_INPUT, ne.PARENT_PERMISSION_NEEDED_MODAL, f, te.I_AM_A_PARENT_OR_GUARDIAN_BUTTON), window.location.href = W
					}, [A, f]),
					N = (0, I.useCallback)(function(e, t) {
						ae.sendExperienceSubscriptionEvent(A, ee.USER_INPUT, ne.PURCHASE_MODAL, f, te.SUBSCRIBE), e.stopPropagation(), P(!0), fe(function() {
							m.warning(_(M.ErrorGenericError)), d()
						}, function(e) {
							var t, e = e.data,
								n = e.clientHint,
								r = e.errorCode;
							switch (P(!1), r) {
								case w.SAVED_CC_REQUIRED:
									d(), n ? y({
										type: q.OPEN_STRIPE_MODAL,
										clientSecret: n,
										subscription: f
									}) : m.warning(_(M.ErrorGenericError));
									break;
								case w.VPC_REQUIRED:
									ae.sendExperienceSubscriptionEvent(A, ee.VIEW_SHOWN, ne.PARENT_PERMISSION_NEEDED_MODAL, f, te.SUBSCRIBE), b(_(M.HeadingParentPermissionNeeded), _(M.MessageParentPermissionVPC), _(M.ActionParentOrGuardian), !1, function() {
										return D
									}), d(), h();
									break;
								case w.EXCEED_PARENTAL_SPEND_LIMIT:
								case w.USER_HAS_SPEND_LIMIT_SET:
								case w.RESTRICTED_USER:
								case w.UNSUPPORTED_LOCALE:
									b(_(M.HeadingCannotSubscribe), null !== (t = _(null !== (t = L[r]) && void 0 !== t ? t : "")) && void 0 !== t ? t : _(M.ErrorGenericError), _("Action.OK"), !0, function() {
										return v
									}), d(), h();
									break;
								default:
									m.warning(_(M.ErrorGenericError))
							}
							d()
						}, function() {
							return P(!1)
						}, f, A, T, t)
					}, [v, d, y, D, h, T, A, f, m, _, b]);
				return (0, I.useEffect)(function() {
					p && P(!1)
				}, [p]), C = (0, I.useMemo)(function() {
					if (!c) return O().createElement(V.Button, {
						width: V.Button.widths.full,
						size: V.Button.sizes.large,
						onClick: function(e) {
							return N(e, p)
						},
						isDisabled: !0
					}, _(M.LabelSubscribed));
					if (!g) return O().createElement(V.Button, {
						width: V.Button.widths.full,
						size: V.Button.sizes.large,
						onClick: function(e) {
							return N(e, U.STRIPE)
						}
					}, _(M.ActionSubscribe));
					var e = M.ActionSubscribeWithCreditDebitCard,
						t = M.ActionSubscribePayAnotherWay,
						n = E[1];
					return p === U.CREDITBALANCE && (e = M.ActionSubscribeWithRobloxCredit), O().createElement("div", null, O().createElement(V.Button, {
						width: V.Button.widths.full,
						size: V.Button.sizes.large,
						onClick: function(e) {
							return N(e, p)
						}
					}, _(e) || p), O().createElement(V.Button, {
						width: V.Button.widths.full,
						size: V.Button.sizes.large,
						className: "btn-secondary-lg btn-secondary-margin",
						onClick: function(e) {
							return N(e, n)
						}
					}, _(t) || n))
				}, [c, g, E, p, _, N]), O().createElement(V.Modal, {
					show: n,
					onHide: d,
					size: "md",
					className: "rbx-subscription-modal",
					centered: !0,
					scrollable: !1
				}, O().createElement(V.Modal.Header, {
					title: t,
					showCloseButton: !0,
					onClose: d
				}), O().createElement(V.Modal.Body, null, O().createElement("div", {
					className: "modal-body-sub-info"
				}, O().createElement("div", {
					className: "thumbnail-container"
				}, O().createElement(j.Thumbnail2d, {
					type: j.ThumbnailTypes.assetThumbnail,
					targetId: r,
					altName: o,
					imgClassName: "subscription-thumbnail",
					containerClass: "subscription-thumbnail"
				})), O().createElement("span", {
					className: "font-header-2 text-emphasis sub-info sub-text-normal"
				}, i), O().createElement("span", {
					className: "font-header-1 text-emphasis sub-info sub-text-title"
				}, o), O().createElement("span", {
					className: "sub-info"
				}, O().createElement("span", {
					className: "font-header-2 text-emphasis sub-text-normal"
				}, a), O().createElement("span", {
					className: "font-header-2 text-default sub-text-normal"
				}, u)), O().createElement("span", {
					className: "font-header-2 text-default sub-info sub-text-normal"
				}, l)), O().createElement("div", {
					className: "font-header-2 text-default description sub-info sub-text-normal"
				}, s)), O().createElement(V.Modal.Footer, {
					className: g ? "modal-footer-2-button" : ""
				}, e ? O().createElement("span", {
					className: "spinner spinner-default"
				}) : C))
			}

			function Se(t) {
				return Pe(void 0, void 0, Promise, function() {
					return _e(this, function(e) {
						switch (e.label) {
							case 0:
								return [4, h.httpService.post(G.url.submitSafetyEvent, {
									safetyEvent: {
										eventTime: Date.now(),
										idempotencyKey: "subscriptions/" + t.subscriptionTargetKey + "/" + t.reporterId,
										tags: {
											SUBMITTER_USER_ID: {
												valueList: [{
													data: t.reporterId
												}]
											},
											REPORTED_ABUSE_VECTOR: {
												valueList: [{
													data: "subscriptions"
												}]
											},
											REPORT_TARGET_SUBSCRIPTION_TARGET_KEY: {
												valueList: [{
													data: t.subscriptionTargetKey
												}]
											},
											REPORT_TARGET_ASSET_ID: {
												valueList: [{
													data: t.imageAssetId
												}]
											},
											ENTRY_POINT: {
												valueList: [{
													data: "website"
												}]
											},
											REPORTED_ABUSE_CATEGORY: {
												valueList: [{
													data: "ABUSE_TYPE_OTHER"
												}]
											},
											REPORTER_COMMENT: {
												valueList: [{
													data: ""
												}]
											}
										}
									}
								})];
							case 1:
								return [2, e.sent().data.id]
						}
					})
				})
			}
			var be, he = function(e, a, s, c) {
					return new(s = s || Promise)(function(n, t) {
						function r(e) {
							try {
								o(c.next(e))
							} catch (e) {
								t(e)
							}
						}

						function i(e) {
							try {
								o(c.throw(e))
							} catch (e) {
								t(e)
							}
						}

						function o(e) {
							var t;
							e.done ? n(e.value) : ((t = e.value) instanceof s ? t : new s(function(e) {
								e(t)
							})).then(r, i)
						}
						o((c = c.apply(e, a || [])).next())
					})
				},
				ve = function(n, r) {
					var i, o, a, s = {
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
								for (; s;) try {
									if (i = 1, o && (a = 2 & t[0] ? o.return : t[0] ? o.throw || ((a = o.return) && a.call(o), 0) : o.next) && !(a = a.call(o, t[1])).done) return a;
									switch (o = 0, a && (t = [2 & t[0], a.value]), t[0]) {
										case 0:
										case 1:
											a = t;
											break;
										case 4:
											return s.label++, {
												value: t[1],
												done: !1
											};
										case 5:
											s.label++, o = t[1], t = [0];
											continue;
										case 7:
											t = s.ops.pop(), s.trys.pop();
											continue;
										default:
											if (!(a = 0 < (a = s.trys).length && a[a.length - 1]) && (6 === t[0] || 2 === t[0])) {
												s = 0;
												continue
											}
											if (3 === t[0] && (!a || t[1] > a[0] && t[1] < a[3])) {
												s.label = t[1];
												break
											}
											if (6 === t[0] && s.label < a[1]) {
												s.label = a[1], a = t;
												break
											}
											if (a && s.label < a[2]) {
												s.label = a[2], s.ops.push(t);
												break
											}
											a[2] && s.ops.pop(), s.trys.pop();
											continue
									}
									t = r.call(n, s)
								} catch (e) {
									t = [6, e], o = 0
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
				Pe = function(e, a, s, c) {
					return new(s = s || Promise)(function(n, t) {
						function r(e) {
							try {
								o(c.next(e))
							} catch (e) {
								t(e)
							}
						}

						function i(e) {
							try {
								o(c.throw(e))
							} catch (e) {
								t(e)
							}
						}

						function o(e) {
							var t;
							e.done ? n(e.value) : ((t = e.value) instanceof s ? t : new s(function(e) {
								e(t)
							})).then(r, i)
						}
						o((c = c.apply(e, a || [])).next())
					})
				},
				_e = function(n, r) {
					var i, o, a, s = {
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
								for (; s;) try {
									if (i = 1, o && (a = 2 & t[0] ? o.return : t[0] ? o.throw || ((a = o.return) && a.call(o), 0) : o.next) && !(a = a.call(o, t[1])).done) return a;
									switch (o = 0, a && (t = [2 & t[0], a.value]), t[0]) {
										case 0:
										case 1:
											a = t;
											break;
										case 4:
											return s.label++, {
												value: t[1],
												done: !1
											};
										case 5:
											s.label++, o = t[1], t = [0];
											continue;
										case 7:
											t = s.ops.pop(), s.trys.pop();
											continue;
										default:
											if (!(a = 0 < (a = s.trys).length && a[a.length - 1]) && (6 === t[0] || 2 === t[0])) {
												s = 0;
												continue
											}
											if (3 === t[0] && (!a || t[1] > a[0] && t[1] < a[3])) {
												s.label = t[1];
												break
											}
											if (6 === t[0] && s.label < a[1]) {
												s.label = a[1], a = t;
												break
											}
											if (a && s.label < a[2]) {
												s.label = a[2], s.ops.push(t);
												break
											}
											a[2] && s.ops.pop(), s.trys.pop();
											continue
									}
									t = r.call(n, s)
								} catch (e) {
									t = [6, e], o = 0
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
				r = D.EnvironmentUrls.domain;

			function Ce(e) {
				var n = e.subscription,
					t = (E = (0, I.useState)(!1))[0],
					r = E[1],
					i = (S = (0, I.useState)(""))[0],
					o = S[1],
					a = (b = (0, I.useState)([""]))[0],
					s = b[1],
					c = X().systemFeedbackService,
					u = (0, R.useTranslation)().translate,
					l = Ee().state.purchaseFlowUuid,
					d = n.name,
					p = n.subscriptionProviderName,
					e = n.description,
					E = n.displayPrice,
					f = n.iconImageAssetId,
					m = n.subscriptionTargetKey,
					S = n.isForSale,
					b = O().createElement(j.Thumbnail2d, {
						type: j.ThumbnailTypes.assetThumbnail,
						size: j.DefaultThumbnailSize,
						targetId: f,
						altName: d,
						imgClassName: "subscription-thumbnail",
						containerClass: "subscription-thumbnail-container-class"
					});
				return O().createElement(I.Fragment, null, O().createElement("div", {
					className: "subscription-card-item subscription-fc"
				}, O().createElement("div", {
					className: "subscription-fc"
				}, O().createElement("div", {
					className: "subscription-options-container"
				}, O().createElement(V.Popover, {
					id: "subscriptions-dropdown-menu",
					button: O().createElement(V.IconButton, {
						iconName: "more",
						size: V.IconButton.sizes.small,
						onClick: function() {}
					}),
					containerPadding: 20,
					trigger: "click",
					placement: "bottom"
				}, O().createElement("ul", {
					className: "dropdown-menu",
					role: "menu"
				}, O().createElement("li", null, O().createElement(V.Button, {
					className: "rbx-subscription-reports",
					variant: V.Button.variants.secondary,
					onClick: function() {
						return Se({
							subscriptionTargetKey: m,
							imageAssetId: f.toString(),
							reporterId: D.CurrentUser.userId
						}).then(function() {
							return c.success(u(M.MessageReportSubmitted))
						}).catch(function() {
							return c.warning(u(M.ErrorGenericError))
						})
					}
				}, u(M.ActionReportSubscription)))))), O().createElement("div", {
					className: "subscription-fr"
				}, O().createElement("div", {
					className: "subscription-thumbnail-container"
				}, b), O().createElement("div", {
					className: "subscription-information"
				}, O().createElement("span", {
					className: "font-header-2 subscription-name"
				}, d), O().createElement("div", {
					className: "subscription-description-container"
				}, O().createElement("span", {
					className: "font-body subscription-description"
				}, e)), O().createElement("button", {
					className: "font-header-2 subscription-see-more",
					type: "button",
					onClick: function() {
						ae.sendExperienceSubscriptionEvent(l, ee.USER_INPUT, ne.DEVSUB_CARD, n, te.OPEN_PURCHASE_MODAL), r(!0)
					}
				}, u(M.ActionSeeMore) || "See More")))), O().createElement(V.Button, {
					width: V.Button.widths.full,
					isDisabled: !S,
					onClick: function() {
						var t;
						ae.sendExperienceSubscriptionEvent(l, ee.USER_INPUT, ne.DEVSUB_CARD, n, te.OPEN_PURCHASE_MODAL), t = n.subscriptionTargetKey, F(void 0, void 0, Promise, function() {
							return H(this, function(e) {
								switch (e.label) {
									case 0:
										return [4, h.httpService.get(G.url.getSubscriptionPaymentMethods(t))];
									case 1:
										return [2, e.sent().data]
								}
							})
						}).then(function(e) {
							o(e.primaryPaymentProviderType), s(e.allPaymentProviderTypes)
						}).catch(function() {
							(0, Y.fireEvent)(Ne.GET_PAYMENT_METHODS_FAILED), o(U.STRIPE), s([U.STRIPE])
						}), r(!0)
					},
					className: "subscription-buy-button subscription-fr"
				}, S ? O().createElement(I.Fragment, null, O().createElement("p", {
					className: "subscription-price"
				}, E), O().createElement("p", {
					className: "subscription-cadence"
				}, u(M.LabelPerMonth))) : O().createElement("div", {
					className: "text-disabled"
				}, u(M.LabelSubscribed)))), O().createElement(me, {
					title: u(M.HeadingGetSubscription),
					show: t,
					assetId: f,
					provider: p,
					name: d,
					displayPrice: E,
					description: e,
					isForSale: S,
					cadence: u(M.LabelPerMonth),
					cadenceDisclaimer: u(M.MessageMonthlyCadenceDisclaimer),
					closeModal: function() {
						return r(!1)
					},
					primaryPaymentProviderType: i,
					allPaymentProviderTypes: a,
					subscription: n
				}))
			}

			function ye(e) {
				var t = e.subscriptions,
					e = (0, R.useTranslation)().translate;
				return t ? 0 === t.length ? O().createElement("p", {
					className: "section-content-off"
				}, e(M.MessageNoSubscriptionsAvailable)) : O().createElement("div", {
					className: (void 0 !== t && 1 < t.length ? "card-list" : "") + " card-spacing-bottom"
				}, void 0 !== t && t.map(function(e) {
					return O().createElement(Ce, {
						key: e.name,
						subscription: e
					})
				})) : O().createElement(V.Loading, null)
			}

			function Ae() {
				return D.EnvironmentUrls.websiteUrl.includes("sitetest1") ? "pk_test_51LNM0XG5RADBkfjhYJlpADA2ArzWIh7gTWTodYNbpEzSiT55dul3VJhaBIVHL0CNyO0gECOz1vPnWArAkjwQ8NBO00Cdf2PxED" : D.EnvironmentUrls.websiteUrl.includes("sitetest3") ? "pk_test_51LNOeQHDRNiW7vlLcKH8TGCpJ7zhaidLdSegE22GCuvQbVUX2xDiGJY6WYaldYyo6qgVxmy1SnSVpSdaqyjfqclU00NQwWntIe" : "pk_live_51LKpO9C8tJWGhK4HEHtny9Dg7xXiQJ1i349cq6KBDusbl8bRHO7QmCKKhX18LPjSirMNTvj3tesq6mhIQuPioeAd0062ZCgoF3"
			}

			function Te(e) {
				return {
					clientSecret: e,
					appearance: {
						theme: document.body.classList.contains("dark-theme") ? "night" : "stripe",
						labels: "above",
						rules: {
							".Input": {
								backgroundColor: document.body.classList.contains("dark-theme") ? "black" : "white"
							}
						}
					}
				}
			}

			function ge(e) {
				var e = e.errorCode,
					t = (0, R.useTranslation)().translate,
					n = "";
				switch (e) {
					case Re:
						n = t(M.ErrorStripeIncorrectCVC);
						break;
					case Ue:
						n = t(M.ErrorStripeCardExpired);
						break;
					default:
						return null
				}
				return O().createElement("div", {
					className: "alert-warning small-oneline form-error-banner"
				}, n)
			}

			function De(e) {
				var t = e.onFormStatusChange,
					n = e.inputEmail,
					r = e.setInputEmail,
					i = e.stripeErrorCode,
					o = e.elements,
					a = (f = (0, I.useState)(!1))[0],
					s = f[1],
					e = (0, R.useTranslation)().translate,
					c = (0, I.useRef)(null),
					u = (0, I.useRef)(null),
					l = (f = (0, I.useState)(!1))[0],
					d = f[1],
					p = (f = (0, I.useState)(!1))[0],
					E = f[1],
					f = {
						__html: e(M.MessageStripeAddPaymentMethodDisclosure, {
							stripeTermsOfUseLinkStart: '<a href="https://stripe.com/legal/end-users" class="text-link" target="_blank">',
							stripeTermsOfUseLinkEnd: "</a>",
							stripePrivacyPolicyLinkStart: '<a href=\'https://stripe.com/privacy\' class="text-link" target="_blank">',
							stripePrivacyPolicyLinkEnd: "</a>"
						})
					},
					m = (0, I.useCallback)(function(e) {
						var t = e.target.value.trim().replace(/\s/g, ""),
							e = new RegExp(/^\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/);
						s("" !== t && null === e.exec(t)), r(t)
					}, [r]);
				return (0, I.useEffect)(function() {
					var e;
					c.current || (c.current = null == o ? void 0 : o.getElement("payment"), c.current && (c.current.on("ready", function() {
						var e;
						null !== (e = c.current) && void 0 !== e && e.clear()
					}), null !== (e = c.current) && void 0 !== e && e.on("change", function(e) {
						d(e.complete)
					}))), u.current || (u.current = null == o ? void 0 : o.getElement("address"), u.current && (u.current.on("ready", function() {
						var e;
						null !== (e = u.current) && void 0 !== e && e.clear()
					}), u.current.on("change", function(e) {
						E(e.complete)
					})))
				}, [o]), (0, I.useEffect)(function() {
					t(l && p && !a && "" !== n)
				}, [l, p, n, a, t]), O().createElement("div", null, O().createElement("div", {
					className: "font-header-2 text-emphasis stripe-header"
				}, e(M.HeadingStripeFormAddPaymentMethod)), O().createElement(Oe.PaymentElement, {
					options: {
						wallets: {
							applePay: "never",
							googlePay: "never"
						}
					}
				}), O().createElement("div", {
					className: "font-header-2 text-emphasis stripe-header billing-email-header"
				}, e(M.HeadingBillingEmail)), O().createElement("div", null, O().createElement("div", {
					className: "form-group form-has-feedback " + (a ? "form-has-error" : "")
				}, O().createElement("input", {
					className: "form-control input-field billing-email-input",
					type: "email",
					name: "email",
					value: n,
					onChange: function(e) {
						return m(e)
					}
				})), O().createElement("div", {
					className: "form-group form-has-feedback"
				}, O().createElement("div", {
					className: "form-control-label small text email-label"
				}, e(M.MessageStripeEmailInputSubText)))), O().createElement("div", {
					className: "font-header-2 text-emphasis stripe-header"
				}, e(M.HeadingBillingAddress)), O().createElement(Oe.AddressElement, {
					options: {
						mode: "billing"
					}
				}), O().createElement("div", {
					className: "form-control-label small text stripe-form-disclosure",
					dangerouslySetInnerHTML: f
				}), i ? O().createElement(ge, {
					errorCode: i
				}) : null)
			}(n = be = be || {}).INVALID = "INVALID", n.PAGE_LOAD = "PAGE_LOAD", n.VIEW_ACTIVE = "VIEW_ACTIVE", n.VIEW_INACTIVE = "VIEW_INACTIVE", n.CLICK_CANCEL = "CLICK_CANCEL", n.CANCEL_SUCCESS = "CANCEL_SUCCESS", n.EMAIL_REFERER_PAGE_LOAD = "EMAIL_REFERER_PAGE_LOAD", n.CLICK_EDIT_PAYMENT_METHOD = "CLICK_EDIT_PAYMENT_METHOD", n.CLICK_UPDATE_PAYMENT_METHOD = "CLICK_UPDATE_PAYMENT_METHOD", n.UPDATE_PAYMENT_METHOD_SUCCESS = "UPDATE_PAYMENT_METHOD_SUCCESS", n.UPDATE_PAYMENT_METHOD_EXPIRATION_SUCCESS = "UPDATE_PAYMENT_METHOD_EXPIRATION_SUCCESS", n.UPDATE_PAYMENT_METHOD_ADD_CARD_CLICKED = "UPDATE_PAYMENT_METHOD_ADD_CARD_CLICKED", n.UPDATE_PAYMENT_METHOD_ADD_CARD_SUCCESS = "UPDATE_PAYMENT_METHOD_ADD_CARD_SUCCESS", n.UPDATE_PAYMENT_METHOD_FAILURE = "UPDATE_PAYMENT_METHOD_FAILURE", n.UPDATE_PAYMENT_METHOD_EXPIRATION_FAILURE = "UPDATE_PAYMENT_METHOD_EXPIRATION_FAILURE", n.UPDATE_PAYMENT_METHOD_ADD_CARD_FAILURE = "UPDATE_PAYMENT_METHOD_ADD_CARD_FAILURE", new t(new Z({
				baseUrl: "https://ecsv2." + r + "/www"
			}));
			var r = {
					NO_EXISTING_SUBSCRIPTION: "UserHasNoSubscription",
					CANCEL_CLICKED: "CancelSubscriptionButtonClicked",
					PAYMENT_FAILURE_EMAIL_DIRECT_LINK: "PaymentFailureEmailDirectLink",
					CLICK_UPDATE_PAYMENT_METHOD: "SubscriptionsClickUpdatePaymentMethod",
					UPDATE_PAYMENT_METHOD_SUCCESS: "SubscriptionsUpdatePaymentMethodSuccess",
					UPDATE_PAYMENT_METHOD_FAILURE: "SubscriptionsUpdatePaymentMethodFailure",
					UPDATE_PAYMENT_METHOD_ADD_CARD_CLICKED: "SubscriptionsUpdatePaymentMethodAddCardClicked",
					UPDATE_PAYMENT_METHOD_ADD_CARD_SUCCESS: "SubscriptionsUpdatePaymentMethodAddCardSuccess",
					UPDATE_PAYMENT_METHOD_ADD_CARD_FAILED: "SubscriptionsUpdatePaymentMethodAddCardFailed",
					UPDATE_PAYMENT_METHOD_ADD_LIMITED_CARD_SUCCESS: "SubscriptionsUpdatePaymentMethodAddLimitedCardSuccess"
				},
				Ne = {
					GET_USER_PREMIUM_SUBSCRIPTION_CALLED: "GetUserPremiumSubscriptionCalled",
					GET_USER_PREMIUM_SUBSCRIPTION_SUCCEEDED: "GetUserPremiumSubscriptionSucceeded",
					GET_USER_PREMIUM_SUBSCRIPTION_FAILED: "GetUserPremiumSubscriptionFailed",
					GET_PAYMENT_METHODS_FAILED: "GetPaymentMethodsFailed",
					GET_SAVED_PAYMENT_PROFILES_CALLED: "GetSavedPaymentProfilesCalled",
					GET_SAVED_PAYMENT_PROFILES_SUCCEEDED: "GetSavedPaymentProfilesSucceeded",
					GET_SAVED_PAYMENT_PROFILES_FAILED: "GetSavedPaymentProfilesFailed",
					GET_SAVED_PAYMENT_PROFILES_RETURNS_NONE: "GetSavedPaymentProfilesReturnsNone",
					GET_PAYMENT_PROFILE_SETUP_CALLED: "GetPaymentProfileSetupCalled",
					GET_PAYMENT_PROFILE_SETUP_SUCCEEDED: "GetPaymentProfileSetupSucceeded",
					GET_PAYMENT_PROFILE_SETUP_FAILED: "GetPaymentProfileSetupFailed",
					GET_USER_BIRTHDATE_CALLED: "GetUserBirthdateCalled",
					GET_USER_BIRTHDATE_SUCCEEDED: "GetUserBirthdateSucceeded",
					GET_USER_BIRTHDATE_FAILED: "GetUserBirthdateFailed",
					DELETE_SAVED_PAYMENT_PROFILE_CALLED: "DeleteSavedPaymentProfileCalled",
					DELETE_SAVED_PAYMENT_PROFILE_SUCCEEDED: "DeleteSavedPaymentProfileSucceeded",
					DELETE_SAVED_PAYMENT_PROFILE_FAILED: "DeleteSavedPaymentProfileFailed",
					GET_EXP_VARIANT_CALLED: "GetExperimentVariantCalled",
					GET_EXP_VARIANT_SUCCEEDED: "GetExperimentVariantSucceeded",
					GET_EXP_VARIANT_FAILED: "GetExperimentVariantFailed",
					CONVERT_CREDIT_TO_ROBUX_CALLED: "ConvertCreditToRobuxCalled",
					CONVERT_CREDIT_TO_ROBUX_SUCCEEDED: "ConvertCreditToRobuxSucceeded",
					CONVERT_CREDIT_TO_ROBUX_FAILED: "ConvertCreditToRobuxFailed",
					GET_CREDIT_CONVERSION_METADATA_CALLED: "GetCreditConversionMetadataCalled",
					GET_CREDIT_CONVERSION_METADATA_SUCCEEDED: "GetCreditConversionMetadataSucceeded",
					GET_CREDIT_CONVERSION_METADATA_FAILED: "GetCreditConversionMetadataFailed",
					GET_CREDIT_CONVERSION_METADATA_CURRENCY_CODE_NULL: "GetCreditConversionMetadataCurrencyCodeNull",
					VERIFY_PAYMENT_PROFILE_CALLED: "VerifyPaymentProfileCreationCalled",
					VERIFY_PAYMENT_PROFILE_SUCCEEDED: "VerifyPaymentProfileCreationSucceeded",
					VERIFY_PAYMENT_PROFILE_FAILED: "VerifyPaymentProfileCreationFailed",
					UPDATE_SAVED_PAYMENT_PROFILE_CALLED: "UpdateSavedPaymentProfileCalled",
					UPDATE_SAVED_PAYMENT_PROFILE_SUCCEEDED: "UpdateSavedPaymentProfileSucceeded",
					UPDATE_SAVED_PAYMENT_PROFILE_FAILED: "UpdateSavedPaymentProfileFailed",
					UPDATE_SUBSCRIPTION_PAYMENT_METHOD_CALLED: "UpdateSubscriptionPaymentMethodCalled",
					UPDATE_SUBSCRIPTION_PAYMENT_METHOD_SUCCEEDED: "UpdateSubscriptionPaymentMethodSucceeded",
					UPDATE_SUBSCRIPTION_PAYMENT_METHOD_FAILED: "UpdateSubscriptionPaymentMethodFailed"
				},
				Ie = (new Map([
					[be.CLICK_UPDATE_PAYMENT_METHOD, r.CLICK_UPDATE_PAYMENT_METHOD],
					[be.UPDATE_PAYMENT_METHOD_SUCCESS, r.UPDATE_PAYMENT_METHOD_SUCCESS],
					[be.UPDATE_PAYMENT_METHOD_FAILURE, r.UPDATE_PAYMENT_METHOD_FAILURE],
					[be.EMAIL_REFERER_PAGE_LOAD, r.PAYMENT_FAILURE_EMAIL_DIRECT_LINK],
					[be.UPDATE_PAYMENT_METHOD_ADD_CARD_CLICKED, r.UPDATE_PAYMENT_METHOD_ADD_CARD_CLICKED],
					[be.UPDATE_PAYMENT_METHOD_ADD_CARD_SUCCESS, r.UPDATE_PAYMENT_METHOD_ADD_CARD_SUCCESS],
					[be.UPDATE_PAYMENT_METHOD_ADD_CARD_FAILURE, r.UPDATE_PAYMENT_METHOD_ADD_CARD_FAILED]
				]), Je(900)),
				Oe = Je(158),
				Re = "incorrect_cvc",
				we = "card_declined",
				Ue = "expired_card",
				Me = function(e, a, s, c) {
					return new(s = s || Promise)(function(n, t) {
						function r(e) {
							try {
								o(c.next(e))
							} catch (e) {
								t(e)
							}
						}

						function i(e) {
							try {
								o(c.throw(e))
							} catch (e) {
								t(e)
							}
						}

						function o(e) {
							var t;
							e.done ? n(e.value) : ((t = e.value) instanceof s ? t : new s(function(e) {
								e(t)
							})).then(r, i)
						}
						o((c = c.apply(e, a || [])).next())
					})
				},
				Le = function(n, r) {
					var i, o, a, s = {
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
								for (; s;) try {
									if (i = 1, o && (a = 2 & t[0] ? o.return : t[0] ? o.throw || ((a = o.return) && a.call(o), 0) : o.next) && !(a = a.call(o, t[1])).done) return a;
									switch (o = 0, a && (t = [2 & t[0], a.value]), t[0]) {
										case 0:
										case 1:
											a = t;
											break;
										case 4:
											return s.label++, {
												value: t[1],
												done: !1
											};
										case 5:
											s.label++, o = t[1], t = [0];
											continue;
										case 7:
											t = s.ops.pop(), s.trys.pop();
											continue;
										default:
											if (!(a = 0 < (a = s.trys).length && a[a.length - 1]) && (6 === t[0] || 2 === t[0])) {
												s = 0;
												continue
											}
											if (3 === t[0] && (!a || t[1] > a[0] && t[1] < a[3])) {
												s.label = t[1];
												break
											}
											if (6 === t[0] && s.label < a[1]) {
												s.label = a[1], a = t;
												break
											}
											if (a && s.label < a[2]) {
												s.label = a[2], s.ops.push(t);
												break
											}
											a[2] && s.ops.pop(), s.trys.pop();
											continue
									}
									t = r.call(n, s)
								} catch (e) {
									t = [6, e], o = 0
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
				};

			function ke(n) {
				return Me(void 0, void 0, Promise, function() {
					var t;
					return Le(this, function(e) {
						switch (e.label) {
							case 0:
								return [4, h.httpService.get(G.url.verifyPaymentProfileCreation(n))];
							case 1:
								return t = e.sent(), [2, null === (t = null == t ? void 0 : t.data) || void 0 === t ? void 0 : t.id]
						}
					})
				})
			}

			function xe(e) {
				function o() {
					return je(void 0, void 0, void 0, function() {
						return We(this, function(e) {
							switch (e.label) {
								case 0:
									return e.trys.push([0, 2, , 3]), [4, ke(p.current)];
								case 1:
									return e.sent() ? [2, !0] : [3, 3];
								case 2:
									return e.sent(), [3, 3];
								case 3:
									return [2, !1]
							}
						})
					})
				}
				var t = e.showStripeModal,
					a = e.closeStripeModal,
					n = (A = (0, I.useState)(!1))[0],
					r = A[1],
					i = (f = (0, I.useState)(null))[0],
					s = f[1],
					c = (g = (0, I.useState)(""))[0],
					e = g[1],
					u = (0, R.useTranslation)().translate,
					l = (0, Oe.useStripe)(),
					d = (0, Oe.useElements)(),
					p = (0, I.useRef)(""),
					E = X().systemFeedbackService,
					f = (A = (0, I.useState)(!1))[0],
					m = A[1],
					S = (g = Ee().state).purchaseFlowUuid,
					b = g.selectedSubscription,
					h = g.pathName,
					v = (A = J()).updateModalContent,
					P = A.openModal,
					_ = A.closeModal,
					C = (g = (0, I.useState)(""))[0],
					y = g[1],
					A = (0, I.useCallback)(function(e) {
						r(e)
					}, []),
					T = (0, I.useCallback)(function(t, n, r) {
						return je(void 0, void 0, void 0, function() {
							return We(this, function(e) {
								switch (e.label) {
									case 0:
										return e.trys.push([0, 2, , 3]), [4, t()];
									case 1:
										return e.sent() && b ? (fe(function() {
											E.warning(u(M.ErrorGenericError)), a()
										}, function(e) {
											var t, n = e.data.errorCode;
											switch (m(!1), n) {
												case w.USER_HAS_SPEND_LIMIT_SET:
												case w.RESTRICTED_USER:
												case w.UNSUPPORTED_LOCALE:
													v(u(M.HeadingCannotSubscribe), null !== (t = u(null !== (t = L[n]) && void 0 !== t ? t : "")) && void 0 !== t ? t : u(M.ErrorGenericError), u("Action.OK"), !0, function() {
														return _
													}), P();
													break;
												default:
													E.warning(u(M.ErrorGenericError))
											}
											a()
										}, function() {
											m(!1), a()
										}, b, S, h, U.STRIPE), m(!1), a(), [2]) : 0 === r ? (E.warning(u(M.ErrorStripeSavedCardSomethingWentWrong)), m(!1), a(), [2]) : (setTimeout(function() {
											T(t, n, r - 1)
										}, n), [3, 3]);
									case 2:
										return e.sent(), E.warning(u(M.ErrorGenericError)), a(), [3, 3];
									case 3:
										return [2]
								}
							})
						})
					}, [_, a, P, h, S, b, E, u, v]),
					g = (0, I.useCallback)(function() {
						return je(void 0, void 0, void 0, function() {
							var t, n, r, i;
							return We(this, function(e) {
								switch (e.label) {
									case 0:
										if (!l || !d) return a(), [2];
										m(!0), s(null), b && ae.sendExperienceSubscriptionEvent(S, ee.USER_INPUT, ne.VPC_NEW_PAYMENT_MODAL, b, te.SAVE_NEW_PAYMENT_METHOD), n = {
											return_url: C,
											payment_method_data: {
												billing_details: {
													email: c
												},
												allow_redisplay: "always"
											}
										}, e.label = 1;
									case 1:
										return e.trys.push([1, 3, , 4]), [4, l.confirmSetup({
											elements: d,
											confirmParams: n,
											redirect: "if_required"
										})];
									case 2:
										if (t = e.sent(), "succeeded" === (null === (n = null == t ? void 0 : t.setupIntent) || void 0 === n ? void 0 : n.status)) p.current = null !== (r = null === (r = null === (r = null == t ? void 0 : t.setupIntent) || void 0 === r ? void 0 : r.payment_method) || void 0 === r ? void 0 : r.toString()) && void 0 !== r ? r : "", p.current && T(o, 3e3, 3);
										else if (null !== (r = null == t ? void 0 : t.error) && void 0 !== r && r.code) {
											switch (t.error.code) {
												case Re:
												case Ue:
													s(null === (i = null == t ? void 0 : t.error) || void 0 === i ? void 0 : i.code);
													break;
												case we:
													E.warning(u(M.ErrorStripeCardDeclined)), a();
													break;
												default:
													E.warning(u(M.ErrorStripeSaveCardGeneralError)), a()
											}
											m(!1)
										}
										return [3, 4];
									case 3:
										return e.sent(), a(), m(!1), [3, 4];
									case 4:
										return [2]
								}
							})
						})
					}, [l, d, b, C, c, a, S, T, E, u]);
				return (0, I.useEffect)(function() {
					y(D.EnvironmentUrls.websiteUrl + "/" + h)
				}, [h]), O().createElement(V.Modal, {
					show: t,
					onHide: a,
					size: "md",
					className: "rbx-stripe-modal"
				}, O().createElement(V.Modal.Header, {
					title: u(M.HeadingAddPaymentMethod),
					onClose: a
				}), O().createElement(V.Modal.Body, null, O().createElement(De, {
					onFormStatusChange: A,
					elements: d,
					inputEmail: c,
					setInputEmail: e,
					stripeErrorCode: i
				})), O().createElement(V.Modal.Footer, null, f ? O().createElement("span", {
					className: "spinner spinner-default"
				}) : O().createElement("div", {
					className: "modal-buttons"
				}, O().createElement("button", {
					type: "button",
					className: "modal-button btn-primary-md btn-min-width",
					disabled: !n,
					onClick: g
				}, u("Action.Save")), O().createElement("button", {
					type: "button",
					className: "modal-button btn-control-md btn-min-width",
					onClick: a
				}, u("Action.Cancel")))))
			}

			function Ge() {
				var e = (t = (0, I.useState)(null))[0],
					n = t[1],
					r = X().systemFeedbackService,
					i = (0, R.useTranslation)().translate,
					t = (a = Ee()).state,
					o = a.dispatch,
					a = t.showStripeModal,
					s = t.stripeClientSecret,
					c = t.purchaseFlowUuid,
					u = t.selectedSubscription;
				return (0, I.useEffect)(function() {
					Ke(void 0, void 0, void 0, function() {
						var t;
						return ze(this, function(e) {
							switch (e.label) {
								case 0:
									return e.trys.push([0, 2, , 3]), t = Ae(), [4, (0, Ie.loadStripe)(t)];
								case 1:
									return t = e.sent(), n(t), [3, 3];
								case 2:
									return e.sent(), r.warning(i(M.ErrorGenericError)), o({
										type: q.CLOSE_STRIPE_MODAL
									}), [3, 3];
								case 3:
									return [2]
							}
						})
					})
				}, [o, r, i]), (0, I.useEffect)(function() {
					s && e && u && ae.sendExperienceSubscriptionEvent(c, ee.VIEW_SHOWN, ne.VPC_NEW_PAYMENT_MODAL, u, te.SUBSCRIBE)
				}, [e, s, u, c]), e && s ? O().createElement(Oe.Elements, {
					key: s,
					stripe: e && s ? e : null,
					options: e && s ? Te(s) : void 0
				}, O().createElement(xe, {
					showStripeModal: a,
					closeStripeModal: function() {
						return o({
							type: q.CLOSE_STRIPE_MODAL
						})
					}
				})) : O().createElement(I.Fragment, null)
			}

			function Be() {
				function t() {}
				var e = (N() || {}).universeId,
					o = void 0 === e ? "" : e,
					n = X().SystemFeedback,
					r = (0, R.useTranslation)().translate,
					i = (m = Ee()).state,
					a = m.dispatch,
					s = i.showPagination,
					c = i.subscriptionsInPage,
					u = i.totalPages,
					l = i.currentPage,
					d = (e = (0, I.useState)(!1))[0],
					p = e[1],
					i = (m = (0, I.useState)(!1))[0],
					E = m[1],
					f = (0, v.useLocation)(),
					m = (e = (0, I.useState)(!1))[0],
					S = e[1];
				return (0, I.useEffect)(function() {
					var e, t, n;
					("#!/store" === (null == f ? void 0 : f.hash) || null !== (e = b.deviceMeta.getDeviceMeta()) && void 0 !== e && e.isUniversalApp && null !== (t = b.deviceMeta.getDeviceMeta()) && void 0 !== t && t.isDesktop || null !== (n = b.deviceMeta.getDeviceMeta()) && void 0 !== n && n.isPhone || null !== (n = b.deviceMeta.getDeviceMeta()) && void 0 !== n && n.isTablet && (null === (n = b.deviceMeta.getDeviceMeta()) || void 0 === n || !n.isUniversalApp)) && (p(!0), a({
						type: q.SEND_STORE_PAGE_LOAD_EVENT
					}))
				}, [a, f, null == f ? void 0 : f.hash, p]), (0, I.useEffect)(function() {
					d && Xe(void 0, void 0, Promise, function() {
						return qe(this, function(e) {
							switch (e.label) {
								case 0:
									return [4, F(void 0, void 0, Promise, function() {
										return H(this, function(e) {
											switch (e.label) {
												case 0:
													return [4, h.httpService.get(G.url.getSubscriptionMetadata)];
												case 1:
													return [2, e.sent().data]
											}
										})
									})];
								case 1:
									return [2, e.sent().isWebPurchasingEnabled]
							}
						})
					}).then(function(e) {
						S(e), e && Xe(void 0, void 0, void 0, function() {
							var n, r, t, i;
							return qe(this, function(e) {
								switch (e.label) {
									case 0:
										return E(!0), i = "0", o ? i = o : null !== (t = b.deviceMeta.getDeviceMeta()) && void 0 !== t && t.isUniversalApp && (t = f.pathname, D.Endpoints && D.Endpoints.supportLocalizedUrls && (t = D.Endpoints.removeUrlLocale(t)), t = t.split("/"), (t = t[3]) && (i = t)), [4, y({
											subscriptionProductType: P.DEVELOPER_SUBSCRIPTION_PRODUCT,
											subscriptionProviderId: null !== (i = parseInt(i, 10)) && void 0 !== i ? i : 0
										})];
									case 1:
										return 0 < (n = e.sent().subscriptionProductsInfo).length ? (i = n.map(function(e) {
											return e.subscriptionTargetKey
										}), [4, A({
											subscriptionProductTargetKeys: i
										})]) : [3, 3];
									case 2:
										r = e.sent().subscriptionStatuses, n.forEach(function(e, t) {
											null !== r[e.subscriptionTargetKey] && (e = r[e.subscriptionTargetKey], n[t].isForSale = !e.isSubscribed)
										}), e.label = 3;
									case 3:
										return a({
											type: q.LOAD_SUBSCRIPTIONS,
											subscriptions: n
										}), E(!1), [2]
								}
							})
						}).catch(t)
					}).catch(t)
				}, [a, d, f.pathname, o]), !m || i || 0 === c.length ? O().createElement(I.Fragment, null) : O().createElement("div", {
					id: "rbx-subscriptions-container-content"
				}, O().createElement("div", {
					className: "container-header"
				}, O().createElement("h3", null, r(M.HeadingSubscriptions))), O().createElement(I.Fragment, null, O().createElement(ye, {
					subscriptions: c
				}), s && O().createElement(_, {
					current: l,
					hasNext: l < u,
					onChange: function(e) {
						return a({
							type: q.UPDATE_PAGE,
							newPage: e
						})
					},
					total: u
				}), O().createElement(Ge, null), O().createElement(n, null)))
			}

			function Fe() {
				return document.getElementById("rbx-subscriptions-container")
			}

			function He(e) {
				var t = e.children,
					e = {
						SystemFeedback: (e = (0, V.createSystemFeedback)())[0],
						systemFeedbackService: e[1]
					};
				return O().createElement(z.Provider, {
					value: e
				}, t)
			}

			function Ve(e) {
				var t = e.children,
					n = (c = (0, I.useState)(""))[0],
					o = c[1],
					r = (p = (0, I.useState)(""))[0],
					a = p[1],
					i = (l = (0, I.useState)(!1))[0],
					s = l[1],
					c = (e = (0, I.useState)(!1))[0],
					u = e[1],
					l = (p = (0, I.useState)(""))[0],
					d = p[1],
					p = (e = (0, I.useState)(function() {
						return {}
					}))[0],
					E = e[1],
					e = function() {
						return u(!1)
					};
				return O().createElement(O().Fragment, null, O().createElement(Q.Provider, {
					value: {
						openModal: function() {
							return u(!0)
						},
						closeModal: e,
						updateModalContent: function(e, t, n, r, i) {
							o(e), a(t), s(r), d(n), E(i)
						}
					}
				}, t, O().createElement(V.Modal, {
					show: c,
					hide: e,
					size: "md",
					className: "error-modal"
				}, O().createElement(V.Modal.Header, {
					title: n,
					showCloseButton: !0,
					onClose: e
				}), O().createElement(V.Modal.Body, null, r, i && O().createElement("div", {
					className: "icon-warning"
				})), O().createElement(V.Modal.Footer, null, O().createElement(V.Button, {
					size: V.Button.sizes.large,
					width: V.Button.widths.full,
					onClick: p
				}, l)))))
			}

			function Ye(e) {
				var t = e.children,
					e = (n = (0, I.useReducer)(de, ce))[0],
					n = n[1];
				return O().createElement(pe.Provider, {
					value: {
						state: e,
						dispatch: n
					}
				}, t)
			}
			var je = function(e, a, s, c) {
					return new(s = s || Promise)(function(n, t) {
						function r(e) {
							try {
								o(c.next(e))
							} catch (e) {
								t(e)
							}
						}

						function i(e) {
							try {
								o(c.throw(e))
							} catch (e) {
								t(e)
							}
						}

						function o(e) {
							var t;
							e.done ? n(e.value) : ((t = e.value) instanceof s ? t : new s(function(e) {
								e(t)
							})).then(r, i)
						}
						o((c = c.apply(e, a || [])).next())
					})
				},
				We = function(n, r) {
					var i, o, a, s = {
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
								for (; s;) try {
									if (i = 1, o && (a = 2 & t[0] ? o.return : t[0] ? o.throw || ((a = o.return) && a.call(o), 0) : o.next) && !(a = a.call(o, t[1])).done) return a;
									switch (o = 0, a && (t = [2 & t[0], a.value]), t[0]) {
										case 0:
										case 1:
											a = t;
											break;
										case 4:
											return s.label++, {
												value: t[1],
												done: !1
											};
										case 5:
											s.label++, o = t[1], t = [0];
											continue;
										case 7:
											t = s.ops.pop(), s.trys.pop();
											continue;
										default:
											if (!(a = 0 < (a = s.trys).length && a[a.length - 1]) && (6 === t[0] || 2 === t[0])) {
												s = 0;
												continue
											}
											if (3 === t[0] && (!a || t[1] > a[0] && t[1] < a[3])) {
												s.label = t[1];
												break
											}
											if (6 === t[0] && s.label < a[1]) {
												s.label = a[1], a = t;
												break
											}
											if (a && s.label < a[2]) {
												s.label = a[2], s.ops.push(t);
												break
											}
											a[2] && s.ops.pop(), s.trys.pop();
											continue
									}
									t = r.call(n, s)
								} catch (e) {
									t = [6, e], o = 0
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
				Ke = function(e, a, s, c) {
					return new(s = s || Promise)(function(n, t) {
						function r(e) {
							try {
								o(c.next(e))
							} catch (e) {
								t(e)
							}
						}

						function i(e) {
							try {
								o(c.throw(e))
							} catch (e) {
								t(e)
							}
						}

						function o(e) {
							var t;
							e.done ? n(e.value) : ((t = e.value) instanceof s ? t : new s(function(e) {
								e(t)
							})).then(r, i)
						}
						o((c = c.apply(e, a || [])).next())
					})
				},
				ze = function(n, r) {
					var i, o, a, s = {
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
								for (; s;) try {
									if (i = 1, o && (a = 2 & t[0] ? o.return : t[0] ? o.throw || ((a = o.return) && a.call(o), 0) : o.next) && !(a = a.call(o, t[1])).done) return a;
									switch (o = 0, a && (t = [2 & t[0], a.value]), t[0]) {
										case 0:
										case 1:
											a = t;
											break;
										case 4:
											return s.label++, {
												value: t[1],
												done: !1
											};
										case 5:
											s.label++, o = t[1], t = [0];
											continue;
										case 7:
											t = s.ops.pop(), s.trys.pop();
											continue;
										default:
											if (!(a = 0 < (a = s.trys).length && a[a.length - 1]) && (6 === t[0] || 2 === t[0])) {
												s = 0;
												continue
											}
											if (3 === t[0] && (!a || t[1] > a[0] && t[1] < a[3])) {
												s.label = t[1];
												break
											}
											if (6 === t[0] && s.label < a[1]) {
												s.label = a[1], a = t;
												break
											}
											if (a && s.label < a[2]) {
												s.label = a[2], s.ops.push(t);
												break
											}
											a[2] && s.ops.pop(), s.trys.pop();
											continue
									}
									t = r.call(n, s)
								} catch (e) {
									t = [6, e], o = 0
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
				Xe = function(e, a, s, c) {
					return new(s = s || Promise)(function(n, t) {
						function r(e) {
							try {
								o(c.next(e))
							} catch (e) {
								t(e)
							}
						}

						function i(e) {
							try {
								o(c.throw(e))
							} catch (e) {
								t(e)
							}
						}

						function o(e) {
							var t;
							e.done ? n(e.value) : ((t = e.value) instanceof s ? t : new s(function(e) {
								e(t)
							})).then(r, i)
						}
						o((c = c.apply(e, a || [])).next())
					})
				},
				qe = function(n, r) {
					var i, o, a, s = {
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
								for (; s;) try {
									if (i = 1, o && (a = 2 & t[0] ? o.return : t[0] ? o.throw || ((a = o.return) && a.call(o), 0) : o.next) && !(a = a.call(o, t[1])).done) return a;
									switch (o = 0, a && (t = [2 & t[0], a.value]), t[0]) {
										case 0:
										case 1:
											a = t;
											break;
										case 4:
											return s.label++, {
												value: t[1],
												done: !1
											};
										case 5:
											s.label++, o = t[1], t = [0];
											continue;
										case 7:
											t = s.ops.pop(), s.trys.pop();
											continue;
										default:
											if (!(a = 0 < (a = s.trys).length && a[a.length - 1]) && (6 === t[0] || 2 === t[0])) {
												s = 0;
												continue
											}
											if (3 === t[0] && (!a || t[1] > a[0] && t[1] < a[3])) {
												s.label = t[1];
												break
											}
											if (6 === t[0] && s.label < a[1]) {
												s.label = a[1], a = t;
												break
											}
											if (a && s.label < a[2]) {
												s.label = a[2], s.ops.push(t);
												break
											}
											a[2] && s.ops.pop(), s.trys.pop();
											continue
									}
									t = r.call(n, s)
								} catch (e) {
									t = [6, e], o = 0
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
				Qe = {
					common: ["CommonUI.Controls", "CommonUI.Features"],
					feature: "Feature.Subscription"
				};
			(0, h.ready)(function() {
				Fe() && b.authenticatedUser.isAuthenticated && (0, e.render)(O().createElement(He, null, O().createElement(R.TranslationProvider, {
					config: Qe
				}, O().createElement(Ye, null, O().createElement(Ve, null, O().createElement(v.BrowserRouter, null, O().createElement(Be, null)))))), Fe())
			})
		}()
}();
//# sourceMappingURL=https://js.rbxcdn.com/d7246e57badaa5971b903f532914c2ad-gameSubscriptions.bundle.min.js.map

/* Bundle detector */
window.Roblox && window.Roblox.BundleDetector && window.Roblox.BundleDetector.bundleDetected("GameSubscriptions");