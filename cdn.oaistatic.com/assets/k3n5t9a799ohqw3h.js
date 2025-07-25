const __vite__mapDeps = (i, m = __vite__mapDeps, d = (m.f || (m.f = ["assets/k0jjtaqb0r5bd46k.js", "assets/fyeo2h7okrqcf3nz.js", "assets/ok2u6z6uadvu27de.js", "assets/gmdf9rdonf8komut.js", "assets/f7j18j5u52u1pnnk.js", "assets/egb2c0f6p1ew61vt.js", "assets/root-dql6y2cb.css", "assets/conversation-small-k592qa8k.css", "assets/mpicq22e5t3uz3jz.js", "assets/ekh5ue0hmvvp6lmd.js", "assets/jy1u8exw8iz2slve.js", "assets/f7hgik6cjoxksakw.js", "assets/f76gy0b8ieo4s693.js", "assets/emwinm0zlo0fdecc.js", "assets/jbtxf3z2gh3cd3mk.js", "assets/bef01eu9xnxxk13x.js", "assets/ixsisjuxwij5x7d3.js", "assets/comments-plugin-tah3dlup.css", "assets/np575ojwia1bc8yj.js", "assets/codemirror-nauedrd6.css", "assets/ddkpacja177ztd42.js", "assets/nnsud1kcqhay4649.js", "assets/b35luffh9z4llgqb.js", "assets/fcaorwsjebq018qz.js", "assets/okq68de4a9733epz.js", "assets/bomum2mkkc55wkmd.js", "assets/m29otmaum97sqv1d.js", "assets/b19uthlmolos3q2g.js", "assets/fzc0gbu80b2i8ien.js", "assets/cmvi4veydrn5nccf.js", "assets/crozh0j4v472kedz.js", "assets/fj6f0e38e170120r.js", "assets/pc2givv05uuq8g6l.js", "assets/prosemirror-eh65ggsy.css", "assets/fzwyckccbrm2oiee.js", "assets/oykx1ts051t0pjop.js", "assets/falvn1u1m9kfl56g.js", "assets/lqc3mxovgoy4h7eq.js"]))) => i.map(i => d[i]);
import {
	j as P,
	n as tt,
	A as nt,
	r as le,
	e as Ue,
	f as ot,
	g as rt,
	a as at
} from "./fyeo2h7okrqcf3nz.js";
import {
	Z as st,
	C as Ye
} from "./jy1u8exw8iz2slve.js";
import {
	f as ae,
	F as Ze,
	dT as it,
	cZ as Je,
	c_ as re,
	gL as We,
	q as ut,
	ay as Qe,
	iL as ct,
	dV as lt,
	Q as ft,
	D as dt,
	R as pt,
	P as Re
} from "./egb2c0f6p1ew61vt.js";
import {
	cA as ht,
	eT as mt,
	qL as yt,
	qM as _t,
	iC as bt,
	x2 as gt,
	qN as vt,
	ua as Tt,
	dj as A,
	df as Et,
	di as Ct,
	dg as xt,
	v$ as Ot,
	hm as Dt,
	qb as At,
	j7 as Se,
	j8 as Rt,
	fv as St,
	x3 as wt,
	u8 as ge
} from "./f7j18j5u52u1pnnk.js";
import {
	B as It
} from "./bomum2mkkc55wkmd.js";
import {
	b as Mt,
	h as Lt
} from "./f7hgik6cjoxksakw.js";
import {
	u as zt
} from "./np575ojwia1bc8yj.js";
import {
	r as Pt
} from "./m29otmaum97sqv1d.js";

function Nt({
	className: e,
	zIndexKey: t,
	onClick: n
}) {
	return P.jsx(tt.div, {
		initial: {
			opacity: 0
		},
		animate: {
			opacity: 1
		},
		exit: {
			opacity: 0
		},
		className: ae("absolute inset-0", e, st[t]),
		onClick: n
	})
}

function Ft({
	zIndexKey: e,
	onClick: t
}) {
	return P.jsx(Nt, {
		zIndexKey: e,
		onClick: t,
		className: "bg-gray-50/50 dark:bg-black/50"
	})
}
var oe = {},
	ne = {},
	se = {},
	we;

function Bt() {
	if (we) return se;
	we = 1, Object.defineProperty(se, "__esModule", {
		value: !0
	}), se.cast = t, se.get = n, se.set = o;
	const e = 2 ** 32;

	function t(r) {
		return r < 0 ? r + e : r
	}

	function n(r, a) {
		return r >> a & 255
	}

	function o(r, a, i) {
		return r ^ (r ^ i << a) & 255 << a
	}
	return se
}
var Ie;

function me() {
	return Ie || (Ie = 1, function(e) {
		var t = ne && ne.__createBinding || (Object.create ? function(d, s, c, b) {
				b === void 0 && (b = c);
				var g = Object.getOwnPropertyDescriptor(s, c);
				(!g || ("get" in g ? !s.__esModule : g.writable || g.configurable)) && (g = {
					enumerable: !0,
					get: function() {
						return s[c]
					}
				}), Object.defineProperty(d, b, g)
			} : function(d, s, c, b) {
				b === void 0 && (b = c), d[b] = s[c]
			}),
			n = ne && ne.__setModuleDefault || (Object.create ? function(d, s) {
				Object.defineProperty(d, "default", {
					enumerable: !0,
					value: s
				})
			} : function(d, s) {
				d.default = s
			}),
			o = ne && ne.__importStar || function(d) {
				if (d && d.__esModule) return d;
				var s = {};
				if (d != null)
					for (var c in d) c !== "default" && Object.prototype.hasOwnProperty.call(d, c) && t(s, d, c);
				return n(s, d), s
			};
		Object.defineProperty(e, "__esModule", {
			value: !0
		}), e.OFFSET_A = e.OFFSET_B = e.OFFSET_G = e.OFFSET_R = void 0, e.newColor = f, e.from = p, e.toNumber = C, e.getRed = O, e.getGreen = N, e.getBlue = F, e.getAlpha = x, e.setRed = T, e.setGreen = D, e.setBlue = R, e.setAlpha = M;
		const r = o(Bt()),
			{
				cast: a,
				get: i,
				set: l
			} = r;
		e.OFFSET_R = 24, e.OFFSET_G = 16, e.OFFSET_B = 8, e.OFFSET_A = 0;

		function f(d, s, c, b) {
			return (d << e.OFFSET_R) + (s << e.OFFSET_G) + (c << e.OFFSET_B) + (b << e.OFFSET_A)
		}

		function p(d) {
			return f(i(d, e.OFFSET_R), i(d, e.OFFSET_G), i(d, e.OFFSET_B), i(d, e.OFFSET_A))
		}

		function C(d) {
			return a(d)
		}

		function O(d) {
			return i(d, e.OFFSET_R)
		}

		function N(d) {
			return i(d, e.OFFSET_G)
		}

		function F(d) {
			return i(d, e.OFFSET_B)
		}

		function x(d) {
			return i(d, e.OFFSET_A)
		}

		function T(d, s) {
			return l(d, e.OFFSET_R, s)
		}

		function D(d, s) {
			return l(d, e.OFFSET_G, s)
		}

		function R(d, s) {
			return l(d, e.OFFSET_B, s)
		}

		function M(d, s) {
			return l(d, e.OFFSET_A, s)
		}
	}(ne)), ne
}
var W = {},
	j = {},
	Me;

function jt() {
	if (Me) return j;
	Me = 1, Object.defineProperty(j, "__esModule", {
		value: !0
	}), j.labToXyzd50 = d, j.xyzd50ToLab = s, j.oklabToXyzd65 = c, j.xyzd65ToOklab = b, j.lchToLab = g, j.labToLch = S, j.displayP3ToXyzd50 = Z, j.xyzd50ToDisplayP3 = k, j.proPhotoToXyzd50 = u, j.xyzd50ToProPhoto = E, j.adobeRGBToXyzd50 = w, j.xyzd50ToAdobeRGB = I, j.rec2020ToXyzd50 = X, j.xyzd50ToRec2020 = Q, j.xyzd50ToD65 = U, j.xyzd65ToD50 = ie, j.xyzd65TosRGBLinear = $, j.xyzd50TosRGBLinear = z, j.srgbLinearToXyzd50 = L, j.srgbToXyzd50 = G, j.xyzd50ToSrgb = Y, j.oklchToXyzd50 = te, j.xyzd50ToOklch = K;
	const e = .9642,
		t = 1,
		n = .8251;

	function o(m, h) {
		const _ = [0, 0, 0];
		for (let v = 0; v < 3; ++v) _[v] = m[v][0] * h[0] + m[v][1] * h[1] + m[v][2] * h[2];
		return _
	}
	class r {
		g;
		a;
		b;
		c;
		d;
		e;
		f;
		constructor(h, _, v = 0, y = 0, B = 0, H = 0, q = 0) {
			this.g = h, this.a = _, this.b = v, this.c = y, this.d = B, this.e = H, this.f = q
		}
		eval(h) {
			const _ = h < 0 ? -1 : 1,
				v = h * _;
			return v < this.d ? _ * (this.c * v + this.f) : _ * (Math.pow(this.a * v + this.b, this.g) + this.e)
		}
	}
	const a = {
			sRGB: new r(2.4, 1 / 1.055, .055 / 1.055, 1 / 12.92, .04045, 0, 0),
			sRGB_INVERSE: new r(.416667, 1.13728, -0, 12.92, .0031308, -.0549698, -0),
			proPhotoRGB: new r(1.8, 1),
			proPhotoRGB_INVERSE: new r(.555556, 1, -0, 0, 0, 0, 0),
			k2Dot2: new r(2.2, 1),
			k2Dot2_INVERSE: new r(.454545, 1),
			rec2020: new r(2.22222, .909672, .0903276, .222222, .0812429, 0, 0),
			rec2020_INVERSE: new r(.45, 1.23439, -0, 4.5, .018054, -.0993195, -0)
		},
		i = {
			sRGB: [
				[.436065674, .385147095, .143066406],
				[.222488403, .716873169, .06060791],
				[.013916016, .097076416, .714096069]
			],
			sRGB_INVERSE: [
				[3.134112151374599, -1.6173924597114966, -.4906334036481285],
				[-.9787872938826594, 1.9162795854799963, .0334547139520088],
				[.07198304248352326, -.2289858493321844, 1.4053851325241447]
			],
			displayP3: [
				[.515102, .291965, .157153],
				[.241182, .692236, .0665819],
				[-.00104941, .0418818, .784378]
			],
			displayP3_INVERSE: [
				[2.404045155982687, -.9898986932663839, -.3976317191366333],
				[-.8422283799266768, 1.7988505115115485, .016048170293157416],
				[.04818705979712955, -.09737385156228891, 1.2735066448052303]
			],
			adobeRGB: [
				[.60974, .20528, .14919],
				[.31111, .62567, .06322],
				[.01947, .06087, .74457]
			],
			adobeRGB_INVERSE: [
				[1.9625385510109137, -.6106892546501431, -.3413827467482388],
				[-.9787580455521, 1.9161624707082339, .03341676594241408],
				[.028696263137883395, -.1406807819331586, 1.349252109991369]
			],
			rec2020: [
				[.673459, .165661, .1251],
				[.279033, .675338, .0456288],
				[-.00193139, .0299794, .797162]
			],
			rec2020_INVERSE: [
				[1.647275201661012, -.3936024771460771, -.23598028884792507],
				[-.6826176165196962, 1.647617775014935, .01281626807852422],
				[.029662725298529837, -.06291668721366285, 1.2533964313435522]
			]
		};

	function l(m) {
		return m * (Math.PI / 180)
	}

	function f(m) {
		return m * (180 / Math.PI)
	}

	function p(m, h, _, v) {
		return [m.eval(h), m.eval(_), m.eval(v)]
	}
	const C = [
			[.9999999984505198, .39633779217376786, .2158037580607588],
			[1.0000000088817609, -.10556134232365635, -.06385417477170591],
			[1.0000000546724108, -.08948418209496575, -1.2914855378640917]
		],
		O = [
			[.2104542553, .7936177849999999, -.0040720468],
			[1.9779984951000003, -2.4285922049999997, .4505937099000001],
			[.025904037099999982, .7827717662, -.8086757660000001]
		],
		N = [
			[.8190224432164319, .3619062562801221, -.12887378261216414],
			[.0329836671980271, .9292868468965546, .03614466816999844],
			[.048177199566046255, .26423952494422764, .6335478258136937]
		],
		F = [
			[1.226879873374156, -.5578149965554814, .2813910501772159],
			[-.040575762624313734, 1.1122868293970596, -.07171106666151703],
			[-.07637294974672144, -.4214933239627915, 1.586924024427242]
		],
		x = [
			[.7976700747153241, .13519395152800417, .03135596341127167],
			[.28803902352472205, .7118744007923554, 8661179538844252e-20],
			[2739876695467402e-22, -14405226518969991e-22, .825211112593861]
		],
		T = [
			[1.3459533710138858, -.25561367037652133, -.051116041522131374],
			[-.544600415668951, 1.5081687311475767, .020535163968720935],
			[-13975622054109725e-22, 2717590904589903e-21, 1.2118111696814942]
		],
		D = [
			[1.0478573189120088, .022907374491829943, -.050162247377152525],
			[.029570500050499514, .9904755577034089, -.017061518194840468],
			[-.00924047197558879, .015052921526981566, .7519708530777581]
		],
		R = [
			[.9555366447632887, -.02306009252137888, .06321844147263304],
			[-.028315378228764922, 1.009951351591575, .021026001591792402],
			[.012308773293784308, -.02050053471777469, 1.3301947294775631]
		],
		M = [
			[3.2408089365140573, -1.5375788839307314, -.4985609572551541],
			[-.9692732213205414, 1.876110235238969, .041560501141251774],
			[.05567030990267439, -.2040007921971802, 1.0571046720577026]
		];

	function d(m, h, _) {
		let v = (m + 16) / 116,
			y = v + h / 500,
			B = v - _ / 200;

		function H(q) {
			return q <= .20689655172413793 ? 108 / 841 * (q - 16 / 116) : q * q * q
		}
		return y = H(y) * e, v = H(v) * t, B = H(B) * n, [y, v, B]
	}

	function s(m, h, _) {
		function v(q) {
			return q <= .008856451679035631 ? 841 / 108 * q + 16 / 116 : Math.pow(q, 1 / 3)
		}
		m = v(m / e), h = v(h / t), _ = v(_ / n);
		const y = 116 * h - 16,
			B = 500 * (m - h),
			H = 200 * (h - _);
		return [y, B, H]
	}

	function c(m, h, _) {
		const y = o(C, [m, h, _]);
		return y[0] = y[0] * y[0] * y[0], y[1] = y[1] * y[1] * y[1], y[2] = y[2] * y[2] * y[2], o(F, y)
	}

	function b(m, h, _) {
		const y = o(N, [m, h, _]);
		y[0] = Math.pow(y[0], 1 / 3), y[1] = Math.pow(y[1], 1 / 3), y[2] = Math.pow(y[2], 1 / 3);
		const B = o(O, y);
		return [B[0], B[1], B[2]]
	}

	function g(m, h, _) {
		return _ === void 0 ? [m, 0, 0] : [m, h * Math.cos(l(_)), h * Math.sin(l(_))]
	}

	function S(m, h, _) {
		return [m, Math.sqrt(h * h + _ * _), f(Math.atan2(_, h))]
	}

	function Z(m, h, _) {
		const [v, y, B] = p(a.sRGB, m, h, _), H = [v, y, B];
		return o(i.displayP3, H)
	}

	function k(m, h, _) {
		const v = [m, h, _],
			y = o(i.displayP3_INVERSE, v);
		return p(a.sRGB_INVERSE, y[0], y[1], y[2])
	}

	function u(m, h, _) {
		const [v, y, B] = p(a.proPhotoRGB, m, h, _);
		return o(x, [v, y, B])
	}

	function E(m, h, _) {
		const y = o(T, [m, h, _]);
		return p(a.proPhotoRGB_INVERSE, y[0], y[1], y[2])
	}

	function w(m, h, _) {
		const [v, y, B] = p(a.k2Dot2, m, h, _), H = [v, y, B];
		return o(i.adobeRGB, H)
	}

	function I(m, h, _) {
		const v = [m, h, _],
			y = o(i.adobeRGB_INVERSE, v);
		return p(a.k2Dot2_INVERSE, y[0], y[1], y[2])
	}

	function X(m, h, _) {
		const [v, y, B] = p(a.rec2020, m, h, _), H = [v, y, B];
		return o(i.rec2020, H)
	}

	function Q(m, h, _) {
		const v = [m, h, _],
			y = o(i.rec2020_INVERSE, v);
		return p(a.rec2020_INVERSE, y[0], y[1], y[2])
	}

	function U(m, h, _) {
		return o(R, [m, h, _])
	}

	function ie(m, h, _) {
		return o(D, [m, h, _])
	}

	function $(m, h, _) {
		return o(M, [m, h, _])
	}

	function z(m, h, _) {
		const v = [m, h, _];
		return o(i.sRGB_INVERSE, v)
	}

	function L(m, h, _) {
		const v = [m, h, _];
		return o(i.sRGB, v)
	}

	function G(m, h, _) {
		const [v, y, B] = p(a.sRGB, m, h, _), H = [v, y, B];
		return o(i.sRGB, H)
	}

	function Y(m, h, _) {
		const v = [m, h, _],
			y = o(i.sRGB_INVERSE, v);
		return p(a.sRGB_INVERSE, y[0], y[1], y[2])
	}

	function te(m, h, _) {
		const [v, y, B] = g(m, h, _), [H, q, ue] = c(v, y, B);
		return ie(H, q, ue)
	}

	function K(m, h, _) {
		const [v, y, B] = U(m, h, _), [H, q, ue] = b(v, y, B);
		return S(H, q, ue)
	}
	return j
}
var Le;

function Gt() {
	if (Le) return W;
	Le = 1;
	var e = W && W.__createBinding || (Object.create ? function(u, E, w, I) {
			I === void 0 && (I = w);
			var X = Object.getOwnPropertyDescriptor(E, w);
			(!X || ("get" in X ? !E.__esModule : X.writable || X.configurable)) && (X = {
				enumerable: !0,
				get: function() {
					return E[w]
				}
			}), Object.defineProperty(u, I, X)
		} : function(u, E, w, I) {
			I === void 0 && (I = w), u[I] = E[w]
		}),
		t = W && W.__setModuleDefault || (Object.create ? function(u, E) {
			Object.defineProperty(u, "default", {
				enumerable: !0,
				value: E
			})
		} : function(u, E) {
			u.default = E
		}),
		n = W && W.__importStar || function(u) {
			if (u && u.__esModule) return u;
			var E = {};
			if (u != null)
				for (var w in u) w !== "default" && Object.prototype.hasOwnProperty.call(u, w) && e(E, u, w);
			return t(E, u), E
		};
	Object.defineProperty(W, "__esModule", {
		value: !0
	}), W.parse = N, W.parseHex = F, W.parseColor = T;
	const o = me(),
		r = n(jt()),
		a = 35,
		i = 37,
		l = 103,
		f = 110,
		p = 100,
		C = 101,
		O = (() => {
			const u = "(\\w+)",
				E = "[\\s,\\/]",
				w = "([^\\s,\\/]+)",
				I = `(?:${E}+${w})`;
			return new RegExp(`${u}\\(
      ${E}*
      ${w}
      ${I}
      ${I}
      ${I}?
      ${I}?
      ${E}*
    \\)`.replace(/\s/g, ""))
		})();

	function N(u) {
		return u.charCodeAt(0) === a ? F(u) : T(u)
	}

	function F(u) {
		let E = 0,
			w = 0,
			I = 0,
			X = 255;
		switch (u.length) {
			case 4: {
				E = (x(u.charCodeAt(1)) << 4) + x(u.charCodeAt(1)), w = (x(u.charCodeAt(2)) << 4) + x(u.charCodeAt(2)), I = (x(u.charCodeAt(3)) << 4) + x(u.charCodeAt(3));
				break
			}
			case 7: {
				E = (x(u.charCodeAt(1)) << 4) + x(u.charCodeAt(2)), w = (x(u.charCodeAt(3)) << 4) + x(u.charCodeAt(4)), I = (x(u.charCodeAt(5)) << 4) + x(u.charCodeAt(6));
				break
			}
			case 9: {
				E = (x(u.charCodeAt(1)) << 4) + x(u.charCodeAt(2)), w = (x(u.charCodeAt(3)) << 4) + x(u.charCodeAt(4)), I = (x(u.charCodeAt(5)) << 4) + x(u.charCodeAt(6)), X = (x(u.charCodeAt(7)) << 4) + x(u.charCodeAt(8));
				break
			}
		}
		return (0, o.newColor)(E, w, I, X)
	}

	function x(u) {
		return (u & 15) + 9 * (u >> 6)
	}

	function T(u) {
		const E = O.exec(u);
		if (E === null) throw new Error(`Color.parse(): invalid CSS color: "${u}"`);
		const w = E[1],
			I = E[2],
			X = E[3],
			Q = E[4],
			U = E[5],
			ie = E[6];
		switch (w) {
			case "rgb":
			case "rgba": {
				const $ = D(I),
					z = D(X),
					L = D(Q),
					G = U ? R(U) : 255;
				return (0, o.newColor)($, z, L, G)
			}
			case "hsl":
			case "hsla": {
				const $ = d(I),
					z = s(X),
					L = s(Q),
					G = U ? R(U) : 255;
				let Y, te, K;
				if (z === 0) Y = te = K = Math.round(L * 255);
				else {
					const m = L < .5 ? L * (1 + z) : L + z - L * z,
						h = 2 * L - m;
					Y = Math.round(g(h, m, $ + 1 / 3) * 255), te = Math.round(g(h, m, $) * 255), K = Math.round(g(h, m, $ - 1 / 3) * 255)
				}
				return (0, o.newColor)(Y, te, K, G)
			}
			case "hwb": {
				const $ = d(I),
					z = s(X),
					L = s(Q),
					G = U ? R(U) : 255,
					Y = 1,
					te = .5,
					K = te + Y - te * Y,
					m = 2 * te - K;
				let h = Math.round(g(m, K, $ + 1 / 3) * 255),
					_ = Math.round(g(m, K, $) * 255),
					v = Math.round(g(m, K, $ - 1 / 3) * 255);
				return h = S(h, z, L), _ = S(_, z, L), v = S(v, z, L), (0, o.newColor)(h, _, v, G)
			}
			case "lab": {
				const $ = b(I, 100),
					z = b(X, 125),
					L = b(Q, 125),
					G = U ? R(U) : 255;
				return k(G, r.xyzd50ToSrgb(...r.labToXyzd50($, z, L)))
			}
			case "lch": {
				const $ = b(I, 100),
					z = b(X, 150),
					L = d(Q) * 360,
					G = U ? R(U) : 255;
				return k(G, r.xyzd50ToSrgb(...r.labToXyzd50(...r.lchToLab($, z, L))))
			}
			case "oklab": {
				const $ = b(I, 1),
					z = b(X, .4),
					L = b(Q, .4),
					G = U ? R(U) : 255;
				return k(G, r.xyzd50ToSrgb(...r.xyzd65ToD50(...r.oklabToXyzd65($, z, L))))
			}
			case "oklch": {
				const $ = c(I),
					z = c(X),
					L = c(Q),
					G = U ? R(U) : 255;
				return k(G, r.xyzd50ToSrgb(...r.oklchToXyzd50($, z, L)))
			}
			case "color": {
				const $ = I,
					z = c(X),
					L = c(Q),
					G = c(U),
					Y = ie ? R(ie) : 255;
				switch ($) {
					case "srgb":
						return k(Y, [z, L, G]);
					case "srgb-linear":
						return k(Y, r.xyzd50ToSrgb(...r.srgbLinearToXyzd50(z, L, G)));
					case "display-p3":
						return k(Y, r.xyzd50ToSrgb(...r.displayP3ToXyzd50(z, L, G)));
					case "a98-rgb":
						return k(Y, r.xyzd50ToSrgb(...r.adobeRGBToXyzd50(z, L, G)));
					case "prophoto-rgb":
						return k(Y, r.xyzd50ToSrgb(...r.proPhotoToXyzd50(z, L, G)));
					case "rec2020":
						return k(Y, r.xyzd50ToSrgb(...r.rec2020ToXyzd50(z, L, G)));
					case "xyz":
					case "xyz-d65":
						return k(Y, r.xyzd50ToSrgb(...r.xyzd65ToD50(z, L, G)));
					case "xyz-d50":
						return k(Y, r.xyzd50ToSrgb(z, L, G))
				}
			}
		}
		throw new Error(`Color.parse(): invalid CSS color: "${u}"`)
	}

	function D(u) {
		return u.charCodeAt(u.length - 1) === i ? Math.round(parseFloat(u) / 100 * 255) : Math.round(parseFloat(u))
	}

	function R(u) {
		return Math.round(M(u) * 255)
	}

	function M(u) {
		return u.charCodeAt(0) === f ? 0 : u.charCodeAt(u.length - 1) === i ? parseFloat(u) / 100 : parseFloat(u)
	}

	function d(u) {
		let E = 1;
		switch (u.charCodeAt(u.length - 1)) {
			case C:
				return 0;
			case p: {
				u.charCodeAt(Math.max(0, u.length - 4)) === l ? E = 400 : E = 2 * Math.PI;
				break
			}
			case f: {
				E = 1;
				break
			}
			default:
				E = 360
		}
		return parseFloat(u) / E
	}

	function s(u) {
		return u.charCodeAt(0) === f ? 0 : parseFloat(u) / 100
	}

	function c(u) {
		return u.charCodeAt(0) === f ? 0 : u.charCodeAt(u.length - 1) === i ? parseFloat(u) / 100 : parseFloat(u)
	}

	function b(u, E) {
		return u.charCodeAt(0) === f ? 0 : u.charCodeAt(u.length - 1) === i ? parseFloat(u) / 100 * E : parseFloat(u)
	}

	function g(u, E, w) {
		return w < 0 && (w += 1), w > 1 && (w -= 1), w < 1 / 6 ? u + (E - u) * 6 * w : w < 1 / 2 ? E : w < 2 / 3 ? u + (E - u) * (2 / 3 - w) * 6 : u
	}

	function S(u, E, w) {
		let I = u / 255;
		return I *= 1 - E - w, I += E, Math.round(I * 255)
	}

	function Z(u) {
		return Math.max(0, Math.min(255, u))
	}

	function k(u, E) {
		const w = Z(Math.round(E[0] * 255)),
			I = Z(Math.round(E[1] * 255)),
			X = Z(Math.round(E[2] * 255));
		return (0, o.newColor)(w, I, X, u)
	}
	return W
}
var V = {},
	ze;

function Xt() {
	if (ze) return V;
	ze = 1;
	var e = V && V.__createBinding || (Object.create ? function(s, c, b, g) {
			g === void 0 && (g = b);
			var S = Object.getOwnPropertyDescriptor(c, b);
			(!S || ("get" in S ? !c.__esModule : S.writable || S.configurable)) && (S = {
				enumerable: !0,
				get: function() {
					return c[b]
				}
			}), Object.defineProperty(s, g, S)
		} : function(s, c, b, g) {
			g === void 0 && (g = b), s[g] = c[b]
		}),
		t = V && V.__setModuleDefault || (Object.create ? function(s, c) {
			Object.defineProperty(s, "default", {
				enumerable: !0,
				value: c
			})
		} : function(s, c) {
			s.default = c
		}),
		n = V && V.__importStar || function(s) {
			if (s && s.__esModule) return s;
			var c = {};
			if (s != null)
				for (var b in s) b !== "default" && Object.prototype.hasOwnProperty.call(s, b) && e(c, s, b);
			return t(c, s), c
		};
	Object.defineProperty(V, "__esModule", {
		value: !0
	}), V.format = void 0, V.formatHEXA = C, V.formatHEX = O, V.formatRGBA = N, V.toRGBA = F, V.formatHSLA = x, V.toHSLA = T, V.formatHWBA = D, V.toHWBA = R;
	const o = n(me()),
		{
			getRed: r,
			getGreen: a,
			getBlue: i,
			getAlpha: l
		} = o,
		f = [0, 0, 0],
		p = Array.from({
			length: 256
		}).map((s, c) => c.toString(16).padStart(2, "0"));
	V.format = C;

	function C(s) {
		return "#" + p[r(s)] + p[a(s)] + p[i(s)] + p[l(s)]
	}

	function O(s) {
		return "#" + p[r(s)] + p[a(s)] + p[i(s)]
	}

	function N(s) {
		return `rgba(${r(s)} ${a(s)} ${i(s)} / ${l(s)/255})`
	}

	function F(s) {
		return {
			r: r(s),
			g: a(s),
			b: i(s),
			a: l(s)
		}
	}

	function x(s) {
		M(r(s), a(s), i(s));
		const c = f[0],
			b = f[1],
			g = f[2],
			S = l(s) / 255;
		return `hsla(${c} ${b}% ${g}% / ${S})`
	}

	function T(s) {
		M(r(s), a(s), i(s));
		const c = f[0],
			b = f[1],
			g = f[2],
			S = l(s) / 255;
		return {
			h: c,
			s: b,
			l: g,
			a: S
		}
	}

	function D(s) {
		d(r(s), a(s), i(s));
		const c = f[0],
			b = f[1],
			g = f[2],
			S = l(s) / 255;
		return `hsla(${c} ${b}% ${g}% / ${S})`
	}

	function R(s) {
		d(r(s), a(s), i(s));
		const c = f[0],
			b = f[1],
			g = f[2],
			S = l(s) / 255;
		return {
			h: c,
			w: b,
			b: g,
			a: S
		}
	}

	function M(s, c, b) {
		s /= 255, c /= 255, b /= 255;
		const g = Math.max(s, c, b),
			S = g - Math.min(s, c, b),
			Z = S ? g === s ? (c - b) / S : g === c ? 2 + (b - s) / S : 4 + (s - c) / S : 0;
		f[0] = 60 * Z < 0 ? 60 * Z + 360 : 60 * Z, f[1] = 100 * (S ? g <= .5 ? S / (2 * g - S) : S / (2 - (2 * g - S)) : 0), f[2] = 100 * (2 * g - S) / 2
	}

	function d(s, c, b) {
		s /= 255, c /= 255, b /= 255;
		const g = Math.min(s, c, b),
			S = Math.max(s, c, b),
			Z = 1 - S;
		if (S === g) {
			f[0] = 0, f[1] = g, f[2] = Z;
			return
		}
		let k = s === g ? c - b : c === g ? b - s : s - c,
			u = s === g ? 3 : c === g ? 5 : 1;
		f[0] = (u - k / (S - g)) / 6, f[1] = g, f[2] = Z
	}
	return V
}
var J = {},
	Pe;

function $t() {
	if (Pe) return J;
	Pe = 1;
	var e = J && J.__createBinding || (Object.create ? function(T, D, R, M) {
			M === void 0 && (M = R);
			var d = Object.getOwnPropertyDescriptor(D, R);
			(!d || ("get" in d ? !D.__esModule : d.writable || d.configurable)) && (d = {
				enumerable: !0,
				get: function() {
					return D[R]
				}
			}), Object.defineProperty(T, M, d)
		} : function(T, D, R, M) {
			M === void 0 && (M = R), T[M] = D[R]
		}),
		t = J && J.__setModuleDefault || (Object.create ? function(T, D) {
			Object.defineProperty(T, "default", {
				enumerable: !0,
				value: D
			})
		} : function(T, D) {
			T.default = D
		}),
		n = J && J.__importStar || function(T) {
			if (T && T.__esModule) return T;
			var D = {};
			if (T != null)
				for (var R in T) R !== "default" && Object.prototype.hasOwnProperty.call(T, R) && e(D, T, R);
			return t(D, T), D
		};
	Object.defineProperty(J, "__esModule", {
		value: !0
	}), J.alpha = C, J.darken = O, J.lighten = N, J.blend = F, J.getLuminance = x;
	const o = n(me()),
		{
			getRed: r,
			getGreen: a,
			getBlue: i,
			getAlpha: l,
			setAlpha: f,
			newColor: p
		} = o;

	function C(T, D) {
		return f(T, Math.round(D * 255))
	}

	function O(T, D) {
		const R = r(T),
			M = a(T),
			d = i(T),
			s = l(T),
			c = 1 - D;
		return p(R * c, M * c, d * c, s)
	}

	function N(T, D) {
		const R = r(T),
			M = a(T),
			d = i(T),
			s = l(T);
		return p(R + (255 - R) * D, M + (255 - M) * D, d + (255 - d) * D, s)
	}

	function F(T, D, R, M = 1) {
		const d = (g, S) => Math.round((g ** (1 / M) * (1 - R) + S ** (1 / M) * R) ** M),
			s = d(r(T), r(D)),
			c = d(a(T), a(D)),
			b = d(i(T), i(D));
		return p(s, c, b, 255)
	}

	function x(T) {
		const D = r(T) / 255,
			R = a(T) / 255,
			M = i(T) / 255,
			d = g => g <= .03928 ? g / 12.92 : ((g + .055) / 1.055) ** 2.4,
			s = d(D),
			c = d(R),
			b = d(M);
		return Math.round((.2126 * s + .7152 * c + .0722 * b) * 1e3) / 1e3
	}
	return J
}
var Ne;

function Ht() {
	return Ne || (Ne = 1, function(e) {
		var t = oe && oe.__createBinding || (Object.create ? function(o, r, a, i) {
				i === void 0 && (i = a);
				var l = Object.getOwnPropertyDescriptor(r, a);
				(!l || ("get" in l ? !r.__esModule : l.writable || l.configurable)) && (l = {
					enumerable: !0,
					get: function() {
						return r[a]
					}
				}), Object.defineProperty(o, i, l)
			} : function(o, r, a, i) {
				i === void 0 && (i = a), o[i] = r[a]
			}),
			n = oe && oe.__exportStar || function(o, r) {
				for (var a in o) a !== "default" && !Object.prototype.hasOwnProperty.call(r, a) && t(r, o, a)
			};
		Object.defineProperty(e, "__esModule", {
			value: !0
		}), n(me(), e), n(Gt(), e), n(Xt(), e), n($t(), e)
	}(oe)), oe
}
var Fe = Ht();
const qt = ({
		onScroll: e
	}) => (gt(({
		scrollTop: t
	}) => {
		e?.(t)
	}), null),
	kt = ({
		shouldScrollToTop: e
	}) => {
		const t = vt();
		return le.useEffect(() => {
			e === !0 && t({
				behavior: "smooth"
			})
		}, [e, t]), null
	},
	Vt = () => {
		const e = yt();
		le.useEffect(() => {
			e({
				behavior: "smooth"
			})
		}, [e]);
		const [t] = _t();
		return t ? null : P.jsx("button", {
			onClick: () => e({
				behavior: "smooth"
			}),
			className: "border-token-border-default bg-token-main-surface-primary text-token-text-secondary absolute end-1/2 bottom-5 z-10 flex h-8 w-8 translate-x-1/2 cursor-pointer items-center justify-center rounded-full border bg-clip-padding",
			children: P.jsx(bt, {
				className: "icon text-token-text-primary"
			})
		})
	};

function Ut({
	children: e,
	onScroll: t,
	shouldScrollToTop: n,
	scrollToBottomMode: o = "top",
	isLoading: r = !1,
	header: a,
	height: i = "auto",
	overlay: l,
	hideChildren: f = !1,
	disableScroll: p = !1,
	ref: C
}) {
	const O = P.jsx("div", {
		className: ae(f ? "hidden" : "block", i === "auto" ? "h-auto" : "h-full"),
		children: e
	});
	return P.jsxs("section", {
		ref: C,
		className: ae("relative flex min-h-0 flex-auto grow flex-col", p && "overflow-hidden"),
		children: [P.jsx(nt, {
			children: r && P.jsx(Ft, {
				zIndexKey: "textdocDiffLoadingOverlay"
			})
		}), !p && P.jsxs(It, {
			followButtonClassName: "hidden",
			initialScrollBehavior: "auto",
			scrollViewClassName: "flex flex-col",
			className: "h-full",
			mode: o,
			children: [a, O, l && P.jsx("div", {
				className: "pointer-events-none w-full flex-1",
				children: l
			}), o === "bottom" && P.jsx(Vt, {}), P.jsx(qt, {
				onScroll: t
			}), P.jsx(kt, {
				shouldScrollToTop: n
			})]
		}), p && P.jsxs(P.Fragment, {
			children: [a, O, l && P.jsx("div", {
				className: "pointer-events-none h-full w-full",
				children: l
			})]
		})]
	})
}

function Yt({
	className: e,
	children: t
}) {
	return P.jsx("header", {
		className: ae(e, "touch:px-2.5 h-header-height flex flex-none items-center justify-between gap-1 px-2"),
		children: t
	})
}

function Zt({
	className: e,
	children: t,
	size: n = "lg",
	bold: o
}) {
	return P.jsx("h2", {
		className: ae(e, "text-token-text-primary truncate", o ? "font-bold" : "font-normal", n === "lg" && "text-lg", n === "base" && "text-base"),
		children: t
	})
}
const Jt = ({
		onClick: e
	}) => {
		const n = Ze() ? mt : it;
		return P.jsx(ht, {
			icon: n,
			onClick: e
		})
	},
	Be = e => {
		const {
			r: t,
			g: n,
			b: o
		} = Fe.toRGBA(Fe.parse(e));
		return (t * 299 + n * 587 + o * 114) / 1e3 < 125
	},
	ye = ({
		children: e,
		isPreviewingCode: t = !1,
		transitionBackground: n = !1,
		previewBackgroundColor: o = null
	}) => {
		const r = t && o && Be(o),
			a = t && o && !Be(o);
		return P.jsx("section", {
			className: ae("popover flex h-full w-full flex-col", n && "transition-colors", r && "dark", a && "light", t ? "bg-[rgba(249,249,249,1)] dark:bg-[rgba(33,33,33,1)]" : "bg-transparent"),
			style: {
				backgroundColor: t && o ? o : void 0
			},
			children: e
		})
	};
ye.Title = Zt;
ye.CloseButton = Jt;
ye.Header = Yt;
ye.Content = Ut;
const Wt = Je(() => re(() => import("./k0jjtaqb0r5bd46k.js"), __vite__mapDeps([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26])).then(e => e.CodeComposer), {
		loading: () => P.jsx("div", {
			className: Ye.code,
			children: P.jsx("div", {
				className: "h-full w-full px-4",
				children: P.jsx(We, {
					lines: 20
				})
			})
		})
	}),
	Rn = e => P.jsx(Wt, {
		...e
	}),
	Sn = (e = []) => e.filter(({
		status: t
	}) => t !== Tt.DISMISSED);
var Qt = (e => (e.ALL_HIDDEN = "all_hidden", e.COMMENTS_READONLY = "comments_readonly", e.ENABLED = "enabled", e))(Qt || {});
const je = 775,
	Kt = 580,
	en = 36,
	tn = 18,
	wn = 24,
	In = 16,
	nn = ({
		numLines: e = 20
	}) => {
		const [{
			width: t
		}, n] = zt(), o = Ze(), r = t >= je + Mt ? je : Kt, a = o ? tn : en;
		return P.jsx("div", {
			className: ae(Ye.document, "mt-4"),
			ref: n,
			style: {
				margin: `0 ${a}px`
			},
			children: P.jsx("div", {
				style: {
					width: r
				},
				children: P.jsx(We, {
					lines: e
				})
			})
		})
	},
	on = Je(() => re(() => import("./b19uthlmolos3q2g.js"), __vite__mapDeps([27, 1, 28, 5, 6, 14, 3, 4, 7, 13, 11, 15, 16, 12, 9, 10, 17, 29, 30, 18, 31, 32, 33, 20, 21, 22, 23, 34, 35, 25, 26])).then(e => e.DocumentComposer), {
		loading: () => P.jsx(nn, {})
	}),
	Mn = e => P.jsx(on, {
		...e
	});

function ee() {}
ee.prototype = {
	diff: function(t, n) {
		var o, r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {},
			a = r.callback;
		typeof r == "function" && (a = r, r = {});
		var i = this;

		function l(s) {
			return s = i.postProcess(s, r), a ? (setTimeout(function() {
				a(s)
			}, 0), !0) : s
		}
		t = this.castInput(t, r), n = this.castInput(n, r), t = this.removeEmpty(this.tokenize(t, r)), n = this.removeEmpty(this.tokenize(n, r));
		var f = n.length,
			p = t.length,
			C = 1,
			O = f + p;
		r.maxEditLength != null && (O = Math.min(O, r.maxEditLength));
		var N = (o = r.timeout) !== null && o !== void 0 ? o : 1 / 0,
			F = Date.now() + N,
			x = [{
				oldPos: -1,
				lastComponent: void 0
			}],
			T = this.extractCommon(x[0], n, t, 0, r);
		if (x[0].oldPos + 1 >= p && T + 1 >= f) return l(Ge(i, x[0].lastComponent, n, t, i.useLongestToken));
		var D = -1 / 0,
			R = 1 / 0;

		function M() {
			for (var s = Math.max(D, -C); s <= Math.min(R, C); s += 2) {
				var c = void 0,
					b = x[s - 1],
					g = x[s + 1];
				b && (x[s - 1] = void 0);
				var S = !1;
				if (g) {
					var Z = g.oldPos - s;
					S = g && 0 <= Z && Z < f
				}
				var k = b && b.oldPos + 1 < p;
				if (!S && !k) {
					x[s] = void 0;
					continue
				}
				if (!k || S && b.oldPos < g.oldPos ? c = i.addToPath(g, !0, !1, 0, r) : c = i.addToPath(b, !1, !0, 1, r), T = i.extractCommon(c, n, t, s, r), c.oldPos + 1 >= p && T + 1 >= f) return l(Ge(i, c.lastComponent, n, t, i.useLongestToken));
				x[s] = c, c.oldPos + 1 >= p && (R = Math.min(R, s - 1)), T + 1 >= f && (D = Math.max(D, s + 1))
			}
			C++
		}
		if (a)(function s() {
			setTimeout(function() {
				if (C > O || Date.now() > F) return a();
				M() || s()
			}, 0)
		})();
		else
			for (; C <= O && Date.now() <= F;) {
				var d = M();
				if (d) return d
			}
	},
	addToPath: function(t, n, o, r, a) {
		var i = t.lastComponent;
		return i && !a.oneChangePerToken && i.added === n && i.removed === o ? {
			oldPos: t.oldPos + r,
			lastComponent: {
				count: i.count + 1,
				added: n,
				removed: o,
				previousComponent: i.previousComponent
			}
		} : {
			oldPos: t.oldPos + r,
			lastComponent: {
				count: 1,
				added: n,
				removed: o,
				previousComponent: i
			}
		}
	},
	extractCommon: function(t, n, o, r, a) {
		for (var i = n.length, l = o.length, f = t.oldPos, p = f - r, C = 0; p + 1 < i && f + 1 < l && this.equals(o[f + 1], n[p + 1], a);) p++, f++, C++, a.oneChangePerToken && (t.lastComponent = {
			count: 1,
			previousComponent: t.lastComponent,
			added: !1,
			removed: !1
		});
		return C && !a.oneChangePerToken && (t.lastComponent = {
			count: C,
			previousComponent: t.lastComponent,
			added: !1,
			removed: !1
		}), t.oldPos = f, p
	},
	equals: function(t, n, o) {
		return o.comparator ? o.comparator(t, n) : t === n || o.ignoreCase && t.toLowerCase() === n.toLowerCase()
	},
	removeEmpty: function(t) {
		for (var n = [], o = 0; o < t.length; o++) t[o] && n.push(t[o]);
		return n
	},
	castInput: function(t) {
		return t
	},
	tokenize: function(t) {
		return Array.from(t)
	},
	join: function(t) {
		return t.join("")
	},
	postProcess: function(t) {
		return t
	}
};

function Ge(e, t, n, o, r) {
	for (var a = [], i; t;) a.push(t), i = t.previousComponent, delete t.previousComponent, t = i;
	a.reverse();
	for (var l = 0, f = a.length, p = 0, C = 0; l < f; l++) {
		var O = a[l];
		if (O.removed) O.value = e.join(o.slice(C, C + O.count)), C += O.count;
		else {
			if (!O.added && r) {
				var N = n.slice(p, p + O.count);
				N = N.map(function(F, x) {
					var T = o[C + x];
					return T.length > F.length ? T : F
				}), O.value = e.join(N)
			} else O.value = e.join(n.slice(p, p + O.count));
			p += O.count, O.added || (C += O.count)
		}
	}
	return a
}

function Xe(e, t) {
	var n;
	for (n = 0; n < e.length && n < t.length; n++)
		if (e[n] != t[n]) return e.slice(0, n);
	return e.slice(0, n)
}

function $e(e, t) {
	var n;
	if (!e || !t || e[e.length - 1] != t[t.length - 1]) return "";
	for (n = 0; n < e.length && n < t.length; n++)
		if (e[e.length - (n + 1)] != t[t.length - (n + 1)]) return e.slice(-n);
	return e.slice(-n)
}

function Ee(e, t, n) {
	if (e.slice(0, t.length) != t) throw Error("string ".concat(JSON.stringify(e), " doesn't start with prefix ").concat(JSON.stringify(t), "; this is a bug"));
	return n + e.slice(t.length)
}

function Ce(e, t, n) {
	if (!t) return e + n;
	if (e.slice(-t.length) != t) throw Error("string ".concat(JSON.stringify(e), " doesn't end with suffix ").concat(JSON.stringify(t), "; this is a bug"));
	return e.slice(0, -t.length) + n
}

function ce(e, t) {
	return Ee(e, t, "")
}

function de(e, t) {
	return Ce(e, t, "")
}

function He(e, t) {
	return t.slice(0, rn(e, t))
}

function rn(e, t) {
	var n = 0;
	e.length > t.length && (n = e.length - t.length);
	var o = t.length;
	e.length < t.length && (o = e.length);
	var r = Array(o),
		a = 0;
	r[0] = 0;
	for (var i = 1; i < o; i++) {
		for (t[i] == t[a] ? r[i] = r[a] : r[i] = a; a > 0 && t[i] != t[a];) a = r[a];
		t[i] == t[a] && a++
	}
	a = 0;
	for (var l = n; l < e.length; l++) {
		for (; a > 0 && e[l] != t[a];) a = r[a];
		e[l] == t[a] && a++
	}
	return a
}
var he = "a-zA-Z0-9_\\u{C0}-\\u{FF}\\u{D8}-\\u{F6}\\u{F8}-\\u{2C6}\\u{2C8}-\\u{2D7}\\u{2DE}-\\u{2FF}\\u{1E00}-\\u{1EFF}",
	an = new RegExp("[".concat(he, "]+|\\s+|[^").concat(he, "]"), "ug"),
	_e = new ee;
_e.equals = function(e, t, n) {
	return n.ignoreCase && (e = e.toLowerCase(), t = t.toLowerCase()), e.trim() === t.trim()
};
_e.tokenize = function(e) {
	var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {},
		n;
	if (t.intlSegmenter) {
		if (t.intlSegmenter.resolvedOptions().granularity != "word") throw new Error('The segmenter passed must have a granularity of "word"');
		n = Array.from(t.intlSegmenter.segment(e), function(a) {
			return a.segment
		})
	} else n = e.match(an) || [];
	var o = [],
		r = null;
	return n.forEach(function(a) {
		/\s/.test(a) ? r == null ? o.push(a) : o.push(o.pop() + a) : /\s/.test(r) ? o[o.length - 1] == r ? o.push(o.pop() + a) : o.push(r + a) : o.push(a), r = a
	}), o
};
_e.join = function(e) {
	return e.map(function(t, n) {
		return n == 0 ? t : t.replace(/^\s+/, "")
	}).join("")
};
_e.postProcess = function(e, t) {
	if (!e || t.oneChangePerToken) return e;
	var n = null,
		o = null,
		r = null;
	return e.forEach(function(a) {
		a.added ? o = a : a.removed ? r = a : ((o || r) && qe(n, r, o, a), n = a, o = null, r = null)
	}), (o || r) && qe(n, r, o, null), e
};

function qe(e, t, n, o) {
	if (t && n) {
		var r = t.value.match(/^\s*/)[0],
			a = t.value.match(/\s*$/)[0],
			i = n.value.match(/^\s*/)[0],
			l = n.value.match(/\s*$/)[0];
		if (e) {
			var f = Xe(r, i);
			e.value = Ce(e.value, i, f), t.value = ce(t.value, f), n.value = ce(n.value, f)
		}
		if (o) {
			var p = $e(a, l);
			o.value = Ee(o.value, l, p), t.value = de(t.value, p), n.value = de(n.value, p)
		}
	} else if (n) e && (n.value = n.value.replace(/^\s*/, "")), o && (o.value = o.value.replace(/^\s*/, ""));
	else if (e && o) {
		var C = o.value.match(/^\s*/)[0],
			O = t.value.match(/^\s*/)[0],
			N = t.value.match(/\s*$/)[0],
			F = Xe(C, O);
		t.value = ce(t.value, F);
		var x = $e(ce(C, F), N);
		t.value = de(t.value, x), o.value = Ee(o.value, C, x), e.value = Ce(e.value, C, C.slice(0, C.length - x.length))
	} else if (o) {
		var T = o.value.match(/^\s*/)[0],
			D = t.value.match(/\s*$/)[0],
			R = He(D, T);
		t.value = de(t.value, R)
	} else if (e) {
		var M = e.value.match(/\s*$/)[0],
			d = t.value.match(/^\s*/)[0],
			s = He(M, d);
		t.value = ce(t.value, s)
	}
}
var sn = new ee;
sn.tokenize = function(e) {
	var t = new RegExp("(\\r?\\n)|[".concat(he, "]+|[^\\S\\n\\r]+|[^").concat(he, "]"), "ug");
	return e.match(t) || []
};
var be = new ee;
be.tokenize = function(e, t) {
	t.stripTrailingCr && (e = e.replace(/\r\n/g, `
`));
	var n = [],
		o = e.split(/(\n|\r\n)/);
	o[o.length - 1] || o.pop();
	for (var r = 0; r < o.length; r++) {
		var a = o[r];
		r % 2 && !t.newlineIsToken ? n[n.length - 1] += a : n.push(a)
	}
	return n
};
be.equals = function(e, t, n) {
	return n.ignoreWhitespace ? ((!n.newlineIsToken || !e.includes(`
`)) && (e = e.trim()), (!n.newlineIsToken || !t.includes(`
`)) && (t = t.trim())) : n.ignoreNewlineAtEof && !n.newlineIsToken && (e.endsWith(`
`) && (e = e.slice(0, -1)), t.endsWith(`
`) && (t = t.slice(0, -1))), ee.prototype.equals.call(this, e, t, n)
};

function un(e, t, n) {
	return be.diff(e, t, n)
}
var cn = new ee;
cn.tokenize = function(e) {
	return e.split(/(\S.+?[.!?])(?=\s+|$)/)
};
var ln = new ee;
ln.tokenize = function(e) {
	return e.split(/([{}:;,]|\s+)/)
};

function xe(e) {
	"@babel/helpers - typeof";
	return xe = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
		return typeof t
	} : function(t) {
		return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
	}, xe(e)
}
var fe = new ee;
fe.useLongestToken = !0;
fe.tokenize = be.tokenize;
fe.castInput = function(e, t) {
	var n = t.undefinedReplacement,
		o = t.stringifyReplacer,
		r = o === void 0 ? function(a, i) {
			return typeof i > "u" ? n : i
		} : o;
	return typeof e == "string" ? e : JSON.stringify(Oe(e, null, null, r), r, "  ")
};
fe.equals = function(e, t, n) {
	return ee.prototype.equals.call(fe, e.replace(/,([\r\n])/g, "$1"), t.replace(/,([\r\n])/g, "$1"), n)
};

function Oe(e, t, n, o, r) {
	t = t || [], n = n || [], o && (e = o(r, e));
	var a;
	for (a = 0; a < t.length; a += 1)
		if (t[a] === e) return n[a];
	var i;
	if (Object.prototype.toString.call(e) === "[object Array]") {
		for (t.push(e), i = new Array(e.length), n.push(i), a = 0; a < e.length; a += 1) i[a] = Oe(e[a], t, n, o, r);
		return t.pop(), n.pop(), i
	}
	if (e && e.toJSON && (e = e.toJSON()), xe(e) === "object" && e !== null) {
		t.push(e), i = {}, n.push(i);
		var l = [],
			f;
		for (f in e) Object.prototype.hasOwnProperty.call(e, f) && l.push(f);
		for (l.sort(), a = 0; a < l.length; a += 1) f = l[a], i[f] = Oe(e[f], t, n, o, f);
		t.pop(), n.pop()
	} else i = e;
	return i
}
var De = new ee;
De.tokenize = function(e) {
	return e.slice()
};
De.join = De.removeEmpty = function(e) {
	return e
};
var pe = (e => (e.ADDED = "added", e.REMOVED = "removed", e.UNCHANGED = "unchanged", e))(pe || {});

function Ae(e) {
	if (e === "") return 0;
	const t = e.split(`
`).length;
	return e.endsWith(`
`) ? t - 1 : t
}

function fn(e, t) {
	return un(e, t, {
		newlineIsToken: !0
	}).map(o => ({
		count: o.count ?? Ae(o.value),
		value: o.value,
		type: o.added ? "added" : o.removed ? "removed" : "unchanged"
	}))
}

function dn(e) {
	let t = "";
	for (const {
			type: n,
			value: o
		}
		of e)(n === "added" || n === "unchanged") && (t += o);
	return t
}

function pn(e, t) {
	const n = Ae(t),
		o = yn(e, n);
	return {
		changes: fn(o, t),
		numLinesDiffed: n
	}
}

function hn(e) {
	const t = [...e],
		n = [],
		o = [];
	for (; t.length > 0;) {
		const r = t[t.length - 1];
		if (r.type === pe.REMOVED) t.pop(), r.type === pe.REMOVED && n.unshift(r);
		else if (r.type === pe.ADDED) t.pop(), o.unshift(r);
		else break
	}
	return {
		prunedChanges: [...t, ...o],
		prunedRemovedChanges: n
	}
}

function mn(e, t) {
	const {
		changes: n,
		numLinesDiffed: o
	} = pn(e, t), {
		prunedChanges: r,
		prunedRemovedChanges: a
	} = hn(n), i = dn(r), l = a.map(p => p.value).join(`
`), f = Ke(e, o, "start");
	return {
		content: i + l + f,
		numLinesDiffed: Ae(i)
	}
}

function yn(e, t) {
	if (t <= 0) return "";
	let n = 0,
		o = e.length;
	for (let r = 0; r < e.length; r++)
		if (e[r] === `
` && (n++, n === t)) {
			o = r + 1;
			break
		} return e.substring(0, o)
}

function Ke(e, t, n = "start") {
	if (t <= 0) return e;
	if (n === "start") {
		let i = 0;
		for (let l = 0; l < e.length; l++)
			if (e[l] === `
` && (i++, i === t)) return e.substring(l + 1);
		return ""
	}
	let o = 0,
		r = -1;
	const a = e.endsWith(`
`) ? t + 1 : t;
	for (let i = e.length - 1; i >= 0; i--)
		if (e[i] === `
` && (o++, o === a)) {
			r = i;
			break
		} return r === -1 ? "" : e.substring(0, r + 1)
}

function Ln(e, t) {
	const n = e?.type ?? A.LOADING,
		o = e?.content ?? "",
		r = Et(e);
	if (!Ct(n) || t == null || !r || !xt(e)) return {
		content: o,
		currentlyStreamingLineIndex: null
	};
	const a = Ke(o, 1, "end");
	if (a === "") return {
		content: t.content,
		currentlyStreamingLineIndex: 0
	};
	const i = mn(t.content, a);
	return {
		content: i.content,
		currentlyStreamingLineIndex: i.numLinesDiffed
	}
}
async function et(e) {
	if (Lt.every(l => !e.includes(l))) return e;
	const {
		unified: t
	} = await re(async () => {
		const {
			unified: l
		} = await import("./f7j18j5u52u1pnnk.js").then(f => f.zR);
		return {
			unified: l
		}
	}, __vite__mapDeps([4, 1, 5, 6, 7])), {
		CANVAS_REMARK_PLUGINS: n
	} = await re(async () => {
		const {
			CANVAS_REMARK_PLUGINS: l
		} = await import("./cmvi4veydrn5nccf.js").then(f => f.p);
		return {
			CANVAS_REMARK_PLUGINS: l
		}
	}, __vite__mapDeps([29, 16, 5, 1, 6, 4, 7, 15, 12, 11, 30])), {
		stripDirectivePlugin: o
	} = await re(async () => {
		const {
			stripDirectivePlugin: l
		} = await import("./fj6f0e38e170120r.js");
		return {
			stripDirectivePlugin: l
		}
	}, __vite__mapDeps([31, 11, 1, 5, 6, 4, 7])), {
		hiveLogDirectivePlugin: r
	} = await re(async () => {
		const {
			hiveLogDirectivePlugin: l
		} = await import("./f7hgik6cjoxksakw.js").then(f => f.k);
		return {
			hiveLogDirectivePlugin: l
		}
	}, __vite__mapDeps([11, 1, 5, 6, 4, 7])), a = t();
	a.use(r).use(o).use(n);
	const i = await a.process(e);
	return String(i).trim()
}

function zn({
	textdocVersion: e,
	clientThreadId: t
}) {
	const n = ut(),
		o = Ue(),
		r = Qe(),
		[a, i] = le.useState(!1),
		l = ct(),
		f = Ot(O => e && O?.lastCanvasAssistantMessageById[e.textdocId]),
		p = le.useRef(e?.content ?? "");
	return le.useEffect(() => {
		p.current = e?.content ?? ""
	}, [e]), {
		handleCopy: O => {
			a || (l(async () => {
				const N = await et(p.current),
					F = ft(t);
				e != null && F != null && f != null && At(n, {
					type: "copy",
					source: "mouse",
					location: "canvas",
					selectedText: N,
					messageId: f,
					serverThreadId: F
				}), Se.logButtonClick(Rt.COPY, {
					contentLength: N.length,
					textdocType: e?.type
				});
				let x = {
					"text/plain": N
				};
				if (e?.type === A.DOCUMENT) try {
					const {
						markdownToClipboardContent: T
					} = await re(async () => {
						const {
							markdownToClipboardContent: D
						} = await import("./falvn1u1m9kfl56g.js").then(R => R.g);
						return {
							markdownToClipboardContent: D
						}
					}, __vite__mapDeps([36, 4, 1, 5, 6, 7, 37, 16, 32]));
					x = T(N, [])
				} catch (T) {
					Se.logError("Error copying rich text", T)
				}
				St(x, r, O)
			}, 0), i(!0), l(() => i(!1), 2e3))
		},
		Icon: a ? lt : Dt,
		copyLabel: o.formatMessage(_n.copy)
	}
}
const _n = ot({
		copy: {
			id: "rbIYfo",
			defaultMessage: "Copy"
		}
	}),
	ke = {
		[A.CODE_BASH]: {
			filenameExtension: "sh",
			blobType: "text/x-shellscript"
		},
		[A.CODE_ZSH]: {
			filenameExtension: "zsh",
			blobType: "text/x-shellscript"
		},
		[A.CODE_JAVASCRIPT]: {
			filenameExtension: "js",
			blobType: "application/javascript"
		},
		[A.CODE_TYPESCRIPT]: {
			filenameExtension: "ts",
			blobType: "application/typescript"
		},
		[A.CODE_HTML]: {
			filenameExtension: "html",
			blobType: "text/html"
		},
		[A.CODE_CSS]: {
			filenameExtension: "css",
			blobType: "text/css"
		},
		[A.CODE_PYTHON]: {
			filenameExtension: "py",
			blobType: "text/x-python"
		},
		[A.CODE_JSON]: {
			filenameExtension: "json",
			blobType: "application/json"
		},
		[A.CODE_SQL]: {
			filenameExtension: "sql",
			blobType: "application/sql"
		},
		[A.CODE_GO]: {
			filenameExtension: "go",
			blobType: "text/x-go"
		},
		[A.CODE_YAML]: {
			filenameExtension: "yaml",
			blobType: "application/x-yaml"
		},
		[A.CODE_JAVA]: {
			filenameExtension: "java",
			blobType: "text/x-java-source"
		},
		[A.CODE_RUST]: {
			filenameExtension: "rs",
			blobType: "text/rust"
		},
		[A.CODE_CPP]: {
			filenameExtension: "cpp",
			blobType: "text/x-c++src"
		},
		[A.CODE_SWIFT]: {
			filenameExtension: "swift",
			blobType: "text/swift"
		},
		[A.CODE_PHP]: {
			filenameExtension: "php",
			blobType: "application/x-httpd-php"
		},
		[A.CODE_XML]: {
			filenameExtension: "xml",
			blobType: "application/xml"
		},
		[A.CODE_RUBY]: {
			filenameExtension: "rb",
			blobType: "text/x-ruby"
		},
		[A.CODE_HASKELL]: {
			filenameExtension: "hs",
			blobType: "text/x-haskell"
		},
		[A.CODE_KOTLIN]: {
			filenameExtension: "kt",
			blobType: "text/x-kotlin"
		},
		[A.CODE_CSHARP]: {
			filenameExtension: "cs",
			blobType: "text/x-csharp"
		},
		[A.CODE_C]: {
			filenameExtension: "c",
			blobType: "text/x-csrc"
		},
		[A.CODE_OBJECTIVEC]: {
			filenameExtension: "m",
			blobType: "text/x-objectivec"
		},
		[A.CODE_R]: {
			filenameExtension: "r",
			blobType: "text/plain"
		},
		[A.CODE_LUA]: {
			filenameExtension: "lua",
			blobType: "text/x-lua"
		},
		[A.CODE_DART]: {
			filenameExtension: "dart",
			blobType: "text/x-dart"
		},
		[A.CODE_SCALA]: {
			filenameExtension: "scala",
			blobType: "text/x-scala"
		},
		[A.CODE_PERL]: {
			filenameExtension: "pl",
			blobType: "text/x-perl"
		},
		[A.CODE_COMMONLISP]: {
			filenameExtension: "lisp",
			blobType: "text/x-common-lisp"
		},
		[A.CODE_CLOJURE]: {
			filenameExtension: "clj",
			blobType: "text/x-clojure"
		},
		[A.CODE_OCAML]: {
			filenameExtension: "ml",
			blobType: "text/x-ocaml"
		},
		[A.CODE_POWERSHELL]: {
			filenameExtension: "ps1",
			blobType: "text/x-powershell"
		},
		[A.CODE_VERILOG]: {
			filenameExtension: "v",
			blobType: "text/x-verilog"
		},
		[A.CODE_DOCKERFILE]: {
			filenameExtension: "Dockerfile",
			blobType: "text/x-dockerfile"
		},
		[A.CODE_VUE]: {
			filenameExtension: "vue",
			blobType: "text/x-vue"
		},
		[A.CODE_REACT]: {
			filenameExtension: "jsx",
			blobType: "application/javascript"
		},
		[A.CODE_OTHER]: {
			filenameExtension: "txt",
			blobType: "text/plain"
		},
		[A.DOCUMENT]: {
			filenameExtension: "md",
			blobType: "text/markdown"
		},
		[A.LOADING]: {
			filenameExtension: "txt",
			blobType: "text/plain"
		}
	};
var ve, Ve;

function bn() {
	if (Ve) return ve;
	Ve = 1;
	var e = Pt(),
		t = e(function(n, o, r) {
			return n + (r ? "_" : "") + o.toLowerCase()
		});
	return ve = t, ve
}
var gn = bn();
const Te = rt(gn);

function Pn(e) {
	const t = Ue(),
		n = Qe(),
		o = t.formatMessage({
			id: "canvas.downloadFileError",
			defaultMessage: "Failed to download file. Please try again later."
		}),
		{
			mutate: r,
			isPending: a
		} = at({
			mutationFn: async ({
				textdocId: p,
				exportType: C
			}) => {
				const O = await pt.safePost("/export_doc/canvas", {
					requestBody: {
						textdoc_id: p,
						export_type: C
					},
					skipJsonTransform: !0
				});
				if (!O.ok) throw new Error("Failed to download file");
				return O
			},
			onSuccess: async (p, {
				exportType: C
			}) => {
				const O = await p.blob(),
					N = p.headers.get("Content-Disposition"),
					F = wt(N) ?? `${Te(e.title)}.${C}`;
				ge(O, F)
			},
			onError: p => {
				n.danger(o, {
					toastId: "textdoc_download_button",
					loggingTitle: o,
					loggingDescription: "Failed to download file"
				}), dt.addError(p)
			}
		}),
		i = async p => {
			if (e.type !== A.LOADING && e.type === A.DOCUMENT) {
				let C;
				switch (p) {
					case "md":
						C = "chatgpt_canvas_md_download";
						break;
					case "pdf":
						C = "chatgpt_canvas_pdf_download";
						break;
					case "docx":
						C = "chatgpt_canvas_docx_download";
						break
				}
				if (Re.logEventWithStatsig("ChatGPT Canvas Download", C), p === "pdf" || p === "docx") r({
					textdocId: e.textdocId,
					exportType: p
				});
				else if (p === "md") {
					const {
						filenameExtension: O,
						blobType: N
					} = ke[e.type], F = await et(e.content), x = new Blob([F], {
						type: N
					});
					ge(x, `${Te(e.title)}.${O}`)
				}
			}
		}, l = () => {
			const {
				filenameExtension: p,
				blobType: C
			} = ke[e.type];
			if (e.type === A.LOADING) return;
			Re.logEventWithStatsig("ChatGPT Canvas Download", "chatgpt_canvas_code_download", {
				blobType: C
			});
			const O = new Blob([e.content], {
				type: C
			});
			ge(O, `${Te(e.title)}.${p}`)
		}, f = t.formatMessage({
			id: "canvas.download-button",
			defaultMessage: "Download"
		});
	return {
		handleFileDownload: i,
		handleBlobDownload: l,
		isLoading: a,
		downloadCopyLabel: f,
		isDocument: e.type === A.DOCUMENT
	}
}
export {
	Rn as A, Qt as C, nn as D, Ft as L, wn as M, Nt as O, In as S, Mn as a, ye as b, Pn as c, tn as d, en as e, Sn as f, Ln as g, je as h, Kt as i, zn as u
};
//# sourceMappingURL=k3n5t9a799ohqw3h.js.map