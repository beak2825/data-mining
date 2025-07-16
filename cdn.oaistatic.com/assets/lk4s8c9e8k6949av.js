import {
	R as w,
	e as k,
	d as F,
	r as o,
	f as j,
	j as e,
	M as m,
	n as U,
	a as W
} from "./fyeo2h7okrqcf3nz.js";
import {
	l as G,
	a1 as H,
	ay as v,
	D as N,
	b6 as O,
	cL as P,
	h$ as K,
	B as D,
	f as X,
	R as I,
	c as z,
	q as Q,
	P as S,
	T as V,
	cU as Y
} from "./egb2c0f6p1ew61vt.js";
import {
	d8 as $,
	d9 as J,
	da as Z,
	b7 as ee,
	db as q,
	b8 as te,
	a1 as se,
	dc as ae,
	dd as re,
	U as ne
} from "./f7j18j5u52u1pnnk.js";
import {
	u as oe
} from "./euyyz74sa52ztdnb.js";
const ie = "https://help.openai.com/en/articles/11481834",
	ce = ({
		onClose: t
	}) => {
		const [s, p] = w.useState(2500), [r, C] = w.useState(!1), {
			prepareCheckoutSession: y,
			navigateToCheckout: b
		} = $(), h = G(), {
			initialBillingDetails: g
		} = oe(h, !0), T = h?.mustGetSubscriptionBillingCurrency("CreditPurchaseModal") ?? "USD", c = H(), u = v(), _ = k(), {
			data: M
		} = F({
			queryKey: ["creditPurchaseRateCard"],
			queryFn: () => I.safeGet("/subscriptions/credit-purchase-rate-card"),
			refetchOnWindowFocus: !1,
			refetchOnReconnect: !1,
			refetchOnMount: !1
		}), E = o.useCallback(async () => {
			if (!r) {
				C(!0);
				try {
					const d = h?.id;
					if (!d) throw new Error("No account_id found");
					const L = await y({
						credit_purchase_data: {
							quantity: s,
							unit: "credit",
							account_id: d
						},
						billing_details: g
					}, "TeamsDirectWorkspacePurchaseModal", c);
					await b(L)
				} catch (d) {
					N.addError(d), u.warning(_.formatMessage(l.paymentErrorWarning), {
						hasCloseButton: !0
					})
				} finally {
					C(!1)
				}
			}
		}, [c, g, _, r, b, s, y, u, h]), B = J(s, 300), A = d => !M || !M[d].price ? "N/A" : Math.round(B / parseFloat(M[d].price)).toLocaleString();
		return e.jsxs(O, {
			isOpen: !0,
			onClose: t,
			type: "success",
			size: "custom",
			noPadding: !0,
			className: "max-w-xl",
			showCloseButton: !0,
			testId: "modal-credit-purchase-modal",
			children: [e.jsx(P.Header, {
				title: e.jsx(m, {
					...l.title
				})
			}), e.jsxs("div", {
				className: "flex flex-col px-6",
				children: [e.jsx("div", {
					className: "text-token-text-secondary text-sm",
					children: e.jsx(m, {
						...l.description,
						values: {
							link: d => e.jsx(K, {
								href: ie,
								target: "_blank",
								children: d
							})
						}
					})
				}), e.jsx("div", {
					className: "mt-6",
					children: e.jsx(de, {
						minCredits: 500,
						maxCredits: 1e5,
						increment: 250,
						centsPerCredit: 4,
						currency: T,
						numCredits: s,
						setNumCredits: p
					})
				}), M && e.jsxs(U.div, {
					initial: {
						opacity: 0,
						y: 20
					},
					animate: {
						opacity: 1,
						y: 0
					},
					className: "bg-token-bg-tertiary text-token-text-secondary mt-4 flex w-full gap-2 rounded-lg p-3 text-sm",
					children: [e.jsx(Z, {}), e.jsx(m, {
						...l.amountToAddDescription,
						values: {
							deepResearchCount: A("deep_research_completion"),
							gpto3ChatCount: A("chat_completion_o3"),
							gpt45ChatCount: A("chat_completion_4_5")
						}
					})]
				})]
			}), e.jsx(P.Actions, {
				className: "sm:p-2 md:p-6",
				secondaryButton: e.jsx(D, {
					disabled: r,
					onClick: t,
					color: "secondary",
					children: e.jsx(m, {
						...l.cancel
					})
				}),
				primaryButton: e.jsx(D, {
					loading: r,
					onClick: () => E(),
					color: "primary",
					children: e.jsx(m, {
						...l.next
					})
				})
			})]
		})
	};

function de({
	numCredits: t,
	minCredits: a,
	maxCredits: i,
	increment: n,
	centsPerCredit: f,
	currency: x,
	setNumCredits: s
}) {
	const p = o.useRef(null);
	o.useEffect(() => {
		p.current?.focus()
	}, [p]);
	const r = o.useRef(null),
		C = o.useRef(0),
		y = o.useCallback(c => {
			s(u => ee(u + c, a, i))
		}, [i, a, s]),
		b = o.useCallback(c => {
			const E = 300 - c * 50;
			return E > 25 ? E : 25
		}, []),
		h = o.useCallback(c => {
			y(c), C.current = 0;
			const u = () => {
				C.current += 1, y(c);
				const _ = b(C.current);
				r.current = setTimeout(u, _)
			};
			r.current = setTimeout(u, b(C.current))
		}, [y, b]),
		g = o.useCallback(() => {
			r.current && (clearTimeout(r.current), r.current = null)
		}, []),
		T = t * f / 100;
	return e.jsxs("div", {
		className: "mb-3 flex w-full flex-col",
		children: [e.jsx("label", {
			className: "mb-1 flex text-base font-medium",
			htmlFor: "Credits",
			children: e.jsx(m, {
				...l.amountToAdd
			})
		}), e.jsxs("div", {
			className: "flex items-center gap-3",
			children: [e.jsxs("div", {
				className: "relative w-full",
				children: [e.jsx("span", {
					className: "text-token-text-secondary pointer-events-none absolute end-3 top-1/2 -translate-y-1/2 text-sm",
					children: e.jsx(m, {
						...l.numCredits,
						values: {
							numCredits: t
						}
					})
				}), e.jsx("input", {
					ref: p,
					name: "Credits",
					value: T.toLocaleString("en-US", {
						style: "currency",
						currency: x,
						maximumFractionDigits: 2
					}),
					disabled: !0,
					autoFocus: !0,
					tabIndex: 0,
					className: "bg-token-bg-primary text-token-text-primary m-0 h-12 w-full appearance-none rounded-lg border border-gray-200 px-2 py-0 ps-5 text-start text-sm shadow-none ring-transparent outline-hidden focus:border-black focus:ring-black dark:border-gray-700 dark:focus:border-white dark:focus:ring-white"
				})]
			}), e.jsxs("div", {
				className: "flex gap-2",
				children: [e.jsx(q, {
					disabled: t <= a,
					onMouseDown: () => h(-n),
					onMouseUp: g,
					onMouseLeave: g,
					children: e.jsx(te, {
						className: X("icon", t <= a && "text-token-text-tertiary")
					})
				}), e.jsx(q, {
					disabled: t >= i,
					onMouseDown: () => h(n),
					onMouseUp: g,
					onMouseLeave: g,
					children: e.jsx(se, {
						className: "icon"
					})
				})]
			})]
		})]
	})
}
const l = j({
		title: {
			id: "components.business.CreditPurchaseModal.title",
			defaultMessage: "Buy more credits for your team"
		},
		description: {
			id: "components.business.CreditPurchaseModal.description",
			defaultMessage: "Give your team continued access to advanced features after hitting plan limits. Credits valid for 12 months. Advanced voice mode excluded. <link>View rate card</link>."
		},
		amountToAdd: {
			id: "components.business.CreditPurchaseModal.amountToAdd",
			defaultMessage: "Amount to add"
		},
		amountToAddDescription: {
			id: "components.business.CreditPurchaseModal.amountToAddDescription",
			defaultMessage: "Equal to {deepResearchCount} deep research tasks, {gpto3ChatCount} o3 messages, or {gpt45ChatCount} GPT-4.5 messages."
		},
		numCredits: {
			id: "components.business.CreditPurchaseModal.numCredits",
			defaultMessage: "{numCredits, plural, one {# credit} other {# credits}}"
		},
		paymentErrorWarning: {
			id: "components.business.CreditPurchaseModal.paymentErrorWarning",
			defaultMessage: "The payments page encountered an error. Please try again. If the problem continues, please visit help.openai.com."
		},
		cancel: {
			id: "components.business.CreditPurchaseModal.cancel",
			defaultMessage: "Cancel"
		},
		next: {
			id: "components.business.CreditPurchaseModal.next",
			defaultMessage: "Next"
		}
	}),
	ge = t => {
		switch (t) {
			case "wham":
				return "wham";
			case "deep_research":
				return "deep_research";
			case "image_gen":
				return "image_gen";
			case "gpt-4-5":
				return "gpt-4-5";
			default:
				return null
		}
	},
	ue = z(t => ({
		hasRequestedCredits: ae(),
		setHasRequestedCredits: a => t(() => ({
			hasRequestedCredits: a
		}))
	})),
	le = () => {
		const t = v(),
			a = k(),
			{
				hasRequestedCredits: i,
				setHasRequestedCredits: n
			} = ue(),
			{
				mutate: f,
				isPending: x
			} = W({
				mutationFn: s => I.safePost("/credits/pleas", {
					requestBody: {
						product: s
					}
				}),
				onError: s => {
					N.addError(new Error("Error occurred while submitting credit plea request", {
						cause: s
					})), t.danger(R.errorRequestCredits, {
						toastId: "teams_credit_plea_button"
					})
				},
				onSuccess: () => {
					n(!0), t.success(a.formatMessage(R.successRequestCredits)), re(), ne.setThreadModelPickerAlertDot(!1)
				}
			});
		return {
			submitCreditPleaRequest: f,
			hasRequestedCredits: i,
			isPending: x
		}
	},
	fe = ({
		trigger: t,
		...a
	}) => {
		const i = Q();
		o.useEffect(() => {
			S.logEventWithStatsig("ChatGPT Credits: Add Credits Button Shown", "chatgpt_credits_add_credits_button_shown", {
				trigger: t
			})
		}, [t]);
		const n = () => {
			S.logEventWithStatsig("ChatGPT Credits: Add Credits Clicked", "chatgpt_credits_add_credits_clicked"), Y(i, ce)
		};
		return e.jsx(D, {
			color: "primary",
			onClick: n,
			...a,
			children: e.jsx(m, {
				...R.addCredits
			})
		})
	},
	xe = ({
		creditConsumingProduct: t,
		trigger: a,
		...i
	}) => {
		const n = k(),
			{
				submitCreditPleaRequest: f,
				isPending: x,
				hasRequestedCredits: s
			} = le();
		o.useEffect(() => {
			S.logEventWithStatsig("ChatGPT Credits: Notify Admin Button Shown", "chatgpt_credits_notify_admin_button_shown", {
				trigger: a,
				creditConsumingProduct: t
			})
		}, [t, a]);
		const p = () => {
				s || (f(t), S.logEventWithStatsig("ChatGPT Credits: Notify Admin Clicked", "chatgpt_credits_notify_admin_clicked"))
			},
			r = e.jsx(D, {
				loading: x,
				color: s ? "secondary" : "primary",
				disabled: s,
				onClick: p,
				...i,
				children: s ? n.formatMessage(R.requested) : n.formatMessage(R.notifyAdmin)
			});
		return s ? e.jsx(V, {
			className: "w-auto whitespace-nowrap",
			withArrow: !0,
			labelTextAlign: "left",
			contentClassName: "w-[180px]",
			side: "right",
			label: n.formatMessage(R.alreadyRequested),
			children: r
		}) : r
	},
	R = j({
		notifyAdmin: {
			id: "prompt-textarea.teamsCreditRequestBanner.notifyAdmin",
			defaultMessage: "Notify admin"
		},
		addCredits: {
			id: "prompt-textarea.teamsCreditRequestBanner.addCredits",
			defaultMessage: "Add credits"
		},
		requested: {
			id: "prompt-textarea.teamsCreditRequestBanner.requested",
			defaultMessage: "Requested"
		},
		errorRequestCredits: {
			id: "prompt-textarea.teamsCreditRequestBanner.error",
			defaultMessage: "Error occurred while submitting credit request"
		},
		successRequestCredits: {
			id: "prompt-textarea.teamsCreditRequestBanner.success",
			defaultMessage: "Request sent to your admin"
		},
		alreadyRequested: {
			id: "prompt-textarea.teamsCreditRequestBanner.alreadyRequested",
			defaultMessage: "You’ve already notified your admin"
		}
	});
export {
	fe as A, xe as C, ce as a, ge as g
};
//# sourceMappingURL=lk4s8c9e8k6949av.js.map