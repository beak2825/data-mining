(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
	["44839"], {
		877369: function(e, t) {
			"use strict";
			t.byteLength = function(e) {
				var t = c(e),
					r = t[0],
					n = t[1];
				return (r + n) * 3 / 4 - n
			}, t.toByteArray = function(e) {
				var t, r, i = c(e),
					a = i[0],
					s = i[1],
					l = new o((a + s) * 3 / 4 - s),
					d = 0,
					h = s > 0 ? a - 4 : a;
				for (r = 0; r < h; r += 4) t = n[e.charCodeAt(r)] << 18 | n[e.charCodeAt(r + 1)] << 12 | n[e.charCodeAt(r + 2)] << 6 | n[e.charCodeAt(r + 3)], l[d++] = t >> 16 & 255, l[d++] = t >> 8 & 255, l[d++] = 255 & t;
				return 2 === s && (t = n[e.charCodeAt(r)] << 2 | n[e.charCodeAt(r + 1)] >> 4, l[d++] = 255 & t), 1 === s && (t = n[e.charCodeAt(r)] << 10 | n[e.charCodeAt(r + 1)] << 4 | n[e.charCodeAt(r + 2)] >> 2, l[d++] = t >> 8 & 255, l[d++] = 255 & t), l
			}, t.fromByteArray = function(e) {
				for (var t, n = e.length, o = n % 3, i = [], a = 0, s = n - o; a < s; a += 16383) i.push(function(e, t, n) {
					for (var o, i = [], a = t; a < n; a += 3) o = (e[a] << 16 & 0xff0000) + (e[a + 1] << 8 & 65280) + (255 & e[a + 2]), i.push(r[o >> 18 & 63] + r[o >> 12 & 63] + r[o >> 6 & 63] + r[63 & o]);
					return i.join("")
				}(e, a, a + 16383 > s ? s : a + 16383));
				return 1 === o ? i.push(r[(t = e[n - 1]) >> 2] + r[t << 4 & 63] + "==") : 2 === o && i.push(r[(t = (e[n - 2] << 8) + e[n - 1]) >> 10] + r[t >> 4 & 63] + r[t << 2 & 63] + "="), i.join("")
			};
			for (var r = [], n = [], o = "undefined" != typeof Uint8Array ? Uint8Array : Array, i = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", a = 0, s = i.length; a < s; ++a) r[a] = i[a], n[i.charCodeAt(a)] = a;

			function c(e) {
				var t = e.length;
				if (t % 4 > 0) throw Error("Invalid string. Length must be a multiple of 4");
				var r = e.indexOf("="); - 1 === r && (r = t);
				var n = r === t ? 0 : 4 - r % 4;
				return [r, n]
			}
			n[45] = 62, n[95] = 63
		},
		166516: function(e) {
			! function() {
				var t = function(e) {
					"use strict";
					e = e || {};
					var t, r, n, o, i, a, s, c, l, d, h, u, p, f, y, g, w = {
						bgColor: "#d00",
						textColor: "#fff",
						fontFamily: "sans-serif",
						fontStyle: "bold",
						type: "circle",
						position: "down",
						animation: "slide",
						elementId: !1,
						dataUrl: !1,
						win: window
					};
					(p = {}).ff = "undefined" != typeof InstallTrigger, p.chrome = !!window.chrome, p.opera = !!window.opera || navigator.userAgent.indexOf("Opera") >= 0, p.ie = !1, p.safari = Object.prototype.toString.call(window.HTMLElement).indexOf("Constructor") > 0, p.supported = p.chrome || p.ff || p.opera;
					var m = [];
					h = function() {}, c = u = !1;
					var x = {};
					x.ready = function() {
						c = !0, x.reset(), h()
					}, x.reset = function() {
						c && (m = [], l = !1, d = !1, a.clearRect(0, 0, o, n), a.drawImage(s, 0, 0, o, n), C.setIcon(i), window.clearTimeout(f), window.clearTimeout(y))
					}, x.start = function() {
						if (c && !d) {
							var e = function() {
								l = m[0], d = !1, m.length > 0 && (m.shift(), x.start())
							};
							if (m.length > 0) {
								d = !0;
								var r = function() {
									["type", "animation", "bgColor", "textColor", "fontFamily", "fontStyle"].forEach(function(e) {
										e in m[0].options && (t[e] = m[0].options[e])
									}), I.run(m[0].options, function() {
										e()
									}, !1)
								};
								l ? I.run(l.options, function() {
									r()
								}, !0) : r()
							}
						}
					};
					var v = {},
						b = function(e) {
							return e.n = "number" == typeof e.n ? Math.abs(0 | e.n) : e.n, e.x = o * e.x, e.y = n * e.y, e.w = o * e.w, e.h = n * e.h, e.len = ("" + e.n).length, e
						};

					function E(e) {
						if (e.paused || e.ended || u) return !1;
						try {
							a.clearRect(0, 0, o, n), a.drawImage(e, 0, 0, o, n)
						} catch (e) {}
						y = setTimeout(function() {
							E(e)
						}, I.duration), C.setIcon(i)
					}
					v.circle = function(e) {
						e = b(e);
						var r = !1;
						2 === e.len ? (e.x = e.x - .4 * e.w, e.w = 1.4 * e.w, r = !0) : e.len >= 3 && (e.x = e.x - .65 * e.w, e.w = 1.65 * e.w, r = !0), a.clearRect(0, 0, o, n), a.drawImage(s, 0, 0, o, n), a.beginPath(), a.font = t.fontStyle + " " + Math.floor(e.h * (e.n > 99 ? .85 : 1)) + "px " + t.fontFamily, a.textAlign = "center", r ? (a.moveTo(e.x + e.w / 2, e.y), a.lineTo(e.x + e.w - e.h / 2, e.y), a.quadraticCurveTo(e.x + e.w, e.y, e.x + e.w, e.y + e.h / 2), a.lineTo(e.x + e.w, e.y + e.h - e.h / 2), a.quadraticCurveTo(e.x + e.w, e.y + e.h, e.x + e.w - e.h / 2, e.y + e.h), a.lineTo(e.x + e.h / 2, e.y + e.h), a.quadraticCurveTo(e.x, e.y + e.h, e.x, e.y + e.h - e.h / 2), a.lineTo(e.x, e.y + e.h / 2), a.quadraticCurveTo(e.x, e.y, e.x + e.h / 2, e.y)) : a.arc(e.x + e.w / 2, e.y + e.h / 2, e.h / 2, 0, 2 * Math.PI), a.fillStyle = "rgba(" + t.bgColor.r + "," + t.bgColor.g + "," + t.bgColor.b + "," + e.o + ")", a.fill(), a.closePath(), a.beginPath(), a.stroke(), a.fillStyle = "rgba(" + t.textColor.r + "," + t.textColor.g + "," + t.textColor.b + "," + e.o + ")", "number" == typeof e.n && e.n > 999 ? a.fillText((e.n > 9999 ? 9 : Math.floor(e.n / 1e3)) + "k+", Math.floor(e.x + e.w / 2), Math.floor(e.y + e.h - .2 * e.h)) : a.fillText(e.n, Math.floor(e.x + e.w / 2), Math.floor(e.y + e.h - .15 * e.h)), a.closePath()
					}, v.rectangle = function(e) {
						e = b(e);
						2 === e.len ? (e.x = e.x - .4 * e.w, e.w = 1.4 * e.w) : e.len >= 3 && (e.x = e.x - .65 * e.w, e.w = 1.65 * e.w), a.clearRect(0, 0, o, n), a.drawImage(s, 0, 0, o, n), a.beginPath(), a.font = t.fontStyle + " " + Math.floor(e.h * (e.n > 99 ? .9 : 1)) + "px " + t.fontFamily, a.textAlign = "center", a.fillStyle = "rgba(" + t.bgColor.r + "," + t.bgColor.g + "," + t.bgColor.b + "," + e.o + ")", a.fillRect(e.x, e.y, e.w, e.h), a.fillStyle = "rgba(" + t.textColor.r + "," + t.textColor.g + "," + t.textColor.b + "," + e.o + ")", "number" == typeof e.n && e.n > 999 ? a.fillText((e.n > 9999 ? 9 : Math.floor(e.n / 1e3)) + "k+", Math.floor(e.x + e.w / 2), Math.floor(e.y + e.h - .2 * e.h)) : a.fillText(e.n, Math.floor(e.x + e.w / 2), Math.floor(e.y + e.h - .15 * e.h)), a.closePath()
					};
					var C = {};

					function A(e) {
						e = e.replace(/^#?([a-f\d])([a-f\d])([a-f\d])$/i, function(e, t, r, n) {
							return t + t + r + r + n + n
						});
						var t = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(e);
						return !!t && {
							r: parseInt(t[1], 16),
							g: parseInt(t[2], 16),
							b: parseInt(t[3], 16)
						}
					}

					function R(e, t) {
						var r, n = {};
						for (r in e) n[r] = e[r];
						for (r in t) n[r] = t[r];
						return n
					}
					C.getIcon = function() {
						var e = !1;
						return t.element ? e = t.element : t.elementId ? (e = g.getElementById(t.elementId)).setAttribute("href", e.getAttribute("src")) : !1 === (e = function() {
							for (var e = g.getElementsByTagName("head")[0].getElementsByTagName("link"), t = e.length, r = t - 1; r >= 0; r--)
								if (/(^|\s)icon(\s|$)/i.test(e[r].getAttribute("rel"))) return e[r];
							return !1
						}()) && ((e = g.createElement("link")).setAttribute("rel", "icon"), g.getElementsByTagName("head")[0].appendChild(e)), e.setAttribute("type", "image/png"), e
					}, C.setIcon = function(e) {
						var n = e.toDataURL("image/png");
						if (t.dataUrl && t.dataUrl(n), t.element) t.element.setAttribute("href", n), t.element.setAttribute("src", n);
						else if (t.elementId) {
							var o = g.getElementById(t.elementId);
							o.setAttribute("href", n), o.setAttribute("src", n)
						} else if (p.ff || p.opera) {
							var i = r;
							r = g.createElement("link"), p.opera && r.setAttribute("rel", "icon"), r.setAttribute("rel", "icon"), r.setAttribute("type", "image/png"), g.getElementsByTagName("head")[0].appendChild(r), r.setAttribute("href", n), i.parentNode && i.parentNode.removeChild(i)
						} else r.setAttribute("href", n)
					};
					var I = {};
					I.duration = 40, I.types = {}, I.types.fade = [{
						x: .4,
						y: .4,
						w: .6,
						h: .6,
						o: 0
					}, {
						x: .4,
						y: .4,
						w: .6,
						h: .6,
						o: .1
					}, {
						x: .4,
						y: .4,
						w: .6,
						h: .6,
						o: .2
					}, {
						x: .4,
						y: .4,
						w: .6,
						h: .6,
						o: .3
					}, {
						x: .4,
						y: .4,
						w: .6,
						h: .6,
						o: .4
					}, {
						x: .4,
						y: .4,
						w: .6,
						h: .6,
						o: .5
					}, {
						x: .4,
						y: .4,
						w: .6,
						h: .6,
						o: .6
					}, {
						x: .4,
						y: .4,
						w: .6,
						h: .6,
						o: .7
					}, {
						x: .4,
						y: .4,
						w: .6,
						h: .6,
						o: .8
					}, {
						x: .4,
						y: .4,
						w: .6,
						h: .6,
						o: .9
					}, {
						x: .4,
						y: .4,
						w: .6,
						h: .6,
						o: 1
					}], I.types.none = [{
						x: .4,
						y: .4,
						w: .6,
						h: .6,
						o: 1
					}], I.types.pop = [{
						x: 1,
						y: 1,
						w: 0,
						h: 0,
						o: 1
					}, {
						x: .9,
						y: .9,
						w: .1,
						h: .1,
						o: 1
					}, {
						x: .8,
						y: .8,
						w: .2,
						h: .2,
						o: 1
					}, {
						x: .7,
						y: .7,
						w: .3,
						h: .3,
						o: 1
					}, {
						x: .6,
						y: .6,
						w: .4,
						h: .4,
						o: 1
					}, {
						x: .5,
						y: .5,
						w: .5,
						h: .5,
						o: 1
					}, {
						x: .4,
						y: .4,
						w: .6,
						h: .6,
						o: 1
					}], I.types.popFade = [{
						x: .75,
						y: .75,
						w: 0,
						h: 0,
						o: 0
					}, {
						x: .65,
						y: .65,
						w: .1,
						h: .1,
						o: .2
					}, {
						x: .6,
						y: .6,
						w: .2,
						h: .2,
						o: .4
					}, {
						x: .55,
						y: .55,
						w: .3,
						h: .3,
						o: .6
					}, {
						x: .5,
						y: .5,
						w: .4,
						h: .4,
						o: .8
					}, {
						x: .45,
						y: .45,
						w: .5,
						h: .5,
						o: .9
					}, {
						x: .4,
						y: .4,
						w: .6,
						h: .6,
						o: 1
					}], I.types.slide = [{
						x: .4,
						y: 1,
						w: .6,
						h: .6,
						o: 1
					}, {
						x: .4,
						y: .9,
						w: .6,
						h: .6,
						o: 1
					}, {
						x: .4,
						y: .9,
						w: .6,
						h: .6,
						o: 1
					}, {
						x: .4,
						y: .8,
						w: .6,
						h: .6,
						o: 1
					}, {
						x: .4,
						y: .7,
						w: .6,
						h: .6,
						o: 1
					}, {
						x: .4,
						y: .6,
						w: .6,
						h: .6,
						o: 1
					}, {
						x: .4,
						y: .5,
						w: .6,
						h: .6,
						o: 1
					}, {
						x: .4,
						y: .4,
						w: .6,
						h: .6,
						o: 1
					}], I.run = function(e, r, n, o) {
						var a = I.types[g.hidden || g.msHidden || g.webkitHidden || g.mozHidden ? "none" : t.animation];
						if (o = !0 === n ? void 0 !== o ? o : a.length - 1 : void 0 !== o ? o : 0, r = r || function() {}, !(o < a.length) || !(o >= 0)) return void r();
						v[t.type](R(e, a[o])), f = setTimeout(function() {
							n ? o -= 1 : o += 1, I.run(e, r, n, o)
						}, I.duration), C.setIcon(i)
					}, (t = R(w, e)).bgColor = A(t.bgColor), t.textColor = A(t.textColor), t.position = t.position.toLowerCase(), t.animation = I.types["" + t.animation] ? t.animation : w.animation, g = t.win.document;
					var T = t.position.indexOf("up") > -1,
						_ = t.position.indexOf("left") > -1;
					if (T || _)
						for (var M = 0; M < I.types["" + t.animation].length; M++) {
							var U = I.types["" + t.animation][M];
							T && (U.y < .6 ? U.y = U.y - .4 : U.y = U.y - 2 * U.y + (1 - U.w)), _ && (U.x < .6 ? U.x = U.x - .4 : U.x = U.x - 2 * U.x + (1 - U.h)), I.types["" + t.animation][M] = U
						}
					return t.type = v["" + t.type] ? t.type : w.type, r = C.getIcon(), i = document.createElement("canvas"), s = document.createElement("img"), r.hasAttribute("href") ? (s.setAttribute("crossOrigin", "anonymous"), s.onload = function() {
						n = s.height > 0 ? s.height : 32, o = s.width > 0 ? s.width : 32, i.height = n, i.width = o, a = i.getContext("2d"), x.ready()
					}, s.setAttribute("src", r.getAttribute("href"))) : (s.onload = function() {
						n = 32, o = 32, s.height = n, s.width = o, i.height = n, i.width = o, a = i.getContext("2d"), x.ready()
					}, s.setAttribute("src", "")), {
						badge: function(e, t) {
							t = ("string" == typeof t ? {
								animation: t
							} : t) || {}, h = function() {
								try {
									if ("number" == typeof e ? e > 0 : "" !== e) {
										var r = {
											type: "badge",
											options: {
												n: e
											}
										};
										if ("animation" in t && I.types["" + t.animation] && (r.options.animation = "" + t.animation), "type" in t && v["" + t.type] && (r.options.type = "" + t.type), ["bgColor", "textColor"].forEach(function(e) {
												e in t && (r.options[e] = A(t[e]))
											}), ["fontStyle", "fontFamily"].forEach(function(e) {
												e in t && (r.options[e] = t[e])
											}), m.push(r), m.length > 100) throw Error("Too many badges requests in queue.");
										x.start()
									} else x.reset()
								} catch (e) {
									throw Error("Error setting badge. Message: " + e.message)
								}
							}, c && h()
						},
						video: function(e) {
							h = function() {
								try {
									if ("stop" === e) {
										u = !0, x.reset(), u = !1;
										return
									}
									e.addEventListener("play", function() {
										E(this)
									}, !1)
								} catch (e) {
									throw Error("Error setting video. Message: " + e.message)
								}
							}, c && h()
						},
						image: function(e) {
							h = function() {
								try {
									var t = e.width,
										r = e.height,
										s = document.createElement("img"),
										c = t / o < r / n ? t / o : r / n;
									s.setAttribute("crossOrigin", "anonymous"), s.onload = function() {
										a.clearRect(0, 0, o, n), a.drawImage(s, 0, 0, o, n), C.setIcon(i)
									}, s.setAttribute("src", e.getAttribute("src")), s.height = r / c, s.width = t / c
								} catch (e) {
									throw Error("Error setting image. Message: " + e.message)
								}
							}, c && h()
						},
						webcam: function(e) {
							if (window.URL && window.URL.createObjectURL || (window.URL = window.URL || {}, window.URL.createObjectURL = function(e) {
									return e
								}), p.supported) {
								var t = !1;
								navigator.getUserMedia = navigator.getUserMedia || navigator.oGetUserMedia || navigator.msGetUserMedia || navigator.mozGetUserMedia || navigator.webkitGetUserMedia, h = function() {
									try {
										if ("stop" === e) {
											u = !0, x.reset(), u = !1;
											return
										}(t = document.createElement("video")).width = o, t.height = n, navigator.getUserMedia({
											video: !0,
											audio: !1
										}, function(e) {
											t.src = URL.createObjectURL(e), t.play(), E(t)
										}, function() {})
									} catch (e) {
										throw Error("Error setting webcam. Message: " + e.message)
									}
								}, c && h()
							}
						},
						reset: x.reset,
						browser: {
							supported: p.supported
						}
					}
				};
				"undefined" != typeof define && define.amd ? define([], function() {
					return t
				}) : e.exports ? e.exports = t : this.Favico = t
			}()
		},
		740442: function(e, t, r) {
			"use strict";
			r.d(t, {
				SV: () => a
			});
			var n = r(73800);
			let o = (0, n.createContext)(null),
				i = {
					didCatch: !1,
					error: null
				};
			class a extends n.Component {
				constructor(e) {
					super(e), this.resetErrorBoundary = this.resetErrorBoundary.bind(this), this.state = i
				}
				static getDerivedStateFromError(e) {
					return {
						didCatch: !0,
						error: e
					}
				}
				resetErrorBoundary() {
					let {
						error: e
					} = this.state;
					if (null !== e) {
						for (var t, r, n = arguments.length, o = Array(n), a = 0; a < n; a++) o[a] = arguments[a];
						null == (t = (r = this.props).onReset) || t.call(r, {
							args: o,
							reason: "imperative-api"
						}), this.setState(i)
					}
				}
				componentDidCatch(e, t) {
					var r, n;
					null == (r = (n = this.props).onError) || r.call(n, e, t)
				}
				componentDidUpdate(e, t) {
					let {
						didCatch: r
					} = this.state, {
						resetKeys: n
					} = this.props;
					if (r && null !== t.error && function() {
							let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [],
								t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [];
							return e.length !== t.length || e.some((e, r) => !Object.is(e, t[r]))
						}(e.resetKeys, n)) {
						var o, a;
						null == (o = (a = this.props).onReset) || o.call(a, {
							next: n,
							prev: e.resetKeys,
							reason: "keys"
						}), this.setState(i)
					}
				}
				render() {
					let {
						children: e,
						fallbackRender: t,
						FallbackComponent: r,
						fallback: i
					} = this.props, {
						didCatch: a,
						error: s
					} = this.state, c = e;
					if (a) {
						let e = {
							error: s,
							resetErrorBoundary: this.resetErrorBoundary
						};
						if ("function" == typeof t) c = t(e);
						else if (r) c = (0, n.createElement)(r, e);
						else if (void 0 !== i) c = i;
						else throw s
					}
					return (0, n.createElement)(o.Provider, {
						value: {
							didCatch: a,
							error: s,
							resetErrorBoundary: this.resetErrorBoundary
						}
					}, c)
				}
			}
		},
		15155: function(e, t, r) {
			"use strict";
			r.d(t, {
				Z: () => c
			});
			var n = r(73800);

			function o(e, t) {
				return (o = Object.setPrototypeOf || function(e, t) {
					return e.__proto__ = t, e
				})(e, t)
			}
			var i = function(e) {
					var t = document.createElement("script");
					t.async = !0, t.defer = !0, t.src = e, document.head && document.head.appendChild(t)
				},
				a = /(http|https):\/\/(www)?.+\/recaptcha/,
				s = ["sitekey", "theme", "size", "badge", "tabindex", "hl", "isolated"],
				c = function(e) {
					function t() {
						for (var t, r = arguments.length, o = Array(r), s = 0; s < r; s++) o[s] = arguments[s];
						return (t = e.call.apply(e, [this].concat(o)) || this).container = void 0, t.timer = void 0, t.state = {
							instanceKey: Date.now(),
							ready: !1,
							rendered: !1,
							invisible: "invisible" === t.props.size
						}, t._isAvailable = function() {
							var e;
							return !!(null == (e = window.grecaptcha) ? void 0 : e.ready)
						}, t._inject = function() {
							t.props.inject && !Array.from(document.scripts).reduce(function(e, t) {
								return e || a.test(t.src)
							}, !1) && i("https://recaptcha.net/recaptcha/api.js?render=explicit" + (t.props.hl ? "&hl=" + t.props.hl : ""))
						}, t._prepare = function() {
							var e = t.props,
								r = e.explicit,
								n = e.onLoad;
							window.grecaptcha.ready(function() {
								t.setState({
									ready: !0
								}, function() {
									r || t.renderExplicitly(), n && n()
								})
							})
						}, t._renderRecaptcha = function(e, t) {
							return window.grecaptcha.render(e, t)
						}, t._resetRecaptcha = function() {
							return window.grecaptcha.reset(t.state.instanceId)
						}, t._executeRecaptcha = function() {
							return window.grecaptcha.execute(t.state.instanceId)
						}, t._getResponseRecaptcha = function() {
							return window.grecaptcha.getResponse(t.state.instanceId)
						}, t._onVerify = function(e) {
							return t.props.onVerify(e)
						}, t._onExpire = function() {
							return t.props.onExpire && t.props.onExpire()
						}, t._onError = function() {
							return t.props.onError && t.props.onError()
						}, t._stopTimer = function() {
							t.timer && clearInterval(t.timer)
						}, t.componentDidMount = function() {
							t._inject(), t._isAvailable() ? t._prepare() : t.timer = window.setInterval(function() {
								t._isAvailable() && (t._prepare(), t._stopTimer())
							}, 500)
						}, t.componentWillUnmount = function() {
							t._stopTimer()
						}, t.renderExplicitly = function() {
							return new Promise(function(e, r) {
								if (t.state.rendered) return r(Error("This recaptcha instance has been already rendered."));
								if (!t.state.ready || !t.container) return r(Error("Recaptcha is not ready for rendering yet."));
								var n = t._renderRecaptcha(t.container, {
									sitekey: t.props.sitekey,
									theme: t.props.theme,
									size: t.props.size,
									badge: t.state.invisible ? t.props.badge : void 0,
									tabindex: t.props.tabindex,
									callback: t._onVerify,
									"expired-callback": t._onExpire,
									"error-callback": t._onError,
									isolated: t.state.invisible ? t.props.isolated : void 0,
									hl: t.state.invisible ? void 0 : t.props.hl
								});
								t.setState({
									instanceId: n,
									rendered: !0
								}, function() {
									t.props.onRender && t.props.onRender(), e()
								})
							})
						}, t.reset = function() {
							return new Promise(function(e, r) {
								if (t.state.rendered) return t._resetRecaptcha(), e();
								r(Error("This recaptcha instance did not render yet."))
							})
						}, t.execute = function() {
							return new Promise(function(e, r) {
								return t.state.invisible ? (t.state.rendered && (t._executeRecaptcha(), e()), r(Error("This recaptcha instance did not render yet."))) : r(Error("Manual execution is only available for invisible size."))
							})
						}, t.getResponse = function() {
							return new Promise(function(e, r) {
								if (t.state.rendered) return e(t._getResponseRecaptcha());
								r(Error("This recaptcha instance did not render yet."))
							})
						}, t.render = function() {
							var e = n.createElement("div", {
								key: t.state.instanceKey,
								id: t.props.id,
								className: t.props.className,
								ref: function(e) {
									return t.container = e
								}
							});
							return t.props.children ? t.props.children({
								renderExplicitly: t.renderExplicitly,
								reset: t.reset,
								execute: t.execute,
								getResponse: t.getResponse,
								recaptchaComponent: e
							}) : e
						}, t
					}
					return t.prototype = Object.create(e.prototype), t.prototype.constructor = t, o(t, e), t.getDerivedStateFromProps = function(e, t) {
						var r = "invisible" === e.size;
						return r !== t.invisible ? {
							invisible: r
						} : null
					}, t.prototype.componentDidUpdate = function(e) {
						var t = this;
						s.reduce(function(r, n) {
							return t.props[n] !== e[n] ? [].concat(r, [n]) : r
						}, []).length > 0 && this.setState({
							instanceKey: Date.now(),
							rendered: !1
						}, function() {
							t.props.explicit || t.renderExplicitly()
						})
					}, t
				}(n.Component);
			c.defaultProps = {
				id: "",
				className: "g-recaptcha",
				theme: "light",
				size: "normal",
				badge: "bottomright",
				tabindex: 0,
				explicit: !1,
				inject: !0,
				isolated: !1,
				hl: ""
			}
		}
	}
]);
//# sourceMappingURL=0bf93813a511ddc5.js.map