const __vite__mapDeps = (i, m = __vite__mapDeps, d = (m.f || (m.f = ["assets/o5kl3wi3wtwn5az4.js", "assets/fyeo2h7okrqcf3nz.js", "assets/f7j18j5u52u1pnnk.js", "assets/egb2c0f6p1ew61vt.js", "assets/root-dql6y2cb.css", "assets/conversation-small-k592qa8k.css", "assets/ofmiup6ydz1fs6o2.js", "assets/f4tzu8sdieowklrc.js", "assets/dup61y1xup93qiwe.js", "assets/c23qs8vlzi0dfzmn.js", "assets/bpokd9vbsmautf8l.js", "assets/rf0g5an270sitvii.js", "assets/kqvul1fuft32toim.js", "assets/mtx41j31lzyyzsit.js", "assets/ixsisjuxwij5x7d3.js", "assets/c8aibeoyjmvq859x.js", "assets/b5mw1mm1timwd209.js", "assets/lqc3mxovgoy4h7eq.js", "assets/pfhnsp0zjzx4ay05.js", "assets/ijq9sqhuqui0rsqs.js", "assets/np62wv8wj4i0jtdl.js", "assets/falvn1u1m9kfl56g.js", "assets/pc2givv05uuq8g6l.js", "assets/ia4gjlhup29rqu2j.js", "assets/ha8fmsbxx7xv171r.js", "assets/dlxldtpg3t60aqlu.js", "assets/f2cokc4vvw85wf3h.js", "assets/1bp4cm2fzdhd3kwi.js", "assets/ouwf5w0wd8jhugii.js", "assets/ouw0nw4bl1cp8aa6.js", "assets/jazub75ldxizbo1c.js", "assets/mzyzasgbz23m2y8p.js", "assets/d1d70ux3rr4m4rg8.js", "assets/i5nn6f8zwa17ysxa.js", "assets/nxwgap24p9bwcyaq.js", "assets/c8bihwfbbx5vccs6.js", "assets/emwinm0zlo0fdecc.js", "assets/gmdf9rdonf8komut.js", "assets/pbl95wx6493wq92j.js", "assets/d007yjle2atvv0vb.js", "assets/cot-message-n4x930jt.css", "assets/nsbo82gctyvm2v8f.js", "assets/jxu0jvvr8sbqjtgc.js", "assets/e148leij17ilxav8.js"]))) => i.map(i => d[i]);
import {
	bD as fe,
	aQ as ze,
	bE as X,
	B as $,
	aZ as W,
	dI as oe,
	P as Ie,
	hX as Ue,
	H as re,
	bB as Z,
	bA as He,
	aM as G,
	f as ae,
	c as Je,
	ft as Ke,
	q as ge,
	cU as $e,
	cB as Ne,
	em as Ee,
	fJ as We,
	b6 as Ye,
	cC as qe,
	cL as Ce,
	aS as Qe,
	i7 as d,
	dG as Ze,
	cE as Xe,
	f3 as Ge,
	s as es,
	N as ss,
	bn as ts,
	aR as ns,
	kt as K,
	cZ as v,
	be as as,
	iC as os,
	dJ as ke,
	br as rs,
	iY as we,
	aY as is,
	cN as ls,
	hp as cs,
	c_ as k
} from "./egb2c0f6p1ew61vt.js";
import {
	r as x,
	j as e,
	M as w,
	A as us,
	n as ds,
	e as he,
	f as ms
} from "./fyeo2h7okrqcf3nz.js";
import {
	$ as Te,
	lA as fs,
	lB as gs,
	lC as hs,
	lD as ps,
	hn as T,
	lE as xs,
	lF as ys,
	y as _s,
	A as js,
	lG as bs,
	U as vs,
	lH as Ss,
	lI as Cs,
	eM as ks,
	lJ as ws,
	lK as Ts,
	lL as Ms,
	eX as As,
	eY as Is,
	h0 as Ns,
	iK as Es,
	c3 as Os,
	lM as de,
	i5 as Ps,
	lN as Ds,
	lO as Bs,
	lP as Rs,
	lQ as Ls,
	lR as Vs,
	lS as Fs,
	eO as zs,
	lT as Us,
	lU as Hs,
	lV as Js,
	lW as Ks,
	lX as Me,
	lY as $s,
	lZ as Ws,
	l_ as Ys,
	l$ as qs,
	dA as Qs,
	c6 as Zs
} from "./f7j18j5u52u1pnnk.js";
import {
	u as Oe,
	r as Pe
} from "./ixsisjuxwij5x7d3.js";
import {
	g as me,
	F as De,
	u as Xs
} from "./np62wv8wj4i0jtdl.js";
import {
	i as Gs,
	C as et
} from "./f2cokc4vvw85wf3h.js";
import {
	e as st
} from "./lqc3mxovgoy4h7eq.js";

function tt(s, n, o) {
	const t = n.elements.length;
	if (t === 0) return;
	const i = Object.entries(s).reduce((a, [m, u]) => Array.isArray(u) ? u.length > 0 ? a + 1 : a : u !== "" ? a + 1 : a, 0);
	Ie.logEventWithStatsig("dynamic-form-submission", "chatgpt_dyanmic_form_submission", {
		...Ue({
			clientThreadId: o
		}),
		totalItems: t.toString(),
		completedItems: i.toString(),
		ratio: (i / t).toString()
	})
}

function nt(s, n) {
	let o = "";
	return n.elements.forEach(t => {
		const i = t.scope.split("/").pop(),
			a = i && s[i],
			m = a ? Array.isArray(a) ? a.join(", ") : a : "Any",
			u = t.label ?? i;
		o += `${u}: ${m}
`
	}), o
}

function at({
	messages: s,
	clientThreadId: n,
	isLastMessage: o
}) {
	const t = s.find(_ => _.author.role === fe.Assistant),
		i = s.find(_ => _.metadata?.json_form),
		a = i?.metadata?.json_form,
		[m, u] = x.useState({}),
		[f, g] = x.useState(),
		[l, c] = x.useState(),
		p = ze.useStore(),
		b = Oe(n);
	x.useEffect(() => {
		a && (g(a.json_form_ui), c(a.json_form_data))
	}, [a]);
	const S = x.useCallback(() => {
			if (u({}), f) {
				const _ = {
					...f,
					elements: f.elements.filter(R => R.scope !== "#/properties/AdditionalInfo")
				};
				g(_)
			}
			l && (delete l.properties.AdditionalInfo, c(l))
		}, [u, g, c, f, l]),
		M = x.useCallback(() => {
			if (f) {
				const _ = {
					...f,
					elements: [...f.elements, {
						type: "Control",
						scope: "#/properties/AdditionalInfo",
						label: "Additional Info",
						placeholder: "Any other details..."
					}]
				};
				g(_)
			}
			if (l) {
				const _ = {
					...l.properties,
					AdditionalInfo: {
						type: "string"
					}
				};
				c({
					...l,
					properties: _
				})
			}
		}, [g, c, f, l]),
		O = f?.elements.some(_ => _.scope.endsWith("#/properties/AdditionalInfo")),
		A = X(n, re.getCurrentLeafId),
		C = i?.id !== A;
	if (!i || !l || !f) return t?.status === "in_progress" && o ? e.jsxs("div", {
		className: "flex flex-col gap-2",
		children: [e.jsx(Te, {
			className: "h-[26px] w-full"
		}), e.jsx(Te, {
			className: "h-[26px] w-3/4"
		}), e.jsx(fs, {})]
	}) : null;
	if (C) return null;
	const B = async _ => {
		const R = p.getActiveSystemHintType(),
			I = nt(m, f);
		tt(m, f, n), b({
			sourceEvent: _,
			promptMessage: oe(I),
			completionMetadata: {
				systemHints: R ? [R] : [],
				conversationMode: {
					kind: W.PrimaryAssistant
				}
			}
		})
	};
	return e.jsxs(gs, {
		children: [e.jsx(ot, {
			formData: m,
			dataSchema: l,
			uiSchema: f,
			setData: u,
			readOnly: C
		}), e.jsxs("div", {
			className: "flex w-full justify-between",
			children: [O ? e.jsx("div", {}) : e.jsx($, {
				disabled: C,
				onClick: M,
				color: "secondary",
				className: "text-token-text-secondary",
				children: e.jsx(w, {
					id: "Sen69P",
					defaultMessage: "Add a detail"
				})
			}), e.jsxs("div", {
				className: "flex gap-2",
				children: [e.jsx($, {
					disabled: C,
					onClick: S,
					color: "secondary",
					className: "text-token-text-secondary",
					children: e.jsx(w, {
						id: "Uqo7UD",
						defaultMessage: "Reset"
					})
				}), e.jsx($, {
					disabled: C,
					onClick: B,
					children: e.jsx(w, {
						id: "FVou++",
						defaultMessage: "Start"
					})
				})]
			})]
		})]
	})
}

function ot({
	dataSchema: s,
	uiSchema: n,
	setData: o,
	readOnly: t,
	formData: i
}) {
	return e.jsx("div", {
		children: e.jsx(hs, {
			formData: i,
			readOnly: t,
			schema: s,
			uiSchema: n,
			onChange: a => o(a)
		})
	})
}
const rt = (s, n) => {
		const o = [],
			t = [],
			i = [],
			a = [],
			m = "";
		if (s.every(l => l.author.name === He.n7jupd_m)) {
			if (!n) return;
			const l = G(s);
			return [{
				type: T.N7jupdLoading,
				needs_startup: l?.metadata?.needs_startup ?? !1
			}]
		}
		for (const l of s) {
			if (l.content.content_type === Z.ComputerOutput) {
				const c = {
					...l.content.screenshot,
					vmMetadata: l.metadata?.n7jupd_v,
					messageId: l.id
				};
				o.push(c)
			}
			if (l.content.content_type === Z.Text && l.recipient?.includes("computer") && t.push({
					type: l.recipient,
					parts: l.content.parts.join("")
				}), l.content.content_type === Z.StructuredThoughts)
				for (const c of l.content.thoughts) c.summary && (i.push(c.summary), a.push(c.content))
		}
		const u = !1,
			f = [],
			g = Math.min(o.length, a.length);
		for (let l = 0; l < g; l++) {
			const c = o[l],
				{
					domain: p
				} = me(c),
				b = {
					type: T.ComputerOutput,
					screenshots: [c],
					text: m,
					messages: s,
					thoughts: [i[l]],
					fullThoughts: [a[l]],
					actions: t,
					isBlank: !p
				};
			f.push(b)
		}
		if (o.length > g) {
			const l = o.slice(g);
			if (f.length === 0) f.push({
				type: T.ComputerOutput,
				screenshots: l,
				text: m,
				messages: s,
				thoughts: [],
				fullThoughts: [],
				actions: t,
				isBlank: u
			});
			else {
				const c = f[f.length - 1];
				c.screenshots.push(...l), c.isBlank && (c.isBlank = l.every(p => !me(p).domain) && c.isBlank)
			}
		}
		if (a.length > g)
			for (let l = g; l < a.length; l++) f.push({
				type: T.ComputerOutput,
				screenshots: [],
				text: m,
				messages: s,
				thoughts: [i[l]],
				fullThoughts: [a[l]],
				actions: t,
				isBlank: !0
			});
		return !f.length && (o.length || a.length) ? [{
			type: T.ComputerOutput,
			screenshots: o,
			text: m,
			messages: s,
			thoughts: i,
			fullThoughts: a,
			actions: t,
			isBlank: u
		}] : f
	},
	Zt = s => {
		const n = s.messages[0];
		let o;
		switch (n.author.name) {
			case "browser.search": {
				const t = n.metadata?.n7jupd_title ?? "Searched",
					i = n.metadata?.n7jupd_urls ?? [];
				o = {
					type: T.Search,
					queries: [{
						type: "search",
						q: t
					}],
					sources: i.map(a => ({
						type: "search_result_group",
						domain: a,
						entries: [{
							type: "search_result",
							url: a,
							title: "",
							snippet: "",
							ref_id: null,
							content_type: null,
							pub_date: null
						}]
					}))
				};
				break
			}
		}
		if (!(!o || !o.sources.length)) return [o]
	},
	Ae = /connector_[0-9a-f]{32}/i,
	Xt = s => {
		const n = ps();
		if (!n) return;
		const o = s.messages[0];
		if (!o) return;
		const t = o.metadata?.n7jupd_subtool;
		if (t?.subtool?.includes("search")) return [{
			type: T.N7jupdAPI,
			action: "n7jupd_as"
		}];
		if (t?.subtool?.includes("api_doc")) return [{
			type: T.N7jupdAPI,
			action: "n7jupd_ag"
		}];
		let a = o.metadata?.n7jupd_subtool?.generic_api_func?.match(Ae)?.[0] ?? void 0;
		a || (a = o.metadata?.n7jupd_url?.match(Ae)?.[0] ?? void 0);
		const m = n?.get(a ?? "");
		if (!a || !m) return [{
			type: T.N7jupdAPI,
			action: "n7jupd_cf"
		}];
		if (s.messages.length > 1 && s.messages[1].metadata?.connector_source && s.messages[1].content.content_type === Z.TetherBrowsingDisplay) {
			if (s.messages[1].metadata?.display_url && s.messages[1].metadata?.display_title) return [{
				type: T.N7jupdAPI,
				action: "n7jupd_cf",
				source: m,
				fetchResult: {
					url: s.messages[1].metadata?.display_url,
					title: s.messages[1].metadata?.display_title
				}
			}];
			const u = it(s.messages[1].content.result);
			if (u.length) return [{
				type: T.N7jupdAPI,
				action: "n7jupd_cs",
				source: m,
				searchResults: u.map(([f, g]) => ({
					url: f,
					title: g
				}))
			}]
		}
		return [{
			type: T.N7jupdAPI,
			action: "n7jupd_cf",
			source: m
		}]
	};

function it(s) {
	const n = s.replace(/^\s*L\d+:\s*/gm, ""),
		o = [],
		t = [];
	for (let c = 0; c < n.length; c++) {
		const p = n[c];
		if (p === "{") t.push(c);
		else if (p === "}") {
			if (t.length === 0) continue;
			const b = t.pop();
			o.push({
				start: b,
				end: c
			})
		}
	}
	const i = ["display_url", "web_link", "url", "web_url"],
		a = ["display_title", "title", "name", "path", "subject", "summary"],
		m = c => c.replace(/[-\/\\^$*+?.()|[\]{}]/g, "\\$&"),
		u = (c, p) => {
			const b = [];
			for (const S of c) {
				const M = new RegExp(`"${m(S)}"\\s*:\\s*"([^"]+)"`, "g");
				for (const O of p.matchAll(M)) b.push(O[1].replace(/\n/g, ""))
			}
			return b
		},
		f = [];
	for (const {
			start: c,
			end: p
		}
		of o) {
		const b = n.slice(c, p + 1),
			S = u(i, b),
			M = u(a, b),
			O = Math.min(S.length, M.length);
		for (let A = 0; A < O; A++) f.push([S[A], M[A]])
	}
	const g = new Map;
	for (const [c, p] of f) g.set(`${c}|||${p}`, [c, p]);
	return Array.from(g.values())
}
const lt = ({
		content: s
	}) => e.jsx(De, {
		className: ae(ys.markdown, "text-token-text-secondary text-sm"),
		componentOverrides: {
			code: n => e.jsx(xs, {
				...n,
				wrapperClassName: "",
				showActionBar: !1
			})
		},
		children: s
	}),
	ct = "I took control of the virtual browser. If you're unsure what changed, ask for more context. If the task is complete, just acknowledge and wrap it up. Otherwise, please proceed.",
	D = Je(() => ({
		token: null,
		clientThreadId: null,
		isOpen: !1,
		chunk: null,
		parentMessageId: null
	})),
	Gt = (s, n) => {
		D.setState(o => ({
			...o,
			clientThreadId: s,
			token: n
		}))
	},
	ut = () => {
		const s = ge(),
			n = _s(js.hasSeenOdysseyTakeoverModal),
			o = async () => {
				D.setState({
					isOpen: !0
				}), vs.setSidebarOpen(!1);
				const {
					clientThreadId: t
				} = D.getState();
				if (!t) {
					Ne.info("VNC modal opened without a client thread id");
					return
				}
				const i = await Ss(t);
				D.setState({
					parentMessageId: i?.last_message_id
				})
			};
		return async () => {
			if (n.eligible) {
				$e(s, bs, {
					onConfirm: async () => {
						n.markAsViewed(), await o()
					}
				});
				return
			}
			await o()
		}
	},
	dt = async (s, {
		startNewTurn: n
	}) => {
		D.setState({
			isOpen: !1
		});
		const {
			clientThreadId: o
		} = D.getState();
		if (!o) {
			Ne.info("VNC modal closed without a client thread id");
			return
		}
		if (!n) return;
		const t = mt();
		await Pe({
			ctx: s,
			clientThreadId: o,
			eventSource: "mouse",
			promptMessage: oe(ct, {
				is_takeover_ended_message: !0
			}),
			parentMessageIdPromise: t,
			completionMetadata: {
				systemHints: [Ee],
				conversationMode: {
					kind: W.PrimaryAssistant
				}
			}
		})
	}, mt = (s = 5e3) => new Promise(n => {
		const {
			parentMessageId: o
		} = D.getState();
		if (o) return n(o);
		const t = setTimeout(() => {
				i(), n(void 0)
			}, s),
			i = D.subscribe(a => {
				a.parentMessageId && (n(a.parentMessageId), clearTimeout(t), i())
			})
	}), en = () => {
		D.setState({
			token: null,
			clientThreadId: null,
			isOpen: !1
		})
	}, ft = s => {
		D.setState(n => ({
			...n,
			chunk: s
		}))
	}, Be = () => {
		const s = ut(),
			n = D(i => ({
				token: i.token,
				clientThreadId: i.clientThreadId,
				isOpen: i.isOpen,
				open: s,
				close: dt,
				setChunk: ft
			})),
			t = !Ke();
		return x.useMemo(() => ({
			...n,
			isVNCEnabled: t
		}), [n, t])
	}, gt = ({
		chunk: s,
		isStreaming: n,
		isExpanded: o,
		isLast: t,
		isLastComputerUse: i,
		firstScreenshotIndex: a,
		isAgentVisualCoT: m = !1
	}) => {
		const {
			open: u,
			isOpen: f,
			isVNCEnabled: g
		} = Be(), l = x.useRef(null), c = x.useRef(null), [p, b] = x.useState(a ?? null), S = s.screenshots.at(p ?? -1), M = s.fullThoughts?.at(-1), O = s.thoughts?.at(-1), A = M ?? O, C = s.actions?.at(-1), B = Xs(S, void 0), [_, R] = x.useState(!m);
		x.useEffect(() => {
			if (!m) return;
			const N = c.current;
			if (!N) return;
			const L = new IntersectionObserver(q => {
				q.forEach(le => {
					le.isIntersecting && (R(!0), L.unobserve(N))
				})
			}, {
				root: null,
				rootMargin: "200px",
				threshold: .01
			});
			return L.observe(N), () => {
				L.disconnect()
			}
		}, [m]);
		const [I, ee] = x.useState(null), [pe, se] = x.useState(!1), {
			origin: V,
			domain: F
		} = x.useMemo(() => me(S), [S]);
		x.useEffect(() => {
			if (!B || !_) return;
			let N = !1;
			const L = new Image;
			return se(!1), L.src = B, L.onload = () => {
				!N && ee(B)
			}, L.onerror = () => {
				!N && ee(null), !N && se(!0)
			}, () => {
				N = !0
			}
		}, [B, _]), C?.type === "computer.click" && Cs(C.parts);

		function ie() {
			u()
		}
		const Y = !V || !F;
		return m ? e.jsxs("div", {
			className: "flex w-full flex-col items-center justify-center gap-4 sm:flex-row sm:items-start",
			children: [A && e.jsx("div", {
				className: "text-token-text-secondary flex-1 text-sm",
				children: A
			}), S && e.jsxs("div", {
				ref: c,
				className: "border-token-border-heavy mt-1 flex aspect-[1024/764] w-40 items-center justify-center overflow-hidden rounded-lg border",
				children: [_ && I && e.jsx(ks, {
					src: I,
					alt: "screenshot",
					className: "flex aspect-[1024/764] w-40 items-center justify-center overflow-hidden",
					children: e.jsx("img", {
						src: I,
						alt: "screenshot",
						className: "h-full w-full object-cover object-bottom"
					}, I)
				}), !_ && e.jsx("div", {
					className: "border-token-border-heavy h-4 w-4 animate-spin rounded-full border-2 border-t-transparent"
				})]
			})]
		}) : S ? e.jsx(us, {
			mode: "wait",
			children: e.jsxs(ds.div, {
				className: "flex flex-1 cursor-default flex-col gap-2",
				initial: {
					opacity: 0
				},
				animate: {
					opacity: 1
				},
				exit: {
					opacity: 0
				},
				transition: {
					duration: .4,
					ease: "easeInOut"
				},
				children: [o && e.jsx("div", {
					className: ae("text-token-text-secondary text-sm", t && "loading-shimmer"),
					children: S ? n && t ? e.jsx(w, {
						id: "odyssey.using-browser",
						defaultMessage: "Using the browser"
					}) : e.jsx(w, {
						id: "odyssey.used-browser",
						defaultMessage: "Used the browser"
					}) : n && t ? e.jsx(w, {
						id: "odyssey.setting-up",
						defaultMessage: "Setting up environment"
					}) : e.jsx(w, {
						id: "odyssey.setup-complete",
						defaultMessage: "Environment setup complete"
					})
				}), e.jsxs("div", {
					className: "border-token-border-heavy group bg-token-bg-tertiary relative flex w-full flex-col overflow-hidden rounded-2xl border",
					ref: l,
					children: [e.jsx("div", {
						className: "align-start flex flex-row gap-1 px-1 pt-1 text-sm",
						children: e.jsx(ws, {
							tabs: [{
								icon: V ?? "",
								label: F ?? ""
							}],
							activeTab: F,
							setActiveTab: () => {},
							initializing: Y
						})
					}), e.jsxs("div", {
						className: "relative w-full rounded-b-2xl",
						children: [e.jsxs("div", {
							className: "bg-token-bg-primary relative aspect-[1024/698] w-full overflow-hidden rounded-b-2xl",
							children: [I && e.jsx("img", {
								src: I,
								alt: "screenshot",
								className: "absolute inset-0 h-full w-full object-cover object-bottom"
							}, I), !I && e.jsx("div", {
								className: "absolute inset-0 flex items-center justify-center",
								children: Y || B ? e.jsx("div", {
									className: "flex items-center justify-center gap-2",
									children: e.jsx("div", {
										className: "border-token-border-heavy h-4 w-4 animate-spin rounded-full border-2 border-t-transparent"
									})
								}) : e.jsx("span", {
									className: "text-token-text-secondary text-sm",
									children: e.jsx(w, {
										id: "odyssey.no-preview",
										defaultMessage: "Preview unavailable"
									})
								})
							})]
						}), (t || p != null) && !f && e.jsx(Ts, {
							chunk: s,
							containerRef: l,
							cropAmountPx: 68,
							currentScreenshotIdx: p
						})]
					}), n && g && i && e.jsx("div", {
						className: "absolute inset-0 z-100 flex h-full w-full items-center justify-center bg-black/50 opacity-0 transition-opacity group-hover:opacity-100",
						children: e.jsx($, {
							color: "primary-inverse",
							onClick: ie,
							children: e.jsx("div", {
								className: "flex items-center gap-1",
								children: e.jsx("div", {
									children: e.jsx(w, {
										id: "odyssey.take-over",
										defaultMessage: "Take over"
									})
								})
							})
						})
					}), (!n || !i) && e.jsx(Ms, {
						numEntries: s.screenshots.length,
						currentIndex: p ?? s.screenshots.length - 1,
						onChange: b
					})]
				})]
			}, "card")
		}) : M ? e.jsx(lt, {
			content: M
		}) : null
	}, ht = ({
		clientThreadId: s,
		messageId: n,
		renderClosestScreenshot: o
	}) => {
		const t = X(s, m => {
				const f = re.getConversationTurns(m).find(c => c.messages.some(p => p.id === n));
				return f ? rt([...f.messages], !1)?.find(c => c.type === T.ComputerOutput) : null
			}),
			i = x.useMemo(() => {
				if (!t) return null;
				if (o) {
					const g = t.screenshots.findIndex(l => l.messageId === n);
					return g === -1 ? null : g
				}
				const m = {};
				t.screenshots.forEach((g, l) => {
					m[g.messageId] = l
				});
				const u = t.messages.findIndex(g => g.id === n),
					f = t.messages.slice(u).find(g => m[g.id]);
				return f ? m[f.id] : null
			}, [t, n, o]),
			a = i ?? (t ? t.screenshots.length - 1 : 0);
		return o && i === null || !t || !t.screenshots.length ? null : e.jsx("div", {
			children: e.jsx("div", {
				className: "relative flex flex-1 cursor-default flex-col gap-2",
				children: e.jsx(gt, {
					chunk: t,
					firstScreenshotIndex: a,
					isExpanded: !1,
					isComplete: !0,
					isStreaming: !1,
					isLast: !1
				})
			})
		})
	};

function pt(s, n, o) {
	const t = he(),
		i = Oe(s);
	return x.useCallback(async () => await i({
		promptMessage: oe(t.formatMessage({
			id: "3qSZZF",
			defaultMessage: "I understand the risks. Please continue"
		}), {
			user_acknowledges_pim: !0,
			system_hints: n
		}),
		completionMetadata: {
			systemHints: n,
			conversationMode: o
		},
		eventSource: "mouse"
	}), [i, o, n, t])
}
const xt = ({
	onMarkSafe: s,
	justification: n,
	clientThreadId: o,
	flaggedMessageId: t
}) => {
	const [i, a] = x.useState(!1), m = he(), u = x.useCallback(() => a(!1), []);
	return e.jsxs(e.Fragment, {
		children: [e.jsx(Ye, {
			testId: "modal-confirm-close-editor",
			isOpen: i,
			size: "custom",
			className: "max-w-xl",
			onClose: u,
			type: "warning",
			hideSeparator: !1,
			title: e.jsx("span", {
				className: "text-xl",
				children: e.jsx(w, {
					id: "lzy3Zg",
					defaultMessage: "Potentially Malicious Content Detected"
				})
			}),
			primaryButton: e.jsx(Ce.Button, {
				title: m.formatMessage({
					id: "E82qxN",
					defaultMessage: "Mark safe and continue"
				}),
				color: "danger",
				onClick: s
			}),
			secondaryButton: e.jsx(Ce.Button, {
				title: m.formatMessage({
					id: "byfawg",
					defaultMessage: "Don't mark safe"
				}),
				color: "secondary",
				onClick: u
			}),
			showCloseButton: !0,
			closeButton: e.jsx(qe, {
				onClick: u
			}),
			children: e.jsxs("div", {
				children: [e.jsx("div", {
					className: "text-md text-token-text-secondary pb-2",
					children: n ? e.jsx(De, {
						children: n
					}) : e.jsx(w, {
						id: "KKOtp0",
						defaultMessage: "This webpage contained hidden instructions that may be attempting to extract sensitive information. You should only continue if you're sure this content is safe."
					})
				}), !!t && e.jsx(ht, {
					clientThreadId: o,
					messageId: t,
					renderClosestScreenshot: !0
				})]
			})
		}), e.jsx($, {
			color: "danger",
			onClick: () => a(!0),
			children: e.jsx(w, {
				id: "5L93Tx",
				defaultMessage: "Continue"
			})
		})]
	})
};

function yt({
	children: s,
	isFinalTurn: n,
	hasActiveRequest: o,
	conversationMode: t,
	clientThreadId: i,
	justification: a,
	flaggedMessageId: m
}) {
	const u = X(i, l => re.findNode(l, c => c.message.author.role === fe.User)?.message),
		f = x.useMemo(() => u?.metadata?.system_hints, [u]),
		g = pt(i, f, t);
	return e.jsxs("div", {
		children: [e.jsxs("div", {
			className: "bg-token-main-surface-secondary mt-1 flex gap-2 rounded-2xl px-3 py-2",
			children: [e.jsx(We, {
				className: "icon-xl mt-2"
			}), e.jsx("div", {
				children: s
			})]
		}), n && !o && e.jsx("div", {
			className: "mt-2",
			children: e.jsx(_t, {
				onMarkSafe: g,
				justification: a,
				flaggedMessageId: m,
				clientThreadId: i
			})
		})]
	})
}

function _t({
	onMarkSafe: s,
	justification: n,
	clientThreadId: o,
	flaggedMessageId: t
}) {
	return e.jsx("div", {
		children: e.jsx(xt, {
			onMarkSafe: s,
			justification: n,
			clientThreadId: o,
			flaggedMessageId: t
		})
	})
}
const jt = ({
		currentGroupedMessage: s,
		isLastMessage: n,
		isLastTurnInConversation: o,
		clientThreadId: t,
		turnIndex: i
	}) => {
		const a = G(s?.messages),
			m = a && Gs(a) && !a.metadata?.auto_proceed_cancelled && o;
		return e.jsxs("div", {
			className: "flex flex-col",
			children: [m && e.jsx(et, {
				clientThreadId: t,
				lastMessage: a,
				turnIndex: i
			}), o && n && e.jsx(As, {
				children: ({
					isScheduled: u,
					isScheduledRun: f
				}) => u && !f && e.jsx(Is, {})
			}), e.jsx(bt, {
				currentGroupedMessage: s,
				isLastMessage: n,
				isLastTurnInConversation: o
			})]
		})
	},
	bt = ({
		currentGroupedMessage: s,
		isLastMessage: n,
		isLastTurnInConversation: o
	}) => {
		const {
			formatMessage: t
		} = he(), {
			open: i,
			isVNCEnabled: a
		} = Be(), {
			clientThreadId: m
		} = st(), u = ge(), f = Qe(u, "733205176"), g = x.useMemo(() => !a || !f || !n || !o || s.type !== d.Text ? null : s.messages[0], [s, n, o, f, a]);
		if (!g) return null;
		const l = g.metadata?.n7jupd_button_type;
		if (!l || l === "confirmation") return null;
		const c = async () => {
			await Pe({
				ctx: u,
				clientThreadId: m,
				eventSource: "mouse",
				promptMessage: oe("Yes, please proceed"),
				parentMessageId: g.id,
				completionMetadata: {
					systemHints: [Ee],
					conversationMode: {
						kind: W.PrimaryAssistant
					}
				}
			})
		}, p = b => {
			switch (b) {
				case "takeover":
					return i();
				case "login":
					return i();
				case "confirmation":
					return c()
			}
		};
		return e.jsx("div", {
			className: "my-2 flex",
			children: e.jsx($, {
				onClick: () => p(l),
				children: t(vt[l])
			})
		})
	},
	vt = ms({
		takeover: {
			id: "odyssey-message-indicator.takeover",
			defaultMessage: "Take over"
		},
		login: {
			id: "odyssey-message-indicator.login",
			defaultMessage: "Log in"
		},
		confirmation: {
			id: "odyssey-message-indicator.confirm",
			defaultMessage: "Confirm"
		}
	}),
	St = v(() => k(() => import("./o5kl3wi3wtwn5az4.js"), __vite__mapDeps([0, 1, 2, 3, 4, 5]))),
	Ct = v(() => k(() => import("./ofmiup6ydz1fs6o2.js"), __vite__mapDeps([6, 1, 3, 4]))),
	kt = v(() => k(() => import("./f4tzu8sdieowklrc.js"), __vite__mapDeps([7, 1, 3, 4, 2, 5]))),
	wt = v(() => k(() => import("./dup61y1xup93qiwe.js"), __vite__mapDeps([8, 1, 3, 4, 9, 10, 2, 5, 11, 12, 13, 14]))),
	Tt = v(async () => () => null);
v(async () => () => null);
const Mt = v(async () => (await k(() => import("./c8aibeoyjmvq859x.js"), __vite__mapDeps([15, 3, 1, 4, 11, 2, 5, 12, 16, 17, 14, 18, 19, 20, 21, 22, 23, 24, 25, 26]))).ImageGenMessage),
	At = v(() => k(() => import("./1bp4cm2fzdhd3kwi.js"), __vite__mapDeps([27, 1, 3, 4, 2, 5]))),
	It = v(() => k(() => import("./ijq9sqhuqui0rsqs.js"), __vite__mapDeps([19, 1, 3, 4, 2, 5])).then(s => s.BrowsingMessage)),
	Nt = v(() => k(() => import("./ouwf5w0wd8jhugii.js"), __vite__mapDeps([28, 1, 3, 4, 2, 5])).then(s => s.SearchResultMessage)),
	Et = v(() => k(() => import("./ouw0nw4bl1cp8aa6.js"), __vite__mapDeps([29, 1, 3, 4, 2, 5, 30])).then(s => s.JITPluginMessage)),
	Ot = v(() => k(() => import("./mzyzasgbz23m2y8p.js"), __vite__mapDeps([31, 3, 1, 4, 32, 2, 5])).then(s => s.DataAnalysisMessage)),
	Pt = v(() => k(() => import("./i5nn6f8zwa17ysxa.js"), __vite__mapDeps([33, 1, 3, 4, 2, 5]))),
	Dt = v(() => k(() => import("./nxwgap24p9bwcyaq.js"), __vite__mapDeps([34, 1, 3, 4, 35, 18, 2, 5, 12, 19, 20, 21, 17, 14, 22, 23, 24, 25, 36, 37, 38, 39, 26, 40])).then(s => s.LegacyCoTMessage)),
	Bt = v(() => k(() => import("./c8bihwfbbx5vccs6.js"), __vite__mapDeps([35, 1, 3, 4, 18, 2, 5, 12, 19, 20, 21, 17, 14, 22, 23, 24, 25, 36, 37, 38, 39, 26, 40])).then(s => s.CoT)),
	Rt = v(() => k(() => import("./nsbo82gctyvm2v8f.js"), __vite__mapDeps([41, 1, 3, 4, 2, 5, 42, 43])).then(s => s.JawboneMessage)),
	Lt = v(async () => () => null);

function Vt(s) {
	if (s.some(n => n.type === d.SearchGPTQuery)) {
		const o = s.filter(i => i.type === K).flatMap(i => i.groups),
			t = o.flatMap(i => i.messages.map(a => a.metadata?.search_turns_count)).findLast(i => i != null);
		return t != null ? t > 1 : function() {
			const a = o.filter(f => f.type === d.StructuredThoughts),
				m = o.filter(f => f.type === d.CoTSearchTool),
				u = (() => {
					function f(l) {
						return l.type === d.StructuredThoughts && l.messages.flatMap(c => c.content).some(c => c.content_type === Z.StructuredThoughts && c.thoughts.length > 0)
					}
					let g = !1;
					for (const l of o)
						if (l.type === d.CoTSearchTool) g = !0;
						else if (f(l) && g) return !0;
					return !1
				})();
			return a.length > 1 || m.length > 1 || u
		}()
	}
	return !0
}

function Ft(s, n) {
	return s.type === K ? G(s.groups)?.messages[0].metadata?.is_visually_hidden_reasoning_group && n === 0 : !1
}

function sn({
	groupedMessagesToRender: s,
	allMessages: n,
	allGroupedMessages: o,
	clientThreadId: t,
	isUserTurn: i,
	isCompletionRequestInProgress: a,
	isFeedbackEnabled: m,
	isFinalTurn: u,
	isFinalUserTurn: f,
	isFinalAssistantTurn: g,
	turnIndex: l,
	hasActiveRequest: c,
	onRequestCompletion: p,
	shouldGrowContainer: b = !0,
	isParagen: S = !1,
	renderingView: M = "chat",
	hasN7JUPD: O = !1
}) {
	const {
		showDebugConversationTurns: A
	} = Ze(), [C] = X(t, r => [r?.mode]), B = ge(), _ = Xe(t), R = Ge(t), I = Ns(), ee = o.some(r => r.type === d.Browsing || r.type === d.RetrievalBrowsing || r.type === d.SearchGPTQuery || r.type === d.n7jupd), pe = X(t, r => {
		for (let h = n.length - 1; h >= 0; h--) {
			const j = n[h],
				E = r?.tree.getNodeIfExists(j.id)?.message,
				z = E ? Zs(E) : void 0;
			if (z) return Object.assign({
				clientThreadId: t,
				messageId: n[h].id
			}, z)
		}
	}), se = Es(() => es.count(ss.DEFAULT, "conversation_turn_grouped_messages.attempted_render_missing_type_f959b8c")), V = G(n), F = Os({
		clientThreadId: t,
		conversationMode: C
	}), ie = x.useCallback(({
		sourceEvent: r,
		requestedModelId: h,
		appendMessages: j,
		extraStreamParams: E,
		isReasoningSkipped: z
	}) => {
		V && F({
			sourceEvent: r,
			nodeId: V.id,
			requestedModelId: h,
			appendMessages: j,
			extraStreamParams: E,
			isReasoningSkipped: z
		})
	}, [V, F]), Y = ts(t);
	let N = _?.enableInferOptOut;
	if (V) {
		const h = re.getParentPromptNode(Y, V?.id)?.message?.metadata?.system_hints ?? [];
		N = N && !h.includes(ns.Taco)
	}
	const L = de(s, r => r.type !== d.Debug),
		q = s.map((r, h) => {
			const j = O ? h === L : h === o.length - 1,
				E = Vt(s),
				z = Ft(r, h),
				ce = h === o.length - 1 ? void 0 : o[h + 1],
				Re = ce?.type === K ? ce.groups[-1] : ce,
				be = h === 0 ? void 0 : s[h - 1],
				ue = be?.type !== K ? be : void 0,
				ve = ue?.type,
				Se = ue?.messages,
				Le = n?.filter(y => y.metadata?.python_citation || y.metadata?.container_citation);
			if (r.type === K) return !E || z ? null : e.jsx(Bt, {
				isStreaming: u && j && a,
				latestError: pe,
				isFinalAssistantTurn: g,
				messageGroups: r.groups,
				nextMessageGroup: Re,
				prevMessageGroup: ue,
				isAutoswitchOptOutEnabled: N,
				handleSkipClick: y => {
					Ie.logEventWithStatsig("chatgpt_web_autoswitch_reasoning_skip_clicked", "chatgpt_web_autoswitch_reasoning_skip_clicked", {
						conversationId: t,
						messageId: r.groups[0].messages[0].id
					}), ie({
						sourceEvent: y,
						requestedModelId: _?.id,
						isReasoningSkipped: !0
					})
				},
				markAutoswitchPreambleAsSeen: () => {
					as(t, y => {
						y.hasSeenAutoswitchPreamble = !0
					})
				},
				hasSeenAutoswitchPreamble: Y?.hasSeenAutoswitchPreamble,
				hasN7JUPD: O
			}, "cot-" + r.groups[0].messages[0].id);
			const Ve = r && !os(r.messages[0]),
				Fe = ee && Ve,
				U = [];
			if (Fe || U.push(e.jsx(Ps, {
					className: "min-h-8",
					message: r.messages[0],
					isFeedbackEnabled: m,
					isFinalUserTurn: f,
					isCompletionInProgress: j && a,
					hasActiveRequest: c,
					turnIndex: l,
					clientThreadId: t,
					isUserTurn: i,
					prevGroupedMessageType: ve,
					prevGroupedMessages: Se,
					citableMessages: Le
				}, "text-message-" + r.messages[0].id)), A && U.push(e.jsx(Lt, {
					clientThreadId: t,
					message: r.messages[0]
				}, "message-debug-" + r.messages[0].id)), r.type === d.Text && r.messages[0].metadata?.[ke]?.attached_context) {
				const {
					url: y,
					title: P,
					base64_favicon: H
				} = r.messages[0].metadata[ke].attached_context;
				return e.jsxs(x.Fragment, {
					children: [e.jsx(Ds, {
						url: y,
						title: P,
						base64Favicon: H,
						className: ae(Bs(!0), "mb-1", "block")
					}), U]
				}, "group-" + r.messages[0].id)
			}
			switch (r.type) {
				case d.Text:
				case d.MultiText:
					return r.type === d.Text ? e.jsxs(x.Fragment, {
						children: [U, O && e.jsx(jt, {
							currentGroupedMessage: r,
							isLastMessage: j,
							isLastTurnInConversation: u,
							clientThreadId: t,
							turnIndex: l
						}), e.jsx(Js, {
							isUserTurn: i,
							message: r.messages[0]
						})]
					}, "group-" + r.messages[0].id) : r.type === d.MultiText ? e.jsx(kt, {
						clientThreadId: t,
						messages: r.messages,
						isCompletionInProgress: j && a,
						isFeedbackEnabled: m,
						hasActiveRequest: c,
						prevGroupedMessageType: ve,
						prevGroupedMessages: Se
					}, "multitext-" + (r.messages[0]?.id ?? h)) : r.type;
				case d.PIMBlock: {
					const y = G(n);
					return C && y ? e.jsx(yt, {
						isFinalTurn: u,
						hasActiveRequest: c,
						conversationMode: C,
						clientThreadId: t,
						justification: y.metadata?.pim_justification,
						flaggedMessageId: y.metadata?.pim_message_id,
						children: U
					}) : null
				}
				case d.n7jupd_n:
					return e.jsx(Hs, {});
				case d.Browsing:
				case d.RetrievalBrowsing: {
					const y = C != null && [W.GizmoInteraction, W.GizmoMagicCreate, W.GizmoTest].includes(C.kind),
						P = R ? is(R) : !1;
					return e.jsx(It, {
						messages: r.messages,
						isRequestActive: c,
						isLastMessageInTurn: j,
						isUsingGizmo: y,
						isUsingSnorlax: P,
						isRetrieval: r.type === d.RetrievalBrowsing
					}, "browsing-" + (r.messages[0]?.id ?? h))
				}
				case d.SearchGPTQuery: {
					if (s.some(J => J.type === K) && E) return null;
					const P = s.slice(h + 1).findLast(J => J.type === d.Text || J.type === d.CoTSearchTool),
						H = n.findLast(J => we(J).length > 0);
					return e.jsx(Us, {
						clientThreadId: t,
						turnIndex: l,
						isRequestActive: c,
						isLastMessage: j,
						isLastTurnInConversation: u,
						nextMessage: P?.messages[0],
						searchResultGroups: we(H)
					}, "searchquery-" + (r.messages[0]?.id ?? h))
				}
				case d.StructuredThoughts:
					return null;
				case d.ReasoningRecap:
					return null;
				case d.CoTSearchTool:
					return null;
				case d.n7jupd:
					return null;
				case d.n7jupd_i:
				case d.n7jupd_a:
				case d.n7jupd_x:
					return null;
				case d.a8km123: {
					if (!r.messages.every(P => !P.metadata?.reasoning_status)) {
						const P = de(n, H => H.author.role === fe.Assistant && H.recipient === "all");
						return e.jsx(Dt, {
							clientThreadId: t,
							turnIndex: l,
							isStreaming: (j || P < h) && a,
							isFinalAssistantTurn: g,
							messages: r.messages
						}, "sum-" + (r.messages[0]?.id ?? h))
					}
					return e.jsx(Pt, {
						messages: r.messages,
						isStreaming: j && a,
						isCompletionRequestInProgress: a,
						hasActiveRequest: c,
						isLastMessage: j,
						isFinalTurn: u,
						isFeedbackEnabled: m,
						clientThreadId: t,
						currentGroupedMessageIndex: h,
						turnIndex: l
					}, "sum-" + (r.messages[0]?.id ?? h))
				}
				case d.f959b8c:
					return se(), null;
				case d.is_loading_message:
					if (j && a) {
						const y = r.messages[0],
							P = rs(y);
						return e.jsx(zs, {
							text: P
						}, "loading-message-" + h)
					} else return null;
				case d.c12k321:
					return null;
				case d.l1p9k3u:
					return null;
				case d.b1de6e2_c:
					return e.jsx(at, {
						messages: r.messages,
						clientThreadId: t,
						isLastMessage: j
					}, "b1de6e2-" + (r.messages[0]?.id ?? h));
				case d.b1de6e2_s:
					return e.jsx(Fs, {
						messages: r.messages,
						clientThreadId: t
					}, "b1de6e2_s-" + (r.messages[0]?.id ?? h));
				case d.b1de6e2_d:
					return null;
				case d.b1de6e2_rm:
					return e.jsx(Vs, {
						messages: r.messages,
						clientThreadId: t,
						renderingView: M,
						children: U
					}, "b1de6e2_rm-" + (r.messages[0]?.id ?? h));
				case d.de1d73e:
					if (I) {
						const y = h + 1 < o.length ? o[h + 1] : void 0;
						return e.jsx(Rt, {
							clientThreadId: t,
							currentGroupedMessage: r,
							nextMessage: y && y.type === d.Text ? y.messages[0] : void 0,
							isLastMessage: j,
							isRequestActive: c
						}, "jawbone-" + (r.messages[0]?.id ?? h))
					} else return null;
				case d.ParallelBrowsing:
					return e.jsx(At, {
						messages: r.messages
					}, "parallel-" + (r.messages[0]?.id ?? h));
				case d.CodeInterpreter:
					return e.jsx(Ot, {
						messages: r.messages,
						isRequestActive: c,
						clientThreadId: t
					}, "ada-" + (r.messages[0]?.id ?? h));
				case d.JITPlugin:
					return e.jsx(Et, {
						messages: r.messages,
						clientThreadId: t,
						isLastTurnInConversation: u,
						onRequestCompletion: p
					}, "jit-" + (r.messages[0]?.id ?? h));
				case d.t2uay3k:
					return e.jsx(Mt, {
						messages: r.messages,
						clientThreadId: t,
						disableClickThru: S,
						isLastTurnInConversation: u
					}, "t2uay3k-" + (r.messages[0]?.id ?? h));
				case d.Dalle:
					return e.jsx(wt, {
						messages: r.messages,
						clientThreadId: t,
						disableClickThru: S
					}, "dalle-" + (r.messages[0]?.id ?? h));
				case d.GizmoEditor:
					return e.jsx(St, {
						messages: r.messages
					}, "gizmo-editor-" + (r.messages[0]?.id ?? h));
				case d.oiw209h:
					return e.jsx(Tt, {
						messages: r.messages,
						clientThreadId: t
					}, "oiw209h-" + (r.messages[0]?.id ?? h));
				case d.n7jupd_p:
					return e.jsx(Ls, {});
				case d.Canmore:
					return e.jsx(Rs, {
						messages: r.messages,
						allTurnMessages: n,
						isFinalTurn: u,
						isRequestActive: c,
						clientThreadId: t,
						isUserTurn: i
					}, "canmore-" + (r.messages[0]?.id ?? h));
				case d.Container:
				case d.Oboe:
					return null;
				case d.Debug:
					return A ? e.jsx(Ct, {
						message: r.messages[0]
					}, "debug-" + r.messages[0].id) : null;
				case d.SearchResult:
					return e.jsx(Nt, {
						messages: r.messages
					}, "search-result-" + (r.messages[0]?.id ?? h));
				case d.kanzi:
					return null;
				case d.Mochi:
					return null;
				case d.SuperWidget:
					return null
			}
		}),
		le = qs(),
		{
			wordFadeType: Q,
			animationDurationMs: xe
		} = Ks(),
		te = x.useRef([]),
		ye = x.useRef(void 0),
		_e = x.useRef(null),
		ne = !i && u && a,
		je = n[0]?.id;
	return ls(() => {
		if (Q !== "indexed" || !ne) return;
		const r = _e.current;
		if (!r) return;
		ye.current !== je && (ye.current = je, te.current = []);
		const h = r.getAnimations({
			subtree: !0
		}).filter(j => j.animationName === Me["fade-in"]);
		if (h.length !== 0) {
			const j = Ht({
				now: performance.now(),
				previousStartTimes: te.current,
				groupCount: h.length
			});
			te.current = j;
			for (let E = 0; E < h.length; E++) h[E].startTime = j[E]
		} else te.current = []
	}, [q, Q, ne]), e.jsx("div", {
		className: ae({
			"flex max-w-full flex-col": !0,
			[Me.root]: Q === "indexed" && ne,
			grow: b
		}),
		style: Q === "indexed" ? {
			"--duration": `${xe}ms`
		} : void 0,
		ref: _e,
		children: e.jsx(cs, {
			name: "GroupedMessages",
			fallback: zt,
			children: i ? q : e.jsxs($s, {
				isDisabled: !ne || Q !== "delay",
				defaultAnimationDurationPerSegmentMs: xe,
				children: [Ws(B) && u && e.jsx(Ys, {
					isStreaming: a,
					debug: le
				}), q]
			}, n[0]?.id)
		})
	})
}

function zt({
	error: s
}) {
	return e.jsxs(Qs, {
		type: "danger",
		children: [e.jsx(w, {
			id: "5eGo3w",
			defaultMessage: "Unable to display this message due to an error."
		}), !1]
	})
}

function Ut(s, n, o) {
	if (s.length < 2 || n <= 0) return 0;
	const t = n / Math.log(2);
	s = [...s].sort((m, u) => m - u);
	let i = 0,
		a = 0;
	for (let m = s.length - 1; m > 0; --m) {
		const u = Math.exp(-(o - s[m]) / t);
		if (i > 0 && u / i < .01) break;
		const f = s[m] - s[m - 1];
		i += u, a += u * f
	}
	return i === 0 ? 0 : i / a
}

function Ht({
	now: s,
	previousStartTimes: n,
	groupCount: o,
	initialRate: t = 50,
	halfLife: i = 1
}) {
	const a = n.slice(0, de(n, l => l <= s) + 1),
		m = a.length < 2 ? t / 1e3 : Math.max(.01, Ut(a, i * 1e3, s)),
		u = o - a.length;
	let f = a[a.length - 1] ?? 0,
		g = 1;
	for (let l = 0; l < u; l++) {
		const c = m * 1e3 * g;
		u < c ? g *= .8 : u > c && (g *= 1.5);
		const p = 1 / (m * g),
			b = Math.max(s, f + p);
		a.push(b), f = b
	}
	return a
}
export {
	sn as C, lt as a, gt as b, dt as c, Zt as d, Ae as e, it as f, rt as o, Xt as p, en as r, Gt as s, Be as u
};
//# sourceMappingURL=cv2ja3m1kj318n5b.js.map