! function() {
	var n = {
			4777: function(e) {
				var u = 4,
					c = 1e-7,
					s = 10,
					o = "function" == typeof Float32Array;

				function r(e, t) {
					return 1 - 3 * t + 3 * e
				}

				function i(e, t) {
					return 3 * t - 6 * e
				}

				function d(e, t, n) {
					return ((r(t, n) * e + i(t, n)) * e + 3 * t) * e
				}

				function f(e, t, n) {
					return 3 * r(t, n) * e * e + 2 * i(t, n) * e + 3 * t
				}

				function p(e) {
					return e
				}
				e.exports = function(i, t, a, n) {
					if (!(0 <= i && i <= 1 && 0 <= a && a <= 1)) throw new Error("bezier x values must be in [0, 1] range");
					if (i === t && a === n) return p;
					for (var l = new(o ? Float32Array : Array)(11), e = 0; e < 11; ++e) l[e] = d(.1 * e, i, a);

					function r(e) {
						for (var t = 0, n = 1; 10 !== n && l[n] <= e; ++n) t += .1;
						var r = t + .1 * ((e - l[--n]) / (l[n + 1] - l[n])),
							o = f(r, i, a);
						return .001 <= o ? function(e, t, n, r) {
							for (var o = 0; o < u; ++o) {
								var i = f(t, n, r);
								if (0 === i) return t;
								t -= (d(t, n, r) - e) / i
							}
							return t
						}(e, r, i, a) : 0 === o ? r : function(e, t, n, r, o) {
							for (var i, a, l = 0; 0 < (i = d(a = t + (n - t) / 2, r, o) - e) ? n = a : t = a, Math.abs(i) > c && ++l < s;);
							return a
						}(e, t, t + .1, i, a)
					}
					return function(e) {
						return 0 === e ? 0 : 1 === e ? 1 : d(r(e), t, n)
					}
				}
			},
			1315: function() {
				! function() {
					"use strict";
					var f, n, p, m;

					function i(e) {
						try {
							return e.defaultView && e.defaultView.frameElement || null
						} catch (e) {
							return null
						}
					}

					function c(e) {
						this.time = e.time, this.target = e.target, this.rootBounds = r(e.rootBounds), this.boundingClientRect = r(e.boundingClientRect), this.intersectionRect = r(e.intersectionRect || s()), this.isIntersecting = !!e.intersectionRect;
						var t = this.boundingClientRect,
							e = t.width * t.height,
							t = this.intersectionRect,
							t = t.width * t.height;
						this.intersectionRatio = e ? Number((t / e).toFixed(4)) : this.isIntersecting ? 1 : 0
					}

					function e(e, t) {
						var n, r, o, t = t || {};
						if ("function" != typeof e) throw new Error("callback must be a function");
						if (t.root && 1 != t.root.nodeType && 9 != t.root.nodeType) throw new Error("root must be a Document or Element");
						this._checkForIntersections = (n = this._checkForIntersections.bind(this), r = this.THROTTLE_TIMEOUT, o = null, function() {
							o = o || setTimeout(function() {
								n(), o = null
							}, r)
						}), this._callback = e, this._observationTargets = [], this._queuedEntries = [], this._rootMarginValues = this._parseRootMargin(t.rootMargin), this.thresholds = this._initThresholds(t.threshold), this.root = t.root || null, this.rootMargin = this._rootMarginValues.map(function(e) {
							return e.value + e.unit
						}).join(" "), this._monitoringDocuments = [], this._monitoringUnsubscribes = []
					}

					function a(e, t, n, r) {
						"function" == typeof e.addEventListener ? e.addEventListener(t, n, r || !1) : "function" == typeof e.attachEvent && e.attachEvent("on" + t, n)
					}

					function l(e, t, n, r) {
						"function" == typeof e.removeEventListener ? e.removeEventListener(t, n, r || !1) : "function" == typeof e.detachEvent && e.detachEvent("on" + t, n)
					}

					function v(e) {
						var t;
						try {
							t = e.getBoundingClientRect()
						} catch (e) {}
						return t ? (t.width && t.height || (t = {
							top: t.top,
							right: t.right,
							bottom: t.bottom,
							left: t.left,
							width: t.right - t.left,
							height: t.bottom - t.top
						}), t) : s()
					}

					function s() {
						return {
							top: 0,
							bottom: 0,
							left: 0,
							right: 0,
							width: 0,
							height: 0
						}
					}

					function r(e) {
						return !e || "x" in e ? e : {
							top: e.top,
							y: e.top,
							bottom: e.bottom,
							left: e.left,
							x: e.left,
							right: e.right,
							width: e.width,
							height: e.height
						}
					}

					function h(e, t) {
						var n = t.top - e.top,
							e = t.left - e.left;
						return {
							top: n,
							left: e,
							height: t.height,
							width: t.width,
							bottom: n + t.height,
							right: e + t.width
						}
					}

					function o(e, t) {
						for (var n = t; n;) {
							if (n == e) return !0;
							n = g(n)
						}
						return !1
					}

					function g(e) {
						var t = e.parentNode;
						return 9 == e.nodeType && e != f ? i(e) : (t && t.assignedSlot && (t = t.assignedSlot.parentNode), t && 11 == t.nodeType && t.host ? t.host : t)
					}

					function u(e) {
						return e && 9 === e.nodeType
					}
					"object" == typeof window && ("IntersectionObserver" in window && "IntersectionObserverEntry" in window && "intersectionRatio" in window.IntersectionObserverEntry.prototype ? "isIntersecting" in window.IntersectionObserverEntry.prototype || Object.defineProperty(window.IntersectionObserverEntry.prototype, "isIntersecting", {
						get: function() {
							return 0 < this.intersectionRatio
						}
					}) : (f = function() {
						for (var e = window.document, t = i(e); t;) t = i(e = t.ownerDocument);
						return e
					}(), n = [], m = p = null, e.prototype.THROTTLE_TIMEOUT = 100, e.prototype.POLL_INTERVAL = null, e.prototype.USE_MUTATION_OBSERVER = !0, e._setupCrossOriginUpdater = function() {
						return p = p || function(e, t) {
							m = e && t ? h(e, t) : s(), n.forEach(function(e) {
								e._checkForIntersections()
							})
						}
					}, e._resetCrossOriginUpdater = function() {
						m = p = null
					}, e.prototype.observe = function(t) {
						if (!this._observationTargets.some(function(e) {
								return e.element == t
							})) {
							if (!t || 1 != t.nodeType) throw new Error("target must be an Element");
							this._registerInstance(), this._observationTargets.push({
								element: t,
								entry: null
							}), this._monitorIntersections(t.ownerDocument), this._checkForIntersections()
						}
					}, e.prototype.unobserve = function(t) {
						this._observationTargets = this._observationTargets.filter(function(e) {
							return e.element != t
						}), this._unmonitorIntersections(t.ownerDocument), 0 == this._observationTargets.length && this._unregisterInstance()
					}, e.prototype.disconnect = function() {
						this._observationTargets = [], this._unmonitorAllIntersections(), this._unregisterInstance()
					}, e.prototype.takeRecords = function() {
						var e = this._queuedEntries.slice();
						return this._queuedEntries = [], e
					}, e.prototype._initThresholds = function(e) {
						e = e || [0];
						return Array.isArray(e) || (e = [e]), e.sort().filter(function(e, t, n) {
							if ("number" != typeof e || isNaN(e) || e < 0 || 1 < e) throw new Error("threshold must be a number between 0 and 1 inclusively");
							return e !== n[t - 1]
						})
					}, e.prototype._parseRootMargin = function(e) {
						e = (e || "0px").split(/\s+/).map(function(e) {
							e = /^(-?\d*\.?\d+)(px|%)$/.exec(e);
							if (!e) throw new Error("rootMargin must be specified in pixels or percent");
							return {
								value: parseFloat(e[1]),
								unit: e[2]
							}
						});
						return e[1] = e[1] || e[0], e[2] = e[2] || e[0], e[3] = e[3] || e[1], e
					}, e.prototype._monitorIntersections = function(t) {
						var n, r, o, e = t.defaultView;
						e && -1 == this._monitoringDocuments.indexOf(t) && (n = this._checkForIntersections, o = r = null, this.POLL_INTERVAL ? r = e.setInterval(n, this.POLL_INTERVAL) : (a(e, "resize", n, !0), a(t, "scroll", n, !0), this.USE_MUTATION_OBSERVER && "MutationObserver" in e && (o = new e.MutationObserver(n)).observe(t, {
							attributes: !0,
							childList: !0,
							characterData: !0,
							subtree: !0
						})), this._monitoringDocuments.push(t), this._monitoringUnsubscribes.push(function() {
							var e = t.defaultView;
							e && (r && e.clearInterval(r), l(e, "resize", n, !0)), l(t, "scroll", n, !0), o && o.disconnect()
						}), e = this.root && (this.root.ownerDocument || this.root) || f, t == e || (e = i(t)) && this._monitorIntersections(e.ownerDocument))
					}, e.prototype._unmonitorIntersections = function(r) {
						var o, e, t = this._monitoringDocuments.indexOf(r); - 1 != t && (o = this.root && (this.root.ownerDocument || this.root) || f, this._observationTargets.some(function(e) {
							if ((t = e.element.ownerDocument) == r) return !0;
							for (; t && t != o;) {
								var t, n = i(t);
								if ((t = n && n.ownerDocument) == r) return !0
							}
							return !1
						}) || (e = this._monitoringUnsubscribes[t], this._monitoringDocuments.splice(t, 1), this._monitoringUnsubscribes.splice(t, 1), e(), r == o || (e = i(r)) && this._unmonitorIntersections(e.ownerDocument)))
					}, e.prototype._unmonitorAllIntersections = function() {
						var e = this._monitoringUnsubscribes.slice(0);
						this._monitoringDocuments.length = 0;
						for (var t = this._monitoringUnsubscribes.length = 0; t < e.length; t++) e[t]()
					}, e.prototype._checkForIntersections = function() {
						var l, u;
						!this.root && p && !m || (l = this._rootIsInDom(), u = l ? this._getRootRect() : s(), this._observationTargets.forEach(function(e) {
							var t = e.element,
								n = v(t),
								r = this._rootContainsTarget(t),
								o = e.entry,
								i = l && r && this._computeTargetAndRootIntersection(t, n, u),
								a = null;
							this._rootContainsTarget(t) ? p && !this.root || (a = u) : a = s();
							i = e.entry = new c({
								time: window.performance && performance.now && performance.now(),
								target: t,
								boundingClientRect: n,
								rootBounds: a,
								intersectionRect: i
							});
							o ? l && r ? this._hasCrossedThreshold(o, i) && this._queuedEntries.push(i) : o && o.isIntersecting && this._queuedEntries.push(i) : this._queuedEntries.push(i)
						}, this), this._queuedEntries.length && this._callback(this.takeRecords(), this))
					}, e.prototype._computeTargetAndRootIntersection = function(e, t, n) {
						if ("none" != window.getComputedStyle(e).display) {
							for (var r = t, o = g(e), i = !1; !i && o;) {
								var a, l, u, c, s = null,
									d = 1 == o.nodeType ? window.getComputedStyle(o) : {};
								if ("none" == d.display) return null;
								if (o == this.root || 9 == o.nodeType ? (i = !0, o == this.root || o == f ? p && !this.root ? !m || 0 == m.width && 0 == m.height ? r = s = o = null : s = m : s = n : (l = (a = g(o)) && v(a), u = a && this._computeTargetAndRootIntersection(a, l, n), l && u ? (o = a, s = h(l, u)) : r = o = null)) : o != (c = o.ownerDocument).body && o != c.documentElement && "visible" != d.overflow && (s = v(o)), s && (a = s, l = r, s = d = c = u = void 0, u = Math.max(a.top, l.top), c = Math.min(a.bottom, l.bottom), d = Math.max(a.left, l.left), s = Math.min(a.right, l.right), l = c - u, r = 0 <= (a = s - d) && 0 <= l ? {
										top: u,
										bottom: c,
										left: d,
										right: s,
										width: a,
										height: l
									} : null), !r) break;
								o = o && g(o)
							}
							return r
						}
					}, e.prototype._getRootRect = function() {
						var e, t;
						return t = this.root && !u(this.root) ? v(this.root) : (e = (t = u(this.root) ? this.root : f).documentElement, t = t.body, {
							top: 0,
							left: 0,
							right: e.clientWidth || t.clientWidth,
							width: e.clientWidth || t.clientWidth,
							bottom: e.clientHeight || t.clientHeight,
							height: e.clientHeight || t.clientHeight
						}), this._expandRectByRootMargin(t)
					}, e.prototype._expandRectByRootMargin = function(n) {
						var e = this._rootMarginValues.map(function(e, t) {
								return "px" == e.unit ? e.value : e.value * (t % 2 ? n.width : n.height) / 100
							}),
							e = {
								top: n.top - e[0],
								right: n.right + e[1],
								bottom: n.bottom + e[2],
								left: n.left - e[3]
							};
						return e.width = e.right - e.left, e.height = e.bottom - e.top, e
					}, e.prototype._hasCrossedThreshold = function(e, t) {
						var n = e && e.isIntersecting ? e.intersectionRatio || 0 : -1,
							r = t.isIntersecting ? t.intersectionRatio || 0 : -1;
						if (n !== r)
							for (var o = 0; o < this.thresholds.length; o++) {
								var i = this.thresholds[o];
								if (i == n || i == r || i < n != i < r) return !0
							}
					}, e.prototype._rootIsInDom = function() {
						return !this.root || o(f, this.root)
					}, e.prototype._rootContainsTarget = function(e) {
						var t = this.root && (this.root.ownerDocument || this.root) || f;
						return o(t, e) && (!this.root || t == e.ownerDocument)
					}, e.prototype._registerInstance = function() {
						n.indexOf(this) < 0 && n.push(this)
					}, e.prototype._unregisterInstance = function() {
						var e = n.indexOf(this); - 1 != e && n.splice(e, 1)
					}, window.IntersectionObserver = e, window.IntersectionObserverEntry = c))
				}()
			},
			8601: function(e, t, n) {
				function y() {
					return d.Date.now()
				}
				var o = NaN,
					i = "[object Symbol]",
					a = /^\s+|\s+$/g,
					l = /^[-+]0x[0-9a-f]+$/i,
					u = /^0b[01]+$/i,
					c = /^0o[0-7]+$/i,
					s = parseInt,
					r = "object" == typeof n.g && n.g && n.g.Object === Object && n.g,
					n = "object" == typeof self && self && self.Object === Object && self,
					d = r || n || Function("return this")(),
					f = Object.prototype.toString,
					b = Math.max,
					w = Math.min;

				function S(e) {
					var t = typeof e;
					return e && ("object" == t || "function" == t)
				}

				function C(e) {
					if ("number" == typeof e) return e;
					if ("symbol" == typeof(t = e) || !!(n = t) && "object" == typeof n && f.call(t) == i) return o;
					var t, n;
					if (S(e) && (e = S(r = "function" == typeof e.valueOf ? e.valueOf() : e) ? r + "" : r), "string" != typeof e) return 0 === e ? e : +e;
					e = e.replace(a, "");
					var r = u.test(e);
					return r || c.test(e) ? s(e.slice(2), r ? 2 : 8) : l.test(e) ? o : +e
				}
				e.exports = function(r, n, e) {
					var o, i, a, l, u, c, s = 0,
						d = !1,
						f = !1,
						t = !0;
					if ("function" != typeof r) throw new TypeError("Expected a function");

					function p(e) {
						var t = o,
							n = i;
						return o = i = void 0, s = e, l = r.apply(n, t)
					}

					function m(e) {
						var t = e - c;
						return void 0 === c || n <= t || t < 0 || f && a <= e - s
					}

					function v() {
						var e, t = y();
						if (m(t)) return h(t);
						u = setTimeout(v, (t = n - ((e = t) - c), f ? w(t, a - (e - s)) : t))
					}

					function h(e) {
						return u = void 0, t && o ? p(e) : (o = i = void 0, l)
					}

					function g() {
						var e = y(),
							t = m(e);
						if (o = arguments, i = this, c = e, t) {
							if (void 0 === u) return s = t = c, u = setTimeout(v, n), d ? p(t) : l;
							if (f) return u = setTimeout(v, n), p(c)
						}
						return void 0 === u && (u = setTimeout(v, n)), l
					}
					return n = C(n) || 0, S(e) && (d = !!e.leading, f = "maxWait" in e, a = f ? b(C(e.maxWait) || 0, n) : a, t = "trailing" in e ? !!e.trailing : t), g.cancel = function() {
						void 0 !== u && clearTimeout(u), o = c = i = u = void(s = 0)
					}, g.flush = function() {
						return void 0 === u ? l : h(y())
					}, g
				}
			},
			8550: function(e, t, n) {
				var y = "Expected a function",
					o = NaN,
					i = "[object Symbol]",
					a = /^\s+|\s+$/g,
					l = /^[-+]0x[0-9a-f]+$/i,
					u = /^0b[01]+$/i,
					c = /^0o[0-7]+$/i,
					s = parseInt,
					r = "object" == typeof n.g && n.g && n.g.Object === Object && n.g,
					n = "object" == typeof self && self && self.Object === Object && self,
					d = r || n || Function("return this")(),
					f = Object.prototype.toString,
					b = Math.max,
					w = Math.min,
					S = function() {
						return d.Date.now()
					};

				function p(r, n, e) {
					var o, i, a, l, u, c, s = 0,
						d = !1,
						f = !1,
						t = !0;
					if ("function" != typeof r) throw new TypeError(y);

					function p(e) {
						var t = o,
							n = i;
						return o = i = void 0, s = e, l = r.apply(n, t)
					}

					function m(e) {
						var t = e - c;
						return void 0 === c || n <= t || t < 0 || f && a <= e - s
					}

					function v() {
						var e, t = S();
						if (m(t)) return h(t);
						u = setTimeout(v, (t = n - ((e = t) - c), f ? w(t, a - (e - s)) : t))
					}

					function h(e) {
						return u = void 0, t && o ? p(e) : (o = i = void 0, l)
					}

					function g() {
						var e = S(),
							t = m(e);
						if (o = arguments, i = this, c = e, t) {
							if (void 0 === u) return s = t = c, u = setTimeout(v, n), d ? p(t) : l;
							if (f) return u = setTimeout(v, n), p(c)
						}
						return void 0 === u && (u = setTimeout(v, n)), l
					}
					return n = I(n) || 0, C(e) && (d = !!e.leading, f = "maxWait" in e, a = f ? b(I(e.maxWait) || 0, n) : a, t = "trailing" in e ? !!e.trailing : t), g.cancel = function() {
						void 0 !== u && clearTimeout(u), o = c = i = u = void(s = 0)
					}, g.flush = function() {
						return void 0 === u ? l : h(S())
					}, g
				}

				function C(e) {
					var t = typeof e;
					return e && ("object" == t || "function" == t)
				}

				function I(e) {
					if ("number" == typeof e) return e;
					if ("symbol" == typeof(t = e) || !!(n = t) && "object" == typeof n && f.call(t) == i) return o;
					var t, n;
					if (C(e) && (e = C(r = "function" == typeof e.valueOf ? e.valueOf() : e) ? r + "" : r), "string" != typeof e) return 0 === e ? e : +e;
					e = e.replace(a, "");
					var r = u.test(e);
					return r || c.test(e) ? s(e.slice(2), r ? 2 : 8) : l.test(e) ? o : +e
				}
				e.exports = function(e, t, n) {
					var r = !0,
						o = !0;
					if ("function" != typeof e) throw new TypeError(y);
					return C(n) && (r = "leading" in n ? !!n.leading : r, o = "trailing" in n ? !!n.trailing : o), p(e, t, {
						leading: r,
						maxWait: t,
						trailing: o
					})
				}
			},
			2329: function(e, t, n) {
				"use strict";
				/** @license React v17.0.2
				 * react-jsx-runtime.production.min.js
				 *
				 * Copyright (c) Facebook, Inc. and its affiliates.
				 *
				 * This source code is licensed under the MIT license found in the
				 * LICENSE file in the root directory of this source tree.
				 */
				n(1513);
				var r = n(1594),
					l = 60103;
				t.Fragment = 60107, "function" == typeof Symbol && Symbol.for && (l = (n = Symbol.for)("react.element"), t.Fragment = n("react.fragment"));
				var u = r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
					c = Object.prototype.hasOwnProperty,
					s = {
						key: !0,
						ref: !0,
						__self: !0,
						__source: !0
					};

				function o(e, t, n) {
					var r, o = {},
						i = null,
						a = null;
					for (r in void 0 !== n && (i = "" + n), void 0 !== t.key && (i = "" + t.key), void 0 !== t.ref && (a = t.ref), t) c.call(t, r) && !s.hasOwnProperty(r) && (o[r] = t[r]);
					if (e && e.defaultProps)
						for (r in t = e.defaultProps) void 0 === o[r] && (o[r] = t[r]);
					return {
						$$typeof: l,
						type: e,
						key: i,
						ref: a,
						props: o,
						_owner: u.current
					}
				}
				t.jsx = o, t.jsxs = o
			},
			7707: function(e, t, n) {
				"use strict";
				e.exports = n(2329)
			},
			6870: function() {
				! function() {
					"use strict";
					var f, n, p, m;

					function i(e) {
						try {
							return e.defaultView && e.defaultView.frameElement || null
						} catch (e) {
							return null
						}
					}

					function c(e) {
						this.time = e.time, this.target = e.target, this.rootBounds = r(e.rootBounds), this.boundingClientRect = r(e.boundingClientRect), this.intersectionRect = r(e.intersectionRect || s()), this.isIntersecting = !!e.intersectionRect;
						var t = this.boundingClientRect,
							e = t.width * t.height,
							t = this.intersectionRect,
							t = t.width * t.height;
						this.intersectionRatio = e ? Number((t / e).toFixed(4)) : this.isIntersecting ? 1 : 0
					}

					function e(e, t) {
						var n, r, o, t = t || {};
						if ("function" != typeof e) throw new Error("callback must be a function");
						if (t.root && 1 != t.root.nodeType && 9 != t.root.nodeType) throw new Error("root must be a Document or Element");
						this._checkForIntersections = (n = this._checkForIntersections.bind(this), r = this.THROTTLE_TIMEOUT, o = null, function() {
							o = o || setTimeout(function() {
								n(), o = null
							}, r)
						}), this._callback = e, this._observationTargets = [], this._queuedEntries = [], this._rootMarginValues = this._parseRootMargin(t.rootMargin), this.thresholds = this._initThresholds(t.threshold), this.root = t.root || null, this.rootMargin = this._rootMarginValues.map(function(e) {
							return e.value + e.unit
						}).join(" "), this._monitoringDocuments = [], this._monitoringUnsubscribes = []
					}

					function a(e, t, n, r) {
						"function" == typeof e.addEventListener ? e.addEventListener(t, n, r || !1) : "function" == typeof e.attachEvent && e.attachEvent("on" + t, n)
					}

					function l(e, t, n, r) {
						"function" == typeof e.removeEventListener ? e.removeEventListener(t, n, r || !1) : "function" == typeof e.detachEvent && e.detachEvent("on" + t, n)
					}

					function v(e) {
						var t;
						try {
							t = e.getBoundingClientRect()
						} catch (e) {}
						return t ? (t.width && t.height || (t = {
							top: t.top,
							right: t.right,
							bottom: t.bottom,
							left: t.left,
							width: t.right - t.left,
							height: t.bottom - t.top
						}), t) : s()
					}

					function s() {
						return {
							top: 0,
							bottom: 0,
							left: 0,
							right: 0,
							width: 0,
							height: 0
						}
					}

					function r(e) {
						return !e || "x" in e ? e : {
							top: e.top,
							y: e.top,
							bottom: e.bottom,
							left: e.left,
							x: e.left,
							right: e.right,
							width: e.width,
							height: e.height
						}
					}

					function h(e, t) {
						var n = t.top - e.top,
							e = t.left - e.left;
						return {
							top: n,
							left: e,
							height: t.height,
							width: t.width,
							bottom: n + t.height,
							right: e + t.width
						}
					}

					function o(e, t) {
						for (var n = t; n;) {
							if (n == e) return !0;
							n = g(n)
						}
						return !1
					}

					function g(e) {
						var t = e.parentNode;
						return 9 == e.nodeType && e != f ? i(e) : (t && t.assignedSlot && (t = t.assignedSlot.parentNode), t && 11 == t.nodeType && t.host ? t.host : t)
					}

					function u(e) {
						return e && 9 === e.nodeType
					}
					"object" == typeof window && ("IntersectionObserver" in window && "IntersectionObserverEntry" in window && "intersectionRatio" in window.IntersectionObserverEntry.prototype ? "isIntersecting" in window.IntersectionObserverEntry.prototype || Object.defineProperty(window.IntersectionObserverEntry.prototype, "isIntersecting", {
						get: function() {
							return 0 < this.intersectionRatio
						}
					}) : (f = function() {
						for (var e = window.document, t = i(e); t;) t = i(e = t.ownerDocument);
						return e
					}(), n = [], m = p = null, e.prototype.THROTTLE_TIMEOUT = 100, e.prototype.POLL_INTERVAL = null, e.prototype.USE_MUTATION_OBSERVER = !0, e._setupCrossOriginUpdater = function() {
						return p = p || function(e, t) {
							m = e && t ? h(e, t) : s(), n.forEach(function(e) {
								e._checkForIntersections()
							})
						}
					}, e._resetCrossOriginUpdater = function() {
						m = p = null
					}, e.prototype.observe = function(t) {
						if (!this._observationTargets.some(function(e) {
								return e.element == t
							})) {
							if (!t || 1 != t.nodeType) throw new Error("target must be an Element");
							this._registerInstance(), this._observationTargets.push({
								element: t,
								entry: null
							}), this._monitorIntersections(t.ownerDocument), this._checkForIntersections()
						}
					}, e.prototype.unobserve = function(t) {
						this._observationTargets = this._observationTargets.filter(function(e) {
							return e.element != t
						}), this._unmonitorIntersections(t.ownerDocument), 0 == this._observationTargets.length && this._unregisterInstance()
					}, e.prototype.disconnect = function() {
						this._observationTargets = [], this._unmonitorAllIntersections(), this._unregisterInstance()
					}, e.prototype.takeRecords = function() {
						var e = this._queuedEntries.slice();
						return this._queuedEntries = [], e
					}, e.prototype._initThresholds = function(e) {
						e = e || [0];
						return Array.isArray(e) || (e = [e]), e.sort().filter(function(e, t, n) {
							if ("number" != typeof e || isNaN(e) || e < 0 || 1 < e) throw new Error("threshold must be a number between 0 and 1 inclusively");
							return e !== n[t - 1]
						})
					}, e.prototype._parseRootMargin = function(e) {
						e = (e || "0px").split(/\s+/).map(function(e) {
							e = /^(-?\d*\.?\d+)(px|%)$/.exec(e);
							if (!e) throw new Error("rootMargin must be specified in pixels or percent");
							return {
								value: parseFloat(e[1]),
								unit: e[2]
							}
						});
						return e[1] = e[1] || e[0], e[2] = e[2] || e[0], e[3] = e[3] || e[1], e
					}, e.prototype._monitorIntersections = function(t) {
						var n, r, o, e = t.defaultView;
						e && -1 == this._monitoringDocuments.indexOf(t) && (n = this._checkForIntersections, o = r = null, this.POLL_INTERVAL ? r = e.setInterval(n, this.POLL_INTERVAL) : (a(e, "resize", n, !0), a(t, "scroll", n, !0), this.USE_MUTATION_OBSERVER && "MutationObserver" in e && (o = new e.MutationObserver(n)).observe(t, {
							attributes: !0,
							childList: !0,
							characterData: !0,
							subtree: !0
						})), this._monitoringDocuments.push(t), this._monitoringUnsubscribes.push(function() {
							var e = t.defaultView;
							e && (r && e.clearInterval(r), l(e, "resize", n, !0)), l(t, "scroll", n, !0), o && o.disconnect()
						}), e = this.root && (this.root.ownerDocument || this.root) || f, t == e || (e = i(t)) && this._monitorIntersections(e.ownerDocument))
					}, e.prototype._unmonitorIntersections = function(r) {
						var o, e, t = this._monitoringDocuments.indexOf(r); - 1 != t && (o = this.root && (this.root.ownerDocument || this.root) || f, this._observationTargets.some(function(e) {
							if ((t = e.element.ownerDocument) == r) return !0;
							for (; t && t != o;) {
								var t, n = i(t);
								if ((t = n && n.ownerDocument) == r) return !0
							}
							return !1
						}) || (e = this._monitoringUnsubscribes[t], this._monitoringDocuments.splice(t, 1), this._monitoringUnsubscribes.splice(t, 1), e(), r == o || (e = i(r)) && this._unmonitorIntersections(e.ownerDocument)))
					}, e.prototype._unmonitorAllIntersections = function() {
						var e = this._monitoringUnsubscribes.slice(0);
						this._monitoringDocuments.length = 0;
						for (var t = this._monitoringUnsubscribes.length = 0; t < e.length; t++) e[t]()
					}, e.prototype._checkForIntersections = function() {
						var l, u;
						!this.root && p && !m || (l = this._rootIsInDom(), u = l ? this._getRootRect() : s(), this._observationTargets.forEach(function(e) {
							var t = e.element,
								n = v(t),
								r = this._rootContainsTarget(t),
								o = e.entry,
								i = l && r && this._computeTargetAndRootIntersection(t, n, u),
								a = null;
							this._rootContainsTarget(t) ? p && !this.root || (a = u) : a = s();
							i = e.entry = new c({
								time: window.performance && performance.now && performance.now(),
								target: t,
								boundingClientRect: n,
								rootBounds: a,
								intersectionRect: i
							});
							o ? l && r ? this._hasCrossedThreshold(o, i) && this._queuedEntries.push(i) : o && o.isIntersecting && this._queuedEntries.push(i) : this._queuedEntries.push(i)
						}, this), this._queuedEntries.length && this._callback(this.takeRecords(), this))
					}, e.prototype._computeTargetAndRootIntersection = function(e, t, n) {
						if ("none" != window.getComputedStyle(e).display) {
							for (var r = t, o = g(e), i = !1; !i && o;) {
								var a, l, u, c, s = null,
									d = 1 == o.nodeType ? window.getComputedStyle(o) : {};
								if ("none" == d.display) return null;
								if (o == this.root || 9 == o.nodeType ? (i = !0, o == this.root || o == f ? p && !this.root ? !m || 0 == m.width && 0 == m.height ? r = s = o = null : s = m : s = n : (l = (a = g(o)) && v(a), u = a && this._computeTargetAndRootIntersection(a, l, n), l && u ? (o = a, s = h(l, u)) : r = o = null)) : o != (c = o.ownerDocument).body && o != c.documentElement && "visible" != d.overflow && (s = v(o)), s && (a = s, l = r, s = d = c = u = void 0, u = Math.max(a.top, l.top), c = Math.min(a.bottom, l.bottom), d = Math.max(a.left, l.left), s = Math.min(a.right, l.right), l = c - u, r = 0 <= (a = s - d) && 0 <= l ? {
										top: u,
										bottom: c,
										left: d,
										right: s,
										width: a,
										height: l
									} : null), !r) break;
								o = o && g(o)
							}
							return r
						}
					}, e.prototype._getRootRect = function() {
						var e, t;
						return t = this.root && !u(this.root) ? v(this.root) : (e = (t = u(this.root) ? this.root : f).documentElement, t = t.body, {
							top: 0,
							left: 0,
							right: e.clientWidth || t.clientWidth,
							width: e.clientWidth || t.clientWidth,
							bottom: e.clientHeight || t.clientHeight,
							height: e.clientHeight || t.clientHeight
						}), this._expandRectByRootMargin(t)
					}, e.prototype._expandRectByRootMargin = function(n) {
						var e = this._rootMarginValues.map(function(e, t) {
								return "px" == e.unit ? e.value : e.value * (t % 2 ? n.width : n.height) / 100
							}),
							e = {
								top: n.top - e[0],
								right: n.right + e[1],
								bottom: n.bottom + e[2],
								left: n.left - e[3]
							};
						return e.width = e.right - e.left, e.height = e.bottom - e.top, e
					}, e.prototype._hasCrossedThreshold = function(e, t) {
						var n = e && e.isIntersecting ? e.intersectionRatio || 0 : -1,
							r = t.isIntersecting ? t.intersectionRatio || 0 : -1;
						if (n !== r)
							for (var o = 0; o < this.thresholds.length; o++) {
								var i = this.thresholds[o];
								if (i == n || i == r || i < n != i < r) return !0
							}
					}, e.prototype._rootIsInDom = function() {
						return !this.root || o(f, this.root)
					}, e.prototype._rootContainsTarget = function(e) {
						var t = this.root && (this.root.ownerDocument || this.root) || f;
						return o(t, e) && (!this.root || t == e.ownerDocument)
					}, e.prototype._registerInstance = function() {
						n.indexOf(this) < 0 && n.push(this)
					}, e.prototype._unregisterInstance = function() {
						var e = n.indexOf(this); - 1 != e && n.splice(e, 1)
					}, window.IntersectionObserver = e, window.IntersectionObserverEntry = c))
				}()
			},
			5250: function(A, N, _) {
				var R;
				/**
				 * @license
				 * Lodash <https://lodash.com/>
				 * Copyright OpenJS Foundation and other contributors <https://openjsf.org/>
				 * Released under MIT license <https://lodash.com/license>
				 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
				 * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
				 */
				A = _.nmd(A),
					function() {
						var Hi, Wi = "Expected a function",
							zi = "__lodash_hash_undefined__",
							Vi = "__lodash_placeholder__",
							qi = 128,
							Ji = 9007199254740991,
							Ki = NaN,
							Xi = 4294967295,
							$i = [
								["ary", qi],
								["bind", 1],
								["bindKey", 2],
								["curry", 8],
								["curryRight", 16],
								["flip", 512],
								["partial", 32],
								["partialRight", 64],
								["rearg", 256]
							],
							Yi = "[object Arguments]",
							Zi = "[object Array]",
							Qi = "[object Boolean]",
							ea = "[object Date]",
							ta = "[object Error]",
							na = "[object Function]",
							ra = "[object GeneratorFunction]",
							oa = "[object Map]",
							ia = "[object Number]",
							aa = "[object Object]",
							la = "[object Promise]",
							ua = "[object RegExp]",
							ca = "[object Set]",
							sa = "[object String]",
							da = "[object Symbol]",
							fa = "[object WeakMap]",
							pa = "[object ArrayBuffer]",
							ma = "[object DataView]",
							va = "[object Float32Array]",
							ha = "[object Float64Array]",
							ga = "[object Int8Array]",
							ya = "[object Int16Array]",
							ba = "[object Int32Array]",
							wa = "[object Uint8Array]",
							Sa = "[object Uint8ClampedArray]",
							Ca = "[object Uint16Array]",
							Ia = "[object Uint32Array]",
							xa = /\b__p \+= '';/g,
							Ea = /\b(__p \+=) '' \+/g,
							Pa = /(__e\(.*?\)|\b__t\)) \+\n'';/g,
							Ta = /&(?:amp|lt|gt|quot|#39);/g,
							Oa = /[&<>"']/g,
							ka = RegExp(Ta.source),
							Aa = RegExp(Oa.source),
							Na = /<%-([\s\S]+?)%>/g,
							_a = /<%([\s\S]+?)%>/g,
							Ra = /<%=([\s\S]+?)%>/g,
							La = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
							Da = /^\w*$/,
							Ma = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,
							Fa = /[\\^$.*+?()[\]{}|]/g,
							ja = RegExp(Fa.source),
							Ua = /^\s+/,
							n = /\s/,
							Ba = /\{(?:\n\/\* \[wrapped with .+\] \*\/)?\n?/,
							Ga = /\{\n\/\* \[wrapped with (.+)\] \*/,
							Ha = /,? & /,
							Wa = /[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g,
							za = /[()=,{}\[\]\/\s]/,
							Va = /\\(\\)?/g,
							qa = /\$\{([^\\}]*(?:\\.[^\\}]*)*)\}/g,
							Ja = /\w*$/,
							Ka = /^[-+]0x[0-9a-f]+$/i,
							Xa = /^0b[01]+$/i,
							$a = /^\[object .+?Constructor\]$/,
							Ya = /^0o[0-7]+$/i,
							Za = /^(?:0|[1-9]\d*)$/,
							Qa = /[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g,
							el = /($^)/,
							tl = /['\n\r\u2028\u2029\\]/g,
							e = "\\ud800-\\udfff",
							t = "\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff",
							r = "\\u2700-\\u27bf",
							o = "a-z\\xdf-\\xf6\\xf8-\\xff",
							i = "A-Z\\xc0-\\xd6\\xd8-\\xde",
							a = "\\ufe0e\\ufe0f",
							l = "\\xac\\xb1\\xd7\\xf7\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf\\u2000-\\u206f \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000",
							u = "['’]",
							c = "[" + e + "]",
							s = "[" + l + "]",
							d = "[" + t + "]",
							f = "\\d+",
							p = "[" + r + "]",
							m = "[" + o + "]",
							v = "[^" + e + l + f + r + o + i + "]",
							h = "\\ud83c[\\udffb-\\udfff]",
							g = "[^" + e + "]",
							y = "(?:\\ud83c[\\udde6-\\uddff]){2}",
							b = "[\\ud800-\\udbff][\\udc00-\\udfff]",
							w = "[" + i + "]",
							S = "\\u200d",
							C = "(?:" + m + "|" + v + ")",
							l = "(?:" + w + "|" + v + ")",
							r = "(?:['’](?:d|ll|m|re|s|t|ve))?",
							o = "(?:['’](?:D|LL|M|RE|S|T|VE))?",
							i = "(?:" + d + "|" + h + ")" + "?",
							v = "[" + a + "]?",
							i = v + i + ("(?:" + S + "(?:" + [g, y, b].join("|") + ")" + v + i + ")*"),
							p = "(?:" + [p, y, b].join("|") + ")" + i,
							c = "(?:" + [g + d + "?", d, y, b, c].join("|") + ")",
							nl = RegExp(u, "g"),
							rl = RegExp(d, "g"),
							I = RegExp(h + "(?=" + h + ")|" + c + i, "g"),
							ol = RegExp([w + "?" + m + "+" + r + "(?=" + [s, w, "$"].join("|") + ")", l + "+" + o + "(?=" + [s, w + C, "$"].join("|") + ")", w + "?" + C + "+" + r, w + "+" + o, "\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])", "\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])", f, p].join("|"), "g"),
							x = RegExp("[" + S + e + t + a + "]"),
							il = /[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/,
							al = ["Array", "Buffer", "DataView", "Date", "Error", "Float32Array", "Float64Array", "Function", "Int8Array", "Int16Array", "Int32Array", "Map", "Math", "Object", "Promise", "RegExp", "Set", "String", "Symbol", "TypeError", "Uint8Array", "Uint8ClampedArray", "Uint16Array", "Uint32Array", "WeakMap", "_", "clearTimeout", "isFinite", "parseInt", "setTimeout"],
							ll = -1,
							ul = {};
						ul[va] = ul[ha] = ul[ga] = ul[ya] = ul[ba] = ul[wa] = ul[Sa] = ul[Ca] = ul[Ia] = !0, ul[Yi] = ul[Zi] = ul[pa] = ul[Qi] = ul[ma] = ul[ea] = ul[ta] = ul[na] = ul[oa] = ul[ia] = ul[aa] = ul[ua] = ul[ca] = ul[sa] = ul[fa] = !1;
						var cl = {};
						cl[Yi] = cl[Zi] = cl[pa] = cl[ma] = cl[Qi] = cl[ea] = cl[va] = cl[ha] = cl[ga] = cl[ya] = cl[ba] = cl[oa] = cl[ia] = cl[aa] = cl[ua] = cl[ca] = cl[sa] = cl[da] = cl[wa] = cl[Sa] = cl[Ca] = cl[Ia] = !0, cl[ta] = cl[na] = cl[fa] = !1;
						var E = {
								"\\": "\\",
								"'": "'",
								"\n": "n",
								"\r": "r",
								"\u2028": "u2028",
								"\u2029": "u2029"
							},
							sl = parseFloat,
							dl = parseInt,
							t = "object" == typeof _.g && _.g && _.g.Object === Object && _.g,
							a = "object" == typeof self && self && self.Object === Object && self,
							fl = t || a || Function("return this")(),
							a = N && !N.nodeType && N,
							P = a && A && !A.nodeType && A,
							pl = P && P.exports === a,
							T = pl && t.process,
							t = function() {
								try {
									var e = P && P.require && P.require("util").types;
									return e ? e : T && T.binding && T.binding("util")
								} catch (e) {}
							}(),
							ml = t && t.isArrayBuffer,
							vl = t && t.isDate,
							hl = t && t.isMap,
							gl = t && t.isRegExp,
							yl = t && t.isSet,
							bl = t && t.isTypedArray;

						function wl(e, t, n) {
							switch (n.length) {
								case 0:
									return e.call(t);
								case 1:
									return e.call(t, n[0]);
								case 2:
									return e.call(t, n[0], n[1]);
								case 3:
									return e.call(t, n[0], n[1], n[2])
							}
							return e.apply(t, n)
						}

						function Sl(e, t, n, r) {
							for (var o = -1, i = null == e ? 0 : e.length; ++o < i;) {
								var a = e[o];
								t(r, a, n(a), e)
							}
							return r
						}

						function Cl(e, t) {
							for (var n = -1, r = null == e ? 0 : e.length; ++n < r && !1 !== t(e[n], n, e););
							return e
						}

						function Il(e, t) {
							for (var n = null == e ? 0 : e.length; n-- && !1 !== t(e[n], n, e););
							return e
						}

						function xl(e, t) {
							for (var n = -1, r = null == e ? 0 : e.length; ++n < r;)
								if (!t(e[n], n, e)) return !1;
							return !0
						}

						function El(e, t) {
							for (var n = -1, r = null == e ? 0 : e.length, o = 0, i = []; ++n < r;) {
								var a = e[n];
								t(a, n, e) && (i[o++] = a)
							}
							return i
						}

						function Pl(e, t) {
							return !!(null == e ? 0 : e.length) && -1 < Dl(e, t, 0)
						}

						function Tl(e, t, n) {
							for (var r = -1, o = null == e ? 0 : e.length; ++r < o;)
								if (n(t, e[r])) return !0;
							return !1
						}

						function Ol(e, t) {
							for (var n = -1, r = null == e ? 0 : e.length, o = Array(r); ++n < r;) o[n] = t(e[n], n, e);
							return o
						}

						function kl(e, t) {
							for (var n = -1, r = t.length, o = e.length; ++n < r;) e[o + n] = t[n];
							return e
						}

						function Al(e, t, n, r) {
							var o = -1,
								i = null == e ? 0 : e.length;
							for (r && i && (n = e[++o]); ++o < i;) n = t(n, e[o], o, e);
							return n
						}

						function Nl(e, t, n, r) {
							var o = null == e ? 0 : e.length;
							for (r && o && (n = e[--o]); o--;) n = t(n, e[o], o, e);
							return n
						}

						function _l(e, t) {
							for (var n = -1, r = null == e ? 0 : e.length; ++n < r;)
								if (t(e[n], n, e)) return !0;
							return !1
						}
						var O = Ul("length");

						function Rl(e, r, t) {
							var o;
							return t(e, function(e, t, n) {
								if (r(e, t, n)) return o = t, !1
							}), o
						}

						function Ll(e, t, n, r) {
							for (var o = e.length, i = n + (r ? 1 : -1); r ? i-- : ++i < o;)
								if (t(e[i], i, e)) return i;
							return -1
						}

						function Dl(e, t, n) {
							return t == t ? function(e, t, n) {
								var r = n - 1,
									o = e.length;
								for (; ++r < o;)
									if (e[r] === t) return r;
								return -1
							}(e, t, n) : Ll(e, Fl, n)
						}

						function Ml(e, t, n, r) {
							for (var o = n - 1, i = e.length; ++o < i;)
								if (r(e[o], t)) return o;
							return -1
						}

						function Fl(e) {
							return e != e
						}

						function jl(e, t) {
							var n = null == e ? 0 : e.length;
							return n ? Gl(e, t) / n : Ki
						}

						function Ul(t) {
							return function(e) {
								return null == e ? Hi : e[t]
							}
						}

						function k(t) {
							return function(e) {
								return null == t ? Hi : t[e]
							}
						}

						function Bl(e, r, o, i, t) {
							return t(e, function(e, t, n) {
								o = i ? (i = !1, e) : r(o, e, t, n)
							}), o
						}

						function Gl(e, t) {
							for (var n, r = -1, o = e.length; ++r < o;) {
								var i = t(e[r]);
								i !== Hi && (n = n === Hi ? i : n + i)
							}
							return n
						}

						function Hl(e, t) {
							for (var n = -1, r = Array(e); ++n < e;) r[n] = t(n);
							return r
						}

						function Wl(e) {
							return e && e.slice(0, iu(e) + 1).replace(Ua, "")
						}

						function zl(t) {
							return function(e) {
								return t(e)
							}
						}

						function Vl(t, e) {
							return Ol(e, function(e) {
								return t[e]
							})
						}

						function ql(e, t) {
							return e.has(t)
						}

						function Jl(e, t) {
							for (var n = -1, r = e.length; ++n < r && -1 < Dl(t, e[n], 0););
							return n
						}

						function Kl(e, t) {
							for (var n = e.length; n-- && -1 < Dl(t, e[n], 0););
							return n
						}
						var Xl = k({
								"À": "A",
								"Á": "A",
								"Â": "A",
								"Ã": "A",
								"Ä": "A",
								"Å": "A",
								"à": "a",
								"á": "a",
								"â": "a",
								"ã": "a",
								"ä": "a",
								"å": "a",
								"Ç": "C",
								"ç": "c",
								"Ð": "D",
								"ð": "d",
								"È": "E",
								"É": "E",
								"Ê": "E",
								"Ë": "E",
								"è": "e",
								"é": "e",
								"ê": "e",
								"ë": "e",
								"Ì": "I",
								"Í": "I",
								"Î": "I",
								"Ï": "I",
								"ì": "i",
								"í": "i",
								"î": "i",
								"ï": "i",
								"Ñ": "N",
								"ñ": "n",
								"Ò": "O",
								"Ó": "O",
								"Ô": "O",
								"Õ": "O",
								"Ö": "O",
								"Ø": "O",
								"ò": "o",
								"ó": "o",
								"ô": "o",
								"õ": "o",
								"ö": "o",
								"ø": "o",
								"Ù": "U",
								"Ú": "U",
								"Û": "U",
								"Ü": "U",
								"ù": "u",
								"ú": "u",
								"û": "u",
								"ü": "u",
								"Ý": "Y",
								"ý": "y",
								"ÿ": "y",
								"Æ": "Ae",
								"æ": "ae",
								"Þ": "Th",
								"þ": "th",
								"ß": "ss",
								"Ā": "A",
								"Ă": "A",
								"Ą": "A",
								"ā": "a",
								"ă": "a",
								"ą": "a",
								"Ć": "C",
								"Ĉ": "C",
								"Ċ": "C",
								"Č": "C",
								"ć": "c",
								"ĉ": "c",
								"ċ": "c",
								"č": "c",
								"Ď": "D",
								"Đ": "D",
								"ď": "d",
								"đ": "d",
								"Ē": "E",
								"Ĕ": "E",
								"Ė": "E",
								"Ę": "E",
								"Ě": "E",
								"ē": "e",
								"ĕ": "e",
								"ė": "e",
								"ę": "e",
								"ě": "e",
								"Ĝ": "G",
								"Ğ": "G",
								"Ġ": "G",
								"Ģ": "G",
								"ĝ": "g",
								"ğ": "g",
								"ġ": "g",
								"ģ": "g",
								"Ĥ": "H",
								"Ħ": "H",
								"ĥ": "h",
								"ħ": "h",
								"Ĩ": "I",
								"Ī": "I",
								"Ĭ": "I",
								"Į": "I",
								"İ": "I",
								"ĩ": "i",
								"ī": "i",
								"ĭ": "i",
								"į": "i",
								"ı": "i",
								"Ĵ": "J",
								"ĵ": "j",
								"Ķ": "K",
								"ķ": "k",
								"ĸ": "k",
								"Ĺ": "L",
								"Ļ": "L",
								"Ľ": "L",
								"Ŀ": "L",
								"Ł": "L",
								"ĺ": "l",
								"ļ": "l",
								"ľ": "l",
								"ŀ": "l",
								"ł": "l",
								"Ń": "N",
								"Ņ": "N",
								"Ň": "N",
								"Ŋ": "N",
								"ń": "n",
								"ņ": "n",
								"ň": "n",
								"ŋ": "n",
								"Ō": "O",
								"Ŏ": "O",
								"Ő": "O",
								"ō": "o",
								"ŏ": "o",
								"ő": "o",
								"Ŕ": "R",
								"Ŗ": "R",
								"Ř": "R",
								"ŕ": "r",
								"ŗ": "r",
								"ř": "r",
								"Ś": "S",
								"Ŝ": "S",
								"Ş": "S",
								"Š": "S",
								"ś": "s",
								"ŝ": "s",
								"ş": "s",
								"š": "s",
								"Ţ": "T",
								"Ť": "T",
								"Ŧ": "T",
								"ţ": "t",
								"ť": "t",
								"ŧ": "t",
								"Ũ": "U",
								"Ū": "U",
								"Ŭ": "U",
								"Ů": "U",
								"Ű": "U",
								"Ų": "U",
								"ũ": "u",
								"ū": "u",
								"ŭ": "u",
								"ů": "u",
								"ű": "u",
								"ų": "u",
								"Ŵ": "W",
								"ŵ": "w",
								"Ŷ": "Y",
								"ŷ": "y",
								"Ÿ": "Y",
								"Ź": "Z",
								"Ż": "Z",
								"Ž": "Z",
								"ź": "z",
								"ż": "z",
								"ž": "z",
								"Ĳ": "IJ",
								"ĳ": "ij",
								"Œ": "Oe",
								"œ": "oe",
								"ŉ": "'n",
								"ſ": "s"
							}),
							$l = k({
								"&": "&amp;",
								"<": "&lt;",
								">": "&gt;",
								'"': "&quot;",
								"'": "&#39;"
							});

						function Yl(e) {
							return "\\" + E[e]
						}

						function Zl(e) {
							return x.test(e)
						}

						function Ql(e) {
							var n = -1,
								r = Array(e.size);
							return e.forEach(function(e, t) {
								r[++n] = [t, e]
							}), r
						}

						function eu(t, n) {
							return function(e) {
								return t(n(e))
							}
						}

						function tu(e, t) {
							for (var n = -1, r = e.length, o = 0, i = []; ++n < r;) {
								var a = e[n];
								a !== t && a !== Vi || (e[n] = Vi, i[o++] = n)
							}
							return i
						}

						function nu(e) {
							var t = -1,
								n = Array(e.size);
							return e.forEach(function(e) {
								n[++t] = e
							}), n
						}

						function ru(e) {
							return (Zl(e) ? function(e) {
								var t = I.lastIndex = 0;
								for (; I.test(e);) ++t;
								return t
							} : O)(e)
						}

						function ou(e) {
							return Zl(e) ? e.match(I) || [] : e.split("")
						}

						function iu(e) {
							for (var t = e.length; t-- && n.test(e.charAt(t)););
							return t
						}
						var au = k({
							"&amp;": "&",
							"&lt;": "<",
							"&gt;": ">",
							"&quot;": '"',
							"&#39;": "'"
						});
						var lu = function e(t) {
							var I = (t = null == t ? fl : lu.defaults(fl.Object(), t, lu.pick(fl, al))).Array,
								n = t.Date,
								d = t.Error,
								f = t.Function,
								o = t.Math,
								v = t.Object,
								p = t.RegExp,
								s = t.String,
								C = t.TypeError,
								i = I.prototype,
								r = f.prototype,
								m = v.prototype,
								a = t["__core-js_shared__"],
								l = r.toString,
								y = m.hasOwnProperty,
								u = 0,
								c = (Ri = /[^.]+$/.exec(a && a.keys && a.keys.IE_PROTO || "")) ? "Symbol(src)_1." + Ri : "",
								h = m.toString,
								g = l.call(v),
								b = fl._,
								w = p("^" + l.call(y).replace(Fa, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"),
								S = pl ? t.Buffer : Hi,
								x = t.Symbol,
								E = t.Uint8Array,
								P = S ? S.allocUnsafe : Hi,
								T = eu(v.getPrototypeOf, v),
								O = v.create,
								k = m.propertyIsEnumerable,
								A = i.splice,
								N = x ? x.isConcatSpreadable : Hi,
								_ = x ? x.iterator : Hi,
								R = x ? x.toStringTag : Hi,
								L = function() {
									try {
										var e = Hn(v, "defineProperty");
										return e({}, "", {}), e
									} catch (e) {}
								}(),
								D = t.clearTimeout !== fl.clearTimeout && t.clearTimeout,
								M = n && n.now !== fl.Date.now && n.now,
								F = t.setTimeout !== fl.setTimeout && t.setTimeout,
								j = o.ceil,
								U = o.floor,
								B = v.getOwnPropertySymbols,
								G = S ? S.isBuffer : Hi,
								H = t.isFinite,
								W = i.join,
								z = eu(v.keys, v),
								V = o.max,
								q = o.min,
								J = n.now,
								K = t.parseInt,
								X = o.random,
								$ = i.reverse,
								Y = Hn(t, "DataView"),
								Z = Hn(t, "Map"),
								Q = Hn(t, "Promise"),
								ee = Hn(t, "Set"),
								te = Hn(t, "WeakMap"),
								ne = Hn(v, "create"),
								re = te && new te,
								oe = {},
								ie = hr(Y),
								ae = hr(Z),
								le = hr(Q),
								ue = hr(ee),
								ce = hr(te),
								se = x ? x.prototype : Hi,
								de = se ? se.valueOf : Hi,
								fe = se ? se.toString : Hi;

							function pe(e) {
								if (Lo(e) && !Io(e) && !(e instanceof ye)) {
									if (e instanceof ge) return e;
									if (y.call(e, "__wrapped__")) return gr(e)
								}
								return new ge(e)
							}
							var me = function(e) {
								if (!Ro(e)) return {};
								if (O) return O(e);
								ve.prototype = e;
								e = new ve;
								return ve.prototype = Hi, e
							};

							function ve() {}

							function he() {}

							function ge(e, t) {
								this.__wrapped__ = e, this.__actions__ = [], this.__chain__ = !!t, this.__index__ = 0, this.__values__ = Hi
							}

							function ye(e) {
								this.__wrapped__ = e, this.__actions__ = [], this.__dir__ = 1, this.__filtered__ = !1, this.__iteratees__ = [], this.__takeCount__ = Xi, this.__views__ = []
							}

							function be(e) {
								var t = -1,
									n = null == e ? 0 : e.length;
								for (this.clear(); ++t < n;) {
									var r = e[t];
									this.set(r[0], r[1])
								}
							}

							function we(e) {
								var t = -1,
									n = null == e ? 0 : e.length;
								for (this.clear(); ++t < n;) {
									var r = e[t];
									this.set(r[0], r[1])
								}
							}

							function Se(e) {
								var t = -1,
									n = null == e ? 0 : e.length;
								for (this.clear(); ++t < n;) {
									var r = e[t];
									this.set(r[0], r[1])
								}
							}

							function Ce(e) {
								var t = -1,
									n = null == e ? 0 : e.length;
								for (this.__data__ = new Se; ++t < n;) this.add(e[t])
							}

							function Ie(e) {
								e = this.__data__ = new we(e);
								this.size = e.size
							}

							function xe(e, t) {
								var n, r = Io(e),
									o = !r && Co(e),
									i = !r && !o && To(e),
									a = !r && !o && !i && Ho(e),
									l = r || o || i || a,
									u = l ? Hl(e.length, s) : [],
									c = u.length;
								for (n in e) !t && !y.call(e, n) || l && ("length" == n || i && ("offset" == n || "parent" == n) || a && ("buffer" == n || "byteLength" == n || "byteOffset" == n) || Xn(n, c)) || u.push(n);
								return u
							}

							function Ee(e) {
								var t = e.length;
								return t ? e[Ct(0, t - 1)] : Hi
							}

							function Pe(e, t) {
								return dr(rn(e), De(t, 0, e.length))
							}

							function Te(e) {
								return dr(rn(e))
							}

							function Oe(e, t, n) {
								(n === Hi || bo(e[t], n)) && (n !== Hi || t in e) || Re(e, t, n)
							}

							function ke(e, t, n) {
								var r = e[t];
								y.call(e, t) && bo(r, n) && (n !== Hi || t in e) || Re(e, t, n)
							}

							function Ae(e, t) {
								for (var n = e.length; n--;)
									if (bo(e[n][0], t)) return n;
								return -1
							}

							function Ne(e, r, o, i) {
								return Be(e, function(e, t, n) {
									r(i, e, o(e), n)
								}), i
							}

							function _e(e, t) {
								return e && on(t, si(t), e)
							}

							function Re(e, t, n) {
								"__proto__" == t && L ? L(e, t, {
									configurable: !0,
									enumerable: !0,
									value: n,
									writable: !0
								}) : e[t] = n
							}

							function Le(e, t) {
								for (var n = -1, r = t.length, o = I(r), i = null == e; ++n < r;) o[n] = i ? Hi : ii(e, t[n]);
								return o
							}

							function De(e, t, n) {
								return e == e && (n !== Hi && (e = e <= n ? e : n), t !== Hi && (e = t <= e ? e : t)), e
							}

							function Me(n, r, o, e, t, i) {
								var a, l = 1 & r,
									u = 2 & r,
									c = 4 & r;
								if (o && (a = t ? o(n, e, t, i) : o(n)), a !== Hi) return a;
								if (!Ro(n)) return n;
								var s, d, f = Io(n);
								if (f) {
									if (a = function(e) {
											var t = e.length,
												n = new e.constructor(t);
											t && "string" == typeof e[0] && y.call(e, "index") && (n.index = e.index, n.input = e.input);
											return n
										}(n), !l) return rn(n, a)
								} else {
									var p = Vn(n),
										e = p == na || p == ra;
									if (To(n)) return Yt(n, l);
									if (p == aa || p == Yi || e && !t) {
										if (a = u || e ? {} : Jn(n), !l) return u ? (e = s = n, d = (d = a) && on(e, di(e), d), on(s, zn(s), d)) : (d = _e(a, s = n), on(s, Wn(s), d))
									} else {
										if (!cl[p]) return t ? n : {};
										a = function(e, t, n) {
											var r = e.constructor;
											switch (t) {
												case pa:
													return Zt(e);
												case Qi:
												case ea:
													return new r(+e);
												case ma:
													return function(e, t) {
														t = t ? Zt(e.buffer) : e.buffer;
														return new e.constructor(t, e.byteOffset, e.byteLength)
													}(e, n);
												case va:
												case ha:
												case ga:
												case ya:
												case ba:
												case wa:
												case Sa:
												case Ca:
												case Ia:
													return Qt(e, n);
												case oa:
													return new r;
												case ia:
												case sa:
													return new r(e);
												case ua:
													return function(e) {
														var t = new e.constructor(e.source, Ja.exec(e));
														return t.lastIndex = e.lastIndex, t
													}(e);
												case ca:
													return new r;
												case da:
													return function(e) {
														return de ? v(de.call(e)) : {}
													}(e)
											}
										}(n, p, l)
									}
								}
								l = (i = i || new Ie).get(n);
								if (l) return l;
								i.set(n, a), Uo(n) ? n.forEach(function(e) {
									a.add(Me(e, r, o, e, n, i))
								}) : Do(n) && n.forEach(function(e, t) {
									a.set(t, Me(e, r, o, t, n, i))
								});
								var m = f ? Hi : (c ? u ? Dn : Ln : u ? di : si)(n);
								return Cl(m || n, function(e, t) {
									m && (e = n[t = e]), ke(a, t, Me(e, r, o, t, n, i))
								}), a
							}

							function Fe(e, t, n) {
								var r = n.length;
								if (null == e) return !r;
								for (e = v(e); r--;) {
									var o = n[r],
										i = t[o],
										a = e[o];
									if (a === Hi && !(o in e) || !i(a)) return !1
								}
								return !0
							}

							function je(e, t, n) {
								if ("function" != typeof e) throw new C(Wi);
								return lr(function() {
									e.apply(Hi, n)
								}, t)
							}

							function Ue(e, t, n, r) {
								var o = -1,
									i = Pl,
									a = !0,
									l = e.length,
									u = [],
									c = t.length;
								if (!l) return u;
								n && (t = Ol(t, zl(n))), r ? (i = Tl, a = !1) : 200 <= t.length && (i = ql, a = !1, t = new Ce(t));
								e: for (; ++o < l;) {
									var s = e[o],
										d = null == n ? s : n(s),
										s = r || 0 !== s ? s : 0;
									if (a && d == d) {
										for (var f = c; f--;)
											if (t[f] === d) continue e;
										u.push(s)
									} else i(t, d, r) || u.push(s)
								}
								return u
							}
							pe.templateSettings = {
								escape: Na,
								evaluate: _a,
								interpolate: Ra,
								variable: "",
								imports: {
									_: pe
								}
							}, (pe.prototype = he.prototype).constructor = pe, (ge.prototype = me(he.prototype)).constructor = ge, (ye.prototype = me(he.prototype)).constructor = ye, be.prototype.clear = function() {
								this.__data__ = ne ? ne(null) : {}, this.size = 0
							}, be.prototype.delete = function(e) {
								return e = this.has(e) && delete this.__data__[e], this.size -= e ? 1 : 0, e
							}, be.prototype.get = function(e) {
								var t = this.__data__;
								if (ne) {
									var n = t[e];
									return n === zi ? Hi : n
								}
								return y.call(t, e) ? t[e] : Hi
							}, be.prototype.has = function(e) {
								var t = this.__data__;
								return ne ? t[e] !== Hi : y.call(t, e)
							}, be.prototype.set = function(e, t) {
								var n = this.__data__;
								return this.size += this.has(e) ? 0 : 1, n[e] = ne && t === Hi ? zi : t, this
							}, we.prototype.clear = function() {
								this.__data__ = [], this.size = 0
							}, we.prototype.delete = function(e) {
								var t = this.__data__;
								return !((e = Ae(t, e)) < 0) && (e == t.length - 1 ? t.pop() : A.call(t, e, 1), --this.size, !0)
							}, we.prototype.get = function(e) {
								var t = this.__data__;
								return (e = Ae(t, e)) < 0 ? Hi : t[e][1]
							}, we.prototype.has = function(e) {
								return -1 < Ae(this.__data__, e)
							}, we.prototype.set = function(e, t) {
								var n = this.__data__,
									r = Ae(n, e);
								return r < 0 ? (++this.size, n.push([e, t])) : n[r][1] = t, this
							}, Se.prototype.clear = function() {
								this.size = 0, this.__data__ = {
									hash: new be,
									map: new(Z || we),
									string: new be
								}
							}, Se.prototype.delete = function(e) {
								return e = Bn(this, e).delete(e), this.size -= e ? 1 : 0, e
							}, Se.prototype.get = function(e) {
								return Bn(this, e).get(e)
							}, Se.prototype.has = function(e) {
								return Bn(this, e).has(e)
							}, Se.prototype.set = function(e, t) {
								var n = Bn(this, e),
									r = n.size;
								return n.set(e, t), this.size += n.size == r ? 0 : 1, this
							}, Ce.prototype.add = Ce.prototype.push = function(e) {
								return this.__data__.set(e, zi), this
							}, Ce.prototype.has = function(e) {
								return this.__data__.has(e)
							}, Ie.prototype.clear = function() {
								this.__data__ = new we, this.size = 0
							}, Ie.prototype.delete = function(e) {
								var t = this.__data__,
									e = t.delete(e);
								return this.size = t.size, e
							}, Ie.prototype.get = function(e) {
								return this.__data__.get(e)
							}, Ie.prototype.has = function(e) {
								return this.__data__.has(e)
							}, Ie.prototype.set = function(e, t) {
								var n = this.__data__;
								if (n instanceof we) {
									var r = n.__data__;
									if (!Z || r.length < 199) return r.push([e, t]), this.size = ++n.size, this;
									n = this.__data__ = new Se(r)
								}
								return n.set(e, t), this.size = n.size, this
							};
							var Be = un(Ke),
								Ge = un(Xe, !0);

							function He(e, r) {
								var o = !0;
								return Be(e, function(e, t, n) {
									return o = !!r(e, t, n)
								}), o
							}

							function We(e, t, n) {
								for (var r = -1, o = e.length; ++r < o;) {
									var i, a, l = e[r],
										u = t(l);
									null != u && (i === Hi ? u == u && !Go(u) : n(u, i)) && (i = u, a = l)
								}
								return a
							}

							function ze(e, r) {
								var o = [];
								return Be(e, function(e, t, n) {
									r(e, t, n) && o.push(e)
								}), o
							}

							function Ve(e, t, n, r, o) {
								var i = -1,
									a = e.length;
								for (n = n || Kn, o = o || []; ++i < a;) {
									var l = e[i];
									0 < t && n(l) ? 1 < t ? Ve(l, t - 1, n, r, o) : kl(o, l) : r || (o[o.length] = l)
								}
								return o
							}
							var qe = cn(),
								Je = cn(!0);

							function Ke(e, t) {
								return e && qe(e, t, si)
							}

							function Xe(e, t) {
								return e && Je(e, t, si)
							}

							function $e(t, e) {
								return El(e, function(e) {
									return Ao(t[e])
								})
							}

							function Ye(e, t) {
								for (var n = 0, r = (t = Jt(t, e)).length; null != e && n < r;) e = e[vr(t[n++])];
								return n && n == r ? e : Hi
							}

							function Ze(e, t, n) {
								t = t(e);
								return Io(e) ? t : kl(t, n(e))
							}

							function Qe(e) {
								return null == e ? e === Hi ? "[object Undefined]" : "[object Null]" : R && R in v(e) ? function(e) {
									var t = y.call(e, R),
										n = e[R];
									try {
										e[R] = Hi;
										var r = !0
									} catch (e) {}
									var o = h.call(e);
									r && (t ? e[R] = n : delete e[R]);
									return o
								}(e) : (e = e, h.call(e))
							}

							function et(e, t) {
								return t < e
							}

							function tt(e, t) {
								return null != e && y.call(e, t)
							}

							function nt(e, t) {
								return null != e && t in v(e)
							}

							function rt(e, t, n) {
								for (var r = n ? Tl : Pl, o = e[0].length, i = e.length, a = i, l = I(i), u = 1 / 0, c = []; a--;) {
									var s = e[a];
									a && t && (s = Ol(s, zl(t))), u = q(s.length, u), l[a] = !n && (t || 120 <= o && 120 <= s.length) ? new Ce(a && s) : Hi
								}
								s = e[0];
								var d = -1,
									f = l[0];
								e: for (; ++d < o && c.length < u;) {
									var p = s[d],
										m = t ? t(p) : p,
										p = n || 0 !== p ? p : 0;
									if (!(f ? ql(f, m) : r(c, m, n))) {
										for (a = i; --a;) {
											var v = l[a];
											if (!(v ? ql(v, m) : r(e[a], m, n))) continue e
										}
										f && f.push(m), c.push(p)
									}
								}
								return c
							}

							function ot(e, t, n) {
								t = null == (e = or(e, t = Jt(t, e))) ? e : e[vr(Or(t))];
								return null == t ? Hi : wl(t, e, n)
							}

							function it(e) {
								return Lo(e) && Qe(e) == Yi
							}

							function at(e, t, n, r, o) {
								return e === t || (null == e || null == t || !Lo(e) && !Lo(t) ? e != e && t != t : function(e, t, n, r, o, i) {
									var a = Io(e),
										l = Io(t),
										u = a ? Zi : Vn(e),
										c = l ? Zi : Vn(t),
										s = (u = u == Yi ? aa : u) == aa,
										l = (c = c == Yi ? aa : c) == aa,
										c = u == c;
									if (c && To(e)) {
										if (!To(t)) return !1;
										s = !(a = !0)
									}
									if (c && !s) return i = i || new Ie, a || Ho(e) ? _n(e, t, n, r, o, i) : function(e, t, n, r, o, i, a) {
										switch (n) {
											case ma:
												if (e.byteLength != t.byteLength || e.byteOffset != t.byteOffset) return !1;
												e = e.buffer, t = t.buffer;
											case pa:
												return e.byteLength == t.byteLength && i(new E(e), new E(t)) ? !0 : !1;
											case Qi:
											case ea:
											case ia:
												return bo(+e, +t);
											case ta:
												return e.name == t.name && e.message == t.message;
											case ua:
											case sa:
												return e == t + "";
											case oa:
												var l = Ql;
											case ca:
												var u = 1 & r;
												if (l = l || nu, e.size != t.size && !u) return !1;
												u = a.get(e);
												if (u) return u == t;
												r |= 2, a.set(e, t);
												l = _n(l(e), l(t), r, o, i, a);
												return a.delete(e), l;
											case da:
												if (de) return de.call(e) == de.call(t)
										}
										return !1
									}(e, t, u, n, r, o, i);
									if (!(1 & n)) {
										s = s && y.call(e, "__wrapped__"), l = l && y.call(t, "__wrapped__");
										if (s || l) {
											s = s ? e.value() : e, l = l ? t.value() : t;
											return i = i || new Ie, o(s, l, n, r, i)
										}
									}
									return c && (i = i || new Ie, function(e, t, n, r, o, i) {
										var a = 1 & n,
											l = Ln(e),
											u = l.length,
											c = Ln(t).length;
										if (u != c && !a) return !1;
										var s = u;
										for (; s--;) {
											var d = l[s];
											if (!(a ? d in t : y.call(t, d))) return !1
										}
										var f = i.get(e),
											c = i.get(t);
										if (f && c) return f == t && c == e;
										var p = !0;
										i.set(e, t), i.set(t, e);
										var m = a;
										for (; ++s < u;) {
											d = l[s];
											var v, h = e[d],
												g = t[d];
											if (r && (v = a ? r(g, h, d, t, e, i) : r(h, g, d, e, t, i)), !(v === Hi ? h === g || o(h, g, n, r, i) : v)) {
												p = !1;
												break
											}
											m = m || "constructor" == d
										}
										p && !m && (f = e.constructor, c = t.constructor, f != c && "constructor" in e && "constructor" in t && !("function" == typeof f && f instanceof f && "function" == typeof c && c instanceof c) && (p = !1));
										return i.delete(e), i.delete(t), p
									}(e, t, n, r, o, i))
								}(e, t, n, r, at, o))
							}

							function lt(e, t, n, r) {
								var o = n.length,
									i = o,
									a = !r;
								if (null == e) return !i;
								for (e = v(e); o--;) {
									var l = n[o];
									if (a && l[2] ? l[1] !== e[l[0]] : !(l[0] in e)) return !1
								}
								for (; ++o < i;) {
									var u = (l = n[o])[0],
										c = e[u],
										s = l[1];
									if (a && l[2]) {
										if (c === Hi && !(u in e)) return !1
									} else {
										var d, f = new Ie;
										if (r && (d = r(c, s, u, e, t, f)), !(d === Hi ? at(s, c, 3, r, f) : d)) return !1
									}
								}
								return !0
							}

							function ut(e) {
								return !(!Ro(e) || (t = e, c && c in t)) && (Ao(e) ? w : $a).test(hr(e));
								var t
							}

							function ct(e) {
								return "function" == typeof e ? e : null == e ? Li : "object" == typeof e ? Io(e) ? vt(e[0], e[1]) : mt(e) : ji(e)
							}

							function st(e) {
								if (!er(e)) return z(e);
								var t, n = [];
								for (t in v(e)) y.call(e, t) && "constructor" != t && n.push(t);
								return n
							}

							function dt(e) {
								if (!Ro(e)) return function(e) {
									var t = [];
									if (null != e)
										for (var n in v(e)) t.push(n);
									return t
								}(e);
								var t, n = er(e),
									r = [];
								for (t in e)("constructor" != t || !n && y.call(e, t)) && r.push(t);
								return r
							}

							function ft(e, t) {
								return e < t
							}

							function pt(e, r) {
								var o = -1,
									i = Eo(e) ? I(e.length) : [];
								return Be(e, function(e, t, n) {
									i[++o] = r(e, t, n)
								}), i
							}

							function mt(t) {
								var n = Gn(t);
								return 1 == n.length && n[0][2] ? nr(n[0][0], n[0][1]) : function(e) {
									return e === t || lt(e, t, n)
								}
							}

							function vt(n, r) {
								return Yn(n) && tr(r) ? nr(vr(n), r) : function(e) {
									var t = ii(e, n);
									return t === Hi && t === r ? ai(e, n) : at(r, t, 3)
								}
							}

							function ht(r, o, i, a, l) {
								r !== o && qe(o, function(e, t) {
									var n;
									l = l || new Ie, Ro(e) ? function(e, t, n, r, o, i, a) {
										var l = ir(e, n),
											u = ir(t, n),
											c = a.get(u);
										if (c) return Oe(e, n, c);
										var s, d = i ? i(l, u, n + "", e, t, a) : Hi,
											f = d === Hi;
										f && (s = Io(u), c = !s && To(u), t = !s && !c && Ho(u), d = u, s || c || t ? d = Io(l) ? l : Po(l) ? rn(l) : c ? Yt(u, !(f = !1)) : t ? Qt(u, !(f = !1)) : [] : Fo(u) || Co(u) ? Co(d = l) ? d = $o(l) : Ro(l) && !Ao(l) || (d = Jn(u)) : f = !1), f && (a.set(u, d), o(d, u, r, i, a), a.delete(u)), Oe(e, n, d)
									}(r, o, t, i, ht, a, l) : ((n = a ? a(ir(r, t), e, t + "", r, o, l) : Hi) === Hi && (n = e), Oe(r, t, n))
								}, di)
							}

							function gt(e, t) {
								var n = e.length;
								if (n) return Xn(t += t < 0 ? n : 0, n) ? e[t] : Hi
							}

							function yt(e, r, n) {
								r = r.length ? Ol(r, function(t) {
									return Io(t) ? function(e) {
										return Ye(e, 1 === t.length ? t[0] : t)
									} : t
								}) : [Li];
								var o = -1;
								return r = Ol(r, zl(Un())),
									function(e, t) {
										var n = e.length;
										for (e.sort(t); n--;) e[n] = e[n].value;
										return e
									}(pt(e, function(t, e, n) {
										return {
											criteria: Ol(r, function(e) {
												return e(t)
											}),
											index: ++o,
											value: t
										}
									}), function(e, t) {
										return function(e, t, n) {
											var r = -1,
												o = e.criteria,
												i = t.criteria,
												a = o.length,
												l = n.length;
											for (; ++r < a;) {
												var u = en(o[r], i[r]);
												if (u) {
													if (l <= r) return u;
													var c = n[r];
													return u * ("desc" == c ? -1 : 1)
												}
											}
											return e.index - t.index
										}(e, t, n)
									})
							}

							function bt(e, t, n) {
								for (var r = -1, o = t.length, i = {}; ++r < o;) {
									var a = t[r],
										l = Ye(e, a);
									n(l, a) && Tt(i, Jt(a, e), l)
								}
								return i
							}

							function wt(e, t, n, r) {
								var o = r ? Ml : Dl,
									i = -1,
									a = t.length,
									l = e;
								for (e === t && (t = rn(t)), n && (l = Ol(e, zl(n))); ++i < a;)
									for (var u = 0, c = t[i], s = n ? n(c) : c; - 1 < (u = o(l, s, u, r));) l !== e && A.call(l, u, 1), A.call(e, u, 1);
								return e
							}

							function St(e, t) {
								for (var n = e ? t.length : 0, r = n - 1; n--;) {
									var o, i = t[n];
									n != r && i === o || (Xn(o = i) ? A.call(e, i, 1) : Ut(e, i))
								}
								return e
							}

							function Ct(e, t) {
								return e + U(X() * (t - e + 1))
							}

							function It(e, t) {
								var n = "";
								if (!e || t < 1 || Ji < t) return n;
								for (; t % 2 && (n += e), (t = U(t / 2)) && (e += e), t;);
								return n
							}

							function xt(e, t) {
								return ur(rr(e, t, Li), e + "")
							}

							function Et(e) {
								return Ee(bi(e))
							}

							function Pt(e, t) {
								e = bi(e);
								return dr(e, De(t, 0, e.length))
							}

							function Tt(e, t, n, r) {
								if (!Ro(e)) return e;
								for (var o = -1, i = (t = Jt(t, e)).length, a = i - 1, l = e; null != l && ++o < i;) {
									var u, c = vr(t[o]),
										s = n;
									if ("__proto__" === c || "constructor" === c || "prototype" === c) return e;
									o != a && (u = l[c], (s = r ? r(u, c, l) : Hi) === Hi && (s = Ro(u) ? u : Xn(t[o + 1]) ? [] : {})), ke(l, c, s), l = l[c]
								}
								return e
							}
							var Ot = re ? function(e, t) {
									return re.set(e, t), e
								} : Li,
								kt = L ? function(e, t) {
									return L(e, "toString", {
										configurable: !0,
										enumerable: !1,
										value: _i(t),
										writable: !0
									})
								} : Li;

							function At(e) {
								return dr(bi(e))
							}

							function Nt(e, t, n) {
								var r = -1,
									o = e.length;
								t < 0 && (t = o < -t ? 0 : o + t), (n = o < n ? o : n) < 0 && (n += o), o = n < t ? 0 : n - t >>> 0, t >>>= 0;
								for (var i = I(o); ++r < o;) i[r] = e[r + t];
								return i
							}

							function _t(e, r) {
								var o;
								return Be(e, function(e, t, n) {
									return !(o = r(e, t, n))
								}), !!o
							}

							function Rt(e, t, n) {
								var r = 0,
									o = null == e ? r : e.length;
								if ("number" == typeof t && t == t && o <= 2147483647) {
									for (; r < o;) {
										var i = r + o >>> 1,
											a = e[i];
										null !== a && !Go(a) && (n ? a <= t : a < t) ? r = 1 + i : o = i
									}
									return o
								}
								return Lt(e, t, Li, n)
							}

							function Lt(e, t, n, r) {
								var o = 0,
									i = null == e ? 0 : e.length;
								if (0 === i) return 0;
								for (var a = (t = n(t)) != t, l = null === t, u = Go(t), c = t === Hi; o < i;) {
									var s = U((o + i) / 2),
										d = n(e[s]),
										f = d !== Hi,
										p = null === d,
										m = d == d,
										v = Go(d),
										d = a ? r || m : c ? m && (r || f) : l ? m && f && (r || !p) : u ? m && f && !p && (r || !v) : !p && !v && (r ? d <= t : d < t);
									d ? o = s + 1 : i = s
								}
								return q(i, 4294967294)
							}

							function Dt(e, t) {
								for (var n = -1, r = e.length, o = 0, i = []; ++n < r;) {
									var a, l = e[n],
										u = t ? t(l) : l;
									n && bo(u, a) || (a = u, i[o++] = 0 === l ? 0 : l)
								}
								return i
							}

							function Mt(e) {
								return "number" == typeof e ? e : Go(e) ? Ki : +e
							}

							function Ft(e) {
								if ("string" == typeof e) return e;
								if (Io(e)) return Ol(e, Ft) + "";
								if (Go(e)) return fe ? fe.call(e) : "";
								var t = e + "";
								return "0" == t && 1 / e == -1 / 0 ? "-0" : t
							}

							function jt(e, t, n) {
								var r = -1,
									o = Pl,
									i = e.length,
									a = !0,
									l = [],
									u = l;
								if (n) a = !1, o = Tl;
								else if (200 <= i) {
									var c = t ? null : Pn(e);
									if (c) return nu(c);
									a = !1, o = ql, u = new Ce
								} else u = t ? [] : l;
								e: for (; ++r < i;) {
									var s = e[r],
										d = t ? t(s) : s,
										s = n || 0 !== s ? s : 0;
									if (a && d == d) {
										for (var f = u.length; f--;)
											if (u[f] === d) continue e;
										t && u.push(d), l.push(s)
									} else o(u, d, n) || (u !== l && u.push(d), l.push(s))
								}
								return l
							}

							function Ut(e, t) {
								return null == (e = or(e, t = Jt(t, e))) || delete e[vr(Or(t))]
							}

							function Bt(e, t, n, r) {
								return Tt(e, t, n(Ye(e, t)), r)
							}

							function Gt(e, t, n, r) {
								for (var o = e.length, i = r ? o : -1;
									(r ? i-- : ++i < o) && t(e[i], i, e););
								return n ? Nt(e, r ? 0 : i, r ? i + 1 : o) : Nt(e, r ? i + 1 : 0, r ? o : i)
							}

							function Ht(e, t) {
								return e instanceof ye && (e = e.value()), Al(t, function(e, t) {
									return t.func.apply(t.thisArg, kl([e], t.args))
								}, e)
							}

							function Wt(e, t, n) {
								var r = e.length;
								if (r < 2) return r ? jt(e[0]) : [];
								for (var o = -1, i = I(r); ++o < r;)
									for (var a = e[o], l = -1; ++l < r;) l != o && (i[o] = Ue(i[o] || a, e[l], t, n));
								return jt(Ve(i, 1), t, n)
							}

							function zt(e, t, n) {
								for (var r = -1, o = e.length, i = t.length, a = {}; ++r < o;) {
									var l = r < i ? t[r] : Hi;
									n(a, e[r], l)
								}
								return a
							}

							function Vt(e) {
								return Po(e) ? e : []
							}

							function qt(e) {
								return "function" == typeof e ? e : Li
							}

							function Jt(e, t) {
								return Io(e) ? e : Yn(e, t) ? [e] : mr(Yo(e))
							}
							var Kt = xt;

							function Xt(e, t, n) {
								var r = e.length;
								return n = n === Hi ? r : n, !t && r <= n ? e : Nt(e, t, n)
							}
							var $t = D || function(e) {
								return fl.clearTimeout(e)
							};

							function Yt(e, t) {
								if (t) return e.slice();
								t = e.length, t = P ? P(t) : new e.constructor(t);
								return e.copy(t), t
							}

							function Zt(e) {
								var t = new e.constructor(e.byteLength);
								return new E(t).set(new E(e)), t
							}

							function Qt(e, t) {
								t = t ? Zt(e.buffer) : e.buffer;
								return new e.constructor(t, e.byteOffset, e.length)
							}

							function en(e, t) {
								if (e !== t) {
									var n = e !== Hi,
										r = null === e,
										o = e == e,
										i = Go(e),
										a = t !== Hi,
										l = null === t,
										u = t == t,
										c = Go(t);
									if (!l && !c && !i && t < e || i && a && u && !l && !c || r && a && u || !n && u || !o) return 1;
									if (!r && !i && !c && e < t || c && n && o && !r && !i || l && n && o || !a && o || !u) return -1
								}
								return 0
							}

							function tn(e, t, n, r) {
								for (var o = -1, i = e.length, a = n.length, l = -1, u = t.length, c = V(i - a, 0), s = I(u + c), d = !r; ++l < u;) s[l] = t[l];
								for (; ++o < a;)(d || o < i) && (s[n[o]] = e[o]);
								for (; c--;) s[l++] = e[o++];
								return s
							}

							function nn(e, t, n, r) {
								for (var o = -1, i = e.length, a = -1, l = n.length, u = -1, c = t.length, s = V(i - l, 0), d = I(s + c), f = !r; ++o < s;) d[o] = e[o];
								for (var p = o; ++u < c;) d[p + u] = t[u];
								for (; ++a < l;)(f || o < i) && (d[p + n[a]] = e[o++]);
								return d
							}

							function rn(e, t) {
								var n = -1,
									r = e.length;
								for (t = t || I(r); ++n < r;) t[n] = e[n];
								return t
							}

							function on(e, t, n, r) {
								var o = !n;
								n = n || {};
								for (var i = -1, a = t.length; ++i < a;) {
									var l = t[i],
										u = r ? r(n[l], e[l], l, n, e) : Hi;
									u === Hi && (u = e[l]), (o ? Re : ke)(n, l, u)
								}
								return n
							}

							function an(o, i) {
								return function(e, t) {
									var n = Io(e) ? Sl : Ne,
										r = i ? i() : {};
									return n(e, o, Un(t, 2), r)
								}
							}

							function ln(l) {
								return xt(function(e, t) {
									var n = -1,
										r = t.length,
										o = 1 < r ? t[r - 1] : Hi,
										i = 2 < r ? t[2] : Hi,
										o = 3 < l.length && "function" == typeof o ? (r--, o) : Hi;
									for (i && $n(t[0], t[1], i) && (o = r < 3 ? Hi : o, r = 1), e = v(e); ++n < r;) {
										var a = t[n];
										a && l(e, a, n, o)
									}
									return e
								})
							}

							function un(i, a) {
								return function(e, t) {
									if (null == e) return e;
									if (!Eo(e)) return i(e, t);
									for (var n = e.length, r = a ? n : -1, o = v(e);
										(a ? r-- : ++r < n) && !1 !== t(o[r], r, o););
									return e
								}
							}

							function cn(u) {
								return function(e, t, n) {
									for (var r = -1, o = v(e), i = n(e), a = i.length; a--;) {
										var l = i[u ? a : ++r];
										if (!1 === t(o[l], l, o)) break
									}
									return e
								}
							}

							function sn(r) {
								return function(e) {
									var t = Zl(e = Yo(e)) ? ou(e) : Hi,
										n = t ? t[0] : e.charAt(0),
										e = t ? Xt(t, 1).join("") : e.slice(1);
									return n[r]() + e
								}
							}

							function dn(t) {
								return function(e) {
									return Al(Ai(Ci(e).replace(nl, "")), t, "")
								}
							}

							function fn(r) {
								return function() {
									var e = arguments;
									switch (e.length) {
										case 0:
											return new r;
										case 1:
											return new r(e[0]);
										case 2:
											return new r(e[0], e[1]);
										case 3:
											return new r(e[0], e[1], e[2]);
										case 4:
											return new r(e[0], e[1], e[2], e[3]);
										case 5:
											return new r(e[0], e[1], e[2], e[3], e[4]);
										case 6:
											return new r(e[0], e[1], e[2], e[3], e[4], e[5]);
										case 7:
											return new r(e[0], e[1], e[2], e[3], e[4], e[5], e[6])
									}
									var t = me(r.prototype),
										n = r.apply(t, e);
									return Ro(n) ? n : t
								}
							}

							function pn(i, a, l) {
								var u = fn(i);
								return function e() {
									for (var t = arguments.length, n = I(t), r = t, o = jn(e); r--;) n[r] = arguments[r];
									o = t < 3 && n[0] !== o && n[t - 1] !== o ? [] : tu(n, o);
									return (t -= o.length) < l ? xn(i, a, hn, e.placeholder, Hi, n, o, Hi, Hi, l - t) : wl(this && this !== fl && this instanceof e ? u : i, this, n)
								}
							}

							function mn(i) {
								return function(e, t, n) {
									var r, o = v(e);
									Eo(e) || (r = Un(t, 3), e = si(e), t = function(e) {
										return r(o[e], e, o)
									});
									n = i(e, t, n);
									return -1 < n ? o[r ? e[n] : n] : Hi
								}
							}

							function vn(u) {
								return Rn(function(o) {
									var i = o.length,
										e = i,
										t = ge.prototype.thru;
									for (u && o.reverse(); e--;) {
										var n = o[e];
										if ("function" != typeof n) throw new C(Wi);
										t && !l && "wrapper" == Fn(n) && (l = new ge([], !0))
									}
									for (e = l ? e : i; ++e < i;) var r = Fn(n = o[e]),
										a = "wrapper" == r ? Mn(n) : Hi,
										l = a && Zn(a[0]) && 424 == a[1] && !a[4].length && 1 == a[9] ? l[Fn(a[0])].apply(l, a[3]) : 1 == n.length && Zn(n) ? l[r]() : l.thru(n);
									return function() {
										var e = arguments,
											t = e[0];
										if (l && 1 == e.length && Io(t)) return l.plant(t).value();
										for (var n = 0, r = i ? o[n].apply(this, e) : t; ++n < i;) r = o[n].call(this, r);
										return r
									}
								})
							}

							function hn(l, u, c, s, d, f, p, m, v, h) {
								var g = u & qi,
									y = 1 & u,
									b = 2 & u,
									w = 24 & u,
									S = 512 & u,
									C = b ? Hi : fn(l);
								return function e() {
									for (var t, n = I(a = arguments.length), r = a; r--;) n[r] = arguments[r];
									if (w && (t = function(e, t) {
											for (var n = e.length, r = 0; n--;) e[n] === t && ++r;
											return r
										}(n, i = jn(e))), s && (n = tn(n, s, d, w)), f && (n = nn(n, f, p, w)), a -= t, w && a < h) {
										var o = tu(n, i);
										return xn(l, u, hn, e.placeholder, c, n, o, m, v, h - a)
									}
									var i = y ? c : this,
										o = b ? i[l] : l,
										a = n.length;
									return m ? n = function(e, t) {
										for (var n = e.length, r = q(t.length, n), o = rn(e); r--;) {
											var i = t[r];
											e[r] = Xn(i, n) ? o[i] : Hi
										}
										return e
									}(n, m) : S && 1 < a && n.reverse(), g && v < a && (n.length = v), this && this !== fl && this instanceof e && (o = C || fn(o)), o.apply(i, n)
								}
							}

							function gn(n, a) {
								return function(e, t) {
									return e = e, r = n, o = a(t), i = {}, Ke(e, function(e, t, n) {
										r(i, o(e), t, n)
									}), i;
									var r, o, i
								}
							}

							function yn(r, o) {
								return function(e, t) {
									var n;
									if (e === Hi && t === Hi) return o;
									if (e !== Hi && (n = e), t !== Hi) {
										if (n === Hi) return t;
										t = "string" == typeof e || "string" == typeof t ? (e = Ft(e), Ft(t)) : (e = Mt(e), Mt(t)), n = r(e, t)
									}
									return n
								}
							}

							function bn(r) {
								return Rn(function(e) {
									return e = Ol(e, zl(Un())), xt(function(t) {
										var n = this;
										return r(e, function(e) {
											return wl(e, n, t)
										})
									})
								})
							}

							function wn(e, t) {
								var n = (t = t === Hi ? " " : Ft(t)).length;
								if (n < 2) return n ? It(t, e) : t;
								n = It(t, j(e / ru(t)));
								return Zl(t) ? Xt(ou(n), 0, e).join("") : n.slice(0, e)
							}

							function Sn(l, e, u, c) {
								var s = 1 & e,
									d = fn(l);
								return function e() {
									for (var t = -1, n = arguments.length, r = -1, o = c.length, i = I(o + n), a = this && this !== fl && this instanceof e ? d : l; ++r < o;) i[r] = c[r];
									for (; n--;) i[r++] = arguments[++t];
									return wl(a, s ? u : this, i)
								}
							}

							function Cn(r) {
								return function(e, t, n) {
									return n && "number" != typeof n && $n(e, t, n) && (t = n = Hi), e = qo(e), t === Hi ? (t = e, e = 0) : t = qo(t),
										function(e, t, n, r) {
											for (var o = -1, i = V(j((t - e) / (n || 1)), 0), a = I(i); i--;) a[r ? i : ++o] = e, e += n;
											return a
										}(e, t, n = n === Hi ? e < t ? 1 : -1 : qo(n), r)
								}
							}

							function In(n) {
								return function(e, t) {
									return "string" == typeof e && "string" == typeof t || (e = Xo(e), t = Xo(t)), n(e, t)
								}
							}

							function xn(e, t, n, r, o, i, a, l, u, c) {
								var s = 8 & t;
								t |= s ? 32 : 64, 4 & (t &= ~(s ? 64 : 32)) || (t &= -4);
								c = [e, t, o, s ? i : Hi, s ? a : Hi, s ? Hi : i, s ? Hi : a, l, u, c], n = n.apply(Hi, c);
								return Zn(e) && ar(n, c), n.placeholder = r, cr(n, e, t)
							}

							function En(e) {
								var r = o[e];
								return function(e, t) {
									if (e = Xo(e), (t = null == t ? 0 : q(Jo(t), 292)) && H(e)) {
										var n = (Yo(e) + "e").split("e");
										return +((n = (Yo(r(n[0] + "e" + (+n[1] + t))) + "e").split("e"))[0] + "e" + (+n[1] - t))
									}
									return r(e)
								}
							}
							var Pn = ee && 1 / nu(new ee([, -0]))[1] == 1 / 0 ? function(e) {
								return new ee(e)
							} : Fi;

							function Tn(i) {
								return function(e) {
									var t, n, r, o = Vn(e);
									return o == oa ? Ql(e) : o == ca ? (o = e, t = -1, n = Array(o.size), o.forEach(function(e) {
										n[++t] = [e, e]
									}), n) : Ol(i(r = e), function(e) {
										return [e, r[e]]
									})
								}
							}

							function On(e, t, n, r, o, i, a, l) {
								var u = 2 & t;
								if (!u && "function" != typeof e) throw new C(Wi);
								var c = r ? r.length : 0;
								c || (t &= -97, r = o = Hi), a = a === Hi ? a : V(Jo(a), 0), l = l === Hi ? l : Jo(l), c -= o ? o.length : 0, 64 & t && (m = r, v = o, r = o = Hi);
								var s, d, f, p, m, v, h, g, y, b, w = u ? Hi : Mn(e),
									S = [e, t, n, r, o, m, v, i, a, l];
								return w && (d = w, p = (s = S)[1], m = d[1], i = (v = p | m) < 131, a = m == qi && 8 == p || m == qi && 256 == p && s[7].length <= d[8] || 384 == m && d[7].length <= d[8] && 8 == p, (i || a) && (1 & m && (s[2] = d[2], v |= 1 & p ? 0 : 4), (p = d[3]) && (f = s[3], s[3] = f ? tn(f, p, d[4]) : p, s[4] = f ? tu(s[3], Vi) : d[4]), (p = d[5]) && (f = s[5], s[5] = f ? nn(f, p, d[6]) : p, s[6] = f ? tu(s[5], Vi) : d[6]), (p = d[7]) && (s[7] = p), m & qi && (s[8] = null == s[8] ? d[8] : q(s[8], d[8])), null == s[9] && (s[9] = d[9]), s[0] = d[0], s[1] = v)), e = S[0], t = S[1], n = S[2], r = S[3], o = S[4], !(l = S[9] = S[9] === Hi ? u ? 0 : e.length : V(S[9] - c, 0)) && 24 & t && (t &= -25), n = t && 1 != t ? 8 == t || 16 == t ? pn(e, t, l) : 32 != t && 33 != t || o.length ? hn.apply(Hi, S) : Sn(e, t, n, r) : (g = n, y = 1 & t, b = fn(h = e), function e() {
									return (this && this !== fl && this instanceof e ? b : h).apply(y ? g : this, arguments)
								}), cr((w ? Ot : ar)(n, S), e, t)
							}

							function kn(e, t, n, r) {
								return e === Hi || bo(e, m[n]) && !y.call(r, n) ? t : e
							}

							function An(e, t, n, r, o, i) {
								return Ro(e) && Ro(t) && (i.set(t, e), ht(e, t, Hi, An, i), i.delete(t)), e
							}

							function Nn(e) {
								return Fo(e) ? Hi : e
							}

							function _n(e, t, n, r, o, i) {
								var a = 1 & n,
									l = e.length,
									u = t.length;
								if (l != u && !(a && l < u)) return !1;
								var c = i.get(e),
									u = i.get(t);
								if (c && u) return c == t && u == e;
								var s = -1,
									d = !0,
									f = 2 & n ? new Ce : Hi;
								for (i.set(e, t), i.set(t, e); ++s < l;) {
									var p, m = e[s],
										v = t[s];
									if (r && (p = a ? r(v, m, s, t, e, i) : r(m, v, s, e, t, i)), p !== Hi) {
										if (p) continue;
										d = !1;
										break
									}
									if (f) {
										if (!_l(t, function(e, t) {
												return !ql(f, t) && (m === e || o(m, e, n, r, i)) && f.push(t)
											})) {
											d = !1;
											break
										}
									} else if (m !== v && !o(m, v, n, r, i)) {
										d = !1;
										break
									}
								}
								return i.delete(e), i.delete(t), d
							}

							function Rn(e) {
								return ur(rr(e, Hi, Ir), e + "")
							}

							function Ln(e) {
								return Ze(e, si, Wn)
							}

							function Dn(e) {
								return Ze(e, di, zn)
							}
							var Mn = re ? function(e) {
								return re.get(e)
							} : Fi;

							function Fn(e) {
								for (var t = e.name + "", n = oe[t], r = y.call(oe, t) ? n.length : 0; r--;) {
									var o = n[r],
										i = o.func;
									if (null == i || i == e) return o.name
								}
								return t
							}

							function jn(e) {
								return (y.call(pe, "placeholder") ? pe : e).placeholder
							}

							function Un() {
								var e = (e = pe.iteratee || Di) === Di ? ct : e;
								return arguments.length ? e(arguments[0], arguments[1]) : e
							}

							function Bn(e, t) {
								var n, r = e.__data__;
								return ("string" == (e = typeof(n = t)) || "number" == e || "symbol" == e || "boolean" == e ? "__proto__" !== n : null === n) ? r["string" == typeof t ? "string" : "hash"] : r.map
							}

							function Gn(e) {
								for (var t = si(e), n = t.length; n--;) {
									var r = t[n],
										o = e[r];
									t[n] = [r, o, tr(o)]
								}
								return t
							}

							function Hn(e, t) {
								t = t, t = null == (e = e) ? Hi : e[t];
								return ut(t) ? t : Hi
							}
							var Wn = B ? function(t) {
									return null == t ? [] : (t = v(t), El(B(t), function(e) {
										return k.call(t, e)
									}))
								} : Ui,
								zn = B ? function(e) {
									for (var t = []; e;) kl(t, Wn(e)), e = T(e);
									return t
								} : Ui,
								Vn = Qe;

							function qn(e, t, n) {
								for (var r = -1, o = (t = Jt(t, e)).length, i = !1; ++r < o;) {
									var a = vr(t[r]);
									if (!(i = null != e && n(e, a))) break;
									e = e[a]
								}
								return i || ++r != o ? i : !!(o = null == e ? 0 : e.length) && _o(o) && Xn(a, o) && (Io(e) || Co(e))
							}

							function Jn(e) {
								return "function" != typeof e.constructor || er(e) ? {} : me(T(e))
							}

							function Kn(e) {
								return Io(e) || Co(e) || !!(N && e && e[N])
							}

							function Xn(e, t) {
								var n = typeof e;
								return !!(t = null == t ? Ji : t) && ("number" == n || "symbol" != n && Za.test(e)) && -1 < e && e % 1 == 0 && e < t
							}

							function $n(e, t, n) {
								if (Ro(n)) {
									var r = typeof t;
									return ("number" == r ? Eo(n) && Xn(t, n.length) : "string" == r && t in n) && bo(n[t], e)
								}
							}

							function Yn(e, t) {
								if (!Io(e)) {
									var n = typeof e;
									return "number" == n || "symbol" == n || "boolean" == n || null == e || Go(e) || (Da.test(e) || !La.test(e) || null != t && e in v(t))
								}
							}

							function Zn(e) {
								var t = Fn(e),
									n = pe[t];
								if ("function" == typeof n && t in ye.prototype) {
									if (e === n) return 1;
									n = Mn(n);
									return n && e === n[0]
								}
							}(Y && Vn(new Y(new ArrayBuffer(1))) != ma || Z && Vn(new Z) != oa || Q && Vn(Q.resolve()) != la || ee && Vn(new ee) != ca || te && Vn(new te) != fa) && (Vn = function(e) {
								var t = Qe(e),
									e = t == aa ? e.constructor : Hi,
									e = e ? hr(e) : "";
								if (e) switch (e) {
									case ie:
										return ma;
									case ae:
										return oa;
									case le:
										return la;
									case ue:
										return ca;
									case ce:
										return fa
								}
								return t
							});
							var Qn = a ? Ao : Bi;

							function er(e) {
								var t = e && e.constructor;
								return e === ("function" == typeof t && t.prototype || m)
							}

							function tr(e) {
								return e == e && !Ro(e)
							}

							function nr(t, n) {
								return function(e) {
									return null != e && (e[t] === n && (n !== Hi || t in v(e)))
								}
							}

							function rr(i, a, l) {
								return a = V(a === Hi ? i.length - 1 : a, 0),
									function() {
										for (var e = arguments, t = -1, n = V(e.length - a, 0), r = I(n); ++t < n;) r[t] = e[a + t];
										t = -1;
										for (var o = I(a + 1); ++t < a;) o[t] = e[t];
										return o[a] = l(r), wl(i, this, o)
									}
							}

							function or(e, t) {
								return t.length < 2 ? e : Ye(e, Nt(t, 0, -1))
							}

							function ir(e, t) {
								if (("constructor" !== t || "function" != typeof e[t]) && "__proto__" != t) return e[t]
							}
							var ar = sr(Ot),
								lr = F || function(e, t) {
									return fl.setTimeout(e, t)
								},
								ur = sr(kt);

							function cr(e, t, n) {
								var r, o, t = t + "";
								return ur(e, function(e, t) {
									var n = t.length;
									if (!n) return e;
									var r = n - 1;
									return t[r] = (1 < n ? "& " : "") + t[r], t = t.join(2 < n ? ", " : " "), e.replace(Ba, "{\n/* [wrapped with " + t + "] */\n")
								}(t, (r = (t = (t = t).match(Ga)) ? t[1].split(Ha) : [], o = n, Cl($i, function(e) {
									var t = "_." + e[0];
									o & e[1] && !Pl(r, t) && r.push(t)
								}), r.sort())))
							}

							function sr(n) {
								var r = 0,
									o = 0;
								return function() {
									var e = J(),
										t = 16 - (e - o);
									if (o = e, 0 < t) {
										if (800 <= ++r) return arguments[0]
									} else r = 0;
									return n.apply(Hi, arguments)
								}
							}

							function dr(e, t) {
								var n = -1,
									r = e.length,
									o = r - 1;
								for (t = t === Hi ? r : t; ++n < t;) {
									var i = Ct(n, o),
										a = e[i];
									e[i] = e[n], e[n] = a
								}
								return e.length = t, e
							}
							var fr, pr, mr = (pr = (fr = po(fr = function(e) {
								var o = [];
								return 46 === e.charCodeAt(0) && o.push(""), e.replace(Ma, function(e, t, n, r) {
									o.push(n ? r.replace(Va, "$1") : t || e)
								}), o
							}, function(e) {
								return 500 === pr.size && pr.clear(), e
							})).cache, fr);

							function vr(e) {
								if ("string" == typeof e || Go(e)) return e;
								var t = e + "";
								return "0" == t && 1 / e == -1 / 0 ? "-0" : t
							}

							function hr(e) {
								if (null != e) {
									try {
										return l.call(e)
									} catch (e) {}
									try {
										return e + ""
									} catch (e) {}
								}
								return ""
							}

							function gr(e) {
								if (e instanceof ye) return e.clone();
								var t = new ge(e.__wrapped__, e.__chain__);
								return t.__actions__ = rn(e.__actions__), t.__index__ = e.__index__, t.__values__ = e.__values__, t
							}
							var yr = xt(function(e, t) {
									return Po(e) ? Ue(e, Ve(t, 1, Po, !0)) : []
								}),
								br = xt(function(e, t) {
									var n = Or(t);
									return Po(n) && (n = Hi), Po(e) ? Ue(e, Ve(t, 1, Po, !0), Un(n, 2)) : []
								}),
								wr = xt(function(e, t) {
									var n = Or(t);
									return Po(n) && (n = Hi), Po(e) ? Ue(e, Ve(t, 1, Po, !0), Hi, n) : []
								});

							function Sr(e, t, n) {
								var r = null == e ? 0 : e.length;
								if (!r) return -1;
								n = null == n ? 0 : Jo(n);
								return n < 0 && (n = V(r + n, 0)), Ll(e, Un(t, 3), n)
							}

							function Cr(e, t, n) {
								var r = null == e ? 0 : e.length;
								if (!r) return -1;
								var o = r - 1;
								return n !== Hi && (o = Jo(n), o = n < 0 ? V(r + o, 0) : q(o, r - 1)), Ll(e, Un(t, 3), o, !0)
							}

							function Ir(e) {
								return (null == e ? 0 : e.length) ? Ve(e, 1) : []
							}

							function xr(e) {
								return e && e.length ? e[0] : Hi
							}
							var Er = xt(function(e) {
									var t = Ol(e, Vt);
									return t.length && t[0] === e[0] ? rt(t) : []
								}),
								Pr = xt(function(e) {
									var t = Or(e),
										n = Ol(e, Vt);
									return t === Or(n) ? t = Hi : n.pop(), n.length && n[0] === e[0] ? rt(n, Un(t, 2)) : []
								}),
								Tr = xt(function(e) {
									var t = Or(e),
										n = Ol(e, Vt);
									return (t = "function" == typeof t ? t : Hi) && n.pop(), n.length && n[0] === e[0] ? rt(n, Hi, t) : []
								});

							function Or(e) {
								var t = null == e ? 0 : e.length;
								return t ? e[t - 1] : Hi
							}
							var kr = xt(Ar);

							function Ar(e, t) {
								return e && e.length && t && t.length ? wt(e, t) : e
							}
							var Nr = Rn(function(e, t) {
								var n = null == e ? 0 : e.length,
									r = Le(e, t);
								return St(e, Ol(t, function(e) {
									return Xn(e, n) ? +e : e
								}).sort(en)), r
							});

							function _r(e) {
								return null == e ? e : $.call(e)
							}
							var Rr = xt(function(e) {
									return jt(Ve(e, 1, Po, !0))
								}),
								Lr = xt(function(e) {
									var t = Or(e);
									return Po(t) && (t = Hi), jt(Ve(e, 1, Po, !0), Un(t, 2))
								}),
								Dr = xt(function(e) {
									var t = "function" == typeof(t = Or(e)) ? t : Hi;
									return jt(Ve(e, 1, Po, !0), Hi, t)
								});

							function Mr(t) {
								if (!t || !t.length) return [];
								var n = 0;
								return t = El(t, function(e) {
									return Po(e) && (n = V(e.length, n), 1)
								}), Hl(n, function(e) {
									return Ol(t, Ul(e))
								})
							}

							function Fr(e, t) {
								if (!e || !e.length) return [];
								e = Mr(e);
								return null == t ? e : Ol(e, function(e) {
									return wl(t, Hi, e)
								})
							}
							var jr = xt(function(e, t) {
									return Po(e) ? Ue(e, t) : []
								}),
								Ur = xt(function(e) {
									return Wt(El(e, Po))
								}),
								Br = xt(function(e) {
									var t = Or(e);
									return Po(t) && (t = Hi), Wt(El(e, Po), Un(t, 2))
								}),
								Gr = xt(function(e) {
									var t = "function" == typeof(t = Or(e)) ? t : Hi;
									return Wt(El(e, Po), Hi, t)
								}),
								Hr = xt(Mr);
							var Wr = xt(function(e) {
								var t = e.length,
									t = "function" == typeof(t = 1 < t ? e[t - 1] : Hi) ? (e.pop(), t) : Hi;
								return Fr(e, t)
							});

							function zr(e) {
								e = pe(e);
								return e.__chain__ = !0, e
							}

							function Vr(e, t) {
								return t(e)
							}
							var qr = Rn(function(t) {
								function e(e) {
									return Le(e, t)
								}
								var n = t.length,
									r = n ? t[0] : 0,
									o = this.__wrapped__;
								return !(1 < n || this.__actions__.length) && o instanceof ye && Xn(r) ? ((o = o.slice(r, +r + (n ? 1 : 0))).__actions__.push({
									func: Vr,
									args: [e],
									thisArg: Hi
								}), new ge(o, this.__chain__).thru(function(e) {
									return n && !e.length && e.push(Hi), e
								})) : this.thru(e)
							});
							var Jr = an(function(e, t, n) {
								y.call(e, n) ? ++e[n] : Re(e, n, 1)
							});
							var Kr = mn(Sr),
								Xr = mn(Cr);

							function $r(e, t) {
								return (Io(e) ? Cl : Be)(e, Un(t, 3))
							}

							function Yr(e, t) {
								return (Io(e) ? Il : Ge)(e, Un(t, 3))
							}
							var Zr = an(function(e, t, n) {
								y.call(e, n) ? e[n].push(t) : Re(e, n, [t])
							});
							var Qr = xt(function(e, t, n) {
									var r = -1,
										o = "function" == typeof t,
										i = Eo(e) ? I(e.length) : [];
									return Be(e, function(e) {
										i[++r] = o ? wl(t, e, n) : ot(e, t, n)
									}), i
								}),
								eo = an(function(e, t, n) {
									Re(e, n, t)
								});

							function to(e, t) {
								return (Io(e) ? Ol : pt)(e, Un(t, 3))
							}
							var no = an(function(e, t, n) {
								e[n ? 0 : 1].push(t)
							}, function() {
								return [
									[],
									[]
								]
							});
							var ro = xt(function(e, t) {
									if (null == e) return [];
									var n = t.length;
									return 1 < n && $n(e, t[0], t[1]) ? t = [] : 2 < n && $n(t[0], t[1], t[2]) && (t = [t[0]]), yt(e, Ve(t, 1), [])
								}),
								oo = M || function() {
									return fl.Date.now()
								};

							function io(e, t, n) {
								return t = n ? Hi : t, t = e && null == t ? e.length : t, On(e, qi, Hi, Hi, Hi, Hi, t)
							}

							function ao(e, t) {
								var n;
								if ("function" != typeof t) throw new C(Wi);
								return e = Jo(e),
									function() {
										return 0 < --e && (n = t.apply(this, arguments)), e <= 1 && (t = Hi), n
									}
							}
							var lo = xt(function(e, t, n) {
									var r, o = 1;
									return n.length && (r = tu(n, jn(lo)), o |= 32), On(e, o, t, n, r)
								}),
								uo = xt(function(e, t, n) {
									var r, o = 3;
									return n.length && (r = tu(n, jn(uo)), o |= 32), On(t, o, e, n, r)
								});

							function co(r, n, e) {
								var o, i, a, l, u, c, s = 0,
									d = !1,
									f = !1,
									t = !0;
								if ("function" != typeof r) throw new C(Wi);

								function p(e) {
									var t = o,
										n = i;
									return o = i = Hi, s = e, l = r.apply(n, t)
								}

								function m(e) {
									var t = e - c;
									return c === Hi || n <= t || t < 0 || f && a <= e - s
								}

								function v() {
									var e, t = oo();
									if (m(t)) return h(t);
									u = lr(v, (t = n - ((e = t) - c), f ? q(t, a - (e - s)) : t))
								}

								function h(e) {
									return u = Hi, t && o ? p(e) : (o = i = Hi, l)
								}

								function g() {
									var e = oo(),
										t = m(e);
									if (o = arguments, i = this, c = e, t) {
										if (u === Hi) return s = t = c, u = lr(v, n), d ? p(t) : l;
										if (f) return $t(u), u = lr(v, n), p(c)
									}
									return u === Hi && (u = lr(v, n)), l
								}
								return n = Xo(n) || 0, Ro(e) && (d = !!e.leading, f = "maxWait" in e, a = f ? V(Xo(e.maxWait) || 0, n) : a, t = "trailing" in e ? !!e.trailing : t), g.cancel = function() {
									u !== Hi && $t(u), s = 0, o = c = i = u = Hi
								}, g.flush = function() {
									return u === Hi ? l : h(oo())
								}, g
							}
							var so = xt(function(e, t) {
									return je(e, 1, t)
								}),
								fo = xt(function(e, t, n) {
									return je(e, Xo(t) || 0, n)
								});

							function po(r, o) {
								if ("function" != typeof r || null != o && "function" != typeof o) throw new C(Wi);
								var i = function() {
									var e = arguments,
										t = o ? o.apply(this, e) : e[0],
										n = i.cache;
									if (n.has(t)) return n.get(t);
									e = r.apply(this, e);
									return i.cache = n.set(t, e) || n, e
								};
								return i.cache = new(po.Cache || Se), i
							}

							function mo(t) {
								if ("function" != typeof t) throw new C(Wi);
								return function() {
									var e = arguments;
									switch (e.length) {
										case 0:
											return !t.call(this);
										case 1:
											return !t.call(this, e[0]);
										case 2:
											return !t.call(this, e[0], e[1]);
										case 3:
											return !t.call(this, e[0], e[1], e[2])
									}
									return !t.apply(this, e)
								}
							}
							po.Cache = Se;
							var vo = Kt(function(r, o) {
									var i = (o = 1 == o.length && Io(o[0]) ? Ol(o[0], zl(Un())) : Ol(Ve(o, 1), zl(Un()))).length;
									return xt(function(e) {
										for (var t = -1, n = q(e.length, i); ++t < n;) e[t] = o[t].call(this, e[t]);
										return wl(r, this, e)
									})
								}),
								ho = xt(function(e, t) {
									var n = tu(t, jn(ho));
									return On(e, 32, Hi, t, n)
								}),
								go = xt(function(e, t) {
									var n = tu(t, jn(go));
									return On(e, 64, Hi, t, n)
								}),
								yo = Rn(function(e, t) {
									return On(e, 256, Hi, Hi, Hi, t)
								});

							function bo(e, t) {
								return e === t || e != e && t != t
							}
							var wo = In(et),
								So = In(function(e, t) {
									return t <= e
								}),
								Co = it(function() {
									return arguments
								}()) ? it : function(e) {
									return Lo(e) && y.call(e, "callee") && !k.call(e, "callee")
								},
								Io = I.isArray,
								xo = ml ? zl(ml) : function(e) {
									return Lo(e) && Qe(e) == pa
								};

							function Eo(e) {
								return null != e && _o(e.length) && !Ao(e)
							}

							function Po(e) {
								return Lo(e) && Eo(e)
							}
							var To = G || Bi,
								Oo = vl ? zl(vl) : function(e) {
									return Lo(e) && Qe(e) == ea
								};

							function ko(e) {
								if (!Lo(e)) return !1;
								var t = Qe(e);
								return t == ta || "[object DOMException]" == t || "string" == typeof e.message && "string" == typeof e.name && !Fo(e)
							}

							function Ao(e) {
								if (!Ro(e)) return !1;
								e = Qe(e);
								return e == na || e == ra || "[object AsyncFunction]" == e || "[object Proxy]" == e
							}

							function No(e) {
								return "number" == typeof e && e == Jo(e)
							}

							function _o(e) {
								return "number" == typeof e && -1 < e && e % 1 == 0 && e <= Ji
							}

							function Ro(e) {
								var t = typeof e;
								return null != e && ("object" == t || "function" == t)
							}

							function Lo(e) {
								return null != e && "object" == typeof e
							}
							var Do = hl ? zl(hl) : function(e) {
								return Lo(e) && Vn(e) == oa
							};

							function Mo(e) {
								return "number" == typeof e || Lo(e) && Qe(e) == ia
							}

							function Fo(e) {
								if (!Lo(e) || Qe(e) != aa) return !1;
								e = T(e);
								if (null === e) return !0;
								e = y.call(e, "constructor") && e.constructor;
								return "function" == typeof e && e instanceof e && l.call(e) == g
							}
							var jo = gl ? zl(gl) : function(e) {
								return Lo(e) && Qe(e) == ua
							};
							var Uo = yl ? zl(yl) : function(e) {
								return Lo(e) && Vn(e) == ca
							};

							function Bo(e) {
								return "string" == typeof e || !Io(e) && Lo(e) && Qe(e) == sa
							}

							function Go(e) {
								return "symbol" == typeof e || Lo(e) && Qe(e) == da
							}
							var Ho = bl ? zl(bl) : function(e) {
								return Lo(e) && _o(e.length) && !!ul[Qe(e)]
							};
							var Wo = In(ft),
								zo = In(function(e, t) {
									return e <= t
								});

							function Vo(e) {
								if (!e) return [];
								if (Eo(e)) return (Bo(e) ? ou : rn)(e);
								if (_ && e[_]) return function(e) {
									for (var t, n = []; !(t = e.next()).done;) n.push(t.value);
									return n
								}(e[_]());
								var t = Vn(e);
								return (t == oa ? Ql : t == ca ? nu : bi)(e)
							}

							function qo(e) {
								return e ? (e = Xo(e)) !== 1 / 0 && e !== -1 / 0 ? e == e ? e : 0 : 17976931348623157e292 * (e < 0 ? -1 : 1) : 0 === e ? e : 0
							}

							function Jo(e) {
								var t = qo(e),
									e = t % 1;
								return t == t ? e ? t - e : t : 0
							}

							function Ko(e) {
								return e ? De(Jo(e), 0, Xi) : 0
							}

							function Xo(e) {
								if ("number" == typeof e) return e;
								if (Go(e)) return Ki;
								if (Ro(e) && (e = Ro(t = "function" == typeof e.valueOf ? e.valueOf() : e) ? t + "" : t), "string" != typeof e) return 0 === e ? e : +e;
								e = Wl(e);
								var t = Xa.test(e);
								return t || Ya.test(e) ? dl(e.slice(2), t ? 2 : 8) : Ka.test(e) ? Ki : +e
							}

							function $o(e) {
								return on(e, di(e))
							}

							function Yo(e) {
								return null == e ? "" : Ft(e)
							}
							var Zo = ln(function(e, t) {
									if (er(t) || Eo(t)) on(t, si(t), e);
									else
										for (var n in t) y.call(t, n) && ke(e, n, t[n])
								}),
								Qo = ln(function(e, t) {
									on(t, di(t), e)
								}),
								ei = ln(function(e, t, n, r) {
									on(t, di(t), e, r)
								}),
								ti = ln(function(e, t, n, r) {
									on(t, si(t), e, r)
								}),
								ni = Rn(Le);
							var ri = xt(function(e, t) {
									e = v(e);
									var n = -1,
										r = t.length,
										o = 2 < r ? t[2] : Hi;
									for (o && $n(t[0], t[1], o) && (r = 1); ++n < r;)
										for (var i = t[n], a = di(i), l = -1, u = a.length; ++l < u;) {
											var c = a[l],
												s = e[c];
											(s === Hi || bo(s, m[c]) && !y.call(e, c)) && (e[c] = i[c])
										}
									return e
								}),
								oi = xt(function(e) {
									return e.push(Hi, An), wl(pi, Hi, e)
								});

							function ii(e, t, n) {
								t = null == e ? Hi : Ye(e, t);
								return t === Hi ? n : t
							}

							function ai(e, t) {
								return null != e && qn(e, t, nt)
							}
							var li = gn(function(e, t, n) {
									null != t && "function" != typeof t.toString && (t = h.call(t)), e[t] = n
								}, _i(Li)),
								ui = gn(function(e, t, n) {
									null != t && "function" != typeof t.toString && (t = h.call(t)), y.call(e, t) ? e[t].push(n) : e[t] = [n]
								}, Un),
								ci = xt(ot);

							function si(e) {
								return (Eo(e) ? xe : st)(e)
							}

							function di(e) {
								return Eo(e) ? xe(e, !0) : dt(e)
							}
							var fi = ln(function(e, t, n) {
									ht(e, t, n)
								}),
								pi = ln(function(e, t, n, r) {
									ht(e, t, n, r)
								}),
								mi = Rn(function(t, e) {
									var n = {};
									if (null == t) return n;
									var r = !1;
									e = Ol(e, function(e) {
										return e = Jt(e, t), r = r || 1 < e.length, e
									}), on(t, Dn(t), n), r && (n = Me(n, 7, Nn));
									for (var o = e.length; o--;) Ut(n, e[o]);
									return n
								});
							var vi = Rn(function(e, t) {
								return null == e ? {} : bt(n = e, t, function(e, t) {
									return ai(n, t)
								});
								var n
							});

							function hi(e, n) {
								if (null == e) return {};
								var t = Ol(Dn(e), function(e) {
									return [e]
								});
								return n = Un(n), bt(e, t, function(e, t) {
									return n(e, t[0])
								})
							}
							var gi = Tn(si),
								yi = Tn(di);

							function bi(e) {
								return null == e ? [] : Vl(e, si(e))
							}
							var wi = dn(function(e, t, n) {
								return t = t.toLowerCase(), e + (n ? Si(t) : t)
							});

							function Si(e) {
								return ki(Yo(e).toLowerCase())
							}

							function Ci(e) {
								return (e = Yo(e)) && e.replace(Qa, Xl).replace(rl, "")
							}
							var Ii = dn(function(e, t, n) {
									return e + (n ? "-" : "") + t.toLowerCase()
								}),
								xi = dn(function(e, t, n) {
									return e + (n ? " " : "") + t.toLowerCase()
								}),
								Ei = sn("toLowerCase");
							var Pi = dn(function(e, t, n) {
								return e + (n ? "_" : "") + t.toLowerCase()
							});
							var Ti = dn(function(e, t, n) {
								return e + (n ? " " : "") + ki(t)
							});
							var Oi = dn(function(e, t, n) {
									return e + (n ? " " : "") + t.toUpperCase()
								}),
								ki = sn("toUpperCase");

							function Ai(e, t, n) {
								return e = Yo(e), (t = n ? Hi : t) === Hi ? (n = e, il.test(n) ? e.match(ol) || [] : e.match(Wa) || []) : e.match(t) || []
							}
							var Ni = xt(function(e, t) {
									try {
										return wl(e, Hi, t)
									} catch (e) {
										return ko(e) ? e : new d(e)
									}
								}),
								r = Rn(function(t, e) {
									return Cl(e, function(e) {
										e = vr(e), Re(t, e, lo(t[e], t))
									}), t
								});

							function _i(e) {
								return function() {
									return e
								}
							}
							var Ri = vn(),
								S = vn(!0);

							function Li(e) {
								return e
							}

							function Di(e) {
								return ct("function" == typeof e ? e : Me(e, 1))
							}
							n = xt(function(t, n) {
								return function(e) {
									return ot(e, t, n)
								}
							}), t = xt(function(t, n) {
								return function(e) {
									return ot(t, e, n)
								}
							});

							function Mi(r, t, e) {
								var n = si(t),
									o = $e(t, n);
								null != e || Ro(t) && (o.length || !n.length) || (e = t, t = r, r = this, o = $e(t, si(t)));
								var i = !(Ro(e) && "chain" in e && !e.chain),
									a = Ao(r);
								return Cl(o, function(e) {
									var n = t[e];
									r[e] = n, a && (r.prototype[e] = function() {
										var e = this.__chain__;
										if (i || e) {
											var t = r(this.__wrapped__);
											return (t.__actions__ = rn(this.__actions__)).push({
												func: n,
												args: arguments,
												thisArg: r
											}), t.__chain__ = e, t
										}
										return n.apply(r, kl([this.value()], arguments))
									})
								}), r
							}

							function Fi() {}
							x = bn(Ol), se = bn(xl), D = bn(_l);

							function ji(e) {
								return Yn(e) ? Ul(vr(e)) : (t = e, function(e) {
									return Ye(e, t)
								});
								var t
							}
							Y = Cn(), Q = Cn(!0);

							function Ui() {
								return []
							}

							function Bi() {
								return !1
							}
							te = yn(function(e, t) {
								return e + t
							}, 0), a = En("ceil"), F = yn(function(e, t) {
								return e / t
							}, 1), kt = En("floor");
							var Gi, M = yn(function(e, t) {
									return e * t
								}, 1),
								Kt = En("round"),
								G = yn(function(e, t) {
									return e - t
								}, 0);
							return pe.after = function(e, t) {
								if ("function" != typeof t) throw new C(Wi);
								return e = Jo(e),
									function() {
										if (--e < 1) return t.apply(this, arguments)
									}
							}, pe.ary = io, pe.assign = Zo, pe.assignIn = Qo, pe.assignInWith = ei, pe.assignWith = ti, pe.at = ni, pe.before = ao, pe.bind = lo, pe.bindAll = r, pe.bindKey = uo, pe.castArray = function() {
								if (!arguments.length) return [];
								var e = arguments[0];
								return Io(e) ? e : [e]
							}, pe.chain = zr, pe.chunk = function(e, t, n) {
								t = (n ? $n(e, t, n) : t === Hi) ? 1 : V(Jo(t), 0);
								var r = null == e ? 0 : e.length;
								if (!r || t < 1) return [];
								for (var o = 0, i = 0, a = I(j(r / t)); o < r;) a[i++] = Nt(e, o, o += t);
								return a
							}, pe.compact = function(e) {
								for (var t = -1, n = null == e ? 0 : e.length, r = 0, o = []; ++t < n;) {
									var i = e[t];
									i && (o[r++] = i)
								}
								return o
							}, pe.concat = function() {
								var e = arguments.length;
								if (!e) return [];
								for (var t = I(e - 1), n = arguments[0], r = e; r--;) t[r - 1] = arguments[r];
								return kl(Io(n) ? rn(n) : [n], Ve(t, 1))
							}, pe.cond = function(r) {
								var o = null == r ? 0 : r.length,
									t = Un();
								return r = o ? Ol(r, function(e) {
									if ("function" != typeof e[1]) throw new C(Wi);
									return [t(e[0]), e[1]]
								}) : [], xt(function(e) {
									for (var t = -1; ++t < o;) {
										var n = r[t];
										if (wl(n[0], this, e)) return wl(n[1], this, e)
									}
								})
							}, pe.conforms = function(e) {
								return t = Me(e, 1), n = si(t),
									function(e) {
										return Fe(e, t, n)
									};
								var t, n
							}, pe.constant = _i, pe.countBy = Jr, pe.create = function(e, t) {
								return e = me(e), null == t ? e : _e(e, t)
							}, pe.curry = function e(t, n, r) {
								n = On(t, 8, Hi, Hi, Hi, Hi, Hi, n = r ? Hi : n);
								return n.placeholder = e.placeholder, n
							}, pe.curryRight = function e(t, n, r) {
								n = On(t, 16, Hi, Hi, Hi, Hi, Hi, n = r ? Hi : n);
								return n.placeholder = e.placeholder, n
							}, pe.debounce = co, pe.defaults = ri, pe.defaultsDeep = oi, pe.defer = so, pe.delay = fo, pe.difference = yr, pe.differenceBy = br, pe.differenceWith = wr, pe.drop = function(e, t, n) {
								var r = null == e ? 0 : e.length;
								return r ? Nt(e, (t = n || t === Hi ? 1 : Jo(t)) < 0 ? 0 : t, r) : []
							}, pe.dropRight = function(e, t, n) {
								var r = null == e ? 0 : e.length;
								return r ? Nt(e, 0, (t = r - (t = n || t === Hi ? 1 : Jo(t))) < 0 ? 0 : t) : []
							}, pe.dropRightWhile = function(e, t) {
								return e && e.length ? Gt(e, Un(t, 3), !0, !0) : []
							}, pe.dropWhile = function(e, t) {
								return e && e.length ? Gt(e, Un(t, 3), !0) : []
							}, pe.fill = function(e, t, n, r) {
								var o = null == e ? 0 : e.length;
								return o ? (n && "number" != typeof n && $n(e, t, n) && (n = 0, r = o), function(e, t, n, r) {
									var o = e.length;
									for ((n = Jo(n)) < 0 && (n = o < -n ? 0 : o + n), (r = r === Hi || o < r ? o : Jo(r)) < 0 && (r += o), r = r < n ? 0 : Ko(r); n < r;) e[n++] = t;
									return e
								}(e, t, n, r)) : []
							}, pe.filter = function(e, t) {
								return (Io(e) ? El : ze)(e, Un(t, 3))
							}, pe.flatMap = function(e, t) {
								return Ve(to(e, t), 1)
							}, pe.flatMapDeep = function(e, t) {
								return Ve(to(e, t), 1 / 0)
							}, pe.flatMapDepth = function(e, t, n) {
								return n = n === Hi ? 1 : Jo(n), Ve(to(e, t), n)
							}, pe.flatten = Ir, pe.flattenDeep = function(e) {
								return (null == e ? 0 : e.length) ? Ve(e, 1 / 0) : []
							}, pe.flattenDepth = function(e, t) {
								return (null == e ? 0 : e.length) ? Ve(e, t = t === Hi ? 1 : Jo(t)) : []
							}, pe.flip = function(e) {
								return On(e, 512)
							}, pe.flow = Ri, pe.flowRight = S, pe.fromPairs = function(e) {
								for (var t = -1, n = null == e ? 0 : e.length, r = {}; ++t < n;) {
									var o = e[t];
									r[o[0]] = o[1]
								}
								return r
							}, pe.functions = function(e) {
								return null == e ? [] : $e(e, si(e))
							}, pe.functionsIn = function(e) {
								return null == e ? [] : $e(e, di(e))
							}, pe.groupBy = Zr, pe.initial = function(e) {
								return (null == e ? 0 : e.length) ? Nt(e, 0, -1) : []
							}, pe.intersection = Er, pe.intersectionBy = Pr, pe.intersectionWith = Tr, pe.invert = li, pe.invertBy = ui, pe.invokeMap = Qr, pe.iteratee = Di, pe.keyBy = eo, pe.keys = si, pe.keysIn = di, pe.map = to, pe.mapKeys = function(e, r) {
								var o = {};
								return r = Un(r, 3), Ke(e, function(e, t, n) {
									Re(o, r(e, t, n), e)
								}), o
							}, pe.mapValues = function(e, r) {
								var o = {};
								return r = Un(r, 3), Ke(e, function(e, t, n) {
									Re(o, t, r(e, t, n))
								}), o
							}, pe.matches = function(e) {
								return mt(Me(e, 1))
							}, pe.matchesProperty = function(e, t) {
								return vt(e, Me(t, 1))
							}, pe.memoize = po, pe.merge = fi, pe.mergeWith = pi, pe.method = n, pe.methodOf = t, pe.mixin = Mi, pe.negate = mo, pe.nthArg = function(t) {
								return t = Jo(t), xt(function(e) {
									return gt(e, t)
								})
							}, pe.omit = mi, pe.omitBy = function(e, t) {
								return hi(e, mo(Un(t)))
							}, pe.once = function(e) {
								return ao(2, e)
							}, pe.orderBy = function(e, t, n, r) {
								return null == e ? [] : (Io(t) || (t = null == t ? [] : [t]), Io(n = r ? Hi : n) || (n = null == n ? [] : [n]), yt(e, t, n))
							}, pe.over = x, pe.overArgs = vo, pe.overEvery = se, pe.overSome = D, pe.partial = ho, pe.partialRight = go, pe.partition = no, pe.pick = vi, pe.pickBy = hi, pe.property = ji, pe.propertyOf = function(t) {
								return function(e) {
									return null == t ? Hi : Ye(t, e)
								}
							}, pe.pull = kr, pe.pullAll = Ar, pe.pullAllBy = function(e, t, n) {
								return e && e.length && t && t.length ? wt(e, t, Un(n, 2)) : e
							}, pe.pullAllWith = function(e, t, n) {
								return e && e.length && t && t.length ? wt(e, t, Hi, n) : e
							}, pe.pullAt = Nr, pe.range = Y, pe.rangeRight = Q, pe.rearg = yo, pe.reject = function(e, t) {
								return (Io(e) ? El : ze)(e, mo(Un(t, 3)))
							}, pe.remove = function(e, t) {
								var n = [];
								if (!e || !e.length) return n;
								var r = -1,
									o = [],
									i = e.length;
								for (t = Un(t, 3); ++r < i;) {
									var a = e[r];
									t(a, r, e) && (n.push(a), o.push(r))
								}
								return St(e, o), n
							}, pe.rest = function(e, t) {
								if ("function" != typeof e) throw new C(Wi);
								return xt(e, t = t === Hi ? t : Jo(t))
							}, pe.reverse = _r, pe.sampleSize = function(e, t, n) {
								return t = (n ? $n(e, t, n) : t === Hi) ? 1 : Jo(t), (Io(e) ? Pe : Pt)(e, t)
							}, pe.set = function(e, t, n) {
								return null == e ? e : Tt(e, t, n)
							}, pe.setWith = function(e, t, n, r) {
								return r = "function" == typeof r ? r : Hi, null == e ? e : Tt(e, t, n, r)
							}, pe.shuffle = function(e) {
								return (Io(e) ? Te : At)(e)
							}, pe.slice = function(e, t, n) {
								var r = null == e ? 0 : e.length;
								return r ? (n = n && "number" != typeof n && $n(e, t, n) ? (t = 0, r) : (t = null == t ? 0 : Jo(t), n === Hi ? r : Jo(n)), Nt(e, t, n)) : []
							}, pe.sortBy = ro, pe.sortedUniq = function(e) {
								return e && e.length ? Dt(e) : []
							}, pe.sortedUniqBy = function(e, t) {
								return e && e.length ? Dt(e, Un(t, 2)) : []
							}, pe.split = function(e, t, n) {
								return n && "number" != typeof n && $n(e, t, n) && (t = n = Hi), (n = n === Hi ? Xi : n >>> 0) ? (e = Yo(e)) && ("string" == typeof t || null != t && !jo(t)) && !(t = Ft(t)) && Zl(e) ? Xt(ou(e), 0, n) : e.split(t, n) : []
							}, pe.spread = function(n, r) {
								if ("function" != typeof n) throw new C(Wi);
								return r = null == r ? 0 : V(Jo(r), 0), xt(function(e) {
									var t = e[r],
										e = Xt(e, 0, r);
									return t && kl(e, t), wl(n, this, e)
								})
							}, pe.tail = function(e) {
								var t = null == e ? 0 : e.length;
								return t ? Nt(e, 1, t) : []
							}, pe.take = function(e, t, n) {
								return e && e.length ? Nt(e, 0, (t = n || t === Hi ? 1 : Jo(t)) < 0 ? 0 : t) : []
							}, pe.takeRight = function(e, t, n) {
								var r = null == e ? 0 : e.length;
								return r ? Nt(e, (t = r - (t = n || t === Hi ? 1 : Jo(t))) < 0 ? 0 : t, r) : []
							}, pe.takeRightWhile = function(e, t) {
								return e && e.length ? Gt(e, Un(t, 3), !1, !0) : []
							}, pe.takeWhile = function(e, t) {
								return e && e.length ? Gt(e, Un(t, 3)) : []
							}, pe.tap = function(e, t) {
								return t(e), e
							}, pe.throttle = function(e, t, n) {
								var r = !0,
									o = !0;
								if ("function" != typeof e) throw new C(Wi);
								return Ro(n) && (r = "leading" in n ? !!n.leading : r, o = "trailing" in n ? !!n.trailing : o), co(e, t, {
									leading: r,
									maxWait: t,
									trailing: o
								})
							}, pe.thru = Vr, pe.toArray = Vo, pe.toPairs = gi, pe.toPairsIn = yi, pe.toPath = function(e) {
								return Io(e) ? Ol(e, vr) : Go(e) ? [e] : rn(mr(Yo(e)))
							}, pe.toPlainObject = $o, pe.transform = function(e, r, o) {
								var t, n = Io(e),
									i = n || To(e) || Ho(e);
								return r = Un(r, 4), null == o && (t = e && e.constructor, o = i ? n ? new t : [] : Ro(e) && Ao(t) ? me(T(e)) : {}), (i ? Cl : Ke)(e, function(e, t, n) {
									return r(o, e, t, n)
								}), o
							}, pe.unary = function(e) {
								return io(e, 1)
							}, pe.union = Rr, pe.unionBy = Lr, pe.unionWith = Dr, pe.uniq = function(e) {
								return e && e.length ? jt(e) : []
							}, pe.uniqBy = function(e, t) {
								return e && e.length ? jt(e, Un(t, 2)) : []
							}, pe.uniqWith = function(e, t) {
								return t = "function" == typeof t ? t : Hi, e && e.length ? jt(e, Hi, t) : []
							}, pe.unset = function(e, t) {
								return null == e || Ut(e, t)
							}, pe.unzip = Mr, pe.unzipWith = Fr, pe.update = function(e, t, n) {
								return null == e ? e : Bt(e, t, qt(n))
							}, pe.updateWith = function(e, t, n, r) {
								return r = "function" == typeof r ? r : Hi, null == e ? e : Bt(e, t, qt(n), r)
							}, pe.values = bi, pe.valuesIn = function(e) {
								return null == e ? [] : Vl(e, di(e))
							}, pe.without = jr, pe.words = Ai, pe.wrap = function(e, t) {
								return ho(qt(t), e)
							}, pe.xor = Ur, pe.xorBy = Br, pe.xorWith = Gr, pe.zip = Hr, pe.zipObject = function(e, t) {
								return zt(e || [], t || [], ke)
							}, pe.zipObjectDeep = function(e, t) {
								return zt(e || [], t || [], Tt)
							}, pe.zipWith = Wr, pe.entries = gi, pe.entriesIn = yi, pe.extend = Qo, pe.extendWith = ei, Mi(pe, pe), pe.add = te, pe.attempt = Ni, pe.camelCase = wi, pe.capitalize = Si, pe.ceil = a, pe.clamp = function(e, t, n) {
								return n === Hi && (n = t, t = Hi), n !== Hi && (n = (n = Xo(n)) == n ? n : 0), t !== Hi && (t = (t = Xo(t)) == t ? t : 0), De(Xo(e), t, n)
							}, pe.clone = function(e) {
								return Me(e, 4)
							}, pe.cloneDeep = function(e) {
								return Me(e, 5)
							}, pe.cloneDeepWith = function(e, t) {
								return Me(e, 5, t = "function" == typeof t ? t : Hi)
							}, pe.cloneWith = function(e, t) {
								return Me(e, 4, t = "function" == typeof t ? t : Hi)
							}, pe.conformsTo = function(e, t) {
								return null == t || Fe(e, t, si(t))
							}, pe.deburr = Ci, pe.defaultTo = function(e, t) {
								return null == e || e != e ? t : e
							}, pe.divide = F, pe.endsWith = function(e, t, n) {
								e = Yo(e), t = Ft(t);
								var r = e.length,
									r = n = n === Hi ? r : De(Jo(n), 0, r);
								return 0 <= (n -= t.length) && e.slice(n, r) == t
							}, pe.eq = bo, pe.escape = function(e) {
								return (e = Yo(e)) && Aa.test(e) ? e.replace(Oa, $l) : e
							}, pe.escapeRegExp = function(e) {
								return (e = Yo(e)) && ja.test(e) ? e.replace(Fa, "\\$&") : e
							}, pe.every = function(e, t, n) {
								var r = Io(e) ? xl : He;
								return n && $n(e, t, n) && (t = Hi), r(e, Un(t, 3))
							}, pe.find = Kr, pe.findIndex = Sr, pe.findKey = function(e, t) {
								return Rl(e, Un(t, 3), Ke)
							}, pe.findLast = Xr, pe.findLastIndex = Cr, pe.findLastKey = function(e, t) {
								return Rl(e, Un(t, 3), Xe)
							}, pe.floor = kt, pe.forEach = $r, pe.forEachRight = Yr, pe.forIn = function(e, t) {
								return null == e ? e : qe(e, Un(t, 3), di)
							}, pe.forInRight = function(e, t) {
								return null == e ? e : Je(e, Un(t, 3), di)
							}, pe.forOwn = function(e, t) {
								return e && Ke(e, Un(t, 3))
							}, pe.forOwnRight = function(e, t) {
								return e && Xe(e, Un(t, 3))
							}, pe.get = ii, pe.gt = wo, pe.gte = So, pe.has = function(e, t) {
								return null != e && qn(e, t, tt)
							}, pe.hasIn = ai, pe.head = xr, pe.identity = Li, pe.includes = function(e, t, n, r) {
								return e = Eo(e) ? e : bi(e), n = n && !r ? Jo(n) : 0, r = e.length, n < 0 && (n = V(r + n, 0)), Bo(e) ? n <= r && -1 < e.indexOf(t, n) : !!r && -1 < Dl(e, t, n)
							}, pe.indexOf = function(e, t, n) {
								var r = null == e ? 0 : e.length;
								return r ? ((n = null == n ? 0 : Jo(n)) < 0 && (n = V(r + n, 0)), Dl(e, t, n)) : -1
							}, pe.inRange = function(e, t, n) {
								return t = qo(t), n === Hi ? (n = t, t = 0) : n = qo(n), (e = e = Xo(e)) >= q(t = t, n = n) && e < V(t, n)
							}, pe.invoke = ci, pe.isArguments = Co, pe.isArray = Io, pe.isArrayBuffer = xo, pe.isArrayLike = Eo, pe.isArrayLikeObject = Po, pe.isBoolean = function(e) {
								return !0 === e || !1 === e || Lo(e) && Qe(e) == Qi
							}, pe.isBuffer = To, pe.isDate = Oo, pe.isElement = function(e) {
								return Lo(e) && 1 === e.nodeType && !Fo(e)
							}, pe.isEmpty = function(e) {
								if (null == e) return !0;
								if (Eo(e) && (Io(e) || "string" == typeof e || "function" == typeof e.splice || To(e) || Ho(e) || Co(e))) return !e.length;
								var t, n = Vn(e);
								if (n == oa || n == ca) return !e.size;
								if (er(e)) return !st(e).length;
								for (t in e)
									if (y.call(e, t)) return !1;
								return !0
							}, pe.isEqual = function(e, t) {
								return at(e, t)
							}, pe.isEqualWith = function(e, t, n) {
								var r = (n = "function" == typeof n ? n : Hi) ? n(e, t) : Hi;
								return r === Hi ? at(e, t, Hi, n) : !!r
							}, pe.isError = ko, pe.isFinite = function(e) {
								return "number" == typeof e && H(e)
							}, pe.isFunction = Ao, pe.isInteger = No, pe.isLength = _o, pe.isMap = Do, pe.isMatch = function(e, t) {
								return e === t || lt(e, t, Gn(t))
							}, pe.isMatchWith = function(e, t, n) {
								return n = "function" == typeof n ? n : Hi, lt(e, t, Gn(t), n)
							}, pe.isNaN = function(e) {
								return Mo(e) && e != +e
							}, pe.isNative = function(e) {
								if (Qn(e)) throw new d("Unsupported core-js use. Try https://npms.io/search?q=ponyfill.");
								return ut(e)
							}, pe.isNil = function(e) {
								return null == e
							}, pe.isNull = function(e) {
								return null === e
							}, pe.isNumber = Mo, pe.isObject = Ro, pe.isObjectLike = Lo, pe.isPlainObject = Fo, pe.isRegExp = jo, pe.isSafeInteger = function(e) {
								return No(e) && -Ji <= e && e <= Ji
							}, pe.isSet = Uo, pe.isString = Bo, pe.isSymbol = Go, pe.isTypedArray = Ho, pe.isUndefined = function(e) {
								return e === Hi
							}, pe.isWeakMap = function(e) {
								return Lo(e) && Vn(e) == fa
							}, pe.isWeakSet = function(e) {
								return Lo(e) && "[object WeakSet]" == Qe(e)
							}, pe.join = function(e, t) {
								return null == e ? "" : W.call(e, t)
							}, pe.kebabCase = Ii, pe.last = Or, pe.lastIndexOf = function(e, t, n) {
								var r = null == e ? 0 : e.length;
								if (!r) return -1;
								var o = r;
								return n !== Hi && (o = (o = Jo(n)) < 0 ? V(r + o, 0) : q(o, r - 1)), t == t ? function(e, t, n) {
									for (var r = n + 1; r--;)
										if (e[r] === t) return r;
									return r
								}(e, t, o) : Ll(e, Fl, o, !0)
							}, pe.lowerCase = xi, pe.lowerFirst = Ei, pe.lt = Wo, pe.lte = zo, pe.max = function(e) {
								return e && e.length ? We(e, Li, et) : Hi
							}, pe.maxBy = function(e, t) {
								return e && e.length ? We(e, Un(t, 2), et) : Hi
							}, pe.mean = function(e) {
								return jl(e, Li)
							}, pe.meanBy = function(e, t) {
								return jl(e, Un(t, 2))
							}, pe.min = function(e) {
								return e && e.length ? We(e, Li, ft) : Hi
							}, pe.minBy = function(e, t) {
								return e && e.length ? We(e, Un(t, 2), ft) : Hi
							}, pe.stubArray = Ui, pe.stubFalse = Bi, pe.stubObject = function() {
								return {}
							}, pe.stubString = function() {
								return ""
							}, pe.stubTrue = function() {
								return !0
							}, pe.multiply = M, pe.nth = function(e, t) {
								return e && e.length ? gt(e, Jo(t)) : Hi
							}, pe.noConflict = function() {
								return fl._ === this && (fl._ = b), this
							}, pe.noop = Fi, pe.now = oo, pe.pad = function(e, t, n) {
								e = Yo(e);
								var r = (t = Jo(t)) ? ru(e) : 0;
								return !t || t <= r ? e : wn(U(r = (t - r) / 2), n) + e + wn(j(r), n)
							}, pe.padEnd = function(e, t, n) {
								e = Yo(e);
								var r = (t = Jo(t)) ? ru(e) : 0;
								return t && r < t ? e + wn(t - r, n) : e
							}, pe.padStart = function(e, t, n) {
								e = Yo(e);
								var r = (t = Jo(t)) ? ru(e) : 0;
								return t && r < t ? wn(t - r, n) + e : e
							}, pe.parseInt = function(e, t, n) {
								return t = n || null == t ? 0 : t && +t, K(Yo(e).replace(Ua, ""), t || 0)
							}, pe.random = function(e, t, n) {
								var r;
								if (n && "boolean" != typeof n && $n(e, t, n) && (t = n = Hi), n === Hi && ("boolean" == typeof t ? (n = t, t = Hi) : "boolean" == typeof e && (n = e, e = Hi)), e === Hi && t === Hi ? (e = 0, t = 1) : (e = qo(e), t === Hi ? (t = e, e = 0) : t = qo(t)), t < e && (r = e, e = t, t = r), n || e % 1 || t % 1) {
									n = X();
									return q(e + n * (t - e + sl("1e-" + ((n + "").length - 1))), t)
								}
								return Ct(e, t)
							}, pe.reduce = function(e, t, n) {
								var r = Io(e) ? Al : Bl,
									o = arguments.length < 3;
								return r(e, Un(t, 4), n, o, Be)
							}, pe.reduceRight = function(e, t, n) {
								var r = Io(e) ? Nl : Bl,
									o = arguments.length < 3;
								return r(e, Un(t, 4), n, o, Ge)
							}, pe.repeat = function(e, t, n) {
								return t = (n ? $n(e, t, n) : t === Hi) ? 1 : Jo(t), It(Yo(e), t)
							}, pe.replace = function() {
								var e = arguments,
									t = Yo(e[0]);
								return e.length < 3 ? t : t.replace(e[1], e[2])
							}, pe.result = function(e, t, n) {
								var r = -1,
									o = (t = Jt(t, e)).length;
								for (o || (o = 1, e = Hi); ++r < o;) {
									var i = null == e ? Hi : e[vr(t[r])];
									i === Hi && (r = o, i = n), e = Ao(i) ? i.call(e) : i
								}
								return e
							}, pe.round = Kt, pe.runInContext = e, pe.sample = function(e) {
								return (Io(e) ? Ee : Et)(e)
							}, pe.size = function(e) {
								if (null == e) return 0;
								if (Eo(e)) return Bo(e) ? ru(e) : e.length;
								var t = Vn(e);
								return t == oa || t == ca ? e.size : st(e).length
							}, pe.snakeCase = Pi, pe.some = function(e, t, n) {
								var r = Io(e) ? _l : _t;
								return n && $n(e, t, n) && (t = Hi), r(e, Un(t, 3))
							}, pe.sortedIndex = function(e, t) {
								return Rt(e, t)
							}, pe.sortedIndexBy = function(e, t, n) {
								return Lt(e, t, Un(n, 2))
							}, pe.sortedIndexOf = function(e, t) {
								var n = null == e ? 0 : e.length;
								if (n) {
									var r = Rt(e, t);
									if (r < n && bo(e[r], t)) return r
								}
								return -1
							}, pe.sortedLastIndex = function(e, t) {
								return Rt(e, t, !0)
							}, pe.sortedLastIndexBy = function(e, t, n) {
								return Lt(e, t, Un(n, 2), !0)
							}, pe.sortedLastIndexOf = function(e, t) {
								if (null == e ? 0 : e.length) {
									var n = Rt(e, t, !0) - 1;
									if (bo(e[n], t)) return n
								}
								return -1
							}, pe.startCase = Ti, pe.startsWith = function(e, t, n) {
								return e = Yo(e), n = null == n ? 0 : De(Jo(n), 0, e.length), t = Ft(t), e.slice(n, n + t.length) == t
							}, pe.subtract = G, pe.sum = function(e) {
								return e && e.length ? Gl(e, Li) : 0
							}, pe.sumBy = function(e, t) {
								return e && e.length ? Gl(e, Un(t, 2)) : 0
							}, pe.template = function(a, e, t) {
								var n = pe.templateSettings;
								t && $n(a, e, t) && (e = Hi), a = Yo(a), e = ei({}, e, n, kn);
								var l, u, r = si(n = ei({}, e.imports, n.imports, kn)),
									o = Vl(n, r),
									c = 0,
									n = e.interpolate || el,
									s = "__p += '",
									n = p((e.escape || el).source + "|" + n.source + "|" + (n === Ra ? qa : el).source + "|" + (e.evaluate || el).source + "|$", "g"),
									i = "//# sourceURL=" + (y.call(e, "sourceURL") ? (e.sourceURL + "").replace(/\s/g, " ") : "lodash.templateSources[" + ++ll + "]") + "\n";
								if (a.replace(n, function(e, t, n, r, o, i) {
										return n = n || r, s += a.slice(c, i).replace(tl, Yl), t && (l = !0, s += "' +\n__e(" + t + ") +\n'"), o && (u = !0, s += "';\n" + o + ";\n__p += '"), n && (s += "' +\n((__t = (" + n + ")) == null ? '' : __t) +\n'"), c = i + e.length, e
									}), s += "';\n", e = y.call(e, "variable") && e.variable) {
									if (za.test(e)) throw new d("Invalid `variable` option passed into `_.template`")
								} else s = "with (obj) {\n" + s + "\n}\n";
								if (s = (u ? s.replace(xa, "") : s).replace(Ea, "$1").replace(Pa, "$1;"), s = "function(" + (e || "obj") + ") {\n" + (e ? "" : "obj || (obj = {});\n") + "var __t, __p = ''" + (l ? ", __e = _.escape" : "") + (u ? ", __j = Array.prototype.join;\nfunction print() { __p += __j.call(arguments, '') }\n" : ";\n") + s + "return __p\n}", (e = Ni(function() {
										return f(r, i + "return " + s).apply(Hi, o)
									})).source = s, ko(e)) throw e;
								return e
							}, pe.times = function(e, t) {
								if ((e = Jo(e)) < 1 || Ji < e) return [];
								var n = Xi,
									r = q(e, Xi);
								for (t = Un(t), e -= Xi, r = Hl(r, t); ++n < e;) t(n);
								return r
							}, pe.toFinite = qo, pe.toInteger = Jo, pe.toLength = Ko, pe.toLower = function(e) {
								return Yo(e).toLowerCase()
							}, pe.toNumber = Xo, pe.toSafeInteger = function(e) {
								return e ? De(Jo(e), -Ji, Ji) : 0 === e ? e : 0
							}, pe.toString = Yo, pe.toUpper = function(e) {
								return Yo(e).toUpperCase()
							}, pe.trim = function(e, t, n) {
								return (e = Yo(e)) && (n || t === Hi) ? Wl(e) : e && (t = Ft(t)) ? (e = ou(e), t = ou(t), Xt(e, Jl(e, t), Kl(e, t) + 1).join("")) : e
							}, pe.trimEnd = function(e, t, n) {
								return (e = Yo(e)) && (n || t === Hi) ? e.slice(0, iu(e) + 1) : e && (t = Ft(t)) ? Xt(e = ou(e), 0, Kl(e, ou(t)) + 1).join("") : e
							}, pe.trimStart = function(e, t, n) {
								return (e = Yo(e)) && (n || t === Hi) ? e.replace(Ua, "") : e && (t = Ft(t)) ? Xt(e = ou(e), Jl(e, ou(t))).join("") : e
							}, pe.truncate = function(e, t) {
								var n, r = 30,
									o = "...";
								Ro(t) && (n = "separator" in t ? t.separator : n, r = "length" in t ? Jo(t.length) : r, o = "omission" in t ? Ft(t.omission) : o);
								var i, t = (e = Yo(e)).length;
								if (Zl(e) && (t = (i = ou(e)).length), t <= r) return e;
								if ((t = r - ru(o)) < 1) return o;
								if (r = i ? Xt(i, 0, t).join("") : e.slice(0, t), n === Hi) return r + o;
								if (i && (t += r.length - t), jo(n)) {
									if (e.slice(t).search(n)) {
										var a, l = r;
										for (n.global || (n = p(n.source, Yo(Ja.exec(n)) + "g")), n.lastIndex = 0; a = n.exec(l);) var u = a.index;
										r = r.slice(0, u === Hi ? t : u)
									}
								} else e.indexOf(Ft(n), t) == t || -1 < (t = r.lastIndexOf(n)) && (r = r.slice(0, t));
								return r + o
							}, pe.unescape = function(e) {
								return (e = Yo(e)) && ka.test(e) ? e.replace(Ta, au) : e
							}, pe.uniqueId = function(e) {
								var t = ++u;
								return Yo(e) + t
							}, pe.upperCase = Oi, pe.upperFirst = ki, pe.each = $r, pe.eachRight = Yr, pe.first = xr, Mi(pe, (Gi = {}, Ke(pe, function(e, t) {
								y.call(pe.prototype, t) || (Gi[t] = e)
							}), Gi), {
								chain: !1
							}), pe.VERSION = "4.17.21", Cl(["bind", "bindKey", "curry", "curryRight", "partial", "partialRight"], function(e) {
								pe[e].placeholder = pe
							}), Cl(["drop", "take"], function(n, r) {
								ye.prototype[n] = function(e) {
									e = e === Hi ? 1 : V(Jo(e), 0);
									var t = this.__filtered__ && !r ? new ye(this) : this.clone();
									return t.__filtered__ ? t.__takeCount__ = q(e, t.__takeCount__) : t.__views__.push({
										size: q(e, Xi),
										type: n + (t.__dir__ < 0 ? "Right" : "")
									}), t
								}, ye.prototype[n + "Right"] = function(e) {
									return this.reverse()[n](e).reverse()
								}
							}), Cl(["filter", "map", "takeWhile"], function(e, t) {
								var n = t + 1,
									r = 1 == n || 3 == n;
								ye.prototype[e] = function(e) {
									var t = this.clone();
									return t.__iteratees__.push({
										iteratee: Un(e, 3),
										type: n
									}), t.__filtered__ = t.__filtered__ || r, t
								}
							}), Cl(["head", "last"], function(e, t) {
								var n = "take" + (t ? "Right" : "");
								ye.prototype[e] = function() {
									return this[n](1).value()[0]
								}
							}), Cl(["initial", "tail"], function(e, t) {
								var n = "drop" + (t ? "" : "Right");
								ye.prototype[e] = function() {
									return this.__filtered__ ? new ye(this) : this[n](1)
								}
							}), ye.prototype.compact = function() {
								return this.filter(Li)
							}, ye.prototype.find = function(e) {
								return this.filter(e).head()
							}, ye.prototype.findLast = function(e) {
								return this.reverse().find(e)
							}, ye.prototype.invokeMap = xt(function(t, n) {
								return "function" == typeof t ? new ye(this) : this.map(function(e) {
									return ot(e, t, n)
								})
							}), ye.prototype.reject = function(e) {
								return this.filter(mo(Un(e)))
							}, ye.prototype.slice = function(e, t) {
								e = Jo(e);
								var n = this;
								return n.__filtered__ && (0 < e || t < 0) ? new ye(n) : (e < 0 ? n = n.takeRight(-e) : e && (n = n.drop(e)), t !== Hi && (n = (t = Jo(t)) < 0 ? n.dropRight(-t) : n.take(t - e)), n)
							}, ye.prototype.takeRightWhile = function(e) {
								return this.reverse().takeWhile(e).reverse()
							}, ye.prototype.toArray = function() {
								return this.take(Xi)
							}, Ke(ye.prototype, function(c, e) {
								var s = /^(?:filter|find|map|reject)|While$/.test(e),
									d = /^(?:head|last)$/.test(e),
									f = pe[d ? "take" + ("last" == e ? "Right" : "") : e],
									p = d || /^find/.test(e);
								f && (pe.prototype[e] = function() {
									function e(e) {
										return e = f.apply(pe, kl([e], n)), d && a ? e[0] : e
									}
									var t = this.__wrapped__,
										n = d ? [1] : arguments,
										r = t instanceof ye,
										o = n[0],
										i = r || Io(t);
									i && s && "function" == typeof o && 1 != o.length && (r = i = !1);
									var a = this.__chain__,
										l = !!this.__actions__.length,
										o = p && !a,
										l = r && !l;
									if (p || !i) return o && l ? c.apply(this, n) : (u = this.thru(e), o ? d ? u.value()[0] : u.value() : u);
									t = l ? t : new ye(this);
									var u = c.apply(t, n);
									return u.__actions__.push({
										func: Vr,
										args: [e],
										thisArg: Hi
									}), new ge(u, a)
								})
							}), Cl(["pop", "push", "shift", "sort", "splice", "unshift"], function(e) {
								var n = i[e],
									r = /^(?:push|sort|unshift)$/.test(e) ? "tap" : "thru",
									o = /^(?:pop|shift)$/.test(e);
								pe.prototype[e] = function() {
									var t = arguments;
									if (!o || this.__chain__) return this[r](function(e) {
										return n.apply(Io(e) ? e : [], t)
									});
									var e = this.value();
									return n.apply(Io(e) ? e : [], t)
								}
							}), Ke(ye.prototype, function(e, t) {
								var n, r = pe[t];
								r && (n = r.name + "", y.call(oe, n) || (oe[n] = []), oe[n].push({
									name: t,
									func: r
								}))
							}), oe[hn(Hi, 2).name] = [{
								name: "wrapper",
								func: Hi
							}], ye.prototype.clone = function() {
								var e = new ye(this.__wrapped__);
								return e.__actions__ = rn(this.__actions__), e.__dir__ = this.__dir__, e.__filtered__ = this.__filtered__, e.__iteratees__ = rn(this.__iteratees__), e.__takeCount__ = this.__takeCount__, e.__views__ = rn(this.__views__), e
							}, ye.prototype.reverse = function() {
								var e;
								return this.__filtered__ ? ((e = new ye(this)).__dir__ = -1, e.__filtered__ = !0) : (e = this.clone()).__dir__ *= -1, e
							}, ye.prototype.value = function() {
								var e = this.__wrapped__.value(),
									t = this.__dir__,
									n = Io(e),
									r = t < 0,
									o = n ? e.length : 0,
									i = function(e, t, n) {
										var r = -1,
											o = n.length;
										for (; ++r < o;) {
											var i = n[r],
												a = i.size;
											switch (i.type) {
												case "drop":
													e += a;
													break;
												case "dropRight":
													t -= a;
													break;
												case "take":
													t = q(t, e + a);
													break;
												case "takeRight":
													e = V(e, t - a)
											}
										}
										return {
											start: e,
											end: t
										}
									}(0, o, this.__views__),
									a = i.start,
									l = (i = i.end) - a,
									u = r ? i : a - 1,
									c = this.__iteratees__,
									s = c.length,
									d = 0,
									f = q(l, this.__takeCount__);
								if (!n || !r && o == l && f == l) return Ht(e, this.__actions__);
								var p = [];
								e: for (; l-- && d < f;) {
									for (var m = -1, v = e[u += t]; ++m < s;) {
										var h = c[m],
											g = h.iteratee,
											h = h.type,
											g = g(v);
										if (2 == h) v = g;
										else if (!g) {
											if (1 == h) continue e;
											break e
										}
									}
									p[d++] = v
								}
								return p
							}, pe.prototype.at = qr, pe.prototype.chain = function() {
								return zr(this)
							}, pe.prototype.commit = function() {
								return new ge(this.value(), this.__chain__)
							}, pe.prototype.next = function() {
								this.__values__ === Hi && (this.__values__ = Vo(this.value()));
								var e = this.__index__ >= this.__values__.length;
								return {
									done: e,
									value: e ? Hi : this.__values__[this.__index__++]
								}
							}, pe.prototype.plant = function(e) {
								for (var t, n = this; n instanceof he;) {
									var r = gr(n);
									r.__index__ = 0, r.__values__ = Hi, t ? o.__wrapped__ = r : t = r;
									var o = r,
										n = n.__wrapped__
								}
								return o.__wrapped__ = e, t
							}, pe.prototype.reverse = function() {
								var e = this.__wrapped__;
								if (e instanceof ye) {
									e = e;
									return this.__actions__.length && (e = new ye(this)), (e = e.reverse()).__actions__.push({
										func: Vr,
										args: [_r],
										thisArg: Hi
									}), new ge(e, this.__chain__)
								}
								return this.thru(_r)
							}, pe.prototype.toJSON = pe.prototype.valueOf = pe.prototype.value = function() {
								return Ht(this.__wrapped__, this.__actions__)
							}, pe.prototype.first = pe.prototype.head, _ && (pe.prototype[_] = function() {
								return this
							}), pe
						}();
						fl._ = lu, (R = function() {
							return lu
						}.call(N, _, N, A)) === Hi || (A.exports = R)
					}.call(this)
			},
			1513: function(e) {
				"use strict";
				/*
				object-assign
				(c) Sindre Sorhus
				@license MIT
				*/
				var u = Object.getOwnPropertySymbols,
					c = Object.prototype.hasOwnProperty,
					s = Object.prototype.propertyIsEnumerable;
				e.exports = function() {
					try {
						if (!Object.assign) return;
						var e = new String("abc");
						if (e[5] = "de", "5" === Object.getOwnPropertyNames(e)[0]) return;
						for (var t = {}, n = 0; n < 10; n++) t["_" + String.fromCharCode(n)] = n;
						if ("0123456789" !== Object.getOwnPropertyNames(t).map(function(e) {
								return t[e]
							}).join("")) return;
						var r = {};
						return "abcdefghijklmnopqrst".split("").forEach(function(e) {
							r[e] = e
						}), "abcdefghijklmnopqrst" !== Object.keys(Object.assign({}, r)).join("") ? void 0 : 1
					} catch (e) {
						return
					}
				}() ? Object.assign : function(e, t) {
					for (var n, r, o = function(e) {
							if (null == e) throw new TypeError("Object.assign cannot be called with null or undefined");
							return Object(e)
						}(e), i = 1; i < arguments.length; i++) {
						for (var a in n = Object(arguments[i])) c.call(n, a) && (o[a] = n[a]);
						if (u) {
							r = u(n);
							for (var l = 0; l < r.length; l++) s.call(n, r[l]) && (o[r[l]] = n[r[l]])
						}
					}
					return o
				}
			},
			1594: function(e) {
				"use strict";
				e.exports = React
			},
			4452: function(e, t) {
				var n;
				/*!
					Copyright (c) 2018 Jed Watson.
					Licensed under the MIT License (MIT), see
					http://jedwatson.github.io/classnames
				*/
				! function() {
					"use strict";
					var r = {}.hasOwnProperty;

					function o() {
						for (var e = "", t = 0; t < arguments.length; t++) {
							var n = arguments[t];
							n && (e = i(e, function(e) {
								if ("string" == typeof e || "number" == typeof e) return e;
								if ("object" != typeof e) return "";
								if (Array.isArray(e)) return o.apply(null, e);
								if (e.toString !== Object.prototype.toString && !e.toString.toString().includes("[native code]")) return e.toString();
								var t, n = "";
								for (t in e) r.call(e, t) && e[t] && (n = i(n, t));
								return n
							}(n)))
						}
						return e
					}

					function i(e, t) {
						return t ? e ? e + " " + t : e + t : e
					}
					e.exports ? (o.default = o, e.exports = o) : void 0 === (n = function() {
						return o
					}.apply(t, [])) || (e.exports = n)
				}()
			}
		},
		r = {};

	function $g(e) {
		var t = r[e];
		if (void 0 !== t) return t.exports;
		t = r[e] = {
			id: e,
			loaded: !1,
			exports: {}
		};
		return n[e].call(t.exports, t, t.exports, $g), t.loaded = !0, t.exports
	}
	$g.n = function(e) {
			var t = e && e.__esModule ? function() {
				return e.default
			} : function() {
				return e
			};
			return $g.d(t, {
				a: t
			}), t
		}, $g.d = function(e, t) {
			for (var n in t) $g.o(t, n) && !$g.o(e, n) && Object.defineProperty(e, n, {
				enumerable: !0,
				get: t[n]
			})
		}, $g.g = function() {
			if ("object" == typeof globalThis) return globalThis;
			try {
				return this || new Function("return this")()
			} catch (e) {
				if ("object" == typeof window) return window
			}
		}(), $g.o = function(e, t) {
			return Object.prototype.hasOwnProperty.call(e, t)
		}, $g.nmd = function(e) {
			return e.paths = [], e.children || (e.children = []), e
		}, $g.nc = void 0,
		function() {
			"use strict";
			var C, I, x, K, L, D, M, X = $g(1594),
				$ = $g.n(X),
				_ = ReactDOM,
				l = $g.n(_),
				N = CoreUtilities,
				E = window.EventTracker ? EventTracker : {
					fireEvent: console.log,
					start: console.log,
					endSuccess: console.log,
					endCancel: console.log,
					endFailure: console.log
				},
				p = ReactUtilities,
				P = CoreRobloxUtilities,
				T = Roblox,
				r = T.EnvironmentUrls.apiGatewayUrl,
				a = {
					getExperimentationValues: function(e, t, n) {
						return {
							url: r + "/product-experimentation-platform/v1/projects/" + e + "/layers/" + t + "/values?parameters=" + n.join(","),
							withCredentials: !0
						}
					}
				},
				e = {
					homePage: {},
					homePageWeb: {
						IsExpandHomeContentEnabled: !0
					},
					gridUi: {
						IsNewSortHeaderEnabled: !1,
						IsCarouselHorizontalScrollEnabled: !1,
						IsNewScrollArrowsEnabled: !1
					},
					serverTab: {
						ShouldDisableJoinButtonForFullServers: !1
					},
					gameDetails: {
						ShouldHidePrivateServersInAboutTab: !1,
						IsGameStorePreviewEnabled: !1
					},
					gameDetailsExposure: {
						IsEventsSectionUprankEnabled: !1,
						IsEventsSectionRedesignEnabled: !1
					},
					searchPage: {
						ShouldUseOmniSearchAPI: !1
					},
					discoverPage: {
						IsMusicChartsCarouselEnabled: !1
					},
					tileLayer: {},
					playButton: {}
				},
				t = {
					homePage: "PlayerApp.HomePage.UX",
					homePageWeb: "Website.Homepage",
					gridUi: "PlayerApp.GridUI",
					serverTab: "GameDetails.ServersTab",
					gameDetails: "Website.GameDetails",
					gameDetailsExposure: "Website.GameDetails.Exposure",
					searchPage: "Website.SearchResultsPage",
					discoverPage: "Website.GamesPage",
					tileLayer: "Website.TileLayer",
					playButton: "Website.PlayButton"
				},
				n = T.EnvironmentUrls.apiGatewayUrl,
				c = {
					url: {
						getOmniRecommendations: {
							url: n + "/discovery-api/omni-recommendation",
							withCredentials: !0
						},
						getOmniRecommendationsMetadata: {
							url: n + "/discovery-api/omni-recommendation-metadata",
							withCredentials: !0
						},
						getOmniSearch: {
							url: n + "/search-api/omni-search",
							withCredentials: !0
						},
						getExploreSorts: {
							url: n + "/explore-api/v1/get-sorts",
							withCredentials: !0
						},
						getExploreSortContents: {
							url: n + "/explore-api/v1/get-sort-content",
							withCredentials: !0
						},
						getSearchLandingPage: {
							url: n + "/search-api/search-landing-page",
							withCredentials: !0
						},
						getSurvey: function(e) {
							return {
								url: n + "/rocap/v1/locations/" + e + "/prompts",
								withCredentials: !0
							}
						},
						postSurveyResults: function(e) {
							return {
								url: n + "/rocap/v1/locations/" + e + "/annotations",
								withCredentials: !0
							}
						},
						getWebFriendsRenamePoliciesGuacPolicy: function() {
							return {
								url: n + "/universal-app-configuration/v1/behaviors/web-rename-friends/content",
								withCredentials: !0
							}
						},
						getLandingPageData: function() {
							return {
								url: n + "/landing-page-api/landing-page",
								withCredentials: !0
							}
						}
					}
				};
			(It = C = C || {}).Game = "Game", It.CatalogAsset = "CatalogAsset", It.CatalogBundle = "CatalogBundle", (fr = I = I || {}).Carousel = "Carousel", fr.AvatarCarousel = "AvatarCarousel", fr.SortlessGrid = "SortlessGrid", fr.FriendCarousel = "FriendCarousel", fr.InterestGrid = "InterestGrid", fr.Pills = "Pills", fr.Sdui = "sdui", fr.SongCarousel = "SongCarousel", (te = x = x || {}).Carousel = "Carousel", te.HeroUnit = "HeroUnit", (oe = {}).Sponsored = "Sponsored", oe.SponsoredGame = "SponsoredGame", (Tm = K = K || {}).AppGameTileNoMetadata = "AppGameTileNoMetadata", Tm.GridTile = "GridTile", Tm.EventTile = "EventTile", Tm.InterestTile = "InterestTile", Tm.ExperienceEventsTile = "ExperienceEventsTile", (ql = L = L || {}).Always = "Always", ql.Hover = "Hover", ql.Footer = "Footer", (Ki = D = D || {}).Disabled = "Disabled", Ki.Enabled = "Enabled", (M = M || {}).imageOverlay = "imageOverlay";
			var o, i = "robloxAttributionIds";

			function u(e) {
				var t = window,
					n = t[i];
				return n || (n = {}, t[i] = n), (t = n[e]) || (t = N.uuidService.generateRandomUuid(), n[e] = t), t
			}

			function s() {
				return document.getElementById("place-list")
			}(o = o || {}).GameDetailReferral = "gameDetailReferral";
			var Y, d = function(e) {
					return "charts#/sortName/" + e
				},
				f = function(e) {
					return "charts#/sortName/v2/" + e
				};

			function v(e, t, n) {
				return void 0 === n && (n = {}), N.urlService.getUrlWithQueries(P.entityUrl.game.getRelativePath(e) + "/" + N.seoName.formatSeoName(t), n)
			}

			function R(e, t, n, r) {
				return void 0 === n && (n = {}), void 0 === r && (r = {}), t = function(e, t) {
					var n = encodeURIComponent(e);
					switch (t) {
						case Y.HomePage:
							return f(n);
						case Y.GamesPage:
							return d(n);
						default:
							return f(n)
					}
				}(e, t), N.urlService.getUrlWithQueries(t, w(w({}, n), r))
			}

			function m() {
				return document.referrer
			}($i = Y = Y || {}).SearchPage = "searchPage", $i.SortDetailPageDiscover = "sortDetailPageDiscover", $i.SortDetailPageHome = "sortDetailPageHome", $i.GameDetailPage = "gameDetailPage", $i.GamesPage = "gamesPage", $i.HomePage = "homePage", $i.PeopleListInHomePage = "peopleListInHomePage", $i.InterestCatcher = "interestCatcher", $i.SearchLandingPage = "searchLandingPage", $i.SpotlightPage = "spotlightPage";
			var F, h, j, g, y, b, w = function() {
					return (w = Object.assign || function(e) {
						for (var t, n = 1, r = arguments.length; n < r; n++)
							for (var o in t = arguments[n]) Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
						return e
					}).apply(this, arguments)
				},
				U = v,
				S = function() {
					return (S = Object.assign || function(e) {
						for (var t, n = 1, r = arguments.length; n < r; n++)
							for (var o in t = arguments[n]) Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
						return e
					}).apply(this, arguments)
				},
				O = function(e, t) {
					var n = {};
					for (o in e) Object.prototype.hasOwnProperty.call(e, o) && t.indexOf(o) < 0 && (n[o] = e[o]);
					if (null != e && "function" == typeof Object.getOwnPropertySymbols)
						for (var r = 0, o = Object.getOwnPropertySymbols(e); r < o.length; r++) t.indexOf(o[r]) < 0 && Object.prototype.propertyIsEnumerable.call(e, o[r]) && (n[o[r]] = e[o[r]]);
					return n
				},
				k = (Kl = P.eventStreamService.eventTypes).pageLoad,
				A = Kl.formInteraction;

			function B(e, n) {
				return e.filter(function(e) {
					var t;
					return (null === (t = e.presence) || void 0 === t ? void 0 : t.universeId) === n && (null === (e = e.presence) || void 0 === e ? void 0 : e.userPresenceType) === T.Presence.PresenceTypes.InGame
				})
			}

			function G(e, t) {
				var n = 0;
				if (void 0 !== e && void 0 !== t) {
					if (!Number.isNaN(e) && !Number.isNaN(t)) {
						if (0 === e && 0 === t) return;
						n = 0 === e && 0 !== t ? 0 : 0 !== e && 0 === t || 100 < (n = Math.floor(e / (e + t) * 100)) ? 100 : n
					}
					return n
				}
			}

			function H(t, e) {
				var n;
				return e.some(function(e) {
					return null === (e = t[e]) || void 0 === e ? void 0 : e.isSponsored
				}) ? ((n = {})[F.AdsPositions] = e.map(function(e) {
					return t[e].isSponsored ? 1 : 0
				}), n[F.AdFlags] = e.map(function(e) {
					return t[e].isSponsored ? 1 : 0
				}), n[F.AdIds] = e.map(function(e) {
					return (null === (e = t[e]) || void 0 === e ? void 0 : e.nativeAdData) || "0"
				}), n) : {}
			}

			function W(e, t) {
				function n(e) {
					return (e = null === (e = null == e ? void 0 : e.primaryMediaAsset) || void 0 === e ? void 0 : e.wideImageAssetId) && "0" !== e ? parseInt(e, 10) : null
				}
				var r;
				return e.layoutDataBySort && t && e.layoutDataBySort[t] ? r = n(e.layoutDataBySort[t]) : e.defaultLayoutData && (r = n(e.defaultLayoutData)), r || n(e)
			}

			function z(r, o, e, t) {
				return t === K.GridTile || t === K.EventTile || t === K.InterestTile ? ((t = {})[F.ThumbnailAssetIds] = e.map(function(e) {
					return null !== (e = W(r[e], o.toString())) && void 0 !== e ? e : "0"
				}), t[F.ThumbnailListIds] = e.map(function(e) {
					var t, n;
					return null !== (t = r[e], e = o.toString(), t = t.layoutDataBySort && e && t.layoutDataBySort[e] ? null === (n = t.layoutDataBySort[e].primaryMediaAsset) || void 0 === n ? void 0 : n.wideImageListId : t.defaultLayoutData ? null === (n = t.defaultLayoutData.primaryMediaAsset) || void 0 === n ? void 0 : n.wideImageListId : null === (t = t.primaryMediaAsset) || void 0 === t ? void 0 : t.wideImageListId) && void 0 !== t ? t : "0"
				}), t) : {}
			}

			function V(e) {
				var t = e.tileBadgesByPosition,
					e = [];
				if (t) return !t.ImageTopLeft || (t = t.ImageTopLeft.map(function(e) {
					return e.analyticsId
				})) && 0 < t.length && e.push("ImageTopLeft=" + t.join("+")), 0 < e.length ? e.join("&") : void 0
			}

			function q(r, o, e, t) {
				return t === K.GridTile || t === K.EventTile || t === K.InterestTile ? ((t = {})[F.TileBadgeContexts] = e.map(function(e) {
					var t, n;
					return null !== (t = r[e], e = o.toString(), t.layoutDataBySort && e && t.layoutDataBySort[e] ? n = V(t.layoutDataBySort[e]) : t.defaultLayoutData && (n = V(t.defaultLayoutData)), n) && void 0 !== n ? n : "0"
				}), t) : {}
			}

			function J(n, r, e, t) {
				if (void 0 === n || void 0 === r || void 0 === e) return {};
				var o = [],
					i = [];
				return t.forEach(function(e) {
					var t = n + Math.floor(e / r),
						e = e % r;
					o.push(t), i.push(e)
				}), (t = {})[F.RowsOnPage] = o, t[F.PositionsInRow] = i, t
			}

			function Z(e) {
				return void 0 !== e ? {
					inputUniverseIds: {
						interestCatcher: e.map(function(e) {
							return e.toString()
						})
					}
				} : {}
			}

			function Q(t) {
				return se(void 0, void 0, Promise, function() {
					return de(this, function(e) {
						return [2, N.httpService.get({
							url: T.EnvironmentUrls.thumbnailsApi + "/v1/assets",
							timeout: 1e4,
							withCredentials: !0
						}, {
							assetIds: [t],
							size: "768x432",
							format: "Png"
						}).then(function(e) {
							var t, n;
							return "Completed" === (null === (t = null === (t = e.data.data) || void 0 === t ? void 0 : t[0]) || void 0 === t ? void 0 : t.state) && null !== (n = null === (n = e.data.data) || void 0 === n ? void 0 : n[0]) && void 0 !== n && n.imageUrl ? e.data.data[0].imageUrl : Promise.reject()
						})]
					})
				})
			}(Lu = F = F || {}).AbsPositions = "absPositions", Lu.AdsPositions = "adsPositions", Lu.AdFlags = "adFlags", Lu.Algorithm = "algorithm", Lu.AppliedFilters = "appliedFilters", Lu.AttributionId = "attributionId", Lu.ComponentType = "componentType", Lu.Direction = "direction", Lu.Distance = "distance", Lu.HttpReferrer = "httpReferrer", Lu.EmphasisFlag = "emphasisFlag", Lu.FilterId = "filterId", Lu.FilterIds = "filterIds", Lu.GameSetTargetId = "gameSetTargetId", Lu.GameSetTypeId = "gameSetTypeId", Lu.InteractionType = "interactionType", Lu.IsAd = "isAd", Lu.NativeAdData = "nativeAdData", Lu.AdIds = "adIds", Lu.NumberOfLoadedTiles = "numberOfLoadedTiles", Lu.Page = "page", Lu.PageSession = "pageSession", Lu.PlaceId = "placeId", Lu.PlayContext = "playContext", Lu.Position = "position", Lu.PreviousOptionId = "previousOptionId", Lu.PromptId = "promptId", Lu.PromptText = "promptText", Lu.ResourceId = "resourceId", Lu.ResponseOptionIds = "responseOptionIds", Lu.ResponseOptionTexts = "responseOptionTexts", Lu.RootPlaceIds = "rootPlaceIds", Lu.SelectedIds = "selectedIds", Lu.SelectedTexts = "selectedTexts", Lu.ScreenSizeX = "screenSizeX", Lu.ScreenSizeY = "screenSizeY", Lu.ScrollAreaSize = "scrollAreaSize", Lu.ScrollDepth = "scrollDepth", Lu.SelectedOptionId = "selectedOptionId", Lu.SelectedOptionIds = "selectedOptionIds", Lu.ShareLinkType = "shareLinkType", Lu.ShareLinkId = "shareLinkId", Lu.SortId = "sortId", Lu.SortPos = "sortPos", Lu.StartDepth = "startDepth", Lu.StartPos = "startPos", Lu.SubPageName = "subPageName", Lu.SuggestionKwd = "suggestionKwd", Lu.SuggestionReplacedKwd = "suggestionReplacedKwd", Lu.SuggestionCorrectedKwd = "suggestionCorrectedKwd", Lu.SuggestionAlgorithm = "suggestionAlgorithm", Lu.TimeToRespond = "timeToRespond", Lu.Token = "token", Lu.Topics = "topics", Lu.TreatmentType = "treatmentType", Lu.UniverseId = "universeId", Lu.UniverseIds = "universeIds", Lu.FriendId = "friendId", Lu.ThumbnailAssetIds = "thumbnailAssetIds", Lu.ThumbnailListIds = "thumbnailListIds", Lu.LinkPath = "linkPath", Lu.LocationName = "locationName", Lu.RowsOnPage = "rowsOnPage", Lu.PositionsInRow = "positionsInRow", Lu.NavigationUids = "navigationUids", Lu.TileBadgeContexts = "tileBadgeContexts", Lu.ButtonName = "buttonName", Lu.IsInterested = "isInterested", Lu.InterestedUniverseIds = "interestedUniverseIds", (Sl = h = h || {}).GameImpressions = "gameImpressions", Sl.GameDetailReferral = "gameDetailReferral", Sl.SortDetailReferral = "sortDetailReferral", Sl.FeedScroll = "feedScroll", Sl.NavigateToSortLink = "navigateToSortLink", Sl.SurveyInteraction = "surveyInteraction", Sl.SurveyImpression = "surveyImpression", Sl.InterestCatcherClick = "interestCatcherClick", Sl.FilterImpressions = "filterImpressions", Sl.GamesFilterClick = "gamesFilterClick", Sl.RequestRefundClick = "requestRefundClick", (et = j = j || {}).HomePageSessionInfo = "homePageSessionInfo", et.GameSearchSessionInfo = "gameSearchSessionInfo", et.DiscoverPageSessionInfo = "discoverPageSessionInfo", et.SearchLandingPageSessionInfo = "searchLandingPageSessionInfo", et.SpotlightPageSessionInfo = "spotlightPageSessionInfo", (tt = {}).Submission = "submission", tt.Cancellation = "cancellation", (lt = g = g || {}).Horizontal = "horizontal", lt.Vertical = "vertical", (ut = y = y || {}).Skip = "skip", ut.Continue = "continue", ut.Interested = "interested", (It = b = b || {}).OpenDropdown = "openDropdown", It.CloseDropdown = "closeDropdown", It.Apply = "apply";
			var ee = ((fr = {})[h.GameImpressions] = function(e) {
					e = O(e, []);
					return [{
						name: h.GameImpressions,
						type: h.GameImpressions,
						context: A
					}, ne(S({}, e))]
				}, fr[h.GameDetailReferral] = function(e) {
					var t;
					return void 0 === e && (e = {}), [{
						name: h.GameDetailReferral,
						type: h.GameDetailReferral,
						context: k
					}, ne(S(((t = {})[F.AttributionId] = u(o.GameDetailReferral), t[F.HttpReferrer] = m(), t), e))]
				}, fr[h.SortDetailReferral] = function(e) {
					return void 0 === e && (e = {}), [{
						name: h.SortDetailReferral,
						type: h.SortDetailReferral,
						context: k
					}, ne(S({}, e))]
				}, fr[h.NavigateToSortLink] = function(e) {
					return void 0 === e && (e = {}), [{
						name: h.NavigateToSortLink,
						type: h.NavigateToSortLink,
						context: A
					}, ne(S({}, e))]
				}, fr[h.SurveyInteraction] = function(e) {
					return void 0 === e && (e = {}), [{
						name: h.SurveyInteraction,
						type: h.SurveyInteraction,
						context: A
					}, ne(S({}, e))]
				}, fr[h.SurveyImpression] = function(e) {
					return void 0 === e && (e = {}), [{
						name: h.SurveyImpression,
						type: h.SurveyImpression,
						context: A
					}, ne(S({}, e))]
				}, fr[h.InterestCatcherClick] = function(e) {
					return void 0 === e && (e = {}), [{
						name: h.InterestCatcherClick,
						type: h.InterestCatcherClick,
						context: A
					}, ne(S({}, e))]
				}, fr[h.FilterImpressions] = function(e) {
					return void 0 === e && (e = {}), [{
						name: h.FilterImpressions,
						type: h.FilterImpressions,
						context: A
					}, ne(S({}, e))]
				}, fr[h.GamesFilterClick] = function(e) {
					return void 0 === e && (e = {}), [{
						name: h.GamesFilterClick,
						type: h.GamesFilterClick,
						context: A
					}, ne(S({}, e))]
				}, fr[h.RequestRefundClick] = function(e) {
					var t;
					return [{
						name: h.RequestRefundClick,
						type: h.RequestRefundClick,
						context: A
					}, ne(((t = {})[F.PlaceId] = e.placeId, t))]
				}, fr),
				te = (new T.Intl).getDateTimeFormatter(),
				ne = function(n) {
					return Object.keys(n).reduce(function(e, t) {
						return "object" == typeof n[t] && n[t] && (e[t] = JSON.stringify(n[t])), "number" == typeof n[t] && (e[t] = n[t]), "string" == typeof n[t] && (e[t] = encodeURIComponent(n[t])), "boolean" == typeof n[t] && (e[t] = n[t] ? 1 : 0), e
					}, {})
				},
				re = N.urlService.parseQueryString,
				oe = N.numberFormat.getNumberFormat,
				ie = G,
				ae = function(e, t) {
					t = G(e, t);
					return void 0 !== t ? t + "%" : void 0
				},
				le = function(e) {
					return -1 === e ? "--" : N.abbreviateNumber.getAbbreviatedValue(e)
				},
				ue = function(n, r) {
					if (0 === n.length || 0 === r) return [n];
					var e = Math.ceil(n.length / r);
					return new Array(e).fill(0).map(function(e, t) {
						return n.slice(t * r, (t + 1) * r)
					})
				},
				ce = function() {
					return (ce = Object.assign || function(e) {
						for (var t, n = 1, r = arguments.length; n < r; n++)
							for (var o in t = arguments[n]) Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
						return e
					}).apply(this, arguments)
				},
				se = function(e, a, l, u) {
					return new(l = l || Promise)(function(n, t) {
						function r(e) {
							try {
								i(u.next(e))
							} catch (e) {
								t(e)
							}
						}

						function o(e) {
							try {
								i(u.throw(e))
							} catch (e) {
								t(e)
							}
						}

						function i(e) {
							var t;
							e.done ? n(e.value) : ((t = e.value) instanceof l ? t : new l(function(e) {
								e(t)
							})).then(r, o)
						}
						i((u = u.apply(e, a || [])).next())
					})
				},
				de = function(n, r) {
					var o, i, a, l = {
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
								if (o) throw new TypeError("Generator is already executing.");
								for (; l;) try {
									if (o = 1, i && (a = 2 & t[0] ? i.return : t[0] ? i.throw || ((a = i.return) && a.call(i), 0) : i.next) && !(a = a.call(i, t[1])).done) return a;
									switch (i = 0, a && (t = [2 & t[0], a.value]), t[0]) {
										case 0:
										case 1:
											a = t;
											break;
										case 4:
											return l.label++, {
												value: t[1],
												done: !1
											};
										case 5:
											l.label++, i = t[1], t = [0];
											continue;
										case 7:
											t = l.ops.pop(), l.trys.pop();
											continue;
										default:
											if (!(a = 0 < (a = l.trys).length && a[a.length - 1]) && (6 === t[0] || 2 === t[0])) {
												l = 0;
												continue
											}
											if (3 === t[0] && (!a || t[1] > a[0] && t[1] < a[3])) {
												l.label = t[1];
												break
											}
											if (6 === t[0] && l.label < a[1]) {
												l.label = a[1], a = t;
												break
											}
											if (a && l.label < a[2]) {
												l.label = a[2], l.ops.push(t);
												break
											}
											a[2] && l.ops.pop(), l.trys.pop();
											continue
									}
									t = r.call(n, l)
								} catch (e) {
									t = [6, e], i = 0
								} finally {
									o = a = 0
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
				fe = function(r, o, i) {
					return void 0 === i && (i = 1), se(void 0, void 0, Promise, function() {
						var n, t;
						return de(this, function(e) {
							switch (e.label) {
								case 0:
									return e.trys.push([0, 2, , 3]), [4, N.httpService.get(a.getExperimentationValues(i, r, Object.keys(o)))];
								case 1:
									return n = e.sent().data, t = Object.keys(n).reduce(function(e, t) {
										return null !== n[t] && (e[t] = n[t]), e
									}, {}), [2, ce(ce({}, o), t)];
								case 2:
									return e.sent(), [2, o];
								case 3:
									return [2]
							}
						})
					})
				},
				pe = function(r, o, i, a, l, u) {
					return se(void 0, void 0, Promise, function() {
						var t, n;
						return de(this, function(e) {
							switch (e.label) {
								case 0:
									return t = ce(ce({
										pageType: r,
										sessionId: o,
										supportedTreatmentTypes: [I.SortlessGrid],
										sduiTreatmentTypes: u,
										authIntentData: a
									}, i), Z(l)), [4, N.httpService.post(c.url.getOmniRecommendations, t)];
								case 1:
									return n = e.sent().data, Object.keys(n.contentMetadata.Game).forEach(function(e) {
										e = n.contentMetadata.Game[e];
										e.placeId = e.rootPlaceId
									}), [2, n]
							}
						})
					})
				},
				me = function(n, r) {
					return se(void 0, void 0, Promise, function() {
						var t;
						return de(this, function(e) {
							switch (e.label) {
								case 0:
									return [4, N.httpService.post(c.url.getOmniRecommendationsMetadata, {
										contents: n,
										sessionId: r
									})];
								case 1:
									return t = e.sent().data, Object.keys(t.contentMetadata.Game).forEach(function(e) {
										e = t.contentMetadata.Game[e];
										e.placeId = e.rootPlaceId
									}), [2, t]
							}
						})
					})
				},
				ve = function(r) {
					return se(void 0, void 0, Promise, function() {
						var t, n;
						return de(this, function(e) {
							switch (e.label) {
								case 0:
									return t = {
										url: T.EnvironmentUrls.apiGatewayUrl + "/user-profile-api/v1/user/profiles/get-profiles",
										retryable: !0,
										withCredentials: !0
									}, n = {
										userIds: r,
										fields: ["names.combinedName", "names.username"]
									}, [4, N.httpService.post(t, n)];
								case 1:
									return [2, e.sent().data]
							}
						})
					})
				},
				he = $g(4452),
				ge = $g.n(he),
				ye = ReactStyleGuide,
				be = ye.Button.variants;

			function we(n, r) {
				var o;
				return void 0 === r && (r = 300), [function() {
					for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
					clearTimeout(o), o = setTimeout(function() {
						n.apply(void 0, e)
					}, r)
				}, function() {
					clearTimeout(o)
				}]
			}(Tm = function(e) {
				var t = e.errorMessage,
					n = e.onRefresh,
					e = e.className;
				return $().createElement("div", {
					"data-testid": "error-status",
					className: ge()("game-error", e)
				}, $().createElement("span", {
					className: "icon-spot-error-2xl"
				}), $().createElement("p", {
					className: "text-label error-text"
				}, t), $().createElement(ye.Button, {
					className: "refresh-button",
					variant: be.control,
					onClick: n
				}, $().createElement("span", {
					className: "icon-common-refresh"
				})))
			}).defaultProps = {
				className: ""
			};
			var Se, Ce, Ie, xe, Ee = Tm,
				Pe = function() {
					var e = (0, X.useState)(!1),
						t = e[0],
						n = e[1],
						r = (e = we(function() {
							n(!0)
						}, 100))[0],
						o = e[1],
						i = (e = we(function() {
							n(!1)
						}, 100))[0],
						a = e[1];
					return [t, function() {
						a(), r()
					}, function() {
						o(), i()
					}]
				},
				Te = function(e, t) {
					return (0, X.useMemo)(function() {
						return e.layoutDataBySort && t && e.layoutDataBySort[t] ? e.layoutDataBySort[t] : e.defaultLayoutData
					}, [e.layoutDataBySort, e.defaultLayoutData, t])
				},
				Oe = HeaderScripts,
				ke = T.EnvironmentUrls.gamesApi,
				Ae = {
					url: {
						getOmniRecommendations: function(e, t) {
							return {
								url: ke + "/v1/games/omni-recommendations?model.pageType=" + e + (void 0 !== t ? "&model.sessionId=" + t : ""),
								withCredentials: !0
							}
						},
						getOmniRecommendationsMetadata: {
							url: ke + "/v1/games/omni-recommendations-metadata",
							withCredentials: !0
						},
						getGameList: {
							url: ke + "/v1/games/list",
							withCredentials: !0
						},
						getGamePasses: function(e, t) {
							return {
								url: ke + "/v1/games/" + e + "/game-passes?limit=" + t,
								withCredentials: !0
							}
						},
						getGameRecommendations: function(e) {
							return {
								url: ke + "/v1/games/recommendations/game/" + e,
								withCredentials: !0
							}
						},
						getGameSorts: {
							url: ke + "/v1/games/sorts",
							withCredentials: !0
						},
						getUniverseVoiceStatus: function(e) {
							return {
								withCredentials: !0,
								url: T.EnvironmentUrls.voiceApi + "/v1/settings/universe/" + e
							}
						},
						getVoiceOptInStatus: {
							withCredentials: !0,
							url: T.EnvironmentUrls.voiceApi + "/v1/settings/user-opt-in"
						},
						getAssetDataFromAssetId: function(e) {
							return {
								url: T.EnvironmentUrls.assetDeliveryApi + "/v2/assetId/" + e,
								withCredentials: !0
							}
						}
					},
					defaultCacheCriteria: {
						refreshCache: !1,
						expirationWindowMS: 3e4,
						useCache: !0
					}
				},
				Ne = function(e, a, l, u) {
					return new(l = l || Promise)(function(n, t) {
						function r(e) {
							try {
								i(u.next(e))
							} catch (e) {
								t(e)
							}
						}

						function o(e) {
							try {
								i(u.throw(e))
							} catch (e) {
								t(e)
							}
						}

						function i(e) {
							var t;
							e.done ? n(e.value) : ((t = e.value) instanceof l ? t : new l(function(e) {
								e(t)
							})).then(r, o)
						}
						i((u = u.apply(e, a || [])).next())
					})
				},
				_e = function(n, r) {
					var o, i, a, l = {
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
								if (o) throw new TypeError("Generator is already executing.");
								for (; l;) try {
									if (o = 1, i && (a = 2 & t[0] ? i.return : t[0] ? i.throw || ((a = i.return) && a.call(i), 0) : i.next) && !(a = a.call(i, t[1])).done) return a;
									switch (i = 0, a && (t = [2 & t[0], a.value]), t[0]) {
										case 0:
										case 1:
											a = t;
											break;
										case 4:
											return l.label++, {
												value: t[1],
												done: !1
											};
										case 5:
											l.label++, i = t[1], t = [0];
											continue;
										case 7:
											t = l.ops.pop(), l.trys.pop();
											continue;
										default:
											if (!(a = 0 < (a = l.trys).length && a[a.length - 1]) && (6 === t[0] || 2 === t[0])) {
												l = 0;
												continue
											}
											if (3 === t[0] && (!a || t[1] > a[0] && t[1] < a[3])) {
												l.label = t[1];
												break
											}
											if (6 === t[0] && l.label < a[1]) {
												l.label = a[1], a = t;
												break
											}
											if (a && l.label < a[2]) {
												l.label = a[2], l.ops.push(t);
												break
											}
											a[2] && l.ops.pop(), l.trys.pop();
											continue
									}
									t = r.call(n, l)
								} catch (e) {
									t = [6, e], i = 0
								} finally {
									o = a = 0
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
				Re = Ae.defaultCacheCriteria,
				Le = P.dataStores.gamesDataStore,
				De = P.dataStores.userDataStoreV2,
				Me = (P.dataStores.localeDataStore, P.dataStores.userDataStore.FriendsUserSortType),
				Fe = function() {
					return De.getFriends({
						userId: null === Oe.authenticatedUser || void 0 === Oe.authenticatedUser ? void 0 : Oe.authenticatedUser.id,
						userSort: Me.StatusFrequents,
						isGuest: !1
					}, Re)
				},
				je = function(t) {
					return Ne(void 0, void 0, Promise, function() {
						return _e(this, function(e) {
							switch (e.label) {
								case 0:
									return [4, Le.getGameDetails([t])];
								case 1:
									return [2, e.sent().data.data[0]]
							}
						})
					})
				},
				Ue = function(n) {
					return Ne(void 0, void 0, Promise, function() {
						var t;
						return _e(this, function(e) {
							switch (e.label) {
								case 0:
									return [4, Le.getPlaceDetails([n])];
								case 1:
									return t = e.sent().data, [2, (void 0 === t ? [] : t)[0]]
							}
						})
					})
				},
				Be = function(e) {
					return N.httpService.get(Ae.url.getAssetDataFromAssetId(e)).then(function(e) {
						return e.data
					})
				};

			function Ge(e) {
				return "icons/menu/gem_small" !== e ? null : "icon-gem-dark-stroke"
			}

			function He(e) {
				return e.isShimmerEnabled ? "shimmer-animation" : null
			}

			function We(e) {
				return e !== Se.IMAGE_TOP_LEFT ? "" : "game-card-pill-top-left"
			}

			function ze(e) {
				var t = [];
				return (e = null === (e = null == e ? void 0 : e.tileBadgesByPosition) || void 0 === e ? void 0 : e.ImageTopLeft) && e.length && (t = e.map(function(e) {
					var t, n = {
						id: e.analyticsId
					};
					return e.tileBadgeType === xe.Text && e.text ? (n.text = e.text, n.animationClass = He(e)) : e.tileBadgeType === xe.Icon && e.icons && (t = e.icons.map(Ge).filter(function(e) {
						return !!e
					}), n.icons = t, n.animationClass = He(e)), n
				})), t.length ? ((e = {})[Se.IMAGE_TOP_LEFT] = t, e) : null
			}

			function Ve(e) {
				var t;
				return (null === (t = null == e ? void 0 : e.footer) || void 0 === t ? void 0 : t.type) === Ie.TextLabel ? e.footer : null
			}(ql = Se = Se || {}).INVALID = "Invalid", ql.IMAGE_TOP_LEFT = "ImageTopLeft", ql.IMAGE_BOTTOM_LEFT = "ImageBottomLeft", (Ki = Ce = Ce || {}).Home = "Home", Ki.Games = "Games", ($i = {}).Invalid = "Invalid", $i.HasLootBoxes = "HasLootBoxes", $i.HasInGameTrading = "HasInGameTrading", $i.IsUsingLootBoxApi = "IsUsingLootBoxApi", $i.IsUsingInGameTradingApi = "IsUsingInGameTradingApi", $i.HasAllowedExternalLinkReferences = "HasAllowedExternalLinkReferences", $i.IsUsingAllowedExternalLinkReferencesApi = "IsUsingAllowedExternalLinkReferencesApi", (Kl = {}).MorphToR6 = "MorphToR6", Kl.PlayerChoice = "PlayerChoice", Kl.MorphToR15 = "MorphToR15", (Lu = {}).Scroll = "Scroll", Lu.Button = "Button", (Ie = Ie || {}).TextLabel = "TextLabel", (Sl = xe = xe || {}).Text = "Text", Sl.Icon = "Icon";
			var qe = RobloxThumbnails,
				Je = {
					maxTilesPerCarouselPage: 6,
					maxWideGameTilesPerCarouselPage: 4,
					minWideGameTilesPerCarouselPage: 2,
					gameTileWidth: 150,
					homeFeedMaxWidth: 970,
					wideGameTileTilesPerRowBreakpointWidth: 738,
					sortlessGridMaxTilesMetadataToFetch: 300,
					adSortHomePageId: 4e8,
					topicIdsWithoutSeeAll: [5e8, 500000001],
					friendsCarouselAngularBootstrapErrorEvent: "HomePageFriendsCarouselBootstrapError",
					missingNumberOfRowsForLoggingErrorEvent: "HomePageMissingNumberOfRowsForLoggingError",
					omniRecommendationEndpointErrorEvent: "HomePageOmniRecommendationEndpointError",
					omniRecommendationEndpointSuccessEvent: "HomePageOmniRecommendationEndpointSuccess",
					omniRecommendationFeedStatsLoggingErrorEvent: "HomePageOmniRecommendationFeedStatsLoggingError",
					linkStartDelimiter: "{linkStart}",
					linkEndDelimiter: "{linkEnd}"
				},
				Ke = {
					numGameCarouselLookAheadWindows: 3,
					adSortDiscoverId: 27,
					carouselContainerBufferWidth: 80,
					gameTileGutterWidth: 14,
					wideGameTileGutterWidth: 16,
					scrollerWidth: 30
				},
				Xe = {
					maxTilesInGameImpressionsEvent: 25,
					gameImpressionsIntersectionThreshold: .5,
					filterImpressionsIntersectionThreshold: .5,
					wideTileHoverGrowWidthPx: 26,
					numberOfInGameAvatarIcons: 3,
					numberOfInGameNames: 1,
					maxFacepileFriendCountValue: 99,
					numberOfGameTilesPerLoad: 60,
					numberOfGamePassesPerLoad: 50,
					keyBoardEventCode: {
						enter: "Enter",
						escape: "Escape"
					},
					RatingPercentageText: "Label.RatingPercentage"
				},
				$e = .1,
				Ye = -1,
				Ze = 5,
				Qe = Je,
				et = Ke,
				tt = Xe,
				nt = {
					ActionApply: "Action.Apply",
					LabelSponsoredAd: "Label.SponsoredAd",
					LabelNoSearchResults: "LabelNoSearchResults",
					LabelPlayingOnePlusUsersWithComma: "LabelPlayingOnePlusUsersWithComma",
					LabelPlayingOneUser: "LabelPlayingOneUser",
					LabelBy: "LabelCreatorBy",
					LabelByPrefix: "Label.By"
				},
				rt = {
					LabelApiError: "Label.ApiError",
					LabelGames: "Label.Games",
					LabelSponsoredAdsDisclosureStatic: "Label.SponsoredAdsDisclosureStatic",
					LabelContentLoadFailed: "Label.ContentLoadFailed"
				},
				ot = {
					LabelCharts: "Label.Charts",
					LabelsHome: "Label.sHome",
					ActionClose: "Action.Close",
					ActionDropdownSelected: "Action.DropdownSelected",
					ActionDropdownNotSelected: "Action.DropdownNotSelected"
				},
				it = {
					ActionSeeAll: "Action.SeeAll",
					ActionInterestCatcherContinue: "Action.InterestCatcherContinue",
					ActionInterestCatcherContinueSelected: "Action.InterestCatcherContinueSelected",
					ActionInterestCatcherSkip: "Action.InterestCatcherSkip",
					ActionInterestCatcherInterested: "Action.InterestCatcherInterested"
				},
				at = {
					HeadingDescription: "Heading.Description",
					LabelAgeGuidelines: "Label.AgeGuidelines",
					LabelLearnMore: "Label.LearnMore",
					LabelBy: "Label.By",
					LabelPlaying: "Label.Playing",
					LabelFavorites: "Label.Favorites",
					LabelVisits: "Label.Visits",
					LabelCreated: "Label.Created",
					LabelUpdated: "Label.Updated",
					LabelMaxPlayers: "Label.MaxPlayers",
					LabelGenre: "Label.Genre",
					LabelSubgenre: "Label.Subgenre",
					LabelReportAbuse: "Label.ReportAbuse",
					LabelPlaceCopyingAllowed: "Label.PlaceCopyingAllowed",
					LabelVoiceEnabled: "Label.VoiceEnabled",
					LabelContentFailedToLoad: "Label.ContentFailedToLoad",
					LabelYes: "Label.Yes",
					LabelNo: "Label.No",
					LabelUnavailable: "Label.Unavailable",
					LabelSuitableForEveryone: "Label.SuitableForEveryone",
					LabelMicrophone: "Label.Microphone",
					LabelCamera: "Label.Camera",
					LabelNone: "Label.None",
					LabelThankYou: "Label.ThankYouMessage",
					LabelGenreUnderConstruction: "Label.GenreUnderConstruction",
					LabelGenreInProgress: "Label.GenreInProgress",
					HeadingRecommendedGames: "Heading.RecommendedGames",
					ActionSwapToSource: "Action.SwapToSource",
					ActionSwapToTranslation: "Action.SwapToTranslation",
					ActionTranslate: "Action.Translate",
					LabelNotSupported: "Label.NotSupported",
					LabelSupported: "Label.Supported",
					LabelVoiceChat: "Label.VoiceChat",
					HeadingRefund: "Heading.Refund",
					ActionRequestRefund: "Action.RequestRefund",
					HeadingNotice: "Body.NotesTitle",
					InExperiencePurchase: "Notes.InExperiencePurchase"
				},
				lt = PropTypes,
				ut = $g.n(lt),
				ct = "Label.ContextMenuTitle",
				st = "Action.ViewDetails",
				dt = "Action.JoinGame",
				ft = {
					goToProfileInPlacesList: {
						name: "goToProfileInPlacesList",
						ctx: "click"
					},
					openModalFromGameTile: {
						name: "openModalFromGameTile",
						ctx: "click"
					},
					goToChatInPlacesList: {
						name: "goToChatInPlacesList",
						ctx: "click"
					},
					joinGameInPlacesList: {
						name: "joinGameInPlacesList",
						ctx: "click"
					},
					goToGameDetailInPlacesList: {
						name: "goToGameDetailInPlacesList",
						ctx: "click"
					},
					gamePlayIntentInPlacesList: {
						ctx: "placesListInHomePage"
					}
				};

			function pt(e) {
				var t = e.game,
					n = e.translate,
					r = t.universeId,
					o = t.name,
					e = t.referralUrl,
					t = t.isPlayable,
					r = $().createElement(qe.Thumbnail2d, {
						type: qe.ThumbnailTypes.gameIcon,
						size: qe.DefaultThumbnailSize,
						targetId: r,
						imgClassName: "game-card-thumb",
						format: qe.ThumbnailFormat.jpeg
					});
				return $().createElement("div", {
					className: "border-bottom player-interaction-container"
				}, $().createElement("span", {
					className: "cursor-pointer game-icon"
				}, $().createElement(ye.Link, {
					url: e,
					className: "game-card-link"
				}, r)), $().createElement("span", {
					className: "game-info-container"
				}, $().createElement(ye.Link, {
					url: e,
					className: "game-name"
				}, o), !t && $().createElement(ye.Link, {
					url: e,
					className: "btn-control-sm game-link"
				}, n(st))))
			}
			pt.propTypes = {
				game: ut().shape({
					universeId: ut().number,
					placeId: ut().number,
					name: ut().string,
					playerCount: ut().number,
					isShowSponsoredLabel: ut().bool,
					nativeAdData: ut().string,
					imageUrl: ut().string,
					referralUrl: ut().string,
					isPlayable: ut().bool
				}).isRequired,
				translate: ut().func.isRequired
			};
			var mt = pt;

			function vt(e) {
				var t = e.playerId,
					e = e.altName;
				return $().createElement("div", {
					className: "avatar-card-link"
				}, $().createElement(qe.Thumbnail2d, {
					type: qe.ThumbnailTypes.avatarHeadshot,
					size: qe.ThumbnailAvatarHeadshotSize.size48,
					targetId: t,
					imgClassName: "avatar-card-image",
					format: qe.ThumbnailFormat.webp,
					altName: e
				}))
			}
			vt.defaultProps = {
				altName: ""
			}, vt.propTypes = {
				playerId: ut().number.isRequired,
				altName: ut().string
			};
			var ht = vt;

			function gt(e) {
				var t = e.playerData,
					i = e.dismissModal,
					n = e.isPlayable,
					r = e.translate,
					e = t.presence,
					a = e.rootPlaceId,
					l = e.placeId,
					u = e.gameId,
					c = t.id,
					t = t.nameForDisplay;
				return $().createElement("div", {
					className: "border-bottom player-info"
				}, $().createElement("span", {
					className: "player-name"
				}, t), $().createElement(ye.Button, {
					className: "cursor-pointer btn-primary-sm player-action",
					onClick: function(e) {
						var t = {
								rootPlaceId: a,
								placeId: l
							},
							n = P.playGameService.buildPlayGameProperties(a, l, u, c),
							r = ft.joinGameInPlacesList,
							o = ft.gamePlayIntentInPlacesList,
							o = {
								eventName: r.name,
								ctx: r.ctx,
								properties: t,
								gamePlayIntentEventCtx: o.ctx
							};
						P.playGameService.launchGame(n, o), i(e)
					},
					isDisabled: !n
				}, r(dt)))
			}
			gt.propTypes = {
				playerData: ut().shape({
					presence: ut().shape({
						rootPlaceId: ut().number,
						placeId: ut().number,
						gameId: ut().string
					}),
					id: ut().number,
					nameForDisplay: ut().string
				}).isRequired,
				dismissModal: ut().func.isRequired,
				isPlayable: ut().bool.isRequired,
				translate: ut().func.isRequired
			};
			var yt = gt;

			function bt(e) {
				var t = e.friendsData,
					n = e.friendsInGame,
					o = e.dismissModal,
					i = e.isPlayable,
					a = e.translate,
					l = {};
				return t.forEach(function(e) {
					l[e.id] = e
				}), $().createElement("div", {
					className: "interaction-container"
				}, $().createElement("ul", {
					className: "interaction-list"
				}, n.map(function(e, t) {
					var n = e + t,
						r = l[e],
						t = r.id,
						e = r.nameForDisplay;
					return $().createElement("li", {
						key: n,
						className: "interaction-item",
						"aria-hidden": "true"
					}, $().createElement("span", {
						className: "avatar avatar-headshot avatar-headshot-sm player-avatar"
					}, $().createElement(ht, {
						playerId: t,
						altName: e
					})), $().createElement(yt, {
						playerData: r,
						dismissModal: o,
						isPlayable: i,
						translate: a
					}))
				})))
			}
			bt.propTypes = {
				friendsData: ut().arrayOf(ut().shape({
					presense: ut().shape({
						rootPlaceId: ut().number,
						placeId: ut().number,
						gameId: ut().string
					}),
					id: ut().number,
					nameForDisplay: ut().string
				})).isRequired,
				friendsInGame: ut().arrayOf(ut().number).isRequired,
				dismissModal: ut().func.isRequired,
				isPlayable: ut().bool.isRequired,
				translate: ut().func.isRequired
			};
			var wt = bt;

			function St(e) {
				var t = e.friendsData,
					n = e.friendsInGame,
					r = e.game,
					o = e.dismissModal,
					i = e.translate,
					e = i(ct);
				return $().createElement("div", {
					"data-testid": "game-players-player-interaction-modal"
				}, $().createElement(ye.Modal.Header, {
					title: e,
					onClose: o
				}), $().createElement(mt, {
					game: r,
					translate: i
				}), $().createElement(wt, {
					friendsData: t,
					friendsInGame: n,
					dismissModal: o,
					isPlayable: r.isPlayable,
					translate: i
				}))
			}
			St.propTypes = {
				friendsData: ut().arrayOf(ut().shape({
					presense: ut().shape({
						rootPlaceId: ut().number,
						placeId: ut().number,
						gameId: ut().string
					}),
					id: ut().number,
					nameForDisplay: ut().string
				})).isRequired,
				friendsInGame: ut().arrayOf(ut().number).isRequired,
				game: ut().shape({
					universeId: ut().number,
					placeId: ut().number,
					name: ut().string,
					playerCount: ut().number,
					isShowSponsoredLabel: ut().bool,
					nativeAdData: ut().string,
					imageUrl: ut().string,
					referralUrl: ut().string,
					isPlayable: ut().bool
				}).isRequired,
				dismissModal: ut().func.isRequired,
				translate: ut().func.isRequired
			};
			var Ct = St,
				It = {
					common: ["Common.GameSorts", "Feature.GamePage", "Feature.GameDetails", "Feature.ContactUpsell"],
					feature: "Feature.PlacesList"
				};
			(fr = function(e) {
				var t = e.tooltipText,
					n = e.placement,
					r = e.sizeInPx,
					r = void 0 === r ? 16 : r,
					e = e.centerIcon;
				return $().createElement("span", {
					className: ge()("info-tooltip-container", {
						"icon-centered": e
					})
				}, $().createElement(ye.Tooltip, {
					id: "games-info-tooltip",
					placement: n,
					containerClassName: ge()("games-info-tooltip", {
						"icon-centered": e
					}),
					content: t
				}, $().createElement("svg", {
					width: r,
					height: r,
					viewBox: "0 0 16 16",
					fill: "none",
					xmlns: "http://www.w3.org/2000/svg"
				}, $().createElement("path", {
					d: "M8.97 5.44H7V4H8.97V5.44Z",
					fill: "currentColor"
				}), $().createElement("path", {
					d: "M8.94347 11.9999H7.05347V6.37988H8.94347V11.9999Z",
					fill: "currentColor"
				}), $().createElement("path", {
					fillRule: "evenodd",
					clipRule: "evenodd",
					d: "M8 16C12.4183 16 16 12.4183 16 8C16 3.58172 12.4183 0 8 0C3.58172 0 0 3.58172 0 8C0 12.4183 3.58172 16 8 16ZM8 14.5C11.5899 14.5 14.5 11.5899 14.5 8C14.5 4.41015 11.5899 1.5 8 1.5C4.41015 1.5 1.5 4.41015 1.5 8C1.5 11.5899 4.41015 14.5 8 14.5Z",
					fill: "currentColor"
				}))))
			}).defaultProps = {
				sizeInPx: 16
			};
			var xt = fr,
				Et = function() {
					return (Et = Object.assign || function(e) {
						for (var t, n = 1, r = arguments.length; n < r; n++)
							for (var o in t = arguments[n]) Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
						return e
					}).apply(this, arguments)
				},
				Pt = ((oe = {})[K.GridTile] = {
					minTileWidth: 233,
					columnGap: 16,
					minTilesPerRow: 2,
					maxTilesPerRow: 6
				}, oe[K.EventTile] = {
					minTileWidth: 233,
					columnGap: 16,
					minTilesPerRow: 4,
					maxTilesPerRow: 4
				}, oe[K.InterestTile] = {
					minTileWidth: 311,
					columnGap: 16,
					minTilesPerRow: 2,
					maxTilesPerRow: 6
				}, oe[K.AppGameTileNoMetadata] = {
					minTileWidth: 150,
					columnGap: 16,
					minTilesPerRow: 3,
					maxTilesPerRow: 12
				}, oe[K.ExperienceEventsTile] = {
					minTileWidth: 233,
					columnGap: 16,
					minTilesPerRow: 2,
					maxTilesPerRow: 3
				}, oe),
				Tt = Et(Et({}, Pt), ((te = {})[K.EventTile] = {
					minTileWidth: 300,
					columnGap: 16,
					minTilesPerRow: 2,
					maxTilesPerRow: 4
				}, te)),
				Ot = {
					minTileWidth: 150,
					columnGap: 16,
					minTilesPerRow: 3,
					maxTilesPerRow: 12
				};

			function kt(e) {
				var n = e.pills,
					r = e.isFocused,
					e = Object.keys(n);
				return $().createElement(X.Fragment, null, e.map(function(e) {
					var t;
					return !(null === (t = n[t = e]) || void 0 === t || !t.length) && $().createElement("div", {
						key: e,
						className: "game-card-pills-container " + We(e)
					}, null === (e = n[e]) || void 0 === e ? void 0 : e.map(function(e) {
						return $().createElement(_t, {
							key: e.id,
							id: e.id,
							animationClass: e.animationClass,
							icons: e.icons,
							text: e.text,
							isFocused: r
						})
					}))
				}))
			}

			function At(e) {
				return e = e.playerCount, e = le(e), $().createElement("div", {
					className: "game-card-info",
					"data-testid": "game-tile-stats-player-count"
				}, $().createElement("span", {
					className: "info-label icon-playing-counts-gray"
				}), $().createElement("span", {
					className: "info-label playing-counts-label"
				}, e))
			}

			function Nt(e) {
				var t = e.playerCount,
					e = e.playerCountStyle,
					e = ge()("game-card-image-pill", {
						"hover-only": e === L.Hover
					});
				return $().createElement("div", {
					className: e,
					"data-testid": "game-tile-player-count-pill"
				}, $().createElement(At, {
					playerCount: t
				}))
			}(Tm = function(e) {
				var t = e.animationClass,
					n = e.isFocused,
					r = e.icons,
					o = e.text;
				return null != r && r.length || o ? $().createElement("div", {
					className: "game-card-pill-with-animation"
				}, $().createElement("div", {
					className: ge()("game-card-pill-animation-container", ((e = {})[null != t ? t : ""] = t && n, e))
				}, (null == r ? void 0 : r.length) && r.map(function(e, t) {
					return $().createElement("span", {
						key: t,
						className: "game-card-pill-icon " + e
					})
				}), o && $().createElement("div", {
					className: "game-card-pill-text"
				}, o))) : null
			}).defaultProps = {
				animation: void 0
			};
			var _t = Tm;

			function Rt(e) {
				return e = e.featureTypes, $().createElement("div", {
					className: "game-card-image-feature-pill",
					"data-testid": "game-tile-social-feature-pill"
				}, $().createElement("div", {
					className: "game-card-info",
					"data-testid": "game-tile-social-feature-list"
				}, e.map(function(e) {
					return Lt[e] && $().createElement("span", {
						key: e,
						className: Lt[e]
					})
				})))
			}
			Nt.defaultProps = {
				playerCountStyle: void 0
			};
			var Lt = {
				Voice: "pill-icon icon-default-voice-16x16-white",
				Camera: "pill-icon icon-default-camera-white"
			};

			function Dt(e) {
				var t = e.id,
					n = e.children,
					r = e.gameData,
					o = e.isOnScreen,
					i = e.page,
					a = e.buildEventProperties,
					l = e.isFocused,
					u = e.topicId,
					e = qe.ThumbnailGameIconSize.size256,
					u = Te(r, u);
				return $().createElement(ye.Link, {
					url: U(r.placeId, r.name, a(r, t)),
					tabIndex: o ? 0 : -1,
					"aria-hidden": !o,
					className: "game-card-link",
					id: r.universeId.toString()
				}, $().createElement(Mt, {
					gameLayoutData: u,
					isFocused: !!l
				}), i === Y.GamesPage ? $().createElement("div", {
					className: "game-card-thumb-container"
				}, $().createElement(qe.Thumbnail2d, {
					type: qe.ThumbnailTypes.gameIcon,
					size: e,
					targetId: r.universeId,
					containerClass: "game-card-thumb",
					format: qe.ThumbnailFormat.jpeg,
					altName: r.name
				})) : $().createElement(qe.Thumbnail2d, {
					type: qe.ThumbnailTypes.gameIcon,
					size: e,
					targetId: r.universeId,
					containerClass: "game-card-thumb-container",
					format: qe.ThumbnailFormat.jpeg,
					altName: r.name
				}), $().createElement("div", {
					className: "game-card-name game-name-title",
					title: r.name
				}, r.name), n)
			}(ql = function(e) {
				var t = e.gameLayoutData,
					n = e.playerCountStyle,
					r = e.playerCount,
					o = e.isFocused,
					e = ze(t);
				return e ? $().createElement(kt, {
					pills: e,
					isFocused: o
				}) : null !== (o = null == t ? void 0 : t.pill) && void 0 !== o && o.types && 0 < t.pill.types.length ? $().createElement(Rt, {
					featureTypes: t.pill.types
				}) : void 0 === r || n !== L.Always && n !== L.Hover ? null : $().createElement(Nt, {
					playerCount: r,
					playerCountStyle: n
				})
			}).defaultProps = {
				gameLayoutData: void 0,
				playerCountStyle: void 0,
				playerCount: void 0
			};
			var Mt = ql,
				Ft = function() {
					return (Ft = Object.assign || function(e) {
						for (var t, n = 1, r = arguments.length; n < r; n++)
							for (var o in t = arguments[n]) Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
						return e
					}).apply(this, arguments)
				},
				jt = Xe.keyBoardEventCode,
				Ut = Xe.numberOfInGameAvatarIcons,
				Bt = Xe.numberOfInGameNames;

			function Gt(e) {
				var t = e.totalDownVotes,
					n = e.totalUpVotes,
					e = e.playerCount,
					t = ae(n, t),
					e = le(e);
				return $().createElement("div", {
					className: "game-card-info",
					"data-testid": "game-tile-stats"
				}, $().createElement("span", {
					className: "info-label icon-votes-gray"
				}), t ? $().createElement("span", {
					className: "info-label vote-percentage-label"
				}, t) : $().createElement("span", {
					className: "info-label no-vote"
				}), $().createElement("span", {
					className: "info-label icon-playing-counts-gray"
				}), $().createElement("span", {
					className: "info-label playing-counts-label"
				}, e))
			}

			function Ht(e) {
				var t = e.totalDownVotes,
					n = e.totalUpVotes,
					r = e.translate,
					e = Xe.RatingPercentageText,
					t = (null == (t = ie(n, t)) ? void 0 : t.toString()) || "--";
				return $().createElement("div", {
					className: "game-card-info",
					"data-testid": "game-tile-stats-rating"
				}, $().createElement("span", {
					className: "info-label icon-votes-gray"
				}), $().createElement("span", {
					className: "info-label vote-percentage-label"
				}, r(e, {
					percentRating: t
				}) || t + "% Rating"))
			}

			function Wt(e) {
				return e = e.footerData, $().createElement("div", {
					className: "game-card-info",
					"data-testid": "game-tile-stats-text-footer"
				}, $().createElement("span", {
					className: "info-label"
				}, e.text.textLiteral))
			}

			function zt(e) {
				var t = e.iconClassName,
					e = e.text;
				return $().createElement("div", {
					className: "game-card-info",
					"data-testid": "game-tile-stats-icon-text-footer"
				}, $().createElement("span", {
					className: ge()("info-label", t)
				}), $().createElement("span", {
					className: "info-label text-label-with-icon"
				}, e))
			}

			function Vt(e) {
				return e = e.footerText, $().createElement("div", {
					className: "game-card-info",
					"data-testid": "game-tile-stats-friend-activity"
				}, $().createElement("span", {
					className: "info-label"
				}, e))
			}

			function qt(e) {
				return e = e.translate, $().createElement("div", {
					className: "game-card-native-ad",
					"data-testid": "game-tile-sponsored-footer"
				}, $().createElement("div", {
					className: "native-ad-label"
				}, e(nt.LabelSponsoredAd), $().createElement(xt, {
					tooltipText: e(rt.LabelSponsoredAdsDisclosureStatic) || "Sponsored experiences are paid for by Creators. They may be shown to you based on general information about your device type, location, and demographics.",
					placement: "right",
					sizeInPx: 12
				})))
			}

			function Jt(e) {
				return e = e.user, $().createElement(qe.Thumbnail2d, {
					type: qe.ThumbnailTypes.avatarHeadshot,
					size: qe.ThumbnailAvatarHeadshotSize.size48,
					targetId: e.id,
					containerClass: "avatar avatar-headshot avatar-headshot-xs",
					imgClassName: "avatar-card-image",
					format: qe.ThumbnailFormat.webp,
					altName: e.displayName
				})
			}

			function Kt(e) {
				return e = e.translate, $().createElement("div", {
					className: "game-card-info",
					"data-testid": "wide-game-tile-sponsored-footer"
				}, $().createElement(xt, {
					tooltipText: e(rt.LabelSponsoredAdsDisclosureStatic) || "Sponsored experiences are paid for by Creators. They may be shown to you based on general information about your device type, location, and demographics.",
					placement: "right",
					sizeInPx: 12
				}), $().createElement("span", {
					className: "info-label text-label-with-icon"
				}, e(nt.LabelSponsoredAd)))
			}

			function Xt(e) {
				var t = e.friendsData,
					n = e.isOnline,
					r = Xe.maxFacepileFriendCountValue,
					r = (null == t ? void 0 : t.length) > r ? r.toString() + "+" : (null == t ? void 0 : t.length) > Ut ? null == t ? void 0 : t.length.toString() : "",
					e = r ? Ut - 1 : Ut,
					o = ge()("avatar-card", {
						"avatar-card-online": n
					});
				return $().createElement("div", {
					className: "info-avatar"
				}, r && $().createElement("div", {
					className: o
				}, $().createElement("div", {
					className: "avatar-count-container"
				}, $().createElement("span", {
					className: "avatar-count info-label"
				}, r))), t.slice(0, e).map(function(e) {
					return $().createElement("div", {
						className: o,
						key: e.displayName
					}, $().createElement(Jt, {
						user: e
					}))
				}))
			}

			function $t(e) {
				var t = e.friendsData,
					e = e.isOnline;
				if (0 === t.length) throw new Error("friendData should not be empty");
				return $().createElement("div", {
					className: "game-card-info",
					"data-testid": "game-tile-stats-" + (e ? "online" : "offline") + "-friends-facepile"
				}, $().createElement(Xt, {
					friendsData: t,
					isOnline: e
				}), $().createElement("span", {
					className: "info-label"
				}, t.map(function(e) {
					return e.displayName
				}).join(", ")))
			}

			function Yt(e) {
				var t = e.friendData,
					n = e.gameData,
					r = e.translate,
					o = (0, X.useState)(!1),
					e = o[0],
					i = o[1];
				if (0 === t.length) throw new Error("friendData should not be empty");
				return $().createElement("div", {
					className: "game-card-friend-info game-card-info",
					"data-testid": "game-tile-stats-friends"
				}, $().createElement("div", {
					className: "info-avatar",
					style: {
						width: 22 * (t.slice(0, Ut).length - 1) + 32 + "px"
					}
				}, t.slice(0, Ut).map(function(e) {
					return $().createElement("div", {
						className: "avatar-card",
						role: "button",
						tabIndex: 0,
						key: e.displayName,
						onClick: function(e) {
							e.stopPropagation(), e.preventDefault(), i(!0)
						},
						onKeyDown: function(e) {
							e.code === jt.enter && (e.stopPropagation(), e.preventDefault(), i(!0))
						}
					}, $().createElement(Jt, {
						user: e
					}))
				})), r && $().createElement("span", {
					className: "info-label text-overflow",
					"data-testid": "game-tile-stats-info-label"
				}, t.length > Bt ? r(nt.LabelPlayingOnePlusUsersWithComma, {
					username: t[0].displayName,
					count: t.length - Bt
				}) : r(nt.LabelPlayingOneUser, {
					user: t[0].displayName
				})), $().createElement(Zt, {
					friendsDataInGame: t,
					game: n,
					show: e,
					onHide: function(e) {
						e.stopPropagation(), e.preventDefault(), i(!1)
					}
				}))
			}
			Dt.defaultProps = {
				page: Y.HomePage,
				isOnScreen: !0,
				isFocused: !1
			}, Yt.defaultProps = {
				translate: void 0
			};
			var Zt = (0, p.withTranslations)(function(e) {
					var t = e.show,
						n = e.onHide,
						r = e.friendsDataInGame,
						o = e.game,
						e = e.translate;
					return $().createElement(ye.Modal, {
						show: t,
						onHide: n,
						size: "lg"
					}, $().createElement(Ct, {
						friendsData: r.map(function(e) {
							return Ft(Ft({}, e), {
								nameForDisplay: e.displayName
							})
						}),
						friendsInGame: r.map(function(e) {
							return e.id
						}),
						game: o,
						dismissModal: n,
						translate: e
					}))
				}, It),
				Qt = function(e, a, l, u) {
					return new(l = l || Promise)(function(n, t) {
						function r(e) {
							try {
								i(u.next(e))
							} catch (e) {
								t(e)
							}
						}

						function o(e) {
							try {
								i(u.throw(e))
							} catch (e) {
								t(e)
							}
						}

						function i(e) {
							var t;
							e.done ? n(e.value) : ((t = e.value) instanceof l ? t : new l(function(e) {
								e(t)
							})).then(r, o)
						}
						i((u = u.apply(e, a || [])).next())
					})
				},
				en = function(n, r) {
					var o, i, a, l = {
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
								if (o) throw new TypeError("Generator is already executing.");
								for (; l;) try {
									if (o = 1, i && (a = 2 & t[0] ? i.return : t[0] ? i.throw || ((a = i.return) && a.call(i), 0) : i.next) && !(a = a.call(i, t[1])).done) return a;
									switch (i = 0, a && (t = [2 & t[0], a.value]), t[0]) {
										case 0:
										case 1:
											a = t;
											break;
										case 4:
											return l.label++, {
												value: t[1],
												done: !1
											};
										case 5:
											l.label++, i = t[1], t = [0];
											continue;
										case 7:
											t = l.ops.pop(), l.trys.pop();
											continue;
										default:
											if (!(a = 0 < (a = l.trys).length && a[a.length - 1]) && (6 === t[0] || 2 === t[0])) {
												l = 0;
												continue
											}
											if (3 === t[0] && (!a || t[1] > a[0] && t[1] < a[3])) {
												l.label = t[1];
												break
											}
											if (6 === t[0] && l.label < a[1]) {
												l.label = a[1], a = t;
												break
											}
											if (a && l.label < a[2]) {
												l.label = a[2], l.ops.push(t);
												break
											}
											a[2] && l.ops.pop(), l.trys.pop();
											continue
									}
									t = r.call(n, l)
								} catch (e) {
									t = [6, e], i = 0
								} finally {
									o = a = 0
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
			(Ki = (0, X.forwardRef)(function(e, t) {
				var n = e.id,
					r = e.buildEventProperties,
					o = e.gameData,
					i = e.page,
					a = void 0 === i ? Y.HomePage : i,
					l = e.className,
					u = void 0 === l ? "grid-item-container game-card-container" : l,
					c = e.friendData,
					s = void 0 === c ? [] : c,
					d = e.isOnScreen,
					i = void 0 === d || d,
					l = e.shouldShowMetadata,
					f = void 0 === l || l,
					c = e.isSponsoredFooterAllowed,
					p = void 0 !== c && c,
					d = e.topicId,
					m = e.translate,
					l = (0, X.useState)(),
					v = l[0],
					h = l[1],
					c = Pe(),
					e = c[0],
					l = c[1],
					c = c[2],
					g = (0, X.useMemo)(function() {
						return B(s, o.universeId)
					}, [s, o.universeId]),
					y = Te(o, d);
				(0, X.useEffect)(function() {
					void 0 === v && 0 < g.length && Qt(void 0, void 0, void 0, function() {
						var t;
						return en(this, function(e) {
							switch (e.label) {
								case 0:
									return e.trys.push([0, 2, , 3]), [4, Ue(o.placeId.toString())];
								case 1:
									return t = e.sent(), h(t), [3, 3];
								case 2:
									return t = e.sent(), console.error(t), [3, 3];
								case 3:
									return [2]
							}
						})
					})
				}, [g, v]);
				return $().createElement("div", {
					ref: t,
					className: u,
					"data-testid": "game-tile",
					onMouseOver: l,
					onMouseLeave: c,
					onFocus: l,
					onBlur: c
				}, $().createElement(Dt, {
					id: n,
					isOnScreen: i,
					buildEventProperties: r,
					gameData: o,
					page: a,
					isFocused: e,
					topicId: d
				}, function() {
					if (!f) return $().createElement($().Fragment, null);
					if (null != o && o.isShowSponsoredLabel || null != o && o.isSponsored && p) return $().createElement(qt, {
						translate: m
					});
					var e = Ve(y);
					return e ? $().createElement(Wt, {
						footerData: e
					}) : 0 < g.length && v ? $().createElement(Yt, {
						friendData: g,
						gameData: v
					}) : null != o && o.friendActivityTitle ? $().createElement(Vt, {
						footerText: o.friendActivityTitle
					}) : $().createElement(Gt, {
						totalUpVotes: o.totalUpVotes,
						totalDownVotes: o.totalDownVotes,
						playerCount: o.playerCount
					})
				}()))
			})).displayName = "GameTile";
			var tn = Ki;
			($i = function(e) {
				var t = e.placeId,
					n = e.clientReferralUrl,
					r = e.buttonClassName,
					o = e.purchaseIconClassName,
					i = (0, X.useState)(void 0),
					a = i[0],
					l = i[1],
					e = (0, X.useState)(void 0),
					i = e[0],
					u = e[1];
				if ((0, X.useEffect)(function() {
						Ue(t).then(function(e) {
							return l(e)
						}).catch(function() {
							u(!0)
						})
					}, [t]), void 0 === a && !i) return $().createElement(rn, null);
				r = ge()(r, "btn-full-width");
				return $().createElement($().Fragment, null, $().createElement(ye.Link, {
					"data-testid": "hover-tile-purchase-button",
					className: r,
					url: n || (null == a ? void 0 : a.url)
				}, $().createElement("span", {
					className: o
				}), $().createElement("span", {
					className: "btn-text"
				}, (null == a ? void 0 : a.price) || "--"), " "))
			}).defaultProps = {
				clientReferralUrl: ""
			};
			var nn = $i,
				rn = function() {
					return $().createElement("div", {
						className: "shimmer play-button game-card-thumb-container",
						"data-testid": "play-button-default"
					})
				};

			function on(e) {
				var t = e.gameData,
					n = e.topicId,
					r = e.wideTileType,
					o = (0, X.useMemo)(function() {
						return W(t, n)
					}, [t, n]),
					e = (0, X.useMemo)(function() {
						return r === K.EventTile ? qe.ThumbnailGameThumbnailSize.width576 : qe.ThumbnailGameThumbnailSize.width384
					}, [r]);
				return null !== o ? $().createElement(qe.Thumbnail2d, {
					type: qe.ThumbnailTypes.assetThumbnail,
					size: e,
					targetId: o,
					containerClass: "brief-game-icon",
					format: qe.ThumbnailFormat.jpeg,
					altName: t.name
				}) : $().createElement(qe.Thumbnail2d, {
					type: qe.ThumbnailTypes.gameThumbnail,
					size: e,
					targetId: t.placeId,
					containerClass: "brief-game-icon",
					format: qe.ThumbnailFormat.jpeg,
					altName: t.name
				})
			}

			function an(e) {
				var t = e.wrapperClassName,
					n = e.isTileClickEnabled,
					r = e.isOnScreen,
					o = e.linkUrl,
					e = e.children;
				return n ? $().createElement(ye.Link, {
					url: o,
					className: t,
					tabIndex: r ? 0 : -1
				}, e) : $().createElement("span", {
					className: t
				}, e)
			}(Kl = function(e) {
				var t = e.universeId,
					n = e.placeId,
					r = e.playButtonEventProperties,
					o = e.buttonClassName,
					i = e.purchaseIconClassName,
					a = e.clientReferralUrl,
					l = e.shouldPurchaseNavigateToDetails,
					e = T.PlayButton.usePlayabilityStatus,
					u = T.PlayButton.PlayabilityStatuses,
					c = T.PlayButton.PlayButton,
					s = T.PlayButton.PurchaseButton,
					e = e(t),
					d = e[0],
					f = e[1];
				switch (d) {
					case void 0:
					case u.GuestProhibited:
					case u.Playable:
						return $().createElement(c, {
							universeId: t,
							placeId: n,
							status: null != d ? d : u.Playable,
							eventProperties: r,
							buttonClassName: o ? ge()(o, "regular-play-button") : void 0,
							disableLoadingState: !0
						});
					case u.PurchaseRequired:
						return l ? $().createElement(nn, {
							placeId: n,
							clientReferralUrl: a,
							purchaseIconClassName: null != i ? i : "icon-common-play",
							buttonClassName: ge()(null != o ? o : "btn-growth-lg play-button", "purchase-button")
						}) : $().createElement(s, {
							universeId: t,
							placeId: n,
							iconClassName: null != i ? i : "icon-common-play",
							refetchPlayabilityStatus: f,
							buttonClassName: o
						});
					case u.UniverseRootPlaceIsPrivate:
						return $().createElement("div", {
							className: null != o ? o : "btn-growth-lg play-button"
						}, $().createElement("span", {
							className: "icon-status-private"
						}));
					default:
						return $().createElement("div", {
							className: null != o ? o : "btn-growth-lg play-button"
						}, $().createElement("span", {
							className: "icon-status-unavailable"
						}))
				}
			}).defaultProps = {
				playButtonEventProperties: {},
				buttonClassName: void 0,
				purchaseIconClassName: void 0,
				clientReferralUrl: void 0,
				shouldPurchaseNavigateToDetails: !1
			};
			var ln = Kl;
			(Lu = $().forwardRef(function(e, t) {
				var n = e.gameData,
					r = e.id,
					o = e.buildEventProperties,
					i = e.friendData,
					a = void 0 === i ? [] : i,
					l = e.playerCountStyle,
					u = e.playButtonStyle,
					c = e.navigationRootPlaceId,
					s = e.isSponsoredFooterAllowed,
					d = void 0 !== s && s,
					f = e.wideTileType,
					p = e.hoverStyle,
					m = e.topicId,
					v = e.isOnScreen,
					h = void 0 === v || v,
					g = e.isInterestedUniverse,
					y = void 0 === g ? void 0 : g,
					b = e.toggleInterest,
					w = void 0 === b ? void 0 : b,
					S = e.translate,
					C = 0 === r,
					I = r === Qe.maxWideGameTilesPerCarouselPage - 1,
					x = Pe(),
					E = x[0],
					P = x[1],
					T = x[2],
					i = (0, X.useState)(n.placeId),
					O = i[0],
					k = i[1];
				(0, X.useEffect)(function() {
					c && !Number.isNaN(c) ? k(parseInt(c, 10)) : n.navigationUid && je(n.navigationUid).then(function(e) {
						null != e && e.rootPlaceId && k(e.rootPlaceId)
					}).catch(function() {})
				}, [c, n.navigationUid]);

				function A() {
					return n.minimumAge && n.ageRecommendationDisplayName && f !== K.EventTile ? $().createElement("div", {
						className: "game-card-info",
						"data-testid": "game-tile-hover-age-rating"
					}, $().createElement("span", {
						className: "info-label"
					}, n.ageRecommendationDisplayName)) : null
				}
				var s = (0, X.useMemo)(function() {
						return U(O, n.name, o(n, r))
					}, [n, o, r, O]),
					v = o(n, r),
					N = (0, X.useMemo)(function() {
						return B(a, n.universeId)
					}, [a, n.universeId]),
					_ = (0, X.useMemo)(function() {
						return function(e, t) {
							if (!t) return [];
							var n = new Map(e.map(function(e) {
								return [e.id, e]
							}));
							return t.map(function(e) {
								return n.get(e.userId)
							}).filter(function(e) {
								return void 0 !== e
							})
						}(a, n.friendVisits)
					}, [a, n.friendVisits]),
					R = Te(n, m),
					g = function() {
						return (f !== K.GridTile || u === D.Enabled) && ((f !== K.EventTile || u === D.Enabled) && f !== K.InterestTile)
					},
					b = (0, X.useMemo)(function() {
						return null != R && R.title ? R.title : n.name
					}, [n.name, null == R ? void 0 : R.title]),
					e = f !== K.InterestTile,
					x = f !== K.InterestTile,
					i = (0, X.useCallback)(function() {
						w && w()
					}, [w]);
				return $().createElement("li", {
					className: ge()("list-item", "hover-game-tile", {
						"grid-tile": f === K.GridTile
					}, {
						"event-tile": f === K.EventTile
					}, {
						"interest-tile": f === K.InterestTile
					}, {
						"first-tile": C
					}, {
						"last-tile": I
					}, {
						"image-overlay": p === M.imageOverlay
					}, {
						"old-hover": p !== M.imageOverlay
					}, {
						focused: E
					}),
					"data-testid": "wide-game-tile",
					onMouseOver: x ? P : void 0,
					onMouseLeave: x ? T : void 0,
					onFocus: x ? P : void 0,
					onBlur: x ? T : void 0,
					id: n.universeId.toString()
				}, n.universeId && $().createElement("div", {
					className: "featured-game-container game-card-container",
					ref: t
				}, $().createElement(an, {
					wrapperClassName: "game-card-link",
					isTileClickEnabled: e,
					isOnScreen: h,
					linkUrl: s
				}, $().createElement("div", {
					className: "featured-game-icon-container"
				}, $().createElement(on, {
					gameData: n,
					topicId: m,
					wideTileType: f
				}), $().createElement(Mt, {
					gameLayoutData: R,
					playerCountStyle: l,
					playerCount: n.playerCount,
					isFocused: E
				})), $().createElement("div", {
					className: "info-container"
				}, $().createElement("div", {
					className: "info-metadata-container"
				}, $().createElement("div", {
					className: "game-card-name game-name-title",
					"data-testid": "game-tile-game-title",
					title: b
				}, b), $().createElement("div", {
					className: "wide-game-tile-metadata"
				}, $().createElement("div", {
					className: "base-metadata"
				}, function() {
					var e = A();
					if (E && p === M.imageOverlay && e) return e;
					if (n.isShowSponsoredLabel || n.isSponsored && d) return $().createElement(Kt, {
						translate: S
					});
					e = Ve(R);
					return e ? $().createElement(Wt, {
						footerData: e
					}) : 0 < (null == N ? void 0 : N.length) ? $().createElement($t, {
						friendsData: N,
						isOnline: !0
					}) : 0 < (null == _ ? void 0 : _.length) ? $().createElement($t, {
						friendsData: _,
						isOnline: !1
					}) : n.friendVisitedString ? $().createElement(zt, {
						iconClassName: "icon-pastname",
						text: n.friendVisitedString
					}) : l === L.Footer ? $().createElement(Gt, {
						totalUpVotes: n.totalUpVotes,
						totalDownVotes: n.totalDownVotes,
						playerCount: n.playerCount
					}) : $().createElement(Ht, {
						totalUpVotes: n.totalUpVotes,
						totalDownVotes: n.totalDownVotes,
						translate: S
					})
				}()), $().createElement("div", {
					className: "hover-metadata"
				}, A()))), E && p === M.imageOverlay && g() && $().createElement("div", {
					"data-testid": "game-tile-hover-game-tile-contents",
					className: "play-button-container"
				}, $().createElement(ln, {
					universeId: n.universeId.toString(),
					placeId: n.placeId.toString(),
					playButtonEventProperties: v,
					buttonClassName: "btn-growth-xs play-button",
					purchaseIconClassName: "icon-robux-white",
					clientReferralUrl: s,
					shouldPurchaseNavigateToDetails: !0
				})))), E && p !== M.imageOverlay && g() && $().createElement("div", {
					"data-testid": "game-tile-hover-game-tile-contents",
					className: "game-card-contents"
				}, $().createElement(ln, {
					universeId: n.universeId.toString(),
					placeId: n.placeId.toString(),
					playButtonEventProperties: v,
					buttonClassName: "btn-growth-xs play-button",
					purchaseIconClassName: "icon-robux-white",
					clientReferralUrl: s,
					shouldPurchaseNavigateToDetails: !0
				})), f === K.InterestTile && $().createElement(ye.Button, {
					"data-testid": "tile-interest-button",
					className: "tile-interest-button",
					variant: ye.Button.variants.primary,
					size: ye.Button.sizes.medium,
					title: S(it.ActionInterestCatcherInterested),
					onClick: i
				}, y ? $().createElement("span", {
					className: "icon-heart-red"
				}) : $().createElement("span", {
					className: "icon-heart"
				}), $().createElement("span", null, S(it.ActionInterestCatcherInterested)))))
			})).displayName = "WideGameTile";
			var un = Lu,
				cn = function() {
					return (cn = Object.assign || function(e) {
						for (var t, n = 1, r = arguments.length; n < r; n++)
							for (var o in t = arguments[n]) Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
						return e
					}).apply(this, arguments)
				},
				sn = function(e, t) {
					var n = {};
					for (o in e) Object.prototype.hasOwnProperty.call(e, o) && t.indexOf(o) < 0 && (n[o] = e[o]);
					if (null != e && "function" == typeof Object.getOwnPropertySymbols)
						for (var r = 0, o = Object.getOwnPropertySymbols(e); r < o.length; r++) t.indexOf(o[r]) < 0 && Object.prototype.propertyIsEnumerable.call(e, o[r]) && (n[o[r]] = e[o[r]]);
					return n
				};
			(Sl = (0, X.forwardRef)(function(e, t) {
				var n = e.componentType,
					r = sn(e, ["componentType"]);
				switch (n) {
					case K.AppGameTileNoMetadata:
						return $().createElement(tn, cn({
							ref: t,
							shouldShowMetadata: !1
						}, r));
					case K.GridTile:
					case K.EventTile:
					case K.InterestTile:
						return $().createElement(un, cn({
							ref: t,
							wideTileType: n
						}, r));
					default:
						return $().createElement(tn, cn({
							ref: t
						}, r))
				}
			})).displayName = "GameTileTypeMap";
			var dn = Sl,
				fn = (0, X.forwardRef)(function(e, t) {
					var n = e.gameData,
						r = e.buildEventProperties,
						o = e.translate,
						i = e.friendData,
						a = e.componentType,
						l = e.playerCountStyle,
						u = e.playButtonStyle,
						c = e.navigationRootPlaceId,
						s = e.isSponsoredFooterAllowed,
						d = e.hoverStyle,
						f = e.topicId,
						p = e.isExpandHomeContentEnabled,
						m = e.tileRef,
						p = ge()("game-carousel", {
							"wide-game-tile-carousel": a === K.GridTile || a === K.EventTile
						}, {
							"expand-home-content": p
						}, {
							"expand-home-content-disabled": !p
						});
					return $().createElement("div", {
						"data-testid": "game-carousel",
						ref: t,
						className: p
					}, n.map(function(e, t) {
						return $().createElement(dn, {
							componentType: a,
							playerCountStyle: l,
							playButtonStyle: u,
							navigationRootPlaceId: c,
							isSponsoredFooterAllowed: s,
							hoverStyle: d,
							topicId: f,
							ref: m,
							key: t,
							id: t,
							gameData: e,
							translate: o,
							buildEventProperties: r,
							friendData: i
						})
					}))
				});

			function pn(e) {
				var t = e.children,
					e = (e = (e = null === (e = window.location.href) || void 0 === e ? void 0 : e.split("?")[1]) && re(e)) && (e.discoverPageSessionInfo || e.homePageSessionInfo || e.spotlightPageSessionInfo),
					e = (0, X.useState)(e && "string" == typeof e ? e : N.uuidService.generateRandomUuid())[0];
				return $().createElement(yn.Provider, {
					value: e
				}, t)
			}

			function mn() {
				return (0, X.useContext)(yn)
			}

			function vn(e) {
				var n = e.defaultSubtitle,
					t = e.endTimestamp,
					r = e.countdownString,
					o = e.formatSubtitleLink,
					i = e.subtitleLink,
					a = e.handleSeeAllLinkClick,
					l = e.backgroundImageAssetId,
					u = (0, X.useMemo)(function() {
						var e = t && parseInt(t, 10);
						if (e || 0 === e) return e
					}, [t]),
					c = (e = (0, X.useState)(void 0 !== u ? u - Math.floor(Date.now() / 1e3) : void 0))[0],
					s = e[1];
				(0, X.useEffect)(function() {
					if (void 0 !== u) {
						s(u - Math.floor(Date.now() / 1e3));
						var e = setInterval(function() {
							s(u - Math.floor(Date.now() / 1e3))
						}, 15e3);
						return function() {
							clearInterval(e)
						}
					}
					s(void 0)
				}, [u]);
				var d = (0, X.useMemo)(function() {
						if (void 0 !== c && r) {
							var e = 0,
								t = 0;
							if (0 < c && (t = Math.ceil(c / 60), t -= 60 * (e = Math.floor(t / 60))), e < 24) return r.replace("{hours}", e.toString()).replace("{minutes}", t.toString())
						}
						return n
					}, [n, c, r]),
					e = (0, X.useMemo)(function() {
						if (o && i && d) {
							var e = d.indexOf(bn),
								t = d.indexOf(wn);
							if (-1 !== e && -1 !== t && e < t) {
								var n = d.slice(0, e),
									e = d.slice(e + bn.length, t),
									t = d.slice(t + wn.length);
								return $().createElement(ye.Link, {
									url: i,
									onClick: a
								}, n, $().createElement("span", {
									className: "link-text"
								}, e), t, l ? $().createElement("span", {
									className: "icon-chevron-right-dark"
								}) : $().createElement("span", {
									className: "icon-chevron-right"
								}))
							}
						}
						return d
					}, [d, i, l, a]);
				return d ? $().createElement("div", {
					className: "sort-subtitle-container"
				}, $().createElement("span", {
					className: "font-sort-subtitle text-default"
				}, e)) : null
			}
			fn.displayName = "GameCarousel";
			var hn = function(t, e, n) {
					var r = (0, X.useState)(new Set),
						o = r[0],
						i = r[1],
						r = (0, X.useState)(new Set),
						a = r[0],
						l = r[1],
						u = (0, X.useRef)(null),
						c = (0, X.useRef)(n);
					(0, X.useEffect)(function() {
						c.current = n
					}, [n]);
					var s = (0, X.useCallback)(function() {
							ue(Array.from(a).filter(function(e) {
								return !o.has(e)
							}), Xe.maxTilesInGameImpressionsEvent).filter(function(e) {
								return 0 < e.length
							}).forEach(function(n) {
								var e, t = c.current(n);
								void 0 !== t && 0 < (null === (e = t.absPositions) || void 0 === e ? void 0 : e.length) && (t = ee.gameImpressions(t), P.eventStreamService.sendEvent.apply(P.eventStreamService, t), i(function(e) {
									var t = e;
									return n.forEach(function(e) {
										return t.add(e)
									}), t
								}))
							})
						}, [o, a]),
						r = we(function() {
							return s()
						}),
						d = r[0],
						f = r[1];
					(0, X.useEffect)(function() {
						var e, i = Array.from(null !== (e = null === (e = null == t ? void 0 : t.current) || void 0 === e ? void 0 : e.children) && void 0 !== e ? e : []);
						return u.current = P.elementVisibilityService.observeChildrenVisibility({
								elements: i,
								threshold: Xe.gameImpressionsIntersectionThreshold
							}, function(e, t) {
								f();
								var n, r, o = (n = t, r = [], e.forEach(function(t) {
									var e;
									null == t || !t.isIntersecting || 0 <= (e = i.findIndex(function(e) {
										return e === t.target
									})) && (r.push(e), n.unobserve(t.target))
								}), r.sort(function(e, t) {
									return e - t
								}));
								l(function(e) {
									var t = e;
									return o.forEach(function(e) {
										return t.add(e)
									}), t
								}), d()
							}),
							function() {
								null != u && u.current && u.current()
							}
					}, [t, e, a, d, f])
				},
				gn = function() {
					return (gn = Object.assign || function(e) {
						for (var t, n = 1, r = arguments.length; n < r; n++)
							for (var o in t = arguments[n]) Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
						return e
					}).apply(this, arguments)
				},
				yn = (0, X.createContext)(""),
				bn = Je.linkStartDelimiter,
				wn = Je.linkEndDelimiter,
				Sn = WebBlox;

			function Cn(e, t) {
				var n;
				if ("undefined" == typeof Symbol || null == e[Symbol.iterator]) {
					if (Array.isArray(e) || (n = function(e, t) {
							if (!e) return;
							if ("string" == typeof e) return In(e, t);
							var n = Object.prototype.toString.call(e).slice(8, -1);
							"Object" === n && e.constructor && (n = e.constructor.name);
							if ("Map" === n || "Set" === n) return Array.from(e);
							if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return In(e, t)
						}(e)) || t && e && "number" == typeof e.length) {
						n && (e = n);
						var r = 0,
							t = function() {};
						return {
							s: t,
							n: function() {
								return r >= e.length ? {
									done: !0
								} : {
									done: !1,
									value: e[r++]
								}
							},
							e: function(e) {
								throw e
							},
							f: t
						}
					}
					throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
				}
				var o, i = !0,
					a = !1;
				return {
					s: function() {
						n = e[Symbol.iterator]()
					},
					n: function() {
						var e = n.next();
						return i = e.done, e
					},
					e: function(e) {
						a = !0, o = e
					},
					f: function() {
						try {
							i || null == n.return || n.return()
						} finally {
							if (a) throw o
						}
					}
				}
			}

			function In(e, t) {
				(null == t || t > e.length) && (t = e.length);
				for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
				return r
			}

			function xn(e, t) {
				if ("function" == typeof e) return e(t);
				e && (e.current = t)
			}
			var En = 19 <= parseInt(X.version.split(".")[0], 10) ? function(e) {
					return function(r) {
						var o, i = [],
							t = Cn(e);
						try {
							for (t.s(); !(o = t.n()).done;) ! function() {
								var e = o.value,
									t = xn(e, r),
									n = "function" == typeof t;
								i.push(n ? t : function() {
									return xn(e, null)
								})
							}()
						} catch (e) {
							t.e(e)
						} finally {
							t.f()
						}
						return function() {
							var e, t = Cn(i);
							try {
								for (t.s(); !(e = t.n()).done;)(0, e.value)()
							} catch (e) {
								t.e(e)
							} finally {
								t.f()
							}
						}
					}
				} : function(r) {
					return function(e) {
						var t, n = Cn(r);
						try {
							for (n.s(); !(t = n.n()).done;) xn(t.value, e)
						} catch (e) {
							n.e(e)
						} finally {
							n.f()
						}
					}
				},
				Pn = "undefined" != typeof Map ? Map : (Object.defineProperty(On.prototype, "size", {
					get: function() {
						return this.__entries__.length
					},
					enumerable: !0,
					configurable: !0
				}), On.prototype.get = function(e) {
					e = Tn(this.__entries__, e), e = this.__entries__[e];
					return e && e[1]
				}, On.prototype.set = function(e, t) {
					var n = Tn(this.__entries__, e);
					~n ? this.__entries__[n][1] = t : this.__entries__.push([e, t])
				}, On.prototype.delete = function(e) {
					var t = this.__entries__,
						e = Tn(t, e);
					~e && t.splice(e, 1)
				}, On.prototype.has = function(e) {
					return !!~Tn(this.__entries__, e)
				}, On.prototype.clear = function() {
					this.__entries__.splice(0)
				}, On.prototype.forEach = function(e, t) {
					void 0 === t && (t = null);
					for (var n = 0, r = this.__entries__; n < r.length; n++) {
						var o = r[n];
						e.call(t, o[1], o[0])
					}
				}, On);

			function Tn(e, n) {
				var r = -1;
				return e.some(function(e, t) {
					return e[0] === n && (r = t, !0)
				}), r
			}

			function On() {
				this.__entries__ = []
			}
			var kn = "undefined" != typeof window && "undefined" != typeof document && window.document === document,
				An = void 0 !== $g.g && $g.g.Math === Math ? $g.g : "undefined" != typeof self && self.Math === Math ? self : "undefined" != typeof window && window.Math === Math ? window : Function("return this")(),
				Nn = "function" == typeof requestAnimationFrame ? requestAnimationFrame.bind(An) : function(e) {
					return setTimeout(function() {
						return e(Date.now())
					}, 1e3 / 60)
				},
				_n = 2,
				Rn = ["top", "right", "bottom", "left", "width", "height", "size", "weight"],
				Ln = "undefined" != typeof MutationObserver,
				Dn = (Mn.prototype.addObserver = function(e) {
					~this.observers_.indexOf(e) || this.observers_.push(e), this.connected_ || this.connect_()
				}, Mn.prototype.removeObserver = function(e) {
					var t = this.observers_,
						e = t.indexOf(e);
					~e && t.splice(e, 1), !t.length && this.connected_ && this.disconnect_()
				}, Mn.prototype.refresh = function() {
					this.updateObservers_() && this.refresh()
				}, Mn.prototype.updateObservers_ = function() {
					var e = this.observers_.filter(function(e) {
						return e.gatherActive(), e.hasActive()
					});
					return e.forEach(function(e) {
						return e.broadcastActive()
					}), 0 < e.length
				}, Mn.prototype.connect_ = function() {
					kn && !this.connected_ && (document.addEventListener("transitionend", this.onTransitionEnd_), window.addEventListener("resize", this.refresh), Ln ? (this.mutationsObserver_ = new MutationObserver(this.refresh), this.mutationsObserver_.observe(document, {
						attributes: !0,
						childList: !0,
						characterData: !0,
						subtree: !0
					})) : (document.addEventListener("DOMSubtreeModified", this.refresh), this.mutationEventsAdded_ = !0), this.connected_ = !0)
				}, Mn.prototype.disconnect_ = function() {
					kn && this.connected_ && (document.removeEventListener("transitionend", this.onTransitionEnd_), window.removeEventListener("resize", this.refresh), this.mutationsObserver_ && this.mutationsObserver_.disconnect(), this.mutationEventsAdded_ && document.removeEventListener("DOMSubtreeModified", this.refresh), this.mutationsObserver_ = null, this.mutationEventsAdded_ = !1, this.connected_ = !1)
				}, Mn.prototype.onTransitionEnd_ = function(e) {
					var e = e.propertyName,
						t = void 0 === e ? "" : e;
					Rn.some(function(e) {
						return !!~t.indexOf(e)
					}) && this.refresh()
				}, Mn.getInstance = function() {
					return this.instance_ || (this.instance_ = new Mn), this.instance_
				}, Mn.instance_ = null, Mn);

			function Mn() {
				function e() {
					i && (i = !1, r()), a && n()
				}

				function t() {
					Nn(e)
				}

				function n() {
					var e = Date.now();
					if (i) {
						if (e - l < _n) return;
						a = !0
					} else a = !(i = !0), setTimeout(t, o);
					l = e
				}
				var r, o, i, a, l;
				this.connected_ = !1, this.mutationEventsAdded_ = !1, this.mutationsObserver_ = null, this.observers_ = [], this.onTransitionEnd_ = this.onTransitionEnd_.bind(this), this.refresh = (r = this.refresh.bind(this), a = i = !(o = 20), l = 0, n)
			}
			var Fn = function(e, t) {
					for (var n = 0, r = Object.keys(t); n < r.length; n++) {
						var o = r[n];
						Object.defineProperty(e, o, {
							value: t[o],
							enumerable: !1,
							writable: !1,
							configurable: !0
						})
					}
					return e
				},
				jn = function(e) {
					return e && e.ownerDocument && e.ownerDocument.defaultView || An
				},
				Un = Vn(0, 0, 0, 0);

			function Bn(e) {
				return parseFloat(e) || 0
			}

			function Gn(n) {
				for (var e = [], t = 1; t < arguments.length; t++) e[t - 1] = arguments[t];
				return e.reduce(function(e, t) {
					return e + Bn(n["border-" + t + "-width"])
				}, 0)
			}

			function Hn(e) {
				var t = e.clientWidth,
					n = e.clientHeight;
				if (!t && !n) return Un;
				var r = jn(e).getComputedStyle(e),
					o = function(e) {
						for (var t = {}, n = 0, r = ["top", "right", "bottom", "left"]; n < r.length; n++) {
							var o = r[n],
								i = e["padding-" + o];
							t[o] = Bn(i)
						}
						return t
					}(r),
					i = o.left + o.right,
					a = o.top + o.bottom,
					l = Bn(r.width),
					u = Bn(r.height);
				return "border-box" === r.boxSizing && (Math.round(l + i) !== t && (l -= Gn(r, "left", "right") + i), Math.round(u + a) !== n && (u -= Gn(r, "top", "bottom") + a)), (e = e) !== jn(e).document.documentElement && (t = Math.round(l + i) - t, n = Math.round(u + a) - n, 1 !== Math.abs(t) && (l -= t), 1 !== Math.abs(n) && (u -= n)), Vn(o.left, o.top, l, u)
			}
			var Wn = "undefined" != typeof SVGGraphicsElement ? function(e) {
				return e instanceof jn(e).SVGGraphicsElement
			} : function(e) {
				return e instanceof jn(e).SVGElement && "function" == typeof e.getBBox
			};

			function zn(e) {
				return kn ? Wn(e) ? Vn(0, 0, (t = (t = e).getBBox()).width, t.height) : Hn(e) : Un;
				var t
			}

			function Vn(e, t, n, r) {
				return {
					x: e,
					y: t,
					width: n,
					height: r
				}
			}
			var qn = (Jn.prototype.isActive = function() {
				var e = zn(this.target);
				return (this.contentRect_ = e).width !== this.broadcastWidth || e.height !== this.broadcastHeight
			}, Jn.prototype.broadcastRect = function() {
				var e = this.contentRect_;
				return this.broadcastWidth = e.width, this.broadcastHeight = e.height, e
			}, Jn);

			function Jn(e) {
				this.broadcastWidth = 0, this.broadcastHeight = 0, this.contentRect_ = Vn(0, 0, 0, 0), this.target = e
			}
			var Kn = function(e, t) {
					var n, r, o, i = (n = (i = t).x, r = i.y, o = i.width, t = i.height, i = "undefined" != typeof DOMRectReadOnly ? DOMRectReadOnly : Object, i = Object.create(i.prototype), Fn(i, {
						x: n,
						y: r,
						width: o,
						height: t,
						top: r,
						right: n + o,
						bottom: t + r,
						left: n
					}), i);
					Fn(this, {
						target: e,
						contentRect: i
					})
				},
				Xn = ($n.prototype.observe = function(e) {
					if (!arguments.length) throw new TypeError("1 argument required, but only 0 present.");
					if ("undefined" != typeof Element && Element instanceof Object) {
						if (!(e instanceof jn(e).Element)) throw new TypeError('parameter 1 is not of type "Element".');
						var t = this.observations_;
						t.has(e) || (t.set(e, new qn(e)), this.controller_.addObserver(this), this.controller_.refresh())
					}
				}, $n.prototype.unobserve = function(e) {
					if (!arguments.length) throw new TypeError("1 argument required, but only 0 present.");
					if ("undefined" != typeof Element && Element instanceof Object) {
						if (!(e instanceof jn(e).Element)) throw new TypeError('parameter 1 is not of type "Element".');
						var t = this.observations_;
						t.has(e) && (t.delete(e), t.size || this.controller_.removeObserver(this))
					}
				}, $n.prototype.disconnect = function() {
					this.clearActive(), this.observations_.clear(), this.controller_.removeObserver(this)
				}, $n.prototype.gatherActive = function() {
					var t = this;
					this.clearActive(), this.observations_.forEach(function(e) {
						e.isActive() && t.activeObservations_.push(e)
					})
				}, $n.prototype.broadcastActive = function() {
					var e, t;
					this.hasActive() && (e = this.callbackCtx_, t = this.activeObservations_.map(function(e) {
						return new Kn(e.target, e.broadcastRect())
					}), this.callback_.call(e, t, e), this.clearActive())
				}, $n.prototype.clearActive = function() {
					this.activeObservations_.splice(0)
				}, $n.prototype.hasActive = function() {
					return 0 < this.activeObservations_.length
				}, $n);

			function $n(e, t, n) {
				if (this.activeObservations_ = [], this.observations_ = new Pn, "function" != typeof e) throw new TypeError("The callback provided as parameter 1 is not a function.");
				this.callback_ = e, this.controller_ = t, this.callbackCtx_ = n
			}
			var Yn = new("undefined" != typeof WeakMap ? WeakMap : Pn),
				Zn = function e(t) {
					if (!(this instanceof e)) throw new TypeError("Cannot call a class as a function.");
					if (!arguments.length) throw new TypeError("1 argument required, but only 0 present.");
					var n = Dn.getInstance(),
						n = new Xn(t, n, this);
					Yn.set(this, n)
				};
			["observe", "unobserve", "disconnect"].forEach(function(t) {
				Zn.prototype[t] = function() {
					var e;
					return (e = Yn.get(this))[t].apply(e, arguments)
				}
			});
			var lt = void 0 !== An.ResizeObserver ? An.ResizeObserver : Zn,
				Qn = $g(4777),
				er = $g(8550),
				tr = $g(8601);

			function nr(e, t) {
				return function(e) {
					if (Array.isArray(e)) return e
				}(e) || function(e, t) {
					if ("undefined" == typeof Symbol || !(Symbol.iterator in Object(e))) return;
					var n = [],
						r = !0,
						o = !1,
						i = void 0;
					try {
						for (var a, l = e[Symbol.iterator](); !(r = (a = l.next()).done) && (n.push(a.value), !t || n.length !== t); r = !0);
					} catch (e) {
						o = !0, i = e
					} finally {
						try {
							r || null == l.return || l.return()
						} finally {
							if (o) throw i
						}
					}
					return n
				}(e, t) || function(e, t) {
					if (!e) return;
					if ("string" == typeof e) return rr(e, t);
					var n = Object.prototype.toString.call(e).slice(8, -1);
					"Object" === n && e.constructor && (n = e.constructor.name);
					if ("Map" === n || "Set" === n) return Array.from(e);
					if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return rr(e, t)
				}(e, t) || function() {
					throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
				}()
			}

			function rr(e, t) {
				(null == t || t > e.length) && (t = e.length);
				for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
				return r
			}

			function or(t, e) {
				var n, r = Object.keys(t);
				return Object.getOwnPropertySymbols && (n = Object.getOwnPropertySymbols(t), e && (n = n.filter(function(e) {
					return Object.getOwnPropertyDescriptor(t, e).enumerable
				})), r.push.apply(r, n)), r
			}

			function ir(t) {
				for (var e = 1; e < arguments.length; e++) {
					var n = null != arguments[e] ? arguments[e] : {};
					e % 2 ? or(Object(n), !0).forEach(function(e) {
						ar(t, e, n[e])
					}) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : or(Object(n)).forEach(function(e) {
						Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
					})
				}
				return t
			}

			function ar(e, t, n) {
				return t in e ? Object.defineProperty(e, t, {
					value: n,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : e[t] = n, e
			}

			function lr(e) {
				var t = e.iconClassName,
					n = e.color,
					r = e.width,
					e = e.iconOverrideStyles,
					e = (r = sr({
						color: n,
						width: r,
						iconOverrideStyles: e || {}
					}).classes).iconBaseStyles,
					r = r.iconOverride;
				return X.createElement("span", {
					className: he(e, r, t),
					"data-testid": "icon-component"
				})
			}

			function ur(e) {
				var t = e.containerClassName,
					n = e.callback,
					r = e.linkPath,
					o = e.ariaLabel,
					i = e.tabIndex,
					a = e.onFocus,
					l = e.onFocusLost,
					u = e.dataTestId,
					c = e.children,
					e = (s = gr({}).classes).linkContainerOverride,
					s = s.buttonContainerOverride;
				return r ? X.createElement("a", {
					href: r,
					onClick: function(e) {
						e.stopPropagation(), n && n()
					},
					onKeyDown: function(e) {
						e.code === dr && (e.stopPropagation(), n && n())
					},
					className: he(t, e),
					"aria-label": o,
					tabIndex: i,
					onFocus: a,
					onMouseOver: a,
					onBlur: l,
					onMouseLeave: l,
					"data-testid": u
				}, c) : n ? X.createElement("button", {
					type: "button",
					onClick: function(e) {
						e.stopPropagation(), e.preventDefault(), n()
					},
					onKeyDown: function(e) {
						e.code === dr && (e.stopPropagation(), e.preventDefault(), n())
					},
					className: he(t, s),
					"aria-label": o,
					tabIndex: i,
					onFocus: a,
					onMouseOver: a,
					onBlur: l,
					onMouseLeave: l,
					"data-testid": u
				}, c) : X.createElement("div", {
					className: t,
					"aria-label": o,
					tabIndex: i,
					onFocus: a,
					onMouseOver: a,
					onBlur: l,
					onMouseLeave: l,
					"data-testid": u
				}, c)
			}
			var cr, sr = (0, Sn.makeStyles)()(function(e, t) {
					var n = t.color,
						r = t.width,
						t = t.iconOverrideStyles;
					return {
						iconBaseStyles: {
							display: "inline-flex",
							alignItems: "center",
							justifyContent: "center",
							color: n,
							width: "".concat(r, "px"),
							height: "".concat(r, "px")
						},
						iconOverride: ir({}, t)
					}
				}),
				dr = "Enter",
				fr = "{linkStart}",
				oe = "{linkEnd}",
				pr = "0.3s",
				mr = "cubic-bezier(0.45, 0, 0, 1)",
				vr = {
					backgroundColor: "transparent",
					border: "none",
					padding: 0,
					font: "inherit",
					cursor: "pointer",
					outline: "none",
					textAlign: "start"
				},
				hr = {
					overflow: "hidden",
					textOverflow: "ellipsis",
					whiteSpace: "nowrap",
					wordWrap: "break-word"
				},
				gr = (0, Sn.makeStyles)()(function() {
					return {
						linkContainerOverride: {
							color: "inherit",
							textDecoration: "none",
							"&:hover": {
								textDecoration: "none"
							},
							cursor: "pointer"
						},
						buttonContainerOverride: ir({}, vr)
					}
				});

			function yr(e) {
				var t, n, r = {};
				return void 0 === e || (void 0 !== e.layoutOrder && (r.order = e.layoutOrder), void 0 !== e.anchorPoint && (r.transformOrigin = "".concat(100 * e.anchorPoint.x, "% ").concat(100 * e.anchorPoint.y, "%")), void 0 !== e.automaticSize && (e.automaticSize === cr.XY ? (r.width = "auto", r.height = "auto") : e.automaticSize === cr.X ? r.width = "auto" : e.automaticSize === cr.Y && (r.height = "auto")), void 0 !== e.size && (r.width = "calc(".concat(100 * e.size.xScale, "% + ").concat(e.size.xOffset, "px)"), r.height = "calc(".concat(100 * e.size.yScale, "% + ").concat(e.size.yOffset, "px)")), void 0 !== e.position && (r.position = "absolute", r.left = "calc(".concat(100 * e.position.xScale, "% + ").concat(e.position.xOffset, "px)"), r.top = "calc(".concat(100 * e.position.yScale, "% + ").concat(e.position.yOffset, "px)"), t = null !== (n = null === (t = e.anchorPoint) || void 0 === t ? void 0 : t.x) && void 0 !== n ? n : 0, n = null !== (n = null === (n = e.anchorPoint) || void 0 === n ? void 0 : n.y) && void 0 !== n ? n : 0, 0 === t && 0 === n || (r.transform = "translate(-".concat(100 * t, "%, -").concat(100 * n, "%)"))), void 0 !== e.zIndex && (r.zIndex = e.zIndex)), r
			}

			function br(e) {
				return ar({}, "".concat(e.key), e.value)
			}

			function wr(e, t, n) {
				return ar({}, "&[".concat(e.key, "='").concat(e.value, "']"), ir({
					color: t
				}, n && {
					font: n.Font,
					letterSpacing: n.LetterSpacing,
					fontFamily: n.FontFamily,
					fontWeight: n.FontWeight,
					fontSize: n.FontSize,
					lineHeight: n.LineHeight
				}))
			}

			function Sr(e) {
				var r, t = e.onActivated,
					n = e.linkPath,
					o = e.text,
					i = e.textColor,
					a = e.fontStyle,
					l = void 0 === (d = e.gap) ? 0 : d,
					u = e.iconClassName,
					c = e.iconWidth,
					s = e.iconColor,
					d = void 0 !== (v = e.iconFirst) && v,
					f = e.containerOverrides,
					p = e.textOverrides,
					m = e.iconOverrides,
					v = (0, X.useMemo)(function() {
						return f ? yr(f) : {}
					}, [f]),
					e = (0, X.useMemo)(function() {
						return p ? yr(p) : {}
					}, [p]),
					h = (0, X.useMemo)(function() {
						return m ? yr(m) : {}
					}, [m]),
					e = (v = Nr({
						gap: l,
						textColor: i,
						fontStyle: a,
						containerOverrideStyles: v,
						textOverrideStyles: e
					}).classes).textIconRow,
					g = v.textIconRowText,
					y = v.textOverride,
					b = v.iconBaseStyles,
					w = (v = (r = o, (0, X.useMemo)(function() {
						if (!r) return {
							parsedTextContent: "",
							cleansedTextLabel: ""
						};
						var e = r.indexOf(Or),
							t = r.indexOf(kr);
						if (-1 !== e && -1 !== t && e < t) {
							var n = r.slice(0, e),
								e = r.slice(e + Or.length, t),
								t = r.slice(t + kr.length);
							return {
								parsedTextContent: X.createElement(X.Fragment, null, n, X.createElement("b", null, X.createElement("u", null, e)), t),
								cleansedTextLabel: "".concat(n).concat(e).concat(t)
							}
						}
						return {
							parsedTextContent: r,
							cleansedTextLabel: r
						}
					}, [r]))).parsedTextContent,
					o = v.cleansedTextLabel,
					v = (0, X.useMemo)(function() {
						return X.createElement("span", ir({
							className: he(g, y),
							"data-testid": "text-icon-row-text"
						}, br(Ar)), w)
					}, [w, g, y]),
					a = a.LineHeight * a.FontSize,
					S = null != s ? s : i,
					C = null != c ? c : a,
					a = (0, X.useMemo)(function() {
						return u ? X.createElement(lr, {
							iconClassName: he(b, u),
							color: S,
							width: C,
							iconOverrideStyles: h
						}) : null
					}, [S, C, b, u, h]),
					a = d ? X.createElement(X.Fragment, null, a, v) : X.createElement(X.Fragment, null, v, a);
				return X.createElement(ur, {
					containerClassName: e,
					callback: t,
					linkPath: n,
					ariaLabel: o,
					dataTestId: "text-icon-row"
				}, a)
			}

			function Cr(e) {
				var t = e.title,
					n = e.subtitle,
					r = e.textColor,
					o = e.titleFontStyle,
					i = e.subtitleFontStyle,
					a = void 0 === (a = e.subtitleMaxLines) ? 1 : a,
					e = e.textGap,
					e = _r({
						subtitleMaxLines: a,
						subtitleFontStyle: i,
						textColor: r,
						textGap: void 0 === e ? 0 : e
					}).classes;
				return X.createElement("div", {
					className: e.attributionTextContentContainer,
					"data-testid": "attribution-text-content-container"
				}, X.createElement(Sr, {
					text: t,
					fontStyle: o,
					textColor: r
				}), n && X.createElement("span", ir({
					className: e.attributionSubtitle
				}, br(Ar)), n))
			}

			function Ir(e) {
				var t = e.title,
					n = e.subtitle,
					r = e.textColor,
					o = e.height,
					i = e.imageComponent,
					a = e.rightButtonContent,
					l = e.titleFontStyle,
					u = e.subtitleFontStyle,
					c = e.subtitleMaxLines,
					s = e.titleSubtitleGap,
					e = (d = Rr({
						height: o
					}).classes).attributionRowContainer,
					o = d.attributionRowThumbnailContainer,
					d = d.attributionRowButtonContainer;
				return X.createElement("div", {
					className: e
				}, i && X.createElement("div", {
					className: o
				}, i), X.createElement(Cr, {
					title: t,
					subtitle: n,
					textColor: r,
					titleFontStyle: l,
					subtitleFontStyle: u,
					subtitleMaxLines: c,
					textGap: s
				}), a && X.createElement("div", {
					className: d
				}, a))
			}

			function xr(e) {
				var t = e.scrollArrowClassName,
					n = e.scrollIconClassName,
					r = e.handleClick;
				return X.createElement("div", {
					"data-testid": "carousel-scroll-arrow",
					className: t,
					onClick: r,
					onKeyDown: function(e) {
						e.code === dr && (e.stopPropagation(), e.preventDefault(), r())
					},
					role: "button",
					tabIndex: 0
				}, X.createElement("span", {
					className: n,
					"data-testid": "carousel-scroll-arrow-icon"
				}))
			}

			function Er(e) {
				var t = e.isScrollBackDisabled,
					n = e.isScrollForwardDisabled,
					r = e.onScrollBack,
					o = e.onScrollForward,
					i = e.scrollBackArrowClassName,
					e = e.scrollForwardArrowClassName;
				return X.createElement(X.Fragment, null, !t && X.createElement(xr, {
					scrollArrowClassName: i,
					scrollIconClassName: "icon-chevron-heavy-left",
					handleClick: r
				}), !n && X.createElement(xr, {
					scrollArrowClassName: e,
					scrollIconClassName: "icon-chevron-heavy-right",
					handleClick: o
				}))
			}

			function Pr() {
				var e = (r = nr((0, X.useState)(void 0), 2))[0],
					n = r[1],
					t = (0, X.useCallback)(function(e) {
						var t = null == e || null === (t = e.getBoundingClientRect()) || void 0 === t ? void 0 : t.width;
						void 0 !== t && n(t)
					}, []),
					r = (0, X.useCallback)(function(e) {
						e && e[0] && e[0].target && t(e[0].target)
					}, [t]),
					o = (0, X.useRef)(new Lr(r)),
					r = (0, X.useCallback)(function(e) {
						e && null != o && o.current && (t(e), o.current.disconnect(), o.current.observe(e))
					}, [t]);
				return (0, X.useEffect)(function() {
					var e = o.current;
					return function() {
						e && e.disconnect()
					}
				}, []), [r, e]
			}(te = cr = cr || {}).None = "None", te.X = "X", te.Y = "Y", te.XY = "XY";
			var Tr, Or = fr,
				kr = oe,
				Ar = {
					key: "data-sdui-text",
					value: "true"
				},
				Nr = (0, Sn.makeStyles)()(function(e, t) {
					var n = t.gap,
						r = t.textColor,
						o = t.fontStyle,
						i = t.containerOverrideStyles,
						t = t.textOverrideStyles;
					return {
						textIconRow: ir({
							display: "inline-flex",
							alignItems: "center",
							gap: "".concat(n, "px"),
							border: "none",
							margin: "0px",
							padding: "0px",
							backgroundColor: "transparent",
							appearance: "none",
							width: "100%"
						}, i),
						textIconRowText: ir(ir({}, hr), wr(Ar, r, o)),
						textOverride: ir({
							flexShrink: 1,
							minWidth: 0
						}, t),
						iconBaseStyles: {
							flexShrink: 0
						}
					}
				}),
				_r = (0, Sn.makeStyles)({
					name: "AttributionTextContent"
				})(function(e, t) {
					var n = t.subtitleMaxLines,
						r = t.subtitleFontStyle,
						o = t.textColor,
						t = t.textGap;
					return {
						attributionTextContentContainer: {
							display: "flex",
							flexDirection: "column",
							alignItems: "start",
							gap: "".concat(t, "px"),
							maxWidth: "100%"
						},
						attributionSubtitle: ir({
							fontSize: "14px",
							fontStyle: "normal",
							fontWeight: 400,
							lineHeight: "140%",
							overflow: "hidden",
							display: "-webkit-box",
							WebkitLineClamp: n,
							WebkitBoxOrient: "vertical"
						}, wr(Ar, o, r))
					}
				}),
				Rr = (0, Sn.makeStyles)()(function(e, t) {
					t = t.height;
					return {
						attributionRowContainer: {
							display: "flex",
							position: "relative",
							flexDirection: "row",
							alignItems: "center",
							width: "100%",
							height: t ? "".concat(t, "px") : "auto"
						},
						attributionRowThumbnailContainer: {
							height: "100%",
							aspectRatio: "1",
							display: "flex",
							flexDirection: "column",
							borderRadius: "8px",
							overflow: "hidden",
							marginRight: "12px"
						},
						attributionRowButtonContainer: {
							marginLeft: "auto"
						}
					}
				}),
				Lr = "undefined" != typeof window && window.ResizeObserver ? window.ResizeObserver : lt;

			function Dr(e, t, n) {
				var r = (c = Kr[e]).minItemWidth,
					o = c.minItemCount,
					i = c.maxItemCount,
					a = c.fractionalItemAmount,
					l = (0, X.useMemo)(function() {
						return null != n && n.columnGap ? n.columnGap : t ? t < 1024 ? 12 : t < 1280 ? 18 : 24 : 18
					}, [null == n ? void 0 : n.columnGap, t]),
					u = null !== (e = null == n ? void 0 : n.sideMargin) && void 0 !== e ? e : 0,
					c = (0, X.useMemo)(function() {
						if (t) {
							var e = t - 2 * u,
								e = Math.floor((e + l) / (r + l));
							return Math.min(Math.max(o, e), i)
						}
						return o
					}, [t, o, i, r, l, u]);
				return {
					numColumns: null !== (e = null == n ? void 0 : n.numColumns) && void 0 !== e ? e : c,
					fractionalItemAmount: null !== (c = null == n ? void 0 : n.fractionalItemAmount) && void 0 !== c ? c : a,
					columnGap: l,
					sideMargin: u
				}
			}

			function Mr(e) {
				var t = e.itemsContainerRef,
					n = e.items,
					r = e.renderItem,
					o = e.collectionItemSize,
					i = e.updateItemsPerRow,
					a = e.layoutOverrides,
					l = e.headerComponent,
					u = e.gapBetweenHeaderAndItems,
					c = e.isHorizontalScrollEnabled,
					s = e.scrollArrowBackgroundColor,
					d = e.scrollArrowBoxShadowColor,
					f = e.thresholdFromEnd,
					p = e.onReachedThresholdFromEnd,
					m = e.reportHorizontalScrollTelemetry,
					v = (w = nr(Pr(), 2))[0],
					h = w[1],
					g = (e = Dr(o, h, null != a ? a : {})).numColumns,
					y = e.fractionalItemAmount,
					b = e.columnGap,
					w = e.sideMargin;
				(0, X.useEffect)(function() {
					i && i(g)
				}, [i, g]);
				var S = c && n.length > g,
					o = (0, X.useMemo)(function() {
						if (h && 0 < g) {
							var e = S ? g + y : g;
							return (h - (null != b ? b : 0) * (Math.ceil(e) - 1)) / e
						}
						return 0
					}, [h, S, g, y, b]),
					e = (a = function(n, o, i, a, l, u, r, c, s) {
						var t = (0, X.useRef)(0),
							d = (0, X.useRef)(null),
							e = nr((0, X.useState)(!1), 2),
							f = e[0],
							p = e[1],
							m = nr((0, X.useState)(!1), 2),
							v = m[0],
							h = m[1],
							g = nr((0, X.useState)(!1), 2),
							y = g[0],
							b = g[1],
							w = (0, X.useRef)(!1),
							S = (0, X.useCallback)(function(e) {
								return t.current = e < 0 ? 0 : u - a < e ? u - a : e, t.current
							}, [u, a]),
							C = (0, X.useCallback)(function(e) {
								var t;
								n && c && d.current && i && (t = Math.max(null != r ? r : 0, 3 * i), e + i >= d.current.scrollWidth - t ? w.current || (c(), w.current = !0) : w.current = !1)
							}, [c, d, i, r, n]),
							I = (0, X.useCallback)(function(e, t) {
								var n, r;
								d.current && (n = d.current.scrollLeft, r = e * (o + (null != l ? l : 0)), d.current.scrollLeft = r, C(r), p(e <= 0), h(u - a <= e), s && t && s(r - n, n, null != i ? i : -1))
							}, [o, l, C, u, a, i, s]);
						(0, X.useEffect)(function() {
							n && I(t.current, !1)
						}, [I, n]);
						var x = (0, X.useCallback)(function() {
								var e = S(t.current + a);
								I(e, !0)
							}, [S, I, a]),
							E = (0, X.useCallback)(function() {
								var e = S(t.current - a);
								I(e, !0)
							}, [S, I, a]),
							P = (0, X.useCallback)(function(e) {
								y || (b(!0), e(), setTimeout(function() {
									b(!1)
								}, 500))
							}, [y]),
							e = (0, X.useCallback)(function() {
								P(E)
							}, [E, P]),
							m = (0, X.useCallback)(function() {
								P(x)
							}, [x, P]),
							g = (0, X.useCallback)(function(e) {
								return e >= t.current && e < t.current + a
							}, [t, a]);
						return {
							carouselScrollRef: d,
							isScrollBackDisabled: f || y,
							isScrollForwardDisabled: v || y,
							handleScrollBackClick: e,
							handleScrollForwardClick: m,
							getIsTileVisible: g
						}
					}(S, o, h, g, b, n.length, f, p, m)).carouselScrollRef,
					c = a.isScrollBackDisabled,
					f = a.isScrollForwardDisabled,
					p = a.handleScrollBackClick,
					m = a.handleScrollForwardClick,
					C = a.getIsTileVisible,
					u = (w = Xr({
						itemWidth: o,
						columnGap: b,
						sideMargin: w,
						gapBetweenHeaderAndItems: u,
						scrollArrowBackgroundColor: s,
						scrollArrowBoxShadowColor: d,
						scrollArrowBaseClassName: a = "scroll-arrow",
						scrollArrowPrevClassName: "prev",
						scrollArrowNextClassName: "next"
					}).classes).collectionCarouselContainer,
					s = w.carouselContainer,
					d = w.carousel,
					I = w.carouselItem;
				return X.createElement("div", {
					className: u
				}, l, X.createElement("div", {
					ref: v,
					className: s
				}, X.createElement("div", {
					ref: En([e, t]),
					className: d
				}, n.map(function(e, t) {
					return X.createElement("div", {
						key: t,
						id: "collection-carousel-item",
						className: I
					}, r(e, t, C(t)))
				})), S && X.createElement(Er, {
					isScrollBackDisabled: c,
					isScrollForwardDisabled: f,
					onScrollBack: p,
					onScrollForward: m,
					scrollBackArrowClassName: he(a, "prev"),
					scrollForwardArrowClassName: he(a, "next")
				})))
			}

			function Fr(e) {
				var t = e.itemsContainerRef,
					n = e.items,
					r = e.renderItem,
					o = e.collectionItemSize,
					i = e.updateItemsPerRow,
					a = e.layoutOverrides,
					l = e.headerComponent,
					u = e.gapBetweenHeaderAndItems,
					c = nr(Pr(), 2),
					e = c[0],
					s = c[1],
					d = (o = Dr(o, s, null != a ? a : {})).numColumns,
					f = o.columnGap,
					a = o.sideMargin;
				(0, X.useEffect)(function() {
					i && i(d)
				}, [i, d]);
				var o = (0, X.useMemo)(function() {
						return s && 0 < d ? (s - (null != f ? f : 0) * (Math.ceil(d) - 1)) / d : 0
					}, [s, d, f]),
					a = (o = $r({
						itemWidth: o,
						columnGap: f,
						sideMargin: a,
						gapBetweenHeaderAndItems: u
					}).classes).collectionGridContainer,
					u = o.grid,
					p = o.gridItem;
				return X.createElement("div", {
					className: a
				}, l, X.createElement("div", {
					ref: En([e, t]),
					className: u
				}, n.map(function(e, t) {
					return X.createElement("div", {
						key: t,
						id: "collection-grid-item",
						className: p
					}, r(e, t))
				})))
			}

			function jr(e) {
				var t = e.avatarThumbnails,
					n = e.iconWidth,
					r = e.avatarContainerBackgroundColor,
					o = e.avatarImageBackgroundColor,
					e = e.avatarBorderColor,
					e = (o = Yr({
						iconWidth: n,
						avatarContainerBackgroundColor: r,
						avatarImageBackgroundColor: o,
						avatarBorderColor: e,
						maxZIndex: t.length
					}).classes).facepileContainer,
					i = o.avatarContainer;
				return X.createElement("div", {
					className: e
				}, t.map(function(e) {
					return X.createElement("div", {
						key: e.key,
						className: i
					}, e)
				}))
			}

			function Ur(e) {
				var t = (l = e.gradient).startColor,
					n = l.endColor,
					r = l.startTransparency,
					o = l.endTransparency,
					i = l.degree,
					e = void 0 === (a = l.heightPercent) ? 1 : a,
					a = void 0 === (a = l.widthPercent) ? 1 : a,
					l = void 0 === (l = l.midpointPercent) ? .5 : l,
					u = (i + 90) % 360,
					c = 1 - r,
					s = 1 - o,
					e = "".concat(100 * e, "%"),
					a = "".concat(100 * a, "%"),
					d = "".concat(100 * l, "%"),
					l = (0, X.useMemo)(function() {
						return "linear-gradient(".concat(u, "deg, ").concat(t).concat(Math.round(255 * c).toString(16).padStart(2, "0"), ", ").concat(d, ", ").concat(n).concat(Math.round(255 * s).toString(16).padStart(2, "0"), ")")
					}, [t, n, c, s, u, d]),
					a = Zr({
						linearGradient: l,
						height: e,
						width: a
					}).classes;
				return X.createElement("div", {
					className: a.gradient
				})
			}

			function Br(e) {
				var t = e.gradient,
					n = e.gradientHeightPercent,
					r = e.gradientWidthPercent,
					o = t.startColor,
					i = t.endColor,
					a = t.startTransparency,
					e = t.endTransparency,
					l = (t.degree + 90) % 360,
					u = 1 - a,
					c = 1 - e,
					a = "".concat(100 * n, "%"),
					e = "".concat(100 * r, "%"),
					n = (0, X.useMemo)(function() {
						return "linear-gradient(".concat(l, "deg, ").concat(o).concat(Math.round(255 * u).toString(16).padStart(2, "0"), ", ").concat(i).concat(Math.round(255 * c).toString(16).padStart(2, "0"), ")")
					}, [o, i, u, c, l]),
					r = (0, Sn.makeStyles)()(function() {
						return {
							heroUnitGradient: {
								bottom: "0px",
								left: "0px",
								position: "absolute"
							}
						}
					})().classes.heroUnitGradient;
				return X.createElement("div", {
					style: {
						background: n,
						width: e,
						height: a
					},
					className: r
				})
			}

			function Gr(e) {
				var t = e.title,
					n = e.subtitle,
					r = e.titleImageComponent,
					o = e.heroUnitRef,
					i = e.gradient,
					a = e.gradientHeightPercent,
					l = e.gradientWidthPercent,
					u = e.bottomRowComponent,
					c = e.overlayPillComponent,
					s = e.forceViewportWidth,
					d = void 0 === (p = e.titleImageAspectRatio) ? 3 : p,
					f = e.titleImageHeightPercentage,
					p = e.minCardHeight,
					s = (e = to({
						hasTitleImage: !!r,
						forceSmallView: e = void 0 !== s && s <= 414,
						forceMediumView: s = void 0 !== s && s <= 600 && 415 <= s,
						forceSmallOrMediumView: e || s,
						minCardHeight: p,
						titleImageHeightPercentLarge: null != f ? f : .3,
						titleImageHeightPercentCompact: null != f ? f : .25,
						titleImageAspectRatio: d
					}).classes).heroUnitContentContainer,
					p = e.heroUnitTitleContainer,
					f = e.heroUnitTitle,
					d = e.heroUnitSubtitle,
					e = e.heroUnitTitleImageContainer,
					m = (0, X.useCallback)(function() {
						null != o && o.current && o.current.style.setProperty("--hero-unit-content-height", "".concat(o.current.getBoundingClientRect().height, "px"))
					}, [o]);
				return (0, X.useEffect)(function() {
					var e = null == o ? void 0 : o.current;
					if (e) {
						m();
						var t = new ResizeObserver(er(m, 100));
						return t.observe(e),
							function() {
								t.unobserve(e)
							}
					}
				}, [o, m]), t = r ? X.createElement("div", {
					className: e
				}, r) : X.createElement("span", {
					className: f
				}, t), X.createElement("div", {
					className: s,
					ref: o
				}, X.createElement(Br, {
					gradient: i,
					gradientHeightPercent: a,
					gradientWidthPercent: l
				}), c, X.createElement("div", {
					className: p
				}, t, X.createElement("span", {
					className: d
				}, n)), u)
			}

			function Hr(e) {
				var t = e.backgroundImageComponent,
					n = e.forceViewportWidth,
					r = e.minCardHeight,
					o = void 0 !== n && n <= 600,
					n = (e = (0, Sn.makeStyles)()(function() {
						return {
							heroUnitBackgroundWindow: ir(ir({
								height: "".concat(336, "px"),
								width: "100%",
								position: "absolute",
								top: "24px",
								overflow: "hidden",
								borderRadius: "8px",
								display: "flex",
								flexDirection: "column",
								alignItems: "center",
								justifyContent: "center",
								minHeight: "".concat(r, "px")
							}, o ? {
								aspectRatio: "16 / 9",
								height: "auto",
								top: "16px"
							} : {}), {}, {
								"@media (max-width: 600px)": {
									aspectRatio: "16 / 9",
									height: "auto",
									top: "16px"
								}
							}),
							heroUnitBackgroundContainer: ir(ir({
								"--parallax-scale": "100",
								minWidth: "max(100%, 1320px)",
								height: "436px",
								display: "flex",
								flexDirection: "column",
								transform: "translateY(calc(var(--parallax-scale) * ((var(--scroll) * 1px) - 0.5px)))",
								"@media (prefers-reduced-motion)": {
									transform: "translateY(0.5px)"
								},
								"@media (min-width: 1320px)": {
									height: "auto"
								}
							}, o ? {
								minHeight: "calc(100% + 66px)",
								width: "auto",
								"--parallax-scale": "66"
							} : {}), {}, {
								"@media (max-width: 600px)": {
									minHeight: "calc(100% + 66px)",
									width: "auto",
									"--parallax-scale": "66"
								}
							})
						}
					})().classes).heroUnitBackgroundWindow,
					e = e.heroUnitBackgroundContainer;
				return X.createElement("div", {
					className: n
				}, X.createElement("div", {
					className: e
				}, t))
			}

			function Wr(e) {
				var t = e.title,
					n = e.subtitle,
					r = e.titleImageComponent,
					o = e.foregroundImageComponent,
					i = e.backgroundImageComponent,
					a = e.gradient,
					l = void 0 === (g = e.gradientHeightPercent) ? .5 : g,
					u = void 0 === (P = e.gradientWidthPercent) ? 1 : P,
					c = e.backgroundClickAction,
					s = e.backgroundClickLinkPath,
					d = e.bottomRowComponent,
					f = e.overlayPillComponent,
					p = void 0 === (y = e.minForegroundHeightPercent) ? .8 : y,
					m = void 0 === (E = e.maxForegroundHeightPercent) ? 1 : E,
					v = e.forceViewportWidth,
					h = void 0 === (b = e.titleImageAspectRatio) ? 3 : b,
					g = e.titleImageHeightPercentage,
					y = void 0 === (P = e.minCardHeight) ? 262 : P,
					b = void 0 === (E = e.foregroundAspectRatio) ? 1 : E,
					w = X.useRef(!1),
					S = (P = nr(X.useState(1), 2))[0],
					C = P[1],
					e = void 0 !== v && v <= 600,
					I = X.useRef(null),
					x = X.useRef(null),
					E = "".concat(Math.round(100 * p), "%"),
					P = "".concat(Math.round(100 * m), "%"),
					p = (m = no({
						forceViewportWidth: v,
						maxForegroundHeightPercentString: P,
						forceSmallOrMediumView: e,
						minForegroundHeightPercentString: E,
						foregroundScaleFactor: 360 * (m - p),
						foregroundAspectRatio: b
					}).classes).heroUnitContainer,
					b = m.heroUnitForegroundContainer,
					m = m.heroUnitTopSpacer,
					T = (0, X.useCallback)(function() {
						var e = Qn(.2, 0, .8, 1);
						if (I.current && window.innerHeight) {
							var t = S;
							if (!w.current) {
								var n = I.current.getBoundingClientRect().top + 168;
								if (n <= 0) return;
								t = Math.min(n, window.innerHeight) / window.innerHeight, C(t)
							}
							n = I.current.getBoundingClientRect(), t = (t - n.top / window.innerHeight) / t, t = e(Math.max(Math.min(t, 1), 0));
							x.current && (x.current.style.setProperty("--scroll", t.toString()), x.current.style.setProperty("--hero-unit-container-width", "".concat(n.width, "px")))
						}
					}, [I, w, S]);
				return (0, X.useEffect)(function() {
					var e = er(T, 100),
						t = new MutationObserver(e);
					document.body && !w.current && t.observe(document.body, {
						childList: !0,
						subtree: !0
					}), T();

					function n() {
						T(), w.current = !0, t.disconnect()
					}
					return window.addEventListener("scroll", n), window.addEventListener("resize", n),
						function() {
							window.removeEventListener("scroll", n), window.removeEventListener("resize", n), t.disconnect()
						}
				}, [w, T]), X.createElement("div", {
					ref: x
				}, X.createElement(ur, {
					containerClassName: p,
					callback: c,
					linkPath: s,
					ariaLabel: t,
					dataTestId: "hero-unit"
				}, X.createElement("div", {
					className: m
				}), X.createElement(Hr, {
					backgroundImageComponent: i,
					forceViewportWidth: v,
					minCardHeight: y
				}), X.createElement("div", {
					className: b
				}, o), X.createElement(Gr, {
					title: t,
					subtitle: n,
					titleImageComponent: r,
					heroUnitRef: I,
					gradient: a,
					gradientHeightPercent: l,
					gradientWidthPercent: u,
					bottomRowComponent: d,
					overlayPillComponent: f,
					forceViewportWidth: v,
					titleImageAspectRatio: h,
					titleImageHeightPercentage: g,
					minCardHeight: y
				})))
			}

			function zr(e) {
				var t = e.pillText,
					e = (n = (0, Sn.makeStyles)()(function() {
						return {
							heroUnitPill: {
								width: "76px",
								height: "24px",
								borderRadius: "16px",
								backgroundColor: "white",
								color: "black",
								display: "flex",
								alignItems: "center",
								justifyContent: "center",
								marginBottom: "auto"
							},
							heroUnitPillText: {
								fontFamily: "Builder Sans",
								fontSize: "12px",
								fontWeight: 600,
								lineHeight: "12px"
							}
						}
					})().classes).heroUnitPill,
					n = n.heroUnitPillText;
				return X.createElement("div", {
					className: e
				}, X.createElement("span", {
					className: n
				}, t))
			}

			function Vr(e) {
				var t = e.onTitleActivated,
					n = e.titleText,
					r = e.titleLinkPath,
					o = e.titleTextColor,
					i = e.titleFontStyle,
					a = e.titleGap,
					l = e.titleIconClassName,
					u = e.titleIconWidth,
					c = e.titleIconColor,
					s = void 0 !== (x = e.titleIconFirst) && x,
					d = e.titleComponent,
					f = e.onSubtitleActivated,
					p = e.subtitleLinkPath,
					m = e.subtitleText,
					v = e.subtitleTextColor,
					h = e.subtitleFontStyle,
					g = e.subtitleGap,
					y = e.subtitleIconClassName,
					b = e.subtitleIconWidth,
					w = e.subtitleIconColor,
					S = void 0 !== (I = e.subtitleIconFirst) && I,
					C = e.subtitleComponent,
					I = void 0 === (x = e.verticalGap) ? 0 : x,
					x = e.iconComponent,
					E = e.containerOverrides,
					e = (0, X.useMemo)(function() {
						return E ? yr(E) : {}
					}, [E]),
					e = (I = ro({
						verticalGap: I,
						containerOverrideStyles: e
					}).classes).sectionHeader,
					P = I.titleSubtitleContainer,
					T = (0, X.useMemo)(function() {
						return d || (void 0 !== n && void 0 !== o && void 0 !== i ? X.createElement(Sr, {
							text: n,
							textColor: o,
							fontStyle: i,
							gap: a,
							iconClassName: l,
							iconWidth: u,
							iconColor: c,
							iconFirst: s
						}) : null)
					}, [d, i, a, l, c, s, u, n, o]),
					O = (0, X.useMemo)(function() {
						return C || (void 0 !== m && void 0 !== v && void 0 !== h ? X.createElement(Sr, {
							onActivated: f,
							linkPath: p,
							text: m,
							textColor: v,
							fontStyle: h,
							gap: g,
							iconClassName: y,
							iconWidth: b,
							iconColor: w,
							iconFirst: S
						}) : null)
					}, [f, p, C, h, g, y, w, S, b, m, v]),
					I = x,
					x = (0, X.useMemo)(function() {
						return X.createElement(ur, {
							containerClassName: P,
							callback: t,
							linkPath: r,
							ariaLabel: n,
							dataTestId: "section-header-title-subtitle-container"
						}, T, O)
					}, [t, O, T, r, P, n]);
				return X.createElement("div", {
					className: e,
					"data-testid": "section-header"
				}, x, I)
			}

			function qr(e) {
				var t = e.topLeftSlot,
					n = e.topMiddleSlot,
					r = e.topRightSlot,
					o = e.centerLeftSlot,
					i = e.centerMiddleSlot,
					a = e.centerRightSlot,
					l = e.bottomLeftSlot,
					u = e.bottomMiddleSlot,
					c = e.bottomRightSlot,
					s = void 0 === (f = e.padding) ? 0 : f,
					d = e.containerOverrides,
					f = e.children,
					e = (0, X.useMemo)(function() {
						return d ? yr(d) : {}
					}, [d]),
					p = lo({
						padding: s,
						containerOverrideStyles: e
					}).classes,
					m = (0, X.useMemo)(function() {
						return {
							topLeftSlot: t,
							topMiddleSlot: n,
							topRightSlot: r,
							centerLeftSlot: o,
							centerMiddleSlot: i,
							centerRightSlot: a,
							bottomLeftSlot: l,
							bottomMiddleSlot: u,
							bottomRightSlot: c
						}
					}, [t, n, r, o, i, a, l, u, c]),
					e = (0, X.useMemo)(function() {
						return io.map(function(e) {
							var t = m[e];
							if (t) {
								var n = p[e];
								return X.createElement("div", {
									key: e,
									className: n,
									"data-testid": "slot-wrapper-".concat(e)
								}, t)
							}
							return null
						}).filter(function(e) {
							return null !== e
						})
					}, [m, p]);
				return X.createElement("div", {
					className: p.overlayContainer,
					"data-testid": "slot-overlay-container"
				}, f, e)
			}

			function Jr(e) {
				var t = e.titleText,
					n = e.titleLines,
					r = e.titleFontStyles,
					o = e.titleColor,
					i = e.titleComponent,
					a = e.footerComponent,
					l = e.ctaButtonComponent,
					u = e.isContained,
					c = e.containmentPadding,
					e = n * (r.LineHeight * r.FontSize),
					r = (o = uo({
						titleHeight: e,
						titleLines: n,
						titleColor: o,
						titleFontStyles: r,
						isContained: u,
						containmentPadding: c
					}).classes).tileBottomContentContainer,
					u = o.tileBottomLeftContentContainer,
					c = o.tileBottomRightContentContainer,
					s = o.tileTitleContainer,
					d = o.tileTitleText,
					o = (0, X.useMemo)(function() {
						return i || (t ? X.createElement("div", {
							className: s,
							"data-testid": "tile-title-container"
						}, X.createElement("div", ir({
							className: d
						}, br(Ar)), t)) : null)
					}, [i, t, s, d]);
				return X.createElement("div", {
					className: r
				}, X.createElement("div", {
					className: u
				}, o, a && a), l && X.createElement("div", {
					className: c
				}, l))
			}(Tm = Tr = Tr || {}).XSmall = "XSmall", Tm.Small = "Small", Tm.Medium = "Medium", Tm.Large = "Large", Tm.XLarge = "XLarge";
			var Kr = (ar(ql = {}, Tr.XSmall, {
					minItemWidth: 80,
					minItemCount: 3,
					maxItemCount: 20,
					fractionalItemAmount: .15
				}), ar(ql, Tr.Small, {
					minItemWidth: 150,
					minItemCount: 3,
					maxItemCount: 12,
					fractionalItemAmount: .15
				}), ar(ql, Tr.Medium, {
					minItemWidth: 233,
					minItemCount: 2,
					maxItemCount: 6,
					fractionalItemAmount: .15
				}), ar(ql, Tr.Large, {
					minItemWidth: 300,
					minItemCount: 1,
					maxItemCount: 4,
					fractionalItemAmount: .3
				}), ar(ql, Tr.XLarge, {
					minItemWidth: 300,
					minItemCount: 1,
					maxItemCount: 1,
					fractionalItemAmount: .1
				}), ql),
				Xr = (0, Sn.makeStyles)()(function(e, t) {
					var n = t.itemWidth,
						r = t.columnGap,
						o = t.sideMargin,
						i = t.gapBetweenHeaderAndItems,
						a = t.scrollArrowBackgroundColor,
						l = t.scrollArrowBoxShadowColor,
						u = t.scrollArrowBaseClassName,
						c = t.scrollArrowPrevClassName,
						t = t.scrollArrowNextClassName;
					return {
						collectionCarouselContainer: {
							display: "flex",
							flexDirection: "column",
							gap: "".concat(i, "px"),
							marginLeft: "".concat(null != o ? o : 0, "px"),
							marginRight: "".concat(null != o ? o : 0, "px")
						},
						carouselContainer: (ar(o = {
							position: "relative"
						}, "& .".concat(u), ir(ir(ir({
							position: "absolute",
							top: "calc(50% - (40px / 2))",
							width: "40px",
							height: "40px",
							borderRadius: "50%",
							display: "none",
							justifyContent: "center",
							alignItems: "center",
							cursor: "pointer",
							zIndex: 5
						}, a && {
							backgroundColor: a
						}), l && {
							boxShadow: "0px 0px 4px 0px ".concat(l)
						}), {}, (ar(l = {}, "&.".concat(c), {
							left: "-10px"
						}), ar(l, "&.".concat(t), {
							right: "-10px"
						}), ar(l, "opacity", .9), ar(l, "&:hover", {
							opacity: 1
						}), ar(l, "@media (pointer: coarse) and (not (any-pointer: fine))", {
							display: "none"
						}), l))), ar(o, "&:hover", ar({}, "& .".concat(u), {
							display: "flex"
						})), o),
						carousel: {
							display: "flex",
							overflowX: "hidden",
							scrollSnapType: "x mandatory",
							scrollBehavior: "smooth",
							gap: "".concat(null != r ? r : 0, "px"),
							"@media (pointer: coarse) and (not (any-pointer: fine))": {
								overflowX: "auto",
								WebkitOverflowScrolling: "touch",
								msOverflowStyle: "none",
								scrollbarWidth: "none",
								"&::-webkit-scrollbar": {
									display: "none"
								}
							}
						},
						carouselItem: {
							width: n,
							height: "auto",
							flexShrink: 0
						}
					}
				}),
				$r = (0, Sn.makeStyles)()(function(e, t) {
					var n = t.itemWidth,
						r = t.columnGap,
						o = t.sideMargin,
						t = t.gapBetweenHeaderAndItems;
					return {
						collectionGridContainer: {
							display: "flex",
							flexDirection: "column",
							gap: "".concat(t, "px"),
							marginLeft: "".concat(null != o ? o : 0, "px"),
							marginRight: "".concat(null != o ? o : 0, "px")
						},
						grid: {
							display: "flex",
							flexDirection: "row",
							flexWrap: "wrap",
							gap: "".concat(null != r ? r : 0, "px")
						},
						gridItem: {
							width: n,
							height: "auto"
						}
					}
				}),
				Yr = (0, Sn.makeStyles)()(function(e, t) {
					var n = t.iconWidth,
						r = t.avatarContainerBackgroundColor,
						o = t.avatarImageBackgroundColor,
						i = t.avatarBorderColor,
						t = t.maxZIndex;
					return {
						facepileContainer: {
							width: "fit-content",
							display: "flex",
							alignItems: "center"
						},
						avatarContainer: ir(ir({
							marginRight: "-".concat((n + 4) / 2, "px")
						}, function(e) {
							for (var t = {}, n = 1; n <= e; n += 1) t["&:nth-child(".concat(n, ")")] = {
								zIndex: e - n + 1
							};
							return t
						}(t)), {}, {
							"&:last-child": {
								marginRight: 0
							},
							"& span": {
								width: n + 4,
								height: n + 4,
								padding: "".concat(2, "px"),
								display: "flex",
								justifyContent: "center",
								alignItems: "center",
								backgroundColor: r
							},
							"& img": {
								width: n,
								height: n,
								objectFit: "cover",
								borderRadius: "50%",
								backgroundColor: o,
								border: "1px solid ".concat(i)
							}
						})
					}
				}),
				Zr = (0, Sn.makeStyles)({
					name: "Gradient"
				})(function(e, t) {
					var n = t.linearGradient,
						r = t.height,
						t = t.width;
					return {
						gradient: ir({
							position: "absolute",
							bottom: 0,
							left: 0
						}, n && {
							width: t,
							height: r,
							background: n
						})
					}
				}),
				Qr = (0, Sn.makeStyles)({
					name: "ImageWithGradient"
				})(function(e, t) {
					var n = t.imageContainerHeight,
						r = t.borderRadius,
						t = t.imageAspectRatio;
					return {
						imageWithGradientWindow: {
							height: "".concat(n, "px"),
							width: "100%",
							position: "relative",
							overflow: "hidden",
							borderRadius: "".concat(r, "px"),
							display: "flex",
							justifyContent: "center",
							alignItems: "center",
							flexDirection: "column"
						},
						imageContainer: {
							aspectRatio: t,
							minWidth: "100%",
							flex: 1
						}
					}
				}),
				eo = "2px 2px 4px rgba(0, 0, 0, 0.15)",
				to = (0, Sn.makeStyles)()(function(e, t) {
					var n = t.hasTitleImage,
						r = t.forceSmallView,
						o = t.forceMediumView,
						i = t.forceSmallOrMediumView,
						a = t.minCardHeight,
						l = t.titleImageHeightPercentLarge,
						u = t.titleImageHeightPercentCompact,
						t = t.titleImageAspectRatio;
					return {
						heroUnitContentContainer: ir(ir({
							minHeight: "".concat(a, "px"),
							height: "".concat(336, "px"),
							width: "100%",
							position: "relative",
							display: "flex",
							overflow: "hidden",
							borderRadius: "8px",
							flexDirection: "column",
							justifyContent: "flex-end",
							padding: "20px"
						}, i ? {
							padding: "16px",
							aspectRatio: "16 / 9",
							height: "auto"
						} : {}), {}, {
							"@media (max-width: 600px)": {
								padding: "16px",
								aspectRatio: "16 / 9",
								height: "auto"
							}
						}),
						heroUnitTitleContainer: {
							position: "absolute",
							top: "50%",
							transform: "translateY(-50%)",
							display: "flex",
							flexDirection: "column",
							width: "100%"
						},
						heroUnitTitle: ir(ir(ir(ir({
							color: "white",
							position: "relative",
							textShadow: "".concat(eo),
							fontFamily: "Builder Sans",
							fontSize: "40px",
							fontWeight: 700,
							lineHeight: "48px"
						}, i ? {
							lineHeight: "28.8px"
						} : {}), r ? {
							fontSize: "24px"
						} : {}), o ? {
							fontSize: "28px"
						} : {}), {}, {
							"@media (max-width: 600px)": {
								lineHeight: "28.8px"
							},
							"@media (min-width: 415px) and (max-width: 600px)": {
								fontSize: "24px"
							},
							"@media (max-width: 414px)": {
								fontSize: "28px"
							}
						}),
						heroUnitSubtitle: ir(ir({
							color: "white",
							textShadow: "".concat(eo),
							marginTop: "2px",
							position: "relative",
							fontFamily: "Builder Sans",
							fontSize: "16px",
							fontWeight: 400,
							lineHeight: "24px"
						}, !n && i && {
							display: "none"
						}), !n && {
							"@media (max-width: 600px)": {
								display: "none"
							}
						}),
						heroUnitTitleImageContainer: ir(ir({
							height: "calc(var(--hero-unit-content-height) * ".concat(l, ")"),
							width: "calc(var(--hero-unit-content-height) *".concat(l, " * ").concat(t, ")")
						}, i && {
							height: "calc(var(--hero-unit-content-height) * ".concat(u, ")"),
							width: "calc(var(--hero-unit-content-height) *".concat(u, " * ").concat(t, ")")
						}), {}, {
							"@media (max-width: 600px)": {
								height: "calc(var(--hero-unit-content-height) * ".concat(u, ")"),
								width: "calc(var(--hero-unit-content-height) *".concat(u, " * ").concat(t, ")")
							}
						})
					}
				}),
				no = (0, Sn.makeStyles)()(function(e, t) {
					var n = t.forceViewportWidth,
						r = t.maxForegroundHeightPercentString,
						o = t.forceSmallOrMediumView,
						i = t.minForegroundHeightPercentString,
						a = t.foregroundScaleFactor,
						t = t.foregroundAspectRatio;
					return {
						heroUnitContainer: ir({
							width: "100%",
							position: "relative",
							display: "flex",
							overflow: "hidden",
							alignItems: "center",
							flexDirection: "column",
							cursor: "pointer",
							margin: "none",
							"& img": {
								width: "100%",
								height: "100%"
							}
						}, n ? {
							maxWidth: "".concat(n, "px")
						} : {}),
						heroUnitForegroundContainer: ir(ir({
							height: r,
							aspectRatio: "".concat(t),
							maxHeight: "calc(var(--hero-unit-container-width) / ".concat(t, ")"),
							display: "flex",
							flexDirection: "column",
							position: "absolute",
							top: "0px",
							"--parallax-scale": "".concat(48),
							transform: "translateY(calc(var(--parallax-scale) * ((var(--scroll) * -1px) + 1px)))",
							"@media (prefers-reduced-motion)": {
								transform: "translateY(0px)"
							}
						}, o ? {
							height: i,
							"--parallax-scale": "".concat(32)
						} : {}), {}, {
							"@media (max-width: 600px)": {
								height: i,
								"--parallax-scale": "".concat(32)
							},
							"@media (min-width: 601px) and (max-width: 1140px)": {
								height: "calc(".concat(i, " + ((").concat(a, " * (100vw - 600px)) / 540))")
							}
						}),
						heroUnitTopSpacer: ir(ir({
							height: "".concat(24, "px")
						}, o ? {
							height: "".concat(16, "px")
						} : {}), {}, {
							"@media (max-width: 600px)": {
								height: "".concat(16, "px")
							}
						})
					}
				}),
				ro = (0, Sn.makeStyles)()(function(e, t) {
					var n = t.verticalGap;
					return {
						sectionHeader: ir({
							position: "relative",
							display: "flex",
							justifyContent: "space-between",
							alignItems: "center",
							width: "100%"
						}, t.containerOverrideStyles),
						titleSubtitleContainer: {
							display: "flex",
							flexDirection: "column",
							alignItems: "flex-start",
							gap: "".concat(n, "px"),
							minWidth: 0,
							width: "100%"
						}
					}
				}),
				oo = {
					topLeftSlot: {
						anchorPoint: {
							x: 0,
							y: 0
						},
						position: {
							xScale: 0,
							yScale: 0,
							xOffset: 0,
							yOffset: 0
						}
					},
					topMiddleSlot: {
						anchorPoint: {
							x: .5,
							y: 0
						},
						position: {
							xScale: .5,
							yScale: 0,
							xOffset: 0,
							yOffset: 0
						}
					},
					topRightSlot: {
						anchorPoint: {
							x: 1,
							y: 0
						},
						position: {
							xScale: 1,
							yScale: 0,
							xOffset: 0,
							yOffset: 0
						}
					},
					centerLeftSlot: {
						anchorPoint: {
							x: 0,
							y: .5
						},
						position: {
							xScale: 0,
							yScale: .5,
							xOffset: 0,
							yOffset: 0
						}
					},
					centerMiddleSlot: {
						anchorPoint: {
							x: .5,
							y: .5
						},
						position: {
							xScale: .5,
							yScale: .5,
							xOffset: 0,
							yOffset: 0
						}
					},
					centerRightSlot: {
						anchorPoint: {
							x: 1,
							y: .5
						},
						position: {
							xScale: 1,
							yScale: .5,
							xOffset: 0,
							yOffset: 0
						}
					},
					bottomLeftSlot: {
						anchorPoint: {
							x: 0,
							y: 1
						},
						position: {
							xScale: 0,
							yScale: 1,
							xOffset: 0,
							yOffset: 0
						}
					},
					bottomMiddleSlot: {
						anchorPoint: {
							x: .5,
							y: 1
						},
						position: {
							xScale: .5,
							yScale: 1,
							xOffset: 0,
							yOffset: 0
						}
					},
					bottomRightSlot: {
						anchorPoint: {
							x: 1,
							y: 1
						},
						position: {
							xScale: 1,
							yScale: 1,
							xOffset: 0,
							yOffset: 0
						}
					}
				},
				io = Object.keys(oo),
				ao = {
					background: "transparent",
					width: "auto",
					height: "auto",
					zIndex: 10,
					pointerEvents: "none",
					position: "absolute"
				},
				lo = (0, Sn.makeStyles)()(function(e, t) {
					var n = t.padding,
						r = t.containerOverrideStyles,
						t = Object.keys(oo).reduce(function(e, t) {
							return e[t] = ir(ir(ir({}, ao), {
								left: "".concat(100 * (t = oo[t]).position.xScale, "%"),
								top: "".concat(100 * t.position.yScale, "%"),
								transform: "translate(-".concat(100 * t.anchorPoint.x, "%, -").concat(100 * t.anchorPoint.y, "%)")
							}), {}, {
								padding: "".concat(n, "px")
							}), e
						}, {});
					return ir({
						overlayContainer: ir({
							position: "relative",
							boxSizing: "border-box",
							width: "100%",
							height: "100%",
							background: "transparent",
							overflow: "hidden",
							display: "block"
						}, r)
					}, t)
				}),
				uo = (0, Sn.makeStyles)()(function(e, t) {
					var n = t.titleHeight,
						r = t.titleLines,
						o = t.titleColor,
						i = t.titleFontStyles,
						a = t.isContained,
						t = t.containmentPadding;
					return {
						tileBottomContentContainer: ir({
							width: "100%",
							display: "flex",
							flexDirection: "row",
							gap: "4px"
						}, a && {
							padding: "0px ".concat(t, "px ").concat(t, "px ").concat(t, "px")
						}),
						tileBottomLeftContentContainer: {
							width: "fit-content",
							maxWidth: "100%",
							overflow: "hidden",
							flexGrow: 1,
							display: "flex",
							flexDirection: "column",
							justifyContent: "center"
						},
						tileBottomRightContentContainer: {
							width: "fit-content",
							maxWidth: "100%",
							flexShrink: 0,
							display: "flex"
						},
						tileTitleContainer: {
							height: n
						},
						tileTitleText: ir(ir({
							width: "100%",
							height: "100%",
							overflow: "hidden"
						}, 1 === r && ir({}, hr)), wr(Ar, o, i))
					}
				});

			function co(e) {
				var t, n, r = e.isFocused,
					o = e.imageComponent,
					i = e.imageAspectRatio,
					a = e.thumbnailOverlayComponent,
					l = e.onActivated,
					u = e.linkPath,
					c = e.isContained,
					s = e.containmentPadding,
					d = e.containmentBackgroundColor,
					f = e.cornerRadius,
					p = e.titleText,
					m = e.titleColor,
					v = e.titleFont,
					h = e.titleLines,
					g = e.titleComponent,
					y = e.footerComponent,
					b = e.ctaButtonComponent,
					w = e.isOnScreen,
					S = e.placeholderImageBackgroundColor,
					e = (I = nr((0, X.useState)(!1), 2), C = I[0], t = I[1], n = tr(function() {
						t(!0)
					}, 100), [C, function() {
						n()
					}, function() {
						n.cancel(), t(!1)
					}]),
					C = (I = nr(e, 3))[0],
					e = I[1],
					I = I[2],
					f = (r = mo({
						imageAspectRatio: i,
						isContained: c,
						containmentBackgroundColor: d,
						isFocused: C || r,
						cornerRadius: f,
						placeholderImageBackgroundColor: S
					}).classes).tileContainer,
					S = r.tileImageContainer,
					x = r.placeholderImage,
					r = (0, X.useMemo)(function() {
						return o || X.createElement("div", {
							"data-testid": "placeholder-image",
							className: x
						})
					}, [o, x]);
				return X.createElement(ur, {
					containerClassName: f,
					callback: l,
					linkPath: u,
					tabIndex: w ? 0 : -1,
					onFocus: e,
					onFocusLost: I,
					ariaLabel: p
				}, X.createElement("div", {
					className: S
				}, r, a), X.createElement(Jr, {
					titleText: p,
					titleLines: h,
					titleColor: m,
					titleFontStyles: v,
					titleComponent: g,
					footerComponent: y,
					ctaButtonComponent: b,
					isContained: c,
					containmentPadding: null != s ? s : 0
				}))
			}

			function so(e) {
				var t = e.onActivated,
					n = e.linkPath,
					r = e.textColor,
					o = e.fontStyle,
					i = e.gap,
					a = e.iconWidth,
					l = e.iconColor,
					u = e.leftIcon,
					c = e.leftIconComponent,
					s = e.leftText,
					d = e.rightIcon,
					f = e.rightIconComponent,
					p = e.rightText,
					e = o.LineHeight * o.FontSize,
					m = null != l ? l : r,
					v = null != a ? a : e,
					o = (i = vo({
						textHeight: e,
						textColor: r,
						gap: null != i ? i : 0,
						fontStyle: o
					}).classes).tileFooterContainer,
					h = i.leftContainer,
					g = i.rightContainer,
					y = i.textClassName,
					b = i.iconContainer,
					w = (0, X.useMemo)(function() {
						return c || (u ? X.createElement(lr, {
							iconClassName: u,
							color: m,
							width: v
						}) : null)
					}, [u, c, m, v]),
					S = (0, X.useMemo)(function() {
						return f || (d ? X.createElement(lr, {
							iconClassName: d,
							color: m,
							width: v
						}) : null)
					}, [d, f, m, v]),
					i = (0, X.useMemo)(function() {
						return X.createElement(X.Fragment, null, X.createElement("div", {
							className: h
						}, w && X.createElement("div", {
							className: b,
							"data-testid": "left-icon-container"
						}, w), X.createElement("div", ir({
							className: y
						}, br(Ar)), s)), X.createElement("div", {
							className: g
						}, S && X.createElement("div", {
							className: b
						}, S), p && X.createElement("div", ir({
							className: y
						}, br(Ar)), p)))
					}, [h, g, y, w, S, s, p, b]);
				return X.createElement(ur, {
					containerClassName: o,
					callback: t,
					linkPath: n,
					ariaLabel: s
				}, i)
			}

			function fo(e) {
				var t = e.feedItems,
					n = e.maxWidth,
					r = void 0 === (o = e.gapBetweenFeedItems) ? 0 : o,
					o = e.paddingLeft,
					e = e.paddingRight,
					e = ho({
						maxWidth: n,
						gapBetweenFeedItems: r,
						paddingLeft: o,
						paddingRight: e
					}).classes;
				return X.createElement("div", {
					className: e.verticalFeedContainer
				}, X.createElement("div", {
					className: e.verticalFeedContentContainer
				}, t.map(function(e) {
					var t = e.key,
						e = e.component;
					return X.createElement("div", {
						key: t
					}, e)
				})))
			}

			function po(e) {
				var t = e.titleText,
					n = e.sendNavigateToSortLinkEvent,
					r = e.titleLink,
					o = e.isSortLinkOverrideEnabled,
					i = e.subtitleText,
					a = e.subtitleLink,
					l = e.shouldShowSeparateSubtitleLink,
					u = e.hasBackgroundMural,
					c = e.tooltipText,
					e = e.hideSeeAll,
					s = (0, p.useTokens)(),
					d = (o || l) && a && i,
					o = (0, X.useMemo)(function() {
						if (i) return u ? s.Color.Extended.Gray.Gray_100 : s.Color.Content.Emphasis
					}, [i, u, s.Color.Extended.Gray.Gray_100, s.Color.Content.Emphasis]),
					l = (0, X.useMemo)(function() {
						if (d) return u ? "icon-chevron-right-dark" : "icon-chevron-right"
					}, [d, u]);
				return $().createElement("div", {
					className: "home-sort-header-container",
					style: {
						marginBottom: s.Gap.Large
					}
				}, $().createElement(Vr, {
					titleText: t,
					onTitleActivated: e ? void 0 : n,
					titleLinkPath: e ? void 0 : r,
					titleTextColor: u ? s.Color.Extended.Gray.Gray_100 : s.Color.Content.Emphasis,
					titleFontStyle: s.Typography.HeadingSmall,
					titleGap: e ? void 0 : s.Gap.XSmall,
					titleIconClassName: e ? void 0 : "sdui-icon icon-push-right-16x16",
					titleIconWidth: e ? void 0 : 16,
					titleIconFirst: !1,
					subtitleText: i || void 0,
					subtitleTextColor: o,
					subtitleFontStyle: i ? s.Typography.BodyMedium : void 0,
					subtitleGap: d ? s.Gap.XXSmall : void 0,
					onSubtitleActivated: d ? n : void 0,
					subtitleLinkPath: d ? a : void 0,
					subtitleIconClassName: d ? l : void 0,
					subtitleIconWidth: d ? 22 : void 0,
					subtitleIconFirst: !1,
					verticalGap: s.Gap.XXSmall,
					iconComponent: c ? $().createElement(xt, {
						tooltipText: c,
						placement: "left",
						centerIcon: !0
					}) : void 0,
					containerOverrides: u ? {
						zIndex: 1
					} : void 0
				}))
			}
			var mo = (0, Sn.makeStyles)()(function(e, t) {
					var n = t.imageAspectRatio,
						r = t.isContained,
						o = t.containmentBackgroundColor,
						i = t.isFocused,
						a = t.cornerRadius,
						t = t.placeholderImageBackgroundColor;
					return {
						tileContainer: ir({
							width: "100%",
							height: "100%",
							display: "flex",
							flexDirection: "column",
							gap: "4px"
						}, r && ir({
							borderBottomLeftRadius: "".concat(a, "px"),
							borderBottomRightRadius: "".concat(a, "px")
						}, o && {
							backgroundColor: o
						})),
						tileImageContainer: {
							width: "100%",
							height: "auto",
							position: "relative",
							"&::before": ir(ir({
								content: '""',
								position: "absolute",
								top: 0,
								left: 0,
								width: "100%",
								height: "100%",
								borderRadius: "".concat(a, "px")
							}, r && {
								borderBottomLeftRadius: "0px",
								borderBottomRightRadius: "0px"
							}), {}, {
								backgroundColor: "transparent",
								transition: "background-color ".concat(pr, " ").concat(mr)
							}, i && {
								backgroundColor: "rgba(255, 255, 255, 0.1)"
							}),
							"& img": ir({
								width: "100%",
								height: "100%",
								objectFit: "cover",
								aspectRatio: "".concat(n),
								borderRadius: "".concat(a, "px")
							}, r && {
								borderBottomLeftRadius: "0px",
								borderBottomRightRadius: "0px"
							})
						},
						placeholderImage: ir({
							width: "100%",
							height: "100%",
							aspectRatio: "".concat(n),
							backgroundColor: t,
							borderRadius: "".concat(a, "px")
						}, r && {
							borderBottomLeftRadius: "0px",
							borderBottomRightRadius: "0px"
						})
					}
				}),
				vo = (0, Sn.makeStyles)()(function(e, t) {
					var n = t.textHeight,
						r = t.textColor,
						o = t.gap,
						t = t.fontStyle;
					return {
						tileFooterContainer: ir({
							display: "flex",
							alignItems: "center",
							gap: "".concat(o, "px"),
							width: "100%",
							height: n,
							whiteSpace: "nowrap"
						}, vr),
						leftContainer: {
							flexShrink: 0,
							minWidth: 0,
							width: "fit-content",
							maxWidth: "100%",
							display: "flex",
							flexDirection: "row",
							alignItems: "center",
							gap: "".concat(o, "px")
						},
						rightContainer: {
							flexShrink: 1,
							minWidth: 0,
							display: "flex",
							flexDirection: "row",
							alignItems: "center",
							gap: "".concat(o, "px")
						},
						textClassName: ir(ir({
							width: "100%",
							height: "100%"
						}, hr), wr(Ar, r, t)),
						iconContainer: {
							flexShrink: 0,
							display: "flex",
							alignItems: "center"
						}
					}
				}),
				ho = (0, Sn.makeStyles)({
					name: "VerticalFeed"
				})(function(e, t) {
					var n = t.maxWidth,
						r = t.gapBetweenFeedItems,
						o = t.paddingLeft,
						t = t.paddingRight;
					return {
						verticalFeedContainer: {
							display: "flex",
							justifyContent: "center",
							paddingLeft: o ? "".concat(o, "px") : "0px",
							paddingRight: t ? "".concat(t, "px") : "0px"
						},
						verticalFeedContentContainer: {
							display: "flex",
							flexDirection: "column",
							gap: "".concat(r, "px"),
							width: "100%",
							maxWidth: n ? "".concat(n, "px") : "100%"
						}
					}
				}),
				go = (0, Sn.makeStyles)({
					name: "DetailsPageHeader"
				})(function(e, t) {
					var n = t.backgroundMaxWidth,
						r = t.contentMaxWidth,
						o = t.contentPaddingLeft,
						t = t.contentPaddingRight;
					return {
						detailsPageHeaderContainer: {
							position: "relative",
							display: "flex",
							justifyContent: "center"
						},
						backgroundContainer: {
							width: "100%",
							maxWidth: n ? "".concat(n, "px") : "100%"
						},
						contentContainer: {
							position: "absolute",
							bottom: "24px",
							left: 0,
							width: "100%",
							paddingLeft: o ? "".concat(o, "px") : "0px",
							paddingRight: t ? "".concat(t, "px") : "0px",
							display: "flex",
							justifyContent: "center"
						},
						contentMaxWidthContainer: {
							width: "100%",
							maxWidth: r ? "".concat(r, "px") : "100%"
						}
					}
				}),
				yo = (0, Sn.makeStyles)({
					name: "Page"
				})(function(e, t) {
					t = t.backgroundColor;
					return {
						pageContainer: ir({
							display: "flex",
							flexDirection: "column",
							minHeight: "100vh",
							gap: "24px"
						}, t && {
							backgroundColor: t
						})
					}
				});

			function bo(e) {
				var t = e.children,
					n = e.backgroundImageAssetId,
					r = (0, X.useState)(""),
					e = r[0],
					o = r[1];
				return (0, X.useEffect)(function() {
					var t = !0;
					return n ? Q(n).then(function(e) {
							t && o(e)
						}, function() {
							t && o("")
						}) : o(""),
						function() {
							t = !1
						}
				}, [n]), $().createElement("div", {
					className: ge()(["game-sort-carousel-wrapper", {
						"game-sort-with-mural": !!n,
						"game-sort-mural-loaded": !!e
					}])
				}, e && $().createElement("div", {
					className: "game-sort-mural-wrapper"
				}, $().createElement("img", {
					className: "game-sort-mural",
					alt: "",
					src: e
				}), $().createElement("div", {
					className: "game-sort-mural-gradient"
				})), t)
			}

			function wo(e) {
				var t = e.scrollClassNames,
					n = e.scrollIconClassName,
					r = e.scroll,
					o = e.isDisabled,
					e = e.isNewScrollArrowsEnabled;
				return $().createElement("div", {
					"data-testid": "game-carousel-scroll-bar",
					className: t,
					onClick: r,
					"aria-disabled": o,
					onKeyDown: function(e) {
						e.code === Co.enter && (e.stopPropagation(), e.preventDefault(), r())
					},
					role: "button",
					tabIndex: 0
				}, e ? $().createElement("span", {
					className: n
				}) : $().createElement($().Fragment, null, $().createElement("div", {
					className: "arrow"
				}, $().createElement("span", {
					className: n
				})), $().createElement("div", {
					className: "spacer"
				})))
			}(Ki = function(e) {
				var t = e.sortTitle,
					n = e.sortSubtitle,
					r = e.seeAllLink,
					o = e.subtitleLink,
					i = e.shouldShowSeparateSubtitleLink,
					a = e.isSortLinkOverrideEnabled,
					l = e.buildNavigateToSortLinkEventProperties,
					u = e.shouldShowSponsoredTooltip,
					c = e.tooltipInfoText,
					s = e.titleContainerClassName,
					d = e.hideSeeAll,
					f = e.endTimestamp,
					p = e.countdownString,
					m = e.backgroundImageAssetId,
					v = e.isNewSortHeaderEnabled,
					h = e.translate,
					g = (0, X.useMemo)(function() {
						return c || (u ? h(rt.LabelSponsoredAdsDisclosureStatic) || "Sponsored experiences are paid for by Creators. They may be shown to you based on general information about your device type, location, and demographics." : void 0)
					}, [u, c, h]),
					y = (0, X.useMemo)(function() {
						return h(a ? at.LabelLearnMore : it.ActionSeeAll)
					}, [a, h]),
					e = (0, X.useCallback)(function() {
						var e;
						a && l && (e = l(), e = ee.navigateToSortLink(e), P.eventStreamService.sendEvent.apply(P.eventStreamService, e))
					}, [a, l]);
				return v ? $().createElement(po, {
					titleText: t,
					sendNavigateToSortLinkEvent: e,
					titleLink: r,
					isSortLinkOverrideEnabled: a,
					subtitleText: n,
					subtitleLink: o,
					shouldShowSeparateSubtitleLink: i,
					hasBackgroundMural: !!m,
					tooltipText: g,
					hideSeeAll: d
				}) : $().createElement("div", {
					className: "game-sort-header-container"
				}, $().createElement("div", {
					className: s
				}, $().createElement("h2", {
					className: "sort-header"
				}, d ? $().createElement("span", null, t) : $().createElement(ye.Link, {
					url: r
				}, t), g && $().createElement(xt, {
					tooltipText: g,
					placement: "right"
				})), !d && $().createElement(ye.Link, {
					url: r,
					onClick: e,
					className: "btn-secondary-xs see-all-link-icon btn-more"
				}, y)), $().createElement(vn, {
					defaultSubtitle: n,
					endTimestamp: f,
					countdownString: p,
					formatSubtitleLink: a || i,
					subtitleLink: o,
					handleSeeAllLinkClick: e,
					backgroundImageAssetId: m
				}))
			}).defaultProps = {
				sortSubtitle: void 0,
				tooltipInfoText: void 0,
				hideSeeAll: void 0,
				endTimestamp: void 0,
				countdownString: void 0,
				buildNavigateToSortLinkEventProperties: void 0,
				backgroundImageAssetId: void 0,
				isNewSortHeaderEnabled: void 0
			};
			var So = Ki,
				Co = Xe.keyBoardEventCode;

			function Io(e) {
				var t = e.distance,
					n = e.scrollAreaSize,
					r = e.direction,
					o = e.startingPosition,
					i = e.currentPage,
					a = e.pageSession,
					l = e.gameSetTypeId,
					u = e.gameSetTargetId,
					c = e.sortPosition,
					e = ((e = {})[F.StartPos] = o, e[F.Distance] = t, e[F.Direction] = r, e[F.PageSession] = a, e[F.GameSetTypeId] = l, e[F.GameSetTargetId] = u, e[F.SortPos] = c, e[F.ScrollDepth] = t / n, e[F.StartDepth] = o / n, e[F.ScreenSizeX] = window.innerWidth, e[F.ScreenSizeY] = window.innerHeight, e[F.ScrollAreaSize] = n, e);
				T.EventStream.SendEventWithTarget(h.FeedScroll, i, e, T.EventStream.TargetTypes.WWW)
			}

			function xo(e) {
				var t = e.scrollPosition,
					n = e.page,
					r = e.gameSetTypeId,
					o = e.gameSetTargetId,
					i = e.sortPosition,
					a = e.wrapperRef,
					l = (0, X.useRef)(t),
					u = mn(),
					c = (0, X.useMemo)(function() {
						return we(function(e) {
							var t;
							e !== l.current && (t = Math.round((null === (t = a.current) || void 0 === t ? void 0 : t.getBoundingClientRect().width) || window.innerWidth), Io({
								distance: e - l.current,
								scrollAreaSize: t,
								startingPosition: l.current,
								currentPage: n,
								direction: g.Horizontal,
								gameSetTypeId: r,
								gameSetTargetId: o,
								sortPosition: i,
								pageSession: u
							}), l.current = e)
						}, 250)[0]
					}, [n, r, o, i, u]);
				(0, X.useEffect)(function() {
					c(t)
				}, [c, t])
			}

			function Eo(e, r) {
				return e.map(function(e) {
					var t = e.contentType,
						n = e.contentId,
						e = e.contentMetadata,
						t = null === (t = null == r ? void 0 : r[t]) || void 0 === t ? void 0 : t[n];
					if (t) {
						n = Do({}, t), e = null == e ? void 0 : e.EncryptedAdTrackingData;
						return n.isSponsored = 0 < (null == e ? void 0 : e.length), n.nativeAdData = e, n
					}
					return t
				}).filter(function(e) {
					return void 0 !== e
				})
			}

			function Po(e) {
				return "recommendationList" in e
			}

			function To(e) {
				return "games" in e
			}

			function Oo(e) {
				return "filters" in e
			}

			function ko(e, t) {
				return "recommendationList" in e ? Eo(e.recommendationList, t) : To(e) ? e.games : []
			}

			function Ao(e) {
				if (e && To(e)) return e.gameSetTargetId
			}

			function No(e) {
				var t = Ao(e);
				return void 0 !== t ? ((e = {})[F.GameSetTargetId] = t, e) : {}
			}

			function _o(e) {
				if (e = e.find(Oo)) {
					var t = new Map;
					return e.filters.forEach(function(e) {
						t.set(e.filterType, e.selectedOptionId)
					}), t
				}
			}

			function Ro(e) {
				var t;
				return e && To(e) && e.appliedFilters ? ((t = {})[F.AppliedFilters] = encodeURIComponent(e.appliedFilters), t) : {}
			}($i = function(e) {
				var t = e.hideScrollBackWhenDisabled,
					n = void 0 !== t && t,
					r = e.isScrollBackDisabled,
					o = e.isScrollForwardDisabled,
					i = e.onScrollBack,
					t = e.onScrollForward;
				return e.isNewScrollArrowsEnabled ? $().createElement($().Fragment, null, !r && $().createElement(wo, {
					scrollClassNames: "scroller-new prev",
					scrollIconClassName: "icon-chevron-heavy-left",
					scroll: i,
					isDisabled: r,
					isNewScrollArrowsEnabled: !0
				}), !o && $().createElement(wo, {
					scrollClassNames: "scroller-new next",
					scrollIconClassName: "icon-chevron-heavy-right",
					scroll: t,
					isDisabled: o,
					isNewScrollArrowsEnabled: !0
				})) : $().createElement($().Fragment, null, n && r ? null : $().createElement(wo, {
					scrollClassNames: ge()("scroller", "prev", {
						disabled: r
					}),
					scrollIconClassName: "icon-games-carousel-left",
					isDisabled: r,
					scroll: i,
					isNewScrollArrowsEnabled: !1
				}), $().createElement(wo, {
					scrollClassNames: ge()("scroller", "next", {
						disabled: o
					}),
					scrollIconClassName: "icon-games-carousel-right",
					isDisabled: o,
					scroll: t,
					isNewScrollArrowsEnabled: !1
				}))
			}).defaultProps = {
				isNewScrollArrowsEnabled: void 0
			};
			var Lo = $i,
				Do = function() {
					return (Do = Object.assign || function(e) {
						for (var t, n = 1, r = arguments.length; n < r; n++)
							for (var o in t = arguments[n]) Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
						return e
					}).apply(this, arguments)
				},
				Mo = null !== (Kl = window.ResizeObserver) && void 0 !== Kl ? Kl : lt,
				Fo = function() {
					var e = (0, X.useState)(void 0),
						t = e[0],
						n = e[1],
						r = (0, X.useCallback)(function(e) {
							e = null === (e = null == e ? void 0 : e.getBoundingClientRect()) || void 0 === e ? void 0 : e.width;
							void 0 !== e && n(e)
						}, []),
						e = (0, X.useCallback)(function(e) {
							e && e[0] && e[0].target && r(e[0].target)
						}, [r]),
						o = (0, X.useRef)(new Mo(e)),
						e = (0, X.useCallback)(function(e) {
							e && null != o && o.current && (r(e), o.current.disconnect(), o.current.observe(e))
						}, [r]);
					return (0, X.useEffect)(function() {
						return function() {
							null != o && o.current && o.current.disconnect()
						}
					}, []), [e, t]
				},
				jo = et.numGameCarouselLookAheadWindows,
				Uo = et.gameTileGutterWidth,
				Bo = et.wideGameTileGutterWidth,
				Go = et.scrollerWidth,
				Ho = tt.wideTileHoverGrowWidthPx;
			(Lu = function(e) {
				var t = e.gameData,
					n = e.sort,
					r = e.positionId,
					o = e.page,
					i = e.gamesContainerRef,
					a = e.buildEventProperties,
					l = e.loadMoreGames,
					u = e.isLoadingMoreGames,
					c = e.componentType,
					s = e.playerCountStyle,
					d = e.playButtonStyle,
					f = e.itemsPerRow,
					p = e.friendData,
					m = e.navigationRootPlaceId,
					v = e.isSponsoredFooterAllowed,
					h = e.hoverStyle,
					g = e.topicId,
					y = e.isExpandHomeContentEnabled,
					b = e.isCarouselHorizontalScrollEnabled,
					w = e.isNewScrollArrowsEnabled,
					S = e.hideScrollBackWhenDisabled,
					C = e.sortId,
					I = e.translate,
					x = (0, X.useRef)(null),
					E = (0, X.useState)(0),
					P = E[0],
					T = E[1],
					O = (0, X.useState)(!1),
					k = O[0],
					A = O[1],
					e = (0, X.useState)(!0),
					N = e[0],
					_ = e[1],
					E = (0, X.useState)(!0),
					R = E[0],
					L = E[1],
					O = (0, X.useState)(0),
					D = O[0],
					M = O[1],
					F = (0, X.useMemo)(function() {
						return c === K.GridTile || c === K.EventTile
					}, [c]),
					j = (0, X.useMemo)(function() {
						return F ? Bo : Uo
					}, [F]),
					e = Fo(),
					E = e[0],
					U = e[1],
					O = Fo(),
					e = O[0],
					B = O[1],
					G = (0, X.useMemo)(function() {
						if (F && f) return f;
						var e = null === (e = null === (e = null == x ? void 0 : x.current) || void 0 === e ? void 0 : e.getBoundingClientRect()) || void 0 === e ? void 0 : e.width;
						return void 0 !== B && void 0 !== e ? Math.max(1, Math.floor((B + j) / (e + j))) : 0
					}, [B, j, f, F]);
				(0, X.useEffect)(function() {
					_(0 <= D), u || void 0 !== B && void 0 !== U && Math.abs(D) + B + Ho >= U ? L(!0) : L(!1)
				}, [D, B, U, null == t ? void 0 : t.length, u]);
				var H = (0, X.useCallback)(function() {
						P + jo * G >= (null == t ? void 0 : t.length) && l && !u && l()
					}, [P, G, l, u, null == t ? void 0 : t.length]),
					W = (0, X.useCallback)(function() {
						var e = null === (e = null === (e = null == x ? void 0 : x.current) || void 0 === e ? void 0 : e.getBoundingClientRect()) || void 0 === e ? void 0 : e.width;
						return void 0 === e ? 0 : Math.floor(G) * (e + j)
					}, [G, j]),
					z = (0, X.useCallback)(function() {
						var t;
						N || (t = W(), M(function(e) {
							return Math.min(e + t, 0)
						}), T(function(e) {
							return e - G
						}))
					}, [W, N, G]),
					V = (0, X.useCallback)(function() {
						var n;
						R || (n = W(), M(function(e) {
							if (b && o === Y.HomePage) return void 0 !== U && void 0 !== B ? Math.max(e - n, -1 * (U - B)) : e - n;
							if (void 0 === U) return e - n;
							var t = S && N ? Go : 0;
							return Math.max(e - n, -1 * U) + t
						}), T(function(e) {
							return e + G
						}), H())
					}, [R, W, H, b, o, U, B, S, N, G]),
					q = (0, X.useCallback)(function(e) {
						return P <= e && e < P + G
					}, [P, G]),
					J = (0, X.useCallback)(function(e) {
						k || (A(!0), e(), setTimeout(function() {
							A(!1)
						}, 200))
					}, [k]),
					O = (0, X.useRef)(null);
				xo({
					scrollPosition: -D,
					page: o,
					gameSetTypeId: C,
					gameSetTargetId: Ao(n),
					wrapperRef: O,
					sortPosition: r
				});
				r = (0, X.useMemo)(function() {
					return ge()({
						"hlist games game-cards game-tile-list": !F,
						"game-carousel wide-game-tile-carousel scrollable-carousel": F,
						"games-page-carousel": o === Y.GamesPage,
						"home-page-carousel": o === Y.HomePage
					})
				}, [F, o]);
				return $().createElement("div", {
					"data-testid": "game-carousel",
					ref: O,
					className: ge()("horizontal-scroller games-list", {
						"home-page-games-list": o === Y.HomePage,
						"wide-game-tile-list": F,
						"expand-home-content": y,
						"expand-home-content-disabled": !y
					})
				}, $().createElement("div", {
					ref: e,
					className: "clearfix horizontal-scroll-window"
				}, $().createElement("div", {
					ref: E,
					className: "horizontally-scrollable",
					style: {
						left: D + "px"
					}
				}, $().createElement("ul", {
					ref: i,
					className: r
				}, t.map(function(e, t) {
					return F ? $().createElement(dn, {
						key: e.universeId,
						ref: x,
						id: t,
						isOnScreen: q(t),
						page: o,
						gameData: e,
						translate: I,
						buildEventProperties: a,
						componentType: c,
						playerCountStyle: s,
						playButtonStyle: d,
						hoverStyle: h,
						topicId: g,
						friendData: p,
						isSponsoredFooterAllowed: v,
						navigationRootPlaceId: m
					}) : $().createElement("li", {
						key: e.universeId,
						className: "list-item game-card game-tile"
					}, $().createElement(dn, {
						ref: x,
						id: t,
						isOnScreen: q(t),
						page: o,
						gameData: e,
						className: "game-card-container",
						translate: I,
						buildEventProperties: a,
						componentType: c,
						playerCountStyle: s,
						playButtonStyle: d,
						hoverStyle: h,
						topicId: g,
						friendData: p,
						isSponsoredFooterAllowed: v,
						navigationRootPlaceId: m
					}))
				}))), $().createElement(Lo, {
					hideScrollBackWhenDisabled: S,
					isScrollBackDisabled: N,
					isScrollForwardDisabled: R,
					onScrollBack: function() {
						return J(z)
					},
					onScrollForward: function() {
						return J(V)
					},
					isNewScrollArrowsEnabled: w
				})))
			}).defaultProps = {
				loadMoreGames: void 0,
				componentType: void 0,
				itemsPerRow: void 0,
				playerCountStyle: void 0,
				playButtonStyle: void 0,
				friendData: void 0,
				navigationRootPlaceId: void 0,
				isSponsoredFooterAllowed: void 0,
				hoverStyle: void 0,
				topicId: void 0,
				isExpandHomeContentEnabled: void 0,
				isCarouselHorizontalScrollEnabled: void 0,
				isNewScrollArrowsEnabled: void 0,
				hideScrollBackWhenDisabled: !1
			};
			var Wo = Lu,
				zo = function() {
					return (zo = Object.assign || function(e) {
						for (var t, n = 1, r = arguments.length; n < r; n++)
							for (var o in t = arguments[n]) Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
						return e
					}).apply(this, arguments)
				};
			(Sl = function(e) {
				function t(e, t) {
					var n = {};
					return n[F.PlaceId] = e.placeId, n[F.UniverseId] = e.universeId, n[F.IsAd] = e.isSponsored, n[F.NativeAdData] = e.nativeAdData, n[F.Position] = t, n[F.SortPos] = a, n[F.NumberOfLoadedTiles] = (o || []).length, n[F.GameSetTypeId] = i.topicId, n[F.Page] = Y.HomePage, n[j.HomePageSessionInfo] = T, n[F.PlayContext] = Y.HomePage, n
				}
				var n = e.translate,
					r = e.friendsPresence,
					o = e.gameData,
					i = e.sort,
					a = e.positionId,
					l = e.componentType,
					u = e.playerCountStyle,
					c = e.playButtonStyle,
					s = e.hoverStyle,
					d = e.tooltipInfoText,
					f = e.hideSeeAll,
					p = e.navigationRootPlaceId,
					m = e.isSponsoredFooterAllowed,
					v = e.seeAllLinkPath,
					h = e.subtitleLinkPath,
					g = e.itemsPerRow,
					y = e.startingRow,
					b = e.endTimestamp,
					w = e.countdownString,
					S = e.isExpandHomeContentEnabled,
					C = e.isCarouselHorizontalScrollEnabled,
					I = e.isNewScrollArrowsEnabled,
					x = e.isNewSortHeaderEnabled,
					E = (0, X.useRef)(null),
					P = (0, X.useRef)(null),
					T = mn(),
					O = (0, X.useCallback)(function(e) {
						if (void 0 !== o && void 0 !== y) {
							var t = e.filter(function(e) {
								return e < (null == o ? void 0 : o.length)
							});
							return zo(zo(zo(zo(zo(((e = {})[F.RootPlaceIds] = t.map(function(e) {
								return o[e].placeId
							}), e[F.UniverseIds] = t.map(function(e) {
								return o[e].universeId
							}), e), z(o, i.topicId, t, l)), q(o, i.topicId, t, l)), H(o, t)), J(y, null == o ? void 0 : o.length, null == o ? void 0 : o.length, t)), ((e = {})[F.NavigationUids] = t.map(function(e) {
								return null !== (e = o[e].navigationUid) && void 0 !== e ? e : "0"
							}), e[F.AbsPositions] = t, e[F.SortPos] = a, e[F.GameSetTypeId] = i.topicId, e[F.Page] = Y.HomePage, e[j.HomePageSessionInfo] = T, e))
						}
					}, [o, T, a, i.topicId, l, y]);
				hn(E, o.length, O), (0, X.useEffect)(function() {
					S && g && null != E && E.current && E.current.style.setProperty("--items-per-row", g.toString())
				}, [S, g]);
				var k = (0, X.useMemo)(function() {
						return v ? N.urlService.getAbsoluteUrl(v) : R(i.topic, Y.HomePage, {
							position: a,
							sortId: i.topicId,
							page: Y.HomePage,
							treatmentType: i.treatmentType,
							homePageSessionInfo: T
						})
					}, [T, a, i.topic, i.topicId, i.treatmentType, v]),
					A = (0, X.useMemo)(function() {
						return h || k
					}, [h, k]),
					e = (0, X.useCallback)(function() {
						var e;
						if (v) return (e = {})[F.LinkPath] = v, e[F.SortPos] = a, e[F.GameSetTypeId] = i.topicId, e[F.Page] = Y.HomePage, e[j.HomePageSessionInfo] = T, e
					}, [T, a, v, i.topicId]);
				return $().createElement(bo, {
					backgroundImageAssetId: null !== (O = i.topicLayoutData) && void 0 !== O && O.backgroundImageAssetId ? parseInt(null === (O = i.topicLayoutData) || void 0 === O ? void 0 : O.backgroundImageAssetId, 10) : void 0
				}, $().createElement(So, {
					sortTitle: i.topic,
					sortSubtitle: i.subtitle,
					seeAllLink: k,
					subtitleLink: A,
					shouldShowSeparateSubtitleLink: !!h,
					isSortLinkOverrideEnabled: !!v,
					buildNavigateToSortLinkEventProperties: e,
					shouldShowSponsoredTooltip: i.topicId === Je.adSortHomePageId,
					tooltipInfoText: d,
					titleContainerClassName: "container-header",
					hideSeeAll: f,
					endTimestamp: b,
					countdownString: w,
					backgroundImageAssetId: null !== (w = i.topicLayoutData) && void 0 !== w && w.backgroundImageAssetId ? parseInt(null === (w = i.topicLayoutData) || void 0 === w ? void 0 : w.backgroundImageAssetId, 10) : void 0,
					isNewSortHeaderEnabled: x,
					translate: n
				}), C ? $().createElement(Wo, {
					gameData: o,
					sort: i,
					positionId: a,
					page: Y.HomePage,
					gamesContainerRef: E,
					buildEventProperties: t,
					loadMoreGames: void 0,
					isLoadingMoreGames: !1,
					componentType: l,
					sortId: i.topicId,
					playerCountStyle: u,
					playButtonStyle: c,
					itemsPerRow: g,
					friendData: r,
					navigationRootPlaceId: p,
					isSponsoredFooterAllowed: m,
					hoverStyle: s,
					topicId: null === (x = i.topicId) || void 0 === x ? void 0 : x.toString(),
					isExpandHomeContentEnabled: S,
					isCarouselHorizontalScrollEnabled: C,
					isNewScrollArrowsEnabled: I,
					translate: n
				}) : $().createElement(fn, {
					ref: E,
					tileRef: P,
					gameData: o,
					friendData: r,
					buildEventProperties: t,
					translate: n,
					componentType: l,
					playerCountStyle: u,
					playButtonStyle: c,
					navigationRootPlaceId: p,
					isSponsoredFooterAllowed: m,
					hoverStyle: s,
					topicId: null === (s = i.topicId) || void 0 === s ? void 0 : s.toString(),
					isExpandHomeContentEnabled: S
				}))
			}).defaultProps = {
				componentType: void 0,
				playerCountStyle: void 0,
				playButtonStyle: void 0,
				hoverStyle: void 0,
				tooltipInfoText: void 0,
				hideSeeAll: void 0,
				navigationRootPlaceId: void 0,
				isSponsoredFooterAllowed: void 0,
				seeAllLinkPath: void 0,
				subtitleLinkPath: void 0,
				itemsPerRow: void 0,
				endTimestamp: void 0,
				countdownString: void 0,
				isExpandHomeContentEnabled: void 0,
				isCarouselHorizontalScrollEnabled: void 0,
				isNewScrollArrowsEnabled: void 0,
				isNewSortHeaderEnabled: void 0
			};
			var Vo = Sl,
				qo = function() {
					return (qo = Object.assign || function(e) {
						for (var t, n = 1, r = arguments.length; n < r; n++)
							for (var o in t = arguments[n]) Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
						return e
					}).apply(this, arguments)
				},
				Jo = function(e, a, l, u) {
					return new(l = l || Promise)(function(n, t) {
						function r(e) {
							try {
								i(u.next(e))
							} catch (e) {
								t(e)
							}
						}

						function o(e) {
							try {
								i(u.throw(e))
							} catch (e) {
								t(e)
							}
						}

						function i(e) {
							var t;
							e.done ? n(e.value) : ((t = e.value) instanceof l ? t : new l(function(e) {
								e(t)
							})).then(r, o)
						}
						i((u = u.apply(e, a || [])).next())
					})
				},
				Ko = function(n, r) {
					var o, i, a, l = {
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
								if (o) throw new TypeError("Generator is already executing.");
								for (; l;) try {
									if (o = 1, i && (a = 2 & t[0] ? i.return : t[0] ? i.throw || ((a = i.return) && a.call(i), 0) : i.next) && !(a = a.call(i, t[1])).done) return a;
									switch (i = 0, a && (t = [2 & t[0], a.value]), t[0]) {
										case 0:
										case 1:
											a = t;
											break;
										case 4:
											return l.label++, {
												value: t[1],
												done: !1
											};
										case 5:
											l.label++, i = t[1], t = [0];
											continue;
										case 7:
											t = l.ops.pop(), l.trys.pop();
											continue;
										default:
											if (!(a = 0 < (a = l.trys).length && a[a.length - 1]) && (6 === t[0] || 2 === t[0])) {
												l = 0;
												continue
											}
											if (3 === t[0] && (!a || t[1] > a[0] && t[1] < a[3])) {
												l.label = t[1];
												break
											}
											if (6 === t[0] && l.label < a[1]) {
												l.label = a[1], a = t;
												break
											}
											if (a && l.label < a[2]) {
												l.label = a[2], l.ops.push(t);
												break
											}
											a[2] && l.ops.pop(), l.trys.pop();
											continue
									}
									t = r.call(n, l)
								} catch (e) {
									t = [6, e], i = 0
								} finally {
									o = a = 0
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

			function Xo() {
				function i(e) {
					(e.detail || []).forEach(function(e) {
						l.current[e.userId] && (l.current[e.userId] = qo(qo({}, l.current[e.userId]), {
							presence: e
						}))
					}), a(qo({}, l.current))
				}
				var e = this,
					t = (0, X.useState)({}),
					n = t[0],
					a = t[1],
					l = (0, X.useRef)(n);
				return (0, X.useEffect)(function() {
					return Jo(e, void 0, void 0, function() {
							var t, n, r, o;
							return Ko(this, function(e) {
								switch (e.label) {
									case 0:
										if ((null == (n = Oe.deviceMeta.getDeviceMeta()) ? void 0 : n.deviceType) !== Oe.deviceMeta.DeviceTypes.computer || null === T.CurrentUser || void 0 === T.CurrentUser || !T.CurrentUser.isAuthenticated) return [3, 5];
										e.label = 1;
									case 1:
										return e.trys.push([1, 4, , 5]), [4, Fe()];
									case 2:
										return t = e.sent().userData, 0 === (n = t ? t.map(function(e) {
											return e.id
										}) : []).length ? [2] : [4, ve(n)];
									case 3:
										return r = e.sent().profileDetails, o = (t || []).reduce(function(e, t) {
											var n = r.find(function(e) {
												return e.userId === t.id
											});
											return n && (e[t.id] = qo(qo({}, t), {
												displayName: n.names.combinedName,
												name: n.names.username
											})), e
										}, {}), l.current = o, a(qo({}, l.current)), document.addEventListener("Roblox.Presence.Update", i), [3, 5];
									case 4:
										return o = e.sent(), console.error("useFriendsPresence failed to initialized with the error", o), [3, 5];
									case 5:
										return [2]
								}
							})
						}),
						function() {
							document.removeEventListener("Roblox.Presence.Update", i)
						}
				}, []), Object.values(n)
			}

			function $o() {
				var e = (0, X.useContext)(Yo);
				return {
					contentMetadata: e.contentMetadata,
					appendContentMetadata: e.appendContentMetadata
				}
			}
			var Yo = (0, X.createContext)({
					contentMetadata: null,
					appendContentMetadata: function() {}
				}),
				Zo = function() {
					return (Zo = Object.assign || function(e) {
						for (var t, n = 1, r = arguments.length; n < r; n++)
							for (var o in t = arguments[n]) Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
						return e
					}).apply(this, arguments)
				};
			(te = function(e) {
				var t = e.translate,
					r = e.gameData,
					o = e.sort,
					i = e.page,
					a = e.positionId,
					n = e.isLoadingMoreGames,
					l = e.loadMoreGames,
					u = e.tooltipInfoText,
					c = e.hideSeeAll,
					s = e.componentType,
					d = e.playerCountStyle,
					f = e.playButtonStyle,
					p = e.itemsPerRow,
					m = e.subtitleLinkPath,
					v = (0, X.useRef)(null),
					h = mn(),
					e = (0, X.useCallback)(function(e) {
						if (void 0 !== r) {
							var t = e.filter(function(e) {
								return e < (null == r ? void 0 : r.length)
							});
							return Zo(Zo(Zo(Zo(Zo(((e = {})[F.RootPlaceIds] = t.map(function(e) {
								return r[e].placeId
							}), e[F.UniverseIds] = t.map(function(e) {
								return r[e].universeId
							}), e), H(r, t)), ((e = {})[F.AbsPositions] = t, e[F.SortPos] = a, e[F.GameSetTypeId] = o.topicId, e)), No(o)), Ro(o)), ((e = {})[F.Page] = i, e[F.NumberOfLoadedTiles] = (r || []).length, e[j.DiscoverPageSessionInfo] = h, e))
						}
					}, [r, h, a, o, i]);
				hn(v, r.length, e), (0, X.useEffect)(function() {
					p && null != v && v.current && v.current.style.setProperty("--items-per-row", p.toString())
				}, [p]);
				e = (0, X.useMemo)(function() {
					var e = Zo(Zo(((e = {})[F.Position] = a, e[F.GameSetTypeId] = o.topicId, e), No(o)), ((t = {})[F.Page] = i, t[F.TreatmentType] = I.Carousel, t[j.DiscoverPageSessionInfo] = h, t)),
						t = function(e) {
							if (To(e) && e.appliedFilters) {
								var n = {};
								return e.appliedFilters.split(",").forEach(function(e) {
									var t = e.split("="),
										e = t[0],
										t = t[1];
									e && t && (n[e] = t)
								}), n
							}
							return {}
						}(o);
					return R(o.sortId, i, e, t)
				}, [h, i, a, o]);
				return $().createElement("div", {
					className: ge()("games-list-container", {
						"wide-game-tile-container": s === K.GridTile || s === K.EventTile
					})
				}, $().createElement(So, {
					sortTitle: o.topic,
					sortSubtitle: o.subtitle,
					subtitleLink: m || e,
					seeAllLink: e,
					isSortLinkOverrideEnabled: !1,
					shouldShowSeparateSubtitleLink: !!m,
					shouldShowSponsoredTooltip: o.topicId === Ke.adSortDiscoverId,
					tooltipInfoText: u,
					titleContainerClassName: "container-header games-filter-changer",
					hideSeeAll: c,
					translate: t
				}), $().createElement(Wo, {
					gamesContainerRef: v,
					gameData: r,
					sort: o,
					positionId: a,
					loadMoreGames: l,
					sortId: o.topicId,
					isLoadingMoreGames: n,
					buildEventProperties: function(e, t) {
						var n;
						return Zo(Zo(Zo(Zo(((n = {})[F.PlaceId] = e.placeId, n[F.UniverseId] = e.universeId, n[F.IsAd] = e.isSponsored, n[F.NativeAdData] = e.nativeAdData, n[F.Position] = t, n[F.SortPos] = a, n[F.GameSetTypeId] = o.topicId, n), No(o)), ((n = {})[F.NumberOfLoadedTiles] = (r || []).length, n[F.Page] = i, n)), Ro(o)), ((n = {})[j.DiscoverPageSessionInfo] = h, n[F.PlayContext] = Y.GamesPage, n))
					},
					translate: t,
					page: i,
					componentType: s,
					playerCountStyle: d,
					playButtonStyle: f,
					itemsPerRow: p
				}))
			}).defaultProps = {
				loadMoreGames: void 0,
				tooltipInfoText: void 0,
				hideSeeAll: void 0,
				componentType: void 0,
				itemsPerRow: void 0,
				playerCountStyle: void 0,
				playButtonStyle: void 0,
				subtitleLinkPath: void 0
			};
			var Qo = te,
				ei = (0, X.createContext)(void 0),
				ti = function() {
					return (ti = Object.assign || function(e) {
						for (var t, n = 1, r = arguments.length; n < r; n++)
							for (var o in t = arguments[n]) Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
						return e
					}).apply(this, arguments)
				};
			(fr = function(e) {
				var t = e.translate,
					r = e.sort,
					o = e.positionId,
					n = e.itemsPerRow,
					i = e.gameData,
					a = (0, X.useContext)(ei),
					l = (0, X.useRef)(null),
					u = Xo(),
					c = (0, X.useMemo)(function() {
						return Ye
					}, []),
					s = (0, X.useCallback)(function(e, t) {
						var n;
						return ti(ti(((n = {})[F.PlaceId] = e.placeId, n[F.UniverseId] = e.universeId, n[F.IsAd] = e.isSponsored, n[F.NativeAdData] = e.nativeAdData, n[F.Position] = t, n[F.SortPos] = o, n[F.NumberOfLoadedTiles] = i.length, n[F.GameSetTypeId] = c, n), No(r)), ((n = {})[F.Page] = Y.SearchLandingPage, n[j.SearchLandingPageSessionInfo] = a, n[F.PlayContext] = Y.SearchLandingPage, n))
					}, [o, i.length, c, r, a]),
					e = (0, X.useCallback)(function(e) {
						var t = e.filter(function(e) {
							return e < i.length
						});
						return ti(ti(ti(ti(ti(((e = {})[F.RootPlaceIds] = t.map(function(e) {
							return null === (e = i[e]) || void 0 === e ? void 0 : e.placeId
						}), e[F.UniverseIds] = t.map(function(e) {
							return null === (e = i[e]) || void 0 === e ? void 0 : e.universeId
						}), e), z(i, c, t)), q(i, c, t)), H(i, t)), No(r)), ((e = {})[F.AbsPositions] = t, e[F.SortPos] = o, e[F.NumberOfLoadedTiles] = i.length, e[F.GameSetTypeId] = c, e[F.Page] = Y.SearchLandingPage, e[j.SearchLandingPageSessionInfo] = a, e))
					}, [i, r, o, a, c]);
				return hn(l, i.length, e), $().createElement($().Fragment, null, $().createElement(So, {
					sortTitle: r.topic,
					sortSubtitle: r.subtitle,
					shouldShowSeparateSubtitleLink: !1,
					isSortLinkOverrideEnabled: !1,
					titleContainerClassName: "container-header",
					hideSeeAll: !0,
					translate: t,
					seeAllLink: void 0,
					subtitleLink: void 0,
					shouldShowSponsoredTooltip: void 0
				}), $().createElement(Wo, {
					gameData: i,
					sort: r,
					positionId: o,
					hideScrollBackWhenDisabled: !0,
					sortId: c,
					page: Y.SearchLandingPage,
					gamesContainerRef: l,
					buildEventProperties: s,
					isLoadingMoreGames: !1,
					itemsPerRow: n,
					friendData: u,
					topicId: null === (u = r.topicId) || void 0 === u ? void 0 : u.toString(),
					isExpandHomeContentEnabled: !1,
					isCarouselHorizontalScrollEnabled: !0,
					isNewScrollArrowsEnabled: !1,
					translate: t
				}))
			}).defaultProps = {
				itemsPerRow: void 0
			};
			var ni = fr;

			function ri(e) {
				var t = e.sort,
					o = $o().contentMetadata;
				return 0 === (null == (e = (0, X.useMemo)(function() {
					return t.recommendationList.map(function(e) {
						var t, n = e.contentType,
							r = e.contentId,
							e = null === (t = null == o ? void 0 : o[n]) || void 0 === t ? void 0 : t[r];
						return e && ((t = e).itemId = r, t.itemType = n), e
					}).filter(function(e) {
						return e
					}).slice(0, ai)
				}, [t.recommendationList, o])) ? void 0 : e.length) ? null : $().createElement(T.AvatarShopHomepageRecommendations, {
					recommendedItems: e
				})
			}

			function oi(e) {
				var t = e.loadData,
					n = (0, X.useRef)(null),
					r = (0, X.useRef)(null);
				return (0, X.useEffect)(function() {
					var e = n.current;
					return e && (r.current = P.elementVisibilityService.observeVisibility({
							element: e,
							threshold: $e
						}, function(e) {
							e && t && t()
						})),
						function() {
							null != r && r.current && r.current()
						}
				}, [t]), t ? $().createElement("div", {
					ref: n,
					"data-testid": "sentinel-tile",
					className: "grid-item-container game-card-container invisible"
				}) : null
			}(oe = function(e) {
				var t = e.translate,
					n = e.sort,
					r = e.positionId,
					o = e.page,
					i = e.itemsPerRow,
					a = e.startingRow,
					l = e.loadMoreGames,
					u = e.isLoadingMoreGames,
					c = e.isExpandHomeContentEnabled,
					s = e.isCarouselHorizontalScrollEnabled,
					d = e.isNewScrollArrowsEnabled,
					f = e.isNewSortHeaderEnabled,
					e = Xo(),
					p = $o().contentMetadata,
					m = s || o === Y.HomePage && (null === (s = null == n ? void 0 : n.topicLayoutData) || void 0 === s ? void 0 : s.componentType) === K.EventTile,
					d = d || o === Y.HomePage && (null === (v = null == n ? void 0 : n.topicLayoutData) || void 0 === v ? void 0 : v.componentType) === K.EventTile,
					v = (0, X.useMemo)(function() {
						var e;
						return m ? ko(n, p) : c ? ko(n, p).slice(0, i) : ko(n, p).slice(0, function(e, t) {
							var n = Je.maxWideGameTilesPerCarouselPage,
								r = Je.maxTilesPerCarouselPage;
							if (e !== Y.GamesPage && e !== Y.SearchLandingPage) switch (t) {
								case K.GridTile:
								case K.EventTile:
								case K.InterestTile:
									return n;
								case K.AppGameTileNoMetadata:
								default:
									return r
							}
						}(o, null === (e = n.topicLayoutData) || void 0 === e ? void 0 : e.componentType))
					}, [n, p, o, i, c, m]);
				return 0 === (null == v ? void 0 : v.length) ? null : o === Y.GamesPage ? $().createElement(Qo, {
					key: n.topic,
					sort: n,
					translate: t,
					positionId: r,
					page: o,
					gameData: v,
					loadMoreGames: l,
					isLoadingMoreGames: !0 === u,
					tooltipInfoText: null === (u = n.topicLayoutData) || void 0 === u ? void 0 : u.infoText,
					hideSeeAll: "true" === (null === (u = n.topicLayoutData) || void 0 === u ? void 0 : u.hideSeeAll),
					componentType: null === (u = n.topicLayoutData) || void 0 === u ? void 0 : u.componentType,
					playerCountStyle: null === (u = n.topicLayoutData) || void 0 === u ? void 0 : u.playerCountStyle,
					playButtonStyle: null === (u = n.topicLayoutData) || void 0 === u ? void 0 : u.playButtonStyle,
					subtitleLinkPath: null === (u = n.topicLayoutData) || void 0 === u ? void 0 : u.subtitleLinkPath,
					itemsPerRow: i
				}) : o === Y.SearchLandingPage ? $().createElement(ni, {
					key: n.topic,
					sort: n,
					gameData: v,
					translate: t,
					positionId: r,
					itemsPerRow: Ze
				}) : $().createElement(Vo, {
					key: n.topic,
					sort: n,
					translate: t,
					positionId: r,
					gameData: v,
					friendsPresence: e,
					itemsPerRow: i,
					startingRow: a,
					componentType: null === (a = n.topicLayoutData) || void 0 === a ? void 0 : a.componentType,
					playerCountStyle: null === (a = n.topicLayoutData) || void 0 === a ? void 0 : a.playerCountStyle,
					playButtonStyle: null === (a = n.topicLayoutData) || void 0 === a ? void 0 : a.playButtonStyle,
					hoverStyle: null === (a = n.topicLayoutData) || void 0 === a ? void 0 : a.hoverStyle,
					tooltipInfoText: null === (a = n.topicLayoutData) || void 0 === a ? void 0 : a.infoText,
					hideSeeAll: "true" === (null === (a = n.topicLayoutData) || void 0 === a ? void 0 : a.hideSeeAll),
					navigationRootPlaceId: null === (a = n.topicLayoutData) || void 0 === a ? void 0 : a.navigationRootPlaceId,
					isSponsoredFooterAllowed: "true" === (null === (a = n.topicLayoutData) || void 0 === a ? void 0 : a.isSponsoredFooterAllowed),
					seeAllLinkPath: null === (a = n.topicLayoutData) || void 0 === a ? void 0 : a.linkPath,
					subtitleLinkPath: null === (a = n.topicLayoutData) || void 0 === a ? void 0 : a.subtitleLinkPath,
					endTimestamp: null === (a = n.topicLayoutData) || void 0 === a ? void 0 : a.endTimestamp,
					countdownString: null === (a = n.topicLayoutData) || void 0 === a ? void 0 : a.countdownString,
					isExpandHomeContentEnabled: c,
					isCarouselHorizontalScrollEnabled: m,
					isNewScrollArrowsEnabled: d,
					isNewSortHeaderEnabled: f
				})
			}).defaultProps = {
				loadMoreGames: void 0,
				isLoadingMoreGames: void 0,
				isExpandHomeContentEnabled: void 0,
				isCarouselHorizontalScrollEnabled: void 0,
				isNewScrollArrowsEnabled: void 0,
				isNewSortHeaderEnabled: void 0
			};
			var ii = oe,
				ai = Je.maxTilesPerCarouselPage;

			function li(e) {
				var t = e.universeId,
					n = e.creatorName,
					r = e.creatorType,
					o = e.creatorId,
					i = e.linkUrl,
					a = e.isCreatorVerified,
					l = e.translate,
					e = (0, X.useRef)(null);
				return $().createElement("div", {
					ref: e,
					className: "game-card-creator-name",
					"data-testid": "game-card-creator-name"
				}, $().createElement("span", {
					className: "text-label creator-name-label"
				}, l(nt.LabelByPrefix), " "), $().createElement("a", {
					href: i,
					onClick: function() {
						T.EventStream.SendEventWithTarget("buttonClick", "featuredTileCreatorLabel", {
							creatorId: o,
							creatorType: r,
							universeId: t
						}, T.EventStream.TargetTypes.WWW)
					},
					className: "text-overflow text-label creator-name"
				}, n), a && $().createElement(ui.VerifiedBadgeIconContainer, {
					size: ui.BadgeSizes.CAPTIONHEADER
				}))
			}
			oi.displayName = "SentinelTile", oi.defaultProps = {
				loadData: null
			};
			var ui = RobloxBadges;
			(Tm = function(e) {
				var t = e.universeId,
					n = e.placeId,
					r = e.playButtonEventProperties,
					o = e.disableLoadingState,
					i = e.redirectPurchaseUrl,
					a = T.PlayButton.usePlayabilityStatus,
					l = T.PlayButton.PlayabilityStatuses,
					u = T.PlayButton.DefaultPlayButton,
					e = a(t),
					c = e[0],
					a = e[1],
					e = (0, X.useMemo)(function() {
						return !!c && [l.PurchaseRequired, l.FiatPurchaseRequired].includes(c)
					}, [c, l]);
				return $().createElement(u, {
					placeId: n,
					universeId: t,
					refetchPlayabilityStatus: a,
					playabilityStatus: c,
					eventProperties: r,
					disableLoadingState: o,
					buttonClassName: e ? "btn-economy-robux-white-lg purchase-button" : void 0,
					hideButtonText: !e,
					redirectPurchaseUrl: e ? i : void 0,
					showDefaultPurchaseText: c === l.FiatPurchaseRequired
				})
			}).defaultProps = {
				playButtonEventProperties: {},
				disableLoadingState: !1,
				redirectPurchaseUrl: void 0
			};
			var ci = Tm,
				si = function(e, a, l, u) {
					return new(l = l || Promise)(function(n, t) {
						function r(e) {
							try {
								i(u.next(e))
							} catch (e) {
								t(e)
							}
						}

						function o(e) {
							try {
								i(u.throw(e))
							} catch (e) {
								t(e)
							}
						}

						function i(e) {
							var t;
							e.done ? n(e.value) : ((t = e.value) instanceof l ? t : new l(function(e) {
								e(t)
							})).then(r, o)
						}
						i((u = u.apply(e, a || [])).next())
					})
				},
				di = function(n, r) {
					var o, i, a, l = {
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
								if (o) throw new TypeError("Generator is already executing.");
								for (; l;) try {
									if (o = 1, i && (a = 2 & t[0] ? i.return : t[0] ? i.throw || ((a = i.return) && a.call(i), 0) : i.next) && !(a = a.call(i, t[1])).done) return a;
									switch (i = 0, a && (t = [2 & t[0], a.value]), t[0]) {
										case 0:
										case 1:
											a = t;
											break;
										case 4:
											return l.label++, {
												value: t[1],
												done: !1
											};
										case 5:
											l.label++, i = t[1], t = [0];
											continue;
										case 7:
											t = l.ops.pop(), l.trys.pop();
											continue;
										default:
											if (!(a = 0 < (a = l.trys).length && a[a.length - 1]) && (6 === t[0] || 2 === t[0])) {
												l = 0;
												continue
											}
											if (3 === t[0] && (!a || t[1] > a[0] && t[1] < a[3])) {
												l.label = t[1];
												break
											}
											if (6 === t[0] && l.label < a[1]) {
												l.label = a[1], a = t;
												break
											}
											if (a && l.label < a[2]) {
												l.label = a[2], l.ops.push(t);
												break
											}
											a[2] && l.ops.pop(), l.trys.pop();
											continue
									}
									t = r.call(n, l)
								} catch (e) {
									t = [6, e], i = 0
								} finally {
									o = a = 0
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
				fi = (0, X.forwardRef)(function(e, t) {
					var n = e.id,
						r = e.buildEventProperties,
						o = e.gameData,
						i = e.translate,
						a = e.topicId,
						l = (0, X.useState)(),
						u = l[0],
						c = l[1],
						s = Pe(),
						d = s[0],
						f = s[1],
						e = s[2],
						p = Xo(),
						l = Te(o, a),
						m = (0, X.useMemo)(function() {
							return B(p, o.universeId)
						}, [p, o.universeId]),
						s = (0, X.useMemo)(function() {
							return 0 < m.length && u ? $().createElement(Yt, {
								gameData: u,
								friendData: m,
								translate: i
							}) : $().createElement("div", {
								className: "game-card-description-info font-body",
								"data-testid": "featured-grid-tile-description"
							}, null == u ? void 0 : u.description)
						}, [m]);
					(0, X.useEffect)(function() {
						si(void 0, void 0, void 0, function() {
							var t;
							return di(this, function(e) {
								switch (e.label) {
									case 0:
										return e.trys.push([0, 2, , 3]), [4, Ue(o.placeId.toString())];
									case 1:
										return t = e.sent(), c(t), [3, 3];
									case 2:
										return t = e.sent(), console.error(t), [3, 3];
									case 3:
										return [2]
								}
							})
						})
					}, []);
					var a = v(o.placeId, o.name, r(o, n)),
						r = r(o, n),
						n = Ve(l);
					return $().createElement("div", {
						ref: t,
						className: "featured-grid-item-container game-card-container",
						"data-testid": "game-tile-featured",
						onMouseOver: f,
						onMouseLeave: e,
						onFocus: f,
						onBlur: e
					}, $().createElement(ye.Link, {
						url: a,
						className: "game-card-link",
						id: o.universeId.toString()
					}, $().createElement(Mt, {
						gameLayoutData: l,
						isFocused: d
					}), $().createElement(qe.Thumbnail2d, {
						type: qe.ThumbnailTypes.gameIcon,
						size: qe.ThumbnailGameIconSize.size512,
						targetId: o.universeId,
						containerClass: "game-card-thumb-container",
						format: qe.ThumbnailFormat.jpeg,
						altName: o.name
					}), $().createElement("div", {
						className: "game-card-name-info"
					}, $().createElement("div", null, $().createElement("div", {
						className: "game-card-name game-name-title",
						title: o.name
					}, o.name), n ? $().createElement(Wt, {
						footerData: n
					}) : $().createElement(Gt, {
						totalUpVotes: o.totalUpVotes,
						totalDownVotes: o.totalDownVotes,
						playerCount: o.playerCount
					})), $().createElement(ci, {
						universeId: o.universeId.toString(),
						placeId: o.placeId.toString(),
						playButtonEventProperties: r,
						redirectPurchaseUrl: N.urlService.isValidHttpUrl(a) ? a : void 0
					})), null !== o.creatorName && $().createElement(li, {
						universeId: o.universeId.toString(),
						creatorId: o.creatorId,
						creatorType: o.creatorType,
						creatorName: o.creatorName,
						isCreatorVerified: null !== (r = o.creatorHasVerifiedBadge) && void 0 !== r && r,
						linkUrl: a,
						translate: i
					}), s))
				});
			fi.displayName = "FeaturedGridTile";
			var pi = function() {
					return (pi = Object.assign || function(e) {
						for (var t, n = 1, r = arguments.length; n < r; n++)
							for (var o in t = arguments[n]) Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
						return e
					}).apply(this, arguments)
				},
				mi = function(e, t) {
					var n = {};
					for (o in e) Object.prototype.hasOwnProperty.call(e, o) && t.indexOf(o) < 0 && (n[o] = e[o]);
					if (null != e && "function" == typeof Object.getOwnPropertySymbols)
						for (var r = 0, o = Object.getOwnPropertySymbols(e); r < o.length; r++) t.indexOf(o[r]) < 0 && Object.prototype.propertyIsEnumerable.call(e, o[r]) && (n[o[r]] = e[o[r]]);
					return n
				};
			(ql = (0, X.forwardRef)(function(e, t) {
				var n = e.emphasis,
					r = e.friendData,
					o = e.componentType,
					i = e.playerCountStyle,
					a = e.playButtonStyle,
					l = e.isSponsoredFooterAllowed,
					u = e.hoverStyle,
					c = e.topicId,
					s = e.isInterestedUniverse,
					d = e.toggleInterest,
					e = mi(e, ["emphasis", "friendData", "componentType", "playerCountStyle", "playButtonStyle", "isSponsoredFooterAllowed", "hoverStyle", "topicId", "isInterestedUniverse", "toggleInterest"]);
				return n ? $().createElement(fi, pi({
					ref: t
				}, e)) : $().createElement(dn, pi({
					ref: t,
					friendData: r,
					componentType: o,
					playerCountStyle: i,
					playButtonStyle: a,
					isSponsoredFooterAllowed: l,
					hoverStyle: u,
					topicId: c,
					isInterestedUniverse: s,
					toggleInterest: d
				}, e))
			})).displayName = "GameGridTile", ql.defaultProps = {
				friendData: [],
				componentType: void 0,
				playerCountStyle: void 0,
				playButtonStyle: void 0,
				isSponsoredFooterAllowed: void 0,
				hoverStyle: void 0,
				isInterestedUniverse: void 0,
				toggleInterest: void 0
			};
			var vi = ql,
				hi = (0, X.forwardRef)(function(e, t) {
					var n = e.gameData,
						r = e.translate,
						o = e.emphasis,
						i = e.buildEventProperties,
						a = e.tileRef,
						l = e.loadData,
						u = e.shouldUseSentinelTile,
						c = e.friendsPresence,
						s = e.componentType,
						d = e.playerCountStyle,
						f = e.playButtonStyle,
						p = e.isHomeGameGrid,
						m = e.isSponsoredFooterAllowed,
						v = e.hoverStyle,
						h = e.topicId,
						g = e.isExpandHomeContentEnabled,
						y = e.interestedUniverses,
						b = e.toggleInterest,
						g = ge()("game-grid", {
							"home-game-grid": p
						}, {
							"wide-game-tile-game-grid": s === K.GridTile || s === K.EventTile || s === K.InterestTile
						}, {
							"interest-tile-game-grid": s === K.InterestTile
						}, {
							"expand-home-content": g
						}, {
							"expand-home-content-disabled": !g
						});
					return $().createElement("div", {
						"data-testid": "game-grid",
						ref: t,
						className: g
					}, n.map(function(e, t) {
						return $().createElement(vi, {
							ref: function(e) {
								(!0 === o && 1 === t || !1 === o && 0 === t) && a && (a.current = e)
							},
							key: e.universeId,
							id: t,
							gameData: e,
							translate: r,
							buildEventProperties: i,
							emphasis: !0 === o && 0 === t && !p,
							friendData: c,
							componentType: s,
							playerCountStyle: d,
							playButtonStyle: f,
							isSponsoredFooterAllowed: m,
							hoverStyle: v,
							topicId: h,
							isInterestedUniverse: null == y ? void 0 : y.has(e.universeId),
							toggleInterest: b ? function() {
								return b(e.universeId)
							} : void 0
						})
					}), u && $().createElement(oi, {
						loadData: l
					}))
				});
			hi.displayName = "GameGrid", hi.defaultProps = {
				friendsPresence: [],
				componentType: void 0,
				playerCountStyle: void 0,
				playButtonStyle: void 0,
				isHomeGameGrid: !1,
				isSponsoredFooterAllowed: void 0,
				hoverStyle: void 0,
				topicId: void 0,
				isExpandHomeContentEnabled: void 0,
				interestedUniverses: void 0,
				toggleInterest: void 0
			};
			var gi = hi,
				yi = function() {
					return (yi = Object.assign || function(e) {
						for (var t, n = 1, r = arguments.length; n < r; n++)
							for (var o in t = arguments[n]) Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
						return e
					}).apply(this, arguments)
				};
			(Ki = function(e) {
				var r = e.gameData,
					o = e.sort,
					i = e.positionId,
					t = e.friendsPresence,
					n = e.componentType,
					a = e.playerCountStyle,
					l = e.playButtonStyle,
					u = e.hoverStyle,
					c = e.itemsPerRow,
					s = e.startingRow,
					d = e.isSponsoredFooterAllowed,
					f = e.isExpandHomeContentEnabled,
					p = e.isNewSortHeaderEnabled,
					m = e.translate,
					v = (0, X.useRef)(null),
					h = (0, X.useRef)(null),
					g = mn(),
					e = (0, X.useCallback)(function(e) {
						if (void 0 !== r && void 0 !== s) {
							var t = e.filter(function(e) {
								return e < (null == r ? void 0 : r.length)
							});
							return yi(yi(yi(yi(yi(yi(((e = {})[F.RootPlaceIds] = t.map(function(e) {
								return r[e].placeId
							}), e[F.UniverseIds] = t.map(function(e) {
								return r[e].universeId
							}), e), z(r, o.topicId, t, n)), q(r, o.topicId, t, n)), ((e = {})[F.NavigationUids] = t.map(function(e) {
								return null !== (e = r[e].navigationUid) && void 0 !== e ? e : "0"
							}), e[F.AbsPositions] = t, e)), H(r, t)), J(s, c, null == r ? void 0 : r.length, t)), ((t = {})[F.SortPos] = i, t[F.NumberOfLoadedTiles] = null == r ? void 0 : r.length, t[F.GameSetTypeId] = o.topicId, t[F.Page] = Y.HomePage, t[j.HomePageSessionInfo] = g, t))
						}
					}, [r, g, i, o.topicId, n, c, s]);
				return hn(v, r.length, e), (0, X.useEffect)(function() {
					c && null != v && v.current && v.current.style.setProperty("--items-per-row", c.toString())
				}, [c]), $().createElement("div", {
					"data-testid": "home-page-game-grid"
				}, p ? $().createElement(po, {
					titleText: o.topic,
					sendNavigateToSortLinkEvent: void 0,
					titleLink: void 0,
					isSortLinkOverrideEnabled: !1,
					subtitleText: void 0,
					subtitleLink: void 0,
					shouldShowSeparateSubtitleLink: !1,
					hasBackgroundMural: !1,
					tooltipText: o.topicId === Je.adSortHomePageId ? m(rt.LabelSponsoredAdsDisclosureStatic) || "Sponsored experiences are paid for by Creators. They may be shown to you based on general information about your device type, location, and demographics." : void 0,
					hideSeeAll: !0
				}) : $().createElement("div", {
					className: "container-header"
				}, $().createElement("h2", null, o.topic, o.topicId === Je.adSortHomePageId && $().createElement(xt, {
					tooltipText: m(rt.LabelSponsoredAdsDisclosureStatic) || "Sponsored experiences are paid for by Creators. They may be shown to you based on general information about your device type, location, and demographics.",
					placement: "right"
				}))), $().createElement(hi, {
					ref: v,
					tileRef: h,
					gameData: r,
					emphasis: !1,
					translate: m,
					buildEventProperties: function(e, t) {
						var n = {};
						return n[F.PlaceId] = e.placeId, n[F.UniverseId] = e.universeId, n[F.IsAd] = e.isSponsored, n[F.NativeAdData] = e.nativeAdData, n[F.Position] = t, n[F.SortPos] = i, n[F.NumberOfLoadedTiles] = (r || []).length, n[F.GameSetTypeId] = o.topicId, n[F.Page] = Y.HomePage, n[j.HomePageSessionInfo] = g, n[F.PlayContext] = Y.HomePage, n
					},
					isHomeGameGrid: !0,
					friendsPresence: t,
					componentType: n,
					playerCountStyle: a,
					playButtonStyle: l,
					isSponsoredFooterAllowed: d,
					hoverStyle: u,
					topicId: null === (u = o.topicId) || void 0 === u ? void 0 : u.toString(),
					isExpandHomeContentEnabled: f
				}))
			}).defaultProps = {
				componentType: void 0,
				playerCountStyle: void 0,
				playButtonStyle: void 0,
				hoverStyle: void 0,
				itemsPerRow: void 0,
				isSponsoredFooterAllowed: void 0,
				isExpandHomeContentEnabled: void 0,
				isNewSortHeaderEnabled: void 0
			};
			var bi = Ki,
				wi = Je.sortlessGridMaxTilesMetadataToFetch;
			($i = function(e) {
				var t = e.translate,
					n = e.sort,
					r = e.positionId,
					o = e.itemsPerRow,
					i = e.startingRow,
					a = e.recommendations,
					l = e.isExpandHomeContentEnabled,
					u = e.isNewSortHeaderEnabled,
					c = Xo(),
					s = mn(),
					e = $o(),
					d = e.contentMetadata,
					f = e.appendContentMetadata,
					p = (0, X.useCallback)(function() {
						var e = a.filter(function(e) {
							var t = e.contentType,
								e = e.contentId;
							return !(null !== (t = null == d ? void 0 : d[t]) && void 0 !== t && t[e])
						});
						0 < e.length && me(e.slice(0, wi), s).then(function(e) {
							return f(e.contentMetadata)
						}).catch(function() {})
					}, [a, s, d, f]);
				(0, X.useEffect)(function() {
					p()
				}, [p]);
				e = (0, X.useMemo)(function() {
					return Eo(a, d)
				}, [a, d]);
				return 0 === (null == e ? void 0 : e.length) ? null : $().createElement(bi, {
					key: n.topic,
					sort: n,
					gameData: e,
					translate: t,
					positionId: r,
					itemsPerRow: o,
					startingRow: i,
					friendsPresence: c,
					componentType: null === (c = n.topicLayoutData) || void 0 === c ? void 0 : c.componentType,
					playerCountStyle: null === (c = n.topicLayoutData) || void 0 === c ? void 0 : c.playerCountStyle,
					playButtonStyle: null === (c = n.topicLayoutData) || void 0 === c ? void 0 : c.playButtonStyle,
					hoverStyle: null === (c = n.topicLayoutData) || void 0 === c ? void 0 : c.hoverStyle,
					isSponsoredFooterAllowed: "true" === (null === (n = n.topicLayoutData) || void 0 === n ? void 0 : n.isSponsoredFooterAllowed),
					isExpandHomeContentEnabled: l,
					isNewSortHeaderEnabled: u
				})
			}).defaultProps = {
				isExpandHomeContentEnabled: void 0,
				isNewSortHeaderEnabled: void 0
			};
			var Si = $i,
				Ci = $g(5250);

			function Ii(e) {
				return (Ii = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
					return typeof e
				} : function(e) {
					return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
				})(e)
			}

			function xi(e, t) {
				var n = e.elements,
					r = e.threshold;
				try {
					var o = new window.IntersectionObserver(t, {
						threshold: r
					});
					return n.forEach(function(e) {
							o.observe(e)
						}),
						function() {
							return o.disconnect()
						}
				} catch (e) {}
				return function() {}
			}

			function Ei(t, e, n) {
				var r = (0, X.useRef)(new Set),
					a = (0, X.useRef)(new Set),
					o = (0, X.useRef)(null),
					i = (0, X.useCallback)(function() {
						(function(e, t) {
							if (0 === e.length || 0 === t) return [e];
							for (var n = [], r = 0; r < e.length; r += t) n.push(e.slice(r, r + t));
							return n
						})(Array.from(a.current).filter(function(e) {
							return !r.current.has(e)
						}), _i).filter(function(e) {
							return 0 < e.length
						}).forEach(function(e) {
							n(e), e.forEach(function(e) {
								return r.current.add(e)
							})
						}), a.current.clear()
					}, [n]),
					l = (0, X.useMemo)(function() {
						return (0, Ci.debounce)(function() {
							return i()
						}, 200)
					}, [i]);
				(0, X.useEffect)(function() {
					var e, i = Array.from(null !== (e = null == t || null === (e = t.current) || void 0 === e ? void 0 : e.children) && void 0 !== e ? e : []).filter(function(e) {
						return e instanceof HTMLElement
					});
					return o.current && (o.current(), o.current = null), o.current = xi({
							elements: i,
							threshold: Ri
						}, function(e, t) {
							var n, r, o;
							l.cancel(), (n = i, r = t, o = [], e.forEach(function(t) {
								var e;
								null == t || !t.isIntersecting || 0 <= (e = n.findIndex(function(e) {
									return e === t.target
								})) && (o.push(e), r.unobserve(t.target))
							}), o.sort(function(e, t) {
								return e - t
							})).forEach(function(e) {
								return a.current.add(e)
							}), l()
						}),
						function() {
							l.cancel(), o.current && (o.current(), o.current = null)
						}
				}, [t, e, l, a])
			}
			$g(1315);
			var Pi, Ti, Oi, ki, Ai, Ni, _i = 25,
				Ri = .5;

			function Li(o) {
				return Object.keys(o).reduce(function(e, t) {
					var n, r, n = (n = o[t], r = !1, Array.isArray(n) && !r ? n.join(",") : "object" === Ii(n) && n ? JSON.stringify(n) : "number" == typeof n || "string" == typeof n ? n : "boolean" == typeof n ? n ? 1 : 0 : void 0);
					return void 0 !== n && (e[t] = n), e
				}, {})
			}

			function Di(e) {
				var t = e.friendsCount,
					n = e.profileUserId,
					r = e.isOwnUser,
					o = e.translate,
					i = "(" + (null != t ? t : 0) + ")",
					e = r ? T.EnvironmentUrls.websiteUrl + "/users/friends#!/friends" : T.EnvironmentUrls.websiteUrl + "/users/" + n + "/friends#!/friends",
					n = (r = (0, X.useState)(!1))[0],
					a = r[1];
				return (0, X.useEffect)(function() {
					Wi().then(function(e) {
						a(e)
					}).catch(function(e) {
						console.error("Error fetching friends rename status:", e)
					})
				}, []), n = n || "true" === localStorage.getItem(Xi) ? "Label.Connections" : "Heading.Friends", $().createElement("div", {
					className: "container-header people-list-header"
				}, null == t ? $().createElement("h2", null, o(n)) : $().createElement("h2", null, o(n), $().createElement("span", {
					className: "friends-count"
				}, i)), $().createElement("a", {
					href: e,
					className: "btn-secondary-xs btn-more see-all-link-icon"
				}, o("Heading.SeeAll")))
			}(Kl = Pi = Pi || {}).ItemImpressions = "itemImpressions", Kl.ItemAction = "itemAction", (lt = Ti = Ti || {}).Games = "games", lt.Home = "home", lt.SearchLanding = "searchLanding", lt.Spotlight = "spotlight", lt.UserProfile = "userProfile", (et = Oi = Oi || {}).HomePageSessionInfo = "homePageSessionInfo", et.DiscoverPageSessionInfo = "discoverPageSessionInfo", et.GameSearchSessionInfo = "gameSearchSessionInfo", et.SpotlightPageSessionInfo = "spotlightPageSessionInfo", (Lu = ki = ki || {}).ContentType = "contentType", Lu.Context = "context", Lu.CollectionId = "collectionId", Lu.CollectionPosition = "collectionPosition", (Sl = {}).Online = "online", Sl.InGame = "inGame", Sl.InStudio = "inStudio", Sl.Offline = "offline", (te = {}).Friend = "friend", te.NotFriend = "notFriend", (fr = Ai = Ai || {}).ItemIds = "itemIds", fr.ItemPositions = "itemPositions", fr.RowNumbers = "rowNumbers", fr.FeedRowNumbers = "feedRowNumbers", fr.PositionsInRow = "positionsInRow", fr.PositionsInTopic = "positionsInTopic", fr.TotalNumberOfItems = "totalNumberOfItems", (oe = {}).Presences = "presences", oe.PresenceUniverseIds = "presenceUniverseIds", oe.FriendStatuses = "friendStatuses", oe.SourceCarousel = "sourceCarousel", (Tm = Ni = Ni || {}).ItemId = "itemId", Tm.ItemPosition = "itemPosition", Tm.RowNumber = "rowNumber", Tm.FeedRowNumber = "feedRowNumber", Tm.PositionInRow = "positionInRow", Tm.PositionInTopic = "positionInTopic", Tm.TotalNumberOfItems = "totalNumberOfItems", Tm.ActionType = "actionType", (ql = {}).Presence = "presence", ql.PresenceUniverseId = "presenceUniverseId", ql.FriendStatus = "friendStatus", ql.SourceCarousel = "sourceCarousel";
			var Mi = function() {
					return T.RealTime.Factory.GetClient()
				},
				Fi = function(e, a, l, u) {
					return new(l = l || Promise)(function(n, t) {
						function r(e) {
							try {
								i(u.next(e))
							} catch (e) {
								t(e)
							}
						}

						function o(e) {
							try {
								i(u.throw(e))
							} catch (e) {
								t(e)
							}
						}

						function i(e) {
							var t;
							e.done ? n(e.value) : ((t = e.value) instanceof l ? t : new l(function(e) {
								e(t)
							})).then(r, o)
						}
						i((u = u.apply(e, a || [])).next())
					})
				},
				ji = function(n, r) {
					var o, i, a, l = {
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
								if (o) throw new TypeError("Generator is already executing.");
								for (; l;) try {
									if (o = 1, i && (a = 2 & t[0] ? i.return : t[0] ? i.throw || ((a = i.return) && a.call(i), 0) : i.next) && !(a = a.call(i, t[1])).done) return a;
									switch (i = 0, a && (t = [2 & t[0], a.value]), t[0]) {
										case 0:
										case 1:
											a = t;
											break;
										case 4:
											return l.label++, {
												value: t[1],
												done: !1
											};
										case 5:
											l.label++, i = t[1], t = [0];
											continue;
										case 7:
											t = l.ops.pop(), l.trys.pop();
											continue;
										default:
											if (!(a = 0 < (a = l.trys).length && a[a.length - 1]) && (6 === t[0] || 2 === t[0])) {
												l = 0;
												continue
											}
											if (3 === t[0] && (!a || t[1] > a[0] && t[1] < a[3])) {
												l.label = t[1];
												break
											}
											if (6 === t[0] && l.label < a[1]) {
												l.label = a[1], a = t;
												break
											}
											if (a && l.label < a[2]) {
												l.label = a[2], l.ops.push(t);
												break
											}
											a[2] && l.ops.pop(), l.trys.pop();
											continue
									}
									t = r.call(n, l)
								} catch (e) {
									t = [6, e], i = 0
								} finally {
									o = a = 0
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
				Ui = function(e, t) {
					for (var n = 0, r = t.length, o = e.length; n < r; n++, o++) e[o] = t[n];
					return e
				},
				Bi = function(n) {
					return Fi(void 0, void 0, Promise, function() {
						var t;
						return ji(this, function(e) {
							switch (e.label) {
								case 0:
									return t = {
										url: T.EnvironmentUrls.friendsApi + "/v1/users/" + n + "/friends/count",
										retryable: !0,
										withCredentials: !0
									}, [4, N.httpService.get(t)];
								case 1:
									return [2, e.sent().data]
							}
						})
					})
				},
				Gi = function(m, v) {
					return Fi(void 0, void 0, Promise, function() {
						var t, a, l, u, c, s, d, f, p;
						return ji(this, function(e) {
							switch (e.label) {
								case 0:
									return v ? [4, (i = m, Fi(void 0, void 0, Promise, function() {
										var t;
										return ji(this, function(e) {
											switch (e.label) {
												case 0:
													return t = {
														url: T.EnvironmentUrls.friendsApi + "/v1/users/" + i + "/friends/online",
														retryable: !0,
														withCredentials: !0
													}, [4, N.httpService.get(t)];
												case 1:
													return [2, e.sent().data]
											}
										})
									}))] : [3, 2];
								case 1:
									return a = e.sent().data, [3, 3];
								case 2:
									a = [], e.label = 3;
								case 3:
									return (t = a).sort(function(e, t) {
										var n = {
												InGame: 0,
												Online: 1,
												InStudio: 2
											},
											e = e.userPresence.UserPresenceType,
											t = t.userPresence.UserPresenceType;
										return !(e in n && t in n) || n[e] < n[t] ? -1 : 1
									}), [4, (n = m, o = v, Fi(void 0, void 0, Promise, function() {
										var t;
										return ji(this, function(e) {
											switch (e.label) {
												case 0:
													return t = T.EnvironmentUrls.friendsApi + "/v1/users/" + n + "/friends/find", t = {
														url: o ? t + "?userSort=1" : t,
														retryable: !0,
														withCredentials: !0
													}, [4, N.httpService.get(t)];
												case 1:
													return [2, e.sent().data]
											}
										})
									}))];
								case 4:
									for (f = e.sent().PageItems, l = new Map, u = 0, c = t; u < c.length; u++) s = c[u], l.set(s.id, s.userPresence);
									return d = t.map(function(e) {
										return e.id
									}), f = f.filter(function(e) {
										return !d.includes(e.id)
									}).map(function(e) {
										return e.id
									}), f = Ui(Ui([], d), f), [4, (r = f, Fi(void 0, void 0, Promise, function() {
										var t, n;
										return ji(this, function(e) {
											switch (e.label) {
												case 0:
													return t = {
														url: T.EnvironmentUrls.apiGatewayUrl + "/user-profile-api/v1/user/profiles/get-profiles",
														retryable: !0,
														withCredentials: !0
													}, n = {
														userIds: r,
														fields: ["names.combinedName", "isVerified"]
													}, [4, N.httpService.post(t, n)];
												case 1:
													return [2, e.sent().data]
											}
										})
									}))];
								case 5:
									return f = e.sent().profileDetails, p = [], f.forEach(function(e) {
										var t, n, r, o, i = l.has(e.userId),
											a = {
												isOnline: i,
												isInGame: i && "InGame" === (null === (t = l.get(e.userId)) || void 0 === t ? void 0 : t.UserPresenceType),
												lastLocation: !i || null === (n = l.get(e.userId)) || void 0 === n ? void 0 : n.lastLocation,
												gameId: !i || null === (r = l.get(e.userId)) || void 0 === r ? void 0 : r.gameInstanceId,
												universeId: !i || null === (o = l.get(e.userId)) || void 0 === o ? void 0 : o.universeId,
												placeId: !i || null === (a = l.get(e.userId)) || void 0 === a ? void 0 : a.placeId
											};
										p.push({
											id: e.userId,
											combinedName: e.names.combinedName,
											presence: a,
											hasVerifiedBadge: e.isVerified
										})
									}), [2, p]
							}
							var r, n, o, i
						})
					})
				},
				Hi = function() {
					return Fi(void 0, void 0, Promise, function() {
						var t;
						return ji(this, function(e) {
							switch (e.label) {
								case 0:
									return t = {
										url: T.EnvironmentUrls.friendsApi + "/v1/my/new-friend-requests/count",
										retryable: !0,
										withCredentials: !0
									}, [4, N.httpService.get(t)];
								case 1:
									return [2, e.sent().data.count]
							}
						})
					})
				},
				Wi = function() {
					return Fi(void 0, void 0, Promise, function() {
						var t;
						return ji(this, function(e) {
							switch (e.label) {
								case 0:
									t = {
										url: T.EnvironmentUrls.apiGatewayUrl + "/universal-app-configuration/v1/behaviors/web-rename-friends/content",
										retryable: !0,
										withCredentials: !0
									}, e.label = 1;
								case 1:
									return e.trys.push([1, 3, , 4]), [4, N.httpService.get(t)];
								case 2:
									return [2, e.sent().data.renameFriendsToConnections];
								case 3:
									return t = e.sent(), console.error("Error fetching renameFriendsToConnections:", t), [2, "true" === localStorage.getItem("isFriendsRenamedToConnections")];
								case 4:
									return [2]
							}
						})
					})
				},
				zi = function(e, a, l, u) {
					return new(l = l || Promise)(function(n, t) {
						function r(e) {
							try {
								i(u.next(e))
							} catch (e) {
								t(e)
							}
						}

						function o(e) {
							try {
								i(u.throw(e))
							} catch (e) {
								t(e)
							}
						}

						function i(e) {
							var t;
							e.done ? n(e.value) : ((t = e.value) instanceof l ? t : new l(function(e) {
								e(t)
							})).then(r, o)
						}
						i((u = u.apply(e, a || [])).next())
					})
				},
				Vi = function(n, r) {
					var o, i, a, l = {
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
								if (o) throw new TypeError("Generator is already executing.");
								for (; l;) try {
									if (o = 1, i && (a = 2 & t[0] ? i.return : t[0] ? i.throw || ((a = i.return) && a.call(i), 0) : i.next) && !(a = a.call(i, t[1])).done) return a;
									switch (i = 0, a && (t = [2 & t[0], a.value]), t[0]) {
										case 0:
										case 1:
											a = t;
											break;
										case 4:
											return l.label++, {
												value: t[1],
												done: !1
											};
										case 5:
											l.label++, i = t[1], t = [0];
											continue;
										case 7:
											t = l.ops.pop(), l.trys.pop();
											continue;
										default:
											if (!(a = 0 < (a = l.trys).length && a[a.length - 1]) && (6 === t[0] || 2 === t[0])) {
												l = 0;
												continue
											}
											if (3 === t[0] && (!a || t[1] > a[0] && t[1] < a[3])) {
												l.label = t[1];
												break
											}
											if (6 === t[0] && l.label < a[1]) {
												l.label = a[1], a = t;
												break
											}
											if (a && l.label < a[2]) {
												l.label = a[2], l.ops.push(t);
												break
											}
											a[2] && l.ops.pop(), l.trys.pop();
											continue
									}
									t = r.call(n, l)
								} catch (e) {
									t = [6, e], i = 0
								} finally {
									o = a = 0
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
				qi = T.EnvironmentUrls.chatApi,
				Ji = function() {
					return zi(void 0, void 0, Promise, function() {
						var t;
						return Vi(this, function(e) {
							switch (e.label) {
								case 0:
									return [4, N.httpService.get({
										url: qi + "/v1/metadata",
										withCredentials: !0
									})];
								case 1:
									return [2, {
										chatEnabled: null == (t = e.sent().data) ? void 0 : t.isChatUserMessagesEnabled
									}]
							}
						})
					})
				},
				Ki = {
					common: ["CommonUI.Features"],
					feature: "Feature.PeopleList"
				},
				Xi = "isFriendsRenamedToConnections",
				$i = RobloxPresence,
				Yi = $g.n($i);

			function Zi(e) {
				var t = e.id,
					n = e.displayName,
					r = e.userProfileUrl,
					o = e.userPresence,
					i = e.hasVerifiedBadge,
					a = e.sendClickEvent,
					e = e.translate;
				return $().createElement("div", {
					className: "friend-tile-content"
				}, $().createElement(ta, {
					id: t,
					translate: e,
					userProfileUrl: r,
					handleImageClick: a
				}), $().createElement("a", {
					href: r,
					onClick: a,
					className: "friends-carousel-tile-labels",
					"data-testid": "friends-carousel-tile-labels"
				}, $().createElement("div", {
					className: "friends-carousel-tile-label"
				}, $().createElement("div", {
					className: "friends-carousel-tile-name"
				}, $().createElement("span", {
					className: "friends-carousel-display-name"
				}, n), i && $().createElement("div", {
					className: "friend-tile-verified-badge"
				}, $().createElement("div", {
					className: "friend-tile-spacer"
				}), $().createElement(ui.VerifiedBadgeIconContainer, {
					size: ui.BadgeSizes.SUBHEADER,
					additionalContainerClass: "verified-badge"
				})))), $().createElement("div", {
					className: "friends-carousel-tile-sublabel"
				}, null != o && $().createElement("div", {
					className: "friends-carousel-tile-experience"
				}, o))))
			}

			function Qi(e) {
				var n = e.friend,
					t = e.displayName,
					r = e.userProfileUrl,
					o = e.userPresence,
					i = e.isInGame,
					a = e.gameUrl,
					l = e.universeId,
					u = e.canChat,
					e = e.translate;
				return $().createElement("div", {
					className: "friend-tile-dropdown"
				}, i && null != o && $().createElement("div", {
					className: "in-game-friend-card"
				}, $().createElement("button", {
					type: "button",
					className: "friend-tile-non-styled-button",
					onClick: function() {
						window.open(a)
					}
				}, $().createElement(qe.Thumbnail2d, {
					type: qe.ThumbnailTypes.gameIcon,
					size: qe.ThumbnailGameIconSize.size150,
					targetId: l,
					imgClassName: "game-card-thumb",
					containerClass: "friend-tile-game-card"
				})), $().createElement("div", {
					className: "friend-presence-info"
				}, $().createElement("button", {
					type: "button",
					className: "friend-tile-non-styled-button",
					onClick: function() {
						window.open(a)
					}
				}, o), $().createElement(ye.Button, {
					variant: ye.Button.variants.growth,
					size: ye.Button.sizes.small,
					width: ye.Button.widths.full,
					onClick: function() {
						return na(void 0, void 0, void 0, function() {
							var t;
							return ra(this, function(e) {
								switch (e.label) {
									case 0:
										return (t = n.presence.gameId || "", (0, T.DeviceMeta)().isInApp) ? ((0, T.DeviceMeta)().isDesktop ? T.GameLauncher.followPlayerIntoGame(n.id, t, "JoinUser") : window.location.href = "/games/start?userID=" + n.id + "&joinAttemptId=" + t + "&joinAttemptOrigin=JoinUser", [3, 5]) : [3, 1];
									case 1:
										return (0, T.DeviceMeta)().isAndroidDevice || (0, T.DeviceMeta)().isChromeOs ? (window.location.href = "intent://userId=" + n.id + "&joinAttemptId=" + t + "&joinAttemptOrigin=JoinUser#Intent;scheme=robloxmobile;package=com.roblox.client;S.browser_fallback_url=https%3A%2F%2Fplay.google.com%2Fstore%2Fapps%2Fdetails%3Fid%3Dcom.roblox.client;end", [3, 5]) : [3, 2];
									case 2:
										return (0, T.DeviceMeta)().isIosDevice ? (window.location.href = "robloxmobile://userId=" + n.id + "&joinAttemptId=" + t + "&joinAttemptOrigin=JoinUser", [3, 5]) : [3, 3];
									case 3:
										return [4, T.ProtocolHandlerClientInterface.followPlayerIntoGame({
											userId: n.id,
											joinAttemptId: t,
											joinAttemptOrigin: "JoinUser"
										})];
									case 4:
										e.sent(), e.label = 5;
									case 5:
										return [2]
								}
							})
						})
					}
				}, e("Action.Join")))), $().createElement("ul", null, u && $().createElement("li", null, $().createElement("button", {
					type: "button",
					className: "friend-tile-dropdown-button",
					onClick: function() {
						P.chatService.startDesktopAndMobileWebChat({
							userId: n.id
						})
					}
				}, $().createElement("span", {
					className: "icon icon-chat-gray"
				}), " ", e("Label.Chat", {
					username: t
				}))), $().createElement("li", null, $().createElement("button", {
					type: "button",
					className: "friend-tile-dropdown-button",
					onClick: function() {
						window.open(r)
					}
				}, $().createElement("span", {
					className: "icon icon-viewdetails"
				}), " ", e("Label.ViewProfile")))))
			}

			function ea(e) {
				function t() {
					l(!0)
				}

				function n(e) {
					var t;
					null == e || null !== (t = u.current) && void 0 !== t && t.contains(e.relatedTarget) || null !== (t = c.current) && void 0 !== t && t.contains(e.relatedTarget) || l(!1)
				}
				var r = e.trigger,
					o = e.content,
					i = e.dropdownWidth,
					a = (0, X.useState)(!1),
					e = a[0],
					l = a[1],
					u = (0, X.useRef)(null),
					c = (0, X.useRef)(null);
				return (0, X.useEffect)(function() {
					return u.current ? (u.current.addEventListener("mouseover", t), u.current.addEventListener("mouseout", n), function() {
						var e;
						null !== (e = u.current) && void 0 !== e && e.removeEventListener("mouseover", t), null !== (e = u.current) && void 0 !== e && e.removeEventListener("mouseout", n)
					}) : function() {}
				}, []), $().createElement("div", null, $().createElement("div", {
					ref: u
				}, r), e && $().createElement("div", {
					ref: c,
					style: {
						position: "absolute",
						top: ((null === (e = u.current) || void 0 === e ? void 0 : e.offsetHeight) || 0) + ((null === (e = u.current) || void 0 === e ? void 0 : e.offsetTop) || 0),
						left: (e = ((null === (e = u.current) || void 0 === e ? void 0 : e.offsetLeft) || 0) + ((null === (e = u.current) || void 0 === e ? void 0 : e.offsetWidth) || 0) / 2 - i / 2) < 0 ? 24 : e + i > window.innerWidth ? window.innerWidth - (i + 24) : e,
						zIndex: 1002,
						width: i
					},
					onMouseOver: t,
					onMouseOut: n,
					onFocus: t,
					onBlur: n
				}, o))
			}(Kl = function(e) {
				var t = e.id,
					n = e.userProfileUrl,
					r = e.handleImageClick,
					o = e.translate,
					e = $().createElement(qe.Thumbnail2d, {
						type: qe.ThumbnailTypes.avatarHeadshot,
						size: qe.DefaultThumbnailSize,
						targetId: t,
						containerClass: "avatar-card-image"
					});
				return $().createElement(ye.AvatarCardItem.Headshot, {
					statusIcon: $().createElement(Yi().PresenceStatusIcon, {
						translate: o,
						userId: t
					}),
					thumbnail: e,
					imageLink: n,
					handleImageClick: r
				})
			}).defaultProps = {
				handleImageClick: void 0
			};
			var ta = Kl,
				na = function(e, a, l, u) {
					return new(l = l || Promise)(function(n, t) {
						function r(e) {
							try {
								i(u.next(e))
							} catch (e) {
								t(e)
							}
						}

						function o(e) {
							try {
								i(u.throw(e))
							} catch (e) {
								t(e)
							}
						}

						function i(e) {
							var t;
							e.done ? n(e.value) : ((t = e.value) instanceof l ? t : new l(function(e) {
								e(t)
							})).then(r, o)
						}
						i((u = u.apply(e, a || [])).next())
					})
				},
				ra = function(n, r) {
					var o, i, a, l = {
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
								if (o) throw new TypeError("Generator is already executing.");
								for (; l;) try {
									if (o = 1, i && (a = 2 & t[0] ? i.return : t[0] ? i.throw || ((a = i.return) && a.call(i), 0) : i.next) && !(a = a.call(i, t[1])).done) return a;
									switch (i = 0, a && (t = [2 & t[0], a.value]), t[0]) {
										case 0:
										case 1:
											a = t;
											break;
										case 4:
											return l.label++, {
												value: t[1],
												done: !1
											};
										case 5:
											l.label++, i = t[1], t = [0];
											continue;
										case 7:
											t = l.ops.pop(), l.trys.pop();
											continue;
										default:
											if (!(a = 0 < (a = l.trys).length && a[a.length - 1]) && (6 === t[0] || 2 === t[0])) {
												l = 0;
												continue
											}
											if (3 === t[0] && (!a || t[1] > a[0] && t[1] < a[3])) {
												l.label = t[1];
												break
											}
											if (6 === t[0] && l.label < a[1]) {
												l.label = a[1], a = t;
												break
											}
											if (a && l.label < a[2]) {
												l.label = a[2], l.ops.push(t);
												break
											}
											a[2] && l.ops.pop(), l.trys.pop();
											continue
									}
									t = r.call(n, l)
								} catch (e) {
									t = [6, e], i = 0
								} finally {
									o = a = 0
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

			function oa(e) {
				return (oa = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
					return typeof e
				} : function(e) {
					return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
				})(e)
			}

			function ia(e, t) {
				var n = e.elements,
					r = e.threshold;
				try {
					var o = new window.IntersectionObserver(t, {
						threshold: r
					});
					return n.forEach(function(e) {
							o.observe(e)
						}),
						function() {
							return o.disconnect()
						}
				} catch (e) {}
				return function() {}
			}

			function aa(t, e, n) {
				var r = (0, X.useRef)(new Set),
					a = (0, X.useRef)(new Set),
					o = (0, X.useRef)(null),
					i = (0, X.useCallback)(function() {
						(function(e, t) {
							if (0 === e.length || 0 === t) return [e];
							for (var n = [], r = 0; r < e.length; r += t) n.push(e.slice(r, r + t));
							return n
						})(Array.from(a.current).filter(function(e) {
							return !r.current.has(e)
						}), ga).filter(function(e) {
							return 0 < e.length
						}).forEach(function(e) {
							n(e), e.forEach(function(e) {
								return r.current.add(e)
							})
						}), a.current.clear()
					}, [n]),
					l = (0, X.useMemo)(function() {
						return (0, Ci.debounce)(function() {
							return i()
						}, 200)
					}, [i]);
				(0, X.useEffect)(function() {
					var e, i = Array.from(null !== (e = null == t || null === (e = t.current) || void 0 === e ? void 0 : e.children) && void 0 !== e ? e : []).filter(function(e) {
						return e instanceof HTMLElement
					});
					return o.current && (o.current(), o.current = null), o.current = ia({
							elements: i,
							threshold: ya
						}, function(e, t) {
							var n, r, o;
							l.cancel(), (n = i, r = t, o = [], e.forEach(function(t) {
								var e;
								null == t || !t.isIntersecting || 0 <= (e = n.findIndex(function(e) {
									return e === t.target
								})) && (o.push(e), r.unobserve(t.target))
							}), o.sort(function(e, t) {
								return e - t
							})).forEach(function(e) {
								return a.current.add(e)
							}), l()
						}),
						function() {
							l.cancel(), o.current && (o.current(), o.current = null)
						}
				}, [t, e, l, a])
			}
			$g(6870);
			var la, ua, ca, sa, da, fa, pa, ma, va, ha, ga = 25,
				ya = .5;

			function ba(o) {
				return Object.keys(o).reduce(function(e, t) {
					var n, r, n = (n = o[t], r = !1, Array.isArray(n) && !r ? n.join(",") : "object" === oa(n) && n ? JSON.stringify(n) : "number" == typeof n || "string" == typeof n ? n : "boolean" == typeof n ? n ? 1 : 0 : void 0);
					return void 0 !== n && (e[t] = n), e
				}, {})
			}

			function wa(e, t, n) {
				return t ? da.InGame : e && "Studio" === n ? da.InStudio : e ? da.Online : da.Offline
			}

			function Sa(e) {
				var t = e.friend,
					n = e.friendIndex,
					r = e.isOwnUser,
					o = e.translate,
					i = e.canChat,
					a = e.carouselName,
					l = e.eventContext,
					u = e.homePageSessionInfo,
					c = e.sortId,
					s = e.sortPosition,
					d = e.totalNumberOfFriends,
					f = T.EnvironmentUrls.websiteUrl + "/users/" + t.id + "/profile",
					p = t.combinedName,
					m = Yi().usePresence(t.id, void 0),
					v = null != m && null != m.gameId,
					h = v ? m.lastLocation : null,
					e = null != h && 15 < h.length ? h.slice(0, 15) + "..." : h,
					g = v ? T.EnvironmentUrls.websiteUrl + "/games/" + (null !== (g = m.placeId) && void 0 !== g ? g : "") : "",
					d = Ia(t, n, a, l, u, c, s, d);
				return $().createElement("div", {
					className: "friends-carousel-tile"
				}, $().createElement(ea, {
					trigger: $().createElement("button", {
						type: "button",
						className: "options-dropdown",
						id: "friend-tile-button",
						onClick: function() {}
					}, $().createElement(Zi, {
						id: t.id,
						displayName: p,
						userProfileUrl: f,
						userPresence: e,
						translate: o,
						hasVerifiedBadge: t.hasVerifiedBadge,
						sendClickEvent: d
					})),
					content: r ? $().createElement(Qi, {
						friend: t,
						isInGame: v,
						universeId: null !== (m = m.universeId) && void 0 !== m ? m : 0,
						displayName: p,
						userProfileUrl: f,
						userPresence: h,
						translate: o,
						gameUrl: g,
						canChat: i
					}) : $().createElement("div", null),
					dropdownWidth: null == e ? 240 : 315
				}))
			}(lt = la = la || {}).ItemImpressions = "itemImpressions", lt.ItemAction = "itemAction", (et = {}).Games = "games", et.Home = "home", et.SearchLanding = "searchLanding", et.Spotlight = "spotlight", et.UserProfile = "userProfile", (Lu = ua = ua || {}).HomePageSessionInfo = "homePageSessionInfo", Lu.DiscoverPageSessionInfo = "discoverPageSessionInfo", Lu.GameSearchSessionInfo = "gameSearchSessionInfo", Lu.SpotlightPageSessionInfo = "spotlightPageSessionInfo", (Sl = ca = ca || {}).ContentType = "contentType", Sl.Context = "context", Sl.CollectionId = "collectionId", Sl.CollectionPosition = "collectionPosition", (sa = sa || {}).User = "User", (te = da = da || {}).Online = "online", te.InGame = "inGame", te.InStudio = "inStudio", te.Offline = "offline", (fr = fa = fa || {}).Friend = "friend", fr.NotFriend = "notFriend", (oe = pa = pa || {}).ItemIds = "itemIds", oe.ItemPositions = "itemPositions", oe.RowNumbers = "rowNumbers", oe.FeedRowNumbers = "feedRowNumbers", oe.PositionsInRow = "positionsInRow", oe.PositionsInTopic = "positionsInTopic", oe.TotalNumberOfItems = "totalNumberOfItems", (Tm = ma = ma || {}).Presences = "presences", Tm.PresenceUniverseIds = "presenceUniverseIds", Tm.FriendStatuses = "friendStatuses", Tm.SourceCarousel = "sourceCarousel", (ql = va = va || {}).ItemId = "itemId", ql.ItemPosition = "itemPosition", ql.RowNumber = "rowNumber", ql.FeedRowNumber = "feedRowNumber", ql.PositionInRow = "positionInRow", ql.PositionInTopic = "positionInTopic", ql.TotalNumberOfItems = "totalNumberOfItems", ql.ActionType = "actionType", ($i = ha = ha || {}).Presence = "presence", $i.PresenceUniverseId = "presenceUniverseId", $i.FriendStatus = "friendStatus", $i.SourceCarousel = "sourceCarousel";
			var Ca = function() {
					return (Ca = Object.assign || function(e) {
						for (var t, n = 1, r = arguments.length; n < r; n++)
							for (var o in t = arguments[n]) Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
						return e
					}).apply(this, arguments)
				},
				Ia = function(n, r, o, i, a, l, u, c) {
					var t = (0, X.useCallback)(function() {
						var e, t = {};
						return t[ca.Context] = i, t[ca.ContentType] = sa.User, t[ca.CollectionId] = l, t[ca.CollectionPosition] = void 0 !== u ? u + 1 : -1, t[va.TotalNumberOfItems] = c, t[va.ActionType] = "OpenProfile", t[va.ItemId] = n.id.toString(), t[va.ItemPosition] = r + 1, t[va.PositionInTopic] = r + 1, t[va.RowNumber] = 1, t[ha.Presence] = wa(null === (e = n.presence) || void 0 === e ? void 0 : e.isOnline, null === (e = n.presence) || void 0 === e ? void 0 : e.isInGame, null === (e = n.presence) || void 0 === e ? void 0 : e.lastLocation), t[ha.PresenceUniverseId] = null !== (e = null === (e = n.presence) || void 0 === e ? void 0 : e.universeId) && void 0 !== e ? e : -1, t[ha.FriendStatus] = "friend", t[ha.SourceCarousel] = o, t[ua.HomePageSessionInfo] = a, t
					}, [n, r, a, l, u, o, i, c]);
					return (0, X.useCallback)(function() {
						var e = t();
						P.eventStreamService.sendEvent({
							name: la.ItemAction,
							type: la.ItemAction,
							context: i
						}, ba(Ca({}, e)))
					}, [t, i])
				},
				xa = function() {
					return (xa = Object.assign || function(e) {
						for (var t, n = 1, r = arguments.length; n < r; n++)
							for (var o in t = arguments[n]) Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
						return e
					}).apply(this, arguments)
				},
				Ea = function(e, n, r, o, i, a, l) {
					var t = (0, X.useCallback)(function(e) {
							if (n) {
								var t = e.filter(function(e) {
									return e < n.length
								});
								return (e = {})[ca.Context] = o, e[ca.ContentType] = sa.User, e[ca.CollectionId] = a, e[ca.CollectionPosition] = void 0 !== l ? l + 1 : -1, e[pa.TotalNumberOfItems] = n.length, e[pa.ItemIds] = t.map(function(e) {
									return null !== (e = null === (e = null === (e = n[e]) || void 0 === e ? void 0 : e.id) || void 0 === e ? void 0 : e.toString()) && void 0 !== e ? e : "-1"
								}), e[pa.ItemPositions] = t.map(function(e) {
									return e + 1
								}), e[pa.PositionsInTopic] = t.map(function(e) {
									return e + 1
								}), e[pa.RowNumbers] = t.map(function() {
									return 1
								}), e[ma.Presences] = t.map(function(e) {
									var t;
									return wa(null === (t = null === (t = n[e]) || void 0 === t ? void 0 : t.presence) || void 0 === t ? void 0 : t.isOnline, null === (t = null === (t = n[e]) || void 0 === t ? void 0 : t.presence) || void 0 === t ? void 0 : t.isInGame, null === (e = null === (e = n[e]) || void 0 === e ? void 0 : e.presence) || void 0 === e ? void 0 : e.lastLocation)
								}), e[ma.PresenceUniverseIds] = t.map(function(e) {
									return null !== (e = null === (e = null === (e = n[e]) || void 0 === e ? void 0 : e.presence) || void 0 === e ? void 0 : e.universeId) && void 0 !== e ? e : -1
								}), e[ma.FriendStatuses] = t.map(function() {
									return fa.Friend
								}), e[ma.SourceCarousel] = r, e[ua.HomePageSessionInfo] = i, e
							}
						}, [n, i, a, l, r, o]),
						u = (0, X.useCallback)(function(e) {
							e = t(e);
							void 0 !== e ? P.eventStreamService.sendEvent({
								name: la.ItemImpressions,
								type: la.ItemImpressions,
								context: o
							}, ba(xa({}, e))) : (0, E.fireEvent)("WebHomePageFriendsCarouselItemImpressionsUndefinedError")
						}, [t, o]);
					aa(e, null !== (e = null == n ? void 0 : n.length) && void 0 !== e ? e : 0, u)
				};

			function Pa(e) {
				var t = e.translate,
					n = e.badgeCount,
					r = (0, X.useState)(!1),
					e = r[0],
					o = r[1];
				return (0, X.useEffect)(function() {
					Wi().then(function(e) {
						o(e)
					}).catch(function(e) {
						console.error("Error fetching friends rename status:", e)
					})
				}, []), $().createElement("div", {
					className: "friends-carousel-tile"
				}, $().createElement("button", {
					type: "button",
					id: "friend-tile-button"
				}, $().createElement("a", {
					href: "/users/friends#!/friend-requests"
				}, $().createElement("div", {
					className: "add-friends-icon-container"
				}, 0 < n && $().createElement(Sn.Badge, {
					className: "friend-request-badge",
					overlap: "rectangular",
					variant: "standard",
					max: 99,
					color: "error",
					badgeContent: n.toString()
				}), $().createElement(Sn.PlusHeavyIcon, {
					className: "add-friends-icon",
					color: "secondary"
				})), $().createElement("div", {
					className: "friends-carousel-tile-labels",
					"data-testid": "friends-carousel-tile-labels"
				}, $().createElement("div", {
					className: "friends-carousel-tile-label"
				}, $().createElement("div", {
					className: "friends-carousel-tile-name"
				}, $().createElement("span", {
					className: "friends-carousel-display-name"
				}, e || "true" === localStorage.getItem(Xi) ? t("Label.Connect") : t("Heading.AddFriends"))))))))
			}

			function Ta(e) {
				var r = e.friendsList,
					n = e.isOwnUser,
					o = e.translate,
					i = e.canChat,
					a = e.carouselName,
					l = e.eventContext,
					u = e.homePageSessionInfo,
					c = e.sortId,
					s = e.sortPosition,
					t = e.badgeCount,
					d = e.isAddFriendsTileEnabled,
					f = (0, X.useRef)(null),
					p = (g = (0, X.useState)(r))[0],
					m = g[1],
					v = (0, X.useState)(!1),
					e = v[0],
					h = v[1],
					g = (0, X.useRef)(null);
				return (0, X.useEffect)(function() {
					var e, t = null === (n = f.current) || void 0 === n ? void 0 : n.offsetWidth,
						n = null !== (e = null == r ? void 0 : r.length) && void 0 !== e ? e : 0;
					null != t && null != r && (e = Math.floor(t / 110), h(t < 110 * (d ? n + 1 : n)), m(r.slice(0, e - (d ? 1 : 0))))
				}, [null === (v = f.current) || void 0 === v ? void 0 : v.offsetWidth, r, d]), Ea(g, r, a, l, u, c, s), $().createElement("div", null, $().createElement("div", {
					ref: function(e) {
						return f.current = e, f.current
					},
					className: "friends-carousel-container"
				}, null == p ? $().createElement("span", {
					className: "spinner spinner-default"
				}) : $().createElement("div", {
					ref: g,
					className: e ? "friends-carousel-list-container" : "friends-carousel-list-container-not-full"
				}, a === Oa.WebHomeFriendsCarousel && d ? $().createElement(Pa, {
					key: "add-friends-tile",
					translate: o,
					badgeCount: t,
					"data-testid": "add-friends-tile"
				}) : null, p.map(function(e, t) {
					return $().createElement("div", {
						key: e.id
					}, $().createElement(Sa, {
						friend: e,
						friendIndex: t,
						translate: o,
						isOwnUser: n,
						canChat: i,
						carouselName: a,
						eventContext: l,
						homePageSessionInfo: u,
						sortId: c,
						sortPosition: s,
						totalNumberOfFriends: null !== (t = null == r ? void 0 : r.length) && void 0 !== t ? t : 0
					}))
				}))))
			}(Kl = oh = oh || {}).WebHomeFriendsCarousel = "WebHomeFriendsCarousel", Kl.WebProfileFriendsCarousel = "WebProfileFriendsCarousel";
			var Oa = oh,
				ka = (T.EnvironmentUrls.friendsApi, T.EnvironmentUrls.premiumFeaturesApi, T.EnvironmentUrls.usersApi, T.EnvironmentUrls.gamesApi, T.EnvironmentUrls.contactsApi, T.EnvironmentUrls.accountSettingsApi, T.EnvironmentUrls.authApi, T.EnvironmentUrls.tradesApi, T.EnvironmentUrls.apiGatewayUrl),
				Aa = (T.EnvironmentUrls.chatApi, function() {
					return {
						url: "".concat(ka, "/user-blocking-api/v1/users/batch-check-reciprocal-block"),
						withCredentials: !0
					}
				}),
				Na = function(e, a, l, u) {
					return new(l = l || Promise)(function(n, t) {
						function r(e) {
							try {
								i(u.next(e))
							} catch (e) {
								t(e)
							}
						}

						function o(e) {
							try {
								i(u.throw(e))
							} catch (e) {
								t(e)
							}
						}

						function i(e) {
							var t;
							e.done ? n(e.value) : ((t = e.value) instanceof l ? t : new l(function(e) {
								e(t)
							})).then(r, o)
						}
						i((u = u.apply(e, a || [])).next())
					})
				},
				_a = function(n, r) {
					var o, i, a, l = {
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
								if (o) throw new TypeError("Generator is already executing.");
								for (; l;) try {
									if (o = 1, i && (a = 2 & t[0] ? i.return : t[0] ? i.throw || ((a = i.return) && a.call(i), 0) : i.next) && !(a = a.call(i, t[1])).done) return a;
									switch (i = 0, a && (t = [2 & t[0], a.value]), t[0]) {
										case 0:
										case 1:
											a = t;
											break;
										case 4:
											return l.label++, {
												value: t[1],
												done: !1
											};
										case 5:
											l.label++, i = t[1], t = [0];
											continue;
										case 7:
											t = l.ops.pop(), l.trys.pop();
											continue;
										default:
											if (!(a = 0 < (a = l.trys).length && a[a.length - 1]) && (6 === t[0] || 2 === t[0])) {
												l = 0;
												continue
											}
											if (3 === t[0] && (!a || t[1] > a[0] && t[1] < a[3])) {
												l.label = t[1];
												break
											}
											if (6 === t[0] && l.label < a[1]) {
												l.label = a[1], a = t;
												break
											}
											if (a && l.label < a[2]) {
												l.label = a[2], l.ops.push(t);
												break
											}
											a[2] && l.ops.pop(), l.trys.pop();
											continue
									}
									t = r.call(n, l)
								} catch (e) {
									t = [6, e], i = 0
								} finally {
									o = a = 0
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
				Ra = function(n) {
					return Na(void 0, void 0, Promise, function() {
						var t;
						return _a(this, function(e) {
							switch (e.label) {
								case 0:
									return t = parseInt(T.CurrentUser.userId, 10), Number.isNaN(t) || !t ? [2, {
										users: [{
											isBlocked: !1,
											isBlockingViewer: !1,
											userId: 0
										}]
									}] : [4, N.httpService.post(Aa(), {
										userIds: n,
										requesterUserId: t
									})];
								case 1:
									return [2, e.sent().data]
							}
						})
					})
				},
				La = T.EnvironmentUrls.apiGatewayUrl,
				Da = (T.EnvironmentUrls.friendsApi, T.EnvironmentUrls.thumbnailsApi, T.EnvironmentUrls.presenceApi, T.EnvironmentUrls.gamesApi, T.EnvironmentUrls.usersApi, function(e, t, n) {
					t = 1 < arguments.length && void 0 !== t ? t : null, n = 2 < arguments.length && void 0 !== n ? n : null;
					return {
						retryable: !0,
						withCredentials: !0,
						url: "".concat(La, "/access-management/v1/upsell-feature-access?featureName=").concat(e).concat(t ? "&extraParameters=".concat(t) : "").concat(n ? "&successfulActions=".concat(n) : "")
					}
				});

			function Ma(e, t, n, r, o, i, a) {
				try {
					var l = e[i](a),
						u = l.value
				} catch (e) {
					return void n(e)
				}
				l.done ? t(u) : Promise.resolve(u).then(r, o)
			}
			var Fa = function() {
				var l, e = (l = regeneratorRuntime.mark(function e(t, n, r) {
					var o;
					return regeneratorRuntime.wrap(function(e) {
						for (;;) switch (e.prev = e.next) {
							case 0:
								return o = n ? btoa(JSON.stringify(n)) : null, o = Da(t, o, r), e.next = 4, N.httpService.get(o);
							case 4:
								return o = e.sent, o = o.data, e.abrupt("return", o);
							case 7:
							case "end":
								return e.stop()
						}
					}, e)
				}), function() {
					var e = this,
						a = arguments;
					return new Promise(function(t, n) {
						var r = l.apply(e, a);

						function o(e) {
							Ma(r, t, n, o, i, "next", e)
						}

						function i(e) {
							Ma(r, t, n, o, i, "throw", e)
						}
						o(void 0)
					})
				});
				return function() {
					return e.apply(this, arguments)
				}
			}();

			function ja(e, t, n, r, o, i, a) {
				try {
					var l = e[i](a),
						u = l.value
				} catch (e) {
					return void n(e)
				}
				l.done ? t(u) : Promise.resolve(u).then(r, o)
			}

			function Ua(l) {
				return function() {
					var e = this,
						a = arguments;
					return new Promise(function(t, n) {
						var r = l.apply(e, a);

						function o(e) {
							ja(r, t, n, o, i, "next", e)
						}

						function i(e) {
							ja(r, t, n, o, i, "throw", e)
						}
						o(void 0)
					})
				}
			}
			var Ba = function() {
					var e = Ua(regeneratorRuntime.mark(function e(t) {
						var n;
						return regeneratorRuntime.wrap(function(e) {
							for (;;) switch (e.prev = e.next) {
								case 0:
									return e.prev = 0, e.next = 3, Fa("MustHideConnections", [{
										name: "vieweeUserId",
										type: "UserId",
										value: "".concat(t)
									}]);
								case 3:
									return n = e.sent, e.abrupt("return", "Granted" === (null == n ? void 0 : n.access));
								case 7:
									e.prev = 7, e.t0 = e.catch(0), console.debug(e.t0);
								case 10:
									return e.abrupt("return", !0);
								case 11:
								case "end":
									return e.stop()
							}
						}, e, null, [
							[0, 7]
						])
					}));
					return function() {
						return e.apply(this, arguments)
					}
				}(),
				Ga = function() {
					var e = Ua(regeneratorRuntime.mark(function e(t) {
						var n;
						return regeneratorRuntime.wrap(function(e) {
							for (;;) switch (e.prev = e.next) {
								case 0:
									return e.prev = 0, e.next = 3, Ra([parseInt(t, 10)]);
								case 3:
									if (null != (n = e.sent) && n.users && 0 < n.users.length) return e.abrupt("return", n.users[0].isBlockingViewer);
									e.next = 6;
									break;
								case 6:
									e.next = 11;
									break;
								case 8:
									e.prev = 8, e.t0 = e.catch(0), console.debug(e.t0);
								case 11:
									return e.abrupt("return", !0);
								case 12:
								case "end":
									return e.stop()
							}
						}, e, null, [
							[0, 8]
						])
					}));
					return function() {
						return e.apply(this, arguments)
					}
				}(),
				Ha = function(e, a, l, u) {
					return new(l = l || Promise)(function(n, t) {
						function r(e) {
							try {
								i(u.next(e))
							} catch (e) {
								t(e)
							}
						}

						function o(e) {
							try {
								i(u.throw(e))
							} catch (e) {
								t(e)
							}
						}

						function i(e) {
							var t;
							e.done ? n(e.value) : ((t = e.value) instanceof l ? t : new l(function(e) {
								e(t)
							})).then(r, o)
						}
						i((u = u.apply(e, a || [])).next())
					})
				},
				Wa = function(n, r) {
					var o, i, a, l = {
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
								if (o) throw new TypeError("Generator is already executing.");
								for (; l;) try {
									if (o = 1, i && (a = 2 & t[0] ? i.return : t[0] ? i.throw || ((a = i.return) && a.call(i), 0) : i.next) && !(a = a.call(i, t[1])).done) return a;
									switch (i = 0, a && (t = [2 & t[0], a.value]), t[0]) {
										case 0:
										case 1:
											a = t;
											break;
										case 4:
											return l.label++, {
												value: t[1],
												done: !1
											};
										case 5:
											l.label++, i = t[1], t = [0];
											continue;
										case 7:
											t = l.ops.pop(), l.trys.pop();
											continue;
										default:
											if (!(a = 0 < (a = l.trys).length && a[a.length - 1]) && (6 === t[0] || 2 === t[0])) {
												l = 0;
												continue
											}
											if (3 === t[0] && (!a || t[1] > a[0] && t[1] < a[3])) {
												l.label = t[1];
												break
											}
											if (6 === t[0] && l.label < a[1]) {
												l.label = a[1], a = t;
												break
											}
											if (a && l.label < a[2]) {
												l.label = a[2], l.ops.push(t);
												break
											}
											a[2] && l.ops.pop(), l.trys.pop();
											continue
									}
									t = r.call(n, l)
								} catch (e) {
									t = [6, e], i = 0
								} finally {
									o = a = 0
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
				za = "FriendshipNotifications",
				Va = "fulfilled";

			function qa(e) {
				var t = e.homePageSessionInfo,
					n = e.sortId,
					r = e.sortPosition,
					o = (e = document.querySelector('meta[name="user-data"]')) ? e.getAttribute("data-userid") : Number(null !== (o = T.CurrentUser.userId) && void 0 !== o ? o : "0");
				return $().createElement("div", {
					className: "friend-carousel-container"
				}, $().createElement(Ya, {
					profileUserId: o,
					isOwnUser: !0,
					carouselName: Oa.WebHomeFriendsCarousel,
					eventContext: Ti.Home,
					homePageSessionInfo: t,
					sortId: n,
					sortPosition: r
				}))
			}

			function Ja(e) {
				var t = e.sortId,
					n = e.sortPosition,
					e = mn();
				return $().createElement(qa, {
					homePageSessionInfo: e,
					sortId: t,
					sortPosition: n
				})
			}

			function Ka(e) {
				var t = e.option,
					n = e.isSelected,
					r = e.setSelectedOptionId,
					e = e.translate;
				return $().createElement("button", {
					type: "button",
					onClick: function() {
						return r(t.optionId)
					},
					className: ge()("filter-option", {
						"selected-option": n
					}),
					"aria-label": e(n ? ot.ActionDropdownSelected : ot.ActionDropdownNotSelected, {
						optionName: t.optionDisplayName
					})
				}, $().createElement("span", {
					className: "filter-option-name"
				}, t.optionDisplayName), n ? $().createElement("span", {
					className: "icon-radio-check-circle-filled"
				}) : $().createElement("span", {
					className: "icon-radio-check-circle"
				}))
			}

			function Xa(e) {
				var t = e.filter,
					n = e.dropdownContainerRef,
					r = e.selectedOptionId,
					o = e.setSelectedOptionId,
					i = e.setIsDropdownOpen,
					a = e.updateFilterValue,
					l = e.sendFilterClickEvent,
					u = e.translate,
					e = (0, X.useCallback)(function() {
						a(r), i(!1), l(t.filterId, b.Apply, r, t.selectedOptionId)
					}, [r, a, i, t.filterId, t.selectedOptionId, l]),
					c = (0, X.useCallback)(function() {
						var e = r;
						i(!1), o(t.selectedOptionId), l(t.filterId, b.CloseDropdown, t.selectedOptionId, e)
					}, [t.selectedOptionId, i, l, t.filterId, o, r]),
					s = (0, X.useCallback)(function(e) {
						n.current && e.target instanceof Node && !n.current.contains(e.target) && c()
					}, [c, n]),
					d = (0, X.useCallback)(function(e) {
						e.key === Za.keyBoardEventCode.escape && c()
					}, [c]);
				return (0, X.useEffect)(function() {
					return document.addEventListener("mousedown", s), document.addEventListener("keydown", d),
						function() {
							document.removeEventListener("mousedown", s), document.removeEventListener("keydown", d)
						}
				}, [s, d]), $().createElement("div", {
					className: "filters-modal-container"
				}, $().createElement("div", {
					className: "header-container"
				}, $().createElement("h3", null, t.filterDisplayName), $().createElement("div", null, $().createElement("button", {
					type: "button",
					className: "header-close-button",
					onClick: function() {
						return c()
					},
					"aria-label": u(ot.ActionClose)
				}, $().createElement("span", {
					className: "icon-close"
				})))), $().createElement("div", {
					className: "filter-options-container"
				}, t.filterOptions.map(function(e, t) {
					return $().createElement($().Fragment, {
						key: e.optionId
					}, $().createElement(Ka, {
						option: e,
						isSelected: r === e.optionId,
						setSelectedOptionId: o,
						translate: u
					}), 0 === t && $().createElement("div", {
						className: "filter-option-divider"
					}))
				})), $().createElement("div", {
					className: "action-buttons-container"
				}, $().createElement(ye.Button, {
					onClick: e,
					variant: ye.Button.variants.primary,
					size: ye.Button.sizes.medium,
					width: ye.Button.widths.full,
					className: "apply-button",
					isDisabled: r === t.selectedOptionId
				}, u(nt.ActionApply) || "Apply")))
			}

			function $a(e) {
				var r = e.filter,
					t = e.updateFilterValue,
					o = e.sendFilterClickEvent,
					n = e.translate,
					i = $().useRef(null),
					a = (c = (0, X.useState)(!1))[0],
					l = c[1],
					u = (e = (0, X.useState)(r.selectedOptionId))[0],
					c = e[1],
					e = (0, X.useMemo)(function() {
						var e = r.filterOptions.find(function(e) {
							return e.optionId === r.selectedOptionId
						});
						return null == e ? void 0 : e.optionDisplayName
					}, [r.selectedOptionId, r.filterOptions]);
				return $().createElement("div", {
					ref: i
				}, $().createElement(ye.Button, {
					onClick: function() {
						l(function(e) {
							var t = e ? b.CloseDropdown : b.OpenDropdown,
								n = e ? u : void 0;
							return o(r.filterId, t, r.selectedOptionId, n), !e
						})
					},
					variant: a ? ye.Button.variants.primary : ye.Button.variants.secondary,
					size: ye.Button.sizes.medium,
					className: "filter-select"
				}, $().createElement("span", {
					className: "filter-display-text"
				}, e), $().createElement("span", {
					className: a ? "icon-expand-arrow-selected" : "icon-expand-arrow"
				})), a && $().createElement(Xa, {
					filter: r,
					dropdownContainerRef: i,
					selectedOptionId: u,
					setSelectedOptionId: c,
					setIsDropdownOpen: l,
					updateFilterValue: t,
					sendFilterClickEvent: o,
					translate: n
				}))
			}(lt = function(e) {
				var t = e.translate,
					m = e.profileUserId,
					v = e.isOwnUser,
					h = e.carouselName,
					n = e.eventContext,
					r = e.homePageSessionInfo,
					o = e.sortId,
					i = e.sortPosition,
					a = (0, X.useState)(null),
					l = a[0],
					g = a[1],
					u = (0, X.useState)(null),
					c = u[0],
					y = u[1],
					s = (0, X.useState)(!1),
					d = s[0],
					b = s[1],
					e = (0, X.useState)(null),
					a = e[0],
					w = e[1],
					u = (0, X.useState)(!1),
					f = u[0],
					S = u[1],
					s = (0, X.useState)({
						isBadgeEnabled: !1,
						isAddFriendsTileEnabledWeb: !1
					}),
					e = s[0],
					C = s[1],
					u = (0, Sn.createCache)(),
					s = (0, p.useTheme)();
				return (0, X.useEffect)(function() {
					if (f) {
						var e = function() {
								return Ha(void 0, void 0, void 0, function() {
									var t;
									return Wa(this, function(e) {
										switch (e.label) {
											case 0:
												return e.trys.push([0, 2, , 3]), [4, Hi()];
											case 1:
												return t = e.sent(), w(t), [3, 3];
											case 2:
												return t = e.sent(), console.error("Error fetching friend request count:", t), [3, 3];
											case 3:
												return [2]
										}
									})
								})
							},
							t = Mi();
						return t.Subscribe(za, e),
							function() {
								t.Unsubscribe(za, e)
							}
					}
				}, [f]), (0, X.useEffect)(function() {
					Ha(void 0, void 0, void 0, function() {
						var u, c, s, d, f, p;
						return Wa(this, function(e) {
							switch (e.label) {
								case 0:
									return p = [Bi(m), Gi(m, v), Ji(), Hi(), (a = m, l = v, Ha(void 0, void 0, void 0, function() {
										return Wa(this, function(e) {
											switch (e.label) {
												case 0:
													return l ? [2, !1] : [4, Ga(a)];
												case 1:
													return e.sent() ? [2, !0] : [4, Ba(a)];
												case 2:
													return [2, e.sent()]
											}
										})
									})), Ha(void 0, void 0, Promise, function() {
										var t;
										return Wa(this, function(e) {
											switch (e.label) {
												case 0:
													if (null === T.ExperimentationService || void 0 === T.ExperimentationService || !T.ExperimentationService.getAllValuesForLayer) return [3, 4];
													e.label = 1;
												case 1:
													return e.trys.push([1, 3, , 4]), [4, T.ExperimentationService.getAllValuesForLayer("Social.Friends")];
												case 2:
													return [2, {
														isBadgeEnabled: !0 === (null == (t = e.sent()) ? void 0 : t.enableNewFriendRequestsBadge),
														isAddFriendsTileEnabledWeb: !0 === (null == t ? void 0 : t.enableAddFriendsTileOnWeb)
													}];
												case 3:
													return t = e.sent(), console.error("Error fetching experimentation config:", t), [2, {
														isBadgeEnabled: !1,
														isAddFriendsTileEnabledWeb: !1
													}];
												case 4:
													return [2, {
														isBadgeEnabled: !1,
														isAddFriendsTileEnabledWeb: !1
													}]
											}
										})
									})], [4, (i = p, Promise.all(i.map(function(e) {
										return e.then(function(e) {
											return {
												status: Va,
												value: e
											}
										})
									})))];
								case 1:
									return f = e.sent(), u = f[0], c = f[1], s = f[2], d = f[3], p = f[4], f = f[5], u = u.status === Va ? u.value.count : 0, c = c.status === Va ? c.value : [], s = s.status === Va && s.value.chatEnabled, d = d.status === Va ? d.value : 0, f = f.status === Va ? f.value : {
										isBadgeEnabled: !1,
										isAddFriendsTileEnabledWeb: !1
									}, p = p.status !== Va || p.value, g(u), y(c), b(s), w(d), C(f), S((t = p, n = h, r = u, o = d, i = f.isAddFriendsTileEnabledWeb, !t && (n !== Oa.WebHomeFriendsCarousel ? 0 !== r : 0 !== r || i && 0 !== o))), [2]
							}
							var t, n, r, o, i, a, l
						})
					}).catch(function(e) {
						throw e
					})
				}, [m, v]), $().createElement(Sn.CacheProvider, {
					cache: u
				}, $().createElement(Sn.UIThemeProvider, {
					theme: s,
					cssBaselineMode: "disabled"
				}, f ? $().createElement("div", {
					className: "react-friends-carousel-container"
				}, $().createElement(Di, {
					friendsCount: l,
					translate: t,
					profileUserId: m,
					isOwnUser: v
				}), $().createElement(Ta, {
					badgeCount: e.isBadgeEnabled && null != a ? a : 0,
					friendsList: c,
					translate: t,
					isOwnUser: v,
					canChat: d,
					carouselName: h,
					eventContext: n,
					homePageSessionInfo: r,
					sortId: o,
					sortPosition: i,
					isAddFriendsTileEnabled: e.isAddFriendsTileEnabledWeb
				})) : $().createElement("div", {
					className: "friends-carousel-0-friends"
				})))
			}).defaultProps = {
				translate: void 0
			};
			var Ya = (0, p.withTranslations)(lt, Ki),
				Za = tt,
				Qa = function() {
					return (Qa = Object.assign || function(e) {
						for (var t, n = 1, r = arguments.length; n < r; n++)
							for (var o in t = arguments[n]) Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
						return e
					}).apply(this, arguments)
				},
				el = function(i, a, e) {
					var l = mn(),
						t = (0, X.useRef)(null),
						n = (0, X.useCallback)(function() {
							var e = {};
							return e[F.AbsPositions] = i.filters.map(function(e, t) {
								return t
							}), e[F.FilterIds] = i.filters.map(function(e) {
								return e.filterId
							}), e[F.SelectedOptionIds] = i.filters.map(function(e) {
								return e.selectedOptionId
							}), e[F.GameSetTypeId] = i.topicId, e[F.GameSetTargetId] = i.gameSetTargetId, e[F.SortPos] = a, e[j.DiscoverPageSessionInfo] = l, e[F.Page] = Y.GamesPage, e
						}, [i.filters, i.topicId, i.gameSetTargetId, a, l]);
					(0, X.useEffect)(function() {
						return null != e && e.current && (t.current = P.elementVisibilityService.observeVisibility({
								element: e.current,
								threshold: Xe.filterImpressionsIntersectionThreshold
							}, function(e) {
								e && (e = n(), (e = ee.filterImpressions(e)) && P.eventStreamService.sendEvent.apply(P.eventStreamService, e), null != t && t.current && t.current())
							})),
							function() {
								null != t && t.current && t.current()
							}
					}, [n, e]);
					var o = (0, X.useCallback)(function(e, t, n, r) {
						var o;
						return Qa(((o = {})[F.ButtonName] = t, o[F.GameSetTypeId] = i.topicId, o[F.GameSetTargetId] = i.gameSetTargetId, o[F.SortPos] = a, o[j.DiscoverPageSessionInfo] = l, o[F.Page] = Y.GamesPage, o[F.FilterId] = e, o[F.SelectedOptionId] = n, o), r && ((o = {})[F.PreviousOptionId] = r, o))
					}, [i.topicId, i.gameSetTargetId, a, l]);
					return (0, X.useCallback)(function(e, t, n, r) {
						r = o(e, t, n, r), r = ee.gamesFilterClick(r);
						r && P.eventStreamService.sendEvent.apply(P.eventStreamService, r)
					}, [o])
				};

			function tl(e, t) {
				return void 0 === e || "number" != typeof e && "boolean" != typeof e ? void 0 !== e && "string" == typeof e ? e : t : e.toString()
			}

			function nl(e, t) {
				if ("number" == typeof e) return e;
				if ("string" == typeof e) {
					e = parseInt(e, 10);
					if (!Number.isNaN(e)) return e
				}
				return t
			}

			function rl(e, t, n) {
				if ("boolean" == typeof e) return e;
				if ("string" != typeof e) return "number" == typeof e ? 1 === e || 0 !== e && (bl(sl.ParseBooleanFieldInvalidNumber, "Invalid number value for boolean field: " + e, n), t) : (bl(sl.ParseBooleanFieldInvalidType, "Invalid type for boolean field: " + typeof e + ", input: " + (e ? JSON.stringify(e) : "undefined"), n), t);
				var r = e.toLowerCase();
				return "true" === r || "t" === r || "false" !== r && "f" !== r && (bl(sl.ParseBooleanFieldInvalidString, "Invalid string value for boolean field: " + e, n), t)
			}

			function ol(e) {
				return null != e && ("string" == typeof e || "number" == typeof e || "boolean" == typeof e)
			}

			function il(n, r) {
				var o = {};
				return Object.keys(n).forEach(function(e) {
					var t = n[e];
					ol(t) ? o[e] = t : bl(sl.AnalyticsParsingDiscardedInvalidParam, "Discarding invalid event parameter key: " + e + ", value: " + JSON.stringify(t) + ", type: " + typeof t, r)
				}), o
			}

			function al(e) {
				var t = e.pageName;
				switch (t) {
					case Y.HomePage:
						return Oi.HomePageSessionInfo;
					case Y.GamesPage:
						return Oi.DiscoverPageSessionInfo;
					case Y.SpotlightPage:
						return Oi.SpotlightPageSessionInfo;
					default:
						return bl(sl.SessionInfoKeyNotFound, "Session info key not found for page: " + (t ? JSON.stringify(t) : "undefined"), e), null
				}
			}

			function ll(e, t) {
				var n, r = t.pageContext.pageName,
					o = al(t.pageContext);
				return o ? ((n = {})[o] = e, n) : (bl(sl.InvalidPageForSessionAnalytics, "Invalid page context for session analytics: " + (r ? JSON.stringify(r) : "undefined") + " with session info: " + e, t.pageContext), {})
			}

			function ul(e) {
				var t = e.pageName,
					n = "webDiscoverySduiError";
				switch (t) {
					case Y.HomePage:
						return Ti.Home;
					case Y.GamesPage:
						return Ti.Games;
					case Y.SpotlightPage:
						return Ti.Spotlight;
					default:
						return P.eventStreamService.sendEvent({
							name: n,
							type: n,
							context: e.pageName
						}, Li({
							errorName: sl.InvalidEventContextForPage,
							errorMessage: "Page context does not have a valid event context: " + (t ? JSON.stringify(t) : "undefined")
						})), null
				}
			}

			function cl(e, t, n) {
				return t.analyticsData && void 0 !== t.analyticsData[e] && null !== t.analyticsData[e] ? t.analyticsData[e] : t.ancestorAnalyticsData && void 0 !== t.ancestorAnalyticsData[e] && null !== t.ancestorAnalyticsData[e] ? t.ancestorAnalyticsData[e] : n
			}(et = function(e) {
				var o = e.sort,
					t = e.positionId,
					n = e.translate,
					i = e.fetchGamesPageData,
					e = (0, X.useRef)(null),
					a = el(o, t, e);
				return $().createElement("div", {
					ref: e,
					className: "filters-container"
				}, $().createElement("div", {
					className: "filters-header-container"
				}, $().createElement("span", {
					className: "filters-header"
				}, o.topic)), $().createElement("div", {
					className: "filter-items-container"
				}, o.filters.map(function(r) {
					return $().createElement($a, {
						key: r.filterId,
						filter: r,
						updateFilterValue: function(e) {
							return t = r.filterType, n = e, e = _o([o]), void(i && e && (e.set(t, n), i(e)));
							var t, n
						},
						sendFilterClickEvent: a,
						translate: n
					})
				})))
			}).defaultProps = {
				fetchGamesPageData: void 0
			};
			var sl, dl = et,
				fl = "webDiscoverySduiError",
				pl = "DiscoverySdui_FeedStats";

			function ml(e, t, n) {
				(0, E.fireEvent)(e), t = {
					errorName: e,
					errorMessage: t
				}, P.eventStreamService.sendEvent({
					name: fl,
					type: fl,
					context: function(e) {
						if (e) {
							e = ul(e);
							if (e) return e
						}
						return "unknown"
					}(n)
				}, Li(t))
			}

			function vl(e, t) {
				try {
					var n = e.sorts,
						r = e.sdui,
						o = {},
						i = {};
					n.forEach(function(e) {
						var t;
						e.topicId && (e.treatmentType === I.Sdui ? (i[e.topicId] = !0, o[e.topicId] = (null !== (t = o[e.topicId]) && void 0 !== t ? t : 0) + function(t, e) {
							var n = null === (e = null === (n = null == e ? void 0 : e.feed) || void 0 === n ? void 0 : n.props) || void 0 === e ? void 0 : e.feedItems;
							if (!n || !Array.isArray(n)) return 0;
							var e = n.find(function(e) {
								return e.feedItemKey === t
							});
							return null !== (n = null == e ? void 0 : e.props) && void 0 !== n && n.items && Array.isArray(e.props.items) ? e.props.items.length : null !== (e = null == e ? void 0 : e.props) && void 0 !== e && e.item ? 1 : 0
						}(e.feedItemKey, r)) : (i[e.topicId] = !1, o[e.topicId] = (null !== (t = o[e.topicId]) && void 0 !== t ? t : 0) + (Po(e = e) && e.recommendationList && Array.isArray(e.recommendationList) ? e.recommendationList.length : 0)))
					});
					var a = ((n = {})[j.HomePageSessionInfo] = t, n);
					Object.entries(o).forEach(function(e) {
						var t = e[0],
							e = e[1];
						a[t + "_item_count"] = e, a[t + "_is_sdui"] = i[t] ? 1 : 0
					}), P.eventStreamService.sendEvent({
						name: pl,
						type: pl,
						context: Ti.Home
					}, Li(a))
				} catch (e) {
					(0, E.fireEvent)(Je.omniRecommendationFeedStatsLoggingErrorEvent)
				}
			}

			function hl(e, t, n, r, o, i) {
				return t = Cl(Cl({}, e), t), r = Cl(Cl({}, t), {
					collectionId: nl(t.collectionId, xl.collectionId),
					collectionPosition: nl(t.collectionPosition, -1),
					contentType: tl(t.contentType, xl.contentType),
					itemsPerRow: r,
					totalNumberOfItems: o
				}), void 0 === (o = r).collectionId || o.collectionId < 0 || void 0 === o.contentType || void 0 === o.collectionPosition || o.collectionPosition < 0 || void 0 === o.totalNumberOfItems || o.totalNumberOfItems < 0 ? (bl(sl.AnalyticsBuilderInvalidCollectionAnalyticsData, "Collection analytics data for component type " + n + " is invalid: " + JSON.stringify(r), i.pageContext), Cl(Cl({}, xl), r)) : r
			}

			function gl(e, t, n, r) {
				return e = Cl(Cl(Cl({}, t), e), n), n = Cl(Cl({}, e), {
					id: tl(e.id, Il.id),
					itemPosition: nl(e.itemPosition, Il.itemPosition)
				}), void 0 === (e = n).id || e.itemPosition < 0 ? (bl(sl.AnalyticsBuilderInvalidItemAnalyticsData, "Item analytics data is invalid: " + JSON.stringify(n), r.pageContext), Cl(Cl({}, Il), n)) : n
			}

			function yl(e) {
				var t = e.sduiContext,
					n = e.isFocused,
					r = e.isHovered,
					o = e.image,
					i = e.imageComponent,
					a = e.imageAspectRatio,
					l = e.thumbnailOverlayComponent,
					u = e.onActivated,
					c = e.titleText,
					s = e.titleColor,
					d = e.titleFont,
					f = e.titleLines,
					p = e.titleComponent,
					m = e.isContained,
					v = e.containmentPadding,
					h = e.cornerRadius,
					g = e.footerComponent,
					y = e.ctaButtonComponent,
					e = e.isOnScreen,
					t = t.dependencies.tokens;
				return $().createElement(co, {
					isFocused: null != n && n || null != r && r,
					imageComponent: null != i ? i : o,
					imageAspectRatio: null != a ? a : 1,
					thumbnailOverlayComponent: l,
					onActivated: null == u ? void 0 : u.onActivated,
					linkPath: null == u ? void 0 : u.linkPath,
					isContained: null != m && m,
					containmentBackgroundColor: t.Color.Surface.Surface_100,
					containmentPadding: null != v ? v : t.Padding.Small,
					cornerRadius: null != h ? h : t.Radius.Medium,
					titleText: c,
					titleColor: null != s ? s : t.Color.Content.Emphasis,
					titleFont: null != d ? d : t.Typography.TitleMedium,
					titleLines: null != f ? f : 1,
					titleComponent: p,
					footerComponent: g,
					ctaButtonComponent: y,
					isOnScreen: null != e && e,
					placeholderImageBackgroundColor: t.Color.Surface.Surface_300
				})
			}(Lu = sl = sl || {}).ActiveFriendsFooterPlaceDetailsFetchError = "ActiveFriendsFooterPlaceDetailsFetchError", Lu.AnalyticsBuilderInvalidCollectionAnalyticsData = "AnalyticsBuilderInvalidCollectionAnalyticsData", Lu.AnalyticsBuilderInvalidItemAnalyticsData = "AnalyticsBuilderInvalidItemAnalyticsData", Lu.AnalyticsParsingDiscardedInvalidParam = "AnalyticsParsingDiscardedInvalidParam", Lu.AssetImageMissingAssetUrl = "AssetImageMissingAssetUrl", Lu.BuildBaseActionParamsMissingItem = "BuildBaseActionParamsMissingItem", Lu.BuildBaseImpressionParamsInvalidItemsPerRow = "BuildBaseImpressionParamsInvalidItemsPerRow", Lu.BuildBaseImpressionParamsMissingItem = "BuildBaseImpressionParamsMissingItem", Lu.BuildItemImpressionParamsMissingItem = "BuildItemImpressionParamsMissingItem", Lu.CollectionCarouselMissingItem = "CollectionCarouselMissingItem", Lu.CollectionCarouselItemMissingComponentType = "CollectionCarouselItemMissingComponentType", Lu.CollectionCarouselHeaderNotReactElement = "CollectionCarouselHeaderNotReactElement", Lu.CollectionGridMissingItem = "CollectionGridMissingItem", Lu.CollectionGridItemMissingComponentType = "CollectionGridItemMissingComponentType", Lu.CollectionComponentItemsImpressedButMissing = "CollectionComponentItemsImpressedButMissing", Lu.CollectionComponentChildNotReactElement = "CollectionComponentChildNotReactElement", Lu.ComponentNotFound = "ComponentNotFound", Lu.FriendsPresenceFetchFailure = "FriendsPresenceFetchFailure", Lu.InvalidEventContextForPage = "InvalidEventContextForPage", Lu.InvalidImageQualityLevelConditionValue = "InvalidImageQualityLevelConditionValue", Lu.InvalidMaxWidthConditionValue = "InvalidMaxWidthConditionValue", Lu.InvalidMinWidthConditionValue = "InvalidMinWidthConditionValue", Lu.InvalidPageForSessionAnalytics = "InvalidPageForSessionAnalytics", Lu.InvalidParsedMaxWidthConditionValue = "InvalidParsedMaxWidthConditionValue", Lu.InvalidParsedMinWidthConditionValue = "InvalidParsedMinWidthConditionValue", Lu.InvalidPresenceConditionValue = "InvalidPresenceConditionValue", Lu.InvalidPresenceUpdateEvent = "InvalidPresenceUpdateEvent", Lu.NestedPropParseFailure = "NestedPropParseFailure", Lu.ParseBooleanFieldInvalidNumber = "ParseBooleanFieldInvalidNumber", Lu.ParseBooleanFieldInvalidString = "ParseBooleanFieldInvalidString", Lu.ParseBooleanFieldInvalidType = "ParseBooleanFieldInvalidType", Lu.PropParseFailure = "PropParseFailure", Lu.PropParserNotFound = "PropParserNotFound", Lu.ReportItemActionMissingCollectionData = "ReportItemActionMissingCollectionData", Lu.ReportItemImpressionsMissingData = "ReportItemImpressionsMissingData", Lu.ReportItemImpressionsNoIndexesToSend = "ReportItemImpressionsNoIndexesToSend", Lu.SduiActionOpenGameDetailsInvalidId = "SduiActionOpenGameDetailsInvalidId", Lu.SduiActionOpenSeeAllInvalidCollectionId = "SduiActionOpenSeeAllInvalidCollectionId", Lu.SduiActionOpenSeeAllInvalidCollectionName = "SduiActionOpenSeeAllInvalidCollectionName", Lu.SduiActionOpenSignupInvalidGetSignupUrl = "SduiActionOpenSignupInvalidGetSignupUrl", Lu.SduiComponentBuildPropsAndChildrenInvalidConfig = "SduiComponentBuildPropsAndChildrenInvalidConfig", Lu.SduiFeedItemBoundaryError = "SduiFeedItemBoundaryError", Lu.SduiLandingPageConfigurationNotFound = "SduiLandingPageConfigurationNotFound", Lu.SduiLandingPageDataFetchError = "SduiLandingPageDataFetchError", Lu.SduiLandingPageDataParseError = "SduiLandingPageDataParseError", Lu.SduiLandingPageDeviceFeaturesFetchError = "SduiLandingPageDeviceFeaturesFetchError", Lu.SduiLandingPagePageSlugFetchError = "SduiLandingPagePageSlugFetchError", Lu.SduiParseAssetUrlInvalidFormat = "SduiParseAssetUrlInvalidFormat", Lu.SduiParseAssetUrlInvalidInput = "SduiParseAssetUrlInvalidInput", Lu.SduiParseAssetUrlIntoComponentInvalidAssetType = "SduiParseAssetUrlIntoComponentInvalidAssetType", Lu.SduiParseAssetUrlIntoComponentInvalidRbxThumb = "SduiParseAssetUrlIntoComponentInvalidRbxThumb", Lu.SduiParseAssetUrlIntoComponentNoSupportedThumbSizeForType = "SduiParseAssetUrlIntoComponentNoSupportedThumbSizeForType", Lu.SduiParseAutomaticSizeInvalidInput = "SduiParseAutomaticSizeInvalidInput", Lu.SduiParseCallbackInvalidConfig = "SduiParseCallbackInvalidConfig", Lu.SduiParseColorValueInvalidInput = "SduiParseColorValueInvalidInput", Lu.SduiParseFoundationButtonSizeInvalidInput = "SduiParseFoundationButtonSizeInvalidInput", Lu.SduiParseFoundationButtonVariantInvalidInput = "SduiParseFoundationButtonVariantInvalidInput", Lu.SduiParseFoundationTokenInvalidInput = "SduiParseFoundationTokenInvalidInput", Lu.SduiParseFoundationTokenInvalidInputPath = "SduiParseFoundationTokenInvalidInputPath", Lu.SduiParseFoundationTokenInvalidOutputType = "SduiParseFoundationTokenInvalidOutputType", Lu.SduiParseFoundationTokenMissingTokens = "SduiParseFoundationTokenMissingTokens", Lu.SduiParseGradientInvalidConfig = "SduiParseGradientInvalidConfig", Lu.SduiParseIconInvalidInput = "SduiParseIconInvalidInput", Lu.SduiParseUDim2InvalidInput = "SduiParseUDim2InvalidInput", Lu.SduiParseVector2InvalidInput = "SduiParseVector2InvalidInput", Lu.SduiParseUiComponentInvalidConfig = "SduiParseUiComponentInvalidConfig", Lu.ServerDrivenFeedItemMissingFeedOrFeedItems = "ServerDrivenFeedItemMissingFeedOrFeedItems", Lu.ServerDrivenFeedItemMissingItem = "ServerDrivenFeedItemMissingItem", Lu.SessionInfoKeyNotFound = "SessionInfoKeyNotFound", Lu.SingleItemCollectionItemImpressedButMissing = "SingleItemCollectionItemImpressedButMissing", Lu.SingleItemCollectionMissingItem = "SingleItemCollectionMissingItem", Lu.TemplateResolutionCircularReference = "TemplateResolutionCircularReference", Lu.TemplateResolutionComponentTypeMismatch = "TemplateResolutionComponentTypeMismatch", Lu.TemplateResolutionTemplateNotFound = "TemplateResolutionTemplateNotFound", Lu.UnsupportedConditionalPropsCondition = "UnsupportedConditionalPropsCondition", Lu.UnknownImageQualityLevelConditionValue = "UnknownImageQualityLevelConditionValue", Lu.UnknownPresenceConditionKey = "UnknownPresenceConditionKey", Lu.UnknownResponsivePropConditionKey = "UnknownResponsivePropConditionKey", Lu.UnsupportedSduiPage = "UnsupportedSduiPage";
			var bl = ml,
				wl = function() {
					return (wl = Object.assign || function(e) {
						for (var t, n = 1, r = arguments.length; n < r; n++)
							for (var o in t = arguments[n]) Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
						return e
					}).apply(this, arguments)
				},
				Sl = function(e) {
					var t = e.sduiContext,
						n = e.title,
						r = e.subtitle,
						o = e.titleImage,
						i = e.bottomRowComponent,
						a = e.gradient,
						l = e.gradientHeightPercent,
						u = e.gradientWidthPercent,
						c = e.foregroundImage,
						s = e.backgroundImage,
						d = e.onActivated,
						f = e.badgeText,
						p = e.asset,
						m = e.ctaButtonComponent,
						v = e.minForegroundHeightPercent,
						h = e.maxForegroundHeightPercent,
						g = e.titleImageAspectRatio,
						y = e.titleImageHeightPercentage,
						b = e.minCardHeight,
						w = e.foregroundAspectRatio,
						S = e.children,
						C = (0, X.useMemo)(function() {
							var e = t.dependencies.tokens;
							return p ? $().createElement(Ir, {
								title: p.title,
								titleFontStyle: e.Typography.TitleMedium,
								subtitle: p.subtitle,
								subtitleFontStyle: e.Typography.BodyMedium,
								imageComponent: p.image,
								rightButtonContent: m,
								subtitleMaxLines: 1,
								textColor: "white",
								height: 40
							}) : $().createElement($().Fragment, null)
						}, [p, m, t]),
						I = (0, X.useMemo)(function() {
							return f ? $().createElement(zr, {
								pillText: f
							}) : $().createElement($().Fragment, null)
						}, [f]),
						x = (0, X.useMemo)(function() {
							return void 0 !== l ? l : 0 === a.degree || 180 === a.degree ? 1 : .5
						}, [l, a]),
						E = (0, X.useMemo)(function() {
							return void 0 !== u ? u : 0 === a.degree || 180 === a.degree ? .5 : 1
						}, [u, a]);
					return (0, X.useMemo)(function() {
						return $().createElement(Wr, {
							title: n,
							subtitle: r,
							titleImageComponent: o,
							foregroundImageComponent: c,
							backgroundImageComponent: s,
							gradient: wl(wl({}, a), {
								heightPercent: x,
								widthPercent: E
							}),
							gradientHeightPercent: x,
							gradientWidthPercent: E,
							overlayPillComponent: I,
							backgroundClickAction: null == d ? void 0 : d.onActivated,
							backgroundClickLinkPath: null == d ? void 0 : d.linkPath,
							bottomRowComponent: null != i ? i : C,
							minForegroundHeightPercent: v,
							maxForegroundHeightPercent: h,
							titleImageAspectRatio: g,
							titleImageHeightPercentage: y,
							minCardHeight: b,
							foregroundAspectRatio: w
						}, S)
					}, [s, d, i, C, c, a, x, E, r, n, o, S, I, v, h, g, y, b, w])
				},
				Cl = function() {
					return (Cl = Object.assign || function(e) {
						for (var t, n = 1, r = arguments.length; n < r; n++)
							for (var o in t = arguments[n]) Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
						return e
					}).apply(this, arguments)
				},
				Il = {
					id: "Unknown",
					itemPosition: -1
				},
				xl = {
					collectionId: -1,
					contentType: "Unknown",
					itemsPerRow: -1,
					collectionPosition: -1,
					totalNumberOfItems: -1
				},
				El = function() {
					return (El = Object.assign || function(e) {
						for (var t, n = 1, r = arguments.length; n < r; n++)
							for (var o in t = arguments[n]) Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
						return e
					}).apply(this, arguments)
				},
				Pl = function(e, t, n, r) {
					var o = gl(null !== (c = t.analyticsData) && void 0 !== c ? c : {}, null !== (s = t.ancestorAnalyticsData) && void 0 !== s ? s : {}, void 0, n),
						i = null !== (f = null != r ? r : t.getCollectionData && t.getCollectionData()) && void 0 !== f ? f : null;
					i || bl(sl.ReportItemActionMissingCollectionData, "Collection data is missing when sending action " + JSON.stringify(e), n.pageContext);
					var a, l, u, c, s, d = null != i ? i : xl,
						f = (l = (a = o).itemPosition, u = d.contentType, c = d.collectionPosition, s = d.collectionId, r = d.totalNumberOfItems, t = e.actionType, f = n, a ? ((i = {})[ki.CollectionId] = s, i[ki.CollectionPosition] = c, i[ki.ContentType] = u, i[Ni.TotalNumberOfItems] = r, i[Ni.ItemId] = a.id, i[Ni.ItemPosition] = l, i[Ni.PositionInTopic] = l, i[Ni.ActionType] = t, i) : (bl(sl.BuildBaseActionParamsMissingItem, "Item is nil when sending action for collection " + s, f.pageContext), {})),
						f = El(El(El(El({}, o), d), il(e.actionParams, n.pageContext)), f);
					P.eventStreamService.sendEvent({
						name: Pi.ItemAction,
						type: Pi.ItemAction,
						context: null !== (n = ul(n.pageContext)) && void 0 !== n ? n : "unknown"
					}, Li(El({}, f)))
				},
				Tl = function() {
					return (Tl = Object.assign || function(e) {
						for (var t, n = 1, r = arguments.length; n < r; n++)
							for (var o in t = arguments[n]) Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
						return e
					}).apply(this, arguments)
				},
				Ol = function(e, t, n, r, o) {
					var i = (0, X.useRef)(null),
						a = (0, X.useCallback)(function(e, t) {
							Pl(e, t, o, i.current)
						}, [i, o]),
						l = (0, X.useCallback)(function() {
							return i.current
						}, [i]),
						u = (0, X.useMemo)(function() {
							return Tl(Tl({}, e), {
								logAction: a,
								getCollectionAnalyticsData: l
							})
						}, [e, a, l]);
					return i.current = (0, X.useMemo)(function() {
						var e;
						return hl(null !== (e = u.ancestorAnalyticsData) && void 0 !== e ? e : {}, null !== (e = u.analyticsData) && void 0 !== e ? e : {}, t, n, r, o)
					}, [u.ancestorAnalyticsData, u.analyticsData, t, n, r, o]), {
						collectionAnalyticsContext: u,
						collectionAnalyticsDataRef: i
					}
				},
				kl = function() {
					return (kl = Object.assign || function(e) {
						for (var t, n = 1, r = arguments.length; n < r; n++)
							for (var o in t = arguments[n]) Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
						return e
					}).apply(this, arguments)
				},
				Al = function(t, e, n) {
					return (0, X.useMemo)(function() {
						return e ? e.map(function(e) {
							return e.templateKey ? t.templateRegistry.resolveTemplateForConfig(e) : n ? t.templateRegistry.resolveTemplateForConfig(kl(kl({}, e), {
								templateKey: n
							})) : e
						}) : []
					}, [e, t, n])
				},
				Nl = function() {
					return (Nl = Object.assign || function(e) {
						for (var t, n = 1, r = arguments.length; n < r; n++)
							for (var o in t = arguments[n]) Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
						return e
					}).apply(this, arguments)
				},
				_l = function(e, t, n, r, o) {
					var i, a, l, u, c, s, d = function(e) {
							var e = null == e ? void 0 : e[0];
							if ((null == e ? void 0 : e.componentType) === sh.Tile || (null == e ? void 0 : e.componentType) === sh.GameTile) {
								e = null === (e = e.props) || void 0 === e ? void 0 : e.imageAspectRatio;
								if (ol(e))
									if (1 < nl(e, 0)) return !0
							}
							return !1
						}(n),
						f = null !== (c = al(o.pageContext)) && void 0 !== c ? c : "",
						n = tl(null == r ? void 0 : r[f], ""),
						o = Nl(Nl(Nl(Nl(Nl(((c = {})[F.RootPlaceIds] = e.map(function(e) {
							return nl(null === (e = t[e]) || void 0 === e ? void 0 : e.placeId, -1)
						}), c[F.UniverseIds] = e.map(function(e) {
							return nl(null === (e = t[e]) || void 0 === e ? void 0 : e.universeId, -1)
						}), c), (f = e, s = t, (c = d) ? ((c = {})[F.ThumbnailAssetIds] = f.map(function(e) {
							return tl(null === (e = s[e]) || void 0 === e ? void 0 : e.thumbnailAssetId, "0")
						}), c[F.ThumbnailListIds] = f.map(function(e) {
							return tl(null === (e = s[e]) || void 0 === e ? void 0 : e.thumbnailListId, "0")
						}), c) : {})), (c = e, u = t, (d = d) ? ((d = {})[F.TileBadgeContexts] = c.map(function(e) {
							return tl(null === (e = u[e]) || void 0 === e ? void 0 : e.tileBadgeIds, "0")
						}), d) : {})), (i = t, a = o, (d = (c = e).map(function(e) {
							return !0 === rl(null === (e = i[e]) || void 0 === e ? void 0 : e.adFlag, !1, a.pageContext) ? 1 : 0
						})).some(function(e) {
							return 1 === e
						}) ? ((l = {})[F.AdsPositions] = d, l[F.AdFlags] = d, l[F.AdIds] = c.map(function(e) {
							return tl(null === (e = i[e]) || void 0 === e ? void 0 : e.adId, "0")
						}), l) : {})), ((l = {})[F.NavigationUids] = e.map(function(e) {
							return tl(null === (e = t[e]) || void 0 === e ? void 0 : e.navigationUniverseId, "0")
						}), l[F.AbsPositions] = e, l[F.SortPos] = 0 <= (null == r ? void 0 : r.collectionPosition) ? r.collectionPosition - 1 : -1, l[F.GameSetTypeId] = null !== (r = null == r ? void 0 : r.collectionId) && void 0 !== r ? r : -1, l[F.Page] = o.pageContext.pageName, l)), ll(n, o)),
						o = ee.gameImpressions(o);
					P.eventStreamService.sendEvent.apply(P.eventStreamService, o)
				},
				Rl = function() {
					return (Rl = Object.assign || function(e) {
						for (var t, n = 1, r = arguments.length; n < r; n++)
							for (var o in t = arguments[n]) Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
						return e
					}).apply(this, arguments)
				},
				Ll = [ki.CollectionId, ki.CollectionPosition, ki.ContentType, "id", "itemPosition", "itemsPerRow", "rowNumber", Ai.TotalNumberOfItems],
				Dl = function(e, t, n, r) {
					var o, i, a, l, u, c, s, d, f, p, m, v;
					n && t ? 0 !== e.length ? (o = e, i = t, a = n.contentType, l = n.itemsPerRow, u = n.collectionPosition, c = n.collectionId, s = n.totalNumberOfItems, d = r, f = [], p = [], m = [], v = [], o.forEach(function(e) {
						var t = i[e];
						null != t ? (f.push(t.id), p.push(t.itemPosition), v.push(t.itemPosition), void 0 !== l && 0 < l ? (t = Math.floor(e / l), m.push(t + 1)) : (bl(sl.BuildBaseImpressionParamsInvalidItemsPerRow, "itemsPerRow is undefined or not greater than 0 when sending impressions for collection " + c + ": " + JSON.stringify(l), d.pageContext), m.push(1))) : bl(sl.BuildBaseImpressionParamsMissingItem, "Item at index " + e + " is nil when sending impressions for collection " + c, d.pageContext)
					}), (o = {})[ki.CollectionId] = c, o[ki.CollectionPosition] = u, o[ki.ContentType] = a, o[Ai.TotalNumberOfItems] = s, o[Ai.ItemIds] = f.join(","), o[Ai.ItemPositions] = p.join(","), o[Ai.RowNumbers] = m.join(","), o[Ai.PositionsInTopic] = v.join(","), o = o, e = function(r, o, i, a) {
						var l = {};
						r.forEach(function(e, n) {
							var t = o[e];
							null != t ? Object.entries(t).forEach(function(e) {
								var t = e[0],
									e = e[1];
								Ll.includes(t) || null == e || (l[t] || (l[t] = r.map(function() {
									return ""
								})), l[t][n] = e.toString())
							}) : bl(sl.BuildItemImpressionParamsMissingItem, "Item at index " + e + " is nil when sending impressions for collection " + i, a.pageContext)
						});
						var n = {};
						return Object.entries(l).forEach(function(e) {
							var t = e[0],
								e = e[1];
							n[t + "_arr"] = e.join(",")
						}), n
					}(e, t, n.collectionId, r), e = Rl(Rl(Rl({}, e), n), o), P.eventStreamService.sendEvent({
						name: Pi.ItemImpressions,
						type: Pi.ItemImpressions,
						context: null !== (o = ul(r.pageContext)) && void 0 !== o ? o : "unknown"
					}, Li(Rl({}, e)))) : bl(sl.ReportItemImpressionsNoIndexesToSend, "No indexes to send for collection " + n.collectionId, r.pageContext) : bl(sl.ReportItemImpressionsMissingData, "Missing collection " + JSON.stringify(n) + " or item " + JSON.stringify(t) + " data when sending impressions for collection " + (null !== (n = null == n ? void 0 : n.collectionId) && void 0 !== n ? n : "undefined"), r.pageContext)
				},
				Ml = function(n, r, o, i, a) {
					return {
						onItemsImpressed: (0, X.useCallback)(function(e) {
							var t;
							r ? ("Game" === (null === (t = i.current) || void 0 === t ? void 0 : t.contentType) && _l(e, o.current, r, i.current, a), Dl(e, o.current, i.current, a)) : bl(sl.CollectionComponentItemsImpressedButMissing, n.componentType + " with config " + JSON.stringify(n) + " is missing item configs on impression. Configs are " + JSON.stringify(r), a.pageContext)
						}, [r, i, o, a, n])
					}
				},
				Fl = function() {
					return (Fl = Object.assign || function(e) {
						for (var t, n = 1, r = arguments.length; n < r; n++)
							for (var o in t = arguments[n]) Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
						return e
					}).apply(this, arguments)
				},
				jl = function(e, t) {
					return (0, X.useMemo)(function() {
						return t ? $().cloneElement(t, Fl(Fl({}, t.props), {
							parentAnalyticsContext: e
						})) : null
					}, [t, e])
				},
				Ul = function() {
					return (Ul = Object.assign || function(e) {
						for (var t, n = 1, r = arguments.length; n < r; n++)
							for (var o in t = arguments[n]) Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
						return e
					}).apply(this, arguments)
				},
				Bl = function(n, r, o, e) {
					return (0, X.useMemo)(function() {
						return $().Children.map(e, function(e, t) {
							if (!$().isValidElement(e)) return bl(sl.CollectionComponentChildNotReactElement, r.componentType + " with config " + JSON.stringify(r) + " has child " + JSON.stringify(e) + " that is not a valid React element", o.pageContext), e;
							t = r.componentType + "-child-" + t;
							return $().cloneElement(e, Ul(Ul({}, e.props), {
								key: t,
								parentAnalyticsContext: n
							}))
						})
					}, [e, n, r, o])
				},
				te = function(e) {
					var i = e.sduiContext,
						t = e.analyticsContext,
						o = e.componentConfig,
						n = e.items,
						r = e.collectionItemSize,
						a = e.itemTemplateKey,
						l = e.layoutOverrides,
						u = e.scrollThresholdFromEnd,
						c = e.onScrollToEnd,
						s = e.headerComponent,
						d = e.children,
						f = i.dependencies.tokens,
						p = Al(i, n, a),
						m = (0, X.useRef)([]),
						e = (0, X.useState)(-1),
						n = e[0],
						a = e[1],
						e = Ol(t, o.componentType, n, p.length, i),
						v = e.collectionAnalyticsContext,
						h = e.collectionAnalyticsDataRef,
						t = Ml(o, p, m, h, i).onItemsImpressed,
						n = (0, X.useRef)(null);
					Ei(n, p.length, t);
					e = (0, X.useCallback)(function(e, t, n) {
						var r = void 0 !== (null === (o = h.current) || void 0 === o ? void 0 : o.collectionPosition) && 0 <= h.current.collectionPosition ? h.current.collectionPosition - 1 : -1,
							o = null !== (o = al(i.pageContext)) && void 0 !== o ? o : "";
						Io({
							distance: e,
							scrollAreaSize: n,
							startingPosition: t,
							direction: g.Horizontal,
							gameSetTypeId: null !== (t = null === (t = h.current) || void 0 === t ? void 0 : t.collectionId) && void 0 !== t ? t : -1,
							gameSetTargetId: void 0,
							sortPosition: r,
							currentPage: i.pageContext.pageName,
							pageSession: tl(null === (r = h.current) || void 0 === r ? void 0 : r[o], "")
						})
					}, [h, i]), t = (0, X.useCallback)(function(e, t, n) {
						if (!e) return bl(sl.CollectionCarouselMissingItem, "CollectionCarousel with config " + JSON.stringify(o) + " trying to render item " + JSON.stringify(e) + " that is missing", i.pageContext), $().createElement($().Fragment, null);
						var r = tl(null === (r = e.analyticsData) || void 0 === r ? void 0 : r.componentType, "") || e.componentType;
						if (!r) return bl(sl.CollectionCarouselItemMissingComponentType, "CollectionCarousel with config " + JSON.stringify(o) + " is missing item component type on item config " + JSON.stringify(e), i.pageContext), $().createElement($().Fragment, null);
						r = {
							itemPosition: t + 1,
							itemComponentType: r,
							componentType: r
						};
						return m.current[t] = gl(null !== (t = e.analyticsData) && void 0 !== t ? t : {}, null !== (t = h.current) && void 0 !== t ? t : {}, r, i), $().createElement(Nh, {
							componentConfig: e,
							parentAnalyticsContext: v,
							sduiContext: i,
							localAnalyticsData: r,
							extraLocalProps: {
								isOnScreen: n
							}
						})
					}, [i, o, v, h]), s = jl(v, s), d = Bl(v, o, i, d);
					return $().createElement("div", null, $().createElement(Mr, {
						itemsContainerRef: n,
						items: p,
						renderItem: t,
						collectionItemSize: null != r ? r : Tr.Small,
						updateItemsPerRow: a,
						headerComponent: s,
						layoutOverrides: l,
						gapBetweenHeaderAndItems: f.Gap.Large,
						isHorizontalScrollEnabled: !0,
						scrollArrowBackgroundColor: f.Color.Surface.Surface_100,
						scrollArrowBoxShadowColor: f.Color.Common.Shadow,
						thresholdFromEnd: u,
						onReachedThresholdFromEnd: c,
						reportHorizontalScrollTelemetry: e
					}), d)
				},
				fr = function(e) {
					var r = e.sduiContext,
						t = e.analyticsContext,
						o = e.componentConfig,
						n = e.items,
						i = e.collectionItemSize,
						a = e.itemTemplateKey,
						l = e.layoutOverrides,
						u = e.headerComponent,
						c = e.children,
						s = r.dependencies.tokens,
						e = Al(r, n, a),
						d = (0, X.useRef)([]),
						n = (0, X.useState)(-1),
						a = n[0],
						n = n[1],
						t = Ol(t, o.componentType, a, e.length, r),
						f = t.collectionAnalyticsContext,
						p = t.collectionAnalyticsDataRef,
						a = Ml(o, e, d, p, r).onItemsImpressed,
						t = (0, X.useRef)(null);
					Ei(t, e.length, a);
					a = (0, X.useCallback)(function(e, t) {
						if (!e) return bl(sl.CollectionGridMissingItem, "CollectionGrid with config " + JSON.stringify(o) + " trying to render item " + JSON.stringify(e) + " that is missing", r.pageContext), $().createElement($().Fragment, null);
						var n = tl(null === (n = e.analyticsData) || void 0 === n ? void 0 : n.componentType, "") || e.componentType;
						if (!n) return bl(sl.CollectionGridItemMissingComponentType, "CollectionGrid with config " + JSON.stringify(o) + " is missing item component type on item config " + JSON.stringify(e), r.pageContext), $().createElement($().Fragment, null);
						n = {
							itemPosition: t + 1,
							itemComponentType: n,
							componentType: n
						};
						return d.current[t] = gl(null !== (t = e.analyticsData) && void 0 !== t ? t : {}, null !== (t = p.current) && void 0 !== t ? t : {}, n, r), $().createElement(Nh, {
							componentConfig: e,
							parentAnalyticsContext: f,
							sduiContext: r,
							localAnalyticsData: n
						})
					}, [r, o, f, p]), u = jl(f, u), c = Bl(f, o, r, c);
					return $().createElement("div", null, $().createElement(Fr, {
						itemsContainerRef: t,
						items: e,
						renderItem: a,
						collectionItemSize: null != i ? i : Tr.Small,
						updateItemsPerRow: n,
						headerComponent: u,
						layoutOverrides: l,
						gapBetweenHeaderAndItems: s.Gap.Large
					}), c)
				};

			function Gl(e) {
				void 0 === e && (e = window.location);
				var r = re(e.search);
				return r ? Object.entries(zl).reduce(function(e, t) {
					var n = t[0],
						t = t[1].find(function(e) {
							return void 0 !== r[e] && null !== r[e]
						});
					return !t || "string" != typeof r[t] && "number" != typeof r[t] || (e[n] = r[t]), e
				}, {}) : {}
			}

			function Hl(e, t) {
				var n, r = rl(cl("adFlag", e, !1), !1, t.pageContext),
					o = tl(cl("adId", e, ""), ""),
					i = nl(cl("itemPosition", e, -1), -1),
					a = e.getCollectionData ? e.getCollectionData() : void 0,
					l = null !== (u = null == a ? void 0 : a.collectionPosition) && void 0 !== u ? u : nl(cl("collectionPosition", e, -1), -1),
					u = null !== (c = null == a ? void 0 : a.totalNumberOfItems) && void 0 !== c ? c : nl(cl("totalNumberOfItems", e, -1), -1),
					a = null !== (c = null == a ? void 0 : a.collectionId) && void 0 !== c ? c : nl(cl("collectionId", e, -1), -1),
					c = tl(cl(null !== (c = al(t.pageContext)) && void 0 !== c ? c : "", e, ""), "");
				return Vl(Vl(Vl(((e = {})[F.IsAd] = r, e), "" !== o && ((n = {})[F.NativeAdData] = o, n)), ((n = {})[F.Position] = i, n[F.SortPos] = l, n[F.NumberOfLoadedTiles] = u, n[F.GameSetTypeId] = a, n[F.Page] = t.pageContext.pageName, n)), ll(c, t))
			}(oe = mm = mm || {}).AfAd = "af_ad", oe.AfAdId = "af_ad_id", oe.AfAdset = "af_adset", oe.AfAdsetId = "af_adset_id", oe.AfChannel = "af_channel", oe.AfCid = "af_c_id", oe.AfSub1 = "af_sub1", oe.AfSub2 = "af_sub2", oe.AfSub4 = "af_sub4", oe.C = "c", oe.Pid = "pid", oe.Gclid = "gclid", oe.Fbclid = "fbclid";
			var Wl, zl = ((Tm = {})[mm.AfAd] = ["utm_adname", "af_ad"], Tm[mm.AfAdId] = ["utm_adid", "af_ad_id"], Tm[mm.AfAdset] = ["utm_adset", "af_adset"], Tm[mm.AfAdsetId] = ["utm_adsetid", "af_adset_id"], Tm[mm.AfChannel] = ["utm_channel", "af_channel"], Tm[mm.AfCid] = ["utm_id", "af_c_id"], Tm[mm.AfSub1] = ["gclid", "af_sub1"], Tm[mm.Gclid] = ["gclid", "gclid"], Tm[mm.AfSub2] = ["fbclid", "af_sub2"], Tm[mm.Fbclid] = ["fbclid", "fbclid"], Tm[mm.C] = ["utm_campaign", "c"], Tm[mm.Pid] = ["utm_source", "pid"], Tm[mm.AfSub4] = ["utm_control_test", "af_sub4"], Tm),
				Vl = function() {
					return (Vl = Object.assign || function(e) {
						for (var t, n = 1, r = arguments.length; n < r; n++)
							for (var o in t = arguments[n]) Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
						return e
					}).apply(this, arguments)
				},
				ql = function(e, t, n) {
					var r, o = null === (a = e.actionParams) || void 0 === a ? void 0 : a.placeId,
						i = nl(o, -1);
					if (i && -1 !== i) {
						var a = (r = t, a = n, t = il(null !== (e = (t = e).actionParams) && void 0 !== e ? e : {}, a.pageContext), e = nl(null !== (e = t.placeId) && void 0 !== e ? e : cl("placeId", r, -1), -1), t = nl(null !== (t = t.universeId) && void 0 !== t ? t : cl("universeId", r, -1), -1), r = Hl(r, a), a = Gl(), Vl(Vl(Vl({}, r), a), ((a = {})[F.PlaceId] = e, a[F.UniverseId] = t, a)));
						return {
							callback: void 0,
							linkPath: v(i, "", a)
						}
					}
					return bl(sl.SduiActionOpenGameDetailsInvalidId, "Invalid id " + JSON.stringify(o) + " to open game details", n.pageContext), {
						callback: void 0,
						linkPath: void 0
					}
				},
				Jl = function() {
					return (Jl = Object.assign || function(e) {
						for (var t, n = 1, r = arguments.length; n < r; n++)
							for (var o in t = arguments[n]) Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
						return e
					}).apply(this, arguments)
				},
				$i = function(e, t, n) {
					var r = null === (i = e.actionParams) || void 0 === i ? void 0 : i.collectionName,
						o = tl(r, "");
					if (!o) return bl(sl.SduiActionOpenSeeAllInvalidCollectionName, "Invalid collection name " + JSON.stringify(r) + " to open see all", n.pageContext), {
						callback: void 0,
						linkPath: void 0
					};
					var r = null === (i = e.actionParams) || void 0 === i ? void 0 : i.collectionId,
						e = nl(r, -1);
					if (!e || -1 === e) return bl(sl.SduiActionOpenSeeAllInvalidCollectionId, "Invalid collection id " + JSON.stringify(r) + " to open see all", n.pageContext), {
						callback: void 0,
						linkPath: void 0
					};
					var i, r = (i = e, r = n, n = nl(cl("collectionPosition", e = t, -1), -1), t = tl(cl(null !== (t = al(r.pageContext)) && void 0 !== t ? t : "", e, ""), ""), Jl(((e = {})[F.Position] = n, e[F.SortId] = i, e[F.GameSetTypeId] = i, e[F.Page] = r.pageContext.pageName, e), ll(t, r)));
					return {
						callback: void 0,
						linkPath: R(o, r[F.Page], r)
					}
				},
				Kl = function(e, t, n) {
					var r = (T.NavigationService || {}).getSignupUrl;
					if (r) return {
						linkPath: r()
					};
					r = N.urlService.getAbsoluteUrl("/account/signupredir");
					return bl(sl.SduiActionOpenSignupInvalidGetSignupUrl, "getSignupUrl is not defined", n.pageContext), {
						linkPath: r
					}
				};
			(oh = Wl = Wl || {}).OpenGameDetails = "OpenGameDetails", oh.OpenSeeAll = "OpenSeeAll", oh.PlayButtonClick = "PlayButtonClick", oh.OpenSignup = "OpenSignup", oh.OpenJoinFriends = "OpenJoinFriends";
			var lt = function() {
					return {
						callback: void 0,
						linkPath: void 0
					}
				},
				Xl = ((Ki = {})[Wl.OpenGameDetails] = ql, Ki[Wl.OpenSeeAll] = $i, Ki[Wl.OpenSignup] = Kl, Ki[Wl.PlayButtonClick] = lt, Ki[Wl.OpenJoinFriends] = lt, Ki);

			function $l(e) {
				return ($l = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
					return typeof e
				} : function(e) {
					return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
				})(e)
			}
			var Yl = function() {
				return (Yl = Object.assign || function(e) {
					for (var t, n = 1, r = arguments.length; n < r; n++)
						for (var o in t = arguments[n]) Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
					return e
				}).apply(this, arguments)
			};

			function Zl(e, t) {
				var n = {};
				for (o in e) Object.prototype.hasOwnProperty.call(e, o) && t.indexOf(o) < 0 && (n[o] = e[o]);
				if (null != e && "function" == typeof Object.getOwnPropertySymbols)
					for (var r = 0, o = Object.getOwnPropertySymbols(e); r < o.length; r++) t.indexOf(o[r]) < 0 && Object.prototype.propertyIsEnumerable.call(e, o[r]) && (n[o[r]] = e[o[r]]);
				return n
			}

			function Ql() {
				for (var e, t, n = 0, r = "", o = arguments.length; n < o; n++)(e = arguments[n]) && (t = function e(t) {
					var n, r = "";
					if ("string" == typeof t || "number" == typeof t) r += t;
					else if ("object" == $l(t))
						if (Array.isArray(t))
							for (var o = t.length, i = 0; i < o; i++) t[i] && (n = e(t[i])) && (r && (r += " "), r += n);
						else
							for (n in t) t[n] && (r && (r += " "), r += n);
					return r
				}(e)) && (r && (r += " "), r += t);
				return r
			}

			function eu(e, t) {
				void 0 === t && (t = {});
				var n, r = t.insertAt;
				e && "undefined" != typeof document && (n = document.head || document.getElementsByTagName("head")[0], (t = document.createElement("style")).type = "text/css", "top" === r && n.firstChild ? n.insertBefore(t, n.firstChild) : n.appendChild(t), t.styleSheet ? t.styleSheet.cssText = e : t.appendChild(document.createTextNode(e)))
			}

			function tu(e) {
				var t = e.width,
					e = e.height;
				return $().createElement("div", {
					className: "foundation-web-loading-spinner"
				}, $().createElement("svg", {
					width: t,
					height: e,
					viewBox: "0 0 20 20",
					fill: "none",
					xmlns: "http://www.w3.org/2000/svg"
				}, $().createElement("path", {
					fillRule: "evenodd",
					clipRule: "evenodd",
					d: "M10 2.75C8.56609 2.75 7.16438 3.1752 5.97212 3.97185C4.77986 4.76849 3.85061 5.90078 3.30188 7.22554C2.75314 8.55031 2.60957 10.008 2.88931 11.4144C3.16905 12.8208 3.85955 14.1126 4.87348 15.1265C5.88741 16.1405 7.17924 16.831 8.5856 17.1107C9.99196 17.3904 11.4497 17.2469 12.7745 16.6981C14.0992 16.1494 15.2315 15.2201 16.0282 14.0279C16.8248 12.8356 17.25 11.4339 17.25 10C17.25 9.58579 17.5858 9.25 18 9.25C18.4142 9.25 18.75 9.58579 18.75 10C18.75 11.7306 18.2368 13.4223 17.2754 14.8612C16.3139 16.3002 14.9473 17.4217 13.3485 18.0839C11.7496 18.7462 9.9903 18.9195 8.29296 18.5819C6.59563 18.2443 5.03653 17.4109 3.81282 16.1872C2.58911 14.9635 1.75575 13.4044 1.41813 11.707C1.08051 10.0097 1.25379 8.25037 1.91606 6.65152C2.57832 5.05267 3.69983 3.6861 5.13876 2.72464C6.57769 1.76318 8.26942 1.25 10 1.25C10.4142 1.25 10.75 1.58579 10.75 2C10.75 2.41421 10.4142 2.75 10 2.75Z"
				})))
			}

			function nu(e) {
				var t = e.children,
					n = e.className,
					r = e.as,
					o = void 0 !== (c = e.isDisabled) && c,
					i = void 0 !== (l = e.isLoading) && l,
					a = void 0 === (u = e.size) ? "Large" : u,
					l = void 0 === (c = e.variant) ? "Emphasis" : c,
					u = Zl(e, ["children", "className", "as", "isDisabled", "isLoading", "size", "variant"]),
					c = null != r ? r : "button",
					e = u.href,
					u = Zl(u, ["href"]);
				return $().createElement(c, Yl({
					type: "button" === c ? "button" : void 0,
					disabled: o,
					"aria-disabled": o,
					href: o ? void 0 : e
				}, u, {
					className: Ql("foundation-web-button", !o && "foundation-web-interactable", "stroke-none flex items-center justify-center text-no-wrap", au[a], (o ? uu : lu)[l], n)
				}), i ? $().createElement(tu, {
					width: iu[a],
					height: iu[a]
				}) : $().createElement("span", {
					className: "text-truncate-end"
				}, t))
			}
			eu('.foundation-web-interactable{outline-width:0;overflow:hidden;position:relative}.foundation-web-interactable:before{bottom:0;content:"";left:0;position:absolute;right:0;top:0;transition:background-color var(--time-100) var(--ease-linear)}.foundation-web-interactable:focus-visible{outline:var(--stroke-thicker) solid var(--color-selection-start);outline-offset:3px}@media (hover:hover){.foundation-web-interactable:not(:disabled):hover:before{background-color:var(--color-state-hover)}}.foundation-web-interactable:not(:disabled):active:before{background-color:var(--color-state-press)}'), eu("@keyframes rotation{0%{transform:rotate(0deg)}to{transform:rotate(359deg)}}.foundation-web-loading-spinner{animation:rotation 1s linear infinite normal;display:flex}.foundation-web-loading-spinner svg path{fill:var(--color-action-standard-foreground)}"), eu(".foundation-web-button{-webkit-user-select:none;-moz-user-select:none;user-select:none}.foundation-web-button[disabled]{opacity:.5}.foundation-web-button .foundation-web-loading-spinner svg path{fill:currentColor}");
			var ru = ["Emphasis", "Standard", "SoftEmphasis", "ActionUtility", "Alert"],
				ou = ["XSmall", "Small", "Medium", "Large"],
				iu = {
					Large: 24,
					Medium: 20,
					Small: 16,
					XSmall: 12
				},
				au = {
					Large: ["radius-medium", "text-label-large", "height-1200", "padding-x-large"],
					Medium: ["radius-medium", "text-label-medium", "height-1000", "padding-x-medium"],
					Small: ["radius-medium", "text-label-small", "height-800", "padding-x-small"],
					XSmall: ["radius-small", "text-label-small", "height-600", "padding-x-small"]
				},
				lu = {
					Emphasis: ["bg-action-emphasis", "content-action-emphasis"],
					Standard: ["bg-action-standard", "content-action-standard"],
					SoftEmphasis: ["bg-action-soft-emphasis", "content-action-soft-emphasis"],
					ActionUtility: ["bg-action-subtle", "content-action-standard"],
					Alert: ["bg-action-alert", "content-action-alert"]
				},
				uu = {
					Emphasis: ["bg-action-standard", "content-action-standard"],
					Standard: ["bg-action-standard", "content-action-standard"],
					SoftEmphasis: ["bg-action-standard", "content-action-standard"],
					ActionUtility: ["bg-action-subtle", "content-action-standard"],
					Alert: ["bg-action-standard", "content-action-standard"]
				};

			function cu(e) {
				void 0 === e && (e = ":r");
				var t = (0, X.useRef)();
				return t.current || (du += 1, t.current = "".concat(e).concat(du)), t.current
			}
			eu(".foundation-web-icon-button[disabled]{opacity:.5}");
			var su = $g(7707),
				du = 0;

			function fu(e) {
				return function(e) {
					if (Array.isArray(e)) return hu(e)
				}(e) || function(e) {
					if ("undefined" != typeof Symbol && Symbol.iterator in Object(e)) return Array.from(e)
				}(e) || vu(e) || function() {
					throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
				}()
			}

			function pu(e, t) {
				if (null == e) return {};
				var n, r = function(e, t) {
					if (null == e) return {};
					var n, r, o = {},
						i = Object.keys(e);
					for (r = 0; r < i.length; r++) n = i[r], 0 <= t.indexOf(n) || (o[n] = e[n]);
					return o
				}(e, t);
				if (Object.getOwnPropertySymbols)
					for (var o = Object.getOwnPropertySymbols(e), i = 0; i < o.length; i++) n = o[i], 0 <= t.indexOf(n) || Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n]);
				return r
			}

			function mu(e, t) {
				return function(e) {
					if (Array.isArray(e)) return e
				}(e) || function(e, t) {
					if ("undefined" == typeof Symbol || !(Symbol.iterator in Object(e))) return;
					var n = [],
						r = !0,
						o = !1,
						i = void 0;
					try {
						for (var a, l = e[Symbol.iterator](); !(r = (a = l.next()).done) && (n.push(a.value), !t || n.length !== t); r = !0);
					} catch (e) {
						o = !0, i = e
					} finally {
						try {
							r || null == l.return || l.return()
						} finally {
							if (o) throw i
						}
					}
					return n
				}(e, t) || vu(e, t) || function() {
					throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
				}()
			}

			function vu(e, t) {
				if (e) {
					if ("string" == typeof e) return hu(e, t);
					var n = Object.prototype.toString.call(e).slice(8, -1);
					return "Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n ? Array.from(e) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? hu(e, t) : void 0
				}
			}

			function hu(e, t) {
				(null == t || t > e.length) && (t = e.length);
				for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
				return r
			}

			function gu(t, e) {
				var n, r = Object.keys(t);
				return Object.getOwnPropertySymbols && (n = Object.getOwnPropertySymbols(t), e && (n = n.filter(function(e) {
					return Object.getOwnPropertyDescriptor(t, e).enumerable
				})), r.push.apply(r, n)), r
			}

			function yu(t) {
				for (var e = 1; e < arguments.length; e++) {
					var n = null != arguments[e] ? arguments[e] : {};
					e % 2 ? gu(Object(n), !0).forEach(function(e) {
						bu(t, e, n[e])
					}) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : gu(Object(n)).forEach(function(e) {
						Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
					})
				}
				return t
			}

			function bu(e, t, n) {
				return t in e ? Object.defineProperty(e, t, {
					value: n,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : e[t] = n, e
			}

			function wu(e, t) {
				if ("function" == typeof e) return e(t);
				null != e && (e.current = t)
			}

			function Su() {
				for (var e = arguments.length, o = new Array(e), t = 0; t < e; t++) o[t] = arguments[t];
				return function(t) {
					var n = !1,
						r = o.map(function(e) {
							e = wu(e, t);
							return n || "function" != typeof e || (n = !0), e
						});
					if (n) return function() {
						for (var e = 0; e < r.length; e++) {
							var t = r[e];
							"function" == typeof t ? t() : wu(o[e], null)
						}
					}
				}
			}

			function Cu() {
				for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++) t[n] = arguments[n];
				return X.useCallback(Su.apply(void 0, t), t)
			}

			function Iu() {
				for (var e = arguments.length, n = new Array(e), t = 0; t < e; t++) n[t] = arguments[t];
				var o = n[0];
				if (1 === n.length) return o;

				function r() {
					var t = n.map(function(e) {
						return {
							useScope: e(),
							scopeName: e.scopeName
						}
					});
					return function(r) {
						var e = t.reduce(function(e, t) {
							var n = t.useScope,
								t = t.scopeName;
							return yu(yu({}, e), n(r)["__scope".concat(t)])
						}, {});
						return X.useMemo(function() {
							return bu({}, "__scope".concat(o.scopeName), e)
						}, [e])
					}
				}
				return r.scopeName = o.scopeName, r
			}

			function xu(t, n, e) {
				var e = (2 < arguments.length && void 0 !== e ? e : {}).checkForDefaultPrevented,
					r = void 0 === e || e;
				return function(e) {
					if (null != t && t(e), !1 === r || !e.defaultPrevented) return null == n ? void 0 : n(e)
				}
			}

			function Eu(e) {
				var o = X.useRef(e);
				return X.useEffect(function() {
					o.current = e
				}), X.useMemo(function() {
					return function() {
						for (var e, t = arguments.length, n = new Array(t), r = 0; r < t; r++) n[r] = arguments[r];
						return null === (e = o.current) || void 0 === e ? void 0 : e.call.apply(e, [o].concat(n))
					}
				}, [])
			}

			function Pu(e) {
				var o, n, t, i, r, a, l, u, c, s, d = e.present,
					f = e.children,
					p = (o = d, t = mu(X.useState(), 2), i = t[0], r = t[1], a = X.useRef({}), l = X.useRef(o), u = X.useRef("none"), t = o ? "mounted" : "unmounted", t = mu((n = {
						mounted: {
							UNMOUNT: "unmounted",
							ANIMATION_OUT: "unmountSuspended"
						},
						unmountSuspended: {
							MOUNT: "mounted",
							ANIMATION_END: "unmounted"
						},
						unmounted: {
							MOUNT: "mounted"
						}
					}, X.useReducer(function(e, t) {
						return null !== (t = n[e][t]) && void 0 !== t ? t : e
					}, t)), 2), c = t[0], s = t[1], X.useEffect(function() {
						var e = Ou(a.current);
						u.current = "mounted" === c ? e : "none"
					}, [c]), Tu(function() {
						var e, t, n = a.current,
							r = l.current;
						r !== o && (e = u.current, t = Ou(n), o ? s("MOUNT") : "none" === t || "none" === (null == n ? void 0 : n.display) ? s("UNMOUNT") : s(r && e !== t ? "ANIMATION_OUT" : "UNMOUNT"), l.current = o)
					}, [o, s]), Tu(function() {
						if (i) {
							var e, r, o = null !== (e = i.ownerDocument.defaultView) && void 0 !== e ? e : window,
								t = function(e) {
									var t, n = Ou(a.current).includes(e.animationName);
									e.target === i && n && (s("ANIMATION_END"), !l.current) && (t = i.style.animationFillMode, i.style.animationFillMode = "forwards", r = o.setTimeout(function() {
										"forwards" === i.style.animationFillMode && (i.style.animationFillMode = t)
									}))
								},
								n = function(e) {
									e.target === i && (u.current = Ou(a.current))
								};
							return i.addEventListener("animationstart", n), i.addEventListener("animationcancel", t), i.addEventListener("animationend", t),
								function() {
									o.clearTimeout(r), i.removeEventListener("animationstart", n), i.removeEventListener("animationcancel", t), i.removeEventListener("animationend", t)
								}
						}
						s("ANIMATION_END")
					}, [i, s]), {
						isPresent: ["mounted", "unmountSuspended"].includes(c),
						ref: X.useCallback(function(e) {
							e && (a.current = getComputedStyle(e)), r(e)
						}, [])
					}),
					m = "function" == typeof f ? f({
						present: p.isPresent
					}) : X.Children.only(f),
					e = Cu(p.ref, (e = m, (t = null === (d = Object.getOwnPropertyDescriptor(e.props, "ref")) || void 0 === d ? void 0 : d.get) && "isReactWarning" in t && t.isReactWarning ? e.ref : (t = null === (d = Object.getOwnPropertyDescriptor(e, "ref")) || void 0 === d ? void 0 : d.get) && "isReactWarning" in t && t.isReactWarning ? e.props.ref : e.props.ref || e.ref));
				return "function" == typeof f || p.isPresent ? X.cloneElement(m, {
					ref: e
				}) : null
			}
			var Tu = Boolean(null === globalThis || void 0 === globalThis ? void 0 : globalThis.document) ? X.useLayoutEffect : function() {};

			function Ou(e) {
				return (null == e ? void 0 : e.animationName) || "none"
			}
			Pu.displayName = "Presence";
			var ku = X.forwardRef(function(e, t) {
				var n = e.children,
					r = pu(e, ["children"]),
					e = X.Children.toArray(n),
					o = e.find(_u);
				if (o) {
					var i = o.props.children,
						e = e.map(function(e) {
							return e === o ? 1 < X.Children.count(i) ? X.Children.only(null) : X.isValidElement(i) ? i.props.children : null : e
						});
					return (0, su.jsx)(Au, yu(yu({}, r), {}, {
						ref: t,
						children: X.isValidElement(i) ? X.cloneElement(i, void 0, e) : null
					}))
				}
				return (0, su.jsx)(Au, yu(yu({}, r), {}, {
					ref: t,
					children: n
				}))
			});
			ku.displayName = "Slot";
			var Au = X.forwardRef(function(e, t) {
				var n, r = e.children,
					o = pu(e, ["children"]);
				if (X.isValidElement(r)) {
					var i = (i = r, e = null === (n = Object.getOwnPropertyDescriptor(i.props, "ref")) || void 0 === n ? void 0 : n.get, e && "isReactWarning" in e && e.isReactWarning ? i.ref : (e = null === (n = Object.getOwnPropertyDescriptor(i, "ref")) || void 0 === n ? void 0 : n.get) && "isReactWarning" in e && e.isReactWarning ? i.props.ref : i.props.ref || i.ref),
						o = function(r, o) {
							var e, i = yu({}, o);
							for (e in o) ! function(e) {
								var t = r[e],
									n = o[e];
								/^on[A-Z]/.test(e) ? t && n ? i[e] = function() {
									n.apply(void 0, arguments), t.apply(void 0, arguments)
								} : t && (i[e] = t) : "style" === e ? i[e] = yu(yu({}, t), n) : "className" === e && (i[e] = [t, n].filter(Boolean).join(" "))
							}(e);
							return yu(yu({}, r), i)
						}(o, r.props);
					return r.type !== X.Fragment && (o.ref = t ? Su(t, i) : i), X.cloneElement(r, o)
				}
				return 1 < X.Children.count(r) ? X.Children.only(null) : null
			});
			Au.displayName = "SlotClone";
			var Nu = function(e) {
				e = e.children;
				return (0, su.jsx)(su.Fragment, {
					children: e
				})
			};

			function _u(e) {
				return X.isValidElement(e) && e.type === Nu
			}
			var Ru = ["a", "button", "div", "form", "h2", "h3", "img", "input", "label", "li", "nav", "ol", "p", "span", "svg", "ul"].reduce(function(e, r) {
					var t = X.forwardRef(function(e, t) {
						var n = e.asChild,
							e = pu(e, ["asChild"]),
							n = n ? ku : r;
						return "undefined" != typeof window && (window[Symbol.for("radix-ui")] = !0), (0, su.jsx)(n, yu(yu({}, e), {}, {
							ref: t
						}))
					});
					return t.displayName = "Primitive.".concat(r), yu(yu({}, e), {}, bu({}, r, t))
				}, {}),
				Lu = (et = mu(function(l, e) {
					var t = 1 < arguments.length && void 0 !== e ? e : [],
						u = [],
						e = function() {
							var n = u.map(function(e) {
								return X.createContext(e)
							});
							return function(e) {
								var t = (null == e ? void 0 : e[l]) || n;
								return X.useMemo(function() {
									return bu({}, "__scope".concat(l), yu(yu({}, e), {}, bu({}, l, t)))
								}, [e, t])
							}
						};
					return e.scopeName = l, [function(r, o) {
						var i = X.createContext(o),
							a = u.length;
						u = [].concat(fu(u), [o]);

						function e(e) {
							var t = e.scope,
								n = e.children,
								r = pu(e, ["scope", "children"]),
								t = (null == t || null === (o = t[l]) || void 0 === o ? void 0 : o[a]) || i,
								o = X.useMemo(function() {
									return r
								}, Object.values(r));
							return (0, su.jsx)(t.Provider, {
								value: o,
								children: n
							})
						}
						return e.displayName = r + "Provider", [e, function(e, t) {
							var n = (null == t || null === (n = t[l]) || void 0 === n ? void 0 : n[a]) || i,
								n = X.useContext(n);
							if (n) return n;
							if (void 0 !== o) return o;
							throw new Error("`".concat(e, "` must be used within `").concat(r, "`"))
						}]
					}, Iu.apply(void 0, [e].concat(fu(t)))]
				}(tt = "Checkbox"), 2))[0],
				Du = (oe = (et[1], mu(Lu(tt), 2)))[0],
				Mu = oe[1];
			(mm = X.forwardRef(function(e, t) {
				var n, r, o, i, a, l, u, c = e.__scopeCheckbox,
					s = e.name,
					d = e.checked,
					f = e.defaultChecked,
					p = e.required,
					m = e.disabled,
					v = e.value,
					h = void 0 === v ? "on" : v,
					g = e.onCheckedChange,
					y = e.form,
					b = pu(e, ["__scopeCheckbox", "name", "checked", "defaultChecked", "required", "disabled", "value", "onCheckedChange", "form"]),
					v = mu(X.useState(null), 2),
					w = v[0],
					S = v[1],
					v = Cu(t, function(e) {
						return S(e)
					}),
					C = X.useRef(!1),
					I = !w || y || !!w.closest("form"),
					t = (i = (t = {
						prop: d,
						defaultProp: f,
						onChange: g
					}).prop, d = t.defaultProp, g = t.onChange, d = (g = {
						defaultProp: d,
						onChange: t = void 0 === g ? function() {} : g
					}).defaultProp, g = g.onChange, d = X.useState(d), n = mu(d, 1)[0], r = X.useRef(n), o = Eu(g), X.useEffect(function() {
						r.current !== n && (o(n), r.current = n)
					}, [n, r, o]), g = (d = mu(g = d, 2))[0], a = d[1], g = (l = void 0 !== i) ? i : g, u = Eu(t), [g, X.useCallback(function(e) {
						var t;
						l ? (t = "function" == typeof e ? e(i) : e) !== i && u(t) : a(e)
					}, [l, i, a, u])]),
					g = mu(t, 2),
					t = g[0],
					t = void 0 !== t && t,
					x = g[1],
					E = X.useRef(t);
				return X.useEffect(function() {
					var e = null == w ? void 0 : w.form;
					if (e) {
						var t = function() {
							return x(E.current)
						};
						return e.addEventListener("reset", t),
							function() {
								return e.removeEventListener("reset", t)
							}
					}
				}, [w, x]), (0, su.jsxs)(Du, {
					scope: c,
					state: t,
					disabled: m,
					children: [(0, su.jsx)(Ru.button, yu(yu({
						type: "button",
						role: "checkbox",
						"aria-checked": Uu(t) ? "mixed" : t,
						"aria-required": p,
						"data-state": Bu(t),
						"data-disabled": m ? "" : void 0,
						disabled: m,
						value: h
					}, b), {}, {
						ref: v,
						onKeyDown: xu(e.onKeyDown, function(e) {
							"Enter" === e.key && e.preventDefault()
						}),
						onClick: xu(e.onClick, function(e) {
							x(function(e) {
								return !!Uu(e) || !e
							}), I && (C.current = e.isPropagationStopped(), C.current || e.stopPropagation())
						})
					})), I && (0, su.jsx)(ju, {
						control: w,
						bubbles: !C.current,
						name: s,
						value: h,
						checked: t,
						required: p,
						disabled: m,
						form: y,
						style: {
							transform: "translateX(-100%)"
						},
						defaultChecked: !Uu(f) && f
					})]
				})
			})).displayName = tt;
			var Fu = "CheckboxIndicator";
			(Tm = X.forwardRef(function(e, t) {
				var n = e.__scopeCheckbox,
					r = e.forceMount,
					o = pu(e, ["__scopeCheckbox", "forceMount"]),
					n = Mu(Fu, n);
				return (0, su.jsx)(Pu, {
					present: r || Uu(n.state) || !0 === n.state,
					children: (0, su.jsx)(Ru.span, yu(yu({
						"data-state": Bu(n.state),
						"data-disabled": n.disabled ? "" : void 0
					}, o), {}, {
						ref: t,
						style: yu({
							pointerEvents: "none"
						}, e.style)
					}))
				})
			})).displayName = Fu;
			var ju = function(e) {
				var r, o, t, n, i = e.control,
					a = e.checked,
					l = e.bubbles,
					u = void 0 === l || l,
					c = e.defaultChecked,
					s = pu(e, ["control", "checked", "bubbles", "defaultChecked"]),
					d = X.useRef(null),
					f = (t = a, n = X.useRef({
						value: t,
						previous: t
					}), X.useMemo(function() {
						return n.current.value !== t && (n.current.previous = n.current.value, n.current.value = t), n.current.previous
					}, [t])),
					l = (r = i, l = mu(X.useState(void 0), 2), i = l[0], o = l[1], Tu(function() {
						if (r) {
							o({
								width: r.offsetWidth,
								height: r.offsetHeight
							});
							var e = new ResizeObserver(function(e) {
								var t, n;
								Array.isArray(e) && e.length && (n = "borderBoxSize" in (e = e[0]) ? (t = e.borderBoxSize, t = (n = Array.isArray(t) ? t[0] : t).inlineSize, n.blockSize) : (t = r.offsetWidth, r.offsetHeight), o({
									width: t,
									height: n
								}))
							});
							return e.observe(r, {
									box: "border-box"
								}),
								function() {
									return e.unobserve(r)
								}
						}
						o(void 0)
					}, [r]), i);
				X.useEffect(function() {
					var e = d.current,
						t = window.HTMLInputElement.prototype,
						n = Object.getOwnPropertyDescriptor(t, "checked").set;
					f !== a && n && (t = new Event("click", {
						bubbles: u
					}), e.indeterminate = Uu(a), n.call(e, !Uu(a) && a), e.dispatchEvent(t))
				}, [f, a, u]);
				i = X.useRef(!Uu(a) && a);
				return (0, su.jsx)("input", yu(yu({
					type: "checkbox",
					"aria-hidden": !0,
					defaultChecked: null != c ? c : i.current
				}, s), {}, {
					tabIndex: -1,
					ref: d,
					style: yu(yu(yu({}, e.style), l), {}, {
						position: "absolute",
						pointerEvents: "none",
						opacity: 0,
						margin: 0
					})
				}))
			};

			function Uu(e) {
				return "indeterminate" === e
			}

			function Bu(e) {
				return Uu(e) ? "indeterminate" : e ? "checked" : "unchecked"
			}

			function Gu(e, t) {
				return function(e) {
					if (Array.isArray(e)) return e
				}(e) || function(e, t) {
					if ("undefined" == typeof Symbol || !(Symbol.iterator in Object(e))) return;
					var n = [],
						r = !0,
						o = !1,
						i = void 0;
					try {
						for (var a, l = e[Symbol.iterator](); !(r = (a = l.next()).done) && (n.push(a.value), !t || n.length !== t); r = !0);
					} catch (e) {
						o = !0, i = e
					} finally {
						try {
							r || null == l.return || l.return()
						} finally {
							if (o) throw i
						}
					}
					return n
				}(e, t) || function(e, t) {
					if (!e) return;
					if ("string" == typeof e) return Hu(e, t);
					var n = Object.prototype.toString.call(e).slice(8, -1);
					"Object" === n && e.constructor && (n = e.constructor.name);
					if ("Map" === n || "Set" === n) return Array.from(e);
					if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return Hu(e, t)
				}(e, t) || function() {
					throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
				}()
			}

			function Hu(e, t) {
				(null == t || t > e.length) && (t = e.length);
				for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
				return r
			}
			eu(".foundation-web-checkbox.foundation-web-checkbox-disabled{opacity:.5}.foundation-web-checkbox .foundation-web-interactable{outline-offset:3px}");
			var Wu = X.createContext(void 0);

			function zu(e) {
				var t = X.useContext(Wu);
				return e || t || "ltr"
			}
			var Vu = null !== globalThis && void 0 !== globalThis && globalThis.document ? X.useLayoutEffect : function() {},
				qu = X[" useId ".trim().toString()] || function() {},
				Ju = 0;

			function Ku(e) {
				var t = Gu(X.useState(qu()), 2),
					n = t[0],
					r = t[1];
				return Vu(function() {
					e || r(function(e) {
						return null != e ? e : String(Ju++)
					})
				}, [e]), e || (n ? "radix-".concat(n) : "")
			}

			function Xu(e) {
				return (Xu = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
					return typeof e
				} : function(e) {
					return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
				})(e)
			}

			function $u(e, t, n, r, o, i, a) {
				try {
					var l = e[i](a),
						u = l.value
				} catch (e) {
					return void n(e)
				}
				l.done ? t(u) : Promise.resolve(u).then(r, o)
			}

			function Yu(l) {
				return function() {
					var e = this,
						a = arguments;
					return new Promise(function(t, n) {
						var r = l.apply(e, a);

						function o(e) {
							$u(r, t, n, o, i, "next", e)
						}

						function i(e) {
							$u(r, t, n, o, i, "throw", e)
						}
						o(void 0)
					})
				}
			}

			function Zu(e, t) {
				var n;
				if ("undefined" == typeof Symbol || null == e[Symbol.iterator]) {
					if (Array.isArray(e) || (n = lc(e)) || t && e && "number" == typeof e.length) {
						n && (e = n);
						var r = 0,
							t = function() {};
						return {
							s: t,
							n: function() {
								return r >= e.length ? {
									done: !0
								} : {
									done: !1,
									value: e[r++]
								}
							},
							e: function(e) {
								throw e
							},
							f: t
						}
					}
					throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
				}
				var o, i = !0,
					a = !1;
				return {
					s: function() {
						n = e[Symbol.iterator]()
					},
					n: function() {
						var e = n.next();
						return i = e.done, e
					},
					e: function(e) {
						a = !0, o = e
					},
					f: function() {
						try {
							i || null == n.return || n.return()
						} finally {
							if (a) throw o
						}
					}
				}
			}

			function Qu(e, t) {
				if (null == e) return {};
				var n, r = function(e, t) {
					if (null == e) return {};
					var n, r, o = {},
						i = Object.keys(e);
					for (r = 0; r < i.length; r++) n = i[r], 0 <= t.indexOf(n) || (o[n] = e[n]);
					return o
				}(e, t);
				if (Object.getOwnPropertySymbols)
					for (var o = Object.getOwnPropertySymbols(e), i = 0; i < o.length; i++) n = o[i], 0 <= t.indexOf(n) || Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n]);
				return r
			}

			function ec(e) {
				return function(e) {
					if (Array.isArray(e)) return uc(e)
				}(e) || tc(e) || lc(e) || function() {
					throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
				}()
			}

			function tc(e) {
				if ("undefined" != typeof Symbol && Symbol.iterator in Object(e)) return Array.from(e)
			}

			function nc(t, e) {
				var n, r = Object.keys(t);
				return Object.getOwnPropertySymbols && (n = Object.getOwnPropertySymbols(t), e && (n = n.filter(function(e) {
					return Object.getOwnPropertyDescriptor(t, e).enumerable
				})), r.push.apply(r, n)), r
			}

			function rc(t) {
				for (var e = 1; e < arguments.length; e++) {
					var n = null != arguments[e] ? arguments[e] : {};
					e % 2 ? nc(Object(n), !0).forEach(function(e) {
						oc(t, e, n[e])
					}) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : nc(Object(n)).forEach(function(e) {
						Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
					})
				}
				return t
			}

			function oc(e, t, n) {
				return t in e ? Object.defineProperty(e, t, {
					value: n,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : e[t] = n, e
			}

			function ic(e, t) {
				return cc(e) || function(e, t) {
					if ("undefined" == typeof Symbol || !(Symbol.iterator in Object(e))) return;
					var n = [],
						r = !0,
						o = !1,
						i = void 0;
					try {
						for (var a, l = e[Symbol.iterator](); !(r = (a = l.next()).done) && (n.push(a.value), !t || n.length !== t); r = !0);
					} catch (e) {
						o = !0, i = e
					} finally {
						try {
							r || null == l.return || l.return()
						} finally {
							if (o) throw i
						}
					}
					return n
				}(e, t) || lc(e, t) || ac()
			}

			function ac() {
				throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
			}

			function lc(e, t) {
				if (e) {
					if ("string" == typeof e) return uc(e, t);
					var n = Object.prototype.toString.call(e).slice(8, -1);
					return "Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n ? Array.from(e) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? uc(e, t) : void 0
				}
			}

			function uc(e, t) {
				(null == t || t > e.length) && (t = e.length);
				for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
				return r
			}

			function cc(e) {
				if (Array.isArray(e)) return e
			}

			function sc(e, t) {
				var n = ic(t, 2),
					t = n[0],
					n = n[1];
				return Math.min(n, Math.max(t, e))
			}

			function dc(t, n, e) {
				var e = (2 < arguments.length && void 0 !== e ? e : {}).checkForDefaultPrevented,
					r = void 0 === e || e;
				return function(e) {
					if (null != t && t(e), !1 === r || !e.defaultPrevented) return null == n ? void 0 : n(e)
				}
			}

			function fc(l, e) {
				var t = 1 < arguments.length && void 0 !== e ? e : [],
					u = [],
					e = function() {
						var n = u.map(function(e) {
							return X.createContext(e)
						});
						return function(e) {
							var t = (null == e ? void 0 : e[l]) || n;
							return X.useMemo(function() {
								return oc({}, "__scope".concat(l), rc(rc({}, e), {}, oc({}, l, t)))
							}, [e, t])
						}
					};
				return e.scopeName = l, [function(r, o) {
					var i = X.createContext(o),
						a = u.length;
					u = [].concat(ec(u), [o]);

					function e(e) {
						var t = e.scope,
							n = e.children,
							r = Qu(e, ["scope", "children"]),
							t = (null == t || null === (o = t[l]) || void 0 === o ? void 0 : o[a]) || i,
							o = X.useMemo(function() {
								return r
							}, Object.values(r));
						return (0, su.jsx)(t.Provider, {
							value: o,
							children: n
						})
					}
					return e.displayName = r + "Provider", [e, function(e, t) {
						var n = (null == t || null === (n = t[l]) || void 0 === n ? void 0 : n[a]) || i,
							n = X.useContext(n);
						if (n) return n;
						if (void 0 !== o) return o;
						throw new Error("`".concat(e, "` must be used within `").concat(r, "`"))
					}]
				}, function() {
					for (var e = arguments.length, n = new Array(e), t = 0; t < e; t++) n[t] = arguments[t];
					var o = n[0];
					if (1 === n.length) return o;

					function r() {
						var t = n.map(function(e) {
							return {
								useScope: e(),
								scopeName: e.scopeName
							}
						});
						return function(r) {
							var e = t.reduce(function(e, t) {
								var n = t.useScope,
									t = t.scopeName;
								return rc(rc({}, e), n(r)["__scope".concat(t)])
							}, {});
							return X.useMemo(function() {
								return oc({}, "__scope".concat(o.scopeName), e)
							}, [e])
						}
					}
					return r.scopeName = o.scopeName, r
				}.apply(void 0, [e].concat(ec(t)))]
			}

			function pc(e, t) {
				if ("function" == typeof e) return e(t);
				null != e && (e.current = t)
			}

			function mc() {
				for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++) t[n] = arguments[n];
				return X.useCallback(function() {
					for (var e = arguments.length, o = new Array(e), t = 0; t < e; t++) o[t] = arguments[t];
					return function(t) {
						var n = !1,
							r = o.map(function(e) {
								e = pc(e, t);
								return n || "function" != typeof e || (n = !0), e
							});
						if (n) return function() {
							for (var e = 0; e < r.length; e++) {
								var t = r[e];
								"function" == typeof t ? t() : pc(o[e], null)
							}
						}
					}
				}.apply(void 0, t), t)
			}

			function vc(e) {
				var t, n, a = (t = e, (n = X.forwardRef(function(e, t) {
						var n, r, o = e.children,
							i = Qu(e, ["children"]),
							t = mc(X.isValidElement(o) ? (n = o, e = null === (r = Object.getOwnPropertyDescriptor(n.props, "ref")) || void 0 === r ? void 0 : r.get, e && "isReactWarning" in e && e.isReactWarning ? n.ref : (e = null === (r = Object.getOwnPropertyDescriptor(n, "ref")) || void 0 === r ? void 0 : r.get) && "isReactWarning" in e && e.isReactWarning ? n.props.ref : n.props.ref || n.ref) : void 0, t);
						if (X.isValidElement(o)) {
							i = function(r, o) {
								var e, i = rc({}, o);
								for (e in o) ! function(e) {
									var t = r[e],
										n = o[e];
									/^on[A-Z]/.test(e) ? t && n ? i[e] = function() {
										var e = n.apply(void 0, arguments);
										return t.apply(void 0, arguments), e
									} : t && (i[e] = t) : "style" === e ? i[e] = rc(rc({}, t), n) : "className" === e && (i[e] = [t, n].filter(Boolean).join(" "))
								}(e);
								return rc(rc({}, r), i)
							}(i, o.props);
							return o.type !== X.Fragment && (i.ref = t), X.cloneElement(o, i)
						}
						return 1 < X.Children.count(o) ? X.Children.only(null) : null
					})).displayName = "".concat(t, ".SlotClone"), n),
					n = X.forwardRef(function(e, t) {
						var n = e.children,
							r = Qu(e, ["children"]),
							e = X.Children.toArray(n),
							o = e.find(gc);
						if (o) {
							var i = o.props.children,
								e = e.map(function(e) {
									return e === o ? 1 < X.Children.count(i) ? X.Children.only(null) : X.isValidElement(i) ? i.props.children : null : e
								});
							return (0, su.jsx)(a, rc(rc({}, r), {}, {
								ref: t,
								children: X.isValidElement(i) ? X.cloneElement(i, void 0, e) : null
							}))
						}
						return (0, su.jsx)(a, rc(rc({}, r), {}, {
							ref: t,
							children: n
						}))
					});
				return n.displayName = "".concat(e, ".Slot"), n
			}
			var hc = Symbol("radix.slottable");

			function gc(e) {
				return X.isValidElement(e) && "function" == typeof e.type && "__radixId" in e.type && e.type.__radixId === hc
			}

			function yc(t, n, e) {
				var e = (2 < arguments.length && void 0 !== e ? e : {}).checkForDefaultPrevented,
					r = void 0 === e || e;
				return function(e) {
					if (null != t && t(e), !1 === r || !e.defaultPrevented) return null == n ? void 0 : n(e)
				}
			}

			function bc(e, t) {
				if ("function" == typeof e) return e(t);
				null != e && (e.current = t)
			}

			function wc() {
				for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++) t[n] = arguments[n];
				return X.useCallback(function() {
					for (var e = arguments.length, o = new Array(e), t = 0; t < e; t++) o[t] = arguments[t];
					return function(t) {
						var n = !1,
							r = o.map(function(e) {
								e = bc(e, t);
								return n || "function" != typeof e || (n = !0), e
							});
						if (n) return function() {
							for (var e = 0; e < r.length; e++) {
								var t = r[e];
								"function" == typeof t ? t() : bc(o[e], null)
							}
						}
					}
				}.apply(void 0, t), t)
			}

			function Sc(e) {
				var t = X.forwardRef(function(e, t) {
					var n, r, o = e.children,
						i = Qu(e, ["children"]),
						t = wc(X.isValidElement(o) ? (n = o, e = null === (r = Object.getOwnPropertyDescriptor(n.props, "ref")) || void 0 === r ? void 0 : r.get, e && "isReactWarning" in e && e.isReactWarning ? n.ref : (e = null === (r = Object.getOwnPropertyDescriptor(n, "ref")) || void 0 === r ? void 0 : r.get) && "isReactWarning" in e && e.isReactWarning ? n.props.ref : n.props.ref || n.ref) : void 0, t);
					if (X.isValidElement(o)) {
						i = function(r, o) {
							var e, i = rc({}, o);
							for (e in o) ! function(e) {
								var t = r[e],
									n = o[e];
								/^on[A-Z]/.test(e) ? t && n ? i[e] = function() {
									var e = n.apply(void 0, arguments);
									return t.apply(void 0, arguments), e
								} : t && (i[e] = t) : "style" === e ? i[e] = rc(rc({}, t), n) : "className" === e && (i[e] = [t, n].filter(Boolean).join(" "))
							}(e);
							return rc(rc({}, r), i)
						}(i, o.props);
						return o.type !== X.Fragment && (i.ref = t), X.cloneElement(o, i)
					}
					return 1 < X.Children.count(o) ? X.Children.only(null) : null
				});
				return t.displayName = "".concat(e, ".SlotClone"), t
			}
			var Cc = Symbol("radix.slottable");

			function Ic(e) {
				return X.isValidElement(e) && "function" == typeof e.type && "__radixId" in e.type && e.type.__radixId === Cc
			}
			var xc = ["a", "button", "div", "form", "h2", "h3", "img", "input", "label", "li", "nav", "ol", "p", "select", "span", "svg", "ul"].reduce(function(e, r) {
				var t, a, n, o = (t = "Primitive.".concat(r), a = Sc(t), (n = X.forwardRef(function(e, t) {
						var n = e.children,
							r = Qu(e, ["children"]),
							e = X.Children.toArray(n),
							o = e.find(Ic);
						if (o) {
							var i = o.props.children,
								e = e.map(function(e) {
									return e === o ? 1 < X.Children.count(i) ? X.Children.only(null) : X.isValidElement(i) ? i.props.children : null : e
								});
							return (0, su.jsx)(a, rc(rc({}, r), {}, {
								ref: t,
								children: X.isValidElement(i) ? X.cloneElement(i, void 0, e) : null
							}))
						}
						return (0, su.jsx)(a, rc(rc({}, r), {}, {
							ref: t,
							children: n
						}))
					})).displayName = "".concat(t, ".Slot"), n),
					n = X.forwardRef(function(e, t) {
						var n = e.asChild,
							e = Qu(e, ["asChild"]),
							n = n ? o : r;
						return "undefined" != typeof window && (window[Symbol.for("radix-ui")] = !0), (0, su.jsx)(n, rc(rc({}, e), {}, {
							ref: t
						}))
					});
				return n.displayName = "Primitive.".concat(r), rc(rc({}, e), {}, oc({}, r, n))
			}, {});

			function Ec(e) {
				var o = X.useRef(e);
				return X.useEffect(function() {
					o.current = e
				}), X.useMemo(function() {
					return function() {
						for (var e, t = arguments.length, n = new Array(t), r = 0; r < t; r++) n[r] = arguments[r];
						return null === (e = o.current) || void 0 === e ? void 0 : e.call.apply(e, [o].concat(n))
					}
				}, [])
			}

			function Pc(e, t) {
				var n, o, r = 1 < arguments.length && void 0 !== t ? t : null === globalThis || void 0 === globalThis ? void 0 : globalThis.document,
					i = (n = e, o = X.useRef(n), X.useEffect(function() {
						o.current = n
					}), X.useMemo(function() {
						return function() {
							for (var e, t = arguments.length, n = new Array(t), r = 0; r < t; r++) n[r] = arguments[r];
							return null === (e = o.current) || void 0 === e ? void 0 : e.call.apply(e, [o].concat(n))
						}
					}, []));
				X.useEffect(function() {
					function e(e) {
						"Escape" === e.key && i(e)
					}
					return r.addEventListener("keydown", e, {
							capture: !0
						}),
						function() {
							return r.removeEventListener("keydown", e, {
								capture: !0
							})
						}
				}, [i, r])
			}
			var Tc, Oc = "dismissableLayer.update",
				kc = X.createContext({
					layers: new Set,
					layersWithOutsidePointerEventsDisabled: new Set,
					branches: new Set
				}),
				Ac = X.forwardRef(function(e, t) {
					var n = e.disableOutsidePointerEvents,
						r = void 0 !== n && n,
						o = e.onEscapeKeyDown,
						i = e.onPointerDownOutside,
						a = e.onFocusOutside,
						l = e.onInteractOutside,
						u = e.onDismiss,
						c = Qu(e, ["disableOutsidePointerEvents", "onEscapeKeyDown", "onPointerDownOutside", "onFocusOutside", "onInteractOutside", "onDismiss"]),
						s = X.useContext(kc),
						d = ic(X.useState(null), 2),
						f = d[0],
						p = d[1],
						m = null !== (h = null == f ? void 0 : f.ownerDocument) && void 0 !== h ? h : null === globalThis || void 0 === globalThis ? void 0 : globalThis.document,
						v = ic(X.useState({}), 2)[1],
						n = wc(t, function(e) {
							return p(e)
						}),
						d = Array.from(s.layers),
						h = ic(ec(s.layersWithOutsidePointerEventsDisabled).slice(-1), 1)[0],
						t = d.indexOf(h),
						g = f ? d.indexOf(f) : -1,
						h = 0 < s.layersWithOutsidePointerEventsDisabled.size,
						y = t <= g,
						d = function(e, t) {
							var r = 1 < arguments.length && void 0 !== t ? t : null === globalThis || void 0 === globalThis ? void 0 : globalThis.document,
								o = Ec(function(e) {
									var t = e.target,
										n = ec(s.branches).some(function(e) {
											return e.contains(t)
										});
									y && !n && (i !== null && i !== void 0 && i(e), l !== null && l !== void 0 && l(e), e.defaultPrevented || (u === null || u === void 0 ? void 0 : u()))
								}),
								i = X.useRef(!1),
								a = X.useRef(function() {});
							return X.useEffect(function() {
								function e(e) {
									var t, n;
									e.target && !i.current ? (t = function() {
										_c("dismissableLayer.pointerDownOutside", o, n, {
											discrete: !0
										})
									}, n = {
										originalEvent: e
									}, "touch" === e.pointerType ? (r.removeEventListener("click", a.current), a.current = t, r.addEventListener("click", a.current, {
										once: !0
									})) : t()) : r.removeEventListener("click", a.current), i.current = !1
								}
								var t = window.setTimeout(function() {
									r.addEventListener("pointerdown", e)
								}, 0);
								return function() {
									window.clearTimeout(t), r.removeEventListener("pointerdown", e), r.removeEventListener("click", a.current)
								}
							}, [r, o]), {
								onPointerDownCapture: function() {
									return i.current = !0
								}
							}
						}(function(e) {
							var t = e.target,
								n = ec(s.branches).some(function(e) {
									return e.contains(t)
								});
							y && !n && (i !== null && i !== void 0 && i(e), l !== null && l !== void 0 && l(e), e.defaultPrevented || (u === null || u === void 0 ? void 0 : u()))
						}, m),
						t = function(e, t) {
							var n = 1 < arguments.length && void 0 !== t ? t : null === globalThis || void 0 === globalThis ? void 0 : globalThis.document,
								r = Ec(function(e) {
									var t = e.target;
									ec(s.branches).some(function(e) {
										return e.contains(t)
									}) || (a !== null && a !== void 0 && a(e), l !== null && l !== void 0 && l(e), e.defaultPrevented || (u === null || u === void 0 ? void 0 : u()))
								}),
								o = X.useRef(!1);
							return X.useEffect(function() {
								function e(e) {
									e.target && !o.current && _c("dismissableLayer.focusOutside", r, {
										originalEvent: e
									}, {
										discrete: !1
									})
								}
								return n.addEventListener("focusin", e),
									function() {
										return n.removeEventListener("focusin", e)
									}
							}, [n, r]), {
								onFocusCapture: function() {
									return o.current = !0
								},
								onBlurCapture: function() {
									return o.current = !1
								}
							}
						}(function(e) {
							var t = e.target;
							ec(s.branches).some(function(e) {
								return e.contains(t)
							}) || (a !== null && a !== void 0 && a(e), l !== null && l !== void 0 && l(e), e.defaultPrevented || (u === null || u === void 0 ? void 0 : u()))
						}, m);
					return Pc(function(e) {
						g === s.layers.size - 1 && (null != o && o(e), !e.defaultPrevented && u && (e.preventDefault(), u()))
					}, m), X.useEffect(function() {
						if (f) return r && (0 === s.layersWithOutsidePointerEventsDisabled.size && (Tc = m.body.style.pointerEvents, m.body.style.pointerEvents = "none"), s.layersWithOutsidePointerEventsDisabled.add(f)), s.layers.add(f), Nc(),
							function() {
								r && 1 === s.layersWithOutsidePointerEventsDisabled.size && (m.body.style.pointerEvents = Tc)
							}
					}, [f, m, r, s]), X.useEffect(function() {
						return function() {
							f && (s.layers.delete(f), s.layersWithOutsidePointerEventsDisabled.delete(f), Nc())
						}
					}, [f, s]), X.useEffect(function() {
						function e() {
							return v({})
						}
						return document.addEventListener(Oc, e),
							function() {
								return document.removeEventListener(Oc, e)
							}
					}, []), (0, su.jsx)(xc.div, rc(rc({}, c), {}, {
						ref: n,
						style: rc({
							pointerEvents: h ? y ? "auto" : "none" : void 0
						}, e.style),
						onFocusCapture: yc(e.onFocusCapture, t.onFocusCapture),
						onBlurCapture: yc(e.onBlurCapture, t.onBlurCapture),
						onPointerDownCapture: yc(e.onPointerDownCapture, d.onPointerDownCapture)
					}))
				});

			function Nc() {
				var e = new CustomEvent(Oc);
				document.dispatchEvent(e)
			}

			function _c(e, t, n, r) {
				var o, i, a = r.discrete,
					r = n.originalEvent.target,
					n = new CustomEvent(e, {
						bubbles: !1,
						cancelable: !0,
						detail: n
					});
				t && r.addEventListener(e, t, {
					once: !0
				}), a ? (i = n, (o = r) && _.flushSync(function() {
					return o.dispatchEvent(i)
				})) : r.dispatchEvent(n)
			}
			Ac.displayName = "DismissableLayer", X.forwardRef(function(e, t) {
				var n = X.useContext(kc),
					r = X.useRef(null),
					t = wc(t, r);
				return X.useEffect(function() {
					var e = r.current;
					if (e) return n.branches.add(e),
						function() {
							n.branches.delete(e)
						}
				}, [n.branches]), (0, su.jsx)(xc.div, rc(rc({}, e), {}, {
					ref: t
				}))
			}).displayName = "DismissableLayerBranch";
			var Rc = 0;

			function Lc() {
				var e = document.createElement("span");
				return e.setAttribute("data-radix-focus-guard", ""), e.tabIndex = 0, e.style.outline = "none", e.style.opacity = "0", e.style.position = "fixed", e.style.pointerEvents = "none", e
			}

			function Dc(e, t) {
				if ("function" == typeof e) return e(t);
				null != e && (e.current = t)
			}

			function Mc() {
				for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++) t[n] = arguments[n];
				return X.useCallback(function() {
					for (var e = arguments.length, o = new Array(e), t = 0; t < e; t++) o[t] = arguments[t];
					return function(t) {
						var n = !1,
							r = o.map(function(e) {
								e = Dc(e, t);
								return n || "function" != typeof e || (n = !0), e
							});
						if (n) return function() {
							for (var e = 0; e < r.length; e++) {
								var t = r[e];
								"function" == typeof t ? t() : Dc(o[e], null)
							}
						}
					}
				}.apply(void 0, t), t)
			}

			function Fc(e) {
				var t = X.forwardRef(function(e, t) {
					var n, r, o = e.children,
						i = Qu(e, ["children"]),
						t = Mc(X.isValidElement(o) ? (n = o, e = null === (r = Object.getOwnPropertyDescriptor(n.props, "ref")) || void 0 === r ? void 0 : r.get, e && "isReactWarning" in e && e.isReactWarning ? n.ref : (e = null === (r = Object.getOwnPropertyDescriptor(n, "ref")) || void 0 === r ? void 0 : r.get) && "isReactWarning" in e && e.isReactWarning ? n.props.ref : n.props.ref || n.ref) : void 0, t);
					if (X.isValidElement(o)) {
						i = function(r, o) {
							var e, i = rc({}, o);
							for (e in o) ! function(e) {
								var t = r[e],
									n = o[e];
								/^on[A-Z]/.test(e) ? t && n ? i[e] = function() {
									var e = n.apply(void 0, arguments);
									return t.apply(void 0, arguments), e
								} : t && (i[e] = t) : "style" === e ? i[e] = rc(rc({}, t), n) : "className" === e && (i[e] = [t, n].filter(Boolean).join(" "))
							}(e);
							return rc(rc({}, r), i)
						}(i, o.props);
						return o.type !== X.Fragment && (i.ref = t), X.cloneElement(o, i)
					}
					return 1 < X.Children.count(o) ? X.Children.only(null) : null
				});
				return t.displayName = "".concat(e, ".SlotClone"), t
			}
			var jc = Symbol("radix.slottable");

			function Uc(e) {
				return X.isValidElement(e) && "function" == typeof e.type && "__radixId" in e.type && e.type.__radixId === jc
			}
			var Bc = ["a", "button", "div", "form", "h2", "h3", "img", "input", "label", "li", "nav", "ol", "p", "select", "span", "svg", "ul"].reduce(function(e, r) {
				var t, a, n, o = (t = "Primitive.".concat(r), a = Fc(t), (n = X.forwardRef(function(e, t) {
						var n = e.children,
							r = Qu(e, ["children"]),
							e = X.Children.toArray(n),
							o = e.find(Uc);
						if (o) {
							var i = o.props.children,
								e = e.map(function(e) {
									return e === o ? 1 < X.Children.count(i) ? X.Children.only(null) : X.isValidElement(i) ? i.props.children : null : e
								});
							return (0, su.jsx)(a, rc(rc({}, r), {}, {
								ref: t,
								children: X.isValidElement(i) ? X.cloneElement(i, void 0, e) : null
							}))
						}
						return (0, su.jsx)(a, rc(rc({}, r), {}, {
							ref: t,
							children: n
						}))
					})).displayName = "".concat(t, ".Slot"), n),
					n = X.forwardRef(function(e, t) {
						var n = e.asChild,
							e = Qu(e, ["asChild"]),
							n = n ? o : r;
						return "undefined" != typeof window && (window[Symbol.for("radix-ui")] = !0), (0, su.jsx)(n, rc(rc({}, e), {}, {
							ref: t
						}))
					});
				return n.displayName = "Primitive.".concat(r), rc(rc({}, e), {}, oc({}, r, n))
			}, {});

			function Gc(e) {
				var o = X.useRef(e);
				return X.useEffect(function() {
					o.current = e
				}), X.useMemo(function() {
					return function() {
						for (var e, t = arguments.length, n = new Array(t), r = 0; r < t; r++) n[r] = arguments[r];
						return null === (e = o.current) || void 0 === e ? void 0 : e.call.apply(e, [o].concat(n))
					}
				}, [])
			}
			var Hc = "focusScope.autoFocusOnMount",
				Wc = "focusScope.autoFocusOnUnmount",
				zc = {
					bubbles: !1,
					cancelable: !0
				},
				Vc = X.forwardRef(function(e, t) {
					var n = e.loop,
						i = void 0 !== n && n,
						r = e.trapped,
						a = void 0 !== r && r,
						o = e.onMountAutoFocus,
						n = e.onUnmountAutoFocus,
						r = Qu(e, ["loop", "trapped", "onMountAutoFocus", "onUnmountAutoFocus"]),
						e = ic(X.useState(null), 2),
						l = e[0],
						u = e[1],
						c = Gc(o),
						s = Gc(n),
						d = X.useRef(null),
						n = Mc(t, function(e) {
							return u(e)
						}),
						f = X.useRef({
							paused: !1,
							pause: function() {
								this.paused = !0
							},
							resume: function() {
								this.paused = !1
							}
						}).current;
					X.useEffect(function() {
						if (a) {
							var e = function(e) {
									!f.paused && l && (e = e.target, l.contains(e) ? d.current = e : Kc(d.current, {
										select: !0
									}))
								},
								t = function(e) {
									f.paused || !l || null !== (e = e.relatedTarget) && (l.contains(e) || Kc(d.current, {
										select: !0
									}))
								};
							document.addEventListener("focusin", e), document.addEventListener("focusout", t);
							var n = new MutationObserver(function(e) {
								if (document.activeElement === document.body) {
									var t, n = Zu(e);
									try {
										for (n.s(); !(t = n.n()).done;) 0 < t.value.removedNodes.length && Kc(l)
									} catch (e) {
										n.e(e)
									} finally {
										n.f()
									}
								}
							});
							return l && n.observe(l, {
									childList: !0,
									subtree: !0
								}),
								function() {
									document.removeEventListener("focusin", e), document.removeEventListener("focusout", t), n.disconnect()
								}
						}
					}, [a, l, f.paused]), X.useEffect(function() {
						if (l) {
							$c.add(f);
							var e, t = document.activeElement;
							return l.contains(t) || (e = new CustomEvent(Hc, zc), l.addEventListener(Hc, c), l.dispatchEvent(e), e.defaultPrevented || (function(e, t) {
									var n, r = void 0 !== (t = (1 < arguments.length && void 0 !== t ? t : {}).select) && t,
										o = document.activeElement,
										i = Zu(e);
									try {
										for (i.s(); !(n = i.n()).done;)
											if (Kc(n.value, {
													select: r
												}), document.activeElement !== o) return
									} catch (e) {
										i.e(e)
									} finally {
										i.f()
									}
								}(qc(l).filter(function(e) {
									return "A" !== e.tagName
								}), {
									select: !0
								}), document.activeElement === t && Kc(l))),
								function() {
									l.removeEventListener(Hc, c), setTimeout(function() {
										var e = new CustomEvent(Wc, zc);
										l.addEventListener(Wc, s), l.dispatchEvent(e), e.defaultPrevented || Kc(null != t ? t : document.body, {
											select: !0
										}), l.removeEventListener(Wc, s), $c.remove(f)
									}, 0)
								}
						}
					}, [l, c, s, f]);
					t = X.useCallback(function(e) {
						var t, n, r, o;
						(i || a) && (f.paused || (o = "Tab" === e.key && !e.altKey && !e.ctrlKey && !e.metaKey, t = document.activeElement, o && t && (n = e.currentTarget, r = (o = ic([Jc(o = qc(r = n), r), Jc(o.reverse(), r)], 2))[0], o = o[1], r && o ? e.shiftKey || t !== o ? e.shiftKey && t === r && (e.preventDefault(), i && Kc(o, {
							select: !0
						})) : (e.preventDefault(), i && Kc(r, {
							select: !0
						})) : t === n && e.preventDefault())))
					}, [i, a, f.paused]);
					return (0, su.jsx)(Bc.div, rc(rc({
						tabIndex: -1
					}, r), {}, {
						ref: n,
						onKeyDown: t
					}))
				});

			function qc(e) {
				for (var t = [], n = document.createTreeWalker(e, NodeFilter.SHOW_ELEMENT, {
						acceptNode: function(e) {
							var t = "INPUT" === e.tagName && "hidden" === e.type;
							return !(e.disabled || e.hidden || t) && 0 <= e.tabIndex ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP
						}
					}); n.nextNode();) t.push(n.currentNode);
				return t
			}

			function Jc(e, t) {
				var n = Zu(e);
				try {
					for (n.s(); !(r = n.n()).done;) {
						var r = r.value;
						if (! function(e, t) {
								var n = t.upTo;
								if ("hidden" === getComputedStyle(e).visibility) return !0;
								for (; e;) {
									if (void 0 !== n && e === n) return !1;
									if ("none" === getComputedStyle(e).display) return !0;
									e = e.parentElement
								}
								return !1
							}(r, {
								upTo: t
							})) return r
					}
				} catch (e) {
					n.e(e)
				} finally {
					n.f()
				}
			}

			function Kc(e, t) {
				var n = (1 < arguments.length && void 0 !== t ? t : {}).select,
					t = void 0 !== n && n;
				e && e.focus && (n = document.activeElement, e.focus({
					preventScroll: !0
				}), e !== n && e instanceof HTMLInputElement && "select" in e && t && e.select())
			}
			Vc.displayName = "FocusScope";
			var Xc, $c = (Xc = [], {
				add: function(e) {
					var t = Xc[0];
					e !== t && null != t && t.pause(), (Xc = Yc(Xc, e)).unshift(e)
				},
				remove: function(e) {
					null !== (e = (Xc = Yc(Xc, e))[0]) && void 0 !== e && e.resume()
				}
			});

			function Yc(e, t) {
				e = ec(e), t = e.indexOf(t);
				return -1 !== t && e.splice(t, 1), e
			}
			var Zc = ["top", "right", "bottom", "left"],
				Qc = Math.min,
				es = Math.max,
				ts = Math.round,
				ns = Math.floor,
				rs = function(e) {
					return {
						x: e,
						y: e
					}
				},
				os = {
					left: "right",
					right: "left",
					bottom: "top",
					top: "bottom"
				},
				is = {
					start: "end",
					end: "start"
				};

			function as(e, t, n) {
				return es(e, Qc(t, n))
			}

			function ls(e, t) {
				return "function" == typeof e ? e(t) : e
			}

			function us(e) {
				return e.split("-")[0]
			}

			function cs(e) {
				return e.split("-")[1]
			}

			function ss(e) {
				return "x" === e ? "y" : "x"
			}

			function ds(e) {
				return "y" === e ? "height" : "width"
			}

			function fs(e) {
				return ["top", "bottom"].includes(us(e)) ? "y" : "x"
			}

			function ps(e) {
				return ss(fs(e))
			}

			function ms(e) {
				return e.replace(/start|end/g, function(e) {
					return is[e]
				})
			}

			function vs(e) {
				return e.replace(/left|right|bottom|top/g, function(e) {
					return os[e]
				})
			}

			function hs(e) {
				return "number" != typeof e ? rc({
					top: 0,
					right: 0,
					bottom: 0,
					left: 0
				}, e) : {
					top: e,
					right: e,
					bottom: e,
					left: e
				}
			}

			function gs(e) {
				var t = e.x,
					n = e.y,
					r = e.width,
					e = e.height;
				return {
					width: r,
					height: e,
					top: n,
					left: t,
					right: t + r,
					bottom: n + e,
					x: t,
					y: n
				}
			}

			function ys(e, t, n) {
				var r, o = e.reference,
					i = e.floating,
					a = fs(t),
					l = ps(t),
					u = ds(l),
					e = us(t),
					c = "y" === a,
					s = o.x + o.width / 2 - i.width / 2,
					d = o.y + o.height / 2 - i.height / 2,
					f = o[u] / 2 - i[u] / 2;
				switch (e) {
					case "top":
						r = {
							x: s,
							y: o.y - i.height
						};
						break;
					case "bottom":
						r = {
							x: s,
							y: o.y + o.height
						};
						break;
					case "right":
						r = {
							x: o.x + o.width,
							y: d
						};
						break;
					case "left":
						r = {
							x: o.x - i.width,
							y: d
						};
						break;
					default:
						r = {
							x: o.x,
							y: o.y
						}
				}
				switch (cs(t)) {
					case "start":
						r[l] -= f * (n && c ? -1 : 1);
						break;
					case "end":
						r[l] += f * (n && c ? -1 : 1)
				}
				return r
			}

			function bs() {
				return ws.apply(this, arguments)
			}

			function ws() {
				return (ws = Yu(regeneratorRuntime.mark(function e(t, n) {
					var r, o, i, a, l, u, c, s, d, f, p, m, v, h, g, y;
					return regeneratorRuntime.wrap(function(e) {
						for (;;) switch (e.prev = e.next) {
							case 0:
								return void 0 === n && (n = {}), r = t.x, o = t.y, i = t.platform, a = t.rects, l = t.elements, u = t.strategy, f = ls(n, t), p = f.boundary, c = void 0 === p ? "clippingAncestors" : p, d = f.rootBoundary, s = void 0 === d ? "viewport" : d, p = f.elementContext, d = void 0 === p ? "floating" : p, p = f.altBoundary, p = void 0 !== p && p, f = f.padding, f = hs(void 0 === f ? 0 : f), p = l[p ? "floating" === d ? "reference" : "floating" : d], e.t0 = gs, e.t1 = i, e.next = 24, null == i.isElement ? void 0 : i.isElement(p);
							case 24:
								if (e.t3 = y = e.sent, e.t2 = null == e.t3, e.t2) {
									e.next = 28;
									break
								}
								e.t2 = y;
							case 28:
								if (!e.t2) {
									e.next = 32;
									break
								}
								e.t4 = p, e.next = 38;
								break;
							case 32:
								if (e.t5 = p.contextElement, e.t5) {
									e.next = 37;
									break
								}
								return e.next = 36, null == i.getDocumentElement ? void 0 : i.getDocumentElement(l.floating);
							case 36:
								e.t5 = e.sent;
							case 37:
								e.t4 = e.t5;
							case 38:
								return e.t6 = e.t4, e.t7 = c, e.t8 = s, e.t9 = u, e.t10 = {
									element: e.t6,
									boundary: e.t7,
									rootBoundary: e.t8,
									strategy: e.t9
								}, e.next = 45, e.t1.getClippingRect.call(e.t1, e.t10);
							case 45:
								return e.t11 = e.sent, m = (0, e.t0)(e.t11), v = "floating" === d ? {
									x: r,
									y: o,
									width: a.floating.width,
									height: a.floating.height
								} : a.reference, e.next = 50, null == i.getOffsetParent ? void 0 : i.getOffsetParent(l.floating);
							case 50:
								return h = e.sent, e.next = 53, null == i.isElement ? void 0 : i.isElement(h);
							case 53:
								if (e.t13 = e.sent, e.t13) return e.next = 57, null == i.getScale ? void 0 : i.getScale(h);
								e.next = 58;
								break;
							case 57:
								e.t13 = e.sent;
							case 58:
								if (e.t12 = e.t13, e.t12) {
									e.next = 61;
									break
								}
								e.t12 = {
									x: 1,
									y: 1
								};
							case 61:
								if (g = e.t12, e.t14 = gs, i.convertOffsetParentRelativeRectToViewportRelativeRect) return e.next = 66, i.convertOffsetParentRelativeRectToViewportRelativeRect({
									elements: l,
									rect: v,
									offsetParent: h,
									strategy: u
								});
								e.next = 69;
								break;
							case 66:
								e.t15 = e.sent, e.next = 70;
								break;
							case 69:
								e.t15 = v;
							case 70:
								return e.t16 = e.t15, y = (0, e.t14)(e.t16), e.abrupt("return", {
									top: (m.top - y.top + f.top) / g.y,
									bottom: (y.bottom - m.bottom + f.bottom) / g.y,
									left: (m.left - y.left + f.left) / g.x,
									right: (y.right - m.right + f.right) / g.x
								});
							case 73:
							case "end":
								return e.stop()
						}
					}, e)
				}))).apply(this, arguments)
			}

			function Ss(e, t) {
				return {
					top: e.top - t.height,
					right: e.right - t.width,
					bottom: e.bottom - t.height,
					left: e.left - t.width
				}
			}

			function Cs(t) {
				return Zc.some(function(e) {
					return 0 <= t[e]
				})
			}

			function Is() {
				return "undefined" != typeof window
			}

			function xs(e) {
				return Ts(e) ? (e.nodeName || "").toLowerCase() : "#document"
			}

			function Es(e) {
				var t;
				return (null == e || null == (t = e.ownerDocument) ? void 0 : t.defaultView) || window
			}

			function Ps(e) {
				return null == (e = (Ts(e) ? e.ownerDocument : e.document) || window.document) ? void 0 : e.documentElement
			}

			function Ts(e) {
				return Is() && (e instanceof Node || e instanceof Es(e).Node)
			}

			function Os(e) {
				return !!Is() && (e instanceof Element || e instanceof Es(e).Element)
			}

			function ks(e) {
				return !!Is() && (e instanceof HTMLElement || e instanceof Es(e).HTMLElement)
			}

			function As(e) {
				return !(!Is() || "undefined" == typeof ShadowRoot) && (e instanceof ShadowRoot || e instanceof Es(e).ShadowRoot)
			}

			function Ns(e) {
				var t = Ms(e),
					n = t.overflow,
					r = t.overflowX,
					e = t.overflowY,
					t = t.display;
				return /auto|scroll|overlay|hidden|clip/.test(n + e + r) && !["inline", "contents"].includes(t)
			}

			function _s(t) {
				return [":popover-open", ":modal"].some(function(e) {
					try {
						return t.matches(e)
					} catch (e) {
						return !1
					}
				})
			}

			function Rs(e) {
				var t = Ls(),
					n = Os(e) ? Ms(e) : e;
				return ["transform", "translate", "scale", "rotate", "perspective"].some(function(e) {
					return !!n[e] && "none" !== n[e]
				}) || !!n.containerType && "normal" !== n.containerType || !t && !!n.backdropFilter && "none" !== n.backdropFilter || !t && !!n.filter && "none" !== n.filter || ["transform", "translate", "scale", "rotate", "perspective", "filter"].some(function(e) {
					return (n.willChange || "").includes(e)
				}) || ["paint", "layout", "strict", "content"].some(function(e) {
					return (n.contain || "").includes(e)
				})
			}

			function Ls() {
				return !("undefined" == typeof CSS || !CSS.supports) && CSS.supports("-webkit-backdrop-filter", "none")
			}

			function Ds(e) {
				return ["html", "body", "#document"].includes(xs(e))
			}

			function Ms(e) {
				return Es(e).getComputedStyle(e)
			}

			function Fs(e) {
				return Os(e) ? {
					scrollLeft: e.scrollLeft,
					scrollTop: e.scrollTop
				} : {
					scrollLeft: e.scrollX,
					scrollTop: e.scrollY
				}
			}

			function js(e) {
				if ("html" === xs(e)) return e;
				e = e.assignedSlot || e.parentNode || As(e) && e.host || Ps(e);
				return As(e) ? e.host : e
			}

			function Us(e, t, n) {
				void 0 === t && (t = []), void 0 === n && (n = !0);
				var r = function e(t) {
						var n = js(t);
						return Ds(n) ? (t.ownerDocument || t).body : ks(n) && Ns(n) ? n : e(n)
					}(e),
					e = r === (null == (o = e.ownerDocument) ? void 0 : o.body),
					o = Es(r);
				if (e) {
					e = Bs(o);
					return t.concat(o, o.visualViewport || [], Ns(r) ? r : [], e && n ? Us(e) : [])
				}
				return t.concat(r, Us(r, [], n))
			}

			function Bs(e) {
				return e.parent && Object.getPrototypeOf(e.parent) ? e.frameElement : null
			}

			function Gs(e) {
				var t = Ms(e),
					n = parseFloat(t.width) || 0,
					r = parseFloat(t.height) || 0,
					o = ks(e),
					t = o ? e.offsetWidth : n,
					o = o ? e.offsetHeight : r,
					e = ts(n) !== t || ts(r) !== o;
				return e && (n = t, r = o), {
					width: n,
					height: r,
					$: e
				}
			}

			function Hs(e) {
				return Os(e) ? e : e.contextElement
			}

			function Ws(e) {
				var t = Hs(e);
				if (!ks(t)) return rs(1);
				var n = t.getBoundingClientRect(),
					r = Gs(t),
					e = r.width,
					t = r.height,
					r = r.$,
					e = (r ? ts(n.width) : n.width) / e,
					t = (r ? ts(n.height) : n.height) / t;
				return e && Number.isFinite(e) || (e = 1), t && Number.isFinite(t) || (t = 1), {
					x: e,
					y: t
				}
			}
			var zs = rs(0);

			function Vs(e) {
				e = Es(e);
				return Ls() && e.visualViewport ? {
					x: e.visualViewport.offsetLeft,
					y: e.visualViewport.offsetTop
				} : zs
			}

			function qs(e, t, n, r) {
				void 0 === t && (t = !1), void 0 === n && (n = !1);
				var o = e.getBoundingClientRect(),
					i = Hs(e),
					a = rs(1);
				t && (r ? Os(r) && (a = Ws(r)) : a = Ws(e));
				var n = (void 0 === (n = n) && (n = !1), !r || n && r !== Es(i) || !n ? rs(0) : Vs(i)),
					l = (o.left + n.x) / a.x,
					u = (o.top + n.y) / a.y,
					c = o.width / a.x,
					s = o.height / a.y;
				if (i)
					for (var i = Es(i), d = r && Os(r) ? Es(r) : r, f = i, p = Bs(f); p && r && d !== f;) {
						var m = Ws(p),
							v = p.getBoundingClientRect(),
							h = Ms(p),
							g = v.left + (p.clientLeft + parseFloat(h.paddingLeft)) * m.x,
							h = v.top + (p.clientTop + parseFloat(h.paddingTop)) * m.y;
						l *= m.x, u *= m.y, c *= m.x, s *= m.y, l += g, u += h, p = Bs(f = Es(p))
					}
				return gs({
					width: c,
					height: s,
					x: l,
					y: u
				})
			}

			function Js(e, t) {
				var n = Fs(e).scrollLeft;
				return t ? t.left + n : qs(Ps(e)).left + n
			}

			function Ks(e, t, n) {
				void 0 === n && (n = !1);
				var r = e.getBoundingClientRect();
				return {
					x: r.left + t.scrollLeft - (n ? 0 : Js(e, r)),
					y: r.top + t.scrollTop
				}
			}

			function Xs(e, t, n) {
				var r, o, i, a, l, u, c, s, d, f;
				return gs("viewport" === t ? (a = n, l = Es(e), u = Ps(e), c = l.visualViewport, s = u.clientWidth, d = u.clientHeight, l = f = 0, c && (s = c.width, d = c.height, (!(u = Ls()) || u && "fixed" === a) && (f = c.offsetLeft, l = c.offsetTop)), {
					width: s,
					height: d,
					x: f,
					y: l
				}) : "document" === t ? (r = Ps(e), d = Ps(r), o = Fs(r), f = r.ownerDocument.body, l = es(d.scrollWidth, d.clientWidth, f.scrollWidth, f.clientWidth), i = es(d.scrollHeight, d.clientHeight, f.scrollHeight, f.clientHeight), r = -o.scrollLeft + Js(r), o = -o.scrollTop, "rtl" === Ms(f).direction && (r += es(d.clientWidth, f.clientWidth) - l), {
					width: l,
					height: i,
					x: r,
					y: o
				}) : Os(t) ? (r = qs(i = t, !0, "fixed" === n), o = r.top + i.clientTop, n = r.left + i.clientLeft, r = ks(i) ? Ws(i) : rs(1), {
					width: i.clientWidth * r.x,
					height: i.clientHeight * r.y,
					x: n * r.x,
					y: o * r.y
				}) : (e = Vs(e), {
					x: t.x - e.x,
					y: t.y - e.y,
					width: t.width,
					height: t.height
				}))
			}

			function $s(e, t, n) {
				var r = ks(t),
					o = Ps(t),
					i = "fixed" === n,
					a = qs(e, !0, i, t),
					l = {
						scrollLeft: 0,
						scrollTop: 0
					},
					n = rs(0);
				!r && (r || i) || ("body" === xs(t) && !Ns(o) || (l = Fs(t)), r ? (e = qs(t, !0, i, t), n.x = e.x + t.clientLeft, n.y = e.y + t.clientTop) : o && (n.x = Js(o)));
				o = !o || r || i ? rs(0) : Ks(o, l);
				return {
					x: a.left + l.scrollLeft - n.x - o.x,
					y: a.top + l.scrollTop - n.y - o.y,
					width: a.width,
					height: a.height
				}
			}

			function Ys(e) {
				return "static" === Ms(e).position
			}

			function Zs(e, t) {
				if (!ks(e) || "fixed" === Ms(e).position) return null;
				if (t) return t(e);
				t = e.offsetParent;
				return Ps(e) === t && (t = t.ownerDocument.body), t
			}

			function Qs(t, e) {
				var n = Es(t);
				if (_s(t)) return n;
				if (!ks(t)) {
					for (var r = js(t); r && !Ds(r);) {
						if (Os(r) && !Ys(r)) return r;
						r = js(r)
					}
					return n
				}
				for (var o = Zs(t, e); o && ["table", "td", "th"].includes(xs(o)) && Ys(o);) o = Zs(o, e);
				return (!(o && Ds(o) && Ys(o)) || Rs(o)) && (o || function() {
					for (var e = js(t); ks(e) && !Ds(e);) {
						if (Rs(e)) return e;
						if (_s(e)) return null;
						e = js(e)
					}
					return null
				}()) || n
			}
			var ed, td = {
				convertOffsetParentRelativeRectToViewportRelativeRect: function(e) {
					var t = e.elements,
						n = e.rect,
						r = e.offsetParent,
						o = "fixed" === e.strategy,
						i = Ps(r),
						a = !!t && _s(t.floating);
					if (r === i || a && o) return n;
					var l = {
							scrollLeft: 0,
							scrollTop: 0
						},
						u = rs(1),
						e = rs(0),
						t = ks(r);
					(t || !t && !o) && ("body" === xs(r) && !Ns(i) || (l = Fs(r)), ks(r)) && (a = qs(r), u = Ws(r), e.x = a.x + r.clientLeft, e.y = a.y + r.clientTop);
					i = !i || t || o ? rs(0) : Ks(i, l, !0);
					return {
						width: n.width * u.x,
						height: n.height * u.y,
						x: n.x * u.x - l.scrollLeft * u.x + e.x + i.x,
						y: n.y * u.y - l.scrollTop * u.y + e.y + i.y
					}
				},
				getDocumentElement: Ps,
				getClippingRect: function(e) {
					var n = e.element,
						t = e.boundary,
						r = e.rootBoundary,
						o = e.strategy,
						t = [].concat(ec("clippingAncestors" === t ? _s(n) ? [] : function(e, t) {
							var n = t.get(e);
							if (n) return n;
							for (var r = Us(e, [], !1).filter(function(e) {
									return Os(e) && "body" !== xs(e)
								}), o = null, i = "fixed" === Ms(e).position, a = i ? js(e) : e; Os(a) && !Ds(a);) {
								var l = Ms(a),
									u = Rs(a);
								u || "fixed" !== l.position || (o = null), (i ? !u && !o : !u && "static" === l.position && o && ["absolute", "fixed"].includes(o.position) || Ns(a) && !u && function e(t, n) {
									t = js(t);
									return !(t === n || !Os(t) || Ds(t)) && ("fixed" === Ms(t).position || e(t, n))
								}(e, a)) ? r = r.filter(function(e) {
									return e !== a
								}) : o = l, a = js(a)
							}
							return t.set(e, r), r
						}(n, this._c) : [].concat(t)), [r]),
						r = t[0],
						r = t.reduce(function(e, t) {
							t = Xs(n, t, o);
							return e.top = es(t.top, e.top), e.right = Qc(t.right, e.right), e.bottom = Qc(t.bottom, e.bottom), e.left = es(t.left, e.left), e
						}, Xs(n, r, o));
					return {
						width: r.right - r.left,
						height: r.bottom - r.top,
						x: r.left,
						y: r.top
					}
				},
				getOffsetParent: Qs,
				getElementRects: (ed = Yu(regeneratorRuntime.mark(function e(t) {
					var n, r, o;
					return regeneratorRuntime.wrap(function(e) {
						for (;;) switch (e.prev = e.next) {
							case 0:
								return n = this.getOffsetParent || Qs, r = this.getDimensions, e.next = 4, r(t.floating);
							case 4:
								return o = e.sent, e.t0 = $s, e.t1 = t.reference, e.next = 9, n(t.floating);
							case 9:
								return e.t2 = e.sent, e.t3 = t.strategy, e.t4 = (0, e.t0)(e.t1, e.t2, e.t3), e.t5 = {
									x: 0,
									y: 0,
									width: o.width,
									height: o.height
								}, e.abrupt("return", {
									reference: e.t4,
									floating: e.t5
								});
							case 14:
							case "end":
								return e.stop()
						}
					}, e, this)
				})), function(e) {
					return ed.apply(this, arguments)
				}),
				getClientRects: function(e) {
					return Array.from(e.getClientRects())
				},
				getDimensions: function(e) {
					e = Gs(e);
					return {
						width: e.width,
						height: e.height
					}
				},
				getScale: Ws,
				isElement: Os,
				isRTL: function(e) {
					return "rtl" === Ms(e).direction
				}
			};

			function nd(e, t) {
				return e.x === t.x && e.y === t.y && e.width === t.width && e.height === t.height
			}

			function rd(k) {
				return void 0 === k && (k = {}), {
					name: "flip",
					options: k,
					fn: function(O) {
						return Yu(regeneratorRuntime.mark(function e() {
							var r, o, i, a, l, u, c, s, d, f, p, m, v, h, g, y, b, w, S, C, I, x, E, P, T;
							return regeneratorRuntime.wrap(function(e) {
								for (;;) switch (e.prev = e.next) {
									case 0:
										if (r = O.placement, o = O.middlewareData, i = O.rects, a = O.initialPlacement, l = O.platform, u = O.elements, C = ls(k, O), m = C.mainAxis, c = void 0 === m || m, p = C.crossAxis, s = void 0 === p || p, d = C.fallbackPlacements, v = C.fallbackStrategy, f = void 0 === v ? "bestFit" : v, m = C.fallbackAxisSideDirection, p = void 0 === m ? "none" : m, v = C.flipAlignment, m = void 0 === v || v, v = Qu(C, ["mainAxis", "crossAxis", "fallbackPlacements", "fallbackStrategy", "fallbackAxisSideDirection", "flipAlignment"]), null != (C = o.arrow) && C.alignmentOffset) return e.abrupt("return", {});
										e.next = 3;
										break;
									case 3:
										return h = us(r), g = fs(a), y = us(a) === a, e.next = 8, null == l.isRTL ? void 0 : l.isRTL(u.floating);
									case 8:
										return b = e.sent, x = d || (y || !m ? [vs(a)] : (n = void 0, n = vs(t = a), [ms(t), n, ms(n)])), w = "none" !== p, !d && w && x.push.apply(x, ec(function(e, t, n, r) {
											var o = cs(e),
												r = function(e, t, n) {
													var r = ["left", "right"],
														o = ["right", "left"];
													switch (e) {
														case "top":
														case "bottom":
															return n ? t ? o : r : t ? r : o;
														case "left":
														case "right":
															return t ? ["top", "bottom"] : ["bottom", "top"];
														default:
															return []
													}
												}(us(e), "start" === n, r);
											return o && (r = r.map(function(e) {
												return e + "-" + o
											}), t && (r = r.concat(r.map(ms)))), r
										}(a, m, p, b))), S = [a].concat(ec(x)), e.next = 15, bs(O, v);
									case 15:
										if (C = e.sent, x = [], I = (null == (I = o.flip) ? void 0 : I.overflows) || [], c && x.push(C[h]), s && (E = function(e, t, n) {
												void 0 === n && (n = !1);
												var r = cs(e),
													o = ps(e),
													e = ds(o),
													r = "x" === o ? r === (n ? "end" : "start") ? "right" : "left" : "start" === r ? "bottom" : "top";
												return t.reference[e] > t.floating[e] && (r = vs(r)), [r, vs(r)]
											}(r, i, b), x.push(C[E[0]], C[E[1]])), I = [].concat(ec(I), [{
												placement: r,
												overflows: x
											}]), x.every(function(e) {
												return e <= 0
											})) {
											e.next = 34;
											break
										}
										if (x = ((null == (E = o.flip) ? void 0 : E.index) || 0) + 1, E = S[x]) return e.abrupt("return", {
											data: {
												index: x,
												overflows: I
											},
											reset: {
												placement: E
											}
										});
										e.next = 23;
										break;
									case 23:
										if (P = null == (T = I.filter(function(e) {
												return e.overflows[0] <= 0
											}).sort(function(e, t) {
												return e.overflows[1] - t.overflows[1]
											})[0]) ? void 0 : T.placement) {
											e.next = 32;
											break
										}
										e.t0 = f, e.next = "bestFit" === e.t0 ? 28 : "initialPlacement" === e.t0 ? 31 : 32;
										break;
									case 28:
										return (T = null == (T = I.filter(function(e) {
											if (w) {
												e = fs(e.placement);
												return e === g || "y" === e
											}
											return !0
										}).map(function(e) {
											return [e.placement, e.overflows.filter(function(e) {
												return 0 < e
											}).reduce(function(e, t) {
												return e + t
											}, 0)]
										}).sort(function(e, t) {
											return e[1] - t[1]
										})[0]) ? void 0 : T[0]) && (P = T), e.abrupt("break", 32);
									case 31:
										P = a;
									case 32:
										if (r !== P) return e.abrupt("return", {
											reset: {
												placement: P
											}
										});
										e.next = 34;
										break;
									case 34:
										return e.abrupt("return", {});
									case 35:
									case "end":
										return e.stop()
								}
								var t, n
							}, e)
						}))()
					}
				}
			}

			function od(O) {
				return {
					name: "arrow",
					options: O,
					fn: function(T) {
						return Yu(regeneratorRuntime.mark(function e() {
							var t, n, r, o, i, a, l, u, c, s, d, f, p, m, v, h, g, y, b, w, S, C, I, x, E, P;
							return regeneratorRuntime.wrap(function(e) {
								for (;;) switch (e.prev = e.next) {
									case 0:
										if (t = T.x, n = T.y, r = T.placement, o = T.rects, i = T.platform, a = T.elements, l = T.middlewareData, P = ls(O, T) || {}, c = void 0 === (E = P.padding) ? 0 : E, null == (u = P.element)) return e.abrupt("return", {});
										e.next = 3;
										break;
									case 3:
										return s = hs(c), d = {
											x: t,
											y: n
										}, f = ps(r), p = ds(f), e.next = 9, i.getDimensions(u);
									case 9:
										return m = e.sent, v = (S = "y" === f) ? "top" : "left", h = S ? "bottom" : "right", g = S ? "clientHeight" : "clientWidth", y = o.reference[p] + o.reference[f] - d[f] - o.floating[p], b = d[f] - o.reference[f], e.next = 18, null == i.getOffsetParent ? void 0 : i.getOffsetParent(u);
									case 18:
										if (C = e.sent, w = C ? C[g] : 0, e.t0 = w, e.t0) return e.next = 24, null == i.isElement ? void 0 : i.isElement(C);
										e.next = 25;
										break;
									case 24:
										e.t0 = e.sent;
									case 25:
										if (e.t1 = e.t0, e.t1) {
											e.next = 28;
											break
										}
										w = a.floating[g] || o.floating[p];
									case 28:
										return x = y / 2 - b / 2, I = w / 2 - m[p] / 2 - 1, E = Qc(s[v], I), P = Qc(s[h], I), S = E, C = w - m[p] - P, I = w / 2 - m[p] / 2 + x, x = as(S, I, C), E = !l.arrow && null != cs(r) && I !== x && o.reference[p] / 2 - (I < S ? E : P) - m[p] / 2 < 0, P = E ? I < S ? I - S : I - C : 0, e.abrupt("return", (oc(S = {}, f, d[f] + P), oc(S, "data", rc((oc(C = {}, f, x), oc(C, "centerOffset", I - x - P), C), E && {
											alignmentOffset: P
										})), oc(S, "reset", E), S));
									case 30:
									case "end":
										return e.stop()
								}
							}, e)
						}))()
					}
				}
			}
			var id = "undefined" != typeof document ? X.useLayoutEffect : X.useEffect;

			function ad(e, t) {
				if (e === t) return 1;
				if (Xu(e) == Xu(t)) {
					if ("function" == typeof e && e.toString() === t.toString()) return 1;
					var n, r, o;
					if (e && t && "object" == Xu(e)) {
						if (Array.isArray(e)) {
							if ((n = e.length) !== t.length) return;
							for (r = n; 0 != r--;)
								if (!ad(e[r], t[r])) return;
							return 1
						}
						if ((n = (o = Object.keys(e)).length) !== Object.keys(t).length) return;
						for (r = n; 0 != r--;)
							if (!{}.hasOwnProperty.call(t, o[r])) return;
						for (r = n; 0 != r--;) {
							var i = o[r];
							if (!("_owner" === i && e.$$typeof || ad(e[i], t[i]))) return
						}
						return 1
					}
					return e != e && t != t
				}
			}

			function ld(e) {
				return "undefined" != typeof window && (e.ownerDocument.defaultView || window).devicePixelRatio || 1
			}

			function ud(e, t) {
				e = ld(e);
				return Math.round(t * e) / e
			}

			function cd(e) {
				var t = X.useRef(e);
				return id(function() {
					t.current = e
				}), t
			}

			function sd(e, t) {
				return rc(rc({}, (void 0 === (c = e) && (c = 0), {
					name: "offset",
					options: c,
					fn: function(u) {
						return Yu(regeneratorRuntime.mark(function e() {
							var t, n, r, o, i, a, l;
							return regeneratorRuntime.wrap(function(e) {
								for (;;) switch (e.prev = e.next) {
									case 0:
										return r = u.x, o = u.y, i = u.placement, a = u.middlewareData, e.next = 6,
											function() {
												var n = Yu(regeneratorRuntime.mark(function e(t, n) {
													var r, o, i, a, l, u, c, s;
													return regeneratorRuntime.wrap(function(e) {
														for (;;) switch (e.prev = e.next) {
															case 0:
																return r = t.placement, l = t.platform, c = t.elements, e.next = 5, null == l.isRTL ? void 0 : l.isRTL(c.floating);
															case 5:
																return u = e.sent, s = us(r), o = cs(r), i = "y" === fs(r), a = ["left", "top"].includes(s) ? -1 : 1, l = u && i ? -1 : 1, c = ls(n, t), s = "number" == typeof c ? {
																	mainAxis: c,
																	crossAxis: 0,
																	alignmentAxis: null
																} : {
																	mainAxis: c.mainAxis || 0,
																	crossAxis: c.crossAxis || 0,
																	alignmentAxis: c.alignmentAxis
																}, u = s.mainAxis, c = s.crossAxis, s = s.alignmentAxis, e.abrupt("return", (o && "number" == typeof s && (c = "end" === o ? -1 * s : s), i ? {
																	x: c * l,
																	y: u * a
																} : {
																	x: u * a,
																	y: c * l
																}));
															case 14:
															case "end":
																return e.stop()
														}
													}, e)
												}));
												return function(e, t) {
													return n.apply(this, arguments)
												}
											}()(u, c);
									case 6:
										return l = e.sent, e.abrupt("return", i === (null == (t = a.offset) ? void 0 : t.placement) && null != (n = a.arrow) && n.alignmentOffset ? {} : {
											x: r + l.x,
											y: o + l.y,
											data: rc(rc({}, l), {}, {
												placement: i
											})
										});
									case 8:
									case "end":
										return e.stop()
								}
							}, e)
						}))()
					}
				})), {}, {
					options: [e, t]
				});
				var c
			}

			function dd(e, t) {
				return rc(rc({}, (void 0 === (h = e) && (h = {}), {
					name: "shift",
					options: h,
					fn: function(v) {
						return Yu(regeneratorRuntime.mark(function e() {
							var t, n, r, o, i, a, l, u, c, s, d, f, p, m;
							return regeneratorRuntime.wrap(function(e) {
								for (;;) switch (e.prev = e.next) {
									case 0:
										return t = v.x, n = v.y, r = v.placement, f = ls(h, v), c = f.mainAxis, o = void 0 === c || c, s = f.crossAxis, i = void 0 !== s && s, d = f.limiter, a = void 0 === d ? {
											fn: function(e) {
												return {
													x: e.x,
													y: e.y
												}
											}
										} : d, p = Qu(f, ["mainAxis", "crossAxis", "limiter"]), l = {
											x: t,
											y: n
										}, e.next = 14, bs(v, p);
									case 14:
										return u = e.sent, c = fs(us(r)), s = ss(c), d = l[s], f = l[c], o && (p = "y" === s ? "bottom" : "right", d = as(d + u["y" === s ? "top" : "left"], d, d - u[p])), i && (m = "y" === c ? "bottom" : "right", f = as(f + u["y" === c ? "top" : "left"], f, f - u[m])), m = a.fn(rc(rc({}, v), {}, (oc(m = {}, s, d), oc(m, c, f), m))), e.abrupt("return", rc(rc({}, m), {}, {
											data: {
												x: m.x - t,
												y: m.y - n,
												enabled: (oc(m = {}, s, o), oc(m, c, i), m)
											}
										}));
									case 22:
									case "end":
										return e.stop()
								}
							}, e)
						}))()
					}
				})), {}, {
					options: [e, t]
				});
				var h
			}

			function fd(e, t) {
				return rc(rc({}, (void 0 === (p = e) && (p = {}), {
					options: p,
					fn: function(e) {
						var t, n, r = e.x,
							o = e.y,
							i = e.placement,
							a = e.rects,
							l = e.middlewareData,
							u = ls(p, e),
							c = u.offset,
							s = void 0 === c ? 0 : c,
							d = u.mainAxis,
							f = void 0 === d || d,
							c = u.crossAxis,
							d = void 0 === c || c,
							u = {
								x: r,
								y: o
							},
							c = fs(i),
							r = ss(c),
							o = u[r],
							u = u[c],
							s = ls(s, e),
							e = "number" == typeof s ? {
								mainAxis: s,
								crossAxis: 0
							} : rc({
								mainAxis: 0,
								crossAxis: 0
							}, s);
						return f && (s = "y" === r ? "height" : "width", f = a.reference[r] - a.floating[s] + e.mainAxis, s = a.reference[r] + a.reference[s] - e.mainAxis, o < f ? o = f : s < o && (o = s)), d && (d = "y" === r ? "width" : "height", n = ["top", "left"].includes(us(i)), t = a.reference[c] - a.floating[d] + (n && (null == (t = l.offset) ? void 0 : t[c]) || 0) + (n ? 0 : e.crossAxis), n = a.reference[c] + a.reference[d] + (!n && (null == (l = l.offset) ? void 0 : l[c]) || 0) - (n ? e.crossAxis : 0), u < t ? u = t : n < u && (u = n)), oc(n = {}, r, o), oc(n, c, u), n
					}
				})), {}, {
					options: [e, t]
				});
				var p
			}

			function pd(e, t) {
				return rc(rc({}, (void 0 === (S = e) && (S = {}), {
					name: "size",
					options: S,
					fn: function(w) {
						return Yu(regeneratorRuntime.mark(function e() {
							var t, n, r, o, i, a, l, u, c, s, d, f, p, m, v, h, g, y, b;
							return regeneratorRuntime.wrap(function(e) {
								for (;;) switch (e.prev = e.next) {
									case 0:
										return t = w.placement, n = w.rects, r = w.platform, o = w.elements, m = ls(S, w), v = m.apply, i = void 0 === v ? function() {} : v, h = Qu(m, ["apply"]), e.next = 10, bs(w, h);
									case 10:
										if (a = e.sent, l = us(t), u = cs(t), c = "y" === fs(t), y = n.floating, s = y.width, d = y.height, "top" === l || "bottom" === l) return f = l, e.t0 = u, e.next = 22, null == r.isRTL ? void 0 : r.isRTL(o.floating);
										e.next = 36;
										break;
									case 22:
										if (!e.sent) {
											e.next = 26;
											break
										}
										e.t1 = "start", e.next = 27;
										break;
									case 26:
										e.t1 = "end";
									case 27:
										if (e.t2 = e.t1, e.t0 !== e.t2) {
											e.next = 32;
											break
										}
										e.t3 = "left", e.next = 33;
										break;
									case 32:
										e.t3 = "right";
									case 33:
										p = e.t3, e.next = 37;
										break;
									case 36:
										p = l, f = "end" === u ? "top" : "bottom";
									case 37:
										return g = d - a.top - a.bottom, v = s - a.left - a.right, m = Qc(d - a[f], g), h = Qc(s - a[p], v), y = !w.middlewareData.shift, b = m, m = h, null != (h = w.middlewareData.shift) && h.enabled.x && (m = v), null != (h = w.middlewareData.shift) && h.enabled.y && (b = g), y && !u && (v = es(a.left, 0), h = es(a.right, 0), g = es(a.top, 0), y = es(a.bottom, 0), c ? m = s - 2 * (0 !== v || 0 !== h ? v + h : es(a.left, a.right)) : b = d - 2 * (0 !== g || 0 !== y ? g + y : es(a.top, a.bottom))), e.next = 42, i(rc(rc({}, w), {}, {
											availableWidth: m,
											availableHeight: b
										}));
									case 42:
										return e.next = 44, r.getDimensions(o.floating);
									case 44:
										return b = e.sent, e.abrupt("return", s !== b.width || d !== b.height ? {
											reset: {
												rects: !0
											}
										} : {});
									case 46:
									case "end":
										return e.stop()
								}
							}, e)
						}))()
					}
				})), {}, {
					options: [e, t]
				});
				var S
			}

			function md(e, t) {
				return rc(rc({}, (void 0 === (a = e) && (a = {}), {
					name: "hide",
					options: a,
					fn: function(i) {
						return Yu(regeneratorRuntime.mark(function e() {
							var t, n, r, o;
							return regeneratorRuntime.wrap(function(e) {
								for (;;) switch (e.prev = e.next) {
									case 0:
										t = i.rects, r = ls(a, i), n = r.strategy, n = void 0 === n ? "referenceHidden" : n, r = Qu(r, ["strategy"]), e.t0 = n, e.next = "referenceHidden" === e.t0 ? 4 : "escaped" === e.t0 ? 11 : 18;
										break;
									case 4:
										return e.t1 = Ss, e.next = 7, bs(i, rc(rc({}, r), {}, {
											elementContext: "reference"
										}));
									case 7:
										return e.t2 = e.sent, e.t3 = t.reference, o = (0, e.t1)(e.t2, e.t3), e.abrupt("return", {
											data: {
												referenceHiddenOffsets: o,
												referenceHidden: Cs(o)
											}
										});
									case 11:
										return e.t4 = Ss, e.next = 14, bs(i, rc(rc({}, r), {}, {
											altBoundary: !0
										}));
									case 14:
										return e.t5 = e.sent, e.t6 = t.floating, o = (0, e.t4)(e.t5, e.t6), e.abrupt("return", {
											data: {
												escapedOffsets: o,
												escaped: Cs(o)
											}
										});
									case 18:
										return e.abrupt("return", {});
									case 19:
									case "end":
										return e.stop()
								}
							}, e)
						}))()
					}
				})), {}, {
					options: [e, t]
				});
				var a
			}

			function vd(e, t) {
				return rc(rc({}, {
					name: "arrow",
					options: r = e,
					fn: function(e) {
						var t = "function" == typeof r ? r(e) : r,
							n = t.element,
							t = t.padding;
						return n && {}.hasOwnProperty.call(n, "current") ? null != n.current ? od({
							element: n.current,
							padding: t
						}).fn(e) : {} : n ? od({
							element: n,
							padding: t
						}).fn(e) : {}
					}
				}), {}, {
					options: [e, t]
				});
				var r
			}

			function hd(e, t) {
				if ("function" == typeof e) return e(t);
				null != e && (e.current = t)
			}

			function gd(e) {
				var t = X.forwardRef(function(e, t) {
					var n, r, o = e.children,
						i = Qu(e, ["children"]),
						t = function() {
							for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++) t[n] = arguments[n];
							return X.useCallback(function() {
								for (var e = arguments.length, o = new Array(e), t = 0; t < e; t++) o[t] = arguments[t];
								return function(t) {
									var n = !1,
										r = o.map(function(e) {
											e = hd(e, t);
											return n || "function" != typeof e || (n = !0), e
										});
									if (n) return function() {
										for (var e = 0; e < r.length; e++) {
											var t = r[e];
											"function" == typeof t ? t() : hd(o[e], null)
										}
									}
								}
							}.apply(void 0, t), t)
						}(X.isValidElement(o) ? (n = o, e = null === (r = Object.getOwnPropertyDescriptor(n.props, "ref")) || void 0 === r ? void 0 : r.get, e && "isReactWarning" in e && e.isReactWarning ? n.ref : (e = null === (r = Object.getOwnPropertyDescriptor(n, "ref")) || void 0 === r ? void 0 : r.get) && "isReactWarning" in e && e.isReactWarning ? n.props.ref : n.props.ref || n.ref) : void 0, t);
					if (X.isValidElement(o)) {
						i = function(r, o) {
							var e, i = rc({}, o);
							for (e in o) ! function(e) {
								var t = r[e],
									n = o[e];
								/^on[A-Z]/.test(e) ? t && n ? i[e] = function() {
									var e = n.apply(void 0, arguments);
									return t.apply(void 0, arguments), e
								} : t && (i[e] = t) : "style" === e ? i[e] = rc(rc({}, t), n) : "className" === e && (i[e] = [t, n].filter(Boolean).join(" "))
							}(e);
							return rc(rc({}, r), i)
						}(i, o.props);
						return o.type !== X.Fragment && (i.ref = t), X.cloneElement(o, i)
					}
					return 1 < X.Children.count(o) ? X.Children.only(null) : null
				});
				return t.displayName = "".concat(e, ".SlotClone"), t
			}
			var yd = Symbol("radix.slottable");

			function bd(e) {
				return X.isValidElement(e) && "function" == typeof e.type && "__radixId" in e.type && e.type.__radixId === yd
			}
			var wd = ["a", "button", "div", "form", "h2", "h3", "img", "input", "label", "li", "nav", "ol", "p", "select", "span", "svg", "ul"].reduce(function(e, r) {
				var t, a, n, o = (t = "Primitive.".concat(r), a = gd(t), (n = X.forwardRef(function(e, t) {
						var n = e.children,
							r = Qu(e, ["children"]),
							e = X.Children.toArray(n),
							o = e.find(bd);
						if (o) {
							var i = o.props.children,
								e = e.map(function(e) {
									return e === o ? 1 < X.Children.count(i) ? X.Children.only(null) : X.isValidElement(i) ? i.props.children : null : e
								});
							return (0, su.jsx)(a, rc(rc({}, r), {}, {
								ref: t,
								children: X.isValidElement(i) ? X.cloneElement(i, void 0, e) : null
							}))
						}
						return (0, su.jsx)(a, rc(rc({}, r), {}, {
							ref: t,
							children: n
						}))
					})).displayName = "".concat(t, ".Slot"), n),
					n = X.forwardRef(function(e, t) {
						var n = e.asChild,
							e = Qu(e, ["asChild"]),
							n = n ? o : r;
						return "undefined" != typeof window && (window[Symbol.for("radix-ui")] = !0), (0, su.jsx)(n, rc(rc({}, e), {}, {
							ref: t
						}))
					});
				return n.displayName = "Primitive.".concat(r), rc(rc({}, e), {}, oc({}, r, n))
			}, {});
			(oh = X.forwardRef(function(e, t) {
				var n = e.children,
					r = e.width,
					o = void 0 === r ? 10 : r,
					i = e.height,
					r = void 0 === i ? 5 : i,
					i = Qu(e, ["children", "width", "height"]);
				return (0, su.jsx)(wd.svg, rc(rc({}, i), {}, {
					ref: t,
					width: o,
					height: r,
					viewBox: "0 0 30 10",
					preserveAspectRatio: "none",
					children: e.asChild ? n : (0, su.jsx)("polygon", {
						points: "0,0 30,0 15,10"
					})
				}))
			})).displayName = "Arrow";
			var Sd = oh;

			function Cd(e, t) {
				if ("function" == typeof e) return e(t);
				null != e && (e.current = t)
			}

			function Id() {
				for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++) t[n] = arguments[n];
				return X.useCallback(function() {
					for (var e = arguments.length, o = new Array(e), t = 0; t < e; t++) o[t] = arguments[t];
					return function(t) {
						var n = !1,
							r = o.map(function(e) {
								e = Cd(e, t);
								return n || "function" != typeof e || (n = !0), e
							});
						if (n) return function() {
							for (var e = 0; e < r.length; e++) {
								var t = r[e];
								"function" == typeof t ? t() : Cd(o[e], null)
							}
						}
					}
				}.apply(void 0, t), t)
			}

			function xd() {
				for (var e = arguments.length, n = new Array(e), t = 0; t < e; t++) n[t] = arguments[t];
				var o = n[0];
				if (1 === n.length) return o;

				function r() {
					var t = n.map(function(e) {
						return {
							useScope: e(),
							scopeName: e.scopeName
						}
					});
					return function(r) {
						var e = t.reduce(function(e, t) {
							var n = t.useScope,
								t = t.scopeName;
							return rc(rc({}, e), n(r)["__scope".concat(t)])
						}, {});
						return X.useMemo(function() {
							return oc({}, "__scope".concat(o.scopeName), e)
						}, [e])
					}
				}
				return r.scopeName = o.scopeName, r
			}

			function Ed(e) {
				var t = X.forwardRef(function(e, t) {
					var n, r, o = e.children,
						i = Qu(e, ["children"]),
						t = Id(X.isValidElement(o) ? (n = o, e = null === (r = Object.getOwnPropertyDescriptor(n.props, "ref")) || void 0 === r ? void 0 : r.get, e && "isReactWarning" in e && e.isReactWarning ? n.ref : (e = null === (r = Object.getOwnPropertyDescriptor(n, "ref")) || void 0 === r ? void 0 : r.get) && "isReactWarning" in e && e.isReactWarning ? n.props.ref : n.props.ref || n.ref) : void 0, t);
					if (X.isValidElement(o)) {
						i = function(r, o) {
							var e, i = rc({}, o);
							for (e in o) ! function(e) {
								var t = r[e],
									n = o[e];
								/^on[A-Z]/.test(e) ? t && n ? i[e] = function() {
									var e = n.apply(void 0, arguments);
									return t.apply(void 0, arguments), e
								} : t && (i[e] = t) : "style" === e ? i[e] = rc(rc({}, t), n) : "className" === e && (i[e] = [t, n].filter(Boolean).join(" "))
							}(e);
							return rc(rc({}, r), i)
						}(i, o.props);
						return o.type !== X.Fragment && (i.ref = t), X.cloneElement(o, i)
					}
					return 1 < X.Children.count(o) ? X.Children.only(null) : null
				});
				return t.displayName = "".concat(e, ".SlotClone"), t
			}
			var Pd = Symbol("radix.slottable");

			function Td(e) {
				return X.isValidElement(e) && "function" == typeof e.type && "__radixId" in e.type && e.type.__radixId === Pd
			}
			var Od = ["a", "button", "div", "form", "h2", "h3", "img", "input", "label", "li", "nav", "ol", "p", "select", "span", "svg", "ul"].reduce(function(e, r) {
					var t, a, n, o = (t = "Primitive.".concat(r), a = Ed(t), (n = X.forwardRef(function(e, t) {
							var n = e.children,
								r = Qu(e, ["children"]),
								e = X.Children.toArray(n),
								o = e.find(Td);
							if (o) {
								var i = o.props.children,
									e = e.map(function(e) {
										return e === o ? 1 < X.Children.count(i) ? X.Children.only(null) : X.isValidElement(i) ? i.props.children : null : e
									});
								return (0, su.jsx)(a, rc(rc({}, r), {}, {
									ref: t,
									children: X.isValidElement(i) ? X.cloneElement(i, void 0, e) : null
								}))
							}
							return (0, su.jsx)(a, rc(rc({}, r), {}, {
								ref: t,
								children: n
							}))
						})).displayName = "".concat(t, ".Slot"), n),
						n = X.forwardRef(function(e, t) {
							var n = e.asChild,
								e = Qu(e, ["asChild"]),
								n = n ? o : r;
							return "undefined" != typeof window && (window[Symbol.for("radix-ui")] = !0), (0, su.jsx)(n, rc(rc({}, e), {}, {
								ref: t
							}))
						});
					return n.displayName = "Primitive.".concat(r), rc(rc({}, e), {}, oc({}, r, n))
				}, {}),
				kd = null !== globalThis && void 0 !== globalThis && globalThis.document ? X.useLayoutEffect : function() {},
				Kl = ($i = ic(function(l, e) {
					var t = 1 < arguments.length && void 0 !== e ? e : [],
						u = [],
						e = function() {
							var n = u.map(function(e) {
								return X.createContext(e)
							});
							return function(e) {
								var t = (null == e ? void 0 : e[l]) || n;
								return X.useMemo(function() {
									return oc({}, "__scope".concat(l), rc(rc({}, e), {}, oc({}, l, t)))
								}, [e, t])
							}
						};
					return e.scopeName = l, [function(r, o) {
						var i = X.createContext(o),
							a = u.length;
						u = [].concat(ec(u), [o]);

						function e(e) {
							var t = e.scope,
								n = e.children,
								r = Qu(e, ["scope", "children"]),
								t = (null == t || null === (o = t[l]) || void 0 === o ? void 0 : o[a]) || i,
								o = X.useMemo(function() {
									return r
								}, Object.values(r));
							return (0, su.jsx)(t.Provider, {
								value: o,
								children: n
							})
						}
						return e.displayName = r + "Provider", [e, function(e, t) {
							var n = (null == t || null === (n = t[l]) || void 0 === n ? void 0 : n[a]) || i,
								n = X.useContext(n);
							if (n) return n;
							if (void 0 !== o) return o;
							throw new Error("`".concat(e, "` must be used within `").concat(r, "`"))
						}]
					}, xd.apply(void 0, [e].concat(ec(t)))]
				}(ql = "Popper"), 2))[0],
				lt = $i[1],
				Ad = (Ki = ic(Kl(ql), 2))[0],
				Nd = Ki[1];
			(et = function(e) {
				var t = e.__scopePopper,
					n = e.children,
					r = ic(X.useState(null), 2),
					e = r[0],
					r = r[1];
				return (0, su.jsx)(Ad, {
					scope: t,
					anchor: e,
					onAnchorChange: r,
					children: n
				})
			}).displayName = ql;
			var _d = "PopperAnchor";
			(Lu = X.forwardRef(function(e, t) {
				var n = e.__scopePopper,
					r = e.virtualRef,
					e = Qu(e, ["__scopePopper", "virtualRef"]),
					o = Nd(_d, n),
					i = X.useRef(null),
					t = Id(t, i);
				return X.useEffect(function() {
					o.onAnchorChange((null == r ? void 0 : r.current) || i.current)
				}), r ? null : (0, su.jsx)(Od.div, rc(rc({}, e), {}, {
					ref: t
				}))
			})).displayName = _d;
			var Rd = "PopperContent",
				Ld = (oe = ic(Kl(Rd), 2))[0],
				Dd = oe[1];
			(mm = X.forwardRef(function(e, t) {
				var n, o, r, i, a, l, u = e.__scopePopper,
					c = e.side,
					s = void 0 === c ? "bottom" : c,
					d = e.sideOffset,
					f = void 0 === d ? 0 : d,
					p = e.align,
					m = void 0 === p ? "center" : p,
					v = e.alignOffset,
					h = void 0 === v ? 0 : v,
					g = e.arrowPadding,
					y = void 0 === g ? 0 : g,
					b = e.avoidCollisions,
					w = void 0 === b || b,
					S = e.collisionBoundary,
					C = void 0 === S ? [] : S,
					I = e.collisionPadding,
					x = void 0 === I ? 0 : I,
					E = e.sticky,
					c = void 0 === E ? "partial" : E,
					d = e.hideWhenDetached,
					p = void 0 !== d && d,
					v = e.updatePositionStrategy,
					P = void 0 === v ? "optimized" : v,
					g = e.onPlaced,
					b = Qu(e, ["__scopePopper", "side", "sideOffset", "align", "alignOffset", "arrowPadding", "avoidCollisions", "collisionBoundary", "collisionPadding", "sticky", "hideWhenDetached", "updatePositionStrategy", "onPlaced"]),
					S = Nd(Rd, u),
					I = ic(X.useState(null), 2),
					T = I[0],
					O = I[1],
					E = Id(t, function(e) {
						return O(e)
					}),
					d = ic(X.useState(null), 2),
					v = d[0],
					I = d[1],
					t = (a = v, t = ic(X.useState(void 0), 2), d = t[0], l = t[1], kd(function() {
						if (a) {
							l({
								width: a.offsetWidth,
								height: a.offsetHeight
							});
							var e = new ResizeObserver(function(e) {
								var t, n;
								Array.isArray(e) && e.length && (n = "borderBoxSize" in (e = e[0]) ? (t = e.borderBoxSize, t = (n = Array.isArray(t) ? t[0] : t).inlineSize, n.blockSize) : (t = a.offsetWidth, a.offsetHeight), l({
									width: t,
									height: n
								}))
							});
							return e.observe(a, {
									box: "border-box"
								}),
								function() {
									return e.unobserve(a)
								}
						}
						l(void 0)
					}, [a]), d),
					d = null !== (d = null == t ? void 0 : t.width) && void 0 !== d ? d : 0,
					t = null !== (t = null == t ? void 0 : t.height) && void 0 !== t ? t : 0,
					s = s + ("center" !== m ? "-" + m : ""),
					m = "number" == typeof x ? x : rc({
						top: 0,
						right: 0,
						bottom: 0,
						left: 0
					}, x),
					x = Array.isArray(C) ? C : [C],
					C = 0 < x.length,
					C = {
						padding: m,
						boundary: x.filter(jd),
						altBoundary: C
					},
					w = function(e) {
						void 0 === e && (e = {});
						var t = e.placement,
							i = void 0 === t ? "bottom" : t,
							n = e.strategy,
							a = void 0 === n ? "absolute" : n,
							r = e.middleware,
							o = void 0 === r ? [] : r,
							l = e.platform,
							u = e.elements,
							t = (u = void 0 === u ? {} : u).reference,
							n = u.floating,
							r = e.transform,
							c = void 0 === r || r,
							u = e.whileElementsMounted,
							s = e.open,
							r = ic(X.useState({
								x: 0,
								y: 0,
								strategy: a,
								placement: i,
								middlewareData: {},
								isPositioned: !1
							}), 2),
							d = r[0],
							f = r[1],
							e = ic(X.useState(o), 2),
							p = e[0],
							r = e[1];
						ad(p, o) || r(o);
						var e = ic(X.useState(null), 2),
							r = e[0],
							m = e[1],
							o = ic(X.useState(null), 2),
							e = o[0],
							v = o[1],
							h = X.useCallback(function(e) {
								e !== w.current && (w.current = e, m(e))
							}, []),
							g = X.useCallback(function(e) {
								e !== S.current && (S.current = e, v(e))
							}, []),
							y = t || r,
							b = n || e,
							w = X.useRef(null),
							S = X.useRef(null),
							C = X.useRef(d),
							e = null != u,
							I = cd(u),
							x = cd(l),
							E = cd(s),
							P = X.useCallback(function() {
								var e, t, n, r, o;
								w.current && S.current && (o = {
									placement: i,
									strategy: a,
									middleware: p
								}, x.current && (o.platform = x.current), e = w.current, t = S.current, n = o, o = new Map, n = rc({
									platform: td
								}, n), o = rc(rc({}, n.platform), {}, {
									_c: o
								}), r = Yu(regeneratorRuntime.mark(function e(t, n, r) {
									var o, i, a, l, u, c, s, d, f, p, m, v, h, g, y, b, w;
									return regeneratorRuntime.wrap(function(e) {
										for (;;) switch (e.prev = e.next) {
											case 0:
												return a = r.placement, o = void 0 === a ? "bottom" : a, l = r.strategy, i = void 0 === l ? "absolute" : l, a = r.middleware, l = void 0 === a ? [] : a, a = r.platform, l = l.filter(Boolean), e.next = 10, null == a.isRTL ? void 0 : a.isRTL(n);
											case 10:
												return u = e.sent, e.next = 13, a.getElementRects({
													reference: t,
													floating: n,
													strategy: i
												});
											case 13:
												c = e.sent, v = ys(c, o, u), s = v.x, d = v.y, f = o, p = {}, v = m = 0;
											case 21:
												if (v < l.length) return g = l[v], h = g.name, y = g.fn, e.next = 27, y({
													x: s,
													y: d,
													initialPlacement: o,
													placement: f,
													strategy: i,
													middlewareData: p,
													rects: c,
													platform: a,
													elements: {
														reference: t,
														floating: n
													}
												});
												e.next = 56;
												break;
											case 27:
												if (w = e.sent, g = w.x, y = w.y, b = w.data, w = w.reset, s = null != g ? g : s, d = null != y ? y : d, p = rc(rc({}, p), {}, oc({}, h, rc(rc({}, p[h]), b))), e.t0 = w && m <= 50, !e.t0) {
													e.next = 53;
													break
												}
												if (m++, e.t1 = "object" == Xu(w), !e.t1) {
													e.next = 52;
													break
												}
												if (w.placement && (f = w.placement), e.t2 = w.rects, !e.t2) {
													e.next = 51;
													break
												}
												if (!0 === w.rects) return e.next = 46, a.getElementRects({
													reference: t,
													floating: n,
													strategy: i
												});
												e.next = 49;
												break;
											case 46:
												e.t3 = e.sent, e.next = 50;
												break;
											case 49:
												e.t3 = w.rects;
											case 50:
												c = e.t3;
											case 51:
												b = ys(c, f, u), s = b.x, d = b.y;
											case 52:
												v = -1;
											case 53:
												v++, e.next = 21;
												break;
											case 56:
												return e.abrupt("return", {
													x: s,
													y: d,
													placement: f,
													strategy: i,
													middlewareData: p
												});
											case 57:
											case "end":
												return e.stop()
										}
									}, e)
								})), function() {
									return r.apply(this, arguments)
								}(e, t, rc(rc({}, n), {}, {
									platform: o
								})).then(function(e) {
									var t = rc(rc({}, e), {}, {
										isPositioned: !1 !== E.current
									});
									T.current && !ad(C.current, t) && (C.current = t, _.flushSync(function() {
										f(t)
									}))
								}))
							}, [p, i, a, x, E]);
						id(function() {
							!1 === s && C.current.isPositioned && (C.current.isPositioned = !1, f(function(e) {
								return rc(rc({}, e), {}, {
									isPositioned: !1
								})
							}))
						}, [s]);
						var T = X.useRef(!1);
						id(function() {
							return T.current = !0,
								function() {
									T.current = !1
								}
						}, []), id(function() {
							if (y && (w.current = y), b && (S.current = b), y && b) {
								if (I.current) return I.current(y, b, P);
								P()
							}
						}, [y, b, P, I, e]);
						var O = X.useMemo(function() {
								return {
									reference: w,
									floating: S,
									setReference: h,
									setFloating: g
								}
							}, [h, g]),
							k = X.useMemo(function() {
								return {
									reference: y,
									floating: b
								}
							}, [y, b]),
							A = X.useMemo(function() {
								var e = {
									position: a,
									left: 0,
									top: 0
								};
								if (!k.floating) return e;
								var t = ud(k.floating, d.x),
									n = ud(k.floating, d.y);
								return c ? rc(rc({}, e), {}, {
									transform: "translate(" + t + "px, " + n + "px)"
								}, 1.5 <= ld(k.floating) && {
									willChange: "transform"
								}) : {
									position: a,
									left: t,
									top: n
								}
							}, [a, c, k.floating, d.x, d.y]);
						return X.useMemo(function() {
							return rc(rc({}, d), {}, {
								update: P,
								refs: O,
								elements: k,
								floatingStyles: A
							})
						}, [d, P, O, k, A])
					}({
						strategy: "fixed",
						placement: s,
						whileElementsMounted: function() {
							for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++) t[n] = arguments[n];
							return function(n, t, r, e) {
								void 0 === e && (e = {});
								var o = void 0 === (l = e.ancestorScroll) || l,
									i = void 0 === (a = e.ancestorResize) || a,
									a = void 0 === (l = e.elementResize) ? "function" == typeof ResizeObserver : l,
									l = void 0 === (l = e.layoutShift) ? "function" == typeof IntersectionObserver : l,
									u = void 0 !== (e = e.animationFrame) && e,
									c = Hs(n),
									s = o || i ? [].concat(ec(c ? Us(c) : []), ec(Us(t))) : [];
								s.forEach(function(e) {
									o && e.addEventListener("scroll", r, {
										passive: !0
									}), i && e.addEventListener("resize", r)
								});
								var d, f, p, m, v, h = c && l ? (f = r, m = null, v = Ps(d = c), function t(e, n) {
									void 0 === e && (e = !1), void 0 === n && (n = 1), g();
									var r = d.getBoundingClientRect(),
										o = r.left,
										i = r.top,
										a = r.width,
										l = r.height;
									if (e || f(), a && l) {
										var u = {
												rootMargin: -ns(i) + "px " + -ns(v.clientWidth - (o + a)) + "px " + -ns(v.clientHeight - (i + l)) + "px " + -ns(o) + "px",
												threshold: es(0, Qc(1, n)) || 1
											},
											c = !0;
										try {
											m = new IntersectionObserver(s, rc(rc({}, u), {}, {
												root: v.ownerDocument
											}))
										} catch (e) {
											m = new IntersectionObserver(s, u)
										}
										m.observe(d)
									}

									function s(e) {
										e = e[0].intersectionRatio;
										if (e !== n) {
											if (!c) return t();
											e ? t(!1, e) : p = setTimeout(function() {
												t(!1, 1e-7)
											}, 1e3)
										}
										1 !== e || nd(r, d.getBoundingClientRect()) || t(), c = !1
									}
								}(!0), g) : null;

								function g() {
									clearTimeout(p), null == m || m.disconnect(), m = null
								}
								var y, b = -1,
									w = null;
								a && (w = new ResizeObserver(function(e) {
									e = ic(e, 1)[0];
									e && e.target === c && w && (w.unobserve(t), cancelAnimationFrame(b), b = requestAnimationFrame(function() {
										null == w || w.observe(t)
									})), r()
								}), c && !u && w.observe(c), w.observe(t));
								var S = u ? qs(n) : null;
								return u && function e() {
										var t = qs(n);
										S && !nd(S, t) && r(), S = t, y = requestAnimationFrame(e)
									}(), r(),
									function() {
										s.forEach(function(e) {
											o && e.removeEventListener("scroll", r), i && e.removeEventListener("resize", r)
										}), null == h || h(), null == w || w.disconnect(), w = null, u && cancelAnimationFrame(y)
									}
							}.apply(void 0, t.concat([{
								animationFrame: "always" === P
							}]))
						},
						elements: {
							reference: S.anchor
						},
						middleware: [sd({
							mainAxis: f + t,
							alignmentAxis: h
						}), w && dd(rc({
							mainAxis: !0,
							crossAxis: !1,
							limiter: "partial" === c ? fd() : void 0
						}, C)), w && (r = rc({}, C), rc(rc({}, rd(r)), {}, {
							options: [r, i]
						})), pd(rc(rc({}, C), {}, {
							apply: function(e) {
								var t = e.elements,
									n = e.rects,
									r = e.availableWidth,
									o = e.availableHeight,
									e = n.reference,
									n = e.width,
									e = e.height,
									t = t.floating.style;
								t.setProperty("--radix-popper-available-width", "".concat(r, "px")), t.setProperty("--radix-popper-available-height", "".concat(o, "px")), t.setProperty("--radix-popper-anchor-width", "".concat(n, "px")), t.setProperty("--radix-popper-anchor-height", "".concat(e, "px"))
							}
						})), v && vd({
							element: v,
							padding: y
						}), Ud({
							arrowWidth: d,
							arrowHeight: t
						}), p && md(rc({
							strategy: "referenceHidden"
						}, C))]
					}),
					r = w.refs,
					i = w.floatingStyles,
					v = w.placement,
					k = w.isPositioned,
					y = w.middlewareData,
					d = ic(Bd(v), 2),
					t = d[0],
					p = d[1],
					A = (n = g, o = X.useRef(n), X.useEffect(function() {
						o.current = n
					}), X.useMemo(function() {
						return function() {
							for (var e, t = arguments.length, n = new Array(t), r = 0; r < t; r++) n[r] = arguments[r];
							return null === (e = o.current) || void 0 === e ? void 0 : e.call.apply(e, [o].concat(n))
						}
					}, []));
				kd(function() {
					k && null != A && A()
				}, [k, A]);
				var w = null === (C = y.arrow) || void 0 === C ? void 0 : C.x,
					d = null === (v = y.arrow) || void 0 === v ? void 0 : v.y,
					C = 0 !== (null === (g = y.arrow) || void 0 === g ? void 0 : g.centerOffset),
					v = ic(X.useState(), 2),
					g = v[0],
					N = v[1];
				return kd(function() {
					T && N(window.getComputedStyle(T).zIndex)
				}, [T]), (0, su.jsx)("div", {
					ref: r.setFloating,
					"data-radix-popper-content-wrapper": "",
					style: rc(rc({}, i), {}, {
						transform: k ? i.transform : "translate(0, -200%)",
						minWidth: "max-content",
						zIndex: g,
						"--radix-popper-transform-origin": [null === (g = y.transformOrigin) || void 0 === g ? void 0 : g.x, null === (g = y.transformOrigin) || void 0 === g ? void 0 : g.y].join(" ")
					}, (null === (y = y.hide) || void 0 === y ? void 0 : y.referenceHidden) && {
						visibility: "hidden",
						pointerEvents: "none"
					}),
					dir: e.dir,
					children: (0, su.jsx)(Ld, {
						scope: u,
						placedSide: t,
						onArrowChange: I,
						arrowX: w,
						arrowY: d,
						shouldHideArrow: C,
						children: (0, su.jsx)(Od.div, rc(rc({
							"data-side": t,
							"data-align": p
						}, b), {}, {
							ref: E,
							style: rc(rc({}, b.style), {}, {
								animation: k ? void 0 : "none"
							})
						}))
					})
				})
			})).displayName = Rd;
			var Md = "PopperArrow",
				Fd = {
					top: "bottom",
					right: "left",
					bottom: "top",
					left: "right"
				};

			function jd(e) {
				return null !== e
			}(tt = X.forwardRef(function(e, t) {
				var n = e.__scopePopper,
					r = Qu(e, ["__scopePopper"]),
					o = Dd(Md, n),
					e = Fd[o.placedSide];
				return (0, su.jsx)("span", {
					ref: o.onArrowChange,
					style: (oc(n = {
						position: "absolute",
						left: o.arrowX,
						top: o.arrowY
					}, e, 0), oc(n, "transformOrigin", {
						top: "",
						right: "0 0",
						bottom: "center 0",
						left: "100% 0"
					} [o.placedSide]), oc(n, "transform", {
						top: "translateY(100%)",
						right: "translateY(50%) rotate(90deg) translateX(-50%)",
						bottom: "rotate(180deg)",
						left: "translateY(50%) rotate(-90deg) translateX(50%)"
					} [o.placedSide]), oc(n, "visibility", o.shouldHideArrow ? "hidden" : void 0), n),
					children: (0, su.jsx)(Sd, rc(rc({}, r), {}, {
						ref: t,
						style: rc(rc({}, r.style), {}, {
							display: "block"
						})
					}))
				})
			})).displayName = Md;
			var Ud = function(c) {
				return {
					name: "transformOrigin",
					options: c,
					fn: function(e) {
						var t = e.placement,
							n = e.rects,
							r = e.middlewareData,
							o = 0 !== (null === (u = r.arrow) || void 0 === u ? void 0 : u.centerOffset),
							i = o ? 0 : c.arrowWidth,
							a = o ? 0 : c.arrowHeight,
							l = ic(Bd(t), 2),
							e = l[0],
							u = {
								start: "0%",
								center: "50%",
								end: "100%"
							} [l[1]],
							t = (null !== (l = null === (t = r.arrow) || void 0 === t ? void 0 : t.x) && void 0 !== l ? l : 0) + i / 2,
							r = (null !== (i = null === (l = r.arrow) || void 0 === l ? void 0 : l.y) && void 0 !== i ? i : 0) + a / 2,
							l = "",
							i = "";
						return "bottom" === e ? (l = o ? u : "".concat(t, "px"), i = -a + "px") : "top" === e ? (l = o ? u : "".concat(t, "px"), i = "".concat(n.floating.height + a, "px")) : "right" === e ? (l = -a + "px", i = o ? u : "".concat(r, "px")) : "left" === e && (l = "".concat(n.floating.width + a, "px"), i = o ? u : "".concat(r, "px")), {
							data: {
								x: l,
								y: i
							}
						}
					}
				}
			};

			function Bd(e) {
				var t = ic(e.split("-"), 2),
					e = t[0],
					t = t[1];
				return [e, void 0 === t ? "center" : t]
			}
			var Gd = et,
				Hd = Lu,
				Wd = mm,
				zd = tt;

			function Vd(e, t) {
				if ("function" == typeof e) return e(t);
				null != e && (e.current = t)
			}

			function qd(e) {
				var t = X.forwardRef(function(e, t) {
					var n, r, o = e.children,
						i = Qu(e, ["children"]),
						t = function() {
							for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++) t[n] = arguments[n];
							return X.useCallback(function() {
								for (var e = arguments.length, o = new Array(e), t = 0; t < e; t++) o[t] = arguments[t];
								return function(t) {
									var n = !1,
										r = o.map(function(e) {
											e = Vd(e, t);
											return n || "function" != typeof e || (n = !0), e
										});
									if (n) return function() {
										for (var e = 0; e < r.length; e++) {
											var t = r[e];
											"function" == typeof t ? t() : Vd(o[e], null)
										}
									}
								}
							}.apply(void 0, t), t)
						}(X.isValidElement(o) ? (n = o, e = null === (r = Object.getOwnPropertyDescriptor(n.props, "ref")) || void 0 === r ? void 0 : r.get, e && "isReactWarning" in e && e.isReactWarning ? n.ref : (e = null === (r = Object.getOwnPropertyDescriptor(n, "ref")) || void 0 === r ? void 0 : r.get) && "isReactWarning" in e && e.isReactWarning ? n.props.ref : n.props.ref || n.ref) : void 0, t);
					if (X.isValidElement(o)) {
						i = function(r, o) {
							var e, i = rc({}, o);
							for (e in o) ! function(e) {
								var t = r[e],
									n = o[e];
								/^on[A-Z]/.test(e) ? t && n ? i[e] = function() {
									var e = n.apply(void 0, arguments);
									return t.apply(void 0, arguments), e
								} : t && (i[e] = t) : "style" === e ? i[e] = rc(rc({}, t), n) : "className" === e && (i[e] = [t, n].filter(Boolean).join(" "))
							}(e);
							return rc(rc({}, r), i)
						}(i, o.props);
						return o.type !== X.Fragment && (i.ref = t), X.cloneElement(o, i)
					}
					return 1 < X.Children.count(o) ? X.Children.only(null) : null
				});
				return t.displayName = "".concat(e, ".SlotClone"), t
			}
			var Jd = Symbol("radix.slottable");

			function Kd(e) {
				return X.isValidElement(e) && "function" == typeof e.type && "__radixId" in e.type && e.type.__radixId === Jd
			}
			var Xd = ["a", "button", "div", "form", "h2", "h3", "img", "input", "label", "li", "nav", "ol", "p", "select", "span", "svg", "ul"].reduce(function(e, r) {
					var t, a, n, o = (t = "Primitive.".concat(r), a = qd(t), (n = X.forwardRef(function(e, t) {
							var n = e.children,
								r = Qu(e, ["children"]),
								e = X.Children.toArray(n),
								o = e.find(Kd);
							if (o) {
								var i = o.props.children,
									e = e.map(function(e) {
										return e === o ? 1 < X.Children.count(i) ? X.Children.only(null) : X.isValidElement(i) ? i.props.children : null : e
									});
								return (0, su.jsx)(a, rc(rc({}, r), {}, {
									ref: t,
									children: X.isValidElement(i) ? X.cloneElement(i, void 0, e) : null
								}))
							}
							return (0, su.jsx)(a, rc(rc({}, r), {}, {
								ref: t,
								children: n
							}))
						})).displayName = "".concat(t, ".Slot"), n),
						n = X.forwardRef(function(e, t) {
							var n = e.asChild,
								e = Qu(e, ["asChild"]),
								n = n ? o : r;
							return "undefined" != typeof window && (window[Symbol.for("radix-ui")] = !0), (0, su.jsx)(n, rc(rc({}, e), {}, {
								ref: t
							}))
						});
					return n.displayName = "Primitive.".concat(r), rc(rc({}, e), {}, oc({}, r, n))
				}, {}),
				$d = null !== globalThis && void 0 !== globalThis && globalThis.document ? X.useLayoutEffect : function() {},
				Yd = X.forwardRef(function(e, t) {
					var n = e.container,
						r = Qu(e, ["container"]),
						o = ic(X.useState(!1), 2),
						e = o[0],
						i = o[1];
					$d(function() {
						return i(!0)
					}, []);
					var a = n || e && (null === globalThis || void 0 === globalThis || null === (a = globalThis.document) || void 0 === a ? void 0 : a.body);
					return a ? l().createPortal((0, su.jsx)(Xd.div, rc(rc({}, r), {}, {
						ref: t
					})), a) : null
				});
			Yd.displayName = "Portal";
			var Zd = ["a", "button", "div", "form", "h2", "h3", "img", "input", "label", "li", "nav", "ol", "p", "select", "span", "svg", "ul"].reduce(function(e, r) {
					var o = vc("Primitive.".concat(r)),
						t = X.forwardRef(function(e, t) {
							var n = e.asChild,
								e = Qu(e, ["asChild"]),
								n = n ? o : r;
							return "undefined" != typeof window && (window[Symbol.for("radix-ui")] = !0), (0, su.jsx)(n, rc(rc({}, e), {}, {
								ref: t
							}))
						});
					return t.displayName = "Primitive.".concat(r), rc(rc({}, e), {}, oc({}, r, t))
				}, {}),
				Qd = null !== globalThis && void 0 !== globalThis && globalThis.document ? X.useLayoutEffect : function() {},
				ef = X[" useInsertionEffect ".trim().toString()] || Qd;

			function tf(e) {
				var t, n, r, o, i = e.prop,
					a = e.defaultProp,
					l = e.onChange,
					l = void 0 === l ? function() {} : l,
					u = e.caller,
					a = (l = (a = {
						defaultProp: a,
						onChange: l
					}).defaultProp, t = a.onChange, l = ic(X.useState(l), 2), n = l[0], l = l[1], r = X.useRef(n), o = X.useRef(t), ef(function() {
						o.current = t
					}, [t]), X.useEffect(function() {
						var e;
						r.current !== n && (null !== (e = o.current) && void 0 !== e && e.call(o, n), r.current = n)
					}, [n, r]), [n, l, o]),
					l = ic(a, 3),
					a = l[0],
					c = l[1],
					s = l[2],
					d = void 0 !== i,
					a = d ? i : a,
					f = X.useRef(void 0 !== i);
				return X.useEffect(function() {
					var e, t = f.current;
					t !== d && (e = t ? "controlled" : "uncontrolled", t = d ? "controlled" : "uncontrolled", console.warn("".concat(u, " is changing from ").concat(e, " to ").concat(t, ". Components should not switch from controlled to uncontrolled (or vice versa). Decide between using a controlled or uncontrolled value for the lifetime of the component."))), f.current = d
				}, [d, u]), [a, X.useCallback(function(e) {
					var t, n;
					d ? (n = "function" == typeof e ? e(i) : e) !== i && null !== (t = s.current) && void 0 !== t && t.call(s, n) : c(e)
				}, [d, i, c, s])]
			}

			function nf(e, t) {
				if ("function" == typeof e) return e(t);
				null != e && (e.current = t)
			}

			function rf(e) {
				var t = X.forwardRef(function(e, t) {
					var n, r, o = e.children,
						i = Qu(e, ["children"]),
						t = function() {
							for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++) t[n] = arguments[n];
							return X.useCallback(function() {
								for (var e = arguments.length, o = new Array(e), t = 0; t < e; t++) o[t] = arguments[t];
								return function(t) {
									var n = !1,
										r = o.map(function(e) {
											e = nf(e, t);
											return n || "function" != typeof e || (n = !0), e
										});
									if (n) return function() {
										for (var e = 0; e < r.length; e++) {
											var t = r[e];
											"function" == typeof t ? t() : nf(o[e], null)
										}
									}
								}
							}.apply(void 0, t), t)
						}(X.isValidElement(o) ? (n = o, e = null === (r = Object.getOwnPropertyDescriptor(n.props, "ref")) || void 0 === r ? void 0 : r.get, e && "isReactWarning" in e && e.isReactWarning ? n.ref : (e = null === (r = Object.getOwnPropertyDescriptor(n, "ref")) || void 0 === r ? void 0 : r.get) && "isReactWarning" in e && e.isReactWarning ? n.props.ref : n.props.ref || n.ref) : void 0, t);
					if (X.isValidElement(o)) {
						i = function(r, o) {
							var e, i = rc({}, o);
							for (e in o) ! function(e) {
								var t = r[e],
									n = o[e];
								/^on[A-Z]/.test(e) ? t && n ? i[e] = function() {
									var e = n.apply(void 0, arguments);
									return t.apply(void 0, arguments), e
								} : t && (i[e] = t) : "style" === e ? i[e] = rc(rc({}, t), n) : "className" === e && (i[e] = [t, n].filter(Boolean).join(" "))
							}(e);
							return rc(rc({}, r), i)
						}(i, o.props);
						return o.type !== X.Fragment && (i.ref = t), X.cloneElement(o, i)
					}
					return 1 < X.Children.count(o) ? X.Children.only(null) : null
				});
				return t.displayName = "".concat(e, ".SlotClone"), t
			}
			var of = Symbol("radix.slottable");

			function af(e) {
				return X.isValidElement(e) && "function" == typeof e.type && "__radixId" in e.type && e.type.__radixId === of
			}
			var lf = ["a", "button", "div", "form", "h2", "h3", "img", "input", "label", "li", "nav", "ol", "p", "select", "span", "svg", "ul"].reduce(function(e, r) {
					var t, a, n, o = (t = "Primitive.".concat(r), a = rf(t), (n = X.forwardRef(function(e, t) {
							var n = e.children,
								r = Qu(e, ["children"]),
								e = X.Children.toArray(n),
								o = e.find(af);
							if (o) {
								var i = o.props.children,
									e = e.map(function(e) {
										return e === o ? 1 < X.Children.count(i) ? X.Children.only(null) : X.isValidElement(i) ? i.props.children : null : e
									});
								return (0, su.jsx)(a, rc(rc({}, r), {}, {
									ref: t,
									children: X.isValidElement(i) ? X.cloneElement(i, void 0, e) : null
								}))
							}
							return (0, su.jsx)(a, rc(rc({}, r), {}, {
								ref: t,
								children: n
							}))
						})).displayName = "".concat(t, ".Slot"), n),
						n = X.forwardRef(function(e, t) {
							var n = e.asChild,
								e = Qu(e, ["asChild"]),
								n = n ? o : r;
							return "undefined" != typeof window && (window[Symbol.for("radix-ui")] = !0), (0, su.jsx)(n, rc(rc({}, e), {}, {
								ref: t
							}))
						});
					return n.displayName = "Primitive.".concat(r), rc(rc({}, e), {}, oc({}, r, n))
				}, {}),
				uf = Object.freeze({
					position: "absolute",
					border: 0,
					width: 1,
					height: 1,
					padding: 0,
					margin: -1,
					overflow: "hidden",
					clip: "rect(0, 0, 0, 0)",
					whiteSpace: "nowrap",
					wordWrap: "normal"
				});

			function cf(e) {
				return e && (e.host || cf(e.parentNode))
			}

			function sf(e, t, n) {
				void 0 === n && (n = "data-aria-hidden");
				var r = Array.from(Array.isArray(e) ? e : [e]),
					o = t || (o = e, "undefined" == typeof document ? null : (Array.isArray(o) ? o[0] : o).ownerDocument.body);
				return o ? (r.push.apply(r, Array.from(o.querySelectorAll("[aria-live]"))), function(e, t, a, l) {
					var n, r = (n = t, (Array.isArray(e) ? e : [e]).map(function(e) {
						if (n.contains(e)) return e;
						var t = cf(e);
						return t && n.contains(t) ? t : (console.error("aria-hidden", e, "in not contained inside", n, ". Doing nothing"), null)
					}).filter(function(e) {
						return Boolean(e)
					}));
					pf[a] || (pf[a] = new WeakMap);
					var u = pf[a],
						c = [],
						s = new Set,
						o = new Set(r),
						e = function e(t) {
							t && !s.has(t) && (s.add(t), e(t.parentNode))
						};
					return r.forEach(e),
						function i(e) {
							e && !o.has(e) && Array.prototype.forEach.call(e.children, function(e) {
								if (s.has(e)) i(e);
								else try {
									var t = e.getAttribute(l),
										n = null !== t && "false" !== t,
										r = (df.get(e) || 0) + 1,
										o = (u.get(e) || 0) + 1;
									df.set(e, r), u.set(e, o), c.push(e), 1 === r && n && ff.set(e, !0), 1 === o && e.setAttribute(a, "true"), n || e.setAttribute(l, "true")
								} catch (t) {
									console.error("aria-hidden: cannot operate on ", e, t)
								}
							})
						}(t), s.clear(), mf++,
						function() {
							c.forEach(function(e) {
								var t = df.get(e) - 1,
									n = u.get(e) - 1;
								df.set(e, t), u.set(e, n), t || (ff.has(e) || e.removeAttribute(l), ff.delete(e)), n || e.removeAttribute(a)
							}), --mf || (df = new WeakMap, df = new WeakMap, ff = new WeakMap, pf = {})
						}
				}(r, o, n, "aria-hidden")) : function() {
					return null
				}
			}
			X.forwardRef(function(e, t) {
				return (0, su.jsx)(lf.span, rc(rc({}, e), {}, {
					ref: t,
					style: rc(rc({}, uf), e.style)
				}))
			}).displayName = "VisuallyHidden";
			var df = new WeakMap,
				ff = new WeakMap,
				pf = {},
				mf = 0,
				vf = "right-scroll-bar-position",
				hf = "width-before-scroll-bar";

			function gf(e, t) {
				return "function" == typeof e ? e(t) : e && (e.current = t), e
			}
			var yf = "undefined" != typeof window ? X.useLayoutEffect : X.useEffect,
				bf = new WeakMap;

			function wf(e) {
				return e
			}

			function Sf() {}(Tm = function(e) {
				var t = e.sideCar,
					e = Zl(e, ["sideCar"]);
				if (!t) throw new Error("Sidecar: please provide `sideCar` property to import the right car");
				t = t.read();
				if (!t) throw new Error("Sidecar medium not found");
				return X.createElement(t, Yl({}, e))
			}).isSideCarExport = !0;
			var Cf = function(e) {
					void 0 === e && (e = {});
					var t = function(e, n) {
						void 0 === n && (n = wf);
						var i = [],
							a = !1;
						return {
							read: function() {
								if (a) throw new Error("Sidecar: could not `read` from an `assigned` medium. `read` could be used only with `useMedium`.");
								return i.length ? i[i.length - 1] : e
							},
							useMedium: function(e) {
								var t = n(e, a);
								return i.push(t),
									function() {
										i = i.filter(function(e) {
											return e !== t
										})
									}
							},
							assignSyncMedium: function(t) {
								for (a = !0; i.length;) {
									var e = i;
									i = [], e.forEach(t)
								}
								i = {
									push: function(e) {
										return t(e)
									},
									filter: function() {
										return i
									}
								}
							},
							assignMedium: function(t) {
								a = !0;
								var e, n = [];
								i.length && (e = i, i = [], e.forEach(t), n = i);

								function r() {
									var e = n;
									n = [], e.forEach(t)
								}

								function o() {
									return Promise.resolve().then(r)
								}
								o(), i = {
									push: function(e) {
										n.push(e), o()
									},
									filter: function(e) {
										return n = n.filter(e), i
									}
								}
							}
						}
					}(null);
					return t.options = Yl({
						async: !0,
						ssr: !1
					}, e), t
				}(),
				If = X.forwardRef(function(e, t) {
					var o, n, r, i, a, l, u = X.useRef(null),
						c = X.useState({
							onScrollCapture: Sf,
							onWheelCapture: Sf,
							onTouchMoveCapture: Sf
						}),
						s = c[0],
						d = c[1],
						f = e.forwardProps,
						p = e.children,
						m = e.className,
						v = e.removeScrollBar,
						h = e.enabled,
						g = e.shards,
						y = e.sideCar,
						b = e.noIsolation,
						w = e.inert,
						S = e.allowPinchZoom,
						C = e.as,
						c = void 0 === C ? "div" : C,
						C = e.gapMode,
						e = Zl(e, ["forwardProps", "children", "className", "removeScrollBar", "enabled", "shards", "sideCar", "noIsolation", "inert", "allowPinchZoom", "as", "gapMode"]),
						y = y,
						n = (o = [u, t], r = n || null, i = function(t) {
							return o.forEach(function(e) {
								return gf(e, t)
							})
						}, (a = (0, X.useState)(function() {
							return {
								value: r,
								callback: i,
								facade: {
									get current() {
										return a.value
									},
									set current(e) {
										var t = a.value;
										t !== e && (a.value = e, a.callback(e, t))
									}
								}
							}
						})[0]).callback = i, l = a.facade, yf(function() {
							var t, n, r, e = bf.get(l);
							e && (t = new Set(e), n = new Set(o), r = l.current, t.forEach(function(e) {
								n.has(e) || gf(e, null)
							}), n.forEach(function(e) {
								t.has(e) || gf(e, r)
							})), bf.set(l, o)
						}, [o]), l),
						s = Yl(Yl({}, e), s);
					return X.createElement(X.Fragment, null, h && X.createElement(y, {
						sideCar: Cf,
						removeScrollBar: v,
						shards: g,
						noIsolation: b,
						inert: w,
						setCallbacks: d,
						allowPinchZoom: !!S,
						lockRef: u,
						gapMode: C
					}), f ? X.cloneElement(X.Children.only(p), Yl(Yl({}, s), {
						ref: n
					})) : X.createElement(c, Yl({}, s, {
						className: m,
						ref: n
					}), p))
				});

			function xf() {
				var n = 0,
					r = null;
				return {
					add: function(e) {
						var t;
						0 == n && (r = function() {
							if (!document) return null;
							var e = document.createElement("style");
							e.type = "text/css";
							var t = $g.nc;
							return t && e.setAttribute("nonce", t), e
						}()) && (t = e, (e = r).styleSheet ? e.styleSheet.cssText = t : e.appendChild(document.createTextNode(t)), t = r, (document.head || document.getElementsByTagName("head")[0]).appendChild(t)), n++
					},
					remove: function() {
						!--n && r && (r.parentNode && r.parentNode.removeChild(r), r = null)
					}
				}
			}

			function Ef() {
				var n, r = (n = xf(), function(e, t) {
					X.useEffect(function() {
						return n.add(e),
							function() {
								n.remove()
							}
					}, [e && t])
				});
				return function(e) {
					var t = e.styles,
						e = e.dynamic;
					return r(t, e), null
				}
			}

			function Pf(e) {
				return parseInt(e || "", 10) || 0
			}

			function Tf() {
				var e = parseInt(document.body.getAttribute(Nf) || "0", 10);
				return isFinite(e) ? e : 0
			}

			function Of(e) {
				var t, n = e.noRelative,
					r = e.noImportant,
					o = void 0 === (t = e.gapMode) ? "margin" : t;
				X.useEffect(function() {
					return document.body.setAttribute(Nf, (Tf() + 1).toString()),
						function() {
							var e = Tf() - 1;
							e <= 0 ? document.body.removeAttribute(Nf) : document.body.setAttribute(Nf, e.toString())
						}
				}, []);
				var i, a, l = X.useMemo(function() {
					return function(e) {
						if (void 0 === e && (e = "margin"), "undefined" == typeof window) return kf;
						var t, n, r, r = (t = e, n = window.getComputedStyle(document.body), r = n["padding" === t ? "paddingLeft" : "marginLeft"], e = n["padding" === t ? "paddingTop" : "marginTop"], t = n["padding" === t ? "paddingRight" : "marginRight"], [Pf(r), Pf(e), Pf(t)]),
							e = document.documentElement.clientWidth,
							t = window.innerWidth;
						return {
							left: r[0],
							top: r[1],
							right: r[2],
							gap: Math.max(0, t - e + r[2] - r[0])
						}
					}(o)
				}, [o]);
				return X.createElement(Af, {
					styles: (i = !n, a = o, e = r ? "" : "!important", n = (t = l).left, r = t.top, l = t.right, t = t.gap, void 0 === a && (a = "margin"), "\n  .".concat("with-scroll-bars-hidden", " {\n   overflow: hidden ").concat(e, ";\n   padding-right: ").concat(t, "px ").concat(e, ";\n  }\n  body[").concat(Nf, "] {\n    overflow: hidden ").concat(e, ";\n    overscroll-behavior: contain;\n    ").concat([i && "position: relative ".concat(e, ";"), "margin" === a && "\n    padding-left: ".concat(n, "px;\n    padding-top: ").concat(r, "px;\n    padding-right: ").concat(l, "px;\n    margin-left:0;\n    margin-top:0;\n    margin-right: ").concat(t, "px ").concat(e, ";\n    "), "padding" === a && "padding-right: ".concat(t, "px ").concat(e, ";")].filter(Boolean).join(""), "\n  }\n  \n  .").concat(vf, " {\n    right: ").concat(t, "px ").concat(e, ";\n  }\n  \n  .").concat(hf, " {\n    margin-right: ").concat(t, "px ").concat(e, ";\n  }\n  \n  .").concat(vf, " .").concat(vf, " {\n    right: 0 ").concat(e, ";\n  }\n  \n  .").concat(hf, " .").concat(hf, " {\n    margin-right: 0 ").concat(e, ";\n  }\n  \n  body[").concat(Nf, "] {\n    ").concat("--removed-body-scroll-bar-size", ": ").concat(t, "px;\n  }\n"))
				})
			}
			If.defaultProps = {
				enabled: !0,
				removeScrollBar: !0,
				inert: !1
			}, If.classNames = {
				fullWidth: hf,
				zeroRight: vf
			};
			var kf = {
					left: 0,
					top: 0,
					right: 0,
					gap: 0
				},
				Af = Ef(),
				Nf = "data-scroll-locked",
				_f = !1;
			if ("undefined" != typeof window) try {
				var Rf = Object.defineProperty({}, "passive", {
					get: function() {
						return _f = !0
					}
				});
				window.addEventListener("test", Rf, Rf), window.removeEventListener("test", Rf, Rf)
			} catch (e) {
				_f = !1
			}

			function Lf(e, t) {
				if (!(e instanceof Element)) return !1;
				var n = window.getComputedStyle(e);
				return "hidden" !== n[t] && !(n.overflowY === n.overflowX && "TEXTAREA" !== e.tagName && "visible" === n[t])
			}

			function Df(e, t) {
				var n = t.ownerDocument,
					r = t;
				do {
					if ("undefined" != typeof ShadowRoot && r instanceof ShadowRoot && (r = r.host), Bf(e, r)) {
						var o = Gf(e, r);
						if (o[1] > o[2]) return !0
					}
				} while ((r = r.parentNode) && r !== n.body);
				return !1
			}

			function Mf(e) {
				return "changedTouches" in e ? [e.changedTouches[0].clientX, e.changedTouches[0].clientY] : [0, 0]
			}

			function Ff(e) {
				return [e.deltaX, e.deltaY]
			}

			function jf(e) {
				return e && "current" in e ? e.current : e
			}
			var Uf = !!_f && {
					passive: !1
				},
				Bf = function(e, t) {
					return Lf(t, "v" === e ? "overflowY" : "overflowX")
				},
				Gf = function(e, t) {
					return "v" === e ? [t.scrollTop, t.scrollHeight, t.clientHeight] : [t.scrollLeft, t.scrollWidth, t.clientWidth]
				},
				Hf = 0,
				Wf = [],
				zf = (oh = function(t) {
					var i = X.useRef([]),
						u = X.useRef([0, 0]),
						c = X.useRef(),
						n = X.useState(Hf++)[0],
						o = X.useState(Ef)[0],
						s = X.useRef(t);
					X.useEffect(function() {
						s.current = t
					}, [t]), X.useEffect(function() {
						if (t.inert) {
							document.body.classList.add("block-interactivity-".concat(n));
							var e = function(e, t, n) {
								if (n || 2 === arguments.length)
									for (var r, o = 0, i = t.length; o < i; o++) !r && o in t || ((r = r || Array.prototype.slice.call(t, 0, o))[o] = t[o]);
								return e.concat(r || Array.prototype.slice.call(t))
							}([t.lockRef.current], (t.shards || []).map(jf), !0).filter(Boolean);
							return e.forEach(function(e) {
									return e.classList.add("allow-interactivity-".concat(n))
								}),
								function() {
									document.body.classList.remove("block-interactivity-".concat(n)), e.forEach(function(e) {
										return e.classList.remove("allow-interactivity-".concat(n))
									})
								}
						}
					}, [t.inert, t.lockRef.current, t.shards]);
					var a = X.useCallback(function(e, t) {
							if ("touches" in e && 2 === e.touches.length || "wheel" === e.type && e.ctrlKey) return !s.current.allowPinchZoom;
							var n = Mf(e),
								r = u.current,
								o = "deltaX" in e ? e.deltaX : r[0] - n[0],
								i = "deltaY" in e ? e.deltaY : r[1] - n[1],
								a = e.target,
								r = Math.abs(o) > Math.abs(i) ? "h" : "v";
							if ("touches" in e && "h" == r && "range" === a.type) return !1;
							n = Df(r, a);
							if (!n) return !0;
							if (n ? l = r : (l = "v" == r ? "h" : "v", n = Df(r, a)), !n) return !1;
							if (!c.current && "changedTouches" in e && (o || i) && (c.current = l), !l) return !0;
							var l = c.current || l;
							return function(e, t, n, r, o) {
								var i, a, l = (i = e, a = window.getComputedStyle(t).direction, "h" === i && "rtl" === a ? -1 : 1),
									a = l * r,
									u = n.target,
									c = t.contains(u),
									r = !1,
									n = 0 < a,
									s = 0,
									d = 0;
								do {
									var f = Gf(e, u),
										p = f[0],
										f = f[1] - f[2] - l * p
								} while ((p || f) && Bf(e, u) && (s += f, d += p), u = u instanceof ShadowRoot ? u.host : u.parentNode, !c && u !== document.body || c && (t.contains(u) || t === u));
								return (n && (o && Math.abs(s) < 1 || !o && s < a) || !n && (o && Math.abs(d) < 1 || !o && d < -a)) && (r = !0), r
							}(l, t, e, "h" === l ? o : i, !0)
						}, []),
						e = X.useCallback(function(e) {
							var n, r = e;
							Wf.length && Wf[Wf.length - 1] === o && (n = ("deltaY" in r ? Ff : Mf)(r), (e = i.current.filter(function(e) {
								return e.name === r.type && (e.target === r.target || r.target === e.shadowParent) && (t = e.delta, e = n, t[0] === e[0] && t[1] === e[1]);
								var t
							})[0]) && e.should ? r.cancelable && r.preventDefault() : e || (0 < (e = (s.current.shards || []).map(jf).filter(Boolean).filter(function(e) {
								return e.contains(r.target)
							})).length ? a(r, e[0]) : !s.current.noIsolation) && r.cancelable && r.preventDefault())
						}, []),
						r = X.useCallback(function(e, t, n, r) {
							var o = {
								name: e,
								delta: t,
								target: n,
								should: r,
								shadowParent: function(e) {
									for (var t = null; null !== e;) e instanceof ShadowRoot && (t = e.host, e = e.host), e = e.parentNode;
									return t
								}(n)
							};
							i.current.push(o), setTimeout(function() {
								i.current = i.current.filter(function(e) {
									return e !== o
								})
							}, 1)
						}, []),
						l = X.useCallback(function(e) {
							u.current = Mf(e), c.current = void 0
						}, []),
						d = X.useCallback(function(e) {
							r(e.type, Ff(e), e.target, a(e, t.lockRef.current))
						}, []),
						f = X.useCallback(function(e) {
							r(e.type, Mf(e), e.target, a(e, t.lockRef.current))
						}, []);
					X.useEffect(function() {
						return Wf.push(o), t.setCallbacks({
								onScrollCapture: d,
								onWheelCapture: d,
								onTouchMoveCapture: f
							}), document.addEventListener("wheel", e, Uf), document.addEventListener("touchmove", e, Uf), document.addEventListener("touchstart", l, Uf),
							function() {
								Wf = Wf.filter(function(e) {
									return e !== o
								}), document.removeEventListener("wheel", e, Uf), document.removeEventListener("touchmove", e, Uf), document.removeEventListener("touchstart", l, Uf)
							}
					}, []);
					var p = t.removeScrollBar,
						m = t.inert;
					return X.createElement(X.Fragment, null, m ? X.createElement(o, {
						styles: "\n  .block-interactivity-".concat(m = n, " {pointer-events: none;}\n  .allow-interactivity-").concat(m, " {pointer-events: all;}\n")
					}) : null, p ? X.createElement(Of, {
						gapMode: t.gapMode
					}) : null)
				}, Cf.useMedium(oh), Tm);
			($i = X.forwardRef(function(e, t) {
				return X.createElement(If, Yl({}, e, {
					ref: t,
					sideCar: zf
				}))
			})).classNames = If.classNames;
			var Vf = $i,
				qf = [" ", "Enter", "ArrowUp", "ArrowDown"],
				Jf = [" ", "Enter"],
				Kf = "Select",
				Ki = function(n) {
					var e = n + "CollectionProvider",
						t = ic(fc(e), 2),
						r = t[0],
						o = t[1],
						t = ic(r(e, {
							collectionRef: {
								current: null
							},
							itemMap: new Map
						}), 2),
						i = t[0],
						l = t[1],
						r = function(e) {
							var t = e.scope,
								n = e.children,
								r = $().useRef(null),
								e = $().useRef(new Map).current;
							return (0, su.jsx)(i, {
								scope: t,
								itemMap: e,
								collectionRef: r,
								children: n
							})
						};
					r.displayName = e;
					var a = n + "CollectionSlot",
						u = vc(a),
						t = $().forwardRef(function(e, t) {
							var n = e.scope,
								e = e.children,
								n = mc(t, l(a, n).collectionRef);
							return (0, su.jsx)(u, {
								ref: n,
								children: e
							})
						});
					t.displayName = a;
					var c = n + "CollectionItemSlot",
						s = "data-radix-collection-item",
						d = vc(c),
						e = $().forwardRef(function(e, t) {
							var n = e.scope,
								r = e.children,
								o = Qu(e, ["scope", "children"]),
								i = $().useRef(null),
								t = mc(t, i),
								a = l(c, n);
							return $().useEffect(function() {
								return a.itemMap.set(i, rc({
										ref: i
									}, o)),
									function() {
										a.itemMap.delete(i)
									}
							}), (0, su.jsx)(d, (oc(n = {}, s, ""), oc(n, "ref", t), oc(n, "children", r), n))
						});
					return e.displayName = c, [{
						Provider: r,
						Slot: t,
						ItemSlot: e
					}, function(e) {
						var t = l(n + "CollectionConsumer", e);
						return $().useCallback(function() {
							var e = t.collectionRef.current;
							if (!e) return [];
							var n = Array.from(e.querySelectorAll("[".concat(s, "]")));
							return Array.from(t.itemMap.values()).sort(function(e, t) {
								return n.indexOf(e.ref.current) - n.indexOf(t.ref.current)
							})
						}, [t.collectionRef, t.itemMap])
					}, o]
				}(Kf),
				Xf = (ql = ic(Ki, 3))[0],
				$f = ql[1],
				Kl = ql[2],
				et = (oe = ic(fc(Kf, [Kl, lt]), 2))[0],
				Yf = (oe[1], lt()),
				Zf = (Lu = ic(et(Kf), 2))[0],
				Qf = Lu[1],
				ep = (mm = ic(et(Kf), 2))[0],
				tp = mm[1];
			(tt = function(e) {
				var t = e.__scopeSelect,
					n = e.children,
					r = e.open,
					o = e.defaultOpen,
					i = e.onOpenChange,
					a = e.value,
					l = e.defaultValue,
					u = e.onValueChange,
					c = e.dir,
					s = e.name,
					d = e.autoComplete,
					f = e.disabled,
					p = e.required,
					m = e.form,
					v = Yf(t),
					h = ic(X.useState(null), 2),
					g = h[0],
					y = h[1],
					b = ic(X.useState(null), 2),
					w = b[0],
					S = b[1],
					C = ic(X.useState(!1), 2),
					h = C[0],
					b = C[1],
					C = zu(c),
					c = ic(tf({
						prop: r,
						defaultProp: null != o && o,
						onChange: i,
						caller: Kf
					}), 2),
					r = c[0],
					o = c[1],
					i = ic(tf({
						prop: a,
						defaultProp: l,
						onChange: u,
						caller: Kf
					}), 2),
					c = i[0],
					I = i[1],
					a = X.useRef(null),
					l = !g || m || !!g.closest("form"),
					u = ic(X.useState(new Set), 2),
					i = u[0],
					x = u[1],
					u = Array.from(i).map(function(e) {
						return e.props.value
					}).join(";");
				return (0, su.jsx)(Gd, rc(rc({}, v), {}, {
					children: (0, su.jsxs)(Zf, {
						required: p,
						scope: t,
						trigger: g,
						onTriggerChange: y,
						valueNode: w,
						onValueNodeChange: S,
						valueNodeHasChildren: h,
						onValueNodeHasChildrenChange: b,
						contentId: Ku(),
						value: c,
						onValueChange: I,
						open: r,
						onOpenChange: o,
						dir: C,
						triggerPointerDownPosRef: a,
						disabled: f,
						children: [(0, su.jsx)(Xf.Provider, {
							scope: t,
							children: (0, su.jsx)(ep, {
								scope: e.__scopeSelect,
								onNativeOptionAdd: X.useCallback(function(t) {
									x(function(e) {
										return new Set(e).add(t)
									})
								}, []),
								onNativeOptionRemove: X.useCallback(function(t) {
									x(function(e) {
										e = new Set(e);
										return e.delete(t), e
									})
								}, []),
								children: n
							})
						}), l ? (0, su.jsxs)(Pp, {
							"aria-hidden": !0,
							required: p,
							tabIndex: -1,
							name: s,
							autoComplete: d,
							value: c,
							onChange: function(e) {
								return I(e.target.value)
							},
							disabled: f,
							form: m,
							children: [void 0 === c ? (0, su.jsx)("option", {
								value: ""
							}) : null, Array.from(i)]
						}, u) : null]
					})
				}))
			}).displayName = Kf;
			var np = "SelectTrigger";
			(oh = X.forwardRef(function(e, t) {
				function n(e) {
					l || (a.onOpenChange(!0), f()), e && (a.triggerPointerDownPosRef.current = {
						x: Math.round(e.pageX),
						y: Math.round(e.pageY)
					})
				}
				var r = e.__scopeSelect,
					o = e.disabled,
					i = void 0 !== o && o,
					o = Qu(e, ["__scopeSelect", "disabled"]),
					e = Yf(r),
					a = Qf(np, r),
					l = a.disabled || i,
					t = mc(t, a.onTriggerChange),
					u = $f(r),
					c = X.useRef("touch"),
					r = ic(Op(function(e) {
						var t = u().filter(function(e) {
								return !e.disabled
							}),
							n = t.find(function(e) {
								return e.value === a.value
							}),
							n = kp(t, e, n);
						void 0 !== n && a.onValueChange(n.value)
					}), 3),
					s = r[0],
					d = r[1],
					f = r[2];
				return (0, su.jsx)(Hd, rc(rc({
					asChild: !0
				}, e), {}, {
					children: (0, su.jsx)(Zd.button, rc(rc({
						type: "button",
						role: "combobox",
						"aria-controls": a.contentId,
						"aria-expanded": a.open,
						"aria-required": a.required,
						"aria-autocomplete": "none",
						dir: a.dir,
						"data-state": a.open ? "open" : "closed",
						disabled: l,
						"data-disabled": l ? "" : void 0,
						"data-placeholder": Tp(a.value) ? "" : void 0
					}, o), {}, {
						ref: t,
						onClick: dc(o.onClick, function(e) {
							e.currentTarget.focus(), "mouse" !== c.current && n(e)
						}),
						onPointerDown: dc(o.onPointerDown, function(e) {
							c.current = e.pointerType;
							var t = e.target;
							t.hasPointerCapture(e.pointerId) && t.releasePointerCapture(e.pointerId), 0 === e.button && !1 === e.ctrlKey && "mouse" === e.pointerType && (n(e), e.preventDefault())
						}),
						onKeyDown: dc(o.onKeyDown, function(e) {
							var t = "" !== s.current;
							e.ctrlKey || e.altKey || e.metaKey || 1 !== e.key.length || d(e.key), t && " " === e.key || qf.includes(e.key) && (n(), e.preventDefault())
						})
					}))
				}))
			})).displayName = np;
			var rp = "SelectValue";
			(Tm = X.forwardRef(function(e, t) {
				var n = e.__scopeSelect,
					r = (e.className, e.style, e.children),
					o = e.placeholder,
					o = void 0 === o ? "" : o,
					e = Qu(e, ["__scopeSelect", "className", "style", "children", "placeholder"]),
					n = Qf(rp, n),
					i = n.onValueNodeHasChildrenChange,
					a = void 0 !== r,
					t = mc(t, n.onValueNodeChange);
				return Qd(function() {
					i(a)
				}, [i, a]), (0, su.jsx)(Zd.span, rc(rc({}, e), {}, {
					ref: t,
					style: {
						pointerEvents: "none"
					},
					children: Tp(n.value) ? (0, su.jsx)(su.Fragment, {
						children: o
					}) : r
				}))
			})).displayName = rp, ($i = X.forwardRef(function(e, t) {
				e.__scopeSelect;
				var n = e.children,
					e = Qu(e, ["__scopeSelect", "children"]);
				return (0, su.jsx)(Zd.span, rc(rc({
					"aria-hidden": !0
				}, e), {}, {
					ref: t,
					children: n || "▼"
				}))
			})).displayName = "SelectIcon", (Ki = function(e) {
				return (0, su.jsx)(Yd, rc({
					asChild: !0
				}, e))
			}).displayName = "SelectPortal";
			var op = "SelectContent";
			(ql = X.forwardRef(function(e, t) {
				var n = Qf(op, e.__scopeSelect),
					r = ic(X.useState(), 2),
					o = r[0],
					i = r[1];
				if (Qd(function() {
						i(new DocumentFragment)
					}, []), n.open) return (0, su.jsx)(up, rc(rc({}, e), {}, {
					ref: t
				}));
				return o ? _.createPortal((0, su.jsx)(ip, {
					scope: e.__scopeSelect,
					children: (0, su.jsx)(Xf.Slot, {
						scope: e.__scopeSelect,
						children: (0, su.jsx)("div", {
							children: e.children
						})
					})
				}), o) : null
			})).displayName = op;
			var ip = (Kl = ic(et(op), 2))[0],
				ap = Kl[1],
				lp = vc("SelectContent.RemoveScroll"),
				up = X.forwardRef(function(e, t) {
					var n = e.__scopeSelect,
						r = e.position,
						o = void 0 === r ? "item-aligned" : r,
						i = e.onCloseAutoFocus,
						a = e.onEscapeKeyDown,
						l = e.onPointerDownOutside,
						u = e.side,
						c = e.sideOffset,
						s = e.align,
						d = e.alignOffset,
						f = e.arrowPadding,
						p = e.collisionBoundary,
						m = e.collisionPadding,
						v = e.sticky,
						h = e.hideWhenDetached,
						g = e.avoidCollisions,
						y = Qu(e, ["__scopeSelect", "position", "onCloseAutoFocus", "onEscapeKeyDown", "onPointerDownOutside", "side", "sideOffset", "align", "alignOffset", "arrowPadding", "collisionBoundary", "collisionPadding", "sticky", "hideWhenDetached", "avoidCollisions"]),
						b = Qf(op, n),
						w = ic(X.useState(null), 2),
						S = w[0],
						C = w[1],
						I = ic(X.useState(null), 2),
						x = I[0],
						E = I[1],
						P = mc(t, function(e) {
							return C(e)
						}),
						T = ic(X.useState(null), 2),
						O = T[0],
						k = T[1],
						r = ic(X.useState(null), 2),
						e = r[0],
						A = r[1],
						N = $f(n),
						w = ic(X.useState(!1), 2),
						_ = w[0],
						R = w[1],
						L = X.useRef(!1);
					X.useEffect(function() {
						if (S) return sf(S)
					}, [S]), X.useEffect(function() {
						var e, t = document.querySelectorAll("[data-radix-focus-guard]");
						return document.body.insertAdjacentElement("afterbegin", null !== (e = t[0]) && void 0 !== e ? e : Lc()), document.body.insertAdjacentElement("beforeend", null !== (t = t[1]) && void 0 !== t ? t : Lc()), Rc++,
							function() {
								1 === Rc && document.querySelectorAll("[data-radix-focus-guard]").forEach(function(e) {
									return e.remove()
								}), Rc--
							}
					}, []);
					var D = X.useCallback(function(e) {
							var t = N().map(function(e) {
									return e.ref.current
								}),
								t = cc(t = t) || tc(t) || lc(t) || ac(),
								n = t[0],
								r = ic(t.slice(1).slice(-1), 1)[0],
								o = document.activeElement,
								i = Zu(e);
							try {
								for (i.s(); !(a = i.n()).done;) {
									var a = a.value;
									if (a === o) return;
									if (null != a && a.scrollIntoView({
											block: "nearest"
										}), a === n && x && (x.scrollTop = 0), a === r && x && (x.scrollTop = x.scrollHeight), null != a && a.focus(), document.activeElement !== o) return
								}
							} catch (e) {
								i.e(e)
							} finally {
								i.f()
							}
						}, [N, x]),
						M = X.useCallback(function() {
							return D([O, S])
						}, [D, O, S]);
					X.useEffect(function() {
						_ && M()
					}, [_, M]);
					var F = b.onOpenChange,
						j = b.triggerPointerDownPosRef;
					X.useEffect(function() {
						if (S) {
							var n = {
									x: 0,
									y: 0
								},
								t = function(e) {
									var t;
									n = {
										x: Math.abs(Math.round(e.pageX) - (null !== (t = null === (t = j.current) || void 0 === t ? void 0 : t.x) && void 0 !== t ? t : 0)),
										y: Math.abs(Math.round(e.pageY) - (null !== (e = null === (e = j.current) || void 0 === e ? void 0 : e.y) && void 0 !== e ? e : 0))
									}
								},
								e = function(e) {
									n.x <= 10 && n.y <= 10 ? e.preventDefault() : S.contains(e.target) || F(!1), document.removeEventListener("pointermove", t), j.current = null
								};
							return null !== j.current && (document.addEventListener("pointermove", t), document.addEventListener("pointerup", e, {
									capture: !0,
									once: !0
								})),
								function() {
									document.removeEventListener("pointermove", t), document.removeEventListener("pointerup", e, {
										capture: !0
									})
								}
						}
					}, [S, F, j]), X.useEffect(function() {
						function e() {
							return F(!1)
						}
						return window.addEventListener("blur", e), window.addEventListener("resize", e),
							function() {
								window.removeEventListener("blur", e), window.removeEventListener("resize", e)
							}
					}, [F]);
					var I = ic(Op(function(e) {
							var t = N().filter(function(e) {
									return !e.disabled
								}),
								n = t.find(function(e) {
									return e.ref.current === document.activeElement
								}),
								r = kp(t, e, n);
							r && setTimeout(function() {
								return r.ref.current.focus()
							})
						}), 2),
						t = I[0],
						U = I[1],
						T = X.useCallback(function(e, t, n) {
							n = !L.current && !n;
							(void 0 !== b.value && b.value === t || n) && (k(e), n && (L.current = !0))
						}, [b.value]),
						r = X.useCallback(function() {
							return null == S ? void 0 : S.focus()
						}, [S]),
						w = X.useCallback(function(e, t, n) {
							n = !L.current && !n;
							(void 0 !== b.value && b.value === t || n) && A(e)
						}, [b.value]),
						I = "popper" === o ? sp : cp,
						g = I === sp ? {
							side: u,
							sideOffset: c,
							align: s,
							alignOffset: d,
							arrowPadding: f,
							collisionBoundary: p,
							collisionPadding: m,
							sticky: v,
							hideWhenDetached: h,
							avoidCollisions: g
						} : {};
					return (0, su.jsx)(ip, {
						scope: n,
						content: S,
						viewport: x,
						onViewportChange: E,
						itemRefCallback: T,
						selectedItem: O,
						onItemLeave: r,
						itemTextRefCallback: w,
						focusSelectedItem: M,
						selectedItemText: e,
						position: o,
						isPositioned: _,
						searchRef: t,
						children: (0, su.jsx)(Vf, {
							as: lp,
							allowPinchZoom: !0,
							children: (0, su.jsx)(Vc, {
								asChild: !0,
								trapped: b.open,
								onMountAutoFocus: function(e) {
									e.preventDefault()
								},
								onUnmountAutoFocus: dc(i, function(e) {
									var t;
									null !== (t = b.trigger) && void 0 !== t && t.focus({
										preventScroll: !0
									}), e.preventDefault()
								}),
								children: (0, su.jsx)(Ac, {
									asChild: !0,
									disableOutsidePointerEvents: !0,
									onEscapeKeyDown: a,
									onPointerDownOutside: l,
									onFocusOutside: function(e) {
										return e.preventDefault()
									},
									onDismiss: function() {
										return b.onOpenChange(!1)
									},
									children: (0, su.jsx)(I, rc(rc(rc({
										role: "listbox",
										id: b.contentId,
										"data-state": b.open ? "open" : "closed",
										dir: b.dir,
										onContextMenu: function(e) {
											return e.preventDefault()
										}
									}, y), g), {}, {
										onPlaced: function() {
											return R(!0)
										},
										ref: P,
										style: rc({
											display: "flex",
											flexDirection: "column",
											outline: "none"
										}, y.style),
										onKeyDown: dc(y.onKeyDown, function(e) {
											var t, n = e.ctrlKey || e.altKey || e.metaKey;
											"Tab" === e.key && e.preventDefault(), n || 1 !== e.key.length || U(e.key), ["ArrowUp", "ArrowDown", "Home", "End"].includes(e.key) && (t = N().filter(function(e) {
												return !e.disabled
											}).map(function(e) {
												return e.ref.current
											}), ["ArrowUp", "End"].includes(e.key) && (t = t.slice().reverse()), ["ArrowUp", "ArrowDown"].includes(e.key) && (n = e.target, n = t.indexOf(n), t = t.slice(n + 1)), setTimeout(function() {
												return D(t)
											}), e.preventDefault())
										})
									}))
								})
							})
						})
					})
				});
			up.displayName = "SelectContentImpl";
			var cp = X.forwardRef(function(e, t) {
				var n = e.__scopeSelect,
					v = e.onPlaced,
					r = Qu(e, ["__scopeSelect", "onPlaced"]),
					h = Qf(op, n),
					o = ap(op, n),
					i = ic(X.useState(null), 2),
					g = i[0],
					e = i[1],
					i = ic(X.useState(null), 2),
					y = i[0],
					a = i[1],
					i = mc(t, function(e) {
						return a(e)
					}),
					b = $f(n),
					w = X.useRef(!1),
					l = X.useRef(!0),
					S = o.viewport,
					C = o.selectedItem,
					I = o.selectedItemText,
					u = o.focusSelectedItem,
					c = X.useCallback(function() {
						var e, t, n, r, o, i, a, l, u, c, s, d, f, p, m;
						h.trigger && h.valueNode && g && y && S && C && I && (m = h.trigger.getBoundingClientRect(), s = y.getBoundingClientRect(), n = h.valueNode.getBoundingClientRect(), u = I.getBoundingClientRect(), "rtl" !== h.dir ? (p = u.left - s.left, e = n.left - p, l = m.left - e, t = m.width + l, p = Math.max(t, s.width), l = window.innerWidth - 10, l = sc(e, [10, Math.max(10, l - p)]), g.style.minWidth = t + "px", g.style.left = l + "px") : (d = s.right - u.right, r = window.innerWidth - n.right - d, f = window.innerWidth - m.right - r, i = m.width + f, o = Math.max(i, s.width), c = window.innerWidth - 10, a = sc(r, [10, Math.max(10, c - o)]), g.style.minWidth = i + "px", g.style.right = a + "px"), p = b(), t = window.innerHeight - 20, l = S.scrollHeight, u = window.getComputedStyle(y), n = parseInt(u.borderTopWidth, 10), d = parseInt(u.paddingTop, 10), f = parseInt(u.borderBottomWidth, 10), s = n + d + l + parseInt(u.paddingBottom, 10) + f, r = Math.min(5 * C.offsetHeight, s), c = window.getComputedStyle(S), o = parseInt(c.paddingTop, 10), i = parseInt(c.paddingBottom, 10), l = t - (a = m.top + m.height / 2 - 10), u = C.offsetHeight / 2, m = s - (c = n + d + (C.offsetTop + u)), c <= a ? (s = 0 < p.length && C === p[p.length - 1].ref.current, g.style.bottom = "0px", d = y.clientHeight - S.offsetTop - S.offsetHeight, f = c + Math.max(l, u + (s ? i : 0) + d + f), g.style.height = f + "px") : (p = 0 < p.length && C === p[0].ref.current, g.style.top = "0px", m = Math.max(a, n + S.offsetTop + (p ? o : 0) + u) + m, g.style.height = m + "px", S.scrollTop = c - a + S.offsetTop), g.style.margin = "".concat(10, "px 0"), g.style.minHeight = r + "px", g.style.maxHeight = t + "px", null != v && v(), requestAnimationFrame(function() {
							return w.current = !0
						}))
					}, [b, h.trigger, h.valueNode, g, y, S, C, I, h.dir, v]);
				Qd(function() {
					return c()
				}, [c]);
				var t = ic(X.useState(), 2),
					o = t[0],
					s = t[1];
				Qd(function() {
					y && s(window.getComputedStyle(y).zIndex)
				}, [y]);
				t = X.useCallback(function(e) {
					e && !0 === l.current && (c(), null != u && u(), l.current = !1)
				}, [c, u]);
				return (0, su.jsx)(dp, {
					scope: n,
					contentWrapper: g,
					shouldExpandOnScrollRef: w,
					onScrollButtonChange: t,
					children: (0, su.jsx)("div", {
						ref: e,
						style: {
							display: "flex",
							flexDirection: "column",
							position: "fixed",
							zIndex: o
						},
						children: (0, su.jsx)(Zd.div, rc(rc({}, r), {}, {
							ref: i,
							style: rc({
								boxSizing: "border-box",
								maxHeight: "100%"
							}, r.style)
						}))
					})
				})
			});
			cp.displayName = "SelectItemAlignedPosition";
			var sp = X.forwardRef(function(e, t) {
				var n = e.__scopeSelect,
					r = e.align,
					o = void 0 === r ? "start" : r,
					r = e.collisionPadding,
					r = void 0 === r ? 10 : r,
					e = Qu(e, ["__scopeSelect", "align", "collisionPadding"]),
					n = Yf(n);
				return (0, su.jsx)(Wd, rc(rc(rc({}, n), e), {}, {
					ref: t,
					align: o,
					collisionPadding: r,
					style: rc(rc({
						boxSizing: "border-box"
					}, e.style), {}, {
						"--radix-select-content-transform-origin": "var(--radix-popper-transform-origin)",
						"--radix-select-content-available-width": "var(--radix-popper-available-width)",
						"--radix-select-content-available-height": "var(--radix-popper-available-height)",
						"--radix-select-trigger-width": "var(--radix-popper-anchor-width)",
						"--radix-select-trigger-height": "var(--radix-popper-anchor-height)"
					})
				}))
			});
			sp.displayName = "SelectPopperPosition";
			var dp = (oe = ic(et(op, {}), 2))[0],
				fp = oe[1],
				pp = "SelectViewport";
			(lt = X.forwardRef(function(e, t) {
				var n = e.__scopeSelect,
					r = e.nonce,
					o = Qu(e, ["__scopeSelect", "nonce"]),
					e = ap(pp, n),
					a = fp(pp, n),
					e = mc(t, e.onViewportChange),
					l = X.useRef(0);
				return (0, su.jsxs)(su.Fragment, {
					children: [(0, su.jsx)("style", {
						dangerouslySetInnerHTML: {
							__html: "[data-radix-select-viewport]{scrollbar-width:none;-ms-overflow-style:none;-webkit-overflow-scrolling:touch;}[data-radix-select-viewport]::-webkit-scrollbar{display:none}"
						},
						nonce: r
					}), (0, su.jsx)(Xf.Slot, {
						scope: n,
						children: (0, su.jsx)(Zd.div, rc(rc({
							"data-radix-select-viewport": "",
							role: "presentation"
						}, o), {}, {
							ref: e,
							style: rc({
								position: "relative",
								flex: 1,
								overflow: "hidden auto"
							}, o.style),
							onScroll: dc(o.onScroll, function(e) {
								var t, n, r = e.currentTarget,
									o = a.contentWrapper,
									i = a.shouldExpandOnScrollRef;
								null != i && i.current && o && (0 < (n = Math.abs(l.current - r.scrollTop)) && (t = window.innerHeight - 20, e = parseFloat(o.style.minHeight), i = parseFloat(o.style.height), (i = Math.max(e, i)) < t && (n = (n = i + n) - (t = Math.min(t, n)), o.style.height = t + "px", "0px" === o.style.bottom && (r.scrollTop = 0 < n ? n : 0, o.style.justifyContent = "flex-end")))), l.current = r.scrollTop
							})
						}))
					})]
				})
			})).displayName = pp;
			var mp = (mm = ic(et(Lu = "SelectGroup"), 2))[0],
				vp = mm[1];
			X.forwardRef(function(e, t) {
				var n = e.__scopeSelect,
					r = Qu(e, ["__scopeSelect"]),
					e = Ku();
				return (0, su.jsx)(mp, {
					scope: n,
					id: e,
					children: (0, su.jsx)(Zd.div, rc(rc({
						role: "group",
						"aria-labelledby": e
					}, r), {}, {
						ref: t
					}))
				})
			}).displayName = Lu;
			var hp = "SelectLabel";
			X.forwardRef(function(e, t) {
				var n = e.__scopeSelect,
					e = Qu(e, ["__scopeSelect"]),
					n = vp(hp, n);
				return (0, su.jsx)(Zd.div, rc(rc({
					id: n.id
				}, e), {}, {
					ref: t
				}))
			}).displayName = hp;
			var gp = "SelectItem",
				yp = (tt = ic(et(gp), 2))[0],
				bp = tt[1];
			(oh = X.forwardRef(function(e, t) {
				function n() {
					a || (c.onValueChange(o), c.onOpenChange(!1))
				}
				var r = e.__scopeSelect,
					o = e.value,
					i = e.disabled,
					a = void 0 !== i && i,
					l = e.textValue,
					u = Qu(e, ["__scopeSelect", "value", "disabled", "textValue"]),
					c = Qf(gp, r),
					s = ap(gp, r),
					d = c.value === o,
					i = ic(X.useState(null != l ? l : ""), 2),
					e = i[0],
					f = i[1],
					l = ic(X.useState(!1), 2),
					i = l[0],
					p = l[1],
					l = mc(t, function(e) {
						var t;
						return null === (t = s.itemRefCallback) || void 0 === t ? void 0 : t.call(s, e, o, a)
					}),
					t = Ku(),
					m = X.useRef("touch");
				if ("" === o) throw new Error("A <Select.Item /> must have a value prop that is not an empty string. This is because the Select value can be set to an empty string to clear the selection and show the placeholder.");
				return (0, su.jsx)(yp, {
					scope: r,
					value: o,
					disabled: a,
					textId: t,
					isSelected: d,
					onItemTextChange: X.useCallback(function(t) {
						f(function(e) {
							return e || (null !== (e = null == t ? void 0 : t.textContent) && void 0 !== e ? e : "").trim()
						})
					}, []),
					children: (0, su.jsx)(Xf.ItemSlot, {
						scope: r,
						value: o,
						disabled: a,
						textValue: e,
						children: (0, su.jsx)(Zd.div, rc(rc({
							role: "option",
							"aria-labelledby": t,
							"data-highlighted": i ? "" : void 0,
							"aria-selected": d && i,
							"data-state": d ? "checked" : "unchecked",
							"aria-disabled": a || void 0,
							"data-disabled": a ? "" : void 0,
							tabIndex: a ? void 0 : -1
						}, u), {}, {
							ref: l,
							onFocus: dc(u.onFocus, function() {
								return p(!0)
							}),
							onBlur: dc(u.onBlur, function() {
								return p(!1)
							}),
							onClick: dc(u.onClick, function() {
								"mouse" !== m.current && n()
							}),
							onPointerUp: dc(u.onPointerUp, function() {
								"mouse" === m.current && n()
							}),
							onPointerDown: dc(u.onPointerDown, function(e) {
								m.current = e.pointerType
							}),
							onPointerMove: dc(u.onPointerMove, function(e) {
								var t;
								m.current = e.pointerType, a ? null !== (t = s.onItemLeave) && void 0 !== t && t.call(s) : "mouse" === m.current && e.currentTarget.focus({
									preventScroll: !0
								})
							}),
							onPointerLeave: dc(u.onPointerLeave, function(e) {
								var t;
								e.currentTarget === document.activeElement && null !== (t = s.onItemLeave) && void 0 !== t && t.call(s)
							}),
							onKeyDown: dc(u.onKeyDown, function(e) {
								var t;
								"" !== (null === (t = s.searchRef) || void 0 === t ? void 0 : t.current) && " " === e.key || (Jf.includes(e.key) && n(), " " === e.key && e.preventDefault())
							})
						}))
					})
				})
			})).displayName = gp;
			var wp = "SelectItemText";
			(Tm = X.forwardRef(function(e, t) {
				var n = e.__scopeSelect,
					r = (e.className, e.style, Qu(e, ["__scopeSelect", "className", "style"])),
					o = Qf(wp, n),
					i = ap(wp, n),
					a = bp(wp, n),
					l = tp(wp, n),
					e = ic(X.useState(null), 2),
					n = e[0],
					u = e[1],
					t = mc(t, function(e) {
						return u(e)
					}, a.onItemTextChange, function(e) {
						var t;
						return null === (t = i.itemTextRefCallback) || void 0 === t ? void 0 : t.call(i, e, a.value, a.disabled)
					}),
					c = null == n ? void 0 : n.textContent,
					s = X.useMemo(function() {
						return (0, su.jsx)("option", {
							value: a.value,
							disabled: a.disabled,
							children: c
						}, a.value)
					}, [a.disabled, a.value, c]),
					d = l.onNativeOptionAdd,
					f = l.onNativeOptionRemove;
				return Qd(function() {
					return d(s),
						function() {
							return f(s)
						}
				}, [d, f, s]), (0, su.jsxs)(su.Fragment, {
					children: [(0, su.jsx)(Zd.span, rc(rc({
						id: a.textId
					}, r), {}, {
						ref: t
					})), a.isSelected && o.valueNode && !o.valueNodeHasChildren ? _.createPortal(r.children, o.valueNode) : null]
				})
			})).displayName = wp;
			var Sp = "SelectItemIndicator";
			($i = X.forwardRef(function(e, t) {
				var n = e.__scopeSelect,
					e = Qu(e, ["__scopeSelect"]);
				return bp(Sp, n).isSelected ? (0, su.jsx)(Zd.span, rc(rc({
					"aria-hidden": !0
				}, e), {}, {
					ref: t
				})) : null
			})).displayName = Sp;
			var Cp = "SelectScrollUpButton";
			X.forwardRef(function(e, t) {
				var n = ap(Cp, e.__scopeSelect),
					r = fp(Cp, e.__scopeSelect),
					o = ic(X.useState(!1), 2),
					i = o[0],
					a = o[1],
					r = mc(t, r.onScrollButtonChange);
				return Qd(function() {
					if (n.viewport && n.isPositioned) {
						var e = function() {
								var e = 0 < t.scrollTop;
								a(e)
							},
							t = n.viewport;
						return e(), t.addEventListener("scroll", e),
							function() {
								return t.removeEventListener("scroll", e)
							}
					}
				}, [n.viewport, n.isPositioned]), i ? (0, su.jsx)(xp, rc(rc({}, e), {}, {
					ref: r,
					onAutoScroll: function() {
						var e = n.viewport,
							t = n.selectedItem;
						e && t && (e.scrollTop = e.scrollTop - t.offsetHeight)
					}
				})) : null
			}).displayName = Cp;
			var Ip = "SelectScrollDownButton";
			X.forwardRef(function(e, t) {
				var n = ap(Ip, e.__scopeSelect),
					r = fp(Ip, e.__scopeSelect),
					o = ic(X.useState(!1), 2),
					i = o[0],
					a = o[1],
					r = mc(t, r.onScrollButtonChange);
				return Qd(function() {
					if (n.viewport && n.isPositioned) {
						var e = function() {
								var e = t.scrollHeight - t.clientHeight,
									e = Math.ceil(t.scrollTop) < e;
								a(e)
							},
							t = n.viewport;
						return e(), t.addEventListener("scroll", e),
							function() {
								return t.removeEventListener("scroll", e)
							}
					}
				}, [n.viewport, n.isPositioned]), i ? (0, su.jsx)(xp, rc(rc({}, e), {}, {
					ref: r,
					onAutoScroll: function() {
						var e = n.viewport,
							t = n.selectedItem;
						e && t && (e.scrollTop = e.scrollTop + t.offsetHeight)
					}
				})) : null
			}).displayName = Ip;
			var xp = X.forwardRef(function(e, t) {
				var n = e.__scopeSelect,
					r = e.onAutoScroll,
					e = Qu(e, ["__scopeSelect", "onAutoScroll"]),
					o = ap("SelectScrollButton", n),
					i = X.useRef(null),
					a = $f(n),
					l = X.useCallback(function() {
						null !== i.current && (window.clearInterval(i.current), i.current = null)
					}, []);
				return X.useEffect(function() {
					return function() {
						return l()
					}
				}, [l]), Qd(function() {
					var e;
					null === (e = a().find(function(e) {
						return e.ref.current === document.activeElement
					})) || void 0 === e || null !== (e = e.ref.current) && void 0 !== e && e.scrollIntoView({
						block: "nearest"
					})
				}, [a]), (0, su.jsx)(Zd.div, rc(rc({
					"aria-hidden": !0
				}, e), {}, {
					ref: t,
					style: rc({
						flexShrink: 0
					}, e.style),
					onPointerDown: dc(e.onPointerDown, function() {
						null === i.current && (i.current = window.setInterval(r, 50))
					}),
					onPointerMove: dc(e.onPointerMove, function() {
						var e;
						null !== (e = o.onItemLeave) && void 0 !== e && e.call(o), null === i.current && (i.current = window.setInterval(r, 50))
					}),
					onPointerLeave: dc(e.onPointerLeave, function() {
						l()
					})
				}))
			});
			X.forwardRef(function(e, t) {
				e.__scopeSelect;
				e = Qu(e, ["__scopeSelect"]);
				return (0, su.jsx)(Zd.div, rc(rc({
					"aria-hidden": !0
				}, e), {}, {
					ref: t
				}))
			}).displayName = "SelectSeparator";
			var Ep = "SelectArrow";
			X.forwardRef(function(e, t) {
				var n = e.__scopeSelect,
					r = Qu(e, ["__scopeSelect"]),
					o = Yf(n),
					e = Qf(Ep, n),
					n = ap(Ep, n);
				return e.open && "popper" === n.position ? (0, su.jsx)(zd, rc(rc(rc({}, o), r), {}, {
					ref: t
				})) : null
			}).displayName = Ep;
			var Pp = X.forwardRef(function(e, t) {
				e.__scopeSelect;
				var n, r, o = e.value,
					e = Qu(e, ["__scopeSelect", "value"]),
					i = X.useRef(null),
					t = mc(t, i),
					a = (n = o, r = X.useRef({
						value: n,
						previous: n
					}), X.useMemo(function() {
						return r.current.value !== n && (r.current.previous = r.current.value, r.current.value = n), r.current.previous
					}, [n]));
				return X.useEffect(function() {
					var e, t, n = i.current;
					n && (t = window.HTMLSelectElement.prototype, e = Object.getOwnPropertyDescriptor(t, "value").set, a !== o && e && (t = new Event("change", {
						bubbles: !0
					}), e.call(n, o), n.dispatchEvent(t)))
				}, [a, o]), (0, su.jsx)(Zd.select, rc(rc({}, e), {}, {
					style: rc(rc({}, uf), e.style),
					ref: t,
					defaultValue: o
				}))
			});

			function Tp(e) {
				return "" === e || void 0 === e
			}

			function Op(e) {
				var t, o, n = (t = e, o = X.useRef(t), X.useEffect(function() {
						o.current = t
					}), X.useMemo(function() {
						return function() {
							for (var e, t = arguments.length, n = new Array(t), r = 0; r < t; r++) n[r] = arguments[r];
							return null === (e = o.current) || void 0 === e ? void 0 : e.call.apply(e, [o].concat(n))
						}
					}, [])),
					r = X.useRef(""),
					i = X.useRef(0),
					a = X.useCallback(function(e) {
						e = r.current + e;
						n(e),
							function e(t) {
								r.current = t, window.clearTimeout(i.current), "" !== t && (i.current = window.setTimeout(function() {
									return e("")
								}, 1e3))
							}(e)
					}, [n]),
					e = X.useCallback(function() {
						r.current = "", window.clearTimeout(i.current)
					}, []);
				return X.useEffect(function() {
					return function() {
						return window.clearTimeout(i.current)
					}
				}, []), [r, a, e]
			}

			function kp(e, t, n) {
				var r, o, i = 1 < t.length && Array.from(t).every(function(e) {
						return e === t[0]
					}) ? t[0] : t,
					a = n ? e.indexOf(n) : -1,
					a = (r = e, o = Math.max(a, 0), r.map(function(e, t) {
						return r[(o + t) % r.length]
					}));
				1 === i.length && (a = a.filter(function(e) {
					return e !== n
				}));
				a = a.find(function(e) {
					return e.textValue.toLowerCase().startsWith(i.toLowerCase())
				});
				return a !== n ? a : void 0
			}
			Pp.displayName = "SelectBubbleInput", eu(".foundation-web-dropdown.foundation-web-dropdown-disabled{opacity:.5;pointer-events:none}.foundation-web-dropdown-trigger{border-width:1px}.foundation-web-dropdown-trigger.foundation-web-interactable:focus-visible{outline-offset:4px}.foundation-web-menu-item.foundation-web-interactable:focus-visible{outline-offset:-1px}.foundation-web-menu-item.foundation-web-interactable:focus-visible:hover{outline-width:0}.foundation-web-menu-item[data-disabled] span{opacity:.5}");
			var Ap = {
				XSmall: "size-[var(--icon-size-xsmall)]",
				Small: "size-[var(--icon-size-small)]",
				Medium: "size-[var(--icon-size-medium)]",
				Large: "size-[var(--icon-size-large)]"
			};

			function Np(e, t) {
				return function(e) {
					if (Array.isArray(e)) return e
				}(e) || function(e, t) {
					if ("undefined" == typeof Symbol || !(Symbol.iterator in Object(e))) return;
					var n = [],
						r = !0,
						o = !1,
						i = void 0;
					try {
						for (var a, l = e[Symbol.iterator](); !(r = (a = l.next()).done) && (n.push(a.value), !t || n.length !== t); r = !0);
					} catch (e) {
						o = !0, i = e
					} finally {
						try {
							r || null == l.return || l.return()
						} finally {
							if (o) throw i
						}
					}
					return n
				}(e, t) || Lp(e, t) || function() {
					throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
				}()
			}

			function _p(e, t) {
				if (null == e) return {};
				var n, r = function(e, t) {
					if (null == e) return {};
					var n, r, o = {},
						i = Object.keys(e);
					for (r = 0; r < i.length; r++) n = i[r], 0 <= t.indexOf(n) || (o[n] = e[n]);
					return o
				}(e, t);
				if (Object.getOwnPropertySymbols)
					for (var o = Object.getOwnPropertySymbols(e), i = 0; i < o.length; i++) n = o[i], 0 <= t.indexOf(n) || Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n]);
				return r
			}

			function Rp(e) {
				return function(e) {
					if (Array.isArray(e)) return Dp(e)
				}(e) || function(e) {
					if ("undefined" != typeof Symbol && Symbol.iterator in Object(e)) return Array.from(e)
				}(e) || Lp(e) || function() {
					throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
				}()
			}

			function Lp(e, t) {
				if (e) {
					if ("string" == typeof e) return Dp(e, t);
					var n = Object.prototype.toString.call(e).slice(8, -1);
					return "Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n ? Array.from(e) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? Dp(e, t) : void 0
				}
			}

			function Dp(e, t) {
				(null == t || t > e.length) && (t = e.length);
				for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
				return r
			}

			function Mp(t, e) {
				var n, r = Object.keys(t);
				return Object.getOwnPropertySymbols && (n = Object.getOwnPropertySymbols(t), e && (n = n.filter(function(e) {
					return Object.getOwnPropertyDescriptor(t, e).enumerable
				})), r.push.apply(r, n)), r
			}

			function Fp(t) {
				for (var e = 1; e < arguments.length; e++) {
					var n = null != arguments[e] ? arguments[e] : {};
					e % 2 ? Mp(Object(n), !0).forEach(function(e) {
						jp(t, e, n[e])
					}) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : Mp(Object(n)).forEach(function(e) {
						Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
					})
				}
				return t
			}

			function jp(e, t, n) {
				return t in e ? Object.defineProperty(e, t, {
					value: n,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : e[t] = n, e
			}

			function Up(t, n, e) {
				var e = (2 < arguments.length && void 0 !== e ? e : {}).checkForDefaultPrevented,
					r = void 0 === e || e;
				return function(e) {
					if (null != t && t(e), !1 === r || !e.defaultPrevented) return null == n ? void 0 : n(e)
				}
			}

			function Bp(e, t) {
				if ("function" == typeof e) return e(t);
				null != e && (e.current = t)
			}

			function Gp() {
				for (var e = arguments.length, o = new Array(e), t = 0; t < e; t++) o[t] = arguments[t];
				return function(t) {
					var n = !1,
						r = o.map(function(e) {
							e = Bp(e, t);
							return n || "function" != typeof e || (n = !0), e
						});
					if (n) return function() {
						for (var e = 0; e < r.length; e++) {
							var t = r[e];
							"function" == typeof t ? t() : Bp(o[e], null)
						}
					}
				}
			}

			function Hp() {
				for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++) t[n] = arguments[n];
				return X.useCallback(Gp.apply(void 0, t), t)
			}

			function Wp(l, e) {
				var t = 1 < arguments.length && void 0 !== e ? e : [],
					u = [],
					e = function() {
						var n = u.map(function(e) {
							return X.createContext(e)
						});
						return function(e) {
							var t = (null == e ? void 0 : e[l]) || n;
							return X.useMemo(function() {
								return jp({}, "__scope".concat(l), Fp(Fp({}, e), {}, jp({}, l, t)))
							}, [e, t])
						}
					};
				return e.scopeName = l, [function(r, o) {
					var i = X.createContext(o),
						a = u.length;
					u = [].concat(Rp(u), [o]);

					function e(e) {
						var t = e.scope,
							n = e.children,
							r = _p(e, ["scope", "children"]),
							t = (null == t || null === (o = t[l]) || void 0 === o ? void 0 : o[a]) || i,
							o = X.useMemo(function() {
								return r
							}, Object.values(r));
						return (0, su.jsx)(t.Provider, {
							value: o,
							children: n
						})
					}
					return e.displayName = r + "Provider", [e, function(e, t) {
						var n = (null == t || null === (n = t[l]) || void 0 === n ? void 0 : n[a]) || i,
							n = X.useContext(n);
						if (n) return n;
						if (void 0 !== o) return o;
						throw new Error("`".concat(e, "` must be used within `").concat(r, "`"))
					}]
				}, function() {
					for (var e = arguments.length, n = new Array(e), t = 0; t < e; t++) n[t] = arguments[t];
					var o = n[0];
					if (1 === n.length) return o;

					function r() {
						var t = n.map(function(e) {
							return {
								useScope: e(),
								scopeName: e.scopeName
							}
						});
						return function(r) {
							var e = t.reduce(function(e, t) {
								var n = t.useScope,
									t = t.scopeName;
								return Fp(Fp({}, e), n(r)["__scope".concat(t)])
							}, {});
							return X.useMemo(function() {
								return jp({}, "__scope".concat(o.scopeName), e)
							}, [e])
						}
					}
					return r.scopeName = o.scopeName, r
				}.apply(void 0, [e].concat(Rp(t)))]
			}

			function zp(e) {
				var t = X.forwardRef(function(e, t) {
					var n, r = e.children,
						o = _p(e, ["children"]);
					if (X.isValidElement(r)) {
						var i = (i = r, e = null === (n = Object.getOwnPropertyDescriptor(i.props, "ref")) || void 0 === n ? void 0 : n.get, e && "isReactWarning" in e && e.isReactWarning ? i.ref : (e = null === (n = Object.getOwnPropertyDescriptor(i, "ref")) || void 0 === n ? void 0 : n.get) && "isReactWarning" in e && e.isReactWarning ? i.props.ref : i.props.ref || i.ref),
							o = function(r, o) {
								var e, i = Fp({}, o);
								for (e in o) ! function(e) {
									var t = r[e],
										n = o[e];
									/^on[A-Z]/.test(e) ? t && n ? i[e] = function() {
										n.apply(void 0, arguments), t.apply(void 0, arguments)
									} : t && (i[e] = t) : "style" === e ? i[e] = Fp(Fp({}, t), n) : "className" === e && (i[e] = [t, n].filter(Boolean).join(" "))
								}(e);
								return Fp(Fp({}, r), i)
							}(o, r.props);
						return r.type !== X.Fragment && (o.ref = t ? Gp(t, i) : i), X.cloneElement(r, o)
					}
					return 1 < X.Children.count(r) ? X.Children.only(null) : null
				});
				return t.displayName = "".concat(e, ".SlotClone"), t
			}
			$().forwardRef(function(e, t) {
				var n = e.name,
					r = e.size,
					o = void 0 === r ? "Medium" : r,
					r = e.className;
				e.children;
				e = Zl(e, ["name", "size", "className", "children"]);
				return $().createElement("span", Yl({
					ref: t,
					role: "presentation",
					className: Ql("icon", n, Ap[o], r)
				}, e))
			}).displayName = "Icon";
			var Vp = Symbol("radix.slottable");

			function qp(e) {
				return X.isValidElement(e) && "function" == typeof e.type && "__radixId" in e.type && e.type.__radixId === Vp
			}
			var Jp = ["a", "button", "div", "form", "h2", "h3", "img", "input", "label", "li", "nav", "ol", "p", "span", "svg", "ul"].reduce(function(e, r) {
				var t, a, n, o = (t = "Primitive.".concat(r), a = zp(t), (n = X.forwardRef(function(e, t) {
						var n = e.children,
							r = _p(e, ["children"]),
							e = X.Children.toArray(n),
							o = e.find(qp);
						if (o) {
							var i = o.props.children,
								e = e.map(function(e) {
									return e === o ? 1 < X.Children.count(i) ? X.Children.only(null) : X.isValidElement(i) ? i.props.children : null : e
								});
							return (0, su.jsx)(a, Fp(Fp({}, r), {}, {
								ref: t,
								children: X.isValidElement(i) ? X.cloneElement(i, void 0, e) : null
							}))
						}
						return (0, su.jsx)(a, Fp(Fp({}, r), {}, {
							ref: t,
							children: n
						}))
					})).displayName = "".concat(t, ".Slot"), n),
					n = X.forwardRef(function(e, t) {
						var n = e.asChild,
							e = _p(e, ["asChild"]),
							n = n ? o : r;
						return "undefined" != typeof window && (window[Symbol.for("radix-ui")] = !0), (0, su.jsx)(n, Fp(Fp({}, e), {}, {
							ref: t
						}))
					});
				return n.displayName = "Primitive.".concat(r), Fp(Fp({}, e), {}, jp({}, r, n))
			}, {});

			function Kp(t, n, e) {
				var e = (2 < arguments.length && void 0 !== e ? e : {}).checkForDefaultPrevented,
					r = void 0 === e || e;
				return function(e) {
					if (null != t && t(e), !1 === r || !e.defaultPrevented) return null == n ? void 0 : n(e)
				}
			}

			function Xp() {
				for (var e = arguments.length, n = new Array(e), t = 0; t < e; t++) n[t] = arguments[t];
				var o = n[0];
				if (1 === n.length) return o;

				function r() {
					var t = n.map(function(e) {
						return {
							useScope: e(),
							scopeName: e.scopeName
						}
					});
					return function(r) {
						var e = t.reduce(function(e, t) {
							var n = t.useScope,
								t = t.scopeName;
							return Fp(Fp({}, e), n(r)["__scope".concat(t)])
						}, {});
						return X.useMemo(function() {
							return jp({}, "__scope".concat(o.scopeName), e)
						}, [e])
					}
				}
				return r.scopeName = o.scopeName, r
			}

			function $p(e, t) {
				if ("function" == typeof e) return e(t);
				null != e && (e.current = t)
			}

			function Yp() {
				for (var e = arguments.length, o = new Array(e), t = 0; t < e; t++) o[t] = arguments[t];
				return function(t) {
					var n = !1,
						r = o.map(function(e) {
							e = $p(e, t);
							return n || "function" != typeof e || (n = !0), e
						});
					if (n) return function() {
						for (var e = 0; e < r.length; e++) {
							var t = r[e];
							"function" == typeof t ? t() : $p(o[e], null)
						}
					}
				}
			}

			function Zp() {
				for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++) t[n] = arguments[n];
				return X.useCallback(Yp.apply(void 0, t), t)
			}

			function Qp(e) {
				var t, n, a = (t = e, (n = X.forwardRef(function(e, t) {
						var n, r = e.children,
							o = _p(e, ["children"]);
						if (X.isValidElement(r)) {
							var i = (i = r, e = null === (n = Object.getOwnPropertyDescriptor(i.props, "ref")) || void 0 === n ? void 0 : n.get, e && "isReactWarning" in e && e.isReactWarning ? i.ref : (e = null === (n = Object.getOwnPropertyDescriptor(i, "ref")) || void 0 === n ? void 0 : n.get) && "isReactWarning" in e && e.isReactWarning ? i.props.ref : i.props.ref || i.ref),
								o = function(r, o) {
									var e, i = Fp({}, o);
									for (e in o) ! function(e) {
										var t = r[e],
											n = o[e];
										/^on[A-Z]/.test(e) ? t && n ? i[e] = function() {
											n.apply(void 0, arguments), t.apply(void 0, arguments)
										} : t && (i[e] = t) : "style" === e ? i[e] = Fp(Fp({}, t), n) : "className" === e && (i[e] = [t, n].filter(Boolean).join(" "))
									}(e);
									return Fp(Fp({}, r), i)
								}(o, r.props);
							return r.type !== X.Fragment && (o.ref = t ? Yp(t, i) : i), X.cloneElement(r, o)
						}
						return 1 < X.Children.count(r) ? X.Children.only(null) : null
					})).displayName = "".concat(t, ".SlotClone"), n),
					n = X.forwardRef(function(e, t) {
						var n = e.children,
							r = _p(e, ["children"]),
							e = X.Children.toArray(n),
							o = e.find(tm);
						if (o) {
							var i = o.props.children,
								e = e.map(function(e) {
									return e === o ? 1 < X.Children.count(i) ? X.Children.only(null) : X.isValidElement(i) ? i.props.children : null : e
								});
							return (0, su.jsx)(a, Fp(Fp({}, r), {}, {
								ref: t,
								children: X.isValidElement(i) ? X.cloneElement(i, void 0, e) : null
							}))
						}
						return (0, su.jsx)(a, Fp(Fp({}, r), {}, {
							ref: t,
							children: n
						}))
					});
				return n.displayName = "".concat(e, ".Slot"), n
			}
			var em = Symbol("radix.slottable");

			function tm(e) {
				return X.isValidElement(e) && "function" == typeof e.type && "__radixId" in e.type && e.type.__radixId === em
			}

			function nm(e, t) {
				if ("function" == typeof e) return e(t);
				null != e && (e.current = t)
			}

			function rm() {
				for (var e = arguments.length, o = new Array(e), t = 0; t < e; t++) o[t] = arguments[t];
				return function(t) {
					var n = !1,
						r = o.map(function(e) {
							e = nm(e, t);
							return n || "function" != typeof e || (n = !0), e
						});
					if (n) return function() {
						for (var e = 0; e < r.length; e++) {
							var t = r[e];
							"function" == typeof t ? t() : nm(o[e], null)
						}
					}
				}
			}

			function om() {
				for (var e = arguments.length, n = new Array(e), t = 0; t < e; t++) n[t] = arguments[t];
				var o = n[0];
				if (1 === n.length) return o;

				function r() {
					var t = n.map(function(e) {
						return {
							useScope: e(),
							scopeName: e.scopeName
						}
					});
					return function(r) {
						var e = t.reduce(function(e, t) {
							var n = t.useScope,
								t = t.scopeName;
							return Fp(Fp({}, e), n(r)["__scope".concat(t)])
						}, {});
						return X.useMemo(function() {
							return jp({}, "__scope".concat(o.scopeName), e)
						}, [e])
					}
				}
				return r.scopeName = o.scopeName, r
			}

			function im(e) {
				var t = X.forwardRef(function(e, t) {
					var n, r = e.children,
						o = _p(e, ["children"]);
					if (X.isValidElement(r)) {
						var i = (i = r, e = null === (n = Object.getOwnPropertyDescriptor(i.props, "ref")) || void 0 === n ? void 0 : n.get, e && "isReactWarning" in e && e.isReactWarning ? i.ref : (e = null === (n = Object.getOwnPropertyDescriptor(i, "ref")) || void 0 === n ? void 0 : n.get) && "isReactWarning" in e && e.isReactWarning ? i.props.ref : i.props.ref || i.ref),
							o = function(r, o) {
								var e, i = Fp({}, o);
								for (e in o) ! function(e) {
									var t = r[e],
										n = o[e];
									/^on[A-Z]/.test(e) ? t && n ? i[e] = function() {
										n.apply(void 0, arguments), t.apply(void 0, arguments)
									} : t && (i[e] = t) : "style" === e ? i[e] = Fp(Fp({}, t), n) : "className" === e && (i[e] = [t, n].filter(Boolean).join(" "))
								}(e);
								return Fp(Fp({}, r), i)
							}(o, r.props);
						return r.type !== X.Fragment && (o.ref = t ? rm(t, i) : i), X.cloneElement(r, o)
					}
					return 1 < X.Children.count(r) ? X.Children.only(null) : null
				});
				return t.displayName = "".concat(e, ".SlotClone"), t
			}
			var am = Symbol("radix.slottable");

			function lm(e) {
				return X.isValidElement(e) && "function" == typeof e.type && "__radixId" in e.type && e.type.__radixId === am
			}
			var um = ["a", "button", "div", "form", "h2", "h3", "img", "input", "label", "li", "nav", "ol", "p", "span", "svg", "ul"].reduce(function(e, r) {
				var t, a, n, o = (t = "Primitive.".concat(r), a = im(t), (n = X.forwardRef(function(e, t) {
						var n = e.children,
							r = _p(e, ["children"]),
							e = X.Children.toArray(n),
							o = e.find(lm);
						if (o) {
							var i = o.props.children,
								e = e.map(function(e) {
									return e === o ? 1 < X.Children.count(i) ? X.Children.only(null) : X.isValidElement(i) ? i.props.children : null : e
								});
							return (0, su.jsx)(a, Fp(Fp({}, r), {}, {
								ref: t,
								children: X.isValidElement(i) ? X.cloneElement(i, void 0, e) : null
							}))
						}
						return (0, su.jsx)(a, Fp(Fp({}, r), {}, {
							ref: t,
							children: n
						}))
					})).displayName = "".concat(t, ".Slot"), n),
					n = X.forwardRef(function(e, t) {
						var n = e.asChild,
							e = _p(e, ["asChild"]),
							n = n ? o : r;
						return "undefined" != typeof window && (window[Symbol.for("radix-ui")] = !0), (0, su.jsx)(n, Fp(Fp({}, e), {}, {
							ref: t
						}))
					});
				return n.displayName = "Primitive.".concat(r), Fp(Fp({}, e), {}, jp({}, r, n))
			}, {});

			function cm(e) {
				var o = X.useRef(e);
				return X.useEffect(function() {
					o.current = e
				}), X.useMemo(function() {
					return function() {
						for (var e, t = arguments.length, n = new Array(t), r = 0; r < t; r++) n[r] = arguments[r];
						return null === (e = o.current) || void 0 === e ? void 0 : e.call.apply(e, [o].concat(n))
					}
				}, [])
			}
			var sm = "rovingFocusGroup.onEntryFocus",
				dm = {
					bubbles: !1,
					cancelable: !0
				},
				ql = function(n) {
					var e = n + "CollectionProvider",
						t = Np(function(l, e) {
							var t = 1 < arguments.length && void 0 !== e ? e : [],
								u = [],
								e = function() {
									var n = u.map(function(e) {
										return X.createContext(e)
									});
									return function(e) {
										var t = (null == e ? void 0 : e[l]) || n;
										return X.useMemo(function() {
											return jp({}, "__scope".concat(l), Fp(Fp({}, e), {}, jp({}, l, t)))
										}, [e, t])
									}
								};
							return e.scopeName = l, [function(r, o) {
								var i = X.createContext(o),
									a = u.length;
								u = [].concat(Rp(u), [o]);

								function e(e) {
									var t = e.scope,
										n = e.children,
										r = _p(e, ["scope", "children"]),
										t = (null == t || null === (o = t[l]) || void 0 === o ? void 0 : o[a]) || i,
										o = X.useMemo(function() {
											return r
										}, Object.values(r));
									return (0, su.jsx)(t.Provider, {
										value: o,
										children: n
									})
								}
								return e.displayName = r + "Provider", [e, function(e, t) {
									var n = (null == t || null === (n = t[l]) || void 0 === n ? void 0 : n[a]) || i,
										n = X.useContext(n);
									if (n) return n;
									if (void 0 !== o) return o;
									throw new Error("`".concat(e, "` must be used within `").concat(r, "`"))
								}]
							}, Xp.apply(void 0, [e].concat(Rp(t)))]
						}(e), 2),
						r = t[0],
						o = t[1],
						t = Np(r(e, {
							collectionRef: {
								current: null
							},
							itemMap: new Map
						}), 2),
						i = t[0],
						l = t[1],
						r = function(e) {
							var t = e.scope,
								n = e.children,
								r = $().useRef(null),
								e = $().useRef(new Map).current;
							return (0, su.jsx)(i, {
								scope: t,
								itemMap: e,
								collectionRef: r,
								children: n
							})
						};
					r.displayName = e;
					var a = n + "CollectionSlot",
						u = Qp(a),
						t = $().forwardRef(function(e, t) {
							var n = e.scope,
								e = e.children,
								n = Zp(t, l(a, n).collectionRef);
							return (0, su.jsx)(u, {
								ref: n,
								children: e
							})
						});
					t.displayName = a;
					var c = n + "CollectionItemSlot",
						s = "data-radix-collection-item",
						d = Qp(c),
						e = $().forwardRef(function(e, t) {
							var n = e.scope,
								r = e.children,
								o = _p(e, ["scope", "children"]),
								i = $().useRef(null),
								t = Zp(t, i),
								a = l(c, n);
							return $().useEffect(function() {
								return a.itemMap.set(i, Fp({
										ref: i
									}, o)),
									function() {
										a.itemMap.delete(i)
									}
							}), (0, su.jsx)(d, (jp(n = {}, s, ""), jp(n, "ref", t), jp(n, "children", r), n))
						});
					return e.displayName = c, [{
						Provider: r,
						Slot: t,
						ItemSlot: e
					}, function(e) {
						var t = l(n + "CollectionConsumer", e);
						return $().useCallback(function() {
							var e = t.collectionRef.current;
							if (!e) return [];
							var n = Array.from(e.querySelectorAll("[".concat(s, "]")));
							return Array.from(t.itemMap.values()).sort(function(e, t) {
								return n.indexOf(e.ref.current) - n.indexOf(t.ref.current)
							})
						}, [t.collectionRef, t.itemMap])
					}, o]
				}(Ki = "RovingFocusGroup"),
				fm = (Kl = Np(ql, 3))[0],
				pm = Kl[1],
				lt = (oe = Np(function(l, e) {
					var t = 1 < arguments.length && void 0 !== e ? e : [],
						u = [],
						e = function() {
							var n = u.map(function(e) {
								return X.createContext(e)
							});
							return function(e) {
								var t = (null == e ? void 0 : e[l]) || n;
								return X.useMemo(function() {
									return jp({}, "__scope".concat(l), Fp(Fp({}, e), {}, jp({}, l, t)))
								}, [e, t])
							}
						};
					return e.scopeName = l, [function(r, o) {
						var i = X.createContext(o),
							a = u.length;
						u = [].concat(Rp(u), [o]);

						function e(e) {
							var t = e.scope,
								n = e.children,
								r = _p(e, ["scope", "children"]),
								t = (null == t || null === (o = t[l]) || void 0 === o ? void 0 : o[a]) || i,
								o = X.useMemo(function() {
									return r
								}, Object.values(r));
							return (0, su.jsx)(t.Provider, {
								value: o,
								children: n
							})
						}
						return e.displayName = r + "Provider", [e, function(e, t) {
							var n = (null == t || null === (n = t[l]) || void 0 === n ? void 0 : n[a]) || i,
								n = X.useContext(n);
							if (n) return n;
							if (void 0 !== o) return o;
							throw new Error("`".concat(e, "` must be used within `").concat(r, "`"))
						}]
					}, om.apply(void 0, [e].concat(Rp(t)))]
				}(Ki, [Kl[2]]), 2))[0],
				mm = oe[1],
				vm = (Lu = Np(lt(Ki), 2))[0],
				hm = Lu[1];
			(et = X.forwardRef(function(e, t) {
				return (0, su.jsx)(fm.Provider, {
					scope: e.__scopeRovingFocusGroup,
					children: (0, su.jsx)(fm.Slot, {
						scope: e.__scopeRovingFocusGroup,
						children: (0, su.jsx)(gm, Fp(Fp({}, e), {}, {
							ref: t
						}))
					})
				})
			})).displayName = Ki;
			var gm = X.forwardRef(function(e, t) {
					var n, r, o, i, a, l, u, c = e.__scopeRovingFocusGroup,
						s = e.orientation,
						d = e.loop,
						f = void 0 !== d && d,
						p = e.dir,
						m = e.currentTabStopId,
						v = e.defaultCurrentTabStopId,
						h = e.onCurrentTabStopIdChange,
						g = e.onEntryFocus,
						d = e.preventScrollOnEntryFocus,
						y = void 0 !== d && d,
						d = _p(e, ["__scopeRovingFocusGroup", "orientation", "loop", "dir", "currentTabStopId", "defaultCurrentTabStopId", "onCurrentTabStopIdChange", "onEntryFocus", "preventScrollOnEntryFocus"]),
						b = X.useRef(null),
						t = function() {
							for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++) t[n] = arguments[n];
							return X.useCallback(rm.apply(void 0, t), t)
						}(t, b),
						p = zu(p),
						m = (i = (m = {
							prop: m,
							defaultProp: v,
							onChange: h
						}).prop, v = m.defaultProp, h = m.onChange, v = (h = {
							defaultProp: v,
							onChange: m = void 0 === h ? function() {} : h
						}).defaultProp, h = h.onChange, v = X.useState(v), n = Np(v, 1)[0], r = X.useRef(n), o = cm(h), X.useEffect(function() {
							r.current !== n && (o(n), r.current = n)
						}, [n, r, o]), h = (v = Np(h = v, 2))[0], a = v[1], h = (l = void 0 !== i) ? i : h, u = cm(m), [h, X.useCallback(function(e) {
							var t;
							l ? (t = "function" == typeof e ? e(i) : e) !== i && u(t) : a(e)
						}, [l, i, a, u])]),
						h = Np(m, 2),
						m = h[0],
						w = void 0 === m ? null : m,
						S = h[1],
						h = Np(X.useState(!1), 2),
						C = h[0],
						I = h[1],
						x = cm(g),
						E = pm(c),
						P = X.useRef(!1),
						h = Np(X.useState(0), 2),
						g = h[0],
						T = h[1];
					return X.useEffect(function() {
						var e = b.current;
						if (e) return e.addEventListener(sm, x),
							function() {
								return e.removeEventListener(sm, x)
							}
					}, [x]), (0, su.jsx)(vm, {
						scope: c,
						orientation: s,
						dir: p,
						loop: f,
						currentTabStopId: w,
						onItemFocus: X.useCallback(function(e) {
							return S(e)
						}, [S]),
						onItemShiftTab: X.useCallback(function() {
							return I(!0)
						}, []),
						onFocusableItemAdd: X.useCallback(function() {
							return T(function(e) {
								return e + 1
							})
						}, []),
						onFocusableItemRemove: X.useCallback(function() {
							return T(function(e) {
								return e - 1
							})
						}, []),
						children: (0, su.jsx)(um.div, Fp(Fp({
							tabIndex: C || 0 === g ? -1 : 0,
							"data-orientation": s
						}, d), {}, {
							ref: t,
							style: Fp({
								outline: "none"
							}, e.style),
							onMouseDown: Kp(e.onMouseDown, function() {
								P.current = !0
							}),
							onFocus: Kp(e.onFocus, function(e) {
								var t = !P.current;
								e.target === e.currentTarget && t && !C && (t = new CustomEvent(sm, dm), e.currentTarget.dispatchEvent(t), t.defaultPrevented || wm([(t = E().filter(function(e) {
									return e.focusable
								})).find(function(e) {
									return e.active
								}), t.find(function(e) {
									return e.id === w
								})].concat(Rp(t)).filter(Boolean).map(function(e) {
									return e.ref.current
								}), y)), P.current = !1
							}),
							onBlur: Kp(e.onBlur, function() {
								return I(!1)
							})
						}))
					})
				}),
				ym = "RovingFocusGroupItem";
			(tt = X.forwardRef(function(e, t) {
				var n = e.__scopeRovingFocusGroup,
					r = e.focusable,
					o = void 0 === r || r,
					i = e.active,
					a = void 0 !== i && i,
					l = e.tabStopId,
					r = _p(e, ["__scopeRovingFocusGroup", "focusable", "active", "tabStopId"]),
					i = Ku(),
					u = l || i,
					c = hm(ym, n),
					i = c.currentTabStopId === u,
					s = pm(n),
					d = c.onFocusableItemAdd,
					f = c.onFocusableItemRemove;
				return X.useEffect(function() {
					if (o) return d(),
						function() {
							return f()
						}
				}, [o, d, f]), (0, su.jsx)(fm.ItemSlot, {
					scope: n,
					id: u,
					focusable: o,
					active: a,
					children: (0, su.jsx)(um.span, Fp(Fp({
						tabIndex: i ? 0 : -1,
						"data-orientation": c.orientation
					}, r), {}, {
						ref: t,
						onMouseDown: Kp(e.onMouseDown, function(e) {
							o ? c.onItemFocus(u) : e.preventDefault()
						}),
						onFocus: Kp(e.onFocus, function() {
							return c.onItemFocus(u)
						}),
						onKeyDown: Kp(e.onKeyDown, function(e) {
							var t, n, r, o, i, a;
							"Tab" === e.key && e.shiftKey ? c.onItemShiftTab() : e.target === e.currentTarget && (t = c.orientation, n = c.dir, r = e.key, r = "rtl" !== n ? r : "ArrowLeft" === r ? "ArrowRight" : "ArrowRight" === r ? "ArrowLeft" : r, void 0 !== (r = "vertical" === t && ["ArrowLeft", "ArrowRight"].includes(r) || "horizontal" === t && ["ArrowUp", "ArrowDown"].includes(r) ? void 0 : bm[r]) && (e.metaKey || e.ctrlKey || e.altKey || e.shiftKey || (e.preventDefault(), o = s().filter(function(e) {
								return e.focusable
							}).map(function(e) {
								return e.ref.current
							}), "last" === r ? o.reverse() : "prev" !== r && "next" !== r || ("prev" === r && o.reverse(), e = o.indexOf(e.currentTarget), o = c.loop ? (a = e + 1, (i = o).map(function(e, t) {
								return i[(a + t) % i.length]
							})) : o.slice(e + 1)), setTimeout(function() {
								return wm(o)
							}))))
						})
					}))
				})
			})).displayName = ym;
			var bm = {
				ArrowLeft: "prev",
				ArrowUp: "prev",
				ArrowRight: "next",
				ArrowDown: "next",
				PageUp: "first",
				Home: "first",
				PageDown: "last",
				End: "last"
			};

			function wm(e, t) {
				var n = 1 < arguments.length && void 0 !== t && t,
					r = document.activeElement,
					o = function(e, t) {
						var n;
						if ("undefined" == typeof Symbol || null == e[Symbol.iterator]) {
							if (Array.isArray(e) || (n = Lp(e)) || t && e && "number" == typeof e.length) {
								n && (e = n);
								var r = 0,
									t = function() {};
								return {
									s: t,
									n: function() {
										return r >= e.length ? {
											done: !0
										} : {
											done: !1,
											value: e[r++]
										}
									},
									e: function(e) {
										throw e
									},
									f: t
								}
							}
							throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
						}
						var o, i = !0,
							a = !1;
						return {
							s: function() {
								n = e[Symbol.iterator]()
							},
							n: function() {
								var e = n.next();
								return i = e.done, e
							},
							e: function(e) {
								a = !0, o = e
							},
							f: function() {
								try {
									i || null == n.return || n.return()
								} finally {
									if (a) throw o
								}
							}
						}
					}(e);
				try {
					for (o.s(); !(i = o.n()).done;) {
						var i = i.value;
						if (i === r) return;
						if (i.focus({
								preventScroll: n
							}), document.activeElement !== r) return
					}
				} catch (e) {
					o.e(e)
				} finally {
					o.f()
				}
			}
			var Sm = et,
				Cm = tt;

			function Im(e) {
				var o = X.useRef(e);
				return X.useEffect(function() {
					o.current = e
				}), X.useMemo(function() {
					return function() {
						for (var e, t = arguments.length, n = new Array(t), r = 0; r < t; r++) n[r] = arguments[r];
						return null === (e = o.current) || void 0 === e ? void 0 : e.call.apply(e, [o].concat(n))
					}
				}, [])
			}

			function xm(e) {
				var o, n, t, i, r, a, l, u, c, s, d = e.present,
					f = e.children,
					p = (o = d, t = Np(X.useState(), 2), i = t[0], r = t[1], a = X.useRef({}), l = X.useRef(o), u = X.useRef("none"), t = o ? "mounted" : "unmounted", t = Np((n = {
						mounted: {
							UNMOUNT: "unmounted",
							ANIMATION_OUT: "unmountSuspended"
						},
						unmountSuspended: {
							MOUNT: "mounted",
							ANIMATION_END: "unmounted"
						},
						unmounted: {
							MOUNT: "mounted"
						}
					}, X.useReducer(function(e, t) {
						return null !== (t = n[e][t]) && void 0 !== t ? t : e
					}, t)), 2), c = t[0], s = t[1], X.useEffect(function() {
						var e = Pm(a.current);
						u.current = "mounted" === c ? e : "none"
					}, [c]), Em(function() {
						var e, t, n = a.current,
							r = l.current;
						r !== o && (e = u.current, t = Pm(n), o ? s("MOUNT") : "none" === t || "none" === (null == n ? void 0 : n.display) ? s("UNMOUNT") : s(r && e !== t ? "ANIMATION_OUT" : "UNMOUNT"), l.current = o)
					}, [o, s]), Em(function() {
						if (i) {
							var e, r, o = null !== (e = i.ownerDocument.defaultView) && void 0 !== e ? e : window,
								t = function(e) {
									var t, n = Pm(a.current).includes(e.animationName);
									e.target === i && n && (s("ANIMATION_END"), !l.current) && (t = i.style.animationFillMode, i.style.animationFillMode = "forwards", r = o.setTimeout(function() {
										"forwards" === i.style.animationFillMode && (i.style.animationFillMode = t)
									}))
								},
								n = function(e) {
									e.target === i && (u.current = Pm(a.current))
								};
							return i.addEventListener("animationstart", n), i.addEventListener("animationcancel", t), i.addEventListener("animationend", t),
								function() {
									o.clearTimeout(r), i.removeEventListener("animationstart", n), i.removeEventListener("animationcancel", t), i.removeEventListener("animationend", t)
								}
						}
						s("ANIMATION_END")
					}, [i, s]), {
						isPresent: ["mounted", "unmountSuspended"].includes(c),
						ref: X.useCallback(function(e) {
							e && (a.current = getComputedStyle(e)), r(e)
						}, [])
					}),
					m = "function" == typeof f ? f({
						present: p.isPresent
					}) : X.Children.only(f),
					e = Hp(p.ref, (e = m, (t = null === (d = Object.getOwnPropertyDescriptor(e.props, "ref")) || void 0 === d ? void 0 : d.get) && "isReactWarning" in t && t.isReactWarning ? e.ref : (t = null === (d = Object.getOwnPropertyDescriptor(e, "ref")) || void 0 === d ? void 0 : d.get) && "isReactWarning" in t && t.isReactWarning ? e.props.ref : e.props.ref || e.ref));
				return "function" == typeof f || p.isPresent ? X.cloneElement(m, {
					ref: e
				}) : null
			}
			var Em = null !== globalThis && void 0 !== globalThis && globalThis.document ? X.useLayoutEffect : function() {};

			function Pm(e) {
				return (null == e ? void 0 : e.animationName) || "none"
			}
			xm.displayName = "Presence";
			var Tm = (oh = Np(Wp("Radio"), 2))[0],
				$i = oh[1],
				Om = (ql = Np(Tm("Radio"), 2))[0],
				km = ql[1],
				Am = X.forwardRef(function(e, t) {
					var n = e.__scopeRadio,
						r = e.name,
						o = e.checked,
						i = void 0 !== o && o,
						a = e.required,
						l = e.disabled,
						u = e.value,
						c = void 0 === u ? "on" : u,
						s = e.onCheck,
						d = e.form,
						f = _p(e, ["__scopeRadio", "name", "checked", "required", "disabled", "value", "onCheck", "form"]),
						o = Np(X.useState(null), 2),
						u = o[0],
						p = o[1],
						t = Hp(t, function(e) {
							return p(e)
						}),
						m = X.useRef(!1),
						v = !u || d || !!u.closest("form");
					return (0, su.jsxs)(Om, {
						scope: n,
						checked: i,
						disabled: l,
						children: [(0, su.jsx)(Jp.button, Fp(Fp({
							type: "button",
							role: "radio",
							"aria-checked": i,
							"data-state": Lm(i),
							"data-disabled": l ? "" : void 0,
							disabled: l,
							value: c
						}, f), {}, {
							ref: t,
							onClick: Up(e.onClick, function(e) {
								i || null != s && s(), v && (m.current = e.isPropagationStopped(), m.current || e.stopPropagation())
							})
						})), v && (0, su.jsx)(Rm, {
							control: u,
							bubbles: !m.current,
							name: r,
							value: c,
							checked: i,
							required: a,
							disabled: l,
							form: d,
							style: {
								transform: "translateX(-100%)"
							}
						})]
					})
				});
			Am.displayName = "Radio";
			var Nm = "RadioIndicator",
				_m = X.forwardRef(function(e, t) {
					var n = e.__scopeRadio,
						r = e.forceMount,
						e = _p(e, ["__scopeRadio", "forceMount"]),
						n = km(Nm, n);
					return (0, su.jsx)(xm, {
						present: r || n.checked,
						children: (0, su.jsx)(Jp.span, Fp(Fp({
							"data-state": Lm(n.checked),
							"data-disabled": n.disabled ? "" : void 0
						}, e), {}, {
							ref: t
						}))
					})
				});
			_m.displayName = Nm;
			var Rm = function(e) {
				var r, o, t, n, i = e.control,
					a = e.checked,
					l = e.bubbles,
					u = void 0 === l || l,
					c = _p(e, ["control", "checked", "bubbles"]),
					s = X.useRef(null),
					d = (t = a, n = X.useRef({
						value: t,
						previous: t
					}), X.useMemo(function() {
						return n.current.value !== t && (n.current.previous = n.current.value, n.current.value = t), n.current.previous
					}, [t])),
					i = (r = i, l = Np(X.useState(void 0), 2), i = l[0], o = l[1], Em(function() {
						if (r) {
							o({
								width: r.offsetWidth,
								height: r.offsetHeight
							});
							var e = new ResizeObserver(function(e) {
								var t, n;
								Array.isArray(e) && e.length && (n = "borderBoxSize" in (e = e[0]) ? (t = e.borderBoxSize, t = (n = Array.isArray(t) ? t[0] : t).inlineSize, n.blockSize) : (t = r.offsetWidth, r.offsetHeight), o({
									width: t,
									height: n
								}))
							});
							return e.observe(r, {
									box: "border-box"
								}),
								function() {
									return e.unobserve(r)
								}
						}
						o(void 0)
					}, [r]), i);
				return X.useEffect(function() {
					var e = s.current,
						t = window.HTMLInputElement.prototype,
						n = Object.getOwnPropertyDescriptor(t, "checked").set;
					d !== a && n && (t = new Event("click", {
						bubbles: u
					}), n.call(e, a), e.dispatchEvent(t))
				}, [d, a, u]), (0, su.jsx)("input", Fp(Fp({
					type: "radio",
					"aria-hidden": !0,
					defaultChecked: a
				}, c), {}, {
					tabIndex: -1,
					ref: s,
					style: Fp(Fp(Fp({}, e.style), i), {}, {
						position: "absolute",
						pointerEvents: "none",
						opacity: 0,
						margin: 0
					})
				}))
			};

			function Lm(e) {
				return e ? "checked" : "unchecked"
			}
			var Dm = ["ArrowUp", "ArrowDown", "ArrowLeft", "ArrowRight"],
				lt = (oe = Np(Wp(Kl = "RadioGroup", [mm, $i]), 2))[0],
				Mm = (oe[1], mm()),
				Fm = $i(),
				jm = (Lu = Np(lt(Kl), 2))[0],
				Um = Lu[1],
				Bm = X.forwardRef(function(e, t) {
					var n, r, o, i, a, l, u, c = e.__scopeRadioGroup,
						s = e.name,
						d = e.defaultValue,
						f = e.value,
						p = e.required,
						m = void 0 !== p && p,
						v = e.disabled,
						h = void 0 !== v && v,
						g = e.orientation,
						y = e.dir,
						b = e.loop,
						p = void 0 === b || b,
						v = e.onValueChange,
						b = _p(e, ["__scopeRadioGroup", "name", "defaultValue", "value", "required", "disabled", "orientation", "dir", "loop", "onValueChange"]),
						e = Mm(c),
						y = zu(y),
						f = (i = (f = {
							prop: f,
							defaultProp: d,
							onChange: v
						}).prop, d = f.defaultProp, v = f.onChange, d = (v = {
							defaultProp: d,
							onChange: f = void 0 === v ? function() {} : v
						}).defaultProp, v = v.onChange, d = X.useState(d), n = Np(d, 1)[0], r = X.useRef(n), o = Im(v), X.useEffect(function() {
							r.current !== n && (o(n), r.current = n)
						}, [n, r, o]), v = (d = Np(v = d, 2))[0], a = d[1], v = (l = void 0 !== i) ? i : v, u = Im(f), [v, X.useCallback(function(e) {
							var t;
							l ? (t = "function" == typeof e ? e(i) : e) !== i && u(t) : a(e)
						}, [l, i, a, u])]),
						v = Np(f, 2),
						f = v[0],
						v = v[1];
					return (0, su.jsx)(jm, {
						scope: c,
						name: s,
						required: m,
						disabled: h,
						value: f,
						onValueChange: v,
						children: (0, su.jsx)(Sm, Fp(Fp({
							asChild: !0
						}, e), {}, {
							orientation: g,
							dir: y,
							loop: p,
							children: (0, su.jsx)(Jp.div, Fp(Fp({
								role: "radiogroup",
								"aria-required": m,
								"aria-orientation": g,
								"data-disabled": h ? "" : void 0,
								dir: y
							}, b), {}, {
								ref: t
							}))
						}))
					})
				});
			Bm.displayName = Kl;
			var Gm = "RadioGroupItem",
				Hm = X.forwardRef(function(e, t) {
					var n = e.__scopeRadioGroup,
						r = e.disabled,
						o = _p(e, ["__scopeRadioGroup", "disabled"]),
						i = Um(Gm, n),
						a = i.disabled || r,
						e = Mm(n),
						r = Fm(n),
						l = X.useRef(null),
						n = Hp(t, l),
						t = i.value === o.value,
						u = X.useRef(!1);
					return X.useEffect(function() {
						function e(e) {
							Dm.includes(e.key) && (u.current = !0)
						}

						function t() {
							return u.current = !1
						}
						return document.addEventListener("keydown", e), document.addEventListener("keyup", t),
							function() {
								document.removeEventListener("keydown", e), document.removeEventListener("keyup", t)
							}
					}, []), (0, su.jsx)(Cm, Fp(Fp({
						asChild: !0
					}, e), {}, {
						focusable: !a,
						active: t,
						children: (0, su.jsx)(Am, Fp(Fp(Fp({
							disabled: a,
							required: i.required,
							checked: t
						}, r), o), {}, {
							name: i.name,
							ref: n,
							onCheck: function() {
								return i.onValueChange(o.value)
							},
							onKeyDown: Up(function(e) {
								"Enter" === e.key && e.preventDefault()
							}),
							onFocus: Up(o.onFocus, function() {
								var e;
								u.current && null !== (e = l.current) && void 0 !== e && e.click()
							})
						}))
					}))
				});
			Hm.displayName = Gm;
			var Wm = X.forwardRef(function(e, t) {
				var n = e.__scopeRadioGroup,
					e = _p(e, ["__scopeRadioGroup"]),
					n = Fm(n);
				return (0, su.jsx)(_m, Fp(Fp(Fp({}, n), e), {}, {
					ref: t
				}))
			});
			Wm.displayName = "RadioGroupIndicator", eu('.disabled{opacity:.5}.foundation-web-radio-indicator:after{background-color:var(--color-action-sub-emphasis-foreground);border-radius:100%;content:"";display:block}.foundation-web-radio-indicator-xsmall:after{height:var(--size-150);width:var(--size-150)}.foundation-web-radio-indicator-small:after{height:var(--size-200);width:var(--size-200)}.foundation-web-radio-indicator-large:after,.foundation-web-radio-indicator-medium:after{height:var(--size-250);width:var(--size-250)}.foundation-web-radio{align-items:center;border:var(--stroke-standard) solid;border-color:var(--color-stroke-emphasis);border-radius:100%;display:flex;flex:0 0 auto;flex-direction:column;justify-content:center;outline-offset:3px}.foundation-web-radio[data-state=checked]{background-color:var(--color-action-sub-emphasis-background)}');
			var zm = {
					XSmall: "size-400",
					Small: "size-500",
					Medium: "size-600",
					Large: "size-600"
				},
				Vm = {
					XSmall: "xsmall",
					Small: "small",
					Medium: "medium",
					Large: "large"
				},
				qm = {
					XSmall: "gap-medium",
					Small: "gap-medium",
					Medium: "gap-medium",
					Large: "gap-large"
				},
				Jm = {
					XSmall: "text-title-small",
					Small: "text-title-small",
					Medium: "text-title-medium",
					Large: "text-title-large"
				},
				Km = {
					XSmall: "text-body-small",
					Small: "text-body-small",
					Medium: "text-body-medium",
					Large: "text-body-large"
				},
				Xm = {
					size: "Medium",
					placement: "Start",
					disabled: !1
				},
				$m = (0, X.createContext)(Xm);

			function Ym(e) {
				return function(e) {
					if (Array.isArray(e)) return tv(e)
				}(e) || function(e) {
					if ("undefined" != typeof Symbol && Symbol.iterator in Object(e)) return Array.from(e)
				}(e) || ev(e) || function() {
					throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
				}()
			}

			function Zm(e, t) {
				if (null == e) return {};
				var n, r = function(e, t) {
					if (null == e) return {};
					var n, r, o = {},
						i = Object.keys(e);
					for (r = 0; r < i.length; r++) n = i[r], 0 <= t.indexOf(n) || (o[n] = e[n]);
					return o
				}(e, t);
				if (Object.getOwnPropertySymbols)
					for (var o = Object.getOwnPropertySymbols(e), i = 0; i < o.length; i++) n = o[i], 0 <= t.indexOf(n) || Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n]);
				return r
			}

			function Qm(e, t) {
				return function(e) {
					if (Array.isArray(e)) return e
				}(e) || function(e, t) {
					if ("undefined" == typeof Symbol || !(Symbol.iterator in Object(e))) return;
					var n = [],
						r = !0,
						o = !1,
						i = void 0;
					try {
						for (var a, l = e[Symbol.iterator](); !(r = (a = l.next()).done) && (n.push(a.value), !t || n.length !== t); r = !0);
					} catch (e) {
						o = !0, i = e
					} finally {
						try {
							r || null == l.return || l.return()
						} finally {
							if (o) throw i
						}
					}
					return n
				}(e, t) || ev(e, t) || function() {
					throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
				}()
			}

			function ev(e, t) {
				if (e) {
					if ("string" == typeof e) return tv(e, t);
					var n = Object.prototype.toString.call(e).slice(8, -1);
					return "Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n ? Array.from(e) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? tv(e, t) : void 0
				}
			}

			function tv(e, t) {
				(null == t || t > e.length) && (t = e.length);
				for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
				return r
			}

			function nv(t, e) {
				var n, r = Object.keys(t);
				return Object.getOwnPropertySymbols && (n = Object.getOwnPropertySymbols(t), e && (n = n.filter(function(e) {
					return Object.getOwnPropertyDescriptor(t, e).enumerable
				})), r.push.apply(r, n)), r
			}

			function rv(t) {
				for (var e = 1; e < arguments.length; e++) {
					var n = null != arguments[e] ? arguments[e] : {};
					e % 2 ? nv(Object(n), !0).forEach(function(e) {
						ov(t, e, n[e])
					}) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : nv(Object(n)).forEach(function(e) {
						Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
					})
				}
				return t
			}

			function ov(e, t, n) {
				return t in e ? Object.defineProperty(e, t, {
					value: n,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : e[t] = n, e
			}

			function iv(e, t) {
				if ("function" == typeof e) return e(t);
				null != e && (e.current = t)
			}

			function av() {
				for (var e = arguments.length, o = new Array(e), t = 0; t < e; t++) o[t] = arguments[t];
				return function(t) {
					var n = !1,
						r = o.map(function(e) {
							e = iv(e, t);
							return n || "function" != typeof e || (n = !0), e
						});
					if (n) return function() {
						for (var e = 0; e < r.length; e++) {
							var t = r[e];
							"function" == typeof t ? t() : iv(o[e], null)
						}
					}
				}
			}

			function lv() {
				for (var e = arguments.length, n = new Array(e), t = 0; t < e; t++) n[t] = arguments[t];
				var o = n[0];
				if (1 === n.length) return o;

				function r() {
					var t = n.map(function(e) {
						return {
							useScope: e(),
							scopeName: e.scopeName
						}
					});
					return function(r) {
						var e = t.reduce(function(e, t) {
							var n = t.useScope,
								t = t.scopeName;
							return rv(rv({}, e), n(r)["__scope".concat(t)])
						}, {});
						return X.useMemo(function() {
							return ov({}, "__scope".concat(o.scopeName), e)
						}, [e])
					}
				}
				return r.scopeName = o.scopeName, r
			}

			function uv(e) {
				var o = X.useRef(e);
				return X.useEffect(function() {
					o.current = e
				}), X.useMemo(function() {
					return function() {
						for (var e, t = arguments.length, n = new Array(t), r = 0; r < t; r++) n[r] = arguments[r];
						return null === (e = o.current) || void 0 === e ? void 0 : e.call.apply(e, [o].concat(n))
					}
				}, [])
			}
			$().forwardRef(function(e, t) {
				var n = e.groupLabel,
					r = e.size,
					o = e.placement,
					i = e.isDisabled,
					a = e.className,
					l = e.children,
					u = Zl(e, ["groupLabel", "size", "placement", "isDisabled", "className", "children"]),
					c = cu(),
					s = (0, X.useMemo)(function() {
						return null != r ? r : Xm.size
					}, [r]),
					e = (0, X.useMemo)(function() {
						return null != o ? o : Xm.placement
					}, [o]);
				return $().createElement($m.Provider, {
					value: {
						size: s,
						placement: e,
						disabled: null != i && i
					}
				}, $().createElement("div", {
					className: Ql("flex fill flex-col gap-small")
				}, n && $().createElement("label", {
					htmlFor: c,
					className: Ql("foundation-web-radio-group-label", Jm[s], "content-default")
				}, n), $().createElement(Bm, Yl({
					ref: t,
					id: c,
					className: Ql("foundation-web-radio-group", "flex flex-col gap-medium", a),
					name: n
				}, u), l)))
			}).displayName = "RadioGroup", $().forwardRef(function(e, t) {
				var n = e.className,
					r = e.value,
					o = e.isDisabled,
					i = e.label,
					a = e.hint,
					l = Zl(e, ["className", "value", "isDisabled", "label", "hint"]),
					u = (0, X.useRef)(null),
					c = (0, X.useRef)(null),
					s = (0, X.useState)(!1),
					d = s[0],
					f = s[1],
					p = function() {
						var e = (0, X.useContext)($m);
						if (!e) throw new Error("Radio must be used within a RadioGroup");
						return e
					}(),
					m = p.size,
					v = p.placement,
					h = p.disabled,
					e = cu(),
					s = (0, X.useMemo)(function() {
						return !!a
					}, [a]),
					p = (0, X.useMemo)(function() {
						return o || h
					}, [o, h]);
				return (0, X.useEffect)(function() {
					var e = new ResizeObserver(function() {
						function e(e) {
							if (!e) return !1;
							var t = getComputedStyle(e),
								t = parseFloat(t.lineHeight);
							return 1 < Math.round(e.scrollHeight / t)
						}
						var t = u.current,
							n = c.current,
							n = e(t) || e(n);
						f(n)
					});
					return u.current && e.observe(u.current), c.current && e.observe(c.current),
						function() {
							return e.disconnect()
						}
				}, [s]), $().createElement("div", {
					className: Ql("flex gap-medium", {
						disabled: p,
						"flex-row": "Start" === v,
						"flex-row-reverse": "End" === v
					})
				}, $().createElement(Hm, Yl({
					ref: t,
					className: Ql("foundation-web-radio foundation-web-interactable", qm[m], zm[m], n),
					disabled: p,
					value: r,
					"aria-label": i,
					id: e
				}, l), $().createElement(Wm, {
					className: Ql("foundation-web-radio-indicator", "foundation-web-radio-indicator-".concat(Vm[m]), "flex items-center justify-center size-full relative")
				})), $().createElement("div", {
					className: Ql("flex fill flex-col width-full", {
						"gap-xsmall": d,
						"gap-none": !d,
						"padding-top-xxsmall": "XSmall" !== m
					})
				}, $().createElement("label", {
					ref: u,
					htmlFor: e,
					"aria-describedby": "".concat(e, "Hint"),
					className: Ql(Jm[m], "content-emphasis")
				}, i), s && $().createElement("div", {
					ref: c,
					id: "".concat(e, "Hint"),
					className: Ql(Km[m], "content-default")
				}, a)))
			}).displayName = "Radio";
			var cv = null !== globalThis && void 0 !== globalThis && globalThis.document ? X.useLayoutEffect : function() {};

			function sv(e) {
				var t = X.forwardRef(function(e, t) {
					var n, r = e.children,
						o = Zm(e, ["children"]);
					if (X.isValidElement(r)) {
						var i = (i = r, e = null === (n = Object.getOwnPropertyDescriptor(i.props, "ref")) || void 0 === n ? void 0 : n.get, e && "isReactWarning" in e && e.isReactWarning ? i.ref : (e = null === (n = Object.getOwnPropertyDescriptor(i, "ref")) || void 0 === n ? void 0 : n.get) && "isReactWarning" in e && e.isReactWarning ? i.props.ref : i.props.ref || i.ref),
							o = function(r, o) {
								var e, i = rv({}, o);
								for (e in o) ! function(e) {
									var t = r[e],
										n = o[e];
									/^on[A-Z]/.test(e) ? t && n ? i[e] = function() {
										n.apply(void 0, arguments), t.apply(void 0, arguments)
									} : t && (i[e] = t) : "style" === e ? i[e] = rv(rv({}, t), n) : "className" === e && (i[e] = [t, n].filter(Boolean).join(" "))
								}(e);
								return rv(rv({}, r), i)
							}(o, r.props);
						return r.type !== X.Fragment && (o.ref = t ? av(t, i) : i), X.cloneElement(r, o)
					}
					return 1 < X.Children.count(r) ? X.Children.only(null) : null
				});
				return t.displayName = "".concat(e, ".SlotClone"), t
			}
			var dv = Symbol("radix.slottable");

			function fv(e) {
				return X.isValidElement(e) && "function" == typeof e.type && "__radixId" in e.type && e.type.__radixId === dv
			}
			var pv = ["a", "button", "div", "form", "h2", "h3", "img", "input", "label", "li", "nav", "ol", "p", "span", "svg", "ul"].reduce(function(e, r) {
					var t, a, n, o = (t = "Primitive.".concat(r), a = sv(t), (n = X.forwardRef(function(e, t) {
							var n = e.children,
								r = Zm(e, ["children"]),
								e = X.Children.toArray(n),
								o = e.find(fv);
							if (o) {
								var i = o.props.children,
									e = e.map(function(e) {
										return e === o ? 1 < X.Children.count(i) ? X.Children.only(null) : X.isValidElement(i) ? i.props.children : null : e
									});
								return (0, su.jsx)(a, rv(rv({}, r), {}, {
									ref: t,
									children: X.isValidElement(i) ? X.cloneElement(i, void 0, e) : null
								}))
							}
							return (0, su.jsx)(a, rv(rv({}, r), {}, {
								ref: t,
								children: n
							}))
						})).displayName = "".concat(t, ".Slot"), n),
						n = X.forwardRef(function(e, t) {
							var n = e.asChild,
								e = Zm(e, ["asChild"]),
								n = n ? o : r;
							return "undefined" != typeof window && (window[Symbol.for("radix-ui")] = !0), (0, su.jsx)(n, rv(rv({}, e), {}, {
								ref: t
							}))
						});
					return n.displayName = "Primitive.".concat(r), rv(rv({}, e), {}, ov({}, r, n))
				}, {}),
				tt = (et = Qm(function(l, e) {
					var t = 1 < arguments.length && void 0 !== e ? e : [],
						u = [],
						e = function() {
							var n = u.map(function(e) {
								return X.createContext(e)
							});
							return function(e) {
								var t = (null == e ? void 0 : e[l]) || n;
								return X.useMemo(function() {
									return ov({}, "__scope".concat(l), rv(rv({}, e), {}, ov({}, l, t)))
								}, [e, t])
							}
						};
					return e.scopeName = l, [function(r, o) {
						var i = X.createContext(o),
							a = u.length;
						u = [].concat(Ym(u), [o]);

						function e(e) {
							var t = e.scope,
								n = e.children,
								r = Zm(e, ["scope", "children"]),
								t = (null == t || null === (o = t[l]) || void 0 === o ? void 0 : o[a]) || i,
								o = X.useMemo(function() {
									return r
								}, Object.values(r));
							return (0, su.jsx)(t.Provider, {
								value: o,
								children: n
							})
						}
						return e.displayName = r + "Provider", [e, function(e, t) {
							var n = (null == t || null === (n = t[l]) || void 0 === n ? void 0 : n[a]) || i,
								n = X.useContext(n);
							if (n) return n;
							if (void 0 !== o) return o;
							throw new Error("`".concat(e, "` must be used within `").concat(r, "`"))
						}]
					}, lv.apply(void 0, [e].concat(Ym(t)))]
				}(Ki = "Switch"), 2))[0],
				mv = (oh = (et[1], Qm(tt(Ki), 2)))[0],
				vv = oh[1];
			(Tm = X.forwardRef(function(e, t) {
				var n, r, o, i, a, l, u, c = e.__scopeSwitch,
					s = e.name,
					d = e.checked,
					f = e.defaultChecked,
					p = e.required,
					m = e.disabled,
					v = e.value,
					h = void 0 === v ? "on" : v,
					g = e.onCheckedChange,
					y = e.form,
					b = Zm(e, ["__scopeSwitch", "name", "checked", "defaultChecked", "required", "disabled", "value", "onCheckedChange", "form"]),
					w = Qm(X.useState(null), 2),
					v = w[0],
					S = w[1],
					t = function() {
						for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++) t[n] = arguments[n];
						return X.useCallback(av.apply(void 0, t), t)
					}(t, function(e) {
						return S(e)
					}),
					C = X.useRef(!1),
					I = !v || y || !!v.closest("form"),
					d = (i = (d = {
						prop: d,
						defaultProp: f,
						onChange: g
					}).prop, f = d.defaultProp, g = d.onChange, f = (g = {
						defaultProp: f,
						onChange: d = void 0 === g ? function() {} : g
					}).defaultProp, g = g.onChange, f = X.useState(f), n = Qm(f, 1)[0], r = X.useRef(n), o = uv(g), X.useEffect(function() {
						r.current !== n && (o(n), r.current = n)
					}, [n, r, o]), g = (f = Qm(g = f, 2))[0], a = f[1], g = (l = void 0 !== i) ? i : g, u = uv(d), [g, X.useCallback(function(e) {
						var t;
						l ? (t = "function" == typeof e ? e(i) : e) !== i && u(t) : a(e)
					}, [l, i, a, u])]),
					g = Qm(d, 2),
					d = g[0],
					d = void 0 !== d && d,
					x = g[1];
				return (0, su.jsxs)(mv, {
					scope: c,
					checked: d,
					disabled: m,
					children: [(0, su.jsx)(pv.button, rv(rv({
						type: "button",
						role: "switch",
						"aria-checked": d,
						"aria-required": p,
						"data-state": yv(d),
						"data-disabled": m ? "" : void 0,
						disabled: m,
						value: h
					}, b), {}, {
						ref: t,
						onClick: function(t, n, e) {
							var r = void 0 === (e = (2 < arguments.length && void 0 !== e ? e : {}).checkForDefaultPrevented) || e;
							return function(e) {
								if (null != t && t(e), !1 === r || !e.defaultPrevented) return null == n ? void 0 : n(e)
							}
						}(e.onClick, function(e) {
							x(function(e) {
								return !e
							}), I && (C.current = e.isPropagationStopped(), C.current || e.stopPropagation())
						})
					})), I && (0, su.jsx)(gv, {
						control: v,
						bubbles: !C.current,
						name: s,
						value: h,
						checked: d,
						required: p,
						disabled: m,
						form: y,
						style: {
							transform: "translateX(-100%)"
						}
					})]
				})
			})).displayName = Ki;
			var hv = "SwitchThumb";
			(ql = X.forwardRef(function(e, t) {
				var n = e.__scopeSwitch,
					e = Zm(e, ["__scopeSwitch"]),
					n = vv(hv, n);
				return (0, su.jsx)(pv.span, rv(rv({
					"data-state": yv(n.checked),
					"data-disabled": n.disabled ? "" : void 0
				}, e), {}, {
					ref: t
				}))
			})).displayName = hv;
			var gv = function(e) {
				var r, o, t, n, i = e.control,
					a = e.checked,
					l = e.bubbles,
					u = void 0 === l || l,
					c = Zm(e, ["control", "checked", "bubbles"]),
					s = X.useRef(null),
					d = (t = a, n = X.useRef({
						value: t,
						previous: t
					}), X.useMemo(function() {
						return n.current.value !== t && (n.current.previous = n.current.value, n.current.value = t), n.current.previous
					}, [t])),
					i = (r = i, l = Qm(X.useState(void 0), 2), i = l[0], o = l[1], cv(function() {
						if (r) {
							o({
								width: r.offsetWidth,
								height: r.offsetHeight
							});
							var e = new ResizeObserver(function(e) {
								var t, n;
								Array.isArray(e) && e.length && (n = "borderBoxSize" in (e = e[0]) ? (t = e.borderBoxSize, t = (n = Array.isArray(t) ? t[0] : t).inlineSize, n.blockSize) : (t = r.offsetWidth, r.offsetHeight), o({
									width: t,
									height: n
								}))
							});
							return e.observe(r, {
									box: "border-box"
								}),
								function() {
									return e.unobserve(r)
								}
						}
						o(void 0)
					}, [r]), i);
				return X.useEffect(function() {
					var e = s.current,
						t = window.HTMLInputElement.prototype,
						n = Object.getOwnPropertyDescriptor(t, "checked").set;
					d !== a && n && (t = new Event("click", {
						bubbles: u
					}), n.call(e, a), e.dispatchEvent(t))
				}, [d, a, u]), (0, su.jsx)("input", rv(rv({
					type: "checkbox",
					"aria-hidden": !0,
					defaultChecked: a
				}, c), {}, {
					tabIndex: -1,
					ref: s,
					style: rv(rv(rv({}, e.style), i), {}, {
						position: "absolute",
						pointerEvents: "none",
						opacity: 0,
						margin: 0
					})
				}))
			};

			function yv(e) {
				return e ? "checked" : "unchecked"
			}
			var bv = Tm,
				wv = ql;
			eu(".foundation-web-toggle.disabled{opacity:50%}");
			var Sv, Cv, Iv, xv = {
				XSmall: {
					togglePadding: null,
					toggleWidth: "width-700",
					toggleHeight: "height-400",
					thumbSize: "size-200",
					textSize: "text-title-small",
					textPadding: null,
					hintSize: "text-body-small"
				},
				Small: {
					togglePadding: null,
					toggleWidth: "width-800",
					toggleHeight: "height-500",
					thumbSize: "size-300",
					textSize: "text-title-small",
					textPadding: "padding-top-xxsmall",
					hintSize: "text-body-small"
				},
				Medium: {
					togglePadding: null,
					toggleWidth: "width-1000",
					toggleHeight: "height-600",
					thumbSize: "size-400",
					textSize: "text-title-medium",
					textPadding: "padding-top-xxsmall",
					hintSize: "text-body-medium"
				},
				Large: {
					togglePadding: "padding-y-xxsmall",
					toggleWidth: "width-1100",
					toggleHeight: "height-600",
					thumbSize: "size-400",
					textSize: "text-title-large",
					textPadding: "padding-top-xxsmall",
					hintSize: "text-body-large"
				}
			};

			function Ev(e) {
				var t = e.assetId,
					n = e.sduiContext,
					r = (i = (0, X.useState)(""))[0],
					o = i[1],
					i = (e = (0, X.useState)(!0))[0],
					a = e[1];
				return (0, X.useEffect)(function() {
					a(!0), Be(t).then(function(e) {
						o(null !== (e = null === (e = null == e ? void 0 : e.locations[0]) || void 0 === e ? void 0 : e.location) && void 0 !== e ? e : "")
					}).catch(function() {
						o("")
					}).finally(function() {
						a(!1)
					})
				}, [t]), i ? $().createElement(ye.Loading, null) : r ? $().createElement("img", {
					src: r,
					alt: "asset"
				}) : (bl(sl.AssetImageMissingAssetUrl, "AssetImage missing asset url for assetId " + t, n.pageContext), $().createElement("img", {
					src: "",
					alt: "asset"
				}))
			}

			function Pv(e) {
				var t = e.thumbnailType,
					n = e.targetId,
					r = e.format,
					e = e.size;
				return $().createElement(qe.Thumbnail2d, {
					containerClass: "sdui-thumbnail-image-container",
					type: t,
					targetId: n,
					format: r,
					size: e
				})
			}

			function Tv(e, t, n) {
				if (void 0 !== e && (o = null === (r = null === (o = null == e ? void 0 : e.feed) || void 0 === o ? void 0 : o.props) || void 0 === r ? void 0 : r.feedItems, Array.isArray(o) && o.every(function(e) {
						return "object" == typeof e && null !== e
					}))) {
					var r = e.feed.props.feedItems,
						o = r.find(function(e) {
							return e.feedItemKey === t
						});
					if (o) return o;
					bl(sl.ServerDrivenFeedItemMissingItem, "SDUI feed items " + JSON.stringify(r) + " missing matching feed item with key " + t, n.pageContext)
				} else bl(sl.ServerDrivenFeedItemMissingFeedOrFeedItems, "SDUI missing feed items, root is " + JSON.stringify(e), n.pageContext)
			}

			function Ov(e) {
				return !!(e && "object" == typeof e && e.componentType && xh(e.componentType))
			}

			function kv(i, a, l) {
				if (! function(e) {
						if (e && "object" == typeof e && (e.actionType && e.actionParams && Xl[e.actionType])) return !0;
						return !1
					}(i)) return bl(sl.SduiParseCallbackInvalidConfig, "Invalid action config " + JSON.stringify(i) + " to parse callback", l.pageContext), {
					onActivated: function() {},
					linkPath: void 0
				};
				var u = (0, Xl[i.actionType])(i, a, l);
				return {
					onActivated: function() {
						return e = u, t = i, r = l, (o = (n = a).logAction) ? o(t, n) : Pl(t, n, r, null), void(e.callback && e.callback());
						var e, t, n, r, o
					},
					linkPath: u.linkPath
				}
			}

			function Av(e, t, n) {
				if ("string" != typeof e) return bl(sl.SduiParseAssetUrlInvalidInput, "Invalid asset url input " + JSON.stringify(e) + ". Input must be a string.", n.pageContext), {
					assetType: void 0,
					assetTarget: "0"
				};
				var r = e.split("//");
				if (2 === r.length && (e.includes(Iv.RbxAsset) || e.includes(Iv.RbxThumb))) {
					if (r[0].includes(Iv.RbxAsset)) return {
						assetType: Iv.RbxAsset,
						assetTarget: r[1]
					};
					if (r[0].includes(Iv.RbxThumb)) return {
						assetType: Iv.RbxThumb,
						assetTarget: r[1]
					}
				}
				return bl(sl.SduiParseAssetUrlInvalidFormat, "Invalid asset url format " + e, n.pageContext), {
					assetType: void 0,
					assetTarget: "0"
				}
			}

			function Nv(e, t, n) {
				if ("string" != typeof e) return null;
				var r, o, i = Av(e, 0, n),
					a = i.assetType,
					l = i.assetTarget;
				if (a === Iv.RbxAsset) {
					var u = l;
					return $().createElement(Ev, {
						assetId: u,
						sduiContext: n
					})
				}
				if (a !== Iv.RbxThumb) return bl(sl.SduiParseAssetUrlIntoComponentInvalidAssetType, "Invalid asset type " + JSON.stringify(a) + ". Only RbxThumb and RbxAsset are supported.", n.pageContext), null;
				var a = (i = (c = (c = l).split("&"), o = {}, c.forEach(function(e) {
						var t = e.split("="),
							e = t[0],
							t = t[1];
						o[e] = t
					}), {
						thumbnailType: o.type,
						id: o.id,
						w: o.w,
						h: o.h
					})).thumbnailType,
					l = i.w,
					c = i.h;
				return void 0 === (u = i.id) || void 0 === a || void 0 === l || void 0 === c ? (bl(sl.SduiParseAssetUrlIntoComponentInvalidRbxThumb, "Invalid rbxthumb url " + JSON.stringify(e) + ". At least one of thumbnailType " + (null != a ? a : "undefined") + " id " + (null != u ? u : "undefined") + ", w " + (null != l ? l : "undefined") + ", or h " + (null != c ? c : "undefined") + " is invalid", n.pageContext), null) : (r = l + "x" + c, void 0 !== (e = null === (e = Xv[e = a]) || void 0 === e ? void 0 : e.find(function(e) {
					return e === r
				})) ? $().createElement(Pv, {
					thumbnailType: a,
					targetId: u,
					format: qe.ThumbnailFormat.webp,
					size: e
				}) : (bl(sl.SduiParseAssetUrlIntoComponentNoSupportedThumbSizeForType, "No supported thumbnail size " + l + "x" + c + " for type " + a, n.pageContext), null))
			}

			function _v(e, t, n, r) {
				if (t)
					if ("string" == typeof e) {
						for (var o = e.split("."), i = t, a = 0; a < o.length; ++a) {
							var l = o[a];
							if (null == i || "object" != typeof i || Array.isArray(i)) return void bl(sl.SduiParseFoundationTokenInvalidInputPath, "Invalid token path " + e + ". Token path step " + l + " is invalid. Token is " + JSON.stringify(i), r.pageContext);
							i = i[l]
						}
						if (null != i) return i;
						bl(sl.SduiParseFoundationTokenInvalidInputPath, "Invalid token path " + e + ". The final token " + (i ? JSON.stringify(i) : "undefined") + " is invalid.", r.pageContext)
					} else bl(sl.SduiParseFoundationTokenInvalidInput, "Invalid input " + JSON.stringify(e) + " for foundation token. Input must be a string.", r.pageContext);
				else bl(sl.SduiParseFoundationTokenMissingTokens, "Missing tokens in parseFoundationTokenHelper for input " + JSON.stringify(e), r.pageContext)
			}

			function Rv(e) {
				return !(!e || "object" != typeof e)
			}

			function Lv(e) {
				return "string" == typeof e && /^rgb\(\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d{1,3})\s*\)$/.test(e)
			}

			function Dv(e) {
				return "string" == typeof e && /^rgba\(\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d*(?:\.\d+)?)\s*\)$/.test(e)
			}

			function Mv(e, t, n) {
				return Lv(e) || Dv(e) || (e = function(e, t) {
					e = _v(e, t.dependencies.tokens, 0, t);
					if (void 0 !== e && "string" == typeof e) return e;
					bl(sl.SduiParseFoundationTokenInvalidOutputType, "Invalid output type " + typeof e + ". Expected string.", t.pageContext)
				}(e, n)) && (Lv(e) || Dv(e)) ? e : void bl(sl.SduiParseFoundationTokenInvalidOutputType, "Invalid output type " + typeof e + ". Expected color string.", n.pageContext)
			}

			function Fv(e) {
				return "string" == typeof e && /^#([0-9a-fA-F]{6}|[0-9a-fA-F]{3})$/.test(e)
			}

			function jv(e) {
				return "string" == typeof e && /^([0-9a-fA-F]{6}|[0-9a-fA-F]{3})$/.test(e)
			}

			function Uv(e) {
				return !(!e || "object" != typeof e || void 0 === e.xScale || "number" != typeof e.xScale || void 0 === e.xOffset || "number" != typeof e.xOffset || void 0 === e.yScale || "number" != typeof e.yScale || void 0 === e.yOffset || "number" != typeof e.yOffset)
			}

			function Bv(e) {
				if (e && Array.isArray(e) && 4 === e.length) {
					e = e.map(Number);
					return {
						xScale: e[0],
						xOffset: e[1],
						yScale: e[2],
						yOffset: e[3]
					}
				}
			}

			function Gv(e) {
				return !(!e || "object" != typeof e || void 0 === e.x || "number" != typeof e.x || void 0 === e.y || "number" != typeof e.y)
			}

			function Hv(e) {
				if (e && Array.isArray(e) && 2 === e.length) {
					e = e.map(Number);
					return {
						x: e[0],
						y: e[1]
					}
				}
			}

			function Wv(e) {
				var t = e.sduiContext,
					n = e.onActivated,
					r = e.textColor,
					o = e.fontStyle,
					i = e.gap,
					a = e.leftText,
					l = e.leftIcon,
					u = e.leftIconComponent,
					c = e.rightText,
					s = e.rightIcon,
					e = e.rightIconComponent,
					t = t.dependencies.tokens;
				return $().createElement(so, {
					onActivated: null == n ? void 0 : n.onActivated,
					linkPath: null == n ? void 0 : n.linkPath,
					textColor: null != r ? r : t.Color.Content.Default,
					fontStyle: null != o ? o : t.Typography.BodyMedium,
					gap: null != i ? i : t.Gap.Small,
					iconWidth: 16,
					leftText: null != a ? a : "",
					leftIcon: l,
					leftIconComponent: u,
					rightText: c,
					rightIcon: s,
					rightIconComponent: e
				})
			}

			function zv(e) {
				var t = e.friendsInGame,
					n = e.onHide,
					r = e.placeId,
					o = e.sduiContext,
					i = (0, X.useState)(void 0),
					e = i[0],
					a = i[1];
				return (0, X.useEffect)(function() {
					Ue(r.toString()).then(function(e) {
						a(e)
					}).catch(function(e) {
						a(void 0), bl(sl.ActiveFriendsFooterPlaceDetailsFetchError, "Error fetching place details for active friends footer with placeId " + r + ", error message is: " + JSON.stringify(e), o.pageContext)
					})
				}, [r, o.pageContext]), i = (0, X.useMemo)(function() {
					return t.map(function(e) {
						return {
							id: e.userId,
							displayName: e.displayName,
							presence: e.presence
						}
					})
				}, [t]), e ? $().createElement(Zt, {
					friendsDataInGame: i,
					show: !0,
					onHide: n,
					game: e
				}) : $().createElement($().Fragment, null)
			}

			function Vv(e) {
				var t = e.sduiContext,
					n = e.analyticsContext,
					r = e.universeId,
					o = e.maxAvatars,
					i = e.iconWidth,
					a = e.onActivated,
					l = t.dependencies.tokens,
					u = null != o ? o : 3,
					c = null != i ? i : l.Size.Size_400,
					s = (0, X.useMemo)(function() {
						var e;
						return (null !== (e = t.dataStore.social.inGameFriendsByUniverseId[r]) && void 0 !== e ? e : []).slice(0, u)
					}, [t.dataStore.social.inGameFriendsByUniverseId, r, u]),
					d = (0, X.useMemo)(function() {
						return s.map(function(e) {
							return e.displayName
						}).join(", ")
					}, [s]),
					e = (v = (0, X.useState)(!1))[0],
					f = v[1],
					p = null === (i = null === (o = s[0]) || void 0 === o ? void 0 : o.presence) || void 0 === i ? void 0 : i.placeId,
					m = (0, X.useCallback)(function() {
						var e = {
							actionType: Wl.OpenJoinFriends,
							actionParams: {
								placeId: p,
								universeId: r
							}
						};
						kv(e, n, t).onActivated()
					}, [p, r, n, t]),
					v = (0, X.useMemo)(function() {
						return a || (p ? {
							onActivated: function() {
								f(!0), m()
							}
						} : void 0)
					}, [a, p, m]),
					o = (0, X.useCallback)(function(e) {
						e.stopPropagation(), e.preventDefault(), f(!1)
					}, []),
					i = (0, X.useMemo)(function() {
						var e = s.map(function(e) {
							return $().createElement(Pv, {
								key: e.userId,
								thumbnailType: qe.ThumbnailTypes.avatarHeadshot,
								targetId: e.userId.toString(),
								format: qe.ThumbnailFormat.webp,
								size: qe.ThumbnailAvatarHeadshotSize.size48
							})
						});
						return $().createElement(jr, {
							avatarThumbnails: e,
							iconWidth: c,
							avatarContainerBackgroundColor: l.Color.Surface.Surface_200,
							avatarImageBackgroundColor: l.Color.Extended.Gray.Gray_800,
							avatarBorderColor: l.Color.System.Success
						})
					}, [s, c, l]);
				return $().createElement($().Fragment, null, $().createElement(Wv, {
					componentConfig: {
						componentType: sh.TileFooter,
						props: {}
					},
					sduiContext: t,
					analyticsContext: n,
					leftIconComponent: i,
					leftText: d,
					gap: l.Gap.XSmall,
					onActivated: v
				}), p && e && $().createElement(zv, {
					friendsInGame: s,
					onHide: o,
					placeId: p,
					sduiContext: t
				}))
			}

			function qv(e) {
				var t = e.sduiContext,
					n = e.analyticsContext,
					r = e.universeId,
					e = e.footerComponent;
				return (0, X.useMemo)(function() {
					return !!(t.dataStore.social.inGameFriendsByUniverseId[r] && 0 < t.dataStore.social.inGameFriendsByUniverseId[r].length)
				}, [t.dataStore.social.inGameFriendsByUniverseId, r]) ? $().createElement(Vv, {
					componentConfig: {
						componentType: sh.GameTileActiveFriendsFooter,
						props: {}
					},
					sduiContext: t,
					analyticsContext: n,
					universeId: r
				}) : null != e ? e : null
			}
			$().forwardRef(function(e, t) {
				var n = e.label,
					r = e.className,
					o = e.isChecked,
					i = e.isDisabled,
					a = e.size,
					l = e.hint,
					u = e.placement,
					c = e.onCheckedChange,
					s = Zl(e, ["label", "className", "isChecked", "isDisabled", "size", "hint", "placement", "onCheckedChange"]),
					d = xv[a],
					f = d.togglePadding,
					p = d.toggleWidth,
					m = d.toggleHeight,
					v = d.thumbSize,
					e = d.textSize,
					a = d.textPadding,
					d = d.hintSize;
				return $().createElement("label", {
					className: Ql("foundation-web-toggle flex gap-medium items-start", {
						disabled: i,
						"flex-row": "Start" === u,
						"flex-row-reverse": "End" === u
					}, r)
				}, $().createElement("div", {
					className: Ql("flex", f)
				}, $().createElement(bv, Yl({
					ref: t,
					className: Ql("foundation-web-interactable transition-colors flex items-center padding-x-xsmall radius-circle", p, m, o ? "bg-system-emphasis" : "bg-action-standard"),
					disabled: i,
					checked: o,
					onCheckedChange: c
				}, s), $().createElement("span", {
					className: Ql("motion-safe:transition-[flex-grow] ease-standard-out duration-100", o ? "fill" : "size-0")
				}), $().createElement(wv, {
					className: Ql("transition-colors radius-circle", v, o ? "bg-[var(--dark-mode-action-standard-foreground)]" : "bg-[var(--color-action-standard-foreground)]")
				}), $().createElement("span", {
					className: Ql("motion-safe:transition-[flex-grow] ease-standard-out duration-100", o ? "size-0" : "fill")
				}))), n && $().createElement("div", {
					className: "flex flex-col fill"
				}, $().createElement("span", {
					className: Ql("content-emphasis", a, e)
				}, n), l && $().createElement("span", {
					className: Ql("content-default", d)
				}, l)))
			}).displayName = "Toggle", (oe = Sv = Sv || {}).imageQualityLevel = "imageQualityLevel", oe.maxScreenWidth = "maxScreenWidth", oe.minScreenWidth = "minScreenWidth", (Cv = Cv || {}).friendInGame = "friendInGame", (mm = Iv = Iv || {}).RbxAsset = "rbxassetid", mm.RbxThumb = "rbxthumb";
			var Jv = function() {
					return (Jv = Object.assign || function(e) {
						for (var t, n = 1, r = arguments.length; n < r; n++)
							for (var o in t = arguments[n]) Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
						return e
					}).apply(this, arguments)
				},
				Kv = {
					startColor: "#000000",
					endColor: "#000000",
					startTransparency: 0,
					endTransparency: 1,
					degree: 270
				},
				Xv = (($i = {})[qe.ThumbnailTypes.gameIcon] = Object.values(qe.ThumbnailGameIconSize), $i[qe.ThumbnailTypes.gameThumbnail] = Object.values(qe.ThumbnailGameThumbnailSize), $i[qe.ThumbnailTypes.assetThumbnail] = Object.values(qe.ThumbnailAssetsSize), $i[qe.ThumbnailTypes.avatarHeadshot] = Object.values(qe.ThumbnailAvatarHeadshotSize), $i),
				$v = function(e, t, n) {
					if (Fv(e)) return e;
					if (jv(e)) return "#" + e;
					if (Lv(e) || Dv(e)) return function(e, t) {
						if (Lv(e) || Dv(e)) {
							var n = e.match(/\d+(?:\.\d+)?/g);
							if (!(!n || n.length < 3 || 4 < n.length)) {
								var r = n.map(Number),
									o = r[0],
									n = r[1],
									r = r[2];
								return "#" + o.toString(16).padStart(2, "0") + n.toString(16).padStart(2, "0") + r.toString(16).padStart(2, "0")
							}
							bl(sl.SduiParseColorValueInvalidInput, "Invalid input " + JSON.stringify(e) + " for color value in convertRbxColorToHex. Input must be a valid rgb or rgba color.", t.pageContext)
						} else bl(sl.SduiParseColorValueInvalidInput, "Invalid input " + JSON.stringify(e) + " for color value in convertRbxColorToHex. Input must be a rgb or rgba color.", t.pageContext)
					}(e, n);
					var r = Mv(e, 0, n);
					if (r) return $v(r, t, n);
					bl(sl.SduiParseColorValueInvalidInput, "Invalid input " + JSON.stringify(e) + " for color value in parseColorValueToHex. Input must be a hex color or a foundation color token.", n.pageContext)
				},
				Yv = {
					"icons/status/games/rating_small": "icon-rating-16x16",
					"icons/status/games/people-playing_small": "icon-current-players-16x16",
					"icons/navigation/pushRight_small": "icon-push-right-16x16"
				},
				lt = {
					parseUiComponent: function(e, t, n) {
						if (!e || "object" != typeof e) return bl(sl.SduiParseUiComponentInvalidConfig, "Invalid component config " + JSON.stringify(e) + " to parse UI component", n.pageContext), $().createElement($().Fragment, null);
						return $().createElement(Nh, {
							componentConfig: e,
							parentAnalyticsContext: t,
							sduiContext: n
						})
					},
					parseCallback: kv,
					parseHeroUnitAsset: function(e, t, n) {
						if (! function(e) {
								if ("object" == typeof e && (e.image && e.title && e.subtitle)) return !0;
								return !1
							}(e)) return {
							image: $().createElement($().Fragment, null),
							title: "Hero Unit Asset Title",
							subtitle: "Hero Unit Asset Subtitle"
						};
						n = Nv(e.image, 0, n);
						return Jv(Jv({}, e), {
							image: n
						})
					},
					parseAssetUrl: Av,
					parseAssetUrlIntoComponent: Nv,
					parseGradient: function(e, t, n) {
						var r, o = !(!(r = e) || "object" != typeof r) && (!(!r.startColor || "string" != typeof r.startColor) && (!(!r.endColor || "string" != typeof r.endColor) && (void 0 !== r.startOpacity && "number" == typeof r.startOpacity && (void 0 !== r.endOpacity && "number" == typeof r.endOpacity && (void 0 !== r.degree && "number" == typeof r.degree))))),
							r = !(!(r = e) || "object" != typeof r) && (!(!r.startColor || "string" != typeof r.startColor) && (!(!r.endColor || "string" != typeof r.endColor) && (!(void 0 === r.startTransparency || "number" != typeof r.startTransparency || r.startTransparency < 0 || 1 < r.startTransparency) && (!(void 0 === r.endTransparency || "number" != typeof r.endTransparency || r.endTransparency < 0 || 1 < r.endTransparency) && (void 0 !== r.degree && "number" == typeof r.degree && ((void 0 === r.widthPercent || !("number" != typeof r.widthPercent || r.widthPercent < 0 || 1 < r.widthPercent)) && ((void 0 === r.heightPercent || !("number" != typeof r.heightPercent || r.heightPercent < 0 || 1 < r.heightPercent)) && (void 0 === r.midpointPercent || !("number" != typeof r.midpointPercent || r.midpointPercent < 0 || 1 < r.midpointPercent)))))))));
						return o || r ? (r = o ? {
							startColor: e.startColor,
							endColor: e.endColor,
							startTransparency: e.startOpacity,
							endTransparency: e.endOpacity,
							degree: e.degree
						} : e, Jv(Jv({}, r), {
							startColor: null !== (o = $v(r.startColor, t, n)) && void 0 !== o ? o : Kv.startColor,
							endColor: null !== (t = $v(r.endColor, t, n)) && void 0 !== t ? t : Kv.endColor
						})) : (bl(sl.SduiParseGradientInvalidConfig, "Invalid gradient config " + JSON.stringify(e), n.pageContext), Kv)
					},
					parseFoundationNumberToken: function(e, t, n) {
						if ("number" == typeof e) return e;
						var r = _v(e, n.dependencies.tokens, 0, n);
						if (void 0 !== r && "number" == typeof r) return r;
						bl(sl.SduiParseFoundationTokenInvalidOutputType, "Invalid output type " + typeof r + " for token " + JSON.stringify(r) + " with input " + JSON.stringify(e) + ". Expected number.", n.pageContext)
					},
					parseFoundationTypographyToken: function(e, t, n) {
						if (Rv(e)) return e;
						e = _v(e, n.dependencies.tokens, 0, n);
						if (void 0 !== e && Rv(e)) return e;
						bl(sl.SduiParseFoundationTokenInvalidOutputType, "Invalid output type " + typeof e + ". Expected TypographyToken.", n.pageContext)
					},
					parseColorValue: function(e, t, n) {
						if (Fv(e)) return e;
						if (jv(e)) return "#" + e;
						var r = Mv(e, 0, n);
						if (r) return r;
						bl(sl.SduiParseColorValueInvalidInput, "Invalid input " + JSON.stringify(e) + " for color value. Input must be a hex color or a foundation color token.", n.pageContext)
					},
					parseUDim2: function(e, t, n) {
						if (Uv(e)) return e;
						var r = Bv(e);
						if (Uv(r)) return r;
						if (e && "string" == typeof e) {
							r = e.split(","), r = Bv(r);
							if (Uv(r)) return r;
							bl(sl.SduiParseUDim2InvalidInput, "Invalid input " + JSON.stringify(e) + " for uDim2. Input must be a string with 4 comma-separated values.", n.pageContext)
						} else bl(sl.SduiParseUDim2InvalidInput, "Invalid input " + JSON.stringify(e) + " for uDim2. Input must be a string.", n.pageContext)
					},
					parseVector2: function(e, t, n) {
						if (Gv(e)) return e;
						var r = Hv(e);
						if (Gv(r)) return r;
						if (e && "string" == typeof e) {
							r = e.split(","), r = Hv(r);
							if (Gv(r)) return r;
							bl(sl.SduiParseVector2InvalidInput, "Invalid input " + JSON.stringify(e) + " for vector2. Input must be a string with 2 comma-separated values.", n.pageContext)
						} else bl(sl.SduiParseVector2InvalidInput, "Invalid input " + JSON.stringify(e) + " for vector2. Input must be a string.", n.pageContext)
					},
					parseAutomaticSize: function(e, t, n) {
						if (e && "string" == typeof e) switch (e) {
							case cr.X:
								return cr.X;
							case cr.Y:
								return cr.Y;
							case cr.XY:
								return cr.XY;
							case cr.None:
								return cr.None;
							default:
								return void bl(sl.SduiParseAutomaticSizeInvalidInput, "Invalid automatic size " + JSON.stringify(e) + ". Expected one of " + Object.values(cr).join(", ") + ".", n.pageContext)
						} else bl(sl.SduiParseAutomaticSizeInvalidInput, "Invalid input " + JSON.stringify(e) + " for automatic size. Input must be a string.", n.pageContext)
					},
					parseIcon: function(e, t, n) {
						if ("string" == typeof e) {
							if (Yv[e]) return ge()("sdui-icon", Yv[e]);
							bl(sl.SduiParseIconInvalidInput, "Invalid icon " + JSON.stringify(e) + ". Expected one of " + Object.keys(Yv).join(", ") + ".", n.pageContext)
						} else bl(sl.SduiParseIconInvalidInput, "Invalid input " + JSON.stringify(e) + " for icon. Input must be a string.", n.pageContext)
					},
					parseFoundationButtonSize: function(e, t, n) {
						if ("string" == typeof e && ou.includes(e)) return e;
						bl(sl.SduiParseFoundationButtonSizeInvalidInput, "Invalid input " + JSON.stringify(e) + " for foundation button size. Input must be a valid string and button size.", n.pageContext)
					},
					parseFoundationButtonVariant: function(e, t, n) {
						if ("string" == typeof e && ru.includes(e)) return e;
						bl(sl.SduiParseFoundationButtonVariantInvalidInput, "Invalid input " + JSON.stringify(e) + " for foundation button variant. Input must be a valid string and button variant.", n.pageContext)
					}
				},
				Zv = function() {
					return (Zv = Object.assign || function(e) {
						for (var t, n = 1, r = arguments.length; n < r; n++)
							for (var o in t = arguments[n]) Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
						return e
					}).apply(this, arguments)
				},
				Qv = function(e, t) {
					var n = {};
					for (o in e) Object.prototype.hasOwnProperty.call(e, o) && t.indexOf(o) < 0 && (n[o] = e[o]);
					if (null != e && "function" == typeof Object.getOwnPropertySymbols)
						for (var r = 0, o = Object.getOwnPropertySymbols(e); r < o.length; r++) t.indexOf(o[r]) < 0 && Object.prototype.propertyIsEnumerable.call(e, o[r]) && (n[o[r]] = e[o[r]]);
					return n
				},
				Lu = function(e) {
					var t = e.sduiContext,
						n = e.analyticsContext,
						r = e.universeId,
						o = e.placeId,
						i = e.disableDefaultFooterLogic,
						a = e.onActivated,
						l = e.footerComponent,
						u = Qv(e, ["sduiContext", "analyticsContext", "universeId", "placeId", "disableDefaultFooterLogic", "onActivated", "footerComponent"]),
						c = (0, X.useMemo)(function() {
							if (a) return a;
							var e = {
								actionType: Wl.OpenGameDetails,
								actionParams: {
									placeId: o,
									universeId: r
								}
							};
							return kv(e, n, t)
						}, [a, o, r, n, t]),
						e = (0, X.useMemo)(function() {
							return i ? l : $().createElement(qv, {
								universeId: r,
								footerComponent: l,
								sduiContext: t,
								analyticsContext: n
							})
						}, [i, l, r, t, n]);
					return $().createElement(yl, Zv({}, u, {
						sduiContext: t,
						analyticsContext: n,
						onActivated: c,
						footerComponent: e
					}))
				},
				eh = function() {
					return (eh = Object.assign || function(e) {
						for (var t, n = 1, r = arguments.length; n < r; n++)
							for (var o in t = arguments[n]) Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
						return e
					}).apply(this, arguments)
				};

			function th(e, t, n, r, o, i, a) {
				if (!Ov(e)) return bl(sl.SduiComponentBuildPropsAndChildrenInvalidConfig, "Invalid component config " + JSON.stringify(e) + " to build React props and children", n.pageContext), {
					props: {},
					children: null
				};
				var l, u, c, s = e.componentType,
					d = (l = t, d = r, r = (t = e).analyticsData, t = uh(uh({}, r), null != d ? d : {}), r = l.logAction, d = l.getCollectionData, {
						analyticsData: t,
						ancestorAnalyticsData: uh(uh({}, l.ancestorAnalyticsData), l.analyticsData),
						logAction: r,
						getCollectionData: d
					}),
					a = uh(uh(uh(uh(uh({}, e.props), {
						componentConfig: e,
						sduiContext: n,
						analyticsContext: d
					}), o), i), a);
				return {
					props: lh(s, a, d, n),
					children: (u = d, c = n, (e = e).children ? e.children.map(function(e, t) {
						var n, t = (null !== (n = e.componentType) && void 0 !== n ? n : "undefined") + "-" + t;
						return $().createElement(Nh, {
							key: t,
							componentConfig: e,
							parentAnalyticsContext: u,
							sduiContext: c
						})
					}) : null)
				}
			}(Kl = function(e) {
				var n = e.analyticsContext,
					r = e.sduiContext,
					o = e.universeId,
					i = e.placeId,
					t = e.width,
					a = e.playableText,
					l = e.hidePlayableIcon,
					u = T.PlayButton.usePlayabilityStatus,
					c = T.PlayButton.PlayabilityStatuses,
					s = T.PlayButton.PlayButton,
					d = u(o.toString())[0],
					e = (0, X.useCallback)(function() {
						var e = {
							actionType: Wl.PlayButtonClick,
							actionParams: {}
						};
						kv(e, n, r).onActivated()
					}, [n, r]),
					u = (0, X.useMemo)(function() {
						var e, t = Hl(n, r);
						return eh(eh({}, t), ((e = {})[F.IsAd] = (null !== (t = t[F.IsAd]) && void 0 !== t && t).toString(), e[F.PlaceId] = nl(i, -1), e[F.UniverseId] = nl(o, -1), e[F.PlayContext] = r.pageContext.pageName, e))
					}, [n, i, o, r]);
				return void 0 === d || d !== c.Playable ? $().createElement($().Fragment, null) : $().createElement("div", {
					className: "sdui-play-button-container",
					"data-testid": "sdui-play-button-container",
					style: t ? {
						width: t + "px"
					} : {}
				}, $().createElement(s, {
					universeId: o.toString(),
					placeId: i.toString(),
					eventProperties: u,
					status: d,
					disableLoadingState: !0,
					buttonText: a,
					hideIcon: l,
					analyticsCallback: e
				}))
			}).defaultProps = {
				width: void 0,
				playableText: void 0,
				hidePlayableIcon: void 0
			};
			var nh, rh, et = Kl,
				tt = function(e) {
					var t = e.layoutOrder,
						n = e.anchorPoint,
						r = e.automaticSize,
						o = e.size,
						i = e.position,
						a = e.zIndex,
						l = e.onTitleActivated,
						u = e.titleText,
						c = e.titleColor,
						s = e.titleFontStyle,
						d = e.titleGap,
						f = e.titleIcon,
						p = e.titleIconWidth,
						m = e.titleComponent,
						v = e.onSubtitleActivated,
						h = e.subtitleText,
						g = e.subtitleColor,
						y = e.subtitleFontStyle,
						b = e.subtitleGap,
						w = e.subtitleIcon,
						S = e.subtitleIconWidth,
						C = e.subtitleComponent,
						I = e.verticalGap,
						x = e.infoText,
						E = e.onInfoIconActivated,
						P = e.iconComponent,
						T = e.sduiContext.dependencies.tokens,
						O = (0, X.useMemo)(function() {
							return {
								layoutOrder: t,
								anchorPoint: n,
								automaticSize: r,
								size: o,
								position: i,
								zIndex: a
							}
						}, [t, n, r, o, i, a]),
						e = (0, X.useMemo)(function() {
							return P || (x ? $().createElement(ur, {
								callback: null == E ? void 0 : E.onActivated,
								linkPath: null == E ? void 0 : E.linkPath,
								ariaLabel: x
							}, $().createElement(xt, {
								tooltipText: x,
								placement: "left",
								centerIcon: !0
							})) : void 0)
						}, [P, x, E]);
					return $().createElement(Vr, {
						onTitleActivated: null == l ? void 0 : l.onActivated,
						titleLinkPath: null == l ? void 0 : l.linkPath,
						titleText: u,
						titleTextColor: null != c ? c : T.Color.Content.Emphasis,
						titleFontStyle: null != s ? s : T.Typography.HeadingSmall,
						titleGap: null != d ? d : T.Gap.XXSmall,
						titleIconClassName: f,
						titleIconWidth: null != p ? p : T.Size.Size_600,
						titleComponent: m,
						onSubtitleActivated: null == v ? void 0 : v.onActivated,
						subtitleLinkPath: null == v ? void 0 : v.linkPath,
						subtitleText: h,
						subtitleTextColor: null != g ? g : T.Color.Content.Default,
						subtitleFontStyle: null != y ? y : T.Typography.BodyMedium,
						subtitleGap: null != b ? b : T.Gap.XXSmall,
						subtitleIconClassName: w,
						subtitleIconWidth: null != S ? S : T.Size.Size_400,
						subtitleComponent: C,
						verticalGap: null != I ? I : T.Gap.XXSmall,
						iconComponent: e,
						containerOverrides: O
					})
				},
				oh = function(e) {
					var t = e.layoutOrder,
						n = e.anchorPoint,
						r = e.automaticSize,
						o = e.size,
						i = e.position,
						a = e.zIndex,
						l = e.topLeftSlot,
						u = e.topMiddleSlot,
						c = e.topRightSlot,
						s = e.centerLeftSlot,
						d = e.centerMiddleSlot,
						f = e.centerRightSlot,
						p = e.bottomLeftSlot,
						m = e.bottomMiddleSlot,
						v = e.bottomRightSlot,
						h = e.padding,
						g = e.children,
						e = (0, X.useMemo)(function() {
							return {
								layoutOrder: t,
								anchorPoint: n,
								automaticSize: r,
								size: o,
								position: i,
								zIndex: a
							}
						}, [t, n, r, o, i, a]);
					return $().createElement(qr, {
						topLeftSlot: l,
						topMiddleSlot: u,
						topRightSlot: c,
						centerLeftSlot: s,
						centerMiddleSlot: d,
						centerRightSlot: f,
						bottomLeftSlot: p,
						bottomMiddleSlot: m,
						bottomRightSlot: v,
						padding: h,
						containerOverrides: e
					}, g)
				},
				Ki = function(e) {
					var t = e.layoutOrder,
						n = e.anchorPoint,
						r = e.automaticSize,
						o = e.size,
						i = e.position,
						a = e.zIndex,
						l = e.onActivated,
						u = e.text,
						c = e.textColor,
						s = e.fontStyle,
						d = e.gap,
						f = e.icon,
						p = e.iconWidth,
						m = e.iconColor,
						v = e.iconFirst,
						h = e.textOverrides,
						g = e.iconOverrides,
						y = e.sduiContext.dependencies.tokens,
						e = (0, X.useMemo)(function() {
							return {
								layoutOrder: t,
								anchorPoint: n,
								automaticSize: r,
								size: o,
								position: i,
								zIndex: a
							}
						}, [t, n, r, o, i, a]);
					return $().createElement(Sr, {
						onActivated: null == l ? void 0 : l.onActivated,
						linkPath: null == l ? void 0 : l.linkPath,
						text: u,
						textColor: null != c ? c : y.Color.Content.Emphasis,
						fontStyle: null != s ? s : y.Typography.HeadingSmall,
						gap: d,
						iconClassName: f,
						iconWidth: p,
						iconColor: m,
						iconFirst: v,
						containerOverrides: e,
						textOverrides: h,
						iconOverrides: g
					})
				},
				ih = function() {
					return (ih = Object.assign || function(e) {
						for (var t, n = 1, r = arguments.length; n < r; n++)
							for (var o in t = arguments[n]) Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
						return e
					}).apply(this, arguments)
				},
				Tm = function(e) {
					var o = e.componentConfig,
						t = e.analyticsContext,
						i = e.sduiContext,
						n = e.item,
						r = e.children,
						a = (0, X.useRef)(null),
						l = (0, X.useRef)(null),
						u = (0, X.useCallback)(function(e, t) {
							Pl(e, t, i, a.current)
						}, [a, i]),
						c = (0, X.useCallback)(function() {
							return a.current
						}, [a]),
						s = (0, X.useMemo)(function() {
							return ih(ih({}, t), {
								logAction: u,
								getCollectionAnalyticsData: c
							})
						}, [t, u, c]);
					a.current = (0, X.useMemo)(function() {
						var e;
						return hl(null !== (e = s.ancestorAnalyticsData) && void 0 !== e ? e : {}, null !== (e = s.analyticsData) && void 0 !== e ? e : {}, o.componentType, 1, 1, i)
					}, [s.ancestorAnalyticsData, s.analyticsData, o.componentType, i]);
					var d = (0, X.useMemo)(function() {
							return null != n && n.templateKey ? i.templateRegistry.resolveTemplateForConfig(n) : n
						}, [n, i]),
						f = (0, X.useCallback)(function(e) {
							var t, n, r;
							d ? (a.current && ("Game" !== (n = a.current.contentType) && "HeroUnit" !== n || null !== (t = l.current) && void 0 !== t && t.universeId && (n = null !== (r = al(i.pageContext)) && void 0 !== r ? r : "", r = tl(null === (t = a.current) || void 0 === t ? void 0 : t[n], ""), r = ih(((t = {})[F.RootPlaceIds] = [nl(null === (n = l.current) || void 0 === n ? void 0 : n.placeId, -1)], t[F.UniverseIds] = [nl(null === (n = l.current) || void 0 === n ? void 0 : n.universeId, -1)], t[F.AdsPositions] = [!0 === rl(null === (n = l.current) || void 0 === n ? void 0 : n.adFlag, !1, i.pageContext) ? 1 : 0], t[F.AdFlags] = [!0 === rl(null === (n = l.current) || void 0 === n ? void 0 : n.adFlag, !1, i.pageContext) ? 1 : 0], t[F.AbsPositions] = [0], t[F.SortPos] = null !== (n = null === (n = a.current) || void 0 === n ? void 0 : n.collectionPosition) && void 0 !== n ? n : -1, t[F.GameSetTypeId] = null === (n = a.current) || void 0 === n ? void 0 : n.collectionId, t[F.Page] = i.pageContext.pageName, t[F.ComponentType] = "HeroUnit", t), ll(r, i)), r = ee.gameImpressions(r), P.eventStreamService.sendEvent.apply(P.eventStreamService, r))), Dl(e, [l.current], a.current, i)) : bl(sl.SingleItemCollectionItemImpressedButMissing, "SingleItemCollection onItemImpressed missing item " + JSON.stringify(d) + " with config " + JSON.stringify(o), i.pageContext)
						}, [d, o, a, l, i]),
						p = (0, X.useRef)(null);
					Ei(p, 1, f);
					e = (0, X.useMemo)(function() {
						var e;
						if (!d) return bl(sl.SingleItemCollectionMissingItem, "SingleItemCollection missing item " + JSON.stringify(d) + " with config " + JSON.stringify(o), i.pageContext), $().createElement($().Fragment, null);
						var t = {
							itemPosition: 1
						};
						return l.current = gl(null !== (e = d.analyticsData) && void 0 !== e ? e : {}, null !== (e = a.current) && void 0 !== e ? e : {}, t, i), $().createElement(Nh, {
							componentConfig: d,
							parentAnalyticsContext: s,
							sduiContext: i,
							localAnalyticsData: t
						})
					}, [d, o, s, a, i]), f = (0, X.useMemo)(function() {
						return $().Children.map(r, function(e, t) {
							if (!$().isValidElement(e)) return bl("SingleItemCollectionChildNotReactElement", "SingleItemCollectionChildNotReactElement " + JSON.stringify(o) + " child " + JSON.stringify(e) + " is not a valid React element", i.pageContext), e;
							t = o.componentType + "-child-" + t;
							return $().cloneElement(e, ih(ih({}, e.props), {
								key: t,
								parentAnalyticsContext: s
							}))
						})
					}, [r, s, o, i.pageContext]);
					return $().createElement("div", {
						ref: p
					}, e, f)
				},
				ah = function() {
					return (ah = Object.assign || function(e) {
						for (var t, n = 1, r = arguments.length; n < r; n++)
							for (var o in t = arguments[n]) Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
						return e
					}).apply(this, arguments)
				},
				lh = function(o, i, a, l, e) {
					var t = Ih[o],
						u = ah({}, i),
						c = null != e ? e : null == t ? void 0 : t.propParsers;
					return c && Object.keys(i).forEach(function(e) {
						var t, n = i[e],
							r = c[e];
						void 0 !== n && r && ("function" == typeof r ? void 0 !== (t = r(n, a, l)) ? u[e] = t : bl(sl.PropParseFailure, "Failed to parse prop " + e + " with value " + JSON.stringify(n) + " for component " + o, l.pageContext) : "object" == typeof r ? "object" == typeof(t = n) && null !== t && Object.keys(t).every(function(e) {
							return "string" == typeof e
						}) ? u[e] = lh(o, n, a, l, r) : bl(sl.NestedPropParseFailure, "Expected a nested object for prop " + e + " with value " + JSON.stringify(n) + " using for component " + o, l.pageContext) : bl(sl.PropParserNotFound, "Prop parser not found for prop " + e + " and component " + o, l.pageContext))
					}), u
				},
				uh = function() {
					return (uh = Object.assign || function(e) {
						for (var t, n = 1, r = arguments.length; n < r; n++)
							for (var o in t = arguments[n]) Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
						return e
					}).apply(this, arguments)
				},
				ql = function(r) {
					var e = $().memo(function(n) {
						return (0, X.useMemo)(function() {
							var e = th(n.componentConfig, n.parentAnalyticsContext, n.sduiContext, n.localAnalyticsData, n.extraLocalProps, n.responsivePropOverrides, n.conditionalPropOverrides),
								t = e.props,
								e = e.children;
							return $().createElement(r, t, e)
						}, [n.componentConfig, n.parentAnalyticsContext, n.sduiContext, n.localAnalyticsData, n.extraLocalProps, n.responsivePropOverrides, n.conditionalPropOverrides])
					});
					return e.displayName = "SduiWrapped" + (r.displayName || r.name), e
				},
				oe = function(e) {
					var t = e.size,
						n = e.variant,
						r = e.text,
						o = e.onActivated,
						e = null != t ? t : "Medium",
						t = null != n ? n : "Emphasis",
						n = function() {
							null != o && o.onActivated && o.onActivated()
						};
					return null != o && o.linkPath ? $().createElement(nu, {
						as: "a",
						altText: r,
						size: e,
						variant: t,
						href: o.linkPath,
						onClick: n
					}, r) : $().createElement(nu, {
						as: "button",
						altText: r,
						size: e,
						variant: t,
						onClick: n
					}, r)
				},
				mm = (nh = function(e, t) {
					return (nh = Object.setPrototypeOf || {
							__proto__: []
						}
						instanceof Array && function(e, t) {
							e.__proto__ = t
						} || function(e, t) {
							for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n])
						})(e, t)
				}, function(e, t) {
					if ("function" != typeof t && null !== t) throw new TypeError("Class extends value " + String(t) + " is not a constructor or null");

					function n() {
						this.constructor = e
					}
					nh(e, t), e.prototype = null === t ? Object.create(t) : (n.prototype = t.prototype, new n)
				});

			function ch(e) {
				e = rh.call(this, e) || this;
				return e.state = {
					hasError: !1
				}, e
			}
			var sh, dh = (rh = $().Component, mm(ch, rh), ch.getDerivedStateFromError = function() {
					return {
						hasError: !0
					}
				}, ch.prototype.componentDidCatch = function(e, t) {
					e = e.message, t = t.componentStack;
					(0, this.props.logError)(e, t)
				}, ch.prototype.render = function() {
					var e = this.state.hasError,
						t = this.props,
						n = t.fallback,
						t = t.children;
					return e ? n : t
				}, ch),
				$i = function(e) {
					var t = e.feedItems,
						r = e.analyticsContext,
						o = e.sduiContext,
						n = e.maxWidth,
						i = e.gapBetweenFeedItems,
						a = e.paddingLeft,
						l = e.paddingRight,
						u = o.dependencies.tokens,
						c = (0, X.useCallback)(function(e, t) {
							bl(sl.SduiFeedItemBoundaryError, "Error rendering feed item with error message " + e + " and callstack " + t, o.pageContext)
						}, [o.pageContext]),
						e = (0, X.useMemo)(function() {
							return t.map(function(e, t) {
								var n;
								return {
									key: null !== (n = e.feedItemKey) && void 0 !== n ? n : t.toString(),
									component: $().createElement(dh, {
										fallback: $().createElement($().Fragment, null),
										logError: c
									}, $().createElement(Nh, {
										componentConfig: e,
										parentAnalyticsContext: r,
										sduiContext: o
									}))
								}
							})
						}, [t, r, o, c]);
					return $().createElement(fo, {
						feedItems: e,
						maxWidth: n,
						gapBetweenFeedItems: null != i ? i : u.Gap.XXLarge,
						paddingLeft: a,
						paddingRight: l
					})
				},
				Kl = function(e) {
					var t = e.sduiContext,
						n = e.title,
						r = e.titleFontStyle,
						o = e.subtitle,
						i = e.subtitleFontStyle,
						a = e.titleSubtitleGap,
						l = e.subtitleMaxLines,
						u = e.height,
						c = e.rightButtonContent,
						e = e.image,
						t = t.dependencies.tokens;
					return $().createElement(Ir, {
						title: n,
						subtitle: o,
						textColor: t.Color.Content.Emphasis,
						titleFontStyle: null != r ? r : t.Typography.TitleMedium,
						subtitleFontStyle: null != i ? i : t.Typography.BodyMedium,
						titleSubtitleGap: a,
						subtitleMaxLines: l,
						rightButtonContent: c,
						imageComponent: e,
						height: u
					})
				};

			function fh(e, t, n, r) {
				switch (e) {
					case Sv.imageQualityLevel:
						if (!ol(t)) return bl(sl.InvalidImageQualityLevelConditionValue, "Invalid image quality level value: " + (t ? JSON.stringify(t) : "undefined"), r.pageContext), !1;
						var o = Eh[tl(t, "")];
						return void 0 === o ? (bl(sl.UnknownImageQualityLevelConditionValue, "Unknown image quality level: " + t.toString(), r.pageContext), !1) : Ph === o;
					case Sv.maxScreenWidth:
						if (!ol(t)) return bl(sl.InvalidMaxWidthConditionValue, "Invalid max width condition value: " + (t ? JSON.stringify(t) : "undefined"), r.pageContext), !1;
						var i = nl(t, -1);
						return i < 0 ? (bl(sl.InvalidParsedMaxWidthConditionValue, "Cannot parse max width value: " + t.toString(), r.pageContext), !1) : n <= i;
					case Sv.minScreenWidth:
						if (!ol(t)) return bl(sl.InvalidMinWidthConditionValue, "Invalid min width condition value: " + (t ? JSON.stringify(t) : "undefined"), r.pageContext), !1;
						i = nl(t, -1);
						return i < 0 ? (bl(sl.InvalidParsedMinWidthConditionValue, "Cannot parse min width value: " + t.toString(), r.pageContext), !1) : i <= n;
					default:
						return bl(sl.UnknownResponsivePropConditionKey, "Unknown responsive prop condition key: " + JSON.stringify(e), r.pageContext), !1
				}
			}

			function ph(e) {
				var t = e.wrappedComponent,
					n = e.componentConfig,
					r = e.parentAnalyticsContext,
					o = e.sduiContext,
					i = e.localAnalyticsData,
					a = e.extraLocalProps,
					l = (e = (0, X.useState)(window.innerWidth))[0],
					u = e[1];
				return (0, X.useEffect)(function() {
					function e() {
						u(window.innerWidth)
					}
					return window.addEventListener("resize", e),
						function() {
							window.removeEventListener("resize", e)
						}
				}, []), e = (0, X.useMemo)(function() {
					return Th(n.responsiveProps, l, o)
				}, [n.responsiveProps, l, o]), $().createElement(t, {
					componentConfig: n,
					parentAnalyticsContext: r,
					sduiContext: o,
					localAnalyticsData: i,
					extraLocalProps: a,
					responsivePropOverrides: e
				})
			}

			function mh(e) {
				return Oh.includes(e)
			}

			function vh(e) {
				var t = e.conditionalProps,
					n = e.setFailedPresenceConditionIndexes,
					o = e.sduiContext;
				return (0, X.useEffect)(function() {
					var r = new Set;
					null != t && t.forEach(function(e, n) {
						e = e.conditions;
						e && Object.entries(e).forEach(function(e) {
							var t = e[0],
								e = e[1];
							mh(t) && (function(e, t, n, r) {
								if (e !== Cv.friendInGame) return bl(sl.UnknownPresenceConditionKey, "Unknown presence condition key: " + JSON.stringify(e), r.pageContext), !1;
								if (!ol(t)) return bl(sl.InvalidPresenceConditionValue, "Invalid presence condition value: " + JSON.stringify(t) + ", for key: " + e, r.pageContext), !1;
								var o = tl(t, "");
								return o ? 0 < (null === (o = n.inGameFriendsByUniverseId[o]) || void 0 === o ? void 0 : o.length) : (bl(sl.InvalidPresenceConditionValue, "Invalid friend in game condition value: " + JSON.stringify(t) + ", for key: " + e, r.pageContext), !1)
							}(t, e, o.dataStore.social, o) || r.add(n))
						})
					}), n(function(e) {
						return (0, Ci.isEqual)(e, r) ? e : r
					})
				}, [t, o, n]), null
			}

			function hh(e) {
				return kh.includes(e)
			}

			function gh(e) {
				var t = e.conditionalProps,
					n = e.setFailedResponsiveConditionIndexes,
					o = e.sduiContext,
					i = (e = (0, X.useState)(window.innerWidth))[0],
					r = e[1];
				return (0, X.useEffect)(function() {
					function e() {
						r(window.innerWidth)
					}
					return window.addEventListener("resize", e),
						function() {
							window.removeEventListener("resize", e)
						}
				}, []), (0, X.useEffect)(function() {
					var r = new Set;
					null != t && t.forEach(function(e, n) {
						e = e.conditions;
						e && Object.entries(e).forEach(function(e) {
							var t = e[0],
								e = e[1];
							hh(t) && (fh(t, e, i, o) || r.add(n))
						})
					}), n(function(e) {
						return (0, Ci.isEqual)(e, r) ? e : r
					})
				}, [t, n, i, o]), null
			}

			function yh(e) {
				var t = e.wrappedComponent,
					n = e.componentConfig,
					r = e.parentAnalyticsContext,
					o = e.sduiContext,
					i = e.localAnalyticsData,
					a = e.extraLocalProps,
					l = n.conditionalProps,
					u = (p = (0, X.useState)(new Set))[0],
					c = p[1],
					s = (e = (0, X.useState)(new Set))[0],
					d = e[1],
					f = (0, X.useMemo)(function() {
						var t = {
							hasPresenceCondition: !1,
							hasResponsiveCondition: !1
						};
						if (!l) return t;
						var n = Object.keys(Cv),
							r = Object.keys(Sv);
						return l.forEach(function(e) {
							e = e.conditions;
							e && Object.keys(e).forEach(function(e) {
								n.includes(e) ? t.hasPresenceCondition = !0 : r.includes(e) && (t.hasResponsiveCondition = !0)
							})
						}), t
					}, [l]),
					p = (0, X.useMemo)(function() {
						return $().createElement($().Fragment, null, f.hasPresenceCondition && $().createElement(vh, {
							conditionalProps: l,
							setFailedPresenceConditionIndexes: d,
							sduiContext: o
						}), f.hasResponsiveCondition && $().createElement(gh, {
							conditionalProps: l,
							setFailedResponsiveConditionIndexes: c,
							sduiContext: o
						}))
					}, [f, l, o]),
					m = (0, X.useCallback)(function(e, t) {
						return !s.has(t) && !u.has(t) && (!e || Object.keys(e).every(function(e) {
							return !(!mh(e) && !hh(e)) || (bl(sl.UnsupportedConditionalPropsCondition, "Unsupported condition: " + e, o.pageContext), !1)
						}))
					}, [s, u, o.pageContext]),
					v = (0, X.useMemo)(function() {
						return l ? l.reduce(function(e, t, n) {
							var r = t.conditions,
								t = t.propOverrides;
							return t && m(r, n) ? Ah(Ah({}, e), t) : e
						}, {}) : {}
					}, [l, m]),
					e = (0, X.useMemo)(function() {
						return $().createElement(t, {
							componentConfig: n,
							parentAnalyticsContext: r,
							sduiContext: o,
							localAnalyticsData: i,
							extraLocalProps: a,
							conditionalPropOverrides: v
						})
					}, [t, n, r, o, i, a, v]);
				return $().createElement($().Fragment, null, e, p)
			}

			function bh(e) {
				var n = {};
				return Object.values(e).forEach(function(e) {
					var t;
					void 0 !== (null === (t = e.presence) || void 0 === t ? void 0 : t.universeId) && (null === (t = e.presence) || void 0 === t ? void 0 : t.userPresenceType) === T.Presence.PresenceTypes.InGame && (n[e.presence.universeId] || (n[e.presence.universeId] = []), n[e.presence.universeId].push({
						userId: e.id,
						displayName: e.displayName,
						presence: {
							gameId: e.presence.gameId,
							placeId: e.presence.placeId,
							rootPlaceId: e.presence.rootPlaceId
						}
					}))
				}), n
			}

			function wh(e) {
				var n = e.sort,
					r = e.sduiRoot,
					t = e.currentPage,
					o = mn(),
					i = Bh(null == r ? void 0 : r.templates, t),
					e = (0, X.useMemo)(function() {
						var e = Tv(r, n.feedItemKey, i);
						if (!e) return $().createElement($().Fragment, null);
						var t = Gh({}, ll(o, i));
						return $().createElement("div", {
							className: "sdui-feed-item-container"
						}, $().createElement(Nh, {
							componentConfig: e,
							parentAnalyticsContext: {},
							localAnalyticsData: t,
							sduiContext: i
						}))
					}, [n, r, o, i]),
					t = (0, X.useCallback)(function(e, t) {
						bl(sl.SduiFeedItemBoundaryError, "Error rendering feed item for sort " + JSON.stringify(n) + " and sdui root " + JSON.stringify(r) + " with error message " + e + " and callstack " + t, i.pageContext)
					}, [n, r, i.pageContext]);
				return $().createElement(dh, {
					fallback: $().createElement($().Fragment, null),
					logError: t
				}, e)
			}

			function Sh(e) {
				var t = e.sort,
					n = (e.positionId, e.currentPage),
					r = (0, p.useTokens)(),
					o = Bh(void 0, n),
					i = mn(),
					e = (0, X.useMemo)(function() {
						return ll(i, o)
					}, [i, o]),
					a = (0, X.useMemo)(function() {
						return t.songs.map(function(e) {
							return {
								componentType: sh.Tile,
								analyticsData: {
									id: e.assetId
								},
								props: {
									imageAspectRatio: 1,
									titleText: e.title,
									image: "rbxthumb://type=Asset&id=" + e.albumArtAssetId + "&w=150&h=150",
									footerComponent: {
										componentType: sh.TileFooter,
										props: {
											leftText: e.artist
										}
									}
								}
							}
						})
					}, [t.songs]),
					n = (0, X.useMemo)(function() {
						var e;
						return {
							componentType: sh.CollectionCarousel,
							props: {
								items: a,
								layoutOverrides: {
									sideMargin: r.Gap.XLarge
								},
								scrollingEnabledOverride: !0,
								collectionItemSize: "Small",
								headerComponent: {
									componentType: sh.SectionHeader,
									props: {
										titleText: t.topic,
										titleGap: r.Gap.XSmall,
										subtitleText: t.subtitle,
										titleIcon: "icons/navigation/pushRight_small",
										infoText: null === (e = t.topicLayoutData) || void 0 === e ? void 0 : e.infoText
									}
								}
							}
						}
					}, [a, t.subtitle, t.topic, null === (n = t.topicLayoutData) || void 0 === n ? void 0 : n.infoText, r.Gap.XLarge, r.Gap.XSmall]);
				return 0 === a.length ? null : $().createElement(Nh, {
					componentConfig: n,
					parentAnalyticsContext: {},
					localAnalyticsData: e,
					sduiContext: o
				})
			}

			function Ch(e) {
				return e === Y.HomePage || e === Y.GamesPage || e === Y.SpotlightPage
			}(mm = sh = sh || {}).SingleItemCollection = "SingleItemCollection", mm.HeroUnit = "HeroUnit", mm.PlayButton = "PlayButton", mm.TextIconRow = "TextIconRow", mm.TileFooter = "TileFooter", mm.GameTileActiveFriendsFooter = "GameTileActiveFriendsFooter", mm.Tile = "Tile", mm.GameTile = "GameTile", mm.SectionHeader = "SectionHeader", mm.SlotOverlay = "SlotOverlay", mm.CollectionCarousel = "CollectionCarousel", mm.CollectionGrid = "CollectionGrid", mm.ImageWithGradient = "ImageWithGradient", mm.Button = "Button", mm.VerticalFeed = "VerticalFeed", mm.Page = "Page", mm.DetailsPageHeader = "DetailsPageHeader", mm.AttributionRow = "AttributionRow";
			var Ih = ((mm = {})[sh.SingleItemCollection] = {
					component: ql(Tm),
					propParsers: {}
				}, mm[sh.PlayButton] = {
					component: ql(et),
					propParsers: {}
				}, mm[sh.HeroUnit] = {
					component: ql(Sl),
					propParsers: {
						backgroundComponent: lt.parseUiComponent,
						bottomRowComponent: lt.parseUiComponent,
						ctaButtonComponent: lt.parseUiComponent,
						headerComponent: lt.parseUiComponent,
						onActivated: lt.parseCallback,
						overlayComponent: lt.parseUiComponent,
						asset: lt.parseHeroUnitAsset,
						gradient: lt.parseGradient,
						foregroundImage: lt.parseAssetUrlIntoComponent,
						backgroundImage: lt.parseAssetUrlIntoComponent,
						titleImage: lt.parseAssetUrlIntoComponent
					}
				}, mm[sh.TextIconRow] = {
					component: ql(Ki),
					propParsers: {
						anchorPoint: lt.parseVector2,
						automaticSize: lt.parseAutomaticSize,
						size: lt.parseUDim2,
						position: lt.parseUDim2,
						onActivated: lt.parseCallback,
						textColor: lt.parseColorValue,
						fontStyle: lt.parseFoundationTypographyToken,
						gap: lt.parseFoundationNumberToken,
						icon: lt.parseIcon,
						iconWidth: lt.parseFoundationNumberToken,
						iconColor: lt.parseColorValue
					}
				}, mm[sh.TileFooter] = {
					component: ql(Wv),
					propParsers: {
						onActivated: lt.parseCallback,
						textColor: lt.parseColorValue,
						fontStyle: lt.parseFoundationTypographyToken,
						gap: lt.parseFoundationNumberToken,
						leftIcon: lt.parseIcon,
						leftIconComponent: lt.parseUiComponent,
						rightIcon: lt.parseIcon,
						rightIconComponent: lt.parseUiComponent
					}
				}, mm[sh.GameTileActiveFriendsFooter] = {
					component: ql(Vv),
					propParsers: {
						iconWidth: lt.parseFoundationNumberToken,
						onActivated: lt.parseCallback
					}
				}, mm[sh.Tile] = {
					component: ql(yl),
					propParsers: {
						image: lt.parseAssetUrlIntoComponent,
						imageComponent: lt.parseUiComponent,
						thumbnailOverlayComponent: lt.parseUiComponent,
						onActivated: lt.parseCallback,
						titleColor: lt.parseColorValue,
						titleFont: lt.parseFoundationTypographyToken,
						titleComponent: lt.parseUiComponent,
						containmentPadding: lt.parseFoundationNumberToken,
						cornerRadius: lt.parseFoundationNumberToken,
						footerComponent: lt.parseUiComponent,
						ctaButtonComponent: lt.parseUiComponent
					}
				}, mm[sh.GameTile] = {
					component: ql(Lu),
					propParsers: {
						image: lt.parseAssetUrlIntoComponent,
						imageComponent: lt.parseUiComponent,
						thumbnailOverlayComponent: lt.parseUiComponent,
						onActivated: lt.parseCallback,
						titleColor: lt.parseColorValue,
						titleFont: lt.parseFoundationTypographyToken,
						titleComponent: lt.parseUiComponent,
						containmentPadding: lt.parseFoundationNumberToken,
						cornerRadius: lt.parseFoundationNumberToken,
						footerComponent: lt.parseUiComponent,
						ctaButtonComponent: lt.parseUiComponent
					}
				}, mm[sh.SectionHeader] = {
					component: ql(tt),
					propParsers: {
						anchorPoint: lt.parseVector2,
						automaticSize: lt.parseAutomaticSize,
						size: lt.parseUDim2,
						position: lt.parseUDim2,
						onTitleActivated: lt.parseCallback,
						titleColor: lt.parseColorValue,
						titleFontStyle: lt.parseFoundationTypographyToken,
						titleGap: lt.parseFoundationNumberToken,
						titleIcon: lt.parseIcon,
						titleIconWidth: lt.parseFoundationNumberToken,
						titleComponent: lt.parseUiComponent,
						onSubtitleActivated: lt.parseCallback,
						subtitleColor: lt.parseColorValue,
						subtitleFontStyle: lt.parseFoundationTypographyToken,
						subtitleGap: lt.parseFoundationNumberToken,
						subtitleIcon: lt.parseIcon,
						subtitleIconWidth: lt.parseFoundationNumberToken,
						subtitleComponent: lt.parseUiComponent,
						verticalGap: lt.parseFoundationNumberToken,
						onInfoIconActivated: lt.parseCallback,
						iconComponent: lt.parseUiComponent
					}
				}, mm[sh.SlotOverlay] = {
					component: ql(oh),
					propParsers: {
						anchorPoint: lt.parseVector2,
						automaticSize: lt.parseAutomaticSize,
						size: lt.parseUDim2,
						position: lt.parseUDim2,
						topLeftSlot: lt.parseUiComponent,
						topMiddleSlot: lt.parseUiComponent,
						topRightSlot: lt.parseUiComponent,
						centerLeftSlot: lt.parseUiComponent,
						centerMiddleSlot: lt.parseUiComponent,
						centerRightSlot: lt.parseUiComponent,
						bottomLeftSlot: lt.parseUiComponent,
						bottomMiddleSlot: lt.parseUiComponent,
						bottomRightSlot: lt.parseUiComponent,
						padding: lt.parseFoundationNumberToken
					}
				}, mm[sh.CollectionCarousel] = {
					component: ql(te),
					propParsers: {
						layoutOverrides: {
							columnGap: lt.parseFoundationNumberToken,
							sideMargin: lt.parseFoundationNumberToken
						},
						onScrollToEnd: lt.parseCallback,
						headerComponent: lt.parseUiComponent
					}
				}, mm[sh.CollectionGrid] = {
					component: ql(fr),
					propParsers: {
						layoutOverrides: {
							columnGap: lt.parseFoundationNumberToken,
							sideMargin: lt.parseFoundationNumberToken
						},
						headerComponent: lt.parseUiComponent
					}
				}, mm[sh.ImageWithGradient] = {
					component: ql(function(e) {
						var t = e.image,
							n = e.imageContainerHeight,
							r = e.imageAspectRatio,
							o = e.gradient,
							e = e.borderRadius,
							r = Qr({
								imageContainerHeight: n,
								borderRadius: void 0 === e ? 0 : e,
								imageAspectRatio: r
							}).classes;
						return X.createElement("div", {
							className: r.imageWithGradientWindow,
							"data-testid": "image-with-gradient-window"
						}, X.createElement("div", {
							className: r.imageContainer,
							"data-testid": "image-container"
						}, t), o && X.createElement(Ur, {
							gradient: o
						}))
					}),
					propParsers: {
						image: lt.parseAssetUrlIntoComponent,
						gradient: lt.parseGradient
					}
				}, mm[sh.Button] = {
					component: ql(oe),
					propParsers: {
						onActivated: lt.parseCallback,
						size: lt.parseFoundationButtonSize,
						variant: lt.parseFoundationButtonVariant
					}
				}, mm[sh.Page] = {
					component: ql(function(e) {
						var t = e.backgroundColor,
							n = e.pageHeader,
							e = e.feed,
							t = yo({
								backgroundColor: t
							}).classes;
						return X.createElement("div", {
							className: t.pageContainer
						}, n, e)
					}),
					propParsers: {
						backgroundColor: lt.parseColorValue,
						pageHeader: lt.parseUiComponent,
						feed: lt.parseUiComponent
					}
				}, mm[sh.DetailsPageHeader] = {
					component: ql(function(e) {
						var t = e.backgroundComponent,
							n = e.backgroundMaxWidth,
							r = e.contentComponent,
							o = e.contentMaxWidth,
							i = e.contentPaddingLeft,
							e = e.contentPaddingRight,
							e = go({
								backgroundMaxWidth: n,
								contentMaxWidth: o,
								contentPaddingLeft: i,
								contentPaddingRight: e
							}).classes;
						return X.createElement("div", {
							className: e.detailsPageHeaderContainer
						}, X.createElement("div", {
							className: e.backgroundContainer
						}, t), X.createElement("div", {
							className: e.contentContainer
						}, X.createElement("div", {
							className: e.contentMaxWidthContainer
						}, r)))
					}),
					propParsers: {
						backgroundComponent: lt.parseUiComponent,
						backgroundMaxWidth: lt.parseFoundationNumberToken,
						contentComponent: lt.parseUiComponent,
						contentMaxWidth: lt.parseFoundationNumberToken,
						paddingLeft: lt.parseFoundationNumberToken,
						paddingRight: lt.parseFoundationNumberToken
					}
				}, mm[sh.VerticalFeed] = {
					component: ql($i),
					propParsers: {
						gapBetweenFeedItems: lt.parseFoundationNumberToken,
						maxWidth: lt.parseFoundationNumberToken,
						paddingLeft: lt.parseFoundationNumberToken,
						paddingRight: lt.parseFoundationNumberToken
					}
				}, mm[sh.AttributionRow] = {
					component: ql(Kl),
					propParsers: {
						rightButtonContent: lt.parseUiComponent,
						image: lt.parseAssetUrlIntoComponent,
						titleFontStyle: lt.parseFoundationTypographyToken,
						subtitleFontStyle: lt.parseFoundationTypographyToken,
						titleSubtitleGap: lt.parseFoundationNumberToken,
						height: lt.parseFoundationNumberToken
					}
				}, mm),
				xh = function(e) {
					return Ih[e] ? Ih[e].component : null
				},
				Eh = {
					low: 1,
					Low: 1,
					medium: 2,
					Medium: 2,
					high: 3,
					High: 3
				},
				Ph = Eh.High,
				Th = function(e, n, r) {
					if (!e) return {};
					e = e.find(function(e) {
						e = e.conditions;
						return !e || Object.entries(e).every(function(e) {
							var t = e[0],
								e = e[1];
							return fh(t, e, n, r)
						})
					});
					return e ? e.overrides : {}
				},
				Oh = Object.keys(Cv),
				kh = Object.keys(Sv),
				Ah = function() {
					return (Ah = Object.assign || function(e) {
						for (var t, n = 1, r = arguments.length; n < r; n++)
							for (var o in t = arguments[n]) Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
						return e
					}).apply(this, arguments)
				},
				Nh = function(e) {
					var t = e.componentConfig,
						n = e.parentAnalyticsContext,
						r = e.sduiContext,
						o = e.localAnalyticsData,
						i = e.extraLocalProps,
						a = (0, X.useMemo)(function() {
							return t.templateKey ? r.templateRegistry.resolveTemplateForConfig(t) : t
						}, [t, r]);
					return (0, X.useMemo)(function() {
						if (!Ov(a)) return bl(sl.SduiComponentBuildPropsAndChildrenInvalidConfig, "Invalid component config " + JSON.stringify(a) + " to build React props and children", r.pageContext), $().createElement($().Fragment, null);
						var e = a.componentType,
							t = xh(e);
						return t ? a.conditionalProps ? $().createElement(yh, {
							wrappedComponent: t,
							componentConfig: a,
							parentAnalyticsContext: n,
							sduiContext: r,
							localAnalyticsData: o,
							extraLocalProps: i
						}) : a.responsiveProps ? $().createElement(ph, {
							wrappedComponent: t,
							componentConfig: a,
							parentAnalyticsContext: n,
							sduiContext: r,
							localAnalyticsData: o,
							extraLocalProps: i
						}) : $().createElement(t, {
							componentConfig: a,
							parentAnalyticsContext: n,
							sduiContext: r,
							localAnalyticsData: o,
							extraLocalProps: i
						}) : (bl(sl.ComponentNotFound, "Component not found for type " + e + " using config " + JSON.stringify(a), r.pageContext), $().createElement($().Fragment, null))
					}, [a, n, r, o, i])
				},
				_h = function() {
					return (_h = Object.assign || function(e) {
						for (var t, n = 1, r = arguments.length; n < r; n++)
							for (var o in t = arguments[n]) Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
						return e
					}).apply(this, arguments)
				},
				Rh = function(e, t) {
					for (var n = 0, r = t.length, o = e.length; n < r; n++, o++) e[o] = t[n];
					return e
				},
				Lh = function(e, i) {
					var a = (0, X.useMemo)(function() {
							var n = new Map;
							return e && Object.entries(e).forEach(function(e) {
								var t = e[0],
									e = e[1];
								n.set(t, e)
							}), n
						}, [e]),
						l = (0, X.useCallback)(function(e, t) {
							var n = e.templateKey;
							if (!n) return e;
							var r = (0, Ci.cloneDeep)(e);
							if (t && t[n]) return bl(sl.TemplateResolutionCircularReference, "Circular reference detected for template key: " + n, i), r.templateKey = void 0, r;
							var o = t || {};
							o[n] = !0;
							t = a.get(n);
							if (!t) return bl(sl.TemplateResolutionTemplateNotFound, "Template not found for template key: " + n + " with config: " + JSON.stringify(e), i), r.templateKey = void 0, r;
							t = l(t, o);
							if (r.templateKey = void 0, e.componentType) {
								if (e.componentType && t.componentType && e.componentType !== t.componentType) return bl(sl.TemplateResolutionComponentTypeMismatch, "Component type mismatch for template key: " + n + ". Template type: " + t.componentType + ", Config type: " + e.componentType, i), r
							} else r.componentType = t.componentType;
							return t.analyticsData && (r.analyticsData = _h(_h({}, t.analyticsData), e.analyticsData)), t.props && (r.props = null !== (o = t.props, n = e.props, n = o ? (0, Ci.merge)((0, Ci.cloneDeep)(o), n) : (0, Ci.cloneDeep)(n)) && void 0 !== n ? n : {}), t.children && (r.children = Rh(Rh([], t.children), e.children || [])), r
						}, [a, i]);
					return (0, X.useMemo)(function() {
						return {
							resolveTemplateForConfig: l
						}
					}, [l])
				},
				Dh = function() {
					return (Dh = Object.assign || function(e) {
						for (var t, n = 1, r = arguments.length; n < r; n++)
							for (var o in t = arguments[n]) Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
						return e
					}).apply(this, arguments)
				},
				Mh = function(e, a, l, u) {
					return new(l = l || Promise)(function(n, t) {
						function r(e) {
							try {
								i(u.next(e))
							} catch (e) {
								t(e)
							}
						}

						function o(e) {
							try {
								i(u.throw(e))
							} catch (e) {
								t(e)
							}
						}

						function i(e) {
							var t;
							e.done ? n(e.value) : ((t = e.value) instanceof l ? t : new l(function(e) {
								e(t)
							})).then(r, o)
						}
						i((u = u.apply(e, a || [])).next())
					})
				},
				Fh = function(n, r) {
					var o, i, a, l = {
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
								if (o) throw new TypeError("Generator is already executing.");
								for (; l;) try {
									if (o = 1, i && (a = 2 & t[0] ? i.return : t[0] ? i.throw || ((a = i.return) && a.call(i), 0) : i.next) && !(a = a.call(i, t[1])).done) return a;
									switch (i = 0, a && (t = [2 & t[0], a.value]), t[0]) {
										case 0:
										case 1:
											a = t;
											break;
										case 4:
											return l.label++, {
												value: t[1],
												done: !1
											};
										case 5:
											l.label++, i = t[1], t = [0];
											continue;
										case 7:
											t = l.ops.pop(), l.trys.pop();
											continue;
										default:
											if (!(a = 0 < (a = l.trys).length && a[a.length - 1]) && (6 === t[0] || 2 === t[0])) {
												l = 0;
												continue
											}
											if (3 === t[0] && (!a || t[1] > a[0] && t[1] < a[3])) {
												l.label = t[1];
												break
											}
											if (6 === t[0] && l.label < a[1]) {
												l.label = a[1], a = t;
												break
											}
											if (a && l.label < a[2]) {
												l.label = a[2], l.ops.push(t);
												break
											}
											a[2] && l.ops.pop(), l.trys.pop();
											continue
									}
									t = r.call(n, l)
								} catch (e) {
									t = [6, e], i = 0
								} finally {
									o = a = 0
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
				jh = function(i) {
					var e = (0, X.useState)({}),
						t = e[0],
						a = e[1],
						l = (0, X.useRef)({}),
						u = (0, X.useCallback)(function(e) {
							var t, n, r;
							"Roblox.Presence.Update" === (t = e).type && "detail" in t && e.detail && l.current ? (n = (0, Ci.cloneDeep)(l.current), e.detail.forEach(function(e) {
								n[e.userId] && (n[e.userId] = Dh(Dh({}, n[e.userId]), {
									presence: e
								}))
							}), l.current = n, r = bh(n), a(function(e) {
								return (0, Ci.isEqual)(r, e) ? e : r
							})) : bl(sl.InvalidPresenceUpdateEvent, "Invalid presence update event, event is " + JSON.stringify(e) + " and friends details are " + JSON.stringify(l.current), i)
						}, [l, i]);
					return (0, X.useEffect)(function() {
						var e = Oe.deviceMeta.getDeviceMeta();
						if ((null == e ? void 0 : e.deviceType) === Oe.deviceMeta.DeviceTypes.computer && null !== T.CurrentUser && void 0 !== T.CurrentUser && T.CurrentUser.isAuthenticated) return Mh(void 0, void 0, Promise, function() {
								var t, n, r, o;
								return Fh(this, function(e) {
									switch (e.label) {
										case 0:
											return e.trys.push([0, 3, , 4]), [4, Fe()];
										case 1:
											return n = e.sent(), t = n.userData || [], (n = t.map(function(e) {
												return e.id
											})) ? [4, ve(n)] : [2];
										case 2:
											return o = e.sent(), r = o.profileDetails || [], o = t.reduce(function(e, t) {
												var n = r.find(function(e) {
													return e.userId === t.id
												});
												return n && n.names && (e[t.id] = Dh(Dh({}, t), {
													displayName: n.names.combinedName,
													name: n.names.username
												})), e
											}, {}), l.current = o, o = bh(o), a(o), document.addEventListener("Roblox.Presence.Update", u), [3, 4];
										case 3:
											return o = e.sent(), bl(sl.FriendsPresenceFetchFailure, "Failed to get friends details info, error is " + JSON.stringify(o), i), [3, 4];
										case 4:
											return [2]
									}
								})
							}).catch(function() {}),
							function() {
								document.removeEventListener("Roblox.Presence.Update", u)
							}
					}, [u, i]), (0, X.useMemo)(function() {
						return {
							inGameFriendsByUniverseId: t
						}
					}, [t])
				},
				Uh = function(e) {
					var t = jh(e);
					return (0, X.useMemo)(function() {
						return {
							social: t
						}
					}, [t])
				},
				Bh = function(e, t) {
					var n = (0, p.useTokens)(),
						r = (0, X.useMemo)(function() {
							return {
								pageName: t
							}
						}, [t]),
						o = Lh(e, r),
						i = Uh(r),
						a = (0, X.useMemo)(function() {
							return {
								tokens: n
							}
						}, [n]);
					return (0, X.useMemo)(function() {
						return {
							dependencies: a,
							templateRegistry: o,
							dataStore: i,
							pageContext: r
						}
					}, [a, o, i, r])
				},
				Gh = function() {
					return (Gh = Object.assign || function(e) {
						for (var t, n = 1, r = arguments.length; n < r; n++)
							for (var o in t = arguments[n]) Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
						return e
					}).apply(this, arguments)
				};

			function Hh() {
				return $().createElement("div", {
					className: "grid-item-container game-card-container game-card-loading"
				}, $().createElement("div", {
					className: "game-card-thumb-container shimmer"
				}), $().createElement("div", {
					className: "game-card-name game-name-title shimmer"
				}), $().createElement("div", {
					className: "game-card-name game-name-title game-name-title-half shimmer"
				}))
			}

			function Wh(o) {
				var i = mn();
				(0, X.useEffect)(function() {
					var t = window.scrollY,
						e = we(function() {
							var e;
							window.scrollY !== t && (e = null !== (e = null == (e = null === (e = document.getElementById("header")) || void 0 === e ? void 0 : e.getBoundingClientRect()) ? void 0 : e.bottom) && void 0 !== e ? e : 0, Io({
								distance: window.scrollY - t,
								scrollAreaSize: window.innerHeight - e,
								direction: g.Vertical,
								startingPosition: t,
								currentPage: o,
								pageSession: i
							}), t = window.scrollY)
						}, 250),
						n = e[0],
						r = e[1];
					return window.addEventListener("scroll", n),
						function() {
							window.removeEventListener("scroll", n), r()
						}
				}, [o, i])
			}(lt = function(e) {
				var t = e.translate,
					n = e.sort,
					r = e.positionId,
					o = e.currentPage,
					i = e.itemsPerRow,
					a = e.startingRow,
					l = e.gridRecommendations,
					u = e.loadMoreGames,
					c = e.isLoadingMoreGames,
					s = e.isExpandHomeContentEnabled,
					d = e.isMusicChartsCarouselEnabled,
					f = e.isCarouselHorizontalScrollEnabled,
					p = e.isNewScrollArrowsEnabled,
					m = e.isNewSortHeaderEnabled,
					v = e.sduiRoot,
					h = e.fetchGamesPageData;
				switch (n.treatmentType) {
					case I.Carousel:
						return $().createElement(ii, {
							translate: t,
							sort: n,
							positionId: r,
							page: o,
							itemsPerRow: i,
							startingRow: a,
							loadMoreGames: u,
							isLoadingMoreGames: c,
							isExpandHomeContentEnabled: s,
							isCarouselHorizontalScrollEnabled: f,
							isNewSortHeaderEnabled: m,
							isNewScrollArrowsEnabled: p
						});
					case I.AvatarCarousel:
						return $().createElement(ri, {
							sort: n
						});
					case I.SortlessGrid:
						return $().createElement(Si, {
							translate: t,
							sort: n,
							positionId: r,
							itemsPerRow: i,
							startingRow: a,
							recommendations: null != l ? l : [],
							isExpandHomeContentEnabled: s,
							isNewSortHeaderEnabled: m
						});
					case I.FriendCarousel:
						return $().createElement(Ja, {
							sortId: n.topicId,
							sortPosition: r
						});
					case I.SongCarousel:
						return d ? Ch(o) ? $().createElement(Sh, {
							sort: n,
							positionId: r,
							currentPage: o
						}) : (ml(sl.UnsupportedSduiPage, o + " is not supported for SongCarouselFeedItem", {
							pageName: o
						}), $().createElement($().Fragment, null)) : $().createElement($().Fragment, null);
					case I.Pills:
						return $().createElement(dl, {
							sort: n,
							positionId: r,
							translate: t,
							fetchGamesPageData: h
						});
					case I.Sdui:
						return Ch(o) ? $().createElement(wh, {
							sort: n,
							sduiRoot: v,
							currentPage: o
						}) : (ml(sl.UnsupportedSduiPage, o + " is not supported for SduiFeedItem", {
							pageName: o
						}), $().createElement($().Fragment, null));
					default:
						return null
				}
			}).defaultProps = {
				loadMoreGames: void 0,
				isLoadingMoreGames: void 0,
				gridRecommendations: [],
				isExpandHomeContentEnabled: void 0,
				isMusicChartsCarouselEnabled: void 0,
				isCarouselHorizontalScrollEnabled: void 0,
				fetchGamesPageData: void 0,
				isNewScrollArrowsEnabled: void 0,
				isNewSortHeaderEnabled: void 0
			};
			var zh = lt,
				Vh = function(e, o, r) {
					var t = (0, X.useState)(new Map),
						i = t[0],
						n = t[1],
						t = (0, X.useState)(new Map),
						u = t[0],
						a = t[1],
						l = (0, p.usePrevious)(u),
						c = (0, p.usePrevious)(null == e ? void 0 : e.sorts);
					(0, X.useEffect)(function() {
						void 0 !== l && (0, Ci.isEqual)(u, l) && (0, Ci.isEqual)(null == e ? void 0 : e.sorts, c) || function() {
							var i = new Map,
								a = new Map;
							null != e && e.sorts.forEach(function(e) {
								var t;
								e.treatmentType === I.SortlessGrid && ((t = null !== (t = i.get(e.topicId)) && void 0 !== t ? t : []).push.apply(t, e.recommendationList), i.set(e.topicId, t))
							});
							var l = new Map;
							null != e && e.sorts.forEach(function(e, t) {
								var n, r, o;
								e.treatmentType === I.SortlessGrid && (n = null !== (r = i.get(e.topicId)) && void 0 !== r ? r : [], r = null !== (o = a.get(e.topicId)) && void 0 !== o ? o : 0, void 0 !== e.numberOfRows && 0 <= e.numberOfRows ? (o = (null !== (o = u.get(t)) && void 0 !== o ? o : 0) * e.numberOfRows, l.set(t, n.slice(r, r + o)), a.set(e.topicId, r + o)) : (l.set(t, n.slice(r)), a.set(e.topicId, n.length)))
							}), n(l)
						}()
					}, [null == e ? void 0 : e.sorts, c, u, l]);
					var t = (0, X.useMemo)(function() {
							var n = new Map,
								r = 0;
							return null != e && e.sorts.forEach(function(e, t) {
								r && n.set(t, r);
								t = function(e, t) {
									if (void 0 === e.numberOfRows) return (0, E.fireEvent)(Je.missingNumberOfRowsForLoggingErrorEvent), 1;
									if (0 === e.numberOfRows || 1 === e.numberOfRows) return e.numberOfRows;
									e = i.get(t), t = u.get(t);
									return e && t ? Math.ceil(e.length / t) : null
								}(e, t);
								void 0 !== r && null !== t ? r += t : r = void 0
							}), n
						}, [i, u, null == e ? void 0 : e.sorts]),
						s = (0, X.useRef)(null),
						d = (0, X.useCallback)(function(e, t) {
							if (o || e.treatmentType === I.InterestGrid) {
								var n = null === (n = e.topicLayoutData) || void 0 === n ? void 0 : n.componentType;
								return function(e, t, n, r, o, i) {
									var a = n ? (r ? Tt : Pt)[n] : Ot;
									if (!e) return a.minTilesPerRow;
									var l = a.minTileWidth,
										u = a.columnGap,
										n = a.minTilesPerRow,
										a = a.maxTilesPerRow,
										u = Math.floor((e - t + u) / (l + u)),
										u = Math.min(a, Math.max(n, u));
									return r && o === I.Carousel && void 0 !== i && u < i ? u + .3 : u
								}(t, 1, n, r || n === K.EventTile, null == e ? void 0 : e.treatmentType, null === (n = null == e ? void 0 : e.recommendationList) || void 0 === n ? void 0 : n.length)
							}
							return (null === (n = e.topicLayoutData) || void 0 === n ? void 0 : n.componentType) === K.GridTile || (null === (e = e.topicLayoutData) || void 0 === e ? void 0 : e.componentType) === K.EventTile ? t && t < Je.wideGameTileTilesPerRowBreakpointWidth ? Je.minWideGameTilesPerCarouselPage : Je.maxWideGameTilesPerCarouselPage : t && t < Je.homeFeedMaxWidth ? Math.max(1, Math.floor(t / Je.gameTileWidth)) : Je.maxTilesPerCarouselPage
						}, [o, r]),
						f = (0, X.useCallback)(function(n) {
							var r = new Map;
							null != e && e.sorts.forEach(function(e, t) {
								(e.treatmentType === I.SortlessGrid || e.treatmentType === I.InterestGrid || o && e.treatmentType === I.Carousel) && r.set(t, d(e, n))
							}), a(r)
						}, [null == e ? void 0 : e.sorts, d, o]);
					return (0, X.useLayoutEffect)(function() {
						function e() {
							var e = null === (e = null == s ? void 0 : s.current) || void 0 === e ? void 0 : e.getBoundingClientRect().width;
							e && (document.documentElement.style.setProperty("--home-feed-width", e + "px"), f(e))
						}
						return e(), window.addEventListener("resize", e),
							function() {
								window.removeEventListener("resize", e)
							}
					}, [f]), {
						homeFeedRef: s,
						gridRecommendationsMap: i,
						itemsPerRowMap: u,
						startingRowNumbersMap: t
					}
				},
				qh = function() {
					try {
						return {
							cpuCores: null === navigator || void 0 === navigator ? void 0 : navigator.hardwareConcurrency,
							maxResolution: function() {
								var e, t;
								if (null !== (e = null === window || void 0 === window ? void 0 : window.screen) && void 0 !== e && e.width && null !== (t = null === window || void 0 === window ? void 0 : window.screen) && void 0 !== t && t.height) return window.screen.width + "x" + window.screen.height
							}(),
							maxMemory: function() {
								if ("deviceMemory" in navigator && "number" == typeof navigator.deviceMemory) return 1024 * navigator.deviceMemory
							}(),
							networkType: function() {
								var e;
								if ("connection" in navigator && null !== (e = navigator.connection) && void 0 !== e && e.effectiveType) return navigator.connection.effectiveType
							}()
						}
					} catch (e) {
						return {}
					}
				},
				mm = {
					common: [],
					feature: "Feature.ContactUpsell"
				},
				Jh = (T.EnvironmentUrls.apiGatewayUrl, T.EnvironmentUrls.voiceApi);

			function Kh(e, t, n, r, o, i, a) {
				try {
					var l = e[i](a),
						u = l.value
				} catch (e) {
					return void n(e)
				}
				l.done ? t(u) : Promise.resolve(u).then(r, o)
			}
			var Xh = function() {
				var l, e = (l = regeneratorRuntime.mark(function e(t, n) {
					var r, o;
					return regeneratorRuntime.wrap(function(e) {
						for (;;) switch (e.prev = e.next) {
							case 0:
								return r = {
									retryable: !0,
									withCredentials: !0,
									url: "".concat(Jh, "/v1/settings/user-opt-in")
								}, o = {
									isUserOptIn: t,
									isOptedInThroughUpsell: n
								}, e.next = 4, N.httpService.post(r, o);
							case 4:
								return o = e.sent, o = o.data, e.abrupt("return", o);
							case 7:
							case "end":
								return e.stop()
						}
					}, e)
				}), function() {
					var e = this,
						a = arguments;
					return new Promise(function(t, n) {
						var r = l.apply(e, a);

						function o(e) {
							Kh(r, t, n, o, i, "next", e)
						}

						function i(e) {
							Kh(r, t, n, o, i, "throw", e)
						}
						o(void 0)
					})
				});
				return function() {
					return e.apply(this, arguments)
				}
			}();

			function $h(e, t, n, r, o, i, a) {
				try {
					var l = e[i](a),
						u = l.value
				} catch (e) {
					return void n(e)
				}
				l.done ? t(u) : Promise.resolve(u).then(r, o)
			}

			function Yh(t, e) {
				var n, r = Object.keys(t);
				return Object.getOwnPropertySymbols && (n = Object.getOwnPropertySymbols(t), e && (n = n.filter(function(e) {
					return Object.getOwnPropertyDescriptor(t, e).enumerable
				})), r.push.apply(r, n)), r
			}

			function Zh(r) {
				for (var e = 1; e < arguments.length; e++) {
					var o = null != arguments[e] ? arguments[e] : {};
					e % 2 ? Yh(Object(o), !0).forEach(function(e) {
						var t, n;
						t = r, e = o[n = e], n in t ? Object.defineProperty(t, n, {
							value: e,
							enumerable: !0,
							configurable: !0,
							writable: !0
						}) : t[n] = e
					}) : Object.getOwnPropertyDescriptors ? Object.defineProperties(r, Object.getOwnPropertyDescriptors(o)) : Yh(Object(o)).forEach(function(e) {
						Object.defineProperty(r, e, Object.getOwnPropertyDescriptor(o, e))
					})
				}
				return r
			}

			function Qh(e, n) {
				switch (e) {
					case "ContactMethodEmail":
						return {
							primaryButton: {
								text: "Action.AddEmail",
								onClick: null === T.UpsellService || void 0 === T.UpsellService ? void 0 : T.UpsellService.renderEmailUpsell,
								buttonClickBtnLog: "email"
							}
						};
					case "ContactMethodPhoneNumber":
						return {
							primaryButton: {
								text: "Action.AddPhone",
								onClick: null === T.UpsellService || void 0 === T.UpsellService ? void 0 : T.UpsellService.renderPhoneUpsell,
								buttonClickBtnLog: "phone"
							}
						};
					case "ContactMethodPhoneNumberVoiceOptIn":
						return {
							primaryButton: {
								text: "Action.AddPhone",
								onClick: function(e) {
									return null === T.UpsellService || void 0 === T.UpsellService ? void 0 : T.UpsellService.renderPhoneUpsell(Zh({
										addPhoneAlwaysShowLegalText: !0,
										addPhoneRequireLegalTextCheckbox: n,
										addPhoneHeadingKey: "Action.AddPhoneVoice",
										addPhoneDescriptionKey: "Description.AddPhoneBodyVoice",
										addPhoneButtonKey: "Action.EnableVoice",
										addPhoneLegalTextKey: n ? "Description.VoiceLegalConsent" : "Description.VoiceLegalDisclaimer",
										beforeSuccess: (l = regeneratorRuntime.mark(function e() {
											var t, n;
											return regeneratorRuntime.wrap(function(e) {
												for (;;) switch (e.prev = e.next) {
													case 0:
														return e.prev = 0, e.next = 3, Xh(!0, !1);
													case 3:
														if (e.t1 = t = e.sent, e.t0 = null === e.t1, e.t0) {
															e.next = 7;
															break
														}
														e.t0 = void 0 === t;
													case 7:
														if (!e.t0) {
															e.next = 11;
															break
														}
														e.t2 = void 0, e.next = 12;
														break;
													case 11:
														e.t2 = t.isUserOptIn;
													case 12:
														return n = e.t2, e.abrupt("return", n ? ["Heading.VoiceChatEnabled", "Description.CanNowJoinVoice"] : ["Heading.PhoneIsVerified", "Description.TurnOnVoiceChat"]);
													case 16:
														return e.prev = 16, e.t3 = e.catch(0), e.abrupt("return", ["Heading.PhoneIsVerified", "Description.TurnOnVoiceChat"]);
													case 19:
													case "end":
														return e.stop()
												}
											}, e, null, [
												[0, 16]
											])
										}), t = function() {
											var e = this,
												a = arguments;
											return new Promise(function(t, n) {
												var r = l.apply(e, a);

												function o(e) {
													$h(r, t, n, o, i, "next", e)
												}

												function i(e) {
													$h(r, t, n, o, i, "throw", e)
												}
												o(void 0)
											})
										}, function() {
											return t.apply(this, arguments)
										})
									}, e));
									var l, t
								},
								buttonClickBtnLog: "phone"
							}
						};
					case "ContactMethodPhoneNumberEmailHorizontalLayout":
					case "ContactMethodPhoneNumberEmailHorizontalLayoutAltContent1":
						return {
							primaryButton: {
								text: "Action.AddPhoneShort",
								onClick: null === T.UpsellService || void 0 === T.UpsellService ? void 0 : T.UpsellService.renderPhoneUpsell,
								buttonClickBtnLog: "phone"
							}, secondaryButton: {
								text: "Action.AddEmail",
								onClick: null === T.UpsellService || void 0 === T.UpsellService ? void 0 : T.UpsellService.renderEmailUpsell,
								buttonClickBtnLog: "email"
							}, buttonStackOrientation: ag
						};
					case "ContactMethodPhoneNumberEmailVerticalLayout":
						return {
							primaryButton: {
								text: "Action.AddPhone",
								onClick: null === T.UpsellService || void 0 === T.UpsellService ? void 0 : T.UpsellService.renderPhoneUpsell,
								buttonClickBtnLog: "phone"
							}, secondaryButton: {
								text: "Action.AddEmailAddress",
								onClick: null === T.UpsellService || void 0 === T.UpsellService ? void 0 : T.UpsellService.renderEmailUpsell,
								buttonClickBtnLog: "email"
							}, buttonStackOrientation: ig
						};
					case "FacebookSunset":
						return {
							primaryButton: {
								text: "Action.SetPassword",
								onClick: null === T.FacebookSunsetService || void 0 === T.FacebookSunsetService ? void 0 : T.FacebookSunsetService.openFacebookSunsetModal,
								buttonClickBtnLog: "setPassword"
							}
						};
					default:
						return null
				}
			}
			var eg = {
					ContactMethodEmail: "ContactMethodEmail",
					ContactMethodPhoneNumber: "ContactMethodPhoneNumber",
					ContactMethodPhoneNumberVoiceOptIn: "ContactMethodPhoneNumberVoiceOptIn",
					ContactMethodPhoneNumberEmailHorizontalLayout: "ContactMethodPhoneNumberEmailHorizontalLayout",
					ContactMethodPhoneNumberEmailHorizontalLayoutAltContent1: "ContactMethodPhoneNumberEmailHorizontalLayoutAltContent1",
					ContactMethodPhoneNumberEmailVerticalLayout: "ContactMethodPhoneNumberEmailVerticalLayout",
					FacebookSunset: "FacebookSunset",
					ContactMethodMandatoryEmailPhone: "ContactMethodMandatoryEmailPhone"
				},
				tg = {
					ContactMethodEmail: "Label.DontGetLockedOut",
					ContactMethodPhoneNumber: "Label.DontGetLockedOut",
					ContactMethodPhoneNumberVoiceOptIn: "Header.UnlockVoiceChat",
					ContactMethodPhoneNumberEmailHorizontalLayout: "Label.DontGetLockedOut",
					ContactMethodPhoneNumberEmailHorizontalLayoutAltContent1: "Heading.FinishAccountSetup",
					ContactMethodPhoneNumberEmailVerticalLayout: "Label.DontGetLockedOut",
					FacebookSunset: ""
				},
				ng = {
					ContactMethodEmail: "Description.HomePageUpsellCardAddEmailText",
					ContactMethodPhoneNumber: "Description.HomePageUpsellCardAddPhoneText",
					ContactMethodPhoneNumberVoiceOptIn: "Description.UnlockVoiceChat.3",
					ContactMethodPhoneNumberEmailHorizontalLayout: "Label.RecoverYourAccount",
					ContactMethodPhoneNumberEmailHorizontalLayoutAltContent1: "Description.ContactMethodAccessLoss",
					ContactMethodPhoneNumberEmailVerticalLayout: "Label.RecoverYourAccount",
					FacebookSunset: "Description.FacebookSetPasswordUpsellText"
				},
				rg = {
					ContactMethodEmail: "homePageUpsellCard",
					ContactMethodPhoneNumber: "homePageUpsellCard",
					ContactMethodPhoneNumberVoiceOptIn: "homePageUpsellCard",
					ContactMethodPhoneNumberEmailHorizontalLayout: "homePageUpsellCard",
					ContactMethodPhoneNumberEmailHorizontalLayoutAltContent1: "homePageUpsellCard",
					ContactMethodPhoneNumberEmailVerticalLayout: "homePageUpsellCard",
					FacebookSunset: "facebookSunsetCard"
				},
				og = {
					ContactMethodEmail: "email",
					ContactMethodPhoneNumber: "phone",
					ContactMethodPhoneNumberVoiceOptIn: "phone",
					ContactMethodPhoneNumberEmailHorizontalLayout: "emailOrPhone",
					ContactMethodPhoneNumberEmailHorizontalLayoutAltContent1: "emailOrPhone",
					ContactMethodPhoneNumberEmailVerticalLayout: "emailOrPhone",
					FacebookSunset: "facebook"
				},
				ig = "vertical",
				ag = "horizontal",
				lg = {
					ContactMethodEmail: "upsell-card-lock-icon-image",
					ContactMethodPhoneNumber: "upsell-card-lock-icon-image",
					ContactMethodPhoneNumberVoiceOptIn: "icon-voice-mic-unmuted",
					ContactMethodPhoneNumberEmailHorizontalLayout: "upsell-card-lock-icon-image",
					ContactMethodPhoneNumberEmailHorizontalLayoutAltContent1: "upsell-card-lock-icon-image",
					ContactMethodPhoneNumberEmailVerticalLayout: "upsell-card-lock-icon-image",
					FacebookSunset: ""
				};

			function ug(t, e) {
				var n, r = Object.keys(t);
				return Object.getOwnPropertySymbols && (n = Object.getOwnPropertySymbols(t), e && (n = n.filter(function(e) {
					return Object.getOwnPropertyDescriptor(t, e).enumerable
				})), r.push.apply(r, n)), r
			}

			function cg(r) {
				for (var e = 1; e < arguments.length; e++) {
					var o = null != arguments[e] ? arguments[e] : {};
					e % 2 ? ug(Object(o), !0).forEach(function(e) {
						var t, n;
						t = r, e = o[n = e], n in t ? Object.defineProperty(t, n, {
							value: e,
							enumerable: !0,
							configurable: !0,
							writable: !0
						}) : t[n] = e
					}) : Object.getOwnPropertyDescriptors ? Object.defineProperties(r, Object.getOwnPropertyDescriptors(o)) : ug(Object(o)).forEach(function(e) {
						Object.defineProperty(r, e, Object.getOwnPropertyDescriptor(o, e))
					})
				}
				return r
			}

			function sg(e, t, n, r, o) {
				o = 4 < arguments.length && void 0 !== o ? o : void 0, P.eventStreamService.sendEventWithTarget(e.type, rg[n], cg(cg({}, e.params), {}, {
					origin: t,
					section: r,
					btn: o
				}))
			}
			var lt = P.eventStreamService.eventTypes,
				dg = "mandatory",
				fg = "homepage",
				pg = {
					cardShown: {
						name: "cardShown",
						type: lt.modalAction,
						params: {
							aType: "shown"
						}
					},
					buttonClick: {
						name: "buttonClick",
						type: "buttonClick",
						params: {}
					}
				};

			function mg(e, t) {
				return function(e) {
					if (Array.isArray(e)) return e
				}(e) || function(e, t) {
					if ("undefined" == typeof Symbol || !(Symbol.iterator in Object(e))) return;
					var n = [],
						r = !0,
						o = !1,
						i = void 0;
					try {
						for (var a, l = e[Symbol.iterator](); !(r = (a = l.next()).done) && (n.push(a.value), !t || n.length !== t); r = !0);
					} catch (e) {
						o = !0, i = e
					} finally {
						try {
							r || null == l.return || l.return()
						} finally {
							if (o) throw i
						}
					}
					return n
				}(e, t) || function(e, t) {
					if (!e) return;
					if ("string" == typeof e) return vg(e, t);
					var n = Object.prototype.toString.call(e).slice(8, -1);
					"Object" === n && e.constructor && (n = e.constructor.name);
					if ("Map" === n || "Set" === n) return Array.from(e);
					if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return vg(e, t)
				}(e, t) || function() {
					throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
				}()
			}

			function vg(e, t) {
				(null == t || t > e.length) && (t = e.length);
				for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
				return r
			}

			function hg(e) {
				var t = e.translate,
					n = e.cardType,
					r = e.origin,
					o = e.titleTextOverride,
					i = e.bodyTextOverride,
					a = e.requireExplicitVoiceConsent,
					l = mg((0, X.useState)(!1), 2),
					u = l[0],
					c = l[1],
					s = og[n];
				(0, X.useEffect)(function() {
					sg(pg.cardShown, r, n, s)
				}, []);
				var e = Qh(n, a),
					d = null == e ? void 0 : e.primaryButton,
					l = d ? $().createElement(ye.Button, {
						className: "btn-primary-md",
						id: "upsell-card-primary-button",
						onClick: function() {
							sg(pg.buttonClick, r, n, s, d.buttonClickBtnLog), d.onClick(function(e) {
								c(e)
							})
						}
					}, t(d.text)) : null,
					f = null == e ? void 0 : e.secondaryButton,
					a = f ? $().createElement(ye.Button, {
						className: "btn-secondary-md",
						id: "upsell-card-secondary-button",
						onClick: function() {
							sg(pg.buttonClick, r, n, s, f.buttonClickBtnLog), f.onClick(function(e) {
								c(e)
							})
						}
					}, t(f.text)) : null,
					e = null !== (e = null == e ? void 0 : e.buttonStackOrientation) && void 0 !== e ? e : ag,
					a = $().createElement("div", {
						className: e === ag ? "upsell-card-horizontal-button-list" : "upsell-card-vertical-button-list"
					}, l, a),
					o = gg(o) ? t(tg[n]) : o,
					i = gg(i) ? t(ng[n]) : i,
					o = $().createElement("div", {
						className: "upsell-card-text-content-group"
					}, tg[n] ? $().createElement("div", {
						className: "font-header-1"
					}, " ", o) : null, $().createElement("div", {
						className: "upsell-card-content"
					}, " ", i)),
					i = lg[n] ? $().createElement("div", {
						className: "home-page-upsell-card-image ".concat(lg[n])
					}) : null;
				return u ? null : $().createElement("div", {
					className: "home-page-upsell-card-banner-container"
				}, $().createElement("div", {
					className: "banner-contents"
				}, $().createElement("div", {
					className: "icon-and-text"
				}, i, $().createElement("div", {
					className: "banner-content-container"
				}, o)), $().createElement("div", {
					className: "add-email-btn-container"
				}, a), $().createElement("div", {
					id: "facebookSunsetModal-container"
				})))
			}

			function gg(e) {
				return !e || 0 === e.length
			}
			hg.defaultProps = {
				origin: "homepage",
				titleTextOverride: "",
				bodyTextOverride: "",
				requireExplicitVoiceConsent: !0
			}, hg.propTypes = {
				translate: ut().func.isRequired,
				cardType: ut().string.isRequired,
				titleTextOverride: ut().string,
				bodyTextOverride: ut().string,
				origin: ut().string,
				requireExplicitVoiceConsent: ut().bool
			};
			var yg = hg,
				bg = function(e) {
					return !![eg.ContactMethodEmail, eg.ContactMethodPhoneNumber, eg.ContactMethodPhoneNumberEmailHorizontalLayout, eg.ContactMethodPhoneNumberEmailHorizontalLayoutAltContent1, eg.ContactMethodPhoneNumberEmailVerticalLayout, eg.ContactMethodPhoneNumberVoiceOptIn, eg.FacebookSunset].includes(e)
				};

			function wg(e, t, n, r, o, i, a) {
				try {
					var l = e[i](a),
						u = l.value
				} catch (e) {
					return void n(e)
				}
				l.done ? t(u) : Promise.resolve(u).then(r, o)
			}

			function Sg(l) {
				return function() {
					var e = this,
						a = arguments;
					return new Promise(function(t, n) {
						var r = l.apply(e, a);

						function o(e) {
							wg(r, t, n, o, i, "next", e)
						}

						function i(e) {
							wg(r, t, n, o, i, "throw", e)
						}
						o(void 0)
					})
				}
			}

			function Cg(e, t) {
				return function(e) {
					if (Array.isArray(e)) return e
				}(e) || function(e, t) {
					if ("undefined" == typeof Symbol || !(Symbol.iterator in Object(e))) return;
					var n = [],
						r = !0,
						o = !1,
						i = void 0;
					try {
						for (var a, l = e[Symbol.iterator](); !(r = (a = l.next()).done) && (n.push(a.value), !t || n.length !== t); r = !0);
					} catch (e) {
						o = !0, i = e
					} finally {
						try {
							r || null == l.return || l.return()
						} finally {
							if (o) throw i
						}
					}
					return n
				}(e, t) || function(e, t) {
					if (!e) return;
					if ("string" == typeof e) return Ig(e, t);
					var n = Object.prototype.toString.call(e).slice(8, -1);
					"Object" === n && e.constructor && (n = e.constructor.name);
					if ("Map" === n || "Set" === n) return Array.from(e);
					if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return Ig(e, t)
				}(e, t) || function() {
					throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
				}()
			}

			function Ig(e, t) {
				(null == t || t > e.length) && (t = e.length);
				for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
				return r
			}

			function xg(e) {
				var t = e.translate,
					n = eg.ContactMethodMandatoryEmailPhone,
					r = Cg((0, X.useState)(null), 2),
					o = r[0],
					i = r[1],
					a = Cg((0, X.useState)(""), 2),
					l = a[0],
					u = a[1],
					e = Cg((0, X.useState)(""), 2),
					r = e[0],
					c = e[1],
					a = Cg((0, X.useState)(!1), 2),
					e = a[0],
					s = a[1],
					a = Cg((0, X.useState)(!1), 2);
				a[0], a[1];
				return (0, X.useEffect)(function() {
					var e = function() {
							var e = Sg(regeneratorRuntime.mark(function e() {
								var t;
								return regeneratorRuntime.wrap(function(e) {
									for (;;) switch (e.prev = e.next) {
										case 0:
											return e.prev = 0, e.next = 3, T.HomePageUpsellCardService.getHomePageUpsellCardVariation();
										case 3:
											t = e.sent, (null == t ? void 0 : t.upsellCardType) && (i(null == t ? void 0 : t.upsellCardType), u(null == t ? void 0 : t.localizedTitleTextOverride), c(null == t ? void 0 : t.localizedBodyTextOverride)), e.next = 12;
											break;
										case 8:
											e.prev = 8, e.t0 = e.catch(0), console.error("Error getting the upsell card variation ".concat(e.t0)), i(null);
										case 12:
										case "end":
											return e.stop()
									}
								}, e, null, [
									[0, 8]
								])
							}));
							return function() {
								return e.apply(this, arguments)
							}
						}(),
						t = function() {
							var e = Sg(regeneratorRuntime.mark(function e() {
								var t;
								return regeneratorRuntime.wrap(function(e) {
									for (;;) switch (e.prev = e.next) {
										case 0:
											return e.prev = 0, e.next = 3, T.HomePageUpsellCardService.getVoicePolicy();
										case 3:
											null != (null == (t = e.sent) ? void 0 : t.requireExplicitVoiceConsent) && s(null == t ? void 0 : t.requireExplicitVoiceConsent), e.next = 11;
											break;
										case 7:
											e.prev = 7, e.t0 = e.catch(0), console.error("Error reading policy for homepage upsellcard ".concat(e.t0)), s(!0);
										case 11:
										case "end":
											return e.stop()
									}
								}, e, null, [
									[0, 7]
								])
							}));
							return function() {
								return e.apply(this, arguments)
							}
						}();
					e(), t()
				}, []), (0, X.useEffect)(function() {
					o === n && null !== T.UpsellService && void 0 !== T.UpsellService && T.UpsellService.renderContactMethodPromptModal({
						origin: fg,
						section: dg
					})
				}, [o]), bg(o) ? $().createElement(yg, {
					translate: t,
					cardType: o,
					titleTextOverride: l,
					bodyTextOverride: r,
					requireExplicitVoiceConsent: e
				}) : null
			}
			xg.propTypes = {
				translate: ut().func.isRequired
			};
			var Eg = xg;

			function Pg(e) {
				var t = e.translate,
					e = e.context;
				return $().createElement(Eg, {
					translate: t,
					context: e
				})
			}

			function Tg(e) {
				var t, o = e.sort,
					n = e.itemsPerRow,
					r = e.toggleInterest,
					i = e.interestedUniverses,
					a = e.homePageSessionInfo,
					l = e.translate,
					u = (0, X.useRef)(null),
					c = (0, X.useRef)(null),
					s = $o().contentMetadata,
					d = (0, X.useMemo)(function() {
						return Eo(o.recommendationList, s)
					}, [o.recommendationList, s]),
					f = (0, X.useCallback)(function(t) {
						var e = null == d ? void 0 : d.findIndex(function(e) {
							return e.universeId === t
						});
						if (void 0 !== e && -1 !== e) {
							var n, r = d[e];
							return (n = {})[F.ButtonName] = y.Interested, n[F.PlaceId] = r.placeId, n[F.UniverseId] = t, n[F.Position] = e, n[F.GameSetTypeId] = o.topicId, n[F.NumberOfLoadedTiles] = null == d ? void 0 : d.length, n[F.Page] = Y.InterestCatcher, n[j.HomePageSessionInfo] = a, n[F.IsInterested] = !i.has(t), n
						}
					}, [i, d, a, o.topicId]),
					p = (0, X.useCallback)(function(e) {
						r(e);
						e = f(e), e = ee.interestCatcherClick(e);
						void 0 !== e && P.eventStreamService.sendEvent.apply(P.eventStreamService, e)
					}, [r, f]),
					e = (0, X.useCallback)(function(e) {
						if (d) {
							var t = e.filter(function(e) {
								return e < (null == d ? void 0 : d.length)
							});
							return Rg(Rg(Rg(((e = {})[F.RootPlaceIds] = t.map(function(e) {
								return d[e].placeId
							}), e[F.UniverseIds] = t.map(function(e) {
								return d[e].universeId
							}), e), z(d, o.topicId, t, null === (e = null == o ? void 0 : o.topicLayoutData) || void 0 === e ? void 0 : e.componentType)), q(d, o.topicId, t, null === (e = null == o ? void 0 : o.topicLayoutData) || void 0 === e ? void 0 : e.componentType)), ((e = {})[F.AbsPositions] = t, e[F.NumberOfLoadedTiles] = null == d ? void 0 : d.length, e[F.GameSetTypeId] = o.topicId, e[F.Page] = Y.InterestCatcher, e[j.HomePageSessionInfo] = a, e))
						}
					}, [d, a, o.topicId, null === (t = null == o ? void 0 : o.topicLayoutData) || void 0 === t ? void 0 : t.componentType]);
				return hn(u, null !== (t = null == d ? void 0 : d.length) && void 0 !== t ? t : 0, e), (0, X.useLayoutEffect)(function() {
					n && null != u && u.current && u.current.style.setProperty("--items-per-row", n.toString())
				}, [n]), $().createElement(gi, {
					ref: u,
					tileRef: c,
					gameData: d,
					emphasis: !1,
					translate: l,
					isHomeGameGrid: !0,
					isExpandHomeContentEnabled: !0,
					buildEventProperties: function() {
						return {}
					},
					componentType: null === (l = null == o ? void 0 : o.topicLayoutData) || void 0 === l ? void 0 : l.componentType,
					playerCountStyle: null === (l = null == o ? void 0 : o.topicLayoutData) || void 0 === l ? void 0 : l.playerCountStyle,
					playButtonStyle: null === (l = null == o ? void 0 : o.topicLayoutData) || void 0 === l ? void 0 : l.playButtonStyle,
					topicId: null === (l = null == o ? void 0 : o.topicId) || void 0 === l ? void 0 : l.toString(),
					shouldUseSentinelTile: !1,
					interestedUniverses: i,
					toggleInterest: p
				})
			}

			function Og(e) {
				var t = e.sort,
					n = e.itemsPerRow,
					r = e.fetchRecommendations,
					o = e.translate,
					i = (f = (0, X.useState)(new Set))[0],
					a = f[1],
					l = mn(),
					u = (0, X.useCallback)(function(e) {
						var t = {};
						return t[F.ButtonName] = e, t[j.HomePageSessionInfo] = l, t[F.InterestedUniverseIds] = Array.from(i), t[F.Page] = Y.InterestCatcher, t
					}, [l, i]),
					c = (0, X.useCallback)(function(e) {
						e = u(e), e = ee.interestCatcherClick(e);
						void 0 !== e && P.eventStreamService.sendEvent.apply(P.eventStreamService, e)
					}, [u]),
					s = (0, X.useCallback)(function() {
						r([]), c(y.Skip)
					}, [r, c]),
					d = (0, X.useCallback)(function() {
						r(Array.from(i)), c(y.Continue)
					}, [i, r, c]),
					e = (0, X.useMemo)(function() {
						return null != i && i.size ? o(it.ActionInterestCatcherContinueSelected, {
							numSelected: i.size
						}) : o(it.ActionInterestCatcherContinue)
					}, [i, o]),
					f = (0, X.useCallback)(function(e) {
						var t, n;
						null === e || void 0 === (null === (n = e.getBoundingClientRect()) || void 0 === n ? void 0 : n.top) || (n = document.getElementById("header")) && null !== (t = n.getBoundingClientRect()) && void 0 !== t && t.height && (n = n.getBoundingClientRect().height, window.scrollTo({
							top: e.getBoundingClientRect().top + window.scrollY - n
						}))
					}, []);
				return $().createElement("div", {
					ref: f,
					className: "interest-catcher-container",
					"data-testid": "interest-catcher-container"
				}, $().createElement("div", {
					className: "header-container"
				}, $().createElement("div", {
					className: "header-text-container"
				}, $().createElement("h1", {
					className: "header-text"
				}, t.topic), $().createElement("span", {
					className: "header-subtext"
				}, t.subtitle)), $().createElement("div", {
					className: "header-buttons-container"
				}, !(null != i && i.size) && $().createElement(ye.Button, {
					variant: ye.Button.variants.secondary,
					size: ye.Button.sizes.medium,
					title: o(it.ActionInterestCatcherSkip),
					onClick: s,
					className: "skip-button"
				}, o(it.ActionInterestCatcherSkip)), $().createElement(ye.Button, {
					variant: ye.Button.variants.primary,
					size: ye.Button.sizes.medium,
					title: e,
					onClick: d,
					isDisabled: !(null != i && i.size),
					className: "continue-button"
				}, e))), $().createElement(Tg, {
					sort: t,
					itemsPerRow: n,
					translate: o,
					toggleInterest: function(t) {
						a(function(e) {
							e = new Set(e);
							return e.has(t) ? e.delete(t) : e.add(t), e
						})
					},
					interestedUniverses: i,
					homePageSessionInfo: l
				}))
			}

			function kg(e) {
				var t = e.children,
					n = (0, X.useState)(null),
					e = n[0],
					r = n[1];
				return (0, X.useEffect)(function() {
					Hg().then(function(e) {
						null != (null == e ? void 0 : e.data) && r(e.data)
					}, function(e) {
						console.error(e)
					})
				}, []), $().createElement(Wg.Provider, {
					value: e
				}, t)
			}
			Pg.defaultProps = {
				context: eg.ContactMethod
			}, Pg.propTypes = {
				translate: ut().func.isRequired,
				context: ut().string
			};
			var Ag, Ng, _g = (0, p.withTranslations)(Pg, mm),
				Rg = function() {
					return (Rg = Object.assign || function(e) {
						for (var t, n = 1, r = arguments.length; n < r; n++)
							for (var o in t = arguments[n]) Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
						return e
					}).apply(this, arguments)
				},
				Lg = function() {
					return (Lg = Object.assign || function(e) {
						for (var t, n = 1, r = arguments.length; n < r; n++)
							for (var o in t = arguments[n]) Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
						return e
					}).apply(this, arguments)
				},
				Dg = Je.maxTilesPerCarouselPage,
				Mg = t,
				Fg = e,
				jg = (Ag = (0, p.withTranslations)(function(e) {
					var n = e.translate,
						t = mn(),
						r = (0, X.useState)(void 0),
						o = r[0],
						i = r[1],
						a = (0, X.useState)(!1),
						l = a[0],
						u = a[1],
						c = (0, X.useMemo)(function() {
							return qh()
						}, []),
						s = (0, X.useMemo)(function() {
							try {
								return (0, P.dataStores.authIntentDataStore.retrieveAuthIntentDataForUser)()
							} catch (e) {
								return void console.error("Error retrieving auth intent data:", e)
							}
						}, []),
						d = (0, X.useCallback)(function(e) {
							i(void 0), u(!1), pe(Ce.Home, t, c, s, e, [x.Carousel, x.HeroUnit]).then(function(e) {
								i(e), (0, E.fireEvent)(Je.omniRecommendationEndpointSuccessEvent), vl(e, t)
							}).catch(function() {
								u(!0), (0, E.fireEvent)(Je.omniRecommendationEndpointErrorEvent)
							})
						}, [t, c, s]);
					(0, X.useEffect)(function() {
						d()
					}, [d]);
					var f = (0, X.useState)(void 0),
						e = f[0],
						p = f[1];
					(0, X.useEffect)(function() {
						fe(Mg.homePageWeb, Fg.homePageWeb).then(function(e) {
							p(e)
						}).catch(function() {
							p(Fg.homePageWeb)
						})
					}, []);
					var m = null == e ? void 0 : e.IsExpandHomeContentEnabled,
						r = (0, X.useState)(void 0),
						a = r[0],
						v = r[1];
					(0, X.useEffect)(function() {
						fe(Mg.gridUi, Fg.gridUi).then(function(e) {
							v(e)
						}).catch(function() {
							v(Fg.gridUi)
						})
					}, []);
					var h = null == a ? void 0 : a.IsNewSortHeaderEnabled,
						g = null == a ? void 0 : a.IsCarouselHorizontalScrollEnabled,
						y = null == a ? void 0 : a.IsNewScrollArrowsEnabled,
						f = (0, X.useCallback)(function(n) {
							i(function(e) {
								var t;
								return e && Lg(Lg({}, e), {
									contentMetadata: ((t = {})[C.Game] = Lg(Lg({}, e.contentMetadata[C.Game]), n[C.Game]), t[C.CatalogAsset] = Lg(Lg({}, e.contentMetadata[C.CatalogAsset]), n[C.CatalogAsset]), t[C.CatalogBundle] = Lg(Lg({}, e.contentMetadata[C.CatalogBundle]), n[C.CatalogBundle]), t)
								})
							})
						}, []),
						e = Vh(o, m, g),
						r = e.homeFeedRef,
						b = e.gridRecommendationsMap,
						w = e.itemsPerRowMap,
						S = e.startingRowNumbersMap;
					Wh(Y.HomePage);
					a = (0, X.useMemo)(function() {
						return !(null == o || !o.sorts) && o.sorts.every(function(e) {
							return e.treatmentType !== I.FriendCarousel
						})
					}, [null == o ? void 0 : o.sorts]), e = (0, X.useMemo)(function() {
						return null == o ? void 0 : o.sorts.findIndex(function(e) {
							return e.treatmentType === I.InterestGrid
						})
					}, [null == o ? void 0 : o.sorts]);
					if (l) return $().createElement("div", {
						className: "game-home-page-container",
						"data-testid": "HomePageContainerTestId"
					}, $().createElement("h2", null, n(rt.LabelGames)), $().createElement(Ee, {
						errorMessage: n(rt.LabelApiError),
						onRefresh: function() {
							return d()
						}
					}));
					if (void 0 === o) return $().createElement("div", {
						className: "game-home-page-container",
						"data-testid": "HomePageContainerTestId"
					}, $().createElement("div", {
						className: "game-home-page-loading-title shimmer"
					}), $().createElement("div", {
						className: "game-home-page-loading-carousel"
					}, Array.from({
						length: Dg
					}, function(e, t) {
						return $().createElement(Hh, {
							key: t
						})
					})));
					if (void 0 !== e && -1 < e) {
						l = o.sorts[e];
						if (l && Po(l)) return $().createElement("div", {
							className: "game-home-page-container",
							"data-testid": "HomePageContainerTestId"
						}, $().createElement("div", {
							ref: r
						}, $().createElement(Yo.Provider, {
							value: {
								contentMetadata: o.contentMetadata,
								appendContentMetadata: f
							}
						}, $().createElement(Og, {
							sort: l,
							itemsPerRow: w.get(e),
							fetchRecommendations: d,
							translate: n
						}))))
					}
					return $().createElement("div", {
						className: "game-home-page-container",
						"data-testid": "HomePageContainerTestId"
					}, $().createElement("div", {
						ref: r
					}, $().createElement(Yo.Provider, {
						value: {
							contentMetadata: o.contentMetadata,
							appendContentMetadata: f
						}
					}, $().createElement(_g, {
						translate: n,
						context: void 0
					}), a && $().createElement(qa, {
						homePageSessionInfo: t,
						sortId: void 0,
						sortPosition: 0
					}), o.sorts.map(function(e, t) {
						return $().createElement($().Fragment, {
							key: t
						}, $().createElement(zh, {
							translate: n,
							sort: e,
							positionId: t,
							startingRow: S.get(t),
							currentPage: Y.HomePage,
							itemsPerRow: w.get(t),
							gridRecommendations: null !== (t = b.get(t)) && void 0 !== t ? t : [],
							isExpandHomeContentEnabled: m,
							isCarouselHorizontalScrollEnabled: g,
							isNewScrollArrowsEnabled: y,
							isNewSortHeaderEnabled: h,
							sduiRoot: o.sdui
						}))
					}))))
				}, It), function(e) {
					return $().createElement(pn, null, $().createElement(Ag, gn({}, e)))
				}),
				Ug = function(e, a, l, u) {
					return new(l = l || Promise)(function(n, t) {
						function r(e) {
							try {
								i(u.next(e))
							} catch (e) {
								t(e)
							}
						}

						function o(e) {
							try {
								i(u.throw(e))
							} catch (e) {
								t(e)
							}
						}

						function i(e) {
							var t;
							e.done ? n(e.value) : ((t = e.value) instanceof l ? t : new l(function(e) {
								e(t)
							})).then(r, o)
						}
						i((u = u.apply(e, a || [])).next())
					})
				},
				Bg = function(n, r) {
					var o, i, a, l = {
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
								if (o) throw new TypeError("Generator is already executing.");
								for (; l;) try {
									if (o = 1, i && (a = 2 & t[0] ? i.return : t[0] ? i.throw || ((a = i.return) && a.call(i), 0) : i.next) && !(a = a.call(i, t[1])).done) return a;
									switch (i = 0, a && (t = [2 & t[0], a.value]), t[0]) {
										case 0:
										case 1:
											a = t;
											break;
										case 4:
											return l.label++, {
												value: t[1],
												done: !1
											};
										case 5:
											l.label++, i = t[1], t = [0];
											continue;
										case 7:
											t = l.ops.pop(), l.trys.pop();
											continue;
										default:
											if (!(a = 0 < (a = l.trys).length && a[a.length - 1]) && (6 === t[0] || 2 === t[0])) {
												l = 0;
												continue
											}
											if (3 === t[0] && (!a || t[1] > a[0] && t[1] < a[3])) {
												l.label = t[1];
												break
											}
											if (6 === t[0] && l.label < a[1]) {
												l.label = a[1], a = t;
												break
											}
											if (a && l.label < a[2]) {
												l.label = a[2], l.ops.push(t);
												break
											}
											a[2] && l.ops.pop(), l.trys.pop();
											continue
									}
									t = r.call(n, l)
								} catch (e) {
									t = [6, e], i = 0
								} finally {
									o = a = 0
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
				Gg = T.EnvironmentUrls.userModerationApi + "/v1/reminder",
				Hg = function() {
					return Ug(void 0, void 0, Promise, function() {
						var t;
						return Bg(this, function(e) {
							return t = {
								url: Gg,
								withCredentials: !0
							}, [2, N.httpService.get(t)]
						})
					})
				},
				Wg = (0, X.createContext)(null),
				zg = {
					common: [],
					feature: "Feature.Home"
				},
				Vg = function(e, t) {
					var n = e.contentVariant,
						e = e.policyViolation,
						r = "";
					switch (n) {
						case "positive":
							r = t("Experiment.Reminders.BodyPositiveVariant");
							break;
						case "warning":
							r = t("Experiment.Reminders.BodyWarningVariant")
					}
					return {
						dialogTitle: t("Experiment.Reminders.Title"),
						dialogBodyAbuseType: t("Experiment.Reminders.BodyShared", {
							policy_violation: t(e)
						}),
						dialogBodyGuidelineReminder: r,
						confirmationButtonLabel: t("Experiment.Reminders.Button")
					}
				};

			function qg() {
				var e = (u = (0, X.useState)(!1))[0],
					t = u[1],
					n = (0, X.useContext)(Wg),
					r = (0, X.useRef)(0),
					o = T.CurrentUser.userId;
				(0, X.useEffect)(function() {
					r.current = Date.now()
				}, []);
				var i = (0, p.useTranslation)().translate;
				if (null == n || null == n || !n.shouldSurfaceReminder || null == n || !n.policyViolation) return null;
				var a = n.interventionId,
					l = !e && (null == n ? void 0 : n.shouldSurfaceReminder),
					u = (c = Vg(n, i)).dialogTitle,
					e = c.dialogBodyAbuseType,
					i = c.dialogBodyGuidelineReminder,
					c = c.confirmationButtonLabel;
				return $().createElement(ye.Modal, {
					className: "reminder-of-norms-dialog-modal",
					show: l,
					onHide: function() {
						var e = Date.now();
						Jg(a, Ng.DISMISSED, n.reminderNumber, o, e, (e - r.current) / 1e3, n.experimentVariant), t(!0)
					}
				}, $().createElement(ye.Modal.Header, {
					className: "reminder-of-norms-dialog-title",
					title: u,
					showCloseButton: !1
				}), $().createElement(ye.Modal.Body, {
					className: "reminder-of-norms-dialog-body"
				}, $().createElement("p", {
					className: "dialog-body-abuse-type"
				}, e), $().createElement("p", {
					className: "dialog-body-guideline-reminder"
				}, i)), $().createElement(ye.Modal.Footer, null, $().createElement(ye.Button, {
					className: "reminder-of-norms-confirm-button",
					onClick: function() {
						var e = Date.now();
						Jg(a, Ng.CTA_CLICKED, n.reminderNumber, o, e, (e - r.current) / 1e3, n.experimentVariant), t(!0)
					}
				}, c)))
			}(It = Ng = Ng || {}).CTA_CLICKED = "REMINDER_INTERACTION_CTA_CLICKED", It.DISMISSED = "REMINDER_INTERACTION_REMINDER_DISMISSED";
			var Jg = function(e, t, n, r, o, i, a) {
				T.EventStream.SendEventWithTarget("HomePageRemindersEvent", "WebApp", {
					user_id: r,
					source_intervention_id: e,
					reminder_number: n,
					timestamp_milliseconds: o,
					time_to_interact_seconds: i,
					interaction: t,
					platform: "PLATFORM_WEB",
					experiment_variant: a
				}, T.EventStream.TargetTypes.WWW)
			};

			function Kg() {
				return $().createElement(p.TranslationProvider, {
					config: zg
				}, $().createElement(kg, null, $().createElement(qg, null)))
			}
			var Xg = (0, p.withTranslations)(function(e) {
				e = e.translate;
				return $().createElement("div", {
					id: "HomeContainer",
					className: "row home-container expand-max-width"
				}, $().createElement("div", {
					className: "section"
				}, $().createElement("div", {
					className: "col-xs-12 container-header"
				}, $().createElement("h1", null, e(ot.LabelsHome)))), $().createElement("div", null, $().createElement(Kg, null)), $().createElement("div", {
					className: "place-list-container"
				}, $().createElement(jg, null)))
			}, {
				common: [],
				feature: "CommonUI.Features"
			});
			(0, N.ready)(function() {
				s() ? (0, _.render)($().createElement(jg, null), s()) : document.getElementById("places-list-web-app") && document.getElementById("content") ? (0, _.render)($().createElement(Xg, null), document.getElementById("content")) : (0, E.fireEvent)("HomePageMissingContainerDiv")
			})
		}()
}();
//# sourceMappingURL=https://sourcemaps.rbxcdn.com/3f0637d8b9eb2a259ac1b73c36e01a22-placesList.bundle.min.js.map

/* Bundle detector */
window.Roblox && window.Roblox.BundleDetector && window.Roblox.BundleDetector.bundleDetected("PlacesList");