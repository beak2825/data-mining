import {
	e as p,
	r as m,
	j as e,
	A as g,
	n as c
} from "./fyeo2h7okrqcf3nz.js";
import {
	U as y,
	A as d,
	J as v,
	L as x,
	M as b,
	N as k,
	O as _,
	S as j,
	Q as w,
	R as E,
	V as N,
	X as S
} from "./f7j18j5u52u1pnnk.js";
import {
	u as F,
	m as r,
	a as f
} from "./mtx41j31lzyyzsit.js";
import {
	bp as l
} from "./egb2c0f6p1ew61vt.js";

function A({
	usage: n
}) {
	const o = {
			work: {
				icon: S,
				color: "#35AE47"
			},
			school: {
				icon: N,
				color: "#E937D1"
			},
			personalTasks: {
				icon: E,
				color: "#EA8444"
			},
			funAndEntertainment: {
				icon: w,
				color: "#6C71FF"
			},
			justCurious: {
				icon: j,
				color: "#FFCC00"
			}
		},
		a = o[n].icon,
		t = o[n].color;
	return e.jsx(a, {
		className: "icon",
		style: {
			color: t
		}
	})
}

function T({
	clientThreadId: n
}) {
	const o = p(),
		a = f({
			clientThreadId: n
		});
	return m.useEffect(() => {
		l.logEvent("chatgpt_convo_onboarding_usage_chips_shown")
	}, []), e.jsx(g, {
		mode: "wait",
		children: e.jsx(c.div, {
			className: "-mx-6 mt-2 flex flex-wrap gap-2 px-6",
			initial: {
				opacity: 0
			},
			animate: {
				opacity: 1,
				transition: {
					delay: .2,
					ease: "easeInOut"
				}
			},
			exit: {
				opacity: 0,
				transition: {
					ease: "easeInOut"
				}
			},
			children: ["school", "work", "personalTasks", "funAndEntertainment", "justCurious"].map(t => e.jsxs("button", {
				className: "border-token-border-default bg-token-main-surface-primary hover:bg-token-main-surface-secondary inline-flex h-[42px] items-center justify-start gap-2 rounded-[25px] border px-4 py-3",
				onClick: s => {
					a({
						sourceEvent: s,
						stepPrompt: o.formatMessage(r[`${t}Prompt`]),
						messageMetadata: {
							onboarding: {
								main_usages: [{
									usage: t
								}]
							},
							is_starter_prompt: !0,
							suggestion_type: x.Starter
						}
					}), l.logEvent("chatgpt_convo_onboarding_usage_chip_clicked", null, {
						usage: t
					})
				},
				children: [e.jsx("div", {
					"data-svg-wrapper": !0,
					className: "relative",
					children: e.jsx(A, {
						usage: t
					})
				}), e.jsx("div", {
					className: "font-['SF Pro'] text-token-text-primary text-[13px] leading-[18px] font-normal opacity-90",
					children: o.formatMessage(r[t])
				})]
			}, t))
		})
	})
}

function I({
	clientThreadId: n,
	examples: o
}) {
	const a = f({
			clientThreadId: n
		}),
		t = [b, k, _],
		s = p();
	return m.useEffect(() => {
		l.logEvent("chatgpt_convo_onboarding_examples_shown")
	}, []), e.jsx(g, {
		mode: "wait",
		children: e.jsxs("div", {
			children: [e.jsx(c.p, {
				initial: {
					opacity: 0
				},
				animate: {
					opacity: 1
				},
				transition: {
					duration: .3,
					ease: "easeInOut"
				},
				className: "text-token-text-primary text-base",
				children: s.formatMessage(r.tryAnExample)
			}), e.jsx("ul", {
				className: "-mx-6 flex list-none flex-nowrap gap-6 overflow-auto px-6 py-4",
				children: o.map((i, u) => e.jsx(c.li, {
					initial: {
						opacity: 0,
						y: 10
					},
					animate: {
						opacity: 1,
						y: 0
					},
					transition: {
						delay: (u + 1) * .2,
						duration: .3
					},
					children: e.jsxs("button", {
						className: "bg-token-main-surface-primary outline-token-border-xlight hover:shadow-token-border-default inline-flex h-60 w-[222px] flex-col items-center justify-start overflow-hidden rounded-2xl outline transition-all duration-300 hover:shadow-lg",
						onClick: h => {
							a({
								sourceEvent: h,
								stepPrompt: i.example,
								messageMetadata: {
									onboarding: {
										triggered_tools: [i.feature]
									},
									is_starter_prompt: !0,
									suggestion_type: x.Starter
								}
							}), l.logEvent("chatgpt_convo_onboarding_example_clicked", null, {
								tool: i.feature
							})
						},
						children: [e.jsx("img", {
							src: t[u % t.length].src,
							className: "h-[160px] w-full object-cover",
							alt: s.formatMessage({
								id: "chatgpt.new-onboarding.example-prompt",
								defaultMessage: "Example prompt"
							})
						}), e.jsx("div", {
							className: "inline-flex h-20 w-full gap-1 p-4",
							children: e.jsx("div", {
								className: "text-token-text-primary line-clamp-2 shrink grow basis-0 text-start text-base leading-normal",
								title: i.title,
								children: i.title
							})
						})]
					})
				}, i.feature))
			})]
		})
	})
}

function U({
	clientThreadId: n,
	children: o
}) {
	const {
		isEligible: a,
		markAsViewed: t
	} = F(n), s = p();
	return m.useEffect(() => {
		a && y.showAnnouncementTooltipExclusively(d.hasSeenFilePickerNuxTooltip, !0)
	}, [a]), a ? e.jsx(v, {
		announcementKey: d.hasSeenFilePickerNuxTooltip,
		show: !0,
		side: "top",
		align: "start",
		theme: "bright",
		dismissOnOutsideClick: !0,
		badge: "none",
		title: s.formatMessage(r.tryUploadingAFile),
		description: s.formatMessage(r.uploadFileExample),
		onDismiss: t,
		sideOffset: 0,
		children: o
	}) : o
}
export {
	U as F, T as M, I as O
};
//# sourceMappingURL=g286r35f18ua9byd.js.map