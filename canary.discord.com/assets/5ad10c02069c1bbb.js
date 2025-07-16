"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
	["14006"], {
		724083: function(t, e, n) {
			var r = n(840475),
				i = n(569743),
				s = r.aTypedArrayConstructor;
			(0, r.exportTypedArrayStaticMethod)("of", function() {
				for (var t = 0, e = arguments.length, n = new(s(this))(e); e > t;) n[t] = arguments[t++];
				return n
			}, i)
		},
		134994: function(t, e, n) {
			function r(t) {
				if (!Number.isSafeInteger(t) || t < 0) throw Error(`positive integer expected, not ${t}`)
			}

			function i(t, ...e) {
				if (!(t instanceof Uint8Array || null != t && "object" == typeof t && "Uint8Array" === t.constructor.name)) throw Error("Uint8Array expected");
				if (e.length > 0 && !e.includes(t.length)) throw Error(`Uint8Array expected of length ${e}, not of length=${t.length}`)
			}

			function s(t) {
				if ("function" != typeof t || "function" != typeof t.create) throw Error("Hash should be wrapped by utils.wrapConstructor");
				r(t.outputLen), r(t.blockLen)
			}

			function o(t, e = !0) {
				if (t.destroyed) throw Error("Hash instance has been destroyed");
				if (e && t.finished) throw Error("Hash#digest() has already been called")
			}

			function h(t, e) {
				i(t);
				let n = e.outputLen;
				if (t.length < n) throw Error(`digestInto() expects output buffer of length at least ${n}`)
			}
			n.d(e, {
				Gg: () => o,
				J8: () => h,
				Rx: () => r,
				aI: () => i,
				vp: () => s
			})
		},
		232869: function(t, e, n) {
			n.d(e, {
				VR: () => h,
				bc: () => s,
				l3: () => o
			});
			var r = n(134994),
				i = n(492733);
			let s = (t, e, n) => t & e ^ ~t & n,
				o = (t, e, n) => t & e ^ t & n ^ e & n;
			class h extends i.kb {
				constructor(t, e, n, r) {
					super(), this.blockLen = t, this.outputLen = e, this.padOffset = n, this.isLE = r, this.finished = !1, this.length = 0, this.pos = 0, this.destroyed = !1, this.buffer = new Uint8Array(t), this.view = (0, i.GL)(this.buffer)
				}
				update(t) {
					(0, r.Gg)(this);
					let {
						view: e,
						buffer: n,
						blockLen: s
					} = this, o = (t = (0, i.O0)(t)).length;
					for (let r = 0; r < o;) {
						let h = Math.min(s - this.pos, o - r);
						if (h === s) {
							let e = (0, i.GL)(t);
							for (; s <= o - r; r += s) this.process(e, r);
							continue
						}
						n.set(t.subarray(r, r + h), this.pos), this.pos += h, r += h, this.pos === s && (this.process(e, 0), this.pos = 0)
					}
					return this.length += t.length, this.roundClean(), this
				}
				digestInto(t) {
					(0, r.Gg)(this), (0, r.J8)(t, this), this.finished = !0;
					let {
						buffer: e,
						view: n,
						blockLen: s,
						isLE: o
					} = this, {
						pos: h
					} = this;
					e[h++] = 128, this.buffer.subarray(h).fill(0), this.padOffset > s - h && (this.process(n, 0), h = 0);
					for (let t = h; t < s; t++) e[t] = 0;
					! function(t, e, n, r) {
						if ("function" == typeof t.setBigUint64) return t.setBigUint64(e, n, r);
						let i = BigInt(32),
							s = BigInt(0xffffffff),
							o = Number(n >> i & s),
							h = Number(n & s),
							a = 4 * !!r,
							f = 4 * !r;
						t.setUint32(e + a, o, r), t.setUint32(e + f, h, r)
					}(n, s - 8, BigInt(8 * this.length), o), this.process(n, 0);
					let a = (0, i.GL)(t),
						f = this.outputLen;
					if (f % 4) throw Error("_sha2: outputLen should be aligned to 32bit");
					let c = f / 4,
						l = this.get();
					if (c > l.length) throw Error("_sha2: outputLen bigger than state");
					for (let t = 0; t < c; t++) a.setUint32(4 * t, l[t], o)
				}
				digest() {
					let {
						buffer: t,
						outputLen: e
					} = this;
					this.digestInto(t);
					let n = t.slice(0, e);
					return this.destroy(), n
				}
				_cloneInto(t) {
					t || (t = new this.constructor), t.set(...this.get());
					let {
						blockLen: e,
						buffer: n,
						length: r,
						finished: i,
						destroyed: s,
						pos: o
					} = this;
					return t.length = r, t.pos = o, t.finished = i, t.destroyed = s, r % e && t.buffer.set(n), t
				}
			}
		},
		8170: function(t, e, n) {
			n.d(e, {
				b: () => o
			});
			var r = n(134994),
				i = n(492733);
			class s extends i.kb {
				constructor(t, e) {
					super(), this.finished = !1, this.destroyed = !1, (0, r.vp)(t);
					let n = (0, i.O0)(e);
					if (this.iHash = t.create(), "function" != typeof this.iHash.update) throw Error("Expected instance of class which extends utils.Hash");
					this.blockLen = this.iHash.blockLen, this.outputLen = this.iHash.outputLen;
					let s = this.blockLen,
						o = new Uint8Array(s);
					o.set(n.length > s ? t.create().update(n).digest() : n);
					for (let t = 0; t < o.length; t++) o[t] ^= 54;
					this.iHash.update(o), this.oHash = t.create();
					for (let t = 0; t < o.length; t++) o[t] ^= 106;
					this.oHash.update(o), o.fill(0)
				}
				update(t) {
					return (0, r.Gg)(this), this.iHash.update(t), this
				}
				digestInto(t) {
					(0, r.Gg)(this), (0, r.aI)(t, this.outputLen), this.finished = !0, this.iHash.digestInto(t), this.oHash.update(t), this.oHash.digestInto(t), this.destroy()
				}
				digest() {
					let t = new Uint8Array(this.oHash.outputLen);
					return this.digestInto(t), t
				}
				_cloneInto(t) {
					t || (t = Object.create(Object.getPrototypeOf(this), {}));
					let {
						oHash: e,
						iHash: n,
						finished: r,
						destroyed: i,
						blockLen: s,
						outputLen: o
					} = this;
					return t.finished = r, t.destroyed = i, t.blockLen = s, t.outputLen = o, t.oHash = e._cloneInto(t.oHash), t.iHash = n._cloneInto(t.iHash), t
				}
				destroy() {
					this.destroyed = !0, this.oHash.destroy(), this.iHash.destroy()
				}
			}
			let o = (t, e, n) => new s(t, e).update(n).digest();
			o.create = (t, e) => new s(t, e)
		},
		741605: function(t, e, n) {
			n.d(e, {
				n: () => o
			});
			var r = n(134994),
				i = n(8170),
				s = n(492733);

			function o(t, e, n, o) {
				var h;
				let a, {
						c: f,
						dkLen: c,
						DK: l,
						PRF: u,
						PRFSalt: d
					} = function(t, e, n, o) {
						(0, r.vp)(t);
						let {
							c: h,
							dkLen: a,
							asyncTick: f
						} = (0, s.U5)({
							dkLen: 32,
							asyncTick: 10
						}, o);
						if ((0, r.Rx)(h), (0, r.Rx)(a), (0, r.Rx)(f), h < 1) throw Error("PBKDF2: iterations (c) should be >= 1");
						let c = (0, s.O0)(e),
							l = (0, s.O0)(n),
							u = new Uint8Array(a),
							d = i.b.create(t, c),
							x = d._cloneInto().update(l);
						return {
							c: h,
							dkLen: a,
							asyncTick: f,
							DK: u,
							PRF: d,
							PRFSalt: x
						}
					}(t, e, n, o),
					x = new Uint8Array(4),
					p = (0, s.GL)(x),
					b = new Uint8Array(u.outputLen);
				for (let t = 1, e = 0; e < c; t++, e += u.outputLen) {
					let n = l.subarray(e, e + u.outputLen);
					p.setInt32(0, t, !1), (a = d._cloneInto(a)).update(x).digestInto(b), n.set(b.subarray(0, n.length));
					for (let t = 1; t < f; t++) {
						u._cloneInto(a).update(b).digestInto(b);
						for (let t = 0; t < n.length; t++) n[t] ^= b[t]
					}
				}
				return h = a, u.destroy(), d.destroy(), h && h.destroy(), b.fill(0), l
			}
		},
		972164: function(t, e, n) {
			n.d(e, {
				E: () => f
			});
			var r = n(134994),
				i = n(832454),
				s = n(741605),
				o = n(492733);

			function h(t, e, n, r, i, s) {
				let h = t[e++] ^ n[r++],
					a = t[e++] ^ n[r++],
					f = t[e++] ^ n[r++],
					c = t[e++] ^ n[r++],
					l = t[e++] ^ n[r++],
					u = t[e++] ^ n[r++],
					d = t[e++] ^ n[r++],
					x = t[e++] ^ n[r++],
					p = t[e++] ^ n[r++],
					b = t[e++] ^ n[r++],
					g = t[e++] ^ n[r++],
					y = t[e++] ^ n[r++],
					w = t[e++] ^ n[r++],
					G = t[e++] ^ n[r++],
					L = t[e++] ^ n[r++],
					X = t[e++] ^ n[r++],
					U = h,
					A = a,
					E = f,
					H = c,
					I = l,
					k = u,
					v = d,
					m = x,
					O = p,
					R = b,
					_ = g,
					B = y,
					C = w,
					J = G,
					j = L,
					D = X;
				for (let t = 0; t < 8; t += 2) I ^= (0, o.XG)(U + C | 0, 7), O ^= (0, o.XG)(I + U | 0, 9), C ^= (0, o.XG)(O + I | 0, 13), U ^= (0, o.XG)(C + O | 0, 18), R ^= (0, o.XG)(k + A | 0, 7), J ^= (0, o.XG)(R + k | 0, 9), A ^= (0, o.XG)(J + R | 0, 13), k ^= (0, o.XG)(A + J | 0, 18), j ^= (0, o.XG)(_ + v | 0, 7), E ^= (0, o.XG)(j + _ | 0, 9), v ^= (0, o.XG)(E + j | 0, 13), _ ^= (0, o.XG)(v + E | 0, 18), H ^= (0, o.XG)(D + B | 0, 7), m ^= (0, o.XG)(H + D | 0, 9), B ^= (0, o.XG)(m + H | 0, 13), D ^= (0, o.XG)(B + m | 0, 18), A ^= (0, o.XG)(U + H | 0, 7), E ^= (0, o.XG)(A + U | 0, 9), H ^= (0, o.XG)(E + A | 0, 13), U ^= (0, o.XG)(H + E | 0, 18), v ^= (0, o.XG)(k + I | 0, 7), m ^= (0, o.XG)(v + k | 0, 9), I ^= (0, o.XG)(m + v | 0, 13), k ^= (0, o.XG)(I + m | 0, 18), B ^= (0, o.XG)(_ + R | 0, 7), O ^= (0, o.XG)(B + _ | 0, 9), R ^= (0, o.XG)(O + B | 0, 13), _ ^= (0, o.XG)(R + O | 0, 18), C ^= (0, o.XG)(D + j | 0, 7), J ^= (0, o.XG)(C + D | 0, 9), j ^= (0, o.XG)(J + C | 0, 13), D ^= (0, o.XG)(j + J | 0, 18);
				i[s++] = h + U | 0, i[s++] = a + A | 0, i[s++] = f + E | 0, i[s++] = c + H | 0, i[s++] = l + I | 0, i[s++] = u + k | 0, i[s++] = d + v | 0, i[s++] = x + m | 0, i[s++] = p + O | 0, i[s++] = b + R | 0, i[s++] = g + _ | 0, i[s++] = y + B | 0, i[s++] = w + C | 0, i[s++] = G + J | 0, i[s++] = L + j | 0, i[s++] = X + D | 0
			}

			function a(t, e, n, r, i) {
				let s = r + 0,
					o = r + 16 * i;
				for (let r = 0; r < 16; r++) n[o + r] = t[e + (2 * i - 1) * 16 + r];
				for (let r = 0; r < i; r++, s += 16, e += 16) h(n, o, t, e, n, s), r > 0 && (o += 16), h(n, s, t, e += 16, n, o)
			}
			async function f(t, e, n) {
				let {
					N: h,
					r: f,
					p: c,
					dkLen: l,
					blockSize32: u,
					V: d,
					B32: x,
					B: p,
					tmp: b,
					blockMixCb: g,
					asyncTick: y
				} = function(t, e, n) {
					let {
						N: h,
						r: a,
						p: f,
						dkLen: c,
						asyncTick: l,
						maxmem: u,
						onProgress: d
					} = (0, o.U5)({
						dkLen: 32,
						asyncTick: 10,
						maxmem: 0x40000400
					}, n);
					if ((0, r.Rx)(h), (0, r.Rx)(a), (0, r.Rx)(f), (0, r.Rx)(c), (0, r.Rx)(l), (0, r.Rx)(u), void 0 !== d && "function" != typeof d) throw Error("progressCb should be function");
					let x = 128 * a,
						p = x / 4;
					if (h <= 1 || (h & h - 1) != 0 || h > 0x100000000) throw Error("Scrypt: N must be larger than 1, a power of 2, and less than 2^32");
					if (f < 0 || f > (0x100000000 - 1) * 32 / x) throw Error("Scrypt: p must be a positive integer less than or equal to ((2^32 - 1) * 32) / (128 * r)");
					if (c < 0 || c > (0x100000000 - 1) * 32) throw Error("Scrypt: dkLen should be positive integer less than or equal to (2^32 - 1) * 32");
					let b = x * (h + f);
					if (b > u) throw Error(`Scrypt: parameters too large, ${b} (128 * r * (N + p)) > ${u} (maxmem)`);
					let g = (0, s.n)(i.JQ, t, e, {
							c: 1,
							dkLen: x * f
						}),
						y = (0, o.Jq)(g),
						w = (0, o.Jq)(new Uint8Array(x * h)),
						G = (0, o.Jq)(new Uint8Array(x)),
						L = () => {};
					if (d) {
						let t = 2 * h * f,
							e = Math.max(Math.floor(t / 1e4), 1),
							n = 0;
						L = () => {
							n++, d && (!(n % e) || n === t) && d(n / t)
						}
					}
					return {
						N: h,
						r: a,
						p: f,
						dkLen: c,
						blockSize32: p,
						V: w,
						B32: y,
						B: g,
						tmp: G,
						blockMixCb: L,
						asyncTick: l
					}
				}(t, e, n);
				o.iA || (0, o.l1)(x);
				for (let t = 0; t < c; t++) {
					let e = u * t;
					for (let t = 0; t < u; t++) d[t] = x[e + t];
					let n = 0;
					await (0, o.oY)(h - 1, y, () => {
						a(d, n, d, n += u, f), g()
					}), a(d, (h - 1) * u, x, e, f), g(), await (0, o.oY)(h, y, () => {
						let t = x[e + u - 16] % h;
						for (let n = 0; n < u; n++) b[n] = x[e + n] ^ d[t * u + n];
						a(b, 0, x, e, f), g()
					})
				}
				o.iA || (0, o.l1)(x);
				let w = (0, s.n)(i.JQ, t, p, {
					c: 1,
					dkLen: l
				});
				return p.fill(0), d.fill(0), b.fill(0), w
			}
		},
		832454: function(t, e, n) {
			n.d(e, {
				JQ: () => f
			});
			var r = n(232869),
				i = n(492733);
			let s = new Uint32Array([0x428a2f98, 0x71374491, 0xb5c0fbcf, 0xe9b5dba5, 0x3956c25b, 0x59f111f1, 0x923f82a4, 0xab1c5ed5, 0xd807aa98, 0x12835b01, 0x243185be, 0x550c7dc3, 0x72be5d74, 0x80deb1fe, 0x9bdc06a7, 0xc19bf174, 0xe49b69c1, 0xefbe4786, 0xfc19dc6, 0x240ca1cc, 0x2de92c6f, 0x4a7484aa, 0x5cb0a9dc, 0x76f988da, 0x983e5152, 0xa831c66d, 0xb00327c8, 0xbf597fc7, 0xc6e00bf3, 0xd5a79147, 0x6ca6351, 0x14292967, 0x27b70a85, 0x2e1b2138, 0x4d2c6dfc, 0x53380d13, 0x650a7354, 0x766a0abb, 0x81c2c92e, 0x92722c85, 0xa2bfe8a1, 0xa81a664b, 0xc24b8b70, 0xc76c51a3, 0xd192e819, 0xd6990624, 0xf40e3585, 0x106aa070, 0x19a4c116, 0x1e376c08, 0x2748774c, 0x34b0bcb5, 0x391c0cb3, 0x4ed8aa4a, 0x5b9cca4f, 0x682e6ff3, 0x748f82ee, 0x78a5636f, 0x84c87814, 0x8cc70208, 0x90befffa, 0xa4506ceb, 0xbef9a3f7, 0xc67178f2]),
				o = new Uint32Array([0x6a09e667, 0xbb67ae85, 0x3c6ef372, 0xa54ff53a, 0x510e527f, 0x9b05688c, 0x1f83d9ab, 0x5be0cd19]),
				h = new Uint32Array(64);
			class a extends r.VR {
				constructor() {
					super(64, 32, 8, !1), this.A = 0 | o[0], this.B = 0 | o[1], this.C = 0 | o[2], this.D = 0 | o[3], this.E = 0 | o[4], this.F = 0 | o[5], this.G = 0 | o[6], this.H = 0 | o[7]
				}
				get() {
					let {
						A: t,
						B: e,
						C: n,
						D: r,
						E: i,
						F: s,
						G: o,
						H: h
					} = this;
					return [t, e, n, r, i, s, o, h]
				}
				set(t, e, n, r, i, s, o, h) {
					this.A = 0 | t, this.B = 0 | e, this.C = 0 | n, this.D = 0 | r, this.E = 0 | i, this.F = 0 | s, this.G = 0 | o, this.H = 0 | h
				}
				process(t, e) {
					for (let n = 0; n < 16; n++, e += 4) h[n] = t.getUint32(e, !1);
					for (let t = 16; t < 64; t++) {
						let e = h[t - 15],
							n = h[t - 2],
							r = (0, i.np)(e, 7) ^ (0, i.np)(e, 18) ^ e >>> 3,
							s = (0, i.np)(n, 17) ^ (0, i.np)(n, 19) ^ n >>> 10;
						h[t] = s + h[t - 7] + r + h[t - 16] | 0
					}
					let {
						A: n,
						B: o,
						C: a,
						D: f,
						E: c,
						F: l,
						G: u,
						H: d
					} = this;
					for (let t = 0; t < 64; t++) {
						let e = d + ((0, i.np)(c, 6) ^ (0, i.np)(c, 11) ^ (0, i.np)(c, 25)) + (0, r.bc)(c, l, u) + s[t] + h[t] | 0,
							x = ((0, i.np)(n, 2) ^ (0, i.np)(n, 13) ^ (0, i.np)(n, 22)) + (0, r.l3)(n, o, a) | 0;
						d = u, u = l, l = c, c = f + e | 0, f = a, a = o, o = n, n = e + x | 0
					}
					n = n + this.A | 0, o = o + this.B | 0, a = a + this.C | 0, f = f + this.D | 0, c = c + this.E | 0, l = l + this.F | 0, u = u + this.G | 0, d = d + this.H | 0, this.set(n, o, a, f, c, l, u, d)
				}
				roundClean() {
					h.fill(0)
				}
				destroy() {
					this.set(0, 0, 0, 0, 0, 0, 0, 0), this.buffer.fill(0)
				}
			}
			let f = (0, i.hE)(() => new a)
		},
		492733: function(t, e, n) {
			n.d(e, {
				GL: () => s,
				Jq: () => i,
				O0: () => d,
				U5: () => b,
				XG: () => h,
				hE: () => g,
				iA: () => a,
				kb: () => x,
				l1: () => c,
				np: () => o,
				oY: () => u
			});
			var r = n(134994);
			let i = t => new Uint32Array(t.buffer, t.byteOffset, Math.floor(t.byteLength / 4)),
				s = t => new DataView(t.buffer, t.byteOffset, t.byteLength),
				o = (t, e) => t << 32 - e | t >>> e,
				h = (t, e) => t << e | t >>> 32 - e >>> 0,
				a = 68 === new Uint8Array(new Uint32Array([0x11223344]).buffer)[0],
				f = t => t << 24 & 0xff000000 | t << 8 & 0xff0000 | t >>> 8 & 65280 | t >>> 24 & 255;

			function c(t) {
				for (let e = 0; e < t.length; e++) t[e] = f(t[e])
			}
			let l = async () => {};
			async function u(t, e, n) {
				let r = Date.now();
				for (let i = 0; i < t; i++) {
					n(i);
					let t = Date.now() - r;
					t >= 0 && t < e || (await l(), r += t)
				}
			}

			function d(t) {
				return "string" == typeof t && (t = function(t) {
					if ("string" != typeof t) throw Error(`utf8ToBytes expected string, got ${typeof t}`);
					return new Uint8Array(new TextEncoder().encode(t))
				}(t)), (0, r.aI)(t), t
			}
			class x {
				clone() {
					return this._cloneInto()
				}
			}
			let p = {}.toString;

			function b(t, e) {
				if (void 0 !== e && "[object Object]" !== p.call(e)) throw Error("Options should be object or undefined");
				return Object.assign(t, e)
			}

			function g(t) {
				let e = e => t().update(d(e)).digest(),
					n = t();
				return e.outputLen = n.outputLen, e.blockLen = n.blockLen, e.create = () => t(), e
			}
		}
	}
]);
//# sourceMappingURL=5ad10c02069c1bbb.js.map