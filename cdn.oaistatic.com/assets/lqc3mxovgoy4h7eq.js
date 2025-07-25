import {
	r as g,
	c as W,
	j as S
} from "./fyeo2h7okrqcf3nz.js";
import {
	a as G,
	b as H,
	M as ne,
	S as se,
	g as ae,
	E as ie,
	d as re,
	n as oe,
	i as le,
	t as ue,
	m as ce,
	k as de,
	e as pe,
	h as me,
	j as fe,
	p as he,
	l as ge,
	o as j,
	P as A,
	u as we,
	T as ve
} from "./ixsisjuxwij5x7d3.js";
import {
	G as Te,
	q as z,
	lG as Se,
	Q as xe,
	ck as Me,
	i5 as be,
	bE as ye,
	a3 as Ee,
	d4 as Ce,
	ee as Ie,
	aR as C,
	bn as _e,
	dL as De,
	dI as Pe,
	H as Re,
	gu as ke,
	bm as Oe,
	lH as He,
	aw as Ae,
	f as Fe,
	hb as Le
} from "./egb2c0f6p1ew61vt.js";
import {
	lk as $,
	ll as je,
	f8 as qe,
	eK as Ne,
	hj as Ue,
	lm as Ke,
	jx as Ve,
	ln as We,
	U as Ge,
	lo as ze,
	f1 as $e,
	f0 as Be,
	lp as Qe,
	lq as Xe,
	lr as Je,
	iq as Ye,
	ls as Ze,
	lt as et,
	lu as q,
	lv as tt,
	bS as nt,
	lw as N,
	lx as st
} from "./f7j18j5u52u1pnnk.js";
const at = 500;
class v {
	constructor(t, n) {
		this.items = t, this.eventCount = n
	}
	popEvent(t, n) {
		if (this.eventCount == 0) return null;
		let i = this.items.length;
		for (;; i--)
			if (this.items.get(i - 1).selection) {
				--i;
				break
			} let s, a;
		n && (s = this.remapping(i, this.items.length), a = s.maps.length);
		let o = t.tr,
			r, l, c = [],
			d = [];
		return this.items.forEach((p, u) => {
			if (!p.step) {
				s || (s = this.remapping(i, u + 1), a = s.maps.length), a--, d.push(p);
				return
			}
			if (s) {
				d.push(new T(p.map));
				let m = p.step.map(s.slice(a)),
					f;
				m && o.maybeStep(m).doc && (f = o.mapping.maps[o.mapping.maps.length - 1], c.push(new T(f, void 0, void 0, c.length + d.length))), a--, f && s.appendMap(f, a)
			} else o.maybeStep(p.step);
			if (p.selection) return r = s ? p.selection.map(s.slice(a)) : p.selection, l = new v(this.items.slice(0, i).append(d.reverse().concat(c)), this.eventCount - 1), !1
		}, this.items.length, 0), {
			remaining: l,
			transform: o,
			selection: r
		}
	}
	addTransform(t, n, i, s) {
		let a = [],
			o = this.eventCount,
			r = this.items,
			l = !s && r.length ? r.get(r.length - 1) : null;
		for (let d = 0; d < t.steps.length; d++) {
			let p = t.steps[d].invert(t.docs[d]),
				u = new T(t.mapping.maps[d], p, n),
				m;
			(m = l && l.merge(u)) && (u = m, d ? a.pop() : r = r.slice(0, r.length - 1)), a.push(u), n && (o++, n = void 0), s || (l = u)
		}
		let c = o - i.depth;
		return c > rt && (r = it(r, c), o -= c), new v(r.append(a), o)
	}
	remapping(t, n) {
		let i = new ne;
		return this.items.forEach((s, a) => {
			let o = s.mirrorOffset != null && a - s.mirrorOffset >= t ? i.maps.length - s.mirrorOffset : void 0;
			i.appendMap(s.map, o)
		}, t, n), i
	}
	addMaps(t) {
		return this.eventCount == 0 ? this : new v(this.items.append(t.map(n => new T(n))), this.eventCount)
	}
	rebased(t, n) {
		if (!this.eventCount) return this;
		let i = [],
			s = Math.max(0, this.items.length - n),
			a = t.mapping,
			o = t.steps.length,
			r = this.eventCount;
		this.items.forEach(u => {
			u.selection && r--
		}, s);
		let l = n;
		this.items.forEach(u => {
			let m = a.getMirror(--l);
			if (m == null) return;
			o = Math.min(o, m);
			let f = a.maps[m];
			if (u.step) {
				let w = t.steps[m].invert(t.docs[m]),
					h = u.selection && u.selection.map(a.slice(l + 1, m));
				h && r++, i.push(new T(f, w, h))
			} else i.push(new T(f))
		}, s);
		let c = [];
		for (let u = n; u < o; u++) c.push(new T(a.maps[u]));
		let d = this.items.slice(0, s).append(c).append(i),
			p = new v(d, r);
		return p.emptyItemCount() > at && (p = p.compress(this.items.length - i.length)), p
	}
	emptyItemCount() {
		let t = 0;
		return this.items.forEach(n => {
			n.step || t++
		}), t
	}
	compress(t = this.items.length) {
		let n = this.remapping(0, t),
			i = n.maps.length,
			s = [],
			a = 0;
		return this.items.forEach((o, r) => {
			if (r >= t) s.push(o), o.selection && a++;
			else if (o.step) {
				let l = o.step.map(n.slice(i)),
					c = l && l.getMap();
				if (i--, c && n.appendMap(c, i), l) {
					let d = o.selection && o.selection.map(n.slice(i));
					d && a++;
					let p = new T(c.invert(), l, d),
						u, m = s.length - 1;
					(u = s.length && s[m].merge(p)) ? s[m] = u: s.push(p)
				}
			} else o.map && i--
		}, this.items.length, 0), new v($.from(s.reverse()), a)
	}
}
v.empty = new v($.empty, 0);

function it(e, t) {
	let n;
	return e.forEach((i, s) => {
		if (i.selection && t-- == 0) return n = s, !1
	}), e.slice(n)
}
class T {
	constructor(t, n, i, s) {
		this.map = t, this.step = n, this.selection = i, this.mirrorOffset = s
	}
	merge(t) {
		if (this.step && t.step && !t.selection) {
			let n = t.step.merge(this.step);
			if (n) return new T(n.getMap().invert(), n, this.selection)
		}
	}
}
class x {
	constructor(t, n, i, s, a) {
		this.done = t, this.undone = n, this.prevRanges = i, this.prevTime = s, this.prevComposition = a
	}
}
const rt = 20;

function ot(e, t, n, i) {
	let s = n.getMeta(M),
		a;
	if (s) return s.historyState;
	n.getMeta(ct) && (e = new x(e.done, e.undone, null, 0, -1));
	let o = n.getMeta("appendedTransaction");
	if (n.steps.length == 0) return e;
	if (o && o.getMeta(M)) return o.getMeta(M).redo ? new x(e.done.addTransform(n, void 0, i, I(t)), e.undone, U(n.mapping.maps), e.prevTime, e.prevComposition) : new x(e.done, e.undone.addTransform(n, void 0, i, I(t)), null, e.prevTime, e.prevComposition);
	if (n.getMeta("addToHistory") !== !1 && !(o && o.getMeta("addToHistory") === !1)) {
		let r = n.getMeta("composition"),
			l = e.prevTime == 0 || !o && e.prevComposition != r && (e.prevTime < (n.time || 0) - i.newGroupDelay || !lt(n, e.prevRanges)),
			c = o ? _(e.prevRanges, n.mapping) : U(n.mapping.maps);
		return new x(e.done.addTransform(n, l ? t.selection.getBookmark() : void 0, i, I(t)), v.empty, c, n.time, r ?? e.prevComposition)
	} else return (a = n.getMeta("rebased")) ? new x(e.done.rebased(n, a), e.undone.rebased(n, a), _(e.prevRanges, n.mapping), e.prevTime, e.prevComposition) : new x(e.done.addMaps(n.mapping.maps), e.undone.addMaps(n.mapping.maps), _(e.prevRanges, n.mapping), e.prevTime, e.prevComposition)
}

function lt(e, t) {
	if (!t) return !1;
	if (!e.docChanged) return !0;
	let n = !1;
	return e.mapping.maps[0].forEach((i, s) => {
		for (let a = 0; a < t.length; a += 2) i <= t[a + 1] && s >= t[a] && (n = !0)
	}), n
}

function U(e) {
	let t = [];
	for (let n = e.length - 1; n >= 0 && t.length == 0; n--) e[n].forEach((i, s, a, o) => t.push(a, o));
	return t
}

function _(e, t) {
	if (!e) return null;
	let n = [];
	for (let i = 0; i < e.length; i += 2) {
		let s = t.map(e[i], 1),
			a = t.map(e[i + 1], -1);
		s <= a && n.push(s, a)
	}
	return n
}

function ut(e, t, n) {
	let i = I(t),
		s = M.get(t).spec.config,
		a = (n ? e.undone : e.done).popEvent(t, i);
	if (!a) return null;
	let o = a.selection.resolve(a.transform.doc),
		r = (n ? e.done : e.undone).addTransform(a.transform, t.selection.getBookmark(), s, i),
		l = new x(n ? r : a.remaining, n ? a.remaining : r, null, 0, -1);
	return a.transform.setSelection(o).setMeta(M, {
		redo: n,
		historyState: l
	})
}
let D = !1,
	K = null;

function I(e) {
	let t = e.plugins;
	if (K != t) {
		D = !1, K = t;
		for (let n = 0; n < t.length; n++)
			if (t[n].spec.historyPreserveItems) {
				D = !0;
				break
			}
	}
	return D
}
const M = new H("history"),
	ct = new H("closeHistory");

function dt(e = {}) {
	return e = {
		depth: e.depth || 100,
		newGroupDelay: e.newGroupDelay || 500
	}, new G({
		key: M,
		state: {
			init() {
				return new x(v.empty, v.empty, null, 0, -1)
			},
			apply(t, n, i) {
				return ot(n, i, t, e)
			}
		},
		config: e,
		props: {
			handleDOMEvents: {
				beforeinput(t, n) {
					let i = n.inputType,
						s = i == "historyUndo" ? Q : i == "historyRedo" ? P : null;
					return s ? (n.preventDefault(), s(t.state, t.dispatch)) : !1
				}
			}
		}
	})
}

function B(e, t) {
	return (n, i) => {
		let s = M.getState(n);
		if (!s || (e ? s.undone : s.done).eventCount == 0) return !1;
		if (i) {
			let a = ut(s, n, e);
			a && i(t ? a.scrollIntoView() : a)
		}
		return !0
	}
}
const Q = B(!1, !0),
	P = B(!0, !0),
	pt = "command_token",
	mt = {
		group: "inline",
		inline: !0,
		atom: !0,
		content: "text*",
		attrs: {
			id: "",
			hint: ""
		},
		selectable: !1,
		draggable: !1,
		toDOM: e => ["span", {
			"data-mention-id": e.attrs.id,
			"data-mention-hint": e.attrs.hint,
			class: "hint-pill"
		}, e.attrs.hint],
		parseDOM: [{
			tag: "span[data-mention-id][data-mention-hint]",
			getAttrs: e => {
				const t = e.getAttribute("data-mention-id"),
					n = e.getAttribute("data-mention-hint");
				return {
					id: t,
					hint: n
				}
			}
		}]
	};

function ft(e, t) {
	if (e.depth === 0) return;
	const n = e.nodeBefore?.text?.match(/^\/(\w*)$|\s\/(\w+)$/);
	if (n) {
		const i = n[1] ?? n[2],
			s = e.pos - i.length - 1,
			a = e.pos;
		return i.length > 0 && t ? void 0 : {
			queryText: i,
			range: {
				from: s,
				to: a
			}
		}
	}
}
const R = new H("systemHintPlugin");

function ht(e, t) {
	return e.setMeta(R, t), e
}

function Dt(e) {
	e.dispatch(ht(e.state.tr, {
		...k(),
		isDismissed: !0
	}))
}

function k() {
	return {
		queryText: "",
		active: !1,
		range: void 0,
		isDismissed: !1
	}
}

function V(e) {
	const {
		active: t,
		range: n,
		queryText: i,
		onHintMatch: s
	} = e;
	if (s) return s(!t || !n ? void 0 : {
		text: i,
		range: n
	})
}

function gt() {
	return new G({
		key: R,
		state: {
			init() {
				return k()
			},
			apply(e, t, n, i) {
				const s = e.getMeta(R),
					a = {
						...k(),
						...t,
						...s
					},
					o = e.selection;
				if (o.from !== o.to || i.doc.eq(n.doc)) return V(a), a;
				const r = o.$from,
					l = ft(r, t.isDismissed);
				return a.active = l != null, l && (a.queryText = l.queryText, a.range = l.range, a.isDismissed = !1), V(a), a
			}
		}
	})
}
const wt = ["p", 0],
	vt = ["br"],
	Tt = new se({
		nodes: {
			paragraph: {
				content: "inline*",
				group: "block",
				parseDOM: [{
					tag: "p",
					preserveWhitespace: "full"
				}],
				toDOM() {
					return wt
				}
			},
			text: {
				group: "inline"
			},
			hard_break: {
				inline: !0,
				group: "inline",
				selectable: !1,
				parseDOM: [{
					tag: "br"
				}],
				toDOM() {
					return vt
				}
			},
			[pt]: mt,
			doc: {
				content: "block+"
			}
		},
		marks: {}
	});

function St(e = null, t) {
	const n = new EventTarget,
		i = ae(t).enabled,
		s = new ie(null, {
			state: re.create({
				schema: Tt,
				plugins: [dt(), ce(), gt(), ...i ? [de()] : [], pe(), me({
					...j,
					"Shift-Enter": j.Enter,
					"Mod-z": Q,
					"Mod-y": P,
					"Mod-Shift-z": P
				}), fe(n), he(""), ge()]
			}),
			dispatchTransaction(a) {
				const o = s.state.apply(a);
				s.updateState(o), a.docChanged && n.dispatchEvent(new Event(ue))
			},
			handlePaste(a, o) {
				const r = o.clipboardData?.getData("text/plain");
				return r === void 0 ? !1 : (o.defaultPrevented || le(a, r), !0)
			},
			clipboardTextSerializer(a) {
				return oe(a.content).content
			}
		});
	return e != null && s.state.doc.textContent.trim().length === 0 && s.dispatch(s.state.tr.insertText(e)), s
}
const O = g.createContext(null),
	xt = e => {
		"use forget";
		const t = W.c(10),
			{
				children: n,
				clientThreadId: i,
				ignoreParentComposerController: s,
				draftsEnabled: a,
				isDefaultCollapsed: o
			} = e,
			r = s === void 0 ? !1 : s,
			l = a === void 0 ? !0 : a,
			c = g.useContext(O),
			d = z(),
			{
				isSingleLine: p
			} = je(),
			u = o !== void 0 ? !o : !p;
		let m, f;
		t[0] !== i || t[1] !== c || t[2] !== d || t[3] !== l || t[4] !== r || t[5] !== u ? (f = c && !r ? c : new A(St(l && i ? Se(xe(i))?.content ?? null : null, d), {
			isExpanded: u
		}), t[0] = i, t[1] = c, t[2] = d, t[3] = l, t[4] = r, t[5] = u, t[6] = f) : f = t[6], m = f;
		const w = m;
		let h;
		return t[7] !== n || t[8] !== w ? (h = S.jsx(O.Provider, {
			value: w,
			children: n
		}), t[7] = n, t[8] = w, t[9] = h) : h = t[9], h
	},
	Pt = () => {
		"use forget";
		const e = W.c(2),
			t = g.useContext(O);
		let n;
		return e[0] !== t ? (n = Te(t), e[0] = t, e[1] = n) : n = e[1], n
	};

function X() {
	return {
		clientThreadId: "",
		isLoggedInUser: !1,
		focusedObject: null,
		currentModelId: "",
		isModelLoaded: !1,
		isEmbeddedInFocusedView: !1,
		isInstalledApp: !1,
		onNewThread: () => {
			throw new Error("onNewThread not implemented")
		},
		onRequestCompletion: () => {
			throw new Error("onRequestCompletion not implemented")
		},
		resetThread: () => {
			throw new Error("resetThread not implemented")
		}
	}
}
const J = g.createContext(X());

function Mt() {
	try {
		return g.use(J)
	} catch {
		return X()
	}
}

function Rt({
	children: e,
	clientThreadId: t,
	setClientThreadId: n,
	routeType: i,
	prefetchSearchPromises: s
}) {
	const {
		createNewThread: a,
		resetThread: o
	} = qe({
		clientThreadId: t,
		setClientThreadId: n
	}), {
		data: r
	} = Me(), l = be(r), c = ye(t, E => E?.modelId), d = Ne(), p = l.id, u = c ?? p, m = Ee(), f = Ue(), {
		isUnauthenticated: w
	} = Ce(), h = !w, y = we(t), b = g.useMemo(() => ({
		clientThreadId: t,
		currentModelId: u,
		isModelLoaded: !!c,
		isEmbeddedInFocusedView: d,
		isInstalledApp: m,
		isLoggedInUser: h,
		focusedObject: f,
		onNewThread: a,
		onRequestCompletion: y,
		resetThread: o,
		prefetchSearchPromises: s,
		routeType: i
	}), [t, u, c, d, m, h, f, a, y, o, s, i]);
	return S.jsx(J.Provider, {
		value: b,
		children: S.jsx(xt, {
			clientThreadId: t,
			children: e
		})
	})
}

function kt() {
	const {
		store: e
	} = Ke(), t = Ie(), {
		clearSystemHintModeTrigger: n,
		getSystemHintModeTrigger: i
	} = Ve(), s = !We.useDisabledGlobally(), {
		onRequestCompletion: a
	} = Mt();
	return g.useCallback((o, r, l, c) => {
		const d = e.getSharedProps();
		if (!d) return;
		const {
			clientThreadId: p,
			onResetState: u,
			conversationMode: m
		} = d;
		Ge.hideThreadHeader();
		const f = t === C.Search,
			w = f ? i(C.Search) : void 0,
			h = _e(p),
			y = h?.selectedSources?.get(t) ?? new Set,
			{
				systemHints: b,
				extraStreamParams: E
			} = ze(r) ? {
				systemHints: r.categoryId !== "ask" ? [r.categoryId] : [],
				extraStreamParams: r.modelOverride ? {
					model: r.modelOverride
				} : {}
			} : $e(t ? [t] : []);
		s && (E.enableMessageFollowups = !0);
		const Y = b.includes(C.Slurm),
			F = Be(),
			L = {
				is_starter_prompt: !0,
				suggestion_type: r.type,
				starter_prompt_id: "id" in r ? r.id : void 0,
				selected_sources: Y ? Array.from(y.values()).map(te => De[te]).filter(Boolean) : void 0,
				...b.length > 0 && {
					system_hints: b
				}
			};
		F && (L.__internal = {
			search_settings: F
		});
		const Z = Pe(Qe(r), L);
		a({
			promptMessage: Z,
			sourceEvent: o,
			extraStreamParams: E,
			completionMetadata: {
				suggestions: l,
				suggestion: r,
				suggestionIndex: c,
				conversationMode: m ?? h?.mode,
				systemHints: b,
				searchSource: w
			}
		});
		const ee = Re.getCurrentNode(h).message.id;
		u(), Xe(r, c, p, ee), ke() || Je(), w && f && n(C.Search)
	}, [e, t, i, s, a, n])
}
const bt = .0025;

function Ot({
	composerController: e,
	composerType: t,
	renderInComposer: n
}) {
	const i = Oe(e.store, r => r.controlsDisabled),
		s = Ye(r => {
			r.contentRect && e.setWaveWidth(r.contentRect.width)
		}),
		a = g.useCallback((r, l, c) => {
			if (!(e instanceof A)) return;
			const d = e.getSelectionStart();
			e.setControlsDisabled(!1), requestAnimationFrame(() => {
				const {
					state: p,
					dispatch: u
				} = e.view;
				u(p.tr.insertText(r, d, d)), requestAnimationFrame(() => {
					e.setSelection(d + r.length)
				}), e.usedDictation = !0, e.dictationEdited = !1, e.dictationAssetPointer = l ?? null, e.dictationAssetTTL = c ?? null
			})
		}, [e]);
	return {
		whisperControls: i ? S.jsx(Ze, {
			initialValue: bt,
			onSuccess: a,
			onWaveformDataUpdate: e.setWaveformData,
			onExit: () => {
				e.setControlsDisabled(!1)
			},
			visualTreatment: t,
			buttonClassName: "h-9 min-h-9 w-9 min-w-9"
		}) : S.jsxs(S.Fragment, {
			children: [S.jsx(et, {
				size: "small",
				onExit: () => {
					e.setControlsDisabled(!0)
				},
				visualTreatment: t,
				buttonClassName: "h-9 min-h-9 w-9 min-w-9"
			}), n?.()]
		}),
		waveContainerRef: s,
		handleTranscriptionSuccess: a
	}
}
const Ht = ({
	composerController: e,
	placeholder: t,
	disableAutoFocus: n = !1,
	textareaMaxHeightClassName: i = "max-h-[25dvh]",
	fontSize: s = "base"
}) => {
	"use forget";
	const a = g.useRef(null),
		o = g.useRef(null),
		r = g.useRef(!1),
		l = z(),
		c = He(l),
		d = Ae(c.composer.autofocusDisabled$),
		p = n || d;
	return g.useEffect(() => {
		if (r.current) return;
		if (!(e instanceof A)) throw new Error(`Expected instance of ProseMirrorComposerController but got ${e.constructor.name}`);
		r.current = !0;
		const u = o.current;
		if (u != null) {
			const {
				value: m,
				selectionStart: f,
				selectionEnd: w
			} = u;
			e.view.dispatch(e.view.state.tr.insertText(m)), e.view.dispatch(e.view.state.tr.setSelection(ve.create(e.view.state.doc, f + 1, w + 1))), u.style.display = "none", u.value = ""
		}
		a.current.appendChild(e.view.dom), e.view.dom.id = q, e.view.dom.dataset.virtualkeyboard = "true", tt(e.view.dom), p || e.view.dom.focus()
	}, [e, p]), g.useEffect(() => {
		e.setPlaceholder(t)
	}, [t, e]), g.useEffect(() => {
		e.logPageMount()
	}, []), S.jsxs("div", {
		ref: a,
		onKeyDown: nt.prefetch,
		className: Fe([N["prosemirror-parent"], "text-token-text-primary", i, "max-h-52", "overflow-auto [scrollbar-width:thin]", Le() ? "firefox" : "default-browser"], "vertical-scroll-fade-mask"),
		"data-size": s !== "base" ? s : void 0,
		children: [S.jsx("textarea", {
			className: N.fallbackTextarea,
			name: q,
			autoFocus: !p,
			placeholder: t,
			ref: o,
			"data-virtualkeyboard": !0
		}), S.jsx(st, {
			scriptSrc: "window.__oai_logHTML?window.__oai_logHTML():window.__oai_SSR_HTML=window.__oai_SSR_HTML||Date.now();requestAnimationFrame((function(){window.__oai_logTTI?window.__oai_logTTI():window.__oai_SSR_TTI=window.__oai_SSR_TTI||Date.now()}))"
		})]
	})
};
export {
	xt as C, bt as I, Ht as R, Rt as a, St as b, O as c, Pt as d, Mt as e, kt as f, Dt as g, J as h, ht as s, Ot as u
};
//# sourceMappingURL=lqc3mxovgoy4h7eq.js.map