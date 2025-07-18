/*! For license information please see presenceStatus.bundle.min.js.LICENSE.txt */ ! function() {
	"use strict";
	var e, t, n = React;

	function r(e) {
		return r = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
			return typeof e
		} : function(e) {
			return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
		}, r(e)
	}(t = e || (e = {}))[t.Offline = 0] = "Offline", t[t.Online = 1] = "Online", t[t.Game = 2] = "Game", t[t.Studio = 3] = "Studio", t[t.Invisible = 4] = "Invisible";
	var i = e;

	function o(e) {
		return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e
	}
	var a, s = {
		exports: {}
	};
	a = s,
		function() {
			var e = {}.hasOwnProperty;

			function t() {
				for (var n = [], i = 0; i < arguments.length; i++) {
					var o = arguments[i];
					if (o) {
						var a = r(o);
						if ("string" === a || "number" === a) n.push(o);
						else if (Array.isArray(o)) {
							if (o.length) {
								var s = t.apply(null, o);
								s && n.push(s)
							}
						} else if ("object" === a) {
							if (o.toString !== Object.prototype.toString && !o.toString.toString().includes("[native code]")) {
								n.push(o.toString());
								continue
							}
							for (var u in o) e.call(o, u) && o[u] && n.push(u)
						}
					}
				}
				return n.join(" ")
			}
			a.exports ? (t.default = t, a.exports = t) : window.classNames = t
		}();
	var u = o(s.exports),
		c = function(e, t) {
			return c = Object.setPrototypeOf || {
				__proto__: []
			}
			instanceof Array && function(e, t) {
				e.__proto__ = t
			} || function(e, t) {
				for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n])
			}, c(e, t)
		};

	function l(e, t) {
		if ("function" != typeof t && null !== t) throw new TypeError("Class extends value " + String(t) + " is not a constructor or null");

		function n() {
			this.constructor = e
		}
		c(e, t), e.prototype = null === t ? Object.create(t) : (n.prototype = t.prototype, new n)
	}
	var f = function() {
		return f = Object.assign || function(e) {
			for (var t, n = 1, r = arguments.length; n < r; n++)
				for (var i in t = arguments[n]) Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
			return e
		}, f.apply(this, arguments)
	};

	function p(e, t, n, r) {
		return new(n || (n = Promise))((function(i, o) {
			function a(e) {
				try {
					u(r.next(e))
				} catch (e) {
					o(e)
				}
			}

			function s(e) {
				try {
					u(r.throw(e))
				} catch (e) {
					o(e)
				}
			}

			function u(e) {
				var t;
				e.done ? i(e.value) : (t = e.value, t instanceof n ? t : new n((function(e) {
					e(t)
				}))).then(a, s)
			}
			u((r = r.apply(e, t || [])).next())
		}))
	}

	function d(e, t) {
		var n, r, i, o, a = {
			label: 0,
			sent: function() {
				if (1 & i[0]) throw i[1];
				return i[1]
			},
			trys: [],
			ops: []
		};
		return o = {
			next: s(0),
			throw: s(1),
			return: s(2)
		}, "function" == typeof Symbol && (o[Symbol.iterator] = function() {
			return this
		}), o;

		function s(s) {
			return function(u) {
				return function(s) {
					if (n) throw new TypeError("Generator is already executing.");
					for (; o && (o = 0, s[0] && (a = 0)), a;) try {
						if (n = 1, r && (i = 2 & s[0] ? r.return : s[0] ? r.throw || ((i = r.return) && i.call(r), 0) : r.next) && !(i = i.call(r, s[1])).done) return i;
						switch (r = 0, i && (s = [2 & s[0], i.value]), s[0]) {
							case 0:
							case 1:
								i = s;
								break;
							case 4:
								return a.label++, {
									value: s[1],
									done: !1
								};
							case 5:
								a.label++, r = s[1], s = [0];
								continue;
							case 7:
								s = a.ops.pop(), a.trys.pop();
								continue;
							default:
								if (!((i = (i = a.trys).length > 0 && i[i.length - 1]) || 6 !== s[0] && 2 !== s[0])) {
									a = 0;
									continue
								}
								if (3 === s[0] && (!i || s[1] > i[0] && s[1] < i[3])) {
									a.label = s[1];
									break
								}
								if (6 === s[0] && a.label < i[1]) {
									a.label = i[1], i = s;
									break
								}
								if (i && a.label < i[2]) {
									a.label = i[2], a.ops.push(s);
									break
								}
								i[2] && a.ops.pop(), a.trys.pop();
								continue
						}
						s = t.call(e, a)
					} catch (e) {
						s = [6, e], r = 0
					} finally {
						n = i = 0
					}
					if (5 & s[0]) throw s[1];
					return {
						value: s[0] ? s[1] : void 0,
						done: !0
					}
				}([s, u])
			}
		}
	}
	var h = function() {
			function e(e) {
				void 0 === e && (e = new v);
				var t = this;
				this.configuration = e, this.fetchApi = function(e, n) {
					return p(t, void 0, void 0, (function() {
						var t, r, i, o, a, s, u, c, l;
						return d(this, (function(p) {
							switch (p.label) {
								case 0:
									t = {
										url: e,
										init: n
									}, r = 0, i = this.middleware, p.label = 1;
								case 1:
									return r < i.length ? (l = i[r]).pre ? [4, l.pre(f({
										fetch: this.fetchApi
									}, t))] : [3, 3] : [3, 4];
								case 2:
									t = p.sent() || t, p.label = 3;
								case 3:
									return r++, [3, 1];
								case 4:
									return o = performance.now(), [4, (this.configuration.fetchApi || fetch)(t.url, t.init)];
								case 5:
									a = p.sent(), s = performance.now(), u = 0, c = this.middleware, p.label = 6;
								case 6:
									return u < c.length ? (l = c[u]).post ? [4, l.post({
										fetch: this.fetchApi,
										url: t.url,
										init: t.init,
										response: a.clone(),
										elapsedTime: s - o
									})] : [3, 8] : [3, 9];
								case 7:
									a = p.sent() || a, p.label = 8;
								case 8:
									return u++, [3, 6];
								case 9:
									return [2, a]
							}
						}))
					}))
				}, this.middleware = e.middleware
			}
			return e.prototype.withMiddleware = function() {
				for (var e, t = [], n = 0; n < arguments.length; n++) t[n] = arguments[n];
				var r = this.clone();
				return r.middleware = (e = r.middleware).concat.apply(e, t), r
			}, e.prototype.withPreMiddleware = function() {
				for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
				var n = e.map((function(e) {
					return {
						pre: e
					}
				}));
				return this.withMiddleware.apply(this, n)
			}, e.prototype.withPostMiddleware = function() {
				for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
				var n = e.map((function(e) {
					return {
						post: e
					}
				}));
				return this.withMiddleware.apply(this, n)
			}, e.prototype.request = function(e, t) {
				return p(this, void 0, void 0, (function() {
					var n, r, i, o;
					return d(this, (function(a) {
						switch (a.label) {
							case 0:
								return n = this.createFetchParams(e, t), r = n.url, i = n.init, [4, this.fetchApi(r, i)];
							case 1:
								if ((o = a.sent()).status >= 200 && o.status < 300) return [2, o];
								throw o
						}
					}))
				}))
			}, e.prototype.createFetchParams = function(e, t) {
				var n = this.configuration.basePath + e.path;
				void 0 !== e.query && 0 !== Object.keys(e.query).length && (n += "?" + this.configuration.queryParamsStringify(e.query));
				var r, i = "undefined" != typeof FormData && e.body instanceof FormData || e.body instanceof URLSearchParams || (r = e.body, "undefined" != typeof Blob && r instanceof Blob) ? e.body : JSON.stringify(e.body),
					o = Object.assign({}, this.configuration.headers, e.headers);
				return {
					url: n,
					init: f({
						method: e.method,
						headers: o,
						body: i,
						credentials: this.configuration.credentials,
						referrerPolicy: this.configuration.referrerPolicy
					}, t)
				}
			}, e.prototype.clone = function() {
				var e = new this.constructor(this.configuration);
				return e.middleware = this.middleware.slice(), e
			}, e
		}(),
		$ = function(e) {
			function t(t, n) {
				var r = e.call(this, n) || this;
				return r.field = t, r.name = "RequiredError", r
			}
			return l(t, e), t
		}(Error),
		v = function() {
			function e(e) {
				void 0 === e && (e = {}), this.configuration = e
			}
			return Object.defineProperty(e.prototype, "basePath", {
				get: function() {
					return this.configuration.basePath
				},
				enumerable: !1,
				configurable: !0
			}), Object.defineProperty(e.prototype, "fetchApi", {
				get: function() {
					return this.configuration.fetchApi || window.fetch.bind(window)
				},
				enumerable: !1,
				configurable: !0
			}), Object.defineProperty(e.prototype, "middleware", {
				get: function() {
					return this.configuration.middleware || []
				},
				enumerable: !1,
				configurable: !0
			}), Object.defineProperty(e.prototype, "queryParamsStringify", {
				get: function() {
					return this.configuration.queryParamsStringify || g
				},
				enumerable: !1,
				configurable: !0
			}), Object.defineProperty(e.prototype, "username", {
				get: function() {
					return this.configuration.username
				},
				enumerable: !1,
				configurable: !0
			}), Object.defineProperty(e.prototype, "password", {
				get: function() {
					return this.configuration.password
				},
				enumerable: !1,
				configurable: !0
			}), Object.defineProperty(e.prototype, "apiKey", {
				get: function() {
					var e = this.configuration.apiKey;
					if (e) return "function" == typeof e ? e : function() {
						return e
					}
				},
				enumerable: !1,
				configurable: !0
			}), Object.defineProperty(e.prototype, "accessToken", {
				get: function() {
					var e = this.configuration.accessToken;
					if (e) return "function" == typeof e ? e : function() {
						return e
					}
				},
				enumerable: !1,
				configurable: !0
			}), Object.defineProperty(e.prototype, "headers", {
				get: function() {
					return this.configuration.headers
				},
				enumerable: !1,
				configurable: !0
			}), Object.defineProperty(e.prototype, "credentials", {
				get: function() {
					return this.configuration.credentials
				},
				enumerable: !1,
				configurable: !0
			}), Object.defineProperty(e.prototype, "referrerPolicy", {
				get: function() {
					return this.configuration.referrerPolicy
				},
				enumerable: !1,
				configurable: !0
			}), e
		}();

	function m(e, t) {
		return null != e[t]
	}

	function g(e, t) {
		return void 0 === t && (t = ""), Object.keys(e).map((function(n) {
			var r = t + (t.length ? "[".concat(n, "]") : n),
				i = e[n];
			if (i instanceof Array) {
				var o = i.map((function(e) {
					return encodeURIComponent(String(e))
				})).join("&".concat(encodeURIComponent(r), "="));
				return "".concat(encodeURIComponent(r), "=").concat(o)
			}
			return i instanceof Date ? "".concat(encodeURIComponent(r), "=").concat(encodeURIComponent(i.toISOString())) : i instanceof Object ? g(i, r) : "".concat(encodeURIComponent(r), "=").concat(encodeURIComponent(String(i)))
		})).filter((function(e) {
			return e.length > 0
		})).join("&")
	}
	var y, b, w = function() {
			function e(e, t) {
				void 0 === t && (t = function(e) {
					return e
				}), this.raw = e, this.transformer = t
			}
			return e.prototype.value = function() {
				return p(this, void 0, void 0, (function() {
					var e;
					return d(this, (function(t) {
						switch (t.label) {
							case 0:
								return e = this.transformer, [4, this.raw.json()];
							case 1:
								return [2, e.apply(this, [t.sent()])]
						}
					}))
				}))
			}, e
		}(),
		E = "x-csrf-token",
		S = function() {
			function e() {
				this.currentToken = ""
			}
			return e.prototype.pre = function(e) {
				var t = e.url,
					n = e.init;
				return "POST" === n.method || "PATCH" === n.method || "DELETE" === n.method || "PUT" === n.method ? Promise.resolve({
					url: t,
					init: this.appendCSRFHeader(n)
				}) : Promise.resolve({
					url: t,
					init: n
				})
			}, e.prototype.post = function(e) {
				var t, n = e.fetch,
					r = e.url,
					i = e.init,
					o = e.response;
				return 403 === o.status && o.headers.has(E) ? (this.currentToken = null !== (t = o.headers.get(E)) && void 0 !== t ? t : "", n(r, this.appendCSRFHeader(i))) : Promise.resolve(o)
			}, e.prototype.appendCSRFHeader = function(e) {
				var t;
				return f(f({}, e), {
					headers: f(f({}, e.headers), (t = {}, t[E] = this.currentToken, t))
				})
			}, e
		}(),
		T = function() {
			function e() {
				this.observers = []
			}
			return e.prototype.subscribe = function(e) {
				var t = this;
				return this.observers.push(e),
					function() {
						return t.unsubscribe(e)
					}
			}, e.prototype.unsubscribe = function(e) {
				this.observers = this.observers.filter((function(t) {
					return t !== e
				}))
			}, e.prototype.post = function(e) {
				var t = e.url,
					n = e.response;
				return 503 === n.status && this.observers.forEach((function(e) {
					return e(t)
				})), Promise.resolve(n)
			}, e
		}();
	(y || (y = {})).LoadApi = "loadApi", (b || (b = {})).Time = "time";
	var x, O = function(e) {
			void 0 === e && (e = {
				baseUrl: ""
			}), this.configuration = e, this.baseUrl = this.configuration.baseUrl
		},
		A = function() {
			function e(e) {
				void 0 === e && (e = new O), this.configuration = e, this.baseUrl = e.baseUrl
			}
			return e.prototype.sendEvent = function(e) {
				var t = e.localTime,
					n = e.target,
					r = e.eventType,
					i = e.context,
					o = e.additionalProperties,
					a = e.currentUrl,
					s = e.guestId,
					u = e.sessionId,
					c = t.toISOString(),
					l = new URL("".concat(this.baseUrl, "/pe"));
				return l.searchParams.append("t", n), l.searchParams.append("evt", r), l.searchParams.append("ctx", i), l.searchParams.append("lt", c), l.searchParams.append("url", a || window.location.href), void 0 !== s && l.searchParams.append("gid", s), void 0 !== u && l.searchParams.append("sid", u), void 0 !== o && Object.keys(o).forEach((function(e) {
					l.searchParams.append(e, o[e].toString())
				})), fetch(l.href, {
					credentials: "same-origin"
				})
			}, e.prototype.sendEventViaImg = function(e, t) {
				var n = e.localTime,
					r = e.target,
					i = e.eventType,
					o = e.context,
					a = e.additionalProperties,
					s = e.currentUrl,
					u = e.guestId,
					c = e.sessionId,
					l = n.toISOString(),
					f = new URL("".concat(this.baseUrl, "/e.png"));
				f.searchParams.append("t", r), f.searchParams.append("evt", i), f.searchParams.append("ctx", o), f.searchParams.append("lt", l), f.searchParams.append("url", s || window.location.href), void 0 !== u && f.searchParams.append("gid", u), void 0 !== c && f.searchParams.append("sid", c), void 0 !== a && Object.keys(a).forEach((function(e) {
					f.searchParams.append(e, a[e].toString())
				}));
				var p = new Image;
				return p.src = f.href, p.onload = function() {
					void 0 !== t && t(!0)
				}, p.onerror = function(e) {
					void 0 !== t && t(!1), console.error(e)
				}, p
			}, e
		}(),
		R = "Grasshopper",
		C = function() {
			function e(e) {
				this.eventTracker = function(e) {
					var t = new O({
							baseUrl: "https://ecsv2.".concat(e, "/").concat(R)
						}),
						n = new A(t);
					return {
						sendEvent: function(e) {
							var t = {
								target: R,
								localTime: new Date,
								eventType: e.eventType,
								context: e.context,
								additionalProperties: e.additionalProperties
							};
							return n.sendEventViaImg(t)
						}
					}
				}(e)
			}
			return e.prototype.post = function(e) {
				return this.sendApiLoadEvent(e), Promise.resolve(e.response)
			}, e.prototype.sendApiLoadEvent = function(e) {
				this.eventTracker.sendEvent({
					eventType: y.LoadApi,
					context: b.Time,
					additionalProperties: {
						elapsedTime: e.elapsedTime,
						apiUrl: e.url,
						statusCode: e.response.status
					}
				})
			}, e
		}(),
		P = new S,
		I = new T,
		M = function(e) {
			function t(t) {
				void 0 === t && (t = {});
				var n = f({}, t);
				if (Array.isArray(n.middleware) ? n.middleware.unshift(P, I) : n.middleware = [P, I], t.robloxSiteDomain) {
					var r = new C(t.robloxSiteDomain);
					n.middleware.unshift(r)
				}
				return e.call(this, n) || this
			}
			return l(t, e), t
		}(v);

	function N(e) {
		return k(e)
	}

	function k(e, t) {
		return null == e ? e : {
			userIds: m(e, "userIds") ? e.userIds : void 0
		}
	}

	function L(e) {
		if (void 0 !== e) return null === e ? null : {
			userIds: e.userIds
		}
	}

	function U(e) {
		return _(e)
	}

	function _(e, t) {
		return null == e ? e : {
			location: m(e, "location") ? e.location : void 0,
			placeId: m(e, "placeId") ? e.placeId : void 0,
			disconnect: m(e, "disconnect") ? e.disconnect : void 0
		}
	}

	function D(e) {
		if (void 0 !== e) return null === e ? null : {
			location: e.location,
			placeId: e.placeId,
			disconnect: e.disconnect
		}
	}

	function V(e) {
		return F(e)
	}

	function F(e, t) {
		return null == e ? e : {
			isInvisible: m(e, "isInvisible") ? e.isInvisible : void 0
		}
	}

	function j(e) {
		if (void 0 !== e) return null === e ? null : {
			isInvisible: e.isInvisible
		}
	}

	function q(e) {
		return B(e)
	}

	function B(e, t) {
		return null == e ? e : {
			userIds: m(e, "userIds") ? e.userIds : void 0
		}
	}

	function H(e) {
		if (void 0 !== e) return null === e ? null : {
			userIds: e.userIds
		}
	}

	function G(e) {
		return W(e)
	}

	function W(e, t) {
		return null == e ? e : {
			userId: m(e, "userId") ? e.userId : void 0,
			lastOnline: m(e, "lastOnline") ? new Date(e.lastOnline) : void 0
		}
	}

	function z(e) {
		if (void 0 !== e) return null === e ? null : {
			userId: e.userId,
			lastOnline: void 0 === e.lastOnline ? void 0 : e.lastOnline.toISOString()
		}
	}

	function J(e) {
		return Y(e)
	}

	function Y(e, t) {
		return null == e ? e : {
			lastOnlineTimestamps: m(e, "lastOnlineTimestamps") ? e.lastOnlineTimestamps.map(G) : void 0
		}
	}

	function Q(e) {
		if (void 0 !== e) return null === e ? null : {
			lastOnlineTimestamps: void 0 === e.lastOnlineTimestamps ? void 0 : e.lastOnlineTimestamps.map(z)
		}
	}

	function K(e) {
		return Z(e)
	}

	function Z(e, t) {
		return null == e ? e : {
			userPresenceType: m(e, "userPresenceType") ? e.userPresenceType : void 0,
			lastLocation: m(e, "lastLocation") ? e.lastLocation : void 0,
			placeId: m(e, "placeId") ? e.placeId : void 0,
			rootPlaceId: m(e, "rootPlaceId") ? e.rootPlaceId : void 0,
			gameId: m(e, "gameId") ? e.gameId : void 0,
			universeId: m(e, "universeId") ? e.universeId : void 0,
			userId: m(e, "userId") ? e.userId : void 0,
			lastOnline: m(e, "lastOnline") ? new Date(e.lastOnline) : void 0,
			invisibleModeExpiry: m(e, "invisibleModeExpiry") ? new Date(e.invisibleModeExpiry) : void 0
		}
	}

	function X(e) {
		if (void 0 !== e) return null === e ? null : {
			userPresenceType: e.userPresenceType,
			lastLocation: e.lastLocation,
			placeId: e.placeId,
			rootPlaceId: e.rootPlaceId,
			gameId: e.gameId,
			universeId: e.universeId,
			userId: e.userId,
			lastOnline: void 0 === e.lastOnline ? void 0 : e.lastOnline.toISOString(),
			invisibleModeExpiry: void 0 === e.invisibleModeExpiry ? void 0 : e.invisibleModeExpiry.toISOString()
		}
	}

	function ee(e) {
		return te(e)
	}

	function te(e, t) {
		return null == e ? e : {
			userPresences: m(e, "userPresences") ? e.userPresences.map(K) : void 0
		}
	}

	function ne(e) {
		if (void 0 !== e) return null === e ? null : {
			userPresences: void 0 === e.userPresences ? void 0 : e.userPresences.map(X)
		}
	}! function(e) {
		e[e.NUMBER_0 = 0] = "NUMBER_0", e[e.NUMBER_1 = 1] = "NUMBER_1", e[e.NUMBER_2 = 2] = "NUMBER_2", e[e.NUMBER_3 = 3] = "NUMBER_3", e[e.NUMBER_4 = 4] = "NUMBER_4"
	}(x || (x = {}));
	var re, ie, oe, ae, se = function(e) {
			function t() {
				return null !== e && e.apply(this, arguments) || this
			}
			return l(t, e), t.prototype.v1PresenceLastOnlinePostRaw = function(e, t) {
				return p(this, void 0, void 0, (function() {
					var n, r, i;
					return d(this, (function(o) {
						switch (o.label) {
							case 0:
								if (null === e.lastOnlineRequest || void 0 === e.lastOnlineRequest) throw new $("lastOnlineRequest", "Required parameter requestParameters.lastOnlineRequest was null or undefined when calling v1PresenceLastOnlinePost.");
								return n = {}, (r = {})["Content-Type"] = "application/json", [4, this.request({
									path: "/v1/presence/last-online",
									method: "POST",
									headers: r,
									query: n,
									body: L(e.lastOnlineRequest)
								}, t)];
							case 1:
								return i = o.sent(), [2, new w(i, (function(e) {
									return J(e)
								}))]
						}
					}))
				}))
			}, t.prototype.v1PresenceLastOnlinePost = function(e, t) {
				return p(this, void 0, void 0, (function() {
					return d(this, (function(n) {
						switch (n.label) {
							case 0:
								return [4, this.v1PresenceLastOnlinePostRaw(e, t)];
							case 1:
								return [4, n.sent().value()];
							case 2:
								return [2, n.sent()]
						}
					}))
				}))
			}, t.prototype.v1PresenceRegisterAppPresencePostRaw = function(e, t) {
				return p(this, void 0, void 0, (function() {
					var n, r, i;
					return d(this, (function(o) {
						switch (o.label) {
							case 0:
								if (null === e.registerAppPresenceRequest || void 0 === e.registerAppPresenceRequest) throw new $("registerAppPresenceRequest", "Required parameter requestParameters.registerAppPresenceRequest was null or undefined when calling v1PresenceRegisterAppPresencePost.");
								return n = {}, (r = {})["Content-Type"] = "application/json", [4, this.request({
									path: "/v1/presence/register-app-presence",
									method: "POST",
									headers: r,
									query: n,
									body: D(e.registerAppPresenceRequest)
								}, t)];
							case 1:
								return i = o.sent(), [2, new w(i)]
						}
					}))
				}))
			}, t.prototype.v1PresenceRegisterAppPresencePost = function(e, t) {
				return p(this, void 0, void 0, (function() {
					return d(this, (function(n) {
						switch (n.label) {
							case 0:
								return [4, this.v1PresenceRegisterAppPresencePostRaw(e, t)];
							case 1:
								return [4, n.sent().value()];
							case 2:
								return [2, n.sent()]
						}
					}))
				}))
			}, t.prototype.v1PresenceSetInvisibilityStatusPostRaw = function(e, t) {
				return p(this, void 0, void 0, (function() {
					var n, r, i;
					return d(this, (function(o) {
						switch (o.label) {
							case 0:
								if (null === e.setInvisibilityRequest || void 0 === e.setInvisibilityRequest) throw new $("setInvisibilityRequest", "Required parameter requestParameters.setInvisibilityRequest was null or undefined when calling v1PresenceSetInvisibilityStatusPost.");
								return n = {}, (r = {})["Content-Type"] = "application/json", [4, this.request({
									path: "/v1/presence/set-invisibility-status",
									method: "POST",
									headers: r,
									query: n,
									body: j(e.setInvisibilityRequest)
								}, t)];
							case 1:
								return i = o.sent(), [2, new w(i)]
						}
					}))
				}))
			}, t.prototype.v1PresenceSetInvisibilityStatusPost = function(e, t) {
				return p(this, void 0, void 0, (function() {
					return d(this, (function(n) {
						switch (n.label) {
							case 0:
								return [4, this.v1PresenceSetInvisibilityStatusPostRaw(e, t)];
							case 1:
								return [4, n.sent().value()];
							case 2:
								return [2, n.sent()]
						}
					}))
				}))
			}, t.prototype.v1PresenceUsersPostRaw = function(e, t) {
				return p(this, void 0, void 0, (function() {
					var n, r, i;
					return d(this, (function(o) {
						switch (o.label) {
							case 0:
								if (null === e.userPresenceRequest || void 0 === e.userPresenceRequest) throw new $("userPresenceRequest", "Required parameter requestParameters.userPresenceRequest was null or undefined when calling v1PresenceUsersPost.");
								return n = {}, (r = {})["Content-Type"] = "application/json", [4, this.request({
									path: "/v1/presence/users",
									method: "POST",
									headers: r,
									query: n,
									body: H(e.userPresenceRequest)
								}, t)];
							case 1:
								return i = o.sent(), [2, new w(i, (function(e) {
									return ee(e)
								}))]
						}
					}))
				}))
			}, t.prototype.v1PresenceUsersPost = function(e, t) {
				return p(this, void 0, void 0, (function() {
					return d(this, (function(n) {
						switch (n.label) {
							case 0:
								return [4, this.v1PresenceUsersPostRaw(e, t)];
							case 1:
								return [4, n.sent().value()];
							case 2:
								return [2, n.sent()]
						}
					}))
				}))
			}, t
		}(h),
		ue = Object.freeze({
			__proto__: null,
			PresenceApi: se,
			RobloxPresenceApiModelsRequestLastOnlineRequestFromJSON: N,
			RobloxPresenceApiModelsRequestLastOnlineRequestFromJSONTyped: k,
			RobloxPresenceApiModelsRequestLastOnlineRequestToJSON: L,
			RobloxPresenceApiModelsRequestRegisterAppPresenceRequestFromJSON: U,
			RobloxPresenceApiModelsRequestRegisterAppPresenceRequestFromJSONTyped: _,
			RobloxPresenceApiModelsRequestRegisterAppPresenceRequestToJSON: D,
			RobloxPresenceApiModelsRequestSetInvisibilityStatusRequestFromJSON: V,
			RobloxPresenceApiModelsRequestSetInvisibilityStatusRequestFromJSONTyped: F,
			RobloxPresenceApiModelsRequestSetInvisibilityStatusRequestToJSON: j,
			RobloxPresenceApiModelsRequestUserPresenceRequestFromJSON: q,
			RobloxPresenceApiModelsRequestUserPresenceRequestFromJSONTyped: B,
			RobloxPresenceApiModelsRequestUserPresenceRequestToJSON: H,
			RobloxPresenceApiModelsResponseLastOnlineFromJSON: G,
			RobloxPresenceApiModelsResponseLastOnlineFromJSONTyped: W,
			RobloxPresenceApiModelsResponseLastOnlineResponseFromJSON: J,
			RobloxPresenceApiModelsResponseLastOnlineResponseFromJSONTyped: Y,
			RobloxPresenceApiModelsResponseLastOnlineResponseToJSON: Q,
			RobloxPresenceApiModelsResponseLastOnlineToJSON: z,
			RobloxPresenceApiModelsResponseUserPresenceFromJSON: K,
			RobloxPresenceApiModelsResponseUserPresenceFromJSONTyped: Z,
			RobloxPresenceApiModelsResponseUserPresenceToJSON: X,
			get RobloxPresenceApiModelsResponseUserPresenceUserPresenceTypeEnum() {
				return x
			},
			RobloxPresenceApiModelsResponseUserPresencesResponseFromJSON: ee,
			RobloxPresenceApiModelsResponseUserPresencesResponseFromJSONTyped: te,
			RobloxPresenceApiModelsResponseUserPresencesResponseToJSON: ne
		}),
		ce = Object.freeze({
			__proto__: null,
			PresenceApi: se,
			RobloxPresenceApiModelsRequestLastOnlineRequestFromJSON: N,
			RobloxPresenceApiModelsRequestLastOnlineRequestFromJSONTyped: k,
			RobloxPresenceApiModelsRequestLastOnlineRequestToJSON: L,
			RobloxPresenceApiModelsRequestRegisterAppPresenceRequestFromJSON: U,
			RobloxPresenceApiModelsRequestRegisterAppPresenceRequestFromJSONTyped: _,
			RobloxPresenceApiModelsRequestRegisterAppPresenceRequestToJSON: D,
			RobloxPresenceApiModelsRequestSetInvisibilityStatusRequestFromJSON: V,
			RobloxPresenceApiModelsRequestSetInvisibilityStatusRequestFromJSONTyped: F,
			RobloxPresenceApiModelsRequestSetInvisibilityStatusRequestToJSON: j,
			RobloxPresenceApiModelsRequestUserPresenceRequestFromJSON: q,
			RobloxPresenceApiModelsRequestUserPresenceRequestFromJSONTyped: B,
			RobloxPresenceApiModelsRequestUserPresenceRequestToJSON: H,
			RobloxPresenceApiModelsResponseLastOnlineFromJSON: G,
			RobloxPresenceApiModelsResponseLastOnlineFromJSONTyped: W,
			RobloxPresenceApiModelsResponseLastOnlineResponseFromJSON: J,
			RobloxPresenceApiModelsResponseLastOnlineResponseFromJSONTyped: Y,
			RobloxPresenceApiModelsResponseLastOnlineResponseToJSON: Q,
			RobloxPresenceApiModelsResponseLastOnlineToJSON: z,
			RobloxPresenceApiModelsResponseUserPresenceFromJSON: K,
			RobloxPresenceApiModelsResponseUserPresenceFromJSONTyped: Z,
			RobloxPresenceApiModelsResponseUserPresenceToJSON: X,
			get RobloxPresenceApiModelsResponseUserPresenceUserPresenceTypeEnum() {
				return x
			},
			RobloxPresenceApiModelsResponseUserPresencesResponseFromJSON: ee,
			RobloxPresenceApiModelsResponseUserPresencesResponseFromJSONTyped: te,
			RobloxPresenceApiModelsResponseUserPresencesResponseToJSON: ne,
			v1: ue
		}),
		le = ce.v1.RobloxPresenceApiModelsResponseUserPresenceUserPresenceTypeEnum,
		fe = {
			presenceStatusToClassName: ((re = {})[i.Offline] = "", re[i.Online] = "online", re[i.Game] = "game", re[i.Studio] = "studio", re[i.Invisible] = "invisible-mode", re),
			presenceStatusToAngularTranslation: ((ie = {})[i.Offline] = "Label.Offline", ie[i.Online] = "Label.Online", ie[i.Game] = "", ie[i.Studio] = "", ie[i.Invisible] = "Label.Invisible", ie),
			presenceStatusResponseToPresenceStatus: ((oe = {})[le.NUMBER_0] = i.Offline, oe[le.NUMBER_1] = i.Online, oe[le.NUMBER_2] = i.Game, oe[le.NUMBER_3] = i.Studio, oe[le.NUMBER_4] = i.Invisible, oe)
		};

	function pe(e, t, n, r) {
		return new(n || (n = Promise))((function(i, o) {
			function a(e) {
				try {
					u(r.next(e))
				} catch (e) {
					o(e)
				}
			}

			function s(e) {
				try {
					u(r.throw(e))
				} catch (e) {
					o(e)
				}
			}

			function u(e) {
				var t;
				e.done ? i(e.value) : (t = e.value, t instanceof n ? t : new n((function(e) {
					e(t)
				}))).then(a, s)
			}
			u((r = r.apply(e, t || [])).next())
		}))
	}

	function de(e, t) {
		var n, r, i, o = {
				label: 0,
				sent: function() {
					if (1 & i[0]) throw i[1];
					return i[1]
				},
				trys: [],
				ops: []
			},
			a = Object.create(("function" == typeof Iterator ? Iterator : Object).prototype);
		return a.next = s(0), a.throw = s(1), a.return = s(2), "function" == typeof Symbol && (a[Symbol.iterator] = function() {
			return this
		}), a;

		function s(s) {
			return function(u) {
				return function(s) {
					if (n) throw new TypeError("Generator is already executing.");
					for (; a && (a = 0, s[0] && (o = 0)), o;) try {
						if (n = 1, r && (i = 2 & s[0] ? r.return : s[0] ? r.throw || ((i = r.return) && i.call(r), 0) : r.next) && !(i = i.call(r, s[1])).done) return i;
						switch (r = 0, i && (s = [2 & s[0], i.value]), s[0]) {
							case 0:
							case 1:
								i = s;
								break;
							case 4:
								return o.label++, {
									value: s[1],
									done: !1
								};
							case 5:
								o.label++, r = s[1], s = [0];
								continue;
							case 7:
								s = o.ops.pop(), o.trys.pop();
								continue;
							default:
								if (!((i = (i = o.trys).length > 0 && i[i.length - 1]) || 6 !== s[0] && 2 !== s[0])) {
									o = 0;
									continue
								}
								if (3 === s[0] && (!i || s[1] > i[0] && s[1] < i[3])) {
									o.label = s[1];
									break
								}
								if (6 === s[0] && o.label < i[1]) {
									o.label = i[1], i = s;
									break
								}
								if (i && o.label < i[2]) {
									o.label = i[2], o.ops.push(s);
									break
								}
								i[2] && o.ops.pop(), o.trys.pop();
								continue
						}
						s = t.call(e, o)
					} catch (e) {
						s = [6, e], r = 0
					} finally {
						n = i = 0
					}
					if (5 & s[0]) throw s[1];
					return {
						value: s[0] ? s[1] : void 0,
						done: !0
					}
				}([s, u])
			}
		}
	}

	function he(e, t, n) {
		if (n || 2 === arguments.length)
			for (var r, i = 0, o = t.length; i < o; i++) !r && i in t || (r || (r = Array.prototype.slice.call(t, 0, i)), r[i] = t[i]);
		return e.concat(r || Array.prototype.slice.call(t))
	}
	"function" == typeof SuppressedError && SuppressedError,
		function(e) {
			e.Strict = "strict", e.Lax = "lax", e.None = "none"
		}(ae || (ae = {}));
	var $e, ve, me, ge, ye, be, we, Ee, Se, Te, xe, Oe = function() {
		return Oe = Object.assign || function(e) {
			for (var t, n = 1, r = arguments.length; n < r; n++)
				for (var i in t = arguments[n]) Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
			return e
		}, Oe.apply(this, arguments)
	};
	! function(e) {
		e.PagingParametersChanged = "Paging parameters were changed", e.GetItemsFailure = "Unable to get items", e.InvalidPageNumber = "Invalid page number"
	}($e || ($e = {})),
	function(e) {
		e[e.Initialized = 0] = "Initialized", e[e.Idle = 1] = "Idle", e[e.Loading = 2] = "Loading"
	}(ve || (ve = {})),
	function(e) {
		e.Asc = "Asc", e.Desc = "Desc"
	}(me || (me = {})),
	function(e) {
		e.Edge = "edge", e.IE = "ie", e.Chrome = "chrome", e.Opera = "opera", e.Safari = "safari", e.Firefox = "firefox", e.Unknown = ""
	}(ge || (ge = {})),
	function(e) {
		e[e.Windows = 0] = "Windows", e[e.macOS = 1] = "macOS", e[e.Linux = 2] = "Linux", e[e.Unix = 3] = "Unix", e[e.iOS = 4] = "iOS", e[e.Android = 5] = "Android", e[e.Unknown = 6] = "Unknown"
	}(ye || (ye = {})),
	function(e) {
		e.Unidentified = "Unidentified", e.Alt = "Alt", e.AltGraph = "AltGraph", e.CapsLock = "CapsLock", e.Control = "Control", e.Fn = "Fn", e.FnLock = "FnLock", e.Hyper = "Hyper", e.Meta = "Meta", e.NumLock = "NumLock", e.ScrollLock = "ScrollLock", e.Shift = "Shift", e.Super = "Super", e.Symbol = "Symbol", e.SymbolLock = "SymbolLock", e.Enter = "Enter", e.Tab = "Tab", e.ArrowDown = "ArrowDown", e.ArrowLeft = "ArrowLeft", e.ArrowRight = "ArrowRight", e.ArrowUp = "ArrowUp", e.End = "End", e.Home = "Home", e.PageDown = "PageDown", e.PageUp = "PageUp", e.Backspace = "Backspace", e.Clear = "Clear", e.Copy = "Copy", e.CrSel = "CrSel", e.Cut = "Cut", e.Delete = "Delete", e.EraseEof = "EraseEof", e.ExSel = "ExSel", e.Insert = "Insert", e.Paste = "Paste", e.Redo = "Redo", e.Undo = "Undo", e.Accept = "Accept", e.Again = "Again", e.Attn = "Attn", e.Cancel = "Cancel", e.ContextMenu = "ContextMenu", e.Escape = "Escape", e.Execute = "Execute", e.Find = "Find", e.Finish = "Finish", e.Help = "Help", e.Pause = "Pause", e.Play = "Play", e.Props = "Props", e.Select = "Select", e.ZoomIn = "ZoomIn", e.ZoomOut = "ZoomOut", e.BrightnessDown = "BrightnessDown", e.BrightnessUp = "BrightnessUp", e.Eject = "Eject", e.LogOff = "LogOff", e.Power = "Power", e.PowerOff = "PowerOff", e.PrintScreen = "PrintScreen", e.Hibernate = "Hibernate", e.Standby = "Standby", e.WakeUp = "WakeUp", e.AllCandidates = "AllCandidates", e.Alphanumeric = "Alphanumeric", e.CodeInput = "CodeInput", e.Compose = "Compose", e.Convert = "Convert", e.Dead = "Dead", e.FinalMode = "FinalMode", e.GroupFirst = "GroupFirst", e.GroupLast = "GroupLast", e.GroupNext = "GroupNext", e.GroupPrevious = "GroupPrevious", e.ModeChange = "ModeChange", e.NextCandidate = "NextCandidate", e.NonConvert = "NonConvert", e.PreviousCandidate = "PreviousCandidate", e.Process = "Process", e.SingleCandidate = "SingleCandidate", e.HangulMode = "HangulMode", e.HanjaMode = "HanjaMode", e.JunjaMode = "JunjaMode", e.Eisu = "Eisu", e.Hankaku = "Hankaku", e.Hiragana = "Hiragana", e.HiraganaKatakana = "HiraganaKatakana", e.KanaMode = "KanaMode", e.KanjiMode = "KanjiMode", e.Katakana = "Katakana", e.Romaji = "Romaji", e.Zenkaku = "Zenkaku", e.ZenkakuHanaku = "ZenkakuHanaku", e.F1 = "F1", e.F2 = "F2", e.F3 = "F3", e.F4 = "F4", e.F5 = "F5", e.F6 = "F6", e.F7 = "F7", e.F8 = "F8", e.F9 = "F9", e.F10 = "F10", e.F11 = "F11", e.F12 = "F12", e.F13 = "F13", e.F14 = "F14", e.F15 = "F15", e.F16 = "F16", e.F17 = "F17", e.F18 = "F18", e.F19 = "F19", e.F20 = "F20", e.Soft1 = "Soft1", e.Soft2 = "Soft2", e.Soft3 = "Soft3", e.Soft4 = "Soft4", e.AppSwitch = "AppSwitch", e.Call = "Call", e.Camera = "Camera", e.CameraFocus = "CameraFocus", e.EndCall = "EndCall", e.GoBack = "GoBack", e.GoHome = "GoHome", e.HeadsetHook = "HeadsetHook", e.LastNumberRedial = "LastNumberRedial", e.Notification = "Notification", e.MannerMode = "MannerMode", e.VoiceDial = "VoiceDial", e.ChannelDown = "ChannelDown", e.ChannelUp = "ChannelUp", e.MediaFastForward = "MediaFastForward", e.MediaPause = "MediaPause", e.MediaPlay = "MediaPlay", e.MediaPlayPause = "MediaPlayPause", e.MediaRecord = "MediaRecord", e.MediaRewind = "MediaRewind", e.MediaStop = "MediaStop", e.MediaTrackNext = "MediaTrackNext", e.MediaTrackPrevious = "MediaTrackPrevious", e.AudioBalanceLeft = "AudioBalanceLeft", e.AudioBalanceRight = "AudioBalanceRight", e.AudioBassDown = "AudioBassDown", e.AudioBassBoostDown = "AudioBassBoostDown", e.AudioBassBoostToggle = "AudioBassBoostToggle", e.AudioBassBoostUp = "AudioBassBoostUp", e.AudioBassUp = "AudioBassUp", e.AudioFaderFront = "AudioFaderFront", e.AudioFaderRear = "AudioFaderRear", e.AudioSurroundModeNext = "AudioSurroundModeNext", e.AudioTrebleDown = "AudioTrebleDown", e.AudioTrebleUp = "AudioTrebleUp", e.AudioVolumeDown = "AudioVolumeDown", e.AudioVolumeMute = "AudioVolumeMute", e.AudioVolumeUp = "AudioVolumeUp", e.MicrophoneToggle = "MicrophoneToggle", e.MicrophoneVolumeDown = "MicrophoneVolumeDown", e.MicrophoneVolumeMute = "MicrophoneVolumeMute", e.MicrophoneVolumeUp = "MicrophoneVolumeUp", e.TV = "TV", e.TV3DMode = "TV3DMode", e.TVAntennaCable = "TVAntennaCable", e.TVAudioDescription = "TVAudioDescription", e.TVAudioDescriptionMixDown = "TVAudioDescriptionMixDown", e.TVAudioDescriptionMixUp = "TVAudioDescriptionMixUp", e.TVContentsMenu = "TVContentsMenu", e.TVDataService = "TVDataService", e.TVInput = "TVInput", e.TVInputComponent1 = "TVInputComponent1", e.TVInputComponent2 = "TVInputComponent2", e.TVInputComposite1 = "TVInputComposite1", e.TVInputComposite2 = "TVInputComposite2", e.TVInputHDMI1 = "TVInputHDMI1", e.TVInputHDMI2 = "TVInputHDMI2", e.TVInputHDMI3 = "TVInputHDMI3", e.TVInputHDMI4 = "TVInputHDMI4", e.TVInputVGA1 = "TVInputVGA1", e.TVMediaContext = "TVMediaContext", e.TVNetwork = "TVNetwork", e.TVNumberEntry = "TVNumberEntry", e.TVPower = "TVPower", e.TVRadioService = "TVRadioService", e.TVSatellite = "TVSatellite", e.TVSatelliteBS = "TVSatelliteBS", e.TVSatelliteCS = "TVSatelliteCS", e.TVSatelliteToggle = "TVSatelliteToggle", e.TVTerrestrialAnalog = "TVTerrestrialAnalog", e.TVTerrestrialDigital = "TVTerrestrialDigital", e.TVTimer = "TVTimer", e.AVRInput = "AVRInput", e.AVRPower = "AVRPower", e.ColorF0Red = "ColorF0Red", e.ColorF1Green = "ColorF1Green", e.ColorF2Yellow = "ColorF2Yellow", e.ColorF3Blue = "ColorF3Blue", e.ColorF4Grey = "ColorF4Grey", e.ColorF5Brown = "ColorF5Brown", e.ClosedCaptionToggle = "ClosedCaptionToggle", e.Dimmer = "Dimmer", e.DisplaySwap = "DisplaySwap", e.DVR = "DVR", e.Exit = "Exit", e.FavoriteClear0 = "FavoriteClear0", e.FavoriteClear1 = "FavoriteClear1", e.FavoriteClear2 = "FavoriteClear2", e.FavoriteClear3 = "FavoriteClear3", e.FavoriteRecall0 = "FavoriteRecall0", e.FavoriteRecall1 = "FavoriteRecall1", e.FavoriteRecall2 = "FavoriteRecall2", e.FavoriteRecall3 = "FavoriteRecall3", e.FavoriteStore0 = "FavoriteStore0", e.FavoriteStore1 = "FavoriteStore1", e.FavoriteStore2 = "FavoriteStore2", e.FavoriteStore3 = "FavoriteStore3", e.Guide = "Guide", e.GuideNextDay = "GuideNextDay", e.GuidePreviousDay = "GuidePreviousDay", e.Info = "Info", e.InstantReplay = "InstantReplay", e.Link = "Link", e.ListProgram = "ListProgram", e.LiveContent = "LiveContent", e.Lock = "Lock", e.MediaApps = "MediaApps", e.MediaAudioTrack = "MediaAudioTrack", e.MediaLast = "MediaLast", e.MediaSkipBackward = "MediaSkipBackward", e.MediaSkipForward = "MediaSkipForward", e.MediaStepBackward = "MediaStepBackward", e.MediaStepForward = "MediaStepForward", e.MediaTopMenu = "MediaTopMenu", e.NavigateIn = "NavigateIn", e.NavigateNext = "NavigateNext", e.NavigateOut = "NavigateOut", e.NavigatePrevious = "NavigatePrevious", e.NextFavoriteChannel = "NextFavoriteChannel", e.NextUserProfile = "NextUserProfile", e.OnDemand = "OnDemand", e.Pairing = "Pairing", e.PinPDown = "PinPDown", e.PinPMove = "PinPMove", e.PinPToggle = "PinPToggle", e.PinPUp = "PinPUp", e.PlaySpeedDown = "PlaySpeedDown", e.PlaySpeedReset = "PlaySpeedReset", e.PlaySpeedUp = "PlaySpeedUp", e.RandomToggle = "RandomToggle", e.RcLowBattery = "RcLowBattery", e.RecordSpeedNext = "RecordSpeedNext", e.RfBypass = "RfBypass", e.ScanChannelsToggle = "ScanChannelsToggle", e.ScreenModeNext = "ScreenModeNext", e.Settings = "Settings", e.SplitScreenToggle = "SplitScreenToggle", e.STBInput = "STBInput", e.STBPower = "STBPower", e.Subtitle = "Subtitle", e.Teletext = "Teletext", e.VideoModeNext = "VideoModeNext", e.Wink = "Wink", e.ZoomToggle = "ZoomToggle", e.SpeechCorrectionList = "SpeechCorrectionList", e.SpeechInputToggle = "SpeechInputToggle", e.Close = "Close", e.New = "New", e.Open = "Open", e.Print = "Print", e.Save = "Save", e.SpellCheck = "SpellCheck", e.MailForward = "MailForward", e.MailReply = "MailReply", e.MailSend = "MailSend", e.LaunchCalculator = "LaunchCalculator", e.LaunchCalendar = "LaunchCalendar", e.LaunchContacts = "LaunchContacts", e.LaunchMail = "LaunchMail", e.LaunchMediaPlayer = "LaunchMediaPlayer", e.LaunchMusicPlayer = "LaunchMusicPlayer", e.LaunchMyComputer = "LaunchMyComputer", e.LaunchPhone = "LaunchPhone", e.LaunchScreenSaver = "LaunchScreenSaver", e.LaunchSpreadsheet = "LaunchSpreadsheet", e.LaunchWebBrowser = "LaunchWebBrowser", e.LaunchWebCam = "LaunchWebCam", e.LaunchWordProcessor = "LaunchWordProcessor", e.LaunchApplication1 = "LaunchApplication1", e.LaunchApplication2 = "LaunchApplication2", e.LaunchApplication3 = "LaunchApplication3", e.LaunchApplication4 = "LaunchApplication4", e.LaunchApplication5 = "LaunchApplication5", e.LaunchApplication6 = "LaunchApplication6", e.LaunchApplication7 = "LaunchApplication7", e.LaunchApplication8 = "LaunchApplication8", e.LaunchApplication9 = "LaunchApplication9", e.LaunchApplication10 = "LaunchApplication10", e.LaunchApplication11 = "LaunchApplication11", e.LaunchApplication12 = "LaunchApplication12", e.LaunchApplication13 = "LaunchApplication13", e.LaunchApplication14 = "LaunchApplication14", e.LaunchApplication15 = "LaunchApplication15", e.LaunchApplication16 = "LaunchApplication16", e.BrowserBack = "BrowserBack", e.BrowserFavorites = "BrowserFavorites", e.BrowserForward = "BrowserForward", e.BrowserHome = "BrowserHome", e.BrowserRefresh = "BrowserRefresh", e.BrowserSearch = "BrowserSearch", e.BrowserStop = "BrowserStop", e.Decimal = "Decimal", e.Key11 = "Key11", e.Key12 = "Key12", e.Multiply = "Multiply", e.Add = "Add", e.Divide = "Divide", e.Subtract = "Subtract", e.Separator = "Separator"
	}(be || (be = {})),
	function(e) {
		e[e.ACCEPTED = 202] = "ACCEPTED", e[e.BAD_GATEWAY = 502] = "BAD_GATEWAY", e[e.BAD_REQUEST = 400] = "BAD_REQUEST", e[e.CONFLICT = 409] = "CONFLICT", e[e.CONTINUE = 100] = "CONTINUE", e[e.CREATED = 201] = "CREATED", e[e.EXPECTATION_FAILED = 417] = "EXPECTATION_FAILED", e[e.FAILED_DEPENDENCY = 424] = "FAILED_DEPENDENCY", e[e.FORBIDDEN = 403] = "FORBIDDEN", e[e.GATEWAY_TIMEOUT = 504] = "GATEWAY_TIMEOUT", e[e.GONE = 410] = "GONE", e[e.HTTP_VERSION_NOT_SUPPORTED = 505] = "HTTP_VERSION_NOT_SUPPORTED", e[e.IM_A_TEAPOT = 418] = "IM_A_TEAPOT", e[e.INSUFFICIENT_SPACE_ON_RESOURCE = 419] = "INSUFFICIENT_SPACE_ON_RESOURCE", e[e.INSUFFICIENT_STORAGE = 507] = "INSUFFICIENT_STORAGE", e[e.INTERNAL_SERVER_ERROR = 500] = "INTERNAL_SERVER_ERROR", e[e.LENGTH_REQUIRED = 411] = "LENGTH_REQUIRED", e[e.LOCKED = 423] = "LOCKED", e[e.METHOD_FAILURE = 420] = "METHOD_FAILURE", e[e.METHOD_NOT_ALLOWED = 405] = "METHOD_NOT_ALLOWED", e[e.MOVED_PERMANENTLY = 301] = "MOVED_PERMANENTLY", e[e.MOVED_TEMPORARILY = 302] = "MOVED_TEMPORARILY", e[e.MULTI_STATUS = 207] = "MULTI_STATUS", e[e.MULTIPLE_CHOICES = 300] = "MULTIPLE_CHOICES", e[e.NETWORK_AUTHENTICATION_REQUIRED = 511] = "NETWORK_AUTHENTICATION_REQUIRED", e[e.NO_CONTENT = 204] = "NO_CONTENT", e[e.NON_AUTHORITATIVE_INFORMATION = 203] = "NON_AUTHORITATIVE_INFORMATION", e[e.NOT_ACCEPTABLE = 406] = "NOT_ACCEPTABLE", e[e.NOT_FOUND = 404] = "NOT_FOUND", e[e.NOT_IMPLEMENTED = 501] = "NOT_IMPLEMENTED", e[e.NOT_MODIFIED = 304] = "NOT_MODIFIED", e[e.OK = 200] = "OK", e[e.PARTIAL_CONTENT = 206] = "PARTIAL_CONTENT", e[e.PAYMENT_REQUIRED = 402] = "PAYMENT_REQUIRED", e[e.PERMANENT_REDIRECT = 308] = "PERMANENT_REDIRECT", e[e.PRECONDITION_FAILED = 412] = "PRECONDITION_FAILED", e[e.PRECONDITION_REQUIRED = 428] = "PRECONDITION_REQUIRED", e[e.PROCESSING = 102] = "PROCESSING", e[e.PROXY_AUTHENTICATION_REQUIRED = 407] = "PROXY_AUTHENTICATION_REQUIRED", e[e.REQUEST_HEADER_FIELDS_TOO_LARGE = 431] = "REQUEST_HEADER_FIELDS_TOO_LARGE", e[e.REQUEST_TIMEOUT = 408] = "REQUEST_TIMEOUT", e[e.REQUEST_TOO_LONG = 413] = "REQUEST_TOO_LONG", e[e.REQUEST_URI_TOO_LONG = 414] = "REQUEST_URI_TOO_LONG", e[e.REQUESTED_RANGE_NOT_SATISFIABLE = 416] = "REQUESTED_RANGE_NOT_SATISFIABLE", e[e.RESET_CONTENT = 205] = "RESET_CONTENT", e[e.SEE_OTHER = 303] = "SEE_OTHER", e[e.SERVICE_UNAVAILABLE = 503] = "SERVICE_UNAVAILABLE", e[e.SWITCHING_PROTOCOLS = 101] = "SWITCHING_PROTOCOLS", e[e.TEMPORARY_REDIRECT = 307] = "TEMPORARY_REDIRECT", e[e.TOO_MANY_REQUESTS = 429] = "TOO_MANY_REQUESTS", e[e.UNAUTHORIZED = 401] = "UNAUTHORIZED", e[e.UNAVAILABLE_FOR_LEGAL_REASONS = 451] = "UNAVAILABLE_FOR_LEGAL_REASONS", e[e.UNPROCESSABLE_ENTITY = 422] = "UNPROCESSABLE_ENTITY", e[e.UNSUPPORTED_MEDIA_TYPE = 415] = "UNSUPPORTED_MEDIA_TYPE", e[e.USE_PROXY = 305] = "USE_PROXY"
	}(we || (we = {})),
	function(e) {
		e.ACCEPTED = "Accepted", e.BAD_GATEWAY = "Bad Gateway", e.BAD_REQUEST = "Bad Request", e.CONFLICT = "Conflict", e.CONTINUE = "Continue", e.CREATED = "Created", e.EXPECTATION_FAILED = "Expectation Failed", e.FAILED_DEPENDENCY = "Failed Dependency", e.FORBIDDEN = "Forbidden", e.GATEWAY_TIMEOUT = "Gateway Timeout", e.GONE = "Gone", e.HTTP_VERSION_NOT_SUPPORTED = "HTTP Version Not Supported", e.IM_A_TEAPOT = "I'm a teapot", e.INSUFFICIENT_SPACE_ON_RESOURCE = "Insufficient Space on Resource", e.INSUFFICIENT_STORAGE = "Insufficient Storage", e.INTERNAL_SERVER_ERROR = "Internal Server Error", e.LENGTH_REQUIRED = "Length Required", e.LOCKED = "Locked", e.METHOD_FAILURE = "Method Failure", e.METHOD_NOT_ALLOWED = "Method Not Allowed", e.MOVED_PERMANENTLY = "Moved Permanently", e.MOVED_TEMPORARILY = "Moved Temporarily", e.MULTI_STATUS = "Multi-Status", e.MULTIPLE_CHOICES = "Multiple Choices", e.NETWORK_AUTHENTICATION_REQUIRED = "Network Authentication Required", e.NO_CONTENT = "No Content", e.NON_AUTHORITATIVE_INFORMATION = "Non Authoritative Information", e.NOT_ACCEPTABLE = "Not Acceptable", e.NOT_FOUND = "Not Found", e.NOT_IMPLEMENTED = "Not Implemented", e.NOT_MODIFIED = "Not Modified", e.OK = "OK", e.PARTIAL_CONTENT = "Partial Content", e.PAYMENT_REQUIRED = "Payment Required", e.PERMANENT_REDIRECT = "Permanent Redirect", e.PRECONDITION_FAILED = "Precondition Failed", e.PRECONDITION_REQUIRED = "Precondition Required", e.PROCESSING = "Processing", e.PROXY_AUTHENTICATION_REQUIRED = "Proxy Authentication Required", e.REQUEST_HEADER_FIELDS_TOO_LARGE = "Request Header Fields Too Large", e.REQUEST_TIMEOUT = "Request Timeout", e.REQUEST_TOO_LONG = "Request Entity Too Large", e.REQUEST_URI_TOO_LONG = "Request-URI Too Long", e.REQUESTED_RANGE_NOT_SATISFIABLE = "Requested Range Not Satisfiable", e.RESET_CONTENT = "Reset Content", e.SEE_OTHER = "See Other", e.SERVICE_UNAVAILABLE = "Service Unavailable", e.SWITCHING_PROTOCOLS = "Switching Protocols", e.TEMPORARY_REDIRECT = "Temporary Redirect", e.TOO_MANY_REQUESTS = "Too Many Requests", e.UNAUTHORIZED = "Unauthorized", e.UNAVAILABLE_FOR_LEGAL_REASONS = "Unavailable For Legal Reasons", e.UNPROCESSABLE_ENTITY = "Unprocessable Entity", e.UNSUPPORTED_MEDIA_TYPE = "Unsupported Media Type", e.USE_PROXY = "Use Proxy"
	}(Ee || (Ee = {})),
	function(e) {
		e.CONNECT = "CONNECT", e.DELETE = "DELETE", e.GET = "GET", e.HEAD = "HEAD", e.OPTIONS = "OPTIONS", e.PATCH = "PATCH", e.POST = "POST", e.PUT = "PUT", e.TRACE = "TRACE"
	}(Se || (Se = {})),
	function(e) {
		e.withPlus = "withPlus", e.withoutPlus = "withoutPlus"
	}(Te || (Te = {})),
	function(e) {
		e.processFailure = "processFailure", e.unretriableFailure = "unretriableFailure", e.maxAttemptsReached = "maxAttemptsReached"
	}(xe || (xe = {}));
	for (var Ae, Re, Ce, Pe = function(e, t) {
			return function(n) {
				var r = Math.pow(2, n - 1) * e;
				return Math.min(t, r)
			}
		}, Ie = function() {
			function e() {
				this.completeItems = new Map, this.requestQueue = [], this.active = !1
			}
			return e.prototype.handleBatchResult = function(e, t, n, r) {
				var i = this,
					o = 0,
					a = (new Date).getTime();
				t.forEach((function(e) {
					if (i.completeItems.has(e.key)) e.resolve(i.completeItems.get(e.key));
					else if (r.maxRetryAttempts && r.maxRetryAttempts > 0 && n !== xe.unretriableFailure) {
						var t = function(e, t) {
							return t.getFailureCooldown ? t.getFailureCooldown(e) : 1e3
						}(e.retryAttempts, r);
						o = o > 0 ? Math.min(o, t) : t, e.retryAttempts + 1 <= r.maxRetryAttempts ? (e.retryAttempts += 1, e.queueAfter = a + t, i.requestQueue.unshift(e)) : e.reject(xe.maxAttemptsReached)
					} else e.reject(n)
				}));
				var s = 250;
				r && r.processBatchWaitTime && (s = r.processBatchWaitTime), o > 0 && setTimeout((function() {
					return i.processQueue(e, r)
				}), o + s), this.active = !1, this.processQueue(e, r)
			}, e.prototype.processQueue = function(e, t) {
				var n, r = this;
				if (!this.active) {
					for (var i = [], o = new Map, a = [], s = (new Date).getTime(); i.length < t.batchSize && this.requestQueue.length > 0;) {
						var u = this.requestQueue.shift();
						u && (u.queueAfter > s ? (o.set(u.key, u), a.push(u)) : this.completeItems.has(u.key) ? u.resolve(this.completeItems.get(u.key)) : o.has(u.key) ? a.push(u) : (o.set(u.key, u), i.push(u)))
					}(n = this.requestQueue).push.apply(n, a), i.length <= 0 || (this.active = !0, e(i).then((function(n) {
						Object.keys(n).forEach((function(e) {
							r.saveCompleteItem(e, n[e], t)
						})), r.handleBatchResult(e, i, xe.processFailure, t)
					}), (function(n) {
						r.handleBatchResult(e, i, n, t)
					})))
				}
			}, e.prototype.saveCompleteItem = function(e, t, n) {
				var r = this;
				this.completeItems.set(e, t), n.getItemExpiration && setTimeout((function() {
					r.completeItems.delete(e)
				}), n.getItemExpiration(e))
			}, e.prototype.queueItem = function(e, t, n, r) {
				var i = this;
				return new Promise((function(o, a) {
					i.requestQueue.push({
						key: n(e),
						itemId: e,
						retryAttempts: 0,
						queueAfter: 0,
						startTime: new Date,
						resolve: o,
						reject: a
					}), setTimeout((function() {
						return i.processQueue(t, r)
					}), r.processBatchWaitTime)
				}))
			}, e.prototype.invalidateItem = function(e, t) {
				this.completeItems.delete(t(e))
			}, e
		}(), Me = function() {
			function e() {
				this.createExponentialBackoffCooldown = Pe, this.createQueueProcessor = function(e, t, n) {
					var r = new Ie;
					return {
						queueItem: function(i) {
							return r.queueItem(i, e, t, n)
						},
						invalidateItem: function(e) {
							return r.invalidateItem(e, t)
						}
					}
				}
			}
			return e.prototype.createRequestProcessor = function(e, t, n) {
				var r = Oe({}, n);
				return r.processBatchWaitTime || (r.processBatchWaitTime = 250), this.createQueueProcessor(e, t, r)
			}, e
		}(), Ne = [], ke = 0; ke < 256; ++ke) Ne.push((ke + 256).toString(16).substr(1));
	var Le, Ue = new ce.v1.PresenceApi(new M({
		basePath: null !== (Ce = null === (Re = null === (Ae = window.Roblox) || void 0 === Ae ? void 0 : Ae.EnvironmentUrls) || void 0 === Re ? void 0 : Re.presenceApi) && void 0 !== Ce ? Ce : "https://presence.roblox.com",
		credentials: "include"
	}));
	! function(e) {
		e.WebFriends = "webFriends", e.WebGroups = "webGroups", e.WebNavigation = "webNavigation", e.WebPlayerSearch = "webPlayerSearch", e.WebProfile = "webProfile"
	}(Le || (Le = {}));
	var _e = Le,
		De = function(e) {
			return e.includes("/profile") ? _e.WebProfile : e.includes("/search/users") ? _e.WebPlayerSearch : e.includes("/users/friends") ? _e.WebFriends : e.includes("/groups") ? _e.WebGroups : _e.WebNavigation
		},
		Ve = "PresenceData",
		Fe = function(e) {
			var t, n, r;
			return {
				userId: null !== (t = null == e ? void 0 : e.userId) && void 0 !== t ? t : 0,
				userPresenceType: fe.presenceStatusResponseToPresenceStatus[null !== (n = null == e ? void 0 : e.userPresenceType) && void 0 !== n ? n : 0],
				lastLocation: null !== (r = null == e ? void 0 : e.lastLocation) && void 0 !== r ? r : "Website",
				placeId: null == e ? void 0 : e.placeId,
				rootPlaceId: null == e ? void 0 : e.rootPlaceId,
				gameId: null == e ? void 0 : e.gameId,
				universeId: null == e ? void 0 : e.universeId,
				lastOnline: null == e ? void 0 : e.lastOnline,
				invisibleModeExpiry: null == e ? void 0 : e.invisibleModeExpiry
			}
		};

	function je() {
		var e, t = null === (e = window.localStorage) || void 0 === e ? void 0 : e.getItem(Ve),
			n = Object.entries(t ? JSON.parse(t) : {}),
			r = new Map;
		return n.forEach((function(e) {
			r.set(Number.parseInt(e[0], 10), e[1])
		})), r
	}

	function qe(e) {
		var t, n = je();
		e.forEach((function(e) {
			var t, r;
			if (e && e.userId) {
				var i = n.get(null == e ? void 0 : e.userId);
				i && i.data.userPresenceType === e.userPresenceType || null === (r = null === (t = window.Roblox) || void 0 === t ? void 0 : t.EventStream) || void 0 === r || r.SendEventWithTarget("PresenceImpression", "PresenceImpression", {
					clientTimestampMilliseconds: Date.now(),
					observedUserId: e.userId,
					presenceType: e.userPresenceType.toString(),
					placeId: e.placeId,
					universeId: e.universeId,
					gameId: e.gameId,
					lastLocation: e.lastLocation,
					implementationVariant: "Web"
				}, 1), n.set(null == e ? void 0 : e.userId, {
					data: e,
					lastUpdated: Date.now()
				})
			}
		})), n.forEach((function(e, t, r) {
			Date.now() - e.lastUpdated > 18e5 && n.delete(t)
		})), null === (t = window.localStorage) || void 0 === t || t.setItem(Ve, JSON.stringify(Object.fromEntries(n)))
	}

	function Be(e) {
		return pe(this, void 0, void 0, (function() {
			var t, n, r, o;
			return de(this, (function(a) {
				switch (a.label) {
					case 0:
						return a.trys.push([0, 2, , 3]), [4, Ue.v1PresenceUsersPost({
							userPresenceRequest: {
								userIds: e
							}
						})];
					case 1:
						return t = a.sent(), (n = (null !== (o = t.userPresences) && void 0 !== o ? o : []).map(Fe)).forEach((function(e) {
							var t, n, r, o, a;
							Number.parseInt(null !== (r = null === (n = null === (t = window.Roblox) || void 0 === t ? void 0 : t.CurrentUser) || void 0 === n ? void 0 : n.userId) && void 0 !== r ? r : "-1", 10) === e.userId && e.userPresenceType === i.Invisible && (null === (a = null === (o = window.Roblox) || void 0 === o ? void 0 : o.EventStream) || void 0 === a || a.SendEventWithTarget("invisibleModeFeedback", "invisibleModeFeedback", {
								surface: De(window.location.href)
							}, 1))
						})), [2, n];
					case 2:
						return r = a.sent(), console.error(r), [3, 3];
					case 3:
						return [2, []]
				}
			}))
		}))
	}
	var He = {
			fetchUserPresences: function(e) {
				return pe(this, arguments, void 0, (function(e, t) {
					var n, r, o, a, s, u, c, l, f, p, d, h, $;
					return void 0 === t && (t = !1), de(this, (function(v) {
						switch (v.label) {
							case 0:
								return (null === (h = null === (d = window.Roblox) || void 0 === d ? void 0 : d.CurrentUser) || void 0 === h ? void 0 : h.isAuthenticated) ? (r = [], o = [], t || (r = function(e) {
									var t = je();
									return e.map((function(e) {
										return t.get(e)
									})).filter((function(e) {
										return e && Date.now() - e.lastUpdated < 3e4
									})).map((function(e) {
										return null == e ? void 0 : e.data
									}))
								}(e), o = r.map((function(e) {
									return null == e ? void 0 : e.userId
								}))), (a = e.filter((function(e) {
									return !o.includes(e)
								}))).length > 0 ? [4, Be(a)] : [3, 2]) : (n = new Map, e.forEach((function(e) {
									n.set(e, function(e) {
										return {
											userId: e,
											userPresenceType: i.Offline,
											lastLocation: "Website"
										}
									}(e))
								})), [2, n]);
							case 1:
								return u = null !== ($ = v.sent()) && void 0 !== $ ? $ : [], [3, 3];
							case 2:
								u = [], v.label = 3;
							case 3:
								return s = u, c = he(he([], r, !0), s, !0), l = new Map, c.forEach((function(e) {
									e && e.userId && l.set(e.userId, e)
								})), qe(s), f = e.map((function(e) {
									return l.get(e)
								})).filter((function(e) {
									return null != e
								})), p = new Map, f.forEach((function(e) {
									var t;
									return p.set(null !== (t = e.userId) && void 0 !== t ? t : -1, e)
								})), [2, p]
						}
					}))
				}))
			},
			invalidateUserPresence: function(e) {
				qe([e])
			}
		},
		Ge = (new Me).createRequestProcessor((function(e) {
			return pe(void 0, void 0, void 0, (function() {
				var t, n;
				return de(this, (function(r) {
					switch (r.label) {
						case 0:
							return [4, He.fetchUserPresences(e.map((function(e) {
								return e.itemId
							})))];
						case 1:
							return t = r.sent(), n = {}, e.forEach((function(e) {
								t.has(e.itemId) && (n[e.key] = t.get(e.itemId), e.resolve(t.get(e.itemId)))
							})), [2, n]
					}
				}))
			}))
		}), (function(e) {
			return e.toString()
		}), {
			getFailureCooldown: function(e) {
				return 100 * e
			},
			maxRetryAttempts: 3,
			batchSize: 100,
			processBatchWaitTime: 10,
			getItemExpiration: function() {
				return 0
			}
		}),
		We = new Map,
		ze = {
			subscribeToPresenceChanges: function(e, t, n) {
				e.forEach((function(e) {
					var r;
					We.has(e) || We.set(e, []), null === (r = We.get(e)) || void 0 === r || r.push(t), n && Ge.queueItem(e).then(t)
				}))
			},
			getPresences: function(e) {
				var t = e.map((function(e) {
					return Ge.queueItem(e)
				}));
				return Promise.all(t)
			},
			refetchPresences: function(e) {
				return pe(this, void 0, void 0, (function() {
					var t;
					return de(this, (function(n) {
						switch (n.label) {
							case 0:
								return [4, He.fetchUserPresences(e, !0)];
							case 1:
								return (t = n.sent()).forEach((function(e, t, n) {
									var r;
									null === (r = We.get(e.userId)) || void 0 === r || r.forEach((function(t) {
										return t(e)
									}))
								})), [2, t]
						}
					}))
				}))
			},
			initializeEventListener: function() {
				document.addEventListener("Roblox.Presence.Update", (function(e) {
					var t = e;
					t && t.detail && t.detail.forEach((function(e) {
						var t;
						He.invalidateUserPresence(e), e.userId && We.has(e.userId) && (null === (t = We.get(e.userId)) || void 0 === t || t.forEach((function(t) {
							return t(e)
						})))
					}))
				}))
			},
			clearPresenceSubscriptions: function() {
				We = new Map
			}
		};
	! function() {
		var e, t;
		window.Roblox = window.Roblox || {}, window.Roblox.Presence = window.Roblox.Presence || {}, void 0 === (null === (t = null === (e = window.Roblox) || void 0 === e ? void 0 : e.Presence) || void 0 === t ? void 0 : t.presenceProvider) && (window.Roblox.Presence.presenceProvider = ze, ze.initializeEventListener())
	}();
	var Je = {
		getPresenceProvider: function() {
			return window.Roblox.Presence.presenceProvider
		},
		presenceClient: Ue
	};

	function Ye(e, t) {
		var r = (0, n.useState)(null != t ? t : {
				userId: null != e ? e : 0,
				lastLocation: "Website",
				userPresenceType: 0
			}),
			i = r[0],
			o = r[1];
		return (0, n.useEffect)((function() {
			void 0 !== e && Je.getPresenceProvider().subscribeToPresenceChanges([e], o, void 0 === t)
		}), [t, e]), i
	}! function(e) {
		var t = {
			objectMaxDepth: 5,
			urlErrorParamsEnabled: !0
		};

		function n(e) {
			if (!j(e)) return t;
			F(e.objectMaxDepth) && (t.objectMaxDepth = i(e.objectMaxDepth) ? e.objectMaxDepth : NaN), F(e.urlErrorParamsEnabled) && Z(e.urlErrorParamsEnabled) && (t.urlErrorParamsEnabled = e.urlErrorParamsEnabled)
		}

		function i(e) {
			return H(e) && e > 0
		}

		function o(e, n) {
			n = n || Error;
			var r = "https://errors.angularjs.org/1.8.3/",
				i = r.replace(".", "\\.") + "[\\s\\S]*",
				o = new RegExp(i, "g");
			return function() {
				var i, a, s = arguments[0],
					u = arguments[1],
					c = "[" + (e ? e + ":" : "") + s + "] ",
					l = de(arguments, 2).map((function(e) {
						return He(e, t.objectMaxDepth)
					}));
				if (c += u.replace(/\{\d+\}/g, (function(e) {
						var t = +e.slice(1, -1);
						return t < l.length ? l[t].replace(o, "") : e
					})), c += "\n" + r + (e ? e + "/" : "") + s, t.urlErrorParamsEnabled)
					for (a = 0, i = "?"; a < l.length; a++, i = "&") c += i + "p" + a + "=" + encodeURIComponent(l[a]);
				return new n(c)
			}
		}
		var a, s, u, c, l = /^\/(.+)\/([a-z]*)$/,
			f = "validity",
			p = Object.prototype.hasOwnProperty,
			d = function(e) {
				return B(e) ? e.toLowerCase() : e
			},
			h = function(e) {
				return B(e) ? e.toUpperCase() : e
			},
			$ = [].slice,
			v = [].splice,
			m = [].push,
			g = Object.prototype.toString,
			y = Object.getPrototypeOf,
			b = o("ng"),
			w = e.angular || (e.angular = {}),
			E = 0;

		function S(e) {
			if (null == e || Q(e)) return !1;
			if (W(e) || B(e) || s && e instanceof s) return !0;
			var t = "length" in Object(e) && e.length;
			return H(t) && (t >= 0 && t - 1 in e || "function" == typeof e.item)
		}

		function T(e, t, n) {
			var i, o;
			if (e)
				if (J(e))
					for (i in e) "prototype" !== i && "length" !== i && "name" !== i && e.hasOwnProperty(i) && t.call(n, e[i], i, e);
				else if (W(e) || S(e)) {
				var a = "object" != r(e);
				for (i = 0, o = e.length; i < o; i++)(a || i in e) && t.call(n, e[i], i, e)
			} else if (e.forEach && e.forEach !== T) e.forEach(t, n, e);
			else if (q(e))
				for (i in e) t.call(n, e[i], i, e);
			else if ("function" == typeof e.hasOwnProperty)
				for (i in e) e.hasOwnProperty(i) && t.call(n, e[i], i, e);
			else
				for (i in e) p.call(e, i) && t.call(n, e[i], i, e);
			return e
		}

		function x(e, t, n) {
			for (var r = Object.keys(e).sort(), i = 0; i < r.length; i++) t.call(n, e[r[i]], r[i]);
			return r
		}

		function O(e) {
			return function(t, n) {
				e(n, t)
			}
		}

		function A() {
			return ++E
		}

		function R(e, t) {
			t ? e.$$hashKey = t : delete e.$$hashKey
		}

		function C(e, t, n) {
			for (var r = e.$$hashKey, i = 0, o = t.length; i < o; ++i) {
				var a = t[i];
				if (j(a) || J(a))
					for (var s = Object.keys(a), u = 0, c = s.length; u < c; u++) {
						var l = s[u],
							f = a[l];
						n && j(f) ? G(f) ? e[l] = new Date(f.valueOf()) : Y(f) ? e[l] = new RegExp(f) : f.nodeName ? e[l] = f.cloneNode(!0) : re(f) ? e[l] = f.clone() : "__proto__" !== l && (j(e[l]) || (e[l] = W(f) ? [] : {}), C(e[l], [f], !0)) : e[l] = f
					}
			}
			return R(e, r), e
		}

		function P(e) {
			return C(e, $.call(arguments, 1), !1)
		}

		function I(e) {
			return C(e, $.call(arguments, 1), !0)
		}

		function M(e) {
			return parseInt(e, 10)
		}
		a = e.document.documentMode;
		var N = Number.isNaN || function(e) {
			return e != e
		};

		function k(e, t) {
			return P(Object.create(e), t)
		}

		function L() {}

		function U(e) {
			return e
		}

		function _(e) {
			return function() {
				return e
			}
		}

		function D(e) {
			return J(e.toString) && e.toString !== g
		}

		function V(e) {
			return void 0 === e
		}

		function F(e) {
			return void 0 !== e
		}

		function j(e) {
			return null !== e && "object" == r(e)
		}

		function q(e) {
			return null !== e && "object" == r(e) && !y(e)
		}

		function B(e) {
			return "string" == typeof e
		}

		function H(e) {
			return "number" == typeof e
		}

		function G(e) {
			return "[object Date]" === g.call(e)
		}

		function W(e) {
			return Array.isArray(e) || e instanceof Array
		}

		function z(e) {
			switch (g.call(e)) {
				case "[object Error]":
				case "[object Exception]":
				case "[object DOMException]":
					return !0;
				default:
					return e instanceof Error
			}
		}

		function J(e) {
			return "function" == typeof e
		}

		function Y(e) {
			return "[object RegExp]" === g.call(e)
		}

		function Q(e) {
			return e && e.window === e
		}

		function K(e) {
			return e && e.$evalAsync && e.$watch
		}

		function Z(e) {
			return "boolean" == typeof e
		}

		function X(e) {
			return e && J(e.then)
		}
		L.$inject = [], U.$inject = [];
		var ee = /^\[object (?:Uint8|Uint8Clamped|Uint16|Uint32|Int8|Int16|Int32|Float32|Float64)Array]$/,
			te = function(e) {
				return B(e) ? e.trim() : e
			},
			ne = function(e) {
				return e.replace(/([-()[\]{}+?*.$^|,:#<!\\])/g, "\\$1").replace(/\x08/g, "\\x08")
			};

		function re(e) {
			return !(!e || !(e.nodeName || e.prop && e.attr && e.find))
		}

		function ie(e) {
			return d(e.nodeName || e[0] && e[0].nodeName)
		}

		function oe(e, t) {
			return -1 !== Array.prototype.indexOf.call(e, t)
		}

		function ae(e, t) {
			var n = e.indexOf(t);
			return n >= 0 && e.splice(n, 1), n
		}

		function se(e, t, n) {
			var r, o, a = [],
				s = [];
			if (n = i(n) ? n : NaN, t) {
				if ((o = t) && H(o.length) && ee.test(g.call(o)) || (r = t, "[object ArrayBuffer]" === g.call(r))) throw b("cpta", "Can't copy! TypedArray destination cannot be mutated.");
				if (e === t) throw b("cpi", "Can't copy! Source and destination are identical.");
				return W(t) ? t.length = 0 : T(t, (function(e, n) {
					"$$hashKey" !== n && delete t[n]
				})), a.push(e), s.push(t), u(e, t, n)
			}
			return c(e, n);

			function u(e, t, n) {
				if (--n < 0) return "...";
				var r, i = t.$$hashKey;
				if (W(e))
					for (var o = 0, a = e.length; o < a; o++) t.push(c(e[o], n));
				else if (q(e))
					for (r in e) t[r] = c(e[r], n);
				else if (e && "function" == typeof e.hasOwnProperty)
					for (r in e) e.hasOwnProperty(r) && (t[r] = c(e[r], n));
				else
					for (r in e) p.call(e, r) && (t[r] = c(e[r], n));
				return R(t, i), t
			}

			function c(e, t) {
				if (!j(e)) return e;
				var n = a.indexOf(e);
				if (-1 !== n) return s[n];
				if (Q(e) || K(e)) throw b("cpws", "Can't copy! Making copies of Window or Scope instances is not supported.");
				var r = !1,
					i = function(e) {
						switch (g.call(e)) {
							case "[object Int8Array]":
							case "[object Int16Array]":
							case "[object Int32Array]":
							case "[object Float32Array]":
							case "[object Float64Array]":
							case "[object Uint8Array]":
							case "[object Uint8ClampedArray]":
							case "[object Uint16Array]":
							case "[object Uint32Array]":
								return new e.constructor(c(e.buffer), e.byteOffset, e.length);
							case "[object ArrayBuffer]":
								if (!e.slice) {
									var t = new ArrayBuffer(e.byteLength);
									return new Uint8Array(t).set(new Uint8Array(e)), t
								}
								return e.slice(0);
							case "[object Boolean]":
							case "[object Number]":
							case "[object String]":
							case "[object Date]":
								return new e.constructor(e.valueOf());
							case "[object RegExp]":
								var n = new RegExp(e.source, e.toString().match(/[^/]*$/)[0]);
								return n.lastIndex = e.lastIndex, n;
							case "[object Blob]":
								return new e.constructor([e], {
									type: e.type
								})
						}
						if (J(e.cloneNode)) return e.cloneNode(!0)
					}(e);
				return void 0 === i && (i = W(e) ? [] : Object.create(y(e)), r = !0), a.push(e), s.push(i), r ? u(e, i, t) : i
			}
		}

		function ue(e, t) {
			return e === t || e != e && t != t
		}

		function ce(e, t) {
			if (e === t) return !0;
			if (null === e || null === t) return !1;
			if (e != e && t != t) return !0;
			var n, i, o, a = r(e);
			if (a === r(t) && "object" === a) {
				if (!W(e)) {
					if (G(e)) return !!G(t) && ue(e.getTime(), t.getTime());
					if (Y(e)) return !!Y(t) && e.toString() === t.toString();
					if (K(e) || K(t) || Q(e) || Q(t) || W(t) || G(t) || Y(t)) return !1;
					for (i in o = Fe(), e)
						if ("$" !== i.charAt(0) && !J(e[i])) {
							if (!ce(e[i], t[i])) return !1;
							o[i] = !0
						} for (i in t)
						if (!(i in o) && "$" !== i.charAt(0) && F(t[i]) && !J(t[i])) return !1;
					return !0
				}
				if (!W(t)) return !1;
				if ((n = e.length) === t.length) {
					for (i = 0; i < n; i++)
						if (!ce(e[i], t[i])) return !1;
					return !0
				}
			}
			return !1
		}
		var le = function t() {
				if (!F(t.rules)) {
					var n = e.document.querySelector("[ng-csp]") || e.document.querySelector("[data-ng-csp]");
					if (n) {
						var r = n.getAttribute("ng-csp") || n.getAttribute("data-ng-csp");
						t.rules = {
							noUnsafeEval: !r || -1 !== r.indexOf("no-unsafe-eval"),
							noInlineStyle: !r || -1 !== r.indexOf("no-inline-style")
						}
					} else t.rules = {
						noUnsafeEval: function() {
							try {
								return new Function(""), !1
							} catch (e) {
								return !0
							}
						}(),
						noInlineStyle: !1
					}
				}
				return t.rules
			},
			fe = function t() {
				if (F(t.name_)) return t.name_;
				var n, r, i, o, a = Ae.length;
				for (r = 0; r < a; ++r)
					if (i = Ae[r], n = e.document.querySelector("[" + i.replace(":", "\\:") + "jq]")) {
						o = n.getAttribute(i + "jq");
						break
					} return t.name_ = o
			};

		function pe(e, t, n) {
			return e.concat($.call(t, n))
		}

		function de(e, t) {
			return $.call(e, t || 0)
		}

		function he(e, t) {
			var n = arguments.length > 2 ? de(arguments, 2) : [];
			return !J(t) || t instanceof RegExp ? t : n.length ? function() {
				return arguments.length ? t.apply(e, pe(n, arguments, 0)) : t.apply(e, n)
			} : function() {
				return arguments.length ? t.apply(e, arguments) : t.call(e)
			}
		}

		function $e(t, n) {
			var r = n;
			return "string" == typeof t && "$" === t.charAt(0) && "$" === t.charAt(1) ? r = void 0 : Q(n) ? r = "$WINDOW" : n && e.document === n ? r = "$DOCUMENT" : K(n) && (r = "$SCOPE"), r
		}

		function ve(e, t) {
			if (!V(e)) return H(t) || (t = t ? 2 : null), JSON.stringify(e, $e, t)
		}

		function me(e) {
			return B(e) ? JSON.parse(e) : e
		}
		var ge = /:/g;

		function ye(e, t) {
			e = e.replace(ge, "");
			var n = Date.parse("Jan 01, 1970 00:00:00 " + e) / 6e4;
			return N(n) ? t : n
		}

		function be(e, t) {
			return (e = new Date(e.getTime())).setMinutes(e.getMinutes() + t), e
		}

		function we(e, t, n) {
			n = n ? -1 : 1;
			var r = e.getTimezoneOffset();
			return be(e, n * (ye(t, r) - r))
		}

		function Ee(e) {
			e = s(e).clone().empty();
			var t = s("<div></div>").append(e).html();
			try {
				return e[0].nodeType === qe ? d(t) : t.match(/^(<[^>]+>)/)[1].replace(/^<([\w-]+)/, (function(e, t) {
					return "<" + d(t)
				}))
			} catch (e) {
				return d(t)
			}
		}

		function Se(e) {
			try {
				return decodeURIComponent(e)
			} catch (e) {}
		}

		function Te(e) {
			var t = {};
			return T((e || "").split("&"), (function(e) {
				var n, r, i;
				e && (r = e = e.replace(/\+/g, "%20"), -1 !== (n = e.indexOf("=")) && (r = e.substring(0, n), i = e.substring(n + 1)), F(r = Se(r)) && (i = !F(i) || Se(i), p.call(t, r) ? W(t[r]) ? t[r].push(i) : t[r] = [t[r], i] : t[r] = i))
			})), t
		}

		function xe(e) {
			return Oe(e, !0).replace(/%26/gi, "&").replace(/%3D/gi, "=").replace(/%2B/gi, "+")
		}

		function Oe(e, t) {
			return encodeURIComponent(e).replace(/%40/gi, "@").replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%3B/gi, ";").replace(/%20/g, t ? "%20" : "+")
		}
		var Ae = ["ng-", "data-ng-", "ng:", "x-ng-"],
			Re = function(t) {
				var n = t.currentScript;
				if (!n) return !0;
				if (!(n instanceof e.HTMLScriptElement || n instanceof e.SVGScriptElement)) return !1;
				var r = n.attributes;
				return [r.getNamedItem("src"), r.getNamedItem("href"), r.getNamedItem("xlink:href")].every((function(e) {
					if (!e) return !0;
					if (!e.value) return !1;
					var n = t.createElement("a");
					if (n.href = e.value, t.location.origin === n.origin) return !0;
					switch (n.protocol) {
						case "http:":
						case "https:":
						case "ftp:":
						case "blob:":
						case "file:":
						case "data:":
							return !0;
						default:
							return !1
					}
				}))
			}(e.document);

		function Ce(t, n, r) {
			j(r) || (r = {}), r = P({
				strictDi: !1
			}, r);
			var i = function() {
					if ((t = s(t)).injector()) {
						var i = t[0] === e.document ? "document" : Ee(t);
						throw b("btstrpd", "App already bootstrapped with this element '{0}'", i.replace(/</, "&lt;").replace(/>/, "&gt;"))
					}(n = n || []).unshift(["$provide", function(e) {
						e.value("$rootElement", t)
					}]), r.debugInfoEnabled && n.push(["$compileProvider", function(e) {
						e.debugInfoEnabled(!0)
					}]), n.unshift("ng");
					var o = Zt(n, r.strictDi);
					return o.invoke(["$rootScope", "$rootElement", "$compile", "$injector", function(e, t, n, r) {
						e.$apply((function() {
							t.data("$injector", r), n(t)(e)
						}))
					}]), o
				},
				o = /^NG_ENABLE_DEBUG_INFO!/,
				a = /^NG_DEFER_BOOTSTRAP!/;
			if (e && o.test(e.name) && (r.debugInfoEnabled = !0, e.name = e.name.replace(o, "")), e && !a.test(e.name)) return i();
			e.name = e.name.replace(a, ""), w.resumeBootstrap = function(e) {
				return T(e, (function(e) {
					n.push(e)
				})), i()
			}, J(w.resumeDeferredBootstrap) && w.resumeDeferredBootstrap()
		}

		function Pe() {
			e.name = "NG_ENABLE_DEBUG_INFO!" + e.name, e.location.reload()
		}

		function Ie(e) {
			var t = w.element(e).injector();
			if (!t) throw b("test", "no injector found for element argument to getTestability");
			return t.get("$$testability")
		}
		var Me = /[A-Z]/g;

		function Ne(e, t) {
			return t = t || "_", e.replace(Me, (function(e, n) {
				return (n ? t : "") + e.toLowerCase()
			}))
		}
		var ke = !1;

		function Le() {
			dt.legacyXHTMLReplacement = !0
		}

		function Ue(e, t, n) {
			if (!e) throw b("areq", "Argument '{0}' is {1}", t || "?", n || "required");
			return e
		}

		function _e(e, t, n) {
			return n && W(e) && (e = e[e.length - 1]), Ue(J(e), t, "not a function, got " + (e && "object" == r(e) ? e.constructor.name || "Object" : r(e))), e
		}

		function De(e, t) {
			if ("hasOwnProperty" === e) throw b("badname", "hasOwnProperty is not a valid {0} name", t)
		}

		function Ve(e) {
			for (var t, n = e[0], r = e[e.length - 1], i = 1; n !== r && (n = n.nextSibling); i++)(t || e[i] !== n) && (t || (t = s($.call(e, 0, i))), t.push(n));
			return t || e
		}

		function Fe() {
			return Object.create(null)
		}

		function je(e) {
			if (null == e) return "";
			switch (r(e)) {
				case "string":
					break;
				case "number":
					e = "" + e;
					break;
				default:
					e = !D(e) || W(e) || G(e) ? ve(e) : e.toString()
			}
			return e
		}
		var qe = 3;

		function Be(e, t) {
			if (W(e)) {
				t = t || [];
				for (var n = 0, r = e.length; n < r; n++) t[n] = e[n]
			} else if (j(e))
				for (var i in t = t || {}, e) "$" === i.charAt(0) && "$" === i.charAt(1) || (t[i] = e[i]);
			return t || e
		}

		function He(e, t) {
			return "function" == typeof e ? e.toString().replace(/ \{[\s\S]*$/, "") : V(e) ? "undefined" : "string" != typeof e ? function(e, t) {
				var n = [];
				return i(t) && (e = w.copy(e, null, t)), JSON.stringify(e, (function(e, t) {
					if (j(t = $e(e, t))) {
						if (n.indexOf(t) >= 0) return "...";
						n.push(t)
					}
					return t
				}))
			}(e, t) : e
		}
		var Ge = {
			full: "1.8.3",
			major: 1,
			minor: 8,
			dot: 3,
			codeName: "ultimate-farewell"
		};
		dt.expando = "ng339";
		var We = dt.cache = {},
			ze = 1;
		dt._data = function(e) {
			return this.cache[e[this.expando]] || {}
		};
		var Je = /-([a-z])/g,
			Ye = /^-ms-/,
			Qe = {
				mouseleave: "mouseout",
				mouseenter: "mouseover"
			},
			Ke = o("jqLite");

		function Ze(e, t) {
			return t.toUpperCase()
		}

		function Xe(e) {
			return e.replace(Je, Ze)
		}
		var et = /^<([\w-]+)\s*\/?>(?:<\/\1>|)$/,
			tt = /<|&#?\w+;/,
			nt = /<([\w:-]+)/,
			rt = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:-]+)[^>]*)\/>/gi,
			it = {
				thead: ["table"],
				col: ["colgroup", "table"],
				tr: ["tbody", "table"],
				td: ["tr", "tbody", "table"]
			};
		it.tbody = it.tfoot = it.colgroup = it.caption = it.thead, it.th = it.td;
		var ot = {
			option: [1, '<select multiple="multiple">', "</select>"],
			_default: [0, "", ""]
		};
		for (var at in it) {
			var st = it[at],
				ut = st.slice().reverse();
			ot[at] = [ut.length, "<" + ut.join("><") + ">", "</" + st.join("></") + ">"]
		}

		function ct(e) {
			return !tt.test(e)
		}

		function lt(e) {
			var t = e.nodeType;
			return 1 === t || !t || 9 === t
		}

		function ft(t, n) {
			var r, i, o, s, u, c = n.createDocumentFragment(),
				l = [];
			if (ct(t)) l.push(n.createTextNode(t));
			else {
				if (r = c.appendChild(n.createElement("div")), i = (nt.exec(t) || ["", ""])[1].toLowerCase(), s = dt.legacyXHTMLReplacement ? t.replace(rt, "<$1></$2>") : t, a < 10)
					for (o = ot[i] || ot._default, r.innerHTML = o[1] + s + o[2], u = o[0]; u--;) r = r.firstChild;
				else {
					for (u = (o = it[i] || []).length; --u > -1;) r.appendChild(e.document.createElement(o[u])), r = r.firstChild;
					r.innerHTML = s
				}
				l = pe(l, r.childNodes), (r = c.firstChild).textContent = ""
			}
			return c.textContent = "", c.innerHTML = "", T(l, (function(e) {
				c.appendChild(e)
			})), c
		}
		ot.optgroup = ot.option;
		var pt = e.Node.prototype.contains || function(e) {
			return !!(16 & this.compareDocumentPosition(e))
		};

		function dt(t) {
			if (t instanceof dt) return t;
			var n, r, i, o;
			if (B(t) && (t = te(t), n = !0), !(this instanceof dt)) {
				if (n && "<" !== t.charAt(0)) throw Ke("nosel", "Looking up elements via selectors is not supported by jqLite! See: http://docs.angularjs.org/api/angular.element");
				return new dt(t)
			}
			n ? xt(this, (r = t, i = i || e.document, (o = et.exec(r)) ? [i.createElement(o[1])] : (o = ft(r, i)) ? o.childNodes : [])) : J(t) ? Pt(t) : xt(this, t)
		}

		function ht(e) {
			return e.cloneNode(!0)
		}

		function $t(e, t) {
			!t && lt(e) && s.cleanData([e]), e.querySelectorAll && s.cleanData(e.querySelectorAll("*"))
		}

		function vt(e) {
			var t;
			for (t in e) return !1;
			return !0
		}

		function mt(e) {
			var t = e.ng339,
				n = t && We[t],
				r = n && n.events,
				i = n && n.data;
			i && !vt(i) || r && !vt(r) || (delete We[t], e.ng339 = void 0)
		}

		function gt(e, t, n, r) {
			if (F(r)) throw Ke("offargs", "jqLite#off() does not support the `selector` argument");
			var i = bt(e),
				o = i && i.events,
				a = i && i.handle;
			if (a) {
				if (t) {
					var s = function(t) {
						var r = o[t];
						F(n) && ae(r || [], n), F(n) && r && r.length > 0 || (e.removeEventListener(t, a), delete o[t])
					};
					T(t.split(" "), (function(e) {
						s(e), Qe[e] && s(Qe[e])
					}))
				} else
					for (t in o) "$destroy" !== t && e.removeEventListener(t, a), delete o[t];
				mt(e)
			}
		}

		function yt(e, t) {
			var n = e.ng339,
				r = n && We[n];
			r && (t ? delete r.data[t] : r.data = {}, mt(e))
		}

		function bt(e, t) {
			var n = e.ng339,
				r = n && We[n];
			return t && !r && (e.ng339 = n = ++ze, r = We[n] = {
				events: {},
				data: {},
				handle: void 0
			}), r
		}

		function wt(e, t, n) {
			if (lt(e)) {
				var r, i = F(n),
					o = !i && t && !j(t),
					a = !t,
					s = bt(e, !o),
					u = s && s.data;
				if (i) u[Xe(t)] = n;
				else {
					if (a) return u;
					if (o) return u && u[Xe(t)];
					for (r in t) u[Xe(r)] = t[r]
				}
			}
		}

		function Et(e, t) {
			return !!e.getAttribute && (" " + (e.getAttribute("class") || "") + " ").replace(/[\n\t]/g, " ").indexOf(" " + t + " ") > -1
		}

		function St(e, t) {
			if (t && e.setAttribute) {
				var n = (" " + (e.getAttribute("class") || "") + " ").replace(/[\n\t]/g, " "),
					r = n;
				T(t.split(" "), (function(e) {
					e = te(e), r = r.replace(" " + e + " ", " ")
				})), r !== n && e.setAttribute("class", te(r))
			}
		}

		function Tt(e, t) {
			if (t && e.setAttribute) {
				var n = (" " + (e.getAttribute("class") || "") + " ").replace(/[\n\t]/g, " "),
					r = n;
				T(t.split(" "), (function(e) {
					e = te(e), -1 === r.indexOf(" " + e + " ") && (r += e + " ")
				})), r !== n && e.setAttribute("class", te(r))
			}
		}

		function xt(e, t) {
			if (t)
				if (t.nodeType) e[e.length++] = t;
				else {
					var n = t.length;
					if ("number" == typeof n && t.window !== t) {
						if (n)
							for (var r = 0; r < n; r++) e[e.length++] = t[r]
					} else e[e.length++] = t
				}
		}

		function Ot(e, t) {
			return At(e, "$" + (t || "ngController") + "Controller")
		}

		function At(e, t, n) {
			9 === e.nodeType && (e = e.documentElement);
			for (var r = W(t) ? t : [t]; e;) {
				for (var i = 0, o = r.length; i < o; i++)
					if (F(n = s.data(e, r[i]))) return n;
				e = e.parentNode || 11 === e.nodeType && e.host
			}
		}

		function Rt(e) {
			for ($t(e, !0); e.firstChild;) e.removeChild(e.firstChild)
		}

		function Ct(e, t) {
			t || $t(e);
			var n = e.parentNode;
			n && n.removeChild(e)
		}

		function Pt(t) {
			function n() {
				e.document.removeEventListener("DOMContentLoaded", n), e.removeEventListener("load", n), t()
			}
			"complete" === e.document.readyState ? e.setTimeout(t) : (e.document.addEventListener("DOMContentLoaded", n), e.addEventListener("load", n))
		}
		var It = dt.prototype = {
				ready: Pt,
				toString: function() {
					var e = [];
					return T(this, (function(t) {
						e.push("" + t)
					})), "[" + e.join(", ") + "]"
				},
				eq: function(e) {
					return s(e >= 0 ? this[e] : this[this.length + e])
				},
				length: 0,
				push: m,
				sort: [].sort,
				splice: [].splice
			},
			Mt = {};
		T("multiple,selected,checked,disabled,readOnly,required,open".split(","), (function(e) {
			Mt[d(e)] = e
		}));
		var Nt = {};
		T("input,select,option,textarea,button,form,details".split(","), (function(e) {
			Nt[e] = !0
		}));
		var kt = {
			ngMinlength: "minlength",
			ngMaxlength: "maxlength",
			ngMin: "min",
			ngMax: "max",
			ngPattern: "pattern",
			ngStep: "step"
		};

		function Lt(e, t) {
			var n = Mt[t.toLowerCase()];
			return n && Nt[ie(e)] && n
		}

		function Ut(e, t, n) {
			n.call(e, t)
		}

		function _t(e, t, n) {
			var r = t.relatedTarget;
			r && (r === e || pt.call(e, r)) || n.call(e, t)
		}

		function Dt() {
			this.$get = function() {
				return P(dt, {
					hasClass: function(e, t) {
						return e.attr && (e = e[0]), Et(e, t)
					},
					addClass: function(e, t) {
						return e.attr && (e = e[0]), Tt(e, t)
					},
					removeClass: function(e, t) {
						return e.attr && (e = e[0]), St(e, t)
					}
				})
			}
		}

		function Vt(e, t) {
			var n = e && e.$$hashKey;
			if (n) return "function" == typeof n && (n = e.$$hashKey()), n;
			var i = r(e);
			return "function" === i || "object" === i && null !== e ? e.$$hashKey = i + ":" + (t || A)() : i + ":" + e
		}
		T({
			data: wt,
			removeData: yt,
			hasData: function(e) {
				for (var t in We[e.ng339]) return !0;
				return !1
			},
			cleanData: function(e) {
				for (var t = 0, n = e.length; t < n; t++) yt(e[t]), gt(e[t])
			}
		}, (function(e, t) {
			dt[t] = e
		})), T({
			data: wt,
			inheritedData: At,
			scope: function(e) {
				return s.data(e, "$scope") || At(e.parentNode || e, ["$isolateScope", "$scope"])
			},
			isolateScope: function(e) {
				return s.data(e, "$isolateScope") || s.data(e, "$isolateScopeNoTemplate")
			},
			controller: Ot,
			injector: function(e) {
				return At(e, "$injector")
			},
			removeAttr: function(e, t) {
				e.removeAttribute(t)
			},
			hasClass: Et,
			css: function(e, t, n) {
				if (t = function(e) {
						return Xe(e.replace(Ye, "ms-"))
					}(t), !F(n)) return e.style[t];
				e.style[t] = n
			},
			attr: function(e, t, n) {
				var r, i = e.nodeType;
				if (i !== qe && 2 !== i && 8 !== i && e.getAttribute) {
					var o = d(t),
						a = Mt[o];
					if (!F(n)) return r = e.getAttribute(t), a && null !== r && (r = o), null === r ? void 0 : r;
					null === n || !1 === n && a ? e.removeAttribute(t) : e.setAttribute(t, a ? o : n)
				}
			},
			prop: function(e, t, n) {
				if (!F(n)) return e[t];
				e[t] = n
			},
			text: function() {
				return e.$dv = "", e;

				function e(e, t) {
					if (V(t)) {
						var n = e.nodeType;
						return 1 === n || n === qe ? e.textContent : ""
					}
					e.textContent = t
				}
			}(),
			val: function(e, t) {
				if (V(t)) {
					if (e.multiple && "select" === ie(e)) {
						var n = [];
						return T(e.options, (function(e) {
							e.selected && n.push(e.value || e.text)
						})), n
					}
					return e.value
				}
				e.value = t
			},
			html: function(e, t) {
				if (V(t)) return e.innerHTML;
				$t(e, !0), e.innerHTML = t
			},
			empty: Rt
		}, (function(e, t) {
			dt.prototype[t] = function(t, n) {
				var r, i, o = this.length;
				if (e !== Rt && V(2 === e.length && e !== Et && e !== Ot ? t : n)) {
					if (j(t)) {
						for (r = 0; r < o; r++)
							if (e === wt) e(this[r], t);
							else
								for (i in t) e(this[r], i, t[i]);
						return this
					}
					for (var a = e.$dv, s = V(a) ? Math.min(o, 1) : o, u = 0; u < s; u++) {
						var c = e(this[u], t, n);
						a = a ? a + c : c
					}
					return a
				}
				for (r = 0; r < o; r++) e(this[r], t, n);
				return this
			}
		})), T({
			removeData: yt,
			on: function(e, t, n, r) {
				if (F(r)) throw Ke("onargs", "jqLite#on() does not support the `selector` or `eventData` parameters");
				if (lt(e)) {
					var i = bt(e, !0),
						o = i.events,
						a = i.handle;
					a || (a = i.handle = function(e, t) {
						var n = function(n, r) {
							n.isDefaultPrevented = function() {
								return n.defaultPrevented
							};
							var i = t[r || n.type],
								o = i ? i.length : 0;
							if (o) {
								if (V(n.immediatePropagationStopped)) {
									var a = n.stopImmediatePropagation;
									n.stopImmediatePropagation = function() {
										n.immediatePropagationStopped = !0, n.stopPropagation && n.stopPropagation(), a && a.call(n)
									}
								}
								n.isImmediatePropagationStopped = function() {
									return !0 === n.immediatePropagationStopped
								};
								var s = i.specialHandlerWrapper || Ut;
								o > 1 && (i = Be(i));
								for (var u = 0; u < o; u++) n.isImmediatePropagationStopped() || s(e, n, i[u])
							}
						};
						return n.elem = e, n
					}(e, o));
					for (var s = t.indexOf(" ") >= 0 ? t.split(" ") : [t], u = s.length, c = function(t, r, i) {
							var s = o[t];
							s || ((s = o[t] = []).specialHandlerWrapper = r, "$destroy" === t || i || e.addEventListener(t, a)), s.push(n)
						}; u--;) t = s[u], Qe[t] ? (c(Qe[t], _t), c(t, void 0, !0)) : c(t)
				}
			},
			off: gt,
			one: function(e, t, n) {
				(e = s(e)).on(t, (function r() {
					e.off(t, n), e.off(t, r)
				})), e.on(t, n)
			},
			replaceWith: function(e, t) {
				var n, r = e.parentNode;
				$t(e), T(new dt(t), (function(t) {
					n ? r.insertBefore(t, n.nextSibling) : r.replaceChild(t, e), n = t
				}))
			},
			children: function(e) {
				var t = [];
				return T(e.childNodes, (function(e) {
					1 === e.nodeType && t.push(e)
				})), t
			},
			contents: function(e) {
				return e.contentDocument || e.childNodes || []
			},
			append: function(e, t) {
				var n = e.nodeType;
				if (1 === n || 11 === n)
					for (var r = 0, i = (t = new dt(t)).length; r < i; r++) {
						var o = t[r];
						e.appendChild(o)
					}
			},
			prepend: function(e, t) {
				if (1 === e.nodeType) {
					var n = e.firstChild;
					T(new dt(t), (function(t) {
						e.insertBefore(t, n)
					}))
				}
			},
			wrap: function(e, t) {
				var n, r, i;
				n = e, r = s(t).eq(0).clone()[0], (i = n.parentNode) && i.replaceChild(r, n), r.appendChild(n)
			},
			remove: Ct,
			detach: function(e) {
				Ct(e, !0)
			},
			after: function(e, t) {
				var n = e,
					r = e.parentNode;
				if (r)
					for (var i = 0, o = (t = new dt(t)).length; i < o; i++) {
						var a = t[i];
						r.insertBefore(a, n.nextSibling), n = a
					}
			},
			addClass: Tt,
			removeClass: St,
			toggleClass: function(e, t, n) {
				t && T(t.split(" "), (function(t) {
					var r = n;
					V(r) && (r = !Et(e, t)), (r ? Tt : St)(e, t)
				}))
			},
			parent: function(e) {
				var t = e.parentNode;
				return t && 11 !== t.nodeType ? t : null
			},
			next: function(e) {
				return e.nextElementSibling
			},
			find: function(e, t) {
				return e.getElementsByTagName ? e.getElementsByTagName(t) : []
			},
			clone: ht,
			triggerHandler: function(e, t, n) {
				var r, i, o, a = t.type || t,
					s = bt(e),
					u = s && s.events,
					c = u && u[a];
				c && (r = {
					preventDefault: function() {
						this.defaultPrevented = !0
					},
					isDefaultPrevented: function() {
						return !0 === this.defaultPrevented
					},
					stopImmediatePropagation: function() {
						this.immediatePropagationStopped = !0
					},
					isImmediatePropagationStopped: function() {
						return !0 === this.immediatePropagationStopped
					},
					stopPropagation: L,
					type: a,
					target: e
				}, t.type && (r = P(r, t)), i = Be(c), o = n ? [r].concat(n) : [r], T(i, (function(t) {
					r.isImmediatePropagationStopped() || t.apply(e, o)
				})))
			}
		}, (function(e, t) {
			dt.prototype[t] = function(t, n, r) {
				for (var i, o = 0, a = this.length; o < a; o++) V(i) ? F(i = e(this[o], t, n, r)) && (i = s(i)) : xt(i, e(this[o], t, n, r));
				return F(i) ? i : this
			}
		})), dt.prototype.bind = dt.prototype.on, dt.prototype.unbind = dt.prototype.off;
		var Ft = Object.create(null);

		function jt() {
			this._keys = [], this._values = [], this._lastKey = NaN, this._lastIndex = -1
		}
		jt.prototype = {
			_idx: function(e) {
				return e !== this._lastKey && (this._lastKey = e, this._lastIndex = this._keys.indexOf(e)), this._lastIndex
			},
			_transformKey: function(e) {
				return N(e) ? Ft : e
			},
			get: function(e) {
				e = this._transformKey(e);
				var t = this._idx(e);
				if (-1 !== t) return this._values[t]
			},
			has: function(e) {
				return e = this._transformKey(e), -1 !== this._idx(e)
			},
			set: function(e, t) {
				e = this._transformKey(e);
				var n = this._idx(e); - 1 === n && (n = this._lastIndex = this._keys.length), this._keys[n] = e, this._values[n] = t
			},
			delete: function(e) {
				e = this._transformKey(e);
				var t = this._idx(e);
				return -1 !== t && (this._keys.splice(t, 1), this._values.splice(t, 1), this._lastKey = NaN, this._lastIndex = -1, !0)
			}
		};
		var qt = jt,
			Bt = [function() {
				this.$get = [function() {
					return qt
				}]
			}],
			Ht = /^([^(]+?)=>/,
			Gt = /^[^(]*\(\s*([^)]*)\)/m,
			Wt = /,/,
			zt = /^\s*(_?)(\S+?)\1\s*$/,
			Jt = /((\/\/.*$)|(\/\*[\s\S]*?\*\/))/gm,
			Yt = o("$injector");

		function Qt(e) {
			return Function.prototype.toString.call(e)
		}

		function Kt(e) {
			var t = Qt(e).replace(Jt, "");
			return t.match(Ht) || t.match(Gt)
		}

		function Zt(e, t) {
			t = !0 === t;
			var n = {},
				r = "Provider",
				i = [],
				o = new qt,
				s = {
					$provide: {
						provider: h($),
						factory: h(m),
						service: h((function(e, t) {
							return m(e, ["$injector", function(e) {
								return e.instantiate(t)
							}])
						})),
						value: h((function(e, t) {
							return m(e, _(t), !1)
						})),
						constant: h((function(e, t) {
							De(e, "constant"), s[e] = t, l[e] = t
						})),
						decorator: function(e, t) {
							var n = u.get(e + r),
								i = n.$get;
							n.$get = function() {
								var e = p.invoke(i, n);
								return p.invoke(t, null, {
									$delegate: e
								})
							}
						}
					}
				},
				u = s.$injector = y(s, (function(e, t) {
					throw w.isString(t) && i.push(t), Yt("unpr", "Unknown provider: {0}", i.join(" <- "))
				})),
				l = {},
				f = y(l, (function(e, t) {
					var n = u.get(e + r, t);
					return p.invoke(n.$get, n, void 0, e)
				})),
				p = f;
			s["$injector" + r] = {
				$get: _(f)
			}, p.modules = u.modules = Fe();
			var d = g(e);
			return (p = f.get("$injector")).strictDi = t, T(d, (function(e) {
				e && p.invoke(e)
			})), p.loadNewModules = function(e) {
				T(g(e), (function(e) {
					e && p.invoke(e)
				}))
			}, p;

			function h(e) {
				return function(t, n) {
					if (!j(t)) return e(t, n);
					T(t, O(e))
				}
			}

			function $(e, t) {
				if (De(e, "service"), (J(t) || W(t)) && (t = u.instantiate(t)), !t.$get) throw Yt("pget", "Provider '{0}' must define $get factory method.", e);
				return s[e + r] = t
			}

			function v(e, t) {
				return function() {
					var n = p.invoke(t, this);
					if (V(n)) throw Yt("undef", "Provider '{0}' must return a value from $get factory method.", e);
					return n
				}
			}

			function m(e, t, n) {
				return $(e, {
					$get: !1 !== n ? v(e, t) : t
				})
			}

			function g(e) {
				Ue(V(e) || W(e), "modulesToLoad", "not an array");
				var t, n = [];
				return T(e, (function(e) {
					if (!o.get(e)) {
						o.set(e, !0);
						try {
							B(e) ? (t = c(e), p.modules[e] = t, n = n.concat(g(t.requires)).concat(t._runBlocks), r(t._invokeQueue), r(t._configBlocks)) : J(e) || W(e) ? n.push(u.invoke(e)) : _e(e, "module")
						} catch (t) {
							throw W(e) && (e = e[e.length - 1]), t.message && t.stack && -1 === t.stack.indexOf(t.message) && (t = t.message + "\n" + t.stack), Yt("modulerr", "Failed to instantiate module {0} due to:\n{1}", e, t.stack || t.message || t)
						}
					}

					function r(e) {
						var t, n;
						for (t = 0, n = e.length; t < n; t++) {
							var r = e[t],
								i = u.get(r[0]);
							i[r[1]].apply(i, r[2])
						}
					}
				})), n
			}

			function y(e, o) {
				function u(t, r) {
					if (e.hasOwnProperty(t)) {
						if (e[t] === n) throw Yt("cdep", "Circular dependency found: {0}", t + " <- " + i.join(" <- "));
						return e[t]
					}
					try {
						return i.unshift(t), e[t] = n, e[t] = o(t, r), e[t]
					} catch (r) {
						throw e[t] === n && delete e[t], r
					} finally {
						i.shift()
					}
				}

				function c(e, n, r) {
					for (var i = [], o = Zt.$$annotate(e, t, r), a = 0, s = o.length; a < s; a++) {
						var c = o[a];
						if ("string" != typeof c) throw Yt("itkn", "Incorrect injection token! Expected service name as string, got {0}", c);
						i.push(n && n.hasOwnProperty(c) ? n[c] : u(c, r))
					}
					return i
				}
				return {
					invoke: function(e, t, n, r) {
						"string" == typeof n && (r = n, n = null);
						var i = c(e, n, r);
						return W(e) && (e = e[e.length - 1]),
							function(e) {
								if (a || "function" != typeof e) return !1;
								var t = e.$$ngIsClass;
								return Z(t) || (t = e.$$ngIsClass = /^class\b/.test(Qt(e))), t
							}(e) ? (i.unshift(null), new(Function.prototype.bind.apply(e, i))) : e.apply(t, i)
					},
					instantiate: function(e, t, n) {
						var r = W(e) ? e[e.length - 1] : e,
							i = c(e, t, n);
						return i.unshift(null), new(Function.prototype.bind.apply(r, i))
					},
					get: u,
					annotate: Zt.$$annotate,
					has: function(t) {
						return s.hasOwnProperty(t + r) || e.hasOwnProperty(t)
					}
				}
			}
		}

		function Xt() {
			var t = !0;
			this.disableAutoScrolling = function() {
				t = !1
			}, this.$get = ["$window", "$location", "$rootScope", function(n, r, i) {
				var o = n.document;

				function a(e) {
					if (e) {
						e.scrollIntoView();
						var t = function() {
							var e = u.yOffset;
							if (J(e)) e = e();
							else if (re(e)) {
								var t = e[0];
								e = "fixed" !== n.getComputedStyle(t).position ? 0 : t.getBoundingClientRect().bottom
							} else H(e) || (e = 0);
							return e
						}();
						if (t) {
							var r = e.getBoundingClientRect().top;
							n.scrollBy(0, r - t)
						}
					} else n.scrollTo(0, 0)
				}

				function u(e) {
					var t, n, i;
					(e = B(e) ? e : H(e) ? e.toString() : r.hash()) ? (t = o.getElementById(e)) ? a(t): (n = o.getElementsByName(e), i = null, Array.prototype.some.call(n, (function(e) {
						if ("a" === ie(e)) return i = e, !0
					})), (t = i) ? a(t) : "top" === e && a(null)): a(null)
				}
				return t && i.$watch((function() {
					return r.hash()
				}), (function(t, n) {
					var r, o;
					t === n && "" === t || (r = function() {
						i.$evalAsync(u)
					}, "complete" === (o = o || e).document.readyState ? o.setTimeout(r) : s(o).on("load", r))
				})), u
			}]
		}
		Zt.$$annotate = function(e, t, n) {
			var r, i;
			if ("function" == typeof e) {
				if (!(r = e.$inject)) {
					if (r = [], e.length) {
						if (t) throw B(n) && n || (n = e.name || function(e) {
							var t = Kt(e);
							return t ? "function(" + (t[1] || "").replace(/[\s\r\n]+/, " ") + ")" : "fn"
						}(e)), Yt("strictdi", "{0} is not using explicit annotation and cannot be invoked in strict mode", n);
						T(Kt(e)[1].split(Wt), (function(e) {
							e.replace(zt, (function(e, t, n) {
								r.push(n)
							}))
						}))
					}
					e.$inject = r
				}
			} else W(e) ? (_e(e[i = e.length - 1], "fn"), r = e.slice(0, i)) : _e(e, "fn", !0);
			return r
		};
		var en = o("$animate"),
			tn = "ng-animate";

		function nn(e, t) {
			return e || t ? e ? t ? (W(e) && (e = e.join(" ")), W(t) && (t = t.join(" ")), e + " " + t) : e : t : ""
		}

		function rn(e) {
			return j(e) ? e : {}
		}
		var on = function() {
				this.$get = L
			},
			an = function() {
				var e = new qt,
					t = [];
				this.$get = ["$$AnimateRunner", "$rootScope", function(n, r) {
					return {
						enabled: L,
						on: L,
						off: L,
						pin: L,
						push: function(a, s, u, c) {
							c && c(), (u = u || {}).from && a.css(u.from), u.to && a.css(u.to), (u.addClass || u.removeClass) && function(n, a, s) {
								var u = e.get(n) || {},
									c = i(u, a, !0),
									l = i(u, s, !1);
								(c || l) && (e.set(n, u), t.push(n), 1 === t.length && r.$$postDigest(o))
							}(a, u.addClass, u.removeClass);
							var l = new n;
							return l.complete(), l
						}
					};

					function i(e, t, n) {
						var r = !1;
						return t && T(t = B(t) ? t.split(" ") : W(t) ? t : [], (function(t) {
							t && (r = !0, e[t] = n)
						})), r
					}

					function o() {
						T(t, (function(t) {
							var n = e.get(t);
							if (n) {
								var r = function(e) {
										B(e) && (e = e.split(" "));
										var t = Fe();
										return T(e, (function(e) {
											e.length && (t[e] = !0)
										})), t
									}(t.attr("class")),
									i = "",
									o = "";
								T(n, (function(e, t) {
									e !== !!r[t] && (e ? i += (i.length ? " " : "") + t : o += (o.length ? " " : "") + t)
								})), T(t, (function(e) {
									i && Tt(e, i), o && St(e, o)
								})), e.delete(t)
							}
						})), t.length = 0
					}
				}]
			},
			sn = ["$provide", function(e) {
				var t = this,
					n = null,
					r = null;
				this.$$registeredAnimations = Object.create(null), this.register = function(n, r) {
					if (n && "." !== n.charAt(0)) throw en("notcsel", "Expecting class selector starting with '.' got '{0}'.", n);
					var i = n + "-animation";
					t.$$registeredAnimations[n.substr(1)] = i, e.factory(i, r)
				}, this.customFilter = function(e) {
					return 1 === arguments.length && (r = J(e) ? e : null), r
				}, this.classNameFilter = function(e) {
					if (1 === arguments.length && (n = e instanceof RegExp ? e : null) && new RegExp("[(\\s|\\/)]" + tn + "[(\\s|\\/)]").test(n.toString())) throw n = null, en("nongcls", '$animateProvider.classNameFilter(regex) prohibits accepting a regex value which matches/contains the "{0}" CSS class.', tn);
					return n
				}, this.$get = ["$$animateQueue", function(e) {
					function t(e, t, n) {
						if (n) {
							var r = function(e) {
								for (var t = 0; t < e.length; t++) {
									var n = e[t];
									if (1 === n.nodeType) return n
								}
							}(n);
							!r || r.parentNode || r.previousElementSibling || (n = null)
						}
						n ? n.after(e) : t.prepend(e)
					}
					return {
						on: e.on,
						off: e.off,
						pin: e.pin,
						enabled: e.enabled,
						cancel: function(e) {
							e.cancel && e.cancel()
						},
						enter: function(n, r, i, o) {
							return r = r && s(r), i = i && s(i), t(n, r = r || i.parent(), i), e.push(n, "enter", rn(o))
						},
						move: function(n, r, i, o) {
							return r = r && s(r), i = i && s(i), t(n, r = r || i.parent(), i), e.push(n, "move", rn(o))
						},
						leave: function(t, n) {
							return e.push(t, "leave", rn(n), (function() {
								t.remove()
							}))
						},
						addClass: function(t, n, r) {
							return (r = rn(r)).addClass = nn(r.addclass, n), e.push(t, "addClass", r)
						},
						removeClass: function(t, n, r) {
							return (r = rn(r)).removeClass = nn(r.removeClass, n), e.push(t, "removeClass", r)
						},
						setClass: function(t, n, r, i) {
							return (i = rn(i)).addClass = nn(i.addClass, n), i.removeClass = nn(i.removeClass, r), e.push(t, "setClass", i)
						},
						animate: function(t, n, r, i, o) {
							return (o = rn(o)).from = o.from ? P(o.from, n) : n, o.to = o.to ? P(o.to, r) : r, i = i || "ng-inline-animate", o.tempClasses = nn(o.tempClasses, i), e.push(t, "animate", o)
						}
					}
				}]
			}],
			un = function() {
				this.$get = ["$$rAF", function(e) {
					var t = [];

					function n(n) {
						t.push(n), t.length > 1 || e((function() {
							for (var e = 0; e < t.length; e++) t[e]();
							t = []
						}))
					}
					return function() {
						var e = !1;
						return n((function() {
								e = !0
							})),
							function(t) {
								e ? t() : n(t)
							}
					}
				}]
			},
			cn = function() {
				this.$get = ["$q", "$sniffer", "$$animateAsyncRun", "$$isDocumentHidden", "$timeout", function(e, t, n, r, i) {
					function o(e) {
						this.setHost(e);
						var t = n();
						this._doneCallbacks = [], this._tick = function(e) {
							r() ? function(e) {
								i(e, 0, !1)
							}(e) : t(e)
						}, this._state = 0
					}
					return o.chain = function(e, t) {
						var n = 0;
						! function r() {
							n !== e.length ? e[n]((function(e) {
								!1 !== e ? (n++, r()) : t(!1)
							})) : t(!0)
						}()
					}, o.all = function(e, t) {
						var n = 0,
							r = !0;

						function i(i) {
							r = r && i, ++n === e.length && t(r)
						}
						T(e, (function(e) {
							e.done(i)
						}))
					}, o.prototype = {
						setHost: function(e) {
							this.host = e || {}
						},
						done: function(e) {
							2 === this._state ? e() : this._doneCallbacks.push(e)
						},
						progress: L,
						getPromise: function() {
							if (!this.promise) {
								var t = this;
								this.promise = e((function(e, n) {
									t.done((function(t) {
										!1 === t ? n() : e()
									}))
								}))
							}
							return this.promise
						},
						then: function(e, t) {
							return this.getPromise().then(e, t)
						},
						catch: function(e) {
							return this.getPromise().catch(e)
						},
						finally: function(e) {
							return this.getPromise().finally(e)
						},
						pause: function() {
							this.host.pause && this.host.pause()
						},
						resume: function() {
							this.host.resume && this.host.resume()
						},
						end: function() {
							this.host.end && this.host.end(), this._resolve(!0)
						},
						cancel: function() {
							this.host.cancel && this.host.cancel(), this._resolve(!1)
						},
						complete: function(e) {
							var t = this;
							0 === t._state && (t._state = 1, t._tick((function() {
								t._resolve(e)
							})))
						},
						_resolve: function(e) {
							2 !== this._state && (T(this._doneCallbacks, (function(t) {
								t(e)
							})), this._doneCallbacks.length = 0, this._state = 2)
						}
					}, o
				}]
			},
			ln = function() {
				this.$get = ["$$rAF", "$q", "$$AnimateRunner", function(e, t, n) {
					return function(t, r) {
						var i = r || {};
						i.$$prepared || (i = se(i)), i.cleanupStyles && (i.from = i.to = null), i.from && (t.css(i.from), i.from = null);
						var o, a = new n;
						return {
							start: s,
							end: s
						};

						function s() {
							return e((function() {
								i.addClass && (t.addClass(i.addClass), i.addClass = null), i.removeClass && (t.removeClass(i.removeClass), i.removeClass = null), i.to && (t.css(i.to), i.to = null), o || a.complete(), o = !0
							})), a
						}
					}
				}]
			};

		function fn(e, t, n, r, i) {
			var o = this,
				a = e.location,
				u = e.history,
				c = e.setTimeout,
				l = e.clearTimeout,
				f = {},
				p = i(n);
			o.isMock = !1, o.$$completeOutstandingRequest = p.completeTask, o.$$incOutstandingRequestCount = p.incTaskCount, o.notifyWhenNoOutstandingRequests = p.notifyWhenNoPendingTasks;
			var d, h, $ = a.href,
				v = t.find("base"),
				m = null,
				g = r.history ? function() {
					try {
						return u.state
					} catch (e) {}
				} : L;
			S(), o.url = function(t, n, i) {
				if (V(i) && (i = null), a !== e.location && (a = e.location), u !== e.history && (u = e.history), t) {
					var s = h === i;
					if (t = li(t).href, $ === t && (!r.history || s)) return o;
					var c = $ && cr($) === cr(t);
					return $ = t, h = i, !r.history || c && s ? (c || (m = t), n ? a.replace(t) : c ? a.hash = function(e) {
						var t = e.indexOf("#");
						return -1 === t ? "" : e.substr(t)
					}(t) : a.href = t, a.href !== t && (m = t)) : (u[n ? "replaceState" : "pushState"](i, "", t), S()), m && (m = t), o
				}
				return function(e) {
					return e.replace(/#$/, "")
				}(m || a.href)
			}, o.state = function() {
				return d
			};
			var y = [],
				b = !1;

			function w() {
				m = null, x()
			}
			var E = null;

			function S() {
				ce(d = V(d = g()) ? null : d, E) && (d = E), E = d, h = d
			}

			function x() {
				var e = h;
				S(), $ === o.url() && e === d || ($ = o.url(), h = d, T(y, (function(e) {
					e(o.url(), d)
				})))
			}
			o.onUrlChange = function(t) {
				return b || (r.history && s(e).on("popstate", w), s(e).on("hashchange", w), b = !0), y.push(t), t
			}, o.$$applicationDestroyed = function() {
				s(e).off("hashchange popstate", w)
			}, o.$$checkUrlChange = x, o.baseHref = function() {
				var e = v.attr("href");
				return e ? e.replace(/^(https?:)?\/\/[^/]*/, "") : ""
			}, o.defer = function(e, t, n) {
				var r;
				return t = t || 0, n = n || p.DEFAULT_TASK_TYPE, p.incTaskCount(n), r = c((function() {
					delete f[r], p.completeTask(e, n)
				}), t), f[r] = n, r
			}, o.defer.cancel = function(e) {
				if (f.hasOwnProperty(e)) {
					var t = f[e];
					return delete f[e], l(e), p.completeTask(L, t), !0
				}
				return !1
			}
		}

		function pn() {
			this.$get = ["$window", "$log", "$sniffer", "$document", "$$taskTrackerFactory", function(e, t, n, r, i) {
				return new fn(e, r, t, n, i)
			}]
		}

		function dn() {
			this.$get = function() {
				var e = {};

				function t(t, n) {
					if (t in e) throw o("$cacheFactory")("iid", "CacheId '{0}' is already taken!", t);
					var r = 0,
						i = P({}, n, {
							id: t
						}),
						a = Fe(),
						s = n && n.capacity || Number.MAX_VALUE,
						u = Fe(),
						c = null,
						l = null;
					return e[t] = {
						put: function(e, t) {
							if (!V(t)) return s < Number.MAX_VALUE && f(u[e] || (u[e] = {
								key: e
							})), e in a || r++, a[e] = t, r > s && this.remove(l.key), t
						},
						get: function(e) {
							if (s < Number.MAX_VALUE) {
								var t = u[e];
								if (!t) return;
								f(t)
							}
							return a[e]
						},
						remove: function(e) {
							if (s < Number.MAX_VALUE) {
								var t = u[e];
								if (!t) return;
								t === c && (c = t.p), t === l && (l = t.n), p(t.n, t.p), delete u[e]
							}
							e in a && (delete a[e], r--)
						},
						removeAll: function() {
							a = Fe(), r = 0, u = Fe(), c = l = null
						},
						destroy: function() {
							a = null, i = null, u = null, delete e[t]
						},
						info: function() {
							return P({}, i, {
								size: r
							})
						}
					};

					function f(e) {
						e !== c && (l ? l === e && (l = e.n) : l = e, p(e.n, e.p), p(e, c), (c = e).n = null)
					}

					function p(e, t) {
						e !== t && (e && (e.p = t), t && (t.n = e))
					}
				}
				return t.info = function() {
					var t = {};
					return T(e, (function(e, n) {
						t[n] = e.info()
					})), t
				}, t.get = function(t) {
					return e[t]
				}, t
			}
		}

		function hn() {
			this.$get = ["$cacheFactory", function(e) {
				return e("templates")
			}]
		}
		var $n = o("$compile"),
			vn = new function() {};

		function mn(t, n) {
			var r = {},
				i = "Directive",
				o = /^\s*directive:\s*([\w-]+)\s+(.*)$/,
				u = /(([\w-]+)(?::([^;]+))?;?)/,
				c = function() {
					var e, t = {},
						n = "ngSrc,ngSrcset,src,srcset".split(",");
					for (e = 0; e < n.length; e++) t[n[e]] = !0;
					return t
				}(),
				l = /^(?:(\^\^?)?(\?)?(\^\^?)?)?/,
				f = /^(on[a-z]+|formaction)$/,
				h = Fe();

			function $(e, t, n) {
				var r = /^([@&]|[=<](\*?))(\??)\s*([\w$]*)$/,
					i = Fe();
				return T(e, (function(e, o) {
					if ((e = e.trim()) in h) i[o] = h[e];
					else {
						var a = e.match(r);
						if (!a) throw $n("iscp", "Invalid {3} for directive '{0}'. Definition: {... {1}: '{2}' ...}", t, o, e, n ? "controller bindings definition" : "isolate scope definition");
						i[o] = {
							mode: a[1][0],
							collection: "*" === a[2],
							optional: "?" === a[3],
							attrName: a[4] || o
						}, a[4] && (h[e] = i[o])
					}
				})), i
			}

			function v(e, t) {
				var n = {
					isolateScope: null,
					bindToController: null
				};
				if (j(e.scope) && (!0 === e.bindToController ? (n.bindToController = $(e.scope, t, !0), n.isolateScope = {}) : n.isolateScope = $(e.scope, t, !1)), j(e.bindToController) && (n.bindToController = $(e.bindToController, t, !0)), n.bindToController && !e.controller) throw $n("noctrl", "Cannot bind to controller without directive '{0}'s controller.", t);
				return n
			}
			this.directive = function e(n, o) {
				return Ue(n, "name"), De(n, "directive"), B(n) ? (function(e) {
					var t = e.charAt(0);
					if (!t || t !== d(t)) throw $n("baddir", "Directive/Component name '{0}' is invalid. The first character must be a lowercase letter", e);
					if (e !== e.trim()) throw $n("baddir", "Directive/Component name '{0}' is invalid. The name should not contain leading or trailing whitespaces", e)
				}(n), Ue(o, "directiveFactory"), r.hasOwnProperty(n) || (r[n] = [], t.factory(n + i, ["$injector", "$exceptionHandler", function(e, t) {
					var i = [];
					return T(r[n], (function(r, o) {
						try {
							var a = e.invoke(r);
							J(a) ? a = {
								compile: _(a)
							} : !a.compile && a.link && (a.compile = _(a.link)), a.priority = a.priority || 0, a.index = o, a.name = a.name || n, a.require = function(e) {
								var t = e.require || e.controller && e.name;
								return !W(t) && j(t) && T(t, (function(e, n) {
									var r = e.match(l);
									e.substring(r[0].length) || (t[n] = r[0] + n)
								})), t
							}(a), a.restrict = function(e, t) {
								if (e && (!B(e) || !/[EACM]/.test(e))) throw $n("badrestrict", "Restrict property '{0}' of directive '{1}' is invalid", e, t);
								return e || "EA"
							}(a.restrict, n), a.$$moduleName = r.$$moduleName, i.push(a)
						} catch (e) {
							t(e)
						}
					})), i
				}])), r[n].push(o)) : T(n, O(e)), this
			}, this.component = function e(t, n) {
				if (!B(t)) return T(t, O(he(this, e))), this;
				var r = n.controller || function() {};

				function i(e) {
					function t(t) {
						return J(t) || W(t) ? function(n, r) {
							return e.invoke(t, this, {
								$element: n,
								$attrs: r
							})
						} : t
					}
					var i = n.template || n.templateUrl ? n.template : "",
						o = {
							controller: r,
							controllerAs: On(n.controller) || n.controllerAs || "$ctrl",
							template: t(i),
							templateUrl: t(n.templateUrl),
							transclude: n.transclude,
							scope: {},
							bindToController: n.bindings || {},
							restrict: "E",
							require: n.require
						};
					return T(n, (function(e, t) {
						"$" === t.charAt(0) && (o[t] = e)
					})), o
				}
				return T(n, (function(e, t) {
					"$" === t.charAt(0) && (i[t] = e, J(r) && (r[t] = e))
				})), i.$inject = ["$injector"], this.directive(t, i)
			}, this.aHrefSanitizationTrustedUrlList = function(e) {
				return F(e) ? (n.aHrefSanitizationTrustedUrlList(e), this) : n.aHrefSanitizationTrustedUrlList()
			}, Object.defineProperty(this, "aHrefSanitizationWhitelist", {
				get: function() {
					return this.aHrefSanitizationTrustedUrlList
				},
				set: function(e) {
					this.aHrefSanitizationTrustedUrlList = e
				}
			}), this.imgSrcSanitizationTrustedUrlList = function(e) {
				return F(e) ? (n.imgSrcSanitizationTrustedUrlList(e), this) : n.imgSrcSanitizationTrustedUrlList()
			}, Object.defineProperty(this, "imgSrcSanitizationWhitelist", {
				get: function() {
					return this.imgSrcSanitizationTrustedUrlList
				},
				set: function(e) {
					this.imgSrcSanitizationTrustedUrlList = e
				}
			});
			var m = !0;
			this.debugInfoEnabled = function(e) {
				return F(e) ? (m = e, this) : m
			};
			var y = !1;
			this.strictComponentBindingsEnabled = function(e) {
				return F(e) ? (y = e, this) : y
			};
			var b = 10;
			this.onChangesTtl = function(e) {
				return arguments.length ? (b = e, this) : b
			};
			var w = !0;
			this.commentDirectivesEnabled = function(e) {
				return arguments.length ? (w = e, this) : w
			};
			var E = !0;
			this.cssClassDirectivesEnabled = function(e) {
				return arguments.length ? (E = e, this) : E
			};
			var S = Fe();
			this.addPropertySecurityContext = function(e, t, n) {
					var r = e.toLowerCase() + "|" + t.toLowerCase();
					if (r in S && S[r] !== n) throw $n("ctxoverride", "Property context '{0}.{1}' already set to '{2}', cannot override to '{3}'.", e, t, S[r], n);
					return S[r] = n, this
				},
				function() {
					function e(e, t) {
						T(t, (function(t) {
							S[t.toLowerCase()] = e
						}))
					}
					e(Wr.HTML, ["iframe|srcdoc", "*|innerHTML", "*|outerHTML"]), e(Wr.CSS, ["*|style"]), e(Wr.URL, ["area|href", "area|ping", "a|href", "a|ping", "blockquote|cite", "body|background", "del|cite", "input|src", "ins|cite", "q|cite"]), e(Wr.MEDIA_URL, ["audio|src", "img|src", "img|srcset", "source|src", "source|srcset", "track|src", "video|src", "video|poster"]), e(Wr.RESOURCE_URL, ["*|formAction", "applet|code", "applet|codebase", "base|href", "embed|src", "frame|src", "form|action", "head|profile", "html|manifest", "iframe|src", "link|href", "media|src", "object|codebase", "object|data", "script|src"])
				}(), this.$get = ["$injector", "$interpolate", "$exceptionHandler", "$templateRequest", "$parse", "$controller", "$rootScope", "$sce", "$animate", function(t, n, h, $, x, O, A, R, C) {
					var I, M = /^\w/,
						N = e.document.createElement("div"),
						_ = w,
						D = E,
						F = b;

					function q() {
						try {
							if (!--F) throw I = void 0, $n("infchng", "{0} $onChanges() iterations reached. Aborting!\n", b);
							A.$apply((function() {
								for (var e = 0, t = I.length; e < t; ++e) try {
									I[e]()
								} catch (e) {
									h(e)
								}
								I = void 0
							}))
						} finally {
							F++
						}
					}

					function H(e, t) {
						if (!e) return e;
						if (!B(e)) throw $n("srcset", 'Can\'t pass trusted values to `{0}`: "{1}"', t, e.toString());
						for (var n = "", r = te(e), i = /\s/.test(r) ? /(\s+\d+x\s*,|\s+\d+w\s*,|\s+,|,\s+)/ : /(,)/, o = r.split(i), a = Math.floor(o.length / 2), s = 0; s < a; s++) {
							var u = 2 * s;
							n += R.getTrustedMediaUrl(te(o[u])), n += " " + te(o[u + 1])
						}
						var c = te(o[2 * s]).split(/\s/);
						return n += R.getTrustedMediaUrl(te(c[0])), 2 === c.length && (n += " " + te(c[1])), n
					}

					function G(e, t) {
						if (t) {
							var n, r, i, o = Object.keys(t);
							for (n = 0, r = o.length; n < r; n++) this[i = o[n]] = t[i]
						} else this.$attr = {};
						this.$$element = e
					}

					function Y(e, t) {
						try {
							e.addClass(t)
						} catch (e) {}
					}
					G.prototype = {
						$normalize: wn,
						$addClass: function(e) {
							e && e.length > 0 && C.addClass(this.$$element, e)
						},
						$removeClass: function(e) {
							e && e.length > 0 && C.removeClass(this.$$element, e)
						},
						$updateClass: function(e, t) {
							var n = En(e, t);
							n && n.length && C.addClass(this.$$element, n);
							var r = En(t, e);
							r && r.length && C.removeClass(this.$$element, r)
						},
						$set: function(e, t, n, r) {
							var i = Lt(this.$$element[0], e),
								o = kt[e],
								a = e;
							i ? (this.$$element.prop(e, t), r = i) : o && (this[o] = t, a = o), this[e] = t, r ? this.$attr[e] = r : (r = this.$attr[e]) || (this.$attr[e] = r = Ne(e, "-")), "img" === ie(this.$$element) && "srcset" === e && (this[e] = t = H(t, "$set('srcset', value)")), !1 !== n && (null === t || V(t) ? this.$$element.removeAttr(r) : M.test(r) ? i && !1 === t ? this.$$element.removeAttr(r) : this.$$element.attr(r, t) : function(e, t, n) {
								N.innerHTML = "<span " + t + ">";
								var r = N.firstChild.attributes,
									i = r[0];
								r.removeNamedItem(i.name), i.value = n, e.attributes.setNamedItem(i)
							}(this.$$element[0], r, t));
							var s = this.$$observers;
							s && T(s[a], (function(e) {
								try {
									e(t)
								} catch (e) {
									h(e)
								}
							}))
						},
						$observe: function(e, t) {
							var n = this,
								r = n.$$observers || (n.$$observers = Fe()),
								i = r[e] || (r[e] = []);
							return i.push(t), A.$evalAsync((function() {
									i.$$inter || !n.hasOwnProperty(e) || V(n[e]) || t(n[e])
								})),
								function() {
									ae(i, t)
								}
						}
					};
					var Q = n.startSymbol(),
						X = n.endSymbol(),
						ee = "{{" === Q && "}}" === X ? U : function(e) {
							return e.replace(/\{\{/g, Q).replace(/}}/g, X)
						},
						ne = /^ng(Attr|Prop|On)([A-Z].*)$/,
						re = /^(.+)Start$/;
					return oe.$$addBindingInfo = m ? function(e, t) {
						var n = e.data("$binding") || [];
						W(t) ? n = n.concat(t) : n.push(t), e.data("$binding", n)
					} : L, oe.$$addBindingClass = m ? function(e) {
						Y(e, "ng-binding")
					} : L, oe.$$addScopeInfo = m ? function(e, t, n, r) {
						var i = n ? r ? "$isolateScopeNoTemplate" : "$isolateScope" : "$scope";
						e.data(i, t)
					} : L, oe.$$addScopeClass = m ? function(e, t) {
						Y(e, t ? "ng-isolate-scope" : "ng-scope")
					} : L, oe.$$createComment = function(t, n) {
						var r = "";
						return m && (r = " " + (t || "") + ": ", n && (r += n + " ")), e.document.createComment(r)
					}, oe;

					function oe(e, t, n, r, i) {
						e instanceof s || (e = s(e));
						var o = se(e, t, e, n, r, i);
						oe.$$addScopeClass(e);
						var a = null;
						return function(t, n, r) {
							if (!e) throw $n("multilink", "This element has already been linked.");
							Ue(t, "scope"), i && i.needsNewScope && (t = t.$parent.$new());
							var u, c, l, f = (r = r || {}).parentBoundTranscludeFn,
								p = r.transcludeControllers,
								d = r.futureParentElement;
							if (f && f.$$boundTransclude && (f = f.$$boundTransclude), a || (c = (u = d) && u[0], a = c && "foreignobject" !== ie(c) && g.call(c).match(/SVG/) ? "svg" : "html"), l = "html" !== a ? s(Re(a, s("<div></div>").append(e).html())) : n ? It.clone.call(e) : e, p)
								for (var h in p) l.data("$" + h + "Controller", p[h].instance);
							return oe.$$addScopeInfo(l, t), n && n(l, t), o && o(t, l, l, f), n || (e = o = null), l
						}
					}

					function se(e, t, n, r, i, o) {
						for (var u, c, l, f, p, d, h, $ = [], v = W(e) || e instanceof s, m = 0; m < e.length; m++) u = new G, 11 === a && le(e, m, v), (l = (c = pe(e[m], [], u, 0 === m ? r : void 0, i)).length ? ge(c, e[m], u, t, n, null, [], [], o) : null) && l.scope && oe.$$addScopeClass(u.$$element), p = l && l.terminal || !(f = e[m].childNodes) || !f.length ? null : se(f, l ? (l.transcludeOnThisElement || !l.templateOnThisElement) && l.transclude : t), (l || p) && ($.push(m, l, p), d = !0, h = h || l), o = null;
						return d ? function(e, n, r, i) {
							var o, a, u, c, l, f, p, d;
							if (h) {
								var v = n.length;
								for (d = new Array(v), l = 0; l < $.length; l += 3) d[p = $[l]] = n[p]
							} else d = n;
							for (l = 0, f = $.length; l < f;) u = d[$[l++]], o = $[l++], a = $[l++], o ? (o.scope ? (c = e.$new(), oe.$$addScopeInfo(s(u), c)) : c = e, o(a, c, u, r, o.transcludeOnThisElement ? fe(e, o.transclude, i) : !o.templateOnThisElement && i ? i : !i && t ? fe(e, t) : null)) : a && a(e, u.childNodes, void 0, i)
						} : null
					}

					function le(e, t, n) {
						var r, i = e[t],
							o = i.parentNode;
						if (i.nodeType === qe)
							for (;
								(r = o ? i.nextSibling : e[t + 1]) && r.nodeType === qe;) i.nodeValue = i.nodeValue + r.nodeValue, r.parentNode && r.parentNode.removeChild(r), n && r === e[t + 1] && e.splice(t + 1, 1)
					}

					function fe(e, t, n) {
						function r(r, i, o, a, s) {
							return r || ((r = e.$new(!1, s)).$$transcluded = !0), t(r, i, {
								parentBoundTranscludeFn: n,
								transcludeControllers: o,
								futureParentElement: a
							})
						}
						var i = r.$$slots = Fe();
						for (var o in t.$$slots) t.$$slots[o] ? i[o] = fe(e, t.$$slots[o], n) : i[o] = null;
						return r
					}

					function pe(e, t, r, i, a) {
						var s, c, l, f = e.nodeType,
							p = r.$attr;
						switch (f) {
							case 1:
								we(t, wn(c = ie(e)), "E", i, a);
								for (var d, h, $, v, m, g = e.attributes, y = 0, b = g && g.length; y < b; y++) {
									var w, E = !1,
										S = !1,
										T = !1,
										x = !1,
										O = !1;
									h = (d = g[y]).name, v = d.value, (m = ($ = wn(h.toLowerCase())).match(ne)) ? (T = "Attr" === m[1], x = "Prop" === m[1], O = "On" === m[1], h = h.replace(yn, "").toLowerCase().substr(4 + m[1].length).replace(/_(.)/g, (function(e, t) {
										return t.toUpperCase()
									}))) : (w = $.match(re)) && Se(w[1]) && (E = h, S = h.substr(0, h.length - 5) + "end", h = h.substr(0, h.length - 6)), x || O ? (r[$] = v, p[$] = d.name, x ? Pe(e, t, $, h) : Ie(t, $, h)) : (p[$ = wn(h.toLowerCase())] = h, !T && r.hasOwnProperty($) || (r[$] = v, Lt(e, $) && (r[$] = !0)), Me(e, t, v, $, T), we(t, $, "A", i, a, E, S))
								}
								if ("input" === c && "hidden" === e.getAttribute("type") && e.setAttribute("autocomplete", "off"), !D) break;
								if (j(l = e.className) && (l = l.animVal), B(l) && "" !== l)
									for (; s = u.exec(l);) we(t, $ = wn(s[2]), "C", i, a) && (r[$] = te(s[3])), l = l.substr(s.index + s[0].length);
								break;
							case qe:
								! function(e, t) {
									var r = n(t, !0);
									r && e.push({
										priority: 0,
										compile: function(e) {
											var t = e.parent(),
												n = !!t.length;
											return n && oe.$$addBindingClass(t),
												function(e, t) {
													var i = t.parent();
													n || oe.$$addBindingClass(i), oe.$$addBindingInfo(i, r.expressions), e.$watch(r, (function(e) {
														t[0].nodeValue = e
													}))
												}
										}
									})
								}(t, e.nodeValue);
								break;
							case 8:
								if (!_) break;
								! function(e, t, n, r, i) {
									try {
										var a = o.exec(e.nodeValue);
										if (a) {
											var s = wn(a[1]);
											we(t, s, "M", r, i) && (n[s] = te(a[2]))
										}
									} catch (e) {}
								}(e, t, r, i, a)
						}
						return t.sort(Oe), t
					}

					function $e(e, t, n) {
						var r = [],
							i = 0;
						if (t && e.hasAttribute && e.hasAttribute(t))
							do {
								if (!e) throw $n("uterdir", "Unterminated attribute, found '{0}' but no matching '{1}' found.", t, n);
								1 === e.nodeType && (e.hasAttribute(t) && i++, e.hasAttribute(n) && i--), r.push(e), e = e.nextSibling
							} while (i > 0);
						else r.push(e);
						return s(r)
					}

					function ve(e, t, n) {
						return function(r, i, o, a, s) {
							return i = $e(i[0], t, n), e(r, i, o, a, s)
						}
					}

					function me(e, t, n, r, i, o) {
						var a;
						return e ? oe(t, n, r, i, o) : function() {
							return a || (a = oe(t, n, r, i, o), t = n = o = null), a.apply(this, arguments)
						}
					}

					function ge(t, n, r, i, o, a, u, c, l) {
						l = l || {};
						for (var f, p, d, $, v, m = -Number.MAX_VALUE, g = l.newScopeDirective, y = l.controllerDirectives, b = l.newIsolateScopeDirective, w = l.templateDirective, E = l.nonTlbTranscludeDirective, S = !1, x = !1, A = l.hasElementTranscludeDirective, R = r.$$element = s(n), C = a, I = i, M = !1, N = !1, k = 0, L = t.length; k < L; k++) {
							var U = (f = t[k]).$$start,
								_ = f.$$end;
							if (U && (R = $e(n, U, _)), d = void 0, m > f.priority) break;
							if ((v = f.scope) && (f.templateUrl || (j(v) ? (Ae("new/isolated scope", b || g, f, R), b = f) : Ae("new/isolated scope", b, f, R)), g = g || f), p = f.name, !M && (f.replace && (f.templateUrl || f.template) || f.transclude && !f.$$tlb)) {
								for (var D, F = k + 1; D = t[F++];)
									if (D.transclude && !D.$$tlb || D.replace && (D.templateUrl || D.template)) {
										N = !0;
										break
									} M = !0
							}
							if (!f.templateUrl && f.controller && (y = y || Fe(), Ae("'" + p + "' controller", y[p], f, R), y[p] = f), v = f.transclude)
								if (S = !0, f.$$tlb || (Ae("transclusion", E, f, R), E = f), "element" === v) A = !0, m = f.priority, d = R, R = r.$$element = s(oe.$$createComment(p, r[p])), n = R[0], ke(o, de(d), n), I = me(N, d, i, m, C && C.name, {
									nonTlbTranscludeDirective: E
								});
								else {
									var q = Fe();
									if (j(v)) {
										d = e.document.createDocumentFragment();
										var B = Fe(),
											H = Fe();
										for (var z in T(v, (function(e, t) {
												var n = "?" === e.charAt(0);
												e = n ? e.substring(1) : e, B[e] = t, q[t] = null, H[t] = n
											})), T(R.contents(), (function(t) {
												var n = B[wn(ie(t))];
												n ? (H[n] = !0, q[n] = q[n] || e.document.createDocumentFragment(), q[n].appendChild(t)) : d.appendChild(t)
											})), T(H, (function(e, t) {
												if (!e) throw $n("reqslot", "Required transclusion slot `{0}` was not filled.", t)
											})), q)
											if (q[z]) {
												var Y = s(q[z].childNodes);
												q[z] = me(N, Y, i)
											} d = s(d.childNodes)
									} else d = s(ht(n)).contents();
									R.empty(), (I = me(N, d, i, void 0, void 0, {
										needsNewScope: f.$$isolateScope || f.$$newScope
									})).$$slots = q
								} if (f.template)
								if (x = !0, Ae("template", w, f, R), w = f, v = J(f.template) ? f.template(R, r) : f.template, v = ee(v), f.replace) {
									if (C = f, d = ct(v) ? [] : Sn(Re(f.templateNamespace, te(v))), n = d[0], 1 !== d.length || 1 !== n.nodeType) throw $n("tplrt", "Template for directive '{0}' must have exactly one root element. {1}", p, "");
									ke(o, R, n);
									var Q = {
											$attr: {}
										},
										Z = pe(n, [], Q),
										X = t.splice(k + 1, t.length - (k + 1));
									(b || g) && be(Z, b, g), t = t.concat(Z).concat(X), Te(r, Q), L = t.length
								} else R.html(v);
							if (f.templateUrl) x = !0, Ae("template", w, f, R), w = f, f.replace && (C = f), ae = xe(t.splice(k, t.length - k), R, r, o, S && I, u, c, {
								controllerDirectives: y,
								newScopeDirective: g !== f && g,
								newIsolateScopeDirective: b,
								templateDirective: w,
								nonTlbTranscludeDirective: E
							}), L = t.length;
							else if (f.compile) try {
								$ = f.compile(R, r, I);
								var ne = f.$$originalDirective || f;
								J($) ? re(null, he(ne, $), U, _) : $ && re(he(ne, $.pre), he(ne, $.post), U, _)
							} catch (e) {
								h(e, Ee(R))
							}
							f.terminal && (ae.terminal = !0, m = Math.max(m, f.priority))
						}
						return ae.scope = g && !0 === g.scope, ae.transcludeOnThisElement = S, ae.templateOnThisElement = x, ae.transclude = I, l.hasElementTranscludeDirective = A, ae;

						function re(e, t, n, r) {
							e && (n && (e = ve(e, n, r)), e.require = f.require, e.directiveName = p, (b === f || f.$$isolateScope) && (e = Le(e, {
								isolateScope: !0
							})), u.push(e)), t && (n && (t = ve(t, n, r)), t.require = f.require, t.directiveName = p, (b === f || f.$$isolateScope) && (t = Le(t, {
								isolateScope: !0
							})), c.push(t))
						}

						function ae(e, t, i, o, a) {
							var l, f, p, d, $, v, m, E, S, x;
							for (var R in n === i ? (S = r, E = r.$$element) : S = new G(E = s(i), r), $ = t, b ? d = t.$new(!0) : g && ($ = t.$parent), a && (m = function(e, t, n, r) {
									var i;
									if (K(e) || (r = n, n = t, t = e, e = void 0), A && (i = v), n || (n = A ? E.parent() : E), !r) return a(e, t, i, n, N);
									var o = a.$$slots[r];
									if (o) return o(e, t, i, n, N);
									if (V(o)) throw $n("noslot", 'No parent directive that requires a transclusion with slot name "{0}". Element: {1}', r, Ee(E))
								}, m.$$boundTransclude = a, m.isSlotFilled = function(e) {
									return !!a.$$slots[e]
								}), y && (v = function(e, t, n, r, i, o, a) {
									var s = Fe();
									for (var u in r) {
										var c = r[u],
											l = {
												$scope: c === a || c.$$isolateScope ? i : o,
												$element: e,
												$attrs: t,
												$transclude: n
											},
											f = c.controller;
										"@" === f && (f = t[c.name]);
										var p = O(f, l, !0, c.controllerAs);
										s[c.name] = p, e.data("$" + c.name + "Controller", p.instance)
									}
									return s
								}(E, S, m, y, d, t, b)), b && (oe.$$addScopeInfo(E, d, !0, !(w && (w === b || w === b.$$originalDirective))), oe.$$addScopeClass(E, !0), d.$$isolateBindings = b.$$isolateBindings, (x = Ve(t, S, d, d.$$isolateBindings, b)).removeWatches && d.$on("$destroy", x.removeWatches)), v) {
								var C = y[R],
									I = v[R],
									M = C.$$bindings.bindToController;
								I.instance = I(), E.data("$" + C.name + "Controller", I.instance), I.bindingInfo = Ve($, S, I.instance, M, C)
							}
							for (T(y, (function(e, t) {
									var n = e.require;
									e.bindToController && !W(n) && j(n) && P(v[t].instance, ye(t, n, E, v))
								})), T(v, (function(e) {
									var t = e.instance;
									if (J(t.$onChanges)) try {
										t.$onChanges(e.bindingInfo.initialChanges)
									} catch (e) {
										h(e)
									}
									if (J(t.$onInit)) try {
										t.$onInit()
									} catch (e) {
										h(e)
									}
									J(t.$doCheck) && ($.$watch((function() {
										t.$doCheck()
									})), t.$doCheck()), J(t.$onDestroy) && $.$on("$destroy", (function() {
										t.$onDestroy()
									}))
								})), l = 0, f = u.length; l < f; l++) _e(p = u[l], p.isolateScope ? d : t, E, S, p.require && ye(p.directiveName, p.require, E, v), m);
							var N = t;
							for (b && (b.template || null === b.templateUrl) && (N = d), e && e(N, i.childNodes, void 0, a), l = c.length - 1; l >= 0; l--) _e(p = c[l], p.isolateScope ? d : t, E, S, p.require && ye(p.directiveName, p.require, E, v), m);
							T(v, (function(e) {
								var t = e.instance;
								J(t.$postLink) && t.$postLink()
							}))
						}
					}

					function ye(e, t, n, r) {
						var i;
						if (B(t)) {
							var o = t.match(l),
								a = t.substring(o[0].length),
								s = o[1] || o[3],
								u = "?" === o[2];
							if ("^^" === s ? n = n.parent() : i = (i = r && r[a]) && i.instance, !i) {
								var c = "$" + a + "Controller";
								i = "^^" === s && n[0] && 9 === n[0].nodeType ? null : s ? n.inheritedData(c) : n.data(c)
							}
							if (!i && !u) throw $n("ctreq", "Controller '{0}', required by directive '{1}', can't be found!", a, e)
						} else if (W(t)) {
							i = [];
							for (var f = 0, p = t.length; f < p; f++) i[f] = ye(e, t[f], n, r)
						} else j(t) && (i = {}, T(t, (function(t, o) {
							i[o] = ye(e, t, n, r)
						})));
						return i || null
					}

					function be(e, t, n) {
						for (var r = 0, i = e.length; r < i; r++) e[r] = k(e[r], {
							$$isolateScope: t,
							$$newScope: n
						})
					}

					function we(e, n, o, a, s, u, c) {
						if (n === s) return null;
						var l = null;
						if (r.hasOwnProperty(n))
							for (var f, p = t.get(n + i), d = 0, h = p.length; d < h; d++)
								if (f = p[d], (V(a) || a > f.priority) && -1 !== f.restrict.indexOf(o)) {
									if (u && (f = k(f, {
											$$start: u,
											$$end: c
										})), !f.$$bindings) {
										var $ = f.$$bindings = v(f, f.name);
										j($.isolateScope) && (f.$$isolateBindings = $.isolateScope)
									}
									e.push(f), l = f
								} return l
					}

					function Se(e) {
						if (r.hasOwnProperty(e))
							for (var n = t.get(e + i), o = 0, a = n.length; o < a; o++)
								if (n[o].multiElement) return !0;
						return !1
					}

					function Te(e, t) {
						var n = t.$attr,
							r = e.$attr;
						T(e, (function(r, i) {
							"$" !== i.charAt(0) && (t[i] && t[i] !== r && (r.length ? r += ("style" === i ? ";" : " ") + t[i] : r = t[i]), e.$set(i, r, !0, n[i]))
						})), T(t, (function(t, i) {
							e.hasOwnProperty(i) || "$" === i.charAt(0) || (e[i] = t, "class" !== i && "style" !== i && (r[i] = n[i]))
						}))
					}

					function xe(e, t, n, r, i, o, a, u) {
						var c, l, f = [],
							p = t[0],
							d = e.shift(),
							v = k(d, {
								templateUrl: null,
								transclude: null,
								replace: null,
								$$originalDirective: d
							}),
							m = J(d.templateUrl) ? d.templateUrl(t, n) : d.templateUrl,
							g = d.templateNamespace;
						return t.empty(), $(m).then((function(h) {
								var $, y, b, w;
								if (h = ee(h), d.replace) {
									if (b = ct(h) ? [] : Sn(Re(g, te(h))), $ = b[0], 1 !== b.length || 1 !== $.nodeType) throw $n("tplrt", "Template for directive '{0}' must have exactly one root element. {1}", d.name, m);
									y = {
										$attr: {}
									}, ke(r, t, $);
									var E = pe($, [], y);
									j(d.scope) && be(E, !0), e = E.concat(e), Te(n, y)
								} else $ = p, t.html(h);
								for (e.unshift(v), c = ge(e, $, n, i, t, d, o, a, u), T(r, (function(e, n) {
										e === $ && (r[n] = t[0])
									})), l = se(t[0].childNodes, i); f.length;) {
									var S = f.shift(),
										x = f.shift(),
										O = f.shift(),
										A = f.shift(),
										R = t[0];
									if (!S.$$destroyed) {
										if (x !== p) {
											var C = x.className;
											u.hasElementTranscludeDirective && d.replace || (R = ht($)), ke(O, s(x), R), Y(s(R), C)
										}
										w = c.transcludeOnThisElement ? fe(S, c.transclude, A) : A, c(l, S, R, r, w)
									}
								}
								f = null
							})).catch((function(e) {
								z(e) && h(e)
							})),
							function(e, t, n, r, i) {
								var o = i;
								t.$$destroyed || (f ? f.push(t, n, r, o) : (c.transcludeOnThisElement && (o = fe(t, c.transclude, i)), c(l, t, n, r, o)))
							}
					}

					function Oe(e, t) {
						var n = t.priority - e.priority;
						return 0 !== n ? n : e.name !== t.name ? e.name < t.name ? -1 : 1 : e.index - t.index
					}

					function Ae(e, t, n, r) {
						function i(e) {
							return e ? " (module: " + e + ")" : ""
						}
						if (t) throw $n("multidir", "Multiple directives [{0}{1}, {2}{3}] asking for {4} on: {5}", t.name, i(t.$$moduleName), n.name, i(n.$$moduleName), e, Ee(r))
					}

					function Re(t, n) {
						switch (t = d(t || "html")) {
							case "svg":
							case "math":
								var r = e.document.createElement("div");
								return r.innerHTML = "<" + t + ">" + n + "</" + t + ">", r.childNodes[0].childNodes;
							default:
								return n
						}
					}

					function Ce(e) {
						return H(R.valueOf(e), "ng-prop-srcset")
					}

					function Pe(e, t, n, r) {
						if (f.test(r)) throw $n("nodomevents", "Property bindings for HTML DOM event properties are disallowed");
						var i = ie(e),
							o = function(e, t) {
								var n = t.toLowerCase();
								return S[e + "|" + n] || S["*|" + n]
							}(i, r),
							a = U;
						"srcset" !== r || "img" !== i && "source" !== i ? o && (a = R.getTrusted.bind(R, o)) : a = Ce, t.push({
							priority: 100,
							compile: function(e, t) {
								var i = x(t[n]),
									o = x(t[n], (function(e) {
										return R.valueOf(e)
									}));
								return {
									pre: function(e, t) {
										function n() {
											var n = i(e);
											t[0][r] = a(n)
										}
										n(), e.$watch(o, n)
									}
								}
							}
						})
					}

					function Ie(e, t, n) {
						e.push(Vo(x, A, h, t, n, !1))
					}

					function Me(e, t, r, i, o) {
						var a = ie(e),
							s = function(e, t) {
								return "srcdoc" === t ? R.HTML : "src" === t || "ngSrc" === t ? -1 === ["img", "video", "audio", "source", "track"].indexOf(e) ? R.RESOURCE_URL : R.MEDIA_URL : "xlinkHref" === t ? "image" === e ? R.MEDIA_URL : "a" === e ? R.URL : R.RESOURCE_URL : "form" === e && "action" === t || "base" === e && "href" === t || "link" === e && "href" === t ? R.RESOURCE_URL : "a" !== e || "href" !== t && "ngHref" !== t ? void 0 : R.URL
							}(a, i),
							u = !o,
							l = c[i] || o,
							p = n(r, u, s, l);
						if (p) {
							if ("multiple" === i && "select" === a) throw $n("selmulti", "Binding to the 'multiple' attribute is not supported. Element: {0}", Ee(e));
							if (f.test(i)) throw $n("nodomevents", "Interpolations for HTML DOM event attributes are disallowed");
							t.push({
								priority: 100,
								compile: function() {
									return {
										pre: function(e, t, o) {
											var a = o.$$observers || (o.$$observers = Fe()),
												u = o[i];
											u !== r && (p = u && n(u, !0, s, l), r = u), p && (o[i] = p(e), (a[i] || (a[i] = [])).$$inter = !0, (o.$$observers && o.$$observers[i].$$scope || e).$watch(p, (function(e, t) {
												"class" === i && e !== t ? o.$updateClass(e, t) : o.$set(i, e)
											})))
										}
									}
								}
							})
						}
					}

					function ke(t, n, r) {
						var i, o, a = n[0],
							u = n.length,
							c = a.parentNode;
						if (t)
							for (i = 0, o = t.length; i < o; i++)
								if (t[i] === a) {
									t[i++] = r;
									for (var l = i, f = l + u - 1, p = t.length; l < p; l++, f++) f < p ? t[l] = t[f] : delete t[l];
									t.length -= u - 1, t.context === a && (t.context = r);
									break
								} c && c.replaceChild(r, a);
						var d = e.document.createDocumentFragment();
						for (i = 0; i < u; i++) d.appendChild(n[i]);
						for (s.hasData(a) && (s.data(r, s.data(a)), s(a).off("$destroy")), s.cleanData(d.querySelectorAll("*")), i = 1; i < u; i++) delete n[i];
						n[0] = r, n.length = 1
					}

					function Le(e, t) {
						return P((function() {
							return e.apply(null, arguments)
						}), e, t)
					}

					function _e(e, t, n, r, i, o) {
						try {
							e(t, n, r, i, o)
						} catch (e) {
							h(e, Ee(n))
						}
					}

					function De(e, t) {
						if (y) throw $n("missingattr", "Attribute '{0}' of '{1}' is non-optional and must be set!", e, t)
					}

					function Ve(e, t, r, i, o) {
						var a, s = [],
							u = {};

						function c(t, n, i) {
							J(r.$onChanges) && !ue(n, i) && (I || (e.$$postDigest(q), I = []), a || (a = {}, I.push(l)), a[t] && (i = a[t].previousValue), a[t] = new gn(i, n))
						}

						function l() {
							r.$onChanges(a), a = void 0
						}
						return T(i, (function(i, a) {
							var l, f, d, h, $, v = i.attrName,
								m = i.optional;
							switch (i.mode) {
								case "@":
									m || p.call(t, v) || (De(v, o.name), r[a] = t[v] = void 0), $ = t.$observe(v, (function(e) {
										if (B(e) || Z(e)) {
											var t = r[a];
											c(a, e, t), r[a] = e
										}
									})), t.$$observers[v].$$scope = e, B(l = t[v]) ? r[a] = n(l)(e) : Z(l) && (r[a] = l), u[a] = new gn(vn, r[a]), s.push($);
									break;
								case "=":
									if (!p.call(t, v)) {
										if (m) break;
										De(v, o.name), t[v] = void 0
									}
									if (m && !t[v]) break;
									f = x(t[v]), h = f.literal ? ce : ue, d = f.assign || function() {
										throw l = r[a] = f(e), $n("nonassign", "Expression '{0}' in attribute '{1}' used with directive '{2}' is non-assignable!", t[v], v, o.name)
									}, l = r[a] = f(e);
									var g = function(t) {
										return h(t, r[a]) || (h(t, l) ? d(e, t = r[a]) : r[a] = t), l = t
									};
									g.$stateful = !0, $ = i.collection ? e.$watchCollection(t[v], g) : e.$watch(x(t[v], g), null, f.literal), s.push($);
									break;
								case "<":
									if (!p.call(t, v)) {
										if (m) break;
										De(v, o.name), t[v] = void 0
									}
									if (m && !t[v]) break;
									var y = (f = x(t[v])).literal,
										b = r[a] = f(e);
									u[a] = new gn(vn, r[a]), $ = e[i.collection ? "$watchCollection" : "$watch"](f, (function(e, t) {
										if (t === e) {
											if (t === b || y && ce(t, b)) return;
											t = b
										}
										c(a, e, t), r[a] = e
									})), s.push($);
									break;
								case "&":
									if (m || p.call(t, v) || De(v, o.name), (f = t.hasOwnProperty(v) ? x(t[v]) : L) === L && m) break;
									r[a] = function(t) {
										return f(e, t)
									}
							}
						})), {
							initialChanges: u,
							removeWatches: s.length && function() {
								for (var e = 0, t = s.length; e < t; ++e) s[e]()
							}
						}
					}
				}]
		}

		function gn(e, t) {
			this.previousValue = e, this.currentValue = t
		}
		mn.$inject = ["$provide", "$$sanitizeUriProvider"], gn.prototype.isFirstChange = function() {
			return this.previousValue === vn
		};
		var yn = /^((?:x|data)[:\-_])/i,
			bn = /[:\-_]+(.)/g;

		function wn(e) {
			return e.replace(yn, "").replace(bn, (function(e, t, n) {
				return n ? t.toUpperCase() : t
			}))
		}

		function En(e, t) {
			var n = "",
				r = e.split(/\s+/),
				i = t.split(/\s+/);
			e: for (var o = 0; o < r.length; o++) {
				for (var a = r[o], s = 0; s < i.length; s++)
					if (a === i[s]) continue e;
				n += (n.length > 0 ? " " : "") + a
			}
			return n
		}

		function Sn(e) {
			var t = (e = s(e)).length;
			if (t <= 1) return e;
			for (; t--;) {
				var n = e[t];
				(8 === n.nodeType || n.nodeType === qe && "" === n.nodeValue.trim()) && v.call(e, t, 1)
			}
			return e
		}
		var Tn = o("$controller"),
			xn = /^(\S+)(\s+as\s+([\w$]+))?$/;

		function On(e, t) {
			if (t && B(t)) return t;
			if (B(e)) {
				var n = xn.exec(e);
				if (n) return n[3]
			}
		}

		function An() {
			var e = {};
			this.has = function(t) {
				return e.hasOwnProperty(t)
			}, this.register = function(t, n) {
				De(t, "controller"), j(t) ? P(e, t) : e[t] = n
			}, this.$get = ["$injector", function(t) {
				return function(r, i, o, a) {
					var s, u, c, l;
					if (o = !0 === o, a && B(a) && (l = a), B(r)) {
						if (!(u = r.match(xn))) throw Tn("ctrlfmt", "Badly formed controller string '{0}'. Must match `__name__ as __id__` or `__name__`.", r);
						if (c = u[1], l = l || u[3], r = e.hasOwnProperty(c) ? e[c] : function(e, t) {
								if (!t) return e;
								for (var n, r = t.split("."), i = r.length, o = 0; o < i; o++) n = r[o], e && (e = e[n]);
								return e
							}(i.$scope, c), !r) throw Tn("ctrlreg", "The controller with the name '{0}' is not registered.", c);
						_e(r, c, !0)
					}
					if (o) {
						var f = (W(r) ? r[r.length - 1] : r).prototype;
						return s = Object.create(f || null), l && n(i, l, s, c || r.name), P((function() {
							var e = t.invoke(r, s, i, c);
							return e !== s && (j(e) || J(e)) && (s = e, l && n(i, l, s, c || r.name)), s
						}), {
							instance: s,
							identifier: l
						})
					}
					return s = t.instantiate(r, i, c), l && n(i, l, s, c || r.name), s
				};

				function n(e, t, n, r) {
					if (!e || !j(e.$scope)) throw o("$controller")("noscp", "Cannot export controller '{0}' as '{1}'! No $scope object provided via `locals`.", r, t);
					e.$scope[t] = n
				}
			}]
		}

		function Rn() {
			this.$get = ["$window", function(e) {
				return s(e.document)
			}]
		}

		function Cn() {
			this.$get = ["$document", "$rootScope", function(e, t) {
				var n = e[0],
					r = n && n.hidden;

				function i() {
					r = n.hidden
				}
				return e.on("visibilitychange", i), t.$on("$destroy", (function() {
						e.off("visibilitychange", i)
					})),
					function() {
						return r
					}
			}]
		}

		function Pn() {
			this.$get = ["$log", function(e) {
				return function(t, n) {
					e.error.apply(e, arguments)
				}
			}]
		}
		var In = function() {
				this.$get = ["$document", function(e) {
					return function(t) {
						return t ? !t.nodeType && t instanceof s && (t = t[0]) : t = e[0].body, t.offsetWidth + 1
					}
				}]
			},
			Mn = "application/json",
			Nn = {
				"Content-Type": Mn + ";charset=utf-8"
			},
			kn = /^\[|^\{(?!\{)/,
			Ln = {
				"[": /]$/,
				"{": /}$/
			},
			Un = /^\)]\}',?\n/,
			_n = o("$http");

		function Dn(e) {
			return j(e) ? G(e) ? e.toISOString() : ve(e) : e
		}

		function Vn() {
			this.$get = function() {
				return function(e) {
					if (!e) return "";
					var t = [];
					return x(e, (function(e, n) {
						null === e || V(e) || J(e) || (W(e) ? T(e, (function(e) {
							t.push(Oe(n) + "=" + Oe(Dn(e)))
						})) : t.push(Oe(n) + "=" + Oe(Dn(e))))
					})), t.join("&")
				}
			}
		}

		function Fn() {
			this.$get = function() {
				return function(e) {
					if (!e) return "";
					var t = [];
					return function e(n, r, i) {
						W(n) ? T(n, (function(t, n) {
							e(t, r + "[" + (j(t) ? n : "") + "]")
						})) : j(n) && !G(n) ? x(n, (function(t, n) {
							e(t, r + (i ? "" : "[") + n + (i ? "" : "]"))
						})) : (J(n) && (n = n()), t.push(Oe(r) + "=" + (null == n ? "" : Oe(Dn(n)))))
					}(e, "", !0), t.join("&")
				}
			}
		}

		function jn(e, t) {
			if (B(e)) {
				var n = e.replace(Un, "").trim();
				if (n) {
					var r = t("Content-Type"),
						i = r && 0 === r.indexOf(Mn);
					if (i || (a = (o = n).match(kn)) && Ln[a[0]].test(o)) try {
						e = me(n)
					} catch (t) {
						if (!i) return e;
						throw _n("baddata", 'Data must be a valid JSON object. Received: "{0}". Parse error: "{1}"', e, t)
					}
				}
			}
			var o, a;
			return e
		}

		function qn(e) {
			var t, n = Fe();

			function r(e, t) {
				e && (n[e] = n[e] ? n[e] + ", " + t : t)
			}
			return B(e) ? T(e.split("\n"), (function(e) {
				t = e.indexOf(":"), r(d(te(e.substr(0, t))), te(e.substr(t + 1)))
			})) : j(e) && T(e, (function(e, t) {
				r(d(t), te(e))
			})), n
		}

		function Bn(e) {
			var t;
			return function(n) {
				if (t || (t = qn(e)), n) {
					var r = t[d(n)];
					return void 0 === r && (r = null), r
				}
				return t
			}
		}

		function Hn(e, t, n, r) {
			return J(r) ? r(e, t, n) : (T(r, (function(r) {
				e = r(e, t, n)
			})), e)
		}

		function Gn(e) {
			return 200 <= e && e < 300
		}

		function Wn() {
			var e = this.defaults = {
					transformResponse: [jn],
					transformRequest: [function(e) {
						return !j(e) || (t = e, "[object File]" === g.call(t)) || function(e) {
							return "[object Blob]" === g.call(e)
						}(e) || function(e) {
							return "[object FormData]" === g.call(e)
						}(e) ? e : ve(e);
						var t
					}],
					headers: {
						common: {
							Accept: "application/json, text/plain, */*"
						},
						post: Be(Nn),
						put: Be(Nn),
						patch: Be(Nn)
					},
					xsrfCookieName: "XSRF-TOKEN",
					xsrfHeaderName: "X-XSRF-TOKEN",
					paramSerializer: "$httpParamSerializer",
					jsonpCallbackParam: "callback"
				},
				t = !1;
			this.useApplyAsync = function(e) {
				return F(e) ? (t = !!e, this) : t
			};
			var n = this.interceptors = [],
				r = this.xsrfTrustedOrigins = [];
			Object.defineProperty(this, "xsrfWhitelistedOrigins", {
				get: function() {
					return this.xsrfTrustedOrigins
				},
				set: function(e) {
					this.xsrfTrustedOrigins = e
				}
			}), this.$get = ["$browser", "$httpBackend", "$$cookieReader", "$cacheFactory", "$rootScope", "$q", "$injector", "$sce", function(i, a, s, u, c, l, f, p) {
				var $ = u("$http");
				e.paramSerializer = B(e.paramSerializer) ? f.get(e.paramSerializer) : e.paramSerializer;
				var v = [];
				T(n, (function(e) {
					v.unshift(B(e) ? f.get(e) : f.invoke(e))
				}));
				var m, g = (m = [ui].concat(r.map(li)), function(e) {
					var t = li(e);
					return m.some(fi.bind(null, t))
				});

				function y(n) {
					if (!j(n)) throw o("$http")("badreq", "Http request configuration must be an object.  Received: {0}", n);
					if (!B(p.valueOf(n.url))) throw o("$http")("badreq", "Http request configuration url must be a string or a $sce trusted object.  Received: {0}", n.url);
					var r = P({
						method: "get",
						transformRequest: e.transformRequest,
						transformResponse: e.transformResponse,
						paramSerializer: e.paramSerializer,
						jsonpCallbackParam: e.jsonpCallbackParam
					}, n);
					r.headers = function(t) {
						var n, r, i, o = e.headers,
							a = P({}, t.headers);
						o = P({}, o.common, o[d(t.method)]);
						e: for (n in o) {
							for (i in r = d(n), a)
								if (d(i) === r) continue e;
							a[n] = o[n]
						}
						return function(e, t) {
							var n, r = {};
							return T(e, (function(e, i) {
								J(e) ? null != (n = e(t)) && (r[i] = n) : r[i] = e
							})), r
						}(a, Be(t))
					}(n), r.method = h(r.method), r.paramSerializer = B(r.paramSerializer) ? f.get(r.paramSerializer) : r.paramSerializer, i.$$incOutstandingRequestCount("$http");
					var u = [],
						m = [],
						b = l.resolve(r);
					return T(v, (function(e) {
						(e.request || e.requestError) && u.unshift(e.request, e.requestError), (e.response || e.responseError) && m.push(e.response, e.responseError)
					})), b = (b = w(b, u)).then((function(n) {
						var r = n.headers,
							i = Hn(n.data, Bn(r), void 0, n.transformRequest);
						return V(i) && T(r, (function(e, t) {
								"content-type" === d(t) && delete r[t]
							})), V(n.withCredentials) && !V(e.withCredentials) && (n.withCredentials = e.withCredentials),
							function(n, r) {
								var i, o, u = l.defer(),
									f = u.promise,
									h = n.headers,
									v = "jsonp" === d(n.method),
									m = n.url;
								if (v ? m = p.getTrustedResourceUrl(m) : B(m) || (m = p.valueOf(m)), m = function(e, t) {
										return t.length > 0 && (e += (-1 === e.indexOf("?") ? "?" : "&") + t), e
									}(m, n.paramSerializer(n.params)), v && (m = function(e, t) {
										var n = e.split("?");
										if (n.length > 2) throw _n("badjsonp", 'Illegal use more than one "?", in url, "{1}"', e);
										return T(Te(n[1]), (function(n, r) {
											if ("JSON_CALLBACK" === n) throw _n("badjsonp", 'Illegal use of JSON_CALLBACK in url, "{0}"', e);
											if (r === t) throw _n("badjsonp", 'Illegal use of callback param, "{0}", in url, "{1}"', t, e)
										})), e += (-1 === e.indexOf("?") ? "?" : "&") + t + "=JSON_CALLBACK"
									}(m, n.jsonpCallbackParam)), y.pendingRequests.push(n), f.then(x, x), !n.cache && !e.cache || !1 === n.cache || "GET" !== n.method && "JSONP" !== n.method || (i = j(n.cache) ? n.cache : j(e.cache) ? e.cache : $), i && (F(o = i.get(m)) ? X(o) ? o.then(S, S) : W(o) ? E(o[1], o[0], Be(o[2]), o[3], o[4]) : E(o, 200, {}, "OK", "complete") : i.put(m, f)), V(o)) {
									var b = g(n.url) ? s()[n.xsrfCookieName || e.xsrfCookieName] : void 0;
									b && (h[n.xsrfHeaderName || e.xsrfHeaderName] = b), a(n.method, m, r, (function(e, n, r, o, a) {
										function s() {
											E(n, e, r, o, a)
										}
										i && (Gn(e) ? i.put(m, [e, n, qn(r), o, a]) : i.remove(m)), t ? c.$applyAsync(s) : (s(), c.$$phase || c.$apply())
									}), h, n.timeout, n.withCredentials, n.responseType, w(n.eventHandlers), w(n.uploadEventHandlers))
								}
								return f;

								function w(e) {
									if (e) {
										var n = {};
										return T(e, (function(e, r) {
											n[r] = function(n) {
												function r() {
													e(n)
												}
												t ? c.$applyAsync(r) : c.$$phase ? r() : c.$apply(r)
											}
										})), n
									}
								}

								function E(e, t, r, i, o) {
									(Gn(t = t >= -1 ? t : 0) ? u.resolve : u.reject)({
										data: e,
										status: t,
										headers: Bn(r),
										config: n,
										statusText: i,
										xhrStatus: o
									})
								}

								function S(e) {
									E(e.data, e.status, Be(e.headers()), e.statusText, e.xhrStatus)
								}

								function x() {
									var e = y.pendingRequests.indexOf(n); - 1 !== e && y.pendingRequests.splice(e, 1)
								}
							}(n, i).then(E, E)
					})), (b = w(b, m)).finally((function() {
						i.$$completeOutstandingRequest(L, "$http")
					}));

					function w(e, t) {
						for (var n = 0, r = t.length; n < r;) {
							var i = t[n++],
								o = t[n++];
							e = e.then(i, o)
						}
						return t.length = 0, e
					}

					function E(e) {
						var t = P({}, e);
						return t.data = Hn(e.data, e.headers, e.status, r.transformResponse), Gn(e.status) ? t : l.reject(t)
					}
				}
				return y.pendingRequests = [],
					function(e) {
						T(arguments, (function(e) {
							y[e] = function(t, n) {
								return y(P({}, n || {}, {
									method: e,
									url: t
								}))
							}
						}))
					}("get", "delete", "head", "jsonp"),
					function(e) {
						T(arguments, (function(e) {
							y[e] = function(t, n, r) {
								return y(P({}, r || {}, {
									method: e,
									url: t,
									data: n
								}))
							}
						}))
					}("post", "put", "patch"), y.defaults = e, y
			}]
		}

		function zn() {
			this.$get = function() {
				return function() {
					return new e.XMLHttpRequest
				}
			}
		}

		function Jn() {
			this.$get = ["$browser", "$jsonpCallbacks", "$document", "$xhrFactory", function(e, t, n, r) {
				return function(e, t, n, r, i) {
					return function(i, a, s, u, c, l, f, p, h, $) {
						if (a = a || e.url(), "jsonp" === d(i)) var v = r.createCallback(a),
							m = o(a, v, (function(e, t) {
								var n = 200 === e && r.getResponse(v);
								E(u, e, n, "", t, "complete"), r.removeCallback(v)
							}));
						else {
							var g = t(i, a),
								y = !1;
							g.open(i, a, !0), T(c, (function(e, t) {
								F(e) && g.setRequestHeader(t, e)
							})), g.onload = function() {
								var e = g.statusText || "",
									t = "response" in g ? g.response : g.responseText,
									n = 1223 === g.status ? 204 : g.status;
								0 === n && (n = t ? 200 : "file" === li(a).protocol ? 404 : 0), E(u, n, t, g.getAllResponseHeaders(), e, "complete")
							};
							if (g.onerror = function() {
									E(u, -1, null, null, "", "error")
								}, g.ontimeout = function() {
									E(u, -1, null, null, "", "timeout")
								}, g.onabort = function() {
									E(u, -1, null, null, "", y ? "timeout" : "abort")
								}, T(h, (function(e, t) {
									g.addEventListener(t, e)
								})), T($, (function(e, t) {
									g.upload.addEventListener(t, e)
								})), f && (g.withCredentials = !0), p) try {
								g.responseType = p
							} catch (e) {
								if ("json" !== p) throw e
							}
							g.send(V(s) ? null : s)
						}
						if (l > 0) var b = n((function() {
							w("timeout")
						}), l);
						else X(l) && l.then((function() {
							w(F(l.$$timeoutId) ? "timeout" : "abort")
						}));

						function w(e) {
							y = "timeout" === e, m && m(), g && g.abort()
						}

						function E(e, t, r, i, o, a) {
							F(b) && n.cancel(b), m = g = null, e(t, r, i, o, a)
						}
					};

					function o(e, t, n) {
						e = e.replace("JSON_CALLBACK", t);
						var o = i.createElement("script"),
							a = null;
						return o.type = "text/javascript", o.src = e, o.async = !0, a = function(e) {
							o.removeEventListener("load", a), o.removeEventListener("error", a), i.body.removeChild(o), o = null;
							var s = -1,
								u = "unknown";
							e && ("load" !== e.type || r.wasCalled(t) || (e = {
								type: "error"
							}), u = e.type, s = "error" === e.type ? 404 : 200), n && n(s, u)
						}, o.addEventListener("load", a), o.addEventListener("error", a), i.body.appendChild(o), a
					}
				}(e, r, e.defer, t, n[0])
			}]
		}
		var Yn = w.$interpolateMinErr = o("$interpolate");

		function Qn() {
			var e = "{{",
				t = "}}";
			this.startSymbol = function(t) {
				return t ? (e = t, this) : e
			}, this.endSymbol = function(e) {
				return e ? (t = e, this) : t
			}, this.$get = ["$parse", "$exceptionHandler", "$sce", function(n, r, i) {
				var o = e.length,
					a = t.length,
					s = new RegExp(e.replace(/./g, c), "g"),
					u = new RegExp(t.replace(/./g, c), "g");

				function c(e) {
					return "\\\\\\" + e
				}

				function l(n) {
					return n.replace(s, e).replace(u, t)
				}

				function f(e, t, n, r) {
					var i = e.$watch((function(e) {
						return i(), r(e)
					}), t, n);
					return i
				}

				function p(s, u, c, p) {
					var d = c === i.URL || c === i.MEDIA_URL;
					if (!s.length || -1 === s.indexOf(e)) {
						if (u) return;
						var h = l(s);
						d && (h = i.getTrusted(c, h));
						var $ = _(h);
						return $.exp = s, $.expressions = [], $.$$watchDelegate = f, $
					}
					p = !!p;
					for (var v, m, g, y, b, w = 0, E = [], S = s.length, T = [], x = []; w < S;) {
						if (-1 === (v = s.indexOf(e, w)) || -1 === (m = s.indexOf(t, v + o))) {
							w !== S && T.push(l(s.substring(w)));
							break
						}
						w !== v && T.push(l(s.substring(w, v))), y = s.substring(v + o, m), E.push(y), w = m + a, x.push(T.length), T.push("")
					}
					b = 1 === T.length && 1 === x.length;
					var O = d && b ? void 0 : function(e) {
						try {
							return e = c && !d ? i.getTrusted(c, e) : i.valueOf(e), p && !F(e) ? e : je(e)
						} catch (e) {
							r(Yn.interr(s, e))
						}
					};
					if (g = E.map((function(e) {
							return n(e, O)
						})), !u || E.length) {
						var A = function(e) {
							for (var t = 0, n = E.length; t < n; t++) {
								if (p && V(e[t])) return;
								T[x[t]] = e[t]
							}
							return d ? i.getTrusted(c, b ? T[0] : T.join("")) : (c && T.length > 1 && Yn.throwNoconcat(s), T.join(""))
						};
						return P((function(e) {
							var t = 0,
								n = E.length,
								i = new Array(n);
							try {
								for (; t < n; t++) i[t] = g[t](e);
								return A(i)
							} catch (e) {
								r(Yn.interr(s, e))
							}
						}), {
							exp: s,
							expressions: E,
							$$watchDelegate: function(e, t) {
								var n;
								return e.$watchGroup(g, (function(r, i) {
									var o = A(r);
									t.call(this, o, r !== i ? n : o, e), n = o
								}))
							}
						})
					}
				}
				return p.startSymbol = function() {
					return e
				}, p.endSymbol = function() {
					return t
				}, p
			}]
		}
		Yn.throwNoconcat = function(e) {
			throw Yn("noconcat", "Error while interpolating: {0}\nStrict Contextual Escaping disallows interpolations that concatenate multiple expressions when a trusted value is required.  See http://docs.angularjs.org/api/ng.$sce", e)
		}, Yn.interr = function(e, t) {
			return Yn("interr", "Can't interpolate: {0}\n{1}", e, t.toString())
		};
		var Kn = o("$interval");

		function Zn() {
			this.$get = ["$$intervalFactory", "$window", function(e, t) {
				var n = {},
					r = function(e) {
						t.clearInterval(e), delete n[e]
					},
					i = e((function(e, r, i) {
						var o = t.setInterval(e, r);
						return n[o] = i, o
					}), r);
				return i.cancel = function(e) {
					if (!e) return !1;
					if (!e.hasOwnProperty("$$intervalId")) throw Kn("badprom", "`$interval.cancel()` called with a promise that was not generated by `$interval()`.");
					if (!n.hasOwnProperty(e.$$intervalId)) return !1;
					var t = e.$$intervalId,
						i = n[t];
					return jr(i.promise), i.reject("canceled"), r(t), !0
				}, i
			}]
		}

		function Xn() {
			this.$get = ["$browser", "$q", "$$q", "$rootScope", function(e, t, n, r) {
				return function(i, o) {
					return function(a, s, u, c) {
						var l = arguments.length > 4,
							f = l ? de(arguments, 4) : [],
							p = 0,
							d = F(c) && !c,
							h = (d ? n : t).defer(),
							$ = h.promise;

						function v() {
							l ? a.apply(null, f) : a(p)
						}
						return u = F(u) ? u : 0, $.$$intervalId = i((function() {
							d ? e.defer(v) : r.$evalAsync(v), h.notify(p++), u > 0 && p >= u && (h.resolve(p), o($.$$intervalId)), d || r.$apply()
						}), s, h, d), $
					}
				}
			}]
		}
		var er = function() {
				this.$get = function() {
					var e = w.callbacks,
						t = {};
					return {
						createCallback: function(n) {
							var r = "_" + (e.$$counter++).toString(36),
								i = "angular.callbacks." + r,
								o = function(e) {
									var t = function e(t) {
										e.data = t, e.called = !0
									};
									return t.id = e, t
								}(r);
							return t[i] = e[r] = o, i
						},
						wasCalled: function(e) {
							return t[e].called
						},
						getResponse: function(e) {
							return t[e].data
						},
						removeCallback: function(n) {
							var r = t[n];
							delete e[r.id], delete t[n]
						}
					}
				}
			},
			tr = /^([^?#]*)(\?([^#]*))?(#(.*))?$/,
			nr = {
				http: 80,
				https: 443,
				ftp: 21
			},
			rr = o("$location");

		function ir(e, t) {
			var n = li(e);
			t.$$protocol = n.protocol, t.$$host = n.hostname, t.$$port = M(n.port) || nr[n.protocol] || null
		}
		var or = /^\s*[\\/]{2,}/;

		function ar(e, t, n) {
			if (or.test(e)) throw rr("badpath", 'Invalid url "{0}".', e);
			var r = "/" !== e.charAt(0);
			r && (e = "/" + e);
			var i = li(e),
				o = r && "/" === i.pathname.charAt(0) ? i.pathname.substring(1) : i.pathname;
			t.$$path = function(e, t) {
				for (var n = e.split("/"), r = n.length; r--;) n[r] = decodeURIComponent(n[r]), t && (n[r] = n[r].replace(/\//g, "%2F"));
				return n.join("/")
			}(o, n), t.$$search = Te(i.search), t.$$hash = decodeURIComponent(i.hash), t.$$path && "/" !== t.$$path.charAt(0) && (t.$$path = "/" + t.$$path)
		}

		function sr(e, t) {
			return e.slice(0, t.length) === t
		}

		function ur(e, t) {
			if (sr(t, e)) return t.substr(e.length)
		}

		function cr(e) {
			var t = e.indexOf("#");
			return -1 === t ? e : e.substr(0, t)
		}

		function lr(e, t, n) {
			this.$$html5 = !0, n = n || "", ir(e, this), this.$$parse = function(e) {
				var n = ur(t, e);
				if (!B(n)) throw rr("ipthprfx", 'Invalid url "{0}", missing path prefix "{1}".', e, t);
				ar(n, this, !0), this.$$path || (this.$$path = "/"), this.$$compose()
			}, this.$$normalizeUrl = function(e) {
				return t + e.substr(1)
			}, this.$$parseLinkUrl = function(r, i) {
				return i && "#" === i[0] ? (this.hash(i.slice(1)), !0) : (F(o = ur(e, r)) ? (a = o, s = n && F(o = ur(n, o)) ? t + (ur("/", o) || o) : e + a) : F(o = ur(t, r)) ? s = t + o : t === r + "/" && (s = t), s && this.$$parse(s), !!s);
				var o, a, s
			}
		}

		function fr(e, t, n) {
			ir(e, this), this.$$parse = function(r) {
				var i, o = ur(e, r) || ur(t, r);
				V(o) || "#" !== o.charAt(0) ? this.$$html5 ? i = o : (i = "", V(o) && (e = r, this.replace())) : V(i = ur(n, o)) && (i = o), ar(i, this, !1), this.$$path = function(e, t, n) {
					var r, i = /^\/[A-Z]:(\/.*)/;
					return sr(t, n) && (t = t.replace(n, "")), i.exec(t) ? e : (r = i.exec(e)) ? r[1] : e
				}(this.$$path, i, e), this.$$compose()
			}, this.$$normalizeUrl = function(t) {
				return e + (t ? n + t : "")
			}, this.$$parseLinkUrl = function(t, n) {
				return cr(e) === cr(t) && (this.$$parse(t), !0)
			}
		}

		function pr(e, t, n) {
			this.$$html5 = !0, fr.apply(this, arguments), this.$$parseLinkUrl = function(r, i) {
				return i && "#" === i[0] ? (this.hash(i.slice(1)), !0) : (e === cr(r) ? o = r : (a = ur(t, r)) ? o = e + n + a : t === r + "/" && (o = t), o && this.$$parse(o), !!o);
				var o, a
			}, this.$$normalizeUrl = function(t) {
				return e + n + t
			}
		}
		var dr = {
			$$absUrl: "",
			$$html5: !1,
			$$replace: !1,
			$$compose: function() {
				this.$$url = function(e, t, n) {
					var r, i = (r = [], T(t, (function(e, t) {
							W(e) ? T(e, (function(e) {
								r.push(Oe(t, !0) + (!0 === e ? "" : "=" + Oe(e, !0)))
							})) : r.push(Oe(t, !0) + (!0 === e ? "" : "=" + Oe(e, !0)))
						})), r.length ? r.join("&") : ""),
						o = n ? "#" + xe(n) : "",
						a = function(e) {
							for (var t = e.split("/"), n = t.length; n--;) t[n] = xe(t[n].replace(/%2F/g, "/"));
							return t.join("/")
						}(e);
					return a + (i ? "?" + i : "") + o
				}(this.$$path, this.$$search, this.$$hash), this.$$absUrl = this.$$normalizeUrl(this.$$url), this.$$urlUpdatedByLocation = !0
			},
			absUrl: hr("$$absUrl"),
			url: function(e) {
				if (V(e)) return this.$$url;
				var t = tr.exec(e);
				return (t[1] || "" === e) && this.path(decodeURIComponent(t[1])), (t[2] || t[1] || "" === e) && this.search(t[3] || ""), this.hash(t[5] || ""), this
			},
			protocol: hr("$$protocol"),
			host: hr("$$host"),
			port: hr("$$port"),
			path: $r("$$path", (function(e) {
				return "/" === (e = null !== e ? e.toString() : "").charAt(0) ? e : "/" + e
			})),
			search: function(e, t) {
				switch (arguments.length) {
					case 0:
						return this.$$search;
					case 1:
						if (B(e) || H(e)) e = e.toString(), this.$$search = Te(e);
						else {
							if (!j(e)) throw rr("isrcharg", "The first argument of the `$location#search()` call must be a string or an object.");
							T(e = se(e, {}), (function(t, n) {
								null == t && delete e[n]
							})), this.$$search = e
						}
						break;
					default:
						V(t) || null === t ? delete this.$$search[e] : this.$$search[e] = t
				}
				return this.$$compose(), this
			},
			hash: $r("$$hash", (function(e) {
				return null !== e ? e.toString() : ""
			})),
			replace: function() {
				return this.$$replace = !0, this
			}
		};

		function hr(e) {
			return function() {
				return this[e]
			}
		}

		function $r(e, t) {
			return function(n) {
				return V(n) ? this[e] : (this[e] = t(n), this.$$compose(), this)
			}
		}

		function vr() {
			var e = "!",
				t = {
					enabled: !1,
					requireBase: !0,
					rewriteLinks: !0
				};
			this.hashPrefix = function(t) {
				return F(t) ? (e = t, this) : e
			}, this.html5Mode = function(e) {
				return Z(e) ? (t.enabled = e, this) : j(e) ? (Z(e.enabled) && (t.enabled = e.enabled), Z(e.requireBase) && (t.requireBase = e.requireBase), (Z(e.rewriteLinks) || B(e.rewriteLinks)) && (t.rewriteLinks = e.rewriteLinks), this) : t
			}, this.$get = ["$rootScope", "$browser", "$sniffer", "$rootElement", "$window", function(n, r, i, o, a) {
				var u, c, l, f, p = r.baseHref(),
					d = r.url();
				if (t.enabled) {
					if (!p && t.requireBase) throw rr("nobase", "$location in HTML5 mode requires a <base> tag to be present!");
					l = (f = d).substring(0, f.indexOf("/", f.indexOf("//") + 2)) + (p || "/"), c = i.history ? lr : pr
				} else l = cr(d), c = fr;
				var h = function(e) {
					return e.substr(0, cr(e).lastIndexOf("/") + 1)
				}(l);
				(u = new c(l, h, "#" + e)).$$parseLinkUrl(d, d), u.$$state = r.state();
				var $ = /^\s*(javascript|mailto):/i;

				function v(e, t, n) {
					var i = u.url(),
						o = u.$$state;
					try {
						r.url(e, t, n), u.$$state = r.state()
					} catch (e) {
						throw u.url(i), u.$$state = o, e
					}
				}
				o.on("click", (function(e) {
					var i = t.rewriteLinks;
					if (i && !e.ctrlKey && !e.metaKey && !e.shiftKey && 2 !== e.which && 2 !== e.button) {
						for (var a = s(e.target);
							"a" !== ie(a[0]);)
							if (a[0] === o[0] || !(a = a.parent())[0]) return;
						if (!B(i) || !V(a.attr(i))) {
							var c = a.prop("href"),
								l = a.attr("href") || a.attr("xlink:href");
							j(c) && "[object SVGAnimatedString]" === c.toString() && (c = li(c.animVal).href), $.test(c) || !c || a.attr("target") || e.isDefaultPrevented() || u.$$parseLinkUrl(c, l) && (e.preventDefault(), u.absUrl() !== r.url() && n.$apply())
						}
					}
				})), u.absUrl() !== d && r.url(u.absUrl(), !0);
				var m = !0;
				return r.onUrlChange((function(e, t) {
					sr(e, h) ? (n.$evalAsync((function() {
						var r, i = u.absUrl(),
							o = u.$$state;
						u.$$parse(e), u.$$state = t, r = n.$broadcast("$locationChangeStart", e, i, t, o).defaultPrevented, u.absUrl() === e && (r ? (u.$$parse(i), u.$$state = o, v(i, !1, o)) : (m = !1, g(i, o)))
					})), n.$$phase || n.$digest()) : a.location.href = e
				})), n.$watch((function() {
					if (m || u.$$urlUpdatedByLocation) {
						u.$$urlUpdatedByLocation = !1;
						var e = r.url(),
							t = u.absUrl(),
							o = r.state(),
							a = u.$$replace,
							s = ! function(e, t) {
								return e === t || li(e).href === li(t).href
							}(e, t) || u.$$html5 && i.history && o !== u.$$state;
						(m || s) && (m = !1, n.$evalAsync((function() {
							var t = u.absUrl(),
								r = n.$broadcast("$locationChangeStart", t, e, u.$$state, o).defaultPrevented;
							u.absUrl() === t && (r ? (u.$$parse(e), u.$$state = o) : (s && v(t, a, o === u.$$state ? null : u.$$state), g(e, o)))
						})))
					}
					u.$$replace = !1
				})), u;

				function g(e, t) {
					n.$broadcast("$locationChangeSuccess", u.absUrl(), e, u.$$state, t)
				}
			}]
		}

		function mr() {
			var e = !0,
				t = this;
			this.debugEnabled = function(t) {
				return F(t) ? (e = t, this) : e
			}, this.$get = ["$window", function(n) {
				var r, i = a || /\bEdge\//.test(n.navigator && n.navigator.userAgent);
				return {
					log: o("log"),
					info: o("info"),
					warn: o("warn"),
					error: o("error"),
					debug: (r = o("debug"), function() {
						e && r.apply(t, arguments)
					})
				};

				function o(e) {
					var t = n.console || {},
						r = t[e] || t.log || L;
					return function() {
						var e = [];
						return T(arguments, (function(t) {
							e.push(function(e) {
								return z(e) && (e.stack && i ? e = e.message && -1 === e.stack.indexOf(e.message) ? "Error: " + e.message + "\n" + e.stack : e.stack : e.sourceURL && (e = e.message + "\n" + e.sourceURL + ":" + e.line)), e
							}(t))
						})), Function.prototype.apply.call(r, t, e)
					}
				}
			}]
		}
		T([pr, fr, lr], (function(e) {
			e.prototype = Object.create(dr), e.prototype.state = function(t) {
				if (!arguments.length) return this.$$state;
				if (e !== lr || !this.$$html5) throw rr("nostate", "History API state support is available only in HTML5 mode and only in browsers supporting HTML5 History API");
				return this.$$state = V(t) ? null : t, this.$$urlUpdatedByLocation = !0, this
			}
		}));
		var gr = o("$parse"),
			yr = {}.constructor.prototype.valueOf;

		function br(e) {
			return e + ""
		}
		var wr = Fe();
		T("+ - * / % === !== == != < > <= >= && || ! = |".split(" "), (function(e) {
			wr[e] = !0
		}));
		var Er = {
				n: "\n",
				f: "\f",
				r: "\r",
				t: "\t",
				v: "\v",
				"'": "'",
				'"': '"'
			},
			Sr = function(e) {
				this.options = e
			};
		Sr.prototype = {
			constructor: Sr,
			lex: function(e) {
				for (this.text = e, this.index = 0, this.tokens = []; this.index < this.text.length;) {
					var t = this.text.charAt(this.index);
					if ('"' === t || "'" === t) this.readString(t);
					else if (this.isNumber(t) || "." === t && this.isNumber(this.peek())) this.readNumber();
					else if (this.isIdentifierStart(this.peekMultichar())) this.readIdent();
					else if (this.is(t, "(){}[].,;:?")) this.tokens.push({
						index: this.index,
						text: t
					}), this.index++;
					else if (this.isWhitespace(t)) this.index++;
					else {
						var n = t + this.peek(),
							r = n + this.peek(2),
							i = wr[t],
							o = wr[n],
							a = wr[r];
						if (i || o || a) {
							var s = a ? r : o ? n : t;
							this.tokens.push({
								index: this.index,
								text: s,
								operator: !0
							}), this.index += s.length
						} else this.throwError("Unexpected next character ", this.index, this.index + 1)
					}
				}
				return this.tokens
			},
			is: function(e, t) {
				return -1 !== t.indexOf(e)
			},
			peek: function(e) {
				var t = e || 1;
				return this.index + t < this.text.length && this.text.charAt(this.index + t)
			},
			isNumber: function(e) {
				return "0" <= e && e <= "9" && "string" == typeof e
			},
			isWhitespace: function(e) {
				return " " === e || "\r" === e || "\t" === e || "\n" === e || "\v" === e || " " === e
			},
			isIdentifierStart: function(e) {
				return this.options.isIdentifierStart ? this.options.isIdentifierStart(e, this.codePointAt(e)) : this.isValidIdentifierStart(e)
			},
			isValidIdentifierStart: function(e) {
				return "a" <= e && e <= "z" || "A" <= e && e <= "Z" || "_" === e || "$" === e
			},
			isIdentifierContinue: function(e) {
				return this.options.isIdentifierContinue ? this.options.isIdentifierContinue(e, this.codePointAt(e)) : this.isValidIdentifierContinue(e)
			},
			isValidIdentifierContinue: function(e, t) {
				return this.isValidIdentifierStart(e, t) || this.isNumber(e)
			},
			codePointAt: function(e) {
				return 1 === e.length ? e.charCodeAt(0) : (e.charCodeAt(0) << 10) + e.charCodeAt(1) - 56613888
			},
			peekMultichar: function() {
				var e = this.text.charAt(this.index),
					t = this.peek();
				if (!t) return e;
				var n = e.charCodeAt(0),
					r = t.charCodeAt(0);
				return n >= 55296 && n <= 56319 && r >= 56320 && r <= 57343 ? e + t : e
			},
			isExpOperator: function(e) {
				return "-" === e || "+" === e || this.isNumber(e)
			},
			throwError: function(e, t, n) {
				n = n || this.index;
				var r = F(t) ? "s " + t + "-" + this.index + " [" + this.text.substring(t, n) + "]" : " " + n;
				throw gr("lexerr", "Lexer Error: {0} at column{1} in expression [{2}].", e, r, this.text)
			},
			readNumber: function() {
				for (var e = "", t = this.index; this.index < this.text.length;) {
					var n = d(this.text.charAt(this.index));
					if ("." === n || this.isNumber(n)) e += n;
					else {
						var r = this.peek();
						if ("e" === n && this.isExpOperator(r)) e += n;
						else if (this.isExpOperator(n) && r && this.isNumber(r) && "e" === e.charAt(e.length - 1)) e += n;
						else {
							if (!this.isExpOperator(n) || r && this.isNumber(r) || "e" !== e.charAt(e.length - 1)) break;
							this.throwError("Invalid exponent")
						}
					}
					this.index++
				}
				this.tokens.push({
					index: t,
					text: e,
					constant: !0,
					value: Number(e)
				})
			},
			readIdent: function() {
				var e = this.index;
				for (this.index += this.peekMultichar().length; this.index < this.text.length;) {
					var t = this.peekMultichar();
					if (!this.isIdentifierContinue(t)) break;
					this.index += t.length
				}
				this.tokens.push({
					index: e,
					text: this.text.slice(e, this.index),
					identifier: !0
				})
			},
			readString: function(e) {
				var t = this.index;
				this.index++;
				for (var n = "", r = e, i = !1; this.index < this.text.length;) {
					var o = this.text.charAt(this.index);
					if (r += o, i) {
						if ("u" === o) {
							var a = this.text.substring(this.index + 1, this.index + 5);
							a.match(/[\da-f]{4}/i) || this.throwError("Invalid unicode escape [\\u" + a + "]"), this.index += 4, n += String.fromCharCode(parseInt(a, 16))
						} else n += Er[o] || o;
						i = !1
					} else if ("\\" === o) i = !0;
					else {
						if (o === e) return this.index++, void this.tokens.push({
							index: t,
							text: r,
							constant: !0,
							value: n
						});
						n += o
					}
					this.index++
				}
				this.throwError("Unterminated quote", t)
			}
		};
		var Tr = function(e, t) {
			this.lexer = e, this.options = t
		};

		function xr(e, t) {
			return void 0 !== e ? e : t
		}

		function Or(e, t) {
			return void 0 === e ? t : void 0 === t ? e : e + t
		}
		Tr.Program = "Program", Tr.ExpressionStatement = "ExpressionStatement", Tr.AssignmentExpression = "AssignmentExpression", Tr.ConditionalExpression = "ConditionalExpression", Tr.LogicalExpression = "LogicalExpression", Tr.BinaryExpression = "BinaryExpression", Tr.UnaryExpression = "UnaryExpression", Tr.CallExpression = "CallExpression", Tr.MemberExpression = "MemberExpression", Tr.Identifier = "Identifier", Tr.Literal = "Literal", Tr.ArrayExpression = "ArrayExpression", Tr.Property = "Property", Tr.ObjectExpression = "ObjectExpression", Tr.ThisExpression = "ThisExpression", Tr.LocalsExpression = "LocalsExpression", Tr.NGValueParameter = "NGValueParameter", Tr.prototype = {
			ast: function(e) {
				this.text = e, this.tokens = this.lexer.lex(e);
				var t = this.program();
				return 0 !== this.tokens.length && this.throwError("is an unexpected token", this.tokens[0]), t
			},
			program: function() {
				for (var e = [];;)
					if (this.tokens.length > 0 && !this.peek("}", ")", ";", "]") && e.push(this.expressionStatement()), !this.expect(";")) return {
						type: Tr.Program,
						body: e
					}
			},
			expressionStatement: function() {
				return {
					type: Tr.ExpressionStatement,
					expression: this.filterChain()
				}
			},
			filterChain: function() {
				for (var e = this.expression(); this.expect("|");) e = this.filter(e);
				return e
			},
			expression: function() {
				return this.assignment()
			},
			assignment: function() {
				var e = this.ternary();
				if (this.expect("=")) {
					if (!Cr(e)) throw gr("lval", "Trying to assign a value to a non l-value");
					e = {
						type: Tr.AssignmentExpression,
						left: e,
						right: this.assignment(),
						operator: "="
					}
				}
				return e
			},
			ternary: function() {
				var e, t, n = this.logicalOR();
				return this.expect("?") && (e = this.expression(), this.consume(":")) ? (t = this.expression(), {
					type: Tr.ConditionalExpression,
					test: n,
					alternate: e,
					consequent: t
				}) : n
			},
			logicalOR: function() {
				for (var e = this.logicalAND(); this.expect("||");) e = {
					type: Tr.LogicalExpression,
					operator: "||",
					left: e,
					right: this.logicalAND()
				};
				return e
			},
			logicalAND: function() {
				for (var e = this.equality(); this.expect("&&");) e = {
					type: Tr.LogicalExpression,
					operator: "&&",
					left: e,
					right: this.equality()
				};
				return e
			},
			equality: function() {
				for (var e, t = this.relational(); e = this.expect("==", "!=", "===", "!==");) t = {
					type: Tr.BinaryExpression,
					operator: e.text,
					left: t,
					right: this.relational()
				};
				return t
			},
			relational: function() {
				for (var e, t = this.additive(); e = this.expect("<", ">", "<=", ">=");) t = {
					type: Tr.BinaryExpression,
					operator: e.text,
					left: t,
					right: this.additive()
				};
				return t
			},
			additive: function() {
				for (var e, t = this.multiplicative(); e = this.expect("+", "-");) t = {
					type: Tr.BinaryExpression,
					operator: e.text,
					left: t,
					right: this.multiplicative()
				};
				return t
			},
			multiplicative: function() {
				for (var e, t = this.unary(); e = this.expect("*", "/", "%");) t = {
					type: Tr.BinaryExpression,
					operator: e.text,
					left: t,
					right: this.unary()
				};
				return t
			},
			unary: function() {
				var e;
				return (e = this.expect("+", "-", "!")) ? {
					type: Tr.UnaryExpression,
					operator: e.text,
					prefix: !0,
					argument: this.unary()
				} : this.primary()
			},
			primary: function() {
				var e, t;
				for (this.expect("(") ? (e = this.filterChain(), this.consume(")")) : this.expect("[") ? e = this.arrayDeclaration() : this.expect("{") ? e = this.object() : this.selfReferential.hasOwnProperty(this.peek().text) ? e = se(this.selfReferential[this.consume().text]) : this.options.literals.hasOwnProperty(this.peek().text) ? e = {
						type: Tr.Literal,
						value: this.options.literals[this.consume().text]
					} : this.peek().identifier ? e = this.identifier() : this.peek().constant ? e = this.constant() : this.throwError("not a primary expression", this.peek()); t = this.expect("(", "[", ".");) "(" === t.text ? (e = {
					type: Tr.CallExpression,
					callee: e,
					arguments: this.parseArguments()
				}, this.consume(")")) : "[" === t.text ? (e = {
					type: Tr.MemberExpression,
					object: e,
					property: this.expression(),
					computed: !0
				}, this.consume("]")) : "." === t.text ? e = {
					type: Tr.MemberExpression,
					object: e,
					property: this.identifier(),
					computed: !1
				} : this.throwError("IMPOSSIBLE");
				return e
			},
			filter: function(e) {
				for (var t = [e], n = {
						type: Tr.CallExpression,
						callee: this.identifier(),
						arguments: t,
						filter: !0
					}; this.expect(":");) t.push(this.expression());
				return n
			},
			parseArguments: function() {
				var e = [];
				if (")" !== this.peekToken().text)
					do {
						e.push(this.filterChain())
					} while (this.expect(","));
				return e
			},
			identifier: function() {
				var e = this.consume();
				return e.identifier || this.throwError("is not a valid identifier", e), {
					type: Tr.Identifier,
					name: e.text
				}
			},
			constant: function() {
				return {
					type: Tr.Literal,
					value: this.consume().value
				}
			},
			arrayDeclaration: function() {
				var e = [];
				if ("]" !== this.peekToken().text)
					do {
						if (this.peek("]")) break;
						e.push(this.expression())
					} while (this.expect(","));
				return this.consume("]"), {
					type: Tr.ArrayExpression,
					elements: e
				}
			},
			object: function() {
				var e, t = [];
				if ("}" !== this.peekToken().text)
					do {
						if (this.peek("}")) break;
						e = {
							type: Tr.Property,
							kind: "init"
						}, this.peek().constant ? (e.key = this.constant(), e.computed = !1, this.consume(":"), e.value = this.expression()) : this.peek().identifier ? (e.key = this.identifier(), e.computed = !1, this.peek(":") ? (this.consume(":"), e.value = this.expression()) : e.value = e.key) : this.peek("[") ? (this.consume("["), e.key = this.expression(), this.consume("]"), e.computed = !0, this.consume(":"), e.value = this.expression()) : this.throwError("invalid key", this.peek()), t.push(e)
					} while (this.expect(","));
				return this.consume("}"), {
					type: Tr.ObjectExpression,
					properties: t
				}
			},
			throwError: function(e, t) {
				throw gr("syntax", "Syntax Error: Token '{0}' {1} at column {2} of the expression [{3}] starting at [{4}].", t.text, e, t.index + 1, this.text, this.text.substring(t.index))
			},
			consume: function(e) {
				if (0 === this.tokens.length) throw gr("ueoe", "Unexpected end of expression: {0}", this.text);
				var t = this.expect(e);
				return t || this.throwError("is unexpected, expecting [" + e + "]", this.peek()), t
			},
			peekToken: function() {
				if (0 === this.tokens.length) throw gr("ueoe", "Unexpected end of expression: {0}", this.text);
				return this.tokens[0]
			},
			peek: function(e, t, n, r) {
				return this.peekAhead(0, e, t, n, r)
			},
			peekAhead: function(e, t, n, r, i) {
				if (this.tokens.length > e) {
					var o = this.tokens[e],
						a = o.text;
					if (a === t || a === n || a === r || a === i || !t && !n && !r && !i) return o
				}
				return !1
			},
			expect: function(e, t, n, r) {
				var i = this.peek(e, t, n, r);
				return !!i && (this.tokens.shift(), i)
			},
			selfReferential: {
				this: {
					type: Tr.ThisExpression
				},
				$locals: {
					type: Tr.LocalsExpression
				}
			}
		};

		function Ar(e, t, n) {
			var r, i, o, a = e.isPure = function(e, t) {
				switch (e.type) {
					case Tr.MemberExpression:
						if (e.computed) return !1;
						break;
					case Tr.UnaryExpression:
						return 1;
					case Tr.BinaryExpression:
						return "+" !== e.operator && 1;
					case Tr.CallExpression:
						return !1
				}
				return void 0 === t ? 2 : t
			}(e, n);
			switch (e.type) {
				case Tr.Program:
					r = !0, T(e.body, (function(e) {
						Ar(e.expression, t, a), r = r && e.expression.constant
					})), e.constant = r;
					break;
				case Tr.Literal:
					e.constant = !0, e.toWatch = [];
					break;
				case Tr.UnaryExpression:
					Ar(e.argument, t, a), e.constant = e.argument.constant, e.toWatch = e.argument.toWatch;
					break;
				case Tr.BinaryExpression:
					Ar(e.left, t, a), Ar(e.right, t, a), e.constant = e.left.constant && e.right.constant, e.toWatch = e.left.toWatch.concat(e.right.toWatch);
					break;
				case Tr.LogicalExpression:
					Ar(e.left, t, a), Ar(e.right, t, a), e.constant = e.left.constant && e.right.constant, e.toWatch = e.constant ? [] : [e];
					break;
				case Tr.ConditionalExpression:
					Ar(e.test, t, a), Ar(e.alternate, t, a), Ar(e.consequent, t, a), e.constant = e.test.constant && e.alternate.constant && e.consequent.constant, e.toWatch = e.constant ? [] : [e];
					break;
				case Tr.Identifier:
					e.constant = !1, e.toWatch = [e];
					break;
				case Tr.MemberExpression:
					Ar(e.object, t, a), e.computed && Ar(e.property, t, a), e.constant = e.object.constant && (!e.computed || e.property.constant), e.toWatch = e.constant ? [] : [e];
					break;
				case Tr.CallExpression:
					o = !!e.filter && function(e, t) {
						return !e(t).$stateful
					}(t, e.callee.name), r = o, i = [], T(e.arguments, (function(e) {
						Ar(e, t, a), r = r && e.constant, i.push.apply(i, e.toWatch)
					})), e.constant = r, e.toWatch = o ? i : [e];
					break;
				case Tr.AssignmentExpression:
					Ar(e.left, t, a), Ar(e.right, t, a), e.constant = e.left.constant && e.right.constant, e.toWatch = [e];
					break;
				case Tr.ArrayExpression:
					r = !0, i = [], T(e.elements, (function(e) {
						Ar(e, t, a), r = r && e.constant, i.push.apply(i, e.toWatch)
					})), e.constant = r, e.toWatch = i;
					break;
				case Tr.ObjectExpression:
					r = !0, i = [], T(e.properties, (function(e) {
						Ar(e.value, t, a), r = r && e.value.constant, i.push.apply(i, e.value.toWatch), e.computed && (Ar(e.key, t, !1), r = r && e.key.constant, i.push.apply(i, e.key.toWatch))
					})), e.constant = r, e.toWatch = i;
					break;
				case Tr.ThisExpression:
				case Tr.LocalsExpression:
					e.constant = !1, e.toWatch = []
			}
		}

		function Rr(e) {
			if (1 === e.length) {
				var t = e[0].expression,
					n = t.toWatch;
				return 1 !== n.length || n[0] !== t ? n : void 0
			}
		}

		function Cr(e) {
			return e.type === Tr.Identifier || e.type === Tr.MemberExpression
		}

		function Pr(e) {
			if (1 === e.body.length && Cr(e.body[0].expression)) return {
				type: Tr.AssignmentExpression,
				left: e.body[0].expression,
				right: {
					type: Tr.NGValueParameter
				},
				operator: "="
			}
		}

		function Ir(e) {
			this.$filter = e
		}

		function Mr(e) {
			this.$filter = e
		}

		function Nr(e, t, n) {
			this.ast = new Tr(e, n), this.astCompiler = n.csp ? new Mr(t) : new Ir(t)
		}

		function kr(e) {
			return J(e.valueOf) ? e.valueOf() : yr.call(e)
		}

		function Lr() {
			var e, t, n = Fe(),
				i = {
					true: !0,
					false: !1,
					null: null,
					undefined: void 0
				};
			this.addLiteral = function(e, t) {
				i[e] = t
			}, this.setIdentifierFns = function(n, r) {
				return e = n, t = r, this
			}, this.$get = ["$filter", function(o) {
				var a = {
					csp: le().noUnsafeEval,
					literals: se(i),
					isIdentifierStart: J(e) && e,
					isIdentifierContinue: J(t) && t
				};
				return s.$$getAst = function(e) {
					return new Nr(new Sr(a), o, a).getAst(e).ast
				}, s;

				function s(e, t) {
					var i, s;
					switch (r(e)) {
						case "string":
							return e = e.trim(), (i = n[s = e]) || (i = new Nr(new Sr(a), o, a).parse(e), n[s] = d(i)), h(i, t);
						case "function":
							return h(e, t);
						default:
							return h(L, t)
					}
				}

				function u(e, t, n) {
					return null == e || null == t ? e === t : !("object" == r(e) && "object" == r(e = kr(e)) && !n) && (e === t || e != e && t != t)
				}

				function c(e, t, n, r, i) {
					var o, a = r.inputs;
					if (1 === a.length) {
						var s = u;
						return a = a[0], e.$watch((function(e) {
							var t = a(e);
							return u(t, s, a.isPure) || (o = r(e, void 0, void 0, [t]), s = t && kr(t)), o
						}), t, n, i)
					}
					for (var c = [], l = [], f = 0, p = a.length; f < p; f++) c[f] = u, l[f] = null;
					return e.$watch((function(e) {
						for (var t = !1, n = 0, i = a.length; n < i; n++) {
							var s = a[n](e);
							(t || (t = !u(s, c[n], a[n].isPure))) && (l[n] = s, c[n] = s && kr(s))
						}
						return t && (o = r(e, void 0, void 0, l)), o
					}), t, n, i)
				}

				function l(e, t, n, r, i) {
					var o, a, s = r.literal ? f : F,
						u = r.$$intercepted || r,
						c = r.$$interceptor || U,
						l = r.inputs && !u.inputs;
					return h.literal = r.literal, h.constant = r.constant, h.inputs = r.inputs, d(h), o = e.$watch(h, t, n, i);

					function p() {
						s(a) && o()
					}

					function h(e, t, n, r) {
						return a = l && r ? r[0] : u(e, t, n, r), s(a) && e.$$postDigest(p), c(a)
					}
				}

				function f(e) {
					var t = !0;
					return T(e, (function(e) {
						F(e) || (t = !1)
					})), t
				}

				function p(e, t, n, r) {
					var i = e.$watch((function(e) {
						return i(), r(e)
					}), t, n);
					return i
				}

				function d(e) {
					return e.constant ? e.$$watchDelegate = p : e.oneTime ? e.$$watchDelegate = l : e.inputs && (e.$$watchDelegate = c), e
				}

				function h(e, t) {
					if (!t) return e;
					e.$$interceptor && (t = function(e, t) {
						function n(n) {
							return t(e(n))
						}
						return n.$stateful = e.$stateful || t.$stateful, n.$$pure = e.$$pure && t.$$pure, n
					}(e.$$interceptor, t), e = e.$$intercepted);
					var n = !1,
						r = function(r, i, o, a) {
							var s = n && a ? a[0] : e(r, i, o, a);
							return t(s)
						};
					return r.$$intercepted = e, r.$$interceptor = t, r.literal = e.literal, r.oneTime = e.oneTime, r.constant = e.constant, t.$stateful || (n = !e.inputs, r.inputs = e.inputs ? e.inputs : [e], t.$$pure || (r.inputs = r.inputs.map((function(e) {
						return 2 === e.isPure ? function(t) {
							return e(t)
						} : e
					})))), d(r)
				}
			}]
		}

		function Ur() {
			var e = !0;
			this.$get = ["$rootScope", "$exceptionHandler", function(t, n) {
				return Dr((function(e) {
					t.$evalAsync(e)
				}), n, e)
			}], this.errorOnUnhandledRejections = function(t) {
				return F(t) ? (e = t, this) : e
			}
		}

		function _r() {
			var e = !0;
			this.$get = ["$browser", "$exceptionHandler", function(t, n) {
				return Dr((function(e) {
					t.defer(e)
				}), n, e)
			}], this.errorOnUnhandledRejections = function(t) {
				return F(t) ? (e = t, this) : e
			}
		}

		function Dr(e, t, n) {
			var r = o("$q", TypeError),
				i = 0,
				a = [];

			function s() {
				return new u
			}

			function u() {
				var e = this.promise = new c;
				this.resolve = function(t) {
					p(e, t)
				}, this.reject = function(t) {
					h(e, t)
				}, this.notify = function(t) {
					v(e, t)
				}
			}

			function c() {
				this.$$state = {
					status: 0
				}
			}

			function l() {
				for (; !i && a.length;) {
					var e = a.shift();
					if (!Vr(e)) {
						Fr(e);
						var n = "Possibly unhandled rejection: " + He(e.value);
						z(e.value) ? t(e.value, n) : t(n)
					}
				}
			}

			function f(r) {
				!n || r.pending || 2 !== r.status || Vr(r) || (0 === i && 0 === a.length && e(l), a.push(r)), !r.processScheduled && r.pending && (r.processScheduled = !0, ++i, e((function() {
					! function(r) {
						var o, a, s;
						s = r.pending, r.processScheduled = !1, r.pending = void 0;
						try {
							for (var u = 0, c = s.length; u < c; ++u) {
								Fr(r), a = s[u][0], o = s[u][r.status];
								try {
									J(o) ? p(a, o(r.value)) : 1 === r.status ? p(a, r.value) : h(a, r.value)
								} catch (e) {
									h(a, e), e && !0 === e.$$passToExceptionHandler && t(e)
								}
							}
						} finally {
							--i, n && 0 === i && e(l)
						}
					}(r)
				})))
			}

			function p(e, t) {
				e.$$state.status || (t === e ? $(e, r("qcycle", "Expected promise to be resolved with value other than itself '{0}'", t)) : d(e, t))
			}

			function d(e, t) {
				var n, r = !1;
				try {
					(j(t) || J(t)) && (n = t.then), J(n) ? (e.$$state.status = -1, n.call(t, (function(t) {
						r || (r = !0, d(e, t))
					}), i, (function(t) {
						v(e, t)
					}))) : (e.$$state.value = t, e.$$state.status = 1, f(e.$$state))
				} catch (e) {
					i(e)
				}

				function i(t) {
					r || (r = !0, $(e, t))
				}
			}

			function h(e, t) {
				e.$$state.status || $(e, t)
			}

			function $(e, t) {
				e.$$state.value = t, e.$$state.status = 2, f(e.$$state)
			}

			function v(n, r) {
				var i = n.$$state.pending;
				n.$$state.status <= 0 && i && i.length && e((function() {
					for (var e, n, o = 0, a = i.length; o < a; o++) {
						n = i[o][0], e = i[o][3];
						try {
							v(n, J(e) ? e(r) : r)
						} catch (e) {
							t(e)
						}
					}
				}))
			}

			function m(e) {
				var t = new c;
				return h(t, e), t
			}

			function g(e, t, n) {
				var r = null;
				try {
					J(n) && (r = n())
				} catch (e) {
					return m(e)
				}
				return X(r) ? r.then((function() {
					return t(e)
				}), m) : t(e)
			}

			function y(e, t, n, r) {
				var i = new c;
				return p(i, e), i.then(t, n, r)
			}
			P(c.prototype, {
				then: function(e, t, n) {
					if (V(e) && V(t) && V(n)) return this;
					var r = new c;
					return this.$$state.pending = this.$$state.pending || [], this.$$state.pending.push([r, e, t, n]), this.$$state.status > 0 && f(this.$$state), r
				},
				catch: function(e) {
					return this.then(null, e)
				},
				finally: function(e, t) {
					return this.then((function(t) {
						return g(t, b, e)
					}), (function(t) {
						return g(t, m, e)
					}), t)
				}
			});
			var b = y;

			function w(e) {
				if (!J(e)) throw r("norslvr", "Expected resolverFn, got '{0}'", e);
				var t = new c;
				return e((function(e) {
					p(t, e)
				}), (function(e) {
					h(t, e)
				})), t
			}
			return w.prototype = c.prototype, w.defer = s, w.reject = m, w.when = y, w.resolve = b, w.all = function(e) {
				var t = new c,
					n = 0,
					r = W(e) ? [] : {};
				return T(e, (function(e, i) {
					n++, y(e).then((function(e) {
						r[i] = e, --n || p(t, r)
					}), (function(e) {
						h(t, e)
					}))
				})), 0 === n && p(t, r), t
			}, w.race = function(e) {
				var t = s();
				return T(e, (function(e) {
					y(e).then(t.resolve, t.reject)
				})), t.promise
			}, w
		}

		function Vr(e) {
			return !!e.pur
		}

		function Fr(e) {
			e.pur = !0
		}

		function jr(e) {
			e.$$state && Fr(e.$$state)
		}

		function qr() {
			this.$get = ["$window", "$timeout", function(e, t) {
				var n = e.requestAnimationFrame || e.webkitRequestAnimationFrame,
					r = e.cancelAnimationFrame || e.webkitCancelAnimationFrame || e.webkitCancelRequestAnimationFrame,
					i = !!n,
					o = i ? function(e) {
						var t = n(e);
						return function() {
							r(t)
						}
					} : function(e) {
						var n = t(e, 16.66, !1);
						return function() {
							t.cancel(n)
						}
					};
				return o.supported = i, o
			}]
		}

		function Br() {
			var e = 10,
				t = o("$rootScope"),
				n = null,
				r = null;
			this.digestTtl = function(t) {
				return arguments.length && (e = t), e
			}, this.$get = ["$exceptionHandler", "$parse", "$browser", function(i, o, s) {
				function u(e) {
					e.currentScope.$$destroyed = !0
				}

				function c(e) {
					9 === a && (e.$$childHead && c(e.$$childHead), e.$$nextSibling && c(e.$$nextSibling)), e.$parent = e.$$nextSibling = e.$$prevSibling = e.$$childHead = e.$$childTail = e.$root = e.$$watchers = null
				}

				function l() {
					this.$id = A(), this.$$phase = this.$parent = this.$$watchers = this.$$nextSibling = this.$$prevSibling = this.$$childHead = this.$$childTail = null, this.$root = this, this.$$destroyed = !1, this.$$suspended = !1, this.$$listeners = {}, this.$$listenerCount = {}, this.$$watchersCount = 0, this.$$isolateBindings = null
				}
				l.prototype = {
					constructor: l,
					$new: function(e, t) {
						var n;
						return t = t || this, e ? (n = new l).$root = this.$root : (this.$$ChildScope || (this.$$ChildScope = function(e) {
							function t() {
								this.$$watchers = this.$$nextSibling = this.$$childHead = this.$$childTail = null, this.$$listeners = {}, this.$$listenerCount = {}, this.$$watchersCount = 0, this.$id = A(), this.$$ChildScope = null, this.$$suspended = !1
							}
							return t.prototype = e, t
						}(this)), n = new this.$$ChildScope), n.$parent = t, n.$$prevSibling = t.$$childTail, t.$$childHead ? (t.$$childTail.$$nextSibling = n, t.$$childTail = n) : t.$$childHead = t.$$childTail = n, (e || t !== this) && n.$on("$destroy", u), n
					},
					$watch: function(e, t, r, i) {
						var a = o(e),
							s = J(t) ? t : L;
						if (a.$$watchDelegate) return a.$$watchDelegate(this, s, r, a, e);
						var u = this,
							c = u.$$watchers,
							l = {
								fn: s,
								last: w,
								get: a,
								exp: i || e,
								eq: !!r
							};
						return n = null, c || ((c = u.$$watchers = []).$$digestWatchIndex = -1), c.unshift(l), c.$$digestWatchIndex++, y(this, 1),
							function() {
								var e = ae(c, l);
								e >= 0 && (y(u, -1), e < c.$$digestWatchIndex && c.$$digestWatchIndex--), n = null
							}
					},
					$watchGroup: function(e, t) {
						var n = new Array(e.length),
							r = new Array(e.length),
							i = [],
							o = this,
							a = !1,
							s = !0;
						if (!e.length) {
							var u = !0;
							return o.$evalAsync((function() {
									u && t(r, r, o)
								})),
								function() {
									u = !1
								}
						}
						if (1 === e.length) return this.$watch(e[0], (function(e, i, o) {
							r[0] = e, n[0] = i, t(r, e === i ? r : n, o)
						}));

						function c() {
							a = !1;
							try {
								s ? (s = !1, t(r, r, o)) : t(r, n, o)
							} finally {
								for (var i = 0; i < e.length; i++) n[i] = r[i]
							}
						}
						return T(e, (function(e, t) {
								var n = o.$watch(e, (function(e) {
									r[t] = e, a || (a = !0, o.$evalAsync(c))
								}));
								i.push(n)
							})),
							function() {
								for (; i.length;) i.shift()()
							}
					},
					$watchCollection: function(e, t) {
						$.$$pure = o(e).literal, $.$stateful = !$.$$pure;
						var n, r, i, a = this,
							s = t.length > 1,
							u = 0,
							c = o(e, $),
							l = [],
							f = {},
							d = !0,
							h = 0;

						function $(e) {
							var t, i, o, a;
							if (!V(n = e)) {
								if (j(n))
									if (S(n)) {
										r !== l && (h = (r = l).length = 0, u++), t = n.length, h !== t && (u++, r.length = h = t);
										for (var s = 0; s < t; s++) a = r[s], o = n[s], a != a && o != o || a === o || (u++, r[s] = o)
									} else {
										for (i in r !== f && (r = f = {}, h = 0, u++), t = 0, n) p.call(n, i) && (t++, o = n[i], a = r[i], i in r ? a != a && o != o || a === o || (u++, r[i] = o) : (h++, r[i] = o, u++));
										if (h > t)
											for (i in u++, r) p.call(n, i) || (h--, delete r[i])
									}
								else r !== n && (r = n, u++);
								return u
							}
						}
						return this.$watch(c, (function() {
							if (d ? (d = !1, t(n, n, a)) : t(n, i, a), s)
								if (j(n))
									if (S(n)) {
										i = new Array(n.length);
										for (var e = 0; e < n.length; e++) i[e] = n[e]
									} else
										for (var r in i = {}, n) p.call(n, r) && (i[r] = n[r]);
							else i = n
						}))
					},
					$digest: function() {
						var o, a, u, c, l, p, $, y, b, S = e,
							T = d.length ? f : this,
							x = [];
						m("$digest"), s.$$checkUrlChange(), this === f && null !== r && (s.defer.cancel(r), E()), n = null;
						do {
							l = !1, $ = T;
							for (var O = 0; O < d.length; O++) {
								try {
									(0, (b = d[O]).fn)(b.scope, b.locals)
								} catch (e) {
									i(e)
								}
								n = null
							}
							d.length = 0;
							e: do {
								if (c = !$.$$suspended && $.$$watchers)
									for (c.$$digestWatchIndex = c.length; c.$$digestWatchIndex--;) try {
										if (o = c[c.$$digestWatchIndex])
											if ((a = (0, o.get)($)) === (u = o.last) || (o.eq ? ce(a, u) : N(a) && N(u))) {
												if (o === n) {
													l = !1;
													break e
												}
											} else l = !0, n = o, o.last = o.eq ? se(a, null) : a, (0, o.fn)(a, u === w ? a : u, $), S < 5 && (x[y = 4 - S] || (x[y] = []), x[y].push({
												msg: J(o.exp) ? "fn: " + (o.exp.name || o.exp.toString()) : o.exp,
												newVal: a,
												oldVal: u
											}))
									} catch (e) {
										i(e)
									}
								if (!(p = !$.$$suspended && $.$$watchersCount && $.$$childHead || $ !== T && $.$$nextSibling))
									for (; $ !== T && !(p = $.$$nextSibling);) $ = $.$parent
							} while ($ = p);
							if ((l || d.length) && !S--) throw g(), t("infdig", "{0} $digest() iterations reached. Aborting!\nWatchers fired in the last 5 iterations: {1}", e, x)
						} while (l || d.length);
						for (g(); v < h.length;) try {
							h[v++]()
						} catch (e) {
							i(e)
						}
						h.length = v = 0, s.$$checkUrlChange()
					},
					$suspend: function() {
						this.$$suspended = !0
					},
					$isSuspended: function() {
						return this.$$suspended
					},
					$resume: function() {
						this.$$suspended = !1
					},
					$destroy: function() {
						if (!this.$$destroyed) {
							var e = this.$parent;
							for (var t in this.$broadcast("$destroy"), this.$$destroyed = !0, this === f && s.$$applicationDestroyed(), y(this, -this.$$watchersCount), this.$$listenerCount) b(this, this.$$listenerCount[t], t);
							e && e.$$childHead === this && (e.$$childHead = this.$$nextSibling), e && e.$$childTail === this && (e.$$childTail = this.$$prevSibling), this.$$prevSibling && (this.$$prevSibling.$$nextSibling = this.$$nextSibling), this.$$nextSibling && (this.$$nextSibling.$$prevSibling = this.$$prevSibling), this.$destroy = this.$digest = this.$apply = this.$evalAsync = this.$applyAsync = L, this.$on = this.$watch = this.$watchGroup = function() {
								return L
							}, this.$$listeners = {}, this.$$nextSibling = null, c(this)
						}
					},
					$eval: function(e, t) {
						return o(e)(this, t)
					},
					$evalAsync: function(e, t) {
						f.$$phase || d.length || s.defer((function() {
							d.length && f.$digest()
						}), null, "$evalAsync"), d.push({
							scope: this,
							fn: o(e),
							locals: t
						})
					},
					$$postDigest: function(e) {
						h.push(e)
					},
					$apply: function(e) {
						try {
							m("$apply");
							try {
								return this.$eval(e)
							} finally {
								g()
							}
						} catch (e) {
							i(e)
						} finally {
							try {
								f.$digest()
							} catch (e) {
								throw i(e), e
							}
						}
					},
					$applyAsync: function(e) {
						var t = this;
						e && $.push((function() {
							t.$eval(e)
						})), e = o(e), null === r && (r = s.defer((function() {
							f.$apply(E)
						}), null, "$applyAsync"))
					},
					$on: function(e, t) {
						var n = this.$$listeners[e];
						n || (this.$$listeners[e] = n = []), n.push(t);
						var r = this;
						do {
							r.$$listenerCount[e] || (r.$$listenerCount[e] = 0), r.$$listenerCount[e]++
						} while (r = r.$parent);
						var i = this;
						return function() {
							var r = n.indexOf(t); - 1 !== r && (delete n[r], b(i, 1, e))
						}
					},
					$emit: function(e, t) {
						var n, r, o, a = [],
							s = this,
							u = !1,
							c = {
								name: e,
								targetScope: s,
								stopPropagation: function() {
									u = !0
								},
								preventDefault: function() {
									c.defaultPrevented = !0
								},
								defaultPrevented: !1
							},
							l = pe([c], arguments, 1);
						do {
							for (n = s.$$listeners[e] || a, c.currentScope = s, r = 0, o = n.length; r < o; r++)
								if (n[r]) try {
									n[r].apply(null, l)
								} catch (e) {
									i(e)
								} else n.splice(r, 1), r--, o--;
							if (u) break;
							s = s.$parent
						} while (s);
						return c.currentScope = null, c
					},
					$broadcast: function(e, t) {
						var n = this,
							r = n,
							o = n,
							a = {
								name: e,
								targetScope: n,
								preventDefault: function() {
									a.defaultPrevented = !0
								},
								defaultPrevented: !1
							};
						if (!n.$$listenerCount[e]) return a;
						for (var s, u, c, l = pe([a], arguments, 1); r = o;) {
							for (a.currentScope = r, u = 0, c = (s = r.$$listeners[e] || []).length; u < c; u++)
								if (s[u]) try {
									s[u].apply(null, l)
								} catch (e) {
									i(e)
								} else s.splice(u, 1), u--, c--;
							if (!(o = r.$$listenerCount[e] && r.$$childHead || r !== n && r.$$nextSibling))
								for (; r !== n && !(o = r.$$nextSibling);) r = r.$parent
						}
						return a.currentScope = null, a
					}
				};
				var f = new l,
					d = f.$$asyncQueue = [],
					h = f.$$postDigestQueue = [],
					$ = f.$$applyAsyncQueue = [],
					v = 0;
				return f;

				function m(e) {
					if (f.$$phase) throw t("inprog", "{0} already in progress", f.$$phase);
					f.$$phase = e
				}

				function g() {
					f.$$phase = null
				}

				function y(e, t) {
					do {
						e.$$watchersCount += t
					} while (e = e.$parent)
				}

				function b(e, t, n) {
					do {
						e.$$listenerCount[n] -= t, 0 === e.$$listenerCount[n] && delete e.$$listenerCount[n]
					} while (e = e.$parent)
				}

				function w() {}

				function E() {
					for (; $.length;) try {
						$.shift()()
					} catch (e) {
						i(e)
					}
					r = null
				}
			}]
		}

		function Hr() {
			var e = /^\s*(https?|s?ftp|mailto|tel|file):/,
				t = /^\s*((https?|ftp|file|blob):|data:image\/)/;
			this.aHrefSanitizationTrustedUrlList = function(t) {
				return F(t) ? (e = t, this) : e
			}, this.imgSrcSanitizationTrustedUrlList = function(e) {
				return F(e) ? (t = e, this) : t
			}, this.$get = function() {
				return function(n, r) {
					var i = r ? t : e,
						o = li(n && n.trim()).href;
					return "" === o || o.match(i) ? n : "unsafe:" + o
				}
			}
		}
		Ir.prototype = {
			compile: function(e) {
				var t = this;
				this.state = {
					nextId: 0,
					filters: {},
					fn: {
						vars: [],
						body: [],
						own: {}
					},
					assign: {
						vars: [],
						body: [],
						own: {}
					},
					inputs: []
				}, Ar(e, t.$filter);
				var n, r = "";
				if (this.stage = "assign", n = Pr(e)) {
					this.state.computing = "assign";
					var i = this.nextId();
					this.recurse(n, i), this.return_(i), r = "fn.assign=" + this.generateFunction("assign", "s,v,l")
				}
				var o = Rr(e.body);
				t.stage = "inputs", T(o, (function(e, n) {
					var r = "fn" + n;
					t.state[r] = {
						vars: [],
						body: [],
						own: {}
					}, t.state.computing = r;
					var i = t.nextId();
					t.recurse(e, i), t.return_(i), t.state.inputs.push({
						name: r,
						isPure: e.isPure
					}), e.watchId = n
				})), this.state.computing = "fn", this.stage = "main", this.recurse(e);
				var a = '"' + this.USE + " " + this.STRICT + '";\n' + this.filterPrefix() + "var fn=" + this.generateFunction("fn", "s,l,a,i") + r + this.watchFns() + "return fn;",
					s = new Function("$filter", "getStringValue", "ifDefined", "plus", a)(this.$filter, br, xr, Or);
				return this.state = this.stage = void 0, s
			},
			USE: "use",
			STRICT: "strict",
			watchFns: function() {
				var e = [],
					t = this.state.inputs,
					n = this;
				return T(t, (function(t) {
					e.push("var " + t.name + "=" + n.generateFunction(t.name, "s")), t.isPure && e.push(t.name, ".isPure=" + JSON.stringify(t.isPure) + ";")
				})), t.length && e.push("fn.inputs=[" + t.map((function(e) {
					return e.name
				})).join(",") + "];"), e.join("")
			},
			generateFunction: function(e, t) {
				return "function(" + t + "){" + this.varsPrefix(e) + this.body(e) + "};"
			},
			filterPrefix: function() {
				var e = [],
					t = this;
				return T(this.state.filters, (function(n, r) {
					e.push(n + "=$filter(" + t.escape(r) + ")")
				})), e.length ? "var " + e.join(",") + ";" : ""
			},
			varsPrefix: function(e) {
				return this.state[e].vars.length ? "var " + this.state[e].vars.join(",") + ";" : ""
			},
			body: function(e) {
				return this.state[e].body.join("")
			},
			recurse: function(e, t, n, r, i, o) {
				var a, s, u, c, l, f = this;
				if (r = r || L, !o && F(e.watchId)) return t = t || this.nextId(), void this.if_("i", this.lazyAssign(t, this.computedMember("i", e.watchId)), this.lazyRecurse(e, t, n, r, i, !0));
				switch (e.type) {
					case Tr.Program:
						T(e.body, (function(t, n) {
							f.recurse(t.expression, void 0, void 0, (function(e) {
								s = e
							})), n !== e.body.length - 1 ? f.current().body.push(s, ";") : f.return_(s)
						}));
						break;
					case Tr.Literal:
						c = this.escape(e.value), this.assign(t, c), r(t || c);
						break;
					case Tr.UnaryExpression:
						this.recurse(e.argument, void 0, void 0, (function(e) {
							s = e
						})), c = e.operator + "(" + this.ifDefined(s, 0) + ")", this.assign(t, c), r(c);
						break;
					case Tr.BinaryExpression:
						this.recurse(e.left, void 0, void 0, (function(e) {
							a = e
						})), this.recurse(e.right, void 0, void 0, (function(e) {
							s = e
						})), c = "+" === e.operator ? this.plus(a, s) : "-" === e.operator ? this.ifDefined(a, 0) + e.operator + this.ifDefined(s, 0) : "(" + a + ")" + e.operator + "(" + s + ")", this.assign(t, c), r(c);
						break;
					case Tr.LogicalExpression:
						t = t || this.nextId(), f.recurse(e.left, t), f.if_("&&" === e.operator ? t : f.not(t), f.lazyRecurse(e.right, t)), r(t);
						break;
					case Tr.ConditionalExpression:
						t = t || this.nextId(), f.recurse(e.test, t), f.if_(t, f.lazyRecurse(e.alternate, t), f.lazyRecurse(e.consequent, t)), r(t);
						break;
					case Tr.Identifier:
						t = t || this.nextId(), n && (n.context = "inputs" === f.stage ? "s" : this.assign(this.nextId(), this.getHasOwnProperty("l", e.name) + "?l:s"), n.computed = !1, n.name = e.name), f.if_("inputs" === f.stage || f.not(f.getHasOwnProperty("l", e.name)), (function() {
							f.if_("inputs" === f.stage || "s", (function() {
								i && 1 !== i && f.if_(f.isNull(f.nonComputedMember("s", e.name)), f.lazyAssign(f.nonComputedMember("s", e.name), "{}")), f.assign(t, f.nonComputedMember("s", e.name))
							}))
						}), t && f.lazyAssign(t, f.nonComputedMember("l", e.name))), r(t);
						break;
					case Tr.MemberExpression:
						a = n && (n.context = this.nextId()) || this.nextId(), t = t || this.nextId(), f.recurse(e.object, a, void 0, (function() {
							f.if_(f.notNull(a), (function() {
								e.computed ? (s = f.nextId(), f.recurse(e.property, s), f.getStringValue(s), i && 1 !== i && f.if_(f.not(f.computedMember(a, s)), f.lazyAssign(f.computedMember(a, s), "{}")), c = f.computedMember(a, s), f.assign(t, c), n && (n.computed = !0, n.name = s)) : (i && 1 !== i && f.if_(f.isNull(f.nonComputedMember(a, e.property.name)), f.lazyAssign(f.nonComputedMember(a, e.property.name), "{}")), c = f.nonComputedMember(a, e.property.name), f.assign(t, c), n && (n.computed = !1, n.name = e.property.name))
							}), (function() {
								f.assign(t, "undefined")
							})), r(t)
						}), !!i);
						break;
					case Tr.CallExpression:
						t = t || this.nextId(), e.filter ? (s = f.filter(e.callee.name), u = [], T(e.arguments, (function(e) {
							var t = f.nextId();
							f.recurse(e, t), u.push(t)
						})), c = s + "(" + u.join(",") + ")", f.assign(t, c), r(t)) : (s = f.nextId(), a = {}, u = [], f.recurse(e.callee, s, a, (function() {
							f.if_(f.notNull(s), (function() {
								T(e.arguments, (function(t) {
									f.recurse(t, e.constant ? void 0 : f.nextId(), void 0, (function(e) {
										u.push(e)
									}))
								})), c = a.name ? f.member(a.context, a.name, a.computed) + "(" + u.join(",") + ")" : s + "(" + u.join(",") + ")", f.assign(t, c)
							}), (function() {
								f.assign(t, "undefined")
							})), r(t)
						})));
						break;
					case Tr.AssignmentExpression:
						s = this.nextId(), a = {}, this.recurse(e.left, void 0, a, (function() {
							f.if_(f.notNull(a.context), (function() {
								f.recurse(e.right, s), c = f.member(a.context, a.name, a.computed) + e.operator + s, f.assign(t, c), r(t || c)
							}))
						}), 1);
						break;
					case Tr.ArrayExpression:
						u = [], T(e.elements, (function(t) {
							f.recurse(t, e.constant ? void 0 : f.nextId(), void 0, (function(e) {
								u.push(e)
							}))
						})), c = "[" + u.join(",") + "]", this.assign(t, c), r(t || c);
						break;
					case Tr.ObjectExpression:
						u = [], l = !1, T(e.properties, (function(e) {
							e.computed && (l = !0)
						})), l ? (t = t || this.nextId(), this.assign(t, "{}"), T(e.properties, (function(e) {
							e.computed ? (a = f.nextId(), f.recurse(e.key, a)) : a = e.key.type === Tr.Identifier ? e.key.name : "" + e.key.value, s = f.nextId(), f.recurse(e.value, s), f.assign(f.member(t, a, e.computed), s)
						}))) : (T(e.properties, (function(t) {
							f.recurse(t.value, e.constant ? void 0 : f.nextId(), void 0, (function(e) {
								u.push(f.escape(t.key.type === Tr.Identifier ? t.key.name : "" + t.key.value) + ":" + e)
							}))
						})), c = "{" + u.join(",") + "}", this.assign(t, c)), r(t || c);
						break;
					case Tr.ThisExpression:
						this.assign(t, "s"), r(t || "s");
						break;
					case Tr.LocalsExpression:
						this.assign(t, "l"), r(t || "l");
						break;
					case Tr.NGValueParameter:
						this.assign(t, "v"), r(t || "v")
				}
			},
			getHasOwnProperty: function(e, t) {
				var n = e + "." + t,
					r = this.current().own;
				return r.hasOwnProperty(n) || (r[n] = this.nextId(!1, e + "&&(" + this.escape(t) + " in " + e + ")")), r[n]
			},
			assign: function(e, t) {
				if (e) return this.current().body.push(e, "=", t, ";"), e
			},
			filter: function(e) {
				return this.state.filters.hasOwnProperty(e) || (this.state.filters[e] = this.nextId(!0)), this.state.filters[e]
			},
			ifDefined: function(e, t) {
				return "ifDefined(" + e + "," + this.escape(t) + ")"
			},
			plus: function(e, t) {
				return "plus(" + e + "," + t + ")"
			},
			return_: function(e) {
				this.current().body.push("return ", e, ";")
			},
			if_: function(e, t, n) {
				if (!0 === e) t();
				else {
					var r = this.current().body;
					r.push("if(", e, "){"), t(), r.push("}"), n && (r.push("else{"), n(), r.push("}"))
				}
			},
			not: function(e) {
				return "!(" + e + ")"
			},
			isNull: function(e) {
				return e + "==null"
			},
			notNull: function(e) {
				return e + "!=null"
			},
			nonComputedMember: function(e, t) {
				return /^[$_a-zA-Z][$_a-zA-Z0-9]*$/.test(t) ? e + "." + t : e + '["' + t.replace(/[^$_a-zA-Z0-9]/g, this.stringEscapeFn) + '"]'
			},
			computedMember: function(e, t) {
				return e + "[" + t + "]"
			},
			member: function(e, t, n) {
				return n ? this.computedMember(e, t) : this.nonComputedMember(e, t)
			},
			getStringValue: function(e) {
				this.assign(e, "getStringValue(" + e + ")")
			},
			lazyRecurse: function(e, t, n, r, i, o) {
				var a = this;
				return function() {
					a.recurse(e, t, n, r, i, o)
				}
			},
			lazyAssign: function(e, t) {
				var n = this;
				return function() {
					n.assign(e, t)
				}
			},
			stringEscapeRegex: /[^ a-zA-Z0-9]/g,
			stringEscapeFn: function(e) {
				return "\\u" + ("0000" + e.charCodeAt(0).toString(16)).slice(-4)
			},
			escape: function(e) {
				if (B(e)) return "'" + e.replace(this.stringEscapeRegex, this.stringEscapeFn) + "'";
				if (H(e)) return e.toString();
				if (!0 === e) return "true";
				if (!1 === e) return "false";
				if (null === e) return "null";
				if (void 0 === e) return "undefined";
				throw gr("esc", "IMPOSSIBLE")
			},
			nextId: function(e, t) {
				var n = "v" + this.state.nextId++;
				return e || this.current().vars.push(n + (t ? "=" + t : "")), n
			},
			current: function() {
				return this.state[this.state.computing]
			}
		}, Mr.prototype = {
			compile: function(e) {
				var t, n, r = this;
				Ar(e, r.$filter), (t = Pr(e)) && (n = this.recurse(t));
				var i, o = Rr(e.body);
				o && (i = [], T(o, (function(e, t) {
					var n = r.recurse(e);
					n.isPure = e.isPure, e.input = n, i.push(n), e.watchId = t
				})));
				var a = [];
				T(e.body, (function(e) {
					a.push(r.recurse(e.expression))
				}));
				var s = 0 === e.body.length ? L : 1 === e.body.length ? a[0] : function(e, t) {
					var n;
					return T(a, (function(r) {
						n = r(e, t)
					})), n
				};
				return n && (s.assign = function(e, t, r) {
					return n(e, r, t)
				}), i && (s.inputs = i), s
			},
			recurse: function(e, t, n) {
				var r, i, o, a = this;
				if (e.input) return this.inputs(e.input, e.watchId);
				switch (e.type) {
					case Tr.Literal:
						return this.value(e.value, t);
					case Tr.UnaryExpression:
						return i = this.recurse(e.argument), this["unary" + e.operator](i, t);
					case Tr.BinaryExpression:
					case Tr.LogicalExpression:
						return r = this.recurse(e.left), i = this.recurse(e.right), this["binary" + e.operator](r, i, t);
					case Tr.ConditionalExpression:
						return this["ternary?:"](this.recurse(e.test), this.recurse(e.alternate), this.recurse(e.consequent), t);
					case Tr.Identifier:
						return a.identifier(e.name, t, n);
					case Tr.MemberExpression:
						return r = this.recurse(e.object, !1, !!n), e.computed || (i = e.property.name), e.computed && (i = this.recurse(e.property)), e.computed ? this.computedMember(r, i, t, n) : this.nonComputedMember(r, i, t, n);
					case Tr.CallExpression:
						return o = [], T(e.arguments, (function(e) {
							o.push(a.recurse(e))
						})), e.filter && (i = this.$filter(e.callee.name)), e.filter || (i = this.recurse(e.callee, !0)), e.filter ? function(e, n, r, a) {
							for (var s = [], u = 0; u < o.length; ++u) s.push(o[u](e, n, r, a));
							var c = i.apply(void 0, s, a);
							return t ? {
								context: void 0,
								name: void 0,
								value: c
							} : c
						} : function(e, n, r, a) {
							var s, u = i(e, n, r, a);
							if (null != u.value) {
								for (var c = [], l = 0; l < o.length; ++l) c.push(o[l](e, n, r, a));
								s = u.value.apply(u.context, c)
							}
							return t ? {
								value: s
							} : s
						};
					case Tr.AssignmentExpression:
						return r = this.recurse(e.left, !0, 1), i = this.recurse(e.right),
							function(e, n, o, a) {
								var s = r(e, n, o, a),
									u = i(e, n, o, a);
								return s.context[s.name] = u, t ? {
									value: u
								} : u
							};
					case Tr.ArrayExpression:
						return o = [], T(e.elements, (function(e) {
								o.push(a.recurse(e))
							})),
							function(e, n, r, i) {
								for (var a = [], s = 0; s < o.length; ++s) a.push(o[s](e, n, r, i));
								return t ? {
									value: a
								} : a
							};
					case Tr.ObjectExpression:
						return o = [], T(e.properties, (function(e) {
								e.computed ? o.push({
									key: a.recurse(e.key),
									computed: !0,
									value: a.recurse(e.value)
								}) : o.push({
									key: e.key.type === Tr.Identifier ? e.key.name : "" + e.key.value,
									computed: !1,
									value: a.recurse(e.value)
								})
							})),
							function(e, n, r, i) {
								for (var a = {}, s = 0; s < o.length; ++s) o[s].computed ? a[o[s].key(e, n, r, i)] = o[s].value(e, n, r, i) : a[o[s].key] = o[s].value(e, n, r, i);
								return t ? {
									value: a
								} : a
							};
					case Tr.ThisExpression:
						return function(e) {
							return t ? {
								value: e
							} : e
						};
					case Tr.LocalsExpression:
						return function(e, n) {
							return t ? {
								value: n
							} : n
						};
					case Tr.NGValueParameter:
						return function(e, n, r) {
							return t ? {
								value: r
							} : r
						}
				}
			},
			"unary+": function(e, t) {
				return function(n, r, i, o) {
					var a = e(n, r, i, o);
					return a = F(a) ? +a : 0, t ? {
						value: a
					} : a
				}
			},
			"unary-": function(e, t) {
				return function(n, r, i, o) {
					var a = e(n, r, i, o);
					return a = F(a) ? -a : -0, t ? {
						value: a
					} : a
				}
			},
			"unary!": function(e, t) {
				return function(n, r, i, o) {
					var a = !e(n, r, i, o);
					return t ? {
						value: a
					} : a
				}
			},
			"binary+": function(e, t, n) {
				return function(r, i, o, a) {
					var s = Or(e(r, i, o, a), t(r, i, o, a));
					return n ? {
						value: s
					} : s
				}
			},
			"binary-": function(e, t, n) {
				return function(r, i, o, a) {
					var s = e(r, i, o, a),
						u = t(r, i, o, a),
						c = (F(s) ? s : 0) - (F(u) ? u : 0);
					return n ? {
						value: c
					} : c
				}
			},
			"binary*": function(e, t, n) {
				return function(r, i, o, a) {
					var s = e(r, i, o, a) * t(r, i, o, a);
					return n ? {
						value: s
					} : s
				}
			},
			"binary/": function(e, t, n) {
				return function(r, i, o, a) {
					var s = e(r, i, o, a) / t(r, i, o, a);
					return n ? {
						value: s
					} : s
				}
			},
			"binary%": function(e, t, n) {
				return function(r, i, o, a) {
					var s = e(r, i, o, a) % t(r, i, o, a);
					return n ? {
						value: s
					} : s
				}
			},
			"binary===": function(e, t, n) {
				return function(r, i, o, a) {
					var s = e(r, i, o, a) === t(r, i, o, a);
					return n ? {
						value: s
					} : s
				}
			},
			"binary!==": function(e, t, n) {
				return function(r, i, o, a) {
					var s = e(r, i, o, a) !== t(r, i, o, a);
					return n ? {
						value: s
					} : s
				}
			},
			"binary==": function(e, t, n) {
				return function(r, i, o, a) {
					var s = e(r, i, o, a) == t(r, i, o, a);
					return n ? {
						value: s
					} : s
				}
			},
			"binary!=": function(e, t, n) {
				return function(r, i, o, a) {
					var s = e(r, i, o, a) != t(r, i, o, a);
					return n ? {
						value: s
					} : s
				}
			},
			"binary<": function(e, t, n) {
				return function(r, i, o, a) {
					var s = e(r, i, o, a) < t(r, i, o, a);
					return n ? {
						value: s
					} : s
				}
			},
			"binary>": function(e, t, n) {
				return function(r, i, o, a) {
					var s = e(r, i, o, a) > t(r, i, o, a);
					return n ? {
						value: s
					} : s
				}
			},
			"binary<=": function(e, t, n) {
				return function(r, i, o, a) {
					var s = e(r, i, o, a) <= t(r, i, o, a);
					return n ? {
						value: s
					} : s
				}
			},
			"binary>=": function(e, t, n) {
				return function(r, i, o, a) {
					var s = e(r, i, o, a) >= t(r, i, o, a);
					return n ? {
						value: s
					} : s
				}
			},
			"binary&&": function(e, t, n) {
				return function(r, i, o, a) {
					var s = e(r, i, o, a) && t(r, i, o, a);
					return n ? {
						value: s
					} : s
				}
			},
			"binary||": function(e, t, n) {
				return function(r, i, o, a) {
					var s = e(r, i, o, a) || t(r, i, o, a);
					return n ? {
						value: s
					} : s
				}
			},
			"ternary?:": function(e, t, n, r) {
				return function(i, o, a, s) {
					var u = e(i, o, a, s) ? t(i, o, a, s) : n(i, o, a, s);
					return r ? {
						value: u
					} : u
				}
			},
			value: function(e, t) {
				return function() {
					return t ? {
						context: void 0,
						name: void 0,
						value: e
					} : e
				}
			},
			identifier: function(e, t, n) {
				return function(r, i, o, a) {
					var s = i && e in i ? i : r;
					n && 1 !== n && s && null == s[e] && (s[e] = {});
					var u = s ? s[e] : void 0;
					return t ? {
						context: s,
						name: e,
						value: u
					} : u
				}
			},
			computedMember: function(e, t, n, r) {
				return function(i, o, a, s) {
					var u, c, l = e(i, o, a, s);
					return null != l && (u = br(u = t(i, o, a, s)), r && 1 !== r && l && !l[u] && (l[u] = {}), c = l[u]), n ? {
						context: l,
						name: u,
						value: c
					} : c
				}
			},
			nonComputedMember: function(e, t, n, r) {
				return function(i, o, a, s) {
					var u = e(i, o, a, s);
					r && 1 !== r && u && null == u[t] && (u[t] = {});
					var c = null != u ? u[t] : void 0;
					return n ? {
						context: u,
						name: t,
						value: c
					} : c
				}
			},
			inputs: function(e, t) {
				return function(n, r, i, o) {
					return o ? o[t] : e(n, r, i)
				}
			}
		}, Nr.prototype = {
			constructor: Nr,
			parse: function(e) {
				var t = this.getAst(e),
					n = this.astCompiler.compile(t.ast);
				return n.literal = function(e) {
					return 0 === e.body.length || 1 === e.body.length && (e.body[0].expression.type === Tr.Literal || e.body[0].expression.type === Tr.ArrayExpression || e.body[0].expression.type === Tr.ObjectExpression)
				}(t.ast), n.constant = function(e) {
					return e.constant
				}(t.ast), n.oneTime = t.oneTime, n
			},
			getAst: function(e) {
				var t = !1;
				return ":" === (e = e.trim()).charAt(0) && ":" === e.charAt(1) && (t = !0, e = e.substring(2)), {
					ast: this.ast.ast(e),
					oneTime: t
				}
			}
		};
		var Gr = o("$sce"),
			Wr = {
				HTML: "html",
				CSS: "css",
				MEDIA_URL: "mediaUrl",
				URL: "url",
				RESOURCE_URL: "resourceUrl",
				JS: "js"
			},
			zr = /_([a-z])/g;

		function Jr(e) {
			return e.replace(zr, Ze)
		}

		function Yr(e) {
			var t = [];
			return F(e) && T(e, (function(e) {
				t.push(function(e) {
					if ("self" === e) return e;
					if (B(e)) {
						if (e.indexOf("***") > -1) throw Gr("iwcard", "Illegal sequence *** in string matcher.  String: {0}", e);
						return e = ne(e).replace(/\\\*\\\*/g, ".*").replace(/\\\*/g, "[^:/.?&;]*"), new RegExp("^" + e + "$")
					}
					if (Y(e)) return new RegExp("^" + e.source + "$");
					throw Gr("imatcher", 'Matchers may only be "self", string patterns or RegExp objects')
				}(e))
			})), t
		}

		function Qr() {
			this.SCE_CONTEXTS = Wr;
			var t = ["self"],
				n = [];
			this.trustedResourceUrlList = function(e) {
				return arguments.length && (t = Yr(e)), t
			}, Object.defineProperty(this, "resourceUrlWhitelist", {
				get: function() {
					return this.trustedResourceUrlList
				},
				set: function(e) {
					this.trustedResourceUrlList = e
				}
			}), this.bannedResourceUrlList = function(e) {
				return arguments.length && (n = Yr(e)), n
			}, Object.defineProperty(this, "resourceUrlBlacklist", {
				get: function() {
					return this.bannedResourceUrlList
				},
				set: function(e) {
					this.bannedResourceUrlList = e
				}
			}), this.$get = ["$injector", "$$sanitizeUri", function(r, i) {
				var o = function(e) {
					throw Gr("unsafe", "Attempting to use an unsafe value in a safe context.")
				};

				function a(t, n) {
					return "self" === t ? fi(n, ui) || function(t) {
						return fi(t, e.document.baseURI ? e.document.baseURI : (ai || ((ai = e.document.createElement("a")).href = ".", ai = ai.cloneNode(!1)), ai.href))
					}(n) : !!t.exec(n.href)
				}

				function s(e) {
					var t = function(e) {
						this.$$unwrapTrustedValue = function() {
							return e
						}
					};
					return e && (t.prototype = new e), t.prototype.valueOf = function() {
						return this.$$unwrapTrustedValue()
					}, t.prototype.toString = function() {
						return this.$$unwrapTrustedValue().toString()
					}, t
				}
				r.has("$sanitize") && (o = r.get("$sanitize"));
				var u = s(),
					c = {};
				return c[Wr.HTML] = s(u), c[Wr.CSS] = s(u), c[Wr.MEDIA_URL] = s(u), c[Wr.URL] = s(c[Wr.MEDIA_URL]), c[Wr.JS] = s(u), c[Wr.RESOURCE_URL] = s(c[Wr.URL]), {
					trustAs: function(e, t) {
						var n = c.hasOwnProperty(e) ? c[e] : null;
						if (!n) throw Gr("icontext", "Attempted to trust a value in invalid context. Context: {0}; Value: {1}", e, t);
						if (null === t || V(t) || "" === t) return t;
						if ("string" != typeof t) throw Gr("itype", "Attempted to trust a non-string value in a content requiring a string: Context: {0}", e);
						return new n(t)
					},
					getTrusted: function(e, r) {
						if (null === r || V(r) || "" === r) return r;
						var s = c.hasOwnProperty(e) ? c[e] : null;
						if (s && r instanceof s) return r.$$unwrapTrustedValue();
						if (J(r.$$unwrapTrustedValue) && (r = r.$$unwrapTrustedValue()), e === Wr.MEDIA_URL || e === Wr.URL) return i(r.toString(), e === Wr.MEDIA_URL);
						if (e === Wr.RESOURCE_URL) {
							if (function(e) {
									var r, i, o = li(e.toString()),
										s = !1;
									for (r = 0, i = t.length; r < i; r++)
										if (a(t[r], o)) {
											s = !0;
											break
										} if (s)
										for (r = 0, i = n.length; r < i; r++)
											if (a(n[r], o)) {
												s = !1;
												break
											} return s
								}(r)) return r;
							throw Gr("insecurl", "Blocked loading resource from url not allowed by $sceDelegate policy.  URL: {0}", r.toString())
						}
						if (e === Wr.HTML) return o(r);
						throw Gr("unsafe", "Attempting to use an unsafe value in a safe context.")
					},
					valueOf: function(e) {
						return e instanceof u ? e.$$unwrapTrustedValue() : e
					}
				}
			}]
		}

		function Kr() {
			var e = !0;
			this.enabled = function(t) {
				return arguments.length && (e = !!t), e
			}, this.$get = ["$parse", "$sceDelegate", function(t, n) {
				if (e && a < 8) throw Gr("iequirks", "Strict Contextual Escaping does not support Internet Explorer version < 11 in quirks mode.  You can fix this by adding the text <!doctype html> to the top of your HTML document.  See http://docs.angularjs.org/api/ng.$sce for more information.");
				var r = Be(Wr);
				r.isEnabled = function() {
					return e
				}, r.trustAs = n.trustAs, r.getTrusted = n.getTrusted, r.valueOf = n.valueOf, e || (r.trustAs = r.getTrusted = function(e, t) {
					return t
				}, r.valueOf = U), r.parseAs = function(e, n) {
					var i = t(n);
					return i.literal && i.constant ? i : t(n, (function(t) {
						return r.getTrusted(e, t)
					}))
				};
				var i = r.parseAs,
					o = r.getTrusted,
					s = r.trustAs;
				return T(Wr, (function(e, t) {
					var n = d(t);
					r[Jr("parse_as_" + n)] = function(t) {
						return i(e, t)
					}, r[Jr("get_trusted_" + n)] = function(t) {
						return o(e, t)
					}, r[Jr("trust_as_" + n)] = function(t) {
						return s(e, t)
					}
				})), r
			}]
		}

		function Zr() {
			this.$get = ["$window", "$document", function(e, t) {
				var n = {},
					r = !((!e.nw || !e.nw.process) && e.chrome && (e.chrome.app && e.chrome.app.runtime || !e.chrome.app && e.chrome.runtime && e.chrome.runtime.id)) && e.history && e.history.pushState,
					i = M((/android (\d+)/.exec(d((e.navigator || {}).userAgent)) || [])[1]),
					o = /Boxee/i.test((e.navigator || {}).userAgent),
					s = t[0] || {},
					u = s.body && s.body.style,
					c = !1,
					l = !1;
				return u && (c = !(!("transition" in u) && !("webkitTransition" in u)), l = !(!("animation" in u) && !("webkitAnimation" in u))), {
					history: !(!r || i < 4 || o),
					hasEvent: function(e) {
						if ("input" === e && a) return !1;
						if (V(n[e])) {
							var t = s.createElement("div");
							n[e] = "on" + e in t
						}
						return n[e]
					},
					csp: le(),
					transitions: c,
					animations: l,
					android: i
				}
			}]
		}

		function Xr() {
			this.$get = _((function(e) {
				return new ei(e)
			}))
		}

		function ei(e) {
			var t = this,
				n = {},
				r = [],
				i = t.ALL_TASKS_TYPE = "$$all$$",
				o = t.DEFAULT_TASK_TYPE = "$$default$$";

			function a() {
				var e = r.pop();
				return e && e.cb
			}

			function s(e) {
				for (var t = r.length - 1; t >= 0; --t) {
					var n = r[t];
					if (n.type === e) return r.splice(t, 1), n.cb
				}
			}
			t.completeTask = function(t, r) {
				r = r || o;
				try {
					t()
				} finally {
					! function(e) {
						n[e = e || o] && (n[e]--, n[i]--)
					}(r);
					var u = n[r],
						c = n[i];
					if (!c || !u)
						for (var l, f = c ? s : a; l = f(r);) try {
							l()
						} catch (t) {
							e.error(t)
						}
				}
			}, t.incTaskCount = function(e) {
				n[e = e || o] = (n[e] || 0) + 1, n[i] = (n[i] || 0) + 1
			}, t.notifyWhenNoPendingTasks = function(e, t) {
				n[t = t || i] ? r.push({
					type: t,
					cb: e
				}) : e()
			}
		}
		var ti = o("$templateRequest");

		function ni() {
			var e;
			this.httpOptions = function(t) {
				return t ? (e = t, this) : e
			}, this.$get = ["$exceptionHandler", "$templateCache", "$http", "$q", "$sce", function(t, n, r, i, o) {
				function a(s, u) {
					a.totalPendingRequests++, B(s) && !V(n.get(s)) || (s = o.getTrustedResourceUrl(s));
					var c = r.defaults && r.defaults.transformResponse;
					return W(c) ? c = c.filter((function(e) {
						return e !== jn
					})) : c === jn && (c = null), r.get(s, P({
						cache: n,
						transformResponse: c
					}, e)).finally((function() {
						a.totalPendingRequests--
					})).then((function(e) {
						return n.put(s, e.data)
					}), (function(e) {
						return u || (e = ti("tpload", "Failed to load template: {0} (HTTP status: {1} {2})", s, e.status, e.statusText), t(e)), i.reject(e)
					}))
				}
				return a.totalPendingRequests = 0, a
			}]
		}

		function ri() {
			this.$get = ["$rootScope", "$browser", "$location", function(e, t, n) {
				var r = {
					findBindings: function(e, t, n) {
						var r = e.getElementsByClassName("ng-binding"),
							i = [];
						return T(r, (function(e) {
							var r = w.element(e).data("$binding");
							r && T(r, (function(r) {
								n ? new RegExp("(^|\\s)" + ne(t) + "(\\s|\\||$)").test(r) && i.push(e) : -1 !== r.indexOf(t) && i.push(e)
							}))
						})), i
					},
					findModels: function(e, t, n) {
						for (var r = ["ng-", "data-ng-", "ng\\:"], i = 0; i < r.length; ++i) {
							var o = "[" + r[i] + "model" + (n ? "=" : "*=") + '"' + t + '"]',
								a = e.querySelectorAll(o);
							if (a.length) return a
						}
					},
					getLocation: function() {
						return n.url()
					},
					setLocation: function(t) {
						t !== n.url() && (n.url(t), e.$digest())
					},
					whenStable: function(e) {
						t.notifyWhenNoOutstandingRequests(e)
					}
				};
				return r
			}]
		}
		var ii = o("$timeout");

		function oi() {
			this.$get = ["$rootScope", "$browser", "$q", "$$q", "$exceptionHandler", function(e, t, n, r, i) {
				var o = {};

				function a(a, s, u) {
					J(a) || (u = s, s = a, a = L);
					var c, l = de(arguments, 3),
						f = F(u) && !u,
						p = (f ? r : n).defer(),
						d = p.promise;
					return c = t.defer((function() {
						try {
							p.resolve(a.apply(null, l))
						} catch (e) {
							p.reject(e), i(e)
						} finally {
							delete o[d.$$timeoutId]
						}
						f || e.$apply()
					}), s, "$timeout"), d.$$timeoutId = c, o[c] = p, d
				}
				return a.cancel = function(e) {
					if (!e) return !1;
					if (!e.hasOwnProperty("$$timeoutId")) throw ii("badprom", "`$timeout.cancel()` called with a promise that was not generated by `$timeout()`.");
					if (!o.hasOwnProperty(e.$$timeoutId)) return !1;
					var n = e.$$timeoutId,
						r = o[n];
					return jr(r.promise), r.reject("canceled"), delete o[n], t.defer.cancel(n)
				}, a
			}]
		}
		var ai, si = e.document.createElement("a"),
			ui = li(e.location.href);
		si.href = "http://[::1]";
		var ci = "[::1]" === si.hostname;

		function li(e) {
			if (!B(e)) return e;
			var t = e;
			a && (si.setAttribute("href", t), t = si.href), si.setAttribute("href", t);
			var n = si.hostname;
			return !ci && n.indexOf(":") > -1 && (n = "[" + n + "]"), {
				href: si.href,
				protocol: si.protocol ? si.protocol.replace(/:$/, "") : "",
				host: si.host,
				search: si.search ? si.search.replace(/^\?/, "") : "",
				hash: si.hash ? si.hash.replace(/^#/, "") : "",
				hostname: n,
				port: si.port,
				pathname: "/" === si.pathname.charAt(0) ? si.pathname : "/" + si.pathname
			}
		}

		function fi(e, t) {
			return e = li(e), t = li(t), e.protocol === t.protocol && e.host === t.host
		}

		function pi() {
			this.$get = _(e)
		}

		function di(e) {
			var t = e[0] || {},
				n = {},
				r = "";

			function i(e) {
				try {
					return decodeURIComponent(e)
				} catch (t) {
					return e
				}
			}
			return function() {
				var e, o, a, s, u, c = function(e) {
					try {
						return e.cookie || ""
					} catch (e) {
						return ""
					}
				}(t);
				if (c !== r)
					for (e = (r = c).split("; "), n = {}, a = 0; a < e.length; a++)(s = (o = e[a]).indexOf("=")) > 0 && (u = i(o.substring(0, s)), V(n[u]) && (n[u] = i(o.substring(s + 1))));
				return n
			}
		}

		function hi() {
			this.$get = di
		}

		function $i(e) {
			var t = "Filter";

			function n(r, i) {
				if (j(r)) {
					var o = {};
					return T(r, (function(e, t) {
						o[t] = n(t, e)
					})), o
				}
				return e.factory(r + t, i)
			}
			this.register = n, this.$get = ["$injector", function(e) {
				return function(n) {
					return e.get(n + t)
				}
			}], n("currency", Ei), n("date", ki), n("filter", vi), n("json", Li), n("limitTo", Di), n("lowercase", Ui), n("number", Si), n("orderBy", Fi), n("uppercase", _i)
		}

		function vi() {
			return function(e, t, n, r) {
				if (!S(e)) {
					if (null == e) return e;
					throw o("filter")("notarray", "Expected array but received: {0}", e)
				}
				var i, a;
				switch (r = r || "$", gi(t)) {
					case "function":
						i = t;
						break;
					case "boolean":
					case "null":
					case "number":
					case "string":
						a = !0;
					case "object":
						i = function(e, t, n, r) {
							var i = j(e) && n in e;
							return !0 === t ? t = ce : J(t) || (t = function(e, t) {
									return !(V(e) || (null === e || null === t ? e !== t : j(t) || j(e) && !D(e) || (e = d("" + e), t = d("" + t), -1 === e.indexOf(t))))
								}),
								function(o) {
									return i && !j(o) ? mi(o, e[n], t, n, !1) : mi(o, e, t, n, r)
								}
						}(t, n, r, a);
						break;
					default:
						return e
				}
				return Array.prototype.filter.call(e, i)
			}
		}

		function mi(e, t, n, r, i, o) {
			var a = gi(e),
				s = gi(t);
			if ("string" === s && "!" === t.charAt(0)) return !mi(e, t.substring(1), n, r, i);
			if (W(e)) return e.some((function(e) {
				return mi(e, t, n, r, i)
			}));
			switch (a) {
				case "object":
					var u;
					if (i) {
						for (u in e)
							if (u.charAt && "$" !== u.charAt(0) && mi(e[u], t, n, r, !0)) return !0;
						return !o && mi(e, t, n, r, !1)
					}
					if ("object" === s) {
						for (u in t) {
							var c = t[u];
							if (!J(c) && !V(c)) {
								var l = u === r;
								if (!mi(l ? e : e[u], c, n, r, l, l)) return !1
							}
						}
						return !0
					}
					return n(e, t);
				case "function":
					return !1;
				default:
					return n(e, t)
			}
		}

		function gi(e) {
			return null === e ? "null" : r(e)
		}
		di.$inject = ["$document"], $i.$inject = ["$provide"];
		var yi = 22,
			bi = ".",
			wi = "0";

		function Ei(e) {
			var t = e.NUMBER_FORMATS;
			return function(e, n, r) {
				V(n) && (n = t.CURRENCY_SYM), V(r) && (r = t.PATTERNS[1].maxFrac);
				var i = n ? /\u00A4/g : /\s*\u00A4\s*/g;
				return null == e ? e : Ti(e, t.PATTERNS[1], t.GROUP_SEP, t.DECIMAL_SEP, r).replace(i, n)
			}
		}

		function Si(e) {
			var t = e.NUMBER_FORMATS;
			return function(e, n) {
				return null == e ? e : Ti(e, t.PATTERNS[0], t.GROUP_SEP, t.DECIMAL_SEP, n)
			}
		}

		function Ti(e, t, n, r, i) {
			if (!B(e) && !H(e) || isNaN(e)) return "";
			var o, a = !isFinite(e),
				s = !1,
				u = Math.abs(e) + "",
				c = "";
			if (a) c = "∞";
			else {
				o = function(e) {
						var t, n, r, i, o, a = 0;
						for ((n = e.indexOf(bi)) > -1 && (e = e.replace(bi, "")), (r = e.search(/e/i)) > 0 ? (n < 0 && (n = r), n += +e.slice(r + 1), e = e.substring(0, r)) : n < 0 && (n = e.length), r = 0; e.charAt(r) === wi; r++);
						if (r === (o = e.length)) t = [0], n = 1;
						else {
							for (o--; e.charAt(o) === wi;) o--;
							for (n -= r, t = [], i = 0; r <= o; r++, i++) t[i] = +e.charAt(r)
						}
						return n > yi && (t = t.splice(0, yi - 1), a = n - 1, n = 1), {
							d: t,
							e: a,
							i: n
						}
					}(u),
					function(e, t, n, r) {
						var i = e.d,
							o = i.length - e.i,
							a = (t = V(t) ? Math.min(Math.max(n, o), r) : +t) + e.i,
							s = i[a];
						if (a > 0) {
							i.splice(Math.max(e.i, a));
							for (var u = a; u < i.length; u++) i[u] = 0
						} else {
							o = Math.max(0, o), e.i = 1, i.length = Math.max(1, a = t + 1), i[0] = 0;
							for (var c = 1; c < a; c++) i[c] = 0
						}
						if (s >= 5)
							if (a - 1 < 0) {
								for (var l = 0; l > a; l--) i.unshift(0), e.i++;
								i.unshift(1), e.i++
							} else i[a - 1]++;
						for (; o < Math.max(0, t); o++) i.push(0);
						var f = i.reduceRight((function(e, t, n, r) {
							return t += e, r[n] = t % 10, Math.floor(t / 10)
						}), 0);
						f && (i.unshift(f), e.i++)
					}(o, i, t.minFrac, t.maxFrac);
				var l = o.d,
					f = o.i,
					p = o.e,
					d = [];
				for (s = l.reduce((function(e, t) {
						return e && !t
					}), !0); f < 0;) l.unshift(0), f++;
				f > 0 ? d = l.splice(f, l.length) : (d = l, l = [0]);
				var h = [];
				for (l.length >= t.lgSize && h.unshift(l.splice(-t.lgSize, l.length).join("")); l.length > t.gSize;) h.unshift(l.splice(-t.gSize, l.length).join(""));
				l.length && h.unshift(l.join("")), c = h.join(n), d.length && (c += r + d.join("")), p && (c += "e+" + p)
			}
			return e < 0 && !s ? t.negPre + c + t.negSuf : t.posPre + c + t.posSuf
		}

		function xi(e, t, n, r) {
			var i = "";
			for ((e < 0 || r && e <= 0) && (r ? e = 1 - e : (e = -e, i = "-")), e = "" + e; e.length < t;) e = wi + e;
			return n && (e = e.substr(e.length - t)), i + e
		}

		function Oi(e, t, n, r, i) {
			return n = n || 0,
				function(o) {
					var a = o["get" + e]();
					return (n > 0 || a > -n) && (a += n), 0 === a && -12 === n && (a = 12), xi(a, t, r, i)
				}
		}

		function Ai(e, t, n) {
			return function(r, i) {
				var o = r["get" + e]();
				return i[h((n ? "STANDALONE" : "") + (t ? "SHORT" : "") + e)][o]
			}
		}

		function Ri(e) {
			var t = new Date(e, 0, 1).getDay();
			return new Date(e, 0, (t <= 4 ? 5 : 12) - t)
		}

		function Ci(e) {
			return function(t) {
				var n, r = Ri(t.getFullYear()),
					i = (n = t, +new Date(n.getFullYear(), n.getMonth(), n.getDate() + (4 - n.getDay())) - +r);
				return xi(1 + Math.round(i / 6048e5), e)
			}
		}

		function Pi(e, t) {
			return e.getFullYear() <= 0 ? t.ERAS[0] : t.ERAS[1]
		}
		Ei.$inject = ["$locale"], Si.$inject = ["$locale"];
		var Ii = {
				yyyy: Oi("FullYear", 4, 0, !1, !0),
				yy: Oi("FullYear", 2, 0, !0, !0),
				y: Oi("FullYear", 1, 0, !1, !0),
				MMMM: Ai("Month"),
				MMM: Ai("Month", !0),
				MM: Oi("Month", 2, 1),
				M: Oi("Month", 1, 1),
				LLLL: Ai("Month", !1, !0),
				dd: Oi("Date", 2),
				d: Oi("Date", 1),
				HH: Oi("Hours", 2),
				H: Oi("Hours", 1),
				hh: Oi("Hours", 2, -12),
				h: Oi("Hours", 1, -12),
				mm: Oi("Minutes", 2),
				m: Oi("Minutes", 1),
				ss: Oi("Seconds", 2),
				s: Oi("Seconds", 1),
				sss: Oi("Milliseconds", 3),
				EEEE: Ai("Day"),
				EEE: Ai("Day", !0),
				a: function(e, t) {
					return e.getHours() < 12 ? t.AMPMS[0] : t.AMPMS[1]
				},
				Z: function(e, t, n) {
					var r = -1 * n;
					return (r >= 0 ? "+" : "") + (xi(Math[r > 0 ? "floor" : "ceil"](r / 60), 2) + xi(Math.abs(r % 60), 2))
				},
				ww: Ci(2),
				w: Ci(1),
				G: Pi,
				GG: Pi,
				GGG: Pi,
				GGGG: function(e, t) {
					return e.getFullYear() <= 0 ? t.ERANAMES[0] : t.ERANAMES[1]
				}
			},
			Mi = /((?:[^yMLdHhmsaZEwG']+)|(?:'(?:[^']|'')*')|(?:E+|y+|M+|L+|d+|H+|h+|m+|s+|a|Z|G+|w+))([\s\S]*)/,
			Ni = /^-?\d+$/;

		function ki(e) {
			var t = /^(\d{4})-?(\d\d)-?(\d\d)(?:T(\d\d)(?::?(\d\d)(?::?(\d\d)(?:\.(\d+))?)?)?(Z|([+-])(\d\d):?(\d\d))?)?$/;
			return function(n, r, i) {
				var o, a, s = "",
					u = [];
				if (r = r || "mediumDate", r = e.DATETIME_FORMATS[r] || r, B(n) && (n = Ni.test(n) ? M(n) : function(e) {
						var n;
						if (n = e.match(t)) {
							var r = new Date(0),
								i = 0,
								o = 0,
								a = n[8] ? r.setUTCFullYear : r.setFullYear,
								s = n[8] ? r.setUTCHours : r.setHours;
							n[9] && (i = M(n[9] + n[10]), o = M(n[9] + n[11])), a.call(r, M(n[1]), M(n[2]) - 1, M(n[3]));
							var u = M(n[4] || 0) - i,
								c = M(n[5] || 0) - o,
								l = M(n[6] || 0),
								f = Math.round(1e3 * parseFloat("0." + (n[7] || 0)));
							return s.call(r, u, c, l, f), r
						}
						return e
					}(n)), H(n) && (n = new Date(n)), !G(n) || !isFinite(n.getTime())) return n;
				for (; r;)(a = Mi.exec(r)) ? r = (u = pe(u, a, 1)).pop() : (u.push(r), r = null);
				var c = n.getTimezoneOffset();
				return i && (c = ye(i, c), n = we(n, i, !0)), T(u, (function(t) {
					o = Ii[t], s += o ? o(n, e.DATETIME_FORMATS, c) : "''" === t ? "'" : t.replace(/(^'|'$)/g, "").replace(/''/g, "'")
				})), s
			}
		}

		function Li() {
			return function(e, t) {
				return V(t) && (t = 2), ve(e, t)
			}
		}
		ki.$inject = ["$locale"];
		var Ui = _(d),
			_i = _(h);

		function Di() {
			return function(e, t, n) {
				return t = Math.abs(Number(t)) === 1 / 0 ? Number(t) : M(t), N(t) ? e : (H(e) && (e = e.toString()), S(e) ? (n = (n = !n || isNaN(n) ? 0 : M(n)) < 0 ? Math.max(0, e.length + n) : n, t >= 0 ? Vi(e, n, n + t) : 0 === n ? Vi(e, t, e.length) : Vi(e, Math.max(0, n + t), n)) : e)
			}
		}

		function Vi(e, t, n) {
			return B(e) ? e.slice(t, n) : $.call(e, t, n)
		}

		function Fi(e) {
			return function(i, a, s, u) {
				if (null == i) return i;
				if (!S(i)) throw o("orderBy")("notarray", "Expected array but received: {0}", i);
				W(a) || (a = [a]), 0 === a.length && (a = ["+"]);
				var c = a.map((function(t) {
						var n = 1,
							r = U;
						if (J(t)) r = t;
						else if (B(t) && ("+" !== t.charAt(0) && "-" !== t.charAt(0) || (n = "-" === t.charAt(0) ? -1 : 1, t = t.substring(1)), "" !== t && (r = e(t)).constant)) {
							var i = r();
							r = function(e) {
								return e[i]
							}
						}
						return {
							get: r,
							descending: n
						}
					})),
					l = s ? -1 : 1,
					f = J(u) ? u : n,
					p = Array.prototype.map.call(i, (function(e, n) {
						return {
							value: e,
							tieBreaker: {
								value: n,
								type: "number",
								index: n
							},
							predicateValues: c.map((function(i) {
								return function(e, n) {
									var i = r(e);
									return null === e ? i = "null" : "object" === i && (e = function(e) {
										return J(e.valueOf) && t(e = e.valueOf()) || D(e) && t(e = e.toString()), e
									}(e)), {
										value: e,
										type: i,
										index: n
									}
								}(i.get(e), n)
							}))
						}
					}));
				return p.sort((function(e, t) {
					for (var r = 0, i = c.length; r < i; r++) {
						var o = f(e.predicateValues[r], t.predicateValues[r]);
						if (o) return o * c[r].descending * l
					}
					return (f(e.tieBreaker, t.tieBreaker) || n(e.tieBreaker, t.tieBreaker)) * l
				})), p.map((function(e) {
					return e.value
				}))
			};

			function t(e) {
				switch (r(e)) {
					case "number":
					case "boolean":
					case "string":
						return !0;
					default:
						return !1
				}
			}

			function n(e, t) {
				var n = 0,
					r = e.type,
					i = t.type;
				if (r === i) {
					var o = e.value,
						a = t.value;
					"string" === r ? (o = o.toLowerCase(), a = a.toLowerCase()) : "object" === r && (j(o) && (o = e.index), j(a) && (a = t.index)), o !== a && (n = o < a ? -1 : 1)
				} else n = "undefined" === r ? 1 : "undefined" === i ? -1 : "null" === r ? 1 : "null" === i || r < i ? -1 : 1;
				return n
			}
		}

		function ji(e) {
			return J(e) && (e = {
				link: e
			}), e.restrict = e.restrict || "AC", _(e)
		}
		Fi.$inject = ["$parse"];
		var qi = _({
				restrict: "E",
				compile: function(e, t) {
					if (!t.href && !t.xlinkHref) return function(e, t) {
						if ("a" === t[0].nodeName.toLowerCase()) {
							var n = "[object SVGAnimatedString]" === g.call(t.prop("href")) ? "xlink:href" : "href";
							t.on("click", (function(e) {
								t.attr(n) || e.preventDefault()
							}))
						}
					}
				}
			}),
			Bi = {};
		T(Mt, (function(e, t) {
			if ("multiple" !== e) {
				var n = wn("ng-" + t),
					r = i;
				"checked" === e && (r = function(e, t, r) {
					r.ngModel !== r[n] && i(e, 0, r)
				}), Bi[n] = function() {
					return {
						restrict: "A",
						priority: 100,
						link: r
					}
				}
			}

			function i(e, r, i) {
				e.$watch(i[n], (function(e) {
					i.$set(t, !!e)
				}))
			}
		})), T(kt, (function(e, t) {
			Bi[t] = function() {
				return {
					priority: 100,
					link: function(e, n, r) {
						if ("ngPattern" === t && "/" === r.ngPattern.charAt(0)) {
							var i = r.ngPattern.match(l);
							if (i) return void r.$set("ngPattern", new RegExp(i[1], i[2]))
						}
						e.$watch(r[t], (function(e) {
							r.$set(t, e)
						}))
					}
				}
			}
		})), T(["src", "srcset", "href"], (function(e) {
			var t = wn("ng-" + e);
			Bi[t] = ["$sce", function(n) {
				return {
					priority: 99,
					link: function(r, i, o) {
						var s = e,
							u = e;
						"href" === e && "[object SVGAnimatedString]" === g.call(i.prop("href")) && (u = "xlinkHref", o.$attr[u] = "xlink:href", s = null), o.$set(t, n.getTrustedMediaUrl(o[t])), o.$observe(t, (function(t) {
							t ? (o.$set(u, t), a && s && i.prop(s, o[u])) : "href" === e && o.$set(u, null)
						}))
					}
				}
			}]
		}));
		var Hi = {
				$addControl: L,
				$getControls: _([]),
				$$renameControl: function(e, t) {
					e.$name = t
				},
				$removeControl: L,
				$setValidity: L,
				$setDirty: L,
				$setPristine: L,
				$setSubmitted: L,
				$$setSubmitted: L
			},
			Gi = "ng-pending",
			Wi = "ng-submitted";

		function zi(e, t, n, r, i) {
			this.$$controls = [], this.$error = {}, this.$$success = {}, this.$pending = void 0, this.$name = i(t.name || t.ngForm || "")(n), this.$dirty = !1, this.$pristine = !0, this.$valid = !0, this.$invalid = !1, this.$submitted = !1, this.$$parentForm = Hi, this.$$element = e, this.$$animate = r, Ki(this)
		}
		zi.$inject = ["$element", "$attrs", "$scope", "$animate", "$interpolate"], zi.prototype = {
			$rollbackViewValue: function() {
				T(this.$$controls, (function(e) {
					e.$rollbackViewValue()
				}))
			},
			$commitViewValue: function() {
				T(this.$$controls, (function(e) {
					e.$commitViewValue()
				}))
			},
			$addControl: function(e) {
				De(e.$name, "input"), this.$$controls.push(e), e.$name && (this[e.$name] = e), e.$$parentForm = this
			},
			$getControls: function() {
				return Be(this.$$controls)
			},
			$$renameControl: function(e, t) {
				var n = e.$name;
				this[n] === e && delete this[n], this[t] = e, e.$name = t
			},
			$removeControl: function(e) {
				e.$name && this[e.$name] === e && delete this[e.$name], T(this.$pending, (function(t, n) {
					this.$setValidity(n, null, e)
				}), this), T(this.$error, (function(t, n) {
					this.$setValidity(n, null, e)
				}), this), T(this.$$success, (function(t, n) {
					this.$setValidity(n, null, e)
				}), this), ae(this.$$controls, e), e.$$parentForm = Hi
			},
			$setDirty: function() {
				this.$$animate.removeClass(this.$$element, zo), this.$$animate.addClass(this.$$element, Jo), this.$dirty = !0, this.$pristine = !1, this.$$parentForm.$setDirty()
			},
			$setPristine: function() {
				this.$$animate.setClass(this.$$element, zo, Jo + " " + Wi), this.$dirty = !1, this.$pristine = !0, this.$submitted = !1, T(this.$$controls, (function(e) {
					e.$setPristine()
				}))
			},
			$setUntouched: function() {
				T(this.$$controls, (function(e) {
					e.$setUntouched()
				}))
			},
			$setSubmitted: function() {
				for (var e = this; e.$$parentForm && e.$$parentForm !== Hi;) e = e.$$parentForm;
				e.$$setSubmitted()
			},
			$$setSubmitted: function() {
				this.$$animate.addClass(this.$$element, Wi), this.$submitted = !0, T(this.$$controls, (function(e) {
					e.$$setSubmitted && e.$$setSubmitted()
				}))
			}
		}, Zi({
			clazz: zi,
			set: function(e, t, n) {
				var r = e[t];
				r ? -1 === r.indexOf(n) && r.push(n) : e[t] = [n]
			},
			unset: function(e, t, n) {
				var r = e[t];
				r && (ae(r, n), 0 === r.length && delete e[t])
			}
		});
		var Ji = function(e) {
				return ["$timeout", "$parse", function(t, n) {
					return {
						name: "form",
						restrict: e ? "EAC" : "E",
						require: ["form", "^^?form"],
						controller: zi,
						compile: function(n, i) {
							n.addClass(zo).addClass(Go);
							var o = i.name ? "name" : !(!e || !i.ngForm) && "ngForm";
							return {
								pre: function(e, n, i, a) {
									var s = a[0];
									if (!("action" in i)) {
										var u = function(t) {
											e.$apply((function() {
												s.$commitViewValue(), s.$setSubmitted()
											})), t.preventDefault()
										};
										n[0].addEventListener("submit", u), n.on("$destroy", (function() {
											t((function() {
												n[0].removeEventListener("submit", u)
											}), 0, !1)
										}))
									}(a[1] || s.$$parentForm).$addControl(s);
									var c = o ? r(s.$name) : L;
									o && (c(e, s), i.$observe(o, (function(t) {
										s.$name !== t && (c(e, void 0), s.$$parentForm.$$renameControl(s, t), (c = r(s.$name))(e, s))
									}))), n.on("$destroy", (function() {
										s.$$parentForm.$removeControl(s), c(e, void 0), P(s, Hi)
									}))
								}
							}
						}
					};

					function r(e) {
						return "" === e ? n('this[""]').assign : n(e).assign || L
					}
				}]
			},
			Yi = Ji(),
			Qi = Ji(!0);

		function Ki(e) {
			e.$$classCache = {}, e.$$classCache[Wo] = !(e.$$classCache[Go] = e.$$element.hasClass(Go))
		}

		function Zi(e) {
			var t = e.clazz,
				n = e.set,
				r = e.unset;

			function i(e, t, n) {
				n && !e.$$classCache[t] ? (e.$$animate.addClass(e.$$element, t), e.$$classCache[t] = !0) : !n && e.$$classCache[t] && (e.$$animate.removeClass(e.$$element, t), e.$$classCache[t] = !1)
			}

			function o(e, t, n) {
				t = t ? "-" + Ne(t, "-") : "", i(e, Go + t, !0 === n), i(e, Wo + t, !1 === n)
			}
			t.prototype.$setValidity = function(e, t, a) {
				var s;
				V(t) ? function(e, t, r, i) {
					e[t] || (e[t] = {}), n(e[t], r, i)
				}(this, "$pending", e, a) : function(e, t, n, i) {
					e[t] && r(e[t], n, i), Xi(e[t]) && (e[t] = void 0)
				}(this, "$pending", e, a), Z(t) ? t ? (r(this.$error, e, a), n(this.$$success, e, a)) : (n(this.$error, e, a), r(this.$$success, e, a)) : (r(this.$error, e, a), r(this.$$success, e, a)), this.$pending ? (i(this, Gi, !0), this.$valid = this.$invalid = void 0, o(this, "", null)) : (i(this, Gi, !1), this.$valid = Xi(this.$error), this.$invalid = !this.$valid, o(this, "", this.$valid)), o(this, e, s = this.$pending && this.$pending[e] ? void 0 : !this.$error[e] && (!!this.$$success[e] || null)), this.$$parentForm.$setValidity(e, s, this)
			}
		}

		function Xi(e) {
			if (e)
				for (var t in e)
					if (e.hasOwnProperty(t)) return !1;
			return !0
		}
		var eo = /^\d{4,}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d:[0-5]\d\.\d+(?:[+-][0-2]\d:[0-5]\d|Z)$/,
			to = /^[a-z][a-z\d.+-]*:\/*(?:[^:@]+(?::[^@]+)?@)?(?:[^\s:/?#]+|\[[a-f\d:]+])(?::\d+)?(?:\/[^?#]*)?(?:\?[^#]*)?(?:#.*)?$/i,
			no = /^(?=.{1,254}$)(?=.{1,64}@)[-!#$%&'*+/0-9=?A-Z^_`a-z{|}~]+(\.[-!#$%&'*+/0-9=?A-Z^_`a-z{|}~]+)*@[A-Za-z0-9]([A-Za-z0-9-]{0,61}[A-Za-z0-9])?(\.[A-Za-z0-9]([A-Za-z0-9-]{0,61}[A-Za-z0-9])?)*$/,
			ro = /^\s*(-|\+)?(\d+|(\d*(\.\d*)))([eE][+-]?\d+)?\s*$/,
			io = /^(\d{4,})-(\d{2})-(\d{2})$/,
			oo = /^(\d{4,})-(\d\d)-(\d\d)T(\d\d):(\d\d)(?::(\d\d)(\.\d{1,3})?)?$/,
			ao = /^(\d{4,})-W(\d\d)$/,
			so = /^(\d{4,})-(\d\d)$/,
			uo = /^(\d\d):(\d\d)(?::(\d\d)(\.\d{1,3})?)?$/,
			co = Fe();
		T("date,datetime-local,month,time,week".split(","), (function(e) {
			co[e] = !0
		}));
		var lo = {
			text: function(e, t, n, r, i, o) {
				po(e, t, n, r, i, o), fo(r)
			},
			date: $o("date", io, ho(io, ["yyyy", "MM", "dd"]), "yyyy-MM-dd"),
			"datetime-local": $o("datetimelocal", oo, ho(oo, ["yyyy", "MM", "dd", "HH", "mm", "ss", "sss"]), "yyyy-MM-ddTHH:mm:ss.sss"),
			time: $o("time", uo, ho(uo, ["HH", "mm", "ss", "sss"]), "HH:mm:ss.sss"),
			week: $o("week", ao, (function(e, t) {
				if (G(e)) return e;
				if (B(e)) {
					ao.lastIndex = 0;
					var n = ao.exec(e);
					if (n) {
						var r = +n[1],
							i = +n[2],
							o = 0,
							a = 0,
							s = 0,
							u = 0,
							c = Ri(r),
							l = 7 * (i - 1);
						return t && (o = t.getHours(), a = t.getMinutes(), s = t.getSeconds(), u = t.getMilliseconds()), new Date(r, 0, c.getDate() + l, o, a, s, u)
					}
				}
				return NaN
			}), "yyyy-Www"),
			month: $o("month", so, ho(so, ["yyyy", "MM"]), "yyyy-MM"),
			number: function(e, t, n, r, i, o, a, s) {
				var u;
				if (vo(e, t, n, r, "number"), mo(r), po(e, t, n, r, i, o), F(n.min) || n.ngMin) {
					var c = n.min || s(n.ngMin)(e);
					u = go(c), r.$validators.min = function(e, t) {
						return r.$isEmpty(t) || V(u) || t >= u
					}, n.$observe("min", (function(e) {
						e !== c && (u = go(e), c = e, r.$validate())
					}))
				}
				if (F(n.max) || n.ngMax) {
					var l = n.max || s(n.ngMax)(e),
						f = go(l);
					r.$validators.max = function(e, t) {
						return r.$isEmpty(t) || V(f) || t <= f
					}, n.$observe("max", (function(e) {
						e !== l && (f = go(e), l = e, r.$validate())
					}))
				}
				if (F(n.step) || n.ngStep) {
					var p = n.step || s(n.ngStep)(e),
						d = go(p);
					r.$validators.step = function(e, t) {
						return r.$isEmpty(t) || V(d) || wo(t, u || 0, d)
					}, n.$observe("step", (function(e) {
						e !== p && (d = go(e), p = e, r.$validate())
					}))
				}
			},
			url: function(e, t, n, r, i, o) {
				po(e, t, n, r, i, o), fo(r), r.$validators.url = function(e, t) {
					var n = e || t;
					return r.$isEmpty(n) || to.test(n)
				}
			},
			email: function(e, t, n, r, i, o) {
				po(e, t, n, r, i, o), fo(r), r.$validators.email = function(e, t) {
					var n = e || t;
					return r.$isEmpty(n) || no.test(n)
				}
			},
			radio: function(e, t, n, r) {
				var i = !n.ngTrim || "false" !== te(n.ngTrim);
				V(n.name) && t.attr("name", A()), t.on("change", (function(e) {
					var o;
					t[0].checked && (o = n.value, i && (o = te(o)), r.$setViewValue(o, e && e.type))
				})), r.$render = function() {
					var e = n.value;
					i && (e = te(e)), t[0].checked = e === r.$viewValue
				}, n.$observe("value", r.$render)
			},
			range: function(e, t, n, r, i, o) {
				vo(e, t, n, r, "range"), mo(r), po(e, t, n, r, i, o);
				var a = r.$$hasNativeValidators && "range" === t[0].type,
					s = a ? 0 : void 0,
					u = a ? 100 : void 0,
					c = a ? 1 : void 0,
					l = t[0].validity,
					f = F(n.min),
					p = F(n.max),
					d = F(n.step),
					h = r.$render;

				function $(e, r) {
					t.attr(e, n[e]);
					var i = n[e];
					n.$observe(e, (function(e) {
						e !== i && (i = e, r(e))
					}))
				}
				r.$render = a && F(l.rangeUnderflow) && F(l.rangeOverflow) ? function() {
					h(), r.$setViewValue(t.val())
				} : h, f && (s = go(n.min), r.$validators.min = a ? function() {
					return !0
				} : function(e, t) {
					return r.$isEmpty(t) || V(s) || t >= s
				}, $("min", (function(e) {
					if (s = go(e), !N(r.$modelValue))
						if (a) {
							var n = t.val();
							s > n && (n = s, t.val(n)), r.$setViewValue(n)
						} else r.$validate()
				}))), p && (u = go(n.max), r.$validators.max = a ? function() {
					return !0
				} : function(e, t) {
					return r.$isEmpty(t) || V(u) || t <= u
				}, $("max", (function(e) {
					if (u = go(e), !N(r.$modelValue))
						if (a) {
							var n = t.val();
							u < n && (t.val(u), n = u < s ? s : u), r.$setViewValue(n)
						} else r.$validate()
				}))), d && (c = go(n.step), r.$validators.step = a ? function() {
					return !l.stepMismatch
				} : function(e, t) {
					return r.$isEmpty(t) || V(c) || wo(t, s || 0, c)
				}, $("step", (function(e) {
					c = go(e), N(r.$modelValue) || (a ? r.$viewValue !== t.val() && r.$setViewValue(t.val()) : r.$validate())
				})))
			},
			checkbox: function(e, t, n, r, i, o, a, s) {
				var u = Eo(s, e, "ngTrueValue", n.ngTrueValue, !0),
					c = Eo(s, e, "ngFalseValue", n.ngFalseValue, !1);
				t.on("change", (function(e) {
					r.$setViewValue(t[0].checked, e && e.type)
				})), r.$render = function() {
					t[0].checked = r.$viewValue
				}, r.$isEmpty = function(e) {
					return !1 === e
				}, r.$formatters.push((function(e) {
					return ce(e, u)
				})), r.$parsers.push((function(e) {
					return e ? u : c
				}))
			},
			hidden: L,
			button: L,
			submit: L,
			reset: L,
			file: L
		};

		function fo(e) {
			e.$formatters.push((function(t) {
				return e.$isEmpty(t) ? t : t.toString()
			}))
		}

		function po(e, t, n, r, i, o) {
			var a, s = d(t[0].type);
			if (!i.android) {
				var u = !1;
				t.on("compositionstart", (function() {
					u = !0
				})), t.on("compositionupdate", (function(e) {
					(V(e.data) || "" === e.data) && (u = !1)
				})), t.on("compositionend", (function() {
					u = !1, c()
				}))
			}
			var c = function(e) {
				if (a && (o.defer.cancel(a), a = null), !u) {
					var i = t.val(),
						c = e && e.type;
					"password" === s || n.ngTrim && "false" === n.ngTrim || (i = te(i)), (r.$viewValue !== i || "" === i && r.$$hasNativeValidators) && r.$setViewValue(i, c)
				}
			};
			if (i.hasEvent("input")) t.on("input", c);
			else {
				var l = function(e, t, n) {
					a || (a = o.defer((function() {
						a = null, t && t.value === n || c(e)
					})))
				};
				t.on("keydown", (function(e) {
					var t = e.keyCode;
					91 === t || 15 < t && t < 19 || 37 <= t && t <= 40 || l(e, this, this.value)
				})), i.hasEvent("paste") && t.on("paste cut drop", l)
			}
			t.on("change", c), co[s] && r.$$hasNativeValidators && s === n.type && t.on("keydown wheel mousedown", (function(e) {
				if (!a) {
					var t = this[f],
						n = t.badInput,
						r = t.typeMismatch;
					a = o.defer((function() {
						a = null, t.badInput === n && t.typeMismatch === r || c(e)
					}))
				}
			})), r.$render = function() {
				var e = r.$isEmpty(r.$viewValue) ? "" : r.$viewValue;
				t.val() !== e && t.val(e)
			}
		}

		function ho(e, t) {
			return function(n, r) {
				var i, o;
				if (G(n)) return n;
				if (B(n)) {
					if ('"' === n.charAt(0) && '"' === n.charAt(n.length - 1) && (n = n.substring(1, n.length - 1)), eo.test(n)) return new Date(n);
					if (e.lastIndex = 0, i = e.exec(n)) {
						i.shift(), o = r ? {
							yyyy: r.getFullYear(),
							MM: r.getMonth() + 1,
							dd: r.getDate(),
							HH: r.getHours(),
							mm: r.getMinutes(),
							ss: r.getSeconds(),
							sss: r.getMilliseconds() / 1e3
						} : {
							yyyy: 1970,
							MM: 1,
							dd: 1,
							HH: 0,
							mm: 0,
							ss: 0,
							sss: 0
						}, T(i, (function(e, n) {
							n < t.length && (o[t[n]] = +e)
						}));
						var a = new Date(o.yyyy, o.MM - 1, o.dd, o.HH, o.mm, o.ss || 0, 1e3 * o.sss || 0);
						return o.yyyy < 100 && a.setFullYear(o.yyyy), a
					}
				}
				return NaN
			}
		}

		function $o(e, t, n, r) {
			return function(i, o, a, s, u, c, l, f) {
				vo(i, o, a, s, e), po(0, o, a, s, u, c);
				var p, d, h = "time" === e || "datetimelocal" === e;
				if (s.$parsers.push((function(n) {
						return s.$isEmpty(n) ? null : t.test(n) ? w(n, p) : void(s.$$parserName = e)
					})), s.$formatters.push((function(e) {
						if (e && !G(e)) throw Xo("datefmt", "Expected `{0}` to be a date", e);
						if (y(e)) {
							p = e;
							var t = s.$options.getOption("timezone");
							return t && (d = t, p = we(p, t, !0)),
								function(e, t) {
									var n = r;
									h && B(s.$options.getOption("timeSecondsFormat")) && (n = r.replace("ss.sss", s.$options.getOption("timeSecondsFormat")).replace(/:$/, ""));
									var i = l("date")(e, n, t);
									return h && s.$options.getOption("timeStripZeroSeconds") && (i = i.replace(/(?::00)?(?:\.000)?$/, "")), i
								}(e, t)
						}
						return p = null, d = null, ""
					})), F(a.min) || a.ngMin) {
					var $ = a.min || f(a.ngMin)(i),
						v = b($);
					s.$validators.min = function(e) {
						return !y(e) || V(v) || n(e) >= v
					}, a.$observe("min", (function(e) {
						e !== $ && (v = b(e), $ = e, s.$validate())
					}))
				}
				if (F(a.max) || a.ngMax) {
					var m = a.max || f(a.ngMax)(i),
						g = b(m);
					s.$validators.max = function(e) {
						return !y(e) || V(g) || n(e) <= g
					}, a.$observe("max", (function(e) {
						e !== m && (g = b(e), m = e, s.$validate())
					}))
				}

				function y(e) {
					return e && !(e.getTime && e.getTime() != e.getTime())
				}

				function b(e) {
					return F(e) && !G(e) ? w(e) || void 0 : e
				}

				function w(e, t) {
					var r = s.$options.getOption("timezone");
					d && d !== r && (t = be(t, ye(d)));
					var i = n(e, t);
					return !isNaN(i) && r && (i = we(i, r)), i
				}
			}
		}

		function vo(e, t, n, r, i) {
			var o = t[0];
			(r.$$hasNativeValidators = j(o.validity)) && r.$parsers.push((function(e) {
				var n = t.prop(f) || {};
				if (!n.badInput && !n.typeMismatch) return e;
				r.$$parserName = i
			}))
		}

		function mo(e) {
			e.$parsers.push((function(t) {
				return e.$isEmpty(t) ? null : ro.test(t) ? parseFloat(t) : void(e.$$parserName = "number")
			})), e.$formatters.push((function(t) {
				if (!e.$isEmpty(t)) {
					if (!H(t)) throw Xo("numfmt", "Expected `{0}` to be a number", t);
					t = t.toString()
				}
				return t
			}))
		}

		function go(e) {
			return F(e) && !H(e) && (e = parseFloat(e)), N(e) ? void 0 : e
		}

		function yo(e) {
			return (0 | e) === e
		}

		function bo(e) {
			var t = e.toString(),
				n = t.indexOf(".");
			if (-1 === n) {
				if (-1 < e && e < 1) {
					var r = /e-(\d+)$/.exec(t);
					if (r) return Number(r[1])
				}
				return 0
			}
			return t.length - n - 1
		}

		function wo(e, t, n) {
			var r = Number(e),
				i = !yo(r),
				o = !yo(t),
				a = !yo(n);
			if (i || o || a) {
				var s = i ? bo(r) : 0,
					u = o ? bo(t) : 0,
					c = a ? bo(n) : 0,
					l = Math.max(s, u, c),
					f = Math.pow(10, l);
				r *= f, t *= f, n *= f, i && (r = Math.round(r)), o && (t = Math.round(t)), a && (n = Math.round(n))
			}
			return (r - t) % n == 0
		}

		function Eo(e, t, n, r, i) {
			var o;
			if (F(r)) {
				if (!(o = e(r)).constant) throw Xo("constexpr", "Expected constant expression for `{0}`, but saw `{1}`.", n, r);
				return o(t)
			}
			return i
		}
		var So = ["$browser", "$sniffer", "$filter", "$parse", function(e, t, n, r) {
				return {
					restrict: "E",
					require: ["?ngModel"],
					link: {
						pre: function(i, o, a, s) {
							s[0] && (lo[d(a.type)] || lo.text)(i, o, a, s[0], t, e, n, r)
						}
					}
				}
			}],
			To = function() {
				var e = {
					configurable: !0,
					enumerable: !1,
					get: function() {
						return this.getAttribute("value") || ""
					},
					set: function(e) {
						this.setAttribute("value", e)
					}
				};
				return {
					restrict: "E",
					priority: 200,
					compile: function(t, n) {
						if ("hidden" === d(n.type)) return {
							pre: function(t, n, r, i) {
								var o = n[0];
								o.parentNode && o.parentNode.insertBefore(o, o.nextSibling), Object.defineProperty && Object.defineProperty(o, "value", e)
							}
						}
					}
				}
			},
			xo = /^(true|false|\d+)$/,
			Oo = function() {
				function e(e, t, n) {
					var r = F(n) ? n : 9 === a ? "" : null;
					e.prop("value", r), t.$set("value", n)
				}
				return {
					restrict: "A",
					priority: 100,
					compile: function(t, n) {
						return xo.test(n.ngValue) ? function(t, n, r) {
							e(n, r, t.$eval(r.ngValue))
						} : function(t, n, r) {
							t.$watch(r.ngValue, (function(t) {
								e(n, r, t)
							}))
						}
					}
				}
			},
			Ao = ["$compile", function(e) {
				return {
					restrict: "AC",
					compile: function(t) {
						return e.$$addBindingClass(t),
							function(t, n, r) {
								e.$$addBindingInfo(n, r.ngBind), n = n[0], t.$watch(r.ngBind, (function(e) {
									n.textContent = je(e)
								}))
							}
					}
				}
			}],
			Ro = ["$interpolate", "$compile", function(e, t) {
				return {
					compile: function(n) {
						return t.$$addBindingClass(n),
							function(n, r, i) {
								var o = e(r.attr(i.$attr.ngBindTemplate));
								t.$$addBindingInfo(r, o.expressions), r = r[0], i.$observe("ngBindTemplate", (function(e) {
									r.textContent = V(e) ? "" : e
								}))
							}
					}
				}
			}],
			Co = ["$sce", "$parse", "$compile", function(e, t, n) {
				return {
					restrict: "A",
					compile: function(r, i) {
						var o = t(i.ngBindHtml),
							a = t(i.ngBindHtml, (function(t) {
								return e.valueOf(t)
							}));
						return n.$$addBindingClass(r),
							function(t, r, i) {
								n.$$addBindingInfo(r, i.ngBindHtml), t.$watch(a, (function() {
									var n = o(t);
									r.html(e.getTrustedHtml(n) || "")
								}))
							}
					}
				}
			}],
			Po = _({
				restrict: "A",
				require: "ngModel",
				link: function(e, t, n, r) {
					r.$viewChangeListeners.push((function() {
						e.$eval(n.ngChange)
					}))
				}
			});

		function Io(e, t) {
			var n;
			return e = "ngClass" + e, ["$parse", function(a) {
				return {
					restrict: "AC",
					link: function(s, u, c) {
						var l, f = u.data("$classCounts"),
							p = !0;

						function d(e, t) {
							var n = [];
							return T(e, (function(e) {
								(t > 0 || f[e]) && (f[e] = (f[e] || 0) + t, f[e] === +(t > 0) && n.push(e))
							})), n.join(" ")
						}
						f || (f = Fe(), u.data("$classCounts", f)), "ngClass" !== e && (n || (n = a("$index", (function(e) {
							return 1 & e
						}))), s.$watch(n, (function(e) {
							var n;
							e === t ? (n = d(i(n = l), 1), c.$addClass(n)) : function(e) {
								e = d(i(e), -1), c.$removeClass(e)
							}(l), p = e
						}))), s.$watch(a(c[e], o), (function(e) {
							p === t && function(e, t) {
								var n = i(e),
									o = i(t),
									a = r(n, o),
									s = r(o, n),
									u = d(a, -1),
									l = d(s, 1);
								c.$addClass(l), c.$removeClass(u)
							}(l, e), l = e
						}))
					}
				}
			}];

			function r(e, t) {
				if (!e || !e.length) return [];
				if (!t || !t.length) return e;
				var n = [];
				e: for (var r = 0; r < e.length; r++) {
					for (var i = e[r], o = 0; o < t.length; o++)
						if (i === t[o]) continue e;
					n.push(i)
				}
				return n
			}

			function i(e) {
				return e && e.split(" ")
			}

			function o(e) {
				if (!e) return e;
				var t = e;
				return W(e) ? t = e.map(o).join(" ") : j(e) ? t = Object.keys(e).filter((function(t) {
					return e[t]
				})).join(" ") : B(e) || (t = e + ""), t
			}
		}
		var Mo = Io("", !0),
			No = Io("Odd", 0),
			ko = Io("Even", 1),
			Lo = ji({
				compile: function(e, t) {
					t.$set("ngCloak", void 0), e.removeClass("ng-cloak")
				}
			}),
			Uo = [function() {
				return {
					restrict: "A",
					scope: !0,
					controller: "@",
					priority: 500
				}
			}],
			_o = {},
			Do = {
				blur: !0,
				focus: !0
			};

		function Vo(e, t, n, r, i, o) {
			return {
				restrict: "A",
				compile: function(a, s) {
					var u = e(s[r]);
					return function(e, r) {
						r.on(i, (function(r) {
							var i = function() {
								u(e, {
									$event: r
								})
							};
							if (t.$$phase)
								if (o) e.$evalAsync(i);
								else try {
									i()
								} catch (e) {
									n(e)
								} else e.$apply(i)
						}))
					}
				}
			}
		}
		T("click dblclick mousedown mouseup mouseover mouseout mousemove mouseenter mouseleave keydown keyup keypress submit focus blur copy cut paste".split(" "), (function(e) {
			var t = wn("ng-" + e);
			_o[t] = ["$parse", "$rootScope", "$exceptionHandler", function(n, r, i) {
				return Vo(n, r, i, t, e, Do[e])
			}]
		}));
		var Fo = ["$animate", "$compile", function(e, t) {
				return {
					multiElement: !0,
					transclude: "element",
					priority: 600,
					terminal: !0,
					restrict: "A",
					$$tlb: !0,
					link: function(n, r, i, o, a) {
						var s, u, c;
						n.$watch(i.ngIf, (function(n) {
							n ? u || a((function(n, o) {
								u = o, n[n.length++] = t.$$createComment("end ngIf", i.ngIf), s = {
									clone: n
								}, e.enter(n, r.parent(), r)
							})) : (c && (c.remove(), c = null), u && (u.$destroy(), u = null), s && (c = Ve(s.clone), e.leave(c).done((function(e) {
								!1 !== e && (c = null)
							})), s = null))
						}))
					}
				}
			}],
			jo = ["$templateRequest", "$anchorScroll", "$animate", function(e, t, n) {
				return {
					restrict: "ECA",
					priority: 400,
					terminal: !0,
					transclude: "element",
					controller: w.noop,
					compile: function(r, i) {
						var o = i.ngInclude || i.src,
							a = i.onload || "",
							s = i.autoscroll;
						return function(r, i, u, c, l) {
							var f, p, d, h = 0,
								$ = function() {
									p && (p.remove(), p = null), f && (f.$destroy(), f = null), d && (n.leave(d).done((function(e) {
										!1 !== e && (p = null)
									})), p = d, d = null)
								};
							r.$watch(o, (function(o) {
								var u = function(e) {
										!1 === e || !F(s) || s && !r.$eval(s) || t()
									},
									p = ++h;
								o ? (e(o, !0).then((function(e) {
									if (!r.$$destroyed && p === h) {
										var t = r.$new();
										c.template = e;
										var s = l(t, (function(e) {
											$(), n.enter(e, null, i).done(u)
										}));
										d = s, (f = t).$emit("$includeContentLoaded", o), r.$eval(a)
									}
								}), (function() {
									r.$$destroyed || p === h && ($(), r.$emit("$includeContentError", o))
								})), r.$emit("$includeContentRequested", o)) : ($(), c.template = null)
							}))
						}
					}
				}
			}],
			qo = ["$compile", function(t) {
				return {
					restrict: "ECA",
					priority: -400,
					require: "ngInclude",
					link: function(n, r, i, o) {
						if (g.call(r[0]).match(/SVG/)) return r.empty(), void t(ft(o.template, e.document).childNodes)(n, (function(e) {
							r.append(e)
						}), {
							futureParentElement: r
						});
						r.html(o.template), t(r.contents())(n)
					}
				}
			}],
			Bo = ji({
				priority: 450,
				compile: function() {
					return {
						pre: function(e, t, n) {
							e.$eval(n.ngInit)
						}
					}
				}
			}),
			Ho = function() {
				return {
					restrict: "A",
					priority: 100,
					require: "ngModel",
					link: function(e, t, n, r) {
						var i = n.ngList || ", ",
							o = "false" !== n.ngTrim,
							a = o ? te(i) : i;
						r.$parsers.push((function(e) {
							if (!V(e)) {
								var t = [];
								return e && T(e.split(a), (function(e) {
									e && t.push(o ? te(e) : e)
								})), t
							}
						})), r.$formatters.push((function(e) {
							if (W(e)) return e.join(i)
						})), r.$isEmpty = function(e) {
							return !e || !e.length
						}
					}
				}
			},
			Go = "ng-valid",
			Wo = "ng-invalid",
			zo = "ng-pristine",
			Jo = "ng-dirty",
			Yo = "ng-untouched",
			Qo = "ng-touched",
			Ko = "ng-empty",
			Zo = "ng-not-empty",
			Xo = o("ngModel");

		function ea(e, t, n, r, i, o, a, s, u) {
			var c;
			this.$viewValue = Number.NaN, this.$modelValue = Number.NaN, this.$$rawModelValue = void 0, this.$validators = {}, this.$asyncValidators = {}, this.$parsers = [], this.$formatters = [], this.$viewChangeListeners = [], this.$untouched = !0, this.$touched = !1, this.$pristine = !0, this.$dirty = !1, this.$valid = !0, this.$invalid = !1, this.$error = {}, this.$$success = {}, this.$pending = void 0, this.$name = u(n.name || "", !1)(e), this.$$parentForm = Hi, this.$options = ta, this.$$updateEvents = "", this.$$updateEventHandler = this.$$updateEventHandler.bind(this), this.$$parsedNgModel = i(n.ngModel), this.$$parsedNgModelAssign = this.$$parsedNgModel.assign, this.$$ngModelGet = this.$$parsedNgModel, this.$$ngModelSet = this.$$parsedNgModelAssign, this.$$pendingDebounce = null, this.$$parserValid = void 0, this.$$parserName = "parse", this.$$currentValidationRunId = 0, this.$$scope = e, this.$$rootScope = e.$root, this.$$attr = n, this.$$element = r, this.$$animate = o, this.$$timeout = a, this.$$parse = i, this.$$q = s, this.$$exceptionHandler = t, Ki(this), (c = this).$$scope.$watch((function(e) {
				var t = c.$$ngModelGet(e);
				return t === c.$modelValue || c.$modelValue != c.$modelValue && t != t || c.$$setModelValue(t), t
			}))
		}
		ea.$inject = ["$scope", "$exceptionHandler", "$attrs", "$element", "$parse", "$animate", "$timeout", "$q", "$interpolate"], ea.prototype = {
			$$initGetterSetters: function() {
				if (this.$options.getOption("getterSetter")) {
					var e = this.$$parse(this.$$attr.ngModel + "()"),
						t = this.$$parse(this.$$attr.ngModel + "($$$p)");
					this.$$ngModelGet = function(t) {
						var n = this.$$parsedNgModel(t);
						return J(n) && (n = e(t)), n
					}, this.$$ngModelSet = function(e, n) {
						J(this.$$parsedNgModel(e)) ? t(e, {
							$$$p: n
						}) : this.$$parsedNgModelAssign(e, n)
					}
				} else if (!this.$$parsedNgModel.assign) throw Xo("nonassign", "Expression '{0}' is non-assignable. Element: {1}", this.$$attr.ngModel, Ee(this.$$element))
			},
			$render: L,
			$isEmpty: function(e) {
				return V(e) || "" === e || null === e || e != e
			},
			$$updateEmptyClasses: function(e) {
				this.$isEmpty(e) ? (this.$$animate.removeClass(this.$$element, Zo), this.$$animate.addClass(this.$$element, Ko)) : (this.$$animate.removeClass(this.$$element, Ko), this.$$animate.addClass(this.$$element, Zo))
			},
			$setPristine: function() {
				this.$dirty = !1, this.$pristine = !0, this.$$animate.removeClass(this.$$element, Jo), this.$$animate.addClass(this.$$element, zo)
			},
			$setDirty: function() {
				this.$dirty = !0, this.$pristine = !1, this.$$animate.removeClass(this.$$element, zo), this.$$animate.addClass(this.$$element, Jo), this.$$parentForm.$setDirty()
			},
			$setUntouched: function() {
				this.$touched = !1, this.$untouched = !0, this.$$animate.setClass(this.$$element, Yo, Qo)
			},
			$setTouched: function() {
				this.$touched = !0, this.$untouched = !1, this.$$animate.setClass(this.$$element, Qo, Yo)
			},
			$rollbackViewValue: function() {
				this.$$timeout.cancel(this.$$pendingDebounce), this.$viewValue = this.$$lastCommittedViewValue, this.$render()
			},
			$validate: function() {
				if (!N(this.$modelValue)) {
					var e = this.$$lastCommittedViewValue,
						t = this.$$rawModelValue,
						n = this.$valid,
						r = this.$modelValue,
						i = this.$options.getOption("allowInvalid"),
						o = this;
					this.$$runValidators(t, e, (function(e) {
						i || n === e || (o.$modelValue = e ? t : void 0, o.$modelValue !== r && o.$$writeModelToScope())
					}))
				}
			},
			$$runValidators: function(e, t, n) {
				this.$$currentValidationRunId++;
				var r, i, o = this.$$currentValidationRunId,
					a = this;

				function s(e, t) {
					o === a.$$currentValidationRunId && a.$setValidity(e, t)
				}

				function u(e) {
					o === a.$$currentValidationRunId && n(e)
				}! function() {
					var e = a.$$parserName;
					return V(a.$$parserValid) ? (s(e, null), !0) : (a.$$parserValid || (T(a.$validators, (function(e, t) {
						s(t, null)
					})), T(a.$asyncValidators, (function(e, t) {
						s(t, null)
					}))), s(e, a.$$parserValid), a.$$parserValid)
				}() ? u(!1): function() {
					var n = !0;
					return T(a.$validators, (function(r, i) {
						var o = Boolean(r(e, t));
						n = n && o, s(i, o)
					})), !!n || (T(a.$asyncValidators, (function(e, t) {
						s(t, null)
					})), !1)
				}() ? (r = [], i = !0, T(a.$asyncValidators, (function(n, o) {
					var a = n(e, t);
					if (!X(a)) throw Xo("nopromise", "Expected asynchronous validator to return a promise but got '{0}' instead.", a);
					s(o, void 0), r.push(a.then((function() {
						s(o, !0)
					}), (function() {
						i = !1, s(o, !1)
					})))
				})), r.length ? a.$$q.all(r).then((function() {
					u(i)
				}), L) : u(!0)) : u(!1)
			},
			$commitViewValue: function() {
				var e = this.$viewValue;
				this.$$timeout.cancel(this.$$pendingDebounce), (this.$$lastCommittedViewValue !== e || "" === e && this.$$hasNativeValidators) && (this.$$updateEmptyClasses(e), this.$$lastCommittedViewValue = e, this.$pristine && this.$setDirty(), this.$$parseAndValidate())
			},
			$$parseAndValidate: function() {
				var e = this.$$lastCommittedViewValue,
					t = this;
				if (this.$$parserValid = !V(e) || void 0, this.$setValidity(this.$$parserName, null), this.$$parserName = "parse", this.$$parserValid)
					for (var n = 0; n < this.$parsers.length; n++)
						if (V(e = this.$parsers[n](e))) {
							this.$$parserValid = !1;
							break
						} N(this.$modelValue) && (this.$modelValue = this.$$ngModelGet(this.$$scope));
				var r = this.$modelValue,
					i = this.$options.getOption("allowInvalid");

				function o() {
					t.$modelValue !== r && t.$$writeModelToScope()
				}
				this.$$rawModelValue = e, i && (this.$modelValue = e, o()), this.$$runValidators(e, this.$$lastCommittedViewValue, (function(n) {
					i || (t.$modelValue = n ? e : void 0, o())
				}))
			},
			$$writeModelToScope: function() {
				this.$$ngModelSet(this.$$scope, this.$modelValue), T(this.$viewChangeListeners, (function(e) {
					try {
						e()
					} catch (e) {
						this.$$exceptionHandler(e)
					}
				}), this)
			},
			$setViewValue: function(e, t) {
				this.$viewValue = e, this.$options.getOption("updateOnDefault") && this.$$debounceViewValueCommit(t)
			},
			$$debounceViewValueCommit: function(e) {
				var t = this.$options.getOption("debounce");
				H(t[e]) ? t = t[e] : H(t.default) && -1 === this.$options.getOption("updateOn").indexOf(e) ? t = t.default : H(t["*"]) && (t = t["*"]), this.$$timeout.cancel(this.$$pendingDebounce);
				var n = this;
				t > 0 ? this.$$pendingDebounce = this.$$timeout((function() {
					n.$commitViewValue()
				}), t) : this.$$rootScope.$$phase ? this.$commitViewValue() : this.$$scope.$apply((function() {
					n.$commitViewValue()
				}))
			},
			$overrideModelOptions: function(e) {
				this.$options = this.$options.createChild(e), this.$$setUpdateOnEvents()
			},
			$processModelValue: function() {
				var e = this.$$format();
				this.$viewValue !== e && (this.$$updateEmptyClasses(e), this.$viewValue = this.$$lastCommittedViewValue = e, this.$render(), this.$$runValidators(this.$modelValue, this.$viewValue, L))
			},
			$$format: function() {
				for (var e = this.$formatters, t = e.length, n = this.$modelValue; t--;) n = e[t](n);
				return n
			},
			$$setModelValue: function(e) {
				this.$modelValue = this.$$rawModelValue = e, this.$$parserValid = void 0, this.$processModelValue()
			},
			$$setUpdateOnEvents: function() {
				this.$$updateEvents && this.$$element.off(this.$$updateEvents, this.$$updateEventHandler), this.$$updateEvents = this.$options.getOption("updateOn"), this.$$updateEvents && this.$$element.on(this.$$updateEvents, this.$$updateEventHandler)
			},
			$$updateEventHandler: function(e) {
				this.$$debounceViewValueCommit(e && e.type)
			}
		}, Zi({
			clazz: ea,
			set: function(e, t) {
				e[t] = !0
			},
			unset: function(e, t) {
				delete e[t]
			}
		});
		var ta, na = ["$rootScope", function(e) {
				return {
					restrict: "A",
					require: ["ngModel", "^?form", "^?ngModelOptions"],
					controller: ea,
					priority: 1,
					compile: function(t) {
						return t.addClass(zo).addClass(Yo).addClass(Go), {
							pre: function(e, t, n, r) {
								var i = r[0],
									o = r[1] || i.$$parentForm,
									a = r[2];
								a && (i.$options = a.$options), i.$$initGetterSetters(), o.$addControl(i), n.$observe("name", (function(e) {
									i.$name !== e && i.$$parentForm.$$renameControl(i, e)
								})), e.$on("$destroy", (function() {
									i.$$parentForm.$removeControl(i)
								}))
							},
							post: function(t, n, r, i) {
								var o = i[0];

								function a() {
									o.$setTouched()
								}
								o.$$setUpdateOnEvents(), n.on("blur", (function() {
									o.$touched || (e.$$phase ? t.$evalAsync(a) : t.$apply(a))
								}))
							}
						}
					}
				}
			}],
			ra = /(\s+|^)default(\s+|$)/;

		function ia(e) {
			this.$$options = e
		}
		ia.prototype = {
			getOption: function(e) {
				return this.$$options[e]
			},
			createChild: function(e) {
				var t = !1;
				return T(e = P({}, e), (function(n, r) {
					"$inherit" === n ? "*" === r ? t = !0 : (e[r] = this.$$options[r], "updateOn" === r && (e.updateOnDefault = this.$$options.updateOnDefault)) : "updateOn" === r && (e.updateOnDefault = !1, e[r] = te(n.replace(ra, (function() {
						return e.updateOnDefault = !0, " "
					}))))
				}), this), t && (delete e["*"], aa(e, this.$$options)), aa(e, ta.$$options), new ia(e)
			}
		}, ta = new ia({
			updateOn: "",
			updateOnDefault: !0,
			debounce: 0,
			getterSetter: !1,
			allowInvalid: !1,
			timezone: null
		});
		var oa = function() {
			function e(e, t) {
				this.$$attrs = e, this.$$scope = t
			}
			return e.$inject = ["$attrs", "$scope"], e.prototype = {
				$onInit: function() {
					var e = this.parentCtrl ? this.parentCtrl.$options : ta,
						t = this.$$scope.$eval(this.$$attrs.ngModelOptions);
					this.$options = e.createChild(t)
				}
			}, {
				restrict: "A",
				priority: 10,
				require: {
					parentCtrl: "?^^ngModelOptions"
				},
				bindToController: !0,
				controller: e
			}
		};

		function aa(e, t) {
			T(t, (function(t, n) {
				F(e[n]) || (e[n] = t)
			}))
		}
		var sa = ji({
				terminal: !0,
				priority: 1e3
			}),
			ua = o("ngOptions"),
			ca = /^\s*([\s\S]+?)(?:\s+as\s+([\s\S]+?))?(?:\s+group\s+by\s+([\s\S]+?))?(?:\s+disable\s+when\s+([\s\S]+?))?\s+for\s+(?:([$\w][$\w]*)|(?:\(\s*([$\w][$\w]*)\s*,\s*([$\w][$\w]*)\s*\)))\s+in\s+([\s\S]+?)(?:\s+track\s+by\s+([\s\S]+?))?$/,
			la = ["$compile", "$document", "$parse", function(t, n, r) {
				var i = e.document.createElement("option"),
					o = e.document.createElement("optgroup");
				return {
					restrict: "A",
					terminal: !0,
					require: ["select", "ngModel"],
					link: {
						pre: function(e, t, n, r) {
							r[0].registerOption = L
						},
						post: function(e, a, u, c) {
							for (var l = c[0], f = c[1], p = u.multiple, d = 0, h = a.children(), $ = h.length; d < $; d++)
								if ("" === h[d].value) {
									l.hasEmptyOption = !0, l.emptyOption = h.eq(d);
									break
								} a.empty();
							var v, m = !!l.emptyOption;
							s(i.cloneNode(!1)).val("?");
							var g = function(e, t, n) {
									var i = e.match(ca);
									if (!i) throw ua("iexp", "Expected expression in form of '_select_ (as _label_)? for (_key_,)?_value_ in _collection_' but got '{0}'. Element: {1}", e, Ee(t));
									var o = i[5] || i[7],
										a = i[6],
										s = / as /.test(i[0]) && i[1],
										u = i[9],
										c = r(i[2] ? i[1] : o),
										l = s && r(s) || c,
										f = u && r(u),
										p = u ? function(e, t) {
											return f(n, t)
										} : function(e) {
											return Vt(e)
										},
										d = function(e, t) {
											return p(e, y(e, t))
										},
										h = r(i[2] || i[1]),
										$ = r(i[3] || ""),
										v = r(i[4] || ""),
										m = r(i[8]),
										g = {},
										y = a ? function(e, t) {
											return g[a] = t, g[o] = e, g
										} : function(e) {
											return g[o] = e, g
										};

									function b(e, t, n, r, i) {
										this.selectValue = e, this.viewValue = t, this.label = n, this.group = r, this.disabled = i
									}

									function w(e) {
										var t;
										if (!a && S(e)) t = e;
										else
											for (var n in t = [], e) e.hasOwnProperty(n) && "$" !== n.charAt(0) && t.push(n);
										return t
									}
									return {
										trackBy: u,
										getTrackByValue: d,
										getWatchables: r(m, (function(e) {
											for (var t = [], r = w(e = e || []), o = r.length, a = 0; a < o; a++) {
												var s = e === r ? a : r[a],
													u = e[s],
													c = y(u, s),
													l = p(u, c);
												if (t.push(l), i[2] || i[1]) {
													var f = h(n, c);
													t.push(f)
												}
												if (i[4]) {
													var d = v(n, c);
													t.push(d)
												}
											}
											return t
										})),
										getOptions: function() {
											for (var e = [], t = {}, r = m(n) || [], i = w(r), o = i.length, a = 0; a < o; a++) {
												var s = r === i ? a : i[a],
													c = r[s],
													f = y(c, s),
													g = l(n, f),
													E = p(g, f),
													S = new b(E, g, h(n, f), $(n, f), v(n, f));
												e.push(S), t[E] = S
											}
											return {
												items: e,
												selectValueMap: t,
												getOptionFromViewValue: function(e) {
													return t[d(e)]
												},
												getViewValueFromOption: function(e) {
													return u ? se(e.viewValue) : e.viewValue
												}
											}
										}
									}
								}(u.ngOptions, a, e),
								y = n[0].createDocumentFragment();

							function b(e, t) {
								var n = i.cloneNode(!1);
								t.appendChild(n),
									function(e, t) {
										e.element = t, t.disabled = e.disabled, e.label !== t.label && (t.label = e.label, t.textContent = e.label), t.value = e.selectValue
									}(e, n)
							}

							function w(e) {
								var t = v.getOptionFromViewValue(e),
									n = t && t.element;
								return n && !n.selected && (n.selected = !0), t
							}
							l.generateUnknownOptionValue = function(e) {
								return "?"
							}, p ? (l.writeValue = function(e) {
								if (v) {
									var t = e && e.map(w) || [];
									v.items.forEach((function(e) {
										e.element.selected && !oe(t, e) && (e.element.selected = !1)
									}))
								}
							}, l.readValue = function() {
								var e = a.val() || [],
									t = [];
								return T(e, (function(e) {
									var n = v.selectValueMap[e];
									n && !n.disabled && t.push(v.getViewValueFromOption(n))
								})), t
							}, g.trackBy && e.$watchCollection((function() {
								if (W(f.$viewValue)) return f.$viewValue.map((function(e) {
									return g.getTrackByValue(e)
								}))
							}), (function() {
								f.$render()
							}))) : (l.writeValue = function(e) {
								if (v) {
									var t = a[0].options[a[0].selectedIndex],
										n = v.getOptionFromViewValue(e);
									t && t.removeAttribute("selected"), n ? (a[0].value !== n.selectValue && (l.removeUnknownOption(), a[0].value = n.selectValue, n.element.selected = !0), n.element.setAttribute("selected", "selected")) : l.selectUnknownOrEmptyOption(e)
								}
							}, l.readValue = function() {
								var e = v.selectValueMap[a.val()];
								return e && !e.disabled ? (l.unselectEmptyOption(), l.removeUnknownOption(), v.getViewValueFromOption(e)) : null
							}, g.trackBy && e.$watch((function() {
								return g.getTrackByValue(f.$viewValue)
							}), (function() {
								f.$render()
							}))), m && (t(l.emptyOption)(e), a.prepend(l.emptyOption), 8 === l.emptyOption[0].nodeType ? (l.hasEmptyOption = !1, l.registerOption = function(e, t) {
								"" === t.val() && (l.hasEmptyOption = !0, l.emptyOption = t, l.emptyOption.removeClass("ng-scope"), f.$render(), t.on("$destroy", (function() {
									var e = l.$isEmptyOptionSelected();
									l.hasEmptyOption = !1, l.emptyOption = void 0, e && f.$render()
								})))
							}) : l.emptyOption.removeClass("ng-scope")), e.$watchCollection(g.getWatchables, (function() {
								var e = v && l.readValue();
								if (v)
									for (var t = v.items.length - 1; t >= 0; t--) {
										var n = v.items[t];
										F(n.group) ? Ct(n.element.parentNode) : Ct(n.element)
									}
								v = g.getOptions();
								var r = {};
								if (v.items.forEach((function(e) {
										var t;
										F(e.group) ? ((t = r[e.group]) || (t = o.cloneNode(!1), y.appendChild(t), t.label = null === e.group ? "null" : e.group, r[e.group] = t), b(e, t)) : b(e, y)
									})), a[0].appendChild(y), f.$render(), !f.$isEmpty(e)) {
									var i = l.readValue();
									(g.trackBy || p ? ce(e, i) : e === i) || (f.$setViewValue(i), f.$render())
								}
							}))
						}
					}
				}
			}],
			fa = ["$locale", "$interpolate", "$log", function(e, t, n) {
				var r = /{}/g,
					i = /^when(Minus)?(.+)$/;
				return {
					link: function(o, a, s) {
						var u, c = s.count,
							l = s.$attr.when && a.attr(s.$attr.when),
							f = s.offset || 0,
							p = o.$eval(l) || {},
							h = {},
							$ = t.startSymbol(),
							v = t.endSymbol(),
							m = $ + c + "-" + f + v,
							g = w.noop;

						function y(e) {
							a.text(e || "")
						}
						T(s, (function(e, t) {
							var n = i.exec(t);
							if (n) {
								var r = (n[1] ? "-" : "") + d(n[2]);
								p[r] = a.attr(s.$attr[t])
							}
						})), T(p, (function(e, n) {
							h[n] = t(e.replace(r, m))
						})), o.$watch(c, (function(t) {
							var r = parseFloat(t),
								i = N(r);
							if (i || r in p || (r = e.pluralCat(r - f)), !(r === u || i && N(u))) {
								g();
								var a = h[r];
								V(a) ? (null != t && n.debug("ngPluralize: no rule defined for '" + r + "' in " + l), g = L, y()) : g = o.$watch(a, y), u = r
							}
						}))
					}
				}
			}],
			pa = o("ngRef"),
			da = ["$parse", function(e) {
				return {
					priority: -1,
					restrict: "A",
					compile: function(t, n) {
						var r = wn(ie(t)),
							i = e(n.ngRef),
							o = i.assign || function() {
								throw pa("nonassign", 'Expression in ngRef="{0}" is non-assignable!', n.ngRef)
							};
						return function(e, t, a) {
							var s;
							if (a.hasOwnProperty("ngRefRead")) {
								if ("$element" === a.ngRefRead) s = t;
								else if (!(s = t.data("$" + a.ngRefRead + "Controller"))) throw pa("noctrl", 'The controller for ngRefRead="{0}" could not be found on ngRef="{1}"', a.ngRefRead, n.ngRef)
							} else s = t.data("$" + r + "Controller");
							o(e, s = s || t), t.on("$destroy", (function() {
								i(e) === s && o(e, null)
							}))
						}
					}
				}
			}],
			ha = ["$parse", "$animate", "$compile", function(e, t, n) {
				var r = "$$NG_REMOVED",
					i = o("ngRepeat"),
					a = function(e, t, n, r, i, o, a) {
						e[n] = r, i && (e[i] = o), e.$index = t, e.$first = 0 === t, e.$last = t === a - 1, e.$middle = !(e.$first || e.$last), e.$odd = !(e.$even = !(1 & t))
					},
					s = function(e) {
						return e.clone[0]
					},
					u = function(e) {
						return e.clone[e.clone.length - 1]
					},
					c = function(e, t, n) {
						return Vt(n)
					},
					l = function(e, t) {
						return t
					};
				return {
					restrict: "A",
					multiElement: !0,
					transclude: "element",
					priority: 1e3,
					terminal: !0,
					$$tlb: !0,
					compile: function(o, f) {
						var d = f.ngRepeat,
							h = n.$$createComment("end ngRepeat", d),
							$ = d.match(/^\s*([\s\S]+?)\s+in\s+([\s\S]+?)(?:\s+as\s+([\s\S]+?))?(?:\s+track\s+by\s+([\s\S]+?))?\s*$/);
						if (!$) throw i("iexp", "Expected expression in form of '_item_ in _collection_[ track by _id_]' but got '{0}'.", d);
						var v = $[1],
							m = $[2],
							g = $[3],
							y = $[4];
						if (!($ = v.match(/^(?:(\s*[$\w]+)|\(\s*([$\w]+)\s*,\s*([$\w]+)\s*\))$/))) throw i("iidexp", "'_item_' in '_item_ in _collection_' should be an identifier or '(_key_, _value_)' expression, but got '{0}'.", v);
						var b, w = $[3] || $[1],
							E = $[2];
						if (g && (!/^[$a-zA-Z_][$a-zA-Z0-9_]*$/.test(g) || /^(null|undefined|this|\$index|\$first|\$middle|\$last|\$even|\$odd|\$parent|\$root|\$id)$/.test(g))) throw i("badident", "alias '{0}' is invalid --- must be a valid JS identifier which is not a reserved name.", g);
						if (y) {
							var x = {
									$id: Vt
								},
								O = e(y);
							b = function(e, t, n, r) {
								return E && (x[E] = t), x[w] = n, x.$index = r, O(e, x)
							}
						}
						return function(e, n, o, f, $) {
							var v = Fe();
							e.$watchCollection(m, (function(o) {
								var f, m, y, O, A, R, C, P, I, M, N, k, L = n[0],
									U = Fe();
								if (g && (e[g] = o), S(o)) I = o, P = b || c;
								else
									for (var _ in P = b || l, I = [], o) p.call(o, _) && "$" !== _.charAt(0) && I.push(_);
								for (O = I.length, N = new Array(O), f = 0; f < O; f++)
									if (A = o === I ? f : I[f], R = o[A], C = P(e, A, R, f), v[C]) M = v[C], delete v[C], U[C] = M, N[f] = M;
									else {
										if (U[C]) throw T(N, (function(e) {
											e && e.scope && (v[e.id] = e)
										})), i("dupes", "Duplicates in a repeater are not allowed. Use 'track by' expression to specify unique keys. Repeater: {0}, Duplicate key: {1}, Duplicate value: {2}", d, C, R);
										N[f] = {
											id: C,
											scope: void 0,
											clone: void 0
										}, U[C] = !0
									} for (var D in x && (x[w] = void 0), v) {
									if (k = Ve((M = v[D]).clone), t.leave(k), k[0].parentNode)
										for (f = 0, m = k.length; f < m; f++) k[f][r] = !0;
									M.scope.$destroy()
								}
								for (f = 0; f < O; f++)
									if (A = o === I ? f : I[f], R = o[A], (M = N[f]).scope) {
										y = L;
										do {
											y = y.nextSibling
										} while (y && y[r]);
										s(M) !== y && t.move(Ve(M.clone), null, L), L = u(M), a(M.scope, f, w, R, E, A, O)
									} else $((function(e, n) {
										M.scope = n;
										var r = h.cloneNode(!1);
										e[e.length++] = r, t.enter(e, null, L), L = r, M.clone = e, U[M.id] = M, a(M.scope, f, w, R, E, A, O)
									}));
								v = U
							}))
						}
					}
				}
			}],
			$a = "ng-hide",
			va = "ng-hide-animate",
			ma = ["$animate", function(e) {
				return {
					restrict: "A",
					multiElement: !0,
					link: function(t, n, r) {
						t.$watch(r.ngShow, (function(t) {
							e[t ? "removeClass" : "addClass"](n, $a, {
								tempClasses: va
							})
						}))
					}
				}
			}],
			ga = ["$animate", function(e) {
				return {
					restrict: "A",
					multiElement: !0,
					link: function(t, n, r) {
						t.$watch(r.ngHide, (function(t) {
							e[t ? "addClass" : "removeClass"](n, $a, {
								tempClasses: va
							})
						}))
					}
				}
			}],
			ya = ji((function(e, t, n) {
				e.$watchCollection(n.ngStyle, (function(e, n) {
					n && e !== n && T(n, (function(e, n) {
						t.css(n, "")
					})), e && t.css(e)
				}))
			})),
			ba = ["$animate", "$compile", function(e, t) {
				return {
					require: "ngSwitch",
					controller: ["$scope", function() {
						this.cases = {}
					}],
					link: function(n, r, i, o) {
						var a = i.ngSwitch || i.on,
							s = [],
							u = [],
							c = [],
							l = [],
							f = function(e, t) {
								return function(n) {
									!1 !== n && e.splice(t, 1)
								}
							};
						n.$watch(a, (function(n) {
							for (var r, i; c.length;) e.cancel(c.pop());
							for (r = 0, i = l.length; r < i; ++r) {
								var a = Ve(u[r].clone);
								l[r].$destroy(), (c[r] = e.leave(a)).done(f(c, r))
							}
							u.length = 0, l.length = 0, (s = o.cases["!" + n] || o.cases["?"]) && T(s, (function(n) {
								n.transclude((function(r, i) {
									l.push(i);
									var o = n.element;
									r[r.length++] = t.$$createComment("end ngSwitchWhen");
									var a = {
										clone: r
									};
									u.push(a), e.enter(r, o.parent(), o)
								}))
							}))
						}))
					}
				}
			}],
			wa = ji({
				transclude: "element",
				priority: 1200,
				require: "^ngSwitch",
				multiElement: !0,
				link: function(e, t, n, r, i) {
					var o = n.ngSwitchWhen.split(n.ngSwitchWhenSeparator).sort().filter((function(e, t, n) {
						return n[t - 1] !== e
					}));
					T(o, (function(e) {
						r.cases["!" + e] = r.cases["!" + e] || [], r.cases["!" + e].push({
							transclude: i,
							element: t
						})
					}))
				}
			}),
			Ea = ji({
				transclude: "element",
				priority: 1200,
				require: "^ngSwitch",
				multiElement: !0,
				link: function(e, t, n, r, i) {
					r.cases["?"] = r.cases["?"] || [], r.cases["?"].push({
						transclude: i,
						element: t
					})
				}
			}),
			Sa = o("ngTransclude"),
			Ta = ["$compile", function(e) {
				return {
					restrict: "EAC",
					compile: function(t) {
						var n = e(t.contents());
						return t.empty(),
							function(e, t, r, i, o) {
								if (!o) throw Sa("orphan", "Illegal use of ngTransclude directive in the template! No parent directive that requires a transclusion found. Element: {0}", Ee(t));
								r.ngTransclude === r.$attr.ngTransclude && (r.ngTransclude = "");
								var a = r.ngTransclude || r.ngTranscludeSlot;

								function s() {
									n(e, (function(e) {
										t.append(e)
									}))
								}
								o((function(e, n) {
									e.length && function(e) {
										for (var t = 0, n = e.length; t < n; t++) {
											var r = e[t];
											if (r.nodeType !== qe || r.nodeValue.trim()) return !0
										}
									}(e) ? t.append(e) : (s(), n.$destroy())
								}), null, a), a && !o.isSlotFilled(a) && s()
							}
					}
				}
			}],
			xa = ["$templateCache", function(e) {
				return {
					restrict: "E",
					terminal: !0,
					compile: function(t, n) {
						if ("text/ng-template" === n.type) {
							var r = n.id,
								i = t[0].text;
							e.put(r, i)
						}
					}
				}
			}],
			Oa = {
				$setViewValue: L,
				$render: L
			};

		function Aa(e, t) {
			e.prop("selected", t), e.attr("selected", t)
		}
		var Ra = ["$element", "$scope", function(t, n) {
				var r = this,
					i = new qt;
				r.selectValueMap = {}, r.ngModelCtrl = Oa, r.multiple = !1, r.unknownOption = s(e.document.createElement("option")), r.hasEmptyOption = !1, r.emptyOption = void 0, r.renderUnknownOption = function(e) {
					var n = r.generateUnknownOptionValue(e);
					r.unknownOption.val(n), t.prepend(r.unknownOption), Aa(r.unknownOption, !0), t.val(n)
				}, r.updateUnknownOption = function(e) {
					var n = r.generateUnknownOptionValue(e);
					r.unknownOption.val(n), Aa(r.unknownOption, !0), t.val(n)
				}, r.generateUnknownOptionValue = function(e) {
					return "? " + Vt(e) + " ?"
				}, r.removeUnknownOption = function() {
					r.unknownOption.parent() && r.unknownOption.remove()
				}, r.selectEmptyOption = function() {
					r.emptyOption && (t.val(""), Aa(r.emptyOption, !0))
				}, r.unselectEmptyOption = function() {
					r.hasEmptyOption && Aa(r.emptyOption, !1)
				}, n.$on("$destroy", (function() {
					r.renderUnknownOption = L
				})), r.readValue = function() {
					var e = t.val(),
						n = e in r.selectValueMap ? r.selectValueMap[e] : e;
					return r.hasOption(n) ? n : null
				}, r.writeValue = function(e) {
					var n = t[0].options[t[0].selectedIndex];
					if (n && Aa(s(n), !1), r.hasOption(e)) {
						r.removeUnknownOption();
						var i = Vt(e);
						t.val(i in r.selectValueMap ? i : e);
						var o = t[0].options[t[0].selectedIndex];
						Aa(s(o), !0)
					} else r.selectUnknownOrEmptyOption(e)
				}, r.addOption = function(e, t) {
					if (8 !== t[0].nodeType) {
						De(e, '"option value"'), "" === e && (r.hasEmptyOption = !0, r.emptyOption = t);
						var n = i.get(e) || 0;
						i.set(e, n + 1), a()
					}
				}, r.removeOption = function(e) {
					var t = i.get(e);
					t && (1 === t ? (i.delete(e), "" === e && (r.hasEmptyOption = !1, r.emptyOption = void 0)) : i.set(e, t - 1))
				}, r.hasOption = function(e) {
					return !!i.get(e)
				}, r.$hasEmptyOption = function() {
					return r.hasEmptyOption
				}, r.$isUnknownOptionSelected = function() {
					return t[0].options[0] === r.unknownOption[0]
				}, r.$isEmptyOptionSelected = function() {
					return r.hasEmptyOption && t[0].options[t[0].selectedIndex] === r.emptyOption[0]
				}, r.selectUnknownOrEmptyOption = function(e) {
					null == e && r.emptyOption ? (r.removeUnknownOption(), r.selectEmptyOption()) : r.unknownOption.parent().length ? r.updateUnknownOption(e) : r.renderUnknownOption(e)
				};
				var o = !1;

				function a() {
					o || (o = !0, n.$$postDigest((function() {
						o = !1, r.ngModelCtrl.$render()
					})))
				}
				var u = !1;

				function c(e) {
					u || (u = !0, n.$$postDigest((function() {
						n.$$destroyed || (u = !1, r.ngModelCtrl.$setViewValue(r.readValue()), e && r.ngModelCtrl.$render())
					})))
				}
				r.registerOption = function(e, t, n, i, o) {
					var s, u;
					n.$attr.ngValue ? n.$observe("value", (function(e) {
						var n, i = t.prop("selected");
						F(u) && (r.removeOption(s), delete r.selectValueMap[u], n = !0), u = Vt(e), s = e, r.selectValueMap[u] = e, r.addOption(e, t), t.attr("value", u), n && i && c()
					})) : i ? n.$observe("value", (function(e) {
						var n;
						r.readValue();
						var i = t.prop("selected");
						F(s) && (r.removeOption(s), n = !0), s = e, r.addOption(e, t), n && i && c()
					})) : o ? e.$watch(o, (function(e, i) {
						n.$set("value", e);
						var o = t.prop("selected");
						i !== e && r.removeOption(i), r.addOption(e, t), i && o && c()
					})) : r.addOption(n.value, t), n.$observe("disabled", (function(e) {
						("true" === e || e && t.prop("selected")) && (r.multiple ? c(!0) : (r.ngModelCtrl.$setViewValue(null), r.ngModelCtrl.$render()))
					})), t.on("$destroy", (function() {
						var e = r.readValue(),
							t = n.value;
						r.removeOption(t), a(), (r.multiple && e && -1 !== e.indexOf(t) || e === t) && c(!0)
					}))
				}
			}],
			Ca = function() {
				return {
					restrict: "E",
					require: ["select", "?ngModel"],
					controller: Ra,
					priority: 1,
					link: {
						pre: function(e, t, n, r) {
							var i = r[0],
								o = r[1];
							if (o) {
								if (i.ngModelCtrl = o, t.on("change", (function() {
										i.removeUnknownOption(), e.$apply((function() {
											o.$setViewValue(i.readValue())
										}))
									})), n.multiple) {
									i.multiple = !0, i.readValue = function() {
										var e = [];
										return T(t.find("option"), (function(t) {
											if (t.selected && !t.disabled) {
												var n = t.value;
												e.push(n in i.selectValueMap ? i.selectValueMap[n] : n)
											}
										})), e
									}, i.writeValue = function(e) {
										T(t.find("option"), (function(t) {
											var n = !!e && (oe(e, t.value) || oe(e, i.selectValueMap[t.value]));
											n !== t.selected && Aa(s(t), n)
										}))
									};
									var a, u = NaN;
									e.$watch((function() {
										u !== o.$viewValue || ce(a, o.$viewValue) || (a = Be(o.$viewValue), o.$render()), u = o.$viewValue
									})), o.$isEmpty = function(e) {
										return !e || 0 === e.length
									}
								}
							} else i.registerOption = L
						},
						post: function(e, t, n, r) {
							var i = r[1];
							if (i) {
								var o = r[0];
								i.$render = function() {
									o.writeValue(i.$viewValue)
								}
							}
						}
					}
				}
			},
			Pa = ["$interpolate", function(e) {
				return {
					restrict: "E",
					priority: 100,
					compile: function(t, n) {
						var r, i;
						return F(n.ngValue) || (F(n.value) ? r = e(n.value, !0) : (i = e(t.text(), !0)) || n.$set("value", t.text())),
							function(e, t, n) {
								var o = "$selectController",
									a = t.parent(),
									s = a.data(o) || a.parent().data(o);
								s && s.registerOption(e, t, n, r, i)
							}
					}
				}
			}],
			Ia = ["$parse", function(e) {
				return {
					restrict: "A",
					require: "?ngModel",
					link: function(t, n, r, i) {
						if (i) {
							var o = r.hasOwnProperty("required") || e(r.ngRequired)(t);
							r.ngRequired || (r.required = !0), i.$validators.required = function(e, t) {
								return !o || !i.$isEmpty(t)
							}, r.$observe("required", (function(e) {
								o !== e && (o = e, i.$validate())
							}))
						}
					}
				}
			}],
			Ma = ["$parse", function(e) {
				return {
					restrict: "A",
					require: "?ngModel",
					compile: function(t, n) {
						var r, i;
						return n.ngPattern && (r = n.ngPattern, i = "/" === n.ngPattern.charAt(0) && l.test(n.ngPattern) ? function() {
								return n.ngPattern
							} : e(n.ngPattern)),
							function(e, t, n, o) {
								if (o) {
									var a = n.pattern;
									n.ngPattern ? a = i(e) : r = n.pattern;
									var s = La(a, r, t);
									n.$observe("pattern", (function(e) {
										var n = s;
										s = La(e, r, t), (n && n.toString()) !== (s && s.toString()) && o.$validate()
									})), o.$validators.pattern = function(e, t) {
										return o.$isEmpty(t) || V(s) || s.test(t)
									}
								}
							}
					}
				}
			}],
			Na = ["$parse", function(e) {
				return {
					restrict: "A",
					require: "?ngModel",
					link: function(t, n, r, i) {
						if (i) {
							var o = r.maxlength || e(r.ngMaxlength)(t),
								a = Ua(o);
							r.$observe("maxlength", (function(e) {
								o !== e && (a = Ua(e), o = e, i.$validate())
							})), i.$validators.maxlength = function(e, t) {
								return a < 0 || i.$isEmpty(t) || t.length <= a
							}
						}
					}
				}
			}],
			ka = ["$parse", function(e) {
				return {
					restrict: "A",
					require: "?ngModel",
					link: function(t, n, r, i) {
						if (i) {
							var o = r.minlength || e(r.ngMinlength)(t),
								a = Ua(o) || -1;
							r.$observe("minlength", (function(e) {
								o !== e && (a = Ua(e) || -1, o = e, i.$validate())
							})), i.$validators.minlength = function(e, t) {
								return i.$isEmpty(t) || t.length >= a
							}
						}
					}
				}
			}];

		function La(e, t, n) {
			if (e) {
				if (B(e) && (e = new RegExp("^" + e + "$")), !e.test) throw o("ngPattern")("noregexp", "Expected {0} to be a RegExp but was {1}. Element: {2}", t, e, Ee(n));
				return e
			}
		}

		function Ua(e) {
			var t = M(e);
			return N(t) ? -1 : t
		}
		e.angular.bootstrap ? e.console && console.log("WARNING: Tried to load AngularJS more than once.") : (function() {
			var t;
			if (!ke) {
				var n = fe();
				(u = V(n) ? e.jQuery : n ? e[n] : void 0) && u.fn.on ? (s = u, P(u.fn, {
					scope: It.scope,
					isolateScope: It.isolateScope,
					controller: It.controller,
					injector: It.injector,
					inheritedData: It.inheritedData
				})) : s = dt, t = s.cleanData, s.cleanData = function(e) {
					for (var n, r, i = 0; null != (r = e[i]); i++)(n = (s._data(r) || {}).events) && n.$destroy && s(r).triggerHandler("$destroy");
					t(e)
				}, w.element = s, ke = !0
			}
		}(), function(t) {
			P(t, {
				errorHandlingConfig: n,
				bootstrap: Ce,
				copy: se,
				extend: P,
				merge: I,
				equals: ce,
				element: s,
				forEach: T,
				injector: Zt,
				noop: L,
				bind: he,
				toJson: ve,
				fromJson: me,
				identity: U,
				isUndefined: V,
				isDefined: F,
				isString: B,
				isFunction: J,
				isObject: j,
				isNumber: H,
				isElement: re,
				isArray: W,
				version: Ge,
				isDate: G,
				callbacks: {
					$$counter: 0
				},
				getTestability: Ie,
				reloadWithDebugInfo: Pe,
				UNSAFE_restoreLegacyJqLiteXHTMLReplacement: Le,
				$$minErr: o,
				$$csp: le,
				$$encodeUriSegment: xe,
				$$encodeUriQuery: Oe,
				$$lowercase: d,
				$$stringify: je,
				$$uppercase: h
			}), c = function(e) {
				var t = o("$injector"),
					n = o("ng");

				function r(e, t, n) {
					return e[t] || (e[t] = n())
				}
				var i = r(e, "angular", Object);
				return i.$$minErr = i.$$minErr || o, r(i, "module", (function() {
					var e = {};
					return function(i, o, a) {
						var s = {};
						return function(e) {
							if ("hasOwnProperty" === e) throw n("badname", "hasOwnProperty is not a valid {0} name", "module")
						}(i), o && e.hasOwnProperty(i) && (e[i] = null), r(e, i, (function() {
							if (!o) throw t("nomod", "Module '{0}' is not available! You either misspelled the module name or forgot to load it. If registering a module ensure that you specify the dependencies as the second argument.", i);
							var e = [],
								r = [],
								u = [],
								c = f("$injector", "invoke", "push", r),
								l = {
									_invokeQueue: e,
									_configBlocks: r,
									_runBlocks: u,
									info: function(e) {
										if (F(e)) {
											if (!j(e)) throw n("aobj", "Argument '{0}' must be an object", "value");
											return s = e, this
										}
										return s
									},
									requires: o,
									name: i,
									provider: p("$provide", "provider"),
									factory: p("$provide", "factory"),
									service: p("$provide", "service"),
									value: f("$provide", "value"),
									constant: f("$provide", "constant", "unshift"),
									decorator: p("$provide", "decorator", r),
									animation: p("$animateProvider", "register"),
									filter: p("$filterProvider", "register"),
									controller: p("$controllerProvider", "register"),
									directive: p("$compileProvider", "directive"),
									component: p("$compileProvider", "component"),
									config: c,
									run: function(e) {
										return u.push(e), this
									}
								};
							return a && c(a), l;

							function f(t, n, r, i) {
								return i || (i = e),
									function() {
										return i[r || "push"]([t, n, arguments]), l
									}
							}

							function p(t, n, r) {
								return r || (r = e),
									function(e, o) {
										return o && J(o) && (o.$$moduleName = i), r.push([t, n, arguments]), l
									}
							}
						}))
					}
				}))
			}(e), c("ng", ["ngLocale"], ["$provide", function(e) {
				e.provider({
					$$sanitizeUri: Hr
				}), e.provider("$compile", mn).directive({
					a: qi,
					input: So,
					textarea: So,
					form: Yi,
					script: xa,
					select: Ca,
					option: Pa,
					ngBind: Ao,
					ngBindHtml: Co,
					ngBindTemplate: Ro,
					ngClass: Mo,
					ngClassEven: ko,
					ngClassOdd: No,
					ngCloak: Lo,
					ngController: Uo,
					ngForm: Qi,
					ngHide: ga,
					ngIf: Fo,
					ngInclude: jo,
					ngInit: Bo,
					ngNonBindable: sa,
					ngPluralize: fa,
					ngRef: da,
					ngRepeat: ha,
					ngShow: ma,
					ngStyle: ya,
					ngSwitch: ba,
					ngSwitchWhen: wa,
					ngSwitchDefault: Ea,
					ngOptions: la,
					ngTransclude: Ta,
					ngModel: na,
					ngList: Ho,
					ngChange: Po,
					pattern: Ma,
					ngPattern: Ma,
					required: Ia,
					ngRequired: Ia,
					minlength: ka,
					ngMinlength: ka,
					maxlength: Na,
					ngMaxlength: Na,
					ngValue: Oo,
					ngModelOptions: oa
				}).directive({
					ngInclude: qo,
					input: To
				}).directive(Bi).directive(_o), e.provider({
					$anchorScroll: Xt,
					$animate: sn,
					$animateCss: ln,
					$$animateJs: on,
					$$animateQueue: an,
					$$AnimateRunner: cn,
					$$animateAsyncRun: un,
					$browser: pn,
					$cacheFactory: dn,
					$controller: An,
					$document: Rn,
					$$isDocumentHidden: Cn,
					$exceptionHandler: Pn,
					$filter: $i,
					$$forceReflow: In,
					$interpolate: Qn,
					$interval: Zn,
					$$intervalFactory: Xn,
					$http: Wn,
					$httpParamSerializer: Vn,
					$httpParamSerializerJQLike: Fn,
					$httpBackend: Jn,
					$xhrFactory: zn,
					$jsonpCallbacks: er,
					$location: vr,
					$log: mr,
					$parse: Lr,
					$rootScope: Br,
					$q: Ur,
					$$q: _r,
					$sce: Kr,
					$sceDelegate: Qr,
					$sniffer: Zr,
					$$taskTrackerFactory: Xr,
					$templateCache: hn,
					$templateRequest: ni,
					$$testability: ri,
					$timeout: oi,
					$window: pi,
					$$rAF: qr,
					$$jqLite: Dt,
					$$Map: Bt,
					$$cookieReader: hi
				})
			}]).info({
				angularVersion: "1.8.3"
			})
		}(w), w.module("ngLocale", [], ["$provide", function(e) {
			e.value("$locale", {
				DATETIME_FORMATS: {
					AMPMS: ["AM", "PM"],
					DAY: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
					ERANAMES: ["Before Christ", "Anno Domini"],
					ERAS: ["BC", "AD"],
					FIRSTDAYOFWEEK: 6,
					MONTH: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
					SHORTDAY: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
					SHORTMONTH: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
					STANDALONEMONTH: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
					WEEKENDRANGE: [5, 6],
					fullDate: "EEEE, MMMM d, y",
					longDate: "MMMM d, y",
					medium: "MMM d, y h:mm:ss a",
					mediumDate: "MMM d, y",
					mediumTime: "h:mm:ss a",
					short: "M/d/yy h:mm a",
					shortDate: "M/d/yy",
					shortTime: "h:mm a"
				},
				NUMBER_FORMATS: {
					CURRENCY_SYM: "$",
					DECIMAL_SEP: ".",
					GROUP_SEP: ",",
					PATTERNS: [{
						gSize: 3,
						lgSize: 3,
						maxFrac: 3,
						minFrac: 0,
						minInt: 1,
						negPre: "-",
						negSuf: "",
						posPre: "",
						posSuf: ""
					}, {
						gSize: 3,
						lgSize: 3,
						maxFrac: 2,
						minFrac: 2,
						minInt: 1,
						negPre: "-¤",
						negSuf: "",
						posPre: "¤",
						posSuf: ""
					}]
				},
				id: "en-us",
				localeID: "en_US",
				pluralCat: function(e, t) {
					var n = 0 | e,
						r = function(e, t) {
							var n = t;
							void 0 === n && (n = Math.min(function(e) {
								var t = (e += "").indexOf(".");
								return -1 == t ? 0 : e.length - t - 1
							}(e), 3));
							var r = Math.pow(10, n);
							return {
								v: n,
								f: (e * r | 0) % r
							}
						}(e, t);
					return 1 == n && 0 == r.v ? "one" : "other"
				}
			})
		}]), s((function() {
			! function(t, n) {
				var r, i, o = {};
				if (T(Ae, (function(e) {
						var n = e + "app";
						!r && t.hasAttribute && t.hasAttribute(n) && (r = t, i = t.getAttribute(n))
					})), T(Ae, (function(e) {
						var n, o = e + "app";
						!r && (n = t.querySelector("[" + o.replace(":", "\\:") + "]")) && (r = n, i = n.getAttribute(o))
					})), r) {
					if (!Re) return void e.console.error("AngularJS: disabling automatic bootstrap. <script> protocol indicates an extension, document.location.href does not match.");
					o.strictDi = null !== function(e) {
						var t, n, r = Ae.length;
						for (n = 0; n < r; ++n)
							if (t = Ae[n] + "strict-di", B(t = e.getAttribute(t))) return t;
						return null
					}(r), n(r, i ? [i] : [], o)
				}
			}(e.document, Ce)
		})))
	}(window), !window.angular.$$csp().noInlineStyle && window.angular.element(document.head).prepend(window.angular.element("<style>").text('@charset "UTF-8";[ng\\:cloak],[ng-cloak],[data-ng-cloak],[x-ng-cloak],.ng-cloak,.x-ng-cloak,.ng-hide:not(.ng-hide-animate){display:none !important;}ng\\:form{display:block;}.ng-animate-shim{visibility:hidden;}.ng-anchor{position:absolute;}'));
	var Qe = o(angular).module("presence", []).config(["languageResourceProvider", function(e) {
			if (window.Roblox) {
				var t = (new Roblox.TranslationResourceProvider).getTranslationResource("Common.Presence");
				e.setTranslationResources([t])
			}
		}]),
		Ke = {
			template: "\n    <div ng-if='$ctrl.statusLabelTranslation === \"Label.Invisible\"' class='avatar-status' title='{{ \"Label.Invisible\" | translate }}' ng-class='$ctrl.statusClass'>\n      <span class='icon-{{$ctrl.statusClass}}'></span>\n    </div>\n    <div ng-if='$ctrl.statusLabelTranslation !== \"Label.Invisible\"' class='avatar-status' title='{{$ctrl.presence.lastLocation}}' ng-class='$ctrl.statusClass'>\n      <span class='icon-{{$ctrl.statusClass}}'></span>\n    </div>\n  ",
			controller: "presenceStatusController",
			bindings: {
				userId: "<"
			}
		};
	Qe.component("presenceStatusIcon", Ke);
	var Ze = {
		template: "\n    <span ng-class='$ctrl.className' ng-if='$ctrl.statusLabelTranslation' ng-bind='$ctrl.statusLabelTranslation | translate'></span>\n    <a ng-class='$ctrl.linkClassName' ng-if='!$ctrl.statusLabelTranslation && $ctrl.presence.rootPlaceId' href='/games/{{$ctrl.presence.rootPlaceId}}' ng-bind='$ctrl.presence.lastLocation'>\n    <span ng-class='$ctrl.className' ng-if='!$ctrl.statusLabelTranslation && !$ctrl.presence.rootPlaceId' ng-bind=\"'Label.Online' | translate\"></span>\n  ",
		controller: "presenceStatusController",
		bindings: {
			userId: "<",
			linkClassName: "@",
			className: "@"
		}
	};

	function Xe(e) {
		var t = this;
		this.presence = {
			userId: this.userId,
			userPresenceType: i.Offline,
			lastLocation: ""
		}, this.statusClass = "", this.statusLabelTranslation = "", e.$watch((function() {
			return t.userId
		}), (function() {
			Je.getPresenceProvider().subscribeToPresenceChanges([t.userId], (function(n) {
				e.$evalAsync((function() {
					t.presence = n, t.statusClass = fe.presenceStatusToClassName[t.presence.userPresenceType], t.statusLabelTranslation = fe.presenceStatusToAngularTranslation[t.presence.userPresenceType]
				}))
			}), !0)
		}))
	}
	Qe.component("presenceStatusLabel", Ze), Qe.controller("presenceStatusController", ["$scope", Xe]);
	var et = {
			PresenceType: i,
			PresenceStatusIcon: function(e) {
				var t, r, o = e.userId,
					a = e.initialPresence,
					s = e.className,
					c = e.translate,
					l = Ye(o, a),
					f = null !== (t = null == l ? void 0 : l.userPresenceType) && void 0 !== t ? t : i.Offline,
					p = null !== (r = null == l ? void 0 : l.lastLocation) && void 0 !== r ? r : "";
				c && f === i.Invisible && (p = c("Label.Invisible"));
				var d = fe.presenceStatusToClassName[f];
				return f !== i.Offline ? n.createElement("span", {
					"data-testid": "presence-icon",
					title: p,
					className: u(s, d, "icon-".concat(d))
				}) : null
			},
			PresenceStatusLabel: function(e) {
				var t, r, o = e.userId,
					a = e.translate,
					s = e.linkUrlGetter,
					c = e.linkClassNames,
					l = Ye(o, void 0);
				if (l.userPresenceType === i.Offline) return a("Label.Offline");
				if (l.userPresenceType === i.Online) return a("Label.Online");
				if (l.userPresenceType === i.Game) {
					if (l.rootPlaceId) {
						var f = s ? s(l.rootPlaceId) : "".concat(null === (r = null === (t = window.Roblox) || void 0 === t ? void 0 : t.EnvironmentUrls) || void 0 === r ? void 0 : r.websiteUrl, "/games/").concat(l.rootPlaceId);
						return n.createElement("a", {
							href: f,
							className: u(null != c ? c : [])
						}, l.lastLocation)
					}
					return a("Label.Online")
				}
				return l.userPresenceType === i.Studio ? l.lastLocation : l.userPresenceType === i.Invisible ? a("Label.Invisible") : void 0
			},
			usePresence: Ye,
			presenceModule: {
				presenceModule: Qe,
				presenceStatusIcon: Ke,
				presenceStatusLabel: Ze,
				presenceStatusController: Xe
			},
			getPresenceProvider: Je.getPresenceProvider,
			presenceClient: Je.presenceClient
		},
		tt = "PresenceBulkNotifications",
		nt = {
			presenceChanged: "PresenceChanged"
		},
		rt = Roblox,
		it = HeaderScripts,
		ot = CoreUtilities,
		at = {
			initializeRealTimeSubscriptions: function() {
				if (rt.RealTime) {
					var e = rt.RealTime.Factory.GetClient(),
						t = tt,
						n = nt;
					e.Subscribe(t, (function(e) {
						var t = [];
						e.forEach((function(e) {
							var r = e.UserId;
							e.Type === n.presenceChanged && t.indexOf(r) < 0 && t.push(r)
						})), t.length && at.getPresences(t)
					}))
				}
			},
			getPresences: function(e) {
				var t = {
						url: "".concat(rt.EnvironmentUrls.presenceApi, "/v1/presence/users"),
						withCredentials: !0
					},
					n = {
						userIds: e
					};
				ot.httpService.post(t, n).then((function(e) {
					null != e && e.data && document.dispatchEvent(new CustomEvent("Roblox.Presence.Update", {
						detail: e.data.userPresences
					}))
				})).catch((function(e) {
					console.debug(e)
				}))
			}
		};
	null !== it.authenticatedUser && void 0 !== it.authenticatedUser && it.authenticatedUser.isAuthenticated && document.addEventListener("DOMContentLoaded", (function() {
		at.initializeRealTimeSubscriptions()
	})), window.Roblox.Presence = window.Roblox.Presence || {}, window.Roblox.Presence.PresenceTypes = {
		Offline: 0,
		Online: 1,
		InGame: 2,
		InStudio: 3
	}, window.RobloxPresence = et
}();
//# sourceMappingURL=https://js.rbxcdn.com/96ab7b87a4c7b4d667d655c2aab08bfd-presenceStatus.bundle.min.js.map

/* Bundle detector */
window.Roblox && window.Roblox.BundleDetector && window.Roblox.BundleDetector.bundleDetected("PresenceStatus");