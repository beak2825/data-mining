; // bundle: angular___8b2154b7d188395b7a1c96a036dc4c8b_m
; // files: angular/angular.min.js, angular/angular-sanitize.min.js, angular/angular-ui-router.min.js, angular/ui-bootstrap-custom-tpls-2.5.0.js, angular/angular.ng-modules.js, angular/angular-elastic.js, ~/viewapp/app.js

; // angular/angular.min.js
/*
 AngularJS v1.6.3
 (c) 2010-2017 Google, Inc. http://angularjs.org
 License: MIT
*/
(function(w) {
	'use strict';

	function M(a, b) {
		b = b || Error;
		return function() {
			var d = arguments[0],
				c;
			c = "[" + (a ? a + ":" : "") + d + "] http://errors.angularjs.org/1.6.3/" + (a ? a + "/" : "") + d;
			for (d = 1; d < arguments.length; d++) {
				c = c + (1 == d ? "?" : "&") + "p" + (d - 1) + "=";
				var e = encodeURIComponent,
					f;
				f = arguments[d];
				f = "function" == typeof f ? f.toString().replace(/ \{[\s\S]*$/, "") : "undefined" == typeof f ? "undefined" : "string" != typeof f ? JSON.stringify(f) : f;
				c += e(f)
			}
			return new b(c)
		}
	}

	function me(a) {
		if (G(a)) u(a.objectMaxDepth) && (Fc.objectMaxDepth = Tb(a.objectMaxDepth) ?
			a.objectMaxDepth : NaN);
		else return Fc
	}

	function Tb(a) {
		return ba(a) && 0 < a
	}

	function ra(a) {
		if (null == a || Wa(a)) return !1;
		if (H(a) || D(a) || F && a instanceof F) return !0;
		var b = "length" in Object(a) && a.length;
		return ba(b) && (0 <= b && (b - 1 in a || a instanceof Array) || "function" === typeof a.item)
	}

	function p(a, b, d) {
		var c, e;
		if (a)
			if (E(a))
				for (c in a) "prototype" !== c && "length" !== c && "name" !== c && a.hasOwnProperty(c) && b.call(d, a[c], c, a);
			else if (H(a) || ra(a)) {
			var f = "object" !== typeof a;
			c = 0;
			for (e = a.length; c < e; c++)(f || c in a) && b.call(d,
				a[c], c, a)
		} else if (a.forEach && a.forEach !== p) a.forEach(b, d, a);
		else if (Gc(a))
			for (c in a) b.call(d, a[c], c, a);
		else if ("function" === typeof a.hasOwnProperty)
			for (c in a) a.hasOwnProperty(c) && b.call(d, a[c], c, a);
		else
			for (c in a) ua.call(a, c) && b.call(d, a[c], c, a);
		return a
	}

	function Hc(a, b, d) {
		for (var c = Object.keys(a).sort(), e = 0; e < c.length; e++) b.call(d, a[c[e]], c[e]);
		return c
	}

	function Ic(a) {
		return function(b, d) {
			a(d, b)
		}
	}

	function ne() {
		return ++rb
	}

	function Ub(a, b, d) {
		for (var c = a.$$hashKey, e = 0, f = b.length; e < f; ++e) {
			var g = b[e];
			if (G(g) || E(g))
				for (var h = Object.keys(g), k = 0, l = h.length; k < l; k++) {
					var m = h[k],
						n = g[m];
					d && G(n) ? ga(n) ? a[m] = new Date(n.valueOf()) : Xa(n) ? a[m] = new RegExp(n) : n.nodeName ? a[m] = n.cloneNode(!0) : Vb(n) ? a[m] = n.clone() : (G(a[m]) || (a[m] = H(n) ? [] : {}), Ub(a[m], [n], !0)) : a[m] = n
				}
		}
		c ? a.$$hashKey = c : delete a.$$hashKey;
		return a
	}

	function R(a) {
		return Ub(a, va.call(arguments, 1), !1)
	}

	function oe(a) {
		return Ub(a, va.call(arguments, 1), !0)
	}

	function Z(a) {
		return parseInt(a, 10)
	}

	function Wb(a, b) {
		return R(Object.create(a), b)
	}

	function A() {}

	function Ya(a) {
		return a
	}

	function la(a) {
		return function() {
			return a
		}
	}

	function Xb(a) {
		return E(a.toString) && a.toString !== ma
	}

	function x(a) {
		return "undefined" === typeof a
	}

	function u(a) {
		return "undefined" !== typeof a
	}

	function G(a) {
		return null !== a && "object" === typeof a
	}

	function Gc(a) {
		return null !== a && "object" === typeof a && !Jc(a)
	}

	function D(a) {
		return "string" === typeof a
	}

	function ba(a) {
		return "number" === typeof a
	}

	function ga(a) {
		return "[object Date]" === ma.call(a)
	}

	function E(a) {
		return "function" === typeof a
	}

	function Xa(a) {
		return "[object RegExp]" ===
			ma.call(a)
	}

	function Wa(a) {
		return a && a.window === a
	}

	function Za(a) {
		return a && a.$evalAsync && a.$watch
	}

	function Ha(a) {
		return "boolean" === typeof a
	}

	function pe(a) {
		return a && ba(a.length) && qe.test(ma.call(a))
	}

	function Vb(a) {
		return !(!a || !(a.nodeName || a.prop && a.attr && a.find))
	}

	function re(a) {
		var b = {};
		a = a.split(",");
		var d;
		for (d = 0; d < a.length; d++) b[a[d]] = !0;
		return b
	}

	function wa(a) {
		return P(a.nodeName || a[0] && a[0].nodeName)
	}

	function $a(a, b) {
		var d = a.indexOf(b);
		0 <= d && a.splice(d, 1);
		return d
	}

	function sa(a, b, d) {
		function c(a,
			b, c) {
			c--;
			if (0 > c) return "...";
			var d = b.$$hashKey,
				f;
			if (H(a)) {
				f = 0;
				for (var g = a.length; f < g; f++) b.push(e(a[f], c))
			} else if (Gc(a))
				for (f in a) b[f] = e(a[f], c);
			else if (a && "function" === typeof a.hasOwnProperty)
				for (f in a) a.hasOwnProperty(f) && (b[f] = e(a[f], c));
			else
				for (f in a) ua.call(a, f) && (b[f] = e(a[f], c));
			d ? b.$$hashKey = d : delete b.$$hashKey;
			return b
		}

		function e(a, b) {
			if (!G(a)) return a;
			var d = g.indexOf(a);
			if (-1 !== d) return h[d];
			if (Wa(a) || Za(a)) throw Fa("cpws");
			var d = !1,
				e = f(a);
			void 0 === e && (e = H(a) ? [] : Object.create(Jc(a)),
				d = !0);
			g.push(a);
			h.push(e);
			return d ? c(a, e, b) : e
		}

		function f(a) {
			switch (ma.call(a)) {
				case "[object Int8Array]":
				case "[object Int16Array]":
				case "[object Int32Array]":
				case "[object Float32Array]":
				case "[object Float64Array]":
				case "[object Uint8Array]":
				case "[object Uint8ClampedArray]":
				case "[object Uint16Array]":
				case "[object Uint32Array]":
					return new a.constructor(e(a.buffer), a.byteOffset, a.length);
				case "[object ArrayBuffer]":
					if (!a.slice) {
						var b = new ArrayBuffer(a.byteLength);
						(new Uint8Array(b)).set(new Uint8Array(a));
						return b
					}
					return a.slice(0);
				case "[object Boolean]":
				case "[object Number]":
				case "[object String]":
				case "[object Date]":
					return new a.constructor(a.valueOf());
				case "[object RegExp]":
					return b = new RegExp(a.source, a.toString().match(/[^/]*$/)[0]), b.lastIndex = a.lastIndex, b;
				case "[object Blob]":
					return new a.constructor([a], {
						type: a.type
					})
			}
			if (E(a.cloneNode)) return a.cloneNode(!0)
		}
		var g = [],
			h = [];
		d = Tb(d) ? d : NaN;
		if (b) {
			if (pe(b) || "[object ArrayBuffer]" === ma.call(b)) throw Fa("cpta");
			if (a === b) throw Fa("cpi");
			H(b) ? b.length =
				0 : p(b, function(a, c) {
					"$$hashKey" !== c && delete b[c]
				});
			g.push(a);
			h.push(b);
			return c(a, b, d)
		}
		return e(a, d)
	}

	function pa(a, b) {
		if (a === b) return !0;
		if (null === a || null === b) return !1;
		if (a !== a && b !== b) return !0;
		var d = typeof a,
			c;
		if (d === typeof b && "object" === d)
			if (H(a)) {
				if (!H(b)) return !1;
				if ((d = a.length) === b.length) {
					for (c = 0; c < d; c++)
						if (!pa(a[c], b[c])) return !1;
					return !0
				}
			} else {
				if (ga(a)) return ga(b) ? pa(a.getTime(), b.getTime()) : !1;
				if (Xa(a)) return Xa(b) ? a.toString() === b.toString() : !1;
				if (Za(a) || Za(b) || Wa(a) || Wa(b) || H(b) || ga(b) ||
					Xa(b)) return !1;
				d = V();
				for (c in a)
					if ("$" !== c.charAt(0) && !E(a[c])) {
						if (!pa(a[c], b[c])) return !1;
						d[c] = !0
					} for (c in b)
					if (!(c in d) && "$" !== c.charAt(0) && u(b[c]) && !E(b[c])) return !1;
				return !0
			} return !1
	}

	function ab(a, b, d) {
		return a.concat(va.call(b, d))
	}

	function bb(a, b) {
		var d = 2 < arguments.length ? va.call(arguments, 2) : [];
		return !E(b) || b instanceof RegExp ? b : d.length ? function() {
			return arguments.length ? b.apply(a, ab(d, arguments, 0)) : b.apply(a, d)
		} : function() {
			return arguments.length ? b.apply(a, arguments) : b.call(a)
		}
	}

	function Kc(a,
		b) {
		var d = b;
		"string" === typeof a && "$" === a.charAt(0) && "$" === a.charAt(1) ? d = void 0 : Wa(b) ? d = "$WINDOW" : b && w.document === b ? d = "$DOCUMENT" : Za(b) && (d = "$SCOPE");
		return d
	}

	function cb(a, b) {
		if (!x(a)) return ba(b) || (b = b ? 2 : null), JSON.stringify(a, Kc, b)
	}

	function Lc(a) {
		return D(a) ? JSON.parse(a) : a
	}

	function Mc(a, b) {
		a = a.replace(se, "");
		var d = Date.parse("Jan 01, 1970 00:00:00 " + a) / 6E4;
		return da(d) ? b : d
	}

	function Yb(a, b, d) {
		d = d ? -1 : 1;
		var c = a.getTimezoneOffset();
		b = Mc(b, c);
		d *= b - c;
		a = new Date(a.getTime());
		a.setMinutes(a.getMinutes() +
			d);
		return a
	}

	function xa(a) {
		a = F(a).clone();
		try {
			a.empty()
		} catch (b) {}
		var d = F("<div>").append(a).html();
		try {
			return a[0].nodeType === Ia ? P(d) : d.match(/^(<[^>]+>)/)[1].replace(/^<([\w-]+)/, function(a, b) {
				return "<" + P(b)
			})
		} catch (c) {
			return P(d)
		}
	}

	function Nc(a) {
		try {
			return decodeURIComponent(a)
		} catch (b) {}
	}

	function Oc(a) {
		var b = {};
		p((a || "").split("&"), function(a) {
			var c, e, f;
			a && (e = a = a.replace(/\+/g, "%20"), c = a.indexOf("="), -1 !== c && (e = a.substring(0, c), f = a.substring(c + 1)), e = Nc(e), u(e) && (f = u(f) ? Nc(f) : !0, ua.call(b, e) ? H(b[e]) ?
				b[e].push(f) : b[e] = [b[e], f] : b[e] = f))
		});
		return b
	}

	function Zb(a) {
		var b = [];
		p(a, function(a, c) {
			H(a) ? p(a, function(a) {
				b.push($(c, !0) + (!0 === a ? "" : "=" + $(a, !0)))
			}) : b.push($(c, !0) + (!0 === a ? "" : "=" + $(a, !0)))
		});
		return b.length ? b.join("&") : ""
	}

	function db(a) {
		return $(a, !0).replace(/%26/gi, "&").replace(/%3D/gi, "=").replace(/%2B/gi, "+")
	}

	function $(a, b) {
		return encodeURIComponent(a).replace(/%40/gi, "@").replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%3B/gi, ";").replace(/%20/g, b ? "%20" : "+")
	}

	function te(a,
		b) {
		var d, c, e = Ja.length;
		for (c = 0; c < e; ++c)
			if (d = Ja[c] + b, D(d = a.getAttribute(d))) return d;
		return null
	}

	function ue(a, b) {
		var d, c, e = {};
		p(Ja, function(b) {
			b += "app";
			!d && a.hasAttribute && a.hasAttribute(b) && (d = a, c = a.getAttribute(b))
		});
		p(Ja, function(b) {
			b += "app";
			var e;
			!d && (e = a.querySelector("[" + b.replace(":", "\\:") + "]")) && (d = e, c = e.getAttribute(b))
		});
		d && (ve ? (e.strictDi = null !== te(d, "strict-di"), b(d, c ? [c] : [], e)) : w.console.error("Angular: disabling automatic bootstrap. <script> protocol indicates an extension, document.location.href does not match."))
	}

	function Pc(a, b, d) {
		G(d) || (d = {});
		d = R({
			strictDi: !1
		}, d);
		var c = function() {
				a = F(a);
				if (a.injector()) {
					var c = a[0] === w.document ? "document" : xa(a);
					throw Fa("btstrpd", c.replace(/</, "&lt;").replace(/>/, "&gt;"));
				}
				b = b || [];
				b.unshift(["$provide", function(b) {
					b.value("$rootElement", a)
				}]);
				d.debugInfoEnabled && b.push(["$compileProvider", function(a) {
					a.debugInfoEnabled(!0)
				}]);
				b.unshift("ng");
				c = eb(b, d.strictDi);
				c.invoke(["$rootScope", "$rootElement", "$compile", "$injector", function(a, b, c, d) {
					a.$apply(function() {
						b.data("$injector",
							d);
						c(b)(a)
					})
				}]);
				return c
			},
			e = /^NG_ENABLE_DEBUG_INFO!/,
			f = /^NG_DEFER_BOOTSTRAP!/;
		w && e.test(w.name) && (d.debugInfoEnabled = !0, w.name = w.name.replace(e, ""));
		if (w && !f.test(w.name)) return c();
		w.name = w.name.replace(f, "");
		ea.resumeBootstrap = function(a) {
			p(a, function(a) {
				b.push(a)
			});
			return c()
		};
		E(ea.resumeDeferredBootstrap) && ea.resumeDeferredBootstrap()
	}

	function we() {
		w.name = "NG_ENABLE_DEBUG_INFO!" + w.name;
		w.location.reload()
	}

	function xe(a) {
		a = ea.element(a).injector();
		if (!a) throw Fa("test");
		return a.get("$$testability")
	}

	function Qc(a, b) {
		b = b || "_";
		return a.replace(ye, function(a, c) {
			return (c ? b : "") + a.toLowerCase()
		})
	}

	function ze() {
		var a;
		if (!Rc) {
			var b = sb();
			(na = x(b) ? w.jQuery : b ? w[b] : void 0) && na.fn.on ? (F = na, R(na.fn, {
				scope: Oa.scope,
				isolateScope: Oa.isolateScope,
				controller: Oa.controller,
				injector: Oa.injector,
				inheritedData: Oa.inheritedData
			}), a = na.cleanData, na.cleanData = function(b) {
				for (var c, e = 0, f; null != (f = b[e]); e++)(c = na._data(f, "events")) && c.$destroy && na(f).triggerHandler("$destroy");
				a(b)
			}) : F = W;
			ea.element = F;
			Rc = !0
		}
	}

	function fb(a,
		b, d) {
		if (!a) throw Fa("areq", b || "?", d || "required");
		return a
	}

	function tb(a, b, d) {
		d && H(a) && (a = a[a.length - 1]);
		fb(E(a), b, "not a function, got " + (a && "object" === typeof a ? a.constructor.name || "Object" : typeof a));
		return a
	}

	function Ka(a, b) {
		if ("hasOwnProperty" === a) throw Fa("badname", b);
	}

	function Sc(a, b, d) {
		if (!b) return a;
		b = b.split(".");
		for (var c, e = a, f = b.length, g = 0; g < f; g++) c = b[g], a && (a = (e = a)[c]);
		return !d && E(a) ? bb(e, a) : a
	}

	function ub(a) {
		for (var b = a[0], d = a[a.length - 1], c, e = 1; b !== d && (b = b.nextSibling); e++)
			if (c || a[e] !==
				b) c || (c = F(va.call(a, 0, e))), c.push(b);
		return c || a
	}

	function V() {
		return Object.create(null)
	}

	function $b(a) {
		if (null == a) return "";
		switch (typeof a) {
			case "string":
				break;
			case "number":
				a = "" + a;
				break;
			default:
				a = !Xb(a) || H(a) || ga(a) ? cb(a) : a.toString()
		}
		return a
	}

	function Ae(a) {
		function b(a, b, c) {
			return a[b] || (a[b] = c())
		}
		var d = M("$injector"),
			c = M("ng");
		a = b(a, "angular", Object);
		a.$$minErr = a.$$minErr || M;
		return b(a, "module", function() {
			var a = {};
			return function(f, g, h) {
				var k = {};
				if ("hasOwnProperty" === f) throw c("badname", "module");
				g && a.hasOwnProperty(f) && (a[f] = null);
				return b(a, f, function() {
					function a(b, c, d, f) {
						f || (f = e);
						return function() {
							f[d || "push"]([b, c, arguments]);
							return p
						}
					}

					function b(a, c, d) {
						d || (d = e);
						return function(b, e) {
							e && E(e) && (e.$$moduleName = f);
							d.push([a, c, arguments]);
							return p
						}
					}
					if (!g) throw d("nomod", f);
					var e = [],
						q = [],
						r = [],
						I = a("$injector", "invoke", "push", q),
						p = {
							_invokeQueue: e,
							_configBlocks: q,
							_runBlocks: r,
							info: function(a) {
								if (u(a)) {
									if (!G(a)) throw c("aobj", "value");
									k = a;
									return this
								}
								return k
							},
							requires: g,
							name: f,
							provider: b("$provide",
								"provider"),
							factory: b("$provide", "factory"),
							service: b("$provide", "service"),
							value: a("$provide", "value"),
							constant: a("$provide", "constant", "unshift"),
							decorator: b("$provide", "decorator", q),
							animation: b("$animateProvider", "register"),
							filter: b("$filterProvider", "register"),
							controller: b("$controllerProvider", "register"),
							directive: b("$compileProvider", "directive"),
							component: b("$compileProvider", "component"),
							config: I,
							run: function(a) {
								r.push(a);
								return this
							}
						};
					h && I(h);
					return p
				})
			}
		})
	}

	function qa(a, b) {
		if (H(a)) {
			b =
				b || [];
			for (var d = 0, c = a.length; d < c; d++) b[d] = a[d]
		} else if (G(a))
			for (d in b = b || {}, a)
				if ("$" !== d.charAt(0) || "$" !== d.charAt(1)) b[d] = a[d];
		return b || a
	}

	function Be(a, b) {
		var d = [];
		Tb(b) && (a = sa(a, null, b));
		return JSON.stringify(a, function(a, b) {
			b = Kc(a, b);
			if (G(b)) {
				if (0 <= d.indexOf(b)) return "...";
				d.push(b)
			}
			return b
		})
	}

	function Ce(a) {
		R(a, {
			errorHandlingConfig: me,
			bootstrap: Pc,
			copy: sa,
			extend: R,
			merge: oe,
			equals: pa,
			element: F,
			forEach: p,
			injector: eb,
			noop: A,
			bind: bb,
			toJson: cb,
			fromJson: Lc,
			identity: Ya,
			isUndefined: x,
			isDefined: u,
			isString: D,
			isFunction: E,
			isObject: G,
			isNumber: ba,
			isElement: Vb,
			isArray: H,
			version: De,
			isDate: ga,
			lowercase: P,
			uppercase: vb,
			callbacks: {
				$$counter: 0
			},
			getTestability: xe,
			reloadWithDebugInfo: we,
			$$minErr: M,
			$$csp: Ga,
			$$encodeUriSegment: db,
			$$encodeUriQuery: $,
			$$stringify: $b
		});
		ac = Ae(w);
		ac("ng", ["ngLocale"], ["$provide", function(a) {
			a.provider({
				$$sanitizeUri: Ee
			});
			a.provider("$compile", Tc).directive({
				a: Fe,
				input: Uc,
				textarea: Uc,
				form: Ge,
				script: He,
				select: Ie,
				option: Je,
				ngBind: Ke,
				ngBindHtml: Le,
				ngBindTemplate: Me,
				ngClass: Ne,
				ngClassEven: Oe,
				ngClassOdd: Pe,
				ngCloak: Qe,
				ngController: Re,
				ngForm: Se,
				ngHide: Te,
				ngIf: Ue,
				ngInclude: Ve,
				ngInit: We,
				ngNonBindable: Xe,
				ngPluralize: Ye,
				ngRepeat: Ze,
				ngShow: $e,
				ngStyle: af,
				ngSwitch: bf,
				ngSwitchWhen: cf,
				ngSwitchDefault: df,
				ngOptions: ef,
				ngTransclude: ff,
				ngModel: gf,
				ngList: hf,
				ngChange: jf,
				pattern: Vc,
				ngPattern: Vc,
				required: Wc,
				ngRequired: Wc,
				minlength: Xc,
				ngMinlength: Xc,
				maxlength: Yc,
				ngMaxlength: Yc,
				ngValue: kf,
				ngModelOptions: lf
			}).directive({
				ngInclude: mf
			}).directive(wb).directive(Zc);
			a.provider({
				$anchorScroll: nf,
				$animate: of,
				$animateCss: pf,
				$$animateJs: qf,
				$$animateQueue: rf,
				$$AnimateRunner: sf,
				$$animateAsyncRun: tf,
				$browser: uf,
				$cacheFactory: vf,
				$controller: wf,
				$document: xf,
				$$isDocumentHidden: yf,
				$exceptionHandler: zf,
				$filter: $c,
				$$forceReflow: Af,
				$interpolate: Bf,
				$interval: Cf,
				$http: Df,
				$httpParamSerializer: Ef,
				$httpParamSerializerJQLike: Ff,
				$httpBackend: Gf,
				$xhrFactory: Hf,
				$jsonpCallbacks: If,
				$location: Jf,
				$log: Kf,
				$parse: Lf,
				$rootScope: Mf,
				$q: Nf,
				$$q: Of,
				$sce: Pf,
				$sceDelegate: Qf,
				$sniffer: Rf,
				$templateCache: Sf,
				$templateRequest: Tf,
				$$testability: Uf,
				$timeout: Vf,
				$window: Wf,
				$$rAF: Xf,
				$$jqLite: Yf,
				$$Map: Zf,
				$$cookieReader: $f
			})
		}]).info({
			angularVersion: "1.6.3"
		})
	}

	function gb(a, b) {
		return b.toUpperCase()
	}

	function xb(a) {
		return a.replace(ag, gb)
	}

	function ad(a) {
		a = a.nodeType;
		return 1 === a || !a || 9 === a
	}

	function bd(a, b) {
		var d, c, e = b.createDocumentFragment(),
			f = [];
		if (bc.test(a)) {
			d = e.appendChild(b.createElement("div"));
			c = (bg.exec(a) || ["", ""])[1].toLowerCase();
			c = ha[c] || ha._default;
			d.innerHTML = c[1] + a.replace(cg, "<$1></$2>") + c[2];
			for (c = c[0]; c--;) d = d.lastChild;
			f = ab(f, d.childNodes);
			d = e.firstChild;
			d.textContent = ""
		} else f.push(b.createTextNode(a));
		e.textContent = "";
		e.innerHTML = "";
		p(f, function(a) {
			e.appendChild(a)
		});
		return e
	}

	function W(a) {
		if (a instanceof W) return a;
		var b;
		D(a) && (a = S(a), b = !0);
		if (!(this instanceof W)) {
			if (b && "<" !== a.charAt(0)) throw cc("nosel");
			return new W(a)
		}
		if (b) {
			b = w.document;
			var d;
			a = (d = dg.exec(a)) ? [b.createElement(d[1])] : (d = bd(a, b)) ? d.childNodes : [];
			dc(this, a)
		} else E(a) ? cd(a) : dc(this, a)
	}

	function ec(a) {
		return a.cloneNode(!0)
	}

	function yb(a, b) {
		b || hb(a);
		if (a.querySelectorAll)
			for (var d =
					a.querySelectorAll("*"), c = 0, e = d.length; c < e; c++) hb(d[c])
	}

	function dd(a, b, d, c) {
		if (u(c)) throw cc("offargs");
		var e = (c = zb(a)) && c.events,
			f = c && c.handle;
		if (f)
			if (b) {
				var g = function(b) {
					var c = e[b];
					u(d) && $a(c || [], d);
					u(d) && c && 0 < c.length || (a.removeEventListener(b, f), delete e[b])
				};
				p(b.split(" "), function(a) {
					g(a);
					Ab[a] && g(Ab[a])
				})
			} else
				for (b in e) "$destroy" !== b && a.removeEventListener(b, f), delete e[b]
	}

	function hb(a, b) {
		var d = a.ng339,
			c = d && ib[d];
		c && (b ? delete c.data[b] : (c.handle && (c.events.$destroy && c.handle({}, "$destroy"),
			dd(a)), delete ib[d], a.ng339 = void 0))
	}

	function zb(a, b) {
		var d = a.ng339,
			d = d && ib[d];
		b && !d && (a.ng339 = d = ++eg, d = ib[d] = {
			events: {},
			data: {},
			handle: void 0
		});
		return d
	}

	function fc(a, b, d) {
		if (ad(a)) {
			var c, e = u(d),
				f = !e && b && !G(b),
				g = !b;
			a = (a = zb(a, !f)) && a.data;
			if (e) a[xb(b)] = d;
			else {
				if (g) return a;
				if (f) return a && a[xb(b)];
				for (c in b) a[xb(c)] = b[c]
			}
		}
	}

	function Bb(a, b) {
		return a.getAttribute ? -1 < (" " + (a.getAttribute("class") || "") + " ").replace(/[\n\t]/g, " ").indexOf(" " + b + " ") : !1
	}

	function Cb(a, b) {
		b && a.setAttribute && p(b.split(" "),
			function(b) {
				a.setAttribute("class", S((" " + (a.getAttribute("class") || "") + " ").replace(/[\n\t]/g, " ").replace(" " + S(b) + " ", " ")))
			})
	}

	function Db(a, b) {
		if (b && a.setAttribute) {
			var d = (" " + (a.getAttribute("class") || "") + " ").replace(/[\n\t]/g, " ");
			p(b.split(" "), function(a) {
				a = S(a); - 1 === d.indexOf(" " + a + " ") && (d += a + " ")
			});
			a.setAttribute("class", S(d))
		}
	}

	function dc(a, b) {
		if (b)
			if (b.nodeType) a[a.length++] = b;
			else {
				var d = b.length;
				if ("number" === typeof d && b.window !== b) {
					if (d)
						for (var c = 0; c < d; c++) a[a.length++] = b[c]
				} else a[a.length++] =
					b
			}
	}

	function ed(a, b) {
		return Eb(a, "$" + (b || "ngController") + "Controller")
	}

	function Eb(a, b, d) {
		9 === a.nodeType && (a = a.documentElement);
		for (b = H(b) ? b : [b]; a;) {
			for (var c = 0, e = b.length; c < e; c++)
				if (u(d = F.data(a, b[c]))) return d;
			a = a.parentNode || 11 === a.nodeType && a.host
		}
	}

	function fd(a) {
		for (yb(a, !0); a.firstChild;) a.removeChild(a.firstChild)
	}

	function Fb(a, b) {
		b || yb(a);
		var d = a.parentNode;
		d && d.removeChild(a)
	}

	function fg(a, b) {
		b = b || w;
		if ("complete" === b.document.readyState) b.setTimeout(a);
		else F(b).on("load", a)
	}

	function cd(a) {
		function b() {
			w.document.removeEventListener("DOMContentLoaded",
				b);
			w.removeEventListener("load", b);
			a()
		}
		"complete" === w.document.readyState ? w.setTimeout(a) : (w.document.addEventListener("DOMContentLoaded", b), w.addEventListener("load", b))
	}

	function gd(a, b) {
		var d = Gb[b.toLowerCase()];
		return d && hd[wa(a)] && d
	}

	function gg(a, b) {
		var d = function(c, d) {
			c.isDefaultPrevented = function() {
				return c.defaultPrevented
			};
			var f = b[d || c.type],
				g = f ? f.length : 0;
			if (g) {
				if (x(c.immediatePropagationStopped)) {
					var h = c.stopImmediatePropagation;
					c.stopImmediatePropagation = function() {
						c.immediatePropagationStopped = !0;
						c.stopPropagation && c.stopPropagation();
						h && h.call(c)
					}
				}
				c.isImmediatePropagationStopped = function() {
					return !0 === c.immediatePropagationStopped
				};
				var k = f.specialHandlerWrapper || hg;
				1 < g && (f = qa(f));
				for (var l = 0; l < g; l++) c.isImmediatePropagationStopped() || k(a, c, f[l])
			}
		};
		d.elem = a;
		return d
	}

	function hg(a, b, d) {
		d.call(a, b)
	}

	function ig(a, b, d) {
		var c = b.relatedTarget;
		c && (c === a || jg.call(a, c)) || d.call(a, b)
	}

	function Yf() {
		this.$get = function() {
			return R(W, {
				hasClass: function(a, b) {
					a.attr && (a = a[0]);
					return Bb(a, b)
				},
				addClass: function(a,
					b) {
					a.attr && (a = a[0]);
					return Db(a, b)
				},
				removeClass: function(a, b) {
					a.attr && (a = a[0]);
					return Cb(a, b)
				}
			})
		}
	}

	function Pa(a, b) {
		var d = a && a.$$hashKey;
		if (d) return "function" === typeof d && (d = a.$$hashKey()), d;
		d = typeof a;
		return d = "function" === d || "object" === d && null !== a ? a.$$hashKey = d + ":" + (b || ne)() : d + ":" + a
	}

	function id() {
		this._keys = [];
		this._values = [];
		this._lastKey = NaN;
		this._lastIndex = -1
	}

	function jd(a) {
		a = Function.prototype.toString.call(a).replace(kg, "");
		return a.match(lg) || a.match(mg)
	}

	function ng(a) {
		return (a = jd(a)) ? "function(" +
			(a[1] || "").replace(/[\s\r\n]+/, " ") + ")" : "fn"
	}

	function eb(a, b) {
		function d(a) {
			return function(b, c) {
				if (G(b)) p(b, Ic(a));
				else return a(b, c)
			}
		}

		function c(a, b) {
			Ka(a, "service");
			if (E(b) || H(b)) b = q.instantiate(b);
			if (!b.$get) throw ya("pget", a);
			return n[a + "Provider"] = b
		}

		function e(a, b) {
			return function() {
				var c = N.invoke(b, this);
				if (x(c)) throw ya("undef", a);
				return c
			}
		}

		function f(a, b, d) {
			return c(a, {
				$get: !1 !== d ? e(a, b) : b
			})
		}

		function g(a) {
			fb(x(a) || H(a), "modulesToLoad", "not an array");
			var b = [],
				c;
			p(a, function(a) {
				function d(a) {
					var b,
						c;
					b = 0;
					for (c = a.length; b < c; b++) {
						var e = a[b],
							f = q.get(e[0]);
						f[e[1]].apply(f, e[2])
					}
				}
				if (!m.get(a)) {
					m.set(a, !0);
					try {
						D(a) ? (c = ac(a), N.modules[a] = c, b = b.concat(g(c.requires)).concat(c._runBlocks), d(c._invokeQueue), d(c._configBlocks)) : E(a) ? b.push(q.invoke(a)) : H(a) ? b.push(q.invoke(a)) : tb(a, "module")
					} catch (e) {
						throw H(a) && (a = a[a.length - 1]), e.message && e.stack && -1 === e.stack.indexOf(e.message) && (e = e.message + "\n" + e.stack), ya("modulerr", a, e.stack || e.message || e);
					}
				}
			});
			return b
		}

		function h(a, c) {
			function d(b, e) {
				if (a.hasOwnProperty(b)) {
					if (a[b] ===
						k) throw ya("cdep", b + " <- " + l.join(" <- "));
					return a[b]
				}
				try {
					return l.unshift(b), a[b] = k, a[b] = c(b, e), a[b]
				} catch (f) {
					throw a[b] === k && delete a[b], f;
				} finally {
					l.shift()
				}
			}

			function e(a, c, f) {
				var g = [];
				a = eb.$$annotate(a, b, f);
				for (var k = 0, h = a.length; k < h; k++) {
					var l = a[k];
					if ("string" !== typeof l) throw ya("itkn", l);
					g.push(c && c.hasOwnProperty(l) ? c[l] : d(l, f))
				}
				return g
			}
			return {
				invoke: function(a, b, c, d) {
					"string" === typeof c && (d = c, c = null);
					c = e(a, c, d);
					H(a) && (a = a[a.length - 1]);
					d = a;
					if (za || "function" !== typeof d) d = !1;
					else {
						var f = d.$$ngIsClass;
						Ha(f) || (f = d.$$ngIsClass = /^(?:class\b|constructor\()/.test(Function.prototype.toString.call(d)));
						d = f
					}
					return d ? (c.unshift(null), new(Function.prototype.bind.apply(a, c))) : a.apply(b, c)
				},
				instantiate: function(a, b, c) {
					var d = H(a) ? a[a.length - 1] : a;
					a = e(a, b, c);
					a.unshift(null);
					return new(Function.prototype.bind.apply(d, a))
				},
				get: d,
				annotate: eb.$$annotate,
				has: function(b) {
					return n.hasOwnProperty(b + "Provider") || a.hasOwnProperty(b)
				}
			}
		}
		b = !0 === b;
		var k = {},
			l = [],
			m = new Hb,
			n = {
				$provide: {
					provider: d(c),
					factory: d(f),
					service: d(function(a,
						b) {
						return f(a, ["$injector", function(a) {
							return a.instantiate(b)
						}])
					}),
					value: d(function(a, b) {
						return f(a, la(b), !1)
					}),
					constant: d(function(a, b) {
						Ka(a, "constant");
						n[a] = b;
						r[a] = b
					}),
					decorator: function(a, b) {
						var c = q.get(a + "Provider"),
							d = c.$get;
						c.$get = function() {
							var a = N.invoke(d, c);
							return N.invoke(b, null, {
								$delegate: a
							})
						}
					}
				}
			},
			q = n.$injector = h(n, function(a, b) {
				ea.isString(b) && l.push(b);
				throw ya("unpr", l.join(" <- "));
			}),
			r = {},
			I = h(r, function(a, b) {
				var c = q.get(a + "Provider", b);
				return N.invoke(c.$get, c, void 0, a)
			}),
			N = I;
		n.$injectorProvider = {
			$get: la(I)
		};
		N.modules = q.modules = V();
		var t = g(a),
			N = I.get("$injector");
		N.strictDi = b;
		p(t, function(a) {
			a && N.invoke(a)
		});
		return N
	}

	function nf() {
		var a = !0;
		this.disableAutoScrolling = function() {
			a = !1
		};
		this.$get = ["$window", "$location", "$rootScope", function(b, d, c) {
			function e(a) {
				var b = null;
				Array.prototype.some.call(a, function(a) {
					if ("a" === wa(a)) return b = a, !0
				});
				return b
			}

			function f(a) {
				if (a) {
					a.scrollIntoView();
					var c;
					c = g.yOffset;
					E(c) ? c = c() : Vb(c) ? (c = c[0], c = "fixed" !== b.getComputedStyle(c).position ? 0 : c.getBoundingClientRect().bottom) :
						ba(c) || (c = 0);
					c && (a = a.getBoundingClientRect().top, b.scrollBy(0, a - c))
				} else b.scrollTo(0, 0)
			}

			function g(a) {
				a = D(a) ? a : ba(a) ? a.toString() : d.hash();
				var b;
				a ? (b = h.getElementById(a)) ? f(b) : (b = e(h.getElementsByName(a))) ? f(b) : "top" === a && f(null) : f(null)
			}
			var h = b.document;
			a && c.$watch(function() {
				return d.hash()
			}, function(a, b) {
				a === b && "" === a || fg(function() {
					c.$evalAsync(g)
				})
			});
			return g
		}]
	}

	function jb(a, b) {
		if (!a && !b) return "";
		if (!a) return b;
		if (!b) return a;
		H(a) && (a = a.join(" "));
		H(b) && (b = b.join(" "));
		return a + " " + b
	}

	function og(a) {
		D(a) &&
			(a = a.split(" "));
		var b = V();
		p(a, function(a) {
			a.length && (b[a] = !0)
		});
		return b
	}

	function ia(a) {
		return G(a) ? a : {}
	}

	function pg(a, b, d, c) {
		function e(a) {
			try {
				a.apply(null, va.call(arguments, 1))
			} finally {
				if (I--, 0 === I)
					for (; N.length;) try {
						N.pop()()
					} catch (b) {
						d.error(b)
					}
			}
		}

		function f() {
			La = null;
			h()
		}

		function g() {
			t = B();
			t = x(t) ? null : t;
			pa(t, C) && (t = C);
			K = C = t
		}

		function h() {
			var a = K;
			g();
			if (y !== k.url() || a !== t) y = k.url(), K = t, p(J, function(a) {
				a(k.url(), t)
			})
		}
		var k = this,
			l = a.location,
			m = a.history,
			n = a.setTimeout,
			q = a.clearTimeout,
			r = {};
		k.isMock = !1;
		var I = 0,
			N = [];
		k.$$completeOutstandingRequest = e;
		k.$$incOutstandingRequestCount = function() {
			I++
		};
		k.notifyWhenNoOutstandingRequests = function(a) {
			0 === I ? a() : N.push(a)
		};
		var t, K, y = l.href,
			v = b.find("base"),
			La = null,
			B = c.history ? function() {
				try {
					return m.state
				} catch (a) {}
			} : A;
		g();
		k.url = function(b, d, e) {
			x(e) && (e = null);
			l !== a.location && (l = a.location);
			m !== a.history && (m = a.history);
			if (b) {
				var f = K === e;
				if (y === b && (!c.history || f)) return k;
				var h = y && Aa(y) === Aa(b);
				y = b;
				K = e;
				!c.history || h && f ? (h || (La = b), d ? l.replace(b) : h ? (d = l, e = b.indexOf("#"),
					e = -1 === e ? "" : b.substr(e), d.hash = e) : l.href = b, l.href !== b && (La = b)) : (m[d ? "replaceState" : "pushState"](e, "", b), g());
				La && (La = b);
				return k
			}
			return La || l.href.replace(/%27/g, "'")
		};
		k.state = function() {
			return t
		};
		var J = [],
			L = !1,
			C = null;
		k.onUrlChange = function(b) {
			if (!L) {
				if (c.history) F(a).on("popstate", f);
				F(a).on("hashchange", f);
				L = !0
			}
			J.push(b);
			return b
		};
		k.$$applicationDestroyed = function() {
			F(a).off("hashchange popstate", f)
		};
		k.$$checkUrlChange = h;
		k.baseHref = function() {
			var a = v.attr("href");
			return a ? a.replace(/^(https?:)?\/\/[^/]*/,
				"") : ""
		};
		k.defer = function(a, b) {
			var c;
			I++;
			c = n(function() {
				delete r[c];
				e(a)
			}, b || 0);
			r[c] = !0;
			return c
		};
		k.defer.cancel = function(a) {
			return r[a] ? (delete r[a], q(a), e(A), !0) : !1
		}
	}

	function uf() {
		this.$get = ["$window", "$log", "$sniffer", "$document", function(a, b, d, c) {
			return new pg(a, c, b, d)
		}]
	}

	function vf() {
		this.$get = function() {
			function a(a, c) {
				function e(a) {
					a !== n && (q ? q === a && (q = a.n) : q = a, f(a.n, a.p), f(a, n), n = a, n.n = null)
				}

				function f(a, b) {
					a !== b && (a && (a.p = b), b && (b.n = a))
				}
				if (a in b) throw M("$cacheFactory")("iid", a);
				var g = 0,
					h =
					R({}, c, {
						id: a
					}),
					k = V(),
					l = c && c.capacity || Number.MAX_VALUE,
					m = V(),
					n = null,
					q = null;
				return b[a] = {
					put: function(a, b) {
						if (!x(b)) {
							if (l < Number.MAX_VALUE) {
								var c = m[a] || (m[a] = {
									key: a
								});
								e(c)
							}
							a in k || g++;
							k[a] = b;
							g > l && this.remove(q.key);
							return b
						}
					},
					get: function(a) {
						if (l < Number.MAX_VALUE) {
							var b = m[a];
							if (!b) return;
							e(b)
						}
						return k[a]
					},
					remove: function(a) {
						if (l < Number.MAX_VALUE) {
							var b = m[a];
							if (!b) return;
							b === n && (n = b.p);
							b === q && (q = b.n);
							f(b.n, b.p);
							delete m[a]
						}
						a in k && (delete k[a], g--)
					},
					removeAll: function() {
						k = V();
						g = 0;
						m = V();
						n = q = null
					},
					destroy: function() {
						m =
							h = k = null;
						delete b[a]
					},
					info: function() {
						return R({}, h, {
							size: g
						})
					}
				}
			}
			var b = {};
			a.info = function() {
				var a = {};
				p(b, function(b, e) {
					a[e] = b.info()
				});
				return a
			};
			a.get = function(a) {
				return b[a]
			};
			return a
		}
	}

	function Sf() {
		this.$get = ["$cacheFactory", function(a) {
			return a("templates")
		}]
	}

	function Tc(a, b) {
		function d(a, b, c) {
			var d = /^\s*([@&<]|=(\*?))(\??)\s*([\w$]*)\s*$/,
				e = V();
			p(a, function(a, f) {
				if (a in n) e[f] = n[a];
				else {
					var g = a.match(d);
					if (!g) throw fa("iscp", b, f, a, c ? "controller bindings definition" : "isolate scope definition");
					e[f] = {
						mode: g[1][0],
						collection: "*" === g[2],
						optional: "?" === g[3],
						attrName: g[4] || f
					};
					g[4] && (n[a] = e[f])
				}
			});
			return e
		}

		function c(a) {
			var b = a.charAt(0);
			if (!b || b !== P(b)) throw fa("baddir", a);
			if (a !== a.trim()) throw fa("baddir", a);
		}

		function e(a) {
			var b = a.require || a.controller && a.name;
			!H(b) && G(b) && p(b, function(a, c) {
				var d = a.match(l);
				a.substring(d[0].length) || (b[c] = d[0] + c)
			});
			return b
		}
		var f = {},
			g = /^\s*directive:\s*([\w-]+)\s+(.*)$/,
			h = /(([\w-]+)(?::([^;]+))?;?)/,
			k = re("ngSrc,ngSrcset,src,srcset"),
			l = /^(?:(\^\^?)?(\?)?(\^\^?)?)?/,
			m = /^(on[a-z]+|formaction)$/,
			n = V();
		this.directive = function y(b, d) {
			fb(b, "name");
			Ka(b, "directive");
			D(b) ? (c(b), fb(d, "directiveFactory"), f.hasOwnProperty(b) || (f[b] = [], a.factory(b + "Directive", ["$injector", "$exceptionHandler", function(a, c) {
				var d = [];
				p(f[b], function(f, g) {
					try {
						var h = a.invoke(f);
						E(h) ? h = {
							compile: la(h)
						} : !h.compile && h.link && (h.compile = la(h.link));
						h.priority = h.priority || 0;
						h.index = g;
						h.name = h.name || b;
						h.require = e(h);
						var k = h,
							l = h.restrict;
						if (l && (!D(l) || !/[EACM]/.test(l))) throw fa("badrestrict", l, b);
						k.restrict =
							l || "EA";
						h.$$moduleName = f.$$moduleName;
						d.push(h)
					} catch (m) {
						c(m)
					}
				});
				return d
			}])), f[b].push(d)) : p(b, Ic(y));
			return this
		};
		this.component = function(a, b) {
			function c(a) {
				function e(b) {
					return E(b) || H(b) ? function(c, d) {
						return a.invoke(b, this, {
							$element: c,
							$attrs: d
						})
					} : b
				}
				var f = b.template || b.templateUrl ? b.template : "",
					g = {
						controller: d,
						controllerAs: qg(b.controller) || b.controllerAs || "$ctrl",
						template: e(f),
						templateUrl: e(b.templateUrl),
						transclude: b.transclude,
						scope: {},
						bindToController: b.bindings || {},
						restrict: "E",
						require: b.require
					};
				p(b, function(a, b) {
					"$" === b.charAt(0) && (g[b] = a)
				});
				return g
			}
			var d = b.controller || function() {};
			p(b, function(a, b) {
				"$" === b.charAt(0) && (c[b] = a, E(d) && (d[b] = a))
			});
			c.$inject = ["$injector"];
			return this.directive(a, c)
		};
		this.aHrefSanitizationWhitelist = function(a) {
			return u(a) ? (b.aHrefSanitizationWhitelist(a), this) : b.aHrefSanitizationWhitelist()
		};
		this.imgSrcSanitizationWhitelist = function(a) {
			return u(a) ? (b.imgSrcSanitizationWhitelist(a), this) : b.imgSrcSanitizationWhitelist()
		};
		var q = !0;
		this.debugInfoEnabled = function(a) {
			return u(a) ?
				(q = a, this) : q
		};
		var r = !1;
		this.preAssignBindingsEnabled = function(a) {
			return u(a) ? (r = a, this) : r
		};
		var I = 10;
		this.onChangesTtl = function(a) {
			return arguments.length ? (I = a, this) : I
		};
		var N = !0;
		this.commentDirectivesEnabled = function(a) {
			return arguments.length ? (N = a, this) : N
		};
		var t = !0;
		this.cssClassDirectivesEnabled = function(a) {
			return arguments.length ? (t = a, this) : t
		};
		this.$get = ["$injector", "$interpolate", "$exceptionHandler", "$templateRequest", "$parse", "$controller", "$rootScope", "$sce", "$animate", "$$sanitizeUri", function(a,
			b, c, e, n, L, C, z, O, X) {
			function T() {
				try {
					if (!--ya) throw ia = void 0, fa("infchng", I);
					C.$apply(function() {
						for (var a = [], b = 0, c = ia.length; b < c; ++b) try {
							ia[b]()
						} catch (d) {
							a.push(d)
						}
						ia = void 0;
						if (a.length) throw a;
					})
				} finally {
					ya++
				}
			}

			function s(a, b) {
				if (b) {
					var c = Object.keys(b),
						d, e, f;
					d = 0;
					for (e = c.length; d < e; d++) f = c[d], this[f] = b[f]
				} else this.$attr = {};
				this.$$element = a
			}

			function Q(a, b, c) {
				ta.innerHTML = "<span " + b + ">";
				b = ta.firstChild.attributes;
				var d = b[0];
				b.removeNamedItem(d.name);
				d.value = c;
				a.attributes.setNamedItem(d)
			}

			function Ma(a,
				b) {
				try {
					a.addClass(b)
				} catch (c) {}
			}

			function ca(a, b, c, d, e) {
				a instanceof F || (a = F(a));
				var f = Na(a, b, a, c, d, e);
				ca.$$addScopeClass(a);
				var g = null;
				return function(b, c, d) {
					if (!a) throw fa("multilink");
					fb(b, "scope");
					e && e.needsNewScope && (b = b.$parent.$new());
					d = d || {};
					var h = d.parentBoundTranscludeFn,
						k = d.transcludeControllers;
					d = d.futureParentElement;
					h && h.$$boundTransclude && (h = h.$$boundTransclude);
					g || (g = (d = d && d[0]) ? "foreignobject" !== wa(d) && ma.call(d).match(/SVG/) ? "svg" : "html" : "html");
					d = "html" !== g ? F(ha(g, F("<div>").append(a).html())) :
						c ? Oa.clone.call(a) : a;
					if (k)
						for (var l in k) d.data("$" + l + "Controller", k[l].instance);
					ca.$$addScopeInfo(d, b);
					c && c(d, b);
					f && f(b, d, d, h);
					c || (a = f = null);
					return d
				}
			}

			function Na(a, b, c, d, e, f) {
				function g(a, c, d, e) {
					var f, k, l, m, n, q, r;
					if (J)
						for (r = Array(c.length), m = 0; m < h.length; m += 3) f = h[m], r[f] = c[f];
					else r = c;
					m = 0;
					for (n = h.length; m < n;) k = r[h[m++]], c = h[m++], f = h[m++], c ? (c.scope ? (l = a.$new(), ca.$$addScopeInfo(F(k), l)) : l = a, q = c.transcludeOnThisElement ? ja(a, c.transclude, e) : !c.templateOnThisElement && e ? e : !e && b ? ja(a, b) : null, c(f, l,
						k, d, q)) : f && f(a, k.childNodes, void 0, e)
				}
				for (var h = [], k = H(a) || a instanceof F, l, m, n, q, J, r = 0; r < a.length; r++) {
					l = new s;
					11 === za && M(a, r, k);
					m = hc(a[r], [], l, 0 === r ? d : void 0, e);
					(f = m.length ? W(m, a[r], l, b, c, null, [], [], f) : null) && f.scope && ca.$$addScopeClass(l.$$element);
					l = f && f.terminal || !(n = a[r].childNodes) || !n.length ? null : Na(n, f ? (f.transcludeOnThisElement || !f.templateOnThisElement) && f.transclude : b);
					if (f || l) h.push(r, f, l), q = !0, J = J || f;
					f = null
				}
				return q ? g : null
			}

			function M(a, b, c) {
				var d = a[b],
					e = d.parentNode,
					f;
				if (d.nodeType ===
					Ia)
					for (;;) {
						f = e ? d.nextSibling : a[b + 1];
						if (!f || f.nodeType !== Ia) break;
						d.nodeValue += f.nodeValue;
						f.parentNode && f.parentNode.removeChild(f);
						c && f === a[b + 1] && a.splice(b + 1, 1)
					}
			}

			function ja(a, b, c) {
				function d(e, f, g, h, k) {
					e || (e = a.$new(!1, k), e.$$transcluded = !0);
					return b(e, f, {
						parentBoundTranscludeFn: c,
						transcludeControllers: g,
						futureParentElement: h
					})
				}
				var e = d.$$slots = V(),
					f;
				for (f in b.$$slots) e[f] = b.$$slots[f] ? ja(a, b.$$slots[f], c) : null;
				return d
			}

			function hc(a, b, c, d, e) {
				var f = c.$attr,
					g;
				switch (a.nodeType) {
					case 1:
						g = wa(a);
						Y(b,
							Ba(g), "E", d, e);
						for (var k, l, m, n, q = a.attributes, J = 0, r = q && q.length; J < r; J++) {
							var B = !1,
								C = !1;
							k = q[J];
							l = k.name;
							m = k.value;
							k = Ba(l);
							(n = Ja.test(k)) && (l = l.replace(kd, "").substr(8).replace(/_(.)/g, function(a, b) {
								return b.toUpperCase()
							}));
							(k = k.match(Ka)) && Z(k[1]) && (B = l, C = l.substr(0, l.length - 5) + "end", l = l.substr(0, l.length - 6));
							k = Ba(l.toLowerCase());
							f[k] = l;
							if (n || !c.hasOwnProperty(k)) c[k] = m, gd(a, k) && (c[k] = !0);
							qa(a, b, m, k, n);
							Y(b, k, "A", d, e, B, C)
						}
						"input" === g && "hidden" === a.getAttribute("type") && a.setAttribute("autocomplete",
							"off");
						if (!Ga) break;
						f = a.className;
						G(f) && (f = f.animVal);
						if (D(f) && "" !== f)
							for (; a = h.exec(f);) k = Ba(a[2]), Y(b, k, "C", d, e) && (c[k] = S(a[3])), f = f.substr(a.index + a[0].length);
						break;
					case Ia:
						la(b, a.nodeValue);
						break;
					case 8:
						if (!Fa) break;
						kb(a, b, c, d, e)
				}
				b.sort(ea);
				return b
			}

			function kb(a, b, c, d, e) {
				try {
					var f = g.exec(a.nodeValue);
					if (f) {
						var h = Ba(f[1]);
						Y(b, h, "M", d, e) && (c[h] = S(f[2]))
					}
				} catch (k) {}
			}

			function ld(a, b, c) {
				var d = [],
					e = 0;
				if (b && a.hasAttribute && a.hasAttribute(b)) {
					do {
						if (!a) throw fa("uterdir", b, c);
						1 === a.nodeType && (a.hasAttribute(b) &&
							e++, a.hasAttribute(c) && e--);
						d.push(a);
						a = a.nextSibling
					} while (0 < e)
				} else d.push(a);
				return F(d)
			}

			function md(a, b, c) {
				return function(d, e, f, g, h) {
					e = ld(e[0], b, c);
					return a(d, e, f, g, h)
				}
			}

			function ic(a, b, c, d, e, f) {
				var g;
				return a ? ca(b, c, d, e, f) : function() {
					g || (g = ca(b, c, d, e, f), b = c = f = null);
					return g.apply(this, arguments)
				}
			}

			function W(a, b, d, e, f, g, h, k, l) {
				function m(a, b, c, d) {
					if (a) {
						c && (a = md(a, c, d));
						a.require = z.require;
						a.directiveName = v;
						if (C === z || z.$$isolateScope) a = ra(a, {
							isolateScope: !0
						});
						h.push(a)
					}
					if (b) {
						c && (b = md(b, c, d));
						b.require =
							z.require;
						b.directiveName = v;
						if (C === z || z.$$isolateScope) b = ra(b, {
							isolateScope: !0
						});
						k.push(b)
					}
				}

				function n(a, e, f, g, l) {
					function m(a, b, c, d) {
						var e;
						Za(a) || (d = c, c = b, b = a, a = void 0);
						X && (e = O);
						c || (c = X ? v.parent() : v);
						if (d) {
							var f = l.$$slots[d];
							if (f) return f(a, b, e, c, Q);
							if (x(f)) throw fa("noslot", d, xa(v));
						} else return l(a, b, e, c, Q)
					}
					var q, z, t, I, y, O, T, v;
					b === f ? (g = d, v = d.$$element) : (v = F(f), g = new s(v, d));
					y = e;
					C ? I = e.$new(!0) : J && (y = e.$parent);
					l && (T = m, T.$$boundTransclude = l, T.isSlotFilled = function(a) {
						return !!l.$$slots[a]
					});
					B && (O =
						ba(v, g, T, B, I, e, C));
					C && (ca.$$addScopeInfo(v, I, !0, !(L && (L === C || L === C.$$originalDirective))), ca.$$addScopeClass(v, !0), I.$$isolateBindings = C.$$isolateBindings, z = na(e, g, I, I.$$isolateBindings, C), z.removeWatches && I.$on("$destroy", z.removeWatches));
					for (q in O) {
						z = B[q];
						t = O[q];
						var Ib = z.$$bindings.bindToController;
						if (r) {
							t.bindingInfo = Ib ? na(y, g, t.instance, Ib, z) : {};
							var N = t();
							N !== t.instance && (t.instance = N, v.data("$" + z.name + "Controller", N), t.bindingInfo.removeWatches && t.bindingInfo.removeWatches(), t.bindingInfo =
								na(y, g, t.instance, Ib, z))
						} else t.instance = t(), v.data("$" + z.name + "Controller", t.instance), t.bindingInfo = na(y, g, t.instance, Ib, z)
					}
					p(B, function(a, b) {
						var c = a.require;
						a.bindToController && !H(c) && G(c) && R(O[b].instance, U(b, c, v, O))
					});
					p(O, function(a) {
						var b = a.instance;
						if (E(b.$onChanges)) try {
							b.$onChanges(a.bindingInfo.initialChanges)
						} catch (d) {
							c(d)
						}
						if (E(b.$onInit)) try {
							b.$onInit()
						} catch (e) {
							c(e)
						}
						E(b.$doCheck) && (y.$watch(function() {
							b.$doCheck()
						}), b.$doCheck());
						E(b.$onDestroy) && y.$on("$destroy", function() {
							b.$onDestroy()
						})
					});
					q = 0;
					for (z = h.length; q < z; q++) t = h[q], sa(t, t.isolateScope ? I : e, v, g, t.require && U(t.directiveName, t.require, v, O), T);
					var Q = e;
					C && (C.template || null === C.templateUrl) && (Q = I);
					a && a(Q, f.childNodes, void 0, l);
					for (q = k.length - 1; 0 <= q; q--) t = k[q], sa(t, t.isolateScope ? I : e, v, g, t.require && U(t.directiveName, t.require, v, O), T);
					p(O, function(a) {
						a = a.instance;
						E(a.$postLink) && a.$postLink()
					})
				}
				l = l || {};
				for (var q = -Number.MAX_VALUE, J = l.newScopeDirective, B = l.controllerDirectives, C = l.newIsolateScopeDirective, L = l.templateDirective, t = l.nonTlbTranscludeDirective,
						I = !1, O = !1, X = l.hasElementTranscludeDirective, y = d.$$element = F(b), z, v, T, N = e, Q, u = !1, Ma = !1, w, A = 0, D = a.length; A < D; A++) {
					z = a[A];
					var Na = z.$$start,
						M = z.$$end;
					Na && (y = ld(b, Na, M));
					T = void 0;
					if (q > z.priority) break;
					if (w = z.scope) z.templateUrl || (G(w) ? ($("new/isolated scope", C || J, z, y), C = z) : $("new/isolated scope", C, z, y)), J = J || z;
					v = z.name;
					if (!u && (z.replace && (z.templateUrl || z.template) || z.transclude && !z.$$tlb)) {
						for (w = A + 1; u = a[w++];)
							if (u.transclude && !u.$$tlb || u.replace && (u.templateUrl || u.template)) {
								Ma = !0;
								break
							} u = !0
					}!z.templateUrl &&
						z.controller && (B = B || V(), $("'" + v + "' controller", B[v], z, y), B[v] = z);
					if (w = z.transclude)
						if (I = !0, z.$$tlb || ($("transclusion", t, z, y), t = z), "element" === w) X = !0, q = z.priority, T = y, y = d.$$element = F(ca.$$createComment(v, d[v])), b = y[0], ka(f, va.call(T, 0), b), T[0].$$parentNode = T[0].parentNode, N = ic(Ma, T, e, q, g && g.name, {
							nonTlbTranscludeDirective: t
						});
						else {
							var ja = V();
							if (G(w)) {
								T = [];
								var P = V(),
									kb = V();
								p(w, function(a, b) {
									var c = "?" === a.charAt(0);
									a = c ? a.substring(1) : a;
									P[a] = b;
									ja[b] = null;
									kb[b] = c
								});
								p(y.contents(), function(a) {
									var b = P[Ba(wa(a))];
									b ? (kb[b] = !0, ja[b] = ja[b] || [], ja[b].push(a)) : T.push(a)
								});
								p(kb, function(a, b) {
									if (!a) throw fa("reqslot", b);
								});
								for (var gc in ja) ja[gc] && (ja[gc] = ic(Ma, ja[gc], e))
							} else T = F(ec(b)).contents();
							y.empty();
							N = ic(Ma, T, e, void 0, void 0, {
								needsNewScope: z.$$isolateScope || z.$$newScope
							});
							N.$$slots = ja
						} if (z.template)
						if (O = !0, $("template", L, z, y), L = z, w = E(z.template) ? z.template(y, d) : z.template, w = Ea(w), z.replace) {
							g = z;
							T = bc.test(w) ? nd(ha(z.templateNamespace, S(w))) : [];
							b = T[0];
							if (1 !== T.length || 1 !== b.nodeType) throw fa("tplrt", v, "");
							ka(f, y, b);
							D = {
								$attr: {}
							};
							w = hc(b, [], D);
							var Y = a.splice(A + 1, a.length - (A + 1));
							(C || J) && aa(w, C, J);
							a = a.concat(w).concat(Y);
							da(d, D);
							D = a.length
						} else y.html(w);
					if (z.templateUrl) O = !0, $("template", L, z, y), L = z, z.replace && (g = z), n = ga(a.splice(A, a.length - A), y, d, f, I && N, h, k, {
						controllerDirectives: B,
						newScopeDirective: J !== z && J,
						newIsolateScopeDirective: C,
						templateDirective: L,
						nonTlbTranscludeDirective: t
					}), D = a.length;
					else if (z.compile) try {
						Q = z.compile(y, d, N);
						var Z = z.$$originalDirective || z;
						E(Q) ? m(null, bb(Z, Q), Na, M) : Q && m(bb(Z, Q.pre),
							bb(Z, Q.post), Na, M)
					} catch (ea) {
						c(ea, xa(y))
					}
					z.terminal && (n.terminal = !0, q = Math.max(q, z.priority))
				}
				n.scope = J && !0 === J.scope;
				n.transcludeOnThisElement = I;
				n.templateOnThisElement = O;
				n.transclude = N;
				l.hasElementTranscludeDirective = X;
				return n
			}

			function U(a, b, c, d) {
				var e;
				if (D(b)) {
					var f = b.match(l);
					b = b.substring(f[0].length);
					var g = f[1] || f[3],
						f = "?" === f[2];
					"^^" === g ? c = c.parent() : e = (e = d && d[b]) && e.instance;
					if (!e) {
						var h = "$" + b + "Controller";
						e = g ? c.inheritedData(h) : c.data(h)
					}
					if (!e && !f) throw fa("ctreq", b, a);
				} else if (H(b))
					for (e = [], g = 0, f = b.length; g < f; g++) e[g] = U(a, b[g], c, d);
				else G(b) && (e = {}, p(b, function(b, f) {
					e[f] = U(a, b, c, d)
				}));
				return e || null
			}

			function ba(a, b, c, d, e, f, g) {
				var h = V(),
					k;
				for (k in d) {
					var l = d[k],
						m = {
							$scope: l === g || l.$$isolateScope ? e : f,
							$element: a,
							$attrs: b,
							$transclude: c
						},
						n = l.controller;
					"@" === n && (n = b[l.name]);
					m = L(n, m, !0, l.controllerAs);
					h[l.name] = m;
					a.data("$" + l.name + "Controller", m.instance)
				}
				return h
			}

			function aa(a, b, c) {
				for (var d = 0, e = a.length; d < e; d++) a[d] = Wb(a[d], {
					$$isolateScope: b,
					$$newScope: c
				})
			}

			function Y(b, c, e, g, h, k, l) {
				if (c ===
					h) return null;
				var m = null;
				if (f.hasOwnProperty(c)) {
					h = a.get(c + "Directive");
					for (var n = 0, q = h.length; n < q; n++)
						if (c = h[n], (x(g) || g > c.priority) && -1 !== c.restrict.indexOf(e)) {
							k && (c = Wb(c, {
								$$start: k,
								$$end: l
							}));
							if (!c.$$bindings) {
								var J = m = c,
									r = c.name,
									B = {
										isolateScope: null,
										bindToController: null
									};
								G(J.scope) && (!0 === J.bindToController ? (B.bindToController = d(J.scope, r, !0), B.isolateScope = {}) : B.isolateScope = d(J.scope, r, !1));
								G(J.bindToController) && (B.bindToController = d(J.bindToController, r, !0));
								if (B.bindToController && !J.controller) throw fa("noctrl",
									r);
								m = m.$$bindings = B;
								G(m.isolateScope) && (c.$$isolateBindings = m.isolateScope)
							}
							b.push(c);
							m = c
						}
				}
				return m
			}

			function Z(b) {
				if (f.hasOwnProperty(b))
					for (var c = a.get(b + "Directive"), d = 0, e = c.length; d < e; d++)
						if (b = c[d], b.multiElement) return !0;
				return !1
			}

			function da(a, b) {
				var c = b.$attr,
					d = a.$attr;
				p(a, function(d, e) {
					"$" !== e.charAt(0) && (b[e] && b[e] !== d && (d = d.length ? d + (("style" === e ? ";" : " ") + b[e]) : b[e]), a.$set(e, d, !0, c[e]))
				});
				p(b, function(b, e) {
					a.hasOwnProperty(e) || "$" === e.charAt(0) || (a[e] = b, "class" !== e && "style" !== e && (d[e] = c[e]))
				})
			}

			function ga(a, b, d, f, g, h, k, l) {
				var m = [],
					n, q, J = b[0],
					r = a.shift(),
					z = Wb(r, {
						templateUrl: null,
						transclude: null,
						replace: null,
						$$originalDirective: r
					}),
					t = E(r.templateUrl) ? r.templateUrl(b, d) : r.templateUrl,
					C = r.templateNamespace;
				b.empty();
				e(t).then(function(c) {
					var e, B;
					c = Ea(c);
					if (r.replace) {
						c = bc.test(c) ? nd(ha(C, S(c))) : [];
						e = c[0];
						if (1 !== c.length || 1 !== e.nodeType) throw fa("tplrt", r.name, t);
						c = {
							$attr: {}
						};
						ka(f, b, e);
						var L = hc(e, [], c);
						G(r.scope) && aa(L, !0);
						a = L.concat(a);
						da(d, c)
					} else e = J, b.html(c);
					a.unshift(z);
					n = W(a, e, d, g, b,
						r, h, k, l);
					p(f, function(a, c) {
						a === e && (f[c] = b[0])
					});
					for (q = Na(b[0].childNodes, g); m.length;) {
						c = m.shift();
						B = m.shift();
						var I = m.shift(),
							y = m.shift(),
							L = b[0];
						if (!c.$$destroyed) {
							if (B !== J) {
								var O = B.className;
								l.hasElementTranscludeDirective && r.replace || (L = ec(e));
								ka(I, F(B), L);
								Ma(F(L), O)
							}
							B = n.transcludeOnThisElement ? ja(c, n.transclude, y) : y;
							n(q, c, L, f, B)
						}
					}
					m = null
				}).catch(function(a) {
					a instanceof Error && c(a)
				});
				return function(a, b, c, d, e) {
					a = e;
					b.$$destroyed || (m ? m.push(b, c, d, a) : (n.transcludeOnThisElement && (a = ja(b, n.transclude,
						e)), n(q, b, c, d, a)))
				}
			}

			function ea(a, b) {
				var c = b.priority - a.priority;
				return 0 !== c ? c : a.name !== b.name ? a.name < b.name ? -1 : 1 : a.index - b.index
			}

			function $(a, b, c, d) {
				function e(a) {
					return a ? " (module: " + a + ")" : ""
				}
				if (b) throw fa("multidir", b.name, e(b.$$moduleName), c.name, e(c.$$moduleName), a, xa(d));
			}

			function la(a, c) {
				var d = b(c, !0);
				d && a.push({
					priority: 0,
					compile: function(a) {
						a = a.parent();
						var b = !!a.length;
						b && ca.$$addBindingClass(a);
						return function(a, c) {
							var e = c.parent();
							b || ca.$$addBindingClass(e);
							ca.$$addBindingInfo(e, d.expressions);
							a.$watch(d, function(a) {
								c[0].nodeValue = a
							})
						}
					}
				})
			}

			function ha(a, b) {
				a = P(a || "html");
				switch (a) {
					case "svg":
					case "math":
						var c = w.document.createElement("div");
						c.innerHTML = "<" + a + ">" + b + "</" + a + ">";
						return c.childNodes[0].childNodes;
					default:
						return b
				}
			}

			function oa(a, b) {
				if ("srcdoc" === b) return z.HTML;
				var c = wa(a);
				if ("src" === b || "ngSrc" === b) {
					if (-1 === ["img", "video", "audio", "source", "track"].indexOf(c)) return z.RESOURCE_URL
				} else if ("xlinkHref" === b || "form" === c && "action" === b || "link" === c && "href" === b) return z.RESOURCE_URL
			}

			function qa(a,
				c, d, e, f) {
				var g = oa(a, e),
					h = k[e] || f,
					l = b(d, !f, g, h);
				if (l) {
					if ("multiple" === e && "select" === wa(a)) throw fa("selmulti", xa(a));
					if (m.test(e)) throw fa("nodomevents");
					c.push({
						priority: 100,
						compile: function() {
							return {
								pre: function(a, c, f) {
									c = f.$$observers || (f.$$observers = V());
									var k = f[e];
									k !== d && (l = k && b(k, !0, g, h), d = k);
									l && (f[e] = l(a), (c[e] || (c[e] = [])).$$inter = !0, (f.$$observers && f.$$observers[e].$$scope || a).$watch(l, function(a, b) {
										"class" === e && a !== b ? f.$updateClass(a, b) : f.$set(e, a)
									}))
								}
							}
						}
					})
				}
			}

			function ka(a, b, c) {
				var d = b[0],
					e =
					b.length,
					f = d.parentNode,
					g, h;
				if (a)
					for (g = 0, h = a.length; g < h; g++)
						if (a[g] === d) {
							a[g++] = c;
							h = g + e - 1;
							for (var k = a.length; g < k; g++, h++) h < k ? a[g] = a[h] : delete a[g];
							a.length -= e - 1;
							a.context === d && (a.context = c);
							break
						} f && f.replaceChild(c, d);
				a = w.document.createDocumentFragment();
				for (g = 0; g < e; g++) a.appendChild(b[g]);
				F.hasData(d) && (F.data(c, F.data(d)), F(d).off("$destroy"));
				F.cleanData(a.querySelectorAll("*"));
				for (g = 1; g < e; g++) delete b[g];
				b[0] = c;
				b.length = 1
			}

			function ra(a, b) {
				return R(function() {
						return a.apply(null, arguments)
					},
					a, b)
			}

			function sa(a, b, d, e, f, g) {
				try {
					a(b, d, e, f, g)
				} catch (h) {
					c(h, xa(d))
				}
			}

			function na(a, c, d, e, f) {
				function g(b, c, e) {
					!E(d.$onChanges) || c === e || c !== c && e !== e || (ia || (a.$$postDigest(T), ia = []), m || (m = {}, ia.push(h)), m[b] && (e = m[b].previousValue), m[b] = new Jb(e, c))
				}

				function h() {
					d.$onChanges(m);
					m = void 0
				}
				var k = [],
					l = {},
					m;
				p(e, function(e, h) {
					var m = e.attrName,
						q = e.optional,
						r, B, t, z;
					switch (e.mode) {
						case "@":
							q || ua.call(c, m) || (d[h] = c[m] = void 0);
							q = c.$observe(m, function(a) {
								if (D(a) || Ha(a)) g(h, a, d[h]), d[h] = a
							});
							c.$$observers[m].$$scope =
								a;
							r = c[m];
							D(r) ? d[h] = b(r)(a) : Ha(r) && (d[h] = r);
							l[h] = new Jb(jc, d[h]);
							k.push(q);
							break;
						case "=":
							if (!ua.call(c, m)) {
								if (q) break;
								c[m] = void 0
							}
							if (q && !c[m]) break;
							B = n(c[m]);
							z = B.literal ? pa : function(a, b) {
								return a === b || a !== a && b !== b
							};
							t = B.assign || function() {
								r = d[h] = B(a);
								throw fa("nonassign", c[m], m, f.name);
							};
							r = d[h] = B(a);
							q = function(b) {
								z(b, d[h]) || (z(b, r) ? t(a, b = d[h]) : d[h] = b);
								return r = b
							};
							q.$stateful = !0;
							q = e.collection ? a.$watchCollection(c[m], q) : a.$watch(n(c[m], q), null, B.literal);
							k.push(q);
							break;
						case "<":
							if (!ua.call(c, m)) {
								if (q) break;
								c[m] = void 0
							}
							if (q && !c[m]) break;
							B = n(c[m]);
							var C = B.literal,
								L = d[h] = B(a);
							l[h] = new Jb(jc, d[h]);
							q = a.$watch(B, function(a, b) {
								if (b === a) {
									if (b === L || C && pa(b, L)) return;
									b = L
								}
								g(h, a, b);
								d[h] = a
							}, C);
							k.push(q);
							break;
						case "&":
							B = c.hasOwnProperty(m) ? n(c[m]) : A;
							if (B === A && q) break;
							d[h] = function(b) {
								return B(a, b)
							}
					}
				});
				return {
					initialChanges: l,
					removeWatches: k.length && function() {
						for (var a = 0, b = k.length; a < b; ++a) k[a]()
					}
				}
			}
			var Ca = /^\w/,
				ta = w.document.createElement("div"),
				Fa = N,
				Ga = t,
				ya = I,
				ia;
			s.prototype = {
				$normalize: Ba,
				$addClass: function(a) {
					a &&
						0 < a.length && O.addClass(this.$$element, a)
				},
				$removeClass: function(a) {
					a && 0 < a.length && O.removeClass(this.$$element, a)
				},
				$updateClass: function(a, b) {
					var c = od(a, b);
					c && c.length && O.addClass(this.$$element, c);
					(c = od(b, a)) && c.length && O.removeClass(this.$$element, c)
				},
				$set: function(a, b, d, e) {
					var f = gd(this.$$element[0], a),
						g = pd[a],
						h = a;
					f ? (this.$$element.prop(a, b), e = f) : g && (this[g] = b, h = g);
					this[a] = b;
					e ? this.$attr[a] = e : (e = this.$attr[a]) || (this.$attr[a] = e = Qc(a, "-"));
					f = wa(this.$$element);
					if ("a" === f && ("href" === a || "xlinkHref" ===
							a) || "img" === f && "src" === a) this[a] = b = X(b, "src" === a);
					else if ("img" === f && "srcset" === a && u(b)) {
						for (var f = "", g = S(b), k = /(\s+\d+x\s*,|\s+\d+w\s*,|\s+,|,\s+)/, k = /\s/.test(g) ? k : /(,)/, g = g.split(k), k = Math.floor(g.length / 2), l = 0; l < k; l++) var m = 2 * l,
							f = f + X(S(g[m]), !0),
							f = f + (" " + S(g[m + 1]));
						g = S(g[2 * l]).split(/\s/);
						f += X(S(g[0]), !0);
						2 === g.length && (f += " " + S(g[1]));
						this[a] = b = f
					}!1 !== d && (null === b || x(b) ? this.$$element.removeAttr(e) : Ca.test(e) ? this.$$element.attr(e, b) : Q(this.$$element[0], e, b));
					(a = this.$$observers) && p(a[h], function(a) {
						try {
							a(b)
						} catch (d) {
							c(d)
						}
					})
				},
				$observe: function(a, b) {
					var c = this,
						d = c.$$observers || (c.$$observers = V()),
						e = d[a] || (d[a] = []);
					e.push(b);
					C.$evalAsync(function() {
						e.$$inter || !c.hasOwnProperty(a) || x(c[a]) || b(c[a])
					});
					return function() {
						$a(e, b)
					}
				}
			};
			var Aa = b.startSymbol(),
				Da = b.endSymbol(),
				Ea = "{{" === Aa && "}}" === Da ? Ya : function(a) {
					return a.replace(/\{\{/g, Aa).replace(/}}/g, Da)
				},
				Ja = /^ngAttr[A-Z]/,
				Ka = /^(.+)Start$/;
			ca.$$addBindingInfo = q ? function(a, b) {
				var c = a.data("$binding") || [];
				H(b) ? c = c.concat(b) : c.push(b);
				a.data("$binding", c)
			} : A;
			ca.$$addBindingClass =
				q ? function(a) {
					Ma(a, "ng-binding")
				} : A;
			ca.$$addScopeInfo = q ? function(a, b, c, d) {
				a.data(c ? d ? "$isolateScopeNoTemplate" : "$isolateScope" : "$scope", b)
			} : A;
			ca.$$addScopeClass = q ? function(a, b) {
				Ma(a, b ? "ng-isolate-scope" : "ng-scope")
			} : A;
			ca.$$createComment = function(a, b) {
				var c = "";
				q && (c = " " + (a || "") + ": ", b && (c += b + " "));
				return w.document.createComment(c)
			};
			return ca
		}]
	}

	function Jb(a, b) {
		this.previousValue = a;
		this.currentValue = b
	}

	function Ba(a) {
		return a.replace(kd, "").replace(rg, gb)
	}

	function od(a, b) {
		var d = "",
			c = a.split(/\s+/),
			e = b.split(/\s+/),
			f = 0;
		a: for (; f < c.length; f++) {
			for (var g = c[f], h = 0; h < e.length; h++)
				if (g === e[h]) continue a;
			d += (0 < d.length ? " " : "") + g
		}
		return d
	}

	function nd(a) {
		a = F(a);
		var b = a.length;
		if (1 >= b) return a;
		for (; b--;) {
			var d = a[b];
			(8 === d.nodeType || d.nodeType === Ia && "" === d.nodeValue.trim()) && sg.call(a, b, 1)
		}
		return a
	}

	function qg(a, b) {
		if (b && D(b)) return b;
		if (D(a)) {
			var d = qd.exec(a);
			if (d) return d[3]
		}
	}

	function wf() {
		var a = {},
			b = !1;
		this.has = function(b) {
			return a.hasOwnProperty(b)
		};
		this.register = function(b, c) {
			Ka(b, "controller");
			G(b) ?
				R(a, b) : a[b] = c
		};
		this.allowGlobals = function() {
			b = !0
		};
		this.$get = ["$injector", "$window", function(d, c) {
			function e(a, b, c, d) {
				if (!a || !G(a.$scope)) throw M("$controller")("noscp", d, b);
				a.$scope[b] = c
			}
			return function(f, g, h, k) {
				var l, m, n;
				h = !0 === h;
				k && D(k) && (n = k);
				if (D(f)) {
					k = f.match(qd);
					if (!k) throw rd("ctrlfmt", f);
					m = k[1];
					n = n || k[3];
					f = a.hasOwnProperty(m) ? a[m] : Sc(g.$scope, m, !0) || (b ? Sc(c, m, !0) : void 0);
					if (!f) throw rd("ctrlreg", m);
					tb(f, m, !0)
				}
				if (h) return h = (H(f) ? f[f.length - 1] : f).prototype, l = Object.create(h || null), n && e(g, n,
					l, m || f.name), R(function() {
					var a = d.invoke(f, l, g, m);
					a !== l && (G(a) || E(a)) && (l = a, n && e(g, n, l, m || f.name));
					return l
				}, {
					instance: l,
					identifier: n
				});
				l = d.instantiate(f, g, m);
				n && e(g, n, l, m || f.name);
				return l
			}
		}]
	}

	function xf() {
		this.$get = ["$window", function(a) {
			return F(a.document)
		}]
	}

	function yf() {
		this.$get = ["$document", "$rootScope", function(a, b) {
			function d() {
				e = c.hidden
			}
			var c = a[0],
				e = c && c.hidden;
			a.on("visibilitychange", d);
			b.$on("$destroy", function() {
				a.off("visibilitychange", d)
			});
			return function() {
				return e
			}
		}]
	}

	function zf() {
		this.$get = ["$log", function(a) {
			return function(b, d) {
				a.error.apply(a, arguments)
			}
		}]
	}

	function kc(a) {
		return G(a) ? ga(a) ? a.toISOString() : cb(a) : a
	}

	function Ef() {
		this.$get = function() {
			return function(a) {
				if (!a) return "";
				var b = [];
				Hc(a, function(a, c) {
					null === a || x(a) || (H(a) ? p(a, function(a) {
						b.push($(c) + "=" + $(kc(a)))
					}) : b.push($(c) + "=" + $(kc(a))))
				});
				return b.join("&")
			}
		}
	}

	function Ff() {
		this.$get = function() {
			return function(a) {
				function b(a, e, f) {
					null === a || x(a) || (H(a) ? p(a, function(a, c) {
						b(a, e + "[" + (G(a) ? c : "") + "]")
					}) : G(a) && !ga(a) ? Hc(a, function(a,
						c) {
						b(a, e + (f ? "" : "[") + c + (f ? "" : "]"))
					}) : d.push($(e) + "=" + $(kc(a))))
				}
				if (!a) return "";
				var d = [];
				b(a, "", !0);
				return d.join("&")
			}
		}
	}

	function lc(a, b) {
		if (D(a)) {
			var d = a.replace(tg, "").trim();
			if (d) {
				var c = b("Content-Type");
				(c = c && 0 === c.indexOf(sd)) || (c = (c = d.match(ug)) && vg[c[0]].test(d));
				c && (a = Lc(d))
			}
		}
		return a
	}

	function td(a) {
		var b = V(),
			d;
		D(a) ? p(a.split("\n"), function(a) {
			d = a.indexOf(":");
			var e = P(S(a.substr(0, d)));
			a = S(a.substr(d + 1));
			e && (b[e] = b[e] ? b[e] + ", " + a : a)
		}) : G(a) && p(a, function(a, d) {
			var f = P(d),
				g = S(a);
			f && (b[f] = b[f] ?
				b[f] + ", " + g : g)
		});
		return b
	}

	function ud(a) {
		var b;
		return function(d) {
			b || (b = td(a));
			return d ? (d = b[P(d)], void 0 === d && (d = null), d) : b
		}
	}

	function vd(a, b, d, c) {
		if (E(c)) return c(a, b, d);
		p(c, function(c) {
			a = c(a, b, d)
		});
		return a
	}

	function Df() {
		var a = this.defaults = {
				transformResponse: [lc],
				transformRequest: [function(a) {
					return G(a) && "[object File]" !== ma.call(a) && "[object Blob]" !== ma.call(a) && "[object FormData]" !== ma.call(a) ? cb(a) : a
				}],
				headers: {
					common: {
						Accept: "application/json, text/plain, */*"
					},
					post: qa(mc),
					put: qa(mc),
					patch: qa(mc)
				},
				xsrfCookieName: "XSRF-TOKEN",
				xsrfHeaderName: "X-XSRF-TOKEN",
				paramSerializer: "$httpParamSerializer",
				jsonpCallbackParam: "callback"
			},
			b = !1;
		this.useApplyAsync = function(a) {
			return u(a) ? (b = !!a, this) : b
		};
		var d = this.interceptors = [];
		this.$get = ["$browser", "$httpBackend", "$$cookieReader", "$cacheFactory", "$rootScope", "$q", "$injector", "$sce", function(c, e, f, g, h, k, l, m) {
			function n(b) {
				function d(a, b) {
					for (var c = 0, e = b.length; c < e;) {
						var f = b[c++],
							g = b[c++];
						a = a.then(f, g)
					}
					b.length = 0;
					return a
				}

				function e(a, b) {
					var c, d = {};
					p(a, function(a,
						e) {
						E(a) ? (c = a(b), null != c && (d[e] = c)) : d[e] = a
					});
					return d
				}

				function f(a) {
					var b = R({}, a);
					b.data = vd(a.data, a.headers, a.status, g.transformResponse);
					a = a.status;
					return 200 <= a && 300 > a ? b : k.reject(b)
				}
				if (!G(b)) throw M("$http")("badreq", b);
				if (!D(m.valueOf(b.url))) throw M("$http")("badreq", b.url);
				var g = R({
					method: "get",
					transformRequest: a.transformRequest,
					transformResponse: a.transformResponse,
					paramSerializer: a.paramSerializer,
					jsonpCallbackParam: a.jsonpCallbackParam
				}, b);
				g.headers = function(b) {
					var c = a.headers,
						d = R({}, b.headers),
						f, g, h, c = R({}, c.common, c[P(b.method)]);
					a: for (f in c) {
						g = P(f);
						for (h in d)
							if (P(h) === g) continue a;
						d[f] = c[f]
					}
					return e(d, qa(b))
				}(b);
				g.method = vb(g.method);
				g.paramSerializer = D(g.paramSerializer) ? l.get(g.paramSerializer) : g.paramSerializer;
				c.$$incOutstandingRequestCount();
				var h = [],
					n = [];
				b = k.resolve(g);
				p(t, function(a) {
					(a.request || a.requestError) && h.unshift(a.request, a.requestError);
					(a.response || a.responseError) && n.push(a.response, a.responseError)
				});
				b = d(b, h);
				b = b.then(function(b) {
					var c = b.headers,
						d = vd(b.data, ud(c),
							void 0, b.transformRequest);
					x(d) && p(c, function(a, b) {
						"content-type" === P(b) && delete c[b]
					});
					x(b.withCredentials) && !x(a.withCredentials) && (b.withCredentials = a.withCredentials);
					return q(b, d).then(f, f)
				});
				b = d(b, n);
				return b = b.finally(function() {
					c.$$completeOutstandingRequest(A)
				})
			}

			function q(c, d) {
				function g(a) {
					if (a) {
						var c = {};
						p(a, function(a, d) {
							c[d] = function(c) {
								function d() {
									a(c)
								}
								b ? h.$applyAsync(d) : h.$$phase ? d() : h.$apply(d)
							}
						});
						return c
					}
				}

				function l(a, c, d, e) {
					function f() {
						q(c, a, d, e)
					}
					O && (200 <= a && 300 > a ? O.put(Q, [a,
						c, td(d), e
					]) : O.remove(Q));
					b ? h.$applyAsync(f) : (f(), h.$$phase || h.$apply())
				}

				function q(a, b, d, e) {
					b = -1 <= b ? b : 0;
					(200 <= b && 300 > b ? C.resolve : C.reject)({
						data: a,
						status: b,
						headers: ud(d),
						config: c,
						statusText: e
					})
				}

				function J(a) {
					q(a.data, a.status, qa(a.headers()), a.statusText)
				}

				function t() {
					var a = n.pendingRequests.indexOf(c); - 1 !== a && n.pendingRequests.splice(a, 1)
				}
				var C = k.defer(),
					z = C.promise,
					O, X, T = c.headers,
					s = "jsonp" === P(c.method),
					Q = c.url;
				s ? Q = m.getTrustedResourceUrl(Q) : D(Q) || (Q = m.valueOf(Q));
				Q = r(Q, c.paramSerializer(c.params));
				s && (Q = I(Q, c.jsonpCallbackParam));
				n.pendingRequests.push(c);
				z.then(t, t);
				!c.cache && !a.cache || !1 === c.cache || "GET" !== c.method && "JSONP" !== c.method || (O = G(c.cache) ? c.cache : G(a.cache) ? a.cache : N);
				O && (X = O.get(Q), u(X) ? X && E(X.then) ? X.then(J, J) : H(X) ? q(X[1], X[0], qa(X[2]), X[3]) : q(X, 200, {}, "OK") : O.put(Q, z));
				x(X) && ((X = wd(c.url) ? f()[c.xsrfCookieName || a.xsrfCookieName] : void 0) && (T[c.xsrfHeaderName || a.xsrfHeaderName] = X), e(c.method, Q, d, l, T, c.timeout, c.withCredentials, c.responseType, g(c.eventHandlers), g(c.uploadEventHandlers)));
				return z
			}

			function r(a, b) {
				0 < b.length && (a += (-1 === a.indexOf("?") ? "?" : "&") + b);
				return a
			}

			function I(a, b) {
				if (/[&?][^=]+=JSON_CALLBACK/.test(a)) throw xd("badjsonp", a);
				if ((new RegExp("[&?]" + b + "=")).test(a)) throw xd("badjsonp", b, a);
				return a += (-1 === a.indexOf("?") ? "?" : "&") + b + "=JSON_CALLBACK"
			}
			var N = g("$http");
			a.paramSerializer = D(a.paramSerializer) ? l.get(a.paramSerializer) : a.paramSerializer;
			var t = [];
			p(d, function(a) {
				t.unshift(D(a) ? l.get(a) : l.invoke(a))
			});
			n.pendingRequests = [];
			(function(a) {
				p(arguments, function(a) {
					n[a] =
						function(b, c) {
							return n(R({}, c || {}, {
								method: a,
								url: b
							}))
						}
				})
			})("get", "delete", "head", "jsonp");
			(function(a) {
				p(arguments, function(a) {
					n[a] = function(b, c, d) {
						return n(R({}, d || {}, {
							method: a,
							url: b,
							data: c
						}))
					}
				})
			})("post", "put", "patch");
			n.defaults = a;
			return n
		}]
	}

	function Hf() {
		this.$get = function() {
			return function() {
				return new w.XMLHttpRequest
			}
		}
	}

	function Gf() {
		this.$get = ["$browser", "$jsonpCallbacks", "$document", "$xhrFactory", function(a, b, d, c) {
			return wg(a, c, a.defer, b, d[0])
		}]
	}

	function wg(a, b, d, c, e) {
		function f(a, b, d) {
			a = a.replace("JSON_CALLBACK",
				b);
			var f = e.createElement("script"),
				m = null;
			f.type = "text/javascript";
			f.src = a;
			f.async = !0;
			m = function(a) {
				f.removeEventListener("load", m);
				f.removeEventListener("error", m);
				e.body.removeChild(f);
				f = null;
				var g = -1,
					r = "unknown";
				a && ("load" !== a.type || c.wasCalled(b) || (a = {
					type: "error"
				}), r = a.type, g = "error" === a.type ? 404 : 200);
				d && d(g, r)
			};
			f.addEventListener("load", m);
			f.addEventListener("error", m);
			e.body.appendChild(f);
			return m
		}
		return function(e, h, k, l, m, n, q, r, I, N) {
			function t() {
				y && y();
				v && v.abort()
			}
			h = h || a.url();
			if ("jsonp" ===
				P(e)) var K = c.createCallback(h),
				y = f(h, K, function(a, b) {
					var e = 200 === a && c.getResponse(K);
					u(B) && d.cancel(B);
					y = v = null;
					l(a, e, "", b);
					c.removeCallback(K)
				});
			else {
				var v = b(e, h);
				v.open(e, h, !0);
				p(m, function(a, b) {
					u(a) && v.setRequestHeader(b, a)
				});
				v.onload = function() {
					var a = v.statusText || "",
						b = "response" in v ? v.response : v.responseText,
						c = 1223 === v.status ? 204 : v.status;
					0 === c && (c = b ? 200 : "file" === Ca(h).protocol ? 404 : 0);
					var e = v.getAllResponseHeaders();
					u(B) && d.cancel(B);
					y = v = null;
					l(c, b, e, a)
				};
				e = function() {
					u(B) && d.cancel(B);
					y = v = null;
					l(-1, null, null, "")
				};
				v.onerror = e;
				v.onabort = e;
				v.ontimeout = e;
				p(I, function(a, b) {
					v.addEventListener(b, a)
				});
				p(N, function(a, b) {
					v.upload.addEventListener(b, a)
				});
				q && (v.withCredentials = !0);
				if (r) try {
					v.responseType = r
				} catch (s) {
					if ("json" !== r) throw s;
				}
				v.send(x(k) ? null : k)
			}
			if (0 < n) var B = d(t, n);
			else n && E(n.then) && n.then(t)
		}
	}

	function Bf() {
		var a = "{{",
			b = "}}";
		this.startSymbol = function(b) {
			return b ? (a = b, this) : a
		};
		this.endSymbol = function(a) {
			return a ? (b = a, this) : b
		};
		this.$get = ["$parse", "$exceptionHandler", "$sce", function(d, c,
			e) {
			function f(a) {
				return "\\\\\\" + a
			}

			function g(c) {
				return c.replace(n, a).replace(q, b)
			}

			function h(a, b, c, d) {
				var e = a.$watch(function(a) {
					e();
					return d(a)
				}, b, c);
				return e
			}

			function k(f, k, n, q) {
				function K(a) {
					try {
						var b = a;
						a = n ? e.getTrusted(n, b) : e.valueOf(b);
						return q && !u(a) ? a : $b(a)
					} catch (d) {
						c(Da.interr(f, d))
					}
				}
				if (!f.length || -1 === f.indexOf(a)) {
					var y;
					k || (k = g(f), y = la(k), y.exp = f, y.expressions = [], y.$$watchDelegate = h);
					return y
				}
				q = !!q;
				var v, p, B = 0,
					J = [],
					L = [];
				y = f.length;
				for (var C = [], z = []; B < y;)
					if (-1 !== (v = f.indexOf(a, B)) && -1 !==
						(p = f.indexOf(b, v + l))) B !== v && C.push(g(f.substring(B, v))), B = f.substring(v + l, p), J.push(B), L.push(d(B, K)), B = p + m, z.push(C.length), C.push("");
					else {
						B !== y && C.push(g(f.substring(B)));
						break
					} n && 1 < C.length && Da.throwNoconcat(f);
				if (!k || J.length) {
					var O = function(a) {
						for (var b = 0, c = J.length; b < c; b++) {
							if (q && x(a[b])) return;
							C[z[b]] = a[b]
						}
						return C.join("")
					};
					return R(function(a) {
						var b = 0,
							d = J.length,
							e = Array(d);
						try {
							for (; b < d; b++) e[b] = L[b](a);
							return O(e)
						} catch (g) {
							c(Da.interr(f, g))
						}
					}, {
						exp: f,
						expressions: J,
						$$watchDelegate: function(a,
							b) {
							var c;
							return a.$watchGroup(L, function(d, e) {
								var f = O(d);
								E(b) && b.call(this, f, d !== e ? c : f, a);
								c = f
							})
						}
					})
				}
			}
			var l = a.length,
				m = b.length,
				n = new RegExp(a.replace(/./g, f), "g"),
				q = new RegExp(b.replace(/./g, f), "g");
			k.startSymbol = function() {
				return a
			};
			k.endSymbol = function() {
				return b
			};
			return k
		}]
	}

	function Cf() {
		this.$get = ["$rootScope", "$window", "$q", "$$q", "$browser", function(a, b, d, c, e) {
			function f(f, k, l, m) {
				function n() {
					q ? f.apply(null, r) : f(t)
				}
				var q = 4 < arguments.length,
					r = q ? va.call(arguments, 4) : [],
					I = b.setInterval,
					p = b.clearInterval,
					t = 0,
					K = u(m) && !m,
					y = (K ? c : d).defer(),
					v = y.promise;
				l = u(l) ? l : 0;
				v.$$intervalId = I(function() {
					K ? e.defer(n) : a.$evalAsync(n);
					y.notify(t++);
					0 < l && t >= l && (y.resolve(t), p(v.$$intervalId), delete g[v.$$intervalId]);
					K || a.$apply()
				}, k);
				g[v.$$intervalId] = y;
				return v
			}
			var g = {};
			f.cancel = function(a) {
				return a && a.$$intervalId in g ? (g[a.$$intervalId].promise.catch(A), g[a.$$intervalId].reject("canceled"), b.clearInterval(a.$$intervalId), delete g[a.$$intervalId], !0) : !1
			};
			return f
		}]
	}

	function nc(a) {
		a = a.split("/");
		for (var b = a.length; b--;) a[b] =
			db(a[b]);
		return a.join("/")
	}

	function yd(a, b) {
		var d = Ca(a);
		b.$$protocol = d.protocol;
		b.$$host = d.hostname;
		b.$$port = Z(d.port) || xg[d.protocol] || null
	}

	function zd(a, b) {
		if (yg.test(a)) throw lb("badpath", a);
		var d = "/" !== a.charAt(0);
		d && (a = "/" + a);
		var c = Ca(a);
		b.$$path = decodeURIComponent(d && "/" === c.pathname.charAt(0) ? c.pathname.substring(1) : c.pathname);
		b.$$search = Oc(c.search);
		b.$$hash = decodeURIComponent(c.hash);
		b.$$path && "/" !== b.$$path.charAt(0) && (b.$$path = "/" + b.$$path)
	}

	function oc(a, b) {
		return a.slice(0, b.length) ===
			b
	}

	function ka(a, b) {
		if (oc(b, a)) return b.substr(a.length)
	}

	function Aa(a) {
		var b = a.indexOf("#");
		return -1 === b ? a : a.substr(0, b)
	}

	function mb(a) {
		return a.replace(/(#.+)|#$/, "$1")
	}

	function pc(a, b, d) {
		this.$$html5 = !0;
		d = d || "";
		yd(a, this);
		this.$$parse = function(a) {
			var d = ka(b, a);
			if (!D(d)) throw lb("ipthprfx", a, b);
			zd(d, this);
			this.$$path || (this.$$path = "/");
			this.$$compose()
		};
		this.$$compose = function() {
			var a = Zb(this.$$search),
				d = this.$$hash ? "#" + db(this.$$hash) : "";
			this.$$url = nc(this.$$path) + (a ? "?" + a : "") + d;
			this.$$absUrl = b +
				this.$$url.substr(1);
			this.$$urlUpdatedByLocation = !0
		};
		this.$$parseLinkUrl = function(c, e) {
			if (e && "#" === e[0]) return this.hash(e.slice(1)), !0;
			var f, g;
			u(f = ka(a, c)) ? (g = f, g = d && u(f = ka(d, f)) ? b + (ka("/", f) || f) : a + g) : u(f = ka(b, c)) ? g = b + f : b === c + "/" && (g = b);
			g && this.$$parse(g);
			return !!g
		}
	}

	function qc(a, b, d) {
		yd(a, this);
		this.$$parse = function(c) {
			var e = ka(a, c) || ka(b, c),
				f;
			x(e) || "#" !== e.charAt(0) ? this.$$html5 ? f = e : (f = "", x(e) && (a = c, this.replace())) : (f = ka(d, e), x(f) && (f = e));
			zd(f, this);
			c = this.$$path;
			var e = a,
				g = /^\/[A-Z]:(\/.*)/;
			oc(f,
				e) && (f = f.replace(e, ""));
			g.exec(f) || (c = (f = g.exec(c)) ? f[1] : c);
			this.$$path = c;
			this.$$compose()
		};
		this.$$compose = function() {
			var b = Zb(this.$$search),
				e = this.$$hash ? "#" + db(this.$$hash) : "";
			this.$$url = nc(this.$$path) + (b ? "?" + b : "") + e;
			this.$$absUrl = a + (this.$$url ? d + this.$$url : "");
			this.$$urlUpdatedByLocation = !0
		};
		this.$$parseLinkUrl = function(b, d) {
			return Aa(a) === Aa(b) ? (this.$$parse(b), !0) : !1
		}
	}

	function Ad(a, b, d) {
		this.$$html5 = !0;
		qc.apply(this, arguments);
		this.$$parseLinkUrl = function(c, e) {
			if (e && "#" === e[0]) return this.hash(e.slice(1)),
				!0;
			var f, g;
			a === Aa(c) ? f = c : (g = ka(b, c)) ? f = a + d + g : b === c + "/" && (f = b);
			f && this.$$parse(f);
			return !!f
		};
		this.$$compose = function() {
			var b = Zb(this.$$search),
				e = this.$$hash ? "#" + db(this.$$hash) : "";
			this.$$url = nc(this.$$path) + (b ? "?" + b : "") + e;
			this.$$absUrl = a + d + this.$$url;
			this.$$urlUpdatedByLocation = !0
		}
	}

	function Kb(a) {
		return function() {
			return this[a]
		}
	}

	function Bd(a, b) {
		return function(d) {
			if (x(d)) return this[a];
			this[a] = b(d);
			this.$$compose();
			return this
		}
	}

	function Jf() {
		var a = "!",
			b = {
				enabled: !1,
				requireBase: !0,
				rewriteLinks: !0
			};
		this.hashPrefix = function(b) {
			return u(b) ? (a = b, this) : a
		};
		this.html5Mode = function(a) {
			if (Ha(a)) return b.enabled = a, this;
			if (G(a)) {
				Ha(a.enabled) && (b.enabled = a.enabled);
				Ha(a.requireBase) && (b.requireBase = a.requireBase);
				if (Ha(a.rewriteLinks) || D(a.rewriteLinks)) b.rewriteLinks = a.rewriteLinks;
				return this
			}
			return b
		};
		this.$get = ["$rootScope", "$browser", "$sniffer", "$rootElement", "$window", function(d, c, e, f, g) {
			function h(a, b, d) {
				var e = l.url(),
					f = l.$$state;
				try {
					c.url(a, b, d), l.$$state = c.state()
				} catch (g) {
					throw l.url(e), l.$$state =
						f, g;
				}
			}

			function k(a, b) {
				d.$broadcast("$locationChangeSuccess", l.absUrl(), a, l.$$state, b)
			}
			var l, m;
			m = c.baseHref();
			var n = c.url(),
				q;
			if (b.enabled) {
				if (!m && b.requireBase) throw lb("nobase");
				q = n.substring(0, n.indexOf("/", n.indexOf("//") + 2)) + (m || "/");
				m = e.history ? pc : Ad
			} else q = Aa(n), m = qc;
			var r = q.substr(0, Aa(q).lastIndexOf("/") + 1);
			l = new m(q, r, "#" + a);
			l.$$parseLinkUrl(n, n);
			l.$$state = c.state();
			var I = /^\s*(javascript|mailto):/i;
			f.on("click", function(a) {
				var e = b.rewriteLinks;
				if (e && !a.ctrlKey && !a.metaKey && !a.shiftKey &&
					2 !== a.which && 2 !== a.button) {
					for (var h = F(a.target);
						"a" !== wa(h[0]);)
						if (h[0] === f[0] || !(h = h.parent())[0]) return;
					if (!D(e) || !x(h.attr(e))) {
						var e = h.prop("href"),
							k = h.attr("href") || h.attr("xlink:href");
						G(e) && "[object SVGAnimatedString]" === e.toString() && (e = Ca(e.animVal).href);
						I.test(e) || !e || h.attr("target") || a.isDefaultPrevented() || !l.$$parseLinkUrl(e, k) || (a.preventDefault(), l.absUrl() !== c.url() && (d.$apply(), g.angular["ff-684208-preventDefault"] = !0))
					}
				}
			});
			mb(l.absUrl()) !== mb(n) && c.url(l.absUrl(), !0);
			var p = !0;
			c.onUrlChange(function(a, b) {
				oc(a, r) ? (d.$evalAsync(function() {
					var c = l.absUrl(),
						e = l.$$state,
						f;
					a = mb(a);
					l.$$parse(a);
					l.$$state = b;
					f = d.$broadcast("$locationChangeStart", a, c, b, e).defaultPrevented;
					l.absUrl() === a && (f ? (l.$$parse(c), l.$$state = e, h(c, !1, e)) : (p = !1, k(c, e)))
				}), d.$$phase || d.$digest()) : g.location.href = a
			});
			d.$watch(function() {
				if (p || l.$$urlUpdatedByLocation) {
					l.$$urlUpdatedByLocation = !1;
					var a = mb(c.url()),
						b = mb(l.absUrl()),
						f = c.state(),
						g = l.$$replace,
						m = a !== b || l.$$html5 && e.history && f !== l.$$state;
					if (p || m) p = !1, d.$evalAsync(function() {
						var b = l.absUrl(),
							c = d.$broadcast("$locationChangeStart", b, a, l.$$state, f).defaultPrevented;
						l.absUrl() === b && (c ? (l.$$parse(a), l.$$state = f) : (m && h(b, g, f === l.$$state ? null : l.$$state), k(a, f)))
					})
				}
				l.$$replace = !1
			});
			return l
		}]
	}

	function Kf() {
		var a = !0,
			b = this;
		this.debugEnabled = function(b) {
			return u(b) ? (a = b, this) : a
		};
		this.$get = ["$window", function(d) {
			function c(a) {
				a instanceof Error && (a.stack && f ? a = a.message && -1 === a.stack.indexOf(a.message) ? "Error: " + a.message + "\n" + a.stack : a.stack : a.sourceURL &&
					(a = a.message + "\n" + a.sourceURL + ":" + a.line));
				return a
			}

			function e(a) {
				var b = d.console || {},
					e = b[a] || b.log || A;
				a = !1;
				try {
					a = !!e.apply
				} catch (f) {}
				return a ? function() {
					var a = [];
					p(arguments, function(b) {
						a.push(c(b))
					});
					return e.apply(b, a)
				} : function(a, b) {
					e(a, null == b ? "" : b)
				}
			}
			var f = za || /\bEdge\//.test(d.navigator && d.navigator.userAgent);
			return {
				log: e("log"),
				info: e("info"),
				warn: e("warn"),
				error: e("error"),
				debug: function() {
					var c = e("debug");
					return function() {
						a && c.apply(b, arguments)
					}
				}()
			}
		}]
	}

	function zg(a) {
		return a + ""
	}

	function Ag(a,
		b) {
		return "undefined" !== typeof a ? a : b
	}

	function Cd(a, b) {
		return "undefined" === typeof a ? b : "undefined" === typeof b ? a : a + b
	}

	function U(a, b) {
		var d, c, e;
		switch (a.type) {
			case s.Program:
				d = !0;
				p(a.body, function(a) {
					U(a.expression, b);
					d = d && a.expression.constant
				});
				a.constant = d;
				break;
			case s.Literal:
				a.constant = !0;
				a.toWatch = [];
				break;
			case s.UnaryExpression:
				U(a.argument, b);
				a.constant = a.argument.constant;
				a.toWatch = a.argument.toWatch;
				break;
			case s.BinaryExpression:
				U(a.left, b);
				U(a.right, b);
				a.constant = a.left.constant && a.right.constant;
				a.toWatch = a.left.toWatch.concat(a.right.toWatch);
				break;
			case s.LogicalExpression:
				U(a.left, b);
				U(a.right, b);
				a.constant = a.left.constant && a.right.constant;
				a.toWatch = a.constant ? [] : [a];
				break;
			case s.ConditionalExpression:
				U(a.test, b);
				U(a.alternate, b);
				U(a.consequent, b);
				a.constant = a.test.constant && a.alternate.constant && a.consequent.constant;
				a.toWatch = a.constant ? [] : [a];
				break;
			case s.Identifier:
				a.constant = !1;
				a.toWatch = [a];
				break;
			case s.MemberExpression:
				U(a.object, b);
				a.computed && U(a.property, b);
				a.constant = a.object.constant &&
					(!a.computed || a.property.constant);
				a.toWatch = [a];
				break;
			case s.CallExpression:
				d = e = a.filter ? !b(a.callee.name).$stateful : !1;
				c = [];
				p(a.arguments, function(a) {
					U(a, b);
					d = d && a.constant;
					a.constant || c.push.apply(c, a.toWatch)
				});
				a.constant = d;
				a.toWatch = e ? c : [a];
				break;
			case s.AssignmentExpression:
				U(a.left, b);
				U(a.right, b);
				a.constant = a.left.constant && a.right.constant;
				a.toWatch = [a];
				break;
			case s.ArrayExpression:
				d = !0;
				c = [];
				p(a.elements, function(a) {
					U(a, b);
					d = d && a.constant;
					a.constant || c.push.apply(c, a.toWatch)
				});
				a.constant =
					d;
				a.toWatch = c;
				break;
			case s.ObjectExpression:
				d = !0;
				c = [];
				p(a.properties, function(a) {
					U(a.value, b);
					d = d && a.value.constant && !a.computed;
					a.value.constant || c.push.apply(c, a.value.toWatch);
					a.computed && (U(a.key, b), a.key.constant || c.push.apply(c, a.key.toWatch))
				});
				a.constant = d;
				a.toWatch = c;
				break;
			case s.ThisExpression:
				a.constant = !1;
				a.toWatch = [];
				break;
			case s.LocalsExpression:
				a.constant = !1, a.toWatch = []
		}
	}

	function Dd(a) {
		if (1 === a.length) {
			a = a[0].expression;
			var b = a.toWatch;
			return 1 !== b.length ? b : b[0] !== a ? b : void 0
		}
	}

	function Ed(a) {
		return a.type ===
			s.Identifier || a.type === s.MemberExpression
	}

	function Fd(a) {
		if (1 === a.body.length && Ed(a.body[0].expression)) return {
			type: s.AssignmentExpression,
			left: a.body[0].expression,
			right: {
				type: s.NGValueParameter
			},
			operator: "="
		}
	}

	function Gd(a) {
		return 0 === a.body.length || 1 === a.body.length && (a.body[0].expression.type === s.Literal || a.body[0].expression.type === s.ArrayExpression || a.body[0].expression.type === s.ObjectExpression)
	}

	function Hd(a, b) {
		this.astBuilder = a;
		this.$filter = b
	}

	function Id(a, b) {
		this.astBuilder = a;
		this.$filter =
			b
	}

	function rc(a) {
		return E(a.valueOf) ? a.valueOf() : Bg.call(a)
	}

	function Lf() {
		var a = V(),
			b = {
				"true": !0,
				"false": !1,
				"null": null,
				undefined: void 0
			},
			d, c;
		this.addLiteral = function(a, c) {
			b[a] = c
		};
		this.setIdentifierFns = function(a, b) {
			d = a;
			c = b;
			return this
		};
		this.$get = ["$filter", function(e) {
			function f(a, b, c) {
				return null == a || null == b ? a === b : "object" !== typeof a || c || (a = rc(a), "object" !== typeof a) ? a === b || a !== a && b !== b : !1
			}

			function g(a, b, c, d, e) {
				var g = d.inputs,
					h;
				if (1 === g.length) {
					var k = f,
						g = g[0];
					return a.$watch(function(a) {
						var b = g(a);
						f(b, k, d.literal) || (h = d(a, void 0, void 0, [b]), k = b && rc(b));
						return h
					}, b, c, e)
				}
				for (var l = [], m = [], n = 0, L = g.length; n < L; n++) l[n] = f, m[n] = null;
				return a.$watch(function(a) {
					for (var b = !1, c = 0, e = g.length; c < e; c++) {
						var k = g[c](a);
						if (b || (b = !f(k, l[c], d.literal))) m[c] = k, l[c] = k && rc(k)
					}
					b && (h = d(a, void 0, void 0, m));
					return h
				}, b, c, e)
			}

			function h(a, b, c, d, e) {
				function f(a) {
					return d(a)
				}

				function h(a, c, d) {
					l = a;
					E(b) && b(a, c, d);
					u(a) && d.$$postDigest(function() {
						u(l) && k()
					})
				}
				var k, l;
				return k = d.inputs ? g(a, h, c, d, e) : a.$watch(f, h, c)
			}

			function k(a,
				b, c, d) {
				function e(a) {
					var b = !0;
					p(a, function(a) {
						u(a) || (b = !1)
					});
					return b
				}
				var f, g;
				return f = a.$watch(function(a) {
					return d(a)
				}, function(a, c, d) {
					g = a;
					E(b) && b(a, c, d);
					e(a) && d.$$postDigest(function() {
						e(g) && f()
					})
				}, c)
			}

			function l(a, b, c, d) {
				var e = a.$watch(function(a) {
					e();
					return d(a)
				}, b, c);
				return e
			}

			function m(a, b) {
				if (!b) return a;
				var c = a.$$watchDelegate,
					d = !1,
					c = c !== k && c !== h ? function(c, e, f, g) {
						f = d && g ? g[0] : a(c, e, f, g);
						return b(f, c, e)
					} : function(c, d, e, f) {
						e = a(c, d, e, f);
						c = b(e, c, d);
						return u(e) ? c : e
					},
					d = !a.inputs;
				a.$$watchDelegate &&
					a.$$watchDelegate !== g ? (c.$$watchDelegate = a.$$watchDelegate, c.inputs = a.inputs) : b.$stateful || (c.$$watchDelegate = g, c.inputs = a.inputs ? a.inputs : [a]);
				return c
			}
			var n = {
				csp: Ga().noUnsafeEval,
				literals: sa(b),
				isIdentifierStart: E(d) && d,
				isIdentifierContinue: E(c) && c
			};
			return function(b, c) {
				var d, f, p;
				switch (typeof b) {
					case "string":
						return p = b = b.trim(), d = a[p], d || (":" === b.charAt(0) && ":" === b.charAt(1) && (f = !0, b = b.substring(2)), d = new sc(n), d = (new tc(d, e, n)).parse(b), d.constant ? d.$$watchDelegate = l : f ? d.$$watchDelegate = d.literal ?
							k : h : d.inputs && (d.$$watchDelegate = g), a[p] = d), m(d, c);
					case "function":
						return m(b, c);
					default:
						return m(A, c)
				}
			}
		}]
	}

	function Nf() {
		var a = !0;
		this.$get = ["$rootScope", "$exceptionHandler", function(b, d) {
			return Jd(function(a) {
				b.$evalAsync(a)
			}, d, a)
		}];
		this.errorOnUnhandledRejections = function(b) {
			return u(b) ? (a = b, this) : a
		}
	}

	function Of() {
		var a = !0;
		this.$get = ["$browser", "$exceptionHandler", function(b, d) {
			return Jd(function(a) {
				b.defer(a)
			}, d, a)
		}];
		this.errorOnUnhandledRejections = function(b) {
			return u(b) ? (a = b, this) : a
		}
	}

	function Jd(a,
		b, d) {
		function c() {
			return new e
		}

		function e() {
			var a = this.promise = new f;
			this.resolve = function(b) {
				k(a, b)
			};
			this.reject = function(b) {
				m(a, b)
			};
			this.notify = function(b) {
				q(a, b)
			}
		}

		function f() {
			this.$$state = {
				status: 0
			}
		}

		function g() {
			for (; !y && v.length;) {
				var a = v.shift();
				if (!a.pur) {
					a.pur = !0;
					var c = a.value,
						c = "Possibly unhandled rejection: " + ("function" === typeof c ? c.toString().replace(/ \{[\s\S]*$/, "") : x(c) ? "undefined" : "string" !== typeof c ? Be(c, void 0) : c);
					a.value instanceof Error ? b(a.value, c) : b(c)
				}
			}
		}

		function h(b) {
			!d || b.pending ||
				2 !== b.status || b.pur || (0 === y && 0 === v.length && a(g), v.push(b));
			!b.processScheduled && b.pending && (b.processScheduled = !0, ++y, a(function() {
				var c, e, f;
				f = b.pending;
				b.processScheduled = !1;
				b.pending = void 0;
				try {
					for (var h = 0, l = f.length; h < l; ++h) {
						b.pur = !0;
						e = f[h][0];
						c = f[h][b.status];
						try {
							E(c) ? k(e, c(b.value)) : 1 === b.status ? k(e, b.value) : m(e, b.value)
						} catch (n) {
							m(e, n)
						}
					}
				} finally {
					--y, d && 0 === y && a(g)
				}
			}))
		}

		function k(a, b) {
			a.$$state.status || (b === a ? n(a, K("qcycle", b)) : l(a, b))
		}

		function l(a, b) {
			function c(b) {
				g || (g = !0, l(a, b))
			}

			function d(b) {
				g ||
					(g = !0, n(a, b))
			}

			function e(b) {
				q(a, b)
			}
			var f, g = !1;
			try {
				if (G(b) || E(b)) f = b.then;
				E(f) ? (a.$$state.status = -1, f.call(b, c, d, e)) : (a.$$state.value = b, a.$$state.status = 1, h(a.$$state))
			} catch (k) {
				d(k)
			}
		}

		function m(a, b) {
			a.$$state.status || n(a, b)
		}

		function n(a, b) {
			a.$$state.value = b;
			a.$$state.status = 2;
			h(a.$$state)
		}

		function q(c, d) {
			var e = c.$$state.pending;
			0 >= c.$$state.status && e && e.length && a(function() {
				for (var a, c, f = 0, g = e.length; f < g; f++) {
					c = e[f][0];
					a = e[f][3];
					try {
						q(c, E(a) ? a(d) : d)
					} catch (h) {
						b(h)
					}
				}
			})
		}

		function r(a) {
			var b = new f;
			m(b,
				a);
			return b
		}

		function I(a, b, c) {
			var d = null;
			try {
				E(c) && (d = c())
			} catch (e) {
				return r(e)
			}
			return d && E(d.then) ? d.then(function() {
				return b(a)
			}, r) : b(a)
		}

		function s(a, b, c, d) {
			var e = new f;
			k(e, a);
			return e.then(b, c, d)
		}

		function t(a) {
			if (!E(a)) throw K("norslvr", a);
			var b = new f;
			a(function(a) {
				k(b, a)
			}, function(a) {
				m(b, a)
			});
			return b
		}
		var K = M("$q", TypeError),
			y = 0,
			v = [];
		R(f.prototype, {
			then: function(a, b, c) {
				if (x(a) && x(b) && x(c)) return this;
				var d = new f;
				this.$$state.pending = this.$$state.pending || [];
				this.$$state.pending.push([d, a, b, c]);
				0 < this.$$state.status && h(this.$$state);
				return d
			},
			"catch": function(a) {
				return this.then(null, a)
			},
			"finally": function(a, b) {
				return this.then(function(b) {
					return I(b, u, a)
				}, function(b) {
					return I(b, r, a)
				}, b)
			}
		});
		var u = s;
		t.prototype = f.prototype;
		t.defer = c;
		t.reject = r;
		t.when = s;
		t.resolve = u;
		t.all = function(a) {
			var b = new f,
				c = 0,
				d = H(a) ? [] : {};
			p(a, function(a, e) {
				c++;
				s(a).then(function(a) {
					d[e] = a;
					--c || k(b, d)
				}, function(a) {
					m(b, a)
				})
			});
			0 === c && k(b, d);
			return b
		};
		t.race = function(a) {
			var b = c();
			p(a, function(a) {
				s(a).then(b.resolve, b.reject)
			});
			return b.promise
		};
		return t
	}

	function Xf() {
		this.$get = ["$window", "$timeout", function(a, b) {
			var d = a.requestAnimationFrame || a.webkitRequestAnimationFrame,
				c = a.cancelAnimationFrame || a.webkitCancelAnimationFrame || a.webkitCancelRequestAnimationFrame,
				e = !!d,
				f = e ? function(a) {
					var b = d(a);
					return function() {
						c(b)
					}
				} : function(a) {
					var c = b(a, 16.66, !1);
					return function() {
						b.cancel(c)
					}
				};
			f.supported = e;
			return f
		}]
	}

	function Mf() {
		function a(a) {
			function b() {
				this.$$watchers = this.$$nextSibling = this.$$childHead = this.$$childTail = null;
				this.$$listeners = {};
				this.$$listenerCount = {};
				this.$$watchersCount = 0;
				this.$id = ++rb;
				this.$$ChildScope = null
			}
			b.prototype = a;
			return b
		}
		var b = 10,
			d = M("$rootScope"),
			c = null,
			e = null;
		this.digestTtl = function(a) {
			arguments.length && (b = a);
			return b
		};
		this.$get = ["$exceptionHandler", "$parse", "$browser", function(f, g, h) {
			function k(a) {
				a.currentScope.$$destroyed = !0
			}

			function l(a) {
				9 === za && (a.$$childHead && l(a.$$childHead), a.$$nextSibling && l(a.$$nextSibling));
				a.$parent = a.$$nextSibling = a.$$prevSibling = a.$$childHead = a.$$childTail =
					a.$root = a.$$watchers = null
			}

			function m() {
				this.$id = ++rb;
				this.$$phase = this.$parent = this.$$watchers = this.$$nextSibling = this.$$prevSibling = this.$$childHead = this.$$childTail = null;
				this.$root = this;
				this.$$destroyed = !1;
				this.$$listeners = {};
				this.$$listenerCount = {};
				this.$$watchersCount = 0;
				this.$$isolateBindings = null
			}

			function n(a) {
				if (K.$$phase) throw d("inprog", K.$$phase);
				K.$$phase = a
			}

			function q(a, b) {
				do a.$$watchersCount += b; while (a = a.$parent)
			}

			function r(a, b, c) {
				do a.$$listenerCount[c] -= b, 0 === a.$$listenerCount[c] && delete a.$$listenerCount[c];
				while (a = a.$parent)
			}

			function I() {}

			function s() {
				for (; u.length;) try {
					u.shift()()
				} catch (a) {
					f(a)
				}
				e = null
			}

			function t() {
				null === e && (e = h.defer(function() {
					K.$apply(s)
				}))
			}
			m.prototype = {
				constructor: m,
				$new: function(b, c) {
					var d;
					c = c || this;
					b ? (d = new m, d.$root = this.$root) : (this.$$ChildScope || (this.$$ChildScope = a(this)), d = new this.$$ChildScope);
					d.$parent = c;
					d.$$prevSibling = c.$$childTail;
					c.$$childHead ? (c.$$childTail.$$nextSibling = d, c.$$childTail = d) : c.$$childHead = c.$$childTail = d;
					(b || c !== this) && d.$on("$destroy", k);
					return d
				},
				$watch: function(a, b, d, e) {
					var f = g(a);
					if (f.$$watchDelegate) return f.$$watchDelegate(this, b, d, f, a);
					var h = this,
						k = h.$$watchers,
						l = {
							fn: b,
							last: I,
							get: f,
							exp: e || a,
							eq: !!d
						};
					c = null;
					E(b) || (l.fn = A);
					k || (k = h.$$watchers = [], k.$$digestWatchIndex = -1);
					k.unshift(l);
					k.$$digestWatchIndex++;
					q(this, 1);
					return function() {
						var a = $a(k, l);
						0 <= a && (q(h, -1), a < k.$$digestWatchIndex && k.$$digestWatchIndex--);
						c = null
					}
				},
				$watchGroup: function(a, b) {
					function c() {
						h = !1;
						k ? (k = !1, b(e, e, g)) : b(e, d, g)
					}
					var d = Array(a.length),
						e = Array(a.length),
						f = [],
						g = this,
						h = !1,
						k = !0;
					if (!a.length) {
						var l = !0;
						g.$evalAsync(function() {
							l && b(e, e, g)
						});
						return function() {
							l = !1
						}
					}
					if (1 === a.length) return this.$watch(a[0], function(a, c, f) {
						e[0] = a;
						d[0] = c;
						b(e, a === c ? e : d, f)
					});
					p(a, function(a, b) {
						var k = g.$watch(a, function(a, f) {
							e[b] = a;
							d[b] = f;
							h || (h = !0, g.$evalAsync(c))
						});
						f.push(k)
					});
					return function() {
						for (; f.length;) f.shift()()
					}
				},
				$watchCollection: function(a, b) {
					function c(a) {
						e = a;
						var b, d, g, h;
						if (!x(e)) {
							if (G(e))
								if (ra(e))
									for (f !== n && (f = n, p = f.length = 0, l++), a = e.length, p !== a && (l++, f.length = p = a), b = 0; b < a; b++) h =
										f[b], g = e[b], d = h !== h && g !== g, d || h === g || (l++, f[b] = g);
								else {
									f !== q && (f = q = {}, p = 0, l++);
									a = 0;
									for (b in e) ua.call(e, b) && (a++, g = e[b], h = f[b], b in f ? (d = h !== h && g !== g, d || h === g || (l++, f[b] = g)) : (p++, f[b] = g, l++));
									if (p > a)
										for (b in l++, f) ua.call(e, b) || (p--, delete f[b])
								}
							else f !== e && (f = e, l++);
							return l
						}
					}
					c.$stateful = !0;
					var d = this,
						e, f, h, k = 1 < b.length,
						l = 0,
						m = g(a, c),
						n = [],
						q = {},
						r = !0,
						p = 0;
					return this.$watch(m, function() {
						r ? (r = !1, b(e, e, d)) : b(e, h, d);
						if (k)
							if (G(e))
								if (ra(e)) {
									h = Array(e.length);
									for (var a = 0; a < e.length; a++) h[a] = e[a]
								} else
									for (a in h = {}, e) ua.call(e, a) && (h[a] = e[a]);
						else h = e
					})
				},
				$digest: function() {
					var a, g, k, l, m, q, r, p = b,
						t, u = [],
						x, w;
					n("$digest");
					h.$$checkUrlChange();
					this === K && null !== e && (h.defer.cancel(e), s());
					c = null;
					do {
						r = !1;
						t = this;
						for (q = 0; q < y.length; q++) {
							try {
								w = y[q], l = w.fn, l(w.scope, w.locals)
							} catch (A) {
								f(A)
							}
							c = null
						}
						y.length = 0;
						a: do {
							if (q = t.$$watchers)
								for (q.$$digestWatchIndex = q.length; q.$$digestWatchIndex--;) try {
									if (a = q[q.$$digestWatchIndex])
										if (m = a.get, (g = m(t)) !== (k = a.last) && !(a.eq ? pa(g, k) : da(g) && da(k))) r = !0, c = a, a.last = a.eq ? sa(g, null) : g, l =
											a.fn, l(g, k === I ? g : k, t), 5 > p && (x = 4 - p, u[x] || (u[x] = []), u[x].push({
												msg: E(a.exp) ? "fn: " + (a.exp.name || a.exp.toString()) : a.exp,
												newVal: g,
												oldVal: k
											}));
										else if (a === c) {
										r = !1;
										break a
									}
								} catch (F) {
									f(F)
								}
							if (!(q = t.$$watchersCount && t.$$childHead || t !== this && t.$$nextSibling))
								for (; t !== this && !(q = t.$$nextSibling);) t = t.$parent
						} while (t = q);
						if ((r || y.length) && !p--) throw K.$$phase = null, d("infdig", b, u);
					} while (r || y.length);
					for (K.$$phase = null; B < v.length;) try {
						v[B++]()
					} catch (La) {
						f(La)
					}
					v.length = B = 0;
					h.$$checkUrlChange()
				},
				$destroy: function() {
					if (!this.$$destroyed) {
						var a =
							this.$parent;
						this.$broadcast("$destroy");
						this.$$destroyed = !0;
						this === K && h.$$applicationDestroyed();
						q(this, -this.$$watchersCount);
						for (var b in this.$$listenerCount) r(this, this.$$listenerCount[b], b);
						a && a.$$childHead === this && (a.$$childHead = this.$$nextSibling);
						a && a.$$childTail === this && (a.$$childTail = this.$$prevSibling);
						this.$$prevSibling && (this.$$prevSibling.$$nextSibling = this.$$nextSibling);
						this.$$nextSibling && (this.$$nextSibling.$$prevSibling = this.$$prevSibling);
						this.$destroy = this.$digest = this.$apply =
							this.$evalAsync = this.$applyAsync = A;
						this.$on = this.$watch = this.$watchGroup = function() {
							return A
						};
						this.$$listeners = {};
						this.$$nextSibling = null;
						l(this)
					}
				},
				$eval: function(a, b) {
					return g(a)(this, b)
				},
				$evalAsync: function(a, b) {
					K.$$phase || y.length || h.defer(function() {
						y.length && K.$digest()
					});
					y.push({
						scope: this,
						fn: g(a),
						locals: b
					})
				},
				$$postDigest: function(a) {
					v.push(a)
				},
				$apply: function(a) {
					try {
						n("$apply");
						try {
							return this.$eval(a)
						} finally {
							K.$$phase = null
						}
					} catch (b) {
						f(b)
					} finally {
						try {
							K.$digest()
						} catch (c) {
							throw f(c), c;
						}
					}
				},
				$applyAsync: function(a) {
					function b() {
						c.$eval(a)
					}
					var c = this;
					a && u.push(b);
					a = g(a);
					t()
				},
				$on: function(a, b) {
					var c = this.$$listeners[a];
					c || (this.$$listeners[a] = c = []);
					c.push(b);
					var d = this;
					do d.$$listenerCount[a] || (d.$$listenerCount[a] = 0), d.$$listenerCount[a]++; while (d = d.$parent);
					var e = this;
					return function() {
						var d = c.indexOf(b); - 1 !== d && (c[d] = null, r(e, 1, a))
					}
				},
				$emit: function(a, b) {
					var c = [],
						d, e = this,
						g = !1,
						h = {
							name: a,
							targetScope: e,
							stopPropagation: function() {
								g = !0
							},
							preventDefault: function() {
								h.defaultPrevented = !0
							},
							defaultPrevented: !1
						},
						k = ab([h], arguments, 1),
						l, m;
					do {
						d = e.$$listeners[a] || c;
						h.currentScope = e;
						l = 0;
						for (m = d.length; l < m; l++)
							if (d[l]) try {
								d[l].apply(null, k)
							} catch (n) {
								f(n)
							} else d.splice(l, 1), l--, m--;
						if (g) return h.currentScope = null, h;
						e = e.$parent
					} while (e);
					h.currentScope = null;
					return h
				},
				$broadcast: function(a, b) {
					var c = this,
						d = this,
						e = {
							name: a,
							targetScope: this,
							preventDefault: function() {
								e.defaultPrevented = !0
							},
							defaultPrevented: !1
						};
					if (!this.$$listenerCount[a]) return e;
					for (var g = ab([e], arguments, 1), h, k; c = d;) {
						e.currentScope = c;
						d = c.$$listeners[a] || [];
						h = 0;
						for (k = d.length; h < k; h++)
							if (d[h]) try {
								d[h].apply(null, g)
							} catch (l) {
								f(l)
							} else d.splice(h, 1), h--, k--;
						if (!(d = c.$$listenerCount[a] && c.$$childHead || c !== this && c.$$nextSibling))
							for (; c !== this && !(d = c.$$nextSibling);) c = c.$parent
					}
					e.currentScope = null;
					return e
				}
			};
			var K = new m,
				y = K.$$asyncQueue = [],
				v = K.$$postDigestQueue = [],
				u = K.$$applyAsyncQueue = [],
				B = 0;
			return K
		}]
	}

	function Ee() {
		var a = /^\s*(https?|ftp|mailto|tel|file):/,
			b = /^\s*((https?|ftp|file|blob):|data:image\/)/;
		this.aHrefSanitizationWhitelist = function(b) {
			return u(b) ?
				(a = b, this) : a
		};
		this.imgSrcSanitizationWhitelist = function(a) {
			return u(a) ? (b = a, this) : b
		};
		this.$get = function() {
			return function(d, c) {
				var e = c ? b : a,
					f;
				f = Ca(d).href;
				return "" === f || f.match(e) ? d : "unsafe:" + f
			}
		}
	}

	function Cg(a) {
		if ("self" === a) return a;
		if (D(a)) {
			if (-1 < a.indexOf("***")) throw ta("iwcard", a);
			a = Kd(a).replace(/\\\*\\\*/g, ".*").replace(/\\\*/g, "[^:/.?&;]*");
			return new RegExp("^" + a + "$")
		}
		if (Xa(a)) return new RegExp("^" + a.source + "$");
		throw ta("imatcher");
	}

	function Ld(a) {
		var b = [];
		u(a) && p(a, function(a) {
			b.push(Cg(a))
		});
		return b
	}

	function Qf() {
		this.SCE_CONTEXTS = oa;
		var a = ["self"],
			b = [];
		this.resourceUrlWhitelist = function(b) {
			arguments.length && (a = Ld(b));
			return a
		};
		this.resourceUrlBlacklist = function(a) {
			arguments.length && (b = Ld(a));
			return b
		};
		this.$get = ["$injector", function(d) {
			function c(a, b) {
				return "self" === a ? wd(b) : !!a.exec(b.href)
			}

			function e(a) {
				var b = function(a) {
					this.$$unwrapTrustedValue = function() {
						return a
					}
				};
				a && (b.prototype = new a);
				b.prototype.valueOf = function() {
					return this.$$unwrapTrustedValue()
				};
				b.prototype.toString = function() {
					return this.$$unwrapTrustedValue().toString()
				};
				return b
			}
			var f = function(a) {
				throw ta("unsafe");
			};
			d.has("$sanitize") && (f = d.get("$sanitize"));
			var g = e(),
				h = {};
			h[oa.HTML] = e(g);
			h[oa.CSS] = e(g);
			h[oa.URL] = e(g);
			h[oa.JS] = e(g);
			h[oa.RESOURCE_URL] = e(h[oa.URL]);
			return {
				trustAs: function(a, b) {
					var c = h.hasOwnProperty(a) ? h[a] : null;
					if (!c) throw ta("icontext", a, b);
					if (null === b || x(b) || "" === b) return b;
					if ("string" !== typeof b) throw ta("itype", a);
					return new c(b)
				},
				getTrusted: function(d, e) {
					if (null === e || x(e) || "" === e) return e;
					var g = h.hasOwnProperty(d) ? h[d] : null;
					if (g && e instanceof g) return e.$$unwrapTrustedValue();
					if (d === oa.RESOURCE_URL) {
						var g = Ca(e.toString()),
							n, q, r = !1;
						n = 0;
						for (q = a.length; n < q; n++)
							if (c(a[n], g)) {
								r = !0;
								break
							} if (r)
							for (n = 0, q = b.length; n < q; n++)
								if (c(b[n], g)) {
									r = !1;
									break
								} if (r) return e;
						throw ta("insecurl", e.toString());
					}
					if (d === oa.HTML) return f(e);
					throw ta("unsafe");
				},
				valueOf: function(a) {
					return a instanceof g ? a.$$unwrapTrustedValue() : a
				}
			}
		}]
	}

	function Pf() {
		var a = !0;
		this.enabled = function(b) {
			arguments.length && (a = !!b);
			return a
		};
		this.$get = ["$parse", "$sceDelegate", function(b, d) {
			if (a &&
				8 > za) throw ta("iequirks");
			var c = qa(oa);
			c.isEnabled = function() {
				return a
			};
			c.trustAs = d.trustAs;
			c.getTrusted = d.getTrusted;
			c.valueOf = d.valueOf;
			a || (c.trustAs = c.getTrusted = function(a, b) {
				return b
			}, c.valueOf = Ya);
			c.parseAs = function(a, d) {
				var e = b(d);
				return e.literal && e.constant ? e : b(d, function(b) {
					return c.getTrusted(a, b)
				})
			};
			var e = c.parseAs,
				f = c.getTrusted,
				g = c.trustAs;
			p(oa, function(a, b) {
				var d = P(b);
				c[("parse_as_" + d).replace(uc, gb)] = function(b) {
					return e(a, b)
				};
				c[("get_trusted_" + d).replace(uc, gb)] = function(b) {
					return f(a,
						b)
				};
				c[("trust_as_" + d).replace(uc, gb)] = function(b) {
					return g(a, b)
				}
			});
			return c
		}]
	}

	function Rf() {
		this.$get = ["$window", "$document", function(a, b) {
			var d = {},
				c = !((!a.nw || !a.nw.process) && a.chrome && (a.chrome.app && a.chrome.app.runtime || !a.chrome.app && a.chrome.runtime && a.chrome.runtime.id)) && a.history && a.history.pushState,
				e = Z((/android (\d+)/.exec(P((a.navigator || {}).userAgent)) || [])[1]),
				f = /Boxee/i.test((a.navigator || {}).userAgent),
				g = b[0] || {},
				h = g.body && g.body.style,
				k = !1,
				l = !1;
			h && (k = !!("transition" in h || "webkitTransition" in
				h), l = !!("animation" in h || "webkitAnimation" in h));
			return {
				history: !(!c || 4 > e || f),
				hasEvent: function(a) {
					if ("input" === a && za) return !1;
					if (x(d[a])) {
						var b = g.createElement("div");
						d[a] = "on" + a in b
					}
					return d[a]
				},
				csp: Ga(),
				transitions: k,
				animations: l,
				android: e
			}
		}]
	}

	function Tf() {
		var a;
		this.httpOptions = function(b) {
			return b ? (a = b, this) : a
		};
		this.$get = ["$exceptionHandler", "$templateCache", "$http", "$q", "$sce", function(b, d, c, e, f) {
			function g(h, k) {
				g.totalPendingRequests++;
				if (!D(h) || x(d.get(h))) h = f.getTrustedResourceUrl(h);
				var l =
					c.defaults && c.defaults.transformResponse;
				H(l) ? l = l.filter(function(a) {
					return a !== lc
				}) : l === lc && (l = null);
				return c.get(h, R({
					cache: d,
					transformResponse: l
				}, a)).finally(function() {
					g.totalPendingRequests--
				}).then(function(a) {
					d.put(h, a.data);
					return a.data
				}, function(a) {
					k || (a = Dg("tpload", h, a.status, a.statusText), b(a));
					return e.reject(a)
				})
			}
			g.totalPendingRequests = 0;
			return g
		}]
	}

	function Uf() {
		this.$get = ["$rootScope", "$browser", "$location", function(a, b, d) {
			return {
				findBindings: function(a, b, d) {
					a = a.getElementsByClassName("ng-binding");
					var g = [];
					p(a, function(a) {
						var c = ea.element(a).data("$binding");
						c && p(c, function(c) {
							d ? (new RegExp("(^|\\s)" + Kd(b) + "(\\s|\\||$)")).test(c) && g.push(a) : -1 !== c.indexOf(b) && g.push(a)
						})
					});
					return g
				},
				findModels: function(a, b, d) {
					for (var g = ["ng-", "data-ng-", "ng\\:"], h = 0; h < g.length; ++h) {
						var k = a.querySelectorAll("[" + g[h] + "model" + (d ? "=" : "*=") + '"' + b + '"]');
						if (k.length) return k
					}
				},
				getLocation: function() {
					return d.url()
				},
				setLocation: function(b) {
					b !== d.url() && (d.url(b), a.$digest())
				},
				whenStable: function(a) {
					b.notifyWhenNoOutstandingRequests(a)
				}
			}
		}]
	}

	function Vf() {
		this.$get = ["$rootScope", "$browser", "$q", "$$q", "$exceptionHandler", function(a, b, d, c, e) {
			function f(f, k, l) {
				E(f) || (l = k, k = f, f = A);
				var m = va.call(arguments, 3),
					n = u(l) && !l,
					q = (n ? c : d).defer(),
					r = q.promise,
					p;
				p = b.defer(function() {
					try {
						q.resolve(f.apply(null, m))
					} catch (b) {
						q.reject(b), e(b)
					} finally {
						delete g[r.$$timeoutId]
					}
					n || a.$apply()
				}, k);
				r.$$timeoutId = p;
				g[p] = q;
				return r
			}
			var g = {};
			f.cancel = function(a) {
				return a && a.$$timeoutId in g ? (g[a.$$timeoutId].promise.catch(A), g[a.$$timeoutId].reject("canceled"), delete g[a.$$timeoutId],
					b.defer.cancel(a.$$timeoutId)) : !1
			};
			return f
		}]
	}

	function Ca(a) {
		za && (aa.setAttribute("href", a), a = aa.href);
		aa.setAttribute("href", a);
		return {
			href: aa.href,
			protocol: aa.protocol ? aa.protocol.replace(/:$/, "") : "",
			host: aa.host,
			search: aa.search ? aa.search.replace(/^\?/, "") : "",
			hash: aa.hash ? aa.hash.replace(/^#/, "") : "",
			hostname: aa.hostname,
			port: aa.port,
			pathname: "/" === aa.pathname.charAt(0) ? aa.pathname : "/" + aa.pathname
		}
	}

	function wd(a) {
		a = D(a) ? Ca(a) : a;
		return a.protocol === Md.protocol && a.host === Md.host
	}

	function Wf() {
		this.$get =
			la(w)
	}

	function Nd(a) {
		function b(a) {
			try {
				return decodeURIComponent(a)
			} catch (b) {
				return a
			}
		}
		var d = a[0] || {},
			c = {},
			e = "";
		return function() {
			var a, g, h, k, l;
			try {
				a = d.cookie || ""
			} catch (m) {
				a = ""
			}
			if (a !== e)
				for (e = a, a = e.split("; "), c = {}, h = 0; h < a.length; h++) g = a[h], k = g.indexOf("="), 0 < k && (l = b(g.substring(0, k)), x(c[l]) && (c[l] = b(g.substring(k + 1))));
			return c
		}
	}

	function $f() {
		this.$get = Nd
	}

	function $c(a) {
		function b(d, c) {
			if (G(d)) {
				var e = {};
				p(d, function(a, c) {
					e[c] = b(c, a)
				});
				return e
			}
			return a.factory(d + "Filter", c)
		}
		this.register = b;
		this.$get = ["$injector", function(a) {
			return function(b) {
				return a.get(b + "Filter")
			}
		}];
		b("currency", Od);
		b("date", Pd);
		b("filter", Eg);
		b("json", Fg);
		b("limitTo", Gg);
		b("lowercase", Hg);
		b("number", Qd);
		b("orderBy", Rd);
		b("uppercase", Ig)
	}

	function Eg() {
		return function(a, b, d, c) {
			if (!ra(a)) {
				if (null == a) return a;
				throw M("filter")("notarray", a);
			}
			c = c || "$";
			var e;
			switch (vc(b)) {
				case "function":
					break;
				case "boolean":
				case "null":
				case "number":
				case "string":
					e = !0;
				case "object":
					b = Jg(b, d, c, e);
					break;
				default:
					return a
			}
			return Array.prototype.filter.call(a,
				b)
		}
	}

	function Jg(a, b, d, c) {
		var e = G(a) && d in a;
		!0 === b ? b = pa : E(b) || (b = function(a, b) {
			if (x(a)) return !1;
			if (null === a || null === b) return a === b;
			if (G(b) || G(a) && !Xb(a)) return !1;
			a = P("" + a);
			b = P("" + b);
			return -1 !== a.indexOf(b)
		});
		return function(f) {
			return e && !G(f) ? Ea(f, a[d], b, d, !1) : Ea(f, a, b, d, c)
		}
	}

	function Ea(a, b, d, c, e, f) {
		var g = vc(a),
			h = vc(b);
		if ("string" === h && "!" === b.charAt(0)) return !Ea(a, b.substring(1), d, c, e);
		if (H(a)) return a.some(function(a) {
			return Ea(a, b, d, c, e)
		});
		switch (g) {
			case "object":
				var k;
				if (e) {
					for (k in a)
						if (k.charAt &&
							"$" !== k.charAt(0) && Ea(a[k], b, d, c, !0)) return !0;
					return f ? !1 : Ea(a, b, d, c, !1)
				}
				if ("object" === h) {
					for (k in b)
						if (f = b[k], !E(f) && !x(f) && (g = k === c, !Ea(g ? a : a[k], f, d, c, g, g))) return !1;
					return !0
				}
				return d(a, b);
			case "function":
				return !1;
			default:
				return d(a, b)
		}
	}

	function vc(a) {
		return null === a ? "null" : typeof a
	}

	function Od(a) {
		var b = a.NUMBER_FORMATS;
		return function(a, c, e) {
			x(c) && (c = b.CURRENCY_SYM);
			x(e) && (e = b.PATTERNS[1].maxFrac);
			return null == a ? a : Sd(a, b.PATTERNS[1], b.GROUP_SEP, b.DECIMAL_SEP, e).replace(/\u00A4/g, c)
		}
	}

	function Qd(a) {
		var b =
			a.NUMBER_FORMATS;
		return function(a, c) {
			return null == a ? a : Sd(a, b.PATTERNS[0], b.GROUP_SEP, b.DECIMAL_SEP, c)
		}
	}

	function Kg(a) {
		var b = 0,
			d, c, e, f, g; - 1 < (c = a.indexOf(Td)) && (a = a.replace(Td, ""));
		0 < (e = a.search(/e/i)) ? (0 > c && (c = e), c += +a.slice(e + 1), a = a.substring(0, e)) : 0 > c && (c = a.length);
		for (e = 0; a.charAt(e) === wc; e++);
		if (e === (g = a.length)) d = [0], c = 1;
		else {
			for (g--; a.charAt(g) === wc;) g--;
			c -= e;
			d = [];
			for (f = 0; e <= g; e++, f++) d[f] = +a.charAt(e)
		}
		c > Ud && (d = d.splice(0, Ud - 1), b = c - 1, c = 1);
		return {
			d: d,
			e: b,
			i: c
		}
	}

	function Lg(a, b, d, c) {
		var e = a.d,
			f =
			e.length - a.i;
		b = x(b) ? Math.min(Math.max(d, f), c) : +b;
		d = b + a.i;
		c = e[d];
		if (0 < d) {
			e.splice(Math.max(a.i, d));
			for (var g = d; g < e.length; g++) e[g] = 0
		} else
			for (f = Math.max(0, f), a.i = 1, e.length = Math.max(1, d = b + 1), e[0] = 0, g = 1; g < d; g++) e[g] = 0;
		if (5 <= c)
			if (0 > d - 1) {
				for (c = 0; c > d; c--) e.unshift(0), a.i++;
				e.unshift(1);
				a.i++
			} else e[d - 1]++;
		for (; f < Math.max(0, b); f++) e.push(0);
		if (b = e.reduceRight(function(a, b, c, d) {
				b += a;
				d[c] = b % 10;
				return Math.floor(b / 10)
			}, 0)) e.unshift(b), a.i++
	}

	function Sd(a, b, d, c, e) {
		if (!D(a) && !ba(a) || isNaN(a)) return "";
		var f = !isFinite(a),
			g = !1,
			h = Math.abs(a) + "",
			k = "";
		if (f) k = "\u221e";
		else {
			g = Kg(h);
			Lg(g, e, b.minFrac, b.maxFrac);
			k = g.d;
			h = g.i;
			e = g.e;
			f = [];
			for (g = k.reduce(function(a, b) {
					return a && !b
				}, !0); 0 > h;) k.unshift(0), h++;
			0 < h ? f = k.splice(h, k.length) : (f = k, k = [0]);
			h = [];
			for (k.length >= b.lgSize && h.unshift(k.splice(-b.lgSize, k.length).join("")); k.length > b.gSize;) h.unshift(k.splice(-b.gSize, k.length).join(""));
			k.length && h.unshift(k.join(""));
			k = h.join(d);
			f.length && (k += c + f.join(""));
			e && (k += "e+" + e)
		}
		return 0 > a && !g ? b.negPre + k + b.negSuf : b.posPre +
			k + b.posSuf
	}

	function Lb(a, b, d, c) {
		var e = "";
		if (0 > a || c && 0 >= a) c ? a = -a + 1 : (a = -a, e = "-");
		for (a = "" + a; a.length < b;) a = wc + a;
		d && (a = a.substr(a.length - b));
		return e + a
	}

	function Y(a, b, d, c, e) {
		d = d || 0;
		return function(f) {
			f = f["get" + a]();
			if (0 < d || f > -d) f += d;
			0 === f && -12 === d && (f = 12);
			return Lb(f, b, c, e)
		}
	}

	function nb(a, b, d) {
		return function(c, e) {
			var f = c["get" + a](),
				g = vb((d ? "STANDALONE" : "") + (b ? "SHORT" : "") + a);
			return e[g][f]
		}
	}

	function Vd(a) {
		var b = (new Date(a, 0, 1)).getDay();
		return new Date(a, 0, (4 >= b ? 5 : 12) - b)
	}

	function Wd(a) {
		return function(b) {
			var d =
				Vd(b.getFullYear());
			b = +new Date(b.getFullYear(), b.getMonth(), b.getDate() + (4 - b.getDay())) - +d;
			b = 1 + Math.round(b / 6048E5);
			return Lb(b, a)
		}
	}

	function xc(a, b) {
		return 0 >= a.getFullYear() ? b.ERAS[0] : b.ERAS[1]
	}

	function Pd(a) {
		function b(a) {
			var b;
			if (b = a.match(d)) {
				a = new Date(0);
				var f = 0,
					g = 0,
					h = b[8] ? a.setUTCFullYear : a.setFullYear,
					k = b[8] ? a.setUTCHours : a.setHours;
				b[9] && (f = Z(b[9] + b[10]), g = Z(b[9] + b[11]));
				h.call(a, Z(b[1]), Z(b[2]) - 1, Z(b[3]));
				f = Z(b[4] || 0) - f;
				g = Z(b[5] || 0) - g;
				h = Z(b[6] || 0);
				b = Math.round(1E3 * parseFloat("0." + (b[7] ||
					0)));
				k.call(a, f, g, h, b)
			}
			return a
		}
		var d = /^(\d{4})-?(\d\d)-?(\d\d)(?:T(\d\d)(?::?(\d\d)(?::?(\d\d)(?:\.(\d+))?)?)?(Z|([+-])(\d\d):?(\d\d))?)?$/;
		return function(c, d, f) {
			var g = "",
				h = [],
				k, l;
			d = d || "mediumDate";
			d = a.DATETIME_FORMATS[d] || d;
			D(c) && (c = Mg.test(c) ? Z(c) : b(c));
			ba(c) && (c = new Date(c));
			if (!ga(c) || !isFinite(c.getTime())) return c;
			for (; d;)(l = Ng.exec(d)) ? (h = ab(h, l, 1), d = h.pop()) : (h.push(d), d = null);
			var m = c.getTimezoneOffset();
			f && (m = Mc(f, m), c = Yb(c, f, !0));
			p(h, function(b) {
				k = Og[b];
				g += k ? k(c, a.DATETIME_FORMATS, m) :
					"''" === b ? "'" : b.replace(/(^'|'$)/g, "").replace(/''/g, "'")
			});
			return g
		}
	}

	function Fg() {
		return function(a, b) {
			x(b) && (b = 2);
			return cb(a, b)
		}
	}

	function Gg() {
		return function(a, b, d) {
			b = Infinity === Math.abs(Number(b)) ? Number(b) : Z(b);
			if (da(b)) return a;
			ba(a) && (a = a.toString());
			if (!ra(a)) return a;
			d = !d || isNaN(d) ? 0 : Z(d);
			d = 0 > d ? Math.max(0, a.length + d) : d;
			return 0 <= b ? yc(a, d, d + b) : 0 === d ? yc(a, b, a.length) : yc(a, Math.max(0, d + b), d)
		}
	}

	function yc(a, b, d) {
		return D(a) ? a.slice(b, d) : va.call(a, b, d)
	}

	function Rd(a) {
		function b(b) {
			return b.map(function(b) {
				var c =
					1,
					d = Ya;
				if (E(b)) d = b;
				else if (D(b)) {
					if ("+" === b.charAt(0) || "-" === b.charAt(0)) c = "-" === b.charAt(0) ? -1 : 1, b = b.substring(1);
					if ("" !== b && (d = a(b), d.constant)) var e = d(),
						d = function(a) {
							return a[e]
						}
				}
				return {
					get: d,
					descending: c
				}
			})
		}

		function d(a) {
			switch (typeof a) {
				case "number":
				case "boolean":
				case "string":
					return !0;
				default:
					return !1
			}
		}

		function c(a, b) {
			var c = 0,
				d = a.type,
				k = b.type;
			if (d === k) {
				var k = a.value,
					l = b.value;
				"string" === d ? (k = k.toLowerCase(), l = l.toLowerCase()) : "object" === d && (G(k) && (k = a.index), G(l) && (l = b.index));
				k !== l && (c =
					k < l ? -1 : 1)
			} else c = d < k ? -1 : 1;
			return c
		}
		return function(a, f, g, h) {
			if (null == a) return a;
			if (!ra(a)) throw M("orderBy")("notarray", a);
			H(f) || (f = [f]);
			0 === f.length && (f = ["+"]);
			var k = b(f),
				l = g ? -1 : 1,
				m = E(h) ? h : c;
			a = Array.prototype.map.call(a, function(a, b) {
				return {
					value: a,
					tieBreaker: {
						value: b,
						type: "number",
						index: b
					},
					predicateValues: k.map(function(c) {
						var e = c.get(a);
						c = typeof e;
						if (null === e) c = "string", e = "null";
						else if ("object" === c) a: {
							if (E(e.valueOf) && (e = e.valueOf(), d(e))) break a;Xb(e) && (e = e.toString(), d(e))
						}
						return {
							value: e,
							type: c,
							index: b
						}
					})
				}
			});
			a.sort(function(a, b) {
				for (var c = 0, d = k.length; c < d; c++) {
					var e = m(a.predicateValues[c], b.predicateValues[c]);
					if (e) return e * k[c].descending * l
				}
				return m(a.tieBreaker, b.tieBreaker) * l
			});
			return a = a.map(function(a) {
				return a.value
			})
		}
	}

	function Qa(a) {
		E(a) && (a = {
			link: a
		});
		a.restrict = a.restrict || "AC";
		return la(a)
	}

	function Mb(a, b, d, c, e) {
		this.$$controls = [];
		this.$error = {};
		this.$$success = {};
		this.$pending = void 0;
		this.$name = e(b.name || b.ngForm || "")(d);
		this.$dirty = !1;
		this.$valid = this.$pristine = !0;
		this.$submitted =
			this.$invalid = !1;
		this.$$parentForm = Nb;
		this.$$element = a;
		this.$$animate = c;
		Xd(this)
	}

	function Xd(a) {
		a.$$classCache = {};
		a.$$classCache[Yd] = !(a.$$classCache[ob] = a.$$element.hasClass(ob))
	}

	function Zd(a) {
		function b(a, b, c) {
			c && !a.$$classCache[b] ? (a.$$animate.addClass(a.$$element, b), a.$$classCache[b] = !0) : !c && a.$$classCache[b] && (a.$$animate.removeClass(a.$$element, b), a.$$classCache[b] = !1)
		}

		function d(a, c, d) {
			c = c ? "-" + Qc(c, "-") : "";
			b(a, ob + c, !0 === d);
			b(a, Yd + c, !1 === d)
		}
		var c = a.set,
			e = a.unset;
		a.clazz.prototype.$setValidity =
			function(a, g, h) {
				x(g) ? (this.$pending || (this.$pending = {}), c(this.$pending, a, h)) : (this.$pending && e(this.$pending, a, h), $d(this.$pending) && (this.$pending = void 0));
				Ha(g) ? g ? (e(this.$error, a, h), c(this.$$success, a, h)) : (c(this.$error, a, h), e(this.$$success, a, h)) : (e(this.$error, a, h), e(this.$$success, a, h));
				this.$pending ? (b(this, "ng-pending", !0), this.$valid = this.$invalid = void 0, d(this, "", null)) : (b(this, "ng-pending", !1), this.$valid = $d(this.$error), this.$invalid = !this.$valid, d(this, "", this.$valid));
				g = this.$pending &&
					this.$pending[a] ? void 0 : this.$error[a] ? !1 : this.$$success[a] ? !0 : null;
				d(this, a, g);
				this.$$parentForm.$setValidity(a, g, this)
			}
	}

	function $d(a) {
		if (a)
			for (var b in a)
				if (a.hasOwnProperty(b)) return !1;
		return !0
	}

	function zc(a) {
		a.$formatters.push(function(b) {
			return a.$isEmpty(b) ? b : b.toString()
		})
	}

	function Ra(a, b, d, c, e, f) {
		var g = P(b[0].type);
		if (!e.android) {
			var h = !1;
			b.on("compositionstart", function() {
				h = !0
			});
			b.on("compositionend", function() {
				h = !1;
				l()
			})
		}
		var k, l = function(a) {
			k && (f.defer.cancel(k), k = null);
			if (!h) {
				var e = b.val();
				a = a && a.type;
				"password" === g || d.ngTrim && "false" === d.ngTrim || (e = S(e));
				(c.$viewValue !== e || "" === e && c.$$hasNativeValidators) && c.$setViewValue(e, a)
			}
		};
		if (e.hasEvent("input")) b.on("input", l);
		else {
			var m = function(a, b, c) {
				k || (k = f.defer(function() {
					k = null;
					b && b.value === c || l(a)
				}))
			};
			b.on("keydown", function(a) {
				var b = a.keyCode;
				91 === b || 15 < b && 19 > b || 37 <= b && 40 >= b || m(a, this, this.value)
			});
			if (e.hasEvent("paste")) b.on("paste cut", m)
		}
		b.on("change", l);
		if (ae[g] && c.$$hasNativeValidators && g === d.type) b.on("keydown wheel mousedown",
			function(a) {
				if (!k) {
					var b = this.validity,
						c = b.badInput,
						d = b.typeMismatch;
					k = f.defer(function() {
						k = null;
						b.badInput === c && b.typeMismatch === d || l(a)
					})
				}
			});
		c.$render = function() {
			var a = c.$isEmpty(c.$viewValue) ? "" : c.$viewValue;
			b.val() !== a && b.val(a)
		}
	}

	function Ob(a, b) {
		return function(d, c) {
			var e, f;
			if (ga(d)) return d;
			if (D(d)) {
				'"' === d.charAt(0) && '"' === d.charAt(d.length - 1) && (d = d.substring(1, d.length - 1));
				if (Pg.test(d)) return new Date(d);
				a.lastIndex = 0;
				if (e = a.exec(d)) return e.shift(), f = c ? {
					yyyy: c.getFullYear(),
					MM: c.getMonth() +
						1,
					dd: c.getDate(),
					HH: c.getHours(),
					mm: c.getMinutes(),
					ss: c.getSeconds(),
					sss: c.getMilliseconds() / 1E3
				} : {
					yyyy: 1970,
					MM: 1,
					dd: 1,
					HH: 0,
					mm: 0,
					ss: 0,
					sss: 0
				}, p(e, function(a, c) {
					c < b.length && (f[b[c]] = +a)
				}), new Date(f.yyyy, f.MM - 1, f.dd, f.HH, f.mm, f.ss || 0, 1E3 * f.sss || 0)
			}
			return NaN
		}
	}

	function pb(a, b, d, c) {
		return function(e, f, g, h, k, l, m) {
			function n(a) {
				return a && !(a.getTime && a.getTime() !== a.getTime())
			}

			function q(a) {
				return u(a) && !ga(a) ? d(a) || void 0 : a
			}
			Ac(e, f, g, h);
			Ra(e, f, g, h, k, l);
			var r = h && h.$options.getOption("timezone"),
				p;
			h.$$parserName =
				a;
			h.$parsers.push(function(a) {
				if (h.$isEmpty(a)) return null;
				if (b.test(a)) return a = d(a, p), r && (a = Yb(a, r)), a
			});
			h.$formatters.push(function(a) {
				if (a && !ga(a)) throw qb("datefmt", a);
				if (n(a)) return (p = a) && r && (p = Yb(p, r, !0)), m("date")(a, c, r);
				p = null;
				return ""
			});
			if (u(g.min) || g.ngMin) {
				var s;
				h.$validators.min = function(a) {
					return !n(a) || x(s) || d(a) >= s
				};
				g.$observe("min", function(a) {
					s = q(a);
					h.$validate()
				})
			}
			if (u(g.max) || g.ngMax) {
				var t;
				h.$validators.max = function(a) {
					return !n(a) || x(t) || d(a) <= t
				};
				g.$observe("max", function(a) {
					t =
						q(a);
					h.$validate()
				})
			}
		}
	}

	function Ac(a, b, d, c) {
		(c.$$hasNativeValidators = G(b[0].validity)) && c.$parsers.push(function(a) {
			var c = b.prop("validity") || {};
			return c.badInput || c.typeMismatch ? void 0 : a
		})
	}

	function be(a) {
		a.$$parserName = "number";
		a.$parsers.push(function(b) {
			if (a.$isEmpty(b)) return null;
			if (Qg.test(b)) return parseFloat(b)
		});
		a.$formatters.push(function(b) {
			if (!a.$isEmpty(b)) {
				if (!ba(b)) throw qb("numfmt", b);
				b = b.toString()
			}
			return b
		})
	}

	function Sa(a) {
		u(a) && !ba(a) && (a = parseFloat(a));
		return da(a) ? void 0 : a
	}

	function Bc(a) {
		var b =
			a.toString(),
			d = b.indexOf(".");
		return -1 === d ? -1 < a && 1 > a && (a = /e-(\d+)$/.exec(b)) ? Number(a[1]) : 0 : b.length - d - 1
	}

	function ce(a, b, d) {
		a = Number(a);
		var c = (a | 0) !== a,
			e = (b | 0) !== b,
			f = (d | 0) !== d;
		if (c || e || f) {
			var g = c ? Bc(a) : 0,
				h = e ? Bc(b) : 0,
				k = f ? Bc(d) : 0,
				g = Math.max(g, h, k),
				g = Math.pow(10, g);
			a *= g;
			b *= g;
			d *= g;
			c && (a = Math.round(a));
			e && (b = Math.round(b));
			f && (d = Math.round(d))
		}
		return 0 === (a - b) % d
	}

	function de(a, b, d, c, e) {
		if (u(c)) {
			a = a(c);
			if (!a.constant) throw qb("constexpr", d, c);
			return a(b)
		}
		return e
	}

	function Cc(a, b) {
		function d(a, b) {
			if (!a ||
				!a.length) return [];
			if (!b || !b.length) return a;
			var c = [],
				d = 0;
			a: for (; d < a.length; d++) {
				for (var e = a[d], f = 0; f < b.length; f++)
					if (e === b[f]) continue a;
				c.push(e)
			}
			return c
		}

		function c(a) {
			var b = a;
			H(a) ? b = a.map(c).join(" ") : G(a) && (b = Object.keys(a).filter(function(b) {
				return a[b]
			}).join(" "));
			return b
		}

		function e(a) {
			var b = a;
			if (H(a)) b = a.map(e);
			else if (G(a)) {
				var c = !1,
					b = Object.keys(a).filter(function(b) {
						b = a[b];
						!c && x(b) && (c = !0);
						return b
					});
				c && b.push(void 0)
			}
			return b
		}
		a = "ngClass" + a;
		var f;
		return ["$parse", function(g) {
			return {
				restrict: "AC",
				link: function(h, k, l) {
					function m(a, b) {
						var c = [];
						p(a, function(a) {
							if (0 < b || K[a]) K[a] = (K[a] || 0) + b, K[a] === +(0 < b) && c.push(a)
						});
						return c.join(" ")
					}

					function n(a) {
						if (a === b) {
							var c = v,
								c = m(c && c.split(" "), 1);
							l.$addClass(c)
						} else c = v, c = m(c && c.split(" "), -1), l.$removeClass(c);
						y = a
					}

					function q(a) {
						a = c(a);
						a !== v && r(a)
					}

					function r(a) {
						if (y === b) {
							var c = v && v.split(" "),
								e = a && a.split(" "),
								f = d(c, e),
								c = d(e, c),
								f = m(f, -1),
								c = m(c, 1);
							l.$addClass(c);
							l.$removeClass(f)
						}
						v = a
					}
					var s = l[a].trim(),
						u = ":" === s.charAt(0) && ":" === s.charAt(1),
						s = g(s, u ? e :
							c),
						t = u ? q : r,
						K = k.data("$classCounts"),
						y = !0,
						v;
					K || (K = V(), k.data("$classCounts", K));
					"ngClass" !== a && (f || (f = g("$index", function(a) {
						return a & 1
					})), h.$watch(f, n));
					h.$watch(s, t, u)
				}
			}
		}]
	}

	function Pb(a, b, d, c, e, f, g, h, k) {
		this.$modelValue = this.$viewValue = Number.NaN;
		this.$$rawModelValue = void 0;
		this.$validators = {};
		this.$asyncValidators = {};
		this.$parsers = [];
		this.$formatters = [];
		this.$viewChangeListeners = [];
		this.$untouched = !0;
		this.$touched = !1;
		this.$pristine = !0;
		this.$dirty = !1;
		this.$valid = !0;
		this.$invalid = !1;
		this.$error = {};
		this.$$success = {};
		this.$pending = void 0;
		this.$name = k(d.name || "", !1)(a);
		this.$$parentForm = Nb;
		this.$options = Qb;
		this.$$parsedNgModel = e(d.ngModel);
		this.$$parsedNgModelAssign = this.$$parsedNgModel.assign;
		this.$$ngModelGet = this.$$parsedNgModel;
		this.$$ngModelSet = this.$$parsedNgModelAssign;
		this.$$pendingDebounce = null;
		this.$$parserValid = void 0;
		this.$$currentValidationRunId = 0;
		this.$$scope = a;
		this.$$attr = d;
		this.$$element = c;
		this.$$animate = f;
		this.$$timeout = g;
		this.$$parse = e;
		this.$$q = h;
		this.$$exceptionHandler = b;
		Xd(this);
		Rg(this)
	}

	function Rg(a) {
		a.$$scope.$watch(function() {
			var b = a.$$ngModelGet(a.$$scope);
			if (b !== a.$modelValue && (a.$modelValue === a.$modelValue || b === b)) {
				a.$modelValue = a.$$rawModelValue = b;
				a.$$parserValid = void 0;
				for (var d = a.$formatters, c = d.length, e = b; c--;) e = d[c](e);
				a.$viewValue !== e && (a.$$updateEmptyClasses(e), a.$viewValue = a.$$lastCommittedViewValue = e, a.$render(), a.$$runValidators(a.$modelValue, a.$viewValue, A))
			}
			return b
		})
	}

	function Dc(a) {
		this.$$options = a
	}

	function ee(a, b) {
		p(b, function(b, c) {
			u(a[c]) || (a[c] = b)
		})
	}

	function Ta(a, b) {
		a.prop("selected", b);
		a.attr("selected", b)
	}
	var Sg = /^\/(.+)\/([a-z]*)$/,
		ua = Object.prototype.hasOwnProperty,
		Fc = {
			objectMaxDepth: 5
		},
		P = function(a) {
			return D(a) ? a.toLowerCase() : a
		},
		vb = function(a) {
			return D(a) ? a.toUpperCase() : a
		},
		za, F, na, va = [].slice,
		sg = [].splice,
		Tg = [].push,
		ma = Object.prototype.toString,
		Jc = Object.getPrototypeOf,
		Fa = M("ng"),
		ea = w.angular || (w.angular = {}),
		ac, rb = 0;
	za = w.document.documentMode;
	var da = Number.isNaN || function(a) {
		return a !== a
	};
	A.$inject = [];
	Ya.$inject = [];
	var H = Array.isArray,
		qe = /^\[object (?:Uint8|Uint8Clamped|Uint16|Uint32|Int8|Int16|Int32|Float32|Float64)Array]$/,
		S = function(a) {
			return D(a) ? a.trim() : a
		},
		Kd = function(a) {
			return a.replace(/([-()[\]{}+?*.$^|,:#<!\\])/g, "\\$1").replace(/\x08/g, "\\x08")
		},
		Ga = function() {
			if (!u(Ga.rules)) {
				var a = w.document.querySelector("[ng-csp]") || w.document.querySelector("[data-ng-csp]");
				if (a) {
					var b = a.getAttribute("ng-csp") || a.getAttribute("data-ng-csp");
					Ga.rules = {
						noUnsafeEval: !b || -1 !== b.indexOf("no-unsafe-eval"),
						noInlineStyle: !b || -1 !== b.indexOf("no-inline-style")
					}
				} else {
					a =
						Ga;
					try {
						new Function(""), b = !1
					} catch (d) {
						b = !0
					}
					a.rules = {
						noUnsafeEval: b,
						noInlineStyle: !1
					}
				}
			}
			return Ga.rules
		},
		sb = function() {
			if (u(sb.name_)) return sb.name_;
			var a, b, d = Ja.length,
				c, e;
			for (b = 0; b < d; ++b)
				if (c = Ja[b], a = w.document.querySelector("[" + c.replace(":", "\\:") + "jq]")) {
					e = a.getAttribute(c + "jq");
					break
				} return sb.name_ = e
		},
		se = /:/g,
		Ja = ["ng-", "data-ng-", "ng:", "x-ng-"],
		ve = function(a) {
			var b = a.currentScript;
			if (!b) return !0;
			if (!(b instanceof w.HTMLScriptElement || b instanceof w.SVGScriptElement)) return !1;
			b = b.attributes;
			return [b.getNamedItem("src"), b.getNamedItem("href"), b.getNamedItem("xlink:href")].every(function(b) {
				if (!b) return !0;
				if (!b.value) return !1;
				var c = a.createElement("a");
				c.href = b.value;
				if (a.location.origin === c.origin) return !0;
				switch (c.protocol) {
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
			})
		}(w.document),
		ye = /[A-Z]/g,
		Rc = !1,
		Ia = 3,
		De = {
			full: "1.6.3",
			major: 1,
			minor: 6,
			dot: 3,
			codeName: "scriptalicious-bootstrapping"
		};
	W.expando = "ng339";
	var ib = W.cache = {},
		eg = 1;
	W._data = function(a) {
		return this.cache[a[this.expando]] || {}
	};
	var ag = /-([a-z])/g,
		Ug = /^-ms-/,
		Ab = {
			mouseleave: "mouseout",
			mouseenter: "mouseover"
		},
		cc = M("jqLite"),
		dg = /^<([\w-]+)\s*\/?>(?:<\/\1>|)$/,
		bc = /<|&#?\w+;/,
		bg = /<([\w:-]+)/,
		cg = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:-]+)[^>]*)\/>/gi,
		ha = {
			option: [1, '<select multiple="multiple">', "</select>"],
			thead: [1, "<table>", "</table>"],
			col: [2, "<table><colgroup>", "</colgroup></table>"],
			tr: [2, "<table><tbody>", "</tbody></table>"],
			td: [3, "<table><tbody><tr>",
				"</tr></tbody></table>"
			],
			_default: [0, "", ""]
		};
	ha.optgroup = ha.option;
	ha.tbody = ha.tfoot = ha.colgroup = ha.caption = ha.thead;
	ha.th = ha.td;
	var jg = w.Node.prototype.contains || function(a) {
			return !!(this.compareDocumentPosition(a) & 16)
		},
		Oa = W.prototype = {
			ready: cd,
			toString: function() {
				var a = [];
				p(this, function(b) {
					a.push("" + b)
				});
				return "[" + a.join(", ") + "]"
			},
			eq: function(a) {
				return 0 <= a ? F(this[a]) : F(this[this.length + a])
			},
			length: 0,
			push: Tg,
			sort: [].sort,
			splice: [].splice
		},
		Gb = {};
	p("multiple selected checked disabled readOnly required open".split(" "),
		function(a) {
			Gb[P(a)] = a
		});
	var hd = {};
	p("input select option textarea button form details".split(" "), function(a) {
		hd[a] = !0
	});
	var pd = {
		ngMinlength: "minlength",
		ngMaxlength: "maxlength",
		ngMin: "min",
		ngMax: "max",
		ngPattern: "pattern",
		ngStep: "step"
	};
	p({
		data: fc,
		removeData: hb,
		hasData: function(a) {
			for (var b in ib[a.ng339]) return !0;
			return !1
		},
		cleanData: function(a) {
			for (var b = 0, d = a.length; b < d; b++) hb(a[b])
		}
	}, function(a, b) {
		W[b] = a
	});
	p({
		data: fc,
		inheritedData: Eb,
		scope: function(a) {
			return F.data(a, "$scope") || Eb(a.parentNode ||
				a, ["$isolateScope", "$scope"])
		},
		isolateScope: function(a) {
			return F.data(a, "$isolateScope") || F.data(a, "$isolateScopeNoTemplate")
		},
		controller: ed,
		injector: function(a) {
			return Eb(a, "$injector")
		},
		removeAttr: function(a, b) {
			a.removeAttribute(b)
		},
		hasClass: Bb,
		css: function(a, b, d) {
			b = xb(b.replace(Ug, "ms-"));
			if (u(d)) a.style[b] = d;
			else return a.style[b]
		},
		attr: function(a, b, d) {
			var c = a.nodeType;
			if (c !== Ia && 2 !== c && 8 !== c && a.getAttribute) {
				var c = P(b),
					e = Gb[c];
				if (u(d)) null === d || !1 === d && e ? a.removeAttribute(b) : a.setAttribute(b,
					e ? c : d);
				else return a = a.getAttribute(b), e && null !== a && (a = c), null === a ? void 0 : a
			}
		},
		prop: function(a, b, d) {
			if (u(d)) a[b] = d;
			else return a[b]
		},
		text: function() {
			function a(a, d) {
				if (x(d)) {
					var c = a.nodeType;
					return 1 === c || c === Ia ? a.textContent : ""
				}
				a.textContent = d
			}
			a.$dv = "";
			return a
		}(),
		val: function(a, b) {
			if (x(b)) {
				if (a.multiple && "select" === wa(a)) {
					var d = [];
					p(a.options, function(a) {
						a.selected && d.push(a.value || a.text)
					});
					return d
				}
				return a.value
			}
			a.value = b
		},
		html: function(a, b) {
			if (x(b)) return a.innerHTML;
			yb(a, !0);
			a.innerHTML = b
		},
		empty: fd
	}, function(a, b) {
		W.prototype[b] = function(b, c) {
			var e, f, g = this.length;
			if (a !== fd && x(2 === a.length && a !== Bb && a !== ed ? b : c)) {
				if (G(b)) {
					for (e = 0; e < g; e++)
						if (a === fc) a(this[e], b);
						else
							for (f in b) a(this[e], f, b[f]);
					return this
				}
				e = a.$dv;
				g = x(e) ? Math.min(g, 1) : g;
				for (f = 0; f < g; f++) {
					var h = a(this[f], b, c);
					e = e ? e + h : h
				}
				return e
			}
			for (e = 0; e < g; e++) a(this[e], b, c);
			return this
		}
	});
	p({
		removeData: hb,
		on: function(a, b, d, c) {
			if (u(c)) throw cc("onargs");
			if (ad(a)) {
				c = zb(a, !0);
				var e = c.events,
					f = c.handle;
				f || (f = c.handle = gg(a, e));
				c = 0 <= b.indexOf(" ") ?
					b.split(" ") : [b];
				for (var g = c.length, h = function(b, c, g) {
						var h = e[b];
						h || (h = e[b] = [], h.specialHandlerWrapper = c, "$destroy" === b || g || a.addEventListener(b, f));
						h.push(d)
					}; g--;) b = c[g], Ab[b] ? (h(Ab[b], ig), h(b, void 0, !0)) : h(b)
			}
		},
		off: dd,
		one: function(a, b, d) {
			a = F(a);
			a.on(b, function e() {
				a.off(b, d);
				a.off(b, e)
			});
			a.on(b, d)
		},
		replaceWith: function(a, b) {
			var d, c = a.parentNode;
			yb(a);
			p(new W(b), function(b) {
				d ? c.insertBefore(b, d.nextSibling) : c.replaceChild(b, a);
				d = b
			})
		},
		children: function(a) {
			var b = [];
			p(a.childNodes, function(a) {
				1 ===
					a.nodeType && b.push(a)
			});
			return b
		},
		contents: function(a) {
			return a.contentDocument || a.childNodes || []
		},
		append: function(a, b) {
			var d = a.nodeType;
			if (1 === d || 11 === d) {
				b = new W(b);
				for (var d = 0, c = b.length; d < c; d++) a.appendChild(b[d])
			}
		},
		prepend: function(a, b) {
			if (1 === a.nodeType) {
				var d = a.firstChild;
				p(new W(b), function(b) {
					a.insertBefore(b, d)
				})
			}
		},
		wrap: function(a, b) {
			var d = F(b).eq(0).clone()[0],
				c = a.parentNode;
			c && c.replaceChild(d, a);
			d.appendChild(a)
		},
		remove: Fb,
		detach: function(a) {
			Fb(a, !0)
		},
		after: function(a, b) {
			var d = a,
				c = a.parentNode;
			if (c) {
				b = new W(b);
				for (var e = 0, f = b.length; e < f; e++) {
					var g = b[e];
					c.insertBefore(g, d.nextSibling);
					d = g
				}
			}
		},
		addClass: Db,
		removeClass: Cb,
		toggleClass: function(a, b, d) {
			b && p(b.split(" "), function(b) {
				var e = d;
				x(e) && (e = !Bb(a, b));
				(e ? Db : Cb)(a, b)
			})
		},
		parent: function(a) {
			return (a = a.parentNode) && 11 !== a.nodeType ? a : null
		},
		next: function(a) {
			return a.nextElementSibling
		},
		find: function(a, b) {
			return a.getElementsByTagName ? a.getElementsByTagName(b) : []
		},
		clone: ec,
		triggerHandler: function(a, b, d) {
			var c, e, f = b.type || b,
				g = zb(a);
			if (g = (g = g && g.events) &&
				g[f]) c = {
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
				stopPropagation: A,
				type: f,
				target: a
			}, b.type && (c = R(c, b)), b = qa(g), e = d ? [c].concat(d) : [c], p(b, function(b) {
				c.isImmediatePropagationStopped() || b.apply(a, e)
			})
		}
	}, function(a, b) {
		W.prototype[b] = function(b, c, e) {
			for (var f, g = 0, h = this.length; g <
				h; g++) x(f) ? (f = a(this[g], b, c, e), u(f) && (f = F(f))) : dc(f, a(this[g], b, c, e));
			return u(f) ? f : this
		}
	});
	W.prototype.bind = W.prototype.on;
	W.prototype.unbind = W.prototype.off;
	var Vg = Object.create(null);
	id.prototype = {
		_idx: function(a) {
			if (a === this._lastKey) return this._lastIndex;
			this._lastKey = a;
			return this._lastIndex = this._keys.indexOf(a)
		},
		_transformKey: function(a) {
			return da(a) ? Vg : a
		},
		get: function(a) {
			a = this._transformKey(a);
			a = this._idx(a);
			if (-1 !== a) return this._values[a]
		},
		set: function(a, b) {
			a = this._transformKey(a);
			var d =
				this._idx(a); - 1 === d && (d = this._lastIndex = this._keys.length);
			this._keys[d] = a;
			this._values[d] = b
		},
		delete: function(a) {
			a = this._transformKey(a);
			a = this._idx(a);
			if (-1 === a) return !1;
			this._keys.splice(a, 1);
			this._values.splice(a, 1);
			this._lastKey = NaN;
			this._lastIndex = -1;
			return !0
		}
	};
	var Hb = id,
		Zf = [function() {
			this.$get = [function() {
				return Hb
			}]
		}],
		lg = /^([^(]+?)=>/,
		mg = /^[^(]*\(\s*([^)]*)\)/m,
		Wg = /,/,
		Xg = /^\s*(_?)(\S+?)\1\s*$/,
		kg = /((\/\/.*$)|(\/\*[\s\S]*?\*\/))/mg,
		ya = M("$injector");
	eb.$$annotate = function(a, b, d) {
		var c;
		if ("function" ===
			typeof a) {
			if (!(c = a.$inject)) {
				c = [];
				if (a.length) {
					if (b) throw D(d) && d || (d = a.name || ng(a)), ya("strictdi", d);
					b = jd(a);
					p(b[1].split(Wg), function(a) {
						a.replace(Xg, function(a, b, d) {
							c.push(d)
						})
					})
				}
				a.$inject = c
			}
		} else H(a) ? (b = a.length - 1, tb(a[b], "fn"), c = a.slice(0, b)) : tb(a, "fn", !0);
		return c
	};
	var fe = M("$animate"),
		qf = function() {
			this.$get = A
		},
		rf = function() {
			var a = new Hb,
				b = [];
			this.$get = ["$$AnimateRunner", "$rootScope", function(d, c) {
				function e(a, b, c) {
					var d = !1;
					b && (b = D(b) ? b.split(" ") : H(b) ? b : [], p(b, function(b) {
						b && (d = !0, a[b] = c)
					}));
					return d
				}

				function f() {
					p(b, function(b) {
						var c = a.get(b);
						if (c) {
							var d = og(b.attr("class")),
								e = "",
								f = "";
							p(c, function(a, b) {
								a !== !!d[b] && (a ? e += (e.length ? " " : "") + b : f += (f.length ? " " : "") + b)
							});
							p(b, function(a) {
								e && Db(a, e);
								f && Cb(a, f)
							});
							a.delete(b)
						}
					});
					b.length = 0
				}
				return {
					enabled: A,
					on: A,
					off: A,
					pin: A,
					push: function(g, h, k, l) {
						l && l();
						k = k || {};
						k.from && g.css(k.from);
						k.to && g.css(k.to);
						if (k.addClass || k.removeClass)
							if (h = k.addClass, l = k.removeClass, k = a.get(g) || {}, h = e(k, h, !0), l = e(k, l, !1), h || l) a.set(g, k), b.push(g), 1 === b.length && c.$$postDigest(f);
						g = new d;
						g.complete();
						return g
					}
				}
			}]
		},
		of = ["$provide", function(a) {
			var b = this,
				d = null;
			this.$$registeredAnimations = Object.create(null);
			this.register = function(c, d) {
				if (c && "." !== c.charAt(0)) throw fe("notcsel", c);
				var f = c + "-animation";
				b.$$registeredAnimations[c.substr(1)] = f;
				a.factory(f, d)
			};
			this.classNameFilter = function(a) {
				if (1 === arguments.length && (d = a instanceof RegExp ? a : null) && /[(\s|\/)]ng-animate[(\s|\/)]/.test(d.toString())) throw d = null, fe("nongcls", "ng-animate");
				return d
			};
			this.$get = ["$$animateQueue", function(a) {
				function b(a,
					c, d) {
					if (d) {
						var e;
						a: {
							for (e = 0; e < d.length; e++) {
								var l = d[e];
								if (1 === l.nodeType) {
									e = l;
									break a
								}
							}
							e = void 0
						}!e || e.parentNode || e.previousElementSibling || (d = null)
					}
					d ? d.after(a) : c.prepend(a)
				}
				return {
					on: a.on,
					off: a.off,
					pin: a.pin,
					enabled: a.enabled,
					cancel: function(a) {
						a.end && a.end()
					},
					enter: function(d, g, h, k) {
						g = g && F(g);
						h = h && F(h);
						g = g || h.parent();
						b(d, g, h);
						return a.push(d, "enter", ia(k))
					},
					move: function(d, g, h, k) {
						g = g && F(g);
						h = h && F(h);
						g = g || h.parent();
						b(d, g, h);
						return a.push(d, "move", ia(k))
					},
					leave: function(b, d) {
						return a.push(b, "leave",
							ia(d),
							function() {
								b.remove()
							})
					},
					addClass: function(b, d, e) {
						e = ia(e);
						e.addClass = jb(e.addclass, d);
						return a.push(b, "addClass", e)
					},
					removeClass: function(b, d, e) {
						e = ia(e);
						e.removeClass = jb(e.removeClass, d);
						return a.push(b, "removeClass", e)
					},
					setClass: function(b, d, e, k) {
						k = ia(k);
						k.addClass = jb(k.addClass, d);
						k.removeClass = jb(k.removeClass, e);
						return a.push(b, "setClass", k)
					},
					animate: function(b, d, e, k, l) {
						l = ia(l);
						l.from = l.from ? R(l.from, d) : d;
						l.to = l.to ? R(l.to, e) : e;
						l.tempClasses = jb(l.tempClasses, k || "ng-inline-animate");
						return a.push(b,
							"animate", l)
					}
				}
			}]
		}],
		tf = function() {
			this.$get = ["$$rAF", function(a) {
				function b(b) {
					d.push(b);
					1 < d.length || a(function() {
						for (var a = 0; a < d.length; a++) d[a]();
						d = []
					})
				}
				var d = [];
				return function() {
					var a = !1;
					b(function() {
						a = !0
					});
					return function(d) {
						a ? d() : b(d)
					}
				}
			}]
		},
		sf = function() {
			this.$get = ["$q", "$sniffer", "$$animateAsyncRun", "$$isDocumentHidden", "$timeout", function(a, b, d, c, e) {
				function f(a) {
					this.setHost(a);
					var b = d();
					this._doneCallbacks = [];
					this._tick = function(a) {
						c() ? e(a, 0, !1) : b(a)
					};
					this._state = 0
				}
				f.chain = function(a, b) {
					function c() {
						if (d ===
							a.length) b(!0);
						else a[d](function(a) {
							!1 === a ? b(!1) : (d++, c())
						})
					}
					var d = 0;
					c()
				};
				f.all = function(a, b) {
					function c(f) {
						e = e && f;
						++d === a.length && b(e)
					}
					var d = 0,
						e = !0;
					p(a, function(a) {
						a.done(c)
					})
				};
				f.prototype = {
					setHost: function(a) {
						this.host = a || {}
					},
					done: function(a) {
						2 === this._state ? a() : this._doneCallbacks.push(a)
					},
					progress: A,
					getPromise: function() {
						if (!this.promise) {
							var b = this;
							this.promise = a(function(a, c) {
								b.done(function(b) {
									!1 === b ? c() : a()
								})
							})
						}
						return this.promise
					},
					then: function(a, b) {
						return this.getPromise().then(a, b)
					},
					"catch": function(a) {
						return this.getPromise()["catch"](a)
					},
					"finally": function(a) {
						return this.getPromise()["finally"](a)
					},
					pause: function() {
						this.host.pause && this.host.pause()
					},
					resume: function() {
						this.host.resume && this.host.resume()
					},
					end: function() {
						this.host.end && this.host.end();
						this._resolve(!0)
					},
					cancel: function() {
						this.host.cancel && this.host.cancel();
						this._resolve(!1)
					},
					complete: function(a) {
						var b = this;
						0 === b._state && (b._state = 1, b._tick(function() {
							b._resolve(a)
						}))
					},
					_resolve: function(a) {
						2 !== this._state && (p(this._doneCallbacks, function(b) {
								b(a)
							}), this._doneCallbacks.length =
							0, this._state = 2)
					}
				};
				return f
			}]
		},
		pf = function() {
			this.$get = ["$$rAF", "$q", "$$AnimateRunner", function(a, b, d) {
				return function(b, e) {
					function f() {
						a(function() {
							g.addClass && (b.addClass(g.addClass), g.addClass = null);
							g.removeClass && (b.removeClass(g.removeClass), g.removeClass = null);
							g.to && (b.css(g.to), g.to = null);
							h || k.complete();
							h = !0
						});
						return k
					}
					var g = e || {};
					g.$$prepared || (g = sa(g));
					g.cleanupStyles && (g.from = g.to = null);
					g.from && (b.css(g.from), g.from = null);
					var h, k = new d;
					return {
						start: f,
						end: f
					}
				}
			}]
		},
		fa = M("$compile"),
		jc = new function() {};
	Tc.$inject = ["$provide", "$$sanitizeUriProvider"];
	Jb.prototype.isFirstChange = function() {
		return this.previousValue === jc
	};
	var kd = /^((?:x|data)[:\-_])/i,
		rg = /[:\-_]+(.)/g,
		rd = M("$controller"),
		qd = /^(\S+)(\s+as\s+([\w$]+))?$/,
		Af = function() {
			this.$get = ["$document", function(a) {
				return function(b) {
					b ? !b.nodeType && b instanceof F && (b = b[0]) : b = a[0].body;
					return b.offsetWidth + 1
				}
			}]
		},
		sd = "application/json",
		mc = {
			"Content-Type": sd + ";charset=utf-8"
		},
		ug = /^\[|^\{(?!\{)/,
		vg = {
			"[": /]$/,
			"{": /}$/
		},
		tg = /^\)]\}',?\n/,
		xd = M("$http"),
		Da =
		ea.$interpolateMinErr = M("$interpolate");
	Da.throwNoconcat = function(a) {
		throw Da("noconcat", a);
	};
	Da.interr = function(a, b) {
		return Da("interr", a, b.toString())
	};
	var If = function() {
			this.$get = function() {
				function a(a) {
					var b = function(a) {
						b.data = a;
						b.called = !0
					};
					b.id = a;
					return b
				}
				var b = ea.callbacks,
					d = {};
				return {
					createCallback: function(c) {
						c = "_" + (b.$$counter++).toString(36);
						var e = "angular.callbacks." + c,
							f = a(c);
						d[e] = b[c] = f;
						return e
					},
					wasCalled: function(a) {
						return d[a].called
					},
					getResponse: function(a) {
						return d[a].data
					},
					removeCallback: function(a) {
						delete b[d[a].id];
						delete d[a]
					}
				}
			}
		},
		Yg = /^([^?#]*)(\?([^#]*))?(#(.*))?$/,
		xg = {
			http: 80,
			https: 443,
			ftp: 21
		},
		lb = M("$location"),
		yg = /^\s*[\\/]{2,}/,
		Zg = {
			$$absUrl: "",
			$$html5: !1,
			$$replace: !1,
			absUrl: Kb("$$absUrl"),
			url: function(a) {
				if (x(a)) return this.$$url;
				var b = Yg.exec(a);
				(b[1] || "" === a) && this.path(decodeURIComponent(b[1]));
				(b[2] || b[1] || "" === a) && this.search(b[3] || "");
				this.hash(b[5] || "");
				return this
			},
			protocol: Kb("$$protocol"),
			host: Kb("$$host"),
			port: Kb("$$port"),
			path: Bd("$$path", function(a) {
				a = null !== a ? a.toString() : "";
				return "/" === a.charAt(0) ?
					a : "/" + a
			}),
			search: function(a, b) {
				switch (arguments.length) {
					case 0:
						return this.$$search;
					case 1:
						if (D(a) || ba(a)) a = a.toString(), this.$$search = Oc(a);
						else if (G(a)) a = sa(a, {}), p(a, function(b, c) {
							null == b && delete a[c]
						}), this.$$search = a;
						else throw lb("isrcharg");
						break;
					default:
						x(b) || null === b ? delete this.$$search[a] : this.$$search[a] = b
				}
				this.$$compose();
				return this
			},
			hash: Bd("$$hash", function(a) {
				return null !== a ? a.toString() : ""
			}),
			replace: function() {
				this.$$replace = !0;
				return this
			}
		};
	p([Ad, qc, pc], function(a) {
		a.prototype =
			Object.create(Zg);
		a.prototype.state = function(b) {
			if (!arguments.length) return this.$$state;
			if (a !== pc || !this.$$html5) throw lb("nostate");
			this.$$state = x(b) ? null : b;
			this.$$urlUpdatedByLocation = !0;
			return this
		}
	});
	var Ua = M("$parse"),
		Bg = {}.constructor.prototype.valueOf,
		Rb = V();
	p("+ - * / % === !== == != < > <= >= && || ! = |".split(" "), function(a) {
		Rb[a] = !0
	});
	var $g = {
			n: "\n",
			f: "\f",
			r: "\r",
			t: "\t",
			v: "\v",
			"'": "'",
			'"': '"'
		},
		sc = function(a) {
			this.options = a
		};
	sc.prototype = {
		constructor: sc,
		lex: function(a) {
			this.text = a;
			this.index =
				0;
			for (this.tokens = []; this.index < this.text.length;)
				if (a = this.text.charAt(this.index), '"' === a || "'" === a) this.readString(a);
				else if (this.isNumber(a) || "." === a && this.isNumber(this.peek())) this.readNumber();
			else if (this.isIdentifierStart(this.peekMultichar())) this.readIdent();
			else if (this.is(a, "(){}[].,;:?")) this.tokens.push({
				index: this.index,
				text: a
			}), this.index++;
			else if (this.isWhitespace(a)) this.index++;
			else {
				var b = a + this.peek(),
					d = b + this.peek(2),
					c = Rb[b],
					e = Rb[d];
				Rb[a] || c || e ? (a = e ? d : c ? b : a, this.tokens.push({
					index: this.index,
					text: a,
					operator: !0
				}), this.index += a.length) : this.throwError("Unexpected next character ", this.index, this.index + 1)
			}
			return this.tokens
		},
		is: function(a, b) {
			return -1 !== b.indexOf(a)
		},
		peek: function(a) {
			a = a || 1;
			return this.index + a < this.text.length ? this.text.charAt(this.index + a) : !1
		},
		isNumber: function(a) {
			return "0" <= a && "9" >= a && "string" === typeof a
		},
		isWhitespace: function(a) {
			return " " === a || "\r" === a || "\t" === a || "\n" === a || "\v" === a || "\u00a0" === a
		},
		isIdentifierStart: function(a) {
			return this.options.isIdentifierStart ? this.options.isIdentifierStart(a,
				this.codePointAt(a)) : this.isValidIdentifierStart(a)
		},
		isValidIdentifierStart: function(a) {
			return "a" <= a && "z" >= a || "A" <= a && "Z" >= a || "_" === a || "$" === a
		},
		isIdentifierContinue: function(a) {
			return this.options.isIdentifierContinue ? this.options.isIdentifierContinue(a, this.codePointAt(a)) : this.isValidIdentifierContinue(a)
		},
		isValidIdentifierContinue: function(a, b) {
			return this.isValidIdentifierStart(a, b) || this.isNumber(a)
		},
		codePointAt: function(a) {
			return 1 === a.length ? a.charCodeAt(0) : (a.charCodeAt(0) << 10) + a.charCodeAt(1) -
				56613888
		},
		peekMultichar: function() {
			var a = this.text.charAt(this.index),
				b = this.peek();
			if (!b) return a;
			var d = a.charCodeAt(0),
				c = b.charCodeAt(0);
			return 55296 <= d && 56319 >= d && 56320 <= c && 57343 >= c ? a + b : a
		},
		isExpOperator: function(a) {
			return "-" === a || "+" === a || this.isNumber(a)
		},
		throwError: function(a, b, d) {
			d = d || this.index;
			b = u(b) ? "s " + b + "-" + this.index + " [" + this.text.substring(b, d) + "]" : " " + d;
			throw Ua("lexerr", a, b, this.text);
		},
		readNumber: function() {
			for (var a = "", b = this.index; this.index < this.text.length;) {
				var d = P(this.text.charAt(this.index));
				if ("." === d || this.isNumber(d)) a += d;
				else {
					var c = this.peek();
					if ("e" === d && this.isExpOperator(c)) a += d;
					else if (this.isExpOperator(d) && c && this.isNumber(c) && "e" === a.charAt(a.length - 1)) a += d;
					else if (!this.isExpOperator(d) || c && this.isNumber(c) || "e" !== a.charAt(a.length - 1)) break;
					else this.throwError("Invalid exponent")
				}
				this.index++
			}
			this.tokens.push({
				index: b,
				text: a,
				constant: !0,
				value: Number(a)
			})
		},
		readIdent: function() {
			var a = this.index;
			for (this.index += this.peekMultichar().length; this.index < this.text.length;) {
				var b =
					this.peekMultichar();
				if (!this.isIdentifierContinue(b)) break;
				this.index += b.length
			}
			this.tokens.push({
				index: a,
				text: this.text.slice(a, this.index),
				identifier: !0
			})
		},
		readString: function(a) {
			var b = this.index;
			this.index++;
			for (var d = "", c = a, e = !1; this.index < this.text.length;) {
				var f = this.text.charAt(this.index),
					c = c + f;
				if (e) "u" === f ? (e = this.text.substring(this.index + 1, this.index + 5), e.match(/[\da-f]{4}/i) || this.throwError("Invalid unicode escape [\\u" + e + "]"), this.index += 4, d += String.fromCharCode(parseInt(e, 16))) : d +=
					$g[f] || f, e = !1;
				else if ("\\" === f) e = !0;
				else {
					if (f === a) {
						this.index++;
						this.tokens.push({
							index: b,
							text: c,
							constant: !0,
							value: d
						});
						return
					}
					d += f
				}
				this.index++
			}
			this.throwError("Unterminated quote", b)
		}
	};
	var s = function(a, b) {
		this.lexer = a;
		this.options = b
	};
	s.Program = "Program";
	s.ExpressionStatement = "ExpressionStatement";
	s.AssignmentExpression = "AssignmentExpression";
	s.ConditionalExpression = "ConditionalExpression";
	s.LogicalExpression = "LogicalExpression";
	s.BinaryExpression = "BinaryExpression";
	s.UnaryExpression = "UnaryExpression";
	s.CallExpression = "CallExpression";
	s.MemberExpression = "MemberExpression";
	s.Identifier = "Identifier";
	s.Literal = "Literal";
	s.ArrayExpression = "ArrayExpression";
	s.Property = "Property";
	s.ObjectExpression = "ObjectExpression";
	s.ThisExpression = "ThisExpression";
	s.LocalsExpression = "LocalsExpression";
	s.NGValueParameter = "NGValueParameter";
	s.prototype = {
		ast: function(a) {
			this.text = a;
			this.tokens = this.lexer.lex(a);
			a = this.program();
			0 !== this.tokens.length && this.throwError("is an unexpected token", this.tokens[0]);
			return a
		},
		program: function() {
			for (var a = [];;)
				if (0 < this.tokens.length && !this.peek("}", ")", ";", "]") && a.push(this.expressionStatement()), !this.expect(";")) return {
					type: s.Program,
					body: a
				}
		},
		expressionStatement: function() {
			return {
				type: s.ExpressionStatement,
				expression: this.filterChain()
			}
		},
		filterChain: function() {
			for (var a = this.expression(); this.expect("|");) a = this.filter(a);
			return a
		},
		expression: function() {
			return this.assignment()
		},
		assignment: function() {
			var a = this.ternary();
			if (this.expect("=")) {
				if (!Ed(a)) throw Ua("lval");
				a = {
					type: s.AssignmentExpression,
					left: a,
					right: this.assignment(),
					operator: "="
				}
			}
			return a
		},
		ternary: function() {
			var a = this.logicalOR(),
				b, d;
			return this.expect("?") && (b = this.expression(), this.consume(":")) ? (d = this.expression(), {
				type: s.ConditionalExpression,
				test: a,
				alternate: b,
				consequent: d
			}) : a
		},
		logicalOR: function() {
			for (var a = this.logicalAND(); this.expect("||");) a = {
				type: s.LogicalExpression,
				operator: "||",
				left: a,
				right: this.logicalAND()
			};
			return a
		},
		logicalAND: function() {
			for (var a = this.equality(); this.expect("&&");) a = {
				type: s.LogicalExpression,
				operator: "&&",
				left: a,
				right: this.equality()
			};
			return a
		},
		equality: function() {
			for (var a = this.relational(), b; b = this.expect("==", "!=", "===", "!==");) a = {
				type: s.BinaryExpression,
				operator: b.text,
				left: a,
				right: this.relational()
			};
			return a
		},
		relational: function() {
			for (var a = this.additive(), b; b = this.expect("<", ">", "<=", ">=");) a = {
				type: s.BinaryExpression,
				operator: b.text,
				left: a,
				right: this.additive()
			};
			return a
		},
		additive: function() {
			for (var a = this.multiplicative(), b; b = this.expect("+", "-");) a = {
				type: s.BinaryExpression,
				operator: b.text,
				left: a,
				right: this.multiplicative()
			};
			return a
		},
		multiplicative: function() {
			for (var a = this.unary(), b; b = this.expect("*", "/", "%");) a = {
				type: s.BinaryExpression,
				operator: b.text,
				left: a,
				right: this.unary()
			};
			return a
		},
		unary: function() {
			var a;
			return (a = this.expect("+", "-", "!")) ? {
				type: s.UnaryExpression,
				operator: a.text,
				prefix: !0,
				argument: this.unary()
			} : this.primary()
		},
		primary: function() {
			var a;
			this.expect("(") ? (a = this.filterChain(), this.consume(")")) : this.expect("[") ? a = this.arrayDeclaration() : this.expect("{") ?
				a = this.object() : this.selfReferential.hasOwnProperty(this.peek().text) ? a = sa(this.selfReferential[this.consume().text]) : this.options.literals.hasOwnProperty(this.peek().text) ? a = {
					type: s.Literal,
					value: this.options.literals[this.consume().text]
				} : this.peek().identifier ? a = this.identifier() : this.peek().constant ? a = this.constant() : this.throwError("not a primary expression", this.peek());
			for (var b; b = this.expect("(", "[", ".");) "(" === b.text ? (a = {
					type: s.CallExpression,
					callee: a,
					arguments: this.parseArguments()
				}, this.consume(")")) :
				"[" === b.text ? (a = {
					type: s.MemberExpression,
					object: a,
					property: this.expression(),
					computed: !0
				}, this.consume("]")) : "." === b.text ? a = {
					type: s.MemberExpression,
					object: a,
					property: this.identifier(),
					computed: !1
				} : this.throwError("IMPOSSIBLE");
			return a
		},
		filter: function(a) {
			a = [a];
			for (var b = {
					type: s.CallExpression,
					callee: this.identifier(),
					arguments: a,
					filter: !0
				}; this.expect(":");) a.push(this.expression());
			return b
		},
		parseArguments: function() {
			var a = [];
			if (")" !== this.peekToken().text) {
				do a.push(this.filterChain()); while (this.expect(","))
			}
			return a
		},
		identifier: function() {
			var a = this.consume();
			a.identifier || this.throwError("is not a valid identifier", a);
			return {
				type: s.Identifier,
				name: a.text
			}
		},
		constant: function() {
			return {
				type: s.Literal,
				value: this.consume().value
			}
		},
		arrayDeclaration: function() {
			var a = [];
			if ("]" !== this.peekToken().text) {
				do {
					if (this.peek("]")) break;
					a.push(this.expression())
				} while (this.expect(","))
			}
			this.consume("]");
			return {
				type: s.ArrayExpression,
				elements: a
			}
		},
		object: function() {
			var a = [],
				b;
			if ("}" !== this.peekToken().text) {
				do {
					if (this.peek("}")) break;
					b = {
						type: s.Property,
						kind: "init"
					};
					this.peek().constant ? (b.key = this.constant(), b.computed = !1, this.consume(":"), b.value = this.expression()) : this.peek().identifier ? (b.key = this.identifier(), b.computed = !1, this.peek(":") ? (this.consume(":"), b.value = this.expression()) : b.value = b.key) : this.peek("[") ? (this.consume("["), b.key = this.expression(), this.consume("]"), b.computed = !0, this.consume(":"), b.value = this.expression()) : this.throwError("invalid key", this.peek());
					a.push(b)
				} while (this.expect(","))
			}
			this.consume("}");
			return {
				type: s.ObjectExpression,
				properties: a
			}
		},
		throwError: function(a, b) {
			throw Ua("syntax", b.text, a, b.index + 1, this.text, this.text.substring(b.index));
		},
		consume: function(a) {
			if (0 === this.tokens.length) throw Ua("ueoe", this.text);
			var b = this.expect(a);
			b || this.throwError("is unexpected, expecting [" + a + "]", this.peek());
			return b
		},
		peekToken: function() {
			if (0 === this.tokens.length) throw Ua("ueoe", this.text);
			return this.tokens[0]
		},
		peek: function(a, b, d, c) {
			return this.peekAhead(0, a, b, d, c)
		},
		peekAhead: function(a, b, d, c,
			e) {
			if (this.tokens.length > a) {
				a = this.tokens[a];
				var f = a.text;
				if (f === b || f === d || f === c || f === e || !(b || d || c || e)) return a
			}
			return !1
		},
		expect: function(a, b, d, c) {
			return (a = this.peek(a, b, d, c)) ? (this.tokens.shift(), a) : !1
		},
		selfReferential: {
			"this": {
				type: s.ThisExpression
			},
			$locals: {
				type: s.LocalsExpression
			}
		}
	};
	Hd.prototype = {
		compile: function(a) {
			var b = this;
			a = this.astBuilder.ast(a);
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
			};
			U(a, b.$filter);
			var d = "",
				c;
			this.stage = "assign";
			if (c = Fd(a)) this.state.computing = "assign", d = this.nextId(), this.recurse(c, d), this.return_(d), d = "fn.assign=" + this.generateFunction("assign", "s,v,l");
			c = Dd(a.body);
			b.stage = "inputs";
			p(c, function(a, c) {
				var d = "fn" + c;
				b.state[d] = {
					vars: [],
					body: [],
					own: {}
				};
				b.state.computing = d;
				var h = b.nextId();
				b.recurse(a, h);
				b.return_(h);
				b.state.inputs.push(d);
				a.watchId = c
			});
			this.state.computing = "fn";
			this.stage = "main";
			this.recurse(a);
			d = '"' + this.USE + " " + this.STRICT + '";\n' + this.filterPrefix() + "var fn=" + this.generateFunction("fn", "s,l,a,i") +
				d + this.watchFns() + "return fn;";
			d = (new Function("$filter", "getStringValue", "ifDefined", "plus", d))(this.$filter, zg, Ag, Cd);
			this.state = this.stage = void 0;
			d.literal = Gd(a);
			d.constant = a.constant;
			return d
		},
		USE: "use",
		STRICT: "strict",
		watchFns: function() {
			var a = [],
				b = this.state.inputs,
				d = this;
			p(b, function(b) {
				a.push("var " + b + "=" + d.generateFunction(b, "s"))
			});
			b.length && a.push("fn.inputs=[" + b.join(",") + "];");
			return a.join("")
		},
		generateFunction: function(a, b) {
			return "function(" + b + "){" + this.varsPrefix(a) + this.body(a) + "};"
		},
		filterPrefix: function() {
			var a = [],
				b = this;
			p(this.state.filters, function(d, c) {
				a.push(d + "=$filter(" + b.escape(c) + ")")
			});
			return a.length ? "var " + a.join(",") + ";" : ""
		},
		varsPrefix: function(a) {
			return this.state[a].vars.length ? "var " + this.state[a].vars.join(",") + ";" : ""
		},
		body: function(a) {
			return this.state[a].body.join("")
		},
		recurse: function(a, b, d, c, e, f) {
			var g, h, k = this,
				l, m, n;
			c = c || A;
			if (!f && u(a.watchId)) b = b || this.nextId(), this.if_("i", this.lazyAssign(b, this.computedMember("i", a.watchId)), this.lazyRecurse(a, b, d, c, e,
				!0));
			else switch (a.type) {
				case s.Program:
					p(a.body, function(b, c) {
						k.recurse(b.expression, void 0, void 0, function(a) {
							h = a
						});
						c !== a.body.length - 1 ? k.current().body.push(h, ";") : k.return_(h)
					});
					break;
				case s.Literal:
					m = this.escape(a.value);
					this.assign(b, m);
					c(b || m);
					break;
				case s.UnaryExpression:
					this.recurse(a.argument, void 0, void 0, function(a) {
						h = a
					});
					m = a.operator + "(" + this.ifDefined(h, 0) + ")";
					this.assign(b, m);
					c(m);
					break;
				case s.BinaryExpression:
					this.recurse(a.left, void 0, void 0, function(a) {
						g = a
					});
					this.recurse(a.right,
						void 0, void 0,
						function(a) {
							h = a
						});
					m = "+" === a.operator ? this.plus(g, h) : "-" === a.operator ? this.ifDefined(g, 0) + a.operator + this.ifDefined(h, 0) : "(" + g + ")" + a.operator + "(" + h + ")";
					this.assign(b, m);
					c(m);
					break;
				case s.LogicalExpression:
					b = b || this.nextId();
					k.recurse(a.left, b);
					k.if_("&&" === a.operator ? b : k.not(b), k.lazyRecurse(a.right, b));
					c(b);
					break;
				case s.ConditionalExpression:
					b = b || this.nextId();
					k.recurse(a.test, b);
					k.if_(b, k.lazyRecurse(a.alternate, b), k.lazyRecurse(a.consequent, b));
					c(b);
					break;
				case s.Identifier:
					b = b || this.nextId();
					d && (d.context = "inputs" === k.stage ? "s" : this.assign(this.nextId(), this.getHasOwnProperty("l", a.name) + "?l:s"), d.computed = !1, d.name = a.name);
					k.if_("inputs" === k.stage || k.not(k.getHasOwnProperty("l", a.name)), function() {
						k.if_("inputs" === k.stage || "s", function() {
							e && 1 !== e && k.if_(k.isNull(k.nonComputedMember("s", a.name)), k.lazyAssign(k.nonComputedMember("s", a.name), "{}"));
							k.assign(b, k.nonComputedMember("s", a.name))
						})
					}, b && k.lazyAssign(b, k.nonComputedMember("l", a.name)));
					c(b);
					break;
				case s.MemberExpression:
					g = d &&
						(d.context = this.nextId()) || this.nextId();
					b = b || this.nextId();
					k.recurse(a.object, g, void 0, function() {
						k.if_(k.notNull(g), function() {
							a.computed ? (h = k.nextId(), k.recurse(a.property, h), k.getStringValue(h), e && 1 !== e && k.if_(k.not(k.computedMember(g, h)), k.lazyAssign(k.computedMember(g, h), "{}")), m = k.computedMember(g, h), k.assign(b, m), d && (d.computed = !0, d.name = h)) : (e && 1 !== e && k.if_(k.isNull(k.nonComputedMember(g, a.property.name)), k.lazyAssign(k.nonComputedMember(g, a.property.name), "{}")), m = k.nonComputedMember(g,
								a.property.name), k.assign(b, m), d && (d.computed = !1, d.name = a.property.name))
						}, function() {
							k.assign(b, "undefined")
						});
						c(b)
					}, !!e);
					break;
				case s.CallExpression:
					b = b || this.nextId();
					a.filter ? (h = k.filter(a.callee.name), l = [], p(a.arguments, function(a) {
						var b = k.nextId();
						k.recurse(a, b);
						l.push(b)
					}), m = h + "(" + l.join(",") + ")", k.assign(b, m), c(b)) : (h = k.nextId(), g = {}, l = [], k.recurse(a.callee, h, g, function() {
						k.if_(k.notNull(h), function() {
							p(a.arguments, function(b) {
								k.recurse(b, a.constant ? void 0 : k.nextId(), void 0, function(a) {
									l.push(a)
								})
							});
							m = g.name ? k.member(g.context, g.name, g.computed) + "(" + l.join(",") + ")" : h + "(" + l.join(",") + ")";
							k.assign(b, m)
						}, function() {
							k.assign(b, "undefined")
						});
						c(b)
					}));
					break;
				case s.AssignmentExpression:
					h = this.nextId();
					g = {};
					this.recurse(a.left, void 0, g, function() {
						k.if_(k.notNull(g.context), function() {
							k.recurse(a.right, h);
							m = k.member(g.context, g.name, g.computed) + a.operator + h;
							k.assign(b, m);
							c(b || m)
						})
					}, 1);
					break;
				case s.ArrayExpression:
					l = [];
					p(a.elements, function(b) {
						k.recurse(b, a.constant ? void 0 : k.nextId(), void 0, function(a) {
							l.push(a)
						})
					});
					m = "[" + l.join(",") + "]";
					this.assign(b, m);
					c(b || m);
					break;
				case s.ObjectExpression:
					l = [];
					n = !1;
					p(a.properties, function(a) {
						a.computed && (n = !0)
					});
					n ? (b = b || this.nextId(), this.assign(b, "{}"), p(a.properties, function(a) {
						a.computed ? (g = k.nextId(), k.recurse(a.key, g)) : g = a.key.type === s.Identifier ? a.key.name : "" + a.key.value;
						h = k.nextId();
						k.recurse(a.value, h);
						k.assign(k.member(b, g, a.computed), h)
					})) : (p(a.properties, function(b) {
						k.recurse(b.value, a.constant ? void 0 : k.nextId(), void 0, function(a) {
							l.push(k.escape(b.key.type === s.Identifier ?
								b.key.name : "" + b.key.value) + ":" + a)
						})
					}), m = "{" + l.join(",") + "}", this.assign(b, m));
					c(b || m);
					break;
				case s.ThisExpression:
					this.assign(b, "s");
					c(b || "s");
					break;
				case s.LocalsExpression:
					this.assign(b, "l");
					c(b || "l");
					break;
				case s.NGValueParameter:
					this.assign(b, "v"), c(b || "v")
			}
		},
		getHasOwnProperty: function(a, b) {
			var d = a + "." + b,
				c = this.current().own;
			c.hasOwnProperty(d) || (c[d] = this.nextId(!1, a + "&&(" + this.escape(b) + " in " + a + ")"));
			return c[d]
		},
		assign: function(a, b) {
			if (a) return this.current().body.push(a, "=", b, ";"), a
		},
		filter: function(a) {
			this.state.filters.hasOwnProperty(a) ||
				(this.state.filters[a] = this.nextId(!0));
			return this.state.filters[a]
		},
		ifDefined: function(a, b) {
			return "ifDefined(" + a + "," + this.escape(b) + ")"
		},
		plus: function(a, b) {
			return "plus(" + a + "," + b + ")"
		},
		return_: function(a) {
			this.current().body.push("return ", a, ";")
		},
		if_: function(a, b, d) {
			if (!0 === a) b();
			else {
				var c = this.current().body;
				c.push("if(", a, "){");
				b();
				c.push("}");
				d && (c.push("else{"), d(), c.push("}"))
			}
		},
		not: function(a) {
			return "!(" + a + ")"
		},
		isNull: function(a) {
			return a + "==null"
		},
		notNull: function(a) {
			return a + "!=null"
		},
		nonComputedMember: function(a,
			b) {
			var d = /[^$_a-zA-Z0-9]/g;
			return /^[$_a-zA-Z][$_a-zA-Z0-9]*$/.test(b) ? a + "." + b : a + '["' + b.replace(d, this.stringEscapeFn) + '"]'
		},
		computedMember: function(a, b) {
			return a + "[" + b + "]"
		},
		member: function(a, b, d) {
			return d ? this.computedMember(a, b) : this.nonComputedMember(a, b)
		},
		getStringValue: function(a) {
			this.assign(a, "getStringValue(" + a + ")")
		},
		lazyRecurse: function(a, b, d, c, e, f) {
			var g = this;
			return function() {
				g.recurse(a, b, d, c, e, f)
			}
		},
		lazyAssign: function(a, b) {
			var d = this;
			return function() {
				d.assign(a, b)
			}
		},
		stringEscapeRegex: /[^ a-zA-Z0-9]/g,
		stringEscapeFn: function(a) {
			return "\\u" + ("0000" + a.charCodeAt(0).toString(16)).slice(-4)
		},
		escape: function(a) {
			if (D(a)) return "'" + a.replace(this.stringEscapeRegex, this.stringEscapeFn) + "'";
			if (ba(a)) return a.toString();
			if (!0 === a) return "true";
			if (!1 === a) return "false";
			if (null === a) return "null";
			if ("undefined" === typeof a) return "undefined";
			throw Ua("esc");
		},
		nextId: function(a, b) {
			var d = "v" + this.state.nextId++;
			a || this.current().vars.push(d + (b ? "=" + b : ""));
			return d
		},
		current: function() {
			return this.state[this.state.computing]
		}
	};
	Id.prototype = {
		compile: function(a) {
			var b = this;
			a = this.astBuilder.ast(a);
			U(a, b.$filter);
			var d, c;
			if (d = Fd(a)) c = this.recurse(d);
			d = Dd(a.body);
			var e;
			d && (e = [], p(d, function(a, c) {
				var d = b.recurse(a);
				a.input = d;
				e.push(d);
				a.watchId = c
			}));
			var f = [];
			p(a.body, function(a) {
				f.push(b.recurse(a.expression))
			});
			d = 0 === a.body.length ? A : 1 === a.body.length ? f[0] : function(a, b) {
				var c;
				p(f, function(d) {
					c = d(a, b)
				});
				return c
			};
			c && (d.assign = function(a, b, d) {
				return c(a, d, b)
			});
			e && (d.inputs = e);
			d.literal = Gd(a);
			d.constant = a.constant;
			return d
		},
		recurse: function(a,
			b, d) {
			var c, e, f = this,
				g;
			if (a.input) return this.inputs(a.input, a.watchId);
			switch (a.type) {
				case s.Literal:
					return this.value(a.value, b);
				case s.UnaryExpression:
					return e = this.recurse(a.argument), this["unary" + a.operator](e, b);
				case s.BinaryExpression:
					return c = this.recurse(a.left), e = this.recurse(a.right), this["binary" + a.operator](c, e, b);
				case s.LogicalExpression:
					return c = this.recurse(a.left), e = this.recurse(a.right), this["binary" + a.operator](c, e, b);
				case s.ConditionalExpression:
					return this["ternary?:"](this.recurse(a.test),
						this.recurse(a.alternate), this.recurse(a.consequent), b);
				case s.Identifier:
					return f.identifier(a.name, b, d);
				case s.MemberExpression:
					return c = this.recurse(a.object, !1, !!d), a.computed || (e = a.property.name), a.computed && (e = this.recurse(a.property)), a.computed ? this.computedMember(c, e, b, d) : this.nonComputedMember(c, e, b, d);
				case s.CallExpression:
					return g = [], p(a.arguments, function(a) {
						g.push(f.recurse(a))
					}), a.filter && (e = this.$filter(a.callee.name)), a.filter || (e = this.recurse(a.callee, !0)), a.filter ? function(a, c,
						d, f) {
						for (var n = [], q = 0; q < g.length; ++q) n.push(g[q](a, c, d, f));
						a = e.apply(void 0, n, f);
						return b ? {
							context: void 0,
							name: void 0,
							value: a
						} : a
					} : function(a, c, d, f) {
						var n = e(a, c, d, f),
							q;
						if (null != n.value) {
							q = [];
							for (var r = 0; r < g.length; ++r) q.push(g[r](a, c, d, f));
							q = n.value.apply(n.context, q)
						}
						return b ? {
							value: q
						} : q
					};
				case s.AssignmentExpression:
					return c = this.recurse(a.left, !0, 1), e = this.recurse(a.right),
						function(a, d, f, g) {
							var n = c(a, d, f, g);
							a = e(a, d, f, g);
							n.context[n.name] = a;
							return b ? {
								value: a
							} : a
						};
				case s.ArrayExpression:
					return g = [],
						p(a.elements, function(a) {
							g.push(f.recurse(a))
						}),
						function(a, c, d, e) {
							for (var f = [], q = 0; q < g.length; ++q) f.push(g[q](a, c, d, e));
							return b ? {
								value: f
							} : f
						};
				case s.ObjectExpression:
					return g = [], p(a.properties, function(a) {
							a.computed ? g.push({
								key: f.recurse(a.key),
								computed: !0,
								value: f.recurse(a.value)
							}) : g.push({
								key: a.key.type === s.Identifier ? a.key.name : "" + a.key.value,
								computed: !1,
								value: f.recurse(a.value)
							})
						}),
						function(a, c, d, e) {
							for (var f = {}, q = 0; q < g.length; ++q) g[q].computed ? f[g[q].key(a, c, d, e)] = g[q].value(a, c, d, e) : f[g[q].key] =
								g[q].value(a, c, d, e);
							return b ? {
								value: f
							} : f
						};
				case s.ThisExpression:
					return function(a) {
						return b ? {
							value: a
						} : a
					};
				case s.LocalsExpression:
					return function(a, c) {
						return b ? {
							value: c
						} : c
					};
				case s.NGValueParameter:
					return function(a, c, d) {
						return b ? {
							value: d
						} : d
					}
			}
		},
		"unary+": function(a, b) {
			return function(d, c, e, f) {
				d = a(d, c, e, f);
				d = u(d) ? +d : 0;
				return b ? {
					value: d
				} : d
			}
		},
		"unary-": function(a, b) {
			return function(d, c, e, f) {
				d = a(d, c, e, f);
				d = u(d) ? -d : -0;
				return b ? {
					value: d
				} : d
			}
		},
		"unary!": function(a, b) {
			return function(d, c, e, f) {
				d = !a(d, c, e, f);
				return b ? {
					value: d
				} : d
			}
		},
		"binary+": function(a, b, d) {
			return function(c, e, f, g) {
				var h = a(c, e, f, g);
				c = b(c, e, f, g);
				h = Cd(h, c);
				return d ? {
					value: h
				} : h
			}
		},
		"binary-": function(a, b, d) {
			return function(c, e, f, g) {
				var h = a(c, e, f, g);
				c = b(c, e, f, g);
				h = (u(h) ? h : 0) - (u(c) ? c : 0);
				return d ? {
					value: h
				} : h
			}
		},
		"binary*": function(a, b, d) {
			return function(c, e, f, g) {
				c = a(c, e, f, g) * b(c, e, f, g);
				return d ? {
					value: c
				} : c
			}
		},
		"binary/": function(a, b, d) {
			return function(c, e, f, g) {
				c = a(c, e, f, g) / b(c, e, f, g);
				return d ? {
					value: c
				} : c
			}
		},
		"binary%": function(a, b, d) {
			return function(c, e, f, g) {
				c =
					a(c, e, f, g) % b(c, e, f, g);
				return d ? {
					value: c
				} : c
			}
		},
		"binary===": function(a, b, d) {
			return function(c, e, f, g) {
				c = a(c, e, f, g) === b(c, e, f, g);
				return d ? {
					value: c
				} : c
			}
		},
		"binary!==": function(a, b, d) {
			return function(c, e, f, g) {
				c = a(c, e, f, g) !== b(c, e, f, g);
				return d ? {
					value: c
				} : c
			}
		},
		"binary==": function(a, b, d) {
			return function(c, e, f, g) {
				c = a(c, e, f, g) == b(c, e, f, g);
				return d ? {
					value: c
				} : c
			}
		},
		"binary!=": function(a, b, d) {
			return function(c, e, f, g) {
				c = a(c, e, f, g) != b(c, e, f, g);
				return d ? {
					value: c
				} : c
			}
		},
		"binary<": function(a, b, d) {
			return function(c, e, f, g) {
				c =
					a(c, e, f, g) < b(c, e, f, g);
				return d ? {
					value: c
				} : c
			}
		},
		"binary>": function(a, b, d) {
			return function(c, e, f, g) {
				c = a(c, e, f, g) > b(c, e, f, g);
				return d ? {
					value: c
				} : c
			}
		},
		"binary<=": function(a, b, d) {
			return function(c, e, f, g) {
				c = a(c, e, f, g) <= b(c, e, f, g);
				return d ? {
					value: c
				} : c
			}
		},
		"binary>=": function(a, b, d) {
			return function(c, e, f, g) {
				c = a(c, e, f, g) >= b(c, e, f, g);
				return d ? {
					value: c
				} : c
			}
		},
		"binary&&": function(a, b, d) {
			return function(c, e, f, g) {
				c = a(c, e, f, g) && b(c, e, f, g);
				return d ? {
					value: c
				} : c
			}
		},
		"binary||": function(a, b, d) {
			return function(c, e, f, g) {
				c = a(c,
					e, f, g) || b(c, e, f, g);
				return d ? {
					value: c
				} : c
			}
		},
		"ternary?:": function(a, b, d, c) {
			return function(e, f, g, h) {
				e = a(e, f, g, h) ? b(e, f, g, h) : d(e, f, g, h);
				return c ? {
					value: e
				} : e
			}
		},
		value: function(a, b) {
			return function() {
				return b ? {
					context: void 0,
					name: void 0,
					value: a
				} : a
			}
		},
		identifier: function(a, b, d) {
			return function(c, e, f, g) {
				c = e && a in e ? e : c;
				d && 1 !== d && c && null == c[a] && (c[a] = {});
				e = c ? c[a] : void 0;
				return b ? {
					context: c,
					name: a,
					value: e
				} : e
			}
		},
		computedMember: function(a, b, d, c) {
			return function(e, f, g, h) {
				var k = a(e, f, g, h),
					l, m;
				null != k && (l = b(e, f, g,
					h), l += "", c && 1 !== c && k && !k[l] && (k[l] = {}), m = k[l]);
				return d ? {
					context: k,
					name: l,
					value: m
				} : m
			}
		},
		nonComputedMember: function(a, b, d, c) {
			return function(e, f, g, h) {
				e = a(e, f, g, h);
				c && 1 !== c && e && null == e[b] && (e[b] = {});
				f = null != e ? e[b] : void 0;
				return d ? {
					context: e,
					name: b,
					value: f
				} : f
			}
		},
		inputs: function(a, b) {
			return function(d, c, e, f) {
				return f ? f[b] : a(d, c, e)
			}
		}
	};
	var tc = function(a, b, d) {
		this.lexer = a;
		this.$filter = b;
		this.options = d;
		this.ast = new s(a, d);
		this.astCompiler = d.csp ? new Id(this.ast, b) : new Hd(this.ast, b)
	};
	tc.prototype = {
		constructor: tc,
		parse: function(a) {
			return this.astCompiler.compile(a)
		}
	};
	var ta = M("$sce"),
		oa = {
			HTML: "html",
			CSS: "css",
			URL: "url",
			RESOURCE_URL: "resourceUrl",
			JS: "js"
		},
		uc = /_([a-z])/g,
		Dg = M("$compile"),
		aa = w.document.createElement("a"),
		Md = Ca(w.location.href);
	Nd.$inject = ["$document"];
	$c.$inject = ["$provide"];
	var Ud = 22,
		Td = ".",
		wc = "0";
	Od.$inject = ["$locale"];
	Qd.$inject = ["$locale"];
	var Og = {
			yyyy: Y("FullYear", 4, 0, !1, !0),
			yy: Y("FullYear", 2, 0, !0, !0),
			y: Y("FullYear", 1, 0, !1, !0),
			MMMM: nb("Month"),
			MMM: nb("Month", !0),
			MM: Y("Month", 2, 1),
			M: Y("Month",
				1, 1),
			LLLL: nb("Month", !1, !0),
			dd: Y("Date", 2),
			d: Y("Date", 1),
			HH: Y("Hours", 2),
			H: Y("Hours", 1),
			hh: Y("Hours", 2, -12),
			h: Y("Hours", 1, -12),
			mm: Y("Minutes", 2),
			m: Y("Minutes", 1),
			ss: Y("Seconds", 2),
			s: Y("Seconds", 1),
			sss: Y("Milliseconds", 3),
			EEEE: nb("Day"),
			EEE: nb("Day", !0),
			a: function(a, b) {
				return 12 > a.getHours() ? b.AMPMS[0] : b.AMPMS[1]
			},
			Z: function(a, b, d) {
				a = -1 * d;
				return a = (0 <= a ? "+" : "") + (Lb(Math[0 < a ? "floor" : "ceil"](a / 60), 2) + Lb(Math.abs(a % 60), 2))
			},
			ww: Wd(2),
			w: Wd(1),
			G: xc,
			GG: xc,
			GGG: xc,
			GGGG: function(a, b) {
				return 0 >= a.getFullYear() ?
					b.ERANAMES[0] : b.ERANAMES[1]
			}
		},
		Ng = /((?:[^yMLdHhmsaZEwG']+)|(?:'(?:[^']|'')*')|(?:E+|y+|M+|L+|d+|H+|h+|m+|s+|a|Z|G+|w+))(.*)/,
		Mg = /^-?\d+$/;
	Pd.$inject = ["$locale"];
	var Hg = la(P),
		Ig = la(vb);
	Rd.$inject = ["$parse"];
	var Fe = la({
			restrict: "E",
			compile: function(a, b) {
				if (!b.href && !b.xlinkHref) return function(a, b) {
					if ("a" === b[0].nodeName.toLowerCase()) {
						var e = "[object SVGAnimatedString]" === ma.call(b.prop("href")) ? "xlink:href" : "href";
						b.on("click", function(a) {
							b.attr(e) || a.preventDefault()
						})
					}
				}
			}
		}),
		wb = {};
	p(Gb, function(a, b) {
		function d(a,
			d, e) {
			a.$watch(e[c], function(a) {
				e.$set(b, !!a)
			})
		}
		if ("multiple" !== a) {
			var c = Ba("ng-" + b),
				e = d;
			"checked" === a && (e = function(a, b, e) {
				e.ngModel !== e[c] && d(a, b, e)
			});
			wb[c] = function() {
				return {
					restrict: "A",
					priority: 100,
					link: e
				}
			}
		}
	});
	p(pd, function(a, b) {
		wb[b] = function() {
			return {
				priority: 100,
				link: function(a, c, e) {
					if ("ngPattern" === b && "/" === e.ngPattern.charAt(0) && (c = e.ngPattern.match(Sg))) {
						e.$set("ngPattern", new RegExp(c[1], c[2]));
						return
					}
					a.$watch(e[b], function(a) {
						e.$set(b, a)
					})
				}
			}
		}
	});
	p(["src", "srcset", "href"], function(a) {
		var b =
			Ba("ng-" + a);
		wb[b] = function() {
			return {
				priority: 99,
				link: function(d, c, e) {
					var f = a,
						g = a;
					"href" === a && "[object SVGAnimatedString]" === ma.call(c.prop("href")) && (g = "xlinkHref", e.$attr[g] = "xlink:href", f = null);
					e.$observe(b, function(b) {
						b ? (e.$set(g, b), za && f && c.prop(f, e[g])) : "href" === a && e.$set(g, null)
					})
				}
			}
		}
	});
	var Nb = {
		$addControl: A,
		$$renameControl: function(a, b) {
			a.$name = b
		},
		$removeControl: A,
		$setValidity: A,
		$setDirty: A,
		$setPristine: A,
		$setSubmitted: A
	};
	Mb.$inject = ["$element", "$attrs", "$scope", "$animate", "$interpolate"];
	Mb.prototype = {
		$rollbackViewValue: function() {
			p(this.$$controls, function(a) {
				a.$rollbackViewValue()
			})
		},
		$commitViewValue: function() {
			p(this.$$controls, function(a) {
				a.$commitViewValue()
			})
		},
		$addControl: function(a) {
			Ka(a.$name, "input");
			this.$$controls.push(a);
			a.$name && (this[a.$name] = a);
			a.$$parentForm = this
		},
		$$renameControl: function(a, b) {
			var d = a.$name;
			this[d] === a && delete this[d];
			this[b] = a;
			a.$name = b
		},
		$removeControl: function(a) {
			a.$name && this[a.$name] === a && delete this[a.$name];
			p(this.$pending, function(b, d) {
				this.$setValidity(d,
					null, a)
			}, this);
			p(this.$error, function(b, d) {
				this.$setValidity(d, null, a)
			}, this);
			p(this.$$success, function(b, d) {
				this.$setValidity(d, null, a)
			}, this);
			$a(this.$$controls, a);
			a.$$parentForm = Nb
		},
		$setDirty: function() {
			this.$$animate.removeClass(this.$$element, Va);
			this.$$animate.addClass(this.$$element, Sb);
			this.$dirty = !0;
			this.$pristine = !1;
			this.$$parentForm.$setDirty()
		},
		$setPristine: function() {
			this.$$animate.setClass(this.$$element, Va, Sb + " ng-submitted");
			this.$dirty = !1;
			this.$pristine = !0;
			this.$submitted = !1;
			p(this.$$controls,
				function(a) {
					a.$setPristine()
				})
		},
		$setUntouched: function() {
			p(this.$$controls, function(a) {
				a.$setUntouched()
			})
		},
		$setSubmitted: function() {
			this.$$animate.addClass(this.$$element, "ng-submitted");
			this.$submitted = !0;
			this.$$parentForm.$setSubmitted()
		}
	};
	Zd({
		clazz: Mb,
		set: function(a, b, d) {
			var c = a[b];
			c ? -1 === c.indexOf(d) && c.push(d) : a[b] = [d]
		},
		unset: function(a, b, d) {
			var c = a[b];
			c && ($a(c, d), 0 === c.length && delete a[b])
		}
	});
	var ge = function(a) {
			return ["$timeout", "$parse", function(b, d) {
				function c(a) {
					return "" === a ? d('this[""]').assign :
						d(a).assign || A
				}
				return {
					name: "form",
					restrict: a ? "EAC" : "E",
					require: ["form", "^^?form"],
					controller: Mb,
					compile: function(d, f) {
						d.addClass(Va).addClass(ob);
						var g = f.name ? "name" : a && f.ngForm ? "ngForm" : !1;
						return {
							pre: function(a, d, e, f) {
								var n = f[0];
								if (!("action" in e)) {
									var q = function(b) {
										a.$apply(function() {
											n.$commitViewValue();
											n.$setSubmitted()
										});
										b.preventDefault()
									};
									d[0].addEventListener("submit", q);
									d.on("$destroy", function() {
										b(function() {
											d[0].removeEventListener("submit", q)
										}, 0, !1)
									})
								}(f[1] || n.$$parentForm).$addControl(n);
								var r = g ? c(n.$name) : A;
								g && (r(a, n), e.$observe(g, function(b) {
									n.$name !== b && (r(a, void 0), n.$$parentForm.$$renameControl(n, b), r = c(n.$name), r(a, n))
								}));
								d.on("$destroy", function() {
									n.$$parentForm.$removeControl(n);
									r(a, void 0);
									R(n, Nb)
								})
							}
						}
					}
				}
			}]
		},
		Ge = ge(),
		Se = ge(!0),
		Pg = /^\d{4,}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d:[0-5]\d\.\d+(?:[+-][0-2]\d:[0-5]\d|Z)$/,
		ah = /^[a-z][a-z\d.+-]*:\/*(?:[^:@]+(?::[^@]+)?@)?(?:[^\s:/?#]+|\[[a-f\d:]+])(?::\d+)?(?:\/[^?#]*)?(?:\?[^#]*)?(?:#.*)?$/i,
		bh = /^(?=.{1,254}$)(?=.{1,64}@)[-!#$%&'*+/0-9=?A-Z^_`a-z{|}~]+(\.[-!#$%&'*+/0-9=?A-Z^_`a-z{|}~]+)*@[A-Za-z0-9]([A-Za-z0-9-]{0,61}[A-Za-z0-9])?(\.[A-Za-z0-9]([A-Za-z0-9-]{0,61}[A-Za-z0-9])?)*$/,
		Qg = /^\s*(-|\+)?(\d+|(\d*(\.\d*)))([eE][+-]?\d+)?\s*$/,
		he = /^(\d{4,})-(\d{2})-(\d{2})$/,
		ie = /^(\d{4,})-(\d\d)-(\d\d)T(\d\d):(\d\d)(?::(\d\d)(\.\d{1,3})?)?$/,
		Ec = /^(\d{4,})-W(\d\d)$/,
		je = /^(\d{4,})-(\d\d)$/,
		ke = /^(\d\d):(\d\d)(?::(\d\d)(\.\d{1,3})?)?$/,
		ae = V();
	p(["date", "datetime-local", "month", "time", "week"], function(a) {
		ae[a] = !0
	});
	var le = {
			text: function(a, b, d, c, e, f) {
				Ra(a, b, d, c, e, f);
				zc(c)
			},
			date: pb("date", he, Ob(he, ["yyyy", "MM", "dd"]), "yyyy-MM-dd"),
			"datetime-local": pb("datetimelocal", ie, Ob(ie, "yyyy MM dd HH mm ss sss".split(" ")),
				"yyyy-MM-ddTHH:mm:ss.sss"),
			time: pb("time", ke, Ob(ke, ["HH", "mm", "ss", "sss"]), "HH:mm:ss.sss"),
			week: pb("week", Ec, function(a, b) {
				if (ga(a)) return a;
				if (D(a)) {
					Ec.lastIndex = 0;
					var d = Ec.exec(a);
					if (d) {
						var c = +d[1],
							e = +d[2],
							f = d = 0,
							g = 0,
							h = 0,
							k = Vd(c),
							e = 7 * (e - 1);
						b && (d = b.getHours(), f = b.getMinutes(), g = b.getSeconds(), h = b.getMilliseconds());
						return new Date(c, 0, k.getDate() + e, d, f, g, h)
					}
				}
				return NaN
			}, "yyyy-Www"),
			month: pb("month", je, Ob(je, ["yyyy", "MM"]), "yyyy-MM"),
			number: function(a, b, d, c, e, f) {
				Ac(a, b, d, c);
				be(c);
				Ra(a, b, d, c, e, f);
				var g,
					h;
				if (u(d.min) || d.ngMin) c.$validators.min = function(a) {
					return c.$isEmpty(a) || x(g) || a >= g
				}, d.$observe("min", function(a) {
					g = Sa(a);
					c.$validate()
				});
				if (u(d.max) || d.ngMax) c.$validators.max = function(a) {
					return c.$isEmpty(a) || x(h) || a <= h
				}, d.$observe("max", function(a) {
					h = Sa(a);
					c.$validate()
				});
				if (u(d.step) || d.ngStep) {
					var k;
					c.$validators.step = function(a, b) {
						return c.$isEmpty(b) || x(k) || ce(b, g || 0, k)
					};
					d.$observe("step", function(a) {
						k = Sa(a);
						c.$validate()
					})
				}
			},
			url: function(a, b, d, c, e, f) {
				Ra(a, b, d, c, e, f);
				zc(c);
				c.$$parserName =
					"url";
				c.$validators.url = function(a, b) {
					var d = a || b;
					return c.$isEmpty(d) || ah.test(d)
				}
			},
			email: function(a, b, d, c, e, f) {
				Ra(a, b, d, c, e, f);
				zc(c);
				c.$$parserName = "email";
				c.$validators.email = function(a, b) {
					var d = a || b;
					return c.$isEmpty(d) || bh.test(d)
				}
			},
			radio: function(a, b, d, c) {
				var e = !d.ngTrim || "false" !== S(d.ngTrim);
				x(d.name) && b.attr("name", ++rb);
				b.on("click", function(a) {
					var g;
					b[0].checked && (g = d.value, e && (g = S(g)), c.$setViewValue(g, a && a.type))
				});
				c.$render = function() {
					var a = d.value;
					e && (a = S(a));
					b[0].checked = a === c.$viewValue
				};
				d.$observe("value", c.$render)
			},
			range: function(a, b, d, c, e, f) {
				function g(a, c) {
					b.attr(a, d[a]);
					d.$observe(a, c)
				}

				function h(a) {
					n = Sa(a);
					da(c.$modelValue) || (m ? (a = b.val(), n > a && (a = n, b.val(a)), c.$setViewValue(a)) : c.$validate())
				}

				function k(a) {
					q = Sa(a);
					da(c.$modelValue) || (m ? (a = b.val(), q < a && (b.val(q), a = q < n ? n : q), c.$setViewValue(a)) : c.$validate())
				}

				function l(a) {
					r = Sa(a);
					da(c.$modelValue) || (m && c.$viewValue !== b.val() ? c.$setViewValue(b.val()) : c.$validate())
				}
				Ac(a, b, d, c);
				be(c);
				Ra(a, b, d, c, e, f);
				var m = c.$$hasNativeValidators &&
					"range" === b[0].type,
					n = m ? 0 : void 0,
					q = m ? 100 : void 0,
					r = m ? 1 : void 0,
					p = b[0].validity;
				a = u(d.min);
				e = u(d.max);
				f = u(d.step);
				var s = c.$render;
				c.$render = m && u(p.rangeUnderflow) && u(p.rangeOverflow) ? function() {
					s();
					c.$setViewValue(b.val())
				} : s;
				a && (c.$validators.min = m ? function() {
					return !0
				} : function(a, b) {
					return c.$isEmpty(b) || x(n) || b >= n
				}, g("min", h));
				e && (c.$validators.max = m ? function() {
					return !0
				} : function(a, b) {
					return c.$isEmpty(b) || x(q) || b <= q
				}, g("max", k));
				f && (c.$validators.step = m ? function() {
					return !p.stepMismatch
				} : function(a,
					b) {
					return c.$isEmpty(b) || x(r) || ce(b, n || 0, r)
				}, g("step", l))
			},
			checkbox: function(a, b, d, c, e, f, g, h) {
				var k = de(h, a, "ngTrueValue", d.ngTrueValue, !0),
					l = de(h, a, "ngFalseValue", d.ngFalseValue, !1);
				b.on("click", function(a) {
					c.$setViewValue(b[0].checked, a && a.type)
				});
				c.$render = function() {
					b[0].checked = c.$viewValue
				};
				c.$isEmpty = function(a) {
					return !1 === a
				};
				c.$formatters.push(function(a) {
					return pa(a, k)
				});
				c.$parsers.push(function(a) {
					return a ? k : l
				})
			},
			hidden: A,
			button: A,
			submit: A,
			reset: A,
			file: A
		},
		Uc = ["$browser", "$sniffer", "$filter",
			"$parse",
			function(a, b, d, c) {
				return {
					restrict: "E",
					require: ["?ngModel"],
					link: {
						pre: function(e, f, g, h) {
							h[0] && (le[P(g.type)] || le.text)(e, f, g, h[0], b, a, d, c)
						}
					}
				}
			}
		],
		ch = /^(true|false|\d+)$/,
		kf = function() {
			function a(a, d, c) {
				var e = u(c) ? c : 9 === za ? "" : null;
				a.prop("value", e);
				d.$set("value", c)
			}
			return {
				restrict: "A",
				priority: 100,
				compile: function(b, d) {
					return ch.test(d.ngValue) ? function(b, d, f) {
						b = b.$eval(f.ngValue);
						a(d, f, b)
					} : function(b, d, f) {
						b.$watch(f.ngValue, function(b) {
							a(d, f, b)
						})
					}
				}
			}
		},
		Ke = ["$compile", function(a) {
			return {
				restrict: "AC",
				compile: function(b) {
					a.$$addBindingClass(b);
					return function(b, c, e) {
						a.$$addBindingInfo(c, e.ngBind);
						c = c[0];
						b.$watch(e.ngBind, function(a) {
							c.textContent = $b(a)
						})
					}
				}
			}
		}],
		Me = ["$interpolate", "$compile", function(a, b) {
			return {
				compile: function(d) {
					b.$$addBindingClass(d);
					return function(c, d, f) {
						c = a(d.attr(f.$attr.ngBindTemplate));
						b.$$addBindingInfo(d, c.expressions);
						d = d[0];
						f.$observe("ngBindTemplate", function(a) {
							d.textContent = x(a) ? "" : a
						})
					}
				}
			}
		}],
		Le = ["$sce", "$parse", "$compile", function(a, b, d) {
			return {
				restrict: "A",
				compile: function(c,
					e) {
					var f = b(e.ngBindHtml),
						g = b(e.ngBindHtml, function(b) {
							return a.valueOf(b)
						});
					d.$$addBindingClass(c);
					return function(b, c, e) {
						d.$$addBindingInfo(c, e.ngBindHtml);
						b.$watch(g, function() {
							var d = f(b);
							c.html(a.getTrustedHtml(d) || "")
						})
					}
				}
			}
		}],
		jf = la({
			restrict: "A",
			require: "ngModel",
			link: function(a, b, d, c) {
				c.$viewChangeListeners.push(function() {
					a.$eval(d.ngChange)
				})
			}
		}),
		Ne = Cc("", !0),
		Pe = Cc("Odd", 0),
		Oe = Cc("Even", 1),
		Qe = Qa({
			compile: function(a, b) {
				b.$set("ngCloak", void 0);
				a.removeClass("ng-cloak")
			}
		}),
		Re = [function() {
			return {
				restrict: "A",
				scope: !0,
				controller: "@",
				priority: 500
			}
		}],
		Zc = {},
		dh = {
			blur: !0,
			focus: !0
		};
	p("click dblclick mousedown mouseup mouseover mouseout mousemove mouseenter mouseleave keydown keyup keypress submit focus blur copy cut paste".split(" "), function(a) {
		var b = Ba("ng-" + a);
		Zc[b] = ["$parse", "$rootScope", function(d, c) {
			return {
				restrict: "A",
				compile: function(e, f) {
					var g = d(f[b]);
					return function(b, d) {
						d.on(a, function(d) {
							var e = function() {
								g(b, {
									$event: d
								})
							};
							dh[a] && c.$$phase ? b.$evalAsync(e) : b.$apply(e)
						})
					}
				}
			}
		}]
	});
	var Ue = ["$animate", "$compile",
			function(a, b) {
				return {
					multiElement: !0,
					transclude: "element",
					priority: 600,
					terminal: !0,
					restrict: "A",
					$$tlb: !0,
					link: function(d, c, e, f, g) {
						var h, k, l;
						d.$watch(e.ngIf, function(d) {
							d ? k || g(function(d, f) {
								k = f;
								d[d.length++] = b.$$createComment("end ngIf", e.ngIf);
								h = {
									clone: d
								};
								a.enter(d, c.parent(), c)
							}) : (l && (l.remove(), l = null), k && (k.$destroy(), k = null), h && (l = ub(h.clone), a.leave(l).done(function(a) {
								!1 !== a && (l = null)
							}), h = null))
						})
					}
				}
			}
		],
		Ve = ["$templateRequest", "$anchorScroll", "$animate", function(a, b, d) {
			return {
				restrict: "ECA",
				priority: 400,
				terminal: !0,
				transclude: "element",
				controller: ea.noop,
				compile: function(c, e) {
					var f = e.ngInclude || e.src,
						g = e.onload || "",
						h = e.autoscroll;
					return function(c, e, m, n, q) {
						var r = 0,
							p, s, t, x = function() {
								s && (s.remove(), s = null);
								p && (p.$destroy(), p = null);
								t && (d.leave(t).done(function(a) {
									!1 !== a && (s = null)
								}), s = t, t = null)
							};
						c.$watch(f, function(f) {
							var m = function(a) {
									!1 === a || !u(h) || h && !c.$eval(h) || b()
								},
								s = ++r;
							f ? (a(f, !0).then(function(a) {
								if (!c.$$destroyed && s === r) {
									var b = c.$new();
									n.template = a;
									a = q(b, function(a) {
										x();
										d.enter(a, null, e).done(m)
									});
									p = b;
									t = a;
									p.$emit("$includeContentLoaded", f);
									c.$eval(g)
								}
							}, function() {
								c.$$destroyed || s !== r || (x(), c.$emit("$includeContentError", f))
							}), c.$emit("$includeContentRequested", f)) : (x(), n.template = null)
						})
					}
				}
			}
		}],
		mf = ["$compile", function(a) {
			return {
				restrict: "ECA",
				priority: -400,
				require: "ngInclude",
				link: function(b, d, c, e) {
					ma.call(d[0]).match(/SVG/) ? (d.empty(), a(bd(e.template, w.document).childNodes)(b, function(a) {
						d.append(a)
					}, {
						futureParentElement: d
					})) : (d.html(e.template), a(d.contents())(b))
				}
			}
		}],
		We = Qa({
			priority: 450,
			compile: function() {
				return {
					pre: function(a,
						b, d) {
						a.$eval(d.ngInit)
					}
				}
			}
		}),
		hf = function() {
			return {
				restrict: "A",
				priority: 100,
				require: "ngModel",
				link: function(a, b, d, c) {
					var e = d.ngList || ", ",
						f = "false" !== d.ngTrim,
						g = f ? S(e) : e;
					c.$parsers.push(function(a) {
						if (!x(a)) {
							var b = [];
							a && p(a.split(g), function(a) {
								a && b.push(f ? S(a) : a)
							});
							return b
						}
					});
					c.$formatters.push(function(a) {
						if (H(a)) return a.join(e)
					});
					c.$isEmpty = function(a) {
						return !a || !a.length
					}
				}
			}
		},
		ob = "ng-valid",
		Yd = "ng-invalid",
		Va = "ng-pristine",
		Sb = "ng-dirty",
		qb = M("ngModel");
	Pb.$inject = "$scope $exceptionHandler $attrs $element $parse $animate $timeout $q $interpolate".split(" ");
	Pb.prototype = {
		$$initGetterSetters: function() {
			if (this.$options.getOption("getterSetter")) {
				var a = this.$$parse(this.$$attr.ngModel + "()"),
					b = this.$$parse(this.$$attr.ngModel + "($$$p)");
				this.$$ngModelGet = function(b) {
					var c = this.$$parsedNgModel(b);
					E(c) && (c = a(b));
					return c
				};
				this.$$ngModelSet = function(a, c) {
					E(this.$$parsedNgModel(a)) ? b(a, {
						$$$p: c
					}) : this.$$parsedNgModelAssign(a, c)
				}
			} else if (!this.$$parsedNgModel.assign) throw qb("nonassign", this.$$attr.ngModel, xa(this.$$element));
		},
		$render: A,
		$isEmpty: function(a) {
			return x(a) ||
				"" === a || null === a || a !== a
		},
		$$updateEmptyClasses: function(a) {
			this.$isEmpty(a) ? (this.$$animate.removeClass(this.$$element, "ng-not-empty"), this.$$animate.addClass(this.$$element, "ng-empty")) : (this.$$animate.removeClass(this.$$element, "ng-empty"), this.$$animate.addClass(this.$$element, "ng-not-empty"))
		},
		$setPristine: function() {
			this.$dirty = !1;
			this.$pristine = !0;
			this.$$animate.removeClass(this.$$element, Sb);
			this.$$animate.addClass(this.$$element, Va)
		},
		$setDirty: function() {
			this.$dirty = !0;
			this.$pristine = !1;
			this.$$animate.removeClass(this.$$element,
				Va);
			this.$$animate.addClass(this.$$element, Sb);
			this.$$parentForm.$setDirty()
		},
		$setUntouched: function() {
			this.$touched = !1;
			this.$untouched = !0;
			this.$$animate.setClass(this.$$element, "ng-untouched", "ng-touched")
		},
		$setTouched: function() {
			this.$touched = !0;
			this.$untouched = !1;
			this.$$animate.setClass(this.$$element, "ng-touched", "ng-untouched")
		},
		$rollbackViewValue: function() {
			this.$$timeout.cancel(this.$$pendingDebounce);
			this.$viewValue = this.$$lastCommittedViewValue;
			this.$render()
		},
		$validate: function() {
			if (!da(this.$modelValue)) {
				var a =
					this.$$lastCommittedViewValue,
					b = this.$$rawModelValue,
					d = this.$valid,
					c = this.$modelValue,
					e = this.$options.getOption("allowInvalid"),
					f = this;
				this.$$runValidators(b, a, function(a) {
					e || d === a || (f.$modelValue = a ? b : void 0, f.$modelValue !== c && f.$$writeModelToScope())
				})
			}
		},
		$$runValidators: function(a, b, d) {
			function c() {
				var c = !0;
				p(k.$validators, function(d, e) {
					var g = Boolean(d(a, b));
					c = c && g;
					f(e, g)
				});
				return c ? !0 : (p(k.$asyncValidators, function(a, b) {
					f(b, null)
				}), !1)
			}

			function e() {
				var c = [],
					d = !0;
				p(k.$asyncValidators, function(e,
					g) {
					var k = e(a, b);
					if (!k || !E(k.then)) throw qb("nopromise", k);
					f(g, void 0);
					c.push(k.then(function() {
						f(g, !0)
					}, function() {
						d = !1;
						f(g, !1)
					}))
				});
				c.length ? k.$$q.all(c).then(function() {
					g(d)
				}, A) : g(!0)
			}

			function f(a, b) {
				h === k.$$currentValidationRunId && k.$setValidity(a, b)
			}

			function g(a) {
				h === k.$$currentValidationRunId && d(a)
			}
			this.$$currentValidationRunId++;
			var h = this.$$currentValidationRunId,
				k = this;
			(function() {
				var a = k.$$parserName || "parse";
				if (x(k.$$parserValid)) f(a, null);
				else return k.$$parserValid || (p(k.$validators, function(a,
					b) {
					f(b, null)
				}), p(k.$asyncValidators, function(a, b) {
					f(b, null)
				})), f(a, k.$$parserValid), k.$$parserValid;
				return !0
			})() ? c() ? e() : g(!1): g(!1)
		},
		$commitViewValue: function() {
			var a = this.$viewValue;
			this.$$timeout.cancel(this.$$pendingDebounce);
			if (this.$$lastCommittedViewValue !== a || "" === a && this.$$hasNativeValidators) this.$$updateEmptyClasses(a), this.$$lastCommittedViewValue = a, this.$pristine && this.$setDirty(), this.$$parseAndValidate()
		},
		$$parseAndValidate: function() {
			var a = this.$$lastCommittedViewValue,
				b = this;
			if (this.$$parserValid =
				x(a) ? void 0 : !0)
				for (var d = 0; d < this.$parsers.length; d++)
					if (a = this.$parsers[d](a), x(a)) {
						this.$$parserValid = !1;
						break
					} da(this.$modelValue) && (this.$modelValue = this.$$ngModelGet(this.$$scope));
			var c = this.$modelValue,
				e = this.$options.getOption("allowInvalid");
			this.$$rawModelValue = a;
			e && (this.$modelValue = a, b.$modelValue !== c && b.$$writeModelToScope());
			this.$$runValidators(a, this.$$lastCommittedViewValue, function(d) {
				e || (b.$modelValue = d ? a : void 0, b.$modelValue !== c && b.$$writeModelToScope())
			})
		},
		$$writeModelToScope: function() {
			this.$$ngModelSet(this.$$scope,
				this.$modelValue);
			p(this.$viewChangeListeners, function(a) {
				try {
					a()
				} catch (b) {
					this.$$exceptionHandler(b)
				}
			}, this)
		},
		$setViewValue: function(a, b) {
			this.$viewValue = a;
			this.$options.getOption("updateOnDefault") && this.$$debounceViewValueCommit(b)
		},
		$$debounceViewValueCommit: function(a) {
			var b = this.$options.getOption("debounce");
			ba(b[a]) ? b = b[a] : ba(b["default"]) && (b = b["default"]);
			this.$$timeout.cancel(this.$$pendingDebounce);
			var d = this;
			0 < b ? this.$$pendingDebounce = this.$$timeout(function() {
					d.$commitViewValue()
				}, b) :
				this.$$scope.$root.$$phase ? this.$commitViewValue() : this.$$scope.$apply(function() {
					d.$commitViewValue()
				})
		},
		$overrideModelOptions: function(a) {
			this.$options = this.$options.createChild(a)
		}
	};
	Zd({
		clazz: Pb,
		set: function(a, b) {
			a[b] = !0
		},
		unset: function(a, b) {
			delete a[b]
		}
	});
	var gf = ["$rootScope", function(a) {
			return {
				restrict: "A",
				require: ["ngModel", "^?form", "^?ngModelOptions"],
				controller: Pb,
				priority: 1,
				compile: function(b) {
					b.addClass(Va).addClass("ng-untouched").addClass(ob);
					return {
						pre: function(a, b, e, f) {
							var g = f[0];
							b =
								f[1] || g.$$parentForm;
							if (f = f[2]) g.$options = f.$options;
							g.$$initGetterSetters();
							b.$addControl(g);
							e.$observe("name", function(a) {
								g.$name !== a && g.$$parentForm.$$renameControl(g, a)
							});
							a.$on("$destroy", function() {
								g.$$parentForm.$removeControl(g)
							})
						},
						post: function(b, c, e, f) {
							function g() {
								h.$setTouched()
							}
							var h = f[0];
							if (h.$options.getOption("updateOn")) c.on(h.$options.getOption("updateOn"), function(a) {
								h.$$debounceViewValueCommit(a && a.type)
							});
							c.on("blur", function() {
								h.$touched || (a.$$phase ? b.$evalAsync(g) : b.$apply(g))
							})
						}
					}
				}
			}
		}],
		Qb, eh = /(\s+|^)default(\s+|$)/;
	Dc.prototype = {
		getOption: function(a) {
			return this.$$options[a]
		},
		createChild: function(a) {
			var b = !1;
			a = R({}, a);
			p(a, function(d, c) {
				"$inherit" === d ? "*" === c ? b = !0 : (a[c] = this.$$options[c], "updateOn" === c && (a.updateOnDefault = this.$$options.updateOnDefault)) : "updateOn" === c && (a.updateOnDefault = !1, a[c] = S(d.replace(eh, function() {
					a.updateOnDefault = !0;
					return " "
				})))
			}, this);
			b && (delete a["*"], ee(a, this.$$options));
			ee(a, Qb.$$options);
			return new Dc(a)
		}
	};
	Qb = new Dc({
		updateOn: "",
		updateOnDefault: !0,
		debounce: 0,
		getterSetter: !1,
		allowInvalid: !1,
		timezone: null
	});
	var lf = function() {
			function a(a, d) {
				this.$$attrs = a;
				this.$$scope = d
			}
			a.$inject = ["$attrs", "$scope"];
			a.prototype = {
				$onInit: function() {
					var a = this.parentCtrl ? this.parentCtrl.$options : Qb,
						d = this.$$scope.$eval(this.$$attrs.ngModelOptions);
					this.$options = a.createChild(d)
				}
			};
			return {
				restrict: "A",
				priority: 10,
				require: {
					parentCtrl: "?^^ngModelOptions"
				},
				bindToController: !0,
				controller: a
			}
		},
		Xe = Qa({
			terminal: !0,
			priority: 1E3
		}),
		fh = M("ngOptions"),
		gh = /^\s*([\s\S]+?)(?:\s+as\s+([\s\S]+?))?(?:\s+group\s+by\s+([\s\S]+?))?(?:\s+disable\s+when\s+([\s\S]+?))?\s+for\s+(?:([$\w][$\w]*)|(?:\(\s*([$\w][$\w]*)\s*,\s*([$\w][$\w]*)\s*\)))\s+in\s+([\s\S]+?)(?:\s+track\s+by\s+([\s\S]+?))?$/,
		ef = ["$compile", "$document", "$parse", function(a, b, d) {
			function c(a, b, c) {
				function e(a, b, c, d, f) {
					this.selectValue = a;
					this.viewValue = b;
					this.label = c;
					this.group = d;
					this.disabled = f
				}

				function f(a) {
					var b;
					if (!p && ra(a)) b = a;
					else {
						b = [];
						for (var c in a) a.hasOwnProperty(c) && "$" !== c.charAt(0) && b.push(c)
					}
					return b
				}
				var n = a.match(gh);
				if (!n) throw fh("iexp", a, xa(b));
				var q = n[5] || n[7],
					p = n[6];
				a = / as /.test(n[0]) && n[1];
				var s = n[9];
				b = d(n[2] ? n[1] : q);
				var u = a && d(a) || b,
					t = s && d(s),
					x = s ? function(a, b) {
						return t(c, b)
					} : function(a) {
						return Pa(a)
					},
					y = function(a, b) {
						return x(a, C(a, b))
					},
					v = d(n[2] || n[1]),
					w = d(n[3] || ""),
					B = d(n[4] || ""),
					J = d(n[8]),
					L = {},
					C = p ? function(a, b) {
						L[p] = b;
						L[q] = a;
						return L
					} : function(a) {
						L[q] = a;
						return L
					};
				return {
					trackBy: s,
					getTrackByValue: y,
					getWatchables: d(J, function(a) {
						var b = [];
						a = a || [];
						for (var d = f(a), e = d.length, g = 0; g < e; g++) {
							var h = a === d ? g : d[g],
								l = a[h],
								h = C(l, h),
								l = x(l, h);
							b.push(l);
							if (n[2] || n[1]) l = v(c, h), b.push(l);
							n[4] && (h = B(c, h), b.push(h))
						}
						return b
					}),
					getOptions: function() {
						for (var a = [], b = {}, d = J(c) || [], g = f(d), h = g.length, n = 0; n < h; n++) {
							var q = d ===
								g ? n : g[n],
								p = C(d[q], q),
								r = u(c, p),
								q = x(r, p),
								t = v(c, p),
								L = w(c, p),
								p = B(c, p),
								r = new e(q, r, t, L, p);
							a.push(r);
							b[q] = r
						}
						return {
							items: a,
							selectValueMap: b,
							getOptionFromViewValue: function(a) {
								return b[y(a)]
							},
							getViewValueFromOption: function(a) {
								return s ? sa(a.viewValue) : a.viewValue
							}
						}
					}
				}
			}
			var e = w.document.createElement("option"),
				f = w.document.createElement("optgroup");
			return {
				restrict: "A",
				terminal: !0,
				require: ["select", "ngModel"],
				link: {
					pre: function(a, b, c, d) {
						d[0].registerOption = A
					},
					post: function(d, h, k, l) {
						function m(a) {
							var b = (a = v.getOptionFromViewValue(a)) &&
								a.element;
							b && !b.selected && (b.selected = !0);
							return a
						}

						function n(a, b) {
							a.element = b;
							b.disabled = a.disabled;
							a.label !== b.label && (b.label = a.label, b.textContent = a.label);
							b.value = a.selectValue
						}

						function q() {
							var a = v && r.readValue();
							if (v)
								for (var b = v.items.length - 1; 0 <= b; b--) {
									var c = v.items[b];
									u(c.group) ? Fb(c.element.parentNode) : Fb(c.element)
								}
							v = A.getOptions();
							var d = {};
							y && h.prepend(r.emptyOption);
							v.items.forEach(function(a) {
								var b;
								if (u(a.group)) {
									b = d[a.group];
									b || (b = f.cloneNode(!1), B.appendChild(b), b.label = null === a.group ?
										"null" : a.group, d[a.group] = b);
									var c = e.cloneNode(!1)
								} else b = B, c = e.cloneNode(!1);
								b.appendChild(c);
								n(a, c)
							});
							h[0].appendChild(B);
							s.$render();
							s.$isEmpty(a) || (b = r.readValue(), (A.trackBy || x ? pa(a, b) : a === b) || (s.$setViewValue(b), s.$render()))
						}
						var r = l[0],
							s = l[1],
							x = k.multiple;
						l = 0;
						for (var t = h.children(), w = t.length; l < w; l++)
							if ("" === t[l].value) {
								r.hasEmptyOption = !0;
								r.emptyOption = t.eq(l);
								break
							} var y = !!r.emptyOption;
						F(e.cloneNode(!1)).val("?");
						var v, A = c(k.ngOptions, h, d),
							B = b[0].createDocumentFragment();
						r.generateUnknownOptionValue =
							function(a) {
								return "?"
							};
						x ? (r.writeValue = function(a) {
							var b = a && a.map(m) || [];
							v.items.forEach(function(a) {
								a.element.selected && -1 === Array.prototype.indexOf.call(b, a) && (a.element.selected = !1)
							})
						}, r.readValue = function() {
							var a = h.val() || [],
								b = [];
							p(a, function(a) {
								(a = v.selectValueMap[a]) && !a.disabled && b.push(v.getViewValueFromOption(a))
							});
							return b
						}, A.trackBy && d.$watchCollection(function() {
							if (H(s.$viewValue)) return s.$viewValue.map(function(a) {
								return A.getTrackByValue(a)
							})
						}, function() {
							s.$render()
						})) : (r.writeValue =
							function(a) {
								var b = v.selectValueMap[h.val()],
									c = v.getOptionFromViewValue(a);
								b && b.element.removeAttribute("selected");
								c ? (h[0].value !== c.selectValue && (r.removeUnknownOption(), r.unselectEmptyOption(), h[0].value = c.selectValue, c.element.selected = !0), c.element.setAttribute("selected", "selected")) : y ? r.selectEmptyOption() : r.unknownOption.parent().length ? r.updateUnknownOption(a) : r.renderUnknownOption(a)
							}, r.readValue = function() {
								var a = v.selectValueMap[h.val()];
								return a && !a.disabled ? (r.unselectEmptyOption(), r.removeUnknownOption(),
									v.getViewValueFromOption(a)) : null
							}, A.trackBy && d.$watch(function() {
								return A.getTrackByValue(s.$viewValue)
							}, function() {
								s.$render()
							}));
						y && (r.emptyOption.remove(), a(r.emptyOption)(d), 8 === r.emptyOption[0].nodeType ? (r.hasEmptyOption = !1, r.registerOption = function(a, b) {
							"" === b.val() && (r.hasEmptyOption = !0, r.emptyOption = b, r.emptyOption.removeClass("ng-scope"), s.$render(), b.on("$destroy", function() {
								r.hasEmptyOption = !1;
								r.emptyOption = void 0
							}))
						}) : r.emptyOption.removeClass("ng-scope"));
						h.empty();
						q();
						d.$watchCollection(A.getWatchables,
							q)
					}
				}
			}
		}],
		Ye = ["$locale", "$interpolate", "$log", function(a, b, d) {
			var c = /{}/g,
				e = /^when(Minus)?(.+)$/;
			return {
				link: function(f, g, h) {
					function k(a) {
						g.text(a || "")
					}
					var l = h.count,
						m = h.$attr.when && g.attr(h.$attr.when),
						n = h.offset || 0,
						q = f.$eval(m) || {},
						r = {},
						s = b.startSymbol(),
						u = b.endSymbol(),
						t = s + l + "-" + n + u,
						w = ea.noop,
						y;
					p(h, function(a, b) {
						var c = e.exec(b);
						c && (c = (c[1] ? "-" : "") + P(c[2]), q[c] = g.attr(h.$attr[b]))
					});
					p(q, function(a, d) {
						r[d] = b(a.replace(c, t))
					});
					f.$watch(l, function(b) {
						var c = parseFloat(b),
							e = da(c);
						e || c in q || (c = a.pluralCat(c -
							n));
						c === y || e && da(y) || (w(), e = r[c], x(e) ? (null != b && d.debug("ngPluralize: no rule defined for '" + c + "' in " + m), w = A, k()) : w = f.$watch(e, k), y = c)
					})
				}
			}
		}],
		Ze = ["$parse", "$animate", "$compile", function(a, b, d) {
			var c = M("ngRepeat"),
				e = function(a, b, c, d, e, m, n) {
					a[c] = d;
					e && (a[e] = m);
					a.$index = b;
					a.$first = 0 === b;
					a.$last = b === n - 1;
					a.$middle = !(a.$first || a.$last);
					a.$odd = !(a.$even = 0 === (b & 1))
				};
			return {
				restrict: "A",
				multiElement: !0,
				transclude: "element",
				priority: 1E3,
				terminal: !0,
				$$tlb: !0,
				compile: function(f, g) {
					var h = g.ngRepeat,
						k = d.$$createComment("end ngRepeat",
							h),
						l = h.match(/^\s*([\s\S]+?)\s+in\s+([\s\S]+?)(?:\s+as\s+([\s\S]+?))?(?:\s+track\s+by\s+([\s\S]+?))?\s*$/);
					if (!l) throw c("iexp", h);
					var m = l[1],
						n = l[2],
						q = l[3],
						r = l[4],
						l = m.match(/^(?:(\s*[$\w]+)|\(\s*([$\w]+)\s*,\s*([$\w]+)\s*\))$/);
					if (!l) throw c("iidexp", m);
					var s = l[3] || l[1],
						u = l[2];
					if (q && (!/^[$a-zA-Z_][$a-zA-Z0-9_]*$/.test(q) || /^(null|undefined|this|\$index|\$first|\$middle|\$last|\$even|\$odd|\$parent|\$root|\$id)$/.test(q))) throw c("badident", q);
					var t, x, y, v, w = {
						$id: Pa
					};
					r ? t = a(r) : (y = function(a, b) {
							return Pa(b)
						},
						v = function(a) {
							return a
						});
					return function(a, d, f, g, l) {
						t && (x = function(b, c, d) {
							u && (w[u] = b);
							w[s] = c;
							w.$index = d;
							return t(a, w)
						});
						var m = V();
						a.$watchCollection(n, function(f) {
							var g, n, r = d[0],
								t, w = V(),
								A, E, F, D, G, C, H;
							q && (a[q] = f);
							if (ra(f)) G = f, n = x || y;
							else
								for (H in n = x || v, G = [], f) ua.call(f, H) && "$" !== H.charAt(0) && G.push(H);
							A = G.length;
							H = Array(A);
							for (g = 0; g < A; g++)
								if (E = f === G ? g : G[g], F = f[E], D = n(E, F, g), m[D]) C = m[D], delete m[D], w[D] = C, H[g] = C;
								else {
									if (w[D]) throw p(H, function(a) {
										a && a.scope && (m[a.id] = a)
									}), c("dupes", h, D, F);
									H[g] = {
										id: D,
										scope: void 0,
										clone: void 0
									};
									w[D] = !0
								} for (t in m) {
								C = m[t];
								D = ub(C.clone);
								b.leave(D);
								if (D[0].parentNode)
									for (g = 0, n = D.length; g < n; g++) D[g].$$NG_REMOVED = !0;
								C.scope.$destroy()
							}
							for (g = 0; g < A; g++)
								if (E = f === G ? g : G[g], F = f[E], C = H[g], C.scope) {
									t = r;
									do t = t.nextSibling; while (t && t.$$NG_REMOVED);
									C.clone[0] !== t && b.move(ub(C.clone), null, r);
									r = C.clone[C.clone.length - 1];
									e(C.scope, g, s, F, u, E, A)
								} else l(function(a, c) {
									C.scope = c;
									var d = k.cloneNode(!1);
									a[a.length++] = d;
									b.enter(a, null, r);
									r = d;
									C.clone = a;
									w[C.id] = C;
									e(C.scope, g, s, F, u, E, A)
								});
							m =
								w
						})
					}
				}
			}
		}],
		$e = ["$animate", function(a) {
			return {
				restrict: "A",
				multiElement: !0,
				link: function(b, d, c) {
					b.$watch(c.ngShow, function(b) {
						a[b ? "removeClass" : "addClass"](d, "ng-hide", {
							tempClasses: "ng-hide-animate"
						})
					})
				}
			}
		}],
		Te = ["$animate", function(a) {
			return {
				restrict: "A",
				multiElement: !0,
				link: function(b, d, c) {
					b.$watch(c.ngHide, function(b) {
						a[b ? "addClass" : "removeClass"](d, "ng-hide", {
							tempClasses: "ng-hide-animate"
						})
					})
				}
			}
		}],
		af = Qa(function(a, b, d) {
			a.$watch(d.ngStyle, function(a, d) {
					d && a !== d && p(d, function(a, c) {
						b.css(c, "")
					});
					a && b.css(a)
				},
				!0)
		}),
		bf = ["$animate", "$compile", function(a, b) {
			return {
				require: "ngSwitch",
				controller: ["$scope", function() {
					this.cases = {}
				}],
				link: function(d, c, e, f) {
					var g = [],
						h = [],
						k = [],
						l = [],
						m = function(a, b) {
							return function(c) {
								!1 !== c && a.splice(b, 1)
							}
						};
					d.$watch(e.ngSwitch || e.on, function(c) {
						for (var d, e; k.length;) a.cancel(k.pop());
						d = 0;
						for (e = l.length; d < e; ++d) {
							var s = ub(h[d].clone);
							l[d].$destroy();
							(k[d] = a.leave(s)).done(m(k, d))
						}
						h.length = 0;
						l.length = 0;
						(g = f.cases["!" + c] || f.cases["?"]) && p(g, function(c) {
							c.transclude(function(d, e) {
								l.push(e);
								var f = c.element;
								d[d.length++] = b.$$createComment("end ngSwitchWhen");
								h.push({
									clone: d
								});
								a.enter(d, f.parent(), f)
							})
						})
					})
				}
			}
		}],
		cf = Qa({
			transclude: "element",
			priority: 1200,
			require: "^ngSwitch",
			multiElement: !0,
			link: function(a, b, d, c, e) {
				a = d.ngSwitchWhen.split(d.ngSwitchWhenSeparator).sort().filter(function(a, b, c) {
					return c[b - 1] !== a
				});
				p(a, function(a) {
					c.cases["!" + a] = c.cases["!" + a] || [];
					c.cases["!" + a].push({
						transclude: e,
						element: b
					})
				})
			}
		}),
		df = Qa({
			transclude: "element",
			priority: 1200,
			require: "^ngSwitch",
			multiElement: !0,
			link: function(a,
				b, d, c, e) {
				c.cases["?"] = c.cases["?"] || [];
				c.cases["?"].push({
					transclude: e,
					element: b
				})
			}
		}),
		hh = M("ngTransclude"),
		ff = ["$compile", function(a) {
			return {
				restrict: "EAC",
				terminal: !0,
				compile: function(b) {
					var d = a(b.contents());
					b.empty();
					return function(a, b, f, g, h) {
						function k() {
							d(a, function(a) {
								b.append(a)
							})
						}
						if (!h) throw hh("orphan", xa(b));
						f.ngTransclude === f.$attr.ngTransclude && (f.ngTransclude = "");
						f = f.ngTransclude || f.ngTranscludeSlot;
						h(function(a, c) {
							var d;
							if (d = a.length) a: {
								d = 0;
								for (var f = a.length; d < f; d++) {
									var g = a[d];
									if (g.nodeType !==
										Ia || g.nodeValue.trim()) {
										d = !0;
										break a
									}
								}
								d = void 0
							}
							d ? b.append(a) : (k(), c.$destroy())
						}, null, f);
						f && !h.isSlotFilled(f) && k()
					}
				}
			}
		}],
		He = ["$templateCache", function(a) {
			return {
				restrict: "E",
				terminal: !0,
				compile: function(b, d) {
					"text/ng-template" === d.type && a.put(d.id, b[0].text)
				}
			}
		}],
		ih = {
			$setViewValue: A,
			$render: A
		},
		jh = ["$element", "$scope", function(a, b) {
			function d() {
				g || (g = !0, b.$$postDigest(function() {
					g = !1;
					e.ngModelCtrl.$render()
				}))
			}

			function c(a) {
				h || (h = !0, b.$$postDigest(function() {
					b.$$destroyed || (h = !1, e.ngModelCtrl.$setViewValue(e.readValue()),
						a && e.ngModelCtrl.$render())
				}))
			}
			var e = this,
				f = new Hb;
			e.selectValueMap = {};
			e.ngModelCtrl = ih;
			e.multiple = !1;
			e.unknownOption = F(w.document.createElement("option"));
			e.hasEmptyOption = !1;
			e.emptyOption = void 0;
			e.renderUnknownOption = function(b) {
				b = e.generateUnknownOptionValue(b);
				e.unknownOption.val(b);
				a.prepend(e.unknownOption);
				Ta(e.unknownOption, !0);
				a.val(b)
			};
			e.updateUnknownOption = function(b) {
				b = e.generateUnknownOptionValue(b);
				e.unknownOption.val(b);
				Ta(e.unknownOption, !0);
				a.val(b)
			};
			e.generateUnknownOptionValue =
				function(a) {
					return "? " + Pa(a) + " ?"
				};
			e.removeUnknownOption = function() {
				e.unknownOption.parent() && e.unknownOption.remove()
			};
			e.selectEmptyOption = function() {
				e.emptyOption && (a.val(""), Ta(e.emptyOption, !0))
			};
			e.unselectEmptyOption = function() {
				e.hasEmptyOption && e.emptyOption.removeAttr("selected")
			};
			b.$on("$destroy", function() {
				e.renderUnknownOption = A
			});
			e.readValue = function() {
				var b = a.val(),
					b = b in e.selectValueMap ? e.selectValueMap[b] : b;
				return e.hasOption(b) ? b : null
			};
			e.writeValue = function(b) {
				var c = a[0].options[a[0].selectedIndex];
				c && Ta(F(c), !1);
				e.hasOption(b) ? (e.removeUnknownOption(), c = Pa(b), a.val(c in e.selectValueMap ? c : b), Ta(F(a[0].options[a[0].selectedIndex]), !0)) : null == b && e.emptyOption ? (e.removeUnknownOption(), e.selectEmptyOption()) : e.unknownOption.parent().length ? e.updateUnknownOption(b) : e.renderUnknownOption(b)
			};
			e.addOption = function(a, b) {
				if (8 !== b[0].nodeType) {
					Ka(a, '"option value"');
					"" === a && (e.hasEmptyOption = !0, e.emptyOption = b);
					var c = f.get(a) || 0;
					f.set(a, c + 1);
					d()
				}
			};
			e.removeOption = function(a) {
				var b = f.get(a);
				b && (1 === b ? (f.delete(a),
					"" === a && (e.hasEmptyOption = !1, e.emptyOption = void 0)) : f.set(a, b - 1))
			};
			e.hasOption = function(a) {
				return !!f.get(a)
			};
			var g = !1,
				h = !1;
			e.registerOption = function(a, b, f, g, h) {
				if (f.$attr.ngValue) {
					var p, s = NaN;
					f.$observe("value", function(a) {
						var d, f = b.prop("selected");
						u(s) && (e.removeOption(p), delete e.selectValueMap[s], d = !0);
						s = Pa(a);
						p = a;
						e.selectValueMap[s] = a;
						e.addOption(a, b);
						b.attr("value", s);
						d && f && c()
					})
				} else g ? f.$observe("value", function(a) {
					e.readValue();
					var d, f = b.prop("selected");
					u(p) && (e.removeOption(p), d = !0);
					p =
						a;
					e.addOption(a, b);
					d && f && c()
				}) : h ? a.$watch(h, function(a, d) {
					f.$set("value", a);
					var g = b.prop("selected");
					d !== a && e.removeOption(d);
					e.addOption(a, b);
					d && g && c()
				}) : e.addOption(f.value, b);
				f.$observe("disabled", function(a) {
					if ("true" === a || a && b.prop("selected")) e.multiple ? c(!0) : (e.ngModelCtrl.$setViewValue(null), e.ngModelCtrl.$render())
				});
				b.on("$destroy", function() {
					var a = e.readValue(),
						b = f.value;
					e.removeOption(b);
					d();
					(e.multiple && a && -1 !== a.indexOf(b) || a === b) && c(!0)
				})
			}
		}],
		Ie = function() {
			return {
				restrict: "E",
				require: ["select",
					"?ngModel"
				],
				controller: jh,
				priority: 1,
				link: {
					pre: function(a, b, d, c) {
						var e = c[0],
							f = c[1];
						if (f) {
							if (e.ngModelCtrl = f, b.on("change", function() {
									e.removeUnknownOption();
									a.$apply(function() {
										f.$setViewValue(e.readValue())
									})
								}), d.multiple) {
								e.multiple = !0;
								e.readValue = function() {
									var a = [];
									p(b.find("option"), function(b) {
										b.selected && !b.disabled && (b = b.value, a.push(b in e.selectValueMap ? e.selectValueMap[b] : b))
									});
									return a
								};
								e.writeValue = function(a) {
									p(b.find("option"), function(b) {
										var c = !!a && (-1 !== Array.prototype.indexOf.call(a,
											b.value) || -1 !== Array.prototype.indexOf.call(a, e.selectValueMap[b.value]));
										c !== b.selected && Ta(F(b), c)
									})
								};
								var g, h = NaN;
								a.$watch(function() {
									h !== f.$viewValue || pa(g, f.$viewValue) || (g = qa(f.$viewValue), f.$render());
									h = f.$viewValue
								});
								f.$isEmpty = function(a) {
									return !a || 0 === a.length
								}
							}
						} else e.registerOption = A
					},
					post: function(a, b, d, c) {
						var e = c[1];
						if (e) {
							var f = c[0];
							e.$render = function() {
								f.writeValue(e.$viewValue)
							}
						}
					}
				}
			}
		},
		Je = ["$interpolate", function(a) {
			return {
				restrict: "E",
				priority: 100,
				compile: function(b, d) {
					var c, e;
					u(d.ngValue) ||
						(u(d.value) ? c = a(d.value, !0) : (e = a(b.text(), !0)) || d.$set("value", b.text()));
					return function(a, b, d) {
						var k = b.parent();
						(k = k.data("$selectController") || k.parent().data("$selectController")) && k.registerOption(a, b, d, c, e)
					}
				}
			}
		}],
		Wc = function() {
			return {
				restrict: "A",
				require: "?ngModel",
				link: function(a, b, d, c) {
					c && (d.required = !0, c.$validators.required = function(a, b) {
						return !d.required || !c.$isEmpty(b)
					}, d.$observe("required", function() {
						c.$validate()
					}))
				}
			}
		},
		Vc = function() {
			return {
				restrict: "A",
				require: "?ngModel",
				link: function(a,
					b, d, c) {
					if (c) {
						var e, f = d.ngPattern || d.pattern;
						d.$observe("pattern", function(a) {
							D(a) && 0 < a.length && (a = new RegExp("^" + a + "$"));
							if (a && !a.test) throw M("ngPattern")("noregexp", f, a, xa(b));
							e = a || void 0;
							c.$validate()
						});
						c.$validators.pattern = function(a, b) {
							return c.$isEmpty(b) || x(e) || e.test(b)
						}
					}
				}
			}
		},
		Yc = function() {
			return {
				restrict: "A",
				require: "?ngModel",
				link: function(a, b, d, c) {
					if (c) {
						var e = -1;
						d.$observe("maxlength", function(a) {
							a = Z(a);
							e = da(a) ? -1 : a;
							c.$validate()
						});
						c.$validators.maxlength = function(a, b) {
							return 0 > e || c.$isEmpty(b) ||
								b.length <= e
						}
					}
				}
			}
		},
		Xc = function() {
			return {
				restrict: "A",
				require: "?ngModel",
				link: function(a, b, d, c) {
					if (c) {
						var e = 0;
						d.$observe("minlength", function(a) {
							e = Z(a) || 0;
							c.$validate()
						});
						c.$validators.minlength = function(a, b) {
							return c.$isEmpty(b) || b.length >= e
						}
					}
				}
			}
		};
	w.angular.bootstrap ? w.console && console.log("WARNING: Tried to load angular more than once.") : (ze(), Ce(ea), ea.module("ngLocale", [], ["$provide", function(a) {
		function b(a) {
			a += "";
			var b = a.indexOf(".");
			return -1 == b ? 0 : a.length - b - 1
		}
		a.value("$locale", {
			DATETIME_FORMATS: {
				AMPMS: ["AM",
					"PM"
				],
				DAY: "Sunday Monday Tuesday Wednesday Thursday Friday Saturday".split(" "),
				ERANAMES: ["Before Christ", "Anno Domini"],
				ERAS: ["BC", "AD"],
				FIRSTDAYOFWEEK: 6,
				MONTH: "January February March April May June July August September October November December".split(" "),
				SHORTDAY: "Sun Mon Tue Wed Thu Fri Sat".split(" "),
				SHORTMONTH: "Jan Feb Mar Apr May Jun Jul Aug Sep Oct Nov Dec".split(" "),
				STANDALONEMONTH: "January February March April May June July August September October November December".split(" "),
				WEEKENDRANGE: [5,
					6
				],
				fullDate: "EEEE, MMMM d, y",
				longDate: "MMMM d, y",
				medium: "MMM d, y h:mm:ss a",
				mediumDate: "MMM d, y",
				mediumTime: "h:mm:ss a",
				"short": "M/d/yy h:mm a",
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
					negPre: "-\u00a4",
					negSuf: "",
					posPre: "\u00a4",
					posSuf: ""
				}]
			},
			id: "en-us",
			localeID: "en_US",
			pluralCat: function(a,
				c) {
				var e = a | 0,
					f = c;
				void 0 === f && (f = Math.min(b(a), 3));
				Math.pow(10, f);
				return 1 == e && 0 == f ? "one" : "other"
			}
		})
	}]), F(function() {
		ue(w.document, Pc)
	}))
})(window);
!window.angular.$$csp().noInlineStyle && window.angular.element(document.head).prepend('<style type="text/css">@charset "UTF-8";[ng\\:cloak],[ng-cloak],[data-ng-cloak],[x-ng-cloak],.ng-cloak,.x-ng-cloak,.ng-hide:not(.ng-hide-animate){display:none !important;}ng\\:form{display:block;}.ng-animate-shim{visibility:hidden;}.ng-anchor{position:absolute;}</style>');


; // angular/angular-sanitize.min.js
/*
 AngularJS v1.6.3
 (c) 2010-2017 Google, Inc. http://angularjs.org
 License: MIT
*/
(function(s, f) {
	'use strict';

	function J(f) {
		var k = [];
		v(k, B).chars(f);
		return k.join("")
	}
	var w = f.$$minErr("$sanitize"),
		C, k, D, E, q, B, F, G, v;
	f.module("ngSanitize", []).provider("$sanitize", function() {
		function h(a, c) {
			var b = {},
				d = a.split(","),
				l;
			for (l = 0; l < d.length; l++) b[c ? q(d[l]) : d[l]] = !0;
			return b
		}

		function K(a) {
			for (var c = {}, b = 0, d = a.length; b < d; b++) {
				var l = a[b];
				c[l.name] = l.value
			}
			return c
		}

		function H(a) {
			return a.replace(/&/g, "&amp;").replace(L, function(a) {
				var b = a.charCodeAt(0);
				a = a.charCodeAt(1);
				return "&#" + (1024 * (b -
					55296) + (a - 56320) + 65536) + ";"
			}).replace(M, function(a) {
				return "&#" + a.charCodeAt(0) + ";"
			}).replace(/</g, "&lt;").replace(/>/g, "&gt;")
		}

		function I(a) {
			for (; a;) {
				if (a.nodeType === s.Node.ELEMENT_NODE)
					for (var c = a.attributes, b = 0, d = c.length; b < d; b++) {
						var l = c[b],
							e = l.name.toLowerCase();
						if ("xmlns:ns1" === e || 0 === e.lastIndexOf("ns1:", 0)) a.removeAttributeNode(l), b--, d--
					}(c = a.firstChild) && I(c);
				a = t("nextSibling", a)
			}
		}

		function t(a, c) {
			var b = c[a];
			if (b && F.call(c, b)) throw w("elclob", c.outerHTML || c.outerText);
			return b
		}
		var x = !1;
		this.$get = ["$$sanitizeUri", function(a) {
			x && k(p, z);
			return function(c) {
				var b = [];
				G(c, v(b, function(b, c) {
					return !/^unsafe:/.test(a(b, c))
				}));
				return b.join("")
			}
		}];
		this.enableSvg = function(a) {
			return E(a) ? (x = a, this) : x
		};
		C = f.bind;
		k = f.extend;
		D = f.forEach;
		E = f.isDefined;
		q = f.lowercase;
		B = f.noop;
		G = function(a, c) {
			null === a || void 0 === a ? a = "" : "string" !== typeof a && (a = "" + a);
			g.innerHTML = a;
			var b = 5;
			do {
				if (0 === b) throw w("uinput");
				b--;
				s.document.documentMode && I(g);
				a = g.innerHTML;
				g.innerHTML = a
			} while (a !== g.innerHTML);
			for (b = g.firstChild; b;) {
				switch (b.nodeType) {
					case 1:
						c.start(b.nodeName.toLowerCase(),
							K(b.attributes));
						break;
					case 3:
						c.chars(b.textContent)
				}
				var d;
				if (!(d = b.firstChild) && (1 === b.nodeType && c.end(b.nodeName.toLowerCase()), d = t("nextSibling", b), !d))
					for (; null == d;) {
						b = t("parentNode", b);
						if (b === g) break;
						d = t("nextSibling", b);
						1 === b.nodeType && c.end(b.nodeName.toLowerCase())
					}
				b = d
			}
			for (; b = g.firstChild;) g.removeChild(b)
		};
		v = function(a, c) {
			var b = !1,
				d = C(a, a.push);
			return {
				start: function(a, e) {
					a = q(a);
					!b && A[a] && (b = a);
					b || !0 !== p[a] || (d("<"), d(a), D(e, function(b, e) {
						var f = q(e),
							g = "img" === a && "src" === f || "background" ===
							f;
						!0 !== u[f] || !0 === n[f] && !c(b, g) || (d(" "), d(e), d('="'), d(H(b)), d('"'))
					}), d(">"))
				},
				end: function(a) {
					a = q(a);
					b || !0 !== p[a] || !0 === e[a] || (d("</"), d(a), d(">"));
					a == b && (b = !1)
				},
				chars: function(a) {
					b || d(H(a))
				}
			}
		};
		F = s.Node.prototype.contains || function(a) {
			return !!(this.compareDocumentPosition(a) & 16)
		};
		var L = /[\uD800-\uDBFF][\uDC00-\uDFFF]/g,
			M = /([^#-~ |!])/g,
			e = h("area,br,col,hr,img,wbr"),
			y = h("colgroup,dd,dt,li,p,tbody,td,tfoot,th,thead,tr"),
			m = h("rp,rt"),
			r = k({}, m, y),
			y = k({}, y, h("address,article,aside,blockquote,caption,center,del,dir,div,dl,figure,figcaption,footer,h1,h2,h3,h4,h5,h6,header,hgroup,hr,ins,map,menu,nav,ol,pre,section,table,ul")),
			m = k({}, m, h("a,abbr,acronym,b,bdi,bdo,big,br,cite,code,del,dfn,em,font,i,img,ins,kbd,label,map,mark,q,ruby,rp,rt,s,samp,small,span,strike,strong,sub,sup,time,tt,u,var")),
			z = h("circle,defs,desc,ellipse,font-face,font-face-name,font-face-src,g,glyph,hkern,image,linearGradient,line,marker,metadata,missing-glyph,mpath,path,polygon,polyline,radialGradient,rect,stop,svg,switch,text,title,tspan"),
			A = h("script,style"),
			p = k({}, e, y, m, r),
			n = h("background,cite,href,longdesc,src,xlink:href"),
			r = h("abbr,align,alt,axis,bgcolor,border,cellpadding,cellspacing,class,clear,color,cols,colspan,compact,coords,dir,face,headers,height,hreflang,hspace,ismap,lang,language,nohref,nowrap,rel,rev,rows,rowspan,rules,scope,scrolling,shape,size,span,start,summary,tabindex,target,title,type,valign,value,vspace,width"),
			m = h("accent-height,accumulate,additive,alphabetic,arabic-form,ascent,baseProfile,bbox,begin,by,calcMode,cap-height,class,color,color-rendering,content,cx,cy,d,dx,dy,descent,display,dur,end,fill,fill-rule,font-family,font-size,font-stretch,font-style,font-variant,font-weight,from,fx,fy,g1,g2,glyph-name,gradientUnits,hanging,height,horiz-adv-x,horiz-origin-x,ideographic,k,keyPoints,keySplines,keyTimes,lang,marker-end,marker-mid,marker-start,markerHeight,markerUnits,markerWidth,mathematical,max,min,offset,opacity,orient,origin,overline-position,overline-thickness,panose-1,path,pathLength,points,preserveAspectRatio,r,refX,refY,repeatCount,repeatDur,requiredExtensions,requiredFeatures,restart,rotate,rx,ry,slope,stemh,stemv,stop-color,stop-opacity,strikethrough-position,strikethrough-thickness,stroke,stroke-dasharray,stroke-dashoffset,stroke-linecap,stroke-linejoin,stroke-miterlimit,stroke-opacity,stroke-width,systemLanguage,target,text-anchor,to,transform,type,u1,u2,underline-position,underline-thickness,unicode,unicode-range,units-per-em,values,version,viewBox,visibility,width,widths,x,x-height,x1,x2,xlink:actuate,xlink:arcrole,xlink:role,xlink:show,xlink:title,xlink:type,xml:base,xml:lang,xml:space,xmlns,xmlns:xlink,y,y1,y2,zoomAndPan",
				!0),
			u = k({}, n, m, r),
			g;
		(function(a) {
			if (a.document && a.document.implementation) a = a.document.implementation.createHTMLDocument("inert");
			else throw w("noinert");
			var c = (a.documentElement || a.getDocumentElement()).getElementsByTagName("body");
			1 === c.length ? g = c[0] : (c = a.createElement("html"), g = a.createElement("body"), c.appendChild(g), a.appendChild(c))
		})(s)
	}).info({
		angularVersion: "1.6.3"
	});
	f.module("ngSanitize").filter("linky", ["$sanitize", function(h) {
		var k = /((ftp|https?):\/\/|(www\.)|(mailto:)?[A-Za-z0-9._%+-]+@)\S*[^\s.;,(){}<>"\u201d\u2019]/i,
			q = /^mailto:/i,
			s = f.$$minErr("linky"),
			t = f.isDefined,
			x = f.isFunction,
			v = f.isObject,
			w = f.isString;
		return function(e, f, m) {
			function r(a) {
				a && n.push(J(a))
			}

			function z(a, c) {
				var b, d = A(a);
				n.push("<a ");
				for (b in d) n.push(b + '="' + d[b] + '" ');
				!t(f) || "target" in d || n.push('target="', f, '" ');
				n.push('href="', a.replace(/"/g, "&quot;"), '">');
				r(c);
				n.push("</a>")
			}
			if (null == e || "" === e) return e;
			if (!w(e)) throw s("notstring", e);
			for (var A = x(m) ? m : v(m) ? function() {
					return m
				} : function() {
					return {}
				}, p = e, n = [], u, g; e = p.match(k);) u = e[0], e[2] ||
				e[4] || (u = (e[3] ? "http://" : "mailto:") + u), g = e.index, r(p.substr(0, g)), z(u, e[0].replace(q, "")), p = p.substring(g + e[0].length);
			r(p);
			return h(n.join(""))
		}
	}])
})(window, window.angular);


; // angular/angular-ui-router.min.js
/**
 * State-based routing for AngularJS
 * @version v0.4.2
 * @link http://angular-ui.github.com/
 * @license MIT License, http://www.opensource.org/licenses/MIT
 */
"undefined" != typeof module && "undefined" != typeof exports && module.exports === exports && (module.exports = "ui.router"),
	function(a, b, c) {
		"use strict";

		function d(a, b) {
			return T(new(T(function() {}, {
				prototype: a
			})), b)
		}

		function e(a) {
			return S(arguments, function(b) {
				b !== a && S(b, function(b, c) {
					a.hasOwnProperty(c) || (a[c] = b)
				})
			}), a
		}

		function f(a, b) {
			var c = [];
			for (var d in a.path) {
				if (a.path[d] !== b.path[d]) break;
				c.push(a.path[d])
			}
			return c
		}

		function g(a) {
			if (Object.keys) return Object.keys(a);
			var b = [];
			return S(a, function(a, c) {
				b.push(c)
			}), b
		}

		function h(a, b) {
			if (Array.prototype.indexOf) return a.indexOf(b, Number(arguments[2]) || 0);
			var c = a.length >>> 0,
				d = Number(arguments[2]) || 0;
			for (d = d < 0 ? Math.ceil(d) : Math.floor(d), d < 0 && (d += c); d < c; d++)
				if (d in a && a[d] === b) return d;
			return -1
		}

		function i(a, b, c, d) {
			var e, i = f(c, d),
				j = {},
				k = [];
			for (var l in i)
				if (i[l] && i[l].params && (e = g(i[l].params), e.length))
					for (var m in e) h(k, e[m]) >= 0 || (k.push(e[m]), j[e[m]] = a[e[m]]);
			return T({}, j, b)
		}

		function j(a, b, c) {
			if (!c) {
				c = [];
				for (var d in a) c.push(d)
			}
			for (var e = 0; e < c.length; e++) {
				var f = c[e];
				if (a[f] != b[f]) return !1
			}
			return !0
		}

		function k(a, b) {
			var c = {};
			return S(a, function(a) {
				c[a] = b[a]
			}), c
		}

		function l(a) {
			var b = {},
				c = Array.prototype.concat.apply(Array.prototype, Array.prototype.slice.call(arguments, 1));
			return S(c, function(c) {
				c in a && (b[c] = a[c])
			}), b
		}

		function m(a) {
			var b = {},
				c = Array.prototype.concat.apply(Array.prototype, Array.prototype.slice.call(arguments, 1));
			for (var d in a) h(c, d) == -1 && (b[d] = a[d]);
			return b
		}

		function n(a, b) {
			var c = R(a),
				d = c ? [] : {};
			return S(a, function(a, e) {
				b(a, e) && (d[c ? d.length : e] = a)
			}), d
		}

		function o(a, b) {
			var c = R(a) ? [] : {};
			return S(a, function(a, d) {
				c[d] = b(a, d)
			}), c
		}

		function p(a) {
			return a.then(c, function() {}) && a
		}

		function q(a, b) {
			var d = 1,
				f = 2,
				i = {},
				j = [],
				k = i,
				l = T(a.when(i), {
					$$promises: i,
					$$values: i
				});
			this.study = function(i) {
				function n(a, c) {
					if (t[c] !== f) {
						if (s.push(c), t[c] === d) throw s.splice(0, h(s, c)), new Error("Cyclic dependency: " + s.join(" -> "));
						if (t[c] = d, P(a)) r.push(c, [function() {
							return b.get(a)
						}], j);
						else {
							var e = b.annotate(a);
							S(e, function(a) {
								a !== c && i.hasOwnProperty(a) && n(i[a], a)
							}), r.push(c, a, e)
						}
						s.pop(), t[c] = f
					}
				}

				function o(a) {
					return Q(a) && a.then && a.$$promises
				}
				if (!Q(i)) throw new Error("'invocables' must be an object");
				var q = g(i || {}),
					r = [],
					s = [],
					t = {};
				return S(i, n), i = s = t = null,
					function(d, f, g) {
						function h() {
							--v || (w || e(u, f.$$values), s.$$values = u, s.$$promises = s.$$promises || !0, delete s.$$inheritedValues, n.resolve(u))
						}

						function i(a) {
							s.$$failure = a, n.reject(a)
						}

						function j(c, e, f) {
							function j(a) {
								l.reject(a), i(a)
							}

							function k() {
								if (!N(s.$$failure)) try {
									l.resolve(b.invoke(e, g, u)), l.promise.then(function(a) {
										u[c] = a, h()
									}, j)
								} catch (a) {
									j(a)
								}
							}
							var l = a.defer(),
								m = 0;
							S(f, function(a) {
								t.hasOwnProperty(a) && !d.hasOwnProperty(a) && (m++, t[a].then(function(b) {
									u[a] = b, --m || k()
								}, j))
							}), m || k(), t[c] = p(l.promise)
						}
						if (o(d) && g === c && (g = f, f = d, d = null), d) {
							if (!Q(d)) throw new Error("'locals' must be an object")
						} else d = k;
						if (f) {
							if (!o(f)) throw new Error("'parent' must be a promise returned by $resolve.resolve()")
						} else f = l;
						var n = a.defer(),
							s = p(n.promise),
							t = s.$$promises = {},
							u = T({}, d),
							v = 1 + r.length / 3,
							w = !1;
						if (p(s), N(f.$$failure)) return i(f.$$failure), s;
						f.$$inheritedValues && e(u, m(f.$$inheritedValues, q)), T(t, f.$$promises), f.$$values ? (w = e(u, m(f.$$values, q)), s.$$inheritedValues = m(f.$$values, q), h()) : (f.$$inheritedValues && (s.$$inheritedValues = m(f.$$inheritedValues, q)), f.then(h, i));
						for (var x = 0, y = r.length; x < y; x += 3) d.hasOwnProperty(r[x]) ? h() : j(r[x], r[x + 1], r[x + 2]);
						return s
					}
			}, this.resolve = function(a, b, c, d) {
				return this.study(a)(b, c, d)
			}
		}

		function r() {
			var a = b.version.minor < 3;
			this.shouldUnsafelyUseHttp = function(b) {
				a = !!b
			}, this.$get = ["$http", "$templateCache", "$injector", function(b, c, d) {
				return new s(b, c, d, a)
			}]
		}

		function s(a, b, c, d) {
			this.fromConfig = function(a, b, c) {
				return N(a.template) ? this.fromString(a.template, b) : N(a.templateUrl) ? this.fromUrl(a.templateUrl, b) : N(a.templateProvider) ? this.fromProvider(a.templateProvider, b, c) : null
			}, this.fromString = function(a, b) {
				return O(a) ? a(b) : a
			}, this.fromUrl = function(e, f) {
				return O(e) && (e = e(f)), null == e ? null : d ? a.get(e, {
					cache: b,
					headers: {
						Accept: "text/html"
					}
				}).then(function(a) {
					return a.data
				}) : c.get("$templateRequest")(e)
			}, this.fromProvider = function(a, b, d) {
				return c.invoke(a, null, d || {
					params: b
				})
			}
		}

		function t(a, b, e) {
			function f(b, c, d, e) {
				if (q.push(b), o[b]) return o[b];
				if (!/^\w+([-.]+\w+)*(?:\[\])?$/.test(b)) throw new Error("Invalid parameter name '" + b + "' in pattern '" + a + "'");
				if (p[b]) throw new Error("Duplicate parameter name '" + b + "' in pattern '" + a + "'");
				return p[b] = new W.Param(b, c, d, e), p[b]
			}

			function g(a, b, c, d) {
				var e = ["", ""],
					f = a.replace(/[\\\[\]\^$*+?.()|{}]/g, "\\$&");
				if (!b) return f;
				switch (c) {
					case !1:
						e = ["(", ")" + (d ? "?" : "")];
						break;
					case !0:
						f = f.replace(/\/$/, ""), e = ["(?:/(", ")|/)?"];
						break;
					default:
						e = ["(" + c + "|", ")?"]
				}
				return f + e[0] + b + e[1]
			}

			function h(e, f) {
				var g, h, i, j, k;
				return g = e[2] || e[3], k = b.params[g], i = a.substring(m, e.index), h = f ? e[4] : e[4] || ("*" == e[1] ? ".*" : null), h && (j = W.type(h) || d(W.type("string"), {
					pattern: new RegExp(h, b.caseInsensitive ? "i" : c)
				})), {
					id: g,
					regexp: h,
					segment: i,
					type: j,
					cfg: k
				}
			}
			b = T({
				params: {}
			}, Q(b) ? b : {});
			var i, j = /([:*])([\w\[\]]+)|\{([\w\[\]]+)(?:\:\s*((?:[^{}\\]+|\\.|\{(?:[^{}\\]+|\\.)*\})+))?\}/g,
				k = /([:]?)([\w\[\].-]+)|\{([\w\[\].-]+)(?:\:\s*((?:[^{}\\]+|\\.|\{(?:[^{}\\]+|\\.)*\})+))?\}/g,
				l = "^",
				m = 0,
				n = this.segments = [],
				o = e ? e.params : {},
				p = this.params = e ? e.params.$$new() : new W.ParamSet,
				q = [];
			this.source = a;
			for (var r, s, t;
				(i = j.exec(a)) && (r = h(i, !1), !(r.segment.indexOf("?") >= 0));) s = f(r.id, r.type, r.cfg, "path"), l += g(r.segment, s.type.pattern.source, s.squash, s.isOptional), n.push(r.segment), m = j.lastIndex;
			t = a.substring(m);
			var u = t.indexOf("?");
			if (u >= 0) {
				var v = this.sourceSearch = t.substring(u);
				if (t = t.substring(0, u), this.sourcePath = a.substring(0, m + u), v.length > 0)
					for (m = 0; i = k.exec(v);) r = h(i, !0), s = f(r.id, r.type, r.cfg, "search"), m = j.lastIndex
			} else this.sourcePath = a, this.sourceSearch = "";
			l += g(t) + (b.strict === !1 ? "/?" : "") + "$", n.push(t), this.regexp = new RegExp(l, b.caseInsensitive ? "i" : c), this.prefix = n[0], this.$$paramNames = q
		}

		function u(a) {
			T(this, a)
		}

		function v() {
			function a(a) {
				return null != a ? a.toString().replace(/(~|\/)/g, function(a) {
					return {
						"~": "~~",
						"/": "~2F"
					} [a]
				}) : a
			}

			function e(a) {
				return null != a ? a.toString().replace(/(~~|~2F)/g, function(a) {
					return {
						"~~": "~",
						"~2F": "/"
					} [a]
				}) : a
			}

			function f() {
				return {
					strict: p,
					caseInsensitive: m
				}
			}

			function i(a) {
				return O(a) || R(a) && O(a[a.length - 1])
			}

			function j() {
				for (; w.length;) {
					var a = w.shift();
					if (a.pattern) throw new Error("You cannot override a type's .pattern at runtime.");
					b.extend(r[a.name], l.invoke(a.def))
				}
			}

			function k(a) {
				T(this, a || {})
			}
			W = this;
			var l, m = !1,
				p = !0,
				q = !1,
				r = {},
				s = !0,
				w = [],
				x = {
					string: {
						encode: a,
						decode: e,
						is: function(a) {
							return null == a || !N(a) || "string" == typeof a
						},
						pattern: /[^\/]*/
					},
					int: {
						encode: a,
						decode: function(a) {
							return parseInt(a, 10)
						},
						is: function(a) {
							return a !== c && null !== a && this.decode(a.toString()) === a
						},
						pattern: /\d+/
					},
					bool: {
						encode: function(a) {
							return a ? 1 : 0
						},
						decode: function(a) {
							return 0 !== parseInt(a, 10)
						},
						is: function(a) {
							return a === !0 || a === !1
						},
						pattern: /0|1/
					},
					date: {
						encode: function(a) {
							return this.is(a) ? [a.getFullYear(), ("0" + (a.getMonth() + 1)).slice(-2), ("0" + a.getDate()).slice(-2)].join("-") : c
						},
						decode: function(a) {
							if (this.is(a)) return a;
							var b = this.capture.exec(a);
							return b ? new Date(b[1], b[2] - 1, b[3]) : c
						},
						is: function(a) {
							return a instanceof Date && !isNaN(a.valueOf())
						},
						equals: function(a, b) {
							return this.is(a) && this.is(b) && a.toISOString() === b.toISOString()
						},
						pattern: /[0-9]{4}-(?:0[1-9]|1[0-2])-(?:0[1-9]|[1-2][0-9]|3[0-1])/,
						capture: /([0-9]{4})-(0[1-9]|1[0-2])-(0[1-9]|[1-2][0-9]|3[0-1])/
					},
					json: {
						encode: b.toJson,
						decode: b.fromJson,
						is: b.isObject,
						equals: b.equals,
						pattern: /[^\/]*/
					},
					any: {
						encode: b.identity,
						decode: b.identity,
						equals: b.equals,
						pattern: /.*/
					}
				};
			v.$$getDefaultValue = function(a) {
				if (!i(a.value)) return a.value;
				if (!l) throw new Error("Injectable functions cannot be called at configuration time");
				return l.invoke(a.value)
			}, this.caseInsensitive = function(a) {
				return N(a) && (m = a), m
			}, this.strictMode = function(a) {
				return N(a) && (p = a), p
			}, this.defaultSquashPolicy = function(a) {
				if (!N(a)) return q;
				if (a !== !0 && a !== !1 && !P(a)) throw new Error("Invalid squash policy: " + a + ". Valid policies: false, true, arbitrary-string");
				return q = a, a
			}, this.compile = function(a, b) {
				return new t(a, T(f(), b))
			}, this.isMatcher = function(a) {
				if (!Q(a)) return !1;
				var b = !0;
				return S(t.prototype, function(c, d) {
					O(c) && (b = b && N(a[d]) && O(a[d]))
				}), b
			}, this.type = function(a, b, c) {
				if (!N(b)) return r[a];
				if (r.hasOwnProperty(a)) throw new Error("A type named '" + a + "' has already been defined.");
				return r[a] = new u(T({
					name: a
				}, b)), c && (w.push({
					name: a,
					def: c
				}), s || j()), this
			}, S(x, function(a, b) {
				r[b] = new u(T({
					name: b
				}, a))
			}), r = d(r, {}), this.$get = ["$injector", function(a) {
				return l = a, s = !1, j(), S(x, function(a, b) {
					r[b] || (r[b] = new u(a))
				}), this
			}], this.Param = function(a, d, e, f) {
				function j(a) {
					var b = Q(a) ? g(a) : [],
						c = h(b, "value") === -1 && h(b, "type") === -1 && h(b, "squash") === -1 && h(b, "array") === -1;
					return c && (a = {
						value: a
					}), a.$$fn = i(a.value) ? a.value : function() {
						return a.value
					}, a
				}

				function k(c, d, e) {
					if (c.type && d) throw new Error("Param '" + a + "' has two type configurations.");
					return d ? d : c.type ? b.isString(c.type) ? r[c.type] : c.type instanceof u ? c.type : new u(c.type) : "config" === e ? r.any : r.string
				}

				function m() {
					var b = {
							array: "search" === f && "auto"
						},
						c = a.match(/\[\]$/) ? {
							array: !0
						} : {};
					return T(b, c, e).array
				}

				function p(a, b) {
					var c = a.squash;
					if (!b || c === !1) return !1;
					if (!N(c) || null == c) return q;
					if (c === !0 || P(c)) return c;
					throw new Error("Invalid squash policy: '" + c + "'. Valid policies: false, true, or arbitrary string")
				}

				function s(a, b, d, e) {
					var f, g, i = [{
						from: "",
						to: d || b ? c : ""
					}, {
						from: null,
						to: d || b ? c : ""
					}];
					return f = R(a.replace) ? a.replace : [], P(e) && f.push({
						from: e,
						to: c
					}), g = o(f, function(a) {
						return a.from
					}), n(i, function(a) {
						return h(g, a.from) === -1
					}).concat(f)
				}

				function t() {
					if (!l) throw new Error("Injectable functions cannot be called at configuration time");
					var a = l.invoke(e.$$fn);
					if (null !== a && a !== c && !x.type.is(a)) throw new Error("Default value (" + a + ") for parameter '" + x.id + "' is not an instance of Type (" + x.type.name + ")");
					return a
				}

				function v(a) {
					function b(a) {
						return function(b) {
							return b.from === a
						}
					}

					function c(a) {
						var c = o(n(x.replace, b(a)), function(a) {
							return a.to
						});
						return c.length ? c[0] : a
					}
					return a = c(a), N(a) ? x.type.$normalize(a) : t()
				}

				function w() {
					return "{Param:" + a + " " + d + " squash: '" + A + "' optional: " + z + "}"
				}
				var x = this;
				e = j(e), d = k(e, d, f);
				var y = m();
				d = y ? d.$asArray(y, "search" === f) : d, "string" !== d.name || y || "path" !== f || e.value !== c || (e.value = "");
				var z = e.value !== c,
					A = p(e, z),
					B = s(e, y, z, A);
				T(this, {
					id: a,
					type: d,
					location: f,
					array: y,
					squash: A,
					replace: B,
					isOptional: z,
					value: v,
					dynamic: c,
					config: e,
					toString: w
				})
			}, k.prototype = {
				$$new: function() {
					return d(this, T(new k, {
						$$parent: this
					}))
				},
				$$keys: function() {
					for (var a = [], b = [], c = this, d = g(k.prototype); c;) b.push(c), c = c.$$parent;
					return b.reverse(), S(b, function(b) {
						S(g(b), function(b) {
							h(a, b) === -1 && h(d, b) === -1 && a.push(b)
						})
					}), a
				},
				$$values: function(a) {
					var b = {},
						c = this;
					return S(c.$$keys(), function(d) {
						b[d] = c[d].value(a && a[d])
					}), b
				},
				$$equals: function(a, b) {
					var c = !0,
						d = this;
					return S(d.$$keys(), function(e) {
						var f = a && a[e],
							g = b && b[e];
						d[e].type.equals(f, g) || (c = !1)
					}), c
				},
				$$validates: function(a) {
					var d, e, f, g, h, i = this.$$keys();
					for (d = 0; d < i.length && (e = this[i[d]], f = a[i[d]], f !== c && null !== f || !e.isOptional); d++) {
						if (g = e.type.$normalize(f), !e.type.is(g)) return !1;
						if (h = e.type.encode(g), b.isString(h) && !e.type.pattern.exec(h)) return !1
					}
					return !0
				},
				$$parent: c
			}, this.ParamSet = k
		}

		function w(a, d) {
			function e(a) {
				var b = /^\^((?:\\[^a-zA-Z0-9]|[^\\\[\]\^$*+?.()|{}]+)*)/.exec(a.source);
				return null != b ? b[1].replace(/\\(.)/g, "$1") : ""
			}

			function f(a, b) {
				return a.replace(/\$(\$|\d{1,2})/, function(a, c) {
					return b["$" === c ? 0 : Number(c)]
				})
			}

			function g(a, b, c) {
				if (!c) return !1;
				var d = a.invoke(b, b, {
					$match: c
				});
				return !N(d) || d
			}

			function h(d, e, f, g, h) {
				function m(a, b, c) {
					return "/" === q ? a : b ? q.slice(0, -1) + a : c ? q.slice(1) + a : a
				}

				function n(a) {
					function b(a) {
						var b = a(f, d);
						return !!b && (P(b) && d.replace().url(b), !0)
					}
					if (!a || !a.defaultPrevented) {
						p && d.url() === p;
						p = c;
						var e, g = j.length;
						for (e = 0; e < g; e++)
							if (b(j[e])) return;
						k && b(k)
					}
				}

				function o() {
					return i = i || e.$on("$locationChangeSuccess", n)
				}
				var p, q = g.baseHref(),
					r = d.url();
				return l || o(), {
					sync: function() {
						n()
					},
					listen: function() {
						return o()
					},
					update: function(a) {
						return a ? void(r = d.url()) : void(d.url() !== r && (d.url(r), d.replace()))
					},
					push: function(a, b, e) {
						var f = a.format(b || {});
						null !== f && b && b["#"] && (f += "#" + b["#"]), d.url(f), p = e && e.$$avoidResync ? d.url() : c, e && e.replace && d.replace()
					},
					href: function(c, e, f) {
						if (!c.validates(e)) return null;
						var g = a.html5Mode();
						b.isObject(g) && (g = g.enabled), g = g && h.history;
						var i = c.format(e);
						if (f = f || {}, g || null === i || (i = "#" + a.hashPrefix() + i), null !== i && e && e["#"] && (i += "#" + e["#"]), i = m(i, g, f.absolute), !f.absolute || !i) return i;
						var j = !g && i ? "/" : "",
							k = d.port();
						return k = 80 === k || 443 === k ? "" : ":" + k, [d.protocol(), "://", d.host(), k, j, i].join("")
					}
				}
			}
			var i, j = [],
				k = null,
				l = !1;
			this.rule = function(a) {
				if (!O(a)) throw new Error("'rule' must be a function");
				return j.push(a), this
			}, this.otherwise = function(a) {
				if (P(a)) {
					var b = a;
					a = function() {
						return b
					}
				} else if (!O(a)) throw new Error("'rule' must be a function");
				return k = a, this
			}, this.when = function(a, b) {
				var c, h = P(b);
				if (P(a) && (a = d.compile(a)), !h && !O(b) && !R(b)) throw new Error("invalid 'handler' in when()");
				var i = {
						matcher: function(a, b) {
							return h && (c = d.compile(b), b = ["$match", function(a) {
								return c.format(a)
							}]), T(function(c, d) {
								return g(c, b, a.exec(d.path(), d.search()))
							}, {
								prefix: P(a.prefix) ? a.prefix : ""
							})
						},
						regex: function(a, b) {
							if (a.global || a.sticky) throw new Error("when() RegExp must not be global or sticky");
							return h && (c = b, b = ["$match", function(a) {
								return f(c, a)
							}]), T(function(c, d) {
								return g(c, b, a.exec(d.path()))
							}, {
								prefix: e(a)
							})
						}
					},
					j = {
						matcher: d.isMatcher(a),
						regex: a instanceof RegExp
					};
				for (var k in j)
					if (j[k]) return this.rule(i[k](a, b));
				throw new Error("invalid 'what' in when()")
			}, this.deferIntercept = function(a) {
				a === c && (a = !0), l = a
			}, this.$get = h, h.$inject = ["$location", "$rootScope", "$injector", "$browser", "$sniffer"]
		}

		function x(a, e) {
			function f(a) {
				return 0 === a.indexOf(".") || 0 === a.indexOf("^")
			}

			function m(a, b) {
				if (!a) return c;
				var d = P(a),
					e = d ? a : a.name,
					g = f(e);
				if (g) {
					if (!b) throw new Error("No reference point given for path '" + e + "'");
					b = m(b);
					for (var h = e.split("."), i = 0, j = h.length, k = b; i < j; i++)
						if ("" !== h[i] || 0 !== i) {
							if ("^" !== h[i]) break;
							if (!k.parent) throw new Error("Path '" + e + "' not valid for state '" + b.name + "'");
							k = k.parent
						} else k = b;
					h = h.slice(i).join("."), e = k.name + (k.name && h ? "." : "") + h
				}
				var l = A[e];
				return !l || !d && (d || l !== a && l.self !== a) ? c : l
			}

			function n(a, b) {
				B[a] || (B[a] = []), B[a].push(b)
			}

			function q(a) {
				for (var b = B[a] || []; b.length;) r(b.shift())
			}

			function r(b) {
				b = d(b, {
					self: b,
					resolve: b.resolve || {},
					toString: function() {
						return this.name
					}
				});
				var c = b.name;
				if (!P(c) || c.indexOf("@") >= 0) throw new Error("State must have a valid name");
				if (A.hasOwnProperty(c)) throw new Error("State '" + c + "' is already defined");
				var e = c.indexOf(".") !== -1 ? c.substring(0, c.lastIndexOf(".")) : P(b.parent) ? b.parent : Q(b.parent) && P(b.parent.name) ? b.parent.name : "";
				if (e && !A[e]) return n(e, b.self);
				for (var f in D) O(D[f]) && (b[f] = D[f](b, D.$delegates[f]));
				return A[c] = b, !b[C] && b.url && a.when(b.url, ["$match", "$stateParams", function(a, c) {
					z.$current.navigable == b && j(a, c) || z.transitionTo(b, a, {
						inherit: !0,
						location: !1
					})
				}]), q(c), b
			}

			function s(a) {
				return a.indexOf("*") > -1
			}

			function t(a) {
				for (var b = a.split("."), c = z.$current.name.split("."), d = 0, e = b.length; d < e; d++) "*" === b[d] && (c[d] = "*");
				return "**" === b[0] && (c = c.slice(h(c, b[1])), c.unshift("**")), "**" === b[b.length - 1] && (c.splice(h(c, b[b.length - 2]) + 1, Number.MAX_VALUE), c.push("**")), b.length == c.length && c.join("") === b.join("")
			}

			function u(a, b) {
				return P(a) && !N(b) ? D[a] : O(b) && P(a) ? (D[a] && !D.$delegates[a] && (D.$delegates[a] = D[a]), D[a] = b, this) : this
			}

			function v(a, b) {
				return Q(a) ? b = a : b.name = a, r(b), this
			}

			function w(a, e, f, h, j, l, n, q, r) {
				function u(b, c, d, f) {
					var g = a.$broadcast("$stateNotFound", b, c, d);
					if (g.defaultPrevented) return n.update(), E;
					if (!g.retry) return null;
					if (f.$retry) return n.update(), F;
					var h = z.transition = e.when(g.retry);
					return h.then(function() {
						return h !== z.transition ? (a.$broadcast("$stateChangeCancel", b.to, b.toParams, c, d), B) : (b.options.$retry = !0, z.transitionTo(b.to, b.toParams, b.options))
					}, function() {
						return E
					}), n.update(), h
				}

				function v(a, c, d, g, i, l) {
					function m() {
						var c = [];
						return S(a.views, function(d, e) {
							var g = d.resolve && d.resolve !== a.resolve ? d.resolve : {};
							g.$template = [function() {
								return f.load(e, {
									view: d,
									locals: i.globals,
									params: n,
									notify: l.notify
								}) || ""
							}], c.push(j.resolve(g, i.globals, i.resolve, a).then(function(c) {
								if (O(d.controllerProvider) || R(d.controllerProvider)) {
									var f = b.extend({}, g, i.globals);
									c.$$controller = h.invoke(d.controllerProvider, null, f)
								} else c.$$controller = d.controller;
								c.$$state = a, c.$$controllerAs = d.controllerAs, c.$$resolveAs = d.resolveAs, i[e] = c
							}))
						}), e.all(c).then(function() {
							return i.globals
						})
					}
					var n = d ? c : k(a.params.$$keys(), c),
						o = {
							$stateParams: n
						};
					i.resolve = j.resolve(a.resolve, o, i.resolve, a);
					var p = [i.resolve.then(function(a) {
						i.globals = a
					})];
					return g && p.push(g), e.all(p).then(m).then(function(a) {
						return i
					})
				}
				var w = new Error("transition superseded"),
					B = p(e.reject(w)),
					D = p(e.reject(new Error("transition prevented"))),
					E = p(e.reject(new Error("transition aborted"))),
					F = p(e.reject(new Error("transition failed")));
				return y.locals = {
					resolve: null,
					globals: {
						$stateParams: {}
					}
				}, z = {
					params: {},
					current: y.self,
					$current: y,
					transition: null
				}, z.reload = function(a) {
					return z.transitionTo(z.current, l, {
						reload: a || !0,
						inherit: !1,
						notify: !0
					})
				}, z.go = function(a, b, c) {
					return z.transitionTo(a, b, T({
						inherit: !0,
						relative: z.$current
					}, c))
				}, z.transitionTo = function(b, c, f) {
					c = c || {}, f = T({
						location: !0,
						inherit: !1,
						relative: null,
						notify: !0,
						reload: !1,
						$retry: !1
					}, f || {});
					var g, j = z.$current,
						o = z.params,
						q = j.path,
						r = m(b, f.relative),
						s = c["#"];
					if (!N(r)) {
						var t = {
								to: b,
								toParams: c,
								options: f
							},
							A = u(t, j.self, o, f);
						if (A) return A;
						if (b = t.to, c = t.toParams, f = t.options, r = m(b, f.relative), !N(r)) {
							if (!f.relative) throw new Error("No such state '" + b + "'");
							throw new Error("Could not resolve '" + b + "' from state '" + f.relative + "'")
						}
					}
					if (r[C]) throw new Error("Cannot transition to abstract state '" + b + "'");
					if (f.inherit && (c = i(l, c || {}, z.$current, r)), !r.params.$$validates(c)) return F;
					c = r.params.$$values(c), b = r;
					var E = b.path,
						G = 0,
						H = E[G],
						I = y.locals,
						J = [];
					if (f.reload) {
						if (P(f.reload) || Q(f.reload)) {
							if (Q(f.reload) && !f.reload.name) throw new Error("Invalid reload state object");
							var K = f.reload === !0 ? q[0] : m(f.reload);
							if (f.reload && !K) throw new Error("No such reload state '" + (P(f.reload) ? f.reload : f.reload.name) + "'");
							for (; H && H === q[G] && H !== K;) I = J[G] = H.locals, G++, H = E[G]
						}
					} else
						for (; H && H === q[G] && H.ownParams.$$equals(c, o);) I = J[G] = H.locals, G++, H = E[G];
					if (x(b, c, j, o, I, f)) return s && (c["#"] = s), z.params = c, U(z.params, l), U(k(b.params.$$keys(), l), b.locals.globals.$stateParams), f.location && b.navigable && b.navigable.url && (n.push(b.navigable.url, c, {
						$$avoidResync: !0,
						replace: "replace" === f.location
					}), n.update(!0)), z.transition = null, e.when(z.current);
					if (c = k(b.params.$$keys(), c || {}), s && (c["#"] = s), f.notify && a.$broadcast("$stateChangeStart", b.self, c, j.self, o, f).defaultPrevented) return a.$broadcast("$stateChangeCancel", b.self, c, j.self, o), null == z.transition && n.update(), D;
					for (var L = e.when(I), M = G; M < E.length; M++, H = E[M]) I = J[M] = d(I), L = v(H, c, H === b, L, I, f);
					var O = z.transition = L.then(function() {
						var d, e, g;
						if (z.transition !== O) return a.$broadcast("$stateChangeCancel", b.self, c, j.self, o), B;
						for (d = q.length - 1; d >= G; d--) g = q[d], g.self.onExit && h.invoke(g.self.onExit, g.self, g.locals.globals), g.locals = null;
						for (d = G; d < E.length; d++) e = E[d], e.locals = J[d], e.self.onEnter && h.invoke(e.self.onEnter, e.self, e.locals.globals);
						return z.transition !== O ? (a.$broadcast("$stateChangeCancel", b.self, c, j.self, o), B) : (z.$current = b, z.current = b.self, z.params = c, U(z.params, l), z.transition = null, f.location && b.navigable && n.push(b.navigable.url, b.navigable.locals.globals.$stateParams, {
							$$avoidResync: !0,
							replace: "replace" === f.location
						}), f.notify && a.$broadcast("$stateChangeSuccess", b.self, c, j.self, o), n.update(!0), z.current)
					}).then(null, function(d) {
						return d === w ? B : z.transition !== O ? (a.$broadcast("$stateChangeCancel", b.self, c, j.self, o), B) : (z.transition = null, g = a.$broadcast("$stateChangeError", b.self, c, j.self, o, d), g.defaultPrevented || n.update(), e.reject(d))
					});
					return p(O), O
				}, z.is = function(a, b, d) {
					d = T({
						relative: z.$current
					}, d || {});
					var e = m(a, d.relative);
					return N(e) ? z.$current === e && (!b || g(b).reduce(function(a, c) {
						var d = e.params[c];
						return a && !d || d.type.equals(l[c], b[c])
					}, !0)) : c
				}, z.includes = function(a, b, d) {
					if (d = T({
							relative: z.$current
						}, d || {}), P(a) && s(a)) {
						if (!t(a)) return !1;
						a = z.$current.name
					}
					var e = m(a, d.relative);
					if (!N(e)) return c;
					if (!N(z.$current.includes[e.name])) return !1;
					if (!b) return !0;
					for (var f = g(b), h = 0; h < f.length; h++) {
						var i = f[h],
							j = e.params[i];
						if (j && !j.type.equals(l[i], b[i])) return !1
					}
					return g(b).reduce(function(a, c) {
						var d = e.params[c];
						return a && !d || d.type.equals(l[c], b[c])
					}, !0)
				}, z.href = function(a, b, d) {
					d = T({
						lossy: !0,
						inherit: !0,
						absolute: !1,
						relative: z.$current
					}, d || {});
					var e = m(a, d.relative);
					if (!N(e)) return null;
					d.inherit && (b = i(l, b || {}, z.$current, e));
					var f = e && d.lossy ? e.navigable : e;
					return f && f.url !== c && null !== f.url ? n.href(f.url, k(e.params.$$keys().concat("#"), b || {}), {
						absolute: d.absolute
					}) : null
				}, z.get = function(a, b) {
					if (0 === arguments.length) return o(g(A), function(a) {
						return A[a].self
					});
					var c = m(a, b || z.$current);
					return c && c.self ? c.self : null
				}, z
			}

			function x(a, b, c, d, e, f) {
				function g(a, b, c) {
					function d(b) {
						return "search" != a.params[b].location
					}
					var e = a.params.$$keys().filter(d),
						f = l.apply({}, [a.params].concat(e)),
						g = new W.ParamSet(f);
					return g.$$equals(b, c)
				}
				if (!f.reload && a === c && (e === c.locals || a.self.reloadOnSearch === !1 && g(c, d, b))) return !0
			}
			var y, z, A = {},
				B = {},
				C = "abstract",
				D = {
					parent: function(a) {
						if (N(a.parent) && a.parent) return m(a.parent);
						var b = /^(.+)\.[^.]+$/.exec(a.name);
						return b ? m(b[1]) : y
					},
					data: function(a) {
						return a.parent && a.parent.data && (a.data = a.self.data = d(a.parent.data, a.data)), a.data
					},
					url: function(a) {
						var b = a.url,
							c = {
								params: a.params || {}
							};
						if (P(b)) return "^" == b.charAt(0) ? e.compile(b.substring(1), c) : (a.parent.navigable || y).url.concat(b, c);
						if (!b || e.isMatcher(b)) return b;
						throw new Error("Invalid url '" + b + "' in state '" + a + "'")
					},
					navigable: function(a) {
						return a.url ? a : a.parent ? a.parent.navigable : null
					},
					ownParams: function(a) {
						var b = a.url && a.url.params || new W.ParamSet;
						return S(a.params || {}, function(a, c) {
							b[c] || (b[c] = new W.Param(c, null, a, "config"))
						}), b
					},
					params: function(a) {
						var b = l(a.ownParams, a.ownParams.$$keys());
						return a.parent && a.parent.params ? T(a.parent.params.$$new(), b) : new W.ParamSet
					},
					views: function(a) {
						var b = {};
						return S(N(a.views) ? a.views : {
							"": a
						}, function(c, d) {
							d.indexOf("@") < 0 && (d += "@" + a.parent.name), c.resolveAs = c.resolveAs || a.resolveAs || "$resolve", b[d] = c
						}), b
					},
					path: function(a) {
						return a.parent ? a.parent.path.concat(a) : []
					},
					includes: function(a) {
						var b = a.parent ? T({}, a.parent.includes) : {};
						return b[a.name] = !0, b
					},
					$delegates: {}
				};
			y = r({
				name: "",
				url: "^",
				views: null,
				abstract: !0
			}), y.navigable = null, this.decorator = u, this.state = v, this.$get = w, w.$inject = ["$rootScope", "$q", "$view", "$injector", "$resolve", "$stateParams", "$urlRouter", "$location", "$urlMatcherFactory"]
		}

		function y() {
			function a(a, b) {
				return {
					load: function(a, c) {
						var d, e = {
							template: null,
							controller: null,
							view: null,
							locals: null,
							notify: !0,
							async: !0,
							params: {}
						};
						return c = T(e, c), c.view && (d = b.fromConfig(c.view, c.params, c.locals)), d
					}
				}
			}
			this.$get = a, a.$inject = ["$rootScope", "$templateFactory"]
		}

		function z() {
			var a = !1;
			this.useAnchorScroll = function() {
				a = !0
			}, this.$get = ["$anchorScroll", "$timeout", function(b, c) {
				return a ? b : function(a) {
					return c(function() {
						a[0].scrollIntoView()
					}, 0, !1)
				}
			}]
		}

		function A(a, c, d, e, f) {
			function g() {
				return c.has ? function(a) {
					return c.has(a) ? c.get(a) : null
				} : function(a) {
					try {
						return c.get(a)
					} catch (a) {
						return null
					}
				}
			}

			function h(a, c) {
				var d = function() {
					return {
						enter: function(a, b, c) {
							b.after(a), c()
						},
						leave: function(a, b) {
							a.remove(), b()
						}
					}
				};
				if (k) return {
					enter: function(a, c, d) {
						b.version.minor > 2 ? k.enter(a, null, c).then(d) : k.enter(a, null, c, d)
					},
					leave: function(a, c) {
						b.version.minor > 2 ? k.leave(a).then(c) : k.leave(a, c)
					}
				};
				if (j) {
					var e = j && j(c, a);
					return {
						enter: function(a, b, c) {
							e.enter(a, null, b), c()
						},
						leave: function(a, b) {
							e.leave(a), b()
						}
					}
				}
				return d()
			}
			var i = g(),
				j = i("$animator"),
				k = i("$animate"),
				l = {
					restrict: "ECA",
					terminal: !0,
					priority: 400,
					transclude: "element",
					compile: function(c, g, i) {
						return function(c, g, j) {
							function k() {
								if (m && (m.remove(), m = null), o && (o.$destroy(), o = null), n) {
									var a = n.data("$uiViewAnim");
									s.leave(n, function() {
										a.$$animLeave.resolve(), m = null
									}), m = n, n = null
								}
							}

							function l(h) {
								var l, m = C(c, j, g, e),
									t = m && a.$current && a.$current.locals[m];
								if (h || t !== p) {
									l = c.$new(), p = a.$current.locals[m], l.$emit("$viewContentLoading", m);
									var u = i(l, function(a) {
										var e = f.defer(),
											h = f.defer(),
											i = {
												$animEnter: e.promise,
												$animLeave: h.promise,
												$$animLeave: h
											};
										a.data("$uiViewAnim", i), s.enter(a, g, function() {
											e.resolve(), o && o.$emit("$viewContentAnimationEnded"), (b.isDefined(r) && !r || c.$eval(r)) && d(a)
										}), k()
									});
									n = u, o = l, o.$emit("$viewContentLoaded", m), o.$eval(q)
								}
							}
							var m, n, o, p, q = j.onload || "",
								r = j.autoscroll,
								s = h(j, c);
							g.inheritedData("$uiView");
							c.$on("$stateChangeSuccess", function() {
								l(!1)
							}), l(!0)
						}
					}
				};
			return l
		}

		function B(a, c, d, e) {
			return {
				restrict: "ECA",
				priority: -400,
				compile: function(f) {
					var g = f.html();
					return f.empty ? f.empty() : f[0].innerHTML = null,
						function(f, h, i) {
							var j = d.$current,
								k = C(f, i, h, e),
								l = j && j.locals[k];
							if (!l) return h.html(g), void a(h.contents())(f);
							h.data("$uiView", {
								name: k,
								state: l.$$state
							}), h.html(l.$template ? l.$template : g);
							var m = b.extend({}, l);
							f[l.$$resolveAs] = m;
							var n = a(h.contents());
							if (l.$$controller) {
								l.$scope = f, l.$element = h;
								var o = c(l.$$controller, l);
								l.$$controllerAs && (f[l.$$controllerAs] = o, f[l.$$controllerAs][l.$$resolveAs] = m), O(o.$onInit) && o.$onInit(), h.data("$ngControllerController", o), h.children().data("$ngControllerController", o)
							}
							n(f)
						}
				}
			}
		}

		function C(a, b, c, d) {
			var e = d(b.uiView || b.name || "")(a),
				f = c.inheritedData("$uiView");
			return e.indexOf("@") >= 0 ? e : e + "@" + (f ? f.state.name : "")
		}

		function D(a, b) {
			var c, d = a.match(/^\s*({[^}]*})\s*$/);
			if (d && (a = b + "(" + d[1] + ")"), c = a.replace(/\n/g, " ").match(/^([^(]+?)\s*(\((.*)\))?$/), !c || 4 !== c.length) throw new Error("Invalid state ref '" + a + "'");
			return {
				state: c[1],
				paramExpr: c[3] || null
			}
		}

		function E(a) {
			var b = a.parent().inheritedData("$uiView");
			if (b && b.state && b.state.name) return b.state
		}

		function F(a) {
			var b = "[object SVGAnimatedString]" === Object.prototype.toString.call(a.prop("href")),
				c = "FORM" === a[0].nodeName;
			return {
				attr: c ? "action" : b ? "xlink:href" : "href",
				isAnchor: "A" === a.prop("tagName").toUpperCase(),
				clickable: !c
			}
		}

		function G(a, b, c, d, e) {
			return function(f) {
				var g = f.which || f.button,
					h = e();
				if (!(g > 1 || f.ctrlKey || f.metaKey || f.shiftKey || a.attr("target"))) {
					var i = c(function() {
						b.go(h.state, h.params, h.options)
					});
					f.preventDefault();
					var j = d.isAnchor && !h.href ? 1 : 0;
					f.preventDefault = function() {
						j-- <= 0 && c.cancel(i)
					}
				}
			}
		}

		function H(a, b) {
			return {
				relative: E(a) || b.$current,
				inherit: !0
			}
		}

		function I(a, c) {
			return {
				restrict: "A",
				require: ["?^uiSrefActive", "?^uiSrefActiveEq"],
				link: function(d, e, f, g) {
					var h, i = D(f.uiSref, a.current.name),
						j = {
							state: i.state,
							href: null,
							params: null
						},
						k = F(e),
						l = g[1] || g[0],
						m = null;
					j.options = T(H(e, a), f.uiSrefOpts ? d.$eval(f.uiSrefOpts) : {});
					var n = function(c) {
						c && (j.params = b.copy(c)), j.href = a.href(i.state, j.params, j.options), m && m(), l && (m = l.$$addStateInfo(i.state, j.params)), null !== j.href && f.$set(k.attr, j.href)
					};
					i.paramExpr && (d.$watch(i.paramExpr, function(a) {
						a !== j.params && n(a)
					}, !0), j.params = b.copy(d.$eval(i.paramExpr))), n(), k.clickable && (h = G(e, a, c, k, function() {
						return j
					}), e[e.on ? "on" : "bind"]("click", h), d.$on("$destroy", function() {
						e[e.off ? "off" : "unbind"]("click", h)
					}))
				}
			}
		}

		function J(a, b) {
			return {
				restrict: "A",
				require: ["?^uiSrefActive", "?^uiSrefActiveEq"],
				link: function(c, d, e, f) {
					function g(b) {
						m.state = b[0], m.params = b[1], m.options = b[2], m.href = a.href(m.state, m.params, m.options), n && n(), j && (n = j.$$addStateInfo(m.state, m.params)), m.href && e.$set(i.attr, m.href)
					}
					var h, i = F(d),
						j = f[1] || f[0],
						k = [e.uiState, e.uiStateParams || null, e.uiStateOpts || null],
						l = "[" + k.map(function(a) {
							return a || "null"
						}).join(", ") + "]",
						m = {
							state: null,
							params: null,
							options: null,
							href: null
						},
						n = null;
					c.$watch(l, g, !0), g(c.$eval(l)), i.clickable && (h = G(d, a, b, i, function() {
						return m
					}), d[d.on ? "on" : "bind"]("click", h), c.$on("$destroy", function() {
						d[d.off ? "off" : "unbind"]("click", h)
					}))
				}
			}
		}

		function K(a, b, c) {
			return {
				restrict: "A",
				controller: ["$scope", "$element", "$attrs", "$timeout", function(b, d, e, f) {
					function g(b, c, e) {
						var f = a.get(b, E(d)),
							g = h(b, c),
							i = {
								state: f || {
									name: b
								},
								params: c,
								hash: g
							};
						return p.push(i), q[g] = e,
							function() {
								var a = p.indexOf(i);
								a !== -1 && p.splice(a, 1)
							}
					}

					function h(a, c) {
						if (!P(a)) throw new Error("state should be a string");
						return Q(c) ? a + V(c) : (c = b.$eval(c), Q(c) ? a + V(c) : a)
					}

					function i() {
						for (var a = 0; a < p.length; a++) l(p[a].state, p[a].params) ? j(d, q[p[a].hash]) : k(d, q[p[a].hash]), m(p[a].state, p[a].params) ? j(d, n) : k(d, n)
					}

					function j(a, b) {
						f(function() {
							a.addClass(b)
						})
					}

					function k(a, b) {
						a.removeClass(b)
					}

					function l(b, c) {
						return a.includes(b.name, c)
					}

					function m(b, c) {
						return a.is(b.name, c)
					}
					var n, o, p = [],
						q = {};
					n = c(e.uiSrefActiveEq || "", !1)(b);
					try {
						o = b.$eval(e.uiSrefActive)
					} catch (a) {}
					o = o || c(e.uiSrefActive || "", !1)(b), Q(o) && S(o, function(c, d) {
						if (P(c)) {
							var e = D(c, a.current.name);
							g(e.state, b.$eval(e.paramExpr), d)
						}
					}), this.$$addStateInfo = function(a, b) {
						if (!(Q(o) && p.length > 0)) {
							var c = g(a, b, o);
							return i(), c
						}
					}, b.$on("$stateChangeSuccess", i), i()
				}]
			}
		}

		function L(a) {
			var b = function(b, c) {
				return a.is(b, c)
			};
			return b.$stateful = !0, b
		}

		function M(a) {
			var b = function(b, c, d) {
				return a.includes(b, c, d)
			};
			return b.$stateful = !0, b
		}
		var N = b.isDefined,
			O = b.isFunction,
			P = b.isString,
			Q = b.isObject,
			R = b.isArray,
			S = b.forEach,
			T = b.extend,
			U = b.copy,
			V = b.toJson;
		b.module("ui.router.util", ["ng"]), b.module("ui.router.router", ["ui.router.util"]), b.module("ui.router.state", ["ui.router.router", "ui.router.util"]), b.module("ui.router", ["ui.router.state"]), b.module("ui.router.compat", ["ui.router"]), q.$inject = ["$q", "$injector"], b.module("ui.router.util").service("$resolve", q), b.module("ui.router.util").provider("$templateFactory", r);
		var W;
		t.prototype.concat = function(a, b) {
			var c = {
				caseInsensitive: W.caseInsensitive(),
				strict: W.strictMode(),
				squash: W.defaultSquashPolicy()
			};
			return new t(this.sourcePath + a + this.sourceSearch, T(c, b), this)
		}, t.prototype.toString = function() {
			return this.source
		}, t.prototype.exec = function(a, b) {
			function c(a) {
				function b(a) {
					return a.split("").reverse().join("")
				}

				function c(a) {
					return a.replace(/\\-/g, "-")
				}
				var d = b(a).split(/-(?!\\)/),
					e = o(d, b);
				return o(e, c).reverse()
			}
			var d = this.regexp.exec(a);
			if (!d) return null;
			b = b || {};
			var e, f, g, h = this.parameters(),
				i = h.length,
				j = this.segments.length - 1,
				k = {};
			if (j !== d.length - 1) throw new Error("Unbalanced capture group in route '" + this.source + "'");
			var l, m;
			for (e = 0; e < j; e++) {
				for (g = h[e], l = this.params[g], m = d[e + 1], f = 0; f < l.replace.length; f++) l.replace[f].from === m && (m = l.replace[f].to);
				m && l.array === !0 && (m = c(m)), N(m) && (m = l.type.decode(m)), k[g] = l.value(m)
			}
			for (; e < i; e++) {
				for (g = h[e], k[g] = this.params[g].value(b[g]), l = this.params[g], m = b[g], f = 0; f < l.replace.length; f++) l.replace[f].from === m && (m = l.replace[f].to);
				N(m) && (m = l.type.decode(m)), k[g] = l.value(m)
			}
			return k
		}, t.prototype.parameters = function(a) {
			return N(a) ? this.params[a] || null : this.$$paramNames
		}, t.prototype.validates = function(a) {
			return this.params.$$validates(a)
		}, t.prototype.format = function(a) {
			function b(a) {
				return encodeURIComponent(a).replace(/-/g, function(a) {
					return "%5C%" + a.charCodeAt(0).toString(16).toUpperCase()
				})
			}
			a = a || {};
			var c = this.segments,
				d = this.parameters(),
				e = this.params;
			if (!this.validates(a)) return null;
			var f, g = !1,
				h = c.length - 1,
				i = d.length,
				j = c[0];
			for (f = 0; f < i; f++) {
				var k = f < h,
					l = d[f],
					m = e[l],
					n = m.value(a[l]),
					p = m.isOptional && m.type.equals(m.value(), n),
					q = !!p && m.squash,
					r = m.type.encode(n);
				if (k) {
					var s = c[f + 1],
						t = f + 1 === h;
					if (q === !1) null != r && (j += R(r) ? o(r, b).join("-") : encodeURIComponent(r)), j += s;
					else if (q === !0) {
						var u = j.match(/\/$/) ? /\/?(.*)/ : /(.*)/;
						j += s.match(u)[1]
					} else P(q) && (j += q + s);
					t && m.squash === !0 && "/" === j.slice(-1) && (j = j.slice(0, -1))
				} else {
					if (null == r || p && q !== !1) continue;
					if (R(r) || (r = [r]), 0 === r.length) continue;
					r = o(r, encodeURIComponent).join("&" + l + "="), j += (g ? "&" : "?") + (l + "=" + r), g = !0
				}
			}
			return j
		}, u.prototype.is = function(a, b) {
			return !0
		}, u.prototype.encode = function(a, b) {
			return a
		}, u.prototype.decode = function(a, b) {
			return a
		}, u.prototype.equals = function(a, b) {
			return a == b
		}, u.prototype.$subPattern = function() {
			var a = this.pattern.toString();
			return a.substr(1, a.length - 2)
		}, u.prototype.pattern = /.*/, u.prototype.toString = function() {
			return "{Type:" + this.name + "}"
		}, u.prototype.$normalize = function(a) {
			return this.is(a) ? a : this.decode(a)
		}, u.prototype.$asArray = function(a, b) {
			function d(a, b) {
				function d(a, b) {
					return function() {
						return a[b].apply(a, arguments)
					}
				}

				function e(a) {
					return R(a) ? a : N(a) ? [a] : []
				}

				function f(a) {
					switch (a.length) {
						case 0:
							return c;
						case 1:
							return "auto" === b ? a[0] : a;
						default:
							return a
					}
				}

				function g(a) {
					return !a
				}

				function h(a, b) {
					return function(c) {
						if (R(c) && 0 === c.length) return c;
						c = e(c);
						var d = o(c, a);
						return b === !0 ? 0 === n(d, g).length : f(d)
					}
				}

				function i(a) {
					return function(b, c) {
						var d = e(b),
							f = e(c);
						if (d.length !== f.length) return !1;
						for (var g = 0; g < d.length; g++)
							if (!a(d[g], f[g])) return !1;
						return !0
					}
				}
				this.encode = h(d(a, "encode")), this.decode = h(d(a, "decode")), this.is = h(d(a, "is"), !0), this.equals = i(d(a, "equals")), this.pattern = a.pattern, this.$normalize = h(d(a, "$normalize")), this.name = a.name, this.$arrayMode = b
			}
			if (!a) return this;
			if ("auto" === a && !b) throw new Error("'auto' array mode is for query parameters only");
			return new d(this, a)
		}, b.module("ui.router.util").provider("$urlMatcherFactory", v), b.module("ui.router.util").run(["$urlMatcherFactory", function(a) {}]), w.$inject = ["$locationProvider", "$urlMatcherFactoryProvider"], b.module("ui.router.router").provider("$urlRouter", w), x.$inject = ["$urlRouterProvider", "$urlMatcherFactoryProvider"], b.module("ui.router.state").factory("$stateParams", function() {
			return {}
		}).constant("$state.runtime", {
			autoinject: !0
		}).provider("$state", x).run(["$injector", function(a) {
			a.get("$state.runtime").autoinject && a.get("$state")
		}]), y.$inject = [], b.module("ui.router.state").provider("$view", y), b.module("ui.router.state").provider("$uiViewScroll", z), A.$inject = ["$state", "$injector", "$uiViewScroll", "$interpolate", "$q"], B.$inject = ["$compile", "$controller", "$state", "$interpolate"], b.module("ui.router.state").directive("uiView", A), b.module("ui.router.state").directive("uiView", B), I.$inject = ["$state", "$timeout"], J.$inject = ["$state", "$timeout"], K.$inject = ["$state", "$stateParams", "$interpolate"], b.module("ui.router.state").directive("uiSref", I).directive("uiSrefActive", K).directive("uiSrefActiveEq", K).directive("uiState", J), L.$inject = ["$state"], M.$inject = ["$state"], b.module("ui.router.state").filter("isState", L).filter("includedByState", M)
	}(window, window.angular);

; // angular/ui-bootstrap-custom-tpls-2.5.0.js
angular.module("ui.bootstrap", ["ui.bootstrap.tpls", "ui.bootstrap.carousel", "ui.bootstrap.position", "ui.bootstrap.dropdown", "ui.bootstrap.multiMap", "ui.bootstrap.stackedMap", "ui.bootstrap.modal", "ui.bootstrap.tooltip", "ui.bootstrap.popover"]);
angular.module("ui.bootstrap.tpls", ["uib/template/carousel/carousel.html", "uib/template/carousel/slide.html", "uib/template/modal/window.html", "uib/template/tooltip/tooltip-html-popup.html", "uib/template/tooltip/tooltip-popup.html", "uib/template/tooltip/tooltip-template-popup.html", "uib/template/popover/popover-html.html", "uib/template/popover/popover-template.html", "uib/template/popover/popover.html"]);
angular.module('ui.bootstrap.carousel', []).controller('UibCarouselController', ['$scope', '$element', '$interval', '$timeout', '$animate', function($scope, $element, $interval, $timeout, $animate) {
	var self = this,
		slides = self.slides = $scope.slides = [],
		SLIDE_DIRECTION = 'uib-slideDirection',
		currentIndex = $scope.active,
		currentInterval, isPlaying;
	var destroyed = false;
	$element.addClass('carousel');
	self.addSlide = function(slide, element) {
		slides.push({
			slide: slide,
			element: element
		});
		slides.sort(function(a, b) {
			return +a.slide.index - +b.slide.index;
		});
		if (slide.index === $scope.active || slides.length === 1 && !angular.isNumber($scope.active)) {
			if ($scope.$currentTransition) {
				$scope.$currentTransition = null;
			}
			currentIndex = slide.index;
			$scope.active = slide.index;
			setActive(currentIndex);
			self.select(slides[findSlideIndex(slide)]);
			if (slides.length === 1) {
				$scope.play();
			}
		}
	};
	self.getCurrentIndex = function() {
		for (var i = 0; i < slides.length; i++) {
			if (slides[i].slide.index === currentIndex) {
				return i;
			}
		}
	};
	self.next = $scope.next = function() {
		var newIndex = (self.getCurrentIndex() + 1) % slides.length;
		if (newIndex === 0 && $scope.noWrap()) {
			$scope.pause();
			return;
		}
		return self.select(slides[newIndex], 'next');
	};
	self.prev = $scope.prev = function() {
		var newIndex = self.getCurrentIndex() - 1 < 0 ? slides.length - 1 : self.getCurrentIndex() - 1;
		if ($scope.noWrap() && newIndex === slides.length - 1) {
			$scope.pause();
			return;
		}
		return self.select(slides[newIndex], 'prev');
	};
	self.removeSlide = function(slide) {
		var index = findSlideIndex(slide);
		slides.splice(index, 1);
		if (slides.length > 0 && currentIndex === index) {
			if (index >= slides.length) {
				currentIndex = slides.length - 1;
				$scope.active = currentIndex;
				setActive(currentIndex);
				self.select(slides[slides.length - 1]);
			} else {
				currentIndex = index;
				$scope.active = currentIndex;
				setActive(currentIndex);
				self.select(slides[index]);
			}
		} else if (currentIndex > index) {
			currentIndex--;
			$scope.active = currentIndex;
		}
		if (slides.length === 0) {
			currentIndex = null;
			$scope.active = null;
		}
	};
	self.select = $scope.select = function(nextSlide, direction) {
		var nextIndex = findSlideIndex(nextSlide.slide);
		if (direction === undefined) {
			direction = nextIndex > self.getCurrentIndex() ? 'next' : 'prev';
		}
		if (nextSlide.slide.index !== currentIndex && !$scope.$currentTransition) {
			goNext(nextSlide.slide, nextIndex, direction);
		}
	};
	$scope.indexOfSlide = function(slide) {
		return +slide.slide.index;
	};
	$scope.isActive = function(slide) {
		return $scope.active === slide.slide.index;
	};
	$scope.isPrevDisabled = function() {
		return $scope.active === 0 && $scope.noWrap();
	};
	$scope.isNextDisabled = function() {
		return $scope.active === slides.length - 1 && $scope.noWrap();
	};
	$scope.pause = function() {
		if (!$scope.noPause) {
			isPlaying = false;
			resetTimer();
		}
	};
	$scope.play = function() {
		if (!isPlaying) {
			isPlaying = true;
			restartTimer();
		}
	};
	$element.on('mouseenter', $scope.pause);
	$element.on('mouseleave', $scope.play);
	$scope.$on('$destroy', function() {
		destroyed = true;
		resetTimer();
	});
	$scope.$watch('noTransition', function(noTransition) {
		$animate.enabled($element, !noTransition);
	});
	$scope.$watch('interval', restartTimer);
	$scope.$watchCollection('slides', resetTransition);
	$scope.$watch('active', function(index) {
		if (angular.isNumber(index) && currentIndex !== index) {
			for (var i = 0; i < slides.length; i++) {
				if (slides[i].slide.index === index) {
					index = i;
					break;
				}
			}
			var slide = slides[index];
			if (slide) {
				setActive(index);
				self.select(slides[index]);
				currentIndex = index;
			}
		}
	});

	function getSlideByIndex(index) {
		for (var i = 0, l = slides.length; i < l; ++i) {
			if (slides[i].index === index) {
				return slides[i];
			}
		}
	}

	function setActive(index) {
		for (var i = 0; i < slides.length; i++) {
			slides[i].slide.active = i === index;
		}
	}

	function goNext(slide, index, direction) {
		if (destroyed) {
			return;
		}
		angular.extend(slide, {
			direction: direction
		});
		angular.extend(slides[currentIndex].slide || {}, {
			direction: direction
		});
		if ($animate.enabled($element) && !$scope.$currentTransition && slides[index].element && self.slides.length > 1) {
			slides[index].element.data(SLIDE_DIRECTION, slide.direction);
			var currentIdx = self.getCurrentIndex();
			if (angular.isNumber(currentIdx) && slides[currentIdx].element) {
				slides[currentIdx].element.data(SLIDE_DIRECTION, slide.direction);
			}
			$scope.$currentTransition = true;
			$animate.on('addClass', slides[index].element, function(element, phase) {
				if (phase === 'close') {
					$scope.$currentTransition = null;
					$animate.off('addClass', element);
				}
			});
		}
		$scope.active = slide.index;
		currentIndex = slide.index;
		setActive(index);
		restartTimer();
	}

	function findSlideIndex(slide) {
		for (var i = 0; i < slides.length; i++) {
			if (slides[i].slide === slide) {
				return i;
			}
		}
	}

	function resetTimer() {
		if (currentInterval) {
			$interval.cancel(currentInterval);
			currentInterval = null;
		}
	}

	function resetTransition(slides) {
		if (!slides.length) {
			$scope.$currentTransition = null;
		}
	}

	function restartTimer() {
		resetTimer();
		var interval = +$scope.interval;
		if (!isNaN(interval) && interval > 0) {
			currentInterval = $interval(timerFn, interval);
		}
	}

	function timerFn() {
		var interval = +$scope.interval;
		if (isPlaying && !isNaN(interval) && interval > 0 && slides.length) {
			$scope.next();
		} else {
			$scope.pause();
		}
	}
}]).directive('uibCarousel', function() {
	return {
		transclude: true,
		controller: 'UibCarouselController',
		controllerAs: 'carousel',
		restrict: 'A',
		templateUrl: function(element, attrs) {
			return attrs.templateUrl || 'uib/template/carousel/carousel.html';
		},
		scope: {
			active: '=',
			interval: '=',
			noTransition: '=',
			noPause: '=',
			noWrap: '&'
		}
	};
}).directive('uibSlide', ['$animate', function($animate) {
	return {
		require: '^uibCarousel',
		restrict: 'A',
		transclude: true,
		templateUrl: function(element, attrs) {
			return attrs.templateUrl || 'uib/template/carousel/slide.html';
		},
		scope: {
			actual: '=?',
			index: '=?'
		},
		link: function(scope, element, attrs, carouselCtrl) {
			element.addClass('item');
			carouselCtrl.addSlide(scope, element);
			scope.$on('$destroy', function() {
				carouselCtrl.removeSlide(scope);
			});
			scope.$watch('active', function(active) {
				$animate[active ? 'addClass' : 'removeClass'](element, 'active');
			});
		}
	};
}]).animation('.item', ['$animateCss', function($animateCss) {
	var SLIDE_DIRECTION = 'uib-slideDirection';

	function removeClass(element, className, callback) {
		element.removeClass(className);
		if (callback) {
			callback();
		}
	}
	return {
		beforeAddClass: function(element, className, done) {
			if (className === 'active') {
				var stopped = false;
				var direction = element.data(SLIDE_DIRECTION);
				var directionClass = direction === 'next' ? 'left' : 'right';
				var removeClassFn = removeClass.bind(this, element, directionClass + ' ' + direction, done);
				element.addClass(direction);
				$animateCss(element, {
					addClass: directionClass
				}).start().done(removeClassFn);
				return function() {
					stopped = true;
				};
			}
			done();
		},
		beforeRemoveClass: function(element, className, done) {
			if (className === 'active') {
				var stopped = false;
				var direction = element.data(SLIDE_DIRECTION);
				var directionClass = direction === 'next' ? 'left' : 'right';
				var removeClassFn = removeClass.bind(this, element, directionClass, done);
				$animateCss(element, {
					addClass: directionClass
				}).start().done(removeClassFn);
				return function() {
					stopped = true;
				};
			}
			done();
		}
	};
}]);
angular.module('ui.bootstrap.position', []).factory('$uibPosition', ['$document', '$window', function($document, $window) {
	var SCROLLBAR_WIDTH;
	var BODY_SCROLLBAR_WIDTH;
	var OVERFLOW_REGEX = {
		normal: /(auto|scroll)/,
		hidden: /(auto|scroll|hidden)/
	};
	var PLACEMENT_REGEX = {
		auto: /\s?auto?\s?/i,
		primary: /^(top|bottom|left|right)$/,
		secondary: /^(top|bottom|left|right|center)$/,
		vertical: /^(top|bottom)$/
	};
	var BODY_REGEX = /(HTML|BODY)/;
	return {
		getRawNode: function(elem) {
			return elem.nodeName ? elem : elem[0] || elem;
		},
		parseStyle: function(value) {
			value = parseFloat(value);
			return isFinite(value) ? value : 0;
		},
		offsetParent: function(elem) {
			elem = this.getRawNode(elem);
			var offsetParent = elem.offsetParent || $document[0].documentElement;

			function isStaticPositioned(el) {
				return ($window.getComputedStyle(el).position || 'static') === 'static';
			}
			while (offsetParent && offsetParent !== $document[0].documentElement && isStaticPositioned(offsetParent)) {
				offsetParent = offsetParent.offsetParent;
			}
			return offsetParent || $document[0].documentElement;
		},
		scrollbarWidth: function(isBody) {
			if (isBody) {
				if (angular.isUndefined(BODY_SCROLLBAR_WIDTH)) {
					var bodyElem = $document.find('body');
					bodyElem.addClass('uib-position-body-scrollbar-measure');
					BODY_SCROLLBAR_WIDTH = $window.innerWidth - bodyElem[0].clientWidth;
					BODY_SCROLLBAR_WIDTH = isFinite(BODY_SCROLLBAR_WIDTH) ? BODY_SCROLLBAR_WIDTH : 0;
					bodyElem.removeClass('uib-position-body-scrollbar-measure');
				}
				return BODY_SCROLLBAR_WIDTH;
			}
			if (angular.isUndefined(SCROLLBAR_WIDTH)) {
				var scrollElem = angular.element('<div class="uib-position-scrollbar-measure"></div>');
				$document.find('body').append(scrollElem);
				SCROLLBAR_WIDTH = scrollElem[0].offsetWidth - scrollElem[0].clientWidth;
				SCROLLBAR_WIDTH = isFinite(SCROLLBAR_WIDTH) ? SCROLLBAR_WIDTH : 0;
				scrollElem.remove();
			}
			return SCROLLBAR_WIDTH;
		},
		scrollbarPadding: function(elem) {
			elem = this.getRawNode(elem);
			var elemStyle = $window.getComputedStyle(elem);
			var paddingRight = this.parseStyle(elemStyle.paddingRight);
			var paddingBottom = this.parseStyle(elemStyle.paddingBottom);
			var scrollParent = this.scrollParent(elem, false, true);
			var scrollbarWidth = this.scrollbarWidth(BODY_REGEX.test(scrollParent.tagName));
			return {
				scrollbarWidth: scrollbarWidth,
				widthOverflow: scrollParent.scrollWidth > scrollParent.clientWidth,
				right: paddingRight + scrollbarWidth,
				originalRight: paddingRight,
				heightOverflow: scrollParent.scrollHeight > scrollParent.clientHeight,
				bottom: paddingBottom + scrollbarWidth,
				originalBottom: paddingBottom
			};
		},
		isScrollable: function(elem, includeHidden) {
			elem = this.getRawNode(elem);
			var overflowRegex = includeHidden ? OVERFLOW_REGEX.hidden : OVERFLOW_REGEX.normal;
			var elemStyle = $window.getComputedStyle(elem);
			return overflowRegex.test(elemStyle.overflow + elemStyle.overflowY + elemStyle.overflowX);
		},
		scrollParent: function(elem, includeHidden, includeSelf) {
			elem = this.getRawNode(elem);
			var overflowRegex = includeHidden ? OVERFLOW_REGEX.hidden : OVERFLOW_REGEX.normal;
			var documentEl = $document[0].documentElement;
			var elemStyle = $window.getComputedStyle(elem);
			if (includeSelf && overflowRegex.test(elemStyle.overflow + elemStyle.overflowY + elemStyle.overflowX)) {
				return elem;
			}
			var excludeStatic = elemStyle.position === 'absolute';
			var scrollParent = elem.parentElement || documentEl;
			if (scrollParent === documentEl || elemStyle.position === 'fixed') {
				return documentEl;
			}
			while (scrollParent.parentElement && scrollParent !== documentEl) {
				var spStyle = $window.getComputedStyle(scrollParent);
				if (excludeStatic && spStyle.position !== 'static') {
					excludeStatic = false;
				}
				if (!excludeStatic && overflowRegex.test(spStyle.overflow + spStyle.overflowY + spStyle.overflowX)) {
					break;
				}
				scrollParent = scrollParent.parentElement;
			}
			return scrollParent;
		},
		position: function(elem, includeMagins) {
			elem = this.getRawNode(elem);
			var elemOffset = this.offset(elem);
			if (includeMagins) {
				var elemStyle = $window.getComputedStyle(elem);
				elemOffset.top -= this.parseStyle(elemStyle.marginTop);
				elemOffset.left -= this.parseStyle(elemStyle.marginLeft);
			}
			var parent = this.offsetParent(elem);
			var parentOffset = {
				top: 0,
				left: 0
			};
			if (parent !== $document[0].documentElement) {
				parentOffset = this.offset(parent);
				parentOffset.top += parent.clientTop - parent.scrollTop;
				parentOffset.left += parent.clientLeft - parent.scrollLeft;
			}
			return {
				width: Math.round(angular.isNumber(elemOffset.width) ? elemOffset.width : elem.offsetWidth),
				height: Math.round(angular.isNumber(elemOffset.height) ? elemOffset.height : elem.offsetHeight),
				top: Math.round(elemOffset.top - parentOffset.top),
				left: Math.round(elemOffset.left - parentOffset.left)
			};
		},
		offset: function(elem) {
			elem = this.getRawNode(elem);
			var elemBCR = elem.getBoundingClientRect();
			return {
				width: Math.round(angular.isNumber(elemBCR.width) ? elemBCR.width : elem.offsetWidth),
				height: Math.round(angular.isNumber(elemBCR.height) ? elemBCR.height : elem.offsetHeight),
				top: Math.round(elemBCR.top + ($window.pageYOffset || $document[0].documentElement.scrollTop)),
				left: Math.round(elemBCR.left + ($window.pageXOffset || $document[0].documentElement.scrollLeft))
			};
		},
		viewportOffset: function(elem, useDocument, includePadding) {
			elem = this.getRawNode(elem);
			includePadding = includePadding !== false ? true : false;
			var elemBCR = elem.getBoundingClientRect();
			var offsetBCR = {
				top: 0,
				left: 0,
				bottom: 0,
				right: 0
			};
			var offsetParent = useDocument ? $document[0].documentElement : this.scrollParent(elem);
			var offsetParentBCR = offsetParent.getBoundingClientRect();
			offsetBCR.top = offsetParentBCR.top + offsetParent.clientTop;
			offsetBCR.left = offsetParentBCR.left + offsetParent.clientLeft;
			if (offsetParent === $document[0].documentElement) {
				offsetBCR.top += $window.pageYOffset;
				offsetBCR.left += $window.pageXOffset;
			}
			offsetBCR.bottom = offsetBCR.top + offsetParent.clientHeight;
			offsetBCR.right = offsetBCR.left + offsetParent.clientWidth;
			if (includePadding) {
				var offsetParentStyle = $window.getComputedStyle(offsetParent);
				offsetBCR.top += this.parseStyle(offsetParentStyle.paddingTop);
				offsetBCR.bottom -= this.parseStyle(offsetParentStyle.paddingBottom);
				offsetBCR.left += this.parseStyle(offsetParentStyle.paddingLeft);
				offsetBCR.right -= this.parseStyle(offsetParentStyle.paddingRight);
			}
			return {
				top: Math.round(elemBCR.top - offsetBCR.top),
				bottom: Math.round(offsetBCR.bottom - elemBCR.bottom),
				left: Math.round(elemBCR.left - offsetBCR.left),
				right: Math.round(offsetBCR.right - elemBCR.right)
			};
		},
		parsePlacement: function(placement) {
			var autoPlace = PLACEMENT_REGEX.auto.test(placement);
			if (autoPlace) {
				placement = placement.replace(PLACEMENT_REGEX.auto, '');
			}
			placement = placement.split('-');
			placement[0] = placement[0] || 'top';
			if (!PLACEMENT_REGEX.primary.test(placement[0])) {
				placement[0] = 'top';
			}
			placement[1] = placement[1] || 'center';
			if (!PLACEMENT_REGEX.secondary.test(placement[1])) {
				placement[1] = 'center';
			}
			if (autoPlace) {
				placement[2] = true;
			} else {
				placement[2] = false;
			}
			return placement;
		},
		positionElements: function(hostElem, targetElem, placement, appendToBody) {
			hostElem = this.getRawNode(hostElem);
			targetElem = this.getRawNode(targetElem);
			var targetWidth = angular.isDefined(targetElem.offsetWidth) ? targetElem.offsetWidth : targetElem.prop('offsetWidth');
			var targetHeight = angular.isDefined(targetElem.offsetHeight) ? targetElem.offsetHeight : targetElem.prop('offsetHeight');
			placement = this.parsePlacement(placement);
			var hostElemPos = appendToBody ? this.offset(hostElem) : this.position(hostElem);
			var targetElemPos = {
				top: 0,
				left: 0,
				placement: ''
			};
			if (placement[2]) {
				var viewportOffset = this.viewportOffset(hostElem, appendToBody);
				var targetElemStyle = $window.getComputedStyle(targetElem);
				var adjustedSize = {
					width: targetWidth + Math.round(Math.abs(this.parseStyle(targetElemStyle.marginLeft) + this.parseStyle(targetElemStyle.marginRight))),
					height: targetHeight + Math.round(Math.abs(this.parseStyle(targetElemStyle.marginTop) + this.parseStyle(targetElemStyle.marginBottom)))
				};
				placement[0] = placement[0] === 'top' && adjustedSize.height > viewportOffset.top && adjustedSize.height <= viewportOffset.bottom ? 'bottom' : placement[0] === 'bottom' && adjustedSize.height > viewportOffset.bottom && adjustedSize.height <= viewportOffset.top ? 'top' : placement[0] === 'left' && adjustedSize.width > viewportOffset.left && adjustedSize.width <= viewportOffset.right ? 'right' : placement[0] === 'right' && adjustedSize.width > viewportOffset.right && adjustedSize.width <= viewportOffset.left ? 'left' : placement[0];
				placement[1] = placement[1] === 'top' && adjustedSize.height - hostElemPos.height > viewportOffset.bottom && adjustedSize.height - hostElemPos.height <= viewportOffset.top ? 'bottom' : placement[1] === 'bottom' && adjustedSize.height - hostElemPos.height > viewportOffset.top && adjustedSize.height - hostElemPos.height <= viewportOffset.bottom ? 'top' : placement[1] === 'left' && adjustedSize.width - hostElemPos.width > viewportOffset.right && adjustedSize.width - hostElemPos.width <= viewportOffset.left ? 'right' : placement[1] === 'right' && adjustedSize.width - hostElemPos.width > viewportOffset.left && adjustedSize.width - hostElemPos.width <= viewportOffset.right ? 'left' : placement[1];
				if (placement[1] === 'center') {
					if (PLACEMENT_REGEX.vertical.test(placement[0])) {
						var xOverflow = hostElemPos.width / 2 - targetWidth / 2;
						if (viewportOffset.left + xOverflow < 0 && adjustedSize.width - hostElemPos.width <= viewportOffset.right) {
							placement[1] = 'left';
						} else if (viewportOffset.right + xOverflow < 0 && adjustedSize.width - hostElemPos.width <= viewportOffset.left) {
							placement[1] = 'right';
						}
					} else {
						var yOverflow = hostElemPos.height / 2 - adjustedSize.height / 2;
						if (viewportOffset.top + yOverflow < 0 && adjustedSize.height - hostElemPos.height <= viewportOffset.bottom) {
							placement[1] = 'top';
						} else if (viewportOffset.bottom + yOverflow < 0 && adjustedSize.height - hostElemPos.height <= viewportOffset.top) {
							placement[1] = 'bottom';
						}
					}
				}
			}
			switch (placement[0]) {
				case 'top':
					targetElemPos.top = hostElemPos.top - targetHeight;
					break;
				case 'bottom':
					targetElemPos.top = hostElemPos.top + hostElemPos.height;
					break;
				case 'left':
					targetElemPos.left = hostElemPos.left - targetWidth;
					break;
				case 'right':
					targetElemPos.left = hostElemPos.left + hostElemPos.width;
					break;
			}
			switch (placement[1]) {
				case 'top':
					targetElemPos.top = hostElemPos.top;
					break;
				case 'bottom':
					targetElemPos.top = hostElemPos.top + hostElemPos.height - targetHeight;
					break;
				case 'left':
					targetElemPos.left = hostElemPos.left;
					break;
				case 'right':
					targetElemPos.left = hostElemPos.left + hostElemPos.width - targetWidth;
					break;
				case 'center':
					if (PLACEMENT_REGEX.vertical.test(placement[0])) {
						targetElemPos.left = hostElemPos.left + hostElemPos.width / 2 - targetWidth / 2;
					} else {
						targetElemPos.top = hostElemPos.top + hostElemPos.height / 2 - targetHeight / 2;
					}
					break;
			}
			targetElemPos.top = Math.round(targetElemPos.top);
			targetElemPos.left = Math.round(targetElemPos.left);
			targetElemPos.placement = placement[1] === 'center' ? placement[0] : placement[0] + '-' + placement[1];
			return targetElemPos;
		},
		adjustTop: function(placementClasses, containerPosition, initialHeight, currentHeight) {
			if (placementClasses.indexOf('top') !== -1 && initialHeight !== currentHeight) {
				return {
					top: containerPosition.top - currentHeight + 'px'
				};
			}
		},
		positionArrow: function(elem, placement) {
			elem = this.getRawNode(elem);
			var innerElem = elem.querySelector('.tooltip-inner, .popover-inner');
			if (!innerElem) {
				return;
			}
			var isTooltip = angular.element(innerElem).hasClass('tooltip-inner');
			var arrowElem = isTooltip ? elem.querySelector('.tooltip-arrow') : elem.querySelector('.arrow');
			if (!arrowElem) {
				return;
			}
			var arrowCss = {
				top: '',
				bottom: '',
				left: '',
				right: ''
			};
			placement = this.parsePlacement(placement);
			if (placement[1] === 'center') {
				angular.element(arrowElem).css(arrowCss);
				return;
			}
			var borderProp = 'border-' + placement[0] + '-width';
			var borderWidth = $window.getComputedStyle(arrowElem)[borderProp];
			var borderRadiusProp = 'border-';
			if (PLACEMENT_REGEX.vertical.test(placement[0])) {
				borderRadiusProp += placement[0] + '-' + placement[1];
			} else {
				borderRadiusProp += placement[1] + '-' + placement[0];
			}
			borderRadiusProp += '-radius';
			var borderRadius = $window.getComputedStyle(isTooltip ? innerElem : elem)[borderRadiusProp];
			switch (placement[0]) {
				case 'top':
					arrowCss.bottom = isTooltip ? '0' : '-' + borderWidth;
					break;
				case 'bottom':
					arrowCss.top = isTooltip ? '0' : '-' + borderWidth;
					break;
				case 'left':
					arrowCss.right = isTooltip ? '0' : '-' + borderWidth;
					break;
				case 'right':
					arrowCss.left = isTooltip ? '0' : '-' + borderWidth;
					break;
			}
			arrowCss[placement[1]] = borderRadius;
			angular.element(arrowElem).css(arrowCss);
		}
	};
}]);
angular.module('ui.bootstrap.dropdown', ['ui.bootstrap.multiMap', 'ui.bootstrap.position']).constant('uibDropdownConfig', {
	appendToOpenClass: 'uib-dropdown-open',
	openClass: 'open'
}).service('uibDropdownService', ['$document', '$rootScope', '$$multiMap', function($document, $rootScope, $$multiMap) {
	var openScope = null;
	var openedContainers = $$multiMap.createNew();
	this.isOnlyOpen = function(dropdownScope, appendTo) {
		var openedDropdowns = openedContainers.get(appendTo);
		if (openedDropdowns) {
			var openDropdown = openedDropdowns.reduce(function(toClose, dropdown) {
				if (dropdown.scope === dropdownScope) {
					return dropdown;
				}
				return toClose;
			}, {});
			if (openDropdown) {
				return openedDropdowns.length === 1;
			}
		}
		return false;
	};
	this.open = function(dropdownScope, element, appendTo) {
		if (!openScope) {
			$document.on('click', closeDropdown);
		}
		if (openScope && openScope !== dropdownScope) {
			openScope.isOpen = false;
		}
		openScope = dropdownScope;
		if (!appendTo) {
			return;
		}
		var openedDropdowns = openedContainers.get(appendTo);
		if (openedDropdowns) {
			var openedScopes = openedDropdowns.map(function(dropdown) {
				return dropdown.scope;
			});
			if (openedScopes.indexOf(dropdownScope) === -1) {
				openedContainers.put(appendTo, {
					scope: dropdownScope
				});
			}
		} else {
			openedContainers.put(appendTo, {
				scope: dropdownScope
			});
		}
	};
	this.close = function(dropdownScope, element, appendTo) {
		if (openScope === dropdownScope) {
			$document.off('click', closeDropdown);
			$document.off('keydown', this.keybindFilter);
			openScope = null;
		}
		if (!appendTo) {
			return;
		}
		var openedDropdowns = openedContainers.get(appendTo);
		if (openedDropdowns) {
			var dropdownToClose = openedDropdowns.reduce(function(toClose, dropdown) {
				if (dropdown.scope === dropdownScope) {
					return dropdown;
				}
				return toClose;
			}, {});
			if (dropdownToClose) {
				openedContainers.remove(appendTo, dropdownToClose);
			}
		}
	};
	var closeDropdown = function(evt) {
		if (!openScope || !openScope.isOpen) {
			return;
		}
		if (evt && openScope.getAutoClose() === 'disabled') {
			return;
		}
		if (evt && evt.which === 3) {
			return;
		}
		var toggleElement = openScope.getToggleElement();
		if (evt && toggleElement && toggleElement[0].contains(evt.target)) {
			return;
		}
		var dropdownElement = openScope.getDropdownElement();
		if (evt && openScope.getAutoClose() === 'outsideClick' && dropdownElement && dropdownElement[0].contains(evt.target)) {
			return;
		}
		openScope.focusToggleElement();
		openScope.isOpen = false;
		if (!$rootScope.$$phase) {
			openScope.$apply();
		}
	};
	this.keybindFilter = function(evt) {
		if (!openScope) {
			return;
		}
		var dropdownElement = openScope.getDropdownElement();
		var toggleElement = openScope.getToggleElement();
		var dropdownElementTargeted = dropdownElement && dropdownElement[0].contains(evt.target);
		var toggleElementTargeted = toggleElement && toggleElement[0].contains(evt.target);
		if (evt.which === 27) {
			evt.stopPropagation();
			openScope.focusToggleElement();
			closeDropdown();
		} else if (openScope.isKeynavEnabled() && [38, 40].indexOf(evt.which) !== -1 && openScope.isOpen && (dropdownElementTargeted || toggleElementTargeted)) {
			evt.preventDefault();
			evt.stopPropagation();
			openScope.focusDropdownEntry(evt.which);
		}
	};
}]).controller('UibDropdownController', ['$scope', '$element', '$attrs', '$parse', 'uibDropdownConfig', 'uibDropdownService', '$animate', '$uibPosition', '$document', '$compile', '$templateRequest', function($scope, $element, $attrs, $parse, dropdownConfig, uibDropdownService, $animate, $position, $document, $compile, $templateRequest) {
	var self = this,
		scope = $scope.$new(),
		templateScope, appendToOpenClass = dropdownConfig.appendToOpenClass,
		openClass = dropdownConfig.openClass,
		getIsOpen, setIsOpen = angular.noop,
		toggleInvoker = $attrs.onToggle ? $parse($attrs.onToggle) : angular.noop,
		keynavEnabled = false,
		selectedOption = null,
		body = $document.find('body');
	$element.addClass('dropdown');
	this.init = function() {
		if ($attrs.isOpen) {
			getIsOpen = $parse($attrs.isOpen);
			setIsOpen = getIsOpen.assign;
			$scope.$watch(getIsOpen, function(value) {
				scope.isOpen = !!value;
			});
		}
		keynavEnabled = angular.isDefined($attrs.keyboardNav);
	};
	this.toggle = function(open) {
		scope.isOpen = arguments.length ? !!open : !scope.isOpen;
		if (angular.isFunction(setIsOpen)) {
			setIsOpen(scope, scope.isOpen);
		}
		return scope.isOpen;
	};
	this.isOpen = function() {
		return scope.isOpen;
	};
	scope.getToggleElement = function() {
		return self.toggleElement;
	};
	scope.getAutoClose = function() {
		return $attrs.autoClose || 'always';
	};
	scope.getElement = function() {
		return $element;
	};
	scope.isKeynavEnabled = function() {
		return keynavEnabled;
	};
	scope.focusDropdownEntry = function(keyCode) {
		var elems = self.dropdownMenu ? angular.element(self.dropdownMenu).find('a') : $element.find('ul').eq(0).find('a');
		switch (keyCode) {
			case 40: {
				if (!angular.isNumber(self.selectedOption)) {
					self.selectedOption = 0;
				} else {
					self.selectedOption = self.selectedOption === elems.length - 1 ? self.selectedOption : self.selectedOption + 1;
				}
				break;
			}
			case 38: {
				if (!angular.isNumber(self.selectedOption)) {
					self.selectedOption = elems.length - 1;
				} else {
					self.selectedOption = self.selectedOption === 0 ? 0 : self.selectedOption - 1;
				}
				break;
			}
		}
		elems[self.selectedOption].focus();
	};
	scope.getDropdownElement = function() {
		return self.dropdownMenu;
	};
	scope.focusToggleElement = function() {
		if (self.toggleElement) {
			self.toggleElement[0].focus();
		}
	};

	function removeDropdownMenu() {
		$element.append(self.dropdownMenu);
	}
	scope.$watch('isOpen', function(isOpen, wasOpen) {
		var appendTo = null,
			appendToBody = false;
		if (angular.isDefined($attrs.dropdownAppendTo)) {
			var appendToEl = $parse($attrs.dropdownAppendTo)(scope);
			if (appendToEl) {
				appendTo = angular.element(appendToEl);
			}
		}
		if (angular.isDefined($attrs.dropdownAppendToBody)) {
			var appendToBodyValue = $parse($attrs.dropdownAppendToBody)(scope);
			if (appendToBodyValue !== false) {
				appendToBody = true;
			}
		}
		if (appendToBody && !appendTo) {
			appendTo = body;
		}
		if (appendTo && self.dropdownMenu) {
			if (isOpen) {
				appendTo.append(self.dropdownMenu);
				$element.on('$destroy', removeDropdownMenu);
			} else {
				$element.off('$destroy', removeDropdownMenu);
				removeDropdownMenu();
			}
		}
		if (appendTo && self.dropdownMenu) {
			var pos = $position.positionElements($element, self.dropdownMenu, 'bottom-left', true),
				css, rightalign, scrollbarPadding, scrollbarWidth = 0;
			css = {
				top: pos.top + 'px',
				display: isOpen ? 'block' : 'none'
			};
			rightalign = self.dropdownMenu.hasClass('dropdown-menu-right');
			if (!rightalign) {
				css.left = pos.left + 'px';
				css.right = 'auto';
			} else {
				css.left = 'auto';
				scrollbarPadding = $position.scrollbarPadding(appendTo);
				if (scrollbarPadding.heightOverflow && scrollbarPadding.scrollbarWidth) {
					scrollbarWidth = scrollbarPadding.scrollbarWidth;
				}
				css.right = window.innerWidth - scrollbarWidth -
					(pos.left + $element.prop('offsetWidth')) + 'px';
			}
			if (!appendToBody) {
				var appendOffset = $position.offset(appendTo);
				css.top = pos.top - appendOffset.top + 'px';
				if (!rightalign) {
					css.left = pos.left - appendOffset.left + 'px';
				} else {
					css.right = window.innerWidth -
						(pos.left - appendOffset.left + $element.prop('offsetWidth')) + 'px';
				}
			}
			self.dropdownMenu.css(css);
		}
		var openContainer = appendTo ? appendTo : $element;
		var dropdownOpenClass = appendTo ? appendToOpenClass : openClass;
		var hasOpenClass = openContainer.hasClass(dropdownOpenClass);
		var isOnlyOpen = uibDropdownService.isOnlyOpen($scope, appendTo);
		if (hasOpenClass === !isOpen) {
			var toggleClass;
			if (appendTo) {
				toggleClass = !isOnlyOpen ? 'addClass' : 'removeClass';
			} else {
				toggleClass = isOpen ? 'addClass' : 'removeClass';
			}
			$animate[toggleClass](openContainer, dropdownOpenClass).then(function() {
				if (angular.isDefined(isOpen) && isOpen !== wasOpen) {
					toggleInvoker($scope, {
						open: !!isOpen
					});
				}
			});
		}
		if (isOpen) {
			if (self.dropdownMenuTemplateUrl) {
				$templateRequest(self.dropdownMenuTemplateUrl).then(function(tplContent) {
					templateScope = scope.$new();
					$compile(tplContent.trim())(templateScope, function(dropdownElement) {
						var newEl = dropdownElement;
						self.dropdownMenu.replaceWith(newEl);
						self.dropdownMenu = newEl;
						$document.on('keydown', uibDropdownService.keybindFilter);
					});
				});
			} else {
				$document.on('keydown', uibDropdownService.keybindFilter);
			}
			scope.focusToggleElement();
			uibDropdownService.open(scope, $element, appendTo);
		} else {
			uibDropdownService.close(scope, $element, appendTo);
			if (self.dropdownMenuTemplateUrl) {
				if (templateScope) {
					templateScope.$destroy();
				}
				var newEl = angular.element('<ul class="dropdown-menu"></ul>');
				self.dropdownMenu.replaceWith(newEl);
				self.dropdownMenu = newEl;
			}
			self.selectedOption = null;
		}
		if (angular.isFunction(setIsOpen)) {
			setIsOpen($scope, isOpen);
		}
	});
}]).directive('uibDropdown', function() {
	return {
		controller: 'UibDropdownController',
		link: function(scope, element, attrs, dropdownCtrl) {
			dropdownCtrl.init();
		}
	};
}).directive('uibDropdownMenu', function() {
	return {
		restrict: 'A',
		require: '?^uibDropdown',
		link: function(scope, element, attrs, dropdownCtrl) {
			if (!dropdownCtrl || angular.isDefined(attrs.dropdownNested)) {
				return;
			}
			element.addClass('dropdown-menu');
			var tplUrl = attrs.templateUrl;
			if (tplUrl) {
				dropdownCtrl.dropdownMenuTemplateUrl = tplUrl;
			}
			if (!dropdownCtrl.dropdownMenu) {
				dropdownCtrl.dropdownMenu = element;
			}
		}
	};
}).directive('uibDropdownToggle', function() {
	return {
		require: '?^uibDropdown',
		link: function(scope, element, attrs, dropdownCtrl) {
			if (!dropdownCtrl) {
				return;
			}
			element.addClass('dropdown-toggle');
			dropdownCtrl.toggleElement = element;
			var toggleDropdown = function(event) {
				event.preventDefault();
				if (!element.hasClass('disabled') && !attrs.disabled) {
					scope.$apply(function() {
						dropdownCtrl.toggle();
					});
				}
			};
			element.on('click', toggleDropdown);
			element.attr({
				'aria-haspopup': true,
				'aria-expanded': false
			});
			scope.$watch(dropdownCtrl.isOpen, function(isOpen) {
				element.attr('aria-expanded', !!isOpen);
			});
			scope.$on('$destroy', function() {
				element.off('click', toggleDropdown);
			});
		}
	};
});
angular.module('ui.bootstrap.multiMap', []).factory('$$multiMap', function() {
	return {
		createNew: function() {
			var map = {};
			return {
				entries: function() {
					return Object.keys(map).map(function(key) {
						return {
							key: key,
							value: map[key]
						};
					});
				},
				get: function(key) {
					return map[key];
				},
				hasKey: function(key) {
					return !!map[key];
				},
				keys: function() {
					return Object.keys(map);
				},
				put: function(key, value) {
					if (!map[key]) {
						map[key] = [];
					}
					map[key].push(value);
				},
				remove: function(key, value) {
					var values = map[key];
					if (!values) {
						return;
					}
					var idx = values.indexOf(value);
					if (idx !== -1) {
						values.splice(idx, 1);
					}
					if (!values.length) {
						delete map[key];
					}
				}
			};
		}
	};
});
angular.module('ui.bootstrap.stackedMap', []).factory('$$stackedMap', function() {
	return {
		createNew: function() {
			var stack = [];
			return {
				add: function(key, value) {
					stack.push({
						key: key,
						value: value
					});
				},
				get: function(key) {
					for (var i = 0; i < stack.length; i++) {
						if (key === stack[i].key) {
							return stack[i];
						}
					}
				},
				keys: function() {
					var keys = [];
					for (var i = 0; i < stack.length; i++) {
						keys.push(stack[i].key);
					}
					return keys;
				},
				top: function() {
					return stack[stack.length - 1];
				},
				remove: function(key) {
					var idx = -1;
					for (var i = 0; i < stack.length; i++) {
						if (key === stack[i].key) {
							idx = i;
							break;
						}
					}
					return stack.splice(idx, 1)[0];
				},
				removeTop: function() {
					return stack.pop();
				},
				length: function() {
					return stack.length;
				}
			};
		}
	};
});
angular.module('ui.bootstrap.modal', ['ui.bootstrap.multiMap', 'ui.bootstrap.stackedMap', 'ui.bootstrap.position']).provider('$uibResolve', function() {
	var resolve = this;
	this.resolver = null;
	this.setResolver = function(resolver) {
		this.resolver = resolver;
	};
	this.$get = ['$injector', '$q', function($injector, $q) {
		var resolver = resolve.resolver ? $injector.get(resolve.resolver) : null;
		return {
			resolve: function(invocables, locals, parent, self) {
				if (resolver) {
					return resolver.resolve(invocables, locals, parent, self);
				}
				var promises = [];
				angular.forEach(invocables, function(value) {
					if (angular.isFunction(value) || angular.isArray(value)) {
						promises.push($q.resolve($injector.invoke(value)));
					} else if (angular.isString(value)) {
						promises.push($q.resolve($injector.get(value)));
					} else {
						promises.push($q.resolve(value));
					}
				});
				return $q.all(promises).then(function(resolves) {
					var resolveObj = {};
					var resolveIter = 0;
					angular.forEach(invocables, function(value, key) {
						resolveObj[key] = resolves[resolveIter++];
					});
					return resolveObj;
				});
			}
		};
	}];
}).directive('uibModalBackdrop', ['$animate', '$injector', '$uibModalStack', function($animate, $injector, $modalStack) {
	return {
		restrict: 'A',
		compile: function(tElement, tAttrs) {
			tElement.addClass(tAttrs.backdropClass);
			return linkFn;
		}
	};

	function linkFn(scope, element, attrs) {
		if (attrs.modalInClass) {
			$animate.addClass(element, attrs.modalInClass);
			scope.$on($modalStack.NOW_CLOSING_EVENT, function(e, setIsAsync) {
				var done = setIsAsync();
				if (scope.modalOptions.animation) {
					$animate.removeClass(element, attrs.modalInClass).then(done);
				} else {
					done();
				}
			});
		}
	}
}]).directive('uibModalWindow', ['$uibModalStack', '$q', '$animateCss', '$document', function($modalStack, $q, $animateCss, $document) {
	return {
		scope: {
			index: '@'
		},
		restrict: 'A',
		transclude: true,
		templateUrl: function(tElement, tAttrs) {
			return tAttrs.templateUrl || 'uib/template/modal/window.html';
		},
		link: function(scope, element, attrs) {
			element.addClass(attrs.windowTopClass || '');
			scope.size = attrs.size;
			scope.close = function(evt) {
				var modal = $modalStack.getTop();
				if (modal && modal.value.backdrop && modal.value.backdrop !== 'static' && evt.target === evt.currentTarget) {
					evt.preventDefault();
					evt.stopPropagation();
					$modalStack.dismiss(modal.key, 'backdrop click');
				}
			};
			element.on('click', scope.close);
			scope.$isRendered = true;
			var modalRenderDeferObj = $q.defer();
			scope.$$postDigest(function() {
				modalRenderDeferObj.resolve();
			});
			modalRenderDeferObj.promise.then(function() {
				var animationPromise = null;
				if (attrs.modalInClass) {
					animationPromise = $animateCss(element, {
						addClass: attrs.modalInClass
					}).start();
					scope.$on($modalStack.NOW_CLOSING_EVENT, function(e, setIsAsync) {
						var done = setIsAsync();
						$animateCss(element, {
							removeClass: attrs.modalInClass
						}).start().then(done);
					});
				}
				$q.when(animationPromise).then(function() {
					var modal = $modalStack.getTop();
					if (modal) {
						$modalStack.modalRendered(modal.key);
					}
					if (!($document[0].activeElement && element[0].contains($document[0].activeElement))) {
						var inputWithAutofocus = element[0].querySelector('[autofocus]');
						if (inputWithAutofocus) {
							inputWithAutofocus.focus();
						} else {
							element[0].focus();
						}
					}
				});
			});
		}
	};
}]).directive('uibModalAnimationClass', function() {
	return {
		compile: function(tElement, tAttrs) {
			if (tAttrs.modalAnimation) {
				tElement.addClass(tAttrs.uibModalAnimationClass);
			}
		}
	};
}).directive('uibModalTransclude', ['$animate', function($animate) {
	return {
		link: function(scope, element, attrs, controller, transclude) {
			transclude(scope.$parent, function(clone) {
				element.empty();
				$animate.enter(clone, element);
			});
		}
	};
}]).factory('$uibModalStack', ['$animate', '$animateCss', '$document', '$compile', '$rootScope', '$q', '$$multiMap', '$$stackedMap', '$uibPosition', function($animate, $animateCss, $document, $compile, $rootScope, $q, $$multiMap, $$stackedMap, $uibPosition) {
	var OPENED_MODAL_CLASS = 'modal-open';
	var backdropDomEl, backdropScope;
	var openedWindows = $$stackedMap.createNew();
	var openedClasses = $$multiMap.createNew();
	var $modalStack = {
		NOW_CLOSING_EVENT: 'modal.stack.now-closing'
	};
	var topModalIndex = 0;
	var previousTopOpenedModal = null;
	var ARIA_HIDDEN_ATTRIBUTE_NAME = 'data-bootstrap-modal-aria-hidden-count';
	var tabbableSelector = 'a[href], area[href], input:not([disabled]):not([tabindex=\'-1\']), ' + 'button:not([disabled]):not([tabindex=\'-1\']),select:not([disabled]):not([tabindex=\'-1\']), textarea:not([disabled]):not([tabindex=\'-1\']), ' + 'iframe, object, embed, *[tabindex]:not([tabindex=\'-1\']), *[contenteditable=true]';
	var scrollbarPadding;
	var SNAKE_CASE_REGEXP = /[A-Z]/g;

	function snake_case(name) {
		var separator = '-';
		return name.replace(SNAKE_CASE_REGEXP, function(letter, pos) {
			return (pos ? separator : '') + letter.toLowerCase();
		});
	}

	function isVisible(element) {
		return !!(element.offsetWidth || element.offsetHeight || element.getClientRects().length);
	}

	function backdropIndex() {
		var topBackdropIndex = -1;
		var opened = openedWindows.keys();
		for (var i = 0; i < opened.length; i++) {
			if (openedWindows.get(opened[i]).value.backdrop) {
				topBackdropIndex = i;
			}
		}
		if (topBackdropIndex > -1 && topBackdropIndex < topModalIndex) {
			topBackdropIndex = topModalIndex;
		}
		return topBackdropIndex;
	}
	$rootScope.$watch(backdropIndex, function(newBackdropIndex) {
		if (backdropScope) {
			backdropScope.index = newBackdropIndex;
		}
	});

	function removeModalWindow(modalInstance, elementToReceiveFocus) {
		var modalWindow = openedWindows.get(modalInstance).value;
		var appendToElement = modalWindow.appendTo;
		openedWindows.remove(modalInstance);
		previousTopOpenedModal = openedWindows.top();
		if (previousTopOpenedModal) {
			topModalIndex = parseInt(previousTopOpenedModal.value.modalDomEl.attr('index'), 10);
		}
		removeAfterAnimate(modalWindow.modalDomEl, modalWindow.modalScope, function() {
			var modalBodyClass = modalWindow.openedClass || OPENED_MODAL_CLASS;
			openedClasses.remove(modalBodyClass, modalInstance);
			var areAnyOpen = openedClasses.hasKey(modalBodyClass);
			appendToElement.toggleClass(modalBodyClass, areAnyOpen);
			if (!areAnyOpen && scrollbarPadding && scrollbarPadding.heightOverflow && scrollbarPadding.scrollbarWidth) {
				if (scrollbarPadding.originalRight) {
					appendToElement.css({
						paddingRight: scrollbarPadding.originalRight + 'px'
					});
				} else {
					appendToElement.css({
						paddingRight: ''
					});
				}
				scrollbarPadding = null;
			}
			toggleTopWindowClass(true);
		}, modalWindow.closedDeferred);
		checkRemoveBackdrop();
		if (elementToReceiveFocus && elementToReceiveFocus.focus) {
			elementToReceiveFocus.focus();
		} else if (appendToElement.focus) {
			appendToElement.focus();
		}
	}

	function toggleTopWindowClass(toggleSwitch) {
		var modalWindow;
		if (openedWindows.length() > 0) {
			modalWindow = openedWindows.top().value;
			modalWindow.modalDomEl.toggleClass(modalWindow.windowTopClass || '', toggleSwitch);
		}
	}

	function checkRemoveBackdrop() {
		if (backdropDomEl && backdropIndex() === -1) {
			var backdropScopeRef = backdropScope;
			removeAfterAnimate(backdropDomEl, backdropScope, function() {
				backdropScopeRef = null;
			});
			backdropDomEl = undefined;
			backdropScope = undefined;
		}
	}

	function removeAfterAnimate(domEl, scope, done, closedDeferred) {
		var asyncDeferred;
		var asyncPromise = null;
		var setIsAsync = function() {
			if (!asyncDeferred) {
				asyncDeferred = $q.defer();
				asyncPromise = asyncDeferred.promise;
			}
			return function asyncDone() {
				asyncDeferred.resolve();
			};
		};
		scope.$broadcast($modalStack.NOW_CLOSING_EVENT, setIsAsync);
		return $q.when(asyncPromise).then(afterAnimating);

		function afterAnimating() {
			if (afterAnimating.done) {
				return;
			}
			afterAnimating.done = true;
			$animate.leave(domEl).then(function() {
				if (done) {
					done();
				}
				domEl.remove();
				if (closedDeferred) {
					closedDeferred.resolve();
				}
			});
			scope.$destroy();
		}
	}
	$document.on('keydown', keydownListener);
	$rootScope.$on('$destroy', function() {
		$document.off('keydown', keydownListener);
	});

	function keydownListener(evt) {
		if (evt.isDefaultPrevented()) {
			return evt;
		}
		var modal = openedWindows.top();
		if (modal) {
			switch (evt.which) {
				case 27: {
					if (modal.value.keyboard) {
						evt.preventDefault();
						$rootScope.$apply(function() {
							$modalStack.dismiss(modal.key, 'escape key press');
						});
					}
					break;
				}
				case 9: {
					var list = $modalStack.loadFocusElementList(modal);
					var focusChanged = false;
					if (evt.shiftKey) {
						if ($modalStack.isFocusInFirstItem(evt, list) || $modalStack.isModalFocused(evt, modal)) {
							focusChanged = $modalStack.focusLastFocusableElement(list);
						}
					} else {
						if ($modalStack.isFocusInLastItem(evt, list)) {
							focusChanged = $modalStack.focusFirstFocusableElement(list);
						}
					}
					if (focusChanged) {
						evt.preventDefault();
						evt.stopPropagation();
					}
					break;
				}
			}
		}
	}
	$modalStack.open = function(modalInstance, modal) {
		var modalOpener = $document[0].activeElement,
			modalBodyClass = modal.openedClass || OPENED_MODAL_CLASS;
		toggleTopWindowClass(false);
		previousTopOpenedModal = openedWindows.top();
		openedWindows.add(modalInstance, {
			deferred: modal.deferred,
			renderDeferred: modal.renderDeferred,
			closedDeferred: modal.closedDeferred,
			modalScope: modal.scope,
			backdrop: modal.backdrop,
			keyboard: modal.keyboard,
			openedClass: modal.openedClass,
			windowTopClass: modal.windowTopClass,
			animation: modal.animation,
			appendTo: modal.appendTo
		});
		openedClasses.put(modalBodyClass, modalInstance);
		var appendToElement = modal.appendTo,
			currBackdropIndex = backdropIndex();
		if (currBackdropIndex >= 0 && !backdropDomEl) {
			backdropScope = $rootScope.$new(true);
			backdropScope.modalOptions = modal;
			backdropScope.index = currBackdropIndex;
			backdropDomEl = angular.element('<div uib-modal-backdrop="modal-backdrop"></div>');
			backdropDomEl.attr({
				'class': 'modal-backdrop',
				'ng-style': '{\'z-index\': 1040 + (index && 1 || 0) + index*10}',
				'uib-modal-animation-class': 'fade',
				'modal-in-class': 'in'
			});
			if (modal.backdropClass) {
				backdropDomEl.addClass(modal.backdropClass);
			}
			if (modal.animation) {
				backdropDomEl.attr('modal-animation', 'true');
			}
			$compile(backdropDomEl)(backdropScope);
			$animate.enter(backdropDomEl, appendToElement);
			if ($uibPosition.isScrollable(appendToElement)) {
				scrollbarPadding = $uibPosition.scrollbarPadding(appendToElement);
				if (scrollbarPadding.heightOverflow && scrollbarPadding.scrollbarWidth) {
					appendToElement.css({
						paddingRight: scrollbarPadding.right + 'px'
					});
				}
			}
		}
		var content;
		if (modal.component) {
			content = document.createElement(snake_case(modal.component.name));
			content = angular.element(content);
			content.attr({
				resolve: '$resolve',
				'modal-instance': '$uibModalInstance',
				close: '$close($value)',
				dismiss: '$dismiss($value)'
			});
		} else {
			content = modal.content;
		}
		topModalIndex = previousTopOpenedModal ? parseInt(previousTopOpenedModal.value.modalDomEl.attr('index'), 10) + 1 : 0;
		var angularDomEl = angular.element('<div uib-modal-window="modal-window"></div>');
		angularDomEl.attr({
			'class': 'modal',
			'template-url': modal.windowTemplateUrl,
			'window-top-class': modal.windowTopClass,
			'role': 'dialog',
			'aria-labelledby': modal.ariaLabelledBy,
			'aria-describedby': modal.ariaDescribedBy,
			'size': modal.size,
			'index': topModalIndex,
			'animate': 'animate',
			'ng-style': '{\'z-index\': 1050 + $$topModalIndex*10, display: \'block\'}',
			'tabindex': -1,
			'uib-modal-animation-class': 'fade',
			'modal-in-class': 'in'
		}).append(content);
		if (modal.windowClass) {
			angularDomEl.addClass(modal.windowClass);
		}
		if (modal.animation) {
			angularDomEl.attr('modal-animation', 'true');
		}
		appendToElement.addClass(modalBodyClass);
		if (modal.scope) {
			modal.scope.$$topModalIndex = topModalIndex;
		}
		$animate.enter($compile(angularDomEl)(modal.scope), appendToElement);
		openedWindows.top().value.modalDomEl = angularDomEl;
		openedWindows.top().value.modalOpener = modalOpener;
		applyAriaHidden(angularDomEl);

		function applyAriaHidden(el) {
			if (!el || el[0].tagName === 'BODY') {
				return;
			}
			getSiblings(el).forEach(function(sibling) {
				var elemIsAlreadyHidden = sibling.getAttribute('aria-hidden') === 'true',
					ariaHiddenCount = parseInt(sibling.getAttribute(ARIA_HIDDEN_ATTRIBUTE_NAME), 10);
				if (!ariaHiddenCount) {
					ariaHiddenCount = elemIsAlreadyHidden ? 1 : 0;
				}
				sibling.setAttribute(ARIA_HIDDEN_ATTRIBUTE_NAME, ariaHiddenCount + 1);
				sibling.setAttribute('aria-hidden', 'true');
			});
			return applyAriaHidden(el.parent());

			function getSiblings(el) {
				var children = el.parent() ? el.parent().children() : [];
				return Array.prototype.filter.call(children, function(child) {
					return child !== el[0];
				});
			}
		}
	};

	function broadcastClosing(modalWindow, resultOrReason, closing) {
		return !modalWindow.value.modalScope.$broadcast('modal.closing', resultOrReason, closing).defaultPrevented;
	}

	function unhideBackgroundElements() {
		Array.prototype.forEach.call(document.querySelectorAll('[' + ARIA_HIDDEN_ATTRIBUTE_NAME + ']'), function(hiddenEl) {
			var ariaHiddenCount = parseInt(hiddenEl.getAttribute(ARIA_HIDDEN_ATTRIBUTE_NAME), 10),
				newHiddenCount = ariaHiddenCount - 1;
			hiddenEl.setAttribute(ARIA_HIDDEN_ATTRIBUTE_NAME, newHiddenCount);
			if (!newHiddenCount) {
				hiddenEl.removeAttribute(ARIA_HIDDEN_ATTRIBUTE_NAME);
				hiddenEl.removeAttribute('aria-hidden');
			}
		});
	}
	$modalStack.close = function(modalInstance, result) {
		var modalWindow = openedWindows.get(modalInstance);
		unhideBackgroundElements();
		if (modalWindow && broadcastClosing(modalWindow, result, true)) {
			modalWindow.value.modalScope.$$uibDestructionScheduled = true;
			modalWindow.value.deferred.resolve(result);
			removeModalWindow(modalInstance, modalWindow.value.modalOpener);
			return true;
		}
		return !modalWindow;
	};
	$modalStack.dismiss = function(modalInstance, reason) {
		var modalWindow = openedWindows.get(modalInstance);
		unhideBackgroundElements();
		if (modalWindow && broadcastClosing(modalWindow, reason, false)) {
			modalWindow.value.modalScope.$$uibDestructionScheduled = true;
			modalWindow.value.deferred.reject(reason);
			removeModalWindow(modalInstance, modalWindow.value.modalOpener);
			return true;
		}
		return !modalWindow;
	};
	$modalStack.dismissAll = function(reason) {
		var topModal = this.getTop();
		while (topModal && this.dismiss(topModal.key, reason)) {
			topModal = this.getTop();
		}
	};
	$modalStack.getTop = function() {
		return openedWindows.top();
	};
	$modalStack.modalRendered = function(modalInstance) {
		var modalWindow = openedWindows.get(modalInstance);
		if (modalWindow) {
			modalWindow.value.renderDeferred.resolve();
		}
	};
	$modalStack.focusFirstFocusableElement = function(list) {
		if (list.length > 0) {
			list[0].focus();
			return true;
		}
		return false;
	};
	$modalStack.focusLastFocusableElement = function(list) {
		if (list.length > 0) {
			list[list.length - 1].focus();
			return true;
		}
		return false;
	};
	$modalStack.isModalFocused = function(evt, modalWindow) {
		if (evt && modalWindow) {
			var modalDomEl = modalWindow.value.modalDomEl;
			if (modalDomEl && modalDomEl.length) {
				return (evt.target || evt.srcElement) === modalDomEl[0];
			}
		}
		return false;
	};
	$modalStack.isFocusInFirstItem = function(evt, list) {
		if (list.length > 0) {
			return (evt.target || evt.srcElement) === list[0];
		}
		return false;
	};
	$modalStack.isFocusInLastItem = function(evt, list) {
		if (list.length > 0) {
			return (evt.target || evt.srcElement) === list[list.length - 1];
		}
		return false;
	};
	$modalStack.loadFocusElementList = function(modalWindow) {
		if (modalWindow) {
			var modalDomE1 = modalWindow.value.modalDomEl;
			if (modalDomE1 && modalDomE1.length) {
				var elements = modalDomE1[0].querySelectorAll(tabbableSelector);
				return elements ? Array.prototype.filter.call(elements, function(element) {
					return isVisible(element);
				}) : elements;
			}
		}
	};
	return $modalStack;
}]).provider('$uibModal', function() {
	var $modalProvider = {
		options: {
			animation: true,
			backdrop: true,
			keyboard: true
		},
		$get: ['$rootScope', '$q', '$document', '$templateRequest', '$controller', '$uibResolve', '$uibModalStack', function($rootScope, $q, $document, $templateRequest, $controller, $uibResolve, $modalStack) {
			var $modal = {};

			function getTemplatePromise(options) {
				return options.template ? $q.when(options.template) : $templateRequest(angular.isFunction(options.templateUrl) ? options.templateUrl() : options.templateUrl);
			}
			var promiseChain = null;
			$modal.getPromiseChain = function() {
				return promiseChain;
			};
			$modal.open = function(modalOptions) {
				var modalResultDeferred = $q.defer();
				var modalOpenedDeferred = $q.defer();
				var modalClosedDeferred = $q.defer();
				var modalRenderDeferred = $q.defer();
				var modalInstance = {
					result: modalResultDeferred.promise,
					opened: modalOpenedDeferred.promise,
					closed: modalClosedDeferred.promise,
					rendered: modalRenderDeferred.promise,
					close: function(result) {
						return $modalStack.close(modalInstance, result);
					},
					dismiss: function(reason) {
						return $modalStack.dismiss(modalInstance, reason);
					}
				};
				modalOptions = angular.extend({}, $modalProvider.options, modalOptions);
				modalOptions.resolve = modalOptions.resolve || {};
				modalOptions.appendTo = modalOptions.appendTo || $document.find('body').eq(0);
				if (!modalOptions.appendTo.length) {
					throw new Error('appendTo element not found. Make sure that the element passed is in DOM.');
				}
				if (!modalOptions.component && !modalOptions.template && !modalOptions.templateUrl) {
					throw new Error('One of component or template or templateUrl options is required.');
				}
				var templateAndResolvePromise;
				if (modalOptions.component) {
					templateAndResolvePromise = $q.when($uibResolve.resolve(modalOptions.resolve, {}, null, null));
				} else {
					templateAndResolvePromise = $q.all([getTemplatePromise(modalOptions), $uibResolve.resolve(modalOptions.resolve, {}, null, null)]);
				}

				function resolveWithTemplate() {
					return templateAndResolvePromise;
				}
				var samePromise;
				samePromise = promiseChain = $q.all([promiseChain]).then(resolveWithTemplate, resolveWithTemplate).then(function resolveSuccess(tplAndVars) {
					var providedScope = modalOptions.scope || $rootScope;
					var modalScope = providedScope.$new();
					modalScope.$close = modalInstance.close;
					modalScope.$dismiss = modalInstance.dismiss;
					modalScope.$on('$destroy', function() {
						if (!modalScope.$$uibDestructionScheduled) {
							modalScope.$dismiss('$uibUnscheduledDestruction');
						}
					});
					var modal = {
						scope: modalScope,
						deferred: modalResultDeferred,
						renderDeferred: modalRenderDeferred,
						closedDeferred: modalClosedDeferred,
						animation: modalOptions.animation,
						backdrop: modalOptions.backdrop,
						keyboard: modalOptions.keyboard,
						backdropClass: modalOptions.backdropClass,
						windowTopClass: modalOptions.windowTopClass,
						windowClass: modalOptions.windowClass,
						windowTemplateUrl: modalOptions.windowTemplateUrl,
						ariaLabelledBy: modalOptions.ariaLabelledBy,
						ariaDescribedBy: modalOptions.ariaDescribedBy,
						size: modalOptions.size,
						openedClass: modalOptions.openedClass,
						appendTo: modalOptions.appendTo
					};
					var component = {};
					var ctrlInstance, ctrlInstantiate, ctrlLocals = {};
					if (modalOptions.component) {
						constructLocals(component, false, true, false);
						component.name = modalOptions.component;
						modal.component = component;
					} else if (modalOptions.controller) {
						constructLocals(ctrlLocals, true, false, true);
						ctrlInstantiate = $controller(modalOptions.controller, ctrlLocals, true, modalOptions.controllerAs);
						if (modalOptions.controllerAs && modalOptions.bindToController) {
							ctrlInstance = ctrlInstantiate.instance;
							ctrlInstance.$close = modalScope.$close;
							ctrlInstance.$dismiss = modalScope.$dismiss;
							angular.extend(ctrlInstance, {
								$resolve: ctrlLocals.$scope.$resolve
							}, providedScope);
						}
						ctrlInstance = ctrlInstantiate();
						if (angular.isFunction(ctrlInstance.$onInit)) {
							ctrlInstance.$onInit();
						}
					}
					if (!modalOptions.component) {
						modal.content = tplAndVars[0];
					}
					$modalStack.open(modalInstance, modal);
					modalOpenedDeferred.resolve(true);

					function constructLocals(obj, template, instanceOnScope, injectable) {
						obj.$scope = modalScope;
						obj.$scope.$resolve = {};
						if (instanceOnScope) {
							obj.$scope.$uibModalInstance = modalInstance;
						} else {
							obj.$uibModalInstance = modalInstance;
						}
						var resolves = template ? tplAndVars[1] : tplAndVars;
						angular.forEach(resolves, function(value, key) {
							if (injectable) {
								obj[key] = value;
							}
							obj.$scope.$resolve[key] = value;
						});
					}
				}, function resolveError(reason) {
					modalOpenedDeferred.reject(reason);
					modalResultDeferred.reject(reason);
				})['finally'](function() {
					if (promiseChain === samePromise) {
						promiseChain = null;
					}
				});
				return modalInstance;
			};
			return $modal;
		}]
	};
	return $modalProvider;
});
angular.module('ui.bootstrap.tooltip', ['ui.bootstrap.position', 'ui.bootstrap.stackedMap']).provider('$uibTooltip', function() {
	var defaultOptions = {
		placement: 'top',
		placementClassPrefix: '',
		animation: true,
		popupDelay: 0,
		popupCloseDelay: 0,
		useContentExp: false
	};
	var triggerMap = {
		'mouseenter': 'mouseleave',
		'click': 'click',
		'outsideClick': 'outsideClick',
		'focus': 'blur',
		'none': ''
	};
	var globalOptions = {};
	this.options = function(value) {
		angular.extend(globalOptions, value);
	};
	this.setTriggers = function setTriggers(triggers) {
		angular.extend(triggerMap, triggers);
	};

	function snake_case(name) {
		var regexp = /[A-Z]/g;
		var separator = '-';
		return name.replace(regexp, function(letter, pos) {
			return (pos ? separator : '') + letter.toLowerCase();
		});
	}
	this.$get = ['$window', '$compile', '$timeout', '$document', '$uibPosition', '$interpolate', '$rootScope', '$parse', '$$stackedMap', function($window, $compile, $timeout, $document, $position, $interpolate, $rootScope, $parse, $$stackedMap) {
		var openedTooltips = $$stackedMap.createNew();
		$document.on('keyup', keypressListener);
		$rootScope.$on('$destroy', function() {
			$document.off('keyup', keypressListener);
		});

		function keypressListener(e) {
			if (e.which === 27) {
				var last = openedTooltips.top();
				if (last) {
					last.value.close();
					last = null;
				}
			}
		}
		return function $tooltip(ttType, prefix, defaultTriggerShow, options) {
			options = angular.extend({}, defaultOptions, globalOptions, options);

			function getTriggers(trigger) {
				var show = (trigger || options.trigger || defaultTriggerShow).split(' ');
				var hide = show.map(function(trigger) {
					return triggerMap[trigger] || trigger;
				});
				return {
					show: show,
					hide: hide
				};
			}
			var directiveName = snake_case(ttType);
			var startSym = $interpolate.startSymbol();
			var endSym = $interpolate.endSymbol();
			var template = '<div ' + directiveName + '-popup ' + 'uib-title="' + startSym + 'title' + endSym + '" ' +
				(options.useContentExp ? 'content-exp="contentExp()" ' : 'content="' + startSym + 'content' + endSym + '" ') + 'origin-scope="origScope" ' + 'class="uib-position-measure ' + prefix + '" ' + 'tooltip-animation-class="fade"' + 'uib-tooltip-classes ' + 'ng-class="{ in: isOpen }" ' + '>' + '</div>';
			return {
				compile: function(tElem, tAttrs) {
					var tooltipLinker = $compile(template);
					return function link(scope, element, attrs, tooltipCtrl) {
						var tooltip;
						var tooltipLinkedScope;
						var transitionTimeout;
						var showTimeout;
						var hideTimeout;
						var positionTimeout;
						var adjustmentTimeout;
						var appendToBody = angular.isDefined(options.appendToBody) ? options.appendToBody : false;
						var triggers = getTriggers(undefined);
						var hasEnableExp = angular.isDefined(attrs[prefix + 'Enable']);
						var ttScope = scope.$new(true);
						var repositionScheduled = false;
						var isOpenParse = angular.isDefined(attrs[prefix + 'IsOpen']) ? $parse(attrs[prefix + 'IsOpen']) : false;
						var contentParse = options.useContentExp ? $parse(attrs[ttType]) : false;
						var observers = [];
						var lastPlacement;
						var positionTooltip = function() {
							if (!tooltip || !tooltip.html()) {
								return;
							}
							if (!positionTimeout) {
								positionTimeout = $timeout(function() {
									var ttPosition = $position.positionElements(element, tooltip, ttScope.placement, appendToBody);
									var initialHeight = angular.isDefined(tooltip.offsetHeight) ? tooltip.offsetHeight : tooltip.prop('offsetHeight');
									var elementPos = appendToBody ? $position.offset(element) : $position.position(element);
									tooltip.css({
										top: ttPosition.top + 'px',
										left: ttPosition.left + 'px'
									});
									var placementClasses = ttPosition.placement.split('-');
									if (!tooltip.hasClass(placementClasses[0])) {
										tooltip.removeClass(lastPlacement.split('-')[0]);
										tooltip.addClass(placementClasses[0]);
									}
									if (!tooltip.hasClass(options.placementClassPrefix + ttPosition.placement)) {
										tooltip.removeClass(options.placementClassPrefix + lastPlacement);
										tooltip.addClass(options.placementClassPrefix + ttPosition.placement);
									}
									adjustmentTimeout = $timeout(function() {
										var currentHeight = angular.isDefined(tooltip.offsetHeight) ? tooltip.offsetHeight : tooltip.prop('offsetHeight');
										var adjustment = $position.adjustTop(placementClasses, elementPos, initialHeight, currentHeight);
										if (adjustment) {
											tooltip.css(adjustment);
										}
										adjustmentTimeout = null;
									}, 0, false);
									if (tooltip.hasClass('uib-position-measure')) {
										$position.positionArrow(tooltip, ttPosition.placement);
										tooltip.removeClass('uib-position-measure');
									} else if (lastPlacement !== ttPosition.placement) {
										$position.positionArrow(tooltip, ttPosition.placement);
									}
									lastPlacement = ttPosition.placement;
									positionTimeout = null;
								}, 0, false);
							}
						};
						ttScope.origScope = scope;
						ttScope.isOpen = false;

						function toggleTooltipBind() {
							if (!ttScope.isOpen) {
								showTooltipBind();
							} else {
								hideTooltipBind();
							}
						}

						function showTooltipBind() {
							if (hasEnableExp && !scope.$eval(attrs[prefix + 'Enable'])) {
								return;
							}
							cancelHide();
							prepareTooltip();
							if (ttScope.popupDelay) {
								if (!showTimeout) {
									showTimeout = $timeout(show, ttScope.popupDelay, false);
								}
							} else {
								show();
							}
						}

						function hideTooltipBind() {
							cancelShow();
							if (ttScope.popupCloseDelay) {
								if (!hideTimeout) {
									hideTimeout = $timeout(hide, ttScope.popupCloseDelay, false);
								}
							} else {
								hide();
							}
						}

						function show() {
							cancelShow();
							cancelHide();
							if (!ttScope.content) {
								return angular.noop;
							}
							createTooltip();
							ttScope.$evalAsync(function() {
								ttScope.isOpen = true;
								assignIsOpen(true);
								positionTooltip();
							});
						}

						function cancelShow() {
							if (showTimeout) {
								$timeout.cancel(showTimeout);
								showTimeout = null;
							}
							if (positionTimeout) {
								$timeout.cancel(positionTimeout);
								positionTimeout = null;
							}
						}

						function hide() {
							if (!ttScope) {
								return;
							}
							ttScope.$evalAsync(function() {
								if (ttScope) {
									ttScope.isOpen = false;
									assignIsOpen(false);
									if (ttScope.animation) {
										if (!transitionTimeout) {
											transitionTimeout = $timeout(removeTooltip, 150, false);
										}
									} else {
										removeTooltip();
									}
								}
							});
						}

						function cancelHide() {
							if (hideTimeout) {
								$timeout.cancel(hideTimeout);
								hideTimeout = null;
							}
							if (transitionTimeout) {
								$timeout.cancel(transitionTimeout);
								transitionTimeout = null;
							}
						}

						function createTooltip() {
							if (tooltip) {
								return;
							}
							tooltipLinkedScope = ttScope.$new();
							tooltip = tooltipLinker(tooltipLinkedScope, function(tooltip) {
								if (appendToBody) {
									$document.find('body').append(tooltip);
								} else {
									element.after(tooltip);
								}
							});
							openedTooltips.add(ttScope, {
								close: hide
							});
							prepObservers();
						}

						function removeTooltip() {
							cancelShow();
							cancelHide();
							unregisterObservers();
							if (tooltip) {
								tooltip.remove();
								tooltip = null;
								if (adjustmentTimeout) {
									$timeout.cancel(adjustmentTimeout);
								}
							}
							openedTooltips.remove(ttScope);
							if (tooltipLinkedScope) {
								tooltipLinkedScope.$destroy();
								tooltipLinkedScope = null;
							}
						}

						function prepareTooltip() {
							ttScope.title = attrs[prefix + 'Title'];
							if (contentParse) {
								ttScope.content = contentParse(scope);
							} else {
								ttScope.content = attrs[ttType];
							}
							ttScope.popupClass = attrs[prefix + 'Class'];
							ttScope.placement = angular.isDefined(attrs[prefix + 'Placement']) ? attrs[prefix + 'Placement'] : options.placement;
							var placement = $position.parsePlacement(ttScope.placement);
							lastPlacement = placement[1] ? placement[0] + '-' + placement[1] : placement[0];
							var delay = parseInt(attrs[prefix + 'PopupDelay'], 10);
							var closeDelay = parseInt(attrs[prefix + 'PopupCloseDelay'], 10);
							ttScope.popupDelay = !isNaN(delay) ? delay : options.popupDelay;
							ttScope.popupCloseDelay = !isNaN(closeDelay) ? closeDelay : options.popupCloseDelay;
						}

						function assignIsOpen(isOpen) {
							if (isOpenParse && angular.isFunction(isOpenParse.assign)) {
								isOpenParse.assign(scope, isOpen);
							}
						}
						ttScope.contentExp = function() {
							return ttScope.content;
						};
						attrs.$observe('disabled', function(val) {
							if (val) {
								cancelShow();
							}
							if (val && ttScope.isOpen) {
								hide();
							}
						});
						if (isOpenParse) {
							scope.$watch(isOpenParse, function(val) {
								if (ttScope && !val === ttScope.isOpen) {
									toggleTooltipBind();
								}
							});
						}

						function prepObservers() {
							observers.length = 0;
							if (contentParse) {
								observers.push(scope.$watch(contentParse, function(val) {
									ttScope.content = val;
									if (!val && ttScope.isOpen) {
										hide();
									}
								}));
								observers.push(tooltipLinkedScope.$watch(function() {
									if (!repositionScheduled) {
										repositionScheduled = true;
										tooltipLinkedScope.$$postDigest(function() {
											repositionScheduled = false;
											if (ttScope && ttScope.isOpen) {
												positionTooltip();
											}
										});
									}
								}));
							} else {
								observers.push(attrs.$observe(ttType, function(val) {
									ttScope.content = val;
									if (!val && ttScope.isOpen) {
										hide();
									} else {
										positionTooltip();
									}
								}));
							}
							observers.push(attrs.$observe(prefix + 'Title', function(val) {
								ttScope.title = val;
								if (ttScope.isOpen) {
									positionTooltip();
								}
							}));
							observers.push(attrs.$observe(prefix + 'Placement', function(val) {
								ttScope.placement = val ? val : options.placement;
								if (ttScope.isOpen) {
									positionTooltip();
								}
							}));
						}

						function unregisterObservers() {
							if (observers.length) {
								angular.forEach(observers, function(observer) {
									observer();
								});
								observers.length = 0;
							}
						}

						function bodyHideTooltipBind(e) {
							if (!ttScope || !ttScope.isOpen || !tooltip) {
								return;
							}
							if (!element[0].contains(e.target) && !tooltip[0].contains(e.target)) {
								hideTooltipBind();
							}
						}

						function hideOnEscapeKey(e) {
							if (e.which === 27) {
								hideTooltipBind();
							}
						}
						var unregisterTriggers = function() {
							triggers.show.forEach(function(trigger) {
								if (trigger === 'outsideClick') {
									element.off('click', toggleTooltipBind);
								} else {
									element.off(trigger, showTooltipBind);
									element.off(trigger, toggleTooltipBind);
								}
								element.off('keypress', hideOnEscapeKey);
							});
							triggers.hide.forEach(function(trigger) {
								if (trigger === 'outsideClick') {
									$document.off('click', bodyHideTooltipBind);
								} else {
									element.off(trigger, hideTooltipBind);
								}
							});
						};

						function prepTriggers() {
							var showTriggers = [],
								hideTriggers = [];
							var val = scope.$eval(attrs[prefix + 'Trigger']);
							unregisterTriggers();
							if (angular.isObject(val)) {
								Object.keys(val).forEach(function(key) {
									showTriggers.push(key);
									hideTriggers.push(val[key]);
								});
								triggers = {
									show: showTriggers,
									hide: hideTriggers
								};
							} else {
								triggers = getTriggers(val);
							}
							if (triggers.show !== 'none') {
								triggers.show.forEach(function(trigger, idx) {
									if (trigger === 'outsideClick') {
										element.on('click', toggleTooltipBind);
										$document.on('click', bodyHideTooltipBind);
									} else if (trigger === triggers.hide[idx]) {
										element.on(trigger, toggleTooltipBind);
									} else if (trigger) {
										element.on(trigger, showTooltipBind);
										element.on(triggers.hide[idx], hideTooltipBind);
									}
									element.on('keypress', hideOnEscapeKey);
								});
							}
						}
						prepTriggers();
						var animation = scope.$eval(attrs[prefix + 'Animation']);
						ttScope.animation = angular.isDefined(animation) ? !!animation : options.animation;
						var appendToBodyVal;
						var appendKey = prefix + 'AppendToBody';
						if (appendKey in attrs && attrs[appendKey] === undefined) {
							appendToBodyVal = true;
						} else {
							appendToBodyVal = scope.$eval(attrs[appendKey]);
						}
						appendToBody = angular.isDefined(appendToBodyVal) ? appendToBodyVal : appendToBody;
						scope.$on('$destroy', function onDestroyTooltip() {
							unregisterTriggers();
							removeTooltip();
							ttScope = null;
						});
					};
				}
			};
		};
	}];
}).directive('uibTooltipTemplateTransclude', ['$animate', '$sce', '$compile', '$templateRequest', function($animate, $sce, $compile, $templateRequest) {
	return {
		link: function(scope, elem, attrs) {
			var origScope = scope.$eval(attrs.tooltipTemplateTranscludeScope);
			var changeCounter = 0,
				currentScope, previousElement, currentElement;
			var cleanupLastIncludeContent = function() {
				if (previousElement) {
					previousElement.remove();
					previousElement = null;
				}
				if (currentScope) {
					currentScope.$destroy();
					currentScope = null;
				}
				if (currentElement) {
					$animate.leave(currentElement).then(function() {
						previousElement = null;
					});
					previousElement = currentElement;
					currentElement = null;
				}
			};
			scope.$watch($sce.parseAsResourceUrl(attrs.uibTooltipTemplateTransclude), function(src) {
				var thisChangeId = ++changeCounter;
				if (src) {
					$templateRequest(src, true).then(function(response) {
						if (thisChangeId !== changeCounter) {
							return;
						}
						var newScope = origScope.$new();
						var template = response;
						var clone = $compile(template)(newScope, function(clone) {
							cleanupLastIncludeContent();
							$animate.enter(clone, elem);
						});
						currentScope = newScope;
						currentElement = clone;
						currentScope.$emit('$includeContentLoaded', src);
					}, function() {
						if (thisChangeId === changeCounter) {
							cleanupLastIncludeContent();
							scope.$emit('$includeContentError', src);
						}
					});
					scope.$emit('$includeContentRequested', src);
				} else {
					cleanupLastIncludeContent();
				}
			});
			scope.$on('$destroy', cleanupLastIncludeContent);
		}
	};
}]).directive('uibTooltipClasses', ['$uibPosition', function($uibPosition) {
	return {
		restrict: 'A',
		link: function(scope, element, attrs) {
			if (scope.placement) {
				var position = $uibPosition.parsePlacement(scope.placement);
				element.addClass(position[0]);
			}
			if (scope.popupClass) {
				element.addClass(scope.popupClass);
			}
			if (scope.animation) {
				element.addClass(attrs.tooltipAnimationClass);
			}
		}
	};
}]).directive('uibTooltipPopup', function() {
	return {
		restrict: 'A',
		scope: {
			content: '@'
		},
		templateUrl: 'uib/template/tooltip/tooltip-popup.html'
	};
}).directive('uibTooltip', ['$uibTooltip', function($uibTooltip) {
	return $uibTooltip('uibTooltip', 'tooltip', 'mouseenter');
}]).directive('uibTooltipTemplatePopup', function() {
	return {
		restrict: 'A',
		scope: {
			contentExp: '&',
			originScope: '&'
		},
		templateUrl: 'uib/template/tooltip/tooltip-template-popup.html'
	};
}).directive('uibTooltipTemplate', ['$uibTooltip', function($uibTooltip) {
	return $uibTooltip('uibTooltipTemplate', 'tooltip', 'mouseenter', {
		useContentExp: true
	});
}]).directive('uibTooltipHtmlPopup', function() {
	return {
		restrict: 'A',
		scope: {
			contentExp: '&'
		},
		templateUrl: 'uib/template/tooltip/tooltip-html-popup.html'
	};
}).directive('uibTooltipHtml', ['$uibTooltip', function($uibTooltip) {
	return $uibTooltip('uibTooltipHtml', 'tooltip', 'mouseenter', {
		useContentExp: true
	});
}]);
angular.module('ui.bootstrap.popover', ['ui.bootstrap.tooltip']).directive('uibPopoverTemplatePopup', function() {
	return {
		restrict: 'A',
		scope: {
			uibTitle: '@',
			contentExp: '&',
			originScope: '&'
		},
		templateUrl: 'uib/template/popover/popover-template.html'
	};
}).directive('uibPopoverTemplate', ['$uibTooltip', function($uibTooltip) {
	return $uibTooltip('uibPopoverTemplate', 'popover', 'click', {
		useContentExp: true
	});
}]).directive('uibPopoverHtmlPopup', function() {
	return {
		restrict: 'A',
		scope: {
			contentExp: '&',
			uibTitle: '@'
		},
		templateUrl: 'uib/template/popover/popover-html.html'
	};
}).directive('uibPopoverHtml', ['$uibTooltip', function($uibTooltip) {
	return $uibTooltip('uibPopoverHtml', 'popover', 'click', {
		useContentExp: true
	});
}]).directive('uibPopoverPopup', function() {
	return {
		restrict: 'A',
		scope: {
			uibTitle: '@',
			content: '@'
		},
		templateUrl: 'uib/template/popover/popover.html'
	};
}).directive('uibPopover', ['$uibTooltip', function($uibTooltip) {
	return $uibTooltip('uibPopover', 'popover', 'click');
}]);
angular.module("uib/template/carousel/carousel.html", []).run(["$templateCache", function($templateCache) {
	$templateCache.put("uib/template/carousel/carousel.html", "<div class=\"carousel-inner\" ng-transclude></div>\n" + "<a role=\"button\" href class=\"left carousel-control\" ng-click=\"prev()\" ng-class=\"{ disabled: isPrevDisabled() }\" ng-show=\"slides.length > 1\">\n" + "  <span aria-hidden=\"true\" class=\"glyphicon glyphicon-chevron-left\"></span>\n" + "  <span class=\"sr-only\">previous</span>\n" + "</a>\n" + "<a role=\"button\" href class=\"right carousel-control\" ng-click=\"next()\" ng-class=\"{ disabled: isNextDisabled() }\" ng-show=\"slides.length > 1\">\n" + "  <span aria-hidden=\"true\" class=\"glyphicon glyphicon-chevron-right\"></span>\n" + "  <span class=\"sr-only\">next</span>\n" + "</a>\n" + "<ol class=\"carousel-indicators\" ng-show=\"slides.length > 1\">\n" + "  <li ng-repeat=\"slide in slides | orderBy:indexOfSlide track by $index\" ng-class=\"{ active: isActive(slide) }\" ng-click=\"select(slide)\">\n" + "    <span class=\"sr-only\">slide {{ $index + 1 }} of {{ slides.length }}<span ng-if=\"isActive(slide)\">, currently active</span></span>\n" + "  </li>\n" + "</ol>\n" + "");
}]);
angular.module("uib/template/carousel/slide.html", []).run(["$templateCache", function($templateCache) {
	$templateCache.put("uib/template/carousel/slide.html", "<div class=\"text-center\" ng-transclude></div>\n" + "");
}]);
angular.module("uib/template/modal/window.html", []).run(["$templateCache", function($templateCache) {
	$templateCache.put("uib/template/modal/window.html", "<div class=\"modal-dialog {{size ? 'modal-' + size : ''}}\"><div class=\"modal-content\" uib-modal-transclude></div></div>\n" + "");
}]);
angular.module("uib/template/tooltip/tooltip-html-popup.html", []).run(["$templateCache", function($templateCache) {
	$templateCache.put("uib/template/tooltip/tooltip-html-popup.html", "<div class=\"tooltip-arrow\"></div>\n" + "<div class=\"tooltip-inner\" ng-bind-html=\"contentExp()\"></div>\n" + "");
}]);
angular.module("uib/template/tooltip/tooltip-popup.html", []).run(["$templateCache", function($templateCache) {
	$templateCache.put("uib/template/tooltip/tooltip-popup.html", "<div class=\"tooltip-arrow\"></div>\n" + "<div class=\"tooltip-inner\" ng-bind=\"content\"></div>\n" + "");
}]);
angular.module("uib/template/tooltip/tooltip-template-popup.html", []).run(["$templateCache", function($templateCache) {
	$templateCache.put("uib/template/tooltip/tooltip-template-popup.html", "<div class=\"tooltip-arrow\"></div>\n" + "<div class=\"tooltip-inner\"\n" + "  uib-tooltip-template-transclude=\"contentExp()\"\n" + "  tooltip-template-transclude-scope=\"originScope()\"></div>\n" + "");
}]);
angular.module("uib/template/popover/popover-html.html", []).run(["$templateCache", function($templateCache) {
	$templateCache.put("uib/template/popover/popover-html.html", "<div class=\"arrow\"></div>\n" + "\n" + "<div class=\"popover-inner\">\n" + "    <h3 class=\"popover-title\" ng-bind=\"uibTitle\" ng-if=\"uibTitle\"></h3>\n" + "    <div class=\"popover-content\" ng-bind-html=\"contentExp()\"></div>\n" + "</div>\n" + "");
}]);
angular.module("uib/template/popover/popover-template.html", []).run(["$templateCache", function($templateCache) {
	$templateCache.put("uib/template/popover/popover-template.html", "<div class=\"arrow\"></div>\n" + "\n" + "<div class=\"popover-inner\">\n" + "    <h3 class=\"popover-title\" ng-bind=\"uibTitle\" ng-if=\"uibTitle\"></h3>\n" + "    <div class=\"popover-content\"\n" + "      uib-tooltip-template-transclude=\"contentExp()\"\n" + "      tooltip-template-transclude-scope=\"originScope()\"></div>\n" + "</div>\n" + "");
}]);
angular.module("uib/template/popover/popover.html", []).run(["$templateCache", function($templateCache) {
	$templateCache.put("uib/template/popover/popover.html", "<div class=\"arrow\"></div>\n" + "\n" + "<div class=\"popover-inner\">\n" + "    <h3 class=\"popover-title\" ng-bind=\"uibTitle\" ng-if=\"uibTitle\"></h3>\n" + "    <div class=\"popover-content\" ng-bind=\"content\"></div>\n" + "</div>\n" + "");
}]);
angular.module('ui.bootstrap.carousel').run(function() {
	!angular.$$csp().noInlineStyle && !angular.$$uibCarouselCss && angular.element(document).find('head').prepend('<style type="text/css">.ng-animate.item:not(.left):not(.right){-webkit-transition:0s ease-in-out left;transition:0s ease-in-out left}</style>');
	angular.$$uibCarouselCss = true;
});
angular.module('ui.bootstrap.position').run(function() {
	!angular.$$csp().noInlineStyle && !angular.$$uibPositionCss && angular.element(document).find('head').prepend('<style type="text/css">.uib-position-measure{display:block !important;visibility:hidden !important;position:absolute !important;top:-9999px !important;left:-9999px !important;}.uib-position-scrollbar-measure{position:absolute !important;top:-9999px !important;width:50px !important;height:50px !important;overflow:scroll !important;}.uib-position-body-scrollbar-measure{overflow:scroll !important;}</style>');
	angular.$$uibPositionCss = true;
});
angular.module('ui.bootstrap.tooltip').run(function() {
	!angular.$$csp().noInlineStyle && !angular.$$uibTooltipCss && angular.element(document).find('head').prepend('<style type="text/css">[uib-tooltip-popup].tooltip.top-left > .tooltip-arrow,[uib-tooltip-popup].tooltip.top-right > .tooltip-arrow,[uib-tooltip-popup].tooltip.bottom-left > .tooltip-arrow,[uib-tooltip-popup].tooltip.bottom-right > .tooltip-arrow,[uib-tooltip-popup].tooltip.left-top > .tooltip-arrow,[uib-tooltip-popup].tooltip.left-bottom > .tooltip-arrow,[uib-tooltip-popup].tooltip.right-top > .tooltip-arrow,[uib-tooltip-popup].tooltip.right-bottom > .tooltip-arrow,[uib-tooltip-html-popup].tooltip.top-left > .tooltip-arrow,[uib-tooltip-html-popup].tooltip.top-right > .tooltip-arrow,[uib-tooltip-html-popup].tooltip.bottom-left > .tooltip-arrow,[uib-tooltip-html-popup].tooltip.bottom-right > .tooltip-arrow,[uib-tooltip-html-popup].tooltip.left-top > .tooltip-arrow,[uib-tooltip-html-popup].tooltip.left-bottom > .tooltip-arrow,[uib-tooltip-html-popup].tooltip.right-top > .tooltip-arrow,[uib-tooltip-html-popup].tooltip.right-bottom > .tooltip-arrow,[uib-tooltip-template-popup].tooltip.top-left > .tooltip-arrow,[uib-tooltip-template-popup].tooltip.top-right > .tooltip-arrow,[uib-tooltip-template-popup].tooltip.bottom-left > .tooltip-arrow,[uib-tooltip-template-popup].tooltip.bottom-right > .tooltip-arrow,[uib-tooltip-template-popup].tooltip.left-top > .tooltip-arrow,[uib-tooltip-template-popup].tooltip.left-bottom > .tooltip-arrow,[uib-tooltip-template-popup].tooltip.right-top > .tooltip-arrow,[uib-tooltip-template-popup].tooltip.right-bottom > .tooltip-arrow,[uib-popover-popup].popover.top-left > .arrow,[uib-popover-popup].popover.top-right > .arrow,[uib-popover-popup].popover.bottom-left > .arrow,[uib-popover-popup].popover.bottom-right > .arrow,[uib-popover-popup].popover.left-top > .arrow,[uib-popover-popup].popover.left-bottom > .arrow,[uib-popover-popup].popover.right-top > .arrow,[uib-popover-popup].popover.right-bottom > .arrow,[uib-popover-html-popup].popover.top-left > .arrow,[uib-popover-html-popup].popover.top-right > .arrow,[uib-popover-html-popup].popover.bottom-left > .arrow,[uib-popover-html-popup].popover.bottom-right > .arrow,[uib-popover-html-popup].popover.left-top > .arrow,[uib-popover-html-popup].popover.left-bottom > .arrow,[uib-popover-html-popup].popover.right-top > .arrow,[uib-popover-html-popup].popover.right-bottom > .arrow,[uib-popover-template-popup].popover.top-left > .arrow,[uib-popover-template-popup].popover.top-right > .arrow,[uib-popover-template-popup].popover.bottom-left > .arrow,[uib-popover-template-popup].popover.bottom-right > .arrow,[uib-popover-template-popup].popover.left-top > .arrow,[uib-popover-template-popup].popover.left-bottom > .arrow,[uib-popover-template-popup].popover.right-top > .arrow,[uib-popover-template-popup].popover.right-bottom > .arrow{top:auto;bottom:auto;left:auto;right:auto;margin:0;}[uib-popover-popup].popover,[uib-popover-html-popup].popover,[uib-popover-template-popup].popover{display:block !important;}</style>');
	angular.$$uibTooltipCss = true;
});

; // angular/angular.ng-modules.js
(function() {
	function initNgModules(element) {
		var elements = [element],
			moduleElements = [],
			modules = [],
			names = ['ng:module', 'ng-module', 'x-ng-module', 'data-ng-module', 'ng:modules', 'ng-modules', 'x-ng-modules', 'data-ng-modules'],
			NG_MODULE_CLASS_REGEXP = /\sng[:\-]module[s](:\s*([\w\d_]+);?)?\s/;

		function append(element) {
			element && elements.push(element);
		}
		for (var i = 0; i < names.length; i++) {
			var name = names[i];
			append(document.getElementById(name));
			name = name.replace(':', '\\:');
			if (element.querySelectorAll) {
				var elements2;
				elements2 = element.querySelectorAll('.' + name);
				for (var j = 0; j < elements2.length; j++) append(elements2[j]);
				elements2 = element.querySelectorAll('.' + name + '\\:');
				for (var j = 0; j < elements2.length; j++) append(elements2[j]);
				elements2 = element.querySelectorAll('[' + name + ']');
				for (var j = 0; j < elements2.length; j++) append(elements2[j]);
			}
		}
		for (var i = 0; i < elements.length; i++) {
			var element = elements[i];
			var className = ' ' + element.className + ' ';
			var match = NG_MODULE_CLASS_REGEXP.exec(className);
			if (match) {
				moduleElements.push(element);
				modules.push((match[2] || '').replace(/\s+/g, ','));
			} else {
				if (element.attributes) {
					for (var j = 0; j < element.attributes.length; j++) {
						var attr = element.attributes[j];
						if (names.indexOf(attr.name) != -1) {
							moduleElements.push(element);
							modules.push(attr.value);
						}
					}
				}
			}
		}
		for (var i = 0; i < moduleElements.length; i++) {
			var moduleElement = moduleElements[i];
			var module = modules[i].replace(/ /g, '').split(",");
			angular.bootstrap(moduleElement, module);
		}
	}
	angular.element(document).ready(function() {
		initNgModules(document);
	});
})();

; // angular/angular-elastic.js
if (typeof module !== 'undefined' && typeof exports !== 'undefined' && module.exports === exports) {
	module.exports = 'monospaced.elastic';
}
angular.module('monospaced.elastic', []).constant('msdElasticConfig', {
	append: ''
}).directive('msdElastic', ['$timeout', '$window', 'msdElasticConfig', function($timeout, $window, config) {
	'use strict';
	return {
		require: 'ngModel',
		restrict: 'A, C',
		link: function(scope, element, attrs, ngModel) {
			var ta = element[0],
				$ta = element;
			if (ta.nodeName !== 'TEXTAREA' || !$window.getComputedStyle) {
				return;
			}
			$ta.css({
				'overflow': 'hidden',
				'overflow-y': 'hidden',
				'word-wrap': 'break-word'
			});
			var text = ta.value;
			ta.value = '';
			ta.value = text;
			var append = attrs.msdElastic ? attrs.msdElastic.replace(/\\n/g, '\n') : config.append,
				$win = angular.element($window),
				mirrorInitStyle = 'position: absolute; top: -999px; right: auto; bottom: auto;' + 'left: 0; overflow: hidden; -webkit-box-sizing: content-box;' + '-moz-box-sizing: content-box; box-sizing: content-box;' + 'min-height: 0 !important; height: 0 !important; padding: 0;' + 'word-wrap: break-word; border: 0;',
				$mirror = angular.element('<textarea aria-hidden="true" tabindex="-1" ' + 'style="' + mirrorInitStyle + '"/>').data('elastic', true),
				mirror = $mirror[0],
				taStyle = getComputedStyle(ta),
				resize = taStyle.getPropertyValue('resize'),
				borderBox = taStyle.getPropertyValue('box-sizing') === 'border-box' || taStyle.getPropertyValue('-moz-box-sizing') === 'border-box' || taStyle.getPropertyValue('-webkit-box-sizing') === 'border-box',
				boxOuter = !borderBox ? {
					width: 0,
					height: 0
				} : {
					width: parseInt(taStyle.getPropertyValue('border-right-width'), 10) +
						parseInt(taStyle.getPropertyValue('padding-right'), 10) +
						parseInt(taStyle.getPropertyValue('padding-left'), 10) +
						parseInt(taStyle.getPropertyValue('border-left-width'), 10),
					height: parseInt(taStyle.getPropertyValue('border-top-width'), 10) +
						parseInt(taStyle.getPropertyValue('padding-top'), 10) +
						parseInt(taStyle.getPropertyValue('padding-bottom'), 10) +
						parseInt(taStyle.getPropertyValue('border-bottom-width'), 10)
				},
				minHeightValue = parseInt(taStyle.getPropertyValue('min-height'), 10),
				heightValue = parseInt(taStyle.getPropertyValue('height'), 10),
				minHeight = Math.max(minHeightValue, heightValue) - boxOuter.height,
				maxHeight = parseInt(taStyle.getPropertyValue('max-height'), 10),
				mirrored, active, copyStyle = ['font-family', 'font-size', 'font-weight', 'font-style', 'letter-spacing', 'line-height', 'text-transform', 'word-spacing', 'text-indent'];
			if ($ta.data('elastic')) {
				return;
			}
			maxHeight = maxHeight && maxHeight > 0 ? maxHeight : 9e4;
			if (mirror.parentNode !== document.body) {
				angular.element(document.body).append(mirror);
			}
			$ta.css({
				'resize': (resize === 'none' || resize === 'vertical') ? 'none' : 'horizontal'
			}).data('elastic', true);

			function initMirror() {
				var mirrorStyle = mirrorInitStyle;
				mirrored = ta;
				taStyle = getComputedStyle(ta);
				angular.forEach(copyStyle, function(val) {
					mirrorStyle += val + ':' + taStyle.getPropertyValue(val) + ';';
				});
				mirror.setAttribute('style', mirrorStyle);
			}

			function adjust() {
				var taHeight, taComputedStyleWidth, mirrorHeight, width, overflow;
				if (mirrored !== ta) {
					initMirror();
				}
				if (!active) {
					active = true;
					mirror.value = ta.value + append;
					mirror.style.overflowY = ta.style.overflowY;
					taHeight = ta.style.height === '' ? 'auto' : parseInt(ta.style.height, 10);
					taComputedStyleWidth = getComputedStyle(ta).getPropertyValue('width');
					if (taComputedStyleWidth.substr(taComputedStyleWidth.length - 2, 2) === 'px') {
						width = parseInt(taComputedStyleWidth, 10) - boxOuter.width;
						mirror.style.width = width + 'px';
					}
					mirrorHeight = mirror.scrollHeight;
					if (mirrorHeight > maxHeight) {
						mirrorHeight = maxHeight;
						overflow = 'scroll';
					} else if (mirrorHeight < minHeight) {
						mirrorHeight = minHeight;
					}
					mirrorHeight += boxOuter.height;
					ta.style.overflowY = overflow || 'hidden';
					if (taHeight !== mirrorHeight) {
						scope.$emit('elastic:resize', $ta, taHeight, mirrorHeight);
						ta.style.height = mirrorHeight + 'px';
					}
					$timeout(function() {
						active = false;
					}, 1);
				}
			}

			function forceAdjust() {
				active = false;
				adjust();
			}
			if ('onpropertychange' in ta && 'oninput' in ta) {
				ta['oninput'] = ta.onkeyup = adjust;
			} else {
				ta['oninput'] = adjust;
			}
			$win.bind('resize', forceAdjust);
			scope.$watch(function() {
				return ngModel.$modelValue;
			}, function(newValue) {
				forceAdjust();
			});
			scope.$on('elastic:adjust', function() {
				initMirror();
				forceAdjust();
			});
			$timeout(adjust);
			scope.$on('$destroy', function() {
				$mirror.remove();
				$win.unbind('resize', forceAdjust);
			});
		}
	};
}]);

; // ~/viewapp/app.js
"use strict";
var robloxApp = angular.module('robloxApp', ['ngSanitize', 'angularJsUtilities', 'intlUtils', 'baseTemplateApp', 'pageTemplateApp']);

; //Bundle detector
Roblox && Roblox.BundleDetector && Roblox.BundleDetector.bundleDetected('angular');