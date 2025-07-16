! function() {
	var e = {
			683: function(e, t, n) {
				var i = {
					"./3dThumbnailComponent.js": "375"
				};

				function r(e) {
					return n(a(e))
				}

				function a(e) {
					if (!n.o(i, e)) {
						var t = Error("Cannot find module '" + e + "'");
						throw t.code = "MODULE_NOT_FOUND", t
					}
					return i[e]
				}
				r.keys = function() {
					return Object.keys(i)
				}, r.resolve = a, e.exports = r, r.id = 683
			},
			497: function(e, t, n) {
				var i = {
					"./3dThumbnailController.js": "740"
				};

				function r(e) {
					return n(a(e))
				}

				function a(e) {
					if (!n.o(i, e)) {
						var t = Error("Cannot find module '" + e + "'");
						throw t.code = "MODULE_NOT_FOUND", t
					}
					return i[e]
				}
				r.keys = function() {
					return Object.keys(i)
				}, r.resolve = a, e.exports = r, r.id = 497
			},
			910: function(e, t, n) {
				var i = {
					"./canvasContainerDirective.js": "425"
				};

				function r(e) {
					return n(a(e))
				}

				function a(e) {
					if (!n.o(i, e)) {
						var t = Error("Cannot find module '" + e + "'");
						throw t.code = "MODULE_NOT_FOUND", t
					}
					return i[e]
				}
				r.keys = function() {
					return Object.keys(i)
				}, r.resolve = a, e.exports = r, r.id = 910
			},
			737: function(e, t, n) {
				var i = {
					"./thumbnail3dService.js": "157"
				};

				function r(e) {
					return n(a(e))
				}

				function a(e) {
					if (!n.o(i, e)) {
						var t = Error("Cannot find module '" + e + "'");
						throw t.code = "MODULE_NOT_FOUND", t
					}
					return i[e]
				}
				r.keys = function() {
					return Object.keys(i)
				}, r.resolve = a, e.exports = r, r.id = 737
			},
			972: function(e, t, n) {
				var i = {
					"./components/templates/3dThumbnail.html": "901"
				};

				function r(e) {
					return n(a(e))
				}

				function a(e) {
					if (!n.o(i, e)) {
						var t = Error("Cannot find module '" + e + "'");
						throw t.code = "MODULE_NOT_FOUND", t
					}
					return i[e]
				}
				r.keys = function() {
					return Object.keys(i)
				}, r.resolve = a, e.exports = r, r.id = 972
			},
			901: function(e) {
				e.exports = '<span id="thumbnail-3d-container" canvas-container> <div ng-if="isLoading" class="thumbnail-loader"> <span class="spinner spinner-default"></span> </div> </span> '
			},
			938: function(e, t, n) {
				"use strict";
				n.d(t, {
					O7: function() {
						return sr
					},
					UC: function() {
						return o2
					},
					w7: function() {
						return o6
					}
				});
				var i, r, a, o = n(196),
					s = n.n(o),
					l = n(58);

				function u(e, t) {
					(null == t || t > e.length) && (t = e.length);
					for (var n = 0, i = Array(t); n < t; n++) i[n] = e[n];
					return i
				}

				function c(e, t, n, i, r, a, o) {
					try {
						var s = e[a](o),
							l = s.value
					} catch (e) {
						n(e);
						return
					}
					s.done ? t(l) : Promise.resolve(l).then(i, r)
				}

				function h(e, t, n) {
					return t = g(t), x(e, w() ? Reflect.construct(t, n || [], g(e).constructor) : t.apply(e, n))
				}

				function d(e, t) {
					if (!(e instanceof t)) throw TypeError("Cannot call a class as a function")
				}

				function f(e, t) {
					for (var n = 0; n < t.length; n++) {
						var i = t[n];
						i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i)
					}
				}

				function p(e, t, n) {
					return t && f(e.prototype, t), n && f(e, n), e
				}

				function m(e, t, n) {
					return t in e ? Object.defineProperty(e, t, {
						value: n,
						enumerable: !0,
						configurable: !0,
						writable: !0
					}) : e[t] = n, e
				}

				function v(e, t, n) {
					return (v = "undefined" != typeof Reflect && Reflect.get ? Reflect.get : function(e, t, n) {
						var i = function(e, t) {
							for (; !Object.prototype.hasOwnProperty.call(e, t) && null !== (e = g(e)););
							return e
						}(e, t);
						if (i) {
							var r = Object.getOwnPropertyDescriptor(i, t);
							return r.get ? r.get.call(n || e) : r.value
						}
					})(e, t, n || e)
				}

				function g(e) {
					return (g = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
						return e.__proto__ || Object.getPrototypeOf(e)
					})(e)
				}

				function y(e, t) {
					if ("function" != typeof t && null !== t) throw TypeError("Super expression must either be null or a function");
					e.prototype = Object.create(t && t.prototype, {
						constructor: {
							value: e,
							writable: !0,
							configurable: !0
						}
					}), t && _(e, t)
				}

				function x(e, t) {
					return t && ("object" === b(t) || "function" == typeof t) ? t : function(e) {
						if (void 0 === e) throw ReferenceError("this hasn't been initialised - super() hasn't been called");
						return e
					}(e)
				}

				function _(e, t) {
					return (_ = Object.setPrototypeOf || function(e, t) {
						return e.__proto__ = t, e
					})(e, t)
				}

				function b(e) {
					return e && "undefined" != typeof Symbol && e.constructor === Symbol ? "symbol" : typeof e
				}

				function w() {
					try {
						var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {}))
					} catch (e) {}
					return (w = function() {
						return !!e
					})()
				}

				function M(e, t) {
					var n, i, r, a, o = {
						label: 0,
						sent: function() {
							if (1 & r[0]) throw r[1];
							return r[1]
						},
						trys: [],
						ops: []
					};
					return a = {
						next: s(0),
						throw: s(1),
						return: s(2)
					}, "function" == typeof Symbol && (a[Symbol.iterator] = function() {
						return this
					}), a;

					function s(a) {
						return function(s) {
							return function(a) {
								if (n) throw TypeError("Generator is already executing.");
								for (; o;) try {
									if (n = 1, i && (r = 2 & a[0] ? i.return : a[0] ? i.throw || ((r = i.return) && r.call(i), 0) : i.next) && !(r = r.call(i, a[1])).done) return r;
									switch (i = 0, r && (a = [2 & a[0], r.value]), a[0]) {
										case 0:
										case 1:
											r = a;
											break;
										case 4:
											return o.label++, {
												value: a[1],
												done: !1
											};
										case 5:
											o.label++, i = a[1], a = [0];
											continue;
										case 7:
											a = o.ops.pop(), o.trys.pop();
											continue;
										default:
											if (!(r = (r = o.trys).length > 0 && r[r.length - 1]) && (6 === a[0] || 2 === a[0])) {
												o = 0;
												continue
											}
											if (3 === a[0] && (!r || a[1] > r[0] && a[1] < r[3])) {
												o.label = a[1];
												break
											}
											if (6 === a[0] && o.label < r[1]) {
												o.label = r[1], r = a;
												break
											}
											if (r && o.label < r[2]) {
												o.label = r[2], o.ops.push(a);
												break
											}
											r[2] && o.ops.pop(), o.trys.pop();
											continue
									}
									a = t.call(e, o)
								} catch (e) {
									a = [6, e], i = 0
								} finally {
									n = r = 0
								}
								if (5 & a[0]) throw a[1];
								return {
									value: a[0] ? a[1] : void 0,
									done: !0
								}
							}([a, s])
						}
					}
				}

				function S(e, t, n, i) {
					return new(n || (n = Promise))(function(r, a) {
						function o(e) {
							try {
								l(i.next(e))
							} catch (e) {
								a(e)
							}
						}

						function s(e) {
							try {
								l(i.throw(e))
							} catch (e) {
								a(e)
							}
						}

						function l(e) {
							var t;
							e.done ? r(e.value) : ((t = e.value) instanceof n ? t : new n(function(e) {
								e(t)
							})).then(o, s)
						}
						l((i = i.apply(e, t || [])).next())
					})
				}

				function T(e, t) {
					var n, i, r, a = {
							label: 0,
							sent: function() {
								if (1 & r[0]) throw r[1];
								return r[1]
							},
							trys: [],
							ops: []
						},
						o = Object.create(("function" == typeof Iterator ? Iterator : Object).prototype);
					return o.next = s(0), o.throw = s(1), o.return = s(2), "function" == typeof Symbol && (o[Symbol.iterator] = function() {
						return this
					}), o;

					function s(s) {
						return function(l) {
							return function(s) {
								if (n) throw TypeError("Generator is already executing.");
								for (; o && (o = 0, s[0] && (a = 0)), a;) try {
									if (n = 1, i && (r = 2 & s[0] ? i.return : s[0] ? i.throw || ((r = i.return) && r.call(i), 0) : i.next) && !(r = r.call(i, s[1])).done) return r;
									switch (i = 0, r && (s = [2 & s[0], r.value]), s[0]) {
										case 0:
										case 1:
											r = s;
											break;
										case 4:
											return a.label++, {
												value: s[1],
												done: !1
											};
										case 5:
											a.label++, i = s[1], s = [0];
											continue;
										case 7:
											s = a.ops.pop(), a.trys.pop();
											continue;
										default:
											if (!(r = (r = a.trys).length > 0 && r[r.length - 1]) && (6 === s[0] || 2 === s[0])) {
												a = 0;
												continue
											}
											if (3 === s[0] && (!r || s[1] > r[0] && s[1] < r[3])) {
												a.label = s[1];
												break
											}
											if (6 === s[0] && a.label < r[1]) {
												a.label = r[1], r = s;
												break
											}
											if (r && a.label < r[2]) {
												a.label = r[2], a.ops.push(s);
												break
											}
											r[2] && a.ops.pop(), a.trys.pop();
											continue
									}
									s = t.call(e, a)
								} catch (e) {
									s = [6, e], i = 0
								} finally {
									n = r = 0
								}
								if (5 & s[0]) throw s[1];
								return {
									value: s[0] ? s[1] : void 0,
									done: !0
								}
							}([s, l])
						}
					}
				}
				"function" == typeof SuppressedError && SuppressedError;
				for (var E, A = {
						Linear: {
							None: function(e) {
								return e
							}
						},
						Quadratic: {
							In: function(e) {
								return e * e
							},
							Out: function(e) {
								return e * (2 - e)
							},
							InOut: function(e) {
								return (e *= 2) < 1 ? .5 * e * e : -.5 * (--e * (e - 2) - 1)
							}
						},
						Cubic: {
							In: function(e) {
								return e * e * e
							},
							Out: function(e) {
								return --e * e * e + 1
							},
							InOut: function(e) {
								return (e *= 2) < 1 ? .5 * e * e * e : .5 * ((e -= 2) * e * e + 2)
							}
						},
						Quartic: {
							In: function(e) {
								return e * e * e * e
							},
							Out: function(e) {
								return 1 - --e * e * e * e
							},
							InOut: function(e) {
								return (e *= 2) < 1 ? .5 * e * e * e * e : -.5 * ((e -= 2) * e * e * e - 2)
							}
						},
						Quintic: {
							In: function(e) {
								return e * e * e * e * e
							},
							Out: function(e) {
								return --e * e * e * e * e + 1
							},
							InOut: function(e) {
								return (e *= 2) < 1 ? .5 * e * e * e * e * e : .5 * ((e -= 2) * e * e * e * e + 2)
							}
						},
						Sinusoidal: {
							In: function(e) {
								return 1 - Math.cos(e * Math.PI / 2)
							},
							Out: function(e) {
								return Math.sin(e * Math.PI / 2)
							},
							InOut: function(e) {
								return .5 * (1 - Math.cos(Math.PI * e))
							}
						},
						Exponential: {
							In: function(e) {
								return 0 === e ? 0 : Math.pow(1024, e - 1)
							},
							Out: function(e) {
								return 1 === e ? 1 : 1 - Math.pow(2, -10 * e)
							},
							InOut: function(e) {
								return 0 === e ? 0 : 1 === e ? 1 : (e *= 2) < 1 ? .5 * Math.pow(1024, e - 1) : .5 * (2 - Math.pow(2, -10 * (e - 1)))
							}
						},
						Circular: {
							In: function(e) {
								return 1 - Math.sqrt(1 - e * e)
							},
							Out: function(e) {
								return Math.sqrt(1 - --e * e)
							},
							InOut: function(e) {
								return (e *= 2) < 1 ? -.5 * (Math.sqrt(1 - e * e) - 1) : .5 * (Math.sqrt(1 - (e -= 2) * e) + 1)
							}
						},
						Elastic: {
							In: function(e) {
								return 0 === e ? 0 : 1 === e ? 1 : -Math.pow(2, 10 * (e - 1)) * Math.sin(5 * (e - 1.1) * Math.PI)
							},
							Out: function(e) {
								return 0 === e ? 0 : 1 === e ? 1 : Math.pow(2, -10 * e) * Math.sin(5 * (e - .1) * Math.PI) + 1
							},
							InOut: function(e) {
								return 0 === e ? 0 : 1 === e ? 1 : (e *= 2) < 1 ? -.5 * Math.pow(2, 10 * (e - 1)) * Math.sin(5 * (e - 1.1) * Math.PI) : .5 * Math.pow(2, -10 * (e - 1)) * Math.sin(5 * (e - 1.1) * Math.PI) + 1
							}
						},
						Back: {
							In: function(e) {
								return e * e * (2.70158 * e - 1.70158)
							},
							Out: function(e) {
								return --e * e * (2.70158 * e + 1.70158) + 1
							},
							InOut: function(e) {
								return (e *= 2) < 1 ? e * e * (3.5949095 * e - 2.5949095) * .5 : .5 * ((e -= 2) * e * (3.5949095 * e + 2.5949095) + 2)
							}
						},
						Bounce: {
							In: function(e) {
								return 1 - A.Bounce.Out(1 - e)
							},
							Out: function(e) {
								return e < 1 / 2.75 ? 7.5625 * e * e : e < 2 / 2.75 ? 7.5625 * (e -= 1.5 / 2.75) * e + .75 : e < 2.5 / 2.75 ? 7.5625 * (e -= 2.25 / 2.75) * e + .9375 : 7.5625 * (e -= 2.625 / 2.75) * e + .984375
							},
							InOut: function(e) {
								return e < .5 ? .5 * A.Bounce.In(2 * e) : .5 * A.Bounce.Out(2 * e - 1) + .5
							}
						}
					}, k = "undefined" == typeof self && void 0 !== l && l.hrtime ? function() {
						var e = l.hrtime();
						return 1e3 * e[0] + e[1] / 1e6
					} : "undefined" != typeof self && void 0 !== self.performance && void 0 !== self.performance.now ? self.performance.now.bind(self.performance) : void 0 !== Date.now ? Date.now : function() {
						return (new Date).getTime()
					}, R = function() {
						function e() {
							this._tweens = {}, this._tweensAddedDuringUpdate = {}
						}
						return e.prototype.getAll = function() {
							var e = this;
							return Object.keys(this._tweens).map(function(t) {
								return e._tweens[t]
							})
						}, e.prototype.removeAll = function() {
							this._tweens = {}
						}, e.prototype.add = function(e) {
							this._tweens[e.getId()] = e, this._tweensAddedDuringUpdate[e.getId()] = e
						}, e.prototype.remove = function(e) {
							delete this._tweens[e.getId()], delete this._tweensAddedDuringUpdate[e.getId()]
						}, e.prototype.update = function(e, t) {
							void 0 === e && (e = k()), void 0 === t && (t = !1);
							var n = Object.keys(this._tweens);
							if (0 === n.length) return !1;
							for (; n.length > 0;) {
								this._tweensAddedDuringUpdate = {};
								for (var i = 0; i < n.length; i++) {
									var r = this._tweens[n[i]],
										a = !t;
									r && !1 === r.update(e, a) && !t && delete this._tweens[n[i]]
								}
								n = Object.keys(this._tweensAddedDuringUpdate)
							}
							return !0
						}, e
					}(), L = {
						Linear: function(e, t) {
							var n = e.length - 1,
								i = n * t,
								r = Math.floor(i),
								a = L.Utils.Linear;
							return t < 0 ? a(e[0], e[1], i) : t > 1 ? a(e[n], e[n - 1], n - i) : a(e[r], e[r + 1 > n ? n : r + 1], i - r)
						},
						Bezier: function(e, t) {
							for (var n = 0, i = e.length - 1, r = Math.pow, a = L.Utils.Bernstein, o = 0; o <= i; o++) n += r(1 - t, i - o) * r(t, o) * e[o] * a(i, o);
							return n
						},
						CatmullRom: function(e, t) {
							var n = e.length - 1,
								i = n * t,
								r = Math.floor(i),
								a = L.Utils.CatmullRom;
							return e[0] === e[n] ? (t < 0 && (r = Math.floor(i = n * (1 + t))), a(e[(r - 1 + n) % n], e[r], e[(r + 1) % n], e[(r + 2) % n], i - r)) : t < 0 ? e[0] - (a(e[0], e[0], e[1], e[1], -i) - e[0]) : t > 1 ? e[n] - (a(e[n], e[n], e[n - 1], e[n - 1], i - n) - e[n]) : a(e[r ? r - 1 : 0], e[r], e[n < r + 1 ? n : r + 1], e[n < r + 2 ? n : r + 2], i - r)
						},
						Utils: {
							Linear: function(e, t, n) {
								return (t - e) * n + e
							},
							Bernstein: function(e, t) {
								var n = L.Utils.Factorial;
								return n(e) / n(t) / n(e - t)
							},
							Factorial: (E = [1], function(e) {
								var t = 1;
								if (E[e]) return E[e];
								for (var n = e; n > 1; n--) t *= n;
								return E[e] = t, t
							}),
							CatmullRom: function(e, t, n, i, r) {
								var a = .5 * (n - e),
									o = .5 * (i - t),
									s = r * r;
								return r * s * (2 * t - 2 * n + a + o) + (-3 * t + 3 * n - 2 * a - o) * s + a * r + t
							}
						}
					}, C = function() {
						function e() {}
						return e.nextId = function() {
							return e._nextId++
						}, e._nextId = 0, e
					}(), P = new R, D = (function() {
						function e(e, t) {
							void 0 === t && (t = P), this._object = e, this._group = t, this._isPaused = !1, this._pauseStart = 0, this._valuesStart = {}, this._valuesEnd = {}, this._valuesStartRepeat = {}, this._duration = 1e3, this._initialRepeat = 0, this._repeat = 0, this._yoyo = !1, this._isPlaying = !1, this._reversed = !1, this._delayTime = 0, this._startTime = 0, this._easingFunction = A.Linear.None, this._interpolationFunction = L.Linear, this._chainedTweens = [], this._onStartCallbackFired = !1, this._id = C.nextId(), this._isChainStopped = !1, this._goToEnd = !1
						}
						e.prototype.getId = function() {
							return this._id
						}, e.prototype.isPlaying = function() {
							return this._isPlaying
						}, e.prototype.isPaused = function() {
							return this._isPaused
						}, e.prototype.to = function(e, t) {
							return this._valuesEnd = Object.create(e), void 0 !== t && (this._duration = t), this
						}, e.prototype.duration = function(e) {
							return this._duration = e, this
						}, e.prototype.start = function(e) {
							if (this._isPlaying) return this;
							if (this._group && this._group.add(this), this._repeat = this._initialRepeat, this._reversed)
								for (var t in this._reversed = !1, this._valuesStartRepeat) this._swapEndStartRepeatValues(t), this._valuesStart[t] = this._valuesStartRepeat[t];
							return this._isPlaying = !0, this._isPaused = !1, this._onStartCallbackFired = !1, this._isChainStopped = !1, this._startTime = void 0 !== e ? "string" == typeof e ? k() + parseFloat(e) : e : k(), this._startTime += this._delayTime, this._setupProperties(this._object, this._valuesStart, this._valuesEnd, this._valuesStartRepeat), this
						}, e.prototype._setupProperties = function(e, t, n, i) {
							for (var r in n) {
								var a = e[r],
									o = Array.isArray(a),
									s = o ? "array" : void 0 === a ? "undefined" : b(a),
									l = !o && Array.isArray(n[r]);
								if ("undefined" !== s && "function" !== s) {
									if (l) {
										var u = n[r];
										if (0 === u.length) continue;
										u = u.map(this._handleRelativeValue.bind(this, a)), n[r] = [a].concat(u)
									}
									if (("object" === s || o) && a && !l) {
										for (var c in t[r] = o ? [] : {}, a) t[r][c] = a[c];
										i[r] = o ? [] : {}, this._setupProperties(a, t[r], n[r], i[r])
									} else void 0 === t[r] && (t[r] = a), o || (t[r] *= 1), i[r] = l ? n[r].slice().reverse() : t[r] || 0
								}
							}
						}, e.prototype.stop = function() {
							return this._isChainStopped || (this._isChainStopped = !0, this.stopChainedTweens()), this._isPlaying && (this._group && this._group.remove(this), this._isPlaying = !1, this._isPaused = !1, this._onStopCallback && this._onStopCallback(this._object)), this
						}, e.prototype.end = function() {
							return this._goToEnd = !0, this.update(1 / 0), this
						}, e.prototype.pause = function(e) {
							return void 0 === e && (e = k()), this._isPaused || !this._isPlaying || (this._isPaused = !0, this._pauseStart = e, this._group && this._group.remove(this)), this
						}, e.prototype.resume = function(e) {
							return void 0 === e && (e = k()), this._isPaused && this._isPlaying && (this._isPaused = !1, this._startTime += e - this._pauseStart, this._pauseStart = 0, this._group && this._group.add(this)), this
						}, e.prototype.stopChainedTweens = function() {
							for (var e = 0, t = this._chainedTweens.length; e < t; e++) this._chainedTweens[e].stop();
							return this
						}, e.prototype.group = function(e) {
							return this._group = e, this
						}, e.prototype.delay = function(e) {
							return this._delayTime = e, this
						}, e.prototype.repeat = function(e) {
							return this._initialRepeat = e, this._repeat = e, this
						}, e.prototype.repeatDelay = function(e) {
							return this._repeatDelayTime = e, this
						}, e.prototype.yoyo = function(e) {
							return this._yoyo = e, this
						}, e.prototype.easing = function(e) {
							return this._easingFunction = e, this
						}, e.prototype.interpolation = function(e) {
							return this._interpolationFunction = e, this
						}, e.prototype.chain = function() {
							for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
							return this._chainedTweens = e, this
						}, e.prototype.onStart = function(e) {
							return this._onStartCallback = e, this
						}, e.prototype.onUpdate = function(e) {
							return this._onUpdateCallback = e, this
						}, e.prototype.onRepeat = function(e) {
							return this._onRepeatCallback = e, this
						}, e.prototype.onComplete = function(e) {
							return this._onCompleteCallback = e, this
						}, e.prototype.onStop = function(e) {
							return this._onStopCallback = e, this
						}, e.prototype.update = function(e, t) {
							if (void 0 === e && (e = k()), void 0 === t && (t = !0), this._isPaused) return !0;
							var n, i, r = this._startTime + this._duration;
							if (!this._goToEnd && !this._isPlaying) {
								if (e > r) return !1;
								t && this.start(e)
							}
							if (this._goToEnd = !1, e < this._startTime) return !0;
							!1 === this._onStartCallbackFired && (this._onStartCallback && this._onStartCallback(this._object), this._onStartCallbackFired = !0), i = (e - this._startTime) / this._duration, i = 0 === this._duration || i > 1 ? 1 : i;
							var a = this._easingFunction(i);
							if (this._updateProperties(this._object, this._valuesStart, this._valuesEnd, a), this._onUpdateCallback && this._onUpdateCallback(this._object, i), 1 === i) {
								if (this._repeat > 0) {
									for (n in isFinite(this._repeat) && this._repeat--, this._valuesStartRepeat) this._yoyo || "string" != typeof this._valuesEnd[n] || (this._valuesStartRepeat[n] = this._valuesStartRepeat[n] + parseFloat(this._valuesEnd[n])), this._yoyo && this._swapEndStartRepeatValues(n), this._valuesStart[n] = this._valuesStartRepeat[n];
									return this._yoyo && (this._reversed = !this._reversed), void 0 !== this._repeatDelayTime ? this._startTime = e + this._repeatDelayTime : this._startTime = e + this._delayTime, this._onRepeatCallback && this._onRepeatCallback(this._object), !0
								}
								this._onCompleteCallback && this._onCompleteCallback(this._object);
								for (var o = 0, s = this._chainedTweens.length; o < s; o++) this._chainedTweens[o].start(this._startTime + this._duration);
								return this._isPlaying = !1, !1
							}
							return !0
						}, e.prototype._updateProperties = function(e, t, n, i) {
							for (var r in n)
								if (void 0 !== t[r]) {
									var a = t[r] || 0,
										o = n[r],
										s = Array.isArray(e[r]),
										l = Array.isArray(o);
									!s && l ? e[r] = this._interpolationFunction(o, i) : "object" == (void 0 === o ? "undefined" : b(o)) && o ? this._updateProperties(e[r], a, o, i) : "number" == typeof(o = this._handleRelativeValue(a, o)) && (e[r] = a + (o - a) * i)
								}
						}, e.prototype._handleRelativeValue = function(e, t) {
							return "string" != typeof t ? t : "+" === t.charAt(0) || "-" === t.charAt(0) ? e + parseFloat(t) : parseFloat(t)
						}, e.prototype._swapEndStartRepeatValues = function(e) {
							var t = this._valuesStartRepeat[e],
								n = this._valuesEnd[e];
							this._valuesStartRepeat[e] = "string" == typeof n ? this._valuesStartRepeat[e] + parseFloat(n) : this._valuesEnd[e], this._valuesEnd[e] = t
						}
					}(), C.nextId, P.getAll.bind(P), P.removeAll.bind(P), P.add.bind(P), P.remove.bind(P), P.update.bind(P)), I = "300 es", N = function() {
						function e() {
							d(this, e)
						}
						return p(e, [{
							key: "addEventListener",
							value: function(e, t) {
								void 0 === this._listeners && (this._listeners = {});
								var n = this._listeners;
								void 0 === n[e] && (n[e] = []), -1 === n[e].indexOf(t) && n[e].push(t)
							}
						}, {
							key: "hasEventListener",
							value: function(e, t) {
								if (void 0 === this._listeners) return !1;
								var n = this._listeners;
								return void 0 !== n[e] && -1 !== n[e].indexOf(t)
							}
						}, {
							key: "removeEventListener",
							value: function(e, t) {
								if (void 0 !== this._listeners) {
									var n = this._listeners[e];
									if (void 0 !== n) {
										var i = n.indexOf(t); - 1 !== i && n.splice(i, 1)
									}
								}
							}
						}, {
							key: "dispatchEvent",
							value: function(e) {
								if (void 0 !== this._listeners) {
									var t = this._listeners[e.type];
									if (void 0 !== t) {
										e.target = this;
										for (var n = t.slice(0), i = 0, r = n.length; i < r; i++) n[i].call(this, e);
										e.target = null
									}
								}
							}
						}]), e
					}(), O = [], z = 0; z < 256; z++) O[z] = (z < 16 ? "0" : "") + z.toString(16);
				var U = Math.PI / 180,
					F = 180 / Math.PI;

				function B() {
					var e = 0xffffffff * Math.random() | 0,
						t = 0xffffffff * Math.random() | 0,
						n = 0xffffffff * Math.random() | 0,
						i = 0xffffffff * Math.random() | 0;
					return (O[255 & e] + O[e >> 8 & 255] + O[e >> 16 & 255] + O[e >> 24 & 255] + "-" + O[255 & t] + O[t >> 8 & 255] + "-" + O[t >> 16 & 15 | 64] + O[t >> 24 & 255] + "-" + O[63 & n | 128] + O[n >> 8 & 255] + "-" + O[n >> 16 & 255] + O[n >> 24 & 255] + O[255 & i] + O[i >> 8 & 255] + O[i >> 16 & 255] + O[i >> 24 & 255]).toUpperCase()
				}

				function H(e, t, n) {
					return Math.max(t, Math.min(n, e))
				}

				function V(e) {
					return !(e & e - 1) && 0 !== e
				}

				function G(e) {
					return Math.pow(2, Math.floor(Math.log(e) / Math.LN2))
				}
				var W = function() {
					function e() {
						var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
							n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
						d(this, e), this.x = t, this.y = n
					}
					return p(e, [{
						key: "width",
						get: function() {
							return this.x
						},
						set: function(e) {
							this.x = e
						}
					}, {
						key: "height",
						get: function() {
							return this.y
						},
						set: function(e) {
							this.y = e
						}
					}, {
						key: "set",
						value: function(e, t) {
							return this.x = e, this.y = t, this
						}
					}, {
						key: "setScalar",
						value: function(e) {
							return this.x = e, this.y = e, this
						}
					}, {
						key: "setX",
						value: function(e) {
							return this.x = e, this
						}
					}, {
						key: "setY",
						value: function(e) {
							return this.y = e, this
						}
					}, {
						key: "setComponent",
						value: function(e, t) {
							switch (e) {
								case 0:
									this.x = t;
									break;
								case 1:
									this.y = t;
									break;
								default:
									throw Error("index is out of range: " + e)
							}
							return this
						}
					}, {
						key: "getComponent",
						value: function(e) {
							switch (e) {
								case 0:
									return this.x;
								case 1:
									return this.y;
								default:
									throw Error("index is out of range: " + e)
							}
						}
					}, {
						key: "clone",
						value: function() {
							return new this.constructor(this.x, this.y)
						}
					}, {
						key: "copy",
						value: function(e) {
							return this.x = e.x, this.y = e.y, this
						}
					}, {
						key: "add",
						value: function(e, t) {
							return void 0 !== t ? (console.warn("THREE.Vector2: .add() now only accepts one argument. Use .addVectors( a, b ) instead."), this.addVectors(e, t)) : (this.x += e.x, this.y += e.y, this)
						}
					}, {
						key: "addScalar",
						value: function(e) {
							return this.x += e, this.y += e, this
						}
					}, {
						key: "addVectors",
						value: function(e, t) {
							return this.x = e.x + t.x, this.y = e.y + t.y, this
						}
					}, {
						key: "addScaledVector",
						value: function(e, t) {
							return this.x += e.x * t, this.y += e.y * t, this
						}
					}, {
						key: "sub",
						value: function(e, t) {
							return void 0 !== t ? (console.warn("THREE.Vector2: .sub() now only accepts one argument. Use .subVectors( a, b ) instead."), this.subVectors(e, t)) : (this.x -= e.x, this.y -= e.y, this)
						}
					}, {
						key: "subScalar",
						value: function(e) {
							return this.x -= e, this.y -= e, this
						}
					}, {
						key: "subVectors",
						value: function(e, t) {
							return this.x = e.x - t.x, this.y = e.y - t.y, this
						}
					}, {
						key: "multiply",
						value: function(e) {
							return this.x *= e.x, this.y *= e.y, this
						}
					}, {
						key: "multiplyScalar",
						value: function(e) {
							return this.x *= e, this.y *= e, this
						}
					}, {
						key: "divide",
						value: function(e) {
							return this.x /= e.x, this.y /= e.y, this
						}
					}, {
						key: "divideScalar",
						value: function(e) {
							return this.multiplyScalar(1 / e)
						}
					}, {
						key: "applyMatrix3",
						value: function(e) {
							var t = this.x,
								n = this.y,
								i = e.elements;
							return this.x = i[0] * t + i[3] * n + i[6], this.y = i[1] * t + i[4] * n + i[7], this
						}
					}, {
						key: "min",
						value: function(e) {
							return this.x = Math.min(this.x, e.x), this.y = Math.min(this.y, e.y), this
						}
					}, {
						key: "max",
						value: function(e) {
							return this.x = Math.max(this.x, e.x), this.y = Math.max(this.y, e.y), this
						}
					}, {
						key: "clamp",
						value: function(e, t) {
							return this.x = Math.max(e.x, Math.min(t.x, this.x)), this.y = Math.max(e.y, Math.min(t.y, this.y)), this
						}
					}, {
						key: "clampScalar",
						value: function(e, t) {
							return this.x = Math.max(e, Math.min(t, this.x)), this.y = Math.max(e, Math.min(t, this.y)), this
						}
					}, {
						key: "clampLength",
						value: function(e, t) {
							var n = this.length();
							return this.divideScalar(n || 1).multiplyScalar(Math.max(e, Math.min(t, n)))
						}
					}, {
						key: "floor",
						value: function() {
							return this.x = Math.floor(this.x), this.y = Math.floor(this.y), this
						}
					}, {
						key: "ceil",
						value: function() {
							return this.x = Math.ceil(this.x), this.y = Math.ceil(this.y), this
						}
					}, {
						key: "round",
						value: function() {
							return this.x = Math.round(this.x), this.y = Math.round(this.y), this
						}
					}, {
						key: "roundToZero",
						value: function() {
							return this.x = this.x < 0 ? Math.ceil(this.x) : Math.floor(this.x), this.y = this.y < 0 ? Math.ceil(this.y) : Math.floor(this.y), this
						}
					}, {
						key: "negate",
						value: function() {
							return this.x = -this.x, this.y = -this.y, this
						}
					}, {
						key: "dot",
						value: function(e) {
							return this.x * e.x + this.y * e.y
						}
					}, {
						key: "cross",
						value: function(e) {
							return this.x * e.y - this.y * e.x
						}
					}, {
						key: "lengthSq",
						value: function() {
							return this.x * this.x + this.y * this.y
						}
					}, {
						key: "length",
						value: function() {
							return Math.sqrt(this.x * this.x + this.y * this.y)
						}
					}, {
						key: "manhattanLength",
						value: function() {
							return Math.abs(this.x) + Math.abs(this.y)
						}
					}, {
						key: "normalize",
						value: function() {
							return this.divideScalar(this.length() || 1)
						}
					}, {
						key: "angle",
						value: function() {
							return Math.atan2(-this.y, -this.x) + Math.PI
						}
					}, {
						key: "distanceTo",
						value: function(e) {
							return Math.sqrt(this.distanceToSquared(e))
						}
					}, {
						key: "distanceToSquared",
						value: function(e) {
							var t = this.x - e.x,
								n = this.y - e.y;
							return t * t + n * n
						}
					}, {
						key: "manhattanDistanceTo",
						value: function(e) {
							return Math.abs(this.x - e.x) + Math.abs(this.y - e.y)
						}
					}, {
						key: "setLength",
						value: function(e) {
							return this.normalize().multiplyScalar(e)
						}
					}, {
						key: "lerp",
						value: function(e, t) {
							return this.x += (e.x - this.x) * t, this.y += (e.y - this.y) * t, this
						}
					}, {
						key: "lerpVectors",
						value: function(e, t, n) {
							return this.x = e.x + (t.x - e.x) * n, this.y = e.y + (t.y - e.y) * n, this
						}
					}, {
						key: "equals",
						value: function(e) {
							return e.x === this.x && e.y === this.y
						}
					}, {
						key: "fromArray",
						value: function(e) {
							var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
							return this.x = e[t], this.y = e[t + 1], this
						}
					}, {
						key: "toArray",
						value: function() {
							var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [],
								t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
							return e[t] = this.x, e[t + 1] = this.y, e
						}
					}, {
						key: "fromBufferAttribute",
						value: function(e, t, n) {
							return void 0 !== n && console.warn("THREE.Vector2: offset has been removed from .fromBufferAttribute()."), this.x = e.getX(t), this.y = e.getY(t), this
						}
					}, {
						key: "rotateAround",
						value: function(e, t) {
							var n = Math.cos(t),
								i = Math.sin(t),
								r = this.x - e.x,
								a = this.y - e.y;
							return this.x = r * n - a * i + e.x, this.y = r * i + a * n + e.y, this
						}
					}, {
						key: "random",
						value: function() {
							return this.x = Math.random(), this.y = Math.random(), this
						}
					}, {
						key: Symbol.iterator,
						value: function() {
							return M(this, function(e) {
								switch (e.label) {
									case 0:
										return [4, this.x];
									case 1:
										return e.sent(), [4, this.y];
									case 2:
										return e.sent(), [2]
								}
							})
						}
					}]), e
				}();
				W.prototype.isVector2 = !0;
				var j = function() {
					function e() {
						d(this, e), this.elements = [1, 0, 0, 0, 1, 0, 0, 0, 1], arguments.length > 0 && console.error("THREE.Matrix3: the constructor no longer reads arguments. use .set() instead.")
					}
					return p(e, [{
						key: "set",
						value: function(e, t, n, i, r, a, o, s, l) {
							var u = this.elements;
							return u[0] = e, u[1] = i, u[2] = o, u[3] = t, u[4] = r, u[5] = s, u[6] = n, u[7] = a, u[8] = l, this
						}
					}, {
						key: "identity",
						value: function() {
							return this.set(1, 0, 0, 0, 1, 0, 0, 0, 1), this
						}
					}, {
						key: "copy",
						value: function(e) {
							var t = this.elements,
								n = e.elements;
							return t[0] = n[0], t[1] = n[1], t[2] = n[2], t[3] = n[3], t[4] = n[4], t[5] = n[5], t[6] = n[6], t[7] = n[7], t[8] = n[8], this
						}
					}, {
						key: "extractBasis",
						value: function(e, t, n) {
							return e.setFromMatrix3Column(this, 0), t.setFromMatrix3Column(this, 1), n.setFromMatrix3Column(this, 2), this
						}
					}, {
						key: "setFromMatrix4",
						value: function(e) {
							var t = e.elements;
							return this.set(t[0], t[4], t[8], t[1], t[5], t[9], t[2], t[6], t[10]), this
						}
					}, {
						key: "multiply",
						value: function(e) {
							return this.multiplyMatrices(this, e)
						}
					}, {
						key: "premultiply",
						value: function(e) {
							return this.multiplyMatrices(e, this)
						}
					}, {
						key: "multiplyMatrices",
						value: function(e, t) {
							var n = e.elements,
								i = t.elements,
								r = this.elements,
								a = n[0],
								o = n[3],
								s = n[6],
								l = n[1],
								u = n[4],
								c = n[7],
								h = n[2],
								d = n[5],
								f = n[8],
								p = i[0],
								m = i[3],
								v = i[6],
								g = i[1],
								y = i[4],
								x = i[7],
								_ = i[2],
								b = i[5],
								w = i[8];
							return r[0] = a * p + o * g + s * _, r[3] = a * m + o * y + s * b, r[6] = a * v + o * x + s * w, r[1] = l * p + u * g + c * _, r[4] = l * m + u * y + c * b, r[7] = l * v + u * x + c * w, r[2] = h * p + d * g + f * _, r[5] = h * m + d * y + f * b, r[8] = h * v + d * x + f * w, this
						}
					}, {
						key: "multiplyScalar",
						value: function(e) {
							var t = this.elements;
							return t[0] *= e, t[3] *= e, t[6] *= e, t[1] *= e, t[4] *= e, t[7] *= e, t[2] *= e, t[5] *= e, t[8] *= e, this
						}
					}, {
						key: "determinant",
						value: function() {
							var e = this.elements,
								t = e[0],
								n = e[1],
								i = e[2],
								r = e[3],
								a = e[4],
								o = e[5],
								s = e[6],
								l = e[7],
								u = e[8];
							return t * a * u - t * o * l - n * r * u + n * o * s + i * r * l - i * a * s
						}
					}, {
						key: "invert",
						value: function() {
							var e = this.elements,
								t = e[0],
								n = e[1],
								i = e[2],
								r = e[3],
								a = e[4],
								o = e[5],
								s = e[6],
								l = e[7],
								u = e[8],
								c = u * a - o * l,
								h = o * s - u * r,
								d = l * r - a * s,
								f = t * c + n * h + i * d;
							if (0 === f) return this.set(0, 0, 0, 0, 0, 0, 0, 0, 0);
							var p = 1 / f;
							return e[0] = c * p, e[1] = (i * l - u * n) * p, e[2] = (o * n - i * a) * p, e[3] = h * p, e[4] = (u * t - i * s) * p, e[5] = (i * r - o * t) * p, e[6] = d * p, e[7] = (n * s - l * t) * p, e[8] = (a * t - n * r) * p, this
						}
					}, {
						key: "transpose",
						value: function() {
							var e, t = this.elements;
							return e = t[1], t[1] = t[3], t[3] = e, e = t[2], t[2] = t[6], t[6] = e, e = t[5], t[5] = t[7], t[7] = e, this
						}
					}, {
						key: "getNormalMatrix",
						value: function(e) {
							return this.setFromMatrix4(e).invert().transpose()
						}
					}, {
						key: "transposeIntoArray",
						value: function(e) {
							var t = this.elements;
							return e[0] = t[0], e[1] = t[3], e[2] = t[6], e[3] = t[1], e[4] = t[4], e[5] = t[7], e[6] = t[2], e[7] = t[5], e[8] = t[8], this
						}
					}, {
						key: "setUvTransform",
						value: function(e, t, n, i, r, a, o) {
							var s = Math.cos(r),
								l = Math.sin(r);
							return this.set(n * s, n * l, -n * (s * a + l * o) + a + e, -i * l, i * s, -i * (-l * a + s * o) + o + t, 0, 0, 1), this
						}
					}, {
						key: "scale",
						value: function(e, t) {
							var n = this.elements;
							return n[0] *= e, n[3] *= e, n[6] *= e, n[1] *= t, n[4] *= t, n[7] *= t, this
						}
					}, {
						key: "rotate",
						value: function(e) {
							var t = Math.cos(e),
								n = Math.sin(e),
								i = this.elements,
								r = i[0],
								a = i[3],
								o = i[6],
								s = i[1],
								l = i[4],
								u = i[7];
							return i[0] = t * r + n * s, i[3] = t * a + n * l, i[6] = t * o + n * u, i[1] = -n * r + t * s, i[4] = -n * a + t * l, i[7] = -n * o + t * u, this
						}
					}, {
						key: "translate",
						value: function(e, t) {
							var n = this.elements;
							return n[0] += e * n[2], n[3] += e * n[5], n[6] += e * n[8], n[1] += t * n[2], n[4] += t * n[5], n[7] += t * n[8], this
						}
					}, {
						key: "equals",
						value: function(e) {
							for (var t = this.elements, n = e.elements, i = 0; i < 9; i++)
								if (t[i] !== n[i]) return !1;
							return !0
						}
					}, {
						key: "fromArray",
						value: function(e) {
							for (var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0, n = 0; n < 9; n++) this.elements[n] = e[n + t];
							return this
						}
					}, {
						key: "toArray",
						value: function() {
							var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [],
								t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
								n = this.elements;
							return e[t] = n[0], e[t + 1] = n[1], e[t + 2] = n[2], e[t + 3] = n[3], e[t + 4] = n[4], e[t + 5] = n[5], e[t + 6] = n[6], e[t + 7] = n[7], e[t + 8] = n[8], e
						}
					}, {
						key: "clone",
						value: function() {
							return (new this.constructor).fromArray(this.elements)
						}
					}]), e
				}();

				function q(e) {
					for (var t = e.length - 1; t >= 0; --t)
						if (e[t] > 65535) return !0;
					return !1
				}

				function X(e) {
					return document.createElementNS("http://www.w3.org/1999/xhtml", e)
				}
				j.prototype.isMatrix3 = !0;
				var Y = {
						aliceblue: 0xf0f8ff,
						antiquewhite: 0xfaebd7,
						aqua: 65535,
						aquamarine: 8388564,
						azure: 0xf0ffff,
						beige: 0xf5f5dc,
						bisque: 0xffe4c4,
						black: 0,
						blanchedalmond: 0xffebcd,
						blue: 255,
						blueviolet: 9055202,
						brown: 0xa52a2a,
						burlywood: 0xdeb887,
						cadetblue: 6266528,
						chartreuse: 8388352,
						chocolate: 0xd2691e,
						coral: 0xff7f50,
						cornflowerblue: 6591981,
						cornsilk: 0xfff8dc,
						crimson: 0xdc143c,
						cyan: 65535,
						darkblue: 139,
						darkcyan: 35723,
						darkgoldenrod: 0xb8860b,
						darkgray: 0xa9a9a9,
						darkgreen: 25600,
						darkgrey: 0xa9a9a9,
						darkkhaki: 0xbdb76b,
						darkmagenta: 9109643,
						darkolivegreen: 5597999,
						darkorange: 0xff8c00,
						darkorchid: 0x9932cc,
						darkred: 9109504,
						darksalmon: 0xe9967a,
						darkseagreen: 9419919,
						darkslateblue: 4734347,
						darkslategray: 3100495,
						darkslategrey: 3100495,
						darkturquoise: 52945,
						darkviolet: 9699539,
						deeppink: 0xff1493,
						deepskyblue: 49151,
						dimgray: 6908265,
						dimgrey: 6908265,
						dodgerblue: 2003199,
						firebrick: 0xb22222,
						floralwhite: 0xfffaf0,
						forestgreen: 2263842,
						fuchsia: 0xff00ff,
						gainsboro: 0xdcdcdc,
						ghostwhite: 0xf8f8ff,
						gold: 0xffd700,
						goldenrod: 0xdaa520,
						gray: 8421504,
						green: 32768,
						greenyellow: 0xadff2f,
						grey: 8421504,
						honeydew: 0xf0fff0,
						hotpink: 0xff69b4,
						indianred: 0xcd5c5c,
						indigo: 4915330,
						ivory: 0xfffff0,
						khaki: 0xf0e68c,
						lavender: 0xe6e6fa,
						lavenderblush: 0xfff0f5,
						lawngreen: 8190976,
						lemonchiffon: 0xfffacd,
						lightblue: 0xadd8e6,
						lightcoral: 0xf08080,
						lightcyan: 0xe0ffff,
						lightgoldenrodyellow: 0xfafad2,
						lightgray: 0xd3d3d3,
						lightgreen: 9498256,
						lightgrey: 0xd3d3d3,
						lightpink: 0xffb6c1,
						lightsalmon: 0xffa07a,
						lightseagreen: 2142890,
						lightskyblue: 8900346,
						lightslategray: 7833753,
						lightslategrey: 7833753,
						lightsteelblue: 0xb0c4de,
						lightyellow: 0xffffe0,
						lime: 65280,
						limegreen: 3329330,
						linen: 0xfaf0e6,
						magenta: 0xff00ff,
						maroon: 8388608,
						mediumaquamarine: 6737322,
						mediumblue: 205,
						mediumorchid: 0xba55d3,
						mediumpurple: 9662683,
						mediumseagreen: 3978097,
						mediumslateblue: 8087790,
						mediumspringgreen: 64154,
						mediumturquoise: 4772300,
						mediumvioletred: 0xc71585,
						midnightblue: 1644912,
						mintcream: 0xf5fffa,
						mistyrose: 0xffe4e1,
						moccasin: 0xffe4b5,
						navajowhite: 0xffdead,
						navy: 128,
						oldlace: 0xfdf5e6,
						olive: 8421376,
						olivedrab: 7048739,
						orange: 0xffa500,
						orangered: 0xff4500,
						orchid: 0xda70d6,
						palegoldenrod: 0xeee8aa,
						palegreen: 0x98fb98,
						paleturquoise: 0xafeeee,
						palevioletred: 0xdb7093,
						papayawhip: 0xffefd5,
						peachpuff: 0xffdab9,
						peru: 0xcd853f,
						pink: 0xffc0cb,
						plum: 0xdda0dd,
						powderblue: 0xb0e0e6,
						purple: 8388736,
						rebeccapurple: 6697881,
						red: 0xff0000,
						rosybrown: 0xbc8f8f,
						royalblue: 4286945,
						saddlebrown: 9127187,
						salmon: 0xfa8072,
						sandybrown: 0xf4a460,
						seagreen: 3050327,
						seashell: 0xfff5ee,
						sienna: 0xa0522d,
						silver: 0xc0c0c0,
						skyblue: 8900331,
						slateblue: 6970061,
						slategray: 7372944,
						slategrey: 7372944,
						snow: 0xfffafa,
						springgreen: 65407,
						steelblue: 4620980,
						tan: 0xd2b48c,
						teal: 32896,
						thistle: 0xd8bfd8,
						tomato: 0xff6347,
						turquoise: 4251856,
						violet: 0xee82ee,
						wheat: 0xf5deb3,
						white: 0xffffff,
						whitesmoke: 0xf5f5f5,
						yellow: 0xffff00,
						yellowgreen: 0x9acd32
					},
					J = {
						h: 0,
						s: 0,
						l: 0
					},
					Z = {
						h: 0,
						s: 0,
						l: 0
					};

				function K(e, t, n) {
					return n < 0 && (n += 1), n > 1 && (n -= 1), n < 1 / 6 ? e + 6 * (t - e) * n : n < .5 ? t : n < 2 / 3 ? e + 6 * (t - e) * (2 / 3 - n) : e
				}

				function Q(e) {
					return e < .04045 ? .0773993808 * e : Math.pow(.9478672986 * e + .0521327014, 2.4)
				}

				function $(e) {
					return e < .0031308 ? 12.92 * e : 1.055 * Math.pow(e, .41666) - .055
				}
				var ee = function() {
					function e(t, n, i) {
						return d(this, e), void 0 === n && void 0 === i ? this.set(t) : this.setRGB(t, n, i)
					}
					return p(e, [{
						key: "set",
						value: function(e) {
							return e && e.isColor ? this.copy(e) : "number" == typeof e ? this.setHex(e) : "string" == typeof e && this.setStyle(e), this
						}
					}, {
						key: "setScalar",
						value: function(e) {
							return this.r = e, this.g = e, this.b = e, this
						}
					}, {
						key: "setHex",
						value: function(e) {
							return e = Math.floor(e), this.r = (e >> 16 & 255) / 255, this.g = (e >> 8 & 255) / 255, this.b = (255 & e) / 255, this
						}
					}, {
						key: "setRGB",
						value: function(e, t, n) {
							return this.r = e, this.g = t, this.b = n, this
						}
					}, {
						key: "setHSL",
						value: function(e, t, n) {
							if (e = (e % 1 + 1) % 1, t = H(t, 0, 1), n = H(n, 0, 1), 0 === t) this.r = this.g = this.b = n;
							else {
								var i = n <= .5 ? n * (1 + t) : n + t - n * t,
									r = 2 * n - i;
								this.r = K(r, i, e + 1 / 3), this.g = K(r, i, e), this.b = K(r, i, e - 1 / 3)
							}
							return this
						}
					}, {
						key: "setStyle",
						value: function(e) {
							function t(t) {
								void 0 !== t && 1 > parseFloat(t) && console.warn("THREE.Color: Alpha component of " + e + " will be ignored.")
							}
							if (n = /^((?:rgb|hsl)a?)\(([^\)]*)\)/.exec(e)) {
								var n, i, r = n[1],
									a = n[2];
								switch (r) {
									case "rgb":
									case "rgba":
										if (i = /^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a)) return this.r = Math.min(255, parseInt(i[1], 10)) / 255, this.g = Math.min(255, parseInt(i[2], 10)) / 255, this.b = Math.min(255, parseInt(i[3], 10)) / 255, t(i[4]), this;
										if (i = /^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a)) return this.r = Math.min(100, parseInt(i[1], 10)) / 100, this.g = Math.min(100, parseInt(i[2], 10)) / 100, this.b = Math.min(100, parseInt(i[3], 10)) / 100, t(i[4]), this;
										break;
									case "hsl":
									case "hsla":
										if (i = /^\s*(\d*\.?\d+)\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a)) {
											var o = parseFloat(i[1]) / 360,
												s = parseInt(i[2], 10) / 100,
												l = parseInt(i[3], 10) / 100;
											return t(i[4]), this.setHSL(o, s, l)
										}
								}
							} else if (n = /^\#([A-Fa-f\d]+)$/.exec(e)) {
								var u = n[1],
									c = u.length;
								if (3 === c) return this.r = parseInt(u.charAt(0) + u.charAt(0), 16) / 255, this.g = parseInt(u.charAt(1) + u.charAt(1), 16) / 255, this.b = parseInt(u.charAt(2) + u.charAt(2), 16) / 255, this;
								if (6 === c) return this.r = parseInt(u.charAt(0) + u.charAt(1), 16) / 255, this.g = parseInt(u.charAt(2) + u.charAt(3), 16) / 255, this.b = parseInt(u.charAt(4) + u.charAt(5), 16) / 255, this
							}
							return e && e.length > 0 ? this.setColorName(e) : this
						}
					}, {
						key: "setColorName",
						value: function(e) {
							var t = Y[e.toLowerCase()];
							return void 0 !== t ? this.setHex(t) : console.warn("THREE.Color: Unknown color " + e), this
						}
					}, {
						key: "clone",
						value: function() {
							return new this.constructor(this.r, this.g, this.b)
						}
					}, {
						key: "copy",
						value: function(e) {
							return this.r = e.r, this.g = e.g, this.b = e.b, this
						}
					}, {
						key: "copySRGBToLinear",
						value: function(e) {
							return this.r = Q(e.r), this.g = Q(e.g), this.b = Q(e.b), this
						}
					}, {
						key: "copyLinearToSRGB",
						value: function(e) {
							return this.r = $(e.r), this.g = $(e.g), this.b = $(e.b), this
						}
					}, {
						key: "convertSRGBToLinear",
						value: function() {
							return this.copySRGBToLinear(this), this
						}
					}, {
						key: "convertLinearToSRGB",
						value: function() {
							return this.copyLinearToSRGB(this), this
						}
					}, {
						key: "getHex",
						value: function() {
							return 255 * this.r << 16 ^ 255 * this.g << 8 ^ 255 * this.b
						}
					}, {
						key: "getHexString",
						value: function() {
							return ("000000" + this.getHex().toString(16)).slice(-6)
						}
					}, {
						key: "getHSL",
						value: function(e) {
							var t, n, i = this.r,
								r = this.g,
								a = this.b,
								o = Math.max(i, r, a),
								s = Math.min(i, r, a),
								l = (s + o) / 2;
							if (s === o) t = 0, n = 0;
							else {
								var u = o - s;
								switch (n = l <= .5 ? u / (o + s) : u / (2 - o - s), o) {
									case i:
										t = (r - a) / u + 6 * (r < a);
										break;
									case r:
										t = (a - i) / u + 2;
										break;
									case a:
										t = (i - r) / u + 4
								}
								t /= 6
							}
							return e.h = t, e.s = n, e.l = l, e
						}
					}, {
						key: "getStyle",
						value: function() {
							return "rgb(" + (255 * this.r | 0) + "," + (255 * this.g | 0) + "," + (255 * this.b | 0) + ")"
						}
					}, {
						key: "offsetHSL",
						value: function(e, t, n) {
							return this.getHSL(J), J.h += e, J.s += t, J.l += n, this.setHSL(J.h, J.s, J.l), this
						}
					}, {
						key: "add",
						value: function(e) {
							return this.r += e.r, this.g += e.g, this.b += e.b, this
						}
					}, {
						key: "addColors",
						value: function(e, t) {
							return this.r = e.r + t.r, this.g = e.g + t.g, this.b = e.b + t.b, this
						}
					}, {
						key: "addScalar",
						value: function(e) {
							return this.r += e, this.g += e, this.b += e, this
						}
					}, {
						key: "sub",
						value: function(e) {
							return this.r = Math.max(0, this.r - e.r), this.g = Math.max(0, this.g - e.g), this.b = Math.max(0, this.b - e.b), this
						}
					}, {
						key: "multiply",
						value: function(e) {
							return this.r *= e.r, this.g *= e.g, this.b *= e.b, this
						}
					}, {
						key: "multiplyScalar",
						value: function(e) {
							return this.r *= e, this.g *= e, this.b *= e, this
						}
					}, {
						key: "lerp",
						value: function(e, t) {
							return this.r += (e.r - this.r) * t, this.g += (e.g - this.g) * t, this.b += (e.b - this.b) * t, this
						}
					}, {
						key: "lerpColors",
						value: function(e, t, n) {
							return this.r = e.r + (t.r - e.r) * n, this.g = e.g + (t.g - e.g) * n, this.b = e.b + (t.b - e.b) * n, this
						}
					}, {
						key: "lerpHSL",
						value: function(e, t) {
							this.getHSL(J), e.getHSL(Z);
							var n, i, r, a = (n = J.h, (1 - t) * n + t * Z.h),
								o = (i = J.s, (1 - t) * i + t * Z.s),
								s = (r = J.l, (1 - t) * r + t * Z.l);
							return this.setHSL(a, o, s), this
						}
					}, {
						key: "equals",
						value: function(e) {
							return e.r === this.r && e.g === this.g && e.b === this.b
						}
					}, {
						key: "fromArray",
						value: function(e) {
							var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
							return this.r = e[t], this.g = e[t + 1], this.b = e[t + 2], this
						}
					}, {
						key: "toArray",
						value: function() {
							var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [],
								t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
							return e[t] = this.r, e[t + 1] = this.g, e[t + 2] = this.b, e
						}
					}, {
						key: "fromBufferAttribute",
						value: function(e, t) {
							return this.r = e.getX(t), this.g = e.getY(t), this.b = e.getZ(t), !0 === e.normalized && (this.r /= 255, this.g /= 255, this.b /= 255), this
						}
					}, {
						key: "toJSON",
						value: function() {
							return this.getHex()
						}
					}]), e
				}();
				ee.NAMES = Y, ee.prototype.isColor = !0, ee.prototype.r = 1, ee.prototype.g = 1, ee.prototype.b = 1;
				var et = function() {
						function e() {
							d(this, e)
						}
						return p(e, null, [{
							key: "getDataURL",
							value: function(e) {
								if (/^data:/i.test(e.src) || "undefined" == typeof HTMLCanvasElement) return e.src;
								if (e instanceof HTMLCanvasElement) t = e;
								else {
									void 0 === i && (i = X("canvas")), i.width = e.width, i.height = e.height;
									var t, n = i.getContext("2d");
									e instanceof ImageData ? n.putImageData(e, 0, 0) : n.drawImage(e, 0, 0, e.width, e.height), t = i
								}
								return t.width > 2048 || t.height > 2048 ? (console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons", e), t.toDataURL("image/jpeg", .6)) : t.toDataURL("image/png")
							}
						}, {
							key: "sRGBToLinear",
							value: function(e) {
								if ("undefined" != typeof HTMLImageElement && e instanceof HTMLImageElement || "undefined" != typeof HTMLCanvasElement && e instanceof HTMLCanvasElement || "undefined" != typeof ImageBitmap && e instanceof ImageBitmap) {
									var t = X("canvas");
									t.width = e.width, t.height = e.height;
									var n = t.getContext("2d");
									n.drawImage(e, 0, 0, e.width, e.height);
									for (var i = n.getImageData(0, 0, e.width, e.height), r = i.data, a = 0; a < r.length; a++) r[a] = 255 * Q(r[a] / 255);
									return n.putImageData(i, 0, 0), t
								}
								if (e.data) {
									for (var o = e.data.slice(0), s = 0; s < o.length; s++) o instanceof Uint8Array || o instanceof Uint8ClampedArray ? o[s] = Math.floor(255 * Q(o[s] / 255)) : o[s] = Q(o[s]);
									return {
										data: o,
										width: e.width,
										height: e.height
									}
								}
								return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."), e
							}
						}]), e
					}(),
					en = 0,
					ei = function(e) {
						function t() {
							var e, n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : t.DEFAULT_IMAGE,
								i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : t.DEFAULT_MAPPING,
								r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1001,
								a = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 1001,
								o = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 1006,
								s = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 1008,
								l = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : 1023,
								u = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : 1009,
								c = arguments.length > 8 && void 0 !== arguments[8] ? arguments[8] : 1,
								f = arguments.length > 9 && void 0 !== arguments[9] ? arguments[9] : 3e3;
							return d(this, t), Object.defineProperty(e = h(this, t), "id", {
								value: en++
							}), e.uuid = B(), e.name = "", e.image = n, e.mipmaps = [], e.mapping = i, e.wrapS = r, e.wrapT = a, e.magFilter = o, e.minFilter = s, e.anisotropy = c, e.format = l, e.internalFormat = null, e.type = u, e.offset = new W(0, 0), e.repeat = new W(1, 1), e.center = new W(0, 0), e.rotation = 0, e.matrixAutoUpdate = !0, e.matrix = new j, e.generateMipmaps = !0, e.premultiplyAlpha = !1, e.flipY = !0, e.unpackAlignment = 4, e.encoding = f, e.userData = {}, e.version = 0, e.onUpdate = null, e.isRenderTargetTexture = !1, e.needsPMREMUpdate = !1, e
						}
						return y(t, e), p(t, [{
							key: "updateMatrix",
							value: function() {
								this.matrix.setUvTransform(this.offset.x, this.offset.y, this.repeat.x, this.repeat.y, this.rotation, this.center.x, this.center.y)
							}
						}, {
							key: "clone",
							value: function() {
								return (new this.constructor).copy(this)
							}
						}, {
							key: "copy",
							value: function(e) {
								return this.name = e.name, this.image = e.image, this.mipmaps = e.mipmaps.slice(0), this.mapping = e.mapping, this.wrapS = e.wrapS, this.wrapT = e.wrapT, this.magFilter = e.magFilter, this.minFilter = e.minFilter, this.anisotropy = e.anisotropy, this.format = e.format, this.internalFormat = e.internalFormat, this.type = e.type, this.offset.copy(e.offset), this.repeat.copy(e.repeat), this.center.copy(e.center), this.rotation = e.rotation, this.matrixAutoUpdate = e.matrixAutoUpdate, this.matrix.copy(e.matrix), this.generateMipmaps = e.generateMipmaps, this.premultiplyAlpha = e.premultiplyAlpha, this.flipY = e.flipY, this.unpackAlignment = e.unpackAlignment, this.encoding = e.encoding, this.userData = JSON.parse(JSON.stringify(e.userData)), this
							}
						}, {
							key: "toJSON",
							value: function(e) {
								var t = void 0 === e || "string" == typeof e;
								if (!t && void 0 !== e.textures[this.uuid]) return e.textures[this.uuid];
								var n = {
									metadata: {
										version: 4.5,
										type: "Texture",
										generator: "Texture.toJSON"
									},
									uuid: this.uuid,
									name: this.name,
									mapping: this.mapping,
									repeat: [this.repeat.x, this.repeat.y],
									offset: [this.offset.x, this.offset.y],
									center: [this.center.x, this.center.y],
									rotation: this.rotation,
									wrap: [this.wrapS, this.wrapT],
									format: this.format,
									type: this.type,
									encoding: this.encoding,
									minFilter: this.minFilter,
									magFilter: this.magFilter,
									anisotropy: this.anisotropy,
									flipY: this.flipY,
									premultiplyAlpha: this.premultiplyAlpha,
									unpackAlignment: this.unpackAlignment
								};
								if (void 0 !== this.image) {
									var i, r = this.image;
									if (void 0 === r.uuid && (r.uuid = B()), !t && void 0 === e.images[r.uuid]) {
										if (Array.isArray(r)) {
											i = [];
											for (var a = 0, o = r.length; a < o; a++) r[a].isDataTexture ? i.push(er(r[a].image)) : i.push(er(r[a]))
										} else i = er(r);
										e.images[r.uuid] = {
											uuid: r.uuid,
											url: i
										}
									}
									n.image = r.uuid
								}
								return "{}" !== JSON.stringify(this.userData) && (n.userData = this.userData), t || (e.textures[this.uuid] = n), n
							}
						}, {
							key: "dispose",
							value: function() {
								this.dispatchEvent({
									type: "dispose"
								})
							}
						}, {
							key: "transformUv",
							value: function(e) {
								if (300 !== this.mapping) return e;
								if (e.applyMatrix3(this.matrix), e.x < 0 || e.x > 1) switch (this.wrapS) {
									case 1e3:
										e.x = e.x - Math.floor(e.x);
										break;
									case 1001:
										e.x = e.x < 0 ? 0 : 1;
										break;
									case 1002:
										1 === Math.abs(Math.floor(e.x) % 2) ? e.x = Math.ceil(e.x) - e.x : e.x = e.x - Math.floor(e.x)
								}
								if (e.y < 0 || e.y > 1) switch (this.wrapT) {
									case 1e3:
										e.y = e.y - Math.floor(e.y);
										break;
									case 1001:
										e.y = e.y < 0 ? 0 : 1;
										break;
									case 1002:
										1 === Math.abs(Math.floor(e.y) % 2) ? e.y = Math.ceil(e.y) - e.y : e.y = e.y - Math.floor(e.y)
								}
								return this.flipY && (e.y = 1 - e.y), e
							}
						}, {
							key: "needsUpdate",
							set: function(e) {
								!0 === e && this.version++
							}
						}]), t
					}(N);

				function er(e) {
					return "undefined" != typeof HTMLImageElement && e instanceof HTMLImageElement || "undefined" != typeof HTMLCanvasElement && e instanceof HTMLCanvasElement || "undefined" != typeof ImageBitmap && e instanceof ImageBitmap ? et.getDataURL(e) : e.data ? {
						data: Array.prototype.slice.call(e.data),
						width: e.width,
						height: e.height,
						type: e.data.constructor.name
					} : (console.warn("THREE.Texture: Unable to serialize Texture."), {})
				}
				ei.DEFAULT_IMAGE = void 0, ei.DEFAULT_MAPPING = 300, ei.prototype.isTexture = !0;
				var ea = function() {
					function e() {
						var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
							n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
							i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
							r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 1;
						d(this, e), this.x = t, this.y = n, this.z = i, this.w = r
					}
					return p(e, [{
						key: "width",
						get: function() {
							return this.z
						},
						set: function(e) {
							this.z = e
						}
					}, {
						key: "height",
						get: function() {
							return this.w
						},
						set: function(e) {
							this.w = e
						}
					}, {
						key: "set",
						value: function(e, t, n, i) {
							return this.x = e, this.y = t, this.z = n, this.w = i, this
						}
					}, {
						key: "setScalar",
						value: function(e) {
							return this.x = e, this.y = e, this.z = e, this.w = e, this
						}
					}, {
						key: "setX",
						value: function(e) {
							return this.x = e, this
						}
					}, {
						key: "setY",
						value: function(e) {
							return this.y = e, this
						}
					}, {
						key: "setZ",
						value: function(e) {
							return this.z = e, this
						}
					}, {
						key: "setW",
						value: function(e) {
							return this.w = e, this
						}
					}, {
						key: "setComponent",
						value: function(e, t) {
							switch (e) {
								case 0:
									this.x = t;
									break;
								case 1:
									this.y = t;
									break;
								case 2:
									this.z = t;
									break;
								case 3:
									this.w = t;
									break;
								default:
									throw Error("index is out of range: " + e)
							}
							return this
						}
					}, {
						key: "getComponent",
						value: function(e) {
							switch (e) {
								case 0:
									return this.x;
								case 1:
									return this.y;
								case 2:
									return this.z;
								case 3:
									return this.w;
								default:
									throw Error("index is out of range: " + e)
							}
						}
					}, {
						key: "clone",
						value: function() {
							return new this.constructor(this.x, this.y, this.z, this.w)
						}
					}, {
						key: "copy",
						value: function(e) {
							return this.x = e.x, this.y = e.y, this.z = e.z, this.w = void 0 !== e.w ? e.w : 1, this
						}
					}, {
						key: "add",
						value: function(e, t) {
							return void 0 !== t ? (console.warn("THREE.Vector4: .add() now only accepts one argument. Use .addVectors( a, b ) instead."), this.addVectors(e, t)) : (this.x += e.x, this.y += e.y, this.z += e.z, this.w += e.w, this)
						}
					}, {
						key: "addScalar",
						value: function(e) {
							return this.x += e, this.y += e, this.z += e, this.w += e, this
						}
					}, {
						key: "addVectors",
						value: function(e, t) {
							return this.x = e.x + t.x, this.y = e.y + t.y, this.z = e.z + t.z, this.w = e.w + t.w, this
						}
					}, {
						key: "addScaledVector",
						value: function(e, t) {
							return this.x += e.x * t, this.y += e.y * t, this.z += e.z * t, this.w += e.w * t, this
						}
					}, {
						key: "sub",
						value: function(e, t) {
							return void 0 !== t ? (console.warn("THREE.Vector4: .sub() now only accepts one argument. Use .subVectors( a, b ) instead."), this.subVectors(e, t)) : (this.x -= e.x, this.y -= e.y, this.z -= e.z, this.w -= e.w, this)
						}
					}, {
						key: "subScalar",
						value: function(e) {
							return this.x -= e, this.y -= e, this.z -= e, this.w -= e, this
						}
					}, {
						key: "subVectors",
						value: function(e, t) {
							return this.x = e.x - t.x, this.y = e.y - t.y, this.z = e.z - t.z, this.w = e.w - t.w, this
						}
					}, {
						key: "multiply",
						value: function(e) {
							return this.x *= e.x, this.y *= e.y, this.z *= e.z, this.w *= e.w, this
						}
					}, {
						key: "multiplyScalar",
						value: function(e) {
							return this.x *= e, this.y *= e, this.z *= e, this.w *= e, this
						}
					}, {
						key: "applyMatrix4",
						value: function(e) {
							var t = this.x,
								n = this.y,
								i = this.z,
								r = this.w,
								a = e.elements;
							return this.x = a[0] * t + a[4] * n + a[8] * i + a[12] * r, this.y = a[1] * t + a[5] * n + a[9] * i + a[13] * r, this.z = a[2] * t + a[6] * n + a[10] * i + a[14] * r, this.w = a[3] * t + a[7] * n + a[11] * i + a[15] * r, this
						}
					}, {
						key: "divideScalar",
						value: function(e) {
							return this.multiplyScalar(1 / e)
						}
					}, {
						key: "setAxisAngleFromQuaternion",
						value: function(e) {
							this.w = 2 * Math.acos(e.w);
							var t = Math.sqrt(1 - e.w * e.w);
							return t < 1e-4 ? (this.x = 1, this.y = 0, this.z = 0) : (this.x = e.x / t, this.y = e.y / t, this.z = e.z / t), this
						}
					}, {
						key: "setAxisAngleFromRotationMatrix",
						value: function(e) {
							var t, n, i, r, a = e.elements,
								o = a[0],
								s = a[4],
								l = a[8],
								u = a[1],
								c = a[5],
								h = a[9],
								d = a[2],
								f = a[6],
								p = a[10];
							if (.01 > Math.abs(s - u) && .01 > Math.abs(l - d) && .01 > Math.abs(h - f)) {
								if (.1 > Math.abs(s + u) && .1 > Math.abs(l + d) && .1 > Math.abs(h + f) && .1 > Math.abs(o + c + p - 3)) return this.set(1, 0, 0, 0), this;
								t = Math.PI;
								var m = (o + 1) / 2,
									v = (c + 1) / 2,
									g = (p + 1) / 2,
									y = (s + u) / 4,
									x = (l + d) / 4,
									_ = (h + f) / 4;
								return m > v && m > g ? m < .01 ? (n = 0, i = .707106781, r = .707106781) : (i = y / (n = Math.sqrt(m)), r = x / n) : v > g ? v < .01 ? (n = .707106781, i = 0, r = .707106781) : (n = y / (i = Math.sqrt(v)), r = _ / i) : g < .01 ? (n = .707106781, i = .707106781, r = 0) : (n = x / (r = Math.sqrt(g)), i = _ / r), this.set(n, i, r, t), this
							}
							var b = Math.sqrt((f - h) * (f - h) + (l - d) * (l - d) + (u - s) * (u - s));
							return .001 > Math.abs(b) && (b = 1), this.x = (f - h) / b, this.y = (l - d) / b, this.z = (u - s) / b, this.w = Math.acos((o + c + p - 1) / 2), this
						}
					}, {
						key: "min",
						value: function(e) {
							return this.x = Math.min(this.x, e.x), this.y = Math.min(this.y, e.y), this.z = Math.min(this.z, e.z), this.w = Math.min(this.w, e.w), this
						}
					}, {
						key: "max",
						value: function(e) {
							return this.x = Math.max(this.x, e.x), this.y = Math.max(this.y, e.y), this.z = Math.max(this.z, e.z), this.w = Math.max(this.w, e.w), this
						}
					}, {
						key: "clamp",
						value: function(e, t) {
							return this.x = Math.max(e.x, Math.min(t.x, this.x)), this.y = Math.max(e.y, Math.min(t.y, this.y)), this.z = Math.max(e.z, Math.min(t.z, this.z)), this.w = Math.max(e.w, Math.min(t.w, this.w)), this
						}
					}, {
						key: "clampScalar",
						value: function(e, t) {
							return this.x = Math.max(e, Math.min(t, this.x)), this.y = Math.max(e, Math.min(t, this.y)), this.z = Math.max(e, Math.min(t, this.z)), this.w = Math.max(e, Math.min(t, this.w)), this
						}
					}, {
						key: "clampLength",
						value: function(e, t) {
							var n = this.length();
							return this.divideScalar(n || 1).multiplyScalar(Math.max(e, Math.min(t, n)))
						}
					}, {
						key: "floor",
						value: function() {
							return this.x = Math.floor(this.x), this.y = Math.floor(this.y), this.z = Math.floor(this.z), this.w = Math.floor(this.w), this
						}
					}, {
						key: "ceil",
						value: function() {
							return this.x = Math.ceil(this.x), this.y = Math.ceil(this.y), this.z = Math.ceil(this.z), this.w = Math.ceil(this.w), this
						}
					}, {
						key: "round",
						value: function() {
							return this.x = Math.round(this.x), this.y = Math.round(this.y), this.z = Math.round(this.z), this.w = Math.round(this.w), this
						}
					}, {
						key: "roundToZero",
						value: function() {
							return this.x = this.x < 0 ? Math.ceil(this.x) : Math.floor(this.x), this.y = this.y < 0 ? Math.ceil(this.y) : Math.floor(this.y), this.z = this.z < 0 ? Math.ceil(this.z) : Math.floor(this.z), this.w = this.w < 0 ? Math.ceil(this.w) : Math.floor(this.w), this
						}
					}, {
						key: "negate",
						value: function() {
							return this.x = -this.x, this.y = -this.y, this.z = -this.z, this.w = -this.w, this
						}
					}, {
						key: "dot",
						value: function(e) {
							return this.x * e.x + this.y * e.y + this.z * e.z + this.w * e.w
						}
					}, {
						key: "lengthSq",
						value: function() {
							return this.x * this.x + this.y * this.y + this.z * this.z + this.w * this.w
						}
					}, {
						key: "length",
						value: function() {
							return Math.sqrt(this.x * this.x + this.y * this.y + this.z * this.z + this.w * this.w)
						}
					}, {
						key: "manhattanLength",
						value: function() {
							return Math.abs(this.x) + Math.abs(this.y) + Math.abs(this.z) + Math.abs(this.w)
						}
					}, {
						key: "normalize",
						value: function() {
							return this.divideScalar(this.length() || 1)
						}
					}, {
						key: "setLength",
						value: function(e) {
							return this.normalize().multiplyScalar(e)
						}
					}, {
						key: "lerp",
						value: function(e, t) {
							return this.x += (e.x - this.x) * t, this.y += (e.y - this.y) * t, this.z += (e.z - this.z) * t, this.w += (e.w - this.w) * t, this
						}
					}, {
						key: "lerpVectors",
						value: function(e, t, n) {
							return this.x = e.x + (t.x - e.x) * n, this.y = e.y + (t.y - e.y) * n, this.z = e.z + (t.z - e.z) * n, this.w = e.w + (t.w - e.w) * n, this
						}
					}, {
						key: "equals",
						value: function(e) {
							return e.x === this.x && e.y === this.y && e.z === this.z && e.w === this.w
						}
					}, {
						key: "fromArray",
						value: function(e) {
							var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
							return this.x = e[t], this.y = e[t + 1], this.z = e[t + 2], this.w = e[t + 3], this
						}
					}, {
						key: "toArray",
						value: function() {
							var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [],
								t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
							return e[t] = this.x, e[t + 1] = this.y, e[t + 2] = this.z, e[t + 3] = this.w, e
						}
					}, {
						key: "fromBufferAttribute",
						value: function(e, t, n) {
							return void 0 !== n && console.warn("THREE.Vector4: offset has been removed from .fromBufferAttribute()."), this.x = e.getX(t), this.y = e.getY(t), this.z = e.getZ(t), this.w = e.getW(t), this
						}
					}, {
						key: "random",
						value: function() {
							return this.x = Math.random(), this.y = Math.random(), this.z = Math.random(), this.w = Math.random(), this
						}
					}, {
						key: Symbol.iterator,
						value: function() {
							return M(this, function(e) {
								switch (e.label) {
									case 0:
										return [4, this.x];
									case 1:
										return e.sent(), [4, this.y];
									case 2:
										return e.sent(), [4, this.z];
									case 3:
										return e.sent(), [4, this.w];
									case 4:
										return e.sent(), [2]
								}
							})
						}
					}]), e
				}();
				ea.prototype.isVector4 = !0;
				var eo = function(e) {
					function t(e, n) {
						var i, r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
						return d(this, t), (i = h(this, t)).width = e, i.height = n, i.depth = 1, i.scissor = new ea(0, 0, e, n), i.scissorTest = !1, i.viewport = new ea(0, 0, e, n), i.texture = new ei(void 0, r.mapping, r.wrapS, r.wrapT, r.magFilter, r.minFilter, r.format, r.type, r.anisotropy, r.encoding), i.texture.isRenderTargetTexture = !0, i.texture.image = {
							width: e,
							height: n,
							depth: 1
						}, i.texture.generateMipmaps = void 0 !== r.generateMipmaps && r.generateMipmaps, i.texture.internalFormat = void 0 !== r.internalFormat ? r.internalFormat : null, i.texture.minFilter = void 0 !== r.minFilter ? r.minFilter : 1006, i.depthBuffer = void 0 === r.depthBuffer || r.depthBuffer, i.stencilBuffer = void 0 !== r.stencilBuffer && r.stencilBuffer, i.depthTexture = void 0 !== r.depthTexture ? r.depthTexture : null, i
					}
					return y(t, e), p(t, [{
						key: "setTexture",
						value: function(e) {
							e.image = {
								width: this.width,
								height: this.height,
								depth: this.depth
							}, this.texture = e
						}
					}, {
						key: "setSize",
						value: function(e, t) {
							var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1;
							this.width === e && this.height === t && this.depth === n || (this.width = e, this.height = t, this.depth = n, this.texture.image.width = e, this.texture.image.height = t, this.texture.image.depth = n, this.dispose()), this.viewport.set(0, 0, e, t), this.scissor.set(0, 0, e, t)
						}
					}, {
						key: "clone",
						value: function() {
							return (new this.constructor).copy(this)
						}
					}, {
						key: "copy",
						value: function(e) {
							return this.width = e.width, this.height = e.height, this.depth = e.depth, this.viewport.copy(e.viewport), this.texture = e.texture.clone(), this.texture.image = Object.assign({}, e.texture.image), this.depthBuffer = e.depthBuffer, this.stencilBuffer = e.stencilBuffer, this.depthTexture = e.depthTexture, this
						}
					}, {
						key: "dispose",
						value: function() {
							this.dispatchEvent({
								type: "dispose"
							})
						}
					}]), t
				}(N);
				eo.prototype.isWebGLRenderTarget = !0,
					function(e) {
						function t(e, n, i) {
							d(this, t);
							var r, a = (r = h(this, t, [e, n])).texture;
							r.texture = [];
							for (var o = 0; o < i; o++) r.texture[o] = a.clone();
							return r
						}
						return y(t, e), p(t, [{
							key: "setSize",
							value: function(e, t) {
								var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1;
								if (this.width !== e || this.height !== t || this.depth !== n) {
									this.width = e, this.height = t, this.depth = n;
									for (var i = 0, r = this.texture.length; i < r; i++) this.texture[i].image.width = e, this.texture[i].image.height = t, this.texture[i].image.depth = n;
									this.dispose()
								}
								return this.viewport.set(0, 0, e, t), this.scissor.set(0, 0, e, t), this
							}
						}, {
							key: "copy",
							value: function(e) {
								this.dispose(), this.width = e.width, this.height = e.height, this.depth = e.depth, this.viewport.set(0, 0, this.width, this.height), this.scissor.set(0, 0, this.width, this.height), this.depthBuffer = e.depthBuffer, this.stencilBuffer = e.stencilBuffer, this.depthTexture = e.depthTexture, this.texture.length = 0;
								for (var t = 0, n = e.texture.length; t < n; t++) this.texture[t] = e.texture[t].clone();
								return this
							}
						}]), t
					}(eo).prototype.isWebGLMultipleRenderTargets = !0;
				var es = function(e) {
					function t(e, n) {
						var i, r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
						return d(this, t), (i = h(this, t, [e, n, r])).samples = 4, i.ignoreDepthForMultisampleCopy = void 0 === r.ignoreDepth || r.ignoreDepth, i.useRenderToTexture = void 0 !== r.useRenderToTexture && r.useRenderToTexture, i.useRenderbuffer = !1 === i.useRenderToTexture, i
					}
					return y(t, e), p(t, [{
						key: "copy",
						value: function(e) {
							return v(g(t.prototype), "copy", this).call(this, e), this.samples = e.samples, this.useRenderToTexture = e.useRenderToTexture, this.useRenderbuffer = e.useRenderbuffer, this
						}
					}]), t
				}(eo);
				es.prototype.isWebGLMultisampleRenderTarget = !0;
				var el = function() {
					function e() {
						var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
							n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
							i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
							r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 1;
						d(this, e), this._x = t, this._y = n, this._z = i, this._w = r
					}
					return p(e, [{
						key: "x",
						get: function() {
							return this._x
						},
						set: function(e) {
							this._x = e, this._onChangeCallback()
						}
					}, {
						key: "y",
						get: function() {
							return this._y
						},
						set: function(e) {
							this._y = e, this._onChangeCallback()
						}
					}, {
						key: "z",
						get: function() {
							return this._z
						},
						set: function(e) {
							this._z = e, this._onChangeCallback()
						}
					}, {
						key: "w",
						get: function() {
							return this._w
						},
						set: function(e) {
							this._w = e, this._onChangeCallback()
						}
					}, {
						key: "set",
						value: function(e, t, n, i) {
							return this._x = e, this._y = t, this._z = n, this._w = i, this._onChangeCallback(), this
						}
					}, {
						key: "clone",
						value: function() {
							return new this.constructor(this._x, this._y, this._z, this._w)
						}
					}, {
						key: "copy",
						value: function(e) {
							return this._x = e.x, this._y = e.y, this._z = e.z, this._w = e.w, this._onChangeCallback(), this
						}
					}, {
						key: "setFromEuler",
						value: function(e, t) {
							if (!e || !e.isEuler) throw Error("THREE.Quaternion: .setFromEuler() now expects an Euler rotation rather than a Vector3 and order.");
							var n = e._x,
								i = e._y,
								r = e._z,
								a = e._order,
								o = Math.cos,
								s = Math.sin,
								l = o(n / 2),
								u = o(i / 2),
								c = o(r / 2),
								h = s(n / 2),
								d = s(i / 2),
								f = s(r / 2);
							switch (a) {
								case "XYZ":
									this._x = h * u * c + l * d * f, this._y = l * d * c - h * u * f, this._z = l * u * f + h * d * c, this._w = l * u * c - h * d * f;
									break;
								case "YXZ":
									this._x = h * u * c + l * d * f, this._y = l * d * c - h * u * f, this._z = l * u * f - h * d * c, this._w = l * u * c + h * d * f;
									break;
								case "ZXY":
									this._x = h * u * c - l * d * f, this._y = l * d * c + h * u * f, this._z = l * u * f + h * d * c, this._w = l * u * c - h * d * f;
									break;
								case "ZYX":
									this._x = h * u * c - l * d * f, this._y = l * d * c + h * u * f, this._z = l * u * f - h * d * c, this._w = l * u * c + h * d * f;
									break;
								case "YZX":
									this._x = h * u * c + l * d * f, this._y = l * d * c + h * u * f, this._z = l * u * f - h * d * c, this._w = l * u * c - h * d * f;
									break;
								case "XZY":
									this._x = h * u * c - l * d * f, this._y = l * d * c - h * u * f, this._z = l * u * f + h * d * c, this._w = l * u * c + h * d * f;
									break;
								default:
									console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: " + a)
							}
							return !1 !== t && this._onChangeCallback(), this
						}
					}, {
						key: "setFromAxisAngle",
						value: function(e, t) {
							var n = t / 2,
								i = Math.sin(n);
							return this._x = e.x * i, this._y = e.y * i, this._z = e.z * i, this._w = Math.cos(n), this._onChangeCallback(), this
						}
					}, {
						key: "setFromRotationMatrix",
						value: function(e) {
							var t = e.elements,
								n = t[0],
								i = t[4],
								r = t[8],
								a = t[1],
								o = t[5],
								s = t[9],
								l = t[2],
								u = t[6],
								c = t[10],
								h = n + o + c;
							if (h > 0) {
								var d = .5 / Math.sqrt(h + 1);
								this._w = .25 / d, this._x = (u - s) * d, this._y = (r - l) * d, this._z = (a - i) * d
							} else if (n > o && n > c) {
								var f = 2 * Math.sqrt(1 + n - o - c);
								this._w = (u - s) / f, this._x = .25 * f, this._y = (i + a) / f, this._z = (r + l) / f
							} else if (o > c) {
								var p = 2 * Math.sqrt(1 + o - n - c);
								this._w = (r - l) / p, this._x = (i + a) / p, this._y = .25 * p, this._z = (s + u) / p
							} else {
								var m = 2 * Math.sqrt(1 + c - n - o);
								this._w = (a - i) / m, this._x = (r + l) / m, this._y = (s + u) / m, this._z = .25 * m
							}
							return this._onChangeCallback(), this
						}
					}, {
						key: "setFromUnitVectors",
						value: function(e, t) {
							var n = e.dot(t) + 1;
							return n < Number.EPSILON ? (n = 0, Math.abs(e.x) > Math.abs(e.z) ? (this._x = -e.y, this._y = e.x, this._z = 0) : (this._x = 0, this._y = -e.z, this._z = e.y)) : (this._x = e.y * t.z - e.z * t.y, this._y = e.z * t.x - e.x * t.z, this._z = e.x * t.y - e.y * t.x), this._w = n, this.normalize()
						}
					}, {
						key: "angleTo",
						value: function(e) {
							return 2 * Math.acos(Math.abs(H(this.dot(e), -1, 1)))
						}
					}, {
						key: "rotateTowards",
						value: function(e, t) {
							var n = this.angleTo(e);
							if (0 === n) return this;
							var i = Math.min(1, t / n);
							return this.slerp(e, i), this
						}
					}, {
						key: "identity",
						value: function() {
							return this.set(0, 0, 0, 1)
						}
					}, {
						key: "invert",
						value: function() {
							return this.conjugate()
						}
					}, {
						key: "conjugate",
						value: function() {
							return this._x *= -1, this._y *= -1, this._z *= -1, this._onChangeCallback(), this
						}
					}, {
						key: "dot",
						value: function(e) {
							return this._x * e._x + this._y * e._y + this._z * e._z + this._w * e._w
						}
					}, {
						key: "lengthSq",
						value: function() {
							return this._x * this._x + this._y * this._y + this._z * this._z + this._w * this._w
						}
					}, {
						key: "length",
						value: function() {
							return Math.sqrt(this._x * this._x + this._y * this._y + this._z * this._z + this._w * this._w)
						}
					}, {
						key: "normalize",
						value: function() {
							var e = this.length();
							return 0 === e ? (this._x = 0, this._y = 0, this._z = 0, this._w = 1) : (e = 1 / e, this._x = this._x * e, this._y = this._y * e, this._z = this._z * e, this._w = this._w * e), this._onChangeCallback(), this
						}
					}, {
						key: "multiply",
						value: function(e, t) {
							return void 0 !== t ? (console.warn("THREE.Quaternion: .multiply() now only accepts one argument. Use .multiplyQuaternions( a, b ) instead."), this.multiplyQuaternions(e, t)) : this.multiplyQuaternions(this, e)
						}
					}, {
						key: "premultiply",
						value: function(e) {
							return this.multiplyQuaternions(e, this)
						}
					}, {
						key: "multiplyQuaternions",
						value: function(e, t) {
							var n = e._x,
								i = e._y,
								r = e._z,
								a = e._w,
								o = t._x,
								s = t._y,
								l = t._z,
								u = t._w;
							return this._x = n * u + a * o + i * l - r * s, this._y = i * u + a * s + r * o - n * l, this._z = r * u + a * l + n * s - i * o, this._w = a * u - n * o - i * s - r * l, this._onChangeCallback(), this
						}
					}, {
						key: "slerp",
						value: function(e, t) {
							if (0 === t) return this;
							if (1 === t) return this.copy(e);
							var n = this._x,
								i = this._y,
								r = this._z,
								a = this._w,
								o = a * e._w + n * e._x + i * e._y + r * e._z;
							if (o < 0 ? (this._w = -e._w, this._x = -e._x, this._y = -e._y, this._z = -e._z, o = -o) : this.copy(e), o >= 1) return this._w = a, this._x = n, this._y = i, this._z = r, this;
							var s = 1 - o * o;
							if (s <= Number.EPSILON) {
								var l = 1 - t;
								return this._w = l * a + t * this._w, this._x = l * n + t * this._x, this._y = l * i + t * this._y, this._z = l * r + t * this._z, this.normalize(), this._onChangeCallback(), this
							}
							var u = Math.sqrt(s),
								c = Math.atan2(u, o),
								h = Math.sin((1 - t) * c) / u,
								d = Math.sin(t * c) / u;
							return this._w = a * h + this._w * d, this._x = n * h + this._x * d, this._y = i * h + this._y * d, this._z = r * h + this._z * d, this._onChangeCallback(), this
						}
					}, {
						key: "slerpQuaternions",
						value: function(e, t, n) {
							return this.copy(e).slerp(t, n)
						}
					}, {
						key: "random",
						value: function() {
							var e = Math.random(),
								t = Math.sqrt(1 - e),
								n = Math.sqrt(e),
								i = 2 * Math.PI * Math.random(),
								r = 2 * Math.PI * Math.random();
							return this.set(t * Math.cos(i), n * Math.sin(r), n * Math.cos(r), t * Math.sin(i))
						}
					}, {
						key: "equals",
						value: function(e) {
							return e._x === this._x && e._y === this._y && e._z === this._z && e._w === this._w
						}
					}, {
						key: "fromArray",
						value: function(e) {
							var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
							return this._x = e[t], this._y = e[t + 1], this._z = e[t + 2], this._w = e[t + 3], this._onChangeCallback(), this
						}
					}, {
						key: "toArray",
						value: function() {
							var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [],
								t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
							return e[t] = this._x, e[t + 1] = this._y, e[t + 2] = this._z, e[t + 3] = this._w, e
						}
					}, {
						key: "fromBufferAttribute",
						value: function(e, t) {
							return this._x = e.getX(t), this._y = e.getY(t), this._z = e.getZ(t), this._w = e.getW(t), this
						}
					}, {
						key: "_onChange",
						value: function(e) {
							return this._onChangeCallback = e, this
						}
					}, {
						key: "_onChangeCallback",
						value: function() {}
					}], [{
						key: "slerp",
						value: function(e, t, n, i) {
							return console.warn("THREE.Quaternion: Static .slerp() has been deprecated. Use qm.slerpQuaternions( qa, qb, t ) instead."), n.slerpQuaternions(e, t, i)
						}
					}, {
						key: "slerpFlat",
						value: function(e, t, n, i, r, a, o) {
							var s = n[i + 0],
								l = n[i + 1],
								u = n[i + 2],
								c = n[i + 3],
								h = r[a + 0],
								d = r[a + 1],
								f = r[a + 2],
								p = r[a + 3];
							if (0 === o) return e[t + 0] = s, e[t + 1] = l, e[t + 2] = u, void(e[t + 3] = c);
							if (1 === o) return e[t + 0] = h, e[t + 1] = d, e[t + 2] = f, void(e[t + 3] = p);
							if (c !== p || s !== h || l !== d || u !== f) {
								var m = 1 - o,
									v = s * h + l * d + u * f + c * p,
									g = v >= 0 ? 1 : -1,
									y = 1 - v * v;
								if (y > Number.EPSILON) {
									var x = Math.sqrt(y),
										_ = Math.atan2(x, v * g);
									m = Math.sin(m * _) / x, o = Math.sin(o * _) / x
								}
								var b = o * g;
								if (s = s * m + h * b, l = l * m + d * b, u = u * m + f * b, c = c * m + p * b, m === 1 - o) {
									var w = 1 / Math.sqrt(s * s + l * l + u * u + c * c);
									s *= w, l *= w, u *= w, c *= w
								}
							}
							e[t] = s, e[t + 1] = l, e[t + 2] = u, e[t + 3] = c
						}
					}, {
						key: "multiplyQuaternionsFlat",
						value: function(e, t, n, i, r, a) {
							var o = n[i],
								s = n[i + 1],
								l = n[i + 2],
								u = n[i + 3],
								c = r[a],
								h = r[a + 1],
								d = r[a + 2],
								f = r[a + 3];
							return e[t] = o * f + u * c + s * d - l * h, e[t + 1] = s * f + u * h + l * c - o * d, e[t + 2] = l * f + u * d + o * h - s * c, e[t + 3] = u * f - o * c - s * h - l * d, e
						}
					}]), e
				}();
				el.prototype.isQuaternion = !0;
				var eu = function() {
					function e() {
						var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
							n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
							i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
						d(this, e), this.x = t, this.y = n, this.z = i
					}
					return p(e, [{
						key: "set",
						value: function(e, t, n) {
							return void 0 === n && (n = this.z), this.x = e, this.y = t, this.z = n, this
						}
					}, {
						key: "setScalar",
						value: function(e) {
							return this.x = e, this.y = e, this.z = e, this
						}
					}, {
						key: "setX",
						value: function(e) {
							return this.x = e, this
						}
					}, {
						key: "setY",
						value: function(e) {
							return this.y = e, this
						}
					}, {
						key: "setZ",
						value: function(e) {
							return this.z = e, this
						}
					}, {
						key: "setComponent",
						value: function(e, t) {
							switch (e) {
								case 0:
									this.x = t;
									break;
								case 1:
									this.y = t;
									break;
								case 2:
									this.z = t;
									break;
								default:
									throw Error("index is out of range: " + e)
							}
							return this
						}
					}, {
						key: "getComponent",
						value: function(e) {
							switch (e) {
								case 0:
									return this.x;
								case 1:
									return this.y;
								case 2:
									return this.z;
								default:
									throw Error("index is out of range: " + e)
							}
						}
					}, {
						key: "clone",
						value: function() {
							return new this.constructor(this.x, this.y, this.z)
						}
					}, {
						key: "copy",
						value: function(e) {
							return this.x = e.x, this.y = e.y, this.z = e.z, this
						}
					}, {
						key: "add",
						value: function(e, t) {
							return void 0 !== t ? (console.warn("THREE.Vector3: .add() now only accepts one argument. Use .addVectors( a, b ) instead."), this.addVectors(e, t)) : (this.x += e.x, this.y += e.y, this.z += e.z, this)
						}
					}, {
						key: "addScalar",
						value: function(e) {
							return this.x += e, this.y += e, this.z += e, this
						}
					}, {
						key: "addVectors",
						value: function(e, t) {
							return this.x = e.x + t.x, this.y = e.y + t.y, this.z = e.z + t.z, this
						}
					}, {
						key: "addScaledVector",
						value: function(e, t) {
							return this.x += e.x * t, this.y += e.y * t, this.z += e.z * t, this
						}
					}, {
						key: "sub",
						value: function(e, t) {
							return void 0 !== t ? (console.warn("THREE.Vector3: .sub() now only accepts one argument. Use .subVectors( a, b ) instead."), this.subVectors(e, t)) : (this.x -= e.x, this.y -= e.y, this.z -= e.z, this)
						}
					}, {
						key: "subScalar",
						value: function(e) {
							return this.x -= e, this.y -= e, this.z -= e, this
						}
					}, {
						key: "subVectors",
						value: function(e, t) {
							return this.x = e.x - t.x, this.y = e.y - t.y, this.z = e.z - t.z, this
						}
					}, {
						key: "multiply",
						value: function(e, t) {
							return void 0 !== t ? (console.warn("THREE.Vector3: .multiply() now only accepts one argument. Use .multiplyVectors( a, b ) instead."), this.multiplyVectors(e, t)) : (this.x *= e.x, this.y *= e.y, this.z *= e.z, this)
						}
					}, {
						key: "multiplyScalar",
						value: function(e) {
							return this.x *= e, this.y *= e, this.z *= e, this
						}
					}, {
						key: "multiplyVectors",
						value: function(e, t) {
							return this.x = e.x * t.x, this.y = e.y * t.y, this.z = e.z * t.z, this
						}
					}, {
						key: "applyEuler",
						value: function(e) {
							return e && e.isEuler || console.error("THREE.Vector3: .applyEuler() now expects an Euler rotation rather than a Vector3 and order."), this.applyQuaternion(eh.setFromEuler(e))
						}
					}, {
						key: "applyAxisAngle",
						value: function(e, t) {
							return this.applyQuaternion(eh.setFromAxisAngle(e, t))
						}
					}, {
						key: "applyMatrix3",
						value: function(e) {
							var t = this.x,
								n = this.y,
								i = this.z,
								r = e.elements;
							return this.x = r[0] * t + r[3] * n + r[6] * i, this.y = r[1] * t + r[4] * n + r[7] * i, this.z = r[2] * t + r[5] * n + r[8] * i, this
						}
					}, {
						key: "applyNormalMatrix",
						value: function(e) {
							return this.applyMatrix3(e).normalize()
						}
					}, {
						key: "applyMatrix4",
						value: function(e) {
							var t = this.x,
								n = this.y,
								i = this.z,
								r = e.elements,
								a = 1 / (r[3] * t + r[7] * n + r[11] * i + r[15]);
							return this.x = (r[0] * t + r[4] * n + r[8] * i + r[12]) * a, this.y = (r[1] * t + r[5] * n + r[9] * i + r[13]) * a, this.z = (r[2] * t + r[6] * n + r[10] * i + r[14]) * a, this
						}
					}, {
						key: "applyQuaternion",
						value: function(e) {
							var t = this.x,
								n = this.y,
								i = this.z,
								r = e.x,
								a = e.y,
								o = e.z,
								s = e.w,
								l = s * t + a * i - o * n,
								u = s * n + o * t - r * i,
								c = s * i + r * n - a * t,
								h = -r * t - a * n - o * i;
							return this.x = l * s + -(h * r) + -(u * o) - -(c * a), this.y = u * s + -(h * a) + -(c * r) - -(l * o), this.z = c * s + -(h * o) + -(l * a) - -(u * r), this
						}
					}, {
						key: "project",
						value: function(e) {
							return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)
						}
					}, {
						key: "unproject",
						value: function(e) {
							return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)
						}
					}, {
						key: "transformDirection",
						value: function(e) {
							var t = this.x,
								n = this.y,
								i = this.z,
								r = e.elements;
							return this.x = r[0] * t + r[4] * n + r[8] * i, this.y = r[1] * t + r[5] * n + r[9] * i, this.z = r[2] * t + r[6] * n + r[10] * i, this.normalize()
						}
					}, {
						key: "divide",
						value: function(e) {
							return this.x /= e.x, this.y /= e.y, this.z /= e.z, this
						}
					}, {
						key: "divideScalar",
						value: function(e) {
							return this.multiplyScalar(1 / e)
						}
					}, {
						key: "min",
						value: function(e) {
							return this.x = Math.min(this.x, e.x), this.y = Math.min(this.y, e.y), this.z = Math.min(this.z, e.z), this
						}
					}, {
						key: "max",
						value: function(e) {
							return this.x = Math.max(this.x, e.x), this.y = Math.max(this.y, e.y), this.z = Math.max(this.z, e.z), this
						}
					}, {
						key: "clamp",
						value: function(e, t) {
							return this.x = Math.max(e.x, Math.min(t.x, this.x)), this.y = Math.max(e.y, Math.min(t.y, this.y)), this.z = Math.max(e.z, Math.min(t.z, this.z)), this
						}
					}, {
						key: "clampScalar",
						value: function(e, t) {
							return this.x = Math.max(e, Math.min(t, this.x)), this.y = Math.max(e, Math.min(t, this.y)), this.z = Math.max(e, Math.min(t, this.z)), this
						}
					}, {
						key: "clampLength",
						value: function(e, t) {
							var n = this.length();
							return this.divideScalar(n || 1).multiplyScalar(Math.max(e, Math.min(t, n)))
						}
					}, {
						key: "floor",
						value: function() {
							return this.x = Math.floor(this.x), this.y = Math.floor(this.y), this.z = Math.floor(this.z), this
						}
					}, {
						key: "ceil",
						value: function() {
							return this.x = Math.ceil(this.x), this.y = Math.ceil(this.y), this.z = Math.ceil(this.z), this
						}
					}, {
						key: "round",
						value: function() {
							return this.x = Math.round(this.x), this.y = Math.round(this.y), this.z = Math.round(this.z), this
						}
					}, {
						key: "roundToZero",
						value: function() {
							return this.x = this.x < 0 ? Math.ceil(this.x) : Math.floor(this.x), this.y = this.y < 0 ? Math.ceil(this.y) : Math.floor(this.y), this.z = this.z < 0 ? Math.ceil(this.z) : Math.floor(this.z), this
						}
					}, {
						key: "negate",
						value: function() {
							return this.x = -this.x, this.y = -this.y, this.z = -this.z, this
						}
					}, {
						key: "dot",
						value: function(e) {
							return this.x * e.x + this.y * e.y + this.z * e.z
						}
					}, {
						key: "lengthSq",
						value: function() {
							return this.x * this.x + this.y * this.y + this.z * this.z
						}
					}, {
						key: "length",
						value: function() {
							return Math.sqrt(this.x * this.x + this.y * this.y + this.z * this.z)
						}
					}, {
						key: "manhattanLength",
						value: function() {
							return Math.abs(this.x) + Math.abs(this.y) + Math.abs(this.z)
						}
					}, {
						key: "normalize",
						value: function() {
							return this.divideScalar(this.length() || 1)
						}
					}, {
						key: "setLength",
						value: function(e) {
							return this.normalize().multiplyScalar(e)
						}
					}, {
						key: "lerp",
						value: function(e, t) {
							return this.x += (e.x - this.x) * t, this.y += (e.y - this.y) * t, this.z += (e.z - this.z) * t, this
						}
					}, {
						key: "lerpVectors",
						value: function(e, t, n) {
							return this.x = e.x + (t.x - e.x) * n, this.y = e.y + (t.y - e.y) * n, this.z = e.z + (t.z - e.z) * n, this
						}
					}, {
						key: "cross",
						value: function(e, t) {
							return void 0 !== t ? (console.warn("THREE.Vector3: .cross() now only accepts one argument. Use .crossVectors( a, b ) instead."), this.crossVectors(e, t)) : this.crossVectors(this, e)
						}
					}, {
						key: "crossVectors",
						value: function(e, t) {
							var n = e.x,
								i = e.y,
								r = e.z,
								a = t.x,
								o = t.y,
								s = t.z;
							return this.x = i * s - r * o, this.y = r * a - n * s, this.z = n * o - i * a, this
						}
					}, {
						key: "projectOnVector",
						value: function(e) {
							var t = e.lengthSq();
							if (0 === t) return this.set(0, 0, 0);
							var n = e.dot(this) / t;
							return this.copy(e).multiplyScalar(n)
						}
					}, {
						key: "projectOnPlane",
						value: function(e) {
							return ec.copy(this).projectOnVector(e), this.sub(ec)
						}
					}, {
						key: "reflect",
						value: function(e) {
							return this.sub(ec.copy(e).multiplyScalar(2 * this.dot(e)))
						}
					}, {
						key: "angleTo",
						value: function(e) {
							var t = Math.sqrt(this.lengthSq() * e.lengthSq());
							return 0 === t ? Math.PI / 2 : Math.acos(H(this.dot(e) / t, -1, 1))
						}
					}, {
						key: "distanceTo",
						value: function(e) {
							return Math.sqrt(this.distanceToSquared(e))
						}
					}, {
						key: "distanceToSquared",
						value: function(e) {
							var t = this.x - e.x,
								n = this.y - e.y,
								i = this.z - e.z;
							return t * t + n * n + i * i
						}
					}, {
						key: "manhattanDistanceTo",
						value: function(e) {
							return Math.abs(this.x - e.x) + Math.abs(this.y - e.y) + Math.abs(this.z - e.z)
						}
					}, {
						key: "setFromSpherical",
						value: function(e) {
							return this.setFromSphericalCoords(e.radius, e.phi, e.theta)
						}
					}, {
						key: "setFromSphericalCoords",
						value: function(e, t, n) {
							var i = Math.sin(t) * e;
							return this.x = i * Math.sin(n), this.y = Math.cos(t) * e, this.z = i * Math.cos(n), this
						}
					}, {
						key: "setFromCylindrical",
						value: function(e) {
							return this.setFromCylindricalCoords(e.radius, e.theta, e.y)
						}
					}, {
						key: "setFromCylindricalCoords",
						value: function(e, t, n) {
							return this.x = e * Math.sin(t), this.y = n, this.z = e * Math.cos(t), this
						}
					}, {
						key: "setFromMatrixPosition",
						value: function(e) {
							var t = e.elements;
							return this.x = t[12], this.y = t[13], this.z = t[14], this
						}
					}, {
						key: "setFromMatrixScale",
						value: function(e) {
							var t = this.setFromMatrixColumn(e, 0).length(),
								n = this.setFromMatrixColumn(e, 1).length(),
								i = this.setFromMatrixColumn(e, 2).length();
							return this.x = t, this.y = n, this.z = i, this
						}
					}, {
						key: "setFromMatrixColumn",
						value: function(e, t) {
							return this.fromArray(e.elements, 4 * t)
						}
					}, {
						key: "setFromMatrix3Column",
						value: function(e, t) {
							return this.fromArray(e.elements, 3 * t)
						}
					}, {
						key: "equals",
						value: function(e) {
							return e.x === this.x && e.y === this.y && e.z === this.z
						}
					}, {
						key: "fromArray",
						value: function(e) {
							var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
							return this.x = e[t], this.y = e[t + 1], this.z = e[t + 2], this
						}
					}, {
						key: "toArray",
						value: function() {
							var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [],
								t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
							return e[t] = this.x, e[t + 1] = this.y, e[t + 2] = this.z, e
						}
					}, {
						key: "fromBufferAttribute",
						value: function(e, t, n) {
							return void 0 !== n && console.warn("THREE.Vector3: offset has been removed from .fromBufferAttribute()."), this.x = e.getX(t), this.y = e.getY(t), this.z = e.getZ(t), this
						}
					}, {
						key: "random",
						value: function() {
							return this.x = Math.random(), this.y = Math.random(), this.z = Math.random(), this
						}
					}, {
						key: "randomDirection",
						value: function() {
							var e = 2 * (Math.random() - .5),
								t = Math.random() * Math.PI * 2,
								n = Math.sqrt(1 - Math.pow(e, 2));
							return this.x = n * Math.cos(t), this.y = n * Math.sin(t), this.z = e, this
						}
					}, {
						key: Symbol.iterator,
						value: function() {
							return M(this, function(e) {
								switch (e.label) {
									case 0:
										return [4, this.x];
									case 1:
										return e.sent(), [4, this.y];
									case 2:
										return e.sent(), [4, this.z];
									case 3:
										return e.sent(), [2]
								}
							})
						}
					}]), e
				}();
				eu.prototype.isVector3 = !0;
				var ec = new eu,
					eh = new el,
					ed = function() {
						function e() {
							var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : new eu(1 / 0, 1 / 0, 1 / 0),
								n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : new eu(-1 / 0, -1 / 0, -1 / 0);
							d(this, e), this.min = t, this.max = n
						}
						return p(e, [{
							key: "set",
							value: function(e, t) {
								return this.min.copy(e), this.max.copy(t), this
							}
						}, {
							key: "setFromArray",
							value: function(e) {
								for (var t = 1 / 0, n = 1 / 0, i = 1 / 0, r = -1 / 0, a = -1 / 0, o = -1 / 0, s = 0, l = e.length; s < l; s += 3) {
									var u = e[s],
										c = e[s + 1],
										h = e[s + 2];
									u < t && (t = u), c < n && (n = c), h < i && (i = h), u > r && (r = u), c > a && (a = c), h > o && (o = h)
								}
								return this.min.set(t, n, i), this.max.set(r, a, o), this
							}
						}, {
							key: "setFromBufferAttribute",
							value: function(e) {
								for (var t = 1 / 0, n = 1 / 0, i = 1 / 0, r = -1 / 0, a = -1 / 0, o = -1 / 0, s = 0, l = e.count; s < l; s++) {
									var u = e.getX(s),
										c = e.getY(s),
										h = e.getZ(s);
									u < t && (t = u), c < n && (n = c), h < i && (i = h), u > r && (r = u), c > a && (a = c), h > o && (o = h)
								}
								return this.min.set(t, n, i), this.max.set(r, a, o), this
							}
						}, {
							key: "setFromPoints",
							value: function(e) {
								this.makeEmpty();
								for (var t = 0, n = e.length; t < n; t++) this.expandByPoint(e[t]);
								return this
							}
						}, {
							key: "setFromCenterAndSize",
							value: function(e, t) {
								var n = ep.copy(t).multiplyScalar(.5);
								return this.min.copy(e).sub(n), this.max.copy(e).add(n), this
							}
						}, {
							key: "setFromObject",
							value: function(e) {
								var t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
								return this.makeEmpty(), this.expandByObject(e, t)
							}
						}, {
							key: "clone",
							value: function() {
								return (new this.constructor).copy(this)
							}
						}, {
							key: "copy",
							value: function(e) {
								return this.min.copy(e.min), this.max.copy(e.max), this
							}
						}, {
							key: "makeEmpty",
							value: function() {
								return this.min.x = this.min.y = this.min.z = 1 / 0, this.max.x = this.max.y = this.max.z = -1 / 0, this
							}
						}, {
							key: "isEmpty",
							value: function() {
								return this.max.x < this.min.x || this.max.y < this.min.y || this.max.z < this.min.z
							}
						}, {
							key: "getCenter",
							value: function(e) {
								return this.isEmpty() ? e.set(0, 0, 0) : e.addVectors(this.min, this.max).multiplyScalar(.5)
							}
						}, {
							key: "getSize",
							value: function(e) {
								return this.isEmpty() ? e.set(0, 0, 0) : e.subVectors(this.max, this.min)
							}
						}, {
							key: "expandByPoint",
							value: function(e) {
								return this.min.min(e), this.max.max(e), this
							}
						}, {
							key: "expandByVector",
							value: function(e) {
								return this.min.sub(e), this.max.add(e), this
							}
						}, {
							key: "expandByScalar",
							value: function(e) {
								return this.min.addScalar(-e), this.max.addScalar(e), this
							}
						}, {
							key: "expandByObject",
							value: function(e) {
								var t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
								e.updateWorldMatrix(!1, !1);
								var n = e.geometry;
								if (void 0 !== n) {
									if (t && null != n.attributes && void 0 !== n.attributes.position)
										for (var i = n.attributes.position, r = 0, a = i.count; r < a; r++) ep.fromBufferAttribute(i, r).applyMatrix4(e.matrixWorld), this.expandByPoint(ep);
									else null === n.boundingBox && n.computeBoundingBox(), em.copy(n.boundingBox), em.applyMatrix4(e.matrixWorld), this.union(em)
								}
								for (var o = e.children, s = 0, l = o.length; s < l; s++) this.expandByObject(o[s], t);
								return this
							}
						}, {
							key: "containsPoint",
							value: function(e) {
								return !(e.x < this.min.x || e.x > this.max.x || e.y < this.min.y || e.y > this.max.y || e.z < this.min.z || e.z > this.max.z)
							}
						}, {
							key: "containsBox",
							value: function(e) {
								return this.min.x <= e.min.x && e.max.x <= this.max.x && this.min.y <= e.min.y && e.max.y <= this.max.y && this.min.z <= e.min.z && e.max.z <= this.max.z
							}
						}, {
							key: "getParameter",
							value: function(e, t) {
								return t.set((e.x - this.min.x) / (this.max.x - this.min.x), (e.y - this.min.y) / (this.max.y - this.min.y), (e.z - this.min.z) / (this.max.z - this.min.z))
							}
						}, {
							key: "intersectsBox",
							value: function(e) {
								return !(e.max.x < this.min.x || e.min.x > this.max.x || e.max.y < this.min.y || e.min.y > this.max.y || e.max.z < this.min.z || e.min.z > this.max.z)
							}
						}, {
							key: "intersectsSphere",
							value: function(e) {
								return this.clampPoint(e.center, ep), ep.distanceToSquared(e.center) <= e.radius * e.radius
							}
						}, {
							key: "intersectsPlane",
							value: function(e) {
								var t, n;
								return e.normal.x > 0 ? (t = e.normal.x * this.min.x, n = e.normal.x * this.max.x) : (t = e.normal.x * this.max.x, n = e.normal.x * this.min.x), e.normal.y > 0 ? (t += e.normal.y * this.min.y, n += e.normal.y * this.max.y) : (t += e.normal.y * this.max.y, n += e.normal.y * this.min.y), e.normal.z > 0 ? (t += e.normal.z * this.min.z, n += e.normal.z * this.max.z) : (t += e.normal.z * this.max.z, n += e.normal.z * this.min.z), t <= -e.constant && n >= -e.constant
							}
						}, {
							key: "intersectsTriangle",
							value: function(e) {
								if (this.isEmpty()) return !1;
								this.getCenter(ew), eM.subVectors(this.max, ew), ev.subVectors(e.a, ew), eg.subVectors(e.b, ew), ey.subVectors(e.c, ew), ex.subVectors(eg, ev), e_.subVectors(ey, eg), eb.subVectors(ev, ey);
								var t = [0, -ex.z, ex.y, 0, -e_.z, e_.y, 0, -eb.z, eb.y, ex.z, 0, -ex.x, e_.z, 0, -e_.x, eb.z, 0, -eb.x, -ex.y, ex.x, 0, -e_.y, e_.x, 0, -eb.y, eb.x, 0];
								return !!eE(t, ev, eg, ey, eM) && !!eE(t = [1, 0, 0, 0, 1, 0, 0, 0, 1], ev, eg, ey, eM) && (eS.crossVectors(ex, e_), eE(t = [eS.x, eS.y, eS.z], ev, eg, ey, eM))
							}
						}, {
							key: "clampPoint",
							value: function(e, t) {
								return t.copy(e).clamp(this.min, this.max)
							}
						}, {
							key: "distanceToPoint",
							value: function(e) {
								return ep.copy(e).clamp(this.min, this.max).sub(e).length()
							}
						}, {
							key: "getBoundingSphere",
							value: function(e) {
								return this.getCenter(e.center), e.radius = .5 * this.getSize(ep).length(), e
							}
						}, {
							key: "intersect",
							value: function(e) {
								return this.min.max(e.min), this.max.min(e.max), this.isEmpty() && this.makeEmpty(), this
							}
						}, {
							key: "union",
							value: function(e) {
								return this.min.min(e.min), this.max.max(e.max), this
							}
						}, {
							key: "applyMatrix4",
							value: function(e) {
								return this.isEmpty() || (ef[0].set(this.min.x, this.min.y, this.min.z).applyMatrix4(e), ef[1].set(this.min.x, this.min.y, this.max.z).applyMatrix4(e), ef[2].set(this.min.x, this.max.y, this.min.z).applyMatrix4(e), ef[3].set(this.min.x, this.max.y, this.max.z).applyMatrix4(e), ef[4].set(this.max.x, this.min.y, this.min.z).applyMatrix4(e), ef[5].set(this.max.x, this.min.y, this.max.z).applyMatrix4(e), ef[6].set(this.max.x, this.max.y, this.min.z).applyMatrix4(e), ef[7].set(this.max.x, this.max.y, this.max.z).applyMatrix4(e), this.setFromPoints(ef)), this
							}
						}, {
							key: "translate",
							value: function(e) {
								return this.min.add(e), this.max.add(e), this
							}
						}, {
							key: "equals",
							value: function(e) {
								return e.min.equals(this.min) && e.max.equals(this.max)
							}
						}]), e
					}();
				ed.prototype.isBox3 = !0;
				var ef = [new eu, new eu, new eu, new eu, new eu, new eu, new eu, new eu],
					ep = new eu,
					em = new ed,
					ev = new eu,
					eg = new eu,
					ey = new eu,
					ex = new eu,
					e_ = new eu,
					eb = new eu,
					ew = new eu,
					eM = new eu,
					eS = new eu,
					eT = new eu;

				function eE(e, t, n, i, r) {
					for (var a = 0, o = e.length - 3; a <= o; a += 3) {
						eT.fromArray(e, a);
						var s = r.x * Math.abs(eT.x) + r.y * Math.abs(eT.y) + r.z * Math.abs(eT.z),
							l = t.dot(eT),
							u = n.dot(eT),
							c = i.dot(eT);
						if (Math.max(-Math.max(l, u, c), Math.min(l, u, c)) > s) return !1
					}
					return !0
				}
				var eA = new ed,
					ek = new eu,
					eR = new eu,
					eL = new eu,
					eC = function() {
						function e() {
							var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : new eu,
								n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : -1;
							d(this, e), this.center = t, this.radius = n
						}
						return p(e, [{
							key: "set",
							value: function(e, t) {
								return this.center.copy(e), this.radius = t, this
							}
						}, {
							key: "setFromPoints",
							value: function(e, t) {
								var n = this.center;
								void 0 !== t ? n.copy(t) : eA.setFromPoints(e).getCenter(n);
								for (var i = 0, r = 0, a = e.length; r < a; r++) i = Math.max(i, n.distanceToSquared(e[r]));
								return this.radius = Math.sqrt(i), this
							}
						}, {
							key: "copy",
							value: function(e) {
								return this.center.copy(e.center), this.radius = e.radius, this
							}
						}, {
							key: "isEmpty",
							value: function() {
								return this.radius < 0
							}
						}, {
							key: "makeEmpty",
							value: function() {
								return this.center.set(0, 0, 0), this.radius = -1, this
							}
						}, {
							key: "containsPoint",
							value: function(e) {
								return e.distanceToSquared(this.center) <= this.radius * this.radius
							}
						}, {
							key: "distanceToPoint",
							value: function(e) {
								return e.distanceTo(this.center) - this.radius
							}
						}, {
							key: "intersectsSphere",
							value: function(e) {
								var t = this.radius + e.radius;
								return e.center.distanceToSquared(this.center) <= t * t
							}
						}, {
							key: "intersectsBox",
							value: function(e) {
								return e.intersectsSphere(this)
							}
						}, {
							key: "intersectsPlane",
							value: function(e) {
								return Math.abs(e.distanceToPoint(this.center)) <= this.radius
							}
						}, {
							key: "clampPoint",
							value: function(e, t) {
								var n = this.center.distanceToSquared(e);
								return t.copy(e), n > this.radius * this.radius && (t.sub(this.center).normalize(), t.multiplyScalar(this.radius).add(this.center)), t
							}
						}, {
							key: "getBoundingBox",
							value: function(e) {
								return this.isEmpty() ? e.makeEmpty() : (e.set(this.center, this.center), e.expandByScalar(this.radius)), e
							}
						}, {
							key: "applyMatrix4",
							value: function(e) {
								return this.center.applyMatrix4(e), this.radius = this.radius * e.getMaxScaleOnAxis(), this
							}
						}, {
							key: "translate",
							value: function(e) {
								return this.center.add(e), this
							}
						}, {
							key: "expandByPoint",
							value: function(e) {
								eL.subVectors(e, this.center);
								var t = eL.lengthSq();
								if (t > this.radius * this.radius) {
									var n = Math.sqrt(t),
										i = .5 * (n - this.radius);
									this.center.add(eL.multiplyScalar(i / n)), this.radius += i
								}
								return this
							}
						}, {
							key: "union",
							value: function(e) {
								return !0 === this.center.equals(e.center) ? eR.set(0, 0, 1).multiplyScalar(e.radius) : eR.subVectors(e.center, this.center).normalize().multiplyScalar(e.radius), this.expandByPoint(ek.copy(e.center).add(eR)), this.expandByPoint(ek.copy(e.center).sub(eR)), this
							}
						}, {
							key: "equals",
							value: function(e) {
								return e.center.equals(this.center) && e.radius === this.radius
							}
						}, {
							key: "clone",
							value: function() {
								return (new this.constructor).copy(this)
							}
						}]), e
					}(),
					eP = new eu,
					eD = new eu,
					eI = new eu,
					eN = new eu,
					eO = new eu,
					ez = new eu,
					eU = new eu,
					eF = function() {
						function e() {
							var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : new eu,
								n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : new eu(0, 0, -1);
							d(this, e), this.origin = t, this.direction = n
						}
						return p(e, [{
							key: "set",
							value: function(e, t) {
								return this.origin.copy(e), this.direction.copy(t), this
							}
						}, {
							key: "copy",
							value: function(e) {
								return this.origin.copy(e.origin), this.direction.copy(e.direction), this
							}
						}, {
							key: "at",
							value: function(e, t) {
								return t.copy(this.direction).multiplyScalar(e).add(this.origin)
							}
						}, {
							key: "lookAt",
							value: function(e) {
								return this.direction.copy(e).sub(this.origin).normalize(), this
							}
						}, {
							key: "recast",
							value: function(e) {
								return this.origin.copy(this.at(e, eP)), this
							}
						}, {
							key: "closestPointToPoint",
							value: function(e, t) {
								t.subVectors(e, this.origin);
								var n = t.dot(this.direction);
								return n < 0 ? t.copy(this.origin) : t.copy(this.direction).multiplyScalar(n).add(this.origin)
							}
						}, {
							key: "distanceToPoint",
							value: function(e) {
								return Math.sqrt(this.distanceSqToPoint(e))
							}
						}, {
							key: "distanceSqToPoint",
							value: function(e) {
								var t = eP.subVectors(e, this.origin).dot(this.direction);
								return t < 0 ? this.origin.distanceToSquared(e) : (eP.copy(this.direction).multiplyScalar(t).add(this.origin), eP.distanceToSquared(e))
							}
						}, {
							key: "distanceSqToSegment",
							value: function(e, t, n, i) {
								eD.copy(e).add(t).multiplyScalar(.5), eI.copy(t).sub(e).normalize(), eN.copy(this.origin).sub(eD);
								var r, a, o, s, l = .5 * e.distanceTo(t),
									u = -this.direction.dot(eI),
									c = eN.dot(this.direction),
									h = -eN.dot(eI),
									d = eN.lengthSq(),
									f = Math.abs(1 - u * u);
								if (f > 0) {
									if (r = u * h - c, a = u * c - h, s = l * f, r >= 0) {
										if (a >= -s) {
											if (a <= s) {
												var p = 1 / f;
												r *= p, a *= p, o = r * (r + u * a + 2 * c) + a * (u * r + a + 2 * h) + d
											} else o = -(r = Math.max(0, -(u * (a = l) + c))) * r + a * (a + 2 * h) + d
										} else o = -(r = Math.max(0, -(u * (a = -l) + c))) * r + a * (a + 2 * h) + d
									} else a <= -s ? (a = (r = Math.max(0, -(-u * l + c))) > 0 ? -l : Math.min(Math.max(-l, -h), l), o = -r * r + a * (a + 2 * h) + d) : a <= s ? (r = 0, o = (a = Math.min(Math.max(-l, -h), l)) * (a + 2 * h) + d) : (a = (r = Math.max(0, -(u * l + c))) > 0 ? l : Math.min(Math.max(-l, -h), l), o = -r * r + a * (a + 2 * h) + d)
								} else a = u > 0 ? -l : l, o = -(r = Math.max(0, -(u * a + c))) * r + a * (a + 2 * h) + d;
								return n && n.copy(this.direction).multiplyScalar(r).add(this.origin), i && i.copy(eI).multiplyScalar(a).add(eD), o
							}
						}, {
							key: "intersectSphere",
							value: function(e, t) {
								eP.subVectors(e.center, this.origin);
								var n = eP.dot(this.direction),
									i = eP.dot(eP) - n * n,
									r = e.radius * e.radius;
								if (i > r) return null;
								var a = Math.sqrt(r - i),
									o = n - a,
									s = n + a;
								return o < 0 && s < 0 ? null : o < 0 ? this.at(s, t) : this.at(o, t)
							}
						}, {
							key: "intersectsSphere",
							value: function(e) {
								return this.distanceSqToPoint(e.center) <= e.radius * e.radius
							}
						}, {
							key: "distanceToPlane",
							value: function(e) {
								var t = e.normal.dot(this.direction);
								if (0 === t) return 0 === e.distanceToPoint(this.origin) ? 0 : null;
								var n = -(this.origin.dot(e.normal) + e.constant) / t;
								return n >= 0 ? n : null
							}
						}, {
							key: "intersectPlane",
							value: function(e, t) {
								var n = this.distanceToPlane(e);
								return null === n ? null : this.at(n, t)
							}
						}, {
							key: "intersectsPlane",
							value: function(e) {
								var t = e.distanceToPoint(this.origin);
								return 0 === t || e.normal.dot(this.direction) * t < 0
							}
						}, {
							key: "intersectBox",
							value: function(e, t) {
								var n, i, r, a, o, s, l = 1 / this.direction.x,
									u = 1 / this.direction.y,
									c = 1 / this.direction.z,
									h = this.origin;
								return l >= 0 ? (n = (e.min.x - h.x) * l, i = (e.max.x - h.x) * l) : (n = (e.max.x - h.x) * l, i = (e.min.x - h.x) * l), u >= 0 ? (r = (e.min.y - h.y) * u, a = (e.max.y - h.y) * u) : (r = (e.max.y - h.y) * u, a = (e.min.y - h.y) * u), n > a || r > i ? null : ((r > n || n != n) && (n = r), (a < i || i != i) && (i = a), c >= 0 ? (o = (e.min.z - h.z) * c, s = (e.max.z - h.z) * c) : (o = (e.max.z - h.z) * c, s = (e.min.z - h.z) * c), n > s || o > i ? null : ((o > n || n != n) && (n = o), (s < i || i != i) && (i = s), i < 0 ? null : this.at(n >= 0 ? n : i, t)))
							}
						}, {
							key: "intersectsBox",
							value: function(e) {
								return null !== this.intersectBox(e, eP)
							}
						}, {
							key: "intersectTriangle",
							value: function(e, t, n, i, r) {
								eO.subVectors(t, e), ez.subVectors(n, e), eU.crossVectors(eO, ez);
								var a, o = this.direction.dot(eU);
								if (o > 0) {
									if (i) return null;
									a = 1
								} else {
									if (!(o < 0)) return null;
									a = -1, o = -o
								}
								eN.subVectors(this.origin, e);
								var s = a * this.direction.dot(ez.crossVectors(eN, ez));
								if (s < 0) return null;
								var l = a * this.direction.dot(eO.cross(eN));
								if (l < 0 || s + l > o) return null;
								var u = -a * eN.dot(eU);
								return u < 0 ? null : this.at(u / o, r)
							}
						}, {
							key: "applyMatrix4",
							value: function(e) {
								return this.origin.applyMatrix4(e), this.direction.transformDirection(e), this
							}
						}, {
							key: "equals",
							value: function(e) {
								return e.origin.equals(this.origin) && e.direction.equals(this.direction)
							}
						}, {
							key: "clone",
							value: function() {
								return (new this.constructor).copy(this)
							}
						}]), e
					}(),
					eB = function() {
						function e() {
							d(this, e), this.elements = [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1], arguments.length > 0 && console.error("THREE.Matrix4: the constructor no longer reads arguments. use .set() instead.")
						}
						return p(e, [{
							key: "set",
							value: function(e, t, n, i, r, a, o, s, l, u, c, h, d, f, p, m) {
								var v = this.elements;
								return v[0] = e, v[4] = t, v[8] = n, v[12] = i, v[1] = r, v[5] = a, v[9] = o, v[13] = s, v[2] = l, v[6] = u, v[10] = c, v[14] = h, v[3] = d, v[7] = f, v[11] = p, v[15] = m, this
							}
						}, {
							key: "identity",
							value: function() {
								return this.set(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1), this
							}
						}, {
							key: "clone",
							value: function() {
								return (new e).fromArray(this.elements)
							}
						}, {
							key: "copy",
							value: function(e) {
								var t = this.elements,
									n = e.elements;
								return t[0] = n[0], t[1] = n[1], t[2] = n[2], t[3] = n[3], t[4] = n[4], t[5] = n[5], t[6] = n[6], t[7] = n[7], t[8] = n[8], t[9] = n[9], t[10] = n[10], t[11] = n[11], t[12] = n[12], t[13] = n[13], t[14] = n[14], t[15] = n[15], this
							}
						}, {
							key: "copyPosition",
							value: function(e) {
								var t = this.elements,
									n = e.elements;
								return t[12] = n[12], t[13] = n[13], t[14] = n[14], this
							}
						}, {
							key: "setFromMatrix3",
							value: function(e) {
								var t = e.elements;
								return this.set(t[0], t[3], t[6], 0, t[1], t[4], t[7], 0, t[2], t[5], t[8], 0, 0, 0, 0, 1), this
							}
						}, {
							key: "extractBasis",
							value: function(e, t, n) {
								return e.setFromMatrixColumn(this, 0), t.setFromMatrixColumn(this, 1), n.setFromMatrixColumn(this, 2), this
							}
						}, {
							key: "makeBasis",
							value: function(e, t, n) {
								return this.set(e.x, t.x, n.x, 0, e.y, t.y, n.y, 0, e.z, t.z, n.z, 0, 0, 0, 0, 1), this
							}
						}, {
							key: "extractRotation",
							value: function(e) {
								var t = this.elements,
									n = e.elements,
									i = 1 / eH.setFromMatrixColumn(e, 0).length(),
									r = 1 / eH.setFromMatrixColumn(e, 1).length(),
									a = 1 / eH.setFromMatrixColumn(e, 2).length();
								return t[0] = n[0] * i, t[1] = n[1] * i, t[2] = n[2] * i, t[3] = 0, t[4] = n[4] * r, t[5] = n[5] * r, t[6] = n[6] * r, t[7] = 0, t[8] = n[8] * a, t[9] = n[9] * a, t[10] = n[10] * a, t[11] = 0, t[12] = 0, t[13] = 0, t[14] = 0, t[15] = 1, this
							}
						}, {
							key: "makeRotationFromEuler",
							value: function(e) {
								e && e.isEuler || console.error("THREE.Matrix4: .makeRotationFromEuler() now expects a Euler rotation rather than a Vector3 and order.");
								var t = this.elements,
									n = e.x,
									i = e.y,
									r = e.z,
									a = Math.cos(n),
									o = Math.sin(n),
									s = Math.cos(i),
									l = Math.sin(i),
									u = Math.cos(r),
									c = Math.sin(r);
								if ("XYZ" === e.order) {
									var h = a * u,
										d = a * c,
										f = o * u,
										p = o * c;
									t[0] = s * u, t[4] = -s * c, t[8] = l, t[1] = d + f * l, t[5] = h - p * l, t[9] = -o * s, t[2] = p - h * l, t[6] = f + d * l, t[10] = a * s
								} else if ("YXZ" === e.order) {
									var m = s * u,
										v = s * c,
										g = l * u,
										y = l * c;
									t[0] = m + y * o, t[4] = g * o - v, t[8] = a * l, t[1] = a * c, t[5] = a * u, t[9] = -o, t[2] = v * o - g, t[6] = y + m * o, t[10] = a * s
								} else if ("ZXY" === e.order) {
									var x = s * u,
										_ = s * c,
										b = l * u,
										w = l * c;
									t[0] = x - w * o, t[4] = -a * c, t[8] = b + _ * o, t[1] = _ + b * o, t[5] = a * u, t[9] = w - x * o, t[2] = -a * l, t[6] = o, t[10] = a * s
								} else if ("ZYX" === e.order) {
									var M = a * u,
										S = a * c,
										T = o * u,
										E = o * c;
									t[0] = s * u, t[4] = T * l - S, t[8] = M * l + E, t[1] = s * c, t[5] = E * l + M, t[9] = S * l - T, t[2] = -l, t[6] = o * s, t[10] = a * s
								} else if ("YZX" === e.order) {
									var A = a * s,
										k = a * l,
										R = o * s,
										L = o * l;
									t[0] = s * u, t[4] = L - A * c, t[8] = R * c + k, t[1] = c, t[5] = a * u, t[9] = -o * u, t[2] = -l * u, t[6] = k * c + R, t[10] = A - L * c
								} else if ("XZY" === e.order) {
									var C = a * s,
										P = a * l,
										D = o * s,
										I = o * l;
									t[0] = s * u, t[4] = -c, t[8] = l * u, t[1] = C * c + I, t[5] = a * u, t[9] = P * c - D, t[2] = D * c - P, t[6] = o * u, t[10] = I * c + C
								}
								return t[3] = 0, t[7] = 0, t[11] = 0, t[12] = 0, t[13] = 0, t[14] = 0, t[15] = 1, this
							}
						}, {
							key: "makeRotationFromQuaternion",
							value: function(e) {
								return this.compose(eG, e, eW)
							}
						}, {
							key: "lookAt",
							value: function(e, t, n) {
								var i = this.elements;
								return eX.subVectors(e, t), 0 === eX.lengthSq() && (eX.z = 1), eX.normalize(), ej.crossVectors(n, eX), 0 === ej.lengthSq() && (1 === Math.abs(n.z) ? eX.x += 1e-4 : eX.z += 1e-4, eX.normalize(), ej.crossVectors(n, eX)), ej.normalize(), eq.crossVectors(eX, ej), i[0] = ej.x, i[4] = eq.x, i[8] = eX.x, i[1] = ej.y, i[5] = eq.y, i[9] = eX.y, i[2] = ej.z, i[6] = eq.z, i[10] = eX.z, this
							}
						}, {
							key: "multiply",
							value: function(e, t) {
								return void 0 !== t ? (console.warn("THREE.Matrix4: .multiply() now only accepts one argument. Use .multiplyMatrices( a, b ) instead."), this.multiplyMatrices(e, t)) : this.multiplyMatrices(this, e)
							}
						}, {
							key: "premultiply",
							value: function(e) {
								return this.multiplyMatrices(e, this)
							}
						}, {
							key: "multiplyMatrices",
							value: function(e, t) {
								var n = e.elements,
									i = t.elements,
									r = this.elements,
									a = n[0],
									o = n[4],
									s = n[8],
									l = n[12],
									u = n[1],
									c = n[5],
									h = n[9],
									d = n[13],
									f = n[2],
									p = n[6],
									m = n[10],
									v = n[14],
									g = n[3],
									y = n[7],
									x = n[11],
									_ = n[15],
									b = i[0],
									w = i[4],
									M = i[8],
									S = i[12],
									T = i[1],
									E = i[5],
									A = i[9],
									k = i[13],
									R = i[2],
									L = i[6],
									C = i[10],
									P = i[14],
									D = i[3],
									I = i[7],
									N = i[11],
									O = i[15];
								return r[0] = a * b + o * T + s * R + l * D, r[4] = a * w + o * E + s * L + l * I, r[8] = a * M + o * A + s * C + l * N, r[12] = a * S + o * k + s * P + l * O, r[1] = u * b + c * T + h * R + d * D, r[5] = u * w + c * E + h * L + d * I, r[9] = u * M + c * A + h * C + d * N, r[13] = u * S + c * k + h * P + d * O, r[2] = f * b + p * T + m * R + v * D, r[6] = f * w + p * E + m * L + v * I, r[10] = f * M + p * A + m * C + v * N, r[14] = f * S + p * k + m * P + v * O, r[3] = g * b + y * T + x * R + _ * D, r[7] = g * w + y * E + x * L + _ * I, r[11] = g * M + y * A + x * C + _ * N, r[15] = g * S + y * k + x * P + _ * O, this
							}
						}, {
							key: "multiplyScalar",
							value: function(e) {
								var t = this.elements;
								return t[0] *= e, t[4] *= e, t[8] *= e, t[12] *= e, t[1] *= e, t[5] *= e, t[9] *= e, t[13] *= e, t[2] *= e, t[6] *= e, t[10] *= e, t[14] *= e, t[3] *= e, t[7] *= e, t[11] *= e, t[15] *= e, this
							}
						}, {
							key: "determinant",
							value: function() {
								var e = this.elements,
									t = e[0],
									n = e[4],
									i = e[8],
									r = e[12],
									a = e[1],
									o = e[5],
									s = e[9],
									l = e[13],
									u = e[2],
									c = e[6],
									h = e[10],
									d = e[14];
								return e[3] * (+r * s * c - i * l * c - r * o * h + n * l * h + i * o * d - n * s * d) + e[7] * (+t * s * d - t * l * h + r * a * h - i * a * d + i * l * u - r * s * u) + e[11] * (+t * l * c - t * o * d - r * a * c + n * a * d + r * o * u - n * l * u) + e[15] * (-i * o * u - t * s * c + t * o * h + i * a * c - n * a * h + n * s * u)
							}
						}, {
							key: "transpose",
							value: function() {
								var e, t = this.elements;
								return e = t[1], t[1] = t[4], t[4] = e, e = t[2], t[2] = t[8], t[8] = e, e = t[6], t[6] = t[9], t[9] = e, e = t[3], t[3] = t[12], t[12] = e, e = t[7], t[7] = t[13], t[13] = e, e = t[11], t[11] = t[14], t[14] = e, this
							}
						}, {
							key: "setPosition",
							value: function(e, t, n) {
								var i = this.elements;
								return e.isVector3 ? (i[12] = e.x, i[13] = e.y, i[14] = e.z) : (i[12] = e, i[13] = t, i[14] = n), this
							}
						}, {
							key: "invert",
							value: function() {
								var e = this.elements,
									t = e[0],
									n = e[1],
									i = e[2],
									r = e[3],
									a = e[4],
									o = e[5],
									s = e[6],
									l = e[7],
									u = e[8],
									c = e[9],
									h = e[10],
									d = e[11],
									f = e[12],
									p = e[13],
									m = e[14],
									v = e[15],
									g = c * m * l - p * h * l + p * s * d - o * m * d - c * s * v + o * h * v,
									y = f * h * l - u * m * l - f * s * d + a * m * d + u * s * v - a * h * v,
									x = u * p * l - f * c * l + f * o * d - a * p * d - u * o * v + a * c * v,
									_ = f * c * s - u * p * s - f * o * h + a * p * h + u * o * m - a * c * m,
									b = t * g + n * y + i * x + r * _;
								if (0 === b) return this.set(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
								var w = 1 / b;
								return e[0] = g * w, e[1] = (p * h * r - c * m * r - p * i * d + n * m * d + c * i * v - n * h * v) * w, e[2] = (o * m * r - p * s * r + p * i * l - n * m * l - o * i * v + n * s * v) * w, e[3] = (c * s * r - o * h * r - c * i * l + n * h * l + o * i * d - n * s * d) * w, e[4] = y * w, e[5] = (u * m * r - f * h * r + f * i * d - t * m * d - u * i * v + t * h * v) * w, e[6] = (f * s * r - a * m * r - f * i * l + t * m * l + a * i * v - t * s * v) * w, e[7] = (a * h * r - u * s * r + u * i * l - t * h * l - a * i * d + t * s * d) * w, e[8] = x * w, e[9] = (f * c * r - u * p * r - f * n * d + t * p * d + u * n * v - t * c * v) * w, e[10] = (a * p * r - f * o * r + f * n * l - t * p * l - a * n * v + t * o * v) * w, e[11] = (u * o * r - a * c * r - u * n * l + t * c * l + a * n * d - t * o * d) * w, e[12] = _ * w, e[13] = (u * p * i - f * c * i + f * n * h - t * p * h - u * n * m + t * c * m) * w, e[14] = (f * o * i - a * p * i - f * n * s + t * p * s + a * n * m - t * o * m) * w, e[15] = (a * c * i - u * o * i + u * n * s - t * c * s - a * n * h + t * o * h) * w, this
							}
						}, {
							key: "scale",
							value: function(e) {
								var t = this.elements,
									n = e.x,
									i = e.y,
									r = e.z;
								return t[0] *= n, t[4] *= i, t[8] *= r, t[1] *= n, t[5] *= i, t[9] *= r, t[2] *= n, t[6] *= i, t[10] *= r, t[3] *= n, t[7] *= i, t[11] *= r, this
							}
						}, {
							key: "getMaxScaleOnAxis",
							value: function() {
								var e = this.elements;
								return Math.sqrt(Math.max(e[0] * e[0] + e[1] * e[1] + e[2] * e[2], e[4] * e[4] + e[5] * e[5] + e[6] * e[6], e[8] * e[8] + e[9] * e[9] + e[10] * e[10]))
							}
						}, {
							key: "makeTranslation",
							value: function(e, t, n) {
								return this.set(1, 0, 0, e, 0, 1, 0, t, 0, 0, 1, n, 0, 0, 0, 1), this
							}
						}, {
							key: "makeRotationX",
							value: function(e) {
								var t = Math.cos(e),
									n = Math.sin(e);
								return this.set(1, 0, 0, 0, 0, t, -n, 0, 0, n, t, 0, 0, 0, 0, 1), this
							}
						}, {
							key: "makeRotationY",
							value: function(e) {
								var t = Math.cos(e),
									n = Math.sin(e);
								return this.set(t, 0, n, 0, 0, 1, 0, 0, -n, 0, t, 0, 0, 0, 0, 1), this
							}
						}, {
							key: "makeRotationZ",
							value: function(e) {
								var t = Math.cos(e),
									n = Math.sin(e);
								return this.set(t, -n, 0, 0, n, t, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1), this
							}
						}, {
							key: "makeRotationAxis",
							value: function(e, t) {
								var n = Math.cos(t),
									i = Math.sin(t),
									r = 1 - n,
									a = e.x,
									o = e.y,
									s = e.z,
									l = r * a,
									u = r * o;
								return this.set(l * a + n, l * o - i * s, l * s + i * o, 0, l * o + i * s, u * o + n, u * s - i * a, 0, l * s - i * o, u * s + i * a, r * s * s + n, 0, 0, 0, 0, 1), this
							}
						}, {
							key: "makeScale",
							value: function(e, t, n) {
								return this.set(e, 0, 0, 0, 0, t, 0, 0, 0, 0, n, 0, 0, 0, 0, 1), this
							}
						}, {
							key: "makeShear",
							value: function(e, t, n, i, r, a) {
								return this.set(1, n, r, 0, e, 1, a, 0, t, i, 1, 0, 0, 0, 0, 1), this
							}
						}, {
							key: "compose",
							value: function(e, t, n) {
								var i = this.elements,
									r = t._x,
									a = t._y,
									o = t._z,
									s = t._w,
									l = r + r,
									u = a + a,
									c = o + o,
									h = r * l,
									d = r * u,
									f = r * c,
									p = a * u,
									m = a * c,
									v = o * c,
									g = s * l,
									y = s * u,
									x = s * c,
									_ = n.x,
									b = n.y,
									w = n.z;
								return i[0] = (1 - (p + v)) * _, i[1] = (d + x) * _, i[2] = (f - y) * _, i[3] = 0, i[4] = (d - x) * b, i[5] = (1 - (h + v)) * b, i[6] = (m + g) * b, i[7] = 0, i[8] = (f + y) * w, i[9] = (m - g) * w, i[10] = (1 - (h + p)) * w, i[11] = 0, i[12] = e.x, i[13] = e.y, i[14] = e.z, i[15] = 1, this
							}
						}, {
							key: "decompose",
							value: function(e, t, n) {
								var i = this.elements,
									r = eH.set(i[0], i[1], i[2]).length(),
									a = eH.set(i[4], i[5], i[6]).length(),
									o = eH.set(i[8], i[9], i[10]).length();
								0 > this.determinant() && (r = -r), e.x = i[12], e.y = i[13], e.z = i[14], eV.copy(this);
								var s = 1 / r,
									l = 1 / a,
									u = 1 / o;
								return eV.elements[0] *= s, eV.elements[1] *= s, eV.elements[2] *= s, eV.elements[4] *= l, eV.elements[5] *= l, eV.elements[6] *= l, eV.elements[8] *= u, eV.elements[9] *= u, eV.elements[10] *= u, t.setFromRotationMatrix(eV), n.x = r, n.y = a, n.z = o, this
							}
						}, {
							key: "makePerspective",
							value: function(e, t, n, i, r, a) {
								void 0 === a && console.warn("THREE.Matrix4: .makePerspective() has been redefined and has a new signature. Please check the docs.");
								var o = this.elements;
								return o[0] = 2 * r / (t - e), o[4] = 0, o[8] = (t + e) / (t - e), o[12] = 0, o[1] = 0, o[5] = 2 * r / (n - i), o[9] = (n + i) / (n - i), o[13] = 0, o[2] = 0, o[6] = 0, o[10] = -(a + r) / (a - r), o[14] = -2 * a * r / (a - r), o[3] = 0, o[7] = 0, o[11] = -1, o[15] = 0, this
							}
						}, {
							key: "makeOrthographic",
							value: function(e, t, n, i, r, a) {
								var o = this.elements,
									s = 1 / (t - e),
									l = 1 / (n - i),
									u = 1 / (a - r);
								return o[0] = 2 * s, o[4] = 0, o[8] = 0, o[12] = -((t + e) * s), o[1] = 0, o[5] = 2 * l, o[9] = 0, o[13] = -((n + i) * l), o[2] = 0, o[6] = 0, o[10] = -2 * u, o[14] = -((a + r) * u), o[3] = 0, o[7] = 0, o[11] = 0, o[15] = 1, this
							}
						}, {
							key: "equals",
							value: function(e) {
								for (var t = this.elements, n = e.elements, i = 0; i < 16; i++)
									if (t[i] !== n[i]) return !1;
								return !0
							}
						}, {
							key: "fromArray",
							value: function(e) {
								for (var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0, n = 0; n < 16; n++) this.elements[n] = e[n + t];
								return this
							}
						}, {
							key: "toArray",
							value: function() {
								var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [],
									t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
									n = this.elements;
								return e[t] = n[0], e[t + 1] = n[1], e[t + 2] = n[2], e[t + 3] = n[3], e[t + 4] = n[4], e[t + 5] = n[5], e[t + 6] = n[6], e[t + 7] = n[7], e[t + 8] = n[8], e[t + 9] = n[9], e[t + 10] = n[10], e[t + 11] = n[11], e[t + 12] = n[12], e[t + 13] = n[13], e[t + 14] = n[14], e[t + 15] = n[15], e
							}
						}]), e
					}();
				eB.prototype.isMatrix4 = !0;
				var eH = new eu,
					eV = new eB,
					eG = new eu(0, 0, 0),
					eW = new eu(1, 1, 1),
					ej = new eu,
					eq = new eu,
					eX = new eu,
					eY = new eB,
					eJ = new el,
					eZ = function() {
						function e() {
							var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
								n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
								i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
								r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : e.DefaultOrder;
							d(this, e), this._x = t, this._y = n, this._z = i, this._order = r
						}
						return p(e, [{
							key: "x",
							get: function() {
								return this._x
							},
							set: function(e) {
								this._x = e, this._onChangeCallback()
							}
						}, {
							key: "y",
							get: function() {
								return this._y
							},
							set: function(e) {
								this._y = e, this._onChangeCallback()
							}
						}, {
							key: "z",
							get: function() {
								return this._z
							},
							set: function(e) {
								this._z = e, this._onChangeCallback()
							}
						}, {
							key: "order",
							get: function() {
								return this._order
							},
							set: function(e) {
								this._order = e, this._onChangeCallback()
							}
						}, {
							key: "set",
							value: function(e, t, n) {
								var i = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : this._order;
								return this._x = e, this._y = t, this._z = n, this._order = i, this._onChangeCallback(), this
							}
						}, {
							key: "clone",
							value: function() {
								return new this.constructor(this._x, this._y, this._z, this._order)
							}
						}, {
							key: "copy",
							value: function(e) {
								return this._x = e._x, this._y = e._y, this._z = e._z, this._order = e._order, this._onChangeCallback(), this
							}
						}, {
							key: "setFromRotationMatrix",
							value: function(e) {
								var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this._order,
									n = !(arguments.length > 2) || void 0 === arguments[2] || arguments[2],
									i = e.elements,
									r = i[0],
									a = i[4],
									o = i[8],
									s = i[1],
									l = i[5],
									u = i[9],
									c = i[2],
									h = i[6],
									d = i[10];
								switch (t) {
									case "XYZ":
										this._y = Math.asin(H(o, -1, 1)), .9999999 > Math.abs(o) ? (this._x = Math.atan2(-u, d), this._z = Math.atan2(-a, r)) : (this._x = Math.atan2(h, l), this._z = 0);
										break;
									case "YXZ":
										this._x = Math.asin(-H(u, -1, 1)), .9999999 > Math.abs(u) ? (this._y = Math.atan2(o, d), this._z = Math.atan2(s, l)) : (this._y = Math.atan2(-c, r), this._z = 0);
										break;
									case "ZXY":
										this._x = Math.asin(H(h, -1, 1)), .9999999 > Math.abs(h) ? (this._y = Math.atan2(-c, d), this._z = Math.atan2(-a, l)) : (this._y = 0, this._z = Math.atan2(s, r));
										break;
									case "ZYX":
										this._y = Math.asin(-H(c, -1, 1)), .9999999 > Math.abs(c) ? (this._x = Math.atan2(h, d), this._z = Math.atan2(s, r)) : (this._x = 0, this._z = Math.atan2(-a, l));
										break;
									case "YZX":
										this._z = Math.asin(H(s, -1, 1)), .9999999 > Math.abs(s) ? (this._x = Math.atan2(-u, l), this._y = Math.atan2(-c, r)) : (this._x = 0, this._y = Math.atan2(o, d));
										break;
									case "XZY":
										this._z = Math.asin(-H(a, -1, 1)), .9999999 > Math.abs(a) ? (this._x = Math.atan2(h, l), this._y = Math.atan2(o, r)) : (this._x = Math.atan2(-u, d), this._y = 0);
										break;
									default:
										console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: " + t)
								}
								return this._order = t, !0 === n && this._onChangeCallback(), this
							}
						}, {
							key: "setFromQuaternion",
							value: function(e, t, n) {
								return eY.makeRotationFromQuaternion(e), this.setFromRotationMatrix(eY, t, n)
							}
						}, {
							key: "setFromVector3",
							value: function(e) {
								var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this._order;
								return this.set(e.x, e.y, e.z, t)
							}
						}, {
							key: "reorder",
							value: function(e) {
								return eJ.setFromEuler(this), this.setFromQuaternion(eJ, e)
							}
						}, {
							key: "equals",
							value: function(e) {
								return e._x === this._x && e._y === this._y && e._z === this._z && e._order === this._order
							}
						}, {
							key: "fromArray",
							value: function(e) {
								return this._x = e[0], this._y = e[1], this._z = e[2], void 0 !== e[3] && (this._order = e[3]), this._onChangeCallback(), this
							}
						}, {
							key: "toArray",
							value: function() {
								var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [],
									t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
								return e[t] = this._x, e[t + 1] = this._y, e[t + 2] = this._z, e[t + 3] = this._order, e
							}
						}, {
							key: "toVector3",
							value: function(e) {
								return e ? e.set(this._x, this._y, this._z) : new eu(this._x, this._y, this._z)
							}
						}, {
							key: "_onChange",
							value: function(e) {
								return this._onChangeCallback = e, this
							}
						}, {
							key: "_onChangeCallback",
							value: function() {}
						}]), e
					}();
				eZ.prototype.isEuler = !0, eZ.DefaultOrder = "XYZ", eZ.RotationOrders = ["XYZ", "YZX", "ZXY", "XZY", "YXZ", "ZYX"];
				var eK = function() {
						function e() {
							d(this, e), this.mask = 1
						}
						return p(e, [{
							key: "set",
							value: function(e) {
								this.mask = 1 << e >>> 0
							}
						}, {
							key: "enable",
							value: function(e) {
								this.mask |= 1 << e
							}
						}, {
							key: "enableAll",
							value: function() {
								this.mask = -1
							}
						}, {
							key: "toggle",
							value: function(e) {
								this.mask ^= 1 << e
							}
						}, {
							key: "disable",
							value: function(e) {
								this.mask &= ~(1 << e)
							}
						}, {
							key: "disableAll",
							value: function() {
								this.mask = 0
							}
						}, {
							key: "test",
							value: function(e) {
								return !!(this.mask & e.mask)
							}
						}, {
							key: "isEnabled",
							value: function(e) {
								return !!(this.mask & 1 << e)
							}
						}]), e
					}(),
					eQ = 0,
					e$ = new eu,
					e0 = new el,
					e1 = new eB,
					e3 = new eu,
					e2 = new eu,
					e4 = new eu,
					e5 = new el,
					e6 = new eu(1, 0, 0),
					e8 = new eu(0, 1, 0),
					e7 = new eu(0, 0, 1),
					e9 = {
						type: "added"
					},
					te = {
						type: "removed"
					},
					tt = function(e) {
						function t() {
							d(this, t), Object.defineProperty(e = h(this, t), "id", {
								value: eQ++
							}), e.uuid = B(), e.name = "", e.type = "Object3D", e.parent = null, e.children = [], e.up = t.DefaultUp.clone();
							var e, n = new eu,
								i = new eZ,
								r = new el,
								a = new eu(1, 1, 1);
							return i._onChange(function() {
								r.setFromEuler(i, !1)
							}), r._onChange(function() {
								i.setFromQuaternion(r, void 0, !1)
							}), Object.defineProperties(e, {
								position: {
									configurable: !0,
									enumerable: !0,
									value: n
								},
								rotation: {
									configurable: !0,
									enumerable: !0,
									value: i
								},
								quaternion: {
									configurable: !0,
									enumerable: !0,
									value: r
								},
								scale: {
									configurable: !0,
									enumerable: !0,
									value: a
								},
								modelViewMatrix: {
									value: new eB
								},
								normalMatrix: {
									value: new j
								}
							}), e.matrix = new eB, e.matrixWorld = new eB, e.matrixAutoUpdate = t.DefaultMatrixAutoUpdate, e.matrixWorldNeedsUpdate = !1, e.layers = new eK, e.visible = !0, e.castShadow = !1, e.receiveShadow = !1, e.frustumCulled = !0, e.renderOrder = 0, e.animations = [], e.userData = {}, e
						}
						return y(t, e), p(t, [{
							key: "onBeforeRender",
							value: function() {}
						}, {
							key: "onAfterRender",
							value: function() {}
						}, {
							key: "applyMatrix4",
							value: function(e) {
								this.matrixAutoUpdate && this.updateMatrix(), this.matrix.premultiply(e), this.matrix.decompose(this.position, this.quaternion, this.scale)
							}
						}, {
							key: "applyQuaternion",
							value: function(e) {
								return this.quaternion.premultiply(e), this
							}
						}, {
							key: "setRotationFromAxisAngle",
							value: function(e, t) {
								this.quaternion.setFromAxisAngle(e, t)
							}
						}, {
							key: "setRotationFromEuler",
							value: function(e) {
								this.quaternion.setFromEuler(e, !0)
							}
						}, {
							key: "setRotationFromMatrix",
							value: function(e) {
								this.quaternion.setFromRotationMatrix(e)
							}
						}, {
							key: "setRotationFromQuaternion",
							value: function(e) {
								this.quaternion.copy(e)
							}
						}, {
							key: "rotateOnAxis",
							value: function(e, t) {
								return e0.setFromAxisAngle(e, t), this.quaternion.multiply(e0), this
							}
						}, {
							key: "rotateOnWorldAxis",
							value: function(e, t) {
								return e0.setFromAxisAngle(e, t), this.quaternion.premultiply(e0), this
							}
						}, {
							key: "rotateX",
							value: function(e) {
								return this.rotateOnAxis(e6, e)
							}
						}, {
							key: "rotateY",
							value: function(e) {
								return this.rotateOnAxis(e8, e)
							}
						}, {
							key: "rotateZ",
							value: function(e) {
								return this.rotateOnAxis(e7, e)
							}
						}, {
							key: "translateOnAxis",
							value: function(e, t) {
								return e$.copy(e).applyQuaternion(this.quaternion), this.position.add(e$.multiplyScalar(t)), this
							}
						}, {
							key: "translateX",
							value: function(e) {
								return this.translateOnAxis(e6, e)
							}
						}, {
							key: "translateY",
							value: function(e) {
								return this.translateOnAxis(e8, e)
							}
						}, {
							key: "translateZ",
							value: function(e) {
								return this.translateOnAxis(e7, e)
							}
						}, {
							key: "localToWorld",
							value: function(e) {
								return e.applyMatrix4(this.matrixWorld)
							}
						}, {
							key: "worldToLocal",
							value: function(e) {
								return e.applyMatrix4(e1.copy(this.matrixWorld).invert())
							}
						}, {
							key: "lookAt",
							value: function(e, t, n) {
								e.isVector3 ? e3.copy(e) : e3.set(e, t, n);
								var i = this.parent;
								this.updateWorldMatrix(!0, !1), e2.setFromMatrixPosition(this.matrixWorld), this.isCamera || this.isLight ? e1.lookAt(e2, e3, this.up) : e1.lookAt(e3, e2, this.up), this.quaternion.setFromRotationMatrix(e1), i && (e1.extractRotation(i.matrixWorld), e0.setFromRotationMatrix(e1), this.quaternion.premultiply(e0.invert()))
							}
						}, {
							key: "add",
							value: function(e) {
								if (arguments.length > 1) {
									for (var t = 0; t < arguments.length; t++) this.add(arguments[t]);
									return this
								}
								return e === this ? console.error("THREE.Object3D.add: object can't be added as a child of itself.", e) : e && e.isObject3D ? (null !== e.parent && e.parent.remove(e), e.parent = this, this.children.push(e), e.dispatchEvent(e9)) : console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.", e), this
							}
						}, {
							key: "remove",
							value: function(e) {
								if (arguments.length > 1) {
									for (var t = 0; t < arguments.length; t++) this.remove(arguments[t]);
									return this
								}
								var n = this.children.indexOf(e);
								return -1 !== n && (e.parent = null, this.children.splice(n, 1), e.dispatchEvent(te)), this
							}
						}, {
							key: "removeFromParent",
							value: function() {
								var e = this.parent;
								return null !== e && e.remove(this), this
							}
						}, {
							key: "clear",
							value: function() {
								for (var e = 0; e < this.children.length; e++) {
									var t = this.children[e];
									t.parent = null, t.dispatchEvent(te)
								}
								return this.children.length = 0, this
							}
						}, {
							key: "attach",
							value: function(e) {
								return this.updateWorldMatrix(!0, !1), e1.copy(this.matrixWorld).invert(), null !== e.parent && (e.parent.updateWorldMatrix(!0, !1), e1.multiply(e.parent.matrixWorld)), e.applyMatrix4(e1), this.add(e), e.updateWorldMatrix(!1, !0), this
							}
						}, {
							key: "getObjectById",
							value: function(e) {
								return this.getObjectByProperty("id", e)
							}
						}, {
							key: "getObjectByName",
							value: function(e) {
								return this.getObjectByProperty("name", e)
							}
						}, {
							key: "getObjectByProperty",
							value: function(e, t) {
								if (this[e] === t) return this;
								for (var n = 0, i = this.children.length; n < i; n++) {
									var r = this.children[n].getObjectByProperty(e, t);
									if (void 0 !== r) return r
								}
							}
						}, {
							key: "getWorldPosition",
							value: function(e) {
								return this.updateWorldMatrix(!0, !1), e.setFromMatrixPosition(this.matrixWorld)
							}
						}, {
							key: "getWorldQuaternion",
							value: function(e) {
								return this.updateWorldMatrix(!0, !1), this.matrixWorld.decompose(e2, e, e4), e
							}
						}, {
							key: "getWorldScale",
							value: function(e) {
								return this.updateWorldMatrix(!0, !1), this.matrixWorld.decompose(e2, e5, e), e
							}
						}, {
							key: "getWorldDirection",
							value: function(e) {
								this.updateWorldMatrix(!0, !1);
								var t = this.matrixWorld.elements;
								return e.set(t[8], t[9], t[10]).normalize()
							}
						}, {
							key: "raycast",
							value: function() {}
						}, {
							key: "traverse",
							value: function(e) {
								e(this);
								for (var t = this.children, n = 0, i = t.length; n < i; n++) t[n].traverse(e)
							}
						}, {
							key: "traverseVisible",
							value: function(e) {
								if (!1 !== this.visible) {
									e(this);
									for (var t = this.children, n = 0, i = t.length; n < i; n++) t[n].traverseVisible(e)
								}
							}
						}, {
							key: "traverseAncestors",
							value: function(e) {
								var t = this.parent;
								null !== t && (e(t), t.traverseAncestors(e))
							}
						}, {
							key: "updateMatrix",
							value: function() {
								this.matrix.compose(this.position, this.quaternion, this.scale), this.matrixWorldNeedsUpdate = !0
							}
						}, {
							key: "updateMatrixWorld",
							value: function(e) {
								this.matrixAutoUpdate && this.updateMatrix(), (this.matrixWorldNeedsUpdate || e) && (null === this.parent ? this.matrixWorld.copy(this.matrix) : this.matrixWorld.multiplyMatrices(this.parent.matrixWorld, this.matrix), this.matrixWorldNeedsUpdate = !1, e = !0);
								for (var t = this.children, n = 0, i = t.length; n < i; n++) t[n].updateMatrixWorld(e)
							}
						}, {
							key: "updateWorldMatrix",
							value: function(e, t) {
								var n = this.parent;
								if (!0 === e && null !== n && n.updateWorldMatrix(!0, !1), this.matrixAutoUpdate && this.updateMatrix(), null === this.parent ? this.matrixWorld.copy(this.matrix) : this.matrixWorld.multiplyMatrices(this.parent.matrixWorld, this.matrix), !0 === t)
									for (var i = this.children, r = 0, a = i.length; r < a; r++) i[r].updateWorldMatrix(!1, !0)
							}
						}, {
							key: "toJSON",
							value: function(e) {
								var t = void 0 === e || "string" == typeof e,
									n = {};
								t && (e = {
									geometries: {},
									materials: {},
									textures: {},
									images: {},
									shapes: {},
									skeletons: {},
									animations: {}
								}, n.metadata = {
									version: 4.5,
									type: "Object",
									generator: "Object3D.toJSON"
								});
								var i = {};

								function r(t, n) {
									return void 0 === t[n.uuid] && (t[n.uuid] = n.toJSON(e)), n.uuid
								}
								if (i.uuid = this.uuid, i.type = this.type, "" !== this.name && (i.name = this.name), !0 === this.castShadow && (i.castShadow = !0), !0 === this.receiveShadow && (i.receiveShadow = !0), !1 === this.visible && (i.visible = !1), !1 === this.frustumCulled && (i.frustumCulled = !1), 0 !== this.renderOrder && (i.renderOrder = this.renderOrder), "{}" !== JSON.stringify(this.userData) && (i.userData = this.userData), i.layers = this.layers.mask, i.matrix = this.matrix.toArray(), !1 === this.matrixAutoUpdate && (i.matrixAutoUpdate = !1), this.isInstancedMesh && (i.type = "InstancedMesh", i.count = this.count, i.instanceMatrix = this.instanceMatrix.toJSON(), null !== this.instanceColor && (i.instanceColor = this.instanceColor.toJSON())), this.isScene) this.background && (this.background.isColor ? i.background = this.background.toJSON() : this.background.isTexture && (i.background = this.background.toJSON(e).uuid)), this.environment && this.environment.isTexture && (i.environment = this.environment.toJSON(e).uuid);
								else if (this.isMesh || this.isLine || this.isPoints) {
									i.geometry = r(e.geometries, this.geometry);
									var a = this.geometry.parameters;
									if (void 0 !== a && void 0 !== a.shapes) {
										var o = a.shapes;
										if (Array.isArray(o))
											for (var s = 0, l = o.length; s < l; s++) {
												var u = o[s];
												r(e.shapes, u)
											} else r(e.shapes, o)
									}
								}
								if (this.isSkinnedMesh && (i.bindMode = this.bindMode, i.bindMatrix = this.bindMatrix.toArray(), void 0 !== this.skeleton && (r(e.skeletons, this.skeleton), i.skeleton = this.skeleton.uuid)), void 0 !== this.material) {
									if (Array.isArray(this.material)) {
										for (var c = [], h = 0, d = this.material.length; h < d; h++) c.push(r(e.materials, this.material[h]));
										i.material = c
									} else i.material = r(e.materials, this.material)
								}
								if (this.children.length > 0) {
									i.children = [];
									for (var f = 0; f < this.children.length; f++) i.children.push(this.children[f].toJSON(e).object)
								}
								if (this.animations.length > 0) {
									i.animations = [];
									for (var p = 0; p < this.animations.length; p++) {
										var m = this.animations[p];
										i.animations.push(r(e.animations, m))
									}
								}
								if (t) {
									var v = M(e.geometries),
										g = M(e.materials),
										y = M(e.textures),
										x = M(e.images),
										_ = M(e.shapes),
										b = M(e.skeletons),
										w = M(e.animations);
									v.length > 0 && (n.geometries = v), g.length > 0 && (n.materials = g), y.length > 0 && (n.textures = y), x.length > 0 && (n.images = x), _.length > 0 && (n.shapes = _), b.length > 0 && (n.skeletons = b), w.length > 0 && (n.animations = w)
								}
								return n.object = i, n;

								function M(e) {
									var t = [];
									for (var n in e) {
										var i = e[n];
										delete i.metadata, t.push(i)
									}
									return t
								}
							}
						}, {
							key: "clone",
							value: function(e) {
								return (new this.constructor).copy(this, e)
							}
						}, {
							key: "copy",
							value: function(e) {
								var t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1];
								if (this.name = e.name, this.up.copy(e.up), this.position.copy(e.position), this.rotation.order = e.rotation.order, this.quaternion.copy(e.quaternion), this.scale.copy(e.scale), this.matrix.copy(e.matrix), this.matrixWorld.copy(e.matrixWorld), this.matrixAutoUpdate = e.matrixAutoUpdate, this.matrixWorldNeedsUpdate = e.matrixWorldNeedsUpdate, this.layers.mask = e.layers.mask, this.visible = e.visible, this.castShadow = e.castShadow, this.receiveShadow = e.receiveShadow, this.frustumCulled = e.frustumCulled, this.renderOrder = e.renderOrder, this.userData = JSON.parse(JSON.stringify(e.userData)), !0 === t)
									for (var n = 0; n < e.children.length; n++) {
										var i = e.children[n];
										this.add(i.clone())
									}
								return this
							}
						}]), t
					}(N);
				tt.DefaultUp = new eu(0, 1, 0), tt.DefaultMatrixAutoUpdate = !0, tt.prototype.isObject3D = !0;
				var tn = new eu,
					ti = new eu,
					tr = new eu,
					ta = new eu,
					to = new eu,
					ts = new eu,
					tl = new eu,
					tu = new eu,
					tc = new eu,
					th = new eu,
					td = function() {
						function e() {
							var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : new eu,
								n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : new eu,
								i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : new eu;
							d(this, e), this.a = t, this.b = n, this.c = i
						}
						return p(e, [{
							key: "set",
							value: function(e, t, n) {
								return this.a.copy(e), this.b.copy(t), this.c.copy(n), this
							}
						}, {
							key: "setFromPointsAndIndices",
							value: function(e, t, n, i) {
								return this.a.copy(e[t]), this.b.copy(e[n]), this.c.copy(e[i]), this
							}
						}, {
							key: "setFromAttributeAndIndices",
							value: function(e, t, n, i) {
								return this.a.fromBufferAttribute(e, t), this.b.fromBufferAttribute(e, n), this.c.fromBufferAttribute(e, i), this
							}
						}, {
							key: "clone",
							value: function() {
								return (new this.constructor).copy(this)
							}
						}, {
							key: "copy",
							value: function(e) {
								return this.a.copy(e.a), this.b.copy(e.b), this.c.copy(e.c), this
							}
						}, {
							key: "getArea",
							value: function() {
								return tn.subVectors(this.c, this.b), ti.subVectors(this.a, this.b), .5 * tn.cross(ti).length()
							}
						}, {
							key: "getMidpoint",
							value: function(e) {
								return e.addVectors(this.a, this.b).add(this.c).multiplyScalar(1 / 3)
							}
						}, {
							key: "getNormal",
							value: function(t) {
								return e.getNormal(this.a, this.b, this.c, t)
							}
						}, {
							key: "getPlane",
							value: function(e) {
								return e.setFromCoplanarPoints(this.a, this.b, this.c)
							}
						}, {
							key: "getBarycoord",
							value: function(t, n) {
								return e.getBarycoord(t, this.a, this.b, this.c, n)
							}
						}, {
							key: "getUV",
							value: function(t, n, i, r, a) {
								return e.getUV(t, this.a, this.b, this.c, n, i, r, a)
							}
						}, {
							key: "containsPoint",
							value: function(t) {
								return e.containsPoint(t, this.a, this.b, this.c)
							}
						}, {
							key: "isFrontFacing",
							value: function(t) {
								return e.isFrontFacing(this.a, this.b, this.c, t)
							}
						}, {
							key: "intersectsBox",
							value: function(e) {
								return e.intersectsTriangle(this)
							}
						}, {
							key: "closestPointToPoint",
							value: function(e, t) {
								var n, i, r = this.a,
									a = this.b,
									o = this.c;
								to.subVectors(a, r), ts.subVectors(o, r), tu.subVectors(e, r);
								var s = to.dot(tu),
									l = ts.dot(tu);
								if (s <= 0 && l <= 0) return t.copy(r);
								tc.subVectors(e, a);
								var u = to.dot(tc),
									c = ts.dot(tc);
								if (u >= 0 && c <= u) return t.copy(a);
								var h = s * c - u * l;
								if (h <= 0 && s >= 0 && u <= 0) return n = s / (s - u), t.copy(r).addScaledVector(to, n);
								th.subVectors(e, o);
								var d = to.dot(th),
									f = ts.dot(th);
								if (f >= 0 && d <= f) return t.copy(o);
								var p = d * l - s * f;
								if (p <= 0 && l >= 0 && f <= 0) return i = l / (l - f), t.copy(r).addScaledVector(ts, i);
								var m = u * f - d * c;
								if (m <= 0 && c - u >= 0 && d - f >= 0) return tl.subVectors(o, a), i = (c - u) / (c - u + (d - f)), t.copy(a).addScaledVector(tl, i);
								var v = 1 / (m + p + h);
								return n = p * v, i = h * v, t.copy(r).addScaledVector(to, n).addScaledVector(ts, i)
							}
						}, {
							key: "equals",
							value: function(e) {
								return e.a.equals(this.a) && e.b.equals(this.b) && e.c.equals(this.c)
							}
						}], [{
							key: "getNormal",
							value: function(e, t, n, i) {
								i.subVectors(n, t), tn.subVectors(e, t), i.cross(tn);
								var r = i.lengthSq();
								return r > 0 ? i.multiplyScalar(1 / Math.sqrt(r)) : i.set(0, 0, 0)
							}
						}, {
							key: "getBarycoord",
							value: function(e, t, n, i, r) {
								tn.subVectors(i, t), ti.subVectors(n, t), tr.subVectors(e, t);
								var a = tn.dot(tn),
									o = tn.dot(ti),
									s = tn.dot(tr),
									l = ti.dot(ti),
									u = ti.dot(tr),
									c = a * l - o * o;
								if (0 === c) return r.set(-2, -1, -1);
								var h = 1 / c,
									d = (l * s - o * u) * h,
									f = (a * u - o * s) * h;
								return r.set(1 - d - f, f, d)
							}
						}, {
							key: "containsPoint",
							value: function(e, t, n, i) {
								return this.getBarycoord(e, t, n, i, ta), ta.x >= 0 && ta.y >= 0 && ta.x + ta.y <= 1
							}
						}, {
							key: "getUV",
							value: function(e, t, n, i, r, a, o, s) {
								return this.getBarycoord(e, t, n, i, ta), s.set(0, 0), s.addScaledVector(r, ta.x), s.addScaledVector(a, ta.y), s.addScaledVector(o, ta.z), s
							}
						}, {
							key: "isFrontFacing",
							value: function(e, t, n, i) {
								return tn.subVectors(n, t), ti.subVectors(e, t), 0 > tn.cross(ti).dot(i)
							}
						}]), e
					}(),
					tf = 0,
					tp = function(e) {
						function t() {
							var e;
							return d(this, t), Object.defineProperty(e = h(this, t), "id", {
								value: tf++
							}), e.uuid = B(), e.name = "", e.type = "Material", e.fog = !0, e.blending = 1, e.side = 0, e.vertexColors = !1, e.opacity = 1, e.transparent = !1, e.blendSrc = 204, e.blendDst = 205, e.blendEquation = 100, e.blendSrcAlpha = null, e.blendDstAlpha = null, e.blendEquationAlpha = null, e.depthFunc = 3, e.depthTest = !0, e.depthWrite = !0, e.stencilWriteMask = 255, e.stencilFunc = 519, e.stencilRef = 0, e.stencilFuncMask = 255, e.stencilFail = 7680, e.stencilZFail = 7680, e.stencilZPass = 7680, e.stencilWrite = !1, e.clippingPlanes = null, e.clipIntersection = !1, e.clipShadows = !1, e.shadowSide = null, e.colorWrite = !0, e.alphaWrite = !0, e.precision = null, e.polygonOffset = !1, e.polygonOffsetFactor = 0, e.polygonOffsetUnits = 0, e.dithering = !1, e.alphaToCoverage = !1, e.premultipliedAlpha = !1, e.visible = !0, e.toneMapped = !0, e.userData = {}, e.version = 0, e._alphaTest = 0, e
						}
						return y(t, e), p(t, [{
							key: "alphaTest",
							get: function() {
								return this._alphaTest
							},
							set: function(e) {
								this._alphaTest > 0 != e > 0 && this.version++, this._alphaTest = e
							}
						}, {
							key: "onBuild",
							value: function() {}
						}, {
							key: "onBeforeRender",
							value: function() {}
						}, {
							key: "onBeforeCompile",
							value: function() {}
						}, {
							key: "customProgramCacheKey",
							value: function() {
								return this.onBeforeCompile.toString()
							}
						}, {
							key: "setValues",
							value: function(e) {
								if (void 0 !== e)
									for (var t in e) {
										var n = e[t];
										if (void 0 === n) {
											console.warn("THREE.Material: '" + t + "' parameter is undefined.");
											continue
										}
										if ("shading" === t) {
											console.warn("THREE." + this.type + ": .shading has been removed. Use the boolean .flatShading instead."), this.flatShading = 1 === n;
											continue
										}
										var i = this[t];
										void 0 !== i ? i && i.isColor ? i.set(n) : i && i.isVector3 && n && n.isVector3 ? i.copy(n) : this[t] = n : console.warn("THREE." + this.type + ": '" + t + "' is not a property of this material.")
									}
							}
						}, {
							key: "toJSON",
							value: function(e) {
								var t = void 0 === e || "string" == typeof e;
								t && (e = {
									textures: {},
									images: {}
								});
								var n = {
									metadata: {
										version: 4.5,
										type: "Material",
										generator: "Material.toJSON"
									}
								};

								function i(e) {
									var t = [];
									for (var n in e) {
										var i = e[n];
										delete i.metadata, t.push(i)
									}
									return t
								}
								if (n.uuid = this.uuid, n.type = this.type, "" !== this.name && (n.name = this.name), this.color && this.color.isColor && (n.color = this.color.getHex()), void 0 !== this.roughness && (n.roughness = this.roughness), void 0 !== this.metalness && (n.metalness = this.metalness), void 0 !== this.sheen && (n.sheen = this.sheen), this.sheenColor && this.sheenColor.isColor && (n.sheenColor = this.sheenColor.getHex()), void 0 !== this.sheenRoughness && (n.sheenRoughness = this.sheenRoughness), this.emissive && this.emissive.isColor && (n.emissive = this.emissive.getHex()), this.emissiveIntensity && 1 !== this.emissiveIntensity && (n.emissiveIntensity = this.emissiveIntensity), this.specular && this.specular.isColor && (n.specular = this.specular.getHex()), void 0 !== this.specularIntensity && (n.specularIntensity = this.specularIntensity), this.specularColor && this.specularColor.isColor && (n.specularColor = this.specularColor.getHex()), void 0 !== this.shininess && (n.shininess = this.shininess), void 0 !== this.clearcoat && (n.clearcoat = this.clearcoat), void 0 !== this.clearcoatRoughness && (n.clearcoatRoughness = this.clearcoatRoughness), this.clearcoatMap && this.clearcoatMap.isTexture && (n.clearcoatMap = this.clearcoatMap.toJSON(e).uuid), this.clearcoatRoughnessMap && this.clearcoatRoughnessMap.isTexture && (n.clearcoatRoughnessMap = this.clearcoatRoughnessMap.toJSON(e).uuid), this.clearcoatNormalMap && this.clearcoatNormalMap.isTexture && (n.clearcoatNormalMap = this.clearcoatNormalMap.toJSON(e).uuid, n.clearcoatNormalScale = this.clearcoatNormalScale.toArray()), this.map && this.map.isTexture && (n.map = this.map.toJSON(e).uuid), this.matcap && this.matcap.isTexture && (n.matcap = this.matcap.toJSON(e).uuid), this.alphaMap && this.alphaMap.isTexture && (n.alphaMap = this.alphaMap.toJSON(e).uuid), this.lightMap && this.lightMap.isTexture && (n.lightMap = this.lightMap.toJSON(e).uuid, n.lightMapIntensity = this.lightMapIntensity), this.aoMap && this.aoMap.isTexture && (n.aoMap = this.aoMap.toJSON(e).uuid, n.aoMapIntensity = this.aoMapIntensity), this.bumpMap && this.bumpMap.isTexture && (n.bumpMap = this.bumpMap.toJSON(e).uuid, n.bumpScale = this.bumpScale), this.normalMap && this.normalMap.isTexture && (n.normalMap = this.normalMap.toJSON(e).uuid, n.normalMapType = this.normalMapType, n.normalScale = this.normalScale.toArray()), this.displacementMap && this.displacementMap.isTexture && (n.displacementMap = this.displacementMap.toJSON(e).uuid, n.displacementScale = this.displacementScale, n.displacementBias = this.displacementBias), this.roughnessMap && this.roughnessMap.isTexture && (n.roughnessMap = this.roughnessMap.toJSON(e).uuid), this.metalnessMap && this.metalnessMap.isTexture && (n.metalnessMap = this.metalnessMap.toJSON(e).uuid), this.emissiveMap && this.emissiveMap.isTexture && (n.emissiveMap = this.emissiveMap.toJSON(e).uuid), this.specularMap && this.specularMap.isTexture && (n.specularMap = this.specularMap.toJSON(e).uuid), this.specularIntensityMap && this.specularIntensityMap.isTexture && (n.specularIntensityMap = this.specularIntensityMap.toJSON(e).uuid), this.specularColorMap && this.specularColorMap.isTexture && (n.specularColorMap = this.specularColorMap.toJSON(e).uuid), this.envMap && this.envMap.isTexture && (n.envMap = this.envMap.toJSON(e).uuid, void 0 !== this.combine && (n.combine = this.combine)), void 0 !== this.envMapIntensity && (n.envMapIntensity = this.envMapIntensity), void 0 !== this.reflectivity && (n.reflectivity = this.reflectivity), void 0 !== this.refractionRatio && (n.refractionRatio = this.refractionRatio), this.gradientMap && this.gradientMap.isTexture && (n.gradientMap = this.gradientMap.toJSON(e).uuid), void 0 !== this.transmission && (n.transmission = this.transmission), this.transmissionMap && this.transmissionMap.isTexture && (n.transmissionMap = this.transmissionMap.toJSON(e).uuid), void 0 !== this.thickness && (n.thickness = this.thickness), this.thicknessMap && this.thicknessMap.isTexture && (n.thicknessMap = this.thicknessMap.toJSON(e).uuid), void 0 !== this.attenuationDistance && (n.attenuationDistance = this.attenuationDistance), void 0 !== this.attenuationColor && (n.attenuationColor = this.attenuationColor.getHex()), void 0 !== this.size && (n.size = this.size), null !== this.shadowSide && (n.shadowSide = this.shadowSide), void 0 !== this.sizeAttenuation && (n.sizeAttenuation = this.sizeAttenuation), 1 !== this.blending && (n.blending = this.blending), 0 !== this.side && (n.side = this.side), this.vertexColors && (n.vertexColors = !0), this.opacity < 1 && (n.opacity = this.opacity), !0 === this.transparent && (n.transparent = this.transparent), n.depthFunc = this.depthFunc, n.depthTest = this.depthTest, n.depthWrite = this.depthWrite, n.colorWrite = this.colorWrite, n.alphaWrite = this.alphaWrite, n.stencilWrite = this.stencilWrite, n.stencilWriteMask = this.stencilWriteMask, n.stencilFunc = this.stencilFunc, n.stencilRef = this.stencilRef, n.stencilFuncMask = this.stencilFuncMask, n.stencilFail = this.stencilFail, n.stencilZFail = this.stencilZFail, n.stencilZPass = this.stencilZPass, this.rotation && 0 !== this.rotation && (n.rotation = this.rotation), !0 === this.polygonOffset && (n.polygonOffset = !0), 0 !== this.polygonOffsetFactor && (n.polygonOffsetFactor = this.polygonOffsetFactor), 0 !== this.polygonOffsetUnits && (n.polygonOffsetUnits = this.polygonOffsetUnits), this.linewidth && 1 !== this.linewidth && (n.linewidth = this.linewidth), void 0 !== this.dashSize && (n.dashSize = this.dashSize), void 0 !== this.gapSize && (n.gapSize = this.gapSize), void 0 !== this.scale && (n.scale = this.scale), !0 === this.dithering && (n.dithering = !0), this.alphaTest > 0 && (n.alphaTest = this.alphaTest), !0 === this.alphaToCoverage && (n.alphaToCoverage = this.alphaToCoverage), !0 === this.premultipliedAlpha && (n.premultipliedAlpha = this.premultipliedAlpha), !0 === this.wireframe && (n.wireframe = this.wireframe), this.wireframeLinewidth > 1 && (n.wireframeLinewidth = this.wireframeLinewidth), "round" !== this.wireframeLinecap && (n.wireframeLinecap = this.wireframeLinecap), "round" !== this.wireframeLinejoin && (n.wireframeLinejoin = this.wireframeLinejoin), !0 === this.flatShading && (n.flatShading = this.flatShading), !1 === this.visible && (n.visible = !1), !1 === this.toneMapped && (n.toneMapped = !1), "{}" !== JSON.stringify(this.userData) && (n.userData = this.userData), t) {
									var r = i(e.textures),
										a = i(e.images);
									r.length > 0 && (n.textures = r), a.length > 0 && (n.images = a)
								}
								return n
							}
						}, {
							key: "clone",
							value: function() {
								return (new this.constructor).copy(this)
							}
						}, {
							key: "copy",
							value: function(e) {
								this.name = e.name, this.fog = e.fog, this.blending = e.blending, this.side = e.side, this.vertexColors = e.vertexColors, this.opacity = e.opacity, this.transparent = e.transparent, this.blendSrc = e.blendSrc, this.blendDst = e.blendDst, this.blendEquation = e.blendEquation, this.blendSrcAlpha = e.blendSrcAlpha, this.blendDstAlpha = e.blendDstAlpha, this.blendEquationAlpha = e.blendEquationAlpha, this.depthFunc = e.depthFunc, this.depthTest = e.depthTest, this.depthWrite = e.depthWrite, this.stencilWriteMask = e.stencilWriteMask, this.stencilFunc = e.stencilFunc, this.stencilRef = e.stencilRef, this.stencilFuncMask = e.stencilFuncMask, this.stencilFail = e.stencilFail, this.stencilZFail = e.stencilZFail, this.stencilZPass = e.stencilZPass, this.stencilWrite = e.stencilWrite;
								var t = e.clippingPlanes,
									n = null;
								if (null !== t) {
									var i = t.length;
									n = Array(i);
									for (var r = 0; r !== i; ++r) n[r] = t[r].clone()
								}
								return this.clippingPlanes = n, this.clipIntersection = e.clipIntersection, this.clipShadows = e.clipShadows, this.shadowSide = e.shadowSide, this.colorWrite = e.colorWrite, this.alphaWrite = e.alphaWrite, this.precision = e.precision, this.polygonOffset = e.polygonOffset, this.polygonOffsetFactor = e.polygonOffsetFactor, this.polygonOffsetUnits = e.polygonOffsetUnits, this.dithering = e.dithering, this.alphaTest = e.alphaTest, this.alphaToCoverage = e.alphaToCoverage, this.premultipliedAlpha = e.premultipliedAlpha, this.visible = e.visible, this.toneMapped = e.toneMapped, this.userData = JSON.parse(JSON.stringify(e.userData)), this
							}
						}, {
							key: "dispose",
							value: function() {
								this.dispatchEvent({
									type: "dispose"
								})
							}
						}, {
							key: "needsUpdate",
							set: function(e) {
								!0 === e && this.version++
							}
						}]), t
					}(N);
				tp.prototype.isMaterial = !0;
				var tm = function(e) {
					function t(e) {
						var n;
						return d(this, t), (n = h(this, t)).type = "MeshBasicMaterial", n.color = new ee(0xffffff), n.map = null, n.lightMap = null, n.lightMapIntensity = 1, n.aoMap = null, n.aoMapIntensity = 1, n.specularMap = null, n.alphaMap = null, n.envMap = null, n.combine = 0, n.reflectivity = 1, n.refractionRatio = .98, n.wireframe = !1, n.wireframeLinewidth = 1, n.wireframeLinecap = "round", n.wireframeLinejoin = "round", n.setValues(e), n
					}
					return y(t, e), p(t, [{
						key: "copy",
						value: function(e) {
							return v(g(t.prototype), "copy", this).call(this, e), this.color.copy(e.color), this.map = e.map, this.lightMap = e.lightMap, this.lightMapIntensity = e.lightMapIntensity, this.aoMap = e.aoMap, this.aoMapIntensity = e.aoMapIntensity, this.specularMap = e.specularMap, this.alphaMap = e.alphaMap, this.envMap = e.envMap, this.combine = e.combine, this.reflectivity = e.reflectivity, this.refractionRatio = e.refractionRatio, this.wireframe = e.wireframe, this.wireframeLinewidth = e.wireframeLinewidth, this.wireframeLinecap = e.wireframeLinecap, this.wireframeLinejoin = e.wireframeLinejoin, this
						}
					}]), t
				}(tp);
				tm.prototype.isMeshBasicMaterial = !0;
				var tv = new eu,
					tg = new W,
					ty = function() {
						function e(t, n, i) {
							if (d(this, e), Array.isArray(t)) throw TypeError("THREE.BufferAttribute: array should be a Typed Array.");
							this.name = "", this.array = t, this.itemSize = n, this.count = void 0 !== t ? t.length / n : 0, this.normalized = !0 === i, this.usage = 35044, this.updateRange = {
								offset: 0,
								count: -1
							}, this.version = 0
						}
						return p(e, [{
							key: "onUploadCallback",
							value: function() {}
						}, {
							key: "needsUpdate",
							set: function(e) {
								!0 === e && this.version++
							}
						}, {
							key: "setUsage",
							value: function(e) {
								return this.usage = e, this
							}
						}, {
							key: "copy",
							value: function(e) {
								return this.name = e.name, this.array = new e.array.constructor(e.array), this.itemSize = e.itemSize, this.count = e.count, this.normalized = e.normalized, this.usage = e.usage, this
							}
						}, {
							key: "copyAt",
							value: function(e, t, n) {
								e *= this.itemSize, n *= t.itemSize;
								for (var i = 0, r = this.itemSize; i < r; i++) this.array[e + i] = t.array[n + i];
								return this
							}
						}, {
							key: "copyArray",
							value: function(e) {
								return this.array.set(e), this
							}
						}, {
							key: "copyColorsArray",
							value: function(e) {
								for (var t = this.array, n = 0, i = 0, r = e.length; i < r; i++) {
									var a = e[i];
									void 0 === a && (console.warn("THREE.BufferAttribute.copyColorsArray(): color is undefined", i), a = new ee), t[n++] = a.r, t[n++] = a.g, t[n++] = a.b
								}
								return this
							}
						}, {
							key: "copyVector2sArray",
							value: function(e) {
								for (var t = this.array, n = 0, i = 0, r = e.length; i < r; i++) {
									var a = e[i];
									void 0 === a && (console.warn("THREE.BufferAttribute.copyVector2sArray(): vector is undefined", i), a = new W), t[n++] = a.x, t[n++] = a.y
								}
								return this
							}
						}, {
							key: "copyVector3sArray",
							value: function(e) {
								for (var t = this.array, n = 0, i = 0, r = e.length; i < r; i++) {
									var a = e[i];
									void 0 === a && (console.warn("THREE.BufferAttribute.copyVector3sArray(): vector is undefined", i), a = new eu), t[n++] = a.x, t[n++] = a.y, t[n++] = a.z
								}
								return this
							}
						}, {
							key: "copyVector4sArray",
							value: function(e) {
								for (var t = this.array, n = 0, i = 0, r = e.length; i < r; i++) {
									var a = e[i];
									void 0 === a && (console.warn("THREE.BufferAttribute.copyVector4sArray(): vector is undefined", i), a = new ea), t[n++] = a.x, t[n++] = a.y, t[n++] = a.z, t[n++] = a.w
								}
								return this
							}
						}, {
							key: "applyMatrix3",
							value: function(e) {
								if (2 === this.itemSize)
									for (var t = 0, n = this.count; t < n; t++) tg.fromBufferAttribute(this, t), tg.applyMatrix3(e), this.setXY(t, tg.x, tg.y);
								else if (3 === this.itemSize)
									for (var i = 0, r = this.count; i < r; i++) tv.fromBufferAttribute(this, i), tv.applyMatrix3(e), this.setXYZ(i, tv.x, tv.y, tv.z);
								return this
							}
						}, {
							key: "applyMatrix4",
							value: function(e) {
								for (var t = 0, n = this.count; t < n; t++) tv.x = this.getX(t), tv.y = this.getY(t), tv.z = this.getZ(t), tv.applyMatrix4(e), this.setXYZ(t, tv.x, tv.y, tv.z);
								return this
							}
						}, {
							key: "applyNormalMatrix",
							value: function(e) {
								for (var t = 0, n = this.count; t < n; t++) tv.x = this.getX(t), tv.y = this.getY(t), tv.z = this.getZ(t), tv.applyNormalMatrix(e), this.setXYZ(t, tv.x, tv.y, tv.z);
								return this
							}
						}, {
							key: "transformDirection",
							value: function(e) {
								for (var t = 0, n = this.count; t < n; t++) tv.x = this.getX(t), tv.y = this.getY(t), tv.z = this.getZ(t), tv.transformDirection(e), this.setXYZ(t, tv.x, tv.y, tv.z);
								return this
							}
						}, {
							key: "set",
							value: function(e) {
								var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
								return this.array.set(e, t), this
							}
						}, {
							key: "getX",
							value: function(e) {
								return this.array[e * this.itemSize]
							}
						}, {
							key: "setX",
							value: function(e, t) {
								return this.array[e * this.itemSize] = t, this
							}
						}, {
							key: "getY",
							value: function(e) {
								return this.array[e * this.itemSize + 1]
							}
						}, {
							key: "setY",
							value: function(e, t) {
								return this.array[e * this.itemSize + 1] = t, this
							}
						}, {
							key: "getZ",
							value: function(e) {
								return this.array[e * this.itemSize + 2]
							}
						}, {
							key: "setZ",
							value: function(e, t) {
								return this.array[e * this.itemSize + 2] = t, this
							}
						}, {
							key: "getW",
							value: function(e) {
								return this.array[e * this.itemSize + 3]
							}
						}, {
							key: "setW",
							value: function(e, t) {
								return this.array[e * this.itemSize + 3] = t, this
							}
						}, {
							key: "setXY",
							value: function(e, t, n) {
								return e *= this.itemSize, this.array[e + 0] = t, this.array[e + 1] = n, this
							}
						}, {
							key: "setXYZ",
							value: function(e, t, n, i) {
								return e *= this.itemSize, this.array[e + 0] = t, this.array[e + 1] = n, this.array[e + 2] = i, this
							}
						}, {
							key: "setXYZW",
							value: function(e, t, n, i, r) {
								return e *= this.itemSize, this.array[e + 0] = t, this.array[e + 1] = n, this.array[e + 2] = i, this.array[e + 3] = r, this
							}
						}, {
							key: "onUpload",
							value: function(e) {
								return this.onUploadCallback = e, this
							}
						}, {
							key: "clone",
							value: function() {
								return new this.constructor(this.array, this.itemSize).copy(this)
							}
						}, {
							key: "toJSON",
							value: function() {
								var e = {
									itemSize: this.itemSize,
									type: this.array.constructor.name,
									array: Array.prototype.slice.call(this.array),
									normalized: this.normalized
								};
								return "" !== this.name && (e.name = this.name), 35044 !== this.usage && (e.usage = this.usage), 0 === this.updateRange.offset && -1 === this.updateRange.count || (e.updateRange = this.updateRange), e
							}
						}]), e
					}();
				ty.prototype.isBufferAttribute = !0;
				var tx = function(e) {
						function t(e, n, i) {
							return d(this, t), h(this, t, [new Uint16Array(e), n, i])
						}
						return y(t, e), t
					}(ty),
					t_ = function(e) {
						function t(e, n, i) {
							return d(this, t), h(this, t, [new Uint32Array(e), n, i])
						}
						return y(t, e), t
					}(ty);
				(function(e) {
					function t(e, n, i) {
						return d(this, t), h(this, t, [new Uint16Array(e), n, i])
					}
					return y(t, e), t
				})(ty).prototype.isFloat16BufferAttribute = !0;
				var tb = function(e) {
						function t(e, n, i) {
							return d(this, t), h(this, t, [new Float32Array(e), n, i])
						}
						return y(t, e), t
					}(ty),
					tw = 0,
					tM = new eB,
					tS = new tt,
					tT = new eu,
					tE = new ed,
					tA = new ed,
					tk = new eu,
					tR = function(e) {
						function t() {
							var e;
							return d(this, t), Object.defineProperty(e = h(this, t), "id", {
								value: tw++
							}), e.uuid = B(), e.name = "", e.type = "BufferGeometry", e.index = null, e.attributes = {}, e.morphAttributes = {}, e.morphTargetsRelative = !1, e.groups = [], e.boundingBox = null, e.boundingSphere = null, e.drawRange = {
								start: 0,
								count: 1 / 0
							}, e.userData = {}, e
						}
						return y(t, e), p(t, [{
							key: "getIndex",
							value: function() {
								return this.index
							}
						}, {
							key: "setIndex",
							value: function(e) {
								return Array.isArray(e) ? this.index = new(q(e) ? t_ : tx)(e, 1) : this.index = e, this
							}
						}, {
							key: "getAttribute",
							value: function(e) {
								return this.attributes[e]
							}
						}, {
							key: "setAttribute",
							value: function(e, t) {
								return this.attributes[e] = t, this
							}
						}, {
							key: "deleteAttribute",
							value: function(e) {
								return delete this.attributes[e], this
							}
						}, {
							key: "hasAttribute",
							value: function(e) {
								return void 0 !== this.attributes[e]
							}
						}, {
							key: "addGroup",
							value: function(e, t) {
								var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
								this.groups.push({
									start: e,
									count: t,
									materialIndex: n
								})
							}
						}, {
							key: "clearGroups",
							value: function() {
								this.groups = []
							}
						}, {
							key: "setDrawRange",
							value: function(e, t) {
								this.drawRange.start = e, this.drawRange.count = t
							}
						}, {
							key: "applyMatrix4",
							value: function(e) {
								var t = this.attributes.position;
								void 0 !== t && (t.applyMatrix4(e), t.needsUpdate = !0);
								var n = this.attributes.normal;
								if (void 0 !== n) {
									var i = (new j).getNormalMatrix(e);
									n.applyNormalMatrix(i), n.needsUpdate = !0
								}
								var r = this.attributes.tangent;
								return void 0 !== r && (r.transformDirection(e), r.needsUpdate = !0), null !== this.boundingBox && this.computeBoundingBox(), null !== this.boundingSphere && this.computeBoundingSphere(), this
							}
						}, {
							key: "applyQuaternion",
							value: function(e) {
								return tM.makeRotationFromQuaternion(e), this.applyMatrix4(tM), this
							}
						}, {
							key: "rotateX",
							value: function(e) {
								return tM.makeRotationX(e), this.applyMatrix4(tM), this
							}
						}, {
							key: "rotateY",
							value: function(e) {
								return tM.makeRotationY(e), this.applyMatrix4(tM), this
							}
						}, {
							key: "rotateZ",
							value: function(e) {
								return tM.makeRotationZ(e), this.applyMatrix4(tM), this
							}
						}, {
							key: "translate",
							value: function(e, t, n) {
								return tM.makeTranslation(e, t, n), this.applyMatrix4(tM), this
							}
						}, {
							key: "scale",
							value: function(e, t, n) {
								return tM.makeScale(e, t, n), this.applyMatrix4(tM), this
							}
						}, {
							key: "lookAt",
							value: function(e) {
								return tS.lookAt(e), tS.updateMatrix(), this.applyMatrix4(tS.matrix), this
							}
						}, {
							key: "center",
							value: function() {
								return this.computeBoundingBox(), this.boundingBox.getCenter(tT).negate(), this.translate(tT.x, tT.y, tT.z), this
							}
						}, {
							key: "setFromPoints",
							value: function(e) {
								for (var t = [], n = 0, i = e.length; n < i; n++) {
									var r = e[n];
									t.push(r.x, r.y, r.z || 0)
								}
								return this.setAttribute("position", new tb(t, 3)), this
							}
						}, {
							key: "computeBoundingBox",
							value: function() {
								null === this.boundingBox && (this.boundingBox = new ed);
								var e = this.attributes.position,
									t = this.morphAttributes.position;
								if (e && e.isGLBufferAttribute) return console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".', this), void this.boundingBox.set(new eu(-1 / 0, -1 / 0, -1 / 0), new eu(1 / 0, 1 / 0, 1 / 0));
								if (void 0 !== e) {
									if (this.boundingBox.setFromBufferAttribute(e), t)
										for (var n = 0, i = t.length; n < i; n++) {
											var r = t[n];
											tE.setFromBufferAttribute(r), this.morphTargetsRelative ? (tk.addVectors(this.boundingBox.min, tE.min), this.boundingBox.expandByPoint(tk), tk.addVectors(this.boundingBox.max, tE.max), this.boundingBox.expandByPoint(tk)) : (this.boundingBox.expandByPoint(tE.min), this.boundingBox.expandByPoint(tE.max))
										}
								} else this.boundingBox.makeEmpty();
								(isNaN(this.boundingBox.min.x) || isNaN(this.boundingBox.min.y) || isNaN(this.boundingBox.min.z)) && console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.', this)
							}
						}, {
							key: "computeBoundingSphere",
							value: function() {
								null === this.boundingSphere && (this.boundingSphere = new eC);
								var e = this.attributes.position,
									t = this.morphAttributes.position;
								if (e && e.isGLBufferAttribute) return console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".', this), void this.boundingSphere.set(new eu, 1 / 0);
								if (e) {
									var n = this.boundingSphere.center;
									if (tE.setFromBufferAttribute(e), t)
										for (var i = 0, r = t.length; i < r; i++) {
											var a = t[i];
											tA.setFromBufferAttribute(a), this.morphTargetsRelative ? (tk.addVectors(tE.min, tA.min), tE.expandByPoint(tk), tk.addVectors(tE.max, tA.max), tE.expandByPoint(tk)) : (tE.expandByPoint(tA.min), tE.expandByPoint(tA.max))
										}
									tE.getCenter(n);
									for (var o = 0, s = 0, l = e.count; s < l; s++) tk.fromBufferAttribute(e, s), o = Math.max(o, n.distanceToSquared(tk));
									if (t)
										for (var u = 0, c = t.length; u < c; u++)
											for (var h = t[u], d = this.morphTargetsRelative, f = 0, p = h.count; f < p; f++) tk.fromBufferAttribute(h, f), d && (tT.fromBufferAttribute(e, f), tk.add(tT)), o = Math.max(o, n.distanceToSquared(tk));
									this.boundingSphere.radius = Math.sqrt(o), isNaN(this.boundingSphere.radius) && console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.', this)
								}
							}
						}, {
							key: "computeTangents",
							value: function() {
								var e = this.index,
									t = this.attributes;
								if (null === e || void 0 === t.position || void 0 === t.normal || void 0 === t.uv) return void console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");
								var n = e.array,
									i = t.position.array,
									r = t.normal.array,
									a = t.uv.array,
									o = i.length / 3;
								void 0 === t.tangent && this.setAttribute("tangent", new ty(new Float32Array(4 * o), 4));
								for (var s = t.tangent.array, l = [], u = [], c = 0; c < o; c++) l[c] = new eu, u[c] = new eu;
								var h = new eu,
									d = new eu,
									f = new eu,
									p = new W,
									m = new W,
									v = new W,
									g = new eu,
									y = new eu,
									x = this.groups;
								0 === x.length && (x = [{
									start: 0,
									count: n.length
								}]);
								for (var _ = 0, b = x.length; _ < b; ++_)
									for (var w = x[_], M = w.start, S = M, T = M + w.count; S < T; S += 3) ! function(e, t, n) {
										h.fromArray(i, 3 * e), d.fromArray(i, 3 * t), f.fromArray(i, 3 * n), p.fromArray(a, 2 * e), m.fromArray(a, 2 * t), v.fromArray(a, 2 * n), d.sub(h), f.sub(h), m.sub(p), v.sub(p);
										var r = 1 / (m.x * v.y - v.x * m.y);
										isFinite(r) && (g.copy(d).multiplyScalar(v.y).addScaledVector(f, -m.y).multiplyScalar(r), y.copy(f).multiplyScalar(m.x).addScaledVector(d, -v.x).multiplyScalar(r), l[e].add(g), l[t].add(g), l[n].add(g), u[e].add(y), u[t].add(y), u[n].add(y))
									}(n[S + 0], n[S + 1], n[S + 2]);
								var E = new eu,
									A = new eu,
									k = new eu,
									R = new eu;

								function L(e) {
									k.fromArray(r, 3 * e), R.copy(k);
									var t = l[e];
									E.copy(t), E.sub(k.multiplyScalar(k.dot(t))).normalize(), A.crossVectors(R, t);
									var n = 0 > A.dot(u[e]) ? -1 : 1;
									s[4 * e] = E.x, s[4 * e + 1] = E.y, s[4 * e + 2] = E.z, s[4 * e + 3] = n
								}
								for (var C = 0, P = x.length; C < P; ++C)
									for (var D = x[C], I = D.start, N = I, O = I + D.count; N < O; N += 3) L(n[N + 0]), L(n[N + 1]), L(n[N + 2])
							}
						}, {
							key: "computeVertexNormals",
							value: function() {
								var e = this.index,
									t = this.getAttribute("position");
								if (void 0 !== t) {
									var n = this.getAttribute("normal");
									if (void 0 === n) n = new ty(new Float32Array(3 * t.count), 3), this.setAttribute("normal", n);
									else
										for (var i = 0, r = n.count; i < r; i++) n.setXYZ(i, 0, 0, 0);
									var a = new eu,
										o = new eu,
										s = new eu,
										l = new eu,
										u = new eu,
										c = new eu,
										h = new eu,
										d = new eu;
									if (e)
										for (var f = 0, p = e.count; f < p; f += 3) {
											var m = e.getX(f + 0),
												v = e.getX(f + 1),
												g = e.getX(f + 2);
											a.fromBufferAttribute(t, m), o.fromBufferAttribute(t, v), s.fromBufferAttribute(t, g), h.subVectors(s, o), d.subVectors(a, o), h.cross(d), l.fromBufferAttribute(n, m), u.fromBufferAttribute(n, v), c.fromBufferAttribute(n, g), l.add(h), u.add(h), c.add(h), n.setXYZ(m, l.x, l.y, l.z), n.setXYZ(v, u.x, u.y, u.z), n.setXYZ(g, c.x, c.y, c.z)
										} else
											for (var y = 0, x = t.count; y < x; y += 3) a.fromBufferAttribute(t, y + 0), o.fromBufferAttribute(t, y + 1), s.fromBufferAttribute(t, y + 2), h.subVectors(s, o), d.subVectors(a, o), h.cross(d), n.setXYZ(y + 0, h.x, h.y, h.z), n.setXYZ(y + 1, h.x, h.y, h.z), n.setXYZ(y + 2, h.x, h.y, h.z);
									this.normalizeNormals(), n.needsUpdate = !0
								}
							}
						}, {
							key: "merge",
							value: function(e, t) {
								if (!e || !e.isBufferGeometry) return void console.error("THREE.BufferGeometry.merge(): geometry not an instance of THREE.BufferGeometry.", e);
								void 0 === t && (t = 0, console.warn("THREE.BufferGeometry.merge(): Overwriting original geometry, starting at offset=0. Use BufferGeometryUtils.mergeBufferGeometries() for lossless merge."));
								var n = this.attributes;
								for (var i in n)
									if (void 0 !== e.attributes[i])
										for (var r = n[i].array, a = e.attributes[i], o = a.array, s = a.itemSize * t, l = Math.min(o.length, r.length - s), u = 0, c = s; u < l; u++, c++) r[c] = o[u];
								return this
							}
						}, {
							key: "normalizeNormals",
							value: function() {
								for (var e = this.attributes.normal, t = 0, n = e.count; t < n; t++) tk.fromBufferAttribute(e, t), tk.normalize(), e.setXYZ(t, tk.x, tk.y, tk.z)
							}
						}, {
							key: "toNonIndexed",
							value: function() {
								function e(e, t) {
									for (var n = e.array, i = e.itemSize, r = e.normalized, a = new n.constructor(t.length * i), o = 0, s = 0, l = 0, u = t.length; l < u; l++) {
										o = e.isInterleavedBufferAttribute ? t[l] * e.data.stride + e.offset : t[l] * i;
										for (var c = 0; c < i; c++) a[s++] = n[o++]
									}
									return new ty(a, i, r)
								}
								if (null === this.index) return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."), this;
								var n = new t,
									i = this.index.array,
									r = this.attributes;
								for (var a in r) {
									var o = e(r[a], i);
									n.setAttribute(a, o)
								}
								var s = this.morphAttributes;
								for (var l in s) {
									for (var u = [], c = s[l], h = 0, d = c.length; h < d; h++) {
										var f = e(c[h], i);
										u.push(f)
									}
									n.morphAttributes[l] = u
								}
								n.morphTargetsRelative = this.morphTargetsRelative;
								for (var p = this.groups, m = 0, v = p.length; m < v; m++) {
									var g = p[m];
									n.addGroup(g.start, g.count, g.materialIndex)
								}
								return n
							}
						}, {
							key: "toJSON",
							value: function() {
								var e = {
									metadata: {
										version: 4.5,
										type: "BufferGeometry",
										generator: "BufferGeometry.toJSON"
									}
								};
								if (e.uuid = this.uuid, e.type = this.type, "" !== this.name && (e.name = this.name), Object.keys(this.userData).length > 0 && (e.userData = this.userData), void 0 !== this.parameters) {
									var t = this.parameters;
									for (var n in t) void 0 !== t[n] && (e[n] = t[n]);
									return e
								}
								e.data = {
									attributes: {}
								};
								var i = this.index;
								null !== i && (e.data.index = {
									type: i.array.constructor.name,
									array: Array.prototype.slice.call(i.array)
								});
								var r = this.attributes;
								for (var a in r) {
									var o = r[a];
									e.data.attributes[a] = o.toJSON(e.data)
								}
								var s = {},
									l = !1;
								for (var u in this.morphAttributes) {
									for (var c = this.morphAttributes[u], h = [], d = 0, f = c.length; d < f; d++) {
										var p = c[d];
										h.push(p.toJSON(e.data))
									}
									h.length > 0 && (s[u] = h, l = !0)
								}
								l && (e.data.morphAttributes = s, e.data.morphTargetsRelative = this.morphTargetsRelative);
								var m = this.groups;
								m.length > 0 && (e.data.groups = JSON.parse(JSON.stringify(m)));
								var v = this.boundingSphere;
								return null !== v && (e.data.boundingSphere = {
									center: v.center.toArray(),
									radius: v.radius
								}), e
							}
						}, {
							key: "clone",
							value: function() {
								return (new this.constructor).copy(this)
							}
						}, {
							key: "copy",
							value: function(e) {
								this.index = null, this.attributes = {}, this.morphAttributes = {}, this.groups = [], this.boundingBox = null, this.boundingSphere = null;
								var t = {};
								this.name = e.name;
								var n = e.index;
								null !== n && this.setIndex(n.clone(t));
								var i = e.attributes;
								for (var r in i) {
									var a = i[r];
									this.setAttribute(r, a.clone(t))
								}
								var o = e.morphAttributes;
								for (var s in o) {
									for (var l = [], u = o[s], c = 0, h = u.length; c < h; c++) l.push(u[c].clone(t));
									this.morphAttributes[s] = l
								}
								this.morphTargetsRelative = e.morphTargetsRelative;
								for (var d = e.groups, f = 0, p = d.length; f < p; f++) {
									var m = d[f];
									this.addGroup(m.start, m.count, m.materialIndex)
								}
								var v = e.boundingBox;
								null !== v && (this.boundingBox = v.clone());
								var g = e.boundingSphere;
								return null !== g && (this.boundingSphere = g.clone()), this.drawRange.start = e.drawRange.start, this.drawRange.count = e.drawRange.count, this.userData = e.userData, void 0 !== e.parameters && (this.parameters = Object.assign({}, e.parameters)), this
							}
						}, {
							key: "dispose",
							value: function() {
								this.dispatchEvent({
									type: "dispose"
								})
							}
						}]), t
					}(N);
				tR.prototype.isBufferGeometry = !0;
				var tL = new eB,
					tC = new eF,
					tP = new eC,
					tD = new eu,
					tI = new eu,
					tN = new eu,
					tO = new eu,
					tz = new eu,
					tU = new eu,
					tF = new eu,
					tB = new eu,
					tH = new eu,
					tV = new W,
					tG = new W,
					tW = new W,
					tj = new eu,
					tq = new eu,
					tX = function(e) {
						function t() {
							var e, n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : new tR,
								i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : new tm;
							return d(this, t), (e = h(this, t)).type = "Mesh", e.geometry = n, e.material = i, e.updateMorphTargets(), e
						}
						return y(t, e), p(t, [{
							key: "copy",
							value: function(e) {
								return v(g(t.prototype), "copy", this).call(this, e), void 0 !== e.morphTargetInfluences && (this.morphTargetInfluences = e.morphTargetInfluences.slice()), void 0 !== e.morphTargetDictionary && (this.morphTargetDictionary = Object.assign({}, e.morphTargetDictionary)), this.material = e.material, this.geometry = e.geometry, this
							}
						}, {
							key: "updateMorphTargets",
							value: function() {
								var e = this.geometry;
								if (e.isBufferGeometry) {
									var t = e.morphAttributes,
										n = Object.keys(t);
									if (n.length > 0) {
										var i = t[n[0]];
										if (void 0 !== i) {
											this.morphTargetInfluences = [], this.morphTargetDictionary = {};
											for (var r = 0, a = i.length; r < a; r++) {
												var o = i[r].name || String(r);
												this.morphTargetInfluences.push(0), this.morphTargetDictionary[o] = r
											}
										}
									}
								} else {
									var s = e.morphTargets;
									void 0 !== s && s.length > 0 && console.error("THREE.Mesh.updateMorphTargets() no longer supports THREE.Geometry. Use THREE.BufferGeometry instead.")
								}
							}
						}, {
							key: "raycast",
							value: function(e, t) {
								var n, i = this.geometry,
									r = this.material,
									a = this.matrixWorld;
								if (void 0 !== r && (null === i.boundingSphere && i.computeBoundingSphere(), tP.copy(i.boundingSphere), tP.applyMatrix4(a), !1 !== e.ray.intersectsSphere(tP)) && (tL.copy(a).invert(), tC.copy(e.ray).applyMatrix4(tL), null === i.boundingBox || !1 !== tC.intersectsBox(i.boundingBox))) {
									if (i.isBufferGeometry) {
										var o = i.index,
											s = i.attributes.position,
											l = i.morphAttributes.position,
											u = i.morphTargetsRelative,
											c = i.attributes.uv,
											h = i.attributes.uv2,
											d = i.groups,
											f = i.drawRange;
										if (null !== o) {
											if (Array.isArray(r))
												for (var p = 0, m = d.length; p < m; p++)
													for (var v = d[p], g = r[v.materialIndex], y = Math.max(v.start, f.start), x = Math.min(o.count, Math.min(v.start + v.count, f.start + f.count)); y < x; y += 3)(n = tY(this, g, e, tC, s, l, u, c, h, o.getX(y), o.getX(y + 1), o.getX(y + 2))) && (n.faceIndex = Math.floor(y / 3), n.face.materialIndex = v.materialIndex, t.push(n));
											else
												for (var _ = Math.max(0, f.start), b = Math.min(o.count, f.start + f.count); _ < b; _ += 3)(n = tY(this, r, e, tC, s, l, u, c, h, o.getX(_), o.getX(_ + 1), o.getX(_ + 2))) && (n.faceIndex = Math.floor(_ / 3), t.push(n))
										} else if (void 0 !== s) {
											if (Array.isArray(r))
												for (var w = 0, M = d.length; w < M; w++)
													for (var S = d[w], T = r[S.materialIndex], E = Math.max(S.start, f.start), A = Math.min(s.count, Math.min(S.start + S.count, f.start + f.count)); E < A; E += 3)(n = tY(this, T, e, tC, s, l, u, c, h, E, E + 1, E + 2)) && (n.faceIndex = Math.floor(E / 3), n.face.materialIndex = S.materialIndex, t.push(n));
											else
												for (var k = Math.max(0, f.start), R = Math.min(s.count, f.start + f.count); k < R; k += 3)(n = tY(this, r, e, tC, s, l, u, c, h, k, k + 1, k + 2)) && (n.faceIndex = Math.floor(k / 3), t.push(n))
										}
									} else i.isGeometry && console.error("THREE.Mesh.raycast() no longer supports THREE.Geometry. Use THREE.BufferGeometry instead.")
								}
							}
						}]), t
					}(tt);

				function tY(e, t, n, i, r, a, o, s, l, u, c, h) {
					tD.fromBufferAttribute(r, u), tI.fromBufferAttribute(r, c), tN.fromBufferAttribute(r, h);
					var d = e.morphTargetInfluences;
					if (a && d) {
						tF.set(0, 0, 0), tB.set(0, 0, 0), tH.set(0, 0, 0);
						for (var f = 0, p = a.length; f < p; f++) {
							var m = d[f],
								v = a[f];
							0 !== m && (tO.fromBufferAttribute(v, u), tz.fromBufferAttribute(v, c), tU.fromBufferAttribute(v, h), o ? (tF.addScaledVector(tO, m), tB.addScaledVector(tz, m), tH.addScaledVector(tU, m)) : (tF.addScaledVector(tO.sub(tD), m), tB.addScaledVector(tz.sub(tI), m), tH.addScaledVector(tU.sub(tN), m)))
						}
						tD.add(tF), tI.add(tB), tN.add(tH)
					}
					e.isSkinnedMesh && (e.boneTransform(u, tD), e.boneTransform(c, tI), e.boneTransform(h, tN));
					var g = function(e, t, n, i, r, a, o, s) {
						if (null === (1 === t.side ? i.intersectTriangle(o, a, r, !0, s) : i.intersectTriangle(r, a, o, 2 !== t.side, s))) return null;
						tq.copy(s), tq.applyMatrix4(e.matrixWorld);
						var l = n.ray.origin.distanceTo(tq);
						return l < n.near || l > n.far ? null : {
							distance: l,
							point: tq.clone(),
							object: e
						}
					}(e, t, n, i, tD, tI, tN, tj);
					if (g) {
						s && (tV.fromBufferAttribute(s, u), tG.fromBufferAttribute(s, c), tW.fromBufferAttribute(s, h), g.uv = td.getUV(tj, tD, tI, tN, tV, tG, tW, new W)), l && (tV.fromBufferAttribute(l, u), tG.fromBufferAttribute(l, c), tW.fromBufferAttribute(l, h), g.uv2 = td.getUV(tj, tD, tI, tN, tV, tG, tW, new W));
						var y = {
							a: u,
							b: c,
							c: h,
							normal: new eu,
							materialIndex: 0
						};
						td.getNormal(tD, tI, tN, y.normal), g.face = y
					}
					return g
				}
				tX.prototype.isMesh = !0;
				var tJ = function(e) {
					function t() {
						var e, n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1,
							i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1,
							r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1,
							a = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 1,
							o = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 1,
							s = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 1;
						d(this, t);
						var l = function(e, t, n, i, r, a, o, s, l, h, d) {
							for (var y = a / l, x = o / h, _ = a / 2, b = o / 2, w = s / 2, M = l + 1, S = h + 1, T = 0, E = 0, A = new eu, k = 0; k < S; k++)
								for (var R = k * x - b, L = 0; L < M; L++) {
									var C = L * y - _;
									A[e] = C * i, A[t] = R * r, A[n] = w, f.push(A.x, A.y, A.z), A[e] = 0, A[t] = 0, A[n] = s > 0 ? 1 : -1, p.push(A.x, A.y, A.z), m.push(L / l), m.push(1 - k / h), T += 1
								}
							for (var P = 0; P < h; P++)
								for (var D = 0; D < l; D++) {
									var I = v + D + M * P,
										N = v + D + M * (P + 1),
										O = v + (D + 1) + M * (P + 1),
										z = v + (D + 1) + M * P;
									c.push(I, N, z), c.push(N, O, z), E += 6
								}
							u.addGroup(g, E, d), g += E, v += T
						};
						(e = h(this, t)).type = "BoxGeometry", e.parameters = {
							width: n,
							height: i,
							depth: r,
							widthSegments: a,
							heightSegments: o,
							depthSegments: s
						};
						var u = e;
						a = Math.floor(a), o = Math.floor(o);
						var c = [],
							f = [],
							p = [],
							m = [],
							v = 0,
							g = 0;
						return l("z", "y", "x", -1, -1, r, i, n, s = Math.floor(s), o, 0), l("z", "y", "x", 1, -1, r, i, -n, s, o, 1), l("x", "z", "y", 1, 1, n, r, i, a, s, 2), l("x", "z", "y", 1, -1, n, r, -i, a, s, 3), l("x", "y", "z", 1, -1, n, i, r, a, o, 4), l("x", "y", "z", -1, -1, n, i, -r, a, o, 5), e.setIndex(c), e.setAttribute("position", new tb(f, 3)), e.setAttribute("normal", new tb(p, 3)), e.setAttribute("uv", new tb(m, 2)), e
					}
					return y(t, e), p(t, null, [{
						key: "fromJSON",
						value: function(e) {
							return new t(e.width, e.height, e.depth, e.widthSegments, e.heightSegments, e.depthSegments)
						}
					}]), t
				}(tR);

				function tZ(e) {
					var t = {};
					for (var n in e)
						for (var i in t[n] = {}, e[n]) {
							var r = e[n][i];
							r && (r.isColor || r.isMatrix3 || r.isMatrix4 || r.isVector2 || r.isVector3 || r.isVector4 || r.isTexture || r.isQuaternion) ? t[n][i] = r.clone() : Array.isArray(r) ? t[n][i] = r.slice() : t[n][i] = r
						}
					return t
				}

				function tK(e) {
					for (var t = {}, n = 0; n < e.length; n++) {
						var i = tZ(e[n]);
						for (var r in i) t[r] = i[r]
					}
					return t
				}
				var tQ = {
						clone: tZ
					},
					t$ = function(e) {
						function t(e) {
							var n;
							return d(this, t), (n = h(this, t)).type = "ShaderMaterial", n.defines = {}, n.uniforms = {}, n.vertexShader = "void main() {\n	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );\n}", n.fragmentShader = "void main() {\n	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );\n}", n.linewidth = 1, n.wireframe = !1, n.wireframeLinewidth = 1, n.fog = !1, n.lights = !1, n.clipping = !1, n.extensions = {
								derivatives: !1,
								fragDepth: !1,
								drawBuffers: !1,
								shaderTextureLOD: !1
							}, n.defaultAttributeValues = {
								color: [1, 1, 1],
								uv: [0, 0],
								uv2: [0, 0]
							}, n.index0AttributeName = void 0, n.uniformsNeedUpdate = !1, n.glslVersion = null, void 0 !== e && (void 0 !== e.attributes && console.error("THREE.ShaderMaterial: attributes should now be defined in THREE.BufferGeometry instead."), n.setValues(e)), n
						}
						return y(t, e), p(t, [{
							key: "copy",
							value: function(e) {
								return v(g(t.prototype), "copy", this).call(this, e), this.fragmentShader = e.fragmentShader, this.vertexShader = e.vertexShader, this.uniforms = tZ(e.uniforms), this.defines = Object.assign({}, e.defines), this.wireframe = e.wireframe, this.wireframeLinewidth = e.wireframeLinewidth, this.lights = e.lights, this.clipping = e.clipping, this.extensions = Object.assign({}, e.extensions), this.glslVersion = e.glslVersion, this
							}
						}, {
							key: "toJSON",
							value: function(e) {
								var n = v(g(t.prototype), "toJSON", this).call(this, e);
								for (var i in n.glslVersion = this.glslVersion, n.uniforms = {}, this.uniforms) {
									var r = this.uniforms[i].value;
									r && r.isTexture ? n.uniforms[i] = {
										type: "t",
										value: r.toJSON(e).uuid
									} : r && r.isColor ? n.uniforms[i] = {
										type: "c",
										value: r.getHex()
									} : r && r.isVector2 ? n.uniforms[i] = {
										type: "v2",
										value: r.toArray()
									} : r && r.isVector3 ? n.uniforms[i] = {
										type: "v3",
										value: r.toArray()
									} : r && r.isVector4 ? n.uniforms[i] = {
										type: "v4",
										value: r.toArray()
									} : r && r.isMatrix3 ? n.uniforms[i] = {
										type: "m3",
										value: r.toArray()
									} : r && r.isMatrix4 ? n.uniforms[i] = {
										type: "m4",
										value: r.toArray()
									} : n.uniforms[i] = {
										value: r
									}
								}
								Object.keys(this.defines).length > 0 && (n.defines = this.defines), n.vertexShader = this.vertexShader, n.fragmentShader = this.fragmentShader;
								var a = {};
								for (var o in this.extensions) !0 === this.extensions[o] && (a[o] = !0);
								return Object.keys(a).length > 0 && (n.extensions = a), n
							}
						}]), t
					}(tp);
				t$.prototype.isShaderMaterial = !0;
				var t0 = function(e) {
					function t() {
						var e;
						return d(this, t), (e = h(this, t)).type = "Camera", e.matrixWorldInverse = new eB, e.projectionMatrix = new eB, e.projectionMatrixInverse = new eB, e
					}
					return y(t, e), p(t, [{
						key: "copy",
						value: function(e, n) {
							return v(g(t.prototype), "copy", this).call(this, e, n), this.matrixWorldInverse.copy(e.matrixWorldInverse), this.projectionMatrix.copy(e.projectionMatrix), this.projectionMatrixInverse.copy(e.projectionMatrixInverse), this
						}
					}, {
						key: "getWorldDirection",
						value: function(e) {
							this.updateWorldMatrix(!0, !1);
							var t = this.matrixWorld.elements;
							return e.set(-t[8], -t[9], -t[10]).normalize()
						}
					}, {
						key: "updateMatrixWorld",
						value: function(e) {
							v(g(t.prototype), "updateMatrixWorld", this).call(this, e), this.matrixWorldInverse.copy(this.matrixWorld).invert()
						}
					}, {
						key: "updateWorldMatrix",
						value: function(e, n) {
							v(g(t.prototype), "updateWorldMatrix", this).call(this, e, n), this.matrixWorldInverse.copy(this.matrixWorld).invert()
						}
					}, {
						key: "clone",
						value: function() {
							return (new this.constructor).copy(this)
						}
					}]), t
				}(tt);
				t0.prototype.isCamera = !0;
				var t1 = function(e) {
					function t() {
						var e, n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 50,
							i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1,
							r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : .1,
							a = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 2e3;
						return d(this, t), (e = h(this, t)).type = "PerspectiveCamera", e.fov = n, e.zoom = 1, e.near = r, e.far = a, e.focus = 10, e.aspect = i, e.view = null, e.filmGauge = 35, e.filmOffset = 0, e.updateProjectionMatrix(), e
					}
					return y(t, e), p(t, [{
						key: "copy",
						value: function(e, n) {
							return v(g(t.prototype), "copy", this).call(this, e, n), this.fov = e.fov, this.zoom = e.zoom, this.near = e.near, this.far = e.far, this.focus = e.focus, this.aspect = e.aspect, this.view = null === e.view ? null : Object.assign({}, e.view), this.filmGauge = e.filmGauge, this.filmOffset = e.filmOffset, this
						}
					}, {
						key: "setFocalLength",
						value: function(e) {
							var t = .5 * this.getFilmHeight() / e;
							this.fov = 2 * F * Math.atan(t), this.updateProjectionMatrix()
						}
					}, {
						key: "getFocalLength",
						value: function() {
							var e = Math.tan(.5 * U * this.fov);
							return .5 * this.getFilmHeight() / e
						}
					}, {
						key: "getEffectiveFOV",
						value: function() {
							return 2 * F * Math.atan(Math.tan(.5 * U * this.fov) / this.zoom)
						}
					}, {
						key: "getFilmWidth",
						value: function() {
							return this.filmGauge * Math.min(this.aspect, 1)
						}
					}, {
						key: "getFilmHeight",
						value: function() {
							return this.filmGauge / Math.max(this.aspect, 1)
						}
					}, {
						key: "setViewOffset",
						value: function(e, t, n, i, r, a) {
							this.aspect = e / t, null === this.view && (this.view = {
								enabled: !0,
								fullWidth: 1,
								fullHeight: 1,
								offsetX: 0,
								offsetY: 0,
								width: 1,
								height: 1
							}), this.view.enabled = !0, this.view.fullWidth = e, this.view.fullHeight = t, this.view.offsetX = n, this.view.offsetY = i, this.view.width = r, this.view.height = a, this.updateProjectionMatrix()
						}
					}, {
						key: "clearViewOffset",
						value: function() {
							null !== this.view && (this.view.enabled = !1), this.updateProjectionMatrix()
						}
					}, {
						key: "updateProjectionMatrix",
						value: function() {
							var e = this.near,
								t = e * Math.tan(.5 * U * this.fov) / this.zoom,
								n = 2 * t,
								i = this.aspect * n,
								r = -.5 * i,
								a = this.view;
							if (null !== this.view && this.view.enabled) {
								var o = a.fullWidth,
									s = a.fullHeight;
								r += a.offsetX * i / o, t -= a.offsetY * n / s, i *= a.width / o, n *= a.height / s
							}
							var l = this.filmOffset;
							0 !== l && (r += e * l / this.getFilmWidth()), this.projectionMatrix.makePerspective(r, r + i, t, t - n, e, this.far), this.projectionMatrixInverse.copy(this.projectionMatrix).invert()
						}
					}, {
						key: "toJSON",
						value: function(e) {
							var n = v(g(t.prototype), "toJSON", this).call(this, e);
							return n.object.fov = this.fov, n.object.zoom = this.zoom, n.object.near = this.near, n.object.far = this.far, n.object.focus = this.focus, n.object.aspect = this.aspect, null !== this.view && (n.object.view = Object.assign({}, this.view)), n.object.filmGauge = this.filmGauge, n.object.filmOffset = this.filmOffset, n
						}
					}]), t
				}(t0);
				t1.prototype.isPerspectiveCamera = !0;
				var t3 = function(e) {
						function t(e, n, i) {
							if (d(this, t), (r = h(this, t)).type = "CubeCamera", !0 !== i.isWebGLCubeRenderTarget) return x(r, void console.error("THREE.CubeCamera: The constructor now expects an instance of WebGLCubeRenderTarget as third parameter."));
							r.renderTarget = i;
							var r, a = new t1(90, 1, e, n);
							a.layers = r.layers, a.up.set(0, -1, 0), a.lookAt(new eu(1, 0, 0)), r.add(a);
							var o = new t1(90, 1, e, n);
							o.layers = r.layers, o.up.set(0, -1, 0), o.lookAt(new eu(-1, 0, 0)), r.add(o);
							var s = new t1(90, 1, e, n);
							s.layers = r.layers, s.up.set(0, 0, 1), s.lookAt(new eu(0, 1, 0)), r.add(s);
							var l = new t1(90, 1, e, n);
							l.layers = r.layers, l.up.set(0, 0, -1), l.lookAt(new eu(0, -1, 0)), r.add(l);
							var u = new t1(90, 1, e, n);
							u.layers = r.layers, u.up.set(0, -1, 0), u.lookAt(new eu(0, 0, 1)), r.add(u);
							var c = new t1(90, 1, e, n);
							return c.layers = r.layers, c.up.set(0, -1, 0), c.lookAt(new eu(0, 0, -1)), r.add(c), r
						}
						return y(t, e), p(t, [{
							key: "update",
							value: function(e, t) {
								null === this.parent && this.updateMatrixWorld();
								var n, i = this.renderTarget,
									r = function(e) {
										if (Array.isArray(e)) return e
									}(n = this.children) || function(e, t) {
										var n, i, r = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
										if (null != r) {
											var a = [],
												o = !0,
												s = !1;
											try {
												for (r = r.call(e); !(o = (n = r.next()).done) && (a.push(n.value), a.length !== t); o = !0);
											} catch (e) {
												s = !0, i = e
											} finally {
												try {
													o || null == r.return || r.return()
												} finally {
													if (s) throw i
												}
											}
											return a
										}
									}(n, 6) || function(e, t) {
										if (e) {
											if ("string" == typeof e) return u(e, 6);
											var n = Object.prototype.toString.call(e).slice(8, -1);
											if ("Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n) return Array.from(n);
											if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return u(e, t)
										}
									}(n, 6) || function() {
										throw TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
									}(),
									a = r[0],
									o = r[1],
									s = r[2],
									l = r[3],
									c = r[4],
									h = r[5],
									d = e.xr.enabled,
									f = e.getRenderTarget();
								e.xr.enabled = !1;
								var p = i.texture.generateMipmaps;
								i.texture.generateMipmaps = !1, e.setRenderTarget(i, 0), e.render(t, a), e.setRenderTarget(i, 1), e.render(t, o), e.setRenderTarget(i, 2), e.render(t, s), e.setRenderTarget(i, 3), e.render(t, l), e.setRenderTarget(i, 4), e.render(t, c), i.texture.generateMipmaps = p, e.setRenderTarget(i, 5), e.render(t, h), e.setRenderTarget(f), e.xr.enabled = d, i.texture.needsPMREMUpdate = !0
							}
						}]), t
					}(tt),
					t2 = function(e) {
						function t(e, n, i, r, a, o, s, l, u, c) {
							var f;
							return d(this, t), (f = h(this, t, [e = void 0 !== e ? e : [], n = void 0 !== n ? n : 301, i, r, a, o, s, l, u, c])).flipY = !1, f
						}
						return y(t, e), p(t, [{
							key: "images",
							get: function() {
								return this.image
							},
							set: function(e) {
								this.image = e
							}
						}]), t
					}(ei);
				t2.prototype.isCubeTexture = !0;
				var t4 = function(e) {
					function t(e, n, i) {
						var r;
						return d(this, t), Number.isInteger(n) && (console.warn("THREE.WebGLCubeRenderTarget: constructor signature is now WebGLCubeRenderTarget( size, options )"), n = i), r = h(this, t, [e, e, n]), n = n || {}, r.texture = new t2(void 0, n.mapping, n.wrapS, n.wrapT, n.magFilter, n.minFilter, n.format, n.type, n.anisotropy, n.encoding), r.texture.isRenderTargetTexture = !0, r.texture.generateMipmaps = void 0 !== n.generateMipmaps && n.generateMipmaps, r.texture.minFilter = void 0 !== n.minFilter ? n.minFilter : 1006, r
					}
					return y(t, e), p(t, [{
						key: "fromEquirectangularTexture",
						value: function(e, t) {
							this.texture.type = t.type, this.texture.format = 1023, this.texture.encoding = t.encoding, this.texture.generateMipmaps = t.generateMipmaps, this.texture.minFilter = t.minFilter, this.texture.magFilter = t.magFilter;
							var n = new tJ(5, 5, 5),
								i = new t$({
									name: "CubemapFromEquirect",
									uniforms: tZ({
										tEquirect: {
											value: null
										}
									}),
									vertexShader: "\n\n				varying vec3 vWorldDirection;\n\n				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {\n\n					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );\n\n				}\n\n				void main() {\n\n					vWorldDirection = transformDirection( position, modelMatrix );\n\n					#include <begin_vertex>\n					#include <project_vertex>\n\n				}\n			",
									fragmentShader: "\n\n				uniform sampler2D tEquirect;\n\n				varying vec3 vWorldDirection;\n\n				#include <common>\n\n				void main() {\n\n					vec3 direction = normalize( vWorldDirection );\n\n					vec2 sampleUV = equirectUv( direction );\n\n					gl_FragColor = texture2D( tEquirect, sampleUV );\n\n				}\n			",
									side: 1,
									blending: 0
								});
							i.uniforms.tEquirect.value = t;
							var r = new tX(n, i),
								a = t.minFilter;
							return 1008 === t.minFilter && (t.minFilter = 1006), new t3(1, 10, this).update(e, r), t.minFilter = a, r.geometry.dispose(), r.material.dispose(), this
						}
					}, {
						key: "clear",
						value: function(e, t, n, i) {
							for (var r = e.getRenderTarget(), a = 0; a < 6; a++) e.setRenderTarget(this, a), e.clear(t, n, i);
							e.setRenderTarget(r)
						}
					}]), t
				}(eo);
				t4.prototype.isWebGLCubeRenderTarget = !0;
				var t5 = new eu,
					t6 = new eu,
					t8 = new j,
					t7 = function() {
						function e() {
							var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : new eu(1, 0, 0),
								n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
							d(this, e), this.normal = t, this.constant = n
						}
						return p(e, [{
							key: "set",
							value: function(e, t) {
								return this.normal.copy(e), this.constant = t, this
							}
						}, {
							key: "setComponents",
							value: function(e, t, n, i) {
								return this.normal.set(e, t, n), this.constant = i, this
							}
						}, {
							key: "setFromNormalAndCoplanarPoint",
							value: function(e, t) {
								return this.normal.copy(e), this.constant = -t.dot(this.normal), this
							}
						}, {
							key: "setFromCoplanarPoints",
							value: function(e, t, n) {
								var i = t5.subVectors(n, t).cross(t6.subVectors(e, t)).normalize();
								return this.setFromNormalAndCoplanarPoint(i, e), this
							}
						}, {
							key: "copy",
							value: function(e) {
								return this.normal.copy(e.normal), this.constant = e.constant, this
							}
						}, {
							key: "normalize",
							value: function() {
								var e = 1 / this.normal.length();
								return this.normal.multiplyScalar(e), this.constant *= e, this
							}
						}, {
							key: "negate",
							value: function() {
								return this.constant *= -1, this.normal.negate(), this
							}
						}, {
							key: "distanceToPoint",
							value: function(e) {
								return this.normal.dot(e) + this.constant
							}
						}, {
							key: "distanceToSphere",
							value: function(e) {
								return this.distanceToPoint(e.center) - e.radius
							}
						}, {
							key: "projectPoint",
							value: function(e, t) {
								return t.copy(this.normal).multiplyScalar(-this.distanceToPoint(e)).add(e)
							}
						}, {
							key: "intersectLine",
							value: function(e, t) {
								var n = e.delta(t5),
									i = this.normal.dot(n);
								if (0 === i) return 0 === this.distanceToPoint(e.start) ? t.copy(e.start) : null;
								var r = -(e.start.dot(this.normal) + this.constant) / i;
								return r < 0 || r > 1 ? null : t.copy(n).multiplyScalar(r).add(e.start)
							}
						}, {
							key: "intersectsLine",
							value: function(e) {
								var t = this.distanceToPoint(e.start),
									n = this.distanceToPoint(e.end);
								return t < 0 && n > 0 || n < 0 && t > 0
							}
						}, {
							key: "intersectsBox",
							value: function(e) {
								return e.intersectsPlane(this)
							}
						}, {
							key: "intersectsSphere",
							value: function(e) {
								return e.intersectsPlane(this)
							}
						}, {
							key: "coplanarPoint",
							value: function(e) {
								return e.copy(this.normal).multiplyScalar(-this.constant)
							}
						}, {
							key: "applyMatrix4",
							value: function(e, t) {
								var n = t || t8.getNormalMatrix(e),
									i = this.coplanarPoint(t5).applyMatrix4(e),
									r = this.normal.applyMatrix3(n).normalize();
								return this.constant = -i.dot(r), this
							}
						}, {
							key: "translate",
							value: function(e) {
								return this.constant -= e.dot(this.normal), this
							}
						}, {
							key: "equals",
							value: function(e) {
								return e.normal.equals(this.normal) && e.constant === this.constant
							}
						}, {
							key: "clone",
							value: function() {
								return (new this.constructor).copy(this)
							}
						}]), e
					}();
				t7.prototype.isPlane = !0;
				var t9 = new eC,
					ne = new eu,
					nt = function() {
						function e() {
							var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : new t7,
								n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : new t7,
								i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : new t7,
								r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : new t7,
								a = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : new t7,
								o = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : new t7;
							d(this, e), this.planes = [t, n, i, r, a, o]
						}
						return p(e, [{
							key: "set",
							value: function(e, t, n, i, r, a) {
								var o = this.planes;
								return o[0].copy(e), o[1].copy(t), o[2].copy(n), o[3].copy(i), o[4].copy(r), o[5].copy(a), this
							}
						}, {
							key: "copy",
							value: function(e) {
								for (var t = this.planes, n = 0; n < 6; n++) t[n].copy(e.planes[n]);
								return this
							}
						}, {
							key: "setFromProjectionMatrix",
							value: function(e) {
								var t = this.planes,
									n = e.elements,
									i = n[0],
									r = n[1],
									a = n[2],
									o = n[3],
									s = n[4],
									l = n[5],
									u = n[6],
									c = n[7],
									h = n[8],
									d = n[9],
									f = n[10],
									p = n[11],
									m = n[12],
									v = n[13],
									g = n[14],
									y = n[15];
								return t[0].setComponents(o - i, c - s, p - h, y - m).normalize(), t[1].setComponents(o + i, c + s, p + h, y + m).normalize(), t[2].setComponents(o + r, c + l, p + d, y + v).normalize(), t[3].setComponents(o - r, c - l, p - d, y - v).normalize(), t[4].setComponents(o - a, c - u, p - f, y - g).normalize(), t[5].setComponents(o + a, c + u, p + f, y + g).normalize(), this
							}
						}, {
							key: "intersectsObject",
							value: function(e) {
								var t = e.geometry;
								return null === t.boundingSphere && t.computeBoundingSphere(), t9.copy(t.boundingSphere).applyMatrix4(e.matrixWorld), this.intersectsSphere(t9)
							}
						}, {
							key: "intersectsSprite",
							value: function(e) {
								return t9.center.set(0, 0, 0), t9.radius = .7071067811865476, t9.applyMatrix4(e.matrixWorld), this.intersectsSphere(t9)
							}
						}, {
							key: "intersectsSphere",
							value: function(e) {
								for (var t = this.planes, n = e.center, i = -e.radius, r = 0; r < 6; r++)
									if (t[r].distanceToPoint(n) < i) return !1;
								return !0
							}
						}, {
							key: "intersectsBox",
							value: function(e) {
								for (var t = this.planes, n = 0; n < 6; n++) {
									var i = t[n];
									if (ne.x = i.normal.x > 0 ? e.max.x : e.min.x, ne.y = i.normal.y > 0 ? e.max.y : e.min.y, ne.z = i.normal.z > 0 ? e.max.z : e.min.z, 0 > i.distanceToPoint(ne)) return !1
								}
								return !0
							}
						}, {
							key: "containsPoint",
							value: function(e) {
								for (var t = this.planes, n = 0; n < 6; n++)
									if (0 > t[n].distanceToPoint(e)) return !1;
								return !0
							}
						}, {
							key: "clone",
							value: function() {
								return (new this.constructor).copy(this)
							}
						}]), e
					}();

				function nn() {
					var e = null,
						t = !1,
						n = null,
						i = null;

					function r(t, a) {
						n(t, a), i = e.requestAnimationFrame(r)
					}
					return {
						start: function() {
							!0 !== t && null !== n && (i = e.requestAnimationFrame(r), t = !0)
						},
						stop: function() {
							e.cancelAnimationFrame(i), t = !1
						},
						setAnimationLoop: function(e) {
							n = e
						},
						setContext: function(t) {
							e = t
						}
					}
				}

				function ni(e, t) {
					var n = t.isWebGL2,
						i = new WeakMap;
					return {
						get: function(e) {
							return e.isInterleavedBufferAttribute && (e = e.data), i.get(e)
						},
						remove: function(t) {
							t.isInterleavedBufferAttribute && (t = t.data);
							var n = i.get(t);
							n && (e.deleteBuffer(n.buffer), i.delete(t))
						},
						update: function(t, r) {
							if (t.isGLBufferAttribute) {
								var a, o, s, l, u, c, h, d, f, p = i.get(t);
								return void((!p || p.version < t.version) && i.set(t, {
									buffer: t.buffer,
									type: t.type,
									bytesPerElement: t.elementSize,
									version: t.version
								}))
							}
							t.isInterleavedBufferAttribute && (t = t.data);
							var m = i.get(t);
							void 0 === m ? i.set(t, (o = (a = t).array, s = a.usage, l = e.createBuffer(), e.bindBuffer(r, l), e.bufferData(r, o, s), a.onUploadCallback(), u = 5126, o instanceof Float32Array ? u = 5126 : o instanceof Float64Array ? console.warn("THREE.WebGLAttributes: Unsupported data buffer format: Float64Array.") : o instanceof Uint16Array ? a.isFloat16BufferAttribute ? n ? u = 5131 : console.warn("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.") : u = 5123 : o instanceof Int16Array ? u = 5122 : o instanceof Uint32Array ? u = 5125 : o instanceof Int32Array ? u = 5124 : o instanceof Int8Array ? u = 5120 : (o instanceof Uint8Array || o instanceof Uint8ClampedArray) && (u = 5121), {
								buffer: l,
								type: u,
								bytesPerElement: o.BYTES_PER_ELEMENT,
								version: a.version
							})) : m.version < t.version && (c = m.buffer, d = (h = t).array, f = h.updateRange, e.bindBuffer(r, c), -1 === f.count ? e.bufferSubData(r, 0, d) : (n ? e.bufferSubData(r, f.offset * d.BYTES_PER_ELEMENT, d, f.offset, f.count) : e.bufferSubData(r, f.offset * d.BYTES_PER_ELEMENT, d.subarray(f.offset, f.offset + f.count)), f.count = -1), m.version = t.version)
						}
					}
				}
				var nr = function(e) {
						function t() {
							var e, n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1,
								i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1,
								r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1,
								a = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 1;
							d(this, t), (e = h(this, t)).type = "PlaneGeometry", e.parameters = {
								width: n,
								height: i,
								widthSegments: r,
								heightSegments: a
							};
							for (var o = n / 2, s = i / 2, l = Math.floor(r), u = Math.floor(a), c = l + 1, f = u + 1, p = n / l, m = i / u, v = [], g = [], y = [], x = [], _ = 0; _ < f; _++)
								for (var b = _ * m - s, w = 0; w < c; w++) {
									var M = w * p - o;
									g.push(M, -b, 0), y.push(0, 0, 1), x.push(w / l), x.push(1 - _ / u)
								}
							for (var S = 0; S < u; S++)
								for (var T = 0; T < l; T++) {
									var E = T + c * S,
										A = T + c * (S + 1),
										k = T + 1 + c * (S + 1),
										R = T + 1 + c * S;
									v.push(E, A, R), v.push(A, k, R)
								}
							return e.setIndex(v), e.setAttribute("position", new tb(g, 3)), e.setAttribute("normal", new tb(y, 3)), e.setAttribute("uv", new tb(x, 2)), e
						}
						return y(t, e), p(t, null, [{
							key: "fromJSON",
							value: function(e) {
								return new t(e.width, e.height, e.widthSegments, e.heightSegments)
							}
						}]), t
					}(tR),
					na = {
						alphamap_fragment: "#ifdef USE_ALPHAMAP\n	diffuseColor.a *= texture2D( alphaMap, vUv ).g;\n#endif",
						alphamap_pars_fragment: "#ifdef USE_ALPHAMAP\n	uniform sampler2D alphaMap;\n#endif",
						alphatest_fragment: "#ifdef USE_ALPHATEST\n	if ( diffuseColor.a < alphaTest ) discard;\n#endif",
						alphatest_pars_fragment: "#ifdef USE_ALPHATEST\n	uniform float alphaTest;\n#endif",
						aomap_fragment: "#ifdef USE_AOMAP\n	float ambientOcclusion = ( texture2D( aoMap, vUv2 ).r - 1.0 ) * aoMapIntensity + 1.0;\n	reflectedLight.indirectDiffuse *= ambientOcclusion;\n	#if defined( USE_ENVMAP ) && defined( STANDARD )\n		float dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );\n		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );\n	#endif\n#endif",
						aomap_pars_fragment: "#ifdef USE_AOMAP\n	uniform sampler2D aoMap;\n	uniform float aoMapIntensity;\n#endif",
						begin_vertex: "vec3 transformed = vec3( position );",
						beginnormal_vertex: "vec3 objectNormal = vec3( normal );\n#ifdef USE_TANGENT\n	vec3 objectTangent = vec3( tangent.xyz );\n#endif",
						bsdfs: "vec3 BRDF_Lambert( const in vec3 diffuseColor ) {\n	return RECIPROCAL_PI * diffuseColor;\n}\nvec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {\n	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );\n	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );\n}\nfloat V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {\n	float a2 = pow2( alpha );\n	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );\n	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );\n	return 0.5 / max( gv + gl, EPSILON );\n}\nfloat D_GGX( const in float alpha, const in float dotNH ) {\n	float a2 = pow2( alpha );\n	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;\n	return RECIPROCAL_PI * a2 / pow2( denom );\n}\nvec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 f0, const in float f90, const in float roughness ) {\n	float alpha = pow2( roughness );\n	vec3 halfDir = normalize( lightDir + viewDir );\n	float dotNL = saturate( dot( normal, lightDir ) );\n	float dotNV = saturate( dot( normal, viewDir ) );\n	float dotNH = saturate( dot( normal, halfDir ) );\n	float dotVH = saturate( dot( viewDir, halfDir ) );\n	vec3 F = F_Schlick( f0, f90, dotVH );\n	float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );\n	float D = D_GGX( alpha, dotNH );\n	return F * ( V * D );\n}\nvec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {\n	const float LUT_SIZE = 64.0;\n	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;\n	const float LUT_BIAS = 0.5 / LUT_SIZE;\n	float dotNV = saturate( dot( N, V ) );\n	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );\n	uv = uv * LUT_SCALE + LUT_BIAS;\n	return uv;\n}\nfloat LTC_ClippedSphereFormFactor( const in vec3 f ) {\n	float l = length( f );\n	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );\n}\nvec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {\n	float x = dot( v1, v2 );\n	float y = abs( x );\n	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;\n	float b = 3.4175940 + ( 4.1616724 + y ) * y;\n	float v = a / b;\n	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;\n	return cross( v1, v2 ) * theta_sintheta;\n}\nvec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {\n	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];\n	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];\n	vec3 lightNormal = cross( v1, v2 );\n	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );\n	vec3 T1, T2;\n	T1 = normalize( V - N * dot( V, N ) );\n	T2 = - cross( N, T1 );\n	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );\n	vec3 coords[ 4 ];\n	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );\n	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );\n	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );\n	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );\n	coords[ 0 ] = normalize( coords[ 0 ] );\n	coords[ 1 ] = normalize( coords[ 1 ] );\n	coords[ 2 ] = normalize( coords[ 2 ] );\n	coords[ 3 ] = normalize( coords[ 3 ] );\n	vec3 vectorFormFactor = vec3( 0.0 );\n	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );\n	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );\n	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );\n	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );\n	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );\n	return vec3( result );\n}\nfloat G_BlinnPhong_Implicit( ) {\n	return 0.25;\n}\nfloat D_BlinnPhong( const in float shininess, const in float dotNH ) {\n	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );\n}\nvec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {\n	vec3 halfDir = normalize( lightDir + viewDir );\n	float dotNH = saturate( dot( normal, halfDir ) );\n	float dotVH = saturate( dot( viewDir, halfDir ) );\n	vec3 F = F_Schlick( specularColor, 1.0, dotVH );\n	float G = G_BlinnPhong_Implicit( );\n	float D = D_BlinnPhong( shininess, dotNH );\n	return F * ( G * D );\n}\n#if defined( USE_SHEEN )\nfloat D_Charlie( float roughness, float dotNH ) {\n	float alpha = pow2( roughness );\n	float invAlpha = 1.0 / alpha;\n	float cos2h = dotNH * dotNH;\n	float sin2h = max( 1.0 - cos2h, 0.0078125 );\n	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );\n}\nfloat V_Neubelt( float dotNV, float dotNL ) {\n	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );\n}\nvec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {\n	vec3 halfDir = normalize( lightDir + viewDir );\n	float dotNL = saturate( dot( normal, lightDir ) );\n	float dotNV = saturate( dot( normal, viewDir ) );\n	float dotNH = saturate( dot( normal, halfDir ) );\n	float D = D_Charlie( sheenRoughness, dotNH );\n	float V = V_Neubelt( dotNV, dotNL );\n	return sheenColor * ( D * V );\n}\n#endif",
						bumpmap_pars_fragment: "#ifdef USE_BUMPMAP\n	uniform sampler2D bumpMap;\n	uniform float bumpScale;\n	vec2 dHdxy_fwd() {\n		vec2 dSTdx = dFdx( vUv );\n		vec2 dSTdy = dFdy( vUv );\n		float Hll = bumpScale * texture2D( bumpMap, vUv ).x;\n		float dBx = bumpScale * texture2D( bumpMap, vUv + dSTdx ).x - Hll;\n		float dBy = bumpScale * texture2D( bumpMap, vUv + dSTdy ).x - Hll;\n		return vec2( dBx, dBy );\n	}\n	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {\n		vec3 vSigmaX = vec3( dFdx( surf_pos.x ), dFdx( surf_pos.y ), dFdx( surf_pos.z ) );\n		vec3 vSigmaY = vec3( dFdy( surf_pos.x ), dFdy( surf_pos.y ), dFdy( surf_pos.z ) );\n		vec3 vN = surf_norm;\n		vec3 R1 = cross( vSigmaY, vN );\n		vec3 R2 = cross( vN, vSigmaX );\n		float fDet = dot( vSigmaX, R1 ) * faceDirection;\n		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );\n		return normalize( abs( fDet ) * surf_norm - vGrad );\n	}\n#endif",
						clipping_planes_fragment: "#if NUM_CLIPPING_PLANES > 0\n	vec4 plane;\n	#pragma unroll_loop_start\n	for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {\n		plane = clippingPlanes[ i ];\n		if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;\n	}\n	#pragma unroll_loop_end\n	#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES\n		bool clipped = true;\n		#pragma unroll_loop_start\n		for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {\n			plane = clippingPlanes[ i ];\n			clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;\n		}\n		#pragma unroll_loop_end\n		if ( clipped ) discard;\n	#endif\n#endif",
						clipping_planes_pars_fragment: "#if NUM_CLIPPING_PLANES > 0\n	varying vec3 vClipPosition;\n	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];\n#endif",
						clipping_planes_pars_vertex: "#if NUM_CLIPPING_PLANES > 0\n	varying vec3 vClipPosition;\n#endif",
						clipping_planes_vertex: "#if NUM_CLIPPING_PLANES > 0\n	vClipPosition = - mvPosition.xyz;\n#endif",
						color_fragment: "#if defined( USE_COLOR_ALPHA )\n	diffuseColor *= vColor;\n#elif defined( USE_COLOR )\n	diffuseColor.rgb *= vColor;\n#endif",
						color_pars_fragment: "#if defined( USE_COLOR_ALPHA )\n	varying vec4 vColor;\n#elif defined( USE_COLOR )\n	varying vec3 vColor;\n#endif",
						color_pars_vertex: "#if defined( USE_COLOR_ALPHA )\n	varying vec4 vColor;\n#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )\n	varying vec3 vColor;\n#endif",
						color_vertex: "#if defined( USE_COLOR_ALPHA )\n	vColor = vec4( 1.0 );\n#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )\n	vColor = vec3( 1.0 );\n#endif\n#ifdef USE_COLOR\n	vColor *= color;\n#endif\n#ifdef USE_INSTANCING_COLOR\n	vColor.xyz *= instanceColor.xyz;\n#endif",
						common: "#define PI 3.141592653589793\n#define PI2 6.283185307179586\n#define PI_HALF 1.5707963267948966\n#define RECIPROCAL_PI 0.3183098861837907\n#define RECIPROCAL_PI2 0.15915494309189535\n#define EPSILON 1e-6\n#ifndef saturate\n#define saturate( a ) clamp( a, 0.0, 1.0 )\n#endif\n#define whiteComplement( a ) ( 1.0 - saturate( a ) )\nfloat pow2( const in float x ) { return x*x; }\nfloat pow3( const in float x ) { return x*x*x; }\nfloat pow4( const in float x ) { float x2 = x*x; return x2*x2; }\nfloat max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }\nfloat average( const in vec3 color ) { return dot( color, vec3( 0.3333 ) ); }\nhighp float rand( const in vec2 uv ) {\n	const highp float a = 12.9898, b = 78.233, c = 43758.5453;\n	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );\n	return fract( sin( sn ) * c );\n}\n#ifdef HIGH_PRECISION\n	float precisionSafeLength( vec3 v ) { return length( v ); }\n#else\n	float precisionSafeLength( vec3 v ) {\n		float maxComponent = max3( abs( v ) );\n		return length( v / maxComponent ) * maxComponent;\n	}\n#endif\nstruct IncidentLight {\n	vec3 color;\n	vec3 direction;\n	bool visible;\n};\nstruct ReflectedLight {\n	vec3 directDiffuse;\n	vec3 directSpecular;\n	vec3 indirectDiffuse;\n	vec3 indirectSpecular;\n};\nstruct GeometricContext {\n	vec3 position;\n	vec3 normal;\n	vec3 viewDir;\n#ifdef USE_CLEARCOAT\n	vec3 clearcoatNormal;\n#endif\n};\nvec3 transformDirection( in vec3 dir, in mat4 matrix ) {\n	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );\n}\nvec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {\n	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );\n}\nmat3 transposeMat3( const in mat3 m ) {\n	mat3 tmp;\n	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );\n	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );\n	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );\n	return tmp;\n}\nfloat linearToRelativeLuminance( const in vec3 color ) {\n	vec3 weights = vec3( 0.2126, 0.7152, 0.0722 );\n	return dot( weights, color.rgb );\n}\nbool isPerspectiveMatrix( mat4 m ) {\n	return m[ 2 ][ 3 ] == - 1.0;\n}\nvec2 equirectUv( in vec3 dir ) {\n	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;\n	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;\n	return vec2( u, v );\n}",
						cube_uv_reflection_fragment: "#ifdef ENVMAP_TYPE_CUBE_UV\n	#define cubeUV_maxMipLevel 8.0\n	#define cubeUV_minMipLevel 4.0\n	#define cubeUV_maxTileSize 256.0\n	#define cubeUV_minTileSize 16.0\n	float getFace( vec3 direction ) {\n		vec3 absDirection = abs( direction );\n		float face = - 1.0;\n		if ( absDirection.x > absDirection.z ) {\n			if ( absDirection.x > absDirection.y )\n				face = direction.x > 0.0 ? 0.0 : 3.0;\n			else\n				face = direction.y > 0.0 ? 1.0 : 4.0;\n		} else {\n			if ( absDirection.z > absDirection.y )\n				face = direction.z > 0.0 ? 2.0 : 5.0;\n			else\n				face = direction.y > 0.0 ? 1.0 : 4.0;\n		}\n		return face;\n	}\n	vec2 getUV( vec3 direction, float face ) {\n		vec2 uv;\n		if ( face == 0.0 ) {\n			uv = vec2( direction.z, direction.y ) / abs( direction.x );\n		} else if ( face == 1.0 ) {\n			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );\n		} else if ( face == 2.0 ) {\n			uv = vec2( - direction.x, direction.y ) / abs( direction.z );\n		} else if ( face == 3.0 ) {\n			uv = vec2( - direction.z, direction.y ) / abs( direction.x );\n		} else if ( face == 4.0 ) {\n			uv = vec2( - direction.x, direction.z ) / abs( direction.y );\n		} else {\n			uv = vec2( direction.x, direction.y ) / abs( direction.z );\n		}\n		return 0.5 * ( uv + 1.0 );\n	}\n	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {\n		float face = getFace( direction );\n		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );\n		mipInt = max( mipInt, cubeUV_minMipLevel );\n		float faceSize = exp2( mipInt );\n		float texelSize = 1.0 / ( 3.0 * cubeUV_maxTileSize );\n		vec2 uv = getUV( direction, face ) * ( faceSize - 1.0 ) + 0.5;\n		if ( face > 2.0 ) {\n			uv.y += faceSize;\n			face -= 3.0;\n		}\n		uv.x += face * faceSize;\n		if ( mipInt < cubeUV_maxMipLevel ) {\n			uv.y += 2.0 * cubeUV_maxTileSize;\n		}\n		uv.y += filterInt * 2.0 * cubeUV_minTileSize;\n		uv.x += 3.0 * max( 0.0, cubeUV_maxTileSize - 2.0 * faceSize );\n		uv *= texelSize;\n		return texture2D( envMap, uv ).rgb;\n	}\n	#define r0 1.0\n	#define v0 0.339\n	#define m0 - 2.0\n	#define r1 0.8\n	#define v1 0.276\n	#define m1 - 1.0\n	#define r4 0.4\n	#define v4 0.046\n	#define m4 2.0\n	#define r5 0.305\n	#define v5 0.016\n	#define m5 3.0\n	#define r6 0.21\n	#define v6 0.0038\n	#define m6 4.0\n	float roughnessToMip( float roughness ) {\n		float mip = 0.0;\n		if ( roughness >= r1 ) {\n			mip = ( r0 - roughness ) * ( m1 - m0 ) / ( r0 - r1 ) + m0;\n		} else if ( roughness >= r4 ) {\n			mip = ( r1 - roughness ) * ( m4 - m1 ) / ( r1 - r4 ) + m1;\n		} else if ( roughness >= r5 ) {\n			mip = ( r4 - roughness ) * ( m5 - m4 ) / ( r4 - r5 ) + m4;\n		} else if ( roughness >= r6 ) {\n			mip = ( r5 - roughness ) * ( m6 - m5 ) / ( r5 - r6 ) + m5;\n		} else {\n			mip = - 2.0 * log2( 1.16 * roughness );		}\n		return mip;\n	}\n	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {\n		float mip = clamp( roughnessToMip( roughness ), m0, cubeUV_maxMipLevel );\n		float mipF = fract( mip );\n		float mipInt = floor( mip );\n		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );\n		if ( mipF == 0.0 ) {\n			return vec4( color0, 1.0 );\n		} else {\n			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );\n			return vec4( mix( color0, color1, mipF ), 1.0 );\n		}\n	}\n#endif",
						defaultnormal_vertex: "vec3 transformedNormal = objectNormal;\n#ifdef USE_INSTANCING\n	mat3 m = mat3( instanceMatrix );\n	transformedNormal /= vec3( dot( m[ 0 ], m[ 0 ] ), dot( m[ 1 ], m[ 1 ] ), dot( m[ 2 ], m[ 2 ] ) );\n	transformedNormal = m * transformedNormal;\n#endif\ntransformedNormal = normalMatrix * transformedNormal;\n#ifdef FLIP_SIDED\n	transformedNormal = - transformedNormal;\n#endif\n#ifdef USE_TANGENT\n	vec3 transformedTangent = ( modelViewMatrix * vec4( objectTangent, 0.0 ) ).xyz;\n	#ifdef FLIP_SIDED\n		transformedTangent = - transformedTangent;\n	#endif\n#endif",
						displacementmap_pars_vertex: "#ifdef USE_DISPLACEMENTMAP\n	uniform sampler2D displacementMap;\n	uniform float displacementScale;\n	uniform float displacementBias;\n#endif",
						displacementmap_vertex: "#ifdef USE_DISPLACEMENTMAP\n	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vUv ).x * displacementScale + displacementBias );\n#endif",
						emissivemap_fragment: "#ifdef USE_EMISSIVEMAP\n	vec4 emissiveColor = texture2D( emissiveMap, vUv );\n	totalEmissiveRadiance *= emissiveColor.rgb;\n#endif",
						emissivemap_pars_fragment: "#ifdef USE_EMISSIVEMAP\n	uniform sampler2D emissiveMap;\n#endif",
						encodings_fragment: "gl_FragColor = linearToOutputTexel( gl_FragColor );",
						encodings_pars_fragment: "vec4 LinearToLinear( in vec4 value ) {\n	return value;\n}\nvec4 LinearTosRGB( in vec4 value ) {\n	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );\n}",
						envmap_fragment: "#ifdef USE_ENVMAP\n	#ifdef ENV_WORLDPOS\n		vec3 cameraToFrag;\n		if ( isOrthographic ) {\n			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );\n		} else {\n			cameraToFrag = normalize( vWorldPosition - cameraPosition );\n		}\n		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );\n		#ifdef ENVMAP_MODE_REFLECTION\n			vec3 reflectVec = reflect( cameraToFrag, worldNormal );\n		#else\n			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );\n		#endif\n	#else\n		vec3 reflectVec = vReflect;\n	#endif\n	#ifdef ENVMAP_TYPE_CUBE\n		vec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );\n	#elif defined( ENVMAP_TYPE_CUBE_UV )\n		vec4 envColor = textureCubeUV( envMap, reflectVec, 0.0 );\n	#else\n		vec4 envColor = vec4( 0.0 );\n	#endif\n	#ifdef ENVMAP_BLENDING_MULTIPLY\n		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );\n	#elif defined( ENVMAP_BLENDING_MIX )\n		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );\n	#elif defined( ENVMAP_BLENDING_ADD )\n		outgoingLight += envColor.xyz * specularStrength * reflectivity;\n	#endif\n#endif",
						envmap_common_pars_fragment: "#ifdef USE_ENVMAP\n	uniform float envMapIntensity;\n	uniform float flipEnvMap;\n	#ifdef ENVMAP_TYPE_CUBE\n		uniform samplerCube envMap;\n	#else\n		uniform sampler2D envMap;\n	#endif\n	\n#endif",
						envmap_pars_fragment: "#ifdef USE_ENVMAP\n	uniform float reflectivity;\n	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG )\n		#define ENV_WORLDPOS\n	#endif\n	#ifdef ENV_WORLDPOS\n		varying vec3 vWorldPosition;\n		uniform float refractionRatio;\n	#else\n		varying vec3 vReflect;\n	#endif\n#endif",
						envmap_pars_vertex: "#ifdef USE_ENVMAP\n	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) ||defined( PHONG )\n		#define ENV_WORLDPOS\n	#endif\n	#ifdef ENV_WORLDPOS\n		\n		varying vec3 vWorldPosition;\n	#else\n		varying vec3 vReflect;\n		uniform float refractionRatio;\n	#endif\n#endif",
						envmap_physical_pars_fragment: "#if defined( USE_ENVMAP )\n	#ifdef ENVMAP_MODE_REFRACTION\n		uniform float refractionRatio;\n	#endif\n	vec3 getIBLIrradiance( const in vec3 normal ) {\n		#if defined( ENVMAP_TYPE_CUBE_UV )\n			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );\n			vec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );\n			return PI * envMapColor.rgb * envMapIntensity;\n		#else\n			return vec3( 0.0 );\n		#endif\n	}\n	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {\n		#if defined( ENVMAP_TYPE_CUBE_UV )\n			vec3 reflectVec;\n			#ifdef ENVMAP_MODE_REFLECTION\n				reflectVec = reflect( - viewDir, normal );\n				reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );\n			#else\n				reflectVec = refract( - viewDir, normal, refractionRatio );\n			#endif\n			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );\n			vec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );\n			return envMapColor.rgb * envMapIntensity;\n		#else\n			return vec3( 0.0 );\n		#endif\n	}\n#endif",
						envmap_vertex: "#ifdef USE_ENVMAP\n	#ifdef ENV_WORLDPOS\n		vWorldPosition = worldPosition.xyz;\n	#else\n		vec3 cameraToVertex;\n		if ( isOrthographic ) {\n			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );\n		} else {\n			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );\n		}\n		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );\n		#ifdef ENVMAP_MODE_REFLECTION\n			vReflect = reflect( cameraToVertex, worldNormal );\n		#else\n			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );\n		#endif\n	#endif\n#endif",
						fog_vertex: "#ifdef USE_FOG\n	vFogDepth = - mvPosition.z;\n#endif",
						fog_pars_vertex: "#ifdef USE_FOG\n	varying float vFogDepth;\n#endif",
						fog_fragment: "#ifdef USE_FOG\n	#ifdef FOG_EXP2\n		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );\n	#else\n		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );\n	#endif\n	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );\n#endif",
						fog_pars_fragment: "#ifdef USE_FOG\n	uniform vec3 fogColor;\n	varying float vFogDepth;\n	#ifdef FOG_EXP2\n		uniform float fogDensity;\n	#else\n		uniform float fogNear;\n		uniform float fogFar;\n	#endif\n#endif",
						gradientmap_pars_fragment: "#ifdef USE_GRADIENTMAP\n	uniform sampler2D gradientMap;\n#endif\nvec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {\n	float dotNL = dot( normal, lightDirection );\n	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );\n	#ifdef USE_GRADIENTMAP\n		return vec3( texture2D( gradientMap, coord ).r );\n	#else\n		return ( coord.x < 0.7 ) ? vec3( 0.7 ) : vec3( 1.0 );\n	#endif\n}",
						lightmap_fragment: "#ifdef USE_LIGHTMAP\n	vec4 lightMapTexel = texture2D( lightMap, vUv2 );\n	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;\n	#ifndef PHYSICALLY_CORRECT_LIGHTS\n		lightMapIrradiance *= PI;\n	#endif\n	reflectedLight.indirectDiffuse += lightMapIrradiance;\n#endif",
						lightmap_pars_fragment: "#ifdef USE_LIGHTMAP\n	uniform sampler2D lightMap;\n	uniform float lightMapIntensity;\n#endif",
						lights_lambert_vertex: "vec3 diffuse = vec3( 1.0 );\nGeometricContext geometry;\ngeometry.position = mvPosition.xyz;\ngeometry.normal = normalize( transformedNormal );\ngeometry.viewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( -mvPosition.xyz );\nGeometricContext backGeometry;\nbackGeometry.position = geometry.position;\nbackGeometry.normal = -geometry.normal;\nbackGeometry.viewDir = geometry.viewDir;\nvLightFront = vec3( 0.0 );\nvIndirectFront = vec3( 0.0 );\n#ifdef DOUBLE_SIDED\n	vLightBack = vec3( 0.0 );\n	vIndirectBack = vec3( 0.0 );\n#endif\nIncidentLight directLight;\nfloat dotNL;\nvec3 directLightColor_Diffuse;\nvIndirectFront += getAmbientLightIrradiance( ambientLightColor );\nvIndirectFront += getLightProbeIrradiance( lightProbe, geometry.normal );\n#ifdef DOUBLE_SIDED\n	vIndirectBack += getAmbientLightIrradiance( ambientLightColor );\n	vIndirectBack += getLightProbeIrradiance( lightProbe, backGeometry.normal );\n#endif\n#if NUM_POINT_LIGHTS > 0\n	#pragma unroll_loop_start\n	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {\n		getPointLightInfo( pointLights[ i ], geometry, directLight );\n		dotNL = dot( geometry.normal, directLight.direction );\n		directLightColor_Diffuse = directLight.color;\n		vLightFront += saturate( dotNL ) * directLightColor_Diffuse;\n		#ifdef DOUBLE_SIDED\n			vLightBack += saturate( - dotNL ) * directLightColor_Diffuse;\n		#endif\n	}\n	#pragma unroll_loop_end\n#endif\n#if NUM_SPOT_LIGHTS > 0\n	#pragma unroll_loop_start\n	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {\n		getSpotLightInfo( spotLights[ i ], geometry, directLight );\n		dotNL = dot( geometry.normal, directLight.direction );\n		directLightColor_Diffuse = directLight.color;\n		vLightFront += saturate( dotNL ) * directLightColor_Diffuse;\n		#ifdef DOUBLE_SIDED\n			vLightBack += saturate( - dotNL ) * directLightColor_Diffuse;\n		#endif\n	}\n	#pragma unroll_loop_end\n#endif\n#if NUM_DIR_LIGHTS > 0\n	#pragma unroll_loop_start\n	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {\n		getDirectionalLightInfo( directionalLights[ i ], geometry, directLight );\n		dotNL = dot( geometry.normal, directLight.direction );\n		directLightColor_Diffuse = directLight.color;\n		vLightFront += saturate( dotNL ) * directLightColor_Diffuse;\n		#ifdef DOUBLE_SIDED\n			vLightBack += saturate( - dotNL ) * directLightColor_Diffuse;\n		#endif\n	}\n	#pragma unroll_loop_end\n#endif\n#if NUM_HEMI_LIGHTS > 0\n	#pragma unroll_loop_start\n	for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {\n		vIndirectFront += getHemisphereLightIrradiance( hemisphereLights[ i ], geometry.normal );\n		#ifdef DOUBLE_SIDED\n			vIndirectBack += getHemisphereLightIrradiance( hemisphereLights[ i ], backGeometry.normal );\n		#endif\n	}\n	#pragma unroll_loop_end\n#endif",
						lights_pars_begin: "uniform bool receiveShadow;\nuniform vec3 ambientLightColor;\nuniform vec3 lightProbe[ 9 ];\nvec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {\n	float x = normal.x, y = normal.y, z = normal.z;\n	vec3 result = shCoefficients[ 0 ] * 0.886227;\n	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;\n	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;\n	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;\n	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;\n	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;\n	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );\n	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;\n	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );\n	return result;\n}\nvec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {\n	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );\n	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );\n	return irradiance;\n}\nvec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {\n	vec3 irradiance = ambientLightColor;\n	return irradiance;\n}\nfloat getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {\n	#if defined ( PHYSICALLY_CORRECT_LIGHTS )\n		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );\n		if ( cutoffDistance > 0.0 ) {\n			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );\n		}\n		return distanceFalloff;\n	#else\n		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {\n			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );\n		}\n		return 1.0;\n	#endif\n}\nfloat getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {\n	return smoothstep( coneCosine, penumbraCosine, angleCosine );\n}\n#if NUM_DIR_LIGHTS > 0\n	struct DirectionalLight {\n		vec3 direction;\n		vec3 color;\n	};\n	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];\n	void getDirectionalLightInfo( const in DirectionalLight directionalLight, const in GeometricContext geometry, out IncidentLight light ) {\n		light.color = directionalLight.color;\n		light.direction = directionalLight.direction;\n		light.visible = true;\n	}\n#endif\n#if NUM_POINT_LIGHTS > 0\n	struct PointLight {\n		vec3 position;\n		vec3 color;\n		float distance;\n		float decay;\n	};\n	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];\n	void getPointLightInfo( const in PointLight pointLight, const in GeometricContext geometry, out IncidentLight light ) {\n		vec3 lVector = pointLight.position - geometry.position;\n		light.direction = normalize( lVector );\n		float lightDistance = length( lVector );\n		light.color = pointLight.color;\n		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );\n		light.visible = ( light.color != vec3( 0.0 ) );\n	}\n#endif\n#if NUM_SPOT_LIGHTS > 0\n	struct SpotLight {\n		vec3 position;\n		vec3 direction;\n		vec3 color;\n		float distance;\n		float decay;\n		float coneCos;\n		float penumbraCos;\n	};\n	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];\n	void getSpotLightInfo( const in SpotLight spotLight, const in GeometricContext geometry, out IncidentLight light ) {\n		vec3 lVector = spotLight.position - geometry.position;\n		light.direction = normalize( lVector );\n		float angleCos = dot( light.direction, spotLight.direction );\n		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );\n		if ( spotAttenuation > 0.0 ) {\n			float lightDistance = length( lVector );\n			light.color = spotLight.color * spotAttenuation;\n			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );\n			light.visible = ( light.color != vec3( 0.0 ) );\n		} else {\n			light.color = vec3( 0.0 );\n			light.visible = false;\n		}\n	}\n#endif\n#if NUM_RECT_AREA_LIGHTS > 0\n	struct RectAreaLight {\n		vec3 color;\n		vec3 position;\n		vec3 halfWidth;\n		vec3 halfHeight;\n	};\n	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;\n	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];\n#endif\n#if NUM_HEMI_LIGHTS > 0\n	struct HemisphereLight {\n		vec3 direction;\n		vec3 skyColor;\n		vec3 groundColor;\n	};\n	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];\n	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {\n		float dotNL = dot( normal, hemiLight.direction );\n		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;\n		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );\n		return irradiance;\n	}\n#endif",
						lights_toon_fragment: "ToonMaterial material;\nmaterial.diffuseColor = diffuseColor.rgb;",
						lights_toon_pars_fragment: "varying vec3 vViewPosition;\nstruct ToonMaterial {\n	vec3 diffuseColor;\n};\nvoid RE_Direct_Toon( const in IncidentLight directLight, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {\n	vec3 irradiance = getGradientIrradiance( geometry.normal, directLight.direction ) * directLight.color;\n	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );\n}\nvoid RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {\n	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );\n}\n#define RE_Direct				RE_Direct_Toon\n#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon\n#define Material_LightProbeLOD( material )	(0)",
						lights_phong_fragment: "BlinnPhongMaterial material;\nmaterial.diffuseColor = diffuseColor.rgb;\nmaterial.specularColor = specular;\nmaterial.specularShininess = shininess;\nmaterial.specularStrength = specularStrength;",
						lights_phong_pars_fragment: "varying vec3 vViewPosition;\nstruct BlinnPhongMaterial {\n	vec3 diffuseColor;\n	vec3 specularColor;\n	float specularShininess;\n	float specularStrength;\n};\nvoid RE_Direct_BlinnPhong( const in IncidentLight directLight, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {\n	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );\n	vec3 irradiance = dotNL * directLight.color;\n	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );\n	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularShininess ) * material.specularStrength;\n}\nvoid RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {\n	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );\n}\n#define RE_Direct				RE_Direct_BlinnPhong\n#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong\n#define Material_LightProbeLOD( material )	(0)",
						lights_physical_fragment: "PhysicalMaterial material;\nmaterial.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );\nvec3 dxy = max( abs( dFdx( geometryNormal ) ), abs( dFdy( geometryNormal ) ) );\nfloat geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );\nmaterial.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;\nmaterial.roughness = min( material.roughness, 1.0 );\n#ifdef IOR\n	#ifdef SPECULAR\n		float specularIntensityFactor = specularIntensity;\n		vec3 specularColorFactor = specularColor;\n		#ifdef USE_SPECULARINTENSITYMAP\n			specularIntensityFactor *= texture2D( specularIntensityMap, vUv ).a;\n		#endif\n		#ifdef USE_SPECULARCOLORMAP\n			specularColorFactor *= texture2D( specularColorMap, vUv ).rgb;\n		#endif\n		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );\n	#else\n		float specularIntensityFactor = 1.0;\n		vec3 specularColorFactor = vec3( 1.0 );\n		material.specularF90 = 1.0;\n	#endif\n	material.specularColor = mix( min( pow2( ( ior - 1.0 ) / ( ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );\n#else\n	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );\n	material.specularF90 = 1.0;\n#endif\n#ifdef USE_CLEARCOAT\n	material.clearcoat = clearcoat;\n	material.clearcoatRoughness = clearcoatRoughness;\n	material.clearcoatF0 = vec3( 0.04 );\n	material.clearcoatF90 = 1.0;\n	#ifdef USE_CLEARCOATMAP\n		material.clearcoat *= texture2D( clearcoatMap, vUv ).x;\n	#endif\n	#ifdef USE_CLEARCOAT_ROUGHNESSMAP\n		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vUv ).y;\n	#endif\n	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );\n	material.clearcoatRoughness += geometryRoughness;\n	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );\n#endif\n#ifdef USE_SHEEN\n	material.sheenColor = sheenColor;\n	#ifdef USE_SHEENCOLORMAP\n		material.sheenColor *= texture2D( sheenColorMap, vUv ).rgb;\n	#endif\n	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );\n	#ifdef USE_SHEENROUGHNESSMAP\n		material.sheenRoughness *= texture2D( sheenRoughnessMap, vUv ).a;\n	#endif\n#endif",
						lights_physical_pars_fragment: "struct PhysicalMaterial {\n	vec3 diffuseColor;\n	float roughness;\n	vec3 specularColor;\n	float specularF90;\n	#ifdef USE_CLEARCOAT\n		float clearcoat;\n		float clearcoatRoughness;\n		vec3 clearcoatF0;\n		float clearcoatF90;\n	#endif\n	#ifdef USE_SHEEN\n		vec3 sheenColor;\n		float sheenRoughness;\n	#endif\n};\nvec3 clearcoatSpecular = vec3( 0.0 );\nvec3 sheenSpecular = vec3( 0.0 );\nfloat IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness) {\n	float dotNV = saturate( dot( normal, viewDir ) );\n	float r2 = roughness * roughness;\n	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;\n	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;\n	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );\n	return saturate( DG * RECIPROCAL_PI );\n}\nvec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {\n	float dotNV = saturate( dot( normal, viewDir ) );\n	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );\n	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );\n	vec4 r = roughness * c0 + c1;\n	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;\n	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;\n	return fab;\n}\nvec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {\n	vec2 fab = DFGApprox( normal, viewDir, roughness );\n	return specularColor * fab.x + specularF90 * fab.y;\n}\nvoid computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {\n	vec2 fab = DFGApprox( normal, viewDir, roughness );\n	vec3 FssEss = specularColor * fab.x + specularF90 * fab.y;\n	float Ess = fab.x + fab.y;\n	float Ems = 1.0 - Ess;\n	vec3 Favg = specularColor + ( 1.0 - specularColor ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );\n	singleScatter += FssEss;\n	multiScatter += Fms * Ems;\n}\n#if NUM_RECT_AREA_LIGHTS > 0\n	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {\n		vec3 normal = geometry.normal;\n		vec3 viewDir = geometry.viewDir;\n		vec3 position = geometry.position;\n		vec3 lightPos = rectAreaLight.position;\n		vec3 halfWidth = rectAreaLight.halfWidth;\n		vec3 halfHeight = rectAreaLight.halfHeight;\n		vec3 lightColor = rectAreaLight.color;\n		float roughness = material.roughness;\n		vec3 rectCoords[ 4 ];\n		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;\n		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;\n		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;\n		vec2 uv = LTC_Uv( normal, viewDir, roughness );\n		vec4 t1 = texture2D( ltc_1, uv );\n		vec4 t2 = texture2D( ltc_2, uv );\n		mat3 mInv = mat3(\n			vec3( t1.x, 0, t1.y ),\n			vec3(    0, 1,    0 ),\n			vec3( t1.z, 0, t1.w )\n		);\n		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );\n		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );\n		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );\n	}\n#endif\nvoid RE_Direct_Physical( const in IncidentLight directLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {\n	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );\n	vec3 irradiance = dotNL * directLight.color;\n	#ifdef USE_CLEARCOAT\n		float dotNLcc = saturate( dot( geometry.clearcoatNormal, directLight.direction ) );\n		vec3 ccIrradiance = dotNLcc * directLight.color;\n		clearcoatSpecular += ccIrradiance * BRDF_GGX( directLight.direction, geometry.viewDir, geometry.clearcoatNormal, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );\n	#endif\n	#ifdef USE_SHEEN\n		sheenSpecular += irradiance * BRDF_Sheen( directLight.direction, geometry.viewDir, geometry.normal, material.sheenColor, material.sheenRoughness );\n	#endif\n	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularF90, material.roughness );\n	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );\n}\nvoid RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {\n	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );\n}\nvoid RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {\n	#ifdef USE_CLEARCOAT\n		clearcoatSpecular += clearcoatRadiance * EnvironmentBRDF( geometry.clearcoatNormal, geometry.viewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );\n	#endif\n	#ifdef USE_SHEEN\n		sheenSpecular += irradiance * material.sheenColor * IBLSheenBRDF( geometry.normal, geometry.viewDir, material.sheenRoughness );\n	#endif\n	vec3 singleScattering = vec3( 0.0 );\n	vec3 multiScattering = vec3( 0.0 );\n	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;\n	computeMultiscattering( geometry.normal, geometry.viewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );\n	vec3 diffuse = material.diffuseColor * ( 1.0 - ( singleScattering + multiScattering ) );\n	reflectedLight.indirectSpecular += radiance * singleScattering;\n	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;\n	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;\n}\n#define RE_Direct				RE_Direct_Physical\n#define RE_Direct_RectArea		RE_Direct_RectArea_Physical\n#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical\n#define RE_IndirectSpecular		RE_IndirectSpecular_Physical\nfloat computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {\n	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );\n}",
						lights_fragment_begin: "\nGeometricContext geometry;\ngeometry.position = - vViewPosition;\ngeometry.normal = normal;\ngeometry.viewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );\n#ifdef USE_CLEARCOAT\n	geometry.clearcoatNormal = clearcoatNormal;\n#endif\nIncidentLight directLight;\n#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )\n	PointLight pointLight;\n	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0\n	PointLightShadow pointLightShadow;\n	#endif\n	#pragma unroll_loop_start\n	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {\n		pointLight = pointLights[ i ];\n		getPointLightInfo( pointLight, geometry, directLight );\n		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )\n		pointLightShadow = pointLightShadows[ i ];\n		directLight.color *= all( bvec2( directLight.visible, receiveShadow ) ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;\n		#endif\n		RE_Direct( directLight, geometry, material, reflectedLight );\n	}\n	#pragma unroll_loop_end\n#endif\n#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )\n	SpotLight spotLight;\n	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0\n	SpotLightShadow spotLightShadow;\n	#endif\n	#pragma unroll_loop_start\n	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {\n		spotLight = spotLights[ i ];\n		getSpotLightInfo( spotLight, geometry, directLight );\n		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )\n		spotLightShadow = spotLightShadows[ i ];\n		directLight.color *= all( bvec2( directLight.visible, receiveShadow ) ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotShadowCoord[ i ] ) : 1.0;\n		#endif\n		RE_Direct( directLight, geometry, material, reflectedLight );\n	}\n	#pragma unroll_loop_end\n#endif\n#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )\n	DirectionalLight directionalLight;\n	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0\n	DirectionalLightShadow directionalLightShadow;\n	#endif\n	#pragma unroll_loop_start\n	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {\n		directionalLight = directionalLights[ i ];\n		getDirectionalLightInfo( directionalLight, geometry, directLight );\n		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )\n		directionalLightShadow = directionalLightShadows[ i ];\n		directLight.color *= all( bvec2( directLight.visible, receiveShadow ) ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;\n		#endif\n		RE_Direct( directLight, geometry, material, reflectedLight );\n	}\n	#pragma unroll_loop_end\n#endif\n#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )\n	RectAreaLight rectAreaLight;\n	#pragma unroll_loop_start\n	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {\n		rectAreaLight = rectAreaLights[ i ];\n		RE_Direct_RectArea( rectAreaLight, geometry, material, reflectedLight );\n	}\n	#pragma unroll_loop_end\n#endif\n#if defined( RE_IndirectDiffuse )\n	vec3 iblIrradiance = vec3( 0.0 );\n	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );\n	irradiance += getLightProbeIrradiance( lightProbe, geometry.normal );\n	#if ( NUM_HEMI_LIGHTS > 0 )\n		#pragma unroll_loop_start\n		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {\n			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometry.normal );\n		}\n		#pragma unroll_loop_end\n	#endif\n#endif\n#if defined( RE_IndirectSpecular )\n	vec3 radiance = vec3( 0.0 );\n	vec3 clearcoatRadiance = vec3( 0.0 );\n#endif",
						lights_fragment_maps: "#if defined( RE_IndirectDiffuse )\n	#ifdef USE_LIGHTMAP\n		vec4 lightMapTexel = texture2D( lightMap, vUv2 );\n		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;\n		#ifndef PHYSICALLY_CORRECT_LIGHTS\n			lightMapIrradiance *= PI;\n		#endif\n		irradiance += lightMapIrradiance;\n	#endif\n	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )\n		iblIrradiance += getIBLIrradiance( geometry.normal );\n	#endif\n#endif\n#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )\n	radiance += getIBLRadiance( geometry.viewDir, geometry.normal, material.roughness );\n	#ifdef USE_CLEARCOAT\n		clearcoatRadiance += getIBLRadiance( geometry.viewDir, geometry.clearcoatNormal, material.clearcoatRoughness );\n	#endif\n#endif",
						lights_fragment_end: "#if defined( RE_IndirectDiffuse )\n	RE_IndirectDiffuse( irradiance, geometry, material, reflectedLight );\n#endif\n#if defined( RE_IndirectSpecular )\n	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometry, material, reflectedLight );\n#endif",
						logdepthbuf_fragment: "#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )\n	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;\n#endif",
						logdepthbuf_pars_fragment: "#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )\n	uniform float logDepthBufFC;\n	varying float vFragDepth;\n	varying float vIsPerspective;\n#endif",
						logdepthbuf_pars_vertex: "#ifdef USE_LOGDEPTHBUF\n	#ifdef USE_LOGDEPTHBUF_EXT\n		varying float vFragDepth;\n		varying float vIsPerspective;\n	#else\n		uniform float logDepthBufFC;\n	#endif\n#endif",
						logdepthbuf_vertex: "#ifdef USE_LOGDEPTHBUF\n	#ifdef USE_LOGDEPTHBUF_EXT\n		vFragDepth = 1.0 + gl_Position.w;\n		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );\n	#else\n		if ( isPerspectiveMatrix( projectionMatrix ) ) {\n			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;\n			gl_Position.z *= gl_Position.w;\n		}\n	#endif\n#endif",
						map_fragment: "#ifdef USE_MAP\n	vec4 sampledDiffuseColor = texture2D( map, vUv );\n	#ifdef DECODE_VIDEO_TEXTURE\n		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );\n	#endif\n	diffuseColor *= sampledDiffuseColor;\n#endif",
						map_pars_fragment: "#ifdef USE_MAP\n	uniform sampler2D map;\n#endif",
						map_particle_fragment: "#if defined( USE_MAP ) || defined( USE_ALPHAMAP )\n	vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;\n#endif\n#ifdef USE_MAP\n	diffuseColor *= texture2D( map, uv );\n#endif\n#ifdef USE_ALPHAMAP\n	diffuseColor.a *= texture2D( alphaMap, uv ).g;\n#endif",
						map_particle_pars_fragment: "#if defined( USE_MAP ) || defined( USE_ALPHAMAP )\n	uniform mat3 uvTransform;\n#endif\n#ifdef USE_MAP\n	uniform sampler2D map;\n#endif\n#ifdef USE_ALPHAMAP\n	uniform sampler2D alphaMap;\n#endif",
						metalnessmap_fragment: "float metalnessFactor = metalness;\n#ifdef USE_METALNESSMAP\n	vec4 texelMetalness = texture2D( metalnessMap, vUv );\n	metalnessFactor *= texelMetalness.b;\n#endif",
						metalnessmap_pars_fragment: "#ifdef USE_METALNESSMAP\n	uniform sampler2D metalnessMap;\n#endif",
						morphnormal_vertex: "#ifdef USE_MORPHNORMALS\n	objectNormal *= morphTargetBaseInfluence;\n	#ifdef MORPHTARGETS_TEXTURE\n		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {\n			if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1, 2 ) * morphTargetInfluences[ i ];\n		}\n	#else\n		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];\n		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];\n		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];\n		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];\n	#endif\n#endif",
						morphtarget_pars_vertex: "#ifdef USE_MORPHTARGETS\n	uniform float morphTargetBaseInfluence;\n	#ifdef MORPHTARGETS_TEXTURE\n		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];\n		uniform sampler2DArray morphTargetsTexture;\n		uniform vec2 morphTargetsTextureSize;\n		vec3 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset, const in int stride ) {\n			float texelIndex = float( vertexIndex * stride + offset );\n			float y = floor( texelIndex / morphTargetsTextureSize.x );\n			float x = texelIndex - y * morphTargetsTextureSize.x;\n			vec3 morphUV = vec3( ( x + 0.5 ) / morphTargetsTextureSize.x, y / morphTargetsTextureSize.y, morphTargetIndex );\n			return texture( morphTargetsTexture, morphUV ).xyz;\n		}\n	#else\n		#ifndef USE_MORPHNORMALS\n			uniform float morphTargetInfluences[ 8 ];\n		#else\n			uniform float morphTargetInfluences[ 4 ];\n		#endif\n	#endif\n#endif",
						morphtarget_vertex: "#ifdef USE_MORPHTARGETS\n	transformed *= morphTargetBaseInfluence;\n	#ifdef MORPHTARGETS_TEXTURE\n		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {\n			#ifndef USE_MORPHNORMALS\n				if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0, 1 ) * morphTargetInfluences[ i ];\n			#else\n				if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0, 2 ) * morphTargetInfluences[ i ];\n			#endif\n		}\n	#else\n		transformed += morphTarget0 * morphTargetInfluences[ 0 ];\n		transformed += morphTarget1 * morphTargetInfluences[ 1 ];\n		transformed += morphTarget2 * morphTargetInfluences[ 2 ];\n		transformed += morphTarget3 * morphTargetInfluences[ 3 ];\n		#ifndef USE_MORPHNORMALS\n			transformed += morphTarget4 * morphTargetInfluences[ 4 ];\n			transformed += morphTarget5 * morphTargetInfluences[ 5 ];\n			transformed += morphTarget6 * morphTargetInfluences[ 6 ];\n			transformed += morphTarget7 * morphTargetInfluences[ 7 ];\n		#endif\n	#endif\n#endif",
						normal_fragment_begin: "float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;\n#ifdef FLAT_SHADED\n	vec3 fdx = vec3( dFdx( vViewPosition.x ), dFdx( vViewPosition.y ), dFdx( vViewPosition.z ) );\n	vec3 fdy = vec3( dFdy( vViewPosition.x ), dFdy( vViewPosition.y ), dFdy( vViewPosition.z ) );\n	vec3 normal = normalize( cross( fdx, fdy ) );\n#else\n	vec3 normal = normalize( vNormal );\n	#ifdef DOUBLE_SIDED\n		normal = normal * faceDirection;\n	#endif\n	#ifdef USE_TANGENT\n		vec3 tangent = normalize( vTangent );\n		vec3 bitangent = normalize( vBitangent );\n		#ifdef DOUBLE_SIDED\n			tangent = tangent * faceDirection;\n			bitangent = bitangent * faceDirection;\n		#endif\n		#if defined( TANGENTSPACE_NORMALMAP ) || defined( USE_CLEARCOAT_NORMALMAP )\n			mat3 vTBN = mat3( tangent, bitangent, normal );\n		#endif\n	#endif\n#endif\nvec3 geometryNormal = normal;",
						normal_fragment_maps: "#ifdef OBJECTSPACE_NORMALMAP\n	normal = texture2D( normalMap, vUv ).xyz * 2.0 - 1.0;\n	#ifdef FLIP_SIDED\n		normal = - normal;\n	#endif\n	#ifdef DOUBLE_SIDED\n		normal = normal * faceDirection;\n	#endif\n	normal = normalize( normalMatrix * normal );\n#elif defined( TANGENTSPACE_NORMALMAP )\n	vec3 mapN = texture2D( normalMap, vUv ).xyz * 2.0 - 1.0;\n	mapN.xy *= normalScale;\n	#ifdef USE_TANGENT\n		normal = normalize( vTBN * mapN );\n	#else\n		normal = perturbNormal2Arb( - vViewPosition, normal, mapN, faceDirection );\n	#endif\n#elif defined( USE_BUMPMAP )\n	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );\n#endif",
						normal_pars_fragment: "#ifndef FLAT_SHADED\n	varying vec3 vNormal;\n	#ifdef USE_TANGENT\n		varying vec3 vTangent;\n		varying vec3 vBitangent;\n	#endif\n#endif",
						normal_pars_vertex: "#ifndef FLAT_SHADED\n	varying vec3 vNormal;\n	#ifdef USE_TANGENT\n		varying vec3 vTangent;\n		varying vec3 vBitangent;\n	#endif\n#endif",
						normal_vertex: "#ifndef FLAT_SHADED\n	vNormal = normalize( transformedNormal );\n	#ifdef USE_TANGENT\n		vTangent = normalize( transformedTangent );\n		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );\n	#endif\n#endif",
						normalmap_pars_fragment: "#ifdef USE_NORMALMAP\n	uniform sampler2D normalMap;\n	uniform vec2 normalScale;\n#endif\n#ifdef OBJECTSPACE_NORMALMAP\n	uniform mat3 normalMatrix;\n#endif\n#if ! defined ( USE_TANGENT ) && ( defined ( TANGENTSPACE_NORMALMAP ) || defined ( USE_CLEARCOAT_NORMALMAP ) )\n	vec3 perturbNormal2Arb( vec3 eye_pos, vec3 surf_norm, vec3 mapN, float faceDirection ) {\n		vec3 q0 = vec3( dFdx( eye_pos.x ), dFdx( eye_pos.y ), dFdx( eye_pos.z ) );\n		vec3 q1 = vec3( dFdy( eye_pos.x ), dFdy( eye_pos.y ), dFdy( eye_pos.z ) );\n		vec2 st0 = dFdx( vUv.st );\n		vec2 st1 = dFdy( vUv.st );\n		vec3 N = surf_norm;\n		vec3 q1perp = cross( q1, N );\n		vec3 q0perp = cross( N, q0 );\n		vec3 T = q1perp * st0.x + q0perp * st1.x;\n		vec3 B = q1perp * st0.y + q0perp * st1.y;\n		float det = max( dot( T, T ), dot( B, B ) );\n		float scale = ( det == 0.0 ) ? 0.0 : faceDirection * inversesqrt( det );\n		return normalize( T * ( mapN.x * scale ) + B * ( mapN.y * scale ) + N * mapN.z );\n	}\n#endif",
						clearcoat_normal_fragment_begin: "#ifdef USE_CLEARCOAT\n	vec3 clearcoatNormal = geometryNormal;\n#endif",
						clearcoat_normal_fragment_maps: "#ifdef USE_CLEARCOAT_NORMALMAP\n	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vUv ).xyz * 2.0 - 1.0;\n	clearcoatMapN.xy *= clearcoatNormalScale;\n	#ifdef USE_TANGENT\n		clearcoatNormal = normalize( vTBN * clearcoatMapN );\n	#else\n		clearcoatNormal = perturbNormal2Arb( - vViewPosition, clearcoatNormal, clearcoatMapN, faceDirection );\n	#endif\n#endif",
						clearcoat_pars_fragment: "#ifdef USE_CLEARCOATMAP\n	uniform sampler2D clearcoatMap;\n#endif\n#ifdef USE_CLEARCOAT_ROUGHNESSMAP\n	uniform sampler2D clearcoatRoughnessMap;\n#endif\n#ifdef USE_CLEARCOAT_NORMALMAP\n	uniform sampler2D clearcoatNormalMap;\n	uniform vec2 clearcoatNormalScale;\n#endif",
						output_fragment: "#ifdef OPAQUE\ndiffuseColor.a = 1.0;\n#endif\n#ifdef USE_TRANSMISSION\ndiffuseColor.a *= transmissionAlpha + 0.1;\n#endif\ngl_FragColor = vec4( outgoingLight, diffuseColor.a );",
						packing: "vec3 packNormalToRGB( const in vec3 normal ) {\n	return normalize( normal ) * 0.5 + 0.5;\n}\nvec3 unpackRGBToNormal( const in vec3 rgb ) {\n	return 2.0 * rgb.xyz - 1.0;\n}\nconst float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;\nconst vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );\nconst vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );\nconst float ShiftRight8 = 1. / 256.;\nvec4 packDepthToRGBA( const in float v ) {\n	vec4 r = vec4( fract( v * PackFactors ), v );\n	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;\n}\nfloat unpackRGBAToDepth( const in vec4 v ) {\n	return dot( v, UnpackFactors );\n}\nvec4 pack2HalfToRGBA( vec2 v ) {\n	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );\n	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );\n}\nvec2 unpackRGBATo2Half( vec4 v ) {\n	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );\n}\nfloat viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {\n	return ( viewZ + near ) / ( near - far );\n}\nfloat orthographicDepthToViewZ( const in float linearClipZ, const in float near, const in float far ) {\n	return linearClipZ * ( near - far ) - near;\n}\nfloat viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {\n	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );\n}\nfloat perspectiveDepthToViewZ( const in float invClipZ, const in float near, const in float far ) {\n	return ( near * far ) / ( ( far - near ) * invClipZ - far );\n}",
						premultiplied_alpha_fragment: "#ifdef PREMULTIPLIED_ALPHA\n	gl_FragColor.rgb *= gl_FragColor.a;\n#endif",
						project_vertex: "vec4 mvPosition = vec4( transformed, 1.0 );\n#ifdef USE_INSTANCING\n	mvPosition = instanceMatrix * mvPosition;\n#endif\nmvPosition = modelViewMatrix * mvPosition;\ngl_Position = projectionMatrix * mvPosition;",
						dithering_fragment: "#ifdef DITHERING\n	gl_FragColor.rgb = dithering( gl_FragColor.rgb );\n#endif",
						dithering_pars_fragment: "#ifdef DITHERING\n	vec3 dithering( vec3 color ) {\n		float grid_position = rand( gl_FragCoord.xy );\n		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );\n		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );\n		return color + dither_shift_RGB;\n	}\n#endif",
						roughnessmap_fragment: "float roughnessFactor = roughness;\n#ifdef USE_ROUGHNESSMAP\n	vec4 texelRoughness = texture2D( roughnessMap, vUv );\n	roughnessFactor *= texelRoughness.g;\n#endif",
						roughnessmap_pars_fragment: "#ifdef USE_ROUGHNESSMAP\n	uniform sampler2D roughnessMap;\n#endif",
						shadowmap_pars_fragment: "#ifdef USE_SHADOWMAP\n	#if NUM_DIR_LIGHT_SHADOWS > 0\n		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];\n		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];\n		struct DirectionalLightShadow {\n			float shadowBias;\n			float shadowNormalBias;\n			float shadowRadius;\n			vec2 shadowMapSize;\n		};\n		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];\n	#endif\n	#if NUM_SPOT_LIGHT_SHADOWS > 0\n		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];\n		varying vec4 vSpotShadowCoord[ NUM_SPOT_LIGHT_SHADOWS ];\n		struct SpotLightShadow {\n			float shadowBias;\n			float shadowNormalBias;\n			float shadowRadius;\n			vec2 shadowMapSize;\n		};\n		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];\n	#endif\n	#if NUM_POINT_LIGHT_SHADOWS > 0\n		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];\n		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];\n		struct PointLightShadow {\n			float shadowBias;\n			float shadowNormalBias;\n			float shadowRadius;\n			vec2 shadowMapSize;\n			float shadowCameraNear;\n			float shadowCameraFar;\n		};\n		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];\n	#endif\n	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {\n		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );\n	}\n	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {\n		return unpackRGBATo2Half( texture2D( shadow, uv ) );\n	}\n	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){\n		float occlusion = 1.0;\n		vec2 distribution = texture2DDistribution( shadow, uv );\n		float hard_shadow = step( compare , distribution.x );\n		if (hard_shadow != 1.0 ) {\n			float distance = compare - distribution.x ;\n			float variance = max( 0.00000, distribution.y * distribution.y );\n			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );\n		}\n		return occlusion;\n	}\n	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {\n		float shadow = 1.0;\n		shadowCoord.xyz /= shadowCoord.w;\n		shadowCoord.z += shadowBias;\n		bvec4 inFrustumVec = bvec4 ( shadowCoord.x >= 0.0, shadowCoord.x <= 1.0, shadowCoord.y >= 0.0, shadowCoord.y <= 1.0 );\n		bool inFrustum = all( inFrustumVec );\n		bvec2 frustumTestVec = bvec2( inFrustum, shadowCoord.z <= 1.0 );\n		bool frustumTest = all( frustumTestVec );\n		if ( frustumTest ) {\n		#if defined( SHADOWMAP_TYPE_PCF )\n			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;\n			float dx0 = - texelSize.x * shadowRadius;\n			float dy0 = - texelSize.y * shadowRadius;\n			float dx1 = + texelSize.x * shadowRadius;\n			float dy1 = + texelSize.y * shadowRadius;\n			float dx2 = dx0 / 2.0;\n			float dy2 = dy0 / 2.0;\n			float dx3 = dx1 / 2.0;\n			float dy3 = dy1 / 2.0;\n			shadow = (\n				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +\n				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +\n				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +\n				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +\n				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +\n				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +\n				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +\n				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +\n				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +\n				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +\n				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +\n				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +\n				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +\n				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +\n				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +\n				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +\n				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )\n			) * ( 1.0 / 17.0 );\n		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )\n			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;\n			float dx = texelSize.x;\n			float dy = texelSize.y;\n			vec2 uv = shadowCoord.xy;\n			vec2 f = fract( uv * shadowMapSize + 0.5 );\n			uv -= f * texelSize;\n			shadow = (\n				texture2DCompare( shadowMap, uv, shadowCoord.z ) +\n				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +\n				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +\n				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +\n				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ), \n					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),\n					 f.x ) +\n				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ), \n					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),\n					 f.x ) +\n				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ), \n					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),\n					 f.y ) +\n				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ), \n					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),\n					 f.y ) +\n				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ), \n						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),\n						  f.x ),\n					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ), \n						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),\n						  f.x ),\n					 f.y )\n			) * ( 1.0 / 9.0 );\n		#elif defined( SHADOWMAP_TYPE_VSM )\n			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );\n		#else\n			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );\n		#endif\n		}\n		return shadow;\n	}\n	vec2 cubeToUV( vec3 v, float texelSizeY ) {\n		vec3 absV = abs( v );\n		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );\n		absV *= scaleToCube;\n		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );\n		vec2 planar = v.xy;\n		float almostATexel = 1.5 * texelSizeY;\n		float almostOne = 1.0 - almostATexel;\n		if ( absV.z >= almostOne ) {\n			if ( v.z > 0.0 )\n				planar.x = 4.0 - v.x;\n		} else if ( absV.x >= almostOne ) {\n			float signX = sign( v.x );\n			planar.x = v.z * signX + 2.0 * signX;\n		} else if ( absV.y >= almostOne ) {\n			float signY = sign( v.y );\n			planar.x = v.x + 2.0 * signY + 2.0;\n			planar.y = v.z * signY - 2.0;\n		}\n		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );\n	}\n	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {\n		vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );\n		vec3 lightToPosition = shadowCoord.xyz;\n		float dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );		dp += shadowBias;\n		vec3 bd3D = normalize( lightToPosition );\n		#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )\n			vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;\n			return (\n				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +\n				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +\n				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +\n				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +\n				texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +\n				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +\n				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +\n				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +\n				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )\n			) * ( 1.0 / 9.0 );\n		#else\n			return texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );\n		#endif\n	}\n#endif",
						shadowmap_pars_vertex: "#ifdef USE_SHADOWMAP\n	#if NUM_DIR_LIGHT_SHADOWS > 0\n		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];\n		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];\n		struct DirectionalLightShadow {\n			float shadowBias;\n			float shadowNormalBias;\n			float shadowRadius;\n			vec2 shadowMapSize;\n		};\n		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];\n	#endif\n	#if NUM_SPOT_LIGHT_SHADOWS > 0\n		uniform mat4 spotShadowMatrix[ NUM_SPOT_LIGHT_SHADOWS ];\n		varying vec4 vSpotShadowCoord[ NUM_SPOT_LIGHT_SHADOWS ];\n		struct SpotLightShadow {\n			float shadowBias;\n			float shadowNormalBias;\n			float shadowRadius;\n			vec2 shadowMapSize;\n		};\n		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];\n	#endif\n	#if NUM_POINT_LIGHT_SHADOWS > 0\n		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];\n		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];\n		struct PointLightShadow {\n			float shadowBias;\n			float shadowNormalBias;\n			float shadowRadius;\n			vec2 shadowMapSize;\n			float shadowCameraNear;\n			float shadowCameraFar;\n		};\n		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];\n	#endif\n#endif",
						shadowmap_vertex: "#ifdef USE_SHADOWMAP\n	#if NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SPOT_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0\n		vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );\n		vec4 shadowWorldPosition;\n	#endif\n	#if NUM_DIR_LIGHT_SHADOWS > 0\n	#pragma unroll_loop_start\n	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {\n		shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );\n		vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;\n	}\n	#pragma unroll_loop_end\n	#endif\n	#if NUM_SPOT_LIGHT_SHADOWS > 0\n	#pragma unroll_loop_start\n	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {\n		shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias, 0 );\n		vSpotShadowCoord[ i ] = spotShadowMatrix[ i ] * shadowWorldPosition;\n	}\n	#pragma unroll_loop_end\n	#endif\n	#if NUM_POINT_LIGHT_SHADOWS > 0\n	#pragma unroll_loop_start\n	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {\n		shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );\n		vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;\n	}\n	#pragma unroll_loop_end\n	#endif\n#endif",
						shadowmask_pars_fragment: "float getShadowMask() {\n	float shadow = 1.0;\n	#ifdef USE_SHADOWMAP\n	#if NUM_DIR_LIGHT_SHADOWS > 0\n	DirectionalLightShadow directionalLight;\n	#pragma unroll_loop_start\n	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {\n		directionalLight = directionalLightShadows[ i ];\n		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;\n	}\n	#pragma unroll_loop_end\n	#endif\n	#if NUM_SPOT_LIGHT_SHADOWS > 0\n	SpotLightShadow spotLight;\n	#pragma unroll_loop_start\n	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {\n		spotLight = spotLightShadows[ i ];\n		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotShadowCoord[ i ] ) : 1.0;\n	}\n	#pragma unroll_loop_end\n	#endif\n	#if NUM_POINT_LIGHT_SHADOWS > 0\n	PointLightShadow pointLight;\n	#pragma unroll_loop_start\n	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {\n		pointLight = pointLightShadows[ i ];\n		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;\n	}\n	#pragma unroll_loop_end\n	#endif\n	#endif\n	return shadow;\n}",
						skinbase_vertex: "#ifdef USE_SKINNING\n	mat4 boneMatX = getBoneMatrix( skinIndex.x );\n	mat4 boneMatY = getBoneMatrix( skinIndex.y );\n	mat4 boneMatZ = getBoneMatrix( skinIndex.z );\n	mat4 boneMatW = getBoneMatrix( skinIndex.w );\n#endif",
						skinning_pars_vertex: "#ifdef USE_SKINNING\n	uniform mat4 bindMatrix;\n	uniform mat4 bindMatrixInverse;\n	#ifdef BONE_TEXTURE\n		uniform highp sampler2D boneTexture;\n		uniform int boneTextureSize;\n		mat4 getBoneMatrix( const in float i ) {\n			float j = i * 4.0;\n			float x = mod( j, float( boneTextureSize ) );\n			float y = floor( j / float( boneTextureSize ) );\n			float dx = 1.0 / float( boneTextureSize );\n			float dy = 1.0 / float( boneTextureSize );\n			y = dy * ( y + 0.5 );\n			vec4 v1 = texture2D( boneTexture, vec2( dx * ( x + 0.5 ), y ) );\n			vec4 v2 = texture2D( boneTexture, vec2( dx * ( x + 1.5 ), y ) );\n			vec4 v3 = texture2D( boneTexture, vec2( dx * ( x + 2.5 ), y ) );\n			vec4 v4 = texture2D( boneTexture, vec2( dx * ( x + 3.5 ), y ) );\n			mat4 bone = mat4( v1, v2, v3, v4 );\n			return bone;\n		}\n	#else\n		uniform mat4 boneMatrices[ MAX_BONES ];\n		mat4 getBoneMatrix( const in float i ) {\n			mat4 bone = boneMatrices[ int(i) ];\n			return bone;\n		}\n	#endif\n#endif",
						skinning_vertex: "#ifdef USE_SKINNING\n	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );\n	vec4 skinned = vec4( 0.0 );\n	skinned += boneMatX * skinVertex * skinWeight.x;\n	skinned += boneMatY * skinVertex * skinWeight.y;\n	skinned += boneMatZ * skinVertex * skinWeight.z;\n	skinned += boneMatW * skinVertex * skinWeight.w;\n	transformed = ( bindMatrixInverse * skinned ).xyz;\n#endif",
						skinnormal_vertex: "#ifdef USE_SKINNING\n	mat4 skinMatrix = mat4( 0.0 );\n	skinMatrix += skinWeight.x * boneMatX;\n	skinMatrix += skinWeight.y * boneMatY;\n	skinMatrix += skinWeight.z * boneMatZ;\n	skinMatrix += skinWeight.w * boneMatW;\n	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;\n	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;\n	#ifdef USE_TANGENT\n		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;\n	#endif\n#endif",
						specularmap_fragment: "float specularStrength;\n#ifdef USE_SPECULARMAP\n	vec4 texelSpecular = texture2D( specularMap, vUv );\n	specularStrength = texelSpecular.r;\n#else\n	specularStrength = 1.0;\n#endif",
						specularmap_pars_fragment: "#ifdef USE_SPECULARMAP\n	uniform sampler2D specularMap;\n#endif",
						tonemapping_fragment: "#if defined( TONE_MAPPING )\n	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );\n#endif",
						tonemapping_pars_fragment: "#ifndef saturate\n#define saturate( a ) clamp( a, 0.0, 1.0 )\n#endif\nuniform float toneMappingExposure;\nvec3 LinearToneMapping( vec3 color ) {\n	return toneMappingExposure * color;\n}\nvec3 ReinhardToneMapping( vec3 color ) {\n	color *= toneMappingExposure;\n	return saturate( color / ( vec3( 1.0 ) + color ) );\n}\nvec3 OptimizedCineonToneMapping( vec3 color ) {\n	color *= toneMappingExposure;\n	color = max( vec3( 0.0 ), color - 0.004 );\n	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );\n}\nvec3 RRTAndODTFit( vec3 v ) {\n	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;\n	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;\n	return a / b;\n}\nvec3 ACESFilmicToneMapping( vec3 color ) {\n	const mat3 ACESInputMat = mat3(\n		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),\n		vec3( 0.04823, 0.01566, 0.83777 )\n	);\n	const mat3 ACESOutputMat = mat3(\n		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),\n		vec3( -0.07367, -0.00605,  1.07602 )\n	);\n	color *= toneMappingExposure / 0.6;\n	color = ACESInputMat * color;\n	color = RRTAndODTFit( color );\n	color = ACESOutputMat * color;\n	return saturate( color );\n}\nvec3 CustomToneMapping( vec3 color ) { return color; }",
						transmission_fragment: "#ifdef USE_TRANSMISSION\n	float transmissionAlpha = 1.0;\n	float transmissionFactor = transmission;\n	float thicknessFactor = thickness;\n	#ifdef USE_TRANSMISSIONMAP\n		transmissionFactor *= texture2D( transmissionMap, vUv ).r;\n	#endif\n	#ifdef USE_THICKNESSMAP\n		thicknessFactor *= texture2D( thicknessMap, vUv ).g;\n	#endif\n	vec3 pos = vWorldPosition;\n	vec3 v = normalize( cameraPosition - pos );\n	vec3 n = inverseTransformDirection( normal, viewMatrix );\n	vec4 transmission = getIBLVolumeRefraction(\n		n, v, roughnessFactor, material.diffuseColor, material.specularColor, material.specularF90,\n		pos, modelMatrix, viewMatrix, projectionMatrix, ior, thicknessFactor,\n		attenuationColor, attenuationDistance );\n	totalDiffuse = mix( totalDiffuse, transmission.rgb, transmissionFactor );\n	transmissionAlpha = mix( transmissionAlpha, transmission.a, transmissionFactor );\n#endif",
						transmission_pars_fragment: "#ifdef USE_TRANSMISSION\n	uniform float transmission;\n	uniform float thickness;\n	uniform float attenuationDistance;\n	uniform vec3 attenuationColor;\n	#ifdef USE_TRANSMISSIONMAP\n		uniform sampler2D transmissionMap;\n	#endif\n	#ifdef USE_THICKNESSMAP\n		uniform sampler2D thicknessMap;\n	#endif\n	uniform vec2 transmissionSamplerSize;\n	uniform sampler2D transmissionSamplerMap;\n	uniform mat4 modelMatrix;\n	uniform mat4 projectionMatrix;\n	varying vec3 vWorldPosition;\n	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {\n		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );\n		vec3 modelScale;\n		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );\n		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );\n		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );\n		return normalize( refractionVector ) * thickness * modelScale;\n	}\n	float applyIorToRoughness( const in float roughness, const in float ior ) {\n		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );\n	}\n	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {\n		float framebufferLod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );\n		#ifdef TEXTURE_LOD_EXT\n			return texture2DLodEXT( transmissionSamplerMap, fragCoord.xy, framebufferLod );\n		#else\n			return texture2D( transmissionSamplerMap, fragCoord.xy, framebufferLod );\n		#endif\n	}\n	vec3 applyVolumeAttenuation( const in vec3 radiance, const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {\n		if ( attenuationDistance == 0.0 ) {\n			return radiance;\n		} else {\n			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;\n			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance * radiance;\n		}\n	}\n	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,\n		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,\n		const in mat4 viewMatrix, const in mat4 projMatrix, const in float ior, const in float thickness,\n		const in vec3 attenuationColor, const in float attenuationDistance ) {\n		vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );\n		vec3 refractedRayExit = position + transmissionRay;\n		vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );\n		vec2 refractionCoords = ndcPos.xy / ndcPos.w;\n		refractionCoords += 1.0;\n		refractionCoords /= 2.0;\n		vec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );\n		vec3 attenuatedColor = applyVolumeAttenuation( transmittedLight.rgb, length( transmissionRay ), attenuationColor, attenuationDistance );\n		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );\n		return vec4( ( 1.0 - F ) * attenuatedColor * diffuseColor, transmittedLight.a );\n	}\n#endif",
						uv_pars_fragment: "#if ( defined( USE_UV ) && ! defined( UVS_VERTEX_ONLY ) )\n	varying vec2 vUv;\n#endif",
						uv_pars_vertex: "#ifdef USE_UV\n	#ifdef UVS_VERTEX_ONLY\n		vec2 vUv;\n	#else\n		varying vec2 vUv;\n	#endif\n	uniform mat3 uvTransform;\n#endif",
						uv_vertex: "#ifdef USE_UV\n	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;\n#endif",
						uv2_pars_fragment: "#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )\n	varying vec2 vUv2;\n#endif",
						uv2_pars_vertex: "#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )\n	attribute vec2 uv2;\n	varying vec2 vUv2;\n	uniform mat3 uv2Transform;\n#endif",
						uv2_vertex: "#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )\n	vUv2 = ( uv2Transform * vec3( uv2, 1 ) ).xy;\n#endif",
						worldpos_vertex: "#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION )\n	vec4 worldPosition = vec4( transformed, 1.0 );\n	#ifdef USE_INSTANCING\n		worldPosition = instanceMatrix * worldPosition;\n	#endif\n	worldPosition = modelMatrix * worldPosition;\n#endif",
						background_vert: "varying vec2 vUv;\nuniform mat3 uvTransform;\nvoid main() {\n	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;\n	gl_Position = vec4( position.xy, 1.0, 1.0 );\n}",
						background_frag: "uniform sampler2D t2D;\nvarying vec2 vUv;\nvoid main() {\n	gl_FragColor = texture2D( t2D, vUv );\n	#include <tonemapping_fragment>\n	#include <encodings_fragment>\n}",
						cube_vert: "varying vec3 vWorldDirection;\n#include <common>\nvoid main() {\n	vWorldDirection = transformDirection( position, modelMatrix );\n	#include <begin_vertex>\n	#include <project_vertex>\n	gl_Position.z = gl_Position.w;\n}",
						cube_frag: "#include <envmap_common_pars_fragment>\nuniform float opacity;\nvarying vec3 vWorldDirection;\n#include <cube_uv_reflection_fragment>\nvoid main() {\n	vec3 vReflect = vWorldDirection;\n	#include <envmap_fragment>\n	gl_FragColor = envColor;\n	gl_FragColor.a *= opacity;\n	#include <tonemapping_fragment>\n	#include <encodings_fragment>\n}",
						depth_vert: "#include <common>\n#include <uv_pars_vertex>\n#include <displacementmap_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvarying vec2 vHighPrecisionZW;\nvoid main() {\n	#include <uv_vertex>\n	#include <skinbase_vertex>\n	#ifdef USE_DISPLACEMENTMAP\n		#include <beginnormal_vertex>\n		#include <morphnormal_vertex>\n		#include <skinnormal_vertex>\n	#endif\n	#include <begin_vertex>\n	#include <morphtarget_vertex>\n	#include <skinning_vertex>\n	#include <displacementmap_vertex>\n	#include <project_vertex>\n	#include <logdepthbuf_vertex>\n	#include <clipping_planes_vertex>\n	vHighPrecisionZW = gl_Position.zw;\n}",
						depth_frag: "#if DEPTH_PACKING == 3200\n	uniform float opacity;\n#endif\n#include <common>\n#include <packing>\n#include <uv_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <alphatest_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvarying vec2 vHighPrecisionZW;\nvoid main() {\n	#include <clipping_planes_fragment>\n	vec4 diffuseColor = vec4( 1.0 );\n	#if DEPTH_PACKING == 3200\n		diffuseColor.a = opacity;\n	#endif\n	#include <map_fragment>\n	#include <alphamap_fragment>\n	#include <alphatest_fragment>\n	#include <logdepthbuf_fragment>\n	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;\n	#if DEPTH_PACKING == 3200\n		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );\n	#elif DEPTH_PACKING == 3201\n		gl_FragColor = packDepthToRGBA( fragCoordZ );\n	#endif\n}",
						distanceRGBA_vert: "#define DISTANCE\nvarying vec3 vWorldPosition;\n#include <common>\n#include <uv_pars_vertex>\n#include <displacementmap_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n	#include <uv_vertex>\n	#include <skinbase_vertex>\n	#ifdef USE_DISPLACEMENTMAP\n		#include <beginnormal_vertex>\n		#include <morphnormal_vertex>\n		#include <skinnormal_vertex>\n	#endif\n	#include <begin_vertex>\n	#include <morphtarget_vertex>\n	#include <skinning_vertex>\n	#include <displacementmap_vertex>\n	#include <project_vertex>\n	#include <worldpos_vertex>\n	#include <clipping_planes_vertex>\n	vWorldPosition = worldPosition.xyz;\n}",
						distanceRGBA_frag: "#define DISTANCE\nuniform vec3 referencePosition;\nuniform float nearDistance;\nuniform float farDistance;\nvarying vec3 vWorldPosition;\n#include <common>\n#include <packing>\n#include <uv_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <alphatest_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main () {\n	#include <clipping_planes_fragment>\n	vec4 diffuseColor = vec4( 1.0 );\n	#include <map_fragment>\n	#include <alphamap_fragment>\n	#include <alphatest_fragment>\n	float dist = length( vWorldPosition - referencePosition );\n	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );\n	dist = saturate( dist );\n	gl_FragColor = packDepthToRGBA( dist );\n}",
						equirect_vert: "varying vec3 vWorldDirection;\n#include <common>\nvoid main() {\n	vWorldDirection = transformDirection( position, modelMatrix );\n	#include <begin_vertex>\n	#include <project_vertex>\n}",
						equirect_frag: "uniform sampler2D tEquirect;\nvarying vec3 vWorldDirection;\n#include <common>\nvoid main() {\n	vec3 direction = normalize( vWorldDirection );\n	vec2 sampleUV = equirectUv( direction );\n	gl_FragColor = texture2D( tEquirect, sampleUV );\n	#include <tonemapping_fragment>\n	#include <encodings_fragment>\n}",
						linedashed_vert: "uniform float scale;\nattribute float lineDistance;\nvarying float vLineDistance;\n#include <common>\n#include <color_pars_vertex>\n#include <fog_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n	vLineDistance = scale * lineDistance;\n	#include <color_vertex>\n	#include <begin_vertex>\n	#include <morphtarget_vertex>\n	#include <project_vertex>\n	#include <logdepthbuf_vertex>\n	#include <clipping_planes_vertex>\n	#include <fog_vertex>\n}",
						linedashed_frag: "uniform vec3 diffuse;\nuniform float opacity;\nuniform float dashSize;\nuniform float totalSize;\nvarying float vLineDistance;\n#include <common>\n#include <color_pars_fragment>\n#include <fog_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n	#include <clipping_planes_fragment>\n	if ( mod( vLineDistance, totalSize ) > dashSize ) {\n		discard;\n	}\n	vec3 outgoingLight = vec3( 0.0 );\n	vec4 diffuseColor = vec4( diffuse, opacity );\n	#include <logdepthbuf_fragment>\n	#include <color_fragment>\n	outgoingLight = diffuseColor.rgb;\n	#include <output_fragment>\n	#include <tonemapping_fragment>\n	#include <encodings_fragment>\n	#include <fog_fragment>\n	#include <premultiplied_alpha_fragment>\n}",
						meshbasic_vert: "#include <common>\n#include <uv_pars_vertex>\n#include <uv2_pars_vertex>\n#include <envmap_pars_vertex>\n#include <color_pars_vertex>\n#include <fog_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n	#include <uv_vertex>\n	#include <uv2_vertex>\n	#include <color_vertex>\n	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )\n		#include <beginnormal_vertex>\n		#include <morphnormal_vertex>\n		#include <skinbase_vertex>\n		#include <skinnormal_vertex>\n		#include <defaultnormal_vertex>\n	#endif\n	#include <begin_vertex>\n	#include <morphtarget_vertex>\n	#include <skinning_vertex>\n	#include <project_vertex>\n	#include <logdepthbuf_vertex>\n	#include <clipping_planes_vertex>\n	#include <worldpos_vertex>\n	#include <envmap_vertex>\n	#include <fog_vertex>\n}",
						meshbasic_frag: "uniform vec3 diffuse;\nuniform float opacity;\n#ifndef FLAT_SHADED\n	varying vec3 vNormal;\n#endif\n#include <common>\n#include <dithering_pars_fragment>\n#include <color_pars_fragment>\n#include <uv_pars_fragment>\n#include <uv2_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <alphatest_pars_fragment>\n#include <aomap_pars_fragment>\n#include <lightmap_pars_fragment>\n#include <envmap_common_pars_fragment>\n#include <envmap_pars_fragment>\n#include <cube_uv_reflection_fragment>\n#include <fog_pars_fragment>\n#include <specularmap_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n	#include <clipping_planes_fragment>\n	vec4 diffuseColor = vec4( diffuse, opacity );\n	#include <logdepthbuf_fragment>\n	#include <map_fragment>\n	#include <color_fragment>\n	#include <alphamap_fragment>\n	#include <alphatest_fragment>\n	#include <specularmap_fragment>\n	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );\n	#ifdef USE_LIGHTMAP\n		vec4 lightMapTexel= texture2D( lightMap, vUv2 );\n		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity;\n	#else\n		reflectedLight.indirectDiffuse += vec3( 1.0 );\n	#endif\n	#include <aomap_fragment>\n	reflectedLight.indirectDiffuse *= diffuseColor.rgb;\n	vec3 outgoingLight = reflectedLight.indirectDiffuse;\n	#include <envmap_fragment>\n	#include <output_fragment>\n	#include <tonemapping_fragment>\n	#include <encodings_fragment>\n	#include <fog_fragment>\n	#include <premultiplied_alpha_fragment>\n	#include <dithering_fragment>\n}",
						meshlambert_vert: "#define LAMBERT\nvarying vec3 vLightFront;\nvarying vec3 vIndirectFront;\n#ifdef DOUBLE_SIDED\n	varying vec3 vLightBack;\n	varying vec3 vIndirectBack;\n#endif\n#include <common>\n#include <uv_pars_vertex>\n#include <uv2_pars_vertex>\n#include <envmap_pars_vertex>\n#include <bsdfs>\n#include <lights_pars_begin>\n#include <color_pars_vertex>\n#include <fog_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <shadowmap_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n	#include <uv_vertex>\n	#include <uv2_vertex>\n	#include <color_vertex>\n	#include <beginnormal_vertex>\n	#include <morphnormal_vertex>\n	#include <skinbase_vertex>\n	#include <skinnormal_vertex>\n	#include <defaultnormal_vertex>\n	#include <begin_vertex>\n	#include <morphtarget_vertex>\n	#include <skinning_vertex>\n	#include <project_vertex>\n	#include <logdepthbuf_vertex>\n	#include <clipping_planes_vertex>\n	#include <worldpos_vertex>\n	#include <envmap_vertex>\n	#include <lights_lambert_vertex>\n	#include <shadowmap_vertex>\n	#include <fog_vertex>\n}",
						meshlambert_frag: "uniform vec3 diffuse;\nuniform vec3 emissive;\nuniform float opacity;\nvarying vec3 vLightFront;\nvarying vec3 vIndirectFront;\n#ifdef DOUBLE_SIDED\n	varying vec3 vLightBack;\n	varying vec3 vIndirectBack;\n#endif\n#include <common>\n#include <packing>\n#include <dithering_pars_fragment>\n#include <color_pars_fragment>\n#include <uv_pars_fragment>\n#include <uv2_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <alphatest_pars_fragment>\n#include <aomap_pars_fragment>\n#include <lightmap_pars_fragment>\n#include <emissivemap_pars_fragment>\n#include <envmap_common_pars_fragment>\n#include <envmap_pars_fragment>\n#include <cube_uv_reflection_fragment>\n#include <bsdfs>\n#include <lights_pars_begin>\n#include <fog_pars_fragment>\n#include <shadowmap_pars_fragment>\n#include <shadowmask_pars_fragment>\n#include <specularmap_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n	#include <clipping_planes_fragment>\n	vec4 diffuseColor = vec4( diffuse, opacity );\n	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );\n	vec3 totalEmissiveRadiance = emissive;\n	#include <logdepthbuf_fragment>\n	#include <map_fragment>\n	#include <color_fragment>\n	#include <alphamap_fragment>\n	#include <alphatest_fragment>\n	#include <specularmap_fragment>\n	#include <emissivemap_fragment>\n	#ifdef DOUBLE_SIDED\n		reflectedLight.indirectDiffuse += ( gl_FrontFacing ) ? vIndirectFront : vIndirectBack;\n	#else\n		reflectedLight.indirectDiffuse += vIndirectFront;\n	#endif\n	#include <lightmap_fragment>\n	reflectedLight.indirectDiffuse *= BRDF_Lambert( diffuseColor.rgb );\n	#ifdef DOUBLE_SIDED\n		reflectedLight.directDiffuse = ( gl_FrontFacing ) ? vLightFront : vLightBack;\n	#else\n		reflectedLight.directDiffuse = vLightFront;\n	#endif\n	reflectedLight.directDiffuse *= BRDF_Lambert( diffuseColor.rgb ) * getShadowMask();\n	#include <aomap_fragment>\n	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;\n	#include <envmap_fragment>\n	#include <output_fragment>\n	#include <tonemapping_fragment>\n	#include <encodings_fragment>\n	#include <fog_fragment>\n	#include <premultiplied_alpha_fragment>\n	#include <dithering_fragment>\n}",
						meshmatcap_vert: "#define MATCAP\nvarying vec3 vViewPosition;\n#include <common>\n#include <uv_pars_vertex>\n#include <color_pars_vertex>\n#include <displacementmap_pars_vertex>\n#include <fog_pars_vertex>\n#include <normal_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n	#include <uv_vertex>\n	#include <color_vertex>\n	#include <beginnormal_vertex>\n	#include <morphnormal_vertex>\n	#include <skinbase_vertex>\n	#include <skinnormal_vertex>\n	#include <defaultnormal_vertex>\n	#include <normal_vertex>\n	#include <begin_vertex>\n	#include <morphtarget_vertex>\n	#include <skinning_vertex>\n	#include <displacementmap_vertex>\n	#include <project_vertex>\n	#include <logdepthbuf_vertex>\n	#include <clipping_planes_vertex>\n	#include <fog_vertex>\n	vViewPosition = - mvPosition.xyz;\n}",
						meshmatcap_frag: "#define MATCAP\nuniform vec3 diffuse;\nuniform float opacity;\nuniform sampler2D matcap;\nvarying vec3 vViewPosition;\n#include <common>\n#include <dithering_pars_fragment>\n#include <color_pars_fragment>\n#include <uv_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <alphatest_pars_fragment>\n#include <fog_pars_fragment>\n#include <normal_pars_fragment>\n#include <bumpmap_pars_fragment>\n#include <normalmap_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n	#include <clipping_planes_fragment>\n	vec4 diffuseColor = vec4( diffuse, opacity );\n	#include <logdepthbuf_fragment>\n	#include <map_fragment>\n	#include <color_fragment>\n	#include <alphamap_fragment>\n	#include <alphatest_fragment>\n	#include <normal_fragment_begin>\n	#include <normal_fragment_maps>\n	vec3 viewDir = normalize( vViewPosition );\n	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );\n	vec3 y = cross( viewDir, x );\n	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;\n	#ifdef USE_MATCAP\n		vec4 matcapColor = texture2D( matcap, uv );\n	#else\n		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );\n	#endif\n	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;\n	#include <output_fragment>\n	#include <tonemapping_fragment>\n	#include <encodings_fragment>\n	#include <fog_fragment>\n	#include <premultiplied_alpha_fragment>\n	#include <dithering_fragment>\n}",
						meshnormal_vert: "#define NORMAL\n#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )\n	varying vec3 vViewPosition;\n#endif\n#include <common>\n#include <uv_pars_vertex>\n#include <displacementmap_pars_vertex>\n#include <normal_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n	#include <uv_vertex>\n	#include <beginnormal_vertex>\n	#include <morphnormal_vertex>\n	#include <skinbase_vertex>\n	#include <skinnormal_vertex>\n	#include <defaultnormal_vertex>\n	#include <normal_vertex>\n	#include <begin_vertex>\n	#include <morphtarget_vertex>\n	#include <skinning_vertex>\n	#include <displacementmap_vertex>\n	#include <project_vertex>\n	#include <logdepthbuf_vertex>\n	#include <clipping_planes_vertex>\n#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )\n	vViewPosition = - mvPosition.xyz;\n#endif\n}",
						meshnormal_frag: "#define NORMAL\nuniform float opacity;\n#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )\n	varying vec3 vViewPosition;\n#endif\n#include <packing>\n#include <uv_pars_fragment>\n#include <normal_pars_fragment>\n#include <bumpmap_pars_fragment>\n#include <normalmap_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n	#include <clipping_planes_fragment>\n	#include <logdepthbuf_fragment>\n	#include <normal_fragment_begin>\n	#include <normal_fragment_maps>\n	gl_FragColor = vec4( packNormalToRGB( normal ), opacity );\n}",
						meshphong_vert: "#define PHONG\nvarying vec3 vViewPosition;\n#include <common>\n#include <uv_pars_vertex>\n#include <uv2_pars_vertex>\n#include <displacementmap_pars_vertex>\n#include <envmap_pars_vertex>\n#include <color_pars_vertex>\n#include <fog_pars_vertex>\n#include <normal_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <shadowmap_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n	#include <uv_vertex>\n	#include <uv2_vertex>\n	#include <color_vertex>\n	#include <beginnormal_vertex>\n	#include <morphnormal_vertex>\n	#include <skinbase_vertex>\n	#include <skinnormal_vertex>\n	#include <defaultnormal_vertex>\n	#include <normal_vertex>\n	#include <begin_vertex>\n	#include <morphtarget_vertex>\n	#include <skinning_vertex>\n	#include <displacementmap_vertex>\n	#include <project_vertex>\n	#include <logdepthbuf_vertex>\n	#include <clipping_planes_vertex>\n	vViewPosition = - mvPosition.xyz;\n	#include <worldpos_vertex>\n	#include <envmap_vertex>\n	#include <shadowmap_vertex>\n	#include <fog_vertex>\n}",
						meshphong_frag: "#define PHONG\nuniform vec3 diffuse;\nuniform vec3 emissive;\nuniform vec3 specular;\nuniform float shininess;\nuniform float opacity;\n#include <common>\n#include <packing>\n#include <dithering_pars_fragment>\n#include <color_pars_fragment>\n#include <uv_pars_fragment>\n#include <uv2_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <alphatest_pars_fragment>\n#include <aomap_pars_fragment>\n#include <lightmap_pars_fragment>\n#include <emissivemap_pars_fragment>\n#include <envmap_common_pars_fragment>\n#include <envmap_pars_fragment>\n#include <cube_uv_reflection_fragment>\n#include <fog_pars_fragment>\n#include <bsdfs>\n#include <lights_pars_begin>\n#include <normal_pars_fragment>\n#include <lights_phong_pars_fragment>\n#include <shadowmap_pars_fragment>\n#include <bumpmap_pars_fragment>\n#include <normalmap_pars_fragment>\n#include <specularmap_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n	#include <clipping_planes_fragment>\n	vec4 diffuseColor = vec4( diffuse, opacity );\n	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );\n	vec3 totalEmissiveRadiance = emissive;\n	#include <logdepthbuf_fragment>\n	#include <map_fragment>\n	#include <color_fragment>\n	#include <alphamap_fragment>\n	#include <alphatest_fragment>\n	#include <specularmap_fragment>\n	#include <normal_fragment_begin>\n	#include <normal_fragment_maps>\n	#include <emissivemap_fragment>\n	#include <lights_phong_fragment>\n	#include <lights_fragment_begin>\n	#include <lights_fragment_maps>\n	#include <lights_fragment_end>\n	#include <aomap_fragment>\n	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;\n	#include <envmap_fragment>\n	#include <output_fragment>\n	#include <tonemapping_fragment>\n	#include <encodings_fragment>\n	#include <fog_fragment>\n	#include <premultiplied_alpha_fragment>\n	#include <dithering_fragment>\n}",
						meshphysical_vert: "#define STANDARD\nvarying vec3 vViewPosition;\n#ifdef USE_TRANSMISSION\n	varying vec3 vWorldPosition;\n#endif\n#include <common>\n#include <uv_pars_vertex>\n#include <uv2_pars_vertex>\n#include <displacementmap_pars_vertex>\n#include <color_pars_vertex>\n#include <fog_pars_vertex>\n#include <normal_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <shadowmap_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n	#include <uv_vertex>\n	#include <uv2_vertex>\n	#include <color_vertex>\n	#include <beginnormal_vertex>\n	#include <morphnormal_vertex>\n	#include <skinbase_vertex>\n	#include <skinnormal_vertex>\n	#include <defaultnormal_vertex>\n	#include <normal_vertex>\n	#include <begin_vertex>\n	#include <morphtarget_vertex>\n	#include <skinning_vertex>\n	#include <displacementmap_vertex>\n	#include <project_vertex>\n	#include <logdepthbuf_vertex>\n	#include <clipping_planes_vertex>\n	vViewPosition = - mvPosition.xyz;\n	#include <worldpos_vertex>\n	#include <shadowmap_vertex>\n	#include <fog_vertex>\n#ifdef USE_TRANSMISSION\n	vWorldPosition = worldPosition.xyz;\n#endif\n}",
						meshphysical_frag: "#define STANDARD\n#ifdef PHYSICAL\n	#define IOR\n	#define SPECULAR\n#endif\nuniform vec3 diffuse;\nuniform vec3 emissive;\nuniform float roughness;\nuniform float metalness;\nuniform float opacity;\n#ifdef IOR\n	uniform float ior;\n#endif\n#ifdef SPECULAR\n	uniform float specularIntensity;\n	uniform vec3 specularColor;\n	#ifdef USE_SPECULARINTENSITYMAP\n		uniform sampler2D specularIntensityMap;\n	#endif\n	#ifdef USE_SPECULARCOLORMAP\n		uniform sampler2D specularColorMap;\n	#endif\n#endif\n#ifdef USE_CLEARCOAT\n	uniform float clearcoat;\n	uniform float clearcoatRoughness;\n#endif\n#ifdef USE_SHEEN\n	uniform vec3 sheenColor;\n	uniform float sheenRoughness;\n	#ifdef USE_SHEENCOLORMAP\n		uniform sampler2D sheenColorMap;\n	#endif\n	#ifdef USE_SHEENROUGHNESSMAP\n		uniform sampler2D sheenRoughnessMap;\n	#endif\n#endif\nvarying vec3 vViewPosition;\n#include <common>\n#include <packing>\n#include <dithering_pars_fragment>\n#include <color_pars_fragment>\n#include <uv_pars_fragment>\n#include <uv2_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <alphatest_pars_fragment>\n#include <aomap_pars_fragment>\n#include <lightmap_pars_fragment>\n#include <emissivemap_pars_fragment>\n#include <bsdfs>\n#include <cube_uv_reflection_fragment>\n#include <envmap_common_pars_fragment>\n#include <envmap_physical_pars_fragment>\n#include <fog_pars_fragment>\n#include <lights_pars_begin>\n#include <normal_pars_fragment>\n#include <lights_physical_pars_fragment>\n#include <transmission_pars_fragment>\n#include <shadowmap_pars_fragment>\n#include <bumpmap_pars_fragment>\n#include <normalmap_pars_fragment>\n#include <clearcoat_pars_fragment>\n#include <roughnessmap_pars_fragment>\n#include <metalnessmap_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n	#include <clipping_planes_fragment>\n	vec4 diffuseColor = vec4( diffuse, opacity );\n	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );\n	vec3 totalEmissiveRadiance = emissive;\n	#include <logdepthbuf_fragment>\n	#include <map_fragment>\n	#include <color_fragment>\n	#include <alphamap_fragment>\n	#include <alphatest_fragment>\n	#include <roughnessmap_fragment>\n	#include <metalnessmap_fragment>\n	#include <normal_fragment_begin>\n	#include <normal_fragment_maps>\n	#include <clearcoat_normal_fragment_begin>\n	#include <clearcoat_normal_fragment_maps>\n	#include <emissivemap_fragment>\n	#include <lights_physical_fragment>\n	#include <lights_fragment_begin>\n	#include <lights_fragment_maps>\n	#include <lights_fragment_end>\n	#include <aomap_fragment>\n	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;\n	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;\n	#include <transmission_fragment>\n	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;\n	#ifdef USE_SHEEN\n		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );\n		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecular;\n	#endif\n	#ifdef USE_CLEARCOAT\n		float dotNVcc = saturate( dot( geometry.clearcoatNormal, geometry.viewDir ) );\n		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );\n		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + clearcoatSpecular * material.clearcoat;\n	#endif\n	#include <output_fragment>\n	#include <tonemapping_fragment>\n	#include <encodings_fragment>\n	#include <fog_fragment>\n	#include <premultiplied_alpha_fragment>\n	#include <dithering_fragment>\n}",
						meshtoon_vert: "#define TOON\nvarying vec3 vViewPosition;\n#include <common>\n#include <uv_pars_vertex>\n#include <uv2_pars_vertex>\n#include <displacementmap_pars_vertex>\n#include <color_pars_vertex>\n#include <fog_pars_vertex>\n#include <normal_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <shadowmap_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n	#include <uv_vertex>\n	#include <uv2_vertex>\n	#include <color_vertex>\n	#include <beginnormal_vertex>\n	#include <morphnormal_vertex>\n	#include <skinbase_vertex>\n	#include <skinnormal_vertex>\n	#include <defaultnormal_vertex>\n	#include <normal_vertex>\n	#include <begin_vertex>\n	#include <morphtarget_vertex>\n	#include <skinning_vertex>\n	#include <displacementmap_vertex>\n	#include <project_vertex>\n	#include <logdepthbuf_vertex>\n	#include <clipping_planes_vertex>\n	vViewPosition = - mvPosition.xyz;\n	#include <worldpos_vertex>\n	#include <shadowmap_vertex>\n	#include <fog_vertex>\n}",
						meshtoon_frag: "#define TOON\nuniform vec3 diffuse;\nuniform vec3 emissive;\nuniform float opacity;\n#include <common>\n#include <packing>\n#include <dithering_pars_fragment>\n#include <color_pars_fragment>\n#include <uv_pars_fragment>\n#include <uv2_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <alphatest_pars_fragment>\n#include <aomap_pars_fragment>\n#include <lightmap_pars_fragment>\n#include <emissivemap_pars_fragment>\n#include <gradientmap_pars_fragment>\n#include <fog_pars_fragment>\n#include <bsdfs>\n#include <lights_pars_begin>\n#include <normal_pars_fragment>\n#include <lights_toon_pars_fragment>\n#include <shadowmap_pars_fragment>\n#include <bumpmap_pars_fragment>\n#include <normalmap_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n	#include <clipping_planes_fragment>\n	vec4 diffuseColor = vec4( diffuse, opacity );\n	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );\n	vec3 totalEmissiveRadiance = emissive;\n	#include <logdepthbuf_fragment>\n	#include <map_fragment>\n	#include <color_fragment>\n	#include <alphamap_fragment>\n	#include <alphatest_fragment>\n	#include <normal_fragment_begin>\n	#include <normal_fragment_maps>\n	#include <emissivemap_fragment>\n	#include <lights_toon_fragment>\n	#include <lights_fragment_begin>\n	#include <lights_fragment_maps>\n	#include <lights_fragment_end>\n	#include <aomap_fragment>\n	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;\n	#include <output_fragment>\n	#include <tonemapping_fragment>\n	#include <encodings_fragment>\n	#include <fog_fragment>\n	#include <premultiplied_alpha_fragment>\n	#include <dithering_fragment>\n}",
						points_vert: "uniform float size;\nuniform float scale;\n#include <common>\n#include <color_pars_vertex>\n#include <fog_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n	#include <color_vertex>\n	#include <begin_vertex>\n	#include <morphtarget_vertex>\n	#include <project_vertex>\n	gl_PointSize = size;\n	#ifdef USE_SIZEATTENUATION\n		bool isPerspective = isPerspectiveMatrix( projectionMatrix );\n		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );\n	#endif\n	#include <logdepthbuf_vertex>\n	#include <clipping_planes_vertex>\n	#include <worldpos_vertex>\n	#include <fog_vertex>\n}",
						points_frag: "uniform vec3 diffuse;\nuniform float opacity;\n#include <common>\n#include <color_pars_fragment>\n#include <map_particle_pars_fragment>\n#include <alphatest_pars_fragment>\n#include <fog_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n	#include <clipping_planes_fragment>\n	vec3 outgoingLight = vec3( 0.0 );\n	vec4 diffuseColor = vec4( diffuse, opacity );\n	#include <logdepthbuf_fragment>\n	#include <map_particle_fragment>\n	#include <color_fragment>\n	#include <alphatest_fragment>\n	outgoingLight = diffuseColor.rgb;\n	#include <output_fragment>\n	#include <tonemapping_fragment>\n	#include <encodings_fragment>\n	#include <fog_fragment>\n	#include <premultiplied_alpha_fragment>\n}",
						shadow_vert: "#include <common>\n#include <fog_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <shadowmap_pars_vertex>\nvoid main() {\n	#include <beginnormal_vertex>\n	#include <morphnormal_vertex>\n	#include <skinbase_vertex>\n	#include <skinnormal_vertex>\n	#include <defaultnormal_vertex>\n	#include <begin_vertex>\n	#include <morphtarget_vertex>\n	#include <skinning_vertex>\n	#include <project_vertex>\n	#include <worldpos_vertex>\n	#include <shadowmap_vertex>\n	#include <fog_vertex>\n}",
						shadow_frag: "uniform vec3 color;\nuniform float opacity;\n#include <common>\n#include <packing>\n#include <fog_pars_fragment>\n#include <bsdfs>\n#include <lights_pars_begin>\n#include <shadowmap_pars_fragment>\n#include <shadowmask_pars_fragment>\nvoid main() {\n	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );\n	#include <tonemapping_fragment>\n	#include <encodings_fragment>\n	#include <fog_fragment>\n}",
						sprite_vert: "uniform float rotation;\nuniform vec2 center;\n#include <common>\n#include <uv_pars_vertex>\n#include <fog_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n	#include <uv_vertex>\n	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );\n	vec2 scale;\n	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );\n	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );\n	#ifndef USE_SIZEATTENUATION\n		bool isPerspective = isPerspectiveMatrix( projectionMatrix );\n		if ( isPerspective ) scale *= - mvPosition.z;\n	#endif\n	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;\n	vec2 rotatedPosition;\n	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;\n	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;\n	mvPosition.xy += rotatedPosition;\n	gl_Position = projectionMatrix * mvPosition;\n	#include <logdepthbuf_vertex>\n	#include <clipping_planes_vertex>\n	#include <fog_vertex>\n}",
						sprite_frag: "uniform vec3 diffuse;\nuniform float opacity;\n#include <common>\n#include <uv_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <alphatest_pars_fragment>\n#include <fog_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n	#include <clipping_planes_fragment>\n	vec3 outgoingLight = vec3( 0.0 );\n	vec4 diffuseColor = vec4( diffuse, opacity );\n	#include <logdepthbuf_fragment>\n	#include <map_fragment>\n	#include <alphamap_fragment>\n	#include <alphatest_fragment>\n	outgoingLight = diffuseColor.rgb;\n	#include <output_fragment>\n	#include <tonemapping_fragment>\n	#include <encodings_fragment>\n	#include <fog_fragment>\n}"
					},
					no = {
						common: {
							diffuse: {
								value: new ee(0xffffff)
							},
							opacity: {
								value: 1
							},
							map: {
								value: null
							},
							uvTransform: {
								value: new j
							},
							uv2Transform: {
								value: new j
							},
							alphaMap: {
								value: null
							},
							alphaTest: {
								value: 0
							}
						},
						specularmap: {
							specularMap: {
								value: null
							}
						},
						envmap: {
							envMap: {
								value: null
							},
							flipEnvMap: {
								value: -1
							},
							reflectivity: {
								value: 1
							},
							ior: {
								value: 1.5
							},
							refractionRatio: {
								value: .98
							}
						},
						aomap: {
							aoMap: {
								value: null
							},
							aoMapIntensity: {
								value: 1
							}
						},
						lightmap: {
							lightMap: {
								value: null
							},
							lightMapIntensity: {
								value: 1
							}
						},
						emissivemap: {
							emissiveMap: {
								value: null
							}
						},
						bumpmap: {
							bumpMap: {
								value: null
							},
							bumpScale: {
								value: 1
							}
						},
						normalmap: {
							normalMap: {
								value: null
							},
							normalScale: {
								value: new W(1, 1)
							}
						},
						displacementmap: {
							displacementMap: {
								value: null
							},
							displacementScale: {
								value: 1
							},
							displacementBias: {
								value: 0
							}
						},
						roughnessmap: {
							roughnessMap: {
								value: null
							}
						},
						metalnessmap: {
							metalnessMap: {
								value: null
							}
						},
						gradientmap: {
							gradientMap: {
								value: null
							}
						},
						fog: {
							fogDensity: {
								value: 25e-5
							},
							fogNear: {
								value: 1
							},
							fogFar: {
								value: 2e3
							},
							fogColor: {
								value: new ee(0xffffff)
							}
						},
						lights: {
							ambientLightColor: {
								value: []
							},
							lightProbe: {
								value: []
							},
							directionalLights: {
								value: [],
								properties: {
									direction: {},
									color: {}
								}
							},
							directionalLightShadows: {
								value: [],
								properties: {
									shadowBias: {},
									shadowNormalBias: {},
									shadowRadius: {},
									shadowMapSize: {}
								}
							},
							directionalShadowMap: {
								value: []
							},
							directionalShadowMatrix: {
								value: []
							},
							spotLights: {
								value: [],
								properties: {
									color: {},
									position: {},
									direction: {},
									distance: {},
									coneCos: {},
									penumbraCos: {},
									decay: {}
								}
							},
							spotLightShadows: {
								value: [],
								properties: {
									shadowBias: {},
									shadowNormalBias: {},
									shadowRadius: {},
									shadowMapSize: {}
								}
							},
							spotShadowMap: {
								value: []
							},
							spotShadowMatrix: {
								value: []
							},
							pointLights: {
								value: [],
								properties: {
									color: {},
									position: {},
									decay: {},
									distance: {}
								}
							},
							pointLightShadows: {
								value: [],
								properties: {
									shadowBias: {},
									shadowNormalBias: {},
									shadowRadius: {},
									shadowMapSize: {},
									shadowCameraNear: {},
									shadowCameraFar: {}
								}
							},
							pointShadowMap: {
								value: []
							},
							pointShadowMatrix: {
								value: []
							},
							hemisphereLights: {
								value: [],
								properties: {
									direction: {},
									skyColor: {},
									groundColor: {}
								}
							},
							rectAreaLights: {
								value: [],
								properties: {
									color: {},
									position: {},
									width: {},
									height: {}
								}
							},
							ltc_1: {
								value: null
							},
							ltc_2: {
								value: null
							}
						},
						points: {
							diffuse: {
								value: new ee(0xffffff)
							},
							opacity: {
								value: 1
							},
							size: {
								value: 1
							},
							scale: {
								value: 1
							},
							map: {
								value: null
							},
							alphaMap: {
								value: null
							},
							alphaTest: {
								value: 0
							},
							uvTransform: {
								value: new j
							}
						},
						sprite: {
							diffuse: {
								value: new ee(0xffffff)
							},
							opacity: {
								value: 1
							},
							center: {
								value: new W(.5, .5)
							},
							rotation: {
								value: 0
							},
							map: {
								value: null
							},
							alphaMap: {
								value: null
							},
							alphaTest: {
								value: 0
							},
							uvTransform: {
								value: new j
							}
						}
					},
					ns = {
						basic: {
							uniforms: tK([no.common, no.specularmap, no.envmap, no.aomap, no.lightmap, no.fog]),
							vertexShader: na.meshbasic_vert,
							fragmentShader: na.meshbasic_frag
						},
						lambert: {
							uniforms: tK([no.common, no.specularmap, no.envmap, no.aomap, no.lightmap, no.emissivemap, no.fog, no.lights, {
								emissive: {
									value: new ee(0)
								}
							}]),
							vertexShader: na.meshlambert_vert,
							fragmentShader: na.meshlambert_frag
						},
						phong: {
							uniforms: tK([no.common, no.specularmap, no.envmap, no.aomap, no.lightmap, no.emissivemap, no.bumpmap, no.normalmap, no.displacementmap, no.fog, no.lights, {
								emissive: {
									value: new ee(0)
								},
								specular: {
									value: new ee(1118481)
								},
								shininess: {
									value: 30
								}
							}]),
							vertexShader: na.meshphong_vert,
							fragmentShader: na.meshphong_frag
						},
						standard: {
							uniforms: tK([no.common, no.envmap, no.aomap, no.lightmap, no.emissivemap, no.bumpmap, no.normalmap, no.displacementmap, no.roughnessmap, no.metalnessmap, no.fog, no.lights, {
								emissive: {
									value: new ee(0)
								},
								roughness: {
									value: 1
								},
								metalness: {
									value: 0
								},
								envMapIntensity: {
									value: 1
								}
							}]),
							vertexShader: na.meshphysical_vert,
							fragmentShader: na.meshphysical_frag
						},
						toon: {
							uniforms: tK([no.common, no.aomap, no.lightmap, no.emissivemap, no.bumpmap, no.normalmap, no.displacementmap, no.gradientmap, no.fog, no.lights, {
								emissive: {
									value: new ee(0)
								}
							}]),
							vertexShader: na.meshtoon_vert,
							fragmentShader: na.meshtoon_frag
						},
						matcap: {
							uniforms: tK([no.common, no.bumpmap, no.normalmap, no.displacementmap, no.fog, {
								matcap: {
									value: null
								}
							}]),
							vertexShader: na.meshmatcap_vert,
							fragmentShader: na.meshmatcap_frag
						},
						points: {
							uniforms: tK([no.points, no.fog]),
							vertexShader: na.points_vert,
							fragmentShader: na.points_frag
						},
						dashed: {
							uniforms: tK([no.common, no.fog, {
								scale: {
									value: 1
								},
								dashSize: {
									value: 1
								},
								totalSize: {
									value: 2
								}
							}]),
							vertexShader: na.linedashed_vert,
							fragmentShader: na.linedashed_frag
						},
						depth: {
							uniforms: tK([no.common, no.displacementmap]),
							vertexShader: na.depth_vert,
							fragmentShader: na.depth_frag
						},
						normal: {
							uniforms: tK([no.common, no.bumpmap, no.normalmap, no.displacementmap, {
								opacity: {
									value: 1
								}
							}]),
							vertexShader: na.meshnormal_vert,
							fragmentShader: na.meshnormal_frag
						},
						sprite: {
							uniforms: tK([no.sprite, no.fog]),
							vertexShader: na.sprite_vert,
							fragmentShader: na.sprite_frag
						},
						background: {
							uniforms: {
								uvTransform: {
									value: new j
								},
								t2D: {
									value: null
								}
							},
							vertexShader: na.background_vert,
							fragmentShader: na.background_frag
						},
						cube: {
							uniforms: tK([no.envmap, {
								opacity: {
									value: 1
								}
							}]),
							vertexShader: na.cube_vert,
							fragmentShader: na.cube_frag
						},
						equirect: {
							uniforms: {
								tEquirect: {
									value: null
								}
							},
							vertexShader: na.equirect_vert,
							fragmentShader: na.equirect_frag
						},
						distanceRGBA: {
							uniforms: tK([no.common, no.displacementmap, {
								referencePosition: {
									value: new eu
								},
								nearDistance: {
									value: 1
								},
								farDistance: {
									value: 1e3
								}
							}]),
							vertexShader: na.distanceRGBA_vert,
							fragmentShader: na.distanceRGBA_frag
						},
						shadow: {
							uniforms: tK([no.lights, no.fog, {
								color: {
									value: new ee(0)
								},
								opacity: {
									value: 1
								}
							}]),
							vertexShader: na.shadow_vert,
							fragmentShader: na.shadow_frag
						}
					};

				function nl(e, t, n, i, r, a) {
					var o, s, l = new ee(0),
						u = +(!0 !== r),
						c = null,
						h = 0,
						d = null;

					function f(e, t) {
						n.buffers.color.setClear(e.r, e.g, e.b, t, a)
					}
					return {
						getClearColor: function() {
							return l
						},
						setClearColor: function(e) {
							var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
							l.set(e), f(l, u = t)
						},
						getClearAlpha: function() {
							return u
						},
						setClearAlpha: function(e) {
							f(l, u = e)
						},
						render: function(n, r) {
							var a = !1,
								p = !0 === r.isScene ? r.background : null;
							p && p.isTexture && (p = t.get(p));
							var m = e.xr,
								v = m.getSession && m.getSession();
							v && "additive" === v.environmentBlendMode && (p = null), null === p ? f(l, u) : p && p.isColor && (f(p, 1), a = !0), (e.autoClear || a) && e.clear(e.autoClearColor, e.autoClearDepth, e.autoClearStencil), p && (p.isCubeTexture || 306 === p.mapping) ? (void 0 === s && ((s = new tX(new tJ(1, 1, 1), new t$({
								name: "BackgroundCubeMaterial",
								uniforms: tZ(ns.cube.uniforms),
								vertexShader: ns.cube.vertexShader,
								fragmentShader: ns.cube.fragmentShader,
								side: 1,
								depthTest: !1,
								depthWrite: !1,
								fog: !1
							}))).geometry.deleteAttribute("normal"), s.geometry.deleteAttribute("uv"), s.onBeforeRender = function(e, t, n) {
								this.matrixWorld.copyPosition(n.matrixWorld)
							}, Object.defineProperty(s.material, "envMap", {
								get: function() {
									return this.uniforms.envMap.value
								}
							}), i.update(s)), s.material.uniforms.envMap.value = p, s.material.uniforms.flipEnvMap.value = p.isCubeTexture && !1 === p.isRenderTargetTexture ? -1 : 1, c === p && h === p.version && d === e.toneMapping || (s.material.needsUpdate = !0, c = p, h = p.version, d = e.toneMapping), n.unshift(s, s.geometry, s.material, 0, 0, null)) : p && p.isTexture && (void 0 === o && ((o = new tX(new nr(2, 2), new t$({
								name: "BackgroundMaterial",
								uniforms: tZ(ns.background.uniforms),
								vertexShader: ns.background.vertexShader,
								fragmentShader: ns.background.fragmentShader,
								side: 0,
								depthTest: !1,
								depthWrite: !1,
								fog: !1
							}))).geometry.deleteAttribute("normal"), Object.defineProperty(o.material, "map", {
								get: function() {
									return this.uniforms.t2D.value
								}
							}), i.update(o)), o.material.uniforms.t2D.value = p, !0 === p.matrixAutoUpdate && p.updateMatrix(), o.material.uniforms.uvTransform.value.copy(p.matrix), c === p && h === p.version && d === e.toneMapping || (o.material.needsUpdate = !0, c = p, h = p.version, d = e.toneMapping), n.unshift(o, o.geometry, o.material, 0, 0, null))
						}
					}
				}

				function nu(e, t, n, i) {
					var r = e.getParameter(34921),
						a = i.isWebGL2 ? null : t.get("OES_vertex_array_object"),
						o = i.isWebGL2 || null !== a,
						s = {},
						l = d(null),
						u = l;

					function c(t) {
						return i.isWebGL2 ? e.bindVertexArray(t) : a.bindVertexArrayOES(t)
					}

					function h(t) {
						return i.isWebGL2 ? e.deleteVertexArray(t) : a.deleteVertexArrayOES(t)
					}

					function d(e) {
						for (var t = [], n = [], i = [], a = 0; a < r; a++) t[a] = 0, n[a] = 0, i[a] = 0;
						return {
							geometry: null,
							program: null,
							wireframe: !1,
							newAttributes: t,
							enabledAttributes: n,
							attributeDivisors: i,
							object: e,
							attributes: {},
							index: null
						}
					}

					function f() {
						for (var e = u.newAttributes, t = 0, n = e.length; t < n; t++) e[t] = 0
					}

					function p(e) {
						m(e, 0)
					}

					function m(n, r) {
						var a = u.newAttributes,
							o = u.enabledAttributes,
							s = u.attributeDivisors;
						a[n] = 1, 0 === o[n] && (e.enableVertexAttribArray(n), o[n] = 1), s[n] !== r && ((i.isWebGL2 ? e : t.get("ANGLE_instanced_arrays"))[i.isWebGL2 ? "vertexAttribDivisor" : "vertexAttribDivisorANGLE"](n, r), s[n] = r)
					}

					function v() {
						for (var t = u.newAttributes, n = u.enabledAttributes, i = 0, r = n.length; i < r; i++) n[i] !== t[i] && (e.disableVertexAttribArray(i), n[i] = 0)
					}

					function g(t, n, r, a, o, s) {
						!0 !== i.isWebGL2 || 5124 !== r && 5125 !== r ? e.vertexAttribPointer(t, n, r, a, o, s) : e.vertexAttribIPointer(t, n, r, o, s)
					}

					function y() {
						x(), u !== l && c((u = l).object)
					}

					function x() {
						l.geometry = null, l.program = null, l.wireframe = !1
					}
					return {
						setup: function(r, l, h, y, x) {
							var _ = !1;
							if (o) {
								var b, w, M, S, T = (b = !0 === l.wireframe, void 0 === (w = s[y.id]) && (w = {}, s[y.id] = w), void 0 === (M = w[h.id]) && (M = {}, w[h.id] = M), void 0 === (S = M[b]) && (S = d(i.isWebGL2 ? e.createVertexArray() : a.createVertexArrayOES()), M[b] = S), S);
								u !== T && c((u = T).object), (_ = function(e, t) {
									var n = u.attributes,
										i = e.attributes,
										r = 0;
									for (var a in i) {
										var o = n[a],
											s = i[a];
										if (void 0 === o || o.attribute !== s || o.data !== s.data) return !0;
										r++
									}
									return u.attributesNum !== r || u.index !== t
								}(y, x)) && function(e, t) {
									var n = {},
										i = e.attributes,
										r = 0;
									for (var a in i) {
										var o = i[a],
											s = {};
										s.attribute = o, o.data && (s.data = o.data), n[a] = s, r++
									}
									u.attributes = n, u.attributesNum = r, u.index = t
								}(y, x)
							} else {
								var E = !0 === l.wireframe;
								u.geometry === y.id && u.program === h.id && u.wireframe === E || (u.geometry = y.id, u.program = h.id, u.wireframe = E, _ = !0)
							}!0 === r.isInstancedMesh && (_ = !0), null !== x && n.update(x, 34963), _ && (function(r, a, o, s) {
								if (!1 !== i.isWebGL2 || !r.isInstancedMesh && !s.isInstancedBufferGeometry || null !== t.get("ANGLE_instanced_arrays")) {
									f();
									var l = s.attributes,
										u = o.getAttributes(),
										c = a.defaultAttributeValues;
									for (var h in u) {
										var d = u[h];
										if (d.location >= 0) {
											var y = l[h];
											if (void 0 === y && ("instanceMatrix" === h && r.instanceMatrix && (y = r.instanceMatrix), "instanceColor" === h && r.instanceColor && (y = r.instanceColor)), void 0 !== y) {
												var x = y.normalized,
													_ = y.itemSize,
													b = n.get(y);
												if (void 0 === b) continue;
												var w = b.buffer,
													M = b.type,
													S = b.bytesPerElement;
												if (y.isInterleavedBufferAttribute) {
													var T = y.data,
														E = T.stride,
														A = y.offset;
													if (T && T.isInstancedInterleavedBuffer) {
														for (var k = 0; k < d.locationSize; k++) m(d.location + k, T.meshPerAttribute);
														!0 !== r.isInstancedMesh && void 0 === s._maxInstanceCount && (s._maxInstanceCount = T.meshPerAttribute * T.count)
													} else
														for (var R = 0; R < d.locationSize; R++) p(d.location + R);
													e.bindBuffer(34962, w);
													for (var L = 0; L < d.locationSize; L++) g(d.location + L, _ / d.locationSize, M, x, E * S, (A + _ / d.locationSize * L) * S)
												} else {
													if (y.isInstancedBufferAttribute) {
														for (var C = 0; C < d.locationSize; C++) m(d.location + C, y.meshPerAttribute);
														!0 !== r.isInstancedMesh && void 0 === s._maxInstanceCount && (s._maxInstanceCount = y.meshPerAttribute * y.count)
													} else
														for (var P = 0; P < d.locationSize; P++) p(d.location + P);
													e.bindBuffer(34962, w);
													for (var D = 0; D < d.locationSize; D++) g(d.location + D, _ / d.locationSize, M, x, _ * S, _ / d.locationSize * D * S)
												}
											} else if (void 0 !== c) {
												var I = c[h];
												if (void 0 !== I) switch (I.length) {
													case 2:
														e.vertexAttrib2fv(d.location, I);
														break;
													case 3:
														e.vertexAttrib3fv(d.location, I);
														break;
													case 4:
														e.vertexAttrib4fv(d.location, I);
														break;
													default:
														e.vertexAttrib1fv(d.location, I)
												}
											}
										}
									}
									v()
								}
							}(r, l, h, y), null !== x && e.bindBuffer(34963, n.get(x).buffer))
						},
						reset: y,
						resetDefaultState: x,
						dispose: function() {
							for (var e in y(), s) {
								var t = s[e];
								for (var n in t) {
									var i = t[n];
									for (var r in i) h(i[r].object), delete i[r];
									delete t[n]
								}
								delete s[e]
							}
						},
						releaseStatesOfGeometry: function(e) {
							if (void 0 !== s[e.id]) {
								var t = s[e.id];
								for (var n in t) {
									var i = t[n];
									for (var r in i) h(i[r].object), delete i[r];
									delete t[n]
								}
								delete s[e.id]
							}
						},
						releaseStatesOfProgram: function(e) {
							for (var t in s) {
								var n = s[t];
								if (void 0 !== n[e.id]) {
									var i = n[e.id];
									for (var r in i) h(i[r].object), delete i[r];
									delete n[e.id]
								}
							}
						},
						initAttributes: f,
						enableAttribute: p,
						disableUnusedAttributes: v
					}
				}

				function nc(e, t, n, i) {
					var r, a = i.isWebGL2;
					this.setMode = function(e) {
						r = e
					}, this.render = function(t, i) {
						e.drawArrays(r, t, i), n.update(i, r, 1)
					}, this.renderInstances = function(i, o, s) {
						var l, u;
						if (0 !== s) {
							if (a) l = e, u = "drawArraysInstanced";
							else if (l = t.get("ANGLE_instanced_arrays"), u = "drawArraysInstancedANGLE", null === l) return void console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");
							l[u](r, i, o, s), n.update(o, r, s)
						}
					}
				}

				function nh(e, t, n) {
					function i(t) {
						if ("highp" === t) {
							if (e.getShaderPrecisionFormat(35633, 36338).precision > 0 && e.getShaderPrecisionFormat(35632, 36338).precision > 0) return "highp";
							t = "mediump"
						}
						return "mediump" === t && e.getShaderPrecisionFormat(35633, 36337).precision > 0 && e.getShaderPrecisionFormat(35632, 36337).precision > 0 ? "mediump" : "lowp"
					}
					var r, a = "undefined" != typeof WebGL2RenderingContext && e instanceof WebGL2RenderingContext || "undefined" != typeof WebGL2ComputeRenderingContext && e instanceof WebGL2ComputeRenderingContext,
						o = void 0 !== n.precision ? n.precision : "highp",
						s = i(o);
					s !== o && (console.warn("THREE.WebGLRenderer:", o, "not supported, using", s, "instead."), o = s);
					var l = a || t.has("WEBGL_draw_buffers"),
						u = !0 === n.logarithmicDepthBuffer,
						c = e.getParameter(34930),
						h = e.getParameter(35660),
						d = e.getParameter(3379),
						f = e.getParameter(34076),
						p = e.getParameter(34921),
						m = e.getParameter(36347),
						v = e.getParameter(36348),
						g = e.getParameter(36349),
						y = h > 0,
						x = a || t.has("OES_texture_float");
					return {
						isWebGL2: a,
						drawBuffers: l,
						getMaxAnisotropy: function() {
							if (void 0 !== r) return r;
							if (!0 === t.has("EXT_texture_filter_anisotropic")) {
								var n = t.get("EXT_texture_filter_anisotropic");
								r = e.getParameter(n.MAX_TEXTURE_MAX_ANISOTROPY_EXT)
							} else r = 0;
							return r
						},
						getMaxPrecision: i,
						precision: o,
						logarithmicDepthBuffer: u,
						maxTextures: c,
						maxVertexTextures: h,
						maxTextureSize: d,
						maxCubemapSize: f,
						maxAttributes: p,
						maxVertexUniforms: m,
						maxVaryings: v,
						maxFragmentUniforms: g,
						vertexTextures: y,
						floatFragmentTextures: x,
						floatVertexTextures: y && x,
						maxSamples: a ? e.getParameter(36183) : 0
					}
				}

				function nd(e) {
					var t = this,
						n = null,
						i = 0,
						r = !1,
						a = !1,
						o = new t7,
						s = new j,
						l = {
							value: null,
							needsUpdate: !1
						};

					function u() {
						l.value !== n && (l.value = n, l.needsUpdate = i > 0), t.numPlanes = i, t.numIntersection = 0
					}

					function c(e, n, i, r) {
						var a = null !== e ? e.length : 0,
							u = null;
						if (0 !== a) {
							if (u = l.value, !0 !== r || null === u) {
								var c = i + 4 * a,
									h = n.matrixWorldInverse;
								s.getNormalMatrix(h), (null === u || u.length < c) && (u = new Float32Array(c));
								for (var d = 0, f = i; d !== a; ++d, f += 4) o.copy(e[d]).applyMatrix4(h, s), o.normal.toArray(u, f), u[f + 3] = o.constant
							}
							l.value = u, l.needsUpdate = !0
						}
						return t.numPlanes = a, t.numIntersection = 0, u
					}
					this.uniform = l, this.numPlanes = 0, this.numIntersection = 0, this.init = function(e, t, a) {
						var o = 0 !== e.length || t || 0 !== i || r;
						return r = t, n = c(e, a, 0), i = e.length, o
					}, this.beginShadows = function() {
						a = !0, c(null)
					}, this.endShadows = function() {
						a = !1, u()
					}, this.setState = function(t, o, s) {
						var h = t.clippingPlanes,
							d = t.clipIntersection,
							f = t.clipShadows,
							p = e.get(t);
						if (r && null !== h && 0 !== h.length && (!a || f)) {
							var m = a ? 0 : i,
								v = 4 * m,
								g = p.clippingState || null;
							l.value = g, g = c(h, o, v, s);
							for (var y = 0; y !== v; ++y) g[y] = n[y];
							p.clippingState = g, this.numIntersection = d ? this.numPlanes : 0, this.numPlanes += m
						} else a ? c(null) : u()
					}
				}

				function nf(e) {
					var t = new WeakMap;

					function n(e, t) {
						return 303 === t ? e.mapping = 301 : 304 === t && (e.mapping = 302), e
					}

					function i(e) {
						var n = e.target;
						n.removeEventListener("dispose", i);
						var r = t.get(n);
						void 0 !== r && (t.delete(n), r.dispose())
					}
					return {
						get: function(r) {
							if (r && r.isTexture && !1 === r.isRenderTargetTexture) {
								var a = r.mapping;
								if (303 === a || 304 === a) {
									if (t.has(r)) return n(t.get(r).texture, r.mapping);
									var o = r.image;
									if (o && o.height > 0) {
										var s = new t4(o.height / 2);
										return s.fromEquirectangularTexture(e, r), t.set(r, s), r.addEventListener("dispose", i), n(s.texture, r.mapping)
									}
									return null
								}
							}
							return r
						},
						dispose: function() {
							t = new WeakMap
						}
					}
				}
				ns.physical = {
					uniforms: tK([ns.standard.uniforms, {
						clearcoat: {
							value: 0
						},
						clearcoatMap: {
							value: null
						},
						clearcoatRoughness: {
							value: 0
						},
						clearcoatRoughnessMap: {
							value: null
						},
						clearcoatNormalScale: {
							value: new W(1, 1)
						},
						clearcoatNormalMap: {
							value: null
						},
						sheen: {
							value: 0
						},
						sheenColor: {
							value: new ee(0)
						},
						sheenColorMap: {
							value: null
						},
						sheenRoughness: {
							value: 1
						},
						sheenRoughnessMap: {
							value: null
						},
						transmission: {
							value: 0
						},
						transmissionMap: {
							value: null
						},
						transmissionSamplerSize: {
							value: new W
						},
						transmissionSamplerMap: {
							value: null
						},
						thickness: {
							value: 0
						},
						thicknessMap: {
							value: null
						},
						attenuationDistance: {
							value: 0
						},
						attenuationColor: {
							value: new ee(0)
						},
						specularIntensity: {
							value: 1
						},
						specularIntensityMap: {
							value: null
						},
						specularColor: {
							value: new ee(1, 1, 1)
						},
						specularColorMap: {
							value: null
						}
					}]),
					vertexShader: na.meshphysical_vert,
					fragmentShader: na.meshphysical_frag
				};
				var np = function(e) {
					function t() {
						var e, n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : -1,
							i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1,
							r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1,
							a = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : -1,
							o = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : .1,
							s = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 2e3;
						return d(this, t), (e = h(this, t)).type = "OrthographicCamera", e.zoom = 1, e.view = null, e.left = n, e.right = i, e.top = r, e.bottom = a, e.near = o, e.far = s, e.updateProjectionMatrix(), e
					}
					return y(t, e), p(t, [{
						key: "copy",
						value: function(e, n) {
							return v(g(t.prototype), "copy", this).call(this, e, n), this.left = e.left, this.right = e.right, this.top = e.top, this.bottom = e.bottom, this.near = e.near, this.far = e.far, this.zoom = e.zoom, this.view = null === e.view ? null : Object.assign({}, e.view), this
						}
					}, {
						key: "setViewOffset",
						value: function(e, t, n, i, r, a) {
							null === this.view && (this.view = {
								enabled: !0,
								fullWidth: 1,
								fullHeight: 1,
								offsetX: 0,
								offsetY: 0,
								width: 1,
								height: 1
							}), this.view.enabled = !0, this.view.fullWidth = e, this.view.fullHeight = t, this.view.offsetX = n, this.view.offsetY = i, this.view.width = r, this.view.height = a, this.updateProjectionMatrix()
						}
					}, {
						key: "clearViewOffset",
						value: function() {
							null !== this.view && (this.view.enabled = !1), this.updateProjectionMatrix()
						}
					}, {
						key: "updateProjectionMatrix",
						value: function() {
							var e = (this.right - this.left) / (2 * this.zoom),
								t = (this.top - this.bottom) / (2 * this.zoom),
								n = (this.right + this.left) / 2,
								i = (this.top + this.bottom) / 2,
								r = n - e,
								a = n + e,
								o = i + t,
								s = i - t;
							if (null !== this.view && this.view.enabled) {
								var l = (this.right - this.left) / this.view.fullWidth / this.zoom,
									u = (this.top - this.bottom) / this.view.fullHeight / this.zoom;
								r += l * this.view.offsetX, a = r + l * this.view.width, o -= u * this.view.offsetY, s = o - u * this.view.height
							}
							this.projectionMatrix.makeOrthographic(r, a, o, s, this.near, this.far), this.projectionMatrixInverse.copy(this.projectionMatrix).invert()
						}
					}, {
						key: "toJSON",
						value: function(e) {
							var n = v(g(t.prototype), "toJSON", this).call(this, e);
							return n.object.zoom = this.zoom, n.object.left = this.left, n.object.right = this.right, n.object.top = this.top, n.object.bottom = this.bottom, n.object.near = this.near, n.object.far = this.far, null !== this.view && (n.object.view = Object.assign({}, this.view)), n
						}
					}]), t
				}(t0);
				np.prototype.isOrthographicCamera = !0;
				var nm = function(e) {
					function t(e) {
						var n;
						return d(this, t), (n = h(this, t, [e])).type = "RawShaderMaterial", n
					}
					return y(t, e), t
				}(t$);
				nm.prototype.isRawShaderMaterial = !0;
				var nv = [.125, .215, .35, .446, .526, .582],
					ng = 5 + nv.length,
					ny = new np,
					nx = function() {
						for (var e = [], t = [], n = [], i = 8, r = 0; r < ng; r++) {
							var a = Math.pow(2, i);
							t.push(a);
							var o = 1 / a;
							r > 4 ? o = nv[r - 8 + 4 - 1] : 0 === r && (o = 0), n.push(o);
							for (var s = 1 / (a - 1), l = -s / 2, u = 1 + s / 2, c = [l, l, u, l, u, u, l, l, u, u, l, u], h = new Float32Array(108), d = new Float32Array(72), f = new Float32Array(36), p = 0; p < 6; p++) {
								var m = p % 3 * 2 / 3 - 1,
									v = p > 2 ? 0 : -1,
									g = [m, v, 0, m + 2 / 3, v, 0, m + 2 / 3, v + 1, 0, m, v, 0, m + 2 / 3, v + 1, 0, m, v + 1, 0];
								h.set(g, 18 * p), d.set(c, 12 * p);
								var y = [p, p, p, p, p, p];
								f.set(y, 6 * p)
							}
							var x = new tR;
							x.setAttribute("position", new ty(h, 3)), x.setAttribute("uv", new ty(d, 2)), x.setAttribute("faceIndex", new ty(f, 1)), e.push(x), i > 4 && i--
						}
						return {
							_lodPlanes: e,
							_sizeLods: t,
							_sigmas: n
						}
					}(),
					n_ = nx._lodPlanes,
					nb = nx._sizeLods,
					nw = nx._sigmas,
					nM = new ee,
					nS = null,
					nT = (1 + Math.sqrt(5)) / 2,
					nE = 1 / nT,
					nA = [new eu(1, 1, 1), new eu(-1, 1, 1), new eu(1, 1, -1), new eu(-1, 1, -1), new eu(0, nT, nE), new eu(0, nT, -nE), new eu(nE, 0, nT), new eu(-nE, 0, nT), new eu(nT, nE, 0), new eu(-nT, nE, 0)],
					nk = function() {
						function e(t) {
							d(this, e), this._renderer = t, this._pingPongRenderTarget = null, this._blurMaterial = new nm({
								name: "SphericalGaussianBlur",
								defines: {
									n: 20
								},
								uniforms: {
									envMap: {
										value: null
									},
									samples: {
										value: 1
									},
									weights: {
										value: new Float32Array(20)
									},
									latitudinal: {
										value: !1
									},
									dTheta: {
										value: 0
									},
									mipInt: {
										value: 0
									},
									poleAxis: {
										value: new eu(0, 1, 0)
									}
								},
								vertexShader: nD(),
								fragmentShader: "\n\n			precision mediump float;\n			precision mediump int;\n\n			varying vec3 vOutputDirection;\n\n			uniform sampler2D envMap;\n			uniform int samples;\n			uniform float weights[ n ];\n			uniform bool latitudinal;\n			uniform float dTheta;\n			uniform float mipInt;\n			uniform vec3 poleAxis;\n\n			#define ENVMAP_TYPE_CUBE_UV\n			#include <cube_uv_reflection_fragment>\n\n			vec3 getSample( float theta, vec3 axis ) {\n\n				float cosTheta = cos( theta );\n				// Rodrigues' axis-angle rotation\n				vec3 sampleDirection = vOutputDirection * cosTheta\n					+ cross( axis, vOutputDirection ) * sin( theta )\n					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );\n\n				return bilinearCubeUV( envMap, sampleDirection, mipInt );\n\n			}\n\n			void main() {\n\n				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );\n\n				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {\n\n					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );\n\n				}\n\n				axis = normalize( axis );\n\n				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );\n				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );\n\n				for ( int i = 1; i < n; i++ ) {\n\n					if ( i >= samples ) {\n\n						break;\n\n					}\n\n					float theta = dTheta * float( i );\n					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );\n					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );\n\n				}\n\n			}\n		",
								blending: 0,
								depthTest: !1,
								depthWrite: !1
							}), this._equirectShader = null, this._cubemapShader = null, this._compileMaterial(this._blurMaterial)
						}
						return p(e, [{
							key: "fromScene",
							value: function(e) {
								var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
									n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : .1,
									i = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 100;
								nS = this._renderer.getRenderTarget();
								var r = this._allocateTargets();
								return this._sceneToCubeUV(e, n, i, r), t > 0 && this._blur(r, 0, 0, t), this._applyPMREM(r), this._cleanup(r), r
							}
						}, {
							key: "fromEquirectangular",
							value: function(e) {
								var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
								return this._fromTexture(e, t)
							}
						}, {
							key: "fromCubemap",
							value: function(e) {
								var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
								return this._fromTexture(e, t)
							}
						}, {
							key: "compileCubemapShader",
							value: function() {
								null === this._cubemapShader && (this._cubemapShader = nP(), this._compileMaterial(this._cubemapShader))
							}
						}, {
							key: "compileEquirectangularShader",
							value: function() {
								null === this._equirectShader && (this._equirectShader = nC(), this._compileMaterial(this._equirectShader))
							}
						}, {
							key: "dispose",
							value: function() {
								this._blurMaterial.dispose(), null !== this._pingPongRenderTarget && this._pingPongRenderTarget.dispose(), null !== this._cubemapShader && this._cubemapShader.dispose(), null !== this._equirectShader && this._equirectShader.dispose();
								for (var e = 0; e < n_.length; e++) n_[e].dispose()
							}
						}, {
							key: "_cleanup",
							value: function(e) {
								this._renderer.setRenderTarget(nS), e.scissorTest = !1, nL(e, 0, 0, e.width, e.height)
							}
						}, {
							key: "_fromTexture",
							value: function(e, t) {
								nS = this._renderer.getRenderTarget();
								var n = t || this._allocateTargets(e);
								return this._textureToCubeUV(e, n), this._applyPMREM(n), this._cleanup(n), n
							}
						}, {
							key: "_allocateTargets",
							value: function(e) {
								var t = {
										magFilter: 1006,
										minFilter: 1006,
										generateMipmaps: !1,
										type: 1016,
										format: 1023,
										encoding: 3e3,
										depthBuffer: !1
									},
									n = nR(t);
								return n.depthBuffer = !e, null === this._pingPongRenderTarget && (this._pingPongRenderTarget = nR(t)), n
							}
						}, {
							key: "_compileMaterial",
							value: function(e) {
								var t = new tX(n_[0], e);
								this._renderer.compile(t, ny)
							}
						}, {
							key: "_sceneToCubeUV",
							value: function(e, t, n, i) {
								var r = new t1(90, 1, t, n),
									a = [1, -1, 1, 1, 1, 1],
									o = [1, 1, 1, -1, -1, -1],
									s = this._renderer,
									l = s.autoClear,
									u = s.toneMapping;
								s.getClearColor(nM), s.toneMapping = 0, s.autoClear = !1;
								var c = new tm({
										name: "PMREM.Background",
										side: 1,
										depthWrite: !1,
										depthTest: !1
									}),
									h = new tX(new tJ, c),
									d = !1,
									f = e.background;
								f ? f.isColor && (c.color.copy(f), e.background = null, d = !0) : (c.color.copy(nM), d = !0);
								for (var p = 0; p < 6; p++) {
									var m = p % 3;
									0 === m ? (r.up.set(0, a[p], 0), r.lookAt(o[p], 0, 0)) : 1 === m ? (r.up.set(0, 0, a[p]), r.lookAt(0, o[p], 0)) : (r.up.set(0, a[p], 0), r.lookAt(0, 0, o[p])), nL(i, 256 * m, 256 * (p > 2), 256, 256), s.setRenderTarget(i), d && s.render(h, r), s.render(e, r)
								}
								h.geometry.dispose(), h.material.dispose(), s.toneMapping = u, s.autoClear = l, e.background = f
							}
						}, {
							key: "_textureToCubeUV",
							value: function(e, t) {
								var n = this._renderer,
									i = 301 === e.mapping || 302 === e.mapping;
								i ? (null === this._cubemapShader && (this._cubemapShader = nP()), this._cubemapShader.uniforms.flipEnvMap.value = !1 === e.isRenderTargetTexture ? -1 : 1) : null === this._equirectShader && (this._equirectShader = nC());
								var r = i ? this._cubemapShader : this._equirectShader,
									a = new tX(n_[0], r),
									o = r.uniforms;
								o.envMap.value = e, i || o.texelSize.value.set(1 / e.image.width, 1 / e.image.height), nL(t, 0, 0, 768, 512), n.setRenderTarget(t), n.render(a, ny)
							}
						}, {
							key: "_applyPMREM",
							value: function(e) {
								var t = this._renderer,
									n = t.autoClear;
								t.autoClear = !1;
								for (var i = 1; i < ng; i++) {
									var r = Math.sqrt(nw[i] * nw[i] - nw[i - 1] * nw[i - 1]),
										a = nA[(i - 1) % nA.length];
									this._blur(e, i - 1, i, r, a)
								}
								t.autoClear = n
							}
						}, {
							key: "_blur",
							value: function(e, t, n, i, r) {
								var a = this._pingPongRenderTarget;
								this._halfBlur(e, a, t, n, i, "latitudinal", r), this._halfBlur(a, e, n, n, i, "longitudinal", r)
							}
						}, {
							key: "_halfBlur",
							value: function(e, t, n, i, r, a, o) {
								var s = this._renderer,
									l = this._blurMaterial;
								"latitudinal" !== a && "longitudinal" !== a && console.error("blur direction must be either latitudinal or longitudinal!");
								var u = new tX(n_[i], l),
									c = l.uniforms,
									h = nb[n] - 1,
									d = isFinite(r) ? Math.PI / (2 * h) : 2 * Math.PI / 39,
									f = r / d,
									p = isFinite(r) ? 1 + Math.floor(3 * f) : 20;
								p > 20 && console.warn("sigmaRadians, ".concat(r, ", is too large and will clip, as it requested ").concat(p, " samples when the maximum is set to 20"));
								for (var m = [], v = 0, g = 0; g < 20; ++g) {
									var y = g / f,
										x = Math.exp(-y * y / 2);
									m.push(x), 0 === g ? v += x : g < p && (v += 2 * x)
								}
								for (var _ = 0; _ < m.length; _++) m[_] = m[_] / v;
								c.envMap.value = e.texture, c.samples.value = p, c.weights.value = m, c.latitudinal.value = "latitudinal" === a, o && (c.poleAxis.value = o), c.dTheta.value = d, c.mipInt.value = 8 - n;
								var b = nb[i];
								nL(t, 3 * Math.max(0, 256 - 2 * b), 512 * (0 !== i) + 2 * b * (i > 4 ? i - 8 + 4 : 0), 3 * b, 2 * b), s.setRenderTarget(t), s.render(u, ny)
							}
						}]), e
					}();

				function nR(e) {
					var t = new eo(768, 768, e);
					return t.texture.mapping = 306, t.texture.name = "PMREM.cubeUv", t.scissorTest = !0, t
				}

				function nL(e, t, n, i, r) {
					e.viewport.set(t, n, i, r), e.scissor.set(t, n, i, r)
				}

				function nC() {
					return new nm({
						name: "EquirectangularToCubeUV",
						uniforms: {
							envMap: {
								value: null
							},
							texelSize: {
								value: new W(1, 1)
							}
						},
						vertexShader: nD(),
						fragmentShader: "\n\n			precision mediump float;\n			precision mediump int;\n\n			varying vec3 vOutputDirection;\n\n			uniform sampler2D envMap;\n			uniform vec2 texelSize;\n\n			#include <common>\n\n			void main() {\n\n				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );\n\n				vec3 outputDirection = normalize( vOutputDirection );\n				vec2 uv = equirectUv( outputDirection );\n\n				vec2 f = fract( uv / texelSize - 0.5 );\n				uv -= f * texelSize;\n				vec3 tl = texture2D ( envMap, uv ).rgb;\n				uv.x += texelSize.x;\n				vec3 tr = texture2D ( envMap, uv ).rgb;\n				uv.y += texelSize.y;\n				vec3 br = texture2D ( envMap, uv ).rgb;\n				uv.x -= texelSize.x;\n				vec3 bl = texture2D ( envMap, uv ).rgb;\n\n				vec3 tm = mix( tl, tr, f.x );\n				vec3 bm = mix( bl, br, f.x );\n				gl_FragColor.rgb = mix( tm, bm, f.y );\n\n			}\n		",
						blending: 0,
						depthTest: !1,
						depthWrite: !1
					})
				}

				function nP() {
					return new nm({
						name: "CubemapToCubeUV",
						uniforms: {
							envMap: {
								value: null
							},
							flipEnvMap: {
								value: -1
							}
						},
						vertexShader: nD(),
						fragmentShader: "\n\n			precision mediump float;\n			precision mediump int;\n\n			uniform float flipEnvMap;\n\n			varying vec3 vOutputDirection;\n\n			uniform samplerCube envMap;\n\n			void main() {\n\n				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );\n\n			}\n		",
						blending: 0,
						depthTest: !1,
						depthWrite: !1
					})
				}

				function nD() {
					return "\n\n		precision mediump float;\n		precision mediump int;\n\n		attribute vec3 position;\n		attribute vec2 uv;\n		attribute float faceIndex;\n\n		varying vec3 vOutputDirection;\n\n		// RH coordinate system; PMREM face-indexing convention\n		vec3 getDirection( vec2 uv, float face ) {\n\n			uv = 2.0 * uv - 1.0;\n\n			vec3 direction = vec3( uv, 1.0 );\n\n			if ( face == 0.0 ) {\n\n				direction = direction.zyx; // ( 1, v, u ) pos x\n\n			} else if ( face == 1.0 ) {\n\n				direction = direction.xzy;\n				direction.xz *= -1.0; // ( -u, 1, -v ) pos y\n\n			} else if ( face == 2.0 ) {\n\n				direction.x *= -1.0; // ( -u, v, 1 ) pos z\n\n			} else if ( face == 3.0 ) {\n\n				direction = direction.zyx;\n				direction.xz *= -1.0; // ( -1, v, -u ) neg x\n\n			} else if ( face == 4.0 ) {\n\n				direction = direction.xzy;\n				direction.xy *= -1.0; // ( -u, -1, v ) neg y\n\n			} else if ( face == 5.0 ) {\n\n				direction.z *= -1.0; // ( u, v, -1 ) neg z\n\n			}\n\n			return direction;\n\n		}\n\n		void main() {\n\n			vOutputDirection = getDirection( uv, faceIndex );\n			gl_Position = vec4( position, 1.0 );\n\n		}\n	"
				}

				function nI(e) {
					var t = new WeakMap,
						n = null;

					function i(e) {
						var n = e.target;
						n.removeEventListener("dispose", i);
						var r = t.get(n);
						void 0 !== r && (t.delete(n), r.dispose())
					}
					return {
						get: function(r) {
							if (r && r.isTexture) {
								var a = r.mapping,
									o = 303 === a || 304 === a,
									s = 301 === a || 302 === a;
								if (o || s) {
									if (r.isRenderTargetTexture && !0 === r.needsPMREMUpdate) {
										r.needsPMREMUpdate = !1;
										var l = t.get(r);
										return null === n && (n = new nk(e)), l = o ? n.fromEquirectangular(r, l) : n.fromCubemap(r, l), t.set(r, l), l.texture
									}
									if (t.has(r)) return t.get(r).texture;
									var u = r.image;
									if (o && u && u.height > 0 || s && u && function(e) {
											for (var t = 0, n = 0; n < 6; n++) void 0 !== e[n] && t++;
											return 6 === t
										}(u)) {
										null === n && (n = new nk(e));
										var c = o ? n.fromEquirectangular(r) : n.fromCubemap(r);
										return t.set(r, c), r.addEventListener("dispose", i), c.texture
									}
									return null
								}
							}
							return r
						},
						dispose: function() {
							t = new WeakMap, null !== n && (n.dispose(), n = null)
						}
					}
				}

				function nN(e) {
					var t = {};

					function n(n) {
						var i;
						if (void 0 !== t[n]) return t[n];
						switch (n) {
							case "WEBGL_depth_texture":
								i = e.getExtension("WEBGL_depth_texture") || e.getExtension("MOZ_WEBGL_depth_texture") || e.getExtension("WEBKIT_WEBGL_depth_texture");
								break;
							case "EXT_texture_filter_anisotropic":
								i = e.getExtension("EXT_texture_filter_anisotropic") || e.getExtension("MOZ_EXT_texture_filter_anisotropic") || e.getExtension("WEBKIT_EXT_texture_filter_anisotropic");
								break;
							case "WEBGL_compressed_texture_s3tc":
								i = e.getExtension("WEBGL_compressed_texture_s3tc") || e.getExtension("MOZ_WEBGL_compressed_texture_s3tc") || e.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");
								break;
							case "WEBGL_compressed_texture_pvrtc":
								i = e.getExtension("WEBGL_compressed_texture_pvrtc") || e.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");
								break;
							default:
								i = e.getExtension(n)
						}
						return t[n] = i, i
					}
					return {
						has: function(e) {
							return null !== n(e)
						},
						init: function(e) {
							e.isWebGL2 ? n("EXT_color_buffer_float") : (n("WEBGL_depth_texture"), n("OES_texture_float"), n("OES_texture_half_float"), n("OES_texture_half_float_linear"), n("OES_standard_derivatives"), n("OES_element_index_uint"), n("OES_vertex_array_object"), n("ANGLE_instanced_arrays")), n("OES_texture_float_linear"), n("EXT_color_buffer_half_float"), n("WEBGL_multisampled_render_to_texture")
						},
						get: function(e) {
							var t = n(e);
							return null === t && console.warn("THREE.WebGLRenderer: " + e + " extension not supported."), t
						}
					}
				}

				function nO(e, t, n, i) {
					var r = {},
						a = new WeakMap;

					function o(e) {
						var s = e.target;
						for (var l in null !== s.index && t.remove(s.index), s.attributes) t.remove(s.attributes[l]);
						s.removeEventListener("dispose", o), delete r[s.id];
						var u = a.get(s);
						u && (t.remove(u), a.delete(s)), i.releaseStatesOfGeometry(s), !0 === s.isInstancedBufferGeometry && delete s._maxInstanceCount, n.memory.geometries--
					}

					function s(e) {
						var n = [],
							i = e.index,
							r = e.attributes.position,
							o = 0;
						if (null !== i) {
							var s = i.array;
							o = i.version;
							for (var l = 0, u = s.length; l < u; l += 3) {
								var c = s[l + 0],
									h = s[l + 1],
									d = s[l + 2];
								n.push(c, h, h, d, d, c)
							}
						} else {
							var f = r.array;
							o = r.version;
							for (var p = 0, m = f.length / 3 - 1; p < m; p += 3) {
								var v = p + 0,
									g = p + 1,
									y = p + 2;
								n.push(v, g, g, y, y, v)
							}
						}
						var x = new(q(n) ? t_ : tx)(n, 1);
						x.version = o;
						var _ = a.get(e);
						_ && t.remove(_), a.set(e, x)
					}
					return {
						get: function(e, t) {
							return !0 === r[t.id] || (t.addEventListener("dispose", o), r[t.id] = !0, n.memory.geometries++), t
						},
						update: function(e) {
							var n = e.attributes;
							for (var i in n) t.update(n[i], 34962);
							var r = e.morphAttributes;
							for (var a in r)
								for (var o = r[a], s = 0, l = o.length; s < l; s++) t.update(o[s], 34962)
						},
						getWireframeAttribute: function(e) {
							var t = a.get(e);
							if (t) {
								var n = e.index;
								null !== n && t.version < n.version && s(e)
							} else s(e);
							return a.get(e)
						}
					}
				}

				function nz(e, t, n, i) {
					var r, a, o, s = i.isWebGL2;
					this.setMode = function(e) {
						r = e
					}, this.setIndex = function(e) {
						a = e.type, o = e.bytesPerElement
					}, this.render = function(t, i) {
						e.drawElements(r, i, a, t * o), n.update(i, r, 1)
					}, this.renderInstances = function(i, l, u) {
						var c, h;
						if (0 !== u) {
							if (s) c = e, h = "drawElementsInstanced";
							else if (c = t.get("ANGLE_instanced_arrays"), h = "drawElementsInstancedANGLE", null === c) return void console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");
							c[h](r, l, a, i * o, u), n.update(l, r, u)
						}
					}
				}

				function nU(e) {
					var t = {
						frame: 0,
						calls: 0,
						triangles: 0,
						points: 0,
						lines: 0
					};
					return {
						memory: {
							geometries: 0,
							textures: 0
						},
						render: t,
						programs: null,
						autoReset: !0,
						reset: function() {
							t.frame++, t.calls = 0, t.triangles = 0, t.points = 0, t.lines = 0
						},
						update: function(e, n, i) {
							switch (t.calls++, n) {
								case 4:
									t.triangles += e / 3 * i;
									break;
								case 1:
									t.lines += e / 2 * i;
									break;
								case 3:
									t.lines += i * (e - 1);
									break;
								case 2:
									t.lines += i * e;
									break;
								case 0:
									t.points += i * e;
									break;
								default:
									console.error("THREE.WebGLInfo: Unknown draw mode:", n)
							}
						}
					}
				}
				var nF = function(e) {
					function t() {
						var e, n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
							i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1,
							r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1,
							a = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 1;
						return d(this, t), (e = h(this, t, [null])).image = {
							data: n,
							width: i,
							height: r,
							depth: a
						}, e.magFilter = 1003, e.minFilter = 1003, e.wrapR = 1001, e.generateMipmaps = !1, e.flipY = !1, e.unpackAlignment = 1, e
					}
					return y(t, e), t
				}(ei);

				function nB(e, t) {
					return e[0] - t[0]
				}

				function nH(e, t) {
					return Math.abs(t[1]) - Math.abs(e[1])
				}

				function nV(e, t) {
					var n = 1,
						i = t.isInterleavedBufferAttribute ? t.data.array : t.array;
					i instanceof Int8Array ? n = 127 : i instanceof Int16Array ? n = 32767 : i instanceof Int32Array ? n = 0x7fffffff : console.error("THREE.WebGLMorphtargets: Unsupported morph attribute data type: ", i), e.divideScalar(n)
				}

				function nG(e, t, n) {
					for (var i = {}, r = new Float32Array(8), a = new WeakMap, o = new eu, s = [], l = 0; l < 8; l++) s[l] = [l, 0];
					return {
						update: function(l, u, c, h) {
							var d = l.morphTargetInfluences;
							if (!0 === t.isWebGL2) {
								var f = u.morphAttributes.position.length,
									p = a.get(u);
								if (void 0 === p || p.count !== f) {
									void 0 !== p && p.texture.dispose();
									var m = void 0 !== u.morphAttributes.normal,
										v = u.morphAttributes.position,
										g = u.morphAttributes.normal || [],
										y = !0 === m ? 2 : 1,
										x = u.attributes.position.count * y,
										_ = 1;
									x > t.maxTextureSize && (_ = Math.ceil(x / t.maxTextureSize), x = t.maxTextureSize);
									var b = new Float32Array(x * _ * 4 * f),
										w = new nF(b, x, _, f);
									w.format = 1023, w.type = 1015, w.needsUpdate = !0;
									for (var M = 4 * y, S = 0; S < f; S++)
										for (var T = v[S], E = g[S], A = x * _ * 4 * S, k = 0; k < T.count; k++) {
											o.fromBufferAttribute(T, k), !0 === T.normalized && nV(o, T);
											var R = k * M;
											b[A + R + 0] = o.x, b[A + R + 1] = o.y, b[A + R + 2] = o.z, b[A + R + 3] = 0, !0 === m && (o.fromBufferAttribute(E, k), !0 === E.normalized && nV(o, E), b[A + R + 4] = o.x, b[A + R + 5] = o.y, b[A + R + 6] = o.z, b[A + R + 7] = 0)
										}
									p = {
										count: f,
										texture: w,
										size: new W(x, _)
									}, a.set(u, p), u.addEventListener("dispose", function e() {
										w.dispose(), a.delete(u), u.removeEventListener("dispose", e)
									})
								}
								for (var L = 0, C = 0; C < d.length; C++) L += d[C];
								var P = u.morphTargetsRelative ? 1 : 1 - L;
								h.getUniforms().setValue(e, "morphTargetBaseInfluence", P), h.getUniforms().setValue(e, "morphTargetInfluences", d), h.getUniforms().setValue(e, "morphTargetsTexture", p.texture, n), h.getUniforms().setValue(e, "morphTargetsTextureSize", p.size)
							} else {
								var D = void 0 === d ? 0 : d.length,
									I = i[u.id];
								if (void 0 === I || I.length !== D) {
									I = [];
									for (var N = 0; N < D; N++) I[N] = [N, 0];
									i[u.id] = I
								}
								for (var O = 0; O < D; O++) {
									var z = I[O];
									z[0] = O, z[1] = d[O]
								}
								I.sort(nH);
								for (var U = 0; U < 8; U++) U < D && I[U][1] ? (s[U][0] = I[U][0], s[U][1] = I[U][1]) : (s[U][0] = Number.MAX_SAFE_INTEGER, s[U][1] = 0);
								s.sort(nB);
								for (var F = u.morphAttributes.position, B = u.morphAttributes.normal, H = 0, V = 0; V < 8; V++) {
									var G = s[V],
										j = G[0],
										q = G[1];
									j !== Number.MAX_SAFE_INTEGER && q ? (F && u.getAttribute("morphTarget" + V) !== F[j] && u.setAttribute("morphTarget" + V, F[j]), B && u.getAttribute("morphNormal" + V) !== B[j] && u.setAttribute("morphNormal" + V, B[j]), r[V] = q, H += q) : (F && !0 === u.hasAttribute("morphTarget" + V) && u.deleteAttribute("morphTarget" + V), B && !0 === u.hasAttribute("morphNormal" + V) && u.deleteAttribute("morphNormal" + V), r[V] = 0)
								}
								var X = u.morphTargetsRelative ? 1 : 1 - H;
								h.getUniforms().setValue(e, "morphTargetBaseInfluence", X), h.getUniforms().setValue(e, "morphTargetInfluences", r)
							}
						}
					}
				}

				function nW(e, t, n, i) {
					var r = new WeakMap;

					function a(e) {
						var t = e.target;
						t.removeEventListener("dispose", a), n.remove(t.instanceMatrix), null !== t.instanceColor && n.remove(t.instanceColor)
					}
					return {
						update: function(e) {
							var o = i.render.frame,
								s = e.geometry,
								l = t.get(e, s);
							return r.get(l) !== o && (t.update(l), r.set(l, o)), e.isInstancedMesh && (!1 === e.hasEventListener("dispose", a) && e.addEventListener("dispose", a), n.update(e.instanceMatrix, 34962), null !== e.instanceColor && n.update(e.instanceColor, 34962)), l
						},
						dispose: function() {
							r = new WeakMap
						}
					}
				}
				nF.prototype.isDataTexture2DArray = !0;
				var nj = function(e) {
					function t() {
						var e, n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
							i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1,
							r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1,
							a = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 1;
						return d(this, t), (e = h(this, t, [null])).image = {
							data: n,
							width: i,
							height: r,
							depth: a
						}, e.magFilter = 1003, e.minFilter = 1003, e.wrapR = 1001, e.generateMipmaps = !1, e.flipY = !1, e.unpackAlignment = 1, e
					}
					return y(t, e), t
				}(ei);
				nj.prototype.isDataTexture3D = !0;
				var nq = new ei,
					nX = new nF,
					nY = new nj,
					nJ = new t2,
					nZ = [],
					nK = [],
					nQ = new Float32Array(16),
					n$ = new Float32Array(9),
					n0 = new Float32Array(4);

				function n1(e, t, n) {
					var i = e[0];
					if (i <= 0 || i > 0) return e;
					var r = t * n,
						a = nZ[r];
					if (void 0 === a && (a = new Float32Array(r), nZ[r] = a), 0 !== t) {
						i.toArray(a, 0);
						for (var o = 1, s = 0; o !== t; ++o) s += n, e[o].toArray(a, s)
					}
					return a
				}

				function n3(e, t) {
					if (e.length !== t.length) return !1;
					for (var n = 0, i = e.length; n < i; n++)
						if (e[n] !== t[n]) return !1;
					return !0
				}

				function n2(e, t) {
					for (var n = 0, i = t.length; n < i; n++) e[n] = t[n]
				}

				function n4(e, t) {
					var n = nK[t];
					void 0 === n && (n = new Int32Array(t), nK[t] = n);
					for (var i = 0; i !== t; ++i) n[i] = e.allocateTextureUnit();
					return n
				}

				function n5(e, t) {
					var n = this.cache;
					n[0] !== t && (e.uniform1f(this.addr, t), n[0] = t)
				}

				function n6(e, t) {
					var n = this.cache;
					if (void 0 !== t.x) n[0] === t.x && n[1] === t.y || (e.uniform2f(this.addr, t.x, t.y), n[0] = t.x, n[1] = t.y);
					else {
						if (n3(n, t)) return;
						e.uniform2fv(this.addr, t), n2(n, t)
					}
				}

				function n8(e, t) {
					var n = this.cache;
					if (void 0 !== t.x) n[0] === t.x && n[1] === t.y && n[2] === t.z || (e.uniform3f(this.addr, t.x, t.y, t.z), n[0] = t.x, n[1] = t.y, n[2] = t.z);
					else if (void 0 !== t.r) n[0] === t.r && n[1] === t.g && n[2] === t.b || (e.uniform3f(this.addr, t.r, t.g, t.b), n[0] = t.r, n[1] = t.g, n[2] = t.b);
					else {
						if (n3(n, t)) return;
						e.uniform3fv(this.addr, t), n2(n, t)
					}
				}

				function n7(e, t) {
					var n = this.cache;
					if (void 0 !== t.x) n[0] === t.x && n[1] === t.y && n[2] === t.z && n[3] === t.w || (e.uniform4f(this.addr, t.x, t.y, t.z, t.w), n[0] = t.x, n[1] = t.y, n[2] = t.z, n[3] = t.w);
					else {
						if (n3(n, t)) return;
						e.uniform4fv(this.addr, t), n2(n, t)
					}
				}

				function n9(e, t) {
					var n = this.cache,
						i = t.elements;
					if (void 0 === i) {
						if (n3(n, t)) return;
						e.uniformMatrix2fv(this.addr, !1, t), n2(n, t)
					} else {
						if (n3(n, i)) return;
						n0.set(i), e.uniformMatrix2fv(this.addr, !1, n0), n2(n, i)
					}
				}

				function ie(e, t) {
					var n = this.cache,
						i = t.elements;
					if (void 0 === i) {
						if (n3(n, t)) return;
						e.uniformMatrix3fv(this.addr, !1, t), n2(n, t)
					} else {
						if (n3(n, i)) return;
						n$.set(i), e.uniformMatrix3fv(this.addr, !1, n$), n2(n, i)
					}
				}

				function it(e, t) {
					var n = this.cache,
						i = t.elements;
					if (void 0 === i) {
						if (n3(n, t)) return;
						e.uniformMatrix4fv(this.addr, !1, t), n2(n, t)
					} else {
						if (n3(n, i)) return;
						nQ.set(i), e.uniformMatrix4fv(this.addr, !1, nQ), n2(n, i)
					}
				}

				function ii(e, t) {
					var n = this.cache;
					n[0] !== t && (e.uniform1i(this.addr, t), n[0] = t)
				}

				function ir(e, t) {
					var n = this.cache;
					n3(n, t) || (e.uniform2iv(this.addr, t), n2(n, t))
				}

				function ia(e, t) {
					var n = this.cache;
					n3(n, t) || (e.uniform3iv(this.addr, t), n2(n, t))
				}

				function io(e, t) {
					var n = this.cache;
					n3(n, t) || (e.uniform4iv(this.addr, t), n2(n, t))
				}

				function is(e, t) {
					var n = this.cache;
					n[0] !== t && (e.uniform1ui(this.addr, t), n[0] = t)
				}

				function il(e, t) {
					var n = this.cache;
					n3(n, t) || (e.uniform2uiv(this.addr, t), n2(n, t))
				}

				function iu(e, t) {
					var n = this.cache;
					n3(n, t) || (e.uniform3uiv(this.addr, t), n2(n, t))
				}

				function ic(e, t) {
					var n = this.cache;
					n3(n, t) || (e.uniform4uiv(this.addr, t), n2(n, t))
				}

				function ih(e, t, n) {
					var i = this.cache,
						r = n.allocateTextureUnit();
					i[0] !== r && (e.uniform1i(this.addr, r), i[0] = r), n.safeSetTexture2D(t || nq, r)
				}

				function id(e, t, n) {
					var i = this.cache,
						r = n.allocateTextureUnit();
					i[0] !== r && (e.uniform1i(this.addr, r), i[0] = r), n.setTexture3D(t || nY, r)
				}

				function ip(e, t, n) {
					var i = this.cache,
						r = n.allocateTextureUnit();
					i[0] !== r && (e.uniform1i(this.addr, r), i[0] = r), n.safeSetTextureCube(t || nJ, r)
				}

				function im(e, t, n) {
					var i = this.cache,
						r = n.allocateTextureUnit();
					i[0] !== r && (e.uniform1i(this.addr, r), i[0] = r), n.setTexture2DArray(t || nX, r)
				}

				function iv(e, t) {
					e.uniform1fv(this.addr, t)
				}

				function ig(e, t) {
					var n = n1(t, this.size, 2);
					e.uniform2fv(this.addr, n)
				}

				function iy(e, t) {
					var n = n1(t, this.size, 3);
					e.uniform3fv(this.addr, n)
				}

				function ix(e, t) {
					var n = n1(t, this.size, 4);
					e.uniform4fv(this.addr, n)
				}

				function i_(e, t) {
					var n = n1(t, this.size, 4);
					e.uniformMatrix2fv(this.addr, !1, n)
				}

				function ib(e, t) {
					var n = n1(t, this.size, 9);
					e.uniformMatrix3fv(this.addr, !1, n)
				}

				function iw(e, t) {
					var n = n1(t, this.size, 16);
					e.uniformMatrix4fv(this.addr, !1, n)
				}

				function iM(e, t) {
					e.uniform1iv(this.addr, t)
				}

				function iS(e, t) {
					e.uniform2iv(this.addr, t)
				}

				function iT(e, t) {
					e.uniform3iv(this.addr, t)
				}

				function iE(e, t) {
					e.uniform4iv(this.addr, t)
				}

				function iA(e, t) {
					e.uniform1uiv(this.addr, t)
				}

				function ik(e, t) {
					e.uniform2uiv(this.addr, t)
				}

				function iR(e, t) {
					e.uniform3uiv(this.addr, t)
				}

				function iL(e, t) {
					e.uniform4uiv(this.addr, t)
				}

				function iC(e, t, n) {
					var i = t.length,
						r = n4(n, i);
					e.uniform1iv(this.addr, r);
					for (var a = 0; a !== i; ++a) n.safeSetTexture2D(t[a] || nq, r[a])
				}

				function iP(e, t, n) {
					var i = t.length,
						r = n4(n, i);
					e.uniform1iv(this.addr, r);
					for (var a = 0; a !== i; ++a) n.setTexture3D(t[a] || nY, r[a])
				}

				function iD(e, t, n) {
					var i = t.length,
						r = n4(n, i);
					e.uniform1iv(this.addr, r);
					for (var a = 0; a !== i; ++a) n.safeSetTextureCube(t[a] || nJ, r[a])
				}

				function iI(e, t, n) {
					var i = t.length,
						r = n4(n, i);
					e.uniform1iv(this.addr, r);
					for (var a = 0; a !== i; ++a) n.setTexture2DArray(t[a] || nX, r[a])
				}

				function iN(e, t, n) {
					this.id = e, this.addr = n, this.cache = [], this.setValue = function(e) {
						switch (e) {
							case 5126:
								return n5;
							case 35664:
								return n6;
							case 35665:
								return n8;
							case 35666:
								return n7;
							case 35674:
								return n9;
							case 35675:
								return ie;
							case 35676:
								return it;
							case 5124:
							case 35670:
								return ii;
							case 35667:
							case 35671:
								return ir;
							case 35668:
							case 35672:
								return ia;
							case 35669:
							case 35673:
								return io;
							case 5125:
								return is;
							case 36294:
								return il;
							case 36295:
								return iu;
							case 36296:
								return ic;
							case 35678:
							case 36198:
							case 36298:
							case 36306:
							case 35682:
								return ih;
							case 35679:
							case 36299:
							case 36307:
								return id;
							case 35680:
							case 36300:
							case 36308:
							case 36293:
								return ip;
							case 36289:
							case 36303:
							case 36311:
							case 36292:
								return im
						}
					}(t.type)
				}

				function iO(e, t, n) {
					this.id = e, this.addr = n, this.cache = [], this.size = t.size, this.setValue = function(e) {
						switch (e) {
							case 5126:
								return iv;
							case 35664:
								return ig;
							case 35665:
								return iy;
							case 35666:
								return ix;
							case 35674:
								return i_;
							case 35675:
								return ib;
							case 35676:
								return iw;
							case 5124:
							case 35670:
								return iM;
							case 35667:
							case 35671:
								return iS;
							case 35668:
							case 35672:
								return iT;
							case 35669:
							case 35673:
								return iE;
							case 5125:
								return iA;
							case 36294:
								return ik;
							case 36295:
								return iR;
							case 36296:
								return iL;
							case 35678:
							case 36198:
							case 36298:
							case 36306:
							case 35682:
								return iC;
							case 35679:
							case 36299:
							case 36307:
								return iP;
							case 35680:
							case 36300:
							case 36308:
							case 36293:
								return iD;
							case 36289:
							case 36303:
							case 36311:
							case 36292:
								return iI
						}
					}(t.type)
				}

				function iz(e) {
					this.id = e, this.seq = [], this.map = {}
				}
				iO.prototype.updateCache = function(e) {
					var t = this.cache;
					e instanceof Float32Array && t.length !== e.length && (this.cache = new Float32Array(e.length)), n2(t, e)
				}, iz.prototype.setValue = function(e, t, n) {
					for (var i = this.seq, r = 0, a = i.length; r !== a; ++r) {
						var o = i[r];
						o.setValue(e, t[o.id], n)
					}
				};
				var iU = /(\w+)(\])?(\[|\.)?/g;

				function iF(e, t) {
					e.seq.push(t), e.map[t.id] = t
				}

				function iB(e, t) {
					this.seq = [], this.map = {};
					for (var n = e.getProgramParameter(t, 35718), i = 0; i < n; ++i) {
						var r = e.getActiveUniform(t, i);
						! function(e, t, n) {
							var i = e.name,
								r = i.length;
							for (iU.lastIndex = 0;;) {
								var a = iU.exec(i),
									o = iU.lastIndex,
									s = a[1],
									l = "]" === a[2],
									u = a[3];
								if (l && (s |= 0), void 0 === u || "[" === u && o + 2 === r) {
									iF(n, void 0 === u ? new iN(s, e, t) : new iO(s, e, t));
									break
								}
								var c = n.map[s];
								void 0 === c && iF(n, c = new iz(s)), n = c
							}
						}(r, e.getUniformLocation(t, r.name), this)
					}
				}

				function iH(e, t, n) {
					var i = e.createShader(t);
					return e.shaderSource(i, n), e.compileShader(i), i
				}
				iB.prototype.setValue = function(e, t, n, i) {
					var r = this.map[t];
					void 0 !== r && r.setValue(e, n, i)
				}, iB.prototype.setOptional = function(e, t, n) {
					var i = t[n];
					void 0 !== i && this.setValue(e, n, i)
				}, iB.upload = function(e, t, n, i) {
					for (var r = 0, a = t.length; r !== a; ++r) {
						var o = t[r],
							s = n[o.id];
						!1 !== s.needsUpdate && o.setValue(e, s.value, i)
					}
				}, iB.seqWithValue = function(e, t) {
					for (var n = [], i = 0, r = e.length; i !== r; ++i) {
						var a = e[i];
						a.id in t && n.push(a)
					}
					return n
				};
				var iV = 0;

				function iG(e, t, n) {
					var i = e.getShaderParameter(t, 35713),
						r = e.getShaderInfoLog(t).trim();
					return i && "" === r ? "" : n.toUpperCase() + "\n\n" + r + "\n\n" + function(e) {
						for (var t = e.split("\n"), n = 0; n < t.length; n++) t[n] = n + 1 + ": " + t[n];
						return t.join("\n")
					}(e.getShaderSource(t))
				}

				function iW(e) {
					return "" !== e
				}

				function ij(e, t) {
					return e.replace(/NUM_DIR_LIGHTS/g, t.numDirLights).replace(/NUM_SPOT_LIGHTS/g, t.numSpotLights).replace(/NUM_RECT_AREA_LIGHTS/g, t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g, t.numPointLights).replace(/NUM_HEMI_LIGHTS/g, t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g, t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS/g, t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g, t.numPointLightShadows)
				}

				function iq(e, t) {
					return e.replace(/NUM_CLIPPING_PLANES/g, t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g, t.numClippingPlanes - t.numClipIntersection)
				}
				var iX = /^[ \t]*#include +<([\w\d./]+)>/gm;

				function iY(e) {
					return e.replace(iX, iJ)
				}

				function iJ(e, t) {
					var n = na[t];
					if (void 0 === n) throw Error("Can not resolve #include <" + t + ">");
					return iY(n)
				}
				var iZ = /#pragma unroll_loop[\s]+?for \( int i \= (\d+)\; i < (\d+)\; i \+\+ \) \{([\s\S]+?)(?=\})\}/g,
					iK = /#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;

				function iQ(e) {
					return e.replace(iK, i0).replace(iZ, i$)
				}

				function i$(e, t, n, i) {
					return console.warn("WebGLProgram: #pragma unroll_loop shader syntax is deprecated. Please use #pragma unroll_loop_start syntax instead."), i0(e, t, n, i)
				}

				function i0(e, t, n, i) {
					for (var r = "", a = parseInt(t); a < parseInt(n); a++) r += i.replace(/\[\s*i\s*\]/g, "[ " + a + " ]").replace(/UNROLLED_LOOP_INDEX/g, a);
					return r
				}

				function i1(e) {
					var t = "precision " + e.precision + " float;\nprecision " + e.precision + " int;";
					return "highp" === e.precision ? t += "\n#define HIGH_PRECISION" : "mediump" === e.precision ? t += "\n#define MEDIUM_PRECISION" : "lowp" === e.precision && (t += "\n#define LOW_PRECISION"), t
				}

				function i3(e, t, n, i) {
					var r, a, o, s, l, u, c = e.getContext(),
						h = n.defines,
						d = n.vertexShader,
						f = n.fragmentShader,
						p = (s = "SHADOWMAP_TYPE_BASIC", 1 === n.shadowMapType ? s = "SHADOWMAP_TYPE_PCF" : 2 === n.shadowMapType ? s = "SHADOWMAP_TYPE_PCF_SOFT" : 3 === n.shadowMapType && (s = "SHADOWMAP_TYPE_VSM"), s),
						m = function(e) {
							var t = "ENVMAP_TYPE_CUBE";
							if (e.envMap) switch (e.envMapMode) {
								case 301:
								case 302:
									t = "ENVMAP_TYPE_CUBE";
									break;
								case 306:
								case 307:
									t = "ENVMAP_TYPE_CUBE_UV"
							}
							return t
						}(n),
						v = function(e) {
							var t = "ENVMAP_MODE_REFLECTION";
							if (e.envMap) switch (e.envMapMode) {
								case 302:
								case 307:
									t = "ENVMAP_MODE_REFRACTION"
							}
							return t
						}(n),
						g = function(e) {
							var t = "ENVMAP_BLENDING_NONE";
							if (e.envMap) switch (e.combine) {
								case 0:
									t = "ENVMAP_BLENDING_MULTIPLY";
									break;
								case 1:
									t = "ENVMAP_BLENDING_MIX";
									break;
								case 2:
									t = "ENVMAP_BLENDING_ADD"
							}
							return t
						}(n),
						y = n.isWebGL2 ? "" : [n.extensionDerivatives || n.envMapCubeUV || n.bumpMap || n.tangentSpaceNormalMap || n.clearcoatNormalMap || n.flatShading || "physical" === n.shaderID ? "#extension GL_OES_standard_derivatives : enable" : "", (n.extensionFragDepth || n.logarithmicDepthBuffer) && n.rendererExtensionFragDepth ? "#extension GL_EXT_frag_depth : enable" : "", n.extensionDrawBuffers && n.rendererExtensionDrawBuffers ? "#extension GL_EXT_draw_buffers : require" : "", (n.extensionShaderTextureLOD || n.envMap || n.transmission) && n.rendererExtensionShaderTextureLod ? "#extension GL_EXT_shader_texture_lod : enable" : ""].filter(iW).join("\n"),
						x = function(e) {
							var t = [];
							for (var n in e) {
								var i = e[n];
								!1 !== i && t.push("#define " + n + " " + i)
							}
							return t.join("\n")
						}(h),
						_ = c.createProgram(),
						b = n.glslVersion ? "#version " + n.glslVersion + "\n" : "";
					n.isRawShaderMaterial ? ((l = [x].filter(iW).join("\n")).length > 0 && (l += "\n"), (u = [y, x].filter(iW).join("\n")).length > 0 && (u += "\n")) : (l = [i1(n), "#define SHADER_NAME " + n.shaderName, x, n.instancing ? "#define USE_INSTANCING" : "", n.instancingColor ? "#define USE_INSTANCING_COLOR" : "", n.supportsVertexTextures ? "#define VERTEX_TEXTURES" : "", "#define MAX_BONES " + n.maxBones, n.useFog && n.fog ? "#define USE_FOG" : "", n.useFog && n.fogExp2 ? "#define FOG_EXP2" : "", n.map ? "#define USE_MAP" : "", n.envMap ? "#define USE_ENVMAP" : "", n.envMap ? "#define " + v : "", n.lightMap ? "#define USE_LIGHTMAP" : "", n.aoMap ? "#define USE_AOMAP" : "", n.emissiveMap ? "#define USE_EMISSIVEMAP" : "", n.bumpMap ? "#define USE_BUMPMAP" : "", n.normalMap ? "#define USE_NORMALMAP" : "", n.normalMap && n.objectSpaceNormalMap ? "#define OBJECTSPACE_NORMALMAP" : "", n.normalMap && n.tangentSpaceNormalMap ? "#define TANGENTSPACE_NORMALMAP" : "", n.clearcoatMap ? "#define USE_CLEARCOATMAP" : "", n.clearcoatRoughnessMap ? "#define USE_CLEARCOAT_ROUGHNESSMAP" : "", n.clearcoatNormalMap ? "#define USE_CLEARCOAT_NORMALMAP" : "", n.displacementMap && n.supportsVertexTextures ? "#define USE_DISPLACEMENTMAP" : "", n.specularMap ? "#define USE_SPECULARMAP" : "", n.specularIntensityMap ? "#define USE_SPECULARINTENSITYMAP" : "", n.specularColorMap ? "#define USE_SPECULARCOLORMAP" : "", n.roughnessMap ? "#define USE_ROUGHNESSMAP" : "", n.metalnessMap ? "#define USE_METALNESSMAP" : "", n.alphaMap ? "#define USE_ALPHAMAP" : "", n.transmission ? "#define USE_TRANSMISSION" : "", n.transmissionMap ? "#define USE_TRANSMISSIONMAP" : "", n.thicknessMap ? "#define USE_THICKNESSMAP" : "", n.sheenColorMap ? "#define USE_SHEENCOLORMAP" : "", n.sheenRoughnessMap ? "#define USE_SHEENROUGHNESSMAP" : "", n.vertexTangents ? "#define USE_TANGENT" : "", n.vertexColors ? "#define USE_COLOR" : "", n.vertexAlphas ? "#define USE_COLOR_ALPHA" : "", n.vertexUvs ? "#define USE_UV" : "", n.uvsVertexOnly ? "#define UVS_VERTEX_ONLY" : "", n.flatShading ? "#define FLAT_SHADED" : "", n.skinning ? "#define USE_SKINNING" : "", n.useVertexTexture ? "#define BONE_TEXTURE" : "", n.morphTargets ? "#define USE_MORPHTARGETS" : "", n.morphNormals && !1 === n.flatShading ? "#define USE_MORPHNORMALS" : "", n.morphTargets && n.isWebGL2 ? "#define MORPHTARGETS_TEXTURE" : "", n.morphTargets && n.isWebGL2 ? "#define MORPHTARGETS_COUNT " + n.morphTargetsCount : "", n.doubleSided ? "#define DOUBLE_SIDED" : "", n.flipSided ? "#define FLIP_SIDED" : "", n.shadowMapEnabled ? "#define USE_SHADOWMAP" : "", n.shadowMapEnabled ? "#define " + p : "", n.sizeAttenuation ? "#define USE_SIZEATTENUATION" : "", n.logarithmicDepthBuffer ? "#define USE_LOGDEPTHBUF" : "", n.logarithmicDepthBuffer && n.rendererExtensionFragDepth ? "#define USE_LOGDEPTHBUF_EXT" : "", "uniform mat4 modelMatrix;", "uniform mat4 modelViewMatrix;", "uniform mat4 projectionMatrix;", "uniform mat4 viewMatrix;", "uniform mat3 normalMatrix;", "uniform vec3 cameraPosition;", "uniform bool isOrthographic;", "#ifdef USE_INSTANCING", "	attribute mat4 instanceMatrix;", "#endif", "#ifdef USE_INSTANCING_COLOR", "	attribute vec3 instanceColor;", "#endif", "attribute vec3 position;", "attribute vec3 normal;", "attribute vec2 uv;", "#ifdef USE_TANGENT", "	attribute vec4 tangent;", "#endif", "#if defined( USE_COLOR_ALPHA )", "	attribute vec4 color;", "#elif defined( USE_COLOR )", "	attribute vec3 color;", "#endif", "#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )", "	attribute vec3 morphTarget0;", "	attribute vec3 morphTarget1;", "	attribute vec3 morphTarget2;", "	attribute vec3 morphTarget3;", "	#ifdef USE_MORPHNORMALS", "		attribute vec3 morphNormal0;", "		attribute vec3 morphNormal1;", "		attribute vec3 morphNormal2;", "		attribute vec3 morphNormal3;", "	#else", "		attribute vec3 morphTarget4;", "		attribute vec3 morphTarget5;", "		attribute vec3 morphTarget6;", "		attribute vec3 morphTarget7;", "	#endif", "#endif", "#ifdef USE_SKINNING", "	attribute vec4 skinIndex;", "	attribute vec4 skinWeight;", "#endif", "\n"].filter(iW).join("\n"), u = [y, i1(n), "#define SHADER_NAME " + n.shaderName, x, n.useFog && n.fog ? "#define USE_FOG" : "", n.useFog && n.fogExp2 ? "#define FOG_EXP2" : "", n.map ? "#define USE_MAP" : "", n.matcap ? "#define USE_MATCAP" : "", n.envMap ? "#define USE_ENVMAP" : "", n.envMap ? "#define " + m : "", n.envMap ? "#define " + v : "", n.envMap ? "#define " + g : "", n.lightMap ? "#define USE_LIGHTMAP" : "", n.aoMap ? "#define USE_AOMAP" : "", n.emissiveMap ? "#define USE_EMISSIVEMAP" : "", n.bumpMap ? "#define USE_BUMPMAP" : "", n.normalMap ? "#define USE_NORMALMAP" : "", n.normalMap && n.objectSpaceNormalMap ? "#define OBJECTSPACE_NORMALMAP" : "", n.normalMap && n.tangentSpaceNormalMap ? "#define TANGENTSPACE_NORMALMAP" : "", n.clearcoat ? "#define USE_CLEARCOAT" : "", n.clearcoatMap ? "#define USE_CLEARCOATMAP" : "", n.clearcoatRoughnessMap ? "#define USE_CLEARCOAT_ROUGHNESSMAP" : "", n.clearcoatNormalMap ? "#define USE_CLEARCOAT_NORMALMAP" : "", n.specularMap ? "#define USE_SPECULARMAP" : "", n.specularIntensityMap ? "#define USE_SPECULARINTENSITYMAP" : "", n.specularColorMap ? "#define USE_SPECULARCOLORMAP" : "", n.roughnessMap ? "#define USE_ROUGHNESSMAP" : "", n.metalnessMap ? "#define USE_METALNESSMAP" : "", n.alphaMap ? "#define USE_ALPHAMAP" : "", n.alphaTest ? "#define USE_ALPHATEST" : "", n.sheen ? "#define USE_SHEEN" : "", n.sheenColorMap ? "#define USE_SHEENCOLORMAP" : "", n.sheenRoughnessMap ? "#define USE_SHEENROUGHNESSMAP" : "", n.transmission ? "#define USE_TRANSMISSION" : "", n.transmissionMap ? "#define USE_TRANSMISSIONMAP" : "", n.thicknessMap ? "#define USE_THICKNESSMAP" : "", n.decodeVideoTexture ? "#define DECODE_VIDEO_TEXTURE" : "", n.vertexTangents ? "#define USE_TANGENT" : "", n.vertexColors || n.instancingColor ? "#define USE_COLOR" : "", n.vertexAlphas ? "#define USE_COLOR_ALPHA" : "", n.vertexUvs ? "#define USE_UV" : "", n.uvsVertexOnly ? "#define UVS_VERTEX_ONLY" : "", n.gradientMap ? "#define USE_GRADIENTMAP" : "", n.flatShading ? "#define FLAT_SHADED" : "", n.doubleSided ? "#define DOUBLE_SIDED" : "", n.flipSided ? "#define FLIP_SIDED" : "", n.shadowMapEnabled ? "#define USE_SHADOWMAP" : "", n.shadowMapEnabled ? "#define " + p : "", n.premultipliedAlpha ? "#define PREMULTIPLIED_ALPHA" : "", n.physicallyCorrectLights ? "#define PHYSICALLY_CORRECT_LIGHTS" : "", n.logarithmicDepthBuffer ? "#define USE_LOGDEPTHBUF" : "", n.logarithmicDepthBuffer && n.rendererExtensionFragDepth ? "#define USE_LOGDEPTHBUF_EXT" : "", (n.extensionShaderTextureLOD || n.envMap) && n.rendererExtensionShaderTextureLod ? "#define TEXTURE_LOD_EXT" : "", "uniform mat4 viewMatrix;", "uniform vec3 cameraPosition;", "uniform bool isOrthographic;", 0 !== n.toneMapping ? "#define TONE_MAPPING" : "", 0 !== n.toneMapping ? na.tonemapping_pars_fragment : "", 0 !== n.toneMapping ? function(e, t) {
						var n;
						switch (t) {
							case 1:
								n = "Linear";
								break;
							case 2:
								n = "Reinhard";
								break;
							case 3:
								n = "OptimizedCineon";
								break;
							case 4:
								n = "ACESFilmic";
								break;
							case 5:
								n = "Custom";
								break;
							default:
								console.warn("THREE.WebGLProgram: Unsupported toneMapping:", t), n = "Linear"
						}
						return "vec3 " + e + "( vec3 color ) { return " + n + "ToneMapping( color ); }"
					}("toneMapping", n.toneMapping) : "", n.dithering ? "#define DITHERING" : "", n.alphaWrite ? "" : "#define OPAQUE", na.encodings_pars_fragment, "vec4 linearToOutputTexel( vec4 value ) { return LinearTo" + (r = function(e) {
						switch (e) {
							case 3e3:
								return ["Linear", "( value )"];
							case 3001:
								return ["sRGB", "( value )"];
							default:
								return console.warn("THREE.WebGLProgram: Unsupported encoding:", e), ["Linear", "( value )"]
						}
					}(n.outputEncoding))[0] + r[1] + "; }", n.depthPacking ? "#define DEPTH_PACKING " + n.depthPacking : "", "\n"].filter(iW).join("\n")), d = iq(d = ij(d = iY(d), n), n), f = iq(f = ij(f = iY(f), n), n), d = iQ(d), f = iQ(f), n.isWebGL2 && !0 !== n.isRawShaderMaterial && (b = "#version 300 es\n", l = "precision mediump sampler2DArray;\n#define attribute in\n#define varying out\n#define texture2D texture\n" + l, u = ["#define varying in", n.glslVersion === I ? "" : "layout(location = 0) out highp vec4 pc_fragColor;", n.glslVersion === I ? "" : "#define gl_FragColor pc_fragColor", "#define gl_FragDepthEXT gl_FragDepth", "#define texture2D texture", "#define textureCube texture", "#define texture2DProj textureProj", "#define texture2DLodEXT textureLod", "#define texture2DProjLodEXT textureProjLod", "#define textureCubeLodEXT textureLod", "#define texture2DGradEXT textureGrad", "#define texture2DProjGradEXT textureProjGrad", "#define textureCubeGradEXT textureGrad"].join("\n") + "\n" + u);
					var w = b + u + f,
						M = iH(c, 35633, b + l + d),
						S = iH(c, 35632, w);
					if (c.attachShader(_, M), c.attachShader(_, S), void 0 !== n.index0AttributeName ? c.bindAttribLocation(_, 0, n.index0AttributeName) : !0 === n.morphTargets && c.bindAttribLocation(_, 0, "position"), c.linkProgram(_), e.debug.checkShaderErrors) {
						var T = c.getProgramInfoLog(_).trim(),
							E = c.getShaderInfoLog(M).trim(),
							A = c.getShaderInfoLog(S).trim(),
							k = !0,
							R = !0;
						if (!1 === c.getProgramParameter(_, 35714)) {
							k = !1;
							var L = iG(c, M, "vertex"),
								C = iG(c, S, "fragment");
							console.error("THREE.WebGLProgram: Shader Error " + c.getError() + " - VALIDATE_STATUS " + c.getProgramParameter(_, 35715) + "\n\nProgram Info Log: " + T + "\n" + L + "\n" + C)
						} else "" !== T ? console.warn("THREE.WebGLProgram: Program Info Log:", T) : "" !== E && "" !== A || (R = !1);
						R && (this.diagnostics = {
							runnable: k,
							programLog: T,
							vertexShader: {
								log: E,
								prefix: l
							},
							fragmentShader: {
								log: A,
								prefix: u
							}
						})
					}
					return c.deleteShader(M), c.deleteShader(S), this.getUniforms = function() {
						return void 0 === a && (a = new iB(c, _)), a
					}, this.getAttributes = function() {
						return void 0 === o && (o = function(e, t) {
							for (var n = {}, i = e.getProgramParameter(t, 35721), r = 0; r < i; r++) {
								var a = e.getActiveAttrib(t, r),
									o = a.name,
									s = 1;
								35674 === a.type && (s = 2), 35675 === a.type && (s = 3), 35676 === a.type && (s = 4), n[o] = {
									type: a.type,
									location: e.getAttribLocation(t, o),
									locationSize: s
								}
							}
							return n
						}(c, _)), o
					}, this.destroy = function() {
						i.releaseStatesOfProgram(this), c.deleteProgram(_), this.program = void 0
					}, this.name = n.shaderName, this.id = iV++, this.cacheKey = t, this.usedTimes = 1, this.program = _, this.vertexShader = M, this.fragmentShader = S, this
				}
				var i2 = 0,
					i4 = function() {
						function e() {
							d(this, e), this.shaderCache = new Map, this.materialCache = new Map
						}
						return p(e, [{
							key: "update",
							value: function(e) {
								var t = e.vertexShader,
									n = e.fragmentShader,
									i = this._getShaderStage(t),
									r = this._getShaderStage(n),
									a = this._getShaderCacheForMaterial(e);
								return !1 === a.has(i) && (a.add(i), i.usedTimes++), !1 === a.has(r) && (a.add(r), r.usedTimes++), this
							}
						}, {
							key: "remove",
							value: function(e) {
								var t = this.materialCache.get(e),
									n = !0,
									i = !1,
									r = void 0;
								try {
									for (var a, o = t[Symbol.iterator](); !(n = (a = o.next()).done); n = !0) {
										var s = a.value;
										s.usedTimes--, 0 === s.usedTimes && this.shaderCache.delete(s)
									}
								} catch (e) {
									i = !0, r = e
								} finally {
									try {
										n || null == o.return || o.return()
									} finally {
										if (i) throw r
									}
								}
								return this.materialCache.delete(e), this
							}
						}, {
							key: "getVertexShaderID",
							value: function(e) {
								return this._getShaderStage(e.vertexShader).id
							}
						}, {
							key: "getFragmentShaderID",
							value: function(e) {
								return this._getShaderStage(e.fragmentShader).id
							}
						}, {
							key: "dispose",
							value: function() {
								this.shaderCache.clear(), this.materialCache.clear()
							}
						}, {
							key: "_getShaderCacheForMaterial",
							value: function(e) {
								var t = this.materialCache;
								return !1 === t.has(e) && t.set(e, new Set), t.get(e)
							}
						}, {
							key: "_getShaderStage",
							value: function(e) {
								var t = this.shaderCache;
								if (!1 === t.has(e)) {
									var n = new i5;
									t.set(e, n)
								}
								return t.get(e)
							}
						}]), e
					}(),
					i5 = function e() {
						d(this, e), this.id = i2++, this.usedTimes = 0
					};

				function i6(e, t, n, i, r, a, o) {
					var s = new eK,
						l = new i4,
						u = [],
						c = r.isWebGL2,
						h = r.logarithmicDepthBuffer,
						d = r.floatVertexTextures,
						f = r.maxVertexUniforms,
						p = r.vertexTextures,
						m = r.precision,
						v = {
							MeshDepthMaterial: "depth",
							MeshDistanceMaterial: "distanceRGBA",
							MeshNormalMaterial: "normal",
							MeshBasicMaterial: "basic",
							MeshLambertMaterial: "lambert",
							MeshPhongMaterial: "phong",
							MeshToonMaterial: "toon",
							MeshStandardMaterial: "physical",
							MeshPhysicalMaterial: "physical",
							MeshMatcapMaterial: "matcap",
							LineBasicMaterial: "basic",
							LineDashedMaterial: "dashed",
							PointsMaterial: "points",
							ShadowMaterial: "shadow",
							SpriteMaterial: "sprite"
						};
					return {
						getParameters: function(a, s, u, g, y) {
							var x, _, b, w, M = g.fog,
								S = a.isMeshStandardMaterial ? g.environment : null,
								T = (a.isMeshStandardMaterial ? n : t).get(a.envMap || S),
								E = v[a.type],
								A = y.isSkinnedMesh ? function(e) {
									var t = e.skeleton.bones;
									if (d) return 1024;
									var n = Math.min(Math.floor((f - 20) / 4), t.length);
									return n < t.length ? (console.warn("THREE.WebGLRenderer: Skeleton has " + t.length + " bones. This GPU supports " + n + "."), 0) : n
								}(y) : 0;
							if (null !== a.precision && (m = r.getMaxPrecision(a.precision)) !== a.precision && console.warn("THREE.WebGLProgram.getParameters:", a.precision, "not supported, using", m, "instead."), E) {
								var k = ns[E];
								x = k.vertexShader, _ = k.fragmentShader
							} else x = a.vertexShader, _ = a.fragmentShader, l.update(a), b = l.getVertexShaderID(a), w = l.getFragmentShaderID(a);
							var R = e.getRenderTarget(),
								L = a.alphaTest > 0,
								C = a.clearcoat > 0;
							return {
								isWebGL2: c,
								shaderID: E,
								shaderName: a.type,
								vertexShader: x,
								fragmentShader: _,
								defines: a.defines,
								customVertexShaderID: b,
								customFragmentShaderID: w,
								isRawShaderMaterial: !0 === a.isRawShaderMaterial,
								glslVersion: a.glslVersion,
								precision: m,
								instancing: !0 === y.isInstancedMesh,
								instancingColor: !0 === y.isInstancedMesh && null !== y.instanceColor,
								supportsVertexTextures: p,
								outputEncoding: null === R ? e.outputEncoding : !0 === R.isXRRenderTarget ? R.texture.encoding : 3e3,
								map: !!a.map,
								matcap: !!a.matcap,
								envMap: !!T,
								envMapMode: T && T.mapping,
								envMapCubeUV: !!T && (306 === T.mapping || 307 === T.mapping),
								lightMap: !!a.lightMap,
								aoMap: !!a.aoMap,
								emissiveMap: !!a.emissiveMap,
								bumpMap: !!a.bumpMap,
								normalMap: !!a.normalMap,
								objectSpaceNormalMap: 1 === a.normalMapType,
								tangentSpaceNormalMap: 0 === a.normalMapType,
								decodeVideoTexture: !!a.map && !0 === a.map.isVideoTexture && 3001 === a.map.encoding,
								clearcoat: C,
								clearcoatMap: C && !!a.clearcoatMap,
								clearcoatRoughnessMap: C && !!a.clearcoatRoughnessMap,
								clearcoatNormalMap: C && !!a.clearcoatNormalMap,
								displacementMap: !!a.displacementMap,
								roughnessMap: !!a.roughnessMap,
								metalnessMap: !!a.metalnessMap,
								specularMap: !!a.specularMap,
								specularIntensityMap: !!a.specularIntensityMap,
								specularColorMap: !!a.specularColorMap,
								alphaMap: !!a.alphaMap,
								alphaTest: L,
								alphaWrite: a.alphaWrite || a.transparent,
								gradientMap: !!a.gradientMap,
								sheen: a.sheen > 0,
								sheenColorMap: !!a.sheenColorMap,
								sheenRoughnessMap: !!a.sheenRoughnessMap,
								transmission: a.transmission > 0,
								transmissionMap: !!a.transmissionMap,
								thicknessMap: !!a.thicknessMap,
								combine: a.combine,
								vertexTangents: !!a.normalMap && !!y.geometry && !!y.geometry.attributes.tangent,
								vertexColors: a.vertexColors,
								vertexAlphas: !0 === a.vertexColors && !!y.geometry && !!y.geometry.attributes.color && 4 === y.geometry.attributes.color.itemSize,
								vertexUvs: !!(a.map || a.bumpMap || a.normalMap || a.specularMap || a.alphaMap || a.emissiveMap || a.roughnessMap || a.metalnessMap || a.clearcoatMap || a.clearcoatRoughnessMap || a.clearcoatNormalMap || a.displacementMap || a.transmissionMap || a.thicknessMap || a.specularIntensityMap || a.specularColorMap || a.sheenColorMap || a.sheenRoughnessMap),
								uvsVertexOnly: !(a.map || a.bumpMap || a.normalMap || a.specularMap || a.alphaMap || a.emissiveMap || a.roughnessMap || a.metalnessMap || a.clearcoatNormalMap || a.transmission > 0 || a.transmissionMap || a.thicknessMap || a.specularIntensityMap || a.specularColorMap || a.sheen > 0 || a.sheenColorMap || a.sheenRoughnessMap || !a.displacementMap),
								fog: !!M,
								useFog: a.fog,
								fogExp2: M && M.isFogExp2,
								flatShading: !!a.flatShading,
								sizeAttenuation: a.sizeAttenuation,
								logarithmicDepthBuffer: h,
								skinning: !0 === y.isSkinnedMesh && A > 0,
								maxBones: A,
								useVertexTexture: d,
								morphTargets: !!y.geometry && !!y.geometry.morphAttributes.position,
								morphNormals: !!y.geometry && !!y.geometry.morphAttributes.normal,
								morphTargetsCount: y.geometry && y.geometry.morphAttributes.position ? y.geometry.morphAttributes.position.length : 0,
								numDirLights: s.directional.length,
								numPointLights: s.point.length,
								numSpotLights: s.spot.length,
								numRectAreaLights: s.rectArea.length,
								numHemiLights: s.hemi.length,
								numDirLightShadows: s.directionalShadowMap.length,
								numPointLightShadows: s.pointShadowMap.length,
								numSpotLightShadows: s.spotShadowMap.length,
								numClippingPlanes: o.numPlanes,
								numClipIntersection: o.numIntersection,
								dithering: a.dithering,
								shadowMapEnabled: e.shadowMap.enabled && u.length > 0,
								shadowMapType: e.shadowMap.type,
								toneMapping: a.toneMapped ? e.toneMapping : 0,
								physicallyCorrectLights: e.physicallyCorrectLights,
								premultipliedAlpha: a.premultipliedAlpha,
								doubleSided: 2 === a.side,
								flipSided: 1 === a.side,
								depthPacking: void 0 !== a.depthPacking && a.depthPacking,
								index0AttributeName: a.index0AttributeName,
								extensionDerivatives: a.extensions && a.extensions.derivatives,
								extensionFragDepth: a.extensions && a.extensions.fragDepth,
								extensionDrawBuffers: a.extensions && a.extensions.drawBuffers,
								extensionShaderTextureLOD: a.extensions && a.extensions.shaderTextureLOD,
								rendererExtensionFragDepth: c || i.has("EXT_frag_depth"),
								rendererExtensionDrawBuffers: c || i.has("WEBGL_draw_buffers"),
								rendererExtensionShaderTextureLod: c || i.has("EXT_shader_texture_lod"),
								customProgramCacheKey: a.customProgramCacheKey()
							}
						},
						getProgramCacheKey: function(t) {
							var n = [];
							if (t.shaderID ? n.push(t.shaderID) : (n.push(t.customVertexShaderID), n.push(t.customFragmentShaderID)), void 0 !== t.defines)
								for (var i in t.defines) n.push(i), n.push(t.defines[i]);
							return !1 === t.isRawShaderMaterial && (n.push(t.precision), n.push(t.outputEncoding), n.push(t.envMapMode), n.push(t.combine), n.push(t.vertexUvs), n.push(t.fogExp2), n.push(t.sizeAttenuation), n.push(t.maxBones), n.push(t.morphTargetsCount), n.push(t.numDirLights), n.push(t.numPointLights), n.push(t.numSpotLights), n.push(t.numHemiLights), n.push(t.numRectAreaLights), n.push(t.numDirLightShadows), n.push(t.numPointLightShadows), n.push(t.numSpotLightShadows), n.push(t.shadowMapType), n.push(t.toneMapping), n.push(t.numClippingPlanes), n.push(t.numClipIntersection), n.push(t.alphaWrite), s.disableAll(), t.isWebGL2 && s.enable(0), t.supportsVertexTextures && s.enable(1), t.instancing && s.enable(2), t.instancingColor && s.enable(3), t.map && s.enable(4), t.matcap && s.enable(5), t.envMap && s.enable(6), t.envMapCubeUV && s.enable(7), t.lightMap && s.enable(8), t.aoMap && s.enable(9), t.emissiveMap && s.enable(10), t.bumpMap && s.enable(11), t.normalMap && s.enable(12), t.objectSpaceNormalMap && s.enable(13), t.tangentSpaceNormalMap && s.enable(14), t.clearcoat && s.enable(15), t.clearcoatMap && s.enable(16), t.clearcoatRoughnessMap && s.enable(17), t.clearcoatNormalMap && s.enable(18), t.displacementMap && s.enable(19), t.specularMap && s.enable(20), t.roughnessMap && s.enable(21), t.metalnessMap && s.enable(22), t.gradientMap && s.enable(23), t.alphaMap && s.enable(24), t.alphaTest && s.enable(25), t.vertexColors && s.enable(26), t.vertexAlphas && s.enable(27), t.vertexUvs && s.enable(28), t.vertexTangents && s.enable(29), t.uvsVertexOnly && s.enable(30), t.fog && s.enable(31), n.push(s.mask), s.disableAll(), t.useFog && s.enable(0), t.flatShading && s.enable(1), t.logarithmicDepthBuffer && s.enable(2), t.skinning && s.enable(3), t.useVertexTexture && s.enable(4), t.morphTargets && s.enable(5), t.morphNormals && s.enable(6), t.premultipliedAlpha && s.enable(7), t.shadowMapEnabled && s.enable(8), t.physicallyCorrectLights && s.enable(9), t.doubleSided && s.enable(10), t.flipSided && s.enable(11), t.depthPacking && s.enable(12), t.dithering && s.enable(13), t.specularIntensityMap && s.enable(14), t.specularColorMap && s.enable(15), t.transmission && s.enable(16), t.transmissionMap && s.enable(17), t.thicknessMap && s.enable(18), t.sheen && s.enable(19), t.sheenColorMap && s.enable(20), t.sheenRoughnessMap && s.enable(21), t.decodeVideoTexture && s.enable(22), n.push(s.mask), n.push(e.outputEncoding)), n.push(t.customProgramCacheKey), n.join()
						},
						getUniforms: function(e) {
							var t, n = v[e.type];
							if (n) {
								var i = ns[n];
								t = tQ.clone(i.uniforms)
							} else t = e.uniforms;
							return t
						},
						acquireProgram: function(t, n) {
							for (var i, r = 0, o = u.length; r < o; r++) {
								var s = u[r];
								if (s.cacheKey === n) {
									i = s, ++i.usedTimes;
									break
								}
							}
							return void 0 === i && (i = new i3(e, n, t, a), u.push(i)), i
						},
						releaseProgram: function(e) {
							if (0 == --e.usedTimes) {
								var t = u.indexOf(e);
								u[t] = u[u.length - 1], u.pop(), e.destroy()
							}
						},
						releaseShaderCache: function(e) {
							l.remove(e)
						},
						programs: u,
						dispose: function() {
							l.dispose()
						}
					}
				}

				function i8() {
					var e = new WeakMap;
					return {
						get: function(t) {
							var n = e.get(t);
							return void 0 === n && (n = {}, e.set(t, n)), n
						},
						remove: function(t) {
							e.delete(t)
						},
						update: function(t, n, i) {
							e.get(t)[n] = i
						},
						dispose: function() {
							e = new WeakMap
						}
					}
				}

				function i7(e, t) {
					return e.groupOrder !== t.groupOrder ? e.groupOrder - t.groupOrder : e.renderOrder !== t.renderOrder ? e.renderOrder - t.renderOrder : e.material.id !== t.material.id ? e.material.id - t.material.id : e.z !== t.z ? e.z - t.z : e.id - t.id
				}

				function i9(e, t) {
					return e.groupOrder !== t.groupOrder ? e.groupOrder - t.groupOrder : e.renderOrder !== t.renderOrder ? e.renderOrder - t.renderOrder : e.z !== t.z ? t.z - e.z : e.id - t.id
				}

				function re() {
					var e = [],
						t = 0,
						n = [],
						i = [],
						r = [];

					function a(n, i, r, a, o, s) {
						var l = e[t];
						return void 0 === l ? (l = {
							id: n.id,
							object: n,
							geometry: i,
							material: r,
							groupOrder: a,
							renderOrder: n.renderOrder,
							z: o,
							group: s
						}, e[t] = l) : (l.id = n.id, l.object = n, l.geometry = i, l.material = r, l.groupOrder = a, l.renderOrder = n.renderOrder, l.z = o, l.group = s), t++, l
					}
					return {
						opaque: n,
						transmissive: i,
						transparent: r,
						init: function() {
							t = 0, n.length = 0, i.length = 0, r.length = 0
						},
						push: function(e, t, o, s, l, u) {
							var c = a(e, t, o, s, l, u);
							o.transmission > 0 ? i.push(c) : !0 === o.transparent ? r.push(c) : n.push(c)
						},
						unshift: function(e, t, o, s, l, u) {
							var c = a(e, t, o, s, l, u);
							o.transmission > 0 ? i.unshift(c) : !0 === o.transparent ? r.unshift(c) : n.unshift(c)
						},
						finish: function() {
							for (var n = t, i = e.length; n < i; n++) {
								var r = e[n];
								if (null === r.id) break;
								r.id = null, r.object = null, r.geometry = null, r.material = null, r.group = null
							}
						},
						sort: function(e, t) {
							n.length > 1 && n.sort(e || i7), i.length > 1 && i.sort(t || i9), r.length > 1 && r.sort(t || i9)
						}
					}
				}

				function rt() {
					var e = new WeakMap;
					return {
						get: function(t, n) {
							var i;
							return !1 === e.has(t) ? (i = new re, e.set(t, [i])) : n >= e.get(t).length ? (i = new re, e.get(t).push(i)) : i = e.get(t)[n], i
						},
						dispose: function() {
							e = new WeakMap
						}
					}
				}

				function rn() {
					var e = {};
					return {
						get: function(t) {
							var n;
							if (void 0 !== e[t.id]) return e[t.id];
							switch (t.type) {
								case "DirectionalLight":
									n = {
										direction: new eu,
										color: new ee
									};
									break;
								case "SpotLight":
									n = {
										position: new eu,
										direction: new eu,
										color: new ee,
										distance: 0,
										coneCos: 0,
										penumbraCos: 0,
										decay: 0
									};
									break;
								case "PointLight":
									n = {
										position: new eu,
										color: new ee,
										distance: 0,
										decay: 0
									};
									break;
								case "HemisphereLight":
									n = {
										direction: new eu,
										skyColor: new ee,
										groundColor: new ee
									};
									break;
								case "RectAreaLight":
									n = {
										color: new ee,
										position: new eu,
										halfWidth: new eu,
										halfHeight: new eu
									}
							}
							return e[t.id] = n, n
						}
					}
				}
				var ri = 0;

				function rr(e, t) {
					return +!!t.castShadow - +!!e.castShadow
				}

				function ra(e, t) {
					for (var n, i = new rn, r = (n = {}, {
							get: function(e) {
								var t;
								if (void 0 !== n[e.id]) return n[e.id];
								switch (e.type) {
									case "DirectionalLight":
									case "SpotLight":
										t = {
											shadowBias: 0,
											shadowNormalBias: 0,
											shadowRadius: 1,
											shadowMapSize: new W
										};
										break;
									case "PointLight":
										t = {
											shadowBias: 0,
											shadowNormalBias: 0,
											shadowRadius: 1,
											shadowMapSize: new W,
											shadowCameraNear: 1,
											shadowCameraFar: 1e3
										}
								}
								return n[e.id] = t, t
							}
						}), a = {
							version: 0,
							hash: {
								directionalLength: -1,
								pointLength: -1,
								spotLength: -1,
								rectAreaLength: -1,
								hemiLength: -1,
								numDirectionalShadows: -1,
								numPointShadows: -1,
								numSpotShadows: -1
							},
							ambient: [0, 0, 0],
							probe: [],
							directional: [],
							directionalShadow: [],
							directionalShadowMap: [],
							directionalShadowMatrix: [],
							spot: [],
							spotShadow: [],
							spotShadowMap: [],
							spotShadowMatrix: [],
							rectArea: [],
							rectAreaLTC1: null,
							rectAreaLTC2: null,
							point: [],
							pointShadow: [],
							pointShadowMap: [],
							pointShadowMatrix: [],
							hemi: []
						}, o = 0; o < 9; o++) a.probe.push(new eu);
					var s = new eu,
						l = new eB,
						u = new eB;
					return {
						setup: function(n, o) {
							for (var s = 0, l = 0, u = 0, c = 0; c < 9; c++) a.probe[c].set(0, 0, 0);
							var h = 0,
								d = 0,
								f = 0,
								p = 0,
								m = 0,
								v = 0,
								g = 0,
								y = 0;
							n.sort(rr);
							for (var x = !0 !== o ? Math.PI : 1, _ = 0, b = n.length; _ < b; _++) {
								var w = n[_],
									M = w.color,
									S = w.intensity,
									T = w.distance,
									E = w.shadow && w.shadow.map ? w.shadow.map.texture : null;
								if (w.isAmbientLight) s += M.r * S * x, l += M.g * S * x, u += M.b * S * x;
								else if (w.isLightProbe)
									for (var A = 0; A < 9; A++) a.probe[A].addScaledVector(w.sh.coefficients[A], S);
								else if (w.isDirectionalLight) {
									var k = i.get(w);
									if (k.color.copy(w.color).multiplyScalar(w.intensity * x), w.castShadow) {
										var R = w.shadow,
											L = r.get(w);
										L.shadowBias = R.bias, L.shadowNormalBias = R.normalBias, L.shadowRadius = R.radius, L.shadowMapSize = R.mapSize, a.directionalShadow[h] = L, a.directionalShadowMap[h] = E, a.directionalShadowMatrix[h] = w.shadow.matrix, v++
									}
									a.directional[h] = k, h++
								} else if (w.isSpotLight) {
									var C = i.get(w);
									if (C.position.setFromMatrixPosition(w.matrixWorld), C.color.copy(M).multiplyScalar(S * x), C.distance = T, C.coneCos = Math.cos(w.angle), C.penumbraCos = Math.cos(w.angle * (1 - w.penumbra)), C.decay = w.decay, w.castShadow) {
										var P = w.shadow,
											D = r.get(w);
										D.shadowBias = P.bias, D.shadowNormalBias = P.normalBias, D.shadowRadius = P.radius, D.shadowMapSize = P.mapSize, a.spotShadow[f] = D, a.spotShadowMap[f] = E, a.spotShadowMatrix[f] = w.shadow.matrix, y++
									}
									a.spot[f] = C, f++
								} else if (w.isRectAreaLight) {
									var I = i.get(w);
									I.color.copy(M).multiplyScalar(S), I.halfWidth.set(.5 * w.width, 0, 0), I.halfHeight.set(0, .5 * w.height, 0), a.rectArea[p] = I, p++
								} else if (w.isPointLight) {
									var N = i.get(w);
									if (N.color.copy(w.color).multiplyScalar(w.intensity * x), N.distance = w.distance, N.decay = w.decay, w.castShadow) {
										var O = w.shadow,
											z = r.get(w);
										z.shadowBias = O.bias, z.shadowNormalBias = O.normalBias, z.shadowRadius = O.radius, z.shadowMapSize = O.mapSize, z.shadowCameraNear = O.camera.near, z.shadowCameraFar = O.camera.far, a.pointShadow[d] = z, a.pointShadowMap[d] = E, a.pointShadowMatrix[d] = w.shadow.matrix, g++
									}
									a.point[d] = N, d++
								} else if (w.isHemisphereLight) {
									var U = i.get(w);
									U.skyColor.copy(w.color).multiplyScalar(S * x), U.groundColor.copy(w.groundColor).multiplyScalar(S * x), a.hemi[m] = U, m++
								}
							}
							p > 0 && (t.isWebGL2 || !0 === e.has("OES_texture_float_linear") ? (a.rectAreaLTC1 = no.LTC_FLOAT_1, a.rectAreaLTC2 = no.LTC_FLOAT_2) : !0 === e.has("OES_texture_half_float_linear") ? (a.rectAreaLTC1 = no.LTC_HALF_1, a.rectAreaLTC2 = no.LTC_HALF_2) : console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")), a.ambient[0] = s, a.ambient[1] = l, a.ambient[2] = u;
							var F = a.hash;
							F.directionalLength === h && F.pointLength === d && F.spotLength === f && F.rectAreaLength === p && F.hemiLength === m && F.numDirectionalShadows === v && F.numPointShadows === g && F.numSpotShadows === y || (a.directional.length = h, a.spot.length = f, a.rectArea.length = p, a.point.length = d, a.hemi.length = m, a.directionalShadow.length = v, a.directionalShadowMap.length = v, a.pointShadow.length = g, a.pointShadowMap.length = g, a.spotShadow.length = y, a.spotShadowMap.length = y, a.directionalShadowMatrix.length = v, a.pointShadowMatrix.length = g, a.spotShadowMatrix.length = y, F.directionalLength = h, F.pointLength = d, F.spotLength = f, F.rectAreaLength = p, F.hemiLength = m, F.numDirectionalShadows = v, F.numPointShadows = g, F.numSpotShadows = y, a.version = ri++)
						},
						setupView: function(e, t) {
							for (var n = 0, i = 0, r = 0, o = 0, c = 0, h = t.matrixWorldInverse, d = 0, f = e.length; d < f; d++) {
								var p = e[d];
								if (p.isDirectionalLight) {
									var m = a.directional[n];
									m.direction.setFromMatrixPosition(p.matrixWorld), s.setFromMatrixPosition(p.target.matrixWorld), m.direction.sub(s), m.direction.transformDirection(h), n++
								} else if (p.isSpotLight) {
									var v = a.spot[r];
									v.position.setFromMatrixPosition(p.matrixWorld), v.position.applyMatrix4(h), v.direction.setFromMatrixPosition(p.matrixWorld), s.setFromMatrixPosition(p.target.matrixWorld), v.direction.sub(s), v.direction.transformDirection(h), r++
								} else if (p.isRectAreaLight) {
									var g = a.rectArea[o];
									g.position.setFromMatrixPosition(p.matrixWorld), g.position.applyMatrix4(h), u.identity(), l.copy(p.matrixWorld), l.premultiply(h), u.extractRotation(l), g.halfWidth.set(.5 * p.width, 0, 0), g.halfHeight.set(0, .5 * p.height, 0), g.halfWidth.applyMatrix4(u), g.halfHeight.applyMatrix4(u), o++
								} else if (p.isPointLight) {
									var y = a.point[i];
									y.position.setFromMatrixPosition(p.matrixWorld), y.position.applyMatrix4(h), i++
								} else if (p.isHemisphereLight) {
									var x = a.hemi[c];
									x.direction.setFromMatrixPosition(p.matrixWorld), x.direction.transformDirection(h), x.direction.normalize(), c++
								}
							}
						},
						state: a
					}
				}

				function ro(e, t) {
					var n = new ra(e, t),
						i = [],
						r = [];
					return {
						init: function() {
							i.length = 0, r.length = 0
						},
						state: {
							lightsArray: i,
							shadowsArray: r,
							lights: n
						},
						setupLights: function(e) {
							n.setup(i, e)
						},
						setupLightsView: function(e) {
							n.setupView(i, e)
						},
						pushLight: function(e) {
							i.push(e)
						},
						pushShadow: function(e) {
							r.push(e)
						}
					}
				}

				function rs(e, t) {
					var n = new WeakMap;
					return {
						get: function(i) {
							var r, a = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
							return !1 === n.has(i) ? (r = new ro(e, t), n.set(i, [r])) : a >= n.get(i).length ? (r = new ro(e, t), n.get(i).push(r)) : r = n.get(i)[a], r
						},
						dispose: function() {
							n = new WeakMap
						}
					}
				}
				var rl = function(e) {
					function t(e) {
						var n;
						return d(this, t), (n = h(this, t)).type = "MeshDepthMaterial", n.depthPacking = 3200, n.map = null, n.alphaMap = null, n.displacementMap = null, n.displacementScale = 1, n.displacementBias = 0, n.wireframe = !1, n.wireframeLinewidth = 1, n.fog = !1, n.setValues(e), n
					}
					return y(t, e), p(t, [{
						key: "copy",
						value: function(e) {
							return v(g(t.prototype), "copy", this).call(this, e), this.depthPacking = e.depthPacking, this.map = e.map, this.alphaMap = e.alphaMap, this.displacementMap = e.displacementMap, this.displacementScale = e.displacementScale, this.displacementBias = e.displacementBias, this.wireframe = e.wireframe, this.wireframeLinewidth = e.wireframeLinewidth, this
						}
					}]), t
				}(tp);
				rl.prototype.isMeshDepthMaterial = !0;
				var ru = function(e) {
					function t(e) {
						var n;
						return d(this, t), (n = h(this, t)).type = "MeshDistanceMaterial", n.referencePosition = new eu, n.nearDistance = 1, n.farDistance = 1e3, n.map = null, n.alphaMap = null, n.displacementMap = null, n.displacementScale = 1, n.displacementBias = 0, n.fog = !1, n.setValues(e), n
					}
					return y(t, e), p(t, [{
						key: "copy",
						value: function(e) {
							return v(g(t.prototype), "copy", this).call(this, e), this.referencePosition.copy(e.referencePosition), this.nearDistance = e.nearDistance, this.farDistance = e.farDistance, this.map = e.map, this.alphaMap = e.alphaMap, this.displacementMap = e.displacementMap, this.displacementScale = e.displacementScale, this.displacementBias = e.displacementBias, this
						}
					}]), t
				}(tp);

				function rc(e, t, n) {
					var i = new nt,
						r = new W,
						a = new W,
						o = new ea,
						s = new rl({
							depthPacking: 3201
						}),
						l = new ru,
						u = {},
						c = n.maxTextureSize,
						h = {
							0: 1,
							1: 0,
							2: 2
						},
						d = new t$({
							defines: {
								VSM_SAMPLES: 8
							},
							uniforms: {
								shadow_pass: {
									value: null
								},
								resolution: {
									value: new W
								},
								radius: {
									value: 4
								}
							},
							vertexShader: "void main() {\n	gl_Position = vec4( position, 1.0 );\n}",
							fragmentShader: "uniform sampler2D shadow_pass;\nuniform vec2 resolution;\nuniform float radius;\n#include <packing>\nvoid main() {\n	const float samples = float( VSM_SAMPLES );\n	float mean = 0.0;\n	float squared_mean = 0.0;\n	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );\n	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;\n	for ( float i = 0.0; i < samples; i ++ ) {\n		float uvOffset = uvStart + i * uvStride;\n		#ifdef HORIZONTAL_PASS\n			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );\n			mean += distribution.x;\n			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;\n		#else\n			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );\n			mean += depth;\n			squared_mean += depth * depth;\n		#endif\n	}\n	mean = mean / samples;\n	squared_mean = squared_mean / samples;\n	float std_dev = sqrt( squared_mean - mean * mean );\n	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );\n}"
						}),
						f = d.clone();
					f.defines.HORIZONTAL_PASS = 1;
					var p = new tR;
					p.setAttribute("position", new ty(new Float32Array([-1, -1, .5, 3, -1, .5, -1, 3, .5]), 3));
					var m = new tX(p, d),
						v = this;

					function g(t, n, i, r, a, o, c) {
						var d = null,
							f = !0 === r.isPointLight ? t.customDistanceMaterial : t.customDepthMaterial;
						if (d = void 0 !== f ? f : !0 === r.isPointLight ? l : s, e.localClippingEnabled && !0 === i.clipShadows && 0 !== i.clippingPlanes.length || i.displacementMap && 0 !== i.displacementScale || i.alphaMap && i.alphaTest > 0) {
							var p = d.uuid,
								m = i.uuid,
								v = u[p];
							void 0 === v && (v = {}, u[p] = v);
							var g = v[m];
							void 0 === g && (g = d.clone(), v[m] = g), d = g
						}
						return d.visible = i.visible, d.wireframe = i.wireframe, d.side = 3 === c ? null !== i.shadowSide ? i.shadowSide : i.side : null !== i.shadowSide ? i.shadowSide : h[i.side], d.alphaMap = i.alphaMap, d.alphaTest = i.alphaTest, d.clipShadows = i.clipShadows, d.clippingPlanes = i.clippingPlanes, d.clipIntersection = i.clipIntersection, d.displacementMap = i.displacementMap, d.displacementScale = i.displacementScale, d.displacementBias = i.displacementBias, d.wireframeLinewidth = i.wireframeLinewidth, d.linewidth = i.linewidth, !0 === r.isPointLight && !0 === d.isMeshDistanceMaterial && (d.referencePosition.setFromMatrixPosition(r.matrixWorld), d.nearDistance = a, d.farDistance = o), d
					}
					this.enabled = !1, this.autoUpdate = !0, this.needsUpdate = !1, this.type = 1, this.render = function(n, s, l) {
						if (!1 !== v.enabled && (!1 !== v.autoUpdate || !1 !== v.needsUpdate) && 0 !== n.length) {
							var u = e.getRenderTarget(),
								h = e.getActiveCubeFace(),
								p = e.getActiveMipmapLevel(),
								y = e.state;
							y.setBlending(0), y.buffers.color.setClear(1, 1, 1, 1), y.buffers.depth.setTest(!0), y.setScissorTest(!1);
							for (var x = 0, _ = n.length; x < _; x++) {
								var b = n[x],
									w = b.shadow;
								if (void 0 === w) {
									console.warn("THREE.WebGLShadowMap:", b, "has no shadow.");
									continue
								}
								if (!1 !== w.autoUpdate || !1 !== w.needsUpdate) {
									r.copy(w.mapSize);
									var M = w.getFrameExtents();
									if (r.multiply(M), a.copy(w.mapSize), (r.x > c || r.y > c) && (r.x > c && (a.x = Math.floor(c / M.x), r.x = a.x * M.x, w.mapSize.x = a.x), r.y > c && (a.y = Math.floor(c / M.y), r.y = a.y * M.y, w.mapSize.y = a.y)), null === w.map && !w.isPointLightShadow && 3 === this.type) {
										var S = {
											minFilter: 1006,
											magFilter: 1006,
											format: 1023
										};
										w.map = new eo(r.x, r.y, S), w.map.texture.name = b.name + ".shadowMap", w.mapPass = new eo(r.x, r.y, S), w.camera.updateProjectionMatrix()
									}
									if (null === w.map) {
										var T = {
											minFilter: 1003,
											magFilter: 1003,
											format: 1023
										};
										w.map = new eo(r.x, r.y, T), w.map.texture.name = b.name + ".shadowMap", w.camera.updateProjectionMatrix()
									}
									e.setRenderTarget(w.map), e.clear();
									for (var E = w.getViewportCount(), A = 0; A < E; A++) {
										var k = w.getViewport(A);
										o.set(a.x * k.x, a.y * k.y, a.x * k.z, a.y * k.w), y.viewport(o), w.updateMatrices(b, A), i = w.getFrustum(),
											function n(r, a, o, s, l) {
												if (!1 !== r.visible) {
													if (r.layers.test(a.layers) && (r.isMesh || r.isLine || r.isPoints) && (r.castShadow || r.receiveShadow && 3 === l) && (!r.frustumCulled || i.intersectsObject(r))) {
														r.modelViewMatrix.multiplyMatrices(o.matrixWorldInverse, r.matrixWorld);
														var u = t.update(r),
															c = r.material;
														if (Array.isArray(c))
															for (var h = u.groups, d = 0, f = h.length; d < f; d++) {
																var p = h[d],
																	m = c[p.materialIndex];
																if (m && m.visible) {
																	var v = g(r, 0, m, s, o.near, o.far, l);
																	e.renderBufferDirect(o, null, u, v, r, p)
																}
															} else if (c.visible) {
																var y = g(r, 0, c, s, o.near, o.far, l);
																e.renderBufferDirect(o, null, u, y, r, null)
															}
													}
													for (var x = r.children, _ = 0, b = x.length; _ < b; _++) n(x[_], a, o, s, l)
												}
											}(s, l, w.camera, b, this.type)
									}
									w.isPointLightShadow || 3 !== this.type || function(n, i) {
										var r = t.update(m);
										d.defines.VSM_SAMPLES !== n.blurSamples && (d.defines.VSM_SAMPLES = n.blurSamples, f.defines.VSM_SAMPLES = n.blurSamples, d.needsUpdate = !0, f.needsUpdate = !0), d.uniforms.shadow_pass.value = n.map.texture, d.uniforms.resolution.value = n.mapSize, d.uniforms.radius.value = n.radius, e.setRenderTarget(n.mapPass), e.clear(), e.renderBufferDirect(i, null, r, d, m, null), f.uniforms.shadow_pass.value = n.mapPass.texture, f.uniforms.resolution.value = n.mapSize, f.uniforms.radius.value = n.radius, e.setRenderTarget(n.map), e.clear(), e.renderBufferDirect(i, null, r, f, m, null)
									}(w, l), w.needsUpdate = !1
								}
							}
							v.needsUpdate = !1, e.setRenderTarget(u, h, p)
						}
					}
				}

				function rh(e, t, n) {
					var i, r, a = n.isWebGL2,
						o = new function() {
							var t = !1,
								n = new ea,
								i = null,
								r = new ea(0, 0, 0, 0);
							return {
								setMask: function(n) {
									i === n || t || (e.colorMask(n, n, n, n), i = n)
								},
								setLocked: function(e) {
									t = e
								},
								setClear: function(t, i, a, o, s) {
									!0 === s && (t *= o, i *= o, a *= o), n.set(t, i, a, o), !1 === r.equals(n) && (e.clearColor(t, i, a, o), r.copy(n))
								},
								reset: function() {
									t = !1, i = null, r.set(-1, 0, 0, 0)
								}
							}
						},
						s = new function() {
							var t = !1,
								n = null,
								i = null,
								r = null;
							return {
								setTest: function(e) {
									e ? H(2929) : V(2929)
								},
								setMask: function(i) {
									n === i || t || (e.depthMask(i), n = i)
								},
								setFunc: function(t) {
									if (i !== t) {
										if (t) switch (t) {
											case 0:
												e.depthFunc(512);
												break;
											case 1:
												e.depthFunc(519);
												break;
											case 2:
												e.depthFunc(513);
												break;
											case 3:
											default:
												e.depthFunc(515);
												break;
											case 4:
												e.depthFunc(514);
												break;
											case 5:
												e.depthFunc(518);
												break;
											case 6:
												e.depthFunc(516);
												break;
											case 7:
												e.depthFunc(517)
										} else e.depthFunc(515);
										i = t
									}
								},
								setLocked: function(e) {
									t = e
								},
								setClear: function(t) {
									r !== t && (e.clearDepth(t), r = t)
								},
								reset: function() {
									t = !1, n = null, i = null, r = null
								}
							}
						},
						l = new function() {
							var t = !1,
								n = null,
								i = null,
								r = null,
								a = null,
								o = null,
								s = null,
								l = null,
								u = null;
							return {
								setTest: function(e) {
									t || (e ? H(2960) : V(2960))
								},
								setMask: function(i) {
									n === i || t || (e.stencilMask(i), n = i)
								},
								setFunc: function(t, n, o) {
									i === t && r === n && a === o || (e.stencilFunc(t, n, o), i = t, r = n, a = o)
								},
								setOp: function(t, n, i) {
									o === t && s === n && l === i || (e.stencilOp(t, n, i), o = t, s = n, l = i)
								},
								setLocked: function(e) {
									t = e
								},
								setClear: function(t) {
									u !== t && (e.clearStencil(t), u = t)
								},
								reset: function() {
									t = !1, n = null, i = null, r = null, a = null, o = null, s = null, l = null, u = null
								}
							}
						},
						u = {},
						c = {},
						h = new WeakMap,
						d = [],
						f = null,
						p = !1,
						v = null,
						g = null,
						y = null,
						x = null,
						_ = null,
						b = null,
						w = null,
						M = !1,
						S = null,
						T = null,
						E = null,
						A = null,
						k = null,
						R = e.getParameter(35661),
						L = !1,
						C = 0,
						P = e.getParameter(7938); - 1 !== P.indexOf("WebGL") ? L = parseFloat(/^WebGL (\d)/.exec(P)[1]) >= 1 : -1 !== P.indexOf("OpenGL ES") && (L = parseFloat(/^OpenGL ES (\d)/.exec(P)[1]) >= 2);
					var D = null,
						I = {},
						N = e.getParameter(3088),
						O = e.getParameter(2978),
						z = (new ea).fromArray(N),
						U = (new ea).fromArray(O);

					function F(t, n, i) {
						var r = new Uint8Array(4),
							a = e.createTexture();
						e.bindTexture(t, a), e.texParameteri(t, 10241, 9728), e.texParameteri(t, 10240, 9728);
						for (var o = 0; o < i; o++) e.texImage2D(n + o, 0, 6408, 1, 1, 0, 6408, 5121, r);
						return a
					}
					var B = {};

					function H(t) {
						!0 !== u[t] && (e.enable(t), u[t] = !0)
					}

					function V(t) {
						!1 !== u[t] && (e.disable(t), u[t] = !1)
					}
					B[3553] = F(3553, 3553, 1), B[34067] = F(34067, 34069, 6), o.setClear(0, 0, 0, 1), s.setClear(1), l.setClear(0), H(2929), s.setFunc(3), X(!1), Y(1), H(2884), q(0);
					var G = (m(i = {}, 100, 32774), m(i, 101, 32778), m(i, 102, 32779), i);
					if (a) G[103] = 32775, G[104] = 32776;
					else {
						var W = t.get("EXT_blend_minmax");
						null !== W && (G[103] = W.MIN_EXT, G[104] = W.MAX_EXT)
					}
					var j = (m(r = {}, 200, 0), m(r, 201, 1), m(r, 202, 768), m(r, 204, 770), m(r, 210, 776), m(r, 208, 774), m(r, 206, 772), m(r, 203, 769), m(r, 205, 771), m(r, 209, 775), m(r, 207, 773), r);

					function q(t, n, i, r, a, o, s, l) {
						if (0 !== t) {
							if (!1 === p && (H(3042), p = !0), 5 === t) a = a || n, o = o || i, s = s || r, n === g && a === _ || (e.blendEquationSeparate(G[n], G[a]), g = n, _ = a), i === y && r === x && o === b && s === w || (e.blendFuncSeparate(j[i], j[r], j[o], j[s]), y = i, x = r, b = o, w = s), v = t, M = null;
							else if (t !== v || l !== M) {
								if (100 === g && 100 === _ || (e.blendEquation(32774), g = 100, _ = 100), l) switch (t) {
									case 1:
										e.blendFuncSeparate(1, 771, 1, 771);
										break;
									case 2:
										e.blendFunc(1, 1);
										break;
									case 3:
										e.blendFuncSeparate(0, 769, 0, 1);
										break;
									case 4:
										e.blendFuncSeparate(0, 768, 0, 770);
										break;
									default:
										console.error("THREE.WebGLState: Invalid blending: ", t)
								} else switch (t) {
									case 1:
										e.blendFuncSeparate(770, 771, 1, 771);
										break;
									case 2:
										e.blendFunc(770, 1);
										break;
									case 3:
										e.blendFuncSeparate(0, 769, 0, 1);
										break;
									case 4:
										e.blendFunc(0, 768);
										break;
									default:
										console.error("THREE.WebGLState: Invalid blending: ", t)
								}
								y = null, x = null, b = null, w = null, v = t, M = l
							}
						} else !0 === p && (V(3042), p = !1)
					}

					function X(t) {
						S !== t && (t ? e.frontFace(2304) : e.frontFace(2305), S = t)
					}

					function Y(t) {
						0 !== t ? (H(2884), t !== T && (1 === t ? e.cullFace(1029) : 2 === t ? e.cullFace(1028) : e.cullFace(1032))) : V(2884), T = t
					}

					function J(t, n, i) {
						t ? (H(32823), A === n && k === i || (e.polygonOffset(n, i), A = n, k = i)) : V(32823)
					}

					function Z(t) {
						void 0 === t && (t = 33984 + R - 1), D !== t && (e.activeTexture(t), D = t)
					}
					return {
						buffers: {
							color: o,
							depth: s,
							stencil: l
						},
						enable: H,
						disable: V,
						bindFramebuffer: function(t, n) {
							return c[t] !== n && (e.bindFramebuffer(t, n), c[t] = n, a && (36009 === t && (c[36160] = n), 36160 === t && (c[36009] = n)), !0)
						},
						drawBuffers: function(i, r) {
							var a = d,
								o = !1;
							if (i) {
								if (void 0 === (a = h.get(r)) && (a = [], h.set(r, a)), i.isWebGLMultipleRenderTargets) {
									var s = i.texture;
									if (a.length !== s.length || 36064 !== a[0]) {
										for (var l = 0, u = s.length; l < u; l++) a[l] = 36064 + l;
										a.length = s.length, o = !0
									}
								} else 36064 !== a[0] && (a[0] = 36064, o = !0)
							} else 1029 !== a[0] && (a[0] = 1029, o = !0);
							o && (n.isWebGL2 ? e.drawBuffers(a) : t.get("WEBGL_draw_buffers").drawBuffersWEBGL(a))
						},
						useProgram: function(t) {
							return f !== t && (e.useProgram(t), f = t, !0)
						},
						setBlending: q,
						setMaterial: function(e, t) {
							2 === e.side ? V(2884) : H(2884);
							var n = 1 === e.side;
							t && (n = !n), X(n), 1 === e.blending && !1 === e.transparent ? q(0) : q(e.blending, e.blendEquation, e.blendSrc, e.blendDst, e.blendEquationAlpha, e.blendSrcAlpha, e.blendDstAlpha, e.premultipliedAlpha), s.setFunc(e.depthFunc), s.setTest(e.depthTest), s.setMask(e.depthWrite), o.setMask(e.colorWrite);
							var i = e.stencilWrite;
							l.setTest(i), i && (l.setMask(e.stencilWriteMask), l.setFunc(e.stencilFunc, e.stencilRef, e.stencilFuncMask), l.setOp(e.stencilFail, e.stencilZFail, e.stencilZPass)), J(e.polygonOffset, e.polygonOffsetFactor, e.polygonOffsetUnits), !0 === e.alphaToCoverage ? H(32926) : V(32926)
						},
						setFlipSided: X,
						setCullFace: Y,
						setLineWidth: function(t) {
							t !== E && (L && e.lineWidth(t), E = t)
						},
						setPolygonOffset: J,
						setScissorTest: function(e) {
							e ? H(3089) : V(3089)
						},
						activeTexture: Z,
						bindTexture: function(t, n) {
							null === D && Z();
							var i = I[D];
							void 0 === i && (i = {
								type: void 0,
								texture: void 0
							}, I[D] = i), i.type === t && i.texture === n || (e.bindTexture(t, n || B[t]), i.type = t, i.texture = n)
						},
						unbindTexture: function() {
							var t = I[D];
							void 0 !== t && void 0 !== t.type && (e.bindTexture(t.type, null), t.type = void 0, t.texture = void 0)
						},
						compressedTexImage2D: function() {
							try {
								e.compressedTexImage2D.apply(e, arguments)
							} catch (e) {
								console.error("THREE.WebGLState:", e)
							}
						},
						texImage2D: function() {
							try {
								e.texImage2D.apply(e, arguments)
							} catch (e) {
								console.error("THREE.WebGLState:", e)
							}
						},
						texImage3D: function() {
							try {
								e.texImage3D.apply(e, arguments)
							} catch (e) {
								console.error("THREE.WebGLState:", e)
							}
						},
						texStorage2D: function() {
							try {
								e.texStorage2D.apply(e, arguments)
							} catch (e) {
								console.error("THREE.WebGLState:", e)
							}
						},
						texStorage3D: function() {
							try {
								e.texStorage3D.apply(e, arguments)
							} catch (e) {
								console.error("THREE.WebGLState:", e)
							}
						},
						texSubImage2D: function() {
							try {
								e.texSubImage2D.apply(e, arguments)
							} catch (e) {
								console.error("THREE.WebGLState:", e)
							}
						},
						texSubImage3D: function() {
							try {
								e.texSubImage3D.apply(e, arguments)
							} catch (e) {
								console.error("THREE.WebGLState:", e)
							}
						},
						compressedTexSubImage2D: function() {
							try {
								e.compressedTexSubImage2D.apply(e, arguments)
							} catch (e) {
								console.error("THREE.WebGLState:", e)
							}
						},
						scissor: function(t) {
							!1 === z.equals(t) && (e.scissor(t.x, t.y, t.z, t.w), z.copy(t))
						},
						viewport: function(t) {
							!1 === U.equals(t) && (e.viewport(t.x, t.y, t.z, t.w), U.copy(t))
						},
						reset: function() {
							e.disable(3042), e.disable(2884), e.disable(2929), e.disable(32823), e.disable(3089), e.disable(2960), e.disable(32926), e.blendEquation(32774), e.blendFunc(1, 0), e.blendFuncSeparate(1, 0, 1, 0), e.colorMask(!0, !0, !0, !0), e.clearColor(0, 0, 0, 0), e.depthMask(!0), e.depthFunc(513), e.clearDepth(1), e.stencilMask(0xffffffff), e.stencilFunc(519, 0, 0xffffffff), e.stencilOp(7680, 7680, 7680), e.clearStencil(0), e.cullFace(1029), e.frontFace(2305), e.polygonOffset(0, 0), e.activeTexture(33984), e.bindFramebuffer(36160, null), !0 === a && (e.bindFramebuffer(36009, null), e.bindFramebuffer(36008, null)), e.useProgram(null), e.lineWidth(1), e.scissor(0, 0, e.canvas.width, e.canvas.height), e.viewport(0, 0, e.canvas.width, e.canvas.height), u = {}, D = null, I = {}, c = {}, h = new WeakMap, d = [], f = null, p = !1, v = null, g = null, y = null, x = null, _ = null, b = null, w = null, M = !1, S = null, T = null, E = null, A = null, k = null, z.set(0, 0, e.canvas.width, e.canvas.height), U.set(0, 0, e.canvas.width, e.canvas.height), o.reset(), s.reset(), l.reset()
						}
					}
				}

				function rd(e, t, n, i, r, a, o) {
					var s, l, u, c = r.isWebGL2,
						h = r.maxTextures,
						d = r.maxCubemapSize,
						f = r.maxTextureSize,
						p = r.maxSamples,
						v = t.has("WEBGL_multisampled_render_to_texture") ? t.get("WEBGL_multisampled_render_to_texture") : void 0,
						g = new WeakMap,
						y = !1;
					try {
						y = "undefined" != typeof OffscreenCanvas && null !== new OffscreenCanvas(1, 1).getContext("2d")
					} catch (e) {}

					function x(e, t) {
						return y ? new OffscreenCanvas(e, t) : X("canvas")
					}

					function _(e, t, n, i) {
						var r = 1;
						if ((e.width > i || e.height > i) && (r = i / Math.max(e.width, e.height)), r < 1 || !0 === t) {
							if ("undefined" != typeof HTMLImageElement && e instanceof HTMLImageElement || "undefined" != typeof HTMLCanvasElement && e instanceof HTMLCanvasElement || "undefined" != typeof ImageBitmap && e instanceof ImageBitmap) {
								var a = t ? G : Math.floor,
									o = a(r * e.width),
									s = a(r * e.height);
								void 0 === u && (u = x(o, s));
								var l = n ? x(o, s) : u;
								return l.width = o, l.height = s, l.getContext("2d").drawImage(e, 0, 0, o, s), console.warn("THREE.WebGLRenderer: Texture has been resized from (" + e.width + "x" + e.height + ") to (" + o + "x" + s + ")."), l
							}
							return "data" in e && console.warn("THREE.WebGLRenderer: Image in DataTexture is too big (" + e.width + "x" + e.height + ")."), e
						}
						return e
					}

					function b(e) {
						return V(e.width) && V(e.height)
					}

					function w(e, t) {
						return e.generateMipmaps && t && 1003 !== e.minFilter && 1006 !== e.minFilter
					}

					function M(t) {
						e.generateMipmap(t)
					}

					function S(n, i, r, a) {
						var o = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
						if (!1 === c) return i;
						if (null !== n) {
							if (void 0 !== e[n]) return e[n];
							console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '" + n + "'")
						}
						var s = i;
						return 6403 === i && (5126 === r && (s = 33326), 5131 === r && (s = 33325), 5121 === r && (s = 33321)), 33319 === i && (5126 === r && (s = 33328), 5131 === r && (s = 33327), 5121 === r && (s = 33323)), 6408 === i && (5126 === r && (s = 34836), 5131 === r && (s = 34842), 5121 === r && (s = 3001 === a && !1 === o ? 35907 : 32856), 32819 === r && (s = 32854), 32820 === r && (s = 32855)), 33325 !== s && 33326 !== s && 33327 !== s && 33328 !== s && 34842 !== s && 34836 !== s || t.get("EXT_color_buffer_float"), s
					}

					function T(e, t, n) {
						return !0 === w(e, n) || e.isFramebufferTexture && 1003 !== e.minFilter && 1006 !== e.minFilter ? Math.log2(Math.max(t.width, t.height)) + 1 : void 0 !== e.mipmaps && e.mipmaps.length > 0 ? e.mipmaps.length : e.isCompressedTexture && Array.isArray(e.image) ? t.mipmaps.length : 1
					}

					function E(e) {
						return 1003 === e || 1004 === e || 1005 === e ? 9728 : 9729
					}

					function A(t) {
						var n, r = t.target;
						r.removeEventListener("dispose", A), void 0 !== (n = i.get(r)).__webglInit && (e.deleteTexture(n.__webglTexture), i.remove(r)), r.isVideoTexture && g.delete(r), o.memory.textures--
					}

					function k(t) {
						var n = t.target;
						n.removeEventListener("dispose", k),
							function(t) {
								var n = t.texture,
									r = i.get(t),
									a = i.get(n);
								if (t) {
									if (void 0 !== a.__webglTexture && (e.deleteTexture(a.__webglTexture), o.memory.textures--), t.depthTexture && t.depthTexture.dispose(), t.isWebGLCubeRenderTarget)
										for (var s = 0; s < 6; s++) e.deleteFramebuffer(r.__webglFramebuffer[s]), r.__webglDepthbuffer && e.deleteRenderbuffer(r.__webglDepthbuffer[s]);
									else e.deleteFramebuffer(r.__webglFramebuffer), r.__webglDepthbuffer && e.deleteRenderbuffer(r.__webglDepthbuffer), r.__webglMultisampledFramebuffer && e.deleteFramebuffer(r.__webglMultisampledFramebuffer), r.__webglColorRenderbuffer && e.deleteRenderbuffer(r.__webglColorRenderbuffer), r.__webglDepthRenderbuffer && e.deleteRenderbuffer(r.__webglDepthRenderbuffer);
									if (t.isWebGLMultipleRenderTargets)
										for (var l = 0, u = n.length; l < u; l++) {
											var c = i.get(n[l]);
											c.__webglTexture && (e.deleteTexture(c.__webglTexture), o.memory.textures--), i.remove(n[l])
										}
									i.remove(n), i.remove(t)
								}
							}(n)
					}
					var R = 0;

					function L(e, t) {
						var r, a = i.get(e);
						if (e.isVideoTexture && (r = o.render.frame, g.get(e) !== r && (g.set(e, r), e.update())), e.version > 0 && a.__version !== e.version) {
							var s = e.image;
							if (void 0 === s) console.warn("THREE.WebGLRenderer: Texture marked for update but image is undefined");
							else {
								if (!1 !== s.complete) return void O(a, e, t);
								console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete")
							}
						}
						n.activeTexture(33984 + t), n.bindTexture(3553, a.__webglTexture)
					}

					function C(t, r) {
						var o = i.get(t);
						t.version > 0 && o.__version !== t.version ? function(t, i, r) {
							if (6 === i.image.length) {
								N(t, i), n.activeTexture(33984 + r), n.bindTexture(34067, t.__webglTexture), e.pixelStorei(37440, i.flipY), e.pixelStorei(37441, i.premultiplyAlpha), e.pixelStorei(3317, i.unpackAlignment), e.pixelStorei(37443, 0);
								for (var o = i && (i.isCompressedTexture || i.image[0].isCompressedTexture), s = i.image[0] && i.image[0].isDataTexture, l = [], u = 0; u < 6; u++) l[u] = o || s ? s ? i.image[u].image : i.image[u] : _(i.image[u], !1, !0, d), l[u] = H(i, l[u]);
								var h, f = l[0],
									p = b(f) || c,
									m = a.convert(i.format, i.encoding),
									v = a.convert(i.type),
									g = S(i.internalFormat, m, v, i.encoding),
									y = c && !0 !== i.isVideoTexture,
									x = void 0 === t.__version,
									E = T(i, f, p);
								if (I(34067, i, p), o) {
									y && x && n.texStorage2D(34067, E, g, f.width, f.height);
									for (var A = 0; A < 6; A++) {
										h = l[A].mipmaps;
										for (var k = 0; k < h.length; k++) {
											var R = h[k];
											1023 !== i.format ? null !== m ? y ? n.compressedTexSubImage2D(34069 + A, k, 0, 0, R.width, R.height, m, R.data) : n.compressedTexImage2D(34069 + A, k, g, R.width, R.height, 0, R.data) : console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()") : y ? n.texSubImage2D(34069 + A, k, 0, 0, R.width, R.height, m, v, R.data) : n.texImage2D(34069 + A, k, g, R.width, R.height, 0, m, v, R.data)
										}
									}
								} else {
									h = i.mipmaps, y && x && (h.length > 0 && E++, n.texStorage2D(34067, E, g, l[0].width, l[0].height));
									for (var L = 0; L < 6; L++)
										if (s) {
											y ? n.texSubImage2D(34069 + L, 0, 0, 0, l[L].width, l[L].height, m, v, l[L].data) : n.texImage2D(34069 + L, 0, g, l[L].width, l[L].height, 0, m, v, l[L].data);
											for (var C = 0; C < h.length; C++) {
												var P = h[C].image[L].image;
												y ? n.texSubImage2D(34069 + L, C + 1, 0, 0, P.width, P.height, m, v, P.data) : n.texImage2D(34069 + L, C + 1, g, P.width, P.height, 0, m, v, P.data)
											}
										} else {
											y ? n.texSubImage2D(34069 + L, 0, 0, 0, m, v, l[L]) : n.texImage2D(34069 + L, 0, g, m, v, l[L]);
											for (var D = 0; D < h.length; D++) {
												var O = h[D];
												y ? n.texSubImage2D(34069 + L, D + 1, 0, 0, m, v, O.image[L]) : n.texImage2D(34069 + L, D + 1, g, m, v, O.image[L])
											}
										}
								}
								w(i, p) && M(34067), t.__version = i.version, i.onUpdate && i.onUpdate(i)
							}
						}(o, t, r) : (n.activeTexture(33984 + r), n.bindTexture(34067, o.__webglTexture))
					}
					var P = (m(s = {}, 1e3, 10497), m(s, 1001, 33071), m(s, 1002, 33648), s),
						D = (m(l = {}, 1003, 9728), m(l, 1004, 9984), m(l, 1005, 9986), m(l, 1006, 9729), m(l, 1007, 9985), m(l, 1008, 9987), l);

					function I(n, a, o) {
						if (o ? (e.texParameteri(n, 10242, P[a.wrapS]), e.texParameteri(n, 10243, P[a.wrapT]), 32879 !== n && 35866 !== n || e.texParameteri(n, 32882, P[a.wrapR]), e.texParameteri(n, 10240, D[a.magFilter]), e.texParameteri(n, 10241, D[a.minFilter])) : (e.texParameteri(n, 10242, 33071), e.texParameteri(n, 10243, 33071), 32879 !== n && 35866 !== n || e.texParameteri(n, 32882, 33071), 1001 === a.wrapS && 1001 === a.wrapT || console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."), e.texParameteri(n, 10240, E(a.magFilter)), e.texParameteri(n, 10241, E(a.minFilter)), 1003 !== a.minFilter && 1006 !== a.minFilter && console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")), !0 === t.has("EXT_texture_filter_anisotropic")) {
							var s = t.get("EXT_texture_filter_anisotropic");
							(1015 !== a.type || !1 !== t.has("OES_texture_float_linear")) && (!1 !== c || 1016 !== a.type || !1 !== t.has("OES_texture_half_float_linear")) && (a.anisotropy > 1 || i.get(a).__currentAnisotropy) && (e.texParameterf(n, s.TEXTURE_MAX_ANISOTROPY_EXT, Math.min(a.anisotropy, r.getMaxAnisotropy())), i.get(a).__currentAnisotropy = a.anisotropy)
						}
					}

					function N(t, n) {
						void 0 === t.__webglInit && (t.__webglInit = !0, n.addEventListener("dispose", A), t.__webglTexture = e.createTexture(), o.memory.textures++)
					}

					function O(t, i, r) {
						var o = 3553;
						i.isDataTexture2DArray && (o = 35866), i.isDataTexture3D && (o = 32879), N(t, i), n.activeTexture(33984 + r), n.bindTexture(o, t.__webglTexture), e.pixelStorei(37440, i.flipY), e.pixelStorei(37441, i.premultiplyAlpha), e.pixelStorei(3317, i.unpackAlignment), e.pixelStorei(37443, 0);
						var s, l = !c && (1001 !== i.wrapS || 1001 !== i.wrapT || 1003 !== i.minFilter && 1006 !== i.minFilter) && !1 === b(i.image),
							u = _(i.image, l, !1, f),
							h = b(u = H(i, u)) || c,
							d = a.convert(i.format, i.encoding),
							p = a.convert(i.type),
							m = S(i.internalFormat, d, p, i.encoding, i.isVideoTexture);
						I(o, i, h);
						var v = i.mipmaps,
							g = c && !0 !== i.isVideoTexture,
							y = void 0 === t.__version,
							x = T(i, u, h);
						if (i.isDepthTexture) m = 6402, c ? m = 1015 === i.type ? 36012 : 1014 === i.type ? 33190 : 1020 === i.type ? 35056 : 33189 : 1015 === i.type && console.error("WebGLRenderer: Floating point depth texture requires WebGL2."), 1026 === i.format && 6402 === m && 1012 !== i.type && 1014 !== i.type && (console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."), i.type = 1012, p = a.convert(i.type)), 1027 === i.format && 6402 === m && (m = 34041, 1020 !== i.type && (console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."), i.type = 1020, p = a.convert(i.type))), g && y ? n.texStorage2D(3553, 1, m, u.width, u.height) : n.texImage2D(3553, 0, m, u.width, u.height, 0, d, p, null);
						else if (i.isDataTexture) {
							if (v.length > 0 && h) {
								g && y && n.texStorage2D(3553, x, m, v[0].width, v[0].height);
								for (var E = 0, A = v.length; E < A; E++) s = v[E], g ? n.texSubImage2D(3553, 0, 0, 0, s.width, s.height, d, p, s.data) : n.texImage2D(3553, E, m, s.width, s.height, 0, d, p, s.data);
								i.generateMipmaps = !1
							} else g ? (y && n.texStorage2D(3553, x, m, u.width, u.height), n.texSubImage2D(3553, 0, 0, 0, u.width, u.height, d, p, u.data)) : n.texImage2D(3553, 0, m, u.width, u.height, 0, d, p, u.data)
						} else if (i.isCompressedTexture) {
							g && y && n.texStorage2D(3553, x, m, v[0].width, v[0].height);
							for (var k = 0, R = v.length; k < R; k++) s = v[k], 1023 !== i.format ? null !== d ? g ? n.compressedTexSubImage2D(3553, k, 0, 0, s.width, s.height, d, s.data) : n.compressedTexImage2D(3553, k, m, s.width, s.height, 0, s.data) : console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()") : g ? n.texSubImage2D(3553, k, 0, 0, s.width, s.height, d, p, s.data) : n.texImage2D(3553, k, m, s.width, s.height, 0, d, p, s.data)
						} else if (i.isDataTexture2DArray) g ? (y && n.texStorage3D(35866, x, m, u.width, u.height, u.depth), n.texSubImage3D(35866, 0, 0, 0, 0, u.width, u.height, u.depth, d, p, u.data)) : n.texImage3D(35866, 0, m, u.width, u.height, u.depth, 0, d, p, u.data);
						else if (i.isDataTexture3D) g ? (y && n.texStorage3D(32879, x, m, u.width, u.height, u.depth), n.texSubImage3D(32879, 0, 0, 0, 0, u.width, u.height, u.depth, d, p, u.data)) : n.texImage3D(32879, 0, m, u.width, u.height, u.depth, 0, d, p, u.data);
						else if (i.isFramebufferTexture) g && y ? n.texStorage2D(3553, x, m, u.width, u.height) : n.texImage2D(3553, 0, m, u.width, u.height, 0, d, p, null);
						else if (v.length > 0 && h) {
							g && y && n.texStorage2D(3553, x, m, v[0].width, v[0].height);
							for (var L = 0, C = v.length; L < C; L++) s = v[L], g ? n.texSubImage2D(3553, L, 0, 0, d, p, s) : n.texImage2D(3553, L, m, d, p, s);
							i.generateMipmaps = !1
						} else g ? (y && n.texStorage2D(3553, x, m, u.width, u.height), n.texSubImage2D(3553, 0, 0, 0, d, p, u)) : n.texImage2D(3553, 0, m, d, p, u);
						w(i, h) && M(o), t.__version = i.version, i.onUpdate && i.onUpdate(i)
					}

					function z(t, r, o, s, l) {
						var u = a.convert(o.format, o.encoding),
							c = a.convert(o.type),
							h = S(o.internalFormat, u, c, o.encoding);
						i.get(r).__hasExternalTextures || (32879 === l || 35866 === l ? n.texImage3D(l, 0, h, r.width, r.height, r.depth, 0, u, c, null) : n.texImage2D(l, 0, h, r.width, r.height, 0, u, c, null)), n.bindFramebuffer(36160, t), r.useRenderToTexture ? v.framebufferTexture2DMultisampleEXT(36160, s, l, i.get(o).__webglTexture, 0, B(r)) : e.framebufferTexture2D(36160, s, l, i.get(o).__webglTexture, 0), n.bindFramebuffer(36160, null)
					}

					function U(t, n, i) {
						if (e.bindRenderbuffer(36161, t), n.depthBuffer && !n.stencilBuffer) {
							var r = 33189;
							if (i || n.useRenderToTexture) {
								var o = n.depthTexture;
								o && o.isDepthTexture && (1015 === o.type ? r = 36012 : 1014 === o.type && (r = 33190));
								var s = B(n);
								n.useRenderToTexture ? v.renderbufferStorageMultisampleEXT(36161, s, r, n.width, n.height) : e.renderbufferStorageMultisample(36161, s, r, n.width, n.height)
							} else e.renderbufferStorage(36161, r, n.width, n.height);
							e.framebufferRenderbuffer(36160, 36096, 36161, t)
						} else if (n.depthBuffer && n.stencilBuffer) {
							var l = B(n);
							i && n.useRenderbuffer ? e.renderbufferStorageMultisample(36161, l, 35056, n.width, n.height) : n.useRenderToTexture ? v.renderbufferStorageMultisampleEXT(36161, l, 35056, n.width, n.height) : e.renderbufferStorage(36161, 34041, n.width, n.height), e.framebufferRenderbuffer(36160, 33306, 36161, t)
						} else {
							var u = !0 === n.isWebGLMultipleRenderTargets ? n.texture[0] : n.texture,
								c = a.convert(u.format, u.encoding),
								h = a.convert(u.type),
								d = S(u.internalFormat, c, h, u.encoding),
								f = B(n);
							i && n.useRenderbuffer ? e.renderbufferStorageMultisample(36161, f, d, n.width, n.height) : n.useRenderToTexture ? v.renderbufferStorageMultisampleEXT(36161, f, d, n.width, n.height) : e.renderbufferStorage(36161, d, n.width, n.height)
						}
						e.bindRenderbuffer(36161, null)
					}

					function F(t) {
						var r = i.get(t),
							a = !0 === t.isWebGLCubeRenderTarget;
						if (t.depthTexture && !r.__autoAllocateDepthBuffer) {
							if (a) throw Error("target.depthTexture not supported in Cube render targets");
							! function(t, r) {
								if (r && r.isWebGLCubeRenderTarget) throw Error("Depth Texture with cube render targets is not supported");
								if (n.bindFramebuffer(36160, t), !r.depthTexture || !r.depthTexture.isDepthTexture) throw Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");
								i.get(r.depthTexture).__webglTexture && r.depthTexture.image.width === r.width && r.depthTexture.image.height === r.height || (r.depthTexture.image.width = r.width, r.depthTexture.image.height = r.height, r.depthTexture.needsUpdate = !0), L(r.depthTexture, 0);
								var a = i.get(r.depthTexture).__webglTexture,
									o = B(r);
								if (1026 === r.depthTexture.format) r.useRenderToTexture ? v.framebufferTexture2DMultisampleEXT(36160, 36096, 3553, a, 0, o) : e.framebufferTexture2D(36160, 36096, 3553, a, 0);
								else {
									if (1027 !== r.depthTexture.format) throw Error("Unknown depthTexture format");
									r.useRenderToTexture ? v.framebufferTexture2DMultisampleEXT(36160, 33306, 3553, a, 0, o) : e.framebufferTexture2D(36160, 33306, 3553, a, 0)
								}
							}(r.__webglFramebuffer, t)
						} else if (a) {
							r.__webglDepthbuffer = [];
							for (var o = 0; o < 6; o++) n.bindFramebuffer(36160, r.__webglFramebuffer[o]), r.__webglDepthbuffer[o] = e.createRenderbuffer(), U(r.__webglDepthbuffer[o], t, !1)
						} else n.bindFramebuffer(36160, r.__webglFramebuffer), r.__webglDepthbuffer = e.createRenderbuffer(), U(r.__webglDepthbuffer, t, !1);
						n.bindFramebuffer(36160, null)
					}

					function B(e) {
						return c && (e.useRenderbuffer || e.useRenderToTexture) ? Math.min(p, e.samples) : 0
					}

					function H(e, n) {
						var i = e.encoding,
							r = e.format,
							a = e.type;
						return !0 === e.isCompressedTexture || !0 === e.isVideoTexture || 1035 === e.format || 3e3 !== i && (3001 === i ? !1 === c ? !0 === t.has("EXT_sRGB") && 1023 === r ? (e.format = 1035, e.minFilter = 1006, e.generateMipmaps = !1) : n = et.sRGBToLinear(n) : 1023 === r && 1009 === a || console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType.") : console.error("THREE.WebGLTextures: Unsupported texture encoding:", i)), n
					}
					var W = !1,
						j = !1;
					this.allocateTextureUnit = function() {
						var e = R;
						return e >= h && console.warn("THREE.WebGLTextures: Trying to use " + e + " texture units while this GPU supports only " + h), R += 1, e
					}, this.resetTextureUnits = function() {
						R = 0
					}, this.setTexture2D = L, this.setTexture2DArray = function(e, t) {
						var r = i.get(e);
						e.version > 0 && r.__version !== e.version ? O(r, e, t) : (n.activeTexture(33984 + t), n.bindTexture(35866, r.__webglTexture))
					}, this.setTexture3D = function(e, t) {
						var r = i.get(e);
						e.version > 0 && r.__version !== e.version ? O(r, e, t) : (n.activeTexture(33984 + t), n.bindTexture(32879, r.__webglTexture))
					}, this.setTextureCube = C, this.rebindTextures = function(e, t, n) {
						var r = i.get(e);
						void 0 !== t && z(r.__webglFramebuffer, e, e.texture, 36064, 3553), void 0 !== n && F(e)
					}, this.setupRenderTarget = function(t) {
						var s = t.texture,
							l = i.get(t),
							u = i.get(s);
						t.addEventListener("dispose", k), !0 !== t.isWebGLMultipleRenderTargets && (void 0 === u.__webglTexture && (u.__webglTexture = e.createTexture()), u.__version = s.version, o.memory.textures++);
						var h = !0 === t.isWebGLCubeRenderTarget,
							d = !0 === t.isWebGLMultipleRenderTargets,
							f = s.isDataTexture3D || s.isDataTexture2DArray,
							p = b(t) || c;
						if (h) {
							l.__webglFramebuffer = [];
							for (var m = 0; m < 6; m++) l.__webglFramebuffer[m] = e.createFramebuffer()
						} else if (l.__webglFramebuffer = e.createFramebuffer(), d) {
							if (r.drawBuffers)
								for (var v = t.texture, g = 0, y = v.length; g < y; g++) {
									var x = i.get(v[g]);
									void 0 === x.__webglTexture && (x.__webglTexture = e.createTexture(), o.memory.textures++)
								} else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.")
						} else if (t.useRenderbuffer) {
							if (c) {
								l.__webglMultisampledFramebuffer = e.createFramebuffer(), l.__webglColorRenderbuffer = e.createRenderbuffer(), e.bindRenderbuffer(36161, l.__webglColorRenderbuffer);
								var _ = a.convert(s.format, s.encoding),
									T = a.convert(s.type),
									E = S(s.internalFormat, _, T, s.encoding),
									A = B(t);
								e.renderbufferStorageMultisample(36161, A, E, t.width, t.height), n.bindFramebuffer(36160, l.__webglMultisampledFramebuffer), e.framebufferRenderbuffer(36160, 36064, 36161, l.__webglColorRenderbuffer), e.bindRenderbuffer(36161, null), t.depthBuffer && (l.__webglDepthRenderbuffer = e.createRenderbuffer(), U(l.__webglDepthRenderbuffer, t, !0)), n.bindFramebuffer(36160, null)
							} else console.warn("THREE.WebGLRenderer: WebGLMultisampleRenderTarget can only be used with WebGL2.")
						}
						if (h) {
							n.bindTexture(34067, u.__webglTexture), I(34067, s, p);
							for (var R = 0; R < 6; R++) z(l.__webglFramebuffer[R], t, s, 36064, 34069 + R);
							w(s, p) && M(34067), n.unbindTexture()
						} else if (d) {
							for (var L = t.texture, C = 0, P = L.length; C < P; C++) {
								var D = L[C],
									N = i.get(D);
								n.bindTexture(3553, N.__webglTexture), I(3553, D, p), z(l.__webglFramebuffer, t, D, 36064 + C, 3553), w(D, p) && M(3553)
							}
							n.unbindTexture()
						} else {
							var O = 3553;
							f && (c ? O = s.isDataTexture3D ? 32879 : 35866 : console.warn("THREE.DataTexture3D and THREE.DataTexture2DArray only supported with WebGL2.")), n.bindTexture(O, u.__webglTexture), I(O, s, p), z(l.__webglFramebuffer, t, s, 36064, O), w(s, p) && M(O), n.unbindTexture()
						}
						t.depthBuffer && F(t)
					}, this.updateRenderTargetMipmap = function(e) {
						for (var t = b(e) || c, r = !0 === e.isWebGLMultipleRenderTargets ? e.texture : [e.texture], a = 0, o = r.length; a < o; a++) {
							var s = r[a];
							if (w(s, t)) {
								var l = e.isWebGLCubeRenderTarget ? 34067 : 3553,
									u = i.get(s).__webglTexture;
								n.bindTexture(l, u), M(l), n.unbindTexture()
							}
						}
					}, this.updateMultisampleRenderTarget = function(t) {
						if (t.useRenderbuffer) {
							if (c) {
								var r = t.width,
									a = t.height,
									o = 16384,
									s = [36064],
									l = t.stencilBuffer ? 33306 : 36096;
								t.depthBuffer && s.push(l), t.ignoreDepthForMultisampleCopy || (t.depthBuffer && (o |= 256), t.stencilBuffer && (o |= 1024));
								var u = i.get(t);
								n.bindFramebuffer(36008, u.__webglMultisampledFramebuffer), n.bindFramebuffer(36009, u.__webglFramebuffer), t.ignoreDepthForMultisampleCopy && (e.invalidateFramebuffer(36008, [l]), e.invalidateFramebuffer(36009, [l])), e.blitFramebuffer(0, 0, r, a, 0, 0, r, a, o, 9728), e.invalidateFramebuffer(36008, s), n.bindFramebuffer(36008, null), n.bindFramebuffer(36009, u.__webglMultisampledFramebuffer)
							} else console.warn("THREE.WebGLRenderer: WebGLMultisampleRenderTarget can only be used with WebGL2.")
						}
					}, this.setupDepthRenderbuffer = F, this.setupFrameBufferTexture = z, this.safeSetTexture2D = function(e, t) {
						e && e.isWebGLRenderTarget && (!1 === W && (console.warn("THREE.WebGLTextures.safeSetTexture2D: don't use render targets as textures. Use their .texture property instead."), W = !0), e = e.texture), L(e, t)
					}, this.safeSetTextureCube = function(e, t) {
						e && e.isWebGLCubeRenderTarget && (!1 === j && (console.warn("THREE.WebGLTextures.safeSetTextureCube: don't use cube render targets as textures. Use their .texture property instead."), j = !0), e = e.texture), C(e, t)
					}
				}

				function rf(e, t, n) {
					var i = n.isWebGL2;
					return {
						convert: function(e) {
							var n, r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
							if (1009 === e) return 5121;
							if (1017 === e) return 32819;
							if (1018 === e) return 32820;
							if (1010 === e) return 5120;
							if (1011 === e) return 5122;
							if (1012 === e) return 5123;
							if (1013 === e) return 5124;
							if (1014 === e) return 5125;
							if (1015 === e) return 5126;
							if (1016 === e) return i ? 5131 : null !== (n = t.get("OES_texture_half_float")) ? n.HALF_FLOAT_OES : null;
							if (1021 === e) return 6406;
							if (1023 === e) return 6408;
							if (1024 === e) return 6409;
							if (1025 === e) return 6410;
							if (1026 === e) return 6402;
							if (1027 === e) return 34041;
							if (1028 === e) return 6403;
							if (1035 === e) return null !== (n = t.get("EXT_sRGB")) ? n.SRGB_ALPHA_EXT : null;
							if (1029 === e) return 36244;
							if (1030 === e) return 33319;
							if (1031 === e) return 33320;
							if (1033 === e) return 36249;
							if (33776 === e || 33777 === e || 33778 === e || 33779 === e) {
								if (3001 === r) {
									if (null === (n = t.get("WEBGL_compressed_texture_s3tc_srgb"))) return null;
									if (33776 === e) return n.COMPRESSED_SRGB_S3TC_DXT1_EXT;
									if (33777 === e) return n.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;
									if (33778 === e) return n.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;
									if (33779 === e) return n.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT
								} else {
									if (null === (n = t.get("WEBGL_compressed_texture_s3tc"))) return null;
									if (33776 === e) return n.COMPRESSED_RGB_S3TC_DXT1_EXT;
									if (33777 === e) return n.COMPRESSED_RGBA_S3TC_DXT1_EXT;
									if (33778 === e) return n.COMPRESSED_RGBA_S3TC_DXT3_EXT;
									if (33779 === e) return n.COMPRESSED_RGBA_S3TC_DXT5_EXT
								}
							}
							if (35840 === e || 35841 === e || 35842 === e || 35843 === e) {
								if (null === (n = t.get("WEBGL_compressed_texture_pvrtc"))) return null;
								if (35840 === e) return n.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;
								if (35841 === e) return n.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;
								if (35842 === e) return n.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;
								if (35843 === e) return n.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG
							}
							if (36196 === e) return null !== (n = t.get("WEBGL_compressed_texture_etc1")) ? n.COMPRESSED_RGB_ETC1_WEBGL : null;
							if (37492 === e || 37496 === e) {
								if (null === (n = t.get("WEBGL_compressed_texture_etc"))) return null;
								if (37492 === e) return 3001 === r ? n.COMPRESSED_SRGB8_ETC2 : n.COMPRESSED_RGB8_ETC2;
								if (37496 === e) return 3001 === r ? n.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC : n.COMPRESSED_RGBA8_ETC2_EAC
							}
							if (37808 === e || 37809 === e || 37810 === e || 37811 === e || 37812 === e || 37813 === e || 37814 === e || 37815 === e || 37816 === e || 37817 === e || 37818 === e || 37819 === e || 37820 === e || 37821 === e) {
								if (null === (n = t.get("WEBGL_compressed_texture_astc"))) return null;
								if (37808 === e) return 3001 === r ? n.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR : n.COMPRESSED_RGBA_ASTC_4x4_KHR;
								if (37809 === e) return 3001 === r ? n.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR : n.COMPRESSED_RGBA_ASTC_5x4_KHR;
								if (37810 === e) return 3001 === r ? n.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR : n.COMPRESSED_RGBA_ASTC_5x5_KHR;
								if (37811 === e) return 3001 === r ? n.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR : n.COMPRESSED_RGBA_ASTC_6x5_KHR;
								if (37812 === e) return 3001 === r ? n.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR : n.COMPRESSED_RGBA_ASTC_6x6_KHR;
								if (37813 === e) return 3001 === r ? n.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR : n.COMPRESSED_RGBA_ASTC_8x5_KHR;
								if (37814 === e) return 3001 === r ? n.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR : n.COMPRESSED_RGBA_ASTC_8x6_KHR;
								if (37815 === e) return 3001 === r ? n.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR : n.COMPRESSED_RGBA_ASTC_8x8_KHR;
								if (37816 === e) return 3001 === r ? n.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR : n.COMPRESSED_RGBA_ASTC_10x5_KHR;
								if (37817 === e) return 3001 === r ? n.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR : n.COMPRESSED_RGBA_ASTC_10x6_KHR;
								if (37818 === e) return 3001 === r ? n.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR : n.COMPRESSED_RGBA_ASTC_10x8_KHR;
								if (37819 === e) return 3001 === r ? n.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR : n.COMPRESSED_RGBA_ASTC_10x10_KHR;
								if (37820 === e) return 3001 === r ? n.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR : n.COMPRESSED_RGBA_ASTC_12x10_KHR;
								if (37821 === e) return 3001 === r ? n.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR : n.COMPRESSED_RGBA_ASTC_12x12_KHR
							}
							if (36492 === e) {
								if (null === (n = t.get("EXT_texture_compression_bptc"))) return null;
								if (36492 === e) return 3001 === r ? n.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT : n.COMPRESSED_RGBA_BPTC_UNORM_EXT
							}
							return 1020 === e ? i ? 34042 : null !== (n = t.get("WEBGL_depth_texture")) ? n.UNSIGNED_INT_24_8_WEBGL : null : void 0
						}
					}
				}
				ru.prototype.isMeshDistanceMaterial = !0;
				var rp = function(e) {
					function t() {
						var e, n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [];
						return d(this, t), (e = h(this, t)).cameras = n, e
					}
					return y(t, e), t
				}(t1);
				rp.prototype.isArrayCamera = !0;
				var rm = function(e) {
					function t() {
						var e;
						return d(this, t), (e = h(this, t)).type = "Group", e
					}
					return y(t, e), t
				}(tt);
				rm.prototype.isGroup = !0;
				var rv = {
						type: "move"
					},
					rg = function() {
						function e() {
							d(this, e), this._targetRay = null, this._grip = null, this._hand = null
						}
						return p(e, [{
							key: "getHandSpace",
							value: function() {
								return null === this._hand && (this._hand = new rm, this._hand.matrixAutoUpdate = !1, this._hand.visible = !1, this._hand.joints = {}, this._hand.inputState = {
									pinching: !1
								}), this._hand
							}
						}, {
							key: "getTargetRaySpace",
							value: function() {
								return null === this._targetRay && (this._targetRay = new rm, this._targetRay.matrixAutoUpdate = !1, this._targetRay.visible = !1, this._targetRay.hasLinearVelocity = !1, this._targetRay.linearVelocity = new eu, this._targetRay.hasAngularVelocity = !1, this._targetRay.angularVelocity = new eu), this._targetRay
							}
						}, {
							key: "getGripSpace",
							value: function() {
								return null === this._grip && (this._grip = new rm, this._grip.matrixAutoUpdate = !1, this._grip.visible = !1, this._grip.hasLinearVelocity = !1, this._grip.linearVelocity = new eu, this._grip.hasAngularVelocity = !1, this._grip.angularVelocity = new eu), this._grip
							}
						}, {
							key: "dispatchEvent",
							value: function(e) {
								return null !== this._targetRay && this._targetRay.dispatchEvent(e), null !== this._grip && this._grip.dispatchEvent(e), null !== this._hand && this._hand.dispatchEvent(e), this
							}
						}, {
							key: "disconnect",
							value: function(e) {
								return this.dispatchEvent({
									type: "disconnected",
									data: e
								}), null !== this._targetRay && (this._targetRay.visible = !1), null !== this._grip && (this._grip.visible = !1), null !== this._hand && (this._hand.visible = !1), this
							}
						}, {
							key: "update",
							value: function(e, t, n) {
								var i = null,
									r = null,
									a = null,
									o = this._targetRay,
									s = this._grip,
									l = this._hand;
								if (e && "visible-blurred" !== t.session.visibilityState) {
									if (null !== o && null !== (i = t.getPose(e.targetRaySpace, n)) && (o.matrix.fromArray(i.transform.matrix), o.matrix.decompose(o.position, o.rotation, o.scale), i.linearVelocity ? (o.hasLinearVelocity = !0, o.linearVelocity.copy(i.linearVelocity)) : o.hasLinearVelocity = !1, i.angularVelocity ? (o.hasAngularVelocity = !0, o.angularVelocity.copy(i.angularVelocity)) : o.hasAngularVelocity = !1, this.dispatchEvent(rv)), l && e.hand) {
										a = !0;
										var u = !0,
											c = !1,
											h = void 0;
										try {
											for (var d, f = e.hand.values()[Symbol.iterator](); !(u = (d = f.next()).done); u = !0) {
												var p = d.value,
													m = t.getJointPose(p, n);
												if (void 0 === l.joints[p.jointName]) {
													var v = new rm;
													v.matrixAutoUpdate = !1, v.visible = !1, l.joints[p.jointName] = v, l.add(v)
												}
												var g = l.joints[p.jointName];
												null !== m && (g.matrix.fromArray(m.transform.matrix), g.matrix.decompose(g.position, g.rotation, g.scale), g.jointRadius = m.radius), g.visible = null !== m
											}
										} catch (e) {
											c = !0, h = e
										} finally {
											try {
												u || null == f.return || f.return()
											} finally {
												if (c) throw h
											}
										}
										var y = l.joints["index-finger-tip"],
											x = l.joints["thumb-tip"],
											_ = y.position.distanceTo(x.position);
										l.inputState.pinching && _ > .025 ? (l.inputState.pinching = !1, this.dispatchEvent({
											type: "pinchend",
											handedness: e.handedness,
											target: this
										})) : !l.inputState.pinching && _ <= .015 && (l.inputState.pinching = !0, this.dispatchEvent({
											type: "pinchstart",
											handedness: e.handedness,
											target: this
										}))
									} else null !== s && e.gripSpace && null !== (r = t.getPose(e.gripSpace, n)) && (s.matrix.fromArray(r.transform.matrix), s.matrix.decompose(s.position, s.rotation, s.scale), r.linearVelocity ? (s.hasLinearVelocity = !0, s.linearVelocity.copy(r.linearVelocity)) : s.hasLinearVelocity = !1, r.angularVelocity ? (s.hasAngularVelocity = !0, s.angularVelocity.copy(r.angularVelocity)) : s.hasAngularVelocity = !1)
								}
								return null !== o && (o.visible = null !== i), null !== s && (s.visible = null !== r), null !== l && (l.visible = null !== a), this
							}
						}]), e
					}(),
					ry = function(e) {
						function t(e, n, i, r, a, o, s, l, u, c) {
							var f;
							if (d(this, t), 1026 !== (c = void 0 !== c ? c : 1026) && 1027 !== c) throw Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");
							return void 0 === i && 1026 === c && (i = 1012), void 0 === i && 1027 === c && (i = 1020), (f = h(this, t, [null, r, a, o, s, l, c, i, u])).image = {
								width: e,
								height: n
							}, f.magFilter = void 0 !== s ? s : 1003, f.minFilter = void 0 !== l ? l : 1003, f.flipY = !1, f.generateMipmaps = !1, f
						}
						return y(t, e), t
					}(ei);
				ry.prototype.isDepthTexture = !0;
				var rx = function(e) {
					function t(e, n) {
						d(this, t);
						var i, r, a, o = function(e) {
								var t = L.get(e.inputSource);
								t && t.dispatchEvent({
									type: e.type,
									data: e.inputSource
								})
							},
							s = function() {
								L.forEach(function(e, t) {
									e.disconnect(t)
								}), L.clear(), N = null, O = null, e.setRenderTarget(A), w = null, b = null, _ = null, p = null, k = null, B.stop(), f.isPresenting = !1, f.dispatchEvent({
									type: "sessionend"
								})
							},
							l = function(e) {
								for (var t = p.inputSources, n = 0; n < R.length; n++) L.set(t[n], R[n]);
								for (var i = 0; i < e.removed.length; i++) {
									var r = e.removed[i],
										a = L.get(r);
									a && (a.dispatchEvent({
										type: "disconnected",
										data: r
									}), L.delete(r))
								}
								for (var o = 0; o < e.added.length; o++) {
									var s = e.added[o],
										l = L.get(s);
									l && l.dispatchEvent({
										type: "connected",
										data: s
									})
								}
							},
							u = function(e, t) {
								null === t ? e.matrixWorld.copy(e.matrix) : e.matrixWorld.multiplyMatrices(t.matrixWorld, e.matrix), e.matrixWorldInverse.copy(e.matrixWorld).invert()
							},
							f = a = h(this, t),
							p = null,
							m = 1,
							v = null,
							g = "local-floor",
							y = e.extensions.has("WEBGL_multisampled_render_to_texture"),
							x = null,
							_ = null,
							b = null,
							w = null,
							S = !1,
							T = null,
							E = n.getContextAttributes(),
							A = null,
							k = null,
							R = [],
							L = new Map,
							C = new t1;
						C.layers.enable(1), C.viewport = new ea;
						var P = new t1;
						P.layers.enable(2), P.viewport = new ea;
						var D = [C, P],
							I = new rp;
						I.layers.enable(1), I.layers.enable(2);
						var N = null,
							O = null;
						a.cameraAutoUpdate = !0, a.enabled = !1, a.isPresenting = !1, a.getController = function(e) {
							var t = R[e];
							return void 0 === t && (t = new rg, R[e] = t), t.getTargetRaySpace()
						}, a.getControllerGrip = function(e) {
							var t = R[e];
							return void 0 === t && (t = new rg, R[e] = t), t.getGripSpace()
						}, a.getHand = function(e) {
							var t = R[e];
							return void 0 === t && (t = new rg, R[e] = t), t.getHandSpace()
						}, a.setFramebufferScaleFactor = function(e) {
							m = e, !0 === f.isPresenting && console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")
						}, a.setReferenceSpaceType = function(e) {
							g = e, !0 === f.isPresenting && console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")
						}, a.getReferenceSpace = function() {
							return v
						}, a.getBaseLayer = function() {
							return null !== b ? b : w
						}, a.getBinding = function() {
							return _
						}, a.getFrame = function() {
							return T
						}, a.getSession = function() {
							return p
						}, a.setSession = (i = function(t) {
							var i, r, a, u, c, h;
							return M(this, function(i) {
								switch (i.label) {
									case 0:
										if (null === (p = t)) return [3, 4];
										if (A = e.getRenderTarget(), p.addEventListener("select", o), p.addEventListener("selectstart", o), p.addEventListener("selectend", o), p.addEventListener("squeeze", o), p.addEventListener("squeezestart", o), p.addEventListener("squeezeend", o), p.addEventListener("end", s), p.addEventListener("inputsourceschange", l), !0 === E.xrCompatible) return [3, 2];
										return [4, n.makeXRCompatible()];
									case 1:
										i.sent(), i.label = 2;
									case 2:
										return void 0 === p.renderState.layers || !1 === e.capabilities.isWebGL2 ? (r = {
											antialias: void 0 !== p.renderState.layers || E.antialias,
											alpha: E.alpha,
											depth: E.depth,
											stencil: E.stencil,
											framebufferScaleFactor: m
										}, w = new XRWebGLLayer(p, n, r), p.updateRenderState({
											baseLayer: w
										}), k = new eo(w.framebufferWidth, w.framebufferHeight, {
											format: 1023,
											type: 1009,
											encoding: e.outputEncoding
										})) : (S = E.antialias, a = null, u = null, c = null, E.depth && (c = E.stencil ? 35056 : 33190, a = E.stencil ? 1027 : 1026, u = E.stencil ? 1020 : 1012), h = {
											colorFormat: 3001 === e.outputEncoding ? 35907 : 32856,
											depthFormat: c,
											scaleFactor: m
										}, b = (_ = new XRWebGLBinding(p, n)).createProjectionLayer(h), p.updateRenderState({
											layers: [b]
										}), k = S ? new es(b.textureWidth, b.textureHeight, {
											format: 1023,
											type: 1009,
											depthTexture: new ry(b.textureWidth, b.textureHeight, u, void 0, void 0, void 0, void 0, void 0, void 0, a),
											stencilBuffer: E.stencil,
											ignoreDepth: b.ignoreDepthValues,
											useRenderToTexture: y,
											encoding: e.outputEncoding
										}) : new eo(b.textureWidth, b.textureHeight, {
											format: 1023,
											type: 1009,
											depthTexture: new ry(b.textureWidth, b.textureHeight, u, void 0, void 0, void 0, void 0, void 0, void 0, a),
											stencilBuffer: E.stencil,
											ignoreDepth: b.ignoreDepthValues,
											encoding: e.outputEncoding
										})), k.isXRRenderTarget = !0, this.setFoveation(1), [4, p.requestReferenceSpace(g)];
									case 3:
										v = i.sent(), B.setContext(p), B.start(), f.isPresenting = !0, f.dispatchEvent({
											type: "sessionstart"
										}), i.label = 4;
									case 4:
										return [2]
								}
							})
						}, r = function() {
							var e = this,
								t = arguments;
							return new Promise(function(n, r) {
								var a = i.apply(e, t);

								function o(e) {
									c(a, n, r, o, s, "next", e)
								}

								function s(e) {
									c(a, n, r, o, s, "throw", e)
								}
								o(void 0)
							})
						}, function(e) {
							return r.apply(this, arguments)
						});
						var z = new eu,
							U = new eu;
						a.updateCamera = function(e) {
							if (null !== p) {
								I.near = P.near = C.near = e.near, I.far = P.far = C.far = e.far, N === I.near && O === I.far || (p.updateRenderState({
									depthNear: I.near,
									depthFar: I.far
								}), N = I.near, O = I.far);
								var t = e.parent,
									n = I.cameras;
								u(I, t);
								for (var i = 0; i < n.length; i++) u(n[i], t);
								I.matrixWorld.decompose(I.position, I.quaternion, I.scale), e.position.copy(I.position), e.quaternion.copy(I.quaternion), e.scale.copy(I.scale), e.matrix.copy(I.matrix), e.matrixWorld.copy(I.matrixWorld);
								for (var r = e.children, a = 0, o = r.length; a < o; a++) r[a].updateMatrixWorld(!0);
								2 === n.length ? function(e, t, n) {
									z.setFromMatrixPosition(t.matrixWorld), U.setFromMatrixPosition(n.matrixWorld);
									var i = z.distanceTo(U),
										r = t.projectionMatrix.elements,
										a = n.projectionMatrix.elements,
										o = r[14] / (r[10] - 1),
										s = r[14] / (r[10] + 1),
										l = (r[9] + 1) / r[5],
										u = (r[9] - 1) / r[5],
										c = (r[8] - 1) / r[0],
										h = (a[8] + 1) / a[0],
										d = i / (-c + h),
										f = -(d * c);
									t.matrixWorld.decompose(e.position, e.quaternion, e.scale), e.translateX(f), e.translateZ(d), e.matrixWorld.compose(e.position, e.quaternion, e.scale), e.matrixWorldInverse.copy(e.matrixWorld).invert();
									var p = o + d,
										m = s + d;
									e.projectionMatrix.makePerspective(o * c - f, o * h + (i - f), l * s / m * p, u * s / m * p, p, m)
								}(I, C, P) : I.projectionMatrix.copy(C.projectionMatrix)
							}
						}, a.getCamera = function() {
							return I
						}, a.getFoveation = function() {
							return null !== b ? b.fixedFoveation : null !== w ? w.fixedFoveation : void 0
						}, a.setFoveation = function(e) {
							null !== b && (b.fixedFoveation = e), null !== w && void 0 !== w.fixedFoveation && (w.fixedFoveation = e)
						};
						var F = null,
							B = new nn;
						return B.setAnimationLoop(function(t, n) {
							if (x = n.getViewerPose(v), T = n, null !== x) {
								var i = x.views;
								null !== w && (e.setRenderTargetFramebuffer(k, w.framebuffer), e.setRenderTarget(k));
								var r = !1;
								i.length !== I.cameras.length && (I.cameras.length = 0, r = !0);
								for (var a = 0; a < i.length; a++) {
									var o = i[a],
										s = null;
									if (null !== w) s = w.getViewport(o);
									else {
										var l = _.getViewSubImage(b, o);
										s = l.viewport, 0 === a && (e.setRenderTargetTextures(k, l.colorTexture, b.ignoreDepthValues ? void 0 : l.depthStencilTexture), e.setRenderTarget(k))
									}
									var u = D[a];
									u.matrix.fromArray(o.transform.matrix), u.projectionMatrix.fromArray(o.projectionMatrix), u.viewport.set(s.x, s.y, s.width, s.height), 0 === a && I.matrix.copy(u.matrix), !0 === r && I.cameras.push(u)
								}
							}
							for (var c = p.inputSources, h = 0; h < R.length; h++) {
								var d = R[h],
									f = c[h];
								d.update(f, n, v)
							}
							F && F(t, n), T = null
						}), a.setAnimationLoop = function(e) {
							F = e
						}, a.dispose = function() {}, a
					}
					return y(t, e), t
				}(N);

				function r_(e) {
					function t(t, n) {
						t.opacity.value = n.opacity, n.color && t.diffuse.value.copy(n.color), n.emissive && t.emissive.value.copy(n.emissive).multiplyScalar(n.emissiveIntensity), n.map && (t.map.value = n.map), n.alphaMap && (t.alphaMap.value = n.alphaMap), n.specularMap && (t.specularMap.value = n.specularMap), n.alphaTest > 0 && (t.alphaTest.value = n.alphaTest);
						var i, r, a = e.get(n).envMap;
						a && (t.envMap.value = a, t.flipEnvMap.value = a.isCubeTexture && !1 === a.isRenderTargetTexture ? -1 : 1, t.reflectivity.value = n.reflectivity, t.ior.value = n.ior, t.refractionRatio.value = n.refractionRatio), n.lightMap && (t.lightMap.value = n.lightMap, t.lightMapIntensity.value = n.lightMapIntensity), n.aoMap && (t.aoMap.value = n.aoMap, t.aoMapIntensity.value = n.aoMapIntensity), n.map ? i = n.map : n.specularMap ? i = n.specularMap : n.displacementMap ? i = n.displacementMap : n.normalMap ? i = n.normalMap : n.bumpMap ? i = n.bumpMap : n.roughnessMap ? i = n.roughnessMap : n.metalnessMap ? i = n.metalnessMap : n.alphaMap ? i = n.alphaMap : n.emissiveMap ? i = n.emissiveMap : n.clearcoatMap ? i = n.clearcoatMap : n.clearcoatNormalMap ? i = n.clearcoatNormalMap : n.clearcoatRoughnessMap ? i = n.clearcoatRoughnessMap : n.specularIntensityMap ? i = n.specularIntensityMap : n.specularColorMap ? i = n.specularColorMap : n.transmissionMap ? i = n.transmissionMap : n.thicknessMap ? i = n.thicknessMap : n.sheenColorMap ? i = n.sheenColorMap : n.sheenRoughnessMap && (i = n.sheenRoughnessMap), void 0 !== i && (i.isWebGLRenderTarget && (i = i.texture), !0 === i.matrixAutoUpdate && i.updateMatrix(), t.uvTransform.value.copy(i.matrix)), n.aoMap ? r = n.aoMap : n.lightMap && (r = n.lightMap), void 0 !== r && (r.isWebGLRenderTarget && (r = r.texture), !0 === r.matrixAutoUpdate && r.updateMatrix(), t.uv2Transform.value.copy(r.matrix))
					}

					function n(t, n) {
						t.roughness.value = n.roughness, t.metalness.value = n.metalness, n.roughnessMap && (t.roughnessMap.value = n.roughnessMap), n.metalnessMap && (t.metalnessMap.value = n.metalnessMap), n.emissiveMap && (t.emissiveMap.value = n.emissiveMap), n.bumpMap && (t.bumpMap.value = n.bumpMap, t.bumpScale.value = n.bumpScale, 1 === n.side && (t.bumpScale.value *= -1)), n.normalMap && (t.normalMap.value = n.normalMap, t.normalScale.value.copy(n.normalScale), 1 === n.side && t.normalScale.value.negate()), n.displacementMap && (t.displacementMap.value = n.displacementMap, t.displacementScale.value = n.displacementScale, t.displacementBias.value = n.displacementBias), e.get(n).envMap && (t.envMapIntensity.value = n.envMapIntensity)
					}
					return {
						refreshFogUniforms: function(e, t) {
							e.fogColor.value.copy(t.color), t.isFog ? (e.fogNear.value = t.near, e.fogFar.value = t.far) : t.isFogExp2 && (e.fogDensity.value = t.density)
						},
						refreshMaterialUniforms: function(e, i, r, a, o) {
							var s, l;
							i.isMeshBasicMaterial ? t(e, i) : i.isMeshLambertMaterial ? (t(e, i), i.emissiveMap && (e.emissiveMap.value = i.emissiveMap)) : i.isMeshToonMaterial ? (t(e, i), i.gradientMap && (e.gradientMap.value = i.gradientMap), i.emissiveMap && (e.emissiveMap.value = i.emissiveMap), i.bumpMap && (e.bumpMap.value = i.bumpMap, e.bumpScale.value = i.bumpScale, 1 === i.side && (e.bumpScale.value *= -1)), i.normalMap && (e.normalMap.value = i.normalMap, e.normalScale.value.copy(i.normalScale), 1 === i.side && e.normalScale.value.negate()), i.displacementMap && (e.displacementMap.value = i.displacementMap, e.displacementScale.value = i.displacementScale, e.displacementBias.value = i.displacementBias)) : i.isMeshPhongMaterial ? (t(e, i), e.specular.value.copy(i.specular), e.shininess.value = Math.max(i.shininess, 1e-4), i.emissiveMap && (e.emissiveMap.value = i.emissiveMap), i.bumpMap && (e.bumpMap.value = i.bumpMap, e.bumpScale.value = i.bumpScale, 1 === i.side && (e.bumpScale.value *= -1)), i.normalMap && (e.normalMap.value = i.normalMap, e.normalScale.value.copy(i.normalScale), 1 === i.side && e.normalScale.value.negate()), i.displacementMap && (e.displacementMap.value = i.displacementMap, e.displacementScale.value = i.displacementScale, e.displacementBias.value = i.displacementBias)) : i.isMeshStandardMaterial ? (t(e, i), i.isMeshPhysicalMaterial ? (n(e, i), e.ior.value = i.ior, i.sheen > 0 && (e.sheenColor.value.copy(i.sheenColor).multiplyScalar(i.sheen), e.sheenRoughness.value = i.sheenRoughness, i.sheenColorMap && (e.sheenColorMap.value = i.sheenColorMap), i.sheenRoughnessMap && (e.sheenRoughnessMap.value = i.sheenRoughnessMap)), i.clearcoat > 0 && (e.clearcoat.value = i.clearcoat, e.clearcoatRoughness.value = i.clearcoatRoughness, i.clearcoatMap && (e.clearcoatMap.value = i.clearcoatMap), i.clearcoatRoughnessMap && (e.clearcoatRoughnessMap.value = i.clearcoatRoughnessMap), i.clearcoatNormalMap && (e.clearcoatNormalScale.value.copy(i.clearcoatNormalScale), e.clearcoatNormalMap.value = i.clearcoatNormalMap, 1 === i.side && e.clearcoatNormalScale.value.negate())), i.transmission > 0 && (e.transmission.value = i.transmission, e.transmissionSamplerMap.value = o.texture, e.transmissionSamplerSize.value.set(o.width, o.height), i.transmissionMap && (e.transmissionMap.value = i.transmissionMap), e.thickness.value = i.thickness, i.thicknessMap && (e.thicknessMap.value = i.thicknessMap), e.attenuationDistance.value = i.attenuationDistance, e.attenuationColor.value.copy(i.attenuationColor)), e.specularIntensity.value = i.specularIntensity, e.specularColor.value.copy(i.specularColor), i.specularIntensityMap && (e.specularIntensityMap.value = i.specularIntensityMap), i.specularColorMap && (e.specularColorMap.value = i.specularColorMap)) : n(e, i)) : i.isMeshMatcapMaterial ? (t(e, i), i.matcap && (e.matcap.value = i.matcap), i.bumpMap && (e.bumpMap.value = i.bumpMap, e.bumpScale.value = i.bumpScale, 1 === i.side && (e.bumpScale.value *= -1)), i.normalMap && (e.normalMap.value = i.normalMap, e.normalScale.value.copy(i.normalScale), 1 === i.side && e.normalScale.value.negate()), i.displacementMap && (e.displacementMap.value = i.displacementMap, e.displacementScale.value = i.displacementScale, e.displacementBias.value = i.displacementBias)) : i.isMeshDepthMaterial ? (t(e, i), i.displacementMap && (e.displacementMap.value = i.displacementMap, e.displacementScale.value = i.displacementScale, e.displacementBias.value = i.displacementBias)) : i.isMeshDistanceMaterial ? (t(e, i), i.displacementMap && (e.displacementMap.value = i.displacementMap, e.displacementScale.value = i.displacementScale, e.displacementBias.value = i.displacementBias), e.referencePosition.value.copy(i.referencePosition), e.nearDistance.value = i.nearDistance, e.farDistance.value = i.farDistance) : i.isMeshNormalMaterial ? (t(e, i), i.bumpMap && (e.bumpMap.value = i.bumpMap, e.bumpScale.value = i.bumpScale, 1 === i.side && (e.bumpScale.value *= -1)), i.normalMap && (e.normalMap.value = i.normalMap, e.normalScale.value.copy(i.normalScale), 1 === i.side && e.normalScale.value.negate()), i.displacementMap && (e.displacementMap.value = i.displacementMap, e.displacementScale.value = i.displacementScale, e.displacementBias.value = i.displacementBias)) : i.isLineBasicMaterial ? (e.diffuse.value.copy(i.color), e.opacity.value = i.opacity, i.isLineDashedMaterial && (e.dashSize.value = i.dashSize, e.totalSize.value = i.dashSize + i.gapSize, e.scale.value = i.scale)) : i.isPointsMaterial ? (e.diffuse.value.copy(i.color), e.opacity.value = i.opacity, e.size.value = i.size * r, e.scale.value = .5 * a, i.map && (e.map.value = i.map), i.alphaMap && (e.alphaMap.value = i.alphaMap), i.alphaTest > 0 && (e.alphaTest.value = i.alphaTest), i.map ? s = i.map : i.alphaMap && (s = i.alphaMap), void 0 !== s && (!0 === s.matrixAutoUpdate && s.updateMatrix(), e.uvTransform.value.copy(s.matrix))) : i.isSpriteMaterial ? (e.diffuse.value.copy(i.color), e.opacity.value = i.opacity, e.rotation.value = i.rotation, i.map && (e.map.value = i.map), i.alphaMap && (e.alphaMap.value = i.alphaMap), i.alphaTest > 0 && (e.alphaTest.value = i.alphaTest), i.map ? l = i.map : i.alphaMap && (l = i.alphaMap), void 0 !== l && (!0 === l.matrixAutoUpdate && l.updateMatrix(), e.uvTransform.value.copy(l.matrix))) : i.isShadowMaterial ? (e.color.value.copy(i.color), e.opacity.value = i.opacity) : i.isShaderMaterial && (i.uniformsNeedUpdate = !1)
						}
					}
				}

				function rb() {
					var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
						t = void 0 !== e.canvas ? e.canvas : ((H = X("canvas")).style.display = "block", H),
						n = void 0 !== e.context ? e.context : null,
						i = void 0 !== e.alpha && e.alpha,
						r = void 0 === e.depth || e.depth,
						a = void 0 === e.stencil || e.stencil,
						o = void 0 !== e.antialias && e.antialias,
						s = void 0 === e.premultipliedAlpha || e.premultipliedAlpha,
						l = void 0 !== e.preserveDrawingBuffer && e.preserveDrawingBuffer,
						u = void 0 !== e.powerPreference ? e.powerPreference : "default",
						c = void 0 !== e.failIfMajorPerformanceCaveat && e.failIfMajorPerformanceCaveat,
						h = null,
						d = null,
						f = [],
						p = [];
					this.domElement = t, this.debug = {
						checkShaderErrors: !0
					}, this.autoClear = !0, this.autoClearColor = !0, this.autoClearDepth = !0, this.autoClearStencil = !0, this.sortObjects = !0, this.clippingPlanes = [], this.localClippingEnabled = !1, this.outputEncoding = 3e3, this.physicallyCorrectLights = !1, this.toneMapping = 0, this.toneMappingExposure = 1;
					var m = this,
						v = !1,
						g = 0,
						y = 0,
						x = null,
						_ = -1,
						b = null,
						w = new ea,
						M = new ea,
						S = null,
						T = t.width,
						E = t.height,
						A = 1,
						k = null,
						R = null,
						L = new ea(0, 0, T, E),
						C = new ea(0, 0, T, E),
						P = !1,
						D = new nt,
						I = !1,
						N = !1,
						O = null,
						z = new eB,
						U = new eu,
						F = {
							background: null,
							fog: null,
							environment: null,
							overrideMaterial: null,
							isScene: !0
						};

					function B() {
						return null === x ? A : 1
					}
					var H, V, G, W, j, q, Y, J, Z, K, Q, $, ee, et, en, ei, er, el, ec, eh, ed, ef, ep, em, ev = n;

					function eg(e, n) {
						for (var i = 0; i < e.length; i++) {
							var r = e[i],
								a = t.getContext(r, n);
							if (null !== a) return a
						}
						return null
					}
					try {
						if ("setAttribute" in t && t.setAttribute("data-engine", "three.js r".concat("137")), t.addEventListener("webglcontextlost", eb, !1), t.addEventListener("webglcontextrestored", ew, !1), null === ev) {
							var ey = ["webgl2", "webgl", "experimental-webgl"];
							if (!0 === m.isWebGL1Renderer && ey.shift(), ev = eg(ey, {
									alpha: !0,
									depth: r,
									stencil: a,
									antialias: o,
									premultipliedAlpha: s,
									preserveDrawingBuffer: l,
									powerPreference: u,
									failIfMajorPerformanceCaveat: c
								}), null === ev) throw eg(ey) ? Error("Error creating WebGL context with your selected attributes.") : Error("Error creating WebGL context.")
						}
						void 0 === ev.getShaderPrecisionFormat && (ev.getShaderPrecisionFormat = function() {
							return {
								rangeMin: 1,
								rangeMax: 1,
								precision: 1
							}
						})
					} catch (e) {
						throw console.error("THREE.WebGLRenderer: " + e.message), e
					}

					function ex() {
						V = new nN(ev), G = new nh(ev, V, e), V.init(G), ep = new rf(ev, V, G), W = new rh(ev, V, G), j = new nU, q = new i8, Y = new rd(ev, V, W, q, G, ep, j), J = new nf(m), Z = new nI(m), K = new ni(ev, G), em = new nu(ev, V, K, G), Q = new nO(ev, K, j, em), $ = new nW(ev, Q, K, j), eh = new nG(ev, G, Y), er = new nd(q), ee = new i6(m, J, Z, V, G, em, er), et = new r_(q), en = new rt, ei = new rs(V, G), ec = new nl(m, J, W, $, i, s), el = new rc(m, $, G), ed = new nc(ev, V, j, G), ef = new nz(ev, V, j, G), j.programs = ee.programs, m.capabilities = G, m.extensions = V, m.properties = q, m.renderLists = en, m.shadowMap = el, m.state = W, m.info = j
					}
					ex();
					var e_ = new rx(m, ev);

					function eb(e) {
						e.preventDefault(), console.log("THREE.WebGLRenderer: Context Lost."), v = !0
					}

					function ew() {
						console.log("THREE.WebGLRenderer: Context Restored."), v = !1;
						var e = j.autoReset,
							t = el.enabled,
							n = el.autoUpdate,
							i = el.needsUpdate,
							r = el.type;
						ex(), j.autoReset = e, el.enabled = t, el.autoUpdate = n, el.needsUpdate = i, el.type = r
					}

					function eM(e) {
						var t, n = e.target;
						n.removeEventListener("dispose", eM), void 0 !== (t = q.get(n).programs) && (t.forEach(function(e) {
							ee.releaseProgram(e)
						}), n.isShaderMaterial && ee.releaseShaderCache(n)), q.remove(n)
					}
					this.xr = e_, this.getContext = function() {
						return ev
					}, this.getContextAttributes = function() {
						return ev.getContextAttributes()
					}, this.forceContextLoss = function() {
						var e = V.get("WEBGL_lose_context");
						e && e.loseContext()
					}, this.forceContextRestore = function() {
						var e = V.get("WEBGL_lose_context");
						e && e.restoreContext()
					}, this.getPixelRatio = function() {
						return A
					}, this.setPixelRatio = function(e) {
						void 0 !== e && (A = e, this.setSize(T, E, !1))
					}, this.getSize = function(e) {
						return e.set(T, E)
					}, this.setSize = function(e, n, i) {
						e_.isPresenting ? console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.") : (T = e, E = n, t.width = Math.floor(e * A), t.height = Math.floor(n * A), !1 !== i && (t.style.width = e + "px", t.style.height = n + "px"), this.setViewport(0, 0, e, n))
					}, this.getDrawingBufferSize = function(e) {
						return e.set(T * A, E * A).floor()
					}, this.setDrawingBufferSize = function(e, n, i) {
						T = e, E = n, A = i, t.width = Math.floor(e * i), t.height = Math.floor(n * i), this.setViewport(0, 0, e, n)
					}, this.getCurrentViewport = function(e) {
						return e.copy(w)
					}, this.getViewport = function(e) {
						return e.copy(L)
					}, this.setViewport = function(e, t, n, i) {
						e.isVector4 ? L.set(e.x, e.y, e.z, e.w) : L.set(e, t, n, i), W.viewport(w.copy(L).multiplyScalar(A).floor())
					}, this.getScissor = function(e) {
						return e.copy(C)
					}, this.setScissor = function(e, t, n, i) {
						e.isVector4 ? C.set(e.x, e.y, e.z, e.w) : C.set(e, t, n, i), W.scissor(M.copy(C).multiplyScalar(A).floor())
					}, this.getScissorTest = function() {
						return P
					}, this.setScissorTest = function(e) {
						W.setScissorTest(P = e)
					}, this.setOpaqueSort = function(e) {
						k = e
					}, this.setTransparentSort = function(e) {
						R = e
					}, this.getClearColor = function(e) {
						return e.copy(ec.getClearColor())
					}, this.setClearColor = function() {
						ec.setClearColor.apply(ec, arguments)
					}, this.getClearAlpha = function() {
						return ec.getClearAlpha()
					}, this.setClearAlpha = function() {
						ec.setClearAlpha.apply(ec, arguments)
					}, this.clear = function(e, t, n) {
						var i = 0;
						(void 0 === e || e) && (i |= 16384), (void 0 === t || t) && (i |= 256), (void 0 === n || n) && (i |= 1024), ev.clear(i)
					}, this.clearColor = function() {
						this.clear(!0, !1, !1)
					}, this.clearDepth = function() {
						this.clear(!1, !0, !1)
					}, this.clearStencil = function() {
						this.clear(!1, !1, !0)
					}, this.dispose = function() {
						t.removeEventListener("webglcontextlost", eb, !1), t.removeEventListener("webglcontextrestored", ew, !1), en.dispose(), ei.dispose(), q.dispose(), J.dispose(), Z.dispose(), $.dispose(), em.dispose(), ee.dispose(), e_.dispose(), e_.removeEventListener("sessionstart", eT), e_.removeEventListener("sessionend", eE), O && (O.dispose(), O = null), eA.stop()
					}, this.renderBufferDirect = function(e, t, n, i, r, a) {
						null === t && (t = F);
						var o = r.isMesh && 0 > r.matrixWorld.determinant(),
							s = function(e, t, n, i, r) {
								!0 !== t.isScene && (t = F), Y.resetTextureUnits();
								var a, o = t.fog,
									s = i.isMeshStandardMaterial ? t.environment : null,
									l = null === x ? m.outputEncoding : !0 === x.isXRRenderTarget ? x.texture.encoding : 3e3,
									u = (i.isMeshStandardMaterial ? Z : J).get(i.envMap || s),
									c = !0 === i.vertexColors && !!n.attributes.color && 4 === n.attributes.color.itemSize,
									h = !!i.normalMap && !!n.attributes.tangent,
									f = !!n.morphAttributes.position,
									p = !!n.morphAttributes.normal,
									v = n.morphAttributes.position ? n.morphAttributes.position.length : 0,
									g = i.toneMapped ? m.toneMapping : 0,
									y = q.get(i),
									w = d.state.lights;
								if (!0 === I && (!0 === N || e !== b)) {
									var M = e === b && i.id === _;
									er.setState(i, e, M)
								}
								var S = !1;
								i.version === y.__version ? y.needsLights && y.lightsStateVersion !== w.state.version || y.outputEncoding !== l || r.isInstancedMesh && !1 === y.instancing ? S = !0 : r.isInstancedMesh || !0 !== y.instancing ? r.isSkinnedMesh && !1 === y.skinning ? S = !0 : r.isSkinnedMesh || !0 !== y.skinning ? y.envMap !== u || i.fog && y.fog !== o ? S = !0 : void 0 === y.numClippingPlanes || y.numClippingPlanes === er.numPlanes && y.numIntersection === er.numIntersection ? (y.vertexAlphas !== c || y.vertexTangents !== h || y.morphTargets !== f || y.morphNormals !== p || y.toneMapping !== g || !0 === G.isWebGL2 && y.morphTargetsCount !== v) && (S = !0) : S = !0 : S = !0 : S = !0 : (S = !0, y.__version = i.version);
								var T = y.currentProgram;
								!0 === S && (T = eL(i, t, r));
								var k = !1,
									R = !1,
									L = !1,
									C = T.getUniforms(),
									P = y.uniforms;
								if (W.useProgram(T.program) && (k = !0, R = !0, L = !0), i.id !== _ && (_ = i.id, R = !0), k || b !== e) {
									if (C.setValue(ev, "projectionMatrix", e.projectionMatrix), G.logarithmicDepthBuffer && C.setValue(ev, "logDepthBufFC", 2 / (Math.log(e.far + 1) / Math.LN2)), b !== e && (b = e, R = !0, L = !0), i.isShaderMaterial || i.isMeshPhongMaterial || i.isMeshToonMaterial || i.isMeshStandardMaterial || i.envMap) {
										var D = C.map.cameraPosition;
										void 0 !== D && D.setValue(ev, U.setFromMatrixPosition(e.matrixWorld))
									}(i.isMeshPhongMaterial || i.isMeshToonMaterial || i.isMeshLambertMaterial || i.isMeshBasicMaterial || i.isMeshStandardMaterial || i.isShaderMaterial) && C.setValue(ev, "isOrthographic", !0 === e.isOrthographicCamera), (i.isMeshPhongMaterial || i.isMeshToonMaterial || i.isMeshLambertMaterial || i.isMeshBasicMaterial || i.isMeshStandardMaterial || i.isShaderMaterial || i.isShadowMaterial || r.isSkinnedMesh) && C.setValue(ev, "viewMatrix", e.matrixWorldInverse)
								}
								if (r.isSkinnedMesh) {
									C.setOptional(ev, r, "bindMatrix"), C.setOptional(ev, r, "bindMatrixInverse");
									var z = r.skeleton;
									z && (G.floatVertexTextures ? (null === z.boneTexture && z.computeBoneTexture(), C.setValue(ev, "boneTexture", z.boneTexture, Y), C.setValue(ev, "boneTextureSize", z.boneTextureSize)) : C.setOptional(ev, z, "boneMatrices"))
								}
								return n && (void 0 !== n.morphAttributes.position || void 0 !== n.morphAttributes.normal) && eh.update(r, n, i, T), (R || y.receiveShadow !== r.receiveShadow) && (y.receiveShadow = r.receiveShadow, C.setValue(ev, "receiveShadow", r.receiveShadow)), R && (C.setValue(ev, "toneMappingExposure", m.toneMappingExposure), y.needsLights && (a = L, P.ambientLightColor.needsUpdate = a, P.lightProbe.needsUpdate = a, P.directionalLights.needsUpdate = a, P.directionalLightShadows.needsUpdate = a, P.pointLights.needsUpdate = a, P.pointLightShadows.needsUpdate = a, P.spotLights.needsUpdate = a, P.spotLightShadows.needsUpdate = a, P.rectAreaLights.needsUpdate = a, P.hemisphereLights.needsUpdate = a), o && i.fog && et.refreshFogUniforms(P, o), et.refreshMaterialUniforms(P, i, A, E, O), iB.upload(ev, y.uniformsList, P, Y)), i.isShaderMaterial && !0 === i.uniformsNeedUpdate && (iB.upload(ev, y.uniformsList, P, Y), i.uniformsNeedUpdate = !1), i.isSpriteMaterial && C.setValue(ev, "center", r.center), C.setValue(ev, "modelViewMatrix", r.modelViewMatrix), C.setValue(ev, "normalMatrix", r.normalMatrix), C.setValue(ev, "modelMatrix", r.matrixWorld), T
							}(e, t, n, i, r);
						W.setMaterial(i, o);
						var l = n.index,
							u = n.attributes.position;
						if (null === l) {
							if (void 0 === u || 0 === u.count) return
						} else if (0 === l.count) return;
						var c, h = 1;
						!0 === i.wireframe && (l = Q.getWireframeAttribute(n), h = 2), em.setup(r, i, s, n, l);
						var f = ed;
						null !== l && (c = K.get(l), (f = ef).setIndex(c));
						var p = null !== l ? l.count : u.count,
							v = n.drawRange.start * h,
							g = n.drawRange.count * h,
							y = null !== a ? a.start * h : 0,
							w = null !== a ? a.count * h : 1 / 0,
							M = Math.max(v, y),
							S = Math.max(0, Math.min(p, v + g, y + w) - 1 - M + 1);
						if (0 !== S) {
							if (r.isMesh) !0 === i.wireframe ? (W.setLineWidth(i.wireframeLinewidth * B()), f.setMode(1)) : f.setMode(4);
							else if (r.isLine) {
								var T = i.linewidth;
								void 0 === T && (T = 1), W.setLineWidth(T * B()), r.isLineSegments ? f.setMode(1) : r.isLineLoop ? f.setMode(2) : f.setMode(3)
							} else r.isPoints ? f.setMode(0) : r.isSprite && f.setMode(4);
							if (r.isInstancedMesh) f.renderInstances(M, S, r.count);
							else if (n.isInstancedBufferGeometry) {
								var k = Math.min(n.instanceCount, n._maxInstanceCount);
								f.renderInstances(M, S, k)
							} else f.render(M, S)
						}
					}, this.compile = function(e, t) {
						(d = ei.get(e)).init(), p.push(d), e.traverseVisible(function(e) {
							e.isLight && e.layers.test(t.layers) && (d.pushLight(e), e.castShadow && d.pushShadow(e))
						}), d.setupLights(m.physicallyCorrectLights), e.traverse(function(t) {
							var n = t.material;
							if (n) {
								if (Array.isArray(n))
									for (var i = 0; i < n.length; i++) eL(n[i], e, t);
								else eL(n, e, t)
							}
						}), p.pop(), d = null
					};
					var eS = null;

					function eT() {
						eA.stop()
					}

					function eE() {
						eA.start()
					}
					var eA = new nn;

					function ek(e, t, n, i) {
						var r, a, s = e.opaque,
							l = e.transmissive,
							u = e.transparent;
						d.setupLightsView(n), l.length > 0 && (null === O && (O = new(!0 === o && !0 === G.isWebGL2 ? es : eo)(1024, 1024, {
							generateMipmaps: !0,
							type: null !== ep.convert(1016) ? 1016 : 1009,
							minFilter: 1008,
							magFilter: 1003,
							wrapS: 1001,
							wrapT: 1001,
							useRenderToTexture: V.has("WEBGL_multisampled_render_to_texture")
						})), r = m.getRenderTarget(), m.setRenderTarget(O), m.clear(), a = m.toneMapping, m.toneMapping = 0, eR(s, t, n), m.toneMapping = a, Y.updateMultisampleRenderTarget(O), Y.updateRenderTargetMipmap(O), m.setRenderTarget(r)), i && W.viewport(w.copy(i)), s.length > 0 && eR(s, t, n), l.length > 0 && eR(l, t, n), u.length > 0 && eR(u, t, n)
					}

					function eR(e, t, n) {
						for (var i = !0 === t.isScene ? t.overrideMaterial : null, r = 0, a = e.length; r < a; r++) {
							var o, s, l, u, c, h, d = e[r],
								f = d.object,
								p = d.geometry,
								v = null === i ? d.material : i,
								g = d.group;
							f.layers.test(n.layers) && (o = f, s = t, l = n, u = p, c = v, h = g, o.onBeforeRender(m, s, l, u, c, h), o.modelViewMatrix.multiplyMatrices(l.matrixWorldInverse, o.matrixWorld), o.normalMatrix.getNormalMatrix(o.modelViewMatrix), c.onBeforeRender(m, s, l, u, o, h), !0 === c.transparent && 2 === c.side ? (c.side = 1, c.needsUpdate = !0, m.renderBufferDirect(l, s, u, c, o, h), c.side = 0, c.needsUpdate = !0, m.renderBufferDirect(l, s, u, c, o, h), c.side = 2) : m.renderBufferDirect(l, s, u, c, o, h), o.onAfterRender(m, s, l, u, c, h))
						}
					}

					function eL(e, t, n) {
						!0 !== t.isScene && (t = F);
						var i = q.get(e),
							r = d.state.lights,
							a = d.state.shadowsArray,
							o = r.state.version,
							s = ee.getParameters(e, r.state, a, t, n),
							l = ee.getProgramCacheKey(s),
							u = i.programs;
						i.environment = e.isMeshStandardMaterial ? t.environment : null, i.fog = t.fog, i.envMap = (e.isMeshStandardMaterial ? Z : J).get(e.envMap || i.environment), void 0 === u && (e.addEventListener("dispose", eM), u = new Map, i.programs = u);
						var c = u.get(l);
						if (void 0 !== c) {
							if (i.currentProgram === c && i.lightsStateVersion === o) return eC(e, s), c
						} else s.uniforms = ee.getUniforms(e), e.onBuild(n, s, m), e.onBeforeCompile(s, m), c = ee.acquireProgram(s, l), u.set(l, c), i.uniforms = s.uniforms;
						var h = i.uniforms;
						(e.isShaderMaterial || e.isRawShaderMaterial) && !0 !== e.clipping || (h.clippingPlanes = er.uniform), eC(e, s), i.needsLights = e.isMeshLambertMaterial || e.isMeshToonMaterial || e.isMeshPhongMaterial || e.isMeshStandardMaterial || e.isShadowMaterial || e.isShaderMaterial && !0 === e.lights, i.lightsStateVersion = o, i.needsLights && (h.ambientLightColor.value = r.state.ambient, h.lightProbe.value = r.state.probe, h.directionalLights.value = r.state.directional, h.directionalLightShadows.value = r.state.directionalShadow, h.spotLights.value = r.state.spot, h.spotLightShadows.value = r.state.spotShadow, h.rectAreaLights.value = r.state.rectArea, h.ltc_1.value = r.state.rectAreaLTC1, h.ltc_2.value = r.state.rectAreaLTC2, h.pointLights.value = r.state.point, h.pointLightShadows.value = r.state.pointShadow, h.hemisphereLights.value = r.state.hemi, h.directionalShadowMap.value = r.state.directionalShadowMap, h.directionalShadowMatrix.value = r.state.directionalShadowMatrix, h.spotShadowMap.value = r.state.spotShadowMap, h.spotShadowMatrix.value = r.state.spotShadowMatrix, h.pointShadowMap.value = r.state.pointShadowMap, h.pointShadowMatrix.value = r.state.pointShadowMatrix);
						var f = c.getUniforms(),
							p = iB.seqWithValue(f.seq, h);
						return i.currentProgram = c, i.uniformsList = p, c
					}

					function eC(e, t) {
						var n = q.get(e);
						n.outputEncoding = t.outputEncoding, n.instancing = t.instancing, n.skinning = t.skinning, n.morphTargets = t.morphTargets, n.morphNormals = t.morphNormals, n.morphTargetsCount = t.morphTargetsCount, n.numClippingPlanes = t.numClippingPlanes, n.numIntersection = t.numClipIntersection, n.vertexAlphas = t.vertexAlphas, n.vertexTangents = t.vertexTangents, n.toneMapping = t.toneMapping
					}
					eA.setAnimationLoop(function(e) {
						eS && eS(e)
					}), "undefined" != typeof window && eA.setContext(window), this.setAnimationLoop = function(e) {
						eS = e, e_.setAnimationLoop(e), null === e ? eA.stop() : eA.start()
					}, e_.addEventListener("sessionstart", eT), e_.addEventListener("sessionend", eE), this.render = function(e, t) {
						if (void 0 !== t && !0 !== t.isCamera) return void console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");
						if (!0 !== v) {
							!0 === e.autoUpdate && e.updateMatrixWorld(), null === t.parent && t.updateMatrixWorld(), !0 === e_.enabled && !0 === e_.isPresenting && (!0 === e_.cameraAutoUpdate && e_.updateCamera(t), t = e_.getCamera()), !0 === e.isScene && e.onBeforeRender(m, e, t, x), (d = ei.get(e, p.length)).init(), p.push(d), z.multiplyMatrices(t.projectionMatrix, t.matrixWorldInverse), D.setFromProjectionMatrix(z), N = this.localClippingEnabled, I = er.init(this.clippingPlanes, N, t), (h = en.get(e, f.length)).init(), f.push(h),
								function e(t, n, i, r) {
									if (!1 !== t.visible) {
										if (t.layers.test(n.layers)) {
											if (t.isGroup) i = t.renderOrder;
											else if (t.isLOD) !0 === t.autoUpdate && t.update(n);
											else if (t.isLight) d.pushLight(t), t.castShadow && d.pushShadow(t);
											else if (t.isSprite) {
												if (!t.frustumCulled || D.intersectsSprite(t)) {
													r && U.setFromMatrixPosition(t.matrixWorld).applyMatrix4(z);
													var a = $.update(t),
														o = t.material;
													o.visible && h.push(t, a, o, i, U.z, null)
												}
											} else if ((t.isMesh || t.isLine || t.isPoints) && (t.isSkinnedMesh && t.skeleton.frame !== j.render.frame && (t.skeleton.update(), t.skeleton.frame = j.render.frame), !t.frustumCulled || D.intersectsObject(t))) {
												r && U.setFromMatrixPosition(t.matrixWorld).applyMatrix4(z);
												var s = $.update(t),
													l = t.material;
												if (Array.isArray(l))
													for (var u = s.groups, c = 0, f = u.length; c < f; c++) {
														var p = u[c],
															m = l[p.materialIndex];
														m && m.visible && h.push(t, s, m, i, U.z, p)
													} else l.visible && h.push(t, s, l, i, U.z, null)
											}
										}
										for (var v = t.children, g = 0, y = v.length; g < y; g++) e(v[g], n, i, r)
									}
								}(e, t, 0, m.sortObjects), h.finish(), !0 === m.sortObjects && h.sort(k, R), !0 === I && er.beginShadows();
							var n = d.state.shadowsArray;
							if (el.render(n, e, t), !0 === I && er.endShadows(), !0 === this.info.autoReset && this.info.reset(), ec.render(h, e), d.setupLights(m.physicallyCorrectLights), t.isArrayCamera)
								for (var i = t.cameras, r = 0, a = i.length; r < a; r++) {
									var o = i[r];
									ek(h, e, o, o.viewport)
								} else ek(h, e, t);
							null !== x && (Y.updateMultisampleRenderTarget(x), Y.updateRenderTargetMipmap(x)), !0 === e.isScene && e.onAfterRender(m, e, t), W.buffers.depth.setTest(!0), W.buffers.depth.setMask(!0), W.buffers.color.setMask(!0), W.setPolygonOffset(!1), em.resetDefaultState(), _ = -1, b = null, p.pop(), d = p.length > 0 ? p[p.length - 1] : null, f.pop(), h = f.length > 0 ? f[f.length - 1] : null
						}
					}, this.getActiveCubeFace = function() {
						return g
					}, this.getActiveMipmapLevel = function() {
						return y
					}, this.getRenderTarget = function() {
						return x
					}, this.setRenderTargetTextures = function(e, t, n) {
						q.get(e.texture).__webglTexture = t, q.get(e.depthTexture).__webglTexture = n;
						var i = q.get(e);
						i.__hasExternalTextures = !0, i.__hasExternalTextures && (i.__autoAllocateDepthBuffer = void 0 === n, i.__autoAllocateDepthBuffer || e.useRenderToTexture && (console.warn("render-to-texture extension was disabled because an external texture was provided"), e.useRenderToTexture = !1, e.useRenderbuffer = !0))
					}, this.setRenderTargetFramebuffer = function(e, t) {
						var n = q.get(e);
						n.__webglFramebuffer = t, n.__useDefaultFramebuffer = void 0 === t
					}, this.setRenderTarget = function(e) {
						var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
							n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
						x = e, g = t, y = n;
						var i = !0;
						if (e) {
							var r = q.get(e);
							void 0 !== r.__useDefaultFramebuffer ? (W.bindFramebuffer(36160, null), i = !1) : void 0 === r.__webglFramebuffer ? Y.setupRenderTarget(e) : r.__hasExternalTextures && Y.rebindTextures(e, q.get(e.texture).__webglTexture, q.get(e.depthTexture).__webglTexture)
						}
						var a = null,
							o = !1,
							s = !1;
						if (e) {
							var l = e.texture;
							(l.isDataTexture3D || l.isDataTexture2DArray) && (s = !0);
							var u = q.get(e).__webglFramebuffer;
							e.isWebGLCubeRenderTarget ? (a = u[t], o = !0) : a = e.useRenderbuffer ? q.get(e).__webglMultisampledFramebuffer : u, w.copy(e.viewport), M.copy(e.scissor), S = e.scissorTest
						} else w.copy(L).multiplyScalar(A).floor(), M.copy(C).multiplyScalar(A).floor(), S = P;
						if (W.bindFramebuffer(36160, a) && G.drawBuffers && i && W.drawBuffers(e, a), W.viewport(w), W.scissor(M), W.setScissorTest(S), o) {
							var c = q.get(e.texture);
							ev.framebufferTexture2D(36160, 36064, 34069 + t, c.__webglTexture, n)
						} else if (s) {
							var h = q.get(e.texture);
							ev.framebufferTextureLayer(36160, 36064, h.__webglTexture, n || 0, t || 0)
						}
						_ = -1
					}, this.readRenderTargetPixels = function(e, t, n, i, r, a, o) {
						if (!e || !e.isWebGLRenderTarget) return void console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");
						var s = q.get(e).__webglFramebuffer;
						if (e.isWebGLCubeRenderTarget && void 0 !== o && (s = s[o]), s) {
							W.bindFramebuffer(36160, s);
							try {
								var l = e.texture,
									u = l.format,
									c = l.type;
								if (1023 !== u && ep.convert(u) !== ev.getParameter(35739)) return void console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");
								var h = 1016 === c && (V.has("EXT_color_buffer_half_float") || G.isWebGL2 && V.has("EXT_color_buffer_float"));
								if (!(1009 === c || ep.convert(c) === ev.getParameter(35738) || 1015 === c && (G.isWebGL2 || V.has("OES_texture_float") || V.has("WEBGL_color_buffer_float")) || h)) return void console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");
								36053 === ev.checkFramebufferStatus(36160) ? t >= 0 && t <= e.width - i && n >= 0 && n <= e.height - r && ev.readPixels(t, n, i, r, ep.convert(u), ep.convert(c), a) : console.error("THREE.WebGLRenderer.readRenderTargetPixels: readPixels from renderTarget failed. Framebuffer not complete.")
							} finally {
								var d = null !== x ? q.get(x).__webglFramebuffer : null;
								W.bindFramebuffer(36160, d)
							}
						}
					}, this.copyFramebufferToTexture = function(e, t) {
						var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
						if (!0 !== t.isFramebufferTexture) return void console.error("THREE.WebGLRenderer: copyFramebufferToTexture() can only be used with FramebufferTexture.");
						var i = Math.pow(2, -n),
							r = Math.floor(t.image.width * i),
							a = Math.floor(t.image.height * i);
						Y.setTexture2D(t, 0), ev.copyTexSubImage2D(3553, n, 0, 0, e.x, e.y, r, a), W.unbindTexture()
					}, this.copyTextureToTexture = function(e, t, n) {
						var i = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0,
							r = t.image.width,
							a = t.image.height,
							o = ep.convert(n.format),
							s = ep.convert(n.type);
						Y.setTexture2D(n, 0), ev.pixelStorei(37440, n.flipY), ev.pixelStorei(37441, n.premultiplyAlpha), ev.pixelStorei(3317, n.unpackAlignment), t.isDataTexture ? ev.texSubImage2D(3553, i, e.x, e.y, r, a, o, s, t.image.data) : t.isCompressedTexture ? ev.compressedTexSubImage2D(3553, i, e.x, e.y, t.mipmaps[0].width, t.mipmaps[0].height, o, t.mipmaps[0].data) : ev.texSubImage2D(3553, i, e.x, e.y, o, s, t.image), 0 === i && n.generateMipmaps && ev.generateMipmap(3553), W.unbindTexture()
					}, this.copyTextureToTexture3D = function(e, t, n, i) {
						var r, a = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 0;
						if (m.isWebGL1Renderer) return void console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");
						var o = e.max.x - e.min.x + 1,
							s = e.max.y - e.min.y + 1,
							l = e.max.z - e.min.z + 1,
							u = ep.convert(i.format),
							c = ep.convert(i.type);
						if (i.isDataTexture3D) Y.setTexture3D(i, 0), r = 32879;
						else {
							if (!i.isDataTexture2DArray) return void console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");
							Y.setTexture2DArray(i, 0), r = 35866
						}
						ev.pixelStorei(37440, i.flipY), ev.pixelStorei(37441, i.premultiplyAlpha), ev.pixelStorei(3317, i.unpackAlignment);
						var h = ev.getParameter(3314),
							d = ev.getParameter(32878),
							f = ev.getParameter(3316),
							p = ev.getParameter(3315),
							v = ev.getParameter(32877),
							g = n.isCompressedTexture ? n.mipmaps[0] : n.image;
						ev.pixelStorei(3314, g.width), ev.pixelStorei(32878, g.height), ev.pixelStorei(3316, e.min.x), ev.pixelStorei(3315, e.min.y), ev.pixelStorei(32877, e.min.z), n.isDataTexture || n.isDataTexture3D ? ev.texSubImage3D(r, a, t.x, t.y, t.z, o, s, l, u, c, g.data) : n.isCompressedTexture ? (console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."), ev.compressedTexSubImage3D(r, a, t.x, t.y, t.z, o, s, l, u, g.data)) : ev.texSubImage3D(r, a, t.x, t.y, t.z, o, s, l, u, c, g), ev.pixelStorei(3314, h), ev.pixelStorei(32878, d), ev.pixelStorei(3316, f), ev.pixelStorei(3315, p), ev.pixelStorei(32877, v), 0 === a && i.generateMipmaps && ev.generateMipmap(r), W.unbindTexture()
					}, this.initTexture = function(e) {
						Y.setTexture2D(e, 0), W.unbindTexture()
					}, this.resetState = function() {
						g = 0, y = 0, x = null, W.reset(), em.reset()
					}, "undefined" != typeof __THREE_DEVTOOLS__ && __THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe", {
						detail: this
					}))
				}
				rb.prototype.isWebGLRenderer = !0,
					function(e) {
						function t() {
							return d(this, t), h(this, t, arguments)
						}
						return y(t, e), t
					}(rb).prototype.isWebGL1Renderer = !0;
				var rw = function(e) {
					function t() {
						var e;
						return d(this, t), (e = h(this, t)).type = "Scene", e.background = null, e.environment = null, e.fog = null, e.overrideMaterial = null, e.autoUpdate = !0, "undefined" != typeof __THREE_DEVTOOLS__ && __THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe", {
							detail: e
						})), e
					}
					return y(t, e), p(t, [{
						key: "copy",
						value: function(e, n) {
							return v(g(t.prototype), "copy", this).call(this, e, n), null !== e.background && (this.background = e.background.clone()), null !== e.environment && (this.environment = e.environment.clone()), null !== e.fog && (this.fog = e.fog.clone()), null !== e.overrideMaterial && (this.overrideMaterial = e.overrideMaterial.clone()), this.autoUpdate = e.autoUpdate, this.matrixAutoUpdate = e.matrixAutoUpdate, this
						}
					}, {
						key: "toJSON",
						value: function(e) {
							var n = v(g(t.prototype), "toJSON", this).call(this, e);
							return null !== this.fog && (n.object.fog = this.fog.toJSON()), n
						}
					}]), t
				}(tt);
				rw.prototype.isScene = !0;
				var rM = function() {
					function e(t, n) {
						d(this, e), this.array = t, this.stride = n, this.count = void 0 !== t ? t.length / n : 0, this.usage = 35044, this.updateRange = {
							offset: 0,
							count: -1
						}, this.version = 0, this.uuid = B()
					}
					return p(e, [{
						key: "onUploadCallback",
						value: function() {}
					}, {
						key: "needsUpdate",
						set: function(e) {
							!0 === e && this.version++
						}
					}, {
						key: "setUsage",
						value: function(e) {
							return this.usage = e, this
						}
					}, {
						key: "copy",
						value: function(e) {
							return this.array = new e.array.constructor(e.array), this.count = e.count, this.stride = e.stride, this.usage = e.usage, this
						}
					}, {
						key: "copyAt",
						value: function(e, t, n) {
							e *= this.stride, n *= t.stride;
							for (var i = 0, r = this.stride; i < r; i++) this.array[e + i] = t.array[n + i];
							return this
						}
					}, {
						key: "set",
						value: function(e) {
							var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
							return this.array.set(e, t), this
						}
					}, {
						key: "clone",
						value: function(e) {
							void 0 === e.arrayBuffers && (e.arrayBuffers = {}), void 0 === this.array.buffer._uuid && (this.array.buffer._uuid = B()), void 0 === e.arrayBuffers[this.array.buffer._uuid] && (e.arrayBuffers[this.array.buffer._uuid] = this.array.slice(0).buffer);
							var t = new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),
								n = new this.constructor(t, this.stride);
							return n.setUsage(this.usage), n
						}
					}, {
						key: "onUpload",
						value: function(e) {
							return this.onUploadCallback = e, this
						}
					}, {
						key: "toJSON",
						value: function(e) {
							return void 0 === e.arrayBuffers && (e.arrayBuffers = {}), void 0 === this.array.buffer._uuid && (this.array.buffer._uuid = B()), void 0 === e.arrayBuffers[this.array.buffer._uuid] && (e.arrayBuffers[this.array.buffer._uuid] = Array.prototype.slice.call(new Uint32Array(this.array.buffer))), {
								uuid: this.uuid,
								buffer: this.array.buffer._uuid,
								type: this.array.constructor.name,
								stride: this.stride
							}
						}
					}]), e
				}();
				rM.prototype.isInterleavedBuffer = !0;
				var rS = new eu,
					rT = function() {
						function e(t, n, i) {
							var r = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
							d(this, e), this.name = "", this.data = t, this.itemSize = n, this.offset = i, this.normalized = !0 === r
						}
						return p(e, [{
							key: "count",
							get: function() {
								return this.data.count
							}
						}, {
							key: "array",
							get: function() {
								return this.data.array
							}
						}, {
							key: "needsUpdate",
							set: function(e) {
								this.data.needsUpdate = e
							}
						}, {
							key: "applyMatrix4",
							value: function(e) {
								for (var t = 0, n = this.data.count; t < n; t++) rS.x = this.getX(t), rS.y = this.getY(t), rS.z = this.getZ(t), rS.applyMatrix4(e), this.setXYZ(t, rS.x, rS.y, rS.z);
								return this
							}
						}, {
							key: "applyNormalMatrix",
							value: function(e) {
								for (var t = 0, n = this.count; t < n; t++) rS.x = this.getX(t), rS.y = this.getY(t), rS.z = this.getZ(t), rS.applyNormalMatrix(e), this.setXYZ(t, rS.x, rS.y, rS.z);
								return this
							}
						}, {
							key: "transformDirection",
							value: function(e) {
								for (var t = 0, n = this.count; t < n; t++) rS.x = this.getX(t), rS.y = this.getY(t), rS.z = this.getZ(t), rS.transformDirection(e), this.setXYZ(t, rS.x, rS.y, rS.z);
								return this
							}
						}, {
							key: "setX",
							value: function(e, t) {
								return this.data.array[e * this.data.stride + this.offset] = t, this
							}
						}, {
							key: "setY",
							value: function(e, t) {
								return this.data.array[e * this.data.stride + this.offset + 1] = t, this
							}
						}, {
							key: "setZ",
							value: function(e, t) {
								return this.data.array[e * this.data.stride + this.offset + 2] = t, this
							}
						}, {
							key: "setW",
							value: function(e, t) {
								return this.data.array[e * this.data.stride + this.offset + 3] = t, this
							}
						}, {
							key: "getX",
							value: function(e) {
								return this.data.array[e * this.data.stride + this.offset]
							}
						}, {
							key: "getY",
							value: function(e) {
								return this.data.array[e * this.data.stride + this.offset + 1]
							}
						}, {
							key: "getZ",
							value: function(e) {
								return this.data.array[e * this.data.stride + this.offset + 2]
							}
						}, {
							key: "getW",
							value: function(e) {
								return this.data.array[e * this.data.stride + this.offset + 3]
							}
						}, {
							key: "setXY",
							value: function(e, t, n) {
								return e = e * this.data.stride + this.offset, this.data.array[e + 0] = t, this.data.array[e + 1] = n, this
							}
						}, {
							key: "setXYZ",
							value: function(e, t, n, i) {
								return e = e * this.data.stride + this.offset, this.data.array[e + 0] = t, this.data.array[e + 1] = n, this.data.array[e + 2] = i, this
							}
						}, {
							key: "setXYZW",
							value: function(e, t, n, i, r) {
								return e = e * this.data.stride + this.offset, this.data.array[e + 0] = t, this.data.array[e + 1] = n, this.data.array[e + 2] = i, this.data.array[e + 3] = r, this
							}
						}, {
							key: "clone",
							value: function(t) {
								if (void 0 === t) {
									console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interlaved buffer attribute will deinterleave buffer data.");
									for (var n = [], i = 0; i < this.count; i++)
										for (var r = i * this.data.stride + this.offset, a = 0; a < this.itemSize; a++) n.push(this.data.array[r + a]);
									return new ty(new this.array.constructor(n), this.itemSize, this.normalized)
								}
								return void 0 === t.interleavedBuffers && (t.interleavedBuffers = {}), void 0 === t.interleavedBuffers[this.data.uuid] && (t.interleavedBuffers[this.data.uuid] = this.data.clone(t)), new e(t.interleavedBuffers[this.data.uuid], this.itemSize, this.offset, this.normalized)
							}
						}, {
							key: "toJSON",
							value: function(e) {
								if (void 0 === e) {
									console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interlaved buffer attribute will deinterleave buffer data.");
									for (var t = [], n = 0; n < this.count; n++)
										for (var i = n * this.data.stride + this.offset, r = 0; r < this.itemSize; r++) t.push(this.data.array[i + r]);
									return {
										itemSize: this.itemSize,
										type: this.array.constructor.name,
										array: t,
										normalized: this.normalized
									}
								}
								return void 0 === e.interleavedBuffers && (e.interleavedBuffers = {}), void 0 === e.interleavedBuffers[this.data.uuid] && (e.interleavedBuffers[this.data.uuid] = this.data.toJSON(e)), {
									isInterleavedBufferAttribute: !0,
									itemSize: this.itemSize,
									data: this.data.uuid,
									offset: this.offset,
									normalized: this.normalized
								}
							}
						}]), e
					}();
				rT.prototype.isInterleavedBufferAttribute = !0;
				var rE = function(e) {
					function t(e) {
						var n;
						return d(this, t), (n = h(this, t)).type = "SpriteMaterial", n.color = new ee(0xffffff), n.map = null, n.alphaMap = null, n.rotation = 0, n.sizeAttenuation = !0, n.transparent = !0, n.setValues(e), n
					}
					return y(t, e), p(t, [{
						key: "copy",
						value: function(e) {
							return v(g(t.prototype), "copy", this).call(this, e), this.color.copy(e.color), this.map = e.map, this.alphaMap = e.alphaMap, this.rotation = e.rotation, this.sizeAttenuation = e.sizeAttenuation, this
						}
					}]), t
				}(tp);
				rE.prototype.isSpriteMaterial = !0;
				var rA = new eu,
					rk = new eu,
					rR = new eu,
					rL = new W,
					rC = new W,
					rP = new eB,
					rD = new eu,
					rI = new eu,
					rN = new eu,
					rO = new W,
					rz = new W,
					rU = new W;

				function rF(e, t, n, i, r, a) {
					rL.subVectors(e, n).addScalar(.5).multiply(i), void 0 !== r ? (rC.x = a * rL.x - r * rL.y, rC.y = r * rL.x + a * rL.y) : rC.copy(rL), e.copy(t), e.x += rC.x, e.y += rC.y, e.applyMatrix4(rP)
				}(function(e) {
					function t(e) {
						if (d(this, t), (n = h(this, t)).type = "Sprite", void 0 === r) {
							r = new tR;
							var n, i = new rM(new Float32Array([-.5, -.5, 0, 0, 0, .5, -.5, 0, 1, 0, .5, .5, 0, 1, 1, -.5, .5, 0, 0, 1]), 5);
							r.setIndex([0, 1, 2, 0, 2, 3]), r.setAttribute("position", new rT(i, 3, 0, !1)), r.setAttribute("uv", new rT(i, 2, 3, !1))
						}
						return n.geometry = r, n.material = void 0 !== e ? e : new rE, n.center = new W(.5, .5), n
					}
					return y(t, e), p(t, [{
						key: "raycast",
						value: function(e, t) {
							null === e.camera && console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'), rk.setFromMatrixScale(this.matrixWorld), rP.copy(e.camera.matrixWorld), this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse, this.matrixWorld), rR.setFromMatrixPosition(this.modelViewMatrix), e.camera.isPerspectiveCamera && !1 === this.material.sizeAttenuation && rk.multiplyScalar(-rR.z);
							var n, i, r = this.material.rotation;
							0 !== r && (i = Math.cos(r), n = Math.sin(r));
							var a = this.center;
							rF(rD.set(-.5, -.5, 0), rR, a, rk, n, i), rF(rI.set(.5, -.5, 0), rR, a, rk, n, i), rF(rN.set(.5, .5, 0), rR, a, rk, n, i), rO.set(0, 0), rz.set(1, 0), rU.set(1, 1);
							var o = e.ray.intersectTriangle(rD, rI, rN, !1, rA);
							if (null !== o || (rF(rI.set(-.5, .5, 0), rR, a, rk, n, i), rz.set(0, 1), null !== (o = e.ray.intersectTriangle(rD, rN, rI, !1, rA)))) {
								var s = e.ray.origin.distanceTo(rA);
								s < e.near || s > e.far || t.push({
									distance: s,
									point: rA.clone(),
									uv: td.getUV(rA, rD, rI, rN, rO, rz, rU, new W),
									face: null,
									object: this
								})
							}
						}
					}, {
						key: "copy",
						value: function(e) {
							return v(g(t.prototype), "copy", this).call(this, e), void 0 !== e.center && this.center.copy(e.center), this.material = e.material, this
						}
					}]), t
				})(tt).prototype.isSprite = !0;
				var rB = new eu,
					rH = new ea,
					rV = new ea,
					rG = new eu,
					rW = new eB,
					rj = function(e) {
						function t(e, n) {
							var i;
							return d(this, t), (i = h(this, t, [e, n])).type = "SkinnedMesh", i.bindMode = "attached", i.bindMatrix = new eB, i.bindMatrixInverse = new eB, i
						}
						return y(t, e), p(t, [{
							key: "copy",
							value: function(e) {
								return v(g(t.prototype), "copy", this).call(this, e), this.bindMode = e.bindMode, this.bindMatrix.copy(e.bindMatrix), this.bindMatrixInverse.copy(e.bindMatrixInverse), this.skeleton = e.skeleton, this
							}
						}, {
							key: "bind",
							value: function(e, t) {
								this.skeleton = e, void 0 === t && (this.updateMatrixWorld(!0), this.skeleton.calculateInverses(), t = this.matrixWorld), this.bindMatrix.copy(t), this.bindMatrixInverse.copy(t).invert()
							}
						}, {
							key: "pose",
							value: function() {
								this.skeleton.pose()
							}
						}, {
							key: "normalizeSkinWeights",
							value: function() {
								for (var e = new ea, t = this.geometry.attributes.skinWeight, n = 0, i = t.count; n < i; n++) {
									e.x = t.getX(n), e.y = t.getY(n), e.z = t.getZ(n), e.w = t.getW(n);
									var r = 1 / e.manhattanLength();
									r !== 1 / 0 ? e.multiplyScalar(r) : e.set(1, 0, 0, 0), t.setXYZW(n, e.x, e.y, e.z, e.w)
								}
							}
						}, {
							key: "updateMatrixWorld",
							value: function(e) {
								v(g(t.prototype), "updateMatrixWorld", this).call(this, e), "attached" === this.bindMode ? this.bindMatrixInverse.copy(this.matrixWorld).invert() : "detached" === this.bindMode ? this.bindMatrixInverse.copy(this.bindMatrix).invert() : console.warn("THREE.SkinnedMesh: Unrecognized bindMode: " + this.bindMode)
							}
						}, {
							key: "boneTransform",
							value: function(e, t) {
								var n = this.skeleton,
									i = this.geometry;
								rH.fromBufferAttribute(i.attributes.skinIndex, e), rV.fromBufferAttribute(i.attributes.skinWeight, e), rB.copy(t).applyMatrix4(this.bindMatrix), t.set(0, 0, 0);
								for (var r = 0; r < 4; r++) {
									var a = rV.getComponent(r);
									if (0 !== a) {
										var o = rH.getComponent(r);
										rW.multiplyMatrices(n.bones[o].matrixWorld, n.boneInverses[o]), t.addScaledVector(rG.copy(rB).applyMatrix4(rW), a)
									}
								}
								return t.applyMatrix4(this.bindMatrixInverse)
							}
						}]), t
					}(tX);
				rj.prototype.isSkinnedMesh = !0,
					function(e) {
						function t() {
							var e;
							return d(this, t), (e = h(this, t)).type = "Bone", e
						}
						return y(t, e), t
					}(tt).prototype.isBone = !0,
					function(e) {
						function t() {
							var e, n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
								i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1,
								r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1,
								a = arguments.length > 3 ? arguments[3] : void 0,
								o = arguments.length > 4 ? arguments[4] : void 0,
								s = arguments.length > 5 ? arguments[5] : void 0,
								l = arguments.length > 6 ? arguments[6] : void 0,
								u = arguments.length > 7 ? arguments[7] : void 0,
								c = arguments.length > 8 && void 0 !== arguments[8] ? arguments[8] : 1003,
								f = arguments.length > 9 && void 0 !== arguments[9] ? arguments[9] : 1003,
								p = arguments.length > 10 ? arguments[10] : void 0,
								m = arguments.length > 11 ? arguments[11] : void 0;
							return d(this, t), (e = h(this, t, [null, s, l, u, c, f, a, o, p, m])).image = {
								data: n,
								width: i,
								height: r
							}, e.magFilter = c, e.minFilter = f, e.generateMipmaps = !1, e.flipY = !1, e.unpackAlignment = 1, e
						}
						return y(t, e), t
					}(ei).prototype.isDataTexture = !0;
				var rq = function(e) {
					function t(e, n, i) {
						var r, a = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 1;
						return d(this, t), "number" == typeof i && (a = i, i = !1, console.error("THREE.InstancedBufferAttribute: The constructor now expects normalized as the third argument.")), (r = h(this, t, [e, n, i])).meshPerAttribute = a, r
					}
					return y(t, e), p(t, [{
						key: "copy",
						value: function(e) {
							return v(g(t.prototype), "copy", this).call(this, e), this.meshPerAttribute = e.meshPerAttribute, this
						}
					}, {
						key: "toJSON",
						value: function() {
							var e = v(g(t.prototype), "toJSON", this).call(this);
							return e.meshPerAttribute = this.meshPerAttribute, e.isInstancedBufferAttribute = !0, e
						}
					}]), t
				}(ty);
				rq.prototype.isInstancedBufferAttribute = !0;
				var rX = new eB,
					rY = new eB,
					rJ = [],
					rZ = new tX;
				(function(e) {
					function t(e, n, i) {
						var r;
						return d(this, t), (r = h(this, t, [e, n])).instanceMatrix = new rq(new Float32Array(16 * i), 16), r.instanceColor = null, r.count = i, r.frustumCulled = !1, r
					}
					return y(t, e), p(t, [{
						key: "copy",
						value: function(e) {
							return v(g(t.prototype), "copy", this).call(this, e), this.instanceMatrix.copy(e.instanceMatrix), null !== e.instanceColor && (this.instanceColor = e.instanceColor.clone()), this.count = e.count, this
						}
					}, {
						key: "getColorAt",
						value: function(e, t) {
							t.fromArray(this.instanceColor.array, 3 * e)
						}
					}, {
						key: "getMatrixAt",
						value: function(e, t) {
							t.fromArray(this.instanceMatrix.array, 16 * e)
						}
					}, {
						key: "raycast",
						value: function(e, t) {
							var n = this.matrixWorld,
								i = this.count;
							if (rZ.geometry = this.geometry, rZ.material = this.material, void 0 !== rZ.material)
								for (var r = 0; r < i; r++) {
									this.getMatrixAt(r, rX), rY.multiplyMatrices(n, rX), rZ.matrixWorld = rY, rZ.raycast(e, rJ);
									for (var a = 0, o = rJ.length; a < o; a++) {
										var s = rJ[a];
										s.instanceId = r, s.object = this, t.push(s)
									}
									rJ.length = 0
								}
						}
					}, {
						key: "setColorAt",
						value: function(e, t) {
							null === this.instanceColor && (this.instanceColor = new rq(new Float32Array(3 * this.instanceMatrix.count), 3)), t.toArray(this.instanceColor.array, 3 * e)
						}
					}, {
						key: "setMatrixAt",
						value: function(e, t) {
							t.toArray(this.instanceMatrix.array, 16 * e)
						}
					}, {
						key: "updateMorphTargets",
						value: function() {}
					}, {
						key: "dispose",
						value: function() {
							this.dispatchEvent({
								type: "dispose"
							})
						}
					}]), t
				})(tX).prototype.isInstancedMesh = !0;
				var rK = function(e) {
					function t(e) {
						var n;
						return d(this, t), (n = h(this, t)).type = "LineBasicMaterial", n.color = new ee(0xffffff), n.linewidth = 1, n.linecap = "round", n.linejoin = "round", n.setValues(e), n
					}
					return y(t, e), p(t, [{
						key: "copy",
						value: function(e) {
							return v(g(t.prototype), "copy", this).call(this, e), this.color.copy(e.color), this.linewidth = e.linewidth, this.linecap = e.linecap, this.linejoin = e.linejoin, this
						}
					}]), t
				}(tp);
				rK.prototype.isLineBasicMaterial = !0;
				var rQ = new eu,
					r$ = new eu,
					r0 = new eB,
					r1 = new eF,
					r3 = new eC,
					r2 = function(e) {
						function t() {
							var e, n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : new tR,
								i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : new rK;
							return d(this, t), (e = h(this, t)).type = "Line", e.geometry = n, e.material = i, e.updateMorphTargets(), e
						}
						return y(t, e), p(t, [{
							key: "copy",
							value: function(e) {
								return v(g(t.prototype), "copy", this).call(this, e), this.material = e.material, this.geometry = e.geometry, this
							}
						}, {
							key: "computeLineDistances",
							value: function() {
								var e = this.geometry;
								if (e.isBufferGeometry) {
									if (null === e.index) {
										for (var t = e.attributes.position, n = [0], i = 1, r = t.count; i < r; i++) rQ.fromBufferAttribute(t, i - 1), r$.fromBufferAttribute(t, i), n[i] = n[i - 1], n[i] += rQ.distanceTo(r$);
										e.setAttribute("lineDistance", new tb(n, 1))
									} else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.")
								} else e.isGeometry && console.error("THREE.Line.computeLineDistances() no longer supports THREE.Geometry. Use THREE.BufferGeometry instead.");
								return this
							}
						}, {
							key: "raycast",
							value: function(e, t) {
								var n = this.geometry,
									i = this.matrixWorld,
									r = e.params.Line.threshold,
									a = n.drawRange;
								if (null === n.boundingSphere && n.computeBoundingSphere(), r3.copy(n.boundingSphere), r3.applyMatrix4(i), r3.radius += r, !1 !== e.ray.intersectsSphere(r3)) {
									r0.copy(i).invert(), r1.copy(e.ray).applyMatrix4(r0);
									var o = r / ((this.scale.x + this.scale.y + this.scale.z) / 3),
										s = o * o,
										l = new eu,
										u = new eu,
										c = new eu,
										h = new eu,
										d = this.isLineSegments ? 2 : 1;
									if (n.isBufferGeometry) {
										var f = n.index,
											p = n.attributes.position;
										if (null !== f)
											for (var m = Math.max(0, a.start), v = Math.min(f.count, a.start + a.count) - 1; m < v; m += d) {
												var g = f.getX(m),
													y = f.getX(m + 1);
												if (l.fromBufferAttribute(p, g), u.fromBufferAttribute(p, y), !(r1.distanceSqToSegment(l, u, h, c) > s)) {
													h.applyMatrix4(this.matrixWorld);
													var x = e.ray.origin.distanceTo(h);
													x < e.near || x > e.far || t.push({
														distance: x,
														point: c.clone().applyMatrix4(this.matrixWorld),
														index: m,
														face: null,
														faceIndex: null,
														object: this
													})
												}
											} else
												for (var _ = Math.max(0, a.start), b = Math.min(p.count, a.start + a.count) - 1; _ < b; _ += d)
													if (l.fromBufferAttribute(p, _), u.fromBufferAttribute(p, _ + 1), !(r1.distanceSqToSegment(l, u, h, c) > s)) {
														h.applyMatrix4(this.matrixWorld);
														var w = e.ray.origin.distanceTo(h);
														w < e.near || w > e.far || t.push({
															distance: w,
															point: c.clone().applyMatrix4(this.matrixWorld),
															index: _,
															face: null,
															faceIndex: null,
															object: this
														})
													}
									} else n.isGeometry && console.error("THREE.Line.raycast() no longer supports THREE.Geometry. Use THREE.BufferGeometry instead.")
								}
							}
						}, {
							key: "updateMorphTargets",
							value: function() {
								var e = this.geometry;
								if (e.isBufferGeometry) {
									var t = e.morphAttributes,
										n = Object.keys(t);
									if (n.length > 0) {
										var i = t[n[0]];
										if (void 0 !== i) {
											this.morphTargetInfluences = [], this.morphTargetDictionary = {};
											for (var r = 0, a = i.length; r < a; r++) {
												var o = i[r].name || String(r);
												this.morphTargetInfluences.push(0), this.morphTargetDictionary[o] = r
											}
										}
									}
								} else {
									var s = e.morphTargets;
									void 0 !== s && s.length > 0 && console.error("THREE.Line.updateMorphTargets() does not support THREE.Geometry. Use THREE.BufferGeometry instead.")
								}
							}
						}]), t
					}(tt);
				r2.prototype.isLine = !0;
				var r4 = new eu,
					r5 = new eu,
					r6 = function(e) {
						function t(e, n) {
							var i;
							return d(this, t), (i = h(this, t, [e, n])).type = "LineSegments", i
						}
						return y(t, e), p(t, [{
							key: "computeLineDistances",
							value: function() {
								var e = this.geometry;
								if (e.isBufferGeometry) {
									if (null === e.index) {
										for (var t = e.attributes.position, n = [], i = 0, r = t.count; i < r; i += 2) r4.fromBufferAttribute(t, i), r5.fromBufferAttribute(t, i + 1), n[i] = 0 === i ? 0 : n[i - 1], n[i + 1] = n[i] + r4.distanceTo(r5);
										e.setAttribute("lineDistance", new tb(n, 1))
									} else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.")
								} else e.isGeometry && console.error("THREE.LineSegments.computeLineDistances() no longer supports THREE.Geometry. Use THREE.BufferGeometry instead.");
								return this
							}
						}]), t
					}(r2);
				r6.prototype.isLineSegments = !0,
					function(e) {
						function t(e, n) {
							var i;
							return d(this, t), (i = h(this, t, [e, n])).type = "LineLoop", i
						}
						return y(t, e), t
					}(r2).prototype.isLineLoop = !0;
				var r8 = function(e) {
					function t(e) {
						var n;
						return d(this, t), (n = h(this, t)).type = "PointsMaterial", n.color = new ee(0xffffff), n.map = null, n.alphaMap = null, n.size = 1, n.sizeAttenuation = !0, n.setValues(e), n
					}
					return y(t, e), p(t, [{
						key: "copy",
						value: function(e) {
							return v(g(t.prototype), "copy", this).call(this, e), this.color.copy(e.color), this.map = e.map, this.alphaMap = e.alphaMap, this.size = e.size, this.sizeAttenuation = e.sizeAttenuation, this
						}
					}]), t
				}(tp);
				r8.prototype.isPointsMaterial = !0;
				var r7 = new eB,
					r9 = new eF,
					ae = new eC,
					at = new eu,
					an = function(e) {
						function t() {
							var e, n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : new tR,
								i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : new r8;
							return d(this, t), (e = h(this, t)).type = "Points", e.geometry = n, e.material = i, e.updateMorphTargets(), e
						}
						return y(t, e), p(t, [{
							key: "copy",
							value: function(e) {
								return v(g(t.prototype), "copy", this).call(this, e), this.material = e.material, this.geometry = e.geometry, this
							}
						}, {
							key: "raycast",
							value: function(e, t) {
								var n = this.geometry,
									i = this.matrixWorld,
									r = e.params.Points.threshold,
									a = n.drawRange;
								if (null === n.boundingSphere && n.computeBoundingSphere(), ae.copy(n.boundingSphere), ae.applyMatrix4(i), ae.radius += r, !1 !== e.ray.intersectsSphere(ae)) {
									r7.copy(i).invert(), r9.copy(e.ray).applyMatrix4(r7);
									var o = r / ((this.scale.x + this.scale.y + this.scale.z) / 3),
										s = o * o;
									if (n.isBufferGeometry) {
										var l = n.index,
											u = n.attributes.position;
										if (null !== l)
											for (var c = Math.max(0, a.start), h = Math.min(l.count, a.start + a.count); c < h; c++) {
												var d = l.getX(c);
												at.fromBufferAttribute(u, d), ai(at, d, s, i, e, t, this)
											} else
												for (var f = Math.max(0, a.start), p = Math.min(u.count, a.start + a.count); f < p; f++) at.fromBufferAttribute(u, f), ai(at, f, s, i, e, t, this)
									} else console.error("THREE.Points.raycast() no longer supports THREE.Geometry. Use THREE.BufferGeometry instead.")
								}
							}
						}, {
							key: "updateMorphTargets",
							value: function() {
								var e = this.geometry;
								if (e.isBufferGeometry) {
									var t = e.morphAttributes,
										n = Object.keys(t);
									if (n.length > 0) {
										var i = t[n[0]];
										if (void 0 !== i) {
											this.morphTargetInfluences = [], this.morphTargetDictionary = {};
											for (var r = 0, a = i.length; r < a; r++) {
												var o = i[r].name || String(r);
												this.morphTargetInfluences.push(0), this.morphTargetDictionary[o] = r
											}
										}
									}
								} else {
									var s = e.morphTargets;
									void 0 !== s && s.length > 0 && console.error("THREE.Points.updateMorphTargets() does not support THREE.Geometry. Use THREE.BufferGeometry instead.")
								}
							}
						}]), t
					}(tt);

				function ai(e, t, n, i, r, a, o) {
					var s = r9.distanceSqToPoint(e);
					if (s < n) {
						var l = new eu;
						r9.closestPointToPoint(e, l), l.applyMatrix4(i);
						var u = r.ray.origin.distanceTo(l);
						if (u < r.near || u > r.far) return;
						a.push({
							distance: u,
							distanceToRay: Math.sqrt(s),
							point: l,
							index: t,
							face: null,
							object: o
						})
					}
				}
				an.prototype.isPoints = !0,
					function(e) {
						function t(e, n, i, r, a, o, s, l, u) {
							var c;
							return d(this, t), (c = h(this, t, [e, n, i, r, a, o, s, l, u])).minFilter = void 0 !== o ? o : 1006, c.magFilter = void 0 !== a ? a : 1006, c.generateMipmaps = !1, "requestVideoFrameCallback" in e && e.requestVideoFrameCallback(function t() {
								c.needsUpdate = !0, e.requestVideoFrameCallback(t)
							}), c
						}
						return y(t, e), p(t, [{
							key: "clone",
							value: function() {
								return new this.constructor(this.image).copy(this)
							}
						}, {
							key: "update",
							value: function() {
								var e = this.image;
								!1 == "requestVideoFrameCallback" in e && e.readyState >= e.HAVE_CURRENT_DATA && (this.needsUpdate = !0)
							}
						}]), t
					}(ei).prototype.isVideoTexture = !0,
					function(e) {
						function t(e, n, i) {
							var r;
							return d(this, t), (r = h(this, t, [{
								width: e,
								height: n
							}])).format = i, r.magFilter = 1003, r.minFilter = 1003, r.generateMipmaps = !1, r.needsUpdate = !0, r
						}
						return y(t, e), t
					}(ei).prototype.isFramebufferTexture = !0,
					function(e) {
						function t(e, n, i, r, a, o, s, l, u, c, f, p) {
							var m;
							return d(this, t), (m = h(this, t, [null, o, s, l, u, c, r, a, f, p])).image = {
								width: n,
								height: i
							}, m.mipmaps = e, m.flipY = !1, m.generateMipmaps = !1, m
						}
						return y(t, e), t
					}(ei).prototype.isCompressedTexture = !0,
					function(e) {
						function t(e, n, i, r, a, o, s, l, u) {
							var c;
							return d(this, t), (c = h(this, t, [e, n, i, r, a, o, s, l, u])).needsUpdate = !0, c
						}
						return y(t, e), t
					}(ei).prototype.isCanvasTexture = !0;
				var ar = function() {
						function e() {
							d(this, e), this.type = "Curve", this.arcLengthDivisions = 200
						}
						return p(e, [{
							key: "getPoint",
							value: function() {
								return console.warn("THREE.Curve: .getPoint() not implemented."), null
							}
						}, {
							key: "getPointAt",
							value: function(e, t) {
								var n = this.getUtoTmapping(e);
								return this.getPoint(n, t)
							}
						}, {
							key: "getPoints",
							value: function() {
								for (var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 5, t = [], n = 0; n <= e; n++) t.push(this.getPoint(n / e));
								return t
							}
						}, {
							key: "getSpacedPoints",
							value: function() {
								for (var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 5, t = [], n = 0; n <= e; n++) t.push(this.getPointAt(n / e));
								return t
							}
						}, {
							key: "getLength",
							value: function() {
								var e = this.getLengths();
								return e[e.length - 1]
							}
						}, {
							key: "getLengths",
							value: function() {
								var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this.arcLengthDivisions;
								if (this.cacheArcLengths && this.cacheArcLengths.length === e + 1 && !this.needsUpdate) return this.cacheArcLengths;
								this.needsUpdate = !1;
								var t, n = [],
									i = this.getPoint(0),
									r = 0;
								n.push(0);
								for (var a = 1; a <= e; a++) n.push(r += (t = this.getPoint(a / e)).distanceTo(i)), i = t;
								return this.cacheArcLengths = n, n
							}
						}, {
							key: "updateArcLengths",
							value: function() {
								this.needsUpdate = !0, this.getLengths()
							}
						}, {
							key: "getUtoTmapping",
							value: function(e, t) {
								var n = this.getLengths(),
									i = 0,
									r = n.length;
								a = t || e * n[r - 1];
								for (var a, o, s = 0, l = r - 1; s <= l;)
									if ((o = n[i = Math.floor(s + (l - s) / 2)] - a) < 0) s = i + 1;
									else {
										if (!(o > 0)) {
											l = i;
											break
										}
										l = i - 1
									} if (n[i = l] === a) return i / (r - 1);
								var u = n[i];
								return (i + (a - u) / (n[i + 1] - u)) / (r - 1)
							}
						}, {
							key: "getTangent",
							value: function(e, t) {
								var n = e - 1e-4,
									i = e + 1e-4;
								n < 0 && (n = 0), i > 1 && (i = 1);
								var r = this.getPoint(n),
									a = this.getPoint(i),
									o = t || (r.isVector2 ? new W : new eu);
								return o.copy(a).sub(r).normalize(), o
							}
						}, {
							key: "getTangentAt",
							value: function(e, t) {
								var n = this.getUtoTmapping(e);
								return this.getTangent(n, t)
							}
						}, {
							key: "computeFrenetFrames",
							value: function(e, t) {
								for (var n = new eu, i = [], r = [], a = [], o = new eu, s = new eB, l = 0; l <= e; l++) {
									var u = l / e;
									i[l] = this.getTangentAt(u, new eu)
								}
								r[0] = new eu, a[0] = new eu;
								var c = Number.MAX_VALUE,
									h = Math.abs(i[0].x),
									d = Math.abs(i[0].y),
									f = Math.abs(i[0].z);
								h <= c && (c = h, n.set(1, 0, 0)), d <= c && (c = d, n.set(0, 1, 0)), f <= c && n.set(0, 0, 1), o.crossVectors(i[0], n).normalize(), r[0].crossVectors(i[0], o), a[0].crossVectors(i[0], r[0]);
								for (var p = 1; p <= e; p++) {
									if (r[p] = r[p - 1].clone(), a[p] = a[p - 1].clone(), o.crossVectors(i[p - 1], i[p]), o.length() > Number.EPSILON) {
										o.normalize();
										var m = Math.acos(H(i[p - 1].dot(i[p]), -1, 1));
										r[p].applyMatrix4(s.makeRotationAxis(o, m))
									}
									a[p].crossVectors(i[p], r[p])
								}
								if (!0 === t) {
									var v = Math.acos(H(r[0].dot(r[e]), -1, 1));
									v /= e, i[0].dot(o.crossVectors(r[0], r[e])) > 0 && (v = -v);
									for (var g = 1; g <= e; g++) r[g].applyMatrix4(s.makeRotationAxis(i[g], v * g)), a[g].crossVectors(i[g], r[g])
								}
								return {
									tangents: i,
									normals: r,
									binormals: a
								}
							}
						}, {
							key: "clone",
							value: function() {
								return (new this.constructor).copy(this)
							}
						}, {
							key: "copy",
							value: function(e) {
								return this.arcLengthDivisions = e.arcLengthDivisions, this
							}
						}, {
							key: "toJSON",
							value: function() {
								var e = {
									metadata: {
										version: 4.5,
										type: "Curve",
										generator: "Curve.toJSON"
									}
								};
								return e.arcLengthDivisions = this.arcLengthDivisions, e.type = this.type, e
							}
						}, {
							key: "fromJSON",
							value: function(e) {
								return this.arcLengthDivisions = e.arcLengthDivisions, this
							}
						}]), e
					}(),
					aa = function(e) {
						function t() {
							var e, n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
								i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
								r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1,
								a = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 1,
								o = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 0,
								s = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 2 * Math.PI,
								l = arguments.length > 6 && void 0 !== arguments[6] && arguments[6],
								u = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : 0;
							return d(this, t), (e = h(this, t)).type = "EllipseCurve", e.aX = n, e.aY = i, e.xRadius = r, e.yRadius = a, e.aStartAngle = o, e.aEndAngle = s, e.aClockwise = l, e.aRotation = u, e
						}
						return y(t, e), p(t, [{
							key: "getPoint",
							value: function(e, t) {
								for (var n = t || new W, i = 2 * Math.PI, r = this.aEndAngle - this.aStartAngle, a = Math.abs(r) < Number.EPSILON; r < 0;) r += i;
								for (; r > i;) r -= i;
								r < Number.EPSILON && (r = a ? 0 : i), !0 !== this.aClockwise || a || (r === i ? r = -i : r -= i);
								var o = this.aStartAngle + e * r,
									s = this.aX + this.xRadius * Math.cos(o),
									l = this.aY + this.yRadius * Math.sin(o);
								if (0 !== this.aRotation) {
									var u = Math.cos(this.aRotation),
										c = Math.sin(this.aRotation),
										h = s - this.aX,
										d = l - this.aY;
									s = h * u - d * c + this.aX, l = h * c + d * u + this.aY
								}
								return n.set(s, l)
							}
						}, {
							key: "copy",
							value: function(e) {
								return v(g(t.prototype), "copy", this).call(this, e), this.aX = e.aX, this.aY = e.aY, this.xRadius = e.xRadius, this.yRadius = e.yRadius, this.aStartAngle = e.aStartAngle, this.aEndAngle = e.aEndAngle, this.aClockwise = e.aClockwise, this.aRotation = e.aRotation, this
							}
						}, {
							key: "toJSON",
							value: function() {
								var e = v(g(t.prototype), "toJSON", this).call(this);
								return e.aX = this.aX, e.aY = this.aY, e.xRadius = this.xRadius, e.yRadius = this.yRadius, e.aStartAngle = this.aStartAngle, e.aEndAngle = this.aEndAngle, e.aClockwise = this.aClockwise, e.aRotation = this.aRotation, e
							}
						}, {
							key: "fromJSON",
							value: function(e) {
								return v(g(t.prototype), "fromJSON", this).call(this, e), this.aX = e.aX, this.aY = e.aY, this.xRadius = e.xRadius, this.yRadius = e.yRadius, this.aStartAngle = e.aStartAngle, this.aEndAngle = e.aEndAngle, this.aClockwise = e.aClockwise, this.aRotation = e.aRotation, this
							}
						}]), t
					}(ar);
				aa.prototype.isEllipseCurve = !0;
				var ao = function(e) {
					function t(e, n, i, r, a, o) {
						var s;
						return d(this, t), (s = h(this, t, [e, n, i, i, r, a, o])).type = "ArcCurve", s
					}
					return y(t, e), t
				}(aa);

				function as() {
					var e = 0,
						t = 0,
						n = 0,
						i = 0;

					function r(r, a, o, s) {
						e = r, t = o, n = -3 * r + 3 * a - 2 * o - s, i = 2 * r - 2 * a + o + s
					}
					return {
						initCatmullRom: function(e, t, n, i, a) {
							r(t, n, a * (n - e), a * (i - t))
						},
						initNonuniformCatmullRom: function(e, t, n, i, a, o, s) {
							var l = (t - e) / a - (n - e) / (a + o) + (n - t) / o,
								u = (n - t) / o - (i - t) / (o + s) + (i - n) / s;
							r(t, n, l *= o, u *= o)
						},
						calc: function(r) {
							var a = r * r;
							return e + t * r + n * a + a * r * i
						}
					}
				}
				ao.prototype.isArcCurve = !0;
				var al = new eu,
					au = new as,
					ac = new as,
					ah = new as,
					ad = function(e) {
						function t() {
							var e, n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [],
								i = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
								r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "centripetal",
								a = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : .5;
							return d(this, t), (e = h(this, t)).type = "CatmullRomCurve3", e.points = n, e.closed = i, e.curveType = r, e.tension = a, e
						}
						return y(t, e), p(t, [{
							key: "getPoint",
							value: function(e) {
								var t, n, i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : new eu,
									r = this.points,
									a = r.length,
									o = (a - +!this.closed) * e,
									s = Math.floor(o),
									l = o - s;
								this.closed ? s += s > 0 ? 0 : (Math.floor(Math.abs(s) / a) + 1) * a : 0 === l && s === a - 1 && (s = a - 2, l = 1), this.closed || s > 0 ? t = r[(s - 1) % a] : (al.subVectors(r[0], r[1]).add(r[0]), t = al);
								var u = r[s % a],
									c = r[(s + 1) % a];
								if (this.closed || s + 2 < a ? n = r[(s + 2) % a] : (al.subVectors(r[a - 1], r[a - 2]).add(r[a - 1]), n = al), "centripetal" === this.curveType || "chordal" === this.curveType) {
									var h = "chordal" === this.curveType ? .5 : .25,
										d = Math.pow(t.distanceToSquared(u), h),
										f = Math.pow(u.distanceToSquared(c), h),
										p = Math.pow(c.distanceToSquared(n), h);
									f < 1e-4 && (f = 1), d < 1e-4 && (d = f), p < 1e-4 && (p = f), au.initNonuniformCatmullRom(t.x, u.x, c.x, n.x, d, f, p), ac.initNonuniformCatmullRom(t.y, u.y, c.y, n.y, d, f, p), ah.initNonuniformCatmullRom(t.z, u.z, c.z, n.z, d, f, p)
								} else "catmullrom" === this.curveType && (au.initCatmullRom(t.x, u.x, c.x, n.x, this.tension), ac.initCatmullRom(t.y, u.y, c.y, n.y, this.tension), ah.initCatmullRom(t.z, u.z, c.z, n.z, this.tension));
								return i.set(au.calc(l), ac.calc(l), ah.calc(l)), i
							}
						}, {
							key: "copy",
							value: function(e) {
								v(g(t.prototype), "copy", this).call(this, e), this.points = [];
								for (var n = 0, i = e.points.length; n < i; n++) {
									var r = e.points[n];
									this.points.push(r.clone())
								}
								return this.closed = e.closed, this.curveType = e.curveType, this.tension = e.tension, this
							}
						}, {
							key: "toJSON",
							value: function() {
								var e = v(g(t.prototype), "toJSON", this).call(this);
								e.points = [];
								for (var n = 0, i = this.points.length; n < i; n++) {
									var r = this.points[n];
									e.points.push(r.toArray())
								}
								return e.closed = this.closed, e.curveType = this.curveType, e.tension = this.tension, e
							}
						}, {
							key: "fromJSON",
							value: function(e) {
								v(g(t.prototype), "fromJSON", this).call(this, e), this.points = [];
								for (var n = 0, i = e.points.length; n < i; n++) {
									var r = e.points[n];
									this.points.push((new eu).fromArray(r))
								}
								return this.closed = e.closed, this.curveType = e.curveType, this.tension = e.tension, this
							}
						}]), t
					}(ar);

				function af(e, t, n, i, r) {
					var a = .5 * (i - t),
						o = .5 * (r - n),
						s = e * e;
					return e * s * (2 * n - 2 * i + a + o) + (-3 * n + 3 * i - 2 * a - o) * s + a * e + n
				}

				function ap(e, t, n, i) {
					var r;
					return (r = 1 - e) * r * t + 2 * (1 - e) * e * n + e * e * i
				}

				function am(e, t, n, i, r) {
					var a, o;
					return (a = 1 - e) * a * a * t + 3 * (o = 1 - e) * o * e * n + 3 * (1 - e) * e * e * i + e * e * e * r
				}
				ad.prototype.isCatmullRomCurve3 = !0;
				var av = function(e) {
					function t() {
						var e, n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : new W,
							i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : new W,
							r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : new W,
							a = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : new W;
						return d(this, t), (e = h(this, t)).type = "CubicBezierCurve", e.v0 = n, e.v1 = i, e.v2 = r, e.v3 = a, e
					}
					return y(t, e), p(t, [{
						key: "getPoint",
						value: function(e) {
							var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : new W,
								n = this.v0,
								i = this.v1,
								r = this.v2,
								a = this.v3;
							return t.set(am(e, n.x, i.x, r.x, a.x), am(e, n.y, i.y, r.y, a.y)), t
						}
					}, {
						key: "copy",
						value: function(e) {
							return v(g(t.prototype), "copy", this).call(this, e), this.v0.copy(e.v0), this.v1.copy(e.v1), this.v2.copy(e.v2), this.v3.copy(e.v3), this
						}
					}, {
						key: "toJSON",
						value: function() {
							var e = v(g(t.prototype), "toJSON", this).call(this);
							return e.v0 = this.v0.toArray(), e.v1 = this.v1.toArray(), e.v2 = this.v2.toArray(), e.v3 = this.v3.toArray(), e
						}
					}, {
						key: "fromJSON",
						value: function(e) {
							return v(g(t.prototype), "fromJSON", this).call(this, e), this.v0.fromArray(e.v0), this.v1.fromArray(e.v1), this.v2.fromArray(e.v2), this.v3.fromArray(e.v3), this
						}
					}]), t
				}(ar);
				av.prototype.isCubicBezierCurve = !0;
				var ag = function(e) {
					function t() {
						var e, n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : new eu,
							i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : new eu,
							r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : new eu,
							a = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : new eu;
						return d(this, t), (e = h(this, t)).type = "CubicBezierCurve3", e.v0 = n, e.v1 = i, e.v2 = r, e.v3 = a, e
					}
					return y(t, e), p(t, [{
						key: "getPoint",
						value: function(e) {
							var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : new eu,
								n = this.v0,
								i = this.v1,
								r = this.v2,
								a = this.v3;
							return t.set(am(e, n.x, i.x, r.x, a.x), am(e, n.y, i.y, r.y, a.y), am(e, n.z, i.z, r.z, a.z)), t
						}
					}, {
						key: "copy",
						value: function(e) {
							return v(g(t.prototype), "copy", this).call(this, e), this.v0.copy(e.v0), this.v1.copy(e.v1), this.v2.copy(e.v2), this.v3.copy(e.v3), this
						}
					}, {
						key: "toJSON",
						value: function() {
							var e = v(g(t.prototype), "toJSON", this).call(this);
							return e.v0 = this.v0.toArray(), e.v1 = this.v1.toArray(), e.v2 = this.v2.toArray(), e.v3 = this.v3.toArray(), e
						}
					}, {
						key: "fromJSON",
						value: function(e) {
							return v(g(t.prototype), "fromJSON", this).call(this, e), this.v0.fromArray(e.v0), this.v1.fromArray(e.v1), this.v2.fromArray(e.v2), this.v3.fromArray(e.v3), this
						}
					}]), t
				}(ar);
				ag.prototype.isCubicBezierCurve3 = !0;
				var ay = function(e) {
					function t() {
						var e, n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : new W,
							i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : new W;
						return d(this, t), (e = h(this, t)).type = "LineCurve", e.v1 = n, e.v2 = i, e
					}
					return y(t, e), p(t, [{
						key: "getPoint",
						value: function(e) {
							var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : new W;
							return 1 === e ? t.copy(this.v2) : (t.copy(this.v2).sub(this.v1), t.multiplyScalar(e).add(this.v1)), t
						}
					}, {
						key: "getPointAt",
						value: function(e, t) {
							return this.getPoint(e, t)
						}
					}, {
						key: "getTangent",
						value: function(e, t) {
							var n = t || new W;
							return n.copy(this.v2).sub(this.v1).normalize(), n
						}
					}, {
						key: "copy",
						value: function(e) {
							return v(g(t.prototype), "copy", this).call(this, e), this.v1.copy(e.v1), this.v2.copy(e.v2), this
						}
					}, {
						key: "toJSON",
						value: function() {
							var e = v(g(t.prototype), "toJSON", this).call(this);
							return e.v1 = this.v1.toArray(), e.v2 = this.v2.toArray(), e
						}
					}, {
						key: "fromJSON",
						value: function(e) {
							return v(g(t.prototype), "fromJSON", this).call(this, e), this.v1.fromArray(e.v1), this.v2.fromArray(e.v2), this
						}
					}]), t
				}(ar);
				ay.prototype.isLineCurve = !0;
				var ax = function(e) {
					function t() {
						var e, n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : new W,
							i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : new W,
							r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : new W;
						return d(this, t), (e = h(this, t)).type = "QuadraticBezierCurve", e.v0 = n, e.v1 = i, e.v2 = r, e
					}
					return y(t, e), p(t, [{
						key: "getPoint",
						value: function(e) {
							var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : new W,
								n = this.v0,
								i = this.v1,
								r = this.v2;
							return t.set(ap(e, n.x, i.x, r.x), ap(e, n.y, i.y, r.y)), t
						}
					}, {
						key: "copy",
						value: function(e) {
							return v(g(t.prototype), "copy", this).call(this, e), this.v0.copy(e.v0), this.v1.copy(e.v1), this.v2.copy(e.v2), this
						}
					}, {
						key: "toJSON",
						value: function() {
							var e = v(g(t.prototype), "toJSON", this).call(this);
							return e.v0 = this.v0.toArray(), e.v1 = this.v1.toArray(), e.v2 = this.v2.toArray(), e
						}
					}, {
						key: "fromJSON",
						value: function(e) {
							return v(g(t.prototype), "fromJSON", this).call(this, e), this.v0.fromArray(e.v0), this.v1.fromArray(e.v1), this.v2.fromArray(e.v2), this
						}
					}]), t
				}(ar);
				ax.prototype.isQuadraticBezierCurve = !0;
				var a_ = function(e) {
					function t() {
						var e, n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : new eu,
							i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : new eu,
							r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : new eu;
						return d(this, t), (e = h(this, t)).type = "QuadraticBezierCurve3", e.v0 = n, e.v1 = i, e.v2 = r, e
					}
					return y(t, e), p(t, [{
						key: "getPoint",
						value: function(e) {
							var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : new eu,
								n = this.v0,
								i = this.v1,
								r = this.v2;
							return t.set(ap(e, n.x, i.x, r.x), ap(e, n.y, i.y, r.y), ap(e, n.z, i.z, r.z)), t
						}
					}, {
						key: "copy",
						value: function(e) {
							return v(g(t.prototype), "copy", this).call(this, e), this.v0.copy(e.v0), this.v1.copy(e.v1), this.v2.copy(e.v2), this
						}
					}, {
						key: "toJSON",
						value: function() {
							var e = v(g(t.prototype), "toJSON", this).call(this);
							return e.v0 = this.v0.toArray(), e.v1 = this.v1.toArray(), e.v2 = this.v2.toArray(), e
						}
					}, {
						key: "fromJSON",
						value: function(e) {
							return v(g(t.prototype), "fromJSON", this).call(this, e), this.v0.fromArray(e.v0), this.v1.fromArray(e.v1), this.v2.fromArray(e.v2), this
						}
					}]), t
				}(ar);
				a_.prototype.isQuadraticBezierCurve3 = !0;
				var ab = function(e) {
					function t() {
						var e, n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [];
						return d(this, t), (e = h(this, t)).type = "SplineCurve", e.points = n, e
					}
					return y(t, e), p(t, [{
						key: "getPoint",
						value: function(e) {
							var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : new W,
								n = this.points,
								i = (n.length - 1) * e,
								r = Math.floor(i),
								a = i - r,
								o = n[0 === r ? r : r - 1],
								s = n[r],
								l = n[r > n.length - 2 ? n.length - 1 : r + 1],
								u = n[r > n.length - 3 ? n.length - 1 : r + 2];
							return t.set(af(a, o.x, s.x, l.x, u.x), af(a, o.y, s.y, l.y, u.y)), t
						}
					}, {
						key: "copy",
						value: function(e) {
							v(g(t.prototype), "copy", this).call(this, e), this.points = [];
							for (var n = 0, i = e.points.length; n < i; n++) {
								var r = e.points[n];
								this.points.push(r.clone())
							}
							return this
						}
					}, {
						key: "toJSON",
						value: function() {
							var e = v(g(t.prototype), "toJSON", this).call(this);
							e.points = [];
							for (var n = 0, i = this.points.length; n < i; n++) {
								var r = this.points[n];
								e.points.push(r.toArray())
							}
							return e
						}
					}, {
						key: "fromJSON",
						value: function(e) {
							v(g(t.prototype), "fromJSON", this).call(this, e), this.points = [];
							for (var n = 0, i = e.points.length; n < i; n++) {
								var r = e.points[n];
								this.points.push((new W).fromArray(r))
							}
							return this
						}
					}]), t
				}(ar);
				ab.prototype.isSplineCurve = !0;
				var aw = Object.freeze({
						__proto__: null,
						ArcCurve: ao,
						CatmullRomCurve3: ad,
						CubicBezierCurve: av,
						CubicBezierCurve3: ag,
						EllipseCurve: aa,
						LineCurve: ay,
						LineCurve3: function(e) {
							function t() {
								var e, n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : new eu,
									i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : new eu;
								return d(this, t), (e = h(this, t)).type = "LineCurve3", e.isLineCurve3 = !0, e.v1 = n, e.v2 = i, e
							}
							return y(t, e), p(t, [{
								key: "getPoint",
								value: function(e) {
									var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : new eu;
									return 1 === e ? t.copy(this.v2) : (t.copy(this.v2).sub(this.v1), t.multiplyScalar(e).add(this.v1)), t
								}
							}, {
								key: "getPointAt",
								value: function(e, t) {
									return this.getPoint(e, t)
								}
							}, {
								key: "copy",
								value: function(e) {
									return v(g(t.prototype), "copy", this).call(this, e), this.v1.copy(e.v1), this.v2.copy(e.v2), this
								}
							}, {
								key: "toJSON",
								value: function() {
									var e = v(g(t.prototype), "toJSON", this).call(this);
									return e.v1 = this.v1.toArray(), e.v2 = this.v2.toArray(), e
								}
							}, {
								key: "fromJSON",
								value: function(e) {
									return v(g(t.prototype), "fromJSON", this).call(this, e), this.v1.fromArray(e.v1), this.v2.fromArray(e.v2), this
								}
							}]), t
						}(ar),
						QuadraticBezierCurve: ax,
						QuadraticBezierCurve3: a_,
						SplineCurve: ab
					}),
					aM = function(e) {
						function t(e) {
							var n;
							return d(this, t), (n = h(this, t)).type = "Path", n.currentPoint = new W, e && n.setFromPoints(e), n
						}
						return y(t, e), p(t, [{
							key: "setFromPoints",
							value: function(e) {
								this.moveTo(e[0].x, e[0].y);
								for (var t = 1, n = e.length; t < n; t++) this.lineTo(e[t].x, e[t].y);
								return this
							}
						}, {
							key: "moveTo",
							value: function(e, t) {
								return this.currentPoint.set(e, t), this
							}
						}, {
							key: "lineTo",
							value: function(e, t) {
								var n = new ay(this.currentPoint.clone(), new W(e, t));
								return this.curves.push(n), this.currentPoint.set(e, t), this
							}
						}, {
							key: "quadraticCurveTo",
							value: function(e, t, n, i) {
								var r = new ax(this.currentPoint.clone(), new W(e, t), new W(n, i));
								return this.curves.push(r), this.currentPoint.set(n, i), this
							}
						}, {
							key: "bezierCurveTo",
							value: function(e, t, n, i, r, a) {
								var o = new av(this.currentPoint.clone(), new W(e, t), new W(n, i), new W(r, a));
								return this.curves.push(o), this.currentPoint.set(r, a), this
							}
						}, {
							key: "splineThru",
							value: function(e) {
								var t = new ab([this.currentPoint.clone()].concat(e));
								return this.curves.push(t), this.currentPoint.copy(e[e.length - 1]), this
							}
						}, {
							key: "arc",
							value: function(e, t, n, i, r, a) {
								var o = this.currentPoint.x,
									s = this.currentPoint.y;
								return this.absarc(e + o, t + s, n, i, r, a), this
							}
						}, {
							key: "absarc",
							value: function(e, t, n, i, r, a) {
								return this.absellipse(e, t, n, n, i, r, a), this
							}
						}, {
							key: "ellipse",
							value: function(e, t, n, i, r, a, o, s) {
								var l = this.currentPoint.x,
									u = this.currentPoint.y;
								return this.absellipse(e + l, t + u, n, i, r, a, o, s), this
							}
						}, {
							key: "absellipse",
							value: function(e, t, n, i, r, a, o, s) {
								var l = new aa(e, t, n, i, r, a, o, s);
								if (this.curves.length > 0) {
									var u = l.getPoint(0);
									u.equals(this.currentPoint) || this.lineTo(u.x, u.y)
								}
								this.curves.push(l);
								var c = l.getPoint(1);
								return this.currentPoint.copy(c), this
							}
						}, {
							key: "copy",
							value: function(e) {
								return v(g(t.prototype), "copy", this).call(this, e), this.currentPoint.copy(e.currentPoint), this
							}
						}, {
							key: "toJSON",
							value: function() {
								var e = v(g(t.prototype), "toJSON", this).call(this);
								return e.currentPoint = this.currentPoint.toArray(), e
							}
						}, {
							key: "fromJSON",
							value: function(e) {
								return v(g(t.prototype), "fromJSON", this).call(this, e), this.currentPoint.fromArray(e.currentPoint), this
							}
						}]), t
					}(function(e) {
						function t() {
							var e;
							return d(this, t), (e = h(this, t)).type = "CurvePath", e.curves = [], e.autoClose = !1, e
						}
						return y(t, e), p(t, [{
							key: "add",
							value: function(e) {
								this.curves.push(e)
							}
						}, {
							key: "closePath",
							value: function() {
								var e = this.curves[0].getPoint(0),
									t = this.curves[this.curves.length - 1].getPoint(1);
								e.equals(t) || this.curves.push(new ay(t, e))
							}
						}, {
							key: "getPoint",
							value: function(e, t) {
								for (var n = e * this.getLength(), i = this.getCurveLengths(), r = 0; r < i.length;) {
									if (i[r] >= n) {
										var a = i[r] - n,
											o = this.curves[r],
											s = o.getLength(),
											l = 0 === s ? 0 : 1 - a / s;
										return o.getPointAt(l, t)
									}
									r++
								}
								return null
							}
						}, {
							key: "getLength",
							value: function() {
								var e = this.getCurveLengths();
								return e[e.length - 1]
							}
						}, {
							key: "updateArcLengths",
							value: function() {
								this.needsUpdate = !0, this.cacheLengths = null, this.getCurveLengths()
							}
						}, {
							key: "getCurveLengths",
							value: function() {
								if (this.cacheLengths && this.cacheLengths.length === this.curves.length) return this.cacheLengths;
								for (var e = [], t = 0, n = 0, i = this.curves.length; n < i; n++) e.push(t += this.curves[n].getLength());
								return this.cacheLengths = e, e
							}
						}, {
							key: "getSpacedPoints",
							value: function() {
								for (var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 40, t = [], n = 0; n <= e; n++) t.push(this.getPoint(n / e));
								return this.autoClose && t.push(t[0]), t
							}
						}, {
							key: "getPoints",
							value: function() {
								for (var e, t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 12, n = [], i = 0, r = this.curves; i < r.length; i++)
									for (var a = r[i], o = a && a.isEllipseCurve ? 2 * t : a && (a.isLineCurve || a.isLineCurve3) ? 1 : a && a.isSplineCurve ? t * a.points.length : t, s = a.getPoints(o), l = 0; l < s.length; l++) {
										var u = s[l];
										e && e.equals(u) || (n.push(u), e = u)
									}
								return this.autoClose && n.length > 1 && !n[n.length - 1].equals(n[0]) && n.push(n[0]), n
							}
						}, {
							key: "copy",
							value: function(e) {
								v(g(t.prototype), "copy", this).call(this, e), this.curves = [];
								for (var n = 0, i = e.curves.length; n < i; n++) {
									var r = e.curves[n];
									this.curves.push(r.clone())
								}
								return this.autoClose = e.autoClose, this
							}
						}, {
							key: "toJSON",
							value: function() {
								var e = v(g(t.prototype), "toJSON", this).call(this);
								e.autoClose = this.autoClose, e.curves = [];
								for (var n = 0, i = this.curves.length; n < i; n++) {
									var r = this.curves[n];
									e.curves.push(r.toJSON())
								}
								return e
							}
						}, {
							key: "fromJSON",
							value: function(e) {
								v(g(t.prototype), "fromJSON", this).call(this, e), this.autoClose = e.autoClose, this.curves = [];
								for (var n = 0, i = e.curves.length; n < i; n++) {
									var r = e.curves[n];
									this.curves.push((new aw[r.type]).fromJSON(r))
								}
								return this
							}
						}]), t
					}(ar)),
					aS = function(e) {
						function t(e) {
							var n;
							return d(this, t), (n = h(this, t, [e])).uuid = B(), n.type = "Shape", n.holes = [], n
						}
						return y(t, e), p(t, [{
							key: "getPointsHoles",
							value: function(e) {
								for (var t = [], n = 0, i = this.holes.length; n < i; n++) t[n] = this.holes[n].getPoints(e);
								return t
							}
						}, {
							key: "extractPoints",
							value: function(e) {
								return {
									shape: this.getPoints(e),
									holes: this.getPointsHoles(e)
								}
							}
						}, {
							key: "copy",
							value: function(e) {
								v(g(t.prototype), "copy", this).call(this, e), this.holes = [];
								for (var n = 0, i = e.holes.length; n < i; n++) {
									var r = e.holes[n];
									this.holes.push(r.clone())
								}
								return this
							}
						}, {
							key: "toJSON",
							value: function() {
								var e = v(g(t.prototype), "toJSON", this).call(this);
								e.uuid = this.uuid, e.holes = [];
								for (var n = 0, i = this.holes.length; n < i; n++) {
									var r = this.holes[n];
									e.holes.push(r.toJSON())
								}
								return e
							}
						}, {
							key: "fromJSON",
							value: function(e) {
								v(g(t.prototype), "fromJSON", this).call(this, e), this.uuid = e.uuid, this.holes = [];
								for (var n = 0, i = e.holes.length; n < i; n++) {
									var r = e.holes[n];
									this.holes.push((new aM).fromJSON(r))
								}
								return this
							}
						}]), t
					}(aM),
					aT = function(e, t) {
						var n, i, r, a, o, s, l, u = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 2,
							c = t && t.length,
							h = c ? t[0] * u : e.length,
							d = aE(e, 0, h, u, !0),
							f = [];
						if (!d || d.next === d.prev) return f;
						if (c && (d = function(e, t, n, i) {
								var r, a, o, s, l, u = [];
								for (r = 0, a = t.length; r < a; r++) o = t[r] * i, s = r < a - 1 ? t[r + 1] * i : e.length, (l = aE(e, o, s, i, !1)) === l.next && (l.steiner = !0), u.push(function(e) {
									var t = e,
										n = e;
									do(t.x < n.x || t.x === n.x && t.y < n.y) && (n = t), t = t.next; while (t !== e);
									return n
								}(l));
								for (u.sort(ak), r = 0; r < u.length; r++)(function(e, t) {
									if (t = function(e, t) {
											var n, i, r, a = t,
												o = e.x,
												s = e.y,
												l = -1 / 0;
											do {
												if (s <= a.y && s >= a.next.y && a.next.y !== a.y) {
													var u = a.x + (s - a.y) * (a.next.x - a.x) / (a.next.y - a.y);
													if (u <= o && u > l) {
														if (l = u, u === o) {
															if (s === a.y) return a;
															if (s === a.next.y) return a.next
														}
														r = a.x < a.next.x ? a : a.next
													}
												}
												a = a.next
											} while (a !== t);
											if (!r) return null;
											if (o === l) return r;
											var c, h = r,
												d = r.x,
												f = r.y,
												p = 1 / 0;
											a = r;
											do {
												o >= a.x && a.x >= d && o !== a.x && aL(s < f ? o : l, s, d, f, s < f ? l : o, s, a.x, a.y) && (c = Math.abs(s - a.y) / (o - a.x), aO(a, e) && (c < p || c === p && (a.x > r.x || a.x === r.x && (n = r, i = a, 0 > aC(n.prev, n, i.prev) && 0 > aC(i.next, n, n.next)))) && (r = a, p = c)), a = a.next
											} while (a !== h);
											return r
										}(e, t)) {
										var n = az(t, e);
										aA(t, t.next), aA(n, n.next)
									}
								})(u[r], n), n = aA(n, n.next);
								return n
							}(e, t, d, u)), e.length > 80 * u) {
							n = r = e[0], i = a = e[1];
							for (var p = u; p < h; p += u) o = e[p], s = e[p + 1], o < n && (n = o), s < i && (i = s), o > r && (r = o), s > a && (a = s);
							l = 0 !== (l = Math.max(r - n, a - i)) ? 1 / l : 0
						}
						return function e(t, n, i, r, a, o, s) {
							if (t) {
								!s && o && function(e, t, n, i) {
									var r = e;
									do null === r.z && (r.z = aR(r.x, r.y, t, n, i)), r.prevZ = r.prev, r.nextZ = r.next, r = r.next; while (r !== e);
									r.prevZ.nextZ = null, r.prevZ = null,
										function(e) {
											var t, n, i, r, a, o, s, l, u = 1;
											do {
												for (n = e, e = null, a = null, o = 0; n;) {
													for (o++, i = n, s = 0, t = 0; t < u && (s++, i = i.nextZ); t++);
													for (l = u; s > 0 || l > 0 && i;) 0 !== s && (0 === l || !i || n.z <= i.z) ? (r = n, n = n.nextZ, s--) : (r = i, i = i.nextZ, l--), a ? a.nextZ = r : e = r, r.prevZ = a, a = r;
													n = i
												}
												a.nextZ = null, u *= 2
											} while (o > 1)
										}(r)
								}(t, r, a, o);
								for (var l, u, c = t; t.prev !== t.next;)
									if (l = t.prev, u = t.next, o ? function(e, t, n, i) {
											var r = e.prev,
												a = e.next;
											if (aC(r, e, a) >= 0) return !1;
											for (var o = r.x < e.x ? r.x < a.x ? r.x : a.x : e.x < a.x ? e.x : a.x, s = r.y < e.y ? r.y < a.y ? r.y : a.y : e.y < a.y ? e.y : a.y, l = r.x > e.x ? r.x > a.x ? r.x : a.x : e.x > a.x ? e.x : a.x, u = r.y > e.y ? r.y > a.y ? r.y : a.y : e.y > a.y ? e.y : a.y, c = aR(o, s, t, n, i), h = aR(l, u, t, n, i), d = e.prevZ, f = e.nextZ; d && d.z >= c && f && f.z <= h;) {
												if (d !== e.prev && d !== e.next && aL(r.x, r.y, e.x, e.y, a.x, a.y, d.x, d.y) && aC(d.prev, d, d.next) >= 0 || (d = d.prevZ, f !== e.prev && f !== e.next && aL(r.x, r.y, e.x, e.y, a.x, a.y, f.x, f.y) && aC(f.prev, f, f.next) >= 0)) return !1;
												f = f.nextZ
											}
											for (; d && d.z >= c;) {
												if (d !== e.prev && d !== e.next && aL(r.x, r.y, e.x, e.y, a.x, a.y, d.x, d.y) && aC(d.prev, d, d.next) >= 0) return !1;
												d = d.prevZ
											}
											for (; f && f.z <= h;) {
												if (f !== e.prev && f !== e.next && aL(r.x, r.y, e.x, e.y, a.x, a.y, f.x, f.y) && aC(f.prev, f, f.next) >= 0) return !1;
												f = f.nextZ
											}
											return !0
										}(t, r, a, o) : function(e) {
											var t = e.prev,
												n = e.next;
											if (aC(t, e, n) >= 0) return !1;
											for (var i = e.next.next; i !== e.prev;) {
												if (aL(t.x, t.y, e.x, e.y, n.x, n.y, i.x, i.y) && aC(i.prev, i, i.next) >= 0) return !1;
												i = i.next
											}
											return !0
										}(t)) n.push(l.i / i), n.push(t.i / i), n.push(u.i / i), aF(t), t = u.next, c = u.next;
									else if ((t = u) === c) {
									s ? 1 === s ? e(t = function(e, t, n) {
										var i = e;
										do {
											var r = i.prev,
												a = i.next.next;
											!aP(r, a) && aD(r, i, i.next, a) && aO(r, a) && aO(a, r) && (t.push(r.i / n), t.push(i.i / n), t.push(a.i / n), aF(i), aF(i.next), i = e = a), i = i.next
										} while (i !== e);
										return aA(i)
									}(aA(t), n, i), n, i, r, a, o, 2) : 2 === s && function(t, n, i, r, a, o) {
										var s = t;
										do {
											for (var l, u, c = s.next.next; c !== s.prev;) {
												if (s.i !== c.i && (l = s, u = c, l.next.i !== u.i && l.prev.i !== u.i && ! function(e, t) {
														var n = e;
														do {
															if (n.i !== e.i && n.next.i !== e.i && n.i !== t.i && n.next.i !== t.i && aD(n, n.next, e, t)) return !0;
															n = n.next
														} while (n !== e);
														return !1
													}(l, u) && (aO(l, u) && aO(u, l) && function(e, t) {
														var n = e,
															i = !1,
															r = (e.x + t.x) / 2,
															a = (e.y + t.y) / 2;
														do n.y > a != n.next.y > a && n.next.y !== n.y && r < (n.next.x - n.x) * (a - n.y) / (n.next.y - n.y) + n.x && (i = !i), n = n.next; while (n !== e);
														return i
													}(l, u) && (aC(l.prev, l, u.prev) || aC(l, u.prev, u)) || aP(l, u) && aC(l.prev, l, l.next) > 0 && aC(u.prev, u, u.next) > 0))) {
													var h = az(s, c);
													return s = aA(s, s.next), h = aA(h, h.next), e(s, n, i, r, a, o), void e(h, n, i, r, a, o)
												}
												c = c.next
											}
											s = s.next
										} while (s !== t)
									}(t, n, i, r, a, o) : e(aA(t), n, i, r, a, o, 1);
									break
								}
							}
						}(d, f, u, n, i, l), f
					};

				function aE(e, t, n, i, r) {
					var a, o;
					if (r === function(e, t, n, i) {
							for (var r = 0, a = t, o = n - i; a < n; a += i) r += (e[o] - e[a]) * (e[a + 1] + e[o + 1]), o = a;
							return r
						}(e, t, n, i) > 0)
						for (a = t; a < n; a += i) o = aU(a, e[a], e[a + 1], o);
					else
						for (a = n - i; a >= t; a -= i) o = aU(a, e[a], e[a + 1], o);
					return o && aP(o, o.next) && (aF(o), o = o.next), o
				}

				function aA(e, t) {
					if (!e) return e;
					t || (t = e);
					var n, i = e;
					do
						if (n = !1, i.steiner || !aP(i, i.next) && 0 !== aC(i.prev, i, i.next)) i = i.next;
						else {
							if (aF(i), (i = t = i.prev) === i.next) break;
							n = !0
						} while (n || i !== t);
					return t
				}

				function ak(e, t) {
					return e.x - t.x
				}

				function aR(e, t, n, i, r) {
					return (e = 0x55555555 & ((e = 0x33333333 & ((e = 0xf0f0f0f & ((e = 0xff00ff & ((e = 32767 * (e - n) * r) | e << 8)) | e << 4)) | e << 2)) | e << 1)) | (t = 0x55555555 & ((t = 0x33333333 & ((t = 0xf0f0f0f & ((t = 0xff00ff & ((t = 32767 * (t - i) * r) | t << 8)) | t << 4)) | t << 2)) | t << 1)) << 1
				}

				function aL(e, t, n, i, r, a, o, s) {
					return (r - o) * (t - s) - (e - o) * (a - s) >= 0 && (e - o) * (i - s) - (n - o) * (t - s) >= 0 && (n - o) * (a - s) - (r - o) * (i - s) >= 0
				}

				function aC(e, t, n) {
					return (t.y - e.y) * (n.x - t.x) - (t.x - e.x) * (n.y - t.y)
				}

				function aP(e, t) {
					return e.x === t.x && e.y === t.y
				}

				function aD(e, t, n, i) {
					var r = aN(aC(e, t, n)),
						a = aN(aC(e, t, i)),
						o = aN(aC(n, i, e)),
						s = aN(aC(n, i, t));
					return r !== a && o !== s || !(0 !== r || !aI(e, n, t)) || !(0 !== a || !aI(e, i, t)) || !(0 !== o || !aI(n, e, i)) || !(0 !== s || !aI(n, t, i))
				}

				function aI(e, t, n) {
					return t.x <= Math.max(e.x, n.x) && t.x >= Math.min(e.x, n.x) && t.y <= Math.max(e.y, n.y) && t.y >= Math.min(e.y, n.y)
				}

				function aN(e) {
					return e > 0 ? 1 : e < 0 ? -1 : 0
				}

				function aO(e, t) {
					return 0 > aC(e.prev, e, e.next) ? aC(e, t, e.next) >= 0 && aC(e, e.prev, t) >= 0 : 0 > aC(e, t, e.prev) || 0 > aC(e, e.next, t)
				}

				function az(e, t) {
					var n = new aB(e.i, e.x, e.y),
						i = new aB(t.i, t.x, t.y),
						r = e.next,
						a = t.prev;
					return e.next = t, t.prev = e, n.next = r, r.prev = n, i.next = n, n.prev = i, a.next = i, i.prev = a, i
				}

				function aU(e, t, n, i) {
					var r = new aB(e, t, n);
					return i ? (r.next = i.next, r.prev = i, i.next.prev = r, i.next = r) : (r.prev = r, r.next = r), r
				}

				function aF(e) {
					e.next.prev = e.prev, e.prev.next = e.next, e.prevZ && (e.prevZ.nextZ = e.nextZ), e.nextZ && (e.nextZ.prevZ = e.prevZ)
				}

				function aB(e, t, n) {
					this.i = e, this.x = t, this.y = n, this.prev = null, this.next = null, this.z = null, this.prevZ = null, this.nextZ = null, this.steiner = !1
				}
				var aH = function() {
					function e() {
						d(this, e)
					}
					return p(e, null, [{
						key: "area",
						value: function(e) {
							for (var t = e.length, n = 0, i = t - 1, r = 0; r < t; i = r++) n += e[i].x * e[r].y - e[r].x * e[i].y;
							return .5 * n
						}
					}, {
						key: "isClockWise",
						value: function(t) {
							return 0 > e.area(t)
						}
					}, {
						key: "triangulateShape",
						value: function(e, t) {
							var n = [],
								i = [],
								r = [];
							aV(e), aG(n, e);
							var a = e.length;
							t.forEach(aV);
							for (var o = 0; o < t.length; o++) i.push(a), a += t[o].length, aG(n, t[o]);
							for (var s = aT(n, i), l = 0; l < s.length; l += 3) r.push(s.slice(l, l + 3));
							return r
						}
					}]), e
				}();

				function aV(e) {
					var t = e.length;
					t > 2 && e[t - 1].equals(e[0]) && e.pop()
				}

				function aG(e, t) {
					for (var n = 0; n < t.length; n++) e.push(t[n].x), e.push(t[n].y)
				}
				var aW = function(e) {
						function t() {
							var e, n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : new aS([new W(.5, .5), new W(-.5, .5), new W(-.5, -.5), new W(.5, -.5)]),
								i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
							d(this, t), (e = h(this, t)).type = "ExtrudeGeometry", e.parameters = {
								shapes: n,
								options: i
							}, n = Array.isArray(n) ? n : [n];
							for (var r = [], a = [], o = 0, s = n.length; o < s; o++) ! function(t) {
								var n = [],
									o = void 0 !== i.curveSegments ? i.curveSegments : 12,
									s = void 0 !== i.steps ? i.steps : 1,
									l = void 0 !== i.depth ? i.depth : 1,
									u = void 0 === i.bevelEnabled || i.bevelEnabled,
									c = void 0 !== i.bevelThickness ? i.bevelThickness : .2,
									h = void 0 !== i.bevelSize ? i.bevelSize : c - .1,
									d = void 0 !== i.bevelOffset ? i.bevelOffset : 0,
									f = void 0 !== i.bevelSegments ? i.bevelSegments : 3,
									p = i.extrudePath,
									m = void 0 !== i.UVGenerator ? i.UVGenerator : aj;
								void 0 !== i.amount && (console.warn("THREE.ExtrudeBufferGeometry: amount has been renamed to depth."), l = i.amount);
								var v, g, y, x, _, b = !1;
								p && (v = p.getSpacedPoints(s), b = !0, u = !1, g = p.computeFrenetFrames(s, !1), y = new eu, x = new eu, _ = new eu), u || (f = 0, c = 0, h = 0, d = 0);
								var w = t.extractPoints(o),
									M = w.shape,
									S = w.holes;
								if (!aH.isClockWise(M)) {
									M = M.reverse();
									for (var T = 0, E = S.length; T < E; T++) {
										var A = S[T];
										aH.isClockWise(A) && (S[T] = A.reverse())
									}
								}
								for (var k = aH.triangulateShape(M, S), R = M, L = 0, C = S.length; L < C; L++) {
									var P = S[L];
									M = M.concat(P)
								}

								function D(e, t, n) {
									return t || console.error("THREE.ExtrudeGeometry: vec does not exist"), t.clone().multiplyScalar(n).add(e)
								}
								var I = M.length,
									N = k.length;

								function O(e, t, n) {
									var i, r, a, o = e.x - t.x,
										s = e.y - t.y,
										l = n.x - e.x,
										u = n.y - e.y,
										c = o * o + s * s;
									if (Math.abs(o * u - s * l) > Number.EPSILON) {
										var h = Math.sqrt(c),
											d = Math.sqrt(l * l + u * u),
											f = t.x - s / h,
											p = t.y + o / h,
											m = ((n.x - u / d - f) * u - (n.y + l / d - p) * l) / (o * u - s * l),
											v = (i = f + o * m - e.x) * i + (r = p + s * m - e.y) * r;
										if (v <= 2) return new W(i, r);
										a = Math.sqrt(v / 2)
									} else {
										var g = !1;
										o > Number.EPSILON ? l > Number.EPSILON && (g = !0) : o < -Number.EPSILON ? l < -Number.EPSILON && (g = !0) : Math.sign(s) === Math.sign(u) && (g = !0), g ? (i = -s, r = o, a = Math.sqrt(c)) : (i = o, r = s, a = Math.sqrt(c / 2))
									}
									return new W(i / a, r / a)
								}
								for (var z = [], U = 0, F = R.length, B = F - 1, H = U + 1; U < F; U++, B++, H++) B === F && (B = 0), H === F && (H = 0), z[U] = O(R[U], R[B], R[H]);
								for (var V, G = [], j = z.concat(), q = 0, X = S.length; q < X; q++) {
									var Y = S[q];
									V = [];
									for (var J = 0, Z = Y.length, K = Z - 1, Q = J + 1; J < Z; J++, K++, Q++) K === Z && (K = 0), Q === Z && (Q = 0), V[J] = O(Y[J], Y[K], Y[Q]);
									G.push(V), j = j.concat(V)
								}
								for (var $ = 0; $ < f; $++) {
									for (var ee = $ / f, et = c * Math.cos(ee * Math.PI / 2), en = h * Math.sin(ee * Math.PI / 2) + d, ei = 0, er = R.length; ei < er; ei++) {
										var ea = D(R[ei], z[ei], en);
										eD(ea.x, ea.y, -et)
									}
									for (var eo = 0, es = S.length; eo < es; eo++) {
										var el = S[eo];
										V = G[eo];
										for (var ec = 0, eh = el.length; ec < eh; ec++) {
											var ed = D(el[ec], V[ec], en);
											eD(ed.x, ed.y, -et)
										}
									}
								}
								for (var ef = h + d, ep = 0; ep < I; ep++) {
									var em = u ? D(M[ep], j[ep], ef) : M[ep];
									b ? (x.copy(g.normals[0]).multiplyScalar(em.x), y.copy(g.binormals[0]).multiplyScalar(em.y), _.copy(v[0]).add(x).add(y), eD(_.x, _.y, _.z)) : eD(em.x, em.y, 0)
								}
								for (var ev = 1; ev <= s; ev++)
									for (var eg = 0; eg < I; eg++) {
										var ey = u ? D(M[eg], j[eg], ef) : M[eg];
										b ? (x.copy(g.normals[ev]).multiplyScalar(ey.x), y.copy(g.binormals[ev]).multiplyScalar(ey.y), _.copy(v[ev]).add(x).add(y), eD(_.x, _.y, _.z)) : eD(ey.x, ey.y, l / s * ev)
									}
								for (var ex = f - 1; ex >= 0; ex--) {
									for (var e_ = ex / f, eb = c * Math.cos(e_ * Math.PI / 2), ew = h * Math.sin(e_ * Math.PI / 2) + d, eM = 0, eS = R.length; eM < eS; eM++) {
										var eT = D(R[eM], z[eM], ew);
										eD(eT.x, eT.y, l + eb)
									}
									for (var eE = 0, eA = S.length; eE < eA; eE++) {
										var ek = S[eE];
										V = G[eE];
										for (var eR = 0, eL = ek.length; eR < eL; eR++) {
											var eC = D(ek[eR], V[eR], ew);
											b ? eD(eC.x, eC.y + v[s - 1].y, v[s - 1].x + eb) : eD(eC.x, eC.y, l + eb)
										}
									}
								}

								function eP(t, n) {
									for (var i = t.length; --i >= 0;) {
										var a = i,
											o = i - 1;
										o < 0 && (o = t.length - 1);
										for (var l = 0, u = s + 2 * f; l < u; l++) {
											var c = I * l,
												h = I * (l + 1);
											(function(t, n, i, a) {
												eN(t), eN(n), eN(a), eN(n), eN(i), eN(a);
												var o = r.length / 3,
													s = m.generateSideWallUV(e, r, o - 6, o - 3, o - 2, o - 1);
												eO(s[0]), eO(s[1]), eO(s[3]), eO(s[1]), eO(s[2]), eO(s[3])
											})(n + a + c, n + o + c, n + o + h, n + a + h)
										}
									}
								}

								function eD(e, t, i) {
									n.push(e), n.push(t), n.push(i)
								}

								function eI(t, n, i) {
									eN(t), eN(n), eN(i);
									var a = r.length / 3,
										o = m.generateTopUV(e, r, a - 3, a - 2, a - 1);
									eO(o[0]), eO(o[1]), eO(o[2])
								}

								function eN(e) {
									r.push(n[3 * e + 0]), r.push(n[3 * e + 1]), r.push(n[3 * e + 2])
								}

								function eO(e) {
									a.push(e.x), a.push(e.y)
								}(function() {
									var t = r.length / 3;
									if (u) {
										for (var n = 0, i = 0 * I, a = 0; a < N; a++) {
											var o = k[a];
											eI(o[2] + i, o[1] + i, o[0] + i)
										}
										i = I * (s + 2 * f);
										for (var l = 0; l < N; l++) {
											var c = k[l];
											eI(c[0] + i, c[1] + i, c[2] + i)
										}
									} else {
										for (var h = 0; h < N; h++) {
											var d = k[h];
											eI(d[2], d[1], d[0])
										}
										for (var p = 0; p < N; p++) {
											var m = k[p];
											eI(m[0] + I * s, m[1] + I * s, m[2] + I * s)
										}
									}
									e.addGroup(t, r.length / 3 - t, 0)
								})(),
								function() {
									var t = r.length / 3,
										n = 0;
									eP(R, 0), n += R.length;
									for (var i = 0, a = S.length; i < a; i++) {
										var o = S[i];
										eP(o, n), n += o.length
									}
									e.addGroup(t, r.length / 3 - t, 1)
								}()
							}(n[o]);
							return e.setAttribute("position", new tb(r, 3)), e.setAttribute("uv", new tb(a, 2)), e.computeVertexNormals(), e
						}
						return y(t, e), p(t, [{
							key: "toJSON",
							value: function() {
								var e = v(g(t.prototype), "toJSON", this).call(this);
								return function(e, t, n) {
									if (n.shapes = [], Array.isArray(e))
										for (var i = 0, r = e.length; i < r; i++) {
											var a = e[i];
											n.shapes.push(a.uuid)
										} else n.shapes.push(e.uuid);
									return void 0 !== t.extrudePath && (n.options.extrudePath = t.extrudePath.toJSON()), n
								}(this.parameters.shapes, this.parameters.options, e)
							}
						}], [{
							key: "fromJSON",
							value: function(e, n) {
								for (var i = [], r = 0, a = e.shapes.length; r < a; r++) {
									var o = n[e.shapes[r]];
									i.push(o)
								}
								var s = e.options.extrudePath;
								return void 0 !== s && (e.options.extrudePath = (new aw[s.type]).fromJSON(s)), new t(i, e.options)
							}
						}]), t
					}(tR),
					aj = {
						generateTopUV: function(e, t, n, i, r) {
							var a = t[3 * n],
								o = t[3 * n + 1],
								s = t[3 * i],
								l = t[3 * i + 1],
								u = t[3 * r],
								c = t[3 * r + 1];
							return [new W(a, o), new W(s, l), new W(u, c)]
						},
						generateSideWallUV: function(e, t, n, i, r, a) {
							var o = t[3 * n],
								s = t[3 * n + 1],
								l = t[3 * n + 2],
								u = t[3 * i],
								c = t[3 * i + 1],
								h = t[3 * i + 2],
								d = t[3 * r],
								f = t[3 * r + 1],
								p = t[3 * r + 2],
								m = t[3 * a],
								v = t[3 * a + 1],
								g = t[3 * a + 2];
							return Math.abs(s - c) < Math.abs(o - u) ? [new W(o, 1 - l), new W(u, 1 - h), new W(d, 1 - p), new W(m, 1 - g)] : [new W(s, 1 - l), new W(c, 1 - h), new W(f, 1 - p), new W(v, 1 - g)]
						}
					},
					aq = function(e) {
						function t() {
							var e, n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : new aS([new W(0, .5), new W(-.5, -.5), new W(.5, -.5)]),
								i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 12;
							d(this, t);
							var r = function(e) {
								var t = o.length / 3,
									n = e.extractPoints(i),
									r = n.shape,
									u = n.holes;
								!1 === aH.isClockWise(r) && (r = r.reverse());
								for (var h = 0, d = u.length; h < d; h++) {
									var f = u[h];
									!0 === aH.isClockWise(f) && (u[h] = f.reverse())
								}
								for (var p = aH.triangulateShape(r, u), m = 0, v = u.length; m < v; m++) {
									var g = u[m];
									r = r.concat(g)
								}
								for (var y = 0, x = r.length; y < x; y++) {
									var _ = r[y];
									o.push(_.x, _.y, 0), s.push(0, 0, 1), l.push(_.x, _.y)
								}
								for (var b = 0, w = p.length; b < w; b++) {
									var M = p[b],
										S = M[0] + t,
										T = M[1] + t,
										E = M[2] + t;
									a.push(S, T, E), c += 3
								}
							};
							(e = h(this, t)).type = "ShapeGeometry", e.parameters = {
								shapes: n,
								curveSegments: i
							};
							var a = [],
								o = [],
								s = [],
								l = [],
								u = 0,
								c = 0;
							if (!1 === Array.isArray(n)) r(n);
							else
								for (var f = 0; f < n.length; f++) r(n[f]), e.addGroup(u, c, f), u += c, c = 0;
							return e.setIndex(a), e.setAttribute("position", new tb(o, 3)), e.setAttribute("normal", new tb(s, 3)), e.setAttribute("uv", new tb(l, 2)), e
						}
						return y(t, e), p(t, [{
							key: "toJSON",
							value: function() {
								var e = v(g(t.prototype), "toJSON", this).call(this);
								return function(e, t) {
									if (t.shapes = [], Array.isArray(e))
										for (var n = 0, i = e.length; n < i; n++) {
											var r = e[n];
											t.shapes.push(r.uuid)
										} else t.shapes.push(e.uuid);
									return t
								}(this.parameters.shapes, e)
							}
						}], [{
							key: "fromJSON",
							value: function(e, n) {
								for (var i = [], r = 0, a = e.shapes.length; r < a; r++) {
									var o = n[e.shapes[r]];
									i.push(o)
								}
								return new t(i, e.curveSegments)
							}
						}]), t
					}(tR);
				(function(e) {
					function t(e) {
						var n;
						return d(this, t), (n = h(this, t)).type = "ShadowMaterial", n.color = new ee(0), n.transparent = !0, n.setValues(e), n
					}
					return y(t, e), p(t, [{
						key: "copy",
						value: function(e) {
							return v(g(t.prototype), "copy", this).call(this, e), this.color.copy(e.color), this
						}
					}]), t
				})(tp).prototype.isShadowMaterial = !0;
				var aX = function(e) {
					function t(e) {
						var n;
						return d(this, t), (n = h(this, t)).defines = {
							STANDARD: ""
						}, n.type = "MeshStandardMaterial", n.color = new ee(0xffffff), n.roughness = 1, n.metalness = 0, n.map = null, n.lightMap = null, n.lightMapIntensity = 1, n.aoMap = null, n.aoMapIntensity = 1, n.emissive = new ee(0), n.emissiveIntensity = 1, n.emissiveMap = null, n.bumpMap = null, n.bumpScale = 1, n.normalMap = null, n.normalMapType = 0, n.normalScale = new W(1, 1), n.displacementMap = null, n.displacementScale = 1, n.displacementBias = 0, n.roughnessMap = null, n.metalnessMap = null, n.alphaMap = null, n.envMap = null, n.envMapIntensity = 1, n.refractionRatio = .98, n.wireframe = !1, n.wireframeLinewidth = 1, n.wireframeLinecap = "round", n.wireframeLinejoin = "round", n.flatShading = !1, n.setValues(e), n
					}
					return y(t, e), p(t, [{
						key: "copy",
						value: function(e) {
							return v(g(t.prototype), "copy", this).call(this, e), this.defines = {
								STANDARD: ""
							}, this.color.copy(e.color), this.roughness = e.roughness, this.metalness = e.metalness, this.map = e.map, this.lightMap = e.lightMap, this.lightMapIntensity = e.lightMapIntensity, this.aoMap = e.aoMap, this.aoMapIntensity = e.aoMapIntensity, this.emissive.copy(e.emissive), this.emissiveMap = e.emissiveMap, this.emissiveIntensity = e.emissiveIntensity, this.bumpMap = e.bumpMap, this.bumpScale = e.bumpScale, this.normalMap = e.normalMap, this.normalMapType = e.normalMapType, this.normalScale.copy(e.normalScale), this.displacementMap = e.displacementMap, this.displacementScale = e.displacementScale, this.displacementBias = e.displacementBias, this.roughnessMap = e.roughnessMap, this.metalnessMap = e.metalnessMap, this.alphaMap = e.alphaMap, this.envMap = e.envMap, this.envMapIntensity = e.envMapIntensity, this.refractionRatio = e.refractionRatio, this.wireframe = e.wireframe, this.wireframeLinewidth = e.wireframeLinewidth, this.wireframeLinecap = e.wireframeLinecap, this.wireframeLinejoin = e.wireframeLinejoin, this.flatShading = e.flatShading, this
						}
					}]), t
				}(tp);
				aX.prototype.isMeshStandardMaterial = !0,
					function(e) {
						function t(e) {
							var n;
							return d(this, t), (n = h(this, t)).defines = {
								STANDARD: "",
								PHYSICAL: ""
							}, n.type = "MeshPhysicalMaterial", n.clearcoatMap = null, n.clearcoatRoughness = 0, n.clearcoatRoughnessMap = null, n.clearcoatNormalScale = new W(1, 1), n.clearcoatNormalMap = null, n.ior = 1.5, Object.defineProperty(n, "reflectivity", {
								get: function() {
									return H(2.5 * (this.ior - 1) / (this.ior + 1), 0, 1)
								},
								set: function(e) {
									this.ior = (1 + .4 * e) / (1 - .4 * e)
								}
							}), n.sheenColor = new ee(0), n.sheenColorMap = null, n.sheenRoughness = 1, n.sheenRoughnessMap = null, n.transmissionMap = null, n.thickness = 0, n.thicknessMap = null, n.attenuationDistance = 0, n.attenuationColor = new ee(1, 1, 1), n.specularIntensity = 1, n.specularIntensityMap = null, n.specularColor = new ee(1, 1, 1), n.specularColorMap = null, n._sheen = 0, n._clearcoat = 0, n._transmission = 0, n.setValues(e), n
						}
						return y(t, e), p(t, [{
							key: "sheen",
							get: function() {
								return this._sheen
							},
							set: function(e) {
								this._sheen > 0 != e > 0 && this.version++, this._sheen = e
							}
						}, {
							key: "clearcoat",
							get: function() {
								return this._clearcoat
							},
							set: function(e) {
								this._clearcoat > 0 != e > 0 && this.version++, this._clearcoat = e
							}
						}, {
							key: "transmission",
							get: function() {
								return this._transmission
							},
							set: function(e) {
								this._transmission > 0 != e > 0 && this.version++, this._transmission = e
							}
						}, {
							key: "copy",
							value: function(e) {
								return v(g(t.prototype), "copy", this).call(this, e), this.defines = {
									STANDARD: "",
									PHYSICAL: ""
								}, this.clearcoat = e.clearcoat, this.clearcoatMap = e.clearcoatMap, this.clearcoatRoughness = e.clearcoatRoughness, this.clearcoatRoughnessMap = e.clearcoatRoughnessMap, this.clearcoatNormalMap = e.clearcoatNormalMap, this.clearcoatNormalScale.copy(e.clearcoatNormalScale), this.ior = e.ior, this.sheen = e.sheen, this.sheenColor.copy(e.sheenColor), this.sheenColorMap = e.sheenColorMap, this.sheenRoughness = e.sheenRoughness, this.sheenRoughnessMap = e.sheenRoughnessMap, this.transmission = e.transmission, this.transmissionMap = e.transmissionMap, this.thickness = e.thickness, this.thicknessMap = e.thicknessMap, this.attenuationDistance = e.attenuationDistance, this.attenuationColor.copy(e.attenuationColor), this.specularIntensity = e.specularIntensity, this.specularIntensityMap = e.specularIntensityMap, this.specularColor.copy(e.specularColor), this.specularColorMap = e.specularColorMap, this
							}
						}]), t
					}(aX).prototype.isMeshPhysicalMaterial = !0;
				var aY = function(e) {
					function t(e) {
						var n;
						return d(this, t), (n = h(this, t)).type = "MeshPhongMaterial", n.color = new ee(0xffffff), n.specular = new ee(1118481), n.shininess = 30, n.map = null, n.lightMap = null, n.lightMapIntensity = 1, n.aoMap = null, n.aoMapIntensity = 1, n.emissive = new ee(0), n.emissiveIntensity = 1, n.emissiveMap = null, n.bumpMap = null, n.bumpScale = 1, n.normalMap = null, n.normalMapType = 0, n.normalScale = new W(1, 1), n.displacementMap = null, n.displacementScale = 1, n.displacementBias = 0, n.specularMap = null, n.alphaMap = null, n.envMap = null, n.combine = 0, n.reflectivity = 1, n.refractionRatio = .98, n.wireframe = !1, n.wireframeLinewidth = 1, n.wireframeLinecap = "round", n.wireframeLinejoin = "round", n.flatShading = !1, n.setValues(e), n
					}
					return y(t, e), p(t, [{
						key: "copy",
						value: function(e) {
							return v(g(t.prototype), "copy", this).call(this, e), this.color.copy(e.color), this.specular.copy(e.specular), this.shininess = e.shininess, this.map = e.map, this.lightMap = e.lightMap, this.lightMapIntensity = e.lightMapIntensity, this.aoMap = e.aoMap, this.aoMapIntensity = e.aoMapIntensity, this.emissive.copy(e.emissive), this.emissiveMap = e.emissiveMap, this.emissiveIntensity = e.emissiveIntensity, this.bumpMap = e.bumpMap, this.bumpScale = e.bumpScale, this.normalMap = e.normalMap, this.normalMapType = e.normalMapType, this.normalScale.copy(e.normalScale), this.displacementMap = e.displacementMap, this.displacementScale = e.displacementScale, this.displacementBias = e.displacementBias, this.specularMap = e.specularMap, this.alphaMap = e.alphaMap, this.envMap = e.envMap, this.combine = e.combine, this.reflectivity = e.reflectivity, this.refractionRatio = e.refractionRatio, this.wireframe = e.wireframe, this.wireframeLinewidth = e.wireframeLinewidth, this.wireframeLinecap = e.wireframeLinecap, this.wireframeLinejoin = e.wireframeLinejoin, this.flatShading = e.flatShading, this
						}
					}]), t
				}(tp);
				aY.prototype.isMeshPhongMaterial = !0,
					function(e) {
						function t(e) {
							var n;
							return d(this, t), (n = h(this, t)).defines = {
								TOON: ""
							}, n.type = "MeshToonMaterial", n.color = new ee(0xffffff), n.map = null, n.gradientMap = null, n.lightMap = null, n.lightMapIntensity = 1, n.aoMap = null, n.aoMapIntensity = 1, n.emissive = new ee(0), n.emissiveIntensity = 1, n.emissiveMap = null, n.bumpMap = null, n.bumpScale = 1, n.normalMap = null, n.normalMapType = 0, n.normalScale = new W(1, 1), n.displacementMap = null, n.displacementScale = 1, n.displacementBias = 0, n.alphaMap = null, n.wireframe = !1, n.wireframeLinewidth = 1, n.wireframeLinecap = "round", n.wireframeLinejoin = "round", n.setValues(e), n
						}
						return y(t, e), p(t, [{
							key: "copy",
							value: function(e) {
								return v(g(t.prototype), "copy", this).call(this, e), this.color.copy(e.color), this.map = e.map, this.gradientMap = e.gradientMap, this.lightMap = e.lightMap, this.lightMapIntensity = e.lightMapIntensity, this.aoMap = e.aoMap, this.aoMapIntensity = e.aoMapIntensity, this.emissive.copy(e.emissive), this.emissiveMap = e.emissiveMap, this.emissiveIntensity = e.emissiveIntensity, this.bumpMap = e.bumpMap, this.bumpScale = e.bumpScale, this.normalMap = e.normalMap, this.normalMapType = e.normalMapType, this.normalScale.copy(e.normalScale), this.displacementMap = e.displacementMap, this.displacementScale = e.displacementScale, this.displacementBias = e.displacementBias, this.alphaMap = e.alphaMap, this.wireframe = e.wireframe, this.wireframeLinewidth = e.wireframeLinewidth, this.wireframeLinecap = e.wireframeLinecap, this.wireframeLinejoin = e.wireframeLinejoin, this
							}
						}]), t
					}(tp).prototype.isMeshToonMaterial = !0,
					function(e) {
						function t(e) {
							var n;
							return d(this, t), (n = h(this, t)).type = "MeshNormalMaterial", n.bumpMap = null, n.bumpScale = 1, n.normalMap = null, n.normalMapType = 0, n.normalScale = new W(1, 1), n.displacementMap = null, n.displacementScale = 1, n.displacementBias = 0, n.wireframe = !1, n.wireframeLinewidth = 1, n.fog = !1, n.flatShading = !1, n.setValues(e), n
						}
						return y(t, e), p(t, [{
							key: "copy",
							value: function(e) {
								return v(g(t.prototype), "copy", this).call(this, e), this.bumpMap = e.bumpMap, this.bumpScale = e.bumpScale, this.normalMap = e.normalMap, this.normalMapType = e.normalMapType, this.normalScale.copy(e.normalScale), this.displacementMap = e.displacementMap, this.displacementScale = e.displacementScale, this.displacementBias = e.displacementBias, this.wireframe = e.wireframe, this.wireframeLinewidth = e.wireframeLinewidth, this.flatShading = e.flatShading, this
							}
						}]), t
					}(tp).prototype.isMeshNormalMaterial = !0,
					function(e) {
						function t(e) {
							var n;
							return d(this, t), (n = h(this, t)).type = "MeshLambertMaterial", n.color = new ee(0xffffff), n.map = null, n.lightMap = null, n.lightMapIntensity = 1, n.aoMap = null, n.aoMapIntensity = 1, n.emissive = new ee(0), n.emissiveIntensity = 1, n.emissiveMap = null, n.specularMap = null, n.alphaMap = null, n.envMap = null, n.combine = 0, n.reflectivity = 1, n.refractionRatio = .98, n.wireframe = !1, n.wireframeLinewidth = 1, n.wireframeLinecap = "round", n.wireframeLinejoin = "round", n.setValues(e), n
						}
						return y(t, e), p(t, [{
							key: "copy",
							value: function(e) {
								return v(g(t.prototype), "copy", this).call(this, e), this.color.copy(e.color), this.map = e.map, this.lightMap = e.lightMap, this.lightMapIntensity = e.lightMapIntensity, this.aoMap = e.aoMap, this.aoMapIntensity = e.aoMapIntensity, this.emissive.copy(e.emissive), this.emissiveMap = e.emissiveMap, this.emissiveIntensity = e.emissiveIntensity, this.specularMap = e.specularMap, this.alphaMap = e.alphaMap, this.envMap = e.envMap, this.combine = e.combine, this.reflectivity = e.reflectivity, this.refractionRatio = e.refractionRatio, this.wireframe = e.wireframe, this.wireframeLinewidth = e.wireframeLinewidth, this.wireframeLinecap = e.wireframeLinecap, this.wireframeLinejoin = e.wireframeLinejoin, this
							}
						}]), t
					}(tp).prototype.isMeshLambertMaterial = !0,
					function(e) {
						function t(e) {
							var n;
							return d(this, t), (n = h(this, t)).defines = {
								MATCAP: ""
							}, n.type = "MeshMatcapMaterial", n.color = new ee(0xffffff), n.matcap = null, n.map = null, n.bumpMap = null, n.bumpScale = 1, n.normalMap = null, n.normalMapType = 0, n.normalScale = new W(1, 1), n.displacementMap = null, n.displacementScale = 1, n.displacementBias = 0, n.alphaMap = null, n.flatShading = !1, n.setValues(e), n
						}
						return y(t, e), p(t, [{
							key: "copy",
							value: function(e) {
								return v(g(t.prototype), "copy", this).call(this, e), this.defines = {
									MATCAP: ""
								}, this.color.copy(e.color), this.matcap = e.matcap, this.map = e.map, this.bumpMap = e.bumpMap, this.bumpScale = e.bumpScale, this.normalMap = e.normalMap, this.normalMapType = e.normalMapType, this.normalScale.copy(e.normalScale), this.displacementMap = e.displacementMap, this.displacementScale = e.displacementScale, this.displacementBias = e.displacementBias, this.alphaMap = e.alphaMap, this.flatShading = e.flatShading, this
							}
						}]), t
					}(tp).prototype.isMeshMatcapMaterial = !0,
					function(e) {
						function t(e) {
							var n;
							return d(this, t), (n = h(this, t)).type = "LineDashedMaterial", n.scale = 1, n.dashSize = 3, n.gapSize = 1, n.setValues(e), n
						}
						return y(t, e), p(t, [{
							key: "copy",
							value: function(e) {
								return v(g(t.prototype), "copy", this).call(this, e), this.scale = e.scale, this.dashSize = e.dashSize, this.gapSize = e.gapSize, this
							}
						}]), t
					}(rK).prototype.isLineDashedMaterial = !0;
				var aJ = {
						arraySlice: function(e, t, n) {
							return aJ.isTypedArray(e) ? new e.constructor(e.subarray(t, void 0 !== n ? n : e.length)) : e.slice(t, n)
						},
						convertArray: function(e, t, n) {
							return e && (n || e.constructor !== t) ? "number" == typeof t.BYTES_PER_ELEMENT ? new t(e) : Array.prototype.slice.call(e) : e
						},
						isTypedArray: function(e) {
							return ArrayBuffer.isView(e) && !(e instanceof DataView)
						},
						getKeyframeOrder: function(e) {
							for (var t = e.length, n = Array(t), i = 0; i !== t; ++i) n[i] = i;
							return n.sort(function(t, n) {
								return e[t] - e[n]
							}), n
						},
						sortedArray: function(e, t, n) {
							for (var i = e.length, r = new e.constructor(i), a = 0, o = 0; o !== i; ++a)
								for (var s = n[a] * t, l = 0; l !== t; ++l) r[o++] = e[s + l];
							return r
						},
						flattenJSON: function(e, t, n, i) {
							for (var r = 1, a = e[0]; void 0 !== a && void 0 === a[i];) a = e[r++];
							if (void 0 !== a) {
								var o = a[i];
								if (void 0 !== o) {
									if (Array.isArray(o))
										do void 0 !== (o = a[i]) && (t.push(a.time), n.push.apply(n, o)), a = e[r++]; while (void 0 !== a);
									else if (void 0 !== o.toArray)
										do void 0 !== (o = a[i]) && (t.push(a.time), o.toArray(n, n.length)), a = e[r++]; while (void 0 !== a);
									else
										do void 0 !== (o = a[i]) && (t.push(a.time), n.push(o)), a = e[r++]; while (void 0 !== a)
								}
							}
						},
						subclip: function(e, t, n, i) {
							var r = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 30,
								a = e.clone();
							a.name = t;
							for (var o = [], s = 0; s < a.tracks.length; ++s) {
								for (var l = a.tracks[s], u = l.getValueSize(), c = [], h = [], d = 0; d < l.times.length; ++d) {
									var f = l.times[d] * r;
									if (!(f < n || f >= i)) {
										c.push(l.times[d]);
										for (var p = 0; p < u; ++p) h.push(l.values[d * u + p])
									}
								}
								0 !== c.length && (l.times = aJ.convertArray(c, l.times.constructor), l.values = aJ.convertArray(h, l.values.constructor), o.push(l))
							}
							a.tracks = o;
							for (var m = 1 / 0, v = 0; v < a.tracks.length; ++v) m > a.tracks[v].times[0] && (m = a.tracks[v].times[0]);
							for (var g = 0; g < a.tracks.length; ++g) a.tracks[g].shift(-1 * m);
							return a.resetDuration(), a
						},
						makeClipAdditive: function(e) {
							var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
								n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : e,
								i = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 30;
							i <= 0 && (i = 30);
							for (var r = n.tracks.length, a = t / i, o = 0; o < r; ++o) ! function(t) {
								var i = n.tracks[t],
									r = i.ValueTypeName;
								if ("bool" !== r && "string" !== r) {
									var o = e.tracks.find(function(e) {
										return e.name === i.name && e.ValueTypeName === r
									});
									if (void 0 !== o) {
										var s = 0,
											l = i.getValueSize();
										i.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline && (s = l / 3);
										var u = 0,
											c = o.getValueSize();
										o.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline && (u = c / 3);
										var h = i.times.length - 1,
											d = void 0;
										if (a <= i.times[0]) {
											var f = s,
												p = l - s;
											d = aJ.arraySlice(i.values, f, p)
										} else if (a >= i.times[h]) {
											var m = h * l + s,
												v = m + l - s;
											d = aJ.arraySlice(i.values, m, v)
										} else {
											var g = i.createInterpolant(),
												y = s,
												x = l - s;
											g.evaluate(a), d = aJ.arraySlice(g.resultBuffer, y, x)
										}
										"quaternion" === r && (new el).fromArray(d).normalize().conjugate().toArray(d);
										for (var _ = o.times.length, b = 0; b < _; ++b) {
											var w = b * c + u;
											if ("quaternion" === r) el.multiplyQuaternionsFlat(o.values, w, d, 0, o.values, w);
											else
												for (var M = c - 2 * u, S = 0; S < M; ++S) o.values[w + S] -= d[S]
										}
									}
								}
							}(o);
							return e.blendMode = 2501, e
						}
					},
					aZ = function() {
						function e(t, n, i, r) {
							d(this, e), this.parameterPositions = t, this._cachedIndex = 0, this.resultBuffer = void 0 !== r ? r : new n.constructor(i), this.sampleValues = n, this.valueSize = i, this.settings = null, this.DefaultSettings_ = {}
						}
						return p(e, [{
							key: "evaluate",
							value: function(e) {
								var t, n = this.parameterPositions,
									i = this._cachedIndex,
									r = n[i],
									a = n[i - 1];
								e: {
									t: {
										n: {
											i: if (!(e < r)) {
												for (var o = i + 2;;) {
													if (void 0 === r) {
														if (e < a) break i;
														return i = n.length, this._cachedIndex = i, this.afterEnd_(i - 1, e, a)
													}
													if (i === o) break;
													if (a = r, e < (r = n[++i])) break t
												}
												t = n.length;
												break n
											}if (e >= a) break e;
											var s = n[1];e < s && (i = 2, a = s);
											for (var l = i - 2;;) {
												if (void 0 === a) return this._cachedIndex = 0, this.beforeStart_(0, e, r);
												if (i === l) break;
												if (r = a, e >= (a = n[--i - 1])) break t
											}
											t = i,
											i = 0
										}
										for (; i < t;) {
											var u = i + t >>> 1;
											e < n[u] ? t = u : i = u + 1
										}
										if (r = n[i], void 0 === (a = n[i - 1])) return this._cachedIndex = 0,
										this.beforeStart_(0, e, r);
										if (void 0 === r) return i = n.length,
										this._cachedIndex = i,
										this.afterEnd_(i - 1, a, e)
									}
									this._cachedIndex = i,
									this.intervalChanged_(i, a, r)
								}
								return this.interpolate_(i, a, e, r)
							}
						}, {
							key: "getSettings_",
							value: function() {
								return this.settings || this.DefaultSettings_
							}
						}, {
							key: "copySampleValue_",
							value: function(e) {
								for (var t = this.resultBuffer, n = this.sampleValues, i = this.valueSize, r = e * i, a = 0; a !== i; ++a) t[a] = n[r + a];
								return t
							}
						}, {
							key: "interpolate_",
							value: function() {
								throw Error("call to abstract method")
							}
						}, {
							key: "intervalChanged_",
							value: function() {}
						}]), e
					}();
				aZ.prototype.beforeStart_ = aZ.prototype.copySampleValue_, aZ.prototype.afterEnd_ = aZ.prototype.copySampleValue_;
				var aK = function(e) {
						function t(e, n, i, r) {
							var a;
							return d(this, t), (a = h(this, t, [e, n, i, r]))._weightPrev = -0, a._offsetPrev = -0, a._weightNext = -0, a._offsetNext = -0, a.DefaultSettings_ = {
								endingStart: 2400,
								endingEnd: 2400
							}, a
						}
						return y(t, e), p(t, [{
							key: "intervalChanged_",
							value: function(e, t, n) {
								var i = this.parameterPositions,
									r = e - 2,
									a = e + 1,
									o = i[r],
									s = i[a];
								if (void 0 === o) switch (this.getSettings_().endingStart) {
									case 2401:
										r = e, o = 2 * t - n;
										break;
									case 2402:
										r = i.length - 2, o = t + i[r] - i[r + 1];
										break;
									default:
										r = e, o = n
								}
								if (void 0 === s) switch (this.getSettings_().endingEnd) {
									case 2401:
										a = e, s = 2 * n - t;
										break;
									case 2402:
										a = 1, s = n + i[1] - i[0];
										break;
									default:
										a = e - 1, s = t
								}
								var l = .5 * (n - t),
									u = this.valueSize;
								this._weightPrev = l / (t - o), this._weightNext = l / (s - n), this._offsetPrev = r * u, this._offsetNext = a * u
							}
						}, {
							key: "interpolate_",
							value: function(e, t, n, i) {
								for (var r = this.resultBuffer, a = this.sampleValues, o = this.valueSize, s = e * o, l = s - o, u = this._offsetPrev, c = this._offsetNext, h = this._weightPrev, d = this._weightNext, f = (n - t) / (i - t), p = f * f, m = p * f, v = -h * m + 2 * h * p - h * f, g = (1 + h) * m + (-1.5 - 2 * h) * p + (-.5 + h) * f + 1, y = (-1 - d) * m + (1.5 + d) * p + .5 * f, x = d * m - d * p, _ = 0; _ !== o; ++_) r[_] = v * a[u + _] + g * a[l + _] + y * a[s + _] + x * a[c + _];
								return r
							}
						}]), t
					}(aZ),
					aQ = function(e) {
						function t(e, n, i, r) {
							return d(this, t), h(this, t, [e, n, i, r])
						}
						return y(t, e), p(t, [{
							key: "interpolate_",
							value: function(e, t, n, i) {
								for (var r = this.resultBuffer, a = this.sampleValues, o = this.valueSize, s = e * o, l = s - o, u = (n - t) / (i - t), c = 1 - u, h = 0; h !== o; ++h) r[h] = a[l + h] * c + a[s + h] * u;
								return r
							}
						}]), t
					}(aZ),
					a$ = function(e) {
						function t(e, n, i, r) {
							return d(this, t), h(this, t, [e, n, i, r])
						}
						return y(t, e), p(t, [{
							key: "interpolate_",
							value: function(e) {
								return this.copySampleValue_(e - 1)
							}
						}]), t
					}(aZ),
					a0 = function() {
						function e(t, n, i, r) {
							if (d(this, e), void 0 === t) throw Error("THREE.KeyframeTrack: track name is undefined");
							if (void 0 === n || 0 === n.length) throw Error("THREE.KeyframeTrack: no keyframes in track named " + t);
							this.name = t, this.times = aJ.convertArray(n, this.TimeBufferType), this.values = aJ.convertArray(i, this.ValueBufferType), this.setInterpolation(r || this.DefaultInterpolation)
						}
						return p(e, [{
							key: "InterpolantFactoryMethodDiscrete",
							value: function(e) {
								return new a$(this.times, this.values, this.getValueSize(), e)
							}
						}, {
							key: "InterpolantFactoryMethodLinear",
							value: function(e) {
								return new aQ(this.times, this.values, this.getValueSize(), e)
							}
						}, {
							key: "InterpolantFactoryMethodSmooth",
							value: function(e) {
								return new aK(this.times, this.values, this.getValueSize(), e)
							}
						}, {
							key: "setInterpolation",
							value: function(e) {
								var t;
								switch (e) {
									case 2300:
										t = this.InterpolantFactoryMethodDiscrete;
										break;
									case 2301:
										t = this.InterpolantFactoryMethodLinear;
										break;
									case 2302:
										t = this.InterpolantFactoryMethodSmooth
								}
								if (void 0 === t) {
									var n = "unsupported interpolation for " + this.ValueTypeName + " keyframe track named " + this.name;
									if (void 0 === this.createInterpolant) {
										if (e === this.DefaultInterpolation) throw Error(n);
										this.setInterpolation(this.DefaultInterpolation)
									}
									return console.warn("THREE.KeyframeTrack:", n), this
								}
								return this.createInterpolant = t, this
							}
						}, {
							key: "getInterpolation",
							value: function() {
								switch (this.createInterpolant) {
									case this.InterpolantFactoryMethodDiscrete:
										return 2300;
									case this.InterpolantFactoryMethodLinear:
										return 2301;
									case this.InterpolantFactoryMethodSmooth:
										return 2302
								}
							}
						}, {
							key: "getValueSize",
							value: function() {
								return this.values.length / this.times.length
							}
						}, {
							key: "shift",
							value: function(e) {
								if (0 !== e)
									for (var t = this.times, n = 0, i = t.length; n !== i; ++n) t[n] += e;
								return this
							}
						}, {
							key: "scale",
							value: function(e) {
								if (1 !== e)
									for (var t = this.times, n = 0, i = t.length; n !== i; ++n) t[n] *= e;
								return this
							}
						}, {
							key: "trim",
							value: function(e, t) {
								for (var n = this.times, i = n.length, r = 0, a = i - 1; r !== i && n[r] < e;) ++r;
								for (; - 1 !== a && n[a] > t;) --a;
								if (++a, 0 !== r || a !== i) {
									r >= a && (r = (a = Math.max(a, 1)) - 1);
									var o = this.getValueSize();
									this.times = aJ.arraySlice(n, r, a), this.values = aJ.arraySlice(this.values, r * o, a * o)
								}
								return this
							}
						}, {
							key: "validate",
							value: function() {
								var e = !0,
									t = this.getValueSize();
								t - Math.floor(t) != 0 && (console.error("THREE.KeyframeTrack: Invalid value size in track.", this), e = !1);
								var n = this.times,
									i = this.values,
									r = n.length;
								0 === r && (console.error("THREE.KeyframeTrack: Track is empty.", this), e = !1);
								for (var a = null, o = 0; o !== r; o++) {
									var s = n[o];
									if ("number" == typeof s && isNaN(s)) {
										console.error("THREE.KeyframeTrack: Time is not a valid number.", this, o, s), e = !1;
										break
									}
									if (null !== a && a > s) {
										console.error("THREE.KeyframeTrack: Out of order keys.", this, o, s, a), e = !1;
										break
									}
									a = s
								}
								if (void 0 !== i && aJ.isTypedArray(i))
									for (var l = 0, u = i.length; l !== u; ++l) {
										var c = i[l];
										if (isNaN(c)) {
											console.error("THREE.KeyframeTrack: Value is not a valid number.", this, l, c), e = !1;
											break
										}
									}
								return e
							}
						}, {
							key: "optimize",
							value: function() {
								for (var e = aJ.arraySlice(this.times), t = aJ.arraySlice(this.values), n = this.getValueSize(), i = 2302 === this.getInterpolation(), r = e.length - 1, a = 1, o = 1; o < r; ++o) {
									var s = !1,
										l = e[o];
									if (l !== e[o + 1] && (1 !== o || l !== e[0])) {
										if (i) s = !0;
										else
											for (var u = o * n, c = u - n, h = u + n, d = 0; d !== n; ++d) {
												var f = t[u + d];
												if (f !== t[c + d] || f !== t[h + d]) {
													s = !0;
													break
												}
											}
									}
									if (s) {
										if (o !== a) {
											e[a] = e[o];
											for (var p = o * n, m = a * n, v = 0; v !== n; ++v) t[m + v] = t[p + v]
										}++a
									}
								}
								if (r > 0) {
									e[a] = e[r];
									for (var g = r * n, y = a * n, x = 0; x !== n; ++x) t[y + x] = t[g + x];
									++a
								}
								return a !== e.length ? (this.times = aJ.arraySlice(e, 0, a), this.values = aJ.arraySlice(t, 0, a * n)) : (this.times = e, this.values = t), this
							}
						}, {
							key: "clone",
							value: function() {
								var e = aJ.arraySlice(this.times, 0),
									t = aJ.arraySlice(this.values, 0),
									n = new this.constructor(this.name, e, t);
								return n.createInterpolant = this.createInterpolant, n
							}
						}], [{
							key: "toJSON",
							value: function(e) {
								var t, n = e.constructor;
								if (n.toJSON !== this.toJSON) t = n.toJSON(e);
								else {
									t = {
										name: e.name,
										times: aJ.convertArray(e.times, Array),
										values: aJ.convertArray(e.values, Array)
									};
									var i = e.getInterpolation();
									i !== e.DefaultInterpolation && (t.interpolation = i)
								}
								return t.type = e.ValueTypeName, t
							}
						}]), e
					}();
				a0.prototype.TimeBufferType = Float32Array, a0.prototype.ValueBufferType = Float32Array, a0.prototype.DefaultInterpolation = 2301;
				var a1 = function(e) {
					function t() {
						return d(this, t), h(this, t, arguments)
					}
					return y(t, e), t
				}(a0);
				a1.prototype.ValueTypeName = "bool", a1.prototype.ValueBufferType = Array, a1.prototype.DefaultInterpolation = 2300, a1.prototype.InterpolantFactoryMethodLinear = void 0, a1.prototype.InterpolantFactoryMethodSmooth = void 0;
				var a3 = function(e) {
					function t() {
						return d(this, t), h(this, t, arguments)
					}
					return y(t, e), t
				}(a0);
				a3.prototype.ValueTypeName = "color";
				var a2 = function(e) {
					function t() {
						return d(this, t), h(this, t, arguments)
					}
					return y(t, e), t
				}(a0);
				a2.prototype.ValueTypeName = "number";
				var a4 = function(e) {
						function t(e, n, i, r) {
							return d(this, t), h(this, t, [e, n, i, r])
						}
						return y(t, e), p(t, [{
							key: "interpolate_",
							value: function(e, t, n, i) {
								for (var r = this.resultBuffer, a = this.sampleValues, o = this.valueSize, s = (n - t) / (i - t), l = e * o, u = l + o; l !== u; l += 4) el.slerpFlat(r, 0, a, l - o, a, l, s);
								return r
							}
						}]), t
					}(aZ),
					a5 = function(e) {
						function t() {
							return d(this, t), h(this, t, arguments)
						}
						return y(t, e), p(t, [{
							key: "InterpolantFactoryMethodLinear",
							value: function(e) {
								return new a4(this.times, this.values, this.getValueSize(), e)
							}
						}]), t
					}(a0);
				a5.prototype.ValueTypeName = "quaternion", a5.prototype.DefaultInterpolation = 2301, a5.prototype.InterpolantFactoryMethodSmooth = void 0;
				var a6 = function(e) {
					function t() {
						return d(this, t), h(this, t, arguments)
					}
					return y(t, e), t
				}(a0);
				a6.prototype.ValueTypeName = "string", a6.prototype.ValueBufferType = Array, a6.prototype.DefaultInterpolation = 2300, a6.prototype.InterpolantFactoryMethodLinear = void 0, a6.prototype.InterpolantFactoryMethodSmooth = void 0;
				var a8 = function(e) {
					function t() {
						return d(this, t), h(this, t, arguments)
					}
					return y(t, e), t
				}(a0);
				a8.prototype.ValueTypeName = "vector";
				var a7 = function() {
						function e(t) {
							var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : -1,
								i = arguments.length > 2 ? arguments[2] : void 0,
								r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 2500;
							d(this, e), this.name = t, this.tracks = i, this.duration = n, this.blendMode = r, this.uuid = B(), this.duration < 0 && this.resetDuration()
						}
						return p(e, [{
							key: "resetDuration",
							value: function() {
								for (var e = 0, t = 0, n = this.tracks.length; t !== n; ++t) {
									var i = this.tracks[t];
									e = Math.max(e, i.times[i.times.length - 1])
								}
								return this.duration = e, this
							}
						}, {
							key: "trim",
							value: function() {
								for (var e = 0; e < this.tracks.length; e++) this.tracks[e].trim(0, this.duration);
								return this
							}
						}, {
							key: "validate",
							value: function() {
								for (var e = !0, t = 0; t < this.tracks.length; t++) e = e && this.tracks[t].validate();
								return e
							}
						}, {
							key: "optimize",
							value: function() {
								for (var e = 0; e < this.tracks.length; e++) this.tracks[e].optimize();
								return this
							}
						}, {
							key: "clone",
							value: function() {
								for (var e = [], t = 0; t < this.tracks.length; t++) e.push(this.tracks[t].clone());
								return new this.constructor(this.name, this.duration, e, this.blendMode)
							}
						}, {
							key: "toJSON",
							value: function() {
								return this.constructor.toJSON(this)
							}
						}], [{
							key: "parse",
							value: function(e) {
								for (var t = [], n = e.tracks, i = 1 / (e.fps || 1), r = 0, a = n.length; r !== a; ++r) t.push((function(e) {
									if (void 0 === e.type) throw Error("THREE.KeyframeTrack: track type undefined, can not parse");
									var t = function(e) {
										switch (e.toLowerCase()) {
											case "scalar":
											case "double":
											case "float":
											case "number":
											case "integer":
												return a2;
											case "vector":
											case "vector2":
											case "vector3":
											case "vector4":
												return a8;
											case "color":
												return a3;
											case "quaternion":
												return a5;
											case "bool":
											case "boolean":
												return a1;
											case "string":
												return a6
										}
										throw Error("THREE.KeyframeTrack: Unsupported typeName: " + e)
									}(e.type);
									if (void 0 === e.times) {
										var n = [],
											i = [];
										aJ.flattenJSON(e.keys, n, i, "value"), e.times = n, e.values = i
									}
									return void 0 !== t.parse ? t.parse(e) : new t(e.name, e.times, e.values, e.interpolation)
								})(n[r]).scale(i));
								var o = new this(e.name, e.duration, t, e.blendMode);
								return o.uuid = e.uuid, o
							}
						}, {
							key: "toJSON",
							value: function(e) {
								for (var t = [], n = e.tracks, i = {
										name: e.name,
										duration: e.duration,
										tracks: t,
										uuid: e.uuid,
										blendMode: e.blendMode
									}, r = 0, a = n.length; r !== a; ++r) t.push(a0.toJSON(n[r]));
								return i
							}
						}, {
							key: "CreateFromMorphTargetSequence",
							value: function(e, t, n, i) {
								for (var r = t.length, a = [], o = 0; o < r; o++) {
									var s = [],
										l = [];
									s.push((o + r - 1) % r, o, (o + 1) % r), l.push(0, 1, 0);
									var u = aJ.getKeyframeOrder(s);
									s = aJ.sortedArray(s, 1, u), l = aJ.sortedArray(l, 1, u), i || 0 !== s[0] || (s.push(r), l.push(l[0])), a.push(new a2(".morphTargetInfluences[" + t[o].name + "]", s, l).scale(1 / n))
								}
								return new this(e, -1, a)
							}
						}, {
							key: "findByName",
							value: function(e, t) {
								var n = e;
								Array.isArray(e) || (n = e.geometry && e.geometry.animations || e.animations);
								for (var i = 0; i < n.length; i++)
									if (n[i].name === t) return n[i];
								return null
							}
						}, {
							key: "CreateClipsFromMorphTargetSequences",
							value: function(e, t, n) {
								for (var i = {}, r = /^([\w-]*?)([\d]+)$/, a = 0, o = e.length; a < o; a++) {
									var s = e[a],
										l = s.name.match(r);
									if (l && l.length > 1) {
										var u = l[1],
											c = i[u];
										c || (i[u] = c = []), c.push(s)
									}
								}
								var h = [];
								for (var d in i) h.push(this.CreateFromMorphTargetSequence(d, i[d], t, n));
								return h
							}
						}, {
							key: "parseAnimation",
							value: function(e, t) {
								if (!e) return console.error("THREE.AnimationClip: No animation in JSONLoader data."), null;
								for (var n = function(e, t, n, i, r) {
										if (0 !== n.length) {
											var a = [],
												o = [];
											aJ.flattenJSON(n, a, o, i), 0 !== a.length && r.push(new e(t, a, o))
										}
									}, i = [], r = e.name || "default", a = e.fps || 30, o = e.blendMode, s = e.length || -1, l = e.hierarchy || [], u = 0; u < l.length; u++) {
									var c = l[u].keys;
									if (c && 0 !== c.length) {
										if (c[0].morphTargets) {
											var h = {},
												d = void 0;
											for (d = 0; d < c.length; d++)
												if (c[d].morphTargets)
													for (var f = 0; f < c[d].morphTargets.length; f++) h[c[d].morphTargets[f]] = -1;
											for (var p in h) {
												for (var m = [], v = [], g = 0; g !== c[d].morphTargets.length; ++g) {
													var y = c[d];
													m.push(y.time), v.push(+(y.morphTarget === p))
												}
												i.push(new a2(".morphTargetInfluence[" + p + "]", m, v))
											}
											s = h.length * a
										} else {
											var x = ".bones[" + t[u].name + "]";
											n(a8, x + ".position", c, "pos", i), n(a5, x + ".quaternion", c, "rot", i), n(a8, x + ".scale", c, "scl", i)
										}
									}
								}
								return 0 === i.length ? null : new this(r, s, i, o)
							}
						}]), e
					}(),
					a9 = {
						enabled: !1,
						files: {},
						add: function(e, t) {
							!1 !== this.enabled && (this.files[e] = t)
						},
						get: function(e) {
							if (!1 !== this.enabled) return this.files[e]
						},
						remove: function(e) {
							delete this.files[e]
						},
						clear: function() {
							this.files = {}
						}
					},
					oe = new function e(t, n, i) {
						d(this, e);
						var r, a = this,
							o = !1,
							s = 0,
							l = 0,
							u = [];
						this.onStart = void 0, this.onLoad = t, this.onProgress = n, this.onError = i, this.itemStart = function(e) {
							l++, !1 === o && void 0 !== a.onStart && a.onStart(e, s, l), o = !0
						}, this.itemEnd = function(e) {
							s++, void 0 !== a.onProgress && a.onProgress(e, s, l), s === l && (o = !1, void 0 !== a.onLoad && a.onLoad())
						}, this.itemError = function(e) {
							void 0 !== a.onError && a.onError(e)
						}, this.resolveURL = function(e) {
							return r ? r(e) : e
						}, this.setURLModifier = function(e) {
							return r = e, this
						}, this.addHandler = function(e, t) {
							return u.push(e, t), this
						}, this.removeHandler = function(e) {
							var t = u.indexOf(e);
							return -1 !== t && u.splice(t, 2), this
						}, this.getHandler = function(e) {
							for (var t = 0, n = u.length; t < n; t += 2) {
								var i = u[t],
									r = u[t + 1];
								if (i.global && (i.lastIndex = 0), i.test(e)) return r
							}
							return null
						}
					},
					ot = function() {
						function e(t) {
							d(this, e), this.manager = void 0 !== t ? t : oe, this.crossOrigin = "anonymous", this.withCredentials = !1, this.path = "", this.resourcePath = "", this.requestHeader = {}
						}
						return p(e, [{
							key: "load",
							value: function() {}
						}, {
							key: "loadAsync",
							value: function(e, t) {
								var n = this;
								return new Promise(function(i, r) {
									n.load(e, i, t, r)
								})
							}
						}, {
							key: "parse",
							value: function() {}
						}, {
							key: "setCrossOrigin",
							value: function(e) {
								return this.crossOrigin = e, this
							}
						}, {
							key: "setWithCredentials",
							value: function(e) {
								return this.withCredentials = e, this
							}
						}, {
							key: "setPath",
							value: function(e) {
								return this.path = e, this
							}
						}, {
							key: "setResourcePath",
							value: function(e) {
								return this.resourcePath = e, this
							}
						}, {
							key: "setRequestHeader",
							value: function(e) {
								return this.requestHeader = e, this
							}
						}]), e
					}(),
					on = {},
					oi = function(e) {
						function t(e) {
							return d(this, t), h(this, t, [e])
						}
						return y(t, e), p(t, [{
							key: "load",
							value: function(e, t, n, i) {
								var r = this;
								void 0 === e && (e = ""), void 0 !== this.path && (e = this.path + e), e = this.manager.resolveURL(e);
								var a = a9.get(e);
								if (void 0 !== a) return this.manager.itemStart(e), setTimeout(function() {
									t && t(a), r.manager.itemEnd(e)
								}, 0), a;
								if (void 0 !== on[e]) return void on[e].push({
									onLoad: t,
									onProgress: n,
									onError: i
								});
								on[e] = [], on[e].push({
									onLoad: t,
									onProgress: n,
									onError: i
								});
								var o = new Request(e, {
										headers: new Headers(this.requestHeader),
										credentials: this.withCredentials ? "include" : "same-origin"
									}),
									s = this.mimeType,
									l = this.responseType;
								fetch(o).then(function(t) {
									if (200 === t.status || 0 === t.status) {
										if (0 === t.status && console.warn("THREE.FileLoader: HTTP Status 0 received."), "undefined" == typeof ReadableStream || void 0 === t.body.getReader) return t;
										var n = on[e],
											i = t.body.getReader(),
											r = t.headers.get("Content-Length"),
											a = r ? parseInt(r) : 0,
											o = 0 !== a,
											s = 0;
										return new Response(new ReadableStream({
											start: function(e) {
												! function t() {
													i.read().then(function(i) {
														var r = i.done,
															l = i.value;
														if (r) e.close();
														else {
															for (var u = new ProgressEvent("progress", {
																	lengthComputable: o,
																	loaded: s += l.byteLength,
																	total: a
																}), c = 0, h = n.length; c < h; c++) {
																var d = n[c];
																d.onProgress && d.onProgress(u)
															}
															e.enqueue(l), t()
														}
													})
												}()
											}
										}))
									}
									throw Error('fetch for "'.concat(t.url, '" responded with ').concat(t.status, ": ").concat(t.statusText))
								}).then(function(e) {
									switch (l) {
										case "arraybuffer":
											return e.arrayBuffer();
										case "blob":
											return e.blob();
										case "document":
											return e.text().then(function(e) {
												return (new DOMParser).parseFromString(e, s)
											});
										case "json":
											return e.json();
										default:
											if (void 0 === s) return e.text();
											var t = /charset="?([^;"\s]*)"?/i.exec(s),
												n = new TextDecoder(t && t[1] ? t[1].toLowerCase() : void 0);
											return e.arrayBuffer().then(function(e) {
												return n.decode(e)
											})
									}
								}).then(function(t) {
									a9.add(e, t);
									var n = on[e];
									delete on[e];
									for (var i = 0, r = n.length; i < r; i++) {
										var a = n[i];
										a.onLoad && a.onLoad(t)
									}
								}).catch(function(t) {
									var n = on[e];
									if (void 0 === n) throw r.manager.itemError(e), t;
									delete on[e];
									for (var i = 0, a = n.length; i < a; i++) {
										var o = n[i];
										o.onError && o.onError(t)
									}
									r.manager.itemError(e)
								}).finally(function() {
									r.manager.itemEnd(e)
								}), this.manager.itemStart(e)
							}
						}, {
							key: "setResponseType",
							value: function(e) {
								return this.responseType = e, this
							}
						}, {
							key: "setMimeType",
							value: function(e) {
								return this.mimeType = e, this
							}
						}]), t
					}(ot),
					or = function(e) {
						function t(e) {
							return d(this, t), h(this, t, [e])
						}
						return y(t, e), p(t, [{
							key: "load",
							value: function(e, t, n, i) {
								void 0 !== this.path && (e = this.path + e), e = this.manager.resolveURL(e);
								var r = this,
									a = a9.get(e);
								if (void 0 !== a) return r.manager.itemStart(e), setTimeout(function() {
									t && t(a), r.manager.itemEnd(e)
								}, 0), a;
								var o = X("img");

								function s() {
									u(), a9.add(e, this), t && t(this), r.manager.itemEnd(e)
								}

								function l(t) {
									u(), i && i(t), r.manager.itemError(e), r.manager.itemEnd(e)
								}

								function u() {
									o.removeEventListener("load", s, !1), o.removeEventListener("error", l, !1)
								}
								return o.addEventListener("load", s, !1), o.addEventListener("error", l, !1), "data:" !== e.substr(0, 5) && void 0 !== this.crossOrigin && (o.crossOrigin = this.crossOrigin), r.manager.itemStart(e), o.src = e, o
							}
						}]), t
					}(ot),
					oa = function(e) {
						function t(e) {
							return d(this, t), h(this, t, [e])
						}
						return y(t, e), p(t, [{
							key: "load",
							value: function(e, t, n, i) {
								var r = new t2,
									a = new or(this.manager);
								a.setCrossOrigin(this.crossOrigin), a.setPath(this.path);
								for (var o = 0, s = 0; s < e.length; ++s) ! function(n) {
									a.load(e[n], function(e) {
										r.images[n] = e, 6 == ++o && (r.needsUpdate = !0, t && t(r))
									}, void 0, i)
								}(s);
								return r
							}
						}]), t
					}(ot),
					oo = function(e) {
						function t(e) {
							return d(this, t), h(this, t, [e])
						}
						return y(t, e), p(t, [{
							key: "load",
							value: function(e, t, n, i) {
								var r = new ei,
									a = new or(this.manager);
								return a.setCrossOrigin(this.crossOrigin), a.setPath(this.path), a.load(e, function(e) {
									r.image = e, r.needsUpdate = !0, void 0 !== t && t(r)
								}, n, i), r
							}
						}]), t
					}(ot),
					os = function(e) {
						function t(e) {
							var n, i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
							return d(this, t), (n = h(this, t)).type = "Light", n.color = new ee(e), n.intensity = i, n
						}
						return y(t, e), p(t, [{
							key: "dispose",
							value: function() {}
						}, {
							key: "copy",
							value: function(e) {
								return v(g(t.prototype), "copy", this).call(this, e), this.color.copy(e.color), this.intensity = e.intensity, this
							}
						}, {
							key: "toJSON",
							value: function(e) {
								var n = v(g(t.prototype), "toJSON", this).call(this, e);
								return n.object.color = this.color.getHex(), n.object.intensity = this.intensity, void 0 !== this.groundColor && (n.object.groundColor = this.groundColor.getHex()), void 0 !== this.distance && (n.object.distance = this.distance), void 0 !== this.angle && (n.object.angle = this.angle), void 0 !== this.decay && (n.object.decay = this.decay), void 0 !== this.penumbra && (n.object.penumbra = this.penumbra), void 0 !== this.shadow && (n.object.shadow = this.shadow.toJSON()), n
							}
						}]), t
					}(tt);
				os.prototype.isLight = !0,
					function(e) {
						function t(e, n, i) {
							var r;
							return d(this, t), (r = h(this, t, [e, i])).type = "HemisphereLight", r.position.copy(tt.DefaultUp), r.updateMatrix(), r.groundColor = new ee(n), r
						}
						return y(t, e), p(t, [{
							key: "copy",
							value: function(e) {
								return os.prototype.copy.call(this, e), this.groundColor.copy(e.groundColor), this
							}
						}]), t
					}(os).prototype.isHemisphereLight = !0;
				var ol = new eB,
					ou = new eu,
					oc = new eu,
					oh = function() {
						function e(t) {
							d(this, e), this.camera = t, this.bias = 0, this.normalBias = 0, this.radius = 1, this.blurSamples = 8, this.mapSize = new W(512, 512), this.map = null, this.mapPass = null, this.matrix = new eB, this.autoUpdate = !0, this.needsUpdate = !1, this._frustum = new nt, this._frameExtents = new W(1, 1), this._viewportCount = 1, this._viewports = [new ea(0, 0, 1, 1)]
						}
						return p(e, [{
							key: "getViewportCount",
							value: function() {
								return this._viewportCount
							}
						}, {
							key: "getFrustum",
							value: function() {
								return this._frustum
							}
						}, {
							key: "updateMatrices",
							value: function(e) {
								var t = this.camera,
									n = this.matrix;
								ou.setFromMatrixPosition(e.matrixWorld), t.position.copy(ou), oc.setFromMatrixPosition(e.target.matrixWorld), t.lookAt(oc), t.updateMatrixWorld(), ol.multiplyMatrices(t.projectionMatrix, t.matrixWorldInverse), this._frustum.setFromProjectionMatrix(ol), n.set(.5, 0, 0, .5, 0, .5, 0, .5, 0, 0, .5, .5, 0, 0, 0, 1), n.multiply(t.projectionMatrix), n.multiply(t.matrixWorldInverse)
							}
						}, {
							key: "getViewport",
							value: function(e) {
								return this._viewports[e]
							}
						}, {
							key: "getFrameExtents",
							value: function() {
								return this._frameExtents
							}
						}, {
							key: "dispose",
							value: function() {
								this.map && this.map.dispose(), this.mapPass && this.mapPass.dispose()
							}
						}, {
							key: "copy",
							value: function(e) {
								return this.camera = e.camera.clone(), this.bias = e.bias, this.radius = e.radius, this.mapSize.copy(e.mapSize), this
							}
						}, {
							key: "clone",
							value: function() {
								return (new this.constructor).copy(this)
							}
						}, {
							key: "toJSON",
							value: function() {
								var e = {};
								return 0 !== this.bias && (e.bias = this.bias), 0 !== this.normalBias && (e.normalBias = this.normalBias), 1 !== this.radius && (e.radius = this.radius), 512 === this.mapSize.x && 512 === this.mapSize.y || (e.mapSize = this.mapSize.toArray()), e.camera = this.camera.toJSON(!1).object, delete e.camera.matrix, e
							}
						}]), e
					}(),
					od = function(e) {
						function t() {
							var e;
							return d(this, t), (e = h(this, t, [new t1(50, 1, .5, 500)])).focus = 1, e
						}
						return y(t, e), p(t, [{
							key: "updateMatrices",
							value: function(e) {
								var n = this.camera,
									i = 2 * F * e.angle * this.focus,
									r = this.mapSize.width / this.mapSize.height,
									a = e.distance || n.far;
								i === n.fov && r === n.aspect && a === n.far || (n.fov = i, n.aspect = r, n.far = a, n.updateProjectionMatrix()), v(g(t.prototype), "updateMatrices", this).call(this, e)
							}
						}, {
							key: "copy",
							value: function(e) {
								return v(g(t.prototype), "copy", this).call(this, e), this.focus = e.focus, this
							}
						}]), t
					}(oh);
				od.prototype.isSpotLightShadow = !0,
					function(e) {
						function t(e, n) {
							var i, r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
								a = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : Math.PI / 3,
								o = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 0,
								s = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 1;
							return d(this, t), (i = h(this, t, [e, n])).type = "SpotLight", i.position.copy(tt.DefaultUp), i.updateMatrix(), i.target = new tt, i.distance = r, i.angle = a, i.penumbra = o, i.decay = s, i.shadow = new od, i
						}
						return y(t, e), p(t, [{
							key: "power",
							get: function() {
								return this.intensity * Math.PI
							},
							set: function(e) {
								this.intensity = e / Math.PI
							}
						}, {
							key: "dispose",
							value: function() {
								this.shadow.dispose()
							}
						}, {
							key: "copy",
							value: function(e) {
								return v(g(t.prototype), "copy", this).call(this, e), this.distance = e.distance, this.angle = e.angle, this.penumbra = e.penumbra, this.decay = e.decay, this.target = e.target.clone(), this.shadow = e.shadow.clone(), this
							}
						}]), t
					}(os).prototype.isSpotLight = !0;
				var of = new eB, op = new eu, om = new eu, ov = function(e) {
					function t() {
						var e;
						return d(this, t), (e = h(this, t, [new t1(90, 1, .5, 500)]))._frameExtents = new W(4, 2), e._viewportCount = 6, e._viewports = [new ea(2, 1, 1, 1), new ea(0, 1, 1, 1), new ea(3, 1, 1, 1), new ea(1, 1, 1, 1), new ea(3, 0, 1, 1), new ea(1, 0, 1, 1)], e._cubeDirections = [new eu(1, 0, 0), new eu(-1, 0, 0), new eu(0, 0, 1), new eu(0, 0, -1), new eu(0, 1, 0), new eu(0, -1, 0)], e._cubeUps = [new eu(0, 1, 0), new eu(0, 1, 0), new eu(0, 1, 0), new eu(0, 1, 0), new eu(0, 0, 1), new eu(0, 0, -1)], e
					}
					return y(t, e), p(t, [{
						key: "updateMatrices",
						value: function(e) {
							var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
								n = this.camera,
								i = this.matrix,
								r = e.distance || n.far;
							r !== n.far && (n.far = r, n.updateProjectionMatrix()), op.setFromMatrixPosition(e.matrixWorld), n.position.copy(op), om.copy(n.position), om.add(this._cubeDirections[t]), n.up.copy(this._cubeUps[t]), n.lookAt(om), n.updateMatrixWorld(), i.makeTranslation(-op.x, -op.y, -op.z), of.multiplyMatrices(n.projectionMatrix, n.matrixWorldInverse), this._frustum.setFromProjectionMatrix(of)
						}
					}]), t
				}(oh);
				ov.prototype.isPointLightShadow = !0,
					function(e) {
						function t(e, n) {
							var i, r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
								a = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 1;
							return d(this, t), (i = h(this, t, [e, n])).type = "PointLight", i.distance = r, i.decay = a, i.shadow = new ov, i
						}
						return y(t, e), p(t, [{
							key: "power",
							get: function() {
								return 4 * this.intensity * Math.PI
							},
							set: function(e) {
								this.intensity = e / (4 * Math.PI)
							}
						}, {
							key: "dispose",
							value: function() {
								this.shadow.dispose()
							}
						}, {
							key: "copy",
							value: function(e) {
								return v(g(t.prototype), "copy", this).call(this, e), this.distance = e.distance, this.decay = e.decay, this.shadow = e.shadow.clone(), this
							}
						}]), t
					}(os).prototype.isPointLight = !0;
				var og = function(e) {
					function t() {
						return d(this, t), h(this, t, [new np(-5, 5, 5, -5, .5, 500)])
					}
					return y(t, e), t
				}(oh);
				og.prototype.isDirectionalLightShadow = !0;
				var oy = function(e) {
					function t(e, n) {
						var i;
						return d(this, t), (i = h(this, t, [e, n])).type = "DirectionalLight", i.position.copy(tt.DefaultUp), i.updateMatrix(), i.target = new tt, i.shadow = new og, i
					}
					return y(t, e), p(t, [{
						key: "dispose",
						value: function() {
							this.shadow.dispose()
						}
					}, {
						key: "copy",
						value: function(e) {
							return v(g(t.prototype), "copy", this).call(this, e), this.target = e.target.clone(), this.shadow = e.shadow.clone(), this
						}
					}]), t
				}(os);
				oy.prototype.isDirectionalLight = !0;
				var ox = function(e) {
					function t(e, n) {
						var i;
						return d(this, t), (i = h(this, t, [e, n])).type = "AmbientLight", i
					}
					return y(t, e), t
				}(os);
				ox.prototype.isAmbientLight = !0,
					function(e) {
						function t(e, n) {
							var i, r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 10,
								a = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 10;
							return d(this, t), (i = h(this, t, [e, n])).type = "RectAreaLight", i.width = r, i.height = a, i
						}
						return y(t, e), p(t, [{
							key: "power",
							get: function() {
								return this.intensity * this.width * this.height * Math.PI
							},
							set: function(e) {
								this.intensity = e / (this.width * this.height * Math.PI)
							}
						}, {
							key: "copy",
							value: function(e) {
								return v(g(t.prototype), "copy", this).call(this, e), this.width = e.width, this.height = e.height, this
							}
						}, {
							key: "toJSON",
							value: function(e) {
								var n = v(g(t.prototype), "toJSON", this).call(this, e);
								return n.object.width = this.width, n.object.height = this.height, n
							}
						}]), t
					}(os).prototype.isRectAreaLight = !0;
				var o_ = function() {
					function e() {
						d(this, e), this.coefficients = [];
						for (var t = 0; t < 9; t++) this.coefficients.push(new eu)
					}
					return p(e, [{
						key: "set",
						value: function(e) {
							for (var t = 0; t < 9; t++) this.coefficients[t].copy(e[t]);
							return this
						}
					}, {
						key: "zero",
						value: function() {
							for (var e = 0; e < 9; e++) this.coefficients[e].set(0, 0, 0);
							return this
						}
					}, {
						key: "getAt",
						value: function(e, t) {
							var n = e.x,
								i = e.y,
								r = e.z,
								a = this.coefficients;
							return t.copy(a[0]).multiplyScalar(.282095), t.addScaledVector(a[1], .488603 * i), t.addScaledVector(a[2], .488603 * r), t.addScaledVector(a[3], .488603 * n), t.addScaledVector(a[4], n * i * 1.092548), t.addScaledVector(a[5], i * r * 1.092548), t.addScaledVector(a[6], .315392 * (3 * r * r - 1)), t.addScaledVector(a[7], n * r * 1.092548), t.addScaledVector(a[8], .546274 * (n * n - i * i)), t
						}
					}, {
						key: "getIrradianceAt",
						value: function(e, t) {
							var n = e.x,
								i = e.y,
								r = e.z,
								a = this.coefficients;
							return t.copy(a[0]).multiplyScalar(.886227), t.addScaledVector(a[1], 1.023328 * i), t.addScaledVector(a[2], 1.023328 * r), t.addScaledVector(a[3], 1.023328 * n), t.addScaledVector(a[4], .858086 * n * i), t.addScaledVector(a[5], .858086 * i * r), t.addScaledVector(a[6], .743125 * r * r - .247708), t.addScaledVector(a[7], .858086 * n * r), t.addScaledVector(a[8], .429043 * (n * n - i * i)), t
						}
					}, {
						key: "add",
						value: function(e) {
							for (var t = 0; t < 9; t++) this.coefficients[t].add(e.coefficients[t]);
							return this
						}
					}, {
						key: "addScaledSH",
						value: function(e, t) {
							for (var n = 0; n < 9; n++) this.coefficients[n].addScaledVector(e.coefficients[n], t);
							return this
						}
					}, {
						key: "scale",
						value: function(e) {
							for (var t = 0; t < 9; t++) this.coefficients[t].multiplyScalar(e);
							return this
						}
					}, {
						key: "lerp",
						value: function(e, t) {
							for (var n = 0; n < 9; n++) this.coefficients[n].lerp(e.coefficients[n], t);
							return this
						}
					}, {
						key: "equals",
						value: function(e) {
							for (var t = 0; t < 9; t++)
								if (!this.coefficients[t].equals(e.coefficients[t])) return !1;
							return !0
						}
					}, {
						key: "copy",
						value: function(e) {
							return this.set(e.coefficients)
						}
					}, {
						key: "clone",
						value: function() {
							return (new this.constructor).copy(this)
						}
					}, {
						key: "fromArray",
						value: function(e) {
							for (var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0, n = this.coefficients, i = 0; i < 9; i++) n[i].fromArray(e, t + 3 * i);
							return this
						}
					}, {
						key: "toArray",
						value: function() {
							for (var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [], t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0, n = this.coefficients, i = 0; i < 9; i++) n[i].toArray(e, t + 3 * i);
							return e
						}
					}], [{
						key: "getBasisAt",
						value: function(e, t) {
							var n = e.x,
								i = e.y,
								r = e.z;
							t[0] = .282095, t[1] = .488603 * i, t[2] = .488603 * r, t[3] = .488603 * n, t[4] = 1.092548 * n * i, t[5] = 1.092548 * i * r, t[6] = .315392 * (3 * r * r - 1), t[7] = 1.092548 * n * r, t[8] = .546274 * (n * n - i * i)
						}
					}]), e
				}();
				o_.prototype.isSphericalHarmonics3 = !0;
				var ob = function(e) {
					function t() {
						var e, n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : new o_,
							i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
						return d(this, t), (e = h(this, t, [void 0, i])).sh = n, e
					}
					return y(t, e), p(t, [{
						key: "copy",
						value: function(e) {
							return v(g(t.prototype), "copy", this).call(this, e), this.sh.copy(e.sh), this
						}
					}, {
						key: "fromJSON",
						value: function(e) {
							return this.intensity = e.intensity, this.sh.fromArray(e.sh), this
						}
					}, {
						key: "toJSON",
						value: function(e) {
							var n = v(g(t.prototype), "toJSON", this).call(this, e);
							return n.object.sh = this.sh.toArray(), n
						}
					}]), t
				}(os);
				ob.prototype.isLightProbe = !0;
				var ow = function() {
					function e() {
						d(this, e)
					}
					return p(e, null, [{
						key: "decodeText",
						value: function(e) {
							if ("undefined" != typeof TextDecoder) return (new TextDecoder).decode(e);
							for (var t = "", n = 0, i = e.length; n < i; n++) t += String.fromCharCode(e[n]);
							try {
								return decodeURIComponent(escape(t))
							} catch (e) {
								return t
							}
						}
					}, {
						key: "extractUrlBase",
						value: function(e) {
							var t = e.lastIndexOf("/");
							return -1 === t ? "./" : e.substr(0, t + 1)
						}
					}, {
						key: "resolveURL",
						value: function(e, t) {
							return "string" != typeof e || "" === e ? "" : (/^https?:\/\//i.test(t) && /^\//.test(e) && (t = t.replace(/(^https?:\/\/[^\/]+).*/i, "$1")), /^(https?:)?\/\//i.test(e) || /^data:.*,.*$/i.test(e) || /^blob:.*$/i.test(e) ? e : t + e)
						}
					}]), e
				}();
				(function(e) {
					function t() {
						var e;
						return d(this, t), (e = h(this, t)).type = "InstancedBufferGeometry", e.instanceCount = 1 / 0, e
					}
					return y(t, e), p(t, [{
						key: "copy",
						value: function(e) {
							return v(g(t.prototype), "copy", this).call(this, e), this.instanceCount = e.instanceCount, this
						}
					}, {
						key: "clone",
						value: function() {
							return (new this.constructor).copy(this)
						}
					}, {
						key: "toJSON",
						value: function() {
							var e = v(g(t.prototype), "toJSON", this).call(this, this);
							return e.instanceCount = this.instanceCount, e.isInstancedBufferGeometry = !0, e
						}
					}]), t
				})(tR).prototype.isInstancedBufferGeometry = !0,
					function(e) {
						function t(e) {
							var n;
							return d(this, t), n = h(this, t, [e]), "undefined" == typeof createImageBitmap && console.warn("THREE.ImageBitmapLoader: createImageBitmap() not supported."), "undefined" == typeof fetch && console.warn("THREE.ImageBitmapLoader: fetch() not supported."), n.options = {
								premultiplyAlpha: "none"
							}, n
						}
						return y(t, e), p(t, [{
							key: "setOptions",
							value: function(e) {
								return this.options = e, this
							}
						}, {
							key: "load",
							value: function(e, t, n, i) {
								void 0 === e && (e = ""), void 0 !== this.path && (e = this.path + e), e = this.manager.resolveURL(e);
								var r = this,
									a = a9.get(e);
								if (void 0 !== a) return r.manager.itemStart(e), setTimeout(function() {
									t && t(a), r.manager.itemEnd(e)
								}, 0), a;
								var o = {};
								o.credentials = "anonymous" === this.crossOrigin ? "same-origin" : "include", o.headers = this.requestHeader, fetch(e, o).then(function(e) {
									return e.blob()
								}).then(function(e) {
									return createImageBitmap(e, Object.assign(r.options, {
										colorSpaceConversion: "none"
									}))
								}).then(function(n) {
									a9.add(e, n), t && t(n), r.manager.itemEnd(e)
								}).catch(function(t) {
									i && i(t), r.manager.itemError(e), r.manager.itemEnd(e)
								}), r.manager.itemStart(e)
							}
						}]), t
					}(ot).prototype.isImageBitmapLoader = !0;
				var oM = function(e) {
					function t(e) {
						return d(this, t), h(this, t, [e])
					}
					return y(t, e), p(t, [{
						key: "load",
						value: function(e, t, n, i) {
							var r = this,
								o = new oi(this.manager);
							o.setResponseType("arraybuffer"), o.setPath(this.path), o.setRequestHeader(this.requestHeader), o.setWithCredentials(this.withCredentials), o.load(e, function(n) {
								try {
									var o = n.slice(0);
									(void 0 === a && (a = new(window.AudioContext || window.webkitAudioContext)), a).decodeAudioData(o, function(e) {
										t(e)
									})
								} catch (t) {
									i ? i(t) : console.error(t), r.manager.itemError(e)
								}
							}, n, i)
						}
					}]), t
				}(ot);
				(function(e) {
					function t(e, n) {
						var i, r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1;
						d(this, t), i = h(this, t, [void 0, r]);
						var a = (new ee).set(e),
							o = (new ee).set(n),
							s = new eu(a.r, a.g, a.b),
							l = new eu(o.r, o.g, o.b),
							u = Math.sqrt(Math.PI),
							c = u * Math.sqrt(.75);
						return i.sh.coefficients[0].copy(s).add(l).multiplyScalar(u), i.sh.coefficients[1].copy(s).sub(l).multiplyScalar(c), i
					}
					return y(t, e), t
				})(ob).prototype.isHemisphereLightProbe = !0,
					function(e) {
						function t(e) {
							var n, i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
							d(this, t), n = h(this, t, [void 0, i]);
							var r = (new ee).set(e);
							return n.sh.coefficients[0].set(r.r, r.g, r.b).multiplyScalar(2 * Math.sqrt(Math.PI)), n
						}
						return y(t, e), t
					}(ob).prototype.isAmbientLightProbe = !0;
				var oS = function() {
						function e(t, n, i) {
							var r, a, o;
							switch (d(this, e), this.binding = t, this.valueSize = i, n) {
								case "quaternion":
									r = this._slerp, a = this._slerpAdditive, o = this._setAdditiveIdentityQuaternion, this.buffer = new Float64Array(6 * i), this._workIndex = 5;
									break;
								case "string":
								case "bool":
									r = this._select, a = this._select, o = this._setAdditiveIdentityOther, this.buffer = Array(5 * i);
									break;
								default:
									r = this._lerp, a = this._lerpAdditive, o = this._setAdditiveIdentityNumeric, this.buffer = new Float64Array(5 * i)
							}
							this._mixBufferRegion = r, this._mixBufferRegionAdditive = a, this._setIdentity = o, this._origIndex = 3, this._addIndex = 4, this.cumulativeWeight = 0, this.cumulativeWeightAdditive = 0, this.useCount = 0, this.referenceCount = 0
						}
						return p(e, [{
							key: "accumulate",
							value: function(e, t) {
								var n = this.buffer,
									i = this.valueSize,
									r = e * i + i,
									a = this.cumulativeWeight;
								if (0 === a) {
									for (var o = 0; o !== i; ++o) n[r + o] = n[o];
									a = t
								} else {
									a += t;
									var s = t / a;
									this._mixBufferRegion(n, r, 0, s, i)
								}
								this.cumulativeWeight = a
							}
						}, {
							key: "accumulateAdditive",
							value: function(e) {
								var t = this.buffer,
									n = this.valueSize,
									i = n * this._addIndex;
								0 === this.cumulativeWeightAdditive && this._setIdentity(), this._mixBufferRegionAdditive(t, i, 0, e, n), this.cumulativeWeightAdditive += e
							}
						}, {
							key: "apply",
							value: function(e) {
								var t = this.valueSize,
									n = this.buffer,
									i = e * t + t,
									r = this.cumulativeWeight,
									a = this.cumulativeWeightAdditive,
									o = this.binding;
								if (this.cumulativeWeight = 0, this.cumulativeWeightAdditive = 0, r < 1) {
									var s = t * this._origIndex;
									this._mixBufferRegion(n, i, s, 1 - r, t)
								}
								a > 0 && this._mixBufferRegionAdditive(n, i, this._addIndex * t, 1, t);
								for (var l = t, u = t + t; l !== u; ++l)
									if (n[l] !== n[l + t]) {
										o.setValue(n, i);
										break
									}
							}
						}, {
							key: "saveOriginalState",
							value: function() {
								var e = this.binding,
									t = this.buffer,
									n = this.valueSize,
									i = n * this._origIndex;
								e.getValue(t, i);
								for (var r = n; r !== i; ++r) t[r] = t[i + r % n];
								this._setIdentity(), this.cumulativeWeight = 0, this.cumulativeWeightAdditive = 0
							}
						}, {
							key: "restoreOriginalState",
							value: function() {
								var e = 3 * this.valueSize;
								this.binding.setValue(this.buffer, e)
							}
						}, {
							key: "_setAdditiveIdentityNumeric",
							value: function() {
								for (var e = this._addIndex * this.valueSize, t = e + this.valueSize, n = e; n < t; n++) this.buffer[n] = 0
							}
						}, {
							key: "_setAdditiveIdentityQuaternion",
							value: function() {
								this._setAdditiveIdentityNumeric(), this.buffer[this._addIndex * this.valueSize + 3] = 1
							}
						}, {
							key: "_setAdditiveIdentityOther",
							value: function() {
								for (var e = this._origIndex * this.valueSize, t = this._addIndex * this.valueSize, n = 0; n < this.valueSize; n++) this.buffer[t + n] = this.buffer[e + n]
							}
						}, {
							key: "_select",
							value: function(e, t, n, i, r) {
								if (i >= .5)
									for (var a = 0; a !== r; ++a) e[t + a] = e[n + a]
							}
						}, {
							key: "_slerp",
							value: function(e, t, n, i) {
								el.slerpFlat(e, t, e, t, e, n, i)
							}
						}, {
							key: "_slerpAdditive",
							value: function(e, t, n, i, r) {
								var a = this._workIndex * r;
								el.multiplyQuaternionsFlat(e, a, e, t, e, n), el.slerpFlat(e, t, e, t, e, a, i)
							}
						}, {
							key: "_lerp",
							value: function(e, t, n, i, r) {
								for (var a = 1 - i, o = 0; o !== r; ++o) {
									var s = t + o;
									e[s] = e[s] * a + e[n + o] * i
								}
							}
						}, {
							key: "_lerpAdditive",
							value: function(e, t, n, i, r) {
								for (var a = 0; a !== r; ++a) {
									var o = t + a;
									e[o] = e[o] + e[n + a] * i
								}
							}
						}]), e
					}(),
					oT = "\\[\\]\\.:\\/",
					oE = RegExp("[" + oT + "]", "g"),
					oA = "[^" + oT + "]",
					ok = "[^" + oT.replace("\\.", "") + "]",
					oR = RegExp("^" + /((?:WC+[\/:])*)/.source.replace("WC", oA) + /(WCOD+)?/.source.replace("WCOD", ok) + /(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC", oA) + /\.(WC+)(?:\[(.+)\])?/.source.replace("WC", oA) + "$"),
					oL = ["material", "materials", "bones"],
					oC = function() {
						function e(t, n, i) {
							d(this, e), this.path = n, this.parsedPath = i || e.parseTrackName(n), this.node = e.findNode(t, this.parsedPath.nodeName) || t, this.rootNode = t, this.getValue = this._getValue_unbound, this.setValue = this._setValue_unbound
						}
						return p(e, [{
							key: "_getValue_unavailable",
							value: function() {}
						}, {
							key: "_setValue_unavailable",
							value: function() {}
						}, {
							key: "_getValue_direct",
							value: function(e, t) {
								e[t] = this.targetObject[this.propertyName]
							}
						}, {
							key: "_getValue_array",
							value: function(e, t) {
								for (var n = this.resolvedProperty, i = 0, r = n.length; i !== r; ++i) e[t++] = n[i]
							}
						}, {
							key: "_getValue_arrayElement",
							value: function(e, t) {
								e[t] = this.resolvedProperty[this.propertyIndex]
							}
						}, {
							key: "_getValue_toArray",
							value: function(e, t) {
								this.resolvedProperty.toArray(e, t)
							}
						}, {
							key: "_setValue_direct",
							value: function(e, t) {
								this.targetObject[this.propertyName] = e[t]
							}
						}, {
							key: "_setValue_direct_setNeedsUpdate",
							value: function(e, t) {
								this.targetObject[this.propertyName] = e[t], this.targetObject.needsUpdate = !0
							}
						}, {
							key: "_setValue_direct_setMatrixWorldNeedsUpdate",
							value: function(e, t) {
								this.targetObject[this.propertyName] = e[t], this.targetObject.matrixWorldNeedsUpdate = !0
							}
						}, {
							key: "_setValue_array",
							value: function(e, t) {
								for (var n = this.resolvedProperty, i = 0, r = n.length; i !== r; ++i) n[i] = e[t++]
							}
						}, {
							key: "_setValue_array_setNeedsUpdate",
							value: function(e, t) {
								for (var n = this.resolvedProperty, i = 0, r = n.length; i !== r; ++i) n[i] = e[t++];
								this.targetObject.needsUpdate = !0
							}
						}, {
							key: "_setValue_array_setMatrixWorldNeedsUpdate",
							value: function(e, t) {
								for (var n = this.resolvedProperty, i = 0, r = n.length; i !== r; ++i) n[i] = e[t++];
								this.targetObject.matrixWorldNeedsUpdate = !0
							}
						}, {
							key: "_setValue_arrayElement",
							value: function(e, t) {
								this.resolvedProperty[this.propertyIndex] = e[t]
							}
						}, {
							key: "_setValue_arrayElement_setNeedsUpdate",
							value: function(e, t) {
								this.resolvedProperty[this.propertyIndex] = e[t], this.targetObject.needsUpdate = !0
							}
						}, {
							key: "_setValue_arrayElement_setMatrixWorldNeedsUpdate",
							value: function(e, t) {
								this.resolvedProperty[this.propertyIndex] = e[t], this.targetObject.matrixWorldNeedsUpdate = !0
							}
						}, {
							key: "_setValue_fromArray",
							value: function(e, t) {
								this.resolvedProperty.fromArray(e, t)
							}
						}, {
							key: "_setValue_fromArray_setNeedsUpdate",
							value: function(e, t) {
								this.resolvedProperty.fromArray(e, t), this.targetObject.needsUpdate = !0
							}
						}, {
							key: "_setValue_fromArray_setMatrixWorldNeedsUpdate",
							value: function(e, t) {
								this.resolvedProperty.fromArray(e, t), this.targetObject.matrixWorldNeedsUpdate = !0
							}
						}, {
							key: "_getValue_unbound",
							value: function(e, t) {
								this.bind(), this.getValue(e, t)
							}
						}, {
							key: "_setValue_unbound",
							value: function(e, t) {
								this.bind(), this.setValue(e, t)
							}
						}, {
							key: "bind",
							value: function() {
								var t = this.node,
									n = this.parsedPath,
									i = n.objectName,
									r = n.propertyName,
									a = n.propertyIndex;
								if (t || (t = e.findNode(this.rootNode, n.nodeName) || this.rootNode, this.node = t), this.getValue = this._getValue_unavailable, this.setValue = this._setValue_unavailable, !t) return void console.error("THREE.PropertyBinding: Trying to update node for track: " + this.path + " but it wasn't found.");
								if (i) {
									var o = n.objectIndex;
									switch (i) {
										case "materials":
											if (!t.material) return void console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.", this);
											if (!t.material.materials) return void console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.", this);
											t = t.material.materials;
											break;
										case "bones":
											if (!t.skeleton) return void console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.", this);
											t = t.skeleton.bones;
											for (var s = 0; s < t.length; s++)
												if (t[s].name === o) {
													o = s;
													break
												} break;
										default:
											if (void 0 === t[i]) return void console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.", this);
											t = t[i]
									}
									if (void 0 !== o) {
										if (void 0 === t[o]) return void console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.", this, t);
										t = t[o]
									}
								}
								var l = t[r];
								if (void 0 === l) return void console.error("THREE.PropertyBinding: Trying to update property for track: " + n.nodeName + "." + r + " but it wasn't found.", t);
								var u = this.Versioning.None;
								this.targetObject = t, void 0 !== t.needsUpdate ? u = this.Versioning.NeedsUpdate : void 0 !== t.matrixWorldNeedsUpdate && (u = this.Versioning.MatrixWorldNeedsUpdate);
								var c = this.BindingType.Direct;
								if (void 0 !== a) {
									if ("morphTargetInfluences" === r) {
										if (!t.geometry) return void console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.", this);
										if (!t.geometry.isBufferGeometry) return void console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences on THREE.Geometry. Use THREE.BufferGeometry instead.", this);
										if (!t.geometry.morphAttributes) return void console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.", this);
										void 0 !== t.morphTargetDictionary[a] && (a = t.morphTargetDictionary[a])
									}
									c = this.BindingType.ArrayElement, this.resolvedProperty = l, this.propertyIndex = a
								} else void 0 !== l.fromArray && void 0 !== l.toArray ? (c = this.BindingType.HasFromToArray, this.resolvedProperty = l) : Array.isArray(l) ? (c = this.BindingType.EntireArray, this.resolvedProperty = l) : this.propertyName = r;
								this.getValue = this.GetterByBindingType[c], this.setValue = this.SetterByBindingTypeAndVersioning[c][u]
							}
						}, {
							key: "unbind",
							value: function() {
								this.node = null, this.getValue = this._getValue_unbound, this.setValue = this._setValue_unbound
							}
						}], [{
							key: "create",
							value: function(t, n, i) {
								return t && t.isAnimationObjectGroup ? new e.Composite(t, n, i) : new e(t, n, i)
							}
						}, {
							key: "sanitizeNodeName",
							value: function(e) {
								return e.replace(/\s/g, "_").replace(oE, "")
							}
						}, {
							key: "parseTrackName",
							value: function(e) {
								var t = oR.exec(e);
								if (!t) throw Error("PropertyBinding: Cannot parse trackName: " + e);
								var n = {
										nodeName: t[2],
										objectName: t[3],
										objectIndex: t[4],
										propertyName: t[5],
										propertyIndex: t[6]
									},
									i = n.nodeName && n.nodeName.lastIndexOf(".");
								if (void 0 !== i && -1 !== i) {
									var r = n.nodeName.substring(i + 1); - 1 !== oL.indexOf(r) && (n.nodeName = n.nodeName.substring(0, i), n.objectName = r)
								}
								if (null === n.propertyName || 0 === n.propertyName.length) throw Error("PropertyBinding: can not parse propertyName from trackName: " + e);
								return n
							}
						}, {
							key: "findNode",
							value: function(e, t) {
								if (!t || "" === t || "." === t || -1 === t || t === e.name || t === e.uuid) return e;
								if (e.skeleton) {
									var n = e.skeleton.getBoneByName(t);
									if (void 0 !== n) return n
								}
								if (e.children) {
									var i = function(e) {
											for (var n = 0; n < e.length; n++) {
												var r = e[n];
												if (r.name === t || r.uuid === t) return r;
												var a = i(r.children);
												if (a) return a
											}
											return null
										},
										r = i(e.children);
									if (r) return r
								}
								return null
							}
						}]), e
					}();
				oC.Composite = function() {
					function e(t, n, i) {
						d(this, e);
						var r = i || oC.parseTrackName(n);
						this._targetGroup = t, this._bindings = t.subscribe_(n, r)
					}
					return p(e, [{
						key: "getValue",
						value: function(e, t) {
							this.bind();
							var n = this._targetGroup.nCachedObjects_,
								i = this._bindings[n];
							void 0 !== i && i.getValue(e, t)
						}
					}, {
						key: "setValue",
						value: function(e, t) {
							for (var n = this._bindings, i = this._targetGroup.nCachedObjects_, r = n.length; i !== r; ++i) n[i].setValue(e, t)
						}
					}, {
						key: "bind",
						value: function() {
							for (var e = this._bindings, t = this._targetGroup.nCachedObjects_, n = e.length; t !== n; ++t) e[t].bind()
						}
					}, {
						key: "unbind",
						value: function() {
							for (var e = this._bindings, t = this._targetGroup.nCachedObjects_, n = e.length; t !== n; ++t) e[t].unbind()
						}
					}]), e
				}(), oC.prototype.BindingType = {
					Direct: 0,
					EntireArray: 1,
					ArrayElement: 2,
					HasFromToArray: 3
				}, oC.prototype.Versioning = {
					None: 0,
					NeedsUpdate: 1,
					MatrixWorldNeedsUpdate: 2
				}, oC.prototype.GetterByBindingType = [oC.prototype._getValue_direct, oC.prototype._getValue_array, oC.prototype._getValue_arrayElement, oC.prototype._getValue_toArray], oC.prototype.SetterByBindingTypeAndVersioning = [
					[oC.prototype._setValue_direct, oC.prototype._setValue_direct_setNeedsUpdate, oC.prototype._setValue_direct_setMatrixWorldNeedsUpdate],
					[oC.prototype._setValue_array, oC.prototype._setValue_array_setNeedsUpdate, oC.prototype._setValue_array_setMatrixWorldNeedsUpdate],
					[oC.prototype._setValue_arrayElement, oC.prototype._setValue_arrayElement_setNeedsUpdate, oC.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],
					[oC.prototype._setValue_fromArray, oC.prototype._setValue_fromArray_setNeedsUpdate, oC.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]
				];
				var oP = function() {
					function e(t, n) {
						var i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
							r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : n.blendMode;
						d(this, e), this._mixer = t, this._clip = n, this._localRoot = i, this.blendMode = r;
						for (var a = n.tracks, o = a.length, s = Array(o), l = {
								endingStart: 2400,
								endingEnd: 2400
							}, u = 0; u !== o; ++u) {
							var c = a[u].createInterpolant(null);
							s[u] = c, c.settings = l
						}
						this._interpolantSettings = l, this._interpolants = s, this._propertyBindings = Array(o), this._cacheIndex = null, this._byClipCacheIndex = null, this._timeScaleInterpolant = null, this._weightInterpolant = null, this.loop = 2201, this._loopCount = -1, this._startTime = null, this.time = 0, this.timeScale = 1, this._effectiveTimeScale = 1, this.weight = 1, this._effectiveWeight = 1, this.repetitions = 1 / 0, this.paused = !1, this.enabled = !0, this.clampWhenFinished = !1, this.zeroSlopeAtStart = !0, this.zeroSlopeAtEnd = !0
					}
					return p(e, [{
						key: "play",
						value: function() {
							return this._mixer._activateAction(this), this
						}
					}, {
						key: "stop",
						value: function() {
							return this._mixer._deactivateAction(this), this.reset()
						}
					}, {
						key: "reset",
						value: function() {
							return this.paused = !1, this.enabled = !0, this.time = 0, this._loopCount = -1, this._startTime = null, this.stopFading().stopWarping()
						}
					}, {
						key: "isRunning",
						value: function() {
							return this.enabled && !this.paused && 0 !== this.timeScale && null === this._startTime && this._mixer._isActiveAction(this)
						}
					}, {
						key: "isScheduled",
						value: function() {
							return this._mixer._isActiveAction(this)
						}
					}, {
						key: "startAt",
						value: function(e) {
							return this._startTime = e, this
						}
					}, {
						key: "setLoop",
						value: function(e, t) {
							return this.loop = e, this.repetitions = t, this
						}
					}, {
						key: "setEffectiveWeight",
						value: function(e) {
							return this.weight = e, this._effectiveWeight = this.enabled ? e : 0, this.stopFading()
						}
					}, {
						key: "getEffectiveWeight",
						value: function() {
							return this._effectiveWeight
						}
					}, {
						key: "fadeIn",
						value: function(e) {
							return this._scheduleFading(e, 0, 1)
						}
					}, {
						key: "fadeOut",
						value: function(e) {
							return this._scheduleFading(e, 1, 0)
						}
					}, {
						key: "crossFadeFrom",
						value: function(e, t, n) {
							if (e.fadeOut(t), this.fadeIn(t), n) {
								var i = this._clip.duration,
									r = e._clip.duration;
								e.warp(1, r / i, t), this.warp(i / r, 1, t)
							}
							return this
						}
					}, {
						key: "crossFadeTo",
						value: function(e, t, n) {
							return e.crossFadeFrom(this, t, n)
						}
					}, {
						key: "stopFading",
						value: function() {
							var e = this._weightInterpolant;
							return null !== e && (this._weightInterpolant = null, this._mixer._takeBackControlInterpolant(e)), this
						}
					}, {
						key: "setEffectiveTimeScale",
						value: function(e) {
							return this.timeScale = e, this._effectiveTimeScale = this.paused ? 0 : e, this.stopWarping()
						}
					}, {
						key: "getEffectiveTimeScale",
						value: function() {
							return this._effectiveTimeScale
						}
					}, {
						key: "setDuration",
						value: function(e) {
							return this.timeScale = this._clip.duration / e, this.stopWarping()
						}
					}, {
						key: "syncWith",
						value: function(e) {
							return this.time = e.time, this.timeScale = e.timeScale, this.stopWarping()
						}
					}, {
						key: "halt",
						value: function(e) {
							return this.warp(this._effectiveTimeScale, 0, e)
						}
					}, {
						key: "warp",
						value: function(e, t, n) {
							var i = this._mixer,
								r = i.time,
								a = this.timeScale,
								o = this._timeScaleInterpolant;
							null === o && (o = i._lendControlInterpolant(), this._timeScaleInterpolant = o);
							var s = o.parameterPositions,
								l = o.sampleValues;
							return s[0] = r, s[1] = r + n, l[0] = e / a, l[1] = t / a, this
						}
					}, {
						key: "stopWarping",
						value: function() {
							var e = this._timeScaleInterpolant;
							return null !== e && (this._timeScaleInterpolant = null, this._mixer._takeBackControlInterpolant(e)), this
						}
					}, {
						key: "getMixer",
						value: function() {
							return this._mixer
						}
					}, {
						key: "getClip",
						value: function() {
							return this._clip
						}
					}, {
						key: "getRoot",
						value: function() {
							return this._localRoot || this._mixer._root
						}
					}, {
						key: "_update",
						value: function(e, t, n, i) {
							if (!this.enabled) return void this._updateWeight(e);
							var r = this._startTime;
							if (null !== r) {
								var a = (e - r) * n;
								if (a < 0 || 0 === n) return;
								this._startTime = null, t = n * a
							}
							t *= this._updateTimeScale(e);
							var o = this._updateTime(t),
								s = this._updateWeight(e);
							if (s > 0) {
								var l = this._interpolants,
									u = this._propertyBindings;
								if (2501 === this.blendMode)
									for (var c = 0, h = l.length; c !== h; ++c) l[c].evaluate(o), u[c].accumulateAdditive(s);
								else
									for (var d = 0, f = l.length; d !== f; ++d) l[d].evaluate(o), u[d].accumulate(i, s)
							}
						}
					}, {
						key: "_updateWeight",
						value: function(e) {
							var t = 0;
							if (this.enabled) {
								t = this.weight;
								var n = this._weightInterpolant;
								if (null !== n) {
									var i = n.evaluate(e)[0];
									t *= i, e > n.parameterPositions[1] && (this.stopFading(), 0 === i && (this.enabled = !1))
								}
							}
							return this._effectiveWeight = t, t
						}
					}, {
						key: "_updateTimeScale",
						value: function(e) {
							var t = 0;
							if (!this.paused) {
								t = this.timeScale;
								var n = this._timeScaleInterpolant;
								null !== n && (t *= n.evaluate(e)[0], e > n.parameterPositions[1] && (this.stopWarping(), 0 === t ? this.paused = !0 : this.timeScale = t))
							}
							return this._effectiveTimeScale = t, t
						}
					}, {
						key: "_updateTime",
						value: function(e) {
							var t = this._clip.duration,
								n = this.loop,
								i = this.time + e,
								r = this._loopCount,
								a = 2202 === n;
							if (0 === e) return -1 === r || !a || 1 & ~r ? i : t - i;
							if (2200 === n) {
								-1 === r && (this._loopCount = 0, this._setEndings(!0, !0, !1));
								e: {
									if (i >= t) i = t;
									else {
										if (!(i < 0)) {
											this.time = i;
											break e
										}
										i = 0
									}
									this.clampWhenFinished ? this.paused = !0 : this.enabled = !1,
									this.time = i,
									this._mixer.dispatchEvent({
										type: "finished",
										action: this,
										direction: e < 0 ? -1 : 1
									})
								}
							} else {
								if (-1 === r && (e >= 0 ? (r = 0, this._setEndings(!0, 0 === this.repetitions, a)) : this._setEndings(0 === this.repetitions, !0, a)), i >= t || i < 0) {
									var o = Math.floor(i / t);
									i -= t * o, r += Math.abs(o);
									var s = this.repetitions - r;
									if (s <= 0) this.clampWhenFinished ? this.paused = !0 : this.enabled = !1, i = e > 0 ? t : 0, this.time = i, this._mixer.dispatchEvent({
										type: "finished",
										action: this,
										direction: e > 0 ? 1 : -1
									});
									else {
										if (1 === s) {
											var l = e < 0;
											this._setEndings(l, !l, a)
										} else this._setEndings(!1, !1, a);
										this._loopCount = r, this.time = i, this._mixer.dispatchEvent({
											type: "loop",
											action: this,
											loopDelta: o
										})
									}
								} else this.time = i;
								if (a && !(1 & ~r)) return t - i
							}
							return i
						}
					}, {
						key: "_setEndings",
						value: function(e, t, n) {
							var i = this._interpolantSettings;
							n ? (i.endingStart = 2401, i.endingEnd = 2401) : (i.endingStart = e ? this.zeroSlopeAtStart ? 2401 : 2400 : 2402, i.endingEnd = t ? this.zeroSlopeAtEnd ? 2401 : 2400 : 2402)
						}
					}, {
						key: "_scheduleFading",
						value: function(e, t, n) {
							var i = this._mixer,
								r = i.time,
								a = this._weightInterpolant;
							null === a && (a = i._lendControlInterpolant(), this._weightInterpolant = a);
							var o = a.parameterPositions,
								s = a.sampleValues;
							return o[0] = r, s[0] = t, o[1] = r + e, s[1] = n, this
						}
					}]), e
				}();
				(function(e) {
					function t(e) {
						var n;
						return d(this, t), (n = h(this, t))._root = e, n._initMemoryManager(), n._accuIndex = 0, n.time = 0, n.timeScale = 1, n
					}
					return y(t, e), p(t, [{
						key: "_bindAction",
						value: function(e, t) {
							var n = e._localRoot || this._root,
								i = e._clip.tracks,
								r = i.length,
								a = e._propertyBindings,
								o = e._interpolants,
								s = n.uuid,
								l = this._bindingsByRootAndName,
								u = l[s];
							void 0 === u && (u = {}, l[s] = u);
							for (var c = 0; c !== r; ++c) {
								var h = i[c],
									d = h.name,
									f = u[d];
								if (void 0 !== f) ++f.referenceCount, a[c] = f;
								else {
									if (void 0 !== (f = a[c])) {
										null === f._cacheIndex && (++f.referenceCount, this._addInactiveBinding(f, s, d));
										continue
									}
									var p = t && t._propertyBindings[c].binding.parsedPath;
									f = new oS(oC.create(n, d, p), h.ValueTypeName, h.getValueSize()), ++f.referenceCount, this._addInactiveBinding(f, s, d), a[c] = f
								}
								o[c].resultBuffer = f.buffer
							}
						}
					}, {
						key: "_activateAction",
						value: function(e) {
							if (!this._isActiveAction(e)) {
								if (null === e._cacheIndex) {
									var t = (e._localRoot || this._root).uuid,
										n = e._clip.uuid,
										i = this._actionsByClip[n];
									this._bindAction(e, i && i.knownActions[0]), this._addInactiveAction(e, n, t)
								}
								for (var r = e._propertyBindings, a = 0, o = r.length; a !== o; ++a) {
									var s = r[a];
									0 == s.useCount++ && (this._lendBinding(s), s.saveOriginalState())
								}
								this._lendAction(e)
							}
						}
					}, {
						key: "_deactivateAction",
						value: function(e) {
							if (this._isActiveAction(e)) {
								for (var t = e._propertyBindings, n = 0, i = t.length; n !== i; ++n) {
									var r = t[n];
									0 == --r.useCount && (r.restoreOriginalState(), this._takeBackBinding(r))
								}
								this._takeBackAction(e)
							}
						}
					}, {
						key: "_initMemoryManager",
						value: function() {
							this._actions = [], this._nActiveActions = 0, this._actionsByClip = {}, this._bindings = [], this._nActiveBindings = 0, this._bindingsByRootAndName = {}, this._controlInterpolants = [], this._nActiveControlInterpolants = 0;
							var e = this;
							this.stats = {
								actions: {
									get total() {
										return e._actions.length
									},
									get inUse() {
										return e._nActiveActions
									}
								},
								bindings: {
									get total() {
										return e._bindings.length
									},
									get inUse() {
										return e._nActiveBindings
									}
								},
								controlInterpolants: {
									get total() {
										return e._controlInterpolants.length
									},
									get inUse() {
										return e._nActiveControlInterpolants
									}
								}
							}
						}
					}, {
						key: "_isActiveAction",
						value: function(e) {
							var t = e._cacheIndex;
							return null !== t && t < this._nActiveActions
						}
					}, {
						key: "_addInactiveAction",
						value: function(e, t, n) {
							var i = this._actions,
								r = this._actionsByClip,
								a = r[t];
							if (void 0 === a) a = {
								knownActions: [e],
								actionByRoot: {}
							}, e._byClipCacheIndex = 0, r[t] = a;
							else {
								var o = a.knownActions;
								e._byClipCacheIndex = o.length, o.push(e)
							}
							e._cacheIndex = i.length, i.push(e), a.actionByRoot[n] = e
						}
					}, {
						key: "_removeInactiveAction",
						value: function(e) {
							var t = this._actions,
								n = t[t.length - 1],
								i = e._cacheIndex;
							n._cacheIndex = i, t[i] = n, t.pop(), e._cacheIndex = null;
							var r = e._clip.uuid,
								a = this._actionsByClip,
								o = a[r],
								s = o.knownActions,
								l = s[s.length - 1],
								u = e._byClipCacheIndex;
							l._byClipCacheIndex = u, s[u] = l, s.pop(), e._byClipCacheIndex = null, delete o.actionByRoot[(e._localRoot || this._root).uuid], 0 === s.length && delete a[r], this._removeInactiveBindingsForAction(e)
						}
					}, {
						key: "_removeInactiveBindingsForAction",
						value: function(e) {
							for (var t = e._propertyBindings, n = 0, i = t.length; n !== i; ++n) {
								var r = t[n];
								0 == --r.referenceCount && this._removeInactiveBinding(r)
							}
						}
					}, {
						key: "_lendAction",
						value: function(e) {
							var t = this._actions,
								n = e._cacheIndex,
								i = this._nActiveActions++,
								r = t[i];
							e._cacheIndex = i, t[i] = e, r._cacheIndex = n, t[n] = r
						}
					}, {
						key: "_takeBackAction",
						value: function(e) {
							var t = this._actions,
								n = e._cacheIndex,
								i = --this._nActiveActions,
								r = t[i];
							e._cacheIndex = i, t[i] = e, r._cacheIndex = n, t[n] = r
						}
					}, {
						key: "_addInactiveBinding",
						value: function(e, t, n) {
							var i = this._bindingsByRootAndName,
								r = this._bindings,
								a = i[t];
							void 0 === a && (a = {}, i[t] = a), a[n] = e, e._cacheIndex = r.length, r.push(e)
						}
					}, {
						key: "_removeInactiveBinding",
						value: function(e) {
							var t = this._bindings,
								n = e.binding,
								i = n.rootNode.uuid,
								r = n.path,
								a = this._bindingsByRootAndName,
								o = a[i],
								s = t[t.length - 1],
								l = e._cacheIndex;
							s._cacheIndex = l, t[l] = s, t.pop(), delete o[r], 0 === Object.keys(o).length && delete a[i]
						}
					}, {
						key: "_lendBinding",
						value: function(e) {
							var t = this._bindings,
								n = e._cacheIndex,
								i = this._nActiveBindings++,
								r = t[i];
							e._cacheIndex = i, t[i] = e, r._cacheIndex = n, t[n] = r
						}
					}, {
						key: "_takeBackBinding",
						value: function(e) {
							var t = this._bindings,
								n = e._cacheIndex,
								i = --this._nActiveBindings,
								r = t[i];
							e._cacheIndex = i, t[i] = e, r._cacheIndex = n, t[n] = r
						}
					}, {
						key: "_lendControlInterpolant",
						value: function() {
							var e = this._controlInterpolants,
								t = this._nActiveControlInterpolants++,
								n = e[t];
							return void 0 === n && ((n = new aQ(new Float32Array(2), new Float32Array(2), 1, this._controlInterpolantsResultBuffer)).__cacheIndex = t, e[t] = n), n
						}
					}, {
						key: "_takeBackControlInterpolant",
						value: function(e) {
							var t = this._controlInterpolants,
								n = e.__cacheIndex,
								i = --this._nActiveControlInterpolants,
								r = t[i];
							e.__cacheIndex = i, t[i] = e, r.__cacheIndex = n, t[n] = r
						}
					}, {
						key: "clipAction",
						value: function(e, t, n) {
							var i = t || this._root,
								r = i.uuid,
								a = "string" == typeof e ? a7.findByName(i, e) : e,
								o = null !== a ? a.uuid : e,
								s = this._actionsByClip[o],
								l = null;
							if (void 0 === n && (n = null !== a ? a.blendMode : 2500), void 0 !== s) {
								var u = s.actionByRoot[r];
								if (void 0 !== u && u.blendMode === n) return u;
								l = s.knownActions[0], null === a && (a = l._clip)
							}
							if (null === a) return null;
							var c = new oP(this, a, t, n);
							return this._bindAction(c, l), this._addInactiveAction(c, o, r), c
						}
					}, {
						key: "existingAction",
						value: function(e, t) {
							var n = t || this._root,
								i = n.uuid,
								r = "string" == typeof e ? a7.findByName(n, e) : e,
								a = r ? r.uuid : e,
								o = this._actionsByClip[a];
							return void 0 !== o && o.actionByRoot[i] || null
						}
					}, {
						key: "stopAllAction",
						value: function() {
							for (var e = this._actions, t = this._nActiveActions - 1; t >= 0; --t) e[t].stop();
							return this
						}
					}, {
						key: "update",
						value: function(e) {
							e *= this.timeScale;
							for (var t = this._actions, n = this._nActiveActions, i = this.time += e, r = Math.sign(e), a = this._accuIndex ^= 1, o = 0; o !== n; ++o) t[o]._update(i, e, r, a);
							for (var s = this._bindings, l = this._nActiveBindings, u = 0; u !== l; ++u) s[u].apply(a);
							return this
						}
					}, {
						key: "setTime",
						value: function(e) {
							this.time = 0;
							for (var t = 0; t < this._actions.length; t++) this._actions[t].time = 0;
							return this.update(e)
						}
					}, {
						key: "getRoot",
						value: function() {
							return this._root
						}
					}, {
						key: "uncacheClip",
						value: function(e) {
							var t = this._actions,
								n = e.uuid,
								i = this._actionsByClip,
								r = i[n];
							if (void 0 !== r) {
								for (var a = r.knownActions, o = 0, s = a.length; o !== s; ++o) {
									var l = a[o];
									this._deactivateAction(l);
									var u = l._cacheIndex,
										c = t[t.length - 1];
									l._cacheIndex = null, l._byClipCacheIndex = null, c._cacheIndex = u, t[u] = c, t.pop(), this._removeInactiveBindingsForAction(l)
								}
								delete i[n]
							}
						}
					}, {
						key: "uncacheRoot",
						value: function(e) {
							var t = e.uuid,
								n = this._actionsByClip;
							for (var i in n) {
								var r = n[i].actionByRoot[t];
								void 0 !== r && (this._deactivateAction(r), this._removeInactiveAction(r))
							}
							var a = this._bindingsByRootAndName[t];
							if (void 0 !== a)
								for (var o in a) {
									var s = a[o];
									s.restoreOriginalState(), this._removeInactiveBinding(s)
								}
						}
					}, {
						key: "uncacheAction",
						value: function(e, t) {
							var n = this.existingAction(e, t);
							null !== n && (this._deactivateAction(n), this._removeInactiveAction(n))
						}
					}]), t
				})(N).prototype._controlInterpolantsResultBuffer = new Float32Array(1),
					function(e) {
						function t(e, n) {
							var i, r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1;
							return d(this, t), (i = h(this, t, [e, n])).meshPerAttribute = r, i
						}
						return y(t, e), p(t, [{
							key: "copy",
							value: function(e) {
								return v(g(t.prototype), "copy", this).call(this, e), this.meshPerAttribute = e.meshPerAttribute, this
							}
						}, {
							key: "clone",
							value: function(e) {
								var n = v(g(t.prototype), "clone", this).call(this, e);
								return n.meshPerAttribute = this.meshPerAttribute, n
							}
						}, {
							key: "toJSON",
							value: function(e) {
								var n = v(g(t.prototype), "toJSON", this).call(this, e);
								return n.isInstancedInterleavedBuffer = !0, n.meshPerAttribute = this.meshPerAttribute, n
							}
						}]), t
					}(rM).prototype.isInstancedInterleavedBuffer = !0;
				var oD = function() {
						function e() {
							var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1,
								n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
								i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
							return d(this, e), this.radius = t, this.phi = n, this.theta = i, this
						}
						return p(e, [{
							key: "set",
							value: function(e, t, n) {
								return this.radius = e, this.phi = t, this.theta = n, this
							}
						}, {
							key: "copy",
							value: function(e) {
								return this.radius = e.radius, this.phi = e.phi, this.theta = e.theta, this
							}
						}, {
							key: "makeSafe",
							value: function() {
								return this.phi = Math.max(1e-6, Math.min(Math.PI - 1e-6, this.phi)), this
							}
						}, {
							key: "setFromVector3",
							value: function(e) {
								return this.setFromCartesianCoords(e.x, e.y, e.z)
							}
						}, {
							key: "setFromCartesianCoords",
							value: function(e, t, n) {
								return this.radius = Math.sqrt(e * e + t * t + n * n), 0 === this.radius ? (this.theta = 0, this.phi = 0) : (this.theta = Math.atan2(e, n), this.phi = Math.acos(H(t / this.radius, -1, 1))), this
							}
						}, {
							key: "clone",
							value: function() {
								return (new this.constructor).copy(this)
							}
						}]), e
					}(),
					oI = new eu,
					oN = new eB,
					oO = new eB;
				new Int32Array(new Float32Array(1).buffer), ar.create = function(e, t) {
						return console.log("THREE.Curve.create() has been deprecated"), e.prototype = Object.create(ar.prototype), e.prototype.constructor = e, e.prototype.getPoint = t, e
					}, aM.prototype.fromPoints = function(e) {
						return console.warn("THREE.Path: .fromPoints() has been renamed to .setFromPoints()."), this.setFromPoints(e)
					},
					function(e) {
						function t() {
							var e, n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 10,
								i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 10,
								r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 4473924,
								a = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 8947848;
							d(this, t), r = new ee(r), a = new ee(a);
							for (var o = i / 2, s = n / i, l = n / 2, u = [], c = [], f = 0, p = 0, m = -l; f <= i; f++, m += s) {
								u.push(-l, 0, m, l, 0, m), u.push(m, 0, -l, m, 0, l);
								var v = f === o ? r : a;
								v.toArray(c, p), p += 3, v.toArray(c, p), p += 3, v.toArray(c, p), p += 3, v.toArray(c, p), p += 3
							}
							var g = new tR;
							return g.setAttribute("position", new tb(u, 3)), g.setAttribute("color", new tb(c, 3)), (e = h(this, t, [g, new rK({
								vertexColors: !0,
								toneMapped: !1
							})])).type = "GridHelper", e
						}
						return y(t, e), t
					}(r6).prototype.setColors = function() {
						console.error("THREE.GridHelper: setColors() has been deprecated, pass them in the constructor instead.")
					},
					function(e) {
						function t(e) {
							d(this, t);
							for (var n, i = function e(t) {
									var n = [];
									t && t.isBone && n.push(t);
									for (var i = 0; i < t.children.length; i++) n.push.apply(n, e(t.children[i]));
									return n
								}(e), r = new tR, a = [], o = [], s = new ee(0, 0, 1), l = new ee(0, 1, 0), u = 0; u < i.length; u++) {
								var c = i[u];
								c.parent && c.parent.isBone && (a.push(0, 0, 0), a.push(0, 0, 0), o.push(s.r, s.g, s.b), o.push(l.r, l.g, l.b))
							}
							return r.setAttribute("position", new tb(a, 3)), r.setAttribute("color", new tb(o, 3)), (n = h(this, t, [r, new rK({
								vertexColors: !0,
								depthTest: !1,
								depthWrite: !1,
								toneMapped: !1,
								transparent: !0
							})])).type = "SkeletonHelper", n.isSkeletonHelper = !0, n.root = e, n.bones = i, n.matrix = e.matrixWorld, n.matrixAutoUpdate = !1, n
						}
						return y(t, e), p(t, [{
							key: "updateMatrixWorld",
							value: function(e) {
								var n = this.bones,
									i = this.geometry,
									r = i.getAttribute("position");
								oO.copy(this.root.matrixWorld).invert();
								for (var a = 0, o = 0; a < n.length; a++) {
									var s = n[a];
									s.parent && s.parent.isBone && (oN.multiplyMatrices(oO, s.matrixWorld), oI.setFromMatrixPosition(oN), r.setXYZ(o, oI.x, oI.y, oI.z), oN.multiplyMatrices(oO, s.parent.matrixWorld), oI.setFromMatrixPosition(oN), r.setXYZ(o + 1, oI.x, oI.y, oI.z), o += 2)
								}
								i.getAttribute("position").needsUpdate = !0, v(g(t.prototype), "updateMatrixWorld", this).call(this, e)
							}
						}]), t
					}(r6).prototype.update = function() {
						console.error("THREE.SkeletonHelper: update() no longer needs to be called.")
					}, ot.prototype.extractUrlBase = function(e) {
						return console.warn("THREE.Loader: .extractUrlBase() has been deprecated. Use THREE.LoaderUtils.extractUrlBase() instead."), ow.extractUrlBase(e)
					}, ot.Handlers = {
						add: function() {
							console.error("THREE.Loader: Handlers.add() has been removed. Use LoadingManager.addHandler() instead.")
						},
						get: function() {
							console.error("THREE.Loader: Handlers.get() has been removed. Use LoadingManager.getHandler() instead.")
						}
					}, ed.prototype.center = function(e) {
						return console.warn("THREE.Box3: .center() has been renamed to .getCenter()."), this.getCenter(e)
					}, ed.prototype.empty = function() {
						return console.warn("THREE.Box3: .empty() has been renamed to .isEmpty()."), this.isEmpty()
					}, ed.prototype.isIntersectionBox = function(e) {
						return console.warn("THREE.Box3: .isIntersectionBox() has been renamed to .intersectsBox()."), this.intersectsBox(e)
					}, ed.prototype.isIntersectionSphere = function(e) {
						return console.warn("THREE.Box3: .isIntersectionSphere() has been renamed to .intersectsSphere()."), this.intersectsSphere(e)
					}, ed.prototype.size = function(e) {
						return console.warn("THREE.Box3: .size() has been renamed to .getSize()."), this.getSize(e)
					}, eC.prototype.empty = function() {
						return console.warn("THREE.Sphere: .empty() has been renamed to .isEmpty()."), this.isEmpty()
					}, nt.prototype.setFromMatrix = function(e) {
						return console.warn("THREE.Frustum: .setFromMatrix() has been renamed to .setFromProjectionMatrix()."), this.setFromProjectionMatrix(e)
					}, j.prototype.flattenToArrayOffset = function(e, t) {
						return console.warn("THREE.Matrix3: .flattenToArrayOffset() has been deprecated. Use .toArray() instead."), this.toArray(e, t)
					}, j.prototype.multiplyVector3 = function(e) {
						return console.warn("THREE.Matrix3: .multiplyVector3() has been removed. Use vector.applyMatrix3( matrix ) instead."), e.applyMatrix3(this)
					}, j.prototype.multiplyVector3Array = function() {
						console.error("THREE.Matrix3: .multiplyVector3Array() has been removed.")
					}, j.prototype.applyToBufferAttribute = function(e) {
						return console.warn("THREE.Matrix3: .applyToBufferAttribute() has been removed. Use attribute.applyMatrix3( matrix ) instead."), e.applyMatrix3(this)
					}, j.prototype.applyToVector3Array = function() {
						console.error("THREE.Matrix3: .applyToVector3Array() has been removed.")
					}, j.prototype.getInverse = function(e) {
						return console.warn("THREE.Matrix3: .getInverse() has been removed. Use matrixInv.copy( matrix ).invert(); instead."), this.copy(e).invert()
					}, eB.prototype.extractPosition = function(e) {
						return console.warn("THREE.Matrix4: .extractPosition() has been renamed to .copyPosition()."), this.copyPosition(e)
					}, eB.prototype.flattenToArrayOffset = function(e, t) {
						return console.warn("THREE.Matrix4: .flattenToArrayOffset() has been deprecated. Use .toArray() instead."), this.toArray(e, t)
					}, eB.prototype.getPosition = function() {
						return console.warn("THREE.Matrix4: .getPosition() has been removed. Use Vector3.setFromMatrixPosition( matrix ) instead."), (new eu).setFromMatrixColumn(this, 3)
					}, eB.prototype.setRotationFromQuaternion = function(e) {
						return console.warn("THREE.Matrix4: .setRotationFromQuaternion() has been renamed to .makeRotationFromQuaternion()."), this.makeRotationFromQuaternion(e)
					}, eB.prototype.multiplyToArray = function() {
						console.warn("THREE.Matrix4: .multiplyToArray() has been removed.")
					}, eB.prototype.multiplyVector3 = function(e) {
						return console.warn("THREE.Matrix4: .multiplyVector3() has been removed. Use vector.applyMatrix4( matrix ) instead."), e.applyMatrix4(this)
					}, eB.prototype.multiplyVector4 = function(e) {
						return console.warn("THREE.Matrix4: .multiplyVector4() has been removed. Use vector.applyMatrix4( matrix ) instead."), e.applyMatrix4(this)
					}, eB.prototype.multiplyVector3Array = function() {
						console.error("THREE.Matrix4: .multiplyVector3Array() has been removed.")
					}, eB.prototype.rotateAxis = function(e) {
						console.warn("THREE.Matrix4: .rotateAxis() has been removed. Use Vector3.transformDirection( matrix ) instead."), e.transformDirection(this)
					}, eB.prototype.crossVector = function(e) {
						return console.warn("THREE.Matrix4: .crossVector() has been removed. Use vector.applyMatrix4( matrix ) instead."), e.applyMatrix4(this)
					}, eB.prototype.translate = function() {
						console.error("THREE.Matrix4: .translate() has been removed.")
					}, eB.prototype.rotateX = function() {
						console.error("THREE.Matrix4: .rotateX() has been removed.")
					}, eB.prototype.rotateY = function() {
						console.error("THREE.Matrix4: .rotateY() has been removed.")
					}, eB.prototype.rotateZ = function() {
						console.error("THREE.Matrix4: .rotateZ() has been removed.")
					}, eB.prototype.rotateByAxis = function() {
						console.error("THREE.Matrix4: .rotateByAxis() has been removed.")
					}, eB.prototype.applyToBufferAttribute = function(e) {
						return console.warn("THREE.Matrix4: .applyToBufferAttribute() has been removed. Use attribute.applyMatrix4( matrix ) instead."), e.applyMatrix4(this)
					}, eB.prototype.applyToVector3Array = function() {
						console.error("THREE.Matrix4: .applyToVector3Array() has been removed.")
					}, eB.prototype.makeFrustum = function(e, t, n, i, r, a) {
						return console.warn("THREE.Matrix4: .makeFrustum() has been removed. Use .makePerspective( left, right, top, bottom, near, far ) instead."), this.makePerspective(e, t, i, n, r, a)
					}, eB.prototype.getInverse = function(e) {
						return console.warn("THREE.Matrix4: .getInverse() has been removed. Use matrixInv.copy( matrix ).invert(); instead."), this.copy(e).invert()
					}, t7.prototype.isIntersectionLine = function(e) {
						return console.warn("THREE.Plane: .isIntersectionLine() has been renamed to .intersectsLine()."), this.intersectsLine(e)
					}, el.prototype.multiplyVector3 = function(e) {
						return console.warn("THREE.Quaternion: .multiplyVector3() has been removed. Use is now vector.applyQuaternion( quaternion ) instead."), e.applyQuaternion(this)
					}, el.prototype.inverse = function() {
						return console.warn("THREE.Quaternion: .inverse() has been renamed to invert()."), this.invert()
					}, eF.prototype.isIntersectionBox = function(e) {
						return console.warn("THREE.Ray: .isIntersectionBox() has been renamed to .intersectsBox()."), this.intersectsBox(e)
					}, eF.prototype.isIntersectionPlane = function(e) {
						return console.warn("THREE.Ray: .isIntersectionPlane() has been renamed to .intersectsPlane()."), this.intersectsPlane(e)
					}, eF.prototype.isIntersectionSphere = function(e) {
						return console.warn("THREE.Ray: .isIntersectionSphere() has been renamed to .intersectsSphere()."), this.intersectsSphere(e)
					}, td.prototype.area = function() {
						return console.warn("THREE.Triangle: .area() has been renamed to .getArea()."), this.getArea()
					}, td.prototype.barycoordFromPoint = function(e, t) {
						return console.warn("THREE.Triangle: .barycoordFromPoint() has been renamed to .getBarycoord()."), this.getBarycoord(e, t)
					}, td.prototype.midpoint = function(e) {
						return console.warn("THREE.Triangle: .midpoint() has been renamed to .getMidpoint()."), this.getMidpoint(e)
					}, td.prototypenormal = function(e) {
						return console.warn("THREE.Triangle: .normal() has been renamed to .getNormal()."), this.getNormal(e)
					}, td.prototype.plane = function(e) {
						return console.warn("THREE.Triangle: .plane() has been renamed to .getPlane()."), this.getPlane(e)
					}, td.barycoordFromPoint = function(e, t, n, i, r) {
						return console.warn("THREE.Triangle: .barycoordFromPoint() has been renamed to .getBarycoord()."), td.getBarycoord(e, t, n, i, r)
					}, td.normal = function(e, t, n, i) {
						return console.warn("THREE.Triangle: .normal() has been renamed to .getNormal()."), td.getNormal(e, t, n, i)
					}, aS.prototype.extractAllPoints = function(e) {
						return console.warn("THREE.Shape: .extractAllPoints() has been removed. Use .extractPoints() instead."), this.extractPoints(e)
					}, aS.prototype.extrude = function(e) {
						return console.warn("THREE.Shape: .extrude() has been removed. Use ExtrudeGeometry() instead."), new aW(this, e)
					}, aS.prototype.makeGeometry = function(e) {
						return console.warn("THREE.Shape: .makeGeometry() has been removed. Use ShapeGeometry() instead."), new aq(this, e)
					}, W.prototype.fromAttribute = function(e, t, n) {
						return console.warn("THREE.Vector2: .fromAttribute() has been renamed to .fromBufferAttribute()."), this.fromBufferAttribute(e, t, n)
					}, W.prototype.distanceToManhattan = function(e) {
						return console.warn("THREE.Vector2: .distanceToManhattan() has been renamed to .manhattanDistanceTo()."), this.manhattanDistanceTo(e)
					}, W.prototype.lengthManhattan = function() {
						return console.warn("THREE.Vector2: .lengthManhattan() has been renamed to .manhattanLength()."), this.manhattanLength()
					}, eu.prototype.setEulerFromRotationMatrix = function() {
						console.error("THREE.Vector3: .setEulerFromRotationMatrix() has been removed. Use Euler.setFromRotationMatrix() instead.")
					}, eu.prototype.setEulerFromQuaternion = function() {
						console.error("THREE.Vector3: .setEulerFromQuaternion() has been removed. Use Euler.setFromQuaternion() instead.")
					}, eu.prototype.getPositionFromMatrix = function(e) {
						return console.warn("THREE.Vector3: .getPositionFromMatrix() has been renamed to .setFromMatrixPosition()."), this.setFromMatrixPosition(e)
					}, eu.prototype.getScaleFromMatrix = function(e) {
						return console.warn("THREE.Vector3: .getScaleFromMatrix() has been renamed to .setFromMatrixScale()."), this.setFromMatrixScale(e)
					}, eu.prototype.getColumnFromMatrix = function(e, t) {
						return console.warn("THREE.Vector3: .getColumnFromMatrix() has been renamed to .setFromMatrixColumn()."), this.setFromMatrixColumn(t, e)
					}, eu.prototype.applyProjection = function(e) {
						return console.warn("THREE.Vector3: .applyProjection() has been removed. Use .applyMatrix4( m ) instead."), this.applyMatrix4(e)
					}, eu.prototype.fromAttribute = function(e, t, n) {
						return console.warn("THREE.Vector3: .fromAttribute() has been renamed to .fromBufferAttribute()."), this.fromBufferAttribute(e, t, n)
					}, eu.prototype.distanceToManhattan = function(e) {
						return console.warn("THREE.Vector3: .distanceToManhattan() has been renamed to .manhattanDistanceTo()."), this.manhattanDistanceTo(e)
					}, eu.prototype.lengthManhattan = function() {
						return console.warn("THREE.Vector3: .lengthManhattan() has been renamed to .manhattanLength()."), this.manhattanLength()
					}, ea.prototype.fromAttribute = function(e, t, n) {
						return console.warn("THREE.Vector4: .fromAttribute() has been renamed to .fromBufferAttribute()."), this.fromBufferAttribute(e, t, n)
					}, ea.prototype.lengthManhattan = function() {
						return console.warn("THREE.Vector4: .lengthManhattan() has been renamed to .manhattanLength()."), this.manhattanLength()
					}, tt.prototype.getChildByName = function(e) {
						return console.warn("THREE.Object3D: .getChildByName() has been renamed to .getObjectByName()."), this.getObjectByName(e)
					}, tt.prototype.renderDepth = function() {
						console.warn("THREE.Object3D: .renderDepth has been removed. Use .renderOrder, instead.")
					}, tt.prototype.translate = function(e, t) {
						return console.warn("THREE.Object3D: .translate() has been removed. Use .translateOnAxis( axis, distance ) instead."), this.translateOnAxis(t, e)
					}, tt.prototype.getWorldRotation = function() {
						console.error("THREE.Object3D: .getWorldRotation() has been removed. Use THREE.Object3D.getWorldQuaternion( target ) instead.")
					}, tt.prototype.applyMatrix = function(e) {
						return console.warn("THREE.Object3D: .applyMatrix() has been renamed to .applyMatrix4()."), this.applyMatrix4(e)
					}, Object.defineProperties(tt.prototype, {
						eulerOrder: {
							get: function() {
								return console.warn("THREE.Object3D: .eulerOrder is now .rotation.order."), this.rotation.order
							},
							set: function(e) {
								console.warn("THREE.Object3D: .eulerOrder is now .rotation.order."), this.rotation.order = e
							}
						},
						useQuaternion: {
							get: function() {
								console.warn("THREE.Object3D: .useQuaternion has been removed. The library now uses quaternions by default.")
							},
							set: function() {
								console.warn("THREE.Object3D: .useQuaternion has been removed. The library now uses quaternions by default.")
							}
						}
					}), tX.prototype.setDrawMode = function() {
						console.error("THREE.Mesh: .setDrawMode() has been removed. The renderer now always assumes THREE.TrianglesDrawMode. Transform your geometry via BufferGeometryUtils.toTrianglesDrawMode() if necessary.")
					}, Object.defineProperties(tX.prototype, {
						drawMode: {
							get: function() {
								return console.error("THREE.Mesh: .drawMode has been removed. The renderer now always assumes THREE.TrianglesDrawMode."), 0
							},
							set: function() {
								console.error("THREE.Mesh: .drawMode has been removed. The renderer now always assumes THREE.TrianglesDrawMode. Transform your geometry via BufferGeometryUtils.toTrianglesDrawMode() if necessary.")
							}
						}
					}), rj.prototype.initBones = function() {
						console.error("THREE.SkinnedMesh: initBones() has been removed.")
					}, t1.prototype.setLens = function(e, t) {
						console.warn("THREE.PerspectiveCamera.setLens is deprecated. Use .setFocalLength and .filmGauge for a photographic setup."), void 0 !== t && (this.filmGauge = t), this.setFocalLength(e)
					}, Object.defineProperties(os.prototype, {
						onlyShadow: {
							set: function() {
								console.warn("THREE.Light: .onlyShadow has been removed.")
							}
						},
						shadowCameraFov: {
							set: function(e) {
								console.warn("THREE.Light: .shadowCameraFov is now .shadow.camera.fov."), this.shadow.camera.fov = e
							}
						},
						shadowCameraLeft: {
							set: function(e) {
								console.warn("THREE.Light: .shadowCameraLeft is now .shadow.camera.left."), this.shadow.camera.left = e
							}
						},
						shadowCameraRight: {
							set: function(e) {
								console.warn("THREE.Light: .shadowCameraRight is now .shadow.camera.right."), this.shadow.camera.right = e
							}
						},
						shadowCameraTop: {
							set: function(e) {
								console.warn("THREE.Light: .shadowCameraTop is now .shadow.camera.top."), this.shadow.camera.top = e
							}
						},
						shadowCameraBottom: {
							set: function(e) {
								console.warn("THREE.Light: .shadowCameraBottom is now .shadow.camera.bottom."), this.shadow.camera.bottom = e
							}
						},
						shadowCameraNear: {
							set: function(e) {
								console.warn("THREE.Light: .shadowCameraNear is now .shadow.camera.near."), this.shadow.camera.near = e
							}
						},
						shadowCameraFar: {
							set: function(e) {
								console.warn("THREE.Light: .shadowCameraFar is now .shadow.camera.far."), this.shadow.camera.far = e
							}
						},
						shadowCameraVisible: {
							set: function() {
								console.warn("THREE.Light: .shadowCameraVisible has been removed. Use new THREE.CameraHelper( light.shadow.camera ) instead.")
							}
						},
						shadowBias: {
							set: function(e) {
								console.warn("THREE.Light: .shadowBias is now .shadow.bias."), this.shadow.bias = e
							}
						},
						shadowDarkness: {
							set: function() {
								console.warn("THREE.Light: .shadowDarkness has been removed.")
							}
						},
						shadowMapWidth: {
							set: function(e) {
								console.warn("THREE.Light: .shadowMapWidth is now .shadow.mapSize.width."), this.shadow.mapSize.width = e
							}
						},
						shadowMapHeight: {
							set: function(e) {
								console.warn("THREE.Light: .shadowMapHeight is now .shadow.mapSize.height."), this.shadow.mapSize.height = e
							}
						}
					}), Object.defineProperties(ty.prototype, {
						length: {
							get: function() {
								return console.warn("THREE.BufferAttribute: .length has been deprecated. Use .count instead."), this.array.length
							}
						},
						dynamic: {
							get: function() {
								return console.warn("THREE.BufferAttribute: .dynamic has been deprecated. Use .usage instead."), 35048 === this.usage
							},
							set: function() {
								console.warn("THREE.BufferAttribute: .dynamic has been deprecated. Use .usage instead."), this.setUsage(35048)
							}
						}
					}), ty.prototype.setDynamic = function(e) {
						return console.warn("THREE.BufferAttribute: .setDynamic() has been deprecated. Use .setUsage() instead."), this.setUsage(!0 === e ? 35048 : 35044), this
					}, ty.prototype.copyIndicesArray = function() {
						console.error("THREE.BufferAttribute: .copyIndicesArray() has been removed.")
					}, ty.prototype.setArray = function() {
						console.error("THREE.BufferAttribute: .setArray has been removed. Use BufferGeometry .setAttribute to replace/resize attribute buffers")
					}, tR.prototype.addIndex = function(e) {
						console.warn("THREE.BufferGeometry: .addIndex() has been renamed to .setIndex()."), this.setIndex(e)
					}, tR.prototype.addAttribute = function(e, t) {
						return console.warn("THREE.BufferGeometry: .addAttribute() has been renamed to .setAttribute()."), t && t.isBufferAttribute || t && t.isInterleavedBufferAttribute ? "index" === e ? (console.warn("THREE.BufferGeometry.addAttribute: Use .setIndex() for index attribute."), this.setIndex(t), this) : this.setAttribute(e, t) : (console.warn("THREE.BufferGeometry: .addAttribute() now expects ( name, attribute )."), this.setAttribute(e, new ty(arguments[1], arguments[2])))
					}, tR.prototype.addDrawCall = function(e, t, n) {
						void 0 !== n && console.warn("THREE.BufferGeometry: .addDrawCall() no longer supports indexOffset."), console.warn("THREE.BufferGeometry: .addDrawCall() is now .addGroup()."), this.addGroup(e, t)
					}, tR.prototype.clearDrawCalls = function() {
						console.warn("THREE.BufferGeometry: .clearDrawCalls() is now .clearGroups()."), this.clearGroups()
					}, tR.prototype.computeOffsets = function() {
						console.warn("THREE.BufferGeometry: .computeOffsets() has been removed.")
					}, tR.prototype.removeAttribute = function(e) {
						return console.warn("THREE.BufferGeometry: .removeAttribute() has been renamed to .deleteAttribute()."), this.deleteAttribute(e)
					}, tR.prototype.applyMatrix = function(e) {
						return console.warn("THREE.BufferGeometry: .applyMatrix() has been renamed to .applyMatrix4()."), this.applyMatrix4(e)
					}, Object.defineProperties(tR.prototype, {
						drawcalls: {
							get: function() {
								return console.error("THREE.BufferGeometry: .drawcalls has been renamed to .groups."), this.groups
							}
						},
						offsets: {
							get: function() {
								return console.warn("THREE.BufferGeometry: .offsets has been renamed to .groups."), this.groups
							}
						}
					}), rM.prototype.setDynamic = function(e) {
						return console.warn("THREE.InterleavedBuffer: .setDynamic() has been deprecated. Use .setUsage() instead."), this.setUsage(!0 === e ? 35048 : 35044), this
					}, rM.prototype.setArray = function() {
						console.error("THREE.InterleavedBuffer: .setArray has been removed. Use BufferGeometry .setAttribute to replace/resize attribute buffers")
					}, aW.prototype.getArrays = function() {
						console.error("THREE.ExtrudeGeometry: .getArrays() has been removed.")
					}, aW.prototype.addShapeList = function() {
						console.error("THREE.ExtrudeGeometry: .addShapeList() has been removed.")
					}, aW.prototype.addShape = function() {
						console.error("THREE.ExtrudeGeometry: .addShape() has been removed.")
					}, rw.prototype.dispose = function() {
						console.error("THREE.Scene: .dispose() has been removed.")
					}, Object.defineProperties(tp.prototype, {
						wrapAround: {
							get: function() {
								console.warn("THREE.Material: .wrapAround has been removed.")
							},
							set: function() {
								console.warn("THREE.Material: .wrapAround has been removed.")
							}
						},
						overdraw: {
							get: function() {
								console.warn("THREE.Material: .overdraw has been removed.")
							},
							set: function() {
								console.warn("THREE.Material: .overdraw has been removed.")
							}
						},
						wrapRGB: {
							get: function() {
								return console.warn("THREE.Material: .wrapRGB has been removed."), new ee
							}
						},
						shading: {
							get: function() {
								console.error("THREE." + this.type + ": .shading has been removed. Use the boolean .flatShading instead.")
							},
							set: function(e) {
								console.warn("THREE." + this.type + ": .shading has been removed. Use the boolean .flatShading instead."), this.flatShading = 1 === e
							}
						},
						stencilMask: {
							get: function() {
								return console.warn("THREE." + this.type + ": .stencilMask has been removed. Use .stencilFuncMask instead."), this.stencilFuncMask
							},
							set: function(e) {
								console.warn("THREE." + this.type + ": .stencilMask has been removed. Use .stencilFuncMask instead."), this.stencilFuncMask = e
							}
						},
						vertexTangents: {
							get: function() {
								console.warn("THREE." + this.type + ": .vertexTangents has been removed.")
							},
							set: function() {
								console.warn("THREE." + this.type + ": .vertexTangents has been removed.")
							}
						}
					}), Object.defineProperties(t$.prototype, {
						derivatives: {
							get: function() {
								return console.warn("THREE.ShaderMaterial: .derivatives has been moved to .extensions.derivatives."), this.extensions.derivatives
							},
							set: function(e) {
								console.warn("THREE. ShaderMaterial: .derivatives has been moved to .extensions.derivatives."), this.extensions.derivatives = e
							}
						}
					}), rb.prototype.clearTarget = function(e, t, n, i) {
						console.warn("THREE.WebGLRenderer: .clearTarget() has been deprecated. Use .setRenderTarget() and .clear() instead."), this.setRenderTarget(e), this.clear(t, n, i)
					}, rb.prototype.animate = function(e) {
						console.warn("THREE.WebGLRenderer: .animate() is now .setAnimationLoop()."), this.setAnimationLoop(e)
					}, rb.prototype.getCurrentRenderTarget = function() {
						return console.warn("THREE.WebGLRenderer: .getCurrentRenderTarget() is now .getRenderTarget()."), this.getRenderTarget()
					}, rb.prototype.getMaxAnisotropy = function() {
						return console.warn("THREE.WebGLRenderer: .getMaxAnisotropy() is now .capabilities.getMaxAnisotropy()."), this.capabilities.getMaxAnisotropy()
					}, rb.prototype.getPrecision = function() {
						return console.warn("THREE.WebGLRenderer: .getPrecision() is now .capabilities.precision."), this.capabilities.precision
					}, rb.prototype.resetGLState = function() {
						return console.warn("THREE.WebGLRenderer: .resetGLState() is now .state.reset()."), this.state.reset()
					}, rb.prototype.supportsFloatTextures = function() {
						return console.warn("THREE.WebGLRenderer: .supportsFloatTextures() is now .extensions.get( 'OES_texture_float' )."), this.extensions.get("OES_texture_float")
					}, rb.prototype.supportsHalfFloatTextures = function() {
						return console.warn("THREE.WebGLRenderer: .supportsHalfFloatTextures() is now .extensions.get( 'OES_texture_half_float' )."), this.extensions.get("OES_texture_half_float")
					}, rb.prototype.supportsStandardDerivatives = function() {
						return console.warn("THREE.WebGLRenderer: .supportsStandardDerivatives() is now .extensions.get( 'OES_standard_derivatives' )."), this.extensions.get("OES_standard_derivatives")
					}, rb.prototype.supportsCompressedTextureS3TC = function() {
						return console.warn("THREE.WebGLRenderer: .supportsCompressedTextureS3TC() is now .extensions.get( 'WEBGL_compressed_texture_s3tc' )."), this.extensions.get("WEBGL_compressed_texture_s3tc")
					}, rb.prototype.supportsCompressedTexturePVRTC = function() {
						return console.warn("THREE.WebGLRenderer: .supportsCompressedTexturePVRTC() is now .extensions.get( 'WEBGL_compressed_texture_pvrtc' )."), this.extensions.get("WEBGL_compressed_texture_pvrtc")
					}, rb.prototype.supportsBlendMinMax = function() {
						return console.warn("THREE.WebGLRenderer: .supportsBlendMinMax() is now .extensions.get( 'EXT_blend_minmax' )."), this.extensions.get("EXT_blend_minmax")
					}, rb.prototype.supportsVertexTextures = function() {
						return console.warn("THREE.WebGLRenderer: .supportsVertexTextures() is now .capabilities.vertexTextures."), this.capabilities.vertexTextures
					}, rb.prototype.supportsInstancedArrays = function() {
						return console.warn("THREE.WebGLRenderer: .supportsInstancedArrays() is now .extensions.get( 'ANGLE_instanced_arrays' )."), this.extensions.get("ANGLE_instanced_arrays")
					}, rb.prototype.enableScissorTest = function(e) {
						console.warn("THREE.WebGLRenderer: .enableScissorTest() is now .setScissorTest()."), this.setScissorTest(e)
					}, rb.prototype.initMaterial = function() {
						console.warn("THREE.WebGLRenderer: .initMaterial() has been removed.")
					}, rb.prototype.addPrePlugin = function() {
						console.warn("THREE.WebGLRenderer: .addPrePlugin() has been removed.")
					}, rb.prototype.addPostPlugin = function() {
						console.warn("THREE.WebGLRenderer: .addPostPlugin() has been removed.")
					}, rb.prototype.updateShadowMap = function() {
						console.warn("THREE.WebGLRenderer: .updateShadowMap() has been removed.")
					}, rb.prototype.setFaceCulling = function() {
						console.warn("THREE.WebGLRenderer: .setFaceCulling() has been removed.")
					}, rb.prototype.allocTextureUnit = function() {
						console.warn("THREE.WebGLRenderer: .allocTextureUnit() has been removed.")
					}, rb.prototype.setTexture = function() {
						console.warn("THREE.WebGLRenderer: .setTexture() has been removed.")
					}, rb.prototype.setTexture2D = function() {
						console.warn("THREE.WebGLRenderer: .setTexture2D() has been removed.")
					}, rb.prototype.setTextureCube = function() {
						console.warn("THREE.WebGLRenderer: .setTextureCube() has been removed.")
					}, rb.prototype.getActiveMipMapLevel = function() {
						return console.warn("THREE.WebGLRenderer: .getActiveMipMapLevel() is now .getActiveMipmapLevel()."), this.getActiveMipmapLevel()
					}, Object.defineProperties(rb.prototype, {
						shadowMapEnabled: {
							get: function() {
								return this.shadowMap.enabled
							},
							set: function(e) {
								console.warn("THREE.WebGLRenderer: .shadowMapEnabled is now .shadowMap.enabled."), this.shadowMap.enabled = e
							}
						},
						shadowMapType: {
							get: function() {
								return this.shadowMap.type
							},
							set: function(e) {
								console.warn("THREE.WebGLRenderer: .shadowMapType is now .shadowMap.type."), this.shadowMap.type = e
							}
						},
						shadowMapCullFace: {
							get: function() {
								console.warn("THREE.WebGLRenderer: .shadowMapCullFace has been removed. Set Material.shadowSide instead.")
							},
							set: function() {
								console.warn("THREE.WebGLRenderer: .shadowMapCullFace has been removed. Set Material.shadowSide instead.")
							}
						},
						context: {
							get: function() {
								return console.warn("THREE.WebGLRenderer: .context has been removed. Use .getContext() instead."), this.getContext()
							}
						},
						vr: {
							get: function() {
								return console.warn("THREE.WebGLRenderer: .vr has been renamed to .xr"), this.xr
							}
						},
						gammaInput: {
							get: function() {
								return console.warn("THREE.WebGLRenderer: .gammaInput has been removed. Set the encoding for textures via Texture.encoding instead."), !1
							},
							set: function() {
								console.warn("THREE.WebGLRenderer: .gammaInput has been removed. Set the encoding for textures via Texture.encoding instead.")
							}
						},
						gammaOutput: {
							get: function() {
								return console.warn("THREE.WebGLRenderer: .gammaOutput has been removed. Set WebGLRenderer.outputEncoding instead."), !1
							},
							set: function(e) {
								console.warn("THREE.WebGLRenderer: .gammaOutput has been removed. Set WebGLRenderer.outputEncoding instead."), this.outputEncoding = !0 === e ? 3001 : 3e3
							}
						},
						toneMappingWhitePoint: {
							get: function() {
								return console.warn("THREE.WebGLRenderer: .toneMappingWhitePoint has been removed."), 1
							},
							set: function() {
								console.warn("THREE.WebGLRenderer: .toneMappingWhitePoint has been removed.")
							}
						},
						gammaFactor: {
							get: function() {
								return console.warn("THREE.WebGLRenderer: .gammaFactor has been removed."), 2
							},
							set: function() {
								console.warn("THREE.WebGLRenderer: .gammaFactor has been removed.")
							}
						}
					}), Object.defineProperties(rc.prototype, {
						cullFace: {
							get: function() {
								console.warn("THREE.WebGLRenderer: .shadowMap.cullFace has been removed. Set Material.shadowSide instead.")
							},
							set: function() {
								console.warn("THREE.WebGLRenderer: .shadowMap.cullFace has been removed. Set Material.shadowSide instead.")
							}
						},
						renderReverseSided: {
							get: function() {
								console.warn("THREE.WebGLRenderer: .shadowMap.renderReverseSided has been removed. Set Material.shadowSide instead.")
							},
							set: function() {
								console.warn("THREE.WebGLRenderer: .shadowMap.renderReverseSided has been removed. Set Material.shadowSide instead.")
							}
						},
						renderSingleSided: {
							get: function() {
								console.warn("THREE.WebGLRenderer: .shadowMap.renderSingleSided has been removed. Set Material.shadowSide instead.")
							},
							set: function() {
								console.warn("THREE.WebGLRenderer: .shadowMap.renderSingleSided has been removed. Set Material.shadowSide instead.")
							}
						}
					}), Object.defineProperties(eo.prototype, {
						wrapS: {
							get: function() {
								return console.warn("THREE.WebGLRenderTarget: .wrapS is now .texture.wrapS."), this.texture.wrapS
							},
							set: function(e) {
								console.warn("THREE.WebGLRenderTarget: .wrapS is now .texture.wrapS."), this.texture.wrapS = e
							}
						},
						wrapT: {
							get: function() {
								return console.warn("THREE.WebGLRenderTarget: .wrapT is now .texture.wrapT."), this.texture.wrapT
							},
							set: function(e) {
								console.warn("THREE.WebGLRenderTarget: .wrapT is now .texture.wrapT."), this.texture.wrapT = e
							}
						},
						magFilter: {
							get: function() {
								return console.warn("THREE.WebGLRenderTarget: .magFilter is now .texture.magFilter."), this.texture.magFilter
							},
							set: function(e) {
								console.warn("THREE.WebGLRenderTarget: .magFilter is now .texture.magFilter."), this.texture.magFilter = e
							}
						},
						minFilter: {
							get: function() {
								return console.warn("THREE.WebGLRenderTarget: .minFilter is now .texture.minFilter."), this.texture.minFilter
							},
							set: function(e) {
								console.warn("THREE.WebGLRenderTarget: .minFilter is now .texture.minFilter."), this.texture.minFilter = e
							}
						},
						anisotropy: {
							get: function() {
								return console.warn("THREE.WebGLRenderTarget: .anisotropy is now .texture.anisotropy."), this.texture.anisotropy
							},
							set: function(e) {
								console.warn("THREE.WebGLRenderTarget: .anisotropy is now .texture.anisotropy."), this.texture.anisotropy = e
							}
						},
						offset: {
							get: function() {
								return console.warn("THREE.WebGLRenderTarget: .offset is now .texture.offset."), this.texture.offset
							},
							set: function(e) {
								console.warn("THREE.WebGLRenderTarget: .offset is now .texture.offset."), this.texture.offset = e
							}
						},
						repeat: {
							get: function() {
								return console.warn("THREE.WebGLRenderTarget: .repeat is now .texture.repeat."), this.texture.repeat
							},
							set: function(e) {
								console.warn("THREE.WebGLRenderTarget: .repeat is now .texture.repeat."), this.texture.repeat = e
							}
						},
						format: {
							get: function() {
								return console.warn("THREE.WebGLRenderTarget: .format is now .texture.format."), this.texture.format
							},
							set: function(e) {
								console.warn("THREE.WebGLRenderTarget: .format is now .texture.format."), this.texture.format = e
							}
						},
						type: {
							get: function() {
								return console.warn("THREE.WebGLRenderTarget: .type is now .texture.type."), this.texture.type
							},
							set: function(e) {
								console.warn("THREE.WebGLRenderTarget: .type is now .texture.type."), this.texture.type = e
							}
						},
						generateMipmaps: {
							get: function() {
								return console.warn("THREE.WebGLRenderTarget: .generateMipmaps is now .texture.generateMipmaps."), this.texture.generateMipmaps
							},
							set: function(e) {
								console.warn("THREE.WebGLRenderTarget: .generateMipmaps is now .texture.generateMipmaps."), this.texture.generateMipmaps = e
							}
						}
					}),
					function(e) {
						function t(e) {
							var n;
							return d(this, t), (n = h(this, t)).type = "Audio", n.listener = e, n.context = e.context, n.gain = n.context.createGain(), n.gain.connect(e.getInput()), n.autoplay = !1, n.buffer = null, n.detune = 0, n.loop = !1, n.loopStart = 0, n.loopEnd = 0, n.offset = 0, n.duration = void 0, n.playbackRate = 1, n.isPlaying = !1, n.hasPlaybackControl = !0, n.source = null, n.sourceType = "empty", n._startedAt = 0, n._progress = 0, n._connected = !1, n.filters = [], n
						}
						return y(t, e), p(t, [{
							key: "getOutput",
							value: function() {
								return this.gain
							}
						}, {
							key: "setNodeSource",
							value: function(e) {
								return this.hasPlaybackControl = !1, this.sourceType = "audioNode", this.source = e, this.connect(), this
							}
						}, {
							key: "setMediaElementSource",
							value: function(e) {
								return this.hasPlaybackControl = !1, this.sourceType = "mediaNode", this.source = this.context.createMediaElementSource(e), this.connect(), this
							}
						}, {
							key: "setMediaStreamSource",
							value: function(e) {
								return this.hasPlaybackControl = !1, this.sourceType = "mediaStreamNode", this.source = this.context.createMediaStreamSource(e), this.connect(), this
							}
						}, {
							key: "setBuffer",
							value: function(e) {
								return this.buffer = e, this.sourceType = "buffer", this.autoplay && this.play(), this
							}
						}, {
							key: "play",
							value: function() {
								var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
								if (!0 === this.isPlaying) return void console.warn("THREE.Audio: Audio is already playing.");
								if (!1 === this.hasPlaybackControl) return void console.warn("THREE.Audio: this Audio has no playback control.");
								this._startedAt = this.context.currentTime + e;
								var t = this.context.createBufferSource();
								return t.buffer = this.buffer, t.loop = this.loop, t.loopStart = this.loopStart, t.loopEnd = this.loopEnd, t.onended = this.onEnded.bind(this), t.start(this._startedAt, this._progress + this.offset, this.duration), this.isPlaying = !0, this.source = t, this.setDetune(this.detune), this.setPlaybackRate(this.playbackRate), this.connect()
							}
						}, {
							key: "pause",
							value: function() {
								if (!1 !== this.hasPlaybackControl) return !0 === this.isPlaying && (this._progress += Math.max(this.context.currentTime - this._startedAt, 0) * this.playbackRate, !0 === this.loop && (this._progress = this._progress % (this.duration || this.buffer.duration)), this.source.stop(), this.source.onended = null, this.isPlaying = !1), this;
								console.warn("THREE.Audio: this Audio has no playback control.")
							}
						}, {
							key: "stop",
							value: function() {
								if (!1 !== this.hasPlaybackControl) return this._progress = 0, this.source.stop(), this.source.onended = null, this.isPlaying = !1, this;
								console.warn("THREE.Audio: this Audio has no playback control.")
							}
						}, {
							key: "connect",
							value: function() {
								if (this.filters.length > 0) {
									this.source.connect(this.filters[0]);
									for (var e = 1, t = this.filters.length; e < t; e++) this.filters[e - 1].connect(this.filters[e]);
									this.filters[this.filters.length - 1].connect(this.getOutput())
								} else this.source.connect(this.getOutput());
								return this._connected = !0, this
							}
						}, {
							key: "disconnect",
							value: function() {
								if (this.filters.length > 0) {
									this.source.disconnect(this.filters[0]);
									for (var e = 1, t = this.filters.length; e < t; e++) this.filters[e - 1].disconnect(this.filters[e]);
									this.filters[this.filters.length - 1].disconnect(this.getOutput())
								} else this.source.disconnect(this.getOutput());
								return this._connected = !1, this
							}
						}, {
							key: "getFilters",
							value: function() {
								return this.filters
							}
						}, {
							key: "setFilters",
							value: function(e) {
								return e || (e = []), !0 === this._connected ? (this.disconnect(), this.filters = e.slice(), this.connect()) : this.filters = e.slice(), this
							}
						}, {
							key: "setDetune",
							value: function(e) {
								if (this.detune = e, void 0 !== this.source.detune) return !0 === this.isPlaying && this.source.detune.setTargetAtTime(this.detune, this.context.currentTime, .01), this
							}
						}, {
							key: "getDetune",
							value: function() {
								return this.detune
							}
						}, {
							key: "getFilter",
							value: function() {
								return this.getFilters()[0]
							}
						}, {
							key: "setFilter",
							value: function(e) {
								return this.setFilters(e ? [e] : [])
							}
						}, {
							key: "setPlaybackRate",
							value: function(e) {
								if (!1 !== this.hasPlaybackControl) return this.playbackRate = e, !0 === this.isPlaying && this.source.playbackRate.setTargetAtTime(this.playbackRate, this.context.currentTime, .01), this;
								console.warn("THREE.Audio: this Audio has no playback control.")
							}
						}, {
							key: "getPlaybackRate",
							value: function() {
								return this.playbackRate
							}
						}, {
							key: "onEnded",
							value: function() {
								this.isPlaying = !1
							}
						}, {
							key: "getLoop",
							value: function() {
								return !1 === this.hasPlaybackControl ? (console.warn("THREE.Audio: this Audio has no playback control."), !1) : this.loop
							}
						}, {
							key: "setLoop",
							value: function(e) {
								if (!1 !== this.hasPlaybackControl) return this.loop = e, !0 === this.isPlaying && (this.source.loop = this.loop), this;
								console.warn("THREE.Audio: this Audio has no playback control.")
							}
						}, {
							key: "setLoopStart",
							value: function(e) {
								return this.loopStart = e, this
							}
						}, {
							key: "setLoopEnd",
							value: function(e) {
								return this.loopEnd = e, this
							}
						}, {
							key: "getVolume",
							value: function() {
								return this.gain.gain.value
							}
						}, {
							key: "setVolume",
							value: function(e) {
								return this.gain.gain.setTargetAtTime(e, this.context.currentTime, .01), this
							}
						}]), t
					}(tt).prototype.load = function(e) {
						console.warn("THREE.Audio: .load has been deprecated. Use THREE.AudioLoader instead.");
						var t = this;
						return (new oM).load(e, function(e) {
							t.setBuffer(e)
						}), this
					}, t3.prototype.updateCubeMap = function(e, t) {
						return console.warn("THREE.CubeCamera: .updateCubeMap() is now .update()."), this.update(e, t)
					}, t3.prototype.clear = function(e, t, n, i) {
						return console.warn("THREE.CubeCamera: .clear() is now .renderTarget.clear()."), this.renderTarget.clear(e, t, n, i)
					}, et.crossOrigin = void 0, et.loadTexture = function(e, t, n, i) {
						console.warn("THREE.ImageUtils.loadTexture has been deprecated. Use THREE.TextureLoader() instead.");
						var r = new oo;
						r.setCrossOrigin(this.crossOrigin);
						var a = r.load(e, n, void 0, i);
						return t && (a.mapping = t), a
					}, et.loadTextureCube = function(e, t, n, i) {
						console.warn("THREE.ImageUtils.loadTextureCube has been deprecated. Use THREE.CubeTextureLoader() instead.");
						var r = new oa;
						r.setCrossOrigin(this.crossOrigin);
						var a = r.load(e, n, void 0, i);
						return t && (a.mapping = t), a
					}, et.loadCompressedTexture = function() {
						console.error("THREE.ImageUtils.loadCompressedTexture has been removed. Use THREE.DDSLoader instead.")
					}, et.loadCompressedTextureCube = function() {
						console.error("THREE.ImageUtils.loadCompressedTextureCube has been removed. Use THREE.DDSLoader instead.")
					}, "undefined" != typeof __THREE_DEVTOOLS__ && __THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register", {
						detail: {
							revision: "137"
						}
					})), "undefined" != typeof window && (window.__THREE__ ? console.warn("WARNING: Multiple instances of Three.js being imported.") : window.__THREE__ = "137");
				var oz = function(e) {
						if (e.includes("mats-thumbnails.roblox.com")) return e;
						for (var t = 31, n = 0; n < e.length; n++) t ^= e[n].charCodeAt(0);
						return "https://t".concat((t % 8).toString(), ".rbxcdn.com/").concat(e)
					},
					oU = function() {
						function e() {
							var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
							d(this, e), this.options = t, this.materialsInfo = {}, this.materials = {}, this.materialsArray = [], this.nameLookup = {}, this.crossOrigin = "anonymous", this.side = void 0 !== this.options.side ? this.options.side : 0, this.wrap = void 0 !== this.options.wrap ? this.options.wrap : 1e3, na.map_fragment = "\n                  #ifdef USE_MAP\n                      vec4 sampledDiffuseColor = texture2D( map, vUv );\n                      diffuseColor.rgb = mix(diffuseColor.rgb, sampledDiffuseColor.rgb, sampledDiffuseColor.a);\n                  #endif", na.roughnessmap_fragment = "\n          float roughnessFactor = roughness;\n          #ifdef USE_ROUGHNESSMAP\n            vec4 texelRoughness = texture2D( roughnessMap, vUv );\n            roughnessFactor = max(0.045, texelRoughness.g);\n          #endif", na.metalnessmap_fragment = "\n          float metalnessFactor = metalness;\n          #ifdef USE_METALNESSMAP\n            // vec4 texelMetalness = texture2D( metalnessMap, vUv );\n            metalnessFactor = 0.0; //texelMetalness.r;\n          #endif"
						}
						return p(e, [{
							key: "setCrossOrigin",
							value: function(e) {
								return this.crossOrigin = e, this
							}
						}, {
							key: "setManager",
							value: function(e) {
								this.manager = e
							}
						}, {
							key: "setMaterials",
							value: function(e) {
								this.materialsInfo = this.convert(e), this.materials = {}, this.materialsArray = [], this.nameLookup = {}
							}
						}, {
							key: "convert",
							value: function(e) {
								var t = this;
								if (!this.options) return e;
								var n = {};
								return Object.keys(e).forEach(function(i) {
									var r = e[i],
										a = {};
									n[i] = a, Object.keys(r).forEach(function(e) {
										var n = !0,
											i = r[e],
											o = e.toLowerCase();
										switch (o) {
											case "kd":
											case "ka":
											case "ks":
												t.options && t.options.normalizeRGB && (i = [i[0] / 255, i[1] / 255, i[2] / 255]), t.options && t.options.ignoreZeroRGBs && 0 === i[0] && 0 === i[1] && 0 === i[2] && (n = !1)
										}
										n && (a[o] = i)
									})
								}), n
							}
						}, {
							key: "preload",
							value: function() {
								var e = this;
								Object.keys(this.materialsInfo).forEach(function(t) {
									e.create(t)
								})
							}
						}, {
							key: "getIndex",
							value: function(e) {
								return this.nameLookup[e]
							}
						}, {
							key: "getAsArray",
							value: function() {
								var e = this,
									t = 0;
								return Object.keys(this.materialsInfo).forEach(function(n) {
									e.materialsArray[t] = e.create(n), e.nameLookup[n] = t, t += 1
								}), this.materialsArray
							}
						}, {
							key: "create",
							value: function(e) {
								return void 0 === this.materials[e] && this.createMaterial(e), this.materials[e]
							}
						}, {
							key: "createMaterial",
							value: function(t) {
								var n = this,
									i = this.materialsInfo[t],
									r = {
										name: t,
										side: this.side
									},
									a = function(t, i) {
										if (!r[t]) {
											var a = e.getTextureParams(i, r),
												o = oz(a.url),
												s = n.loadTexture(o);
											s.repeat.copy(a.scale), s.offset.copy(a.offset), s.wrapS = n.wrap, s.wrapT = n.wrap, "specularMap" === t ? (r.metalnessMap = s, r.roughnessMap = s) : r[t] = s
										}
									};
								return Object.keys(i || {}).forEach(function(e) {
									var t, o = i[e];
									if ("" !== o) switch (e.toLowerCase()) {
										case "kd":
											r.color = (new ee).fromArray(o);
											break;
										case "ka":
										case "ks":
										case "map_d":
										case "ns":
											break;
										case "ke":
											r.emissive = (new ee).fromArray(o).convertSRGBToLinear();
											break;
										case "map_kd":
											a("map", o);
											break;
										case "map_ks":
										case "map_ns":
											a("specularMap", o);
											break;
										case "map_ke":
											a("emissiveMap", o);
											break;
										case "norm":
										case "map_bump":
										case "bump":
											a("normalMap", o);
											break;
										case "d":
											(t = parseFloat(o)) < 1 && (r.opacity = t, r.transparent = !0);
											break;
										case "tr":
											t = parseFloat(o), n.options && n.options.invertTrProperty && (t = 1 - t), t > 0 && (r.opacity = 1 - t, r.transparent = !0)
									}
								}), r.metalness = 0, r.roughness = 1, this.materials[t] = new aX(r), this.materials[t]
							}
						}, {
							key: "loadTexture",
							value: function(e, t, n, i, r) {
								var a = new oo(void 0 !== this.manager ? this.manager : oe);
								a.setCrossOrigin && a.setCrossOrigin(this.crossOrigin);
								var o = a.load(e, n, i, r);
								return void 0 !== t && (o.mapping = t), o
							}
						}], [{
							key: "getTextureParams",
							value: function(e, t) {
								var n, i = {
										scale: new W(1, 1),
										offset: new W(0, 0)
									},
									r = e.split(/\s+/);
								return (n = r.indexOf("-bm")) >= 0 && (t.bumpScale = parseFloat(r[n + 1]), r.splice(n, 2)), (n = r.indexOf("-s")) >= 0 && (i.scale.set(parseFloat(r[n + 1]), parseFloat(r[n + 2])), r.splice(n, 4)), (n = r.indexOf("-o")) >= 0 && (i.offset.set(parseFloat(r[n + 1]), parseFloat(r[n + 2])), r.splice(n, 4)), i.url = r.join(" ").trim(), i
							}
						}]), e
					}(),
					oF = function(e) {
						function t() {
							return d(this, t), h(this, t, arguments)
						}
						return y(t, e), p(t, [{
							key: "load",
							value: function(e, t, n, i) {
								var r = this,
									a = new oi(this.manager),
									o = oz(e);
								a.setPath(this.path), a.setRequestHeader(this.requestHeader), a.setWithCredentials(this.withCredentials), a.load(o, function(e) {
									try {
										t(r.parse(e))
									} catch (e) {
										i ? i(e) : console.error(e), r.manager.itemError(o)
									}
								}, n, i)
							}
						}, {
							key: "setMaterialOptions",
							value: function(e) {
								return this.materialOptions = e, this
							}
						}, {
							key: "parse",
							value: function(e) {
								for (var t = e.split("\n"), n = {}, i = /\s+/, r = {}, a = 0; a < t.length; a++) {
									var o = t[a].trim();
									if (o.length > 0 && "#" !== o.charAt(0)) {
										var s = o.indexOf(" "),
											l = s >= 0 ? o.substring(0, s) : o;
										l = l.toLowerCase();
										var u = s >= 0 ? o.substring(s + 1) : "";
										if (u = u.trim(), "newmtl" === l) n = {
											name: u
										}, r[u] = n;
										else if ("ka" === l || "kd" === l || "ks" === l || "ke" === l) {
											var c = u.split(i, 3);
											n[l] = [parseFloat(c[0]), parseFloat(c[1]), parseFloat(c[2])]
										} else n[l] = u
									}
								}
								var h = new oU(this.resourcePath || "", this.materialOptions);
								return h.setCrossOrigin(this.crossOrigin), h.setManager(this.manager), h.setMaterials(r), h
							}
						}]), t
					}(ot),
					oB = /^[og]\s*(.+)?/,
					oH = /^mtllib /,
					oV = /^usemtl /,
					oG = /^usemap /,
					oW = new eu,
					oj = new eu,
					oq = new eu,
					oX = new eu,
					oY = new eu;

				function oJ() {
					var e = {
						objects: [],
						object: {},
						vertices: [],
						normals: [],
						colors: [],
						uvs: [],
						materials: {},
						materialLibraries: [],
						startObject: function(e, t) {
							if (this.object && !1 === this.object.fromDeclaration) return this.object.name = e, void(this.object.fromDeclaration = !1 !== t);
							var n = this.object && "function" == typeof this.object.finalizeObject ? this.object.finalizeObject() : void 0;
							if (this.object && "function" == typeof this.object.finalizeObject && this.object.finalizeObject(!0), this.object = {
									name: e || "",
									fromDeclaration: !1 !== t,
									geometry: {
										vertices: [],
										normals: [],
										colors: [],
										uvs: [],
										hasUVIndices: !1
									},
									materials: [],
									smooth: !0,
									startMaterial: function(e, t) {
										var n = this.finalizeObject(!1);
										n && (n.inherited || n.groupCount <= 0) && this.materials.splice(n.index, 1);
										var i = {
											index: this.materials.length,
											name: e || "",
											mtllib: Array.isArray(t) && t.length > 0 ? t[t.length - 1] : "",
											smooth: void 0 !== n ? n.smooth : this.smooth,
											groupStart: void 0 !== n ? n.groupEnd : 0,
											groupEnd: -1,
											groupCount: -1,
											inherited: !1,
											clone: function(e) {
												var t = {
													index: "number" == typeof e ? e : this.index,
													name: this.name,
													mtllib: this.mtllib,
													smooth: this.smooth,
													groupStart: 0,
													groupEnd: -1,
													groupCount: -1,
													inherited: !1
												};
												return t.clone = this.clone.bind(t), t
											}
										};
										return this.materials.push(i), i
									},
									currentMaterial: function() {
										if (this.materials.length > 0) return this.materials[this.materials.length - 1]
									},
									finalizeObject: function(e) {
										var t = this.currentMaterial();
										if (t && -1 === t.groupEnd && (t.groupEnd = this.geometry.vertices.length / 3, t.groupCount = t.groupEnd - t.groupStart, t.inherited = !1), e && this.materials.length > 1)
											for (var n = this.materials.length - 1; n >= 0; n--) this.materials[n].groupCount <= 0 && this.materials.splice(n, 1);
										return e && 0 === this.materials.length && this.materials.push({
											name: "",
											smooth: this.smooth
										}), t
									}
								}, n && n.name && "function" == typeof n.clone) {
								var i = n.clone(0);
								i.inherited = !0, this.object.materials.push(i)
							}
							this.objects.push(this.object)
						},
						finalize: function() {
							this.object && "function" == typeof this.object.finalizeObject && this.object.finalizeObject(!0)
						},
						parseVertexIndex: function(e, t) {
							var n = parseInt(e, 10);
							return 3 * (n >= 0 ? n - 1 : n + t / 3)
						},
						parseNormalIndex: function(e, t) {
							var n = parseInt(e, 10);
							return 3 * (n >= 0 ? n - 1 : n + t / 3)
						},
						parseUVIndex: function(e, t) {
							var n = parseInt(e, 10);
							return 2 * (n >= 0 ? n - 1 : n + t / 2)
						},
						addVertex: function(e, t, n) {
							var i = this.vertices,
								r = this.object.geometry.vertices;
							r.push(i[e + 0], i[e + 1], i[e + 2]), r.push(i[t + 0], i[t + 1], i[t + 2]), r.push(i[n + 0], i[n + 1], i[n + 2])
						},
						addVertexPoint: function(e) {
							var t = this.vertices;
							this.object.geometry.vertices.push(t[e + 0], t[e + 1], t[e + 2])
						},
						addVertexLine: function(e) {
							var t = this.vertices;
							this.object.geometry.vertices.push(t[e + 0], t[e + 1], t[e + 2])
						},
						addNormal: function(e, t, n) {
							var i = this.normals,
								r = this.object.geometry.normals;
							r.push(i[e + 0], i[e + 1], i[e + 2]), r.push(i[t + 0], i[t + 1], i[t + 2]), r.push(i[n + 0], i[n + 1], i[n + 2])
						},
						addFaceNormal: function(e, t, n) {
							var i = this.vertices,
								r = this.object.geometry.normals;
							oW.fromArray(i, e), oj.fromArray(i, t), oq.fromArray(i, n), oY.subVectors(oq, oj), oX.subVectors(oW, oj), oY.cross(oX), oY.normalize(), r.push(oY.x, oY.y, oY.z), r.push(oY.x, oY.y, oY.z), r.push(oY.x, oY.y, oY.z)
						},
						addColor: function(e, t, n) {
							var i = this.colors,
								r = this.object.geometry.colors;
							void 0 !== i[e] && r.push(i[e + 0], i[e + 1], i[e + 2]), void 0 !== i[t] && r.push(i[t + 0], i[t + 1], i[t + 2]), void 0 !== i[n] && r.push(i[n + 0], i[n + 1], i[n + 2])
						},
						addUV: function(e, t, n) {
							var i = this.uvs,
								r = this.object.geometry.uvs;
							r.push(i[e + 0], i[e + 1]), r.push(i[t + 0], i[t + 1]), r.push(i[n + 0], i[n + 1])
						},
						addDefaultUV: function() {
							var e = this.object.geometry.uvs;
							e.push(0, 0), e.push(0, 0), e.push(0, 0)
						},
						addUVLine: function(e) {
							var t = this.uvs;
							this.object.geometry.uvs.push(t[e + 0], t[e + 1])
						},
						addFace: function(e, t, n, i, r, a, o, s, l) {
							var u = this.vertices.length,
								c = this.parseVertexIndex(e, u),
								h = this.parseVertexIndex(t, u),
								d = this.parseVertexIndex(n, u);
							if (this.addVertex(c, h, d), this.addColor(c, h, d), void 0 !== o && "" !== o) {
								var f = this.normals.length;
								c = this.parseNormalIndex(o, f), h = this.parseNormalIndex(s, f), d = this.parseNormalIndex(l, f), this.addNormal(c, h, d)
							} else this.addFaceNormal(c, h, d);
							if (void 0 !== i && "" !== i) {
								var p = this.uvs.length;
								c = this.parseUVIndex(i, p), h = this.parseUVIndex(r, p), d = this.parseUVIndex(a, p), this.addUV(c, h, d), this.object.geometry.hasUVIndices = !0
							} else this.addDefaultUV()
						},
						addPointGeometry: function(e) {
							this.object.geometry.type = "Points";
							for (var t = this.vertices.length, n = 0, i = e.length; n < i; n++) {
								var r = this.parseVertexIndex(e[n], t);
								this.addVertexPoint(r), this.addColor(r)
							}
						},
						addLineGeometry: function(e, t) {
							this.object.geometry.type = "Line";
							for (var n = this.vertices.length, i = this.uvs.length, r = 0, a = e.length; r < a; r++) this.addVertexLine(this.parseVertexIndex(e[r], n));
							for (var o = 0, s = t.length; o < s; o++) this.addUVLine(this.parseUVIndex(t[o], i))
						}
					};
					return e.startObject("", !1), e
				}
				var oZ = function(e) {
						function t(e) {
							var n;
							return d(this, t), (n = h(this, t, [e])).materials = null, n
						}
						return y(t, e), p(t, [{
							key: "load",
							value: function(e, t, n, i) {
								var r = this,
									a = new oi(this.manager),
									o = oz(e);
								a.setPath(this.path), a.setRequestHeader(this.requestHeader), a.setWithCredentials(this.withCredentials), a.load(o, function(e) {
									try {
										t(r.parse(e))
									} catch (e) {
										i ? i(e) : console.error(e), r.manager.itemError(o)
									}
								}, n, i)
							}
						}, {
							key: "setMaterials",
							value: function(e) {
								return this.materials = e, this
							}
						}, {
							key: "parse",
							value: function(e) {
								var t = new oJ,
									n = e; - 1 !== n.indexOf("\r\n") && (n = n.replace(/\r\n/g, "\n")), -1 !== n.indexOf("\\\n") && (n = n.replace(/\\\n/g, ""));
								for (var i = n.split("\n"), r = "", a = "", o = 0, s = [], l = 0, u = i.length; l < u; l++)
									if (r = i[l], 0 !== (r = r.trim()).length && "#" !== r.charAt(0)) {
										if ("v" === (a = r.charAt(0))) {
											var c = r.split(/\s+/);
											switch (c[0]) {
												case "v":
													t.vertices.push(parseFloat(c[1]), parseFloat(c[2]), parseFloat(c[3])), c.length >= 7 ? t.colors.push(parseFloat(c[4]), parseFloat(c[5]), parseFloat(c[6])) : t.colors.push(void 0, void 0, void 0);
													break;
												case "vn":
													t.normals.push(parseFloat(c[1]), parseFloat(c[2]), parseFloat(c[3]));
													break;
												case "vt":
													t.uvs.push(parseFloat(c[1]), parseFloat(c[2]));
													break;
												default:
													continue
											}
										} else if ("f" === a) {
											for (var h = r.substr(1).trim().split(/\s+/), d = [], f = 0, p = h.length; f < p; f++) {
												var m = h[f];
												if (m.length > 0) {
													var v = m.split("/");
													d.push(v)
												}
											}
											for (var g = d[0], y = 1, x = d.length - 1; y < x; y++) {
												var _ = d[y],
													b = d[y + 1];
												t.addFace(g[0], _[0], b[0], g[1], _[1], b[1], g[2], _[2], b[2])
											}
										} else if ("l" === a) {
											var w = r.substring(1).trim().split(" "),
												M = [],
												S = [];
											if (-1 === r.indexOf("/")) M = w;
											else
												for (var T = 0, E = w.length; T < E; T++) {
													var A = w[T].split("/");
													"" !== A[0] && M.push(A[0]), "" !== A[1] && S.push(A[1])
												}
											t.addLineGeometry(M, S)
										} else if ("p" === a) {
											var k = r.substr(1).trim().split(" ");
											t.addPointGeometry(k)
										} else if (null !== (s = oB.exec(r))) {
											var R = " ".concat(s[0].substr(1).trim()).substr(1);
											t.startObject(R)
										} else if (oV.test(r)) t.object.startMaterial(r.substring(7).trim(), t.materialLibraries);
										else if (oH.test(r)) t.materialLibraries.push(r.substring(7).trim());
										else if (oG.test(r)) console.warn('OBJLoader: Rendering identifier "usemap" not supported. Textures must be defined in MTL files.');
										else if ("s" === a) {
											if ((s = r.split(" ")).length > 1) {
												var L = s[1].trim().toLowerCase();
												t.object.smooth = "0" !== L && "off" !== L
											} else t.object.smooth = !0;
											var C = t.object.currentMaterial();
											C && (C.smooth = t.object.smooth)
										} else {
											if ("\0" === r) continue;
											console.warn('OBJLoader: Unexpected line: "'.concat(r, '"'))
										}
									} t.finalize();
								var P = new rm;
								if (P.materialLibraries = [].concat(t.materialLibraries), !0 == (1 !== t.objects.length || 0 !== t.objects[0].geometry.vertices.length))
									for (var D = 0, I = t.objects.length; D < I; D++) {
										var N = t.objects[D],
											O = N.geometry,
											z = N.materials,
											U = "Line" === O.type,
											F = "Points" === O.type,
											B = !1;
										if (0 !== O.vertices.length) {
											var H = new tR;
											H.setAttribute("position", new tb(O.vertices, 3)), O.normals.length > 0 && H.setAttribute("normal", new tb(O.normals, 3)), O.colors.length > 0 && (B = !0, H.setAttribute("color", new tb(O.colors, 3))), !0 === O.hasUVIndices && H.setAttribute("uv", new tb(O.uvs, 2));
											for (var V = [], G = 0, W = z.length; G < W; G++) {
												var j = z[G],
													q = "".concat(j.name, "_").concat(j.smooth, "_").concat(B),
													X = t.materials[q];
												if (null !== this.materials) {
													if (X = this.materials.create(j.name), !U || !X || X instanceof rK) {
														if (F && X && !(X instanceof r8)) {
															var Y = new r8({
																size: 10,
																sizeAttenuation: !1
															});
															tp.prototype.copy.call(Y, X), Y.color.copy(X.color), Y.map = X.map, X = Y
														}
													} else {
														var J = new rK;
														tp.prototype.copy.call(J, X), J.color.copy(X.color), X = J
													}
												}
												void 0 === X && ((X = U ? new rK : F ? new r8({
													size: 1,
													sizeAttenuation: !1
												}) : new aY).name = j.name, X.flatShading = !j.smooth, X.vertexColors = B, t.materials[q] = X), V.push(X)
											}
											var Z = void 0;
											if (V.length > 1) {
												for (var K = 0, Q = z.length; K < Q; K++) {
													var $ = z[K];
													H.addGroup($.groupStart, $.groupCount, K)
												}
												Z = U ? new r6(H, V) : F ? new an(H, V) : new tX(H, V)
											} else Z = U ? new r6(H, V[0]) : F ? new an(H, V[0]) : new tX(H, V[0]);
											Z.name = N.name, P.add(Z)
										}
									} else if (t.vertices.length > 0) {
										var ee = new r8({
												size: 1,
												sizeAttenuation: !1
											}),
											et = new tR;
										et.setAttribute("position", new tb(t.vertices, 3)), t.colors.length > 0 && void 0 !== t.colors[0] && (et.setAttribute("color", new tb(t.colors, 3)), ee.vertexColors = !0);
										var en = new an(et, ee);
										P.add(en)
									} return P
							}
						}]), t
					}(ot),
					oK = function(e) {
						function t(e, n, i) {
							var r, a = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "static";
							d(this, t), m(r = h(this, t), "rotateStart", new W), m(r, "rotateEnd", new W), m(r, "rotateDelta", new W), m(r, "panStart", new W), m(r, "panEnd", new W), m(r, "panDelta", new W), m(r, "dollyStart", new W), m(r, "dollyEnd", new W), m(r, "dollyDelta", new W), r.object = e, r.domElement = void 0 !== n ? n : document, r.enabled = !0;
							var o = i.aabb.max;
							o = new eu(o.x, o.y, o.z);
							var s = i.aabb.min;
							s = new eu(s.x, s.y, s.z);
							var l = new eu;
							l.copy(o).add(s).multiplyScalar(.5), r.target = l, r.autoRotate = "animated" !== a, r.minDistance = 0, r.maxDistance = 1 / 0, r.minZoom = 0, r.maxZoom = 1 / 0, r.minPolarAngle = 0, r.maxPolarAngle = Math.PI, r.minAzimuthAngle = -1 / 0, r.maxAzimuthAngle = 1 / 0, r.enableDamping = !1, r.dampingFactor = .25, r.enableZoom = !0, r.zoomSpeed = 1, r.enableRotate = !0, r.rotateSpeed = 1, r.enablePan = !0, r.keyPanSpeed = 7, r.autoRotateSpeed = 2, r.clientWidth = 500, r.clientHeight = 500, r.enableKeys = !0, r.keys = {
								UP: "ArrowUp",
								DOWN: "ArrowDown",
								LEFT: "ArrowLeft",
								RIGHT: "ArrowRight"
							}, r.mouseButtons = {
								ORBIT: 0,
								ZOOM: 1,
								PAN: 2
							};
							var u = i.camera.position,
								c = i.camera.direction,
								f = new eu(u.x, u.y, u.z),
								p = new eu(c.x, c.y, c.z),
								v = new eu;
							return v.copy(f), v.sub(p), r.object.position.set(f.x, f.y, f.z), r.object.lookAt(v), r.target0 = r.target.clone(), r.position0 = r.object.position.clone(), r.zoom0 = r.object.zoom, r.spherical = new oD, r.sphericalDelta = new oD, r.changeEvent = {
								type: "change"
							}, r.startEvent = {
								type: "start"
							}, r.endEvent = {
								type: "end"
							}, r.STATE = {
								NONE: -1,
								ROTATE: 0,
								DOLLY: 1,
								PAN: 2,
								TOUCH_ROTATE: 3,
								TOUCH_DOLLY: 4,
								TOUCH_PAN: 5
							}, r.state = r.STATE.NONE, r.EPS = 1e-6, r.scale = 1, r.panOffset = new eu, r.zoomChanged = !1, r.initializeEventListeners(), r.update(), r
						}
						return y(t, e), p(t, [{
							key: "initializeEventListeners",
							value: function() {
								this.domElement.addEventListener("contextmenu", t.onContextMenu, !1), this.domElement.addEventListener("mousedown", this.onMouseDown.bind(this), !1), this.domElement.addEventListener("wheel", this.onMouseWheel.bind(this), !1), this.domElement.addEventListener("touchstart", this.onTouchStart.bind(this), !1), this.domElement.addEventListener("touchend", this.onTouchEnd.bind(this), !1), this.domElement.addEventListener("touchmove", this.onTouchMove.bind(this), !1), window.addEventListener("keydown", this.onKeyDown.bind(this), !1)
							}
						}, {
							key: "onMouseDown",
							value: function(e) {
								if (!1 !== this.enabled) {
									switch (e.preventDefault(), e.button) {
										case this.mouseButtons.ORBIT:
											if (!1 === this.enableRotate) return;
											this.handleMouseDownRotate(e), this.state = this.STATE.ROTATE;
											break;
										case this.mouseButtons.ZOOM:
											if (!1 === this.enableZoom) return;
											this.handleMouseDownDolly(e), this.state = this.STATE.DOLLY;
											break;
										case this.mouseButtons.PAN:
											if (!1 === this.enablePan) return;
											this.handleMouseDownPan(e), this.state = this.STATE.PAN;
											break;
										default:
											this.state = this.STATE.NONE
									}
									this.state !== this.STATE.NONE && (document.addEventListener("mousemove", this.onMouseMove.bind(this), !1), document.addEventListener("mouseup", this.onMouseUp.bind(this), !1), this.dispatchEvent(this.startEvent))
								}
							}
						}, {
							key: "onMouseMove",
							value: function(e) {
								if (!1 !== this.enabled) switch (e.preventDefault(), this.state) {
									case this.STATE.ROTATE:
										if (!1 === this.enableRotate) return;
										this.handleMouseMoveRotate(e);
										break;
									case this.STATE.DOLLY:
										if (!1 === this.enableZoom) return;
										this.handleMouseMoveDolly(e);
										break;
									case this.STATE.PAN:
										if (!1 === this.enablePan) return;
										this.handleMouseMovePan(e)
								}
							}
						}, {
							key: "onMouseUp",
							value: function() {
								!1 !== this.enabled && (document.removeEventListener("mousemove", this.onMouseMove.bind(this), !1), document.removeEventListener("mouseup", this.onMouseUp.bind(this), !1), this.dispatchEvent(this.endEvent), this.state = this.STATE.NONE)
							}
						}, {
							key: "onMouseWheel",
							value: function(e) {
								!1 === this.enabled || !1 === this.enableZoom || this.state !== this.STATE.NONE && this.state !== this.STATE.ROTATE || (e.preventDefault(), e.stopPropagation(), this.handleMouseWheel(e), this.dispatchEvent(this.startEvent), this.dispatchEvent(this.endEvent))
							}
						}, {
							key: "onKeyDown",
							value: function(e) {
								!1 !== this.enabled && !1 !== this.enableKeys && !1 !== this.enablePan && this.handleKeyDown(e)
							}
						}, {
							key: "onTouchStart",
							value: function(e) {
								if (!1 !== this.enabled) {
									switch (e.touches.length) {
										case 1:
											if (!1 === this.enableRotate) return;
											this.handleTouchStartRotate(e), this.state = this.STATE.TOUCH_ROTATE;
											break;
										case 2:
											if (!1 === this.enableZoom) return;
											this.handleTouchStartDolly(e), this.state = this.STATE.TOUCH_DOLLY;
											break;
										case 3:
											if (!1 === this.enablePan) return;
											this.handleTouchStartPan(e), this.state = this.STATE.TOUCH_PAN
									}
									this.state !== this.STATE.NONE && this.dispatchEvent(this.startEvent)
								}
							}
						}, {
							key: "onTouchMove",
							value: function(e) {
								if (!1 !== this.enabled) switch (e.preventDefault(), e.stopPropagation(), e.touches.length) {
									case 1:
										if (!1 === this.enableRotate || this.state !== this.STATE.TOUCH_ROTATE) return;
										this.handleTouchMoveRotate(e);
										break;
									case 2:
										if (!1 === this.enableZoom || this.state !== this.STATE.TOUCH_DOLLY) return;
										this.handleTouchMoveDolly(e);
										break;
									case 3:
										if (!1 === this.enablePan || this.state !== this.STATE.TOUCH_PAN) return;
										this.handleTouchMovePan(e);
										break;
									default:
										this.state = this.STATE.NONE
								}
							}
						}, {
							key: "onTouchEnd",
							value: function() {
								!1 !== this.enabled && (this.dispatchEvent(this.endEvent), this.state = this.STATE.NONE)
							}
						}, {
							key: "handleMouseDownRotate",
							value: function(e) {
								this.rotateStart.set(e.clientX, e.clientY)
							}
						}, {
							key: "handleMouseDownDolly",
							value: function(e) {
								this.dollyStart.set(e.clientX, e.clientY)
							}
						}, {
							key: "handleMouseDownPan",
							value: function(e) {
								this.panStart.set(e.clientX, e.clientY)
							}
						}, {
							key: "handleMouseMoveRotate",
							value: function(e) {
								this.rotateEnd.set(e.clientX, e.clientY), this.rotateDelta.subVectors(this.rotateEnd, this.rotateStart);
								var t = this.domElement === document ? document.body : this.domElement.querySelector("canvas") || this.domElement,
									n = t.clientWidth || this.clientWidth,
									i = t.clientHeight || this.clientHeight;
								this.rotateLeft(2 * Math.PI * this.rotateDelta.x / n * this.rotateSpeed), this.rotateUp(2 * Math.PI * this.rotateDelta.y / i * this.rotateSpeed), this.rotateStart.copy(this.rotateEnd), this.update()
							}
						}, {
							key: "handleMouseMoveDolly",
							value: function(e) {
								this.dollyEnd.set(e.clientX, e.clientY), this.dollyDelta.subVectors(this.dollyEnd, this.dollyStart), this.dollyDelta.y > 0 ? this.dollyIn(this.getZoomScale()) : this.dollyDelta.y < 0 && this.dollyOut(this.getZoomScale()), this.dollyStart.copy(this.dollyEnd), this.update()
							}
						}, {
							key: "handleMouseMovePan",
							value: function(e) {
								this.panEnd.set(e.clientX, e.clientY), this.panDelta.subVectors(this.panEnd, this.panStart), this.pan(this.panDelta.x, this.panDelta.y), this.panStart.copy(this.panEnd), this.update()
							}
						}, {
							key: "handleMouseWheel",
							value: function(e) {
								e.deltaY < 0 ? this.dollyOut(this.getZoomScale()) : e.deltaY > 0 && this.dollyIn(this.getZoomScale()), this.update()
							}
						}, {
							key: "handleKeyDown",
							value: function(e) {
								if (!1 !== this.enabled && !1 !== this.enableKeys && !1 !== this.enablePan) switch (e.key) {
									case "ArrowUp":
										this.pan(0, -this.keyPanSpeed), this.update();
										break;
									case "ArrowDown":
										this.pan(0, this.keyPanSpeed), this.update();
										break;
									case "ArrowLeft":
										this.pan(-this.keyPanSpeed, 0), this.update();
										break;
									case "ArrowRight":
										this.pan(this.keyPanSpeed, 0), this.update()
								}
							}
						}, {
							key: "handleTouchStartRotate",
							value: function(e) {
								this.rotateStart.set(e.touches[0].pageX, e.touches[0].pageY)
							}
						}, {
							key: "handleTouchStartDolly",
							value: function(e) {
								var t = e.touches[0].pageX - e.touches[1].pageX,
									n = e.touches[0].pageY - e.touches[1].pageY,
									i = Math.sqrt(t * t + n * n);
								this.dollyStart.set(0, i)
							}
						}, {
							key: "handleTouchStartPan",
							value: function(e) {
								this.panStart.set(e.touches[0].pageX, e.touches[0].pageY)
							}
						}, {
							key: "handleTouchMoveRotate",
							value: function(e) {
								this.rotateEnd.set(e.touches[0].pageX, e.touches[0].pageY), this.rotateDelta.subVectors(this.rotateEnd, this.rotateStart);
								var t = this.domElement === document ? document.body : this.domElement.querySelector("canvas") || this.domElement,
									n = t.clientWidth || this.clientWidth,
									i = t.clientHeight || this.clientHeight;
								this.rotateLeft(2 * Math.PI * this.rotateDelta.x / n * this.rotateSpeed), this.rotateUp(2 * Math.PI * this.rotateDelta.y / i * this.rotateSpeed), this.rotateStart.copy(this.rotateEnd), this.update()
							}
						}, {
							key: "handleTouchMoveDolly",
							value: function(e) {
								var t = e.touches[0].pageX - e.touches[1].pageX,
									n = e.touches[0].pageY - e.touches[1].pageY,
									i = Math.sqrt(t * t + n * n);
								this.dollyEnd.set(0, i), this.dollyDelta.subVectors(this.dollyEnd, this.dollyStart), this.dollyDelta.y > 0 ? this.dollyOut(this.getZoomScale()) : this.dollyDelta.y < 0 && this.dollyIn(this.getZoomScale()), this.dollyStart.copy(this.dollyEnd), this.update()
							}
						}, {
							key: "handleTouchMovePan",
							value: function(e) {
								this.panEnd.set(e.touches[0].pageX, e.touches[0].pageY), this.panDelta.subVectors(this.panEnd, this.panStart), this.pan(this.panDelta.x, this.panDelta.y), this.panStart.copy(this.panEnd), this.update()
							}
						}, {
							key: "rotateLeft",
							value: function(e) {
								this.sphericalDelta.theta -= e
							}
						}, {
							key: "rotateUp",
							value: function(e) {
								this.sphericalDelta.phi -= e
							}
						}, {
							key: "getAutoRotationAngle",
							value: function() {
								return 2 * Math.PI / 60 / 60 * this.autoRotateSpeed
							}
						}, {
							key: "getZoomScale",
							value: function() {
								return Math.pow(.95, this.zoomSpeed)
							}
						}, {
							key: "dollyOut",
							value: function(e) {
								this.object instanceof t1 ? this.scale *= e : this.object instanceof np ? (this.object.zoom = Math.max(this.minZoom, Math.min(this.maxZoom, this.object.zoom / e)), this.object.updateProjectionMatrix(), this.zoomChanged = !0) : (console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."), this.enableZoom = !1)
							}
						}, {
							key: "dollyIn",
							value: function(e) {
								this.object instanceof t1 ? this.scale /= e : this.object instanceof np ? (this.object.zoom = Math.max(this.minZoom, Math.min(this.maxZoom, this.object.zoom * e)), this.object.updateProjectionMatrix(), this.zoomChanged = !0) : (console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."), this.enableZoom = !1)
							}
						}, {
							key: "pan",
							value: function(e, t) {
								var n = this.domElement === document ? document.body : this.domElement.querySelector("canvas") || this.domElement,
									i = n.clientWidth || this.clientWidth,
									r = n.clientHeight || this.clientHeight;
								if (this.object instanceof t1) {
									var a = this.object.position,
										o = new eu;
									o.copy(a).sub(this.target);
									var s = o.length();
									s *= Math.tan(this.object.fov / 2 * Math.PI / 180), this.panLeft(2 * e * s / i, this.object.matrix), this.panUp(2 * t * s / r, this.object.matrix)
								} else this.object instanceof np ? (this.panLeft(e * (this.object.right - this.object.left) / this.object.zoom / r, this.object.matrix), this.panUp(t * (this.object.top - this.object.bottom) / this.object.zoom / i, this.object.matrix)) : (console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."), this.enablePan = !1)
							}
						}, {
							key: "panLeft",
							value: function(e, t) {
								var n = new eu;
								n.setFromMatrixColumn(t, 0), n.multiplyScalar(-e), this.panOffset.add(n)
							}
						}, {
							key: "panUp",
							value: function(e, t) {
								var n = new eu;
								n.setFromMatrixColumn(t, 1), n.multiplyScalar(e), this.panOffset.add(n)
							}
						}, {
							key: "getPolarAngle",
							value: function() {
								return this.spherical.phi
							}
						}, {
							key: "getAzimuthalAngle",
							value: function() {
								return this.spherical.theta
							}
						}, {
							key: "saveState",
							value: function() {
								this.target0.copy(this.target), this.position0.copy(this.object.position), this.zoom0 = this.object.zoom
							}
						}, {
							key: "reset",
							value: function() {
								this.target.copy(this.target0), this.object.position.copy(this.position0), this.object.zoom = this.zoom0, this.object.updateProjectionMatrix(), this.dispatchEvent(this.changeEvent), this.update(), this.state = this.STATE.NONE
							}
						}, {
							key: "update",
							value: function() {
								var e = new eu,
									t = (new el).setFromUnitVectors(this.object.up, new eu(0, 1, 0)),
									n = t.clone().invert(),
									i = new eu,
									r = new el,
									a = this.object.position;
								return e.copy(a).sub(this.target), e.applyQuaternion(t), this.spherical.setFromVector3(e), this.autoRotate && this.state === this.STATE.NONE && this.rotateLeft(this.getAutoRotationAngle()), this.spherical.theta += this.sphericalDelta.theta, this.spherical.phi += this.sphericalDelta.phi, this.spherical.theta = Math.max(this.minAzimuthAngle, Math.min(this.maxAzimuthAngle, this.spherical.theta)), this.spherical.phi = Math.max(this.minPolarAngle, Math.min(this.maxPolarAngle, this.spherical.phi)), this.spherical.makeSafe(), this.spherical.radius *= this.scale, this.spherical.radius = Math.max(this.minDistance, Math.min(this.maxDistance, this.spherical.radius)), this.target.add(this.panOffset), e.setFromSpherical(this.spherical), e.applyQuaternion(n), a.copy(this.target).add(e), this.object.lookAt(this.target), !0 === this.enableDamping ? (this.sphericalDelta.theta *= 1 - this.dampingFactor, this.sphericalDelta.phi *= 1 - this.dampingFactor) : this.sphericalDelta.set(0, 0, 0), this.scale = 1, this.panOffset.set(0, 0, 0), !!(this.zoomChanged || i.distanceToSquared(this.object.position) > this.EPS || 8 * (1 - r.dot(this.object.quaternion)) > this.EPS) && (this.dispatchEvent(this.changeEvent), i.copy(this.object.position), r.copy(this.object.quaternion), this.zoomChanged = !1, !0)
							}
						}, {
							key: "dispose",
							value: function() {
								this.domElement.removeEventListener("contextmenu", t.onContextMenu, !1), this.domElement.removeEventListener("mousedown", this.onMouseDown.bind(this), !1), this.domElement.removeEventListener("wheel", this.onMouseWheel.bind(this), !1), this.domElement.removeEventListener("touchstart", this.onTouchStart.bind(this), !1), this.domElement.removeEventListener("touchend", this.onTouchEnd.bind(this), !1), this.domElement.removeEventListener("touchmove", this.onTouchMove.bind(this), !1), document.removeEventListener("mousemove", this.onMouseMove.bind(this), !1), document.removeEventListener("mouseup", this.onMouseUp.bind(this), !1), window.removeEventListener("keydown", this.onKeyDown.bind(this), !1)
							}
						}], [{
							key: "onContextMenu",
							value: function(e) {
								e.preventDefault()
							}
						}]), t
					}(N);
				Object.defineProperties(oK.prototype, {
					center: {
						get: function() {
							return console.warn("OrbitControls: .center has been renamed to .target"), this.target
						}
					},
					noZoom: {
						get: function() {
							return console.warn("OrbitControls: .noZoom has been deprecated. Use .enableZoom instead."), !this.enableZoom
						},
						set: function(e) {
							console.warn("OrbitControls: .noZoom has been deprecated. Use .enableZoom instead."), this.enableZoom = !e
						}
					},
					noRotate: {
						get: function() {
							return console.warn("OrbitControls: .noRotate has been deprecated. Use .enableRotate instead."), !this.enableRotate
						},
						set: function(e) {
							console.warn("OrbitControls: .noRotate has been deprecated. Use .enableRotate instead."), this.enableRotate = !e
						}
					},
					noPan: {
						get: function() {
							return console.warn("OrbitControls: .noPan has been deprecated. Use .enablePan instead."), !this.enablePan
						},
						set: function(e) {
							console.warn("OrbitControls: .noPan has been deprecated. Use .enablePan instead."), this.enablePan = !e
						}
					},
					noKeys: {
						get: function() {
							return console.warn("OrbitControls: .noKeys has been deprecated. Use .enableKeys instead."), !this.enableKeys
						},
						set: function(e) {
							console.warn("OrbitControls: .noKeys has been deprecated. Use .enableKeys instead."), this.enableKeys = !e
						}
					},
					staticMoving: {
						get: function() {
							return console.warn("OrbitControls: .staticMoving has been deprecated. Use .enableDamping instead."), !this.enableDamping
						},
						set: function(e) {
							console.warn("OrbitControls: .staticMoving has been deprecated. Use .enableDamping instead."), this.enableDamping = !e
						}
					},
					dynamicDampingFactor: {
						get: function() {
							return console.warn("OrbitControls: .dynamicDampingFactor has been renamed. Use .dampingFactor instead."), this.dampingFactor
						},
						set: function(e) {
							console.warn("OrbitControls: .dynamicDampingFactor has been renamed. Use .dampingFactor instead."), this.dampingFactor = e
						}
					}
				});
				var oQ = function(e, t, n) {
						if (n) {
							var i = new ox(4473924);
							t.add(i);
							var r = new oy(0xd4d4d4);
							r.target = t, r.position.set(-7.5, .5, -6).normalize(), t.add(r);
							var a = new oy(0xacacac);
							a.target = t, a.position.set(20, 4, -0).normalize(), t.add(a);
							var o = new oy(0xacacac);
							o.target = t, o.position.set(0, 1, 1).normalize(), t.add(o)
						} else {
							i = new ox(8882048), e.add(i);
							var s = new oy(0xacacac);
							s.position.set(-.671597898, .671597898, .312909544).normalize(), e.add(s);
							var l = new oy(4473924),
								u = (new eu).copy(s.position).negate().normalize();
							l.position.set(u.x, u.y, u.z), e.add(l)
						}
						return {
							scene: e,
							camera: t
						}
					},
					o$ = function(e) {
						var t;
						return null === (t = e.parentElement) || void 0 === t ? void 0 : t.offsetWidth
					},
					o0 = function(e) {
						var t;
						return null === (t = e.parentElement) || void 0 === t ? void 0 : t.offsetHeight
					},
					o1 = function(e, t, n) {
						e.render(t, n)
					},
					o3 = function(e, t, n, i) {
						e.enabled && e.update(), D(), o1(t, n, i), requestAnimationFrame(function() {
							return o3(e, t, n, i)
						})
					},
					o2 = function(e, t, n) {
						var i = new rb({
								antialias: !0,
								alpha: !0
							}),
							r = Math.max(4 * new eu(t.aabb.max.x, t.aabb.max.y, t.aabb.max.z).length(), 1e3),
							a = new t1(void 0 !== t.camera.fov ? t.camera.fov : 70, o$(e) / o0(e), .1, r),
							o = new rw,
							s = new oF,
							l = new oZ;
						return new Promise(function(r, u) {
							var c = function(s) {
								oQ(o, a, n), o.add(a), o.add(s);
								var l, u, c = function(e, t, n) {
										var i = function() {
											n.aspect = o$(t) / o0(t), n.updateProjectionMatrix(), e.setSize(o$(t), o0(t))
										};
										e.setSize(o$(t), o0(t));
										var r = e.domElement,
											a = 0,
											o = function() {
												clearTimeout(a), a = window.setTimeout(i, 100)
											},
											s = function() {
												r.style.display = "none"
											};
										return window.addEventListener("resize", o), window.addEventListener("beforeunload", s), [r, function() {
											window.removeEventListener("resize", o), window.removeEventListener("beforeunload", s)
										}]
									}(i, e, a),
									h = c[0],
									d = c[1],
									f = ((l = new oK(a, e, t, "static")).rotateSpeed = 1.5, l.zoomSpeed = 1.5, l.dampingFactor = .3, l.addEventListener("change", function() {
										return o1(i, o, a)
									}), u = function() {
										o1(i, o, a)
									}, l.addEventListener("change", u), [l, function() {
										l.removeEventListener("change", u), l.dispose()
									}]),
									p = f[0],
									m = f[1];
								o1(i, o, a), o3(p, i, o, a), r([h, function() {
									d(), m()
								}])
							};
							s.load(t.mtl, function(e) {
								e.preload(), l.setMaterials(e).load(t.obj, c, void 0, u)
							}, void 0, u)
						})
					},
					o4 = function(e) {
						return e.loadingComponent || s().createElement("div", null, "Loading...")
					},
					o5 = function(e) {
						var t = e.error,
							n = e.errorComponent;
						return n ? s().createElement(n, {
							error: t
						}) : s().createElement("div", null, "Error")
					},
					o6 = function(e) {
						var t, n, i, r, a, l, u, c, h, d, f, p, m, v, g, y, x, _, b = e.imageUrl,
							w = e.useDynamicLighting,
							M = e.slots,
							E = e.onLoadStart,
							A = e.onLoad,
							k = e.onError,
							R = ((_ = (0, o.useRef)()).current || (_.current = "thumbnail-3d-".concat(Math.random().toString(36).substring(2, 11))), _.current),
							L = (n = (t = (0, o.useState)(null))[0], i = t[1], a = (r = (0, o.useState)(!1))[0], l = r[1], c = (u = (0, o.useState)(null))[0], h = u[1], (0, o.useEffect)(function() {
								S(void 0, void 0, void 0, function() {
									var e;
									return T(this, function(t) {
										switch (t.label) {
											case 0:
												l(!0), null == E || E(), t.label = 1;
											case 1:
												return t.trys.push([1, 4, 5, 6]), [4, fetch(b)];
											case 2:
												return [4, t.sent().json()];
											case 3:
												return i(t.sent()), [3, 6];
											case 4:
												return console.error("Error fetching WebGL JSON:", e = t.sent()), h(e), null == k || k(e), [3, 6];
											case 5:
												return l(!1), [7];
											case 6:
												return [2]
										}
									})
								})
							}, [b]), {
								webGLJson: n,
								isLoading: a,
								error: c
							}),
							C = L.webGLJson,
							P = L.isLoading,
							D = L.error,
							I = (d = void 0 !== w && w, f = (0, o.useRef)(null), m = (p = (0, o.useState)(!1))[0], v = p[1], y = (g = (0, o.useState)(null))[0], x = g[1], (0, o.useEffect)(function() {
								var e, t, n;
								return (null === (e = f.current) || void 0 === e ? void 0 : e.parentElement) && C ? (n = f.current.parentElement, S(void 0, void 0, void 0, function() {
									var e, i, r, a;
									return T(this, function(o) {
										switch (o.label) {
											case 0:
												v(!0), o.label = 1;
											case 1:
												return o.trys.push([1, 3, , 4]), [4, o2(n, C, d)];
											case 2:
												return i = (e = o.sent())[0], t = e[1], i && (null === (a = f.current) || void 0 === a || a.append(i), null == A || A()), [3, 4];
											case 3:
												return console.error("Error loading 3D canvas:", r = o.sent()), x(r), null == k || k(r), [3, 4];
											case 4:
												return v(!1), [2]
										}
									})
								}), function() {
									null == t || t()
								}) : function() {}
							}, [C, d]), {
								containerRef: f,
								isCanvasLoading: m,
								error: y
							}),
							N = I.containerRef,
							O = I.isCanvasLoading || P,
							z = I.error || D;
						return s().createElement("span", {
							ref: N,
							className: "thumbnail-3d-container",
							id: "thumbnail-3d-container-".concat(R)
						}, O && s().createElement(o4, {
							loadingComponent: null == M ? void 0 : M.loading
						}), !!z && s().createElement(o5, {
							error: z,
							errorComponent: null == M ? void 0 : M.error
						}))
					},
					o8 = function() {
						function e() {
							d(this, e)
						}
						return p(e, [{
							key: "interpretData",
							value: function(t, n, i) {
								var r = new oi(this.manager);

								function a(e) {
									return 39 >= (e.length >= 32 && e.length) && -1 === e.indexOf("/")
								}

								function o(e) {
									return !a(e) && e.indexOf("/") > -1 && -1 === e.indexOf("\n")
								}
								a(n) ? e.loadWithRetries(r, oz(n), function(e) {
									i(t, e)
								}, function() {}, function() {}) : o(n) ? e.loadWithRetries(r, n, function(e) {
									i(t, e)
								}, function() {}, function() {}) : a(n) || o(n) || i(t, n)
							}
						}, {
							key: "load",
							value: function(t, n, i) {
								var r, a, o = new oF,
									s = new oZ;
								this.interpretData(this, n, function(n, l) {
									(r = o.parse(l)).preload(), n.interpretData(n, t, function(t, n) {
										var o = e.cleanObjData(n);
										(a = s.setMaterials(r).parse(o)).traverse(function(e) {
											if (e instanceof tX && e.material.name) {
												var t = r.create(e.material.name);
												t && (e.material = t)
											}
										}), i(a, r)
									})
								})
							}
						}], [{
							key: "loadWithRetries",
							value: function(e, t, n, i, r) {
								var a, o = 0,
									s = function() {
										e.load(t, n, i, a)
									};
								a = function() {
									o < 4 ? (o += 1, setTimeout(s, 5e3)) : r("Unable to load file", t)
								}, s()
							}
						}, {
							key: "cleanObjData",
							value: function(e) {
								return e.replace(/-1.#IND/g, "0")
							}
						}]), e
					}(),
					o7 = {},
					o9 = function(e) {
						var t, n;
						if (void 0 === (null === (t = e.parentElement) || void 0 === t ? void 0 : t.offsetWidth)) throw Error("Container element not found");
						return null === (n = e.parentElement) || void 0 === n ? void 0 : n.offsetWidth
					},
					se = function(e) {
						var t, n;
						if (void 0 === (null === (t = e.parentElement) || void 0 === t ? void 0 : t.offsetHeight)) throw Error("Container element not found");
						return null === (n = e.parentElement) || void 0 === n ? void 0 : n.offsetHeight
					},
					st = function(e, t, n) {
						e.render(t, n)
					},
					sn = function(e) {
						return e.loadingComponent || s().createElement("div", {
							className: "thumbnail-loader "
						}, s().createElement("span", {
							className: "spinner spinner-default"
						}))
					},
					si = function(e) {
						var t = e.error,
							n = e.errorComponent;
						return n ? s().createElement(n, {
							error: t
						}) : null
					},
					sr = function(e) {
						var t, n, i, r, a, l, u, c, h, d, f, p, m, v, g, y, x, _, b, w, M, E, A, k, R, L, C, P = e.targetId,
							I = e.getThumbnailJson,
							N = e.onSuccess,
							O = e.onFailure,
							z = e.onAnimationLoopFinish,
							U = e.slots,
							F = (n = (t = {
								targetId: P,
								getThumbnailJson: I,
								onFailure: O
							}).targetId, i = t.getThumbnailJson, r = t.onFailure, l = (a = (0, o.useState)(!0))[0], u = a[1], h = (c = (0, o.useState)(void 0))[0], d = c[1], p = (f = (0, o.useState)(null))[0], m = f[1], (0, o.useEffect)(function() {
								var e = !0;
								return S(void 0, void 0, void 0, function() {
										var t, a;
										return T(this, function(o) {
											switch (o.label) {
												case 0:
													u(!0), d(void 0), o.label = 1;
												case 1:
													return o.trys.push([1, 3, 4, 5]), [4, i(n)];
												case 2:
													return t = o.sent(), e && m(t), [3, 5];
												case 3:
													return console.error("Error fetching WebGL Animation JSON:", a = o.sent()), e && (d(a), null == r || r(a)), [3, 5];
												case 4:
													return e && u(!1), [7];
												case 5:
													return [2]
											}
										})
									}),
									function() {
										e = !1
									}
							}, [n, i]), {
								data: p,
								isLoading: l,
								error: h
							}),
							B = F.data,
							H = F.isLoading,
							V = F.error,
							G = (g = (v = {
								webGLData: B,
								targetId: P,
								onAnimationLoopFinish: z,
								onSuccess: N,
								onFailure: O
							}).webGLData, y = v.targetId, x = v.onAnimationLoopFinish, _ = v.onSuccess, b = v.onFailure, w = (0, o.useRef)(null), E = (M = (0, o.useState)(!1))[0], A = M[1], R = (k = (0, o.useState)(void 0))[0], L = k[1], C = function() {
								if (w.current && w.current.children.length > 0) {
									var e = w.current.querySelector("canvas");
									e && w.current.removeChild(e)
								}
							}, (0, o.useEffect)(function() {
								var e = null;
								if (!g || !w.current) return g || (A(!1), L(void 0)),
									function() {
										e && (e(), e = null), C()
									};
								var t = g.json,
									n = g.performance;
								return S(void 0, void 0, void 0, function() {
										var i, r, a;
										return T(this, function(o) {
											switch (o.label) {
												case 0:
													A(!0), L(void 0), o.label = 1;
												case 1:
													var s;
													if (o.trys.push([1, 3, 4, 5]), !w.current) throw Error("Canvas container ref not available");
													return [4, (s = w.current, new Promise(function(e, n) {
														var i, r, a, o = (o7[r = "THREE_renderer_targetId_".concat(y)] || (o7[r] = {
																container: s,
																renderer: new rb({
																	antialias: !0,
																	alpha: !0
																})
															}), o7[r].renderer),
															l = t.aabb.max,
															u = Math.max(4 * new eu(l.x, l.y, l.z).length(), 1e3),
															c = new t1(void 0 !== t.camera.fov ? t.camera.fov : 70, o9(s) / se(s), .1, u),
															h = new rw;
														h.add(c);
														var d = {},
															f = t.frames,
															p = 0,
															m = 0,
															v = new o8,
															g = Object.keys(t.partobjs);
														(i = t.partobjs, Promise.all(g.map(function(e) {
															var t = i[e],
																n = t.files["scene.obj"].content,
																r = t.files["scene.mtl"].content;
															return new Promise(function(t, i) {
																v.load(n, r, function(n, r) {
																	try {
																		r.preload(), (new oU).setMaterials(r), n.children[0].geometry.computeBoundingBox();
																		var a = n.children[0].geometry.boundingBox,
																			o = new eu;
																		o.subVectors(a.max, a.min), o.multiplyScalar(.5), o.add(a.min), o.applyMatrix4(n.children[0].matrixWorld), n.children[0].geometry.applyMatrix4((new eB).makeTranslation(-o.x, -o.y, -o.z)), n.children[0].geometry.verticesNeedUpdate = !0, n.children[0].position.x = o.x, n.children[0].position.y = o.y, n.children[0].position.z = o.z, n.matrixAutoUpdate = !1, t([e, n])
																	} catch (e) {
																		i(e)
																	}
																})
															})
														}))).then(function(n) {
															n.forEach(function(e) {
																var t = e[0],
																	n = e[1];
																d[t] = n, n.matrixAutoUpdate = !1, h.add(n)
															}), oQ(h, c, !1), h.add(c);
															var i, r, l = function(e, t, n) {
																	var i = function() {
																		n.aspect = o9(t) / se(t), n.updateProjectionMatrix(), e.setSize(o9(t), se(t))
																	};
																	e.setSize(o9(t), se(t));
																	var r = e.domElement,
																		a = 0,
																		o = function() {
																			clearTimeout(a), a = setTimeout(i, 100)
																		},
																		s = function() {
																			r.style.display = "none"
																		};
																	return window.addEventListener("resize", o), window.addEventListener("beforeunload", s), [r, function() {
																		window.removeEventListener("resize", o), window.removeEventListener("beforeunload", s)
																	}]
																}(o, s, c),
																u = l[0],
																v = l[1],
																y = (i = function() {
																	st(o, h, c)
																}, (r = new oK(c, s, t, "animated")).addEventListener("change", i), [r, function() {
																	r.removeEventListener("change", i), r.dispose()
																}]),
																_ = y[0],
																b = y[1];
															a = _, st(o, h, c);
															var w = 0;
															(function e() {
																p === f.length && (p = 0, m += 1, x && x(m)),
																	function(e, t, n, i, r, a, o, s) {
																		t.update();
																		for (var l = a[r], u = 0; u < s.length; ++u) {
																			var c = l[s[u]],
																				h = o[s[u]];
																			void 0 !== c && void 0 !== h && (h.children[0].position.set(c.Position.x, c.Position.y, c.Position.z), h.children[0].quaternion.set(c.Rotation.x, c.Rotation.y, c.Rotation.z, c.Rotation.w), h.updateMatrix())
																		}
																		i.updateMatrixWorld(!0), t.enabled && t.update(), D(), st(e, i, n)
																	}(o, a, c, h, p, f, d, g), p += 1, w = requestAnimationFrame(e)
															})(), e({
																canvas: u,
																stopAnimationFrame: function() {
																	b(), v(), cancelAnimationFrame(w)
																}
															})
														}).catch(function(e) {
															console.error("Error loading parts:", e), n(e)
														})
													}))];
												case 2:
													return r = (i = o.sent()).canvas, e = i.stopAnimationFrame, w.current.append(r), null == _ || _(n), [3, 5];
												case 3:
													return console.error("Error loading animation canvas (Canvas load)", a = o.sent()), L(a), null == b || b(a), [3, 5];
												case 4:
													return A(!1), [7];
												case 5:
													return [2]
											}
										})
									}),
									function() {
										"function" == typeof e && e(), C()
									}
							}, [g, y]), {
								containerRef: w,
								isCanvasLoading: E,
								canvasError: R
							}),
							W = G.containerRef,
							j = G.isCanvasLoading,
							q = G.canvasError,
							X = H || j,
							Y = V || q;
						return s().createElement("span", {
							ref: W,
							className: "thumbnail-animation-container"
						}, X && s().createElement(sn, {
							loadingComponent: null == U ? void 0 : U.loading
						}), !X && !!Y && s().createElement(si, {
							error: Y,
							errorComponent: null == U ? void 0 : U.error
						}))
					}
			},
			375: function(e, t, n) {
				"use strict";
				n.r(t);
				var i = n(685),
					r = {
						templateUrl: "3d-thumbnail",
						bindings: {
							targetId: "<",
							retry: "<",
							retryInterval: "<",
							onSuccess: "<",
							onFailure: "<"
						},
						controller: "3dThumbnailController"
					};
				i.Z.component("thumbnail3d", r), t.default = r
			},
			740: function(e, t, n) {
				"use strict";
				n.r(t);
				var i = n(685);

				function r(e) {
					e.isLoading = !1, this.setLoading = function(t) {
						e.isLoading = t
					}
				}
				r.$inject = ["$scope"], i.Z.controller("3dThumbnailController", r), t.default = r
			},
			425: function(e, t, n) {
				"use strict";
				n.r(t);
				var i = n(685);

				function r(e) {
					return {
						link: function(t, n) {
							var i = t.$ctrl;
							i.setLoading(!0), e.getThumbnail3dCanvas(i.targetId, n.context.parentElement).then(function(e) {
								var t = e.canvas,
									r = e.performance;
								i.setLoading(!1), n.append(t), i.onSuccess && i.onSuccess(r)
							}).catch(function(e) {
								i.onFailure && i.onFailure(e)
							})
						}
					}
				}
				r.$inject = ["thumbnail3dService"], i.Z.directive("canvasContainer", r)
			},
			157: function(e, t, n) {
				"use strict";
				n.r(t);
				var i = n(938),
					r = n(738),
					a = n(685);

				function o(e, t) {
					(null == t || t > e.length) && (t = e.length);
					for (var n = 0, i = Array(t); n < t; n++) i[n] = e[n];
					return i
				}

				function s(e) {
					return {
						getThumbnail3dCanvas: function(t, n, a) {
							return e(function(e, s) {
								(0, r.getThumbnail3dJson)(t).then(function(t) {
									var r = t.json,
										s = t.performance;
									(0, i.UC)(n, r, a).then(function(t) {
										return e({
											canvas: (function(e) {
												if (Array.isArray(e)) return e
											}(t) || function(e, t) {
												var n = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
												if (null != n) {
													var i, r, a, o, s = [],
														l = !0,
														u = !1;
													try {
														a = (n = n.call(e)).next;
														for (; !(l = (i = a.call(n)).done) && (s.push(i.value), s.length !== t); l = !0);
													} catch (e) {
														u = !0, r = e
													} finally {
														try {
															if (!l && null != n.return && (o = n.return(), Object(o) !== o)) return
														} finally {
															if (u) throw r
														}
													}
													return s
												}
											}(t, 1) || function(e, t) {
												if (e) {
													if ("string" == typeof e) return o(e, 1);
													var n = ({}).toString.call(e).slice(8, -1);
													return "Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n ? Array.from(e) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? o(e, t) : void 0
												}
											}(t, 1) || function() {
												throw TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
											}())[0],
											performance: s
										})
									})
								}).catch(s)
							})
						}
					}
				}
				s.$inject = ["$q"], a.Z.factory("thumbnail3dService", s), t.default = s
			},
			685: function(e, t, n) {
				"use strict";
				var i = n(993),
					r = n.n(i)().module("thumbnails3d", ["thumbnails3dTemplates"]);
				t.Z = r
			},
			58: function(e) {
				var t, n, i, r = e.exports = {};

				function a() {
					throw Error("setTimeout has not been defined")
				}

				function o() {
					throw Error("clearTimeout has not been defined")
				}

				function s(e) {
					if (t === setTimeout) return setTimeout(e, 0);
					if ((t === a || !t) && setTimeout) return t = setTimeout, setTimeout(e, 0);
					try {
						return t(e, 0)
					} catch (n) {
						try {
							return t.call(null, e, 0)
						} catch (n) {
							return t.call(this, e, 0)
						}
					}
				}! function() {
					try {
						t = "function" == typeof setTimeout ? setTimeout : a
					} catch (e) {
						t = a
					}
					try {
						n = "function" == typeof clearTimeout ? clearTimeout : o
					} catch (e) {
						n = o
					}
				}();
				var l = [],
					u = !1,
					c = -1;

				function h() {
					u && i && (u = !1, i.length ? l = i.concat(l) : c = -1, l.length && d())
				}

				function d() {
					if (!u) {
						var e = s(h);
						u = !0;
						for (var t = l.length; t;) {
							for (i = l, l = []; ++c < t;) i && i[c].run();
							c = -1, t = l.length
						}
						i = null, u = !1,
							function(e) {
								if (n === clearTimeout) return clearTimeout(e);
								if ((n === o || !n) && clearTimeout) return n = clearTimeout, clearTimeout(e);
								try {
									n(e)
								} catch (t) {
									try {
										return n.call(null, e)
									} catch (t) {
										return n.call(this, e)
									}
								}
							}(e)
					}
				}

				function f(e, t) {
					this.fun = e, this.array = t
				}

				function p() {}
				r.nextTick = function(e) {
					var t = Array(arguments.length - 1);
					if (arguments.length > 1)
						for (var n = 1; n < arguments.length; n++) t[n - 1] = arguments[n];
					l.push(new f(e, t)), 1 !== l.length || u || s(d)
				}, f.prototype.run = function() {
					this.fun.apply(null, this.array)
				}, r.title = "browser", r.browser = !0, r.env = {}, r.argv = [], r.version = "", r.versions = {}, r.on = p, r.addListener = p, r.once = p, r.off = p, r.removeListener = p, r.removeAllListeners = p, r.emit = p, r.prependListener = p, r.prependOnceListener = p, r.listeners = function(e) {
					return []
				}, r.binding = function(e) {
					throw Error("process.binding is not supported")
				}, r.cwd = function() {
					return "/"
				}, r.chdir = function(e) {
					throw Error("process.chdir is not supported")
				}, r.umask = function() {
					return 0
				}
			},
			582: function(e, t, n) {
				"use strict";
				n.d(t, {
					Ab: function() {
						return c
					},
					Ij: function() {
						return u
					},
					KN: function() {
						return o
					},
					U5: function() {
						return l
					},
					Vc: function() {
						return a
					},
					W3: function() {
						return d
					},
					cQ: function() {
						return s
					},
					eS: function() {
						return h
					},
					fA: function() {
						return p
					},
					hc: function() {
						return f
					},
					wq: function() {
						return m
					}
				});
				var i, r, a = 1e3,
					o = .1,
					s = 10,
					l = 1500,
					u = ((i = {}).Avatar = "Avatar", i.Animation = "Animation", i.Asset = "Asset", i.UserOutfit = "UserOutfit", i),
					c = ((r = {}).error = "Error", r.complete = "Completed", r.inReview = "InReview", r.pending = "Pending", r.blocked = "Blocked", r),
					h = "Thumbnail3DWeb",
					d = "LoadSuccess",
					f = "Sequence",
					p = "LoadFailure",
					m = "Counter"
			},
			738: function(e, t, n) {
				"use strict";
				n.r(t), n.d(t, {
					get3DJson: function() {
						return A
					},
					getJsonUrl: function() {
						return E
					},
					getThumbnail3dJson: function() {
						return R
					},
					getJsonUrlByThumbnailType: function() {
						return T
					}
				});
				var i, r, a, o, s = window.Roblox["core-scripts"].http.http,
					l = window.CoreUtilities,
					u = window.Roblox["core-scripts"].environmentUrls,
					c = n.n(u),
					h = c().thumbnailsApi;

				function d(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = null != arguments[t] ? arguments[t] : {},
							i = Object.keys(n);
						"function" == typeof Object.getOwnPropertySymbols && (i = i.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
							return Object.getOwnPropertyDescriptor(n, e).enumerable
						}))), i.forEach(function(t) {
							var i;
							i = n[t], t in e ? Object.defineProperty(e, t, {
								value: i,
								enumerable: !0,
								configurable: !0,
								writable: !0
							}) : e[t] = i
						})
					}
					return e
				}
				var f = new l.BatchRequestFactory,
					p = 0,
					m = (r = document.getElementsByName("performance")[0]) ? {
						performanceMetricsBatchWaitTime: function(e) {
							if (!e) return 0;
							var t, n, i, r = e.split(":");
							return (3600 * parseInt(null !== (t = r[0]) && void 0 !== t ? t : "", 10) + 60 * parseInt(null !== (n = r[1]) && void 0 !== n ? n : "", 10) + parseInt(null !== (i = r[2]) && void 0 !== i ? i : "", 10)) * 1e3
						}(r.getAttribute("data-ui-performance-metrics-batch-wait-time")),
						performanceMetricsBatchSize: parseInt(null !== (i = r.getAttribute("data-ui-performance-metrics-batch-size")) && void 0 !== i ? i : "", 10)
					} : {},
					v = m.performanceMetricsBatchWaitTime,
					g = m.performanceMetricsBatchSize,
					y = f.createRequestProcessor(function(e) {
						var t = e.map(function(e) {
							return e.data.taskId, d({}, function(e, t) {
								if (null == e) return {};
								var n, i, r = function(e, t) {
									if (null == e) return {};
									var n, i, r = {},
										a = Object.keys(e);
									for (i = 0; i < a.length; i++) n = a[i], t.indexOf(n) >= 0 || (r[n] = e[n]);
									return r
								}(e, t);
								if (Object.getOwnPropertySymbols) {
									var a = Object.getOwnPropertySymbols(e);
									for (i = 0; i < a.length; i++) n = a[i], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n])
								}
								return r
							}(e.data, ["taskId"]))
						});
						return l.httpService.post({
							url: "".concat(h, "/v1/measurements"),
							retryable: !0,
							withCredentials: !0
						}, t).then(function() {
							var t = {};
							return e.forEach(function(e) {
								t[e.key] = !0
							}), t
						})
					}, function(e) {
						var t, n = e.taskId;
						return null !== (t = null == n ? void 0 : n.toString()) && void 0 !== t ? t : ""
					}, {
						getFailureCooldown: f.createExponentialBackoffCooldown(1e3, 3e3),
						maxRetryAttempts: 5,
						batchSize: null != g ? g : 100,
						processBatchWaitTime: null != v ? v : 1e3
					}),
					x = function(e, t) {
						var n = p;
						p += 1;
						var i = {
							metricName: e,
							jsonData: JSON.stringify(t)
						};
						return y.queueItem(d({
							taskId: n
						}, i))
					},
					_ = n(582),
					b = window.Roblox["core-scripts"].endpoints,
					w = c().thumbnailsApi;

				function M(e, t, n, i, r, a, o) {
					try {
						var s = e[a](o),
							l = s.value
					} catch (e) {
						n(e);
						return
					}
					s.done ? t(l) : Promise.resolve(l).then(i, r)
				}
				var S = function(e, t, n, i) {
						var r = {
							url: e.data.imageUrl
						};
						s.get(r).then(function(e) {
							t(e.data, i)
						}).catch(function() {
							n("3D Thumbnail failed to load")
						})
					},
					T = function(e, t) {
						if (e === _.Ij.Animation) return (0, b.getAbsoluteUrl)("".concat(w, "/v1/asset-thumbnail-animated?assetId=").concat(t));
						if (e === _.Ij.Asset) return (0, b.getAbsoluteUrl)("".concat(w, "/v1/assets-thumbnail-3d?assetId=").concat(t));
						if (e === _.Ij.UserOutfit) return (0, b.getAbsoluteUrl)("".concat(w, "/v1/users/outfit-3d?outfitId=").concat(t));
						if (e === _.Ij.Avatar) return (0, b.getAbsoluteUrl)("".concat(w, "/v1/users/avatar-3d?userId=").concat(t));
						throw Error("Invalid thumbnail type: ".concat(e))
					},
					E = (a = function(e, t, n) {
						var i, r, a, o, l, u, c = arguments;
						return function(e, t) {
							var n, i, r, a, o = {
								label: 0,
								sent: function() {
									if (1 & r[0]) throw r[1];
									return r[1]
								},
								trys: [],
								ops: []
							};
							return a = {
								next: s(0),
								throw: s(1),
								return: s(2)
							}, "function" == typeof Symbol && (a[Symbol.iterator] = function() {
								return this
							}), a;

							function s(a) {
								return function(s) {
									return function(a) {
										if (n) throw TypeError("Generator is already executing.");
										for (; o;) try {
											if (n = 1, i && (r = 2 & a[0] ? i.return : a[0] ? i.throw || ((r = i.return) && r.call(i), 0) : i.next) && !(r = r.call(i, a[1])).done) return r;
											switch (i = 0, r && (a = [2 & a[0], r.value]), a[0]) {
												case 0:
												case 1:
													r = a;
													break;
												case 4:
													return o.label++, {
														value: a[1],
														done: !1
													};
												case 5:
													o.label++, i = a[1], a = [0];
													continue;
												case 7:
													a = o.ops.pop(), o.trys.pop();
													continue;
												default:
													if (!(r = (r = o.trys).length > 0 && r[r.length - 1]) && (6 === a[0] || 2 === a[0])) {
														o = 0;
														continue
													}
													if (3 === a[0] && (!r || a[1] > r[0] && a[1] < r[3])) {
														o.label = a[1];
														break
													}
													if (6 === a[0] && o.label < r[1]) {
														o.label = r[1], r = a;
														break
													}
													if (r && o.label < r[2]) {
														o.label = r[2], o.ops.push(a);
														break
													}
													r[2] && o.ops.pop(), o.trys.pop();
													continue
											}
											a = t.call(e, o)
										} catch (e) {
											a = [6, e], i = 0
										} finally {
											n = r = 0
										}
										if (5 & a[0]) throw a[1];
										return {
											value: a[0] ? a[1] : void 0,
											done: !0
										}
									}([a, s])
								}
							}
						}(this, function(h) {
							switch (h.label) {
								case 0:
									i = c.length > 3 && void 0 !== c[3] ? c[3] : _.cQ, r = c.length > 4 && void 0 !== c[4] ? c[4] : _.U5, o = {
										realRegeneration: !1,
										startTime: new Date,
										retriesDone: 0,
										version: "TN2"
									}, h.label = 1;
								case 1:
									if (!(o.retriesDone < i && (null == a ? void 0 : a.data.state) !== _.Ab.complete)) return [3, 11];
									h.label = 2;
								case 2:
									if (h.trys.push([2, 7, , 8]), !n) return [3, 4];
									return [4, n()];
								case 3:
									return a = h.sent(), [3, 6];
								case 4:
									return l = {
										url: T(e, t),
										withCredentials: !0
									}, [4, s.get(l)];
								case 5:
									a = h.sent(), h.label = 6;
								case 6:
									return console.log("jsonRes", a), o.version = a.data.version, [3, 8];
								case 7:
									throw console.error("error construct get json request, exception: ", u = h.sent()), u;
								case 8:
									if (a.data.state === _.Ab.complete) return [3, 10];
									return [4, new Promise(function(e) {
										setTimeout(e, r)
									})];
								case 9:
									h.sent(), o.retriesDone += 1, h.label = 10;
								case 10:
									return [3, 1];
								case 11:
									if ((null == a ? void 0 : a.data.state) === _.Ab.complete) return o.version = a.data.version, [2, a.data];
									throw Error("3D Thumbnail failed to load")
							}
						})
					}, o = function() {
						var e = this,
							t = arguments;
						return new Promise(function(n, i) {
							var r = a.apply(e, t);

							function o(e) {
								M(r, n, i, o, s, "next", e)
							}

							function s(e) {
								M(r, n, i, o, s, "throw", e)
							}
							o(void 0)
						})
					}, function(e, t, n) {
						return o.apply(this, arguments)
					}),
					A = function(e, t, n, i, r, a, o, l) {
						var u;
						try {
							if (null == n) {
								var c = {
									url: T(t, e),
									withCredentials: !0
								};
								u = s.get(c)
							} else u = n()
						} catch (e) {
							throw console.error("error construct get json request, exception: ".concat(e)), e
						}
						u.then(function(s) {
							console.log({
								jsonRes: s
							}), s.data && s.data.state === _.Ab.complete ? (l.version = s.data.version, S(s, i, r, l)) : (l.realRegeneration = !1, a-- > 0 ? (l.retriesDone++, setTimeout(function() {
								A(e, t, n, i, r, a, o, l)
							}, o)) : r("3D Thumbnail failed to load"))
						}).catch(function() {
							r("3D Thumbnail failed to load")
						})
					},
					k = function(e, t, n, i, r, a, o) {
						A(e, t, n, i, r, a, o, {
							realRegeneration: !1,
							startTime: new Date,
							retriesDone: 0,
							version: "TN2"
						})
					},
					R = function() {
						var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
							t = arguments.length > 1 ? arguments[1] : void 0,
							n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : _.Ij.Avatar,
							i = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : _.cQ,
							r = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : _.U5;
						return new Promise(e || null == t ? function(a, o) {
							k(e, n, t, function(e, t) {
								var i, r = new Date().getTime() - t.startTime.getTime();
								null === (i = window.Roblox.ThumbnailMetrics) || void 0 === i || i.logFinalThumbnailTime(r), x("ThumbnailLoadDurationWebapp", {
									Status: "Success",
									ThumbnailType: "".concat(n, "_3d"),
									Version: t.version,
									Value: r.toString()
								}).catch(function(e) {
									console.error(e)
								}), 0 === t.retriesDone ? x("ThumbnailNoRetrySuccessWebapp", {
									ThumbnailType: "".concat(n, "_3d"),
									Version: t.version
								}).catch(function(e) {
									console.error(e)
								}) : x("ThumbnailRetryWebapp", {
									ThumbnailType: "".concat(n, "_3d"),
									Version: t.version,
									Value: t.retriesDone.toString()
								}).catch(function(e) {
									console.error(e)
								}), a({
									json: e,
									performance: {
										duration: r
									}
								})
							}, function(e) {
								var t;
								null === (t = window.Roblox.ThumbnailMetrics) || void 0 === t || t.logThumbnailTimeout(), x("ThumbnailTimeoutWebapp", {
									ThumbnailType: "".concat(n, "_3d"),
									Version: "TN3"
								}).catch(function(e) {
									console.error(e)
								}), o(e)
							}, i, r)
						} : function(e, t) {
							t("TargetId or GetJson function can not be empty.")
						})
					}
			},
			196: function(e) {
				"use strict";
				e.exports = window.React
			},
			993: function(e) {
				"use strict";
				e.exports = window.angular
			}
		},
		t = {};

	function n(i) {
		var r = t[i];
		if (void 0 !== r) return r.exports;
		var a = t[i] = {
			exports: {}
		};
		return e[i](a, a.exports, n), a.exports
	}
	n.n = function(e) {
			var t = e && e.__esModule ? function() {
				return e.default
			} : function() {
				return e
			};
			return n.d(t, {
				a: t
			}), t
		}, n.d = function(e, t) {
			for (var i in t) n.o(t, i) && !n.o(e, i) && Object.defineProperty(e, i, {
				enumerable: !0,
				get: t[i]
			})
		}, n.o = function(e, t) {
			return Object.prototype.hasOwnProperty.call(e, t)
		}, n.r = function(e) {
			"undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
				value: "Module"
			}), Object.defineProperty(e, "__esModule", {
				value: !0
			})
		}, n.rv = function() {
			return "1.2.8"
		}, n.ruid = "bundler=rspack@1.2.8",
		function() {
			"use strict";
			var e, t, i = {};
			n.r(i), n.d(i, {
				AnimatedThumbnail: function() {
					return M
				},
				DefaultMaxRetry: function() {
					return c.cQ
				},
				DefaultMaxRetryInterval: function() {
					return c.U5
				},
				FeatureName: function() {
					return c.eS
				},
				LoadFailureMetricsType: function() {
					return c.wq
				},
				LoadFailureName: function() {
					return c.fA
				},
				LoadSuccessMetricsType: function() {
					return c.hc
				},
				LoadSuccessName: function() {
					return c.W3
				},
				MaxRenderDistanceDefault: function() {
					return c.Vc
				},
				MinRenderDistanceDefault: function() {
					return c.KN
				},
				Thumbnail3d: function() {
					return b
				},
				ThumbnailStates: function() {
					return c.Ab
				},
				ThumbnailTypes: function() {
					return c.Ij
				},
				thumbnail3dService: function() {
					return u
				}
			});
			var r = n(993),
				a = n.n(r),
				o = function(e) {
					e.keys().forEach(e)
				};

			function s(e, t) {
				if (e) {
					if ("string" == typeof e) return l(e, t);
					var n = ({}).toString.call(e).slice(8, -1);
					return "Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n ? Array.from(e) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? l(e, t) : void 0
				}
			}

			function l(e, t) {
				(null == t || t > e.length) && (t = e.length);
				for (var n = 0, i = Array(t); n < t; n++) i[n] = e[n];
				return i
			}
			var u = n(738),
				c = n(582),
				h = window.ReactJSX,
				d = n(196),
				f = window.PropTypes,
				p = n.n(f),
				m = n(938);

			function v(e, t) {
				(null == t || t > e.length) && (t = e.length);
				for (var n = 0, i = Array(t); n < t; n++) i[n] = e[n];
				return i
			}

			function g(e, t, n, i, r, a, o) {
				try {
					var s = e[a](o),
						l = s.value
				} catch (e) {
					n(e);
					return
				}
				s.done ? t(l) : Promise.resolve(l).then(i, r)
			}

			function y(e, t) {
				return function(e) {
					if (Array.isArray(e)) return e
				}(e) || function(e, t) {
					var n, i, r = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
					if (null != r) {
						var a = [],
							o = !0,
							s = !1;
						try {
							for (r = r.call(e); !(o = (n = r.next()).done) && (a.push(n.value), !t || a.length !== t); o = !0);
						} catch (e) {
							s = !0, i = e
						} finally {
							try {
								o || null == r.return || r.return()
							} finally {
								if (s) throw i
							}
						}
						return a
					}
				}(e, t) || function(e, t) {
					if (e) {
						if ("string" == typeof e) return v(e, t);
						var n = Object.prototype.toString.call(e).slice(8, -1);
						if ("Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n) return Array.from(n);
						if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return v(e, t)
					}
				}(e, t) || function() {
					throw TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
				}()
			}
			var x = function(e) {
				var t = e.loadingClass;
				return (0, h.jsx)("div", {
					className: "thumbnail-loader",
					children: (0, h.jsx)("span", {
						className: t
					})
				})
			};

			function _(e) {
				var t = e.targetId,
					n = e.getThumbnailJson,
					i = e.useDynamicLighting,
					r = e.onSuccess,
					a = e.onFailure,
					o = e.loadingClass,
					s = e.type,
					l = void 0 === s ? c.Ij.Avatar : s,
					f = e.version,
					p = y((0, d.useState)(!0), 2),
					v = p[0],
					_ = p[1],
					b = y((0, d.useState)(), 2),
					w = b[0],
					M = b[1];
				return ((0, d.useEffect)(function() {
					var e;
					(e = function() {
						return function(e, t) {
							var n, i, r, a, o = {
								label: 0,
								sent: function() {
									if (1 & r[0]) throw r[1];
									return r[1]
								},
								trys: [],
								ops: []
							};
							return a = {
								next: s(0),
								throw: s(1),
								return: s(2)
							}, "function" == typeof Symbol && (a[Symbol.iterator] = function() {
								return this
							}), a;

							function s(a) {
								return function(s) {
									return function(a) {
										if (n) throw TypeError("Generator is already executing.");
										for (; o;) try {
											if (n = 1, i && (r = 2 & a[0] ? i.return : a[0] ? i.throw || ((r = i.return) && r.call(i), 0) : i.next) && !(r = r.call(i, a[1])).done) return r;
											switch (i = 0, r && (a = [2 & a[0], r.value]), a[0]) {
												case 0:
												case 1:
													r = a;
													break;
												case 4:
													return o.label++, {
														value: a[1],
														done: !1
													};
												case 5:
													o.label++, i = a[1], a = [0];
													continue;
												case 7:
													a = o.ops.pop(), o.trys.pop();
													continue;
												default:
													if (!(r = (r = o.trys).length > 0 && r[r.length - 1]) && (6 === a[0] || 2 === a[0])) {
														o = 0;
														continue
													}
													if (3 === a[0] && (!r || a[1] > r[0] && a[1] < r[3])) {
														o.label = a[1];
														break
													}
													if (6 === a[0] && o.label < r[1]) {
														o.label = r[1], r = a;
														break
													}
													if (r && o.label < r[2]) {
														o.label = r[2], o.ops.push(a);
														break
													}
													r[2] && o.ops.pop(), o.trys.pop();
													continue
											}
											a = t.call(e, o)
										} catch (e) {
											a = [6, e], i = 0
										} finally {
											n = r = 0
										}
										if (5 & a[0]) throw a[1];
										return {
											value: a[0] ? a[1] : void 0,
											done: !0
										}
									}([a, s])
								}
							}
						}(this, function(e) {
							switch (e.label) {
								case 0:
									return e.trys.push([0, 2, 3, 4]), [4, (0, u.getJsonUrl)(l, t, n)];
								case 1:
									return M(e.sent().imageUrl), [3, 4];
								case 2:
									return console.error("Error fetching image URL:", e.sent()), [3, 4];
								case 3:
									return _(!1), [7];
								case 4:
									return [2]
							}
						})
					}, function() {
						var t = this,
							n = arguments;
						return new Promise(function(i, r) {
							var a = e.apply(t, n);

							function o(e) {
								g(a, i, r, o, s, "next", e)
							}

							function s(e) {
								g(a, i, r, o, s, "throw", e)
							}
							o(void 0)
						})
					})()
				}, [l, t, f, n]), v) ? (0, h.jsx)(x, {
					loadingClass: o
				}) : (0, h.jsx)(m.w7, {
					imageUrl: w,
					useDynamicLighting: i,
					slots: {
						loading: function() {
							return (0, h.jsx)(x, {
								loadingClass: o
							})
						},
						error: function() {
							return (0, h.jsx)("div", {})
						}
					},
					onError: a,
					onSuccess: r
				})
			}
			_.defaultProps = {
				useDynamicLighting: !1,
				getThumbnailJson: null,
				onSuccess: function() {},
				onFailure: function() {},
				loadingClass: "spinner spinner-default",
				version: ""
			}, _.propTypes = {
				type: p().string.isRequired,
				targetId: p().number.isRequired,
				getThumbnailJson: p().func,
				useDynamicLighting: p().bool,
				onSuccess: p().func,
				onFailure: p().func,
				loadingClass: p().string,
				version: p().string
			};
			var b = _;

			function w(e) {
				var t = e.targetId,
					n = e.getThumbnailJson,
					i = e.onSuccess,
					r = e.onFailure,
					a = e.onAnimationLoopFinish,
					o = e.loadingClass,
					s = (0, d.useCallback)(function() {
						return (0, u.getThumbnail3dJson)(t, n, c.Ij.Animation)
					}, [t, n]);
				return (0, h.jsx)(m.O7, {
					targetId: t,
					getThumbnailJson: s,
					onSuccess: i,
					onFailure: r,
					onAnimationLoopFinish: a,
					slots: {
						loading: function() {
							return (0, h.jsx)("div", {
								className: "thumbnail-loader",
								children: (0, h.jsx)("span", {
									className: o
								})
							})
						}
					}
				})
			}
			w.defaultProps = {
				getThumbnailJson: null,
				onSuccess: function() {},
				onFailure: function() {},
				onAnimationLoopFinish: function() {},
				loadingClass: "spinner spinner-default"
			}, w.propTypes = {
				targetId: p().number.isRequired,
				getThumbnailJson: p().func,
				onSuccess: p().func,
				onFailure: p().func,
				onAnimationLoopFinish: p().bool,
				loadingClass: p().string
			};
			var M = w;
			n(685),
				function(e, t) {
					var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : window;
					if ("string" == typeof e) n[e] = t;
					else {
						var i, r = function(e) {
								if (Array.isArray(e)) return l(e)
							}(e) || function(e) {
								if ("undefined" != typeof Symbol && null != e[Symbol.iterator] || null != e["@@iterator"]) return Array.from(e)
							}(e) || s(e) || function() {
								throw TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
							}(),
							a = r.pop(),
							o = n,
							u = function(e, t) {
								var n = "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
								if (!n) {
									if (Array.isArray(e) || (n = s(e))) {
										n && (e = n);
										var i = 0,
											r = function() {};
										return {
											s: r,
											n: function() {
												return i >= e.length ? {
													done: !0
												} : {
													done: !1,
													value: e[i++]
												}
											},
											e: function(e) {
												throw e
											},
											f: r
										}
									}
									throw TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
								}
								var a, o = !0,
									l = !1;
								return {
									s: function() {
										n = n.call(e)
									},
									n: function() {
										var e = n.next();
										return o = e.done, e
									},
									e: function(e) {
										l = !0, a = e
									},
									f: function() {
										try {
											o || null == n.return || n.return()
										} finally {
											if (l) throw a
										}
									}
								}
							}(r);
						try {
							for (u.s(); !(i = u.n()).done;) {
								var c, h, d = i.value;
								null !== (h = (c = o)[d]) && void 0 !== h || (c[d] = {}), o = o[d]
							}
						} catch (e) {
							u.e(e)
						} finally {
							u.f()
						}
						o[a] = t
					}
				}("RobloxThumbnail3d", i), o(n(683)), o(n(497)), o(n(737)), o(n(910));
			var S = n(972);
			e = a(), t = "thumbnails3dTemplates", e.module(t, []).run(["$templateCache", function(e) {
				S && S.keys().forEach(function(t) {
					var n = t.split("/").pop().replace(".html", "").replace(/([a-z])([A-Z])/g, "$1-$2").toLowerCase();
					e.put(n, S(t))
				})
			}])
		}()
}(), window.Roblox && window.Roblox.BundleDetector && window.Roblox.BundleDetector.bundleDetected("Thumbnails3d");
//# debugId=f14d0265-0ca0-432c-b606-ec4f1f06064d
//# sourceMappingURL=https://sourcemaps.rbxcdn.com/thumbnails3d-d735654eb43b42ec.js.map