(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
	["8895"], {
		817080: function(e) {
			var t = t || function(e) {
				"use strict";
				if (!("undefined" != typeof navigator && /MSIE [1-9]\./.test(navigator.userAgent))) {
					var t = e.document,
						n = function() {
							return e.URL || e.webkitURL || e
						},
						r = t.createElementNS("http://www.w3.org/1999/xhtml", "a"),
						i = "download" in r,
						o = function(e) {
							var t = new MouseEvent("click");
							e.dispatchEvent(t)
						},
						a = /Version\/[\d\.]+.*Safari/.test(navigator.userAgent),
						c = e.webkitRequestFileSystem,
						u = e.requestFileSystem || c || e.mozRequestFileSystem,
						s = function(t) {
							(e.setImmediate || e.setTimeout)(function() {
								throw t
							}, 0)
						},
						f = "application/octet-stream",
						l = 0,
						d = function(e) {
							setTimeout(function() {
								"string" == typeof e ? n().revokeObjectURL(e) : e.remove()
							}, 4e4)
						},
						p = function(e, t, n) {
							for (var r = (t = [].concat(t)).length; r--;) {
								var i = e["on" + t[r]];
								if ("function" == typeof i) try {
									i.call(e, n || e)
								} catch (e) {
									s(e)
								}
							}
						},
						h = function(e) {
							return /^\s*(?:text\/\S*|application\/xml|\S*\/\S*\+xml)\s*;.*charset\s*=\s*utf-8/i.test(e.type) ? new Blob(["\xef\xbb\xbf", e], {
								type: e.type
							}) : e
						},
						v = function(t, s, v) {
							v || (t = h(t));
							var w, g, y = this,
								m = t.type,
								S = !1,
								b = function() {
									p(y, "writestart progress write writeend".split(" "))
								},
								E = function() {
									if (g && a && "undefined" != typeof FileReader) {
										var r = new FileReader;
										r.onloadend = function() {
											var e = r.result;
											g.location.href = "data:attachment/file" + e.slice(e.search(/[,;]/)), y.readyState = y.DONE, b()
										}, r.readAsDataURL(t), y.readyState = y.INIT;
										return
									}(S || !w) && (w = n().createObjectURL(t)), g ? g.location.href = w : void 0 === e.open(w, "_blank") && a && (e.location.href = w), y.readyState = y.DONE, b(), d(w)
								},
								O = function(e) {
									return function() {
										if (y.readyState !== y.DONE) return e.apply(this, arguments)
									}
								},
								R = {
									create: !0,
									exclusive: !1
								};
							if (y.readyState = y.INIT, s || (s = "download"), i) {
								w = n().createObjectURL(t), setTimeout(function() {
									r.href = w, r.download = s, o(r), b(), d(w), y.readyState = y.DONE
								});
								return
							}
							if (e.chrome && m && m !== f && (t = (t.slice || t.webkitSlice).call(t, 0, t.size, f), S = !0), c && "download" !== s && (s += ".download"), (m === f || c) && (g = e), !u) return void E();
							l += t.size, u(e.TEMPORARY, l, O(function(e) {
								e.root.getDirectory("saved", R, O(function(e) {
									var n = function() {
										e.getFile(s, R, O(function(e) {
											e.createWriter(O(function(n) {
												n.onwriteend = function(t) {
													g.location.href = e.toURL(), y.readyState = y.DONE, p(y, "writeend", t), d(e)
												}, n.onerror = function() {
													var e = n.error;
													e.code !== e.ABORT_ERR && E()
												}, "writestart progress write abort".split(" ").forEach(function(e) {
													n["on" + e] = y["on" + e]
												}), n.write(t), y.abort = function() {
													n.abort(), y.readyState = y.DONE
												}, y.readyState = y.WRITING
											}), E)
										}), E)
									};
									e.getFile(s, {
										create: !1
									}, O(function(e) {
										e.remove(), n()
									}), O(function(e) {
										e.code === e.NOT_FOUND_ERR ? n() : E()
									}))
								}), E)
							}), E)
						},
						w = v.prototype;
					return "undefined" != typeof navigator && navigator.msSaveOrOpenBlob ? function(e, t, n) {
						return n || (e = h(e)), navigator.msSaveOrOpenBlob(e, t || "download")
					} : (w.abort = function() {
						this.readyState = this.DONE, p(this, "abort")
					}, w.readyState = w.INIT = 0, w.WRITING = 1, w.DONE = 2, w.error = w.onwritestart = w.onprogress = w.onwrite = w.onabort = w.onerror = w.onwriteend = null, function(e, t, n) {
						return new v(e, t, n)
					})
				}
			}("undefined" != typeof self && self || "undefined" != typeof window && window || this.content);
			e.exports ? e.exports.saveAs = t : "undefined" != typeof define && null !== define && null !== define.amd && define([], function() {
				return t
			})
		},
		785902: function(e) {
			e.exports = function(e, t, n, r) {
				for (var i = -1, o = null == e ? 0 : e.length; ++i < o;) {
					var a = e[i];
					t(r, a, n(a), e)
				}
				return r
			}
		},
		800128: function(e, t, n) {
			var r = n(543744);
			e.exports = function(e, t, n, i) {
				return r(e, function(e, r, o) {
					t(i, e, n(e), o)
				}), i
			}
		},
		757009: function(e, t, n) {
			var r = n(785902),
				i = n(800128),
				o = n(256098),
				a = n(290677);
			e.exports = function(e, t) {
				return function(n, c) {
					var u = a(n) ? r : i,
						s = t ? t() : {};
					return u(n, e, o(c, 2), s)
				}
			}
		},
		979079: function(e, t, n) {
			var r = n(685347);
			e.exports = n(757009)(function(e, t, n) {
				r(e, n, t)
			})
		},
		943418: function(e, t, n) {
			var r = n(383083);
			t.encode = r.encode, t.decode = r.decode
		},
		383083: function(e, t, n) {
			var r = n(413135).Buffer,
				i = [255, 255, 26, 27, 28, 29, 30, 31, 255, 255, 255, 255, 255, 255, 255, 255, 255, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 255, 255, 255, 255, 255, 255, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 255, 255, 255, 255, 255];
			t.encode = function(e) {
				r.isBuffer(e) || (e = new r(e));
				for (var t, n, i = 0, o = 0, a = 0, c = 0, u = new r(8 * (n = Math.floor((t = e).length / 5), t.length % 5 == 0 ? n : n + 1)); i < e.length;) {
					var s = e[i];
					a > 3 ? (c = (c = s & 255 >> a) << (a = (a + 5) % 8) | (i + 1 < e.length ? e[i + 1] : 0) >> 8 - a, i++) : (c = s >> 8 - (a + 5) & 31, 0 == (a = (a + 5) % 8) && i++), u[o] = "ABCDEFGHIJKLMNOPQRSTUVWXYZ234567".charCodeAt(c), o++
				}
				for (i = o; i < u.length; i++) u[i] = 61;
				return u
			}, t.decode = function(e) {
				var t, n = 0,
					o = 0,
					a = 0;
				r.isBuffer(e) || (e = new r(e));
				for (var c = new r(Math.ceil(5 * e.length / 8)), u = 0; u < e.length && 61 != e[u]; u++) {
					var s = e[u] - 48;
					if (s < i.length) o = i[s], n <= 3 ? 0 == (n = (n + 5) % 8) ? (t |= o, c[a] = t, a++, t = 0) : t |= 255 & o << 8 - n : (t |= 255 & o >>> (n = (n + 5) % 8), c[a] = t, a++, t = 255 & o << 8 - n);
					else throw Error("Invalid input - it is not base32 encoded string")
				}
				return c.slice(0, a)
			}
		},
		849055: function(e, t, n) {
			"use strict";

			function r(e) {
				let t = "==".slice(0, (4 - e.length % 4) % 4),
					n = atob(e.replace(/-/g, "+").replace(/_/g, "/") + t),
					r = new ArrayBuffer(n.length),
					i = new Uint8Array(r);
				for (let e = 0; e < n.length; e++) i[e] = n.charCodeAt(e);
				return r
			}

			function i(e) {
				let t = new Uint8Array(e),
					n = "";
				for (let e of t) n += String.fromCharCode(e);
				return btoa(n).replace(/\+/g, "-").replace(/\//g, "_").replace(/=/g, "")
			}
			n.d(t, {
				U2: () => m,
				Ue: () => y
			});
			var o = "copy",
				a = "convert";

			function c(e, t, n) {
				if (t === o) return n;
				if (t === a) return e(n);
				if (t instanceof Array) return n.map(n => c(e, t[0], n));
				if (t instanceof Object) {
					let r = {};
					for (let [i, o] of Object.entries(t)) {
						if (o.derive) {
							let e = o.derive(n);
							void 0 !== e && (n[i] = e)
						}
						if (!(i in n)) {
							if (o.required) throw Error(`Missing key: ${i}`);
							continue
						}
						if (null == n[i]) {
							r[i] = null;
							continue
						}
						r[i] = c(e, o.schema, n[i])
					}
					return r
				}
			}

			function u(e, t) {
				return {
					required: !0,
					schema: e,
					derive: t
				}
			}

			function s(e) {
				return {
					required: !0,
					schema: e
				}
			}

			function f(e) {
				return {
					required: !1,
					schema: e
				}
			}
			var l = {
					type: s(o),
					id: s(a),
					transports: f(o)
				},
				d = {
					appid: f(o),
					appidExclude: f(o),
					credProps: f(o)
				},
				p = {
					appid: f(o),
					appidExclude: f(o),
					credProps: f(o)
				},
				h = {
					publicKey: s({
						rp: s(o),
						user: s({
							id: s(a),
							name: s(o),
							displayName: s(o)
						}),
						challenge: s(a),
						pubKeyCredParams: s(o),
						timeout: f(o),
						excludeCredentials: f([l]),
						authenticatorSelection: f(o),
						attestation: f(o),
						extensions: f(d)
					}),
					signal: f(o)
				},
				v = {
					type: s(o),
					id: s(o),
					rawId: s(a),
					authenticatorAttachment: f(o),
					response: s({
						clientDataJSON: s(a),
						attestationObject: s(a),
						transports: u(o, e => {
							var t;
							return (null == (t = e.getTransports) ? void 0 : t.call(e)) || []
						})
					}),
					clientExtensionResults: u(p, e => e.getClientExtensionResults())
				},
				w = {
					mediation: f(o),
					publicKey: s({
						challenge: s(a),
						timeout: f(o),
						rpId: f(o),
						allowCredentials: f([l]),
						userVerification: f(o),
						extensions: f(d)
					}),
					signal: f(o)
				},
				g = {
					type: s(o),
					id: s(o),
					rawId: s(a),
					authenticatorAttachment: f(o),
					response: s({
						clientDataJSON: s(a),
						authenticatorData: s(a),
						signature: s(a),
						userHandle: s(a)
					}),
					clientExtensionResults: u(p, e => e.getClientExtensionResults())
				};
			async function y(e) {
				let t = await navigator.credentials.create(c(r, h, e));
				return c(i, v, t)
			}
			async function m(e) {
				let t = await navigator.credentials.get(c(r, w, e));
				return c(i, g, t)
			}
		}
	}
]);
//# sourceMappingURL=2bdc1fbb613bf031.js.map