import {
	dB as C,
	bE as y,
	q as f,
	x as h,
	aZ as k,
	dI as x,
	hg as S,
	jk as O,
	k5 as _,
	k6 as A,
	k7 as v,
	k8 as E,
	im as P,
	bp as N,
	H as T,
	bD as L
} from "./egb2c0f6p1ew61vt.js";
import {
	u as U
} from "./ixsisjuxwij5x7d3.js";
import {
	y as l,
	A as u,
	z as F,
	D as R,
	U as I
} from "./f7j18j5u52u1pnnk.js";
import {
	f as j,
	r as d,
	e as V,
	l as D
} from "./fyeo2h7okrqcf3nz.js";
class b extends C()(() => ({
	isOpen: !0
})) {
	closeModal = () => {
		this.setState({
			isOpen: !1
		})
	}
}

function B() {
	const {
		eligible: e,
		isLoading: o,
		markAsViewed: a
	} = l(u.NewOnboardingFlow), t = b.useStore(), s = b.useState(n => n.isOpen);
	return {
		isOpen: e && !o && s,
		isLoading: o,
		closeModal: t.closeModal,
		markAsViewed: a
	}
}
const H = j({
	hi: {
		id: "new_user_onboarding.hi",
		defaultMessage: "Hi"
	},
	hiThere: {
		id: "new_user_onboarding.hi_there",
		defaultMessage: "Hi there"
	},
	tryUploadingAFile: {
		defaultMessage: "Try uploading a file",
		id: "chatgpt.new-onboarding.try-uploading-a-file"
	},
	uploadFileExample: {
		defaultMessage: "ChatGPT can summarize and analyze your files or images.",
		id: "chatgpt.new-onboarding.upload-file-exp"
	},
	school: {
		defaultMessage: "School",
		id: "chatgpt.new-onboarding.school"
	},
	schoolPrompt: {
		defaultMessage: "I’m trying to learn and do better in school.",
		id: "chatgpt.new-onboarding.school-prompt"
	},
	work: {
		defaultMessage: "Work",
		id: "chatgpt.new-onboarding.work"
	},
	workPrompt: {
		defaultMessage: "I'm here to learn and grow in my work.",
		id: "chatgpt.new-onboarding.work-prompt"
	},
	personalTasks: {
		defaultMessage: "Personal tasks",
		id: "chatgpt.new-onboarding.personal-tasks"
	},
	personalTasksPrompt: {
		defaultMessage: "I'm here for my personal tasks",
		id: "chatgpt.new-onboarding.personal-tasks-prompt"
	},
	funAndEntertainment: {
		defaultMessage: "Fun and entertainment",
		id: "chatgpt.new-onboarding.fun-and-entertainment"
	},
	funAndEntertainmentPrompt: {
		defaultMessage: "I'm here to explore fun ideas and relax.",
		id: "chatgpt.new-onboarding.fun-and-entertainment-prompt"
	},
	other: {
		defaultMessage: "Other",
		id: "chatgpt.new-onboarding.other"
	},
	justCurious: {
		defaultMessage: "Just curious",
		id: "chatgpt.new-onboarding.just-curious"
	},
	justCuriousPrompt: {
		defaultMessage: "I'm just curious, exploring what you can do.",
		id: "chatgpt.new-onboarding.just-curious-prompt"
	},
	tryAnExample: {
		defaultMessage: "Try an example below or send any message in the message box below.",
		id: "chatgpt.new-onboarding.try-an-example"
	}
});

function q() {
	const {
		eligible: e,
		isLoading: o,
		markAsViewed: a
	} = l(u.NewOnboardingConvo);
	return {
		isEligible: e && !o,
		markAsViewed: a
	}
}

function J(e) {
	const o = f(),
		a = d.useContext(S),
		t = O(a),
		s = F(M => M.onboardingConvoState || void 0),
		{
			isEligible: n,
			markAsViewed: r
		} = q(),
		g = z({
			clientThreadId: e
		}),
		c = h(o, "109457"),
		i = V(),
		w = R(),
		p = D(),
		m = w || _(p) || A(p);
	d.useEffect(() => {
		n && !s && (i.locale === v || i.messages !== E) && !t && !m && c.get("onboarding_style", "") === "CONVO" && (I.setOnboardingConvoState({
			onboardingConvoClientThreadId: e
		}), r(), g({
			eventSource: "url",
			stepPrompt: i.formatMessage(H.hi),
			messageMetadata: {
				is_visually_hidden_from_conversation: !0
			},
			authorMetadata: {
				real_author: P.Onboarding
			}
		}), N.logEvent("chatgpt_convo_onboarding_started"))
	}, [n, r, g, s, i, i.locale, i.messages, e, c, t, m])
}
const z = ({
	clientThreadId: e
}) => {
	const o = U(e);
	return d.useCallback(({
		stepPrompt: a,
		messageMetadata: t,
		authorMetadata: s,
		...n
	}) => {
		o({
			...n,
			promptMessage: x(a, t ?? void 0, s ?? void 0),
			completionMetadata: {
				isOnboardingConversation: !0,
				conversationMode: {
					kind: k.PrimaryAssistant
				},
				systemHints: t?.onboarding?.system_hints
			},
			skipNotification: !0
		})
	}, [o])
};

function Y(e) {
	const o = y(e, n => T.findNode(n, r => r.message.author.role === L.User)?.message.metadata?.onboarding),
		{
			eligible: a,
			isLoading: t,
			markAsViewed: s
		} = l(u.hasSeenFilePickerNuxTooltip);
	return {
		isEligible: o?.triggered_tools?.includes("file_upload") && a && !t,
		markAsViewed: s
	}
}

function Q() {
	const e = f();
	return h(e, "109457", {
		disableExposureLog: !0
	}).get("onboarding_show_followups", !1)
}
export {
	z as a, B as b, J as c, Q as d, H as m, Y as u
};
//# sourceMappingURL=mtx41j31lzyyzsit.js.map