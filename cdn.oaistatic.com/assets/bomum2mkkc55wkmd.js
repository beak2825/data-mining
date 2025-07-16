import {
	fY as rt,
	fZ as ce,
	f_ as x,
	f$ as ot,
	g0 as at,
	g1 as g,
	g2 as l,
	g3 as n,
	g4 as se,
	g5 as ie,
	g6 as lt,
	g7 as nt,
	g8 as ct,
	g9 as st,
	ga as it,
	gb as ut,
	gc as ft,
	gd as vt,
	ge as dt,
	gf as gt,
	gg as mt,
	gh as xe,
	gi as ht,
	gj as pt,
	gk as Ke,
	gl as bt,
	gm as Me,
	gn as St,
	go as f,
	gp as Tt,
	gq as Ct,
	gr as wt,
	gs as Et,
	gt as yt
} from "./f7j18j5u52u1pnnk.js";
import {
	r as c,
	R as S
} from "./fyeo2h7okrqcf3nz.js";

function Le(v, t) {
	var d = bt(v);
	if (Me) {
		var m = Me(v);
		t && (m = St(m).call(m, function(p) {
			return Ke(v, p).enumerable
		})), d.push.apply(d, m)
	}
	return d
}

function $e(v) {
	for (var t = 1; t < arguments.length; t++) {
		var d = arguments[t] != null ? arguments[t] : {};
		if (t % 2) {
			var m;
			ie(m = Le(Object(d), !0)).call(m, function(h) {
				mt(v, h, d[h])
			})
		} else if (xe) ht(v, xe(d));
		else {
			var p;
			ie(p = Le(Object(d))).call(p, function(h) {
				pt(v, h, Ke(d, h))
			})
		}
	}
	return v
}
var _t = function() {
		return 1 / 0
	},
	De = 17,
	Ht = "bottom",
	C = "top",
	Ve = 1,
	Bt = 34,
	je = {};

function Nt(v, t) {
	return v(), gt(v, t)
}

function Fe(v) {
	var t = v.mode,
		d = v.target,
		m = d.offsetHeight,
		p = d.scrollHeight,
		h = d.scrollTop,
		E = p - h - m < Ve,
		r = h < Ve,
		_ = t === C ? r : E,
		M = t !== C ? r : E;
	return {
		atBottom: E,
		atEnd: _,
		atStart: M,
		atTop: r
	}
}

function U(v, t) {
	return v === (t === C ? 0 : "100%")
}
var ue = function(t) {
	var d = t.checkInterval,
		m = t.children,
		p = t.debounce,
		h = t.debug,
		E = t.initialScrollBehavior,
		r = t.mode,
		_ = t.nonce,
		M = t.scroller,
		s = c.useMemo(function() {
			return rt("<ScrollToBottom>", {
				force: h
			})
		}, [h]);
	r = r === C ? C : Ht;
	var L = c.useRef(0),
		W = c.useRef(E),
		We = ce(r === C ? 0 : "100%"),
		J = x(We, 3),
		O = J[0],
		Y = J[1],
		$ = J[2],
		Ye = ce(null),
		Q = x(Ye, 3),
		b = Q[0],
		ve = Q[1],
		w = Q[2],
		X = c.useRef(0),
		A = c.useRef(0),
		q = c.useRef(0),
		qe = c.useState(!0),
		de = x(qe, 2),
		ge = de[0],
		me = de[1],
		ze = c.useState(!0),
		he = x(ze, 2),
		pe = he[0],
		be = he[1],
		Ze = c.useState(!0),
		Se = x(Ze, 2),
		Te = Se[0],
		Ce = Se[1],
		Ge = c.useState(!1),
		we = x(Ge, 2),
		Ee = we[0],
		ye = we[1],
		Je = ce(!0),
		ee = x(Je, 3),
		te = ee[0],
		H = ee[1],
		B = ee[2],
		K = c.useRef([]),
		_e = c.useCallback(function(e) {
			var a = w.current;
			return K.current.push(e), a && e({
					scrollTop: a.scrollTop
				}),
				function() {
					var o = K.current,
						i = ot(o).call(o, e);
					~i && at(o).call(o, i, 1)
				}
		}, [K, w]),
		re = c.useCallback(function() {
			var e = $.current;
			s(function() {
				var a;
				return g(a = ["%cSpineTo%c: %conEnd%c is fired."]).call(a, l(n("magenta")), l(n("orange")), [{
					animateTo: e
				}])
			}), L.current = se(), U(e, r) || H(!1), Y(null)
		}, [$, s, L, r, Y, H]),
		N = c.useCallback(function(e) {
			var a = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {},
				o = a.behavior,
				i = w.current;
			if (typeof e != "number" && e !== "100%") return console.warn('react-scroll-to-bottom: Arguments passed to scrollTo() must be either number or "100%".');
			s(function() {
				var u;
				return [g(u = ["%cscrollTo%c: Will scroll to %c".concat(typeof e == "number" ? e + "px" : e.replace(/%/g, "%%"), "%c")]).call(u, l(n("lime", "")), l(n("purple"))), {
					behavior: o,
					nextAnimateTo: e,
					target: i
				}]
			}), o === "auto" ? (re(), i && (i.scrollTop = e === "100%" ? i.scrollHeight - i.offsetHeight : e)) : (o !== "smooth" && console.warn('react-scroll-to-bottom: Please set "behavior" when calling "scrollTo". In future versions, the default behavior will be changed from smooth scrolling to discrete scrolling to align with HTML Standard.'), Y(e)), U(e, r) && (s(function() {
				var u;
				return [g(u = ["%cscrollTo%c: Scrolling to end, will set sticky to %ctrue%c."]).call(u, l(n("lime", "")), l(n("purple"))), [{
					mode: r,
					nextAnimateTo: e
				}]]
			}), H(!0))
		}, [s, re, r, Y, H, w]),
		D = c.useCallback(function() {
			var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {},
				a = e.behavior;
			s(function() {
				var o;
				return g(o = ["%cscrollToBottom%c: Called"]).call(o, l(n("yellow", "")))
			}), a !== "smooth" && console.warn('react-scroll-to-bottom: Please set "behavior" when calling "scrollToBottom". In future versions, the default behavior will be changed from smooth scrolling to discrete scrolling to align with HTML Standard.'), N("100%", {
				behavior: a || "smooth"
			})
		}, [s, N]),
		V = c.useCallback(function() {
			var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {},
				a = e.behavior;
			s(function() {
				var o;
				return g(o = ["%cscrollToTop%c: Called"]).call(o, l(n("yellow", "")))
			}), a !== "smooth" && console.warn('react-scroll-to-bottom: Please set "behavior" when calling "scrollToTop". In future versions, the default behavior will be changed from smooth scrolling to discrete scrolling to align with HTML Standard.'), N(0, {
				behavior: a || "smooth"
			})
		}, [s, N]),
		He = c.useCallback(function() {
			var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {},
				a = e.behavior;
			s(function() {
				var i;
				return g(i = ["%cscrollToEnd%c: Called"]).call(i, l(n("yellow", "")))
			}), a !== "smooth" && console.warn('react-scroll-to-bottom: Please set "behavior" when calling "scrollToEnd". In future versions, the default behavior will be changed from smooth scrolling to discrete scrolling to align with HTML Standard.');
			var o = {
				behavior: a || "smooth"
			};
			r === C ? V(o) : D(o)
		}, [s, r, D, V]),
		Be = c.useCallback(function() {
			var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {},
				a = e.behavior;
			s(function() {
				var i;
				return g(i = ["%cscrollToStart%c: Called"]).call(i, l(n("yellow", "")))
			}), a !== "smooth" && console.warn('react-scroll-to-bottom: Please set "behavior" when calling "scrollToStart". In future versions, the default behavior will be changed from smooth scrolling to discrete scrolling to align with HTML Standard.');
			var o = {
				behavior: a || "smooth"
			};
			r === C ? D(o) : V(o)
		}, [s, r, D, V]),
		z = c.useCallback(function() {
			var e = w.current;
			if (e) {
				if (W.current === "auto") {
					s(function() {
						var P;
						return g(P = ["%ctarget changed%c: Initial scroll"]).call(P, l(n("blue")))
					}), e.scrollTop = r === C ? 0 : e.scrollHeight - e.offsetHeight, W.current = !1;
					return
				}
				var a = X.current,
					o = e.offsetHeight,
					i = e.scrollHeight,
					u = e.scrollTop,
					y = r === C ? 0 : Math.max(0, i - o - u),
					k = Math.max(0, a - u),
					Z = M({
						maxValue: y,
						minValue: k,
						offsetHeight: o,
						scrollHeight: i,
						scrollTop: u
					}),
					R = Math.max(0, Math.min(y, Z)),
					T;
				r === C || R !== y ? T = u + R : T = "100%", s(function() {
					var P, j, F;
					return [g(P = [g(j = g(F = "%cscrollToSticky%c: Will animate from %c".concat(a, "px%c to %c")).call(F, typeof T == "number" ? T + "px" : T.replace(/%/g, "%%"), "%c (%c")).call(j, (T === "100%" ? y : T) + a, "px%c)")]).call(P, l(n("orange")), l(n("purple")), l(n("purple")), l(n("purple"))), {
						animateFrom: a,
						maxValue: y,
						minValue: k,
						nextAnimateTo: T,
						nextValue: R,
						offsetHeight: o,
						rawNextValue: Z,
						scrollHeight: i,
						scrollTop: u
					}]
				}), N(T, {
					behavior: "smooth"
				})
			}
		}, [X, s, r, M, N, w]),
		Qe = c.useCallback(function(e) {
			var a, o = e.timeStampLow,
				i = $.current,
				u = w.current,
				y = i !== null;
			if (!(o <= L.current || !u)) {
				var k = Fe({
						mode: r,
						target: u
					}),
					Z = k.atBottom,
					R = k.atEnd,
					T = k.atStart,
					P = k.atTop;
				me(Z), be(R), ye(T), Ce(P);
				var j = u.offsetHeight,
					F = u.scrollHeight,
					Re = A.current,
					Oe = q.current,
					le = j !== Re,
					ne = F !== Oe;
				if (le && (A.current = j), ne && (q.current = F), !le && !ne) {
					var G = y && U(i, r) || R;
					B.current !== G && (s(function() {
						var I, ke, Pe, Ie;
						return [g(I = ["%conScroll%c: %csetSticky%c(%c".concat(G, "%c)")]).call(I, l(n("red")), l(n("red")), l(n("purple"))), g(ke = [g(Pe = g(Ie = "(animating = %c".concat(y, "%c && isEnd = %c")).call(Ie, U(i, r), "%c) || atEnd = %c")).call(Pe, R, "%c")]).call(ke, l(n("purple")), l(n("purple")), l(n("purple")), [{
							animating: y,
							animateTo: i,
							atEnd: R,
							mode: r,
							offsetHeight: u.offsetHeight,
							scrollHeight: u.scrollHeight,
							sticky: B.current,
							nextSticky: G
						}])]
					}), H(G))
				} else B.current && (s(function() {
					var I;
					return [g(I = ["%conScroll%c: Size changed while sticky, calling %cscrollToSticky()%c"]).call(I, l(n("red")), l(n("orange")), [{
						offsetHeightChanged: le,
						scrollHeightChanged: ne
					}]), {
						nextOffsetHeight: j,
						prevOffsetHeight: Re,
						nextScrollHeight: F,
						prevScrollHeight: Oe
					}]
				}), z());
				var tt = u.scrollTop;
				ie(a = K.current).call(a, function(I) {
					return I({
						scrollTop: tt
					})
				})
			}
		}, [$, s, L, r, A, q, K, z, me, be, ye, Ce, H, B, w]);
	c.useEffect(function() {
		if (b) {
			var e = !1,
				a = Nt(function() {
					var o = w.current,
						i = $.current !== null;
					B.current ? Fe({
						mode: r,
						target: o
					}).atEnd ? e = !1 : e ? se() - e > Bt && (i || (X.current = o.scrollTop, s(function() {
						var u;
						return g(u = ["%cInterval check%c: Should sticky but not at end, calling %cscrollToSticky()%c to scroll"]).call(u, l(n("navy")), l(n("orange")))
					}), z()), e = !1) : e = se() : o.scrollHeight <= o.offsetHeight && !B.current && (s(function() {
						var u;
						return [g(u = ["%cInterval check%c: Container is emptied, setting sticky back to %ctrue%c"]).call(u, l(n("navy")), l(n("purple"))), [{
							offsetHeight: o.offsetHeight,
							scrollHeight: o.scrollHeight,
							sticky: B.current
						}]]
					}), H(!0))
				}, Math.max(De, d) || De);
			return function() {
				return clearInterval(a)
			}
		}
	}, [$, d, s, r, z, H, B, b, w]);
	var Ne = c.useMemo(function() {
			var e = je[_] || (je[_] = lt({
				key: "react-scroll-to-bottom--css-" + nt(),
				nonce: _
			}));
			return function(a) {
				return e.css(a) + ""
			}
		}, [_]),
		Xe = c.useMemo(function() {
			return {
				observeScrollPosition: _e,
				setTarget: ve,
				styleToClassName: Ne
			}
		}, [_e, ve, Ne]),
		oe = c.useMemo(function() {
			return {
				atBottom: ge,
				atEnd: pe,
				atStart: Ee,
				atTop: Te,
				mode: r
			}
		}, [ge, pe, Ee, Te, r]),
		ae = c.useMemo(function() {
			var e = O !== null;
			return {
				animating: e,
				animatingToEnd: e && U(O, r),
				sticky: te
			}
		}, [O, r, te]),
		Ae = c.useMemo(function() {
			return $e($e({}, oe), ae)
		}, [oe, ae]),
		et = c.useMemo(function() {
			return {
				scrollTo: N,
				scrollToBottom: D,
				scrollToEnd: He,
				scrollToStart: Be,
				scrollToTop: V
			}
		}, [N, D, He, Be, V]);
	return c.useEffect(function() {
		if (b) {
			var e = function() {
				q.current = b.scrollHeight
			};
			return b.addEventListener("focus", e, {
					capture: !0,
					passive: !0
				}),
				function() {
					return b.removeEventListener("focus", e)
				}
		}
	}, [b]), s(function() {
		var e;
		return [g(e = ["%cRender%c: Render"]).call(e, l(n("cyan", ""))), {
			animateTo: O,
			animating: O !== null,
			sticky: te,
			target: b
		}]
	}), S.createElement(ct.Provider, {
		value: Xe
	}, S.createElement(st.Provider, {
		value: et
	}, S.createElement(it.Provider, {
		value: Ae
	}, S.createElement(ut.Provider, {
		value: oe
	}, S.createElement(ft.Provider, {
		value: ae
	}, m, b && S.createElement(vt, {
		debounce: p,
		name: "scroll",
		onEvent: Qe,
		target: b
	}), b && O !== null && S.createElement(dt, {
		name: "scrollTop",
		onEnd: re,
		target: b,
		value: O
	}))))))
};
ue.defaultProps = {
	checkInterval: 100,
	children: void 0,
	debounce: 17,
	debug: void 0,
	initialScrollBehavior: "smooth",
	mode: void 0,
	nonce: void 0,
	scroller: _t
};
ue.propTypes = {
	checkInterval: f.number,
	children: f.any,
	debounce: f.number,
	debug: f.bool,
	initialScrollBehavior: f.oneOf(["auto", "smooth"]),
	mode: f.oneOf(["bottom", "top"]),
	nonce: f.string,
	scroller: f.func
};
var Rt = {
		position: "relative"
	},
	fe = function(t) {
		var d = t.children,
			m = t.className,
			p = t.followButtonClassName,
			h = t.scrollViewClassName,
			E = Tt()(Rt);
		return S.createElement("div", {
			className: Ct(E, (m || "") + "")
		}, S.createElement(wt, {
			className: (h || "") + ""
		}, d), S.createElement(Et, {
			className: (p || "") + ""
		}))
	};
fe.defaultProps = {
	children: void 0,
	className: void 0,
	followButtonClassName: void 0,
	scrollViewClassName: void 0
};
fe.propTypes = {
	children: f.any,
	className: f.string,
	followButtonClassName: f.string,
	scrollViewClassName: f.string
};
var Ue = function(t) {
	var d = t.checkInterval,
		m = t.children,
		p = t.className,
		h = t.debounce,
		E = t.debug,
		r = t.followButtonClassName,
		_ = t.initialScrollBehavior,
		M = t.mode,
		s = t.nonce,
		L = t.scroller,
		W = t.scrollViewClassName;
	return S.createElement(ue, {
		checkInterval: d,
		debounce: h,
		debug: E,
		initialScrollBehavior: _,
		mode: M,
		nonce: s,
		scroller: L
	}, S.createElement(fe, {
		className: p,
		followButtonClassName: r,
		scrollViewClassName: W
	}, m))
};
Ue.defaultProps = {
	checkInterval: void 0,
	children: void 0,
	className: void 0,
	debounce: void 0,
	debug: void 0,
	followButtonClassName: void 0,
	initialScrollBehavior: "smooth",
	mode: void 0,
	nonce: void 0,
	scroller: void 0,
	scrollViewClassName: void 0
};
Ue.propTypes = {
	checkInterval: f.number,
	children: f.any,
	className: f.string,
	debounce: f.number,
	debug: f.bool,
	followButtonClassName: f.string,
	initialScrollBehavior: f.oneOf(["auto", "smooth"]),
	mode: f.oneOf(["bottom", "top"]),
	nonce: f.string,
	scroller: f.func,
	scrollViewClassName: f.string
};
yt();
export {
	Ue as B
};
//# sourceMappingURL=bomum2mkkc55wkmd.js.map