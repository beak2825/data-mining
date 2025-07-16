import {
	jr as $,
	js as J,
	L as A,
	jt as V,
	ju as Q,
	jv as Z,
	jw as O,
	dm as P,
	jx as ee,
	et as te,
	jy as ne,
	jz as se,
	jA as B,
	jB as oe,
	jC as ae,
	jD as re,
	jE as ie,
	jF as ce,
	jG as le,
	jH as M,
	jI as ue,
	a4 as S,
	jJ as pe,
	jK as w,
	jL as H,
	jM as de,
	jN as fe,
	jO as _e,
	jP as me,
	ce as ge
} from "./f7j18j5u52u1pnnk.js";
import {
	hX as E,
	P as d,
	b6 as he,
	cL as ke,
	B as xe,
	D as ye,
	q as L,
	cl as Ce,
	cI as ve,
	f as Se,
	cU as be,
	s as C,
	N as v,
	aS as W,
	aQ as Ee,
	aZ as we,
	dI as Le,
	lf as je,
	aR as Me,
	ip as I,
	lg as Re
} from "./egb2c0f6p1ew61vt.js";
import {
	r as x,
	e as Ne,
	j as l,
	M as R,
	R as j
} from "./fyeo2h7okrqcf3nz.js";
import {
	e as De,
	f as Te,
	d as Ue
} from "./lqc3mxovgoy4h7eq.js";
import {
	u as G
} from "./ixsisjuxwij5x7d3.js";
import {
	k as N
} from "./pc2givv05uuq8g6l.js";

function Fe({
	onClose: t,
	url: e,
	onAction: n,
	onActionAborted: r
}) {
	const s = x.useRef(!1),
		a = Ne(),
		{
			clientThreadId: i
		} = De(),
		c = {
			...E({
				clientThreadId: i
			}),
			url: e,
			link_type: "text",
			section: "safe-link-modal"
		};
	x.useEffect(() => {
		d.logEventWithStatsig("Safe Link Warning Modal Shown", "chatgpt_safe_link_warning_modal_shown")
	}, []);
	const u = async () => {
		s.current = !0;
		try {
			await navigator.clipboard.writeText(e), d.logEventWithStatsig("Safe Link Warning Modal Copy Clicked", "chatgpt_safe_link_warning_modal_copy_clicked"), d.logEventWithStatsig("link_action", "link_action", {
				...c,
				action: "copy"
			})
		} catch (k) {
			ye.addError(k)
		}
		n?.("copy"), t()
	}, g = () => {
		s.current = !0, d.logEventWithStatsig("Safe Link Warning Modal Open Clicked", "chatgpt_safe_link_warning_modal_open_clicked"), d.logEventWithStatsig("link_action", "link_action", {
			...c,
			action: "click"
		}), n?.("open"), t()
	}, p = () => {
		s.current || (d.logEventWithStatsig("Safe Link Warning Modal Canceled", "chatgpt_safe_link_warning_modal_canceled"), r?.()), s.current = !1, t()
	};
	let h = "",
		f = e,
		_ = "";
	try {
		f = new URL(e).hostname;
		const m = e.indexOf(f);
		m !== -1 && (h = e.substring(0, m), _ = e.substring(m + f.length))
	} catch {}
	return l.jsxs(he, {
		testId: "modal-safe-link-warning",
		isOpen: !0,
		hideSeparator: !0,
		onClose: p,
		showCloseButton: !0,
		type: "warning",
		title: l.jsx("div", {
			className: "flex items-center gap-2",
			children: a.formatMessage({
				id: "KXMlta",
				defaultMessage: "This link isn't verified"
			})
		}),
		primaryButton: l.jsx(xe, {
			as: "link",
			openNewTab: !0,
			rel: "noopener noreferer",
			color: "primary",
			onClick: g,
			to: e,
			children: a.formatMessage({
				id: "gMzmDW",
				defaultMessage: "Open link"
			})
		}),
		secondaryButton: l.jsx(ke.Button, {
			title: a.formatMessage({
				id: "YGLt71",
				defaultMessage: "Copy link"
			}),
			color: "secondary",
			onClick: u
		}),
		children: [l.jsxs("p", {
			className: "text-token-text-secondary mb-6 text-sm text-pretty",
			children: [l.jsx(R, {
				defaultMessage: "Make sure you trust this link before proceeding. If you don't recognize the URL, don't open the link to access the site.",
				id: "safe-link-warning-modal-description"
			}), l.jsx("a", {
				className: "hover:text-token-link-hover ps-1 underline underline-offset-1",
				href: "https://help.openai.com/en/articles/10984597-chatgpt-generated-links",
				target: "_blank",
				rel: "noopener noreferrer",
				children: l.jsx(R, {
					id: "xNvPsR",
					defaultMessage: "Learn more"
				})
			})]
		}), l.jsxs("div", {
			className: "mb-2 text-sm break-all",
			children: [l.jsx("span", {
				className: "text-token-text-secondary",
				children: h
			}), l.jsx("span", {
				className: "text-token-text-primary font-medium",
				children: f
			}), l.jsx("span", {
				className: "text-token-text-secondary",
				children: _
			})]
		})]
	})
}
const D = {},
	T = {},
	U = {};

function F(t, e) {
	return `${t}::${e}`
}

function Ae({
	node: t,
	onClick: e,
	children: n,
	clientThreadId: r,
	messageId: s,
	href: a,
	disableSafeURLs: i,
	...o
}) {
	let c = e;
	const u = t?.properties?.href,
		g = x.useContext($),
		p = L(),
		h = Ce(r),
		f = J(h, a, g?.useSafeUrls && !i),
		_ = ve(p, "387775177"),
		k = !i && f === void 0 && _.get("enable-copy-and-open", !1);
	return s != null && typeof u == "string" && u.includes("/bing/redirect") && (D[s] || (d.logEvent("Browsing Show Bing Link", {
		id: s,
		content: u
	}), D[s] = !0), c = m => {
		T[s] || (d.logEvent("Browsing Click Bing Link", {
			id: s,
			content: u
		}), T[s] = !0), e?.(m)
	}), c = m => {
		const y = "" + u;
		if (s && !U[F(s, y)]) {
			const b = f || k ? "URL Clicked Allowed" : "URL Clicked Blocked";
			d.logEvent(b, {
				id: s,
				content: y
			}), U[F(s, y)] = !0
		}
		e?.(m), k && a && be(p, Fe, {
			url: a
		})
	}, l.jsx(l.Fragment, {
		children: l.jsx("a", {
			onClick: c,
			...o,
			className: Se(o.className, k && "cursor-pointer"),
			href: f,
			rel: "noopener",
			children: n
		})
	})
}
const rt = "w";

function Oe({
	messageId: t,
	clientThreadId: e,
	text: n,
	children: r,
	...s
}) {
	const i = `${window.location.origin}?q=${encodeURIComponent(n)}`,
		o = Te(),
		c = x.useCallback(async u => {
			u.preventDefault(), C.count(v.DEFAULT, "instant_follow_up_anchor_clicked"), d.logEventWithStatsig("Instant Follow Up Anchor Clicked", "chatgpt_instant_follow_up_anchor_clicked", {
				clientThreadId: e,
				messageId: t
			}), o(u, {
				text: n,
				type: A.Reply
			}, [], 0)
		}, [e, t, n, o]);
	return l.jsx(Ae, {
		...s,
		href: i,
		disableSafeURLs: !0,
		clientThreadId: e,
		messageId: t,
		className: "cursor-pointer",
		onClick: c,
		children: r
	})
}
const it = j.memo(Oe),
	Pe = {},
	Be = [];

function K(t) {
	const e = t || Pe;
	return function(n, r) {
		V(n, "element", function(s, a) {
			const i = Array.isArray(s.properties.className) ? s.properties.className : Be,
				o = i.includes("language-math"),
				c = i.includes("math-display"),
				u = i.includes("math-inline");
			let g = c;
			if (!o && !c && !u) return;
			let p = a[a.length - 1],
				h = s;
			if (s.tagName === "code" && o && p && p.type === "element" && p.tagName === "pre" && (h = p, p = a[a.length - 2], g = !0), !p) return;
			const f = Q(h, {
				whitespace: "pre"
			});
			let _;
			try {
				_ = N.renderToString(f, {
					...e,
					displayMode: g,
					throwOnError: !0
				})
			} catch (m) {
				const y = m,
					b = y.name.toLowerCase();
				r.message("Could not render math with KaTeX", {
					ancestors: [...a, s],
					cause: y,
					place: s.position,
					ruleId: b,
					source: "rehype-katex"
				}), b === "parseerror" ? _ = N.renderToString(f, {
					...e,
					displayMode: g,
					strict: "ignore",
					throwOnError: !1
				}) : _ = [{
					type: "element",
					tagName: "span",
					properties: {
						className: ["katex-error"],
						style: "color:" + (e.errorColor || "#cc0000"),
						title: String(m)
					},
					children: [{
						type: "text",
						value: f
					}]
				}]
			}
			typeof _ == "string" && (_ = Z(_).children);
			const k = p.children.indexOf(h);
			return p.children.splice(k, 1, ..._), O
		})
	}
}
const ct = "f",
	lt = "dr",
	z = (t, e, n = !1) => {
		const r = x.useRef(!1);
		x.useEffect(() => {
			r.current || (r.current = !0, C.count(v.DEFAULT, "clickable_follow_up_text_shown"), n && C.count(v.DEFAULT, "clickable_follow_up_deep_research_text_shown"), d.logEventWithStatsig("Clickable Follow Up Text Shown", "chatgpt_clickable_follow_up_text_shown", {
				...E({
					clientThreadId: t,
					messageId: e
				})
			}))
		}, [t, e, n])
	},
	X = ({
		messageId: t,
		clientThreadId: e,
		text: n
	}) => {
		const r = G(e),
			s = Ee.useStore(),
			a = P(e);
		z(e, t, !1);
		const i = x.useCallback(o => {
			o.preventDefault(), C.count(v.DEFAULT, "clickable_follow_up_text_clicked"), d.logEventWithStatsig("Clickable Follow Up Text Clicked", "chatgpt_clickable_follow_up_text_clicked", E({
				clientThreadId: e,
				messageId: t
			}));
			const c = s.getActiveSystemHintType();
			r({
				sourceEvent: o,
				promptMessage: Le(n.toLowerCase(), {
					suggestion_type: A.Reply
				}),
				completionMetadata: {
					systemHints: c ? [c] : [],
					conversationMode: a ?? {
						kind: we.PrimaryAssistant
					}
				}
			})
		}, [e, a, t, s, r, n]);
		return l.jsx("span", {
			className: "decoration-token-text-secondary hover:text-token-text-secondary cursor-pointer underline decoration-dotted decoration-[12%] underline-offset-4 transition-colors duration-200 ease-in-out",
			onClick: i,
			children: n
		})
	},
	He = ({
		messageId: t,
		clientThreadId: e,
		text: n
	}) => {
		const r = L();
		return W(r, "2723331665") ? l.jsx(X, {
			messageId: t,
			clientThreadId: e,
			text: n
		}) : l.jsx("span", {
			children: n
		})
	},
	ut = j.memo(He),
	We = ({
		messageId: t,
		clientThreadId: e,
		text: n
	}) => {
		const r = Ue(),
			{
				setThreadSystemHintMode: s
			} = ee(),
			a = !!je(),
			i = G(e),
			o = P(e);
		z(e, t, !0);
		const c = x.useCallback(u => {
			u.preventDefault(), C.count(v.DEFAULT, "clickable_follow_up_text_clicked"), C.count(v.DEFAULT, "clickable_follow_up_deep_research_text_clicked"), d.logEventWithStatsig("Clickable Follow Up Text Clicked", "chatgpt_clickable_follow_up_text_clicked", E({
				clientThreadId: e,
				messageId: t
			}));
			const g = {
				clientThreadId: e
			};
			s(Me.Research, !0, g), r.focus(), r.setText(n)
		}, [e, t, n, r, s, o, i]);
		return a ? l.jsx(X, {
			messageId: t,
			clientThreadId: e,
			text: n
		}) : l.jsxs("span", {
			className: "decoration-token-text-secondary hover:text-token-text-secondary cursor-pointer underline decoration-dotted decoration-[12%] underline-offset-4 transition-colors duration-200 ease-in-out",
			onClick: c,
			children: [l.jsx(te, {
				className: "icon me-1 inline-block"
			}), n]
		})
	},
	Ie = ({
		messageId: t,
		clientThreadId: e,
		text: n
	}) => {
		const r = L();
		return W(r, "2723331665") ? l.jsx(We, {
			messageId: t,
			clientThreadId: e,
			text: n
		}) : l.jsx("span", {
			children: n
		})
	},
	pt = j.memo(Ie),
	dt = t => (t.startsWith(pe), t);

function Ge() {
	return t => {
		S(t, "list", e => {
			for (const n of e.children) n.spread = !0
		})
	}
}

function ft(t) {
	return e => {
		S(e, n => {
			Object.defineProperties(n, {
				markdownSource: {
					get() {
						return t.slice(this.position.start.offset, this.position.end.offset)
					}
				}
			})
		})
	}
}
const Y = [oe, ae, Ge, [re, {
	singleDollarTextMath: !1
}], ie, ce, le, ...M ? [M] : [], ue, Ke, Xe];

function Ke() {
	return t => {
		S(t, "textDirective", e => {
			e.name !== I && (e.type = "text", e.value = `:${e.name}`)
		})
	}
}
const ze = /\u200b/g;

function Xe() {
	return t => {
		S(t, "text", e => {
			e.value = e.value.replace(ze, "")
		})
	}
}

function Ye() {
	return t => {
		const e = t.position?.end.offset;
		S(t, "element", (n, r) => {
			const {
				position: s
			} = n;
			if (!s) return;
			const {
				start: a,
				end: i
			} = s, o = a.offset, c = i.offset;
			n.properties ??= {}, o != null && (n.properties["data-start"] = o), c != null && (n.properties["data-end"] = c, e === c && (n.properties["data-is-last-node"] = ""), r === t.children.length - 1 && (n.properties["data-is-only-node"] = ""))
		})
	}
}
const _t = [K, Ye, ne, [se, {
		target: "_new",
		rel: "noopener noreferrer"
	}], B],
	qe = [
		[K, {
			output: "mathml"
		}], B
	];

function $e(t, e) {
	const n = Re(t, e);
	return q(n, e)
}

function q(t, e) {
	const n = w().use(H).use(Y).use([
			[Qe, e ?? []]
		]).use(de, {
			rule: "-",
			tightDefinitions: !0,
			handlers: {
				break: () => `
`,
				link: Je
			}
		}),
		r = w().use(fe).use(qe).use(_e),
		s = n.runSync(n.parse(t)),
		a = n.stringify(s),
		i = r.stringify(r.runSync(s));
	return {
		"text/plain": a,
		"text/html": i
	}
}
const Je = (t, e, n, r) => {
	const s = n.createTracker(r),
		a = n.enter("link"),
		i = n.enter("label");
	let o = s.move("[");
	return o += s.move(n.containerPhrasing(t, {
		before: o,
		after: "](",
		...s.current()
	})), o += s.move("]("), i(), o += s.move(t.url.replace(/[\x00-\x1F\x7F-\x9F()"]/g, Ve)), t.title && (o += s.move(" " + JSON.stringify(t.title))), o += s.move(")"), a(), o
};

function Ve(t) {
	return "%" + t.charCodeAt(0).toString(16).toUpperCase().padStart(2, "0")
}

function Qe(t) {
	return e => {
		const n = {},
			r = (s, a) => {
				switch (a.type) {
					case "grouped_webpages": {
						const i = [];
						for (const o of a.items)
							if (o.url && o.title) {
								let c = n[o.url];
								c || (c = n[o.url] = {
									type: "definition",
									identifier: String(Object.keys(n).length + 1),
									url: o.url,
									title: o.title
								}), i.push({
									type: "linkReference",
									referenceType: "shortcut",
									identifier: c.identifier,
									children: [{
										type: "text",
										value: o.attribution ?? ge(o.url)
									}]
								})
							} return i.length === 0 ? [] : [{
							type: "text",
							value: "("
						}, ...i.flatMap((o, c, u) => c < u.length - 1 ? [o, {
							type: "text",
							value: ", "
						}] : [o]), {
							type: "text",
							value: ")"
						}]
					}
					case "title_citation":
					case "location_search":
					case "time":
					case "image_v2":
					case "nav_list":
					case "file_navlist":
					case "file":
					case "grouped_webpages_model_predicted_fallback":
					case "tldr":
					case "navigation":
					case "stock":
					case "calculator":
					case "python":
					case "container":
					case "code_execution":
					case "forecast":
					case "businesses_map":
					case "video":
					case "sources_footnote":
					case "sports_standings":
					case "sports_schedule":
					case "attribution":
					case "webpage_extended":
					case "image_inline":
					case "card_group":
					case "product_entity":
					case "products":
					case "alt_text":
					case "product_reviews":
					case "product_rationale":
						if (a.alt) {
							const i = w().use(H).use(Y).parse(a.alt);
							if (s.type !== "textDirective") return i.children;
							const o = i.children[0];
							if (o.type === "paragraph") return o.children
						}
						return [];
					case "hidden":
					case "status":
					case "optimistic_image_citation":
					case "webpage":
					case "optimistic_image_inline":
					case "invalid":
					case "attribution_footer":
					case "sports":
					case "grouped_webpages_v2":
						return []
				}
			};
		S(e, me, (s, a, i) => {
			if (i == null || a == null) return;
			const o = Ze(s, t),
				c = o ? r(s, o) ?? [s] : [];
			return i.children.splice(a, 1, ...c), [O, a + c.length]
		}), e.children.push(...Object.values(n))
	}
}

function Ze(t, e) {
	if (t.name === I) {
		const n = t.attributes?.index;
		if (n) return e[parseInt(n, 10)]
	}
}
const mt = Object.freeze(Object.defineProperty({
	__proto__: null,
	markdownToClipboardContent: q,
	messageTextToClipboardContent: $e
}, Symbol.toStringTag, {
	value: "Module"
}));
export {
	ct as C, rt as I, Ae as M, Y as R, _t as a, q as b, it as c, ut as d, lt as e, pt as f, mt as g, $e as m, ft as r, dt as u
};
//# sourceMappingURL=falvn1u1m9kfl56g.js.map