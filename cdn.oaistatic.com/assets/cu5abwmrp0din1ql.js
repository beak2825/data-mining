import {
	e as I,
	j as e,
	M as o,
	r as b,
	l as ge,
	k as Ee
} from "./fyeo2h7okrqcf3nz.js";
import {
	e2 as xe,
	e3 as _,
	e4 as G,
	e5 as Le,
	e6 as h,
	e7 as Ae,
	U as ke,
	cV as U,
	d8 as he,
	e as fe,
	e8 as pe,
	e9 as Be,
	b7 as Oe,
	ea as Re,
	B as oe,
	eb as le,
	ec as R,
	ed as ie,
	ee as ce
} from "./f7j18j5u52u1pnnk.js";
import {
	b7 as Ue,
	f as Q,
	l as K,
	q as Ie,
	cI as De,
	a1 as ye,
	ay as Ce,
	P as A,
	b6 as re,
	O as Ve,
	jm as H,
	D as X
} from "./egb2c0f6p1ew61vt.js";
import {
	c as We
} from "./iej0cupg2dqkmejt.js";
import {
	u as Z,
	a as J,
	P as Fe
} from "./moeip5yn7z08hyho.js";
import {
	u as Se
} from "./euyyz74sa52ztdnb.js";
const C = Ae;
var je = (a => (a.FLEXIBLE = "month", a.ANNUAL = "year", a))(je || {});
const Y = We(je),
	be = "team-pricing-seat-selection",
	z = "team-pricing-seat-selection-direct",
	$ = "numSeats",
	q = "selectedPlan",
	me = "promo_campaign",
	Xe = a => {
		const c = b.useRef(!1),
			S = ge(),
			p = S.hash.split("#")[1] === be || S.hash.split("#")[1] === z,
			g = K(),
			l = !c.current && p && g && !a,
			t = Ie(),
			y = De(t, "4250628994", {
				disableExposureLog: !l
			}).get("enabled", !1),
			{
				initialBillingDetails: x
			} = Se(g, !0),
			r = Z(),
			{
				data: n,
				isLoading: m
			} = J(r ?? "");
		b.useEffect(() => {
			y && l && (ke.setPurchaseWorkspaceData({
				minimumSeats: U,
				billingDetails: x,
				promoData: n
			}), c.current = !0)
		}, [g, x, p, a, r, n, m, y, l])
	},
	de = Ue.p`text-base font-medium mb-3`,
	Pe = ({
		isOpen: a,
		onClose: c,
		onSubmit: S,
		minimumSeats: p,
		billingDetails: g,
		isDirectFlow: l = !1,
		promoData: t = void 0
	}) => {
		const y = K(),
			x = Z(),
			{
				data: r
			} = J(x ?? "");
		!t && r && (t = r);
		const n = t?.coupon === _ && t.state === "eligible",
			m = new URLSearchParams(window.location.search),
			j = m.get($),
			f = m.get(q),
			d = n ? "month" : f && Y(f) ? f : "month",
			[s, u] = b.useState(d),
			[v, k] = b.useState(!1),
			P = I(),
			[N, ee] = b.useState(j && !isNaN(parseInt(j, 10)) ? parseInt(j, 10) : Math.max(Be, p)),
			D = Math.max(p, U),
			{
				flexibleBillingPlan: we,
				annualBillingPlan: te
			} = xe(g.currency);
		let w = we;
		n && (w = {
			...w,
			cost: {
				...C.team1dollarMonthlyCost
			},
			costStructure: {
				...C.team1dollarMonthlyStructure,
				defaultMessage: `then ${P.formatMessage(w.currencySign)}${w.monthlyCost} monthly per seat`,
				id: "promo.team1dollar.monthlyPlanStructure",
				description: "Subsequent pricing description for team1dollar promo. Describing the monthly then the annual price after."
			}
		});
		const B = t?.coupon === _ && t.state === "not_eligible",
			O = t?.coupon === _ && t.state === "temporary_disabled",
			se = t?.coupon === _ && t.state === "offline",
			M = Oe(isNaN(N) ? 0 : N, D, Re),
			E = b.useMemo(() => y?.subscriptionAnalyticsParams, [y]);
		b.useEffect(() => {
			A.logEvent("Account Pay: Select Team Plan Modal Show", E)
		}, [E]);
		const ae = i => {
				switch (i) {
					case "month":
						A.logEvent("Account Pay: Team Plan Selection Clicked", {
							...E,
							buttonType: "Continue",
							numberOfSeats: N,
							planLength: ce.MONTHLY
						});
						break;
					case "year":
						A.logEvent("Account Pay: Select Team Plan Modal Clicked", {
							...E,
							buttonType: "Continue",
							numberOfSeats: N,
							planLength: ce.ANNUAL
						});
						break
				}
			},
			ne = (i, L) => {
				A.logEventWithStatsig("Account Pay: Select Team Plan Modal Clicked", "chatgpt_select_team_plan_modal_continue_to_billing_clicked", {
					...E,
					buttonType: "Continue",
					numberOfSeats: L,
					planLength: i
				}), X.addAction("chatgpt_funnel.team_plan_modal_checkout_initiated", {
					planLength: i,
					numberOfSeats: L.toString(),
					accountId: y?.id
				}), t?.coupon === _ && t.state === "eligible" && Fe.logCouponApplied(t.coupon)
			},
			V = () => {
				A.logEvent("Account Pay: Select Team Plan Modal Dismiss", E)
			},
			T = ge(),
			W = b.useMemo(() => T.hash.split("#")[1] === z, [T.hash]);
		return b.useEffect(() => {
			const i = new URLSearchParams;
			i.set($, M.toString()), i.set(q, s), t?.coupon && i.set(me, t.coupon);
			const L = l || W ? `#${z}` : `#${be}`,
				Me = `${T.pathname}?${i.toString()}${L}`,
				F = new URL(window.location.href).searchParams,
				Te = F.get($) === M.toString(),
				_e = F.get(q) === s,
				Ne = t?.coupon == null || F.get(me) === t.coupon,
				ve = window.location.hash === L;
			(!Te || !_e || !Ne || !ve) && window.history.pushState({
				from: T.pathname + T.search
			}, "", Me)
		}, [M, l, W, T.pathname, T.search, T.hash, s, t?.coupon]), l || W ? e.jsx(re, {
			testId: "modal-workspace-purchase",
			type: "success",
			isOpen: a,
			onClose: () => {
				c(), V()
			},
			size: "fullscreen",
			noPadding: !0,
			removePopoverStyling: !0,
			showCloseButton: !0,
			children: e.jsxs("div", {
				className: "grid grid-flow-row grid-cols-1 md:h-full md:grid-cols-2",
				children: [e.jsx("div", {
					className: "flex-column col-span-1 flex justify-center p-5 md:grid-cols-2",
					children: e.jsxs("div", {
						className: "flex w-full max-w-[400px] flex-col items-center",
						children: [e.jsx(Ve, {
							className: "mt-8 mb-6 h-8 w-8 md:fixed md:start-4 md:top-4 md:mt-0 md:h-6 md:w-6"
						}), (B || O || se) && e.jsx("div", {
							className: "mb-4 w-full",
							children: e.jsx(oe, {
								content: P.formatMessage(B ? C.team1dollarNotEligible : O ? C.team1dollarTemporarilyDisabled : C.team1dollarOffline),
								type: "info"
							})
						}), e.jsx("div", {
							className: "mb-8 text-3xl font-medium md:mt-[120px]",
							children: e.jsx(o, {
								id: "selectTeamPlanModal.title",
								defaultMessage: "Pick your plan"
							})
						}), e.jsxs(le, {
							className: Q("col-span-3 mb-6 grid w-full gap-4 md:col-span-2", "md:grid-cols-2"),
							defaultValue: s,
							onValueChange: i => {
								Y(i) && (u(i), ae(i))
							},
							children: [e.jsx(R, {
								billingType: "year",
								...te,
								selectedValue: s,
								hideSavingsMessage: n,
								hideDetails: !0
							}), e.jsx(R, {
								billingType: "month",
								...w,
								selectedValue: s,
								hideDetails: !0,
								showWelcomeOfferLabel: t?.state === "eligible",
								promoDisclaimer: t?.state === "eligible" && e.jsx(o, {
									...C.team1dollarPromoDisclaimer,
									values: {
										currencySign: P.formatMessage(w.currencySign),
										cost: w.monthlyCost
									}
								})
							})]
						}), e.jsx(ie, {
							numSeats: N,
							minSeats: D,
							setNumSeats: ee
						}), e.jsx("div", {
							className: "text-token-text-secondary self-start text-xs",
							children: P.formatMessage({
								id: "selectTeamPlanModal.seatsDescription",
								defaultMessage: "Add more seats at any time. Minimum of {minSeats} seats."
							}, {
								minSeats: U
							})
						})]
					})
				}), e.jsx("div", {
					className: "col-span-3 flex h-full flex-col items-center overflow-hidden p-6 md:col-span-1 md:shadow-lg",
					children: e.jsxs("div", {
						className: "flex w-full max-w-[400px] flex-col md:mt-[120px]",
						children: [e.jsx(de, {
							className: "mb-8 text-xl font-medium",
							children: e.jsx(o, {
								...h.summaryTitle
							})
						}), e.jsx(ue, {
							numSeats: M,
							selectedPlan: s,
							billingDetails: g,
							totalLabel: h.allPlansTodayTotal,
							billDate: e.jsx(o, {
								...h.today
							}),
							promoData: t
						}), e.jsx(H, {
							title: P.formatMessage(h.continueToBillingButton),
							onClick: async () => {
								k(!0), ne(s, M), await S(s, M), k(!1)
							},
							disabled: !1,
							loading: v,
							color: "green",
							className: "w-full rounded-xl"
						}), e.jsx(H, {
							title: P.formatMessage(h.cancel),
							onClick: () => {
								c(), V()
							},
							color: "ghost",
							className: "mt-4 w-full rounded-xl"
						})]
					})
				})]
			})
		}) : e.jsxs(re, {
			testId: "modal-select-team-plan",
			type: "success",
			isOpen: a,
			onClose: () => {
				c(), V()
			},
			size: "custom",
			noPadding: !0,
			removePopoverStyling: !0,
			className: "max-w-4xl",
			showCloseButton: !0,
			hasSeparator: !0,
			title: P.formatMessage(h.selectTeamPlanModalTitle),
			children: [(B || O || se) && e.jsx("div", {
				className: "px-5 pt-4",
				children: e.jsx(oe, {
					content: P.formatMessage(B ? C.team1dollarNotEligible : O ? C.team1dollarTemporarilyDisabled : C.team1dollarOffline),
					type: "info"
				})
			}), e.jsxs("div", {
				className: "grid grid-flow-row grid-cols-3",
				children: [e.jsxs("div", {
					className: "flex-column col-span-3 p-5 md:col-span-2 md:grid-cols-2",
					children: [e.jsx(ie, {
						numSeats: N,
						minSeats: D,
						setNumSeats: ee
					}), t?.coupon === _ && t.state === "eligible" && s === "month" && N > G && e.jsx("div", {
						className: "text-token-text-secondary mt-1 self-start text-xs",
						children: e.jsx(o, {
							...C.team1dollarOverSeatsDisclaimer
						})
					}), e.jsxs(le, {
						className: Q("col-span-3 mt-5 grid gap-4 md:col-span-2", "md:grid-cols-2"),
						defaultValue: s,
						onValueChange: i => {
							Y(i) && (u(i), ae(i))
						},
						children: [e.jsx(R, {
							billingType: "year",
							...te,
							selectedValue: s,
							hideSavingsMessage: n
						}), e.jsx(R, {
							billingType: "month",
							...w,
							selectedValue: s,
							showWelcomeOfferLabel: n,
							promoDisclaimer: n && e.jsx(o, {
								...C.team1dollarPromoDisclaimer,
								values: {
									currencySign: P.formatMessage(w.currencySign),
									cost: w.monthlyCost
								}
							})
						})]
					})]
				}), e.jsxs("div", {
					className: "border-token-main-surface-tertiary bg-token-main-surface-secondary col-span-3 flex h-full flex-col overflow-hidden border-s p-6 md:col-span-1",
					children: [e.jsx(de, {
						children: e.jsx(o, {
							...h.summaryTitle
						})
					}), e.jsx(ue, {
						numSeats: M,
						selectedPlan: s,
						billingDetails: g,
						totalLabel: h.allPlansTodayTotal,
						billDate: e.jsx(o, {
							...h.today
						}),
						promoData: t
					}), e.jsx(H, {
						title: P.formatMessage(h.continueToBillingButton),
						onClick: async () => {
							k(!0), ne(s, M), await S(s, M), k(!1)
						},
						disabled: !1,
						loading: v,
						color: "primary",
						className: "w-full rounded-xl"
					})]
				})]
			})]
		})
	},
	ue = ({
		numSeats: a,
		selectedPlan: c,
		billingDetails: S,
		totalLabel: p,
		billDate: g,
		promoData: l
	}) => {
		const t = I(),
			{
				flexibleBillingPlan: y,
				annualBillingPlan: x
			} = xe(S.currency),
			r = y,
			n = c === "month" ? r : x,
			m = Le[c],
			j = (a || 0) * (c === "year" ? x.monthlyCost * 12 : r.monthlyCost);
		let f = (a || 0) * n.unitCost,
			d = j - f,
			s = 0,
			u = j,
			v = !1;
		return l?.coupon === _ && l.state === "eligible" && c === "month" && (v = !0, a <= G ? (s = 1, u = a * r.monthlyCost, d = u - s, f = s) : (s = 1 + (a - G) * r.monthlyCost, u = a * r.monthlyCost, d = u - s, f = s)), e.jsxs("div", {
			className: "flex grow flex-col text-sm",
			children: [e.jsxs("div", {
				className: "text-token-text-secondary flex w-full justify-between text-sm",
				children: [e.jsx("div", {
					className: "flex",
					children: e.jsx(o, {
						...m.name
					})
				}), e.jsx("div", {
					className: "flex",
					children: e.jsx(o, {
						...h.allPlansPreDiscountTotal,
						values: {
							currencySign: t.formatMessage(n.currencySign),
							preDiscountTotalAmount: j.toLocaleString()
						}
					})
				})]
			}), e.jsxs("div", {
				className: "text-token-text-tertiary flex w-full justify-between text-xs",
				children: [e.jsx("div", {
					className: "flex",
					children: e.jsx(o, {
						...m.breakdown,
						values: {
							numSeats: a
						}
					})
				}), e.jsx("div", {
					className: "flex",
					children: e.jsx(o, {
						...h.breakdownAmount,
						values: {
							currencySign: t.formatMessage(n.currencySign),
							amount: n.monthlyCost
						}
					})
				})]
			}), e.jsxs("div", {
				className: "text-token-text-secondary mt-3 flex w-full justify-between text-sm",
				children: [e.jsx("div", {
					className: "flex",
					children: e.jsx(o, {
						...h.planDiscountLabel
					})
				}), e.jsx("div", {
					className: Q("flex", d > 0 && "font-medium text-[#10A37F]"),
					children: e.jsx(o, {
						...m.discountAmount,
						values: {
							currencySign: t.formatMessage(r.currencySign),
							discountAmount: d.toLocaleString()
						}
					})
				})]
			}), l?.coupon === _ && l.state === "eligible" && c === "month" && e.jsx("div", {
				className: "text-token-text-tertiary text-xs",
				children: e.jsx(o, {
					...C.team1dollarBelowDiscount
				})
			}), m.discountDescription && x.discountedMonthlyCost < x.monthlyCost && c === "year" && e.jsx("div", {
				className: "text-token-text-tertiary text-xs",
				children: e.jsx(o, {
					...m.discountDescription,
					values: {
						discountPercentage: Math.floor((1 - x.discountedMonthlyCost / x.monthlyCost) * 100)
					}
				})
			}), e.jsx("hr", {
				className: "border-token-border-default my-3"
			}), e.jsxs("div", {
				className: "flex w-full justify-between text-base font-medium",
				children: [e.jsx("div", {
					className: "flex",
					children: e.jsx(o, {
						...p
					})
				}), e.jsx("div", {
					className: "flex",
					children: v ? e.jsxs(e.Fragment, {
						children: [t.formatMessage(n.currencyCode), " ", t.formatMessage(n.currencySign), f.toLocaleString()]
					}) : e.jsx(o, {
						...m.total,
						values: {
							currencyCode: t.formatMessage(n.currencyCode),
							currencySign: t.formatMessage(n.currencySign),
							totalAmount: f.toLocaleString()
						}
					})
				})]
			}), e.jsx("div", {
				className: "text-token-text-tertiary mb-8 text-xs",
				children: v ? e.jsx(e.Fragment, {
					children: e.jsx("div", {
						className: "text-token-text-tertiary mt-2 text-xs",
						children: e.jsx(o, {
							id: "vgDSPO",
							defaultMessage: "After promotional period {currencySign}{amount} per month",
							values: {
								currencySign: t.formatMessage(r.currencySign),
								amount: u.toLocaleString()
							}
						})
					})
				}) : e.jsx(o, {
					...m.billed,
					values: {
						billDate: g
					}
				})
			})]
		})
	};

function Ze() {
	const a = K(),
		c = Ee(),
		{
			prepareCheckoutSession: S,
			navigateToCheckout: p
		} = he(),
		{
			initialBillingDetails: g
		} = Se(a, !0),
		l = I(),
		t = fe(),
		y = pe(l, void 0, t),
		x = ye(),
		r = Ce(),
		n = Z(),
		{
			data: m
		} = J(n ?? ""),
		j = async (d, s) => {
			try {
				const u = await S({
					plan_name: "chatgptteamplan",
					team_plan_data: {
						workspace_name: y,
						price_interval: d,
						seat_quantity: s
					},
					billing_details: g,
					promo_campaign: d === "month" ? m?.coupon : null
				}, "TeamsDirectWorkspacePurchaseModal", x);
				await p(u)
			} catch (u) {
				X.addError(u), r.warning(l.formatMessage(h.paymentErrorWarning), {
					hasCloseButton: !0
				})
			}
		}, f = () => {
			c("/")
		};
	return e.jsx(Pe, {
		isOpen: !0,
		onClose: f,
		onSubmit: (d, s) => j(d, s),
		isDirectFlow: !0,
		minimumSeats: U,
		billingDetails: g,
		promoData: m
	})
}
const Je = ({
		isOpen: a,
		onClose: c,
		minimumSeats: S,
		billingDetails: p,
		existingAccount: g = void 0,
		promoData: l = void 0
	}) => {
		const t = I(),
			y = Ce(),
			x = fe(),
			{
				prepareCheckoutSession: r,
				navigateToCheckout: n
			} = he(),
			m = pe(t, g, x),
			j = ye(),
			f = async (d, s) => {
				try {
					const u = await r({
						plan_name: "chatgptteamplan",
						team_plan_data: {
							workspace_name: m,
							price_interval: d,
							seat_quantity: s,
							existing_workspace_id: g?.id
						},
						billing_details: p,
						cancel_url: window.location.href,
						promo_campaign: d === "month" ? l?.coupon : null
					}, "TeamsWorkspacePurchaseModal", j);
					await n(u)
				} catch (u) {
					X.addError(u), y.warning(t.formatMessage(h.paymentErrorWarning), {
						hasCloseButton: !0
					})
				}
			};
		return e.jsx(Pe, {
			isOpen: a,
			onClose: c,
			onSubmit: (d, s) => f(d, s),
			minimumSeats: S,
			billingDetails: p,
			promoData: l
		})
	},
	et = a => b.createElement("svg", {
		width: 20,
		height: 20,
		viewBox: "0 0 20 20",
		fill: "currentColor",
		xmlns: "http://www.w3.org/2000/svg",
		...a
	}, b.createElement("path", {
		d: "M16.834 7.23859L11.3447 11.1146C10.589 11.648 9.59505 11.6818 8.80957 11.2152L8.65528 11.1146L3.16504 7.23859V12.7083C3.16504 13.3027 3.16575 13.7087 3.19141 14.0228C3.21641 14.3285 3.26164 14.4885 3.31934 14.6019L3.37403 14.6995C3.51031 14.9219 3.7058 15.1029 3.93946 15.222L4.03516 15.263C4.14235 15.3013 4.29005 15.3321 4.51953 15.3509C4.83346 15.3765 5.23908 15.3763 5.83301 15.3763H14.167C14.7609 15.3763 15.1665 15.3765 15.4805 15.3509C15.7867 15.3259 15.9471 15.2798 16.0605 15.222L16.1582 15.1673C16.3804 15.031 16.5617 14.8354 16.6807 14.6019L16.7217 14.5071C16.7601 14.4 16.7898 14.2524 16.8086 14.0228C16.8343 13.7087 16.835 13.3027 16.835 12.7083V7.29132C16.835 7.27358 16.834 7.256 16.834 7.23859ZM5.83301 4.62335C5.23905 4.62335 4.83347 4.6241 4.51953 4.64972C4.29013 4.66846 4.14234 4.69833 4.03516 4.73664L3.93946 4.77765C3.70588 4.89666 3.51031 5.07786 3.37403 5.30011L3.31934 5.39777C3.28521 5.46477 3.25631 5.54827 3.23242 5.66828C3.25487 5.6805 3.27841 5.69128 3.29981 5.70636L9.42188 10.0286L9.55762 10.1087C9.88283 10.2689 10.2752 10.2424 10.5781 10.0286L16.7002 5.70636L16.7666 5.66828C16.7529 5.59929 16.739 5.54205 16.7217 5.49347L16.6807 5.39777C16.5617 5.16419 16.3805 4.96862 16.1582 4.83234L16.0605 4.77765C15.9471 4.71987 15.7866 4.67474 15.4805 4.64972C15.1665 4.6241 14.761 4.62335 14.167 4.62335H5.83301ZM18.165 12.7083C18.165 13.2807 18.1659 13.7504 18.1348 14.1312C18.107 14.4711 18.0507 14.7847 17.9238 15.0804L17.8652 15.2064C17.6347 15.6587 17.284 16.0371 16.8535 16.3011L16.6641 16.4075C16.332 16.5766 15.9772 16.6444 15.5889 16.6761C15.2082 16.7072 14.7391 16.7064 14.167 16.7064H5.83301C5.26088 16.7064 4.79177 16.7072 4.41113 16.6761C4.0711 16.6483 3.75671 16.593 3.46094 16.4661L3.33594 16.4075C2.88327 16.1769 2.50431 15.8256 2.24024 15.3948L2.13477 15.2064C1.96555 14.8743 1.89699 14.5196 1.86524 14.1312C1.83413 13.7504 1.83496 13.2807 1.83496 12.7083V7.29132C1.83496 6.71921 1.83416 6.25008 1.86524 5.86945C1.89697 5.48099 1.96557 5.1264 2.13477 4.79425L2.24024 4.6048C2.50431 4.17416 2.88336 3.82368 3.33594 3.59308L3.46094 3.53449C3.75678 3.40752 4.07101 3.35134 4.41113 3.32355C4.79177 3.29247 5.2609 3.29328 5.83301 3.29328H14.167C14.7391 3.29328 15.2082 3.29247 15.5889 3.32355C15.9773 3.35529 16.3319 3.42388 16.6641 3.59308L16.8535 3.69855C17.2842 3.96262 17.6346 4.34167 17.8652 4.79425L17.9238 4.91925C18.0508 5.2151 18.107 5.52932 18.1348 5.86945C18.1658 6.25008 18.165 6.71921 18.165 7.29132V12.7083Z"
	}));
export {
	ue as B, et as S, Ze as T, Je as a, Xe as u
};
//# sourceMappingURL=cu5abwmrp0din1ql.js.map