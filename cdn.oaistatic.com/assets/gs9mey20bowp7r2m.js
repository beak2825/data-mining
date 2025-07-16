import {
	g as D
} from "./fyeo2h7okrqcf3nz.js";
import {
	fw as w,
	ao as G,
	ap as P,
	aq as H,
	lD as J,
	lE as V,
	ak as W,
	iv as Z,
	iW as $,
	b7 as B
} from "./egb2c0f6p1ew61vt.js";
import {
	lh as M,
	li as K,
	lj as Q
} from "./f7j18j5u52u1pnnk.js";
var I, C;

function X() {
	if (C) return I;
	C = 1;
	var r = w(),
		a = G(),
		t = "[object RegExp]";

	function f(i) {
		return a(i) && r(i) == t
	}
	return I = f, I
}
var z, k;

function Y() {
	if (k) return z;
	k = 1;
	var r = X(),
		a = P(),
		t = H(),
		f = t && t.isRegExp,
		i = f ? a(f) : r;
	return z = i, z
}
var T, y;

function ee() {
	if (y) return T;
	y = 1;
	var r = J(),
		a = r("length");
	return T = a, T
}
var m, A;

function re() {
	if (A) return m;
	A = 1;
	var r = "\\ud800-\\udfff",
		a = "\\u0300-\\u036f",
		t = "\\ufe20-\\ufe2f",
		f = "\\u20d0-\\u20ff",
		i = a + t + f,
		S = "\\ufe0e\\ufe0f",
		h = "[" + r + "]",
		v = "[" + i + "]",
		l = "\\ud83c[\\udffb-\\udfff]",
		E = "(?:" + v + "|" + l + ")",
		R = "[^" + r + "]",
		x = "(?:\\ud83c[\\udde6-\\uddff]){2}",
		q = "[\\ud800-\\udbff][\\udc00-\\udfff]",
		n = "\\u200d",
		o = E + "?",
		d = "[" + S + "]?",
		c = "(?:" + n + "(?:" + [R, x, q].join("|") + ")" + d + o + ")*",
		e = d + o + c,
		_ = "(?:" + [R + v + "?", v, x, q, h].join("|") + ")",
		g = RegExp(l + "(?=" + l + ")|" + _ + e, "g");

	function u(s) {
		for (var b = g.lastIndex = 0; g.test(s);) ++b;
		return b
	}
	return m = u, m
}
var p, F;

function ie() {
	if (F) return p;
	F = 1;
	var r = ee(),
		a = M(),
		t = re();

	function f(i) {
		return a(i) ? t(i) : r(i)
	}
	return p = f, p
}
var U, L;

function ae() {
	if (L) return U;
	L = 1;
	var r = V(),
		a = K(),
		t = M(),
		f = W(),
		i = Y(),
		S = ie(),
		h = Q(),
		v = Z(),
		l = $(),
		E = 30,
		R = "...",
		x = /\w*$/;

	function q(n, o) {
		var d = E,
			c = R;
		if (f(o)) {
			var e = "separator" in o ? o.separator : e;
			d = "length" in o ? v(o.length) : d, c = "omission" in o ? r(o.omission) : c
		}
		n = l(n);
		var _ = n.length;
		if (t(n)) {
			var g = h(n);
			_ = g.length
		}
		if (d >= _) return n;
		var u = d - S(c);
		if (u < 1) return c;
		var s = g ? a(g, 0, u).join("") : n.slice(0, u);
		if (e === void 0) return s + c;
		if (g && (u += s.length - u), i(e)) {
			if (n.slice(u).search(e)) {
				var b, N = s;
				for (e.global || (e = RegExp(e.source, l(x.exec(e)) + "g")), e.lastIndex = 0; b = e.exec(N);) var j = b.index;
				s = s.slice(0, j === void 0 ? u : j)
			}
		} else if (n.indexOf(r(e), u) != u) {
			var O = s.lastIndexOf(e);
			O > -1 && (s = s.slice(0, O))
		}
		return s + c
	}
	return U = q, U
}
var ne = ae();
const fe = D(ne);
B.div`flex h-full items-center justify-center pb-8 text-sm text-token-text-tertiary rounded-lg border border-token-border-default`;
export {
	fe as t
};
//# sourceMappingURL=gs9mey20bowp7r2m.js.map