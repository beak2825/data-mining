! function() {
	var n = {
			512: function(e) {
				"use strict";
				var p = {
					single_source_shortest_paths: function(e, t, n) {
						var r = {},
							i = {};
						i[t] = 0;
						var a, o, l, c, s, u, d, f = p.PriorityQueue.make();
						for (f.push(t, 0); !f.empty();)
							for (l in o = (a = f.pop()).value, c = a.cost, s = e[o] || {}) s.hasOwnProperty(l) && (u = c + s[l], d = i[l], (void 0 === i[l] || u < d) && (i[l] = u, f.push(l, u), r[l] = o));
						if (void 0 === n || void 0 !== i[n]) return r;
						n = ["Could not find a path from ", t, " to ", n, "."].join("");
						throw new Error(n)
					},
					extract_shortest_path_from_predecessor_list: function(e, t) {
						for (var n = [], r = t; r;) n.push(r), e[r], r = e[r];
						return n.reverse(), n
					},
					find_path: function(e, t, n) {
						t = p.single_source_shortest_paths(e, t, n);
						return p.extract_shortest_path_from_predecessor_list(t, n)
					},
					PriorityQueue: {
						make: function(e) {
							var t, n = p.PriorityQueue,
								r = {};
							for (t in e = e || {}, n) n.hasOwnProperty(t) && (r[t] = n[t]);
							return r.queue = [], r.sorter = e.sorter || n.default_sorter, r
						},
						default_sorter: function(e, t) {
							return e.cost - t.cost
						},
						push: function(e, t) {
							t = {
								value: e,
								cost: t
							};
							this.queue.push(t), this.queue.sort(this.sorter)
						},
						pop: function() {
							return this.queue.shift()
						},
						empty: function() {
							return 0 === this.queue.length
						}
					}
				};
				e.exports = p
			},
			899: function(e) {
				"use strict";
				e.exports = function(e) {
					for (var t = [], n = e.length, r = 0; r < n; r++) {
						var i, a = e.charCodeAt(r);
						55296 <= a && a <= 56319 && r + 1 < n && (56320 <= (i = e.charCodeAt(r + 1)) && i <= 57343 && (a = 1024 * (a - 55296) + i - 56320 + 65536, r += 1)), a < 128 ? t.push(a) : a < 2048 ? (t.push(a >> 6 | 192), t.push(63 & a | 128)) : a < 55296 || 57344 <= a && a < 65536 ? (t.push(a >> 12 | 224), t.push(a >> 6 & 63 | 128), t.push(63 & a | 128)) : 65536 <= a && a <= 1114111 ? (t.push(a >> 18 | 240), t.push(a >> 12 & 63 | 128), t.push(a >> 6 & 63 | 128), t.push(63 & a | 128)) : t.push(239, 191, 189)
					}
					return new Uint8Array(t).buffer
				}
			},
			28: function(e, t, n) {
				var c = n(827),
					s = n(421),
					r = n(895),
					i = n(398);

				function a(r, i, a, o, t) {
					var e = [].slice.call(arguments, 1),
						n = e.length,
						e = "function" == typeof e[n - 1];
					if (!e && !c()) throw new Error("Callback required as last argument");
					if (!e) {
						if (n < 1) throw new Error("Too few arguments provided");
						return 1 === n ? (a = i, i = o = void 0) : 2 !== n || i.getContext || (o = a, a = i, i = void 0), new Promise(function(e, t) {
							try {
								var n = s.create(a, o);
								e(r(n, i, o))
							} catch (e) {
								t(e)
							}
						})
					}
					if (n < 2) throw new Error("Too few arguments provided");
					2 === n ? (t = a, a = i, i = o = void 0) : 3 === n && (i.getContext && void 0 === t ? (t = o, o = void 0) : (t = o, o = a, a = i, i = void 0));
					try {
						var l = s.create(a, o);
						t(null, r(l, i, o))
					} catch (e) {
						t(e)
					}
				}
				s.create, a.bind(null, r.render), t.hz = a.bind(null, r.renderToDataURL), a.bind(null, function(e, t, n) {
					return i.render(e, n)
				})
			},
			827: function(e) {
				e.exports = function() {
					return "function" == typeof Promise && Promise.prototype && Promise.prototype.then
				}
			},
			965: function(e, o, t) {
				var a = t(814).getSymbolSize;
				o.getRowColCoords = function(e) {
					if (1 === e) return [];
					for (var t = Math.floor(e / 7) + 2, e = a(e), n = 145 === e ? 26 : 2 * Math.ceil((e - 13) / (2 * t - 2)), r = [e - 7], i = 1; i < t - 1; i++) r[i] = r[i - 1] - n;
					return r.push(6), r.reverse()
				}, o.getPositions = function(e) {
					for (var t = [], n = o.getRowColCoords(e), r = n.length, i = 0; i < r; i++)
						for (var a = 0; a < r; a++) 0 === i && 0 === a || 0 === i && a === r - 1 || i === r - 1 && 0 === a || t.push([n[i], n[a]]);
					return t
				}
			},
			224: function(e, t, n) {
				var r = n(937),
					i = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", " ", "$", "%", "*", "+", "-", ".", "/", ":"];

				function a(e) {
					this.mode = r.ALPHANUMERIC, this.data = e
				}
				a.getBitsLength = function(e) {
					return 11 * Math.floor(e / 2) + e % 2 * 6
				}, a.prototype.getLength = function() {
					return this.data.length
				}, a.prototype.getBitsLength = function() {
					return a.getBitsLength(this.data.length)
				}, a.prototype.write = function(e) {
					for (var t = 0; t + 2 <= this.data.length; t += 2) {
						var n = 45 * i.indexOf(this.data[t]);
						n += i.indexOf(this.data[t + 1]), e.put(n, 11)
					}
					this.data.length % 2 && e.put(i.indexOf(this.data[t]), 6)
				}, e.exports = a
			},
			596: function(e) {
				function t() {
					this.buffer = [], this.length = 0
				}
				t.prototype = {
					get: function(e) {
						var t = Math.floor(e / 8);
						return 1 == (this.buffer[t] >>> 7 - e % 8 & 1)
					},
					put: function(e, t) {
						for (var n = 0; n < t; n++) this.putBit(1 == (e >>> t - n - 1 & 1))
					},
					getLengthInBits: function() {
						return this.length
					},
					putBit: function(e) {
						var t = Math.floor(this.length / 8);
						this.buffer.length <= t && this.buffer.push(0), e && (this.buffer[t] |= 128 >>> this.length % 8), this.length++
					}
				}, e.exports = t
			},
			534: function(e) {
				function t(e) {
					if (!e || e < 1) throw new Error("BitMatrix size must be defined and greater than 0");
					this.size = e, this.data = new Uint8Array(e * e), this.reservedBit = new Uint8Array(e * e)
				}
				t.prototype.set = function(e, t, n, r) {
					t = e * this.size + t;
					this.data[t] = n, r && (this.reservedBit[t] = !0)
				}, t.prototype.get = function(e, t) {
					return this.data[e * this.size + t]
				}, t.prototype.xor = function(e, t, n) {
					this.data[e * this.size + t] ^= n
				}, t.prototype.isReserved = function(e, t) {
					return this.reservedBit[e * this.size + t]
				}, e.exports = t
			},
			823: function(e, t, n) {
				var r = n(899),
					i = n(937);

				function a(e) {
					this.mode = i.BYTE, "string" == typeof e && (e = r(e)), this.data = new Uint8Array(e)
				}
				a.getBitsLength = function(e) {
					return 8 * e
				}, a.prototype.getLength = function() {
					return this.data.length
				}, a.prototype.getBitsLength = function() {
					return a.getBitsLength(this.data.length)
				}, a.prototype.write = function(e) {
					for (var t = 0, n = this.data.length; t < n; t++) e.put(this.data[t], 8)
				}, e.exports = a
			},
			889: function(e, t, n) {
				var r = n(422),
					i = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 2, 1, 2, 2, 4, 1, 2, 4, 4, 2, 4, 4, 4, 2, 4, 6, 5, 2, 4, 6, 6, 2, 5, 8, 8, 4, 5, 8, 8, 4, 5, 8, 11, 4, 8, 10, 11, 4, 9, 12, 16, 4, 9, 16, 16, 6, 10, 12, 18, 6, 10, 17, 16, 6, 11, 16, 19, 6, 13, 18, 21, 7, 14, 21, 25, 8, 16, 20, 25, 8, 17, 23, 25, 9, 17, 23, 34, 9, 18, 25, 30, 10, 20, 27, 32, 12, 21, 29, 35, 12, 23, 34, 37, 12, 25, 34, 40, 13, 26, 35, 42, 14, 28, 38, 45, 15, 29, 40, 48, 16, 31, 43, 51, 17, 33, 45, 54, 18, 35, 48, 57, 19, 37, 51, 60, 19, 38, 53, 63, 20, 40, 56, 66, 21, 43, 59, 70, 22, 45, 62, 74, 24, 47, 65, 77, 25, 49, 68, 81],
					a = [7, 10, 13, 17, 10, 16, 22, 28, 15, 26, 36, 44, 20, 36, 52, 64, 26, 48, 72, 88, 36, 64, 96, 112, 40, 72, 108, 130, 48, 88, 132, 156, 60, 110, 160, 192, 72, 130, 192, 224, 80, 150, 224, 264, 96, 176, 260, 308, 104, 198, 288, 352, 120, 216, 320, 384, 132, 240, 360, 432, 144, 280, 408, 480, 168, 308, 448, 532, 180, 338, 504, 588, 196, 364, 546, 650, 224, 416, 600, 700, 224, 442, 644, 750, 252, 476, 690, 816, 270, 504, 750, 900, 300, 560, 810, 960, 312, 588, 870, 1050, 336, 644, 952, 1110, 360, 700, 1020, 1200, 390, 728, 1050, 1260, 420, 784, 1140, 1350, 450, 812, 1200, 1440, 480, 868, 1290, 1530, 510, 924, 1350, 1620, 540, 980, 1440, 1710, 570, 1036, 1530, 1800, 570, 1064, 1590, 1890, 600, 1120, 1680, 1980, 630, 1204, 1770, 2100, 660, 1260, 1860, 2220, 720, 1316, 1950, 2310, 750, 1372, 2040, 2430];
				t.getBlocksCount = function(e, t) {
					switch (t) {
						case r.L:
							return i[4 * (e - 1) + 0];
						case r.M:
							return i[4 * (e - 1) + 1];
						case r.Q:
							return i[4 * (e - 1) + 2];
						case r.H:
							return i[4 * (e - 1) + 3];
						default:
							return
					}
				}, t.getTotalCodewordsCount = function(e, t) {
					switch (t) {
						case r.L:
							return a[4 * (e - 1) + 0];
						case r.M:
							return a[4 * (e - 1) + 1];
						case r.Q:
							return a[4 * (e - 1) + 2];
						case r.H:
							return a[4 * (e - 1) + 3];
						default:
							return
					}
				}
			},
			422: function(e, n) {
				n.L = {
					bit: 1
				}, n.M = {
					bit: 0
				}, n.Q = {
					bit: 3
				}, n.H = {
					bit: 2
				}, n.isValid = function(e) {
					return e && void 0 !== e.bit && 0 <= e.bit && e.bit < 4
				}, n.from = function(e, t) {
					if (n.isValid(e)) return e;
					try {
						return function(e) {
							if ("string" != typeof e) throw new Error("Param is not a string");
							switch (e.toLowerCase()) {
								case "l":
								case "low":
									return n.L;
								case "m":
								case "medium":
									return n.M;
								case "q":
								case "quartile":
									return n.Q;
								case "h":
								case "high":
									return n.H;
								default:
									throw new Error("Unknown EC Level: " + e)
							}
						}(e)
					} catch (e) {
						return t
					}
				}
			},
			125: function(e, t, n) {
				var r = n(814).getSymbolSize;
				t.getPositions = function(e) {
					e = r(e);
					return [
						[0, 0],
						[e - 7, 0],
						[0, e - 7]
					]
				}
			},
			336: function(e, t, n) {
				var r = n(814),
					i = r.getBCHDigit(1335);
				t.getEncodedBits = function(e, t) {
					for (var t = e.bit << 3 | t, n = t << 10; 0 <= r.getBCHDigit(n) - i;) n ^= 1335 << r.getBCHDigit(n) - i;
					return 21522 ^ (t << 10 | n)
				}
			},
			376: function(e, t) {
				var r = new Uint8Array(512),
					i = new Uint8Array(256);
				! function() {
					for (var e = 1, t = 0; t < 255; t++) r[t] = e, i[e] = t, 256 & (e <<= 1) && (e ^= 285);
					for (var n = 255; n < 512; n++) r[n] = r[n - 255]
				}(), t.log = function(e) {
					if (e < 1) throw new Error("log(" + e + ")");
					return i[e]
				}, t.exp = function(e) {
					return r[e]
				}, t.mul = function(e, t) {
					return 0 === e || 0 === t ? 0 : r[i[e] + i[t]]
				}
			},
			57: function(e, t, n) {
				var r = n(937),
					i = n(814);

				function a(e) {
					this.mode = r.KANJI, this.data = e
				}
				a.getBitsLength = function(e) {
					return 13 * e
				}, a.prototype.getLength = function() {
					return this.data.length
				}, a.prototype.getBitsLength = function() {
					return a.getBitsLength(this.data.length)
				}, a.prototype.write = function(e) {
					for (var t = 0; t < this.data.length; t++) {
						var n = i.toSJIS(this.data[t]);
						if (33088 <= n && n <= 40956) n -= 33088;
						else {
							if (!(57408 <= n && n <= 60351)) throw new Error("Invalid SJIS character: " + this.data[t] + "\nMake sure your charset is UTF-8");
							n -= 49472
						}
						n = 192 * (n >>> 8 & 255) + (255 & n), e.put(n, 13)
					}
				}, e.exports = a
			},
			910: function(e, l) {
				l.Patterns = {
					PATTERN000: 0,
					PATTERN001: 1,
					PATTERN010: 2,
					PATTERN011: 3,
					PATTERN100: 4,
					PATTERN101: 5,
					PATTERN110: 6,
					PATTERN111: 7
				};
				var u = 3,
					o = 3,
					c = 40,
					i = 10;
				l.isValid = function(e) {
					return null != e && "" !== e && !isNaN(e) && 0 <= e && e <= 7
				}, l.from = function(e) {
					return l.isValid(e) ? parseInt(e, 10) : void 0
				}, l.getPenaltyN1 = function(e) {
					for (var t = e.size, n = 0, r = 0, i = 0, a = null, o = null, l = 0; l < t; l++) {
						a = o = null;
						for (var c = r = i = 0; c < t; c++) {
							var s = e.get(l, c);
							s === a ? r++ : (5 <= r && (n += u + (r - 5)), a = s, r = 1), (s = e.get(c, l)) === o ? i++ : (5 <= i && (n += u + (i - 5)), o = s, i = 1)
						}
						5 <= r && (n += u + (r - 5)), 5 <= i && (n += u + (i - 5))
					}
					return n
				}, l.getPenaltyN2 = function(e) {
					for (var t = e.size, n = 0, r = 0; r < t - 1; r++)
						for (var i = 0; i < t - 1; i++) {
							var a = e.get(r, i) + e.get(r, i + 1) + e.get(r + 1, i) + e.get(r + 1, i + 1);
							4 !== a && 0 !== a || n++
						}
					return n * o
				}, l.getPenaltyN3 = function(e) {
					for (var t = e.size, n = 0, r = 0, i = 0, a = 0; a < t; a++)
						for (var o = r = i = 0; o < t; o++) r = r << 1 & 2047 | e.get(a, o), 10 <= o && (1488 === r || 93 === r) && n++, i = i << 1 & 2047 | e.get(o, a), 10 <= o && (1488 === i || 93 === i) && n++;
					return n * c
				}, l.getPenaltyN4 = function(e) {
					for (var t = 0, n = e.data.length, r = 0; r < n; r++) t += e.data[r];
					return Math.abs(Math.ceil(100 * t / n / 5) - 10) * i
				}, l.applyMask = function(e, t) {
					for (var n = t.size, r = 0; r < n; r++)
						for (var i = 0; i < n; i++) t.isReserved(i, r) || t.xor(i, r, function(e, t, n) {
							switch (e) {
								case l.Patterns.PATTERN000:
									return (t + n) % 2 == 0;
								case l.Patterns.PATTERN001:
									return t % 2 == 0;
								case l.Patterns.PATTERN010:
									return n % 3 == 0;
								case l.Patterns.PATTERN011:
									return (t + n) % 3 == 0;
								case l.Patterns.PATTERN100:
									return (Math.floor(t / 2) + Math.floor(n / 3)) % 2 == 0;
								case l.Patterns.PATTERN101:
									return t * n % 2 + t * n % 3 == 0;
								case l.Patterns.PATTERN110:
									return (t * n % 2 + t * n % 3) % 2 == 0;
								case l.Patterns.PATTERN111:
									return (t * n % 3 + (t + n) % 2) % 2 == 0;
								default:
									throw new Error("bad maskPattern:" + e)
							}
						}(e, i, r))
				}, l.getBestMask = function(e, t) {
					for (var n = Object.keys(l.Patterns).length, r = 0, i = 1 / 0, a = 0; a < n; a++) {
						t(a), l.applyMask(a, e);
						var o = l.getPenaltyN1(e) + l.getPenaltyN2(e) + l.getPenaltyN3(e) + l.getPenaltyN4(e);
						l.applyMask(a, e), o < i && (i = o, r = a)
					}
					return r
				}
			},
			937: function(e, n, t) {
				var r = t(148),
					i = t(598);
				n.NUMERIC = {
					id: "Numeric",
					bit: 1,
					ccBits: [10, 12, 14]
				}, n.ALPHANUMERIC = {
					id: "Alphanumeric",
					bit: 2,
					ccBits: [9, 11, 13]
				}, n.BYTE = {
					id: "Byte",
					bit: 4,
					ccBits: [8, 16, 16]
				}, n.KANJI = {
					id: "Kanji",
					bit: 8,
					ccBits: [8, 10, 12]
				}, n.MIXED = {
					bit: -1
				}, n.getCharCountIndicator = function(e, t) {
					if (!e.ccBits) throw new Error("Invalid mode: " + e);
					if (!r.isValid(t)) throw new Error("Invalid version: " + t);
					return 1 <= t && t < 10 ? e.ccBits[0] : t < 27 ? e.ccBits[1] : e.ccBits[2]
				}, n.getBestModeForData = function(e) {
					return i.testNumeric(e) ? n.NUMERIC : i.testAlphanumeric(e) ? n.ALPHANUMERIC : i.testKanji(e) ? n.KANJI : n.BYTE
				}, n.toString = function(e) {
					if (e && e.id) return e.id;
					throw new Error("Invalid mode")
				}, n.isValid = function(e) {
					return e && e.bit && e.ccBits
				}, n.from = function(e, t) {
					if (n.isValid(e)) return e;
					try {
						return function(e) {
							if ("string" != typeof e) throw new Error("Param is not a string");
							switch (e.toLowerCase()) {
								case "numeric":
									return n.NUMERIC;
								case "alphanumeric":
									return n.ALPHANUMERIC;
								case "kanji":
									return n.KANJI;
								case "byte":
									return n.BYTE;
								default:
									throw new Error("Unknown mode: " + e)
							}
						}(e)
					} catch (e) {
						return t
					}
				}
			},
			758: function(e, t, n) {
				var r = n(937);

				function i(e) {
					this.mode = r.NUMERIC, this.data = e.toString()
				}
				i.getBitsLength = function(e) {
					return 10 * Math.floor(e / 3) + (e % 3 ? e % 3 * 3 + 1 : 0)
				}, i.prototype.getLength = function() {
					return this.data.length
				}, i.prototype.getBitsLength = function() {
					return i.getBitsLength(this.data.length)
				}, i.prototype.write = function(e) {
					for (var t, n, r = 0; r + 3 <= this.data.length; r += 3) t = this.data.substr(r, 3), n = parseInt(t, 10), e.put(n, 10);
					var i = this.data.length - r;
					0 < i && (t = this.data.substr(r), n = parseInt(t, 10), e.put(n, 3 * i + 1))
				}, e.exports = i
			},
			378: function(e, r, t) {
				var o = t(376);
				r.mul = function(e, t) {
					for (var n = new Uint8Array(e.length + t.length - 1), r = 0; r < e.length; r++)
						for (var i = 0; i < t.length; i++) n[r + i] ^= o.mul(e[r], t[i]);
					return n
				}, r.mod = function(e, t) {
					for (var n = new Uint8Array(e); 0 <= n.length - t.length;) {
						for (var r = n[0], i = 0; i < t.length; i++) n[i] ^= o.mul(t[i], r);
						for (var a = 0; a < n.length && 0 === n[a];) a++;
						n = n.slice(a)
					}
					return n
				}, r.generateECPolynomial = function(e) {
					for (var t = new Uint8Array([1]), n = 0; n < e; n++) t = r.mul(t, new Uint8Array([1, o.exp(n)]));
					return t
				}
			},
			421: function(e, t, n) {
				var C = n(814),
					a = n(422),
					o = n(596),
					l = n(534),
					s = n(965),
					u = n(125),
					d = n(910),
					w = n(889),
					x = n(630),
					f = n(701),
					c = n(336),
					p = n(937),
					m = n(59);

				function g(e, t, n) {
					for (var r, i = e.size, a = c.getEncodedBits(t, n), o = 0; o < 15; o++) r = 1 == (a >> o & 1), o < 6 ? e.set(o, 8, r, !0) : o < 8 ? e.set(o + 1, 8, r, !0) : e.set(i - 15 + o, 8, r, !0), o < 8 ? e.set(8, i - o - 1, r, !0) : o < 9 ? e.set(8, 15 - o - 1 + 1, r, !0) : e.set(8, 15 - o - 1, r, !0);
					e.set(i - 8, 8, 1, !0)
				}

				function h(t, e, n) {
					var r = new o;
					n.forEach(function(e) {
						r.put(e.mode.bit, 4), r.put(e.getLength(), p.getCharCountIndicator(e.mode, t)), e.write(r)
					});
					n = 8 * (C.getSymbolTotalCodewords(t) - w.getTotalCodewordsCount(t, e));
					for (r.getLengthInBits() + 4 <= n && r.put(0, 4); r.getLengthInBits() % 8 != 0;) r.putBit(0);
					for (var i = (n - r.getLengthInBits()) / 8, a = 0; a < i; a++) r.put(a % 2 ? 17 : 236, 8);
					return function(e, t, n) {
						for (var r = C.getSymbolTotalCodewords(t), i = w.getTotalCodewordsCount(t, n), i = r - i, a = w.getBlocksCount(t, n), o = a - r % a, n = Math.floor(r / a), l = Math.floor(i / a), c = l + 1, s = n - l, u = new x(s), d = 0, f = new Array(a), p = new Array(a), m = 0, g = new Uint8Array(e.buffer), h = 0; h < a; h++) {
							var v = h < o ? l : c;
							f[h] = g.slice(d, d + v), p[h] = u.encode(f[h]), d += v, m = Math.max(m, v)
						}
						var y, b, E = new Uint8Array(r),
							A = 0;
						for (y = 0; y < m; y++)
							for (b = 0; b < a; b++) y < f[b].length && (E[A++] = f[b][y]);
						for (y = 0; y < s; y++)
							for (b = 0; b < a; b++) E[A++] = p[b][y];
						return E
					}(r, t, e)
				}

				function v(e, c, t, n) {
					var r;
					if (Array.isArray(e)) r = m.fromArray(e);
					else {
						if ("string" != typeof e) throw new Error("Invalid data");
						var i, a = c;
						a || (i = m.rawSplit(e), a = f.getBestVersionForData(i, t)), r = m.fromString(e, a || 40)
					}
					e = f.getBestVersionForData(r, t);
					if (!e) throw new Error("The amount of data is too big to be stored in a QR Code");
					if (c) {
						if (c < e) throw new Error("\nThe chosen QR Code version cannot contain this amount of data.\nMinimum version required to store current data is: " + e + ".\n")
					} else c = e;
					a = h(c, t, r), e = C.getSymbolSize(c), e = new l(e);
					return function(e) {
							for (var t = e.size, n = u.getPositions(c), r = 0; r < n.length; r++)
								for (var i = n[r][0], a = n[r][1], o = -1; o <= 7; o++)
									if (!(i + o <= -1 || t <= i + o))
										for (var l = -1; l <= 7; l++) a + l <= -1 || t <= a + l || (0 <= o && o <= 6 && (0 === l || 6 === l) || 0 <= l && l <= 6 && (0 === o || 6 === o) || 2 <= o && o <= 4 && 2 <= l && l <= 4 ? e.set(i + o, a + l, !0, !0) : e.set(i + o, a + l, !1, !0))
						}(e),
						function(e) {
							for (var t = e.size, n = 8; n < t - 8; n++) {
								var r = n % 2 == 0;
								e.set(n, 6, r, !0), e.set(6, n, r, !0)
							}
						}(e),
						function(e) {
							for (var t = s.getPositions(c), n = 0; n < t.length; n++)
								for (var r = t[n][0], i = t[n][1], a = -2; a <= 2; a++)
									for (var o = -2; o <= 2; o++) - 2 === a || 2 === a || -2 === o || 2 === o || 0 === a && 0 === o ? e.set(r + a, i + o, !0, !0) : e.set(r + a, i + o, !1, !0)
						}(e), g(e, t, 0), 7 <= c && function(e) {
							for (var t, n, r, i = e.size, a = f.getEncodedBits(c), o = 0; o < 18; o++) t = Math.floor(o / 3), n = o % 3 + i - 8 - 3, r = 1 == (a >> o & 1), e.set(t, n, r, !0), e.set(n, t, r, !0)
						}(e),
						function(e, t) {
							for (var n = e.size, r = -1, i = n - 1, a = 7, o = 0, l = n - 1; 0 < l; l -= 2)
								for (6 === l && l--;;) {
									for (var c, s = 0; s < 2; s++) e.isReserved(i, l - s) || (c = !1, o < t.length && (c = 1 == (t[o] >>> a & 1)), e.set(i, l - s, c), -1 === --a && (o++, a = 7));
									if ((i += r) < 0 || n <= i) {
										i -= r, r = -r;
										break
									}
								}
						}(e, a), isNaN(n) && (n = d.getBestMask(e, g.bind(null, e, t))), d.applyMask(n, e), g(e, t, n), {
							modules: e,
							version: c,
							errorCorrectionLevel: t,
							maskPattern: n,
							segments: r
						}
				}
				t.create = function(e, t) {
					if (void 0 === e || "" === e) throw new Error("No input text");
					var n, r, i = a.M;
					return void 0 !== t && (i = a.from(t.errorCorrectionLevel, a.M), n = f.from(t.version), r = d.from(t.maskPattern), t.toSJISFunc && C.setToSJISFunction(t.toSJISFunc)), v(e, n, i, r)
				}
			},
			630: function(e, t, n) {
				var r = n(378);

				function i(e) {
					this.genPoly = void 0, this.degree = e, this.degree && this.initialize(this.degree)
				}
				i.prototype.initialize = function(e) {
					this.degree = e, this.genPoly = r.generateECPolynomial(this.degree)
				}, i.prototype.encode = function(e) {
					if (!this.genPoly) throw new Error("Encoder not initialized");
					var t = new Uint8Array(e.length + this.degree);
					t.set(e);
					var n = r.mod(t, this.genPoly),
						e = this.degree - n.length;
					if (0 < e) {
						t = new Uint8Array(this.degree);
						return t.set(n, e), t
					}
					return n
				}, e.exports = i
			},
			598: function(e, t) {
				var n = "(?:[u3000-u303F]|[u3040-u309F]|[u30A0-u30FF]|[uFF00-uFFEF]|[u4E00-u9FAF]|[u2605-u2606]|[u2190-u2195]|u203B|[u2010u2015u2018u2019u2025u2026u201Cu201Du2225u2260]|[u0391-u0451]|[u00A7u00A8u00B1u00B4u00D7u00F7])+",
					r = "(?:(?![A-Z0-9 $%*+\\-./:]|" + (n = n.replace(/u/g, "\\u")) + ")(?:.|[\r\n]))+";
				t.KANJI = new RegExp(n, "g"), t.BYTE_KANJI = new RegExp("[^A-Z0-9 $%*+\\-./:]+", "g"), t.BYTE = new RegExp(r, "g"), t.NUMERIC = new RegExp("[0-9]+", "g"), t.ALPHANUMERIC = new RegExp("[A-Z $%*+\\-./:]+", "g");
				var i = new RegExp("^" + n + "$"),
					a = new RegExp("^[0-9]+$"),
					o = new RegExp("^[A-Z0-9 $%*+\\-./:]+$");
				t.testKanji = function(e) {
					return i.test(e)
				}, t.testNumeric = function(e) {
					return a.test(e)
				}, t.testAlphanumeric = function(e) {
					return o.test(e)
				}
			},
			59: function(e, o, t) {
				var m = t(937),
					r = t(758),
					i = t(224),
					a = t(823),
					l = t(57),
					c = t(598),
					s = t(814),
					u = t(512);

				function d(e) {
					return unescape(encodeURIComponent(e)).length
				}

				function f(e, t, n) {
					for (var r, i = []; null !== (r = e.exec(n));) i.push({
						data: r[0],
						index: r.index,
						mode: t,
						length: r[0].length
					});
					return i
				}

				function p(e) {
					var t, n = f(c.NUMERIC, m.NUMERIC, e),
						r = f(c.ALPHANUMERIC, m.ALPHANUMERIC, e),
						e = s.isKanjiModeEnabled() ? (t = f(c.BYTE, m.BYTE, e), f(c.KANJI, m.KANJI, e)) : (t = f(c.BYTE_KANJI, m.BYTE, e), []);
					return n.concat(r, t, e).sort(function(e, t) {
						return e.index - t.index
					}).map(function(e) {
						return {
							data: e.data,
							mode: e.mode,
							length: e.length
						}
					})
				}

				function g(e, t) {
					switch (t) {
						case m.NUMERIC:
							return r.getBitsLength(e);
						case m.ALPHANUMERIC:
							return i.getBitsLength(e);
						case m.KANJI:
							return l.getBitsLength(e);
						case m.BYTE:
							return a.getBitsLength(e)
					}
				}

				function n(e, t) {
					var n = m.getBestModeForData(e),
						t = m.from(t, n);
					if (t !== m.BYTE && t.bit < n.bit) throw new Error('"' + e + '" cannot be encoded with mode ' + m.toString(t) + ".\n Suggested mode is: " + m.toString(n));
					switch (t !== m.KANJI || s.isKanjiModeEnabled() || (t = m.BYTE), t) {
						case m.NUMERIC:
							return new r(e);
						case m.ALPHANUMERIC:
							return new i(e);
						case m.KANJI:
							return new l(e);
						case m.BYTE:
							return new a(e)
					}
				}
				o.fromArray = function(e) {
					return e.reduce(function(e, t) {
						return "string" == typeof t ? e.push(n(t, null)) : t.data && e.push(n(t.data, t.mode)), e
					}, [])
				}, o.fromString = function(e, t) {
					for (var n = function(e, t) {
							for (var n = {}, r = {
									start: {}
								}, i = ["start"], a = 0; a < e.length; a++) {
								for (var o = e[a], l = [], c = 0; c < o.length; c++) {
									var s = o[c],
										u = "" + a + c;
									l.push(u), n[u] = {
										node: s,
										lastCount: 0
									}, r[u] = {};
									for (var d = 0; d < i.length; d++) {
										var f = i[d];
										n[f] && n[f].node.mode === s.mode ? (r[f][u] = g(n[f].lastCount + s.length, s.mode) - g(n[f].lastCount, s.mode), n[f].lastCount += s.length) : (n[f] && (n[f].lastCount = s.length), r[f][u] = g(s.length, s.mode) + 4 + m.getCharCountIndicator(s.mode, t))
									}
								}
								i = l
							}
							for (var p = 0; p < i.length; p++) r[i[p]].end = 0;
							return {
								map: r,
								table: n
							}
						}(function(e) {
							for (var t = [], n = 0; n < e.length; n++) {
								var r = e[n];
								switch (r.mode) {
									case m.NUMERIC:
										t.push([r, {
											data: r.data,
											mode: m.ALPHANUMERIC,
											length: r.length
										}, {
											data: r.data,
											mode: m.BYTE,
											length: r.length
										}]);
										break;
									case m.ALPHANUMERIC:
										t.push([r, {
											data: r.data,
											mode: m.BYTE,
											length: r.length
										}]);
										break;
									case m.KANJI:
										t.push([r, {
											data: r.data,
											mode: m.BYTE,
											length: d(r.data)
										}]);
										break;
									case m.BYTE:
										t.push([{
											data: r.data,
											mode: m.BYTE,
											length: d(r.data)
										}])
								}
							}
							return t
						}(p(e, s.isKanjiModeEnabled())), t), r = u.find_path(n.map, "start", "end"), i = [], a = 1; a < r.length - 1; a++) i.push(n.table[r[a]].node);
					return o.fromArray(i.reduce(function(e, t) {
						var n = 0 <= e.length - 1 ? e[e.length - 1] : null;
						return n && n.mode === t.mode ? e[e.length - 1].data += t.data : e.push(t), e
					}, []))
				}, o.rawSplit = function(e) {
					return o.fromArray(p(e, s.isKanjiModeEnabled()))
				}
			},
			814: function(e, t) {
				var n, r = [0, 26, 44, 70, 100, 134, 172, 196, 242, 292, 346, 404, 466, 532, 581, 655, 733, 815, 901, 991, 1085, 1156, 1258, 1364, 1474, 1588, 1706, 1828, 1921, 2051, 2185, 2323, 2465, 2611, 2761, 2876, 3034, 3196, 3362, 3532, 3706];
				t.getSymbolSize = function(e) {
					if (!e) throw new Error('"version" cannot be null or undefined');
					if (e < 1 || 40 < e) throw new Error('"version" should be in range from 1 to 40');
					return 4 * e + 17
				}, t.getSymbolTotalCodewords = function(e) {
					return r[e]
				}, t.getBCHDigit = function(e) {
					for (var t = 0; 0 !== e;) t++, e >>>= 1;
					return t
				}, t.setToSJISFunction = function(e) {
					if ("function" != typeof e) throw new Error('"toSJISFunc" is not a valid function.');
					n = e
				}, t.isKanjiModeEnabled = function() {
					return void 0 !== n
				}, t.toSJIS = function(e) {
					return n(e)
				}
			},
			148: function(e, t) {
				t.isValid = function(e) {
					return !isNaN(e) && 1 <= e && e <= 40
				}
			},
			701: function(e, i, t) {
				var a = t(814),
					o = t(889),
					r = t(422),
					l = t(937),
					c = t(148),
					n = a.getBCHDigit(7973);

				function s(e, t) {
					return l.getCharCountIndicator(e, t) + 4
				}

				function u(e, t) {
					for (var n = 1; n <= 40; n++)
						if (function(e, n) {
								var r = 0;
								return e.forEach(function(e) {
									var t = s(e.mode, n);
									r += t + e.getBitsLength()
								}), r
							}(e, n) <= i.getCapacity(n, t, l.MIXED)) return n
				}
				i.from = function(e, t) {
					return c.isValid(e) ? parseInt(e, 10) : t
				}, i.getCapacity = function(e, t, n) {
					if (!c.isValid(e)) throw new Error("Invalid QR Code version");
					void 0 === n && (n = l.BYTE);
					t = 8 * (a.getSymbolTotalCodewords(e) - o.getTotalCodewordsCount(e, t));
					if (n === l.MIXED) return t;
					var r = t - s(n, e);
					switch (n) {
						case l.NUMERIC:
							return Math.floor(r / 10 * 3);
						case l.ALPHANUMERIC:
							return Math.floor(r / 11 * 2);
						case l.KANJI:
							return Math.floor(r / 13);
						case l.BYTE:
						default:
							return Math.floor(r / 8)
					}
				}, i.getBestVersionForData = function(e, t) {
					var n, t = r.from(t, r.M);
					if (Array.isArray(e)) {
						if (1 < e.length) return u(e, t);
						if (0 === e.length) return 1;
						n = e[0]
					} else n = e;
					return function(e, t, n) {
						for (var r = 1; r <= 40; r++)
							if (t <= i.getCapacity(r, n, e)) return r
					}(n.mode, n.getLength(), t)
				}, i.getEncodedBits = function(e) {
					if (!c.isValid(e) || e < 7) throw new Error("Invalid QR Code version");
					for (var t = e << 12; 0 <= a.getBCHDigit(t) - n;) t ^= 7973 << a.getBCHDigit(t) - n;
					return e << 12 | t
				}
			},
			895: function(e, r, t) {
				var o = t(467);
				r.render = function(e, t, n) {
					var r = n,
						i = t;
					void 0 !== r || t && t.getContext || (r = t, t = void 0), t || (i = function() {
						try {
							return document.createElement("canvas")
						} catch (e) {
							throw new Error("You need to specify a canvas element")
						}
					}()), r = o.getOptions(r);
					var a = o.getImageWidth(e.modules.size, r),
						n = i.getContext("2d"),
						t = n.createImageData(a, a);
					return o.qrToImageData(t.data, e, r), r = i, a = a, n.clearRect(0, 0, r.width, r.height), r.style || (r.style = {}), r.height = a, r.width = a, r.style.height = a + "px", r.style.width = a + "px", n.putImageData(t, 0, 0), i
				}, r.renderToDataURL = function(e, t, n) {
					void 0 !== n || t && t.getContext || (n = t, t = void 0), n = n || {};
					e = r.render(e, t, n), t = n.type || "image/png", n = n.rendererOpts || {};
					return e.toDataURL(t, n.quality)
				}
			},
			398: function(e, t, n) {
				var o = n(467);

				function l(e, t) {
					var n = e.a / 255,
						e = t + '="' + e.hex + '"';
					return n < 1 ? e + " " + t + '-opacity="' + n.toFixed(2).slice(1) + '"' : e
				}

				function u(e, t, n) {
					t = e + t;
					return void 0 !== n && (t += " " + n), t
				}
				t.render = function(e, t, n) {
					var r = o.getOptions(t),
						i = e.modules.size,
						a = e.modules.data,
						t = i + 2 * r.margin,
						e = r.color.light.a ? "<path " + l(r.color.light, "fill") + ' d="M0 0h' + t + "v" + t + 'H0z"/>' : "",
						i = "<path " + l(r.color.dark, "stroke") + ' d="' + function(e, t, n) {
							for (var r = "", i = 0, a = !1, o = 0, l = 0; l < e.length; l++) {
								var c = Math.floor(l % t),
									s = Math.floor(l / t);
								c || a || (a = !0), e[l] ? (o++, 0 < l && 0 < c && e[l - 1] || (r += a ? u("M", c + n, .5 + s + n) : u("m", i, 0), i = 0, a = !1), c + 1 < t && e[l + 1] || (r += u("h", o), o = 0)) : i++
							}
							return r
						}(a, i, r.margin) + '"/>',
						t = 'viewBox="0 0 ' + t + " " + t + '"',
						i = '<svg xmlns="http://www.w3.org/2000/svg" ' + (r.width ? 'width="' + r.width + '" height="' + r.width + '" ' : "") + t + ' shape-rendering="crispEdges">' + e + i + "</svg>\n";
					return "function" == typeof n && n(null, i), i
				}
			},
			467: function(e, p) {
				function i(e) {
					if ("number" == typeof e && (e = e.toString()), "string" != typeof e) throw new Error("Color should be defined as hex string");
					var t = e.slice().replace("#", "").split("");
					if (t.length < 3 || 5 === t.length || 8 < t.length) throw new Error("Invalid hex color: " + e);
					3 !== t.length && 4 !== t.length || (t = Array.prototype.concat.apply([], t.map(function(e) {
						return [e, e]
					}))), 6 === t.length && t.push("F", "F");
					e = parseInt(t.join(""), 16);
					return {
						r: e >> 24 & 255,
						g: e >> 16 & 255,
						b: e >> 8 & 255,
						a: 255 & e,
						hex: "#" + t.slice(0, 6).join("")
					}
				}
				p.getOptions = function(e) {
					(e = e || {}).color || (e.color = {});
					var t = void 0 === e.margin || null === e.margin || e.margin < 0 ? 4 : e.margin,
						n = e.width && 21 <= e.width ? e.width : void 0,
						r = e.scale || 4;
					return {
						width: n,
						scale: n ? 4 : r,
						margin: t,
						color: {
							dark: i(e.color.dark || "#000000ff"),
							light: i(e.color.light || "#ffffffff")
						},
						type: e.type,
						rendererOpts: e.rendererOpts || {}
					}
				}, p.getScale = function(e, t) {
					return t.width && t.width >= e + 2 * t.margin ? t.width / (e + 2 * t.margin) : t.scale
				}, p.getImageWidth = function(e, t) {
					var n = p.getScale(e, t);
					return Math.floor((e + 2 * t.margin) * n)
				}, p.qrToImageData = function(e, t, n) {
					for (var r = t.modules.size, i = t.modules.data, a = p.getScale(r, n), o = Math.floor((r + 2 * n.margin) * a), l = n.margin * a, c = [n.color.light, n.color.dark], s = 0; s < o; s++)
						for (var u = 0; u < o; u++) {
							var d = 4 * (s * o + u),
								f = n.color.light;
							l <= s && l <= u && s < o - l && u < o - l && (f = c[i[Math.floor((s - l) / a) * r + Math.floor((u - l) / a)] ? 1 : 0]), e[d++] = f.r, e[d++] = f.g, e[d++] = f.b, e[d] = f.a
						}
				}
			},
			779: function(e, t) {
				var n;
				/*!
					Copyright (c) 2018 Jed Watson.
					Licensed under the MIT License (MIT), see
					http://jedwatson.github.io/classnames
				*/
				! function() {
					"use strict";
					var o = {}.hasOwnProperty;

					function l() {
						for (var e = [], t = 0; t < arguments.length; t++) {
							var n = arguments[t];
							if (n) {
								var r, i = typeof n;
								if ("string" == i || "number" == i) e.push(n);
								else if (Array.isArray(n)) !n.length || (r = l.apply(null, n)) && e.push(r);
								else if ("object" == i)
									if (n.toString === Object.prototype.toString || n.toString.toString().includes("[native code]"))
										for (var a in n) o.call(n, a) && n[a] && e.push(a);
									else e.push(n.toString())
							}
						}
						return e.join(" ")
					}
					e.exports ? (l.default = l, e.exports = l) : void 0 === (n = function() {
						return l
					}.apply(t, [])) || (e.exports = n)
				}()
			},
			771: function(e) {
				e.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHUAAAB1CAMAAABH2l6OAAAAAXNSR0IB2cksfwAAAAlwSFlzAAAhOAAAITgBRZYxYAAAAO1QTFRFAAAAAK9gALplALpjALlkALhkALhnALhkALljALhkALhjALhjAL1jALljALhlALdgALlkALljALplALdkALljALhlALhlALdoALlkALhlALhkAL9gALlkAL1rALhkALllAK9wALhnALlmALhkALdiALpl9kxQ90pS9ktS9klQ70BQ90pQ90tS90pS90tR9kpTn5+fm5ubmZmZnJycmJiYl5eXmJiYmJiYmJiYym9xx3F1mZmZl5eXmJiYmZmZl5eXmZmZmpqa5FpfmJiYx3F0mJiY7VJZ3V9lmZmZl5eX90hT+EtR9kxS71BQ+EtSN94hsgAAAE90Uk5TABA/b39PL7/v/9+fH69vII9fb0BQn98gz6+PEO8f768QT1/PYDBv3++PEH//f99vEE9/H2/v/4+f7/+PIL9QQF8/n6//34+vz2Bfz+8Qj+KRS3EAAAMjSURBVHic7Zh9d9IwFMYDY+sK07oioKNuOF82lSkU0M6uDrbh6/T7fxybNmnTUmiCye05njz/bST55UlucnOLkJaWlpaWlpaWlhavavWdxmbt7slm1o19s1zN1oFEZu0BBzLmPpQGtZq80FCPqoCaZksOVQxqmrlFru3VtwizhiDUNNmQsqIwbB4KQi06lmG3N+pxp0tbpr1tGvpGTYh6SLo1ypv2npC2lGAZ6QI8FaKSjkc8bfvELVlPO3PG6yJUJ+7zjKuxzUyRNZpb9/LpC3Xpp6tp5y+zYwFqL+7S4WxO58gadcjRU05ljZ4MDBgqI+d5EpBw1JMBAqdio+DUyCgwlRiFpVKjkNTUKCCVMQpGzRgFo+ZzONQKZ1+oYNGUsQt4chi7kLdEahf2RqR2gW9/Yhc800V24bM6tgtENdh6oXUARUW9boptbv1a43yZWmnrlfJI5GVKXuHHfGUKKU+iVzhrF0uo5CCbwlUM00r3NP4za/dUhEqKCJ7qynpB2tLyhLXLGxmx+g4Nip36Ru0e7a8CErvGQIi6RdXMVmK9TjRj4Y8k/W4ZJafcXgza7Z4oE60GY4kkfQ0Rw8qC0s3hkSPvK1eoNhfXaQxkQhEOCrvk6+XLV9yDvT47f/NW8gRL9W4Y6qIK6PC8CujwfRXQ4YcqoKDbqhI6GrsrGk8UQ6ezj0X6pBTqFTJDXSqEuuugnxPo2HcncqFXGBB8uc7LS6BXAW7iSqXOwxG9gv8ne0p3fSGT6ocDXq+H3gR0wacyqTiWVjeNQi8jo7Nb2UtcSKXQu8hlMFlAUDPQWbi0ENQMNMA/AlBZ6CyOIfXU5MhQoxDU9O7FBxmIylz4eFeXcwgqm2Xiy8FTH02Z1EbuJGxXKTWbT5Pk4ym9JXJJHMdwnAaXvgrqogiKU2CArpbUsVTqNBzwtgAaZXsfpVlfal4f4azijRdfCfTbItLYS0ixXblZnXihL4c79g1Ds/3c9wtS8L/JWwf9PpKNYuUui6AzVykUIbqnN8wr/Idi5v9Xy6zVzyqg6FcVUHRfBRRdVAFFv//cn4GW/1paWlpK9BcRsutogYHJewAAAABJRU5ErkJggg=="
			},
			204: function(e) {
				e.exports = "https://images.rbxcdn.com/d061775f2c5685fdb5f332aaefc8fc7b-hearts_large@3x.png"
			},
			52: function(e) {
				e.exports = "https://images.rbxcdn.com/d7918c88e1d1f803332755fd8a3b6536-lock_xxlarge@3x.png"
			},
			802: function(e) {
				e.exports = "https://images.rbxcdn.com/51becc9e20f99dc4be7106264a364d58-voicechat_large@3x.png"
			}
		},
		r = {};

	function en(e) {
		if (r[e]) return r[e].exports;
		var t = r[e] = {
			exports: {}
		};
		return n[e](t, t.exports, en), t.exports
	}
	en.n = function(e) {
			var t = e && e.__esModule ? function() {
				return e.default
			} : function() {
				return e
			};
			return en.d(t, {
				a: t
			}), t
		}, en.d = function(e, t) {
			for (var n in t) en.o(t, n) && !en.o(e, n) && Object.defineProperty(e, n, {
				enumerable: !0,
				get: t[n]
			})
		}, en.o = function(e, t) {
			return Object.prototype.hasOwnProperty.call(e, t)
		},
		function() {
			"use strict";

			function C() {
				return {
					retryable: !0,
					withCredentials: !0,
					url: "".concat(h, "/v1/email")
				}
			}
			var w = React,
				x = en.n(w),
				c = Roblox,
				e = en.n(c),
				r = ReactDOM,
				S = CoreUtilities,
				i = "id-verification-container",
				t = PropTypes,
				n = en.n(t),
				a = ReactUtilities,
				k = ReactStyleGuide,
				N = "SET_USER_EMAIL_STATES",
				L = "SET_MODAL_STATES",
				T = "SET_PAGENAME_STATE",
				R = "SET_INPUT_STATE",
				V = "SET_ERROR_STATE",
				U = "SET_EMAIL_UPDATING_STATE",
				P = "SET_TRIGGER_ORIGIN",
				I = "SET_INPUT_CLEAR",
				M = "SET_VERIFICATION_CALLBACK",
				B = "SET_CALLBACK_READY",
				O = "CLEANUP_MODAL",
				f = en(28),
				o = CoreRobloxUtilities,
				l = o.eventStreamService.eventTypes,
				s = "ageVerification",
				u = "voiceChat",
				d = "avatarVideo",
				t = "buttonClick",
				j = {
					showQRCode: {
						name: "showQRCode",
						type: l.modalAction,
						context: s,
						params: {
							aType: "shown",
							field: "ageVerificationQRCode"
						}
					},
					showAddEmailModal: {
						name: "showAddEmailModal",
						type: l.modalAction,
						context: s,
						params: {
							aType: "shown",
							field: "addEmail"
						}
					},
					useAddEmailField: {
						name: "useAddEmailField",
						type: l.formInteraction,
						context: s,
						params: {
							btn: "emailAddress",
							field: "addEmail"
						}
					},
					addEmailConfirm: {
						name: "addEmailConfirm",
						type: t,
						context: s,
						params: {
							btn: "continue",
							field: "addEmail"
						}
					},
					showModal: {
						name: "showModal",
						type: l.modalAction,
						context: s,
						params: {
							aType: "shown",
							field: "startAgeVerification"
						}
					},
					verificationLinkClicked: {
						name: "verificationLinkClicked",
						type: t,
						context: s,
						params: {
							btn: "startSession",
							field: "startAgeVerification"
						}
					},
					exitIdentityVerification: {
						name: "exitIdentityVerification",
						type: l.modalAction,
						context: s,
						params: {
							aType: "dismissed",
							field: "startAgeVerification"
						}
					},
					verificationInProgress: {
						name: "verificationInProgress",
						type: l.modalAction,
						context: s,
						params: {
							aType: "shown",
							field: "ageVerificationProgress"
						}
					},
					verificationPending: {
						name: "verificationPending",
						type: l.modalAction,
						context: s,
						params: {
							aType: "shown",
							field: "ageVerificationPending"
						}
					},
					successPage: {
						name: "successPage",
						type: l.modalAction,
						context: s,
						params: {
							aType: "shown",
							field: "ageVerificationSucceded"
						}
					},
					successPageClose: {
						name: "successPageClose",
						type: t,
						context: s,
						params: {
							btn: "Done",
							field: "ageVerificationSucceded"
						}
					},
					failurePage: {
						name: "failurePage",
						type: l.modalAction,
						context: s,
						params: {
							aType: "shown",
							field: "ageVerificationFailed"
						}
					},
					failurePageClose: {
						name: "failurePageClose",
						type: t,
						context: s,
						params: {
							btn: "Done",
							field: "ageVerificationFailed"
						}
					},
					tempBanPage: {
						name: "tempBanPage",
						type: l.modalAction,
						context: s,
						params: {
							aType: "shown",
							field: "ageVerificationTempBanned"
						}
					},
					tempBanPageClose: {
						name: "tempBanPageClose",
						type: t,
						context: s,
						params: {
							btn: "Done",
							field: "ageVerificationTempBanned"
						}
					},
					joinWithoutVoiceChat: {
						name: "joinWithoutVoiceChat",
						type: "joinWithoutVoiceChat",
						context: u,
						params: {
							dontShowAgain: !1
						}
					},
					closeEnableVoiceChatModal: {
						name: "closeEnableVoiceChatModal",
						type: "closeEnableVoiceChatModal",
						context: u
					},
					showEnableVoiceChatModal: {
						name: "showEnableVoiceChatModal",
						type: "showEnableVoiceChatModal",
						context: u
					},
					enableVoiceChatUpsell: {
						name: "enableVoiceChatUpsell",
						type: "enableVoiceChatUpsell",
						context: u
					},
					learnMoreAboutVoiceRecordingUpsell: {
						name: "learnMoreAboutVoiceRecordingUpsell",
						type: "learnMoreAboutVoiceRecordingUpsell",
						context: u
					},
					joinWithoutAvatarVideo: {
						name: "joinWithoutAvatarVideo",
						type: "joinWithoutAvatarVideo",
						context: d
					},
					showUnifiedChatUpsellModal: {
						name: "showUnifiedChatUpsellModal",
						type: "showUnifiedChatUpsellModal",
						context: d
					},
					enableAvatarVideo: {
						name: "enableAvatarVideo",
						type: "enableAvatarVideo",
						context: d
					},
					learnMoreAvatarVideo: {
						name: "learnMoreAvatarVideo",
						type: "learnMoreAvatarVideo",
						context: d
					}
				},
				D = "LANDING",
				q = "EMAIL",
				F = "SUCCESS_OVERAGE",
				H = "SUCCESS_UNDERAGE",
				_ = "SUCCESS",
				z = "FAILURE",
				K = "PENDING",
				Q = "POLLING",
				p = "EMAIL_CONTINUE",
				m = "EXTERNAL_EMAIL",
				Y = "ERROR",
				J = "TEMP_BAN",
				W = "VENDOR_LINK",
				G = "ENABLE_VOICE_CHAT",
				X = "ENABLE_AVATAR_CHAT",
				Z = "AccountSettings",
				$ = "LuaApp",
				ee = "WebApp",
				te = "parent-account-setup",
				ne = "parental-verification",
				re = 0,
				ie = 1,
				ae = 2,
				oe = 3,
				le = 4,
				ce = 5,
				se = 6,
				ue = 7,
				de = 2,
				fe = 3,
				pe = 4,
				me = 5,
				ge = 6,
				he = 7,
				ve = 0,
				ye = 1,
				be = 2,
				Ee = 3,
				Ae = "OpenVoiceOptInOverlay",
				Ce = "OpenCameraOptInOverlay",
				we = "OpenIdentityVerificationModal",
				g = c.EnvironmentUrls.apiGatewayUrl,
				h = c.EnvironmentUrls.accountSettingsApi,
				v = c.EnvironmentUrls.voiceApi,
				xe = "".concat(c.EnvironmentUrls.websiteUrl, "/parents/account-setup");

			function y(t, e) {
				var n, r = Object.keys(t);
				return Object.getOwnPropertySymbols && (n = Object.getOwnPropertySymbols(t), e && (n = n.filter(function(e) {
					return Object.getOwnPropertyDescriptor(t, e).enumerable
				})), r.push.apply(r, n)), r
			}

			function b(r) {
				for (var e = 1; e < arguments.length; e++) {
					var i = null != arguments[e] ? arguments[e] : {};
					e % 2 ? y(Object(i), !0).forEach(function(e) {
						var t, n;
						t = r, e = i[n = e], n in t ? Object.defineProperty(t, n, {
							value: e,
							enumerable: !0,
							configurable: !0,
							writable: !0
						}) : t[n] = e
					}) : Object.getOwnPropertyDescriptors ? Object.defineProperties(r, Object.getOwnPropertyDescriptors(i)) : y(Object(i)).forEach(function(e) {
						Object.defineProperty(r, e, Object.getOwnPropertyDescriptor(i, e))
					})
				}
				return r
			}

			function Se() {
				var e = {
					retryable: !0,
					withCredentials: !0,
					url: "".concat(g, "/age-verification-service/v1/persona-id-verification/start-verification")
				};
				return S.httpService.post(e, {
					generateLink: !0
				}).then(function(e) {
					return e.data
				}, function() {
					return !1
				})
			}

			function ke() {
				var e = {
					retryable: !0,
					withCredentials: !0,
					url: "".concat(g, "/age-verification-service/v1/age-verification/verified-age")
				};
				return S.httpService.get(e).then(function(e) {
					return e.data
				})
			}

			function Ne(e) {
				var t = {
						retryable: !0,
						withCredentials: !0,
						url: "".concat(g, "/age-verification-service/v1/persona-id-verification/verified-status")
					},
					e = {
						token: e
					};
				return S.httpService.get(t, e).then(function(e) {
					return e.data
				})
			}

			function Le(e, t) {
				o.eventStreamService.sendEventWithTarget(e.type, e.context, b(b({}, e.params), {}, {
					origin: t.origin
				}))
			}

			function E(e, t, n, r, i, a, o) {
				try {
					var l = e[a](o),
						c = l.value
				} catch (e) {
					return void n(e)
				}
				l.done ? t(c) : Promise.resolve(c).then(r, i)
			}

			function A(e, t) {
				return function(e) {
					if (Array.isArray(e)) return e
				}(e) || function(e, t) {
					if ("undefined" == typeof Symbol || !(Symbol.iterator in Object(e))) return;
					var n = [],
						r = !0,
						i = !1,
						a = void 0;
					try {
						for (var o, l = e[Symbol.iterator](); !(r = (o = l.next()).done) && (n.push(o.value), !t || n.length !== t); r = !0);
					} catch (e) {
						i = !0, a = e
					} finally {
						try {
							r || null == l.return || l.return()
						} finally {
							if (i) throw a
						}
					}
					return n
				}(e, t) || function(e, t) {
					if (!e) return;
					if ("string" == typeof e) return Te(e, t);
					var n = Object.prototype.toString.call(e).slice(8, -1);
					"Object" === n && e.constructor && (n = e.constructor.name);
					if ("Map" === n || "Set" === n) return Array.from(e);
					if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return Te(e, t)
				}(e, t) || function() {
					throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
				}()
			}

			function Te(e, t) {
				(null == t || t > e.length) && (t = e.length);
				for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
				return r
			}

			function Re(e) {
				var n = e.translate,
					t = e.onHide,
					r = e.verificationLink,
					i = e.useQRCode,
					a = e.checklistStep,
					o = e.origin,
					l = A((0, w.useState)(), 2),
					c = l[0],
					s = l[1],
					e = A((0, w.useState)(!1), 2),
					l = e[0],
					u = e[1];
				(0, w.useEffect)(function() {
					function e() {
						var l;
						return l = regeneratorRuntime.mark(function e() {
							var t;
							return regeneratorRuntime.wrap(function(e) {
								for (;;) switch (e.prev = e.next) {
									case 0:
										return e.prev = 0, e.next = 3, f.hz(r, {
											errorCorrectionLevel: "H"
										});
									case 3:
										t = e.sent, s(t), e.next = 10;
										break;
									case 7:
										throw e.prev = 7, e.t0 = e.catch(0), new Error(e.t0);
									case 10:
										return e.prev = 10, u(i && t), e.finish(10);
									case 13:
									case "end":
										return e.stop()
								}
							}, e, null, [
								[0, 7, 10, 13]
							])
						}), (e = function() {
							var e = this,
								o = arguments;
							return new Promise(function(t, n) {
								var r = l.apply(e, o);

								function i(e) {
									E(r, t, n, i, a, "next", e)
								}

								function a(e) {
									E(r, t, n, i, a, "throw", e)
								}
								i(void 0)
							})
						}).apply(this, arguments)
					}! function() {
						e.apply(this, arguments)
					}()
				}, [i, r]);
				return x().createElement(x().Fragment, null, x().createElement(k.Modal.Header, {
					useBaseBootstrapComponent: !0
				}, x().createElement("div", {
					className: "email-upsell-title-container"
				}, x().createElement("button", {
					type: "button",
					className: "email-upsell-title-button",
					onClick: t
				}, x().createElement("span", {
					className: "close icon-close"
				})), x().createElement(k.Modal.Title, {
					id: "contained-modal-title-vcenter"
				}, n("Heading.IdentityVerification")))), x().createElement(k.Modal.Body, {
					className: "verification-checklist-page-content"
				}, x().createElement("div", {
					className: "cta"
				}, n(a === ve || a === ye ? "Label.VerifyInBrowser" : "Label.VerificationDataSubmitted")), x().createElement("ul", {
					className: "checklist-wrapper"
				}, ["Label.ConnectingToMobile", "Label.VerifyingYou", "Label.VerificationWaitingForResults", "Label.UpdatingRoblox"].map(function(e, t) {
					return t <= a ? x().createElement("li", {
						className: "checklist-item"
					}, x().createElement("span", {
						className: "check-wrapper"
					}, x().createElement("span", {
						className: t === a ? "spinner spinner-sm" : "icon-checkmark"
					})), x().createElement("span", {
						className: "checklist-text"
					}, n(e))) : null
				})), l && x().createElement("div", {
					className: "verification-link-page-content"
				}, x().createElement("div", {
					className: "qr-code-wrapper"
				}, x().createElement("img", {
					className: "qr-code-img",
					src: c,
					alt: "qr"
				})), x().createElement("div", {
					className: "footer-text"
				}, n("Label.HavingTroubleScanCode"))), !l && x().createElement("a", {
					href: r,
					onClick: function() {
						Le(j.verificationLinkClicked, {
							origin: o
						})
					},
					target: "_blank",
					rel: "noreferrer"
				}, x().createElement(k.Button, {
					className: "primary-link",
					variant: k.Button.variants.primary,
					size: k.Button.sizes.medium,
					width: k.Button.widths.full
				}, n("Action.RestartSession"))), x().createElement("div", {
					className: "footer-text"
				}, n("Label.PleaseDoNotClose"))))
			}
			Re.propTypes = {
				translate: n().func.isRequired,
				onHide: n().func.isRequired,
				verificationLink: n().string.isRequired,
				useQRCode: n().bool.isRequired,
				checklistStep: n().number.isRequired,
				origin: n().string.isRequired
			};
			var Ve = Re,
				Ue = {
					AgeVerification: "ageVerification",
					Enter: "Enter",
					InvalidEmailCode: 9,
					InvalidPasswordCode: 8,
					ActionChangeEmail: "Action.ChangeEmail",
					ActionSent: "Action.Sent",
					ActionContinue: "Action.Continue",
					ActionGenericSkip: "Action.GenericSkip",
					DescriptionAddEmailTextOver13: "Description.IDVerificationAddEmailText",
					DescriptionAddEmailTextUnder13: "Description.IDVerificationAddEmailText",
					HeadingAddEmail: "Heading.AddEmail",
					LabelEmailInputPlaceholderOver13: "Label.EmailInputPlaceholderOver13",
					LabelEmailInputPlaceholderUnder13: "Label.EmailInputPlaceholderUnder13",
					MessageInvalidEmailAddress: "Message.InvalidEmailAddress"
				};

			function Pe(t, e) {
				var n, r = Object.keys(t);
				return Object.getOwnPropertySymbols && (n = Object.getOwnPropertySymbols(t), e && (n = n.filter(function(e) {
					return Object.getOwnPropertyDescriptor(t, e).enumerable
				})), r.push.apply(r, n)), r
			}

			function Ie(r) {
				for (var e = 1; e < arguments.length; e++) {
					var i = null != arguments[e] ? arguments[e] : {};
					e % 2 ? Pe(Object(i), !0).forEach(function(e) {
						var t, n;
						t = r, e = i[n = e], n in t ? Object.defineProperty(t, n, {
							value: e,
							enumerable: !0,
							configurable: !0,
							writable: !0
						}) : t[n] = e
					}) : Object.getOwnPropertyDescriptors ? Object.defineProperties(r, Object.getOwnPropertyDescriptors(i)) : Pe(Object(i)).forEach(function(e) {
						Object.defineProperty(r, e, Object.getOwnPropertyDescriptor(i, e))
					})
				}
				return r
			}

			function Me(e) {
				var t = {
						retryable: !0,
						withCredentials: !0,
						url: "".concat(v, "/v1/settings/verify/show-overlay")
					},
					e = {
						showOverlay: e
					};
				return S.httpService.post(t, e).then(function(e) {
					return e.data
				})
			}

			function Be(e, t) {
				var n = {
						withCredentials: !0,
						url: "".concat(v, "/v1/settings/user-opt-in")
					},
					t = {
						isUserOptIn: e,
						isOptedInThroughUpsell: t
					};
				return S.httpService.post(n, t).then(function(e) {
					return e.data
				})
			}

			function Oe(e, t) {
				var n = {
						withCredentials: !0,
						url: "".concat(v, "/v1/settings/user-opt-in/avatarvideo")
					},
					t = {
						isUserOptIn: e,
						isOptedInThroughUpsell: t
					};
				return S.httpService.post(n, t).then(function(e) {
					return e.data
				})
			}

			function je() {
				var e = {
					withCredentials: !0,
					url: "".concat(v, "/v1/settings/record-user-seen-upsell-modal")
				};
				return S.httpService.post(e, {}).then(function(e) {
					return e.data
				})
			}

			function De() {
				var e = {
					withCredentials: !0,
					url: "".concat(v, "/v1/settings/record-user-seen-avatar-video-upsell-modal")
				};
				return S.httpService.post(e, {}).then(function(e) {
					return e.data
				})
			}

			function qe(e) {
				o.eventStreamService.sendEventWithTarget(e.type, e.context, Ie({}, e.params))
			}

			function Fe(e, t) {
				return function(e) {
					if (Array.isArray(e)) return e
				}(e) || function(e, t) {
					if ("undefined" == typeof Symbol || !(Symbol.iterator in Object(e))) return;
					var n = [],
						r = !0,
						i = !1,
						a = void 0;
					try {
						for (var o, l = e[Symbol.iterator](); !(r = (o = l.next()).done) && (n.push(o.value), !t || n.length !== t); r = !0);
					} catch (e) {
						i = !0, a = e
					} finally {
						try {
							r || null == l.return || l.return()
						} finally {
							if (i) throw a
						}
					}
					return n
				}(e, t) || function(e, t) {
					if (!e) return;
					if ("string" == typeof e) return He(e, t);
					var n = Object.prototype.toString.call(e).slice(8, -1);
					"Object" === n && e.constructor && (n = e.constructor.name);
					if ("Map" === n || "Set" === n) return Array.from(e);
					if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return He(e, t)
				}(e, t) || function() {
					throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
				}()
			}

			function He(e, t) {
				(null == t || t > e.length) && (t = e.length);
				for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
				return r
			}

			function _e(t, e) {
				var n, r = Object.keys(t);
				return Object.getOwnPropertySymbols && (n = Object.getOwnPropertySymbols(t), e && (n = n.filter(function(e) {
					return Object.getOwnPropertyDescriptor(t, e).enumerable
				})), r.push.apply(r, n)), r
			}

			function ze(r) {
				for (var e = 1; e < arguments.length; e++) {
					var i = null != arguments[e] ? arguments[e] : {};
					e % 2 ? _e(Object(i), !0).forEach(function(e) {
						var t, n;
						t = r, e = i[n = e], n in t ? Object.defineProperty(t, n, {
							value: e,
							enumerable: !0,
							configurable: !0,
							writable: !0
						}) : t[n] = e
					}) : Object.getOwnPropertyDescriptors ? Object.defineProperties(r, Object.getOwnPropertyDescriptors(i)) : _e(Object(i)).forEach(function(e) {
						Object.defineProperty(r, e, Object.getOwnPropertyDescriptor(i, e))
					})
				}
				return r
			}
			var Ke = c.EnvironmentUrls.websiteUrl,
				Qe = Ue.ActionGenericSkip,
				Ye = Ue.ActionContinue,
				Je = Ue.DescriptionAddEmailTextOver13,
				We = Ue.DescriptionAddEmailTextUnder13,
				Ge = Ue.HeadingAddEmail,
				Xe = Ue.LabelEmailInputPlaceholderOver13,
				Ze = Ue.LabelEmailInputPlaceholderUnder13,
				$e = {
					pageName: K,
					isEmailVerified: !1,
					isEmailSent: !1,
					isEmailUpdating: !1,
					origin: "",
					userEmail: "",
					userEmailInput: "",
					userEmailInputPlaceholder: Xe,
					errorMsg: "",
					titleText: Ge,
					bodyText: Je,
					primaryButtonText: Ye,
					secondaryButtonText: Ue.ActionChangeEmail,
					daysUntilNextVerification: 0,
					skipCallback: null,
					pageState: null,
					closeCallback: null,
					callbackReady: !1
				},
				et = (0, w.createContext)($e);

			function tt(e, t) {
				var n = null;
				switch (t.type) {
					case I:
						return ze(ze({}, e), {}, {
							userEmailInput: ""
						});
					case P:
						return ze(ze({}, e), {}, {
							origin: t.origin,
							skipCallback: t.skipCallback
						});
					case N:
						return ze(ze({}, e), {}, {
							isEmailVerified: t.isEmailVerified,
							userEmail: t.userEmail
						});
					case T:
						return t.pageName === F ? n = {
							heading: "Heading.ThankYou",
							icon: "success-icon",
							bodyText: ["Label.OverageVerification", "Label.VoiceChat"],
							buttonStack: [{
								variant: k.Button.variants.primary,
								text: "Action.OK",
								callback: function() {
									t.close()
								}
							}],
							canClose: !1
						} : t.pageName === H ? n = {
							heading: "Heading.ThankYou",
							icon: "success-icon",
							bodyText: ["Label.UnderageVerification", "Label.VoiceChat"],
							footerText: "Label.ToggleFeatures",
							buttonStack: [{
								variant: k.Button.variants.primary,
								text: "Action.Close",
								callback: function() {
									t.close()
								}
							}],
							canClose: !1
						} : t.pageName === _ ? (Le(j.successPage, {
							origin: e.origin
						}), o = ["Label.DateOfBirthUpdated"], t.isSeventeenPlus && o.push("Label.AccessWiderVariety"), n = {
							heading: "Heading.VerificationSuccessful",
							bodyText: o,
							buttonStack: [{
								variant: k.Button.variants.primary,
								text: "Action.Close",
								callback: function() {
									Le(j.successPageClose, {
										origin: e.origin
									}), t.close()
								}
							}],
							canClose: !1
						}) : t.pageName === m ? n = {
							heading: "Heading.VerifyEmail",
							icon: "shield-icon",
							bodyText: ["Label.EmailSent"],
							buttonStack: [{
								variant: k.Button.variants.primary,
								text: "Action.Continue",
								callback: function() {
									t.dispatch({
										type: T,
										pageName: Q
									}), t.poll()
								}
							}],
							userEmail: e.userEmail
						} : t.pageName === p ? n = {
							heading: "Heading.VerificationPending",
							icon: "shield-icon",
							bodyText: ["Label.EmailSent"],
							buttonStack: [{
								variant: k.Button.variants.primary,
								text: "Action.Continue",
								callback: function() {
									t.dispatch({
										type: T,
										pageName: Q
									}), t.poll()
								}
							}],
							userEmail: e.userEmail
						} : t.pageName === Q ? n = ze({}, t) : t.pageName === K ? n = {
							heading: "Heading.VerificationPending",
							icon: "failure-icon",
							bodyText: ["Label.PendingVerification"],
							buttonStack: [{
								variant: k.Button.variants.primary,
								text: "Action.Close",
								callback: function() {
									t.close()
								}
							}],
							canClose: !1
						} : t.pageName === z ? (Le(j.failurePage, {
							origin: e.origin
						}), n = {
							heading: "Heading.VerificationFailed",
							icon: "failure-icon",
							bodyText: [t.textKey || "Label.FailedVerification"],
							errorState: !0,
							buttonStack: [{
								variant: k.Button.variants.primary,
								text: "Action.Close",
								callback: function() {
									Le(j.failurePageClose, {
										origin: e.origin
									}), t.close()
								}
							}],
							canClose: !1
						}) : t.pageName === D ? n = {
							heading: "Heading.VerifyAge",
							icon: "shield-icon",
							bodyText: ["Label.VoiceChatUpsell"],
							buttonStack: [{
								text: "Action.SkipVoiceChat",
								callback: function() {
									t.dispatch({
										type: O
									})
								}
							}, {
								variant: k.Button.variants.primary,
								text: "Action.Continue",
								callback: function() {
									t.continue()
								}
							}],
							userEmail: e.userEmail,
							displayCheckbox: !0
						} : t.pageName === Y ? n = {
							heading: "Heading.Error",
							icon: "failure-icon",
							bodyText: ["Label.GenericError"],
							buttonStack: [{
								variant: k.Button.variants.primary,
								text: "Action.OK",
								callback: function() {
									t.close()
								}
							}],
							canClose: !1
						} : t.pageName === J ? (Le(j.tempBanPage, {
							origin: e.origin
						}), n = {
							heading: "Heading.Error",
							icon: "failure-icon",
							bodyText: ["Label.VerificationDeclined"],
							buttonStack: [{
								variant: k.Button.variants.primary,
								text: "Action.OK",
								callback: function() {
									Le(j.tempBanPageClose, {
										origin: e.origin
									}), t.close()
								}
							}],
							daysUntilNextVerification: t.daysUntilNextVerification,
							canClose: !1
						}) : t.pageName === W ? (t.useQRCode && Le(j.showQRCode, {
							origin: e.origin
						}), n = {
							verificationLink: t.verificationLink,
							useQRCode: t.useQRCode,
							origin: e.origin,
							redirectUrl: t.redirectUrl
						}) : t.pageName === G ? n = {
							communityStandardsUrl: S.urlService.resolveUrl(Ke, "/info/community-guidelines"),
							voiceFAQUrl: S.urlService.resolveUrl(Ke, "/info/voice-faq"),
							requireExplicitVoiceConsent: t.requireExplicitVoiceConsent,
							useVoiceUpsellV2Design: t.useVoiceUpsellV2Design,
							voiceUpsellV1Keys: {
								heading: "Heading.LetsChat",
								enableVoiceChat: "Label.EnableVoiceChat1",
								followCommunityStandards: "Label.FollowCommunityStandards",
								implicitConsent: "Label.ImplicitConsentVoiceCollectionWithML",
								explicitConsent: "Label.ExplicitConsentVoiceCollectionWithML",
								learnMoreAboutVoiceRecording: "Label.LearnMoreAboutVoiceRecording",
								buttonStack: [{
									explicitDisable: !1,
									variant: k.Button.variants.secondary,
									text: "Action.SkipVoiceChat",
									callback: function() {
										qe(j.joinWithoutVoiceChat), t.close()
									}
								}, {
									explicitDisable: !0,
									variant: k.Button.variants.primary,
									text: "Label.EnableVoiceChat",
									callback: function() {
										Be(!0, !0), t.close()
									}
								}]
							},
							voiceUpsellV2Keys: {
								heading: "Heading.V2LetsChat",
								enableVoiceChat: "Label.V2EnableVoiceChat1",
								followCommunityStandards: "Label.FollowCommunityStandards",
								implicitConsent: "Label.V2ClickToConsent",
								explicitConsent: "Label.V2ClickToConsent",
								learnMoreAboutVoiceRecording: "Label.LearnMoreAboutVoiceRecording",
								buttonStack: [{
									explicitDisable: !0,
									variant: k.Button.variants.primary,
									text: "Label.V2EnableVoiceChat",
									callback: function() {
										qe(j.enableVoiceChatUpsell), Be(!0, !0), t.close()
									}
								}, {
									explicitDisable: !1,
									variant: k.Button.variants.secondary,
									text: "Label.V2JoinWithout",
									callback: function() {
										qe(j.joinWithoutVoiceChat), t.close()
									}
								}]
							}
						} : t.pageName === X && (n = {
							title: "Title.CameraUpsell",
							animateYourAvatar: "Description.CameraUpsell",
							communityStandards: "Description.CommunityStandardsUpsell",
							cameraPrivacy: "Description.CameraPrivacy",
							implicitConsent: "Description.DefaultConsentCameraUpsell",
							explicitConsent: "Description.ExplicitConsentCameraUpsell",
							learnMore: "Label.CameraLearnMoreUpsell",
							facialPrivacyUrl: S.urlService.resolveUrl(Ke, "/info/facial-animation-privacy"),
							requireExplicitCameraConsent: t.requireExplicitCameraConsent,
							useCameraU13Design: t.useCameraU13Design,
							buttons: [{
								text: "Label.EnableCameraUpsell",
								explicitDisable: !0,
								callback: function() {
									Oe(!0, !0), qe(j.enableAvatarVideo), t.close()
								}
							}, {
								text: "Label.JoinWithoutCameraUpsell",
								explicitDisable: !1,
								callback: function() {
									qe(j.joinWithoutAvatarVideo), t.close()
								}
							}]
						}), ze(ze({}, e), {}, {
							pageName: t.pageName,
							pageState: n
						});
					case V:
						return ze(ze({}, e), {}, {
							errorMsg: t.errorMsg
						});
					case U:
						return ze(ze({}, e), {}, {
							isEmailUpdating: t.isEmailUpdating
						});
					case R:
						return e.pageName === q ? ze(ze({}, e), {}, {
							userEmailInput: t.value,
							errorMsg: ""
						}) : e;
					case L:
						if (e.pageName !== q) return e;
						var r = c.CurrentUser && !c.CurrentUser.isUnder13,
							i = Je,
							a = We,
							o = Ge,
							l = "";
						return e.skipCallback && (l = Qe), ze(ze({}, e), {}, {
							titleText: o,
							bodyText: r ? i : a,
							primaryButtonText: Ye,
							secondaryButtonText: l,
							errorMsg: "",
							userEmailInputPlaceholder: r ? Xe : Ze
						});
					case M:
						return ze(ze({}, e), {}, {
							closeCallback: t.callback,
							callbackReady: !0
						});
					case B:
						return ze(ze({}, e), {}, {
							callbackReady: !0
						});
					case O:
						return e.callbackReady && (a = (i = e.pageName === _ || e.pageName === F) || e.pageName === H, l = i, r = a, c.Hybrid && c.Hybrid.Navigation && c.Hybrid.Navigation.navigateToFeature({
							feature: "close-veratad-modal-event",
							overage: l,
							verified: r
						}), e.closeCallback && e.closeCallback(i, a)), ze({}, $e);
					default:
						return e
				}
			}

			function nt(e) {
				var t = e.children,
					e = (n = Fe((0, w.useReducer)(tt, $e), 2))[0],
					n = n[1];
				return x().createElement(et.Provider, {
					value: {
						idVerificationState: e,
						dispatch: n
					}
				}, t)
			}

			function rt() {
				return (0, w.useContext)(et)
			}

			function it(e) {
				var t = e.onHide,
					n = e.onPrimaryAction,
					r = e.onSecondaryAction,
					i = e.onInputChange,
					a = e.onInputFocus,
					o = e.onKeyDown,
					l = e.translate,
					c = rt().idVerificationState,
					s = c.pageName,
					u = c.titleText,
					d = c.bodyText,
					f = c.primaryButtonText,
					p = c.secondaryButtonText,
					m = c.userEmailInput,
					g = c.userEmailInputPlaceholder,
					h = c.userEmail,
					e = c.errorMsg,
					c = c.isEmailUpdating;
				return x().createElement(x().Fragment, null, x().createElement(k.Modal.Header, {
					useBaseBootstrapComponent: !0
				}, x().createElement("div", {
					className: "email-upsell-title-container"
				}, x().createElement("button", {
					type: "button",
					className: "email-upsell-title-button",
					onClick: t
				}, x().createElement("span", {
					className: "close icon-close"
				})), x().createElement(k.Modal.Title, {
					id: "contained-modal-title-vcenter"
				}, l(u)))), x().createElement(k.Modal.Body, null, x().createElement("div", {
					className: "email-upsell-image"
				}), x().createElement("p", {
					className: "email-upsell-text-body"
				}, l(d, {
					emailAddress: h
				})), s === q && x().createElement("input", {
					type: "email",
					autoFocus: !0,
					className: "".concat(e ? "input-field-error" : "", " form-control input-field email-upsell-modal-input"),
					placeholder: l(g),
					value: m,
					onFocus: function() {
						return a()
					},
					onChange: function(e) {
						return i(e.target.value)
					},
					onKeyDown: function(e) {
						return o(e.key)
					}
				}), e && x().createElement("p", {
					className: "text-error modal-error-message"
				}, l(e))), x().createElement(k.Modal.Footer, null, x().createElement("div", {
					className: "email-upsell-footer-container"
				}, s === q && x().createElement(k.Button, {
					className: "modal-button email-upsell-btn",
					variant: k.Button.variants.cta,
					size: k.Button.sizes.medium,
					isDisabled: c,
					onClick: n
				}, l(f)), p && x().createElement("button", {
					type: "button",
					className: "change-email-button",
					onClick: r
				}, l(p)))))
			}
			nt.propTypes = {
				children: n().node.isRequired
			}, it.propTypes = {
				translate: n().func.isRequired,
				onHide: n().func.isRequired,
				onPrimaryAction: n().func.isRequired,
				onSecondaryAction: n().func.isRequired,
				onInputChange: n().func.isRequired,
				onKeyDown: n().func.isRequired,
				onInputFocus: n().func.isRequired
			};
			var at = (0, a.withTranslations)(it, {
					common: [],
					feature: "Feature.VerificationUpsell"
				}),
				d = en(204),
				ot = en.n(d),
				d = en(802),
				lt = en.n(d),
				d = en(779),
				ct = en.n(d);

			function st(e, t) {
				return function(e) {
					if (Array.isArray(e)) return e
				}(e) || function(e, t) {
					if ("undefined" == typeof Symbol || !(Symbol.iterator in Object(e))) return;
					var n = [],
						r = !0,
						i = !1,
						a = void 0;
					try {
						for (var o, l = e[Symbol.iterator](); !(r = (o = l.next()).done) && (n.push(o.value), !t || n.length !== t); r = !0);
					} catch (e) {
						i = !0, a = e
					} finally {
						try {
							r || null == l.return || l.return()
						} finally {
							if (i) throw a
						}
					}
					return n
				}(e, t) || function(e, t) {
					if (!e) return;
					if ("string" == typeof e) return ut(e, t);
					var n = Object.prototype.toString.call(e).slice(8, -1);
					"Object" === n && e.constructor && (n = e.constructor.name);
					if ("Map" === n || "Set" === n) return Array.from(e);
					if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return ut(e, t)
				}(e, t) || function() {
					throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
				}()
			}

			function ut(e, t) {
				(null == t || t > e.length) && (t = e.length);
				for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
				return r
			}
			var dt = function(n, e, t, r, i) {
				var a = st((0, w.useState)(!i), 2),
					o = a[0],
					l = a[1];
				return [x().createElement("div", {
					className: "checkbox checkbox-container"
				}, i ? x().createElement(x().Fragment, null, x().createElement("input", {
					type: "checkbox",
					checked: o,
					onClick: function() {
						l(!o), Me(o)
					},
					id: "isShowOverlayChecked"
				}), x().createElement("label", {
					htmlFor: "isShowOverlayChecked",
					className: "voice-modal-checkbox-label"
				}, n(r, {
					linkStart: "",
					linkEnd: ""
				}))) : x().createElement("span", null, n(t, {
					linkStart: "",
					linkEnd: ""
				}))), e.map(function(e) {
					var t = e.variant === k.Button.variants.primary;
					return x().createElement("span", {
						key: e.text
					}, x().createElement(k.Button, {
						className: ct()("button-stack-button", {
							"primary-link": t,
							"secondary-link": !t
						}),
						variant: e.variant,
						size: k.Button.sizes.medium,
						isDisabled: i && e.explicitDisable && !o,
						onClick: e.callback
					}, n(e.text)))
				})]
			};

			function ft(e, t) {
				return function(e) {
					if (Array.isArray(e)) return e
				}(e) || function(e, t) {
					if ("undefined" == typeof Symbol || !(Symbol.iterator in Object(e))) return;
					var n = [],
						r = !0,
						i = !1,
						a = void 0;
					try {
						for (var o, l = e[Symbol.iterator](); !(r = (o = l.next()).done) && (n.push(o.value), !t || n.length !== t); r = !0);
					} catch (e) {
						i = !0, a = e
					} finally {
						try {
							r || null == l.return || l.return()
						} finally {
							if (i) throw a
						}
					}
					return n
				}(e, t) || function(e, t) {
					if (!e) return;
					if ("string" == typeof e) return pt(e, t);
					var n = Object.prototype.toString.call(e).slice(8, -1);
					"Object" === n && e.constructor && (n = e.constructor.name);
					if ("Map" === n || "Set" === n) return Array.from(e);
					if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return pt(e, t)
				}(e, t) || function() {
					throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
				}()
			}

			function pt(e, t) {
				(null == t || t > e.length) && (t = e.length);
				for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
				return r
			}

			function mt(e) {
				var t = e.translate,
					n = e.communityStandardsUrl,
					r = e.voiceFAQUrl,
					i = e.requireExplicitVoiceConsent,
					a = e.heading,
					o = e.enableVoiceChat,
					l = e.followCommunityStandards,
					c = e.implicitConsent,
					s = e.explicitConsent,
					u = e.learnMoreAboutVoiceRecording,
					d = e.buttonStack,
					f = e.useVoiceUpsellV2Design,
					s = ft(dt(t, d, c, s, i), 2),
					i = s[0],
					s = s[1];
				return (0, w.useEffect)(function() {
					qe(j.showEnableVoiceChatModal), je()
				}, []), x().createElement(x().Fragment, null, x().createElement(k.Modal.Header, {
					useBaseBootstrapComponent: !0
				}, x().createElement("div", {
					className: "email-upsell-title-container"
				}, x().createElement(k.Modal.Title, {
					id: "contained-modal-title-vcenter"
				}, t(a)))), x().createElement(k.Modal.Body, null, x().createElement("div", null, x().createElement("div", {
					className: "legal-enable-page-row"
				}, x().createElement("img", {
					width: 60,
					height: 60,
					src: lt(),
					alt: ""
				}), x().createElement("p", {
					className: "legal-enable-page-row-label"
				}, t(o))), x().createElement("div", {
					className: "legal-enable-page-row"
				}, x().createElement("img", {
					width: 60,
					height: 60,
					src: ot(),
					alt: ""
				}), x().createElement("p", {
					className: "legal-enable-page-row-label",
					dangerouslySetInnerHTML: {
						__html: t(l, {
							linkStart: '<a class="text-name" target="_blank" rel="noreferrer" href='.concat(n, ">"),
							linkEnd: "</a>"
						})
					}
				}))), i), x().createElement(k.Modal.Footer, null, s), x().createElement("div", {
					className: "text-footer legal-enable-page-text-footer border-top"
				}, x().createElement("span", null, x().createElement("div", {
					className: "icon-moreinfo"
				}), x().createElement("a", {
					className: "text-link legal-enable-page-text-footer-link",
					target: "_blank",
					rel: "noreferrer",
					href: r,
					onClick: function() {
						return f && qe(j.learnMoreAboutVoiceRecordingUpsell)
					}
				}, t(u)))))
			}
			mt.propTypes = {
				translate: n().func.isRequired,
				heading: n().string.isRequired,
				enableVoiceChat: n().string.isRequired,
				followCommunityStandards: n().string.isRequired,
				buttonStack: n().arrayOf(n().shape({
					variant: n().oneOf(k.Button.variants),
					text: n().string,
					callback: n().func,
					explicitDisable: n().bool
				})).isRequired,
				implicitConsent: n().string.isRequired,
				explicitConsent: n().string.isRequired,
				requireExplicitVoiceConsent: n().bool.isRequired,
				learnMoreAboutVoiceRecording: n().string.isRequired,
				communityStandardsUrl: n().string.isRequired,
				voiceFAQUrl: n().string.isRequired,
				useVoiceUpsellV2Design: n().bool.isRequired
			};
			var gt = mt;

			function ht(e, t, n, r, i, a, o) {
				try {
					var l = e[a](o),
						c = l.value
				} catch (e) {
					return void n(e)
				}
				l.done ? t(c) : Promise.resolve(c).then(r, i)
			}

			function vt(e, t) {
				return function(e) {
					if (Array.isArray(e)) return e
				}(e) || function(e, t) {
					if ("undefined" == typeof Symbol || !(Symbol.iterator in Object(e))) return;
					var n = [],
						r = !0,
						i = !1,
						a = void 0;
					try {
						for (var o, l = e[Symbol.iterator](); !(r = (o = l.next()).done) && (n.push(o.value), !t || n.length !== t); r = !0);
					} catch (e) {
						i = !0, a = e
					} finally {
						try {
							r || null == l.return || l.return()
						} finally {
							if (i) throw a
						}
					}
					return n
				}(e, t) || function(e, t) {
					if (!e) return;
					if ("string" == typeof e) return yt(e, t);
					var n = Object.prototype.toString.call(e).slice(8, -1);
					"Object" === n && e.constructor && (n = e.constructor.name);
					if ("Map" === n || "Set" === n) return Array.from(e);
					if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return yt(e, t)
				}(e, t) || function() {
					throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
				}()
			}

			function yt(e, t) {
				(null == t || t > e.length) && (t = e.length);
				for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
				return r
			}

			function bt(e) {
				var t = e.translate,
					n = e.onHide,
					r = e.verificationLink,
					i = e.useQRCode,
					a = e.origin,
					o = e.entry,
					l = e.redirectUrl,
					c = vt((0, w.useState)(), 2),
					s = c[0],
					u = c[1],
					e = vt((0, w.useState)(!1), 2),
					c = e[0],
					d = e[1];
				(0, w.useEffect)(function() {
					function e() {
						var l;
						return l = regeneratorRuntime.mark(function e() {
							var t;
							return regeneratorRuntime.wrap(function(e) {
								for (;;) switch (e.prev = e.next) {
									case 0:
										return e.prev = 0, e.next = 3, f.hz(r, {
											errorCorrectionLevel: "H"
										});
									case 3:
										t = e.sent, u(t), e.next = 10;
										break;
									case 7:
										throw e.prev = 7, e.t0 = e.catch(0), new Error(e.t0);
									case 10:
										return e.prev = 10, d(i && t), e.finish(10);
									case 13:
									case "end":
										return e.stop()
								}
							}, e, null, [
								[0, 7, 10, 13]
							])
						}), (e = function() {
							var e = this,
								o = arguments;
							return new Promise(function(t, n) {
								var r = l.apply(e, o);

								function i(e) {
									ht(r, t, n, i, a, "next", e)
								}

								function a(e) {
									ht(r, t, n, i, a, "throw", e)
								}
								i(void 0)
							})
						}).apply(this, arguments)
					}! function() {
						e.apply(this, arguments)
					}()
				}, [i, r]);
				e = o === te || o === ne ? "_self" : "_blank", l = o === te || ne ? "".concat(r, "&redirect-uri=").concat(encodeURIComponent(l)) : r;
				return x().createElement(x().Fragment, null, x().createElement(k.Modal.Header, {
					useBaseBootstrapComponent: !0
				}, x().createElement("div", {
					className: "email-upsell-title-container"
				}, x().createElement("button", {
					type: "button",
					className: "email-upsell-title-button",
					onClick: n
				}, x().createElement("span", {
					className: "close icon-close"
				})), x().createElement(k.Modal.Title, {
					id: "contained-modal-title-vcenter"
				}, t("Heading.IdentityVerification")))), x().createElement(k.Modal.Body, {
					className: "verification-link-page-content"
				}, x().createElement("div", {
					className: "verification-link-upsell"
				}, t("Label.AgeVerifyPrompt")), x().createElement("div", {
					className: "preparation-list-wrapper"
				}, x().createElement("div", {
					className: "preparation-list-item"
				}, x().createElement("span", {
					className: "icon-menu-document"
				}), x().createElement("div", {
					className: "preparation-list-text"
				}, x().createElement("div", {
					className: "preparation-title"
				}, t("Label.PrepareId")), x().createElement("div", {
					className: "preparation-text"
				}, t("Label.ValidIdList")))), c && x().createElement("div", {
					className: "preparation-list-item"
				}, x().createElement("span", {
					className: "icon-menu-mobile"
				}), x().createElement("div", {
					className: "preparation-list-text"
				}, x().createElement("div", {
					className: "preparation-title"
				}, t("Label.UseSmartphone")), x().createElement("div", {
					className: "preparation-text"
				}, t("Label.SmartphoneRequired"))))), c && x().createElement("div", null, x().createElement("div", {
					className: "verification-link-upsell"
				}, t("Label.ScanQRCode")), x().createElement("div", {
					className: "qr-code-wrapper"
				}, x().createElement("img", {
					className: "qr-code-img",
					src: s,
					alt: "qr"
				}))), x().createElement("p", {
					className: "verification-link-legal",
					dangerouslySetInnerHTML: {
						__html: t("Label.PrivacyNoticeAndLink", {
							spanStart: "<a class='text-link' href='https://en.help.roblox.com/hc/en-us/articles/4412863575316'>",
							spanEnd: "</a>"
						})
					}
				}), !c && x().createElement("a", {
					href: l,
					onClick: function() {
						Le(j.verificationLinkClicked, {
							origin: a
						})
					},
					target: e,
					rel: "noreferrer"
				}, x().createElement(k.Button, {
					className: "primary-link",
					variant: k.Button.variants.primary,
					size: k.Button.sizes.medium,
					width: k.Button.widths.full
				}, t("Action.StartSession")))))
			}
			bt.propTypes = {
				translate: n().func.isRequired,
				onHide: n().func.isRequired,
				verificationLink: n().string.isRequired,
				useQRCode: n().bool.isRequired,
				origin: n().string.isRequired,
				entry: n().string.isRequired,
				redirectUrl: n().string
			}, bt.defaultProps = {
				redirectUrl: ""
			};
			var Et = bt;

			function At(e, t) {
				return function(e) {
					if (Array.isArray(e)) return e
				}(e) || function(e, t) {
					if ("undefined" == typeof Symbol || !(Symbol.iterator in Object(e))) return;
					var n = [],
						r = !0,
						i = !1,
						a = void 0;
					try {
						for (var o, l = e[Symbol.iterator](); !(r = (o = l.next()).done) && (n.push(o.value), !t || n.length !== t); r = !0);
					} catch (e) {
						i = !0, a = e
					} finally {
						try {
							r || null == l.return || l.return()
						} finally {
							if (i) throw a
						}
					}
					return n
				}(e, t) || function(e, t) {
					if (!e) return;
					if ("string" == typeof e) return Ct(e, t);
					var n = Object.prototype.toString.call(e).slice(8, -1);
					"Object" === n && e.constructor && (n = e.constructor.name);
					if ("Map" === n || "Set" === n) return Array.from(e);
					if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return Ct(e, t)
				}(e, t) || function() {
					throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
				}()
			}

			function Ct(e, t) {
				(null == t || t > e.length) && (t = e.length);
				for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
				return r
			}

			function wt(e) {
				var n = e.translate,
					t = e.onHide,
					r = e.heading,
					i = e.icon,
					a = e.bodyText,
					o = e.errorState,
					l = e.footerText,
					c = e.userEmail,
					s = e.daysUntilNextVerification,
					u = e.canClose,
					d = e.buttonStack,
					f = e.includeLink,
					p = e.displayCheckbox,
					e = At((0, w.useState)(!1), 2),
					m = e[0],
					g = e[1];
				return x().createElement(x().Fragment, null, x().createElement(k.Modal.Header, {
					useBaseBootstrapComponent: !0
				}, x().createElement("div", {
					className: "email-upsell-title-container"
				}, u && x().createElement("button", {
					type: "button",
					className: "email-upsell-title-button",
					onClick: t
				}, x().createElement("span", {
					className: "close icon-close"
				})), x().createElement(k.Modal.Title, {
					id: "contained-modal-title-vcenter"
				}, n(r)))), x().createElement(k.Modal.Body, null, i && x().createElement("div", {
					className: i
				}), x().createElement("ul", {
					className: o ? "content-list error-text" : "content-list"
				}, f ? a.map(function(e) {
					return x().createElement("li", {
						dangerouslySetInnerHTML: {
							__html: n(e, {
								spanStart: "<a class='text-link' href='/info/privacy'>",
								spanEnd: "</a>",
								boldStart: "<b>",
								boldEnd: "</b>"
							})
						}
					})
				}) : a.map(function(e) {
					return x().createElement("li", null, n(e, {
						age: 18,
						email: c,
						days: s
					}))
				})), p && x().createElement("div", {
					className: "checkbox checkbox-container"
				}, x().createElement("input", {
					id: "isShowOverlayChecked",
					type: "checkbox",
					checked: m,
					onClick: function() {
						g(!m), Me(m)
					}
				}), x().createElement("label", {
					htmlFor: "isShowOverlayChecked"
				}, n("Label.DontShowAgain")))), x().createElement(k.Modal.Footer, null, l && x().createElement("p", {
					className: "small"
				}, x().createElement("b", null, n(l))), d.map(function(e) {
					var t = e.variant === k.Button.variants.primary;
					return x().createElement("span", {
						key: e.text
					}, x().createElement(k.Button, {
						className: ct()("button-stack-button", {
							"primary-link": t,
							"secondary-link": !t
						}),
						variant: e.variant,
						size: k.Button.sizes.medium,
						onClick: e.callback
					}, n(e.text)))
				})))
			}

			function xt() {
				var e = {
					retryable: !0,
					withCredentials: !0,
					url: "".concat(h, "/v1/email/verify")
				};
				return S.httpService.post(e).then(function() {
					return !0
				}, function() {
					return !1
				})
			}
			wt.defaultProps = {
				errorState: !1,
				footerText: null,
				userEmail: null,
				daysUntilNextVerification: 0,
				canClose: !0,
				includeLink: !1,
				displayCheckbox: !1
			}, wt.propTypes = {
				translate: n().func.isRequired,
				onHide: n().func.isRequired,
				heading: n().string.isRequired,
				icon: n().string.isRequired,
				bodyText: n().arrayOf(n().string).isRequired,
				errorState: n().bool,
				footerText: n().string,
				userEmail: n().string,
				daysUntilNextVerification: n().number,
				canClose: n().bool,
				includeLink: n().bool,
				buttonStack: n().arrayOf(n().shape({
					variant: n().oneOf(k.Button.variants),
					text: n().string,
					callback: n().func
				})).isRequired,
				displayCheckbox: n().bool
			};
			var St = wt,
				d = en(52),
				kt = en.n(d),
				d = en(771),
				Nt = en.n(d);

			function Lt(e, t) {
				return function(e) {
					if (Array.isArray(e)) return e
				}(e) || function(e, t) {
					if ("undefined" == typeof Symbol || !(Symbol.iterator in Object(e))) return;
					var n = [],
						r = !0,
						i = !1,
						a = void 0;
					try {
						for (var o, l = e[Symbol.iterator](); !(r = (o = l.next()).done) && (n.push(o.value), !t || n.length !== t); r = !0);
					} catch (e) {
						i = !0, a = e
					} finally {
						try {
							r || null == l.return || l.return()
						} finally {
							if (i) throw a
						}
					}
					return n
				}(e, t) || function(e, t) {
					if (!e) return;
					if ("string" == typeof e) return Tt(e, t);
					var n = Object.prototype.toString.call(e).slice(8, -1);
					"Object" === n && e.constructor && (n = e.constructor.name);
					if ("Map" === n || "Set" === n) return Array.from(e);
					if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return Tt(e, t)
				}(e, t) || function() {
					throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
				}()
			}

			function Tt(e, t) {
				(null == t || t > e.length) && (t = e.length);
				for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
				return r
			}
			var Rt = function(t, e, n, r, i) {
				var a = Lt((0, w.useState)(!r), 2),
					o = a[0],
					l = a[1];
				return [x().createElement("div", {
					className: "checkbox checkbox-container"
				}, r ? x().createElement(x().Fragment, null, x().createElement("input", {
					type: "checkbox",
					checked: o,
					onClick: function() {
						l(!o)
					},
					id: "isShowOverlayChecked"
				}), x().createElement("label", {
					htmlFor: "isShowOverlayChecked",
					className: "voice-modal-checkbox-label"
				}, t(n))) : x().createElement("span", null, t(e))), i.map(function(e) {
					return x().createElement("div", {
						className: "half-flex",
						key: e.text
					}, x().createElement(k.Button, {
						className: "button-stack-button secondary-link",
						variant: "secondary",
						size: k.Button.sizes.medium,
						isDisabled: r && e.explicitDisable && !o,
						onClick: e.callback
					}, t(e.text)))
				})]
			};

			function Vt(e, t) {
				return function(e) {
					if (Array.isArray(e)) return e
				}(e) || function(e, t) {
					if ("undefined" == typeof Symbol || !(Symbol.iterator in Object(e))) return;
					var n = [],
						r = !0,
						i = !1,
						a = void 0;
					try {
						for (var o, l = e[Symbol.iterator](); !(r = (o = l.next()).done) && (n.push(o.value), !t || n.length !== t); r = !0);
					} catch (e) {
						i = !0, a = e
					} finally {
						try {
							r || null == l.return || l.return()
						} finally {
							if (i) throw a
						}
					}
					return n
				}(e, t) || function(e, t) {
					if (!e) return;
					if ("string" == typeof e) return Ut(e, t);
					var n = Object.prototype.toString.call(e).slice(8, -1);
					"Object" === n && e.constructor && (n = e.constructor.name);
					if ("Map" === n || "Set" === n) return Array.from(e);
					if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return Ut(e, t)
				}(e, t) || function() {
					throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
				}()
			}

			function Ut(e, t) {
				(null == t || t > e.length) && (t = e.length);
				for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
				return r
			}

			function Pt(e) {
				var t = e.translate,
					n = e.title,
					r = e.animateYourAvatar,
					i = e.communityStandards,
					a = e.implicitConsent,
					o = e.explicitConsent,
					l = e.requireExplicitCameraConsent,
					c = e.learnMore,
					s = e.facialPrivacyUrl,
					u = e.buttons,
					d = e.cameraPrivacy,
					e = e.useCameraU13Design,
					l = Vt(Rt(t, a, o, l, u), 2),
					u = l[0],
					l = l[1];
				return (0, w.useEffect)(function() {
					qe(j.showUnifiedChatUpsellModal), De()
				}, []), x().createElement(x().Fragment, null, x().createElement(k.Modal.Header, {
					useBaseBootstrapComponent: !0
				}, x().createElement("div", {
					className: "email-upsell-title-container"
				}, x().createElement(k.Modal.Title, {
					id: "contained-modal-title-vcenter"
				}, t(n)))), x().createElement(k.Modal.Body, null, x().createElement("div", null, x().createElement("div", {
					className: "legal-enable-page-row"
				}, x().createElement("img", {
					width: 60,
					height: 60,
					src: Nt(),
					alt: ""
				}), x().createElement("p", {
					className: "legal-enable-page-row-label"
				}, t(r))), x().createElement("div", {
					className: "legal-enable-page-row"
				}, x().createElement("img", {
					width: 60,
					height: 60,
					src: (e ? kt : ot)(),
					alt: ""
				}), x().createElement("p", {
					className: "legal-enable-page-row-label"
				}, t(e ? d : i)))), u), x().createElement(k.Modal.Footer, null, x().createElement("div", {
					className: "half-flex-container"
				}, l)), x().createElement("div", {
					className: "text-footer legal-enable-page-text-footer border-top"
				}, x().createElement("span", null, x().createElement("div", {
					className: "icon-moreinfo"
				}), x().createElement("a", {
					className: "text-link legal-enable-page-text-footer-link",
					target: "_blank",
					rel: "noreferrer",
					href: s,
					onClick: function() {
						return qe(j.learnMoreAvatarVideo)
					}
				}, t(c)))))
			}
			Pt.propTypes = {
				translate: n().func.isRequired,
				title: n().string.isRequired,
				animateYourAvatar: n().string.isRequired,
				communityStandards: n().string.isRequired,
				implicitConsent: n().string.isRequired,
				explicitConsent: n().string.isRequired,
				learnMore: n().string.isRequired,
				facialPrivacyUrl: n().string.isRequired,
				buttons: n().arrayOf(n().object).isRequired,
				requireExplicitCameraConsent: n().bool.isRequired,
				cameraPrivacy: n().string.isRequired,
				useCameraU13Design: n().bool.isRequired
			};
			var It = Pt;

			function Mt(t, e) {
				var n, r = Object.keys(t);
				return Object.getOwnPropertySymbols && (n = Object.getOwnPropertySymbols(t), e && (n = n.filter(function(e) {
					return Object.getOwnPropertyDescriptor(t, e).enumerable
				})), r.push.apply(r, n)), r
			}

			function Bt(r) {
				for (var e = 1; e < arguments.length; e++) {
					var i = null != arguments[e] ? arguments[e] : {};
					e % 2 ? Mt(Object(i), !0).forEach(function(e) {
						var t, n;
						t = r, e = i[n = e], n in t ? Object.defineProperty(t, n, {
							value: e,
							enumerable: !0,
							configurable: !0,
							writable: !0
						}) : t[n] = e
					}) : Object.getOwnPropertyDescriptors ? Object.defineProperties(r, Object.getOwnPropertyDescriptors(i)) : Mt(Object(i)).forEach(function(e) {
						Object.defineProperty(r, e, Object.getOwnPropertyDescriptor(i, e))
					})
				}
				return r
			}

			function Ot() {
				return (Ot = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n, r = arguments[t];
						for (n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n])
					}
					return e
				}).apply(this, arguments)
			}

			function jt(e, t, n, r, i, a, o) {
				try {
					var l = e[a](o),
						c = l.value
				} catch (e) {
					return void n(e)
				}
				l.done ? t(c) : Promise.resolve(c).then(r, i)
			}

			function Dt(l) {
				return function() {
					var e = this,
						o = arguments;
					return new Promise(function(t, n) {
						var r = l.apply(e, o);

						function i(e) {
							jt(r, t, n, i, a, "next", e)
						}

						function a(e) {
							jt(r, t, n, i, a, "throw", e)
						}
						i(void 0)
					})
				}
			}

			function qt(e, t) {
				return function(e) {
					if (Array.isArray(e)) return e
				}(e) || function(e, t) {
					if ("undefined" == typeof Symbol || !(Symbol.iterator in Object(e))) return;
					var n = [],
						r = !0,
						i = !1,
						a = void 0;
					try {
						for (var o, l = e[Symbol.iterator](); !(r = (o = l.next()).done) && (n.push(o.value), !t || n.length !== t); r = !0);
					} catch (e) {
						i = !0, a = e
					} finally {
						try {
							r || null == l.return || l.return()
						} finally {
							if (i) throw a
						}
					}
					return n
				}(e, t) || function(e, t) {
					if (!e) return;
					if ("string" == typeof e) return Ft(e, t);
					var n = Object.prototype.toString.call(e).slice(8, -1);
					"Object" === n && e.constructor && (n = e.constructor.name);
					if ("Map" === n || "Set" === n) return Array.from(e);
					if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return Ft(e, t)
				}(e, t) || function() {
					throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
				}()
			}

			function Ft(e, t) {
				(null == t || t > e.length) && (t = e.length);
				for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
				return r
			}
			var Ht = (d = !!c.DeviceMeta && (0, c.DeviceMeta)()).isAndroidApp,
				_t = d.isDesktop,
				zt = Ue.MessageConfirmationEmailNotSent,
				Kt = Ue.MessageInvalidEmailAddress;

			function Qt(e) {
				var t = e.translate,
					p = e.entry,
					n = rt(),
					r = n.idVerificationState,
					m = n.dispatch,
					i = r.pageName,
					a = r.pageState,
					o = qt((0, w.useState)(!1), 2),
					l = o[0],
					c = o[1],
					s = qt((0, w.useState)(!1), 2),
					u = s[0],
					d = s[1],
					g = (0, w.useRef)("");

				function h() {
					m({
						type: O
					}), d(!1), g.current = "", p === Z && i === _ && document.location.reload()
				}

				function f() {
					Le(j.exitIdentityVerification, {
						origin: p
					}), h()
				}

				function v(e) {
					if (null != e && e.isVerified && null != e && e.verifiedAge) {
						try {
							Me(!0)
						} catch (e) {
							console.log(e)
						}
						p === Z ? m({
							type: T,
							pageName: _,
							dispatch: m,
							close: function() {
								h()
							}
						}) : 18 <= e.verifiedAge ? m({
							type: T,
							pageName: F,
							dispatch: m,
							close: function() {
								m({
									type: T,
									pageName: G,
									dispatch: m,
									close: function() {
										h()
									}
								})
							}
						}) : m({
							type: T,
							pageName: H,
							dispatch: m,
							close: function() {
								h()
							}
						})
					} else m({
						type: T,
						pageName: z,
						dispatch: m,
						close: function() {
							h()
						}
					})
				}
				var y = function() {
					var e = Dt(regeneratorRuntime.mark(function e() {
						var t, n, r, i;
						return regeneratorRuntime.wrap(function(e) {
							for (;;) switch (e.prev = e.next) {
								case 0:
									return e.next = 2, Se();
								case 2:
									t = e.sent, n = "", c(!1), t && t.verificationLink && t.sessionIdentifier ? (Le(j.showModal, {
										origin: p
									}), r = t.verificationLink, p === te ? (i = S.urlService.getQueryParam("wid"), n = S.urlService.getUrlWithQueries(xe, {
										wid: i,
										action: "IdVerifyPending"
									})) : p === ne && (i = window.location.href, n = "".concat(i, "&action=IdVerifyPending")), m({
										type: T,
										pageName: W,
										verificationLink: r,
										useQRCode: _t,
										redirectUrl: n,
										dispatch: m
									}), function(c, s) {
										var u = Number(new Date) + 18e5,
											d = re;

										function f(e, t) {
											return n.apply(this, arguments)
										}

										function n() {
											return (n = Dt(regeneratorRuntime.mark(function e(t, n) {
												var r, i, a, o, l;
												return regeneratorRuntime.wrap(function(e) {
													for (;;) switch (e.prev = e.next) {
														case 0:
															return e.next = 2, Ne(c).catch(function() {
																return {
																	sessionStatus: d
																}
															});
														case 2:
															if (r = e.sent, i = r.sessionStatus, o = a = null, !i || i === d) {
																e.next = 41;
																break
															}
															d = i, l = ve, e.t0 = i, e.next = e.t0 === le || e.t0 === ae ? 12 : e.t0 === oe ? 27 : e.t0 === ue ? 29 : e.t0 === ce ? 31 : e.t0 === se ? 34 : e.t0 === ie ? 37 : (e.t0, 39);
															break;
														case 12:
															a = z, e.t1 = r.sessionErrorCode, e.next = e.t1 === de || e.t1 === pe ? 16 : e.t1 === me || e.t1 === fe ? 18 : e.t1 === ge ? 20 : e.t1 === he ? 22 : 24;
															break;
														case 16:
															return o = "Label.FailedVerificationInvalidDocument", e.abrupt("break", 26);
														case 18:
															return o = "Label.FailedVerificationLowQuality", e.abrupt("break", 26);
														case 20:
															return o = "Label.FailedVerificationUnsupportedDocument", e.abrupt("break", 26);
														case 22:
															return o = "Label.FailedVerificationMaxAccountsLinked", e.abrupt("break", 26);
														case 24:
															return o = "Label.FailedVerification", e.abrupt("break", 26);
														case 26:
															return e.abrupt("break", 40);
														case 27:
															return a = K, e.abrupt("break", 40);
														case 29:
															return a = _, e.abrupt("break", 40);
														case 31:
															return Le(j.verificationInProgress, {
																origin: p
															}), l = ye, e.abrupt("break", 40);
														case 34:
															return Le(j.verificationPending, {
																origin: p
															}), l = be, e.abrupt("break", 40);
														case 37:
															return l = Ee, e.abrupt("break", 40);
														case 39:
															return e.abrupt("break", 40);
														case 40:
															d !== re && m({
																type: T,
																pageName: Q,
																origin: p,
																verificationLink: s,
																useQRCode: _t,
																checklistStep: l,
																dispatch: m
															});
														case 41:
															g.current !== c ? t(!1) : a ? (m({
																type: T,
																pageName: a,
																textKey: o,
																isSeventeenPlus: r.isSeventeenPlus,
																dispatch: m,
																close: function() {
																	h()
																}
															}), t(d)) : Number(new Date) < u ? setTimeout(f, 15e3, t, n) : (m({
																type: T,
																pageName: z,
																textKey: "Label.SessionTimeout",
																dispatch: m,
																close: function() {
																	h()
																}
															}), t(!1));
														case 42:
														case "end":
															return e.stop()
													}
												}, e)
											}))).apply(this, arguments)
										}
										g.current = c, new Promise(f)
									}(t.sessionIdentifier, t.verificationLink)) : 0 < (null == t ? void 0 : t.daysUntilNextVerification) ? m({
										type: T,
										pageName: J,
										daysUntilNextVerification: t.daysUntilNextVerification,
										dispatch: m,
										close: function() {
											h()
										}
									}) : m({
										type: T,
										pageName: Y,
										dispatch: m,
										close: function() {
											h()
										}
									}), d(!0);
								case 7:
								case "end":
									return e.stop()
							}
						}, e)
					}));
					return function() {
						return e.apply(this, arguments)
					}
				}();

				function b() {
					var e, t;
					r.pageName === q ? (t = r.userEmailInput, /\S+@\S+\.\S+/.test(t) ? (Le(j.addEmailConfirm, {
						origin: p
					}), m({
						type: U,
						isEmailUpdating: !0
					}), e = {
						emailAddress: r.userEmailInput
					}, t = C(), S.httpService.post(t, e).then(function() {
						return !0
					}, function(e) {
						return e.data.errors && e.data.errors[0].code
					}).then(function(e) {
						e === Ue.InvalidEmailCode ? (m({
							type: V,
							errorMsg: Kt
						}), m({
							type: U,
							isEmailUpdating: !1
						})) : (e = C(), S.httpService.get(e).then(function(e) {
							e = e.data;
							return null == e ? void 0 : e.emailAddress
						}, function() {
							return !1
						}).then(function(e) {
							e ? (m({
								type: N,
								isEmailVerified: !1,
								userEmail: e
							}), xt(), m({
								type: I
							}), m({
								type: U,
								isEmailUpdating: !1
							}), c(!0)) : m({
								type: V,
								errorMsg: zt
							})
						}))
					}), m({
						type: L
					})) : m({
						type: V,
						errorMsg: Kt
					})) : h()
				}

				function E() {
					var e;
					e = C(), S.httpService.get(e).then(function(e) {
						return e.data
					}, function() {
						return !1
					}).then(function(e) {
						e && (m({
							type: P,
							origin: p,
							skipCallback: !1
						}), m({
							type: N,
							isEmailVerified: e.isEmailVerified,
							userEmail: e.emailAddress
						}), e.emailAddress ? c(!0) : (Le(j.showAddEmailModal, {
							origin: p
						}), m({
							type: T,
							pageName: q,
							dispatch: m
						}), m({
							type: L
						}), d(!0)))
					}, function() {
						m({
							type: T,
							pageName: Y,
							dispatch: m,
							close: function() {
								h()
							}
						}), m({
							type: L
						}), d(!0)
					})
				}(0, w.useEffect)(function() {
					l && y()
				}, [l]), (0, w.useEffect)(function() {
					m({
						type: P,
						origin: p,
						skipCallback: !1
					}), window.addEventListener(we, function(e) {
						m({
							type: M,
							callback: e.detail.successCallback
						}), ke().then(function(e) {
							null != e && e.isVerified ? (d(!0), v(e)) : p === ee ? (d(!0), m({
								type: T,
								pageName: D,
								dispatch: m,
								continue: function() {
									E()
								}
							})) : E()
						})
					}, !1), window.addEventListener(Ae, function(e) {
						var t = e.detail,
							n = t.requireExplicitVoiceConsent,
							t = t.useVoiceUpsellV2Design;
						d(!0), m({
							type: T,
							pageName: G,
							requireExplicitVoiceConsent: n,
							useVoiceUpsellV2Design: t,
							dispatch: m,
							close: function() {
								e.detail.closeCallback(!0), h()
							}
						})
					}), window.addEventListener(Ce, function(e) {
						var t = e.detail,
							n = t.requireExplicitCameraConsent,
							t = t.useCameraU13Design;
						d(!0), m({
							type: T,
							pageName: X,
							requireExplicitCameraConsent: n,
							useCameraU13Design: t,
							dispatch: m,
							close: function() {
								e.detail.closeCallback(!0), h()
							}
						})
					}), p === $ && (m({
						type: B
					}), ke().then(function(e) {
						null != e && e.isVerified ? (d(!0), v(e)) : E()
					}, function() {
						m({
							type: T,
							pageName: Y,
							dispatch: m,
							close: function() {
								h()
							}
						}), d(!0)
					}))
				}, []);
				var A = null,
					e = "lg",
					n = "static",
					o = f;
				return a && (A = i === W ? x().createElement(Et, Ot({}, a, {
					onHide: o,
					translate: t,
					entry: p
				})) : i === Q ? x().createElement(Ve, Ot({}, a, {
					onHide: o,
					translate: t
				})) : i === G ? (s = Bt({
					communityStandardsUrl: a.communityStandardsUrl,
					voiceFAQUrl: a.voiceFAQUrl,
					requireExplicitVoiceConsent: a.requireExplicitVoiceConsent,
					useVoiceUpsellV2Design: a.useVoiceUpsellV2Design
				}, a.useVoiceUpsellV2Design ? a.voiceUpsellV2Keys : a.voiceUpsellV1Keys), o = function() {
					qe(j.closeEnableVoiceChatModal), f()
				}, a.useVoiceUpsellV2Design && (e = "md", n = !0), x().createElement(gt, Ot({}, s, {
					translate: t
				}))) : i === X ? (e = "md", x().createElement(It, Ot({}, a, {
					onHide: o,
					translate: t
				}))) : x().createElement(St, Ot({}, a, {
					onHide: o,
					translate: t
				}))), x().createElement("div", null, x().createElement(k.Modal, {
					show: u,
					onHide: o,
					backdrop: n,
					className: "".concat(Ht ? "email-upsell-android-modal" : "", " email-upsell-modal"),
					size: i === _ ? "sm" : e,
					"aria-labelledby": "contained-modal-title-vcenter",
					scrollable: "true",
					centered: "true"
				}, i === q ? x().createElement(at, {
					onHide: function() {
						f()
					},
					onPrimaryAction: b,
					onSecondaryAction: function() {
						r.pageName === q && (r.skipCallback && r.skipCallback(), m({
							type: I
						}), d(!1))
					},
					onInputFocus: function() {
						Le(j.useAddEmailField, {
							origin: p
						})
					},
					onInputChange: function(e) {
						m({
							type: R,
							pageName: q,
							value: e
						})
					},
					onKeyDown: function(e) {
						return e === Ue.Enter && b()
					}
				}) : A))
			}
			Qt.propTypes = {
				translate: n().func.isRequired,
				entry: n().string.isRequired,
				vendor: n().string.isRequired
			};
			var Yt = Qt;

			function Jt(e) {
				var t = e.translate,
					e = e.entry;
				return x().createElement(nt, null, x().createElement(Yt, {
					translate: t,
					entry: e
				}))
			}
			Jt.defaultProps = {
				entry: ee
			}, Jt.propTypes = {
				translate: n().func.isRequired,
				entry: n().string
			};
			var Wt = (0, a.withTranslations)(Jt, {
				common: ["CommonUI.Controls"],
				feature: "Verification.Identity"
			});

			function Gt(e, t, n, r, i, a, o) {
				try {
					var l = e[a](o),
						c = l.value
				} catch (e) {
					return void n(e)
				}
				l.done ? t(c) : Promise.resolve(c).then(r, i)
			}

			function Xt(l) {
				return function() {
					var e = this,
						o = arguments;
					return new Promise(function(t, n) {
						var r = l.apply(e, o);

						function i(e) {
							Gt(r, t, n, i, a, "next", e)
						}

						function a(e) {
							Gt(r, t, n, i, a, "throw", e)
						}
						i(void 0)
					})
				}
			}

			function Zt() {
				return $t.apply(this, arguments)
			}

			function $t() {
				return ($t = Xt(regeneratorRuntime.mark(function e() {
					var t, n;
					return regeneratorRuntime.wrap(function(e) {
						for (;;) switch (e.prev = e.next) {
							case 0:
								(t = document.getElementById(i)) ? (n = t.getAttribute("entry"), (0, r.render)(x().createElement(Wt, {
									entry: n || void 0
								}), t)) : window.requestAnimationFrame(Zt);
							case 2:
							case "end":
								return e.stop()
						}
					}, e)
				}))).apply(this, arguments)
			}
			e().IdentityVerificationService = {
				getPersonaVerificationStatus: Ne,
				getVerifiedAge: ke,
				startVerificationFlow: function() {
					return new Promise(function(n) {
						var e = new CustomEvent(we, {
							detail: {
								successCallback: function(e, t) {
									n([e, t])
								}
							}
						});
						window.dispatchEvent(e)
					})
				},
				sendIdVerificationEvent: Le,
				showVoiceOptInOverlay: function(n, r) {
					return new Promise(function(t) {
						var e = new CustomEvent(Ae, {
							detail: {
								closeCallback: function(e) {
									t(e)
								},
								requireExplicitVoiceConsent: n,
								useVoiceUpsellV2Design: r
							}
						});
						window.dispatchEvent(e)
					})
				},
				showAvatarVideoOptInOverlay: function(n, r) {
					return new Promise(function(t) {
						var e = new CustomEvent(Ce, {
							detail: {
								closeCallback: function(e) {
									t(e)
								},
								requireExplicitCameraConsent: n,
								useCameraU13Design: r
							}
						});
						window.dispatchEvent(e)
					})
				}
			}, (0, S.ready)(Xt(regeneratorRuntime.mark(function e() {
				return regeneratorRuntime.wrap(function(e) {
					for (;;) switch (e.prev = e.next) {
						case 0:
							if (i) return e.next = 3, Zt();
							e.next = 3;
							break;
						case 3:
						case "end":
							return e.stop()
					}
				}, e)
			})))
		}()
}();
//# sourceMappingURL=https://js.rbxcdn.com/2decce0409c89d6f7e79f7f399fe6883-idVerification.bundle.min.js.map

/* Bundle detector */
window.Roblox && window.Roblox.BundleDetector && window.Roblox.BundleDetector.bundleDetected("IdVerification");