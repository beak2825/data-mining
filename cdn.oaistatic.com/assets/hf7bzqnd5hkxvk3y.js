import {
	r as d,
	ap as q,
	p as Y,
	e as X,
	j as n,
	A as J,
	n as x
} from "./fyeo2h7okrqcf3nz.js";
import {
	ku as $,
	kv as Q,
	kw as W,
	dk as Z,
	C as f,
	kx as tt,
	ky as et,
	jj as st,
	f9 as at,
	kz as ot,
	u as O,
	kA as nt,
	kB as it,
	j9 as rt,
	kC as ct,
	kD as dt,
	kE as lt,
	kF as _,
	kG as L,
	j7 as ut,
	kH as mt,
	kI as pt,
	de as ht,
	kJ as N,
	U as R,
	kK as M,
	kL as ft,
	kM as gt,
	k7 as xt,
	kN as vt
} from "./f7j18j5u52u1pnnk.js";
import {
	ix as S,
	L as j,
	bE as z,
	H as T,
	fs as Ct,
	kt as wt,
	gu as Tt,
	i7 as F,
	hp as bt,
	lA as yt,
	kB as It
} from "./egb2c0f6p1ew61vt.js";
import {
	L as St
} from "./k3n5t9a799ohqw3h.js";
import {
	T as Et
} from "./kmhb0332a6s22krq.js";
import {
	g as At
} from "./btagl6w1gub4aw61.js";
import "./jy1u8exw8iz2slve.js";
import "./bomum2mkkc55wkmd.js";
import "./f7hgik6cjoxksakw.js";
import "./np575ojwia1bc8yj.js";
import "./m29otmaum97sqv1d.js";
import "./hmqs3pkvyqlgk67i.js";
import "./jazub75ldxizbo1c.js";
import "./ekh5ue0hmvvp6lmd.js";
import "./f76gy0b8ieo4s693.js";
import "./gy64pge8qevmvg7e.js";
import "./gayt6avnfip5st7p.js";
import "./ixsisjuxwij5x7d3.js";
import "./crozh0j4v472kedz.js";
import "./mpicq22e5t3uz3jz.js";
import "./gmdf9rdonf8komut.js";
import "./okq68de4a9733epz.js";
import "./fzwyckccbrm2oiee.js";
import "./oykx1ts051t0pjop.js";
import "./ddkpacja177ztd42.js";
import "./b35luffh9z4llgqb.js";
import "./fcaorwsjebq018qz.js";
import "./cv2ja3m1kj318n5b.js";
import "./np62wv8wj4i0jtdl.js";
import "./falvn1u1m9kfl56g.js";
import "./lqc3mxovgoy4h7eq.js";
import "./pc2givv05uuq8g6l.js";
import "./ia4gjlhup29rqu2j.js";
import "./ha8fmsbxx7xv171r.js";
import "./dlxldtpg3t60aqlu.js";
import "./f2cokc4vvw85wf3h.js";
import "./fpsokuu2p45yfc9a.js";
import "./ohtnvt0kfw0a57ka.js";
import "./bk8slwxjkdlmxjxm.js";
import "./kywo8xrter1oxvd3.js";
import "./c0yksrt8gzrzr8xy.js";
import "./n0kwaugzg5mjzz0f.js";
import "./mzdwbfzlwdoj9187.js";
import "./mtx41j31lzyyzsit.js";
import "./jrm7m26zzbmpv5fw.js";
import "./euyyz74sa52ztdnb.js";
import "./lk4s8c9e8k6949av.js";
import "./odn3jimzeso6ws9q.js";
import "./g286r35f18ua9byd.js";
import "./cbrjkkbokuo79ldz.js";
import "./ededkbk0bjohtxav.js";
const D = "oai/apps/canmoreSidebarWidth",
	kt = .25,
	_t = 400,
	H = 400;

function P(t) {
	return t - _t
}

function y(t, s) {
	return q(H, P(t), s ?? kt * t)
}

function Nt() {
	const t = S.useState(S.selectWindowWidth),
		s = y(t, $(j.DANGER_SECRET_FOLDERS_ONLY_getItem(D))),
		a = U(),
		[e, i] = d.useState(s);
	d.useEffect(() => {
		(e < H || e > P(t)) && i(y(t, e))
	}, [t]);

	function r(m) {
		i(p => y(t, p += m.delta.x))
	}

	function o(m) {
		i(m), j.DANGER_SECRET_FOLDERS_ONLY_setItem(D, m)
	}

	function c() {
		const m = y(t, void 0);
		o(m)
	}
	const g = `calc(100vw - ${e}px)`;
	return a ? {
		chatWidth: e,
		canvasWidth: t - e,
		canvasWidthCalc: g,
		viewportWidth: t,
		handleDrag: r,
		handleDoubleClick: c,
		persist: o
	} : {
		chatWidth: 0,
		canvasWidth: t,
		canvasWidthCalc: "100vw",
		viewportWidth: t,
		handleDrag: () => {},
		handleDoubleClick: () => {},
		persist: () => {}
	}
}

function U(t) {
	const s = S.useState(S.selectWindowWidth);
	return (t ?? s) > 1e3
}
const A = "sharedCanvas";

function Rt() {
	const [t, s] = Y(), a = t.get(A), e = X();
	d.useEffect(() => {
		const i = a && Q.createRemixTempTextdoc(a, e);
		if (!i) return;
		requestAnimationFrame(() => {
			W(i)
		});
		const r = new URLSearchParams(t);
		r.delete(A), s(r);
		const o = new URL(window.location.href);
		o.searchParams.delete(A), history.replaceState(null, "", o)
	}, [a, t, s, e])
}
const Mt = "textdocId",
	jt = t => {
		const a = new URLSearchParams(window.location.search).get(Mt),
			e = z(t, i => T.findNode(i, ({
				message: r
			}) => {
				const o = r.metadata?.canvas;
				return o?.create_source === Z.HIVE && (a ? o?.textdoc_id === a : !0)
			})?.message.metadata?.canvas?.textdoc_id);
		d.useEffect(() => {
			e && requestAnimationFrame(() => {
				W(e)
			})
		}, [e])
	};

function Ft(t, s) {
	let a;
	return s?.type === f.Textdoc ? s.textdocId.startsWith(tt) || (a = {
		type: "canvas_textdoc",
		id: s.textdocId
	}) : s?.type === f.Kanzi && (a = {
		type: "canvas_kanzi",
		id: s.kanziTurnId
	}), et(t, {
		promptMessage: {
			metadata: {
				open_in_canvas_view: a
			}
		}
	})
}
const V = ({
		isFullScreen: t = !1,
		clientThreadId: s,
		focusedObject: a,
		onClose: e,
		isAnimating: i = !1,
		width: r
	}) => {
		const {
			setTargetedContent: o
		} = st(), c = d.useRef(!1);
		if (d.useEffect(() => (c.current && o(void 0), c.current = !0, () => {
				c.current = !1
			}), [a]), a == null) return null;
		switch (a.type) {
			case f.Textdoc:
				return n.jsx(Et, {
					isFullScreen: t,
					onClose: e,
					clientThreadId: s,
					focusedTextdoc: a,
					isAnimating: i,
					width: r
				});
			case f.Kanzi:
				break;
			case f.ADAVisualization:
				return null
		}
	},
	Dt = 300,
	Wt = t => {
		switch (t?.type) {
			case f.Textdoc:
				return t.textdocId;
			case f.Kanzi:
				return null;
			default:
				return null
		}
	};

function Ot(t, s) {
	const [a, e, i, r] = z(t, l => [T.getRequestId(l), T.getConversationLastTurn(l), T.isMessageTurnEnded(l), T.getVariantIds(l).length > 1]), o = at(a), c = ot(), g = O(), [m, p] = d.useMemo(() => {
		if (e && r) return [void 0, null];
		if (s === !0) return [void 0, null];
		let l;
		return !i && e && (l = Ct(e.messageGroups, u => u.type !== wt)), Lt({
			groupedMessage: l,
			currentlyFocusedObject: g,
			isRequestActive: o,
			latestTextdocId: c
		})
	}, [i, e, r, g, s, o, c]), C = p != null, w = Wt(p), v = nt("canvas");
	d.useEffect(() => {
		if (p && m && !Tt() && (v(), it(p, m), p.type === f.Textdoc)) {
			const {
				textdocId: l
			} = p, u = At(l);
			rt(document.getElementById(u))
		}
	}, [C, w])
}

function Lt({
	groupedMessage: t,
	currentlyFocusedObject: s,
	isRequestActive: a,
	latestTextdocId: e
}) {
	switch (t?.type) {
		case F.Canmore: {
			const [i, r] = t.messages;
			if (!ct(i)) break;
			const o = dt(a, i, r ?? null),
				c = o.textdocId ?? e;
			if (c && (o.function === lt.CreateTextdoc ? (o.content ?? "").length > Dt || o.status === _.WAITING : o.status === _.STREAMING)) return [o.messageId, {
				type: f.Textdoc,
				textdocId: c
			}];
			break
		}
		case F.kanzi:
			break
	}
	return [void 0, null]
}
const I = {
		type: "spring",
		bounce: .12,
		duration: .64
	},
	zt = {
		type: "spring",
		bounce: 0,
		duration: .58
	},
	Ht = ({
		clientThreadId: t,
		focusedObject: s,
		onClose: a
	}) => {
		const {
			chatWidth: e,
			canvasWidthCalc: i,
			handleDrag: r,
			handleDoubleClick: o,
			persist: c
		} = Nt(), [g, m] = d.useState(!0), [p, C] = d.useState(!1), w = ft(({
			rect: h
		}) => h), {
			windowHeight: v,
			windowWidth: l
		} = It(h => h, {
			windowWidth: 0,
			windowHeight: 0
		});
		let u = w ?? {
				top: 0,
				left: e,
				width: l - e,
				height: v
			},
			k = !1;
		if (w && (u.top < 0 || u.top + u.height > v)) {
			k = !0;
			const h = {
				width: (l - e) * .75,
				height: v * .75
			};
			u = {
				top: v / 2 - h.height / 2,
				left: (l - e - h.width) / 2 + e,
				width: h.width,
				height: h.height
			}
		}
		const b = w?.borderRadius,
			E = gt(),
			G = E?.history != null || E?.showChangesAtVersion != null,
			B = xt();
		return n.jsxs(n.Fragment, {
			children: [G && n.jsx(St, {
				onClick: () => vt(E.textdocId),
				zIndexKey: "chatOverlay"
			}), n.jsxs(x.div, {
				initial: {
					marginInlineEnd: B ? -260 : 0
				},
				animate: {
					marginInlineEnd: 0
				},
				transition: zt,
				children: [n.jsx(x.div, {
					initial: {
						opacity: 1
					},
					animate: {
						opacity: 0
					},
					exit: {
						opacity: [1, 0]
					},
					transition: {
						...I,
						delay: .22
					},
					className: "bg-token-main-surface-primary pointer-events-none absolute start-0 top-0 z-20 h-full w-full"
				}), n.jsx(x.div, {
					className: "relative z-20 h-full",
					style: {
						width: i
					},
					exit: {
						width: 0
					},
					transition: {
						type: "spring",
						bounce: 0,
						duration: .1
					}
				})]
			}), n.jsx(x.div, {
				initial: {
					opacity: 0
				},
				animate: {
					opacity: 1
				},
				exit: {
					opacity: 0
				},
				className: "pointer-events-none absolute start-0 top-0 z-10 h-full w-full bg-black/[0.025] dark:bg-transparent"
			}), n.jsx(x.div, {
				className: "bg-token-bg-primary absolute start-0 z-20 h-full overflow-hidden transition-shadow",
				initial: {
					borderRadius: b,
					boxShadow: "0px 12px 32px 0px rgba(0, 0, 0, 0.064)",
					opacity: k ? 0 : 1,
					x: u.left,
					y: u.top,
					height: u.height,
					width: u.width
				},
				animate: {
					opacity: 1,
					x: e,
					y: 0,
					width: i,
					height: v,
					borderRadius: 0,
					boxShadow: "0px 0px 18px rgba(0,0,0,0.075)"
				},
				exit: {
					scale: .64,
					opacity: 0,
					filter: "blur(12px)",
					transition: {
						opacity: {
							duration: .14,
							bounce: .1
						}
					},
					borderRadius: b,
					boxShadow: "0px 12px 32px 0px rgba(0, 0, 0, 0.064)"
				},
				transition: p ? {
					duration: 0
				} : I,
				onAnimationComplete: () => m(!1),
				children: n.jsx(x.div, {
					className: "dark:border-token-border-medium h-full overflow-hidden border-s border-gray-100",
					initial: {
						borderRadius: b
					},
					animate: {
						borderRadius: 0
					},
					exit: {
						borderRadius: b
					},
					transition: I,
					children: n.jsxs("div", {
						className: "h-full",
						children: [n.jsx(x.div, {
							drag: "x",
							className: "bg-token-text-quaternary absolute start-[-2px] z-10 h-full w-[4px] cursor-ew-resize opacity-0",
							whileHover: {
								opacity: .5
							},
							whileDrag: {
								opacity: .75,
								width: "8px",
								left: "-4px"
							},
							transition: {
								type: "tween",
								duration: .1
							},
							style: {
								x: 0,
								y: 0,
								transform: "translateX(0px)"
							},
							dragMomentum: !1,
							dragSnapToOrigin: !1,
							dragElastic: !1,
							dragConstraints: {
								left: 0,
								right: 0,
								top: 0,
								bottom: 0
							},
							onPointerDown: () => C(!0),
							onPointerUp: () => C(!1),
							onDrag: (h, K) => r(K),
							onDragEnd: () => {
								C(!1), c(e)
							},
							onDoubleClick: () => o()
						}), p && n.jsx("div", {
							className: "absolute inset-0 z-10"
						}), n.jsx(V, {
							onClose: a,
							clientThreadId: t,
							isAnimating: g,
							focusedObject: s,
							width: l - e
						})]
					})
				})
			})]
		})
	},
	Pt = d.memo(Ht),
	Ut = ({
		clientThreadId: t,
		focusedObject: s,
		onClose: a
	}) => n.jsx(yt, {
		open: !0,
		className: "fixed inset-0 z-50 h-full w-full",
		children: n.jsx(x.div, {
			className: "z-40 h-full w-full overflow-hidden shadow-xl md:border-gray-100 md:dark:border-gray-700",
			initial: {
				scale: .98
			},
			animate: {
				scale: 1
			},
			transition: I,
			children: n.jsx(V, {
				isFullScreen: !0,
				clientThreadId: t,
				focusedObject: s,
				onClose: a
			})
		})
	}),
	Vt = ({
		clientThreadId: t,
		overrideWidth: s,
		isAutoFocusDisabled: a = !1
	}) => {
		const e = O(),
			i = U(s) && !mt(pt, e?.type),
			r = ht();
		Ot(t, a || r), Rt(), jt(t), d.useEffect(() => {
			L()
		}, [t]);
		const o = e && (i ? n.jsx(Pt, {
			clientThreadId: t,
			onClose: M,
			focusedObject: e
		}, "canvas-sidebar") : n.jsx(Ut, {
			clientThreadId: t,
			onClose: M,
			focusedObject: e
		}, "canvas-modal"));
		d.useEffect(() => {
			if (e) return N(g => Ft(g, e)), () => N(null)
		}, [e]);
		const c = o != null;
		return d.useEffect(() => (R.setActiveStageSidebar(c), () => {
			c && R.setActiveStageSidebar(!1)
		}), [c]), n.jsx(J, {
			children: o
		}, t)
	},
	Pe = t => {
		const s = d.useRef(null);
		return n.jsx(bt, {
			ref: s,
			onError: (a, e) => {
				L(), setTimeout(() => {
					s.current?.resetErrorBoundary()
				}), ut.logError("Error boundary hit", a, {
					componentStack: e
				})
			},
			name: "canmore-focused-view",
			children: n.jsx(Vt, {
				...t
			})
		})
	};
export {
	Pe as CanvasFocusedViewManager
};
//# sourceMappingURL=hf7bzqnd5hkxvk3y.js.map