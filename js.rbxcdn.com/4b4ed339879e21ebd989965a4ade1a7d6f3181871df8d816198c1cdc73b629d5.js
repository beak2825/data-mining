! function() {
	var r = {
			572: function(e, t, r) {
				"use strict";
				var n = r(302),
					i = {
						childContextTypes: !0,
						contextType: !0,
						contextTypes: !0,
						defaultProps: !0,
						displayName: !0,
						getDefaultProps: !0,
						getDerivedStateFromError: !0,
						getDerivedStateFromProps: !0,
						mixins: !0,
						propTypes: !0,
						type: !0
					},
					d = {
						name: !0,
						length: !0,
						prototype: !0,
						caller: !0,
						callee: !0,
						arguments: !0,
						arity: !0
					},
					o = {
						$$typeof: !0,
						compare: !0,
						defaultProps: !0,
						displayName: !0,
						propTypes: !0,
						type: !0
					},
					s = {};

				function f(e) {
					return n.isMemo(e) ? o : s[e.$$typeof] || i
				}
				s[n.ForwardRef] = {
					$$typeof: !0,
					render: !0,
					defaultProps: !0,
					displayName: !0,
					propTypes: !0
				}, s[n.Memo] = o;
				var p = Object.defineProperty,
					h = Object.getOwnPropertyNames,
					g = Object.getOwnPropertySymbols,
					y = Object.getOwnPropertyDescriptor,
					m = Object.getPrototypeOf,
					v = Object.prototype;
				e.exports = function e(t, r, n) {
					if ("string" != typeof r) {
						var i;
						!v || (i = m(r)) && i !== v && e(t, i, n);
						var o = h(r);
						g && (o = o.concat(g(r)));
						for (var s = f(t), a = f(r), l = 0; l < o.length; ++l) {
							var u = o[l];
							if (!(d[u] || n && n[u] || a && a[u] || s && s[u])) {
								var c = y(r, u);
								try {
									p(t, u, c)
								} catch (e) {}
							}
						}
					}
					return t
				}
			},
			973: function(e, t) {
				"use strict";
				/** @license React v16.13.1
				 * react-is.production.min.js
				 *
				 * Copyright (c) Facebook, Inc. and its affiliates.
				 *
				 * This source code is licensed under the MIT license found in the
				 * LICENSE file in the root directory of this source tree.
				 */
				function r(e) {
					return (r = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
						return typeof e
					} : function(e) {
						return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
					})(e)
				}
				var n = "function" == typeof Symbol && Symbol.for,
					i = n ? Symbol.for("react.element") : 60103,
					o = n ? Symbol.for("react.portal") : 60106,
					s = n ? Symbol.for("react.fragment") : 60107,
					a = n ? Symbol.for("react.strict_mode") : 60108,
					l = n ? Symbol.for("react.profiler") : 60114,
					u = n ? Symbol.for("react.provider") : 60109,
					c = n ? Symbol.for("react.context") : 60110,
					d = n ? Symbol.for("react.async_mode") : 60111,
					f = n ? Symbol.for("react.concurrent_mode") : 60111,
					p = n ? Symbol.for("react.forward_ref") : 60112,
					h = n ? Symbol.for("react.suspense") : 60113,
					g = n ? Symbol.for("react.suspense_list") : 60120,
					y = n ? Symbol.for("react.memo") : 60115,
					m = n ? Symbol.for("react.lazy") : 60116,
					v = n ? Symbol.for("react.block") : 60121,
					b = n ? Symbol.for("react.fundamental") : 60117,
					S = n ? Symbol.for("react.responder") : 60118,
					x = n ? Symbol.for("react.scope") : 60119;

				function C(e) {
					if ("object" === r(e) && null !== e) {
						var t = e.$$typeof;
						switch (t) {
							case i:
								switch (e = e.type) {
									case d:
									case f:
									case s:
									case l:
									case a:
									case h:
										return e;
									default:
										switch (e = e && e.$$typeof) {
											case c:
											case p:
											case m:
											case y:
											case u:
												return e;
											default:
												return t
										}
								}
							case o:
								return t
						}
					}
				}

				function w(e) {
					return C(e) === f
				}
				t.AsyncMode = d, t.ConcurrentMode = f, t.ContextConsumer = c, t.ContextProvider = u, t.Element = i, t.ForwardRef = p, t.Fragment = s, t.Lazy = m, t.Memo = y, t.Portal = o, t.Profiler = l, t.StrictMode = a, t.Suspense = h, t.isAsyncMode = function(e) {
					return w(e) || C(e) === d
				}, t.isConcurrentMode = w, t.isContextConsumer = function(e) {
					return C(e) === c
				}, t.isContextProvider = function(e) {
					return C(e) === u
				}, t.isElement = function(e) {
					return "object" === r(e) && null !== e && e.$$typeof === i
				}, t.isForwardRef = function(e) {
					return C(e) === p
				}, t.isFragment = function(e) {
					return C(e) === s
				}, t.isLazy = function(e) {
					return C(e) === m
				}, t.isMemo = function(e) {
					return C(e) === y
				}, t.isPortal = function(e) {
					return C(e) === o
				}, t.isProfiler = function(e) {
					return C(e) === l
				}, t.isStrictMode = function(e) {
					return C(e) === a
				}, t.isSuspense = function(e) {
					return C(e) === h
				}, t.isValidElementType = function(e) {
					return "string" == typeof e || "function" == typeof e || e === s || e === f || e === l || e === a || e === h || e === g || "object" === r(e) && null !== e && (e.$$typeof === m || e.$$typeof === y || e.$$typeof === u || e.$$typeof === c || e.$$typeof === p || e.$$typeof === b || e.$$typeof === S || e.$$typeof === x || e.$$typeof === v)
				}, t.typeOf = C
			},
			302: function(e, t, r) {
				"use strict";
				e.exports = r(973)
			},
			4: function(e, t, r) {
				"use strict";
				r.r(t), r.d(t, {
					ServerStyleSheets: function() {
						return Kt
					},
					StylesContext: function() {
						return jt
					},
					StylesProvider: function() {
						return Ut
					},
					ThemeProvider: function() {
						return Qt
					},
					createGenerateClassName: function() {
						return n
					},
					createStyles: function() {
						return i
					},
					getThemeProps: function() {
						return d
					},
					jssPreset: function() {
						return Ot
					},
					makeStyles: function() {
						return Ft
					},
					mergeClasses: function() {
						return kt
					},
					sheetsManager: function() {
						return Vt
					},
					styled: function() {
						return Jt
					},
					useTheme: function() {
						return Mt
					},
					withStyles: function() {
						return Yt
					},
					withTheme: function() {
						return er
					},
					withThemeCreator: function() {
						return Xt
					}
				});
				var l = "function" == typeof Symbol && Symbol.for ? Symbol.for("mui.nested") : "__THEME_NESTED__",
					u = ["checked", "disabled", "error", "focused", "focusVisible", "required", "expanded", "selected"];

				function n() {
					function n() {
						return r += 1
					}
					var e = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : {},
						t = e.disableGlobal,
						i = void 0 !== t && t,
						t = e.productionPrefix,
						o = void 0 === t ? "jss" : t,
						e = e.seed,
						s = void 0 === e ? "" : e,
						a = "" === s ? "" : "".concat(s, "-"),
						r = 0;
					return function(e, t) {
						var r = t.options.name;
						if (!r || 0 !== r.indexOf("Mui") || t.options.link || i) return "".concat(a).concat(o).concat(n());
						if (-1 !== u.indexOf(e.key)) return "Mui-".concat(e.key);
						e = "".concat(a).concat(r, "-").concat(e.key);
						return t.options.theme[l] && "" === s ? "".concat(e, "-").concat(n()) : e
					}
				}

				function i(e) {
					return e
				}

				function d(e) {
					var t = e.theme,
						r = e.name,
						n = e.props;
					if (!t || !t.props || !t.props[r]) return n;
					var i, o = t.props[r];
					for (i in o) void 0 === n[i] && (n[i] = o[i]);
					return n
				}

				function g() {
					return (g = Object.assign || function(e) {
						for (var t = 1; t < arguments.length; t++) {
							var r, n = arguments[t];
							for (r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
						}
						return e
					}).apply(this, arguments)
				}
				var o = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
						return typeof e
					} : function(e) {
						return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
					},
					s = "object" === ("undefined" == typeof window ? "undefined" : o(window)) && "object" === ("undefined" == typeof document ? "undefined" : o(document)) && 9 === document.nodeType;

				function a(e, t) {
					for (var r = 0; r < t.length; r++) {
						var n = t[r];
						n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
					}
				}

				function c(e, t, r) {
					return t && a(e.prototype, t), r && a(e, r), e
				}

				function f(e, t) {
					e.prototype = Object.create(t.prototype), (e.prototype.constructor = e).__proto__ = t
				}

				function p(e) {
					if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
					return e
				}

				function h(e, t) {
					if (null == e) return {};
					for (var r, n = {}, i = Object.keys(e), o = 0; o < i.length; o++) r = i[o], 0 <= t.indexOf(r) || (n[r] = e[r]);
					return n
				}
				var y = {}.constructor;

				function m(e) {
					if (null == e || "object" != typeof e) return e;
					if (Array.isArray(e)) return e.map(m);
					if (e.constructor !== y) return e;
					var t, r = {};
					for (t in e) r[t] = m(e[t]);
					return r
				}

				function v(e, t, r) {
					void 0 === e && (e = "unnamed");
					var n = r.jss,
						t = m(t),
						r = n.plugins.onCreateRule(e, t, r);
					return r || (e[0], null)
				}

				function b(e, t) {
					for (var r = "", n = 0; n < e.length && "!important" !== e[n]; n++) r && (r += t), r += e[n];
					return r
				}

				function S(e) {
					if (!Array.isArray(e)) return e;
					var t = "";
					if (Array.isArray(e[0]))
						for (var r = 0; r < e.length && "!important" !== e[r]; r++) t && (t += ", "), t += b(e[r], " ");
					else t = b(e, ", ");
					return "!important" === e[e.length - 1] && (t += " !important"), t
				}

				function x(e) {
					return e && !1 === e.format ? {
						linebreak: "",
						space: ""
					} : {
						linebreak: "\n",
						space: " "
					}
				}

				function C(e, t) {
					for (var r = "", n = 0; n < t; n++) r += "  ";
					return r + e
				}

				function w(e, t, r) {
					void 0 === r && (r = {});
					var n = "";
					if (!t) return n;
					var i = r.indent,
						o = void 0 === i ? 0 : i,
						s = t.fallbacks;
					!1 === r.format && (o = -1 / 0);
					var a, i = x(r),
						l = i.linebreak,
						u = i.space;
					if (e && o++, s)
						if (Array.isArray(s))
							for (var c = 0; c < s.length; c++) {
								var d, f = s[c];
								for (d in f) {
									var p = f[d];
									null != p && (n && (n += l), n += C(d + ":" + u + S(p) + ";", o))
								}
							} else
								for (var h in s) {
									var g = s[h];
									null != g && (n && (n += l), n += C(h + ":" + u + S(g) + ";", o))
								}
					for (a in t) {
						var y = t[a];
						null != y && "fallbacks" !== a && (n && (n += l), n += C(a + ":" + u + S(y) + ";", o))
					}
					return (n || r.allowEmpty) && e ? C("" + e + u + "{" + (n = n && "" + l + n + l), --o) + C("}", o) : n
				}

				function _(e) {
					return T ? T(e) : e.replace(E, "\\$1")
				}

				function R(e, r) {
					return "string" == typeof e ? e.replace(L, function(e, t) {
						return t in r ? r[t] : e
					}) : e
				}

				function I(e, t, r) {
					var n = e[t];
					(r = R(n, r)) !== n && (e[t] = r)
				}
				var E = /([[\].#*$><+~=|^:(),"'`\s])/g,
					T = "undefined" != typeof CSS && CSS.escape,
					O = function() {
						function e(e, t, r) {
							this.type = "style", this.isProcessed = !1;
							var n = r.sheet,
								i = r.Renderer;
							this.key = e, this.options = r, this.style = t, n ? this.renderer = n.renderer : i && (this.renderer = new i)
						}
						return e.prototype.prop = function(e, t, r) {
							if (void 0 === t) return this.style[e];
							var n = !!r && r.force;
							if (!n && this.style[e] === t) return this;
							var i = t;
							r && !1 === r.process || (i = this.options.jss.plugins.onChangeValue(t, e, this));
							r = null == i || !1 === i, t = e in this.style;
							if (r && !t && !n) return this;
							t = r && t;
							if (t ? delete this.style[e] : this.style[e] = i, this.renderable && this.renderer) return t ? this.renderer.removeProperty(this.renderable, e) : this.renderer.setProperty(this.renderable, e, i), this;
							i = this.options.sheet;
							return i && i.attached, this
						}, e
					}(),
					P = function(o) {
						function e(e, t, r) {
							var n = o.call(this, e, t, r) || this,
								i = r.selector,
								e = r.scoped,
								t = r.sheet,
								r = r.generateId;
							return i ? n.selectorText = i : !1 !== e && (n.id = r(p(p(n)), t), n.selectorText = "." + _(n.id)), n
						}
						f(e, o);
						var t = e.prototype;
						return t.applyTo = function(e) {
							var t = this.renderer;
							if (t) {
								var r, n = this.toJSON();
								for (r in n) t.setProperty(e, r, n[r])
							}
							return this
						}, t.toJSON = function() {
							var e, t = {};
							for (e in this.style) {
								var r = this.style[e];
								"object" != typeof r ? t[e] = r : Array.isArray(r) && (t[e] = S(r))
							}
							return t
						}, t.toString = function(e) {
							var t = this.options.sheet,
								e = !!t && t.options.link ? g({}, e, {
									allowEmpty: !0
								}) : e;
							return w(this.selectorText, this.style, e)
						}, c(e, [{
							key: "selector",
							set: function(e) {
								var t, r;
								e !== this.selectorText && (this.selectorText = e, t = this.renderer, (r = this.renderable) && t && (t.setSelector(r, e) || t.replaceRule(r, this)))
							},
							get: function() {
								return this.selectorText
							}
						}]), e
					}(O),
					A = {
						onCreateRule: function(e, t, r) {
							return "@" === e[0] || r.parent && "keyframes" === r.parent.type ? null : new P(e, t, r)
						}
					},
					k = {
						indent: 1,
						children: !0
					},
					B = /@([\w-]+)/,
					D = function() {
						function e(e, t, r) {
							this.type = "conditional", this.isProcessed = !1;
							var n, e = (this.key = e).match(B);
							for (n in this.at = e ? e[1] : "unknown", this.query = r.name || "@" + this.at, this.options = r, this.rules = new te(g({}, r, {
									parent: this
								})), t) this.rules.add(n, t[n]);
							this.rules.process()
						}
						var t = e.prototype;
						return t.getRule = function(e) {
							return this.rules.get(e)
						}, t.indexOf = function(e) {
							return this.rules.indexOf(e)
						}, t.addRule = function(e, t, r) {
							r = this.rules.add(e, t, r);
							return r ? (this.options.jss.plugins.onProcessRule(r), r) : null
						}, t.replaceRule = function(e, t, r) {
							r = this.rules.replace(e, t, r);
							return r && this.options.jss.plugins.onProcessRule(r), r
						}, t.toString = function(e) {
							void 0 === e && (e = k);
							var t = x(e).linebreak;
							if (null == e.indent && (e.indent = k.indent), null == e.children && (e.children = k.children), !1 === e.children) return this.query + " {}";
							e = this.rules.toString(e);
							return e ? this.query + " {" + t + e + t + "}" : ""
						}, e
					}(),
					M = /@media|@supports\s+/,
					N = {
						onCreateRule: function(e, t, r) {
							return M.test(e) ? new D(e, t, r) : null
						}
					},
					V = {
						indent: 1,
						children: !0
					},
					j = /@keyframes\s+([\w-]+)/,
					U = function() {
						function e(e, t, r) {
							this.type = "keyframes", this.at = "@keyframes", this.isProcessed = !1;
							var n = e.match(j);
							n && n[1] ? this.name = n[1] : this.name = "noname", this.key = this.type + "-" + this.name;
							var i, o = (this.options = r).scoped,
								e = r.sheet,
								n = r.generateId;
							for (i in this.id = !1 === o ? this.name : _(n(this, e)), this.rules = new te(g({}, r, {
									parent: this
								})), t) this.rules.add(i, t[i], g({}, r, {
								parent: this
							}));
							this.rules.process()
						}
						return e.prototype.toString = function(e) {
							void 0 === e && (e = V);
							var t = x(e).linebreak;
							if (null == e.indent && (e.indent = V.indent), null == e.children && (e.children = V.children), !1 === e.children) return this.at + " " + this.id + " {}";
							e = (e = this.rules.toString(e)) && "" + t + e + t;
							return this.at + " " + this.id + " {" + e + "}"
						}, e
					}(),
					G = /@keyframes\s+/,
					L = /\$([\w-]+)/g,
					z = {
						onCreateRule: function(e, t, r) {
							return "string" == typeof e && G.test(e) ? new U(e, t, r) : null
						},
						onProcessStyle: function(e, t, r) {
							return "style" === t.type && r && ("animation-name" in e && I(e, "animation-name", r.keyframes), "animation" in e && I(e, "animation", r.keyframes)), e
						},
						onChangeValue: function(e, t, r) {
							var n = r.options.sheet;
							if (!n) return e;
							switch (t) {
								case "animation":
								case "animation-name":
									return R(e, n.keyframes);
								default:
									return e
							}
						}
					},
					H = function(e) {
						function t() {
							return e.apply(this, arguments) || this
						}
						return f(t, e), t.prototype.toString = function(e) {
							var t = this.options.sheet,
								e = !!t && t.options.link ? g({}, e, {
									allowEmpty: !0
								}) : e;
							return w(this.key, this.style, e)
						}, t
					}(O),
					$ = {
						onCreateRule: function(e, t, r) {
							return r.parent && "keyframes" === r.parent.type ? new H(e, t, r) : null
						}
					},
					W = function() {
						function e(e, t, r) {
							this.type = "font-face", this.at = "@font-face", this.isProcessed = !1, this.key = e, this.style = t, this.options = r
						}
						return e.prototype.toString = function(e) {
							var t = x(e).linebreak;
							if (Array.isArray(this.style)) {
								for (var r = "", n = 0; n < this.style.length; n++) r += w(this.at, this.style[n]), this.style[n + 1] && (r += t);
								return r
							}
							return w(this.at, this.style, e)
						}, e
					}(),
					F = /@font-face/,
					K = {
						onCreateRule: function(e, t, r) {
							return F.test(e) ? new W(e, t, r) : null
						}
					},
					q = function() {
						function e(e, t, r) {
							this.type = "viewport", this.at = "@viewport", this.isProcessed = !1, this.key = e, this.style = t, this.options = r
						}
						return e.prototype.toString = function(e) {
							return w(this.key, this.style, e)
						}, e
					}(),
					Z = {
						onCreateRule: function(e, t, r) {
							return "@viewport" === e || "@-ms-viewport" === e ? new q(e, t, r) : null
						}
					},
					J = function() {
						function e(e, t, r) {
							this.type = "simple", this.isProcessed = !1, this.key = e, this.value = t, this.options = r
						}
						return e.prototype.toString = function() {
							if (Array.isArray(this.value)) {
								for (var e = "", t = 0; t < this.value.length; t++) e += this.key + " " + this.value[t] + ";", this.value[t + 1] && (e += "\n");
								return e
							}
							return this.key + " " + this.value + ";"
						}, e
					}(),
					Q = {
						"@charset": !0,
						"@import": !0,
						"@namespace": !0
					},
					Y = [A, N, z, $, K, Z, {
						onCreateRule: function(e, t, r) {
							return e in Q ? new J(e, t, r) : null
						}
					}],
					X = {
						process: !0
					},
					ee = {
						force: !0,
						process: !0
					},
					te = function() {
						function d(e) {
							this.map = {}, this.raw = {}, this.index = [], this.counter = 0, this.options = e, this.classes = e.classes, this.keyframes = e.keyframes
						}
						var e = d.prototype;
						return e.add = function(e, t, r) {
							var n = this.options,
								i = n.parent,
								o = n.sheet,
								s = n.jss,
								a = n.Renderer,
								l = n.generateId,
								n = n.scoped,
								n = g({
									classes: this.classes,
									parent: i,
									sheet: o,
									jss: s,
									Renderer: a,
									generateId: l,
									scoped: n,
									name: e,
									keyframes: this.keyframes,
									selector: void 0
								}, r),
								r = e;
							e in this.raw && (r = e + "-d" + this.counter++), this.raw[r] = t, r in this.classes && (n.selector = "." + _(this.classes[r]));
							t = v(r, t, n);
							if (!t) return null;
							this.register(t);
							n = void 0 === n.index ? this.index.length : n.index;
							return this.index.splice(n, 0, t), t
						}, e.replace = function(e, t, r) {
							var n = this.get(e),
								i = this.index.indexOf(n);
							n && this.remove(n);
							n = r;
							return -1 !== i && (n = g({}, r, {
								index: i
							})), this.add(e, t, n)
						}, e.get = function(e) {
							return this.map[e]
						}, e.remove = function(e) {
							this.unregister(e), delete this.raw[e.key], this.index.splice(this.index.indexOf(e), 1)
						}, e.indexOf = function(e) {
							return this.index.indexOf(e)
						}, e.process = function() {
							var e = this.options.jss.plugins;
							this.index.slice(0).forEach(e.onProcessRule, e)
						}, e.register = function(e) {
							(this.map[e.key] = e) instanceof P ? (this.map[e.selector] = e).id && (this.classes[e.key] = e.id) : e instanceof U && this.keyframes && (this.keyframes[e.name] = e.id)
						}, e.unregister = function(e) {
							delete this.map[e.key], e instanceof P ? (delete this.map[e.selector], delete this.classes[e.key]) : e instanceof U && delete this.keyframes[e.name]
						}, e.update = function(e, t, r) {
							var n, i, o;
							if ("string" == typeof(arguments.length <= 0 ? void 0 : e) ? (n = arguments.length <= 0 ? void 0 : e, i = arguments.length <= 1 ? void 0 : t, o = arguments.length <= 2 ? void 0 : r) : (i = arguments.length <= 0 ? void 0 : e, o = arguments.length <= 1 ? void 0 : t, n = null), n) this.updateOne(this.get(n), i, o);
							else
								for (var s = 0; s < this.index.length; s++) this.updateOne(this.index[s], i, o)
						}, e.updateOne = function(e, t, r) {
							void 0 === r && (r = X);
							var n = this.options,
								i = n.jss.plugins,
								n = n.sheet;
							if (e.rules instanceof d) e.rules.update(t, r);
							else {
								var o = e.style;
								if (i.onUpdate(t, e, n, r), r.process && o && o !== e.style) {
									for (var s in i.onProcessStyle(e.style, e, n), e.style) {
										var a = e.style[s];
										a !== o[s] && e.prop(s, a, ee)
									}
									for (var l in o) {
										var u = e.style[l],
											c = o[l];
										null == u && u !== c && e.prop(l, null, ee)
									}
								}
							}
						}, e.toString = function(e) {
							for (var t = "", r = this.options.sheet, n = !!r && r.options.link, i = x(e).linebreak, o = 0; o < this.index.length; o++) {
								var s = this.index[o].toString(e);
								(s || n) && (t && (t += i), t += s)
							}
							return t
						}, d
					}(),
					re = function() {
						function e(e, t) {
							for (var r in this.attached = !1, this.deployed = !1, this.classes = {}, this.keyframes = {}, this.options = g({}, t, {
									sheet: this,
									parent: this,
									classes: this.classes,
									keyframes: this.keyframes
								}), t.Renderer && (this.renderer = new t.Renderer(this)), this.rules = new te(this.options), e) this.rules.add(r, e[r]);
							this.rules.process()
						}
						var t = e.prototype;
						return t.attach = function() {
							return this.attached || (this.renderer && this.renderer.attach(), this.attached = !0, this.deployed || this.deploy()), this
						}, t.detach = function() {
							return this.attached && (this.renderer && this.renderer.detach(), this.attached = !1), this
						}, t.addRule = function(e, t, r) {
							var n = this.queue;
							this.attached && !n && (this.queue = []);
							r = this.rules.add(e, t, r);
							return r ? (this.options.jss.plugins.onProcessRule(r), this.attached ? this.deployed && (n ? n.push(r) : (this.insertRule(r), this.queue && (this.queue.forEach(this.insertRule, this), this.queue = void 0))) : this.deployed = !1, r) : null
						}, t.replaceRule = function(e, t, r) {
							var n = this.rules.get(e);
							if (!n) return this.addRule(e, t, r);
							r = this.rules.replace(e, t, r);
							return r && this.options.jss.plugins.onProcessRule(r), this.attached ? this.deployed && this.renderer && (r ? n.renderable && this.renderer.replaceRule(n.renderable, r) : this.renderer.deleteRule(n)) : this.deployed = !1, r
						}, t.insertRule = function(e) {
							this.renderer && this.renderer.insertRule(e)
						}, t.addRules = function(e, t) {
							var r, n = [];
							for (r in e) {
								var i = this.addRule(r, e[r], t);
								i && n.push(i)
							}
							return n
						}, t.getRule = function(e) {
							return this.rules.get(e)
						}, t.deleteRule = function(e) {
							e = "object" == typeof e ? e : this.rules.get(e);
							return !(!e || this.attached && !e.renderable) && (this.rules.remove(e), !(this.attached && e.renderable && this.renderer) || this.renderer.deleteRule(e.renderable))
						}, t.indexOf = function(e) {
							return this.rules.indexOf(e)
						}, t.deploy = function() {
							return this.renderer && this.renderer.deploy(), this.deployed = !0, this
						}, t.update = function() {
							var e;
							return (e = this.rules).update.apply(e, arguments), this
						}, t.updateOne = function(e, t, r) {
							return this.rules.updateOne(e, t, r), this
						}, t.toString = function(e) {
							return this.rules.toString(e)
						}, e
					}(),
					ne = function() {
						function e() {
							this.plugins = {
								internal: [],
								external: []
							}, this.registry = {}
						}
						var t = e.prototype;
						return t.onCreateRule = function(e, t, r) {
							for (var n = 0; n < this.registry.onCreateRule.length; n++) {
								var i = this.registry.onCreateRule[n](e, t, r);
								if (i) return i
							}
							return null
						}, t.onProcessRule = function(e) {
							if (!e.isProcessed) {
								for (var t = e.options.sheet, r = 0; r < this.registry.onProcessRule.length; r++) this.registry.onProcessRule[r](e, t);
								e.style && this.onProcessStyle(e.style, e, t), e.isProcessed = !0
							}
						}, t.onProcessStyle = function(e, t, r) {
							for (var n = 0; n < this.registry.onProcessStyle.length; n++) t.style = this.registry.onProcessStyle[n](t.style, t, r)
						}, t.onProcessSheet = function(e) {
							for (var t = 0; t < this.registry.onProcessSheet.length; t++) this.registry.onProcessSheet[t](e)
						}, t.onUpdate = function(e, t, r, n) {
							for (var i = 0; i < this.registry.onUpdate.length; i++) this.registry.onUpdate[i](e, t, r, n)
						}, t.onChangeValue = function(e, t, r) {
							for (var n = e, i = 0; i < this.registry.onChangeValue.length; i++) n = this.registry.onChangeValue[i](n, t, r);
							return n
						}, t.use = function(e, t) {
							void 0 === t && (t = {
								queue: "external"
							});
							t = this.plugins[t.queue]; - 1 === t.indexOf(e) && (t.push(e), this.registry = [].concat(this.plugins.external, this.plugins.internal).reduce(function(e, t) {
								for (var r in t) r in e && e[r].push(t[r]);
								return e
							}, {
								onCreateRule: [],
								onProcessRule: [],
								onProcessStyle: [],
								onProcessSheet: [],
								onChangeValue: [],
								onUpdate: []
							}))
						}, e
					}(),
					ie = function() {
						function e() {
							this.registry = []
						}
						var t = e.prototype;
						return t.add = function(e) {
							var t = this.registry,
								r = e.options.index;
							if (-1 === t.indexOf(e))
								if (0 === t.length || r >= this.index) t.push(e);
								else
									for (var n = 0; n < t.length; n++)
										if (t[n].options.index > r) return void t.splice(n, 0, e)
						}, t.reset = function() {
							this.registry = []
						}, t.remove = function(e) {
							e = this.registry.indexOf(e);
							this.registry.splice(e, 1)
						}, t.toString = function(e) {
							for (var e = void 0 === e ? {} : e, t = e.attached, r = h(e, ["attached"]), n = x(r).linebreak, i = "", o = 0; o < this.registry.length; o++) {
								var s = this.registry[o];
								null != t && s.attached !== t || (i && (i += n), i += s.toString(r))
							}
							return i
						}, c(e, [{
							key: "index",
							get: function() {
								return 0 === this.registry.length ? 0 : this.registry[this.registry.length - 1].options.index
							}
						}]), e
					}(),
					oe = new ie,
					se = "undefined" != typeof globalThis ? globalThis : "undefined" != typeof window && window.Math === Math ? window : "undefined" != typeof self && self.Math === Math ? self : Function("return this")(),
					ae = "2f1acc6c3a606b082e5eef5e54414ffb";
				null == se[ae] && (se[ae] = 0);

				function le(i) {
					void 0 === i && (i = {});
					var o = 0;
					return function(e, t) {
						o += 1;
						var r = "",
							n = "";
						return t && (t.options.classNamePrefix && (n = t.options.classNamePrefix), null != t.options.jss.id && (r = String(t.options.jss.id))), i.minify ? "" + (n || "c") + pe + r + o : n + e.key + "-" + pe + (r ? "-" + r : "") + "-" + o
					}
				}

				function ue(e, t) {
					try {
						return e.attributeStyleMap ? e.attributeStyleMap.get(t) : e.style.getPropertyValue(t)
					} catch (e) {
						return ""
					}
				}

				function ce(e, t, r) {
					try {
						var n, i = r;
						Array.isArray(r) && (i = S(r)), e.attributeStyleMap ? e.attributeStyleMap.set(t, i) : (i = -1 < (n = i ? i.indexOf("!important") : -1) ? i.substr(0, n - 1) : i, e.style.setProperty(t, i, -1 < n ? "important" : ""))
					} catch (e) {
						return !1
					}
					return !0
				}

				function de(e, t) {
					try {
						e.attributeStyleMap ? e.attributeStyleMap.delete(t) : e.style.removeProperty(t)
					} catch (e) {}
				}

				function fe(e, t) {
					return e.selectorText = t, e.selectorText === t
				}
				var pe = se[ae]++,
					he = function(e) {
						var t;
						return function() {
							return t = t || e()
						}
					},
					ge = he(function() {
						return document.querySelector("head")
					});

				function ye(e) {
					var t = oe.registry;
					if (0 < t.length) {
						var r = function(e, t) {
							for (var r = 0; r < e.length; r++) {
								var n = e[r];
								if (n.attached && n.options.index > t.index && n.options.insertionPoint === t.insertionPoint) return n
							}
							return null
						}(t, e);
						if (r && r.renderer) return {
							parent: r.renderer.element.parentNode,
							node: r.renderer.element
						};
						if ((r = function(e, t) {
								for (var r = e.length - 1; 0 <= r; r--) {
									var n = e[r];
									if (n.attached && n.options.insertionPoint === t.insertionPoint) return n
								}
								return null
							}(t, e)) && r.renderer) return {
							parent: r.renderer.element.parentNode,
							node: r.renderer.element.nextSibling
						}
					}
					e = e.insertionPoint;
					if (e && "string" == typeof e) {
						e = function(e) {
							for (var t = ge(), r = 0; r < t.childNodes.length; r++) {
								var n = t.childNodes[r];
								if (8 === n.nodeType && n.nodeValue.trim() === e) return n
							}
							return null
						}(e);
						if (e) return {
							parent: e.parentNode,
							node: e.nextSibling
						}
					}
					return !1
				}

				function me(e, t, r) {
					try {
						"insertRule" in e ? e.insertRule(t, r) : "appendRule" in e && e.appendRule(t)
					} catch (e) {
						return !1
					}
					return e.cssRules[r]
				}

				function ve(e, t) {
					return e = e.cssRules.length, void 0 === t || e < t ? e : t
				}
				var be = he(function() {
						var e = document.querySelector('meta[property="csp-nonce"]');
						return e ? e.getAttribute("content") : null
					}),
					Se = function() {
						function e(e) {
							this.getPropertyValue = ue, this.setProperty = ce, this.removeProperty = de, this.setSelector = fe, this.hasInsertedRules = !1, this.cssRules = [], e && oe.add(e), this.sheet = e;
							var t = this.sheet ? this.sheet.options : {},
								r = t.media,
								e = t.meta,
								t = t.element;
							this.element = t || ((t = document.createElement("style")).textContent = "\n", t), this.element.setAttribute("data-jss", ""), r && this.element.setAttribute("media", r), e && this.element.setAttribute("data-meta", e);
							e = be();
							e && this.element.setAttribute("nonce", e)
						}
						var t = e.prototype;
						return t.attach = function() {
							var e, t, r;
							!this.element.parentNode && this.sheet && (r = this.element, e = this.sheet.options, t = e.insertionPoint, !1 !== (e = ye(e)) && e.parent ? e.parent.insertBefore(r, e.node) : t && "number" == typeof t.nodeType ? (e = t.parentNode) && e.insertBefore(r, t.nextSibling) : ge().appendChild(r), r = Boolean(this.sheet && this.sheet.deployed), this.hasInsertedRules && r && (this.hasInsertedRules = !1, this.deploy()))
						}, t.detach = function() {
							var e;
							this.sheet && ((e = this.element.parentNode) && e.removeChild(this.element), this.sheet.options.link && (this.cssRules = [], this.element.textContent = "\n"))
						}, t.deploy = function() {
							var e = this.sheet;
							e && (e.options.link ? this.insertRules(e.rules) : this.element.textContent = "\n" + e.toString() + "\n")
						}, t.insertRules = function(e, t) {
							for (var r = 0; r < e.index.length; r++) this.insertRule(e.index[r], r, t)
						}, t.insertRule = function(e, t, r) {
							if (void 0 === r && (r = this.element.sheet), e.rules) {
								var n = e,
									i = r;
								if ("conditional" === e.type || "keyframes" === e.type) {
									var o = ve(r, t);
									if (!1 === (i = me(r, n.toString({
											children: !1
										}), o))) return !1;
									this.refCssRule(e, o, i)
								}
								return this.insertRules(n.rules, i), i
							}
							i = e.toString();
							if (!i) return !1;
							t = ve(r, t), i = me(r, i, t);
							return !1 !== i && (this.hasInsertedRules = !0, this.refCssRule(e, t, i), i)
						}, t.refCssRule = function(e, t, r) {
							e.renderable = r, e.options.parent instanceof re && this.cssRules.splice(t, 0, r)
						}, t.deleteRule = function(e) {
							var t = this.element.sheet,
								e = this.indexOf(e);
							return -1 !== e && (t.deleteRule(e), this.cssRules.splice(e, 1), !0)
						}, t.indexOf = function(e) {
							return this.cssRules.indexOf(e)
						}, t.replaceRule = function(e, t) {
							e = this.indexOf(e);
							return -1 !== e && (this.element.sheet.deleteRule(e), this.cssRules.splice(e, 1), this.insertRule(t, e))
						}, t.getRules = function() {
							return this.element.sheet.cssRules
						}, e
					}(),
					xe = 0,
					Ce = function() {
						function e(e) {
							this.id = xe++, this.version = "10.9.2", this.plugins = new ne, this.options = {
								id: {
									minify: !1
								},
								createGenerateId: le,
								Renderer: s ? Se : null,
								plugins: []
							}, this.generateId = le({
								minify: !1
							});
							for (var t = 0; t < Y.length; t++) this.plugins.use(Y[t], {
								queue: "internal"
							});
							this.setup(e)
						}
						var t = e.prototype;
						return t.setup = function(e) {
							return void 0 === e && (e = {}), e.createGenerateId && (this.options.createGenerateId = e.createGenerateId), e.id && (this.options.id = g({}, this.options.id, e.id)), (e.createGenerateId || e.id) && (this.generateId = this.options.createGenerateId(this.options.id)), null != e.insertionPoint && (this.options.insertionPoint = e.insertionPoint), "Renderer" in e && (this.options.Renderer = e.Renderer), e.plugins && this.use.apply(this, e.plugins), this
						}, t.createStyleSheet = function(e, t) {
							void 0 === t && (t = {});
							var r = t.index;
							"number" != typeof r && (r = 0 === oe.index ? 0 : oe.index + 1);
							r = new re(e, g({}, t, {
								jss: this,
								generateId: t.generateId || this.generateId,
								insertionPoint: this.options.insertionPoint,
								Renderer: this.options.Renderer,
								index: r
							}));
							return this.plugins.onProcessSheet(r), r
						}, t.removeStyleSheet = function(e) {
							return e.detach(), oe.remove(e), this
						}, t.createRule = function(e, t, r) {
							if (void 0 === t && (t = {}), void 0 === r && (r = {}), "object" == typeof e) return this.createRule(void 0, e, t);
							r = g({}, r, {
								name: e,
								jss: this,
								Renderer: this.options.Renderer
							});
							r.generateId || (r.generateId = this.generateId), r.classes || (r.classes = {}), r.keyframes || (r.keyframes = {});
							r = v(e, t, r);
							return r && this.plugins.onProcessRule(r), r
						}, t.use = function() {
							for (var t = this, e = arguments.length, r = new Array(e), n = 0; n < e; n++) r[n] = arguments[n];
							return r.forEach(function(e) {
								t.plugins.use(e)
							}), this
						}, e
					}(),
					we = function(e) {
						return new Ce(e)
					};
				var _e = "object" == typeof CSS && null != CSS && "number" in CSS;
				/**
				 * A better abstraction over CSS.
				 *
				 * @copyright Oleg Isonen (Slobodskoi) / Isonen 2014-present
				 * @website https://github.com/cssinjs/jss
				 * @license MIT
				 */
				we();
				var Re = Date.now(),
					Ie = "fnValues" + Re,
					Ee = "fnStyle" + ++Re,
					Te = function() {
						return {
							onCreateRule: function(e, t, r) {
								if ("function" != typeof t) return null;
								r = v(e, {}, r);
								return r[Ee] = t, r
							},
							onProcessStyle: function(e, t) {
								if (Ie in t || Ee in t) return e;
								var r, n = {};
								for (r in e) {
									var i = e[r];
									"function" == typeof i && (delete e[r], n[r] = i)
								}
								return t[Ie] = n, e
							},
							onUpdate: function(e, t, r, n) {
								var i = t,
									t = i[Ee];
								t && (i.style = t(e) || {});
								var o = i[Ie];
								if (o)
									for (var s in o) i.prop(s, o[s](e), n)
							}
						}
					},
					Oe = "@global",
					Pe = "@global ",
					Ae = function() {
						function e(e, t, r) {
							for (var n in this.type = "global", this.at = Oe, this.isProcessed = !1, this.key = e, this.options = r, this.rules = new te(g({}, r, {
									parent: this
								})), t) this.rules.add(n, t[n]);
							this.rules.process()
						}
						var t = e.prototype;
						return t.getRule = function(e) {
							return this.rules.get(e)
						}, t.addRule = function(e, t, r) {
							r = this.rules.add(e, t, r);
							return r && this.options.jss.plugins.onProcessRule(r), r
						}, t.replaceRule = function(e, t, r) {
							r = this.rules.replace(e, t, r);
							return r && this.options.jss.plugins.onProcessRule(r), r
						}, t.indexOf = function(e) {
							return this.rules.indexOf(e)
						}, t.toString = function(e) {
							return this.rules.toString(e)
						}, e
					}(),
					ke = function() {
						function e(e, t, r) {
							this.type = "global", this.at = Oe, this.isProcessed = !1, this.key = e, this.options = r;
							e = e.substr(Pe.length);
							this.rule = r.jss.createRule(e, t, g({}, r, {
								parent: this
							}))
						}
						return e.prototype.toString = function(e) {
							return this.rule ? this.rule.toString(e) : ""
						}, e
					}(),
					Be = /\s*,\s*/g;

				function De(e, t) {
					for (var r = e.split(Be), n = "", i = 0; i < r.length; i++) n += t + " " + r[i].trim(), r[i + 1] && (n += ", ");
					return n
				}
				var Me = function() {
						return {
							onCreateRule: function(e, t, r) {
								return e ? e === Oe ? new Ae(e, t, r) : "@" === e[0] && e.substr(0, Pe.length) === Pe ? new ke(e, t, r) : ((t = r.parent) && ("global" === t.type || t.options.parent && "global" === t.options.parent.type) && (r.scoped = !1), r.selector || !1 !== r.scoped || (r.selector = e), null) : null
							},
							onProcessRule: function(e, t) {
								"style" === e.type && t && (function(e, t) {
									var r = e.options,
										n = e.style,
										i = n ? n[Oe] : null;
									if (i) {
										for (var o in i) t.addRule(o, i[o], g({}, r, {
											selector: De(o, e.selector)
										}));
										delete n[Oe]
									}
								}(e, t), function(e, t) {
									var r, n, i = e.options,
										o = e.style;
									for (r in o) "@" === r[0] && r.substr(0, Oe.length) === Oe && (n = De(r.substr(Oe.length), e.selector), t.addRule(n, o[r], g({}, i, {
										selector: n
									})), delete o[r])
								}(e, t))
							}
						}
					},
					Ne = /\s*,\s*/g,
					Ve = /&/g,
					je = /\$([\w-]+)/g;
				var Ue = function() {
						return {
							onProcessStyle: function(e, t, r) {
								if ("style" !== t.type) return e;
								var n, i, o, s, a = t,
									l = a.options.parent;
								for (i in e) {
									var u, c, d = -1 !== i.indexOf("&"),
										f = "@" === i[0];
									(d || f) && (c = a, o = l, n = (s = n) ? g({}, s, {
										index: s.index + 1
									}) : (s = void 0 === (s = c.options.nestingLevel) ? 1 : s + 1, delete(c = g({}, c.options, {
										nestingLevel: s,
										index: o.indexOf(c) + 1
									})).name, c), d ? (u = u || function(n, i) {
										return function(e, t) {
											var r = n.getRule(t) || i && i.getRule(t);
											return r ? r.selector : t
										}
									}(l, r), c = (c = function(e, t) {
										for (var r = t.split(Ne), n = e.split(Ne), i = "", o = 0; o < r.length; o++)
											for (var s = r[o], a = 0; a < n.length; a++) {
												var l = n[a];
												i && (i += ", "), i += -1 !== l.indexOf("&") ? l.replace(Ve, s) : s + " " + l
											}
										return i
									}(i, a.selector)).replace(je, u), d = a.key + "-" + i, "replaceRule" in l ? l.replaceRule(d, e[i], g({}, n, {
										selector: c
									})) : l.addRule(d, e[i], g({}, n, {
										selector: c
									}))) : f && l.addRule(i, {}, n).addRule(a.key, e[i], {
										selector: a.selector
									}), delete e[i])
								}
								return e
							}
						}
					},
					Ge = /[A-Z]/g,
					Le = /^ms-/,
					ze = {};

				function He(e) {
					return "-" + e.toLowerCase()
				}
				var $e = function(e) {
					if (ze.hasOwnProperty(e)) return ze[e];
					var t = e.replace(Ge, He);
					return ze[e] = Le.test(t) ? "-" + t : t
				};

				function We(e) {
					var t, r = {};
					for (t in e) r[0 === t.indexOf("--") ? t : $e(t)] = e[t];
					return e.fallbacks && (Array.isArray(e.fallbacks) ? r.fallbacks = e.fallbacks.map(We) : r.fallbacks = We(e.fallbacks)), r
				}
				var Fe = function() {
						return {
							onProcessStyle: function(e) {
								if (Array.isArray(e)) {
									for (var t = 0; t < e.length; t++) e[t] = We(e[t]);
									return e
								}
								return We(e)
							},
							onChangeValue: function(e, t, r) {
								if (0 === t.indexOf("--")) return e;
								var n = $e(t);
								return t === n ? e : (r.prop(n, e), null)
							}
						}
					},
					Ke = _e && CSS ? CSS.px : "px",
					qe = _e && CSS ? CSS.ms : "ms",
					t = _e && CSS ? CSS.percent : "%";

				function Ze(e) {
					function t(e) {
						return e[1].toUpperCase()
					}
					var r, n = /(-[a-z])/g,
						i = {};
					for (r in e) i[r] = e[r], i[r.replace(n, t)] = e[r];
					return i
				}
				var Je = Ze({
					"animation-delay": qe,
					"animation-duration": qe,
					"background-position": Ke,
					"background-position-x": Ke,
					"background-position-y": Ke,
					"background-size": Ke,
					border: Ke,
					"border-bottom": Ke,
					"border-bottom-left-radius": Ke,
					"border-bottom-right-radius": Ke,
					"border-bottom-width": Ke,
					"border-left": Ke,
					"border-left-width": Ke,
					"border-radius": Ke,
					"border-right": Ke,
					"border-right-width": Ke,
					"border-top": Ke,
					"border-top-left-radius": Ke,
					"border-top-right-radius": Ke,
					"border-top-width": Ke,
					"border-width": Ke,
					"border-block": Ke,
					"border-block-end": Ke,
					"border-block-end-width": Ke,
					"border-block-start": Ke,
					"border-block-start-width": Ke,
					"border-block-width": Ke,
					"border-inline": Ke,
					"border-inline-end": Ke,
					"border-inline-end-width": Ke,
					"border-inline-start": Ke,
					"border-inline-start-width": Ke,
					"border-inline-width": Ke,
					"border-start-start-radius": Ke,
					"border-start-end-radius": Ke,
					"border-end-start-radius": Ke,
					"border-end-end-radius": Ke,
					margin: Ke,
					"margin-bottom": Ke,
					"margin-left": Ke,
					"margin-right": Ke,
					"margin-top": Ke,
					"margin-block": Ke,
					"margin-block-end": Ke,
					"margin-block-start": Ke,
					"margin-inline": Ke,
					"margin-inline-end": Ke,
					"margin-inline-start": Ke,
					padding: Ke,
					"padding-bottom": Ke,
					"padding-left": Ke,
					"padding-right": Ke,
					"padding-top": Ke,
					"padding-block": Ke,
					"padding-block-end": Ke,
					"padding-block-start": Ke,
					"padding-inline": Ke,
					"padding-inline-end": Ke,
					"padding-inline-start": Ke,
					"mask-position-x": Ke,
					"mask-position-y": Ke,
					"mask-size": Ke,
					height: Ke,
					width: Ke,
					"min-height": Ke,
					"max-height": Ke,
					"min-width": Ke,
					"max-width": Ke,
					bottom: Ke,
					left: Ke,
					top: Ke,
					right: Ke,
					inset: Ke,
					"inset-block": Ke,
					"inset-block-end": Ke,
					"inset-block-start": Ke,
					"inset-inline": Ke,
					"inset-inline-end": Ke,
					"inset-inline-start": Ke,
					"box-shadow": Ke,
					"text-shadow": Ke,
					"column-gap": Ke,
					"column-rule": Ke,
					"column-rule-width": Ke,
					"column-width": Ke,
					"font-size": Ke,
					"font-size-delta": Ke,
					"letter-spacing": Ke,
					"text-decoration-thickness": Ke,
					"text-indent": Ke,
					"text-stroke": Ke,
					"text-stroke-width": Ke,
					"word-spacing": Ke,
					motion: Ke,
					"motion-offset": Ke,
					outline: Ke,
					"outline-offset": Ke,
					"outline-width": Ke,
					perspective: Ke,
					"perspective-origin-x": t,
					"perspective-origin-y": t,
					"transform-origin": t,
					"transform-origin-x": t,
					"transform-origin-y": t,
					"transform-origin-z": t,
					"transition-delay": qe,
					"transition-duration": qe,
					"vertical-align": Ke,
					"flex-basis": Ke,
					"shape-margin": Ke,
					size: Ke,
					gap: Ke,
					grid: Ke,
					"grid-gap": Ke,
					"row-gap": Ke,
					"grid-row-gap": Ke,
					"grid-column-gap": Ke,
					"grid-template-rows": Ke,
					"grid-template-columns": Ke,
					"grid-auto-rows": Ke,
					"grid-auto-columns": Ke,
					"box-shadow-x": Ke,
					"box-shadow-y": Ke,
					"box-shadow-blur": Ke,
					"box-shadow-spread": Ke,
					"font-line-height": Ke,
					"text-shadow-x": Ke,
					"text-shadow-y": Ke,
					"text-shadow-blur": Ke
				});

				function Qe(e, t, r) {
					if (null == t) return t;
					if (Array.isArray(t))
						for (var n = 0; n < t.length; n++) t[n] = Qe(e, t[n], r);
					else if ("object" == typeof t)
						if ("fallbacks" === e)
							for (var i in t) t[i] = Qe(i, t[i], r);
						else
							for (var o in t) t[o] = Qe(e + "-" + o, t[o], r);
					else if ("number" == typeof t && !1 === isNaN(t)) {
						var s = r[e] || Je[e];
						return !s || 0 === t && s === Ke ? t.toString() : "function" == typeof s ? s(t).toString() : "" + t + s
					}
					return t
				}
				var Ye = function(e) {
					void 0 === e && (e = {});
					var n = Ze(e);
					return {
						onProcessStyle: function(e, t) {
							if ("style" !== t.type) return e;
							for (var r in e) e[r] = Qe(r, e[r], n);
							return e
						},
						onChangeValue: function(e, t) {
							return Qe(t, e, n)
						}
					}
				};

				function Xe(e, t) {
					(null == t || t > e.length) && (t = e.length);
					for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
					return n
				}

				function et(e) {
					return function(e) {
						if (Array.isArray(e)) return Xe(e)
					}(e) || function(e) {
						if ("undefined" != typeof Symbol && Symbol.iterator in Object(e)) return Array.from(e)
					}(e) || function(e, t) {
						if (e) {
							if ("string" == typeof e) return Xe(e, t);
							var r = Object.prototype.toString.call(e).slice(8, -1);
							return "Object" === r && e.constructor && (r = e.constructor.name), "Map" === r || "Set" === r ? Array.from(e) : "Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r) ? Xe(e, t) : void 0
						}
					}(e) || function() {
						throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
					}()
				}
				var tt = "",
					rt = "",
					o = "",
					O = "",
					A = s && "ontouchstart" in document.documentElement;
				if (s) {
					var nt, it = {
							Moz: "-moz-",
							ms: "-ms-",
							O: "-o-",
							Webkit: "-webkit-"
						},
						ot = document.createElement("p").style;
					for (nt in it)
						if (nt + "Transform" in ot) {
							rt = it[tt = nt];
							break
						}
					"Webkit" === tt && "msHyphens" in ot && (tt = "ms", rt = it.ms, O = "edge"), "Webkit" === tt && "-apple-trailing-word" in ot && (o = "apple")
				}
				var st = {
					js: tt,
					css: rt,
					vendor: o,
					browser: O,
					isTouch: A
				};
				var N = {
						noPrefill: ["appearance"],
						supportedProperty: function(e) {
							return "appearance" === e && ("ms" === st.js ? "-webkit-" + e : st.css + e)
						}
					},
					z = {
						noPrefill: ["color-adjust"],
						supportedProperty: function(e) {
							return "color-adjust" === e && ("Webkit" === st.js ? st.css + "print-" + e : e)
						}
					},
					at = /[-\s]+(.)?/g;

				function lt(e, t) {
					return t ? t.toUpperCase() : ""
				}

				function ut(e) {
					return e.replace(at, lt)
				}

				function ct(e) {
					return ut("-" + e)
				}

				function dt(e) {
					return st.css + e
				}
				var ft, $ = {
						noPrefill: ["mask"],
						supportedProperty: function(e, t) {
							if (!/^mask/.test(e)) return !1;
							if ("Webkit" === st.js) {
								var r = "mask-image";
								if (ut(r) in t) return e;
								if (st.js + ct(r) in t) return st.css + e
							}
							return e
						}
					},
					K = {
						noPrefill: ["text-orientation"],
						supportedProperty: function(e) {
							return "text-orientation" === e && ("apple" !== st.vendor || st.isTouch ? e : st.css + e)
						}
					},
					Z = {
						noPrefill: ["transform"],
						supportedProperty: function(e, t, r) {
							return "transform" === e && (r.transform ? e : st.css + e)
						}
					},
					se = {
						noPrefill: ["transition"],
						supportedProperty: function(e, t, r) {
							return "transition" === e && (r.transition ? e : st.css + e)
						}
					},
					ae = {
						noPrefill: ["writing-mode"],
						supportedProperty: function(e) {
							return "writing-mode" === e && ("Webkit" === st.js || "ms" === st.js && "edge" !== st.browser ? st.css + e : e)
						}
					},
					he = {
						noPrefill: ["user-select"],
						supportedProperty: function(e) {
							return "user-select" === e && ("Moz" === st.js || "ms" === st.js || "apple" === st.vendor ? st.css + e : e)
						}
					},
					Re = {
						supportedProperty: function(e, t) {
							return !!/^break-/.test(e) && ("Webkit" === st.js ? "WebkitColumn" + ct(e) in t && st.css + "column-" + e : "Moz" === st.js && ("page" + ct(e) in t && "page-" + e))
						}
					},
					_e = {
						supportedProperty: function(e, t) {
							if (!/^(border|margin|padding)-inline/.test(e)) return !1;
							if ("Moz" === st.js) return e;
							e = e.replace("-inline", "");
							return st.js + ct(e) in t && st.css + e
						}
					},
					t = {
						supportedProperty: function(e, t) {
							return ut(e) in t && e
						}
					},
					qe = {
						supportedProperty: function(e, t) {
							var r = ct(e);
							return "-" === e[0] || "-" === e[0] && "-" === e[1] ? e : st.js + r in t ? st.css + e : "Webkit" !== st.js && "Webkit" + r in t && "-webkit-" + e
						}
					},
					o = {
						supportedProperty: function(e) {
							return "scroll-snap" === e.substring(0, 11) && ("ms" === st.js ? "" + st.css + e : e)
						}
					},
					O = {
						supportedProperty: function(e) {
							return "overscroll-behavior" === e && ("ms" === st.js ? st.css + "scroll-chaining" : e)
						}
					},
					pt = {
						"flex-grow": "flex-positive",
						"flex-shrink": "flex-negative",
						"flex-basis": "flex-preferred-size",
						"justify-content": "flex-pack",
						order: "flex-order",
						"align-items": "flex-align",
						"align-content": "flex-line-pack"
					},
					A = {
						supportedProperty: function(e, t) {
							e = pt[e];
							return !!e && (st.js + ct(e) in t && st.css + e)
						}
					},
					ht = {
						flex: "box-flex",
						"flex-grow": "box-flex",
						"flex-direction": ["box-orient", "box-direction"],
						order: "box-ordinal-group",
						"align-items": "box-align",
						"flex-flow": ["box-orient", "box-direction"],
						"justify-content": "box-pack"
					},
					gt = Object.keys(ht),
					O = [N, z, $, K, Z, se, ae, he, Re, _e, t, qe, o, O, A, {
						supportedProperty: function(e, t, r) {
							r = r.multiple;
							if (-1 < gt.indexOf(e)) {
								var n = ht[e];
								if (!Array.isArray(n)) return st.js + ct(n) in t && st.css + n;
								if (!r) return !1;
								for (var i = 0; i < n.length; i++)
									if (!(st.js + ct(n[0]) in t)) return !1;
								return n.map(dt)
							}
							return !1
						}
					}],
					yt = O.filter(function(e) {
						return e.supportedProperty
					}).map(function(e) {
						return e.supportedProperty
					}),
					A = O.filter(function(e) {
						return e.noPrefill
					}).reduce(function(e, t) {
						return e.push.apply(e, et(t.noPrefill)), e
					}, []),
					mt = {};
				if (s) {
					ft = document.createElement("p");
					var vt, bt = window.getComputedStyle(document.documentElement, "");
					for (vt in bt) isNaN(vt) || (mt[bt[vt]] = bt[vt]);
					A.forEach(function(e) {
						return delete mt[e]
					})
				}

				function St(e, t) {
					if (void 0 === t && (t = {}), !ft) return e;
					if (null != mt[e]) return mt[e];
					"transition" !== e && "transform" !== e || (t[e] = e in ft.style);
					for (var r = 0; r < yt.length && (mt[e] = yt[r](e, ft.style, t), !mt[e]); r++);
					try {
						ft.style[e] = ""
					} catch (e) {
						return !1
					}
					return mt[e]
				}
				var xt, Ct = {},
					wt = {
						transition: 1,
						"transition-property": 1,
						"-webkit-transition": 1,
						"-webkit-transition-property": 1
					},
					_t = /(^\s*[\w-]+)|, (\s*[\w-]+)(?![^()]*\))/g;

				function Rt(e, t, r) {
					if ("var" === t) return "var";
					if ("all" === t) return "all";
					if ("all" === r) return ", all";
					var n = t ? St(t) : ", " + St(r);
					return n || t || r
				}

				function It(e, t) {
					var r = t;
					if (!xt || "content" === e) return t;
					if ("string" != typeof r || !isNaN(parseInt(r, 10))) return r;
					t = e + r;
					if (null != Ct[t]) return Ct[t];
					try {
						xt.style[e] = r
					} catch (e) {
						return Ct[t] = !1
					}
					if (wt[e]) r = r.replace(_t, Rt);
					else if ("" === xt.style[e] && ("-ms-flex" === (r = st.css + r) && (xt.style[e] = "-ms-flexbox"), xt.style[e] = r, "" === xt.style[e])) return Ct[t] = !1;
					return xt.style[e] = "", Ct[t] = r, Ct[t]
				}
				s && (xt = document.createElement("p"));
				var Et = function() {
					function a(e) {
						for (var t in e) {
							var r, n, i, o, s = e[t];
							"fallbacks" === t && Array.isArray(s) ? e[t] = s.map(a) : (r = !1, (n = St(t)) && n !== t && (r = !0), i = !1, (o = It(n, S(s))) && o !== s && (i = !0), (r || i) && (r && delete e[t], e[n || t] = o || s))
						}
						return e
					}
					return {
						onProcessRule: function(e) {
							"keyframes" === e.type && (e.at = "-" === (e = e.at)[1] || "ms" === st.js ? e : "@" + st.css + "keyframes" + e.substr(10))
						},
						onProcessStyle: function(e, t) {
							return "style" !== t.type ? e : a(e)
						},
						onChangeValue: function(e, t) {
							return It(t, S(e)) || e
						}
					}
				};
				var Tt = function() {
					function o(e, t) {
						return e.length === t.length ? t < e ? 1 : -1 : e.length - t.length
					}
					return {
						onProcessStyle: function(e, t) {
							if ("style" !== t.type) return e;
							for (var r = {}, n = Object.keys(e).sort(o), i = 0; i < n.length; i++) r[n[i]] = e[n[i]];
							return r
						}
					}
				};

				function Ot() {
					return {
						plugins: [Te(), Me(), Ue(), Fe(), Ye(), "undefined" == typeof window ? null : Et(), Tt()]
					}
				}

				function Pt(e, t) {
					if (null == e) return {};
					var r, n = h(e, t);
					if (Object.getOwnPropertySymbols)
						for (var i = Object.getOwnPropertySymbols(e), o = 0; o < i.length; o++) r = i[o], 0 <= t.indexOf(r) || Object.prototype.propertyIsEnumerable.call(e, r) && (n[r] = e[r]);
					return n
				}
				var O = r(804),
					At = r.n(O);

				function kt() {
					var e = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : {},
						t = e.baseClasses,
						r = e.newClasses;
					e.Component;
					if (!r) return t;
					var n = g({}, t);
					return Object.keys(r).forEach(function(e) {
						r[e] && (n[e] = "".concat(t[e], " ").concat(r[e]))
					}), n
				}
				var Bt = {
					set: function(e, t, r, n) {
						var i = e.get(t);
						i || (i = new Map, e.set(t, i)), i.set(r, n)
					},
					get: function(e, t, r) {
						t = e.get(t);
						return t ? t.get(r) : void 0
					},
					delete: function(e, t, r) {
						e.get(t).delete(r)
					}
				};
				var Dt = At().createContext(null);

				function Mt() {
					return At().useContext(Dt)
				}
				PropTypes;
				var Nt, A = we(Ot()),
					O = n(),
					Vt = new Map,
					A = {
						disableGeneration: !1,
						generateClassName: O,
						jss: A,
						sheetsCache: null,
						sheetsManager: Vt,
						sheetsRegistry: null
					},
					jt = At().createContext(A);

				function Ut(e) {
					var t = e.children,
						r = e.injectFirst,
						n = void 0 !== r && r,
						r = e.disableGeneration,
						r = void 0 !== r && r,
						e = Pt(e, ["children", "injectFirst", "disableGeneration"]),
						e = g({}, At().useContext(jt), {
							disableGeneration: r
						}, e);
					return !e.jss.options.insertionPoint && n && "undefined" != typeof window && (Nt || (n = document.head, Nt = document.createComment("mui-inject-first"), n.insertBefore(Nt, n.firstChild)), e.jss = we({
						plugins: Ot().plugins,
						insertionPoint: Nt
					})), At().createElement(jt.Provider, {
						value: e
					}, t)
				}
				var Gt = -1e9;

				function Lt(e) {
					return (Lt = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
						return typeof e
					} : function(e) {
						return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
					})(e)
				}

				function zt(e) {
					return e && "object" === Lt(e) && e.constructor === Object
				}

				function Ht(o) {
					var s = "function" == typeof o;
					return {
						create: function(e, t) {
							var r;
							try {
								r = s ? o(e) : o
							} catch (e) {
								throw e
							}
							if (!t || !e.overrides || !e.overrides[t]) return r;
							var n = e.overrides[t],
								i = g({}, r);
							return Object.keys(n).forEach(function(e) {
								i[e] = function t(r, n, e) {
									var i = 2 < arguments.length && void 0 !== e ? e : {
											clone: !0
										},
										o = i.clone ? g({}, r) : r;
									return zt(r) && zt(n) && Object.keys(n).forEach(function(e) {
										"__proto__" !== e && (zt(n[e]) && e in r ? o[e] = t(r[e], n[e], i) : o[e] = n[e])
									}), o
								}(i[e], n[e])
							}), i
						},
						options: {}
					}
				}
				var $t = {};

				function Wt(e, t) {
					var r, n, i, o = e.state,
						s = e.theme,
						a = e.stylesOptions,
						l = e.stylesCreator,
						u = e.name;
					a.disableGeneration || ((r = Bt.get(a.sheetsManager, l, s)) || (r = {
						refs: 0,
						staticSheet: null,
						dynamicStyles: null
					}, Bt.set(a.sheetsManager, l, s, r)), (i = g({}, l.options, a, {
						theme: s,
						flip: "boolean" == typeof a.flip ? a.flip : "rtl" === s.direction
					})).generateId = i.serverGenerateClassName || i.generateClassName, e = a.sheetsRegistry, 0 === r.refs && (a.sheetsCache && (n = Bt.get(a.sheetsCache, l, s)), u = l.create(s, u), n || ((n = a.jss.createStyleSheet(u, g({
						link: !1
					}, i))).attach(), a.sheetsCache && Bt.set(a.sheetsCache, l, s, n)), e && e.add(n), r.staticSheet = n, r.dynamicStyles = function e(t) {
						var r, n = null;
						for (r in t) {
							var i = t[r],
								o = typeof i;
							"function" == o ? (n = n || {})[r] = i : "object" != o || null === i || Array.isArray(i) || (i = e(i)) && ((n = n || {})[r] = i)
						}
						return n
					}(u)), r.dynamicStyles ? ((i = a.jss.createStyleSheet(r.dynamicStyles, g({
						link: !0
					}, i))).update(t), i.attach(), o.dynamicSheet = i, o.classes = kt({
						baseClasses: r.staticSheet.classes,
						newClasses: i.classes
					}), e && e.add(i)) : o.classes = r.staticSheet.classes, r.refs += 1)
				}

				function Ft(e) {
					var t = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : {},
						d = t.name,
						r = t.classNamePrefix,
						s = t.Component,
						n = t.defaultTheme,
						f = void 0 === n ? $t : n,
						p = Pt(t, ["name", "classNamePrefix", "Component", "defaultTheme"]),
						h = Ht(e),
						r = d || r || "makeStyles";
					h.options = {
						index: Gt += 1,
						name: d,
						meta: r,
						classNamePrefix: r
					};
					return function(e) {
						var t, r, n, i, o = 0 < arguments.length && void 0 !== e ? e : {},
							a = Mt() || f,
							l = g({}, At().useContext(jt), p),
							u = At().useRef(),
							c = At().useRef();
						return n = function() {
							var s = {
								name: d,
								state: {},
								stylesCreator: h,
								stylesOptions: l,
								theme: a
							};
							return Wt(s, o), c.current = !1, u.current = s,
								function() {
									var e, t, r, n, i, o;
									r = (e = s).state, n = e.theme, i = e.stylesOptions, o = e.stylesCreator, i.disableGeneration || (--(t = Bt.get(i.sheetsManager, o, n)).refs, e = i.sheetsRegistry, 0 === t.refs && (Bt.delete(i.sheetsManager, o, n), i.jss.removeStyleSheet(t.staticSheet), e && e.remove(t.staticSheet)), r.dynamicSheet && (i.jss.removeStyleSheet(r.dynamicSheet), e && e.remove(r.dynamicSheet)))
								}
						}, i = [a, h], r = At().useRef([]), i = At().useMemo(function() {
							return {}
						}, i), r.current !== i && (r.current = i, t = n()), At().useEffect(function() {
							return function() {
								t && t()
							}
						}, [i]), At().useEffect(function() {
							var e, t;
							c.current && (e = u.current, t = o, (e = e.state).dynamicSheet && e.dynamicSheet.update(t)), c.current = !0
						}), e = u.current, r = o.classes, n = s, i = e.state, e.stylesOptions.disableGeneration ? r || {} : (i.cacheClasses || (i.cacheClasses = {
							value: null,
							lastProp: null,
							lastJSS: {}
						}), e = !1, i.classes !== i.cacheClasses.lastJSS && (i.cacheClasses.lastJSS = i.classes, e = !0), r !== i.cacheClasses.lastProp && (i.cacheClasses.lastProp = r, e = !0), e && (i.cacheClasses.value = kt({
							baseClasses: i.cacheClasses.lastJSS,
							newClasses: r,
							Component: n
						})), i.cacheClasses.value)
					}
				}
				var Kt = function() {
					function t() {
						var e = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : {};
						! function(e) {
							if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
						}(this), this.options = e
					}
					return c(t, [{
						key: "collect",
						value: function(e) {
							var t = new Map;
							this.sheetsRegistry = new ie;
							var r = n();
							return At().createElement(Ut, g({
								sheetsManager: t,
								serverGenerateClassName: r,
								sheetsRegistry: this.sheetsRegistry
							}, this.options), e)
						}
					}, {
						key: "toString",
						value: function() {
							return this.sheetsRegistry ? this.sheetsRegistry.toString() : ""
						}
					}, {
						key: "getStyleElement",
						value: function(e) {
							return At().createElement("style", g({
								id: "jss-server-side",
								key: "jss-server-side",
								dangerouslySetInnerHTML: {
									__html: this.toString()
								}
							}, e))
						}
					}]), t
				}();
				var qt = function() {
						for (var e, t, r = 0, n = ""; r < arguments.length;)(e = arguments[r++]) && (t = function e(t) {
							var r, n, i = "";
							if ("string" == typeof t || "number" == typeof t) i += t;
							else if ("object" == typeof t)
								if (Array.isArray(t))
									for (r = 0; r < t.length; r++) t[r] && (n = e(t[r])) && (i && (i += " "), i += n);
								else
									for (r in t) t[r] && (i && (i += " "), i += r);
							return i
						}(e)) && (n && (n += " "), n += t);
						return n
					},
					A = r(572),
					Zt = r.n(A);

				function Jt(f) {
					return function(r, e) {
						var t = 1 < arguments.length && void 0 !== e ? e : {},
							e = t.name,
							t = Pt(t, ["name"]);
						var c, d = Ft("function" == typeof r ? function(t) {
							return {
								root: function(e) {
									return r(g({
										theme: t
									}, e))
								}
							}
						} : {
							root: r
						}, g({
							Component: f,
							name: e || f.displayName,
							classNamePrefix: e
						}, t));
						r.filterProps && (c = r.filterProps, delete r.filterProps), r.propTypes && (r.propTypes, delete r.propTypes);
						t = At().forwardRef(function(e, t) {
							var r, n, i, o = e.children,
								s = e.className,
								a = e.clone,
								l = e.component,
								u = Pt(e, ["children", "className", "clone", "component"]),
								e = d(e),
								s = qt(e.root, s),
								u = u;
							if (c && (r = u, n = c, i = {}, Object.keys(r).forEach(function(e) {
									-1 === n.indexOf(e) && (i[e] = r[e])
								}), u = i), a) return At().cloneElement(o, g({
								className: qt(o.props.className, s)
							}, u));
							if ("function" == typeof o) return o(g({
								className: s
							}, u));
							l = l || f;
							return At().createElement(l, g({
								ref: t,
								className: s
							}, u), o)
						});
						return Zt()(t, f), t
					}
				}
				var Qt = function(e) {
						var t = e.children,
							r = e.theme,
							n = Mt();
						return e = At().useMemo(function() {
							var e, t, e = null === n ? r : (e = n, "function" != typeof(t = r) ? g({}, e, t) : t(e));
							return null != e && (e[l] = null !== n), e
						}, [r, n]), At().createElement(Dt.Provider, {
							value: e
						}, t)
					},
					Yt = function(t, e) {
						var r = 1 < arguments.length && void 0 !== e ? e : {};
						return function(s) {
							var a = r.defaultTheme,
								e = r.withTheme,
								l = void 0 !== e && e,
								u = r.name,
								e = Pt(r, ["defaultTheme", "withTheme", "name"]);
							var c = Ft(t, g({
									defaultTheme: a,
									Component: s,
									name: u || s.displayName,
									classNamePrefix: u
								}, e)),
								e = At().forwardRef(function(e, t) {
									e.classes;
									var r = e.innerRef,
										n = Pt(e, ["classes", "innerRef"]),
										i = c(g({}, s.defaultProps, e)),
										o = n;
									return "string" != typeof u && !l || (e = Mt() || a, u && (o = d({
										theme: e,
										name: u,
										props: n
									})), l && !o.theme && (o.theme = e)), At().createElement(s, g({
										ref: r || t,
										classes: i
									}, o))
								});
							return Zt()(e, s), e
						}
					};

				function Xt() {
					var o = (0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : {}).defaultTheme;
					return function(i) {
						var e = At().forwardRef(function(e, t) {
							var r = e.innerRef,
								n = Pt(e, ["innerRef"]),
								e = Mt() || o;
							return At().createElement(i, g({
								theme: e,
								ref: r || t
							}, n))
						});
						return Zt()(e, i), e
					}
				}
				var er = Xt()
			},
			470: function(e, t, r) {
				"use strict";
				var c = this && this.__assign || function() {
						return (c = Object.assign || function(e) {
							for (var t, r = 1, n = arguments.length; r < n; r++)
								for (var i in t = arguments[r]) Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
							return e
						}).apply(this, arguments)
					},
					n = this && this.__importDefault || function(e) {
						return e && e.__esModule ? e : {
							default: e
						}
					};
				t.__esModule = !0, t.BadgeIcon = void 0;
				var d = n(r(804)),
					f = n(r(779)),
					p = n(r(141)),
					h = r(584);
				t.BadgeIcon = function(e) {
					var t = e.size,
						r = e.src,
						n = e.titleText,
						i = e.additionalContainerClass,
						o = e.overrideContainerClass,
						s = e.additionalImgClass,
						a = e.overrideImgClass,
						l = e.dataAttrs,
						u = void 0 === l ? {} : l,
						l = e.onIconClick,
						e = void 0 === l ? h.noop : l;
					if (!t) throw new Error("Must provide a size prop");
					if (!n) throw new Error("Must provide a titleText for accessibility");
					if (!r) throw new Error("Must provide a src prop");
					l = (0, p.default)(t), t = l.iconImg, t = void 0 === t ? "" : t, l = l.imgWrapper, l = void 0 === l ? "" : l, l = o || (0, f.default)(i, l), s = a || [s, t].join(" ") || "", t = (0, h.bindKeyDownA11yButton)(e);
					return d.default.createElement("span", c({
						role: "button",
						tabIndex: 0
					}, u, {
						"data-rblx-badge-icon": !0,
						className: l,
						onClick: e,
						onKeyDown: t
					}), d.default.createElement("img", {
						className: s,
						src: r,
						title: n,
						alt: n
					}))
				}, t.default = t.BadgeIcon
			},
			796: function(e, t, r) {
				"use strict";
				var n = this && this.__importDefault || function(e) {
					return e && e.__esModule ? e : {
						default: e
					}
				};
				t.__esModule = !0, t.PremiumBadgeIcon = t.premiumBadgeIconReactRenderClass = t.premiumBadgeIconDataAttrSelector = t.PremiumBadgeThemeOptions = void 0;
				var l, u = n(r(804)),
					c = r(584),
					d = r(470),
					f = r(459);
				(r = l = t.PremiumBadgeThemeOptions || (t.PremiumBadgeThemeOptions = {})).LIGHT_OUTLINE = "lightOutline", r.DARK_OUTLINE = "darkOutline", t.premiumBadgeIconDataAttrSelector = "data-rblx-premium-badge-icon", t.premiumBadgeIconReactRenderClass = "premium-badge-icon";
				var p = ((r = {})[t.premiumBadgeIconDataAttrSelector] = "", r);
				t.PremiumBadgeIcon = function(e) {
					var t = e.iconTheme,
						r = e.size,
						n = e.titleText,
						i = e.additionalContainerClass,
						o = e.overrideContainerClass,
						s = e.additionalImgClass,
						a = e.overrideImgClass,
						e = e.onIconClick,
						e = void 0 === e ? c.noop : e;
					if (!r) throw new Error("Must provide a size prop");
					if (!n) throw new Error("Must provide a titleText for accessibility");
					t = t === l.LIGHT_OUTLINE ? f.PREMIUM_ICON_SVG_URL_ENCODED_DATA_OUTLINE_LIGHT : f.PREMIUM_ICON_SVG_URL_ENCODED_DATA_OUTLINE_DARK;
					return u.default.createElement(d.BadgeIcon, {
						dataAttrs: p,
						size: r,
						titleText: n,
						additionalContainerClass: i,
						overrideContainerClass: o,
						additionalImgClass: s,
						overrideImgClass: a,
						src: t,
						onIconClick: e
					})
				}, t.default = t.PremiumBadgeIcon
			},
			876: function(e, t, r) {
				"use strict";
				var n = this && this.__importDefault || function(e) {
					return e && e.__esModule ? e : {
						default: e
					}
				};
				t.__esModule = !0, t.VerifiedBadgeIcon = t.verifiedBadgeIconReactRenderClass = t.verifiedBadgeIconDataAttrSelector = void 0;
				var a = n(r(804)),
					l = r(584),
					u = r(470),
					c = r(459);
				t.verifiedBadgeIconDataAttrSelector = "data-rblx-verified-badge-icon", t.verifiedBadgeIconReactRenderClass = "verified-badge-icon";
				var d = ((r = {})[t.verifiedBadgeIconDataAttrSelector] = "", r);
				t.VerifiedBadgeIcon = function(e) {
					var t = e.size,
						r = e.titleText,
						n = e.additionalContainerClass,
						i = e.overrideContainerClass,
						o = e.additionalImgClass,
						s = e.overrideImgClass,
						e = e.onIconClick,
						e = void 0 === e ? l.noop : e;
					if (!t) throw new Error("Must provide a size prop");
					if (!r) throw new Error("Must provide a titleText for accessibility");
					return a.default.createElement(u.BadgeIcon, {
						dataAttrs: d,
						size: t,
						titleText: r,
						additionalContainerClass: n,
						overrideContainerClass: i,
						additionalImgClass: o,
						overrideImgClass: s,
						src: c.VERIFIED_BADGE_SVG_URL_ENCODED_DATA_IMAGE,
						onIconClick: e
					})
				}, t.default = t.VerifiedBadgeIcon
			},
			243: function(e, t) {
				"use strict";
				var r, n;
				t.__esModule = !0, t.BadgeSizes = void 0, (n = r = t.BadgeSizes || (t.BadgeSizes = {})).TITLE = "Title", n.HEADER = "Header", n.SUBHEADER = "Subheader", n.CAPTIONHEADER = "CaptionHeader", n.FOOTER = "Footer", t.default = {
					BadgeSizes: r
				}
			},
			764: function(e, t, r) {
				"use strict";
				var y = this && this.__assign || function() {
						return (y = Object.assign || function(e) {
							for (var t, r = 1, n = arguments.length; r < n; r++)
								for (var i in t = arguments[r]) Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
							return e
						}).apply(this, arguments)
					},
					n = this && this.__importDefault || function(e) {
						return e && e.__esModule ? e : {
							default: e
						}
					};
				t.__esModule = !0, t.VerifiedBadgeTextContainer = t.verifiedBadgeTextContainerReactRenderClass = t.verifiedBadgeIconElDataAttrSelector = t.verifiedBadgeTextElDataAttrSelector = t.verifiedBadgeTextWrapperDataAttrSelector = void 0;
				var m = n(r(804)),
					v = n(r(779)),
					b = n(r(141)),
					S = r(876),
					x = r(584),
					C = {
						fontWeight: 500
					};
				t.verifiedBadgeTextWrapperDataAttrSelector = "data-rblx-badge-text-container", t.verifiedBadgeTextElDataAttrSelector = "data-rblx-badge-text-el", t.verifiedBadgeIconElDataAttrSelector = "data-rblx-badge-icon-el", t.verifiedBadgeTextContainerReactRenderClass = "verified-badge-text-container";
				var w = ((r = {})[t.verifiedBadgeTextWrapperDataAttrSelector] = "", r),
					_ = ((r = {})[t.verifiedBadgeTextElDataAttrSelector] = "", r),
					R = ((r = {})[t.verifiedBadgeIconElDataAttrSelector] = "", r);
				t.VerifiedBadgeTextContainer = function(e) {
					var t = e.size,
						r = e.titleText,
						n = e.showVerifiedBadge,
						i = void 0 !== n && n,
						o = e.text,
						s = e.textEl,
						a = void 0 === s ? null : s,
						l = e.badgeEl,
						u = void 0 === l ? null : l,
						c = e.overrideTextContainerClass,
						d = void 0 === c ? "" : c,
						f = e.overrideWrapperClass,
						p = void 0 === f ? "" : f,
						h = e.additionalTextContainerClass,
						g = void 0 === h ? "" : h,
						n = e.additionalWrapperClass,
						s = void 0 === n ? "" : n,
						l = e.onIconClick,
						c = void 0 === l ? x.noop : l;
					if (!t) throw new Error("Must provide a size prop");
					if (!r) throw new Error("Must provide a titleText for accessibility");
					f = (0, b.default)(t), h = f.wrapper, n = void 0 === h ? "" : h, e = f.textContainer, l = void 0 === e ? "" : e, h = f.badge, e = void 0 === h ? "" : h, h = f.applyEllipsisTruncation, f = void 0 === h ? "" : h, h = (0, x.bindKeyDownA11yButton)(c), g = d || (0, v.default)(l, g), s = p || (0, v.default)(n, s), o = a || m.default.createElement("span", {
						className: f
					}, o), r = i ? m.default.createElement(S.VerifiedBadgeIcon, {
						size: t,
						titleText: r
					}) : null, r = u || r, d = d ? {} : C;
					return m.default.createElement("span", y({}, w, {
						className: s
					}), m.default.createElement("span", y({}, _, {
						style: d,
						className: g
					}), o), m.default.createElement("span", y({}, R, {
						role: "button",
						tabIndex: 0,
						onClick: c,
						onKeyDown: h,
						className: e
					}), r))
				}, t.default = t.VerifiedBadgeTextContainer
			},
			862: function(e, t, r) {
				"use strict";
				var n = this && this.__createBinding || (Object.create ? function(e, t, r, n) {
					void 0 === n && (n = r);
					var i = Object.getOwnPropertyDescriptor(t, r);
					i && ("get" in i ? t.__esModule : !i.writable && !i.configurable) || (i = {
						enumerable: !0,
						get: function() {
							return t[r]
						}
					}), Object.defineProperty(e, n, i)
				} : function(e, t, r, n) {
					void 0 === n && (n = r), e[n] = t[r]
				});
				t.__esModule = !0, t.PREMIUM_ICON_SVG_URL_ENCODED_DATA_OUTLINE_LIGHT = t.PREMIUM_ICON_SVG_URL_ENCODED_DATA_OUTLINE_DARK = t.VERIFIED_BADGE_SVG_URL_ENCODED_DATA_IMAGE = t.BadgeSizes = t.PremiumBadgeIcon = t.verifiedBadgeIconReactRenderClass = t.VerifiedBadgeIcon = t.verifiedBadgeTextContainerReactRenderClass = t.VerifiedBadgeTextContainer = void 0;
				var i = r(764);
				n(t, i, "VerifiedBadgeTextContainer"), n(t, i, "verifiedBadgeTextContainerReactRenderClass");
				i = r(876);
				n(t, i, "VerifiedBadgeIcon"), n(t, i, "verifiedBadgeIconReactRenderClass"), n(t, r(796), "PremiumBadgeIcon"), n(t, r(243), "BadgeSizes");
				r = r(459);
				n(t, r, "VERIFIED_BADGE_SVG_URL_ENCODED_DATA_IMAGE"), n(t, r, "PREMIUM_ICON_SVG_URL_ENCODED_DATA_OUTLINE_DARK"), n(t, r, "PREMIUM_ICON_SVG_URL_ENCODED_DATA_OUTLINE_LIGHT")
			},
			141: function(e, t, r) {
				"use strict";
				t.__esModule = !0, t.SIZE_CONSTS = void 0;
				var n = r(4),
					i = r(243);
				t.SIZE_CONSTS = ((r = {})[i.BadgeSizes.TITLE] = {
					marginLeft: "8px",
					fontSize: "28px",
					iconWidth: "28px",
					iconHeight: "28px"
				}, r[i.BadgeSizes.HEADER] = {
					marginLeft: "4px",
					fontSize: "24px",
					iconWidth: "16px",
					iconHeight: "16px"
				}, r[i.BadgeSizes.SUBHEADER] = {
					marginLeft: "4px",
					fontSize: "16px",
					iconWidth: "16px",
					iconHeight: "16px"
				}, r[i.BadgeSizes.CAPTIONHEADER] = {
					marginLeft: "4px",
					fontSize: "14px",
					iconWidth: "16px",
					iconHeight: "16px"
				}, r[i.BadgeSizes.FOOTER] = {
					marginLeft: "2px",
					fontSize: "12px",
					iconWidth: "12px",
					iconHeight: "12px"
				}, r);
				t.default = function(e) {
					e = {
						badge: {
							marginLeft: t.SIZE_CONSTS[e].marginLeft,
							position: "relative",
							display: "inline-block",
							flexGrow: 1
						},
						iconImg: {
							height: t.SIZE_CONSTS[e].iconHeight,
							width: t.SIZE_CONSTS[e].iconWidth,
							marginBottom: "-3x"
						},
						textContainer: {
							maxWidth: "calc(100% - (".concat(t.SIZE_CONSTS[e].iconWidth, " + ").concat(t.SIZE_CONSTS[e].marginLeft, "))"),
							width: "min-content",
							fontFamily: '"HCo Gotham SSm", san-serif',
							fontStyle: "normal",
							textDecoration: "none",
							lineHeight: "".concat(140, "%"),
							fontSize: t.SIZE_CONSTS[e].fontSize,
							display: "inline-block",
							height: "calc(".concat(t.SIZE_CONSTS[e].fontSize, " * ").concat(1.4, ")")
						},
						imgWrapper: {
							display: "flex",
							justifyContent: "flex-start",
							alignItems: "center",
							width: "auto"
						},
						wrapper: {
							position: "relative",
							display: "flex",
							justifyContent: "flex-start",
							alignItems: "center",
							width: "100%"
						},
						applyEllipsisTruncation: {
							width: "100%",
							display: "inline-block",
							whiteSpace: "nowrap",
							overflow: "hidden",
							textOverflow: "ellipsis"
						}
					};
					return (0, n.makeStyles)(e)()
				}
			},
			459: function(e, t, r) {
				"use strict";
				t.__esModule = !0, t.VERIFIED_BADGE_SVG_URL_ENCODED_DATA_IMAGE = t.PREMIUM_ICON_SVG_URL_ENCODED_DATA_OUTLINE_LIGHT = t.PREMIUM_ICON_SVG_URL_ENCODED_DATA_OUTLINE_DARK = t.PREMIUM_ICON_SVG_DATA_OUTLINE_LIGHT_SVG = t.PREMIUM_ICON_SVG_DATA_OUTLINE_DARK_SVG = t.VERIFIED_BADGE_RAW_SVG = void 0;
				r = r(241);
				t.VERIFIED_BADGE_RAW_SVG = '<svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 28 28" fill="none"> <g clip-path="url(#clip0_8_46)"> <rect x="5.88818" width="22.89" height="22.89" transform="rotate(15 5.88818 0)" fill="#0066FF"/> <path fill-rule="evenodd" clip-rule="evenodd" d="M20.543 8.7508L20.549 8.7568C21.15 9.3578 21.15 10.3318 20.549 10.9328L11.817 19.6648L7.45 15.2968C6.85 14.6958 6.85 13.7218 7.45 13.1218L7.457 13.1148C8.058 12.5138 9.031 12.5138 9.633 13.1148L11.817 15.2998L18.367 8.7508C18.968 8.1498 19.942 8.1498 20.543 8.7508Z" fill="white"/> </g> <defs> <clipPath id="clip0_8_46"> <rect width="28" height="28" fill="white"/> </clipPath> </defs> </svg>', t.PREMIUM_ICON_SVG_DATA_OUTLINE_DARK_SVG = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28 28"><path d="M28 24a4 4 0 01-4 4H14v-4h10V4H4v24a4 4 0 01-4-4V4a4 4 0 014-4h20a4 4 0 014 4zm-7-7v4h-7v-4h3v-6h-6v17H7V7h14v10z" fill="#393b3d" fill-rule="evenodd"/></svg>', t.PREMIUM_ICON_SVG_DATA_OUTLINE_LIGHT_SVG = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28 28"><defs><clipPath id="a"><path d="M28 24a4 4 0 01-4 4H14v-4h10V4H4v24a4 4 0 01-4-4V4a4 4 0 014-4h20a4 4 0 014 4zm-7-7v4h-7v-4h3v-6h-6v17H7V7h14v10z" fill="none" clip-rule="evenodd"/></clipPath></defs><g clip-path="url(#a)"><path fill="#fff" d="M-5-5h38v38H-5z"/></g></svg>', t.PREMIUM_ICON_SVG_URL_ENCODED_DATA_OUTLINE_DARK = (0, r.svgToEncodedDataImageString)(t.PREMIUM_ICON_SVG_DATA_OUTLINE_DARK_SVG), t.PREMIUM_ICON_SVG_URL_ENCODED_DATA_OUTLINE_LIGHT = (0, r.svgToEncodedDataImageString)(t.PREMIUM_ICON_SVG_DATA_OUTLINE_LIGHT_SVG), t.VERIFIED_BADGE_SVG_URL_ENCODED_DATA_IMAGE = (0, r.svgToEncodedDataImageString)(t.VERIFIED_BADGE_RAW_SVG), t.default = {
					PREMIUM_ICON_SVG_URL_ENCODED_DATA_OUTLINE_DARK: t.PREMIUM_ICON_SVG_URL_ENCODED_DATA_OUTLINE_DARK,
					PREMIUM_ICON_SVG_URL_ENCODED_DATA_OUTLINE_LIGHT: t.PREMIUM_ICON_SVG_URL_ENCODED_DATA_OUTLINE_LIGHT,
					VERIFIED_BADGE_SVG_URL_ENCODED_DATA_IMAGE: t.VERIFIED_BADGE_SVG_URL_ENCODED_DATA_IMAGE
				}
			},
			241: function(e, t) {
				"use strict";
				t.__esModule = !0, t.svgToEncodedDataImageString = t.getDataImageString = t.encodeSVG = t.QuoteTypes = t.blankSvg = void 0;
				var r, n, i = /[\r\n%#()<>?\[\\\]^`{|}]/g;
				t.blankSvg = '<svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 500 500" width="500" height="500" id="starter_svg"></svg>', (n = r = t.QuoteTypes || (t.QuoteTypes = {})).SINGLE = "single", n.DOUBLE = "double";
				t.encodeSVG = function(e, t) {
					return (e = (e = (e = t === r.DOUBLE ? e.replace(/"/g, "'") : e.replace(/'/g, '"')).replace(/>\s{1,}</g, "><")).replace(/\s{2,}/g, " ")).replace(i, encodeURIComponent)
				};
				t.getDataImageString = function(e) {
					return "data:image/svg+xml;charset=utf-8,".concat(e)
				};
				t.svgToEncodedDataImageString = function(e) {
					return (0, t.getDataImageString)((0, t.encodeSVG)(e, r.DOUBLE))
				}
			},
			584: function(e, t) {
				"use strict";

				function r() {}
				t.__esModule = !0, t.bindKeyDownA11yButton = t.noop = void 0, t.noop = r;
				var n = ["Enter", " "];
				t.bindKeyDownA11yButton = function(t) {
					return void 0 === t && (t = r),
						function(e) {
							n.includes(e.key) && t()
						}
				}, t.default = {
					bindKeyDownA11yButton: t.bindKeyDownA11yButton,
					noop: r
				}
			},
			779: function(e, t) {
				var r;
				/*!
				  Copyright (c) 2017 Jed Watson.
				  Licensed under the MIT License (MIT), see
				  http://jedwatson.github.io/classnames
				*/
				! function() {
					"use strict";
					var s = {}.hasOwnProperty;

					function a() {
						for (var e = [], t = 0; t < arguments.length; t++) {
							var r = arguments[t];
							if (r) {
								var n = typeof r;
								if ("string" == n || "number" == n) e.push(r);
								else if (Array.isArray(r) && r.length) {
									var i = a.apply(null, r);
									i && e.push(i)
								} else if ("object" == n)
									for (var o in r) s.call(r, o) && r[o] && e.push(o)
							}
						}
						return e.join(" ")
					}
					e.exports ? (a.default = a, e.exports = a) : void 0 === (r = function() {
						return a
					}.apply(t, [])) || (e.exports = r)
				}()
			},
			804: function(e) {
				"use strict";
				e.exports = React
			}
		},
		n = {};

	function S(e) {
		if (n[e]) return n[e].exports;
		var t = n[e] = {
			exports: {}
		};
		return r[e].call(t.exports, t, t.exports, S), t.exports
	}
	S.n = function(e) {
			var t = e && e.__esModule ? function() {
				return e.default
			} : function() {
				return e
			};
			return S.d(t, {
				a: t
			}), t
		}, S.d = function(e, t) {
			for (var r in t) S.o(t, r) && !S.o(e, r) && Object.defineProperty(e, r, {
				enumerable: !0,
				get: t[r]
			})
		}, S.o = function(e, t) {
			return Object.prototype.hasOwnProperty.call(e, t)
		}, S.r = function(e) {
			"undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
				value: "Module"
			}), Object.defineProperty(e, "__esModule", {
				value: !0
			})
		},
		function() {
			"use strict";
			var i = S(804),
				o = S.n(i),
				e = ReactUtilities,
				s = ReactStyleGuide,
				a = S(862),
				c = {
					common: ["CommonUI.Features"],
					feature: "Feature.ProfileBadges"
				},
				t = c,
				d = Roblox;

			function f(e) {
				return function(e) {
					if (Array.isArray(e)) return n(e)
				}(e) || function(e) {
					if ("undefined" != typeof Symbol && Symbol.iterator in Object(e)) return Array.from(e)
				}(e) || function(e, t) {
					if (!e) return;
					if ("string" == typeof e) return n(e, t);
					var r = Object.prototype.toString.call(e).slice(8, -1);
					"Object" === r && e.constructor && (r = e.constructor.name);
					if ("Map" === r || "Set" === r) return Array.from(e);
					if ("Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return n(e, t)
				}(e) || function() {
					throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
				}()
			}

			function n(e, t) {
				(null == t || t > e.length) && (t = e.length);
				for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
				return n
			}

			function T() {
				var t, e, r, n, i, o, s, a, l, u;
				return d.TranslationResourceProvider && d.Intl && (s = new d.Intl, t = new d.TranslationResourceProvider(s), a = c.feature, l = [].concat(f(c.common), [a]).filter(function(e) {
					return !!e
				}).map(function(e) {
					return t.getTranslationResource(e)
				}), e = (u = t.mergeTranslationResources.apply(t, f(l))).get("Creator.VerifiedBadgeIconAccessibilityText"), r = u.get("VerifiedBadgeInfoTitle"), n = u.get("VerifiedBadgeInfo"), i = u.get("VerifiedBadgeInfoLink"), o = u.get("UsernameChangeWithVerifiedBadge"), s = u.get("TwoSVWithVerifiedBadge"), a = u.get("GroupNameChangeWithVerifiedBadge"), l = u.get("DisplayNameChangeWithVerifiedBadge"), u = u.get("action.close")), {
					translatedVerifiedBadgeTitleText: e || "Verified Badge Icon",
					translatedVerifiedBadgeModalTitleText: r || "Verified Badge",
					translatedVerifiedBadgeModalBodyText: n || "This badge verifies that the holder is a notable and authentic creator, brand, or public figure.",
					translatedVerifiedBadgeModalLearnMoreLinkText: i || "Learn More",
					translatedVerifiedBadgeUsernameChangeText: o || "Important: This change will result in the loss of your verified badge.\n\nYour original account creation date will carry over to your new username.",
					translatedVerifiedBadgeTwoSVChangeText: s || "Disabling 2-Step Verification will result in the loss of your verified badge and make your account less secure. Are you sure you want to proceed?",
					translatedVerifiedBadgeGroupNameChangeText: a || "the verified badge will be removed.",
					translatedVerifiedBadgeDisplayNameChangeText: l || "Important: This change will result in the loss of your verified badge.\n\nYour display name can only be changed once every 7 days.",
					translatedVerifiedBadgeModalCloseButtonText: u || "Close"
				}
			}

			function r() {
				return (r = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var r, n = arguments[t];
						for (r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
					}
					return e
				}).apply(this, arguments)
			}

			function l(e, t) {
				return function(e) {
					if (Array.isArray(e)) return e
				}(e) || function(e, t) {
					if ("undefined" == typeof Symbol || !(Symbol.iterator in Object(e))) return;
					var r = [],
						n = !0,
						i = !1,
						o = void 0;
					try {
						for (var s, a = e[Symbol.iterator](); !(n = (s = a.next()).done) && (r.push(s.value), !t || r.length !== t); n = !0);
					} catch (e) {
						i = !0, o = e
					} finally {
						try {
							n || null == a.return || a.return()
						} finally {
							if (i) throw o
						}
					}
					return r
				}(e, t) || function(e, t) {
					if (!e) return;
					if ("string" == typeof e) return u(e, t);
					var r = Object.prototype.toString.call(e).slice(8, -1);
					"Object" === r && e.constructor && (r = e.constructor.name);
					if ("Map" === r || "Set" === r) return Array.from(e);
					if ("Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return u(e, t)
				}(e, t) || function() {
					throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
				}()
			}

			function u(e, t) {
				(null == t || t > e.length) && (t = e.length);
				for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
				return n
			}

			function p(e, t, r, n, i, o, s) {
				try {
					var a = e[o](s),
						l = a.value
				} catch (e) {
					return void r(e)
				}
				a.done ? t(l) : Promise.resolve(l).then(n, i)
			}

			function h(a) {
				return function() {
					var e = this,
						s = arguments;
					return new Promise(function(t, r) {
						var n = a.apply(e, s);

						function i(e) {
							p(n, t, r, i, o, "next", e)
						}

						function o(e) {
							p(n, t, r, i, o, "throw", e)
						}
						i(void 0)
					})
				}
			}

			function O() {
				v(!0)
			}

			function g() {
				v(!1)
			}

			function y() {
				window.open("https://en.help.roblox.com/hc/articles/7997207259156", "_blank")
			}
			var P = {
					initCallback: function() {},
					overrideIconClass: "",
					overrideContainerClass: ""
				},
				A = {
					icontheme: "iconTheme",
					size: "size",
					titletext: "titleText",
					additionalcontainerclass: "additionalContainerClass",
					overridecontainerclass: "overrideContainerClass",
					additionalimgclass: "additionalImgClass",
					overrideimgclass: "overrideImgClass",
					showverifiedbadge: "showVerifiedBadge",
					text: "text",
					textel: "textEl",
					badgeel: "badgeEl",
					overridetextcontainerclass: "overrideTextContainerClass",
					overridewrapperclass: "overridewrapperClass",
					additionaltextcontainerclass: "additionalTextContainerClass",
					additionalwrapperclass: "additionalWrapperClass",
					oniconclick: "onIconClick"
				},
				k = "disablemodal",
				m = function() {
					var e = h(regeneratorRuntime.mark(function e() {
						var t;
						return regeneratorRuntime.wrap(function(e) {
							for (;;) switch (e.prev = e.next) {
								case 0:
									return e.prev = 0, t = void 0 !== window.RobloxBadges && void 0 !== window.React && void 0 !== window.ReactDOM, e.abrupt("return", t);
								case 5:
									return e.prev = 5, e.t0 = e.catch(0), e.abrupt("return", !1);
								case 8:
								case "end":
									return e.stop()
							}
						}, e, null, [
							[0, 5]
						])
					}));
					return function() {
						return e.apply(this, arguments)
					}
				}(),
				B = "verified-badge-info-modal",
				v = function() {},
				b = (0, e.withTranslations)(function(e) {
					var t = e.titleText;
					return null == t && (t = e.translate("Creator.VerifiedBadgeIconAccessibilityText")), o().createElement(a.VerifiedBadgeIcon, r({}, e, {
						titleText: t
					}))
				}, t),
				e = (0, e.withTranslations)(function(e) {
					var t = e.titleText;
					return null == t && (t = e.translate("Creator.VerifiedBadgeIconAccessibilityText")), o().createElement(a.VerifiedBadgeTextContainer, r({}, e, {
						titleText: t
					}))
				}, t),
				t = function() {
					var e = h(regeneratorRuntime.mark(function e() {
						var t, r, n, i, o, s, a, l, u, c, d, f, p, h, g, y, m, v, b, S, x, C, w, _, R, I, E = arguments;
						return regeneratorRuntime.wrap(function(e) {
							for (;;) switch (e.prev = e.next) {
								case 0:
									return t = (u = 0 < E.length && void 0 !== E[0] ? E[0] : P).initCallback, r = u.overrideIconClass, n = u.overrideContainerClass, e.prev = 1, e.next = 4, window.RobloxBadges.robloxBadgesReadyForRender();
								case 4:
									if (!e.sent) {
										e.next = 14;
										break
									}
									for (i = document.querySelectorAll(".".concat(n || window.RobloxBadges.verifiedBadgeTextContainerReactRenderClass)), o = document.querySelectorAll(".".concat(r || window.RobloxBadges.verifiedBadgeIconReactRenderClass)), s = function(e) {
											var t = e.verifiedBadgeIconProps,
												r = e.verifiedBadge,
												e = document.createElement("span"),
												t = window.React.createElement(window.RobloxBadges.VerifiedBadgeIcon, t);
											window.ReactDOM.render(t, e);
											t = r.parentNode;
											return t.replaceChild(e, r), t
										}, a = function(e) {
											var t = e.verifiedBadgeTextContainerProps,
												r = e.verifiedBadgeTextContainerEl,
												e = document.createElement("span"),
												t = window.React.createElement(window.RobloxBadges.VerifiedBadgeTextContainer, t);
											window.ReactDOM.render(t, e);
											t = r.parentNode;
											return t.replaceChild(e, r), t
										}, 0 === document.querySelectorAll("#".concat(B)).length && ((l = document.createElement("span")).setAttribute("id", B), document.body.appendChild(l), u = window.React.createElement(window.RobloxBadges.VerifiedBadgeInfoModal), window.ReactDOM.render(u, l)), c = T(), d = 0; d < i.length; d++) {
										for (f = i[d], p = {
												titleText: c.translatedVerifiedBadgeTitleText,
												onIconClick: O
											}, h = Object.keys(f.dataset), g = 0; g < h.length; g++) y = h[g], m = A[y], v = f.dataset[y], m ? p[m] = v : y === k && (p.onIconClick = function() {});
										a({
											verifiedBadgeTextContainerProps: p,
											verifiedBadgeTextContainerEl: f
										})
									}
									for (b = 0; b < o.length; b++) {
										for (S = o[b], x = {
												titleText: c.translatedVerifiedBadgeTitleText,
												onIconClick: O
											}, C = Object.keys(S.dataset), w = 0; w < C.length; w++) _ = C[w], R = A[_], I = S.dataset[_], R ? x[R] = I : _ === k && (x.onIconClick = function() {});
										s({
											verifiedBadgeIconProps: x,
											verifiedBadge: S
										})
									}
								case 14:
									e.next = 18;
									break;
								case 16:
									e.prev = 16, e.t0 = e.catch(1);
								case 18:
									return e.prev = 18, "function" == typeof t && t(), e.finish(18);
								case 21:
								case "end":
									return e.stop()
							}
						}, e, null, [
							[1, 16, 18, 21]
						])
					}));
					return function() {
						return e.apply(this, arguments)
					}
				}();
			window.RobloxBadges = {
				ready: function(e) {
					"loading" === document.readyState ? document.addEventListener("DOMContentLoaded", e) : e()
				},
				verifiedBadgeTextContainerReactRenderClass: a.verifiedBadgeTextContainerReactRenderClass,
				verifiedBadgeIconReactRenderClass: a.verifiedBadgeIconReactRenderClass,
				PremiumBadgeIcon: a.PremiumBadgeIcon,
				robloxBadgesReadyForRender: m,
				BadgeSizes: a.BadgeSizes,
				initRobloxBadgesFrameworkAgnostic: t,
				VerifiedBadgeTextContainer: a.VerifiedBadgeTextContainer,
				VerifiedBadgeStringContainer: e,
				VerifiedBadgeIcon: a.VerifiedBadgeIcon,
				VerifiedBadgeIconContainer: b,
				currentUserHasVerifiedBadge: function() {
					return d.CurrentUser.hasVerifiedBadge || !1
				},
				currentUserHasPremium: function() {
					return d.CurrentUser.isPremiumUser || !1
				},
				getCurrentUserId: function() {
					return d.CurrentUser.userId
				},
				VerifiedBadgeInfoModal: function() {
					var e = l((0, i.useState)(!1), 2),
						t = e[0],
						r = e[1];
					(0, i.useEffect)(function() {
						return v = r,
							function() {
								v = null
							}
					}, []);
					var n = T(),
						e = o().createElement("div", null, o().createElement("div", null, o().createElement(a.VerifiedBadgeIcon, {
							overrideContainerClass: "hz-centered-badge-container",
							size: a.BadgeSizes.TITLE,
							titleText: n.translatedVerifiedBadgeModalTitleText
						})), o().createElement("div", null, n.translatedVerifiedBadgeModalBodyText));
					return o().createElement(o().Fragment, null, o().createElement(s.SimpleModal, {
						title: n.translatedVerifiedBadgeModalTitleText,
						show: t,
						body: e,
						actionButtonShow: !0,
						actionButtonText: n.translatedVerifiedBadgeModalLearnMoreLinkText,
						neutralButtonText: n.translatedVerifiedBadgeModalCloseButtonText,
						onClose: g,
						onNeutral: g,
						onAction: y
					}))
				},
				fetchTranslations: T
			}
		}()
}();
//# sourceMappingURL=https://js.rbxcdn.com/3fb24643da55dc1c2fe8a02bfeb6e565-RobloxBadges.bundle.min.js.map

/* Bundle detector */
window.Roblox && window.Roblox.BundleDetector && window.Roblox.BundleDetector.bundleDetected("RobloxBadges");