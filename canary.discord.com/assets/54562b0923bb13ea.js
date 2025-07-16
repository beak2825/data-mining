"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
	["49645"], {
		440717: function(e, t, n) {
			n.d(t, {
				L: () => l
			});
			var i = n(380189),
				r = n(73800),
				o = n(836388),
				s = n(893346),
				a = n(262083);

			function l(e) {
				let {
					isDisabled: t,
					onBlurWithin: n,
					onFocusWithin: l,
					onFocusWithinChange: u
				} = e, c = (0, r.useRef)({
					isFocusWithin: !1
				}), {
					addGlobalListener: d,
					removeAllGlobalListeners: f
				} = (0, o.x)(), v = (0, r.useCallback)(e => {
					e.currentTarget.contains(e.target) && c.current.isFocusWithin && !e.currentTarget.contains(e.relatedTarget) && (c.current.isFocusWithin = !1, f(), n && n(e), u && u(!1))
				}, [n, u, c, f]), p = (0, i.d0)(v), b = (0, r.useCallback)(e => {
					if (!e.currentTarget.contains(e.target)) return;
					let t = (0, s.r3)(e.target),
						n = (0, a.vY)(t);
					if (!c.current.isFocusWithin && n === (0, a.NI)(e.nativeEvent)) {
						l && l(e), u && u(!0), c.current.isFocusWithin = !0, p(e);
						let n = e.currentTarget;
						d(t, "focus", e => {
							if (c.current.isFocusWithin && !(0, a.bE)(n, e.target)) {
								let r = new(0, i.Yf)("blur", new t.defaultView.FocusEvent("blur", {
									relatedTarget: e.target
								}));
								r.target = n, r.currentTarget = n, v(r)
							}
						}, {
							capture: !0
						})
					}
				}, [l, u, p, d, v]);
				return t ? {
					focusWithinProps: {
						onFocus: void 0,
						onBlur: void 0
					}
				} : {
					focusWithinProps: {
						onFocus: b,
						onBlur: v
					}
				}
			}
		},
		380189: function(e, t, n) {
			n.d(t, {
				Yf: () => s,
				d0: () => a
			});
			var i = n(365449),
				r = n(138224),
				o = n(73800);
			class s {
				isDefaultPrevented() {
					return this.nativeEvent.defaultPrevented
				}
				preventDefault() {
					this.defaultPrevented = !0, this.nativeEvent.preventDefault()
				}
				stopPropagation() {
					this.nativeEvent.stopPropagation(), this.isPropagationStopped = () => !0
				}
				isPropagationStopped() {
					return !1
				}
				persist() {}
				constructor(e, t) {
					this.nativeEvent = t, this.target = t.target, this.currentTarget = t.currentTarget, this.relatedTarget = t.relatedTarget, this.bubbles = t.bubbles, this.cancelable = t.cancelable, this.defaultPrevented = t.defaultPrevented, this.eventPhase = t.eventPhase, this.isTrusted = t.isTrusted, this.timeStamp = t.timeStamp, this.type = e
				}
			}

			function a(e) {
				let t = (0, o.useRef)({
					isFocused: !1,
					observer: null
				});
				(0, i.b)(() => {
					let e = t.current;
					return () => {
						e.observer && (e.observer.disconnect(), e.observer = null)
					}
				}, []);
				let n = (0, r.i)(t => {
					null == e || e(t)
				});
				return (0, o.useCallback)(e => {
					if (e.target instanceof HTMLButtonElement || e.target instanceof HTMLInputElement || e.target instanceof HTMLTextAreaElement || e.target instanceof HTMLSelectElement) {
						t.current.isFocused = !0;
						let i = e.target;
						i.addEventListener("focusout", e => {
							t.current.isFocused = !1, i.disabled && n(new s("blur", e)), t.current.observer && (t.current.observer.disconnect(), t.current.observer = null)
						}, {
							once: !0
						}), t.current.observer = new MutationObserver(() => {
							if (t.current.isFocused && i.disabled) {
								var e;
								null == (e = t.current.observer) || e.disconnect();
								let n = i === document.activeElement ? null : document.activeElement;
								i.dispatchEvent(new FocusEvent("blur", {
									relatedTarget: n
								})), i.dispatchEvent(new FocusEvent("focusout", {
									bubbles: !0,
									relatedTarget: n
								}))
							}
						}), t.current.observer.observe(i, {
							attributes: !0,
							attributeFilter: ["disabled"]
						})
					}
				}, [n])
			}
		},
		262083: function(e, t, n) {
			n.d(t, {
				NI: () => a,
				bE: () => o,
				vY: () => s
			});
			var i = n(893346),
				r = n(109683);

			function o(e, t) {
				if (!(0, r.Wr)()) return !!t && !!e && e.contains(t);
				if (!e || !t) return !1;
				let n = t;
				for (; null !== n;) {
					if (n === e) return !0;
					n = "SLOT" === n.tagName && n.assignedSlot ? n.assignedSlot.parentNode : (0, i.Zq)(n) ? n.host : n.parentNode
				}
				return !1
			}
			let s = (e = document) => {
				var t;
				if (!(0, r.Wr)()) return e.activeElement;
				let n = e.activeElement;
				for (; n && "shadowRoot" in n && (null == (t = n.shadowRoot) ? void 0 : t.activeElement);) n = n.shadowRoot.activeElement;
				return n
			};

			function a(e) {
				return (0, r.Wr)() && e.target.shadowRoot && e.composedPath ? e.composedPath()[0] : e.target
			}
		},
		406954: function(e, t, n) {
			n.d(t, {
				t: () => i
			});

			function i(...e) {
				return (...t) => {
					for (let n of e) "function" == typeof n && n(...t)
				}
			}
		},
		893346: function(e, t, n) {
			n.d(t, {
				Zq: () => r,
				r3: () => i
			});
			let i = e => {
				var t;
				return null != (t = null == e ? void 0 : e.ownerDocument) ? t : document
			};

			function r(e) {
				return null !== e && "object" == typeof e && "nodeType" in e && "number" == typeof e.nodeType && e.nodeType === Node.DOCUMENT_FRAGMENT_NODE && "host" in e
			}
		},
		944296: function(e, t, n) {
			n.d(t, {
				d: () => s
			});
			var i = n(406954),
				r = n(9250),
				o = n(90620);

			function s(...e) {
				let t = {
					...e[0]
				};
				for (let n = 1; n < e.length; n++) {
					let s = e[n];
					for (let e in s) {
						let n = t[e],
							a = s[e];
						"function" == typeof n && "function" == typeof a && "o" === e[0] && "n" === e[1] && e.charCodeAt(2) >= 65 && 90 >= e.charCodeAt(2) ? t[e] = (0, i.t)(n, a) : ("className" === e || "UNSAFE_className" === e) && "string" == typeof n && "string" == typeof a ? t[e] = (0, o.Z)(n, a) : "id" === e && n && a ? t.id = (0, r.ur)(n, a) : t[e] = void 0 !== a ? a : n
					}
				}
				return t
			}
		},
		138224: function(e, t, n) {
			n.d(t, {
				i: () => o
			});
			var i = n(365449),
				r = n(73800);

			function o(e) {
				let t = (0, r.useRef)(null);
				return (0, i.b)(() => {
					t.current = e
				}, [e]), (0, r.useCallback)((...e) => {
					let n = t.current;
					return null == n ? void 0 : n(...e)
				}, [])
			}
		},
		836388: function(e, t, n) {
			n.d(t, {
				x: () => r
			});
			var i = n(73800);

			function r() {
				let e = (0, i.useRef)(new Map),
					t = (0, i.useCallback)((t, n, i, r) => {
						let o = (null == r ? void 0 : r.once) ? (...t) => {
							e.current.delete(i), i(...t)
						} : i;
						e.current.set(i, {
							type: n,
							eventTarget: t,
							fn: o,
							options: r
						}), t.addEventListener(n, o, r)
					}, []),
					n = (0, i.useCallback)((t, n, i, r) => {
						var o;
						let s = (null == (o = e.current.get(i)) ? void 0 : o.fn) || i;
						t.removeEventListener(n, s, r), e.current.delete(i)
					}, []),
					r = (0, i.useCallback)(() => {
						e.current.forEach((e, t) => {
							n(e.eventTarget, e.type, t, e.options)
						})
					}, [n]);
				return (0, i.useEffect)(() => r, [r]), {
					addGlobalListener: t,
					removeGlobalListener: n,
					removeAllGlobalListeners: r
				}
			}
		},
		9250: function(e, t, n) {
			n.d(t, {
				ur: () => r
			}), n(73800), "undefined" != typeof window && window.document && window.document.createElement;
			let i = new Map;

			function r(e, t) {
				if (e === t) return e;
				let n = i.get(e);
				if (n) return n.forEach(e => e.current = t), t;
				let r = i.get(t);
				return r ? (r.forEach(t => t.current = e), e) : t
			}
			"undefined" != typeof FinalizationRegistry && new FinalizationRegistry(e => {
				i.delete(e)
			})
		},
		365449: function(e, t, n) {
			n.d(t, {
				b: () => r
			});
			var i = n(73800);
			let r = "undefined" != typeof document ? i.useLayoutEffect : () => {}
		},
		528708: function(e, t, n) {
			n.d(t, {
				T: () => a
			});
			var i = n(944296),
				r = n(73800),
				o = n(440717);
			let s = {
				border: 0,
				clip: "rect(0 0 0 0)",
				clipPath: "inset(50%)",
				height: "1px",
				margin: "-1px",
				overflow: "hidden",
				padding: 0,
				position: "absolute",
				width: "1px",
				whiteSpace: "nowrap"
			};

			function a(e) {
				let {
					children: t,
					elementType: n = "div",
					isFocusable: a,
					style: l,
					...u
				} = e, {
					visuallyHiddenProps: c
				} = function(e = {}) {
					let {
						style: t,
						isFocusable: n
					} = e, [i, a] = (0, r.useState)(!1), {
						focusWithinProps: l
					} = (0, o.L)({
						isDisabled: !n,
						onFocusWithinChange: e => a(e)
					}), u = (0, r.useMemo)(() => i ? t : t ? {
						...s,
						...t
					} : s, [i]);
					return {
						visuallyHiddenProps: {
							...l,
							style: u
						}
					}
				}(e);
				return r.createElement(n, (0, i.d)(u, c), t)
			}
		},
		109683: function(e, t, n) {
			n.d(t, {
				Wr: () => i
			});

			function i() {
				return !1
			}
		},
		90620: function(e, t, n) {
			n.d(t, {
				Z: () => i
			});
			let i = function() {
				for (var e, t, n = 0, i = "", r = arguments.length; n < r; n++)(e = arguments[n]) && (t = function e(t) {
					var n, i, r = "";
					if ("string" == typeof t || "number" == typeof t) r += t;
					else if ("object" == typeof t)
						if (Array.isArray(t)) {
							var o = t.length;
							for (n = 0; n < o; n++) t[n] && (i = e(t[n])) && (r && (r += " "), r += i)
						} else
							for (i in t) t[i] && (r && (r += " "), r += i);
					return r
				}(e)) && (i && (i += " "), i += t);
				return i
			}
		},
		697741: function(e, t, n) {
			n.d(t, {
				$: () => L
			});
			let i = {
					ational: "ate",
					tional: "tion",
					enci: "ence",
					anci: "ance",
					izer: "ize",
					bli: "ble",
					alli: "al",
					entli: "ent",
					eli: "e",
					ousli: "ous",
					ization: "ize",
					ation: "ate",
					ator: "ate",
					alism: "al",
					iveness: "ive",
					fulness: "ful",
					ousness: "ous",
					aliti: "al",
					iviti: "ive",
					biliti: "ble",
					logi: "log"
				},
				r = {
					icate: "ic",
					ative: "",
					alize: "al",
					iciti: "ic",
					ical: "ic",
					ful: "",
					ness: ""
				},
				o = "[aeiouy]",
				s = "([^aeiou][^aeiouy]*)",
				a = "(" + o + "[aeiou]*)",
				l = RegExp("^" + s + "?" + a + s),
				u = RegExp("^" + s + "?" + a + s + a + "?$"),
				c = RegExp("^" + s + "?(" + a + s + "){2,}"),
				d = RegExp("^" + s + "?" + o),
				f = RegExp("^" + s + o + "[^aeiouwxy]$"),
				v = /ll$/,
				p = /^(.+?)e$/,
				b = /^(.+?)y$/,
				g = /^(.+?(s|t))(ion)$/,
				h = /^(.+?)(ed|ing)$/,
				m = /(at|bl|iz)$/,
				E = /^(.+?)eed$/,
				y = /^.+?[^s]s$/,
				T = /^.+?(ss|i)es$/,
				w = /([^aeiouylsz])\1$/,
				F = /^(.+?)(ational|tional|enci|anci|izer|bli|alli|entli|eli|ousli|ization|ation|ator|alism|iveness|fulness|ousness|aliti|iviti|biliti|logi)$/,
				x = /^(.+?)(icate|ative|alize|iciti|ical|ful|ness)$/,
				P = /^(.+?)(al|ance|ence|er|ic|able|ible|ant|ement|ment|ent|ou|ism|ate|iti|ous|ive|ize)$/;

			function L(e) {
				let t, n = String(e).toLowerCase();
				if (n.length < 3) return n;
				let o = !1;
				return 121 === n.codePointAt(0) && (o = !0, n = "Y" + n.slice(1)), T.test(n) ? n = n.slice(0, -2) : y.test(n) && (n = n.slice(0, -1)), (t = E.exec(n)) ? l.test(t[1]) && (n = n.slice(0, -1)) : (t = h.exec(n)) && d.test(t[1]) && (n = t[1], m.test(n) ? n += "e" : w.test(n) ? n = n.slice(0, -1) : f.test(n) && (n += "e")), (t = b.exec(n)) && d.test(t[1]) && (n = t[1] + "i"), (t = F.exec(n)) && l.test(t[1]) && (n = t[1] + i[t[2]]), (t = x.exec(n)) && l.test(t[1]) && (n = t[1] + r[t[2]]), (t = P.exec(n)) ? c.test(t[1]) && (n = t[1]) : (t = g.exec(n)) && c.test(t[1]) && (n = t[1]), (t = p.exec(n)) && (c.test(t[1]) || u.test(t[1]) && !f.test(t[1])) && (n = t[1]), v.test(n) && c.test(n) && (n = n.slice(0, -1)), o && (n = "y" + n.slice(1)), n
			}
		}
	}
]);
//# sourceMappingURL=54562b0923bb13ea.js.map