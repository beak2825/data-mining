const __vite__mapDeps = (i, m = __vite__mapDeps, d = (m.f || (m.f = ["assets/jhdajuy4k2zjyumf.js", "assets/egb2c0f6p1ew61vt.js", "assets/fyeo2h7okrqcf3nz.js", "assets/root-dql6y2cb.css", "assets/f7j18j5u52u1pnnk.js", "assets/conversation-small-k592qa8k.css", "assets/d1d70ux3rr4m4rg8.js", "assets/h1zj9vo6zvfz9n6h.js", "assets/mtx41j31lzyyzsit.js", "assets/ixsisjuxwij5x7d3.js", "assets/li5c35ml98k2npcy.js", "assets/mzdwbfzlwdoj9187.js", "assets/lqc3mxovgoy4h7eq.js", "assets/jrm7m26zzbmpv5fw.js", "assets/euyyz74sa52ztdnb.js", "assets/lk4s8c9e8k6949av.js", "assets/f2cokc4vvw85wf3h.js", "assets/odn3jimzeso6ws9q.js", "assets/g286r35f18ua9byd.js", "assets/n0kwaugzg5mjzz0f.js", "assets/cbrjkkbokuo79ldz.js", "assets/lyuduqdpgl2iyg0z.js", "assets/bomum2mkkc55wkmd.js", "assets/np62wv8wj4i0jtdl.js", "assets/falvn1u1m9kfl56g.js", "assets/pc2givv05uuq8g6l.js", "assets/ia4gjlhup29rqu2j.js", "assets/ha8fmsbxx7xv171r.js", "assets/dlxldtpg3t60aqlu.js", "assets/cv2ja3m1kj318n5b.js", "assets/kzmonehgvzu37er8.js", "assets/gccpliftrb26jmv2.js", "assets/h4y2be58evzp50oz.js", "assets/f9rv07xfg1rgyv7i.js", "assets/licto72kg488zsoz.js", "assets/iu7w9vyyt43hbo7k.js", "assets/o7cnmo9zrowpqfe8.js", "assets/g4tl5lt9yqf20m4s.js"]))) => i.map(i => d[i]);
import {
	fE as Me,
	iA as Ne,
	cZ as Pe,
	c_ as Te,
	q as Ve,
	ax as ze,
	l6 as Re,
	Q as Ie,
	l7 as Le,
	cG as ke,
	l8 as De,
	h7 as Ge,
	jr as Se,
	a$ as Be,
	bp as Ue,
	d0 as Ke,
	bn as We,
	aZ as He,
	by as Qe,
	k4 as Ye,
	R as qe
} from "./egb2c0f6p1ew61vt.js";
import {
	j as s,
	r as o,
	A as Ze,
	n as ye,
	c as $e,
	l as Ae,
	p as Je,
	u as Xe
} from "./fyeo2h7okrqcf3nz.js";
import {
	hs as et,
	ht as tt,
	hu as Oe,
	hj as st,
	ca as we,
	cb as Fe,
	f7 as it,
	hv as at,
	a5 as ot,
	a6 as rt,
	hw as nt,
	hx as lt,
	hy as ct,
	hz as dt,
	hA as ft,
	hB as ut,
	ba as mt,
	hC as ht,
	hD as gt,
	hE as pt,
	hF as xt,
	ek as bt,
	K as vt,
	hG as jt,
	hH as Ct,
	hI as Et,
	hJ as _t,
	hK as wt,
	hL as Pt,
	hM as Tt,
	T as It,
	hN as kt
} from "./f7j18j5u52u1pnnk.js";
import {
	c as St,
	b as yt
} from "./mtx41j31lzyyzsit.js";
import {
	B as At
} from "./li5c35ml98k2npcy.js";
import {
	u as Ot,
	b as Ft
} from "./n0kwaugzg5mjzz0f.js";
import {
	P as Mt
} from "./lyuduqdpgl2iyg0z.js";
import {
	C as Nt
} from "./kzmonehgvzu37er8.js";
import {
	a as Vt,
	C as zt
} from "./lqc3mxovgoy4h7eq.js";
import {
	M as Rt
} from "./h4y2be58evzp50oz.js";

function Lt({
	clientThreadId: a
}) {
	const e = Ot();
	return s.jsxs(s.Fragment, {
		children: [e && s.jsx(Ft, {}), s.jsx(Dt, {
			clientThreadId: a
		})]
	})
}

function Dt({
	clientThreadId: a
}) {
	const e = o.useContext(et),
		[i, n] = o.useState(!!e?.postWithProfile && e.postWithProfile.post.attachments && e.postWithProfile.post.attachments.every(d => d.kind === "media_generation"));
	return !e?.postWithProfile || !i ? null : s.jsx(Me, {
		clientThreadId: a,
		children: s.jsx(Mt, {
			clientThreadId: a,
			postWithProfile: e.postWithProfile,
			onClose: () => n(!1)
		})
	})
}
const Gt = 450;

function Bt({
	children: a,
	clientThreadId: e,
	isOpen: i,
	onClose: n,
	type: d
}) {
	return s.jsx(Ze, {
		children: i && s.jsx(Ne, {
			children: s.jsx(tt.Provider, {
				value: {
					isEmbeddedInFocusedView: !0,
					type: d
				},
				children: s.jsxs("div", {
					className: "absolute inset-0 flex flex-col",
					children: [s.jsx(ye.div, {
						className: "bg-token-main-surface-secondary h-full w-full",
						...Oe
					}), s.jsxs("div", {
						className: "absolute inset-0 flex",
						children: [s.jsx("div", {
							className: "grow overflow-auto",
							children: a
						}), s.jsx(ye.div, {
							className: "border-token-border-medium bg-token-main-surface-primary relative shrink-0 border-s",
							style: {
								width: Gt
							},
							...Oe,
							children: s.jsx("div", {
								className: "h-[100vh] pb-4",
								children: s.jsx(Rt, {
									clientThreadId: e,
									hideHeader: !0,
									hideDisclaimer: !0,
									messagesVerticalAlign: "bottom"
								}, e)
							})
						})]
					})]
				})
			})
		})
	})
}
const Ut = Pe(() => Te(() => import("./jhdajuy4k2zjyumf.js"), __vite__mapDeps([0, 1, 2, 3, 4, 5, 6]))),
	Kt = Pe(() => Te(() => import("./h1zj9vo6zvfz9n6h.js"), __vite__mapDeps([7, 1, 2, 3, 4, 5, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35])).then(a => a.ImageEditor));

function Wt({
	clientThreadId: a
}) {
	const e = st();
	o.useEffect(() => {
		we.close()
	}, [a]);
	let i;
	return e?.type === Fe.ADAVisualization ? i = s.jsx(Ut, {
		clientThreadId: a,
		visualization: e.visualization
	}) : e?.type === Fe.Image && (i = s.jsx(Kt, {
		clientThreadId: a,
		messageId: e.messageId,
		image: e.image,
		allImages: e.allImages
	}, e.image.asset_pointer)), s.jsx(Bt, {
		clientThreadId: a,
		isOpen: e != null,
		onClose: we.close,
		type: e?.type,
		children: i
	})
}
var Ht = {};
const Qt = ({
		children: a
	}) => s.jsx(s.Fragment, {
		children: a
	}),
	Yt = Pe(() => Te(() => import("./o7cnmo9zrowpqfe8.js"), __vite__mapDeps([36, 2, 1, 3, 4, 5, 12, 9, 8, 32, 19, 11, 13, 14, 15, 16, 17, 18, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 33, 37])));

function ns(a) {
	"use forget";
	const e = $e.c(105),
		{
			urlThreadId: i,
			clientThreadId: n,
			prefetchSearch: d
		} = a,
		f = Ve(),
		l = ze(),
		y = Re(),
		T = Ae(),
		[I] = Je();
	let A;
	e[0] !== n || e[1] !== i ? (A = () => {
		if (i !== void 0) {
			const r = i;
			return Le(r) ?? r
		}
		return n !== void 0 ? n : ke()
	}, e[0] = n, e[1] = i, e[2] = A) : A = e[2];
	const [t, k] = o.useState(A);
	i !== void 0 && t !== i && (Ie(t) === i || k(i));
	let O;
	e[3] !== t || e[4] !== f ? (O = it(f, t), e[3] = t, e[4] = f, e[5] = O) : O = e[5];
	const ve = O,
		je = Ae();
	let F;
	e[6] !== je ? (F = at(je), e[6] = je, e[7] = F) : F = e[7];
	const Ce = F;
	let M;
	e[8] !== t || e[9] !== i ? (M = () => {
		i === void 0 && Ie(t) !== void 0 && k(ke())
	}, e[8] = t, e[9] = i, e[10] = M) : M = e[10];
	let N;
	e[11] !== t || e[12] !== Ce || e[13] !== i ? (N = [i, t, Ce], e[11] = t, e[12] = Ce, e[13] = i, e[14] = N) : N = e[14], o.useEffect(M, N);
	const Ee = ot(rt.workspaceId),
		{
			eligible: V,
			isLoading: z,
			markAsViewed: R
		} = nt(),
		L = lt(),
		{
			eligible: D,
			isLoading: G,
			markAsViewed: B
		} = ct(),
		U = dt(),
		{
			eligible: K,
			isLoading: W,
			markAsViewed: H
		} = ft(),
		Q = ut(),
		Y = mt();
	let q, Z;
	e[15] !== Y ? (q = () => {
		De(!0).then(r => {
			r.force_login && Y({
				authType: "login"
			}), gt.initializeAndGatherData(r), Ge.initializeAndGatherData(r)
		})
	}, Z = [Y], e[15] = Y, e[16] = q, e[17] = Z) : (q = e[16], Z = e[17]), o.useEffect(q, Z);
	let $, J;
	e[18] !== y || e[19] !== l || e[20] !== I ? ($ = () => {
		const r = I.get(pt) === "true",
			S = I.get(xt) === "true";
		S !== y && Se.setIsAnonModeEnabled(S), l !== r && Se.setIsTemporaryChatEnabled(r)
	}, J = [l, y, I], e[18] = y, e[19] = l, e[20] = I, e[21] = $, e[22] = J) : ($ = e[21], J = e[22]), o.useEffect($, J);
	let X;
	e[23] !== T.state ? (X = () => {
		T.state?.focusObject && we.setFocusedObject(T.state.focusObject)
	}, e[23] = T.state, e[24] = X) : X = e[24];
	const _e = T.state?.focusObject;
	let ee;
	e[25] !== _e ? (ee = [_e], e[25] = _e, e[26] = ee) : ee = e[26], o.useEffect(X, ee);
	let te, se;
	e[27] !== V || e[28] !== z || e[29] !== R || e[30] !== L ? (te = () => {
		!z && V && (R(), L())
	}, se = [V, z, R, L], e[27] = V, e[28] = z, e[29] = R, e[30] = L, e[31] = te, e[32] = se) : (te = e[31], se = e[32]), o.useEffect(te, se);
	let ie, ae;
	e[33] !== D || e[34] !== G || e[35] !== B || e[36] !== U ? (ie = () => {
		!G && D && (B(), U())
	}, ae = [D, G, B, U], e[33] = D, e[34] = G, e[35] = B, e[36] = U, e[37] = ie, e[38] = ae) : (ie = e[37], ae = e[38]), o.useEffect(ie, ae);
	let oe, re;
	e[39] !== K || e[40] !== W || e[41] !== H || e[42] !== Q ? (oe = () => {
		!W && K && (H(), Q())
	}, re = [K, W, H, Q], e[39] = K, e[40] = W, e[41] = H, e[42] = Q, e[43] = oe, e[44] = re) : (oe = e[43], re = e[44]), o.useEffect(oe, re), St(t);
	const c = Xe();
	let ne, le;
	e[45] !== f || e[46] !== c ? (ne = () => {
		Be(f) && Ue.checkGate("1661641186") && c.fetchQuery({
			queryKey: ["recent", "images", "bootstrap"],
			queryFn: qt
		})
	}, le = [c, f], e[45] = f, e[46] = c, e[47] = ne, e[48] = le) : (ne = e[47], le = e[48]), o.useEffect(ne, le);
	let ce, de;
	e[49] !== l || e[50] !== c ? (ce = () => Ke(Qe, {
		completionFinished: r => {
			if (r.serverThreadId != null && !l) {
				const S = We(r.serverThreadId)?.mode;
				S?.kind === He.GizmoInteraction && bt.handleGizmoInteracted(c, S.gizmo_id)
			}
		}
	}), de = [l, c], e[49] = l, e[50] = c, e[51] = ce, e[52] = de) : (ce = e[51], de = e[52]), o.useEffect(ce, de);
	let u;
	e[53] !== t || e[54] !== Ee ? (u = s.jsx(At, {
		clientThreadId: t,
		page: "chat"
	}, Ee), e[53] = t, e[54] = Ee, e[55] = u) : u = e[55];
	let m;
	e[56] !== t ? (m = s.jsx(Zt, {
		clientThreadId: t,
		setClientThreadId: k
	}), e[56] = t, e[57] = m) : m = e[57];
	let fe, ue, me;
	e[58] === Symbol.for("react.memo_cache_sentinel") ? (fe = s.jsx(vt, {}), ue = s.jsx(jt, {}), me = s.jsx(Ct, {}), e[58] = fe, e[59] = ue, e[60] = me) : (fe = e[58], ue = e[59], me = e[60]);
	let he;
	e[61] === Symbol.for("react.memo_cache_sentinel") ? (he = s.jsx(Et, {}), e[61] = he) : he = e[61];
	let h;
	e[62] !== t || e[63] !== i ? (h = s.jsx(Nt, {
		urlThreadId: i,
		clientThreadId: t,
		setClientThreadId: k
	}), e[62] = t, e[63] = i, e[64] = h) : h = e[64];
	let g;
	e[65] !== t ? (g = s.jsx(Lt, {
		clientThreadId: t
	}), e[65] = t, e[66] = g) : g = e[66];
	let p;
	e[67] !== t || e[68] !== d || e[69] !== h || e[70] !== g ? (p = s.jsxs(Vt, {
		clientThreadId: t,
		setClientThreadId: k,
		prefetchSearchPromises: d,
		children: [he, h, g]
	}), e[67] = t, e[68] = d, e[69] = h, e[70] = g, e[71] = p) : p = e[71];
	let x;
	e[72] !== t || e[73] !== u || e[74] !== m || e[75] !== p ? (x = s.jsxs(zt, {
		clientThreadId: t,
		children: [u, m, fe, ue, me, p]
	}), e[72] = t, e[73] = u, e[74] = m, e[75] = p, e[76] = x) : x = e[76];
	let b, v;
	e[77] !== t ? (b = s.jsx(Wt, {
		clientThreadId: t
	}), v = s.jsx(_t, {
		clientThreadId: t
	}), e[77] = t, e[78] = b, e[79] = v) : (b = e[78], v = e[79]);
	let ge;
	e[80] === Symbol.for("react.memo_cache_sentinel") ? (ge = s.jsx(wt, {}), e[80] = ge) : ge = e[80];
	let j;
	e[81] !== t ? (j = s.jsx(Pt, {
		clientThreadId: t
	}), e[81] = t, e[82] = j) : j = e[82];
	let pe;
	e[83] === Symbol.for("react.memo_cache_sentinel") ? (pe = s.jsx(Tt, {}), e[83] = pe) : pe = e[83];
	let C;
	e[84] !== t || e[85] !== x || e[86] !== b || e[87] !== v || e[88] !== j ? (C = s.jsxs(Me, {
		clientThreadId: t,
		children: [x, b, v, ge, j, pe]
	}), e[84] = t, e[85] = x, e[86] = b, e[87] = v, e[88] = j, e[89] = C) : C = e[89];
	let E;
	e[90] !== t || e[91] !== C ? (E = s.jsx(It, {
		clientThreadId: t,
		children: C
	}), e[90] = t, e[91] = C, e[92] = E) : E = e[92];
	let _;
	e[93] !== t || e[94] !== E ? (_ = s.jsx(Qt, {
		clientThreadId: t,
		children: E
	}), e[93] = t, e[94] = E, e[95] = _) : _ = e[95];
	let w;
	e[96] !== t || e[97] !== _ ? (w = s.jsx(kt, {
		clientThreadId: t,
		children: _
	}), e[96] = t, e[97] = _, e[98] = w) : w = e[98];
	let xe;
	e[99] === Symbol.for("react.memo_cache_sentinel") ? (xe = !1, e[99] = xe) : xe = e[99];
	let P;
	e[100] !== w ? (P = s.jsxs(Ye, {
		children: [w, xe]
	}), e[100] = w, e[101] = P) : P = e[101];
	let be;
	return e[102] !== ve || e[103] !== P ? (be = s.jsx(ht.Provider, {
		value: ve,
		children: P
	}), e[102] = ve, e[103] = P, e[104] = be) : be = e[104], be
}

function qt() {
	return qe.safeGet("/images/bootstrap", {})
}

function Zt({
	clientThreadId: a,
	setClientThreadId: e
}) {
	const {
		isOpen: i,
		isLoading: n
	} = yt();
	return !n && i ? s.jsx(Yt, {
		clientThreadId: a,
		setClientThreadId: e
	}) : null
}
typeof window < "u" && (window._g = Ht.GOKU_SERVICE);
export {
	ns as C, Gt as F
};
//# sourceMappingURL=ha9mj4sjaa8ls1is.js.map