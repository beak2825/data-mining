import {
	r as n,
	j as s,
	n as _,
	M as f
} from "./fyeo2h7okrqcf3nz.js";
import {
	q as h,
	B as T,
	aZ as w,
	dI as x,
	em as y,
	bE as C,
	Q as v,
	R as P,
	H as E
} from "./egb2c0f6p1ew61vt.js";
import {
	r as S
} from "./ixsisjuxwij5x7d3.js";
const i = 118,
	I = e => {
		const t = C(e, c => E.getCurrentNode(c)?.message);
		if (!t || !j(t) || t.metadata?.auto_proceed_cancelled) return !1;
		const o = Date.now(),
			r = (t.create_time ?? Date.now() / 1e3) * 1e3;
		return Math.max(0, Math.ceil(i - (o - r) / 1e3)) > 0
	};

function j(e) {
	return !!(e.metadata?.n7jupd_message && e.channel === "commentary" && e.end_turn === !0)
}
async function N(e) {
	const t = v(e);
	if (t) return await P.safePost("/conversation/{conversation_id}/agent/cancel_auto_proceed", {
		parameters: {
			path: {
				conversation_id: t
			}
		}
	})
}
const O = ({
	lastMessage: e,
	clientThreadId: t
}) => {
	const o = h(),
		r = n.useRef((e.create_time ?? Date.now() / 1e3) * 1e3),
		{
			initialTimeLeft: a,
			initialProgress: c
		} = n.useMemo(() => {
			const d = Date.now(),
				g = r.current,
				m = Math.ceil(i - (d - g) / 1e3),
				M = (i - m) / i;
			return {
				initialTimeLeft: m,
				initialProgress: M
			}
		}, []),
		[u, l] = n.useState(!1);
	n.useEffect(() => {
		if (a <= 0) {
			l(!0);
			return
		}
		const d = setTimeout(() => l(!0), a * 1e3);
		return () => clearTimeout(d)
	}, [a]);
	const p = async () => {
		l(!0), await S({
			ctx: o,
			clientThreadId: t,
			eventSource: "mouse",
			promptMessage: x("Please proceed. Do not ask any additional follow-up questions.", {
				is_auto_proceed_message: !0
			}),
			parentMessageId: e.id,
			completionMetadata: {
				systemHints: [y],
				conversationMode: {
					kind: w.PrimaryAssistant
				}
			}
		})
	};
	return a < -30 ? null : s.jsx("div", {
		className: "my-2 flex",
		children: s.jsxs(T, {
			onClick: p,
			disabled: u,
			className: "relative min-w-32 overflow-hidden bg-gray-500 px-4 opacity-90 transition-all hover:opacity-100",
			children: [s.jsx(_.div, {
				className: "btn-primary pointer-none absolute inset-0 -z-10 block",
				initial: {
					scaleX: c
				},
				animate: {
					scaleX: 1
				},
				transition: {
					duration: a,
					ease: "linear",
					type: "tween"
				},
				layout: !1,
				style: {
					transformOrigin: "0% 50%",
					width: "100%",
					willChange: "transform",
					transform: "translateZ(0)"
				}
			}), u ? s.jsx(f, {
				id: "clarification.loading",
				defaultMessage: "Proceeding..."
			}) : s.jsx(f, {
				id: "clarification.modelContinueMessage",
				defaultMessage: "Continue"
			})]
		})
	})
};
export {
	O as C, N as c, j as i, I as u
};
//# sourceMappingURL=f2cokc4vvw85wf3h.js.map