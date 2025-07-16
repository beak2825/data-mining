(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
	["44947"], {
		521548: function(e, t, n) {
			"use strict";

			function r(e, t, n, r) {
				var i = n ? n.call(r, e, t) : void 0;
				if (void 0 !== i) return !!i;
				if (e === t) return !0;
				if ("object" != typeof e || !e || "object" != typeof t || !t) return !1;
				var o = Object.keys(e),
					a = Object.keys(t);
				if (o.length !== a.length) return !1;
				for (var u = Object.prototype.hasOwnProperty.bind(t), c = 0; c < o.length; c++) {
					var s = o[c];
					if (!u(s)) return !1;
					var l = e[s],
						f = t[s];
					if (!1 === (i = n ? n.call(r, l, f, s) : void 0) || void 0 === i && l !== f) return !1
				}
				return !0
			}
			n.d(t, {
				w: () => r
			})
		},
		801282: function(e) {
			e.exports = function(e, t, n) {
				var r = -1,
					i = e.length;
				t < 0 && (t = -t > i ? 0 : i + t), (n = n > i ? i : n) < 0 && (n += i), i = t > n ? 0 : n - t >>> 0, t >>>= 0;
				for (var o = Array(i); ++r < i;) o[r] = e[r + t];
				return o
			}
		},
		583236: function(e, t, n) {
			"use strict";
			n.d(t, {
				J: () => i
			});
			var r = n(292759);

			function i(e, t, n) {
				return (0, r.U)(t, e || function() {
					return {}
				}, function() {
					return n.reconnect()
				})
			}
		},
		557702: function(e, t, n) {
			"use strict";

			function r(e) {
				return (r = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
					return typeof e
				} : function(e) {
					return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
				})(e)
			}
			n.d(t, {
				O: () => o
			});

			function i(e, t, n) {
				return t in e ? Object.defineProperty(e, t, {
					value: n,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : e[t] = n, e
			}
			var o = function() {
				var e;

				function t(e, n, r) {
					if (!(this instanceof t)) throw TypeError("Cannot call a class as a function");
					i(this, "spec", void 0), i(this, "monitor", void 0), i(this, "connector", void 0), this.spec = e, this.monitor = n, this.connector = r
				}
				return e = [{
						key: "beginDrag",
						value: function() {
							var e, t = this.spec,
								n = this.monitor,
								i = null;
							return null != (e = "object" === r(t.item) ? t.item : "function" == typeof t.item ? t.item(n) : {}) ? e : null
						}
					}, {
						key: "canDrag",
						value: function() {
							var e = this.spec,
								t = this.monitor;
							return "boolean" == typeof e.canDrag ? e.canDrag : "function" != typeof e.canDrag || e.canDrag(t)
						}
					}, {
						key: "isDragging",
						value: function(e, t) {
							var n = this.spec,
								r = this.monitor,
								i = n.isDragging;
							return i ? i(r) : t === e.getSourceId()
						}
					}, {
						key: "endDrag",
						value: function() {
							var e = this.spec,
								t = this.monitor,
								n = this.connector,
								r = e.end;
							r && r(t.getItem(), t), n.reconnect()
						}
					}],
					function(e, t) {
						for (var n = 0; n < t.length; n++) {
							var r = t[n];
							r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
						}
					}(t.prototype, e), t
			}()
		},
		438044: function(e, t, n) {
			"use strict";
			n.d(t, {
				u: () => i,
				y: () => o
			});
			var r = n(73800);

			function i(e) {
				return (0, r.useMemo)(function() {
					return e.hooks.dragSource()
				}, [e])
			}

			function o(e) {
				return (0, r.useMemo)(function() {
					return e.hooks.dragPreview()
				}, [e])
			}
		},
		562075: function(e, t, n) {
			"use strict";
			n.d(t, {
				c: () => l
			});
			var r = n(541558),
				i = n(892164),
				o = n(188867),
				a = n(967727),
				u = n(583236),
				c = n(438044),
				s = n(573654);

			function l(e, t) {
				var n = (0, i.w)(e, t);
				(0, s.k)(!n.begin, "useDrag::spec.begin was deprecated in v14. Replace spec.begin() with spec.item(). (see more here - https://react-dnd.github.io/react-dnd/docs/api/use-drag)");
				var l = (0, o._)(),
					f = (0, a.Y)(n.options, n.previewOptions);
				return (0, r.q)(n, l, f), [(0, u.J)(n.collect, l, f), (0, c.u)(f), (0, c.y)(f)]
			}
		},
		161837: function(e, t, n) {
			"use strict";
			n.d(t, {
				s: () => o
			});
			var r = n(73800),
				i = n(557702);

			function o(e, t, n) {
				var o = (0, r.useMemo)(function() {
					return new i.O(e, t, n)
				}, [t, n]);
				return (0, r.useEffect)(function() {
					o.spec = e
				}, [e]), o
			}
		},
		967727: function(e, t, n) {
			"use strict";
			n.d(t, {
				Y: () => u
			});
			var r = n(73800),
				i = n(63222),
				o = n(74463),
				a = n(541568);

			function u(e, t) {
				var n = (0, o.N)(),
					u = (0, r.useMemo)(function() {
						return new i.x(n.getBackend())
					}, [n]);
				return (0, a.L)(function() {
					return u.dragSourceOptions = e || null, u.reconnect(),
						function() {
							return u.disconnectDragSource()
						}
				}, [u, e]), (0, a.L)(function() {
					return u.dragPreviewOptions = t || null, u.reconnect(),
						function() {
							return u.disconnectDragPreview()
						}
				}, [u, t]), u
			}
		},
		188867: function(e, t, n) {
			"use strict";
			n.d(t, {
				_: () => a
			});
			var r = n(73800),
				i = n(969357),
				o = n(74463);

			function a() {
				var e = (0, o.N)();
				return (0, r.useMemo)(function() {
					return new i.p(e)
				}, [e])
			}
		},
		235922: function(e, t, n) {
			"use strict";
			n.d(t, {
				E: () => o
			});
			var r = n(573654),
				i = n(73800);

			function o(e) {
				return (0, i.useMemo)(function() {
					var t = e.type;
					return (0, r.k)(null != t, "spec.type must be defined"), t
				}, [e])
			}
		},
		541558: function(e, t, n) {
			"use strict";
			n.d(t, {
				q: () => s
			});
			var r = n(178163),
				i = n(541568),
				o = n(161837),
				a = n(74463),
				u = n(235922);

			function c(e, t) {
				(null == t || t > e.length) && (t = e.length);
				for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
				return r
			}

			function s(e, t, n) {
				var s = (0, a.N)(),
					l = (0, o.s)(e, t, n),
					f = (0, u.E)(e);
				(0, i.L)(function() {
					if (null != f) {
						var e, i = function(e) {
								if (Array.isArray(e)) return e
							}(e = (0, r.w)(f, l, s)) || function(e, t) {
								var n, r, i = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
								if (null != i) {
									var o = [],
										a = !0,
										u = !1;
									try {
										for (i = i.call(e); !(a = (n = i.next()).done) && (o.push(n.value), o.length !== t); a = !0);
									} catch (e) {
										u = !0, r = e
									} finally {
										try {
											a || null == i.return || i.return()
										} finally {
											if (u) throw r
										}
									}
									return o
								}
							}(e, 2) || function(e, t) {
								if (e) {
									if ("string" == typeof e) return c(e, 2);
									var n = Object.prototype.toString.call(e).slice(8, -1);
									if ("Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n) return Array.from(e);
									if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return c(e, t)
								}
							}(e, 2) || function() {
								throw TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
							}(),
							o = i[0],
							a = i[1];
						return t.receiveHandlerId(o), n.receiveHandlerId(o), a
					}
				}, [s, t, n, l, f])
			}
		},
		153002: function(e, t, n) {
			"use strict";
			n.d(t, {
				e: () => i
			});

			function r(e, t, n) {
				return t in e ? Object.defineProperty(e, t, {
					value: n,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : e[t] = n, e
			}
			var i = function() {
				var e;

				function t(e, n) {
					if (!(this instanceof t)) throw TypeError("Cannot call a class as a function");
					r(this, "spec", void 0), r(this, "monitor", void 0), this.spec = e, this.monitor = n
				}
				return e = [{
						key: "canDrop",
						value: function() {
							var e = this.spec,
								t = this.monitor;
							return !e.canDrop || e.canDrop(t.getItem(), t)
						}
					}, {
						key: "hover",
						value: function() {
							var e = this.spec,
								t = this.monitor;
							e.hover && e.hover(t.getItem(), t)
						}
					}, {
						key: "drop",
						value: function() {
							var e = this.spec,
								t = this.monitor;
							if (e.drop) return e.drop(t.getItem(), t)
						}
					}],
					function(e, t) {
						for (var n = 0; n < t.length; n++) {
							var r = t[n];
							r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
						}
					}(t.prototype, e), t
			}()
		},
		43625: function(e, t, n) {
			"use strict";
			n.d(t, {
				s: () => i
			});
			var r = n(73800);

			function i(e) {
				return (0, r.useMemo)(function() {
					return e.hooks.dropTarget()
				}, [e])
			}
		},
		537703: function(e, t, n) {
			"use strict";
			n.d(t, {
				b: () => o
			});
			var r = n(573654),
				i = n(73800);

			function o(e) {
				var t = e.accept;
				return (0, i.useMemo)(function() {
					return (0, r.k)(null != e.accept, "accept must be defined"), Array.isArray(t) ? t : [t]
				}, [t])
			}
		},
		539202: function(e, t, n) {
			"use strict";
			n.d(t, {
				L: () => s
			});
			var r = n(868610),
				i = n(892164),
				o = n(330693),
				a = n(221918),
				u = n(583236),
				c = n(43625);

			function s(e, t) {
				var n = (0, i.w)(e, t),
					s = (0, o.V)(),
					l = (0, a.H)(n.options);
				return (0, r.E)(n, s, l), [(0, u.J)(n.collect, s, l), (0, c.s)(l)]
			}
		},
		375154: function(e, t, n) {
			"use strict";
			n.d(t, {
				W: () => o
			});
			var r = n(73800),
				i = n(153002);

			function o(e, t) {
				var n = (0, r.useMemo)(function() {
					return new i.e(e, t)
				}, [t]);
				return (0, r.useEffect)(function() {
					n.spec = e
				}, [e]), n
			}
		},
		221918: function(e, t, n) {
			"use strict";
			n.d(t, {
				H: () => u
			});
			var r = n(73800),
				i = n(373425),
				o = n(74463),
				a = n(541568);

			function u(e) {
				var t = (0, o.N)(),
					n = (0, r.useMemo)(function() {
						return new i.Y(t.getBackend())
					}, [t]);
				return (0, a.L)(function() {
					return n.dropTargetOptions = e || null, n.reconnect(),
						function() {
							return n.disconnectDropTarget()
						}
				}, [e]), n
			}
		},
		330693: function(e, t, n) {
			"use strict";
			n.d(t, {
				V: () => a
			});
			var r = n(73800),
				i = n(524962),
				o = n(74463);

			function a() {
				var e = (0, o.N)();
				return (0, r.useMemo)(function() {
					return new i.H(e)
				}, [e])
			}
		},
		868610: function(e, t, n) {
			"use strict";
			n.d(t, {
				E: () => s
			});
			var r = n(178163),
				i = n(74463),
				o = n(541568),
				a = n(537703),
				u = n(375154);

			function c(e, t) {
				(null == t || t > e.length) && (t = e.length);
				for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
				return r
			}

			function s(e, t, n) {
				var s = (0, i.N)(),
					l = (0, u.W)(e, t),
					f = (0, a.b)(e);
				(0, o.L)(function() {
					var e, i = function(e) {
							if (Array.isArray(e)) return e
						}(e = (0, r.n)(f, l, s)) || function(e, t) {
							var n, r, i = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
							if (null != i) {
								var o = [],
									a = !0,
									u = !1;
								try {
									for (i = i.call(e); !(a = (n = i.next()).done) && (o.push(n.value), o.length !== t); a = !0);
								} catch (e) {
									u = !0, r = e
								} finally {
									try {
										a || null == i.return || i.return()
									} finally {
										if (u) throw r
									}
								}
								return o
							}
						}(e, 2) || function(e, t) {
							if (e) {
								if ("string" == typeof e) return c(e, 2);
								var n = Object.prototype.toString.call(e).slice(8, -1);
								if ("Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n) return Array.from(e);
								if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return c(e, t)
							}
						}(e, 2) || function() {
							throw TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
						}(),
						o = i[0],
						a = i[1];
					return t.receiveHandlerId(o), n.receiveHandlerId(o), a
				}, [s, t, l, n, f.map(function(e) {
					return e.toString()
				}).join("|")])
			}
		},
		292759: function(e, t, n) {
			"use strict";
			n.d(t, {
				U: () => a
			});
			var r = n(541568),
				i = n(9455);

			function o(e, t) {
				(null == t || t > e.length) && (t = e.length);
				for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
				return r
			}

			function a(e, t, n) {
				var a, u = function(e) {
						if (Array.isArray(e)) return e
					}(a = (0, i.r)(e, t, n)) || function(e, t) {
						var n, r, i = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
						if (null != i) {
							var o = [],
								a = !0,
								u = !1;
							try {
								for (i = i.call(e); !(a = (n = i.next()).done) && (o.push(n.value), o.length !== t); a = !0);
							} catch (e) {
								u = !0, r = e
							} finally {
								try {
									a || null == i.return || i.return()
								} finally {
									if (u) throw r
								}
							}
							return o
						}
					}(a, 2) || function(e, t) {
						if (e) {
							if ("string" == typeof e) return o(e, 2);
							var n = Object.prototype.toString.call(e).slice(8, -1);
							if ("Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n) return Array.from(e);
							if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return o(e, t)
						}
					}(a, 2) || function() {
						throw TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
					}(),
					c = u[0],
					s = u[1];
				return (0, r.L)(function() {
					var t = e.getHandlerId();
					if (null != t) return e.subscribeToStateChange(s, {
						handlerIds: [t]
					})
				}, [e, s]), c
			}
		},
		892164: function(e, t, n) {
			"use strict";
			n.d(t, {
				w: () => o
			});
			var r = n(73800);

			function i(e, t) {
				(null == t || t > e.length) && (t = e.length);
				for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
				return r
			}

			function o(e, t) {
				var n, o = function(e) {
					if (Array.isArray(e)) return i(e)
				}(n = t || []) || function(e) {
					if ("undefined" != typeof Symbol && null != e[Symbol.iterator] || null != e["@@iterator"]) return Array.from(e)
				}(n) || function(e, t) {
					if (e) {
						if ("string" == typeof e) return i(e, void 0);
						var n = Object.prototype.toString.call(e).slice(8, -1);
						if ("Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n) return Array.from(e);
						if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return i(e, t)
					}
				}(n) || function() {
					throw TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
				}();
				return null == t && "function" != typeof e && o.push(e), (0, r.useMemo)(function() {
					return "function" == typeof e ? e() : e
				}, o)
			}
		},
		969357: function(e, t, n) {
			"use strict";
			n.d(t, {
				p: () => u
			});
			var r = n(573654);

			function i(e, t, n) {
				return t in e ? Object.defineProperty(e, t, {
					value: n,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : e[t] = n, e
			}
			var o = !1,
				a = !1,
				u = function() {
					var e;

					function t(e) {
						if (!(this instanceof t)) throw TypeError("Cannot call a class as a function");
						i(this, "internalMonitor", void 0), i(this, "sourceId", null), this.internalMonitor = e.getMonitor()
					}
					return e = [{
							key: "receiveHandlerId",
							value: function(e) {
								this.sourceId = e
							}
						}, {
							key: "getHandlerId",
							value: function() {
								return this.sourceId
							}
						}, {
							key: "canDrag",
							value: function() {
								(0, r.k)(!o, "You may not call monitor.canDrag() inside your canDrag() implementation. Read more: http://react-dnd.github.io/react-dnd/docs/api/drag-source-monitor");
								try {
									return o = !0, this.internalMonitor.canDragSource(this.sourceId)
								} finally {
									o = !1
								}
							}
						}, {
							key: "isDragging",
							value: function() {
								if (!this.sourceId) return !1;
								(0, r.k)(!a, "You may not call monitor.isDragging() inside your isDragging() implementation. Read more: http://react-dnd.github.io/react-dnd/docs/api/drag-source-monitor");
								try {
									return a = !0, this.internalMonitor.isDraggingSource(this.sourceId)
								} finally {
									a = !1
								}
							}
						}, {
							key: "subscribeToStateChange",
							value: function(e, t) {
								return this.internalMonitor.subscribeToStateChange(e, t)
							}
						}, {
							key: "isDraggingSource",
							value: function(e) {
								return this.internalMonitor.isDraggingSource(e)
							}
						}, {
							key: "isOverTarget",
							value: function(e, t) {
								return this.internalMonitor.isOverTarget(e, t)
							}
						}, {
							key: "getTargetIds",
							value: function() {
								return this.internalMonitor.getTargetIds()
							}
						}, {
							key: "isSourcePublic",
							value: function() {
								return this.internalMonitor.isSourcePublic()
							}
						}, {
							key: "getSourceId",
							value: function() {
								return this.internalMonitor.getSourceId()
							}
						}, {
							key: "subscribeToOffsetChange",
							value: function(e) {
								return this.internalMonitor.subscribeToOffsetChange(e)
							}
						}, {
							key: "canDragSource",
							value: function(e) {
								return this.internalMonitor.canDragSource(e)
							}
						}, {
							key: "canDropOnTarget",
							value: function(e) {
								return this.internalMonitor.canDropOnTarget(e)
							}
						}, {
							key: "getItemType",
							value: function() {
								return this.internalMonitor.getItemType()
							}
						}, {
							key: "getItem",
							value: function() {
								return this.internalMonitor.getItem()
							}
						}, {
							key: "getDropResult",
							value: function() {
								return this.internalMonitor.getDropResult()
							}
						}, {
							key: "didDrop",
							value: function() {
								return this.internalMonitor.didDrop()
							}
						}, {
							key: "getInitialClientOffset",
							value: function() {
								return this.internalMonitor.getInitialClientOffset()
							}
						}, {
							key: "getInitialSourceClientOffset",
							value: function() {
								return this.internalMonitor.getInitialSourceClientOffset()
							}
						}, {
							key: "getSourceClientOffset",
							value: function() {
								return this.internalMonitor.getSourceClientOffset()
							}
						}, {
							key: "getClientOffset",
							value: function() {
								return this.internalMonitor.getClientOffset()
							}
						}, {
							key: "getDifferenceFromInitialOffset",
							value: function() {
								return this.internalMonitor.getDifferenceFromInitialOffset()
							}
						}],
						function(e, t) {
							for (var n = 0; n < t.length; n++) {
								var r = t[n];
								r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
							}
						}(t.prototype, e), t
				}()
		},
		524962: function(e, t, n) {
			"use strict";
			n.d(t, {
				H: () => a
			});
			var r = n(573654);

			function i(e, t, n) {
				return t in e ? Object.defineProperty(e, t, {
					value: n,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : e[t] = n, e
			}
			var o = !1,
				a = function() {
					var e;

					function t(e) {
						if (!(this instanceof t)) throw TypeError("Cannot call a class as a function");
						i(this, "internalMonitor", void 0), i(this, "targetId", null), this.internalMonitor = e.getMonitor()
					}
					return e = [{
							key: "receiveHandlerId",
							value: function(e) {
								this.targetId = e
							}
						}, {
							key: "getHandlerId",
							value: function() {
								return this.targetId
							}
						}, {
							key: "subscribeToStateChange",
							value: function(e, t) {
								return this.internalMonitor.subscribeToStateChange(e, t)
							}
						}, {
							key: "canDrop",
							value: function() {
								if (!this.targetId) return !1;
								(0, r.k)(!o, "You may not call monitor.canDrop() inside your canDrop() implementation. Read more: http://react-dnd.github.io/react-dnd/docs/api/drop-target-monitor");
								try {
									return o = !0, this.internalMonitor.canDropOnTarget(this.targetId)
								} finally {
									o = !1
								}
							}
						}, {
							key: "isOver",
							value: function(e) {
								return !!this.targetId && this.internalMonitor.isOverTarget(this.targetId, e)
							}
						}, {
							key: "getItemType",
							value: function() {
								return this.internalMonitor.getItemType()
							}
						}, {
							key: "getItem",
							value: function() {
								return this.internalMonitor.getItem()
							}
						}, {
							key: "getDropResult",
							value: function() {
								return this.internalMonitor.getDropResult()
							}
						}, {
							key: "didDrop",
							value: function() {
								return this.internalMonitor.didDrop()
							}
						}, {
							key: "getInitialClientOffset",
							value: function() {
								return this.internalMonitor.getInitialClientOffset()
							}
						}, {
							key: "getInitialSourceClientOffset",
							value: function() {
								return this.internalMonitor.getInitialSourceClientOffset()
							}
						}, {
							key: "getSourceClientOffset",
							value: function() {
								return this.internalMonitor.getSourceClientOffset()
							}
						}, {
							key: "getClientOffset",
							value: function() {
								return this.internalMonitor.getClientOffset()
							}
						}, {
							key: "getDifferenceFromInitialOffset",
							value: function() {
								return this.internalMonitor.getDifferenceFromInitialOffset()
							}
						}],
						function(e, t) {
							for (var n = 0; n < t.length; n++) {
								var r = t[n];
								r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
							}
						}(t.prototype, e), t
				}()
		},
		63222: function(e, t, n) {
			"use strict";
			n.d(t, {
				x: () => u
			});
			var r = n(793981),
				i = n(413815),
				o = n(521548);

			function a(e, t, n) {
				return t in e ? Object.defineProperty(e, t, {
					value: n,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : e[t] = n, e
			}
			var u = function() {
				var e;

				function t(e) {
					var n = this;
					if (!(this instanceof t)) throw TypeError("Cannot call a class as a function");
					a(this, "hooks", (0, r.p)({
						dragSource: function(e, t) {
							n.clearDragSource(), n.dragSourceOptions = t || null, (0, i.d)(e) ? n.dragSourceRef = e : n.dragSourceNode = e, n.reconnectDragSource()
						},
						dragPreview: function(e, t) {
							n.clearDragPreview(), n.dragPreviewOptions = t || null, (0, i.d)(e) ? n.dragPreviewRef = e : n.dragPreviewNode = e, n.reconnectDragPreview()
						}
					})), a(this, "handlerId", null), a(this, "dragSourceRef", null), a(this, "dragSourceNode", void 0), a(this, "dragSourceOptionsInternal", null), a(this, "dragSourceUnsubscribe", void 0), a(this, "dragPreviewRef", null), a(this, "dragPreviewNode", void 0), a(this, "dragPreviewOptionsInternal", null), a(this, "dragPreviewUnsubscribe", void 0), a(this, "lastConnectedHandlerId", null), a(this, "lastConnectedDragSource", null), a(this, "lastConnectedDragSourceOptions", null), a(this, "lastConnectedDragPreview", null), a(this, "lastConnectedDragPreviewOptions", null), a(this, "backend", void 0), this.backend = e
				}
				return e = [{
						key: "receiveHandlerId",
						value: function(e) {
							this.handlerId !== e && (this.handlerId = e, this.reconnect())
						}
					}, {
						key: "connectTarget",
						get: function() {
							return this.dragSource
						}
					}, {
						key: "dragSourceOptions",
						get: function() {
							return this.dragSourceOptionsInternal
						},
						set: function(e) {
							this.dragSourceOptionsInternal = e
						}
					}, {
						key: "dragPreviewOptions",
						get: function() {
							return this.dragPreviewOptionsInternal
						},
						set: function(e) {
							this.dragPreviewOptionsInternal = e
						}
					}, {
						key: "reconnect",
						value: function() {
							this.reconnectDragSource(), this.reconnectDragPreview()
						}
					}, {
						key: "reconnectDragSource",
						value: function() {
							var e = this.dragSource,
								t = this.didHandlerIdChange() || this.didConnectedDragSourceChange() || this.didDragSourceOptionsChange();
							if (t && this.disconnectDragSource(), this.handlerId) {
								if (!e) {
									this.lastConnectedDragSource = e;
									return
								}
								t && (this.lastConnectedHandlerId = this.handlerId, this.lastConnectedDragSource = e, this.lastConnectedDragSourceOptions = this.dragSourceOptions, this.dragSourceUnsubscribe = this.backend.connectDragSource(this.handlerId, e, this.dragSourceOptions))
							}
						}
					}, {
						key: "reconnectDragPreview",
						value: function() {
							var e = this.dragPreview,
								t = this.didHandlerIdChange() || this.didConnectedDragPreviewChange() || this.didDragPreviewOptionsChange();
							if (t && this.disconnectDragPreview(), this.handlerId) {
								if (!e) {
									this.lastConnectedDragPreview = e;
									return
								}
								t && (this.lastConnectedHandlerId = this.handlerId, this.lastConnectedDragPreview = e, this.lastConnectedDragPreviewOptions = this.dragPreviewOptions, this.dragPreviewUnsubscribe = this.backend.connectDragPreview(this.handlerId, e, this.dragPreviewOptions))
							}
						}
					}, {
						key: "didHandlerIdChange",
						value: function() {
							return this.lastConnectedHandlerId !== this.handlerId
						}
					}, {
						key: "didConnectedDragSourceChange",
						value: function() {
							return this.lastConnectedDragSource !== this.dragSource
						}
					}, {
						key: "didConnectedDragPreviewChange",
						value: function() {
							return this.lastConnectedDragPreview !== this.dragPreview
						}
					}, {
						key: "didDragSourceOptionsChange",
						value: function() {
							return !(0, o.w)(this.lastConnectedDragSourceOptions, this.dragSourceOptions)
						}
					}, {
						key: "didDragPreviewOptionsChange",
						value: function() {
							return !(0, o.w)(this.lastConnectedDragPreviewOptions, this.dragPreviewOptions)
						}
					}, {
						key: "disconnectDragSource",
						value: function() {
							this.dragSourceUnsubscribe && (this.dragSourceUnsubscribe(), this.dragSourceUnsubscribe = void 0)
						}
					}, {
						key: "disconnectDragPreview",
						value: function() {
							this.dragPreviewUnsubscribe && (this.dragPreviewUnsubscribe(), this.dragPreviewUnsubscribe = void 0, this.dragPreviewNode = null, this.dragPreviewRef = null)
						}
					}, {
						key: "dragSource",
						get: function() {
							return this.dragSourceNode || this.dragSourceRef && this.dragSourceRef.current
						}
					}, {
						key: "dragPreview",
						get: function() {
							return this.dragPreviewNode || this.dragPreviewRef && this.dragPreviewRef.current
						}
					}, {
						key: "clearDragSource",
						value: function() {
							this.dragSourceNode = null, this.dragSourceRef = null
						}
					}, {
						key: "clearDragPreview",
						value: function() {
							this.dragPreviewNode = null, this.dragPreviewRef = null
						}
					}],
					function(e, t) {
						for (var n = 0; n < t.length; n++) {
							var r = t[n];
							r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
						}
					}(t.prototype, e), t
			}()
		},
		373425: function(e, t, n) {
			"use strict";
			n.d(t, {
				Y: () => u
			});
			var r = n(521548),
				i = n(793981),
				o = n(413815);

			function a(e, t, n) {
				return t in e ? Object.defineProperty(e, t, {
					value: n,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : e[t] = n, e
			}
			var u = function() {
				var e;

				function t(e) {
					var n = this;
					if (!(this instanceof t)) throw TypeError("Cannot call a class as a function");
					a(this, "hooks", (0, i.p)({
						dropTarget: function(e, t) {
							n.clearDropTarget(), n.dropTargetOptions = t, (0, o.d)(e) ? n.dropTargetRef = e : n.dropTargetNode = e, n.reconnect()
						}
					})), a(this, "handlerId", null), a(this, "dropTargetRef", null), a(this, "dropTargetNode", void 0), a(this, "dropTargetOptionsInternal", null), a(this, "unsubscribeDropTarget", void 0), a(this, "lastConnectedHandlerId", null), a(this, "lastConnectedDropTarget", null), a(this, "lastConnectedDropTargetOptions", null), a(this, "backend", void 0), this.backend = e
				}
				return e = [{
						key: "connectTarget",
						get: function() {
							return this.dropTarget
						}
					}, {
						key: "reconnect",
						value: function() {
							var e = this.didHandlerIdChange() || this.didDropTargetChange() || this.didOptionsChange();
							e && this.disconnectDropTarget();
							var t = this.dropTarget;
							if (this.handlerId) {
								if (!t) {
									this.lastConnectedDropTarget = t;
									return
								}
								e && (this.lastConnectedHandlerId = this.handlerId, this.lastConnectedDropTarget = t, this.lastConnectedDropTargetOptions = this.dropTargetOptions, this.unsubscribeDropTarget = this.backend.connectDropTarget(this.handlerId, t, this.dropTargetOptions))
							}
						}
					}, {
						key: "receiveHandlerId",
						value: function(e) {
							e !== this.handlerId && (this.handlerId = e, this.reconnect())
						}
					}, {
						key: "dropTargetOptions",
						get: function() {
							return this.dropTargetOptionsInternal
						},
						set: function(e) {
							this.dropTargetOptionsInternal = e
						}
					}, {
						key: "didHandlerIdChange",
						value: function() {
							return this.lastConnectedHandlerId !== this.handlerId
						}
					}, {
						key: "didDropTargetChange",
						value: function() {
							return this.lastConnectedDropTarget !== this.dropTarget
						}
					}, {
						key: "didOptionsChange",
						value: function() {
							return !(0, r.w)(this.lastConnectedDropTargetOptions, this.dropTargetOptions)
						}
					}, {
						key: "disconnectDropTarget",
						value: function() {
							this.unsubscribeDropTarget && (this.unsubscribeDropTarget(), this.unsubscribeDropTarget = void 0)
						}
					}, {
						key: "dropTarget",
						get: function() {
							return this.dropTargetNode || this.dropTargetRef && this.dropTargetRef.current
						}
					}, {
						key: "clearDropTarget",
						value: function() {
							this.dropTargetRef = null, this.dropTargetNode = null
						}
					}],
					function(e, t) {
						for (var n = 0; n < t.length; n++) {
							var r = t[n];
							r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
						}
					}(t.prototype, e), t
			}()
		},
		413815: function(e, t, n) {
			"use strict";

			function r(e) {
				return (r = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
					return typeof e
				} : function(e) {
					return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
				})(e)
			}

			function i(e) {
				return null !== e && "object" === r(e) && Object.prototype.hasOwnProperty.call(e, "current")
			}
			n.d(t, {
				d: () => i
			})
		},
		178163: function(e, t, n) {
			"use strict";

			function r(e, t, n) {
				var r = n.getRegistry(),
					i = r.addTarget(e, t);
				return [i, function() {
					return r.removeTarget(i)
				}]
			}

			function i(e, t, n) {
				var r = n.getRegistry(),
					i = r.addSource(e, t);
				return [i, function() {
					return r.removeSource(i)
				}]
			}
			n.d(t, {
				n: () => r,
				w: () => i
			})
		},
		793981: function(e, t, n) {
			"use strict";
			n.d(t, {
				p: () => o
			});
			var r = n(573654),
				i = n(73800);

			function o(e) {
				var t = {};
				return Object.keys(e).forEach(function(n) {
					var o = e[n];
					if (n.endsWith("Ref")) t[n] = e[n];
					else {
						var u = function() {
							var e, t, n, u = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
								c = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
							if (!(0, i.isValidElement)(u)) return o(u, c), u;
							if ("string" != typeof u.type) {
								var s = u.type.displayName || u.type.name || "the component";
								throw Error("Only native element nodes can now be passed to React DnD connectors." + "You can either wrap ".concat(s, " into a <div>, or turn it into a ") + "drag source or a drop target itself.")
							}
							return e = u, t = c ? function(e) {
								return o(e, c)
							} : o, n = e.ref, ((0, r.k)("string" != typeof n, "Cannot connect React DnD to an element with an existing string ref. Please convert it to use a callback ref instead, or wrap it into a <span> or <div>. Read more: https://reactjs.org/docs/refs-and-the-dom.html#callback-refs"), n) ? (0, i.cloneElement)(e, {
								ref: function(e) {
									a(n, e), a(t, e)
								}
							}) : (0, i.cloneElement)(e, {
								ref: t
							})
						};
						t[n] = function() {
							return u
						}
					}
				}), t
			}

			function a(e, t) {
				"function" == typeof e ? e(t) : e.current = t
			}
		}
	}
]);
//# sourceMappingURL=49e0cdb559850c29.js.map