! function() {
	var t = {
			311: function(t, e, r) {
				t.exports = r(507)
			},
			507: function(t, e, r) {
				var n, o;

				function i(t) {
					return t && "undefined" != typeof Symbol && t.constructor === Symbol ? "symbol" : typeof t
				}
				t = r.nmd(t), n = window, o = function() {
					return function(t) {
						var e = {};

						function r(n) {
							if (e[n]) return e[n].exports;
							var o = e[n] = {
								i: n,
								l: !1,
								exports: {}
							};
							return t[n].call(o.exports, o, o.exports, r), o.l = !0, o.exports
						}
						return r.m = t, r.c = e, r.d = function(t, e, n) {
							r.o(t, e) || Object.defineProperty(t, e, {
								enumerable: !0,
								get: n
							})
						}, r.r = function(t) {
							"undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, {
								value: "Module"
							}), Object.defineProperty(t, "__esModule", {
								value: !0
							})
						}, r.t = function(t, e) {
							if (1 & e && (t = r(t)), 8 & e || 4 & e && "object" == (void 0 === t ? "undefined" : i(t)) && t && t.__esModule) return t;
							var n = Object.create(null);
							if (r.r(n), Object.defineProperty(n, "default", {
									enumerable: !0,
									value: t
								}), 2 & e && "string" != typeof t)
								for (var o in t) r.d(n, o, (function(e) {
									return t[e]
								}).bind(null, o));
							return n
						}, r.n = function(t) {
							var e = t && t.__esModule ? function() {
								return t.default
							} : function() {
								return t
							};
							return r.d(e, "a", e), e
						}, r.o = function(t, e) {
							return Object.prototype.hasOwnProperty.call(t, e)
						}, r.p = "", r(r.s = 19)
					}([function(t, e, r) {
						"use strict";
						Object.defineProperty(e, "__esModule", {
							value: !0
						}), e.default = function(t, e) {
							if (t)
								for (var r in t) hasOwnProperty.call(t, r) && e(t[r], r)
						}, t.exports = e.default
					}, function(t, e, r) {
						"use strict";
						t.exports = {
							Platform: r(29),
							ThriftTransport: r(34),
							thrift: r(35),
							crouton_thrift: r(36)
						}
					}, function(t, e, r) {
						"use strict";

						function n(t) {
							for (var r in t) e.hasOwnProperty(r) || (e[r] = t[r])
						}
						Object.defineProperty(e, "__esModule", {
							value: !0
						});
						var o = r(22);
						e.BinaryCarrier = o.default;
						var i = r(23);
						e.Tags = i;
						var a = r(8),
							s = r(13);
						e.Reference = s.default;
						var u = r(4);
						e.Span = u.default;
						var c = r(10);
						e.SpanContext = c.default;
						var l = r(9);
						e.Tracer = l.Tracer;
						var p = r(24);
						e.MockTracer = p.MockTracer, n(r(27)), n(r(12)), n(r(11)), a.initialize()
					}, function(t, e, r) {
						"use strict";
						Object.defineProperty(e, "__esModule", {
							value: !0
						}), e.toString = function(t) {
							return "" + t
						}, e.toNumber = function(t) {
							return Number(t)
						}, e.toBoolean = function(t) {
							return !!t
						}
					}, function(t, e, r) {
						"use strict";
						Object.defineProperty(e, "__esModule", {
							value: !0
						});
						var n = r(8),
							o = function() {
								function t() {}
								return t.prototype.context = function() {
									return this._context()
								}, t.prototype.tracer = function() {
									return this._tracer()
								}, t.prototype.setOperationName = function(t) {
									return this._setOperationName(t), this
								}, t.prototype.setBaggageItem = function(t, e) {
									return this._setBaggageItem(t, e), this
								}, t.prototype.getBaggageItem = function(t) {
									return this._getBaggageItem(t)
								}, t.prototype.setTag = function(t, e) {
									var r;
									return this._addTags(((r = {})[t] = e, r)), this
								}, t.prototype.addTags = function(t) {
									return this._addTags(t), this
								}, t.prototype.log = function(t, e) {
									return this._log(t, e), this
								}, t.prototype.logEvent = function(t, e) {
									return this._log({
										event: t,
										payload: e
									})
								}, t.prototype.finish = function(t) {
									this._finish(t)
								}, t.prototype._context = function() {
									return n.spanContext
								}, t.prototype._tracer = function() {
									return n.tracer
								}, t.prototype._setOperationName = function(t) {}, t.prototype._setBaggageItem = function(t, e) {}, t.prototype._getBaggageItem = function(t) {}, t.prototype._addTags = function(t) {}, t.prototype._log = function(t, e) {}, t.prototype._finish = function(t) {}, t
							}();
						e.Span = o, e.default = o
					}, function(t, e, r) {
						"use strict";
						Object.defineProperty(e, "__esModule", {
							value: !0
						});
						var n, o = function() {
								function t(t, e) {
									for (var r = 0; r < e.length; r++) {
										var n = e[r];
										n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n)
									}
								}
								return function(e, r, n) {
									return r && t(e.prototype, r), n && t(e, n), e
								}
							}(),
							i = (n = r(0)) && n.__esModule ? n : {
								default: n
							},
							a = function() {
								function t(e, r, n) {
									(function(t, e) {
										if (!(t instanceof e)) throw TypeError("Cannot call a class as a function")
									})(this, t), this._baggage = {}, this._guid = e, this._sampled = !0, !1 === n && (this._sampled = n), this._upperTraceGUID = "0000000000000000", this._traceGUID = r, this._traceGUID && 32 === this._traceGUID.length && (this._upperTraceGUID = r.substr(0, 16), this._traceGUID = r.substr(16))
								}
								return o(t, [{
									key: "setBaggageItem",
									value: function(t, e) {
										this._baggage[t] = e
									}
								}, {
									key: "getBaggageItem",
									value: function(t) {
										return this._baggage[t]
									}
								}, {
									key: "forEachBaggageItem",
									value: function(t) {
										(0, i.default)(this._baggage, function(e, r) {
											t(r, e)
										})
									}
								}, {
									key: "traceGUID",
									value: function() {
										return "" + this._upperTraceGUID + this._traceGUID
									}
								}]), t
							}();
						e.default = a, t.exports = e.default
					}, function(t, e, r) {
						"use strict";
						Object.defineProperty(e, "__esModule", {
							value: !0
						});
						var n = e.LOG_INFO = 0,
							o = e.LOG_WARN = 1,
							i = e.LOG_ERROR = 2,
							a = e.LOG_FATAL = 3;
						e.LOG_LEVEL_TO_STRING = {
							LOG_INFO: "I",
							LOG_WARN: "W",
							LOG_ERROR: "E",
							LOG_FATAL: "F"
						}, e.LOG_STRING_TO_LEVEL = {
							I: n,
							W: o,
							E: i,
							F: a
						}, e.CLOCK_STATE_REFRESH_INTERVAL_MS = 350, e.LIGHTSTEP_APP_URL_PREFIX = "https://app.lightstep.com", e.JOIN_ID_PREFIX = "join:", e.LS_META_EVENT_KEY = "lightstep.meta_event", e.LS_META_PROPAGATION_KEY = "lightstep.propagation_format", e.LS_META_TRACE_KEY = "lightstep.trace_id", e.LS_META_SPAN_KEY = "lightstep.span_id", e.LS_META_TRACER_GUID_KEY = "lightstep.tracer_guid", e.LS_META_EXTRACT = "lightstep.extract_span", e.LS_META_INJECT = "lightstep.inject_span", e.LS_META_SP_START = "lightstep.span_start", e.LS_META_SP_FINISH = "lightstep.span_finish", e.LS_META_TRACER_CREATE = "lightstep.tracer_create", e.FORMAT_B3 = "format.b3"
					}, function(t, e, r) {
						"use strict";
						Object.defineProperty(e, "__esModule", {
							value: !0
						});
						var n = function() {
								function t(t, e) {
									for (var r = 0; r < e.length; r++) {
										var n = e[r];
										n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n)
									}
								}
								return function(e, r, n) {
									return r && t(e.prototype, r), n && t(e, n), e
								}
							}(),
							o = s(r(0)),
							a = s(r(5));

						function s(t) {
							return t && t.__esModule ? t : {
								default: t
							}
						}
						var u = function() {
							function t(e) {
								(function(t, e) {
									if (!(t instanceof e)) throw TypeError("Cannot call a class as a function")
								})(this, t), this._tracer = e, this._carrierPrefix = "ot-tracer-", this._baggagePrefix = "ot-baggage-"
							}
							return n(t, [{
								key: "inject",
								value: function(t, e) {
									var r = this;
									if (e) {
										if ("object" == (void 0 === e ? "undefined" : i(e))) return e[this._carrierPrefix + "spanid"] = t._guid, e[this._carrierPrefix + "traceid"] = t._traceGUID, e[this._carrierPrefix + "sampled"] = "true", t.forEachBaggageItem(function(t, n) {
											e["" + r._baggagePrefix + t] = n
										}), e;
										this._tracer._error("Unexpected '" + (void 0 === e ? "undefined" : i(e)) + "' FORMAT_TEXT_MAP carrier in call to inject")
									} else this._tracer._error("Unexpected null carrier in call to inject")
								}
							}, {
								key: "extract",
								value: function(t) {
									var e = this,
										r = 0,
										n = null,
										i = null,
										s = !0;
									if ((0, o.default)(t, function(t, o) {
											if ((o = o.toLowerCase()).substr(0, e._carrierPrefix.length) === e._carrierPrefix) switch (o.substr(e._carrierPrefix.length)) {
												case "traceid":
													r++, i = t;
													break;
												case "spanid":
													r++, n = t;
													break;
												case "sampled":
													switch (t) {
														case 0:
														case "0":
														case !1:
														case "false":
															s = !1;
															break;
														default:
															s = !0
													}
													break;
												default:
													e._tracer._error("Unrecognized carrier key '" + o + "' with recognized prefix. Ignoring.")
											}
										}), 0 === r) return null;
									if (r < 2) return this._tracer._error("Only found a partial SpanContext: " + t), null;
									var u = new a.default(n, i, s);
									return (0, o.default)(t, function(t, r) {
										if ((r = r.toLowerCase()).substr(0, e._baggagePrefix.length) === e._baggagePrefix) {
											var n = r.substr(e._baggagePrefix.length);
											u.setBaggageItem(n, t)
										}
									}), u
								}
							}]), t
						}();
						e.default = u, t.exports = e.default
					}, function(t, e, r) {
						"use strict";
						Object.defineProperty(e, "__esModule", {
							value: !0
						});
						var n = r(4),
							o = r(10),
							i = r(9);
						e.tracer = null, e.spanContext = null, e.span = null, e.initialize = function() {
							e.tracer = new i.default, e.span = new n.default, e.spanContext = new o.default
						}
					}, function(t, e, r) {
						"use strict";
						Object.defineProperty(e, "__esModule", {
							value: !0
						});
						var n = r(11),
							o = r(8),
							i = r(4),
							a = function() {
								function t() {}
								return t.prototype.startSpan = function(t, e) {
									if (void 0 === e && (e = {}), e.childOf) {
										var r = n.childOf(e.childOf);
										e.references ? e.references.push(r) : e.references = [r], delete e.childOf
									}
									return this._startSpan(t, e)
								}, t.prototype.inject = function(t, e, r) {
									return t instanceof i.default && (t = t.context()), this._inject(t, e, r)
								}, t.prototype.extract = function(t, e) {
									return this._extract(t, e)
								}, t.prototype._startSpan = function(t, e) {
									return o.span
								}, t.prototype._inject = function(t, e, r) {}, t.prototype._extract = function(t, e) {
									return o.spanContext
								}, t
							}();
						e.Tracer = a, e.default = a
					}, function(t, e, r) {
						"use strict";
						Object.defineProperty(e, "__esModule", {
							value: !0
						});
						var n = function() {
							function t() {}
							return t.prototype.toTraceId = function() {
								return ""
							}, t.prototype.toSpanId = function() {
								return ""
							}, t
						}();
						e.SpanContext = n, e.default = n
					}, function(t, e, r) {
						"use strict";
						Object.defineProperty(e, "__esModule", {
							value: !0
						});
						var n = r(12),
							o = r(13),
							i = r(4);
						e.childOf = function(t) {
							return t instanceof i.default && (t = t.context()), new o.default(n.REFERENCE_CHILD_OF, t)
						}, e.followsFrom = function(t) {
							return t instanceof i.default && (t = t.context()), new o.default(n.REFERENCE_FOLLOWS_FROM, t)
						}
					}, function(t, e, r) {
						"use strict";
						Object.defineProperty(e, "__esModule", {
							value: !0
						}), e.FORMAT_BINARY = "binary", e.FORMAT_TEXT_MAP = "text_map", e.FORMAT_HTTP_HEADERS = "http_headers", e.REFERENCE_CHILD_OF = "child_of", e.REFERENCE_FOLLOWS_FROM = "follows_from"
					}, function(t, e, r) {
						"use strict";
						Object.defineProperty(e, "__esModule", {
							value: !0
						});
						var n = r(4),
							o = function() {
								function t(t, e) {
									this._type = t, this._referencedContext = e instanceof n.default ? e.context() : e
								}
								return t.prototype.type = function() {
									return this._type
								}, t.prototype.referencedContext = function() {
									return this._referencedContext
								}, t
							}();
						e.default = o
					}, function(t, e, r) {
						"use strict";
						var n, o = this && this.__extends || (n = function(t, e) {
							return (n = Object.setPrototypeOf || ({
								__proto__: []
							}) instanceof Array && function(t, e) {
								t.__proto__ = e
							} || function(t, e) {
								for (var r in e) e.hasOwnProperty(r) && (t[r] = e[r])
							})(t, e)
						}, function(t, e) {
							function r() {
								this.constructor = t
							}
							n(t, e), t.prototype = null === e ? Object.create(e) : (r.prototype = e.prototype, new r)
						});
						Object.defineProperty(e, "__esModule", {
							value: !0
						});
						var i = function(t) {
							function e(e) {
								var r = t.call(this) || this;
								return r._span = e, r
							}
							return o(e, t), e.prototype.span = function() {
								return this._span
							}, e
						}(r(2).SpanContext);
						e.MockContext = i, e.default = i
					}, function(t, e, r) {
						"use strict";
						var n, o = this && this.__extends || (n = function(t, e) {
							return (n = Object.setPrototypeOf || ({
								__proto__: []
							}) instanceof Array && function(t, e) {
								t.__proto__ = e
							} || function(t, e) {
								for (var r in e) e.hasOwnProperty(r) && (t[r] = e[r])
							})(t, e)
						}, function(t, e) {
							function r() {
								this.constructor = t
							}
							n(t, e), t.prototype = null === e ? Object.create(e) : (r.prototype = e.prototype, new r)
						});
						Object.defineProperty(e, "__esModule", {
							value: !0
						});
						var i = r(2),
							a = r(14),
							s = function(t) {
								function e(e) {
									var r = t.call(this) || this;
									return r._mockTracer = e, r._uuid = r._generateUUID(), r._startMs = Date.now(), r._finishMs = 0, r._operationName = "", r._tags = {}, r._logs = [], r
								}
								return o(e, t), e.prototype._context = function() {
									return new a.default(this)
								}, e.prototype._setOperationName = function(t) {
									this._operationName = t
								}, e.prototype._addTags = function(t) {
									for (var e = 0, r = Object.keys(t); e < r.length; e++) {
										var n = r[e];
										this._tags[n] = t[n]
									}
								}, e.prototype._log = function(t, e) {
									this._logs.push({
										fields: t,
										timestamp: e
									})
								}, e.prototype._finish = function(t) {
									this._finishMs = t || Date.now()
								}, e.prototype.uuid = function() {
									return this._uuid
								}, e.prototype.operationName = function() {
									return this._operationName
								}, e.prototype.durationMs = function() {
									return this._finishMs - this._startMs
								}, e.prototype.tags = function() {
									return this._tags
								}, e.prototype.tracer = function() {
									return this._mockTracer
								}, e.prototype._generateUUID = function() {
									return "" + ("00000000" + Math.abs(0xffffffff * Math.random() | 0).toString(16)).substr(-8) + ("00000000" + Math.abs(0xffffffff * Math.random() | 0).toString(16)).substr(-8)
								}, e.prototype.addReference = function(t) {}, e.prototype.debug = function() {
									var t = {
										uuid: this._uuid,
										operation: this._operationName,
										millis: [this._finishMs - this._startMs, this._startMs, this._finishMs]
									};
									return Object.keys(this._tags).length && (t.tags = this._tags), t
								}, e
							}(i.Span);
						e.MockSpan = s, e.default = s
					}, function(t, e, r) {
						"use strict";

						function n() {
							return "undefined" != typeof document
						}
						t.exports = {
							cookie: n() ? function(t, e, r, n, o, i) {
								if (arguments.length > 1) {
									var a = t + "=" + encodeURIComponent(e) + (r ? "; expires=" + new Date(+new Date + 1e3 * r).toUTCString() : "") + (n ? "; path=" + n : "") + (o ? "; domain=" + o : "") + (i ? "; secure" : "");
									return document.cookie = a, a
								}
								return decodeURIComponent((("; " + document.cookie).split("; " + t + "=")[1] || "").split(";")[0])
							} : function() {
								return null
							},
							isBrowser: n
						}
					}, function(t, e, r) {
						"use strict";
						var n, o;
						n = {}, (o = {}).KeyValue = function(t) {
							if (this.Key = null, this.Value = null, t) {
								if (void 0 === t.Key) throw new n.TProtocolException(n.TProtocolExceptionType.UNKNOWN, "Required field Key is unset!");
								if (this.Key = t.Key, void 0 === t.Value) throw new n.TProtocolException(n.TProtocolExceptionType.UNKNOWN, "Required field Value is unset!");
								this.Value = t.Value
							}
						}, o.KeyValue.prototype = {}, o.KeyValue.prototype.read = !1, o.KeyValue.prototype.write = !1, o.NamedCounter = function(t) {
							if (this.Name = null, this.Value = null, t) {
								if (void 0 === t.Name) throw new n.TProtocolException(n.TProtocolExceptionType.UNKNOWN, "Required field Name is unset!");
								if (this.Name = t.Name, void 0 === t.Value) throw new n.TProtocolException(n.TProtocolExceptionType.UNKNOWN, "Required field Value is unset!");
								this.Value = t.Value
							}
						}, o.NamedCounter.prototype = {}, o.NamedCounter.prototype.read = !1, o.NamedCounter.prototype.write = !1, o.Runtime = function(t) {
							this.guid = null, this.start_micros = null, this.group_name = null, this.attrs = null, t && (void 0 !== t.guid && (this.guid = t.guid), void 0 !== t.start_micros && (this.start_micros = t.start_micros), void 0 !== t.group_name && (this.group_name = t.group_name), void 0 !== t.attrs && (this.attrs = t.attrs))
						}, o.Runtime.prototype = {}, o.Runtime.prototype.read = !1, o.Runtime.prototype.write = !1, o.LogRecord = function(t) {
							this.timestamp_micros = null, this.fields = null, this.runtime_guid = null, this.span_guid = null, this.stable_name = null, this.message = null, this.level = null, this.thread_id = null, this.filename = null, this.line_number = null, this.stack_frames = null, this.payload_json = null, this.error_flag = null, t && (void 0 !== t.timestamp_micros && (this.timestamp_micros = t.timestamp_micros), void 0 !== t.fields && (this.fields = t.fields), void 0 !== t.runtime_guid && (this.runtime_guid = t.runtime_guid), void 0 !== t.span_guid && (this.span_guid = t.span_guid), void 0 !== t.stable_name && (this.stable_name = t.stable_name), void 0 !== t.message && (this.message = t.message), void 0 !== t.level && (this.level = t.level), void 0 !== t.thread_id && (this.thread_id = t.thread_id), void 0 !== t.filename && (this.filename = t.filename), void 0 !== t.line_number && (this.line_number = t.line_number), void 0 !== t.stack_frames && (this.stack_frames = t.stack_frames), void 0 !== t.payload_json && (this.payload_json = t.payload_json), void 0 !== t.error_flag && (this.error_flag = t.error_flag))
						}, o.LogRecord.prototype = {}, o.LogRecord.prototype.read = !1, o.LogRecord.prototype.write = !1, o.TraceJoinId = function(t) {
							if (this.TraceKey = null, this.Value = null, t) {
								if (void 0 === t.TraceKey) throw new n.TProtocolException(n.TProtocolExceptionType.UNKNOWN, "Required field TraceKey is unset!");
								if (this.TraceKey = t.TraceKey, void 0 === t.Value) throw new n.TProtocolException(n.TProtocolExceptionType.UNKNOWN, "Required field Value is unset!");
								this.Value = t.Value
							}
						}, o.TraceJoinId.prototype = {}, o.TraceJoinId.prototype.read = !1, o.TraceJoinId.prototype.write = !1, o.SpanRecord = function(t) {
							this.span_guid = null, this.trace_guid = null, this.runtime_guid = null, this.span_name = null, this.join_ids = null, this.oldest_micros = null, this.youngest_micros = null, this.attributes = null, this.error_flag = null, this.log_records = null, t && (void 0 !== t.span_guid && (this.span_guid = t.span_guid), void 0 !== t.trace_guid && (this.trace_guid = t.trace_guid), void 0 !== t.runtime_guid && (this.runtime_guid = t.runtime_guid), void 0 !== t.span_name && (this.span_name = t.span_name), void 0 !== t.join_ids && (this.join_ids = t.join_ids), void 0 !== t.oldest_micros && (this.oldest_micros = t.oldest_micros), void 0 !== t.youngest_micros && (this.youngest_micros = t.youngest_micros), void 0 !== t.attributes && (this.attributes = t.attributes), void 0 !== t.error_flag && (this.error_flag = t.error_flag), void 0 !== t.log_records && (this.log_records = t.log_records))
						}, o.SpanRecord.prototype = {}, o.SpanRecord.prototype.read = !1, o.SpanRecord.prototype.write = !1, o.Auth = function(t) {
							this.access_token = null, t && void 0 !== t.access_token && (this.access_token = t.access_token)
						}, o.Auth.prototype = {}, o.Auth.prototype.read = !1, o.Auth.prototype.write = !1, o.Timing = function(t) {
							this.receive_micros = null, this.transmit_micros = null, t && (void 0 !== t.receive_micros && (this.receive_micros = t.receive_micros), void 0 !== t.transmit_micros && (this.transmit_micros = t.transmit_micros))
						}, o.Timing.prototype = {}, o.Timing.prototype.read = !1, o.Timing.prototype.write = !1, o.SampleCount = function(t) {
							this.oldest_micros = null, this.youngest_micros = null, this.count = null, t && (void 0 !== t.oldest_micros && (this.oldest_micros = t.oldest_micros), void 0 !== t.youngest_micros && (this.youngest_micros = t.youngest_micros), void 0 !== t.count && (this.count = t.count))
						}, o.SampleCount.prototype = {}, o.SampleCount.prototype.read = !1, o.SampleCount.prototype.write = !1, o.MetricsSample = function(t) {
							if (this.name = null, this.int64_value = null, this.double_value = null, t) {
								if (void 0 === t.name) throw new n.TProtocolException(n.TProtocolExceptionType.UNKNOWN, "Required field name is unset!");
								this.name = t.name, void 0 !== t.int64_value && (this.int64_value = t.int64_value), void 0 !== t.double_value && (this.double_value = t.double_value)
							}
						}, o.MetricsSample.prototype = {}, o.MetricsSample.prototype.read = !1, o.MetricsSample.prototype.write = !1, o.Metrics = function(t) {
							this.counts = null, this.gauges = null, t && (void 0 !== t.counts && (this.counts = t.counts), void 0 !== t.gauges && (this.gauges = t.gauges))
						}, o.Metrics.prototype = {}, o.Metrics.prototype.read = !1, o.Metrics.prototype.write = !1, o.ReportRequest = function(t) {
							this.runtime = null, this.span_records = null, this.log_records = null, this.timestamp_offset_micros = null, this.oldest_micros = null, this.youngest_micros = null, this.counters = null, this.internal_logs = null, this.internal_metrics = null, t && (void 0 !== t.runtime && (this.runtime = t.runtime), void 0 !== t.span_records && (this.span_records = t.span_records), void 0 !== t.log_records && (this.log_records = t.log_records), void 0 !== t.timestamp_offset_micros && (this.timestamp_offset_micros = t.timestamp_offset_micros), void 0 !== t.oldest_micros && (this.oldest_micros = t.oldest_micros), void 0 !== t.youngest_micros && (this.youngest_micros = t.youngest_micros), void 0 !== t.counters && (this.counters = t.counters), void 0 !== t.internal_logs && (this.internal_logs = t.internal_logs), void 0 !== t.internal_metrics && (this.internal_metrics = t.internal_metrics))
						}, o.ReportRequest.prototype = {}, o.ReportRequest.prototype.read = !1, o.ReportRequest.prototype.write = !1, o.Command = function(t) {
							this.disable = null, t && void 0 !== t.disable && (this.disable = t.disable)
						}, o.Command.prototype = {}, o.Command.prototype.read = !1, o.Command.prototype.write = !1, o.ReportResponse = function(t) {
							this.commands = null, this.timing = null, t && (void 0 !== t.commands && (this.commands = t.commands), void 0 !== t.timing && (this.timing = t.timing))
						}, o.ReportResponse.prototype = {}, o.ReportResponse.prototype.read = !1, o.ReportResponse.prototype.write = !1, t.exports.crouton_thrift = o, t.exports.Thrift = {}
					}, function(t, e, r) {
						"use strict";
						Object.defineProperty(e, "__esModule", {
							value: !0
						});
						var n = function() {
								function t(t, e) {
									for (var r = 0; r < e.length; r++) {
										var n = e[r];
										n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n)
									}
								}
								return function(e, r, n) {
									return r && t(e.prototype, r), n && t(e, n), e
								}
							}(),
							o = function() {
								function t() {
									! function(t, e) {
										if (!(t instanceof e)) throw TypeError("Cannot call a class as a function")
									}(this, t)
								}
								return n(t, [{
									key: "detachedTimeout",
									value: function(t, e) {
										var r = setTimeout(t, e);
										return r.unref && r.unref(), r
									}
								}, {
									key: "shouldSendMetaSpan",
									value: function(t, e) {
										return !0 === t.meta_event_reporting && !0 !== e["lightstep.meta_event"]
									}
								}]), t
							}();
						e.default = new o, t.exports = e.default
					}, function(t, e, r) {
						"use strict";
						var n = c(r(20)),
							o = c(r(7)),
							i = c(r(47)),
							a = c(r(48)),
							s = c(r(5)),
							u = r(1);

						function c(t) {
							return t && t.__esModule ? t : {
								default: t
							}
						}
						var l = {
							Tracer: n.default,
							LightStepPropagator: o.default,
							B3Propagator: i.default,
							DDPropagator: a.default,
							SpanContext: s.default
						};
						u.Platform.initLibrary(l), t.exports = l
					}, function(t, e, r) {
						"use strict";
						Object.defineProperty(e, "__esModule", {
							value: !0
						});
						var n = Object.assign || function(t) {
								for (var e = 1; e < arguments.length; e++) {
									var r = arguments[e];
									for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (t[n] = r[n])
								}
								return t
							},
							o = function() {
								function t(t, e) {
									for (var r = 0; r < e.length; r++) {
										var n = e[r];
										n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n)
									}
								}
								return function(e, r, n) {
									return r && t(e.prototype, r), n && t(e, n), e
								}
							}(),
							a = v(r(21)),
							s = function(t) {
								if (t && t.__esModule) return t;
								var e = {};
								if (null != t)
									for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
								return e.default = t, e
							}(r(2)),
							u = v(r(5)),
							c = v(r(28)),
							l = v(r(0)),
							p = r(1),
							f = v(r(38)),
							_ = v(r(39)),
							d = v(r(40)),
							h = v(r(41)),
							g = v(r(7));

						function v(t) {
							return t && t.__esModule ? t : {
								default: t
							}
						}

						function y(t, e, r) {
							return e in t ? Object.defineProperty(t, e, {
								value: r,
								enumerable: !0,
								configurable: !0,
								writable: !0
							}) : t[e] = r, t
						}
						var m = r(42),
							b = r(43),
							T = r(3),
							O = r(6),
							S = r(44),
							E = r(45),
							R = r(18),
							k = null,
							M = function(t) {
								function e(t) {
									! function(t, e) {
										if (!(t instanceof e)) throw TypeError("Cannot call a class as a function")
									}(this, e);
									var o = function(t, e) {
										if (!t) throw ReferenceError("this hasn't been initialised - super() hasn't been called");
										return e && ("object" == (void 0 === e ? "undefined" : i(e)) || "function" == typeof e) ? e : t
									}(this, Object.getPrototypeOf(e).call(this));
									o._delegateEventEmitterMethods(), t = t || {}, k || (S.setOptions(t), k = o), o._platform = new p.Platform(o), o._runtimeGUID = t.guid || o.override_runtime_guid || null, o._plugins = {}, o._options = {}, o._optionDescs = [], o._makeOptionsTable(), o._opentracing = s, t.opentracing_module && (o._opentracing = t.opentracing_module);
									var a = o._platform.nowMicros();
									return o._startMicros = a, o._auth = null, o._runtime = null, t && (o._transport = t.override_transport), o._propagators = {}, o._propagators[o._opentracing.FORMAT_HTTP_HEADERS] = new g.default(o), o._propagators[o._opentracing.FORMAT_TEXT_MAP] = new g.default(o), o._propagators[o._opentracing.FORMAT_BINARY] = new h.default(o, o._opentracing.FORMAT_BINARY), t && t.propagators && (o._propagators = n({}, o._propagators, t.propagators)), o._reportingLoopActive = !1, o._first_report_has_run = !1, o._reportYoungestMicros = a, o._reportTimer = null, o._reportErrorStreak = 0, o._lastVisibleErrorMillis = 0, o._skippedVisibleErrors = 0, o._activeRootSpanSet = {}, o._activeRootSpan = null, o._spanRecords = [], o._counters = {
										"internal.errors": 0,
										"internal.warnings": 0,
										"spans.dropped": 0,
										"logs.dropped": 0,
										"logs.keys.over_limit": 0,
										"logs.values.over_limit": 0,
										"reports.errors.send": 0
									}, o._internalLogs = [], o._flushIsActive = !1, o.addPlugin(r(46)), o.addPlatformPlugins(t), o.setPlatformOptions(t), t && o.options(t), (void 0 === o._transport || null === o._transport) && (o._options.transport, o._transport = new p.ThriftTransport({
										warn: function(t, e) {
											o._warn(t, e)
										},
										error: function(t, e) {
											o._error(t, e)
										}
									}), o._info("Using thrift transport per user-defined option.")), o._useClockState = !o._options.disable_clock_skew_correction, o._clockState = new m({
										nowMicros: function() {
											return o._platform.nowMicros()
										},
										localStoreGet: function() {
											var t = "clock_state/" + o._options.collector_host;
											return o._platform.localStoreGet(t)
										},
										localStoreSet: function(t) {
											var e = "clock_state/" + o._options.collector_host;
											return o._platform.localStoreSet(e, t)
										}
									}), o._setupReportOnExit(), o._info("Tracer created with guid " + o._runtimeGUID), 0 === o._options.access_token.length && o._warn("Access token not set -\n            this requires a satellite with access token checking disabled,\n            such as a developer satellite."), o.startPlugins(), o
								}
								return function(t, e) {
									if ("function" != typeof e && null !== e) throw TypeError("Super expression must either be null or a function, not " + (void 0 === e ? "undefined" : i(e)));
									t.prototype = Object.create(e && e.prototype, {
										constructor: {
											value: t,
											enumerable: !1,
											writable: !0,
											configurable: !0
										}
									}), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
								}(e, s.Tracer), o(e, [{
									key: "_delegateEventEmitterMethods",
									value: function() {
										var t = this;
										this._ee = new a.default, (0, l.default)(["addListener", "emit", "eventNames", "getMaxListeners", "listenerCount", "listeners", "on", "once", "prependListener", "prependOnceListener", "removeAllListeners", "removeListener", "setMaxListeners"], function(e) {
											t[e] = function() {
												t._ee[e] && t._ee[e].apply(t._ee, arguments)
											}
										})
									}
								}, {
									key: "_makeOptionsTable",
									value: function() {
										this.addOption("verbosity", {
											type: "int",
											min: 0,
											max: 9,
											defaultValue: 1
										}), this.addOption("access_token", {
											type: "string",
											defaultValue: ""
										}), this.addOption("component_name", {
											type: "string",
											defaultValue: ""
										}), this.addOption("collector_host", {
											type: "string",
											defaultValue: "collector.lightstep.com"
										}), this.addOption("collector_port", {
											type: "int",
											defaultValue: 443
										}), this.addOption("collector_path", {
											type: "string",
											defaultValue: ""
										}), this.addOption("collector_encryption", {
											type: "string",
											defaultValue: "tls"
										}), this.addOption("tags", {
											type: "any",
											defaultValue: {}
										}), this.addOption("max_reporting_interval_millis", {
											type: "int",
											defaultValue: 2500
										}), this.addOption("disable_clock_skew_correction", {
											type: "bool",
											defaultValue: !1
										}), this.addOption("transport", {
											type: "string",
											defaultValue: "thrift"
										}), this.addOption("disabled", {
											type: "bool",
											defaultValue: !1
										}), this.addOption("max_span_records", {
											type: "int",
											defaultValue: 4096
										}), this.addOption("default_span_tags", {
											type: "any",
											defaultValue: {}
										}), this.addOption("report_timeout_millis", {
											type: "int",
											defaultValue: 3e4
										}), this.addOption("gzip_json_requests", {
											type: "bool",
											defaultValue: !0
										}), this.addOption("disable_reporting_loop", {
											type: "bool",
											defaultValue: !1
										}), this.addOption("disable_report_on_exit", {
											type: "bool",
											defaultValue: !1
										}), this.addOption("delay_initial_report_millis", {
											type: "int",
											defaultValue: 1e3
										}), this.addOption("error_throttle_millis", {
											type: "int",
											defaultValue: 6e4
										}), this.addOption("logger", {
											type: "function",
											defaultValue: this._printToConsole.bind(this)
										}), this.addOption("clear_span_buffer_consecutive_errors", {
											type: "int",
											defaultValue: null
										}), this.addOption("certificate_verification", {
											type: "bool",
											defaultValue: !0
										}), this.addOption("override_transport", {
											type: "any",
											defaultValue: null
										}), this.addOption("silent", {
											type: "bool",
											defaultValue: !1
										}), this.addOption("log_field_key_hard_limit", {
											type: "int",
											defaultValue: 256
										}), this.addOption("log_field_value_hard_limit", {
											type: "int",
											defaultValue: 1024
										}), this.addOption("disable_meta_event_reporting", {
											type: "bool",
											defaultValue: !1
										})
									}
								}, {
									key: "_startSpan",
									value: function(t, e) {
										var r = this,
											n = null;
										if ((e = e || {}).references)
											for (var o = 0; o < e.references.length; o++) {
												var i = e.references[o],
													a = i.type();
												if (a === this._opentracing.REFERENCE_CHILD_OF || a === this._opentracing.REFERENCE_FOLLOWS_FROM) {
													var s = i.referencedContext();
													if (!s) {
														this._error("Span reference has an invalid context", s);
														continue
													}
													n = s;
													break
												}
											}
										var p, f = n ? n.traceGUID() : this.generateTraceGUIDForRootSpan(),
											_ = !n || n._sampled,
											d = new u.default(this._platform.generateUUID(), f, _),
											h = new c.default(this, t, d);
										return h.addTags(this._options.default_span_tags), (0, l.default)(e, function(t, e) {
											switch (e) {
												case "references":
													break;
												case "startTime":
													h.setBeginMicros(Math.floor(1e3 * t));
													break;
												case "tags":
													h.addTags(t);
													break;
												default:
													r._warn("Ignoring unknown field '" + e + "'")
											}
										}), null !== n && (h.setParentGUID(n._guid), n.forEachBaggageItem(function(t, e) {
											return d.setBaggageItem(t, e)
										})), this.emit("start_span", h), R.shouldSendMetaSpan(this.options(), h.getTags()) && this.startSpan(O.LS_META_SP_START, {
											tags: (y(p = {}, O.LS_META_EVENT_KEY, !0), y(p, O.LS_META_TRACE_KEY, h.traceGUID()), y(p, O.LS_META_SPAN_KEY, h.guid()), p)
										}).finish(), h
									}
								}, {
									key: "_inject",
									value: function(t, e, r) {
										var n;
										switch (!0 === this.options().meta_event_reporting && this.startSpan(O.LS_META_INJECT, {
												tags: (y(n = {}, O.LS_META_EVENT_KEY, !0), y(n, O.LS_META_TRACE_KEY, t._traceGUID), y(n, O.LS_META_SPAN_KEY, t._guid), y(n, O.LS_META_PROPAGATION_KEY, e), n)
											}).finish(), e) {
											case this._opentracing.FORMAT_HTTP_HEADERS:
												this._propagators[this._opentracing.FORMAT_HTTP_HEADERS].inject(t, r);
												break;
											case this._opentracing.FORMAT_TEXT_MAP:
												this._propagators[this._opentracing.FORMAT_TEXT_MAP].inject(t, r);
												break;
											case this._opentracing.FORMAT_BINARY:
												this._propagators[this._opentracing.FORMAT_BINARY].inject(t, r);
												break;
											default:
												this._error("Unknown format: " + e)
										}
									}
								}, {
									key: "_extract",
									value: function(t, e) {
										var r, n = null;
										switch (t) {
											case this._opentracing.FORMAT_HTTP_HEADERS:
												n = this._propagators[this._opentracing.FORMAT_HTTP_HEADERS].extract(e);
												break;
											case this._opentracing.FORMAT_TEXT_MAP:
												n = this._propagators[this._opentracing.FORMAT_TEXT_MAP].extract(e);
												break;
											case this._opentracing.FORMAT_BINARY:
												n = this._propagators[this._opentracing.FORMAT_BINARY].extract(e);
												break;
											default:
												return this._error("Unsupported format: " + t), null
										}
										return !0 === this.options().meta_event_reporting && n && this.startSpan(O.LS_META_EXTRACT, {
											tags: (y(r = {}, O.LS_META_EVENT_KEY, !0), y(r, O.LS_META_TRACE_KEY, n._traceGUID), y(r, O.LS_META_SPAN_KEY, n._guid), y(r, O.LS_META_PROPAGATION_KEY, t), r)
										}).finish(), n
									}
								}, {
									key: "flush",
									value: function(t) {
										if (t || (t = function() {}), this._options.disabled) return this._warn("Manual flush() called in disabled state."), t(null);
										this._flushReport(!0, !1, t)
									}
								}, {
									key: "guid",
									value: function() {
										return this._runtimeGUID
									}
								}, {
									key: "verbosity",
									value: function() {
										var t = this._options.verbosity;
										return void 0 === t ? 1 : t
									}
								}, {
									key: "generateTraceGUIDForRootSpan",
									value: function() {
										var t = this._platform.generateUUID();
										return this._activeRootSpan && (t = this._activeRootSpan.traceGUID()), t
									}
								}, {
									key: "setPlatformOptions",
									value: function(t) {
										var e = this._platform.options(this) || {};
										(0, l.default)(t, function(t, r) {
											e[r] = t
										}), this.options(e)
									}
								}, {
									key: "addOption",
									value: function(t, e) {
										e.name = t, this._optionDescs.push(e), this._options[e.name] = e.defaultValue
									}
								}, {
									key: "options",
									value: function(t) {
										var e = this;
										if (0 == arguments.length) return console.assert("object" == i(this._options), "Internal error: _options field incorrect"), this._options;
										if ("object" != (void 0 === t ? "undefined" : i(t))) throw Error("options() must be called with an object: type was " + (void 0 === t ? "undefined" : i(t)));
										0 === t.collector_port && delete t.collector_port, void 0 !== t.collector_encryption && void 0 === t.collector_port && (t.collector_port = "none" !== t.collector_encryption ? 443 : 80), this.meta_event_reporting = !1;
										var r = {},
											n = {};
										if ((0, l.default)(this._optionDescs, function(o) {
												e._setOptionInternal(r, n, t, o)
											}), Object.keys(t).forEach(function(o) {
												void 0 === r[o] && void 0 === n[o] && e._warn("Invalid option " + o + " with value " + t[o])
											}), this._initReportingDataIfNeeded(r), this._reportingLoopActive || this._startReportingLoop(), this.verbosity() >= 3) {
											var o = "",
												a = 0;
											(0, l.default)(r, function(t, e) {
												o += "	" + JSON.stringify(e) + ": " + JSON.stringify(t.newValue) + "\n", a++
											}), a > 0 && this._debug("Options modified:\n" + o)
										}
										this.emit("options", r, this._options, this)
									}
								}, {
									key: "_setOptionInternal",
									value: function(t, e, r, n) {
										var o = n.name,
											a = r[o],
											s = void 0 === a ? "undefined" : i(a);
										if (void 0 !== a) {
											switch (n.type) {
												case "any":
													break;
												case "bool":
													if (!0 !== a && !1 !== a) return void this._error("Invalid boolean option '" + o + "' '" + a + "'");
													break;
												case "function":
													if ("function" != typeof a) return void this._error("Invalid function option '" + o + "' '" + a + "'");
													break;
												case "int":
													if ("number" !== s || Math.floor(a) !== a) return void this._error("Invalid int option '" + o + "' '" + a + "'");
													if (void 0 !== n.min && void 0 !== n.max && !(a >= n.min && a <= n.max)) return void this._error("Option '" + o + "' out of range '" + a + "' is not between " + n.min + " and " + n.max);
													break;
												case "string":
													switch (s) {
														case "string":
															break;
														case "number":
															a = T.toString(a);
															break;
														default:
															return void this._error("Invalid string option " + o + " " + a)
													}
													break;
												case "array":
													if ("[object Array]" !== Object.prototype.toString.call(a)) return void this._error("Invalid type for array option " + o + ": found '" + s + "'");
													break;
												default:
													return void this._error("Unknown option type '" + n.type + "'")
											}
											var u = this._options[o];
											if (void 0 === u) throw Error("Attempt to set unknown option " + o);
											"object" === s || u !== a ? (t[o] = {
												oldValue: u,
												newValue: a
											}, this._options[o] = a) : e[o] = !0
										}
									}
								}, {
									key: "_initReportingDataIfNeeded",
									value: function(t) {
										var e = this;
										if (null === this._auth) {
											this._runtimeGUID = this._platform.runtimeGUID(this._options.component_name), this._auth = new f.default(this._options.access_token);
											var r = {};
											(0, l.default)(this._options.tags, function(t, n) {
												"string" == typeof t ? r[n] = t : e._error("Tracer tag value is not a string: key=" + n)
											}), r["lightstep.tracer_version"] = E.version;
											var n = this._platform.tracerTags();
											(0, l.default)(n, function(t, e) {
												r[e] = t
											}), this._runtime = new _.default(this._runtimeGUID, this._startMicros, this._options.component_name, r), this._info("Initializing reporting data", {
												component_name: this._options.component_name,
												access_token: this._auth.getAccessToken()
											}), this.emit("reporting_initialized")
										} else {
											if (!this._runtime) return this._error("Inconsistent state: auth initialized without runtime.");
											if (t.access_token) throw Error("Cannot change access_token after it has been set.");
											if (t.component_name) throw Error("Cannot change component_name after it has been set.");
											if (t.collector_host) throw Error("Cannot change collector_host after the connection is established");
											if (t.collector_port) throw Error("Cannot change collector_port after the connection is established");
											if (t.collector_path) throw Error("Cannot change collector_path after the connection is established");
											if (t.collector_encryption) throw Error("Cannot change collector_encryption after the connection is established")
										}
									}
								}, {
									key: "getLogFieldKeyHardLimit",
									value: function() {
										return this._options.log_field_key_hard_limit
									}
								}, {
									key: "getLogFieldValueHardLimit",
									value: function() {
										return this._options.log_field_value_hard_limit
									}
								}, {
									key: "addPlatformPlugins",
									value: function(t) {
										var e = this,
											r = this._platform.plugins(t);
										(0, l.default)(r, function(t) {
											e.addPlugin(t)
										})
									}
								}, {
									key: "addPlugin",
									value: function(t) {
										var e = t.name();
										this._plugins[e] || (this._plugins[e] = t, t.addOptions(this))
									}
								}, {
									key: "startPlugins",
									value: function() {
										var t = this;
										(0, l.default)(this._plugins, function(e, r) {
											t._plugins[r].start(t)
										})
									}
								}, {
									key: "addActiveRootSpan",
									value: function(t) {
										this._activeRootSpanSet[t._guid] = t, this._setActiveRootSpanToYoungest()
									}
								}, {
									key: "removeActiveRootSpan",
									value: function(t) {
										delete this._activeRootSpanSet[t._guid], this._setActiveRootSpanToYoungest()
									}
								}, {
									key: "_setActiveRootSpanToYoungest",
									value: function() {
										var t = this;
										this._activeRootSpan = null, (0, l.default)(this._activeRootSpanSet, function(e) {
											(!t._activeRootSpan || e._beginMicros > t._activeRootSpan._beginMicros) && (t._activeRootSpan = e)
										})
									}
								}, {
									key: "_objectToUint8Array",
									value: function(t) {
										var e = void 0;
										try {
											e = encodeURIComponent(JSON.stringify(t))
										} catch (t) {
											return this._error("Could not binary encode carrier data."), null
										}
										for (var r = new ArrayBuffer(e.length), n = new Uint8Array(r), o = 0; o < e.length; o++) {
											var i = e.charCodeAt(o);
											if (!(i >= 0 && i <= 255)) return this._error("Unexpected character code"), null;
											n[o] = i
										}
										return n
									}
								}, {
									key: "_uint8ArrayToObject",
									value: function(t) {
										if (!t) return this._error("Array is null"), null;
										for (var e = "", r = 0; r < t.length; r++) e += String.fromCharCode(t[r]);
										try {
											return JSON.parse(decodeURIComponent(e))
										} catch (t) {
											return this._error("Could not decode binary data."), null
										}
									}
								}, {
									key: "log",
									value: function() {
										return new b(this)
									}
								}, {
									key: "_clearBuffers",
									value: function() {
										this._spanRecords = [], this._internalLogs = [];
										var t = {};
										(0, l.default)(this._counters, function(e, r) {
											t[r] = 0
										}), this._counters = t
									}
								}, {
									key: "_buffersAreEmpty",
									value: function() {
										if (this._spanRecords.length > 0 || this._internalLogs.length > 0) return !1;
										var t = !0;
										return (0, l.default)(this._counters, function(e) {
											e > 0 && (t = !1)
										}), t
									}
								}, {
									key: "_addSpanRecord",
									value: function(t) {
										this._internalAddSpanRecord(t), this.emit("span_added", t)
									}
								}, {
									key: "_internalAddSpanRecord",
									value: function(t) {
										if (t) {
											if (this._spanRecords.length >= this._options.max_span_records) {
												var e = Math.floor(this._spanRecords.length * Math.random());
												this._spanRecords[e] = t, this._counters["spans.dropped"]++
											} else this._spanRecords.push(t)
										} else this._error("Attempt to add null record to buffer")
									}
								}, {
									key: "_restoreRecords",
									value: function(t, e, r) {
										var n = this;
										(0, l.default)(t, function(t) {
											n._internalAddSpanRecord(t)
										});
										var o = this._internalLogs;
										this._internalLogs = [];
										var i = e.concat(o);
										(0, l.default)(i, function(t) {
											n._pushInternalLog(t)
										}), (0, l.default)(r, function(t, e) {
											e in n._counters ? n._counters[e] += t : n._error("Bad counter name: " + e)
										})
									}
								}, {
									key: "_clearSpanRecordsIfMaxErrors",
									value: function() {
										var t = this.options().clear_span_buffer_consecutive_errors;
										if (!(null === t || this._reportErrorStreak < t)) {
											var e = this._spanRecords.length;
											this._counters["spans.dropped"] += e, this._spanRecords = [], this._warn("Span buffer flushed, max consecutive errors reached", {
												max_consecutive_errors: t,
												spans_dropped: e
											})
										}
									}
								}, {
									key: "_setupReportOnExit",
									value: function() {
										var t = this;
										if (this._options.disable_report_on_exit) this._debug("report-on-exit is disabled.");
										else {
											var e = 0;
											this._platform.onBeforeExit(function() {
												e++ > 0 || (t._info("Final flush before exit."), t._flushReport(!1, !0, function(e) {
													e && t._warn("Final report before exit failed", {
														error: e,
														unflushed_spans: t._spanRecords.length,
														buffer_youngest_micros: t._reportYoungestMicros
													})
												}))
											})
										}
									}
								}, {
									key: "_startReportingLoop",
									value: function() {
										var t = this;
										if (this._options.disabled) this._info("Not starting reporting loop: instrumentation is disabled.");
										else if (this._options.disable_reporting_loop) this._info("Not starting reporting loop: reporting loop is disabled.");
										else if (null !== this._auth) {
											if (this._reportingLoopActive) this._info("Reporting loop already started!");
											else {
												this._info("Starting reporting loop:", this._runtime), this._reportingLoopActive = !0;
												var e = 0;
												this._platform.onBeforeExit(function() {
													e++ > 0 || t._stopReportingLoop()
												});
												var r = function() {
														t._enqueueNextReport(function(e) {
															t._reportingLoopActive && r()
														})
													},
													n = Math.floor(Math.random() * this._options.delay_initial_report_millis);
												R.detachedTimeout(function() {
													r()
												}, n)
											}
										}
									}
								}, {
									key: "_stopReportingLoop",
									value: function() {
										this._debug("Stopping reporting loop"), this._reportingLoopActive = !1, clearTimeout(this._reportTimer), this._reportTimer = null
									}
								}, {
									key: "_enqueueNextReport",
									value: function(t) {
										var e = this;
										if (!this._reportTimer) {
											var r = this._options.max_reporting_interval_millis;
											0 === this._reportErrorStreak && this._useClockState && !this._clockState.isReady() && (r = Math.min(O.CLOCK_STATE_REFRESH_INTERVAL_MS, r));
											var n = Math.floor(Math.max(0, (.5 * Math.random() - .25 + 1) * ((1 + Math.min(7, Math.max(0, this._reportErrorStreak))) * r)));
											this._debug("Delaying next flush for " + n + "ms"), this._reportTimer = R.detachedTimeout(function() {
												e._reportTimer = null, e._flushReport(!1, !1, t)
											}, n)
										}
									}
								}, {
									key: "_flushReport",
									value: function(t, e, r) {
										var n = this;
										r = r || function(t) {};
										var o = this._clockState.isReady(),
											i = this._clockState.offsetMicros();
										this._debug("time correction state", {
											offset_micros: i,
											active_samples: this._clockState.activeSampleCount(),
											ready: o
										});
										var a = this._spanRecords,
											s = this._counters,
											u = this._internalLogs;
										if (!this._useClockState || t || o || e) {
											if (this._buffersAreEmpty()) return this._debug("Skipping empty report"), r(null);
											this._clearBuffers(), this._debug("Flushing report (" + a.length + " spans)")
										} else this._debug("Flushing empty report to prime clock state"), a = [], s = {}, u = [];
										this._transport.ensureConnection(this._options), console.assert(null !== this._runtimeGUID, "No runtime GUID for Tracer");
										var c = this._useClockState ? i : 0,
											l = this._platform.nowMicros(),
											p = new d.default(this._runtime, this._reportYoungestMicros, l, a, u, s, c);
										this.emit("prereport", p);
										var f, _ = this._platform.nowMicros();
										this._options.meta_event_reporting && !this._first_report_has_run && (this._first_report_has_run = !0, this.startSpan(O.LS_META_TRACER_CREATE, {
											tags: (y(f = {}, O.LS_META_EVENT_KEY, !0), y(f, O.LS_META_TRACER_GUID_KEY, this._runtimeGUID), f)
										}).finish()), this._transport.report(e, this._auth, p, function(t, o) {
											var i = n._platform.nowMicros(),
												a = (l - p.oldest_micros) / 1e6;
											if (t) {
												n._reportErrorStreak++;
												var s = void 0;
												s = t.message ? "" + t.message : "" + t, n._warn("Error in report: " + s, {
													last_report_seconds_ago: a
												}), n._restoreRecords(p.getSpanRecords(), p.getInternalLogs(), p.getCounters()), n._counters["reports.errors.send"]++, n._clearSpanRecordsIfMaxErrors(), n.emit("report_error", t, {
													error: t,
													streak: n._reportErrorStreak,
													detached: e
												})
											} else n.verbosity() >= 4 && n._debug("Report flushed for last " + a + " seconds", {
												spans_reported: p.getSpanRecords().length
											}), n._reportErrorStreak = 0, n._reportYoungestMicros = l, o ? (o.timing && o.timing.receive_micros && o.timing.transmit_micros ? n._clockState.addSample(_, o.timing.receive_micros, o.timing.transmit_micros, i) : o.receiveTimestamp && o.transmitTimestamp ? n._clockState.addSample(_, 1e6 * o.receiveTimestamp.seconds + o.receiveTimestamp.nanos / 1e3, 1e6 * o.transmitTimestamp.seconds + o.transmitTimestamp.nanos / 1e3, i) : n._useClockState = !1, o.errors && o.errors.length > 0 ? n._warn("Errors in report", o.errors) : o.errorsList && o.errorsList.length > 0 && n._warn("Errors in report", o.errorsList), o.commandsList && o.commandsList.length > 0 && o.commandsList[0].devMode && !0 !== n.options().disable_meta_event_reporting && (n.options().meta_event_reporting = !0)) : n._useClockState = !1, n.emit("report", p, o);
											return r(t)
										})
									}
								}, {
									key: "stats",
									value: function() {
										return {
											counters: this._counters
										}
									}
								}, {
									key: "_debug",
									value: function(t, e) {
										4 > this.verbosity() || this._options.logger("debug", t, e)
									}
								}, {
									key: "_info",
									value: function(t, e) {
										3 > this.verbosity() || this._options.logger("info", t, e)
									}
								}, {
									key: "_warn",
									value: function(t, e) {
										this._counters["internal.warnings"]++, 3 > this.verbosity() || this._options.logger("warn", t, e)
									}
								}, {
									key: "_error",
									value: function(t, e) {
										this._counters["internal.errors"]++;
										var r = this.log().level(O.LOG_ERROR).message(t).payload(e).record();
										this._pushInternalLog(r);
										var n = this.verbosity();
										if (0 !== n) {
											var o = Date.now();
											if (1 === n) {
												if (o < this._lastVisibleErrorMillis + this._options.error_throttle_millis) return void this._skippedVisibleErrors++;
												if (this._skippedVisibleErrors > 0) {
													var i = this._skippedVisibleErrors + " errors masked since last logged error. Increase 'verbosity' option to see all errors.";
													this._options.logger("error", i, e)
												}
											}
											this._options.logger("error", t, e), this._lastVisibleErrorMillis = o, this._skippedVisibleErrors = 0
										}
									}
								}, {
									key: "_printToConsole",
									value: function(t, e, r) {
										var n = "log",
											o = "[LightStep:INFO] " + e;
										"debug" === t ? (n = "log", o = "[LightStep:DEBUG] " + e) : "info" === t ? (n = "log", o = "[LightStep:INFO] " + e) : "warn" === t ? (n = "warn", o = "[LightStep:WARN] " + e) : "error" === t && (n = "error", o = "[LightStep:ERROR] " + e), this._options.silent || (void 0 !== r ? console[n](o, r) : console[n](o))
									}
								}, {
									key: "_pushInternalLog",
									value: function(t) {
										t && (this._internalLogs.length >= 20 ? (t.message = "MAX_INTERNAL_LOGS limit hit. Last error: " + t.message, this._internalLogs[this._internalLogs.length - 1] = t) : this._internalLogs.push(t))
									}
								}]), e
							}();
						e.default = M, t.exports = e.default
					}, function(t, e, r) {
						"use strict";
						var n = "function" != typeof Object.create && "~";

						function o(t, e, r) {
							this.fn = t, this.context = e, this.once = r || !1
						}

						function i() {}
						i.prototype._events = void 0, i.prototype.listeners = function(t, e) {
							var r = this._events && this._events[n ? n + t : t];
							if (e) return !!r;
							if (!r) return [];
							if (r.fn) return [r.fn];
							for (var o = 0, i = r.length, a = Array(i); o < i; o++) a[o] = r[o].fn;
							return a
						}, i.prototype.emit = function(t, e, r, o, i, a) {
							var s = n ? n + t : t;
							if (!this._events || !this._events[s]) return !1;
							var u, c, l = this._events[s],
								p = arguments.length;
							if ("function" == typeof l.fn) {
								switch (l.once && this.removeListener(t, l.fn, void 0, !0), p) {
									case 1:
										return l.fn.call(l.context), !0;
									case 2:
										return l.fn.call(l.context, e), !0;
									case 3:
										return l.fn.call(l.context, e, r), !0;
									case 4:
										return l.fn.call(l.context, e, r, o), !0;
									case 5:
										return l.fn.call(l.context, e, r, o, i), !0;
									case 6:
										return l.fn.call(l.context, e, r, o, i, a), !0
								}
								for (c = 1, u = Array(p - 1); c < p; c++) u[c - 1] = arguments[c];
								l.fn.apply(l.context, u)
							} else {
								var f, _ = l.length;
								for (c = 0; c < _; c++) switch (l[c].once && this.removeListener(t, l[c].fn, void 0, !0), p) {
									case 1:
										l[c].fn.call(l[c].context);
										break;
									case 2:
										l[c].fn.call(l[c].context, e);
										break;
									case 3:
										l[c].fn.call(l[c].context, e, r);
										break;
									default:
										if (!u)
											for (f = 1, u = Array(p - 1); f < p; f++) u[f - 1] = arguments[f];
										l[c].fn.apply(l[c].context, u)
								}
							}
							return !0
						}, i.prototype.on = function(t, e, r) {
							var i = new o(e, r || this),
								a = n ? n + t : t;
							return this._events || (this._events = n ? {} : Object.create(null)), this._events[a] ? this._events[a].fn ? this._events[a] = [this._events[a], i] : this._events[a].push(i) : this._events[a] = i, this
						}, i.prototype.once = function(t, e, r) {
							var i = new o(e, r || this, !0),
								a = n ? n + t : t;
							return this._events || (this._events = n ? {} : Object.create(null)), this._events[a] ? this._events[a].fn ? this._events[a] = [this._events[a], i] : this._events[a].push(i) : this._events[a] = i, this
						}, i.prototype.removeListener = function(t, e, r, o) {
							var i = n ? n + t : t;
							if (!this._events || !this._events[i]) return this;
							var a = this._events[i],
								s = [];
							if (e) {
								if (a.fn)(a.fn !== e || o && !a.once || r && a.context !== r) && s.push(a);
								else
									for (var u = 0, c = a.length; u < c; u++)(a[u].fn !== e || o && !a[u].once || r && a[u].context !== r) && s.push(a[u])
							}
							return s.length ? this._events[i] = 1 === s.length ? s[0] : s : delete this._events[i], this
						}, i.prototype.removeAllListeners = function(t) {
							return this._events && (t ? delete this._events[n ? n + t : t] : this._events = n ? {} : Object.create(null)), this
						}, i.prototype.off = i.prototype.removeListener, i.prototype.addListener = i.prototype.on, i.prototype.setMaxListeners = function() {
							return this
						}, i.prefixed = n, t.exports = i
					}, function(t, e, r) {
						"use strict";
						Object.defineProperty(e, "__esModule", {
							value: !0
						}), e.default = function(t) {
							this.buffer = t
						}
					}, function(t, e, r) {
						"use strict";
						Object.defineProperty(e, "__esModule", {
							value: !0
						}), e.SPAN_KIND = "span.kind", e.SPAN_KIND_RPC_CLIENT = "client", e.SPAN_KIND_RPC_SERVER = "server", e.SPAN_KIND_MESSAGING_PRODUCER = "producer", e.SPAN_KIND_MESSAGING_CONSUMER = "consumer", e.ERROR = "error", e.COMPONENT = "component", e.SAMPLING_PRIORITY = "sampling.priority", e.PEER_SERVICE = "peer.service", e.PEER_HOSTNAME = "peer.hostname", e.PEER_ADDRESS = "peer.address", e.PEER_HOST_IPV4 = "peer.ipv4", e.PEER_HOST_IPV6 = "peer.ipv6", e.PEER_PORT = "peer.port", e.HTTP_URL = "http.url", e.HTTP_METHOD = "http.method", e.HTTP_STATUS_CODE = "http.status_code", e.MESSAGE_BUS_DESTINATION = "message_bus.destination", e.DB_INSTANCE = "db.instance", e.DB_STATEMENT = "db.statement", e.DB_TYPE = "db.type", e.DB_USER = "db.user"
					}, function(t, e, r) {
						"use strict";
						Object.defineProperty(e, "__esModule", {
							value: !0
						});
						var n = r(14);
						e.MockContext = n.default;
						var o = r(15);
						e.MockSpan = o.default;
						var i = r(25);
						e.MockTracer = i.default
					}, function(t, e, r) {
						"use strict";
						var n, o = this && this.__extends || (n = function(t, e) {
							return (n = Object.setPrototypeOf || ({
								__proto__: []
							}) instanceof Array && function(t, e) {
								t.__proto__ = e
							} || function(t, e) {
								for (var r in e) e.hasOwnProperty(r) && (t[r] = e[r])
							})(t, e)
						}, function(t, e) {
							function r() {
								this.constructor = t
							}
							n(t, e), t.prototype = null === e ? Object.create(e) : (r.prototype = e.prototype, new r)
						});
						Object.defineProperty(e, "__esModule", {
							value: !0
						});
						var i = r(2),
							a = r(26),
							s = r(15),
							u = function(t) {
								function e() {
									var e = t.call(this) || this;
									return e._spans = [], e
								}
								return o(e, t), e.prototype._startSpan = function(t, e) {
									var r = this._allocSpan();
									if (r.setOperationName(t), this._spans.push(r), e.references)
										for (var n = 0, o = e.references; n < o.length; n++) {
											var i = o[n];
											r.addReference(i)
										}
									return r._startStack = Error().stack, r
								}, e.prototype._inject = function(t, e, r) {
									throw Error("NOT YET IMPLEMENTED")
								}, e.prototype._extract = function(t, e) {
									throw Error("NOT YET IMPLEMENTED")
								}, e.prototype._allocSpan = function() {
									return new s.default(this)
								}, e.prototype.clear = function() {
									this._spans = []
								}, e.prototype.report = function() {
									return new a.default(this._spans)
								}, e
							}(i.Tracer);
						e.MockTracer = u, e.default = u
					}, function(t, e, r) {
						"use strict";
						Object.defineProperty(e, "__esModule", {
							value: !0
						});
						var n = function() {
							function t(t) {
								var e = this;
								this.spans = t, this.spansByUUID = {}, this.spansByTag = {}, this.debugSpans = [], this.unfinishedSpans = [], t.forEach(function(t) {
									0 === t._finishMs && e.unfinishedSpans.push(t), e.spansByUUID[t.uuid()] = t, e.debugSpans.push(t.debug());
									var r = t.tags();
									Object.keys(r).forEach(function(n) {
										var o = r[n];
										e.spansByTag[n] = e.spansByTag[n] || {}, e.spansByTag[n][o] = e.spansByTag[n][o] || [], e.spansByTag[n][o].push(t)
									})
								})
							}
							return t.prototype.firstSpanWithTagValue = function(t, e) {
								var r = this.spansByTag[t];
								if (!r) return null;
								var n = r[e];
								return n ? n[0] : null
							}, t
						}();
						e.MockReport = n, e.default = n
					}, function(t, e, r) {
						"use strict";
						var n, o = this && this.__extends || (n = function(t, e) {
							return (n = Object.setPrototypeOf || ({
								__proto__: []
							}) instanceof Array && function(t, e) {
								t.__proto__ = e
							} || function(t, e) {
								for (var r in e) e.hasOwnProperty(r) && (t[r] = e[r])
							})(t, e)
						}, function(t, e) {
							function r() {
								this.constructor = t
							}
							n(t, e), t.prototype = null === e ? Object.create(e) : (r.prototype = e.prototype, new r)
						});
						Object.defineProperty(e, "__esModule", {
							value: !0
						});
						var i = r(9),
							a = new i.default,
							s = null,
							u = new(function(t) {
								function e() {
									return null !== t && t.apply(this, arguments) || this
								}
								return o(e, t), e.prototype.startSpan = function() {
									var t = s || a;
									return t.startSpan.apply(t, arguments)
								}, e.prototype.inject = function() {
									var t = s || a;
									return t.inject.apply(t, arguments)
								}, e.prototype.extract = function() {
									var t = s || a;
									return t.extract.apply(t, arguments)
								}, e
							}(i.default));
						e.initGlobalTracer = function(t) {
							s = t
						}, e.globalTracer = function() {
							return u
						}
					}, function(t, e, r) {
						"use strict";
						Object.defineProperty(e, "__esModule", {
							value: !0
						});
						var n = function() {
								function t(t, e) {
									for (var r = 0; r < e.length; r++) {
										var n = e[r];
										n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n)
									}
								}
								return function(e, r, n) {
									return r && t(e.prototype, r), n && t(e, n), e
								}
							}(),
							o = _(r(2)),
							a = _(r(3)),
							s = _(r(6)),
							u = f(r(0)),
							c = r(1),
							l = f(r(37)),
							p = f(r(18));

						function f(t) {
							return t && t.__esModule ? t : {
								default: t
							}
						}

						function _(t) {
							if (t && t.__esModule) return t;
							var e = {};
							if (null != t)
								for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
							return e.default = t, e
						}

						function d(t, e, r) {
							return e in t ? Object.defineProperty(t, e, {
								value: r,
								enumerable: !0,
								configurable: !0,
								writable: !0
							}) : t[e] = r, t
						}
						var h = function(t) {
							function e(t, r, n) {
								! function(t, e) {
									if (!(t instanceof e)) throw TypeError("Cannot call a class as a function")
								}(this, e);
								var o = function(t, e) {
									if (!t) throw ReferenceError("this hasn't been initialised - super() hasn't been called");
									return e && ("object" == (void 0 === e ? "undefined" : i(e)) || "function" == typeof e) ? e : t
								}(this, Object.getPrototypeOf(e).call(this));
								return console.assert("object" == (void 0 === t ? "undefined" : i(t)), "Invalid runtime"), o._tracerImp = t, o._ctx = n, o._ended = !1, o._operationName = r, o._tags = {}, o._beginMicros = t._platform.nowMicros(), o._endMicros = 0, o._errorFlag = !1, o._log_records = null, o
							}
							return function(t, e) {
								if ("function" != typeof e && null !== e) throw TypeError("Super expression must either be null or a function, not " + (void 0 === e ? "undefined" : i(e)));
								t.prototype = Object.create(e && e.prototype, {
									constructor: {
										value: t,
										enumerable: !1,
										writable: !0,
										configurable: !0
									}
								}), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
							}(e, o.Span), n(e, [{
								key: "_tracer",
								value: function() {
									return this._tracerImp
								}
							}, {
								key: "_context",
								value: function() {
									return this._ctx
								}
							}, {
								key: "_setOperationName",
								value: function(t) {
									this._operationName = "" + t
								}
							}, {
								key: "_setBaggageItem",
								value: function(t, e) {
									this._ctx.setBaggageItem(t, e)
								}
							}, {
								key: "_getBaggageItem",
								value: function(t) {
									return this._ctx.getBaggageItem(t)
								}
							}, {
								key: "_addTags",
								value: function(t) {
									var e = this;
									(0, u.default)(t, function(t, r) {
										e._tags[r] = t
									})
								}
							}, {
								key: "_log",
								value: function(t, e) {
									if ("object" === (void 0 === t ? "undefined" : i(t))) {
										var r = e ? 1e3 * e : this._tracerImp._platform.nowMicros(),
											n = new l.default(this._tracerImp.getLogFieldKeyHardLimit(), this._tracerImp.getLogFieldValueHardLimit(), r, t);
										this._log_records = this._log_records || [], this._log_records.push(n), this._tracerImp.emit("log_added", n)
									} else this._tracerImp._error("Span.log() expects an object as its first argument")
								}
							}, {
								key: "_finish",
								value: function(t) {
									return this.end(t)
								}
							}]), n(e, [{
								key: "getOperationName",
								value: function() {
									return this._operationName
								}
							}, {
								key: "guid",
								value: function() {
									return this._ctx._guid
								}
							}, {
								key: "traceGUID",
								value: function() {
									return this._ctx._traceGUID
								}
							}, {
								key: "parentGUID",
								value: function() {
									return this._tags.parent_span_guid
								}
							}, {
								key: "setParentGUID",
								value: function(t) {
									return this._tags.parent_span_guid = a.toString(t), this
								}
							}, {
								key: "beginMicros",
								value: function() {
									return this._beginMicros
								}
							}, {
								key: "setBeginMicros",
								value: function(t) {
									return this._beginMicros = t, this
								}
							}, {
								key: "endMicros",
								value: function() {
									return this._endMicros
								}
							}, {
								key: "setEndMicros",
								value: function(t) {
									return this._endMicros = t, this
								}
							}, {
								key: "generateTraceURL",
								value: function() {
									var t = void 0;
									return t = this._beginMicros > 0 && this._endMicros > 0 ? Math.floor((this._beginMicros + this._endMicros) / 2) : this._tracerImp._platform.nowMicros(), s.LIGHTSTEP_APP_URL_PREFIX + "/" + encodeURIComponent(this._tracerImp.options().access_token) + "/trace?span_guid=" + encodeURIComponent(this.guid()) + "&at_micros=" + t
								}
							}, {
								key: "getTags",
								value: function() {
									return this._tags
								}
							}, {
								key: "end",
								value: function(t) {
									if (!this._ended) {
										var e;
										this._ended = !0, void 0 !== t && this.setEndMicros(Math.floor(1e3 * t)), 0 === this._endMicros && this.setEndMicros(this._tracerImp._platform.nowMicros()), p.default.shouldSendMetaSpan(this._tracer().options(), this.getTags()) && this._tracerImp.startSpan(s.LS_META_SP_FINISH, {
											tags: (d(e = {}, s.LS_META_EVENT_KEY, !0), d(e, s.LS_META_TRACE_KEY, this.traceGUID()), d(e, s.LS_META_SPAN_KEY, this.guid()), e)
										}).finish(), this._tracerImp._addSpanRecord(this)
									}
								}
							}, {
								key: "_toThrift",
								value: function() {
									var t = this,
										e = [];
									(0, u.default)(this._tags, function(t, r) {
										e.push(new c.crouton_thrift.KeyValue({
											Key: a.toString(r),
											Value: a.toString(t)
										}))
									});
									var r = [];
									return (0, u.default)(this._log_records, function(e) {
										var n = e.toThrift();
										t._tracerImp._counters["logs.keys.over_limit"] += e.getNumKeysOverLimit(), t._tracerImp._counters["logs.values.over_limit"] += e.getNumValuesOverLimit(), r.push(n)
									}), new c.crouton_thrift.SpanRecord({
										span_guid: this.guid(),
										trace_guid: this.traceGUID(),
										runtime_guid: this._tracerImp.guid(),
										span_name: this._operationName,
										oldest_micros: this._beginMicros,
										youngest_micros: this._endMicros,
										attributes: e,
										error_flag: this._errorFlag,
										log_records: r
									})
								}
							}]), e
						}();
						e.default = h, t.exports = e.default
					}, function(t, e, r) {
						"use strict";
						var n = function() {
								function t(t, e) {
									for (var r = 0; r < e.length; r++) {
										var n = e[r];
										n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n)
									}
								}
								return function(e, r, n) {
									return r && t(e.prototype, r), n && t(e, n), e
								}
							}(),
							o = r(30),
							a = r(16),
							s = function() {
								if (window.performance && window.performance.now && window.performance.timing && window.performance.timing.navigationStart) {
									var t = performance.timing.navigationStart;
									return function() {
										return Math.floor(1e3 * (t + performance.now()))
									}
								}
								return function() {
									return 1e3 * Date.now()
								}
							}(),
							u = function() {
								function t() {
									! function(t, e) {
										if (!(t instanceof e)) throw TypeError("Cannot call a class as a function")
									}(this, t)
								}
								return n(t, [{
									key: "name",
									value: function() {
										return "browser"
									}
								}, {
									key: "nowMicros",
									value: function() {
										return s()
									}
								}, {
									key: "runtimeGUID",
									value: function(t) {
										var e = encodeURIComponent("lightstep_guid/" + t),
											r = a.cookie(e) || this._generateLongUUID();
										a.cookie(e, r, 604800, "/");
										var n = a.cookie("lightstep_session_id") || this._generateLongUUID();
										return a.cookie("lightstep_session_id", n, 604800, "/"), r
									}
								}, {
									key: "generateUUID",
									value: function() {
										return this._generateLongUUID()
									}
								}, {
									key: "_generateLongUUID",
									value: function() {
										return "" + ("00000000" + Math.abs(0xffffffff * Math.random() | 0).toString(16)).substr(-8) + ("00000000" + Math.abs(0xffffffff * Math.random() | 0).toString(16)).substr(-8)
									}
								}, {
									key: "onBeforeExit",
									value: function() {
										if (a.isBrowser()) {
											for (var t, e = arguments.length, r = Array(e), n = 0; n < e; n++) r[n] = arguments[n];
											(t = window).addEventListener.apply(t, ["beforeunload"].concat(r))
										}
									}
								}, {
									key: "plugins",
									value: function(t) {
										return [r(31), r(32), r(33)]
									}
								}, {
									key: "options",
									value: function(t) {
										var e = {},
											r = {};
										return o.parseScriptElementOptions(e, r), o.parseURLQueryOptions(e, r), e
									}
								}, {
									key: "tracerTags",
									value: function() {
										return {
											"lightstep.tracer_platform": "browser"
										}
									}
								}, {
									key: "fatal",
									value: function(t) {
										throw Error(t)
									}
								}, {
									key: "localStoreGet",
									value: function(t) {
										try {
											if (!window.sessionStorage) return null
										} catch (t) {
											return null
										}
										try {
											return JSON.parse(sessionStorage.getItem("lightstep/" + t))
										} catch (t) {
											return null
										}
									}
								}, {
									key: "localStoreSet",
									value: function(t, e) {
										try {
											if (!window.sessionStorage) return
										} catch (t) {
											return
										}
										try {
											sessionStorage.setItem("lightstep/" + t, JSON.stringify(e))
										} catch (t) {}
									}
								}], [{
									key: "initLibrary",
									value: function(e) {
										var r = {},
											n = {};
										o.parseScriptElementOptions(r, n), n.init_global_tracer && t.initGlobalTracer(e, r)
									}
								}, {
									key: "initGlobalTracer",
									value: function(t, e) {
										"object" == ("undefined" == typeof window ? "undefined" : i(window)) && "object" == i(window.opentracing) && opentracing.initGlobalTracer(new t.Tracer(e))
									}
								}]), t
							}();
						t.exports = u
					}, function(t, e, r) {
						"use strict";
						var n = r(16),
							o = function() {
								if ("undefined" != typeof WorkerGlobalScope && self instanceof WorkerGlobalScope || !n.isBrowser()) return null;
								var t = document.getElementsByTagName("SCRIPT");
								return t.length > 0 ? t[t.length - 1] : null
							}();
						t.exports = {
							parseScriptElementOptions: n.isBrowser() ? function(t, e) {
								if (o) {
									var r = o.dataset,
										n = r.access_token;
									"string" == typeof n && n.length > 0 && (t.access_token = n);
									var i = r.component_name;
									"string" == typeof i && i.length > 0 && (t.component_name = i);
									var a = r.collector_host;
									"string" == typeof a && a.length > 0 && (t.collector_host = a);
									var s = r.collector_port;
									s && (t.collector_port = parseInt(s, 10));
									var u = r.collector_path;
									"string" == typeof u && u.length > 0 && (t.collector_path = u);
									var c = r.collector_encryption;
									c && (t.collector_encryption = c);
									var l = r.enable;
									"string" == typeof l && ("true" === l ? t.enable = !0 : "false" === l && (t.enable = !1));
									var p = r.verbosity;
									"string" == typeof p && (t.verbosity = parseInt(p, 10));
									var f = r.init_global_tracer;
									"string" == typeof f && ("true" === f ? e.init_global_tracer = !0 : "false" === f && (e.init_global_tracer = !1)), "string" == typeof r.xhr_instrumentation && "true" === r.xhr_instrumentation && (t.xhr_instrumentation = !0), "string" == typeof r.instrument_page_load && "true" === r.instrument_page_load && (t.instrument_page_load = !0)
								}
							} : function(t, e) {},
							parseURLQueryOptions: n.isBrowser() ? function(t) {
								var e = function(t) {
									var e = {},
										r = window.location.href.indexOf("?");
									if (r < 0) return e;
									var n = window.location.href.slice(r + 1);
									n.indexOf("#") >= 0 && (n = n.slice(0, n.indexOf("#")));
									for (var o = n.replace(/\+/, "%20").split("&"), i = 0; i < o.length; i++) {
										var a = o[i].split("=");
										e[decodeURIComponent(a[0])] = decodeURIComponent(a[1])
									}
									return e
								}();
								if (e.lightstep_verbosity) try {
									t.verbosity = parseInt(e.lightstep_verbosity, 10)
								} catch (t) {}
								e.lightstep_log_to_console && (t.log_to_console = !0)
							} : function(t) {
								return {}
							}
						}
					}, function(t, e, r) {
						"use strict";
						var n = Object.assign || function(t) {
								for (var e = 1; e < arguments.length; e++) {
									var r = arguments[e];
									for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (t[n] = r[n])
								}
								return t
							},
							o = function() {
								function t(t, e) {
									for (var r = 0; r < e.length; r++) {
										var n = e[r];
										n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n)
									}
								}
								return function(e, r, n) {
									return r && t(e.prototype, r), n && t(e, n), e
								}
							}(),
							a = function(t) {
								if (t && t.__esModule) return t;
								var e = {};
								if (null != t)
									for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
								return e.default = t, e
							}(r(2)),
							s = {};

						function u(t) {
							for (var e = t.getAllResponseHeaders().replace(/\s+$/, "").split(/\n/), r = 0; r < e.length; r++) e[r] = e[r].replace(/\r/g, "").replace(/^\s+/, "").replace(/\s+$/, "");
							return e
						}
						"object" == ("undefined" == typeof window ? "undefined" : i(window)) && void 0 !== window.XMLHttpRequest && (s = {
							XMLHttpRequest: XMLHttpRequest,
							open: XMLHttpRequest.prototype.open,
							send: XMLHttpRequest.prototype.send,
							setRequestHeader: XMLHttpRequest.prototype.setRequestHeader
						});
						var c = function() {
							function t() {
								(function(t, e) {
									if (!(t instanceof e)) throw TypeError("Cannot call a class as a function")
								})(this, t), this._enabled = this._isValidContext(), this._proxyInited = !1, this._internalExclusions = [], this._tracer = null, this._handleOptions = this._handleOptions.bind(this)
							}
							return o(t, [{
								key: "name",
								value: function() {
									return "instrument_xhr"
								}
							}, {
								key: "addOptions",
								value: function(t) {
									t.addOption("xhr_instrumentation", {
										type: "bool",
										defaultValue: !1
									}), t.addOption("xhr_url_inclusion_patterns", {
										type: "array",
										defaultValue: [/.*/]
									}), t.addOption("xhr_url_exclusion_patterns", {
										type: "array",
										defaultValue: []
									}), t.addOption("xhr_url_header_inclusion_patterns", {
										type: "array",
										defaultValue: [/.*/]
									}), t.addOption("xhr_url_header_exclusion_patterns", {
										type: "array",
										defaultValue: []
									}), t.addOption("include_cookies", {
										type: "bool",
										defaultValue: !0
									})
								}
							}, {
								key: "start",
								value: function(t) {
									if (this._enabled) {
										this._tracer = t;
										var e = t.options();
										this._addServiceHostToExclusions(e), this._handleOptions({}, e), t.on("options", this._handleOptions)
									}
								}
							}, {
								key: "stop",
								value: function() {
									if (this._enabled) {
										var t = s.XMLHttpRequest.prototype;
										t.open = s.open, t.send = s.send
									}
								}
							}, {
								key: "_handleOptions",
								value: function(t, e) {
									if (t.collector_host && this._addServiceHostToExclusions(e), !this._proxyInited && e.xhr_instrumentation) {
										this._proxyInited = !0;
										var r = s.XMLHttpRequest.prototype;
										r.setRequestHeader = this._instrumentSetRequestHeader(), r.open = this._instrumentOpen(), r.send = this._instrumentSend()
									}
								}
							}, {
								key: "_addServiceHostToExclusions",
								value: function(t) {
									if (0 !== t.collector_host.length) {
										var e = o(t.collector_host),
											r = o(t.collector_port),
											n = [RegExp("^https?://" + e + ":" + r)];
										"80" === r ? n.push(RegExp("^http://" + e)) : "443" === r && n.push(RegExp("^https://" + e)), this._internalExclusions = n
									}

									function o(t) {
										return ("" + t).replace(/[.*+?^${}()|[\]\\]/g, "\\$&")
									}
								}
							}, {
								key: "_isValidContext",
								value: function() {
									return "undefined" != typeof window && !!window.XMLHttpRequest && !!window.XMLHttpRequest.prototype
								}
							}, {
								key: "_instrumentSetRequestHeader",
								value: function() {
									return function(t, e) {
										return this.__requestHeaders = this.__requestHeaders || {}, this.__requestHeaders[t] = e, s.setRequestHeader.apply(this, arguments)
									}
								}
							}, {
								key: "_instrumentOpen",
								value: function() {
									var t = this,
										e = this._tracer;
									return function(r, o, i, a, c) {
										if (!t._shouldTrace(e, this, o)) return s.open.apply(this, arguments);
										var l = e.options(),
											p = e.startSpan("XMLHttpRequest");
										e.addActiveRootSpan(p), this.__tracer_span = p, this.__tracer_url = o;
										var f = {
											method: r,
											url: o,
											async: i,
											user: a
										};
										o && (f.url_pathname = o.split("?")[0]);
										var _ = n({}, f);
										l.include_cookies && (_.cookies = function() {
											if ("undefined" == typeof document || !document.cookie) return null;
											for (var t = document.cookie.split(";"), e = {}, r = 0, n = 0; n < t.length; n++) {
												var o = t[n].split("=", 2);
												if (2 === o.length) {
													var i = o[0].replace(/^\s+/, "").replace(/\s+$/, "");
													e[i] = decodeURIComponent(o[1]);
													try {
														e[i] = JSON.parse(e[i])
													} catch (t) {}
													r++
												}
											}
											return r > 0 ? e : null
										}());
										var d = void 0 === i || i;
										d && this.addEventListener("readystatechange", function() {
											if (0 === this.readyState) p.log({
												readyState: 0,
												event: "unsent"
											});
											else if (1 === this.readyState) p.log({
												readyState: 1,
												event: "sending"
											});
											else if (2 === this.readyState) p.log({
												readyState: 2,
												event: "headers received",
												method: r,
												url: o,
												openPayload: _,
												headers: u(this)
											}), p.addTags(f);
											else if (3 === this.readyState) p.log({
												readyState: 3,
												event: "loading"
											});
											else if (4 === this.readyState) {
												var t = this.responseType;
												p.log({
													readyState: 4,
													url: o,
													method: r,
													headers: u(this),
													status: this.status,
													statusText: this.statusText,
													responseType: t
												}), e.removeActiveRootSpan(p), p.finish()
											} else p.log({
												readyState: this.readyState
											})
										});
										var h = s.open.apply(this, arguments);
										return d || (e.removeActiveRootSpan(p), p.finish()), h
									}
								}
							}, {
								key: "_instrumentSend",
								value: function() {
									var t = this,
										e = this._tracer;
									return function() {
										var r = this;
										if (!t._shouldTrace(e, this, this.__tracer_url)) return s.send.apply(this, arguments);
										var n = this.__tracer_span;
										if (!n) return s.send.apply(this, arguments);
										var o = Array.prototype.slice.call(arguments),
											i = void 0;
										if (1 === o.length) {
											o[0] && o[0].length && (i = o[0].length);
											try {
												o = JSON.parse(o[0])
											} catch (t) {}
										}
										var u = void 0 === i ? "" : ", data length=" + i;
										if (n.log({
												event: "send",
												data_length: u
											}), t._shouldAddHeadersToRequest(e, this.__tracer_url)) {
											var c = {};
											e.inject(n.context(), a.FORMAT_HTTP_HEADERS, c), Object.keys(c).forEach(function(t) {
												s.setRequestHeader.call(r, t, c[t])
											})
										}
										return s.send.apply(this, arguments)
									}
								}
							}, {
								key: "_shouldTrace",
								value: function(t, e, r) {
									if (!t || !r) return !1;
									var n = t.options();
									return !n.disabled && !this._internalExclusions.some(function(t) {
										return t.test(r)
									}) && !n.xhr_url_exclusion_patterns.some(function(t) {
										return t.test(r)
									}) && !!n.xhr_url_inclusion_patterns.some(function(t) {
										return t.test(r)
									})
								}
							}, {
								key: "_shouldAddHeadersToRequest",
								value: function(t, e) {
									if (!t || !e) return !1;
									var r = t.options();
									return !r.disabled && !r.xhr_url_header_exclusion_patterns.some(function(t) {
										return t.test(e)
									}) && !!r.xhr_url_header_inclusion_patterns.some(function(t) {
										return t.test(e)
									})
								}
							}]), t
						}();
						t.exports = new c
					}, function(t, e, r) {
						"use strict";
						var n = function() {
								function t(t, e) {
									for (var r = 0; r < e.length; r++) {
										var n = e[r];
										n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n)
									}
								}
								return function(e, r, n) {
									return r && t(e.prototype, r), n && t(e, n), e
								}
							}(),
							o = function(t, e) {
								if (Array.isArray(t)) return t;
								if (Symbol.iterator in Object(t)) return function(t, e) {
									var r = [],
										n = !0,
										o = !1,
										i = void 0;
									try {
										for (var a, s = t[Symbol.iterator](); !(n = (a = s.next()).done) && (r.push(a.value), !e || r.length !== e); n = !0);
									} catch (t) {
										o = !0, i = t
									} finally {
										try {
											!n && s.return && s.return()
										} finally {
											if (o) throw i
										}
									}
									return r
								}(t, e);
								throw TypeError("Invalid attempt to destructure non-iterable instance")
							},
							a = function(t) {
								if (t && t.__esModule) return t;
								var e = {};
								if (null != t)
									for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
								return e.default = t, e
							}(r(2)),
							s = void 0;
						"object" == ("undefined" == typeof window ? "undefined" : i(window)) && void 0 !== window.fetch && (s = window.fetch);
						var u = function() {
							function t() {
								(function(t, e) {
									if (!(t instanceof e)) throw TypeError("Cannot call a class as a function")
								})(this, t), this._enabled = this._isValidContext(), this._proxyInited = !1, this._internalExclusions = [], this._tracer = null, this._handleOptions = this._handleOptions.bind(this)
							}
							return n(t, [{
								key: "name",
								value: function() {
									return "instrument_fetch"
								}
							}, {
								key: "addOptions",
								value: function(t) {
									t.addOption("fetch_instrumentation", {
										type: "bool",
										defaultValue: !1
									}), t.addOption("fetch_url_inclusion_patterns", {
										type: "array",
										defaultValue: [/.*/]
									}), t.addOption("fetch_url_exclusion_patterns", {
										type: "array",
										defaultValue: []
									}), t.addOption("fetch_url_header_inclusion_patterns", {
										type: "array",
										defaultValue: [/.*/]
									}), t.addOption("fetch_url_header_exclusion_patterns", {
										type: "array",
										defaultValue: []
									}), t.addOption("include_cookies", {
										type: "bool",
										defaultValue: !0
									})
								}
							}, {
								key: "start",
								value: function(t) {
									if (this._enabled) {
										this._tracer = t;
										var e = t.options();
										this._addServiceHostToExclusions(e), this._handleOptions({}, e), t.on("options", this._handleOptions)
									}
								}
							}, {
								key: "stop",
								value: function() {
									this._enabled && (window.fetch = s)
								}
							}, {
								key: "_handleOptions",
								value: function(t, e) {
									t.collector_host && this._addServiceHostToExclusions(e), !this._proxyInited && e.fetch_instrumentation && (this._proxyInited = !0, window.fetch = this._instrumentFetch())
								}
							}, {
								key: "_addServiceHostToExclusions",
								value: function(t) {
									if (0 !== t.collector_host.length) {
										var e = o(t.collector_host),
											r = o(t.collector_port),
											n = [RegExp("^https?://" + e + ":" + r)];
										"80" === r ? n.push(RegExp("^http://" + e)) : "443" === r && n.push(RegExp("^https://" + e)), this._internalExclusions = n
									}

									function o(t) {
										return ("" + t).replace(/[.*+?^${}()|[\]\\]/g, "\\$&")
									}
								}
							}, {
								key: "_isValidContext",
								value: function() {
									return "undefined" != typeof window && !!window.fetch
								}
							}, {
								key: "_instrumentFetch",
								value: function() {
									var t = this,
										e = this._tracer;
									return function(r, n) {
										var i = new Request(r, n),
											u = e.options();
										if (!t._shouldTrace(e, i.url)) return s(i);
										var c = e.startSpan("fetch");
										e.addActiveRootSpan(c);
										var l = new URL(i.url),
											p = {
												method: i.method,
												url: i.url,
												hash: l.hash,
												href: l.href,
												protocol: l.protocol,
												origin: l.origin,
												host: l.host,
												hostname: l.hostname,
												port: l.port,
												pathname: l.pathname,
												search: l.search
											};
										if (u.include_cookies && (p.cookies = function() {
												if ("undefined" == typeof document || !document.cookie) return null;
												for (var t = document.cookie.split(";"), e = {}, r = 0, n = 0; n < t.length; n++) {
													var o = t[n].split("=", 2);
													if (2 === o.length) {
														var i = o[0].replace(/^\s+/, "").replace(/\s+$/, "");
														e[i] = decodeURIComponent(o[1]);
														try {
															e[i] = JSON.parse(e[i])
														} catch (t) {}
														r++
													}
												}
												return r > 0 ? e : null
											}()), t._shouldAddHeadersToRequest(e, i.url)) {
											var f = {};
											e.inject(c.context(), a.FORMAT_HTTP_HEADERS, f), Object.keys(f).forEach(function(t) {
												i.headers.get(t) || i.headers.set(t, f[t])
											})
										}
										return c.log({
											event: "sending",
											method: i.method,
											url: i.url,
											openPayload: p
										}), c.addTags(p), s(i).then(function(t) {
											return t.ok || c.addTags({
												error: !0
											}), c.log({
												method: i.method,
												headers: function(t) {
													for (var e = {}, r = t.headers.entries(), n = 0; n < r.length; n++) {
														var i = o(r[n], 2),
															a = i[0],
															s = i[1];
														e[a] = s
													}
													return e
												}(t),
												status: t.status,
												statusText: t.statusText,
												responseType: t.type,
												url: t.url
											}), e.removeActiveRootSpan(c), c.finish(), t
										}).catch(function(t) {
											throw c.addTags({
												error: !0
											}), e.removeActiveRootSpan(c), c.log({
												event: "error",
												error: t
											}), c.finish(), t
										})
									}
								}
							}, {
								key: "_shouldTrace",
								value: function(t, e) {
									if (!t || !e) return !1;
									var r = t.options();
									return !r.disabled && !this._internalExclusions.some(function(t) {
										return t.test(e)
									}) && !r.fetch_url_exclusion_patterns.some(function(t) {
										return t.test(e)
									}) && !!r.fetch_url_inclusion_patterns.some(function(t) {
										return t.test(e)
									})
								}
							}, {
								key: "_shouldAddHeadersToRequest",
								value: function(t, e) {
									if (!t || !e) return !1;
									var r = t.options();
									return !r.disabled && !r.fetch_url_header_exclusion_patterns.some(function(t) {
										return t.test(e)
									}) && !!r.fetch_url_header_inclusion_patterns.some(function(t) {
										return t.test(e)
									})
								}
							}]), t
						}();
						t.exports = new u
					}, function(t, e, r) {
						"use strict";
						var n, o = function() {
								function t(t, e) {
									for (var r = 0; r < e.length; r++) {
										var n = e[r];
										n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n)
									}
								}
								return function(e, r, n) {
									return r && t(e.prototype, r), n && t(e, n), e
								}
							}(),
							a = (n = r(0)) && n.__esModule ? n : {
								default: n
							},
							s = function() {
								function t() {
									(function(t, e) {
										if (!(t instanceof e)) throw TypeError("Cannot call a class as a function")
									})(this, t), this._inited = !1, this._span = null
								}
								return o(t, [{
									key: "name",
									value: function() {
										return "instrument_page_load"
									}
								}, {
									key: "addOptions",
									value: function(t) {
										t.addOption("instrument_page_load", {
											type: "bool",
											defaultValue: !1
										})
									}
								}, {
									key: "start",
									value: function(t) {
										this._inited || (this._inited = !0, "object" == ("undefined" == typeof window ? "undefined" : i(window)) && "object" == ("undefined" == typeof document ? "undefined" : i(document)) && t.options().instrument_page_load && (this._ensureSpanStarted(t), document.addEventListener("readystatechange", this._handleReadyStateChange.bind(this))))
									}
								}, {
									key: "stop",
									value: function() {}
								}, {
									key: "_ensureSpanStarted",
									value: function(t) {
										this._span || (this._span = t.startSpan("document/load"), t.addActiveRootSpan(this._span))
									}
								}, {
									key: "_handleReadyStateChange",
									value: function() {
										if (this._span) {
											var t = this._span,
												e = document.readyState,
												r = void 0;
											"complete" === e && (r = {}, window.performance && performance.timing && (this._addTimingSpans(t, performance.timing), r["window.performance.timing"] = performance.timing)), t.logEvent("document.readystatechange " + e, r), "complete" === e && (t.tracer() && t.tracer().removeActiveRootSpan(t.tracer()), t.finish())
										}
									}
								}, {
									key: "_copyNavigatorProperties",
									value: function(t) {
										var e = {};
										for (var r in t) try {
											var n = t[r];
											switch (r) {
												case "plugins":
													for (var o = [], i = 0; i < n.length; i++) {
														var a = n.item(i);
														o.push({
															name: a.name,
															description: a.description
														})
													}
													e[r] = o;
													break;
												case "mimeTypes":
													for (var s = [], u = 0; u < n.length; u++) {
														var c = n.item(u);
														s.push({
															type: c.type,
															description: c.description,
															suffixes: c.suffixes
														})
													}
													e[r] = s;
													break;
												default:
													e[r] = n
											}
										} catch (t) {}
										return e
									}
								}, {
									key: "_addTimingSpans",
									value: function(t, e) {
										var r = this;
										t && (t.setTag("user_agent", navigator.userAgent), (0, a.default)(e, function(e, n) {
											if ("number" == typeof e && 0 !== e) {
												var o = void 0;
												"navigationStart" === n && "object" == ("undefined" == typeof navigator ? "undefined" : i(navigator)) && (o = {
													navigator: r._copyNavigatorProperties(navigator)
												}), t.log({
													message: "document " + n,
													payload: o
												}, e)
											}
										}), t.setBeginMicros(1e3 * e.navigationStart), t.tracer().startSpan("document/time_to_first_byte", {
											childOf: t
										}).setBeginMicros(1e3 * e.requestStart).setEndMicros(1e3 * e.responseStart).finish(), t.tracer().startSpan("document/response_transfer", {
											childOf: t
										}).setBeginMicros(1e3 * e.responseStart).setEndMicros(1e3 * e.responseEnd).finish(), t.tracer().startSpan("document/dom_load", {
											childOf: t
										}).setBeginMicros(1e3 * e.domLoading).setEndMicros(1e3 * e.domInteractive).finish())
									}
								}]), t
							}();
						t.exports = new s
					}, function(t, e, r) {
						"use strict";
						Object.defineProperty(e, "__esModule", {
							value: !0
						});
						var n = function() {
								function t(t, e) {
									for (var r = 0; r < e.length; r++) {
										var n = e[r];
										n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n)
									}
								}
								return function(e, r, n) {
									return r && t(e.prototype, r), n && t(e, n), e
								}
							}(),
							o = function() {
								function t() {
									(function(t, e) {
										if (!(t instanceof e)) throw TypeError("Cannot call a class as a function")
									})(this, t), this._host = "", this._port = 0, this._path = "", this._encryption = ""
								}
								return n(t, [{
									key: "ensureConnection",
									value: function(t) {
										this._host = t.collector_host, this._port = t.collector_port, this._path = t.collector_path, this._encryption = t.collector_encryption
									}
								}, {
									key: "report",
									value: function(t, e, r, n) {
										try {
											t ? this._reportAsyncScript(e, r, n) : this._reportAJAX(e, r, n)
										} catch (t) {
											return n(t, null)
										}
									}
								}, {
									key: "_reportAJAX",
									value: function(t, e, r) {
										var n = JSON.stringify(e.toThrift()),
											o = ("none" === this._encryption ? "http" : "https") + "://" + this._host + ":" + this._port + this._path + "/api/v0/reports",
											i = new XMLHttpRequest;
										i.open("POST", o), i.setRequestHeader("LightStep-Access-Token", t.getAccessToken()), i.setRequestHeader("Content-Type", "application/json"), i.onreadystatechange = function() {
											if (4 === this.readyState) {
												var t = null,
													e = null;
												if (200 !== this.status) t = Error("status code = " + this.status);
												else if (this.responseText) try {
													e = JSON.parse(this.responseText)
												} catch (e) {
													t = e
												} else t = Error("unexpected empty response");
												return r(t, e)
											}
										}, i.send(n)
									}
								}, {
									key: "_reportAsyncScript",
									value: function(t, e, r) {
										var n = JSON.stringify(t.toThrift()),
											o = JSON.stringify(e.toThrift()),
											i = ("none" === this._encryption ? "http" : "https") + "://" + this._host + ":" + this._port + this._path + "/_rpc/v1/reports/uri_encoded?auth=" + encodeURIComponent(n) + "&report=" + encodeURIComponent(o),
											a = document.createElement("script");
										a.async = !0, a.defer = !0, a.src = i, a.type = "text/javascript";
										var s = document.getElementsByTagName("head")[0];
										return s && s.appendChild(a), r(null, null)
									}
								}]), t
							}();
						e.default = o, t.exports = e.default
					}, function(t, e, r) {
						"use strict";
						t.exports = r(17).Thrift
					}, function(t, e, r) {
						"use strict";
						t.exports = r(17).crouton_thrift
					}, function(t, e, r) {
						"use strict";
						Object.defineProperty(e, "__esModule", {
							value: !0
						});
						var n, o = function() {
								function t(t, e) {
									for (var r = 0; r < e.length; r++) {
										var n = e[r];
										n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n)
									}
								}
								return function(e, r, n) {
									return r && t(e.prototype, r), n && t(e, n), e
								}
							}(),
							i = r(1),
							a = (n = r(0)) && n.__esModule ? n : {
								default: n
							},
							s = function(t) {
								if (t && t.__esModule) return t;
								var e = {};
								if (null != t)
									for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
								return e.default = t, e
							}(r(3)),
							u = function() {
								function t(e, r, n, o) {
									(function(t, e) {
										if (!(t instanceof e)) throw TypeError("Cannot call a class as a function")
									})(this, t), o instanceof Error && (o = {
										stack: o.stack,
										message: o.message
									}), this._logFieldKeyHardLimit = e, this._logFieldValueHardLimit = r, this._timestampMicros = n, this._fields = o, this._keysOverLimit = 0, this._valuesOverLimit = 0
								}
								return o(t, [{
									key: "_clearOverLimits",
									value: function() {
										this._keysOverLimit = 0, this._valuesOverLimit = 0
									}
								}, {
									key: "getNumKeysOverLimit",
									value: function() {
										return this._keysOverLimit
									}
								}, {
									key: "getNumValuesOverLimit",
									value: function() {
										return this._valuesOverLimit
									}
								}, {
									key: "toThrift",
									value: function() {
										var t = this;
										this._clearOverLimits();
										var e = [];
										return (0, a.default)(this._fields, function(r, n) {
											if (n && r) {
												var o = t.getFieldKey(n),
													a = t.getFieldValue(r);
												e.push(new i.crouton_thrift.KeyValue({
													Key: o,
													Value: a
												}))
											}
										}), new i.crouton_thrift.LogRecord({
											timestamp_micros: this._timestampMicros,
											fields: e
										})
									}
								}, {
									key: "getFieldKey",
									value: function(t) {
										var e = s.toString(t);
										return e.length > this._logFieldKeyHardLimit && (this._keysOverLimit += 1, e = e.substr(0, this._logFieldKeyHardLimit) + "..."), e
									}
								}, {
									key: "getFieldValue",
									value: function(t) {
										var e = null;
										if (t instanceof Error) try {
											e = JSON.stringify(t, Object.getOwnPropertyNames(t))
										} catch (t) {
											e = "Could not encode value. Exception: " + t
										} else if (t instanceof Object) try {
											e = JSON.stringify(t, null, "  ")
										} catch (t) {
											e = "Could not encode value. Exception: " + t
										} else e = s.toString(t);
										return e.length > this._logFieldValueHardLimit && (this._valuesOverLimit += 1, e = e.substr(0, this._logFieldValueHardLimit) + "..."), e
									}
								}]), t
							}();
						e.default = u, t.exports = e.default
					}, function(t, e, r) {
						"use strict";
						Object.defineProperty(e, "__esModule", {
							value: !0
						});
						var n = function() {
								function t(t, e) {
									for (var r = 0; r < e.length; r++) {
										var n = e[r];
										n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n)
									}
								}
								return function(e, r, n) {
									return r && t(e.prototype, r), n && t(e, n), e
								}
							}(),
							o = r(1),
							i = function() {
								function t(e) {
									(function(t, e) {
										if (!(t instanceof e)) throw TypeError("Cannot call a class as a function")
									})(this, t), this._accessToken = e
								}
								return n(t, [{
									key: "getAccessToken",
									value: function() {
										return void 0 === this._accessToken || null === this._accessToken || 0 === this._accessToken.length ? "empty" : this._accessToken
									}
								}, {
									key: "toThrift",
									value: function() {
										return new o.crouton_thrift.Auth({
											access_token: this._accessToken
										})
									}
								}]), t
							}();
						e.default = i, t.exports = e.default
					}, function(t, e, r) {
						"use strict";
						Object.defineProperty(e, "__esModule", {
							value: !0
						});
						var n, o = function() {
								function t(t, e) {
									for (var r = 0; r < e.length; r++) {
										var n = e[r];
										n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n)
									}
								}
								return function(e, r, n) {
									return r && t(e.prototype, r), n && t(e, n), e
								}
							}(),
							i = r(1),
							a = (n = r(0)) && n.__esModule ? n : {
								default: n
							},
							s = function(t) {
								if (t && t.__esModule) return t;
								var e = {};
								if (null != t)
									for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
								return e.default = t, e
							}(r(3)),
							u = function() {
								function t(e, r, n, o) {
									(function(t, e) {
										if (!(t instanceof e)) throw TypeError("Cannot call a class as a function")
									})(this, t), this._runtimeGUID = e, this._startMicros = r, this._componentName = n, this._attributes = o
								}
								return o(t, [{
									key: "toThrift",
									value: function() {
										var t = [];
										return (0, a.default)(this._attributes, function(e, r) {
											t.push(new i.crouton_thrift.KeyValue({
												Key: s.toString(r),
												Value: s.toString(e)
											}))
										}), new i.crouton_thrift.Runtime({
											guid: this._runtimeGUID,
											start_micros: this._startMicros,
											group_name: this._componentName,
											attrs: t
										})
									}
								}]), t
							}();
						e.default = u, t.exports = e.default
					}, function(t, e, r) {
						"use strict";
						Object.defineProperty(e, "__esModule", {
							value: !0
						});
						var n, o = function() {
								function t(t, e) {
									for (var r = 0; r < e.length; r++) {
										var n = e[r];
										n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n)
									}
								}
								return function(e, r, n) {
									return r && t(e.prototype, r), n && t(e, n), e
								}
							}(),
							i = r(1),
							a = (n = r(0)) && n.__esModule ? n : {
								default: n
							},
							s = function(t) {
								if (t && t.__esModule) return t;
								var e = {};
								if (null != t)
									for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
								return e.default = t, e
							}(r(3)),
							u = function() {
								function t(e, r, n, o, i, a, s) {
									(function(t, e) {
										if (!(t instanceof e)) throw TypeError("Cannot call a class as a function")
									})(this, t), this._runtime = e, this._oldestMicros = r, this._youngestMicros = n, this._spanRecords = o, this._internalLogs = i, this._counters = a, this._timestampOffsetMicros = s
								}
								return o(t, [{
									key: "getSpanRecords",
									value: function() {
										return this._spanRecords
									}
								}, {
									key: "getInternalLogs",
									value: function() {
										return this._internalLogs
									}
								}, {
									key: "getCounters",
									value: function() {
										return this._counters
									}
								}, {
									key: "toThrift",
									value: function() {
										var t = this;
										(0, a.default)(this._spanRecords, function(e) {
											e.runtime_guid = t._runtimeGUID
										});
										var e = [];
										(0, a.default)(this._counters, function(t, r) {
											0 !== t && e.push(new i.crouton_thrift.MetricsSample({
												name: s.toString(r),
												double_value: s.toNumber(t)
											}))
										});
										var r = [];
										return (0, a.default)(this._spanRecords, function(t) {
											r.push(t._toThrift())
										}), new i.crouton_thrift.ReportRequest({
											runtime: this._runtime.toThrift(),
											oldest_micros: this._oldestMicros,
											youngest_micros: this._youngestMicros,
											span_records: r,
											internal_logs: this._internalLogs,
											internal_metrics: new i.crouton_thrift.Metrics({
												counts: e
											}),
											timestamp_offset_micros: this._timestampOffsetMicros
										})
									}
								}]), t
							}();
						e.default = u, t.exports = e.default
					}, function(t, e, r) {
						"use strict";
						Object.defineProperty(e, "__esModule", {
							value: !0
						});
						var n = function() {
								function t(t, e) {
									for (var r = 0; r < e.length; r++) {
										var n = e[r];
										n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n)
									}
								}
								return function(e, r, n) {
									return r && t(e.prototype, r), n && t(e, n), e
								}
							}(),
							o = function() {
								function t(e, r) {
									(function(t, e) {
										if (!(t instanceof e)) throw TypeError("Cannot call a class as a function")
									})(this, t), this._tracer = e, this._name = r
								}
								return n(t, [{
									key: "inject",
									value: function(t, e) {
										return this._tracer._error("Unsupported format: " + this._name), null
									}
								}, {
									key: "extract",
									value: function(t) {
										this._tracer._error("Unsupported format: " + this._name)
									}
								}]), t
							}();
						e.default = o, t.exports = e.default
					}, function(t, e, r) {
						"use strict";
						var n, o = function() {
								function t(t, e) {
									for (var r = 0; r < e.length; r++) {
										var n = e[r];
										n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n)
									}
								}
								return function(e, r, n) {
									return r && t(e.prototype, r), n && t(e, n), e
								}
							}(),
							i = (n = r(0)) && n.__esModule ? n : {
								default: n
							},
							a = function() {
								function t(e) {
									(function(t, e) {
										if (!(t instanceof e)) throw TypeError("Cannot call a class as a function")
									})(this, t), this._nowMicros = e.nowMicros, this._localStoreGet = e.localStoreGet, this._localStoreSet = e.localStoreSet, this._samples = [], this._currentOffsetMicros = 0, this._currentOffsetAge = 8;
									var r = this._localStoreGet();
									r && r.timestamp_micros && r.timestamp_micros > this._nowMicros() - 36e8 && (this._samples = r.samples.slice(-8)), this.update()
								}
								return o(t, [{
									key: "addSample",
									value: function(t, e, r, n) {
										var o = Number.MAX_VALUE,
											i = 0;
										t > 0 && e > 0 && r > 0 && n > 0 && (o = n - t - (r - e), i = (e - t + (r - n)) / 2), 8 === this._samples.length && this._samples.shift(), this._samples.push({
											delayMicros: o,
											offsetMicros: i
										}), this._currentOffsetAge++, this._localStoreSet({
											timestamp_micros: this._nowMicros(),
											samples: this._samples
										}), this.update()
									}
								}, {
									key: "update",
									value: function() {
										var t = Number.MAX_VALUE,
											e = 0;
										if ((0, i.default)(this._samples, function(r) {
												r.delayMicros < t && (t = r.delayMicros, e = r.offsetMicros)
											}), e !== this._currentOffsetMicros) {
											var r = 0;
											(0, i.default)(this._samples, function(t) {
												r += Math.pow(e - t.offsetMicros, 2)
											}), r = Math.sqrt(r / this._samples.length), (this._currentOffsetAge > 7 || Math.abs(this._currentOffsetMicros - e) < 3 * r) && (this._currentOffsetMicros = e, this._currentOffsetAge = 0)
										}
									}
								}, {
									key: "offsetMicros",
									value: function() {
										return Math.floor(this._currentOffsetMicros)
									}
								}, {
									key: "isReady",
									value: function() {
										return this._samples.length > 3
									}
								}, {
									key: "activeSampleCount",
									value: function() {
										return this._samples.length
									}
								}]), t
							}();
						t.exports = a
					}, function(t, e, r) {
						"use strict";
						var n = function() {
								function t(t, e) {
									for (var r = 0; r < e.length; r++) {
										var n = e[r];
										n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n)
									}
								}
								return function(e, r, n) {
									return r && t(e.prototype, r), n && t(e, n), e
								}
							}(),
							o = r(1),
							i = r(6),
							a = r(3),
							s = function() {
								function t(e) {
									(function(t, e) {
										if (!(t instanceof e)) throw TypeError("Cannot call a class as a function")
									})(this, t), this._runtime = e, this._record = new o.crouton_thrift.LogRecord({
										timestamp_micros: e._platform.nowMicros(),
										runtime_guid: null,
										span_guid: null,
										stable_name: null,
										message: null,
										level: null,
										thread_id: null,
										filename: null,
										line_number: null,
										stack_frames: null,
										payload_json: null,
										error_flag: null
									})
								}
								return n(t, [{
									key: "record",
									value: function() {
										return this._record
									}
								}, {
									key: "end",
									value: function() {
										this._runtime._addLogRecord(this._record)
									}
								}, {
									key: "timestamp",
									value: function(t) {
										return this._record.timestamp_micros = a.toNumber(t), this
									}
								}, {
									key: "message",
									value: function(t) {
										return this._record.message = a.toString(t), this
									}
								}, {
									key: "level",
									value: function(t) {
										return this._record.level = i.LOG_LEVEL_TO_STRING[t] || null, t >= i.LOG_ERROR && this.error(!0), this
									}
								}, {
									key: "span",
									value: function(t) {
										return void 0 !== t && (this._record.span_guid = a.toString(t)), this
									}
								}, {
									key: "name",
									value: function(t) {
										return this._record.stable_name = a.toString(t), this
									}
								}, {
									key: "error",
									value: function(t) {
										return this._record.error_flag = a.toBoolean(t), this
									}
								}, {
									key: "payload",
									value: function(t) {
										return void 0 !== t && (this._record.payload_json = this._encodePayload(t)), this
									}
								}, {
									key: "_encodePayload",
									value: function(t) {
										var e = null;
										try {
											e = JSON.stringify(t)
										} catch (t) {
											return
										}
										return e
									}
								}]), t
							}();
						t.exports = s
					}, function(t, e, r) {
						"use strict";
						var n, o = function() {
								function t(t, e) {
									for (var r = 0; r < e.length; r++) {
										var n = e[r];
										n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n)
									}
								}
								return function(e, r, n) {
									return r && t(e.prototype, r), n && t(e, n), e
								}
							}(),
							i = (n = r(0)) && n.__esModule ? n : {
								default: n
							},
							a = function() {
								function t() {
									(function(t, e) {
										if (!(t instanceof e)) throw TypeError("Cannot call a class as a function")
									})(this, t), this.options = {}
								}
								return o(t, [{
									key: "setOptions",
									value: function(t) {
										var e = this;
										(0, i.default)(t, function(t, r) {
											e.options[r] = t
										})
									}
								}]), t
							}();
						t.exports = new a
					}, function(t) {
						t.exports = {
							name: "lightstep-tracer",
							version: "0.30.2-no-protobuf",
							main: "index.js",
							types: "index.d.ts",
							browser: "browser.js",
							engines: {
								node: ">=8.0.0"
							},
							scripts: {
								test: "rm -f test/results/*.json && node node_modules/mocha/bin/mocha -c test/unittest_node.js",
								version: "make build && git add -A dist"
							},
							license: "MIT",
							repository: {
								type: "git",
								url: "http://github.com/lightstep/lightstep-tracer-javascript.git"
							},
							dependencies: {
								async: "1.5.0",
								eventemitter3: "1.1.1",
								hex2dec: "1.0.1",
								opentracing: "^0.14.4",
								"source-map-support": "0.3.3",
								thrift: "0.13.0"
							},
							devDependencies: {
								"babel-cli": "6.14.0",
								"babel-core": "^6.26.3",
								"babel-loader": "7",
								"babel-plugin-add-module-exports": "^1.0.0",
								"babel-plugin-check-es2015-constants": "6.7.2",
								"babel-plugin-syntax-object-rest-spread": "^6.13.0",
								"babel-plugin-transform-es2015-arrow-functions": "6.5.2",
								"babel-plugin-transform-es2015-block-scoped-functions": "6.6.5",
								"babel-plugin-transform-es2015-block-scoping": "^6.26.0",
								"babel-plugin-transform-es2015-classes": "6.6.5",
								"babel-plugin-transform-es2015-computed-properties": "6.6.5",
								"babel-plugin-transform-es2015-destructuring": "6.6.5",
								"babel-plugin-transform-es2015-duplicate-keys": "6.6.4",
								"babel-plugin-transform-es2015-literals": "6.5.0",
								"babel-plugin-transform-es2015-modules-commonjs": "6.7.4",
								"babel-plugin-transform-es2015-object-super": "6.6.5",
								"babel-plugin-transform-es2015-parameters": "6.7.0",
								"babel-plugin-transform-es2015-spread": "^6.6.5",
								"babel-plugin-transform-es2015-sticky-regex": "6.5.0",
								"babel-plugin-transform-es2015-template-literals": "6.6.5",
								"babel-plugin-transform-es2015-unicode-regex": "6.5.0",
								"babel-plugin-transform-object-rest-spread": "^6.26.0",
								"babel-polyfill": "6.3.14",
								"babel-preset-es2015": "6.3.13",
								chai: "3.4.1",
								clone: "1.0.2",
								colors: "1.1.2",
								eslint: "^6.8.0",
								"eslint-config-airbnb": "^18.0.1",
								"eslint-plugin-import": "^2.20.0",
								"eslint-plugin-jsx-a11y": "^6.2.3",
								"eslint-plugin-react": "^7.18.0",
								express: "^4.16.3",
								"fetch-mock": "^9.2.1",
								istanbul: "^0.4.5",
								mocha: "^5.2.0",
								shelljs: "0.5.3",
								sinon: "^9.0.1",
								"sprintf-js": "1.0.3",
								underscore: "1.8.3",
								"watch-trigger": "0.0.5",
								webpack: "^4.25.1",
								"webpack-cli": "^3.1.2"
							}
						}
					}, function(t, e, r) {
						"use strict";
						var n = function() {
								function t(t, e) {
									for (var r = 0; r < e.length; r++) {
										var n = e[r];
										n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n)
									}
								}
								return function(e, r, n) {
									return r && t(e.prototype, r), n && t(e, n), e
								}
							}(),
							o = r(6),
							i = function() {
								function t() {
									(function(t, e) {
										if (!(t instanceof e)) throw TypeError("Cannot call a class as a function")
									})(this, t), this._enabled = !1, this._tracer = null, this._optionsCb = this._handleOptions.bind(this), this._logAddedCb = this._handleLogAdded.bind(this)
								}
								return n(t, [{
									key: "name",
									value: function() {
										return "log_to_console"
									}
								}, {
									key: "addOptions",
									value: function(t) {
										t.addOption("log_to_console", {
											type: "bool",
											defaultValue: !1
										}), t.on("options", this._optionsCb)
									}
								}, {
									key: "start",
									value: function(t, e) {
										this._tracer = t
									}
								}, {
									key: "stop",
									value: function() {
										this._tracer.removeListener("options", this._optionsCb)
									}
								}, {
									key: "_handleOptions",
									value: function(t, e, r) {
										var n = e.log_to_console;
										this._enabled !== n && (this._enabled = n, this._enabled ? r.on("log_added", this._logAddedCb) : r.removeListener("log_added", this._logAddedCb))
									}
								}, {
									key: "_handleLogAdded",
									value: function(t) {
										var e = o.LOG_STRING_TO_LEVEL[t.level],
											r = t.message;
										if (r) {
											var n = t.payload_json;
											if (n) try {
												n = JSON.parse(n)
											} catch (t) {}
											switch (e) {
												case o.LOG_ERROR:
												case o.LOG_FATAL:
													void 0 !== n ? console.error(r, n) : console.error(r);
													break;
												case o.LOG_WARN:
													void 0 !== n ? console.warn(r, n) : console.warn(r);
													break;
												case o.LOG_INFO:
												default:
													void 0 !== n ? console.log(r, n) : console.log(r)
											}
										}
									}
								}]), t
							}();
						t.exports = new i
					}, function(t, e, r) {
						"use strict";
						Object.defineProperty(e, "__esModule", {
							value: !0
						});
						var n, o = function() {
								function t(t, e) {
									for (var r = 0; r < e.length; r++) {
										var n = e[r];
										n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n)
									}
								}
								return function(e, r, n) {
									return r && t(e.prototype, r), n && t(e, n), e
								}
							}(),
							a = (n = r(7)) && n.__esModule ? n : {
								default: n
							},
							s = function(t) {
								function e(t) {
									! function(t, e) {
										if (!(t instanceof e)) throw TypeError("Cannot call a class as a function")
									}(this, e);
									var r = function(t, e) {
										if (!t) throw ReferenceError("this hasn't been initialised - super() hasn't been called");
										return e && ("object" == (void 0 === e ? "undefined" : i(e)) || "function" == typeof e) ? e : t
									}(this, Object.getPrototypeOf(e).call(this, t));
									return r._carrierPrefix = "x-b3-", r
								}
								return function(t, e) {
									if ("function" != typeof e && null !== e) throw TypeError("Super expression must either be null or a function, not " + (void 0 === e ? "undefined" : i(e)));
									t.prototype = Object.create(e && e.prototype, {
										constructor: {
											value: t,
											enumerable: !1,
											writable: !0,
											configurable: !0
										}
									}), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
								}(e, a.default), o(e, [{
									key: "inject",
									value: function(t, e) {
										var r = this;
										if (e) {
											if ("object" == (void 0 === e ? "undefined" : i(e))) {
												var n = t.traceGUID();
												return 32 === n.length && "0000000000000000" === n.substr(0, 16) && (n = n.substr(16)), e[this._carrierPrefix + "spanid"] = t._guid, e[this._carrierPrefix + "traceid"] = n, t._sampled ? e[this._carrierPrefix + "sampled"] = "1" : e[this._carrierPrefix + "sampled"] = "0", t.forEachBaggageItem(function(t, n) {
													e["" + r._baggagePrefix + t] = n
												}), e
											}
											this._tracer._error("Unexpected '" + (void 0 === e ? "undefined" : i(e)) + "' FORMAT_TEXT_MAP carrier in call to inject")
										} else this._tracer._error("Unexpected null carrier in call to inject")
									}
								}]), e
							}();
						e.default = s, t.exports = e.default
					}, function(t, e, r) {
						"use strict";
						Object.defineProperty(e, "__esModule", {
							value: !0
						});
						var n = function() {
								function t(t, e) {
									for (var r = 0; r < e.length; r++) {
										var n = e[r];
										n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n)
									}
								}
								return function(e, r, n) {
									return r && t(e.prototype, r), n && t(e, n), e
								}
							}(),
							o = u(r(0)),
							a = u(r(5)),
							s = u(r(7));

						function u(t) {
							return t && t.__esModule ? t : {
								default: t
							}
						}
						var c = function() {
							function t(e) {
								(function(t, e) {
									if (!(t instanceof e)) throw TypeError("Cannot call a class as a function")
								})(this, t), this._tracer = e, this._baggagePrefix = s.default, this._carrierPrefix = "x-datadog-"
							}
							return n(t, [{
								key: "inject",
								value: function(t, e) {
									var r = this;
									if (e) {
										if ("object" == (void 0 === e ? "undefined" : i(e))) return e[this._carrierPrefix + "parent-id"] = parseInt(t._guid, 16).toString(), e[this._carrierPrefix + "trace-id"] = parseInt(t.traceGUID(), 16).toString(), t._sampled ? e[this._carrierPrefix + "sampling-priority"] = "1" : e[this._carrierPrefix + "sampling-priority"] = "0", t.forEachBaggageItem(function(t, n) {
											e["" + r._baggagePrefix + t] = n
										}), e;
										this._tracer._error("Unexpected '" + (void 0 === e ? "undefined" : i(e)) + "' FORMAT_TEXT_MAP carrier in call to inject")
									} else this._tracer._error("Unexpected null carrier in call to inject")
								}
							}, {
								key: "extract",
								value: function(t) {
									var e = this,
										r = 0,
										n = null,
										i = null,
										s = !0;
									if ((0, o.default)(t, function(t, o) {
											if ((o = o.toLowerCase()).substr(0, e._carrierPrefix.length) === e._carrierPrefix) switch (o.substr(e._carrierPrefix.length)) {
												case "trace-id":
													r++, i = parseInt(t, 10).toString(16);
													break;
												case "parent-id":
													r++, n = parseInt(t, 10).toString(16);
													break;
												case "sampling-priority":
													0 === t && (s = !1);
													break;
												default:
													e._tracer._error("Unrecognized carrier key '" + o + "' with recognized prefix. Ignoring.")
											}
										}), 0 === r) return null;
									if (r < 2) return this._tracer._error("Only found a partial SpanContext: " + t), null;
									var u = new a.default(n, i, s);
									return (0, o.default)(t, function(t, r) {
										if ((r = r.toLowerCase()).substr(0, e._baggagePrefix.length) === e._baggagePrefix) {
											var n = r.substr(e._baggagePrefix.length);
											u.setBaggageItem(n, t)
										}
									}), u
								}
							}]), t
						}();
						e.default = c, t.exports = e.default
					}])
				}, "object" == i(e) && "object" == i(t) ? t.exports = o() : "function" == typeof define && define.amd ? define([], o) : "object" == i(e) ? e.lightstep = o() : n.lightstep = o()
			},
			234: function(t, e) {
				"use strict";
				Object.defineProperty(e, "__esModule", {
					value: !0
				}), e.default = function(t) {
					this.buffer = t
				}
			},
			6: function(t, e) {
				"use strict";
				Object.defineProperty(e, "__esModule", {
					value: !0
				}), e.FORMAT_BINARY = "binary", e.FORMAT_TEXT_MAP = "text_map", e.FORMAT_HTTP_HEADERS = "http_headers", e.REFERENCE_CHILD_OF = "child_of", e.REFERENCE_FOLLOWS_FROM = "follows_from"
			},
			468: function(t, e) {
				"use strict";
				Object.defineProperty(e, "__esModule", {
					value: !0
				}), e.SPAN_KIND = "span.kind", e.SPAN_KIND_RPC_CLIENT = "client", e.SPAN_KIND_RPC_SERVER = "server", e.SPAN_KIND_MESSAGING_PRODUCER = "producer", e.SPAN_KIND_MESSAGING_CONSUMER = "consumer", e.ERROR = "error", e.COMPONENT = "component", e.SAMPLING_PRIORITY = "sampling.priority", e.PEER_SERVICE = "peer.service", e.PEER_HOSTNAME = "peer.hostname", e.PEER_ADDRESS = "peer.address", e.PEER_HOST_IPV4 = "peer.ipv4", e.PEER_HOST_IPV6 = "peer.ipv6", e.PEER_PORT = "peer.port", e.HTTP_URL = "http.url", e.HTTP_METHOD = "http.method", e.HTTP_STATUS_CODE = "http.status_code", e.MESSAGE_BUS_DESTINATION = "message_bus.destination", e.DB_INSTANCE = "db.instance", e.DB_STATEMENT = "db.statement", e.DB_TYPE = "db.type", e.DB_USER = "db.user"
			},
			239: function(t, e, r) {
				"use strict";
				Object.defineProperty(e, "__esModule", {
					value: !0
				});
				var n = r(6),
					o = r(679),
					i = r(604);
				e.childOf = function(t) {
					return t instanceof i.default && (t = t.context()), new o.default(n.REFERENCE_CHILD_OF, t)
				}, e.followsFrom = function(t) {
					return t instanceof i.default && (t = t.context()), new o.default(n.REFERENCE_FOLLOWS_FROM, t)
				}
			},
			427: function(t, e, r) {
				"use strict";
				var n, o = this && this.__extends || (n = function(t, e) {
					return (n = Object.setPrototypeOf || ({
						__proto__: []
					}) instanceof Array && function(t, e) {
						t.__proto__ = e
					} || function(t, e) {
						for (var r in e) e.hasOwnProperty(r) && (t[r] = e[r])
					})(t, e)
				}, function(t, e) {
					function r() {
						this.constructor = t
					}
					n(t, e), t.prototype = null === e ? Object.create(e) : (r.prototype = e.prototype, new r)
				});
				Object.defineProperty(e, "__esModule", {
					value: !0
				});
				var i = r(242),
					a = new i.default,
					s = null,
					u = new(function(t) {
						function e() {
							return null !== t && t.apply(this, arguments) || this
						}
						return o(e, t), e.prototype.startSpan = function() {
							var t = s || a;
							return t.startSpan.apply(t, arguments)
						}, e.prototype.inject = function() {
							var t = s || a;
							return t.inject.apply(t, arguments)
						}, e.prototype.extract = function() {
							var t = s || a;
							return t.extract.apply(t, arguments)
						}, e
					}(i.default));
				e.initGlobalTracer = function(t) {
					s = t
				}, e.globalTracer = function() {
					return u
				}
			},
			801: function(t, e, r) {
				"use strict";

				function n(t) {
					for (var r in t) e.hasOwnProperty(r) || (e[r] = t[r])
				}
				Object.defineProperty(e, "__esModule", {
					value: !0
				});
				var o = r(234);
				e.BinaryCarrier = o.default;
				var i = r(468);
				e.Tags = i;
				var a = r(769),
					s = r(679);
				e.Reference = s.default;
				var u = r(604);
				e.Span = u.default;
				var c = r(888);
				e.SpanContext = c.default;
				var l = r(242);
				e.Tracer = l.Tracer;
				var p = r(887);
				e.MockTracer = p.MockTracer, n(r(427)), n(r(6)), n(r(239)), a.initialize()
			},
			887: function(t, e, r) {
				"use strict";
				Object.defineProperty(e, "__esModule", {
					value: !0
				});
				var n = r(509);
				e.MockContext = n.default;
				var o = r(284);
				e.MockSpan = o.default;
				var i = r(706);
				e.MockTracer = i.default
			},
			509: function(t, e, r) {
				"use strict";
				var n, o = this && this.__extends || (n = function(t, e) {
					return (n = Object.setPrototypeOf || ({
						__proto__: []
					}) instanceof Array && function(t, e) {
						t.__proto__ = e
					} || function(t, e) {
						for (var r in e) e.hasOwnProperty(r) && (t[r] = e[r])
					})(t, e)
				}, function(t, e) {
					function r() {
						this.constructor = t
					}
					n(t, e), t.prototype = null === e ? Object.create(e) : (r.prototype = e.prototype, new r)
				});
				Object.defineProperty(e, "__esModule", {
					value: !0
				});
				var i = function(t) {
					function e(e) {
						var r = t.call(this) || this;
						return r._span = e, r
					}
					return o(e, t), e.prototype.span = function() {
						return this._span
					}, e
				}(r(888).SpanContext);
				e.MockContext = i, e.default = i
			},
			231: function(t, e) {
				"use strict";
				Object.defineProperty(e, "__esModule", {
					value: !0
				});
				var r = function() {
					function t(t) {
						var e = this;
						this.spans = t, this.spansByUUID = {}, this.spansByTag = {}, this.debugSpans = [], this.unfinishedSpans = [], t.forEach(function(t) {
							0 === t._finishMs && e.unfinishedSpans.push(t), e.spansByUUID[t.uuid()] = t, e.debugSpans.push(t.debug());
							var r = t.tags();
							Object.keys(r).forEach(function(n) {
								var o = r[n];
								e.spansByTag[n] = e.spansByTag[n] || {}, e.spansByTag[n][o] = e.spansByTag[n][o] || [], e.spansByTag[n][o].push(t)
							})
						})
					}
					return t.prototype.firstSpanWithTagValue = function(t, e) {
						var r = this.spansByTag[t];
						if (!r) return null;
						var n = r[e];
						return n ? n[0] : null
					}, t
				}();
				e.MockReport = r, e.default = r
			},
			284: function(t, e, r) {
				"use strict";
				var n, o = this && this.__extends || (n = function(t, e) {
					return (n = Object.setPrototypeOf || ({
						__proto__: []
					}) instanceof Array && function(t, e) {
						t.__proto__ = e
					} || function(t, e) {
						for (var r in e) e.hasOwnProperty(r) && (t[r] = e[r])
					})(t, e)
				}, function(t, e) {
					function r() {
						this.constructor = t
					}
					n(t, e), t.prototype = null === e ? Object.create(e) : (r.prototype = e.prototype, new r)
				});
				Object.defineProperty(e, "__esModule", {
					value: !0
				});
				var i = r(801),
					a = r(509),
					s = function(t) {
						function e(e) {
							var r = t.call(this) || this;
							return r._mockTracer = e, r._uuid = r._generateUUID(), r._startMs = Date.now(), r._finishMs = 0, r._operationName = "", r._tags = {}, r._logs = [], r
						}
						return o(e, t), e.prototype._context = function() {
							return new a.default(this)
						}, e.prototype._setOperationName = function(t) {
							this._operationName = t
						}, e.prototype._addTags = function(t) {
							for (var e = Object.keys(t), r = 0; r < e.length; r++) {
								var n = e[r];
								this._tags[n] = t[n]
							}
						}, e.prototype._log = function(t, e) {
							this._logs.push({
								fields: t,
								timestamp: e
							})
						}, e.prototype._finish = function(t) {
							this._finishMs = t || Date.now()
						}, e.prototype.uuid = function() {
							return this._uuid
						}, e.prototype.operationName = function() {
							return this._operationName
						}, e.prototype.durationMs = function() {
							return this._finishMs - this._startMs
						}, e.prototype.tags = function() {
							return this._tags
						}, e.prototype.tracer = function() {
							return this._mockTracer
						}, e.prototype._generateUUID = function() {
							return "" + ("00000000" + Math.abs(0xffffffff * Math.random() | 0).toString(16)).substr(-8) + ("00000000" + Math.abs(0xffffffff * Math.random() | 0).toString(16)).substr(-8)
						}, e.prototype.addReference = function(t) {}, e.prototype.debug = function() {
							var t = {
								uuid: this._uuid,
								operation: this._operationName,
								millis: [this._finishMs - this._startMs, this._startMs, this._finishMs]
							};
							return Object.keys(this._tags).length && (t.tags = this._tags), t
						}, e
					}(i.Span);
				e.MockSpan = s, e.default = s
			},
			706: function(t, e, r) {
				"use strict";
				var n, o = this && this.__extends || (n = function(t, e) {
					return (n = Object.setPrototypeOf || ({
						__proto__: []
					}) instanceof Array && function(t, e) {
						t.__proto__ = e
					} || function(t, e) {
						for (var r in e) e.hasOwnProperty(r) && (t[r] = e[r])
					})(t, e)
				}, function(t, e) {
					function r() {
						this.constructor = t
					}
					n(t, e), t.prototype = null === e ? Object.create(e) : (r.prototype = e.prototype, new r)
				});
				Object.defineProperty(e, "__esModule", {
					value: !0
				});
				var i = r(801),
					a = r(231),
					s = r(284),
					u = function(t) {
						function e() {
							var e = t.call(this) || this;
							return e._spans = [], e
						}
						return o(e, t), e.prototype._startSpan = function(t, e) {
							var r = this._allocSpan();
							if (r.setOperationName(t), this._spans.push(r), e.references)
								for (var n = 0, o = e.references; n < o.length; n++) {
									var i = o[n];
									r.addReference(i)
								}
							return r._startStack = Error().stack, r
						}, e.prototype._inject = function(t, e, r) {
							throw Error("NOT YET IMPLEMENTED")
						}, e.prototype._extract = function(t, e) {
							throw Error("NOT YET IMPLEMENTED")
						}, e.prototype._allocSpan = function() {
							return new s.default(this)
						}, e.prototype.clear = function() {
							this._spans = []
						}, e.prototype.report = function() {
							return new a.default(this._spans)
						}, e
					}(i.Tracer);
				e.MockTracer = u, e.default = u
			},
			769: function(t, e, r) {
				"use strict";
				Object.defineProperty(e, "__esModule", {
					value: !0
				});
				var n = r(604),
					o = r(888),
					i = r(242);
				e.tracer = null, e.spanContext = null, e.span = null, e.initialize = function() {
					e.tracer = new i.default, e.span = new n.default, e.spanContext = new o.default
				}
			},
			679: function(t, e, r) {
				"use strict";
				Object.defineProperty(e, "__esModule", {
					value: !0
				});
				var n = r(604),
					o = function() {
						function t(t, e) {
							this._type = t, this._referencedContext = e instanceof n.default ? e.context() : e
						}
						return t.prototype.type = function() {
							return this._type
						}, t.prototype.referencedContext = function() {
							return this._referencedContext
						}, t
					}();
				e.default = o
			},
			604: function(t, e, r) {
				"use strict";
				Object.defineProperty(e, "__esModule", {
					value: !0
				});
				var n = r(769),
					o = function() {
						function t() {}
						return t.prototype.context = function() {
							return this._context()
						}, t.prototype.tracer = function() {
							return this._tracer()
						}, t.prototype.setOperationName = function(t) {
							return this._setOperationName(t), this
						}, t.prototype.setBaggageItem = function(t, e) {
							return this._setBaggageItem(t, e), this
						}, t.prototype.getBaggageItem = function(t) {
							return this._getBaggageItem(t)
						}, t.prototype.setTag = function(t, e) {
							var r;
							return this._addTags(((r = {})[t] = e, r)), this
						}, t.prototype.addTags = function(t) {
							return this._addTags(t), this
						}, t.prototype.log = function(t, e) {
							return this._log(t, e), this
						}, t.prototype.logEvent = function(t, e) {
							return this._log({
								event: t,
								payload: e
							})
						}, t.prototype.finish = function(t) {
							this._finish(t)
						}, t.prototype._context = function() {
							return n.spanContext
						}, t.prototype._tracer = function() {
							return n.tracer
						}, t.prototype._setOperationName = function(t) {}, t.prototype._setBaggageItem = function(t, e) {}, t.prototype._getBaggageItem = function(t) {}, t.prototype._addTags = function(t) {}, t.prototype._log = function(t, e) {}, t.prototype._finish = function(t) {}, t
					}();
				e.Span = o, e.default = o
			},
			888: function(t, e) {
				"use strict";
				Object.defineProperty(e, "__esModule", {
					value: !0
				});
				var r = function() {
					function t() {}
					return t.prototype.toTraceId = function() {
						return ""
					}, t.prototype.toSpanId = function() {
						return ""
					}, t
				}();
				e.SpanContext = r, e.default = r
			},
			242: function(t, e, r) {
				"use strict";
				Object.defineProperty(e, "__esModule", {
					value: !0
				});
				var n = r(239),
					o = r(769),
					i = r(604),
					a = function() {
						function t() {}
						return t.prototype.startSpan = function(t, e) {
							if (void 0 === e && (e = {}), e.childOf) {
								var r = n.childOf(e.childOf);
								e.references ? e.references.push(r) : e.references = [r], delete e.childOf
							}
							return this._startSpan(t, e)
						}, t.prototype.inject = function(t, e, r) {
							return t instanceof i.default && (t = t.context()), this._inject(t, e, r)
						}, t.prototype.extract = function(t, e) {
							return this._extract(t, e)
						}, t.prototype._startSpan = function(t, e) {
							return o.span
						}, t.prototype._inject = function(t, e, r) {}, t.prototype._extract = function(t, e) {
							return o.spanContext
						}, t
					}();
				e.Tracer = a, e.default = a
			}
		},
		e = {};

	function r(n) {
		var o = e[n];
		if (void 0 !== o) return o.exports;
		var i = e[n] = {
			id: n,
			loaded: !1,
			exports: {}
		};
		return t[n].call(i.exports, i, i.exports, r), i.loaded = !0, i.exports
	}
	r.n = function(t) {
			var e = t && t.__esModule ? function() {
				return t.default
			} : function() {
				return t
			};
			return r.d(e, {
				a: e
			}), e
		}, r.d = function(t, e) {
			for (var n in e) r.o(e, n) && !r.o(t, n) && Object.defineProperty(t, n, {
				enumerable: !0,
				get: e[n]
			})
		}, r.o = function(t, e) {
			return Object.prototype.hasOwnProperty.call(t, e)
		}, r.r = function(t) {
			"undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, {
				value: "Module"
			}), Object.defineProperty(t, "__esModule", {
				value: !0
			})
		}, r.nmd = function(t) {
			return t.paths = [], t.children || (t.children = []), t
		}, r.rv = function() {
			return "1.2.8"
		}, r.ruid = "bundler=rspack@1.2.8",
		function() {
			"use strict";
			var t, e, n = {};

			function o(t, e) {
				(null == e || e > t.length) && (e = t.length);
				for (var r = 0, n = Array(e); r < e; r++) n[r] = t[r];
				return n
			}
			r.r(n), r.d(n, {
				apiSiteRequestValidator: function() {
					return A
				},
				bootstrapTracer: function() {
					return T
				},
				extract: function() {
					return w
				},
				inject: function() {
					return M
				},
				instrumentation: function() {
					return _
				},
				isTracerEnabled: function() {
					return L
				},
				logs: function() {
					return S
				},
				tags: function() {
					return k
				},
				tracerConstants: function() {
					return I
				}
			});
			var i = function(t, e) {
					var r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : window;
					if ("string" == typeof t) r[t] = e;
					else {
						var n = function(t) {
								if (Array.isArray(t)) return o(t)
							}(t) || function(t) {
								if ("undefined" != typeof Symbol && null != t[Symbol.iterator] || null != t["@@iterator"]) return Array.from(t)
							}(t) || function(t, e) {
								if (t) {
									if ("string" == typeof t) return o(t, void 0);
									var r = Object.prototype.toString.call(t).slice(8, -1);
									if ("Object" === r && t.constructor && (r = t.constructor.name), "Map" === r || "Set" === r) return Array.from(r);
									if ("Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return o(t, e)
								}
							}(t) || function() {
								throw TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
							}(),
							i = n.pop(),
							a = r,
							s = !0,
							u = !1,
							c = void 0;
						try {
							for (var l, p = n[Symbol.iterator](); !(s = (l = p.next()).done); s = !0) {
								var f, _, d = l.value;
								null !== (_ = (f = a)[d]) && void 0 !== _ || (f[d] = {}), a = a[d]
							}
						} catch (t) {
							u = !0, c = t
						} finally {
							try {
								s || null == p.return || p.return()
							} finally {
								if (u) throw c
							}
						}
						a[i] = e
					}
				},
				a = {
					environments: {
						dev: "Development",
						prod: "Production"
					},
					metaData: function() {
						var t, e, r = document.querySelector('meta[name="roblox-tracer-meta-data"]');
						if (null == r) return {
							accessToken: null,
							serviceName: "Web",
							tracerEnabled: !1,
							apiSitesRequestAllowList: "",
							sampleRate: 0,
							isInstrumentPagePerformanceEnabled: !1
						};
						var n = null != r.dataset.sampleRate ? parseInt(r.dataset.sampleRate, 10) : 0;
						return {
							accessToken: r.dataset.accessToken,
							serviceName: null !== (t = r.dataset.serviceName) && void 0 !== t ? t : "Web",
							tracerEnabled: "true" === r.dataset.tracerEnabled,
							apiSitesRequestAllowList: null !== (e = r.dataset.apiSitesRequestAllowList) && void 0 !== e ? e : "",
							sampleRate: Number.isNaN(n) ? 0 : n,
							isInstrumentPagePerformanceEnabled: "true" === r.dataset.isInstrumentPagePerformanceEnabled
						}
					}(),
					pageName: null !== (e = null === (t = document.querySelector('meta[name="page-meta"]')) || void 0 === t ? void 0 : t.dataset.internalPageName) && void 0 !== e ? e : null,
					hostnames: {
						prod: "roblox.com",
						dev: "robloxlabs.com"
					}
				},
				s = window.Roblox["core-scripts"].meta.environment,
				u = r(801),
				c = r.n(u),
				l = r(311),
				p = r.n(l),
				f = (0, s.isTestSite)() ? a.environments.dev : a.environments.prod,
				_ = {
					initTracer: function(t, e) {
						if (!a.metaData.accessToken) return null;
						var r, n, o, i = new l.Tracer({
							access_token: a.metaData.accessToken,
							component_name: t,
							tags: {
								"service.version": f
							},
							instrument_page_load: e,
							propagators: (r = {}, n = c().FORMAT_HTTP_HEADERS, o = new(p()).B3Propagator, n in r ? Object.defineProperty(r, n, {
								value: o,
								enumerable: !0,
								configurable: !0,
								writable: !0
							}) : r[n] = o, r)
						});
						return c().initGlobalTracer(i), i
					},
					createAndGetSpan: function(t, e) {
						return c().globalTracer().startSpan(t, e)
					},
					finalizeSpan: function(t) {
						t && t.finish()
					}
				},
				d = a.metaData,
				h = d.sampleRate,
				g = d.serviceName,
				v = d.tracerEnabled,
				y = d.isInstrumentPagePerformanceEnabled,
				m = Math.floor(100 * Math.random() + 1),
				b = v && m <= h,
				T = {
					isTracerEnabled: b,
					rootTracer: function() {
						return b ? _.initTracer(g, y) : null
					}
				},
				O = function(t, e) {
					t.log({
						message: e
					})
				},
				S = {
					setXHRRequestLogs: function(t) {
						O(t, "request_sent")
					},
					setXHRResponseSuccessLogs: function(t) {
						O(t, "request_ok")
					},
					setXHRResponseErrorLogs: function(t) {
						t.log({
							message: "request_failed"
						})
					}
				},
				E = function(t) {
					t.setTag("error", "true")
				},
				R = function(t, e) {
					var r = e.component,
						n = e.method,
						o = e.url;
					t.setTag("span.kind", "client"), t.setTag("component", r), t.setTag("http.method", n), t.setTag("http.url", o), t.setTag("page.name", a.pageName), t.setTag("page.url", window.location.href), t.setTag("user.agent", navigator.userAgent)
				},
				k = {
					setErrorTag: E,
					setXHRRequestTags: function(t, e) {
						R(t, e)
					},
					setXHRResponseTags: function(t, e) {
						t.setTag("http.status_code", e.status)
					},
					setXHRResponseErrorTags: function(t, e) {
						E(t), t.setTag("http.status_code", e.status)
					},
					setPlaceIdTag: function(t, e) {
						t.setTag("guid:place_id", e)
					},
					setDefaultTags: function(t) {
						t.setTag("span.kind", "client")
					}
				},
				M = {
					httpRequestCarrier: function(t) {
						var e = {};
						return c().globalTracer().inject(t, c().FORMAT_HTTP_HEADERS, e), e
					},
					textMapCarrier: function(t) {
						var e = {};
						return c().globalTracer().inject(t, c().FORMAT_TEXT_MAP, e), e
					}
				},
				w = {
					httpRequestCarrier: function(t) {
						return c().globalTracer().extract(c().FORMAT_HTTP_HEADERS, t)
					},
					textMapCarrier: function(t) {
						return c().globalTracer().extract(c().FORMAT_TEXT_MAP, t)
					}
				},
				x = function(t) {
					var e = a.hostnames,
						r = null != t ? t : window.location.hostname;
					return r.includes(e.prod) || r.includes(e.dev)
				},
				P = a.metaData.apiSitesRequestAllowList.split(","),
				A = {
					isApiSiteAvailableForTracing: function(t) {
						return !!(x() && x(t)) && !!P.length && P.some(function(e) {
							return t.includes(e)
						})
					}
				},
				I = {
					operationNames: {
						httpRequest: "Web::HTTPRequest"
					}
				},
				L = T.isTracerEnabled;
			i(["Roblox", "core-scripts", "tracing"], n), i("RobloxTracer", {
				isTracerEnabled: L,
				instrumentation: _,
				logs: S,
				tags: k,
				inject: M,
				extract: w,
				apiSiteRequestValidator: A,
				tracerConstants: I
			}), T.rootTracer()
		}()
}();
//# sourceMappingURL=https://sourcemaps.rbxcdn.com/robloxTracer-a2536b353e9a18eb.js.map
window.Roblox && window.Roblox.BundleDetector && window.Roblox.BundleDetector.bundleDetected("RobloxTracer");