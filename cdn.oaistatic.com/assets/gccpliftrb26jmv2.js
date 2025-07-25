import {
	r as k,
	j as t,
	M as y,
	c as v,
	k as me,
	e as q,
	n as ne,
	A as pe,
	R as le
} from "./fyeo2h7okrqcf3nz.js";
import {
	m as ge,
	kO as He,
	eh as $e,
	kP as xe,
	dR as We,
	kQ as be,
	ik as Ve,
	k6 as Ke,
	kR as Qe,
	kS as Xe,
	kT as Se,
	kU as Ye,
	eB as E,
	kV as qe,
	y as ce,
	A as X,
	k7 as ae,
	J as Je,
	kW as Ze,
	kX as oe,
	j2 as et,
	aU as N,
	kY as tt,
	kZ as je,
	k_ as Y,
	k$ as st,
	l0 as ot,
	l1 as it,
	cA as ve,
	kg as nt,
	U as J,
	bb as at,
	l2 as rt,
	l3 as lt,
	l4 as ct,
	z as Z,
	l5 as dt,
	l6 as ut,
	ba as we,
	jT as ft,
	l7 as ye,
	l8 as ht,
	l9 as mt,
	ki as pt,
	la as gt,
	lb as xt,
	lc as bt,
	ld as St,
	le as jt,
	lf as vt,
	lg as wt
} from "./f7j18j5u52u1pnnk.js";
import {
	l as Ce,
	aS as Te,
	q as _,
	lB as yt,
	f0 as Ct,
	hp as Ne,
	L as ke,
	b as _e,
	w as ie,
	P as I,
	d3 as Ie,
	lC as Tt,
	f as C,
	cU as Nt,
	T as Pe,
	t as kt,
	F as _t,
	b5 as It,
	fm as Pt,
	a$ as Me,
	cl as Mt,
	f3 as ze,
	ax as zt,
	iK as H,
	dT as Et,
	d4 as Ee,
	bE as Ot,
	_ as At,
	x as Lt,
	H as Gt,
	cD as Bt,
	hj as Ut,
	e3 as Dt,
	e5 as Rt,
	eS as Ft,
	ez as Ht,
	eA as $t,
	s as Oe,
	N as Ae,
	B as Le,
	e2 as Wt,
	e0 as Vt,
	iE as Kt,
	i$ as Qt,
	j0 as de
} from "./egb2c0f6p1ew61vt.js";
import {
	e as re,
	f as Xt,
	S as Yt,
	g as qt,
	h as Jt,
	i as Ge,
	d as Zt
} from "./n0kwaugzg5mjzz0f.js";

function es({
	currentGizmoId: s
}) {
	"use forget";
	const e = Ce(),
		o = Te(_(), "3925590552"),
		i = ge(),
		{
			data: {
				gizmos: n = []
			} = {}
		} = He(),
		{
			topGizmos: a,
			remainingGizmos: r,
			hasUserCreatedGPTs: l
		} = k.useMemo(() => {
			const h = i ? n.filter(d => !yt(d.resource)) : n,
				{
					topGizmos: m,
					remainingGizmos: c
				} = $e(h, o),
				u = c.some(d => d.resource.gizmo.author.user_id === e?.authUserId);
			return {
				topGizmos: m,
				remainingGizmos: c,
				hasUserCreatedGPTs: u
			}
		}, [n, i, o, e]);
	if (!e || e.isQuorum()) return null;
	const f = (h = !0) => t.jsx(Ne, {
		name: "GizmoSidebarList",
		children: t.jsx(ts, {
			currentGizmoId: s,
			maxToShowOnLoad: 4,
			isUnifiedGptDropdownGrouping: o,
			showTopLevelGizmos: h,
			topGizmos: a,
			remainingGizmos: r,
			hasUserCreatedGPTs: l
		})
	});
	return t.jsxs(t.Fragment, {
		children: [f(), o && (r.length > 0 || l ? t.jsx(xe, {
			label: t.jsx(y, {
				id: "gizmo.exploreStoreEnabled.short",
				defaultMessage: "GPTs"
			}),
			icon: We,
			highlightTrailing: t.jsx(Ct, {
				className: "icon-sm",
				"aria-hidden": "true"
			}),
			children: f(!1)
		}) : t.jsx(be, {}))]
	})
}
const ts = s => {
	"use forget";
	const e = v.c(28),
		{
			currentGizmoId: o,
			maxToShowOnLoad: i,
			isUnifiedGptDropdownGrouping: n,
			showTopLevelGizmos: a,
			topGizmos: r,
			remainingGizmos: l,
			hasUserCreatedGPTs: f
		} = s,
		[h, m] = k.useState(!(ke.getItem(_e.IsGptListCollapsed) ?? !0)),
		c = Math.max(r.length, i);
	let u;
	e[0] !== l || e[1] !== r ? (u = [...r, ...l], e[0] = l, e[1] = r, e[2] = u) : u = e[2];
	let d = u;
	const x = d.length > c;
	if (x && !h && !n) {
		let g;
		e[3] !== d || e[4] !== c ? (g = d.slice(0, c - 1), e[3] = d, e[4] = c, e[5] = g) : g = e[5], d = g
	} else if (n) {
		let g;
		e[6] !== l || e[7] !== a || e[8] !== r ? (g = a ? [...r] : [...l], e[6] = l, e[7] = a, e[8] = r, e[9] = g) : g = e[9], d = g
	}
	let S;
	e[10] !== o || e[11] !== n || e[12] !== d || e[13] !== a ? (S = d.map(g => t.jsx(re, {
		gizmo: g.resource,
		isActive: g.resource.gizmo.id === o,
		flair: g.flair.kind,
		inGPTDropdown: n && !a
	}, g.resource.gizmo.id)), e[10] = o, e[11] = n, e[12] = d, e[13] = a, e[14] = S) : S = e[14];
	let p;
	e[15] !== f || e[16] !== n || e[17] !== d.length || e[18] !== a ? (p = n && !a && t.jsxs(t.Fragment, {
		children: [d.length > 0 && t.jsx(ie.Separator, {}), t.jsx(ie.LinkItem, {
			to: Ke(),
			icon: Ve,
			active: location.pathname === "/gpts",
			"data-testid": "explore-gpts-button",
			label: t.jsx(y, {
				id: "Dn83AT",
				defaultMessage: "Explore GPTs"
			})
		}), f && t.jsx(ie.LinkItem, {
			onClick: ss,
			to: Xe(),
			icon: Qe,
			active: location.pathname === "/gpts/mine",
			label: t.jsx(y, {
				id: "Az178v",
				defaultMessage: "My GPTs"
			})
		})]
	}), e[15] = f, e[16] = n, e[17] = d.length, e[18] = a, e[19] = p) : p = e[19];
	let b;
	e[20] !== n || e[21] !== x || e[22] !== h ? (b = !n && x && t.jsx(Se, {
		onClick: g => {
			g.preventDefault(), m(os)
		},
		icon: Ie,
		children: h ? t.jsx(y, {
			id: "GizmoSidebarList.showLess",
			defaultMessage: "Show less"
		}) : t.jsx(y, {
			id: "GizmoSidebarList.showMoreItems",
			defaultMessage: "Show more"
		})
	}), e[20] = n, e[21] = x, e[22] = h, e[23] = b) : b = e[23];
	let j;
	return e[24] !== S || e[25] !== p || e[26] !== b ? (j = t.jsxs(t.Fragment, {
		children: [S, p, b]
	}), e[24] = S, e[25] = p, e[26] = b, e[27] = j) : j = e[27], j
};

function ss() {
	I.logEvent("Sidebar Click My GPTs")
}

function os(s) {
	const e = !s;
	return ke.setItem(_e.IsGptListCollapsed, !e), e
}

function is({
	hasProjects: s
}) {
	const e = me(),
		o = q(),
		i = _(),
		[n, a] = k.useState(!1),
		{
			onDropConversation: r,
			canDropConversation: l
		} = Xt("sidebar_header_plus"),
		{
			eligibleNux: f
		} = ns({
			hasProjects: s
		}),
		{
			canCreate: h
		} = Tt(),
		m = t.jsx(Se, {
			className: C(n && "bg-token-bg-tertiary"),
			onDragEnter: c => {
				l && (c.preventDefault(), a(!0))
			},
			onDrop: c => {
				l && (c.preventDefault(), c.stopPropagation(), a(!1), r())
			},
			onDragLeave: () => {
				a(!1)
			},
			disabled: !h,
			icon: Ye,
			onClick: () => {
				Nt(i, ({
					onClose: c
				}) => t.jsx(qe, {
					onClose: c,
					onSuccess: u => {
						u && e(`/g/${u}/project`)
					}
				})), f && f.announcement.markAsViewed(), I.logEventWithStatsig("Projects: Create Open", "chatgpt_web_projects_create_open", {
					source: "sidebar_row_button"
				})
			},
			children: t.jsx(y, {
				...E.newProjectButton
			})
		});
	return h ? t.jsx(as, {
		nux: f,
		children: m
	}) : t.jsx(Pe, {
		label: o.formatMessage(E.createProjectDisabledByAdmin),
		children: m
	})
}

function ns({
	hasProjects: s
}) {
	const e = q(),
		o = _(),
		i = kt(o).checkGate("2711769261"),
		n = ce(X.hasSeenProjectsWebNuxTooltip),
		a = ce(X.hasSeenProjectsUpdateNuxTooltip),
		r = s && i && !a.isLoading && a.eligible,
		l = !r && !a.isLoading && !n.isLoading && n.eligible,
		f = {
			announcement: a,
			description: e.formatMessage(E.projectsUpdateTooltipDescription),
			key: X.hasSeenProjectsUpdateNuxTooltip,
			title: e.formatMessage(E.projectsUpdateTooltipTitle)
		},
		h = {
			announcement: n,
			description: e.formatMessage(E.projectsNuxTooltipDescription),
			key: X.hasSeenProjectsWebNuxTooltip,
			title: e.formatMessage(E.projectsNuxTooltipTitle)
		};
	let m = null;
	return r ? m = f : l && (m = h), {
		eligibleNux: m,
		projectUpdateTooltip: f,
		projectTooltip: h,
		showProjectUpdateTooltip: r,
		showProjectTooltip: l
	}
}

function as({
	children: s,
	nux: e
}) {
	const o = ae(),
		i = _t(),
		n = It();
	return !e || i || !n || !o ? t.jsx(t.Fragment, {
		children: s
	}) : t.jsx(Je, {
		announcementKey: e.key,
		theme: "bright",
		side: "right",
		show: !0,
		badge: "new",
		dismissOnOutsideClick: !0,
		title: e.title,
		description: e.description,
		onDismiss: e.announcement.markAsViewed,
		sideOffset: -5,
		children: s
	})
}

function rs({
	currentGizmoId: s
}) {
	return t.jsx(xe, {
		label: t.jsx(y, {
			...E.seeMoreProjectItems
		}),
		icon: Ie,
		children: t.jsx(Yt, {
			currentGizmoId: s,
			inSidebarFlyout: !0
		})
	})
}

function ls({
	snorlaxes: s,
	currentGizmoId: e
}) {
	return t.jsx(t.Fragment, {
		children: s.map(o => t.jsx(re, {
			gizmo: o.gizmo,
			isActive: o.gizmo.gizmo.id === e
		}, o.gizmo.gizmo.id))
	})
}

function cs({
	currentGizmoId: s
}) {
	const {
		snorlaxes: e,
		data: o,
		isLoading: i,
		isError: n,
		refetch: a,
		hasNextPage: r
	} = Ze(), l = e.slice(0, oe), f = et(s);
	_();
	const h = k.useRef(!1),
		[m, c] = k.useState(!0),
		u = k.useCallback(function(g) {
			g && c(!1), a()
		}, [a, c]),
		d = n || o === void 0 && !i && h.current;
	N.markStart("SnorlaxSidebarList", N.NS_SIDEBAR), o != null && !i && N.markRendered("SnorlaxSidebarList", N.NS_SIDEBAR), o === void 0 && !i && !h.current && (h.current = !0, u(!1));
	const S = e?.find(j => j.gizmo.gizmo.id === s),
		p = l.some(j => j.gizmo.gizmo.id === s),
		b = e && (e?.length > (!f || p ? oe : oe + 1) || r);
	return t.jsxs(t.Fragment, {
		children: [d && t.jsx(tt, {
			showRetry: m,
			refetch: u
		}), !d && t.jsx(je, {
			id: "snorlax-heading",
			children: !i && t.jsxs(t.Fragment, {
				children: [t.jsx(is, {
					hasProjects: e?.length > 0
				}), !1, t.jsx(ls, {
					snorlaxes: l,
					currentGizmoId: s
				}), S && !p && t.jsx(re, {
					gizmo: S.gizmo,
					isActive: !0
				}), b && t.jsx(rs, {
					currentGizmoId: s
				})]
			})
		})]
	})
}

function ds(s) {
	"use forget";
	const e = v.c(5),
		{
			clientThreadId: o,
			onNewThread: i
		} = s,
		n = Mt(o),
		a = ze(o),
		r = zt(),
		l = ge(),
		f = r ? void 0 : n;
	let h;
	return e[0] !== a || e[1] !== l || e[2] !== i || e[3] !== f ? (h = t.jsx(us, {
		currentGizmoId: a,
		activeId: f,
		isSnorlaxEnabled: l,
		onNewThread: i
	}), e[0] = a, e[1] = l, e[2] = i, e[3] = f, e[4] = h) : h = e[4], h
}

function us(s) {
	"use forget";
	const e = v.c(11),
		{
			currentGizmoId: o,
			activeId: i,
			isSnorlaxEnabled: n,
			onNewThread: a
		} = s,
		r = Te(_(), "3925590552");
	let l;
	e[0] !== a ? (l = t.jsx(ot, {
		onNewThread: a
	}), e[0] = a, e[1] = l) : l = e[1];
	const f = !Ce()?.isQuorum() && t.jsxs(t.Fragment, {
		children: [t.jsxs(je, {
			first: !0,
			children: [t.jsx(st, {}), !r && t.jsx(be, {}), t.jsx(Ne, {
				name: "GPTsSidebarList",
				children: t.jsx(es, {
					currentGizmoId: o
				})
			})]
		}), n && t.jsx(cs, {
			currentGizmoId: o
		})]
	});
	let h;
	e[2] === Symbol.for("react.memo_cache_sentinel") ? (h = null, e[2] = h) : h = e[2];
	let m;
	e[3] !== i ? (m = t.jsx(it, {
		activeId: i
	}), e[3] = i, e[4] = m) : m = e[4];
	let c;
	e[5] !== f || e[6] !== m ? (c = t.jsx(H, {
		fallback: null,
		children: t.jsxs(k.Suspense, {
			children: [f, h, m]
		})
	}), e[5] = f, e[6] = m, e[7] = c) : c = e[7];
	let u;
	return e[8] !== l || e[9] !== c ? (u = t.jsxs(t.Fragment, {
		children: [l, c]
	}), e[8] = l, e[9] = c, e[10] = u) : u = e[10], u
}

function Ds(s) {
	"use forget";
	const e = v.c(4),
		{
			clientThreadId: o,
			onNewThread: i
		} = s,
		n = _();
	let a;
	return e[0] !== o || e[1] !== n || e[2] !== i ? (a = Me(n) ? t.jsx(ds, {
		clientThreadId: o,
		onNewThread: i
	}) : null, e[0] = o, e[1] = n, e[2] = i, e[3] = a) : a = e[3], a
}

function fs(s) {
	"use forget";
	const e = v.c(22),
		{
			onNewThread: o
		} = s,
		i = q(),
		n = Pt(ms),
		a = qt();
	let r;
	e[0] !== i ? (r = i.formatMessage({
		id: "Q6nsOM",
		defaultMessage: "Close sidebar"
	}), e[0] = i, e[1] = r) : r = e[1];
	const l = r,
		f = k.useContext(Y),
		h = ae(),
		m = n?.visible && n.getTitlebarAreaRect().left > 0 ? "justify-end" : "justify-between";
	let c;
	e[2] !== m ? (c = C("h-header-height flex items-center", m), e[2] = m, e[3] = c) : c = e[3];
	let u;
	e[4] !== o ? (u = t.jsx(ps, {
		onNewThread: o
	}), e[4] = o, e[5] = u) : u = e[5];
	let d;
	e[6] !== a ? (d = a && t.jsx(Jt, {}), e[6] = a, e[7] = d) : d = e[7];
	const x = f === "popover" || h,
		S = f === "popover" ? "stage-popover-sidebar" : "stage-slideover-sidebar";
	let p;
	e[8] !== l || e[9] !== x || e[10] !== S ? (p = t.jsx(ve, {
		className: "no-draggable cursor-w-resize rtl:cursor-e-resize",
		color: "tertiary",
		"aria-expanded": x,
		"aria-controls": S,
		"aria-label": l,
		onClick: hs,
		icon: nt,
		mobileIcon: Et,
		"data-testid": "close-sidebar-button"
	}), e[8] = l, e[9] = x, e[10] = S, e[11] = p) : p = e[11];
	let b;
	e[12] !== l || e[13] !== p ? (b = t.jsx(Pe, {
		label: l,
		triggerAs: null,
		children: p
	}), e[12] = l, e[13] = p, e[14] = b) : b = e[14];
	let j;
	e[15] !== d || e[16] !== b ? (j = t.jsxs("div", {
		className: "flex",
		children: [d, b]
	}), e[15] = d, e[16] = b, e[17] = j) : j = e[17];
	let g;
	return e[18] !== j || e[19] !== c || e[20] !== u ? (g = t.jsxs("div", {
		id: "sidebar-header",
		className: c,
		children: [u, j]
	}), e[18] = j, e[19] = c, e[20] = u, e[21] = g) : g = e[21], g
}

function hs() {
	J.setSidebarOpen(!1)
}

function ms() {
	return navigator.windowControlsOverlay
}

function ps({
	onNewThread: s,
	testId: e
}) {
	const o = q();
	return t.jsx(ve, {
		onClick: i => {
			const n = i.currentTarget.closest("nav");
			if (n && n.scrollTop > 0) {
				n.scrollTo({
					top: 0,
					behavior: "smooth"
				}), i.preventDefault();
				return
			}
			rt(i, s)
		},
		icon: at,
		iconClassName: "icon-lg",
		color: "primary",
		"aria-label": o.formatMessage({
			id: "H6SRdK",
			defaultMessage: "Home"
		}),
		"data-testid": e,
		as: "link"
	})
}
const gs = () => {
		const s = me();
		return t.jsxs("div", {
			className: "flex h-full flex-col gap-2 p-3",
			children: [t.jsx(fs, {
				onNewThread: () => {
					lt(s)
				}
			}), t.jsx(xs, {}), t.jsx("div", {
				className: "flex items-center justify-center",
				children: t.jsx(ct, {})
			})]
		})
	},
	Be = "border border-token-border-xlight bg-token-sidebar-surface-secondary";

function T({
	className: s,
	width: e
}) {
	return t.jsx("div", {
		className: C("h-2.5 grow rounded-sm", Be, s),
		style: {
			maxWidth: e + "px"
		}
	})
}

function xs() {
	const s = t.jsx("div", {
		className: C("h-4 w-4 shrink-0 grow-0 rounded-full", Be)
	});
	return t.jsxs("div", {
		className: "mt-2 flex w-full grow flex-col gap-4 overflow-hidden px-2",
		style: {
			maskImage: "linear-gradient(to bottom, black 50%, transparent 100%)",
			WebkitMaskImage: "linear-gradient(to bottom, black 50%, transparent 100%)"
		},
		children: [t.jsxs("div", {
			className: "flex flex-row items-center justify-start gap-3",
			children: [s, t.jsx(T, {
				width: 80
			})]
		}), t.jsxs("div", {
			className: "flex flex-row items-center justify-start gap-3",
			children: [s, t.jsx(T, {
				width: 120
			})]
		}), t.jsxs("div", {
			className: "flex flex-row items-center justify-start gap-3",
			children: [s, t.jsx(T, {
				width: 100
			})]
		}), t.jsx("div", {
			className: "mt-5 flex flex-row items-center justify-start gap-3",
			children: t.jsx(T, {
				width: 150
			})
		}), t.jsxs("div", {
			className: "flex flex-row items-center justify-start gap-3",
			children: [s, t.jsx(T, {
				width: 50
			})]
		}), t.jsxs("div", {
			className: "flex flex-row items-center justify-start gap-3",
			children: [s, t.jsx(T, {
				width: 100
			})]
		}), t.jsxs("div", {
			className: "mb-5 flex flex-row items-center justify-start gap-3",
			children: [s, t.jsx(T, {
				width: 80
			})]
		}), [120, 180, 160, 100, 90, 190, 140, 120, 180, 170, 100, 120, 180, 150].map((e, o) => t.jsx("div", {
			className: "flex flex-row items-center justify-start py-1",
			children: t.jsx(T, {
				width: e
			})
		}, o))]
	})
}

function Rs(s) {
	"use forget";
	const e = v.c(2),
		{
			onNewChatButtonClick: o
		} = s,
		{
			isUnauthenticated: i,
			isLoading: n
		} = Ee();
	if (n || !i) return null;
	let a;
	return e[0] !== o ? (a = t.jsx(Ge, {
		className: "me-3",
		onClick: () => {
			I.logNewChatButtonClicked({
				location: "Mobile header"
			}), o()
		}
	}), e[0] = o, e[1] = a) : a = e[1], a
}

function Fs(s) {
	"use forget";
	const e = v.c(9),
		{
			onNewChatButtonClick: o,
			clientThreadId: i
		} = s,
		{
			isUnauthenticated: n,
			isLoading: a
		} = Ee(),
		r = dt(),
		l = ze(i),
		f = Ot(i, Gt.getIsNewConversation),
		h = At(),
		m = f && h && !n && !l,
		c = _();
	let u;
	e[0] !== c ? (u = Lt(c, "2118136551").get("make_signup_sticky", !1), e[0] = c, e[1] = u) : u = e[1];
	const d = u;
	if (a) return null;
	if (n) {
		let b;
		return e[2] !== r || e[3] !== d ? (b = d ? t.jsxs("div", {
			className: "flex items-center justify-center gap-2",
			children: [t.jsx(fe, {}), t.jsx(ue, {})]
		}) : r ? t.jsx(fe, {}) : t.jsx(ue, {}), e[2] = r, e[3] = d, e[4] = b) : b = e[4], b
	}
	let x;
	e[5] !== o ? (x = t.jsx(Ge, {
		onClick: () => {
			I.logNewChatButtonClicked({
				location: "Mobile header"
			}), o()
		}
	}), e[5] = o, e[6] = x) : x = e[6];
	const S = x;
	if (!m) return S;
	let p;
	return e[7] !== i ? (p = t.jsx(ut, {
		variant: "secondary",
		clientThreadId: i
	}), e[7] = i, e[8] = p) : p = e[8], p
}

function ue() {
	"use forget";
	const s = v.c(8),
		e = we();
	let o;
	s[0] === Symbol.for("react.memo_cache_sentinel") ? (o = {
		id: "navigation.signUpButtonText",
		defaultMessage: "Sign up",
		description: "Button text for Sign up button"
	}, s[0] = o) : o = s[0];
	const i = ft(o);
	let n;
	s[1] !== e ? (n = () => {
		e({
			authType: "signup",
			callback: bs
		})
	}, s[1] = e, s[2] = n) : n = s[2];
	let a;
	s[3] !== i ? (a = t.jsx(y, {
		...i
	}), s[3] = i, s[4] = a) : a = s[4];
	let r;
	return s[5] !== n || s[6] !== a ? (r = t.jsx(Le, {
		as: "button",
		size: "small",
		color: "primary",
		onClick: n,
		children: a
	}), s[5] = n, s[6] = a, s[7] = r) : r = s[7], r
}

function bs(s) {
	I.logSignUpButtonClicked({
		location: "Mobile Chat Stage Header",
		provider: s
	})
}

function fe() {
	"use forget";
	const s = v.c(5),
		e = we();
	let o;
	s[0] !== e ? (o = () => {
		e({
			authType: "login",
			callback: Ss
		})
	}, s[0] = e, s[1] = o) : o = s[1];
	let i;
	s[2] === Symbol.for("react.memo_cache_sentinel") ? (i = t.jsx(y, {
		...Bt.logInButtonText
	}), s[2] = i) : i = s[2];
	let n;
	return s[3] !== o ? (n = t.jsx(Le, {
		as: "button",
		size: "small",
		color: "primary",
		onClick: o,
		"data-testid": "mobile-login-button",
		children: i
	}), s[3] = o, s[4] = n) : n = s[4], n
}

function Ss(s) {
	I.logLogInButtonClicked({
		location: "Mobile Chat Stage Header",
		provider: s
	})
}

function js(s) {
	"use forget";
	const e = v.c(7),
		{
			onClick: o
		} = s,
		i = Zt(gt, pt, !1, !0),
		n = Z(vs);
	let a;
	e[0] === Symbol.for("react.memo_cache_sentinel") ? (a = t.jsx("span", {
		className: "sr-only",
		children: t.jsx(y, {
			id: "navigation.openSidebar",
			defaultMessage: "Open sidebar"
		})
	}), e[0] = a) : a = e[0];
	let r;
	e[1] !== i ? (r = t.jsx(i, {
		className: "icon-lg text-token-text-secondary mx-2"
	}), e[1] = i, e[2] = r) : r = e[2];
	let l;
	return e[3] !== n || e[4] !== o || e[5] !== r ? (l = t.jsxs("button", {
		type: "button",
		className: "hover:text-token-text-primary touch:h-10 touch:w-10 inline-flex h-9 w-9 items-center justify-center rounded-md focus:ring-2 focus:ring-white focus:outline-hidden focus:ring-inset active:opacity-50",
		onClick: o,
		"data-testid": "open-sidebar-button",
		"aria-expanded": n,
		"aria-controls": "stage-popover-sidebar",
		children: [a, r]
	}), e[3] = n, e[4] = o, e[5] = r, e[6] = l) : l = e[6], l
}

function vs(s) {
	return s.isPopoverSidebarOpen
}
const ws = s => {
	"use forget";
	const e = v.c(21),
		{
			rightContentExpanded: o,
			onOpenSidebar: i,
			children: n,
			showNavSidebar: a,
			leftContent: r,
			rightContent: l,
			bottomContent: f
		} = s,
		m = Z(Ns) ? "[box-shadow:var(--sharp-edge-top-shadow)]" : "[box-shadow:var(--sharp-edge-top-shadow-placeholder)]";
	let c;
	e[0] !== m ? (c = C("draggable h-header-height bg-token-bg-primary sticky top-0 z-10 flex items-center justify-center border-transparent ps-0 md:hidden", m), e[0] = m, e[1] = c) : c = e[1];
	let u;
	e[2] !== r || e[3] !== i || e[4] !== a ? (u = (a || r) && t.jsxs("div", {
		className: "no-draggable absolute start-0 top-0 bottom-0 ms-2 inline-flex items-center justify-center",
		children: [a && t.jsx(js, {
			onClick: i
		}), r]
	}), e[2] = r, e[3] = i, e[4] = a, e[5] = u) : u = e[5];
	let d;
	e[6] !== n ? (d = t.jsx("div", {
		className: "no-draggable",
		children: n
	}), e[6] = n, e[7] = d) : d = e[7];
	let x;
	e[8] !== l || e[9] !== o ? (x = l && t.jsx("div", {
		className: C("no-draggable absolute end-0 top-0 bottom-0 me-2 inline-flex items-center justify-center", o && "start-10"),
		children: l
	}), e[8] = l, e[9] = o, e[10] = x) : x = e[10];
	let S;
	e[11] !== c || e[12] !== u || e[13] !== d || e[14] !== x ? (S = t.jsxs("div", {
		className: c,
		children: [u, d, x]
	}), e[11] = c, e[12] = u, e[13] = d, e[14] = x, e[15] = S) : S = e[15];
	let p;
	e[16] !== f ? (p = f && t.jsx("div", {
		className: "no-draggable bg-token-bg-primary flex w-full items-center justify-center md:hidden",
		children: f
	}), e[16] = f, e[17] = p) : p = e[17];
	let b;
	return e[18] !== S || e[19] !== p ? (b = t.jsxs(t.Fragment, {
		children: [S, p]
	}), e[18] = S, e[19] = p, e[20] = b) : b = e[20], b
};

function ys(s) {
	"use forget";
	const e = v.c(4),
		{
			isPopover: o,
			children: i,
			forceOpenDesktopSidebar: n
		} = s,
		a = o === void 0 ? !1 : o;
	N.markStart("StageNavigationSidebar"), N.markRendered("StageNavigationSidebar");
	let r;
	return e[0] !== i || e[1] !== n || e[2] !== a ? (r = a ? t.jsx(Ts, {
		children: i
	}) : t.jsx(Cs, {
		forceOpenDesktopSidebar: n,
		children: i
	}), e[0] = i, e[1] = n, e[2] = a, e[3] = r) : r = e[3], r
}
const Ue = {
		type: "spring",
		bounce: .1,
		duration: .35
	},
	he = {
		...Ue,
		duration: .4
	},
	Cs = s => {
		"use forget";
		const e = v.c(23),
			{
				style: o,
				children: i,
				forceOpenDesktopSidebar: n
			} = s;
		ye(ks), N.trackNamespace(N.NS_SIDEBAR);
		const a = Ut(),
			r = ae() || n,
			l = a ? mt : Ue,
			f = r ? "var(--sidebar-width)" : "var(--sidebar-rail-width)",
			h = r ? "var(--bg-elevated-secondary)" : "var(--bg-primary)";
		let m;
		e[0] !== f || e[1] !== h ? (m = {
			width: f,
			backgroundColor: h
		}, e[0] = f, e[1] = h, e[2] = m) : m = e[2];
		const c = r ? "pointer-events-none opacity-0" : "opacity-100",
			u = r ? "motion-safe:[transition-timing-function:steps(1,end)]" : "motion-safe:[transition-timing-function:steps(1,start)]";
		let d;
		e[3] !== c || e[4] !== u ? (d = C("absolute inset-0", c, u, "motion-safe:transition-opacity motion-safe:duration-150"), e[3] = c, e[4] = u, e[5] = d) : d = e[5];
		let x;
		e[6] !== r || e[7] !== d ? (x = t.jsx(Y.Provider, {
			value: "tiny_bar",
			children: t.jsx(ht, {
				className: d,
				inert: r,
				onOpen: _s
			})
		}), e[6] = r, e[7] = d, e[8] = x) : x = e[8];
		const S = r ? "opacity-100" : "pointer-events-none opacity-0";
		let p;
		e[9] !== S ? (p = C(S, "motion-safe:transition-opacity motion-safe:duration-150 motion-safe:ease-linear", "bg-token-bg-elevated-secondary h-full w-[var(--sidebar-width)] overflow-x-clip overflow-y-auto text-clip whitespace-nowrap"), e[9] = S, e[10] = p) : p = e[10];
		const b = !r;
		let j;
		e[11] !== i || e[12] !== p || e[13] !== b ? (j = t.jsx(Y.Provider, {
			value: "expanded_sidebar",
			children: t.jsx("div", {
				className: p,
				inert: b,
				children: i
			})
		}), e[11] = i, e[12] = p, e[13] = b, e[14] = j) : j = e[14];
		let g;
		e[15] !== j || e[16] !== x ? (g = t.jsxs("div", {
			className: "relative flex h-full flex-col",
			children: [x, j]
		}), e[15] = j, e[16] = x, e[17] = g) : g = e[17];
		let w;
		return e[18] !== o || e[19] !== l || e[20] !== g || e[21] !== m ? (w = t.jsx(ne.div, {
			className: "border-token-border-light z-21 h-full shrink-0 overflow-hidden border-e max-md:hidden",
			transition: l,
			initial: !1,
			animate: m,
			style: o,
			id: "stage-slideover-sidebar",
			children: g
		}), e[18] = o, e[19] = l, e[20] = g, e[21] = m, e[22] = w) : w = e[22], w
	},
	Ts = s => {
		"use forget";
		const e = v.c(11),
			{
				children: o
			} = s;
		ye(Is);
		const i = Z(Ps);
		let n;
		e[0] !== i ? (n = i && t.jsx(Dt, {
			asChild: !0,
			children: t.jsx(ne.div, {
				className: "fixed inset-0 z-10 bg-gray-50/50 dark:bg-black/50",
				transition: he,
				initial: {
					opacity: 0
				},
				animate: {
					opacity: 1
				},
				exit: {
					opacity: 0,
					transition: {
						duration: .12
					}
				}
			})
		}), e[0] = i, e[1] = n) : n = e[1];
		let a;
		e[2] !== o || e[3] !== i ? (a = i && t.jsx(Rt, {
			asChild: !0,
			onOpenAutoFocus: zs,
			children: t.jsxs(ne.div, {
				className: "bg-token-sidebar-surface-primary top-banner-visible:bottom-0 top-banner-visible:top-(--top-banner-height,0px) top-banner-visible:h-auto fixed start-0 top-0 z-50 h-full w-[var(--sidebar-width)] max-w-xs border-e border-gray-200 shadow-[0_0_64px_0_rgba(0,0,0,0.07)] [view-transition-name:var(--sidebar-popover)] focus:outline-hidden dark:border-gray-800",
				transition: he,
				id: "stage-popover-sidebar",
				initial: {
					translateX: "-100%"
				},
				animate: {
					translateX: "0"
				},
				exit: {
					translateX: "-100%",
					transition: {
						duration: .12
					}
				},
				children: [t.jsx(Ft, {
					asChild: !0,
					children: t.jsxs(Ht, {
						children: [t.jsx(y, {
							id: "navigation.sidebarTitle",
							defaultMessage: "Sidebar"
						}), t.jsx($t, {})]
					})
				}), t.jsx(Y.Provider, {
					value: "popover",
					children: o
				})]
			})
		}), e[2] = o, e[3] = i, e[4] = a) : a = e[4];
		let r;
		e[5] !== n || e[6] !== a ? (r = t.jsx(Wt, {
			forceMount: !0,
			children: t.jsxs(pe, {
				children: [n, a]
			})
		}), e[5] = n, e[6] = a, e[7] = r) : r = e[7];
		let l;
		return e[8] !== i || e[9] !== r ? (l = t.jsx(Vt, {
			open: i,
			onOpenChange: Ms,
			children: r
		}), e[8] = i, e[9] = r, e[10] = l) : l = e[10], l
	};

function Ns(s) {
	return s.isConversationScrolledFromTop
}

function ks() {
	Oe.count(Ae.DEFAULT, "chatgpt_sidebar_show", {
		key: "type",
		value: "slideover"
	}), I.logEvent("Sidebar Show", {
		type: "slideover"
	})
}

function _s() {
	return J.setSidebarOpen(!0)
}

function Is() {
	Oe.count(Ae.DEFAULT, "chatgpt_sidebar_show", {
		key: "type",
		value: "popover"
	}), I.logEvent("Sidebar Show", {
		type: "popover"
	})
}

function Ps(s) {
	return s.isPopoverSidebarOpen
}

function Ms(s) {
	J.setPopoverSidebarOpen(s)
}

function zs(s) {
	s.preventDefault()
}

function De(s) {
	"use forget";
	const e = v.c(44),
		{
			children: o,
			hideNavigation: i,
			mobileHeaderContent: n,
			mobileHeaderRightContentExpanded: a,
			mobileHeaderLeftContent: r,
			mobileHeaderRightContent: l,
			mobileHeaderBottomContent: f,
			kaur1br5HeaderContent: h,
			renderNavSidebar: m,
			threadFlyout: c,
			forceOpenDesktopSidebar: u
		} = s,
		d = i === void 0 ? !1 : i,
		x = u === void 0 ? !1 : u,
		S = _(),
		p = !Me(S),
		b = Z(Os),
		j = Kt(),
		g = xt(),
		w = Qt();
	let P, M;
	e[0] !== o ? (P = [], M = null, le.Children.forEach(o, Q => {
		le.isValidElement(Q) && (Q.type === De.Sidebars ? M = Q : P.push(Q))
	}), e[0] = o, e[1] = P, e[2] = M) : (P = e[1], M = e[2]);
	const z = !p && !d && m != null,
		ee = !d && (z || p) && !0;
	let $;
	e[3] !== w ? ($ = w ? de(w, "summarizer") : !1, e[3] = w, e[4] = $) : $ = e[4];
	const Re = $,
		Fe = w ? !de(w, "summarizer") : !1,
		te = j && (Re || Fe);
	let W;
	e[5] === Symbol.for("react.memo_cache_sentinel") ? (W = t.jsx(H, {
		children: t.jsx(bt, {})
	}), e[5] = W) : W = e[5];
	const se = b !== "popover-nav" && "z-0";
	let O;
	e[6] !== se ? (O = C("relative flex h-full w-full flex-1 transition-colors", se), e[6] = se, e[7] = O) : O = e[7];
	let A;
	e[8] !== x || e[9] !== g || e[10] !== p || e[11] !== m || e[12] !== z ? (A = z && t.jsx(ys, {
		isPopover: g,
		forceOpenDesktopSidebar: x,
		children: p ? t.jsx(gs, {}) : m?.()
	}), e[8] = x, e[9] = g, e[10] = p, e[11] = m, e[12] = z, e[13] = A) : A = e[13];
	let L;
	e[14] !== A ? (L = t.jsx(pe, {
		initial: !1,
		children: A
	}), e[14] = A, e[15] = L) : L = e[15];
	let G;
	e[16] !== f || e[17] !== n || e[18] !== a || e[19] !== r || e[20] !== l || e[21] !== ee || e[22] !== z ? (G = ee && t.jsxs(H, {
		children: [t.jsx(St, {}), t.jsx(ws, {
			rightContentExpanded: a,
			onOpenSidebar: Es,
			showNavSidebar: z,
			leftContent: r,
			rightContent: l,
			bottomContent: f,
			children: n
		})]
	}), e[16] = f, e[17] = n, e[18] = a, e[19] = r, e[20] = l, e[21] = ee, e[22] = z, e[23] = G) : G = e[23];
	let B;
	e[24] !== P ? (B = t.jsx("main", {
		className: "transition-width relative h-full w-full flex-1 overflow-auto",
		id: "main",
		"z-index": "-1",
		children: P
	}), e[24] = P, e[25] = B) : B = e[25];
	let U;
	e[26] !== h || e[27] !== B || e[28] !== G ? (U = t.jsxs("div", {
		className: "relative flex h-full max-w-full flex-1 flex-col",
		children: [h, G, B]
	}), e[26] = h, e[27] = B, e[28] = G, e[29] = U) : U = e[29];
	let D;
	e[30] !== U || e[31] !== L ? (D = t.jsxs("div", {
		className: "relative flex h-full w-full flex-row",
		children: [L, U]
	}), e[30] = U, e[31] = L, e[32] = D) : D = e[32];
	let R;
	e[33] !== te || e[34] !== c ? (R = t.jsx(H, {
		children: t.jsx(jt, {
			isExpanded: te,
			children: c
		})
	}), e[33] = te, e[34] = c, e[35] = R) : R = e[35];
	let F;
	e[36] !== M || e[37] !== D || e[38] !== R || e[39] !== O ? (F = t.jsxs("div", {
		className: O,
		children: [D, R, M]
	}), e[36] = M, e[37] = D, e[38] = R, e[39] = O, e[40] = F) : F = e[40];
	let V;
	e[41] === Symbol.for("react.memo_cache_sentinel") ? (V = t.jsxs(H, {
		children: [t.jsx(vt, {}), t.jsx(wt, {
			useManuallyControlledVisibility: !0
		})]
	}), e[41] = V) : V = e[41];
	let K;
	return e[42] !== F ? (K = t.jsxs("div", {
		className: "flex h-full w-full flex-col",
		children: [W, F, V]
	}), e[42] = F, e[43] = K) : K = e[43], K
}

function Es() {
	return J.setSidebarOpen(!0)
}

function Os(s) {
	return s.activeSidebar
}

function As(s) {
	"use forget";
	const e = v.c(2),
		{
			children: o
		} = s;
	let i;
	return e[0] !== o ? (i = t.jsx(t.Fragment, {
		children: o
	}), e[0] = o, e[1] = i) : i = e[1], i
}
De.Sidebars = As;
export {
	Ds as C, us as S, fs as a, De as b, Rs as c, Fs as d
};
//# sourceMappingURL=gccpliftrb26jmv2.js.map