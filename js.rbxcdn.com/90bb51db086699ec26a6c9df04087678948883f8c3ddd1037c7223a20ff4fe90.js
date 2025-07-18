! function(r) {
	var n = {};

	function o(t) {
		if (n[t]) return n[t].exports;
		var e = n[t] = {
			i: t,
			l: !1,
			exports: {}
		};
		return r[t].call(e.exports, e, e.exports, o), e.l = !0, e.exports
	}
	o.m = r, o.c = n, o.d = function(t, e, r) {
		o.o(t, e) || Object.defineProperty(t, e, {
			enumerable: !0,
			get: r
		})
	}, o.r = function(t) {
		"undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, {
			value: "Module"
		}), Object.defineProperty(t, "__esModule", {
			value: !0
		})
	}, o.t = function(e, t) {
		if (1 & t && (e = o(e)), 8 & t) return e;
		if (4 & t && "object" == typeof e && e && e.__esModule) return e;
		var r = Object.create(null);
		if (o.r(r), Object.defineProperty(r, "default", {
				enumerable: !0,
				value: e
			}), 2 & t && "string" != typeof e)
			for (var n in e) o.d(r, n, function(t) {
				return e[t]
			}.bind(null, n));
		return r
	}, o.n = function(t) {
		var e = t && t.__esModule ? function() {
			return t.default
		} : function() {
			return t
		};
		return o.d(e, "a", e), e
	}, o.o = function(t, e) {
		return Object.prototype.hasOwnProperty.call(t, e)
	}, o.p = "", o(o.s = 43)
}({
	11: function(t, e, r) {
		"use strict";

		function u() {
			return new XMLHttpRequest
		}

		function c() {
			return window.performance && window.performance.now ? performance.now() : (new Date).getTime()
		}

		function p(t, e, r, n, o, i, s) {
			var a = {
				start: n,
				size: r,
				d: o,
				ttfb: i,
				sc: e
			};
			if (s && (a.via = s.via), !t || !window.performance || !window.performance.getEntriesByName) return a;
			var u = window.performance.getEntriesByName(t);
			if (0 == u.length && 0 == (u = window.performance.getEntriesByName(t + "/")).length) return a;
			var c = u[u.length - 1];
			return "decodedBodySize" in c && 0 < c.decodedBodySize && (a.size = c.decodedBodySize), c.duration ? a.d = c.duration : c.startTime && c.responseEnd && (a.d = c.responseEnd - c.startTime), c.requestStart && (a.dns = c.domainLookupEnd - c.domainLookupStart, a.rtt = c.responseStart - c.requestStart, a.ttfb = c.responseStart - c.startTime, a.tcp = c.connectEnd - c.connectStart, 0 === c.secureConnectionStart ? a.tls = 0 : void 0 !== c.secureConnectionStart && (a.tls = c.connectEnd - c.secureConnectionStart, a.tcp -= a.tls)), a
		}

		function f(t) {
			var e = {};
			if (!t) return e;
			for (var r = t.split("\r\n"), n = 0; n < r.length; n++) {
				var o = r[n],
					i = o.indexOf(": ");
				if (0 < i) {
					var s = o.substring(0, i).toLowerCase(),
						a = o.substring(i + 2);
					e[s] = a
				}
			}
			return e
		}
		r.d(e, "a", function() {
			return n
		});
		var n = (o.prototype.get = function(n, t, o, e) {
			var i;
			try {
				i = u()
			} catch (t) {
				return void o(p(n, 0, 0, 0, 0, 0))
			}
			if ("withCredentials" in i) {
				e.withCookies && (i.withCredentials = !0), t && (i.timeout = t);
				var s = c(),
					a = 0;
				i.open("GET", n, !0), i.onreadystatechange = function() {
					switch (i.readyState) {
						case 2:
							a = c() - s;
							break;
						case 4:
							var t = {};
							"getAllResponseHeaders" in i && (t = f(i.getAllResponseHeaders()));
							var e = i.responseText.length;
							i.response && (e = i.response.length);
							var r = c() - s;
							o(p(n, i.status, e, s, r, a, t))
					}
				}, i.send()
			} else o(p(n, 0, 0, 0, 0, 0))
		}, o.prototype.getData = function(t, e, r, n) {
			var o;
			try {
				o = u()
			} catch (t) {
				return void r(0, {}, null)
			}
			"withCredentials" in o ? (n.withCookies && (o.withCredentials = !0), e && (o.timeout = e), c(), o.open("GET", t, !0), o.onreadystatechange = function() {
				switch (o.readyState) {
					case 4:
						var t = {};
						"getAllResponseHeaders" in o && (t = f(o.getAllResponseHeaders()));
						var e = o.responseText;
						o.response && o.response.length, r(o.status, t, e)
				}
			}, o.send()) : r(0, {}, null)
		}, o);

		function o() {}
	},
	15: function(t, e, r) {
		"use strict";
		r.r(e);
		var n = r(16);
		for (var o in n) "default" !== o && function(t) {
			r.d(e, t, function() {
				return n[t]
			})
		}(o);
		var i = r(26);
		r.d(e, "BrowserProbe", function() {
			return i.a
		});
		var s = r(17);
		r.d(e, "RestRecipeProvider", function() {
			return s.a
		});
		var a = r(18);
		r.d(e, "LocalRecipeProvider", function() {
			return a.a
		})
	},
	16: function(t, e) {},
	17: function(t, e, r) {
		"use strict";
		r.d(e, "a", function() {
			return o
		});
		var n = r(11);

		function c(t) {
			return !(!t || "object" != typeof t)
		}

		function p(t) {
			return !isNaN(t) && (0 | (e = parseFloat(t))) === e;
			var e
		}

		function f(t) {
			return "string" == typeof t
		}
		var o = (i.prototype.getRecipe = function(t, u) {
			var e = this.url,
				r = -1 === e.indexOf("?") ? "?" : "&";
			e = e + r + "iteration=" + t, i.requester.getData(e, 0, function(t, e, r) {
				if (200 == t && null != r) try {
					var n = JSON.parse(r),
						o = "FTLTester: param";
					if (!c(n)) throw new Error(o + ": not an object");
					if (!p(n.next)) throw new Error(o + ".next: not an integer");
					if (!p(n.pulses)) throw new Error(o + ".pulses: not an integer");
					if (!p(n.pulse_delay)) throw new Error(o + ".pulse_delay: not an integer");
					if (!p(n.pulse_timeout)) throw new Error(o + ".pulse_timeout: not an integer");
					if (!f(n.name)) throw new Error(o + ".name: not a string");
					if (!c(n.ctx)) throw new Error(o + ".ctx: not an object");
					if (! function(t) {
							return "[object Array]" === Object.prototype.toString.call(t)
						}(n.targets)) throw new Error(o + ".targets: not an array");
					for (var i = 0, s = n.targets.length; i < s; i++) {
						var a = n.targets[i];
						if (!c(a)) throw new Error(o + ".targets[" + i + "]: not an object");
						if (!f(a.name)) throw new Error(o + ".targets[" + i + "].name: not a string");
						if (!f(a.target)) throw new Error(o + ".targets[" + i + "].target: not a string")
					}
					u(n)
				} catch (t) {
					return console && console.error && console.error(t), void u(null)
				} else u(null)
			}, {
				withCookies: !0
			})
		}, i);

		function i(t) {
			this.url = t
		}
		o.requester = new n.a
	},
	18: function(t, e, r) {
		"use strict";
		r.d(e, "a", function() {
			return n
		});
		var n = (o.prototype.getRecipe = function(t, e) {
			e(this.recipe)
		}, o);

		function o(t) {
			this.json = t, this.recipe = t
		}
	},
	26: function(t, e, r) {
		"use strict";
		r.d(e, "a", function() {
			return d
		});
		var n = (o.prototype.run = function(t, e) {
			this.requester.get(t.target, this.timeout, e, {
				withCookies: !1
			})
		}, o);

		function o(t, e) {
			this.requester = t, this.timeout = e
		}
		var i = (s.prototype.getTester = function(t, e) {
			if ("http_get" == e.type) return new n(t, e.pulse_timeout);
			throw new Error(e.type + ": inknown recipe type")
		}, s);

		function s() {}
		var a = (u.prototype.start = function() {
			this.nextJob || this.completed || (this.nextJob = this.scheduleAfter(0, this.run.bind(this)))
		}, u.prototype.stop = function() {
			this.nextJob && (this.nextJob.cancel(), this.nextJob = void 0)
		}, u.prototype.run = function() {
			this.recipeProvider.getRecipe(this.iteration, this.executeTest.bind(this))
		}, u.prototype.forEachTarget = function(t, e) {
			for (var r = 0, n = t.targets.length; r < n; r++) e.bind(this)(t.targets[r])
		}, u.prototype.executeTest = function(i) {
			if (i) {
				var s = this.testerFactory.getTester(this.requester, i),
					a = [],
					u = new p(i.targets.length),
					c = this.scheduleAfter;
				this.forEachTarget(i, function(n) {
					for (var r = [], o = function(t, e) {
							r.push(e), t()
						}, t = function() {
							a.push({
								name: n.name,
								target: n.target,
								data: r
							}), u.done()
						}, e = i.pulses - 1; 0 <= e; e--) t = function(t, e) {
						var r = s.run.bind(s, n, o.bind(null, t));
						c(e, r)
					}.bind(null, t, 0 < e ? i.pulse_delay : 0);
					t()
				});
				var t = this.handleResult.bind(this);
				u.wait(function() {
					t(i, a)
				})
			} else this.stop()
		}, u.prototype.scheduleAfter = function(t, e) {
			var r = setTimeout(e, t);
			return {
				cancel: function() {
					clearTimeout(r)
				}
			}
		}, u.prototype.handleResult = function(t, e) {
			this.reporter({
				ctx: t.ctx,
				name: t.name,
				type: t.type,
				data: e
			}), this.nextJob && (0 < t.next ? this.nextJob = this.scheduleAfter(t.next, this.run.bind(this)) : (this.completed = !0, this.stop()))
		}, u);

		function u(t, e) {
			this.recipeProvider = t, this.reporter = e, this.iteration = 0, this.completed = !1, this.requester = this.constructor.requester, this.testerFactory = this.constructor.testerFactory
		}
		var p = (c.prototype.done = function() {
			this.total--, 0 === this.total && this.cb && (this.cb(), this.cb = void 0)
		}, c.prototype.wait = function(t) {
			0 === this.total ? t() : this.cb = t
		}, c);

		function c(t) {
			this.total = t
		}
		a.testerFactory = new i;
		var f, l, h = r(11),
			d = ((f = function(t, e) {
				return (f = Object.setPrototypeOf || {
						__proto__: []
					}
					instanceof Array && function(t, e) {
						t.__proto__ = e
					} || function(t, e) {
						for (var r in e) e.hasOwnProperty(r) && (t[r] = e[r])
					})(t, e)
			}, function(t, e) {
				function r() {
					this.constructor = t
				}
				f(t, e), t.prototype = null === e ? Object.create(e) : (r.prototype = e.prototype, new r)
			})(w, l = a), w);

		function w() {
			return null !== l && l.apply(this, arguments) || this
		}
		d.requester = new h.a
	},
	27: function(t, e) {
		t.exports = CoreUtilities
	},
	43: function(t, e, r) {
		"use strict";
		r.r(e);
		r(15);
		var n = r(27),
			o = window.location.hostname && -1 === window.location.hostname.indexOf("test"),
			i = o ? "https://lms.roblox.com/recipe" : "https://lms.simulpong.com/recipe?maxTargets=4",
			s = o ? "https://lms.roblox.com/report" : "https://lms.simulpong.com/report";
		var a = r(15),
			u = new a.RestRecipeProvider(i);
		new a.BrowserProbe(u, function(t) {
			var e = {
				url: s
			};
			return n.httpService.post(e, t).catch(function(t) {
				console.error(t)
			})
		}).start()
	}
});
//# sourceMappingURL=https://js.rbxcdn.com/a6ae4be8fbb0010b4b8f-latencyMeasurement.js.map

/* Bundle detector */
window.Roblox && window.Roblox.BundleDetector && window.Roblox.BundleDetector.bundleDetected("LatencyMeasurement");