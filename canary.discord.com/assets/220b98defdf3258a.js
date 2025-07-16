"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
	["20087"], {
		327802: function(t, e, r) {
			r.d(e, {
				X: () => c,
				Z: () => u
			}), r(415506);
			var n = r(255367);
			r(73800);
			var i = r(481060),
				l = r(372129),
				o = r(205822),
				a = r(731994),
				s = r(388032);
			let c = t => {
					let {
						className: e,
						onSuccess: c,
						onError: u
					} = t, f = async t => {
						try {
							let {
								dataURI: e
							} = await (0, l.po)(t);
							c({
								file: t,
								data: e
							})
						} catch (t) {
							u(Error("Failed to read file", {
								cause: t
							}))
						}
					};
					return (0, n.jsx)(o.Z, {
						className: e,
						title: s.intl.string(s.t.DU0dy8),
						description: s.intl.string(s.t.bpycfH),
						icons: a.pA,
						onDrop: t => {
							let e = null == t ? void 0 : t[0];
							null != e && (0, i.ZDy)(async () => {
								let {
									default: t
								} = await r.e("16169").then(r.bind(r, 935333));
								return r => (0, n.jsx)(t, function(t) {
									for (var e = 1; e < arguments.length; e++) {
										var r = null != arguments[e] ? arguments[e] : {},
											n = Object.keys(r);
										"function" == typeof Object.getOwnPropertySymbols && (n = n.concat(Object.getOwnPropertySymbols(r).filter(function(t) {
											return Object.getOwnPropertyDescriptor(r, t).enumerable
										}))), n.forEach(function(e) {
											var n;
											n = r[e], e in t ? Object.defineProperty(t, e, {
												value: n,
												enumerable: !0,
												configurable: !0,
												writable: !0
											}) : t[e] = n
										})
									}
									return t
								}({
									processFiles: () => f(e)
								}, r))
							})
						}
					})
				},
				u = function(t) {
					let {
						className: e,
						style: r,
						onDrop: i
					} = t;
					return (0, n.jsx)(o.Z, {
						className: e,
						style: r,
						title: s.intl.string(s.t.DU0dy8),
						description: s.intl.string(s.t.bpycfH),
						icons: a.pA,
						onDrop: i
					})
				}
		},
		426642: function(t, e, r) {
			r.d(e, {
				Z: () => f,
				d: () => u
			}), r(953529);
			var n, i = r(255367);
			r(73800);
			var l = r(692547),
				o = r(481060),
				a = r(752657),
				s = r(388032),
				c = r(135340),
				u = ((n = {})[n.TOO_BIG = 0] = "TOO_BIG", n[n.RATE_LIMIT = 1] = "RATE_LIMIT", n[n.TOO_MANY_EMOJI = 2] = "TOO_MANY_EMOJI", n[n.TOO_MANY_ANIMATED_EMOJI = 3] = "TOO_MANY_ANIMATED_EMOJI", n[n.WRONG_TYPE = 4] = "WRONG_TYPE", n[n.RESIZE_GIF = 5] = "RESIZE_GIF", n);
			let f = t => {
				let {
					error: e
				} = t, {
					type: r,
					filename: n
				} = e, {
					icon: u,
					description: f,
					color: d,
					tooltip: h
				} = {
					0: {
						icon: o.gm1,
						description: s.intl.string(s.t.YbdEFB),
						color: l.Z.unsafe_rawColors.RED_400.css,
						tooltip: s.intl.string(s.t.PanA4O)
					},
					4: {
						icon: o.LB9,
						description: s.intl.string(s.t["01Papq"]),
						color: l.Z.unsafe_rawColors.RED_400.css,
						tooltip: s.intl.string(s.t.PanA4O)
					},
					5: {
						icon: a.Z,
						description: s.intl.string(s.t.sp16MT),
						color: l.Z.unsafe_rawColors.RED_400.css,
						tooltip: s.intl.string(s.t.PanA4O)
					},
					1: {
						icon: o.EmW,
						description: s.intl.string(s.t["4rjikp"]),
						color: l.Z.unsafe_rawColors.ORANGE_345.css,
						tooltip: s.intl.string(s.t.dq9aTk)
					},
					2: {
						icon: o.d3s,
						description: s.intl.string(s.t["5VmbbG"]),
						color: l.Z.unsafe_rawColors.RED_400.css,
						tooltip: s.intl.string(s.t.PanA4O)
					},
					3: {
						icon: o.d3s,
						description: s.intl.string(s.t.rjFOZ2),
						color: l.Z.unsafe_rawColors.RED_400.css,
						tooltip: s.intl.string(s.t.PanA4O)
					}
				} [r];
				return (0, i.jsxs)("div", {
					className: c.emojiErrorItem,
					children: [(0, i.jsx)(u, {
						className: c.fileIcon,
						color: l.Z.unsafe_rawColors.PRIMARY_300.css
					}), (0, i.jsxs)(o.hjN, {
						className: c.fileInfo,
						children: [(0, i.jsx)(o.vwX, {
							className: c.fileName,
							children: n
						}), (0, i.jsx)(o.R94, {
							type: o.geA.DESCRIPTION,
							children: f
						})]
					}), (0, i.jsx)(o.DY3, {
						position: "right",
						text: h,
						children: (0, i.jsx)(o.P4T, {
							size: "custom",
							width: 20,
							height: 20,
							color: d
						})
					})]
				})
			}
		},
		372129: function(t, e, r) {
			r.d(e, {
				ZP: () => p,
				_j: () => d,
				po: () => f
			}), r(415506), r(539854), r(388685);
			var n = r(255367),
				i = r(73800),
				l = r(481060),
				o = r(53281),
				a = r(813197),
				s = r(426642),
				c = r(869783);

			function u(t) {
				for (var e = 1; e < arguments.length; e++) {
					var r = null != arguments[e] ? arguments[e] : {},
						n = Object.keys(r);
					"function" == typeof Object.getOwnPropertySymbols && (n = n.concat(Object.getOwnPropertySymbols(r).filter(function(t) {
						return Object.getOwnPropertyDescriptor(r, t).enumerable
					}))), n.forEach(function(e) {
						var n;
						n = r[e], e in t ? Object.defineProperty(t, e, {
							value: n,
							enumerable: !0,
							configurable: !0,
							writable: !0
						}) : t[e] = n
					})
				}
				return t
			}
			async function f(t) {
				try {
					let e = await new Promise((e, r) => {
							if (null != t) {
								let n = new FileReader;
								n.onload = t => {
									var n;
									"string" == typeof(null == (n = t.target) ? void 0 : n.result) ? e(t.target.result): r(Error("Failed to read file"))
								}, n.readAsDataURL(t)
							}
						}),
						r = new Image;
					return r.src = e, await r.decode(), {
						image: r,
						dataURI: e
					}
				} catch (t) {
					throw s.d.WRONG_TYPE
				}
			}
			async function d(t, e) {
				let r = [];
				for (let n = 0; n < t.length; n++) {
					let i = t[n];
					try {
						let {
							image: t,
							dataURI: n
						} = await f(i), l = i.type === c.m.MP4 ? await e(n, i) : await e(n, i, t);
						null != l && r.push({
							type: l,
							filename: i.name
						})
					} catch (t) {
						r.push({
							type: t,
							filename: i.name
						})
					}
				}
				r.length > 0 && h(r)
			}
			let h = t => {
					(0, l.ZDy)(async () => {
						let {
							default: e
						} = await r.e("68720").then(r.bind(r, 70846));
						return r => (0, n.jsx)(e, u({
							errors: t
						}, r))
					})
				},
				p = t => {
					let {
						onChange: e,
						multiple: s = !0,
						disabled: c,
						className: f,
						tabIndex: h = -1,
						"aria-label": p,
						filters: g,
						setLoading: y,
						title: O
					} = t, w = i.useRef(null), b = i.useRef(null), [j, m] = i.useState(!1);
					i.useEffect(() => {
						j && v()
					}, [j]);
					let v = () => {
							null !== b.current && ((0, l.Mr3)(b.current), b.current = null)
						},
						P = async t => {
							null == y || y(!0), await d(t, e), m(!0), null == y || y(!1)
						}, _ = async t => {
							var e, i, o;
							if (t.stopPropagation(), t.preventDefault(), (null == (e = t.currentTarget) ? void 0 : e.files) == null || (null == (o = t.currentTarget) || null == (i = o.files) ? void 0 : i.length) === 0) return;
							let a = t.currentTarget.files;
							b.current = await (0, l.ZDy)(async () => {
								let {
									default: t
								} = await r.e("16169").then(r.bind(r, 935333));
								return e => (0, n.jsx)(t, u({
									processFiles: () => P(a)
								}, e))
							})
						};
					return (0, n.jsx)(o.Z, {
						onChange: _,
						filters: null != g ? g : (0, a.Zj)(),
						multiple: s,
						disabled: c,
						className: f,
						tabIndex: h,
						"aria-label": p,
						ref: w,
						title: O
					})
				}
		},
		752657: function(t, e, r) {
			r.d(e, {
				Z: () => l
			});
			var n = r(255367);
			r(73800);
			var i = r(325767);

			function l(t) {
				var e, r, {
						width: l = 18,
						height: o = 22,
						color: a = "currentColor"
					} = t,
					s = function(t, e) {
						if (null == t) return {};
						var r, n, i = function(t, e) {
							if (null == t) return {};
							var r, n, i = {},
								l = Object.keys(t);
							for (n = 0; n < l.length; n++) r = l[n], e.indexOf(r) >= 0 || (i[r] = t[r]);
							return i
						}(t, e);
						if (Object.getOwnPropertySymbols) {
							var l = Object.getOwnPropertySymbols(t);
							for (n = 0; n < l.length; n++) r = l[n], !(e.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(t, r) && (i[r] = t[r])
						}
						return i
					}(t, ["width", "height", "color"]);
				return (0, n.jsx)("svg", (e = function(t) {
					for (var e = 1; e < arguments.length; e++) {
						var r = null != arguments[e] ? arguments[e] : {},
							n = Object.keys(r);
						"function" == typeof Object.getOwnPropertySymbols && (n = n.concat(Object.getOwnPropertySymbols(r).filter(function(t) {
							return Object.getOwnPropertyDescriptor(r, t).enumerable
						}))), n.forEach(function(e) {
							var n;
							n = r[e], e in t ? Object.defineProperty(t, e, {
								value: n,
								enumerable: !0,
								configurable: !0,
								writable: !0
							}) : t[e] = n
						})
					}
					return t
				}({}, (0, i.Z)(s)), r = r = {
					width: l,
					height: o,
					viewBox: "0 0 18 22",
					xmlns: "http://www.w3.org/2000/svg",
					children: (0, n.jsx)("path", {
						fillRule: "evenodd",
						clipRule: "evenodd",
						d: "M2 0H13.414L18 4.586V20C18 21.103 17.103 22 16 22H2C0.897 22 0 21.103 0 20V2C0 0.898 0.897 0 2 0ZM12 1V6H17L12 1ZM11.9444 10.2778L10.6667 9H14V12.3333L12.7222 11.0556L11.1278 12.6611L10.3389 11.8722L11.9444 10.2778ZM5.27778 11.0556L4 12.3333V9H7.33333L6.05556 10.2778L7.66111 11.8722L6.87222 12.6611L5.27778 11.0556ZM6.05556 17.7222L7.33333 19H4V15.6667L5.27778 16.9444L6.87222 15.3389L7.66111 16.1278L6.05556 17.7222ZM12.7222 16.9444L14 15.6667V19H10.6667L11.9444 17.7222L10.3389 16.1278L11.1278 15.3389L12.7222 16.9444Z",
						fill: a
					})
				}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : (function(t, e) {
					var r = Object.keys(t);
					if (Object.getOwnPropertySymbols) {
						var n = Object.getOwnPropertySymbols(t);
						r.push.apply(r, n)
					}
					return r
				})(Object(r)).forEach(function(t) {
					Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
				}), e))
			}
		},
		36793: function(t, e, r) {
			function n(t) {
				let {
					image: e,
					cropDimensions: r,
					cropOriginCoordinates: n,
					maxDimensions: i,
					imageRotation: l = 0
				} = t, o = e.naturalWidth / e.width, a = function(t, e) {
					let {
						x: r,
						y: n
					} = t;
					switch (e) {
						case 90:
							return {
								x: n, y: -r
							};
						case 180:
							return {
								x: -r, y: -n
							};
						case 270:
							return {
								x: -n, y: r
							};
						default:
							return {
								x: r, y: n
							}
					}
				}(n, l), s = l % 180 != 0, c = r.width * o, u = r.height * o, f = Math.min(c, i.width), d = Math.min(u, i.height), h = (s ? r.height : r.width) / 2, p = (s ? r.width : r.height) / 2, g = (e.width / 2 - h - a.x) * o, y = (e.height / 2 - p - a.y) * o, O = s ? u : c, w = s ? c : u, {
					x: b,
					y: j
				} = function(t, e, r) {
					switch (r) {
						case 0:
							return {
								x: 0, y: 0
							};
						case 90:
							return {
								x: 0, y: -t
							};
						case 180:
							return {
								x: -t, y: -e
							};
						case 270:
							return {
								x: -e, y: 0
							}
					}
				}(c, u, l);
				return i.width < c && (b *= i.width / c), i.height < u && (j *= i.height / u), {
					sourceX: g,
					sourceY: y,
					sourceWidth: O,
					sourceHeight: w,
					destinationX: b,
					destinationY: j,
					destinationWidth: s ? d : f,
					destinationHeight: s ? f : d,
					canvasWidth: f,
					canvasHeight: d
				}
			}

			function i(t) {
				let {
					image: e,
					cropDimensions: r,
					cropOriginCoordinates: i,
					maxDimensions: l,
					imageRotation: o = 0
				} = t, {
					sourceX: a,
					sourceY: s,
					sourceWidth: c,
					sourceHeight: u,
					destinationX: f,
					destinationY: d,
					destinationWidth: h,
					destinationHeight: p,
					canvasWidth: g,
					canvasHeight: y
				} = n({
					image: e,
					cropDimensions: r,
					cropOriginCoordinates: i,
					maxDimensions: l,
					imageRotation: o
				}), O = document.createElement("canvas");
				O.width = g, O.height = y;
				let w = O.getContext("2d");
				return null != w && (w.rotate(o * Math.PI / 180), w.drawImage(e, a, s, c, u, f, d, h, p)), O.toDataURL("image/png")
			}

			function l(t, e, r) {
				let n = t.naturalWidth / t.naturalHeight,
					l = e,
					o = r;
				t.naturalWidth > t.naturalHeight ? l /= n : o *= n;
				let a = {
					height: l,
					width: o
				};
				return i({
					image: t,
					cropDimensions: {
						width: t.width,
						height: t.height
					},
					cropOriginCoordinates: {
						x: 0,
						y: 0
					},
					maxDimensions: a
				})
			}
			r.d(e, {
				Ae: () => l,
				GS: () => n,
				PT: () => i
			})
		}
	}
]);
//# sourceMappingURL=220b98defdf3258a.js.map