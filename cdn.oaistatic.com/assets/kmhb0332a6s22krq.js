import {
	e as B,
	j as t,
	M as Y,
	c as ts,
	f as ss,
	n as X,
	r as f,
	A as Pe,
	u as st,
	a as he,
	d as Fs,
	b as Us
} from "./fyeo2h7okrqcf3nz.js";
import {
	i as qs,
	a as Ks,
	T as Gs,
	u as zs,
	g as Ws,
	C as Vs,
	b as Qs,
	H as Zs,
	c as $s
} from "./hmqs3pkvyqlgk67i.js";
import {
	dm as Ys,
	vX as Oe,
	j7 as M,
	j8 as L,
	kv as Re,
	vY as ns,
	y as nt,
	A as De,
	di as pe,
	vZ as Xs,
	j1 as Js,
	v_ as en,
	nk as tn,
	oI as Pt,
	v$ as sn,
	dl as nn,
	w0 as on,
	w1 as an,
	dZ as rn,
	fq as cn,
	nl as Ot,
	ct as ln,
	cA as J,
	cG as Lt,
	w2 as dn,
	dp as un,
	nB as Bt,
	fj as mn,
	fk as fn,
	fm as gn,
	fn as xn,
	J as hn,
	w3 as Me,
	fv as pn,
	a3 as Cn,
	dA as vn,
	kx as yn,
	dj as fe,
	w4 as bn,
	w5 as os,
	w6 as Tn,
	w7 as wn,
	d as Sn,
	w8 as Je,
	w9 as An,
	t_ as En,
	wa as jn,
	kN as ge,
	wb as _n,
	ku as kn,
	wc as In,
	jj as Mn,
	wd as Rn,
	c as Dn,
	we as Nn,
	f9 as Pn,
	wf as On,
	wg as Ln,
	wh as Bn,
	wi as Hn,
	wj as Fn,
	df as Un,
	dg as qn,
	dh as Kn,
	rv as Ht,
	nr as Ft,
	wk as Gn,
	wl as zn,
	g as Wn,
	wm as Vn,
	lH as Qn,
	wn as Zn,
	iK as $n,
	wo as Ut,
	dk as qt,
	wp as Kt,
	wq as ke,
	wr as Ie,
	ws as Gt
} from "./f7j18j5u52u1pnnk.js";
import {
	u as Yn
} from "./ixsisjuxwij5x7d3.js";
import {
	kH as as,
	b6 as Xn,
	cC as Jn,
	cL as et,
	dI as eo,
	cM as to,
	ez as so,
	eA as no,
	eB as oo,
	eC as ao,
	e0 as ro,
	e2 as io,
	B as zt,
	cQ as co,
	bE as tt,
	H as rs,
	bD as Wt,
	e8 as lo,
	f as Ce,
	D as is,
	R as V,
	cl as cs,
	nj as ls,
	w as D,
	gL as Vt,
	T as ee,
	l as uo,
	cs as mo,
	F as ds,
	q as ot,
	aS as at,
	E as Qt,
	aM as fo,
	P as go,
	G as xo
} from "./egb2c0f6p1ew61vt.js";
import {
	O as ho,
	b as se,
	u as po,
	c as Co,
	g as vo,
	A as yo,
	a as bo,
	f as Zt,
	C as ie,
	D as To
} from "./k3n5t9a799ohqw3h.js";
import {
	e as wo
} from "./mpicq22e5t3uz3jz.js";
import {
	C as So
} from "./okq68de4a9733epz.js";
import {
	g as Ao,
	a as Eo
} from "./f7hgik6cjoxksakw.js";
import {
	C as Ne,
	j as $t,
	S as Yt
} from "./ekh5ue0hmvvp6lmd.js";
import {
	a as jo
} from "./fzwyckccbrm2oiee.js";
import {
	D as _o
} from "./ddkpacja177ztd42.js";
import {
	i as ko
} from "./b35luffh9z4llgqb.js";
import {
	C as Io
} from "./cv2ja3m1kj318n5b.js";
import {
	a as Mo,
	g as Ro
} from "./fpsokuu2p45yfc9a.js";
import {
	N as Do
} from "./jy1u8exw8iz2slve.js";
import {
	S as No
} from "./ohtnvt0kfw0a57ka.js";
import {
	g as Ye,
	S as Po
} from "./bk8slwxjkdlmxjxm.js";
import {
	s as Xe,
	B as Oo
} from "./kywo8xrter1oxvd3.js";
import {
	L as Lo
} from "./n0kwaugzg5mjzz0f.js";
import {
	d as Bo
} from "./lqc3mxovgoy4h7eq.js";
import {
	i as Xt
} from "./ededkbk0bjohtxav.js";
import {
	g as Ho
} from "./crozh0j4v472kedz.js";
var us = (s => (s.Close = "close", s.Loaded = "loaded", s.Streaming = "streaming", s.Download = "download", s))(us || {});
const Fo = ({
		isOpen: s,
		dismissModal: e,
		closeTextdocEditor: n,
		textdocVersion: o,
		clientThreadId: c
	}) => {
		const r = B(),
			a = Ys(c),
			l = Yn(c),
			g = as(),
			i = Oe(o?.textdocId),
			d = async x => {
				M.logButtonClick(L.SAVE_TO_CHAT_ON_EDITOR_CLOSE), !(o?.versionInt == null || g) && (l({
					sourceEvent: x,
					promptMessage: eo("", {
						canvas: {
							user_created_textdocs: o != null && o.status === ns.ATTACHED_PENDING && i != null ? [{
								user_created_temp_textdoc_id: o.textdocId,
								type: o.type,
								title: o.title,
								content: o.content,
								create_source: i.create_source
							}] : void 0
						},
						open_in_canvas_view: {
							type: "canvas_textdoc",
							id: o.textdocId
						}
					}),
					completionMetadata: a ? {
						conversationMode: a
					} : void 0
				}), i && Re.markAsSent(i.tempTextdocId), e(), n())
			};
		return t.jsx(Xn, {
			testId: "modal-confirm-close-editor",
			isOpen: s,
			size: "custom",
			className: "max-w-xl",
			onClose: e,
			type: "warning",
			hideSeparator: !0,
			title: t.jsx("span", {
				className: "text-xl",
				children: t.jsx(Y, {
					id: "jgd5rD",
					defaultMessage: "Are you sure you want to close?"
				})
			}),
			primaryButton: t.jsx(et.Button, {
				title: r.formatMessage({
					id: "XE+GiU",
					defaultMessage: "Save to chat"
				}),
				color: "primary",
				onClick: d
			}),
			secondaryButton: t.jsx(et.Button, {
				title: r.formatMessage({
					id: "MbWco5",
					defaultMessage: "Don’t save and close"
				}),
				color: "secondary",
				onClick: () => {
					M.logButtonClick(L.CLOSE_WITHOUT_SAVING), i && Re.removeTempTextdoc(i.tempTextdocId), e(), n()
				}
			}),
			showCloseButton: !0,
			closeButton: t.jsx(Jn, {
				onClick: e
			}),
			children: t.jsx("div", {
				className: "text-md text-token-text-secondary -mt-6 pb-2",
				children: t.jsx(Y, {
					id: "q9rJ+Y",
					defaultMessage: "Changes will not be saved unless you save this canvas to your chat."
				})
			})
		})
	},
	Le = "https://persistent.oaistatic.com/canvas/nux-videos/",
	Uo = `${Le}canvas_writing.mp4`,
	qo = `${Le}canvas_coding.mp4`,
	Ko = `${Le}canvas_writing_hero.jpg`,
	Go = `${Le}canvas_coding_hero.jpg`,
	zo = "https://help.openai.com/en/articles/9930697-what-is-the-canvas-feature-in-chatgpt-and-how-do-i-use-it",
	Wo = s => {
		"use forget";
		const e = ts.c(27),
			{
				onClose: n,
				title: o,
				description: c,
				asset: r,
				size: a
			} = s,
			l = B(),
			g = r === 0,
			i = a === 1 ? 252 : 218;
		let d;
		e[0] !== i ? (d = {
			height: i
		}, e[0] = i, e[1] = d) : d = e[1];
		const x = g ? Ko : Go,
			y = g ? Uo : qo;
		let m;
		e[2] !== x || e[3] !== y ? (m = t.jsx("video", {
			muted: !0,
			loop: !0,
			autoPlay: !0,
			playsInline: !0,
			className: "h-full max-w-none",
			poster: x,
			src: y
		}), e[2] = x, e[3] = y, e[4] = m) : m = e[4];
		let T;
		e[5] !== d || e[6] !== m ? (T = t.jsx("div", {
			className: "border-token-border-default bg-token-main-surface-secondary text-token-text-secondary relative flex w-full items-center justify-center overflow-hidden border-b",
			style: d,
			children: m
		}), e[5] = d, e[6] = m, e[7] = T) : T = e[7];
		let h;
		e[8] !== o ? (h = t.jsx(so, {
			className: "text-center text-xl leading-6 font-semibold",
			children: t.jsx(Y, {
				...o
			})
		}), e[8] = o, e[9] = h) : h = e[9];
		let b;
		e[10] !== c ? (b = t.jsx(no, {
			className: "text-token-text-secondary text-center text-sm",
			children: t.jsx(Y, {
				...c
			})
		}), e[10] = c, e[11] = b) : b = e[11];
		let u;
		e[12] !== h || e[13] !== b ? (u = t.jsxs("div", {
			className: "flex flex-col gap-2",
			children: [h, b]
		}), e[12] = h, e[13] = b, e[14] = u) : u = e[14];
		let v;
		e[15] !== l ? (v = l.formatMessage(le.button), e[15] = l, e[16] = v) : v = e[16];
		let p;
		e[17] !== n || e[18] !== v ? (p = t.jsx(et.Button, {
			onClick: n,
			title: v,
			color: "primary"
		}), e[17] = n, e[18] = v, e[19] = p) : p = e[19];
		let w;
		e[20] === Symbol.for("react.memo_cache_sentinel") ? (w = t.jsxs(oo, {
			href: zo,
			className: "flex items-center gap-1 font-medium",
			children: [t.jsx(Y, {
				...le.learnMore
			}), t.jsx(ao, {
				className: "icon-sm"
			})]
		}), e[20] = w) : w = e[20];
		let E;
		e[21] !== p || e[22] !== u ? (E = t.jsxs("div", {
			className: "flex flex-col items-center gap-4 px-10 py-8",
			children: [u, p, w]
		}), e[21] = p, e[22] = u, e[23] = E) : E = e[23];
		let C;
		return e[24] !== E || e[25] !== T ? (C = t.jsxs("div", {
			className: "flex flex-col items-center focus:outline-hidden",
			children: [T, E]
		}), e[24] = E, e[25] = T, e[26] = C) : C = e[26], C
	},
	Vo = s => {
		"use forget";
		const e = ts.c(11),
			{
				textdocType: n
			} = s,
			{
				markAsViewed: o
			} = nt(De.hasDismissedCanvasContextualOnboarding),
			c = to()?.document.body;
		let r, a, l;
		e[0] === Symbol.for("react.memo_cache_sentinel") ? (r = {
			opacity: .75,
			scale: .9
		}, a = {
			opacity: 1,
			scale: 1
		}, l = {
			type: "spring",
			bounce: .2,
			duration: .56
		}, e[0] = r, e[1] = a, e[2] = l) : (r = e[0], a = e[1], l = e[2]);
		const g = pe(n) ? 1 : 0,
			i = pe(n) ? le.contextualModalTitleCoding : le.contextualModalTitleWriting,
			d = pe(n) ? le.contextualModalDescriptionCoding : le.contextualModalDescriptionWriting;
		let x;
		e[3] !== o || e[4] !== g || e[5] !== i || e[6] !== d ? (x = t.jsx(X.div, {
			initial: r,
			animate: a,
			transition: l,
			className: "popover border-token-border-default bg-token-main-surface-primary fixed end-4 bottom-4 z-50 max-w-sm overflow-hidden rounded-2xl border shadow-xl",
			children: t.jsx(Wo, {
				onClose: o,
				asset: g,
				size: 0,
				title: i,
				description: d
			})
		}), e[3] = o, e[4] = g, e[5] = i, e[6] = d, e[7] = x) : x = e[7];
		let y;
		return e[8] !== c || e[9] !== x ? (y = t.jsx(ro, {
			open: !0,
			defaultOpen: !0,
			modal: !1,
			children: t.jsx(io, {
				container: c,
				children: x
			})
		}), e[8] = c, e[9] = x, e[10] = y) : y = e[10], y
	},
	le = ss({
		contextualModalTitleWriting: {
			id: "Pi+0RT",
			defaultMessage: "Draft and refine on the spot"
		},
		contextualModalDescriptionWriting: {
			id: "Jv0f02",
			defaultMessage: "Make it shorter. Add an emoji. Translate to kindergartener. ChatGPT can do it all, right on the canvas."
		},
		contextualModalTitleCoding: {
			id: "Zi5Ty0",
			defaultMessage: "Refine and debug on the spot"
		},
		contextualModalDescriptionCoding: {
			id: "XnaO2x",
			defaultMessage: "Refactor code. Translate to Python. Check for bugs. ChatGPT can do it all, right on the canvas."
		},
		button: {
			id: "7bNl4/",
			defaultMessage: "Got it"
		},
		learnMore: {
			id: "vs1lx2",
			defaultMessage: "Learn more about canvas"
		}
	});

function ms(s) {
	const e = Xs();
	if (!s) return {
		isCodePreviewable: !1,
		isCodeExecutable: !1,
		hasCanvasCodeExecution: e
	};
	const n = qs(s?.type, s?.content),
		o = Ks(s.type);
	return {
		isCodePreviewable: n,
		isCodeExecutable: o,
		hasCanvasCodeExecution: e
	}
}
const Qo = ({
	isTextdocStreaming: s,
	isRequestActive: e,
	value: n,
	comments: o
}) => {
	const [c, r] = f.useState(!1);
	return f.useEffect(() => {
		s && c && (r(!1), Ne.reset())
	}, [n, o]), f.useEffect(() => {
		e || (r(!1), Ne.reset())
	}, [e]), [c, r]
};

function Zo({
	onClickRestore: s,
	onClickResetLatest: e
}) {
	const n = B();
	return t.jsx(X.div, {
		initial: {
			height: 0
		},
		animate: {
			height: "auto"
		},
		exit: {
			height: 0
		},
		transition: {
			bounce: 0,
			duration: .24
		},
		className: "bg-token-main-surface-primary z-30",
		children: t.jsx(X.div, {
			className: "bg-token-main-surface-primary dark:border-token-border-xlight @container w-full items-center border-t border-gray-100 p-6 shadow-[0_-4px_32px_rgba(0,0,0,0.08)] lg:border-s dark:shadow-[0_-4px_32px_rgba(0,0,0,0.12)]",
			children: t.jsxs("div", {
				className: "mx-auto flex max-w-[48rem] flex-col flex-wrap justify-center gap-5 @2xl:flex-row @2xl:justify-between",
				children: [t.jsxs("div", {
					className: "flex flex-col px-2 text-center @2xl:text-start",
					children: [t.jsx("span", {
						className: "text-md text-token-text-primary font-semibold text-wrap",
						children: n.formatMessage({
							id: "gt23pb",
							defaultMessage: "You are viewing a previous version"
						})
					}), t.jsx("span", {
						className: "text-token-text-secondary text-sm text-wrap",
						children: n.formatMessage({
							id: "sAlUJn",
							defaultMessage: "Restore this version to make edits"
						})
					})]
				}), t.jsxs("div", {
					className: "flex flex-wrap items-center justify-center gap-4",
					children: [t.jsx(zt, {
						as: "button",
						color: "primary",
						onClick: s,
						children: n.formatMessage({
							id: "+cddAb",
							defaultMessage: "Restore this version"
						})
					}), t.jsx(zt, {
						as: "button",
						color: "secondary",
						onClick: e,
						children: n.formatMessage({
							id: "qCD3eu",
							defaultMessage: "Back to latest version"
						})
					})]
				})]
			})
		})
	})
}
const $o = {
		type: "spring",
		bounce: .2,
		duration: .56
	},
	Yo = ({
		clientThreadId: s,
		turn: e
	}) => {
		const n = Js();
		return t.jsxs(X.div, {
			className: "absolute start-0 end-0 top-0 z-10 -translate-y-full",
			children: [t.jsx(X.div, {
				initial: {
					opacity: 0
				},
				animate: {
					opacity: 1
				},
				exit: {
					opacity: 0
				},
				className: "bg-vert-light-gradient dark:from-token-main-surface-primary absolute inset-0 -top-5 dark:bg-linear-to-t dark:to-transparent"
			}), t.jsx(X.div, {
				className: "flex items-center py-2",
				initial: {
					opacity: .75,
					translateX: -50,
					translateY: "100%"
				},
				animate: {
					opacity: 1,
					translateX: 0,
					translateY: "0"
				},
				exit: {
					opacity: 0,
					filter: "blur(8px)",
					transition: {
						delay: .4,
						duration: .72
					}
				},
				transition: $o,
				children: t.jsx(Io, {
					clientThreadId: s,
					onRequestCompletion: co,
					groupedMessagesToRender: e.messageGroups,
					allGroupedMessages: e.messageGroups,
					allMessages: e.messages,
					isUserTurn: !0,
					isFinalUserTurn: !1,
					isFinalAssistantTurn: !1,
					turnIndex: 0,
					isCompletionRequestInProgress: !1,
					isFeedbackEnabled: !1,
					isFinalTurn: !1,
					hasActiveRequest: n
				})
			})]
		}, "user-message")
	},
	Xo = ({
		clientThreadId: s
	}) => {
		const {
			lastUserTurn: e,
			lastAssistantTurn: n
		} = tt(s, c => {
			const r = rs.getConversationTurns(c);
			let a = null,
				l = null;
			for (let g = r.length - 1; g > 0; g--) {
				const i = r[g];
				if (!a && i.role === Wt.User ? a = i : !l && i.role === Wt.Assistant && (l = i), a && l) break
			}
			return {
				lastUserTurn: a,
				lastAssistantTurn: l
			}
		}), o = e && !n?.messages.some(c => c.recipient?.startsWith(en));
		return t.jsx(Pe, {
			initial: !1,
			children: o && t.jsx(Yo, {
				turn: e,
				clientThreadId: s
			})
		})
	},
	Jo = ({
		isRequestActive: s = !1,
		clientThreadId: e,
		readonlyReason: n,
		onCancel: o,
		onSubmit: c,
		onSubmitAccelerator: r,
		acceleratorActions: a = []
	}) => {
		const [l, g] = f.useState(!1), [i, d] = f.useState(""), [x, y] = f.useState(!0), m = B(), [T, h] = f.useState(!1), b = lo(), u = p => {
			c?.(p, i), d("")
		}, v = p => {
			if (p.nativeEvent.isComposing) return;
			const {
				metaKey: w,
				shiftKey: E,
				key: C
			} = p;
			C === "Enter" && i.trim() && !(E || w) && (u(p), p.preventDefault())
		};
		return t.jsxs(t.Fragment, {
			children: [l && !b && t.jsx(ho, {
				zIndexKey: "acceleratorsOverlay",
				className: "bg-white/95 dark:bg-black/85"
			}), t.jsx("div", {
				className: "relative mb-3 flex items-end justify-center",
				children: t.jsxs("div", {
					className: "relative mx-6 max-w-2xl flex-1",
					children: [t.jsx(Xo, {
						clientThreadId: e
					}), t.jsx("div", {
						className: "flex flex-auto items-start",
						children: t.jsx("div", {
							className: Ce("dark:bg-token-main-surface-secondary flex min-h-12 flex-auto items-center bg-[#f4f4f4] py-1 ps-6 pe-2", {
								"rounded-full": x,
								"rounded-2xl": !x,
								"bg-transparent": T
							}),
							children: t.jsxs("div", {
								className: "relative flex flex-auto items-center self-stretch",
								children: [t.jsx(ko, {
									placeholder: m.formatMessage({
										id: "zrUbTJ",
										defaultMessage: "Ask ChatGPT to edit"
									}),
									disabled: s,
									value: i,
									className: Ce("text-token-text-primary placeholder:text-token-text-secondary w-full resize-none border-0 bg-transparent p-0 outline-0 focus:ring-0 focus-visible:ring-0", {
										"opacity-0": T
									}),
									maxRows: 4,
									onChange: ({
										target: {
											value: p
										}
									}) => d(p),
									onKeyDown: v,
									onHeightChange: (p, {
										rowHeight: w
									}) => y(Math.floor(p / w) <= 1)
								}), i ? t.jsx(X.button, {
									className: Ce("dark bg-token-main-surface-primary h-8 w-8 rounded-full text-center disabled:bg-[#D7D7D7]", {
										"self-end": !x
									}),
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
										type: "tween",
										duration: .1
									},
									onMouseDown: u,
									children: t.jsx(tn, {
										className: "text-token-text-primary h-8 w-8"
									})
								}) : (a?.length ?? 0) > 0 && t.jsx(_o, {
									disableHint: !0,
									isVisuallyHidden: n?.isReadonly && !n.isStreaming,
									disableOverlay: !0,
									isEmbeddedInPromptArea: !0,
									isRequestActive: s,
									actions: a,
									onCancel: o,
									onExpandedChange: p => {
										b || h(p), g(p)
									},
									onSubmit: r,
									right: 0,
									bottom: 4
								})]
							})
						})
					})]
				})
			})]
		})
	};

function ea(s, e) {
	const n = new Set(s.map(l => l.id)),
		o = new Set(e.map(l => l.id)),
		c = s.filter(l => !o.has(l.id)).map(l => ({
			...l,
			diffStatus: Pt.REMOVED
		})),
		r = e.filter(l => !n.has(l.id)).map(l => ({
			...l,
			diffStatus: Pt.ADDED
		})),
		a = s.filter(l => o.has(l.id));
	return c.concat(r, a)
}
const ta = s => {
	const {
		textdocId: e
	} = s, n = sn(o => o?.resolveTempTextdocId[e] ?? e);
	return f.useMemo(() => ({
		...s,
		textdocId: n
	}), [n, s])
};
async function sa({
	textdocId: s,
	newTitle: e
}) {
	e != null && await V.safePost("/textdoc/{textdoc_id}/rename", {
		parameters: {
			path: {
				textdoc_id: s
			}
		},
		requestBody: {
			title: e
		}
	}).catch(n => {
		is.addError("renameCanvasTitle Error:", n)
	})
}
const na = ({
	serverThreadId: s,
	textdocVersion: e,
	initialTitle: n = "Untitled Document",
	isEditingTitle: o,
	setIsEditingTitle: c
}) => {
	const r = st(),
		{
			mutateAsync: a
		} = he({
			mutationKey: [s, "textdocs"],
			mutationFn: sa,
			onMutate: async ({
				textdocId: u,
				newTitle: v
			}) => {
				await r.cancelQueries({
					queryKey: [s, "textdocs"]
				});
				const p = r.getQueryData([s, "textdocs"]);
				return r.setQueryData([s, "textdocs"], w => {
					if (!w) return w;
					const E = new Map(w.persistedTextdocVersionById),
						C = E.get(u);
					if (C) {
						const I = {
							...C,
							title: v ?? ""
						};
						E.set(u, I)
					}
					const _ = w.persistedTextdocVersions.map(I => I.textdocId === u ? {
							...I,
							title: v ?? ""
						} : I),
						k = new Map(w.persistedTextdocById),
						R = k.get(u);
					if (R) {
						const I = {
							...R,
							title: v ?? ""
						};
						k.set(u, I)
					}
					return {
						...w,
						persistedTextdocVersionById: E,
						persistedTextdocVersions: _,
						persistedTextdocById: k
					}
				}), {
					previousTextDocData: p
				}
			},
			retry: 2,
			onError: (u, v, p) => {
				p?.previousTextDocData && r.setQueryData([s, "textdocs"], p.previousTextDocData), is.addError("Error updating title:", u)
			},
			onSettled: () => {
				r.invalidateQueries({
					queryKey: [s, "textdocs"]
				})
			}
		}),
		l = async u => {
			e && await a({
				textdocId: e.textdocId ?? "",
				newTitle: u
			})
		}, [g, i] = f.useState(n), d = f.useRef(null), x = f.useRef(g), y = f.useRef(!1);
	f.useEffect(() => {
		o && d.current && (d.current.focus(), d.current.select())
	}, [o]);
	const m = u => {
			i(u.target.value)
		},
		T = () => {
			x.current = g
		},
		h = async () => {
			y.current || await l(g), y.current = !1, c(!1)
		}, b = u => {
			(u.key === "Enter" || u.key === "Escape") && u.preventDefault(), u.key === "Enter" ? u.currentTarget.blur() : u.key === "Escape" && (i(x.current), y.current = !0, u.currentTarget.blur())
		};
	return t.jsx("input", {
		className: "w-[300px] rounded-lg border-none px-3 py-2 outline-hidden",
		ref: d,
		value: g,
		onChange: m,
		onFocus: T,
		onBlur: h,
		onKeyDown: b,
		style: {
			fontSize: "1.125rem",
			fontWeight: "bold",
			boxSizing: "border-box",
			backgroundColor: "var(--global-states-light-element-hover, rgba(0, 0, 0, 0.05))"
		}
	})
};

function oa(s) {
	const {
		voiceName: e
	} = nn(), n = s ? () => aa(s.textdocId, e, Ro()) : null, o = `${s?.textdocId}.${s?.versionInt}.${e}`;
	return Mo(n, o)
}

function aa(s, e, n) {
	return V.safeGet("/textdoc/{textdoc_id}/synthesize", {
		parameters: {
			path: {
				textdoc_id: s
			},
			query: {
				voice: e,
				format: n
			}
		},
		skipJsonTransform: !0
	})
}
const ra = ({
	textdocVersion: s,
	isPersisting: e = !1,
	isTextdocAttachedPending: n,
	isTextdocStreaming: o,
	hasDebug: c,
	shouldShowPlayButton: r = !1,
	hideRenameButton: a = !1,
	toggleDebugView: l,
	isDebugVisible: g,
	toggleConsoleVisibility: i,
	isConsoleOpen: d,
	clientThreadId: x
}) => {
	const y = B();
	on(), oa(s);
	const [m, T] = f.useState(!1), h = s?.title ?? "", b = cs(x) ?? "", u = Oe(s?.textdocId), v = !h || u?.status === an.INFERRING, p = () => {
		T(!0)
	}, [w, E] = f.useState(!1), {
		container: C,
		triggerRef: _
	} = ls({
		isOpen: w,
		onClose: () => E(!1)
	}), k = [!u && !a && !o ? t.jsx(D.Item, {
		icon: rn,
		onClick: p,
		children: y.formatMessage({
			id: "z/PT9T",
			defaultMessage: "Rename"
		})
	}, "rename") : null, null, r ? t.jsx(D.Item, {
		icon: cn,
		onClick: i,
		children: d ? y.formatMessage({
			id: "owGHqE",
			defaultMessage: "Close console"
		}) : y.formatMessage({
			id: "GPb4WX",
			defaultMessage: "Open console"
		})
	}, "console") : null, null].filter(Boolean);
	if (k.length === 0) return t.jsxs(t.Fragment, {
		children: [t.jsx("div", {
			className: "flex h-6 grow items-center overflow-hidden",
			children: t.jsx(se.Title, {
				className: "@[0px]:hidden @[150px]:block",
				children: v ? t.jsx("div", {
					className: "w-52",
					children: t.jsx(Vt, {
						lines: 1,
						size: "base",
						width: 100,
						widthVariance: 0
					})
				}) : h
			})
		}), e && t.jsx(Ot, {
			size: 12,
			className: "text-token-text-tertiary ps-1"
		})]
	});
	const R = s && t.jsx(D.Portal, {
		container: C,
		children: t.jsx(D.Content, {
			onCloseAutoFocus: I => I.preventDefault(),
			children: k
		})
	});
	return t.jsx(t.Fragment, {
		children: m ? t.jsx(na, {
			serverThreadId: b,
			textdocVersion: s,
			initialTitle: h,
			isEditingTitle: m,
			setIsEditingTitle: T
		}) : t.jsxs(t.Fragment, {
			children: [!1, t.jsxs(D.Root, {
				open: w,
				onOpenChange: E,
				children: [t.jsxs(D.Trigger, {
					ref: _,
					className: "hover:bg-token-surface-hover grid grid-cols-[1fr_auto] bg-transparent! pe-2",
					children: [t.jsx(se.Title, {
						className: "max-w-[270px] truncate overflow-hidden",
						children: v ? t.jsx("div", {
							className: "w-52",
							children: t.jsx(Vt, {
								lines: 1,
								size: "base",
								width: 100,
								widthVariance: 0
							})
						}) : h
					}), t.jsx("div", {
						className: "flex items-center ps-1",
						children: e ? t.jsx(Ot, {
							size: 12,
							className: "text-token-text-tertiary"
						}) : t.jsx(ln, {
							className: "icon-sm text-token-text-tertiary"
						})
					})]
				}), R]
			})]
		})
	})
};

function ia({
	textdocVersion: s,
	clientThreadId: e,
	color: n
}) {
	const {
		handleCopy: o,
		Icon: c,
		copyLabel: r
	} = po({
		textdocVersion: s,
		clientThreadId: e
	});
	return t.jsx(ee, {
		label: r,
		children: t.jsx(J, {
			icon: c,
			onClick: o,
			color: n
		})
	})
}

function ca({
	textdocVersion: s,
	disabled: e,
	color: n
}) {
	const o = B(),
		{
			handleFileDownload: c,
			handleBlobDownload: r,
			isLoading: a,
			downloadCopyLabel: l,
			isDocument: g
		} = Co(s);
	return g ? t.jsxs(D.Root, {
		open: !a && !e ? void 0 : !1,
		children: [t.jsx(D.BasicTrigger, {
			className: "hover:bg-transparent focus-visible:bg-transparent",
			children: t.jsx(ee, {
				label: l,
				children: t.jsx(J, {
					icon: Lt,
					disabled: a || e,
					color: n
				})
			})
		}), t.jsx(D.Portal, {
			children: t.jsxs(D.Content, {
				align: "end",
				children: [t.jsx(D.Item, {
					onClick: i => {
						i.preventDefault(), c("pdf")
					},
					children: o.formatMessage({
						id: "canvas.download-pdf-button.menu",
						defaultMessage: "PDF Document (.pdf)"
					})
				}), t.jsx(D.Item, {
					onClick: i => {
						i.preventDefault(), c("docx")
					},
					children: o.formatMessage({
						id: "canvas.download-docx-button.menu",
						defaultMessage: "Microsoft Word Document (.docx)"
					})
				}), t.jsx(D.Item, {
					onClick: i => {
						i.preventDefault(), c("md")
					},
					children: o.formatMessage({
						id: "canvas.download-md-button.menu",
						defaultMessage: "Markdown Document (.md)"
					})
				})]
			})
		})]
	}) : t.jsx(ee, {
		label: l,
		children: t.jsx(J, {
			icon: Lt,
			disabled: a || e,
			onClick: r,
			color: n
		})
	})
}

function la({
	disabled: s = !1,
	isShowingChanges: e,
	onMouseEnter: n,
	onClick: o,
	onEsc: c
}) {
	const r = B(),
		a = f.useRef(null);
	return f.useEffect(() => {
		if (e) {
			const l = g => {
				g.key === "Escape" && (c?.(), a.current && a.current === document.activeElement && a.current.blur())
			};
			return window.document.addEventListener("keydown", l), () => {
				window.document.removeEventListener("keydown", l)
			}
		}
	}, [e, c]), t.jsx(ee, {
		label: !s && r.formatMessage(e ? Jt.hideChanges : Jt.showChanges),
		children: t.jsx(J, {
			icon: No,
			ref: a,
			disabled: s,
			onClick: o,
			onMouseEnter: n,
			className: Ce("transition-colors enabled:hover:bg-black/5 dark:enabled:hover:bg-white/10", e && Do)
		})
	})
}
const Jt = ss({
	showChanges: {
		id: "3jMGNS",
		defaultMessage: "Show changes"
	},
	hideChanges: {
		id: "HWiQSk",
		defaultMessage: "Hide changes"
	}
});

function da({
	disabled: s = !1,
	hasPreviousVersion: e,
	hasNextVersion: n,
	hideShowChanges: o,
	isShowingChanges: c,
	onHoverPrevious: r,
	onHoverShowChanges: a,
	onToggleShowChanges: l,
	onClickPrevious: g,
	onClickNext: i
}) {
	const d = B();
	return t.jsxs("div", {
		className: "flex items-center",
		children: [t.jsx(Pe, {
			children: !o && t.jsx(X.div, {
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
					type: "spring",
					bounce: .24,
					duration: .4
				},
				children: t.jsx(la, {
					disabled: s || !e,
					isShowingChanges: c,
					onMouseEnter: a,
					onClick: l,
					onEsc: l
				})
			})
		}), t.jsx(ee, {
			label: e && d.formatMessage({
				id: "PoD5+8",
				defaultMessage: "Previous version"
			}),
			children: t.jsx(J, {
				disabled: s || !e,
				icon: dn,
				onMouseOver: r,
				onClick: g
			})
		}), t.jsx(ee, {
			label: n && d.formatMessage({
				id: "PJ8YVJ",
				defaultMessage: "Next version"
			}),
			children: t.jsx(J, {
				disabled: s || !n,
				icon: un,
				onClick: i
			})
		})]
	})
}

function ua(s) {
	for (const e of ma) {
		const n = s.match(e);
		if (n) return n[0]
	}
	return null
}
const ma = [/AKIA[0-9A-Z]{16}/, /AIza[0-9A-Za-z_-]{35}/, /^(?:ghp_[A-Za-z0-9]{36}|github_pat_[A-Za-z0-9]{22}_[A-Za-z0-9]{59}|gho_[A-Za-z0-9]{36}|ghu_[A-Za-z0-9]{36}|ghs_[A-Za-z0-9]{36}|ghr_[A-Za-z0-9]{36})$/, /xox[baprs]-[0-9A-Za-z-]+/, /sk-[A-Za-z0-9]{48}/, /SK[0-9a-fA-F]{32}/, /(sk_live_[0-9a-zA-Z]{24})|(sk_test_[0-9a-zA-Z]{24})/, /-----BEGIN PRIVATE KEY-----/],
	fa = `${Po}...`;

function ce(s) {
	return ["canvas", "textdoc", "share", s]
}

function ga({
	isLoading: s,
	isPublishedVersionLatest: e,
	sharedTextdoc: n,
	textdocVersion: o,
	title: c
}) {
	const {
		textdocId: r
	} = o, [a, l] = f.useState(!1), g = ua(o.content), i = (C, _) => {
		C && pn(C, void 0, _).then(() => {
			l(!0), setTimeout(() => {
				l(!1)
			}, 1500)
		}).catch(() => {})
	}, d = st(), {
		mutate: x,
		isPending: y
	} = he({
		scope: {
			id: r
		},
		mutationFn: C => V.safePost("/textdoc/{textdoc_id}/share", {
			parameters: {
				path: {
					textdoc_id: C
				}
			}
		}).then(_ => Me(_.shared_textdoc)),
		onSuccess: C => {
			d.setQueryData(ce(r), C), i(Ye(C.sharedTextdocId))
		}
	}), {
		mutate: m,
		isSuccess: T
	} = he({
		scope: {
			id: r
		},
		mutationFn: C => V.safePost("/textdoc/shared/{shared_textdoc_id}/update_to_latest", {
			parameters: {
				path: {
					shared_textdoc_id: C
				}
			}
		}).then(_ => Me(_.shared_textdoc)),
		onSuccess: C => {
			d.setQueryData(ce(r), C)
		}
	}), {
		mutate: h
	} = he({
		scope: {
			id: r
		},
		mutationFn: ({
			sharedTextdocId: C,
			access: _
		}) => V.safePost("/textdoc/shared/{shared_textdoc_id}/update_access", {
			parameters: {
				path: {
					shared_textdoc_id: C
				}
			},
			requestBody: {
				shared_textdoc_access: _
			}
		}).then(k => Me(k.shared_textdoc)),
		onMutate: ({
			access: C
		}) => {
			const _ = ce(r),
				k = d.getQueryData(_);
			return d.setQueryData(_, k && {
				...k,
				access: C
			}), {
				previousAccess: k?.access
			}
		},
		onSuccess: C => {
			d.setQueryData(ce(r), C)
		},
		onError: (C, _, k) => {
			const R = ce(r),
				I = d.getQueryData(R);
			d.setQueryData(R, I && {
				...I,
				access: k?.previousAccess
			})
		}
	}), b = f.useRef(null), u = C => {
		b.current?.focus(), n ? (M.logButtonClick(L.COPY_SHARE_LINK, xe(o)), i(Ye(n.sharedTextdocId), C)) : (M.logButtonClick(L.CREATE_SHARE_LINK, xe(o)), x(r))
	}, v = C => {
		n && (M.logButtonClick(C === Cn.PUBLIC ? L.UPDATE_SHARE_LINK_PUBLIC : L.UPDATE_SHARE_LINK_PRIVATE, xe(o)), h({
			sharedTextdocId: n.sharedTextdocId,
			access: C
		}))
	}, p = n ? Ye(n.sharedTextdocId) : void 0, w = () => {
		n && (M.logButtonClick(L.UPDATE_SHARE_LINK_TO_LATEST, xe(o)), m(n.sharedTextdocId))
	}, E = g || n?.isAnonifyApiKeyDetected;
	return t.jsx(Oo, {
		inputRef: b,
		isLoading: s,
		isPublishedVersionLatest: e,
		sharedObject: n && {
			id: n.sharedTextdocId,
			title: c,
			access: n.access,
			versionInt: n.versionInt,
			isModerationBlocked: n.isModerationBlocked,
			isAnonifyApiKeyDetected: n.isAnonifyApiKeyDetected
		},
		title: c,
		shareTextPlaceholder: fa,
		shareUrl: p,
		isCopySuccessful: a,
		didPublishUpdates: T,
		isCreateLinkRequestInProgress: y,
		handleUpdateLatestSharedVersion: w,
		handlePrivacyChange: v,
		handlePrimaryButtonClick: u,
		maybeRenderWarndingContent: () => t.jsx(t.Fragment, {
			children: E && t.jsx(ha, {})
		})
	})
}

function xe(s) {
	return {
		textdocType: s.type,
		textdocId: s.textdocId
	}
}

function xa({
	textdocVersion: s,
	isDisabled: e,
	title: n
}) {
	const o = uo(),
		c = B(),
		r = s?.textdocId,
		a = nt(De.hasSeenCanvasShareButtonNux),
		{
			data: l,
			isLoading: g
		} = Fs({
			enabled: !!r && !e,
			queryKey: ce(r),
			queryFn: () => !r || r.startsWith(yn) ? Promise.resolve(null) : V.safeGet("/textdoc/{textdoc_id}/share", {
				parameters: {
					path: {
						textdoc_id: r
					}
				}
			}).then(v => v.shared_textdoc && Me(v.shared_textdoc))
		}),
		[i, d] = f.useState(!1),
		{
			triggerRef: x,
			container: y
		} = ls({
			isOpen: i,
			onClose: () => d(!1)
		}),
		m = o?.isWorkspaceAccount() && !o?.features.includes(mo.WorkspaceShareLinks);
	if (e || m || !s) return t.jsx(ee, {
		label: m ? c.formatMessage(Xe.workspaceSharingDisabled) : c.formatMessage(Xe.share),
		children: t.jsx(J, {
			disabled: !0,
			icon: Bt
		})
	});
	const T = () => {
			M.logButtonClick(L.OPEN_SHARE_MENU, xe(s))
		},
		h = l?.versionInt === s.versionInt && l?.title === s.title,
		b = ({
			className: v
		}) => t.jsxs("div", {
			className: "relative h-fit w-fit",
			children: [t.jsx(Bt, {
				className: v
			}), !h && l && t.jsx("div", {
				className: "absolute end-0 top-[1px] flex items-center gap-1.5",
				children: t.jsx("div", {
					className: "h-1.5 w-1.5 rounded-full bg-blue-400"
				})
			})]
		}),
		u = t.jsxs(mn, {
			open: i,
			onOpenChange: d,
			children: [t.jsx(ee, {
				label: c.formatMessage(Xe.share),
				children: t.jsx(fn, {
					ref: x,
					asChild: !0,
					children: t.jsx(J, {
						icon: b,
						onClick: T
					})
				})
			}), t.jsx(Pe, {
				children: i && t.jsx(gn, {
					forceMount: !0,
					container: y,
					children: t.jsx(xn, {
						align: "end",
						className: "z-50",
						sideOffset: 8,
						collisionPadding: 8,
						children: t.jsx(ga, {
							title: n,
							sharedTextdoc: l,
							isLoading: g,
							isPublishedVersionLatest: h,
							textdocVersion: s
						})
					})
				})
			})]
		});
	return !a.isLoading && a.eligible ? t.jsx(hn, {
		announcementKey: De.hasSeenCanvasShareButtonNux,
		show: !0,
		side: "bottom",
		align: "end",
		theme: "bright",
		dismissOnOutsideClick: !0,
		badge: "none",
		title: t.jsx(Y, {
			id: "oHutKI",
			defaultMessage: "Share {title}",
			values: {
				title: n
			}
		}),
		description: t.jsx(Y, {
			id: "oQuH7b",
			defaultMessage: "Easily share your content with others — your chat stays private."
		}),
		onDismiss: a.markAsViewed,
		sideOffset: 0,
		children: u
	}) : u
}

function ha() {
	return t.jsx(vn, {
		type: "danger",
		className: "w-auto md:p-3",
		children: t.jsx(Y, {
			id: "8NG6sN",
			defaultMessage: "There may be an API key in your canvas. If you share the canvas, anyone with the link can see its contents."
		})
	})
}
const pa = ({
		clientThreadId: s,
		isHistoricalVersion: e,
		textdocVersion: n,
		readonlyReason: o,
		hasDebug: c,
		isEmbedded: r,
		isPersisting: a,
		isShowingChanges: l,
		hideRunCode: g = !1,
		hideHistoryActions: i = !1,
		hideRenameButton: d = !1,
		onHoverPrevious: x,
		onHoverShowChanges: y,
		onToggleShowChanges: m,
		onClickPrevious: T,
		onClickNext: h,
		onClickCodePreview: b,
		onClose: u,
		toggleDebugView: v,
		toggleConsoleVisibility: p,
		isCodeRunning: w,
		isTextdocAttachedPending: E,
		isTextdocStreaming: C,
		isConsoleOpen: _,
		isDebugVisible: k
	}) => {
		const R = B(),
			I = ds(),
			de = Oe(n?.textdocId),
			te = n?.title ?? "",
			{
				isCodePreviewable: ne,
				isCodeExecutable: N,
				hasCanvasCodeExecution: H
			} = ms(n),
			ve = !g && (ne || N),
			P = n?.versionInt,
			ue = P != null && P > 1,
			ye = e,
			Be = !i,
			He = ne && w,
			be = n == null || de != null || e || o.isStreaming,
			F = n == null || o.isStreaming,
			Q = ot(),
			oe = at(Q, "452089807");
		return t.jsxs(se.Header, {
			className: Ce("@container", ne && w && "bg-transparent!"),
			children: [t.jsx(se.CloseButton, {
				onClick: u
			}), t.jsx("div", {
				className: "@container flex flex-1 basis-0 items-center truncate leading-[0]",
				children: t.jsx(ra, {
					hasDebug: c,
					isConsoleOpen: _,
					isDebugVisible: k,
					toggleConsoleVisibility: p,
					toggleDebugView: v,
					isPersisting: a,
					textdocVersion: n,
					isTextdocAttachedPending: E,
					isTextdocStreaming: C,
					shouldShowPlayButton: ve,
					hideRenameButton: d,
					clientThreadId: s
				})
			}), t.jsxs("div", {
				className: "flex min-w-0 basis-auto items-center leading-[0] select-none",
				children: [Be && t.jsx(da, {
					hideShowChanges: He,
					disabled: o.isStreaming,
					hasNextVersion: ye,
					hasPreviousVersion: ue,
					isShowingChanges: l,
					onHoverPrevious: x,
					onHoverShowChanges: y,
					onToggleShowChanges: m,
					onClickPrevious: T,
					onClickNext: h
				}), t.jsx(ia, {
					clientThreadId: s,
					textdocVersion: n
				}), oe && n && n.type !== fe.LOADING && de == null && t.jsx(ca, {
					disabled: F,
					textdocVersion: n
				}), t.jsx(xa, {
					isDisabled: be,
					textdocVersion: n,
					title: te
				}), ve && t.jsx(Gs, {
					clientThreadId: s,
					isCodePreviewable: ne,
					isDisabled: !H || o.isTextdocStreaming && !w,
					disabledTooltip: H ? void 0 : R.formatMessage({
						id: "NTZRWe",
						defaultMessage: "Code execution for canvas is disabled for your workspace. Contact your admin to enable."
					}),
					onClick: b,
					isCodeRunning: w,
					textdocType: n?.type
				}), !r && !I && t.jsx(Lo, {
					clientThreadId: s
				})]
			})]
		})
	},
	Ca = s => {
		const e = ot(),
			n = at(e, "80186230"),
			o = ds(),
			{
				eligible: c,
				isLoading: r,
				markAsViewed: a
			} = nt(s);
		return {
			markAsViewed: a,
			eligible: !o && c && n,
			isLoading: r
		}
	};

function va() {
	return Ca(De.hasDismissedCanvasContextualOnboarding)
}

function ya(s) {
	const e = /\[([^\]]+)\]\((https?:\/\/[^\s)]+|www\.[^\s)]+)\)/gi,
		n = new Set,
		o = s.matchAll(e);
	for (const c of o) {
		const r = c[2];
		try {
			let a = r;
			a.startsWith("www.") && (a = "http://" + r), new URL(a), n.add(r)
		} catch {}
	}
	return n
}
const ba = async ({
	lastVersion: s,
	textdocId: e,
	content: n,
	comments: o
}) => {
	const c = bn(o, n);
	return (await V.safePost("/textdoc/{textdoc_id}", {
		parameters: {
			path: {
				textdoc_id: e
			}
		},
		requestBody: {
			version: s,
			content: n,
			comments: c
		}
	})).version
}, Ta = () => {
	const s = f.useRef([]),
		e = f.useRef(null),
		{
			mutateAsync: n,
			isPending: o
		} = he({
			mutationKey: ["canvas", "textdoc", "persist"],
			mutationFn: ba
		});
	return [f.useCallback(async (r, a, l) => {
		const g = new AbortController,
			d = (async () => {
				const [T] = s.current;
				try {
					await T?.promise
				} catch (h) {
					M.logError("Saving document", h)
				}
				if (!g.signal.aborted) try {
					const h = Math.max(e.current ?? 0, r.versionInt ?? os);
					let b = "";
					try {
						Xt(a) ? b = a() : b = a
					} catch (w) {
						M.logError("Serializing document", w)
					}
					let u = [];
					try {
						Xt(l) ? u = l() : u = l
					} catch (w) {
						M.logError("Adjusting comments", w)
					}
					const {
						textdocId: v
					} = r;
					Tn({
						textdocId: v,
						basedOnVersionInt: h,
						content: b,
						comments: u
					});
					const p = await n({
						textdocId: v,
						lastVersion: h,
						content: b,
						comments: u
					});
					wn({
						textdocId: v,
						basedOnVersionInt: h,
						newVersion: p
					}), e.current = p
				} catch (h) {
					M.logError("Error saving document", h)
				} finally {
					s.current.shift()
				}
			})(),
			x = {
				abort: () => g.abort(),
				promise: d
			},
			[y, m] = s.current;
		return m && (m.abort(), s.current = y ? [y] : []), s.current = y ? [y, x] : [x], d
	}, [n]), s, o]
}, wa = 3e3, Sa = s => {
	const [e, n, o] = Ta(), c = B(), r = f.useRef(null), a = f.useCallback(Sn(async (i, d, x) => {
		if (!Je(i)) return e(i, d, x);
		Re.replaceTempTextdocContent(i.textdocId, typeof d == "string" ? d : d())
	}, wa, {
		leading: !1
	}), [e]), l = An(s);
	return f.useEffect(() => {
		if (!l) return;
		const i = Qt(window, {
				pagehide: () => a.flush(),
				beforeunload: x => {
					a.flush(), x.returnValue = c.formatMessage({
						id: "QZrKwi",
						defaultMessage: "You have a canvas save in progress."
					})
				}
			}),
			d = Qt(document, {
				visibilitychange: () => a.flush(),
				keydown: () => {
					r.current = "keyboard"
				},
				mousemove: () => {
					r.current !== "mouse" && a.flush(), r.current = "mouse"
				}
			});
		return () => {
			r.current = null, d(), i()
		}
	}, [c, l, a]), f.useEffect(() => () => {
		a.flush()
	}, [s, a]), En(async () => {
		await a.flush(), await Promise.allSettled(n.current?.map(({
			promise: i
		}) => i) ?? [])
	}), [f.useCallback((i, d, x) => {
		const {
			textdocId: y
		} = i;
		return Je(i) || jn(y), a(i, d, x)
	}, [a]), a.flush, o || l]
};

function Aa(s, e, n) {
	const o = st(),
		c = n != null && e != null,
		{
			data: r,
			error: a,
			fetchNextPage: l,
			hasNextPage: g,
			isFetching: i
		} = Us(es(s, e, c)),
		d = f.useCallback(async () => {
			const h = e != null;
			await o.prefetchInfiniteQuery(es(s, e, h))
		}, [o, s, e]);
	f.useEffect(() => {
		const h = e;
		return () => {
			o.removeQueries({
				queryKey: fs(s, h),
				exact: !0
			})
		}
	}, [o, s, e]);
	const [x, y, m, T] = f.useMemo(() => {
		if (r && n) {
			const b = r.pages.flatMap(v => v),
				u = b.findIndex(v => "beforeVersion" in n ? (v.versionInt ?? os) < n.beforeVersion : v.versionInt === n.version);
			if (u !== -1) return [u === b.length - 1, b[u], u > 0 ? b[u - 1] : null, u < b.length - 1 ? b[u + 1] : null]
		}
		const h = r?.pages.flatMap(b => b) ?? [];
		return [!0, null, null, h.length === 0 ? null : h[0]]
	}, [r, n]);
	return f.useEffect(() => {
		!i && c && g && x && l()
	}, [i, c, g, x, l]), f.useEffect(() => {
		!y && a && ge(s)
	}, [y, a, s]), {
		historicalTextdocVersion: y,
		nextHistoricalTextdocVersion: m,
		prefetchHistoricalTextdocVersion: d,
		previousHistoricalTextdocVersion: T
	}
}

function fs(s, e = null) {
	return ["textdocHistory", s, e]
}

function es(s, e, n = !0) {
	return {
		queryKey: fs(s, e),
		queryFn: ({
			pageParam: o
		}) => Ea(s, o),
		initialPageParam: e ?? void 0,
		getNextPageParam: o => {
			const c = fo(o)?.versionInt;
			if (c && c > 1) return c
		},
		enabled: n,
		staleTime: 1 / 0,
		retry: 2
	}
}
async function Ea(s, e) {
	return e === void 0 || e <= 1 ? [] : (await V.safeGet("/textdoc/{textdoc_id}/history", {
		parameters: {
			path: {
				textdoc_id: s
			},
			query: {
				before_version: e
			}
		}
	})).previous_doc_states.map(({
		id: o,
		version: c,
		textdoc_type: r,
		title: a,
		content: l,
		updated_at: g,
		comments: i,
		metadata: d
	}) => ({
		textdocId: o,
		versionInt: c,
		messageId: null,
		title: a,
		type: In(r),
		content: l,
		status: ns.COMPLETE,
		createdAt: kn(g),
		comments: _n(i, l),
		metadata: {
			content_references: d?.content_references
		}
	}))
}
const Xa = ({
	isFullScreen: s = !1,
	isEmbedded: e = !1,
	hideHeader: n = !1,
	hideRunCode: o = !1,
	isReadonlyFromQueryParam: c = !1,
	hideRenameButton: r = !1,
	clientThreadId: a,
	focusedTextdoc: l,
	onClose: g,
	isAnimating: i = !1,
	width: d,
	hideBottomComposer: x = !1
}) => {
	const y = ot(),
		{
			textdocId: m,
			history: T,
			showChangesAtVersion: h = null,
			shouldRunCodeOnOpen: b = !1
		} = ta(l),
		u = B(),
		[v, p, w] = Sa(m),
		{
			targetedContent: E
		} = Mn(),
		C = Rn(),
		[_, k] = f.useState(!1),
		[R, I] = f.useState(!1),
		de = Dn(m),
		te = Nn(),
		ne = tt(a, rs.getRequestId),
		N = Pn(ne),
		{
			data: H,
			isLoading: ve
		} = On(m, h),
		[P, ue] = f.useState(!1),
		[ye, Be] = f.useState(null),
		He = Ln(a),
		be = f.useRef(null),
		F = de?.versions ?? [],
		Q = F[0]?.versionInt,
		{
			historicalTextdocVersion: oe,
			nextHistoricalTextdocVersion: gs,
			previousHistoricalTextdocVersion: xs,
			prefetchHistoricalTextdocVersion: rt
		} = Aa(m, Q, T),
		it = Bn();
	f.useEffect(() => {
		Ne.reset()
	}, [m]);
	const ct = F.length > 0 ? F[F.length - 1] : null,
		Fe = F.length > 1 ? F[F.length - 2] : null,
		lt = cs(a),
		{
			restoreHistoricalTextdocVersion: hs,
			optimisticRestoredTextdocVersion: ps
		} = Hn(lt, ct, oe),
		ae = T != null,
		A = ae ? oe : ct,
		K = h != null,
		me = zs(a, A),
		dt = i ? null : H,
		Te = (() => {
			if (i || A == null) return [];
			const S = Zt(A.comments);
			return !K && oe != null ? oe.comments : !K || H == null ? S : H.contentBefore !== H.contentAfter ? [] : ea(H.commentsBefore, H.commentsAfter)
		})(),
		O = A?.type ?? fe.LOADING,
		Ue = Fn(),
		ut = Je(A),
		Z = Un(A),
		qe = qn(A),
		mt = Kn(A),
		Cs = mt && !e,
		vs = Ht(te),
		ys = Ht(N);
	f.useEffect(() => {
		!ut && F.length === 0 && Ue !== Ft.NATIVE && (!te && vs.current || !N && ys.current || !te && !N) && g?.()
	}, [F.length, te, N]);
	const {
		content: G,
		currentlyStreamingLineIndex: ft
	} = H?.contentBefore != null && !pe(O) ? {
		content: H.contentBefore,
		currentlyStreamingLineIndex: null
	} : vo(A, Fe), bs = Gn(lt, Array.from(ya(G))), [we, Ke] = Qo({
		value: G,
		isRequestActive: N,
		isTextdocStreaming: Z,
		comments: Te
	}), gt = zn(A), xt = Ue === Ft.LAST_TURN || we || w;
	f.useEffect(() => {
		Wn().sendMessage({
			type: us.Streaming,
			streaming: xt
		})
	}, [xt]);
	const Ts = ({
			getSerializedDocument: S,
			getAdjustedComments: j
		}) => {
			A && v(A, S, j)
		},
		ws = S => {
			if (!A) return;
			const j = S.doc.toString();
			v(A, j, S.field(wo, !1) ?? [])
		},
		ht = (S, j, z, $, re) => {
			Ke(!0), me({
				sourceEvent: S,
				action: z,
				content: j,
				userMessageType: ke.ASK_CHATGPT,
				sourceRange: $,
				selectionMetadata: {
					selection_type: re,
					selection_position_range: $
				}
			})
		},
		pt = ({
			id: S
		}) => {
			gt(S, Kt.DISMISS), Ne.reset()
		},
		Ct = async (S, j) => {
			Ke(!0);
			const {
				id: z,
				at: $,
				content: re
			} = j;
			if (await gt(z, Kt.ACCEPT) === !1) return Ke(!1);
			me({
				sourceEvent: S,
				content: re,
				userMessageType: ke.ACCEPT_COMMENT,
				sourceRange: $,
				action: Yt.EDIT,
				selectionMetadata: {
					selection_type: $t.SELECTION,
					selection_position_range: $
				}
			})
		}, Ge = (S, j, z, $) => {
			const {
				action: re
			} = $;
			me({
				sourceEvent: S,
				action: re,
				content: z,
				sourceRange: j,
				userMessageType: ke.ACCELERATOR,
				acceleratorMetadata: {
					action: re,
					id: $.id,
					prompt: z
				},
				selectionMetadata: j != null ? {
					selection_type: $t.SELECTION,
					selection_position_range: j
				} : void 0
			})
		}, Ss = (S, j) => {
			me({
				sourceEvent: S,
				action: Yt.EDIT,
				content: j,
				userMessageType: ke.FULL_SCREEN_SUBMIT
			})
		}, As = Vn(), vt = S => As?.[S] ?? S, ze = () => Qn(a, void 0, !0), Es = () => {
			T ? Ie(m, T) : ge(m)
		}, U = Ao({
			streamingSource: Ue,
			isRestoring: ps != null,
			isRequestActive: N,
			isTextdocStreaming: Z,
			isReadonlyFromQueryParam: c,
			isHistoricalVersion: ae,
			isShowingChanges: K
		});
	let Se = null;
	const yt = i || U.isReadonly || we,
		Ae = as() || He || c || ut,
		bt = () => i && Te.length > 0 ? ie.ALL_HIDDEN : Ae ? ie.COMMENTS_READONLY : U.isReadonly ? U.isStreaming ? ie.ENABLED : U.isReadonlyFromQueryParam || U.isShowingChanges || U.isHistoricalVersion ? ie.COMMENTS_READONLY : ie.ALL_HIDDEN : ie.ENABLED,
		js = f.useCallback(async S => {
			const {
				suggestion: j
			} = await V.safePost("/textdoc/{textdoc_id}/autocomplete", {
				parameters: {
					path: {
						textdoc_id: m
					}
				},
				requestBody: {
					content: S
				}
			});
			return j
		}, [m]),
		Tt = s || i || c;
	let We = [];
	switch (O) {
		case fe.LOADING:
			Se = t.jsx(To, {});
			break;
		case fe.DOCUMENT:
			Se = t.jsx(bo, {
				value: G,
				comments: Te,
				previousValue: Fe?.content,
				getAutocompleteSuggestion: js,
				previousComments: Zt(Fe?.comments),
				isRewriting: qe,
				isAnimatingFromPreview: i,
				isSendDisabled: Ae,
				getStableCommentId: vt,
				diff: dt,
				isRequestActive: N,
				isDisabled: U.isReadonly || te,
				isWaitingForCommentResponse: we,
				hideAccelerators: Tt,
				hideToolbar: yt,
				hideEditOverlay: i,
				commentsMode: bt(),
				readonlyReason: U,
				onBlur: p,
				onSave: p,
				onChange: Ts,
				onCancelRequest: ze,
				targetedContent: E,
				onAddComment: ht,
				onAcceptComment: Ct,
				onDismissComment: pt,
				onSubmitAccelerator: Ge,
				onExitShowChanges: Es,
				safeUrls: bs,
				width: d,
				modelCursor: mt || Z && !qe ? A?.modelCursor : void 0,
				shouldResetSelection: A?.versionInt === 1,
				metadata: de?.metadata
			}), We = jo;
			break;
		default:
			pe(O) && (Se = t.jsx(yo, {
				id: "codemirror",
				getStableCommentId: vt,
				language: Eo(O),
				value: G,
				comments: Te,
				hideAccelerators: Tt,
				commentsMode: bt(),
				hideToolbar: yt,
				onSubmitAccelerator: Ge,
				currentlyStreamingLineIndex: ft ?? null,
				readonlyReason: U,
				isRequestActive: N,
				isSendDisabled: Ae,
				isWaitingForCommentResponse: we,
				onChange: ws,
				onCancelRequest: ze,
				onAddComment: ht,
				onBlur: p,
				onSave: p,
				codemirrorRef: be,
				onDismissComment: pt,
				onAcceptComment: Ct,
				textdocDiff: dt ?? void 0,
				modelCursor: Z && ft == null ? A?.modelCursor : void 0
			}), We = So)
	}
	const Ve = f.useRef(null),
		Ee = f.useRef(null),
		{
			hasCanvasCodeExecution: Qe,
			isCodeExecutable: wt,
			isCodePreviewable: W
		} = ms(A),
		St = Qe && W,
		At = Qe && wt,
		_s = Zn(),
		Et = f.useCallback(() => {
			!P && (St || At) ? (ue(!0), Ve.current?.runCode(O, G).finally(() => ue(!1))) : (Ve.current?.stopCode(), ue(!1))
		}, [St, At, P, G, O]),
		jt = $n(() => {
			Et()
		});
	f.useEffect(() => {
		b && jt()
	}, [b, jt]);
	const {
		eligible: ks,
		markAsViewed: Is
	} = va(), q = A?.versionInt, Ms = q != null && q > 1, Rs = ae, je = xs?.versionInt, Ze = gs?.versionInt, Ds = () => {
		K ? T ? Ie(m, T) : ge(m) : (M.logButtonClick(L.SHOW_CHANGES, {
			textdocType: O,
			textdocId: m,
			versionInt: q,
			latestVersionInt: Q
		}), q && Gt(m, q, T))
	}, Ns = () => {
		M.logButtonClick(L.HISTORY_PREVIOUS, {
			textdocType: O,
			textdocId: m,
			versionInt: q,
			latestVersionInt: Q,
			isShowingChanges: K
		}), m && q && Ms && Ie(m, {
			beforeVersion: q
		}, K && je != null ? je : void 0)
	}, Ps = () => {
		M.logButtonClick(L.HISTORY_NEXT, {
			textdocType: O,
			textdocId: m,
			versionInt: q,
			latestVersionInt: Q,
			isShowingChanges: K
		}), Rs && (Ze ? Ie(m, {
			version: Ze
		}, K ? Ze : void 0) : K && Q ? Gt(m, Q, null) : ge(m))
	}, Os = at(y, "1804926979"), _t = tt(a, Ho(m)), Ls = Bo(), kt = Oe(A?.textdocId), Bs = !n && t.jsx(pa, {
		hideRunCode: o,
		clientThreadId: a,
		isHistoricalVersion: ae,
		textdocVersion: A,
		readonlyReason: U,
		hasDebug: C,
		isEmbedded: e,
		isPersisting: w,
		isShowingChanges: K,
		isConsoleOpen: R,
		isDebugVisible: _,
		hideHistoryActions: c,
		hideRenameButton: r,
		onHoverPrevious: () => {
			rt(), je && it(m, je)
		},
		onHoverShowChanges: () => {
			rt(), q && it(m, q)
		},
		onToggleShowChanges: Ds,
		onClickPrevious: Ns,
		onClickNext: Ps,
		toggleDebugView: () => k(S => !S),
		toggleConsoleVisibility: () => {
			R || go.logEvent("Canvas Open Console Clicked"), I(S => !S)
		},
		onClose: () => {
			if (M.logButtonClick(L.CLOSE_TEXTDOC, {
					textdocType: A?.type
				}), Is(), kt && !s) {
				const {
					create_source: S,
					hasUserEdits: j,
					tempTextdocId: z
				} = kt;
				if (j && S !== qt.USER_CREATED_COMPOSER) {
					Rt(!0);
					return
				}
				Re.removeTempTextdoc(z), S === qt.USER_CREATED_COMPOSER && Ls.appendText(G)
			}
			g?.()
		},
		onClickCodePreview: Et,
		isCodeRunning: P,
		isTextdocStreaming: Z,
		isTextdocAttachedPending: Ut(A)
	});
	let It = null;
	const _e = !o && Qe && (wt || W),
		$e = Ws(O, G);
	f.useEffect(() => {
		_e && ($e && Ee.current?.prepareEnvironment($e), W && P && !Z && xo(Ee.current)?.updateCode(G))
	}, [_e, $e, Z]);
	const Mt = A?.title ?? "";
	_e && (It = t.jsx(Vs, {
		title: Mt,
		onChangeBackgroundColor: Be,
		visuallyHidden: !W || !P,
		disableNetworkRequests: !_s,
		networkAccessDeniedMessage: u.formatMessage({
			id: "GE4AJf",
			defaultMessage: "Network requests in canvas are disabled for your workspace. Contact your admin to enable this feature."
		}),
		enableTransition: W && O !== fe.CODE_HTML,
		isCodeUpdating: Z,
		ref: Ee
	}));
	const [Hs, Rt] = f.useState(!1), Dt = t.jsx(Fo, {
		isOpen: Hs,
		dismissModal: () => Rt(!1),
		closeTextdocEditor: () => {
			g?.()
		},
		textdocVersion: A,
		clientThreadId: a
	}), Nt = t.jsxs(t.Fragment, {
		children: [Bs, t.jsx(se.Content, {
			scrollToBottomMode: Cs ? "bottom" : "top",
			shouldScrollToTop: qe,
			isLoading: ve,
			hideChildren: W && P,
			overlay: It,
			children: Se
		}), _e && t.jsx(Qs, {
			ref: Ve,
			sandboxRef: Ee,
			textdocId: m,
			textdocTitle: Mt,
			textdocContent: G,
			isTextdocAttachedPending: Ut(A),
			highlightLine: S => be.current?.highlightLine(S),
			isRequestActive: N,
			createTextdocTurn: me,
			isOpen: R,
			onOpenChange: I
		}), t.jsx(Pe, {
			children: ae && !c && t.jsx(Zo, {
				onClickRestore: hs,
				onClickResetLatest: () => ge(m)
			})
		}), s && !ae && !x && !(P && W) && !Ae && t.jsx(Jo, {
			isRequestActive: N,
			clientThreadId: a,
			onSubmitAccelerator: Ge,
			onSubmit: Ss,
			onCancel: ze,
			readonlyReason: U,
			acceleratorActions: We
		}), !i && !e && ks && t.jsx(Vo, {
			textdocType: O
		})]
	});
	if (Os && _t && A) {
		const j = new URLSearchParams(window.location.search).get(Zs),
			z = j == null ? void 0 : parseInt(j);
		return t.jsxs(t.Fragment, {
			children: [Dt, t.jsx(se, {
				previewBackgroundColor: ye,
				isPreviewingCode: W && P,
				children: t.jsxs("div", {
					className: "flex h-full",
					children: [t.jsx("div", {
						className: "relative flex h-full min-h-0 flex-auto grow flex-col",
						children: Nt
					}), t.jsx($s, {
						hiveId: _t,
						clientThreadId: a,
						textdocVersion: A,
						ts: z
					})]
				})
			})]
		})
	}
	return t.jsxs(t.Fragment, {
		children: [Dt, t.jsx(se, {
			previewBackgroundColor: ye,
			isPreviewingCode: W && P,
			children: Nt
		})]
	})
};
export {
	us as C, Xa as T
};
//# sourceMappingURL=kmhb0332a6s22krq.js.map