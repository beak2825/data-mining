import {
	j as e,
	M as f,
	f as te,
	R as ue,
	e as se,
	r as k,
	k as he
} from "./fyeo2h7okrqcf3nz.js";
import {
	l as ge,
	w as h,
	kz as Q,
	q as ae,
	cE as pe,
	f3 as me,
	ck as fe,
	cy as Me,
	cz as Se,
	cl as xe,
	d4 as be,
	aw as we,
	K as je,
	P as G,
	f8 as ye,
	kA as B,
	T as $,
	M as ne,
	aY as Ae,
	bp as Ee
} from "./egb2c0f6p1ew61vt.js";
import {
	cZ as Ce,
	ba as Ne,
	c_ as S,
	c$ as Te,
	d0 as I,
	d1 as _e,
	d2 as Le,
	d3 as V,
	d4 as j,
	d5 as ve,
	d6 as Pe,
	d7 as Ie
} from "./f7j18j5u52u1pnnk.js";
import {
	A as Oe,
	C as De
} from "./lk4s8c9e8k6949av.js";
const J = "needsCreditsSection",
	Ue = () => {
		const s = ge()?.isOwnerOfAccount();
		return e.jsxs(h.Item, {
			className: "pointer-events-none pe-2.5! hover:bg-transparent hover:text-inherit",
			onSelect: l => l.preventDefault(),
			disabled: !0,
			children: [e.jsx("div", {
				className: "text-token-text-tertiary text-xs",
				children: e.jsx(f, {
					...s ? K.ownerDescription : K.description
				})
			}), s ? e.jsx(Oe, {
				size: "small",
				trigger: "thread-header-dropdown-credits-section"
			}) : e.jsx(De, {
				size: "small",
				creditConsumingProduct: "gpt-4-5",
				trigger: "thread-header-dropdown-credits-section"
			})]
		})
	},
	K = te({
		description: {
			id: "prompt-textarea.teamsCreditRequestBanner.label",
			defaultMessage: "Limits reached. Send a request to your admin to get access"
		},
		ownerDescription: {
			id: "prompt-textarea.teamsCreditRequestBanner.ownerLabel",
			defaultMessage: "Limits reached. Add credits to your account"
		}
	});

function Z(o, s) {
	let l = o;
	if (o === Q.AUTO) {
		const c = s?.categories.filter(({
			defaultModel: n
		}) => n !== Q.AUTO);
		c?.length === 1 && (l = c[0].defaultModel)
	}
	const g = s?.categories.find(({
		defaultModel: c,
		supportedModels: n
	}) => c === l || n?.includes(l));
	if (g) {
		const {
			categoryId: c
		} = g;
		return {
			selectedCategory: c,
			modelLabel: g.shortLabel,
			fullModelLabel: g.label
		}
	}
	const r = s?.groups.find(({
		modelIds: c
	}) => c.includes(l));
	if (r) {
		const {
			group: c,
			shortLabel: n,
			label: i
		} = r;
		return {
			selectedCategory: c,
			modelLabel: n,
			fullModelLabel: i
		}
	}
	return {
		selectedCategory: null,
		modelLabel: null,
		fullModelLabel: null
	}
}

function ke(o, s, l, g) {
	const r = s ? o.formatMessage(ee.beta) : l ? o.formatMessage(ee.alpha) : g;
	if (r) return e.jsx(ne, {
		children: r
	})
}

function Ge({
	category: o,
	modelSwitcherDenialsBySlug: s,
	currentGizmoId: l,
	currentModelId: g,
	testId: r,
	preferredModelId: c
}) {
	const n = se(),
		{
			defaultModel: i,
			label: x,
			description: p,
			isBeta: y,
			isAlpha: O,
			modelBadge: D
		} = o,
		m = Ae(l ?? ""),
		A = ae(),
		E = ve(A, i);
	return e.jsxs(I, {
		value: i,
		currentModelId: g,
		modelSwitcherDenialsBySlug: s,
		secondary: p,
		deprecated: E,
		isSelected: (!l || m) && g === i,
		testId: r,
		preferredModelId: c,
		children: [x, ke(n, y, O, E ? n.formatMessage({
			id: "rFijPv",
			defaultMessage: "Deprecated"
		}) : D)]
	}, i)
}

function He({
	sections: o
}) {
	return e.jsx(e.Fragment, {
		children: o.map((s, l) => e.jsxs(ue.Fragment, {
			children: [l !== 0 ? e.jsx(h.Separator, {}) : null, s.content]
		}, s.id))
	})
}

function We(o, s, l, g, r) {
	const c = se();
	ae();
	const n = pe(o),
		i = n.id,
		x = me(o);
	let {
		data: p
	} = fe();
	const {
		data: y
	} = Me(), O = y && Se(y) && !0, D = xe(o), m = Ce({
		clientThreadId: o
	}), A = p?.modelPickerVersion === 2, E = !D, {
		isUnauthenticated: R
	} = be(), oe = Ne(), C = s.find(({
		categoryId: t
	}) => t === S.ALPHA), N = s.find(({
		categoryId: t
	}) => t === S.DATA_CAMPAIGNS), T = s.find(({
		categoryId: t
	}) => t === S.EXPERIMENTS), _ = s.find(({
		categoryId: t
	}) => t === S.MAINLINE), [w, le] = k.useState(""), re = we(je(!0)), U = [C, N, T, _].reduce((t, a) => a ? [...t, ...a.options.map(d => ({
		...d,
		badge: a.categoryId
	}))] : t, []), F = k.useMemo(() => w ? U.filter(t => t.name.toLowerCase().includes(w.toLowerCase())) : U, [U, w]);
	if (g && x && p) {
		const t = JSON.parse(JSON.stringify(p));
		t.categories = t.categories.filter(({
			defaultModel: a
		}) => a.startsWith("gpt-4o") || a === "gpt-4-1"), p = t
	}
	const z = !!C?.options.length,
		H = !!N?.options.length,
		W = !!T?.options.length,
		Y = !!_?.options.length,
		q = he(),
		ie = k.useCallback(() => {
			G.logEvent("Account Pay: Open Payment from Model Picker", {
				content: "gizmo-button"
			}), ye(q, "Thread header dropdown")
		}, [q]),
		de = () => {
			Ee.logEvent("chatgpt_model_switcher_plus_upgrade_button_clicked"), G.logEvent("Model Switcher Plus Upgrade Button Clicked"), R ? oe({
				shouldOpenPaymentModalOnAuth: !0,
				callback: t => {
					G.logSignUpButtonClicked({
						location: "Model switcher GPT-4 upsell",
						provider: t
					})
				}
			}) : ie()
		},
		b = [],
		ce = e.jsxs(h.Label, {
			className: "flex items-center",
			children: [e.jsx(f, {
				id: "coNCb7",
				defaultMessage: "Models"
			}), e.jsx($, {
				side: "right",
				className: "ms-1.5",
				delayDuration: 120,
				label: e.jsx(f, {
					id: "/vFWz/",
					defaultMessage: "Learn more"
				}),
				children: e.jsx("a", {
					href: "https://help.openai.com/en/articles/7864572-what-is-the-chatgpt-model-selector",
					target: "_blank",
					rel: "noreferrer",
					children: e.jsx(V, {
						className: "h-3.5 w-3.5 shrink-0"
					})
				})
			})]
		}, "models-section-header");
	if (R) {
		const t = {
			id: "modelSection",
			content: []
		};
		t.content.push(e.jsx(Te, {
			location: "model-switcher",
			statsig_login_event: "chatgpt_modelswitcher_login_button_clicked",
			statsig_signup_event: "chatgpt_modelswitcher_signup_button_clicked"
		}, "noAuthUpsell")), b.push(t)
	} else if (!O && !x) {
		const t = {
			id: "modelSection",
			content: []
		};
		t.content.push(e.jsx(I, {
			value: "",
			currentModelId: i,
			onClick: de,
			modelSwitcherDenialsBySlug: m,
			isUpgradeUpsell: !0,
			icon: Pe,
			secondary: e.jsx(f, {
				id: "bqTHri",
				defaultMessage: "Our smartest model & more"
			}),
			isSelected: !1,
			children: e.jsx(f, {
				id: "mzDzkX",
				defaultMessage: "ChatGPT Plus"
			})
		}, "plusUpgrade")), t.content.push(e.jsx(I, {
			value: B.AUTO,
			currentModelId: i,
			modelSwitcherDenialsBySlug: m,
			icon: _e,
			secondary: e.jsx(f, {
				id: "n96qML",
				defaultMessage: "Great for everyday tasks"
			}),
			isSelected: !x && i === B.AUTO,
			children: e.jsx(f, {
				id: "U9E7Rx",
				defaultMessage: "ChatGPT"
			})
		}, B.AUTO)), b.push(t)
	} else {
		const t = {
			id: "modelSection",
			content: []
		};
		p?.categories.length && !A && t.content.push(ce);
		const a = new Map;
		p?.categories.forEach(d => {
			let u = e.jsx(Ge, {
				category: d,
				currentGizmoId: x,
				currentModelId: i,
				modelSwitcherDenialsBySlug: m,
				preferredModelId: r,
				testId: `model-switcher-${d.defaultModel}`
			}, d.categoryId);
			d.defaultModel === "o4-mini-high" && (u = e.jsx(Le, {
				children: u
			}, `nux-${d.categoryId}`)), d.subcategory ? (a.has(d.subcategory) || a.set(d.subcategory, []), a.get(d.subcategory)?.push(u)) : t.content.push(u)
		}), A ? a.forEach((d, u) => {
			const v = p?.categories.find(X => X.subcategory === u && X.defaultModel === n.id),
				{
					fullModelLabel: P
				} = Z(v?.defaultModel ?? "", p);
			t.content.push(e.jsxs(h.Sub, {
				children: [e.jsx(h.SubMenuTrigger, {
					"data-testid": u + "-submenu",
					trailing: e.jsx("div", {
						className: "truncate",
						children: P
					}),
					children: u
				}), e.jsx(h.Portal, {
					children: e.jsx(h.SubContent, {
						children: d
					})
				})]
			}, u))
		}) : a.forEach((d, u) => {
			const v = p?.categories.find(P => P.subcategory === u && P.defaultModel === n.id);
			t.content.push(e.jsxs(h.Sub, {
				children: [e.jsx(h.SubMenuTrigger, {
					"data-testid": u === "More models" ? "more-models-submenu" : void 0,
					trailing: v && e.jsx("div", {
						className: "truncate",
						children: v.label
					}),
					children: u
				}), e.jsx(h.Portal, {
					children: e.jsx(h.SubContent, {
						children: d
					})
				})]
			}, u))
		}), g && x && t.content.push(e.jsx(h.Label, {
			className: "flex flex-col items-start gap-1",
			children: e.jsxs("span", {
				className: "flex items-center",
				children: [e.jsx(f, {
					id: "Y96ci5",
					defaultMessage: "Limited models for Custom Action GPTs"
				}), e.jsx($, {
					side: "right",
					className: "ms-1.5 cursor-pointer",
					delayDuration: 0,
					label: e.jsx(f, {
						id: "wDE3HX",
						defaultMessage: "GPTs with custom web actions can currently only use GPT-4o and GPT-4.1. If your GPT has no custom actions it can use any model."
					}),
					children: e.jsx(V, {
						className: "h-4 w-4 shrink-0"
					})
				})]
			})
		})), b.push(t)
	}
	const M = {
			id: "otherOptionsSection",
			content: []
		},
		{
			selectedCategory: L
		} = Z(i, p);
	return E && ((z || H || W || Y) && M.content.push(e.jsx("div", {
		className: "px-4 py-2",
		children: e.jsx(Ie, {
			inputClassName: "w-full",
			onKeyDown: t => {
				t.stopPropagation()
			},
			onChange: t => {
				le(t.target.value)
			},
			value: w
		})
	})), w ? M.content.push(e.jsxs("div", {
		className: "scrollbar-gutter-stable max-h-64 w-[min(320px,95vw)] overflow-y-scroll",
		children: [F.length === 0 && e.jsx(h.Item, {
			className: "w-full",
			children: c.formatMessage({
				id: "model-switcher.no-results",
				defaultMessage: "No results found"
			})
		}), F.map(t => {
			const {
				value: a
			} = t;
			return "options" in t ? e.jsx(j, {
				currentModel: n,
				isSelected: i.startsWith(a),
				option: t,
				modelSwitcherDenialsBySlug: m,
				displayInFull_INTERNAL_USE_ONLY: !0,
				preferredModelId: r
			}, a) : e.jsxs(I, {
				currentModelId: i,
				isSelected: i === a,
				value: a,
				modelSwitcherDenialsBySlug: m,
				displayInFull_INTERNAL_USE_ONLY: !0,
				preferredModelId: r,
				children: [t.name, t.badge && e.jsx(ne, {
					children: t.badge
				})]
			}, a)
		})]
	})) : (z && M.content.push(e.jsx(j, {
		isSelected: L === S.ALPHA,
		currentModel: n,
		option: C,
		modelSwitcherDenialsBySlug: m,
		displayInFull_INTERNAL_USE_ONLY: !0,
		preferredModelId: r
	}, C.value)), H && M.content.push(e.jsx(j, {
		isSelected: L === S.DATA_CAMPAIGNS,
		currentModel: n,
		option: N,
		modelSwitcherDenialsBySlug: m,
		displayInFull_INTERNAL_USE_ONLY: !0,
		preferredModelId: r
	}, N.value)), W && M.content.push(e.jsx(j, {
		currentModel: n,
		isSelected: L === S.EXPERIMENTS,
		option: T,
		modelSwitcherDenialsBySlug: m,
		displayInFull_INTERNAL_USE_ONLY: !0,
		preferredModelId: r
	}, T.value)), Y && M.content.push(e.jsx(j, {
		isSelected: L === S.MAINLINE,
		currentModel: n,
		option: _,
		modelSwitcherDenialsBySlug: m,
		displayInFull_INTERNAL_USE_ONLY: !0,
		preferredModelId: r
	}, _.value)))), M.content.length && re && b.push(M), l && b.push({
		id: J,
		content: [e.jsx(Ue, {}, J)]
	}), b
}
const ee = te({
	alpha: {
		id: "o5FsPB",
		defaultMessage: "Alpha"
	},
	beta: {
		id: "XZwFET",
		defaultMessage: "Beta"
	},
	gpt35ShortExplainer: {
		defaultMessage: "Great for everyday tasks",
		id: "ModelSwitcher.gpt35ShortExplainer"
	},
	modelTunerSmartSelectionTitle: {
		id: "czjW8I",
		defaultMessage: "Dynamic"
	},
	modelTunerSmartSelectionExplainer: {
		id: "gp/YH1",
		defaultMessage: "Optimized for speed and intelligence"
	},
	gpt4ShortExplainer: {
		defaultMessage: "With DALL·E, browsing and analysis",
		id: "ModelSwitcher.gpt4ShortExplainer"
	},
	gpt4ShortExplainerWithoutBrowse: {
		defaultMessage: "With DALL·E and analysis",
		id: "ModelSwitcher.gpt4ShortExplainerWithoutBrowse"
	},
	gpt4UpsellExplainer: {
		id: "ModelSwitcher.gpt4Upsell",
		defaultMessage: "Our smartest and most capable model. Includes DALL·E, browsing and more."
	},
	userUpgrade: {
		id: "ModelSwithcer.upgradeButton",
		defaultMessage: "Upgrade to Plus"
	},
	userUpgradeSignup: {
		id: "ModelSwitcher.signupUpgradeButton",
		defaultMessage: "Sign up for ChatGPT Plus"
	},
	temporaryChat: {
		id: "ModelSwitcher.temporaryChat",
		defaultMessage: "Temporary chat"
	},
	shareChat: {
		id: "ModelSwitcher.shareChat",
		defaultMessage: "Share chat"
	}
});
export {
	He as T, Z as g, We as u
};
//# sourceMappingURL=cbrjkkbokuo79ldz.js.map