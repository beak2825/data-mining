(function() {
	/*

	 Copyright The Closure Library Authors.
	 SPDX-License-Identifier: Apache-2.0
	*/
	'use strict';
	var l = function() {
			var a = h,
				b = 0;
			return function() {
				return b < a.length ? {
					done: !1,
					value: a[b++]
				} : {
					done: !0
				}
			}
		},
		m = this || self,
		n = /^[\w+/_-]+[=]{0,2}$/,
		p = null,
		q = function(a) {
			return (a = a.querySelector && a.querySelector("script[nonce]")) && (a = a.nonce || a.getAttribute("nonce")) && n.test(a) ? a : ""
		},
		r = function(a, b) {
			function e() {}
			e.prototype = b.prototype;
			a.i = b.prototype;
			a.prototype = new e;
			a.prototype.constructor = a;
			a.h = function(c, g, k) {
				for (var f = Array(arguments.length - 2), d = 2; d < arguments.length; d++) f[d - 2] = arguments[d];
				return b.prototype[g].apply(c, f)
			}
		},
		t = function(a) {
			return a
		};

	function u(a) {
		if (Error.captureStackTrace) Error.captureStackTrace(this, u);
		else {
			var b = Error().stack;
			b && (this.stack = b)
		}
		a && (this.message = String(a))
	}
	r(u, Error);
	u.prototype.name = "CustomError";
	var v = function(a, b) {
		a = a.split("%s");
		for (var e = "", c = a.length - 1, g = 0; g < c; g++) e += a[g] + (g < b.length ? b[g] : "%s");
		u.call(this, e + a[c])
	};
	r(v, u);
	v.prototype.name = "AssertionError";
	var w = function(a, b) {
		throw new v("Failure" + (a ? ": " + a : ""), Array.prototype.slice.call(arguments, 1));
	};
	var x;
	var A = function(a, b) {
		this.g = b === z ? a : ""
	};
	A.prototype.toString = function() {
		return this.g + ""
	};
	var z = {};
	var B = function() {
			var a = window.navigator.userAgent.match(/Chrome\/([0-9]+)/);
			return a ? parseInt(a[1], 10) : 0
		},
		C = function(a) {
			return !!document.currentScript && (-1 != document.currentScript.src.indexOf("?" + a) || -1 != document.currentScript.src.indexOf("&" + a))
		},
		D = function() {
			return "function" == typeof window.__onGCastApiAvailable ? window.__onGCastApiAvailable : null
		},
		F = function(a) {
			a.length ? E(a.shift(), function() {
				F(a)
			}) : G()
		},
		H = function(a) {
			return "chrome-extension://" + a + "/cast_sender.js"
		},
		E = function(a, b, e) {
			var c = document.createElement("script");
			c.onerror = b;
			e && (c.onload = e);
			if (void 0 === x)
				if (b = null, (e = m.trustedTypes) && e.createPolicy) {
					try {
						b = e.createPolicy("goog#html", {
							createHTML: t,
							createScript: t,
							createScriptURL: t
						})
					} catch (y) {
						m.console && m.console.error(y.message)
					}
					x = b
				} else x = b;
			a = (b = x) ? b.createScriptURL(a) : a;
			a = new A(a, z);
			a: {
				try {
					var g = c && c.ownerDocument,
						k = g && (g.defaultView || g.parentWindow);
					k = k || m;
					if (k.Element && k.Location) {
						var f = k;
						break a
					}
				} catch (y) {}
				f = null
			}
			if (f && "undefined" != typeof f.HTMLScriptElement && (!c || !(c instanceof f.HTMLScriptElement) && (c instanceof f.Location || c instanceof f.Element))) {
				f = typeof c;
				if ("object" == f && null != c || "function" == f) try {
					var d = c.constructor.displayName || c.constructor.name || Object.prototype.toString.call(c)
				} catch (y) {
					d = "<object could not be stringified>"
				} else d = void 0 === c ? "undefined" : null === c ? "null" : typeof c;
				w("Argument is not a %s (or a non-Element, non-Location mock); got: %s", "HTMLScriptElement", d)
			}
			a instanceof A && a.constructor === A ? d = a.g : (d = typeof a, w("expected object of type TrustedResourceUrl, got '" + a + "' of type " + ("object" !=
				d ? d : a ? Array.isArray(a) ? "array" : d : "null")), d = "type_error:TrustedResourceUrl");
			c.src = d;
			(d = c.ownerDocument && c.ownerDocument.defaultView) && d != m ? d = q(d.document) : (null === p && (p = q(m.document)), d = p);
			d && c.setAttribute("nonce", d);
			(document.head || document.documentElement).appendChild(c)
		},
		I = function() {
			var a = B(),
				b = [];
			if (1 < a) {
				var e = a - 1;
				b.push("//www.gstatic.com/eureka/clank/" + a + "/cast_sender.js");
				b.push("//www.gstatic.com/eureka/clank/" + e + "/cast_sender.js")
			}
			return b
		},
		G = function() {
			var a = D();
			a && a(!1, "No cast extension found")
		},
		K = function() {
			if (J) {
				var a = 2,
					b = D(),
					e = function() {
						a--;
						0 == a && b && b(!0)
					};
				window.__onGCastApiAvailable = e;
				E("//www.gstatic.com/cast/sdk/libs/sender/1.0/cast_framework.js", G, e)
			}
		},
		J = C("loadCastFramework") || C("loadCastApplicationFramework"),
		L = ["pkedcjkdefgpdelpbcmbmeomcjbeemfm", "enhhojjnijigcajfphajepfemndkmdlo"];
	if (0 <= window.navigator.userAgent.indexOf("Android") && 0 <= window.navigator.userAgent.indexOf("Chrome/") && window.navigator.presentation) {
		if (60 <= B()) {
			K();
			var M = I();
			M.push("//www.gstatic.com/eureka/clank/cast_sender.js");
			F(M)
		}
	} else if (!window.chrome || !window.navigator.presentation || 0 <= window.navigator.userAgent.indexOf("Edge")) G();
	else if (89 <= B()) {
		K();
		var N = I(),
			O = N.push,
			P = O.apply,
			h = L.map(H),
			Q;
		if (h instanceof Array) Q = h;
		else {
			var R, S = "undefined" != typeof Symbol && Symbol.iterator && h[Symbol.iterator];
			R = S ? S.call(h) : {
				next: l()
			};
			for (var T, U = []; !(T = R.next()).done;) U.push(T.value);
			Q = U
		}
		P.call(O, N, Q);
		N.push("//www.gstatic.com/eureka/clank/cast_sender.js");
		F(N)
	} else K(), F(L.map(H));
}).call(this);