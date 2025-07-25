import {
	r as n,
	l as te,
	j as h,
	e as Ae,
	f as ke
} from "./fyeo2h7okrqcf3nz.js";
import {
	aa as xe,
	ab as Oe,
	a5 as A,
	a6 as le,
	ac as Ne,
	ad as ye,
	ae as ve,
	af as De,
	ag as we,
	ah as Be,
	ai as Le,
	aj as Ie,
	ak as Pe,
	al as We,
	am as Re,
	an as Te,
	ao as Ee,
	ap as Ue,
	aq as je,
	ar as Ve,
	as as Ge,
	at as qe,
	au as ze,
	av as He,
	aw as Qe,
	ax as Fe,
	ay as Je,
	az as Ke,
	aA as _e,
	aB as Xe,
	aC as Ye,
	aD as Ze,
	aE as $e,
	aF as ea,
	aG as aa,
	aH as oa,
	aI as ta,
	aJ as sa,
	aK as na,
	aL as ia,
	aM as ra,
	aN as la,
	aO as ca,
	aP as da,
	aQ as ua,
	aR as fa,
	aS as ga,
	z as ha,
	aT as C,
	U as se,
	aU as ne,
	aV as Ma,
	aW as ma
} from "./f7j18j5u52u1pnnk.js";
import {
	k6 as pa,
	jo as ba,
	jn as Sa,
	jl as Ca,
	bE as Aa,
	cy as ka,
	m as xa,
	q as Oa,
	aS as Na,
	iH as ya,
	ka as ie,
	iI as va,
	b6 as Da,
	cQ as wa
} from "./egb2c0f6p1ew61vt.js";
import {
	u as Ba,
	I as La
} from "./mzdwbfzlwdoj9187.js";
import {
	b as Ia
} from "./mtx41j31lzyyzsit.js";
const Pa = ({
		onClose: a
	}) => {
		const o = Ae(),
			c = A(le.isBusinessWorkspace),
			d = A(u => u.currentWorkspace),
			i = c ? o.formatMessage(re.workspaceWelcome, {
				workspaceName: d?.name
			}) : "ChatGPT";
		return h.jsx(Da, {
			testId: "modal-onboarding",
			isOpen: !0,
			onClose: wa,
			type: "success",
			title: i,
			size: "custom",
			noPadding: !0,
			className: "max-w-3xl",
			description: o.formatMessage(re.personalOnboardingSubheading),
			children: h.jsx(Ma, {
				onClose: a,
				scope: ma.Personal
			})
		})
	},
	Wa = ({
		onClose: a
	}) => {
		const o = va.useStore();
		return n.useEffect(() => (o.setOnCloseSideEffect(a), o.setManualVisibility(!0), () => {
			o.setManualVisibility(!1)
		}), [a, o]), null
	};

function Ga({
	clientThreadId: a,
	page: o
}) {
	const [c, d] = n.useState(0), {
		hasSeenOnboardingDate: i
	} = xe(), {
		hasSeenTeamOwnerOnboardingDate: u
	} = Oe(), m = A(le.isBusinessWorkspace), [ce, de] = n.useState(!1), ue = te(), k = pa(ue), {
		data: fe,
		isPending: ge,
		isEnabled: he
	} = Ne(), x = ye(fe, ge && he), O = ba(), N = Sa(), y = Ca(), [Me, p] = Aa(a, e => [!e || e.isLoading, e?.conversationOrigin]), b = Me && !!a, {
		data: t,
		isError: f
	} = ka(), S = xa(t), r = t != null, v = t && t?.accountItems.length > 1 && t.currentAccountId == null, D = t?.accountItems.some(e => e.isPersonalAccount()), w = !!t?.accountItems && t.accountItems.length > 0 && t.accountItems.every(({
		canAccessWithCurrentSession: e
	}) => !e), {
		eligible: B,
		isLoading: L
	} = ve(), me = Oa(), I = Na(me, "1542198993"), {
		punchOutRequireLoginInfo: P
	} = De(), {
		state: W
	} = we(), {
		isOpen: R,
		isLoading: T
	} = Be(), {
		isOpen: E,
		isLoading: U
	} = Le(), {
		isOpen: j,
		isLoading: V
	} = Ie(), {
		isOpen: G,
		isLoading: q
	} = Pe(), {
		state: z
	} = We(), H = Re(), Q = Ba(), F = Te(), J = Ee(), K = Ue(), _ = je(), X = Ve(), Y = Ge(), pe = !1, {
		isOpen: Z,
		isLoading: $
	} = qe(), {
		isOpen: be
	} = Ia(), {
		shouldShowCookieBanner: ee,
		isCookieConsentBannerLoading: ae
	} = ya(), l = n.useMemo(() => [{
		Component: ze,
		visibility: ["chat", "codex"],
		getModalState: () => P ? "show" : "hide",
		isDeferrable: !1
	}, {
		Component: He,
		visibility: ["chat", "codex"],
		getModalState: () => W,
		isDeferrable: !1
	}, {
		Component: Qe,
		visibility: ["chat"],
		getModalState: () => z,
		isDeferrable: !1
	}, {
		Component: Fe,
		visibility: ["chat"],
		getModalState: () => $ ? "loading" : Z ? "show" : "hide",
		isDeferrable: !1
	}, {
		Component: Je,
		visibility: ["chat"],
		getModalState: () => F,
		isDeferrable: !0
	}, {
		Component: Ke,
		visibility: ["chat"],
		getModalState: () => T || b ? "loading" : p === ie.APPLE ? "hide" : R ? "show" : "hide",
		isDeferrable: !0
	}, {
		Component: _e,
		visibility: ["chat"],
		getModalState: () => q || b ? "loading" : p === ie.APPLE ? "hide" : G ? "show" : "hide",
		isDeferrable: !0
	}, {
		Component: Wa,
		visibility: ["chat", "codex"],
		getModalState: () => ae ? "loading" : ee ? "show" : "hide",
		isDeferrable: !1
	}, {
		Component: Pa,
		visibility: ["chat"],
		getModalState: () => m || k ? "hide" : i === null ? "loading" : i === !1 ? "show" : "hide",
		isDeferrable: !0
	}, {
		Component: Xe,
		visibility: ["chat", "codex"],
		getModalState: () => f ? "hide" : v ? "show" : r ? "hide" : "loading",
		isDeferrable: !1
	}, {
		Component: Ye,
		visibility: ["chat", "codex"],
		getModalState: () => O !== null ? "show" : f || r ? "hide" : "loading",
		isDeferrable: !1
	}, {
		Component: Ze,
		visibility: ["chat", "codex"],
		getModalState: () => N !== null ? "show" : f || r ? "hide" : "loading",
		isDeferrable: !1
	}, {
		Component: $e,
		visibility: ["chat", "codex"],
		getModalState: () => y != null ? "show" : f || r ? "hide" : "loading",
		isDeferrable: !1
	}, {
		Component: ea,
		visibility: ["chat", "codex"],
		getModalState: () => r ? w ? "show" : "hide" : "loading",
		isDeferrable: !1
	}, {
		Component: aa,
		visibility: ["chat", "codex"],
		getModalState: () => U ? "loading" : E ? "show" : "hide",
		isDeferrable: !1
	}, {
		Component: oa,
		visibility: ["chat", "codex"],
		getModalState: () => V ? "loading" : j ? "show" : "hide",
		isDeferrable: !1
	}, {
		Component: ta,
		visibility: ["chat", "codex"],
		getModalState: () => "hide",
		isDeferrable: !1
	}, {
		Component: sa,
		visibility: ["chat", "codex"],
		getModalState: () => !S?.isTeam() || !S?.isOwnerOfAccount() || !D ? "hide" : !r || u === null ? "loading" : u === !1 ? "show" : "hide",
		isDeferrable: !1
	}, {
		Component: na,
		visibility: ["chat", "codex"],
		getModalState: () => m ? i === null ? "loading" : i === !1 ? "show" : "hide" : "hide",
		isDeferrable: !0
	}, {
		Component: ia,
		visibility: ["chat"],
		getModalState: () => L ? "loading" : B && I ? "show" : "hide",
		isDeferrable: !1
	}, {
		Component: ra,
		visibility: ["chat", "codex"],
		getModalState: () => x,
		isDeferrable: !1
	}, {
		Component: la,
		visibility: ["chat"],
		getModalState: () => H,
		isDeferrable: !1
	}, {
		Component: g => a && h.jsx(La, {
			clientThreadId: a,
			...g
		}),
		visibility: ["chat"],
		getModalState: () => Q,
		isDeferrable: !1
	}, {
		Component: ca,
		visibility: ["chat"],
		getModalState: () => J,
		isDeferrable: !1
	}, {
		Component: da,
		visibility: ["chat"],
		getModalState: () => K,
		isDeferrable: !1
	}, {
		Component: ua,
		visibility: ["chat"],
		getModalState: () => _,
		isDeferrable: !1
	}, {
		Component: fa,
		visibility: ["chat"],
		getModalState: () => X,
		isDeferrable: !1
	}, {
		Component: ga,
		visibility: ["chat"],
		getModalState: () => Y,
		isDeferrable: !0
	}].filter(g => g.visibility.includes(o)), [o, P, W, z, $, Z, F, T, b, p, R, q, G, ae, ee, m, k, i, f, v, r, O, N, y, w, U, E, V, j, S, D, u, L, B, I, x, H, a, Q, J, K, _, X, Y, pe])[c], Se = ce;
	let s;
	l && (l.isDeferrable && Se ? s = "hide" : l.Component ? s = l.getModalState() : s = "hide"), n.useEffect(() => {
		s === "hide" && d(c + 1)
	}, [c, s]);
	const {
		pathname: M
	} = te(), oe = n.useRef(M);
	if (n.useEffect(() => {
			oe.current !== M && (oe.current = M, d(0))
		}, [M]), n.useEffect(() => {
			const e = s === "show",
				g = ha.getState().activeModals.has(C.BlockingInitialComponent);
			e !== g && (e ? se.openModal(C.BlockingInitialComponent) : se.closeModal(C.BlockingInitialComponent))
		}, [s]), l == null) return ne.trackNamespace(ne.NS_COMPOSER), h.jsx("span", {
		"data-testid": "blocking-initial-modals-done",
		className: "hidden"
	});
	if (s !== "show" || be) return null;
	const Ce = l.Component;
	return h.jsx(Ce, {
		onClose: () => {
			de(!0), d(e => e + 1)
		}
	})
}
const re = ke({
	workspaceWelcome: {
		id: "BlockingInitialModals.workspaceWelcome",
		defaultMessage: "Welcome to the {workspaceName} workspace"
	},
	personalOnboardingSubheading: {
		id: "BlockingInitialModals.personalOnboardingSubheading",
		defaultMessage: "Tips for getting started"
	}
});
export {
	Ga as B
};
//# sourceMappingURL=li5c35ml98k2npcy.js.map