import {
	J as G,
	kK as E,
	K as A,
	q as M,
	cl as w,
	cm as b,
	kL as k,
	cI as I,
	aS as D,
	h7 as O,
	D as C,
	j as q,
	bn as B,
	cy as F,
	cz as H,
	dP as K,
	L as N,
	b as x
} from "./egb2c0f6p1ew61vt.js";
import {
	d5 as P,
	dt as z,
	du as W,
	dl as j,
	dv as $,
	dw as J,
	dx as _,
	dy as Q
} from "./f7j18j5u52u1pnnk.js";
import {
	r as u,
	p as X
} from "./fyeo2h7okrqcf3nz.js";
import {
	g as Y
} from "./cbrjkkbokuo79ldz.js";

function Z({
	ctx: e,
	clientThreadId: t,
	threadState: o,
	searchParams: s,
	planType: r,
	isModelSticky: a,
	hasPlusFeatures: i
}) {
	if (o?.modelId) return o.modelId;
	if (!G(t)) return;
	const n = s?.get("model");
	if (n && !P(e, n)) return n;
	const c = z();
	return c && !P(e, c) && a ? c : W(r, i)
}

function ae(e, t) {
	if (!t || !e) return E.SHORT_LABEL;
	const o = t.categories.find(({
		defaultModel: s,
		supportedModels: r
	}) => s === e || r?.includes(e));
	return o == null ? E.SHORT_LABEL : o.renderHeaderType ?? E.SHORT_LABEL
}

function ie(e, t) {
	return !t || !e ? !1 : !!t.groups.find(({
		modelIds: s
	}) => s.includes(e))?.group
}

function ue(e, t, o, s = "short") {
	if (e !== void 0) {
		if (t) {
			const {
				modelLabel: r,
				fullModelLabel: a
			} = Y(e, t);
			return s === "short" ? r : a
		}
		switch (e) {
			case "auto":
				return "";
			case "gpt-4o":
				return s === "short" ? "4o" : "GPT-4o";
			case "gpt-4o-mini":
				return s === "short" ? "4o mini" : "GPT-4o mini";
			case "gpt-4o-jawbone":
				return o.formatMessage({
					id: "8y5npr",
					defaultMessage: "Tasks"
				});
			case "gpt-4":
				return s === "short" ? "4" : "GPT-4";
			case "gpt-4-5":
				return s === "short" ? "4.5" : "GPT-4.5";
			case "o1":
				return "o1";
			case "o1-pro":
				return "o1 pro";
			case "o3-mini":
			case "o3-mini-high":
			case "o4-mini":
			case "o4-mini-high":
			case "o3":
				return e;
			default:
				return
		}
	}
}
const p = A(void 0),
	V = 1e3 * 60 * 9,
	ee = A([]);

function te(e) {
	const t = M(),
		o = q()?.planType,
		[s] = X(),
		r = w(e),
		a = r && B(r),
		i = Q(),
		{
			data: n
		} = F(),
		c = n && H(n);
	return Z({
		ctx: t,
		clientThreadId: e,
		threadState: a,
		searchParams: s,
		planType: o,
		isModelSticky: !!i,
		hasPlusFeatures: c
	})
}

function se(e) {
	const t = K(e, "2943229081"),
		o = I(e, "3529298638").get("enabled", !1),
		s = t.get("require-voice-used-recently", !1);
	if (o && !s) return _.debug("User using transceiver and recency not required, prefetch OK"), !0;
	const r = t.get("voice-used-within-past-days", 7),
		a = r * 24 * 60 * 60 * 1e3,
		i = N.getItem(x.VoiceLastUsed),
		n = i ? new Date(i) : null,
		c = n ? n.getTime() > Date.now() - a : !1;
	return _.debug(`User ${c?"passes":"fails"} recency requirement, prefetch ${c?"OK":"SKIP"}`, {
		voiceUsedWithinDays: r,
		lastUsedVoiceDate: n
	}), c
}
const de = ({
	conversationId: e
}) => {
	const t = M(),
		{
			voiceName: o
		} = j(),
		s = w(e),
		r = $(),
		a = u.useRef(!1),
		i = J(m => m.isVoiceModeActive),
		n = b(),
		c = te(e) ?? k,
		f = u.useMemo(() => {
			const m = I(t, "3529298638").get("enabled", !1),
				y = D(t, "2209667701"),
				d = m || y,
				S = se(t),
				l = !!n,
				g = [];
			return g.push(!d && "gate-disabled"), g.push(!S && "not-voice-used-recently"), g.push(l && "is-custom-gpt"), g.filter(U => typeof U == "string")
		}, [t, n]),
		h = u.useMemo(() => ({
			conversation_id: s ?? null,
			requested_voice_mode: "advanced",
			gizmo_id: n ?? null,
			voice: o ?? null,
			requested_default_model: c
		}), [s, o, n, c]),
		[L, v] = u.useState(!0),
		R = u.useRef(void 0),
		T = u.useRef(void 0);
	return u.useEffect(() => {
		v(!0)
	}, [h]), u.useEffect(() => {
		ee.set(f), f.length > 0 && p.set(void 0);
		const m = !i && f.length === 0 && L,
			y = a.current;
		!m || y || (a.current = !0, _.debug("Prefetching voice status"), r(h, "voice-status-cache").then(d => {
			const {
				chatreq: S
			} = d;
			p.set({
				...d,
				proofOfWorkPromise: new Promise((l, g) => {
					S ? O.getEnforcementToken(S).then(l).catch(g) : l(null)
				})
			}), R.current = Date.now(), v(!1), clearTimeout(T.current), T.current = setTimeout(() => {
				const l = R.current ?? 0;
				Date.now() - l >= V && (p.set(void 0), v(!0), C.addAction("voice-status-cache-stale", {
					conversationId: h.conversation_id
				}))
			}, V)
		}).catch(d => {
			d.code === "conversation_not_found" ? C.addAction("voice-status-cache-conversation-not-found", {
				conversationId: h.conversation_id
			}) : C.addError(new Error("Voice status cache failed"), d), p.set(void 0)
		}).finally(() => {
			a.current = !1
		}))
	}, [r, h, f, i, L]), u.useEffect(() => () => {
		clearTimeout(T.current)
	}, []), null
};
export {
	de as V, ae as a, ie as b, Z as c, ee as d, p as e, ue as g
};
//# sourceMappingURL=f9rv07xfg1rgyv7i.js.map