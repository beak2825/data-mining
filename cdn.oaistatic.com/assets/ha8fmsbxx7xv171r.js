import {
	r as f,
	v as M,
	e as x,
	j as t,
	f as y
} from "./fyeo2h7okrqcf3nz.js";
import {
	kH as S,
	dI as b,
	bB as v,
	bD as j,
	B as w,
	w as i
} from "./egb2c0f6p1ew61vt.js";
import {
	dm as C,
	dn as k,
	dp as h
} from "./f7j18j5u52u1pnnk.js";
import {
	u as E
} from "./ixsisjuxwij5x7d3.js";
const T = (e, s, o, a) => {
	const r = C(e),
		u = E(e),
		n = S();
	return f.useCallback((c, m) => {
		if (n) return;
		const d = `
        The user would like you to focus on a file from an earlier search result as you respond to their prompt: "${o.replaceAll('"',"")}". The file's ID is "${s.replaceAll('"',"")}".
        When you respond, try to acknowledge that you're focusing on the file if it's not clear from the context. For example, if you mclick the file, you could mention that you've looked at the file.
        `,
			l = _(d, {
				exclude_after_next_user_message: !0
			});
		u({
			sourceEvent: c,
			promptMessage: b(m, {
				retrieval_hint_file_data: {
					id: s,
					name: o,
					url: a
				}
			}),
			completionMetadata: r ? {
				conversationMode: r
			} : void 0,
			appendMessages: [l]
		})
	}, [n, o, s, u, r, a])
};

function _(e, s) {
	return {
		id: M(),
		author: {
			role: j.System
		},
		content: {
			content_type: v.Text,
			parts: Array.isArray(e) ? e : [e]
		},
		metadata: s
	}
}

function G({
	className: e,
	clientThreadId: s,
	fileCloudDocUrl: o,
	fileId: a,
	fileName: r,
	isFollowupMenuOpen: u,
	setIsFollowupMenuOpen: n,
	trackFileSourceFollowup: c
}) {
	const m = x(),
		d = T(s, a, r, o),
		p = f.useCallback((l, g) => {
			g.length && (d(l, g), n(!1), c?.())
		}, [d, n, c]);
	return t.jsxs(i.Root, {
		open: u,
		onOpenChange: n,
		children: [t.jsx(i.Trigger, {
			className: e,
			children: t.jsx(h, {
				className: "icon"
			})
		}), t.jsx(i.Portal, {
			children: t.jsxs(i.Content, {
				size: "medium",
				children: [Object.values(F).map(l => t.jsx(A, {
					sendReply: p,
					suggestedText: m.formatMessage(l)
				}, l.defaultMessage)), t.jsx("div", {
					className: "mx-2 flex cursor-pointer flex-row items-center gap-2 p-2.5 px-3 py-2.5 text-sm",
					children: t.jsx(R, {
						sendReply: p
					})
				})]
			})
		})]
	})
}

function A({
	suggestedText: e,
	sendReply: s
}) {
	return t.jsx(i.Item, {
		icon: h,
		onSelect: o => s(o, e),
		textValue: "",
		children: e
	})
}
const F = y({
	fileFollowupSuggestionTellMeMore: {
		id: "skmNc0",
		defaultMessage: "Tell me more about this."
	},
	fileFollowupSuggestionSummarize: {
		id: "BiNEEG",
		defaultMessage: "Summarize this."
	}
});

function R({
	sendReply: e
}) {
	const s = x(),
		[o, a] = f.useState("");
	return t.jsxs("form", {
		onSubmit: r => {
			r.preventDefault(), e(r, o), a("")
		},
		className: "border-token-border-default flex flex-1 items-center gap-2 rounded-full border border-solid px-4 py-2 pe-2",
		children: [t.jsx("input", {
			type: "text",
			onChange: r => a(r.target.value),
			className: "text-token-text-primary w-full flex-1 border-none bg-transparent p-0 text-sm font-normal ring-0 focus:border-none focus:shadow-none focus:ring-0",
			placeholder: s.formatMessage({
				id: "tJa6v0",
				defaultMessage: "Ask about this…"
			}),
			value: o
		}), t.jsx(w, {
			className: "flex-0",
			disabled: !o,
			icon: k,
			color: "primary",
			size: "small",
			type: "submit"
		})]
	})
}
export {
	G as F, R as a, T as u
};
//# sourceMappingURL=ha8fmsbxx7xv171r.js.map