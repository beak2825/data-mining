import {
	r as x,
	j as s,
	A as ke,
	M as Te,
	e as Se,
	a as ve,
	f as ye
} from "./fyeo2h7okrqcf3nz.js";
import {
	d as q,
	u as we,
	I as Me,
	R as je
} from "./lqc3mxovgoy4h7eq.js";
import {
	cS as d,
	gx as se,
	a7 as P,
	bz as Ee,
	dp as Ie,
	cT as Fe,
	fy as Be,
	fz as Ne,
	o as Ae,
	q as j,
	v as We,
	W as Z,
	cQ as U,
	cR as ee,
	dq as Re,
	gy as Le,
	gz as Oe,
	gA as De,
	ep as Pe,
	gB as qe,
	gC as He,
	gD as Qe,
	gE as Ke,
	gF as _e,
	gG as Ge,
	gH as ze,
	gI as Ve,
	gJ as Je,
	gK as Xe
} from "./f7j18j5u52u1pnnk.js";
import {
	aw as $e,
	ij as Ye,
	gO as Ze,
	ek as Ue,
	q as H,
	b5 as et,
	aS as I,
	bm as ae,
	T as tt,
	b9 as st,
	ay as at,
	d as E,
	f as nt
} from "./egb2c0f6p1ew61vt.js";

function ne({
	isFollowUp: r,
	hasComments: i
}) {
	const l = d(n => n.getRateLimit()?.remaining === 0),
		m = d(({
			environmentId: n
		}) => n),
		e = d(({
			branch: n
		}) => n),
		h = q(),
		f = !$e(h.isEmpty$) || i,
		{
			isConnected: C,
			error: a
		} = Ye(Ue.GITHUB_CONNECTOR, "github", "/codex", Ze.CODEX);
	return l ? "rate-limit" : !m && !e && !r ? "no-environment" : !r && !C ? "no-github-connection" : !r && a ? "connect-github-error" : f ? "enabled" : "no-content"
}

function ot({
	taskId: r,
	turnId: i,
	followUpSuggestions: l,
	hasComments: m,
	isSubmitting: e,
	onSuggestionClick: h,
	children: g
}) {
	H();
	const f = it(),
		[C, a] = x.useState(null);
	et();
	const n = ne({
		isFollowUp: !0,
		hasComments: m
	});
	let v = se(n);
	n === "no-content" && (v = void 0);
	const S = !(f === "hidden" || !l.length) && r && i;
	return x.useEffect(() => {
		S && P.recordFollowUpsSeen(r, i, l.length)
	}, [S, r, i, l.length]), S ? s.jsxs("div", {
		className: "bg-token-bg-tertiary flex flex-col gap-1.5 rounded-2xl p-2",
		children: [s.jsx(ke, {
			initial: !1,
			children: f === "visible" && s.jsx("div", {
				className: "flex flex-col",
				inert: e,
				children: l.map((y, p) => s.jsx(rt, {
					index: p,
					taskId: r,
					turnId: i,
					suggestion: y.suggestion,
					disabledReason: v,
					loading: C === p && e,
					onClick: () => {
						e || (a(p), h(y.suggestion))
					}
				}, p))
			})
		}), f === "collapsed" && s.jsxs("button", {
			type: "button",
			className: "text-token-text-tertiary enabled:hover:text-token-text-secondary focus:bg-token-bg-secondary flex items-center gap-2 rounded-lg p-2 text-xs font-semibold focus:outline-none",
			onClick: () => {
				P.recordFollowUpsExpanded(r, i)
			},
			children: [s.jsx(Ee, {
				className: "icon-sm"
			}), s.jsx(Te, {
				id: "wham.composer.followup.show",
				defaultMessage: "Suggestions"
			}, "text")]
		}, "collapsed"), g({
			isWrappedByContainer: !0
		})]
	}) : g({
		isWrappedByContainer: !1
	})
}

function rt({
	taskId: r,
	turnId: i,
	index: l,
	suggestion: m,
	disabledReason: e,
	loading: h,
	onClick: g
}) {
	return s.jsx(tt, {
		side: "right",
		sideOffset: 10,
		label: e,
		children: s.jsxs("button", {
			type: "button",
			disabled: !!e || h,
			className: "group hover:bg-token-bg-secondary focus:bg-token-bg-secondary -disabled:cursor-pointer flex w-full items-start gap-1.5 rounded-lg px-2 py-1 focus:outline-none disabled:cursor-not-allowed disabled:opacity-50",
			onClick: () => {
				g(), P.recordFollowUpsClicked(r, i, l, m.severity)
			},
			children: [s.jsx("span", {
				className: "pt-[0.125rem]",
				children: h ? s.jsx(st, {
					className: "text-token-text-tertiary icon-sm"
				}) : s.jsx(Ie, {
					className: "text-token-text-tertiary icon-sm"
				})
			}), s.jsx("span", {
				className: "text-token-text-primary line-clamp-2 text-start text-sm leading-snug break-words",
				children: m.title
			})]
		})
	})
}

function it() {
	const r = H(),
		i = I(r, "3485296344") || void 0,
		l = q(),
		{
			isExpanded: m
		} = ae(l.store);
	return i ? m ? "collapsed" : "visible" : "hidden"
}

function gt({
	disableAutoFocus: r = !1,
	isBigBoxMode: i = !1,
	isExpandedByDefault: l = !1,
	disableDuringSubmit: m = !1,
	followUp: e,
	onClearComments: h,
	onSubmit: g,
	onSuccess: f,
	attemptIndex: C
}) {
	const a = Se(),
		n = at(),
		{
			refetch: v
		} = Fe(),
		{
			refetch: S
		} = Be(e?.taskId),
		{
			refetch: y
		} = Ne(e?.taskId),
		p = d(({
			environmentId: t
		}) => t),
		Q = d(({
			branch: t
		}) => t),
		K = d(({
			addTurnToTaskMap: t
		}) => t),
		[oe, re] = x.useState(!0),
		[w, _] = x.useState(!1),
		ie = d(t => t.bestOfN),
		ce = d(t => t.setBestOfN),
		[de, ue] = x.useState(1),
		F = e ? de : ie,
		le = e ? ue : ce,
		me = d(t => t.imageSnapshot),
		B = H(),
		N = I(B, "3492040717"),
		he = I(B, "879591222") || void 0,
		G = I(B, "3536244140"),
		[ge, z] = x.useState(!1),
		u = q(),
		{
			whisperControls: fe,
			waveContainerRef: pe
		} = we({
			composerController: u,
			composerType: "codex"
		}),
		{
			controlsDisabled: A,
			waveformData: V,
			waveWidth: xe,
			isExpanded: W
		} = ae(u.store),
		J = d(t => t.getRateLimit()?.remaining === 0),
		b = J && !!e,
		M = !!e && (e.comments.length ?? 0) > 0;
	Ae([{
		key: "focusComposer",
		action: () => u.focus(),
		actionMessageDescriptor: a.formatMessage({
			id: "wham.keyboardActions.focusComposer",
			defaultMessage: "Focus chat"
		}),
		group: We.Chat,
		keyboardBinding: [j.Shift, j.Escape],
		altKeyboardBindings: e ? void 0 : [
			[j.Mod, j.Shift, "o"]
		]
	}]);
	const X = ne({
			isFollowUp: !!e,
			hasComments: M
		}),
		$ = se(X),
		R = !!$ || w && m,
		{
			mutate: k,
			isPending: Ce
		} = ve({
			mutationFn: async ({
				runEnvironmentInQaMode: t,
				promptOverride: D
			} = {
				runEnvironmentInQaMode: !1
			}) => {
				const T = D ?? u.getContentToSend().content;
				if (!(!!T.length || M)) throw new Error("No content to submit");
				if (g?.(), _(!0), e) return await Z.createFollowUpTask(e.taskId, e.turnId, T, e.comments, t, N ? F : void 0).catch(o => {
					throw D || u.setText(T), o instanceof E && o.status === 429 ? n.danger(a.formatMessage(te.rateLimit), {
						id: e.turnId,
						duration: 5,
						hasCloseButton: !0
					}) : o instanceof U ? ee(o, e.turnId, a, n) : o instanceof E && o.status === 403 && o.detail?.toLowerCase().includes("multi-factor authentication") ? z(!0) : n.danger(a.formatMessage({
						id: "wham.whamComposer.failedToCreateFollowUpTask",
						defaultMessage: "Failed to create follow-up"
					}), {
						id: e.turnId,
						duration: 5,
						hasCloseButton: !0
					}), o
				});
				{
					if (Q) {
						if (!p) throw new Error("Environment is required for new tasks.")
					} else throw new Error("Branch is required");
					re(!1);
					const o = crypto.randomUUID();
					return d.getState().addPendingTaskId(o), Z.createNewTask(p, Q, T, t, N ? F : void 0, me).catch(c => {
						throw d.getState().removePendingTaskId(o), D || (u.getContentToSend().content.length ? (n.danger(a.formatMessage({
							id: "wham.whamComposer.failedToCreateTaskCopyToClipboard",
							defaultMessage: "Failed to create task. Previous prompt copied to clipboard."
						}), {
							id: o,
							duration: 5,
							hasCloseButton: !0
						}), navigator.clipboard.writeText(T)) : u.setText(T)), c
					}).catch(c => {
						throw c instanceof E && c.status === 429 ? n.danger(a.formatMessage(te.rateLimit), {
							id: o,
							duration: 5,
							hasCloseButton: !0
						}) : c instanceof U ? ee(c, o, a, n) : c instanceof E && c.status === 403 && c.detail?.toLowerCase().includes("multi-factor authentication") ? z(!0) : n.danger(a.formatMessage({
							id: "wham.whamComposer.failedToCreateTask",
							defaultMessage: "Failed to create task"
						}), {
							id: o,
							duration: 5,
							hasCloseButton: !0
						}), c
					}).then(c => (d.getState().assignPendingTaskToFinalTask(o, c.task.id), d.getState().setRateLimit(c.rate_limit), c))
				}
			},
			onSuccess: t => {
				K(t.task.id, t.turn), t.user_turn && K(t.task.id, t.user_turn), f?.(t), setTimeout(() => {
					u.focus()
				}, 0), S(), v(), e && y()
			},
			onSettled: () => {
				_(!1)
			}
		});
	x.useEffect(() => {
		if (!R) return u.subscribe("keydown", t => {
			t.metaKey && t.key === "Enter" ? k({
				runEnvironmentInQaMode: !1
			}) : t.altKey && t.key === "Enter" && k({
				runEnvironmentInQaMode: !0
			})
		})
	}, [u, k, R]);
	const Y = Re(e ? [e.turnStatus, ...e.siblingTurnStatuses] : [], t => t === "pending" || t === "in_progress" ? 1 : 0),
		L = !!e && he && Y > 0;
	let O;
	G ? O = !A && X !== "no-content" && !L : O = !L;
	const be = (e?.siblingTurnStatuses?.length ?? 0) > 1 && C ? a.formatMessage({
		id: "wham.whamComposer.followUpOnTurn",
		defaultMessage: "Follow-up on version {version}"
	}, {
		version: C
	}) : a.formatMessage({
		id: "wham.whamComposer.requestChangesOrAskAQuestion",
		defaultMessage: "Request changes or ask a question"
	});
	return s.jsx(ot, {
		taskId: e?.taskId,
		turnId: e?.turnId,
		followUpSuggestions: e?.followUpSuggestions ?? [],
		hasComments: M,
		isSubmitting: w,
		onSuggestionClick: t => {
			k({
				runEnvironmentInQaMode: !1,
				promptOverride: t.body
			})
		},
		children: ({
			isWrappedByContainer: t
		}) => s.jsxs("div", {
			className: "contents",
			inert: m && w || b,
			children: [s.jsxs(Le, {
				isExpandedByDefault: l && !b,
				canCollapseWithInput: t,
				isTemporaryChat: !1,
				shouldUseTightRadius: t,
				onSubmit: () => {
					Ce || k({
						runEnvironmentInQaMode: !1
					})
				},
				composerController: u,
				children: [s.jsx(Oe, {
					children: s.jsx(De, {
						composerController: u,
						enabled: i && !b && W,
						children: A ? V ? s.jsx("div", {
							className: "max-w-full min-w-0 flex-1",
							ref: pe,
							children: s.jsx(Pe, {
								className: nt("h-14", i && !b && W ? "mt-12" : void 0),
								waveform: V,
								containerWidth: xe,
								scaleFactor: 10,
								initialValue: Me
							})
						}) : null : s.jsx(je, {
							composerController: u,
							disableAutoFocus: r || J,
							textareaMaxHeightClassName: e ? "max-h-[max(10rem,min(calc(100dvh-29rem),10rem))]" : "max-h-[max(10rem,min(calc(100dvh-29rem),50dvh))]",
							placeholder: e ? be : oe ? a.formatMessage({
								id: "wham.whamComposer.describeACodingTask",
								defaultMessage: "Describe a task"
							}) : a.formatMessage({
								id: "wham.whamComposer.describeAnotherCodingTask",
								defaultMessage: "Describe another task"
							})
						})
					})
				}), M && s.jsx(qe, {
					children: s.jsx(He, {
						comments: e.comments,
						onClearComments: h
					})
				}), !A && s.jsx(Qe, {
					children: s.jsxs("div", {
						className: "flex gap-2",
						children: [!e && s.jsx(Ke, {}), N && s.jsx(_e, {
							attempts: F,
							setAttempts: le
						})]
					})
				}), s.jsxs(Ge, {
					children: [W && !b && s.jsxs(s.Fragment, {
						children: [G && s.jsx("div", {
							inert: w,
							children: fe
						}), O && s.jsx(ze, {
							isSubmitDisabled: R,
							createTask: k,
							disabledReason: $
						}), L && s.jsx(Ve, {
							taskId: e.taskId,
							turnId: e.turnId,
							hasMultipleInProgressOrStreamingTurns: Y > 1
						})]
					}), b && s.jsx(Je, {})]
				})]
			}), ge && s.jsx(Xe, {})]
		})
	})
}
const te = ye({
	rateLimit: {
		id: "wham.whamComposer.failedToCreateTaskRateLimit",
		defaultMessage: "Codex is busy right now. Please try again later."
	}
});
export {
	gt as W
};
//# sourceMappingURL=ia4gjlhup29rqu2j.js.map