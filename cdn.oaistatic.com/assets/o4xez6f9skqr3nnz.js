const __vite__mapDeps = (i, m = __vite__mapDeps, d = (m.f || (m.f = ["assets/bo7z9uj7u3knpwgt.js", "assets/fyeo2h7okrqcf3nz.js", "assets/egb2c0f6p1ew61vt.js", "assets/root-dql6y2cb.css", "assets/f7j18j5u52u1pnnk.js", "assets/conversation-small-k592qa8k.css", "assets/np62wv8wj4i0jtdl.js", "assets/falvn1u1m9kfl56g.js", "assets/lqc3mxovgoy4h7eq.js", "assets/ixsisjuxwij5x7d3.js", "assets/pc2givv05uuq8g6l.js", "assets/ia4gjlhup29rqu2j.js", "assets/ha8fmsbxx7xv171r.js", "assets/dlxldtpg3t60aqlu.js"]))) => i.map(i => d[i]);
import {
	R as wn,
	r as ft,
	w as Ca,
	j as Tt,
	M as ui,
	A as ql,
	n as hf
} from "./fyeo2h7okrqcf3nz.js";
import {
	T as df,
	cN as pf,
	c_ as Zs,
	dT as gf,
	hr as mf,
	w as al,
	B as ol,
	q as vf,
	aS as bf,
	b6 as wf,
	hp as yf,
	D as xf
} from "./egb2c0f6p1ew61vt.js";
import {
	u3 as mu,
	u4 as Ue,
	u5 as vu,
	p_ as Nf,
	u6 as Lf,
	cG as Af,
	u7 as Sf,
	u8 as sl,
	u9 as _f
} from "./f7j18j5u52u1pnnk.js";
import {
	s as Pf,
	d as zl,
	S as kf,
	b as Cf
} from "./np62wv8wj4i0jtdl.js";
const Rs = "#3B82F6",
	_r = 12;

function Ma(e, t) {
	return e.width / (t.widthEmu * Ue)
}

function If(e, t, n) {
	return t >= e.x && t <= e.x + e.width && n >= e.y && n <= e.y + e.height
}

function Ul(e, t, n, i, o) {
	if (!e) return null;
	const a = Wl(e, t, n);
	return ["nw", "ne", "sw", "se"].find(u => If(a[u], i, o)) ?? null
}

function Hl(e, t, n, i) {
	return [...e.elements].sort((o, a) => a.zIndex - o.zIndex).find(({
		bbox: o
	}) => {
		if (!o) return !1;
		const {
			xEmu: a,
			yEmu: u,
			widthEmu: c,
			heightEmu: f
		} = o, p = a * Ue, v = u * Ue, m = c * Ue, y = f * Ue;
		return n >= p && n <= p + m && i >= v && i <= v + y
	}) ?? null
}

function Ff(e, t, n, i, o, a) {
	e.save(), e.lineJoin = "miter";
	const u = (c, f, p, v = null) => {
		const {
			x: m,
			y,
			width: d,
			height: I
		} = mu(c, t, a);
		v && e.setLineDash(v), e.lineWidth = f, e.strokeStyle = p, e.strokeRect(m, y, d, I), e.setLineDash([])
	};
	if (n && n !== i && u(n, 2, Rs), i && !o) {
		u(i, 2, Rs);
		const c = Wl(i, t, a);
		Object.values(c).forEach(f => {
			e.fillStyle = "#FFFFFF", e.strokeStyle = Rs, e.lineWidth = 2, e.fillRect(f.x, f.y, f.width, f.height), e.strokeRect(f.x, f.y, f.width, f.height)
		})
	}
	e.restore()
}

function Wl(e, t, n) {
	const {
		x: i,
		y: o,
		width: a,
		height: u
	} = mu(e, t, n), c = _r / 2;
	return {
		nw: new DOMRect(i - c, o - c, _r, _r),
		ne: new DOMRect(i + a - c, o - c, _r, _r),
		sw: new DOMRect(i - c, o + u - c, _r, _r),
		se: new DOMRect(i + a - c, o + u - c, _r, _r)
	}
}
const jf = wn[typeof document < "u" && document.createElement !== void 0 ? "useLayoutEffect" : "useEffect"],
	Ef = e => {
		const t = ft.useRef(e);
		return ft.useEffect(() => {
			t.current = e
		}), t
	};

function Mf() {}

function Df(e, t, n = {}) {
	const i = Rf(n.polyfill),
		o = Ef(t);
	return jf(() => {
		let a = !1;
		const u = e && "current" in e ? e.current : e;
		if (!u) return Mf;

		function c(f, p) {
			a || o.current(f, p)
		}
		return i.subscribe(u, c), () => {
			a = !0, i.unsubscribe(u, c)
		}
	}, [e, i, o]), i.observer
}

function Of(e) {
	let t = !1,
		n = [];
	const i = new Map,
		o = new(e || window.ResizeObserver)((a, u) => {
			n = n.concat(a);

			function c() {
				const f = new Set;
				for (let p = 0; p < n.length; p++) {
					if (f.has(n[p].target)) continue;
					f.add(n[p].target);
					const v = i.get(n[p].target);
					v?.forEach(m => m(n[p], u))
				}
				n = [], t = !1
			}
			t || window.requestAnimationFrame(c), t = !0
		});
	return {
		observer: o,
		subscribe(a, u) {
			var c;
			o.observe(a);
			const f = (c = i.get(a)) !== null && c !== void 0 ? c : [];
			f.push(u), i.set(a, f)
		},
		unsubscribe(a, u) {
			var c;
			const f = (c = i.get(a)) !== null && c !== void 0 ? c : [];
			if (f.length === 1) {
				o.unobserve(a), i.delete(a);
				return
			}
			const p = f.indexOf(u);
			p !== -1 && f.splice(p, 1), i.set(a, f)
		}
	}
}
let Bs;
const Rf = e => Bs || (Bs = Of(e));

function Bf(e, t, n, i) {
	var o = this,
		a = ft.useRef(null),
		u = ft.useRef(0),
		c = ft.useRef(0),
		f = ft.useRef(null),
		p = ft.useRef([]),
		v = ft.useRef(),
		m = ft.useRef(),
		y = ft.useRef(e),
		d = ft.useRef(!0);
	y.current = e;
	var I = typeof window < "u",
		A = !t && t !== 0 && I;
	if (typeof e != "function") throw new TypeError("Expected a function");
	t = +t || 0;
	var F = !!(n = n || {}).leading,
		_ = !("trailing" in n) || !!n.trailing,
		j = "maxWait" in n,
		z = "debounceOnServer" in n && !!n.debounceOnServer,
		$ = j ? Math.max(+n.maxWait || 0, t) : null;
	ft.useEffect(function() {
		return d.current = !0,
			function() {
				d.current = !1
			}
	}, []);
	var rt = ft.useMemo(function() {
		var lt = function(q) {
				var T = p.current,
					ct = v.current;
				return p.current = v.current = null, u.current = q, c.current = c.current || q, m.current = y.current.apply(ct, T)
			},
			Y = function(q, T) {
				A && cancelAnimationFrame(f.current), f.current = A ? requestAnimationFrame(q) : setTimeout(q, T)
			},
			R = function(q) {
				if (!d.current) return !1;
				var T = q - a.current;
				return !a.current || T >= t || T < 0 || j && q - u.current >= $
			},
			K = function(q) {
				return f.current = null, _ && p.current ? lt(q) : (p.current = v.current = null, m.current)
			},
			ot = function q() {
				var T = Date.now();
				if (F && c.current === u.current && P(), R(T)) return K(T);
				if (d.current) {
					var ct = t - (T - a.current),
						st = j ? Math.min(ct, $ - (T - u.current)) : ct;
					Y(q, st)
				}
			},
			P = function() {
				i && i({})
			},
			C = function() {
				if (I || z) {
					var q = Date.now(),
						T = R(q);
					if (p.current = [].slice.call(arguments), v.current = o, a.current = q, T) {
						if (!f.current && d.current) return u.current = a.current, Y(ot, t), F ? lt(a.current) : m.current;
						if (j) return Y(ot, t), lt(a.current)
					}
					return f.current || Y(ot, t), m.current
				}
			};
		return C.cancel = function() {
			f.current && (A ? cancelAnimationFrame(f.current) : clearTimeout(f.current)), u.current = 0, p.current = a.current = v.current = f.current = null
		}, C.isPending = function() {
			return !!f.current
		}, C.flush = function() {
			return f.current ? K(Date.now()) : m.current
		}, C
	}, [F, j, t, $, _, A, I, z, i]);
	return rt
}

function Tf(e, t) {
	return e === t
}

function qf(e, t, n) {
	var i = Tf,
		o = ft.useRef(e),
		a = ft.useState({})[1],
		u = Bf(ft.useCallback(function(f) {
			o.current = f, a({})
		}, [a]), t, n, a),
		c = ft.useRef(e);
	return i(c.current, e) || (u(e), c.current = e), [o.current, u]
}

function zf(e, t = 100) {
	const [n, i] = ft.useState({
		width: 0,
		height: 0
	});
	Df(e, a => {
		const {
			width: u,
			height: c
		} = a.contentRect;
		i({
			width: u,
			height: c
		})
	});
	const [o] = qf(n, t);
	return o
}
const Uf = (e, t, n, i, o, a, u) => ft.useCallback(c => {
		if (!e || !t || !n.current || !i.current) return;
		const f = c.currentTarget.getBoundingClientRect(),
			p = Ma(f, t),
			v = n.current.getBoundingClientRect(),
			m = i.current.getBoundingClientRect(),
			y = m.left - v.left,
			d = m.top - v.top,
			I = (c.clientX - f.left) / p,
			A = (c.clientY - f.top) / p,
			F = a.find(lt => I >= lt.x && I <= lt.x + lt.width && A >= lt.y && A <= lt.y + lt.height);
		if (!F) return;
		if (c.stopPropagation(), F.action === "ppaction://hlinksldjump") {
			const lt = F.url.match(/slide(\d+)\.xml$/);
			if (lt) {
				const Y = Number(lt[1]) - 1;
				Y >= 0 && Y < e.slides.length && u(Y)
			}
			return
		}
		const _ = F.x * p + y,
			j = (F.x + F.width) * p + y,
			z = (F.y + F.height / 2) * p + d,
			$ = v.width - j >= _ ? "right" : "left",
			rt = $ === "right" ? j : _;
		o({
			url: F.url,
			x: rt,
			y: z,
			placement: $
		})
	}, [e, t, a, i, o, n, u]),
	Hf = (e, t, n, i, o, a, u, c, f) => ft.useCallback(p => {
		if (!e || !t || !n.current || !i.current) return;
		const v = p.currentTarget.getBoundingClientRect(),
			m = Ma(v, t),
			y = (p.clientX - v.left) / m,
			d = (p.clientY - v.top) / m;
		if (!o) return;
		let I = "move",
			A = null;
		a && (A = Ul(a, e, t, y, d), A && (I = "resize"));
		const F = I === "move" ? Hl(t, e, y, d) : a;
		if (!F) {
			u(null), c(null);
			return
		}
		u(F), c(F);
		const {
			x: _,
			y: j,
			width: z,
			height: $
		} = mu(F, e, t);
		f({
			element: F,
			origin: {
				x: _,
				y: j,
				w: z,
				h: $
			},
			mouseStart: {
				x: y,
				y: d
			},
			mode: I,
			corner: A,
			preserveRatio: p.shiftKey,
			moved: !1
		})
	}, [e, t, a, o, i, f, c, u, n]),
	Wf = (e, t, n, i, o, a, u, c) => ft.useCallback(f => {
		if (!e || !t || !n.current) return;
		if (i) {
			if (!i.element.bbox) return;
			const A = f.currentTarget.getBoundingClientRect(),
				F = Ma(A, t),
				_ = (f.clientX - A.left) / F,
				j = (f.clientY - A.top) / F,
				z = _ - i.mouseStart.x,
				$ = j - i.mouseStart.y;
			if (i.mode === "move") {
				if (z === 0 && $ === 0) return;
				i.element.bbox.xEmu = (i.origin.x + z) / Ue, i.element.bbox.yEmu = (i.origin.y + $) / Ue
			} else if (i.mode === "resize") {
				const rt = i.preserveRatio || f.shiftKey,
					{
						x: lt,
						y: Y,
						w: R,
						h: K
					} = i.origin;
				let ot = lt,
					P = Y,
					C = R,
					q = K;
				const T = R / K;
				switch (i.corner) {
					case "nw":
						ot = lt + z, P = Y + $, C = R - z, q = K - $;
						break;
					case "ne":
						P = Y + $, C = R + z, q = K - $;
						break;
					case "sw":
						ot = lt + z, C = R - z, q = K + $;
						break;
					case "se":
					default:
						C = R + z, q = K + $;
						break
				}
				rt && (Math.abs(C / q) > T ? q = C / T : C = q * T, (i.corner === "nw" || i.corner === "sw") && (ot = lt + (R - C)), (i.corner === "nw" || i.corner === "ne") && (P = Y + (K - q))), C = Math.max(1, C), q = Math.max(1, q), i.element.bbox.xEmu = ot / Ue, i.element.bbox.yEmu = P / Ue, i.element.bbox.widthEmu = C / Ue, i.element.bbox.heightEmu = q / Ue
			}
			o({
				...i,
				moved: !0
			});
			return
		}
		const p = f.currentTarget.getBoundingClientRect(),
			v = Ma(p, t),
			m = (f.clientX - p.left) / v,
			y = (f.clientY - p.top) / v,
			d = Ul(a, e, t, m, y);
		d ? (n.current.style.cursor = `${d}-resize`, u(a)) : (n.current.style.cursor = "", u(Hl(t, e, m, y)));
		const I = c.find(A => m >= A.x && m <= A.x + A.width && y >= A.y && y <= A.y + A.height);
		n.current.style.cursor = I ? "pointer" : ""
	}, [e, t, i, a, n, u, o, c]),
	Vf = (e, t, n) => {
		ft.useEffect(() => {
			if (!e.current) return;
			const i = e.current;
			if (i.querySelectorAll("video[data-slide-video]").forEach(a => {
					const u = a.dataset.url;
					u && (URL.revokeObjectURL(u), a.remove())
				}), !t) return;
			const o = Ma(i.getBoundingClientRect(), t);
			t.elements.filter(a => a.video).forEach(a => {
				if (!a.bbox) return;
				const {
					xEmu: u,
					yEmu: c,
					widthEmu: f,
					heightEmu: p
				} = a.bbox;
				if (!a.video) return;
				const v = new Blob([a.video.data], {
						type: a.video.contentType
					}),
					m = URL.createObjectURL(v),
					y = document.createElement("video");
				y.src = m, y.dataset.slideVideo = "true", y.dataset.url = m, y.autoplay = !0, y.loop = !0, y.muted = !0, y.playsInline = !0, Object.assign(y.style, {
					position: "absolute",
					left: `${u*Ue*o}px`,
					top: `${c*Ue*o}px`,
					width: `${f*Ue*o}px`,
					height: `${p*Ue*o}px`,
					objectFit: "cover",
					zIndex: a.zIndex.toString(),
					pointerEvents: "none"
				}), i.appendChild(y)
			})
		}, [t, n, e])
	},
	Vo = typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u";

function Xi(e) {
	const t = Object.prototype.toString.call(e);
	return t === "[object Window]" || t === "[object global]"
}

function bu(e) {
	return "nodeType" in e
}

function Sn(e) {
	var t, n;
	return e ? Xi(e) ? e : bu(e) && (t = (n = e.ownerDocument) == null ? void 0 : n.defaultView) != null ? t : window : window
}

function wu(e) {
	const {
		Document: t
	} = Sn(e);
	return e instanceof t
}

function Ra(e) {
	return Xi(e) ? !1 : e instanceof Sn(e).HTMLElement
}

function Vl(e) {
	return e instanceof Sn(e).SVGElement
}

function Ki(e) {
	return e ? Xi(e) ? e.document : bu(e) ? wu(e) ? e : Ra(e) || Vl(e) ? e.ownerDocument : document : document : document
}
const Gr = Vo ? ft.useLayoutEffect : ft.useEffect;

function yu(e) {
	const t = ft.useRef(e);
	return Gr(() => {
		t.current = e
	}), ft.useCallback(function() {
		for (var n = arguments.length, i = new Array(n), o = 0; o < n; o++) i[o] = arguments[o];
		return t.current == null ? void 0 : t.current(...i)
	}, [])
}

function Gf() {
	const e = ft.useRef(null),
		t = ft.useCallback((i, o) => {
			e.current = setInterval(i, o)
		}, []),
		n = ft.useCallback(() => {
			e.current !== null && (clearInterval(e.current), e.current = null)
		}, []);
	return [t, n]
}

function xu(e, t) {
	t === void 0 && (t = [e]);
	const n = ft.useRef(e);
	return Gr(() => {
		n.current !== e && (n.current = e)
	}, t), n
}

function Ba(e, t) {
	const n = ft.useRef();
	return ft.useMemo(() => {
		const i = e(n.current);
		return n.current = i, i
	}, [...t])
}

function Qs(e) {
	const t = yu(e),
		n = ft.useRef(null),
		i = ft.useCallback(o => {
			o !== n.current && t?.(o, n.current), n.current = o
		}, []);
	return [n, i]
}

function tu(e) {
	const t = ft.useRef();
	return ft.useEffect(() => {
		t.current = e
	}, [e]), t.current
}
let Ts = {};

function Nu(e, t) {
	return ft.useMemo(() => {
		if (t) return t;
		const n = Ts[e] == null ? 0 : Ts[e] + 1;
		return Ts[e] = n, e + "-" + n
	}, [e, t])
}

function Gl(e) {
	return function(t) {
		for (var n = arguments.length, i = new Array(n > 1 ? n - 1 : 0), o = 1; o < n; o++) i[o - 1] = arguments[o];
		return i.reduce((a, u) => {
			const c = Object.entries(u);
			for (const [f, p] of c) {
				const v = a[f];
				v != null && (a[f] = v + e * p)
			}
			return a
		}, {
			...t
		})
	}
}
const Wi = Gl(1),
	qo = Gl(-1);

function Yf(e) {
	return "clientX" in e && "clientY" in e
}

function Yl(e) {
	if (!e) return !1;
	const {
		KeyboardEvent: t
	} = Sn(e.target);
	return t && e instanceof t
}

function Jf(e) {
	if (!e) return !1;
	const {
		TouchEvent: t
	} = Sn(e.target);
	return t && e instanceof t
}

function eu(e) {
	if (Jf(e)) {
		if (e.touches && e.touches.length) {
			const {
				clientX: t,
				clientY: n
			} = e.touches[0];
			return {
				x: t,
				y: n
			}
		} else if (e.changedTouches && e.changedTouches.length) {
			const {
				clientX: t,
				clientY: n
			} = e.changedTouches[0];
			return {
				x: t,
				y: n
			}
		}
	}
	return Yf(e) ? {
		x: e.clientX,
		y: e.clientY
	} : null
}
const ul = "a,frame,iframe,input:not([type=hidden]):not(:disabled),select:not(:disabled),textarea:not(:disabled),button:not(:disabled),*[tabindex]";

function Xf(e) {
	return e.matches(ul) ? e : e.querySelector(ul)
}
const Kf = {
	display: "none"
};

function $f(e) {
	let {
		id: t,
		value: n
	} = e;
	return wn.createElement("div", {
		id: t,
		style: Kf
	}, n)
}

function Zf(e) {
	let {
		id: t,
		announcement: n,
		ariaLiveType: i = "assertive"
	} = e;
	const o = {
		position: "fixed",
		top: 0,
		left: 0,
		width: 1,
		height: 1,
		margin: -1,
		border: 0,
		padding: 0,
		overflow: "hidden",
		clip: "rect(0 0 0 0)",
		clipPath: "inset(100%)",
		whiteSpace: "nowrap"
	};
	return wn.createElement("div", {
		id: t,
		style: o,
		role: "status",
		"aria-live": i,
		"aria-atomic": !0
	}, n)
}

function Qf() {
	const [e, t] = ft.useState("");
	return {
		announce: ft.useCallback(i => {
			i != null && t(i)
		}, []),
		announcement: e
	}
}
const Jl = ft.createContext(null);

function th(e) {
	const t = ft.useContext(Jl);
	ft.useEffect(() => {
		if (!t) throw new Error("useDndMonitor must be used within a children of <DndContext>");
		return t(e)
	}, [e, t])
}

function eh() {
	const [e] = ft.useState(() => new Set), t = ft.useCallback(i => (e.add(i), () => e.delete(i)), [e]);
	return [ft.useCallback(i => {
		let {
			type: o,
			event: a
		} = i;
		e.forEach(u => {
			var c;
			return (c = u[o]) == null ? void 0 : c.call(u, a)
		})
	}, [e]), t]
}
const nh = {
		draggable: `
    To pick up a draggable item, press the space bar.
    While dragging, use the arrow keys to move the item.
    Press space again to drop the item in its new position, or press escape to cancel.
  `
	},
	rh = {
		onDragStart(e) {
			let {
				active: t
			} = e;
			return "Picked up draggable item " + t.id + "."
		},
		onDragOver(e) {
			let {
				active: t,
				over: n
			} = e;
			return n ? "Draggable item " + t.id + " was moved over droppable area " + n.id + "." : "Draggable item " + t.id + " is no longer over a droppable area."
		},
		onDragEnd(e) {
			let {
				active: t,
				over: n
			} = e;
			return n ? "Draggable item " + t.id + " was dropped over droppable area " + n.id : "Draggable item " + t.id + " was dropped."
		},
		onDragCancel(e) {
			let {
				active: t
			} = e;
			return "Dragging was cancelled. Draggable item " + t.id + " was dropped."
		}
	};

function ih(e) {
	let {
		announcements: t = rh,
		container: n,
		hiddenTextDescribedById: i,
		screenReaderInstructions: o = nh
	} = e;
	const {
		announce: a,
		announcement: u
	} = Qf(), c = Nu("DndLiveRegion"), [f, p] = ft.useState(!1);
	if (ft.useEffect(() => {
			p(!0)
		}, []), th(ft.useMemo(() => ({
			onDragStart(m) {
				let {
					active: y
				} = m;
				a(t.onDragStart({
					active: y
				}))
			},
			onDragMove(m) {
				let {
					active: y,
					over: d
				} = m;
				t.onDragMove && a(t.onDragMove({
					active: y,
					over: d
				}))
			},
			onDragOver(m) {
				let {
					active: y,
					over: d
				} = m;
				a(t.onDragOver({
					active: y,
					over: d
				}))
			},
			onDragEnd(m) {
				let {
					active: y,
					over: d
				} = m;
				a(t.onDragEnd({
					active: y,
					over: d
				}))
			},
			onDragCancel(m) {
				let {
					active: y,
					over: d
				} = m;
				a(t.onDragCancel({
					active: y,
					over: d
				}))
			}
		}), [a, t])), !f) return null;
	const v = wn.createElement(wn.Fragment, null, wn.createElement($f, {
		id: i,
		value: o.draggable
	}), wn.createElement(Zf, {
		id: c,
		announcement: u
	}));
	return n ? Ca.createPortal(v, n) : v
}
var pn;
(function(e) {
	e.DragStart = "dragStart", e.DragMove = "dragMove", e.DragEnd = "dragEnd", e.DragCancel = "dragCancel", e.DragOver = "dragOver", e.RegisterDroppable = "registerDroppable", e.SetDroppableDisabled = "setDroppableDisabled", e.UnregisterDroppable = "unregisterDroppable"
})(pn || (pn = {}));

function zo() {}

function ah(e, t) {
	return ft.useMemo(() => ({
		sensor: e,
		options: t ?? {}
	}), [e, t])
}

function oh() {
	for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++) t[n] = arguments[n];
	return ft.useMemo(() => [...t].filter(i => i != null), [...t])
}
const rr = Object.freeze({
	x: 0,
	y: 0
});

function sh(e, t) {
	let {
		data: {
			value: n
		}
	} = e, {
		data: {
			value: i
		}
	} = t;
	return i - n
}

function uh(e, t) {
	if (!e || e.length === 0) return null;
	const [n] = e;
	return n[t]
}

function lh(e, t) {
	const n = Math.max(t.top, e.top),
		i = Math.max(t.left, e.left),
		o = Math.min(t.left + t.width, e.left + e.width),
		a = Math.min(t.top + t.height, e.top + e.height),
		u = o - i,
		c = a - n;
	if (i < o && n < a) {
		const f = t.width * t.height,
			p = e.width * e.height,
			v = u * c,
			m = v / (f + p - v);
		return Number(m.toFixed(4))
	}
	return 0
}
const ch = e => {
	let {
		collisionRect: t,
		droppableRects: n,
		droppableContainers: i
	} = e;
	const o = [];
	for (const a of i) {
		const {
			id: u
		} = a, c = n.get(u);
		if (c) {
			const f = lh(c, t);
			f > 0 && o.push({
				id: u,
				data: {
					droppableContainer: a,
					value: f
				}
			})
		}
	}
	return o.sort(sh)
};

function fh(e, t, n) {
	return {
		...e,
		scaleX: t && n ? t.width / n.width : 1,
		scaleY: t && n ? t.height / n.height : 1
	}
}

function Xl(e, t) {
	return e && t ? {
		x: e.left - t.left,
		y: e.top - t.top
	} : rr
}

function hh(e) {
	return function(n) {
		for (var i = arguments.length, o = new Array(i > 1 ? i - 1 : 0), a = 1; a < i; a++) o[a - 1] = arguments[a];
		return o.reduce((u, c) => ({
			...u,
			top: u.top + e * c.y,
			bottom: u.bottom + e * c.y,
			left: u.left + e * c.x,
			right: u.right + e * c.x
		}), {
			...n
		})
	}
}
const dh = hh(1);

function ph(e) {
	if (e.startsWith("matrix3d(")) {
		const t = e.slice(9, -1).split(/, /);
		return {
			x: +t[12],
			y: +t[13],
			scaleX: +t[0],
			scaleY: +t[5]
		}
	} else if (e.startsWith("matrix(")) {
		const t = e.slice(7, -1).split(/, /);
		return {
			x: +t[4],
			y: +t[5],
			scaleX: +t[0],
			scaleY: +t[3]
		}
	}
	return null
}

function gh(e, t, n) {
	const i = ph(t);
	if (!i) return e;
	const {
		scaleX: o,
		scaleY: a,
		x: u,
		y: c
	} = i, f = e.left - u - (1 - o) * parseFloat(n), p = e.top - c - (1 - a) * parseFloat(n.slice(n.indexOf(" ") + 1)), v = o ? e.width / o : e.width, m = a ? e.height / a : e.height;
	return {
		width: v,
		height: m,
		top: p,
		right: f + v,
		bottom: p + m,
		left: f
	}
}
const mh = {
	ignoreTransform: !1
};

function Ta(e, t) {
	t === void 0 && (t = mh);
	let n = e.getBoundingClientRect();
	if (t.ignoreTransform) {
		const {
			transform: p,
			transformOrigin: v
		} = Sn(e).getComputedStyle(e);
		p && (n = gh(n, p, v))
	}
	const {
		top: i,
		left: o,
		width: a,
		height: u,
		bottom: c,
		right: f
	} = n;
	return {
		top: i,
		left: o,
		width: a,
		height: u,
		bottom: c,
		right: f
	}
}

function ll(e) {
	return Ta(e, {
		ignoreTransform: !0
	})
}

function vh(e) {
	const t = e.innerWidth,
		n = e.innerHeight;
	return {
		top: 0,
		left: 0,
		right: t,
		bottom: n,
		width: t,
		height: n
	}
}

function bh(e, t) {
	return t === void 0 && (t = Sn(e).getComputedStyle(e)), t.position === "fixed"
}

function wh(e, t) {
	t === void 0 && (t = Sn(e).getComputedStyle(e));
	const n = /(auto|scroll|overlay)/;
	return ["overflow", "overflowX", "overflowY"].some(o => {
		const a = t[o];
		return typeof a == "string" ? n.test(a) : !1
	})
}

function Lu(e, t) {
	const n = [];

	function i(o) {
		if (t != null && n.length >= t || !o) return n;
		if (wu(o) && o.scrollingElement != null && !n.includes(o.scrollingElement)) return n.push(o.scrollingElement), n;
		if (!Ra(o) || Vl(o) || n.includes(o)) return n;
		const a = Sn(e).getComputedStyle(o);
		return o !== e && wh(o, a) && n.push(o), bh(o, a) ? n : i(o.parentNode)
	}
	return e ? i(e) : n
}

function Kl(e) {
	const [t] = Lu(e, 1);
	return t ?? null
}

function qs(e) {
	return !Vo || !e ? null : Xi(e) ? e : bu(e) ? wu(e) || e === Ki(e).scrollingElement ? window : Ra(e) ? e : null : null
}

function $l(e) {
	return Xi(e) ? e.scrollX : e.scrollLeft
}

function Zl(e) {
	return Xi(e) ? e.scrollY : e.scrollTop
}

function nu(e) {
	return {
		x: $l(e),
		y: Zl(e)
	}
}
var nn;
(function(e) {
	e[e.Forward = 1] = "Forward", e[e.Backward = -1] = "Backward"
})(nn || (nn = {}));

function Ql(e) {
	return !Vo || !e ? !1 : e === document.scrollingElement
}

function tc(e) {
	const t = {
			x: 0,
			y: 0
		},
		n = Ql(e) ? {
			height: window.innerHeight,
			width: window.innerWidth
		} : {
			height: e.clientHeight,
			width: e.clientWidth
		},
		i = {
			x: e.scrollWidth - n.width,
			y: e.scrollHeight - n.height
		},
		o = e.scrollTop <= t.y,
		a = e.scrollLeft <= t.x,
		u = e.scrollTop >= i.y,
		c = e.scrollLeft >= i.x;
	return {
		isTop: o,
		isLeft: a,
		isBottom: u,
		isRight: c,
		maxScroll: i,
		minScroll: t
	}
}
const yh = {
	x: .2,
	y: .2
};

function xh(e, t, n, i, o) {
	let {
		top: a,
		left: u,
		right: c,
		bottom: f
	} = n;
	i === void 0 && (i = 10), o === void 0 && (o = yh);
	const {
		isTop: p,
		isBottom: v,
		isLeft: m,
		isRight: y
	} = tc(e), d = {
		x: 0,
		y: 0
	}, I = {
		x: 0,
		y: 0
	}, A = {
		height: t.height * o.y,
		width: t.width * o.x
	};
	return !p && a <= t.top + A.height ? (d.y = nn.Backward, I.y = i * Math.abs((t.top + A.height - a) / A.height)) : !v && f >= t.bottom - A.height && (d.y = nn.Forward, I.y = i * Math.abs((t.bottom - A.height - f) / A.height)), !y && c >= t.right - A.width ? (d.x = nn.Forward, I.x = i * Math.abs((t.right - A.width - c) / A.width)) : !m && u <= t.left + A.width && (d.x = nn.Backward, I.x = i * Math.abs((t.left + A.width - u) / A.width)), {
		direction: d,
		speed: I
	}
}

function Nh(e) {
	if (e === document.scrollingElement) {
		const {
			innerWidth: a,
			innerHeight: u
		} = window;
		return {
			top: 0,
			left: 0,
			right: a,
			bottom: u,
			width: a,
			height: u
		}
	}
	const {
		top: t,
		left: n,
		right: i,
		bottom: o
	} = e.getBoundingClientRect();
	return {
		top: t,
		left: n,
		right: i,
		bottom: o,
		width: e.clientWidth,
		height: e.clientHeight
	}
}

function ec(e) {
	return e.reduce((t, n) => Wi(t, nu(n)), rr)
}

function Lh(e) {
	return e.reduce((t, n) => t + $l(n), 0)
}

function Ah(e) {
	return e.reduce((t, n) => t + Zl(n), 0)
}

function Sh(e, t) {
	if (t === void 0 && (t = Ta), !e) return;
	const {
		top: n,
		left: i,
		bottom: o,
		right: a
	} = t(e);
	Kl(e) && (o <= 0 || a <= 0 || n >= window.innerHeight || i >= window.innerWidth) && e.scrollIntoView({
		block: "center",
		inline: "center"
	})
}
const _h = [
	["x", ["left", "right"], Lh],
	["y", ["top", "bottom"], Ah]
];
class Au {
	constructor(t, n) {
		this.rect = void 0, this.width = void 0, this.height = void 0, this.top = void 0, this.bottom = void 0, this.right = void 0, this.left = void 0;
		const i = Lu(n),
			o = ec(i);
		this.rect = {
			...t
		}, this.width = t.width, this.height = t.height;
		for (const [a, u, c] of _h)
			for (const f of u) Object.defineProperty(this, f, {
				get: () => {
					const p = c(i),
						v = o[a] - p;
					return this.rect[f] + v
				},
				enumerable: !0
			});
		Object.defineProperty(this, "rect", {
			enumerable: !1
		})
	}
}
class Ia {
	constructor(t) {
		this.target = void 0, this.listeners = [], this.removeAll = () => {
			this.listeners.forEach(n => {
				var i;
				return (i = this.target) == null ? void 0 : i.removeEventListener(...n)
			})
		}, this.target = t
	}
	add(t, n, i) {
		var o;
		(o = this.target) == null || o.addEventListener(t, n, i), this.listeners.push([t, n, i])
	}
}

function Ph(e) {
	const {
		EventTarget: t
	} = Sn(e);
	return e instanceof t ? e : Ki(e)
}

function zs(e, t) {
	const n = Math.abs(e.x),
		i = Math.abs(e.y);
	return typeof t == "number" ? Math.sqrt(n ** 2 + i ** 2) > t : "x" in t && "y" in t ? n > t.x && i > t.y : "x" in t ? n > t.x : "y" in t ? i > t.y : !1
}
var Vn;
(function(e) {
	e.Click = "click", e.DragStart = "dragstart", e.Keydown = "keydown", e.ContextMenu = "contextmenu", e.Resize = "resize", e.SelectionChange = "selectionchange", e.VisibilityChange = "visibilitychange"
})(Vn || (Vn = {}));

function cl(e) {
	e.preventDefault()
}

function kh(e) {
	e.stopPropagation()
}
var Le;
(function(e) {
	e.Space = "Space", e.Down = "ArrowDown", e.Right = "ArrowRight", e.Left = "ArrowLeft", e.Up = "ArrowUp", e.Esc = "Escape", e.Enter = "Enter", e.Tab = "Tab"
})(Le || (Le = {}));
const nc = {
		start: [Le.Space, Le.Enter],
		cancel: [Le.Esc],
		end: [Le.Space, Le.Enter, Le.Tab]
	},
	Ch = (e, t) => {
		let {
			currentCoordinates: n
		} = t;
		switch (e.code) {
			case Le.Right:
				return {
					...n, x: n.x + 25
				};
			case Le.Left:
				return {
					...n, x: n.x - 25
				};
			case Le.Down:
				return {
					...n, y: n.y + 25
				};
			case Le.Up:
				return {
					...n, y: n.y - 25
				}
		}
	};
class rc {
	constructor(t) {
		this.props = void 0, this.autoScrollEnabled = !1, this.referenceCoordinates = void 0, this.listeners = void 0, this.windowListeners = void 0, this.props = t;
		const {
			event: {
				target: n
			}
		} = t;
		this.props = t, this.listeners = new Ia(Ki(n)), this.windowListeners = new Ia(Sn(n)), this.handleKeyDown = this.handleKeyDown.bind(this), this.handleCancel = this.handleCancel.bind(this), this.attach()
	}
	attach() {
		this.handleStart(), this.windowListeners.add(Vn.Resize, this.handleCancel), this.windowListeners.add(Vn.VisibilityChange, this.handleCancel), setTimeout(() => this.listeners.add(Vn.Keydown, this.handleKeyDown))
	}
	handleStart() {
		const {
			activeNode: t,
			onStart: n
		} = this.props, i = t.node.current;
		i && Sh(i), n(rr)
	}
	handleKeyDown(t) {
		if (Yl(t)) {
			const {
				active: n,
				context: i,
				options: o
			} = this.props, {
				keyboardCodes: a = nc,
				coordinateGetter: u = Ch,
				scrollBehavior: c = "smooth"
			} = o, {
				code: f
			} = t;
			if (a.end.includes(f)) {
				this.handleEnd(t);
				return
			}
			if (a.cancel.includes(f)) {
				this.handleCancel(t);
				return
			}
			const {
				collisionRect: p
			} = i.current, v = p ? {
				x: p.left,
				y: p.top
			} : rr;
			this.referenceCoordinates || (this.referenceCoordinates = v);
			const m = u(t, {
				active: n,
				context: i.current,
				currentCoordinates: v
			});
			if (m) {
				const y = qo(m, v),
					d = {
						x: 0,
						y: 0
					},
					{
						scrollableAncestors: I
					} = i.current;
				for (const A of I) {
					const F = t.code,
						{
							isTop: _,
							isRight: j,
							isLeft: z,
							isBottom: $,
							maxScroll: rt,
							minScroll: lt
						} = tc(A),
						Y = Nh(A),
						R = {
							x: Math.min(F === Le.Right ? Y.right - Y.width / 2 : Y.right, Math.max(F === Le.Right ? Y.left : Y.left + Y.width / 2, m.x)),
							y: Math.min(F === Le.Down ? Y.bottom - Y.height / 2 : Y.bottom, Math.max(F === Le.Down ? Y.top : Y.top + Y.height / 2, m.y))
						},
						K = F === Le.Right && !j || F === Le.Left && !z,
						ot = F === Le.Down && !$ || F === Le.Up && !_;
					if (K && R.x !== m.x) {
						const P = A.scrollLeft + y.x,
							C = F === Le.Right && P <= rt.x || F === Le.Left && P >= lt.x;
						if (C && !y.y) {
							A.scrollTo({
								left: P,
								behavior: c
							});
							return
						}
						C ? d.x = A.scrollLeft - P : d.x = F === Le.Right ? A.scrollLeft - rt.x : A.scrollLeft - lt.x, d.x && A.scrollBy({
							left: -d.x,
							behavior: c
						});
						break
					} else if (ot && R.y !== m.y) {
						const P = A.scrollTop + y.y,
							C = F === Le.Down && P <= rt.y || F === Le.Up && P >= lt.y;
						if (C && !y.x) {
							A.scrollTo({
								top: P,
								behavior: c
							});
							return
						}
						C ? d.y = A.scrollTop - P : d.y = F === Le.Down ? A.scrollTop - rt.y : A.scrollTop - lt.y, d.y && A.scrollBy({
							top: -d.y,
							behavior: c
						});
						break
					}
				}
				this.handleMove(t, Wi(qo(m, this.referenceCoordinates), d))
			}
		}
	}
	handleMove(t, n) {
		const {
			onMove: i
		} = this.props;
		t.preventDefault(), i(n)
	}
	handleEnd(t) {
		const {
			onEnd: n
		} = this.props;
		t.preventDefault(), this.detach(), n()
	}
	handleCancel(t) {
		const {
			onCancel: n
		} = this.props;
		t.preventDefault(), this.detach(), n()
	}
	detach() {
		this.listeners.removeAll(), this.windowListeners.removeAll()
	}
}
rc.activators = [{
	eventName: "onKeyDown",
	handler: (e, t, n) => {
		let {
			keyboardCodes: i = nc,
			onActivation: o
		} = t, {
			active: a
		} = n;
		const {
			code: u
		} = e.nativeEvent;
		if (i.start.includes(u)) {
			const c = a.activatorNode.current;
			return c && e.target !== c ? !1 : (e.preventDefault(), o?.({
				event: e.nativeEvent
			}), !0)
		}
		return !1
	}
}];

function fl(e) {
	return !!(e && "distance" in e)
}

function hl(e) {
	return !!(e && "delay" in e)
}
class Su {
	constructor(t, n, i) {
		var o;
		i === void 0 && (i = Ph(t.event.target)), this.props = void 0, this.events = void 0, this.autoScrollEnabled = !0, this.document = void 0, this.activated = !1, this.initialCoordinates = void 0, this.timeoutId = null, this.listeners = void 0, this.documentListeners = void 0, this.windowListeners = void 0, this.props = t, this.events = n;
		const {
			event: a
		} = t, {
			target: u
		} = a;
		this.props = t, this.events = n, this.document = Ki(u), this.documentListeners = new Ia(this.document), this.listeners = new Ia(i), this.windowListeners = new Ia(Sn(u)), this.initialCoordinates = (o = eu(a)) != null ? o : rr, this.handleStart = this.handleStart.bind(this), this.handleMove = this.handleMove.bind(this), this.handleEnd = this.handleEnd.bind(this), this.handleCancel = this.handleCancel.bind(this), this.handleKeydown = this.handleKeydown.bind(this), this.removeTextSelection = this.removeTextSelection.bind(this), this.attach()
	}
	attach() {
		const {
			events: t,
			props: {
				options: {
					activationConstraint: n,
					bypassActivationConstraint: i
				}
			}
		} = this;
		if (this.listeners.add(t.move.name, this.handleMove, {
				passive: !1
			}), this.listeners.add(t.end.name, this.handleEnd), t.cancel && this.listeners.add(t.cancel.name, this.handleCancel), this.windowListeners.add(Vn.Resize, this.handleCancel), this.windowListeners.add(Vn.DragStart, cl), this.windowListeners.add(Vn.VisibilityChange, this.handleCancel), this.windowListeners.add(Vn.ContextMenu, cl), this.documentListeners.add(Vn.Keydown, this.handleKeydown), n) {
			if (i != null && i({
					event: this.props.event,
					activeNode: this.props.activeNode,
					options: this.props.options
				})) return this.handleStart();
			if (hl(n)) {
				this.timeoutId = setTimeout(this.handleStart, n.delay), this.handlePending(n);
				return
			}
			if (fl(n)) {
				this.handlePending(n);
				return
			}
		}
		this.handleStart()
	}
	detach() {
		this.listeners.removeAll(), this.windowListeners.removeAll(), setTimeout(this.documentListeners.removeAll, 50), this.timeoutId !== null && (clearTimeout(this.timeoutId), this.timeoutId = null)
	}
	handlePending(t, n) {
		const {
			active: i,
			onPending: o
		} = this.props;
		o(i, t, this.initialCoordinates, n)
	}
	handleStart() {
		const {
			initialCoordinates: t
		} = this, {
			onStart: n
		} = this.props;
		t && (this.activated = !0, this.documentListeners.add(Vn.Click, kh, {
			capture: !0
		}), this.removeTextSelection(), this.documentListeners.add(Vn.SelectionChange, this.removeTextSelection), n(t))
	}
	handleMove(t) {
		var n;
		const {
			activated: i,
			initialCoordinates: o,
			props: a
		} = this, {
			onMove: u,
			options: {
				activationConstraint: c
			}
		} = a;
		if (!o) return;
		const f = (n = eu(t)) != null ? n : rr,
			p = qo(o, f);
		if (!i && c) {
			if (fl(c)) {
				if (c.tolerance != null && zs(p, c.tolerance)) return this.handleCancel();
				if (zs(p, c.distance)) return this.handleStart()
			}
			if (hl(c) && zs(p, c.tolerance)) return this.handleCancel();
			this.handlePending(c, p);
			return
		}
		t.cancelable && t.preventDefault(), u(f)
	}
	handleEnd() {
		const {
			onAbort: t,
			onEnd: n
		} = this.props;
		this.detach(), this.activated || t(this.props.active), n()
	}
	handleCancel() {
		const {
			onAbort: t,
			onCancel: n
		} = this.props;
		this.detach(), this.activated || t(this.props.active), n()
	}
	handleKeydown(t) {
		t.code === Le.Esc && this.handleCancel()
	}
	removeTextSelection() {
		var t;
		(t = this.document.getSelection()) == null || t.removeAllRanges()
	}
}
const Ih = {
	cancel: {
		name: "pointercancel"
	},
	move: {
		name: "pointermove"
	},
	end: {
		name: "pointerup"
	}
};
class _u extends Su {
	constructor(t) {
		const {
			event: n
		} = t, i = Ki(n.target);
		super(t, Ih, i)
	}
}
_u.activators = [{
	eventName: "onPointerDown",
	handler: (e, t) => {
		let {
			nativeEvent: n
		} = e, {
			onActivation: i
		} = t;
		return !n.isPrimary || n.button !== 0 ? !1 : (i?.({
			event: n
		}), !0)
	}
}];
const Fh = {
	move: {
		name: "mousemove"
	},
	end: {
		name: "mouseup"
	}
};
var ru;
(function(e) {
	e[e.RightClick = 2] = "RightClick"
})(ru || (ru = {}));
class jh extends Su {
	constructor(t) {
		super(t, Fh, Ki(t.event.target))
	}
}
jh.activators = [{
	eventName: "onMouseDown",
	handler: (e, t) => {
		let {
			nativeEvent: n
		} = e, {
			onActivation: i
		} = t;
		return n.button === ru.RightClick ? !1 : (i?.({
			event: n
		}), !0)
	}
}];
const Us = {
	cancel: {
		name: "touchcancel"
	},
	move: {
		name: "touchmove"
	},
	end: {
		name: "touchend"
	}
};
class Eh extends Su {
	constructor(t) {
		super(t, Us)
	}
	static setup() {
		return window.addEventListener(Us.move.name, t, {
				capture: !1,
				passive: !1
			}),
			function() {
				window.removeEventListener(Us.move.name, t)
			};

		function t() {}
	}
}
Eh.activators = [{
	eventName: "onTouchStart",
	handler: (e, t) => {
		let {
			nativeEvent: n
		} = e, {
			onActivation: i
		} = t;
		const {
			touches: o
		} = n;
		return o.length > 1 ? !1 : (i?.({
			event: n
		}), !0)
	}
}];
var Fa;
(function(e) {
	e[e.Pointer = 0] = "Pointer", e[e.DraggableRect = 1] = "DraggableRect"
})(Fa || (Fa = {}));
var Uo;
(function(e) {
	e[e.TreeOrder = 0] = "TreeOrder", e[e.ReversedTreeOrder = 1] = "ReversedTreeOrder"
})(Uo || (Uo = {}));

function Mh(e) {
	let {
		acceleration: t,
		activator: n = Fa.Pointer,
		canScroll: i,
		draggingRect: o,
		enabled: a,
		interval: u = 5,
		order: c = Uo.TreeOrder,
		pointerCoordinates: f,
		scrollableAncestors: p,
		scrollableAncestorRects: v,
		delta: m,
		threshold: y
	} = e;
	const d = Oh({
			delta: m,
			disabled: !a
		}),
		[I, A] = Gf(),
		F = ft.useRef({
			x: 0,
			y: 0
		}),
		_ = ft.useRef({
			x: 0,
			y: 0
		}),
		j = ft.useMemo(() => {
			switch (n) {
				case Fa.Pointer:
					return f ? {
						top: f.y,
						bottom: f.y,
						left: f.x,
						right: f.x
					} : null;
				case Fa.DraggableRect:
					return o
			}
		}, [n, o, f]),
		z = ft.useRef(null),
		$ = ft.useCallback(() => {
			const lt = z.current;
			if (!lt) return;
			const Y = F.current.x * _.current.x,
				R = F.current.y * _.current.y;
			lt.scrollBy(Y, R)
		}, []),
		rt = ft.useMemo(() => c === Uo.TreeOrder ? [...p].reverse() : p, [c, p]);
	ft.useEffect(() => {
		if (!a || !p.length || !j) {
			A();
			return
		}
		for (const lt of rt) {
			if (i?.(lt) === !1) continue;
			const Y = p.indexOf(lt),
				R = v[Y];
			if (!R) continue;
			const {
				direction: K,
				speed: ot
			} = xh(lt, R, j, t, y);
			for (const P of ["x", "y"]) d[P][K[P]] || (ot[P] = 0, K[P] = 0);
			if (ot.x > 0 || ot.y > 0) {
				A(), z.current = lt, I($, u), F.current = ot, _.current = K;
				return
			}
		}
		F.current = {
			x: 0,
			y: 0
		}, _.current = {
			x: 0,
			y: 0
		}, A()
	}, [t, $, i, A, a, u, JSON.stringify(j), JSON.stringify(d), I, p, rt, v, JSON.stringify(y)])
}
const Dh = {
	x: {
		[nn.Backward]: !1,
		[nn.Forward]: !1
	},
	y: {
		[nn.Backward]: !1,
		[nn.Forward]: !1
	}
};

function Oh(e) {
	let {
		delta: t,
		disabled: n
	} = e;
	const i = tu(t);
	return Ba(o => {
		if (n || !i || !o) return Dh;
		const a = {
			x: Math.sign(t.x - i.x),
			y: Math.sign(t.y - i.y)
		};
		return {
			x: {
				[nn.Backward]: o.x[nn.Backward] || a.x === -1,
				[nn.Forward]: o.x[nn.Forward] || a.x === 1
			},
			y: {
				[nn.Backward]: o.y[nn.Backward] || a.y === -1,
				[nn.Forward]: o.y[nn.Forward] || a.y === 1
			}
		}
	}, [n, t, i])
}

function Rh(e, t) {
	const n = t != null ? e.get(t) : void 0,
		i = n ? n.node.current : null;
	return Ba(o => {
		var a;
		return t == null ? null : (a = i ?? o) != null ? a : null
	}, [i, t])
}

function Bh(e, t) {
	return ft.useMemo(() => e.reduce((n, i) => {
		const {
			sensor: o
		} = i, a = o.activators.map(u => ({
			eventName: u.eventName,
			handler: t(u.handler, i)
		}));
		return [...n, ...a]
	}, []), [e, t])
}
var Da;
(function(e) {
	e[e.Always = 0] = "Always", e[e.BeforeDragging = 1] = "BeforeDragging", e[e.WhileDragging = 2] = "WhileDragging"
})(Da || (Da = {}));
var iu;
(function(e) {
	e.Optimized = "optimized"
})(iu || (iu = {}));
const dl = new Map;

function Th(e, t) {
	let {
		dragging: n,
		dependencies: i,
		config: o
	} = t;
	const [a, u] = ft.useState(null), {
		frequency: c,
		measure: f,
		strategy: p
	} = o, v = ft.useRef(e), m = F(), y = xu(m), d = ft.useCallback(function(_) {
		_ === void 0 && (_ = []), !y.current && u(j => j === null ? _ : j.concat(_.filter(z => !j.includes(z))))
	}, [y]), I = ft.useRef(null), A = Ba(_ => {
		if (m && !n) return dl;
		if (!_ || _ === dl || v.current !== e || a != null) {
			const j = new Map;
			for (let z of e) {
				if (!z) continue;
				if (a && a.length > 0 && !a.includes(z.id) && z.rect.current) {
					j.set(z.id, z.rect.current);
					continue
				}
				const $ = z.node.current,
					rt = $ ? new Au(f($), $) : null;
				z.rect.current = rt, rt && j.set(z.id, rt)
			}
			return j
		}
		return _
	}, [e, a, n, m, f]);
	return ft.useEffect(() => {
		v.current = e
	}, [e]), ft.useEffect(() => {
		m || d()
	}, [n, m]), ft.useEffect(() => {
		a && a.length > 0 && u(null)
	}, [JSON.stringify(a)]), ft.useEffect(() => {
		m || typeof c != "number" || I.current !== null || (I.current = setTimeout(() => {
			d(), I.current = null
		}, c))
	}, [c, m, d, ...i]), {
		droppableRects: A,
		measureDroppableContainers: d,
		measuringScheduled: a != null
	};

	function F() {
		switch (p) {
			case Da.Always:
				return !1;
			case Da.BeforeDragging:
				return n;
			default:
				return !n
		}
	}
}

function ic(e, t) {
	return Ba(n => e ? n || (typeof t == "function" ? t(e) : e) : null, [t, e])
}

function qh(e, t) {
	return ic(e, t)
}

function zh(e) {
	let {
		callback: t,
		disabled: n
	} = e;
	const i = yu(t),
		o = ft.useMemo(() => {
			if (n || typeof window > "u" || typeof window.MutationObserver > "u") return;
			const {
				MutationObserver: a
			} = window;
			return new a(i)
		}, [i, n]);
	return ft.useEffect(() => () => o?.disconnect(), [o]), o
}

function Pu(e) {
	let {
		callback: t,
		disabled: n
	} = e;
	const i = yu(t),
		o = ft.useMemo(() => {
			if (n || typeof window > "u" || typeof window.ResizeObserver > "u") return;
			const {
				ResizeObserver: a
			} = window;
			return new a(i)
		}, [n]);
	return ft.useEffect(() => () => o?.disconnect(), [o]), o
}

function Uh(e) {
	return new Au(Ta(e), e)
}

function pl(e, t, n) {
	t === void 0 && (t = Uh);
	const [i, o] = ft.useState(null);

	function a() {
		o(f => {
			if (!e) return null;
			if (e.isConnected === !1) {
				var p;
				return (p = f ?? n) != null ? p : null
			}
			const v = t(e);
			return JSON.stringify(f) === JSON.stringify(v) ? f : v
		})
	}
	const u = zh({
			callback(f) {
				if (e)
					for (const p of f) {
						const {
							type: v,
							target: m
						} = p;
						if (v === "childList" && m instanceof HTMLElement && m.contains(e)) {
							a();
							break
						}
					}
			}
		}),
		c = Pu({
			callback: a
		});
	return Gr(() => {
		a(), e ? (c?.observe(e), u?.observe(document.body, {
			childList: !0,
			subtree: !0
		})) : (c?.disconnect(), u?.disconnect())
	}, [e]), i
}

function Hh(e) {
	const t = ic(e);
	return Xl(e, t)
}
const gl = [];

function Wh(e) {
	const t = ft.useRef(e),
		n = Ba(i => e ? i && i !== gl && e && t.current && e.parentNode === t.current.parentNode ? i : Lu(e) : gl, [e]);
	return ft.useEffect(() => {
		t.current = e
	}, [e]), n
}

function Vh(e) {
	const [t, n] = ft.useState(null), i = ft.useRef(e), o = ft.useCallback(a => {
		const u = qs(a.target);
		u && n(c => c ? (c.set(u, nu(u)), new Map(c)) : null)
	}, []);
	return ft.useEffect(() => {
		const a = i.current;
		if (e !== a) {
			u(a);
			const c = e.map(f => {
				const p = qs(f);
				return p ? (p.addEventListener("scroll", o, {
					passive: !0
				}), [p, nu(p)]) : null
			}).filter(f => f != null);
			n(c.length ? new Map(c) : null), i.current = e
		}
		return () => {
			u(e), u(a)
		};

		function u(c) {
			c.forEach(f => {
				const p = qs(f);
				p?.removeEventListener("scroll", o)
			})
		}
	}, [o, e]), ft.useMemo(() => e.length ? t ? Array.from(t.values()).reduce((a, u) => Wi(a, u), rr) : ec(e) : rr, [e, t])
}

function ml(e, t) {
	t === void 0 && (t = []);
	const n = ft.useRef(null);
	return ft.useEffect(() => {
		n.current = null
	}, t), ft.useEffect(() => {
		const i = e !== rr;
		i && !n.current && (n.current = e), !i && n.current && (n.current = null)
	}, [e]), n.current ? qo(e, n.current) : rr
}

function Gh(e) {
	ft.useEffect(() => {
		if (!Vo) return;
		const t = e.map(n => {
			let {
				sensor: i
			} = n;
			return i.setup == null ? void 0 : i.setup()
		});
		return () => {
			for (const n of t) n?.()
		}
	}, e.map(t => {
		let {
			sensor: n
		} = t;
		return n
	}))
}

function Yh(e, t) {
	return ft.useMemo(() => e.reduce((n, i) => {
		let {
			eventName: o,
			handler: a
		} = i;
		return n[o] = u => {
			a(u, t)
		}, n
	}, {}), [e, t])
}

function ac(e) {
	return ft.useMemo(() => e ? vh(e) : null, [e])
}
const vl = [];

function Jh(e, t) {
	t === void 0 && (t = Ta);
	const [n] = e, i = ac(n ? Sn(n) : null), [o, a] = ft.useState(vl);

	function u() {
		a(() => e.length ? e.map(f => Ql(f) ? i : new Au(t(f), f)) : vl)
	}
	const c = Pu({
		callback: u
	});
	return Gr(() => {
		c?.disconnect(), u(), e.forEach(f => c?.observe(f))
	}, [e]), o
}

function Xh(e) {
	if (!e) return null;
	if (e.children.length > 1) return e;
	const t = e.children[0];
	return Ra(t) ? t : e
}

function Kh(e) {
	let {
		measure: t
	} = e;
	const [n, i] = ft.useState(null), o = ft.useCallback(p => {
		for (const {
				target: v
			}
			of p)
			if (Ra(v)) {
				i(m => {
					const y = t(v);
					return m ? {
						...m,
						width: y.width,
						height: y.height
					} : y
				});
				break
			}
	}, [t]), a = Pu({
		callback: o
	}), u = ft.useCallback(p => {
		const v = Xh(p);
		a?.disconnect(), v && a?.observe(v), i(v ? t(v) : null)
	}, [t, a]), [c, f] = Qs(u);
	return ft.useMemo(() => ({
		nodeRef: c,
		rect: n,
		setRef: f
	}), [n, c, f])
}
const $h = [{
		sensor: _u,
		options: {}
	}, {
		sensor: rc,
		options: {}
	}],
	Zh = {
		current: {}
	},
	Do = {
		draggable: {
			measure: ll
		},
		droppable: {
			measure: ll,
			strategy: Da.WhileDragging,
			frequency: iu.Optimized
		},
		dragOverlay: {
			measure: Ta
		}
	};
class ja extends Map {
	get(t) {
		var n;
		return t != null && (n = super.get(t)) != null ? n : void 0
	}
	toArray() {
		return Array.from(this.values())
	}
	getEnabled() {
		return this.toArray().filter(t => {
			let {
				disabled: n
			} = t;
			return !n
		})
	}
	getNodeFor(t) {
		var n, i;
		return (n = (i = this.get(t)) == null ? void 0 : i.node.current) != null ? n : void 0
	}
}
const Qh = {
		activatorEvent: null,
		active: null,
		activeNode: null,
		activeNodeRect: null,
		collisions: null,
		containerNodeRect: null,
		draggableNodes: new Map,
		droppableRects: new Map,
		droppableContainers: new ja,
		over: null,
		dragOverlay: {
			nodeRef: {
				current: null
			},
			rect: null,
			setRef: zo
		},
		scrollableAncestors: [],
		scrollableAncestorRects: [],
		measuringConfiguration: Do,
		measureDroppableContainers: zo,
		windowRect: null,
		measuringScheduled: !1
	},
	t2 = {
		activatorEvent: null,
		activators: [],
		active: null,
		activeNodeRect: null,
		ariaDescribedById: {
			draggable: ""
		},
		dispatch: zo,
		draggableNodes: new Map,
		over: null,
		measureDroppableContainers: zo
	},
	ku = ft.createContext(t2),
	e2 = ft.createContext(Qh);

function n2() {
	return {
		draggable: {
			active: null,
			initialCoordinates: {
				x: 0,
				y: 0
			},
			nodes: new Map,
			translate: {
				x: 0,
				y: 0
			}
		},
		droppable: {
			containers: new ja
		}
	}
}

function r2(e, t) {
	switch (t.type) {
		case pn.DragStart:
			return {
				...e, draggable: {
					...e.draggable,
					initialCoordinates: t.initialCoordinates,
					active: t.active
				}
			};
		case pn.DragMove:
			return e.draggable.active == null ? e : {
				...e,
				draggable: {
					...e.draggable,
					translate: {
						x: t.coordinates.x - e.draggable.initialCoordinates.x,
						y: t.coordinates.y - e.draggable.initialCoordinates.y
					}
				}
			};
		case pn.DragEnd:
		case pn.DragCancel:
			return {
				...e, draggable: {
					...e.draggable,
					active: null,
					initialCoordinates: {
						x: 0,
						y: 0
					},
					translate: {
						x: 0,
						y: 0
					}
				}
			};
		case pn.RegisterDroppable: {
			const {
				element: n
			} = t, {
				id: i
			} = n, o = new ja(e.droppable.containers);
			return o.set(i, n), {
				...e,
				droppable: {
					...e.droppable,
					containers: o
				}
			}
		}
		case pn.SetDroppableDisabled: {
			const {
				id: n,
				key: i,
				disabled: o
			} = t, a = e.droppable.containers.get(n);
			if (!a || i !== a.key) return e;
			const u = new ja(e.droppable.containers);
			return u.set(n, {
				...a,
				disabled: o
			}), {
				...e,
				droppable: {
					...e.droppable,
					containers: u
				}
			}
		}
		case pn.UnregisterDroppable: {
			const {
				id: n,
				key: i
			} = t, o = e.droppable.containers.get(n);
			if (!o || i !== o.key) return e;
			const a = new ja(e.droppable.containers);
			return a.delete(n), {
				...e,
				droppable: {
					...e.droppable,
					containers: a
				}
			}
		}
		default:
			return e
	}
}

function i2(e) {
	let {
		disabled: t
	} = e;
	const {
		active: n,
		activatorEvent: i,
		draggableNodes: o
	} = ft.useContext(ku), a = tu(i), u = tu(n?.id);
	return ft.useEffect(() => {
		if (!t && !i && a && u != null) {
			if (!Yl(a) || document.activeElement === a.target) return;
			const c = o.get(u);
			if (!c) return;
			const {
				activatorNode: f,
				node: p
			} = c;
			if (!f.current && !p.current) return;
			requestAnimationFrame(() => {
				for (const v of [f.current, p.current]) {
					if (!v) continue;
					const m = Xf(v);
					if (m) {
						m.focus();
						break
					}
				}
			})
		}
	}, [i, t, o, u, a]), null
}

function a2(e, t) {
	let {
		transform: n,
		...i
	} = t;
	return e != null && e.length ? e.reduce((o, a) => a({
		transform: o,
		...i
	}), n) : n
}

function o2(e) {
	return ft.useMemo(() => ({
		draggable: {
			...Do.draggable,
			...e?.draggable
		},
		droppable: {
			...Do.droppable,
			...e?.droppable
		},
		dragOverlay: {
			...Do.dragOverlay,
			...e?.dragOverlay
		}
	}), [e?.draggable, e?.droppable, e?.dragOverlay])
}

function s2(e) {
	let {
		activeNode: t,
		measure: n,
		initialRect: i,
		config: o = !0
	} = e;
	const a = ft.useRef(!1),
		{
			x: u,
			y: c
		} = typeof o == "boolean" ? {
			x: o,
			y: o
		} : o;
	Gr(() => {
		if (!u && !c || !t) {
			a.current = !1;
			return
		}
		if (a.current || !i) return;
		const p = t?.node.current;
		if (!p || p.isConnected === !1) return;
		const v = n(p),
			m = Xl(v, i);
		if (u || (m.x = 0), c || (m.y = 0), a.current = !0, Math.abs(m.x) > 0 || Math.abs(m.y) > 0) {
			const y = Kl(p);
			y && y.scrollBy({
				top: m.y,
				left: m.x
			})
		}
	}, [t, u, c, i, n])
}
const oc = ft.createContext({
	...rr,
	scaleX: 1,
	scaleY: 1
});
var Wr;
(function(e) {
	e[e.Uninitialized = 0] = "Uninitialized", e[e.Initializing = 1] = "Initializing", e[e.Initialized = 2] = "Initialized"
})(Wr || (Wr = {}));
const u2 = ft.memo(function(t) {
		var n, i, o, a;
		let {
			id: u,
			accessibility: c,
			autoScroll: f = !0,
			children: p,
			sensors: v = $h,
			collisionDetection: m = ch,
			measuring: y,
			modifiers: d,
			...I
		} = t;
		const A = ft.useReducer(r2, void 0, n2),
			[F, _] = A,
			[j, z] = eh(),
			[$, rt] = ft.useState(Wr.Uninitialized),
			lt = $ === Wr.Initialized,
			{
				draggable: {
					active: Y,
					nodes: R,
					translate: K
				},
				droppable: {
					containers: ot
				}
			} = F,
			P = Y != null ? R.get(Y) : null,
			C = ft.useRef({
				initial: null,
				translated: null
			}),
			q = ft.useMemo(() => {
				var Ae;
				return Y != null ? {
					id: Y,
					data: (Ae = P?.data) != null ? Ae : Zh,
					rect: C
				} : null
			}, [Y, P]),
			T = ft.useRef(null),
			[ct, st] = ft.useState(null),
			[ht, Q] = ft.useState(null),
			dt = xu(I, Object.values(I)),
			ut = Nu("DndDescribedBy", u),
			_t = ft.useMemo(() => ot.getEnabled(), [ot]),
			L = o2(y),
			{
				droppableRects: M,
				measureDroppableContainers: O,
				measuringScheduled: U
			} = Th(_t, {
				dragging: lt,
				dependencies: [K.x, K.y],
				config: L.droppable
			}),
			V = Rh(R, Y),
			nt = ft.useMemo(() => ht ? eu(ht) : null, [ht]),
			at = kn(),
			it = qh(V, L.draggable.measure);
		s2({
			activeNode: Y != null ? R.get(Y) : null,
			config: at.layoutShiftCompensation,
			initialRect: it,
			measure: L.draggable.measure
		});
		const xt = pl(V, L.draggable.measure, it),
			Lt = pl(V ? V.parentElement : null),
			Pt = ft.useRef({
				activatorEvent: null,
				active: null,
				activeNode: V,
				collisionRect: null,
				collisions: null,
				droppableRects: M,
				draggableNodes: R,
				draggingNode: null,
				draggingNodeRect: null,
				droppableContainers: ot,
				over: null,
				scrollableAncestors: [],
				scrollAdjustedTranslate: null
			}),
			It = ot.getNodeFor((n = Pt.current.over) == null ? void 0 : n.id),
			Ut = Kh({
				measure: L.dragOverlay.measure
			}),
			gt = (i = Ut.nodeRef.current) != null ? i : V,
			B = lt ? (o = Ut.rect) != null ? o : xt : null,
			Xt = !!(Ut.nodeRef.current && Ut.rect),
			Bt = Hh(Xt ? null : xt),
			At = ac(gt ? Sn(gt) : null),
			St = Wh(lt ? It ?? V : null),
			jt = Jh(St),
			Ct = a2(d, {
				transform: {
					x: K.x - Bt.x,
					y: K.y - Bt.y,
					scaleX: 1,
					scaleY: 1
				},
				activatorEvent: ht,
				active: q,
				activeNodeRect: xt,
				containerNodeRect: Lt,
				draggingNodeRect: B,
				over: Pt.current.over,
				overlayNodeRect: Ut.rect,
				scrollableAncestors: St,
				scrollableAncestorRects: jt,
				windowRect: At
			}),
			qt = nt ? Wi(nt, K) : null,
			Jt = Vh(St),
			Qt = ml(Jt),
			ne = ml(Jt, [xt]),
			re = Wi(Ct, Qt),
			ue = B ? dh(B, Ct) : null,
			Wt = q && ue ? m({
				active: q,
				collisionRect: ue,
				droppableRects: M,
				droppableContainers: _t,
				pointerCoordinates: qt
			}) : null,
			ie = uh(Wt, "id"),
			[kt, $e] = ft.useState(null),
			le = Xt ? Ct : Wi(Ct, ne),
			Pn = fh(le, (a = kt?.rect) != null ? a : null, xt),
			de = ft.useRef(null),
			ye = ft.useCallback((Ae, oe) => {
				let {
					sensor: zt,
					options: ae
				} = oe;
				if (T.current == null) return;
				const Ge = R.get(T.current);
				if (!Ge) return;
				const pe = Ae.nativeEvent,
					Re = new zt({
						active: T.current,
						activeNode: Ge,
						event: pe,
						options: ae,
						context: Pt,
						onAbort(Ot) {
							if (!R.get(Ot)) return;
							const {
								onDragAbort: Be
							} = dt.current, Fe = {
								id: Ot
							};
							Be?.(Fe), j({
								type: "onDragAbort",
								event: Fe
							})
						},
						onPending(Ot, Ye, Be, Fe) {
							if (!R.get(Ot)) return;
							const {
								onDragPending: Se
							} = dt.current, Ee = {
								id: Ot,
								constraint: Ye,
								initialCoordinates: Be,
								offset: Fe
							};
							Se?.(Ee), j({
								type: "onDragPending",
								event: Ee
							})
						},
						onStart(Ot) {
							const Ye = T.current;
							if (Ye == null) return;
							const Be = R.get(Ye);
							if (!Be) return;
							const {
								onDragStart: Fe
							} = dt.current, ke = {
								activatorEvent: pe,
								active: {
									id: Ye,
									data: Be.data,
									rect: C
								}
							};
							Ca.unstable_batchedUpdates(() => {
								Fe?.(ke), rt(Wr.Initializing), _({
									type: pn.DragStart,
									initialCoordinates: Ot,
									active: Ye
								}), j({
									type: "onDragStart",
									event: ke
								}), st(de.current), Q(pe)
							})
						},
						onMove(Ot) {
							_({
								type: pn.DragMove,
								coordinates: Ot
							})
						},
						onEnd: an(pn.DragEnd),
						onCancel: an(pn.DragCancel)
					});
				de.current = Re;

				function an(Ot) {
					return async function() {
						const {
							active: Be,
							collisions: Fe,
							over: ke,
							scrollAdjustedTranslate: Se
						} = Pt.current;
						let Ee = null;
						if (Be && Se) {
							const {
								cancelDrop: On
							} = dt.current;
							Ee = {
								activatorEvent: pe,
								active: Be,
								collisions: Fe,
								delta: Se,
								over: ke
							}, Ot === pn.DragEnd && typeof On == "function" && await Promise.resolve(On(Ee)) && (Ot = pn.DragCancel)
						}
						T.current = null, Ca.unstable_batchedUpdates(() => {
							_({
								type: Ot
							}), rt(Wr.Uninitialized), $e(null), st(null), Q(null), de.current = null;
							const On = Ot === pn.DragEnd ? "onDragEnd" : "onDragCancel";
							if (Ee) {
								const Cn = dt.current[On];
								Cn?.(Ee), j({
									type: On,
									event: Ee
								})
							}
						})
					}
				}
			}, [R]),
			Dn = ft.useCallback((Ae, oe) => (zt, ae) => {
				const Ge = zt.nativeEvent,
					pe = R.get(ae);
				if (T.current !== null || !pe || Ge.dndKit || Ge.defaultPrevented) return;
				const Re = {
					active: pe
				};
				Ae(zt, oe.options, Re) === !0 && (Ge.dndKit = {
					capturedBy: oe.sensor
				}, T.current = ae, ye(zt, oe))
			}, [R, ye]),
			fe = Bh(v, Dn);
		Gh(v), Gr(() => {
			xt && $ === Wr.Initializing && rt(Wr.Initialized)
		}, [xt, $]), ft.useEffect(() => {
			const {
				onDragMove: Ae
			} = dt.current, {
				active: oe,
				activatorEvent: zt,
				collisions: ae,
				over: Ge
			} = Pt.current;
			if (!oe || !zt) return;
			const pe = {
				active: oe,
				activatorEvent: zt,
				collisions: ae,
				delta: {
					x: re.x,
					y: re.y
				},
				over: Ge
			};
			Ca.unstable_batchedUpdates(() => {
				Ae?.(pe), j({
					type: "onDragMove",
					event: pe
				})
			})
		}, [re.x, re.y]), ft.useEffect(() => {
			const {
				active: Ae,
				activatorEvent: oe,
				collisions: zt,
				droppableContainers: ae,
				scrollAdjustedTranslate: Ge
			} = Pt.current;
			if (!Ae || T.current == null || !oe || !Ge) return;
			const {
				onDragOver: pe
			} = dt.current, Re = ae.get(ie), an = Re && Re.rect.current ? {
				id: Re.id,
				rect: Re.rect.current,
				data: Re.data,
				disabled: Re.disabled
			} : null, Ot = {
				active: Ae,
				activatorEvent: oe,
				collisions: zt,
				delta: {
					x: Ge.x,
					y: Ge.y
				},
				over: an
			};
			Ca.unstable_batchedUpdates(() => {
				$e(an), pe?.(Ot), j({
					type: "onDragOver",
					event: Ot
				})
			})
		}, [ie]), Gr(() => {
			Pt.current = {
				activatorEvent: ht,
				active: q,
				activeNode: V,
				collisionRect: ue,
				collisions: Wt,
				droppableRects: M,
				draggableNodes: R,
				draggingNode: gt,
				draggingNodeRect: B,
				droppableContainers: ot,
				over: kt,
				scrollableAncestors: St,
				scrollAdjustedTranslate: re
			}, C.current = {
				initial: B,
				translated: ue
			}
		}, [q, V, Wt, ue, R, gt, B, M, ot, kt, St, re]), Mh({
			...at,
			delta: K,
			draggingRect: ue,
			pointerCoordinates: qt,
			scrollableAncestors: St,
			scrollableAncestorRects: jt
		});
		const mr = ft.useMemo(() => ({
				active: q,
				activeNode: V,
				activeNodeRect: xt,
				activatorEvent: ht,
				collisions: Wt,
				containerNodeRect: Lt,
				dragOverlay: Ut,
				draggableNodes: R,
				droppableContainers: ot,
				droppableRects: M,
				over: kt,
				measureDroppableContainers: O,
				scrollableAncestors: St,
				scrollableAncestorRects: jt,
				measuringConfiguration: L,
				measuringScheduled: U,
				windowRect: At
			}), [q, V, xt, ht, Wt, Lt, Ut, R, ot, M, kt, O, St, jt, L, U, At]),
			Ie = ft.useMemo(() => ({
				activatorEvent: ht,
				activators: fe,
				active: q,
				activeNodeRect: xt,
				ariaDescribedById: {
					draggable: ut
				},
				dispatch: _,
				draggableNodes: R,
				over: kt,
				measureDroppableContainers: O
			}), [ht, fe, q, xt, _, ut, R, kt, O]);
		return wn.createElement(Jl.Provider, {
			value: z
		}, wn.createElement(ku.Provider, {
			value: Ie
		}, wn.createElement(e2.Provider, {
			value: mr
		}, wn.createElement(oc.Provider, {
			value: Pn
		}, p)), wn.createElement(i2, {
			disabled: c?.restoreFocus === !1
		})), wn.createElement(ih, {
			...c,
			hiddenTextDescribedById: ut
		}));

		function kn() {
			const Ae = ct?.autoScrollEnabled === !1,
				oe = typeof f == "object" ? f.enabled === !1 : f === !1,
				zt = lt && !Ae && !oe;
			return typeof f == "object" ? {
				...f,
				enabled: zt
			} : {
				enabled: zt
			}
		}
	}),
	l2 = ft.createContext(null),
	bl = "button",
	c2 = "Draggable";

function f2(e) {
	let {
		id: t,
		data: n,
		disabled: i = !1,
		attributes: o
	} = e;
	const a = Nu(c2),
		{
			activators: u,
			activatorEvent: c,
			active: f,
			activeNodeRect: p,
			ariaDescribedById: v,
			draggableNodes: m,
			over: y
		} = ft.useContext(ku),
		{
			role: d = bl,
			roleDescription: I = "draggable",
			tabIndex: A = 0
		} = o ?? {},
		F = f?.id === t,
		_ = ft.useContext(F ? oc : l2),
		[j, z] = Qs(),
		[$, rt] = Qs(),
		lt = Yh(u, t),
		Y = xu(n);
	Gr(() => (m.set(t, {
		id: t,
		key: a,
		node: j,
		activatorNode: $,
		data: Y
	}), () => {
		const K = m.get(t);
		K && K.key === a && m.delete(t)
	}), [m, t]);
	const R = ft.useMemo(() => ({
		role: d,
		tabIndex: A,
		"aria-disabled": i,
		"aria-pressed": F && d === bl ? !0 : void 0,
		"aria-roledescription": I,
		"aria-describedby": v.draggable
	}), [i, d, A, F, I, v.draggable]);
	return {
		active: f,
		activatorEvent: c,
		activeNodeRect: p,
		attributes: R,
		isDragging: F,
		listeners: i ? void 0 : lt,
		node: j,
		over: y,
		setNodeRef: z,
		setActivatorNodeRef: rt,
		transform: _
	}
}
const h2 = 40,
	wl = 20;

function d2({
	setNotesHeight: e,
	notesHeight: t,
	minHeight: n = 80
}) {
	const i = oh(ah(_u, {
			activationConstraint: {
				distance: 2
			}
		})),
		o = wn.useRef(t),
		a = wn.useRef(t),
		u = () => {
			a.current = o.current
		},
		c = ({
			delta: f
		}) => {
			if (typeof f?.y != "number") return;
			if (a.current === 0) {
				if (-f.y >= wl) {
					const m = Math.max(n, wl);
					e(m), o.current = m
				}
				return
			}
			const p = a.current - f.y;
			if (p < h2) {
				e(0), o.current = 0;
				return
			}
			const v = Math.max(n, p);
			e(v), o.current = v
		};
	return Tt.jsx(u2, {
		sensors: i,
		onDragStart: u,
		onDragMove: c,
		children: Tt.jsx(p2, {
			notesHeight: t
		})
	})
}

function p2({
	notesHeight: e
}) {
	const {
		attributes: t,
		listeners: n,
		setNodeRef: i
	} = f2({
		id: "speaker-notes-resize-handle"
	});
	return Tt.jsx(df, {
		label: Tt.jsx(ui, {
			id: "eTM8rh",
			defaultMessage: "Drag up to open speaker notes"
		}),
		side: "top",
		disabled: e !== 0,
		children: Tt.jsx("div", {
			ref: i,
			...n,
			...t,
			className: "mx-auto h-2 w-9 cursor-row-resize select-none",
			children: Tt.jsx("div", {
				className: "h-[3px] w-full rounded bg-gray-300"
			})
		})
	})
}
const g2 = ({
	slide: e
}) => {
	const t = ft.useMemo(() => e.notesSlide?.elements.map(i => i.paragraphs.map(o => o.runs.map(a => a.text).join("")).join(`
`)).join(`
`).trim(), [e]),
		n = ft.useMemo(() => t && t.length > 0, [t]);
	return Tt.jsx("div", {
		className: "bg-token-bg-primary h-full w-full overflow-y-auto rounded-md p-4 text-sm",
		children: n ? Tt.jsx("div", {
			className: "text-token-text-secondary",
			children: t
		}) : Tt.jsx("div", {
			className: "text-token-text-tertiary",
			children: Tt.jsx(ui, {
				id: "walnut.speaker-notes",
				defaultMessage: "There are no speaker notes for this slide."
			})
		})
	})
};

function m2(e, t, n, i) {
	ft.useEffect(() => {
		if (!e) return;
		const o = a => {
			if (a.key !== "ArrowUp" && a.key !== "ArrowDown") return;
			const u = e.slides,
				c = t ? u.indexOf(t) : -1;
			if (c === -1) return;
			let f = c;
			if (a.key === "ArrowUp" && c > 0 && (f = c - 1), a.key === "ArrowDown" && c < u.length - 1 && (f = c + 1), f !== c) {
				n(f);
				const p = i.current[f];
				p?.scrollIntoView({
					block: "nearest"
				}), p?.focus()
			}
			a.preventDefault()
		};
		return window.addEventListener("keydown", o), () => window.removeEventListener("keydown", o)
	}, [e, t, n, i])
}
const v2 = 100;

function b2({
	presentation: e,
	selectedSlideIdx: t,
	setSelectedSlideIdx: n,
	isWalnutV2Enabled: i,
	isEditing: o,
	setIsEditing: a
}) {
	const u = e.slides[t],
		[c, f] = ft.useState([]),
		[p, v] = ft.useState(null),
		[m, y] = ft.useState(null),
		[d, I] = ft.useState(null),
		A = ft.useRef([]),
		F = ft.useRef(null),
		_ = ft.useRef(null),
		j = ft.useRef(null),
		z = ft.useRef(null),
		[$, rt] = ft.useState([]),
		[lt, Y] = ft.useState(null),
		[R, K] = ft.useState(null),
		{
			width: ot,
			height: P
		} = zf(j, 100);
	ft.useEffect(() => {
		(async () => {
			const ut = await Promise.all(e.slides.map(_t => Pf(_t, e)));
			f(ut)
		})()
	}, [e]), ft.useEffect(() => {
		Y(null), K(null)
	}, [ot, P]), ft.useEffect(() => {
		const ut = () => {
			Y(null), K(null)
		};
		return window.addEventListener("click", ut), () => window.removeEventListener("click", ut)
	}, []), ft.useEffect(() => {
		const ut = F.current;
		if (!ut || !u || ot === 0 || P === 0 || !j.current) return;
		const _t = u.widthEmu * Ue,
			L = u.heightEmu * Ue,
			M = j.current.clientWidth,
			O = j.current.clientHeight,
			U = Math.min(M / _t, O / L),
			V = Math.round(window.devicePixelRatio) || 1,
			nt = Math.round(_t * U * V),
			at = Math.round(L * U * V);
		ut.width !== nt && (ut.width = nt), ut.height !== at && (ut.height = at);
		const it = ut.getContext("2d");
		if (!it) return;
		it.resetTransform(), it.scale(V * U, V * U);
		let xt = !1;
		return (async () => {
			const Lt = [];
			await zl(u, e, it, Lt), rt(Lt), !xt && o && Ff(it, e, p, m, d != null, u)
		})(), () => {
			xt = !0
		}
	}, [u, e, p, m, d, ot, P, o]), m2(e, u ?? null, n, A);
	const C = Uf(e, u, _, F, Y, $, n),
		q = Wf(e, u, F, d, I, m, v, $),
		T = () => {
			d || v(null)
		},
		ct = Hf(e, u, _, F, o, m, y, v, I),
		st = () => I(null);
	ft.useEffect(() => {
		y(null), v(null)
	}, [u]), Vf(_, u, e);
	const [ht, Q] = ft.useState(v2), dt = ot > 0 && P > 0;
	return pf(() => {
		if (!lt || !z.current || !_.current) return;
		const {
			x: ut,
			y: _t,
			placement: L
		} = lt, M = z.current.getBoundingClientRect(), O = _.current.getBoundingClientRect();
		let U = ut + (L === "right" ? 0 : -M.width),
			V = _t - M.height;
		U = Math.max(0, Math.min(U, O.width - M.width)), V = Math.max(0, Math.min(V, O.height - M.height)), K({
			left: U,
			top: V
		})
	}, [lt]), Tt.jsx("div", {
		className: "flex h-full flex-col gap-4 overflow-hidden",
		children: Tt.jsxs("div", {
			className: "flex h-full flex-1 flex-row",
			children: [Tt.jsx("div", {
				className: "border-token-border-light flex h-full w-full shrink-0 flex-col gap-4 overflow-y-auto border-e p-2 sm:w-[240px]",
				children: c.map((ut, _t) => {
					const L = e?.slides[_t] === u;
					return Tt.jsxs("button", {
						ref: M => {
							M && (A.current[_t] = M)
						},
						type: "button",
						onClick: () => n(_t),
						className: `flex w-full gap-3 rounded-md p-2 ${L?"ring-2 ring-blue-500/60":""}`,
						children: [Tt.jsx("div", {
							className: "text-token-text-primary text-sm font-semibold",
							children: _t + 1
						}), Tt.jsx("div", {
							className: "bg-token-bg-secondary border-token-border-light overflow-hidden rounded-md border",
							children: Tt.jsx("img", {
								src: ut,
								alt: "",
								className: "w-full"
							})
						})]
					}, _t)
				})
			}), Tt.jsxs("div", {
				className: `bg-token-bg-secondary/20 hidden flex-1 flex-col items-center justify-center overflow-hidden sm:flex ${i?"pb-16":""}`,
				children: [u ? Tt.jsx("div", {
					className: "flex w-full flex-1 flex-col items-center justify-center overflow-hidden p-6",
					ref: j,
					children: Tt.jsxs("div", {
						ref: _,
						className: `border-token-border-light relative flex items-center justify-center overflow-hidden rounded-md border shadow-md ${dt?"visible":"invisible"}`,
						children: [Tt.jsx("canvas", {
							ref: F,
							onMouseMove: q,
							onMouseLeave: T,
							onMouseDown: ct,
							onMouseUp: st,
							onClick: C,
							className: "max-h-full max-w-full select-none"
						}), Tt.jsx(ql, {
							children: lt && Tt.jsx(hf.div, {
								ref: z,
								initial: {
									opacity: 0,
									scale: .95
								},
								animate: {
									opacity: 1,
									scale: 1
								},
								exit: {
									opacity: 0,
									scale: .95
								},
								transition: {
									duration: .15,
									ease: "easeOut"
								},
								className: "absolute z-50 max-w-[300px] px-1 py-2 text-xs",
								style: {
									left: R?.left ?? 0,
									top: R?.top ?? 0
								},
								onClick: () => {
									Y(null), K(null)
								},
								children: Tt.jsx("div", {
									className: "bg-token-bg-primary text-token-text-primary truncate rounded-md px-1 py-2 shadow-md",
									children: lt.url
								})
							})
						})]
					})
				}) : Tt.jsx("span", {
					className: "text-gray-400",
					children: Tt.jsx(ui, {
						id: "load-deck-to-begin",
						defaultMessage: "Load a slide to begin"
					})
				}), Tt.jsx(d2, {
					setNotesHeight: Q,
					notesHeight: ht
				}), Tt.jsx("div", {
					className: "text-token-text-primary w-full px-6 pt-3 pb-6 text-sm",
					style: {
						height: `${ht}px`
					},
					children: Tt.jsx(g2, {
						slide: u
					})
				}), !1]
			})]
		})
	})
}

function be(e) {
	"@babel/helpers - typeof";
	return be = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
		return typeof t
	} : function(t) {
		return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
	}, be(e)
}
var gn = Uint8Array,
	Mn = Uint16Array,
	Cu = Int32Array,
	Go = new gn([0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 2, 2, 2, 2, 3, 3, 3, 3, 4, 4, 4, 4, 5, 5, 5, 5, 0, 0, 0, 0]),
	Yo = new gn([0, 0, 0, 0, 1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9, 10, 10, 11, 11, 12, 12, 13, 13, 0, 0]),
	au = new gn([16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14, 1, 15]),
	sc = function(e, t) {
		for (var n = new Mn(31), i = 0; i < 31; ++i) n[i] = t += 1 << e[i - 1];
		for (var o = new Cu(n[30]), i = 1; i < 30; ++i)
			for (var a = n[i]; a < n[i + 1]; ++a) o[a] = a - n[i] << 5 | i;
		return {
			b: n,
			r: o
		}
	},
	uc = sc(Go, 2),
	lc = uc.b,
	ou = uc.r;
lc[28] = 258, ou[258] = 28;
var cc = sc(Yo, 0),
	w2 = cc.b,
	yl = cc.r,
	su = new Mn(32768);
for (var Ce = 0; Ce < 32768; ++Ce) {
	var Ur = (Ce & 43690) >> 1 | (Ce & 21845) << 1;
	Ur = (Ur & 52428) >> 2 | (Ur & 13107) << 2, Ur = (Ur & 61680) >> 4 | (Ur & 3855) << 4, su[Ce] = ((Ur & 65280) >> 8 | (Ur & 255) << 8) >> 1
}
var pr = function(e, t, n) {
		for (var i = e.length, o = 0, a = new Mn(t); o < i; ++o) e[o] && ++a[e[o] - 1];
		var u = new Mn(t);
		for (o = 1; o < t; ++o) u[o] = u[o - 1] + a[o - 1] << 1;
		var c;
		if (n) {
			c = new Mn(1 << t);
			var f = 15 - t;
			for (o = 0; o < i; ++o)
				if (e[o])
					for (var p = o << 4 | e[o], v = t - e[o], m = u[e[o] - 1]++ << v, y = m | (1 << v) - 1; m <= y; ++m) c[su[m] >> f] = p
		} else
			for (c = new Mn(i), o = 0; o < i; ++o) e[o] && (c[o] = su[u[e[o] - 1]++] >> 15 - e[o]);
		return c
	},
	Yr = new gn(288);
for (var Ce = 0; Ce < 144; ++Ce) Yr[Ce] = 8;
for (var Ce = 144; Ce < 256; ++Ce) Yr[Ce] = 9;
for (var Ce = 256; Ce < 280; ++Ce) Yr[Ce] = 7;
for (var Ce = 280; Ce < 288; ++Ce) Yr[Ce] = 8;
var Oa = new gn(32);
for (var Ce = 0; Ce < 32; ++Ce) Oa[Ce] = 5;
var y2 = pr(Yr, 9, 0),
	x2 = pr(Yr, 9, 1),
	N2 = pr(Oa, 5, 0),
	L2 = pr(Oa, 5, 1),
	Hs = function(e) {
		for (var t = e[0], n = 1; n < e.length; ++n) e[n] > t && (t = e[n]);
		return t
	},
	tr = function(e, t, n) {
		var i = t / 8 | 0;
		return (e[i] | e[i + 1] << 8) >> (t & 7) & n
	},
	Ws = function(e, t) {
		var n = t / 8 | 0;
		return (e[n] | e[n + 1] << 8 | e[n + 2] << 16) >> (t & 7)
	},
	Iu = function(e) {
		return (e + 7) / 8 | 0
	},
	fc = function(e, t, n) {
		return (n == null || n > e.length) && (n = e.length), new gn(e.subarray(t, n))
	},
	A2 = ["unexpected EOF", "invalid block type", "invalid length/literal", "invalid distance", "stream finished", "no stream handler", , "no callback", "invalid UTF-8 data", "extra field too long", "date not in range 1980-2099", "filename too long", "stream finishing", "invalid zip data"],
	nr = function(e, t, n) {
		var i = new Error(t || A2[e]);
		if (i.code = e, Error.captureStackTrace && Error.captureStackTrace(i, nr), !n) throw i;
		return i
	},
	S2 = function(e, t, n, i) {
		var o = e.length,
			a = 0;
		if (!o || t.f && !t.l) return n || new gn(0);
		var u = !n,
			c = u || t.i != 2,
			f = t.i;
		u && (n = new gn(o * 3));
		var p = function(Lt) {
				var Pt = n.length;
				if (Lt > Pt) {
					var It = new gn(Math.max(Pt * 2, Lt));
					It.set(n), n = It
				}
			},
			v = t.f || 0,
			m = t.p || 0,
			y = t.b || 0,
			d = t.l,
			I = t.d,
			A = t.m,
			F = t.n,
			_ = o * 8;
		do {
			if (!d) {
				v = tr(e, m, 1);
				var j = tr(e, m + 1, 3);
				if (m += 3, j)
					if (j == 1) d = x2, I = L2, A = 9, F = 5;
					else if (j == 2) {
					var lt = tr(e, m, 31) + 257,
						Y = tr(e, m + 10, 15) + 4,
						R = lt + tr(e, m + 5, 31) + 1;
					m += 14;
					for (var K = new gn(R), ot = new gn(19), P = 0; P < Y; ++P) ot[au[P]] = tr(e, m + P * 3, 7);
					m += Y * 3;
					for (var C = Hs(ot), q = (1 << C) - 1, T = pr(ot, C, 1), P = 0; P < R;) {
						var ct = T[tr(e, m, q)];
						m += ct & 15;
						var z = ct >> 4;
						if (z < 16) K[P++] = z;
						else {
							var st = 0,
								ht = 0;
							for (z == 16 ? (ht = 3 + tr(e, m, 3), m += 2, st = K[P - 1]) : z == 17 ? (ht = 3 + tr(e, m, 7), m += 3) : z == 18 && (ht = 11 + tr(e, m, 127), m += 7); ht--;) K[P++] = st
						}
					}
					var Q = K.subarray(0, lt),
						dt = K.subarray(lt);
					A = Hs(Q), F = Hs(dt), d = pr(Q, A, 1), I = pr(dt, F, 1)
				} else nr(1);
				else {
					var z = Iu(m) + 4,
						$ = e[z - 4] | e[z - 3] << 8,
						rt = z + $;
					if (rt > o) {
						f && nr(0);
						break
					}
					c && p(y + $), n.set(e.subarray(z, rt), y), t.b = y += $, t.p = m = rt * 8, t.f = v;
					continue
				}
				if (m > _) {
					f && nr(0);
					break
				}
			}
			c && p(y + 131072);
			for (var ut = (1 << A) - 1, _t = (1 << F) - 1, L = m;; L = m) {
				var st = d[Ws(e, m) & ut],
					M = st >> 4;
				if (m += st & 15, m > _) {
					f && nr(0);
					break
				}
				if (st || nr(2), M < 256) n[y++] = M;
				else if (M == 256) {
					L = m, d = null;
					break
				} else {
					var O = M - 254;
					if (M > 264) {
						var P = M - 257,
							U = Go[P];
						O = tr(e, m, (1 << U) - 1) + lc[P], m += U
					}
					var V = I[Ws(e, m) & _t],
						nt = V >> 4;
					V || nr(3), m += V & 15;
					var dt = w2[nt];
					if (nt > 3) {
						var U = Yo[nt];
						dt += Ws(e, m) & (1 << U) - 1, m += U
					}
					if (m > _) {
						f && nr(0);
						break
					}
					c && p(y + 131072);
					var at = y + O;
					if (y < dt) {
						var it = a - dt,
							xt = Math.min(dt, at);
						for (it + y < 0 && nr(3); y < xt; ++y) n[y] = i[it + y]
					}
					for (; y < at; ++y) n[y] = n[y - dt]
				}
			}
			t.l = d, t.p = L, t.b = y, t.f = v, d && (v = 1, t.m = A, t.d = I, t.n = F)
		} while (!v);
		return y != n.length && u ? fc(n, 0, y) : n.subarray(0, y)
	},
	Pr = function(e, t, n) {
		n <<= t & 7;
		var i = t / 8 | 0;
		e[i] |= n, e[i + 1] |= n >> 8
	},
	Pa = function(e, t, n) {
		n <<= t & 7;
		var i = t / 8 | 0;
		e[i] |= n, e[i + 1] |= n >> 8, e[i + 2] |= n >> 16
	},
	Vs = function(e, t) {
		for (var n = [], i = 0; i < e.length; ++i) e[i] && n.push({
			s: i,
			f: e[i]
		});
		var o = n.length,
			a = n.slice();
		if (!o) return {
			t: dc,
			l: 0
		};
		if (o == 1) {
			var u = new gn(n[0].s + 1);
			return u[n[0].s] = 1, {
				t: u,
				l: 1
			}
		}
		n.sort(function(rt, lt) {
			return rt.f - lt.f
		}), n.push({
			s: -1,
			f: 25001
		});
		var c = n[0],
			f = n[1],
			p = 0,
			v = 1,
			m = 2;
		for (n[0] = {
				s: -1,
				f: c.f + f.f,
				l: c,
				r: f
			}; v != o - 1;) c = n[n[p].f < n[m].f ? p++ : m++], f = n[p != v && n[p].f < n[m].f ? p++ : m++], n[v++] = {
			s: -1,
			f: c.f + f.f,
			l: c,
			r: f
		};
		for (var y = a[0].s, i = 1; i < o; ++i) a[i].s > y && (y = a[i].s);
		var d = new Mn(y + 1),
			I = uu(n[v - 1], d, 0);
		if (I > t) {
			var i = 0,
				A = 0,
				F = I - t,
				_ = 1 << F;
			for (a.sort(function(lt, Y) {
					return d[Y.s] - d[lt.s] || lt.f - Y.f
				}); i < o; ++i) {
				var j = a[i].s;
				if (d[j] > t) A += _ - (1 << I - d[j]), d[j] = t;
				else break
			}
			for (A >>= F; A > 0;) {
				var z = a[i].s;
				d[z] < t ? A -= 1 << t - d[z]++ - 1 : ++i
			}
			for (; i >= 0 && A; --i) {
				var $ = a[i].s;
				d[$] == t && (--d[$], ++A)
			}
			I = t
		}
		return {
			t: new gn(d),
			l: I
		}
	},
	uu = function(e, t, n) {
		return e.s == -1 ? Math.max(uu(e.l, t, n + 1), uu(e.r, t, n + 1)) : t[e.s] = n
	},
	xl = function(e) {
		for (var t = e.length; t && !e[--t];);
		for (var n = new Mn(++t), i = 0, o = e[0], a = 1, u = function(f) {
				n[i++] = f
			}, c = 1; c <= t; ++c)
			if (e[c] == o && c != t) ++a;
			else {
				if (!o && a > 2) {
					for (; a > 138; a -= 138) u(32754);
					a > 2 && (u(a > 10 ? a - 11 << 5 | 28690 : a - 3 << 5 | 12305), a = 0)
				} else if (a > 3) {
					for (u(o), --a; a > 6; a -= 6) u(8304);
					a > 2 && (u(a - 3 << 5 | 8208), a = 0)
				}
				for (; a--;) u(o);
				a = 1, o = e[c]
			} return {
			c: n.subarray(0, i),
			n: t
		}
	},
	ka = function(e, t) {
		for (var n = 0, i = 0; i < t.length; ++i) n += e[i] * t[i];
		return n
	},
	hc = function(e, t, n) {
		var i = n.length,
			o = Iu(t + 2);
		e[o] = i & 255, e[o + 1] = i >> 8, e[o + 2] = e[o] ^ 255, e[o + 3] = e[o + 1] ^ 255;
		for (var a = 0; a < i; ++a) e[o + a + 4] = n[a];
		return (o + 4 + i) * 8
	},
	Nl = function(e, t, n, i, o, a, u, c, f, p, v) {
		Pr(t, v++, n), ++o[256];
		for (var m = Vs(o, 15), y = m.t, d = m.l, I = Vs(a, 15), A = I.t, F = I.l, _ = xl(y), j = _.c, z = _.n, $ = xl(A), rt = $.c, lt = $.n, Y = new Mn(19), R = 0; R < j.length; ++R) ++Y[j[R] & 31];
		for (var R = 0; R < rt.length; ++R) ++Y[rt[R] & 31];
		for (var K = Vs(Y, 7), ot = K.t, P = K.l, C = 19; C > 4 && !ot[au[C - 1]]; --C);
		var q = p + 5 << 3,
			T = ka(o, Yr) + ka(a, Oa) + u,
			ct = ka(o, y) + ka(a, A) + u + 14 + 3 * C + ka(Y, ot) + 2 * Y[16] + 3 * Y[17] + 7 * Y[18];
		if (f >= 0 && q <= T && q <= ct) return hc(t, v, e.subarray(f, f + p));
		var st, ht, Q, dt;
		if (Pr(t, v, 1 + (ct < T)), v += 2, ct < T) {
			st = pr(y, d, 0), ht = y, Q = pr(A, F, 0), dt = A;
			var ut = pr(ot, P, 0);
			Pr(t, v, z - 257), Pr(t, v + 5, lt - 1), Pr(t, v + 10, C - 4), v += 14;
			for (var R = 0; R < C; ++R) Pr(t, v + 3 * R, ot[au[R]]);
			v += 3 * C;
			for (var _t = [j, rt], L = 0; L < 2; ++L)
				for (var M = _t[L], R = 0; R < M.length; ++R) {
					var O = M[R] & 31;
					Pr(t, v, ut[O]), v += ot[O], O > 15 && (Pr(t, v, M[R] >> 5 & 127), v += M[R] >> 12)
				}
		} else st = y2, ht = Yr, Q = N2, dt = Oa;
		for (var R = 0; R < c; ++R) {
			var U = i[R];
			if (U > 255) {
				var O = U >> 18 & 31;
				Pa(t, v, st[O + 257]), v += ht[O + 257], O > 7 && (Pr(t, v, U >> 23 & 31), v += Go[O]);
				var V = U & 31;
				Pa(t, v, Q[V]), v += dt[V], V > 3 && (Pa(t, v, U >> 5 & 8191), v += Yo[V])
			} else Pa(t, v, st[U]), v += ht[U]
		}
		return Pa(t, v, st[256]), v + ht[256]
	},
	_2 = new Cu([65540, 131080, 131088, 131104, 262176, 1048704, 1048832, 2114560, 2117632]),
	dc = new gn(0),
	P2 = function(e, t, n, i, o, a) {
		var u = a.z || e.length,
			c = new gn(i + u + 5 * (1 + Math.ceil(u / 7e3)) + o),
			f = c.subarray(i, c.length - o),
			p = a.l,
			v = (a.r || 0) & 7;
		if (t) {
			v && (f[0] = a.r >> 3);
			for (var m = _2[t - 1], y = m >> 13, d = m & 8191, I = (1 << n) - 1, A = a.p || new Mn(32768), F = a.h || new Mn(I + 1), _ = Math.ceil(n / 3), j = 2 * _, z = function(Ut) {
					return (e[Ut] ^ e[Ut + 1] << _ ^ e[Ut + 2] << j) & I
				}, $ = new Cu(25e3), rt = new Mn(288), lt = new Mn(32), Y = 0, R = 0, K = a.i || 0, ot = 0, P = a.w || 0, C = 0; K + 2 < u; ++K) {
				var q = z(K),
					T = K & 32767,
					ct = F[q];
				if (A[T] = ct, F[q] = T, P <= K) {
					var st = u - K;
					if ((Y > 7e3 || ot > 24576) && (st > 423 || !p)) {
						v = Nl(e, f, 0, $, rt, lt, R, ot, C, K - C, v), ot = Y = R = 0, C = K;
						for (var ht = 0; ht < 286; ++ht) rt[ht] = 0;
						for (var ht = 0; ht < 30; ++ht) lt[ht] = 0
					}
					var Q = 2,
						dt = 0,
						ut = d,
						_t = T - ct & 32767;
					if (st > 2 && q == z(K - _t))
						for (var L = Math.min(y, st) - 1, M = Math.min(32767, K), O = Math.min(258, st); _t <= M && --ut && T != ct;) {
							if (e[K + Q] == e[K + Q - _t]) {
								for (var U = 0; U < O && e[K + U] == e[K + U - _t]; ++U);
								if (U > Q) {
									if (Q = U, dt = _t, U > L) break;
									for (var V = Math.min(_t, U - 2), nt = 0, ht = 0; ht < V; ++ht) {
										var at = K - _t + ht & 32767,
											it = A[at],
											xt = at - it & 32767;
										xt > nt && (nt = xt, ct = at)
									}
								}
							}
							T = ct, ct = A[T], _t += T - ct & 32767
						}
					if (dt) {
						$[ot++] = 268435456 | ou[Q] << 18 | yl[dt];
						var Lt = ou[Q] & 31,
							Pt = yl[dt] & 31;
						R += Go[Lt] + Yo[Pt], ++rt[257 + Lt], ++lt[Pt], P = K + Q, ++Y
					} else $[ot++] = e[K], ++rt[e[K]]
				}
			}
			for (K = Math.max(K, P); K < u; ++K) $[ot++] = e[K], ++rt[e[K]];
			v = Nl(e, f, p, $, rt, lt, R, ot, C, K - C, v), p || (a.r = v & 7 | f[v / 8 | 0] << 3, v -= 7, a.h = F, a.p = A, a.i = K, a.w = P)
		} else {
			for (var K = a.w || 0; K < u + p; K += 65535) {
				var It = K + 65535;
				It >= u && (f[v / 8 | 0] = p, It = u), v = hc(f, v + 1, e.subarray(K, It))
			}
			a.i = u
		}
		return fc(c, 0, i + Iu(v) + o)
	},
	pc = function() {
		var e = 1,
			t = 0;
		return {
			p: function(n) {
				for (var i = e, o = t, a = n.length | 0, u = 0; u != a;) {
					for (var c = Math.min(u + 2655, a); u < c; ++u) o += i += n[u];
					i = (i & 65535) + 15 * (i >> 16), o = (o & 65535) + 15 * (o >> 16)
				}
				e = i, t = o
			},
			d: function() {
				return e %= 65521, t %= 65521, (e & 255) << 24 | (e & 65280) << 8 | (t & 255) << 8 | t >> 8
			}
		}
	},
	k2 = function(e, t, n, i, o) {
		if (!o && (o = {
				l: 1
			}, t.dictionary)) {
			var a = t.dictionary.subarray(-32768),
				u = new gn(a.length + e.length);
			u.set(a), u.set(e, a.length), e = u, o.w = a.length
		}
		return P2(e, t.level == null ? 6 : t.level, t.mem == null ? o.l ? Math.ceil(Math.max(8, Math.min(13, Math.log(e.length))) * 1.5) : 20 : 12 + t.mem, n, i, o)
	},
	gc = function(e, t, n) {
		for (; n; ++t) e[t] = n, n >>>= 8
	},
	C2 = function(e, t) {
		var n = t.level,
			i = n == 0 ? 0 : n < 6 ? 1 : n == 9 ? 3 : 2;
		if (e[0] = 120, e[1] = i << 6 | (t.dictionary && 32), e[1] |= 31 - (e[0] << 8 | e[1]) % 31, t.dictionary) {
			var o = pc();
			o.p(t.dictionary), gc(e, 2, o.d())
		}
	},
	I2 = function(e, t) {
		return ((e[0] & 15) != 8 || e[0] >> 4 > 7 || (e[0] << 8 | e[1]) % 31) && nr(6, "invalid zlib data"), (e[1] >> 5 & 1) == 1 && nr(6, "invalid zlib data: " + (e[1] & 32 ? "need" : "unexpected") + " dictionary"), (e[1] >> 3 & 4) + 2
	};

function lu(e, t) {
	t || (t = {});
	var n = pc();
	n.p(e);
	var i = k2(e, t, t.dictionary ? 6 : 2, 4);
	return C2(i, t), gc(i, i.length - 4, n.d()), i
}

function F2(e, t) {
	return S2(e.subarray(I2(e), -4), {
		i: 2
	}, t, t)
}
var j2 = typeof TextDecoder < "u" && new TextDecoder,
	E2 = 0;
try {
	j2.decode(dc, {
		stream: !0
	}), E2 = 1
} catch {}
var Yt = function() {
	return typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : this
}();

function Gs() {
	Yt.console && typeof Yt.console.log == "function" && Yt.console.log.apply(Yt.console, arguments)
}
var Ne = {
	log: Gs,
	warn: function(e) {
		Yt.console && (typeof Yt.console.warn == "function" ? Yt.console.warn.apply(Yt.console, arguments) : Gs.call(null, arguments))
	},
	error: function(e) {
		Yt.console && (typeof Yt.console.error == "function" ? Yt.console.error.apply(Yt.console, arguments) : Gs(e))
	}
};

function Ys(e, t, n) {
	var i = new XMLHttpRequest;
	i.open("GET", e), i.responseType = "blob", i.onload = function() {
		oi(i.response, t, n)
	}, i.onerror = function() {
		Ne.error("could not download file")
	}, i.send()
}

function Ll(e) {
	var t = new XMLHttpRequest;
	t.open("HEAD", e, !1);
	try {
		t.send()
	} catch {}
	return t.status >= 200 && t.status <= 299
}

function Fo(e) {
	try {
		e.dispatchEvent(new MouseEvent("click"))
	} catch {
		var t = document.createEvent("MouseEvents");
		t.initMouseEvent("click", !0, !0, window, 0, 0, 0, 80, 20, !1, !1, !1, !1, 0, null), e.dispatchEvent(t)
	}
}
var Ea, cu, oi = Yt.saveAs || ((typeof window > "u" ? "undefined" : be(window)) !== "object" || window !== Yt ? function() {} : typeof HTMLAnchorElement < "u" && "download" in HTMLAnchorElement.prototype ? function(e, t, n) {
	var i = Yt.URL || Yt.webkitURL,
		o = document.createElement("a");
	t = t || e.name || "download", o.download = t, o.rel = "noopener", typeof e == "string" ? (o.href = e, o.origin !== location.origin ? Ll(o.href) ? Ys(e, t, n) : Fo(o, o.target = "_blank") : Fo(o)) : (o.href = i.createObjectURL(e), setTimeout(function() {
		i.revokeObjectURL(o.href)
	}, 4e4), setTimeout(function() {
		Fo(o)
	}, 0))
} : "msSaveOrOpenBlob" in navigator ? function(e, t, n) {
	if (t = t || e.name || "download", typeof e == "string")
		if (Ll(e)) Ys(e, t, n);
		else {
			var i = document.createElement("a");
			i.href = e, i.target = "_blank", setTimeout(function() {
				Fo(i)
			})
		}
	else navigator.msSaveOrOpenBlob(function(o, a) {
		return a === void 0 ? a = {
			autoBom: !1
		} : be(a) !== "object" && (Ne.warn("Deprecated: Expected third argument to be a object"), a = {
			autoBom: !a
		}), a.autoBom && /^\s*(?:text\/\S*|application\/xml|\S*\/\S*\+xml)\s*;.*charset\s*=\s*utf-8/i.test(o.type) ? new Blob(["\uFEFF", o], {
			type: o.type
		}) : o
	}(e, n), t)
} : function(e, t, n, i) {
	if ((i = i || open("", "_blank")) && (i.document.title = i.document.body.innerText = "downloading..."), typeof e == "string") return Ys(e, t, n);
	var o = e.type === "application/octet-stream",
		a = /constructor/i.test(Yt.HTMLElement) || Yt.safari,
		u = /CriOS\/[\d]+/.test(navigator.userAgent);
	if ((u || o && a) && (typeof FileReader > "u" ? "undefined" : be(FileReader)) === "object") {
		var c = new FileReader;
		c.onloadend = function() {
			var v = c.result;
			v = u ? v : v.replace(/^data:[^;]*;/, "data:attachment/file;"), i ? i.location.href = v : location = v, i = null
		}, c.readAsDataURL(e)
	} else {
		var f = Yt.URL || Yt.webkitURL,
			p = f.createObjectURL(e);
		i ? i.location = p : location.href = p, i = null, setTimeout(function() {
			f.revokeObjectURL(p)
		}, 4e4)
	}
});
/**
 * A class to parse color values
 * @author Stoyan Stefanov <sstoo@gmail.com>
 * {@link   http://www.phpied.com/rgb-color-parser-in-javascript/}
 * @license Use it if you like it
 */
function mc(e) {
	var t;
	e = e || "", this.ok = !1, e.charAt(0) == "#" && (e = e.substr(1, 6)), e = {
		aliceblue: "f0f8ff",
		antiquewhite: "faebd7",
		aqua: "00ffff",
		aquamarine: "7fffd4",
		azure: "f0ffff",
		beige: "f5f5dc",
		bisque: "ffe4c4",
		black: "000000",
		blanchedalmond: "ffebcd",
		blue: "0000ff",
		blueviolet: "8a2be2",
		brown: "a52a2a",
		burlywood: "deb887",
		cadetblue: "5f9ea0",
		chartreuse: "7fff00",
		chocolate: "d2691e",
		coral: "ff7f50",
		cornflowerblue: "6495ed",
		cornsilk: "fff8dc",
		crimson: "dc143c",
		cyan: "00ffff",
		darkblue: "00008b",
		darkcyan: "008b8b",
		darkgoldenrod: "b8860b",
		darkgray: "a9a9a9",
		darkgreen: "006400",
		darkkhaki: "bdb76b",
		darkmagenta: "8b008b",
		darkolivegreen: "556b2f",
		darkorange: "ff8c00",
		darkorchid: "9932cc",
		darkred: "8b0000",
		darksalmon: "e9967a",
		darkseagreen: "8fbc8f",
		darkslateblue: "483d8b",
		darkslategray: "2f4f4f",
		darkturquoise: "00ced1",
		darkviolet: "9400d3",
		deeppink: "ff1493",
		deepskyblue: "00bfff",
		dimgray: "696969",
		dodgerblue: "1e90ff",
		feldspar: "d19275",
		firebrick: "b22222",
		floralwhite: "fffaf0",
		forestgreen: "228b22",
		fuchsia: "ff00ff",
		gainsboro: "dcdcdc",
		ghostwhite: "f8f8ff",
		gold: "ffd700",
		goldenrod: "daa520",
		gray: "808080",
		green: "008000",
		greenyellow: "adff2f",
		honeydew: "f0fff0",
		hotpink: "ff69b4",
		indianred: "cd5c5c",
		indigo: "4b0082",
		ivory: "fffff0",
		khaki: "f0e68c",
		lavender: "e6e6fa",
		lavenderblush: "fff0f5",
		lawngreen: "7cfc00",
		lemonchiffon: "fffacd",
		lightblue: "add8e6",
		lightcoral: "f08080",
		lightcyan: "e0ffff",
		lightgoldenrodyellow: "fafad2",
		lightgrey: "d3d3d3",
		lightgreen: "90ee90",
		lightpink: "ffb6c1",
		lightsalmon: "ffa07a",
		lightseagreen: "20b2aa",
		lightskyblue: "87cefa",
		lightslateblue: "8470ff",
		lightslategray: "778899",
		lightsteelblue: "b0c4de",
		lightyellow: "ffffe0",
		lime: "00ff00",
		limegreen: "32cd32",
		linen: "faf0e6",
		magenta: "ff00ff",
		maroon: "800000",
		mediumaquamarine: "66cdaa",
		mediumblue: "0000cd",
		mediumorchid: "ba55d3",
		mediumpurple: "9370d8",
		mediumseagreen: "3cb371",
		mediumslateblue: "7b68ee",
		mediumspringgreen: "00fa9a",
		mediumturquoise: "48d1cc",
		mediumvioletred: "c71585",
		midnightblue: "191970",
		mintcream: "f5fffa",
		mistyrose: "ffe4e1",
		moccasin: "ffe4b5",
		navajowhite: "ffdead",
		navy: "000080",
		oldlace: "fdf5e6",
		olive: "808000",
		olivedrab: "6b8e23",
		orange: "ffa500",
		orangered: "ff4500",
		orchid: "da70d6",
		palegoldenrod: "eee8aa",
		palegreen: "98fb98",
		paleturquoise: "afeeee",
		palevioletred: "d87093",
		papayawhip: "ffefd5",
		peachpuff: "ffdab9",
		peru: "cd853f",
		pink: "ffc0cb",
		plum: "dda0dd",
		powderblue: "b0e0e6",
		purple: "800080",
		red: "ff0000",
		rosybrown: "bc8f8f",
		royalblue: "4169e1",
		saddlebrown: "8b4513",
		salmon: "fa8072",
		sandybrown: "f4a460",
		seagreen: "2e8b57",
		seashell: "fff5ee",
		sienna: "a0522d",
		silver: "c0c0c0",
		skyblue: "87ceeb",
		slateblue: "6a5acd",
		slategray: "708090",
		snow: "fffafa",
		springgreen: "00ff7f",
		steelblue: "4682b4",
		tan: "d2b48c",
		teal: "008080",
		thistle: "d8bfd8",
		tomato: "ff6347",
		turquoise: "40e0d0",
		violet: "ee82ee",
		violetred: "d02090",
		wheat: "f5deb3",
		white: "ffffff",
		whitesmoke: "f5f5f5",
		yellow: "ffff00",
		yellowgreen: "9acd32"
	} [e = (e = e.replace(/ /g, "")).toLowerCase()] || e;
	for (var n = [{
			re: /^rgb\((\d{1,3}),\s*(\d{1,3}),\s*(\d{1,3})\)$/,
			example: ["rgb(123, 234, 45)", "rgb(255,234,245)"],
			process: function(c) {
				return [parseInt(c[1]), parseInt(c[2]), parseInt(c[3])]
			}
		}, {
			re: /^(\w{2})(\w{2})(\w{2})$/,
			example: ["#00ff00", "336699"],
			process: function(c) {
				return [parseInt(c[1], 16), parseInt(c[2], 16), parseInt(c[3], 16)]
			}
		}, {
			re: /^(\w{1})(\w{1})(\w{1})$/,
			example: ["#fb0", "f0f"],
			process: function(c) {
				return [parseInt(c[1] + c[1], 16), parseInt(c[2] + c[2], 16), parseInt(c[3] + c[3], 16)]
			}
		}], i = 0; i < n.length; i++) {
		var o = n[i].re,
			a = n[i].process,
			u = o.exec(e);
		u && (t = a(u), this.r = t[0], this.g = t[1], this.b = t[2], this.ok = !0)
	}
	this.r = this.r < 0 || isNaN(this.r) ? 0 : this.r > 255 ? 255 : this.r, this.g = this.g < 0 || isNaN(this.g) ? 0 : this.g > 255 ? 255 : this.g, this.b = this.b < 0 || isNaN(this.b) ? 0 : this.b > 255 ? 255 : this.b, this.toRGB = function() {
		return "rgb(" + this.r + ", " + this.g + ", " + this.b + ")"
	}, this.toHex = function() {
		var c = this.r.toString(16),
			f = this.g.toString(16),
			p = this.b.toString(16);
		return c.length == 1 && (c = "0" + c), f.length == 1 && (f = "0" + f), p.length == 1 && (p = "0" + p), "#" + c + f + p
	}
}
/**
 * @license
 * Joseph Myers does not specify a particular license for his work.
 *
 * Author: Joseph Myers
 * Accessed from: http://www.myersdaily.org/joseph/javascript/md5.js
 *
 * Modified by: Owen Leong
 */
function Js(e, t) {
	var n = e[0],
		i = e[1],
		o = e[2],
		a = e[3];
	n = cn(n, i, o, a, t[0], 7, -680876936), a = cn(a, n, i, o, t[1], 12, -389564586), o = cn(o, a, n, i, t[2], 17, 606105819), i = cn(i, o, a, n, t[3], 22, -1044525330), n = cn(n, i, o, a, t[4], 7, -176418897), a = cn(a, n, i, o, t[5], 12, 1200080426), o = cn(o, a, n, i, t[6], 17, -1473231341), i = cn(i, o, a, n, t[7], 22, -45705983), n = cn(n, i, o, a, t[8], 7, 1770035416), a = cn(a, n, i, o, t[9], 12, -1958414417), o = cn(o, a, n, i, t[10], 17, -42063), i = cn(i, o, a, n, t[11], 22, -1990404162), n = cn(n, i, o, a, t[12], 7, 1804603682), a = cn(a, n, i, o, t[13], 12, -40341101), o = cn(o, a, n, i, t[14], 17, -1502002290), n = fn(n, i = cn(i, o, a, n, t[15], 22, 1236535329), o, a, t[1], 5, -165796510), a = fn(a, n, i, o, t[6], 9, -1069501632), o = fn(o, a, n, i, t[11], 14, 643717713), i = fn(i, o, a, n, t[0], 20, -373897302), n = fn(n, i, o, a, t[5], 5, -701558691), a = fn(a, n, i, o, t[10], 9, 38016083), o = fn(o, a, n, i, t[15], 14, -660478335), i = fn(i, o, a, n, t[4], 20, -405537848), n = fn(n, i, o, a, t[9], 5, 568446438), a = fn(a, n, i, o, t[14], 9, -1019803690), o = fn(o, a, n, i, t[3], 14, -187363961), i = fn(i, o, a, n, t[8], 20, 1163531501), n = fn(n, i, o, a, t[13], 5, -1444681467), a = fn(a, n, i, o, t[2], 9, -51403784), o = fn(o, a, n, i, t[7], 14, 1735328473), n = hn(n, i = fn(i, o, a, n, t[12], 20, -1926607734), o, a, t[5], 4, -378558), a = hn(a, n, i, o, t[8], 11, -2022574463), o = hn(o, a, n, i, t[11], 16, 1839030562), i = hn(i, o, a, n, t[14], 23, -35309556), n = hn(n, i, o, a, t[1], 4, -1530992060), a = hn(a, n, i, o, t[4], 11, 1272893353), o = hn(o, a, n, i, t[7], 16, -155497632), i = hn(i, o, a, n, t[10], 23, -1094730640), n = hn(n, i, o, a, t[13], 4, 681279174), a = hn(a, n, i, o, t[0], 11, -358537222), o = hn(o, a, n, i, t[3], 16, -722521979), i = hn(i, o, a, n, t[6], 23, 76029189), n = hn(n, i, o, a, t[9], 4, -640364487), a = hn(a, n, i, o, t[12], 11, -421815835), o = hn(o, a, n, i, t[15], 16, 530742520), n = dn(n, i = hn(i, o, a, n, t[2], 23, -995338651), o, a, t[0], 6, -198630844), a = dn(a, n, i, o, t[7], 10, 1126891415), o = dn(o, a, n, i, t[14], 15, -1416354905), i = dn(i, o, a, n, t[5], 21, -57434055), n = dn(n, i, o, a, t[12], 6, 1700485571), a = dn(a, n, i, o, t[3], 10, -1894986606), o = dn(o, a, n, i, t[10], 15, -1051523), i = dn(i, o, a, n, t[1], 21, -2054922799), n = dn(n, i, o, a, t[8], 6, 1873313359), a = dn(a, n, i, o, t[15], 10, -30611744), o = dn(o, a, n, i, t[6], 15, -1560198380), i = dn(i, o, a, n, t[13], 21, 1309151649), n = dn(n, i, o, a, t[4], 6, -145523070), a = dn(a, n, i, o, t[11], 10, -1120210379), o = dn(o, a, n, i, t[2], 15, 718787259), i = dn(i, o, a, n, t[9], 21, -343485551), e[0] = Vr(n, e[0]), e[1] = Vr(i, e[1]), e[2] = Vr(o, e[2]), e[3] = Vr(a, e[3])
}

function Jo(e, t, n, i, o, a) {
	return t = Vr(Vr(t, e), Vr(i, a)), Vr(t << o | t >>> 32 - o, n)
}

function cn(e, t, n, i, o, a, u) {
	return Jo(t & n | ~t & i, e, t, o, a, u)
}

function fn(e, t, n, i, o, a, u) {
	return Jo(t & i | n & ~i, e, t, o, a, u)
}

function hn(e, t, n, i, o, a, u) {
	return Jo(t ^ n ^ i, e, t, o, a, u)
}

function dn(e, t, n, i, o, a, u) {
	return Jo(n ^ (t | ~i), e, t, o, a, u)
}

function vc(e) {
	var t, n = e.length,
		i = [1732584193, -271733879, -1732584194, 271733878];
	for (t = 64; t <= e.length; t += 64) Js(i, M2(e.substring(t - 64, t)));
	e = e.substring(t - 64);
	var o = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
	for (t = 0; t < e.length; t++) o[t >> 2] |= e.charCodeAt(t) << (t % 4 << 3);
	if (o[t >> 2] |= 128 << (t % 4 << 3), t > 55)
		for (Js(i, o), t = 0; t < 16; t++) o[t] = 0;
	return o[14] = 8 * n, Js(i, o), i
}

function M2(e) {
	var t, n = [];
	for (t = 0; t < 64; t += 4) n[t >> 2] = e.charCodeAt(t) + (e.charCodeAt(t + 1) << 8) + (e.charCodeAt(t + 2) << 16) + (e.charCodeAt(t + 3) << 24);
	return n
}
Ea = Yt.atob.bind(Yt), cu = Yt.btoa.bind(Yt);
var Al = "0123456789abcdef".split("");

function D2(e) {
	for (var t = "", n = 0; n < 4; n++) t += Al[e >> 8 * n + 4 & 15] + Al[e >> 8 * n & 15];
	return t
}

function O2(e) {
	return String.fromCharCode((255 & e) >> 0, (65280 & e) >> 8, (16711680 & e) >> 16, (4278190080 & e) >> 24)
}

function fu(e) {
	return vc(e).map(O2).join("")
}
var R2 = function(e) {
	for (var t = 0; t < e.length; t++) e[t] = D2(e[t]);
	return e.join("")
}(vc("hello")) != "5d41402abc4b2a76b9719d911017c592";

function Vr(e, t) {
	if (R2) {
		var n = (65535 & e) + (65535 & t);
		return (e >> 16) + (t >> 16) + (n >> 16) << 16 | 65535 & n
	}
	return e + t & 4294967295
}
/**
 * @license
 * FPDF is released under a permissive license: there is no usage restriction.
 * You may embed it freely in your application (commercial or not), with or
 * without modifications.
 *
 * Reference: http://www.fpdf.org/en/script/script37.php
 */
function hu(e, t) {
	var n, i, o, a;
	if (e !== n) {
		for (var u = (o = e, a = 1 + (256 / e.length >> 0), new Array(a + 1).join(o)), c = [], f = 0; f < 256; f++) c[f] = f;
		var p = 0;
		for (f = 0; f < 256; f++) {
			var v = c[f];
			p = (p + v + u.charCodeAt(f)) % 256, c[f] = c[p], c[p] = v
		}
		n = e, i = c
	} else c = i;
	var m = t.length,
		y = 0,
		d = 0,
		I = "";
	for (f = 0; f < m; f++) d = (d + (v = c[y = (y + 1) % 256])) % 256, c[y] = c[d], c[d] = v, u = c[(c[y] + c[d]) % 256], I += String.fromCharCode(t.charCodeAt(f) ^ u);
	return I
}
/**
 * @license
 * Licensed under the MIT License.
 * http://opensource.org/licenses/mit-license
 * Author: Owen Leong (@owenl131)
 * Date: 15 Oct 2020
 * References:
 * https://www.cs.cmu.edu/~dst/Adobe/Gallery/anon21jul01-pdf-encryption.txt
 * https://github.com/foliojs/pdfkit/blob/master/lib/security.js
 * http://www.fpdf.org/en/script/script37.php
 */
var Sl = {
	print: 4,
	modify: 8,
	copy: 16,
	"annot-forms": 32
};

function zi(e, t, n, i) {
	this.v = 1, this.r = 2;
	var o = 192;
	e.forEach(function(c) {
		if (Sl.perm !== void 0) throw new Error("Invalid permission: " + c);
		o += Sl[c]
	}), this.padding = "(¿N^NuAd\0NVÿú\b..\0¶Ðh>/\f©þdSiz";
	var a = (t + this.padding).substr(0, 32),
		u = (n + this.padding).substr(0, 32);
	this.O = this.processOwnerPassword(a, u), this.P = -(1 + (255 ^ o)), this.encryptionKey = fu(a + this.O + this.lsbFirstWord(this.P) + this.hexToBytes(i)).substr(0, 5), this.U = hu(this.encryptionKey, this.padding)
}

function Ui(e) {
	if (/[^\u0000-\u00ff]/.test(e)) throw new Error("Invalid PDF Name Object: " + e + ", Only accept ASCII characters.");
	for (var t = "", n = e.length, i = 0; i < n; i++) {
		var o = e.charCodeAt(i);
		o < 33 || o === 35 || o === 37 || o === 40 || o === 41 || o === 47 || o === 60 || o === 62 || o === 91 || o === 93 || o === 123 || o === 125 || o > 126 ? t += "#" + ("0" + o.toString(16)).slice(-2) : t += e[i]
	}
	return t
}

function _l(e) {
	if (be(e) !== "object") throw new Error("Invalid Context passed to initialize PubSub (jsPDF-module)");
	var t = {};
	this.subscribe = function(n, i, o) {
		if (o = o || !1, typeof n != "string" || typeof i != "function" || typeof o != "boolean") throw new Error("Invalid arguments passed to PubSub.subscribe (jsPDF-module)");
		t.hasOwnProperty(n) || (t[n] = {});
		var a = Math.random().toString(35);
		return t[n][a] = [i, !!o], a
	}, this.unsubscribe = function(n) {
		for (var i in t)
			if (t[i][n]) return delete t[i][n], Object.keys(t[i]).length === 0 && delete t[i], !0;
		return !1
	}, this.publish = function(n) {
		if (t.hasOwnProperty(n)) {
			var i = Array.prototype.slice.call(arguments, 1),
				o = [];
			for (var a in t[n]) {
				var u = t[n][a];
				try {
					u[0].apply(e, i)
				} catch (c) {
					Yt.console && Ne.error("jsPDF PubSub Error", c.message, c)
				}
				u[1] && o.push(a)
			}
			o.length && o.forEach(this.unsubscribe)
		}
	}, this.getTopics = function() {
		return t
	}
}

function Ho(e) {
	if (!(this instanceof Ho)) return new Ho(e);
	var t = "opacity,stroke-opacity".split(",");
	for (var n in e) e.hasOwnProperty(n) && t.indexOf(n) >= 0 && (this[n] = e[n]);
	this.id = "", this.objectNumber = -1
}

function bc(e, t) {
	this.gState = e, this.matrix = t, this.id = "", this.objectNumber = -1
}

function si(e, t, n, i, o) {
	if (!(this instanceof si)) return new si(e, t, n, i, o);
	this.type = e === "axial" ? 2 : 3, this.coords = t, this.colors = n, bc.call(this, i, o)
}

function Hi(e, t, n, i, o) {
	if (!(this instanceof Hi)) return new Hi(e, t, n, i, o);
	this.boundingBox = e, this.xStep = t, this.yStep = n, this.stream = "", this.cloneIndex = 0, bc.call(this, i, o)
}

function Gt(e) {
	var t, n = typeof arguments[0] == "string" ? arguments[0] : "p",
		i = arguments[1],
		o = arguments[2],
		a = arguments[3],
		u = [],
		c = 1,
		f = 16,
		p = "S",
		v = null;
	be(e = e || {}) === "object" && (n = e.orientation, i = e.unit || i, o = e.format || o, a = e.compress || e.compressPdf || a, (v = e.encryption || null) !== null && (v.userPassword = v.userPassword || "", v.ownerPassword = v.ownerPassword || "", v.userPermissions = v.userPermissions || []), c = typeof e.userUnit == "number" ? Math.abs(e.userUnit) : 1, e.precision !== void 0 && (t = e.precision), e.floatPrecision !== void 0 && (f = e.floatPrecision), p = e.defaultPathOperation || "S"), u = e.filters || (a === !0 ? ["FlateEncode"] : u), i = i || "mm", n = ("" + (n || "P")).toLowerCase();
	var m = e.putOnlyUsedFonts || !1,
		y = {},
		d = {
			internal: {},
			__private__: {}
		};
	d.__private__.PubSub = _l;
	var I = "1.3",
		A = d.__private__.getPdfVersion = function() {
			return I
		};
	d.__private__.setPdfVersion = function(l) {
		I = l
	};
	var F = {
		a0: [2383.94, 3370.39],
		a1: [1683.78, 2383.94],
		a2: [1190.55, 1683.78],
		a3: [841.89, 1190.55],
		a4: [595.28, 841.89],
		a5: [419.53, 595.28],
		a6: [297.64, 419.53],
		a7: [209.76, 297.64],
		a8: [147.4, 209.76],
		a9: [104.88, 147.4],
		a10: [73.7, 104.88],
		b0: [2834.65, 4008.19],
		b1: [2004.09, 2834.65],
		b2: [1417.32, 2004.09],
		b3: [1000.63, 1417.32],
		b4: [708.66, 1000.63],
		b5: [498.9, 708.66],
		b6: [354.33, 498.9],
		b7: [249.45, 354.33],
		b8: [175.75, 249.45],
		b9: [124.72, 175.75],
		b10: [87.87, 124.72],
		c0: [2599.37, 3676.54],
		c1: [1836.85, 2599.37],
		c2: [1298.27, 1836.85],
		c3: [918.43, 1298.27],
		c4: [649.13, 918.43],
		c5: [459.21, 649.13],
		c6: [323.15, 459.21],
		c7: [229.61, 323.15],
		c8: [161.57, 229.61],
		c9: [113.39, 161.57],
		c10: [79.37, 113.39],
		dl: [311.81, 623.62],
		letter: [612, 792],
		"government-letter": [576, 756],
		legal: [612, 1008],
		"junior-legal": [576, 360],
		ledger: [1224, 792],
		tabloid: [792, 1224],
		"credit-card": [153, 243]
	};
	d.__private__.getPageFormats = function() {
		return F
	};
	var _ = d.__private__.getPageFormat = function(l) {
		return F[l]
	};
	o = o || "a4";
	var j = {
			COMPAT: "compat",
			ADVANCED: "advanced"
		},
		z = j.COMPAT;

	function $() {
		this.saveGraphicsState(), B(new Ot(kt, 0, 0, -kt, 0, Ir() * kt).toString() + " cm"), this.setFontSize(this.getFontSize() / kt), p = "n", z = j.ADVANCED
	}

	function rt() {
		this.restoreGraphicsState(), p = "S", z = j.COMPAT
	}
	var lt = d.__private__.combineFontStyleAndFontWeight = function(l, w) {
		if (l == "bold" && w == "normal" || l == "bold" && w == 400 || l == "normal" && w == "italic" || l == "bold" && w == "italic") throw new Error("Invalid Combination of fontweight and fontstyle");
		return w && (l = w == 400 || w === "normal" ? l === "italic" ? "italic" : "normal" : w != 700 && w !== "bold" || l !== "normal" ? (w == 700 ? "bold" : w) + "" + l : "bold"), l
	};
	d.advancedAPI = function(l) {
		var w = z === j.COMPAT;
		return w && $.call(this), typeof l != "function" || (l(this), w && rt.call(this)), this
	}, d.compatAPI = function(l) {
		var w = z === j.ADVANCED;
		return w && rt.call(this), typeof l != "function" || (l(this), w && $.call(this)), this
	}, d.isAdvancedAPI = function() {
		return z === j.ADVANCED
	};
	var Y, R = function(l) {
			if (z !== j.ADVANCED) throw new Error(l + " is only available in 'advanced' API mode. You need to call advancedAPI() first.")
		},
		K = d.roundToPrecision = d.__private__.roundToPrecision = function(l, w) {
			var D = t || w;
			if (isNaN(l) || isNaN(D)) throw new Error("Invalid argument passed to jsPDF.roundToPrecision");
			return l.toFixed(D).replace(/0+$/, "")
		};
	Y = d.hpf = d.__private__.hpf = typeof f == "number" ? function(l) {
		if (isNaN(l)) throw new Error("Invalid argument passed to jsPDF.hpf");
		return K(l, f)
	} : f === "smart" ? function(l) {
		if (isNaN(l)) throw new Error("Invalid argument passed to jsPDF.hpf");
		return K(l, l > -1 && l < 1 ? 16 : 5)
	} : function(l) {
		if (isNaN(l)) throw new Error("Invalid argument passed to jsPDF.hpf");
		return K(l, 16)
	};
	var ot = d.f2 = d.__private__.f2 = function(l) {
			if (isNaN(l)) throw new Error("Invalid argument passed to jsPDF.f2");
			return K(l, 2)
		},
		P = d.__private__.f3 = function(l) {
			if (isNaN(l)) throw new Error("Invalid argument passed to jsPDF.f3");
			return K(l, 3)
		},
		C = d.scale = d.__private__.scale = function(l) {
			if (isNaN(l)) throw new Error("Invalid argument passed to jsPDF.scale");
			return z === j.COMPAT ? l * kt : z === j.ADVANCED ? l : void 0
		},
		q = function(l) {
			return z === j.COMPAT ? Ir() - l : z === j.ADVANCED ? l : void 0
		},
		T = function(l) {
			return C(q(l))
		};
	d.__private__.setPrecision = d.setPrecision = function(l) {
		typeof parseInt(l, 10) == "number" && (t = parseInt(l, 10))
	};
	var ct, st = "00000000000000000000000000000000",
		ht = d.__private__.getFileId = function() {
			return st
		},
		Q = d.__private__.setFileId = function(l) {
			return st = l !== void 0 && /^[a-fA-F0-9]{32}$/.test(l) ? l.toUpperCase() : st.split("").map(function() {
				return "ABCDEF0123456789".charAt(Math.floor(16 * Math.random()))
			}).join(""), v !== null && (un = new zi(v.userPermissions, v.userPassword, v.ownerPassword, st)), st
		};
	d.setFileId = function(l) {
		return Q(l), this
	}, d.getFileId = function() {
		return ht()
	};
	var dt = d.__private__.convertDateToPDFDate = function(l) {
			var w = l.getTimezoneOffset(),
				D = w < 0 ? "+" : "-",
				H = Math.floor(Math.abs(w / 60)),
				Z = Math.abs(w % 60),
				mt = [D, O(H), "'", O(Z), "'"].join("");
			return ["D:", l.getFullYear(), O(l.getMonth() + 1), O(l.getDate()), O(l.getHours()), O(l.getMinutes()), O(l.getSeconds()), mt].join("")
		},
		ut = d.__private__.convertPDFDateToDate = function(l) {
			var w = parseInt(l.substr(2, 4), 10),
				D = parseInt(l.substr(6, 2), 10) - 1,
				H = parseInt(l.substr(8, 2), 10),
				Z = parseInt(l.substr(10, 2), 10),
				mt = parseInt(l.substr(12, 2), 10),
				Nt = parseInt(l.substr(14, 2), 10);
			return new Date(w, D, H, Z, mt, Nt, 0)
		},
		_t = d.__private__.setCreationDate = function(l) {
			var w;
			if (l === void 0 && (l = new Date), l instanceof Date) w = dt(l);
			else {
				if (!/^D:(20[0-2][0-9]|203[0-7]|19[7-9][0-9])(0[0-9]|1[0-2])([0-2][0-9]|3[0-1])(0[0-9]|1[0-9]|2[0-3])(0[0-9]|[1-5][0-9])(0[0-9]|[1-5][0-9])(\+0[0-9]|\+1[0-4]|-0[0-9]|-1[0-1])'(0[0-9]|[1-5][0-9])'?$/.test(l)) throw new Error("Invalid argument passed to jsPDF.setCreationDate");
				w = l
			}
			return ct = w
		},
		L = d.__private__.getCreationDate = function(l) {
			var w = ct;
			return l === "jsDate" && (w = ut(ct)), w
		};
	d.setCreationDate = function(l) {
		return _t(l), this
	}, d.getCreationDate = function(l) {
		return L(l)
	};
	var M, O = d.__private__.padd2 = function(l) {
			return ("0" + parseInt(l)).slice(-2)
		},
		U = d.__private__.padd2Hex = function(l) {
			return ("00" + (l = l.toString())).substr(l.length)
		},
		V = 0,
		nt = [],
		at = [],
		it = 0,
		xt = [],
		Lt = [],
		Pt = !1,
		It = at,
		Ut = function() {
			V = 0, it = 0, at = [], nt = [], xt = [], Cn = Se(), Gn = Se()
		};
	d.__private__.setCustomOutputDestination = function(l) {
		Pt = !0, It = l
	};
	var gt = function(l) {
		Pt || (It = l)
	};
	d.__private__.resetCustomOutputDestination = function() {
		Pt = !1, It = at
	};
	var B = d.__private__.out = function(l) {
			return l = l.toString(), it += l.length + 1, It.push(l), It
		},
		Xt = d.__private__.write = function(l) {
			return B(arguments.length === 1 ? l.toString() : Array.prototype.join.call(arguments, " "))
		},
		Bt = d.__private__.getArrayBuffer = function(l) {
			for (var w = l.length, D = new ArrayBuffer(w), H = new Uint8Array(D); w--;) H[w] = l.charCodeAt(w);
			return D
		},
		At = [
			["Helvetica", "helvetica", "normal", "WinAnsiEncoding"],
			["Helvetica-Bold", "helvetica", "bold", "WinAnsiEncoding"],
			["Helvetica-Oblique", "helvetica", "italic", "WinAnsiEncoding"],
			["Helvetica-BoldOblique", "helvetica", "bolditalic", "WinAnsiEncoding"],
			["Courier", "courier", "normal", "WinAnsiEncoding"],
			["Courier-Bold", "courier", "bold", "WinAnsiEncoding"],
			["Courier-Oblique", "courier", "italic", "WinAnsiEncoding"],
			["Courier-BoldOblique", "courier", "bolditalic", "WinAnsiEncoding"],
			["Times-Roman", "times", "normal", "WinAnsiEncoding"],
			["Times-Bold", "times", "bold", "WinAnsiEncoding"],
			["Times-Italic", "times", "italic", "WinAnsiEncoding"],
			["Times-BoldItalic", "times", "bolditalic", "WinAnsiEncoding"],
			["ZapfDingbats", "zapfdingbats", "normal", null],
			["Symbol", "symbol", "normal", null]
		];
	d.__private__.getStandardFonts = function() {
		return At
	};
	var St = e.fontSize || 16;
	d.__private__.setFontSize = d.setFontSize = function(l) {
		return St = z === j.ADVANCED ? l / kt : l, this
	};
	var jt, Ct = d.__private__.getFontSize = d.getFontSize = function() {
			return z === j.COMPAT ? St : St * kt
		},
		qt = e.R2L || !1;
	d.__private__.setR2L = d.setR2L = function(l) {
		return qt = l, this
	}, d.__private__.getR2L = d.getR2L = function() {
		return qt
	};
	var Jt, Qt = d.__private__.setZoomMode = function(l) {
		var w = [void 0, null, "fullwidth", "fullheight", "fullpage", "original"];
		if (/^(?:\d+\.\d*|\d*\.\d+|\d+)%$/.test(l)) jt = l;
		else if (isNaN(l)) {
			if (w.indexOf(l) === -1) throw new Error('zoom must be Integer (e.g. 2), a percentage Value (e.g. 300%) or fullwidth, fullheight, fullpage, original. "' + l + '" is not recognized.');
			jt = l
		} else jt = parseInt(l, 10)
	};
	d.__private__.getZoomMode = function() {
		return jt
	};
	var ne, re = d.__private__.setPageMode = function(l) {
		if ([void 0, null, "UseNone", "UseOutlines", "UseThumbs", "FullScreen"].indexOf(l) == -1) throw new Error('Page mode must be one of UseNone, UseOutlines, UseThumbs, or FullScreen. "' + l + '" is not recognized.');
		Jt = l
	};
	d.__private__.getPageMode = function() {
		return Jt
	};
	var ue = d.__private__.setLayoutMode = function(l) {
		if ([void 0, null, "continuous", "single", "twoleft", "tworight", "two"].indexOf(l) == -1) throw new Error('Layout mode must be one of continuous, single, twoleft, tworight. "' + l + '" is not recognized.');
		ne = l
	};
	d.__private__.getLayoutMode = function() {
		return ne
	}, d.__private__.setDisplayMode = d.setDisplayMode = function(l, w, D) {
		return Qt(l), ue(w), re(D), this
	};
	var Wt = {
		title: "",
		subject: "",
		author: "",
		keywords: "",
		creator: ""
	};
	d.__private__.getDocumentProperty = function(l) {
		if (Object.keys(Wt).indexOf(l) === -1) throw new Error("Invalid argument passed to jsPDF.getDocumentProperty");
		return Wt[l]
	}, d.__private__.getDocumentProperties = function() {
		return Wt
	}, d.__private__.setDocumentProperties = d.setProperties = d.setDocumentProperties = function(l) {
		for (var w in Wt) Wt.hasOwnProperty(w) && l[w] && (Wt[w] = l[w]);
		return this
	}, d.__private__.setDocumentProperty = function(l, w) {
		if (Object.keys(Wt).indexOf(l) === -1) throw new Error("Invalid arguments passed to jsPDF.setDocumentProperty");
		return Wt[l] = w
	};
	var ie, kt, $e, le, Pn, de = {},
		ye = {},
		Dn = [],
		fe = {},
		mr = {},
		Ie = {},
		kn = {},
		Ae = null,
		oe = 0,
		zt = [],
		ae = new _l(d),
		Ge = e.hotfixes || [],
		pe = {},
		Re = {},
		an = [],
		Ot = function l(w, D, H, Z, mt, Nt) {
			if (!(this instanceof l)) return new l(w, D, H, Z, mt, Nt);
			isNaN(w) && (w = 1), isNaN(D) && (D = 0), isNaN(H) && (H = 0), isNaN(Z) && (Z = 1), isNaN(mt) && (mt = 0), isNaN(Nt) && (Nt = 0), this._matrix = [w, D, H, Z, mt, Nt]
		};
	Object.defineProperty(Ot.prototype, "sx", {
		get: function() {
			return this._matrix[0]
		},
		set: function(l) {
			this._matrix[0] = l
		}
	}), Object.defineProperty(Ot.prototype, "shy", {
		get: function() {
			return this._matrix[1]
		},
		set: function(l) {
			this._matrix[1] = l
		}
	}), Object.defineProperty(Ot.prototype, "shx", {
		get: function() {
			return this._matrix[2]
		},
		set: function(l) {
			this._matrix[2] = l
		}
	}), Object.defineProperty(Ot.prototype, "sy", {
		get: function() {
			return this._matrix[3]
		},
		set: function(l) {
			this._matrix[3] = l
		}
	}), Object.defineProperty(Ot.prototype, "tx", {
		get: function() {
			return this._matrix[4]
		},
		set: function(l) {
			this._matrix[4] = l
		}
	}), Object.defineProperty(Ot.prototype, "ty", {
		get: function() {
			return this._matrix[5]
		},
		set: function(l) {
			this._matrix[5] = l
		}
	}), Object.defineProperty(Ot.prototype, "a", {
		get: function() {
			return this._matrix[0]
		},
		set: function(l) {
			this._matrix[0] = l
		}
	}), Object.defineProperty(Ot.prototype, "b", {
		get: function() {
			return this._matrix[1]
		},
		set: function(l) {
			this._matrix[1] = l
		}
	}), Object.defineProperty(Ot.prototype, "c", {
		get: function() {
			return this._matrix[2]
		},
		set: function(l) {
			this._matrix[2] = l
		}
	}), Object.defineProperty(Ot.prototype, "d", {
		get: function() {
			return this._matrix[3]
		},
		set: function(l) {
			this._matrix[3] = l
		}
	}), Object.defineProperty(Ot.prototype, "e", {
		get: function() {
			return this._matrix[4]
		},
		set: function(l) {
			this._matrix[4] = l
		}
	}), Object.defineProperty(Ot.prototype, "f", {
		get: function() {
			return this._matrix[5]
		},
		set: function(l) {
			this._matrix[5] = l
		}
	}), Object.defineProperty(Ot.prototype, "rotation", {
		get: function() {
			return Math.atan2(this.shx, this.sx)
		}
	}), Object.defineProperty(Ot.prototype, "scaleX", {
		get: function() {
			return this.decompose().scale.sx
		}
	}), Object.defineProperty(Ot.prototype, "scaleY", {
		get: function() {
			return this.decompose().scale.sy
		}
	}), Object.defineProperty(Ot.prototype, "isIdentity", {
		get: function() {
			return this.sx === 1 && this.shy === 0 && this.shx === 0 && this.sy === 1 && this.tx === 0 && this.ty === 0
		}
	}), Ot.prototype.join = function(l) {
		return [this.sx, this.shy, this.shx, this.sy, this.tx, this.ty].map(Y).join(l)
	}, Ot.prototype.multiply = function(l) {
		var w = l.sx * this.sx + l.shy * this.shx,
			D = l.sx * this.shy + l.shy * this.sy,
			H = l.shx * this.sx + l.sy * this.shx,
			Z = l.shx * this.shy + l.sy * this.sy,
			mt = l.tx * this.sx + l.ty * this.shx + this.tx,
			Nt = l.tx * this.shy + l.ty * this.sy + this.ty;
		return new Ot(w, D, H, Z, mt, Nt)
	}, Ot.prototype.decompose = function() {
		var l = this.sx,
			w = this.shy,
			D = this.shx,
			H = this.sy,
			Z = this.tx,
			mt = this.ty,
			Nt = Math.sqrt(l * l + w * w),
			Mt = (l /= Nt) * D + (w /= Nt) * H;
		D -= l * Mt, H -= w * Mt;
		var Ht = Math.sqrt(D * D + H * H);
		return Mt /= Ht, l * (H /= Ht) < w * (D /= Ht) && (l = -l, w = -w, Mt = -Mt, Nt = -Nt), {
			scale: new Ot(Nt, 0, 0, Ht, 0, 0),
			translate: new Ot(1, 0, 0, 1, Z, mt),
			rotate: new Ot(l, w, -w, l, 0, 0),
			skew: new Ot(1, 0, Mt, 1, 0, 0)
		}
	}, Ot.prototype.toString = function(l) {
		return this.join(" ")
	}, Ot.prototype.inversed = function() {
		var l = this.sx,
			w = this.shy,
			D = this.shx,
			H = this.sy,
			Z = this.tx,
			mt = this.ty,
			Nt = 1 / (l * H - w * D),
			Mt = H * Nt,
			Ht = -w * Nt,
			te = -D * Nt,
			$t = l * Nt;
		return new Ot(Mt, Ht, te, $t, -Mt * Z - te * mt, -Ht * Z - $t * mt)
	}, Ot.prototype.applyToPoint = function(l) {
		var w = l.x * this.sx + l.y * this.shx + this.tx,
			D = l.x * this.shy + l.y * this.sy + this.ty;
		return new Li(w, D)
	}, Ot.prototype.applyToRectangle = function(l) {
		var w = this.applyToPoint(l),
			D = this.applyToPoint(new Li(l.x + l.w, l.y + l.h));
		return new sa(w.x, w.y, D.x - w.x, D.y - w.y)
	}, Ot.prototype.clone = function() {
		var l = this.sx,
			w = this.shy,
			D = this.shx,
			H = this.sy,
			Z = this.tx,
			mt = this.ty;
		return new Ot(l, w, D, H, Z, mt)
	}, d.Matrix = Ot;
	var Ye = d.matrixMult = function(l, w) {
			return w.multiply(l)
		},
		Be = new Ot(1, 0, 0, 1, 0, 0);
	d.unitMatrix = d.identityMatrix = Be;
	var Fe = function(l, w) {
		if (!mr[l]) {
			var D = (w instanceof si ? "Sh" : "P") + (Object.keys(fe).length + 1).toString(10);
			w.id = D, mr[l] = D, fe[D] = w, ae.publish("addPattern", w)
		}
	};
	d.ShadingPattern = si, d.TilingPattern = Hi, d.addShadingPattern = function(l, w) {
		return R("addShadingPattern()"), Fe(l, w), this
	}, d.beginTilingPattern = function(l) {
		R("beginTilingPattern()"), io(l.boundingBox[0], l.boundingBox[1], l.boundingBox[2] - l.boundingBox[0], l.boundingBox[3] - l.boundingBox[1], l.matrix)
	}, d.endTilingPattern = function(l, w) {
		R("endTilingPattern()"), w.stream = Lt[M].join(`
`), Fe(l, w), ae.publish("endTilingPattern", w), an.pop().restore()
	};
	var ke = d.__private__.newObject = function() {
			var l = Se();
			return Ee(l, !0), l
		},
		Se = d.__private__.newObjectDeferred = function() {
			return V++, nt[V] = function() {
				return it
			}, V
		},
		Ee = function(l, w) {
			return w = typeof w == "boolean" && w, nt[l] = it, w && B(l + " 0 obj"), l
		},
		On = d.__private__.newAdditionalObject = function() {
			var l = {
				objId: Se(),
				content: ""
			};
			return xt.push(l), l
		},
		Cn = Se(),
		Gn = Se(),
		Yn = d.__private__.decodeColorString = function(l) {
			var w = l.split(" ");
			if (w.length !== 2 || w[1] !== "g" && w[1] !== "G") w.length === 5 && (w[4] === "k" || w[4] === "K") && (w = [(1 - w[0]) * (1 - w[3]), (1 - w[1]) * (1 - w[3]), (1 - w[2]) * (1 - w[3]), "r"]);
			else {
				var D = parseFloat(w[0]);
				w = [D, D, D, "r"]
			}
			for (var H = "#", Z = 0; Z < 3; Z++) H += ("0" + Math.floor(255 * parseFloat(w[Z])).toString(16)).slice(-2);
			return H
		},
		Jn = d.__private__.encodeColorString = function(l) {
			var w;
			typeof l == "string" && (l = {
				ch1: l
			});
			var D = l.ch1,
				H = l.ch2,
				Z = l.ch3,
				mt = l.ch4,
				Nt = l.pdfColorType === "draw" ? ["G", "RG", "K"] : ["g", "rg", "k"];
			if (typeof D == "string" && D.charAt(0) !== "#") {
				var Mt = new mc(D);
				if (Mt.ok) D = Mt.toHex();
				else if (!/^\d*\.?\d*$/.test(D)) throw new Error('Invalid color "' + D + '" passed to jsPDF.encodeColorString.')
			}
			if (typeof D == "string" && /^#[0-9A-Fa-f]{3}$/.test(D) && (D = "#" + D[1] + D[1] + D[2] + D[2] + D[3] + D[3]), typeof D == "string" && /^#[0-9A-Fa-f]{6}$/.test(D)) {
				var Ht = parseInt(D.substr(1), 16);
				D = Ht >> 16 & 255, H = Ht >> 8 & 255, Z = 255 & Ht
			}
			if (H === void 0 || mt === void 0 && D === H && H === Z)
				if (typeof D == "string") w = D + " " + Nt[0];
				else switch (l.precision) {
					case 2:
						w = ot(D / 255) + " " + Nt[0];
						break;
					case 3:
					default:
						w = P(D / 255) + " " + Nt[0]
				} else if (mt === void 0 || be(mt) === "object") {
					if (mt && !isNaN(mt.a) && mt.a === 0) return w = ["1.", "1.", "1.", Nt[1]].join(" ");
					if (typeof D == "string") w = [D, H, Z, Nt[1]].join(" ");
					else switch (l.precision) {
						case 2:
							w = [ot(D / 255), ot(H / 255), ot(Z / 255), Nt[1]].join(" ");
							break;
						default:
						case 3:
							w = [P(D / 255), P(H / 255), P(Z / 255), Nt[1]].join(" ")
					}
				} else if (typeof D == "string") w = [D, H, Z, mt, Nt[2]].join(" ");
			else switch (l.precision) {
				case 2:
					w = [ot(D), ot(H), ot(Z), ot(mt), Nt[2]].join(" ");
					break;
				case 3:
				default:
					w = [P(D), P(H), P(Z), P(mt), Nt[2]].join(" ")
			}
			return w
		},
		or = d.__private__.getFilters = function() {
			return u
		},
		Rn = d.__private__.putStream = function(l) {
			var w = (l = l || {}).data || "",
				D = l.filters || or(),
				H = l.alreadyAppliedFilters || [],
				Z = l.addLength1 || !1,
				mt = w.length,
				Nt = l.objectId,
				Mt = function(ln) {
					return ln
				};
			if (v !== null && Nt === void 0) throw new Error("ObjectId must be passed to putStream for file encryption");
			v !== null && (Mt = un.encryptor(Nt, 0));
			var Ht = {};
			D === !0 && (D = ["FlateEncode"]);
			var te = l.additionalKeyValues || [],
				$t = (Ht = Gt.API.processDataByFilters !== void 0 ? Gt.API.processDataByFilters(w, D) : {
					data: w,
					reverseChain: []
				}).reverseChain + (Array.isArray(H) ? H.join(" ") : H.toString());
			if (Ht.data.length !== 0 && (te.push({
					key: "Length",
					value: Ht.data.length
				}), Z === !0 && te.push({
					key: "Length1",
					value: mt
				})), $t.length != 0)
				if ($t.split("/").length - 1 == 1) te.push({
					key: "Filter",
					value: $t
				});
				else {
					te.push({
						key: "Filter",
						value: "[" + $t + "]"
					});
					for (var ce = 0; ce < te.length; ce += 1)
						if (te[ce].key === "DecodeParms") {
							for (var je = [], Me = 0; Me < Ht.reverseChain.split("/").length - 1; Me += 1) je.push("null");
							je.push(te[ce].value), te[ce].value = "[" + je.join(" ") + "]"
						}
				} B("<<");
			for (var Je = 0; Je < te.length; Je++) B("/" + te[Je].key + " " + te[Je].value);
			B(">>"), Ht.data.length !== 0 && (B("stream"), B(Mt(Ht.data)), B("endstream"))
		},
		sr = d.__private__.putPage = function(l) {
			var w = l.number,
				D = l.data,
				H = l.objId,
				Z = l.contentsObjId;
			Ee(H, !0), B("<</Type /Page"), B("/Parent " + l.rootDictionaryObjId + " 0 R"), B("/Resources " + l.resourceDictionaryObjId + " 0 R"), B("/MediaBox [" + parseFloat(Y(l.mediaBox.bottomLeftX)) + " " + parseFloat(Y(l.mediaBox.bottomLeftY)) + " " + Y(l.mediaBox.topRightX) + " " + Y(l.mediaBox.topRightY) + "]"), l.cropBox !== null && B("/CropBox [" + Y(l.cropBox.bottomLeftX) + " " + Y(l.cropBox.bottomLeftY) + " " + Y(l.cropBox.topRightX) + " " + Y(l.cropBox.topRightY) + "]"), l.bleedBox !== null && B("/BleedBox [" + Y(l.bleedBox.bottomLeftX) + " " + Y(l.bleedBox.bottomLeftY) + " " + Y(l.bleedBox.topRightX) + " " + Y(l.bleedBox.topRightY) + "]"), l.trimBox !== null && B("/TrimBox [" + Y(l.trimBox.bottomLeftX) + " " + Y(l.trimBox.bottomLeftY) + " " + Y(l.trimBox.topRightX) + " " + Y(l.trimBox.topRightY) + "]"), l.artBox !== null && B("/ArtBox [" + Y(l.artBox.bottomLeftX) + " " + Y(l.artBox.bottomLeftY) + " " + Y(l.artBox.topRightX) + " " + Y(l.artBox.topRightY) + "]"), typeof l.userUnit == "number" && l.userUnit !== 1 && B("/UserUnit " + l.userUnit), ae.publish("putPage", {
				objId: H,
				pageContext: zt[w],
				pageNumber: w,
				page: D
			}), B("/Contents " + Z + " 0 R"), B(">>"), B("endobj");
			var mt = D.join(`
`);
			return z === j.ADVANCED && (mt += `
Q`), Ee(Z, !0), Rn({
				data: mt,
				filters: or(),
				objectId: Z
			}), B("endobj"), H
		},
		Xr = d.__private__.putPages = function() {
			var l, w, D = [];
			for (l = 1; l <= oe; l++) zt[l].objId = Se(), zt[l].contentsObjId = Se();
			for (l = 1; l <= oe; l++) D.push(sr({
				number: l,
				data: Lt[l],
				objId: zt[l].objId,
				contentsObjId: zt[l].contentsObjId,
				mediaBox: zt[l].mediaBox,
				cropBox: zt[l].cropBox,
				bleedBox: zt[l].bleedBox,
				trimBox: zt[l].trimBox,
				artBox: zt[l].artBox,
				userUnit: zt[l].userUnit,
				rootDictionaryObjId: Cn,
				resourceDictionaryObjId: Gn
			}));
			Ee(Cn, !0), B("<</Type /Pages");
			var H = "/Kids [";
			for (w = 0; w < oe; w++) H += D[w] + " 0 R ";
			B(H + "]"), B("/Count " + oe), B(">>"), B("endobj"), ae.publish("postPutPages")
		},
		fi = function(l) {
			ae.publish("putFont", {
				font: l,
				out: B,
				newObject: ke,
				putStream: Rn
			}), l.isAlreadyPutted !== !0 && (l.objectNumber = ke(), B("<<"), B("/Type /Font"), B("/BaseFont /" + Ui(l.postScriptName)), B("/Subtype /Type1"), typeof l.encoding == "string" && B("/Encoding /" + l.encoding), B("/FirstChar 32"), B("/LastChar 255"), B(">>"), B("endobj"))
		},
		hi = function() {
			for (var l in de) de.hasOwnProperty(l) && (m === !1 || m === !0 && y.hasOwnProperty(l)) && fi(de[l])
		},
		di = function(l) {
			l.objectNumber = ke();
			var w = [];
			w.push({
				key: "Type",
				value: "/XObject"
			}), w.push({
				key: "Subtype",
				value: "/Form"
			}), w.push({
				key: "BBox",
				value: "[" + [Y(l.x), Y(l.y), Y(l.x + l.width), Y(l.y + l.height)].join(" ") + "]"
			}), w.push({
				key: "Matrix",
				value: "[" + l.matrix.toString() + "]"
			});
			var D = l.pages[1].join(`
`);
			Rn({
				data: D,
				additionalKeyValues: w,
				objectId: l.objectNumber
			}), B("endobj")
		},
		pi = function() {
			for (var l in pe) pe.hasOwnProperty(l) && di(pe[l])
		},
		qa = function(l, w) {
			var D, H = [],
				Z = 1 / (w - 1);
			for (D = 0; D < 1; D += Z) H.push(D);
			if (H.push(1), l[0].offset != 0) {
				var mt = {
					offset: 0,
					color: l[0].color
				};
				l.unshift(mt)
			}
			if (l[l.length - 1].offset != 1) {
				var Nt = {
					offset: 1,
					color: l[l.length - 1].color
				};
				l.push(Nt)
			}
			for (var Mt = "", Ht = 0, te = 0; te < H.length; te++) {
				for (D = H[te]; D > l[Ht + 1].offset;) Ht++;
				var $t = l[Ht].offset,
					ce = (D - $t) / (l[Ht + 1].offset - $t),
					je = l[Ht].color,
					Me = l[Ht + 1].color;
				Mt += U(Math.round((1 - ce) * je[0] + ce * Me[0]).toString(16)) + U(Math.round((1 - ce) * je[1] + ce * Me[1]).toString(16)) + U(Math.round((1 - ce) * je[2] + ce * Me[2]).toString(16))
			}
			return Mt.trim()
		},
		Xo = function(l, w) {
			w || (w = 21);
			var D = ke(),
				H = qa(l.colors, w),
				Z = [];
			Z.push({
				key: "FunctionType",
				value: "0"
			}), Z.push({
				key: "Domain",
				value: "[0.0 1.0]"
			}), Z.push({
				key: "Size",
				value: "[" + w + "]"
			}), Z.push({
				key: "BitsPerSample",
				value: "8"
			}), Z.push({
				key: "Range",
				value: "[0.0 1.0 0.0 1.0 0.0 1.0]"
			}), Z.push({
				key: "Decode",
				value: "[0.0 1.0 0.0 1.0 0.0 1.0]"
			}), Rn({
				data: H,
				additionalKeyValues: Z,
				alreadyAppliedFilters: ["/ASCIIHexDecode"],
				objectId: D
			}), B("endobj"), l.objectNumber = ke(), B("<< /ShadingType " + l.type), B("/ColorSpace /DeviceRGB");
			var mt = "/Coords [" + Y(parseFloat(l.coords[0])) + " " + Y(parseFloat(l.coords[1])) + " ";
			l.type === 2 ? mt += Y(parseFloat(l.coords[2])) + " " + Y(parseFloat(l.coords[3])) : mt += Y(parseFloat(l.coords[2])) + " " + Y(parseFloat(l.coords[3])) + " " + Y(parseFloat(l.coords[4])) + " " + Y(parseFloat(l.coords[5])), B(mt += "]"), l.matrix && B("/Matrix [" + l.matrix.toString() + "]"), B("/Function " + D + " 0 R"), B("/Extend [true true]"), B(">>"), B("endobj")
		},
		Ko = function(l, w) {
			var D = Se(),
				H = ke();
			w.push({
				resourcesOid: D,
				objectOid: H
			}), l.objectNumber = H;
			var Z = [];
			Z.push({
				key: "Type",
				value: "/Pattern"
			}), Z.push({
				key: "PatternType",
				value: "1"
			}), Z.push({
				key: "PaintType",
				value: "1"
			}), Z.push({
				key: "TilingType",
				value: "1"
			}), Z.push({
				key: "BBox",
				value: "[" + l.boundingBox.map(Y).join(" ") + "]"
			}), Z.push({
				key: "XStep",
				value: Y(l.xStep)
			}), Z.push({
				key: "YStep",
				value: Y(l.yStep)
			}), Z.push({
				key: "Resources",
				value: D + " 0 R"
			}), l.matrix && Z.push({
				key: "Matrix",
				value: "[" + l.matrix.toString() + "]"
			}), Rn({
				data: l.stream,
				additionalKeyValues: Z,
				objectId: l.objectNumber
			}), B("endobj")
		},
		gi = function(l) {
			var w;
			for (w in fe) fe.hasOwnProperty(w) && (fe[w] instanceof si ? Xo(fe[w]) : fe[w] instanceof Hi && Ko(fe[w], l))
		},
		za = function(l) {
			for (var w in l.objectNumber = ke(), B("<<"), l) switch (w) {
				case "opacity":
					B("/ca " + ot(l[w]));
					break;
				case "stroke-opacity":
					B("/CA " + ot(l[w]))
			}
			B(">>"), B("endobj")
		},
		$o = function() {
			var l;
			for (l in Ie) Ie.hasOwnProperty(l) && za(Ie[l])
		},
		$i = function() {
			for (var l in B("/XObject <<"), pe) pe.hasOwnProperty(l) && pe[l].objectNumber >= 0 && B("/" + l + " " + pe[l].objectNumber + " 0 R");
			ae.publish("putXobjectDict"), B(">>")
		},
		Zo = function() {
			un.oid = ke(), B("<<"), B("/Filter /Standard"), B("/V " + un.v), B("/R " + un.r), B("/U <" + un.toHexString(un.U) + ">"), B("/O <" + un.toHexString(un.O) + ">"), B("/P " + un.P), B(">>"), B("endobj")
		},
		Ua = function() {
			for (var l in B("/Font <<"), de) de.hasOwnProperty(l) && (m === !1 || m === !0 && y.hasOwnProperty(l)) && B("/" + l + " " + de[l].objectNumber + " 0 R");
			B(">>")
		},
		Qo = function() {
			if (Object.keys(fe).length > 0) {
				for (var l in B("/Shading <<"), fe) fe.hasOwnProperty(l) && fe[l] instanceof si && fe[l].objectNumber >= 0 && B("/" + l + " " + fe[l].objectNumber + " 0 R");
				ae.publish("putShadingPatternDict"), B(">>")
			}
		},
		mi = function(l) {
			if (Object.keys(fe).length > 0) {
				for (var w in B("/Pattern <<"), fe) fe.hasOwnProperty(w) && fe[w] instanceof d.TilingPattern && fe[w].objectNumber >= 0 && fe[w].objectNumber < l && B("/" + w + " " + fe[w].objectNumber + " 0 R");
				ae.publish("putTilingPatternDict"), B(">>")
			}
		},
		ts = function() {
			if (Object.keys(Ie).length > 0) {
				var l;
				for (l in B("/ExtGState <<"), Ie) Ie.hasOwnProperty(l) && Ie[l].objectNumber >= 0 && B("/" + l + " " + Ie[l].objectNumber + " 0 R");
				ae.publish("putGStateDict"), B(">>")
			}
		},
		Te = function(l) {
			Ee(l.resourcesOid, !0), B("<<"), B("/ProcSet [/PDF /Text /ImageB /ImageC /ImageI]"), Ua(), Qo(), mi(l.objectOid), ts(), $i(), B(">>"), B("endobj")
		},
		Ha = function() {
			var l = [];
			hi(), $o(), pi(), gi(l), ae.publish("putResources"), l.forEach(Te), Te({
				resourcesOid: Gn,
				objectOid: Number.MAX_SAFE_INTEGER
			}), ae.publish("postPutResources")
		},
		Wa = function() {
			ae.publish("putAdditionalObjects");
			for (var l = 0; l < xt.length; l++) {
				var w = xt[l];
				Ee(w.objId, !0), B(w.content), B("endobj")
			}
			ae.publish("postPutAdditionalObjects")
		},
		Va = function(l) {
			ye[l.fontName] = ye[l.fontName] || {}, ye[l.fontName][l.fontStyle] = l.id
		},
		Zi = function(l, w, D, H, Z) {
			var mt = {
				id: "F" + (Object.keys(de).length + 1).toString(10),
				postScriptName: l,
				fontName: w,
				fontStyle: D,
				encoding: H,
				isStandardFont: Z || !1,
				metadata: {}
			};
			return ae.publish("addFont", {
				font: mt,
				instance: this
			}), de[mt.id] = mt, Va(mt), mt.id
		},
		es = function(l) {
			for (var w = 0, D = At.length; w < D; w++) {
				var H = Zi.call(this, l[w][0], l[w][1], l[w][2], At[w][3], !0);
				m === !1 && (y[H] = !0);
				var Z = l[w][0].split("-");
				Va({
					id: H,
					fontName: Z[0],
					fontStyle: Z[1] || ""
				})
			}
			ae.publish("addFonts", {
				fonts: de,
				dictionary: ye
			})
		},
		Xn = function(l) {
			return l.foo = function() {
				try {
					return l.apply(this, arguments)
				} catch (H) {
					var w = H.stack || "";
					~w.indexOf(" at ") && (w = w.split(" at ")[1]);
					var D = "Error in function " + w.split(`
`)[0].split("<")[0] + ": " + H.message;
					if (!Yt.console) throw new Error(D);
					Yt.console.error(D, H), Yt.alert && alert(D)
				}
			}, l.foo.bar = l, l.foo
		},
		vi = function(l, w) {
			var D, H, Z, mt, Nt, Mt, Ht, te, $t;
			if (Z = (w = w || {}).sourceEncoding || "Unicode", Nt = w.outputEncoding, (w.autoencode || Nt) && de[ie].metadata && de[ie].metadata[Z] && de[ie].metadata[Z].encoding && (mt = de[ie].metadata[Z].encoding, !Nt && de[ie].encoding && (Nt = de[ie].encoding), !Nt && mt.codePages && (Nt = mt.codePages[0]), typeof Nt == "string" && (Nt = mt[Nt]), Nt)) {
				for (Ht = !1, Mt = [], D = 0, H = l.length; D < H; D++)(te = Nt[l.charCodeAt(D)]) ? Mt.push(String.fromCharCode(te)) : Mt.push(l[D]), Mt[D].charCodeAt(0) >> 8 && (Ht = !0);
				l = Mt.join("")
			}
			for (D = l.length; Ht === void 0 && D !== 0;) l.charCodeAt(D - 1) >> 8 && (Ht = !0), D--;
			if (!Ht) return l;
			for (Mt = w.noBOM ? [] : [254, 255], D = 0, H = l.length; D < H; D++) {
				if (($t = (te = l.charCodeAt(D)) >> 8) >> 8) throw new Error("Character at position " + D + " of string '" + l + "' exceeds 16bits. Cannot be encoded into UCS-2 BE");
				Mt.push($t), Mt.push(te - ($t << 8))
			}
			return String.fromCharCode.apply(void 0, Mt)
		},
		yn = d.__private__.pdfEscape = d.pdfEscape = function(l, w) {
			return vi(l, w).replace(/\\/g, "\\\\").replace(/\(/g, "\\(").replace(/\)/g, "\\)")
		},
		Qi = d.__private__.beginPage = function(l) {
			Lt[++oe] = [], zt[oe] = {
				objId: 0,
				contentsObjId: 0,
				userUnit: Number(c),
				artBox: null,
				bleedBox: null,
				cropBox: null,
				trimBox: null,
				mediaBox: {
					bottomLeftX: 0,
					bottomLeftY: 0,
					topRightX: Number(l[0]),
					topRightY: Number(l[1])
				}
			}, Ya(oe), gt(Lt[M])
		},
		Ga = function(l, w) {
			var D, H, Z;
			switch (n = w || n, typeof l == "string" && (D = _(l.toLowerCase()), Array.isArray(D) && (H = D[0], Z = D[1])), Array.isArray(l) && (H = l[0] * kt, Z = l[1] * kt), isNaN(H) && (H = o[0], Z = o[1]), (H > 14400 || Z > 14400) && (Ne.warn("A page in a PDF can not be wider or taller than 14400 userUnit. jsPDF limits the width/height to 14400"), H = Math.min(14400, H), Z = Math.min(14400, Z)), o = [H, Z], n.substr(0, 1)) {
				case "l":
					Z > H && (o = [Z, H]);
					break;
				case "p":
					H > Z && (o = [Z, H])
			}
			Qi(o), Qa(ra), B(Kn), aa !== 0 && B(aa + " J"), oa !== 0 && B(oa + " j"), ae.publish("addPage", {
				pageNumber: oe
			})
		},
		ns = function(l) {
			l > 0 && l <= oe && (Lt.splice(l, 1), zt.splice(l, 1), oe--, M > oe && (M = oe), this.setPage(M))
		},
		Ya = function(l) {
			l > 0 && l <= oe && (M = l)
		},
		rs = d.__private__.getNumberOfPages = d.getNumberOfPages = function() {
			return Lt.length - 1
		},
		Ja = function(l, w, D) {
			var H, Z = void 0;
			return D = D || {}, l = l !== void 0 ? l : de[ie].fontName, w = w !== void 0 ? w : de[ie].fontStyle, H = l.toLowerCase(), ye[H] !== void 0 && ye[H][w] !== void 0 ? Z = ye[H][w] : ye[l] !== void 0 && ye[l][w] !== void 0 ? Z = ye[l][w] : D.disableWarning === !1 && Ne.warn("Unable to look up font label for font '" + l + "', '" + w + "'. Refer to getFontList() for available fonts."), Z || D.noFallback || (Z = ye.times[w]) == null && (Z = ye.times.normal), Z
		},
		is = d.__private__.putInfo = function() {
			var l = ke(),
				w = function(H) {
					return H
				};
			for (var D in v !== null && (w = un.encryptor(l, 0)), B("<<"), B("/Producer (" + yn(w("jsPDF " + Gt.version)) + ")"), Wt) Wt.hasOwnProperty(D) && Wt[D] && B("/" + D.substr(0, 1).toUpperCase() + D.substr(1) + " (" + yn(w(Wt[D])) + ")");
			B("/CreationDate (" + yn(w(ct)) + ")"), B(">>"), B("endobj")
		},
		ta = d.__private__.putCatalog = function(l) {
			var w = (l = l || {}).rootDictionaryObjId || Cn;
			switch (ke(), B("<<"), B("/Type /Catalog"), B("/Pages " + w + " 0 R"), jt || (jt = "fullwidth"), jt) {
				case "fullwidth":
					B("/OpenAction [3 0 R /FitH null]");
					break;
				case "fullheight":
					B("/OpenAction [3 0 R /FitV null]");
					break;
				case "fullpage":
					B("/OpenAction [3 0 R /Fit]");
					break;
				case "original":
					B("/OpenAction [3 0 R /XYZ null null 1]");
					break;
				default:
					var D = "" + jt;
					D.substr(D.length - 1) === "%" && (jt = parseInt(jt) / 100), typeof jt == "number" && B("/OpenAction [3 0 R /XYZ null null " + ot(jt) + "]")
			}
			switch (ne || (ne = "continuous"), ne) {
				case "continuous":
					B("/PageLayout /OneColumn");
					break;
				case "single":
					B("/PageLayout /SinglePage");
					break;
				case "two":
				case "twoleft":
					B("/PageLayout /TwoColumnLeft");
					break;
				case "tworight":
					B("/PageLayout /TwoColumnRight")
			}
			Jt && B("/PageMode /" + Jt), ae.publish("putCatalog"), B(">>"), B("endobj")
		},
		as = d.__private__.putTrailer = function() {
			B("trailer"), B("<<"), B("/Size " + (V + 1)), B("/Root " + V + " 0 R"), B("/Info " + (V - 1) + " 0 R"), v !== null && B("/Encrypt " + un.oid + " 0 R"), B("/ID [ <" + st + "> <" + st + "> ]"), B(">>")
		},
		os = d.__private__.putHeader = function() {
			B("%PDF-" + I), B("%ºß¬à")
		},
		ss = d.__private__.putXRef = function() {
			var l = "0000000000";
			B("xref"), B("0 " + (V + 1)), B("0000000000 65535 f ");
			for (var w = 1; w <= V; w++) typeof nt[w] == "function" ? B((l + nt[w]()).slice(-10) + " 00000 n ") : nt[w] !== void 0 ? B((l + nt[w]).slice(-10) + " 00000 n ") : B("0000000000 00000 n ")
		},
		vr = d.__private__.buildDocument = function() {
			Ut(), gt(at), ae.publish("buildDocument"), os(), Xr(), Wa(), Ha(), v !== null && Zo(), is(), ta();
			var l = it;
			return ss(), as(), B("startxref"), B("" + l), B("%%EOF"), gt(Lt[M]), at.join(`
`)
		},
		bi = d.__private__.getBlob = function(l) {
			return new Blob([Bt(l)], {
				type: "application/pdf"
			})
		},
		wi = d.output = d.__private__.output = Xn(function(l, w) {
			switch (typeof(w = w || {}) == "string" ? w = {
					filename: w
				} : w.filename = w.filename || "generated.pdf", l) {
				case void 0:
					return vr();
				case "save":
					d.save(w.filename);
					break;
				case "arraybuffer":
					return Bt(vr());
				case "blob":
					return bi(vr());
				case "bloburi":
				case "bloburl":
					if (Yt.URL !== void 0 && typeof Yt.URL.createObjectURL == "function") return Yt.URL && Yt.URL.createObjectURL(bi(vr())) || void 0;
					Ne.warn("bloburl is not supported by your system, because URL.createObjectURL is not supported by your browser.");
					break;
				case "datauristring":
				case "dataurlstring":
					var D = "",
						H = vr();
					try {
						D = cu(H)
					} catch {
						D = cu(unescape(encodeURIComponent(H)))
					}
					return "data:application/pdf;filename=" + w.filename + ";base64," + D;
				case "pdfobjectnewwindow":
					if (Object.prototype.toString.call(Yt) === "[object Window]") {
						var Z = "https://cdnjs.cloudflare.com/ajax/libs/pdfobject/2.1.1/pdfobject.min.js",
							mt = ' integrity="sha512-4ze/a9/4jqu+tX9dfOqJYSvyYd5M6qum/3HpCLr+/Jqf0whc37VUbkpNGHR7/8pSnCFw47T1fmIpwBV7UySh3g==" crossorigin="anonymous"';
						w.pdfObjectUrl && (Z = w.pdfObjectUrl, mt = "");
						var Nt = '<html><style>html, body { padding: 0; margin: 0; } iframe { width: 100%; height: 100%; border: 0;}  </style><body><script src="' + Z + '"' + mt + '><\/script><script >PDFObject.embed("' + this.output("dataurlstring") + '", ' + JSON.stringify(w) + ");<\/script></body></html>",
							Mt = Yt.open();
						return Mt !== null && Mt.document.write(Nt), Mt
					}
					throw new Error("The option pdfobjectnewwindow just works in a browser-environment.");
				case "pdfjsnewwindow":
					if (Object.prototype.toString.call(Yt) === "[object Window]") {
						var Ht = '<html><style>html, body { padding: 0; margin: 0; } iframe { width: 100%; height: 100%; border: 0;}  </style><body><iframe id="pdfViewer" src="' + (w.pdfJsUrl || "examples/PDF.js/web/viewer.html") + "?file=&downloadName=" + w.filename + '" width="500px" height="400px" /></body></html>',
							te = Yt.open();
						if (te !== null) {
							te.document.write(Ht);
							var $t = this;
							te.document.documentElement.querySelector("#pdfViewer").onload = function() {
								te.document.title = w.filename, te.document.documentElement.querySelector("#pdfViewer").contentWindow.PDFViewerApplication.open($t.output("bloburl"))
							}
						}
						return te
					}
					throw new Error("The option pdfjsnewwindow just works in a browser-environment.");
				case "dataurlnewwindow":
					if (Object.prototype.toString.call(Yt) !== "[object Window]") throw new Error("The option dataurlnewwindow just works in a browser-environment.");
					var ce = '<html><style>html, body { padding: 0; margin: 0; } iframe { width: 100%; height: 100%; border: 0;}  </style><body><iframe src="' + this.output("datauristring", w) + '"></iframe></body></html>',
						je = Yt.open();
					if (je !== null && (je.document.write(ce), je.document.title = w.filename), je || typeof safari > "u") return je;
					break;
				case "datauri":
				case "dataurl":
					return Yt.document.location.href = this.output("datauristring", w);
				default:
					return null
			}
		}),
		Xa = function(l) {
			return Array.isArray(Ge) === !0 && Ge.indexOf(l) > -1
		};
	switch (i) {
		case "pt":
			kt = 1;
			break;
		case "mm":
			kt = 72 / 25.4;
			break;
		case "cm":
			kt = 72 / 2.54;
			break;
		case "in":
			kt = 72;
			break;
		case "px":
			kt = Xa("px_scaling") == 1 ? .75 : 96 / 72;
			break;
		case "pc":
		case "em":
			kt = 12;
			break;
		case "ex":
			kt = 6;
			break;
		default:
			if (typeof i != "number") throw new Error("Invalid unit: " + i);
			kt = i
	}
	var un = null;
	_t(), Q();
	var us = function(l) {
			return v !== null ? un.encryptor(l, 0) : function(w) {
				return w
			}
		},
		Ka = d.__private__.getPageInfo = d.getPageInfo = function(l) {
			if (isNaN(l) || l % 1 != 0) throw new Error("Invalid argument passed to jsPDF.getPageInfo");
			return {
				objId: zt[l].objId,
				pageNumber: l,
				pageContext: zt[l]
			}
		},
		Kt = d.__private__.getPageInfoByObjId = function(l) {
			if (isNaN(l) || l % 1 != 0) throw new Error("Invalid argument passed to jsPDF.getPageInfoByObjId");
			for (var w in zt)
				if (zt[w].objId === l) break;
			return Ka(w)
		},
		ls = d.__private__.getCurrentPageInfo = d.getCurrentPageInfo = function() {
			return {
				objId: zt[M].objId,
				pageNumber: M,
				pageContext: zt[M]
			}
		};
	d.addPage = function() {
		return Ga.apply(this, arguments), this
	}, d.setPage = function() {
		return Ya.apply(this, arguments), gt.call(this, Lt[M]), this
	}, d.insertPage = function(l) {
		return this.addPage(), this.movePage(M, l), this
	}, d.movePage = function(l, w) {
		var D, H;
		if (l > w) {
			D = Lt[l], H = zt[l];
			for (var Z = l; Z > w; Z--) Lt[Z] = Lt[Z - 1], zt[Z] = zt[Z - 1];
			Lt[w] = D, zt[w] = H, this.setPage(w)
		} else if (l < w) {
			D = Lt[l], H = zt[l];
			for (var mt = l; mt < w; mt++) Lt[mt] = Lt[mt + 1], zt[mt] = zt[mt + 1];
			Lt[w] = D, zt[w] = H, this.setPage(w)
		}
		return this
	}, d.deletePage = function() {
		return ns.apply(this, arguments), this
	}, d.__private__.text = d.text = function(l, w, D, H, Z) {
		var mt, Nt, Mt, Ht, te, $t, ce, je, Me, Je = (H = H || {}).scope || this;
		if (typeof l == "number" && typeof w == "number" && (typeof D == "string" || Array.isArray(D))) {
			var ln = D;
			D = w, w = l, l = ln
		}
		if (arguments[3] instanceof Ot ? (R("The transform parameter of text() with a Matrix value"), Me = Z) : (Mt = arguments[4], Ht = arguments[5], be(ce = arguments[3]) === "object" && ce !== null || (typeof Mt == "string" && (Ht = Mt, Mt = null), typeof ce == "string" && (Ht = ce, ce = null), typeof ce == "number" && (Mt = ce, ce = null), H = {
				flags: ce,
				angle: Mt,
				align: Ht
			})), isNaN(w) || isNaN(D) || l == null) throw new Error("Invalid arguments passed to jsPDF.text");
		if (l.length === 0) return Je;
		var Qe = "",
			$n = !1,
			In = typeof H.lineHeightFactor == "number" ? H.lineHeightFactor : $r,
			cr = Je.internal.scaleFactor;

		function ao(_e) {
			return _e = _e.split("	").join(Array(H.TabLen || 9).join(" ")), yn(_e, ce)
		}

		function fa(_e) {
			for (var Pe, ze = _e.concat(), Ze = [], Nr = ze.length; Nr--;) typeof(Pe = ze.shift()) == "string" ? Ze.push(Pe) : Array.isArray(_e) && (Pe.length === 1 || Pe[1] === void 0 && Pe[2] === void 0) ? Ze.push(Pe[0]) : Ze.push([Pe[0], Pe[1], Pe[2]]);
			return Ze
		}

		function ha(_e, Pe) {
			var ze;
			if (typeof _e == "string") ze = Pe(_e)[0];
			else if (Array.isArray(_e)) {
				for (var Ze, Nr, ya = _e.concat(), Mi = [], co = ya.length; co--;) typeof(Ze = ya.shift()) == "string" ? Mi.push(Pe(Ze)[0]) : Array.isArray(Ze) && typeof Ze[0] == "string" && (Nr = Pe(Ze[0], Ze[1], Ze[2]), Mi.push([Nr[0], Nr[1], Nr[2]]));
				ze = Mi
			}
			return ze
		}
		var Si = !1,
			da = !0;
		if (typeof l == "string") Si = !0;
		else if (Array.isArray(l)) {
			var pa = l.concat();
			Nt = [];
			for (var _i, on = pa.length; on--;)(typeof(_i = pa.shift()) != "string" || Array.isArray(_i) && typeof _i[0] != "string") && (da = !1);
			Si = da
		}
		if (Si === !1) throw new Error('Type of text must be string or Array. "' + l + '" is not recognized.');
		typeof l == "string" && (l = l.match(/[\r?\n]/) ? l.split(/\r\n|\r|\n/g) : [l]);
		var Pi = St / Je.internal.scaleFactor,
			ki = Pi * (In - 1);
		switch (H.baseline) {
			case "bottom":
				D -= ki;
				break;
			case "top":
				D += Pi - ki;
				break;
			case "hanging":
				D += Pi - 2 * ki;
				break;
			case "middle":
				D += Pi / 2 - ki
		}
		if (($t = H.maxWidth || 0) > 0 && (typeof l == "string" ? l = Je.splitTextToSize(l, $t) : Object.prototype.toString.call(l) === "[object Array]" && (l = l.reduce(function(_e, Pe) {
				return _e.concat(Je.splitTextToSize(Pe, $t))
			}, []))), mt = {
				text: l,
				x: w,
				y: D,
				options: H,
				mutex: {
					pdfEscape: yn,
					activeFontKey: ie,
					fonts: de,
					activeFontSize: St
				}
			}, ae.publish("preProcessText", mt), l = mt.text, Mt = (H = mt.options).angle, !(Me instanceof Ot) && Mt && typeof Mt == "number") {
			Mt *= Math.PI / 180, H.rotationDirection === 0 && (Mt = -Mt), z === j.ADVANCED && (Mt = -Mt);
			var Ci = Math.cos(Mt),
				ga = Math.sin(Mt);
			Me = new Ot(Ci, ga, -ga, Ci, 0, 0)
		} else Mt && Mt instanceof Ot && (Me = Mt);
		z !== j.ADVANCED || Me || (Me = Be), (te = H.charSpace || Ni) !== void 0 && (Qe += Y(C(te)) + ` Tc
`, this.setCharSpace(this.getCharSpace() || 0)), (je = H.horizontalScale) !== void 0 && (Qe += Y(100 * je) + ` Tz
`), H.lang;
		var xn = -1,
			ws = H.renderingMode !== void 0 ? H.renderingMode : H.stroke,
			ma = Je.internal.getCurrentPageInfo().pageContext;
		switch (ws) {
			case 0:
			case !1:
			case "fill":
				xn = 0;
				break;
			case 1:
			case !0:
			case "stroke":
				xn = 1;
				break;
			case 2:
			case "fillThenStroke":
				xn = 2;
				break;
			case 3:
			case "invisible":
				xn = 3;
				break;
			case 4:
			case "fillAndAddForClipping":
				xn = 4;
				break;
			case 5:
			case "strokeAndAddPathForClipping":
				xn = 5;
				break;
			case 6:
			case "fillThenStrokeAndAddToPathForClipping":
				xn = 6;
				break;
			case 7:
			case "addToPathForClipping":
				xn = 7
		}
		var oo = ma.usedRenderingMode !== void 0 ? ma.usedRenderingMode : -1;
		xn !== -1 ? Qe += xn + ` Tr
` : oo !== -1 && (Qe += `0 Tr
`), xn !== -1 && (ma.usedRenderingMode = xn), Ht = H.align || "left";
		var Bn, Ii = St * In,
			so = Je.internal.pageSize.getWidth(),
			uo = de[ie];
		te = H.charSpace || Ni, $t = H.maxWidth || 0, ce = Object.assign({
			autoencode: !0,
			noBOM: !0
		}, H.flags);
		var Fr = [],
			ti = function(_e) {
				return Je.getStringUnitWidth(_e, {
					font: uo,
					charSpace: te,
					fontSize: St,
					doKerning: !1
				}) * St / cr
			};
		if (Object.prototype.toString.call(l) === "[object Array]") {
			var Nn;
			Nt = fa(l), Ht !== "left" && (Bn = Nt.map(ti));
			var mn, jr = 0;
			if (Ht === "right") {
				w -= Bn[0], l = [], on = Nt.length;
				for (var wr = 0; wr < on; wr++) wr === 0 ? (mn = lr(w), Nn = br(D)) : (mn = C(jr - Bn[wr]), Nn = -Ii), l.push([Nt[wr], mn, Nn]), jr = Bn[wr]
			} else if (Ht === "center") {
				w -= Bn[0] / 2, l = [], on = Nt.length;
				for (var yr = 0; yr < on; yr++) yr === 0 ? (mn = lr(w), Nn = br(D)) : (mn = C((jr - Bn[yr]) / 2), Nn = -Ii), l.push([Nt[yr], mn, Nn]), jr = Bn[yr]
			} else if (Ht === "left") {
				l = [], on = Nt.length;
				for (var Fi = 0; Fi < on; Fi++) l.push(Nt[Fi])
			} else if (Ht === "justify" && uo.encoding === "Identity-H") {
				l = [], on = Nt.length, $t = $t !== 0 ? $t : so;
				for (var xr = 0, qe = 0; qe < on; qe++)
					if (Nn = qe === 0 ? br(D) : -Ii, mn = qe === 0 ? lr(w) : xr, qe < on - 1) {
						var va = C(($t - Bn[qe]) / (Nt[qe].split(" ").length - 1)),
							vn = Nt[qe].split(" ");
						l.push([vn[0] + " ", mn, Nn]), xr = 0;
						for (var Tn = 1; Tn < vn.length; Tn++) {
							var ji = (ti(vn[Tn - 1] + " " + vn[Tn]) - ti(vn[Tn])) * cr + va;
							Tn == vn.length - 1 ? l.push([vn[Tn], ji, 0]) : l.push([vn[Tn] + " ", ji, 0]), xr -= ji
						}
					} else l.push([Nt[qe], mn, Nn]);
				l.push(["", xr, 0])
			} else {
				if (Ht !== "justify") throw new Error('Unrecognized alignment option, use "left", "center", "right" or "justify".');
				for (l = [], on = Nt.length, $t = $t !== 0 ? $t : so, qe = 0; qe < on; qe++) Nn = qe === 0 ? br(D) : -Ii, mn = qe === 0 ? lr(w) : 0, qe < on - 1 ? Fr.push(Y(C(($t - Bn[qe]) / (Nt[qe].split(" ").length - 1)))) : Fr.push(0), l.push([Nt[qe], mn, Nn])
			}
		}
		var lo = typeof H.R2L == "boolean" ? H.R2L : qt;
		lo === !0 && (l = ha(l, function(_e, Pe, ze) {
			return [_e.split("").reverse().join(""), Pe, ze]
		})), mt = {
			text: l,
			x: w,
			y: D,
			options: H,
			mutex: {
				pdfEscape: yn,
				activeFontKey: ie,
				fonts: de,
				activeFontSize: St
			}
		}, ae.publish("postProcessText", mt), l = mt.text, $n = mt.mutex.isHex || !1;
		var ba = de[ie].encoding;
		ba !== "WinAnsiEncoding" && ba !== "StandardEncoding" || (l = ha(l, function(_e, Pe, ze) {
			return [ao(_e), Pe, ze]
		})), Nt = fa(l), l = [];
		for (var ei, ni, Er, ri = 0, Ei = 1, ii = Array.isArray(Nt[0]) ? Ei : ri, Mr = "", wa = function(_e, Pe, ze) {
				var Ze = "";
				return ze instanceof Ot ? (ze = typeof H.angle == "number" ? Ye(ze, new Ot(1, 0, 0, 1, _e, Pe)) : Ye(new Ot(1, 0, 0, 1, _e, Pe), ze), z === j.ADVANCED && (ze = Ye(new Ot(1, 0, 0, -1, 0, 0), ze)), Ze = ze.join(" ") + ` Tm
`) : Ze = Y(_e) + " " + Y(Pe) + ` Td
`, Ze
			}, qn = 0; qn < Nt.length; qn++) {
			switch (Mr = "", ii) {
				case Ei:
					Er = ($n ? "<" : "(") + Nt[qn][0] + ($n ? ">" : ")"), ei = parseFloat(Nt[qn][1]), ni = parseFloat(Nt[qn][2]);
					break;
				case ri:
					Er = ($n ? "<" : "(") + Nt[qn] + ($n ? ">" : ")"), ei = lr(w), ni = br(D)
			}
			Fr !== void 0 && Fr[qn] !== void 0 && (Mr = Fr[qn] + ` Tw
`), qn === 0 ? l.push(Mr + wa(ei, ni, Me) + Er) : ii === ri ? l.push(Mr + Er) : ii === Ei && l.push(Mr + wa(ei, ni, Me) + Er)
		}
		l = ii === ri ? l.join(` Tj
T* `) : l.join(` Tj
`), l += ` Tj
`;
		var zn = `BT
/`;
		return zn += ie + " " + St + ` Tf
`, zn += Y(St * In) + ` TL
`, zn += Zr + `
`, zn += Qe, zn += l, B(zn += "ET"), y[ie] = !0, Je
	};
	var cs = d.__private__.clip = d.clip = function(l) {
		return B(l === "evenodd" ? "W*" : "W"), this
	};
	d.clipEvenOdd = function() {
		return cs("evenodd")
	}, d.__private__.discardPath = d.discardPath = function() {
		return B("n"), this
	};
	var ur = d.__private__.isValidStyle = function(l) {
		var w = !1;
		return [void 0, null, "S", "D", "F", "DF", "FD", "f", "f*", "B", "B*", "n"].indexOf(l) !== -1 && (w = !0), w
	};
	d.__private__.setDefaultPathOperation = d.setDefaultPathOperation = function(l) {
		return ur(l) && (p = l), this
	};
	var $a = d.__private__.getStyle = d.getStyle = function(l) {
			var w = p;
			switch (l) {
				case "D":
				case "S":
					w = "S";
					break;
				case "F":
					w = "f";
					break;
				case "FD":
				case "DF":
					w = "B";
					break;
				case "f":
				case "f*":
				case "B":
				case "B*":
					w = l
			}
			return w
		},
		Za = d.close = function() {
			return B("h"), this
		};
	d.stroke = function() {
		return B("S"), this
	}, d.fill = function(l) {
		return yi("f", l), this
	}, d.fillEvenOdd = function(l) {
		return yi("f*", l), this
	}, d.fillStroke = function(l) {
		return yi("B", l), this
	}, d.fillStrokeEvenOdd = function(l) {
		return yi("B*", l), this
	};
	var yi = function(l, w) {
			be(w) === "object" ? hs(w, l) : B(l)
		},
		ea = function(l) {
			l === null || z === j.ADVANCED && l === void 0 || (l = $a(l), B(l))
		};

	function fs(l, w, D, H, Z) {
		var mt = new Hi(w || this.boundingBox, D || this.xStep, H || this.yStep, this.gState, Z || this.matrix);
		mt.stream = this.stream;
		var Nt = l + "$$" + this.cloneIndex++ + "$$";
		return Fe(Nt, mt), mt
	}
	var hs = function(l, w) {
			var D = mr[l.key],
				H = fe[D];
			if (H instanceof si) B("q"), B(ds(w)), H.gState && d.setGState(H.gState), B(l.matrix.toString() + " cm"), B("/" + D + " sh"), B("Q");
			else if (H instanceof Hi) {
				var Z = new Ot(1, 0, 0, -1, 0, Ir());
				l.matrix && (Z = Z.multiply(l.matrix || Be), D = fs.call(H, l.key, l.boundingBox, l.xStep, l.yStep, Z).id), B("q"), B("/Pattern cs"), B("/" + D + " scn"), H.gState && d.setGState(H.gState), B(w), B("Q")
			}
		},
		ds = function(l) {
			switch (l) {
				case "f":
				case "F":
					return "W n";
				case "f*":
					return "W* n";
				case "B":
					return "W S";
				case "B*":
					return "W* S";
				case "S":
					return "W S";
				case "n":
					return "W n"
			}
		},
		na = d.moveTo = function(l, w) {
			return B(Y(C(l)) + " " + Y(T(w)) + " m"), this
		},
		Kr = d.lineTo = function(l, w) {
			return B(Y(C(l)) + " " + Y(T(w)) + " l"), this
		},
		kr = d.curveTo = function(l, w, D, H, Z, mt) {
			return B([Y(C(l)), Y(T(w)), Y(C(D)), Y(T(H)), Y(C(Z)), Y(T(mt)), "c"].join(" ")), this
		};
	d.__private__.line = d.line = function(l, w, D, H, Z) {
		if (isNaN(l) || isNaN(w) || isNaN(D) || isNaN(H) || !ur(Z)) throw new Error("Invalid arguments passed to jsPDF.line");
		return z === j.COMPAT ? this.lines([
			[D - l, H - w]
		], l, w, [1, 1], Z || "S") : this.lines([
			[D - l, H - w]
		], l, w, [1, 1]).stroke()
	}, d.__private__.lines = d.lines = function(l, w, D, H, Z, mt) {
		var Nt, Mt, Ht, te, $t, ce, je, Me, Je, ln, Qe, $n;
		if (typeof l == "number" && ($n = D, D = w, w = l, l = $n), H = H || [1, 1], mt = mt || !1, isNaN(w) || isNaN(D) || !Array.isArray(l) || !Array.isArray(H) || !ur(Z) || typeof mt != "boolean") throw new Error("Invalid arguments passed to jsPDF.lines");
		for (na(w, D), Nt = H[0], Mt = H[1], te = l.length, ln = w, Qe = D, Ht = 0; Ht < te; Ht++)($t = l[Ht]).length === 2 ? (ln = $t[0] * Nt + ln, Qe = $t[1] * Mt + Qe, Kr(ln, Qe)) : (ce = $t[0] * Nt + ln, je = $t[1] * Mt + Qe, Me = $t[2] * Nt + ln, Je = $t[3] * Mt + Qe, ln = $t[4] * Nt + ln, Qe = $t[5] * Mt + Qe, kr(ce, je, Me, Je, ln, Qe));
		return mt && Za(), ea(Z), this
	}, d.path = function(l) {
		for (var w = 0; w < l.length; w++) {
			var D = l[w],
				H = D.c;
			switch (D.op) {
				case "m":
					na(H[0], H[1]);
					break;
				case "l":
					Kr(H[0], H[1]);
					break;
				case "c":
					kr.apply(this, H);
					break;
				case "h":
					Za()
			}
		}
		return this
	}, d.__private__.rect = d.rect = function(l, w, D, H, Z) {
		if (isNaN(l) || isNaN(w) || isNaN(D) || isNaN(H) || !ur(Z)) throw new Error("Invalid arguments passed to jsPDF.rect");
		return z === j.COMPAT && (H = -H), B([Y(C(l)), Y(T(w)), Y(C(D)), Y(C(H)), "re"].join(" ")), ea(Z), this
	}, d.__private__.triangle = d.triangle = function(l, w, D, H, Z, mt, Nt) {
		if (isNaN(l) || isNaN(w) || isNaN(D) || isNaN(H) || isNaN(Z) || isNaN(mt) || !ur(Nt)) throw new Error("Invalid arguments passed to jsPDF.triangle");
		return this.lines([
			[D - l, H - w],
			[Z - D, mt - H],
			[l - Z, w - mt]
		], l, w, [1, 1], Nt, !0), this
	}, d.__private__.roundedRect = d.roundedRect = function(l, w, D, H, Z, mt, Nt) {
		if (isNaN(l) || isNaN(w) || isNaN(D) || isNaN(H) || isNaN(Z) || isNaN(mt) || !ur(Nt)) throw new Error("Invalid arguments passed to jsPDF.roundedRect");
		var Mt = 4 / 3 * (Math.SQRT2 - 1);
		return Z = Math.min(Z, .5 * D), mt = Math.min(mt, .5 * H), this.lines([
			[D - 2 * Z, 0],
			[Z * Mt, 0, Z, mt - mt * Mt, Z, mt],
			[0, H - 2 * mt],
			[0, mt * Mt, -Z * Mt, mt, -Z, mt],
			[2 * Z - D, 0],
			[-Z * Mt, 0, -Z, -mt * Mt, -Z, -mt],
			[0, 2 * mt - H],
			[0, -mt * Mt, Z * Mt, -mt, Z, -mt]
		], l + Z, w, [1, 1], Nt, !0), this
	}, d.__private__.ellipse = d.ellipse = function(l, w, D, H, Z) {
		if (isNaN(l) || isNaN(w) || isNaN(D) || isNaN(H) || !ur(Z)) throw new Error("Invalid arguments passed to jsPDF.ellipse");
		var mt = 4 / 3 * (Math.SQRT2 - 1) * D,
			Nt = 4 / 3 * (Math.SQRT2 - 1) * H;
		return na(l + D, w), kr(l + D, w - Nt, l + mt, w - H, l, w - H), kr(l - mt, w - H, l - D, w - Nt, l - D, w), kr(l - D, w + Nt, l - mt, w + H, l, w + H), kr(l + mt, w + H, l + D, w + Nt, l + D, w), ea(Z), this
	}, d.__private__.circle = d.circle = function(l, w, D, H) {
		if (isNaN(l) || isNaN(w) || isNaN(D) || !ur(H)) throw new Error("Invalid arguments passed to jsPDF.circle");
		return this.ellipse(l, w, D, D, H)
	}, d.setFont = function(l, w, D) {
		return D && (w = lt(w, D)), ie = Ja(l, w, {
			disableWarning: !1
		}), this
	};
	var ps = d.__private__.getFont = d.getFont = function() {
		return de[Ja.apply(d, arguments)]
	};
	d.__private__.getFontList = d.getFontList = function() {
		var l, w, D = {};
		for (l in ye)
			if (ye.hasOwnProperty(l))
				for (w in D[l] = [], ye[l]) ye[l].hasOwnProperty(w) && D[l].push(w);
		return D
	}, d.addFont = function(l, w, D, H, Z) {
		var mt = ["StandardEncoding", "MacRomanEncoding", "Identity-H", "WinAnsiEncoding"];
		return arguments[3] && mt.indexOf(arguments[3]) !== -1 ? Z = arguments[3] : arguments[3] && mt.indexOf(arguments[3]) == -1 && (D = lt(D, H)), Z = Z || "Identity-H", Zi.call(this, l, w, D, Z)
	};
	var $r, ra = e.lineWidth || .200025,
		xi = d.__private__.getLineWidth = d.getLineWidth = function() {
			return ra
		},
		Qa = d.__private__.setLineWidth = d.setLineWidth = function(l) {
			return ra = l, B(Y(C(l)) + " w"), this
		};
	d.__private__.setLineDash = Gt.API.setLineDash = Gt.API.setLineDashPattern = function(l, w) {
		if (l = l || [], w = w || 0, isNaN(w) || !Array.isArray(l)) throw new Error("Invalid arguments passed to jsPDF.setLineDash");
		return l = l.map(function(D) {
			return Y(C(D))
		}).join(" "), w = Y(C(w)), B("[" + l + "] " + w + " d"), this
	};
	var to = d.__private__.getLineHeight = d.getLineHeight = function() {
		return St * $r
	};
	d.__private__.getLineHeight = d.getLineHeight = function() {
		return St * $r
	};
	var eo = d.__private__.setLineHeightFactor = d.setLineHeightFactor = function(l) {
			return typeof(l = l || 1.15) == "number" && ($r = l), this
		},
		no = d.__private__.getLineHeightFactor = d.getLineHeightFactor = function() {
			return $r
		};
	eo(e.lineHeight);
	var lr = d.__private__.getHorizontalCoordinate = function(l) {
			return C(l)
		},
		br = d.__private__.getVerticalCoordinate = function(l) {
			return z === j.ADVANCED ? l : zt[M].mediaBox.topRightY - zt[M].mediaBox.bottomLeftY - C(l)
		},
		gs = d.__private__.getHorizontalCoordinateString = d.getHorizontalCoordinateString = function(l) {
			return Y(lr(l))
		},
		Cr = d.__private__.getVerticalCoordinateString = d.getVerticalCoordinateString = function(l) {
			return Y(br(l))
		},
		Kn = e.strokeColor || "0 G";
	d.__private__.getStrokeColor = d.getDrawColor = function() {
		return Yn(Kn)
	}, d.__private__.setStrokeColor = d.setDrawColor = function(l, w, D, H) {
		return Kn = Jn({
			ch1: l,
			ch2: w,
			ch3: D,
			ch4: H,
			pdfColorType: "draw",
			precision: 2
		}), B(Kn), this
	};
	var ia = e.fillColor || "0 g";
	d.__private__.getFillColor = d.getFillColor = function() {
		return Yn(ia)
	}, d.__private__.setFillColor = d.setFillColor = function(l, w, D, H) {
		return ia = Jn({
			ch1: l,
			ch2: w,
			ch3: D,
			ch4: H,
			pdfColorType: "fill",
			precision: 2
		}), B(ia), this
	};
	var Zr = e.textColor || "0 g",
		ms = d.__private__.getTextColor = d.getTextColor = function() {
			return Yn(Zr)
		};
	d.__private__.setTextColor = d.setTextColor = function(l, w, D, H) {
		return Zr = Jn({
			ch1: l,
			ch2: w,
			ch3: D,
			ch4: H,
			pdfColorType: "text",
			precision: 3
		}), this
	};
	var Ni = e.charSpace,
		vs = d.__private__.getCharSpace = d.getCharSpace = function() {
			return parseFloat(Ni || 0)
		};
	d.__private__.setCharSpace = d.setCharSpace = function(l) {
		if (isNaN(l)) throw new Error("Invalid argument passed to jsPDF.setCharSpace");
		return Ni = l, this
	};
	var aa = 0;
	d.CapJoinStyles = {
		0: 0,
		butt: 0,
		but: 0,
		miter: 0,
		1: 1,
		round: 1,
		rounded: 1,
		circle: 1,
		2: 2,
		projecting: 2,
		project: 2,
		square: 2,
		bevel: 2
	}, d.__private__.setLineCap = d.setLineCap = function(l) {
		var w = d.CapJoinStyles[l];
		if (w === void 0) throw new Error("Line cap style of '" + l + "' is not recognized. See or extend .CapJoinStyles property for valid styles");
		return aa = w, B(w + " J"), this
	};
	var oa = 0;
	d.__private__.setLineJoin = d.setLineJoin = function(l) {
		var w = d.CapJoinStyles[l];
		if (w === void 0) throw new Error("Line join style of '" + l + "' is not recognized. See or extend .CapJoinStyles property for valid styles");
		return oa = w, B(w + " j"), this
	}, d.__private__.setLineMiterLimit = d.__private__.setMiterLimit = d.setLineMiterLimit = d.setMiterLimit = function(l) {
		if (l = l || 0, isNaN(l)) throw new Error("Invalid argument passed to jsPDF.setLineMiterLimit");
		return B(Y(C(l)) + " M"), this
	}, d.GState = Ho, d.setGState = function(l) {
		(l = typeof l == "string" ? Ie[kn[l]] : ro(null, l)).equals(Ae) || (B("/" + l.id + " gs"), Ae = l)
	};
	var ro = function(l, w) {
		if (!l || !kn[l]) {
			var D = !1;
			for (var H in Ie)
				if (Ie.hasOwnProperty(H) && Ie[H].equals(w)) {
					D = !0;
					break
				} if (D) w = Ie[H];
			else {
				var Z = "GS" + (Object.keys(Ie).length + 1).toString(10);
				Ie[Z] = w, w.id = Z
			}
			return l && (kn[l] = w.id), ae.publish("addGState", w), w
		}
	};
	d.addGState = function(l, w) {
		return ro(l, w), this
	}, d.saveGraphicsState = function() {
		return B("q"), Dn.push({
			key: ie,
			size: St,
			color: Zr
		}), this
	}, d.restoreGraphicsState = function() {
		B("Q");
		var l = Dn.pop();
		return ie = l.key, St = l.size, Zr = l.color, Ae = null, this
	}, d.setCurrentTransformationMatrix = function(l) {
		return B(l.toString() + " cm"), this
	}, d.comment = function(l) {
		return B("#" + l), this
	};
	var Li = function(l, w) {
			var D = l || 0;
			Object.defineProperty(this, "x", {
				enumerable: !0,
				get: function() {
					return D
				},
				set: function(mt) {
					isNaN(mt) || (D = parseFloat(mt))
				}
			});
			var H = w || 0;
			Object.defineProperty(this, "y", {
				enumerable: !0,
				get: function() {
					return H
				},
				set: function(mt) {
					isNaN(mt) || (H = parseFloat(mt))
				}
			});
			var Z = "pt";
			return Object.defineProperty(this, "type", {
				enumerable: !0,
				get: function() {
					return Z
				},
				set: function(mt) {
					Z = mt.toString()
				}
			}), this
		},
		sa = function(l, w, D, H) {
			Li.call(this, l, w), this.type = "rect";
			var Z = D || 0;
			Object.defineProperty(this, "w", {
				enumerable: !0,
				get: function() {
					return Z
				},
				set: function(Nt) {
					isNaN(Nt) || (Z = parseFloat(Nt))
				}
			});
			var mt = H || 0;
			return Object.defineProperty(this, "h", {
				enumerable: !0,
				get: function() {
					return mt
				},
				set: function(Nt) {
					isNaN(Nt) || (mt = parseFloat(Nt))
				}
			}), this
		},
		ua = function() {
			this.page = oe, this.currentPage = M, this.pages = Lt.slice(0), this.pagesContext = zt.slice(0), this.x = $e, this.y = le, this.matrix = Pn, this.width = Qr(M), this.height = Ir(M), this.outputDestination = It, this.id = "", this.objectNumber = -1
		};
	ua.prototype.restore = function() {
		oe = this.page, M = this.currentPage, zt = this.pagesContext, Lt = this.pages, $e = this.x, le = this.y, Pn = this.matrix, la(M, this.width), ca(M, this.height), It = this.outputDestination
	};
	var io = function(l, w, D, H, Z) {
			an.push(new ua), oe = M = 0, Lt = [], $e = l, le = w, Pn = Z, Qi([D, H])
		},
		bs = function(l) {
			if (Re[l]) an.pop().restore();
			else {
				var w = new ua,
					D = "Xo" + (Object.keys(pe).length + 1).toString(10);
				w.id = D, Re[l] = D, pe[D] = w, ae.publish("addFormObject", w), an.pop().restore()
			}
		};
	for (var Ai in d.beginFormObject = function(l, w, D, H, Z) {
			return io(l, w, D, H, Z), this
		}, d.endFormObject = function(l) {
			return bs(l), this
		}, d.doFormObject = function(l, w) {
			var D = pe[Re[l]];
			return B("q"), B(w.toString() + " cm"), B("/" + D.id + " Do"), B("Q"), this
		}, d.getFormObject = function(l) {
			var w = pe[Re[l]];
			return {
				x: w.x,
				y: w.y,
				width: w.width,
				height: w.height,
				matrix: w.matrix
			}
		}, d.save = function(l, w) {
			return l = l || "generated.pdf", (w = w || {}).returnPromise = w.returnPromise || !1, w.returnPromise === !1 ? (oi(bi(vr()), l), typeof oi.unload == "function" && Yt.setTimeout && setTimeout(oi.unload, 911), this) : new Promise(function(D, H) {
				try {
					var Z = oi(bi(vr()), l);
					typeof oi.unload == "function" && Yt.setTimeout && setTimeout(oi.unload, 911), D(Z)
				} catch (mt) {
					H(mt.message)
				}
			})
		}, Gt.API) Gt.API.hasOwnProperty(Ai) && (Ai === "events" && Gt.API.events.length ? function(l, w) {
		var D, H, Z;
		for (Z = w.length - 1; Z !== -1; Z--) D = w[Z][0], H = w[Z][1], l.subscribe.apply(l, [D].concat(typeof H == "function" ? [H] : H))
	}(ae, Gt.API.events) : d[Ai] = Gt.API[Ai]);
	var Qr = d.getPageWidth = function(l) {
			return (zt[l = l || M].mediaBox.topRightX - zt[l].mediaBox.bottomLeftX) / kt
		},
		la = d.setPageWidth = function(l, w) {
			zt[l].mediaBox.topRightX = w * kt + zt[l].mediaBox.bottomLeftX
		},
		Ir = d.getPageHeight = function(l) {
			return (zt[l = l || M].mediaBox.topRightY - zt[l].mediaBox.bottomLeftY) / kt
		},
		ca = d.setPageHeight = function(l, w) {
			zt[l].mediaBox.topRightY = w * kt + zt[l].mediaBox.bottomLeftY
		};
	return d.internal = {
		pdfEscape: yn,
		getStyle: $a,
		getFont: ps,
		getFontSize: Ct,
		getCharSpace: vs,
		getTextColor: ms,
		getLineHeight: to,
		getLineHeightFactor: no,
		getLineWidth: xi,
		write: Xt,
		getHorizontalCoordinate: lr,
		getVerticalCoordinate: br,
		getCoordinateString: gs,
		getVerticalCoordinateString: Cr,
		collections: {},
		newObject: ke,
		newAdditionalObject: On,
		newObjectDeferred: Se,
		newObjectDeferredBegin: Ee,
		getFilters: or,
		putStream: Rn,
		events: ae,
		scaleFactor: kt,
		pageSize: {
			getWidth: function() {
				return Qr(M)
			},
			setWidth: function(l) {
				la(M, l)
			},
			getHeight: function() {
				return Ir(M)
			},
			setHeight: function(l) {
				ca(M, l)
			}
		},
		encryptionOptions: v,
		encryption: un,
		getEncryptor: us,
		output: wi,
		getNumberOfPages: rs,
		pages: Lt,
		out: B,
		f2: ot,
		f3: P,
		getPageInfo: Ka,
		getPageInfoByObjId: Kt,
		getCurrentPageInfo: ls,
		getPDFVersion: A,
		Point: Li,
		Rectangle: sa,
		Matrix: Ot,
		hasHotfix: Xa
	}, Object.defineProperty(d.internal.pageSize, "width", {
		get: function() {
			return Qr(M)
		},
		set: function(l) {
			la(M, l)
		},
		enumerable: !0,
		configurable: !0
	}), Object.defineProperty(d.internal.pageSize, "height", {
		get: function() {
			return Ir(M)
		},
		set: function(l) {
			ca(M, l)
		},
		enumerable: !0,
		configurable: !0
	}), es.call(d, At), ie = "F1", Ga(o, n), ae.publish("initialized"), d
}
zi.prototype.lsbFirstWord = function(e) {
	return String.fromCharCode(e >> 0 & 255, e >> 8 & 255, e >> 16 & 255, e >> 24 & 255)
}, zi.prototype.toHexString = function(e) {
	return e.split("").map(function(t) {
		return ("0" + (255 & t.charCodeAt(0)).toString(16)).slice(-2)
	}).join("")
}, zi.prototype.hexToBytes = function(e) {
	for (var t = [], n = 0; n < e.length; n += 2) t.push(String.fromCharCode(parseInt(e.substr(n, 2), 16)));
	return t.join("")
}, zi.prototype.processOwnerPassword = function(e, t) {
	return hu(fu(t).substr(0, 5), e)
}, zi.prototype.encryptor = function(e, t) {
	var n = fu(this.encryptionKey + String.fromCharCode(255 & e, e >> 8 & 255, e >> 16 & 255, 255 & t, t >> 8 & 255)).substr(0, 10);
	return function(i) {
		return hu(n, i)
	}
}, Ho.prototype.equals = function(e) {
	var t, n = "id,objectNumber,equals";
	if (!e || be(e) !== be(this)) return !1;
	var i = 0;
	for (t in this)
		if (!(n.indexOf(t) >= 0)) {
			if (this.hasOwnProperty(t) && !e.hasOwnProperty(t) || this[t] !== e[t]) return !1;
			i++
		} for (t in e) e.hasOwnProperty(t) && n.indexOf(t) < 0 && i--;
	return i === 0
}, Gt.API = {
	events: []
}, Gt.version = "3.0.1";
var Oe = Gt.API,
	Fu = 1,
	ci = function(e) {
		return e.replace(/\\/g, "\\\\").replace(/\(/g, "\\(").replace(/\)/g, "\\)")
	},
	Ti = function(e) {
		return e.replace(/\\\\/g, "\\").replace(/\\\(/g, "(").replace(/\\\)/g, ")")
	},
	Zt = function(e) {
		return e.toFixed(2)
	},
	Hr = function(e) {
		return e.toFixed(5)
	};
Oe.__acroform__ = {};
var _n = function(e, t) {
		e.prototype = Object.create(t.prototype), e.prototype.constructor = e
	},
	Pl = function(e) {
		return e * Fu
	},
	hr = function(e) {
		var t = new yc,
			n = Rt.internal.getHeight(e) || 0,
			i = Rt.internal.getWidth(e) || 0;
		return t.BBox = [0, 0, Number(Zt(i)), Number(Zt(n))], t
	},
	B2 = Oe.__acroform__.setBit = function(e, t) {
		if (e = e || 0, t = t || 0, isNaN(e) || isNaN(t)) throw new Error("Invalid arguments passed to jsPDF.API.__acroform__.setBit");
		return e |= 1 << t
	},
	T2 = Oe.__acroform__.clearBit = function(e, t) {
		if (e = e || 0, t = t || 0, isNaN(e) || isNaN(t)) throw new Error("Invalid arguments passed to jsPDF.API.__acroform__.clearBit");
		return e &= ~(1 << t)
	},
	q2 = Oe.__acroform__.getBit = function(e, t) {
		if (isNaN(e) || isNaN(t)) throw new Error("Invalid arguments passed to jsPDF.API.__acroform__.getBit");
		return (e & 1 << t) == 0 ? 0 : 1
	},
	He = Oe.__acroform__.getBitForPdf = function(e, t) {
		if (isNaN(e) || isNaN(t)) throw new Error("Invalid arguments passed to jsPDF.API.__acroform__.getBitForPdf");
		return q2(e, t - 1)
	},
	We = Oe.__acroform__.setBitForPdf = function(e, t) {
		if (isNaN(e) || isNaN(t)) throw new Error("Invalid arguments passed to jsPDF.API.__acroform__.setBitForPdf");
		return B2(e, t - 1)
	},
	Ve = Oe.__acroform__.clearBitForPdf = function(e, t) {
		if (isNaN(e) || isNaN(t)) throw new Error("Invalid arguments passed to jsPDF.API.__acroform__.clearBitForPdf");
		return T2(e, t - 1)
	},
	z2 = Oe.__acroform__.calculateCoordinates = function(e, t) {
		var n = t.internal.getHorizontalCoordinate,
			i = t.internal.getVerticalCoordinate,
			o = e[0],
			a = e[1],
			u = e[2],
			c = e[3],
			f = {};
		return f.lowerLeft_X = n(o) || 0, f.lowerLeft_Y = i(a + c) || 0, f.upperRight_X = n(o + u) || 0, f.upperRight_Y = i(a) || 0, [Number(Zt(f.lowerLeft_X)), Number(Zt(f.lowerLeft_Y)), Number(Zt(f.upperRight_X)), Number(Zt(f.upperRight_Y))]
	},
	U2 = function(e) {
		if (e.appearanceStreamContent) return e.appearanceStreamContent;
		if (e.V || e.DV) {
			var t = [],
				n = e._V || e.DV,
				i = du(e, n),
				o = e.scope.internal.getFont(e.fontName, e.fontStyle).id;
			t.push("/Tx BMC"), t.push("q"), t.push("BT"), t.push(e.scope.__private__.encodeColorString(e.color)), t.push("/" + o + " " + Zt(i.fontSize) + " Tf"), t.push("1 0 0 1 0 0 Tm"), t.push(i.text), t.push("ET"), t.push("Q"), t.push("EMC");
			var a = hr(e);
			return a.scope = e.scope, a.stream = t.join(`
`), a
		}
	},
	du = function(e, t) {
		var n = e.fontSize === 0 ? e.maxFontSize : e.fontSize,
			i = {
				text: "",
				fontSize: ""
			},
			o = (t = (t = t.substr(0, 1) == "(" ? t.substr(1) : t).substr(t.length - 1) == ")" ? t.substr(0, t.length - 1) : t).split(" ");
		o = e.multiline ? o.map(function(P) {
			return P.split(`
`)
		}) : o.map(function(P) {
			return [P]
		});
		var a = n,
			u = Rt.internal.getHeight(e) || 0;
		u = u < 0 ? -u : u;
		var c = Rt.internal.getWidth(e) || 0;
		c = c < 0 ? -c : c;
		var f = function(P, C, q) {
			if (P + 1 < o.length) {
				var T = C + " " + o[P + 1][0];
				return jo(T, e, q).width <= c - 4
			}
			return !1
		};
		a++;
		t: for (; a > 0;) {
			t = "", a--;
			var p, v, m = jo("3", e, a).height,
				y = e.multiline ? u - a : (u - m) / 2,
				d = y += 2,
				I = 0,
				A = 0,
				F = 0;
			if (a <= 0) {
				t = `(...) Tj
`, t += "% Width of Text: " + jo(t, e, a = 12).width + ", FieldWidth:" + c + `
`;
				break
			}
			for (var _ = "", j = 0, z = 0; z < o.length; z++)
				if (o.hasOwnProperty(z)) {
					var $ = !1;
					if (o[z].length !== 1 && F !== o[z].length - 1) {
						if ((m + 2) * (j + 2) + 2 > u) continue t;
						_ += o[z][F], $ = !0, A = z, z--
					} else {
						_ = (_ += o[z][F] + " ").substr(_.length - 1) == " " ? _.substr(0, _.length - 1) : _;
						var rt = parseInt(z),
							lt = f(rt, _, a),
							Y = z >= o.length - 1;
						if (lt && !Y) {
							_ += " ", F = 0;
							continue
						}
						if (lt || Y) {
							if (Y) A = rt;
							else if (e.multiline && (m + 2) * (j + 2) + 2 > u) continue t
						} else {
							if (!e.multiline || (m + 2) * (j + 2) + 2 > u) continue t;
							A = rt
						}
					}
					for (var R = "", K = I; K <= A; K++) {
						var ot = o[K];
						if (e.multiline) {
							if (K === A) {
								R += ot[F] + " ", F = (F + 1) % ot.length;
								continue
							}
							if (K === I) {
								R += ot[ot.length - 1] + " ";
								continue
							}
						}
						R += ot[0] + " "
					}
					switch (R = R.substr(R.length - 1) == " " ? R.substr(0, R.length - 1) : R, v = jo(R, e, a).width, e.textAlign) {
						case "right":
							p = c - v - 2;
							break;
						case "center":
							p = (c - v) / 2;
							break;
						case "left":
						default:
							p = 2
					}
					t += Zt(p) + " " + Zt(d) + ` Td
`, t += "(" + ci(R) + `) Tj
`, t += -Zt(p) + ` 0 Td
`, d = -(a + 2), v = 0, I = $ ? A : A + 1, j++, _ = ""
				} break
		}
		return i.text = t, i.fontSize = a, i
	},
	jo = function(e, t, n) {
		var i = t.scope.internal.getFont(t.fontName, t.fontStyle),
			o = t.scope.getStringUnitWidth(e, {
				font: i,
				fontSize: parseFloat(n),
				charSpace: 0
			}) * parseFloat(n);
		return {
			height: t.scope.getStringUnitWidth("3", {
				font: i,
				fontSize: parseFloat(n),
				charSpace: 0
			}) * parseFloat(n) * 1.5,
			width: o
		}
	},
	H2 = {
		fields: [],
		xForms: [],
		acroFormDictionaryRoot: null,
		printedOut: !1,
		internal: null,
		isInitialized: !1
	},
	W2 = function(e, t) {
		var n = {
			type: "reference",
			object: e
		};
		t.internal.getPageInfo(e.page).pageContext.annotations.find(function(i) {
			return i.type === n.type && i.object === n.object
		}) === void 0 && t.internal.getPageInfo(e.page).pageContext.annotations.push(n)
	},
	V2 = function(e, t) {
		for (var n in e)
			if (e.hasOwnProperty(n)) {
				var i = n,
					o = e[n];
				t.internal.newObjectDeferredBegin(o.objId, !0), be(o) === "object" && typeof o.putStream == "function" && o.putStream(), delete e[i]
			}
	},
	G2 = function(e, t) {
		if (t.scope = e, e.internal !== void 0 && (e.internal.acroformPlugin === void 0 || e.internal.acroformPlugin.isInitialized === !1)) {
			if (ir.FieldNum = 0, e.internal.acroformPlugin = JSON.parse(JSON.stringify(H2)), e.internal.acroformPlugin.acroFormDictionaryRoot) throw new Error("Exception while creating AcroformDictionary");
			Fu = e.internal.scaleFactor, e.internal.acroformPlugin.acroFormDictionaryRoot = new xc, e.internal.acroformPlugin.acroFormDictionaryRoot.scope = e, e.internal.acroformPlugin.acroFormDictionaryRoot._eventID = e.internal.events.subscribe("postPutResources", function() {
				(function(n) {
					n.internal.events.unsubscribe(n.internal.acroformPlugin.acroFormDictionaryRoot._eventID), delete n.internal.acroformPlugin.acroFormDictionaryRoot._eventID, n.internal.acroformPlugin.printedOut = !0
				})(e)
			}), e.internal.events.subscribe("buildDocument", function() {
				(function(n) {
					n.internal.acroformPlugin.acroFormDictionaryRoot.objId = void 0;
					var i = n.internal.acroformPlugin.acroFormDictionaryRoot.Fields;
					for (var o in i)
						if (i.hasOwnProperty(o)) {
							var a = i[o];
							a.objId = void 0, a.hasAnnotation && W2(a, n)
						}
				})(e)
			}), e.internal.events.subscribe("putCatalog", function() {
				(function(n) {
					if (n.internal.acroformPlugin.acroFormDictionaryRoot === void 0) throw new Error("putCatalogCallback: Root missing.");
					n.internal.write("/AcroForm " + n.internal.acroformPlugin.acroFormDictionaryRoot.objId + " 0 R")
				})(e)
			}), e.internal.events.subscribe("postPutPages", function(n) {
				(function(i, o) {
					var a = !i;
					for (var u in i || (o.internal.newObjectDeferredBegin(o.internal.acroformPlugin.acroFormDictionaryRoot.objId, !0), o.internal.acroformPlugin.acroFormDictionaryRoot.putStream()), i = i || o.internal.acroformPlugin.acroFormDictionaryRoot.Kids)
						if (i.hasOwnProperty(u)) {
							var c = i[u],
								f = [],
								p = c.Rect;
							if (c.Rect && (c.Rect = z2(c.Rect, o)), o.internal.newObjectDeferredBegin(c.objId, !0), c.DA = Rt.createDefaultAppearanceStream(c), be(c) === "object" && typeof c.getKeyValueListForStream == "function" && (f = c.getKeyValueListForStream()), c.Rect = p, c.hasAppearanceStream && !c.appearanceStreamContent) {
								var v = U2(c);
								f.push({
									key: "AP",
									value: "<</N " + v + ">>"
								}), o.internal.acroformPlugin.xForms.push(v)
							}
							if (c.appearanceStreamContent) {
								var m = "";
								for (var y in c.appearanceStreamContent)
									if (c.appearanceStreamContent.hasOwnProperty(y)) {
										var d = c.appearanceStreamContent[y];
										if (m += "/" + y + " ", m += "<<", Object.keys(d).length >= 1 || Array.isArray(d)) {
											for (var u in d)
												if (d.hasOwnProperty(u)) {
													var I = d[u];
													typeof I == "function" && (I = I.call(o, c)), m += "/" + u + " " + I + " ", o.internal.acroformPlugin.xForms.indexOf(I) >= 0 || o.internal.acroformPlugin.xForms.push(I)
												}
										} else typeof(I = d) == "function" && (I = I.call(o, c)), m += "/" + u + " " + I, o.internal.acroformPlugin.xForms.indexOf(I) >= 0 || o.internal.acroformPlugin.xForms.push(I);
										m += ">>"
									} f.push({
									key: "AP",
									value: `<<
` + m + ">>"
								})
							}
							o.internal.putStream({
								additionalKeyValues: f,
								objectId: c.objId
							}), o.internal.out("endobj")
						} a && V2(o.internal.acroformPlugin.xForms, o)
				})(n, e)
			}), e.internal.acroformPlugin.isInitialized = !0
		}
	},
	wc = Oe.__acroform__.arrayToPdfArray = function(e, t, n) {
		var i = function(u) {
			return u
		};
		if (Array.isArray(e)) {
			for (var o = "[", a = 0; a < e.length; a++) switch (a !== 0 && (o += " "), be(e[a])) {
				case "boolean":
				case "number":
				case "object":
					o += e[a].toString();
					break;
				case "string":
					e[a].substr(0, 1) !== "/" ? (t !== void 0 && n && (i = n.internal.getEncryptor(t)), o += "(" + ci(i(e[a].toString())) + ")") : o += e[a].toString()
			}
			return o += "]"
		}
		throw new Error("Invalid argument passed to jsPDF.__acroform__.arrayToPdfArray")
	},
	Xs = function(e, t, n) {
		var i = function(o) {
			return o
		};
		return t !== void 0 && n && (i = n.internal.getEncryptor(t)), (e = e || "").toString(), e = "(" + ci(i(e)) + ")"
	},
	dr = function() {
		this._objId = void 0, this._scope = void 0, Object.defineProperty(this, "objId", {
			get: function() {
				if (this._objId === void 0) {
					if (this.scope === void 0) return;
					this._objId = this.scope.internal.newObjectDeferred()
				}
				return this._objId
			},
			set: function(e) {
				this._objId = e
			}
		}), Object.defineProperty(this, "scope", {
			value: this._scope,
			writable: !0
		})
	};
dr.prototype.toString = function() {
	return this.objId + " 0 R"
}, dr.prototype.putStream = function() {
	var e = this.getKeyValueListForStream();
	this.scope.internal.putStream({
		data: this.stream,
		additionalKeyValues: e,
		objectId: this.objId
	}), this.scope.internal.out("endobj")
}, dr.prototype.getKeyValueListForStream = function() {
	var e = [],
		t = Object.getOwnPropertyNames(this).filter(function(a) {
			return a != "content" && a != "appearanceStreamContent" && a != "scope" && a != "objId" && a.substring(0, 1) != "_"
		});
	for (var n in t)
		if (Object.getOwnPropertyDescriptor(this, t[n]).configurable === !1) {
			var i = t[n],
				o = this[i];
			o && (Array.isArray(o) ? e.push({
				key: i,
				value: wc(o, this.objId, this.scope)
			}) : o instanceof dr ? (o.scope = this.scope, e.push({
				key: i,
				value: o.objId + " 0 R"
			})) : typeof o != "function" && e.push({
				key: i,
				value: o
			}))
		} return e
};
var yc = function() {
	dr.call(this), Object.defineProperty(this, "Type", {
		value: "/XObject",
		configurable: !1,
		writable: !0
	}), Object.defineProperty(this, "Subtype", {
		value: "/Form",
		configurable: !1,
		writable: !0
	}), Object.defineProperty(this, "FormType", {
		value: 1,
		configurable: !1,
		writable: !0
	});
	var e, t = [];
	Object.defineProperty(this, "BBox", {
		configurable: !1,
		get: function() {
			return t
		},
		set: function(n) {
			t = n
		}
	}), Object.defineProperty(this, "Resources", {
		value: "2 0 R",
		configurable: !1,
		writable: !0
	}), Object.defineProperty(this, "stream", {
		enumerable: !1,
		configurable: !0,
		set: function(n) {
			e = n.trim()
		},
		get: function() {
			return e || null
		}
	})
};
_n(yc, dr);
var xc = function() {
	dr.call(this);
	var e, t = [];
	Object.defineProperty(this, "Kids", {
		enumerable: !1,
		configurable: !0,
		get: function() {
			return t.length > 0 ? t : void 0
		}
	}), Object.defineProperty(this, "Fields", {
		enumerable: !1,
		configurable: !1,
		get: function() {
			return t
		}
	}), Object.defineProperty(this, "DA", {
		enumerable: !1,
		configurable: !1,
		get: function() {
			if (e) {
				var n = function(i) {
					return i
				};
				return this.scope && (n = this.scope.internal.getEncryptor(this.objId)), "(" + ci(n(e)) + ")"
			}
		},
		set: function(n) {
			e = n
		}
	})
};
_n(xc, dr);
var ir = function e() {
	dr.call(this);
	var t = 4;
	Object.defineProperty(this, "F", {
		enumerable: !1,
		configurable: !1,
		get: function() {
			return t
		},
		set: function(_) {
			if (isNaN(_)) throw new Error('Invalid value "' + _ + '" for attribute F supplied.');
			t = _
		}
	}), Object.defineProperty(this, "showWhenPrinted", {
		enumerable: !0,
		configurable: !0,
		get: function() {
			return !!He(t, 3)
		},
		set: function(_) {
			_ ? this.F = We(t, 3) : this.F = Ve(t, 3)
		}
	});
	var n = 0;
	Object.defineProperty(this, "Ff", {
		enumerable: !1,
		configurable: !1,
		get: function() {
			return n
		},
		set: function(_) {
			if (isNaN(_)) throw new Error('Invalid value "' + _ + '" for attribute Ff supplied.');
			n = _
		}
	});
	var i = [];
	Object.defineProperty(this, "Rect", {
		enumerable: !1,
		configurable: !1,
		get: function() {
			if (i.length !== 0) return i
		},
		set: function(_) {
			i = _ !== void 0 ? _ : []
		}
	}), Object.defineProperty(this, "x", {
		enumerable: !0,
		configurable: !0,
		get: function() {
			return !i || isNaN(i[0]) ? 0 : i[0]
		},
		set: function(_) {
			i[0] = _
		}
	}), Object.defineProperty(this, "y", {
		enumerable: !0,
		configurable: !0,
		get: function() {
			return !i || isNaN(i[1]) ? 0 : i[1]
		},
		set: function(_) {
			i[1] = _
		}
	}), Object.defineProperty(this, "width", {
		enumerable: !0,
		configurable: !0,
		get: function() {
			return !i || isNaN(i[2]) ? 0 : i[2]
		},
		set: function(_) {
			i[2] = _
		}
	}), Object.defineProperty(this, "height", {
		enumerable: !0,
		configurable: !0,
		get: function() {
			return !i || isNaN(i[3]) ? 0 : i[3]
		},
		set: function(_) {
			i[3] = _
		}
	});
	var o = "";
	Object.defineProperty(this, "FT", {
		enumerable: !0,
		configurable: !1,
		get: function() {
			return o
		},
		set: function(_) {
			switch (_) {
				case "/Btn":
				case "/Tx":
				case "/Ch":
				case "/Sig":
					o = _;
					break;
				default:
					throw new Error('Invalid value "' + _ + '" for attribute FT supplied.')
			}
		}
	});
	var a = null;
	Object.defineProperty(this, "T", {
		enumerable: !0,
		configurable: !1,
		get: function() {
			if (!a || a.length < 1) {
				if (this instanceof Wo) return;
				a = "FieldObject" + e.FieldNum++
			}
			var _ = function(j) {
				return j
			};
			return this.scope && (_ = this.scope.internal.getEncryptor(this.objId)), "(" + ci(_(a)) + ")"
		},
		set: function(_) {
			a = _.toString()
		}
	}), Object.defineProperty(this, "fieldName", {
		configurable: !0,
		enumerable: !0,
		get: function() {
			return a
		},
		set: function(_) {
			a = _
		}
	});
	var u = "helvetica";
	Object.defineProperty(this, "fontName", {
		enumerable: !0,
		configurable: !0,
		get: function() {
			return u
		},
		set: function(_) {
			u = _
		}
	});
	var c = "normal";
	Object.defineProperty(this, "fontStyle", {
		enumerable: !0,
		configurable: !0,
		get: function() {
			return c
		},
		set: function(_) {
			c = _
		}
	});
	var f = 0;
	Object.defineProperty(this, "fontSize", {
		enumerable: !0,
		configurable: !0,
		get: function() {
			return f
		},
		set: function(_) {
			f = _
		}
	});
	var p = void 0;
	Object.defineProperty(this, "maxFontSize", {
		enumerable: !0,
		configurable: !0,
		get: function() {
			return p === void 0 ? 50 / Fu : p
		},
		set: function(_) {
			p = _
		}
	});
	var v = "black";
	Object.defineProperty(this, "color", {
		enumerable: !0,
		configurable: !0,
		get: function() {
			return v
		},
		set: function(_) {
			v = _
		}
	});
	var m = "/F1 0 Tf 0 g";
	Object.defineProperty(this, "DA", {
		enumerable: !0,
		configurable: !1,
		get: function() {
			if (!(!m || this instanceof Wo || this instanceof li)) return Xs(m, this.objId, this.scope)
		},
		set: function(_) {
			_ = _.toString(), m = _
		}
	});
	var y = null;
	Object.defineProperty(this, "DV", {
		enumerable: !1,
		configurable: !1,
		get: function() {
			if (y) return this instanceof rn ? y : Xs(y, this.objId, this.scope)
		},
		set: function(_) {
			_ = _.toString(), y = this instanceof rn ? _ : _.substr(0, 1) === "(" ? Ti(_.substr(1, _.length - 2)) : Ti(_)
		}
	}), Object.defineProperty(this, "defaultValue", {
		enumerable: !0,
		configurable: !0,
		get: function() {
			return this instanceof rn ? Ti(y.substr(1, y.length - 1)) : y
		},
		set: function(_) {
			_ = _.toString(), y = this instanceof rn ? "/" + _ : _
		}
	});
	var d = null;
	Object.defineProperty(this, "_V", {
		enumerable: !1,
		configurable: !1,
		get: function() {
			if (d) return d
		},
		set: function(_) {
			this.V = _
		}
	}), Object.defineProperty(this, "V", {
		enumerable: !1,
		configurable: !1,
		get: function() {
			if (d) return this instanceof rn ? d : Xs(d, this.objId, this.scope)
		},
		set: function(_) {
			_ = _.toString(), d = this instanceof rn ? _ : _.substr(0, 1) === "(" ? Ti(_.substr(1, _.length - 2)) : Ti(_)
		}
	}), Object.defineProperty(this, "value", {
		enumerable: !0,
		configurable: !0,
		get: function() {
			return this instanceof rn ? Ti(d.substr(1, d.length - 1)) : d
		},
		set: function(_) {
			_ = _.toString(), d = this instanceof rn ? "/" + _ : _
		}
	}), Object.defineProperty(this, "hasAnnotation", {
		enumerable: !0,
		configurable: !0,
		get: function() {
			return this.Rect
		}
	}), Object.defineProperty(this, "Type", {
		enumerable: !0,
		configurable: !1,
		get: function() {
			return this.hasAnnotation ? "/Annot" : null
		}
	}), Object.defineProperty(this, "Subtype", {
		enumerable: !0,
		configurable: !1,
		get: function() {
			return this.hasAnnotation ? "/Widget" : null
		}
	});
	var I, A = !1;
	Object.defineProperty(this, "hasAppearanceStream", {
		enumerable: !0,
		configurable: !0,
		get: function() {
			return A
		},
		set: function(_) {
			_ = !!_, A = _
		}
	}), Object.defineProperty(this, "page", {
		enumerable: !0,
		configurable: !0,
		get: function() {
			if (I) return I
		},
		set: function(_) {
			I = _
		}
	}), Object.defineProperty(this, "readOnly", {
		enumerable: !0,
		configurable: !0,
		get: function() {
			return !!He(this.Ff, 1)
		},
		set: function(_) {
			_ ? this.Ff = We(this.Ff, 1) : this.Ff = Ve(this.Ff, 1)
		}
	}), Object.defineProperty(this, "required", {
		enumerable: !0,
		configurable: !0,
		get: function() {
			return !!He(this.Ff, 2)
		},
		set: function(_) {
			_ ? this.Ff = We(this.Ff, 2) : this.Ff = Ve(this.Ff, 2)
		}
	}), Object.defineProperty(this, "noExport", {
		enumerable: !0,
		configurable: !0,
		get: function() {
			return !!He(this.Ff, 3)
		},
		set: function(_) {
			_ ? this.Ff = We(this.Ff, 3) : this.Ff = Ve(this.Ff, 3)
		}
	});
	var F = null;
	Object.defineProperty(this, "Q", {
		enumerable: !0,
		configurable: !1,
		get: function() {
			if (F !== null) return F
		},
		set: function(_) {
			if ([0, 1, 2].indexOf(_) === -1) throw new Error('Invalid value "' + _ + '" for attribute Q supplied.');
			F = _
		}
	}), Object.defineProperty(this, "textAlign", {
		get: function() {
			var _;
			switch (F) {
				case 0:
				default:
					_ = "left";
					break;
				case 1:
					_ = "center";
					break;
				case 2:
					_ = "right"
			}
			return _
		},
		configurable: !0,
		enumerable: !0,
		set: function(_) {
			switch (_) {
				case "right":
				case 2:
					F = 2;
					break;
				case "center":
				case 1:
					F = 1;
					break;
				case "left":
				case 0:
				default:
					F = 0
			}
		}
	})
};
_n(ir, dr);
var Vi = function() {
	ir.call(this), this.FT = "/Ch", this.V = "()", this.fontName = "zapfdingbats";
	var e = 0;
	Object.defineProperty(this, "TI", {
		enumerable: !0,
		configurable: !1,
		get: function() {
			return e
		},
		set: function(n) {
			e = n
		}
	}), Object.defineProperty(this, "topIndex", {
		enumerable: !0,
		configurable: !0,
		get: function() {
			return e
		},
		set: function(n) {
			e = n
		}
	});
	var t = [];
	Object.defineProperty(this, "Opt", {
		enumerable: !0,
		configurable: !1,
		get: function() {
			return wc(t, this.objId, this.scope)
		},
		set: function(n) {
			var i, o;
			o = [], typeof(i = n) == "string" && (o = function(a, u, c) {
				c || (c = 1);
				for (var f, p = []; f = u.exec(a);) p.push(f[c]);
				return p
			}(i, /\((.*?)\)/g)), t = o
		}
	}), this.getOptions = function() {
		return t
	}, this.setOptions = function(n) {
		t = n, this.sort && t.sort()
	}, this.addOption = function(n) {
		n = (n = n || "").toString(), t.push(n), this.sort && t.sort()
	}, this.removeOption = function(n, i) {
		for (i = i || !1, n = (n = n || "").toString(); t.indexOf(n) !== -1 && (t.splice(t.indexOf(n), 1), i !== !1););
	}, Object.defineProperty(this, "combo", {
		enumerable: !0,
		configurable: !0,
		get: function() {
			return !!He(this.Ff, 18)
		},
		set: function(n) {
			n ? this.Ff = We(this.Ff, 18) : this.Ff = Ve(this.Ff, 18)
		}
	}), Object.defineProperty(this, "edit", {
		enumerable: !0,
		configurable: !0,
		get: function() {
			return !!He(this.Ff, 19)
		},
		set: function(n) {
			this.combo === !0 && (n ? this.Ff = We(this.Ff, 19) : this.Ff = Ve(this.Ff, 19))
		}
	}), Object.defineProperty(this, "sort", {
		enumerable: !0,
		configurable: !0,
		get: function() {
			return !!He(this.Ff, 20)
		},
		set: function(n) {
			n ? (this.Ff = We(this.Ff, 20), t.sort()) : this.Ff = Ve(this.Ff, 20)
		}
	}), Object.defineProperty(this, "multiSelect", {
		enumerable: !0,
		configurable: !0,
		get: function() {
			return !!He(this.Ff, 22)
		},
		set: function(n) {
			n ? this.Ff = We(this.Ff, 22) : this.Ff = Ve(this.Ff, 22)
		}
	}), Object.defineProperty(this, "doNotSpellCheck", {
		enumerable: !0,
		configurable: !0,
		get: function() {
			return !!He(this.Ff, 23)
		},
		set: function(n) {
			n ? this.Ff = We(this.Ff, 23) : this.Ff = Ve(this.Ff, 23)
		}
	}), Object.defineProperty(this, "commitOnSelChange", {
		enumerable: !0,
		configurable: !0,
		get: function() {
			return !!He(this.Ff, 27)
		},
		set: function(n) {
			n ? this.Ff = We(this.Ff, 27) : this.Ff = Ve(this.Ff, 27)
		}
	}), this.hasAppearanceStream = !1
};
_n(Vi, ir);
var Gi = function() {
	Vi.call(this), this.fontName = "helvetica", this.combo = !1
};
_n(Gi, Vi);
var Yi = function() {
	Gi.call(this), this.combo = !0
};
_n(Yi, Gi);
var Oo = function() {
	Yi.call(this), this.edit = !0
};
_n(Oo, Yi);
var rn = function() {
	ir.call(this), this.FT = "/Btn", Object.defineProperty(this, "noToggleToOff", {
		enumerable: !0,
		configurable: !0,
		get: function() {
			return !!He(this.Ff, 15)
		},
		set: function(n) {
			n ? this.Ff = We(this.Ff, 15) : this.Ff = Ve(this.Ff, 15)
		}
	}), Object.defineProperty(this, "radio", {
		enumerable: !0,
		configurable: !0,
		get: function() {
			return !!He(this.Ff, 16)
		},
		set: function(n) {
			n ? this.Ff = We(this.Ff, 16) : this.Ff = Ve(this.Ff, 16)
		}
	}), Object.defineProperty(this, "pushButton", {
		enumerable: !0,
		configurable: !0,
		get: function() {
			return !!He(this.Ff, 17)
		},
		set: function(n) {
			n ? this.Ff = We(this.Ff, 17) : this.Ff = Ve(this.Ff, 17)
		}
	}), Object.defineProperty(this, "radioIsUnison", {
		enumerable: !0,
		configurable: !0,
		get: function() {
			return !!He(this.Ff, 26)
		},
		set: function(n) {
			n ? this.Ff = We(this.Ff, 26) : this.Ff = Ve(this.Ff, 26)
		}
	});
	var e, t = {};
	Object.defineProperty(this, "MK", {
		enumerable: !1,
		configurable: !1,
		get: function() {
			var n = function(a) {
				return a
			};
			if (this.scope && (n = this.scope.internal.getEncryptor(this.objId)), Object.keys(t).length !== 0) {
				var i, o = [];
				for (i in o.push("<<"), t) o.push("/" + i + " (" + ci(n(t[i])) + ")");
				return o.push(">>"), o.join(`
`)
			}
		},
		set: function(n) {
			be(n) === "object" && (t = n)
		}
	}), Object.defineProperty(this, "caption", {
		enumerable: !0,
		configurable: !0,
		get: function() {
			return t.CA || ""
		},
		set: function(n) {
			typeof n == "string" && (t.CA = n)
		}
	}), Object.defineProperty(this, "AS", {
		enumerable: !1,
		configurable: !1,
		get: function() {
			return e
		},
		set: function(n) {
			e = n
		}
	}), Object.defineProperty(this, "appearanceState", {
		enumerable: !0,
		configurable: !0,
		get: function() {
			return e.substr(1, e.length - 1)
		},
		set: function(n) {
			e = "/" + n
		}
	})
};
_n(rn, ir);
var Ro = function() {
	rn.call(this), this.pushButton = !0
};
_n(Ro, rn);
var Ji = function() {
	rn.call(this), this.radio = !0, this.pushButton = !1;
	var e = [];
	Object.defineProperty(this, "Kids", {
		enumerable: !0,
		configurable: !1,
		get: function() {
			return e
		},
		set: function(t) {
			e = t !== void 0 ? t : []
		}
	})
};
_n(Ji, rn);
var Wo = function() {
	var e, t;
	ir.call(this), Object.defineProperty(this, "Parent", {
		enumerable: !1,
		configurable: !1,
		get: function() {
			return e
		},
		set: function(o) {
			e = o
		}
	}), Object.defineProperty(this, "optionName", {
		enumerable: !1,
		configurable: !0,
		get: function() {
			return t
		},
		set: function(o) {
			t = o
		}
	});
	var n, i = {};
	Object.defineProperty(this, "MK", {
		enumerable: !1,
		configurable: !1,
		get: function() {
			var o = function(c) {
				return c
			};
			this.scope && (o = this.scope.internal.getEncryptor(this.objId));
			var a, u = [];
			for (a in u.push("<<"), i) u.push("/" + a + " (" + ci(o(i[a])) + ")");
			return u.push(">>"), u.join(`
`)
		},
		set: function(o) {
			be(o) === "object" && (i = o)
		}
	}), Object.defineProperty(this, "caption", {
		enumerable: !0,
		configurable: !0,
		get: function() {
			return i.CA || ""
		},
		set: function(o) {
			typeof o == "string" && (i.CA = o)
		}
	}), Object.defineProperty(this, "AS", {
		enumerable: !1,
		configurable: !1,
		get: function() {
			return n
		},
		set: function(o) {
			n = o
		}
	}), Object.defineProperty(this, "appearanceState", {
		enumerable: !0,
		configurable: !0,
		get: function() {
			return n.substr(1, n.length - 1)
		},
		set: function(o) {
			n = "/" + o
		}
	}), this.caption = "l", this.appearanceState = "Off", this._AppearanceType = Rt.RadioButton.Circle, this.appearanceStreamContent = this._AppearanceType.createAppearanceStream(this.optionName)
};
_n(Wo, ir), Ji.prototype.setAppearance = function(e) {
	if (!("createAppearanceStream" in e) || !("getCA" in e)) throw new Error("Couldn't assign Appearance to RadioButton. Appearance was Invalid!");
	for (var t in this.Kids)
		if (this.Kids.hasOwnProperty(t)) {
			var n = this.Kids[t];
			n.appearanceStreamContent = e.createAppearanceStream(n.optionName), n.caption = e.getCA()
		}
}, Ji.prototype.createOption = function(e) {
	var t = new Wo;
	return t.Parent = this, t.optionName = e, this.Kids.push(t), Y2.call(this.scope, t), t
};
var Bo = function() {
	rn.call(this), this.fontName = "zapfdingbats", this.caption = "3", this.appearanceState = "On", this.value = "On", this.textAlign = "center", this.appearanceStreamContent = Rt.CheckBox.createAppearanceStream()
};
_n(Bo, rn);
var li = function() {
	ir.call(this), this.FT = "/Tx", Object.defineProperty(this, "multiline", {
		enumerable: !0,
		configurable: !0,
		get: function() {
			return !!He(this.Ff, 13)
		},
		set: function(t) {
			t ? this.Ff = We(this.Ff, 13) : this.Ff = Ve(this.Ff, 13)
		}
	}), Object.defineProperty(this, "fileSelect", {
		enumerable: !0,
		configurable: !0,
		get: function() {
			return !!He(this.Ff, 21)
		},
		set: function(t) {
			t ? this.Ff = We(this.Ff, 21) : this.Ff = Ve(this.Ff, 21)
		}
	}), Object.defineProperty(this, "doNotSpellCheck", {
		enumerable: !0,
		configurable: !0,
		get: function() {
			return !!He(this.Ff, 23)
		},
		set: function(t) {
			t ? this.Ff = We(this.Ff, 23) : this.Ff = Ve(this.Ff, 23)
		}
	}), Object.defineProperty(this, "doNotScroll", {
		enumerable: !0,
		configurable: !0,
		get: function() {
			return !!He(this.Ff, 24)
		},
		set: function(t) {
			t ? this.Ff = We(this.Ff, 24) : this.Ff = Ve(this.Ff, 24)
		}
	}), Object.defineProperty(this, "comb", {
		enumerable: !0,
		configurable: !0,
		get: function() {
			return !!He(this.Ff, 25)
		},
		set: function(t) {
			t ? this.Ff = We(this.Ff, 25) : this.Ff = Ve(this.Ff, 25)
		}
	}), Object.defineProperty(this, "richText", {
		enumerable: !0,
		configurable: !0,
		get: function() {
			return !!He(this.Ff, 26)
		},
		set: function(t) {
			t ? this.Ff = We(this.Ff, 26) : this.Ff = Ve(this.Ff, 26)
		}
	});
	var e = null;
	Object.defineProperty(this, "MaxLen", {
		enumerable: !0,
		configurable: !1,
		get: function() {
			return e
		},
		set: function(t) {
			e = t
		}
	}), Object.defineProperty(this, "maxLength", {
		enumerable: !0,
		configurable: !0,
		get: function() {
			return e
		},
		set: function(t) {
			Number.isInteger(t) && (e = t)
		}
	}), Object.defineProperty(this, "hasAppearanceStream", {
		enumerable: !0,
		configurable: !0,
		get: function() {
			return this.V || this.DV
		}
	})
};
_n(li, ir);
var To = function() {
	li.call(this), Object.defineProperty(this, "password", {
		enumerable: !0,
		configurable: !0,
		get: function() {
			return !!He(this.Ff, 14)
		},
		set: function(e) {
			e ? this.Ff = We(this.Ff, 14) : this.Ff = Ve(this.Ff, 14)
		}
	}), this.password = !0
};
_n(To, li);
var Rt = {
	CheckBox: {
		createAppearanceStream: function() {
			return {
				N: {
					On: Rt.CheckBox.YesNormal
				},
				D: {
					On: Rt.CheckBox.YesPushDown,
					Off: Rt.CheckBox.OffPushDown
				}
			}
		},
		YesPushDown: function(e) {
			var t = hr(e);
			t.scope = e.scope;
			var n = [],
				i = e.scope.internal.getFont(e.fontName, e.fontStyle).id,
				o = e.scope.__private__.encodeColorString(e.color),
				a = du(e, e.caption);
			return n.push("0.749023 g"), n.push("0 0 " + Zt(Rt.internal.getWidth(e)) + " " + Zt(Rt.internal.getHeight(e)) + " re"), n.push("f"), n.push("BMC"), n.push("q"), n.push("0 0 1 rg"), n.push("/" + i + " " + Zt(a.fontSize) + " Tf " + o), n.push("BT"), n.push(a.text), n.push("ET"), n.push("Q"), n.push("EMC"), t.stream = n.join(`
`), t
		},
		YesNormal: function(e) {
			var t = hr(e);
			t.scope = e.scope;
			var n = e.scope.internal.getFont(e.fontName, e.fontStyle).id,
				i = e.scope.__private__.encodeColorString(e.color),
				o = [],
				a = Rt.internal.getHeight(e),
				u = Rt.internal.getWidth(e),
				c = du(e, e.caption);
			return o.push("1 g"), o.push("0 0 " + Zt(u) + " " + Zt(a) + " re"), o.push("f"), o.push("q"), o.push("0 0 1 rg"), o.push("0 0 " + Zt(u - 1) + " " + Zt(a - 1) + " re"), o.push("W"), o.push("n"), o.push("0 g"), o.push("BT"), o.push("/" + n + " " + Zt(c.fontSize) + " Tf " + i), o.push(c.text), o.push("ET"), o.push("Q"), t.stream = o.join(`
`), t
		},
		OffPushDown: function(e) {
			var t = hr(e);
			t.scope = e.scope;
			var n = [];
			return n.push("0.749023 g"), n.push("0 0 " + Zt(Rt.internal.getWidth(e)) + " " + Zt(Rt.internal.getHeight(e)) + " re"), n.push("f"), t.stream = n.join(`
`), t
		}
	},
	RadioButton: {
		Circle: {
			createAppearanceStream: function(e) {
				var t = {
					D: {
						Off: Rt.RadioButton.Circle.OffPushDown
					},
					N: {}
				};
				return t.N[e] = Rt.RadioButton.Circle.YesNormal, t.D[e] = Rt.RadioButton.Circle.YesPushDown, t
			},
			getCA: function() {
				return "l"
			},
			YesNormal: function(e) {
				var t = hr(e);
				t.scope = e.scope;
				var n = [],
					i = Rt.internal.getWidth(e) <= Rt.internal.getHeight(e) ? Rt.internal.getWidth(e) / 4 : Rt.internal.getHeight(e) / 4;
				i = Number((.9 * i).toFixed(5));
				var o = Rt.internal.Bezier_C,
					a = Number((i * o).toFixed(5));
				return n.push("q"), n.push("1 0 0 1 " + Hr(Rt.internal.getWidth(e) / 2) + " " + Hr(Rt.internal.getHeight(e) / 2) + " cm"), n.push(i + " 0 m"), n.push(i + " " + a + " " + a + " " + i + " 0 " + i + " c"), n.push("-" + a + " " + i + " -" + i + " " + a + " -" + i + " 0 c"), n.push("-" + i + " -" + a + " -" + a + " -" + i + " 0 -" + i + " c"), n.push(a + " -" + i + " " + i + " -" + a + " " + i + " 0 c"), n.push("f"), n.push("Q"), t.stream = n.join(`
`), t
			},
			YesPushDown: function(e) {
				var t = hr(e);
				t.scope = e.scope;
				var n = [],
					i = Rt.internal.getWidth(e) <= Rt.internal.getHeight(e) ? Rt.internal.getWidth(e) / 4 : Rt.internal.getHeight(e) / 4;
				i = Number((.9 * i).toFixed(5));
				var o = Number((2 * i).toFixed(5)),
					a = Number((o * Rt.internal.Bezier_C).toFixed(5)),
					u = Number((i * Rt.internal.Bezier_C).toFixed(5));
				return n.push("0.749023 g"), n.push("q"), n.push("1 0 0 1 " + Hr(Rt.internal.getWidth(e) / 2) + " " + Hr(Rt.internal.getHeight(e) / 2) + " cm"), n.push(o + " 0 m"), n.push(o + " " + a + " " + a + " " + o + " 0 " + o + " c"), n.push("-" + a + " " + o + " -" + o + " " + a + " -" + o + " 0 c"), n.push("-" + o + " -" + a + " -" + a + " -" + o + " 0 -" + o + " c"), n.push(a + " -" + o + " " + o + " -" + a + " " + o + " 0 c"), n.push("f"), n.push("Q"), n.push("0 g"), n.push("q"), n.push("1 0 0 1 " + Hr(Rt.internal.getWidth(e) / 2) + " " + Hr(Rt.internal.getHeight(e) / 2) + " cm"), n.push(i + " 0 m"), n.push(i + " " + u + " " + u + " " + i + " 0 " + i + " c"), n.push("-" + u + " " + i + " -" + i + " " + u + " -" + i + " 0 c"), n.push("-" + i + " -" + u + " -" + u + " -" + i + " 0 -" + i + " c"), n.push(u + " -" + i + " " + i + " -" + u + " " + i + " 0 c"), n.push("f"), n.push("Q"), t.stream = n.join(`
`), t
			},
			OffPushDown: function(e) {
				var t = hr(e);
				t.scope = e.scope;
				var n = [],
					i = Rt.internal.getWidth(e) <= Rt.internal.getHeight(e) ? Rt.internal.getWidth(e) / 4 : Rt.internal.getHeight(e) / 4;
				i = Number((.9 * i).toFixed(5));
				var o = Number((2 * i).toFixed(5)),
					a = Number((o * Rt.internal.Bezier_C).toFixed(5));
				return n.push("0.749023 g"), n.push("q"), n.push("1 0 0 1 " + Hr(Rt.internal.getWidth(e) / 2) + " " + Hr(Rt.internal.getHeight(e) / 2) + " cm"), n.push(o + " 0 m"), n.push(o + " " + a + " " + a + " " + o + " 0 " + o + " c"), n.push("-" + a + " " + o + " -" + o + " " + a + " -" + o + " 0 c"), n.push("-" + o + " -" + a + " -" + a + " -" + o + " 0 -" + o + " c"), n.push(a + " -" + o + " " + o + " -" + a + " " + o + " 0 c"), n.push("f"), n.push("Q"), t.stream = n.join(`
`), t
			}
		},
		Cross: {
			createAppearanceStream: function(e) {
				var t = {
					D: {
						Off: Rt.RadioButton.Cross.OffPushDown
					},
					N: {}
				};
				return t.N[e] = Rt.RadioButton.Cross.YesNormal, t.D[e] = Rt.RadioButton.Cross.YesPushDown, t
			},
			getCA: function() {
				return "8"
			},
			YesNormal: function(e) {
				var t = hr(e);
				t.scope = e.scope;
				var n = [],
					i = Rt.internal.calculateCross(e);
				return n.push("q"), n.push("1 1 " + Zt(Rt.internal.getWidth(e) - 2) + " " + Zt(Rt.internal.getHeight(e) - 2) + " re"), n.push("W"), n.push("n"), n.push(Zt(i.x1.x) + " " + Zt(i.x1.y) + " m"), n.push(Zt(i.x2.x) + " " + Zt(i.x2.y) + " l"), n.push(Zt(i.x4.x) + " " + Zt(i.x4.y) + " m"), n.push(Zt(i.x3.x) + " " + Zt(i.x3.y) + " l"), n.push("s"), n.push("Q"), t.stream = n.join(`
`), t
			},
			YesPushDown: function(e) {
				var t = hr(e);
				t.scope = e.scope;
				var n = Rt.internal.calculateCross(e),
					i = [];
				return i.push("0.749023 g"), i.push("0 0 " + Zt(Rt.internal.getWidth(e)) + " " + Zt(Rt.internal.getHeight(e)) + " re"), i.push("f"), i.push("q"), i.push("1 1 " + Zt(Rt.internal.getWidth(e) - 2) + " " + Zt(Rt.internal.getHeight(e) - 2) + " re"), i.push("W"), i.push("n"), i.push(Zt(n.x1.x) + " " + Zt(n.x1.y) + " m"), i.push(Zt(n.x2.x) + " " + Zt(n.x2.y) + " l"), i.push(Zt(n.x4.x) + " " + Zt(n.x4.y) + " m"), i.push(Zt(n.x3.x) + " " + Zt(n.x3.y) + " l"), i.push("s"), i.push("Q"), t.stream = i.join(`
`), t
			},
			OffPushDown: function(e) {
				var t = hr(e);
				t.scope = e.scope;
				var n = [];
				return n.push("0.749023 g"), n.push("0 0 " + Zt(Rt.internal.getWidth(e)) + " " + Zt(Rt.internal.getHeight(e)) + " re"), n.push("f"), t.stream = n.join(`
`), t
			}
		}
	},
	createDefaultAppearanceStream: function(e) {
		var t = e.scope.internal.getFont(e.fontName, e.fontStyle).id,
			n = e.scope.__private__.encodeColorString(e.color);
		return "/" + t + " " + e.fontSize + " Tf " + n
	}
};
Rt.internal = {
	Bezier_C: .551915024494,
	calculateCross: function(e) {
		var t = Rt.internal.getWidth(e),
			n = Rt.internal.getHeight(e),
			i = Math.min(t, n);
		return {
			x1: {
				x: (t - i) / 2,
				y: (n - i) / 2 + i
			},
			x2: {
				x: (t - i) / 2 + i,
				y: (n - i) / 2
			},
			x3: {
				x: (t - i) / 2,
				y: (n - i) / 2
			},
			x4: {
				x: (t - i) / 2 + i,
				y: (n - i) / 2 + i
			}
		}
	}
}, Rt.internal.getWidth = function(e) {
	var t = 0;
	return be(e) === "object" && (t = Pl(e.Rect[2])), t
}, Rt.internal.getHeight = function(e) {
	var t = 0;
	return be(e) === "object" && (t = Pl(e.Rect[3])), t
};
var Y2 = Oe.addField = function(e) {
	if (G2(this, e), !(e instanceof ir)) throw new Error("Invalid argument passed to jsPDF.addField.");
	var t;
	return (t = e).scope.internal.acroformPlugin.printedOut && (t.scope.internal.acroformPlugin.printedOut = !1, t.scope.internal.acroformPlugin.acroFormDictionaryRoot = null), t.scope.internal.acroformPlugin.acroFormDictionaryRoot.Fields.push(t), e.page = e.scope.internal.getCurrentPageInfo().pageNumber, this
};
Oe.AcroFormChoiceField = Vi, Oe.AcroFormListBox = Gi, Oe.AcroFormComboBox = Yi, Oe.AcroFormEditBox = Oo, Oe.AcroFormButton = rn, Oe.AcroFormPushButton = Ro, Oe.AcroFormRadioButton = Ji, Oe.AcroFormCheckBox = Bo, Oe.AcroFormTextField = li, Oe.AcroFormPasswordField = To, Oe.AcroFormAppearance = Rt, Oe.AcroForm = {
	ChoiceField: Vi,
	ListBox: Gi,
	ComboBox: Yi,
	EditBox: Oo,
	Button: rn,
	PushButton: Ro,
	RadioButton: Ji,
	CheckBox: Bo,
	TextField: li,
	PasswordField: To,
	Appearance: Rt
}, Gt.AcroForm = {
	ChoiceField: Vi,
	ListBox: Gi,
	ComboBox: Yi,
	EditBox: Oo,
	Button: rn,
	PushButton: Ro,
	RadioButton: Ji,
	CheckBox: Bo,
	TextField: li,
	PasswordField: To,
	Appearance: Rt
};
Gt.AcroForm;

function Nc(e) {
	return e.reduce(function(t, n, i) {
		return t[n] = i, t
	}, {})
}(function(e) {
	e.__addimage__ = {};
	var t = "UNKNOWN",
		n = {
			PNG: [
				[137, 80, 78, 71]
			],
			TIFF: [
				[77, 77, 0, 42],
				[73, 73, 42, 0]
			],
			JPEG: [
				[255, 216, 255, 224, void 0, void 0, 74, 70, 73, 70, 0],
				[255, 216, 255, 225, void 0, void 0, 69, 120, 105, 102, 0, 0],
				[255, 216, 255, 219],
				[255, 216, 255, 238]
			],
			JPEG2000: [
				[0, 0, 0, 12, 106, 80, 32, 32]
			],
			GIF87a: [
				[71, 73, 70, 56, 55, 97]
			],
			GIF89a: [
				[71, 73, 70, 56, 57, 97]
			],
			WEBP: [
				[82, 73, 70, 70, void 0, void 0, void 0, void 0, 87, 69, 66, 80]
			],
			BMP: [
				[66, 77],
				[66, 65],
				[67, 73],
				[67, 80],
				[73, 67],
				[80, 84]
			]
		},
		i = e.__addimage__.getImageFileTypeByImageData = function(P, C) {
			var q, T, ct, st, ht, Q = t;
			if ((C = C || t) === "RGBA" || P.data !== void 0 && P.data instanceof Uint8ClampedArray && "height" in P && "width" in P) return "RGBA";
			if (lt(P))
				for (ht in n)
					for (ct = n[ht], q = 0; q < ct.length; q += 1) {
						for (st = !0, T = 0; T < ct[q].length; T += 1)
							if (ct[q][T] !== void 0 && ct[q][T] !== P[T]) {
								st = !1;
								break
							} if (st === !0) {
							Q = ht;
							break
						}
					} else
						for (ht in n)
							for (ct = n[ht], q = 0; q < ct.length; q += 1) {
								for (st = !0, T = 0; T < ct[q].length; T += 1)
									if (ct[q][T] !== void 0 && ct[q][T] !== P.charCodeAt(T)) {
										st = !1;
										break
									} if (st === !0) {
									Q = ht;
									break
								}
							}
			return Q === t && C !== t && (Q = C), Q
		},
		o = function P(C) {
			for (var q = this.internal.write, T = this.internal.putStream, ct = (0, this.internal.getFilters)(); ct.indexOf("FlateEncode") !== -1;) ct.splice(ct.indexOf("FlateEncode"), 1);
			C.objectId = this.internal.newObject();
			var st = [];
			if (st.push({
					key: "Type",
					value: "/XObject"
				}), st.push({
					key: "Subtype",
					value: "/Image"
				}), st.push({
					key: "Width",
					value: C.width
				}), st.push({
					key: "Height",
					value: C.height
				}), C.colorSpace === F.INDEXED ? st.push({
					key: "ColorSpace",
					value: "[/Indexed /DeviceRGB " + (C.palette.length / 3 - 1) + " " + ("sMask" in C && C.sMask !== void 0 ? C.objectId + 2 : C.objectId + 1) + " 0 R]"
				}) : (st.push({
					key: "ColorSpace",
					value: "/" + C.colorSpace
				}), C.colorSpace === F.DEVICE_CMYK && st.push({
					key: "Decode",
					value: "[1 0 1 0 1 0 1 0]"
				})), st.push({
					key: "BitsPerComponent",
					value: C.bitsPerComponent
				}), "decodeParameters" in C && C.decodeParameters !== void 0 && st.push({
					key: "DecodeParms",
					value: "<<" + C.decodeParameters + ">>"
				}), "transparency" in C && Array.isArray(C.transparency)) {
				for (var ht = "", Q = 0, dt = C.transparency.length; Q < dt; Q++) ht += C.transparency[Q] + " " + C.transparency[Q] + " ";
				st.push({
					key: "Mask",
					value: "[" + ht + "]"
				})
			}
			C.sMask !== void 0 && st.push({
				key: "SMask",
				value: C.objectId + 1 + " 0 R"
			});
			var ut = C.filter !== void 0 ? ["/" + C.filter] : void 0;
			if (T({
					data: C.data,
					additionalKeyValues: st,
					alreadyAppliedFilters: ut,
					objectId: C.objectId
				}), q("endobj"), "sMask" in C && C.sMask !== void 0) {
				var _t = "/Predictor " + C.predictor + " /Colors 1 /BitsPerComponent " + C.bitsPerComponent + " /Columns " + C.width,
					L = {
						width: C.width,
						height: C.height,
						colorSpace: "DeviceGray",
						bitsPerComponent: C.bitsPerComponent,
						decodeParameters: _t,
						data: C.sMask
					};
				"filter" in C && (L.filter = C.filter), P.call(this, L)
			}
			if (C.colorSpace === F.INDEXED) {
				var M = this.internal.newObject();
				T({
					data: R(new Uint8Array(C.palette)),
					objectId: M
				}), q("endobj")
			}
		},
		a = function() {
			var P = this.internal.collections.addImage_images;
			for (var C in P) o.call(this, P[C])
		},
		u = function() {
			var P, C = this.internal.collections.addImage_images,
				q = this.internal.write;
			for (var T in C) q("/I" + (P = C[T]).index, P.objectId, "0", "R")
		},
		c = function() {
			this.internal.collections.addImage_images || (this.internal.collections.addImage_images = {}, this.internal.events.subscribe("putResources", a), this.internal.events.subscribe("putXobjectDict", u))
		},
		f = function() {
			var P = this.internal.collections.addImage_images;
			return c.call(this), P
		},
		p = function() {
			return Object.keys(this.internal.collections.addImage_images).length
		},
		v = function(P) {
			return typeof e["process" + P.toUpperCase()] == "function"
		},
		m = function(P) {
			return be(P) === "object" && P.nodeType === 1
		},
		y = function(P, C) {
			if (P.nodeName === "IMG" && P.hasAttribute("src")) {
				var q = "" + P.getAttribute("src");
				if (q.indexOf("data:image/") === 0) return Ea(unescape(q).split("base64,").pop());
				var T = e.loadFile(q, !0);
				if (T !== void 0) return T
			}
			if (P.nodeName === "CANVAS") {
				if (P.width === 0 || P.height === 0) throw new Error("Given canvas must have data. Canvas width: " + P.width + ", height: " + P.height);
				var ct;
				switch (C) {
					case "PNG":
						ct = "image/png";
						break;
					case "WEBP":
						ct = "image/webp";
						break;
					case "JPEG":
					case "JPG":
					default:
						ct = "image/jpeg"
				}
				return Ea(P.toDataURL(ct, 1).split("base64,").pop())
			}
		},
		d = function(P) {
			var C = this.internal.collections.addImage_images;
			if (C) {
				for (var q in C)
					if (P === C[q].alias) return C[q]
			}
		},
		I = function(P, C, q) {
			return P || C || (P = -96, C = -96), P < 0 && (P = -1 * q.width * 72 / P / this.internal.scaleFactor), C < 0 && (C = -1 * q.height * 72 / C / this.internal.scaleFactor), P === 0 && (P = C * q.width / q.height), C === 0 && (C = P * q.height / q.width), [P, C]
		},
		A = function(P, C, q, T, ct, st) {
			var ht = I.call(this, q, T, ct),
				Q = this.internal.getCoordinateString,
				dt = this.internal.getVerticalCoordinateString,
				ut = f.call(this);
			if (q = ht[0], T = ht[1], ut[ct.index] = ct, st) {
				st *= Math.PI / 180;
				var _t = Math.cos(st),
					L = Math.sin(st),
					M = function(U) {
						return U.toFixed(4)
					},
					O = [M(_t), M(L), M(-1 * L), M(_t), 0, 0, "cm"]
			}
			this.internal.write("q"), st ? (this.internal.write([1, "0", "0", 1, Q(P), dt(C + T), "cm"].join(" ")), this.internal.write(O.join(" ")), this.internal.write([Q(q), "0", "0", Q(T), "0", "0", "cm"].join(" "))) : this.internal.write([Q(q), "0", "0", Q(T), Q(P), dt(C + T), "cm"].join(" ")), this.isAdvancedAPI() && this.internal.write([1, 0, 0, -1, 0, 0, "cm"].join(" ")), this.internal.write("/I" + ct.index + " Do"), this.internal.write("Q")
		},
		F = e.color_spaces = {
			DEVICE_RGB: "DeviceRGB",
			DEVICE_GRAY: "DeviceGray",
			DEVICE_CMYK: "DeviceCMYK",
			CAL_GREY: "CalGray",
			CAL_RGB: "CalRGB",
			LAB: "Lab",
			ICC_BASED: "ICCBased",
			INDEXED: "Indexed",
			PATTERN: "Pattern",
			SEPARATION: "Separation",
			DEVICE_N: "DeviceN"
		};
	e.decode = {
		DCT_DECODE: "DCTDecode",
		FLATE_DECODE: "FlateDecode",
		LZW_DECODE: "LZWDecode",
		JPX_DECODE: "JPXDecode",
		JBIG2_DECODE: "JBIG2Decode",
		ASCII85_DECODE: "ASCII85Decode",
		ASCII_HEX_DECODE: "ASCIIHexDecode",
		RUN_LENGTH_DECODE: "RunLengthDecode",
		CCITT_FAX_DECODE: "CCITTFaxDecode"
	};
	var _ = e.image_compression = {
			NONE: "NONE",
			FAST: "FAST",
			MEDIUM: "MEDIUM",
			SLOW: "SLOW"
		},
		j = e.__addimage__.sHashCode = function(P) {
			var C, q, T = 0;
			if (typeof P == "string")
				for (q = P.length, C = 0; C < q; C++) T = (T << 5) - T + P.charCodeAt(C), T |= 0;
			else if (lt(P))
				for (q = P.byteLength / 2, C = 0; C < q; C++) T = (T << 5) - T + P[C], T |= 0;
			return T
		},
		z = e.__addimage__.validateStringAsBase64 = function(P) {
			(P = P || "").toString().trim();
			var C = !0;
			return P.length === 0 && (C = !1), P.length % 4 != 0 && (C = !1), /^[A-Za-z0-9+/]+$/.test(P.substr(0, P.length - 2)) === !1 && (C = !1), /^[A-Za-z0-9/][A-Za-z0-9+/]|[A-Za-z0-9+/]=|==$/.test(P.substr(-2)) === !1 && (C = !1), C
		},
		$ = e.__addimage__.extractImageFromDataUrl = function(P) {
			if (P == null || !(P = P.trim()).startsWith("data:")) return null;
			var C = P.indexOf(",");
			return C < 0 ? null : P.substring(0, C).trim().endsWith("base64") ? P.substring(C + 1) : null
		},
		rt = e.__addimage__.supportsArrayBuffer = function() {
			return typeof ArrayBuffer < "u" && typeof Uint8Array < "u"
		};
	e.__addimage__.isArrayBuffer = function(P) {
		return rt() && P instanceof ArrayBuffer
	};
	var lt = e.__addimage__.isArrayBufferView = function(P) {
			return rt() && typeof Uint32Array < "u" && (P instanceof Int8Array || P instanceof Uint8Array || typeof Uint8ClampedArray < "u" && P instanceof Uint8ClampedArray || P instanceof Int16Array || P instanceof Uint16Array || P instanceof Int32Array || P instanceof Uint32Array || P instanceof Float32Array || P instanceof Float64Array)
		},
		Y = e.__addimage__.binaryStringToUint8Array = function(P) {
			for (var C = P.length, q = new Uint8Array(C), T = 0; T < C; T++) q[T] = P.charCodeAt(T);
			return q
		},
		R = e.__addimage__.arrayBufferToBinaryString = function(P) {
			for (var C = "", q = lt(P) ? P : new Uint8Array(P), T = 0; T < q.length; T += 8192) C += String.fromCharCode.apply(null, q.subarray(T, T + 8192));
			return C
		};
	e.addImage = function() {
		var P, C, q, T, ct, st, ht, Q, dt;
		if (typeof arguments[1] == "number" ? (C = t, q = arguments[1], T = arguments[2], ct = arguments[3], st = arguments[4], ht = arguments[5], Q = arguments[6], dt = arguments[7]) : (C = arguments[1], q = arguments[2], T = arguments[3], ct = arguments[4], st = arguments[5], ht = arguments[6], Q = arguments[7], dt = arguments[8]), be(P = arguments[0]) === "object" && !m(P) && "imageData" in P) {
			var ut = P;
			P = ut.imageData, C = ut.format || C || t, q = ut.x || q || 0, T = ut.y || T || 0, ct = ut.w || ut.width || ct, st = ut.h || ut.height || st, ht = ut.alias || ht, Q = ut.compression || Q, dt = ut.rotation || ut.angle || dt
		}
		var _t = this.internal.getFilters();
		if (Q === void 0 && _t.indexOf("FlateEncode") !== -1 && (Q = "SLOW"), isNaN(q) || isNaN(T)) throw new Error("Invalid coordinates passed to jsPDF.addImage");
		c.call(this);
		var L = K.call(this, P, C, ht, Q);
		return A.call(this, q, T, ct, st, L, dt), this
	};
	var K = function(P, C, q, T) {
			var ct, st, ht;
			if (typeof P == "string" && i(P) === t) {
				P = unescape(P);
				var Q = ot(P, !1);
				(Q !== "" || (Q = e.loadFile(P, !0)) !== void 0) && (P = Q)
			}
			if (m(P) && (P = y(P, C)), C = i(P, C), !v(C)) throw new Error("addImage does not support files of type '" + C + "', please ensure that a plugin for '" + C + "' support is added.");
			if (((ht = q) == null || ht.length === 0) && (q = function(dt) {
					return typeof dt == "string" || lt(dt) ? j(dt) : lt(dt.data) ? j(dt.data) : null
				}(P)), (ct = d.call(this, q)) || (rt() && (P instanceof Uint8Array || C === "RGBA" || (st = P, P = Y(P))), ct = this["process" + C.toUpperCase()](P, p.call(this), q, function(dt) {
					return dt && typeof dt == "string" && (dt = dt.toUpperCase()), dt in e.image_compression ? dt : _.NONE
				}(T), st)), !ct) throw new Error("An unknown error occurred whilst processing the image.");
			return ct
		},
		ot = e.__addimage__.convertBase64ToBinaryString = function(P, C) {
			C = typeof C != "boolean" || C;
			var q, T = "";
			if (typeof P == "string") {
				var ct;
				q = (ct = $(P)) !== null && ct !== void 0 ? ct : P;
				try {
					T = Ea(q)
				} catch (st) {
					if (C) throw z(q) ? new Error("atob-Error in jsPDF.convertBase64ToBinaryString " + st.message) : new Error("Supplied Data is not a valid base64-String jsPDF.convertBase64ToBinaryString ")
				}
			}
			return T
		};
	e.getImageProperties = function(P) {
		var C, q, T = "";
		if (m(P) && (P = y(P)), typeof P == "string" && i(P) === t && ((T = ot(P, !1)) === "" && (T = e.loadFile(P) || ""), P = T), q = i(P), !v(q)) throw new Error("addImage does not support files of type '" + q + "', please ensure that a plugin for '" + q + "' support is added.");
		if (!rt() || P instanceof Uint8Array || (P = Y(P)), !(C = this["process" + q.toUpperCase()](P))) throw new Error("An unknown error occurred whilst processing the image");
		return C.fileType = q, C
	}
})(Gt.API),
function(e) {
	var t = function(n) {
		if (n !== void 0 && n != "") return !0
	};
	Gt.API.events.push(["addPage", function(n) {
		this.internal.getPageInfo(n.pageNumber).pageContext.annotations = []
	}]), e.events.push(["putPage", function(n) {
		for (var i, o, a, u = this.internal.getCoordinateString, c = this.internal.getVerticalCoordinateString, f = this.internal.getPageInfoByObjId(n.objId), p = n.pageContext.annotations, v = !1, m = 0; m < p.length && !v; m++) switch ((i = p[m]).type) {
			case "link":
				(t(i.options.url) || t(i.options.pageNumber)) && (v = !0);
				break;
			case "reference":
			case "text":
			case "freetext":
				v = !0
		}
		if (v != 0) {
			this.internal.write("/Annots [");
			for (var y = 0; y < p.length; y++) {
				i = p[y];
				var d = this.internal.pdfEscape,
					I = this.internal.getEncryptor(n.objId);
				switch (i.type) {
					case "reference":
						this.internal.write(" " + i.object.objId + " 0 R ");
						break;
					case "text":
						var A = this.internal.newAdditionalObject(),
							F = this.internal.newAdditionalObject(),
							_ = this.internal.getEncryptor(A.objId),
							j = i.title || "Note";
						a = "<</Type /Annot /Subtype /Text " + (o = "/Rect [" + u(i.bounds.x) + " " + c(i.bounds.y + i.bounds.h) + " " + u(i.bounds.x + i.bounds.w) + " " + c(i.bounds.y) + "] ") + "/Contents (" + d(_(i.contents)) + ")", a += " /Popup " + F.objId + " 0 R", a += " /P " + f.objId + " 0 R", a += " /T (" + d(_(j)) + ") >>", A.content = a;
						var z = A.objId + " 0 R";
						a = "<</Type /Annot /Subtype /Popup " + (o = "/Rect [" + u(i.bounds.x + 30) + " " + c(i.bounds.y + i.bounds.h) + " " + u(i.bounds.x + i.bounds.w + 30) + " " + c(i.bounds.y) + "] ") + " /Parent " + z, i.open && (a += " /Open true"), a += " >>", F.content = a, this.internal.write(A.objId, "0 R", F.objId, "0 R");
						break;
					case "freetext":
						o = "/Rect [" + u(i.bounds.x) + " " + c(i.bounds.y) + " " + u(i.bounds.x + i.bounds.w) + " " + c(i.bounds.y + i.bounds.h) + "] ";
						var $ = i.color || "#000000";
						a = "<</Type /Annot /Subtype /FreeText " + o + "/Contents (" + d(I(i.contents)) + ")", a += " /DS(font: Helvetica,sans-serif 12.0pt; text-align:left; color:#" + $ + ")", a += " /Border [0 0 0]", a += " >>", this.internal.write(a);
						break;
					case "link":
						if (i.options.name) {
							var rt = this.annotations._nameMap[i.options.name];
							i.options.pageNumber = rt.page, i.options.top = rt.y
						} else i.options.top || (i.options.top = 0);
						if (o = "/Rect [" + i.finalBounds.x + " " + i.finalBounds.y + " " + i.finalBounds.w + " " + i.finalBounds.h + "] ", a = "", i.options.url) a = "<</Type /Annot /Subtype /Link " + o + "/Border [0 0 0] /A <</S /URI /URI (" + d(I(i.options.url)) + ") >>";
						else if (i.options.pageNumber) switch (a = "<</Type /Annot /Subtype /Link " + o + "/Border [0 0 0] /Dest [" + this.internal.getPageInfo(i.options.pageNumber).objId + " 0 R", i.options.magFactor = i.options.magFactor || "XYZ", i.options.magFactor) {
							case "Fit":
								a += " /Fit]";
								break;
							case "FitH":
								a += " /FitH " + i.options.top + "]";
								break;
							case "FitV":
								i.options.left = i.options.left || 0, a += " /FitV " + i.options.left + "]";
								break;
							case "XYZ":
							default:
								var lt = c(i.options.top);
								i.options.left = i.options.left || 0, i.options.zoom === void 0 && (i.options.zoom = 0), a += " /XYZ " + i.options.left + " " + lt + " " + i.options.zoom + "]"
						}
						a != "" && (a += " >>", this.internal.write(a))
				}
			}
			this.internal.write("]")
		}
	}]), e.createAnnotation = function(n) {
		var i = this.internal.getCurrentPageInfo();
		switch (n.type) {
			case "link":
				this.link(n.bounds.x, n.bounds.y, n.bounds.w, n.bounds.h, n);
				break;
			case "text":
			case "freetext":
				i.pageContext.annotations.push(n)
		}
	}, e.link = function(n, i, o, a, u) {
		var c = this.internal.getCurrentPageInfo(),
			f = this.internal.getCoordinateString,
			p = this.internal.getVerticalCoordinateString;
		c.pageContext.annotations.push({
			finalBounds: {
				x: f(n),
				y: p(i),
				w: f(n + o),
				h: p(i + a)
			},
			options: u,
			type: "link"
		})
	}, e.textWithLink = function(n, i, o, a) {
		var u, c, f = this.getTextWidth(n),
			p = this.internal.getLineHeight() / this.internal.scaleFactor;
		if (a.maxWidth !== void 0) {
			c = a.maxWidth;
			var v = this.splitTextToSize(n, c).length;
			u = Math.ceil(p * v)
		} else c = f, u = p;
		return this.text(n, i, o, a), o += .2 * p, a.align === "center" && (i -= f / 2), a.align === "right" && (i -= f), this.link(i, o - p, c, u, a), f
	}, e.getTextWidth = function(n) {
		var i = this.internal.getFontSize();
		return this.getStringUnitWidth(n) * i / this.internal.scaleFactor
	}
}(Gt.API),
function(e) {
	var t = {
			1569: [65152],
			1570: [65153, 65154],
			1571: [65155, 65156],
			1572: [65157, 65158],
			1573: [65159, 65160],
			1574: [65161, 65162, 65163, 65164],
			1575: [65165, 65166],
			1576: [65167, 65168, 65169, 65170],
			1577: [65171, 65172],
			1578: [65173, 65174, 65175, 65176],
			1579: [65177, 65178, 65179, 65180],
			1580: [65181, 65182, 65183, 65184],
			1581: [65185, 65186, 65187, 65188],
			1582: [65189, 65190, 65191, 65192],
			1583: [65193, 65194],
			1584: [65195, 65196],
			1585: [65197, 65198],
			1586: [65199, 65200],
			1587: [65201, 65202, 65203, 65204],
			1588: [65205, 65206, 65207, 65208],
			1589: [65209, 65210, 65211, 65212],
			1590: [65213, 65214, 65215, 65216],
			1591: [65217, 65218, 65219, 65220],
			1592: [65221, 65222, 65223, 65224],
			1593: [65225, 65226, 65227, 65228],
			1594: [65229, 65230, 65231, 65232],
			1601: [65233, 65234, 65235, 65236],
			1602: [65237, 65238, 65239, 65240],
			1603: [65241, 65242, 65243, 65244],
			1604: [65245, 65246, 65247, 65248],
			1605: [65249, 65250, 65251, 65252],
			1606: [65253, 65254, 65255, 65256],
			1607: [65257, 65258, 65259, 65260],
			1608: [65261, 65262],
			1609: [65263, 65264, 64488, 64489],
			1610: [65265, 65266, 65267, 65268],
			1649: [64336, 64337],
			1655: [64477],
			1657: [64358, 64359, 64360, 64361],
			1658: [64350, 64351, 64352, 64353],
			1659: [64338, 64339, 64340, 64341],
			1662: [64342, 64343, 64344, 64345],
			1663: [64354, 64355, 64356, 64357],
			1664: [64346, 64347, 64348, 64349],
			1667: [64374, 64375, 64376, 64377],
			1668: [64370, 64371, 64372, 64373],
			1670: [64378, 64379, 64380, 64381],
			1671: [64382, 64383, 64384, 64385],
			1672: [64392, 64393],
			1676: [64388, 64389],
			1677: [64386, 64387],
			1678: [64390, 64391],
			1681: [64396, 64397],
			1688: [64394, 64395],
			1700: [64362, 64363, 64364, 64365],
			1702: [64366, 64367, 64368, 64369],
			1705: [64398, 64399, 64400, 64401],
			1709: [64467, 64468, 64469, 64470],
			1711: [64402, 64403, 64404, 64405],
			1713: [64410, 64411, 64412, 64413],
			1715: [64406, 64407, 64408, 64409],
			1722: [64414, 64415],
			1723: [64416, 64417, 64418, 64419],
			1726: [64426, 64427, 64428, 64429],
			1728: [64420, 64421],
			1729: [64422, 64423, 64424, 64425],
			1733: [64480, 64481],
			1734: [64473, 64474],
			1735: [64471, 64472],
			1736: [64475, 64476],
			1737: [64482, 64483],
			1739: [64478, 64479],
			1740: [64508, 64509, 64510, 64511],
			1744: [64484, 64485, 64486, 64487],
			1746: [64430, 64431],
			1747: [64432, 64433]
		},
		n = {
			65247: {
				65154: 65269,
				65156: 65271,
				65160: 65273,
				65166: 65275
			},
			65248: {
				65154: 65270,
				65156: 65272,
				65160: 65274,
				65166: 65276
			},
			65165: {
				65247: {
					65248: {
						65258: 65010
					}
				}
			},
			1617: {
				1612: 64606,
				1613: 64607,
				1614: 64608,
				1615: 64609,
				1616: 64610
			}
		},
		i = {
			1612: 64606,
			1613: 64607,
			1614: 64608,
			1615: 64609,
			1616: 64610
		},
		o = [1570, 1571, 1573, 1575];
	e.__arabicParser__ = {};
	var a = e.__arabicParser__.isInArabicSubstitutionA = function(A) {
			return t[A.charCodeAt(0)] !== void 0
		},
		u = e.__arabicParser__.isArabicLetter = function(A) {
			return typeof A == "string" && /^[\u0600-\u06FF\u0750-\u077F\u08A0-\u08FF\uFB50-\uFDFF\uFE70-\uFEFF]+$/.test(A)
		},
		c = e.__arabicParser__.isArabicEndLetter = function(A) {
			return u(A) && a(A) && t[A.charCodeAt(0)].length <= 2
		},
		f = e.__arabicParser__.isArabicAlfLetter = function(A) {
			return u(A) && o.indexOf(A.charCodeAt(0)) >= 0
		};
	e.__arabicParser__.arabicLetterHasIsolatedForm = function(A) {
		return u(A) && a(A) && t[A.charCodeAt(0)].length >= 1
	};
	var p = e.__arabicParser__.arabicLetterHasFinalForm = function(A) {
		return u(A) && a(A) && t[A.charCodeAt(0)].length >= 2
	};
	e.__arabicParser__.arabicLetterHasInitialForm = function(A) {
		return u(A) && a(A) && t[A.charCodeAt(0)].length >= 3
	};
	var v = e.__arabicParser__.arabicLetterHasMedialForm = function(A) {
			return u(A) && a(A) && t[A.charCodeAt(0)].length == 4
		},
		m = e.__arabicParser__.resolveLigatures = function(A) {
			var F = 0,
				_ = n,
				j = "",
				z = 0;
			for (F = 0; F < A.length; F += 1) _[A.charCodeAt(F)] !== void 0 ? (z++, typeof(_ = _[A.charCodeAt(F)]) == "number" && (j += String.fromCharCode(_), _ = n, z = 0), F === A.length - 1 && (_ = n, j += A.charAt(F - (z - 1)), F -= z - 1, z = 0)) : (_ = n, j += A.charAt(F - z), F -= z, z = 0);
			return j
		};
	e.__arabicParser__.isArabicDiacritic = function(A) {
		return A !== void 0 && i[A.charCodeAt(0)] !== void 0
	};
	var y = e.__arabicParser__.getCorrectForm = function(A, F, _) {
			return u(A) ? a(A) === !1 ? -1 : !p(A) || !u(F) && !u(_) || !u(_) && c(F) || c(A) && !u(F) || c(A) && f(F) || c(A) && c(F) ? 0 : v(A) && u(F) && !c(F) && u(_) && p(_) ? 3 : c(A) || !u(_) ? 1 : 2 : -1
		},
		d = function(A) {
			var F = 0,
				_ = 0,
				j = 0,
				z = "",
				$ = "",
				rt = "",
				lt = (A = A || "").split("\\s+"),
				Y = [];
			for (F = 0; F < lt.length; F += 1) {
				for (Y.push(""), _ = 0; _ < lt[F].length; _ += 1) z = lt[F][_], $ = lt[F][_ - 1], rt = lt[F][_ + 1], u(z) ? (j = y(z, $, rt), Y[F] += j !== -1 ? String.fromCharCode(t[z.charCodeAt(0)][j]) : z) : Y[F] += z;
				Y[F] = m(Y[F])
			}
			return Y.join(" ")
		},
		I = e.__arabicParser__.processArabic = e.processArabic = function() {
			var A, F = typeof arguments[0] == "string" ? arguments[0] : arguments[0].text,
				_ = [];
			if (Array.isArray(F)) {
				var j = 0;
				for (_ = [], j = 0; j < F.length; j += 1) Array.isArray(F[j]) ? _.push([d(F[j][0]), F[j][1], F[j][2]]) : _.push([d(F[j])]);
				A = _
			} else A = d(F);
			return typeof arguments[0] == "string" ? A : (arguments[0].text = A, arguments[0])
		};
	e.events.push(["preProcessText", I])
}(Gt.API), Gt.API.autoPrint = function(e) {
		var t;
		switch ((e = e || {}).variant = e.variant || "non-conform", e.variant) {
			case "javascript":
				this.addJS("print({});");
				break;
			case "non-conform":
			default:
				this.internal.events.subscribe("postPutResources", function() {
					t = this.internal.newObject(), this.internal.out("<<"), this.internal.out("/S /Named"), this.internal.out("/Type /Action"), this.internal.out("/N /Print"), this.internal.out(">>"), this.internal.out("endobj")
				}), this.internal.events.subscribe("putCatalog", function() {
					this.internal.out("/OpenAction " + t + " 0 R")
				})
		}
		return this
	},
	function(e) {
		var t = function() {
			var n = void 0;
			Object.defineProperty(this, "pdf", {
				get: function() {
					return n
				},
				set: function(c) {
					n = c
				}
			});
			var i = 150;
			Object.defineProperty(this, "width", {
				get: function() {
					return i
				},
				set: function(c) {
					i = isNaN(c) || Number.isInteger(c) === !1 || c < 0 ? 150 : c, this.getContext("2d").pageWrapXEnabled && (this.getContext("2d").pageWrapX = i + 1)
				}
			});
			var o = 300;
			Object.defineProperty(this, "height", {
				get: function() {
					return o
				},
				set: function(c) {
					o = isNaN(c) || Number.isInteger(c) === !1 || c < 0 ? 300 : c, this.getContext("2d").pageWrapYEnabled && (this.getContext("2d").pageWrapY = o + 1)
				}
			});
			var a = [];
			Object.defineProperty(this, "childNodes", {
				get: function() {
					return a
				},
				set: function(c) {
					a = c
				}
			});
			var u = {};
			Object.defineProperty(this, "style", {
				get: function() {
					return u
				},
				set: function(c) {
					u = c
				}
			}), Object.defineProperty(this, "parentNode", {})
		};
		t.prototype.getContext = function(n, i) {
			var o;
			if ((n = n || "2d") !== "2d") return null;
			for (o in i) this.pdf.context2d.hasOwnProperty(o) && (this.pdf.context2d[o] = i[o]);
			return this.pdf.context2d._canvas = this, this.pdf.context2d
		}, t.prototype.toDataURL = function() {
			throw new Error("toDataURL is not implemented.")
		}, e.events.push(["initialized", function() {
			this.canvas = new t, this.canvas.pdf = this
		}])
	}(Gt.API),
	function(e) {
		var t = {
				left: 0,
				top: 0,
				bottom: 0,
				right: 0
			},
			n = !1,
			i = function() {
				this.internal.__cell__ === void 0 && (this.internal.__cell__ = {}, this.internal.__cell__.padding = 3, this.internal.__cell__.headerFunction = void 0, this.internal.__cell__.margins = Object.assign({}, t), this.internal.__cell__.margins.width = this.getPageWidth(), o.call(this))
			},
			o = function() {
				this.internal.__cell__.lastCell = new a, this.internal.__cell__.pages = 1
			},
			a = function() {
				var f = arguments[0];
				Object.defineProperty(this, "x", {
					enumerable: !0,
					get: function() {
						return f
					},
					set: function(A) {
						f = A
					}
				});
				var p = arguments[1];
				Object.defineProperty(this, "y", {
					enumerable: !0,
					get: function() {
						return p
					},
					set: function(A) {
						p = A
					}
				});
				var v = arguments[2];
				Object.defineProperty(this, "width", {
					enumerable: !0,
					get: function() {
						return v
					},
					set: function(A) {
						v = A
					}
				});
				var m = arguments[3];
				Object.defineProperty(this, "height", {
					enumerable: !0,
					get: function() {
						return m
					},
					set: function(A) {
						m = A
					}
				});
				var y = arguments[4];
				Object.defineProperty(this, "text", {
					enumerable: !0,
					get: function() {
						return y
					},
					set: function(A) {
						y = A
					}
				});
				var d = arguments[5];
				Object.defineProperty(this, "lineNumber", {
					enumerable: !0,
					get: function() {
						return d
					},
					set: function(A) {
						d = A
					}
				});
				var I = arguments[6];
				return Object.defineProperty(this, "align", {
					enumerable: !0,
					get: function() {
						return I
					},
					set: function(A) {
						I = A
					}
				}), this
			};
		a.prototype.clone = function() {
			return new a(this.x, this.y, this.width, this.height, this.text, this.lineNumber, this.align)
		}, a.prototype.toArray = function() {
			return [this.x, this.y, this.width, this.height, this.text, this.lineNumber, this.align]
		}, e.setHeaderFunction = function(f) {
			return i.call(this), this.internal.__cell__.headerFunction = typeof f == "function" ? f : void 0, this
		}, e.getTextDimensions = function(f, p) {
			i.call(this);
			var v = (p = p || {}).fontSize || this.getFontSize(),
				m = p.font || this.getFont(),
				y = p.scaleFactor || this.internal.scaleFactor,
				d = 0,
				I = 0,
				A = 0,
				F = this;
			if (!Array.isArray(f) && typeof f != "string") {
				if (typeof f != "number") throw new Error("getTextDimensions expects text-parameter to be of type String or type Number or an Array of Strings.");
				f = String(f)
			}
			var _ = p.maxWidth;
			_ > 0 ? typeof f == "string" ? f = this.splitTextToSize(f, _) : Object.prototype.toString.call(f) === "[object Array]" && (f = f.reduce(function(z, $) {
				return z.concat(F.splitTextToSize($, _))
			}, [])) : f = Array.isArray(f) ? f : [f];
			for (var j = 0; j < f.length; j++) d < (A = this.getStringUnitWidth(f[j], {
				font: m
			}) * v) && (d = A);
			return d !== 0 && (I = f.length), {
				w: d /= y,
				h: Math.max((I * v * this.getLineHeightFactor() - v * (this.getLineHeightFactor() - 1)) / y, 0)
			}
		}, e.cellAddPage = function() {
			i.call(this), this.addPage();
			var f = this.internal.__cell__.margins || t;
			return this.internal.__cell__.lastCell = new a(f.left, f.top, void 0, void 0), this.internal.__cell__.pages += 1, this
		};
		var u = e.cell = function() {
			var f;
			f = arguments[0] instanceof a ? arguments[0] : new a(arguments[0], arguments[1], arguments[2], arguments[3], arguments[4], arguments[5]), i.call(this);
			var p = this.internal.__cell__.lastCell,
				v = this.internal.__cell__.padding,
				m = this.internal.__cell__.margins || t,
				y = this.internal.__cell__.tableHeaderRow,
				d = this.internal.__cell__.printHeaders;
			return p.lineNumber !== void 0 && (p.lineNumber === f.lineNumber ? (f.x = (p.x || 0) + (p.width || 0), f.y = p.y || 0) : p.y + p.height + f.height + m.bottom > this.getPageHeight() ? (this.cellAddPage(), f.y = m.top, d && y && (this.printHeaderRow(f.lineNumber, !0), f.y += y[0].height)) : f.y = p.y + p.height || f.y), f.text[0] !== void 0 && (this.rect(f.x, f.y, f.width, f.height, n === !0 ? "FD" : void 0), f.align === "right" ? this.text(f.text, f.x + f.width - v, f.y + v, {
				align: "right",
				baseline: "top"
			}) : f.align === "center" ? this.text(f.text, f.x + f.width / 2, f.y + v, {
				align: "center",
				baseline: "top",
				maxWidth: f.width - v - v
			}) : this.text(f.text, f.x + v, f.y + v, {
				align: "left",
				baseline: "top",
				maxWidth: f.width - v - v
			})), this.internal.__cell__.lastCell = f, this
		};
		e.table = function(f, p, v, m, y) {
			if (i.call(this), !v) throw new Error("No data for PDF table.");
			var d, I, A, F, _ = [],
				j = [],
				z = [],
				$ = {},
				rt = {},
				lt = [],
				Y = [],
				R = (y = y || {}).autoSize || !1,
				K = y.printHeaders !== !1,
				ot = y.css && y.css["font-size"] !== void 0 ? 16 * y.css["font-size"] : y.fontSize || 12,
				P = y.margins || Object.assign({
					width: this.getPageWidth()
				}, t),
				C = typeof y.padding == "number" ? y.padding : 3,
				q = y.headerBackgroundColor || "#c8c8c8",
				T = y.headerTextColor || "#000";
			if (o.call(this), this.internal.__cell__.printHeaders = K, this.internal.__cell__.margins = P, this.internal.__cell__.table_font_size = ot, this.internal.__cell__.padding = C, this.internal.__cell__.headerBackgroundColor = q, this.internal.__cell__.headerTextColor = T, this.setFontSize(ot), m == null) j = _ = Object.keys(v[0]), z = _.map(function() {
				return "left"
			});
			else if (Array.isArray(m) && be(m[0]) === "object")
				for (_ = m.map(function(ut) {
						return ut.name
					}), j = m.map(function(ut) {
						return ut.prompt || ut.name || ""
					}), z = m.map(function(ut) {
						return ut.align || "left"
					}), d = 0; d < m.length; d += 1) rt[m[d].name] = m[d].width * (19.049976 / 25.4);
			else Array.isArray(m) && typeof m[0] == "string" && (j = _ = m, z = _.map(function() {
				return "left"
			}));
			if (R || Array.isArray(m) && typeof m[0] == "string")
				for (d = 0; d < _.length; d += 1) {
					for ($[F = _[d]] = v.map(function(ut) {
							return ut[F]
						}), this.setFont(void 0, "bold"), lt.push(this.getTextDimensions(j[d], {
							fontSize: this.internal.__cell__.table_font_size,
							scaleFactor: this.internal.scaleFactor
						}).w), I = $[F], this.setFont(void 0, "normal"), A = 0; A < I.length; A += 1) lt.push(this.getTextDimensions(I[A], {
						fontSize: this.internal.__cell__.table_font_size,
						scaleFactor: this.internal.scaleFactor
					}).w);
					rt[F] = Math.max.apply(null, lt) + C + C, lt = []
				}
			if (K) {
				var ct = {};
				for (d = 0; d < _.length; d += 1) ct[_[d]] = {}, ct[_[d]].text = j[d], ct[_[d]].align = z[d];
				var st = c.call(this, ct, rt);
				Y = _.map(function(ut) {
					return new a(f, p, rt[ut], st, ct[ut].text, void 0, ct[ut].align)
				}), this.setTableHeaderRow(Y), this.printHeaderRow(1, !1)
			}
			var ht = m.reduce(function(ut, _t) {
				return ut[_t.name] = _t.align, ut
			}, {});
			for (d = 0; d < v.length; d += 1) {
				"rowStart" in y && y.rowStart instanceof Function && y.rowStart({
					row: d,
					data: v[d]
				}, this);
				var Q = c.call(this, v[d], rt);
				for (A = 0; A < _.length; A += 1) {
					var dt = v[d][_[A]];
					"cellStart" in y && y.cellStart instanceof Function && y.cellStart({
						row: d,
						col: A,
						data: dt
					}, this), u.call(this, new a(f, p, rt[_[A]], Q, dt, d + 2, ht[_[A]]))
				}
			}
			return this.internal.__cell__.table_x = f, this.internal.__cell__.table_y = p, this
		};
		var c = function(f, p) {
			var v = this.internal.__cell__.padding,
				m = this.internal.__cell__.table_font_size,
				y = this.internal.scaleFactor;
			return Object.keys(f).map(function(d) {
				var I = f[d];
				return this.splitTextToSize(I.hasOwnProperty("text") ? I.text : I, p[d] - v - v)
			}, this).map(function(d) {
				return this.getLineHeightFactor() * d.length * m / y + v + v
			}, this).reduce(function(d, I) {
				return Math.max(d, I)
			}, 0)
		};
		e.setTableHeaderRow = function(f) {
			i.call(this), this.internal.__cell__.tableHeaderRow = f
		}, e.printHeaderRow = function(f, p) {
			if (i.call(this), !this.internal.__cell__.tableHeaderRow) throw new Error("Property tableHeaderRow does not exist.");
			var v;
			if (n = !0, typeof this.internal.__cell__.headerFunction == "function") {
				var m = this.internal.__cell__.headerFunction(this, this.internal.__cell__.pages);
				this.internal.__cell__.lastCell = new a(m[0], m[1], m[2], m[3], void 0, -1)
			}
			this.setFont(void 0, "bold");
			for (var y = [], d = 0; d < this.internal.__cell__.tableHeaderRow.length; d += 1) {
				v = this.internal.__cell__.tableHeaderRow[d].clone(), p && (v.y = this.internal.__cell__.margins.top || 0, y.push(v)), v.lineNumber = f;
				var I = this.getTextColor();
				this.setTextColor(this.internal.__cell__.headerTextColor), this.setFillColor(this.internal.__cell__.headerBackgroundColor), u.call(this, v), this.setTextColor(I)
			}
			y.length > 0 && this.setTableHeaderRow(y), this.setFont(void 0, "normal"), n = !1
		}
	}(Gt.API);
var Lc = {
		italic: ["italic", "oblique", "normal"],
		oblique: ["oblique", "italic", "normal"],
		normal: ["normal", "oblique", "italic"]
	},
	Ac = ["ultra-condensed", "extra-condensed", "condensed", "semi-condensed", "normal", "semi-expanded", "expanded", "extra-expanded", "ultra-expanded"],
	pu = Nc(Ac),
	Sc = [100, 200, 300, 400, 500, 600, 700, 800, 900],
	J2 = Nc(Sc);

function gu(e) {
	var t = e.family.replace(/"|'/g, "").toLowerCase(),
		n = function(a) {
			return Lc[a = a || "normal"] ? a : "normal"
		}(e.style),
		i = function(a) {
			if (!a) return 400;
			if (typeof a == "number") return a >= 100 && a <= 900 && a % 100 == 0 ? a : 400;
			if (/^\d00$/.test(a)) return parseInt(a);
			switch (a) {
				case "bold":
					return 700;
				case "normal":
				default:
					return 400
			}
		}(e.weight),
		o = function(a) {
			return typeof pu[a = a || "normal"] == "number" ? a : "normal"
		}(e.stretch);
	return {
		family: t,
		style: n,
		weight: i,
		stretch: o,
		src: e.src || [],
		ref: e.ref || {
			name: t,
			style: [o, n, i].join(" ")
		}
	}
}

function kl(e, t, n, i) {
	var o;
	for (o = n; o >= 0 && o < t.length; o += i)
		if (e[t[o]]) return e[t[o]];
	for (o = n; o >= 0 && o < t.length; o -= i)
		if (e[t[o]]) return e[t[o]]
}
var X2 = {
		"sans-serif": "helvetica",
		fixed: "courier",
		monospace: "courier",
		terminal: "courier",
		cursive: "times",
		fantasy: "times",
		serif: "times"
	},
	Cl = {
		caption: "times",
		icon: "times",
		menu: "times",
		"message-box": "times",
		"small-caption": "times",
		"status-bar": "times"
	};

function Il(e) {
	return [e.stretch, e.style, e.weight, e.family].join(" ")
}

function K2(e, t, n) {
	for (var i = (n = n || {}).defaultFontFamily || "times", o = Object.assign({}, X2, n.genericFontFamilies || {}), a = null, u = null, c = 0; c < t.length; ++c)
		if (o[(a = gu(t[c])).family] && (a.family = o[a.family]), e.hasOwnProperty(a.family)) {
			u = e[a.family];
			break
		} if (!(u = u || e[i])) throw new Error("Could not find a font-family for the rule '" + Il(a) + "' and default family '" + i + "'.");
	if (u = function(f, p) {
			if (p[f]) return p[f];
			var v = pu[f],
				m = v <= pu.normal ? -1 : 1,
				y = kl(p, Ac, v, m);
			if (!y) throw new Error("Could not find a matching font-stretch value for " + f);
			return y
		}(a.stretch, u), u = function(f, p) {
			if (p[f]) return p[f];
			for (var v = Lc[f], m = 0; m < v.length; ++m)
				if (p[v[m]]) return p[v[m]];
			throw new Error("Could not find a matching font-style for " + f)
		}(a.style, u), !(u = function(f, p) {
			if (p[f]) return p[f];
			if (f === 400 && p[500]) return p[500];
			if (f === 500 && p[400]) return p[400];
			var v = J2[f],
				m = kl(p, Sc, v, f < 400 ? -1 : 1);
			if (!m) throw new Error("Could not find a matching font-weight for value " + f);
			return m
		}(a.weight, u))) throw new Error("Failed to resolve a font for the rule '" + Il(a) + "'.");
	return u
}

function Fl(e) {
	return e.trimLeft()
}

function $2(e, t) {
	for (var n = 0; n < e.length;) {
		if (e.charAt(n) === t) return [e.substring(0, n), e.substring(n + 1)];
		n += 1
	}
	return null
}

function Z2(e) {
	var t = e.match(/^(-[a-z_]|[a-z_])[a-z0-9_-]*/i);
	return t === null ? null : [t[0], e.substring(t[0].length)]
}
var Eo, jl, El, Ks = ["times"];
(function(e) {
	var t, n, i, o, a, u, c, f, p, v = function(L) {
		return L = L || {}, this.isStrokeTransparent = L.isStrokeTransparent || !1, this.strokeOpacity = L.strokeOpacity || 1, this.strokeStyle = L.strokeStyle || "#000000", this.fillStyle = L.fillStyle || "#000000", this.isFillTransparent = L.isFillTransparent || !1, this.fillOpacity = L.fillOpacity || 1, this.font = L.font || "10px sans-serif", this.textBaseline = L.textBaseline || "alphabetic", this.textAlign = L.textAlign || "left", this.lineWidth = L.lineWidth || 1, this.lineJoin = L.lineJoin || "miter", this.lineCap = L.lineCap || "butt", this.path = L.path || [], this.transform = L.transform !== void 0 ? L.transform.clone() : new f, this.globalCompositeOperation = L.globalCompositeOperation || "normal", this.globalAlpha = L.globalAlpha || 1, this.clip_path = L.clip_path || [], this.currentPoint = L.currentPoint || new u, this.miterLimit = L.miterLimit || 10, this.lastPoint = L.lastPoint || new u, this.lineDashOffset = L.lineDashOffset || 0, this.lineDash = L.lineDash || [], this.margin = L.margin || [0, 0, 0, 0], this.prevPageLastElemOffset = L.prevPageLastElemOffset || 0, this.ignoreClearRect = typeof L.ignoreClearRect != "boolean" || L.ignoreClearRect, this
	};
	e.events.push(["initialized", function() {
		this.context2d = new m(this), t = this.internal.f2, n = this.internal.getCoordinateString, i = this.internal.getVerticalCoordinateString, o = this.internal.getHorizontalCoordinate, a = this.internal.getVerticalCoordinate, u = this.internal.Point, c = this.internal.Rectangle, f = this.internal.Matrix, p = new v
	}]);
	var m = function(L) {
		Object.defineProperty(this, "canvas", {
			get: function() {
				return {
					parentNode: !1,
					style: !1
				}
			}
		});
		var M = L;
		Object.defineProperty(this, "pdf", {
			get: function() {
				return M
			}
		});
		var O = !1;
		Object.defineProperty(this, "pageWrapXEnabled", {
			get: function() {
				return O
			},
			set: function(gt) {
				O = !!gt
			}
		});
		var U = !1;
		Object.defineProperty(this, "pageWrapYEnabled", {
			get: function() {
				return U
			},
			set: function(gt) {
				U = !!gt
			}
		});
		var V = 0;
		Object.defineProperty(this, "posX", {
			get: function() {
				return V
			},
			set: function(gt) {
				isNaN(gt) || (V = gt)
			}
		});
		var nt = 0;
		Object.defineProperty(this, "posY", {
			get: function() {
				return nt
			},
			set: function(gt) {
				isNaN(gt) || (nt = gt)
			}
		}), Object.defineProperty(this, "margin", {
			get: function() {
				return p.margin
			},
			set: function(gt) {
				var B;
				typeof gt == "number" ? B = [gt, gt, gt, gt] : ((B = new Array(4))[0] = gt[0], B[1] = gt.length >= 2 ? gt[1] : B[0], B[2] = gt.length >= 3 ? gt[2] : B[0], B[3] = gt.length >= 4 ? gt[3] : B[1]), p.margin = B
			}
		});
		var at = !1;
		Object.defineProperty(this, "autoPaging", {
			get: function() {
				return at
			},
			set: function(gt) {
				at = gt
			}
		});
		var it = 0;
		Object.defineProperty(this, "lastBreak", {
			get: function() {
				return it
			},
			set: function(gt) {
				it = gt
			}
		});
		var xt = [];
		Object.defineProperty(this, "pageBreaks", {
			get: function() {
				return xt
			},
			set: function(gt) {
				xt = gt
			}
		}), Object.defineProperty(this, "ctx", {
			get: function() {
				return p
			},
			set: function(gt) {
				gt instanceof v && (p = gt)
			}
		}), Object.defineProperty(this, "path", {
			get: function() {
				return p.path
			},
			set: function(gt) {
				p.path = gt
			}
		});
		var Lt = [];
		Object.defineProperty(this, "ctxStack", {
			get: function() {
				return Lt
			},
			set: function(gt) {
				Lt = gt
			}
		}), Object.defineProperty(this, "fillStyle", {
			get: function() {
				return this.ctx.fillStyle
			},
			set: function(gt) {
				var B;
				B = y(gt), this.ctx.fillStyle = B.style, this.ctx.isFillTransparent = B.a === 0, this.ctx.fillOpacity = B.a, this.pdf.setFillColor(B.r, B.g, B.b, {
					a: B.a
				}), this.pdf.setTextColor(B.r, B.g, B.b, {
					a: B.a
				})
			}
		}), Object.defineProperty(this, "strokeStyle", {
			get: function() {
				return this.ctx.strokeStyle
			},
			set: function(gt) {
				var B = y(gt);
				this.ctx.strokeStyle = B.style, this.ctx.isStrokeTransparent = B.a === 0, this.ctx.strokeOpacity = B.a, B.a === 0 ? this.pdf.setDrawColor(255, 255, 255) : (B.a, this.pdf.setDrawColor(B.r, B.g, B.b))
			}
		}), Object.defineProperty(this, "lineCap", {
			get: function() {
				return this.ctx.lineCap
			},
			set: function(gt) {
				["butt", "round", "square"].indexOf(gt) !== -1 && (this.ctx.lineCap = gt, this.pdf.setLineCap(gt))
			}
		}), Object.defineProperty(this, "lineWidth", {
			get: function() {
				return this.ctx.lineWidth
			},
			set: function(gt) {
				isNaN(gt) || (this.ctx.lineWidth = gt, this.pdf.setLineWidth(gt))
			}
		}), Object.defineProperty(this, "lineJoin", {
			get: function() {
				return this.ctx.lineJoin
			},
			set: function(gt) {
				["bevel", "round", "miter"].indexOf(gt) !== -1 && (this.ctx.lineJoin = gt, this.pdf.setLineJoin(gt))
			}
		}), Object.defineProperty(this, "miterLimit", {
			get: function() {
				return this.ctx.miterLimit
			},
			set: function(gt) {
				isNaN(gt) || (this.ctx.miterLimit = gt, this.pdf.setMiterLimit(gt))
			}
		}), Object.defineProperty(this, "textBaseline", {
			get: function() {
				return this.ctx.textBaseline
			},
			set: function(gt) {
				this.ctx.textBaseline = gt
			}
		}), Object.defineProperty(this, "textAlign", {
			get: function() {
				return this.ctx.textAlign
			},
			set: function(gt) {
				["right", "end", "center", "left", "start"].indexOf(gt) !== -1 && (this.ctx.textAlign = gt)
			}
		});
		var Pt = null;

		function It(gt, B) {
			if (Pt === null) {
				var Xt = function(Bt) {
					var At = [];
					return Object.keys(Bt).forEach(function(St) {
						Bt[St].forEach(function(jt) {
							var Ct = null;
							switch (jt) {
								case "bold":
									Ct = {
										family: St,
										weight: "bold"
									};
									break;
								case "italic":
									Ct = {
										family: St,
										style: "italic"
									};
									break;
								case "bolditalic":
									Ct = {
										family: St,
										weight: "bold",
										style: "italic"
									};
									break;
								case "":
								case "normal":
									Ct = {
										family: St
									}
							}
							Ct !== null && (Ct.ref = {
								name: St,
								style: jt
							}, At.push(Ct))
						})
					}), At
				}(gt.getFontList());
				Pt = function(Bt) {
					for (var At = {}, St = 0; St < Bt.length; ++St) {
						var jt = gu(Bt[St]),
							Ct = jt.family,
							qt = jt.stretch,
							Jt = jt.style,
							Qt = jt.weight;
						At[Ct] = At[Ct] || {}, At[Ct][qt] = At[Ct][qt] || {}, At[Ct][qt][Jt] = At[Ct][qt][Jt] || {}, At[Ct][qt][Jt][Qt] = jt
					}
					return At
				}(Xt.concat(B))
			}
			return Pt
		}
		var Ut = null;
		Object.defineProperty(this, "fontFaces", {
			get: function() {
				return Ut
			},
			set: function(gt) {
				Pt = null, Ut = gt
			}
		}), Object.defineProperty(this, "font", {
			get: function() {
				return this.ctx.font
			},
			set: function(gt) {
				var B;
				if (this.ctx.font = gt, (B = /^\s*(?=(?:(?:[-a-z]+\s*){0,2}(italic|oblique))?)(?=(?:(?:[-a-z]+\s*){0,2}(small-caps))?)(?=(?:(?:[-a-z]+\s*){0,2}(bold(?:er)?|lighter|[1-9]00))?)(?:(?:normal|\1|\2|\3)\s*){0,3}((?:xx?-)?(?:small|large)|medium|smaller|larger|[.\d]+(?:\%|in|[cem]m|ex|p[ctx]))(?:\s*\/\s*(normal|[.\d]+(?:\%|in|[cem]m|ex|p[ctx])))?\s*([-_,\"\'\sa-z]+?)\s*$/i.exec(gt)) !== null) {
					var Xt = B[1];
					B[2];
					var Bt = B[3],
						At = B[4];
					B[5];
					var St = B[6],
						jt = /^([.\d]+)((?:%|in|[cem]m|ex|p[ctx]))$/i.exec(At)[2];
					At = Math.floor(jt === "px" ? parseFloat(At) * this.pdf.internal.scaleFactor : jt === "em" ? parseFloat(At) * this.pdf.getFontSize() : parseFloat(At) * this.pdf.internal.scaleFactor), this.pdf.setFontSize(At);
					var Ct = function(Wt) {
						var ie, kt, $e = [],
							le = Wt.trim();
						if (le === "") return Ks;
						if (le in Cl) return [Cl[le]];
						for (; le !== "";) {
							switch (kt = null, ie = (le = Fl(le)).charAt(0)) {
								case '"':
								case "'":
									kt = $2(le.substring(1), ie);
									break;
								default:
									kt = Z2(le)
							}
							if (kt === null || ($e.push(kt[0]), (le = Fl(kt[1])) !== "" && le.charAt(0) !== ",")) return Ks;
							le = le.replace(/^,/, "")
						}
						return $e
					}(St);
					if (this.fontFaces) {
						var qt = K2(It(this.pdf, this.fontFaces), Ct.map(function(Wt) {
							return {
								family: Wt,
								stretch: "normal",
								weight: Bt,
								style: Xt
							}
						}));
						this.pdf.setFont(qt.ref.name, qt.ref.style)
					} else {
						var Jt = "";
						(Bt === "bold" || parseInt(Bt, 10) >= 700 || Xt === "bold") && (Jt = "bold"), Xt === "italic" && (Jt += "italic"), Jt.length === 0 && (Jt = "normal");
						for (var Qt = "", ne = {
								arial: "Helvetica",
								Arial: "Helvetica",
								verdana: "Helvetica",
								Verdana: "Helvetica",
								helvetica: "Helvetica",
								Helvetica: "Helvetica",
								"sans-serif": "Helvetica",
								fixed: "Courier",
								monospace: "Courier",
								terminal: "Courier",
								cursive: "Times",
								fantasy: "Times",
								serif: "Times"
							}, re = 0; re < Ct.length; re++) {
							if (this.pdf.internal.getFont(Ct[re], Jt, {
									noFallback: !0,
									disableWarning: !0
								}) !== void 0) {
								Qt = Ct[re];
								break
							}
							if (Jt === "bolditalic" && this.pdf.internal.getFont(Ct[re], "bold", {
									noFallback: !0,
									disableWarning: !0
								}) !== void 0) Qt = Ct[re], Jt = "bold";
							else if (this.pdf.internal.getFont(Ct[re], "normal", {
									noFallback: !0,
									disableWarning: !0
								}) !== void 0) {
								Qt = Ct[re], Jt = "normal";
								break
							}
						}
						if (Qt === "") {
							for (var ue = 0; ue < Ct.length; ue++)
								if (ne[Ct[ue]]) {
									Qt = ne[Ct[ue]];
									break
								}
						}
						Qt = Qt === "" ? "Times" : Qt, this.pdf.setFont(Qt, Jt)
					}
				}
			}
		}), Object.defineProperty(this, "globalCompositeOperation", {
			get: function() {
				return this.ctx.globalCompositeOperation
			},
			set: function(gt) {
				this.ctx.globalCompositeOperation = gt
			}
		}), Object.defineProperty(this, "globalAlpha", {
			get: function() {
				return this.ctx.globalAlpha
			},
			set: function(gt) {
				this.ctx.globalAlpha = gt
			}
		}), Object.defineProperty(this, "lineDashOffset", {
			get: function() {
				return this.ctx.lineDashOffset
			},
			set: function(gt) {
				this.ctx.lineDashOffset = gt, _t.call(this)
			}
		}), Object.defineProperty(this, "lineDash", {
			get: function() {
				return this.ctx.lineDash
			},
			set: function(gt) {
				this.ctx.lineDash = gt, _t.call(this)
			}
		}), Object.defineProperty(this, "ignoreClearRect", {
			get: function() {
				return this.ctx.ignoreClearRect
			},
			set: function(gt) {
				this.ctx.ignoreClearRect = !!gt
			}
		})
	};
	m.prototype.setLineDash = function(L) {
		this.lineDash = L
	}, m.prototype.getLineDash = function() {
		return this.lineDash.length % 2 ? this.lineDash.concat(this.lineDash) : this.lineDash.slice()
	}, m.prototype.fill = function() {
		$.call(this, "fill", !1)
	}, m.prototype.stroke = function() {
		$.call(this, "stroke", !1)
	}, m.prototype.beginPath = function() {
		this.path = [{
			type: "begin"
		}]
	}, m.prototype.moveTo = function(L, M) {
		if (isNaN(L) || isNaN(M)) throw Ne.error("jsPDF.context2d.moveTo: Invalid arguments", arguments), new Error("Invalid arguments passed to jsPDF.context2d.moveTo");
		var O = this.ctx.transform.applyToPoint(new u(L, M));
		this.path.push({
			type: "mt",
			x: O.x,
			y: O.y
		}), this.ctx.lastPoint = new u(L, M)
	}, m.prototype.closePath = function() {
		var L = new u(0, 0),
			M = 0;
		for (M = this.path.length - 1; M !== -1; M--)
			if (this.path[M].type === "begin" && be(this.path[M + 1]) === "object" && typeof this.path[M + 1].x == "number") {
				L = new u(this.path[M + 1].x, this.path[M + 1].y);
				break
			} this.path.push({
			type: "close"
		}), this.ctx.lastPoint = new u(L.x, L.y)
	}, m.prototype.lineTo = function(L, M) {
		if (isNaN(L) || isNaN(M)) throw Ne.error("jsPDF.context2d.lineTo: Invalid arguments", arguments), new Error("Invalid arguments passed to jsPDF.context2d.lineTo");
		var O = this.ctx.transform.applyToPoint(new u(L, M));
		this.path.push({
			type: "lt",
			x: O.x,
			y: O.y
		}), this.ctx.lastPoint = new u(O.x, O.y)
	}, m.prototype.clip = function() {
		this.ctx.clip_path = JSON.parse(JSON.stringify(this.path)), $.call(this, null, !0)
	}, m.prototype.quadraticCurveTo = function(L, M, O, U) {
		if (isNaN(O) || isNaN(U) || isNaN(L) || isNaN(M)) throw Ne.error("jsPDF.context2d.quadraticCurveTo: Invalid arguments", arguments), new Error("Invalid arguments passed to jsPDF.context2d.quadraticCurveTo");
		var V = this.ctx.transform.applyToPoint(new u(O, U)),
			nt = this.ctx.transform.applyToPoint(new u(L, M));
		this.path.push({
			type: "qct",
			x1: nt.x,
			y1: nt.y,
			x: V.x,
			y: V.y
		}), this.ctx.lastPoint = new u(V.x, V.y)
	}, m.prototype.bezierCurveTo = function(L, M, O, U, V, nt) {
		if (isNaN(V) || isNaN(nt) || isNaN(L) || isNaN(M) || isNaN(O) || isNaN(U)) throw Ne.error("jsPDF.context2d.bezierCurveTo: Invalid arguments", arguments), new Error("Invalid arguments passed to jsPDF.context2d.bezierCurveTo");
		var at = this.ctx.transform.applyToPoint(new u(V, nt)),
			it = this.ctx.transform.applyToPoint(new u(L, M)),
			xt = this.ctx.transform.applyToPoint(new u(O, U));
		this.path.push({
			type: "bct",
			x1: it.x,
			y1: it.y,
			x2: xt.x,
			y2: xt.y,
			x: at.x,
			y: at.y
		}), this.ctx.lastPoint = new u(at.x, at.y)
	}, m.prototype.arc = function(L, M, O, U, V, nt) {
		if (isNaN(L) || isNaN(M) || isNaN(O) || isNaN(U) || isNaN(V)) throw Ne.error("jsPDF.context2d.arc: Invalid arguments", arguments), new Error("Invalid arguments passed to jsPDF.context2d.arc");
		if (nt = !!nt, !this.ctx.transform.isIdentity) {
			var at = this.ctx.transform.applyToPoint(new u(L, M));
			L = at.x, M = at.y;
			var it = this.ctx.transform.applyToPoint(new u(0, O)),
				xt = this.ctx.transform.applyToPoint(new u(0, 0));
			O = Math.sqrt(Math.pow(it.x - xt.x, 2) + Math.pow(it.y - xt.y, 2))
		}
		Math.abs(V - U) >= 2 * Math.PI && (U = 0, V = 2 * Math.PI), this.path.push({
			type: "arc",
			x: L,
			y: M,
			radius: O,
			startAngle: U,
			endAngle: V,
			counterclockwise: nt
		})
	}, m.prototype.arcTo = function(L, M, O, U, V) {
		throw new Error("arcTo not implemented.")
	}, m.prototype.rect = function(L, M, O, U) {
		if (isNaN(L) || isNaN(M) || isNaN(O) || isNaN(U)) throw Ne.error("jsPDF.context2d.rect: Invalid arguments", arguments), new Error("Invalid arguments passed to jsPDF.context2d.rect");
		this.moveTo(L, M), this.lineTo(L + O, M), this.lineTo(L + O, M + U), this.lineTo(L, M + U), this.lineTo(L, M), this.lineTo(L + O, M), this.lineTo(L, M)
	}, m.prototype.fillRect = function(L, M, O, U) {
		if (isNaN(L) || isNaN(M) || isNaN(O) || isNaN(U)) throw Ne.error("jsPDF.context2d.fillRect: Invalid arguments", arguments), new Error("Invalid arguments passed to jsPDF.context2d.fillRect");
		if (!d.call(this)) {
			var V = {};
			this.lineCap !== "butt" && (V.lineCap = this.lineCap, this.lineCap = "butt"), this.lineJoin !== "miter" && (V.lineJoin = this.lineJoin, this.lineJoin = "miter"), this.beginPath(), this.rect(L, M, O, U), this.fill(), V.hasOwnProperty("lineCap") && (this.lineCap = V.lineCap), V.hasOwnProperty("lineJoin") && (this.lineJoin = V.lineJoin)
		}
	}, m.prototype.strokeRect = function(L, M, O, U) {
		if (isNaN(L) || isNaN(M) || isNaN(O) || isNaN(U)) throw Ne.error("jsPDF.context2d.strokeRect: Invalid arguments", arguments), new Error("Invalid arguments passed to jsPDF.context2d.strokeRect");
		I.call(this) || (this.beginPath(), this.rect(L, M, O, U), this.stroke())
	}, m.prototype.clearRect = function(L, M, O, U) {
		if (isNaN(L) || isNaN(M) || isNaN(O) || isNaN(U)) throw Ne.error("jsPDF.context2d.clearRect: Invalid arguments", arguments), new Error("Invalid arguments passed to jsPDF.context2d.clearRect");
		this.ignoreClearRect || (this.fillStyle = "#ffffff", this.fillRect(L, M, O, U))
	}, m.prototype.save = function(L) {
		L = typeof L != "boolean" || L;
		for (var M = this.pdf.internal.getCurrentPageInfo().pageNumber, O = 0; O < this.pdf.internal.getNumberOfPages(); O++) this.pdf.setPage(O + 1), this.pdf.internal.out("q");
		if (this.pdf.setPage(M), L) {
			this.ctx.fontSize = this.pdf.internal.getFontSize();
			var U = new v(this.ctx);
			this.ctxStack.push(this.ctx), this.ctx = U
		}
	}, m.prototype.restore = function(L) {
		L = typeof L != "boolean" || L;
		for (var M = this.pdf.internal.getCurrentPageInfo().pageNumber, O = 0; O < this.pdf.internal.getNumberOfPages(); O++) this.pdf.setPage(O + 1), this.pdf.internal.out("Q");
		this.pdf.setPage(M), L && this.ctxStack.length !== 0 && (this.ctx = this.ctxStack.pop(), this.fillStyle = this.ctx.fillStyle, this.strokeStyle = this.ctx.strokeStyle, this.font = this.ctx.font, this.lineCap = this.ctx.lineCap, this.lineWidth = this.ctx.lineWidth, this.lineJoin = this.ctx.lineJoin, this.lineDash = this.ctx.lineDash, this.lineDashOffset = this.ctx.lineDashOffset)
	}, m.prototype.toDataURL = function() {
		throw new Error("toDataUrl not implemented.")
	};
	var y = function(L) {
			var M, O, U, V;
			if (L.isCanvasGradient === !0 && (L = L.getColor()), !L) return {
				r: 0,
				g: 0,
				b: 0,
				a: 0,
				style: L
			};
			if (/transparent|rgba\s*\(\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*,\s*0+\s*\)/.test(L)) M = 0, O = 0, U = 0, V = 0;
			else {
				var nt = /rgb\s*\(\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*\)/.exec(L);
				if (nt !== null) M = parseInt(nt[1]), O = parseInt(nt[2]), U = parseInt(nt[3]), V = 1;
				else if ((nt = /rgba\s*\(\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*,\s*([\d.]+)\s*\)/.exec(L)) !== null) M = parseInt(nt[1]), O = parseInt(nt[2]), U = parseInt(nt[3]), V = parseFloat(nt[4]);
				else {
					if (V = 1, typeof L == "string" && L.charAt(0) !== "#") {
						var at = new mc(L);
						L = at.ok ? at.toHex() : "#000000"
					}
					L.length === 4 ? (M = L.substring(1, 2), M += M, O = L.substring(2, 3), O += O, U = L.substring(3, 4), U += U) : (M = L.substring(1, 3), O = L.substring(3, 5), U = L.substring(5, 7)), M = parseInt(M, 16), O = parseInt(O, 16), U = parseInt(U, 16)
				}
			}
			return {
				r: M,
				g: O,
				b: U,
				a: V,
				style: L
			}
		},
		d = function() {
			return this.ctx.isFillTransparent || this.globalAlpha == 0
		},
		I = function() {
			return !!(this.ctx.isStrokeTransparent || this.globalAlpha == 0)
		};
	m.prototype.fillText = function(L, M, O, U) {
		if (isNaN(M) || isNaN(O) || typeof L != "string") throw Ne.error("jsPDF.context2d.fillText: Invalid arguments", arguments), new Error("Invalid arguments passed to jsPDF.context2d.fillText");
		if (U = isNaN(U) ? void 0 : U, !d.call(this)) {
			var V = Q(this.ctx.transform.rotation),
				nt = this.ctx.transform.scaleX;
			C.call(this, {
				text: L,
				x: M,
				y: O,
				scale: nt,
				angle: V,
				align: this.textAlign,
				maxWidth: U
			})
		}
	}, m.prototype.strokeText = function(L, M, O, U) {
		if (isNaN(M) || isNaN(O) || typeof L != "string") throw Ne.error("jsPDF.context2d.strokeText: Invalid arguments", arguments), new Error("Invalid arguments passed to jsPDF.context2d.strokeText");
		if (!I.call(this)) {
			U = isNaN(U) ? void 0 : U;
			var V = Q(this.ctx.transform.rotation),
				nt = this.ctx.transform.scaleX;
			C.call(this, {
				text: L,
				x: M,
				y: O,
				scale: nt,
				renderingMode: "stroke",
				angle: V,
				align: this.textAlign,
				maxWidth: U
			})
		}
	}, m.prototype.measureText = function(L) {
		if (typeof L != "string") throw Ne.error("jsPDF.context2d.measureText: Invalid arguments", arguments), new Error("Invalid arguments passed to jsPDF.context2d.measureText");
		var M = this.pdf,
			O = this.pdf.internal.scaleFactor,
			U = M.internal.getFontSize(),
			V = M.getStringUnitWidth(L) * U / M.internal.scaleFactor,
			nt = function(at) {
				var it = (at = at || {}).width || 0;
				return Object.defineProperty(this, "width", {
					get: function() {
						return it
					}
				}), this
			};
		return new nt({
			width: V *= Math.round(96 * O / 72 * 1e4) / 1e4
		})
	}, m.prototype.scale = function(L, M) {
		if (isNaN(L) || isNaN(M)) throw Ne.error("jsPDF.context2d.scale: Invalid arguments", arguments), new Error("Invalid arguments passed to jsPDF.context2d.scale");
		var O = new f(L, 0, 0, M, 0, 0);
		this.ctx.transform = this.ctx.transform.multiply(O)
	}, m.prototype.rotate = function(L) {
		if (isNaN(L)) throw Ne.error("jsPDF.context2d.rotate: Invalid arguments", arguments), new Error("Invalid arguments passed to jsPDF.context2d.rotate");
		var M = new f(Math.cos(L), Math.sin(L), -Math.sin(L), Math.cos(L), 0, 0);
		this.ctx.transform = this.ctx.transform.multiply(M)
	}, m.prototype.translate = function(L, M) {
		if (isNaN(L) || isNaN(M)) throw Ne.error("jsPDF.context2d.translate: Invalid arguments", arguments), new Error("Invalid arguments passed to jsPDF.context2d.translate");
		var O = new f(1, 0, 0, 1, L, M);
		this.ctx.transform = this.ctx.transform.multiply(O)
	}, m.prototype.transform = function(L, M, O, U, V, nt) {
		if (isNaN(L) || isNaN(M) || isNaN(O) || isNaN(U) || isNaN(V) || isNaN(nt)) throw Ne.error("jsPDF.context2d.transform: Invalid arguments", arguments), new Error("Invalid arguments passed to jsPDF.context2d.transform");
		var at = new f(L, M, O, U, V, nt);
		this.ctx.transform = this.ctx.transform.multiply(at)
	}, m.prototype.setTransform = function(L, M, O, U, V, nt) {
		L = isNaN(L) ? 1 : L, M = isNaN(M) ? 0 : M, O = isNaN(O) ? 0 : O, U = isNaN(U) ? 1 : U, V = isNaN(V) ? 0 : V, nt = isNaN(nt) ? 0 : nt, this.ctx.transform = new f(L, M, O, U, V, nt)
	};
	var A = function() {
		return this.margin[0] > 0 || this.margin[1] > 0 || this.margin[2] > 0 || this.margin[3] > 0
	};
	m.prototype.drawImage = function(L, M, O, U, V, nt, at, it, xt) {
		var Lt = this.pdf.getImageProperties(L),
			Pt = 1,
			It = 1,
			Ut = 1,
			gt = 1;
		U !== void 0 && it !== void 0 && (Ut = it / U, gt = xt / V, Pt = Lt.width / U * it / U, It = Lt.height / V * xt / V), nt === void 0 && (nt = M, at = O, M = 0, O = 0), U !== void 0 && it === void 0 && (it = U, xt = V), U === void 0 && it === void 0 && (it = Lt.width, xt = Lt.height);
		for (var B, Xt = this.ctx.transform.decompose(), Bt = Q(Xt.rotate.shx), At = new f, St = (At = (At = (At = At.multiply(Xt.translate)).multiply(Xt.skew)).multiply(Xt.scale)).applyToRectangle(new c(nt - M * Ut, at - O * gt, U * Pt, V * It)), jt = F.call(this, St), Ct = [], qt = 0; qt < jt.length; qt += 1) Ct.indexOf(jt[qt]) === -1 && Ct.push(jt[qt]);
		if (z(Ct), this.autoPaging)
			for (var Jt = Ct[0], Qt = Ct[Ct.length - 1], ne = Jt; ne < Qt + 1; ne++) {
				this.pdf.setPage(ne);
				var re = this.pdf.internal.pageSize.width - this.margin[3] - this.margin[1],
					ue = ne === 1 ? this.posY + this.margin[0] : this.margin[0],
					Wt = this.pdf.internal.pageSize.height - this.posY - this.margin[0] - this.margin[2],
					ie = this.pdf.internal.pageSize.height - this.margin[0] - this.margin[2],
					kt = ne === 1 ? 0 : Wt + (ne - 2) * ie;
				if (this.ctx.clip_path.length !== 0) {
					var $e = this.path;
					B = JSON.parse(JSON.stringify(this.ctx.clip_path)), this.path = j(B, this.posX + this.margin[3], -kt + ue + this.ctx.prevPageLastElemOffset), rt.call(this, "fill", !0), this.path = $e
				}
				var le = JSON.parse(JSON.stringify(St));
				le = j([le], this.posX + this.margin[3], -kt + ue + this.ctx.prevPageLastElemOffset)[0];
				var Pn = (ne > Jt || ne < Qt) && A.call(this);
				Pn && (this.pdf.saveGraphicsState(), this.pdf.rect(this.margin[3], this.margin[0], re, ie, null).clip().discardPath()), this.pdf.addImage(L, "JPEG", le.x, le.y, le.w, le.h, null, null, Bt), Pn && this.pdf.restoreGraphicsState()
			} else this.pdf.addImage(L, "JPEG", St.x, St.y, St.w, St.h, null, null, Bt)
	};
	var F = function(L, M, O) {
			var U = [];
			M = M || this.pdf.internal.pageSize.width, O = O || this.pdf.internal.pageSize.height - this.margin[0] - this.margin[2];
			var V = this.posY + this.ctx.prevPageLastElemOffset;
			switch (L.type) {
				default:
				case "mt":
				case "lt":
					U.push(Math.floor((L.y + V) / O) + 1);
					break;
				case "arc":
					U.push(Math.floor((L.y + V - L.radius) / O) + 1), U.push(Math.floor((L.y + V + L.radius) / O) + 1);
					break;
				case "qct":
					var nt = dt(this.ctx.lastPoint.x, this.ctx.lastPoint.y, L.x1, L.y1, L.x, L.y);
					U.push(Math.floor((nt.y + V) / O) + 1), U.push(Math.floor((nt.y + nt.h + V) / O) + 1);
					break;
				case "bct":
					var at = ut(this.ctx.lastPoint.x, this.ctx.lastPoint.y, L.x1, L.y1, L.x2, L.y2, L.x, L.y);
					U.push(Math.floor((at.y + V) / O) + 1), U.push(Math.floor((at.y + at.h + V) / O) + 1);
					break;
				case "rect":
					U.push(Math.floor((L.y + V) / O) + 1), U.push(Math.floor((L.y + L.h + V) / O) + 1)
			}
			for (var it = 0; it < U.length; it += 1)
				for (; this.pdf.internal.getNumberOfPages() < U[it];) _.call(this);
			return U
		},
		_ = function() {
			var L = this.fillStyle,
				M = this.strokeStyle,
				O = this.font,
				U = this.lineCap,
				V = this.lineWidth,
				nt = this.lineJoin;
			this.pdf.addPage(), this.fillStyle = L, this.strokeStyle = M, this.font = O, this.lineCap = U, this.lineWidth = V, this.lineJoin = nt
		},
		j = function(L, M, O) {
			for (var U = 0; U < L.length; U++) switch (L[U].type) {
				case "bct":
					L[U].x2 += M, L[U].y2 += O;
				case "qct":
					L[U].x1 += M, L[U].y1 += O;
				case "mt":
				case "lt":
				case "arc":
				default:
					L[U].x += M, L[U].y += O
			}
			return L
		},
		z = function(L) {
			return L.sort(function(M, O) {
				return M - O
			})
		},
		$ = function(L, M) {
			for (var O, U, V = this.fillStyle, nt = this.strokeStyle, at = this.lineCap, it = this.lineWidth, xt = Math.abs(it * this.ctx.transform.scaleX), Lt = this.lineJoin, Pt = JSON.parse(JSON.stringify(this.path)), It = JSON.parse(JSON.stringify(this.path)), Ut = [], gt = 0; gt < It.length; gt++)
				if (It[gt].x !== void 0)
					for (var B = F.call(this, It[gt]), Xt = 0; Xt < B.length; Xt += 1) Ut.indexOf(B[Xt]) === -1 && Ut.push(B[Xt]);
			for (var Bt = 0; Bt < Ut.length; Bt++)
				for (; this.pdf.internal.getNumberOfPages() < Ut[Bt];) _.call(this);
			if (z(Ut), this.autoPaging)
				for (var At = Ut[0], St = Ut[Ut.length - 1], jt = At; jt < St + 1; jt++) {
					this.pdf.setPage(jt), this.fillStyle = V, this.strokeStyle = nt, this.lineCap = at, this.lineWidth = xt, this.lineJoin = Lt;
					var Ct = this.pdf.internal.pageSize.width - this.margin[3] - this.margin[1],
						qt = jt === 1 ? this.posY + this.margin[0] : this.margin[0],
						Jt = this.pdf.internal.pageSize.height - this.posY - this.margin[0] - this.margin[2],
						Qt = this.pdf.internal.pageSize.height - this.margin[0] - this.margin[2],
						ne = jt === 1 ? 0 : Jt + (jt - 2) * Qt;
					if (this.ctx.clip_path.length !== 0) {
						var re = this.path;
						O = JSON.parse(JSON.stringify(this.ctx.clip_path)), this.path = j(O, this.posX + this.margin[3], -ne + qt + this.ctx.prevPageLastElemOffset), rt.call(this, L, !0), this.path = re
					}
					if (U = JSON.parse(JSON.stringify(Pt)), this.path = j(U, this.posX + this.margin[3], -ne + qt + this.ctx.prevPageLastElemOffset), M === !1 || jt === 0) {
						var ue = (jt > At || jt < St) && A.call(this);
						ue && (this.pdf.saveGraphicsState(), this.pdf.rect(this.margin[3], this.margin[0], Ct, Qt, null).clip().discardPath()), rt.call(this, L, M), ue && this.pdf.restoreGraphicsState()
					}
					this.lineWidth = it
				} else this.lineWidth = xt, rt.call(this, L, M), this.lineWidth = it;
			this.path = Pt
		},
		rt = function(L, M) {
			if ((L !== "stroke" || M || !I.call(this)) && (L === "stroke" || M || !d.call(this))) {
				for (var O, U, V = [], nt = this.path, at = 0; at < nt.length; at++) {
					var it = nt[at];
					switch (it.type) {
						case "begin":
							V.push({
								begin: !0
							});
							break;
						case "close":
							V.push({
								close: !0
							});
							break;
						case "mt":
							V.push({
								start: it,
								deltas: [],
								abs: []
							});
							break;
						case "lt":
							var xt = V.length;
							if (nt[at - 1] && !isNaN(nt[at - 1].x) && (O = [it.x - nt[at - 1].x, it.y - nt[at - 1].y], xt > 0)) {
								for (; xt >= 0; xt--)
									if (V[xt - 1].close !== !0 && V[xt - 1].begin !== !0) {
										V[xt - 1].deltas.push(O), V[xt - 1].abs.push(it);
										break
									}
							}
							break;
						case "bct":
							O = [it.x1 - nt[at - 1].x, it.y1 - nt[at - 1].y, it.x2 - nt[at - 1].x, it.y2 - nt[at - 1].y, it.x - nt[at - 1].x, it.y - nt[at - 1].y], V[V.length - 1].deltas.push(O);
							break;
						case "qct":
							var Lt = nt[at - 1].x + 2 / 3 * (it.x1 - nt[at - 1].x),
								Pt = nt[at - 1].y + 2 / 3 * (it.y1 - nt[at - 1].y),
								It = it.x + 2 / 3 * (it.x1 - it.x),
								Ut = it.y + 2 / 3 * (it.y1 - it.y),
								gt = it.x,
								B = it.y;
							O = [Lt - nt[at - 1].x, Pt - nt[at - 1].y, It - nt[at - 1].x, Ut - nt[at - 1].y, gt - nt[at - 1].x, B - nt[at - 1].y], V[V.length - 1].deltas.push(O);
							break;
						case "arc":
							V.push({
								deltas: [],
								abs: [],
								arc: !0
							}), Array.isArray(V[V.length - 1].abs) && V[V.length - 1].abs.push(it)
					}
				}
				U = M ? null : L === "stroke" ? "stroke" : "fill";
				for (var Xt = !1, Bt = 0; Bt < V.length; Bt++)
					if (V[Bt].arc)
						for (var At = V[Bt].abs, St = 0; St < At.length; St++) {
							var jt = At[St];
							jt.type === "arc" ? R.call(this, jt.x, jt.y, jt.radius, jt.startAngle, jt.endAngle, jt.counterclockwise, void 0, M, !Xt) : q.call(this, jt.x, jt.y), Xt = !0
						} else if (V[Bt].close === !0) this.pdf.internal.out("h"), Xt = !1;
						else if (V[Bt].begin !== !0) {
					var Ct = V[Bt].start.x,
						qt = V[Bt].start.y;
					T.call(this, V[Bt].deltas, Ct, qt), Xt = !0
				}
				U && K.call(this, U), M && ot.call(this)
			}
		},
		lt = function(L) {
			var M = this.pdf.internal.getFontSize() / this.pdf.internal.scaleFactor,
				O = M * (this.pdf.internal.getLineHeightFactor() - 1);
			switch (this.ctx.textBaseline) {
				case "bottom":
					return L - O;
				case "top":
					return L + M - O;
				case "hanging":
					return L + M - 2 * O;
				case "middle":
					return L + M / 2 - O;
				case "ideographic":
					return L;
				case "alphabetic":
				default:
					return L
			}
		},
		Y = function(L) {
			return L + this.pdf.internal.getFontSize() / this.pdf.internal.scaleFactor * (this.pdf.internal.getLineHeightFactor() - 1)
		};
	m.prototype.createLinearGradient = function() {
		var L = function() {};
		return L.colorStops = [], L.addColorStop = function(M, O) {
			this.colorStops.push([M, O])
		}, L.getColor = function() {
			return this.colorStops.length === 0 ? "#000000" : this.colorStops[0][1]
		}, L.isCanvasGradient = !0, L
	}, m.prototype.createPattern = function() {
		return this.createLinearGradient()
	}, m.prototype.createRadialGradient = function() {
		return this.createLinearGradient()
	};
	var R = function(L, M, O, U, V, nt, at, it, xt) {
			for (var Lt = st.call(this, O, U, V, nt), Pt = 0; Pt < Lt.length; Pt++) {
				var It = Lt[Pt];
				Pt === 0 && (xt ? P.call(this, It.x1 + L, It.y1 + M) : q.call(this, It.x1 + L, It.y1 + M)), ct.call(this, L, M, It.x2, It.y2, It.x3, It.y3, It.x4, It.y4)
			}
			it ? ot.call(this) : K.call(this, at)
		},
		K = function(L) {
			switch (L) {
				case "stroke":
					this.pdf.internal.out("S");
					break;
				case "fill":
					this.pdf.internal.out("f")
			}
		},
		ot = function() {
			this.pdf.clip(), this.pdf.discardPath()
		},
		P = function(L, M) {
			this.pdf.internal.out(n(L) + " " + i(M) + " m")
		},
		C = function(L) {
			var M;
			switch (L.align) {
				case "right":
				case "end":
					M = "right";
					break;
				case "center":
					M = "center";
					break;
				case "left":
				case "start":
				default:
					M = "left"
			}
			var O = this.pdf.getTextDimensions(L.text),
				U = lt.call(this, L.y),
				V = Y.call(this, U) - O.h,
				nt = this.ctx.transform.applyToPoint(new u(L.x, U)),
				at = this.ctx.transform.decompose(),
				it = new f;
			it = (it = (it = it.multiply(at.translate)).multiply(at.skew)).multiply(at.scale);
			for (var xt, Lt, Pt, It = this.ctx.transform.applyToRectangle(new c(L.x, U, O.w, O.h)), Ut = it.applyToRectangle(new c(L.x, V, O.w, O.h)), gt = F.call(this, Ut), B = [], Xt = 0; Xt < gt.length; Xt += 1) B.indexOf(gt[Xt]) === -1 && B.push(gt[Xt]);
			if (z(B), this.autoPaging)
				for (var Bt = B[0], At = B[B.length - 1], St = Bt; St < At + 1; St++) {
					this.pdf.setPage(St);
					var jt = St === 1 ? this.posY + this.margin[0] : this.margin[0],
						Ct = this.pdf.internal.pageSize.height - this.posY - this.margin[0] - this.margin[2],
						qt = this.pdf.internal.pageSize.height - this.margin[2],
						Jt = qt - this.margin[0],
						Qt = this.pdf.internal.pageSize.width - this.margin[1],
						ne = Qt - this.margin[3],
						re = St === 1 ? 0 : Ct + (St - 2) * Jt;
					if (this.ctx.clip_path.length !== 0) {
						var ue = this.path;
						xt = JSON.parse(JSON.stringify(this.ctx.clip_path)), this.path = j(xt, this.posX + this.margin[3], -1 * re + jt), rt.call(this, "fill", !0), this.path = ue
					}
					var Wt = j([JSON.parse(JSON.stringify(Ut))], this.posX + this.margin[3], -re + jt + this.ctx.prevPageLastElemOffset)[0];
					L.scale >= .01 && (Lt = this.pdf.internal.getFontSize(), this.pdf.setFontSize(Lt * L.scale), Pt = this.lineWidth, this.lineWidth = Pt * L.scale);
					var ie = this.autoPaging !== "text";
					if (ie || Wt.y + Wt.h <= qt) {
						if (ie || Wt.y >= jt && Wt.x <= Qt) {
							var kt = ie ? L.text : this.pdf.splitTextToSize(L.text, L.maxWidth || Qt - Wt.x)[0],
								$e = j([JSON.parse(JSON.stringify(It))], this.posX + this.margin[3], -re + jt + this.ctx.prevPageLastElemOffset)[0],
								le = ie && (St > Bt || St < At) && A.call(this);
							le && (this.pdf.saveGraphicsState(), this.pdf.rect(this.margin[3], this.margin[0], ne, Jt, null).clip().discardPath()), this.pdf.text(kt, $e.x, $e.y, {
								angle: L.angle,
								align: M,
								renderingMode: L.renderingMode
							}), le && this.pdf.restoreGraphicsState()
						}
					} else Wt.y < qt && (this.ctx.prevPageLastElemOffset += qt - Wt.y);
					L.scale >= .01 && (this.pdf.setFontSize(Lt), this.lineWidth = Pt)
				} else L.scale >= .01 && (Lt = this.pdf.internal.getFontSize(), this.pdf.setFontSize(Lt * L.scale), Pt = this.lineWidth, this.lineWidth = Pt * L.scale), this.pdf.text(L.text, nt.x + this.posX, nt.y + this.posY, {
					angle: L.angle,
					align: M,
					renderingMode: L.renderingMode,
					maxWidth: L.maxWidth
				}), L.scale >= .01 && (this.pdf.setFontSize(Lt), this.lineWidth = Pt)
		},
		q = function(L, M, O, U) {
			O = O || 0, U = U || 0, this.pdf.internal.out(n(L + O) + " " + i(M + U) + " l")
		},
		T = function(L, M, O) {
			return this.pdf.lines(L, M, O, null, null)
		},
		ct = function(L, M, O, U, V, nt, at, it) {
			this.pdf.internal.out([t(o(O + L)), t(a(U + M)), t(o(V + L)), t(a(nt + M)), t(o(at + L)), t(a(it + M)), "c"].join(" "))
		},
		st = function(L, M, O, U) {
			for (var V = 2 * Math.PI, nt = Math.PI / 2; M > O;) M -= V;
			var at = Math.abs(O - M);
			at < V && U && (at = V - at);
			for (var it = [], xt = U ? -1 : 1, Lt = M; at > 1e-5;) {
				var Pt = Lt + xt * Math.min(at, nt);
				it.push(ht.call(this, L, Lt, Pt)), at -= Math.abs(Pt - Lt), Lt = Pt
			}
			return it
		},
		ht = function(L, M, O) {
			var U = (O - M) / 2,
				V = L * Math.cos(U),
				nt = L * Math.sin(U),
				at = V,
				it = -nt,
				xt = at * at + it * it,
				Lt = xt + at * V + it * nt,
				Pt = 4 / 3 * (Math.sqrt(2 * xt * Lt) - Lt) / (at * nt - it * V),
				It = at - Pt * it,
				Ut = it + Pt * at,
				gt = It,
				B = -Ut,
				Xt = U + M,
				Bt = Math.cos(Xt),
				At = Math.sin(Xt);
			return {
				x1: L * Math.cos(M),
				y1: L * Math.sin(M),
				x2: It * Bt - Ut * At,
				y2: It * At + Ut * Bt,
				x3: gt * Bt - B * At,
				y3: gt * At + B * Bt,
				x4: L * Math.cos(O),
				y4: L * Math.sin(O)
			}
		},
		Q = function(L) {
			return 180 * L / Math.PI
		},
		dt = function(L, M, O, U, V, nt) {
			var at = L + .5 * (O - L),
				it = M + .5 * (U - M),
				xt = V + .5 * (O - V),
				Lt = nt + .5 * (U - nt),
				Pt = Math.min(L, V, at, xt),
				It = Math.max(L, V, at, xt),
				Ut = Math.min(M, nt, it, Lt),
				gt = Math.max(M, nt, it, Lt);
			return new c(Pt, Ut, It - Pt, gt - Ut)
		},
		ut = function(L, M, O, U, V, nt, at, it) {
			var xt, Lt, Pt, It, Ut, gt, B, Xt, Bt, At, St, jt, Ct, qt, Jt = O - L,
				Qt = U - M,
				ne = V - O,
				re = nt - U,
				ue = at - V,
				Wt = it - nt;
			for (Lt = 0; Lt < 41; Lt++) Bt = (B = (Pt = L + (xt = Lt / 40) * Jt) + xt * ((Ut = O + xt * ne) - Pt)) + xt * (Ut + xt * (V + xt * ue - Ut) - B), At = (Xt = (It = M + xt * Qt) + xt * ((gt = U + xt * re) - It)) + xt * (gt + xt * (nt + xt * Wt - gt) - Xt), Lt == 0 ? (St = Bt, jt = At, Ct = Bt, qt = At) : (St = Math.min(St, Bt), jt = Math.min(jt, At), Ct = Math.max(Ct, Bt), qt = Math.max(qt, At));
			return new c(Math.round(St), Math.round(jt), Math.round(Ct - St), Math.round(qt - jt))
		},
		_t = function() {
			if (this.prevLineDash || this.ctx.lineDash.length || this.ctx.lineDashOffset) {
				var L, M, O = (L = this.ctx.lineDash, M = this.ctx.lineDashOffset, JSON.stringify({
					lineDash: L,
					lineDashOffset: M
				}));
				this.prevLineDash !== O && (this.pdf.setLineDash(this.ctx.lineDash, this.ctx.lineDashOffset), this.prevLineDash = O)
			}
		}
})(Gt.API),
function(e) {
	var t = function(a) {
			var u, c, f, p, v, m, y, d, I, A;
			for (c = [], f = 0, p = (a += u = "\0\0\0\0".slice(a.length % 4 || 4)).length; p > f; f += 4)(v = (a.charCodeAt(f) << 24) + (a.charCodeAt(f + 1) << 16) + (a.charCodeAt(f + 2) << 8) + a.charCodeAt(f + 3)) !== 0 ? (m = (v = ((v = ((v = ((v = (v - (A = v % 85)) / 85) - (I = v % 85)) / 85) - (d = v % 85)) / 85) - (y = v % 85)) / 85) % 85, c.push(m + 33, y + 33, d + 33, I + 33, A + 33)) : c.push(122);
			return function(F, _) {
				for (var j = _; j > 0; j--) F.pop()
			}(c, u.length), String.fromCharCode.apply(String, c) + "~>"
		},
		n = function(a) {
			var u, c, f, p, v, m = String,
				y = "length",
				d = 255,
				I = "charCodeAt",
				A = "slice",
				F = "replace";
			for (a[A](-2), a = a[A](0, -2)[F](/\s/g, "")[F]("z", "!!!!!"), f = [], p = 0, v = (a += u = "uuuuu" [A](a[y] % 5 || 5))[y]; v > p; p += 5) c = 52200625 * (a[I](p) - 33) + 614125 * (a[I](p + 1) - 33) + 7225 * (a[I](p + 2) - 33) + 85 * (a[I](p + 3) - 33) + (a[I](p + 4) - 33), f.push(d & c >> 24, d & c >> 16, d & c >> 8, d & c);
			return function(_, j) {
				for (var z = j; z > 0; z--) _.pop()
			}(f, u[y]), m.fromCharCode.apply(m, f)
		},
		i = function(a) {
			var u = new RegExp(/^([0-9A-Fa-f]{2})+$/);
			if ((a = a.replace(/\s/g, "")).indexOf(">") !== -1 && (a = a.substr(0, a.indexOf(">"))), a.length % 2 && (a += "0"), u.test(a) === !1) return "";
			for (var c = "", f = 0; f < a.length; f += 2) c += String.fromCharCode("0x" + (a[f] + a[f + 1]));
			return c
		},
		o = function(a) {
			for (var u = new Uint8Array(a.length), c = a.length; c--;) u[c] = a.charCodeAt(c);
			return a = (u = lu(u)).reduce(function(f, p) {
				return f + String.fromCharCode(p)
			}, "")
		};
	e.processDataByFilters = function(a, u) {
		var c = 0,
			f = a || "",
			p = [];
		for (typeof(u = u || []) == "string" && (u = [u]), c = 0; c < u.length; c += 1) switch (u[c]) {
			case "ASCII85Decode":
			case "/ASCII85Decode":
				f = n(f), p.push("/ASCII85Encode");
				break;
			case "ASCII85Encode":
			case "/ASCII85Encode":
				f = t(f), p.push("/ASCII85Decode");
				break;
			case "ASCIIHexDecode":
			case "/ASCIIHexDecode":
				f = i(f), p.push("/ASCIIHexEncode");
				break;
			case "ASCIIHexEncode":
			case "/ASCIIHexEncode":
				f = f.split("").map(function(v) {
					return ("0" + v.charCodeAt().toString(16)).slice(-2)
				}).join("") + ">", p.push("/ASCIIHexDecode");
				break;
			case "FlateEncode":
			case "/FlateEncode":
				f = o(f), p.push("/FlateDecode");
				break;
			default:
				throw new Error('The filter: "' + u[c] + '" is not implemented')
		}
		return {
			data: f,
			reverseChain: p.reverse().join(" ")
		}
	}
}(Gt.API),
function(e) {
	e.loadFile = function(t, n, i) {
		return function(o, a, u) {
			a = a !== !1, u = typeof u == "function" ? u : function() {};
			var c = void 0;
			try {
				c = function(f, p, v) {
					var m = new XMLHttpRequest,
						y = 0,
						d = function(I) {
							var A = I.length,
								F = [],
								_ = String.fromCharCode;
							for (y = 0; y < A; y += 1) F.push(_(255 & I.charCodeAt(y)));
							return F.join("")
						};
					if (m.open("GET", f, !p), m.overrideMimeType("text/plain; charset=x-user-defined"), p === !1 && (m.onload = function() {
							m.status === 200 ? v(d(this.responseText)) : v(void 0)
						}), m.send(null), p && m.status === 200) return d(m.responseText)
				}(o, a, u)
			} catch {}
			return c
		}(t, n, i)
	}, e.loadImageFile = e.loadFile
}(Gt.API),
function(e) {
	function t() {
		return (Yt.html2canvas ? Promise.resolve(Yt.html2canvas) : Zs(() => import("./npgq2lecfbpv5wk8.js"), [])).catch(function(u) {
			return Promise.reject(new Error("Could not load html2canvas: " + u))
		}).then(function(u) {
			return u.default ? u.default : u
		})
	}

	function n() {
		return (Yt.DOMPurify ? Promise.resolve(Yt.DOMPurify) : Zs(() => import("./je2p3pj24b82d017.js"), [])).catch(function(u) {
			return Promise.reject(new Error("Could not load dompurify: " + u))
		}).then(function(u) {
			return u.default ? u.default : u
		})
	}
	var i = function(u) {
			var c = be(u);
			return c === "undefined" ? "undefined" : c === "string" || u instanceof String ? "string" : c === "number" || u instanceof Number ? "number" : c === "function" || u instanceof Function ? "function" : u && u.constructor === Array ? "array" : u && u.nodeType === 1 ? "element" : c === "object" ? "object" : "unknown"
		},
		o = function(u, c) {
			var f = document.createElement(u);
			for (var p in c.className && (f.className = c.className), c.innerHTML && c.dompurify && (f.innerHTML = c.dompurify.sanitize(c.innerHTML)), c.style) f.style[p] = c.style[p];
			return f
		},
		a = function u(c) {
			var f = Object.assign(u.convert(Promise.resolve()), JSON.parse(JSON.stringify(u.template))),
				p = u.convert(Promise.resolve(), f);
			return p = (p = p.setProgress(1, u, 1, [u])).set(c)
		};
	(a.prototype = Object.create(Promise.prototype)).constructor = a, a.convert = function(u, c) {
		return u.__proto__ = c || a.prototype, u
	}, a.template = {
		prop: {
			src: null,
			container: null,
			overlay: null,
			canvas: null,
			img: null,
			pdf: null,
			pageSize: null,
			callback: function() {}
		},
		progress: {
			val: 0,
			state: null,
			n: 0,
			stack: []
		},
		opt: {
			filename: "file.pdf",
			margin: [0, 0, 0, 0],
			enableLinks: !0,
			x: 0,
			y: 0,
			html2canvas: {},
			jsPDF: {},
			backgroundColor: "transparent"
		}
	}, a.prototype.from = function(u, c) {
		return this.then(function() {
			switch (c = c || function(f) {
					switch (i(f)) {
						case "string":
							return "string";
						case "element":
							return f.nodeName.toLowerCase() === "canvas" ? "canvas" : "element";
						default:
							return "unknown"
					}
				}(u)) {
				case "string":
					return this.then(n).then(function(f) {
						return this.set({
							src: o("div", {
								innerHTML: u,
								dompurify: f
							})
						})
					});
				case "element":
					return this.set({
						src: u
					});
				case "canvas":
					return this.set({
						canvas: u
					});
				case "img":
					return this.set({
						img: u
					});
				default:
					return this.error("Unknown source type.")
			}
		})
	}, a.prototype.to = function(u) {
		switch (u) {
			case "container":
				return this.toContainer();
			case "canvas":
				return this.toCanvas();
			case "img":
				return this.toImg();
			case "pdf":
				return this.toPdf();
			default:
				return this.error("Invalid target.")
		}
	}, a.prototype.toContainer = function() {
		return this.thenList([function() {
			return this.prop.src || this.error("Cannot duplicate - no source HTML.")
		}, function() {
			return this.prop.pageSize || this.setPageSize()
		}]).then(function() {
			var u = {
					position: "relative",
					display: "inline-block",
					width: (typeof this.opt.width != "number" || isNaN(this.opt.width) || typeof this.opt.windowWidth != "number" || isNaN(this.opt.windowWidth) ? Math.max(this.prop.src.clientWidth, this.prop.src.scrollWidth, this.prop.src.offsetWidth) : this.opt.windowWidth) + "px",
					left: 0,
					right: 0,
					top: 0,
					margin: "auto",
					backgroundColor: this.opt.backgroundColor
				},
				c = function f(p, v) {
					for (var m = p.nodeType === 3 ? document.createTextNode(p.nodeValue) : p.cloneNode(!1), y = p.firstChild; y; y = y.nextSibling) v !== !0 && y.nodeType === 1 && y.nodeName === "SCRIPT" || m.appendChild(f(y, v));
					return p.nodeType === 1 && (p.nodeName === "CANVAS" ? (m.width = p.width, m.height = p.height, m.getContext("2d").drawImage(p, 0, 0)) : p.nodeName !== "TEXTAREA" && p.nodeName !== "SELECT" || (m.value = p.value), m.addEventListener("load", function() {
						m.scrollTop = p.scrollTop, m.scrollLeft = p.scrollLeft
					}, !0)), m
				}(this.prop.src, this.opt.html2canvas.javascriptEnabled);
			c.tagName === "BODY" && (u.height = Math.max(document.body.scrollHeight, document.body.offsetHeight, document.documentElement.clientHeight, document.documentElement.scrollHeight, document.documentElement.offsetHeight) + "px"), this.prop.overlay = o("div", {
				className: "html2pdf__overlay",
				style: {
					position: "fixed",
					overflow: "hidden",
					zIndex: 1e3,
					left: "-100000px",
					right: 0,
					bottom: 0,
					top: 0
				}
			}), this.prop.container = o("div", {
				className: "html2pdf__container",
				style: u
			}), this.prop.container.appendChild(c), this.prop.container.firstChild.appendChild(o("div", {
				style: {
					clear: "both",
					border: "0 none transparent",
					margin: 0,
					padding: 0,
					height: 0
				}
			})), this.prop.container.style.float = "none", this.prop.overlay.appendChild(this.prop.container), document.body.appendChild(this.prop.overlay), this.prop.container.firstChild.style.position = "relative", this.prop.container.height = Math.max(this.prop.container.firstChild.clientHeight, this.prop.container.firstChild.scrollHeight, this.prop.container.firstChild.offsetHeight) + "px"
		})
	}, a.prototype.toCanvas = function() {
		var u = [function() {
			return document.body.contains(this.prop.container) || this.toContainer()
		}];
		return this.thenList(u).then(t).then(function(c) {
			var f = Object.assign({}, this.opt.html2canvas);
			return delete f.onrendered, c(this.prop.container, f)
		}).then(function(c) {
			(this.opt.html2canvas.onrendered || function() {})(c), this.prop.canvas = c, document.body.removeChild(this.prop.overlay)
		})
	}, a.prototype.toContext2d = function() {
		var u = [function() {
			return document.body.contains(this.prop.container) || this.toContainer()
		}];
		return this.thenList(u).then(t).then(function(c) {
			var f = this.opt.jsPDF,
				p = this.opt.fontFaces,
				v = typeof this.opt.width != "number" || isNaN(this.opt.width) || typeof this.opt.windowWidth != "number" || isNaN(this.opt.windowWidth) ? 1 : this.opt.width / this.opt.windowWidth,
				m = Object.assign({
					async: !0,
					allowTaint: !0,
					scale: v,
					scrollX: this.opt.scrollX || 0,
					scrollY: this.opt.scrollY || 0,
					backgroundColor: "#ffffff",
					imageTimeout: 15e3,
					logging: !0,
					proxy: null,
					removeContainer: !0,
					foreignObjectRendering: !1,
					useCORS: !1
				}, this.opt.html2canvas);
			if (delete m.onrendered, f.context2d.autoPaging = this.opt.autoPaging === void 0 || this.opt.autoPaging, f.context2d.posX = this.opt.x, f.context2d.posY = this.opt.y, f.context2d.margin = this.opt.margin, f.context2d.fontFaces = p, p)
				for (var y = 0; y < p.length; ++y) {
					var d = p[y],
						I = d.src.find(function(A) {
							return A.format === "truetype"
						});
					I && f.addFont(I.url, d.ref.name, d.ref.style)
				}
			return m.windowHeight = m.windowHeight || 0, m.windowHeight = m.windowHeight == 0 ? Math.max(this.prop.container.clientHeight, this.prop.container.scrollHeight, this.prop.container.offsetHeight) : m.windowHeight, f.context2d.save(!0), c(this.prop.container, m)
		}).then(function(c) {
			this.opt.jsPDF.context2d.restore(!0), (this.opt.html2canvas.onrendered || function() {})(c), this.prop.canvas = c, document.body.removeChild(this.prop.overlay)
		})
	}, a.prototype.toImg = function() {
		return this.thenList([function() {
			return this.prop.canvas || this.toCanvas()
		}]).then(function() {
			var u = this.prop.canvas.toDataURL("image/" + this.opt.image.type, this.opt.image.quality);
			this.prop.img = document.createElement("img"), this.prop.img.src = u
		})
	}, a.prototype.toPdf = function() {
		return this.thenList([function() {
			return this.toContext2d()
		}]).then(function() {
			this.prop.pdf = this.prop.pdf || this.opt.jsPDF
		})
	}, a.prototype.output = function(u, c, f) {
		return (f = f || "pdf").toLowerCase() === "img" || f.toLowerCase() === "image" ? this.outputImg(u, c) : this.outputPdf(u, c)
	}, a.prototype.outputPdf = function(u, c) {
		return this.thenList([function() {
			return this.prop.pdf || this.toPdf()
		}]).then(function() {
			return this.prop.pdf.output(u, c)
		})
	}, a.prototype.outputImg = function(u) {
		return this.thenList([function() {
			return this.prop.img || this.toImg()
		}]).then(function() {
			switch (u) {
				case void 0:
				case "img":
					return this.prop.img;
				case "datauristring":
				case "dataurlstring":
					return this.prop.img.src;
				case "datauri":
				case "dataurl":
					return document.location.href = this.prop.img.src;
				default:
					throw 'Image output type "' + u + '" is not supported.'
			}
		})
	}, a.prototype.save = function(u) {
		return this.thenList([function() {
			return this.prop.pdf || this.toPdf()
		}]).set(u ? {
			filename: u
		} : null).then(function() {
			this.prop.pdf.save(this.opt.filename)
		})
	}, a.prototype.doCallback = function() {
		return this.thenList([function() {
			return this.prop.pdf || this.toPdf()
		}]).then(function() {
			this.prop.callback(this.prop.pdf)
		})
	}, a.prototype.set = function(u) {
		if (i(u) !== "object") return this;
		var c = Object.keys(u || {}).map(function(f) {
			if (f in a.template.prop) return function() {
				this.prop[f] = u[f]
			};
			switch (f) {
				case "margin":
					return this.setMargin.bind(this, u.margin);
				case "jsPDF":
					return function() {
						return this.opt.jsPDF = u.jsPDF, this.setPageSize()
					};
				case "pageSize":
					return this.setPageSize.bind(this, u.pageSize);
				default:
					return function() {
						this.opt[f] = u[f]
					}
			}
		}, this);
		return this.then(function() {
			return this.thenList(c)
		})
	}, a.prototype.get = function(u, c) {
		return this.then(function() {
			var f = u in a.template.prop ? this.prop[u] : this.opt[u];
			return c ? c(f) : f
		})
	}, a.prototype.setMargin = function(u) {
		return this.then(function() {
			switch (i(u)) {
				case "number":
					u = [u, u, u, u];
				case "array":
					if (u.length === 2 && (u = [u[0], u[1], u[0], u[1]]), u.length === 4) break;
				default:
					return this.error("Invalid margin array.")
			}
			this.opt.margin = u
		}).then(this.setPageSize)
	}, a.prototype.setPageSize = function(u) {
		function c(f, p) {
			return Math.floor(f * p / 72 * 96)
		}
		return this.then(function() {
			(u = u || Gt.getPageSize(this.opt.jsPDF)).hasOwnProperty("inner") || (u.inner = {
				width: u.width - this.opt.margin[1] - this.opt.margin[3],
				height: u.height - this.opt.margin[0] - this.opt.margin[2]
			}, u.inner.px = {
				width: c(u.inner.width, u.k),
				height: c(u.inner.height, u.k)
			}, u.inner.ratio = u.inner.height / u.inner.width), this.prop.pageSize = u
		})
	}, a.prototype.setProgress = function(u, c, f, p) {
		return u != null && (this.progress.val = u), c != null && (this.progress.state = c), f != null && (this.progress.n = f), p != null && (this.progress.stack = p), this.progress.ratio = this.progress.val / this.progress.state, this
	}, a.prototype.updateProgress = function(u, c, f, p) {
		return this.setProgress(u ? this.progress.val + u : null, c || null, f ? this.progress.n + f : null, p ? this.progress.stack.concat(p) : null)
	}, a.prototype.then = function(u, c) {
		var f = this;
		return this.thenCore(u, c, function(p, v) {
			return f.updateProgress(null, null, 1, [p]), Promise.prototype.then.call(this, function(m) {
				return f.updateProgress(null, p), m
			}).then(p, v).then(function(m) {
				return f.updateProgress(1), m
			})
		})
	}, a.prototype.thenCore = function(u, c, f) {
		f = f || Promise.prototype.then, u && (u = u.bind(this)), c && (c = c.bind(this));
		var p = Promise.toString().indexOf("[native code]") !== -1 && Promise.name === "Promise" ? this : a.convert(Object.assign({}, this), Promise.prototype),
			v = f.call(p, u, c);
		return a.convert(v, this.__proto__)
	}, a.prototype.thenExternal = function(u, c) {
		return Promise.prototype.then.call(this, u, c)
	}, a.prototype.thenList = function(u) {
		var c = this;
		return u.forEach(function(f) {
			c = c.thenCore(f)
		}), c
	}, a.prototype.catch = function(u) {
		u && (u = u.bind(this));
		var c = Promise.prototype.catch.call(this, u);
		return a.convert(c, this)
	}, a.prototype.catchExternal = function(u) {
		return Promise.prototype.catch.call(this, u)
	}, a.prototype.error = function(u) {
		return this.then(function() {
			throw new Error(u)
		})
	}, a.prototype.using = a.prototype.set, a.prototype.saveAs = a.prototype.save, a.prototype.export = a.prototype.output, a.prototype.run = a.prototype.then, Gt.getPageSize = function(u, c, f) {
		if (be(u) === "object") {
			var p = u;
			u = p.orientation, c = p.unit || c, f = p.format || f
		}
		c = c || "mm", f = f || "a4", u = ("" + (u || "P")).toLowerCase();
		var v, m = ("" + f).toLowerCase(),
			y = {
				a0: [2383.94, 3370.39],
				a1: [1683.78, 2383.94],
				a2: [1190.55, 1683.78],
				a3: [841.89, 1190.55],
				a4: [595.28, 841.89],
				a5: [419.53, 595.28],
				a6: [297.64, 419.53],
				a7: [209.76, 297.64],
				a8: [147.4, 209.76],
				a9: [104.88, 147.4],
				a10: [73.7, 104.88],
				b0: [2834.65, 4008.19],
				b1: [2004.09, 2834.65],
				b2: [1417.32, 2004.09],
				b3: [1000.63, 1417.32],
				b4: [708.66, 1000.63],
				b5: [498.9, 708.66],
				b6: [354.33, 498.9],
				b7: [249.45, 354.33],
				b8: [175.75, 249.45],
				b9: [124.72, 175.75],
				b10: [87.87, 124.72],
				c0: [2599.37, 3676.54],
				c1: [1836.85, 2599.37],
				c2: [1298.27, 1836.85],
				c3: [918.43, 1298.27],
				c4: [649.13, 918.43],
				c5: [459.21, 649.13],
				c6: [323.15, 459.21],
				c7: [229.61, 323.15],
				c8: [161.57, 229.61],
				c9: [113.39, 161.57],
				c10: [79.37, 113.39],
				dl: [311.81, 623.62],
				letter: [612, 792],
				"government-letter": [576, 756],
				legal: [612, 1008],
				"junior-legal": [576, 360],
				ledger: [1224, 792],
				tabloid: [792, 1224],
				"credit-card": [153, 243]
			};
		switch (c) {
			case "pt":
				v = 1;
				break;
			case "mm":
				v = 72 / 25.4;
				break;
			case "cm":
				v = 72 / 2.54;
				break;
			case "in":
				v = 72;
				break;
			case "px":
				v = .75;
				break;
			case "pc":
			case "em":
				v = 12;
				break;
			case "ex":
				v = 6;
				break;
			default:
				throw "Invalid unit: " + c
		}
		var d, I = 0,
			A = 0;
		if (y.hasOwnProperty(m)) I = y[m][1] / v, A = y[m][0] / v;
		else try {
			I = f[1], A = f[0]
		} catch {
			throw new Error("Invalid format: " + f)
		}
		if (u === "p" || u === "portrait") u = "p", A > I && (d = A, A = I, I = d);
		else {
			if (u !== "l" && u !== "landscape") throw "Invalid orientation: " + u;
			u = "l", I > A && (d = A, A = I, I = d)
		}
		return {
			width: A,
			height: I,
			unit: c,
			k: v,
			orientation: u
		}
	}, e.html = function(u, c) {
		(c = c || {}).callback = c.callback || function() {}, c.html2canvas = c.html2canvas || {}, c.html2canvas.canvas = c.html2canvas.canvas || this.canvas, c.jsPDF = c.jsPDF || this, c.fontFaces = c.fontFaces ? c.fontFaces.map(gu) : null;
		var f = new a(c);
		return c.worker ? f : f.from(u).doCallback()
	}
}(Gt.API), Gt.API.addJS = function(e) {
		return El = e, this.internal.events.subscribe("postPutResources", function() {
			Eo = this.internal.newObject(), this.internal.out("<<"), this.internal.out("/Names [(EmbeddedJS) " + (Eo + 1) + " 0 R]"), this.internal.out(">>"), this.internal.out("endobj"), jl = this.internal.newObject(), this.internal.out("<<"), this.internal.out("/S /JavaScript"), this.internal.out("/JS (" + El + ")"), this.internal.out(">>"), this.internal.out("endobj")
		}), this.internal.events.subscribe("putCatalog", function() {
			Eo !== void 0 && jl !== void 0 && this.internal.out("/Names <</JavaScript " + Eo + " 0 R>>")
		}), this
	},
	function(e) {
		var t;
		e.events.push(["postPutResources", function() {
			var n = this,
				i = /^(\d+) 0 obj$/;
			if (this.outline.root.children.length > 0)
				for (var o = n.outline.render().split(/\r\n/), a = 0; a < o.length; a++) {
					var u = o[a],
						c = i.exec(u);
					if (c != null) {
						var f = c[1];
						n.internal.newObjectDeferredBegin(f, !1)
					}
					n.internal.write(u)
				}
			if (this.outline.createNamedDestinations) {
				var p = this.internal.pages.length,
					v = [];
				for (a = 0; a < p; a++) {
					var m = n.internal.newObject();
					v.push(m);
					var y = n.internal.getPageInfo(a + 1);
					n.internal.write("<< /D[" + y.objId + " 0 R /XYZ null null null]>> endobj")
				}
				var d = n.internal.newObject();
				for (n.internal.write("<< /Names [ "), a = 0; a < v.length; a++) n.internal.write("(page_" + (a + 1) + ")" + v[a] + " 0 R");
				n.internal.write(" ] >>", "endobj"), t = n.internal.newObject(), n.internal.write("<< /Dests " + d + " 0 R"), n.internal.write(">>", "endobj")
			}
		}]), e.events.push(["putCatalog", function() {
			this.outline.root.children.length > 0 && (this.internal.write("/Outlines", this.outline.makeRef(this.outline.root)), this.outline.createNamedDestinations && this.internal.write("/Names " + t + " 0 R"))
		}]), e.events.push(["initialized", function() {
			var n = this;
			n.outline = {
				createNamedDestinations: !1,
				root: {
					children: []
				}
			}, n.outline.add = function(i, o, a) {
				var u = {
					title: o,
					options: a,
					children: []
				};
				return i == null && (i = this.root), i.children.push(u), u
			}, n.outline.render = function() {
				return this.ctx = {}, this.ctx.val = "", this.ctx.pdf = n, this.genIds_r(this.root), this.renderRoot(this.root), this.renderItems(this.root), this.ctx.val
			}, n.outline.genIds_r = function(i) {
				i.id = n.internal.newObjectDeferred();
				for (var o = 0; o < i.children.length; o++) this.genIds_r(i.children[o])
			}, n.outline.renderRoot = function(i) {
				this.objStart(i), this.line("/Type /Outlines"), i.children.length > 0 && (this.line("/First " + this.makeRef(i.children[0])), this.line("/Last " + this.makeRef(i.children[i.children.length - 1]))), this.line("/Count " + this.count_r({
					count: 0
				}, i)), this.objEnd()
			}, n.outline.renderItems = function(i) {
				for (var o = this.ctx.pdf.internal.getVerticalCoordinateString, a = 0; a < i.children.length; a++) {
					var u = i.children[a];
					this.objStart(u), this.line("/Title " + this.makeString(u.title)), this.line("/Parent " + this.makeRef(i)), a > 0 && this.line("/Prev " + this.makeRef(i.children[a - 1])), a < i.children.length - 1 && this.line("/Next " + this.makeRef(i.children[a + 1])), u.children.length > 0 && (this.line("/First " + this.makeRef(u.children[0])), this.line("/Last " + this.makeRef(u.children[u.children.length - 1])));
					var c = this.count = this.count_r({
						count: 0
					}, u);
					if (c > 0 && this.line("/Count " + c), u.options && u.options.pageNumber) {
						var f = n.internal.getPageInfo(u.options.pageNumber);
						this.line("/Dest [" + f.objId + " 0 R /XYZ 0 " + o(0) + " 0]")
					}
					this.objEnd()
				}
				for (var p = 0; p < i.children.length; p++) this.renderItems(i.children[p])
			}, n.outline.line = function(i) {
				this.ctx.val += i + `\r
`
			}, n.outline.makeRef = function(i) {
				return i.id + " 0 R"
			}, n.outline.makeString = function(i) {
				return "(" + n.internal.pdfEscape(i) + ")"
			}, n.outline.objStart = function(i) {
				this.ctx.val += `\r
` + i.id + ` 0 obj\r
<<\r
`
			}, n.outline.objEnd = function() {
				this.ctx.val += `>> \r
endobj\r
`
			}, n.outline.count_r = function(i, o) {
				for (var a = 0; a < o.children.length; a++) i.count++, this.count_r(i, o.children[a]);
				return i.count
			}
		}])
	}(Gt.API),
	function(e) {
		var t = [192, 193, 194, 195, 196, 197, 198, 199];
		e.processJPEG = function(n, i, o, a, u, c) {
			var f, p = this.decode.DCT_DECODE,
				v = null;
			if (typeof n == "string" || this.__addimage__.isArrayBuffer(n) || this.__addimage__.isArrayBufferView(n)) {
				switch (n = u || n, n = this.__addimage__.isArrayBuffer(n) ? new Uint8Array(n) : n, (f = function(m) {
						for (var y, d = 256 * m.charCodeAt(4) + m.charCodeAt(5), I = m.length, A = {
								width: 0,
								height: 0,
								numcomponents: 1
							}, F = 4; F < I; F += 2) {
							if (F += d, t.indexOf(m.charCodeAt(F + 1)) !== -1) {
								y = 256 * m.charCodeAt(F + 5) + m.charCodeAt(F + 6), A = {
									width: 256 * m.charCodeAt(F + 7) + m.charCodeAt(F + 8),
									height: y,
									numcomponents: m.charCodeAt(F + 9)
								};
								break
							}
							d = 256 * m.charCodeAt(F + 2) + m.charCodeAt(F + 3)
						}
						return A
					}(n = this.__addimage__.isArrayBufferView(n) ? this.__addimage__.arrayBufferToBinaryString(n) : n)).numcomponents) {
					case 1:
						c = this.color_spaces.DEVICE_GRAY;
						break;
					case 4:
						c = this.color_spaces.DEVICE_CMYK;
						break;
					case 3:
						c = this.color_spaces.DEVICE_RGB
				}
				v = {
					data: n,
					width: f.width,
					height: f.height,
					colorSpace: c,
					bitsPerComponent: 8,
					filter: p,
					index: i,
					alias: o
				}
			}
			return v
		}
	}(Gt.API);
var qi, Mo, Ml, Dl, Ol, Q2 = function() {
	var e, t, n;

	function i(a) {
		var u, c, f, p, v, m, y, d, I, A, F, _, j, z;
		for (this.data = a, this.pos = 8, this.palette = [], this.imgData = [], this.transparency = {}, this.animation = null, this.text = {}, m = null;;) {
			switch (u = this.readUInt32(), I = function() {
					var $, rt;
					for (rt = [], $ = 0; $ < 4; ++$) rt.push(String.fromCharCode(this.data[this.pos++]));
					return rt
				}.call(this).join("")) {
				case "IHDR":
					this.width = this.readUInt32(), this.height = this.readUInt32(), this.bits = this.data[this.pos++], this.colorType = this.data[this.pos++], this.compressionMethod = this.data[this.pos++], this.filterMethod = this.data[this.pos++], this.interlaceMethod = this.data[this.pos++];
					break;
				case "acTL":
					this.animation = {
						numFrames: this.readUInt32(),
						numPlays: this.readUInt32() || 1 / 0,
						frames: []
					};
					break;
				case "PLTE":
					this.palette = this.read(u);
					break;
				case "fcTL":
					m && this.animation.frames.push(m), this.pos += 4, m = {
						width: this.readUInt32(),
						height: this.readUInt32(),
						xOffset: this.readUInt32(),
						yOffset: this.readUInt32()
					}, v = this.readUInt16(), p = this.readUInt16() || 100, m.delay = 1e3 * v / p, m.disposeOp = this.data[this.pos++], m.blendOp = this.data[this.pos++], m.data = [];
					break;
				case "IDAT":
				case "fdAT":
					for (I === "fdAT" && (this.pos += 4, u -= 4), a = m?.data || this.imgData, _ = 0; 0 <= u ? _ < u : _ > u; 0 <= u ? ++_ : --_) a.push(this.data[this.pos++]);
					break;
				case "tRNS":
					switch (this.transparency = {}, this.colorType) {
						case 3:
							if (f = this.palette.length / 3, this.transparency.indexed = this.read(u), this.transparency.indexed.length > f) throw new Error("More transparent colors than palette size");
							if ((A = f - this.transparency.indexed.length) > 0)
								for (j = 0; 0 <= A ? j < A : j > A; 0 <= A ? ++j : --j) this.transparency.indexed.push(255);
							break;
						case 0:
							this.transparency.grayscale = this.read(u)[0];
							break;
						case 2:
							this.transparency.rgb = this.read(u)
					}
					break;
				case "tEXt":
					y = (F = this.read(u)).indexOf(0), d = String.fromCharCode.apply(String, F.slice(0, y)), this.text[d] = String.fromCharCode.apply(String, F.slice(y + 1));
					break;
				case "IEND":
					return m && this.animation.frames.push(m), this.colors = function() {
						switch (this.colorType) {
							case 0:
							case 3:
							case 4:
								return 1;
							case 2:
							case 6:
								return 3
						}
					}.call(this), this.hasAlphaChannel = (z = this.colorType) === 4 || z === 6, c = this.colors + (this.hasAlphaChannel ? 1 : 0), this.pixelBitlength = this.bits * c, this.colorSpace = function() {
						switch (this.colors) {
							case 1:
								return "DeviceGray";
							case 3:
								return "DeviceRGB"
						}
					}.call(this), void(this.imgData = new Uint8Array(this.imgData));
				default:
					this.pos += u
			}
			if (this.pos += 4, this.pos > this.data.length) throw new Error("Incomplete or corrupt PNG file")
		}
	}
	i.prototype.read = function(a) {
		var u, c;
		for (c = [], u = 0; 0 <= a ? u < a : u > a; 0 <= a ? ++u : --u) c.push(this.data[this.pos++]);
		return c
	}, i.prototype.readUInt32 = function() {
		return this.data[this.pos++] << 24 | this.data[this.pos++] << 16 | this.data[this.pos++] << 8 | this.data[this.pos++]
	}, i.prototype.readUInt16 = function() {
		return this.data[this.pos++] << 8 | this.data[this.pos++]
	}, i.prototype.decodePixels = function(a) {
		var u = this.pixelBitlength / 8,
			c = new Uint8Array(this.width * this.height * u),
			f = 0,
			p = this;
		if (a == null && (a = this.imgData), a.length === 0) return new Uint8Array(0);

		function v(m, y, d, I) {
			var A, F, _, j, z, $, rt, lt, Y, R, K, ot, P, C, q, T, ct, st, ht, Q, dt, ut = Math.ceil((p.width - m) / d),
				_t = Math.ceil((p.height - y) / I),
				L = p.width == ut && p.height == _t;
			for (C = u * ut, ot = L ? c : new Uint8Array(C * _t), $ = a.length, P = 0, F = 0; P < _t && f < $;) {
				switch (a[f++]) {
					case 0:
						for (j = ct = 0; ct < C; j = ct += 1) ot[F++] = a[f++];
						break;
					case 1:
						for (j = st = 0; st < C; j = st += 1) A = a[f++], z = j < u ? 0 : ot[F - u], ot[F++] = (A + z) % 256;
						break;
					case 2:
						for (j = ht = 0; ht < C; j = ht += 1) A = a[f++], _ = (j - j % u) / u, q = P && ot[(P - 1) * C + _ * u + j % u], ot[F++] = (q + A) % 256;
						break;
					case 3:
						for (j = Q = 0; Q < C; j = Q += 1) A = a[f++], _ = (j - j % u) / u, z = j < u ? 0 : ot[F - u], q = P && ot[(P - 1) * C + _ * u + j % u], ot[F++] = (A + Math.floor((z + q) / 2)) % 256;
						break;
					case 4:
						for (j = dt = 0; dt < C; j = dt += 1) A = a[f++], _ = (j - j % u) / u, z = j < u ? 0 : ot[F - u], P === 0 ? q = T = 0 : (q = ot[(P - 1) * C + _ * u + j % u], T = _ && ot[(P - 1) * C + (_ - 1) * u + j % u]), rt = z + q - T, lt = Math.abs(rt - z), R = Math.abs(rt - q), K = Math.abs(rt - T), Y = lt <= R && lt <= K ? z : R <= K ? q : T, ot[F++] = (A + Y) % 256;
						break;
					default:
						throw new Error("Invalid filter algorithm: " + a[f - 1])
				}
				if (!L) {
					var M = ((y + P * I) * p.width + m) * u,
						O = P * C;
					for (j = 0; j < ut; j += 1) {
						for (var U = 0; U < u; U += 1) c[M++] = ot[O++];
						M += (d - 1) * u
					}
				}
				P++
			}
		}
		return a = F2(a), p.interlaceMethod == 1 ? (v(0, 0, 8, 8), v(4, 0, 8, 8), v(0, 4, 4, 8), v(2, 0, 4, 4), v(0, 2, 2, 4), v(1, 0, 2, 2), v(0, 1, 1, 2)) : v(0, 0, 1, 1), c
	}, i.prototype.decodePalette = function() {
		var a, u, c, f, p, v, m, y, d;
		for (c = this.palette, v = this.transparency.indexed || [], p = new Uint8Array((v.length || 0) + c.length), f = 0, a = 0, u = m = 0, y = c.length; m < y; u = m += 3) p[f++] = c[u], p[f++] = c[u + 1], p[f++] = c[u + 2], p[f++] = (d = v[a++]) != null ? d : 255;
		return p
	}, i.prototype.copyToImageData = function(a, u) {
		var c, f, p, v, m, y, d, I, A, F, _;
		if (f = this.colors, A = null, c = this.hasAlphaChannel, this.palette.length && (A = (_ = this._decodedPalette) != null ? _ : this._decodedPalette = this.decodePalette(), f = 4, c = !0), I = (p = a.data || a).length, m = A || u, v = y = 0, f === 1)
			for (; v < I;) d = A ? 4 * u[v / 4] : y, F = m[d++], p[v++] = F, p[v++] = F, p[v++] = F, p[v++] = c ? m[d++] : 255, y = d;
		else
			for (; v < I;) d = A ? 4 * u[v / 4] : y, p[v++] = m[d++], p[v++] = m[d++], p[v++] = m[d++], p[v++] = c ? m[d++] : 255, y = d
	}, i.prototype.decode = function() {
		var a;
		return a = new Uint8Array(this.width * this.height * 4), this.copyToImageData(a, this.decodePixels()), a
	};
	var o = function() {
		if (Object.prototype.toString.call(Yt) === "[object Window]") {
			try {
				t = Yt.document.createElement("canvas"), n = t.getContext("2d")
			} catch {
				return !1
			}
			return !0
		}
		return !1
	};
	return o(), e = function(a) {
		var u;
		if (o() === !0) return n.width = a.width, n.height = a.height, n.clearRect(0, 0, a.width, a.height), n.putImageData(a, 0, 0), (u = new Image).src = t.toDataURL(), u;
		throw new Error("This method requires a Browser with Canvas-capability.")
	}, i.prototype.decodeFrames = function(a) {
		var u, c, f, p, v, m, y, d;
		if (this.animation) {
			for (d = [], c = v = 0, m = (y = this.animation.frames).length; v < m; c = ++v) u = y[c], f = a.createImageData(u.width, u.height), p = this.decodePixels(new Uint8Array(u.data)), this.copyToImageData(f, p), u.imageData = f, d.push(u.image = e(f));
			return d
		}
	}, i.prototype.renderFrame = function(a, u) {
		var c, f, p;
		return c = (f = this.animation.frames)[u], p = f[u - 1], u === 0 && a.clearRect(0, 0, this.width, this.height), p?.disposeOp === 1 ? a.clearRect(p.xOffset, p.yOffset, p.width, p.height) : p?.disposeOp === 2 && a.putImageData(p.imageData, p.xOffset, p.yOffset), c.blendOp === 0 && a.clearRect(c.xOffset, c.yOffset, c.width, c.height), a.drawImage(c.image, c.xOffset, c.yOffset)
	}, i.prototype.animate = function(a) {
		var u, c, f, p, v, m, y = this;
		return c = 0, m = this.animation, p = m.numFrames, f = m.frames, v = m.numPlays, (u = function() {
			var d, I;
			if (d = c++ % p, I = f[d], y.renderFrame(a, d), p > 1 && c / p < v) return y.animation._timeout = setTimeout(u, I.delay)
		})()
	}, i.prototype.stopAnimation = function() {
		var a;
		return clearTimeout((a = this.animation) != null ? a._timeout : void 0)
	}, i.prototype.render = function(a) {
		var u, c;
		return a._png && a._png.stopAnimation(), a._png = this, a.width = this.width, a.height = this.height, u = a.getContext("2d"), this.animation ? (this.decodeFrames(u), this.animate(u)) : (c = u.createImageData(this.width, this.height), this.copyToImageData(c, this.decodePixels()), u.putImageData(c, 0, 0))
	}, i
}();
/**
 * @license
 *
 * Copyright (c) 2014 James Robb, https://github.com/jamesbrobb
 *
 * Permission is hereby granted, free of charge, to any person obtaining
 * a copy of this software and associated documentation files (the
 * "Software"), to deal in the Software without restriction, including
 * without limitation the rights to use, copy, modify, merge, publish,
 * distribute, sublicense, and/or sell copies of the Software, and to
 * permit persons to whom the Software is furnished to do so, subject to
 * the following conditions:
 *
 * The above copyright notice and this permission notice shall be
 * included in all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
 * EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
 * MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
 * NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE
 * LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION
 * OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION
 * WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
 * ====================================================================
 */
/**
 * @license
 * (c) Dean McNamee <dean@gmail.com>, 2013.
 *
 * https://github.com/deanm/omggif
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to
 * deal in the Software without restriction, including without limitation the
 * rights to use, copy, modify, merge, publish, distribute, sublicense, and/or
 * sell copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
 * FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS
 * IN THE SOFTWARE.
 *
 * omggif is a JavaScript implementation of a GIF 89a encoder and decoder,
 * including animation and compression.  It does not rely on any specific
 * underlying system, so should run in the browser, Node, or Plask.
 */
function t1(e) {
	var t = 0;
	if (e[t++] !== 71 || e[t++] !== 73 || e[t++] !== 70 || e[t++] !== 56 || (e[t++] + 1 & 253) != 56 || e[t++] !== 97) throw new Error("Invalid GIF 87a/89a header.");
	var n = e[t++] | e[t++] << 8,
		i = e[t++] | e[t++] << 8,
		o = e[t++],
		a = o >> 7,
		u = 1 << (7 & o) + 1;
	e[t++], e[t++];
	var c = null,
		f = null;
	a && (c = t, f = u, t += 3 * u);
	var p = !0,
		v = [],
		m = 0,
		y = null,
		d = 0,
		I = null;
	for (this.width = n, this.height = i; p && t < e.length;) switch (e[t++]) {
		case 33:
			switch (e[t++]) {
				case 255:
					if (e[t] !== 11 || e[t + 1] == 78 && e[t + 2] == 69 && e[t + 3] == 84 && e[t + 4] == 83 && e[t + 5] == 67 && e[t + 6] == 65 && e[t + 7] == 80 && e[t + 8] == 69 && e[t + 9] == 50 && e[t + 10] == 46 && e[t + 11] == 48 && e[t + 12] == 3 && e[t + 13] == 1 && e[t + 16] == 0) t += 14, I = e[t++] | e[t++] << 8, t++;
					else
						for (t += 12;;) {
							if (!((P = e[t++]) >= 0)) throw Error("Invalid block size");
							if (P === 0) break;
							t += P
						}
					break;
				case 249:
					if (e[t++] !== 4 || e[t + 4] !== 0) throw new Error("Invalid graphics extension block.");
					var A = e[t++];
					m = e[t++] | e[t++] << 8, y = e[t++], (1 & A) == 0 && (y = null), d = A >> 2 & 7, t++;
					break;
				case 254:
					for (;;) {
						if (!((P = e[t++]) >= 0)) throw Error("Invalid block size");
						if (P === 0) break;
						t += P
					}
					break;
				default:
					throw new Error("Unknown graphic control label: 0x" + e[t - 1].toString(16))
			}
			break;
		case 44:
			var F = e[t++] | e[t++] << 8,
				_ = e[t++] | e[t++] << 8,
				j = e[t++] | e[t++] << 8,
				z = e[t++] | e[t++] << 8,
				$ = e[t++],
				rt = $ >> 6 & 1,
				lt = 1 << (7 & $) + 1,
				Y = c,
				R = f,
				K = !1;
			$ >> 7 && (K = !0, Y = t, R = lt, t += 3 * lt);
			var ot = t;
			for (t++;;) {
				var P;
				if (!((P = e[t++]) >= 0)) throw Error("Invalid block size");
				if (P === 0) break;
				t += P
			}
			v.push({
				x: F,
				y: _,
				width: j,
				height: z,
				has_local_palette: K,
				palette_offset: Y,
				palette_size: R,
				data_offset: ot,
				data_length: t - ot,
				transparent_index: y,
				interlaced: !!rt,
				delay: m,
				disposal: d
			});
			break;
		case 59:
			p = !1;
			break;
		default:
			throw new Error("Unknown gif block: 0x" + e[t - 1].toString(16))
	}
	this.numFrames = function() {
		return v.length
	}, this.loopCount = function() {
		return I
	}, this.frameInfo = function(C) {
		if (C < 0 || C >= v.length) throw new Error("Frame index out of range.");
		return v[C]
	}, this.decodeAndBlitFrameBGRA = function(C, q) {
		var T = this.frameInfo(C),
			ct = T.width * T.height,
			st = new Uint8Array(ct);
		Rl(e, T.data_offset, st, ct);
		var ht = T.palette_offset,
			Q = T.transparent_index;
		Q === null && (Q = 256);
		var dt = T.width,
			ut = n - dt,
			_t = dt,
			L = 4 * (T.y * n + T.x),
			M = 4 * ((T.y + T.height) * n + T.x),
			O = L,
			U = 4 * ut;
		T.interlaced === !0 && (U += 4 * n * 7);
		for (var V = 8, nt = 0, at = st.length; nt < at; ++nt) {
			var it = st[nt];
			if (_t === 0 && (_t = dt, (O += U) >= M && (U = 4 * ut + 4 * n * (V - 1), O = L + (dt + ut) * (V << 1), V >>= 1)), it === Q) O += 4;
			else {
				var xt = e[ht + 3 * it],
					Lt = e[ht + 3 * it + 1],
					Pt = e[ht + 3 * it + 2];
				q[O++] = Pt, q[O++] = Lt, q[O++] = xt, q[O++] = 255
			}--_t
		}
	}, this.decodeAndBlitFrameRGBA = function(C, q) {
		var T = this.frameInfo(C),
			ct = T.width * T.height,
			st = new Uint8Array(ct);
		Rl(e, T.data_offset, st, ct);
		var ht = T.palette_offset,
			Q = T.transparent_index;
		Q === null && (Q = 256);
		var dt = T.width,
			ut = n - dt,
			_t = dt,
			L = 4 * (T.y * n + T.x),
			M = 4 * ((T.y + T.height) * n + T.x),
			O = L,
			U = 4 * ut;
		T.interlaced === !0 && (U += 4 * n * 7);
		for (var V = 8, nt = 0, at = st.length; nt < at; ++nt) {
			var it = st[nt];
			if (_t === 0 && (_t = dt, (O += U) >= M && (U = 4 * ut + 4 * n * (V - 1), O = L + (dt + ut) * (V << 1), V >>= 1)), it === Q) O += 4;
			else {
				var xt = e[ht + 3 * it],
					Lt = e[ht + 3 * it + 1],
					Pt = e[ht + 3 * it + 2];
				q[O++] = xt, q[O++] = Lt, q[O++] = Pt, q[O++] = 255
			}--_t
		}
	}
}

function Rl(e, t, n, i) {
	for (var o = e[t++], a = 1 << o, u = a + 1, c = u + 1, f = o + 1, p = (1 << f) - 1, v = 0, m = 0, y = 0, d = e[t++], I = new Int32Array(4096), A = null;;) {
		for (; v < 16 && d !== 0;) m |= e[t++] << v, v += 8, d === 1 ? d = e[t++] : --d;
		if (v < f) break;
		var F = m & p;
		if (m >>= f, v -= f, F !== a) {
			if (F === u) break;
			for (var _ = F < c ? F : A, j = 0, z = _; z > a;) z = I[z] >> 8, ++j;
			var $ = z;
			if (y + j + (_ !== F ? 1 : 0) > i) return void Ne.log("Warning, gif stream longer than expected.");
			n[y++] = $;
			var rt = y += j;
			for (_ !== F && (n[y++] = $), z = _; j--;) z = I[z], n[--rt] = 255 & z, z >>= 8;
			A !== null && c < 4096 && (I[c++] = A << 8 | $, c >= p + 1 && f < 12 && (++f, p = p << 1 | 1)), A = F
		} else c = u + 1, p = (1 << (f = o + 1)) - 1, A = null
	}
	return y !== i && Ne.log("Warning, gif stream shorter than expected."), n
}
/**
 * @license
  Copyright (c) 2008, Adobe Systems Incorporated
  All rights reserved.

  Redistribution and use in source and binary forms, with or without 
  modification, are permitted provided that the following conditions are
  met:

  * Redistributions of source code must retain the above copyright notice, 
    this list of conditions and the following disclaimer.
  
  * Redistributions in binary form must reproduce the above copyright
    notice, this list of conditions and the following disclaimer in the 
    documentation and/or other materials provided with the distribution.
  
  * Neither the name of Adobe Systems Incorporated nor the names of its 
    contributors may be used to endorse or promote products derived from 
    this software without specific prior written permission.

  THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS
  IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO,
  THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR
  PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT OWNER OR 
  CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL,
  EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO,
  PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR
  PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF
  LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING
  NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS
  SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
*/
function $s(e) {
	var t, n, i, o, a, u = Math.floor,
		c = new Array(64),
		f = new Array(64),
		p = new Array(64),
		v = new Array(64),
		m = new Array(65535),
		y = new Array(65535),
		d = new Array(64),
		I = new Array(64),
		A = [],
		F = 0,
		_ = 7,
		j = new Array(64),
		z = new Array(64),
		$ = new Array(64),
		rt = new Array(256),
		lt = new Array(2048),
		Y = [0, 1, 5, 6, 14, 15, 27, 28, 2, 4, 7, 13, 16, 26, 29, 42, 3, 8, 12, 17, 25, 30, 41, 43, 9, 11, 18, 24, 31, 40, 44, 53, 10, 19, 23, 32, 39, 45, 52, 54, 20, 22, 33, 38, 46, 51, 55, 60, 21, 34, 37, 47, 50, 56, 59, 61, 35, 36, 48, 49, 57, 58, 62, 63],
		R = [0, 0, 1, 5, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0],
		K = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11],
		ot = [0, 0, 2, 1, 3, 3, 2, 4, 3, 5, 5, 4, 4, 0, 0, 1, 125],
		P = [1, 2, 3, 0, 4, 17, 5, 18, 33, 49, 65, 6, 19, 81, 97, 7, 34, 113, 20, 50, 129, 145, 161, 8, 35, 66, 177, 193, 21, 82, 209, 240, 36, 51, 98, 114, 130, 9, 10, 22, 23, 24, 25, 26, 37, 38, 39, 40, 41, 42, 52, 53, 54, 55, 56, 57, 58, 67, 68, 69, 70, 71, 72, 73, 74, 83, 84, 85, 86, 87, 88, 89, 90, 99, 100, 101, 102, 103, 104, 105, 106, 115, 116, 117, 118, 119, 120, 121, 122, 131, 132, 133, 134, 135, 136, 137, 138, 146, 147, 148, 149, 150, 151, 152, 153, 154, 162, 163, 164, 165, 166, 167, 168, 169, 170, 178, 179, 180, 181, 182, 183, 184, 185, 186, 194, 195, 196, 197, 198, 199, 200, 201, 202, 210, 211, 212, 213, 214, 215, 216, 217, 218, 225, 226, 227, 228, 229, 230, 231, 232, 233, 234, 241, 242, 243, 244, 245, 246, 247, 248, 249, 250],
		C = [0, 0, 3, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0],
		q = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11],
		T = [0, 0, 2, 1, 2, 4, 4, 3, 4, 7, 5, 4, 4, 0, 1, 2, 119],
		ct = [0, 1, 2, 3, 17, 4, 5, 33, 49, 6, 18, 65, 81, 7, 97, 113, 19, 34, 50, 129, 8, 20, 66, 145, 161, 177, 193, 9, 35, 51, 82, 240, 21, 98, 114, 209, 10, 22, 36, 52, 225, 37, 241, 23, 24, 25, 26, 38, 39, 40, 41, 42, 53, 54, 55, 56, 57, 58, 67, 68, 69, 70, 71, 72, 73, 74, 83, 84, 85, 86, 87, 88, 89, 90, 99, 100, 101, 102, 103, 104, 105, 106, 115, 116, 117, 118, 119, 120, 121, 122, 130, 131, 132, 133, 134, 135, 136, 137, 138, 146, 147, 148, 149, 150, 151, 152, 153, 154, 162, 163, 164, 165, 166, 167, 168, 169, 170, 178, 179, 180, 181, 182, 183, 184, 185, 186, 194, 195, 196, 197, 198, 199, 200, 201, 202, 210, 211, 212, 213, 214, 215, 216, 217, 218, 226, 227, 228, 229, 230, 231, 232, 233, 234, 242, 243, 244, 245, 246, 247, 248, 249, 250];

	function st(L, M) {
		for (var O = 0, U = 0, V = new Array, nt = 1; nt <= 16; nt++) {
			for (var at = 1; at <= L[nt]; at++) V[M[U]] = [], V[M[U]][0] = O, V[M[U]][1] = nt, U++, O++;
			O *= 2
		}
		return V
	}

	function ht(L) {
		for (var M = L[0], O = L[1] - 1; O >= 0;) M & 1 << O && (F |= 1 << _), O--, --_ < 0 && (F == 255 ? (Q(255), Q(0)) : Q(F), _ = 7, F = 0)
	}

	function Q(L) {
		A.push(L)
	}

	function dt(L) {
		Q(L >> 8 & 255), Q(255 & L)
	}

	function ut(L, M, O, U, V) {
		for (var nt, at = V[0], it = V[240], xt = function(At, St) {
				var jt, Ct, qt, Jt, Qt, ne, re, ue, Wt, ie, kt = 0;
				for (Wt = 0; Wt < 8; ++Wt) {
					jt = At[kt], Ct = At[kt + 1], qt = At[kt + 2], Jt = At[kt + 3], Qt = At[kt + 4], ne = At[kt + 5], re = At[kt + 6];
					var $e = jt + (ue = At[kt + 7]),
						le = jt - ue,
						Pn = Ct + re,
						de = Ct - re,
						ye = qt + ne,
						Dn = qt - ne,
						fe = Jt + Qt,
						mr = Jt - Qt,
						Ie = $e + fe,
						kn = $e - fe,
						Ae = Pn + ye,
						oe = Pn - ye;
					At[kt] = Ie + Ae, At[kt + 4] = Ie - Ae;
					var zt = .707106781 * (oe + kn);
					At[kt + 2] = kn + zt, At[kt + 6] = kn - zt;
					var ae = .382683433 * ((Ie = mr + Dn) - (oe = de + le)),
						Ge = .5411961 * Ie + ae,
						pe = 1.306562965 * oe + ae,
						Re = .707106781 * (Ae = Dn + de),
						an = le + Re,
						Ot = le - Re;
					At[kt + 5] = Ot + Ge, At[kt + 3] = Ot - Ge, At[kt + 1] = an + pe, At[kt + 7] = an - pe, kt += 8
				}
				for (kt = 0, Wt = 0; Wt < 8; ++Wt) {
					jt = At[kt], Ct = At[kt + 8], qt = At[kt + 16], Jt = At[kt + 24], Qt = At[kt + 32], ne = At[kt + 40], re = At[kt + 48];
					var Ye = jt + (ue = At[kt + 56]),
						Be = jt - ue,
						Fe = Ct + re,
						ke = Ct - re,
						Se = qt + ne,
						Ee = qt - ne,
						On = Jt + Qt,
						Cn = Jt - Qt,
						Gn = Ye + On,
						Yn = Ye - On,
						Jn = Fe + Se,
						or = Fe - Se;
					At[kt] = Gn + Jn, At[kt + 32] = Gn - Jn;
					var Rn = .707106781 * (or + Yn);
					At[kt + 16] = Yn + Rn, At[kt + 48] = Yn - Rn;
					var sr = .382683433 * ((Gn = Cn + Ee) - (or = ke + Be)),
						Xr = .5411961 * Gn + sr,
						fi = 1.306562965 * or + sr,
						hi = .707106781 * (Jn = Ee + ke),
						di = Be + hi,
						pi = Be - hi;
					At[kt + 40] = pi + Xr, At[kt + 24] = pi - Xr, At[kt + 8] = di + fi, At[kt + 56] = di - fi, kt++
				}
				for (Wt = 0; Wt < 64; ++Wt) ie = At[Wt] * St[Wt], d[Wt] = ie > 0 ? ie + .5 | 0 : ie - .5 | 0;
				return d
			}(L, M), Lt = 0; Lt < 64; ++Lt) I[Y[Lt]] = xt[Lt];
		var Pt = I[0] - O;
		O = I[0], Pt == 0 ? ht(U[0]) : (ht(U[y[nt = 32767 + Pt]]), ht(m[nt]));
		for (var It = 63; It > 0 && I[It] == 0;) It--;
		if (It == 0) return ht(at), O;
		for (var Ut, gt = 1; gt <= It;) {
			for (var B = gt; I[gt] == 0 && gt <= It;) ++gt;
			var Xt = gt - B;
			if (Xt >= 16) {
				Ut = Xt >> 4;
				for (var Bt = 1; Bt <= Ut; ++Bt) ht(it);
				Xt &= 15
			}
			nt = 32767 + I[gt], ht(V[(Xt << 4) + y[nt]]), ht(m[nt]), gt++
		}
		return It != 63 && ht(at), O
	}

	function _t(L) {
		L = Math.min(Math.max(L, 1), 100), a != L && (function(M) {
			for (var O = [16, 11, 10, 16, 24, 40, 51, 61, 12, 12, 14, 19, 26, 58, 60, 55, 14, 13, 16, 24, 40, 57, 69, 56, 14, 17, 22, 29, 51, 87, 80, 62, 18, 22, 37, 56, 68, 109, 103, 77, 24, 35, 55, 64, 81, 104, 113, 92, 49, 64, 78, 87, 103, 121, 120, 101, 72, 92, 95, 98, 112, 100, 103, 99], U = 0; U < 64; U++) {
				var V = u((O[U] * M + 50) / 100);
				V = Math.min(Math.max(V, 1), 255), c[Y[U]] = V
			}
			for (var nt = [17, 18, 24, 47, 99, 99, 99, 99, 18, 21, 26, 66, 99, 99, 99, 99, 24, 26, 56, 99, 99, 99, 99, 99, 47, 66, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99], at = 0; at < 64; at++) {
				var it = u((nt[at] * M + 50) / 100);
				it = Math.min(Math.max(it, 1), 255), f[Y[at]] = it
			}
			for (var xt = [1, 1.387039845, 1.306562965, 1.175875602, 1, .785694958, .5411961, .275899379], Lt = 0, Pt = 0; Pt < 8; Pt++)
				for (var It = 0; It < 8; It++) p[Lt] = 1 / (c[Y[Lt]] * xt[Pt] * xt[It] * 8), v[Lt] = 1 / (f[Y[Lt]] * xt[Pt] * xt[It] * 8), Lt++
		}(L < 50 ? Math.floor(5e3 / L) : Math.floor(200 - 2 * L)), a = L)
	}
	this.encode = function(L, M) {
			M && _t(M), A = new Array, F = 0, _ = 7, dt(65496), dt(65504), dt(16), Q(74), Q(70), Q(73), Q(70), Q(0), Q(1), Q(1), Q(0), dt(1), dt(1), Q(0), Q(0),
				function() {
					dt(65499), dt(132), Q(0);
					for (var Ct = 0; Ct < 64; Ct++) Q(c[Ct]);
					Q(1);
					for (var qt = 0; qt < 64; qt++) Q(f[qt])
				}(),
				function(Ct, qt) {
					dt(65472), dt(17), Q(8), dt(qt), dt(Ct), Q(3), Q(1), Q(17), Q(0), Q(2), Q(17), Q(1), Q(3), Q(17), Q(1)
				}(L.width, L.height),
				function() {
					dt(65476), dt(418), Q(0);
					for (var Ct = 0; Ct < 16; Ct++) Q(R[Ct + 1]);
					for (var qt = 0; qt <= 11; qt++) Q(K[qt]);
					Q(16);
					for (var Jt = 0; Jt < 16; Jt++) Q(ot[Jt + 1]);
					for (var Qt = 0; Qt <= 161; Qt++) Q(P[Qt]);
					Q(1);
					for (var ne = 0; ne < 16; ne++) Q(C[ne + 1]);
					for (var re = 0; re <= 11; re++) Q(q[re]);
					Q(17);
					for (var ue = 0; ue < 16; ue++) Q(T[ue + 1]);
					for (var Wt = 0; Wt <= 161; Wt++) Q(ct[Wt])
				}(), dt(65498), dt(12), Q(3), Q(1), Q(0), Q(2), Q(17), Q(3), Q(17), Q(0), Q(63), Q(0);
			var O = 0,
				U = 0,
				V = 0;
			F = 0, _ = 7, this.encode.displayName = "_encode_";
			for (var nt, at, it, xt, Lt, Pt, It, Ut, gt, B = L.data, Xt = L.width, Bt = L.height, At = 4 * Xt, St = 0; St < Bt;) {
				for (nt = 0; nt < At;) {
					for (Lt = At * St + nt, It = -1, Ut = 0, gt = 0; gt < 64; gt++) Pt = Lt + (Ut = gt >> 3) * At + (It = 4 * (7 & gt)), St + Ut >= Bt && (Pt -= At * (St + 1 + Ut - Bt)), nt + It >= At && (Pt -= nt + It - At + 4), at = B[Pt++], it = B[Pt++], xt = B[Pt++], j[gt] = (lt[at] + lt[it + 256 >> 0] + lt[xt + 512 >> 0] >> 16) - 128, z[gt] = (lt[at + 768 >> 0] + lt[it + 1024 >> 0] + lt[xt + 1280 >> 0] >> 16) - 128, $[gt] = (lt[at + 1280 >> 0] + lt[it + 1536 >> 0] + lt[xt + 1792 >> 0] >> 16) - 128;
					O = ut(j, p, O, t, i), U = ut(z, v, U, n, o), V = ut($, v, V, n, o), nt += 32
				}
				St += 8
			}
			if (_ >= 0) {
				var jt = [];
				jt[1] = _ + 1, jt[0] = (1 << _ + 1) - 1, ht(jt)
			}
			return dt(65497), new Uint8Array(A)
		}, e = e || 50,
		function() {
			for (var L = String.fromCharCode, M = 0; M < 256; M++) rt[M] = L(M)
		}(), t = st(R, K), n = st(C, q), i = st(ot, P), o = st(T, ct),
		function() {
			for (var L = 1, M = 2, O = 1; O <= 15; O++) {
				for (var U = L; U < M; U++) y[32767 + U] = O, m[32767 + U] = [], m[32767 + U][1] = O, m[32767 + U][0] = U;
				for (var V = -(M - 1); V <= -L; V++) y[32767 + V] = O, m[32767 + V] = [], m[32767 + V][1] = O, m[32767 + V][0] = M - 1 + V;
				L <<= 1, M <<= 1
			}
		}(),
		function() {
			for (var L = 0; L < 256; L++) lt[L] = 19595 * L, lt[L + 256 >> 0] = 38470 * L, lt[L + 512 >> 0] = 7471 * L + 32768, lt[L + 768 >> 0] = -11059 * L, lt[L + 1024 >> 0] = -21709 * L, lt[L + 1280 >> 0] = 32768 * L + 8421375, lt[L + 1536 >> 0] = -27439 * L, lt[L + 1792 >> 0] = -5329 * L
		}(), _t(e)
}
/**
 * @license
 * Copyright (c) 2017 Aras Abbasi
 *
 * Licensed under the MIT License.
 * http://opensource.org/licenses/mit-license
 */
function er(e, t) {
	if (this.pos = 0, this.buffer = e, this.datav = new DataView(e.buffer), this.is_with_alpha = !!t, this.bottom_up = !0, this.flag = String.fromCharCode(this.buffer[0]) + String.fromCharCode(this.buffer[1]), this.pos += 2, ["BM", "BA", "CI", "CP", "IC", "PT"].indexOf(this.flag) === -1) throw new Error("Invalid BMP File");
	this.parseHeader(), this.parseBGR()
}

function Bl(e) {
	function t(R) {
		if (!R) throw Error("assert :P")
	}

	function n(R, K, ot) {
		for (var P = 0; 4 > P; P++)
			if (R[K + P] != ot.charCodeAt(P)) return !0;
		return !1
	}

	function i(R, K, ot, P, C) {
		for (var q = 0; q < C; q++) R[K + q] = ot[P + q]
	}

	function o(R, K, ot, P) {
		for (var C = 0; C < P; C++) R[K + C] = ot
	}

	function a(R) {
		return new Int32Array(R)
	}

	function u(R, K) {
		for (var ot = [], P = 0; P < R; P++) ot.push(new K);
		return ot
	}

	function c(R, K) {
		var ot = [];
		return function P(C, q, T) {
			for (var ct = T[q], st = 0; st < ct && (C.push(T.length > q + 1 ? [] : new K), !(T.length < q + 1)); st++) P(C[st], q + 1, T)
		}(ot, 0, R), ot
	}
	var f = function() {
		var R = this;

		function K(r, s) {
			for (var h = 1 << s - 1 >>> 0; r & h;) h >>>= 1;
			return h ? (r & h - 1) + h : r
		}

		function ot(r, s, h, g, b) {
			t(!(g % h));
			do r[s + (g -= h)] = b; while (0 < g)
		}

		function P(r, s, h, g, b) {
			if (t(2328 >= b), 512 >= b) var x = a(512);
			else if ((x = a(b)) == null) return 0;
			return function(N, S, k, E, W, tt) {
				var et, X, wt = S,
					pt = 1 << k,
					G = a(16),
					J = a(16);
				for (t(W != 0), t(E != null), t(N != null), t(0 < k), X = 0; X < W; ++X) {
					if (15 < E[X]) return 0;
					++G[E[X]]
				}
				if (G[0] == W) return 0;
				for (J[1] = 0, et = 1; 15 > et; ++et) {
					if (G[et] > 1 << et) return 0;
					J[et + 1] = J[et] + G[et]
				}
				for (X = 0; X < W; ++X) et = E[X], 0 < E[X] && (tt[J[et]++] = X);
				if (J[15] == 1) return (E = new C).g = 0, E.value = tt[0], ot(N, wt, 1, pt, E), pt;
				var vt, yt = -1,
					bt = pt - 1,
					Dt = 0,
					Ft = 1,
					Vt = 1,
					Et = 1 << k;
				for (X = 0, et = 1, W = 2; et <= k; ++et, W <<= 1) {
					if (Ft += Vt <<= 1, 0 > (Vt -= G[et])) return 0;
					for (; 0 < G[et]; --G[et])(E = new C).g = et, E.value = tt[X++], ot(N, wt + Dt, W, Et, E), Dt = K(Dt, et)
				}
				for (et = k + 1, W = 2; 15 >= et; ++et, W <<= 1) {
					if (Ft += Vt <<= 1, 0 > (Vt -= G[et])) return 0;
					for (; 0 < G[et]; --G[et]) {
						if (E = new C, (Dt & bt) != yt) {
							for (wt += Et, vt = 1 << (yt = et) - k; 15 > yt && !(0 >= (vt -= G[yt]));) ++yt, vt <<= 1;
							pt += Et = 1 << (vt = yt - k), N[S + (yt = Dt & bt)].g = vt + k, N[S + yt].value = wt - S - yt
						}
						E.g = et - k, E.value = tt[X++], ot(N, wt + (Dt >> k), W, Et, E), Dt = K(Dt, et)
					}
				}
				return Ft != 2 * J[15] - 1 ? 0 : pt
			}(r, s, h, g, b, x)
		}

		function C() {
			this.value = this.g = 0
		}

		function q() {
			this.value = this.g = 0
		}

		function T() {
			this.G = u(5, C), this.H = a(5), this.jc = this.Qb = this.qb = this.nd = 0, this.pd = u(on, q)
		}

		function ct(r, s, h, g) {
			t(r != null), t(s != null), t(2147483648 > g), r.Ca = 254, r.I = 0, r.b = -8, r.Ka = 0, r.oa = s, r.pa = h, r.Jd = s, r.Yc = h + g, r.Zc = 4 <= g ? h + g - 4 + 1 : h, nt(r)
		}

		function st(r, s) {
			for (var h = 0; 0 < s--;) h |= it(r, 128) << s;
			return h
		}

		function ht(r, s) {
			var h = st(r, s);
			return at(r) ? -h : h
		}

		function Q(r, s, h, g) {
			var b, x = 0;
			for (t(r != null), t(s != null), t(4294967288 > g), r.Sb = g, r.Ra = 0, r.u = 0, r.h = 0, 4 < g && (g = 4), b = 0; b < g; ++b) x += s[h + b] << 8 * b;
			r.Ra = x, r.bb = g, r.oa = s, r.pa = h
		}

		function dt(r) {
			for (; 8 <= r.u && r.bb < r.Sb;) r.Ra >>>= 8, r.Ra += r.oa[r.pa + r.bb] << Ci - 8 >>> 0, ++r.bb, r.u -= 8;
			O(r) && (r.h = 1, r.u = 0)
		}

		function ut(r, s) {
			if (t(0 <= s), !r.h && s <= ki) {
				var h = M(r) & Pi[s];
				return r.u += s, dt(r), h
			}
			return r.h = 1, r.u = 0
		}

		function _t() {
			this.b = this.Ca = this.I = 0, this.oa = [], this.pa = 0, this.Jd = [], this.Yc = 0, this.Zc = [], this.Ka = 0
		}

		function L() {
			this.Ra = 0, this.oa = [], this.h = this.u = this.bb = this.Sb = this.pa = 0
		}

		function M(r) {
			return r.Ra >>> (r.u & Ci - 1) >>> 0
		}

		function O(r) {
			return t(r.bb <= r.Sb), r.h || r.bb == r.Sb && r.u > Ci
		}

		function U(r, s) {
			r.u = s, r.h = O(r)
		}

		function V(r) {
			r.u >= ga && (t(r.u >= ga), dt(r))
		}

		function nt(r) {
			t(r != null && r.oa != null), r.pa < r.Zc ? (r.I = (r.oa[r.pa++] | r.I << 8) >>> 0, r.b += 8) : (t(r != null && r.oa != null), r.pa < r.Yc ? (r.b += 8, r.I = r.oa[r.pa++] | r.I << 8) : r.Ka ? r.b = 0 : (r.I <<= 8, r.b += 8, r.Ka = 1))
		}

		function at(r) {
			return st(r, 1)
		}

		function it(r, s) {
			var h = r.Ca;
			0 > r.b && nt(r);
			var g = r.b,
				b = h * s >>> 8,
				x = (r.I >>> g > b) + 0;
			for (x ? (h -= b, r.I -= b + 1 << g >>> 0) : h = b + 1, g = h, b = 0; 256 <= g;) b += 8, g >>= 8;
			return g = 7 ^ b + xn[g], r.b -= g, r.Ca = (h << g) - 1, x
		}

		function xt(r, s, h) {
			r[s + 0] = h >> 24 & 255, r[s + 1] = h >> 16 & 255, r[s + 2] = h >> 8 & 255, r[s + 3] = h >> 0 & 255
		}

		function Lt(r, s) {
			return r[s + 0] << 0 | r[s + 1] << 8
		}

		function Pt(r, s) {
			return Lt(r, s) | r[s + 2] << 16
		}

		function It(r, s) {
			return Lt(r, s) | Lt(r, s + 2) << 16
		}

		function Ut(r, s) {
			var h = 1 << s;
			return t(r != null), t(0 < s), r.X = a(h), r.X == null ? 0 : (r.Mb = 32 - s, r.Xa = s, 1)
		}

		function gt(r, s) {
			t(r != null), t(s != null), t(r.Xa == s.Xa), i(s.X, 0, r.X, 0, 1 << s.Xa)
		}

		function B() {
			this.X = [], this.Xa = this.Mb = 0
		}

		function Xt(r, s, h, g) {
			t(h != null), t(g != null);
			var b = h[0],
				x = g[0];
			return b == 0 && (b = (r * x + s / 2) / s), x == 0 && (x = (s * b + r / 2) / r), 0 >= b || 0 >= x ? 0 : (h[0] = b, g[0] = x, 1)
		}

		function Bt(r, s) {
			return r + (1 << s) - 1 >>> s
		}

		function At(r, s) {
			return ((4278255360 & r) + (4278255360 & s) >>> 0 & 4278255360) + ((16711935 & r) + (16711935 & s) >>> 0 & 16711935) >>> 0
		}

		function St(r, s) {
			R[s] = function(h, g, b, x, N, S, k) {
				var E;
				for (E = 0; E < N; ++E) {
					var W = R[r](S[k + E - 1], b, x + E);
					S[k + E] = At(h[g + E], W)
				}
			}
		}

		function jt() {
			this.ud = this.hd = this.jd = 0
		}

		function Ct(r, s) {
			return ((4278124286 & (r ^ s)) >>> 1) + (r & s) >>> 0
		}

		function qt(r) {
			return 0 <= r && 256 > r ? r : 0 > r ? 0 : 255 < r ? 255 : void 0
		}

		function Jt(r, s) {
			return qt(r + (r - s + .5 >> 1))
		}

		function Qt(r, s, h) {
			return Math.abs(s - h) - Math.abs(r - h)
		}

		function ne(r, s, h, g, b, x, N) {
			for (g = x[N - 1], h = 0; h < b; ++h) x[N + h] = g = At(r[s + h], g)
		}

		function re(r, s, h, g, b) {
			var x;
			for (x = 0; x < h; ++x) {
				var N = r[s + x],
					S = N >> 8 & 255,
					k = 16711935 & (k = (k = 16711935 & N) + ((S << 16) + S));
				g[b + x] = (4278255360 & N) + k >>> 0
			}
		}

		function ue(r, s) {
			s.jd = r >> 0 & 255, s.hd = r >> 8 & 255, s.ud = r >> 16 & 255
		}

		function Wt(r, s, h, g, b, x) {
			var N;
			for (N = 0; N < g; ++N) {
				var S = s[h + N],
					k = S >>> 8,
					E = S,
					W = 255 & (W = (W = S >>> 16) + ((r.jd << 24 >> 24) * (k << 24 >> 24) >>> 5));
				E = 255 & (E = (E = E + ((r.hd << 24 >> 24) * (k << 24 >> 24) >>> 5)) + ((r.ud << 24 >> 24) * (W << 24 >> 24) >>> 5)), b[x + N] = (4278255360 & S) + (W << 16) + E
			}
		}

		function ie(r, s, h, g, b) {
			R[s] = function(x, N, S, k, E, W, tt, et, X) {
				for (k = tt; k < et; ++k)
					for (tt = 0; tt < X; ++tt) E[W++] = b(S[g(x[N++])])
			}, R[r] = function(x, N, S, k, E, W, tt) {
				var et = 8 >> x.b,
					X = x.Ea,
					wt = x.K[0],
					pt = x.w;
				if (8 > et)
					for (x = (1 << x.b) - 1, pt = (1 << et) - 1; N < S; ++N) {
						var G, J = 0;
						for (G = 0; G < X; ++G) G & x || (J = g(k[E++])), W[tt++] = b(wt[J & pt]), J >>= et
					} else R["VP8LMapColor" + h](k, E, wt, pt, W, tt, N, S, X)
			}
		}

		function kt(r, s, h, g, b) {
			for (h = s + h; s < h;) {
				var x = r[s++];
				g[b++] = x >> 16 & 255, g[b++] = x >> 8 & 255, g[b++] = x >> 0 & 255
			}
		}

		function $e(r, s, h, g, b) {
			for (h = s + h; s < h;) {
				var x = r[s++];
				g[b++] = x >> 16 & 255, g[b++] = x >> 8 & 255, g[b++] = x >> 0 & 255, g[b++] = x >> 24 & 255
			}
		}

		function le(r, s, h, g, b) {
			for (h = s + h; s < h;) {
				var x = (N = r[s++]) >> 16 & 240 | N >> 12 & 15,
					N = N >> 0 & 240 | N >> 28 & 15;
				g[b++] = x, g[b++] = N
			}
		}

		function Pn(r, s, h, g, b) {
			for (h = s + h; s < h;) {
				var x = (N = r[s++]) >> 16 & 248 | N >> 13 & 7,
					N = N >> 5 & 224 | N >> 3 & 31;
				g[b++] = x, g[b++] = N
			}
		}

		function de(r, s, h, g, b) {
			for (h = s + h; s < h;) {
				var x = r[s++];
				g[b++] = x >> 0 & 255, g[b++] = x >> 8 & 255, g[b++] = x >> 16 & 255
			}
		}

		function ye(r, s, h, g, b, x) {
			if (x == 0)
				for (h = s + h; s < h;) xt(g, ((x = r[s++])[0] >> 24 | x[1] >> 8 & 65280 | x[2] << 8 & 16711680 | x[3] << 24) >>> 0), b += 32;
			else i(g, b, r, s, h)
		}

		function Dn(r, s) {
			R[s][0] = R[r + "0"], R[s][1] = R[r + "1"], R[s][2] = R[r + "2"], R[s][3] = R[r + "3"], R[s][4] = R[r + "4"], R[s][5] = R[r + "5"], R[s][6] = R[r + "6"], R[s][7] = R[r + "7"], R[s][8] = R[r + "8"], R[s][9] = R[r + "9"], R[s][10] = R[r + "10"], R[s][11] = R[r + "11"], R[s][12] = R[r + "12"], R[s][13] = R[r + "13"], R[s][14] = R[r + "0"], R[s][15] = R[r + "0"]
		}

		function fe(r) {
			return r == Ns || r == Ls || r == vo || r == As
		}

		function mr() {
			this.eb = [], this.size = this.A = this.fb = 0
		}

		function Ie() {
			this.y = [], this.f = [], this.ea = [], this.F = [], this.Tc = this.Ed = this.Cd = this.Fd = this.lb = this.Db = this.Ab = this.fa = this.J = this.W = this.N = this.O = 0
		}

		function kn() {
			this.Rd = this.height = this.width = this.S = 0, this.f = {}, this.f.RGBA = new mr, this.f.kb = new Ie, this.sd = null
		}

		function Ae() {
			this.width = [0], this.height = [0], this.Pd = [0], this.Qd = [0], this.format = [0]
		}

		function oe() {
			this.Id = this.fd = this.Md = this.hb = this.ib = this.da = this.bd = this.cd = this.j = this.v = this.Da = this.Sd = this.ob = 0
		}

		function zt(r) {
			return alert("todo:WebPSamplerProcessPlane"), r.T
		}

		function ae(r, s) {
			var h = r.T,
				g = s.ba.f.RGBA,
				b = g.eb,
				x = g.fb + r.ka * g.A,
				N = Hn[s.ba.S],
				S = r.y,
				k = r.O,
				E = r.f,
				W = r.N,
				tt = r.ea,
				et = r.W,
				X = s.cc,
				wt = s.dc,
				pt = s.Mc,
				G = s.Nc,
				J = r.ka,
				vt = r.ka + r.T,
				yt = r.U,
				bt = yt + 1 >> 1;
			for (J == 0 ? N(S, k, null, null, E, W, tt, et, E, W, tt, et, b, x, null, null, yt) : (N(s.ec, s.fc, S, k, X, wt, pt, G, E, W, tt, et, b, x - g.A, b, x, yt), ++h); J + 2 < vt; J += 2) X = E, wt = W, pt = tt, G = et, W += r.Rc, et += r.Rc, x += 2 * g.A, N(S, (k += 2 * r.fa) - r.fa, S, k, X, wt, pt, G, E, W, tt, et, b, x - g.A, b, x, yt);
			return k += r.fa, r.j + vt < r.o ? (i(s.ec, s.fc, S, k, yt), i(s.cc, s.dc, E, W, bt), i(s.Mc, s.Nc, tt, et, bt), h--) : 1 & vt || N(S, k, null, null, E, W, tt, et, E, W, tt, et, b, x + g.A, null, null, yt), h
		}

		function Ge(r, s, h) {
			var g = r.F,
				b = [r.J];
			if (g != null) {
				var x = r.U,
					N = s.ba.S,
					S = N == mo || N == vo;
				s = s.ba.f.RGBA;
				var k = [0],
					E = r.ka;
				k[0] = r.T, r.Kb && (E == 0 ? --k[0] : (--E, b[0] -= r.width), r.j + r.ka + r.T == r.o && (k[0] = r.o - r.j - E));
				var W = s.eb;
				E = s.fb + E * s.A, r = Pe(g, b[0], r.width, x, k, W, E + (S ? 0 : 3), s.A), t(h == k), r && fe(N) && zn(W, E, S, x, k, s.A)
			}
			return 0
		}

		function pe(r) {
			var s = r.ma,
				h = s.ba.S,
				g = 11 > h,
				b = h == po || h == go || h == mo || h == xs || h == 12 || fe(h);
			if (s.memory = null, s.Ib = null, s.Jb = null, s.Nd = null, !da(s.Oa, r, b ? 11 : 12)) return 0;
			if (b && fe(h) && Nt(), r.da) alert("todo:use_scaling");
			else {
				if (g) {
					if (s.Ib = zt, r.Kb) {
						if (h = r.U + 1 >> 1, s.memory = a(r.U + 2 * h), s.memory == null) return 0;
						s.ec = s.memory, s.fc = 0, s.cc = s.ec, s.dc = s.fc + r.U, s.Mc = s.cc, s.Nc = s.dc + h, s.Ib = ae, Nt()
					}
				} else alert("todo:EmitYUV");
				b && (s.Jb = Ge, g && Z())
			}
			if (g && !zu) {
				for (r = 0; 256 > r; ++r) Gc[r] = 89858 * (r - 128) + wo >> bo, Xc[r] = -22014 * (r - 128) + wo, Jc[r] = -45773 * (r - 128), Yc[r] = 113618 * (r - 128) + wo >> bo;
				for (r = Na; r < Ps; ++r) s = 76283 * (r - 16) + wo >> bo, Kc[r - Na] = In(s, 255), $c[r - Na] = In(s + 8 >> 4, 15);
				zu = 1
			}
			return 1
		}

		function Re(r) {
			var s = r.ma,
				h = r.U,
				g = r.T;
			return t(!(1 & r.ka)), 0 >= h || 0 >= g ? 0 : (h = s.Ib(r, s), s.Jb != null && s.Jb(r, s, h), s.Dc += h, 1)
		}

		function an(r) {
			r.ma.memory = null
		}

		function Ot(r, s, h, g) {
			return ut(r, 8) != 47 ? 0 : (s[0] = ut(r, 14) + 1, h[0] = ut(r, 14) + 1, g[0] = ut(r, 1), ut(r, 3) != 0 ? 0 : !r.h)
		}

		function Ye(r, s) {
			if (4 > r) return r + 1;
			var h = r - 2 >> 1;
			return (2 + (1 & r) << h) + ut(s, h) + 1
		}

		function Be(r, s) {
			return 120 < s ? s - 120 : 1 <= (h = ((h = jc[s - 1]) >> 4) * r + (8 - (15 & h))) ? h : 1;
			var h
		}

		function Fe(r, s, h) {
			var g = M(h),
				b = r[s += 255 & g].g - 8;
			return 0 < b && (U(h, h.u + 8), g = M(h), s += r[s].value, s += g & (1 << b) - 1), U(h, h.u + r[s].g), r[s].value
		}

		function ke(r, s, h) {
			return h.g += r.g, h.value += r.value << s >>> 0, t(8 >= h.g), r.g
		}

		function Se(r, s, h) {
			var g = r.xc;
			return t((s = g == 0 ? 0 : r.vc[r.md * (h >> g) + (s >> g)]) < r.Wb), r.Ya[s]
		}

		function Ee(r, s, h, g) {
			var b = r.ab,
				x = r.c * s,
				N = r.C;
			s = N + s;
			var S = h,
				k = g;
			for (g = r.Ta, h = r.Ua; 0 < b--;) {
				var E = r.gc[b],
					W = N,
					tt = s,
					et = S,
					X = k,
					wt = (k = g, S = h, E.Ea);
				switch (t(W < tt), t(tt <= E.nc), E.hc) {
					case 2:
						oo(et, X, (tt - W) * wt, k, S);
						break;
					case 0:
						var pt = W,
							G = tt,
							J = k,
							vt = S,
							yt = (Et = E).Ea;
						pt == 0 && (ws(et, X, null, null, 1, J, vt), ne(et, X + 1, 0, 0, yt - 1, J, vt + 1), X += yt, vt += yt, ++pt);
						for (var bt = 1 << Et.b, Dt = bt - 1, Ft = Bt(yt, Et.b), Vt = Et.K, Et = Et.w + (pt >> Et.b) * Ft; pt < G;) {
							var ge = Vt,
								me = Et,
								he = 1;
							for (ma(et, X, J, vt - yt, 1, J, vt); he < yt;) {
								var se = (he & ~Dt) + bt;
								se > yt && (se = yt), (0, Fr[ge[me++] >> 8 & 15])(et, X + +he, J, vt + he - yt, se - he, J, vt + he), he = se
							}
							X += yt, vt += yt, ++pt & Dt || (Et += Ft)
						}
						tt != E.nc && i(k, S - wt, k, S + (tt - W - 1) * wt, wt);
						break;
					case 1:
						for (wt = et, G = X, yt = (et = E.Ea) - (vt = et & ~(J = (X = 1 << E.b) - 1)), pt = Bt(et, E.b), bt = E.K, E = E.w + (W >> E.b) * pt; W < tt;) {
							for (Dt = bt, Ft = E, Vt = new jt, Et = G + vt, ge = G + et; G < Et;) ue(Dt[Ft++], Vt), ti(Vt, wt, G, X, k, S), G += X, S += X;
							G < ge && (ue(Dt[Ft++], Vt), ti(Vt, wt, G, yt, k, S), G += yt, S += yt), ++W & J || (E += pt)
						}
						break;
					case 3:
						if (et == k && X == S && 0 < E.b) {
							for (G = k, et = wt = S + (tt - W) * wt - (vt = (tt - W) * Bt(E.Ea, E.b)), X = k, J = S, pt = [], vt = (yt = vt) - 1; 0 <= vt; --vt) pt[vt] = X[J + vt];
							for (vt = yt - 1; 0 <= vt; --vt) G[et + vt] = pt[vt];
							Bn(E, W, tt, k, wt, k, S)
						} else Bn(E, W, tt, et, X, k, S)
				}
				S = g, k = h
			}
			k != h && i(g, h, S, k, x)
		}

		function On(r, s) {
			var h = r.V,
				g = r.Ba + r.c * r.C,
				b = s - r.C;
			if (t(s <= r.l.o), t(16 >= b), 0 < b) {
				var x = r.l,
					N = r.Ta,
					S = r.Ua,
					k = x.width;
				if (Ee(r, b, h, g), b = S = [S], t((h = r.C) < (g = s)), t(x.v < x.va), g > x.o && (g = x.o), h < x.j) {
					var E = x.j - h;
					h = x.j, b[0] += E * k
				}
				if (h >= g ? h = 0 : (b[0] += 4 * x.v, x.ka = h - x.j, x.U = x.va - x.v, x.T = g - h, h = 1), h) {
					if (S = S[0], 11 > (h = r.ca).S) {
						var W = h.f.RGBA,
							tt = (g = h.S, b = x.U, x = x.T, E = W.eb, W.A),
							et = x;
						for (W = W.fb + r.Ma * W.A; 0 < et--;) {
							var X = N,
								wt = S,
								pt = b,
								G = E,
								J = W;
							switch (g) {
								case ho:
									Nn(X, wt, pt, G, J);
									break;
								case po:
									mn(X, wt, pt, G, J);
									break;
								case Ns:
									mn(X, wt, pt, G, J), zn(G, J, 0, pt, 1, 0);
									break;
								case ju:
									yr(X, wt, pt, G, J);
									break;
								case go:
									ye(X, wt, pt, G, J, 1);
									break;
								case Ls:
									ye(X, wt, pt, G, J, 1), zn(G, J, 0, pt, 1, 0);
									break;
								case mo:
									ye(X, wt, pt, G, J, 0);
									break;
								case vo:
									ye(X, wt, pt, G, J, 0), zn(G, J, 1, pt, 1, 0);
									break;
								case xs:
									jr(X, wt, pt, G, J);
									break;
								case As:
									jr(X, wt, pt, G, J), _e(G, J, pt, 1, 0);
									break;
								case Eu:
									wr(X, wt, pt, G, J);
									break;
								default:
									t(0)
							}
							S += k, W += tt
						}
						r.Ma += x
					} else alert("todo:EmitRescaledRowsYUVA");
					t(r.Ma <= h.height)
				}
			}
			r.C = s, t(r.C <= r.i)
		}

		function Cn(r) {
			var s;
			if (0 < r.ua) return 0;
			for (s = 0; s < r.Wb; ++s) {
				var h = r.Ya[s].G,
					g = r.Ya[s].H;
				if (0 < h[1][g[1] + 0].g || 0 < h[2][g[2] + 0].g || 0 < h[3][g[3] + 0].g) return 0
			}
			return 1
		}

		function Gn(r, s, h, g, b, x) {
			if (r.Z != 0) {
				var N = r.qd,
					S = r.rd;
				for (t(Or[r.Z] != null); s < h; ++s) Or[r.Z](N, S, g, b, g, b, x), N = g, S = b, b += x;
				r.qd = N, r.rd = S
			}
		}

		function Yn(r, s) {
			var h = r.l.ma,
				g = h.Z == 0 || h.Z == 1 ? r.l.j : r.C;
			if (g = r.C < g ? g : r.C, t(s <= r.l.o), s > g) {
				var b = r.l.width,
					x = h.ca,
					N = h.tb + b * g,
					S = r.V,
					k = r.Ba + r.c * g,
					E = r.gc;
				t(r.ab == 1), t(E[0].hc == 3), so(E[0], g, s, S, k, x, N), Gn(h, g, s, x, N, b)
			}
			r.C = r.Ma = s
		}

		function Jn(r, s, h, g, b, x, N) {
			var S = r.$ / g,
				k = r.$ % g,
				E = r.m,
				W = r.s,
				tt = h + r.$,
				et = tt;
			b = h + g * b;
			var X = h + g * x,
				wt = 280 + W.ua,
				pt = r.Pb ? S : 16777216,
				G = 0 < W.ua ? W.Wa : null,
				J = W.wc,
				vt = tt < X ? Se(W, k, S) : null;
			t(r.C < x), t(X <= b);
			var yt = !1;
			t: for (;;) {
				for (; yt || tt < X;) {
					var bt = 0;
					if (S >= pt) {
						var Dt = tt - h;
						t((pt = r).Pb), pt.wd = pt.m, pt.xd = Dt, 0 < pt.s.ua && gt(pt.s.Wa, pt.s.vb), pt = S + Mc
					}
					if (k & J || (vt = Se(W, k, S)), t(vt != null), vt.Qb && (s[tt] = vt.qb, yt = !0), !yt)
						if (V(E), vt.jc) {
							bt = E, Dt = s;
							var Ft = tt,
								Vt = vt.pd[M(bt) & on - 1];
							t(vt.jc), 256 > Vt.g ? (U(bt, bt.u + Vt.g), Dt[Ft] = Vt.value, bt = 0) : (U(bt, bt.u + Vt.g - 256), t(256 <= Vt.value), bt = Vt.value), bt == 0 && (yt = !0)
						} else bt = Fe(vt.G[0], vt.H[0], E);
					if (E.h) break;
					if (yt || 256 > bt) {
						if (!yt)
							if (vt.nd) s[tt] = (vt.qb | bt << 8) >>> 0;
							else {
								if (V(E), yt = Fe(vt.G[1], vt.H[1], E), V(E), Dt = Fe(vt.G[2], vt.H[2], E), Ft = Fe(vt.G[3], vt.H[3], E), E.h) break;
								s[tt] = (Ft << 24 | yt << 16 | bt << 8 | Dt) >>> 0
							} if (yt = !1, ++tt, ++k >= g && (k = 0, ++S, N != null && S <= x && !(S % 16) && N(r, S), G != null))
							for (; et < tt;) bt = s[et++], G.X[(506832829 * bt & 4294967295) >>> G.Mb] = bt
					} else if (280 > bt) {
						if (bt = Ye(bt - 256, E), Dt = Fe(vt.G[4], vt.H[4], E), V(E), Dt = Be(g, Dt = Ye(Dt, E)), E.h) break;
						if (tt - h < Dt || b - tt < bt) break t;
						for (Ft = 0; Ft < bt; ++Ft) s[tt + Ft] = s[tt + Ft - Dt];
						for (tt += bt, k += bt; k >= g;) k -= g, ++S, N != null && S <= x && !(S % 16) && N(r, S);
						if (t(tt <= b), k & J && (vt = Se(W, k, S)), G != null)
							for (; et < tt;) bt = s[et++], G.X[(506832829 * bt & 4294967295) >>> G.Mb] = bt
					} else {
						if (!(bt < wt)) break t;
						for (yt = bt - 280, t(G != null); et < tt;) bt = s[et++], G.X[(506832829 * bt & 4294967295) >>> G.Mb] = bt;
						bt = tt, t(!(yt >>> (Dt = G).Xa)), s[bt] = Dt.X[yt], yt = !0
					}
					yt || t(E.h == O(E))
				}
				if (r.Pb && E.h && tt < b) t(r.m.h), r.a = 5, r.m = r.wd, r.$ = r.xd, 0 < r.s.ua && gt(r.s.vb, r.s.Wa);
				else {
					if (E.h) break t;
					N?.(r, S > x ? x : S), r.a = 0, r.$ = tt - h
				}
				return 1
			}
			return r.a = 3, 0
		}

		function or(r) {
			t(r != null), r.vc = null, r.yc = null, r.Ya = null;
			var s = r.Wa;
			s != null && (s.X = null), r.vb = null, t(r != null)
		}

		function Rn() {
			var r = new bs;
			return r == null ? null : (r.a = 0, r.xb = Ou, Dn("Predictor", "VP8LPredictors"), Dn("Predictor", "VP8LPredictors_C"), Dn("PredictorAdd", "VP8LPredictorsAdd"), Dn("PredictorAdd", "VP8LPredictorsAdd_C"), oo = re, ti = Wt, Nn = kt, mn = $e, jr = le, wr = Pn, yr = de, R.VP8LMapColor32b = Ii, R.VP8LMapColor8b = uo, r)
		}

		function sr(r, s, h, g, b) {
			var x = 1,
				N = [r],
				S = [s],
				k = g.m,
				E = g.s,
				W = null,
				tt = 0;
			t: for (;;) {
				if (h)
					for (; x && ut(k, 1);) {
						var et = N,
							X = S,
							wt = g,
							pt = 1,
							G = wt.m,
							J = wt.gc[wt.ab],
							vt = ut(G, 2);
						if (wt.Oc & 1 << vt) x = 0;
						else {
							switch (wt.Oc |= 1 << vt, J.hc = vt, J.Ea = et[0], J.nc = X[0], J.K = [null], ++wt.ab, t(4 >= wt.ab), vt) {
								case 0:
								case 1:
									J.b = ut(G, 3) + 2, pt = sr(Bt(J.Ea, J.b), Bt(J.nc, J.b), 0, wt, J.K), J.K = J.K[0];
									break;
								case 3:
									var yt, bt = ut(G, 8) + 1,
										Dt = 16 < bt ? 0 : 4 < bt ? 1 : 2 < bt ? 2 : 3;
									if (et[0] = Bt(J.Ea, Dt), J.b = Dt, yt = pt = sr(bt, 1, 0, wt, J.K)) {
										var Ft, Vt = bt,
											Et = J,
											ge = 1 << (8 >> Et.b),
											me = a(ge);
										if (me == null) yt = 0;
										else {
											var he = Et.K[0],
												se = Et.w;
											for (me[0] = Et.K[0][0], Ft = 1; Ft < 1 * Vt; ++Ft) me[Ft] = At(he[se + Ft], me[Ft - 1]);
											for (; Ft < 4 * ge; ++Ft) me[Ft] = 0;
											Et.K[0] = null, Et.K[0] = me, yt = 1
										}
									}
									pt = yt;
									break;
								case 2:
									break;
								default:
									t(0)
							}
							x = pt
						}
					}
				if (N = N[0], S = S[0], x && ut(k, 1) && !(x = 1 <= (tt = ut(k, 4)) && 11 >= tt)) {
					g.a = 3;
					break t
				}
				var xe;
				if (xe = x) e: {
					var we, ee, Xe, Ln = g,
						Ke = N,
						An = S,
						ve = tt,
						jn = h,
						En = Ln.m,
						tn = Ln.s,
						sn = [null],
						bn = 1,
						Wn = 0,
						fr = Ec[ve];n: for (;;) {
						if (jn && ut(En, 1)) {
							var en = ut(En, 3) + 2,
								Ar = Bt(Ke, en),
								ai = Bt(An, en),
								Di = Ar * ai;
							if (!sr(Ar, ai, 0, Ln, sn)) break n;
							for (sn = sn[0], tn.xc = en, we = 0; we < Di; ++we) {
								var Rr = sn[we] >> 8 & 65535;
								sn[we] = Rr, Rr >= bn && (bn = Rr + 1)
							}
						}
						if (En.h) break n;
						for (ee = 0; 5 > ee; ++ee) {
							var De = Mu[ee];
							!ee && 0 < ve && (De += 1 << ve), Wn < De && (Wn = De)
						}
						var ks = u(bn * fr, C),
							Wu = bn,
							Vu = u(Wu, T);
						if (Vu == null) var xo = null;
						else t(65536 >= Wu), xo = Vu;
						var La = a(Wn);
						if (xo == null || La == null || ks == null) {
							Ln.a = 1;
							break n
						}
						var No = ks;
						for (we = Xe = 0; we < bn; ++we) {
							var Qn = xo[we],
								Oi = Qn.G,
								Ri = Qn.H,
								Gu = 0,
								Lo = 1,
								Yu = 0;
							for (ee = 0; 5 > ee; ++ee) {
								De = Mu[ee], Oi[ee] = No, Ri[ee] = Xe, !ee && 0 < ve && (De += 1 << ve);
								i: {
									var Ao, Cs = De,
										So = Ln,
										Aa = La,
										tf = No,
										ef = Xe,
										Is = 0,
										Br = So.m,
										nf = ut(Br, 1);
									if (o(Aa, 0, 0, Cs), nf) {
										var rf = ut(Br, 1) + 1,
											af = ut(Br, 1),
											Ju = ut(Br, af == 0 ? 1 : 8);
										Aa[Ju] = 1, rf == 2 && (Aa[Ju = ut(Br, 8)] = 1);
										var _o = 1
									} else {
										var Xu = a(19),
											Ku = ut(Br, 4) + 4;
										if (19 < Ku) {
											So.a = 3;
											var Po = 0;
											break i
										}
										for (Ao = 0; Ao < Ku; ++Ao) Xu[Fc[Ao]] = ut(Br, 3);
										var Fs = void 0,
											Sa = void 0,
											$u = So,
											of = Xu,
											ko = Cs,
											Zu = Aa,
											js = 0,
											Tr = $u.m,
											Qu = 8,
											tl = u(128, C);
										r: for (; P(tl, 0, 7, of, 19);) {
											if (ut(Tr, 1)) {
												var sf = 2 + 2 * ut(Tr, 3);
												if ((Fs = 2 + ut(Tr, sf)) > ko) break r
											} else Fs = ko;
											for (Sa = 0; Sa < ko && Fs--;) {
												V(Tr);
												var el = tl[0 + (127 & M(Tr))];
												U(Tr, Tr.u + el.g);
												var Bi = el.value;
												if (16 > Bi) Zu[Sa++] = Bi, Bi != 0 && (Qu = Bi);
												else {
													var uf = Bi == 16,
														nl = Bi - 16,
														lf = Cc[nl],
														rl = ut(Tr, kc[nl]) + lf;
													if (Sa + rl > ko) break r;
													for (var cf = uf ? Qu : 0; 0 < rl--;) Zu[Sa++] = cf
												}
											}
											js = 1;
											break r
										}
										js || ($u.a = 3), _o = js
									}(_o = _o && !Br.h) && (Is = P(tf, ef, 8, Aa, Cs)),
									_o && Is != 0 ? Po = Is : (So.a = 3, Po = 0)
								}
								if (Po == 0) break n;
								if (Lo && Ic[ee] == 1 && (Lo = No[Xe].g == 0), Gu += No[Xe].g, Xe += Po, 3 >= ee) {
									var _a, Es = La[0];
									for (_a = 1; _a < De; ++_a) La[_a] > Es && (Es = La[_a]);
									Yu += Es
								}
							}
							if (Qn.nd = Lo, Qn.Qb = 0, Lo && (Qn.qb = (Oi[3][Ri[3] + 0].value << 24 | Oi[1][Ri[1] + 0].value << 16 | Oi[2][Ri[2] + 0].value) >>> 0, Gu == 0 && 256 > Oi[0][Ri[0] + 0].value && (Qn.Qb = 1, Qn.qb += Oi[0][Ri[0] + 0].value << 8)), Qn.jc = !Qn.Qb && 6 > Yu, Qn.jc) {
								var Co, Sr = Qn;
								for (Co = 0; Co < on; ++Co) {
									var qr = Co,
										zr = Sr.pd[qr],
										Io = Sr.G[0][Sr.H[0] + qr];
									256 <= Io.value ? (zr.g = Io.g + 256, zr.value = Io.value) : (zr.g = 0, zr.value = 0, qr >>= ke(Io, 8, zr), qr >>= ke(Sr.G[1][Sr.H[1] + qr], 16, zr), qr >>= ke(Sr.G[2][Sr.H[2] + qr], 0, zr), ke(Sr.G[3][Sr.H[3] + qr], 24, zr))
								}
							}
						}
						tn.vc = sn, tn.Wb = bn, tn.Ya = xo, tn.yc = ks, xe = 1;
						break e
					}
					xe = 0
				}
				if (!(x = xe)) {
					g.a = 3;
					break t
				}
				if (0 < tt) {
					if (E.ua = 1 << tt, !Ut(E.Wa, tt)) {
						g.a = 1, x = 0;
						break t
					}
				} else E.ua = 0;
				var Ms = g,
					il = N,
					ff = S,
					Ds = Ms.s,
					Os = Ds.xc;
				if (Ms.c = il, Ms.i = ff, Ds.md = Bt(il, Os), Ds.wc = Os == 0 ? -1 : (1 << Os) - 1, h) {
					g.xb = zc;
					break t
				}
				if ((W = a(N * S)) == null) {
					g.a = 1, x = 0;
					break t
				}
				x = (x = Jn(g, W, 0, N, S, S, null)) && !k.h;
				break t
			}
			return x ? (b != null ? b[0] = W : (t(W == null), t(h)), g.$ = 0, h || or(E)) : or(E), x
		}

		function Xr(r, s) {
			var h = r.c * r.i,
				g = h + s + 16 * s;
			return t(r.c <= s), r.V = a(g), r.V == null ? (r.Ta = null, r.Ua = 0, r.a = 1, 0) : (r.Ta = r.V, r.Ua = r.Ba + h + s, 1)
		}

		function fi(r, s) {
			var h = r.C,
				g = s - h,
				b = r.V,
				x = r.Ba + r.c * h;
			for (t(s <= r.l.o); 0 < g;) {
				var N = 16 < g ? 16 : g,
					S = r.l.ma,
					k = r.l.width,
					E = k * N,
					W = S.ca,
					tt = S.tb + k * h,
					et = r.Ta,
					X = r.Ua;
				Ee(r, N, b, x), ze(et, X, W, tt, E), Gn(S, h, h + N, W, tt, k), g -= N, b += N * r.c, h += N
			}
			t(h == s), r.C = r.Ma = s
		}

		function hi() {
			this.ub = this.yd = this.td = this.Rb = 0
		}

		function di() {
			this.Kd = this.Ld = this.Ud = this.Td = this.i = this.c = 0
		}

		function pi() {
			this.Fb = this.Bb = this.Cb = 0, this.Zb = a(4), this.Lb = a(4)
		}

		function qa() {
			this.Yb = function() {
				var r = [];
				return function s(h, g, b) {
					for (var x = b[g], N = 0; N < x && (h.push(b.length > g + 1 ? [] : 0), !(b.length < g + 1)); N++) s(h[N], g + 1, b)
				}(r, 0, [3, 11]), r
			}()
		}

		function Xo() {
			this.jb = a(3), this.Wc = c([4, 8], qa), this.Xc = c([4, 17], qa)
		}

		function Ko() {
			this.Pc = this.wb = this.Tb = this.zd = 0, this.vd = new a(4), this.od = new a(4)
		}

		function gi() {
			this.ld = this.La = this.dd = this.tc = 0
		}

		function za() {
			this.Na = this.la = 0
		}

		function $o() {
			this.Sc = [0, 0], this.Eb = [0, 0], this.Qc = [0, 0], this.ia = this.lc = 0
		}

		function $i() {
			this.ad = a(384), this.Za = 0, this.Ob = a(16), this.$b = this.Ad = this.ia = this.Gc = this.Hc = this.Dd = 0
		}

		function Zo() {
			this.uc = this.M = this.Nb = 0, this.wa = Array(new gi), this.Y = 0, this.ya = Array(new $i), this.aa = 0, this.l = new mi
		}

		function Ua() {
			this.y = a(16), this.f = a(8), this.ea = a(8)
		}

		function Qo() {
			this.cb = this.a = 0, this.sc = "", this.m = new _t, this.Od = new hi, this.Kc = new di, this.ed = new Ko, this.Qa = new pi, this.Ic = this.$c = this.Aa = 0, this.D = new Zo, this.Xb = this.Va = this.Hb = this.zb = this.yb = this.Ub = this.za = 0, this.Jc = u(8, _t), this.ia = 0, this.pb = u(4, $o), this.Pa = new Xo, this.Bd = this.kc = 0, this.Ac = [], this.Bc = 0, this.zc = [0, 0, 0, 0], this.Gd = Array(new Ua), this.Hd = 0, this.rb = Array(new za), this.sb = 0, this.wa = Array(new gi), this.Y = 0, this.oc = [], this.pc = 0, this.sa = [], this.ta = 0, this.qa = [], this.ra = 0, this.Ha = [], this.B = this.R = this.Ia = 0, this.Ec = [], this.M = this.ja = this.Vb = this.Fc = 0, this.ya = Array(new $i), this.L = this.aa = 0, this.gd = c([4, 2], gi), this.ga = null, this.Fa = [], this.Cc = this.qc = this.P = 0, this.Gb = [], this.Uc = 0, this.mb = [], this.nb = 0, this.rc = [], this.Ga = this.Vc = 0
		}

		function mi() {
			this.T = this.U = this.ka = this.height = this.width = 0, this.y = [], this.f = [], this.ea = [], this.Rc = this.fa = this.W = this.N = this.O = 0, this.ma = "void", this.put = "VP8IoPutHook", this.ac = "VP8IoSetupHook", this.bc = "VP8IoTeardownHook", this.ha = this.Kb = 0, this.data = [], this.hb = this.ib = this.da = this.o = this.j = this.va = this.v = this.Da = this.ob = this.w = 0, this.F = [], this.J = 0
		}

		function ts() {
			var r = new Qo;
			return r != null && (r.a = 0, r.sc = "OK", r.cb = 0, r.Xb = 0, xa || (xa = Va)), r
		}

		function Te(r, s, h) {
			return r.a == 0 && (r.a = s, r.sc = h, r.cb = 0), 0
		}

		function Ha(r, s, h) {
			return 3 <= h && r[s + 0] == 157 && r[s + 1] == 1 && r[s + 2] == 42
		}

		function Wa(r, s) {
			if (r == null) return 0;
			if (r.a = 0, r.sc = "OK", s == null) return Te(r, 2, "null VP8Io passed to VP8GetHeaders()");
			var h = s.data,
				g = s.w,
				b = s.ha;
			if (4 > b) return Te(r, 7, "Truncated header.");
			var x = h[g + 0] | h[g + 1] << 8 | h[g + 2] << 16,
				N = r.Od;
			if (N.Rb = !(1 & x), N.td = x >> 1 & 7, N.yd = x >> 4 & 1, N.ub = x >> 5, 3 < N.td) return Te(r, 3, "Incorrect keyframe parameters.");
			if (!N.yd) return Te(r, 4, "Frame not displayable.");
			g += 3, b -= 3;
			var S = r.Kc;
			if (N.Rb) {
				if (7 > b) return Te(r, 7, "cannot parse picture header");
				if (!Ha(h, g, b)) return Te(r, 3, "Bad code word");
				S.c = 16383 & (h[g + 4] << 8 | h[g + 3]), S.Td = h[g + 4] >> 6, S.i = 16383 & (h[g + 6] << 8 | h[g + 5]), S.Ud = h[g + 6] >> 6, g += 7, b -= 7, r.za = S.c + 15 >> 4, r.Ub = S.i + 15 >> 4, s.width = S.c, s.height = S.i, s.Da = 0, s.j = 0, s.v = 0, s.va = s.width, s.o = s.height, s.da = 0, s.ib = s.width, s.hb = s.height, s.U = s.width, s.T = s.height, o((x = r.Pa).jb, 0, 255, x.jb.length), t((x = r.Qa) != null), x.Cb = 0, x.Bb = 0, x.Fb = 1, o(x.Zb, 0, 0, x.Zb.length), o(x.Lb, 0, 0, x.Lb)
			}
			if (N.ub > b) return Te(r, 7, "bad partition length");
			ct(x = r.m, h, g, N.ub), g += N.ub, b -= N.ub, N.Rb && (S.Ld = at(x), S.Kd = at(x)), S = r.Qa;
			var k, E = r.Pa;
			if (t(x != null), t(S != null), S.Cb = at(x), S.Cb) {
				if (S.Bb = at(x), at(x)) {
					for (S.Fb = at(x), k = 0; 4 > k; ++k) S.Zb[k] = at(x) ? ht(x, 7) : 0;
					for (k = 0; 4 > k; ++k) S.Lb[k] = at(x) ? ht(x, 6) : 0
				}
				if (S.Bb)
					for (k = 0; 3 > k; ++k) E.jb[k] = at(x) ? st(x, 8) : 255
			} else S.Bb = 0;
			if (x.Ka) return Te(r, 3, "cannot parse segment header");
			if ((S = r.ed).zd = at(x), S.Tb = st(x, 6), S.wb = st(x, 3), S.Pc = at(x), S.Pc && at(x)) {
				for (E = 0; 4 > E; ++E) at(x) && (S.vd[E] = ht(x, 6));
				for (E = 0; 4 > E; ++E) at(x) && (S.od[E] = ht(x, 6))
			}
			if (r.L = S.Tb == 0 ? 0 : S.zd ? 1 : 2, x.Ka) return Te(r, 3, "cannot parse filter header");
			var W = b;
			if (b = k = g, g = k + W, S = W, r.Xb = (1 << st(r.m, 2)) - 1, W < 3 * (E = r.Xb)) h = 7;
			else {
				for (k += 3 * E, S -= 3 * E, W = 0; W < E; ++W) {
					var tt = h[b + 0] | h[b + 1] << 8 | h[b + 2] << 16;
					tt > S && (tt = S), ct(r.Jc[+W], h, k, tt), k += tt, S -= tt, b += 3
				}
				ct(r.Jc[+E], h, k, S), h = k < g ? 0 : 5
			}
			if (h != 0) return Te(r, h, "cannot parse partitions");
			for (h = st(k = r.m, 7), b = at(k) ? ht(k, 4) : 0, g = at(k) ? ht(k, 4) : 0, S = at(k) ? ht(k, 4) : 0, E = at(k) ? ht(k, 4) : 0, k = at(k) ? ht(k, 4) : 0, W = r.Qa, tt = 0; 4 > tt; ++tt) {
				if (W.Cb) {
					var et = W.Zb[tt];
					W.Fb || (et += h)
				} else {
					if (0 < tt) {
						r.pb[tt] = r.pb[0];
						continue
					}
					et = h
				}
				var X = r.pb[tt];
				X.Sc[0] = Ss[In(et + b, 127)], X.Sc[1] = _s[In(et + 0, 127)], X.Eb[0] = 2 * Ss[In(et + g, 127)], X.Eb[1] = 101581 * _s[In(et + S, 127)] >> 16, 8 > X.Eb[1] && (X.Eb[1] = 8), X.Qc[0] = Ss[In(et + E, 117)], X.Qc[1] = _s[In(et + k, 127)], X.lc = et + k
			}
			if (!N.Rb) return Te(r, 4, "Not a key frame.");
			for (at(x), N = r.Pa, h = 0; 4 > h; ++h) {
				for (b = 0; 8 > b; ++b)
					for (g = 0; 3 > g; ++g)
						for (S = 0; 11 > S; ++S) E = it(x, Tc[h][b][g][S]) ? st(x, 8) : Rc[h][b][g][S], N.Wc[h][b].Yb[g][S] = E;
				for (b = 0; 17 > b; ++b) N.Xc[h][b] = N.Wc[h][qc[b]]
			}
			return r.kc = at(x), r.kc && (r.Bd = st(x, 8)), r.cb = 1
		}

		function Va(r, s, h, g, b, x, N) {
			var S = s[b].Yb[h];
			for (h = 0; 16 > b; ++b) {
				if (!it(r, S[h + 0])) return b;
				for (; !it(r, S[h + 1]);)
					if (S = s[++b].Yb[0], h = 0, b == 16) return 16;
				var k = s[b + 1].Yb;
				if (it(r, S[h + 2])) {
					var E = r,
						W = 0;
					if (it(E, (et = S)[(tt = h) + 3]))
						if (it(E, et[tt + 6])) {
							for (S = 0, tt = 2 * (W = it(E, et[tt + 8])) + (et = it(E, et[tt + 9 + W])), W = 0, et = Dc[tt]; et[S]; ++S) W += W + it(E, et[S]);
							W += 3 + (8 << tt)
						} else it(E, et[tt + 7]) ? (W = 7 + 2 * it(E, 165), W += it(E, 145)) : W = 5 + it(E, 159);
					else W = it(E, et[tt + 4]) ? 3 + it(E, et[tt + 5]) : 2;
					S = k[2]
				} else W = 1, S = k[1];
				k = N + Oc[b], 0 > (E = r).b && nt(E);
				var tt, et = E.b,
					X = (tt = E.Ca >> 1) - (E.I >> et) >> 31;
				--E.b, E.Ca += X, E.Ca |= 1, E.I -= (tt + 1 & X) << et, x[k] = ((W ^ X) - X) * g[(0 < b) + 0]
			}
			return 16
		}

		function Zi(r) {
			var s = r.rb[r.sb - 1];
			s.la = 0, s.Na = 0, o(r.zc, 0, 0, r.zc.length), r.ja = 0
		}

		function es(r, s) {
			if (r == null) return 0;
			if (s == null) return Te(r, 2, "NULL VP8Io parameter in VP8Decode().");
			if (!r.cb && !Wa(r, s)) return 0;
			if (t(r.cb), s.ac == null || s.ac(s)) {
				s.ob && (r.L = 0);
				var h = yo[r.L];
				if (r.L == 2 ? (r.yb = 0, r.zb = 0) : (r.yb = s.v - h >> 4, r.zb = s.j - h >> 4, 0 > r.yb && (r.yb = 0), 0 > r.zb && (r.zb = 0)), r.Va = s.o + 15 + h >> 4, r.Hb = s.va + 15 + h >> 4, r.Hb > r.za && (r.Hb = r.za), r.Va > r.Ub && (r.Va = r.Ub), 0 < r.L) {
					var g = r.ed;
					for (h = 0; 4 > h; ++h) {
						var b;
						if (r.Qa.Cb) {
							var x = r.Qa.Lb[h];
							r.Qa.Fb || (x += g.Tb)
						} else x = g.Tb;
						for (b = 0; 1 >= b; ++b) {
							var N = r.gd[h][b],
								S = x;
							if (g.Pc && (S += g.vd[0], b && (S += g.od[0])), 0 < (S = 0 > S ? 0 : 63 < S ? 63 : S)) {
								var k = S;
								0 < g.wb && (k = 4 < g.wb ? k >> 2 : k >> 1) > 9 - g.wb && (k = 9 - g.wb), 1 > k && (k = 1), N.dd = k, N.tc = 2 * S + k, N.ld = 40 <= S ? 2 : 15 <= S ? 1 : 0
							} else N.tc = 0;
							N.La = b
						}
					}
				}
				h = 0
			} else Te(r, 6, "Frame setup failed"), h = r.a;
			if (h = h == 0) {
				if (h) {
					r.$c = 0, 0 < r.Aa || (r.Ic = Qc);
					t: {
						h = r.Ic,
						g = 4 * (k = r.za);
						var E = 32 * k,
							W = k + 1,
							tt = 0 < r.L ? k * (0 < r.Aa ? 2 : 1) : 0,
							et = (r.Aa == 2 ? 2 : 1) * k;
						if ((N = g + 832 + (b = 3 * (16 * h + yo[r.L]) / 2 * E) + (x = r.Fa != null && 0 < r.Fa.length ? r.Kc.c * r.Kc.i : 0)) != N) h = 0;
						else {
							if (N > r.Vb) {
								if (r.Vb = 0, r.Ec = a(N), r.Fc = 0, r.Ec == null) {
									h = Te(r, 1, "no memory during frame initialization.");
									break t
								}
								r.Vb = N
							}
							N = r.Ec, S = r.Fc, r.Ac = N, r.Bc = S, S += g, r.Gd = u(E, Ua), r.Hd = 0, r.rb = u(W + 1, za), r.sb = 1, r.wa = tt ? u(tt, gi) : null, r.Y = 0, r.D.Nb = 0, r.D.wa = r.wa, r.D.Y = r.Y, 0 < r.Aa && (r.D.Y += k), t(!0), r.oc = N, r.pc = S, S += 832, r.ya = u(et, $i), r.aa = 0, r.D.ya = r.ya, r.D.aa = r.aa, r.Aa == 2 && (r.D.aa += k), r.R = 16 * k, r.B = 8 * k, k = (E = yo[r.L]) * r.R, E = E / 2 * r.B, r.sa = N, r.ta = S + k, r.qa = r.sa, r.ra = r.ta + 16 * h * r.R + E, r.Ha = r.qa, r.Ia = r.ra + 8 * h * r.B + E, r.$c = 0, S += b, r.mb = x ? N : null, r.nb = x ? S : null, t(S + x <= r.Fc + r.Vb), Zi(r), o(r.Ac, r.Bc, 0, g), h = 1
						}
					}
					if (h) {
						if (s.ka = 0, s.y = r.sa, s.O = r.ta, s.f = r.qa, s.N = r.ra, s.ea = r.Ha, s.Vd = r.Ia, s.fa = r.R, s.Rc = r.B, s.F = null, s.J = 0, !co) {
							for (h = -255; 255 >= h; ++h) Ze[255 + h] = 0 > h ? -h : h;
							for (h = -1020; 1020 >= h; ++h) Nr[1020 + h] = -128 > h ? -128 : 127 < h ? 127 : h;
							for (h = -112; 112 >= h; ++h) ya[112 + h] = -16 > h ? -16 : 15 < h ? 15 : h;
							for (h = -255; 510 >= h; ++h) Mi[255 + h] = 0 > h ? 0 : 255 < h ? 255 : h;
							co = 1
						}
						Fi = is, xr = ns, va = Ya, vn = rs, Tn = Ja, qe = Ga, ji = ia, lo = Zr, ba = vs, ei = aa, ni = ms, Er = Ni, ri = oa, Ei = ro, ii = no, Mr = lr, wa = br, qn = gs, Zn[0] = ur, Zn[1] = as, Zn[2] = ls, Zn[3] = cs, Zn[4] = $a, Zn[5] = yi, Zn[6] = Za, Zn[7] = ea, Zn[8] = hs, Zn[9] = fs, Dr[0] = Xa, Dr[1] = ss, Dr[2] = vr, Dr[3] = bi, Dr[4] = un, Dr[5] = us, Dr[6] = Ka, Lr[0] = kr, Lr[1] = os, Lr[2] = ds, Lr[3] = na, Lr[4] = $r, Lr[5] = ps, Lr[6] = ra, h = 1
					} else h = 0
				}
				h && (h = function(X, wt) {
					for (X.M = 0; X.M < X.Va; ++X.M) {
						var pt, G = X.Jc[X.M & X.Xb],
							J = X.m,
							vt = X;
						for (pt = 0; pt < vt.za; ++pt) {
							var yt = J,
								bt = vt,
								Dt = bt.Ac,
								Ft = bt.Bc + 4 * pt,
								Vt = bt.zc,
								Et = bt.ya[bt.aa + pt];
							if (bt.Qa.Bb ? Et.$b = it(yt, bt.Pa.jb[0]) ? 2 + it(yt, bt.Pa.jb[2]) : it(yt, bt.Pa.jb[1]) : Et.$b = 0, bt.kc && (Et.Ad = it(yt, bt.Bd)), Et.Za = !it(yt, 145) + 0, Et.Za) {
								var ge = Et.Ob,
									me = 0;
								for (bt = 0; 4 > bt; ++bt) {
									var he, se = Vt[0 + bt];
									for (he = 0; 4 > he; ++he) {
										se = Bc[Dt[Ft + he]][se];
										for (var xe = Du[it(yt, se[0])]; 0 < xe;) xe = Du[2 * xe + it(yt, se[xe])];
										se = -xe, Dt[Ft + he] = se
									}
									i(ge, me, Dt, Ft, 4), me += 4, Vt[0 + bt] = se
								}
							} else se = it(yt, 156) ? it(yt, 128) ? 1 : 3 : it(yt, 163) ? 2 : 0, Et.Ob[0] = se, o(Dt, Ft, se, 4), o(Vt, 0, se, 4);
							Et.Dd = it(yt, 142) ? it(yt, 114) ? it(yt, 183) ? 1 : 3 : 2 : 0
						}
						if (vt.m.Ka) return Te(X, 7, "Premature end-of-partition0 encountered.");
						for (; X.ja < X.za; ++X.ja) {
							if (vt = G, yt = (J = X).rb[J.sb - 1], Dt = J.rb[J.sb + J.ja], pt = J.ya[J.aa + J.ja], Ft = J.kc ? pt.Ad : 0) yt.la = Dt.la = 0, pt.Za || (yt.Na = Dt.Na = 0), pt.Hc = 0, pt.Gc = 0, pt.ia = 0;
							else {
								var we, ee;
								if (yt = Dt, Dt = vt, Ft = J.Pa.Xc, Vt = J.ya[J.aa + J.ja], Et = J.pb[Vt.$b], bt = Vt.ad, ge = 0, me = J.rb[J.sb - 1], se = he = 0, o(bt, ge, 0, 384), Vt.Za) var Xe = 0,
									Ln = Ft[3];
								else {
									xe = a(16);
									var Ke = yt.Na + me.Na;
									if (Ke = xa(Dt, Ft[1], Ke, Et.Eb, 0, xe, 0), yt.Na = me.Na = (0 < Ke) + 0, 1 < Ke) Fi(xe, 0, bt, ge);
									else {
										var An = xe[0] + 3 >> 3;
										for (xe = 0; 256 > xe; xe += 16) bt[ge + xe] = An
									}
									Xe = 1, Ln = Ft[0]
								}
								var ve = 15 & yt.la,
									jn = 15 & me.la;
								for (xe = 0; 4 > xe; ++xe) {
									var En = 1 & jn;
									for (An = ee = 0; 4 > An; ++An) ve = ve >> 1 | (En = (Ke = xa(Dt, Ln, Ke = En + (1 & ve), Et.Sc, Xe, bt, ge)) > Xe) << 7, ee = ee << 2 | (3 < Ke ? 3 : 1 < Ke ? 2 : bt[ge + 0] != 0), ge += 16;
									ve >>= 4, jn = jn >> 1 | En << 7, he = (he << 8 | ee) >>> 0
								}
								for (Ln = ve, Xe = jn >> 4, we = 0; 4 > we; we += 2) {
									for (ee = 0, ve = yt.la >> 4 + we, jn = me.la >> 4 + we, xe = 0; 2 > xe; ++xe) {
										for (En = 1 & jn, An = 0; 2 > An; ++An) Ke = En + (1 & ve), ve = ve >> 1 | (En = 0 < (Ke = xa(Dt, Ft[2], Ke, Et.Qc, 0, bt, ge))) << 3, ee = ee << 2 | (3 < Ke ? 3 : 1 < Ke ? 2 : bt[ge + 0] != 0), ge += 16;
										ve >>= 2, jn = jn >> 1 | En << 5
									}
									se |= ee << 4 * we, Ln |= ve << 4 << we, Xe |= (240 & jn) << we
								}
								yt.la = Ln, me.la = Xe, Vt.Hc = he, Vt.Gc = se, Vt.ia = 43690 & se ? 0 : Et.ia, Ft = !(he | se)
							}
							if (0 < J.L && (J.wa[J.Y + J.ja] = J.gd[pt.$b][pt.Za], J.wa[J.Y + J.ja].La |= !Ft), vt.Ka) return Te(X, 7, "Premature end-of-file encountered.")
						}
						if (Zi(X), J = wt, vt = 1, pt = (G = X).D, yt = 0 < G.L && G.M >= G.zb && G.M <= G.Va, G.Aa == 0) t: {
							if (pt.M = G.M, pt.uc = yt, ha(G, pt), vt = 1, pt = (ee = G.D).Nb, yt = (se = yo[G.L]) * G.R, Dt = se / 2 * G.B, xe = 16 * pt * G.R, An = 8 * pt * G.B, Ft = G.sa, Vt = G.ta - yt + xe, Et = G.qa, bt = G.ra - Dt + An, ge = G.Ha, me = G.Ia - Dt + An, jn = (ve = ee.M) == 0, he = ve >= G.Va - 1, G.Aa == 2 && ha(G, ee), ee.uc)
								for (En = (Ke = G).D.M, t(Ke.D.uc), ee = Ke.yb; ee < Ke.Hb; ++ee) {
									Xe = ee, Ln = En;
									var tn = (sn = (De = Ke).D).Nb;
									we = De.R;
									var sn = sn.wa[sn.Y + Xe],
										bn = De.sa,
										Wn = De.ta + 16 * tn * we + 16 * Xe,
										fr = sn.dd,
										en = sn.tc;
									if (en != 0)
										if (t(3 <= en), De.L == 1) 0 < Xe && Mr(bn, Wn, we, en + 4), sn.La && qn(bn, Wn, we, en), 0 < Ln && ii(bn, Wn, we, en + 4), sn.La && wa(bn, Wn, we, en);
										else {
											var Ar = De.B,
												ai = De.qa,
												Di = De.ra + 8 * tn * Ar + 8 * Xe,
												Rr = De.Ha,
												De = De.Ia + 8 * tn * Ar + 8 * Xe;
											tn = sn.ld, 0 < Xe && (lo(bn, Wn, we, en + 4, fr, tn), ei(ai, Di, Rr, De, Ar, en + 4, fr, tn)), sn.La && (Er(bn, Wn, we, en, fr, tn), Ei(ai, Di, Rr, De, Ar, en, fr, tn)), 0 < Ln && (ji(bn, Wn, we, en + 4, fr, tn), ba(ai, Di, Rr, De, Ar, en + 4, fr, tn)), sn.La && (ni(bn, Wn, we, en, fr, tn), ri(ai, Di, Rr, De, Ar, en, fr, tn))
										}
								}
							if (G.ia && alert("todo:DitherRow"), J.put != null) {
								if (ee = 16 * ve, ve = 16 * (ve + 1), jn ? (J.y = G.sa, J.O = G.ta + xe, J.f = G.qa, J.N = G.ra + An, J.ea = G.Ha, J.W = G.Ia + An) : (ee -= se, J.y = Ft, J.O = Vt, J.f = Et, J.N = bt, J.ea = ge, J.W = me), he || (ve -= se), ve > J.o && (ve = J.o), J.F = null, J.J = null, G.Fa != null && 0 < G.Fa.length && ee < ve && (J.J = ca(G, J, ee, ve - ee), J.F = G.mb, J.F == null && J.F.length == 0)) {
									vt = Te(G, 3, "Could not decode alpha data.");
									break t
								}
								ee < J.j && (se = J.j - ee, ee = J.j, t(!(1 & se)), J.O += G.R * se, J.N += G.B * (se >> 1), J.W += G.B * (se >> 1), J.F != null && (J.J += J.width * se)), ee < ve && (J.O += J.v, J.N += J.v >> 1, J.W += J.v >> 1, J.F != null && (J.J += J.v), J.ka = ee - J.j, J.U = J.va - J.v, J.T = ve - ee, vt = J.put(J))
							}
							pt + 1 != G.Ic || he || (i(G.sa, G.ta - yt, Ft, Vt + 16 * G.R, yt), i(G.qa, G.ra - Dt, Et, bt + 8 * G.B, Dt), i(G.Ha, G.Ia - Dt, ge, me + 8 * G.B, Dt))
						}
						if (!vt) return Te(X, 6, "Output aborted.")
					}
					return 1
				}(r, s)), s.bc != null && s.bc(s), h &= 1
			}
			return h ? (r.cb = 0, h) : 0
		}

		function Xn(r, s, h, g, b) {
			b = r[s + h + 32 * g] + (b >> 3), r[s + h + 32 * g] = -256 & b ? 0 > b ? 0 : 255 : b
		}

		function vi(r, s, h, g, b, x) {
			Xn(r, s, 0, h, g + b), Xn(r, s, 1, h, g + x), Xn(r, s, 2, h, g - x), Xn(r, s, 3, h, g - b)
		}

		function yn(r) {
			return (20091 * r >> 16) + r
		}

		function Qi(r, s, h, g) {
			var b, x = 0,
				N = a(16);
			for (b = 0; 4 > b; ++b) {
				var S = r[s + 0] + r[s + 8],
					k = r[s + 0] - r[s + 8],
					E = (35468 * r[s + 4] >> 16) - yn(r[s + 12]),
					W = yn(r[s + 4]) + (35468 * r[s + 12] >> 16);
				N[x + 0] = S + W, N[x + 1] = k + E, N[x + 2] = k - E, N[x + 3] = S - W, x += 4, s++
			}
			for (b = x = 0; 4 > b; ++b) S = (r = N[x + 0] + 4) + N[x + 8], k = r - N[x + 8], E = (35468 * N[x + 4] >> 16) - yn(N[x + 12]), Xn(h, g, 0, 0, S + (W = yn(N[x + 4]) + (35468 * N[x + 12] >> 16))), Xn(h, g, 1, 0, k + E), Xn(h, g, 2, 0, k - E), Xn(h, g, 3, 0, S - W), x++, g += 32
		}

		function Ga(r, s, h, g) {
			var b = r[s + 0] + 4,
				x = 35468 * r[s + 4] >> 16,
				N = yn(r[s + 4]),
				S = 35468 * r[s + 1] >> 16;
			vi(h, g, 0, b + N, r = yn(r[s + 1]), S), vi(h, g, 1, b + x, r, S), vi(h, g, 2, b - x, r, S), vi(h, g, 3, b - N, r, S)
		}

		function ns(r, s, h, g, b) {
			Qi(r, s, h, g), b && Qi(r, s + 16, h, g + 4)
		}

		function Ya(r, s, h, g) {
			xr(r, s + 0, h, g, 1), xr(r, s + 32, h, g + 128, 1)
		}

		function rs(r, s, h, g) {
			var b;
			for (r = r[s + 0] + 4, b = 0; 4 > b; ++b)
				for (s = 0; 4 > s; ++s) Xn(h, g, s, b, r)
		}

		function Ja(r, s, h, g) {
			r[s + 0] && vn(r, s + 0, h, g), r[s + 16] && vn(r, s + 16, h, g + 4), r[s + 32] && vn(r, s + 32, h, g + 128), r[s + 48] && vn(r, s + 48, h, g + 128 + 4)
		}

		function is(r, s, h, g) {
			var b, x = a(16);
			for (b = 0; 4 > b; ++b) {
				var N = r[s + 0 + b] + r[s + 12 + b],
					S = r[s + 4 + b] + r[s + 8 + b],
					k = r[s + 4 + b] - r[s + 8 + b],
					E = r[s + 0 + b] - r[s + 12 + b];
				x[0 + b] = N + S, x[8 + b] = N - S, x[4 + b] = E + k, x[12 + b] = E - k
			}
			for (b = 0; 4 > b; ++b) N = (r = x[0 + 4 * b] + 3) + x[3 + 4 * b], S = x[1 + 4 * b] + x[2 + 4 * b], k = x[1 + 4 * b] - x[2 + 4 * b], E = r - x[3 + 4 * b], h[g + 0] = N + S >> 3, h[g + 16] = E + k >> 3, h[g + 32] = N - S >> 3, h[g + 48] = E - k >> 3, g += 64
		}

		function ta(r, s, h) {
			var g, b = s - 32,
				x = Fn,
				N = 255 - r[b - 1];
			for (g = 0; g < h; ++g) {
				var S, k = x,
					E = N + r[s - 1];
				for (S = 0; S < h; ++S) r[s + S] = k[E + r[b + S]];
				s += 32
			}
		}

		function as(r, s) {
			ta(r, s, 4)
		}

		function os(r, s) {
			ta(r, s, 8)
		}

		function ss(r, s) {
			ta(r, s, 16)
		}

		function vr(r, s) {
			var h;
			for (h = 0; 16 > h; ++h) i(r, s + 32 * h, r, s - 32, 16)
		}

		function bi(r, s) {
			var h;
			for (h = 16; 0 < h; --h) o(r, s, r[s - 1], 16), s += 32
		}

		function wi(r, s, h) {
			var g;
			for (g = 0; 16 > g; ++g) o(s, h + 32 * g, r, 16)
		}

		function Xa(r, s) {
			var h, g = 16;
			for (h = 0; 16 > h; ++h) g += r[s - 1 + 32 * h] + r[s + h - 32];
			wi(g >> 5, r, s)
		}

		function un(r, s) {
			var h, g = 8;
			for (h = 0; 16 > h; ++h) g += r[s - 1 + 32 * h];
			wi(g >> 4, r, s)
		}

		function us(r, s) {
			var h, g = 8;
			for (h = 0; 16 > h; ++h) g += r[s + h - 32];
			wi(g >> 4, r, s)
		}

		function Ka(r, s) {
			wi(128, r, s)
		}

		function Kt(r, s, h) {
			return r + 2 * s + h + 2 >> 2
		}

		function ls(r, s) {
			var h, g = s - 32;
			for (g = new Uint8Array([Kt(r[g - 1], r[g + 0], r[g + 1]), Kt(r[g + 0], r[g + 1], r[g + 2]), Kt(r[g + 1], r[g + 2], r[g + 3]), Kt(r[g + 2], r[g + 3], r[g + 4])]), h = 0; 4 > h; ++h) i(r, s + 32 * h, g, 0, g.length)
		}

		function cs(r, s) {
			var h = r[s - 1],
				g = r[s - 1 + 32],
				b = r[s - 1 + 64],
				x = r[s - 1 + 96];
			xt(r, s + 0, 16843009 * Kt(r[s - 1 - 32], h, g)), xt(r, s + 32, 16843009 * Kt(h, g, b)), xt(r, s + 64, 16843009 * Kt(g, b, x)), xt(r, s + 96, 16843009 * Kt(b, x, x))
		}

		function ur(r, s) {
			var h, g = 4;
			for (h = 0; 4 > h; ++h) g += r[s + h - 32] + r[s - 1 + 32 * h];
			for (g >>= 3, h = 0; 4 > h; ++h) o(r, s + 32 * h, g, 4)
		}

		function $a(r, s) {
			var h = r[s - 1 + 0],
				g = r[s - 1 + 32],
				b = r[s - 1 + 64],
				x = r[s - 1 - 32],
				N = r[s + 0 - 32],
				S = r[s + 1 - 32],
				k = r[s + 2 - 32],
				E = r[s + 3 - 32];
			r[s + 0 + 96] = Kt(g, b, r[s - 1 + 96]), r[s + 1 + 96] = r[s + 0 + 64] = Kt(h, g, b), r[s + 2 + 96] = r[s + 1 + 64] = r[s + 0 + 32] = Kt(x, h, g), r[s + 3 + 96] = r[s + 2 + 64] = r[s + 1 + 32] = r[s + 0 + 0] = Kt(N, x, h), r[s + 3 + 64] = r[s + 2 + 32] = r[s + 1 + 0] = Kt(S, N, x), r[s + 3 + 32] = r[s + 2 + 0] = Kt(k, S, N), r[s + 3 + 0] = Kt(E, k, S)
		}

		function Za(r, s) {
			var h = r[s + 1 - 32],
				g = r[s + 2 - 32],
				b = r[s + 3 - 32],
				x = r[s + 4 - 32],
				N = r[s + 5 - 32],
				S = r[s + 6 - 32],
				k = r[s + 7 - 32];
			r[s + 0 + 0] = Kt(r[s + 0 - 32], h, g), r[s + 1 + 0] = r[s + 0 + 32] = Kt(h, g, b), r[s + 2 + 0] = r[s + 1 + 32] = r[s + 0 + 64] = Kt(g, b, x), r[s + 3 + 0] = r[s + 2 + 32] = r[s + 1 + 64] = r[s + 0 + 96] = Kt(b, x, N), r[s + 3 + 32] = r[s + 2 + 64] = r[s + 1 + 96] = Kt(x, N, S), r[s + 3 + 64] = r[s + 2 + 96] = Kt(N, S, k), r[s + 3 + 96] = Kt(S, k, k)
		}

		function yi(r, s) {
			var h = r[s - 1 + 0],
				g = r[s - 1 + 32],
				b = r[s - 1 + 64],
				x = r[s - 1 - 32],
				N = r[s + 0 - 32],
				S = r[s + 1 - 32],
				k = r[s + 2 - 32],
				E = r[s + 3 - 32];
			r[s + 0 + 0] = r[s + 1 + 64] = x + N + 1 >> 1, r[s + 1 + 0] = r[s + 2 + 64] = N + S + 1 >> 1, r[s + 2 + 0] = r[s + 3 + 64] = S + k + 1 >> 1, r[s + 3 + 0] = k + E + 1 >> 1, r[s + 0 + 96] = Kt(b, g, h), r[s + 0 + 64] = Kt(g, h, x), r[s + 0 + 32] = r[s + 1 + 96] = Kt(h, x, N), r[s + 1 + 32] = r[s + 2 + 96] = Kt(x, N, S), r[s + 2 + 32] = r[s + 3 + 96] = Kt(N, S, k), r[s + 3 + 32] = Kt(S, k, E)
		}

		function ea(r, s) {
			var h = r[s + 0 - 32],
				g = r[s + 1 - 32],
				b = r[s + 2 - 32],
				x = r[s + 3 - 32],
				N = r[s + 4 - 32],
				S = r[s + 5 - 32],
				k = r[s + 6 - 32],
				E = r[s + 7 - 32];
			r[s + 0 + 0] = h + g + 1 >> 1, r[s + 1 + 0] = r[s + 0 + 64] = g + b + 1 >> 1, r[s + 2 + 0] = r[s + 1 + 64] = b + x + 1 >> 1, r[s + 3 + 0] = r[s + 2 + 64] = x + N + 1 >> 1, r[s + 0 + 32] = Kt(h, g, b), r[s + 1 + 32] = r[s + 0 + 96] = Kt(g, b, x), r[s + 2 + 32] = r[s + 1 + 96] = Kt(b, x, N), r[s + 3 + 32] = r[s + 2 + 96] = Kt(x, N, S), r[s + 3 + 64] = Kt(N, S, k), r[s + 3 + 96] = Kt(S, k, E)
		}

		function fs(r, s) {
			var h = r[s - 1 + 0],
				g = r[s - 1 + 32],
				b = r[s - 1 + 64],
				x = r[s - 1 + 96];
			r[s + 0 + 0] = h + g + 1 >> 1, r[s + 2 + 0] = r[s + 0 + 32] = g + b + 1 >> 1, r[s + 2 + 32] = r[s + 0 + 64] = b + x + 1 >> 1, r[s + 1 + 0] = Kt(h, g, b), r[s + 3 + 0] = r[s + 1 + 32] = Kt(g, b, x), r[s + 3 + 32] = r[s + 1 + 64] = Kt(b, x, x), r[s + 3 + 64] = r[s + 2 + 64] = r[s + 0 + 96] = r[s + 1 + 96] = r[s + 2 + 96] = r[s + 3 + 96] = x
		}

		function hs(r, s) {
			var h = r[s - 1 + 0],
				g = r[s - 1 + 32],
				b = r[s - 1 + 64],
				x = r[s - 1 + 96],
				N = r[s - 1 - 32],
				S = r[s + 0 - 32],
				k = r[s + 1 - 32],
				E = r[s + 2 - 32];
			r[s + 0 + 0] = r[s + 2 + 32] = h + N + 1 >> 1, r[s + 0 + 32] = r[s + 2 + 64] = g + h + 1 >> 1, r[s + 0 + 64] = r[s + 2 + 96] = b + g + 1 >> 1, r[s + 0 + 96] = x + b + 1 >> 1, r[s + 3 + 0] = Kt(S, k, E), r[s + 2 + 0] = Kt(N, S, k), r[s + 1 + 0] = r[s + 3 + 32] = Kt(h, N, S), r[s + 1 + 32] = r[s + 3 + 64] = Kt(g, h, N), r[s + 1 + 64] = r[s + 3 + 96] = Kt(b, g, h), r[s + 1 + 96] = Kt(x, b, g)
		}

		function ds(r, s) {
			var h;
			for (h = 0; 8 > h; ++h) i(r, s + 32 * h, r, s - 32, 8)
		}

		function na(r, s) {
			var h;
			for (h = 0; 8 > h; ++h) o(r, s, r[s - 1], 8), s += 32
		}

		function Kr(r, s, h) {
			var g;
			for (g = 0; 8 > g; ++g) o(s, h + 32 * g, r, 8)
		}

		function kr(r, s) {
			var h, g = 8;
			for (h = 0; 8 > h; ++h) g += r[s + h - 32] + r[s - 1 + 32 * h];
			Kr(g >> 4, r, s)
		}

		function ps(r, s) {
			var h, g = 4;
			for (h = 0; 8 > h; ++h) g += r[s + h - 32];
			Kr(g >> 3, r, s)
		}

		function $r(r, s) {
			var h, g = 4;
			for (h = 0; 8 > h; ++h) g += r[s - 1 + 32 * h];
			Kr(g >> 3, r, s)
		}

		function ra(r, s) {
			Kr(128, r, s)
		}

		function xi(r, s, h) {
			var g = r[s - h],
				b = r[s + 0],
				x = 3 * (b - g) + ys[1020 + r[s - 2 * h] - r[s + h]],
				N = fo[112 + (x + 4 >> 3)];
			r[s - h] = Fn[255 + g + fo[112 + (x + 3 >> 3)]], r[s + 0] = Fn[255 + b - N]
		}

		function Qa(r, s, h, g) {
			var b = r[s + 0],
				x = r[s + h];
			return Un[255 + r[s - 2 * h] - r[s - h]] > g || Un[255 + x - b] > g
		}

		function to(r, s, h, g) {
			return 4 * Un[255 + r[s - h] - r[s + 0]] + Un[255 + r[s - 2 * h] - r[s + h]] <= g
		}

		function eo(r, s, h, g, b) {
			var x = r[s - 3 * h],
				N = r[s - 2 * h],
				S = r[s - h],
				k = r[s + 0],
				E = r[s + h],
				W = r[s + 2 * h],
				tt = r[s + 3 * h];
			return 4 * Un[255 + S - k] + Un[255 + N - E] > g ? 0 : Un[255 + r[s - 4 * h] - x] <= b && Un[255 + x - N] <= b && Un[255 + N - S] <= b && Un[255 + tt - W] <= b && Un[255 + W - E] <= b && Un[255 + E - k] <= b
		}

		function no(r, s, h, g) {
			var b = 2 * g + 1;
			for (g = 0; 16 > g; ++g) to(r, s + g, h, b) && xi(r, s + g, h)
		}

		function lr(r, s, h, g) {
			var b = 2 * g + 1;
			for (g = 0; 16 > g; ++g) to(r, s + g * h, 1, b) && xi(r, s + g * h, 1)
		}

		function br(r, s, h, g) {
			var b;
			for (b = 3; 0 < b; --b) no(r, s += 4 * h, h, g)
		}

		function gs(r, s, h, g) {
			var b;
			for (b = 3; 0 < b; --b) lr(r, s += 4, h, g)
		}

		function Cr(r, s, h, g, b, x, N, S) {
			for (x = 2 * x + 1; 0 < b--;) {
				if (eo(r, s, h, x, N))
					if (Qa(r, s, h, S)) xi(r, s, h);
					else {
						var k = r,
							E = s,
							W = h,
							tt = k[E - 2 * W],
							et = k[E - W],
							X = k[E + 0],
							wt = k[E + W],
							pt = k[E + 2 * W],
							G = 27 * (vt = ys[1020 + 3 * (X - et) + ys[1020 + tt - wt]]) + 63 >> 7,
							J = 18 * vt + 63 >> 7,
							vt = 9 * vt + 63 >> 7;
						k[E - 3 * W] = Fn[255 + k[E - 3 * W] + vt], k[E - 2 * W] = Fn[255 + tt + J], k[E - W] = Fn[255 + et + G], k[E + 0] = Fn[255 + X - G], k[E + W] = Fn[255 + wt - J], k[E + 2 * W] = Fn[255 + pt - vt]
					} s += g
			}
		}

		function Kn(r, s, h, g, b, x, N, S) {
			for (x = 2 * x + 1; 0 < b--;) {
				if (eo(r, s, h, x, N))
					if (Qa(r, s, h, S)) xi(r, s, h);
					else {
						var k = r,
							E = s,
							W = h,
							tt = k[E - W],
							et = k[E + 0],
							X = k[E + W],
							wt = fo[112 + ((pt = 3 * (et - tt)) + 4 >> 3)],
							pt = fo[112 + (pt + 3 >> 3)],
							G = wt + 1 >> 1;
						k[E - 2 * W] = Fn[255 + k[E - 2 * W] + G], k[E - W] = Fn[255 + tt + pt], k[E + 0] = Fn[255 + et - wt], k[E + W] = Fn[255 + X - G]
					} s += g
			}
		}

		function ia(r, s, h, g, b, x) {
			Cr(r, s, h, 1, 16, g, b, x)
		}

		function Zr(r, s, h, g, b, x) {
			Cr(r, s, 1, h, 16, g, b, x)
		}

		function ms(r, s, h, g, b, x) {
			var N;
			for (N = 3; 0 < N; --N) Kn(r, s += 4 * h, h, 1, 16, g, b, x)
		}

		function Ni(r, s, h, g, b, x) {
			var N;
			for (N = 3; 0 < N; --N) Kn(r, s += 4, 1, h, 16, g, b, x)
		}

		function vs(r, s, h, g, b, x, N, S) {
			Cr(r, s, b, 1, 8, x, N, S), Cr(h, g, b, 1, 8, x, N, S)
		}

		function aa(r, s, h, g, b, x, N, S) {
			Cr(r, s, 1, b, 8, x, N, S), Cr(h, g, 1, b, 8, x, N, S)
		}

		function oa(r, s, h, g, b, x, N, S) {
			Kn(r, s + 4 * b, b, 1, 8, x, N, S), Kn(h, g + 4 * b, b, 1, 8, x, N, S)
		}

		function ro(r, s, h, g, b, x, N, S) {
			Kn(r, s + 4, 1, b, 8, x, N, S), Kn(h, g + 4, 1, b, 8, x, N, S)
		}

		function Li() {
			this.ba = new kn, this.ec = [], this.cc = [], this.Mc = [], this.Dc = this.Nc = this.dc = this.fc = 0, this.Oa = new oe, this.memory = 0, this.Ib = "OutputFunc", this.Jb = "OutputAlphaFunc", this.Nd = "OutputRowFunc"
		}

		function sa() {
			this.data = [], this.offset = this.kd = this.ha = this.w = 0, this.na = [], this.xa = this.gb = this.Ja = this.Sa = this.P = 0
		}

		function ua() {
			this.nc = this.Ea = this.b = this.hc = 0, this.K = [], this.w = 0
		}

		function io() {
			this.ua = 0, this.Wa = new B, this.vb = new B, this.md = this.xc = this.wc = 0, this.vc = [], this.Wb = 0, this.Ya = new T, this.yc = new C
		}

		function bs() {
			this.xb = this.a = 0, this.l = new mi, this.ca = new kn, this.V = [], this.Ba = 0, this.Ta = [], this.Ua = 0, this.m = new L, this.Pb = 0, this.wd = new L, this.Ma = this.$ = this.C = this.i = this.c = this.xd = 0, this.s = new io, this.ab = 0, this.gc = u(4, ua), this.Oc = 0
		}

		function Ai() {
			this.Lc = this.Z = this.$a = this.i = this.c = 0, this.l = new mi, this.ic = 0, this.ca = [], this.tb = 0, this.qd = null, this.rd = 0
		}

		function Qr(r, s, h, g, b, x, N) {
			for (r = r == null ? 0 : r[s + 0], s = 0; s < N; ++s) b[x + s] = r + h[g + s] & 255, r = b[x + s]
		}

		function la(r, s, h, g, b, x, N) {
			var S;
			if (r == null) Qr(null, null, h, g, b, x, N);
			else
				for (S = 0; S < N; ++S) b[x + S] = r[s + S] + h[g + S] & 255
		}

		function Ir(r, s, h, g, b, x, N) {
			if (r == null) Qr(null, null, h, g, b, x, N);
			else {
				var S, k = r[s + 0],
					E = k,
					W = k;
				for (S = 0; S < N; ++S) E = W + (k = r[s + S]) - E, W = h[g + S] + (-256 & E ? 0 > E ? 0 : 255 : E) & 255, E = k, b[x + S] = W
			}
		}

		function ca(r, s, h, g) {
			var b = s.width,
				x = s.o;
			if (t(r != null && s != null), 0 > h || 0 >= g || h + g > x) return null;
			if (!r.Cc) {
				if (r.ga == null) {
					var N;
					if (r.ga = new Ai, (N = r.ga == null) || (N = s.width * s.o, t(r.Gb.length == 0), r.Gb = a(N), r.Uc = 0, r.Gb == null ? N = 0 : (r.mb = r.Gb, r.nb = r.Uc, r.rc = null, N = 1), N = !N), !N) {
						N = r.ga;
						var S = r.Fa,
							k = r.P,
							E = r.qc,
							W = r.mb,
							tt = r.nb,
							et = k + 1,
							X = E - 1,
							wt = N.l;
						if (t(S != null && W != null && s != null), Or[0] = null, Or[1] = Qr, Or[2] = la, Or[3] = Ir, N.ca = W, N.tb = tt, N.c = s.width, N.i = s.height, t(0 < N.c && 0 < N.i), 1 >= E) s = 0;
						else if (N.$a = S[k + 0] >> 0 & 3, N.Z = S[k + 0] >> 2 & 3, N.Lc = S[k + 0] >> 4 & 3, k = S[k + 0] >> 6 & 3, 0 > N.$a || 1 < N.$a || 4 <= N.Z || 1 < N.Lc || k) s = 0;
						else if (wt.put = Re, wt.ac = pe, wt.bc = an, wt.ma = N, wt.width = s.width, wt.height = s.height, wt.Da = s.Da, wt.v = s.v, wt.va = s.va, wt.j = s.j, wt.o = s.o, N.$a) t: {
							t(N.$a == 1),
							s = Rn();e: for (;;) {
								if (s == null) {
									s = 0;
									break t
								}
								if (t(N != null), N.mc = s, s.c = N.c, s.i = N.i, s.l = N.l, s.l.ma = N, s.l.width = N.c, s.l.height = N.i, s.a = 0, Q(s.m, S, et, X), !sr(N.c, N.i, 1, s, null) || (s.ab == 1 && s.gc[0].hc == 3 && Cn(s.s) ? (N.ic = 1, S = s.c * s.i, s.Ta = null, s.Ua = 0, s.V = a(S), s.Ba = 0, s.V == null ? (s.a = 1, s = 0) : s = 1) : (N.ic = 0, s = Xr(s, N.c)), !s)) break e;
								s = 1;
								break t
							}
							N.mc = null,
							s = 0
						}
						else s = X >= N.c * N.i;
						N = !s
					}
					if (N) return null;
					r.ga.Lc != 1 ? r.Ga = 0 : g = x - h
				}
				t(r.ga != null), t(h + g <= x);
				t: {
					if (s = (S = r.ga).c, x = S.l.o, S.$a == 0) {
						if (et = r.rc, X = r.Vc, wt = r.Fa, k = r.P + 1 + h * s, E = r.mb, W = r.nb + h * s, t(k <= r.P + r.qc), S.Z != 0)
							for (t(Or[S.Z] != null), N = 0; N < g; ++N) Or[S.Z](et, X, wt, k, E, W, s), et = E, X = W, W += s, k += s;
						else
							for (N = 0; N < g; ++N) i(E, W, wt, k, s), et = E, X = W, W += s, k += s;
						r.rc = et, r.Vc = X
					} else {
						if (t(S.mc != null), s = h + g, t((N = S.mc) != null), t(s <= N.i), N.C >= s) s = 1;
						else if (S.ic || Z(), S.ic) {
							S = N.V, et = N.Ba, X = N.c;
							var pt = N.i,
								G = (wt = 1, k = N.$ / X, E = N.$ % X, W = N.m, tt = N.s, N.$),
								J = X * pt,
								vt = X * s,
								yt = tt.wc,
								bt = G < vt ? Se(tt, E, k) : null;
							t(G <= J), t(s <= pt), t(Cn(tt));
							e: for (;;) {
								for (; !W.h && G < vt;) {
									if (E & yt || (bt = Se(tt, E, k)), t(bt != null), V(W), 256 > (pt = Fe(bt.G[0], bt.H[0], W))) S[et + G] = pt, ++G, ++E >= X && (E = 0, ++k <= s && !(k % 16) && Yn(N, k));
									else {
										if (!(280 > pt)) {
											wt = 0;
											break e
										}
										pt = Ye(pt - 256, W);
										var Dt, Ft = Fe(bt.G[4], bt.H[4], W);
										if (V(W), !(G >= (Ft = Be(X, Ft = Ye(Ft, W))) && J - G >= pt)) {
											wt = 0;
											break e
										}
										for (Dt = 0; Dt < pt; ++Dt) S[et + G + Dt] = S[et + G + Dt - Ft];
										for (G += pt, E += pt; E >= X;) E -= X, ++k <= s && !(k % 16) && Yn(N, k);
										G < vt && E & yt && (bt = Se(tt, E, k))
									}
									t(W.h == O(W))
								}
								Yn(N, k > s ? s : k);
								break e
							}!wt || W.h && G < J ? (wt = 0, N.a = W.h ? 5 : 3) : N.$ = G, s = wt
						} else s = Jn(N, N.V, N.Ba, N.c, N.i, s, fi);
						if (!s) {
							g = 0;
							break t
						}
					}
					h + g >= x && (r.Cc = 1),
					g = 1
				}
				if (!g) return null;
				if (r.Cc && ((g = r.ga) != null && (g.mc = null), r.ga = null, 0 < r.Ga)) return alert("todo:WebPDequantizeLevels"), null
			}
			return r.nb + h * b
		}

		function l(r, s, h, g, b, x) {
			for (; 0 < b--;) {
				var N, S = r,
					k = s + (h ? 1 : 0),
					E = r,
					W = s + (h ? 0 : 3);
				for (N = 0; N < g; ++N) {
					var tt = E[W + 4 * N];
					tt != 255 && (tt *= 32897, S[k + 4 * N + 0] = S[k + 4 * N + 0] * tt >> 23, S[k + 4 * N + 1] = S[k + 4 * N + 1] * tt >> 23, S[k + 4 * N + 2] = S[k + 4 * N + 2] * tt >> 23)
				}
				s += x
			}
		}

		function w(r, s, h, g, b) {
			for (; 0 < g--;) {
				var x;
				for (x = 0; x < h; ++x) {
					var N = r[s + 2 * x + 0],
						S = 15 & (E = r[s + 2 * x + 1]),
						k = 4369 * S,
						E = (240 & E | E >> 4) * k >> 16;
					r[s + 2 * x + 0] = (240 & N | N >> 4) * k >> 16 & 240 | (15 & N | N << 4) * k >> 16 >> 4 & 15, r[s + 2 * x + 1] = 240 & E | S
				}
				s += b
			}
		}

		function D(r, s, h, g, b, x, N, S) {
			var k, E, W = 255;
			for (E = 0; E < b; ++E) {
				for (k = 0; k < g; ++k) {
					var tt = r[s + k];
					x[N + 4 * k] = tt, W &= tt
				}
				s += h, N += S
			}
			return W != 255
		}

		function H(r, s, h, g, b) {
			var x;
			for (x = 0; x < b; ++x) h[g + x] = r[s + x] >> 8
		}

		function Z() {
			zn = l, _e = w, Pe = D, ze = H
		}

		function mt(r, s, h) {
			R[r] = function(g, b, x, N, S, k, E, W, tt, et, X, wt, pt, G, J, vt, yt) {
				var bt, Dt = yt - 1 >> 1,
					Ft = S[k + 0] | E[W + 0] << 16,
					Vt = tt[et + 0] | X[wt + 0] << 16;
				t(g != null);
				var Et = 3 * Ft + Vt + 131074 >> 2;
				for (s(g[b + 0], 255 & Et, Et >> 16, pt, G), x != null && (Et = 3 * Vt + Ft + 131074 >> 2, s(x[N + 0], 255 & Et, Et >> 16, J, vt)), bt = 1; bt <= Dt; ++bt) {
					var ge = S[k + bt] | E[W + bt] << 16,
						me = tt[et + bt] | X[wt + bt] << 16,
						he = Ft + ge + Vt + me + 524296,
						se = he + 2 * (ge + Vt) >> 3;
					Et = se + Ft >> 1, Ft = (he = he + 2 * (Ft + me) >> 3) + ge >> 1, s(g[b + 2 * bt - 1], 255 & Et, Et >> 16, pt, G + (2 * bt - 1) * h), s(g[b + 2 * bt - 0], 255 & Ft, Ft >> 16, pt, G + (2 * bt - 0) * h), x != null && (Et = he + Vt >> 1, Ft = se + me >> 1, s(x[N + 2 * bt - 1], 255 & Et, Et >> 16, J, vt + (2 * bt - 1) * h), s(x[N + 2 * bt + 0], 255 & Ft, Ft >> 16, J, vt + (2 * bt + 0) * h)), Ft = ge, Vt = me
				}
				1 & yt || (Et = 3 * Ft + Vt + 131074 >> 2, s(g[b + yt - 1], 255 & Et, Et >> 16, pt, G + (yt - 1) * h), x != null && (Et = 3 * Vt + Ft + 131074 >> 2, s(x[N + yt - 1], 255 & Et, Et >> 16, J, vt + (yt - 1) * h)))
			}
		}

		function Nt() {
			Hn[ho] = Uc, Hn[po] = Ru, Hn[ju] = Hc, Hn[go] = Bu, Hn[mo] = Tu, Hn[xs] = qu, Hn[Eu] = Wc, Hn[Ns] = Ru, Hn[Ls] = Bu, Hn[vo] = Tu, Hn[As] = qu
		}

		function Mt(r) {
			return r & -16384 ? 0 > r ? 0 : 255 : r >> Vc
		}

		function Ht(r, s) {
			return Mt((19077 * r >> 8) + (26149 * s >> 8) - 14234)
		}

		function te(r, s, h) {
			return Mt((19077 * r >> 8) - (6419 * s >> 8) - (13320 * h >> 8) + 8708)
		}

		function $t(r, s) {
			return Mt((19077 * r >> 8) + (33050 * s >> 8) - 17685)
		}

		function ce(r, s, h, g, b) {
			g[b + 0] = Ht(r, h), g[b + 1] = te(r, s, h), g[b + 2] = $t(r, s)
		}

		function je(r, s, h, g, b) {
			g[b + 0] = $t(r, s), g[b + 1] = te(r, s, h), g[b + 2] = Ht(r, h)
		}

		function Me(r, s, h, g, b) {
			var x = te(r, s, h);
			s = x << 3 & 224 | $t(r, s) >> 3, g[b + 0] = 248 & Ht(r, h) | x >> 5, g[b + 1] = s
		}

		function Je(r, s, h, g, b) {
			var x = 240 & $t(r, s) | 15;
			g[b + 0] = 240 & Ht(r, h) | te(r, s, h) >> 4, g[b + 1] = x
		}

		function ln(r, s, h, g, b) {
			g[b + 0] = 255, ce(r, s, h, g, b + 1)
		}

		function Qe(r, s, h, g, b) {
			je(r, s, h, g, b), g[b + 3] = 255
		}

		function $n(r, s, h, g, b) {
			ce(r, s, h, g, b), g[b + 3] = 255
		}

		function In(r, s) {
			return 0 > r ? 0 : r > s ? s : r
		}

		function cr(r, s, h) {
			R[r] = function(g, b, x, N, S, k, E, W, tt) {
				for (var et = W + (-2 & tt) * h; W != et;) s(g[b + 0], x[N + 0], S[k + 0], E, W), s(g[b + 1], x[N + 0], S[k + 0], E, W + h), b += 2, ++N, ++k, W += 2 * h;
				1 & tt && s(g[b + 0], x[N + 0], S[k + 0], E, W)
			}
		}

		function ao(r, s, h) {
			return h == 0 ? r == 0 ? s == 0 ? 6 : 5 : s == 0 ? 4 : 0 : h
		}

		function fa(r, s, h, g, b) {
			switch (r >>> 30) {
				case 3:
					xr(s, h, g, b, 0);
					break;
				case 2:
					qe(s, h, g, b);
					break;
				case 1:
					vn(s, h, g, b)
			}
		}

		function ha(r, s) {
			var h, g, b = s.M,
				x = s.Nb,
				N = r.oc,
				S = r.pc + 40,
				k = r.oc,
				E = r.pc + 584,
				W = r.oc,
				tt = r.pc + 600;
			for (h = 0; 16 > h; ++h) N[S + 32 * h - 1] = 129;
			for (h = 0; 8 > h; ++h) k[E + 32 * h - 1] = 129, W[tt + 32 * h - 1] = 129;
			for (0 < b ? N[S - 1 - 32] = k[E - 1 - 32] = W[tt - 1 - 32] = 129 : (o(N, S - 32 - 1, 127, 21), o(k, E - 32 - 1, 127, 9), o(W, tt - 32 - 1, 127, 9)), g = 0; g < r.za; ++g) {
				var et = s.ya[s.aa + g];
				if (0 < g) {
					for (h = -1; 16 > h; ++h) i(N, S + 32 * h - 4, N, S + 32 * h + 12, 4);
					for (h = -1; 8 > h; ++h) i(k, E + 32 * h - 4, k, E + 32 * h + 4, 4), i(W, tt + 32 * h - 4, W, tt + 32 * h + 4, 4)
				}
				var X = r.Gd,
					wt = r.Hd + g,
					pt = et.ad,
					G = et.Hc;
				if (0 < b && (i(N, S - 32, X[wt].y, 0, 16), i(k, E - 32, X[wt].f, 0, 8), i(W, tt - 32, X[wt].ea, 0, 8)), et.Za) {
					var J = N,
						vt = S - 32 + 16;
					for (0 < b && (g >= r.za - 1 ? o(J, vt, X[wt].y[15], 4) : i(J, vt, X[wt + 1].y, 0, 4)), h = 0; 4 > h; h++) J[vt + 128 + h] = J[vt + 256 + h] = J[vt + 384 + h] = J[vt + 0 + h];
					for (h = 0; 16 > h; ++h, G <<= 2) J = N, vt = S + Uu[h], Zn[et.Ob[h]](J, vt), fa(G, pt, 16 * +h, J, vt)
				} else if (J = ao(g, b, et.Ob[0]), Dr[J](N, S), G != 0)
					for (h = 0; 16 > h; ++h, G <<= 2) fa(G, pt, 16 * +h, N, S + Uu[h]);
				for (h = et.Gc, J = ao(g, b, et.Dd), Lr[J](k, E), Lr[J](W, tt), G = pt, J = k, vt = E, 255 & (et = h >> 0) && (170 & et ? va(G, 256, J, vt) : Tn(G, 256, J, vt)), et = W, G = tt, 255 & (h >>= 8) && (170 & h ? va(pt, 320, et, G) : Tn(pt, 320, et, G)), b < r.Ub - 1 && (i(X[wt].y, 0, N, S + 480, 16), i(X[wt].f, 0, k, E + 224, 8), i(X[wt].ea, 0, W, tt + 224, 8)), h = 8 * x * r.B, X = r.sa, wt = r.ta + 16 * g + 16 * x * r.R, pt = r.qa, et = r.ra + 8 * g + h, G = r.Ha, J = r.Ia + 8 * g + h, h = 0; 16 > h; ++h) i(X, wt + h * r.R, N, S + 32 * h, 16);
				for (h = 0; 8 > h; ++h) i(pt, et + h * r.B, k, E + 32 * h, 8), i(G, J + h * r.B, W, tt + 32 * h, 8)
			}
		}

		function Si(r, s, h, g, b, x, N, S, k) {
			var E = [0],
				W = [0],
				tt = 0,
				et = k != null ? k.kd : 0,
				X = k ?? new sa;
			if (r == null || 12 > h) return 7;
			X.data = r, X.w = s, X.ha = h, s = [s], h = [h], X.gb = [X.gb];
			t: {
				var wt = s,
					pt = h,
					G = X.gb;
				if (t(r != null), t(pt != null), t(G != null), G[0] = 0, 12 <= pt[0] && !n(r, wt[0], "RIFF")) {
					if (n(r, wt[0] + 8, "WEBP")) {
						G = 3;
						break t
					}
					var J = It(r, wt[0] + 4);
					if (12 > J || 4294967286 < J) {
						G = 3;
						break t
					}
					if (et && J > pt[0] - 8) {
						G = 7;
						break t
					}
					G[0] = J, wt[0] += 12, pt[0] -= 12
				}
				G = 0
			}
			if (G != 0) return G;
			for (J = 0 < X.gb[0], h = h[0];;) {
				t: {
					var vt = r;pt = s,
					G = h;
					var yt = E,
						bt = W,
						Dt = wt = [0];
					if ((Et = tt = [tt])[0] = 0, 8 > G[0]) G = 7;
					else {
						if (!n(vt, pt[0], "VP8X")) {
							if (It(vt, pt[0] + 4) != 10) {
								G = 3;
								break t
							}
							if (18 > G[0]) {
								G = 7;
								break t
							}
							var Ft = It(vt, pt[0] + 8),
								Vt = 1 + Pt(vt, pt[0] + 12);
							if (2147483648 <= Vt * (vt = 1 + Pt(vt, pt[0] + 15))) {
								G = 3;
								break t
							}
							Dt != null && (Dt[0] = Ft), yt != null && (yt[0] = Vt), bt != null && (bt[0] = vt), pt[0] += 18, G[0] -= 18, Et[0] = 1
						}
						G = 0
					}
				}
				if (tt = tt[0], wt = wt[0], G != 0) return G;
				if (pt = !!(2 & wt), !J && tt) return 3;
				if (x != null && (x[0] = !!(16 & wt)), N != null && (N[0] = pt), S != null && (S[0] = 0), N = E[0], wt = W[0], tt && pt && k == null) {
					G = 0;
					break
				}
				if (4 > h) {
					G = 7;
					break
				}
				if (J && tt || !J && !tt && !n(r, s[0], "ALPH")) {
					h = [h], X.na = [X.na], X.P = [X.P], X.Sa = [X.Sa];
					t: {
						Ft = r,
						G = s,
						J = h;
						var Et = X.gb;yt = X.na,
						bt = X.P,
						Dt = X.Sa,
						Vt = 22,
						t(Ft != null),
						t(J != null),
						vt = G[0];
						var ge = J[0];
						for (t(yt != null), t(Dt != null), yt[0] = null, bt[0] = null, Dt[0] = 0;;) {
							if (G[0] = vt, J[0] = ge, 8 > ge) {
								G = 7;
								break t
							}
							var me = It(Ft, vt + 4);
							if (4294967286 < me) {
								G = 3;
								break t
							}
							var he = 8 + me + 1 & -2;
							if (Vt += he, 0 < Et && Vt > Et) {
								G = 3;
								break t
							}
							if (!n(Ft, vt, "VP8 ") || !n(Ft, vt, "VP8L")) {
								G = 0;
								break t
							}
							if (ge[0] < he) {
								G = 7;
								break t
							}
							n(Ft, vt, "ALPH") || (yt[0] = Ft, bt[0] = vt + 8, Dt[0] = me), vt += he, ge -= he
						}
					}
					if (h = h[0], X.na = X.na[0], X.P = X.P[0], X.Sa = X.Sa[0], G != 0) break
				}
				h = [h],
				X.Ja = [X.Ja],
				X.xa = [X.xa];t: if (Et = r, G = s, J = h, yt = X.gb[0], bt = X.Ja, Dt = X.xa, Ft = G[0], vt = !n(Et, Ft, "VP8 "), Vt = !n(Et, Ft, "VP8L"), t(Et != null), t(J != null), t(bt != null), t(Dt != null), 8 > J[0]) G = 7;
					else {
						if (vt || Vt) {
							if (Et = It(Et, Ft + 4), 12 <= yt && Et > yt - 12) {
								G = 3;
								break t
							}
							if (et && Et > J[0] - 8) {
								G = 7;
								break t
							}
							bt[0] = Et, G[0] += 8, J[0] -= 8, Dt[0] = Vt
						} else Dt[0] = 5 <= J[0] && Et[Ft + 0] == 47 && !(Et[Ft + 4] >> 5), bt[0] = J[0];
						G = 0
					}if (h = h[0], X.Ja = X.Ja[0], X.xa = X.xa[0], s = s[0], G != 0) break;
				if (4294967286 < X.Ja) return 3;
				if (S == null || pt || (S[0] = X.xa ? 2 : 1), N = [N], wt = [wt], X.xa) {
					if (5 > h) {
						G = 7;
						break
					}
					S = N, et = wt, pt = x, r == null || 5 > h ? r = 0 : 5 <= h && r[s + 0] == 47 && !(r[s + 4] >> 5) ? (J = [0], Et = [0], yt = [0], Q(bt = new L, r, s, h), Ot(bt, J, Et, yt) ? (S != null && (S[0] = J[0]), et != null && (et[0] = Et[0]), pt != null && (pt[0] = yt[0]), r = 1) : r = 0) : r = 0
				} else {
					if (10 > h) {
						G = 7;
						break
					}
					S = wt, r == null || 10 > h || !Ha(r, s + 3, h - 3) ? r = 0 : (et = r[s + 0] | r[s + 1] << 8 | r[s + 2] << 16, pt = 16383 & (r[s + 7] << 8 | r[s + 6]), r = 16383 & (r[s + 9] << 8 | r[s + 8]), 1 & et || 3 < (et >> 1 & 7) || !(et >> 4 & 1) || et >> 5 >= X.Ja || !pt || !r ? r = 0 : (N && (N[0] = pt), S && (S[0] = r), r = 1))
				}
				if (!r || (N = N[0], wt = wt[0], tt && (E[0] != N || W[0] != wt))) return 3;k != null && (k[0] = X, k.offset = s - k.w, t(4294967286 > s - k.w), t(k.offset == k.ha - h));
				break
			}
			return G == 0 || G == 7 && tt && k == null ? (x != null && (x[0] |= X.na != null && 0 < X.na.length), g != null && (g[0] = N), b != null && (b[0] = wt), 0) : G
		}

		function da(r, s, h) {
			var g = s.width,
				b = s.height,
				x = 0,
				N = 0,
				S = g,
				k = b;
			if (s.Da = r != null && 0 < r.Da, s.Da && (S = r.cd, k = r.bd, x = r.v, N = r.j, 11 > h || (x &= -2, N &= -2), 0 > x || 0 > N || 0 >= S || 0 >= k || x + S > g || N + k > b)) return 0;
			if (s.v = x, s.j = N, s.va = x + S, s.o = N + k, s.U = S, s.T = k, s.da = r != null && 0 < r.da, s.da) {
				if (!Xt(S, k, h = [r.ib], x = [r.hb])) return 0;
				s.ib = h[0], s.hb = x[0]
			}
			return s.ob = r != null && r.ob, s.Kb = r == null || !r.Sd, s.da && (s.ob = s.ib < 3 * g / 4 && s.hb < 3 * b / 4, s.Kb = 0), 1
		}

		function pa(r) {
			if (r == null) return 2;
			if (11 > r.S) {
				var s = r.f.RGBA;
				s.fb += (r.height - 1) * s.A, s.A = -s.A
			} else s = r.f.kb, r = r.height, s.O += (r - 1) * s.fa, s.fa = -s.fa, s.N += (r - 1 >> 1) * s.Ab, s.Ab = -s.Ab, s.W += (r - 1 >> 1) * s.Db, s.Db = -s.Db, s.F != null && (s.J += (r - 1) * s.lb, s.lb = -s.lb);
			return 0
		}

		function _i(r, s, h, g) {
			if (g == null || 0 >= r || 0 >= s) return 2;
			if (h != null) {
				if (h.Da) {
					var b = h.cd,
						x = h.bd,
						N = -2 & h.v,
						S = -2 & h.j;
					if (0 > N || 0 > S || 0 >= b || 0 >= x || N + b > r || S + x > s) return 2;
					r = b, s = x
				}
				if (h.da) {
					if (!Xt(r, s, b = [h.ib], x = [h.hb])) return 2;
					r = b[0], s = x[0]
				}
			}
			g.width = r, g.height = s;
			t: {
				var k = g.width,
					E = g.height;
				if (r = g.S, 0 >= k || 0 >= E || !(r >= ho && 13 > r)) r = 2;
				else {
					if (0 >= g.Rd && g.sd == null) {
						N = x = b = s = 0;
						var W = (S = k * Hu[r]) * E;
						if (11 > r || (x = (E + 1) / 2 * (s = (k + 1) / 2), r == 12 && (N = (b = k) * E)), (E = a(W + 2 * x + N)) == null) {
							r = 1;
							break t
						}
						g.sd = E, 11 > r ? ((k = g.f.RGBA).eb = E, k.fb = 0, k.A = S, k.size = W) : ((k = g.f.kb).y = E, k.O = 0, k.fa = S, k.Fd = W, k.f = E, k.N = 0 + W, k.Ab = s, k.Cd = x, k.ea = E, k.W = 0 + W + x, k.Db = s, k.Ed = x, r == 12 && (k.F = E, k.J = 0 + W + 2 * x), k.Tc = N, k.lb = b)
					}
					if (s = 1, b = g.S, x = g.width, N = g.height, b >= ho && 13 > b)
						if (11 > b) r = g.f.RGBA, s &= (S = Math.abs(r.A)) * (N - 1) + x <= r.size, s &= S >= x * Hu[b], s &= r.eb != null;
						else {
							r = g.f.kb, S = (x + 1) / 2, W = (N + 1) / 2, k = Math.abs(r.fa), E = Math.abs(r.Ab);
							var tt = Math.abs(r.Db),
								et = Math.abs(r.lb),
								X = et * (N - 1) + x;
							s &= k * (N - 1) + x <= r.Fd, s &= E * (W - 1) + S <= r.Cd, s = (s &= tt * (W - 1) + S <= r.Ed) & k >= x & E >= S & tt >= S, s &= r.y != null, s &= r.f != null, s &= r.ea != null, b == 12 && (s &= et >= x, s &= X <= r.Tc, s &= r.F != null)
						}
					else s = 0;
					r = s ? 0 : 2
				}
			}
			return r != 0 || h != null && h.fd && (r = pa(g)), r
		}
		var on = 64,
			Pi = [0, 1, 3, 7, 15, 31, 63, 127, 255, 511, 1023, 2047, 4095, 8191, 16383, 32767, 65535, 131071, 262143, 524287, 1048575, 2097151, 4194303, 8388607, 16777215],
			ki = 24,
			Ci = 32,
			ga = 8,
			xn = [0, 0, 1, 1, 2, 2, 2, 2, 3, 3, 3, 3, 3, 3, 3, 3, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7];
		St("Predictor0", "PredictorAdd0"), R.Predictor0 = function() {
			return 4278190080
		}, R.Predictor1 = function(r) {
			return r
		}, R.Predictor2 = function(r, s, h) {
			return s[h + 0]
		}, R.Predictor3 = function(r, s, h) {
			return s[h + 1]
		}, R.Predictor4 = function(r, s, h) {
			return s[h - 1]
		}, R.Predictor5 = function(r, s, h) {
			return Ct(Ct(r, s[h + 1]), s[h + 0])
		}, R.Predictor6 = function(r, s, h) {
			return Ct(r, s[h - 1])
		}, R.Predictor7 = function(r, s, h) {
			return Ct(r, s[h + 0])
		}, R.Predictor8 = function(r, s, h) {
			return Ct(s[h - 1], s[h + 0])
		}, R.Predictor9 = function(r, s, h) {
			return Ct(s[h + 0], s[h + 1])
		}, R.Predictor10 = function(r, s, h) {
			return Ct(Ct(r, s[h - 1]), Ct(s[h + 0], s[h + 1]))
		}, R.Predictor11 = function(r, s, h) {
			var g = s[h + 0];
			return 0 >= Qt(g >> 24 & 255, r >> 24 & 255, (s = s[h - 1]) >> 24 & 255) + Qt(g >> 16 & 255, r >> 16 & 255, s >> 16 & 255) + Qt(g >> 8 & 255, r >> 8 & 255, s >> 8 & 255) + Qt(255 & g, 255 & r, 255 & s) ? g : r
		}, R.Predictor12 = function(r, s, h) {
			var g = s[h + 0];
			return (qt((r >> 24 & 255) + (g >> 24 & 255) - ((s = s[h - 1]) >> 24 & 255)) << 24 | qt((r >> 16 & 255) + (g >> 16 & 255) - (s >> 16 & 255)) << 16 | qt((r >> 8 & 255) + (g >> 8 & 255) - (s >> 8 & 255)) << 8 | qt((255 & r) + (255 & g) - (255 & s))) >>> 0
		}, R.Predictor13 = function(r, s, h) {
			var g = s[h - 1];
			return (Jt((r = Ct(r, s[h + 0])) >> 24 & 255, g >> 24 & 255) << 24 | Jt(r >> 16 & 255, g >> 16 & 255) << 16 | Jt(r >> 8 & 255, g >> 8 & 255) << 8 | Jt(r >> 0 & 255, g >> 0 & 255)) >>> 0
		};
		var ws = R.PredictorAdd0;
		R.PredictorAdd1 = ne, St("Predictor2", "PredictorAdd2"), St("Predictor3", "PredictorAdd3"), St("Predictor4", "PredictorAdd4"), St("Predictor5", "PredictorAdd5"), St("Predictor6", "PredictorAdd6"), St("Predictor7", "PredictorAdd7"), St("Predictor8", "PredictorAdd8"), St("Predictor9", "PredictorAdd9"), St("Predictor10", "PredictorAdd10"), St("Predictor11", "PredictorAdd11"), St("Predictor12", "PredictorAdd12"), St("Predictor13", "PredictorAdd13");
		var ma = R.PredictorAdd2;
		ie("ColorIndexInverseTransform", "MapARGB", "32b", function(r) {
			return r >> 8 & 255
		}, function(r) {
			return r
		}), ie("VP8LColorIndexInverseTransformAlpha", "MapAlpha", "8b", function(r) {
			return r
		}, function(r) {
			return r >> 8 & 255
		});
		var oo, Bn = R.ColorIndexInverseTransform,
			Ii = R.MapARGB,
			so = R.VP8LColorIndexInverseTransformAlpha,
			uo = R.MapAlpha,
			Fr = R.VP8LPredictorsAdd = [];
		Fr.length = 16, (R.VP8LPredictors = []).length = 16, (R.VP8LPredictorsAdd_C = []).length = 16, (R.VP8LPredictors_C = []).length = 16;
		var ti, Nn, mn, jr, wr, yr, Fi, xr, qe, va, vn, Tn, ji, lo, ba, ei, ni, Er, ri, Ei, ii, Mr, wa, qn, zn, _e, Pe, ze, Ze = a(511),
			Nr = a(2041),
			ya = a(225),
			Mi = a(767),
			co = 0,
			ys = Nr,
			fo = ya,
			Fn = Mi,
			Un = Ze,
			ho = 0,
			po = 1,
			ju = 2,
			go = 3,
			mo = 4,
			xs = 5,
			Eu = 6,
			Ns = 7,
			Ls = 8,
			vo = 9,
			As = 10,
			kc = [2, 3, 7],
			Cc = [3, 3, 11],
			Mu = [280, 256, 256, 256, 40],
			Ic = [0, 1, 1, 1, 0],
			Fc = [17, 18, 0, 1, 2, 3, 4, 5, 16, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15],
			jc = [24, 7, 23, 25, 40, 6, 39, 41, 22, 26, 38, 42, 56, 5, 55, 57, 21, 27, 54, 58, 37, 43, 72, 4, 71, 73, 20, 28, 53, 59, 70, 74, 36, 44, 88, 69, 75, 52, 60, 3, 87, 89, 19, 29, 86, 90, 35, 45, 68, 76, 85, 91, 51, 61, 104, 2, 103, 105, 18, 30, 102, 106, 34, 46, 84, 92, 67, 77, 101, 107, 50, 62, 120, 1, 119, 121, 83, 93, 17, 31, 100, 108, 66, 78, 118, 122, 33, 47, 117, 123, 49, 63, 99, 109, 82, 94, 0, 116, 124, 65, 79, 16, 32, 98, 110, 48, 115, 125, 81, 95, 64, 114, 126, 97, 111, 80, 113, 127, 96, 112],
			Ec = [2954, 2956, 2958, 2962, 2970, 2986, 3018, 3082, 3212, 3468, 3980, 5004],
			Mc = 8,
			Ss = [4, 5, 6, 7, 8, 9, 10, 10, 11, 12, 13, 14, 15, 16, 17, 17, 18, 19, 20, 20, 21, 21, 22, 22, 23, 23, 24, 25, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 91, 93, 95, 96, 98, 100, 101, 102, 104, 106, 108, 110, 112, 114, 116, 118, 122, 124, 126, 128, 130, 132, 134, 136, 138, 140, 143, 145, 148, 151, 154, 157],
			_s = [4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 60, 62, 64, 66, 68, 70, 72, 74, 76, 78, 80, 82, 84, 86, 88, 90, 92, 94, 96, 98, 100, 102, 104, 106, 108, 110, 112, 114, 116, 119, 122, 125, 128, 131, 134, 137, 140, 143, 146, 149, 152, 155, 158, 161, 164, 167, 170, 173, 177, 181, 185, 189, 193, 197, 201, 205, 209, 213, 217, 221, 225, 229, 234, 239, 245, 249, 254, 259, 264, 269, 274, 279, 284],
			xa = null,
			Dc = [
				[173, 148, 140, 0],
				[176, 155, 140, 135, 0],
				[180, 157, 141, 134, 130, 0],
				[254, 254, 243, 230, 196, 177, 153, 140, 133, 130, 129, 0]
			],
			Oc = [0, 1, 4, 8, 5, 2, 3, 6, 9, 12, 13, 10, 7, 11, 14, 15],
			Du = [-0, 1, -1, 2, -2, 3, 4, 6, -3, 5, -4, -5, -6, 7, -7, 8, -8, -9],
			Rc = [
				[
					[
						[128, 128, 128, 128, 128, 128, 128, 128, 128, 128, 128],
						[128, 128, 128, 128, 128, 128, 128, 128, 128, 128, 128],
						[128, 128, 128, 128, 128, 128, 128, 128, 128, 128, 128]
					],
					[
						[253, 136, 254, 255, 228, 219, 128, 128, 128, 128, 128],
						[189, 129, 242, 255, 227, 213, 255, 219, 128, 128, 128],
						[106, 126, 227, 252, 214, 209, 255, 255, 128, 128, 128]
					],
					[
						[1, 98, 248, 255, 236, 226, 255, 255, 128, 128, 128],
						[181, 133, 238, 254, 221, 234, 255, 154, 128, 128, 128],
						[78, 134, 202, 247, 198, 180, 255, 219, 128, 128, 128]
					],
					[
						[1, 185, 249, 255, 243, 255, 128, 128, 128, 128, 128],
						[184, 150, 247, 255, 236, 224, 128, 128, 128, 128, 128],
						[77, 110, 216, 255, 236, 230, 128, 128, 128, 128, 128]
					],
					[
						[1, 101, 251, 255, 241, 255, 128, 128, 128, 128, 128],
						[170, 139, 241, 252, 236, 209, 255, 255, 128, 128, 128],
						[37, 116, 196, 243, 228, 255, 255, 255, 128, 128, 128]
					],
					[
						[1, 204, 254, 255, 245, 255, 128, 128, 128, 128, 128],
						[207, 160, 250, 255, 238, 128, 128, 128, 128, 128, 128],
						[102, 103, 231, 255, 211, 171, 128, 128, 128, 128, 128]
					],
					[
						[1, 152, 252, 255, 240, 255, 128, 128, 128, 128, 128],
						[177, 135, 243, 255, 234, 225, 128, 128, 128, 128, 128],
						[80, 129, 211, 255, 194, 224, 128, 128, 128, 128, 128]
					],
					[
						[1, 1, 255, 128, 128, 128, 128, 128, 128, 128, 128],
						[246, 1, 255, 128, 128, 128, 128, 128, 128, 128, 128],
						[255, 128, 128, 128, 128, 128, 128, 128, 128, 128, 128]
					]
				],
				[
					[
						[198, 35, 237, 223, 193, 187, 162, 160, 145, 155, 62],
						[131, 45, 198, 221, 172, 176, 220, 157, 252, 221, 1],
						[68, 47, 146, 208, 149, 167, 221, 162, 255, 223, 128]
					],
					[
						[1, 149, 241, 255, 221, 224, 255, 255, 128, 128, 128],
						[184, 141, 234, 253, 222, 220, 255, 199, 128, 128, 128],
						[81, 99, 181, 242, 176, 190, 249, 202, 255, 255, 128]
					],
					[
						[1, 129, 232, 253, 214, 197, 242, 196, 255, 255, 128],
						[99, 121, 210, 250, 201, 198, 255, 202, 128, 128, 128],
						[23, 91, 163, 242, 170, 187, 247, 210, 255, 255, 128]
					],
					[
						[1, 200, 246, 255, 234, 255, 128, 128, 128, 128, 128],
						[109, 178, 241, 255, 231, 245, 255, 255, 128, 128, 128],
						[44, 130, 201, 253, 205, 192, 255, 255, 128, 128, 128]
					],
					[
						[1, 132, 239, 251, 219, 209, 255, 165, 128, 128, 128],
						[94, 136, 225, 251, 218, 190, 255, 255, 128, 128, 128],
						[22, 100, 174, 245, 186, 161, 255, 199, 128, 128, 128]
					],
					[
						[1, 182, 249, 255, 232, 235, 128, 128, 128, 128, 128],
						[124, 143, 241, 255, 227, 234, 128, 128, 128, 128, 128],
						[35, 77, 181, 251, 193, 211, 255, 205, 128, 128, 128]
					],
					[
						[1, 157, 247, 255, 236, 231, 255, 255, 128, 128, 128],
						[121, 141, 235, 255, 225, 227, 255, 255, 128, 128, 128],
						[45, 99, 188, 251, 195, 217, 255, 224, 128, 128, 128]
					],
					[
						[1, 1, 251, 255, 213, 255, 128, 128, 128, 128, 128],
						[203, 1, 248, 255, 255, 128, 128, 128, 128, 128, 128],
						[137, 1, 177, 255, 224, 255, 128, 128, 128, 128, 128]
					]
				],
				[
					[
						[253, 9, 248, 251, 207, 208, 255, 192, 128, 128, 128],
						[175, 13, 224, 243, 193, 185, 249, 198, 255, 255, 128],
						[73, 17, 171, 221, 161, 179, 236, 167, 255, 234, 128]
					],
					[
						[1, 95, 247, 253, 212, 183, 255, 255, 128, 128, 128],
						[239, 90, 244, 250, 211, 209, 255, 255, 128, 128, 128],
						[155, 77, 195, 248, 188, 195, 255, 255, 128, 128, 128]
					],
					[
						[1, 24, 239, 251, 218, 219, 255, 205, 128, 128, 128],
						[201, 51, 219, 255, 196, 186, 128, 128, 128, 128, 128],
						[69, 46, 190, 239, 201, 218, 255, 228, 128, 128, 128]
					],
					[
						[1, 191, 251, 255, 255, 128, 128, 128, 128, 128, 128],
						[223, 165, 249, 255, 213, 255, 128, 128, 128, 128, 128],
						[141, 124, 248, 255, 255, 128, 128, 128, 128, 128, 128]
					],
					[
						[1, 16, 248, 255, 255, 128, 128, 128, 128, 128, 128],
						[190, 36, 230, 255, 236, 255, 128, 128, 128, 128, 128],
						[149, 1, 255, 128, 128, 128, 128, 128, 128, 128, 128]
					],
					[
						[1, 226, 255, 128, 128, 128, 128, 128, 128, 128, 128],
						[247, 192, 255, 128, 128, 128, 128, 128, 128, 128, 128],
						[240, 128, 255, 128, 128, 128, 128, 128, 128, 128, 128]
					],
					[
						[1, 134, 252, 255, 255, 128, 128, 128, 128, 128, 128],
						[213, 62, 250, 255, 255, 128, 128, 128, 128, 128, 128],
						[55, 93, 255, 128, 128, 128, 128, 128, 128, 128, 128]
					],
					[
						[128, 128, 128, 128, 128, 128, 128, 128, 128, 128, 128],
						[128, 128, 128, 128, 128, 128, 128, 128, 128, 128, 128],
						[128, 128, 128, 128, 128, 128, 128, 128, 128, 128, 128]
					]
				],
				[
					[
						[202, 24, 213, 235, 186, 191, 220, 160, 240, 175, 255],
						[126, 38, 182, 232, 169, 184, 228, 174, 255, 187, 128],
						[61, 46, 138, 219, 151, 178, 240, 170, 255, 216, 128]
					],
					[
						[1, 112, 230, 250, 199, 191, 247, 159, 255, 255, 128],
						[166, 109, 228, 252, 211, 215, 255, 174, 128, 128, 128],
						[39, 77, 162, 232, 172, 180, 245, 178, 255, 255, 128]
					],
					[
						[1, 52, 220, 246, 198, 199, 249, 220, 255, 255, 128],
						[124, 74, 191, 243, 183, 193, 250, 221, 255, 255, 128],
						[24, 71, 130, 219, 154, 170, 243, 182, 255, 255, 128]
					],
					[
						[1, 182, 225, 249, 219, 240, 255, 224, 128, 128, 128],
						[149, 150, 226, 252, 216, 205, 255, 171, 128, 128, 128],
						[28, 108, 170, 242, 183, 194, 254, 223, 255, 255, 128]
					],
					[
						[1, 81, 230, 252, 204, 203, 255, 192, 128, 128, 128],
						[123, 102, 209, 247, 188, 196, 255, 233, 128, 128, 128],
						[20, 95, 153, 243, 164, 173, 255, 203, 128, 128, 128]
					],
					[
						[1, 222, 248, 255, 216, 213, 128, 128, 128, 128, 128],
						[168, 175, 246, 252, 235, 205, 255, 255, 128, 128, 128],
						[47, 116, 215, 255, 211, 212, 255, 255, 128, 128, 128]
					],
					[
						[1, 121, 236, 253, 212, 214, 255, 255, 128, 128, 128],
						[141, 84, 213, 252, 201, 202, 255, 219, 128, 128, 128],
						[42, 80, 160, 240, 162, 185, 255, 205, 128, 128, 128]
					],
					[
						[1, 1, 255, 128, 128, 128, 128, 128, 128, 128, 128],
						[244, 1, 255, 128, 128, 128, 128, 128, 128, 128, 128],
						[238, 1, 255, 128, 128, 128, 128, 128, 128, 128, 128]
					]
				]
			],
			Bc = [
				[
					[231, 120, 48, 89, 115, 113, 120, 152, 112],
					[152, 179, 64, 126, 170, 118, 46, 70, 95],
					[175, 69, 143, 80, 85, 82, 72, 155, 103],
					[56, 58, 10, 171, 218, 189, 17, 13, 152],
					[114, 26, 17, 163, 44, 195, 21, 10, 173],
					[121, 24, 80, 195, 26, 62, 44, 64, 85],
					[144, 71, 10, 38, 171, 213, 144, 34, 26],
					[170, 46, 55, 19, 136, 160, 33, 206, 71],
					[63, 20, 8, 114, 114, 208, 12, 9, 226],
					[81, 40, 11, 96, 182, 84, 29, 16, 36]
				],
				[
					[134, 183, 89, 137, 98, 101, 106, 165, 148],
					[72, 187, 100, 130, 157, 111, 32, 75, 80],
					[66, 102, 167, 99, 74, 62, 40, 234, 128],
					[41, 53, 9, 178, 241, 141, 26, 8, 107],
					[74, 43, 26, 146, 73, 166, 49, 23, 157],
					[65, 38, 105, 160, 51, 52, 31, 115, 128],
					[104, 79, 12, 27, 217, 255, 87, 17, 7],
					[87, 68, 71, 44, 114, 51, 15, 186, 23],
					[47, 41, 14, 110, 182, 183, 21, 17, 194],
					[66, 45, 25, 102, 197, 189, 23, 18, 22]
				],
				[
					[88, 88, 147, 150, 42, 46, 45, 196, 205],
					[43, 97, 183, 117, 85, 38, 35, 179, 61],
					[39, 53, 200, 87, 26, 21, 43, 232, 171],
					[56, 34, 51, 104, 114, 102, 29, 93, 77],
					[39, 28, 85, 171, 58, 165, 90, 98, 64],
					[34, 22, 116, 206, 23, 34, 43, 166, 73],
					[107, 54, 32, 26, 51, 1, 81, 43, 31],
					[68, 25, 106, 22, 64, 171, 36, 225, 114],
					[34, 19, 21, 102, 132, 188, 16, 76, 124],
					[62, 18, 78, 95, 85, 57, 50, 48, 51]
				],
				[
					[193, 101, 35, 159, 215, 111, 89, 46, 111],
					[60, 148, 31, 172, 219, 228, 21, 18, 111],
					[112, 113, 77, 85, 179, 255, 38, 120, 114],
					[40, 42, 1, 196, 245, 209, 10, 25, 109],
					[88, 43, 29, 140, 166, 213, 37, 43, 154],
					[61, 63, 30, 155, 67, 45, 68, 1, 209],
					[100, 80, 8, 43, 154, 1, 51, 26, 71],
					[142, 78, 78, 16, 255, 128, 34, 197, 171],
					[41, 40, 5, 102, 211, 183, 4, 1, 221],
					[51, 50, 17, 168, 209, 192, 23, 25, 82]
				],
				[
					[138, 31, 36, 171, 27, 166, 38, 44, 229],
					[67, 87, 58, 169, 82, 115, 26, 59, 179],
					[63, 59, 90, 180, 59, 166, 93, 73, 154],
					[40, 40, 21, 116, 143, 209, 34, 39, 175],
					[47, 15, 16, 183, 34, 223, 49, 45, 183],
					[46, 17, 33, 183, 6, 98, 15, 32, 183],
					[57, 46, 22, 24, 128, 1, 54, 17, 37],
					[65, 32, 73, 115, 28, 128, 23, 128, 205],
					[40, 3, 9, 115, 51, 192, 18, 6, 223],
					[87, 37, 9, 115, 59, 77, 64, 21, 47]
				],
				[
					[104, 55, 44, 218, 9, 54, 53, 130, 226],
					[64, 90, 70, 205, 40, 41, 23, 26, 57],
					[54, 57, 112, 184, 5, 41, 38, 166, 213],
					[30, 34, 26, 133, 152, 116, 10, 32, 134],
					[39, 19, 53, 221, 26, 114, 32, 73, 255],
					[31, 9, 65, 234, 2, 15, 1, 118, 73],
					[75, 32, 12, 51, 192, 255, 160, 43, 51],
					[88, 31, 35, 67, 102, 85, 55, 186, 85],
					[56, 21, 23, 111, 59, 205, 45, 37, 192],
					[55, 38, 70, 124, 73, 102, 1, 34, 98]
				],
				[
					[125, 98, 42, 88, 104, 85, 117, 175, 82],
					[95, 84, 53, 89, 128, 100, 113, 101, 45],
					[75, 79, 123, 47, 51, 128, 81, 171, 1],
					[57, 17, 5, 71, 102, 57, 53, 41, 49],
					[38, 33, 13, 121, 57, 73, 26, 1, 85],
					[41, 10, 67, 138, 77, 110, 90, 47, 114],
					[115, 21, 2, 10, 102, 255, 166, 23, 6],
					[101, 29, 16, 10, 85, 128, 101, 196, 26],
					[57, 18, 10, 102, 102, 213, 34, 20, 43],
					[117, 20, 15, 36, 163, 128, 68, 1, 26]
				],
				[
					[102, 61, 71, 37, 34, 53, 31, 243, 192],
					[69, 60, 71, 38, 73, 119, 28, 222, 37],
					[68, 45, 128, 34, 1, 47, 11, 245, 171],
					[62, 17, 19, 70, 146, 85, 55, 62, 70],
					[37, 43, 37, 154, 100, 163, 85, 160, 1],
					[63, 9, 92, 136, 28, 64, 32, 201, 85],
					[75, 15, 9, 9, 64, 255, 184, 119, 16],
					[86, 6, 28, 5, 64, 255, 25, 248, 1],
					[56, 8, 17, 132, 137, 255, 55, 116, 128],
					[58, 15, 20, 82, 135, 57, 26, 121, 40]
				],
				[
					[164, 50, 31, 137, 154, 133, 25, 35, 218],
					[51, 103, 44, 131, 131, 123, 31, 6, 158],
					[86, 40, 64, 135, 148, 224, 45, 183, 128],
					[22, 26, 17, 131, 240, 154, 14, 1, 209],
					[45, 16, 21, 91, 64, 222, 7, 1, 197],
					[56, 21, 39, 155, 60, 138, 23, 102, 213],
					[83, 12, 13, 54, 192, 255, 68, 47, 28],
					[85, 26, 85, 85, 128, 128, 32, 146, 171],
					[18, 11, 7, 63, 144, 171, 4, 4, 246],
					[35, 27, 10, 146, 174, 171, 12, 26, 128]
				],
				[
					[190, 80, 35, 99, 180, 80, 126, 54, 45],
					[85, 126, 47, 87, 176, 51, 41, 20, 32],
					[101, 75, 128, 139, 118, 146, 116, 128, 85],
					[56, 41, 15, 176, 236, 85, 37, 9, 62],
					[71, 30, 17, 119, 118, 255, 17, 18, 138],
					[101, 38, 60, 138, 55, 70, 43, 26, 142],
					[146, 36, 19, 30, 171, 255, 97, 27, 20],
					[138, 45, 61, 62, 219, 1, 81, 188, 64],
					[32, 41, 20, 117, 151, 142, 20, 21, 163],
					[112, 19, 12, 61, 195, 128, 48, 4, 24]
				]
			],
			Tc = [
				[
					[
						[255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255],
						[255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255],
						[255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255]
					],
					[
						[176, 246, 255, 255, 255, 255, 255, 255, 255, 255, 255],
						[223, 241, 252, 255, 255, 255, 255, 255, 255, 255, 255],
						[249, 253, 253, 255, 255, 255, 255, 255, 255, 255, 255]
					],
					[
						[255, 244, 252, 255, 255, 255, 255, 255, 255, 255, 255],
						[234, 254, 254, 255, 255, 255, 255, 255, 255, 255, 255],
						[253, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255]
					],
					[
						[255, 246, 254, 255, 255, 255, 255, 255, 255, 255, 255],
						[239, 253, 254, 255, 255, 255, 255, 255, 255, 255, 255],
						[254, 255, 254, 255, 255, 255, 255, 255, 255, 255, 255]
					],
					[
						[255, 248, 254, 255, 255, 255, 255, 255, 255, 255, 255],
						[251, 255, 254, 255, 255, 255, 255, 255, 255, 255, 255],
						[255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255]
					],
					[
						[255, 253, 254, 255, 255, 255, 255, 255, 255, 255, 255],
						[251, 254, 254, 255, 255, 255, 255, 255, 255, 255, 255],
						[254, 255, 254, 255, 255, 255, 255, 255, 255, 255, 255]
					],
					[
						[255, 254, 253, 255, 254, 255, 255, 255, 255, 255, 255],
						[250, 255, 254, 255, 254, 255, 255, 255, 255, 255, 255],
						[254, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255]
					],
					[
						[255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255],
						[255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255],
						[255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255]
					]
				],
				[
					[
						[217, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255],
						[225, 252, 241, 253, 255, 255, 254, 255, 255, 255, 255],
						[234, 250, 241, 250, 253, 255, 253, 254, 255, 255, 255]
					],
					[
						[255, 254, 255, 255, 255, 255, 255, 255, 255, 255, 255],
						[223, 254, 254, 255, 255, 255, 255, 255, 255, 255, 255],
						[238, 253, 254, 254, 255, 255, 255, 255, 255, 255, 255]
					],
					[
						[255, 248, 254, 255, 255, 255, 255, 255, 255, 255, 255],
						[249, 254, 255, 255, 255, 255, 255, 255, 255, 255, 255],
						[255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255]
					],
					[
						[255, 253, 255, 255, 255, 255, 255, 255, 255, 255, 255],
						[247, 254, 255, 255, 255, 255, 255, 255, 255, 255, 255],
						[255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255]
					],
					[
						[255, 253, 254, 255, 255, 255, 255, 255, 255, 255, 255],
						[252, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255],
						[255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255]
					],
					[
						[255, 254, 254, 255, 255, 255, 255, 255, 255, 255, 255],
						[253, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255],
						[255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255]
					],
					[
						[255, 254, 253, 255, 255, 255, 255, 255, 255, 255, 255],
						[250, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255],
						[254, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255]
					],
					[
						[255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255],
						[255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255],
						[255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255]
					]
				],
				[
					[
						[186, 251, 250, 255, 255, 255, 255, 255, 255, 255, 255],
						[234, 251, 244, 254, 255, 255, 255, 255, 255, 255, 255],
						[251, 251, 243, 253, 254, 255, 254, 255, 255, 255, 255]
					],
					[
						[255, 253, 254, 255, 255, 255, 255, 255, 255, 255, 255],
						[236, 253, 254, 255, 255, 255, 255, 255, 255, 255, 255],
						[251, 253, 253, 254, 254, 255, 255, 255, 255, 255, 255]
					],
					[
						[255, 254, 254, 255, 255, 255, 255, 255, 255, 255, 255],
						[254, 254, 254, 255, 255, 255, 255, 255, 255, 255, 255],
						[255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255]
					],
					[
						[255, 254, 255, 255, 255, 255, 255, 255, 255, 255, 255],
						[254, 254, 255, 255, 255, 255, 255, 255, 255, 255, 255],
						[254, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255]
					],
					[
						[255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255],
						[254, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255],
						[255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255]
					],
					[
						[255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255],
						[255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255],
						[255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255]
					],
					[
						[255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255],
						[255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255],
						[255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255]
					],
					[
						[255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255],
						[255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255],
						[255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255]
					]
				],
				[
					[
						[248, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255],
						[250, 254, 252, 254, 255, 255, 255, 255, 255, 255, 255],
						[248, 254, 249, 253, 255, 255, 255, 255, 255, 255, 255]
					],
					[
						[255, 253, 253, 255, 255, 255, 255, 255, 255, 255, 255],
						[246, 253, 253, 255, 255, 255, 255, 255, 255, 255, 255],
						[252, 254, 251, 254, 254, 255, 255, 255, 255, 255, 255]
					],
					[
						[255, 254, 252, 255, 255, 255, 255, 255, 255, 255, 255],
						[248, 254, 253, 255, 255, 255, 255, 255, 255, 255, 255],
						[253, 255, 254, 254, 255, 255, 255, 255, 255, 255, 255]
					],
					[
						[255, 251, 254, 255, 255, 255, 255, 255, 255, 255, 255],
						[245, 251, 254, 255, 255, 255, 255, 255, 255, 255, 255],
						[253, 253, 254, 255, 255, 255, 255, 255, 255, 255, 255]
					],
					[
						[255, 251, 253, 255, 255, 255, 255, 255, 255, 255, 255],
						[252, 253, 254, 255, 255, 255, 255, 255, 255, 255, 255],
						[255, 254, 255, 255, 255, 255, 255, 255, 255, 255, 255]
					],
					[
						[255, 252, 255, 255, 255, 255, 255, 255, 255, 255, 255],
						[249, 255, 254, 255, 255, 255, 255, 255, 255, 255, 255],
						[255, 255, 254, 255, 255, 255, 255, 255, 255, 255, 255]
					],
					[
						[255, 255, 253, 255, 255, 255, 255, 255, 255, 255, 255],
						[250, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255],
						[255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255]
					],
					[
						[255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255],
						[254, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255],
						[255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255]
					]
				]
			],
			qc = [0, 1, 2, 3, 6, 4, 5, 6, 6, 6, 6, 6, 6, 6, 6, 7, 0],
			Dr = [],
			Zn = [],
			Lr = [],
			zc = 1,
			Ou = 2,
			Or = [],
			Hn = [];
		mt("UpsampleRgbLinePair", ce, 3), mt("UpsampleBgrLinePair", je, 3), mt("UpsampleRgbaLinePair", $n, 4), mt("UpsampleBgraLinePair", Qe, 4), mt("UpsampleArgbLinePair", ln, 4), mt("UpsampleRgba4444LinePair", Je, 2), mt("UpsampleRgb565LinePair", Me, 2);
		var Uc = R.UpsampleRgbLinePair,
			Hc = R.UpsampleBgrLinePair,
			Ru = R.UpsampleRgbaLinePair,
			Bu = R.UpsampleBgraLinePair,
			Tu = R.UpsampleArgbLinePair,
			qu = R.UpsampleRgba4444LinePair,
			Wc = R.UpsampleRgb565LinePair,
			bo = 16,
			wo = 1 << bo - 1,
			Na = -227,
			Ps = 482,
			Vc = 6,
			zu = 0,
			Gc = a(256),
			Yc = a(256),
			Jc = a(256),
			Xc = a(256),
			Kc = a(Ps - Na),
			$c = a(Ps - Na);
		cr("YuvToRgbRow", ce, 3), cr("YuvToBgrRow", je, 3), cr("YuvToRgbaRow", $n, 4), cr("YuvToBgraRow", Qe, 4), cr("YuvToArgbRow", ln, 4), cr("YuvToRgba4444Row", Je, 2), cr("YuvToRgb565Row", Me, 2);
		var Uu = [0, 4, 8, 12, 128, 132, 136, 140, 256, 260, 264, 268, 384, 388, 392, 396],
			yo = [0, 2, 8],
			Zc = [8, 7, 6, 4, 4, 2, 2, 2, 1, 1, 1, 1],
			Qc = 1;
		this.WebPDecodeRGBA = function(r, s, h, g, b) {
			var x = po,
				N = new Li,
				S = new kn;
			N.ba = S, S.S = x, S.width = [S.width], S.height = [S.height];
			var k = S.width,
				E = S.height,
				W = new Ae;
			if (W == null || r == null) var tt = 2;
			else t(W != null), tt = Si(r, s, h, W.width, W.height, W.Pd, W.Qd, W.format, null);
			if (tt != 0 ? k = 0 : (k != null && (k[0] = W.width[0]), E != null && (E[0] = W.height[0]), k = 1), k) {
				S.width = S.width[0], S.height = S.height[0], g != null && (g[0] = S.width), b != null && (b[0] = S.height);
				t: {
					if (g = new mi, (b = new sa).data = r, b.w = s, b.ha = h, b.kd = 1, s = [0], t(b != null), ((r = Si(b.data, b.w, b.ha, null, null, null, s, null, b)) == 0 || r == 7) && s[0] && (r = 4), (s = r) == 0) {
						if (t(N != null), g.data = b.data, g.w = b.w + b.offset, g.ha = b.ha - b.offset, g.put = Re, g.ac = pe, g.bc = an, g.ma = N, b.xa) {
							if ((r = Rn()) == null) {
								N = 1;
								break t
							}
							if (function(et, X) {
									var wt = [0],
										pt = [0],
										G = [0];
									e: for (;;) {
										if (et == null) return 0;
										if (X == null) return et.a = 2, 0;
										if (et.l = X, et.a = 0, Q(et.m, X.data, X.w, X.ha), !Ot(et.m, wt, pt, G)) {
											et.a = 3;
											break e
										}
										if (et.xb = Ou, X.width = wt[0], X.height = pt[0], !sr(wt[0], pt[0], 1, et, null)) break e;
										return 1
									}
									return t(et.a != 0), 0
								}(r, g)) {
								if (g = (s = _i(g.width, g.height, N.Oa, N.ba)) == 0) {
									e: {
										g = r;n: for (;;) {
											if (g == null) {
												g = 0;
												break e
											}
											if (t(g.s.yc != null), t(g.s.Ya != null), t(0 < g.s.Wb), t((h = g.l) != null), t((b = h.ma) != null), g.xb != 0) {
												if (g.ca = b.ba, g.tb = b.tb, t(g.ca != null), !da(b.Oa, h, go)) {
													g.a = 2;
													break n
												}
												if (!Xr(g, h.width) || h.da) break n;
												if ((h.da || fe(g.ca.S)) && Z(), 11 > g.ca.S || (alert("todo:WebPInitConvertARGBToYUV"), g.ca.f.kb.F != null && Z()), g.Pb && 0 < g.s.ua && g.s.vb.X == null && !Ut(g.s.vb, g.s.Wa.Xa)) {
													g.a = 1;
													break n
												}
												g.xb = 0
											}
											if (!Jn(g, g.V, g.Ba, g.c, g.i, h.o, On)) break n;
											b.Dc = g.Ma, g = 1;
											break e
										}
										t(g.a != 0),
										g = 0
									}
									g = !g
								}
								g && (s = r.a)
							} else s = r.a
						} else {
							if ((r = new ts) == null) {
								N = 1;
								break t
							}
							if (r.Fa = b.na, r.P = b.P, r.qc = b.Sa, Wa(r, g)) {
								if ((s = _i(g.width, g.height, N.Oa, N.ba)) == 0) {
									if (r.Aa = 0, h = N.Oa, t((b = r) != null), h != null) {
										if (0 < (k = 0 > (k = h.Md) ? 0 : 100 < k ? 255 : 255 * k / 100)) {
											for (E = W = 0; 4 > E; ++E) 12 > (tt = b.pb[E]).lc && (tt.ia = k * Zc[0 > tt.lc ? 0 : tt.lc] >> 3), W |= tt.ia;
											W && (alert("todo:VP8InitRandom"), b.ia = 1)
										}
										b.Ga = h.Id, 100 < b.Ga ? b.Ga = 100 : 0 > b.Ga && (b.Ga = 0)
									}
									es(r, g) || (s = r.a)
								}
							} else s = r.a
						}
						s == 0 && N.Oa != null && N.Oa.fd && (s = pa(N.ba))
					}
					N = s
				}
				x = N != 0 ? null : 11 > x ? S.f.RGBA.eb : S.f.kb.y
			} else x = null;
			return x
		};
		var Hu = [3, 4, 3, 4, 4, 2, 2, 4, 4, 4, 2, 1, 1]
	};

	function p(R, K) {
		for (var ot = "", P = 0; P < 4; P++) ot += String.fromCharCode(R[K++]);
		return ot
	}

	function v(R, K) {
		return (R[K + 0] << 0 | R[K + 1] << 8 | R[K + 2] << 16) >>> 0
	}

	function m(R, K) {
		return (R[K + 0] << 0 | R[K + 1] << 8 | R[K + 2] << 16 | R[K + 3] << 24) >>> 0
	}
	new f;
	var y = [0],
		d = [0],
		I = [],
		A = new f,
		F = e,
		_ = function(R, K) {
			var ot = {},
				P = 0,
				C = !1,
				q = 0,
				T = 0;
			if (ot.frames = [], ! function(M, O, U, V) {
					for (var nt = 0; nt < V; nt++)
						if (M[O + nt] != U.charCodeAt(nt)) return !0;
					return !1
				}(R, K, "RIFF", 4)) {
				for (m(R, K += 4), K += 8; K < R.length;) {
					var ct = p(R, K),
						st = m(R, K += 4);
					K += 4;
					var ht = st + (1 & st);
					switch (ct) {
						case "VP8 ":
						case "VP8L":
							ot.frames[P] === void 0 && (ot.frames[P] = {}), (ut = ot.frames[P]).src_off = C ? T : K - 8, ut.src_size = q + st + 8, P++, C && (C = !1, q = 0, T = 0);
							break;
						case "VP8X":
							(ut = ot.header = {}).feature_flags = R[K];
							var Q = K + 4;
							ut.canvas_width = 1 + v(R, Q), Q += 3, ut.canvas_height = 1 + v(R, Q), Q += 3;
							break;
						case "ALPH":
							C = !0, q = ht + 8, T = K - 8;
							break;
						case "ANIM":
							(ut = ot.header).bgcolor = m(R, K), Q = K + 4, ut.loop_count = (_t = R)[(L = Q) + 0] << 0 | _t[L + 1] << 8, Q += 2;
							break;
						case "ANMF":
							var dt, ut;
							(ut = ot.frames[P] = {}).offset_x = 2 * v(R, K), K += 3, ut.offset_y = 2 * v(R, K), K += 3, ut.width = 1 + v(R, K), K += 3, ut.height = 1 + v(R, K), K += 3, ut.duration = v(R, K), K += 3, dt = R[K++], ut.dispose = 1 & dt, ut.blend = dt >> 1 & 1
					}
					ct != "ANMF" && (K += ht)
				}
				var _t, L;
				return ot
			}
		}(F, 0);
	_.response = F, _.rgbaoutput = !0, _.dataurl = !1;
	var j = _.header ? _.header : null,
		z = _.frames ? _.frames : null;
	if (j) {
		j.loop_counter = j.loop_count, y = [j.canvas_height], d = [j.canvas_width];
		for (var $ = 0; $ < z.length && z[$].blend != 0; $++);
	}
	var rt = z[0],
		lt = A.WebPDecodeRGBA(F, rt.src_off, rt.src_size, d, y);
	rt.rgba = lt, rt.imgwidth = d[0], rt.imgheight = y[0];
	for (var Y = 0; Y < d[0] * y[0] * 4; Y++) I[Y] = lt[Y];
	return this.width = d, this.height = y, this.data = I, this
}(function(e) {
	var t = function() {
			return typeof lu == "function"
		},
		n = function(y, d, I, A) {
			var F = 4,
				_ = u;
			switch (A) {
				case e.image_compression.FAST:
					F = 1, _ = a;
					break;
				case e.image_compression.MEDIUM:
					F = 6, _ = c;
					break;
				case e.image_compression.SLOW:
					F = 9, _ = f
			}
			y = i(y, d, I, _);
			var j = lu(y, {
				level: F
			});
			return e.__addimage__.arrayBufferToBinaryString(j)
		},
		i = function(y, d, I, A) {
			for (var F, _, j, z = y.length / d, $ = new Uint8Array(y.length + z), rt = v(), lt = 0; lt < z; lt += 1) {
				if (j = lt * d, F = y.subarray(j, j + d), A) $.set(A(F, I, _), j + lt);
				else {
					for (var Y, R = rt.length, K = []; Y < R; Y += 1) K[Y] = rt[Y](F, I, _);
					var ot = m(K.concat());
					$.set(K[ot], j + lt)
				}
				_ = F
			}
			return $
		},
		o = function(y) {
			var d = Array.apply([], y);
			return d.unshift(0), d
		},
		a = function(y, d) {
			var I, A = [],
				F = y.length;
			A[0] = 1;
			for (var _ = 0; _ < F; _ += 1) I = y[_ - d] || 0, A[_ + 1] = y[_] - I + 256 & 255;
			return A
		},
		u = function(y, d, I) {
			var A, F = [],
				_ = y.length;
			F[0] = 2;
			for (var j = 0; j < _; j += 1) A = I && I[j] || 0, F[j + 1] = y[j] - A + 256 & 255;
			return F
		},
		c = function(y, d, I) {
			var A, F, _ = [],
				j = y.length;
			_[0] = 3;
			for (var z = 0; z < j; z += 1) A = y[z - d] || 0, F = I && I[z] || 0, _[z + 1] = y[z] + 256 - (A + F >>> 1) & 255;
			return _
		},
		f = function(y, d, I) {
			var A, F, _, j, z = [],
				$ = y.length;
			z[0] = 4;
			for (var rt = 0; rt < $; rt += 1) A = y[rt - d] || 0, F = I && I[rt] || 0, _ = I && I[rt - d] || 0, j = p(A, F, _), z[rt + 1] = y[rt] - j + 256 & 255;
			return z
		},
		p = function(y, d, I) {
			if (y === d && d === I) return y;
			var A = Math.abs(d - I),
				F = Math.abs(y - I),
				_ = Math.abs(y + d - I - I);
			return A <= F && A <= _ ? y : F <= _ ? d : I
		},
		v = function() {
			return [o, a, u, c, f]
		},
		m = function(y) {
			var d = y.map(function(I) {
				return I.reduce(function(A, F) {
					return A + Math.abs(F)
				}, 0)
			});
			return d.indexOf(Math.min.apply(null, d))
		};
	e.processPNG = function(y, d, I, A) {
		var F, _, j, z, $, rt, lt, Y, R, K, ot, P, C, q, T, ct = this.decode.FLATE_DECODE,
			st = "";
		if (this.__addimage__.isArrayBuffer(y) && (y = new Uint8Array(y)), this.__addimage__.isArrayBufferView(y)) {
			if (y = (j = new Q2(y)).imgData, _ = j.bits, F = j.colorSpace, $ = j.colors, [4, 6].indexOf(j.colorType) !== -1) {
				if (j.bits === 8) {
					R = (Y = j.pixelBitlength == 32 ? new Uint32Array(j.decodePixels().buffer) : j.pixelBitlength == 16 ? new Uint16Array(j.decodePixels().buffer) : new Uint8Array(j.decodePixels().buffer)).length, ot = new Uint8Array(R * j.colors), K = new Uint8Array(R);
					var ht, Q = j.pixelBitlength - j.bits;
					for (q = 0, T = 0; q < R; q++) {
						for (C = Y[q], ht = 0; ht < Q;) ot[T++] = C >>> ht & 255, ht += j.bits;
						K[q] = C >>> ht & 255
					}
				}
				if (j.bits === 16) {
					R = (Y = new Uint32Array(j.decodePixels().buffer)).length, ot = new Uint8Array(R * (32 / j.pixelBitlength) * j.colors), K = new Uint8Array(R * (32 / j.pixelBitlength)), P = j.colors > 1, q = 0, T = 0;
					for (var dt = 0; q < R;) C = Y[q++], ot[T++] = C >>> 0 & 255, P && (ot[T++] = C >>> 16 & 255, C = Y[q++], ot[T++] = C >>> 0 & 255), K[dt++] = C >>> 16 & 255;
					_ = 8
				}
				A !== e.image_compression.NONE && t() ? (y = n(ot, j.width * j.colors, j.colors, A), lt = n(K, j.width, 1, A)) : (y = ot, lt = K, ct = void 0)
			}
			if (j.colorType === 3 && (F = this.color_spaces.INDEXED, rt = j.palette, j.transparency.indexed)) {
				var ut = j.transparency.indexed,
					_t = 0;
				for (q = 0, R = ut.length; q < R; ++q) _t += ut[q];
				if ((_t /= 255) === R - 1 && ut.indexOf(0) !== -1) z = [ut.indexOf(0)];
				else if (_t !== R) {
					for (Y = j.decodePixels(), K = new Uint8Array(Y.length), q = 0, R = Y.length; q < R; q++) K[q] = ut[Y[q]];
					lt = n(K, j.width, 1)
				}
			}
			var L = function(M) {
				var O;
				switch (M) {
					case e.image_compression.FAST:
						O = 11;
						break;
					case e.image_compression.MEDIUM:
						O = 13;
						break;
					case e.image_compression.SLOW:
						O = 14;
						break;
					default:
						O = 12
				}
				return O
			}(A);
			return ct === this.decode.FLATE_DECODE && (st = "/Predictor " + L + " "), st += "/Colors " + $ + " /BitsPerComponent " + _ + " /Columns " + j.width, (this.__addimage__.isArrayBuffer(y) || this.__addimage__.isArrayBufferView(y)) && (y = this.__addimage__.arrayBufferToBinaryString(y)), (lt && this.__addimage__.isArrayBuffer(lt) || this.__addimage__.isArrayBufferView(lt)) && (lt = this.__addimage__.arrayBufferToBinaryString(lt)), {
				alias: I,
				data: y,
				index: d,
				filter: ct,
				decodeParameters: st,
				transparency: z,
				palette: rt,
				sMask: lt,
				predictor: L,
				width: j.width,
				height: j.height,
				bitsPerComponent: _,
				colorSpace: F
			}
		}
	}
})(Gt.API),
function(e) {
	e.processGIF89A = function(t, n, i, o) {
		var a = new t1(t),
			u = a.width,
			c = a.height,
			f = [];
		a.decodeAndBlitFrameRGBA(0, f);
		var p = {
				data: f,
				width: u,
				height: c
			},
			v = new $s(100).encode(p, 100);
		return e.processJPEG.call(this, v, n, i, o)
	}, e.processGIF87A = e.processGIF89A
}(Gt.API), er.prototype.parseHeader = function() {
		if (this.fileSize = this.datav.getUint32(this.pos, !0), this.pos += 4, this.reserved = this.datav.getUint32(this.pos, !0), this.pos += 4, this.offset = this.datav.getUint32(this.pos, !0), this.pos += 4, this.headerSize = this.datav.getUint32(this.pos, !0), this.pos += 4, this.width = this.datav.getUint32(this.pos, !0), this.pos += 4, this.height = this.datav.getInt32(this.pos, !0), this.pos += 4, this.planes = this.datav.getUint16(this.pos, !0), this.pos += 2, this.bitPP = this.datav.getUint16(this.pos, !0), this.pos += 2, this.compress = this.datav.getUint32(this.pos, !0), this.pos += 4, this.rawSize = this.datav.getUint32(this.pos, !0), this.pos += 4, this.hr = this.datav.getUint32(this.pos, !0), this.pos += 4, this.vr = this.datav.getUint32(this.pos, !0), this.pos += 4, this.colors = this.datav.getUint32(this.pos, !0), this.pos += 4, this.importantColors = this.datav.getUint32(this.pos, !0), this.pos += 4, this.bitPP === 16 && this.is_with_alpha && (this.bitPP = 15), this.bitPP < 15) {
			var e = this.colors === 0 ? 1 << this.bitPP : this.colors;
			this.palette = new Array(e);
			for (var t = 0; t < e; t++) {
				var n = this.datav.getUint8(this.pos++, !0),
					i = this.datav.getUint8(this.pos++, !0),
					o = this.datav.getUint8(this.pos++, !0),
					a = this.datav.getUint8(this.pos++, !0);
				this.palette[t] = {
					red: o,
					green: i,
					blue: n,
					quad: a
				}
			}
		}
		this.height < 0 && (this.height *= -1, this.bottom_up = !1)
	}, er.prototype.parseBGR = function() {
		this.pos = this.offset;
		try {
			var e = "bit" + this.bitPP,
				t = this.width * this.height * 4;
			this.data = new Uint8Array(t), this[e]()
		} catch (n) {
			Ne.log("bit decode error:" + n)
		}
	}, er.prototype.bit1 = function() {
		var e, t = Math.ceil(this.width / 8),
			n = t % 4;
		for (e = this.height - 1; e >= 0; e--) {
			for (var i = this.bottom_up ? e : this.height - 1 - e, o = 0; o < t; o++)
				for (var a = this.datav.getUint8(this.pos++, !0), u = i * this.width * 4 + 8 * o * 4, c = 0; c < 8 && 8 * o + c < this.width; c++) {
					var f = this.palette[a >> 7 - c & 1];
					this.data[u + 4 * c] = f.blue, this.data[u + 4 * c + 1] = f.green, this.data[u + 4 * c + 2] = f.red, this.data[u + 4 * c + 3] = 255
				}
			n !== 0 && (this.pos += 4 - n)
		}
	}, er.prototype.bit4 = function() {
		for (var e = Math.ceil(this.width / 2), t = e % 4, n = this.height - 1; n >= 0; n--) {
			for (var i = this.bottom_up ? n : this.height - 1 - n, o = 0; o < e; o++) {
				var a = this.datav.getUint8(this.pos++, !0),
					u = i * this.width * 4 + 2 * o * 4,
					c = a >> 4,
					f = 15 & a,
					p = this.palette[c];
				if (this.data[u] = p.blue, this.data[u + 1] = p.green, this.data[u + 2] = p.red, this.data[u + 3] = 255, 2 * o + 1 >= this.width) break;
				p = this.palette[f], this.data[u + 4] = p.blue, this.data[u + 4 + 1] = p.green, this.data[u + 4 + 2] = p.red, this.data[u + 4 + 3] = 255
			}
			t !== 0 && (this.pos += 4 - t)
		}
	}, er.prototype.bit8 = function() {
		for (var e = this.width % 4, t = this.height - 1; t >= 0; t--) {
			for (var n = this.bottom_up ? t : this.height - 1 - t, i = 0; i < this.width; i++) {
				var o = this.datav.getUint8(this.pos++, !0),
					a = n * this.width * 4 + 4 * i;
				if (o < this.palette.length) {
					var u = this.palette[o];
					this.data[a] = u.red, this.data[a + 1] = u.green, this.data[a + 2] = u.blue, this.data[a + 3] = 255
				} else this.data[a] = 255, this.data[a + 1] = 255, this.data[a + 2] = 255, this.data[a + 3] = 255
			}
			e !== 0 && (this.pos += 4 - e)
		}
	}, er.prototype.bit15 = function() {
		for (var e = this.width % 3, t = parseInt("11111", 2), n = this.height - 1; n >= 0; n--) {
			for (var i = this.bottom_up ? n : this.height - 1 - n, o = 0; o < this.width; o++) {
				var a = this.datav.getUint16(this.pos, !0);
				this.pos += 2;
				var u = (a & t) / t * 255 | 0,
					c = (a >> 5 & t) / t * 255 | 0,
					f = (a >> 10 & t) / t * 255 | 0,
					p = a >> 15 ? 255 : 0,
					v = i * this.width * 4 + 4 * o;
				this.data[v] = f, this.data[v + 1] = c, this.data[v + 2] = u, this.data[v + 3] = p
			}
			this.pos += e
		}
	}, er.prototype.bit16 = function() {
		for (var e = this.width % 3, t = parseInt("11111", 2), n = parseInt("111111", 2), i = this.height - 1; i >= 0; i--) {
			for (var o = this.bottom_up ? i : this.height - 1 - i, a = 0; a < this.width; a++) {
				var u = this.datav.getUint16(this.pos, !0);
				this.pos += 2;
				var c = (u & t) / t * 255 | 0,
					f = (u >> 5 & n) / n * 255 | 0,
					p = (u >> 11) / t * 255 | 0,
					v = o * this.width * 4 + 4 * a;
				this.data[v] = p, this.data[v + 1] = f, this.data[v + 2] = c, this.data[v + 3] = 255
			}
			this.pos += e
		}
	}, er.prototype.bit24 = function() {
		for (var e = this.height - 1; e >= 0; e--) {
			for (var t = this.bottom_up ? e : this.height - 1 - e, n = 0; n < this.width; n++) {
				var i = this.datav.getUint8(this.pos++, !0),
					o = this.datav.getUint8(this.pos++, !0),
					a = this.datav.getUint8(this.pos++, !0),
					u = t * this.width * 4 + 4 * n;
				this.data[u] = a, this.data[u + 1] = o, this.data[u + 2] = i, this.data[u + 3] = 255
			}
			this.pos += this.width % 4
		}
	}, er.prototype.bit32 = function() {
		for (var e = this.height - 1; e >= 0; e--)
			for (var t = this.bottom_up ? e : this.height - 1 - e, n = 0; n < this.width; n++) {
				var i = this.datav.getUint8(this.pos++, !0),
					o = this.datav.getUint8(this.pos++, !0),
					a = this.datav.getUint8(this.pos++, !0),
					u = this.datav.getUint8(this.pos++, !0),
					c = t * this.width * 4 + 4 * n;
				this.data[c] = a, this.data[c + 1] = o, this.data[c + 2] = i, this.data[c + 3] = u
			}
	}, er.prototype.getData = function() {
		return this.data
	},
	function(e) {
		e.processBMP = function(t, n, i, o) {
			var a = new er(t, !1),
				u = a.width,
				c = a.height,
				f = {
					data: a.getData(),
					width: u,
					height: c
				},
				p = new $s(100).encode(f, 100);
			return e.processJPEG.call(this, p, n, i, o)
		}
	}(Gt.API), Bl.prototype.getData = function() {
		return this.data
	},
	function(e) {
		e.processWEBP = function(t, n, i, o) {
			var a = new Bl(t),
				u = a.width,
				c = a.height,
				f = {
					data: a.getData(),
					width: u,
					height: c
				},
				p = new $s(100).encode(f, 100);
			return e.processJPEG.call(this, p, n, i, o)
		}
	}(Gt.API), Gt.API.processRGBA = function(e, t, n) {
		for (var i = e.data, o = i.length, a = new Uint8Array(o / 4 * 3), u = new Uint8Array(o / 4), c = 0, f = 0, p = 0; p < o; p += 4) {
			var v = i[p],
				m = i[p + 1],
				y = i[p + 2],
				d = i[p + 3];
			a[c++] = v, a[c++] = m, a[c++] = y, u[f++] = d
		}
		var I = this.__addimage__.arrayBufferToBinaryString(a);
		return {
			alpha: this.__addimage__.arrayBufferToBinaryString(u),
			data: I,
			index: t,
			alias: n,
			colorSpace: "DeviceRGB",
			bitsPerComponent: 8,
			width: e.width,
			height: e.height
		}
	}, Gt.API.setLanguage = function(e) {
		return this.internal.languageSettings === void 0 && (this.internal.languageSettings = {}, this.internal.languageSettings.isSubscribed = !1), {
			af: "Afrikaans",
			sq: "Albanian",
			ar: "Arabic (Standard)",
			"ar-DZ": "Arabic (Algeria)",
			"ar-BH": "Arabic (Bahrain)",
			"ar-EG": "Arabic (Egypt)",
			"ar-IQ": "Arabic (Iraq)",
			"ar-JO": "Arabic (Jordan)",
			"ar-KW": "Arabic (Kuwait)",
			"ar-LB": "Arabic (Lebanon)",
			"ar-LY": "Arabic (Libya)",
			"ar-MA": "Arabic (Morocco)",
			"ar-OM": "Arabic (Oman)",
			"ar-QA": "Arabic (Qatar)",
			"ar-SA": "Arabic (Saudi Arabia)",
			"ar-SY": "Arabic (Syria)",
			"ar-TN": "Arabic (Tunisia)",
			"ar-AE": "Arabic (U.A.E.)",
			"ar-YE": "Arabic (Yemen)",
			an: "Aragonese",
			hy: "Armenian",
			as: "Assamese",
			ast: "Asturian",
			az: "Azerbaijani",
			eu: "Basque",
			be: "Belarusian",
			bn: "Bengali",
			bs: "Bosnian",
			br: "Breton",
			bg: "Bulgarian",
			my: "Burmese",
			ca: "Catalan",
			ch: "Chamorro",
			ce: "Chechen",
			zh: "Chinese",
			"zh-HK": "Chinese (Hong Kong)",
			"zh-CN": "Chinese (PRC)",
			"zh-SG": "Chinese (Singapore)",
			"zh-TW": "Chinese (Taiwan)",
			cv: "Chuvash",
			co: "Corsican",
			cr: "Cree",
			hr: "Croatian",
			cs: "Czech",
			da: "Danish",
			nl: "Dutch (Standard)",
			"nl-BE": "Dutch (Belgian)",
			en: "English",
			"en-AU": "English (Australia)",
			"en-BZ": "English (Belize)",
			"en-CA": "English (Canada)",
			"en-IE": "English (Ireland)",
			"en-JM": "English (Jamaica)",
			"en-NZ": "English (New Zealand)",
			"en-PH": "English (Philippines)",
			"en-ZA": "English (South Africa)",
			"en-TT": "English (Trinidad & Tobago)",
			"en-GB": "English (United Kingdom)",
			"en-US": "English (United States)",
			"en-ZW": "English (Zimbabwe)",
			eo: "Esperanto",
			et: "Estonian",
			fo: "Faeroese",
			fj: "Fijian",
			fi: "Finnish",
			fr: "French (Standard)",
			"fr-BE": "French (Belgium)",
			"fr-CA": "French (Canada)",
			"fr-FR": "French (France)",
			"fr-LU": "French (Luxembourg)",
			"fr-MC": "French (Monaco)",
			"fr-CH": "French (Switzerland)",
			fy: "Frisian",
			fur: "Friulian",
			gd: "Gaelic (Scots)",
			"gd-IE": "Gaelic (Irish)",
			gl: "Galacian",
			ka: "Georgian",
			de: "German (Standard)",
			"de-AT": "German (Austria)",
			"de-DE": "German (Germany)",
			"de-LI": "German (Liechtenstein)",
			"de-LU": "German (Luxembourg)",
			"de-CH": "German (Switzerland)",
			el: "Greek",
			gu: "Gujurati",
			ht: "Haitian",
			he: "Hebrew",
			hi: "Hindi",
			hu: "Hungarian",
			is: "Icelandic",
			id: "Indonesian",
			iu: "Inuktitut",
			ga: "Irish",
			it: "Italian (Standard)",
			"it-CH": "Italian (Switzerland)",
			ja: "Japanese",
			kn: "Kannada",
			ks: "Kashmiri",
			kk: "Kazakh",
			km: "Khmer",
			ky: "Kirghiz",
			tlh: "Klingon",
			ko: "Korean",
			"ko-KP": "Korean (North Korea)",
			"ko-KR": "Korean (South Korea)",
			la: "Latin",
			lv: "Latvian",
			lt: "Lithuanian",
			lb: "Luxembourgish",
			mk: "North Macedonia",
			ms: "Malay",
			ml: "Malayalam",
			mt: "Maltese",
			mi: "Maori",
			mr: "Marathi",
			mo: "Moldavian",
			nv: "Navajo",
			ng: "Ndonga",
			ne: "Nepali",
			no: "Norwegian",
			nb: "Norwegian (Bokmal)",
			nn: "Norwegian (Nynorsk)",
			oc: "Occitan",
			or: "Oriya",
			om: "Oromo",
			fa: "Persian",
			"fa-IR": "Persian/Iran",
			pl: "Polish",
			pt: "Portuguese",
			"pt-BR": "Portuguese (Brazil)",
			pa: "Punjabi",
			"pa-IN": "Punjabi (India)",
			"pa-PK": "Punjabi (Pakistan)",
			qu: "Quechua",
			rm: "Rhaeto-Romanic",
			ro: "Romanian",
			"ro-MO": "Romanian (Moldavia)",
			ru: "Russian",
			"ru-MO": "Russian (Moldavia)",
			sz: "Sami (Lappish)",
			sg: "Sango",
			sa: "Sanskrit",
			sc: "Sardinian",
			sd: "Sindhi",
			si: "Singhalese",
			sr: "Serbian",
			sk: "Slovak",
			sl: "Slovenian",
			so: "Somani",
			sb: "Sorbian",
			es: "Spanish",
			"es-AR": "Spanish (Argentina)",
			"es-BO": "Spanish (Bolivia)",
			"es-CL": "Spanish (Chile)",
			"es-CO": "Spanish (Colombia)",
			"es-CR": "Spanish (Costa Rica)",
			"es-DO": "Spanish (Dominican Republic)",
			"es-EC": "Spanish (Ecuador)",
			"es-SV": "Spanish (El Salvador)",
			"es-GT": "Spanish (Guatemala)",
			"es-HN": "Spanish (Honduras)",
			"es-MX": "Spanish (Mexico)",
			"es-NI": "Spanish (Nicaragua)",
			"es-PA": "Spanish (Panama)",
			"es-PY": "Spanish (Paraguay)",
			"es-PE": "Spanish (Peru)",
			"es-PR": "Spanish (Puerto Rico)",
			"es-ES": "Spanish (Spain)",
			"es-UY": "Spanish (Uruguay)",
			"es-VE": "Spanish (Venezuela)",
			sx: "Sutu",
			sw: "Swahili",
			sv: "Swedish",
			"sv-FI": "Swedish (Finland)",
			"sv-SV": "Swedish (Sweden)",
			ta: "Tamil",
			tt: "Tatar",
			te: "Teluga",
			th: "Thai",
			tig: "Tigre",
			ts: "Tsonga",
			tn: "Tswana",
			tr: "Turkish",
			tk: "Turkmen",
			uk: "Ukrainian",
			hsb: "Upper Sorbian",
			ur: "Urdu",
			ve: "Venda",
			vi: "Vietnamese",
			vo: "Volapuk",
			wa: "Walloon",
			cy: "Welsh",
			xh: "Xhosa",
			ji: "Yiddish",
			zu: "Zulu"
		} [e] !== void 0 && (this.internal.languageSettings.languageCode = e, this.internal.languageSettings.isSubscribed === !1 && (this.internal.events.subscribe("putCatalog", function() {
			this.internal.write("/Lang (" + this.internal.languageSettings.languageCode + ")")
		}), this.internal.languageSettings.isSubscribed = !0)), this
	}, qi = Gt.API, Mo = qi.getCharWidthsArray = function(e, t) {
		var n, i, o = (t = t || {}).font || this.internal.getFont(),
			a = t.fontSize || this.internal.getFontSize(),
			u = t.charSpace || this.internal.getCharSpace(),
			c = t.widths ? t.widths : o.metadata.Unicode.widths,
			f = c.fof ? c.fof : 1,
			p = t.kerning ? t.kerning : o.metadata.Unicode.kerning,
			v = p.fof ? p.fof : 1,
			m = t.doKerning !== !1,
			y = 0,
			d = e.length,
			I = 0,
			A = c[0] || f,
			F = [];
		for (n = 0; n < d; n++) i = e.charCodeAt(n), typeof o.metadata.widthOfString == "function" ? F.push((o.metadata.widthOfGlyph(o.metadata.characterToGlyph(i)) + u * (1e3 / a) || 0) / 1e3) : (y = m && be(p[i]) === "object" && !isNaN(parseInt(p[i][I], 10)) ? p[i][I] / v : 0, F.push((c[i] || A) / f + y)), I = i;
		return F
	}, Ml = qi.getStringUnitWidth = function(e, t) {
		var n = (t = t || {}).fontSize || this.internal.getFontSize(),
			i = t.font || this.internal.getFont(),
			o = t.charSpace || this.internal.getCharSpace();
		return qi.processArabic && (e = qi.processArabic(e)), typeof i.metadata.widthOfString == "function" ? i.metadata.widthOfString(e, n, o) / n : Mo.apply(this, arguments).reduce(function(a, u) {
			return a + u
		}, 0)
	}, Dl = function(e, t, n, i) {
		for (var o = [], a = 0, u = e.length, c = 0; a !== u && c + t[a] < n;) c += t[a], a++;
		o.push(e.slice(0, a));
		var f = a;
		for (c = 0; a !== u;) c + t[a] > i && (o.push(e.slice(f, a)), c = 0, f = a), c += t[a], a++;
		return f !== a && o.push(e.slice(f, a)), o
	}, Ol = function(e, t, n) {
		n || (n = {});
		var i, o, a, u, c, f, p, v = [],
			m = [v],
			y = n.textIndent || 0,
			d = 0,
			I = 0,
			A = e.split(" "),
			F = Mo.apply(this, [" ", n])[0];
		if (f = n.lineIndent === -1 ? A[0].length + 2 : n.lineIndent || 0) {
			var _ = Array(f).join(" "),
				j = [];
			A.map(function($) {
				($ = $.split(/\s*\n/)).length > 1 ? j = j.concat($.map(function(rt, lt) {
					return (lt && rt.length ? `
` : "") + rt
				})) : j.push($[0])
			}), A = j, f = Ml.apply(this, [_, n])
		}
		for (a = 0, u = A.length; a < u; a++) {
			var z = 0;
			if (i = A[a], f && i[0] == `
` && (i = i.substr(1), z = 1), y + d + (I = (o = Mo.apply(this, [i, n])).reduce(function($, rt) {
					return $ + rt
				}, 0)) > t || z) {
				if (I > t) {
					for (c = Dl.apply(this, [i, o, t - (y + d), t]), v.push(c.shift()), v = [c.pop()]; c.length;) m.push([c.shift()]);
					I = o.slice(i.length - (v[0] ? v[0].length : 0)).reduce(function($, rt) {
						return $ + rt
					}, 0)
				} else v = [i];
				m.push(v), y = I + f, d = F
			} else v.push(i), y += d + I, d = F
		}
		return p = f ? function($, rt) {
			return (rt ? _ : "") + $.join(" ")
		} : function($) {
			return $.join(" ")
		}, m.map(p)
	}, qi.splitTextToSize = function(e, t, n) {
		var i, o = (n = n || {}).fontSize || this.internal.getFontSize(),
			a = function(v) {
				if (v.widths && v.kerning) return {
					widths: v.widths,
					kerning: v.kerning
				};
				var m = this.internal.getFont(v.fontName, v.fontStyle);
				return m.metadata.Unicode ? {
					widths: m.metadata.Unicode.widths || {
						0: 1
					},
					kerning: m.metadata.Unicode.kerning || {}
				} : {
					font: m.metadata,
					fontSize: this.internal.getFontSize(),
					charSpace: this.internal.getCharSpace()
				}
			}.call(this, n);
		i = Array.isArray(e) ? e : String(e).split(/\r?\n/);
		var u = 1 * this.internal.scaleFactor * t / o;
		a.textIndent = n.textIndent ? 1 * n.textIndent * this.internal.scaleFactor / o : 0, a.lineIndent = n.lineIndent;
		var c, f, p = [];
		for (c = 0, f = i.length; c < f; c++) p = p.concat(Ol.apply(this, [i[c], u, a]));
		return p
	},
	function(e) {
		e.__fontmetrics__ = e.__fontmetrics__ || {};
		for (var t = "klmnopqrstuvwxyz", n = {}, i = {}, o = 0; o < t.length; o++) n[t[o]] = "0123456789abcdef" [o], i["0123456789abcdef" [o]] = t[o];
		var a = function(m) {
				return "0x" + parseInt(m, 10).toString(16)
			},
			u = e.__fontmetrics__.compress = function(m) {
				var y, d, I, A, F = ["{"];
				for (var _ in m) {
					if (y = m[_], isNaN(parseInt(_, 10)) ? d = "'" + _ + "'" : (_ = parseInt(_, 10), d = (d = a(_).slice(2)).slice(0, -1) + i[d.slice(-1)]), typeof y == "number") y < 0 ? (I = a(y).slice(3), A = "-") : (I = a(y).slice(2), A = ""), I = A + I.slice(0, -1) + i[I.slice(-1)];
					else {
						if (be(y) !== "object") throw new Error("Don't know what to do with value type " + be(y) + ".");
						I = u(y)
					}
					F.push(d + I)
				}
				return F.push("}"), F.join("")
			},
			c = e.__fontmetrics__.uncompress = function(m) {
				if (typeof m != "string") throw new Error("Invalid argument passed to uncompress.");
				for (var y, d, I, A, F = {}, _ = 1, j = F, z = [], $ = "", rt = "", lt = m.length - 1, Y = 1; Y < lt; Y += 1)(A = m[Y]) == "'" ? y ? (I = y.join(""), y = void 0) : y = [] : y ? y.push(A) : A == "{" ? (z.push([j, I]), j = {}, I = void 0) : A == "}" ? ((d = z.pop())[0][d[1]] = j, I = void 0, j = d[0]) : A == "-" ? _ = -1 : I === void 0 ? n.hasOwnProperty(A) ? ($ += n[A], I = parseInt($, 16) * _, _ = 1, $ = "") : $ += A : n.hasOwnProperty(A) ? (rt += n[A], j[I] = parseInt(rt, 16) * _, _ = 1, I = void 0, rt = "") : rt += A;
				return F
			},
			f = {
				codePages: ["WinAnsiEncoding"],
				WinAnsiEncoding: c("{19m8n201n9q201o9r201s9l201t9m201u8m201w9n201x9o201y8o202k8q202l8r202m9p202q8p20aw8k203k8t203t8v203u9v2cq8s212m9t15m8w15n9w2dw9s16k8u16l9u17s9z17x8y17y9y}")
			},
			p = {
				Unicode: {
					Courier: f,
					"Courier-Bold": f,
					"Courier-BoldOblique": f,
					"Courier-Oblique": f,
					Helvetica: f,
					"Helvetica-Bold": f,
					"Helvetica-BoldOblique": f,
					"Helvetica-Oblique": f,
					"Times-Roman": f,
					"Times-Bold": f,
					"Times-BoldItalic": f,
					"Times-Italic": f
				}
			},
			v = {
				Unicode: {
					"Courier-Oblique": c("{'widths'{k3w'fof'6o}'kerning'{'fof'-6o}}"),
					"Times-BoldItalic": c("{'widths'{k3o2q4ycx2r201n3m201o6o201s2l201t2l201u2l201w3m201x3m201y3m2k1t2l2r202m2n2n3m2o3m2p5n202q6o2r1w2s2l2t2l2u3m2v3t2w1t2x2l2y1t2z1w3k3m3l3m3m3m3n3m3o3m3p3m3q3m3r3m3s3m203t2l203u2l3v2l3w3t3x3t3y3t3z3m4k5n4l4m4m4m4n4m4o4s4p4m4q4m4r4s4s4y4t2r4u3m4v4m4w3x4x5t4y4s4z4s5k3x5l4s5m4m5n3r5o3x5p4s5q4m5r5t5s4m5t3x5u3x5v2l5w1w5x2l5y3t5z3m6k2l6l3m6m3m6n2w6o3m6p2w6q2l6r3m6s3r6t1w6u1w6v3m6w1w6x4y6y3r6z3m7k3m7l3m7m2r7n2r7o1w7p3r7q2w7r4m7s3m7t2w7u2r7v2n7w1q7x2n7y3t202l3mcl4mal2ram3man3mao3map3mar3mas2lat4uau1uav3maw3way4uaz2lbk2sbl3t'fof'6obo2lbp3tbq3mbr1tbs2lbu1ybv3mbz3mck4m202k3mcm4mcn4mco4mcp4mcq5ycr4mcs4mct4mcu4mcv4mcw2r2m3rcy2rcz2rdl4sdm4sdn4sdo4sdp4sdq4sds4sdt4sdu4sdv4sdw4sdz3mek3mel3mem3men3meo3mep3meq4ser2wes2wet2weu2wev2wew1wex1wey1wez1wfl3rfm3mfn3mfo3mfp3mfq3mfr3tfs3mft3rfu3rfv3rfw3rfz2w203k6o212m6o2dw2l2cq2l3t3m3u2l17s3x19m3m}'kerning'{cl{4qu5kt5qt5rs17ss5ts}201s{201ss}201t{cks4lscmscnscoscpscls2wu2yu201ts}201x{2wu2yu}2k{201ts}2w{4qx5kx5ou5qx5rs17su5tu}2x{17su5tu5ou}2y{4qx5kx5ou5qx5rs17ss5ts}'fof'-6ofn{17sw5tw5ou5qw5rs}7t{cksclscmscnscoscps4ls}3u{17su5tu5os5qs}3v{17su5tu5os5qs}7p{17su5tu}ck{4qu5kt5qt5rs17ss5ts}4l{4qu5kt5qt5rs17ss5ts}cm{4qu5kt5qt5rs17ss5ts}cn{4qu5kt5qt5rs17ss5ts}co{4qu5kt5qt5rs17ss5ts}cp{4qu5kt5qt5rs17ss5ts}6l{4qu5ou5qw5rt17su5tu}5q{ckuclucmucnucoucpu4lu}5r{ckuclucmucnucoucpu4lu}7q{cksclscmscnscoscps4ls}6p{4qu5ou5qw5rt17sw5tw}ek{4qu5ou5qw5rt17su5tu}el{4qu5ou5qw5rt17su5tu}em{4qu5ou5qw5rt17su5tu}en{4qu5ou5qw5rt17su5tu}eo{4qu5ou5qw5rt17su5tu}ep{4qu5ou5qw5rt17su5tu}es{17ss5ts5qs4qu}et{4qu5ou5qw5rt17sw5tw}eu{4qu5ou5qw5rt17ss5ts}ev{17ss5ts5qs4qu}6z{17sw5tw5ou5qw5rs}fm{17sw5tw5ou5qw5rs}7n{201ts}fo{17sw5tw5ou5qw5rs}fp{17sw5tw5ou5qw5rs}fq{17sw5tw5ou5qw5rs}7r{cksclscmscnscoscps4ls}fs{17sw5tw5ou5qw5rs}ft{17su5tu}fu{17su5tu}fv{17su5tu}fw{17su5tu}fz{cksclscmscnscoscps4ls}}}"),
					"Helvetica-Bold": c("{'widths'{k3s2q4scx1w201n3r201o6o201s1w201t1w201u1w201w3m201x3m201y3m2k1w2l2l202m2n2n3r2o3r2p5t202q6o2r1s2s2l2t2l2u2r2v3u2w1w2x2l2y1w2z1w3k3r3l3r3m3r3n3r3o3r3p3r3q3r3r3r3s3r203t2l203u2l3v2l3w3u3x3u3y3u3z3x4k6l4l4s4m4s4n4s4o4s4p4m4q3x4r4y4s4s4t1w4u3r4v4s4w3x4x5n4y4s4z4y5k4m5l4y5m4s5n4m5o3x5p4s5q4m5r5y5s4m5t4m5u3x5v2l5w1w5x2l5y3u5z3r6k2l6l3r6m3x6n3r6o3x6p3r6q2l6r3x6s3x6t1w6u1w6v3r6w1w6x5t6y3x6z3x7k3x7l3x7m2r7n3r7o2l7p3x7q3r7r4y7s3r7t3r7u3m7v2r7w1w7x2r7y3u202l3rcl4sal2lam3ran3rao3rap3rar3ras2lat4tau2pav3raw3uay4taz2lbk2sbl3u'fof'6obo2lbp3xbq3rbr1wbs2lbu2obv3rbz3xck4s202k3rcm4scn4sco4scp4scq6ocr4scs4mct4mcu4mcv4mcw1w2m2zcy1wcz1wdl4sdm4ydn4ydo4ydp4ydq4yds4ydt4sdu4sdv4sdw4sdz3xek3rel3rem3ren3reo3rep3req5ter3res3ret3reu3rev3rew1wex1wey1wez1wfl3xfm3xfn3xfo3xfp3xfq3xfr3ufs3xft3xfu3xfv3xfw3xfz3r203k6o212m6o2dw2l2cq2l3t3r3u2l17s4m19m3r}'kerning'{cl{4qs5ku5ot5qs17sv5tv}201t{2ww4wy2yw}201w{2ks}201x{2ww4wy2yw}2k{201ts201xs}2w{7qs4qu5kw5os5qw5rs17su5tu7tsfzs}2x{5ow5qs}2y{7qs4qu5kw5os5qw5rs17su5tu7tsfzs}'fof'-6o7p{17su5tu5ot}ck{4qs5ku5ot5qs17sv5tv}4l{4qs5ku5ot5qs17sv5tv}cm{4qs5ku5ot5qs17sv5tv}cn{4qs5ku5ot5qs17sv5tv}co{4qs5ku5ot5qs17sv5tv}cp{4qs5ku5ot5qs17sv5tv}6l{17st5tt5os}17s{2kwclvcmvcnvcovcpv4lv4wwckv}5o{2kucltcmtcntcotcpt4lt4wtckt}5q{2ksclscmscnscoscps4ls4wvcks}5r{2ks4ws}5t{2kwclvcmvcnvcovcpv4lv4wwckv}eo{17st5tt5os}fu{17su5tu5ot}6p{17ss5ts}ek{17st5tt5os}el{17st5tt5os}em{17st5tt5os}en{17st5tt5os}6o{201ts}ep{17st5tt5os}es{17ss5ts}et{17ss5ts}eu{17ss5ts}ev{17ss5ts}6z{17su5tu5os5qt}fm{17su5tu5os5qt}fn{17su5tu5os5qt}fo{17su5tu5os5qt}fp{17su5tu5os5qt}fq{17su5tu5os5qt}fs{17su5tu5os5qt}ft{17su5tu5ot}7m{5os}fv{17su5tu5ot}fw{17su5tu5ot}}}"),
					Courier: c("{'widths'{k3w'fof'6o}'kerning'{'fof'-6o}}"),
					"Courier-BoldOblique": c("{'widths'{k3w'fof'6o}'kerning'{'fof'-6o}}"),
					"Times-Bold": c("{'widths'{k3q2q5ncx2r201n3m201o6o201s2l201t2l201u2l201w3m201x3m201y3m2k1t2l2l202m2n2n3m2o3m2p6o202q6o2r1w2s2l2t2l2u3m2v3t2w1t2x2l2y1t2z1w3k3m3l3m3m3m3n3m3o3m3p3m3q3m3r3m3s3m203t2l203u2l3v2l3w3t3x3t3y3t3z3m4k5x4l4s4m4m4n4s4o4s4p4m4q3x4r4y4s4y4t2r4u3m4v4y4w4m4x5y4y4s4z4y5k3x5l4y5m4s5n3r5o4m5p4s5q4s5r6o5s4s5t4s5u4m5v2l5w1w5x2l5y3u5z3m6k2l6l3m6m3r6n2w6o3r6p2w6q2l6r3m6s3r6t1w6u2l6v3r6w1w6x5n6y3r6z3m7k3r7l3r7m2w7n2r7o2l7p3r7q3m7r4s7s3m7t3m7u2w7v2r7w1q7x2r7y3o202l3mcl4sal2lam3man3mao3map3mar3mas2lat4uau1yav3maw3tay4uaz2lbk2sbl3t'fof'6obo2lbp3rbr1tbs2lbu2lbv3mbz3mck4s202k3mcm4scn4sco4scp4scq6ocr4scs4mct4mcu4mcv4mcw2r2m3rcy2rcz2rdl4sdm4ydn4ydo4ydp4ydq4yds4ydt4sdu4sdv4sdw4sdz3rek3mel3mem3men3meo3mep3meq4ser2wes2wet2weu2wev2wew1wex1wey1wez1wfl3rfm3mfn3mfo3mfp3mfq3mfr3tfs3mft3rfu3rfv3rfw3rfz3m203k6o212m6o2dw2l2cq2l3t3m3u2l17s4s19m3m}'kerning'{cl{4qt5ks5ot5qy5rw17sv5tv}201t{cks4lscmscnscoscpscls4wv}2k{201ts}2w{4qu5ku7mu5os5qx5ru17su5tu}2x{17su5tu5ou5qs}2y{4qv5kv7mu5ot5qz5ru17su5tu}'fof'-6o7t{cksclscmscnscoscps4ls}3u{17su5tu5os5qu}3v{17su5tu5os5qu}fu{17su5tu5ou5qu}7p{17su5tu5ou5qu}ck{4qt5ks5ot5qy5rw17sv5tv}4l{4qt5ks5ot5qy5rw17sv5tv}cm{4qt5ks5ot5qy5rw17sv5tv}cn{4qt5ks5ot5qy5rw17sv5tv}co{4qt5ks5ot5qy5rw17sv5tv}cp{4qt5ks5ot5qy5rw17sv5tv}6l{17st5tt5ou5qu}17s{ckuclucmucnucoucpu4lu4wu}5o{ckuclucmucnucoucpu4lu4wu}5q{ckzclzcmzcnzcozcpz4lz4wu}5r{ckxclxcmxcnxcoxcpx4lx4wu}5t{ckuclucmucnucoucpu4lu4wu}7q{ckuclucmucnucoucpu4lu}6p{17sw5tw5ou5qu}ek{17st5tt5qu}el{17st5tt5ou5qu}em{17st5tt5qu}en{17st5tt5qu}eo{17st5tt5qu}ep{17st5tt5ou5qu}es{17ss5ts5qu}et{17sw5tw5ou5qu}eu{17sw5tw5ou5qu}ev{17ss5ts5qu}6z{17sw5tw5ou5qu5rs}fm{17sw5tw5ou5qu5rs}fn{17sw5tw5ou5qu5rs}fo{17sw5tw5ou5qu5rs}fp{17sw5tw5ou5qu5rs}fq{17sw5tw5ou5qu5rs}7r{cktcltcmtcntcotcpt4lt5os}fs{17sw5tw5ou5qu5rs}ft{17su5tu5ou5qu}7m{5os}fv{17su5tu5ou5qu}fw{17su5tu5ou5qu}fz{cksclscmscnscoscps4ls}}}"),
					Symbol: c("{'widths'{k3uaw4r19m3m2k1t2l2l202m2y2n3m2p5n202q6o3k3m2s2l2t2l2v3r2w1t3m3m2y1t2z1wbk2sbl3r'fof'6o3n3m3o3m3p3m3q3m3r3m3s3m3t3m3u1w3v1w3w3r3x3r3y3r3z2wbp3t3l3m5v2l5x2l5z3m2q4yfr3r7v3k7w1o7x3k}'kerning'{'fof'-6o}}"),
					Helvetica: c("{'widths'{k3p2q4mcx1w201n3r201o6o201s1q201t1q201u1q201w2l201x2l201y2l2k1w2l1w202m2n2n3r2o3r2p5t202q6o2r1n2s2l2t2l2u2r2v3u2w1w2x2l2y1w2z1w3k3r3l3r3m3r3n3r3o3r3p3r3q3r3r3r3s3r203t2l203u2l3v1w3w3u3x3u3y3u3z3r4k6p4l4m4m4m4n4s4o4s4p4m4q3x4r4y4s4s4t1w4u3m4v4m4w3r4x5n4y4s4z4y5k4m5l4y5m4s5n4m5o3x5p4s5q4m5r5y5s4m5t4m5u3x5v1w5w1w5x1w5y2z5z3r6k2l6l3r6m3r6n3m6o3r6p3r6q1w6r3r6s3r6t1q6u1q6v3m6w1q6x5n6y3r6z3r7k3r7l3r7m2l7n3m7o1w7p3r7q3m7r4s7s3m7t3m7u3m7v2l7w1u7x2l7y3u202l3rcl4mal2lam3ran3rao3rap3rar3ras2lat4tau2pav3raw3uay4taz2lbk2sbl3u'fof'6obo2lbp3rbr1wbs2lbu2obv3rbz3xck4m202k3rcm4mcn4mco4mcp4mcq6ocr4scs4mct4mcu4mcv4mcw1w2m2ncy1wcz1wdl4sdm4ydn4ydo4ydp4ydq4yds4ydt4sdu4sdv4sdw4sdz3xek3rel3rem3ren3reo3rep3req5ter3mes3ret3reu3rev3rew1wex1wey1wez1wfl3rfm3rfn3rfo3rfp3rfq3rfr3ufs3xft3rfu3rfv3rfw3rfz3m203k6o212m6o2dw2l2cq2l3t3r3u1w17s4m19m3r}'kerning'{5q{4wv}cl{4qs5kw5ow5qs17sv5tv}201t{2wu4w1k2yu}201x{2wu4wy2yu}17s{2ktclucmucnu4otcpu4lu4wycoucku}2w{7qs4qz5k1m17sy5ow5qx5rsfsu5ty7tufzu}2x{17sy5ty5oy5qs}2y{7qs4qz5k1m17sy5ow5qx5rsfsu5ty7tufzu}'fof'-6o7p{17sv5tv5ow}ck{4qs5kw5ow5qs17sv5tv}4l{4qs5kw5ow5qs17sv5tv}cm{4qs5kw5ow5qs17sv5tv}cn{4qs5kw5ow5qs17sv5tv}co{4qs5kw5ow5qs17sv5tv}cp{4qs5kw5ow5qs17sv5tv}6l{17sy5ty5ow}do{17st5tt}4z{17st5tt}7s{fst}dm{17st5tt}dn{17st5tt}5o{ckwclwcmwcnwcowcpw4lw4wv}dp{17st5tt}dq{17st5tt}7t{5ow}ds{17st5tt}5t{2ktclucmucnu4otcpu4lu4wycoucku}fu{17sv5tv5ow}6p{17sy5ty5ow5qs}ek{17sy5ty5ow}el{17sy5ty5ow}em{17sy5ty5ow}en{5ty}eo{17sy5ty5ow}ep{17sy5ty5ow}es{17sy5ty5qs}et{17sy5ty5ow5qs}eu{17sy5ty5ow5qs}ev{17sy5ty5ow5qs}6z{17sy5ty5ow5qs}fm{17sy5ty5ow5qs}fn{17sy5ty5ow5qs}fo{17sy5ty5ow5qs}fp{17sy5ty5qs}fq{17sy5ty5ow5qs}7r{5ow}fs{17sy5ty5ow5qs}ft{17sv5tv5ow}7m{5ow}fv{17sv5tv5ow}fw{17sv5tv5ow}}}"),
					"Helvetica-BoldOblique": c("{'widths'{k3s2q4scx1w201n3r201o6o201s1w201t1w201u1w201w3m201x3m201y3m2k1w2l2l202m2n2n3r2o3r2p5t202q6o2r1s2s2l2t2l2u2r2v3u2w1w2x2l2y1w2z1w3k3r3l3r3m3r3n3r3o3r3p3r3q3r3r3r3s3r203t2l203u2l3v2l3w3u3x3u3y3u3z3x4k6l4l4s4m4s4n4s4o4s4p4m4q3x4r4y4s4s4t1w4u3r4v4s4w3x4x5n4y4s4z4y5k4m5l4y5m4s5n4m5o3x5p4s5q4m5r5y5s4m5t4m5u3x5v2l5w1w5x2l5y3u5z3r6k2l6l3r6m3x6n3r6o3x6p3r6q2l6r3x6s3x6t1w6u1w6v3r6w1w6x5t6y3x6z3x7k3x7l3x7m2r7n3r7o2l7p3x7q3r7r4y7s3r7t3r7u3m7v2r7w1w7x2r7y3u202l3rcl4sal2lam3ran3rao3rap3rar3ras2lat4tau2pav3raw3uay4taz2lbk2sbl3u'fof'6obo2lbp3xbq3rbr1wbs2lbu2obv3rbz3xck4s202k3rcm4scn4sco4scp4scq6ocr4scs4mct4mcu4mcv4mcw1w2m2zcy1wcz1wdl4sdm4ydn4ydo4ydp4ydq4yds4ydt4sdu4sdv4sdw4sdz3xek3rel3rem3ren3reo3rep3req5ter3res3ret3reu3rev3rew1wex1wey1wez1wfl3xfm3xfn3xfo3xfp3xfq3xfr3ufs3xft3xfu3xfv3xfw3xfz3r203k6o212m6o2dw2l2cq2l3t3r3u2l17s4m19m3r}'kerning'{cl{4qs5ku5ot5qs17sv5tv}201t{2ww4wy2yw}201w{2ks}201x{2ww4wy2yw}2k{201ts201xs}2w{7qs4qu5kw5os5qw5rs17su5tu7tsfzs}2x{5ow5qs}2y{7qs4qu5kw5os5qw5rs17su5tu7tsfzs}'fof'-6o7p{17su5tu5ot}ck{4qs5ku5ot5qs17sv5tv}4l{4qs5ku5ot5qs17sv5tv}cm{4qs5ku5ot5qs17sv5tv}cn{4qs5ku5ot5qs17sv5tv}co{4qs5ku5ot5qs17sv5tv}cp{4qs5ku5ot5qs17sv5tv}6l{17st5tt5os}17s{2kwclvcmvcnvcovcpv4lv4wwckv}5o{2kucltcmtcntcotcpt4lt4wtckt}5q{2ksclscmscnscoscps4ls4wvcks}5r{2ks4ws}5t{2kwclvcmvcnvcovcpv4lv4wwckv}eo{17st5tt5os}fu{17su5tu5ot}6p{17ss5ts}ek{17st5tt5os}el{17st5tt5os}em{17st5tt5os}en{17st5tt5os}6o{201ts}ep{17st5tt5os}es{17ss5ts}et{17ss5ts}eu{17ss5ts}ev{17ss5ts}6z{17su5tu5os5qt}fm{17su5tu5os5qt}fn{17su5tu5os5qt}fo{17su5tu5os5qt}fp{17su5tu5os5qt}fq{17su5tu5os5qt}fs{17su5tu5os5qt}ft{17su5tu5ot}7m{5os}fv{17su5tu5ot}fw{17su5tu5ot}}}"),
					ZapfDingbats: c("{'widths'{k4u2k1w'fof'6o}'kerning'{'fof'-6o}}"),
					"Courier-Bold": c("{'widths'{k3w'fof'6o}'kerning'{'fof'-6o}}"),
					"Times-Italic": c("{'widths'{k3n2q4ycx2l201n3m201o5t201s2l201t2l201u2l201w3r201x3r201y3r2k1t2l2l202m2n2n3m2o3m2p5n202q5t2r1p2s2l2t2l2u3m2v4n2w1t2x2l2y1t2z1w3k3m3l3m3m3m3n3m3o3m3p3m3q3m3r3m3s3m203t2l203u2l3v2l3w4n3x4n3y4n3z3m4k5w4l3x4m3x4n4m4o4s4p3x4q3x4r4s4s4s4t2l4u2w4v4m4w3r4x5n4y4m4z4s5k3x5l4s5m3x5n3m5o3r5p4s5q3x5r5n5s3x5t3r5u3r5v2r5w1w5x2r5y2u5z3m6k2l6l3m6m3m6n2w6o3m6p2w6q1w6r3m6s3m6t1w6u1w6v2w6w1w6x4s6y3m6z3m7k3m7l3m7m2r7n2r7o1w7p3m7q2w7r4m7s2w7t2w7u2r7v2s7w1v7x2s7y3q202l3mcl3xal2ram3man3mao3map3mar3mas2lat4wau1vav3maw4nay4waz2lbk2sbl4n'fof'6obo2lbp3mbq3obr1tbs2lbu1zbv3mbz3mck3x202k3mcm3xcn3xco3xcp3xcq5tcr4mcs3xct3xcu3xcv3xcw2l2m2ucy2lcz2ldl4mdm4sdn4sdo4sdp4sdq4sds4sdt4sdu4sdv4sdw4sdz3mek3mel3mem3men3meo3mep3meq4mer2wes2wet2weu2wev2wew1wex1wey1wez1wfl3mfm3mfn3mfo3mfp3mfq3mfr4nfs3mft3mfu3mfv3mfw3mfz2w203k6o212m6m2dw2l2cq2l3t3m3u2l17s3r19m3m}'kerning'{cl{5kt4qw}201s{201sw}201t{201tw2wy2yy6q-t}201x{2wy2yy}2k{201tw}2w{7qs4qy7rs5ky7mw5os5qx5ru17su5tu}2x{17ss5ts5os}2y{7qs4qy7rs5ky7mw5os5qx5ru17su5tu}'fof'-6o6t{17ss5ts5qs}7t{5os}3v{5qs}7p{17su5tu5qs}ck{5kt4qw}4l{5kt4qw}cm{5kt4qw}cn{5kt4qw}co{5kt4qw}cp{5kt4qw}6l{4qs5ks5ou5qw5ru17su5tu}17s{2ks}5q{ckvclvcmvcnvcovcpv4lv}5r{ckuclucmucnucoucpu4lu}5t{2ks}6p{4qs5ks5ou5qw5ru17su5tu}ek{4qs5ks5ou5qw5ru17su5tu}el{4qs5ks5ou5qw5ru17su5tu}em{4qs5ks5ou5qw5ru17su5tu}en{4qs5ks5ou5qw5ru17su5tu}eo{4qs5ks5ou5qw5ru17su5tu}ep{4qs5ks5ou5qw5ru17su5tu}es{5ks5qs4qs}et{4qs5ks5ou5qw5ru17su5tu}eu{4qs5ks5qw5ru17su5tu}ev{5ks5qs4qs}ex{17ss5ts5qs}6z{4qv5ks5ou5qw5ru17su5tu}fm{4qv5ks5ou5qw5ru17su5tu}fn{4qv5ks5ou5qw5ru17su5tu}fo{4qv5ks5ou5qw5ru17su5tu}fp{4qv5ks5ou5qw5ru17su5tu}fq{4qv5ks5ou5qw5ru17su5tu}7r{5os}fs{4qv5ks5ou5qw5ru17su5tu}ft{17su5tu5qs}fu{17su5tu5qs}fv{17su5tu5qs}fw{17su5tu5qs}}}"),
					"Times-Roman": c("{'widths'{k3n2q4ycx2l201n3m201o6o201s2l201t2l201u2l201w2w201x2w201y2w2k1t2l2l202m2n2n3m2o3m2p5n202q6o2r1m2s2l2t2l2u3m2v3s2w1t2x2l2y1t2z1w3k3m3l3m3m3m3n3m3o3m3p3m3q3m3r3m3s3m203t2l203u2l3v1w3w3s3x3s3y3s3z2w4k5w4l4s4m4m4n4m4o4s4p3x4q3r4r4s4s4s4t2l4u2r4v4s4w3x4x5t4y4s4z4s5k3r5l4s5m4m5n3r5o3x5p4s5q4s5r5y5s4s5t4s5u3x5v2l5w1w5x2l5y2z5z3m6k2l6l2w6m3m6n2w6o3m6p2w6q2l6r3m6s3m6t1w6u1w6v3m6w1w6x4y6y3m6z3m7k3m7l3m7m2l7n2r7o1w7p3m7q3m7r4s7s3m7t3m7u2w7v3k7w1o7x3k7y3q202l3mcl4sal2lam3man3mao3map3mar3mas2lat4wau1vav3maw3say4waz2lbk2sbl3s'fof'6obo2lbp3mbq2xbr1tbs2lbu1zbv3mbz2wck4s202k3mcm4scn4sco4scp4scq5tcr4mcs3xct3xcu3xcv3xcw2l2m2tcy2lcz2ldl4sdm4sdn4sdo4sdp4sdq4sds4sdt4sdu4sdv4sdw4sdz3mek2wel2wem2wen2weo2wep2weq4mer2wes2wet2weu2wev2wew1wex1wey1wez1wfl3mfm3mfn3mfo3mfp3mfq3mfr3sfs3mft3mfu3mfv3mfw3mfz3m203k6o212m6m2dw2l2cq2l3t3m3u1w17s4s19m3m}'kerning'{cl{4qs5ku17sw5ou5qy5rw201ss5tw201ws}201s{201ss}201t{ckw4lwcmwcnwcowcpwclw4wu201ts}2k{201ts}2w{4qs5kw5os5qx5ru17sx5tx}2x{17sw5tw5ou5qu}2y{4qs5kw5os5qx5ru17sx5tx}'fof'-6o7t{ckuclucmucnucoucpu4lu5os5rs}3u{17su5tu5qs}3v{17su5tu5qs}7p{17sw5tw5qs}ck{4qs5ku17sw5ou5qy5rw201ss5tw201ws}4l{4qs5ku17sw5ou5qy5rw201ss5tw201ws}cm{4qs5ku17sw5ou5qy5rw201ss5tw201ws}cn{4qs5ku17sw5ou5qy5rw201ss5tw201ws}co{4qs5ku17sw5ou5qy5rw201ss5tw201ws}cp{4qs5ku17sw5ou5qy5rw201ss5tw201ws}6l{17su5tu5os5qw5rs}17s{2ktclvcmvcnvcovcpv4lv4wuckv}5o{ckwclwcmwcnwcowcpw4lw4wu}5q{ckyclycmycnycoycpy4ly4wu5ms}5r{cktcltcmtcntcotcpt4lt4ws}5t{2ktclvcmvcnvcovcpv4lv4wuckv}7q{cksclscmscnscoscps4ls}6p{17su5tu5qw5rs}ek{5qs5rs}el{17su5tu5os5qw5rs}em{17su5tu5os5qs5rs}en{17su5qs5rs}eo{5qs5rs}ep{17su5tu5os5qw5rs}es{5qs}et{17su5tu5qw5rs}eu{17su5tu5qs5rs}ev{5qs}6z{17sv5tv5os5qx5rs}fm{5os5qt5rs}fn{17sv5tv5os5qx5rs}fo{17sv5tv5os5qx5rs}fp{5os5qt5rs}fq{5os5qt5rs}7r{ckuclucmucnucoucpu4lu5os}fs{17sv5tv5os5qx5rs}ft{17ss5ts5qs}fu{17sw5tw5qs}fv{17sw5tw5qs}fw{17ss5ts5qs}fz{ckuclucmucnucoucpu4lu5os5rs}}}"),
					"Helvetica-Oblique": c("{'widths'{k3p2q4mcx1w201n3r201o6o201s1q201t1q201u1q201w2l201x2l201y2l2k1w2l1w202m2n2n3r2o3r2p5t202q6o2r1n2s2l2t2l2u2r2v3u2w1w2x2l2y1w2z1w3k3r3l3r3m3r3n3r3o3r3p3r3q3r3r3r3s3r203t2l203u2l3v1w3w3u3x3u3y3u3z3r4k6p4l4m4m4m4n4s4o4s4p4m4q3x4r4y4s4s4t1w4u3m4v4m4w3r4x5n4y4s4z4y5k4m5l4y5m4s5n4m5o3x5p4s5q4m5r5y5s4m5t4m5u3x5v1w5w1w5x1w5y2z5z3r6k2l6l3r6m3r6n3m6o3r6p3r6q1w6r3r6s3r6t1q6u1q6v3m6w1q6x5n6y3r6z3r7k3r7l3r7m2l7n3m7o1w7p3r7q3m7r4s7s3m7t3m7u3m7v2l7w1u7x2l7y3u202l3rcl4mal2lam3ran3rao3rap3rar3ras2lat4tau2pav3raw3uay4taz2lbk2sbl3u'fof'6obo2lbp3rbr1wbs2lbu2obv3rbz3xck4m202k3rcm4mcn4mco4mcp4mcq6ocr4scs4mct4mcu4mcv4mcw1w2m2ncy1wcz1wdl4sdm4ydn4ydo4ydp4ydq4yds4ydt4sdu4sdv4sdw4sdz3xek3rel3rem3ren3reo3rep3req5ter3mes3ret3reu3rev3rew1wex1wey1wez1wfl3rfm3rfn3rfo3rfp3rfq3rfr3ufs3xft3rfu3rfv3rfw3rfz3m203k6o212m6o2dw2l2cq2l3t3r3u1w17s4m19m3r}'kerning'{5q{4wv}cl{4qs5kw5ow5qs17sv5tv}201t{2wu4w1k2yu}201x{2wu4wy2yu}17s{2ktclucmucnu4otcpu4lu4wycoucku}2w{7qs4qz5k1m17sy5ow5qx5rsfsu5ty7tufzu}2x{17sy5ty5oy5qs}2y{7qs4qz5k1m17sy5ow5qx5rsfsu5ty7tufzu}'fof'-6o7p{17sv5tv5ow}ck{4qs5kw5ow5qs17sv5tv}4l{4qs5kw5ow5qs17sv5tv}cm{4qs5kw5ow5qs17sv5tv}cn{4qs5kw5ow5qs17sv5tv}co{4qs5kw5ow5qs17sv5tv}cp{4qs5kw5ow5qs17sv5tv}6l{17sy5ty5ow}do{17st5tt}4z{17st5tt}7s{fst}dm{17st5tt}dn{17st5tt}5o{ckwclwcmwcnwcowcpw4lw4wv}dp{17st5tt}dq{17st5tt}7t{5ow}ds{17st5tt}5t{2ktclucmucnu4otcpu4lu4wycoucku}fu{17sv5tv5ow}6p{17sy5ty5ow5qs}ek{17sy5ty5ow}el{17sy5ty5ow}em{17sy5ty5ow}en{5ty}eo{17sy5ty5ow}ep{17sy5ty5ow}es{17sy5ty5qs}et{17sy5ty5ow5qs}eu{17sy5ty5ow5qs}ev{17sy5ty5ow5qs}6z{17sy5ty5ow5qs}fm{17sy5ty5ow5qs}fn{17sy5ty5ow5qs}fo{17sy5ty5ow5qs}fp{17sy5ty5qs}fq{17sy5ty5ow5qs}7r{5ow}fs{17sy5ty5ow5qs}ft{17sv5tv5ow}7m{5ow}fv{17sv5tv5ow}fw{17sv5tv5ow}}}")
				}
			};
		e.events.push(["addFont", function(m) {
			var y = m.font,
				d = v.Unicode[y.postScriptName];
			d && (y.metadata.Unicode = {}, y.metadata.Unicode.widths = d.widths, y.metadata.Unicode.kerning = d.kerning);
			var I = p.Unicode[y.postScriptName];
			I && (y.metadata.Unicode.encoding = I, y.encoding = I.codePages[0])
		}])
	}(Gt.API),
	function(e) {
		var t = function(n) {
			for (var i = n.length, o = new Uint8Array(i), a = 0; a < i; a++) o[a] = n.charCodeAt(a);
			return o
		};
		e.API.events.push(["addFont", function(n) {
			var i = void 0,
				o = n.font,
				a = n.instance;
			if (!o.isStandardFont) {
				if (a === void 0) throw new Error("Font does not exist in vFS, import fonts or remove declaration doc.addFont('" + o.postScriptName + "').");
				if (typeof(i = a.existsFileInVFS(o.postScriptName) === !1 ? a.loadFile(o.postScriptName) : a.getFileFromVFS(o.postScriptName)) != "string") throw new Error("Font is not stored as string-data in vFS, import fonts or remove declaration doc.addFont('" + o.postScriptName + "').");
				(function(u, c) {
					c = /^\x00\x01\x00\x00/.test(c) ? t(c) : t(Ea(c)), u.metadata = e.API.TTFFont.open(c), u.metadata.Unicode = u.metadata.Unicode || {
						encoding: {},
						kerning: {},
						widths: []
					}, u.metadata.glyIdsUsed = [0]
				})(o, i)
			}
		}])
	}(Gt),
	function(e) {
		function t() {
			return (Yt.canvg ? Promise.resolve(Yt.canvg) : Zs(() => import("./bo7z9uj7u3knpwgt.js"), __vite__mapDeps([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]))).catch(function(n) {
				return Promise.reject(new Error("Could not load canvg: " + n))
			}).then(function(n) {
				return n.default ? n.default : n
			})
		}
		Gt.API.addSvgAsImage = function(n, i, o, a, u, c, f, p) {
			if (isNaN(i) || isNaN(o)) throw Ne.error("jsPDF.addSvgAsImage: Invalid coordinates", arguments), new Error("Invalid coordinates passed to jsPDF.addSvgAsImage");
			if (isNaN(a) || isNaN(u)) throw Ne.error("jsPDF.addSvgAsImage: Invalid measurements", arguments), new Error("Invalid measurements (width and/or height) passed to jsPDF.addSvgAsImage");
			var v = document.createElement("canvas");
			v.width = a, v.height = u;
			var m = v.getContext("2d");
			m.fillStyle = "#fff", m.fillRect(0, 0, v.width, v.height);
			var y = {
					ignoreMouse: !0,
					ignoreAnimation: !0,
					ignoreDimensions: !0
				},
				d = this;
			return t().then(function(I) {
				return I.fromString(m, n, y)
			}, function() {
				return Promise.reject(new Error("Could not load canvg."))
			}).then(function(I) {
				return I.render(y)
			}).then(function() {
				d.addImage(v.toDataURL("image/jpeg", 1), i, o, a, u, f, p)
			})
		}
	}(), Gt.API.putTotalPages = function(e) {
		var t, n = 0;
		parseInt(this.internal.getFont().id.substr(1), 10) < 15 ? (t = new RegExp(e, "g"), n = this.internal.getNumberOfPages()) : (t = new RegExp(this.pdfEscape16(e, this.internal.getFont()), "g"), n = this.pdfEscape16(this.internal.getNumberOfPages() + "", this.internal.getFont()));
		for (var i = 1; i <= this.internal.getNumberOfPages(); i++)
			for (var o = 0; o < this.internal.pages[i].length; o++) this.internal.pages[i][o] = this.internal.pages[i][o].replace(t, n);
		return this
	}, Gt.API.viewerPreferences = function(e, t) {
		var n;
		e = e || {}, t = t || !1;
		var i, o, a, u = {
				HideToolbar: {
					defaultValue: !1,
					value: !1,
					type: "boolean",
					explicitSet: !1,
					valueSet: [!0, !1],
					pdfVersion: 1.3
				},
				HideMenubar: {
					defaultValue: !1,
					value: !1,
					type: "boolean",
					explicitSet: !1,
					valueSet: [!0, !1],
					pdfVersion: 1.3
				},
				HideWindowUI: {
					defaultValue: !1,
					value: !1,
					type: "boolean",
					explicitSet: !1,
					valueSet: [!0, !1],
					pdfVersion: 1.3
				},
				FitWindow: {
					defaultValue: !1,
					value: !1,
					type: "boolean",
					explicitSet: !1,
					valueSet: [!0, !1],
					pdfVersion: 1.3
				},
				CenterWindow: {
					defaultValue: !1,
					value: !1,
					type: "boolean",
					explicitSet: !1,
					valueSet: [!0, !1],
					pdfVersion: 1.3
				},
				DisplayDocTitle: {
					defaultValue: !1,
					value: !1,
					type: "boolean",
					explicitSet: !1,
					valueSet: [!0, !1],
					pdfVersion: 1.4
				},
				NonFullScreenPageMode: {
					defaultValue: "UseNone",
					value: "UseNone",
					type: "name",
					explicitSet: !1,
					valueSet: ["UseNone", "UseOutlines", "UseThumbs", "UseOC"],
					pdfVersion: 1.3
				},
				Direction: {
					defaultValue: "L2R",
					value: "L2R",
					type: "name",
					explicitSet: !1,
					valueSet: ["L2R", "R2L"],
					pdfVersion: 1.3
				},
				ViewArea: {
					defaultValue: "CropBox",
					value: "CropBox",
					type: "name",
					explicitSet: !1,
					valueSet: ["MediaBox", "CropBox", "TrimBox", "BleedBox", "ArtBox"],
					pdfVersion: 1.4
				},
				ViewClip: {
					defaultValue: "CropBox",
					value: "CropBox",
					type: "name",
					explicitSet: !1,
					valueSet: ["MediaBox", "CropBox", "TrimBox", "BleedBox", "ArtBox"],
					pdfVersion: 1.4
				},
				PrintArea: {
					defaultValue: "CropBox",
					value: "CropBox",
					type: "name",
					explicitSet: !1,
					valueSet: ["MediaBox", "CropBox", "TrimBox", "BleedBox", "ArtBox"],
					pdfVersion: 1.4
				},
				PrintClip: {
					defaultValue: "CropBox",
					value: "CropBox",
					type: "name",
					explicitSet: !1,
					valueSet: ["MediaBox", "CropBox", "TrimBox", "BleedBox", "ArtBox"],
					pdfVersion: 1.4
				},
				PrintScaling: {
					defaultValue: "AppDefault",
					value: "AppDefault",
					type: "name",
					explicitSet: !1,
					valueSet: ["AppDefault", "None"],
					pdfVersion: 1.6
				},
				Duplex: {
					defaultValue: "",
					value: "none",
					type: "name",
					explicitSet: !1,
					valueSet: ["Simplex", "DuplexFlipShortEdge", "DuplexFlipLongEdge", "none"],
					pdfVersion: 1.7
				},
				PickTrayByPDFSize: {
					defaultValue: !1,
					value: !1,
					type: "boolean",
					explicitSet: !1,
					valueSet: [!0, !1],
					pdfVersion: 1.7
				},
				PrintPageRange: {
					defaultValue: "",
					value: "",
					type: "array",
					explicitSet: !1,
					valueSet: null,
					pdfVersion: 1.7
				},
				NumCopies: {
					defaultValue: 1,
					value: 1,
					type: "integer",
					explicitSet: !1,
					valueSet: null,
					pdfVersion: 1.7
				}
			},
			c = Object.keys(u),
			f = [],
			p = 0,
			v = 0,
			m = 0;

		function y(I, A) {
			var F, _ = !1;
			for (F = 0; F < I.length; F += 1) I[F] === A && (_ = !0);
			return _
		}
		if (this.internal.viewerpreferences === void 0 && (this.internal.viewerpreferences = {}, this.internal.viewerpreferences.configuration = JSON.parse(JSON.stringify(u)), this.internal.viewerpreferences.isSubscribed = !1), n = this.internal.viewerpreferences.configuration, e === "reset" || t === !0) {
			var d = c.length;
			for (m = 0; m < d; m += 1) n[c[m]].value = n[c[m]].defaultValue, n[c[m]].explicitSet = !1
		}
		if (be(e) === "object") {
			for (o in e)
				if (a = e[o], y(c, o) && a !== void 0) {
					if (n[o].type === "boolean" && typeof a == "boolean") n[o].value = a;
					else if (n[o].type === "name" && y(n[o].valueSet, a)) n[o].value = a;
					else if (n[o].type === "integer" && Number.isInteger(a)) n[o].value = a;
					else if (n[o].type === "array") {
						for (p = 0; p < a.length; p += 1)
							if (i = !0, a[p].length === 1 && typeof a[p][0] == "number") f.push(String(a[p] - 1));
							else if (a[p].length > 1) {
							for (v = 0; v < a[p].length; v += 1) typeof a[p][v] != "number" && (i = !1);
							i === !0 && f.push([a[p][0] - 1, a[p][1] - 1].join(" "))
						}
						n[o].value = "[" + f.join(" ") + "]"
					} else n[o].value = n[o].defaultValue;
					n[o].explicitSet = !0
				}
		}
		return this.internal.viewerpreferences.isSubscribed === !1 && (this.internal.events.subscribe("putCatalog", function() {
			var I, A = [];
			for (I in n) n[I].explicitSet === !0 && (n[I].type === "name" ? A.push("/" + I + " /" + n[I].value) : A.push("/" + I + " " + n[I].value));
			A.length !== 0 && this.internal.write(`/ViewerPreferences
<<
` + A.join(`
`) + `
>>`)
		}), this.internal.viewerpreferences.isSubscribed = !0), this.internal.viewerpreferences.configuration = n, this
	},
	function(e) {
		var t = function() {
				var i = '<rdf:RDF xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#"><rdf:Description rdf:about="" xmlns:jspdf="' + this.internal.__metadata__.namespaceuri + '"><jspdf:metadata>',
					o = unescape(encodeURIComponent('<x:xmpmeta xmlns:x="adobe:ns:meta/">')),
					a = unescape(encodeURIComponent(i)),
					u = unescape(encodeURIComponent(this.internal.__metadata__.metadata)),
					c = unescape(encodeURIComponent("</jspdf:metadata></rdf:Description></rdf:RDF>")),
					f = unescape(encodeURIComponent("</x:xmpmeta>")),
					p = a.length + u.length + c.length + o.length + f.length;
				this.internal.__metadata__.metadata_object_number = this.internal.newObject(), this.internal.write("<< /Type /Metadata /Subtype /XML /Length " + p + " >>"), this.internal.write("stream"), this.internal.write(o + a + u + c + f), this.internal.write("endstream"), this.internal.write("endobj")
			},
			n = function() {
				this.internal.__metadata__.metadata_object_number && this.internal.write("/Metadata " + this.internal.__metadata__.metadata_object_number + " 0 R")
			};
		e.addMetadata = function(i, o) {
			return this.internal.__metadata__ === void 0 && (this.internal.__metadata__ = {
				metadata: i,
				namespaceuri: o || "http://jspdf.default.namespaceuri/"
			}, this.internal.events.subscribe("putCatalog", n), this.internal.events.subscribe("postPutResources", t)), this
		}
	}(Gt.API),
	function(e) {
		var t = e.API,
			n = t.pdfEscape16 = function(a, u) {
				for (var c, f = u.metadata.Unicode.widths, p = ["", "0", "00", "000", "0000"], v = [""], m = 0, y = a.length; m < y; ++m) {
					if (c = u.metadata.characterToGlyph(a.charCodeAt(m)), u.metadata.glyIdsUsed.push(c), u.metadata.toUnicode[c] = a.charCodeAt(m), f.indexOf(c) == -1 && (f.push(c), f.push([parseInt(u.metadata.widthOfGlyph(c), 10)])), c == "0") return v.join("");
					c = c.toString(16), v.push(p[4 - c.length], c)
				}
				return v.join("")
			},
			i = function(a) {
				var u, c, f, p, v, m, y;
				for (v = `/CIDInit /ProcSet findresource begin
12 dict begin
begincmap
/CIDSystemInfo <<
  /Registry (Adobe)
  /Ordering (UCS)
  /Supplement 0
>> def
/CMapName /Adobe-Identity-UCS def
/CMapType 2 def
1 begincodespacerange
<0000><ffff>
endcodespacerange`, f = [], m = 0, y = (c = Object.keys(a).sort(function(d, I) {
						return d - I
					})).length; m < y; m++) u = c[m], f.length >= 100 && (v += `
` + f.length + ` beginbfchar
` + f.join(`
`) + `
endbfchar`, f = []), a[u] !== void 0 && a[u] !== null && typeof a[u].toString == "function" && (p = ("0000" + a[u].toString(16)).slice(-4), u = ("0000" + (+u).toString(16)).slice(-4), f.push("<" + u + "><" + p + ">"));
				return f.length && (v += `
` + f.length + ` beginbfchar
` + f.join(`
`) + `
endbfchar
`), v += `endcmap
CMapName currentdict /CMap defineresource pop
end
end`
			};
		t.events.push(["putFont", function(a) {
			(function(u) {
				var c = u.font,
					f = u.out,
					p = u.newObject,
					v = u.putStream;
				if (c.metadata instanceof e.API.TTFFont && c.encoding === "Identity-H") {
					for (var m = c.metadata.Unicode.widths, y = c.metadata.subset.encode(c.metadata.glyIdsUsed, 1), d = "", I = 0; I < y.length; I++) d += String.fromCharCode(y[I]);
					var A = p();
					v({
						data: d,
						addLength1: !0,
						objectId: A
					}), f("endobj");
					var F = p();
					v({
						data: i(c.metadata.toUnicode),
						addLength1: !0,
						objectId: F
					}), f("endobj");
					var _ = p();
					f("<<"), f("/Type /FontDescriptor"), f("/FontName /" + Ui(c.fontName)), f("/FontFile2 " + A + " 0 R"), f("/FontBBox " + e.API.PDFObject.convert(c.metadata.bbox)), f("/Flags " + c.metadata.flags), f("/StemV " + c.metadata.stemV), f("/ItalicAngle " + c.metadata.italicAngle), f("/Ascent " + c.metadata.ascender), f("/Descent " + c.metadata.decender), f("/CapHeight " + c.metadata.capHeight), f(">>"), f("endobj");
					var j = p();
					f("<<"), f("/Type /Font"), f("/BaseFont /" + Ui(c.fontName)), f("/FontDescriptor " + _ + " 0 R"), f("/W " + e.API.PDFObject.convert(m)), f("/CIDToGIDMap /Identity"), f("/DW 1000"), f("/Subtype /CIDFontType2"), f("/CIDSystemInfo"), f("<<"), f("/Supplement 0"), f("/Registry (Adobe)"), f("/Ordering (" + c.encoding + ")"), f(">>"), f(">>"), f("endobj"), c.objectNumber = p(), f("<<"), f("/Type /Font"), f("/Subtype /Type0"), f("/ToUnicode " + F + " 0 R"), f("/BaseFont /" + Ui(c.fontName)), f("/Encoding /" + c.encoding), f("/DescendantFonts [" + j + " 0 R]"), f(">>"), f("endobj"), c.isAlreadyPutted = !0
				}
			})(a)
		}]), t.events.push(["putFont", function(a) {
			(function(u) {
				var c = u.font,
					f = u.out,
					p = u.newObject,
					v = u.putStream;
				if (c.metadata instanceof e.API.TTFFont && c.encoding === "WinAnsiEncoding") {
					for (var m = c.metadata.rawData, y = "", d = 0; d < m.length; d++) y += String.fromCharCode(m[d]);
					var I = p();
					v({
						data: y,
						addLength1: !0,
						objectId: I
					}), f("endobj");
					var A = p();
					v({
						data: i(c.metadata.toUnicode),
						addLength1: !0,
						objectId: A
					}), f("endobj");
					var F = p();
					f("<<"), f("/Descent " + c.metadata.decender), f("/CapHeight " + c.metadata.capHeight), f("/StemV " + c.metadata.stemV), f("/Type /FontDescriptor"), f("/FontFile2 " + I + " 0 R"), f("/Flags 96"), f("/FontBBox " + e.API.PDFObject.convert(c.metadata.bbox)), f("/FontName /" + Ui(c.fontName)), f("/ItalicAngle " + c.metadata.italicAngle), f("/Ascent " + c.metadata.ascender), f(">>"), f("endobj"), c.objectNumber = p();
					for (var _ = 0; _ < c.metadata.hmtx.widths.length; _++) c.metadata.hmtx.widths[_] = parseInt(c.metadata.hmtx.widths[_] * (1e3 / c.metadata.head.unitsPerEm));
					f("<</Subtype/TrueType/Type/Font/ToUnicode " + A + " 0 R/BaseFont/" + Ui(c.fontName) + "/FontDescriptor " + F + " 0 R/Encoding/" + c.encoding + " /FirstChar 29 /LastChar 255 /Widths " + e.API.PDFObject.convert(c.metadata.hmtx.widths) + ">>"), f("endobj"), c.isAlreadyPutted = !0
				}
			})(a)
		}]);
		var o = function(a) {
			var u, c = a.text || "",
				f = a.x,
				p = a.y,
				v = a.options || {},
				m = a.mutex || {},
				y = m.pdfEscape,
				d = m.activeFontKey,
				I = m.fonts,
				A = d,
				F = "",
				_ = 0,
				j = "",
				z = I[A].encoding;
			if (I[A].encoding !== "Identity-H") return {
				text: c,
				x: f,
				y: p,
				options: v,
				mutex: m
			};
			for (j = c, A = d, Array.isArray(c) && (j = c[0]), _ = 0; _ < j.length; _ += 1) I[A].metadata.hasOwnProperty("cmap") && (u = I[A].metadata.cmap.unicode.codeMap[j[_].charCodeAt(0)]), u || j[_].charCodeAt(0) < 256 && I[A].metadata.hasOwnProperty("Unicode") ? F += j[_] : F += "";
			var $ = "";
			return parseInt(A.slice(1)) < 14 || z === "WinAnsiEncoding" ? $ = y(F, A).split("").map(function(rt) {
				return rt.charCodeAt(0).toString(16)
			}).join("") : z === "Identity-H" && ($ = n(F, I[A])), m.isHex = !0, {
				text: $,
				x: f,
				y: p,
				options: v,
				mutex: m
			}
		};
		t.events.push(["postProcessText", function(a) {
			var u = a.text || "",
				c = [],
				f = {
					text: u,
					x: a.x,
					y: a.y,
					options: a.options,
					mutex: a.mutex
				};
			if (Array.isArray(u)) {
				var p = 0;
				for (p = 0; p < u.length; p += 1) Array.isArray(u[p]) && u[p].length === 3 ? c.push([o(Object.assign({}, f, {
					text: u[p][0]
				})).text, u[p][1], u[p][2]]) : c.push(o(Object.assign({}, f, {
					text: u[p]
				})).text);
				a.text = c
			} else a.text = o(Object.assign({}, f, {
				text: u
			})).text
		}])
	}(Gt),
	function(e) {
		var t = function() {
			return this.internal.vFS === void 0 && (this.internal.vFS = {}), !0
		};
		e.existsFileInVFS = function(n) {
			return t.call(this), this.internal.vFS[n] !== void 0
		}, e.addFileToVFS = function(n, i) {
			return t.call(this), this.internal.vFS[n] = i, this
		}, e.getFileFromVFS = function(n) {
			return t.call(this), this.internal.vFS[n] !== void 0 ? this.internal.vFS[n] : null
		}
	}(Gt.API),
	function(e) {
		e.__bidiEngine__ = e.prototype.__bidiEngine__ = function(i) {
			var o, a, u, c, f, p, v, m = t,
				y = [
					[0, 3, 0, 1, 0, 0, 0],
					[0, 3, 0, 1, 2, 2, 0],
					[0, 3, 0, 17, 2, 0, 1],
					[0, 3, 5, 5, 4, 1, 0],
					[0, 3, 21, 21, 4, 0, 1],
					[0, 3, 5, 5, 4, 2, 0]
				],
				d = [
					[2, 0, 1, 1, 0, 1, 0],
					[2, 0, 1, 1, 0, 2, 0],
					[2, 0, 2, 1, 3, 2, 0],
					[2, 0, 2, 33, 3, 1, 1]
				],
				I = {
					L: 0,
					R: 1,
					EN: 2,
					AN: 3,
					N: 4,
					B: 5,
					S: 6
				},
				A = {
					0: 0,
					5: 1,
					6: 2,
					7: 3,
					32: 4,
					251: 5,
					254: 6,
					255: 7
				},
				F = ["(", ")", "(", "<", ">", "<", "[", "]", "[", "{", "}", "{", "«", "»", "«", "‹", "›", "‹", "⁅", "⁆", "⁅", "⁽", "⁾", "⁽", "₍", "₎", "₍", "≤", "≥", "≤", "〈", "〉", "〈", "﹙", "﹚", "﹙", "﹛", "﹜", "﹛", "﹝", "﹞", "﹝", "﹤", "﹥", "﹤"],
				_ = new RegExp(/^([1-4|9]|1[0-9]|2[0-9]|3[0168]|4[04589]|5[012]|7[78]|159|16[0-9]|17[0-2]|21[569]|22[03489]|250)$/),
				j = !1,
				z = 0;
			this.__bidiEngine__ = {};
			var $ = function(P) {
					var C = P.charCodeAt(),
						q = C >> 8,
						T = A[q];
					return T !== void 0 ? m[256 * T + (255 & C)] : q === 252 || q === 253 ? "AL" : _.test(q) ? "L" : q === 8 ? "R" : "N"
				},
				rt = function(P) {
					for (var C, q = 0; q < P.length; q++) {
						if ((C = $(P.charAt(q))) === "L") return !1;
						if (C === "R") return !0
					}
					return !1
				},
				lt = function(P, C, q, T) {
					var ct, st, ht, Q, dt = C[T];
					switch (dt) {
						case "L":
						case "R":
							j = !1;
							break;
						case "N":
						case "AN":
							break;
						case "EN":
							j && (dt = "AN");
							break;
						case "AL":
							j = !0, dt = "R";
							break;
						case "WS":
							dt = "N";
							break;
						case "CS":
							T < 1 || T + 1 >= C.length || (ct = q[T - 1]) !== "EN" && ct !== "AN" || (st = C[T + 1]) !== "EN" && st !== "AN" ? dt = "N" : j && (st = "AN"), dt = st === ct ? st : "N";
							break;
						case "ES":
							dt = (ct = T > 0 ? q[T - 1] : "B") === "EN" && T + 1 < C.length && C[T + 1] === "EN" ? "EN" : "N";
							break;
						case "ET":
							if (T > 0 && q[T - 1] === "EN") {
								dt = "EN";
								break
							}
							if (j) {
								dt = "N";
								break
							}
							for (ht = T + 1, Q = C.length; ht < Q && C[ht] === "ET";) ht++;
							dt = ht < Q && C[ht] === "EN" ? "EN" : "N";
							break;
						case "NSM":
							if (u && !c) {
								for (Q = C.length, ht = T + 1; ht < Q && C[ht] === "NSM";) ht++;
								if (ht < Q) {
									var ut = P[T],
										_t = ut >= 1425 && ut <= 2303 || ut === 64286;
									if (ct = C[ht], _t && (ct === "R" || ct === "AL")) {
										dt = "R";
										break
									}
								}
							}
							dt = T < 1 || (ct = C[T - 1]) === "B" ? "N" : q[T - 1];
							break;
						case "B":
							j = !1, o = !0, dt = z;
							break;
						case "S":
							a = !0, dt = "N";
							break;
						case "LRE":
						case "RLE":
						case "LRO":
						case "RLO":
						case "PDF":
							j = !1;
							break;
						case "BN":
							dt = "N"
					}
					return dt
				},
				Y = function(P, C, q) {
					var T = P.split("");
					return q && R(T, q, {
						hiLevel: z
					}), T.reverse(), C && C.reverse(), T.join("")
				},
				R = function(P, C, q) {
					var T, ct, st, ht, Q, dt = -1,
						ut = P.length,
						_t = 0,
						L = [],
						M = z ? d : y,
						O = [];
					for (j = !1, o = !1, a = !1, ct = 0; ct < ut; ct++) O[ct] = $(P[ct]);
					for (st = 0; st < ut; st++) {
						if (Q = _t, L[st] = lt(P, O, L, st), T = 240 & (_t = M[Q][I[L[st]]]), _t &= 15, C[st] = ht = M[_t][5], T > 0)
							if (T === 16) {
								for (ct = dt; ct < st; ct++) C[ct] = 1;
								dt = -1
							} else dt = -1;
						if (M[_t][6]) dt === -1 && (dt = st);
						else if (dt > -1) {
							for (ct = dt; ct < st; ct++) C[ct] = ht;
							dt = -1
						}
						O[st] === "B" && (C[st] = 0), q.hiLevel |= ht
					}
					a && function(U, V, nt) {
						for (var at = 0; at < nt; at++)
							if (U[at] === "S") {
								V[at] = z;
								for (var it = at - 1; it >= 0 && U[it] === "WS"; it--) V[it] = z
							}
					}(O, C, ut)
				},
				K = function(P, C, q, T, ct) {
					if (!(ct.hiLevel < P)) {
						if (P === 1 && z === 1 && !o) return C.reverse(), void(q && q.reverse());
						for (var st, ht, Q, dt, ut = C.length, _t = 0; _t < ut;) {
							if (T[_t] >= P) {
								for (Q = _t + 1; Q < ut && T[Q] >= P;) Q++;
								for (dt = _t, ht = Q - 1; dt < ht; dt++, ht--) st = C[dt], C[dt] = C[ht], C[ht] = st, q && (st = q[dt], q[dt] = q[ht], q[ht] = st);
								_t = Q
							}
							_t++
						}
					}
				},
				ot = function(P, C, q) {
					var T = P.split(""),
						ct = {
							hiLevel: z
						};
					return q || (q = []), R(T, q, ct),
						function(st, ht, Q) {
							if (Q.hiLevel !== 0 && v)
								for (var dt, ut = 0; ut < st.length; ut++) ht[ut] === 1 && (dt = F.indexOf(st[ut])) >= 0 && (st[ut] = F[dt + 1])
						}(T, q, ct), K(2, T, C, q, ct), K(1, T, C, q, ct), T.join("")
				};
			return this.__bidiEngine__.doBidiReorder = function(P, C, q) {
				if (function(ct, st) {
						if (st)
							for (var ht = 0; ht < ct.length; ht++) st[ht] = ht;
						c === void 0 && (c = rt(ct)), p === void 0 && (p = rt(ct))
					}(P, C), u || !f || p)
					if (u && f && c ^ p) z = c ? 1 : 0, P = Y(P, C, q);
					else if (!u && f && p) z = c ? 1 : 0, P = ot(P, C, q), P = Y(P, C);
				else if (!u || c || f || p) {
					if (u && !f && c ^ p) P = Y(P, C), c ? (z = 0, P = ot(P, C, q)) : (z = 1, P = ot(P, C, q), P = Y(P, C));
					else if (u && c && !f && p) z = 1, P = ot(P, C, q), P = Y(P, C);
					else if (!u && !f && c ^ p) {
						var T = v;
						c ? (z = 1, P = ot(P, C, q), z = 0, v = !1, P = ot(P, C, q), v = T) : (z = 0, P = ot(P, C, q), P = Y(P, C), z = 1, v = !1, P = ot(P, C, q), v = T, P = Y(P, C))
					}
				} else z = 0, P = ot(P, C, q);
				else z = c ? 1 : 0, P = ot(P, C, q);
				return P
			}, this.__bidiEngine__.setOptions = function(P) {
				P && (u = P.isInputVisual, f = P.isOutputVisual, c = P.isInputRtl, p = P.isOutputRtl, v = P.isSymmetricSwapping)
			}, this.__bidiEngine__.setOptions(i), this.__bidiEngine__
		};
		var t = ["BN", "BN", "BN", "BN", "BN", "BN", "BN", "BN", "BN", "S", "B", "S", "WS", "B", "BN", "BN", "BN", "BN", "BN", "BN", "BN", "BN", "BN", "BN", "BN", "BN", "BN", "BN", "B", "B", "B", "S", "WS", "N", "N", "ET", "ET", "ET", "N", "N", "N", "N", "N", "ES", "CS", "ES", "CS", "CS", "EN", "EN", "EN", "EN", "EN", "EN", "EN", "EN", "EN", "EN", "CS", "N", "N", "N", "N", "N", "N", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "N", "N", "N", "N", "N", "N", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "N", "N", "N", "N", "BN", "BN", "BN", "BN", "BN", "BN", "B", "BN", "BN", "BN", "BN", "BN", "BN", "BN", "BN", "BN", "BN", "BN", "BN", "BN", "BN", "BN", "BN", "BN", "BN", "BN", "BN", "BN", "BN", "BN", "BN", "BN", "BN", "CS", "N", "ET", "ET", "ET", "ET", "N", "N", "N", "N", "L", "N", "N", "BN", "N", "N", "ET", "ET", "EN", "EN", "N", "L", "N", "N", "N", "EN", "L", "N", "N", "N", "N", "N", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "N", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "N", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "N", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "N", "N", "L", "L", "L", "L", "L", "L", "L", "N", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "N", "L", "N", "N", "N", "N", "N", "ET", "N", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "R", "NSM", "R", "NSM", "NSM", "R", "NSM", "NSM", "R", "NSM", "N", "N", "N", "N", "N", "N", "N", "N", "R", "R", "R", "R", "R", "R", "R", "R", "R", "R", "R", "R", "R", "R", "R", "R", "R", "R", "R", "R", "R", "R", "R", "R", "R", "R", "R", "N", "N", "N", "N", "N", "R", "R", "R", "R", "R", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "AN", "AN", "AN", "AN", "AN", "AN", "N", "N", "AL", "ET", "ET", "AL", "CS", "AL", "N", "N", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "AL", "AL", "N", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "AN", "AN", "AN", "AN", "AN", "AN", "AN", "AN", "AN", "AN", "ET", "AN", "AN", "AL", "AL", "AL", "NSM", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "AN", "N", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "AL", "AL", "NSM", "NSM", "N", "NSM", "NSM", "NSM", "NSM", "AL", "AL", "EN", "EN", "EN", "EN", "EN", "EN", "EN", "EN", "EN", "EN", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "N", "AL", "AL", "NSM", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "N", "N", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "AL", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "R", "R", "R", "R", "R", "R", "R", "R", "R", "R", "R", "R", "R", "R", "R", "R", "R", "R", "R", "R", "R", "R", "R", "R", "R", "R", "R", "R", "R", "R", "R", "R", "R", "R", "R", "R", "R", "R", "R", "R", "R", "R", "R", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "R", "R", "N", "N", "N", "N", "R", "N", "N", "N", "N", "N", "WS", "WS", "WS", "WS", "WS", "WS", "WS", "WS", "WS", "WS", "WS", "BN", "BN", "BN", "L", "R", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "WS", "B", "LRE", "RLE", "PDF", "LRO", "RLO", "CS", "ET", "ET", "ET", "ET", "ET", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "CS", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "WS", "BN", "BN", "BN", "BN", "BN", "N", "LRI", "RLI", "FSI", "PDI", "BN", "BN", "BN", "BN", "BN", "BN", "EN", "L", "N", "N", "EN", "EN", "EN", "EN", "EN", "EN", "ES", "ES", "N", "N", "N", "L", "EN", "EN", "EN", "EN", "EN", "EN", "EN", "EN", "EN", "EN", "ES", "ES", "N", "N", "N", "N", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "N", "N", "N", "ET", "ET", "ET", "ET", "ET", "ET", "ET", "ET", "ET", "ET", "ET", "ET", "ET", "ET", "ET", "ET", "ET", "ET", "ET", "ET", "ET", "ET", "ET", "ET", "ET", "ET", "ET", "ET", "ET", "ET", "ET", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "L", "L", "L", "L", "L", "L", "L", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "L", "L", "L", "L", "L", "N", "N", "N", "N", "N", "R", "NSM", "R", "R", "R", "R", "R", "R", "R", "R", "R", "R", "ES", "R", "R", "R", "R", "R", "R", "R", "R", "R", "R", "R", "R", "R", "N", "R", "R", "R", "R", "R", "N", "R", "N", "R", "R", "N", "R", "R", "N", "R", "R", "R", "R", "R", "R", "R", "R", "R", "R", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "CS", "N", "CS", "N", "N", "CS", "N", "N", "N", "N", "N", "N", "N", "N", "N", "ET", "N", "N", "ES", "ES", "N", "N", "N", "N", "N", "ET", "ET", "N", "N", "N", "N", "N", "AL", "AL", "AL", "AL", "AL", "N", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "N", "N", "BN", "N", "N", "N", "ET", "ET", "ET", "N", "N", "N", "N", "N", "ES", "CS", "ES", "CS", "CS", "EN", "EN", "EN", "EN", "EN", "EN", "EN", "EN", "EN", "EN", "CS", "N", "N", "N", "N", "N", "N", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "N", "N", "N", "N", "N", "N", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "N", "N", "N", "L", "L", "L", "L", "L", "L", "N", "N", "L", "L", "L", "L", "L", "L", "N", "N", "L", "L", "L", "L", "L", "L", "N", "N", "L", "L", "L", "N", "N", "N", "ET", "ET", "N", "N", "N", "ET", "ET", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N"],
			n = new e.__bidiEngine__({
				isInputVisual: !0
			});
		e.API.events.push(["postProcessText", function(i) {
			var o = i.text;
			i.x, i.y;
			var a = i.options || {};
			i.mutex, a.lang;
			var u = [];
			if (a.isInputVisual = typeof a.isInputVisual != "boolean" || a.isInputVisual, n.setOptions(a), Object.prototype.toString.call(o) === "[object Array]") {
				var c = 0;
				for (u = [], c = 0; c < o.length; c += 1) Object.prototype.toString.call(o[c]) === "[object Array]" ? u.push([n.doBidiReorder(o[c][0]), o[c][1], o[c][2]]) : u.push([n.doBidiReorder(o[c])]);
				i.text = u
			} else i.text = n.doBidiReorder(o);
			n.setOptions({
				isInputVisual: !0
			})
		}])
	}(Gt), Gt.API.TTFFont = function() {
		function e(t) {
			var n;
			if (this.rawData = t, n = this.contents = new Jr(t), this.contents.pos = 4, n.readString(4) === "ttcf") throw new Error("TTCF not supported.");
			n.pos = 0, this.parse(), this.subset = new g1(this), this.registerTTF()
		}
		return e.open = function(t) {
			return new e(t)
		}, e.prototype.parse = function() {
			return this.directory = new e1(this.contents), this.head = new r1(this), this.name = new u1(this), this.cmap = new _c(this), this.toUnicode = {}, this.hhea = new i1(this), this.maxp = new l1(this), this.hmtx = new c1(this), this.post = new o1(this), this.os2 = new a1(this), this.loca = new p1(this), this.glyf = new f1(this), this.ascender = this.os2.exists && this.os2.ascender || this.hhea.ascender, this.decender = this.os2.exists && this.os2.decender || this.hhea.decender, this.lineGap = this.os2.exists && this.os2.lineGap || this.hhea.lineGap, this.bbox = [this.head.xMin, this.head.yMin, this.head.xMax, this.head.yMax]
		}, e.prototype.registerTTF = function() {
			var t, n, i, o, a;
			if (this.scaleFactor = 1e3 / this.head.unitsPerEm, this.bbox = function() {
					var u, c, f, p;
					for (p = [], u = 0, c = (f = this.bbox).length; u < c; u++) t = f[u], p.push(Math.round(t * this.scaleFactor));
					return p
				}.call(this), this.stemV = 0, this.post.exists ? (i = 255 & (o = this.post.italic_angle), (32768 & (n = o >> 16)) != 0 && (n = -(1 + (65535 ^ n))), this.italicAngle = +(n + "." + i)) : this.italicAngle = 0, this.ascender = Math.round(this.ascender * this.scaleFactor), this.decender = Math.round(this.decender * this.scaleFactor), this.lineGap = Math.round(this.lineGap * this.scaleFactor), this.capHeight = this.os2.exists && this.os2.capHeight || this.ascender, this.xHeight = this.os2.exists && this.os2.xHeight || 0, this.familyClass = (this.os2.exists && this.os2.familyClass || 0) >> 8, this.isSerif = (a = this.familyClass) === 1 || a === 2 || a === 3 || a === 4 || a === 5 || a === 7, this.isScript = this.familyClass === 10, this.flags = 0, this.post.isFixedPitch && (this.flags |= 1), this.isSerif && (this.flags |= 2), this.isScript && (this.flags |= 8), this.italicAngle !== 0 && (this.flags |= 64), this.flags |= 32, !this.cmap.unicode) throw new Error("No unicode cmap for font")
		}, e.prototype.characterToGlyph = function(t) {
			var n;
			return ((n = this.cmap.unicode) != null ? n.codeMap[t] : void 0) || 0
		}, e.prototype.widthOfGlyph = function(t) {
			var n;
			return n = 1e3 / this.head.unitsPerEm, this.hmtx.forGlyph(t).advance * n
		}, e.prototype.widthOfString = function(t, n, i) {
			var o, a, u, c;
			for (u = 0, a = 0, c = (t = "" + t).length; 0 <= c ? a < c : a > c; a = 0 <= c ? ++a : --a) o = t.charCodeAt(a), u += this.widthOfGlyph(this.characterToGlyph(o)) + i * (1e3 / n) || 0;
			return u * (n / 1e3)
		}, e.prototype.lineHeight = function(t, n) {
			var i;
			return n == null && (n = !1), i = n ? this.lineGap : 0, (this.ascender + i - this.decender) / 1e3 * t
		}, e
	}();
var ar, Jr = function() {
		function e(t) {
			this.data = t ?? [], this.pos = 0, this.length = this.data.length
		}
		return e.prototype.readByte = function() {
			return this.data[this.pos++]
		}, e.prototype.writeByte = function(t) {
			return this.data[this.pos++] = t
		}, e.prototype.readUInt32 = function() {
			return 16777216 * this.readByte() + (this.readByte() << 16) + (this.readByte() << 8) + this.readByte()
		}, e.prototype.writeUInt32 = function(t) {
			return this.writeByte(t >>> 24 & 255), this.writeByte(t >> 16 & 255), this.writeByte(t >> 8 & 255), this.writeByte(255 & t)
		}, e.prototype.readInt32 = function() {
			var t;
			return (t = this.readUInt32()) >= 2147483648 ? t - 4294967296 : t
		}, e.prototype.writeInt32 = function(t) {
			return t < 0 && (t += 4294967296), this.writeUInt32(t)
		}, e.prototype.readUInt16 = function() {
			return this.readByte() << 8 | this.readByte()
		}, e.prototype.writeUInt16 = function(t) {
			return this.writeByte(t >> 8 & 255), this.writeByte(255 & t)
		}, e.prototype.readInt16 = function() {
			var t;
			return (t = this.readUInt16()) >= 32768 ? t - 65536 : t
		}, e.prototype.writeInt16 = function(t) {
			return t < 0 && (t += 65536), this.writeUInt16(t)
		}, e.prototype.readString = function(t) {
			var n, i;
			for (i = [], n = 0; 0 <= t ? n < t : n > t; n = 0 <= t ? ++n : --n) i[n] = String.fromCharCode(this.readByte());
			return i.join("")
		}, e.prototype.writeString = function(t) {
			var n, i, o;
			for (o = [], n = 0, i = t.length; 0 <= i ? n < i : n > i; n = 0 <= i ? ++n : --n) o.push(this.writeByte(t.charCodeAt(n)));
			return o
		}, e.prototype.readShort = function() {
			return this.readInt16()
		}, e.prototype.writeShort = function(t) {
			return this.writeInt16(t)
		}, e.prototype.readLongLong = function() {
			var t, n, i, o, a, u, c, f;
			return t = this.readByte(), n = this.readByte(), i = this.readByte(), o = this.readByte(), a = this.readByte(), u = this.readByte(), c = this.readByte(), f = this.readByte(), 128 & t ? -1 * (72057594037927940 * (255 ^ t) + 281474976710656 * (255 ^ n) + 1099511627776 * (255 ^ i) + 4294967296 * (255 ^ o) + 16777216 * (255 ^ a) + 65536 * (255 ^ u) + 256 * (255 ^ c) + (255 ^ f) + 1) : 72057594037927940 * t + 281474976710656 * n + 1099511627776 * i + 4294967296 * o + 16777216 * a + 65536 * u + 256 * c + f
		}, e.prototype.writeLongLong = function(t) {
			var n, i;
			return n = Math.floor(t / 4294967296), i = 4294967295 & t, this.writeByte(n >> 24 & 255), this.writeByte(n >> 16 & 255), this.writeByte(n >> 8 & 255), this.writeByte(255 & n), this.writeByte(i >> 24 & 255), this.writeByte(i >> 16 & 255), this.writeByte(i >> 8 & 255), this.writeByte(255 & i)
		}, e.prototype.readInt = function() {
			return this.readInt32()
		}, e.prototype.writeInt = function(t) {
			return this.writeInt32(t)
		}, e.prototype.read = function(t) {
			var n, i;
			for (n = [], i = 0; 0 <= t ? i < t : i > t; i = 0 <= t ? ++i : --i) n.push(this.readByte());
			return n
		}, e.prototype.write = function(t) {
			var n, i, o, a;
			for (a = [], i = 0, o = t.length; i < o; i++) n = t[i], a.push(this.writeByte(n));
			return a
		}, e
	}(),
	e1 = function() {
		var e;

		function t(n) {
			var i, o, a;
			for (this.scalarType = n.readInt(), this.tableCount = n.readShort(), this.searchRange = n.readShort(), this.entrySelector = n.readShort(), this.rangeShift = n.readShort(), this.tables = {}, o = 0, a = this.tableCount; 0 <= a ? o < a : o > a; o = 0 <= a ? ++o : --o) i = {
				tag: n.readString(4),
				checksum: n.readInt(),
				offset: n.readInt(),
				length: n.readInt()
			}, this.tables[i.tag] = i
		}
		return t.prototype.encode = function(n) {
			var i, o, a, u, c, f, p, v, m, y, d, I, A;
			for (A in d = Object.keys(n).length, f = Math.log(2), m = 16 * Math.floor(Math.log(d) / f), u = Math.floor(m / f), v = 16 * d - m, (o = new Jr).writeInt(this.scalarType), o.writeShort(d), o.writeShort(m), o.writeShort(u), o.writeShort(v), a = 16 * d, p = o.pos + a, c = null, I = [], n)
				for (y = n[A], o.writeString(A), o.writeInt(e(y)), o.writeInt(p), o.writeInt(y.length), I = I.concat(y), A === "head" && (c = p), p += y.length; p % 4;) I.push(0), p++;
			return o.write(I), i = 2981146554 - e(o.data), o.pos = c + 8, o.writeUInt32(i), o.data
		}, e = function(n) {
			var i, o, a, u;
			for (n = Pc.call(n); n.length % 4;) n.push(0);
			for (a = new Jr(n), o = 0, i = 0, u = n.length; i < u; i = i += 4) o += a.readUInt32();
			return 4294967295 & o
		}, t
	}(),
	n1 = {}.hasOwnProperty,
	gr = function(e, t) {
		for (var n in t) n1.call(t, n) && (e[n] = t[n]);

		function i() {
			this.constructor = e
		}
		return i.prototype = t.prototype, e.prototype = new i, e.__super__ = t.prototype, e
	};
ar = function() {
	function e(t) {
		var n;
		this.file = t, n = this.file.directory.tables[this.tag], this.exists = !!n, n && (this.offset = n.offset, this.length = n.length, this.parse(this.file.contents))
	}
	return e.prototype.parse = function() {}, e.prototype.encode = function() {}, e.prototype.raw = function() {
		return this.exists ? (this.file.contents.pos = this.offset, this.file.contents.read(this.length)) : null
	}, e
}();
var r1 = function(e) {
		function t() {
			return t.__super__.constructor.apply(this, arguments)
		}
		return gr(t, ar), t.prototype.tag = "head", t.prototype.parse = function(n) {
			return n.pos = this.offset, this.version = n.readInt(), this.revision = n.readInt(), this.checkSumAdjustment = n.readInt(), this.magicNumber = n.readInt(), this.flags = n.readShort(), this.unitsPerEm = n.readShort(), this.created = n.readLongLong(), this.modified = n.readLongLong(), this.xMin = n.readShort(), this.yMin = n.readShort(), this.xMax = n.readShort(), this.yMax = n.readShort(), this.macStyle = n.readShort(), this.lowestRecPPEM = n.readShort(), this.fontDirectionHint = n.readShort(), this.indexToLocFormat = n.readShort(), this.glyphDataFormat = n.readShort()
		}, t.prototype.encode = function(n) {
			var i;
			return (i = new Jr).writeInt(this.version), i.writeInt(this.revision), i.writeInt(this.checkSumAdjustment), i.writeInt(this.magicNumber), i.writeShort(this.flags), i.writeShort(this.unitsPerEm), i.writeLongLong(this.created), i.writeLongLong(this.modified), i.writeShort(this.xMin), i.writeShort(this.yMin), i.writeShort(this.xMax), i.writeShort(this.yMax), i.writeShort(this.macStyle), i.writeShort(this.lowestRecPPEM), i.writeShort(this.fontDirectionHint), i.writeShort(n), i.writeShort(this.glyphDataFormat), i.data
		}, t
	}(),
	Tl = function() {
		function e(t, n) {
			var i, o, a, u, c, f, p, v, m, y, d, I, A, F, _, j, z;
			switch (this.platformID = t.readUInt16(), this.encodingID = t.readShort(), this.offset = n + t.readInt(), m = t.pos, t.pos = this.offset, this.format = t.readUInt16(), this.length = t.readUInt16(), this.language = t.readUInt16(), this.isUnicode = this.platformID === 3 && this.encodingID === 1 && this.format === 4 || this.platformID === 0 && this.format === 4, this.codeMap = {}, this.format) {
				case 0:
					for (f = 0; f < 256; ++f) this.codeMap[f] = t.readByte();
					break;
				case 4:
					for (d = t.readUInt16(), y = d / 2, t.pos += 6, a = function() {
							var $, rt;
							for (rt = [], f = $ = 0; 0 <= y ? $ < y : $ > y; f = 0 <= y ? ++$ : --$) rt.push(t.readUInt16());
							return rt
						}(), t.pos += 2, A = function() {
							var $, rt;
							for (rt = [], f = $ = 0; 0 <= y ? $ < y : $ > y; f = 0 <= y ? ++$ : --$) rt.push(t.readUInt16());
							return rt
						}(), p = function() {
							var $, rt;
							for (rt = [], f = $ = 0; 0 <= y ? $ < y : $ > y; f = 0 <= y ? ++$ : --$) rt.push(t.readUInt16());
							return rt
						}(), v = function() {
							var $, rt;
							for (rt = [], f = $ = 0; 0 <= y ? $ < y : $ > y; f = 0 <= y ? ++$ : --$) rt.push(t.readUInt16());
							return rt
						}(), o = (this.length - t.pos + this.offset) / 2, c = function() {
							var $, rt;
							for (rt = [], f = $ = 0; 0 <= o ? $ < o : $ > o; f = 0 <= o ? ++$ : --$) rt.push(t.readUInt16());
							return rt
						}(), f = _ = 0, z = a.length; _ < z; f = ++_)
						for (F = a[f], i = j = I = A[f]; I <= F ? j <= F : j >= F; i = I <= F ? ++j : --j) v[f] === 0 ? u = i + p[f] : (u = c[v[f] / 2 + (i - I) - (y - f)] || 0) !== 0 && (u += p[f]), this.codeMap[i] = 65535 & u
			}
			t.pos = m
		}
		return e.encode = function(t, n) {
			var i, o, a, u, c, f, p, v, m, y, d, I, A, F, _, j, z, $, rt, lt, Y, R, K, ot, P, C, q, T, ct, st, ht, Q, dt, ut, _t, L, M, O, U, V, nt, at, it, xt, Lt, Pt;
			switch (T = new Jr, u = Object.keys(t).sort(function(It, Ut) {
					return It - Ut
				}), n) {
				case "macroman":
					for (A = 0, F = function() {
							var It = [];
							for (I = 0; I < 256; ++I) It.push(0);
							return It
						}(), j = {
							0: 0
						}, a = {}, ct = 0, dt = u.length; ct < dt; ct++) j[it = t[o = u[ct]]] == null && (j[it] = ++A), a[o] = {
						old: t[o],
						new: j[t[o]]
					}, F[o] = j[t[o]];
					return T.writeUInt16(1), T.writeUInt16(0), T.writeUInt32(12), T.writeUInt16(0), T.writeUInt16(262), T.writeUInt16(0), T.write(F), {
						charMap: a,
						subtable: T.data,
						maxGlyphID: A + 1
					};
				case "unicode":
					for (C = [], m = [], z = 0, j = {}, i = {}, _ = p = null, st = 0, ut = u.length; st < ut; st++) j[rt = t[o = u[st]]] == null && (j[rt] = ++z), i[o] = {
						old: rt,
						new: j[rt]
					}, c = j[rt] - o, _ != null && c === p || (_ && m.push(_), C.push(o), p = c), _ = o;
					for (_ && m.push(_), m.push(65535), C.push(65535), ot = 2 * (K = C.length), R = 2 * Math.pow(Math.log(K) / Math.LN2, 2), y = Math.log(R / 2) / Math.LN2, Y = 2 * K - R, f = [], lt = [], d = [], I = ht = 0, _t = C.length; ht < _t; I = ++ht) {
						if (P = C[I], v = m[I], P === 65535) {
							f.push(0), lt.push(0);
							break
						}
						if (P - (q = i[P].new) >= 32768)
							for (f.push(0), lt.push(2 * (d.length + K - I)), o = Q = P; P <= v ? Q <= v : Q >= v; o = P <= v ? ++Q : --Q) d.push(i[o].new);
						else f.push(q - P), lt.push(0)
					}
					for (T.writeUInt16(3), T.writeUInt16(1), T.writeUInt32(12), T.writeUInt16(4), T.writeUInt16(16 + 8 * K + 2 * d.length), T.writeUInt16(0), T.writeUInt16(ot), T.writeUInt16(R), T.writeUInt16(y), T.writeUInt16(Y), nt = 0, L = m.length; nt < L; nt++) o = m[nt], T.writeUInt16(o);
					for (T.writeUInt16(0), at = 0, M = C.length; at < M; at++) o = C[at], T.writeUInt16(o);
					for (xt = 0, O = f.length; xt < O; xt++) c = f[xt], T.writeUInt16(c);
					for (Lt = 0, U = lt.length; Lt < U; Lt++) $ = lt[Lt], T.writeUInt16($);
					for (Pt = 0, V = d.length; Pt < V; Pt++) A = d[Pt], T.writeUInt16(A);
					return {
						charMap: i, subtable: T.data, maxGlyphID: z + 1
					}
			}
		}, e
	}(),
	_c = function(e) {
		function t() {
			return t.__super__.constructor.apply(this, arguments)
		}
		return gr(t, ar), t.prototype.tag = "cmap", t.prototype.parse = function(n) {
			var i, o, a;
			for (n.pos = this.offset, this.version = n.readUInt16(), a = n.readUInt16(), this.tables = [], this.unicode = null, o = 0; 0 <= a ? o < a : o > a; o = 0 <= a ? ++o : --o) i = new Tl(n, this.offset), this.tables.push(i), i.isUnicode && this.unicode == null && (this.unicode = i);
			return !0
		}, t.encode = function(n, i) {
			var o, a;
			return i == null && (i = "macroman"), o = Tl.encode(n, i), (a = new Jr).writeUInt16(0), a.writeUInt16(1), o.table = a.data.concat(o.subtable), o
		}, t
	}(),
	i1 = function(e) {
		function t() {
			return t.__super__.constructor.apply(this, arguments)
		}
		return gr(t, ar), t.prototype.tag = "hhea", t.prototype.parse = function(n) {
			return n.pos = this.offset, this.version = n.readInt(), this.ascender = n.readShort(), this.decender = n.readShort(), this.lineGap = n.readShort(), this.advanceWidthMax = n.readShort(), this.minLeftSideBearing = n.readShort(), this.minRightSideBearing = n.readShort(), this.xMaxExtent = n.readShort(), this.caretSlopeRise = n.readShort(), this.caretSlopeRun = n.readShort(), this.caretOffset = n.readShort(), n.pos += 8, this.metricDataFormat = n.readShort(), this.numberOfMetrics = n.readUInt16()
		}, t
	}(),
	a1 = function(e) {
		function t() {
			return t.__super__.constructor.apply(this, arguments)
		}
		return gr(t, ar), t.prototype.tag = "OS/2", t.prototype.parse = function(n) {
			if (n.pos = this.offset, this.version = n.readUInt16(), this.averageCharWidth = n.readShort(), this.weightClass = n.readUInt16(), this.widthClass = n.readUInt16(), this.type = n.readShort(), this.ySubscriptXSize = n.readShort(), this.ySubscriptYSize = n.readShort(), this.ySubscriptXOffset = n.readShort(), this.ySubscriptYOffset = n.readShort(), this.ySuperscriptXSize = n.readShort(), this.ySuperscriptYSize = n.readShort(), this.ySuperscriptXOffset = n.readShort(), this.ySuperscriptYOffset = n.readShort(), this.yStrikeoutSize = n.readShort(), this.yStrikeoutPosition = n.readShort(), this.familyClass = n.readShort(), this.panose = function() {
					var i, o;
					for (o = [], i = 0; i < 10; ++i) o.push(n.readByte());
					return o
				}(), this.charRange = function() {
					var i, o;
					for (o = [], i = 0; i < 4; ++i) o.push(n.readInt());
					return o
				}(), this.vendorID = n.readString(4), this.selection = n.readShort(), this.firstCharIndex = n.readShort(), this.lastCharIndex = n.readShort(), this.version > 0 && (this.ascent = n.readShort(), this.descent = n.readShort(), this.lineGap = n.readShort(), this.winAscent = n.readShort(), this.winDescent = n.readShort(), this.codePageRange = function() {
					var i, o;
					for (o = [], i = 0; i < 2; i = ++i) o.push(n.readInt());
					return o
				}(), this.version > 1)) return this.xHeight = n.readShort(), this.capHeight = n.readShort(), this.defaultChar = n.readShort(), this.breakChar = n.readShort(), this.maxContext = n.readShort()
		}, t
	}(),
	o1 = function(e) {
		function t() {
			return t.__super__.constructor.apply(this, arguments)
		}
		return gr(t, ar), t.prototype.tag = "post", t.prototype.parse = function(n) {
			var i, o, a;
			switch (n.pos = this.offset, this.format = n.readInt(), this.italicAngle = n.readInt(), this.underlinePosition = n.readShort(), this.underlineThickness = n.readShort(), this.isFixedPitch = n.readInt(), this.minMemType42 = n.readInt(), this.maxMemType42 = n.readInt(), this.minMemType1 = n.readInt(), this.maxMemType1 = n.readInt(), this.format) {
				case 65536:
					break;
				case 131072:
					var u;
					for (o = n.readUInt16(), this.glyphNameIndex = [], u = 0; 0 <= o ? u < o : u > o; u = 0 <= o ? ++u : --u) this.glyphNameIndex.push(n.readUInt16());
					for (this.names = [], a = []; n.pos < this.offset + this.length;) i = n.readByte(), a.push(this.names.push(n.readString(i)));
					return a;
				case 151552:
					return o = n.readUInt16(), this.offsets = n.read(o);
				case 196608:
					break;
				case 262144:
					return this.map = function() {
						var c, f, p;
						for (p = [], u = c = 0, f = this.file.maxp.numGlyphs; 0 <= f ? c < f : c > f; u = 0 <= f ? ++c : --c) p.push(n.readUInt32());
						return p
					}.call(this)
			}
		}, t
	}(),
	s1 = function(e, t) {
		this.raw = e, this.length = e.length, this.platformID = t.platformID, this.encodingID = t.encodingID, this.languageID = t.languageID
	},
	u1 = function(e) {
		function t() {
			return t.__super__.constructor.apply(this, arguments)
		}
		return gr(t, ar), t.prototype.tag = "name", t.prototype.parse = function(n) {
			var i, o, a, u, c, f, p, v, m, y, d;
			for (n.pos = this.offset, n.readShort(), i = n.readShort(), f = n.readShort(), o = [], u = 0; 0 <= i ? u < i : u > i; u = 0 <= i ? ++u : --u) o.push({
				platformID: n.readShort(),
				encodingID: n.readShort(),
				languageID: n.readShort(),
				nameID: n.readShort(),
				length: n.readShort(),
				offset: this.offset + f + n.readShort()
			});
			for (p = {}, u = m = 0, y = o.length; m < y; u = ++m) a = o[u], n.pos = a.offset, v = n.readString(a.length), c = new s1(v, a), p[d = a.nameID] == null && (p[d] = []), p[a.nameID].push(c);
			this.strings = p, this.copyright = p[0], this.fontFamily = p[1], this.fontSubfamily = p[2], this.uniqueSubfamily = p[3], this.fontName = p[4], this.version = p[5];
			try {
				this.postscriptName = p[6][0].raw.replace(/[\x00-\x19\x80-\xff]/g, "")
			} catch {
				this.postscriptName = p[4][0].raw.replace(/[\x00-\x19\x80-\xff]/g, "")
			}
			return this.trademark = p[7], this.manufacturer = p[8], this.designer = p[9], this.description = p[10], this.vendorUrl = p[11], this.designerUrl = p[12], this.license = p[13], this.licenseUrl = p[14], this.preferredFamily = p[15], this.preferredSubfamily = p[17], this.compatibleFull = p[18], this.sampleText = p[19]
		}, t
	}(),
	l1 = function(e) {
		function t() {
			return t.__super__.constructor.apply(this, arguments)
		}
		return gr(t, ar), t.prototype.tag = "maxp", t.prototype.parse = function(n) {
			return n.pos = this.offset, this.version = n.readInt(), this.numGlyphs = n.readUInt16(), this.maxPoints = n.readUInt16(), this.maxContours = n.readUInt16(), this.maxCompositePoints = n.readUInt16(), this.maxComponentContours = n.readUInt16(), this.maxZones = n.readUInt16(), this.maxTwilightPoints = n.readUInt16(), this.maxStorage = n.readUInt16(), this.maxFunctionDefs = n.readUInt16(), this.maxInstructionDefs = n.readUInt16(), this.maxStackElements = n.readUInt16(), this.maxSizeOfInstructions = n.readUInt16(), this.maxComponentElements = n.readUInt16(), this.maxComponentDepth = n.readUInt16()
		}, t
	}(),
	c1 = function(e) {
		function t() {
			return t.__super__.constructor.apply(this, arguments)
		}
		return gr(t, ar), t.prototype.tag = "hmtx", t.prototype.parse = function(n) {
			var i, o, a, u, c, f, p;
			for (n.pos = this.offset, this.metrics = [], i = 0, f = this.file.hhea.numberOfMetrics; 0 <= f ? i < f : i > f; i = 0 <= f ? ++i : --i) this.metrics.push({
				advance: n.readUInt16(),
				lsb: n.readInt16()
			});
			for (a = this.file.maxp.numGlyphs - this.file.hhea.numberOfMetrics, this.leftSideBearings = function() {
					var v, m;
					for (m = [], i = v = 0; 0 <= a ? v < a : v > a; i = 0 <= a ? ++v : --v) m.push(n.readInt16());
					return m
				}(), this.widths = function() {
					var v, m, y, d;
					for (d = [], v = 0, m = (y = this.metrics).length; v < m; v++) u = y[v], d.push(u.advance);
					return d
				}.call(this), o = this.widths[this.widths.length - 1], p = [], i = c = 0; 0 <= a ? c < a : c > a; i = 0 <= a ? ++c : --c) p.push(this.widths.push(o));
			return p
		}, t.prototype.forGlyph = function(n) {
			return n in this.metrics ? this.metrics[n] : {
				advance: this.metrics[this.metrics.length - 1].advance,
				lsb: this.leftSideBearings[n - this.metrics.length]
			}
		}, t
	}(),
	Pc = [].slice,
	f1 = function(e) {
		function t() {
			return t.__super__.constructor.apply(this, arguments)
		}
		return gr(t, ar), t.prototype.tag = "glyf", t.prototype.parse = function() {
			return this.cache = {}
		}, t.prototype.glyphFor = function(n) {
			var i, o, a, u, c, f, p, v, m, y;
			return n in this.cache ? this.cache[n] : (u = this.file.loca, i = this.file.contents, o = u.indexOf(n), (a = u.lengthOf(n)) === 0 ? this.cache[n] = null : (i.pos = this.offset + o, c = (f = new Jr(i.read(a))).readShort(), v = f.readShort(), y = f.readShort(), p = f.readShort(), m = f.readShort(), this.cache[n] = c === -1 ? new d1(f, v, y, p, m) : new h1(f, c, v, y, p, m), this.cache[n]))
		}, t.prototype.encode = function(n, i, o) {
			var a, u, c, f, p;
			for (c = [], u = [], f = 0, p = i.length; f < p; f++) a = n[i[f]], u.push(c.length), a && (c = c.concat(a.encode(o)));
			return u.push(c.length), {
				table: c,
				offsets: u
			}
		}, t
	}(),
	h1 = function() {
		function e(t, n, i, o, a, u) {
			this.raw = t, this.numberOfContours = n, this.xMin = i, this.yMin = o, this.xMax = a, this.yMax = u, this.compound = !1
		}
		return e.prototype.encode = function() {
			return this.raw.data
		}, e
	}(),
	d1 = function() {
		function e(t, n, i, o, a) {
			var u, c;
			for (this.raw = t, this.xMin = n, this.yMin = i, this.xMax = o, this.yMax = a, this.compound = !0, this.glyphIDs = [], this.glyphOffsets = [], u = this.raw; c = u.readShort(), this.glyphOffsets.push(u.pos), this.glyphIDs.push(u.readUInt16()), 32 & c;) u.pos += 1 & c ? 4 : 2, 128 & c ? u.pos += 8 : 64 & c ? u.pos += 4 : 8 & c && (u.pos += 2)
		}
		return e.prototype.encode = function() {
			var t, n, i;
			for (n = new Jr(Pc.call(this.raw.data)), t = 0, i = this.glyphIDs.length; t < i; ++t) n.pos = this.glyphOffsets[t];
			return n.data
		}, e
	}(),
	p1 = function(e) {
		function t() {
			return t.__super__.constructor.apply(this, arguments)
		}
		return gr(t, ar), t.prototype.tag = "loca", t.prototype.parse = function(n) {
			var i, o;
			return n.pos = this.offset, i = this.file.head.indexToLocFormat, this.offsets = i === 0 ? function() {
				var a, u;
				for (u = [], o = 0, a = this.length; o < a; o += 2) u.push(2 * n.readUInt16());
				return u
			}.call(this) : function() {
				var a, u;
				for (u = [], o = 0, a = this.length; o < a; o += 4) u.push(n.readUInt32());
				return u
			}.call(this)
		}, t.prototype.indexOf = function(n) {
			return this.offsets[n]
		}, t.prototype.lengthOf = function(n) {
			return this.offsets[n + 1] - this.offsets[n]
		}, t.prototype.encode = function(n, i) {
			for (var o = new Uint32Array(this.offsets.length), a = 0, u = 0, c = 0; c < o.length; ++c)
				if (o[c] = a, u < i.length && i[u] == c) {
					++u, o[c] = a;
					var f = this.offsets[c],
						p = this.offsets[c + 1] - f;
					p > 0 && (a += p)
				} for (var v = new Array(4 * o.length), m = 0; m < o.length; ++m) v[4 * m + 3] = 255 & o[m], v[4 * m + 2] = (65280 & o[m]) >> 8, v[4 * m + 1] = (16711680 & o[m]) >> 16, v[4 * m] = (4278190080 & o[m]) >> 24;
			return v
		}, t
	}(),
	g1 = function() {
		function e(t) {
			this.font = t, this.subset = {}, this.unicodes = {}, this.next = 33
		}
		return e.prototype.generateCmap = function() {
			var t, n, i, o, a;
			for (n in o = this.font.cmap.tables[0].codeMap, t = {}, a = this.subset) i = a[n], t[n] = o[i];
			return t
		}, e.prototype.glyphsFor = function(t) {
			var n, i, o, a, u, c, f;
			for (o = {}, u = 0, c = t.length; u < c; u++) o[a = t[u]] = this.font.glyf.glyphFor(a);
			for (a in n = [], o)(i = o[a]) != null && i.compound && n.push.apply(n, i.glyphIDs);
			if (n.length > 0)
				for (a in f = this.glyphsFor(n)) i = f[a], o[a] = i;
			return o
		}, e.prototype.encode = function(t, n) {
			var i, o, a, u, c, f, p, v, m, y, d, I, A, F, _;
			for (o in i = _c.encode(this.generateCmap(), "unicode"), u = this.glyphsFor(t), d = {
					0: 0
				}, _ = i.charMap) d[(f = _[o]).old] = f.new;
			for (I in y = i.maxGlyphID, u) I in d || (d[I] = y++);
			return v = function(j) {
				var z, $;
				for (z in $ = {}, j) $[j[z]] = z;
				return $
			}(d), m = Object.keys(v).sort(function(j, z) {
				return j - z
			}), A = function() {
				var j, z, $;
				for ($ = [], j = 0, z = m.length; j < z; j++) c = m[j], $.push(v[c]);
				return $
			}(), a = this.font.glyf.encode(u, A, d), p = this.font.loca.encode(a.offsets, A), F = {
				cmap: this.font.cmap.raw(),
				glyf: a.table,
				loca: p,
				hmtx: this.font.hmtx.raw(),
				hhea: this.font.hhea.raw(),
				maxp: this.font.maxp.raw(),
				post: this.font.post.raw(),
				name: this.font.name.raw(),
				head: this.font.head.encode(n)
			}, this.font.os2.exists && (F["OS/2"] = this.font.os2.raw()), this.font.directory.encode(F)
		}, e
	}();
Gt.API.PDFObject = function() {
	var e;

	function t() {}
	return e = function(n, i) {
		return (Array(i + 1).join("0") + n).slice(-i)
	}, t.convert = function(n) {
		var i, o, a, u;
		if (Array.isArray(n)) return "[" + function() {
			var c, f, p;
			for (p = [], c = 0, f = n.length; c < f; c++) i = n[c], p.push(t.convert(i));
			return p
		}().join(" ") + "]";
		if (typeof n == "string") return "/" + n;
		if (n?.isString) return "(" + n + ")";
		if (n instanceof Date) return "(D:" + e(n.getUTCFullYear(), 4) + e(n.getUTCMonth(), 2) + e(n.getUTCDate(), 2) + e(n.getUTCHours(), 2) + e(n.getUTCMinutes(), 2) + e(n.getUTCSeconds(), 2) + "Z)";
		if ({}.toString.call(n) === "[object Object]") {
			for (o in a = ["<<"], n) u = n[o], a.push("/" + o + " " + t.convert(u));
			return a.push(">>"), a.join(`
`)
		}
		return "" + n
	}, t
}();

function m1(e) {
	return new Promise((t, n) => {
		const i = new FileReader;
		i.onload = () => t(i.result), i.onerror = n, i.readAsDataURL(e)
	})
}
async function v1(e) {
	const t = e.slides[0],
		n = t.widthEmu * Ue,
		i = t.heightEmu * Ue,
		o = new Gt({
			unit: "px",
			format: [n, i],
			compress: !0,
			hotfixes: ["px_scaling"],
			orientation: "landscape"
		});
	let a = !0;
	for (const u of e.slides) {
		const c = u.widthEmu * Ue,
			f = u.heightEmu * Ue;
		a || o.addPage([c, f]), a = !1;
		const p = new OffscreenCanvas(c * 3, f * 3),
			v = p.getContext("2d");
		if (!v) continue;
		v.scale(3, 3), await zl(u, e, v);
		const m = await p.convertToBlob({
				type: "image/jpeg",
				quality: .92
			}),
			y = await m1(m);
		o.addImage(y, "JPEG", 0, 0, c, f)
	}
	return o.output("blob")
}
const b1 = ({
	onClose: e,
	onPlay: t,
	title: n,
	extension: i,
	contentType: o
}) => {
	const a = n ?? "Untitled",
		u = o === "presentation",
		{
			focusedWalnutId: c,
			presentationMap: f
		} = vu(),
		p = c ? f[c] : void 0,
		v = p?.fileBlob,
		m = p?.fileName ?? "presentation.pptx",
		y = p?.presentation,
		d = () => {
			v && sl(v, m)
		},
		I = async () => {
			if (!y) return;
			const A = await v1(y),
				F = m.replace(/\.pptx$/i, "") + ".pdf";
			sl(A, F)
		};
	return Tt.jsxs("div", {
		className: "text-token-text-secondary border-token-border-light relative flex w-full items-center justify-between border-b px-3 py-2",
		children: [Tt.jsx("div", {
			className: "z-10",
			children: Tt.jsx(Nf, {
				onClick: e,
				children: Tt.jsx(gf, {
					className: "icon-lg"
				})
			})
		}), Tt.jsxs("div", {
			className: "absolute start-1/2 top-1/2 flex -translate-x-1/2 -translate-y-1/2 items-center gap-2",
			children: [Tt.jsx(Lf, {
				fileName: n ?? null
			}), Tt.jsx("div", {
				className: "text-token-text-primary truncate text-sm font-medium",
				children: a
			}), i && Tt.jsx("div", {
				className: "text-token-text-tertiary ms-2 text-sm",
				children: i
			})]
		}), Tt.jsxs("div", {
			className: "z-10 flex items-center gap-1",
			children: [u && Tt.jsxs(mf, {
				side: "bottom",
				triggerButton: Tt.jsx(ol, {
					color: "ghost",
					size: "small",
					children: Tt.jsx(Af, {
						className: "size-5"
					})
				}),
				children: [Tt.jsx(al.Item, {
					onClick: d,
					children: Tt.jsx(ui, {
						id: "walnut.downloadPptx",
						defaultMessage: "Download PowerPoint"
					})
				}), Tt.jsx(al.Item, {
					onClick: I,
					children: Tt.jsx(ui, {
						id: "walnut.downloadPdf",
						defaultMessage: "Download PDF"
					})
				})]
			}), u && Tt.jsx(ol, {
				color: "primary",
				onClick: t,
				size: "small",
				children: Tt.jsxs("div", {
					className: "flex items-center gap-1",
					children: [Tt.jsx(Sf, {
						className: "size-5 sm:size-4"
					}), Tt.jsx("span", {
						className: "hidden sm:block",
						children: Tt.jsx(ui, {
							id: "walnut.play",
							defaultMessage: "Play Slideshow"
						})
					})]
				})
			})]
		})]
	})
};

function w1({
	isOpen: e,
	onClose: t
}) {
	const [n, i] = ft.useState(!1), {
		presentationMap: o,
		focusedWalnutId: a,
		setSelectedSlideIdx: u
	} = vu(), c = vf(), f = bf(c, "3245235608"), [p, v] = ft.useState(!1), m = a ? o[a] : null, {
		presentation: y,
		fileName: d,
		workbook: I
	} = m ?? {};
	if (!a || !m) return null;
	const A = y ? "presentation" : I ? "spreadsheet" : "none";
	return Tt.jsx(wf, {
		testId: "modal-walnut-content",
		type: "success",
		size: "fullscreen",
		isOpen: e,
		onClose: t,
		visuallyHiddenHeader: !0,
		children: Tt.jsxs("div", {
			className: "flex h-full flex-col overflow-hidden",
			children: [Tt.jsx(b1, {
				onClose: t,
				onPlay: () => i(!n),
				title: d,
				contentType: A
			}), y && !n && Tt.jsx(b2, {
				presentation: y,
				selectedSlideIdx: m.selectedSlideIdx,
				setSelectedSlideIdx: F => u(a, F),
				isWalnutV2Enabled: f,
				isEditing: p,
				setIsEditing: v
			}), I && !y && !n && Tt.jsx(kf, {
				workbook: I,
				selectedSheetIdx: m.selectedSheetIdx
			}), n && y && Tt.jsx(Cf, {
				startIndex: 0,
				onExit: t,
				walnutId: a
			}), !y && !I && !n && Tt.jsx("div", {
				className: "flex h-full w-full items-center justify-center",
				children: Tt.jsx(ui, {
					id: "walnut.noFile",
					defaultMessage: "No file selected."
				})
			})]
		})
	})
}
const y1 = ({
		clientThreadId: e
	}) => {
		const {
			isOpen: t,
			close: n
		} = vu(), i = t ? Tt.jsx(w1, {
			isOpen: t,
			onClose: n,
			clientThreadId: e
		}) : null;
		return Tt.jsx(ql, {
			children: i
		}, e)
	},
	x1 = e => {
		const t = ft.useRef(null);
		return Tt.jsx(yf, {
			ref: t,
			onError: (n, i) => {
				_f(), setTimeout(() => {
					t.current?.resetErrorBoundary()
				}), xf.addError(n, {
					componentStack: i
				})
			},
			name: "walnut-focused-view",
			children: Tt.jsx(y1, {
				...e
			})
		})
	},
	_1 = Object.freeze(Object.defineProperty({
		__proto__: null,
		WalnutFocusedViewManager: x1
	}, Symbol.toStringTag, {
		value: "Module"
	}));
export {
	be as _, _1 as w
};
//# sourceMappingURL=o4xez6f9skqr3nnz.js.map