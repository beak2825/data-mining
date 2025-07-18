! function() {
	"use strict";
	var t = {},
		e = {};

	function r(n) {
		var o = e[n];
		if (void 0 !== o) return o.exports;
		var i = e[n] = {
			exports: {}
		};
		return t[n](i, i.exports, r), i.exports
	}
	r.d = function(t, e) {
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
	}, r.rv = function() {
		return "1.2.8"
	}, r.ruid = "bundler=rspack@1.2.8";
	var n = {};

	function o(t, e) {
		(null == e || e > t.length) && (e = t.length);
		for (var r = 0, n = Array(e); r < e; r++) n[r] = t[r];
		return n
	}
	r.r(n), r.d(n, {
		default: function() {
			return E
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
				l = !0,
				u = !1,
				s = void 0;
			try {
				for (var c, f = n[Symbol.iterator](); !(l = (c = f.next()).done); l = !0) {
					var p, m, h = c.value;
					null !== (m = (p = a)[h]) && void 0 !== m || (p[h] = {}), a = a[h]
				}
			} catch (t) {
				u = !0, s = t
			} finally {
				try {
					l || null == f.return || f.return()
				} finally {
					if (u) throw s
				}
			}
			a[i] = e
		}
	};

	function a(t, e, r) {
		this.locales = t, this.formats = e, this.pluralFn = r
	}

	function l(t) {
		this.id = t
	}

	function u(t, e, r, n, o) {
		this.id = t, this.useOrdinal = e, this.offset = r, this.options = n, this.pluralFn = o
	}

	function s(t, e, r, n) {
		this.id = t, this.offset = e, this.numberFormat = r, this.string = n
	}

	function c(t, e) {
		this.id = t, this.options = e
	}
	a.prototype.compile = function(t) {
		return this.pluralStack = [], this.currentPlural = null, this.pluralNumberFormat = null, this.compileMessage(t)
	}, a.prototype.compileMessage = function(t) {
		if (!(t && "messageFormatPattern" === t.type)) throw Error('Message AST is not of type: "messageFormatPattern"');
		var e, r, n, o = t.elements,
			i = [];
		for (e = 0, r = o.length; e < r; e += 1) switch ((n = o[e]).type) {
			case "messageTextElement":
				i.push(this.compileMessageText(n));
				break;
			case "argumentElement":
				i.push(this.compileArgument(n));
				break;
			default:
				throw Error("Message element does not have a valid type")
		}
		return i
	}, a.prototype.compileMessageText = function(t) {
		return this.currentPlural && /(^|[^\\])#/g.test(t.value) ? (this.pluralNumberFormat || (this.pluralNumberFormat = new Intl.NumberFormat(this.locales)), new s(this.currentPlural.id, this.currentPlural.format.offset, this.pluralNumberFormat, t.value)) : t.value.replace(/\\#/g, "#")
	}, a.prototype.compileArgument = function(t) {
		var e = t.format;
		if (!e) return new l(t.id);
		var r, n = this.formats,
			o = this.locales,
			i = this.pluralFn;
		switch (e.type) {
			case "numberFormat":
				return r = n.number[e.style], {
					id: t.id,
					format: new Intl.NumberFormat(o, r).format
				};
			case "dateFormat":
				return r = n.date[e.style], {
					id: t.id,
					format: new Intl.DateTimeFormat(o, r).format
				};
			case "timeFormat":
				return r = n.time[e.style], {
					id: t.id,
					format: new Intl.DateTimeFormat(o, r).format
				};
			case "pluralFormat":
				return r = this.compileOptions(t), new u(t.id, e.ordinal, e.offset, r, i);
			case "selectFormat":
				return r = this.compileOptions(t), new c(t.id, r);
			default:
				throw Error("Message element does not have a valid format type")
		}
	}, a.prototype.compileOptions = function(t) {
		var e, r, n, o = t.format,
			i = o.options,
			a = {};
		for (this.pluralStack.push(this.currentPlural), this.currentPlural = "pluralFormat" === o.type ? t : null, e = 0, r = i.length; e < r; e += 1) a[(n = i[e]).selector] = this.compileMessage(n.value);
		return this.currentPlural = this.pluralStack.pop(), a
	}, l.prototype.format = function(t) {
		return t || "number" == typeof t ? "string" == typeof t ? t : String(t) : ""
	}, u.prototype.getOption = function(t) {
		var e = this.options;
		return e["=" + t] || e[this.pluralFn(t - this.offset, this.useOrdinal)] || e.other
	}, s.prototype.format = function(t) {
		var e = this.numberFormat.format(t - this.offset);
		return this.string.replace(/(^|[^\\])#/g, "$1" + e).replace(/\\#/g, "#")
	}, c.prototype.getOption = function(t) {
		var e = this.options;
		return e[t] || e.other
	};
	var f = function() {
		function t(e, r, n, o) {
			this.message = e, this.expected = r, this.found = n, this.location = o, this.name = "SyntaxError", "function" == typeof Error.captureStackTrace && Error.captureStackTrace(this, t)
		}
		return ! function(t, e) {
			function r() {
				this.constructor = t
			}
			r.prototype = e.prototype, t.prototype = new r
		}(t, Error), {
			SyntaxError: t,
			parse: function(e) {
				var r, n, o, i, a = arguments.length > 1 ? arguments[1] : {},
					l = {},
					u = {
						start: ti
					},
					s = ti,
					c = function(t) {
						var e, r, n, o, i, a = "";
						for (e = 0, n = t.length; e < n; e += 1)
							for (r = 0, i = (o = t[e]).length; r < i; r += 1) a += o[r];
						return a
					},
					f = /^[^ \t\n\r,.+={}#]/,
					p = {
						type: "class",
						value: "[^ \\t\\n\\r,.+={}#]",
						description: "[^ \\t\\n\\r,.+={}#]"
					},
					m = {
						type: "literal",
						value: "{",
						description: '"{"'
					},
					h = {
						type: "literal",
						value: ",",
						description: '","'
					},
					d = {
						type: "literal",
						value: "}",
						description: '"}"'
					},
					y = "number",
					g = {
						type: "literal",
						value: "number",
						description: '"number"'
					},
					v = "date",
					b = {
						type: "literal",
						value: "date",
						description: '"date"'
					},
					w = "time",
					F = {
						type: "literal",
						value: "time",
						description: '"time"'
					},
					O = "plural",
					x = {
						type: "literal",
						value: "plural",
						description: '"plural"'
					},
					A = "selectordinal",
					T = {
						type: "literal",
						value: "selectordinal",
						description: '"selectordinal"'
					},
					_ = "select",
					C = {
						type: "literal",
						value: "select",
						description: '"select"'
					},
					k = {
						type: "literal",
						value: "=",
						description: '"="'
					},
					D = "offset:",
					S = {
						type: "literal",
						value: "offset:",
						description: '"offset:"'
					},
					L = {
						type: "other",
						description: "whitespace"
					},
					j = /^[ \t\n\r]/,
					P = {
						type: "class",
						value: "[ \\t\\n\\r]",
						description: "[ \\t\\n\\r]"
					},
					E = {
						type: "other",
						description: "optionalWhitespace"
					},
					I = /^[0-9]/,
					R = {
						type: "class",
						value: "[0-9]",
						description: "[0-9]"
					},
					N = /^[0-9a-f]/i,
					M = {
						type: "class",
						value: "[0-9a-f]i",
						description: "[0-9a-f]i"
					},
					Z = {
						type: "literal",
						value: "0",
						description: '"0"'
					},
					z = /^[1-9]/,
					U = {
						type: "class",
						value: "[1-9]",
						description: "[1-9]"
					},
					W = /^[^{}\\\0-\x1F \t\n\r]/,
					$ = {
						type: "class",
						value: "[^{}\\\\\\0-\\x1F\\x7f \\t\\n\\r]",
						description: "[^{}\\\\\\0-\\x1F\\x7f \\t\\n\\r]"
					},
					q = {
						type: "literal",
						value: "\\\\",
						description: '"\\\\\\\\"'
					},
					B = {
						type: "literal",
						value: "\\#",
						description: '"\\\\#"'
					},
					J = {
						type: "literal",
						value: "\\{",
						description: '"\\\\{"'
					},
					G = {
						type: "literal",
						value: "\\}",
						description: '"\\\\}"'
					},
					H = {
						type: "literal",
						value: "\\u",
						description: '"\\\\u"'
					},
					K = 0,
					Q = 0,
					V = [{
						line: 1,
						column: 1,
						seenCR: !1
					}],
					X = 0,
					Y = [],
					tt = 0;
				if ("startRule" in a) {
					if (!(a.startRule in u)) throw Error("Can't start parsing from rule \"" + a.startRule + '".');
					s = u[a.startRule]
				}

				function te() {
					return tn(Q, K)
				}

				function tr(t) {
					var r, n, o = V[t];
					if (o) return o;
					for (r = t - 1; !V[r];) r--;
					for (o = {
							line: (o = V[r]).line,
							column: o.column,
							seenCR: o.seenCR
						}; r < t;) "\n" === (n = e.charAt(r)) ? (!o.seenCR && o.line++, o.column = 1, o.seenCR = !1) : "\r" === n || "\u2028" === n || "\u2029" === n ? (o.line++, o.column = 1, o.seenCR = !0) : (o.column++, o.seenCR = !1), r++;
					return V[t] = o, o
				}

				function tn(t, e) {
					var r = tr(t),
						n = tr(e);
					return {
						start: {
							offset: t,
							line: r.line,
							column: r.column
						},
						end: {
							offset: e,
							line: n.line,
							column: n.column
						}
					}
				}

				function to(t) {
					!(K < X) && (K > X && (X = K, Y = []), Y.push(t))
				}

				function ti() {
					return ta()
				}

				function ta() {
					var t, e, r;
					for (t = K, e = [], r = tl(); r !== l;) e.push(r), r = tl();
					return e !== l && (Q = t, e = {
						type: "messageFormatPattern",
						elements: e,
						location: te()
					}), e
				}

				function tl() {
					var t, r, n;
					return r = K, (n = function() {
						var t, r, n, o, i, a;
						if (t = K, r = [], n = K, (o = tf()) !== l && (i = ty()) !== l && (a = tf()) !== l ? n = o = [o, i, a] : (K = n, n = l), n !== l)
							for (; n !== l;) r.push(n), n = K, (o = tf()) !== l && (i = ty()) !== l && (a = tf()) !== l ? n = o = [o, i, a] : (K = n, n = l);
						else r = l;
						return r !== l && (Q = t, r = c(r)), (t = r) === l && (t = K, t = (r = tc()) !== l ? e.substring(t, K) : r), t
					}()) !== l && (Q = r, n = {
						type: "messageTextElement",
						value: n,
						location: te()
					}), (t = n) === l && (t = function() {
						var t, r, n, o, i, a, u, s, c, k, D, S, L, j, P, E;
						if (t = K, 123 === e.charCodeAt(K) ? (r = "{", K++) : (r = l, 0 === tt && to(m)), r !== l) {
							if (tf() !== l) {
								if ((n = function() {
										var t, r, n;
										if ((t = th()) === l) {
											if (t = K, r = [], f.test(e.charAt(K)) ? (n = e.charAt(K), K++) : (n = l, 0 === tt && to(p)), n !== l)
												for (; n !== l;) r.push(n), f.test(e.charAt(K)) ? (n = e.charAt(K), K++) : (n = l, 0 === tt && to(p));
											else r = l;
											t = r !== l ? e.substring(t, K) : r
										}
										return t
									}()) !== l) {
									if (tf() !== l) {
										if (o = K, 44 === e.charCodeAt(K) ? (i = ",", K++) : (i = l, 0 === tt && to(h)), i !== l && (a = tf()) !== l && ((k = K, e.substr(K, 6) === y ? (D = y, K += 6) : (D = l, 0 === tt && to(g)), D === l && (e.substr(K, 4) === v ? (D = v, K += 4) : (D = l, 0 === tt && to(b)), D === l && (e.substr(K, 4) === w ? (D = w, K += 4) : (D = l, 0 === tt && to(F)))), D !== l && tf() !== l && (S = K, 44 === e.charCodeAt(K) ? (L = ",", K++) : (L = l, 0 === tt && to(h)), L !== l && (j = tf()) !== l && (P = ty()) !== l ? S = L = [L, j, P] : (K = S, S = l), S === l && (S = null), S !== l)) ? (Q = k, k = D = {
												type: D + "Format",
												style: (E = S) && E[2],
												location: te()
											}) : (K = k, k = l), (c = k) === l && (c = function() {
												var t, r, n, o;
												return (t = K, e.substr(K, 6) === O ? (r = O, K += 6) : (r = l, 0 === tt && to(x)), r !== l && tf() !== l && (44 === e.charCodeAt(K) ? (n = ",", K++) : (n = l, 0 === tt && to(h)), n !== l && tf() !== l && (o = ts()) !== l)) ? (Q = t, t = r = {
													type: o.type,
													ordinal: !1,
													offset: o.offset || 0,
													options: o.options,
													location: te()
												}) : (K = t, t = l), t
											}()) === l && (c = function() {
												var t, r, n, o;
												return (t = K, e.substr(K, 13) === A ? (r = A, K += 13) : (r = l, 0 === tt && to(T)), r !== l && tf() !== l && (44 === e.charCodeAt(K) ? (n = ",", K++) : (n = l, 0 === tt && to(h)), n !== l && tf() !== l && (o = ts()) !== l)) ? (Q = t, t = r = {
													type: o.type,
													ordinal: !0,
													offset: o.offset || 0,
													options: o.options,
													location: te()
												}) : (K = t, t = l), t
											}()) === l && (c = function() {
												var t, r, n, o, i;
												if (t = K, e.substr(K, 6) === _ ? (r = _, K += 6) : (r = l, 0 === tt && to(C)), r !== l) {
													if (tf() !== l) {
														if (44 === e.charCodeAt(K) ? (n = ",", K++) : (n = l, 0 === tt && to(h)), n !== l) {
															if (tf() !== l) {
																if (o = [], (i = tu()) !== l)
																	for (; i !== l;) o.push(i), i = tu();
																else o = l;
																o !== l ? (Q = t, t = r = {
																	type: "selectFormat",
																	options: o,
																	location: te()
																}) : (K = t, t = l)
															} else K = t, t = l
														} else K = t, t = l
													} else K = t, t = l
												} else K = t, t = l;
												return t
											}()), (u = c) !== l) ? o = i = [i, a, u] : (K = o, o = l), o === l && (o = null), o !== l)(i = tf()) !== l && (125 === e.charCodeAt(K) ? (a = "}", K++) : (a = l, 0 === tt && to(d)), a !== l) ? (Q = t, t = r = {
											type: "argumentElement",
											id: n,
											format: (s = o) && s[2],
											location: te()
										}) : (K = t, t = l);
										else K = t, t = l
									} else K = t, t = l
								} else K = t, t = l
							} else K = t, t = l
						} else K = t, t = l;
						return t
					}()), t
				}

				function tu() {
					var t, r, n, o, i, a, u, s, c, f;
					return (t = K, tf() !== l && (u = K, s = K, 61 === e.charCodeAt(K) ? (c = "=", K++) : (c = l, 0 === tt && to(k)), c !== l && (f = th()) !== l ? s = c = [c, f] : (K = s, s = l), (u = s !== l ? e.substring(u, K) : s) === l && (u = ty()), (n = u) !== l && tf() !== l && (123 === e.charCodeAt(K) ? (o = "{", K++) : (o = l, 0 === tt && to(m)), o !== l && tf() !== l && (i = ta()) !== l && tf() !== l && (125 === e.charCodeAt(K) ? (a = "}", K++) : (a = l, 0 === tt && to(d)), a !== l)))) ? (Q = t, t = {
						type: "optionalFormatPattern",
						selector: n,
						value: i,
						location: te()
					}) : (K = t, t = l), t
				}

				function ts() {
					var t, r, n, o, i, a, u;
					if (t = K, (i = K, e.substr(K, 7) === D ? (a = D, K += 7) : (a = l, 0 === tt && to(S)), a !== l && tf() !== l && (u = th()) !== l) ? (Q = i, i = a = u) : (K = i, i = l), (r = i) === l && (r = null), r !== l) {
						if (tf() !== l) {
							if (n = [], (o = tu()) !== l)
								for (; o !== l;) n.push(o), o = tu();
							else n = l;
							n !== l ? (Q = t, t = r = {
								type: "pluralFormat",
								offset: r,
								options: n,
								location: te()
							}) : (K = t, t = l)
						} else K = t, t = l
					} else K = t, t = l;
					return t
				}

				function tc() {
					var t, r;
					if (tt++, t = [], j.test(e.charAt(K)) ? (r = e.charAt(K), K++) : (r = l, 0 === tt && to(P)), r !== l)
						for (; r !== l;) t.push(r), j.test(e.charAt(K)) ? (r = e.charAt(K), K++) : (r = l, 0 === tt && to(P));
					else t = l;
					return tt--, t === l && (r = l, 0 === tt && to(L)), t
				}

				function tf() {
					var t, r, n;
					for (tt++, t = K, r = [], n = tc(); n !== l;) r.push(n), n = tc();
					return t = r !== l ? e.substring(t, K) : r, tt--, t === l && (r = l, 0 === tt && to(E)), t
				}

				function tp() {
					var t;
					return I.test(e.charAt(K)) ? (t = e.charAt(K), K++) : (t = l, 0 === tt && to(R)), t
				}

				function tm() {
					var t;
					return N.test(e.charAt(K)) ? (t = e.charAt(K), K++) : (t = l, 0 === tt && to(M)), t
				}

				function th() {
					var t, r, n, o, i, a;
					if (t = K, 48 === e.charCodeAt(K) ? (r = "0", K++) : (r = l, 0 === tt && to(Z)), r === l) {
						if (r = K, n = K, z.test(e.charAt(K)) ? (o = e.charAt(K), K++) : (o = l, 0 === tt && to(U)), o !== l) {
							for (i = [], a = tp(); a !== l;) i.push(a), a = tp();
							i !== l ? n = o = [o, i] : (K = n, n = l)
						} else K = n, n = l;
						r = n !== l ? e.substring(r, K) : n
					}
					return r !== l && (Q = t, r = parseInt(r, 10)), r
				}

				function td() {
					var t, r, n, o, i, a, u, s;
					return W.test(e.charAt(K)) ? (t = e.charAt(K), K++) : (t = l, 0 === tt && to($)), t === l && (t = K, "\\\\" === e.substr(K, 2) ? (r = "\\\\", K += 2) : (r = l, 0 === tt && to(q)), r !== l && (Q = t, r = "\\"), (t = r) === l && (t = K, "\\#" === e.substr(K, 2) ? (r = "\\#", K += 2) : (r = l, 0 === tt && to(B)), r !== l && (Q = t, r = "\\#"), (t = r) === l && (t = K, "\\{" === e.substr(K, 2) ? (r = "\\{", K += 2) : (r = l, 0 === tt && to(J)), r !== l && (Q = t, r = "{"), (t = r) === l && (t = K, "\\}" === e.substr(K, 2) ? (r = "\\}", K += 2) : (r = l, 0 === tt && to(G)), r !== l && (Q = t, r = "}"), (t = r) === l)))) && ((t = K, "\\u" === e.substr(K, 2) ? (r = "\\u", K += 2) : (r = l, 0 === tt && to(H)), r !== l && (n = K, o = K, (i = tm()) !== l && (a = tm()) !== l && (u = tm()) !== l && (s = tm()) !== l ? o = i = [i, a, u, s] : (K = o, o = l), (n = o !== l ? e.substring(n, K) : o) !== l)) ? (Q = t, t = r = String.fromCharCode(parseInt(n, 16))) : (K = t, t = l)), t
				}

				function ty() {
					var t, e, r;
					if (t = K, e = [], (r = td()) !== l)
						for (; r !== l;) e.push(r), r = td();
					else e = l;
					return e !== l && (Q = t, e = e.join("")), e
				}
				if ((i = s()) !== l && K === e.length) return i;
				throw i !== l && K < e.length && to({
					type: "end",
					description: "end of input"
				}), r = Y, n = X < e.length ? e.charAt(X) : null, o = X < e.length ? tn(X, X + 1) : tn(X, X), null !== r && function(t) {
					var e = 1;
					for (t.sort(function(t, e) {
							return t.description < e.description ? -1 : +(t.description > e.description)
						}); e < t.length;) t[e - 1] === t[e] ? t.splice(e, 1) : e++
				}(r), new t(function(t, e) {
					var r, n = Array(t.length);
					for (r = 0; r < t.length; r++) n[r] = t[r].description;
					return "Expected " + (t.length > 1 ? n.slice(0, -1).join(", ") + " or " + n[t.length - 1] : n[0]) + " but " + (e ? '"' + function(t) {
						function e(t) {
							return t.charCodeAt(0).toString(16).toUpperCase()
						}
						return t.replace(/\\/g, "\\\\").replace(/"/g, '\\"').replace(/\x08/g, "\\b").replace(/\t/g, "\\t").replace(/\n/g, "\\n").replace(/\f/g, "\\f").replace(/\r/g, "\\r").replace(/[\x00-\x07\x0B\x0E\x0F]/g, function(t) {
							return "\\x0" + e(t)
						}).replace(/[\x10-\x1F\x80-\xFF]/g, function(t) {
							return "\\x" + e(t)
						}).replace(/[\u0100-\u0FFF]/g, function(t) {
							return "\\u0" + e(t)
						}).replace(/[\u1000-\uFFFF]/g, function(t) {
							return "\\u" + e(t)
						})
					}(e) + '"' : "end of input") + " found."
				}(r, n), r, n, o)
			}
		}
	}();

	function p(t, e, r) {
		var n = "string" == typeof t ? p.__parse(t) : t;
		if (!(n && "messageFormatPattern" === n.type)) throw TypeError("A message must be provided as a String or AST.");
		r = this._mergeFormats(p.formats, r), Object.defineProperty(this, "_locale", {
			value: this._resolveLocale(e)
		});
		var o = this._findPluralRuleFunction(this._locale),
			i = this._compilePattern(n, e, r, o),
			a = this;
		this.format = function(t) {
			return a._format(i, t)
		}
	}
	Object.defineProperty(p, "formats", {
		enumerable: !0,
		value: {
			number: {
				currency: {
					style: "currency"
				},
				percent: {
					style: "percent"
				}
			},
			date: {
				short: {
					month: "numeric",
					day: "numeric",
					year: "2-digit"
				},
				medium: {
					month: "short",
					day: "numeric",
					year: "numeric"
				},
				long: {
					month: "long",
					day: "numeric",
					year: "numeric"
				},
				full: {
					weekday: "long",
					month: "long",
					day: "numeric",
					year: "numeric"
				}
			},
			time: {
				short: {
					hour: "numeric",
					minute: "numeric"
				},
				medium: {
					hour: "numeric",
					minute: "numeric",
					second: "numeric"
				},
				long: {
					hour: "numeric",
					minute: "numeric",
					second: "numeric",
					timeZoneName: "short"
				},
				full: {
					hour: "numeric",
					minute: "numeric",
					second: "numeric",
					timeZoneName: "short"
				}
			}
		}
	}), Object.defineProperty(p, "__localeData__", {
		value: Object.create(null)
	}), Object.defineProperty(p, "__addLocaleData", {
		value: function(t) {
			if (!(t && t.locale)) throw Error("Locale data provided to IntlMessageFormat is missing a `locale` property");
			p.__localeData__[t.locale.toLowerCase()] = t
		}
	}), Object.defineProperty(p, "__parse", {
		value: f.parse
	}), Object.defineProperty(p, "defaultLocale", {
		enumerable: !0,
		writable: !0,
		value: void 0
	}), p.prototype.resolvedOptions = function() {
		return {
			locale: this._locale
		}
	}, p.prototype._compilePattern = function(t, e, r, n) {
		return new a(e, r, n).compile(t)
	}, p.prototype._findPluralRuleFunction = function(t) {
		for (var e = p.__localeData__, r = e[t.toLowerCase()]; r;) {
			if (r.pluralRuleFunction) return r.pluralRuleFunction;
			r = r.parentLocale && e[r.parentLocale.toLowerCase()]
		}
		throw Error("Locale data added to IntlMessageFormat is missing a `pluralRuleFunction` for :" + t)
	}, p.prototype._format = function(t, e) {
		var r, n, o, i, a, l = "";
		for (r = 0, n = t.length; r < n; r += 1) {
			if ("string" == typeof(o = t[r])) {
				l += o;
				continue
			}
			if (i = o.id, !(e && Object.prototype.hasOwnProperty.call(e, i))) throw Error("A value must be provided for: " + i);
			a = e[i], o.options ? l += this._format(o.getOption(a), e) : l += o.format(a)
		}
		return l
	}, p.prototype._mergeFormats = function(t, e) {
		var r, n, o = {};
		for (r in t) Object.prototype.hasOwnProperty.call(t, r) && (o[r] = n = Object.create(t[r]), e && Object.prototype.hasOwnProperty.call(e, r) && Object.assign(n, e[r]));
		return o
	}, p.prototype._resolveLocale = function(t) {
		"string" == typeof t && (t = [t]), t = (t || []).concat(p.defaultLocale);
		var e, r, n, o, i = p.__localeData__;
		for (e = 0, r = t.length; e < r; e += 1)
			for (n = t[e].toLowerCase().split("-"); n.length;) {
				if (o = i[n.join("-")]) return o.locale;
				n.pop()
			}
		var a = t.pop();
		throw Error("No locale data has been added to IntlMessageFormat for: " + t.join(", ") + ", or the default locale: " + a)
	};
	var m = "RobloxLocaleCode",
		h = function() {
			var t = window.Roblox.LocalStorage;
			return "undefined" != typeof localStorage && (t ? t.isAvailable() : localStorage && localStorage.getItem && localStorage.setItem)
		},
		d = ["zh-cn", "zh-tw", "ko-kr", "ja-jp"],
		y = ["zh-tw"],
		g = {
			zh_cjv: "zh_cn"
		},
		v = function(t) {
			return t.replace(/_/g, "-")
		},
		b = function(t) {
			var e = d.indexOf(t) + 1;
			return !!(t && e)
		},
		w = function() {
			var t, e = h(),
				r = document.querySelector('meta[name="locale-data"]');
			return r && (t = r.dataset ? r.dataset.languageCode : r.getAttribute("data-language-code")), !t && e && (t = localStorage.getItem(m)), t || (t = "en_us"), e && localStorage.setItem(m, t), t
		},
		F = {
			short: {
				year: "numeric",
				month: "2-digit",
				day: "2-digit"
			},
			full: {
				year: "numeric",
				month: "2-digit",
				day: "2-digit",
				hour: "2-digit",
				minute: "2-digit"
			},
			time: {
				hour: "2-digit",
				minute: "2-digit"
			}
		},
		O = new Date("Aug 17 2003"),
		x = [1, 2, 3, 4, 5, 6, 7],
		A = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
		T = [{
			year: "numeric",
			month: "short",
			day: "numeric"
		}, {
			hour: "numeric",
			minute: "numeric"
		}],
		_ = {
			month: 0,
			day: 1,
			year: 2
		},
		C = ["narrow", "short", "long"],
		k = ["numeric", "2-digit", "narrow", "short", "long"],
		D = function() {
			var t;

			function e(t) {
				! function(t, e) {
					if (!(t instanceof e)) throw TypeError("Cannot call a class as a function")
				}(this, e), this.locale = t, this.dateOrdering = {}
			}
			return t = [{
					key: "getTimeZone",
					value: function(t) {
						return new Intl.DateTimeFormat(this.locale, t).resolvedOptions().timeZone
					}
				}, {
					key: "getShortDate",
					value: function(t) {
						return this.getCustomDateTime(t)
					}
				}, {
					key: "getFullDate",
					value: function(t) {
						var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : " | ";
						return this.getCustomDateTime(t, T["0"]) + e + this.getCustomDateTime(t, T["1"])
					}
				}, {
					key: "getCustomDateTime",
					value: function() {
						var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : new Date,
							e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : void 0,
							r = new Intl.DateTimeFormat(this.locale, e);
						try {
							if ("string" == typeof t || "number" == typeof t) return r.format(new Date(t));
							return r.format(t)
						} catch (t) {
							return ""
						}
					}
				}, {
					key: "getOrderedDateParts",
					value: function(t) {
						var e = this;
						if (0 === Object.keys(this.dateOrdering).length) {
							var r = new Intl.DateTimeFormat(this.locale, t);
							if (this.dateOrdering = this.getDefaultDateOrdering(), r.formatToParts) {
								var n = r.formatToParts(new Date).filter(function(t) {
									return "literal" !== t.type
								});
								3 === n.length && n.forEach(function(t, r) {
									e.dateOrdering[t.type] = r
								})
							}
						}
						return this.dateOrdering
					}
				}, {
					key: "getDefaultDateOrdering",
					value: function() {
						var t = this.getShortDate(O),
							e = [{
								type: "year",
								index: t.indexOf("2003")
							}, {
								type: "month",
								index: t.indexOf("8")
							}, {
								type: "day",
								index: t.indexOf("17")
							}];
						return e.some(function(t) {
							return -1 === t.index
						}) || (e = e.sort(function(t, e) {
							return t.index - e.index
						})).forEach(function(t, e) {
							_[t.type] = e
						}), _
					}
				}],
				function(t, e) {
					for (var r = 0; r < e.length; r++) {
						var n = e[r];
						n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n)
					}
				}(e.prototype, t), e
		}(),
		S = function() {
			var t;

			function e(t, r) {
				! function(t, e) {
					if (!(t instanceof e)) throw TypeError("Cannot call a class as a function")
				}(this, e), this.locale = t, this.currency = r
			}
			return t = [{
					key: "getCustomNumber",
					value: function(t, e) {
						try {
							return new Intl.NumberFormat(this.locale, e).format(t)
						} catch (e) {
							return t
						}
					}
				}],
				function(t, e) {
					for (var r = 0; r < e.length; r++) {
						var n = e[r];
						n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n)
					}
				}(e.prototype, t), e
		}(),
		L = function(t, e) {
			return t < e ? -1 : +(t > e)
		},
		j = function(t, e, r) {
			return b(t) && r ? y.indexOf(t) >= 0 ? "".concat(e, " ").concat(r) : e + r : e
		};

	function P(t) {
		return t && "undefined" != typeof Symbol && t.constructor === Symbol ? "symbol" : typeof t
	}
	p.__addLocaleData({
		locale: "en",
		pluralRuleFunction: function(t, e) {
			var r = String(t).split("."),
				n = !r[1],
				o = Number(r[0]) == t,
				i = o && r[0].slice(-1),
				a = o && r[0].slice(-2);
			return e ? 1 == i && 11 != a ? "one" : 2 == i && 12 != a ? "two" : 3 == i && 13 != a ? "few" : "other" : 1 == t && n ? "one" : "other"
		}
	}), p.defaultLocale = "en";
	var E = function() {
		var t;

		function e(t, r, n) {
			! function(t, e) {
				if (!(t instanceof e)) throw TypeError("Cannot call a class as a function")
			}(this, e);
			var o, i = t || w();
			this.locale = Object.prototype.hasOwnProperty.call(g, i) ? v(g[i]) : v(i), this.defaultLocale = [this.locale], this.timeZone = r || "America/Los_Angeles", this.currency = n || "USD", this.monthsList = {}, this.weekdaysList = {}, this.langSensitiveCompare = (o = this.locale, void 0 !== Intl.Collator ? new Intl.Collator(o).compare : (String.prototype.localeCompare, L)), this.dateTimeFormatter = null, this.numberFormatter = null
		}
		return t = [{
				key: "getLocale",
				value: function() {
					return v(this.locale)
				}
			}, {
				key: "getRobloxLocale",
				value: function() {
					return this.locale.replace(/-/g, "_")
				}
			}, {
				key: "getTimeZone",
				value: function() {
					return this.timeZone
				}
			}, {
				key: "getCurrency",
				value: function() {
					return this.currency
				}
			}, {
				key: "getDateTimeFormatter",
				value: function() {
					return this.dateTimeFormatter || (this.dateTimeFormatter = new D(this.locale)), this.dateTimeFormatter
				}
			}, {
				key: "getNumberFormatter",
				value: function() {
					return this.numberFormatter || (this.numberFormatter = new S(this.defaultLocale, this.currency)), this.numberFormatter
				}
			}, {
				key: "isAsianLanguage",
				value: function() {
					return b(this.locale)
				}
			}, {
				key: "getFormattedDateString",
				value: function(t, e) {
					return j(this.locale, t, e)
				}
			}, {
				key: "getMonthsI18n",
				value: function(t, e) {
					var r, n = k.indexOf(t) > -1 ? t : "short";
					return !(this.monthsList[n] && this.monthsList[n].length > 0) && (this.monthsList[n] = (r = this.locale, A.map(function(t) {
						return new Date(2017, t - 1)
					}).map(function(t, o) {
						var i;
						return b(r) ? {
							value: o + 1,
							name: j(r, o + 1, e)
						} : {
							value: o + 1,
							name: Intl.DateTimeFormat(r, {
								month: n
							}).format(t)
						}
					}))), this.monthsList[n]
				}
			}, {
				key: "f",
				value: function(t, e, r) {
					if ("string" != typeof t) throw TypeError("'message' must be a string");
					return new p(t, this.locale, r).format(e)
				}
			}, {
				key: "d",
				value: function(t, e) {
					var r;
					if (console.warn("This method has been deprecated in favor of the new DateTimeFormatter API, please do not use it anymore!"), (void 0 === t ? "undefined" : P(t)) !== "object" || !Date.prototype.isPrototypeOf(t)) throw TypeError("'dateObj' must be a JavaScript date object");
					if ("string" == typeof e || void 0 === e) r = F[e] || F.short;
					else if ((void 0 === e ? "undefined" : P(e)) === "object") r = e;
					else throw TypeError("'options' must be either of type string or object based on Intl.DateTimeFormat");
					return this.getDateTimeFormatter().getCustomDateTime(t, r)
				}
			}, {
				key: "n",
				value: function(t, e) {
					if (Number.isNaN(t)) throw TypeError("The argument 'number' must be of type number");
					var r, n = {
						currency: {
							style: "currency",
							currency: this.currency
						},
						percent: {
							style: "percent",
							maximumFractionDigits: 2
						},
						decimal: {
							style: "decimal",
							maximumFractionDigits: 2
						}
					};
					if ("string" == typeof e || void 0 === e) r = n[e] || n.decimal;
					else if ((void 0 === e ? "undefined" : P(e)) === "object") r = e;
					else throw TypeError("'options' must be of type string or object based on Intl.NumberFormat");
					return this.getNumberFormatter().getCustomNumber(t, r)
				}
			}, {
				key: "getWeekdaysList",
				value: function(t) {
					var e = this,
						r = C.indexOf(t) > -1 ? t : "short";
					if (this.weekdaysList[r] && this.weekdaysList[r].length > 0) return this.weekdaysList[r];
					var n = x.map(function(t) {
						return new Date(2017, 4, t)
					});
					return this.weekdaysList[r] = n.map(function(t, n) {
						return {
							value: n + 1,
							name: Intl.DateTimeFormat(e.locale, {
								weekday: r
							}).format(t)
						}
					}), this.weekdaysList[r]
				}
			}, {
				key: "getMonthsList",
				value: function(t) {
					var e = this,
						r = k.indexOf(t) > -1 ? t : "short";
					if (this.monthsList[r] && this.monthsList[r].length > 0) return this.monthsList[r];
					var n = A.map(function(t) {
						return new Date(2017, t - 1)
					});
					return this.monthsList[r] = n.map(function(t, n) {
						return {
							value: n + 1,
							name: Intl.DateTimeFormat(e.locale, {
								month: r
							}).format(t)
						}
					}), this.monthsList[r]
				}
			}],
			function(t, e) {
				for (var r = 0; r < e.length; r++) {
					var n = e[r];
					n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n)
				}
			}(e.prototype, t), e
	}();
	i(["Roblox", "core-scripts", "intl", "intl"], n), i(["Roblox", "Intl"], E)
}();
//# sourceMappingURL=https://sourcemaps.rbxcdn.com/internationalCore-db1cf6cdaa102b16.js.map
window.Roblox && window.Roblox.BundleDetector && window.Roblox.BundleDetector.bundleDetected("InternationalCore");