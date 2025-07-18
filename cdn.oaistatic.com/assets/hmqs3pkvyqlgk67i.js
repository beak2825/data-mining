import {
	e as le,
	r as o,
	j as t,
	M as T,
	A as we,
	n as I,
	v as Bt,
	f as je,
	av as Ft,
	at as $t,
	d as Be
} from "./fyeo2h7okrqcf3nz.js";
import {
	j7 as Ht,
	j8 as Ut,
	nI as Wt,
	dz as st,
	w$ as qt,
	x0 as zt,
	ku as Gt,
	t as Re,
	kH as Fe,
	dj as V,
	fj as Yt,
	fk as Kt,
	fm as Xt,
	fn as Vt,
	x1 as ie,
	fw as Jt,
	fv as Zt,
	eT as Qt,
	fq as es,
	b1 as ts,
	wq as W,
	y as ss,
	A as We,
	J as ns,
	di as nt,
	dm as rs,
	dZ as rt,
	cA as qe
} from "./f7j18j5u52u1pnnk.js";
import {
	b6 as at,
	cL as ze,
	T as Ee,
	B as oe,
	fJ as as,
	dU as os,
	D as he,
	s as Z,
	N as Q,
	f as N,
	ay as ot,
	L as it,
	b as lt,
	R as ue,
	o as is,
	nr as ls,
	E as cs,
	iK as ds,
	cW as us,
	he as fs,
	hi as ms,
	hd as ps,
	fr as xs,
	ns as hs,
	dT as $e,
	dV as gs,
	f0 as ys,
	it as bs,
	aM as Ie,
	G as ws,
	g1 as js,
	P as Es,
	Q as vs,
	kH as Ss,
	hH as Ns,
	dI as Cs,
	cN as Ts,
	b7 as Y,
	b5 as ks,
	cC as Rs,
	M as _s,
	q as Ms,
	aS as As
} from "./egb2c0f6p1ew61vt.js";
import {
	u as ct
} from "./np575ojwia1bc8yj.js";
import {
	T as He,
	a as dt
} from "./f7hgik6cjoxksakw.js";
import {
	M as C,
	a as ve,
	b as pe,
	c as Os,
	C as Is,
	d as Se,
	E as ee,
	L as Ge,
	i as Ls
} from "./jazub75ldxizbo1c.js";
import {
	s as Ds,
	r as Ps,
	t as Bs,
	S as ce
} from "./ekh5ue0hmvvp6lmd.js";
import {
	L as Fs
} from "./gy64pge8qevmvg7e.js";
import {
	N as $s
} from "./jy1u8exw8iz2slve.js";
import {
	S as Hs
} from "./gayt6avnfip5st7p.js";
import {
	u as Us
} from "./ixsisjuxwij5x7d3.js";
import {
	u as ke,
	f as Ws,
	n as ut
} from "./crozh0j4v472kedz.js";
const ft = ({
		origin: e,
		url: s
	}) => t.jsxs("div", {
		"aria-label": s,
		className: "w-full min-w-0 pe-4 text-start whitespace-nowrap",
		children: [t.jsx("span", {
			"aria-hidden": !0,
			className: "text-token-text-primary",
			children: e
		}), t.jsx("span", {
			"aria-hidden": !0,
			className: "text-token-text-tertiary",
			children: s.replace(e, "")
		})]
	}),
	qs = ({
		request: e,
		isDenied: s = !1,
		onClick: n
	}) => {
		const [{
			width: r
		}, a] = ct();
		return t.jsxs("button", {
			ref: a,
			className: "group relative z-0 my-1 flex w-full items-center",
			onClick: n,
			children: [t.jsx("div", {
				className: "sticky start-0 z-[-1] w-0",
				children: t.jsx("div", {
					className: "absolute top-0 hidden h-8 -translate-y-1/2 bg-gray-100 group-hover:block",
					style: {
						width: r
					}
				})
			}), t.jsx("div", {
				className: "bg-token-main-surface-primary text-token-text-secondary sticky start-0 z-10 flex h-8 shrink-0 items-center px-2 group-hover:bg-gray-100",
				children: s ? t.jsx(Wt, {
					className: "icon text-red-500"
				}) : t.jsx(os, {
					className: "icon text-green-500"
				})
			}), t.jsx(ft, {
				...e
			})]
		})
	},
	zs = ({
		title: e,
		requests: s
	}) => {
		const n = le(),
			[r, a] = o.useState(() => new Set),
			l = () => {
				for (const {
						requestId: i,
						approve: u,
						deny: m
					}
					of s) r.has(i) ? m() : u()
			},
			c = () => {
				for (const i of s) i.deny()
			},
			d = i => {
				a(u => {
					const m = new Set(u);
					return m.has(i) ? m.delete(i) : m.add(i), m
				})
			},
			f = s.length - r.size;
		return t.jsx(at, {
			testId: "modal-confirm-fetch-request",
			isOpen: !0,
			shouldIgnoreClickOutside: !0,
			onClose: l,
			type: "success",
			title: t.jsxs("div", {
				className: "flex justify-between",
				children: [t.jsx("span", {
					className: "text-xl",
					children: t.jsx(T, {
						id: "VmMpF1",
						defaultMessage: "Allow network access?"
					})
				}), t.jsx(Ee, {
					side: "top",
					contentClassName: "max-w-2xs!",
					label: t.jsx(T, {
						id: "WT7tgj",
						defaultMessage: "Learn more about network requests in canvas"
					}),
					children: t.jsx(oe, {
						icon: as,
						openNewTab: !0,
						onClick: () => Ht.logButtonClick(Ut.LEARN_MODE_ABOUT_NETWORK_REQUESTS),
						as: "a",
						color: "ghost",
						size: "small",
						className: "text-token-text-secondary aspect-square p-1!",
						to: "https://help.openai.com/en/articles/9930697-what-is-the-canvas-feature-in-chatgpt-and-how-do-i-use-it#h_cd52fdbc16"
					})
				})]
			}),
			description: t.jsxs("div", {
				className: "mt-3 flex flex-col gap-3",
				children: [t.jsx("span", {
					className: "text-token-text-primary block",
					children: t.jsx(T, {
						id: "qk11AX",
						defaultMessage: "{title} is trying to connect to the network. If you don’t recognize {numRequests, plural, one {this request} other {any of these requests}}, don’t allow this app access to the network.",
						values: {
							title: `"${e}"`,
							numRequests: s.length
						}
					})
				}), t.jsx("div", {
					className: "flex max-w-full flex-col",
					children: s.length > 1 ? t.jsx("ul", {
						className: "border-token-border-default relative flex max-h-48 flex-col overflow-x-auto overflow-y-auto rounded-lg border",
						children: s.map(i => {
							const {
								requestId: u
							} = i;
							return t.jsx("li", {
								children: t.jsx(qs, {
									request: i,
									isDenied: r.has(u),
									onClick: () => d(u)
								})
							}, u)
						})
					}) : t.jsx("div", {
						className: "no-scrollbar bg-token-main-surface-secondary overflow-x-auto rounded-lg p-2",
						children: t.jsx(ft, {
							...s[0]
						})
					})
				})]
			}),
			primaryButton: t.jsx(ze.Button, {
				disabled: f === 0,
				title: s.length > 1 ? n.formatMessage({
					id: "xpKkWv",
					defaultMessage: "Allow selected ({count})"
				}, {
					count: f
				}) : n.formatMessage({
					id: "ZeMrpd",
					defaultMessage: "Allow"
				}),
				color: "primary",
				onClick: l
			}),
			secondaryButton: t.jsx(ze.Button, {
				title: n.formatMessage({
					id: "TjJzqR",
					defaultMessage: "{count, plural, one {Deny} other {Deny all}}"
				}, {
					count: s.length
				}),
				color: "secondary",
				onClick: c
			})
		})
	},
	Gs = ({
		instrument: e
	}) => {
		switch (e.type) {
			case "hist":
				return Z.hist(Q.WEB_SANDBOX, e.label, e.tags, e.value);
			case "count":
				return Z.count(Q.WEB_SANDBOX, e.label, e.tags, e.count);
			case "error":
				return he.addError(e.error)
		}
	},
	mt = ({
		size: e = 60,
		thickness: s = 1 / 16,
		checkpoints: n,
		activeCheckpointId: r,
		isComplete: a = !1,
		onTransitionComplete: l,
		color: c
	}) => {
		const [d, f] = o.useState(0), i = n.findIndex(g => g.id === r), u = o.useRef(null), m = n[i];
		o.useEffect(() => {
			if (!m || a) return;
			const g = n.length,
				x = i * 100 / g,
				b = (i + 1) * 100 / g;
			f(x);
			let E = null,
				y = null;
			const p = 5 / m.estimatedTime,
				w = M => {
					y == null && (y = M);
					const L = M - y;
					if (L !== 0) {
						const R = b - x,
							D = x + R * (1 - Math.exp(-p * L));
						f(Math.min(D, b - 1e-4))
					}
					E = window.setTimeout(() => {
						u.current = requestAnimationFrame(w)
					}, 16)
				};
			return u.current = requestAnimationFrame(w), () => {
				E != null && window.clearTimeout(E), u.current != null && cancelAnimationFrame(u.current)
			}
		}, [i, a]);
		const h = () => {
			a && l?.()
		};
		return t.jsx(st, {
			sizeOverride: e,
			className: N(c == null && "text-primary", c === "dark" && "text-back", c === "light" && "text-white"),
			thickness: s,
			backgroundStrokeClassName: N(c == null && "stroke-[rgba(0,0,0,0.1)] dark:stroke-[rgba(0,0,0,0.32)]", c === "dark" && "stroke-[rgba(0,0,0,0.32)]", c === "light" && "stroke-[rgba(0,0,0,0.1)] "),
			percentage: a ? 100 : d,
			onTransitionEnd: h,
			transitionDuration: "50ms",
			transitionTimingFunction: "cubic-bezier(0.55, 0, 1, 1)"
		})
	},
	Ys = ({
		checkpoints: e,
		activeCheckpointId: s,
		isIndeterminate: n = !1,
		isComplete: r
	}) => {
		const [a, l] = o.useState(r);
		return o.useEffect(() => {
			l(r)
		}, [s]), t.jsx(we, {
			children: (s != null && !a || n) && t.jsxs(I.div, {
				initial: {
					opacity: 0
				},
				exit: {
					opacity: 0
				},
				animate: {
					opacity: 1
				},
				className: "bg-token-main-surface-primary absolute end-2 bottom-2 flex items-center gap-2 rounded-full px-3 py-1.5 shadow-lg",
				children: [n ? t.jsx(st, {
					percentage: 30,
					thickness: 1 / 12,
					className: "text-primary animate-spin",
					backgroundStrokeClassName: "dark:stroke-[rgba(255,255,255,0.4)] stroke-[rgba(0,0,0,0.1)]",
					sizeOverride: 12
				}) : s && t.jsx(mt, {
					size: 12,
					thickness: 1 / 12,
					checkpoints: e,
					activeCheckpointId: s,
					isComplete: r,
					onTransitionComplete: () => l(!0)
				}), t.jsxs("span", {
					className: "text-token-text-secondary flex items-baseline text-sm",
					children: [t.jsx(T, {
						id: "zfcWbe",
						defaultMessage: "Updating"
					}), t.jsx(He, {
						gap: 1.5,
						padding: 2,
						size: 2
					})]
				})]
			})
		})
	};

function Ks(e) {
	let s = null;
	const n = [];
	let r = !1;
	return e.on("message", a => {
		s ? (s({
			value: a,
			done: r
		}), s = null) : n.push(a), a.type === C.RUN_COMPLETE && (r = !0)
	}), {
		[Symbol.asyncIterator]() {
			return this
		},
		next() {
			if (n.length > 0) {
				const a = n.shift();
				return Promise.resolve({
					value: a,
					done: r
				})
			}
			return r ? Promise.resolve({
				value: void 0,
				done: r
			}) : new Promise(a => {
				s = a
			})
		}
	}
}

function Ye() {
	let e = null;
	const s = new Promise(n => e = n);
	return {
		resolve: e,
		promise: s
	}
}
const pt = () => {
		const [e, s] = o.useState(Ye);
		return [e, o.useCallback(() => s(Ye()), [])]
	},
	xt = () => qt(it.getItem(lt.CODE_EXECUTION_DOMAIN_ALLOW_LIST), s => zt(s, {
		origin: Re,
		expiresAt: Gt
	}), []).filter(({
		expiresAt: s
	}) => s >= Date.now()),
	Ke = (e, s) => {
		const {
			origin: n
		} = new URL(e);
		let r = [...Is];
		const a = xt().map(({
			origin: l
		}) => l);
		return s && (r = r.concat(a)), r.includes(n)
	},
	Xs = ({
		sessionId: e,
		networkAccessDeniedMessage: s,
		disableNetworkRequests: n,
		unsafeAllowAllNetworkRequests: r
	}) => {
		const a = ot(),
			l = le(),
			c = o.useRef(null),
			d = o.useRef(null),
			f = o.useRef(null),
			[i, u] = o.useState([]),
			m = o.useCallback(y => d.current?.postMessage(y), []),
			h = o.useCallback(y => f.current?.postMessage(y), []);
		o.useEffect(() => () => {
			h({
				type: ve.DISCONNECT,
				sessionId: e
			})
		}, [e]);
		const g = o.useCallback(({
				url: y,
				requestId: p
			}) => {
				try {
					if (r || Ke(y, !n)) return h({
						type: ve.FETCH_RESPONSE,
						isApproved: !0,
						requestId: p
					});
					if (n) return a.danger(s ?? l.formatMessage({
						id: "Lp7cKY",
						defaultMessage: "Network access is disabled."
					}), {
						loggingTitle: "Network access is disabled.",
						toastId: "network_access_denied"
					});
					Z.count(Q.WEB_SANDBOX, "network_access_requested");
					const {
						origin: w
					} = new URL(y), M = R => {
						Z.count(Q.WEB_SANDBOX, `network_access_request.${R?"allow":"deny"}`), h({
							type: ve.FETCH_RESPONSE,
							isApproved: R,
							requestId: p
						}), u(D => D.filter(A => !r && !Ke(A.url, !n) && A.requestId !== p))
					}, L = () => {
						it.setItem(lt.CODE_EXECUTION_DOMAIN_ALLOW_LIST, [...xt(), {
							origin: w,
							expiresAt: Date.now() + 90 * 24 * 60 * 60 * 1e3
						}]), M(!0)
					};
					u(R => [...R, {
						url: y,
						origin: w,
						requestId: p,
						approve: L,
						deny: () => M(!1)
					}])
				} catch (w) {
					he.addError(w), h({
						type: ve.FETCH_RESPONSE,
						isApproved: !1,
						requestId: p
					})
				}
			}, [n, h, a, s, l, r]),
			[x, b] = pt(),
			E = o.useCallback(async (y, p) => {
				if (y.type === pe.SW_NOT_SUPPORTED) Z.count(Q.WEB_SANDBOX, "sw_not_supported"), x.resolve?.();
				else {
					d.current = p[0], f.current = p[1], f.current.onmessage = w => {
						w.data.type === "ready" ? x.resolve?.() : g(w.data)
					};
					try {
						const {
							token: w
						} = await ue.safeGet("/public/code_execution_challenge", {
							authOption: is.Anonymous,
							parameters: {
								query: {
									relay_client_id: y.clientId
								}
							}
						});
						m({
							type: Os.SW_RECONNECT_RESPONSE,
							reconnectId: y.reconnectId,
							sessionId: e,
							token: w
						})
					} catch (w) {
						he.addError(w)
					}
				}
			}, [g, m, x, e]);
		return {
			relayRef: c,
			relayInitPromise: x,
			resetRelayInitPromise: b,
			handleMessageFromRelay: E,
			pendingFetchRequests: i
		}
	},
	Vs = "https://persistent.oaistatic.com/canvas/loop-swirl.mp4",
	Js = "https://persistent.oaistatic.com/canvas/loop-swirl-poster.jpg",
	fe = 90,
	Zs = ({
		title: e,
		checkpoints: s,
		activeCheckpointId: n,
		isComplete: r,
		onTransitionComplete: a
	}) => {
		const [l, c] = o.useState(!1), d = s.findIndex(u => u.id === n), f = s[d], i = () => {
			a?.(), c(!0)
		};
		return t.jsx(I.div, {
			className: "relative flex h-full w-full items-center justify-center",
			transition: {
				type: "spring",
				bounce: 0
			},
			children: t.jsxs(I.div, {
				className: "flex -translate-y-12 flex-col items-center gap-3",
				style: {
					minWidth: fe,
					height: fe
				},
				initial: {
					opacity: 0
				},
				animate: {
					opacity: 1
				},
				transition: {
					type: "spring",
					duration: .5,
					bounce: 0
				},
				children: [t.jsxs(I.div, {
					className: "bg-token-main-surface-primary absolute overflow-hidden rounded-3xl shadow-2xl",
					initial: !1,
					animate: {
						width: fe,
						height: fe,
						opacity: l ? 0 : 1
					},
					transition: {
						type: "spring",
						duration: .56,
						bounce: 0
					},
					children: [t.jsx("video", {
						muted: !0,
						loop: !0,
						autoPlay: !0,
						playsInline: !0,
						src: Vs,
						poster: Js,
						className: N("absolute inset-0 z-0 h-full w-full object-cover transition-opacity duration-200")
					}), t.jsx("div", {
						className: N("relative z-10 flex h-full w-full items-center justify-center", l ? "opacity-0" : "opacity-100"),
						children: t.jsx(mt, {
							color: "light",
							checkpoints: s,
							activeCheckpointId: n,
							isComplete: r,
							onTransitionComplete: i,
							thickness: 1 / 12
						})
					})]
				}), t.jsxs(I.div, {
					className: N("flex flex-col items-center transition-opacity duration-200", r ? "opacity-0" : "opacity-100"),
					style: {
						translateY: fe + 20
					},
					children: [t.jsx("span", {
						className: "text-token-text-primary font-semibold",
						children: e
					}), f && t.jsx(I.span, {
						className: "text-token-text-secondary flex items-baseline",
						children: t.jsx("span", {
							className: "loading-shimmer",
							children: f.label
						})
					})]
				})]
			})
		})
	},
	Xe = ({
		sessionId: e
	}) => "?" + [`sessionId=${e}`, ""].filter(Boolean).join("&"),
	Ve = [{
		id: ee.INITIALIZING,
		label: "Initializing environment",
		estimatedTime: 1e3
	}, {
		id: ee.INSTALLING_PACKAGES,
		label: "Installing packages",
		estimatedTime: 2e3
	}, {
		id: ee.RUNNING_CODE,
		label: "Ready",
		estimatedTime: 1
	}],
	Qs = () => us() ? "ios" : fs() ? "windows" : ms() ? "android" : ps() ? "safari" : xs() || hs() ? "chrome" : "unknown",
	en = ({
		isShare: e = !1,
		disableNetworkRequests: s = !1,
		unsafeAllowAllNetworkRequests: n = !1,
		networkAccessDeniedMessage: r,
		visuallyHidden: a = !1,
		isCodeUpdating: l = !1,
		enableTransition: c = !1,
		disablePermissions: d = !1,
		title: f,
		onChangeBackgroundColor: i
	}, u) => {
		const [m, h] = o.useState(0), [g] = o.useState(() => crypto.randomUUID()), {
			pendingFetchRequests: x,
			handleMessageFromRelay: b,
			relayInitPromise: E,
			resetRelayInitPromise: y,
			relayRef: p
		} = Xs({
			sessionId: g,
			disableNetworkRequests: s,
			networkAccessDeniedMessage: r,
			unsafeAllowAllNetworkRequests: n
		}), w = o.useRef(null), [M, L] = pt(), R = o.useMemo(() => Promise.all([M.promise, E.promise]), [M, E]), [D, A] = o.useState(null), [q, z] = o.useState(!1), K = o.useRef(null), U = o.useRef(new Map), $ = o.useRef(null), k = o.useCallback(j => {
			K.current?.postMessage(j)
		}, []), _ = o.useCallback(() => {
			const j = U.current.keys();
			A(null), z(!1), i?.(null);
			for (const S of j) k({
				type: Se.STOP_CODE,
				runId: S
			});
			$.current = null
		}, [k, i]), ne = o.useCallback(() => {
			y(), L(), h(j => j + 1), A(null), z(!1), $.current = null
		}, [y, L]), B = o.useCallback(async function*({
			code: j,
			language: S
		}) {
			if (A(ee.INITIALIZING), Z.count(Q.WEB_SANDBOX, `${S}.eval`), await R, U.current.size !== 0) return _();
			const P = Bt(),
				O = new ls;
			U.current.set(P, O);
			const J = {
				code: j,
				language: S,
				type: Se.RUN_CODE,
				runId: P
			};
			$.current = {
				runId: P,
				language: S
			}, k(J);
			for await (const F of Ks(O)) F && F.type === C.ENVIRONMENT_STATUS && (A(F.status), c || z(F.status === ee.RUNNING_CODE)), F?.type === C.ERROR ? Z.count(Q.WEB_SANDBOX, `${S}.error`) : F?.type === C.RUN_COMPLETE && F.wasFatalError && Z.count(Q.WEB_SANDBOX, `${S}.fatal_runtime_error`), F && !Fe([C.READY], F.type) && (yield F);
			A(null), z(!1), U.current.delete(P)
		}, [R, c, k, _]), G = o.useCallback(async j => {
			await R, k({
				type: Se.PREPARE_ENVIRONMENT,
				language: j
			})
		}, [R, k]), X = j => {
			$.current && k({
				type: Se.RUN_CODE,
				code: j,
				...$.current
			})
		};
		o.useImperativeHandle(u, () => ({
			stop: _,
			evalAsync: B,
			updateCode: X,
			prepareEnvironment: G
		})), o.useEffect(() => cs(window, {
			message: j => {
				const {
					data: S,
					ports: P
				} = j, {
					type: O
				} = S, J = j.source === p.current?.contentWindow, F = j.source === w.current?.contentWindow;
				if (!J && !F) return;
				if (O === C.ENVIRONMENT_ERROR) return he.addError("Code execution environment error", S.error), S.error.name === "ServiceWorker" && Z.count(Q.WEB_SANDBOX, "service_worker_connection_failure", [{
					key: "agent",
					value: Qs()
				}, {
					key: "is_share",
					value: String(e)
				}]), S.runId != null && S.runId === $.current?.runId && Z.count(Q.WEB_SANDBOX, `${$.current.language}.environment_error`), ne();
				if (J && (S.type === pe.SW_NOT_SUPPORTED || S.type === pe.SW_RECONNECT)) return b(S, P);
				if (J || !F || O === pe.SW_RECONNECT || O === pe.SW_NOT_SUPPORTED) return;
				if (K.current = P[0], O === C.READY) return M.resolve?.();
				if (O === C.SET_BACKGROUND_COLOR) return i?.(S.backgroundColor);
				if (O === C.INSTRUMENT) return Gs(S);
				const {
					runId: H
				} = S, re = H && U.current.get(H);
				re ? re.emit("message", S) : he.addError("Code execution error: missing event emitter", {
					messageData: j.data
				})
			}
		}), [i, ne, b, E, p, M, g, e]);
		const te = {
				type: "spring",
				duration: q && c ? .56 : 0,
				delay: q ? .12 : 0,
				bounce: 0
			},
			v = d ? "" : "midi";
		return t.jsxs(ds, {
			children: [t.jsx("iframe", {
				title: "relay",
				"aria-hidden": "true",
				className: "fixed h-0 w-0",
				allow: v,
				ref: p,
				src: `${Ge}/relay.html${Xe({sessionId:g})}`
			}, `relay-${m}`), t.jsxs("div", {
				className: N("relative flex", a ? "fixed h-0 w-0" : "h-full w-full"),
				children: [!a && D != null && c && t.jsx(Zs, {
					isComplete: D === ee.RUNNING_CODE,
					onTransitionComplete: () => z(!0),
					activeCheckpointId: D,
					title: f,
					checkpoints: Ve
				}), t.jsx(I.div, {
					className: N("bg-token-main-surface-primary absolute inset-0 m-auto origin-center overflow-hidden", q ? "pointer-events-auto" : "pointer-events-none"),
					animate: {
						opacity: q ? 1 : 0,
						...q ? {
							scale: 1
						} : {
							scale: .95
						}
					},
					transition: te,
					children: t.jsx(I.iframe, {
						title: f,
						className: "h-full w-full overflow-hidden",
						transition: te,
						"aria-hidden": a ? "true" : void 0,
						allow: v,
						src: `${Ge}/index.html${Xe({sessionId:g})}`,
						sandbox: "allow-scripts allow-same-origin allow-popups allow-popups-to-escape-sandbox allow-forms",
						ref: w,
						tabIndex: -1
					}, `sandbox-${m}`)
				}), q && t.jsx(Ys, {
					isIndeterminate: l,
					isComplete: D === ee.RUNNING_CODE,
					activeCheckpointId: D,
					checkpoints: Ve
				})]
			}), x.length > 0 && t.jsx(zs, {
				title: f,
				requests: x
			})]
		})
	},
	fr = o.forwardRef(en);

function ht(e) {
	return e.includes("'react'") || e.includes('"react"')
}

function tn(e, s) {
	switch (e) {
		case V.CODE_HTML:
		case V.CODE_REACT:
			return !0;
		case V.CODE_JAVASCRIPT:
		case V.CODE_TYPESCRIPT:
			return ht(s);
		default:
			return !1
	}
}

function sn(e) {
	return Fe([V.CODE_PYTHON], e)
}

function nn(e, s) {
	let n = dt(e) ?? null;
	return (ht(s) || e === V.CODE_REACT) && (n = "react"), n && Ls(n) ? n : null
}
const rn = ({
		onClose: e,
		title: s,
		actions: n,
		showBorder: r = !1
	}) => t.jsxs("div", {
		className: N("bg-token-main-surface-primary flex items-center justify-between border-b py-2 ps-2 pe-2.5", {
			"border-token-border-xlight": r,
			"border-transparent": !r
		}),
		children: [t.jsx("div", {
			className: "text-token-text-primary flex items-center gap-2 ps-4 text-sm select-none",
			children: s
		}), t.jsxs("div", {
			className: "flex items-center gap-2",
			children: [n.map(({
				tooltip: a,
				icon: l,
				onClick: c
			}, d) => {
				const f = t.jsx(oe, {
					size: "small",
					color: "ghost",
					as: "button",
					className: "text-token-text-primary aspect-square p-1!",
					icon: l,
					onClick: c
				}, d);
				return a ? t.jsx(Ee, {
					label: a,
					children: f
				}, d) : f
			}), t.jsx(oe, {
				size: "small",
				color: "ghost",
				as: "button",
				className: "text-token-text-primary aspect-square p-1!",
				onClick: e,
				icon: $e
			})]
		})]
	}),
	an = ({
		onDrag: e,
		onDragEnd: s,
		onDoubleClick: n
	}) => t.jsx(I.div, {
		drag: "y",
		className: "bg-token-text-quaternary absolute top-[-2px] z-10 h-[4px] w-full cursor-ns-resize opacity-0",
		whileHover: {
			opacity: .5
		},
		whileDrag: {
			opacity: .75,
			height: "8px",
			top: "-4px"
		},
		transition: {
			type: "tween",
			duration: .1
		},
		style: {
			x: 0,
			y: 0,
			transform: "translateY(0px)"
		},
		dragMomentum: !1,
		dragSnapToOrigin: !1,
		dragElastic: !1,
		dragConstraints: {
			left: 0,
			right: 0,
			top: 0,
			bottom: 0
		},
		onDrag: (r, a) => {
			e?.(a)
		},
		onDragEnd: s,
		onDoubleClick: n
	}),
	on = ({
		textdocTitle: e,
		onClickViewConsole: s,
		onClickFix: n,
		onDismiss: r
	}) => t.jsxs(I.div, {
		initial: {
			scale: .95,
			opacity: 0
		},
		exit: {
			scale: .95,
			opacity: 0
		},
		animate: {
			scale: 1,
			opacity: 1
		},
		transition: {
			type: "spring",
			bounce: .12,
			duration: .3
		},
		className: "border-token-border-default bg-token-main-surface-primary absolute end-2 bottom-2 flex w-fit max-w-80 flex-col gap-4 rounded-xl border px-4 py-4 shadow-xl",
		children: [t.jsxs("div", {
			className: "flex items-start",
			children: [t.jsxs("div", {
				className: "flex flex-col gap-1",
				children: [t.jsx("div", {
					className: "text-sm font-semibold",
					children: t.jsx(T, {
						id: "ObCQBq",
						defaultMessage: "Cannot preview your code"
					})
				}), t.jsx("div", {
					className: "text-sm",
					children: t.jsx(T, {
						id: "3ZeoP8",
						defaultMessage: "An error occured while trying to run {name}",
						values: {
							name: e
						}
					})
				})]
			}), t.jsx(oe, {
				size: "small",
				color: "ghost",
				as: "button",
				className: "text-token-text-tertiary -m-1! aspect-square p-0!",
				onClick: r,
				icon: $e
			})]
		}), t.jsxs("div", {
			className: "flex items-center justify-end gap-2",
			children: [t.jsx(oe, {
				size: "small",
				color: "secondary",
				onClick: s,
				children: t.jsx(T, {
					id: "Fch32I",
					defaultMessage: "View console"
				})
			}), t.jsx(oe, {
				size: "small",
				color: "primary",
				onClick: n,
				children: t.jsx(T, {
					id: "HRfYX0",
					defaultMessage: "Fix bug"
				})
			})]
		})]
	}),
	gt = (e, {
		name: s,
		message: n,
		line: r,
		stack: a
	}) => {
		const l = r != null ? `

Error occured in:
${e.split(`
`).slice(r-1,r+1).join(`
`)}` : "";
		return `${s}: ${n}

Stack:
${a.join("")}${l}`
	},
	Oe = new Fs({
		capacity: 5
	}),
	ln = async (e, s, n) => {
		const r = gt(s, n.error),
			a = Re(Oe.get(r));
		if (Oe.get(r)) return a;
		const {
			hint: l
		} = await ue.safePost("/textdoc/{textdoc_id}/code/hint", {
			parameters: {
				path: {
					textdoc_id: e
				}
			},
			requestBody: {
				error: r,
				line: n.error.line ?? -1
			}
		});
		return Oe.set(r, l), l
	}, yt = e => Fe([C.ERROR, C.LOG, C.OUTPUT], e.type), bt = e => e.type === C.OUTPUT && wt(e.output), wt = e => typeof e == "string" && e.startsWith("data:image/png;"), xe = ({
		as: e = "li",
		contentBefore: s,
		contentAfter: n,
		disableEntryAnimation: r = !1,
		hasHint: a = !1,
		bottomBorder: l = !1,
		isHintOpen: c = !1,
		isSticky: d = !1,
		onClick: f,
		children: i
	}) => {
		const u = !!f,
			m = e === "div" ? I.div : I.li;
		return t.jsxs(m, {
			initial: r ? !1 : {
				opacity: 0
			},
			animate: {
				opacity: 1
			},
			transition: {
				duration: .32
			},
			role: u ? "button" : void 0,
			className: N("bg-token-main-surface-primary flex items-start justify-between py-1.5 ps-6 pe-4 font-mono text-sm whitespace-pre", l && "border-token-border-xlight border-b", d && "sticky top-0 z-10", u && "cursor-pointer", u && a && "hover:bg-red-500/10", u && !a && "hover:bg-gray-50 dark:hover:bg-gray-700", a && c && "bg-red-500/10"),
			onClick: u ? f : void 0,
			children: [s && t.jsx("div", {
				className: "me-3 flex h-6 w-5 items-start",
				children: s
			}), t.jsx("div", {
				className: "flex min-h-6 min-w-0 flex-1 items-start justify-start gap-2 leading-6",
				children: i
			}), n && t.jsx("div", {
				className: "ms-3 flex min-h-6 items-start leading-6",
				children: n
			})]
		})
	};
var se = (e => (e.LOADING = "loading", e.READY = "ready", e.RESOLVED = "resolved", e))(se || {});
const jt = ({
		hint: e,
		onClickFix: s,
		isOpen: n,
		onOpenChange: r
	}) => {
		const a = o.useRef(null),
			l = le();
		return e ? t.jsx("div", {
			className: "relative flex items-center font-sans",
			onClick: c => c.stopPropagation(),
			children: t.jsxs(Yt, {
				open: n,
				onOpenChange: r,
				children: [t.jsx(Kt, {
					asChild: !0,
					ref: a,
					children: e.status === "resolved" ? t.jsx("div", {
						className: "flex h-5 w-5 items-center",
						children: t.jsx(gs, {
							className: "text-token-text-tertiary",
							size: 16
						})
					}) : t.jsx("button", {
						className: "h-5 w-5",
						disabled: e.status === "loading",
						children: e.status === "loading" ? t.jsx(Ds, {}) : t.jsx(Ps, {
							position: "static",
							isError: !0,
							count: 1,
							offsetY: 0
						})
					})
				}), t.jsx(we, {
					children: n && t.jsx(Xt, {
						forceMount: !0,
						container: a.current?.ownerDocument.body,
						children: t.jsx(Vt, {
							side: "top",
							align: "start",
							alignOffset: -4,
							sideOffset: 10,
							children: t.jsx(Bs, {
								position: "static",
								translateY: 0,
								right: 0,
								isFocused: !0,
								onDismiss: () => r?.(!1),
								onAccept: c => {
									r?.(!1), s?.(c)
								},
								comment: e,
								acceptButtonLabel: l.formatMessage({
									id: "Dl9vBh",
									defaultMessage: "Fix bug"
								})
							})
						})
					})
				})]
			})
		}) : t.jsx("div", {
			className: "w-5"
		})
	},
	_e = e => Array.isArray(e) || ie(e) || e instanceof Map || e instanceof Set,
	Me = e => e == null || typeof e == "string" || typeof e == "number" || typeof e == "boolean",
	Et = e => ie(e) ? Object.entries(e) : Array.from(e.entries()),
	vt = e => `${typeof e}:${typeof e=="object"?JSON.stringify(e):e}`,
	cn = ({
		isPreview: e = !1,
		value: s
	}) => {
		const [n, r] = o.useState(!1);
		return Me(s) ? t.jsx(Ae, {
			value: s,
			depth: 0
		}) : _e(s) ? t.jsxs("span", {
			className: N("relative z-0 max-w-full font-mono text-sm leading-6", n && "w-full flex-auto"),
			children: [t.jsxs("span", {
				role: "button",
				className: "group/row flex flex-wrap items-center gap-x-1 italic",
				onClick: () => r(!n),
				children: [!e && t.jsx(kt, {
					isExpanded: n
				}), t.jsx(Nt, {
					value: s,
					depth: 0
				}), t.jsx(De, {
					value: s
				})]
			}), n && !e && t.jsx("div", {
				className: "ps-6",
				children: t.jsx(Ct, {
					value: s,
					depth: 0
				})
			})]
		}) : t.jsx("span", {
			className: "truncate",
			children: String(s)
		})
	},
	St = ({
		value: e,
		depth: s = 0
	}) => _e(e) ? t.jsx(Ct, {
		depth: s,
		value: e
	}) : Me(e) ? t.jsx(Ae, {
		depth: s,
		value: e
	}) : t.jsx("span", {
		className: "truncate",
		children: String(e)
	}),
	Nt = ({
		value: e,
		depth: s = 0
	}) => {
		const n = Array.isArray(e),
			r = Et(e);
		return t.jsxs("div", {
			className: "inline-flex max-w-fit min-w-0 grow basis-0",
			children: [!ie(e) && t.jsx(Le, {
				isShort: !0,
				isSecondary: !0,
				collection: e
			}), n ? "[" : "{", t.jsx("span", {
				className: "inline-flex max-w-fit min-w-0 shrink grow basis-0 overflow-hidden",
				children: r.map(([a, l], c) => {
					let d = null;
					return _e(l) ? d = t.jsx(Le, {
						collection: l
					}) : Me(l) ? d = t.jsx(Ae, {
						truncate: !0,
						depth: s + 1,
						value: l
					}) : d = t.jsx(St, {
						depth: s + 1,
						value: l
					}), t.jsxs(o.Fragment, {
						children: [(ie(e) || e instanceof Map) && t.jsx("span", {
							className: "text-token-text-secondary min-w-[2em] shrink truncate whitespace-pre",
							children: t.jsx(Tt, {
								value: e,
								propertyKey: a
							})
						}), d, c < r.length - 1 && t.jsx("span", {
							className: "whitespace-pre",
							children: ", "
						})]
					}, vt(a))
				})
			}), n ? "]" : "}"]
		})
	},
	Ct = ({
		value: e,
		depth: s = 0
	}) => {
		const [n, r] = o.useState(() => new Set), a = Et(e);
		return t.jsx("ol", {
			className: "flex flex-col ps-6 font-mono",
			children: a.map(([l, c]) => {
				const d = vt(l),
					f = n.has(d),
					i = _e(c),
					u = () => {
						r(m => {
							const h = new Set(m);
							return h.has(d) ? h.delete(d) : h.add(d), h
						})
					};
				return t.jsxs("li", {
					className: N("flex ps-1 whitespace-nowrap", i && "flex-col", !i && "group/row flex-wrap"),
					onClick: m => m.stopPropagation(),
					children: [t.jsxs("span", {
						onClick: i ? u : void 0,
						role: i ? "button" : void 0,
						className: N("group/row z-10 -ms-1 min-w-0 items-center gap-x-1", i ? "flex" : "inline-flex"),
						children: [i && t.jsxs(t.Fragment, {
							children: [t.jsx(dn, {}), t.jsx(kt, {
								shiftLeft: !0,
								isExpanded: f
							})]
						}), t.jsx("span", {
							className: N("font-bold", (ie(e) || Array.isArray(e)) && "text-red-900 dark:text-blue-400"),
							children: t.jsx(Tt, {
								value: e,
								propertyKey: l
							})
						}), i && !f && t.jsx(Nt, {
							value: c,
							depth: s + 1
						}), i && f && t.jsx(Le, {
							isSecondary: !0,
							collection: c
						}), i && t.jsx(De, {
							value: c
						})]
					}), (!i || f) && t.jsx(St, {
						value: c,
						depth: s + 1
					}), (typeof c == "string" || typeof c == "number") && t.jsx(De, {
						value: c
					})]
				}, d)
			})
		})
	},
	Ae = ({
		value: e,
		truncate: s = !1
	}) => typeof e == "string" ? t.jsxs("span", {
		className: N("dark:text-blue-75 text-red-500", s && "max-w-fit min-w-[2em] shrink-0 grow basis-0 overflow-hidden text-ellipsis whitespace-nowrap", !s && "break-words break-all whitespace-normal"),
		children: ["'", e, "'"]
	}) : t.jsx("span", {
		className: N("whitespace-nowrap", e == null ? "text-token-text-secondary" : "dark:text-brand-purple-600 text-blue-500"),
		children: String(e)
	}),
	dn = () => t.jsx("span", {
		className: "absolute start-0 end-0 z-[-1] h-6 rounded-md group-hover/row:bg-gray-50 dark:group-hover/row:bg-gray-700"
	}),
	Le = ({
		collection: e,
		isSecondary: s = !1,
		isShort: n = !1
	}) => {
		let r = null;
		return Array.isArray(e) && e.length > 0 ? r = n ? `(${e.length})` : `Array(${e.length})` : e instanceof Set ? r = `Set(${e.size})` : e instanceof Map ? r = `Map(${e.size})` : ie(e) && (r = "{…}"), r && t.jsx("span", {
			className: N(s && "text-token-text-secondary"),
			children: r
		})
	},
	Tt = ({
		value: e,
		propertyKey: s
	}) => ie(e) || Array.isArray(e) ? `${Re(s)}: ` : e instanceof Map ? t.jsxs("span", {
		className: "inline-flex items-center gap-1",
		children: [Me(s) ? t.jsx(Ae, {
			value: s,
			depth: 0
		}) : t.jsx("span", {
			className: "text-token-text-secondary",
			children: JSON.stringify(s)
		}), t.jsx(bs, {
			className: "icon-sm text-token-text-secondary"
		})]
	}) : null,
	kt = ({
		isExpanded: e,
		shiftLeft: s = !1
	}) => t.jsx("button", {
		className: N("flex h-5 shrink-0 items-center overflow-hidden", s && "ms-[-16px]"),
		children: t.jsx(ys, {
			className: N("icon-sm text-token-text-secondary transition-transform", e && "rotate-90")
		})
	}),
	De = ({
		value: e
	}) => {
		const s = ot(),
			n = () => {
				Zt(JSON.stringify(e), s)
			};
		return t.jsx("span", {
			className: N("text-token-text-secondary relative inline-block h-4 self-center opacity-0 transition-opacity", "group-hover/row:opacity-100 group-hover/row:delay-500", "hover:after:bg-token-main-surface-tertiary after:pointer-events-none after:absolute after:inset-[-4px] after:z-0 after:rounded-lg after:content-['']"),
			children: t.jsx(Jt, {
				iconClassName: "icon-sm z-10",
				iconOnly: !0,
				onCopy: n
			})
		})
	},
	un = "module:",
	Pe = ({
		log: e,
		isDisabled: s = !1,
		onClick: n
	}) => t.jsx("div", {
		className: "flex items-center",
		children: "line" in e && e.line != null && t.jsxs("button", {
			onClick: () => e.line != null && n?.(e.line),
			className: "text-token-text-tertiary select-none enabled:hover:underline",
			disabled: s,
			children: [un, e.line]
		})
	}),
	fn = ({
		isPreview: e = !1,
		log: s,
		level: n
	}) => t.jsxs("span", {
		className: N("text-token-text-primary flex min-w-0 flex-wrap gap-1", e ? "shrink truncate" : "whitespace-pre-wrap", n === "warn" && "text-yellow-600"),
		children: [n === "warn" && "[warn]: ", typeof s == "string" ? s : s.map((r, a) => t.jsx(cn, {
			isPreview: e,
			value: r
		}, a))]
	}),
	Rt = ({
		error: e,
		isPreview: s = !1,
		isResolved: n = !1
	}) => {
		const r = e.name + ":";
		return t.jsxs("span", {
			className: N("whitespace-pre-wrap", n ? "text-token-text-primary" : "text-red-500"),
			children: [t.jsx("span", {
				className: "font-semibold",
				children: r
			}), " ", e.message, t.jsx("div", {
				children: e.stack.length > 0 && !s ? e.stack.join(`
`) : ""
			})]
		})
	},
	mn = ({
		output: e,
		isPreview: s = !1
	}) => {
		const n = le();
		return e == null ? null : wt(e) ? t.jsx("img", {
			alt: n.formatMessage(xn.imgAlt),
			className: N(s && "border-token-border-xlight h-6 rounded-lg border"),
			src: e
		}) : t.jsx("span", {
			className: "flex items-center gap-2",
			children: Re(e)
		})
	},
	Ue = ({
		log: e,
		isHintResolved: s,
		isPreview: n = !1
	}) => {
		switch (e.type) {
			case C.LOG:
				return t.jsx(fn, {
					isPreview: n,
					...e
				});
			case C.ERROR:
				return t.jsx(Rt, {
					isPreview: n,
					isResolved: s,
					...e
				});
			case C.OUTPUT:
				return t.jsx(mn, {
					isPreview: n,
					...e
				});
			default:
				return null
		}
	},
	pn = ({
		log: e,
		isStale: s = !1,
		onClickFix: n,
		onClickLineNumber: r,
		hint: a
	}) => {
		const [l, c] = o.useState(!1);
		if (e.type === C.RUN_COMPLETE) return null;
		const d = a?.status === se.RESOLVED,
			f = e.type === C.ERROR && a?.status === se.READY;
		return t.jsx(xe, {
			hasHint: f,
			isHintOpen: l,
			bottomBorder: !0,
			onClick: a && !d && (() => c(!0)),
			contentBefore: t.jsx(jt, {
				hint: a,
				isOpen: l,
				onOpenChange: c,
				onClickFix: i => e.type === C.ERROR && a && n?.(i, a.id, e.error)
			}),
			contentAfter: t.jsx(Pe, {
				log: e,
				isDisabled: s,
				onClick: r
			}),
			children: t.jsx(Ue, {
				log: e,
				isHintResolved: d
			})
		})
	},
	xn = je({
		imgAlt: {
			id: "L6t7Yb",
			defaultMessage: "Plot"
		},
		ranCode: {
			id: "ffa9Nt",
			defaultMessage: "Ran code"
		},
		askForHelp: {
			id: "wMZco9",
			defaultMessage: "Ask ChatGPT for help"
		},
		askForFix: {
			id: "A9pxgT",
			defaultMessage: "Fix it for me"
		}
	}),
	hn = ({
		timestamp: e,
		duration: s
	}) => {
		const [, n] = o.useState(0);
		o.useEffect(() => {
			setInterval(() => {
				n(l => l + 1)
			}, 5e3)
		}, []);
		const r = Date.now(),
			a = Math.round((r - e) / 1e3);
		return t.jsx(Ee, {
			label: t.jsx(T, {
				id: "bFO21A",
				defaultMessage: "Code ran {count, plural, =0 {instantly} one {in # second} other {in # seconds}}",
				values: {
					count: Math.floor(s / 1e3)
				}
			}),
			children: t.jsx("span", {
				className: "text-token-text-tertiary",
				children: a >= 60 ? t.jsx(Ft, {
					value: -a,
					updateIntervalInSeconds: 60,
					numeric: "auto"
				}) : t.jsx(T, {
					id: "bRCEFN",
					defaultMessage: "Just now"
				})
			})
		})
	},
	_t = ({
		isComplete: e,
		timestamp: s,
		duration: n
	}) => e && s != null && n != null ? t.jsx(hn, {
		timestamp: s,
		duration: n
	}) : e && n == null ? t.jsx("span", {
		className: "text-token-text-tertiary",
		children: t.jsx(T, {
			id: "EMebM9",
			defaultMessage: "Stopped"
		})
	}) : t.jsx(He, {
		gap: 2
	}),
	gn = e => {
		switch (e) {
			case ee.INITIALIZING:
				return t.jsx(T, {
					id: "J183Z0",
					defaultMessage: "initializing environment"
				});
			case ee.INSTALLING_PACKAGES:
				return t.jsx(T, {
					id: "21sQ8o",
					defaultMessage: "installing packages"
				});
			case ee.RUNNING_CODE:
				return t.jsx(T, {
					id: "nHITHk",
					defaultMessage: "running code"
				})
		}
	},
	Ce = ({
		message: e,
		isComplete: s,
		statusLogs: n
	}) => {
		const r = Ie(n);
		return t.jsxs("span", {
			className: "flex items-center",
			children: [t.jsx("span", {
				className: "text-token-text-secondary font-semibold",
				children: t.jsx(T, {
					...e
				})
			}), !s && r && t.jsxs(I.span, {
				initial: {
					opacity: 0
				},
				animate: {
					opacity: 1
				},
				exit: {
					opacity: 0
				},
				transition: {
					delay: .3,
					duration: .1
				},
				className: "text-token-text-tertiary ms-2 flex items-baseline",
				children: [gn(r.status), t.jsx(He, {
					gap: 2,
					size: 2
				})]
			})]
		})
	},
	yn = ({
		children: e,
		firstLog: s,
		lastLog: n,
		isHintResolved: r,
		duration: a,
		isComplete: l = !1,
		isLast: c = !1,
		statusLogs: d
	}) => {
		const [f, i] = o.useState(!0), [u, m] = o.useState(!1), h = o.useRef(null), g = () => {
			i(!f)
		};
		return o.useEffect(() => {
			const {
				current: x
			} = h;
			if (!x) return;
			const b = new IntersectionObserver(E => {
				E[0].intersectionRatio === 0 ? m(!0) : m(!1)
			}, {
				threshold: 0
			});
			return b.observe(x), () => b.unobserve(x)
		}, []), t.jsxs("li", {
			className: "relative flex flex-col",
			children: [t.jsx("div", {
				"aria-hidden": "true",
				className: "pointer-events-none absolute h-[1px] bg-transparent",
				ref: h
			}), t.jsxs(xe, {
				as: "div",
				disableEntryAnimation: !0,
				isSticky: !0,
				bottomBorder: u || !c && !f,
				contentAfter: t.jsx(_t, {
					isComplete: l,
					duration: a,
					timestamp: s?.timestamp
				}),
				contentBefore: t.jsx("button", {
					className: "text-token-text-tertiary",
					onClick: () => g(),
					children: t.jsx(Qt, {
						className: N("icon transition-transform", f && "rotate-90")
					})
				}),
				onClick: () => g(),
				children: [t.jsx(Ce, {
					isComplete: l,
					message: Te.run,
					statusLogs: d
				}), !f && n && t.jsx(Ue, {
					isPreview: !0,
					isHintResolved: r,
					log: n
				})]
			}), f && e]
		})
	},
	bn = ({
		runMessages: e,
		onClickFix: s,
		onClickLineNumber: n,
		hints: r,
		isStale: a,
		isLast: l,
		includeContentBefore: c = !1
	}) => {
		const [d, f] = o.useState(!1), i = e.filter(p => p.type === C.ENVIRONMENT_STATUS), u = e.filter(yt), m = Ie(e), h = m?.type === C.RUN_COMPLETE, g = h ? m.duration : null, x = u[0];
		if (h) {
			if (u.length === 0) return t.jsx(xe, {
				isHintOpen: d,
				bottomBorder: !0,
				contentBefore: c,
				contentAfter: t.jsx(_t, {
					isComplete: h,
					duration: g,
					timestamp: x?.timestamp
				}),
				children: t.jsx(Ce, {
					isComplete: h,
					message: Te.success,
					statusLogs: i
				})
			});
			if (u.length === 1 && x?.type === C.ERROR) {
				const p = r.get(x.id);
				return t.jsxs(xe, {
					hasHint: !!p,
					isHintOpen: d,
					bottomBorder: !0,
					contentBefore: (c || !!p) && t.jsx(jt, {
						hint: p,
						isOpen: d,
						onOpenChange: f,
						onClickFix: w => s?.(w, x.id, x.error)
					}),
					contentAfter: t.jsx(Pe, {
						log: x,
						isDisabled: a,
						onClick: n
					}),
					onClick: p && p.status !== se.RESOLVED && (() => f(!0)),
					children: [t.jsx(Ce, {
						isComplete: h,
						message: Te.run,
						statusLogs: i
					}), t.jsx(Rt, {
						isResolved: p?.status === se.RESOLVED,
						...x
					})]
				})
			} else if (u.length === 1 && x && !bt(u[0])) return t.jsxs(xe, {
				bottomBorder: !0,
				contentBefore: c,
				contentAfter: t.jsx(Pe, {
					log: x,
					isDisabled: a,
					onClick: n
				}),
				children: [t.jsx(Ce, {
					isComplete: h,
					message: Te.run,
					statusLogs: i
				}), t.jsx(Ue, {
					log: x
				})]
			})
		}
		const b = Ie(u.filter(p => p.type !== C.RUN_COMPLETE)),
			y = (b && r.get(b.id))?.status === se.RESOLVED;
		return t.jsx(yn, {
			statusLogs: i,
			firstLog: x ?? null,
			lastLog: b ?? null,
			duration: g,
			isComplete: h,
			isHintResolved: y,
			isLast: l,
			children: t.jsx("ol", {
				children: u.map(p => t.jsx(pn, {
					log: p,
					isStale: a,
					onClickLineNumber: n,
					onClickFix: s,
					hint: r.get(p.id)
				}, p.id))
			})
		})
	},
	Te = je({
		success: {
			id: "laZI5H",
			defaultMessage: "Run successfully"
		},
		run: {
			id: "o7dgBT",
			defaultMessage: "Run"
		}
	}),
	wn = `You're a professional developer highly skilled in debugging. The user ran the textdoc's code, and an error was thrown.
Please think carefully about how to fix the error`,
	jn = (e, s, n) => {
		const r = gt(e, n);
		return `
${wn}, and then rewrite the textdoc to fix it.

- NEVER change existing test cases unless they're clearly wrong.
- ALWAYS add more test cases if there aren't any yet.
- ALWAYS ask the user what the expected behavior is in the chat if the code is not clear.

${s?`# Hint

${s}

`:""}
# Error

${r}`.trim()
	},
	En = ({
		codeRunMessages: e,
		scrollRef: s,
		onClose: n,
		onClickLineNumber: r,
		onClickFix: a,
		title: l,
		headerActions: c,
		lastRunId: d,
		hints: f
	}) => {
		const i = f.size > 0,
			u = o.useMemo(() => Object.entries(js(e, "runId")), [e]),
			m = u.some(([, h]) => {
				const g = h.filter(yt);
				return g.length > 1 || g.length === 1 && bt(g[0])
			});
		return t.jsxs(t.Fragment, {
			children: [t.jsx(rn, {
				title: l,
				actions: c,
				onClose: n,
				showBorder: e.length > 0
			}), t.jsx("div", {
				ref: s,
				className: "bg-token-main-surface-primary flex flex-1 flex-col-reverse overflow-auto",
				children: t.jsx("ol", {
					className: "flex flex-1 flex-col justify-start pb-4",
					children: t.jsx(we, {
						children: u.map(([h, g], x) => t.jsx(bn, {
							runMessages: g,
							includeContentBefore: m || i,
							onClickFix: a,
							onClickLineNumber: r,
							hints: f,
							isStale: h !== d,
							isLast: x === u.length - 1
						}, h))
					})
				})
			})]
		})
	},
	vn = ({
		sandboxRef: e,
		textdocContent: s,
		textdocTitle: n,
		textdocId: r,
		isOpen: a,
		isTextdocAttachedPending: l,
		headerActions: c = [],
		highlightLine: d,
		createTextdocTurn: f,
		onOpenChange: i
	}, u) => {
		const [m, h] = o.useState(!1), [g, x] = o.useState(!1), [b, E] = o.useState([]), [y, p] = o.useState(0), [w, M] = o.useState(null), [L, R] = o.useState(null), [D, A] = o.useState(() => new Map), [q, z] = o.useState(320), K = o.useRef(null), U = le();
		o.useEffect(() => R(null), [s]);
		const $ = b.filter(v => [C.LOG, C.ERROR, C.OUTPUT].includes(v.type)).length;
		o.useEffect(() => {
			a && p($)
		}, [a]);
		const k = o.useMemo(() => {
				for (let v = b.length - 1; v >= 0; v--) {
					const j = b[v];
					if (j.runId !== L) return null;
					if (j.type === C.ERROR) return j
				}
				return null
			}, [b, L]),
			_ = (v, j, S) => {
				const P = D.get(j);
				if (P) {
					const {
						id: O,
						content: J
					} = P;
					A(F => {
						const H = new Map(F);
						return H.set(O, {
							id: O,
							content: J,
							status: se.RESOLVED
						}), H
					})
				}
				M(j), f({
					sourceEvent: v,
					action: ce.EDIT,
					userMessageType: W.CONSOLE,
					content: jn(s, P?.content ?? null, S)
				})
			},
			ne = async (v, j) => {
				if (!l) {
					A(S => {
						const P = new Map(S);
						return P.set(v, {
							id: v,
							status: se.LOADING,
							content: ""
						}), P
					});
					try {
						const S = await ln(r, s, j);
						A(P => {
							const O = new Map(P);
							return O.set(v, {
								id: v,
								status: se.READY,
								content: S
							}), O
						})
					} catch {
						A(P => {
							const O = new Map(P);
							return O.delete(v), O
						})
					}
				}
			}, B = async (v, j) => {
				const S = nn(v, j),
					P = tn(v, j),
					O = sn(v);
				if (!S || !O && !P) return;
				O && i?.(!0), x(!0), E(H => H.map(re => ({
					...re,
					isStale: !0
				})));
				let J = !1;
				const F = ws(e.current).evalAsync({
					code: j,
					language: S
				});
				for await (const H of F) {
					if (H.type === C.RUN_START && requestAnimationFrame(() => {
							K.current?.scrollTo({
								top: 0,
								behavior: "smooth"
							})
						}), H.type === C.ERROR) {
						if (H.line != null) {
							const {
								line: re
							} = H;
							requestAnimationFrame(() => d(re))
						}
						J = !0, ne(H.id, H)
					}
					R(H.runId), E(re => [...re, {
						...H,
						isStale: !1
					}])
				}
				J && i?.(!0), x(!1)
			};
		o.useImperativeHandle(u, () => ({
			runCode: B,
			stopCode: () => e.current?.stop()
		}));
		const G = !a && g,
			X = G && k && k.id !== w,
			te = !X && G && $ > y;
		return t.jsxs(we, {
			children: [m && t.jsx("div", {
				className: "pointer-events-auto absolute inset-0 bg-transparent"
			}, "drag-overlay"), te && t.jsx(I.button, {
				initial: {
					scale: .95,
					opacity: 0
				},
				exit: {
					scale: .95,
					opacity: 0
				},
				animate: {
					scale: 1,
					opacity: 1
				},
				transition: {
					type: "spring",
					bounce: .12,
					duration: .3
				},
				className: "bg-token-main-surface-primary hover:bg-token-main-surface-secondary absolute end-2 bottom-2 flex items-center gap-2 rounded-full px-3 py-1.5 shadow-lg",
				onClick: () => i?.(!0),
				children: t.jsxs("span", {
					className: "text-token-text-secondary flex items-center gap-1 text-sm",
					children: [t.jsx(es, {
						className: "icon-sm"
					}), t.jsx(T, {
						id: "etzFTa",
						defaultMessage: "{numLogs, plural, one {{numLogs} message} other {{numLogs} messages}}",
						values: {
							numLogs: $
						}
					})]
				})
			}, "view-console"), X && t.jsx(on, {
				textdocTitle: n,
				onClickViewConsole: () => i?.(!0),
				onDismiss: () => M(k.id),
				onClickFix: v => {
					_(v, k.id, k.error)
				}
			}, "error-modal"), a && t.jsxs(I.div, {
				initial: {
					translateY: "100%",
					opacity: 0
				},
				animate: {
					translateY: "0%",
					opacity: 1
				},
				exit: {
					translateY: "100%",
					opacity: 0
				},
				transition: {
					type: "spring",
					bounce: 0,
					duration: .48
				},
				className: "border-token-border-default relative z-10 w-full border-t shadow-[0px_0px_32px_rgba(0,0,0,0.08)]",
				children: [t.jsx(an, {
					onDragEnd: () => h(!1),
					onDrag: ({
						delta: {
							y: v
						}
					}) => {
						h(!0), z(j => j - v)
					}
				}), t.jsx("div", {
					className: "flex flex-col",
					style: {
						height: q
					},
					children: t.jsx(En, {
						scrollRef: K,
						codeRunMessages: b,
						onClose: () => i?.(!1),
						onClickLineNumber: d,
						onClickFix: _,
						title: U.formatMessage({
							id: "P9VJDk",
							defaultMessage: "Console"
						}),
						headerActions: [...c, {
							tooltip: U.formatMessage({
								id: "gAICYK",
								defaultMessage: "Clear console"
							}),
							icon: ts,
							onClick: () => {
								p(0), E([]), A(new Map)
							}
						}],
						lastRunId: L,
						hints: D
					})
				})]
			}, "console")]
		})
	},
	mr = o.forwardRef(vn),
	Sn = e => o.createElement("svg", {
		width: 20,
		height: 20,
		viewBox: "0 0 20 20",
		fill: "currentColor",
		xmlns: "http://www.w3.org/2000/svg",
		...e
	}, o.createElement("path", {
		fillRule: "evenodd",
		clipRule: "evenodd",
		d: "M10 2.08496C14.3713 2.08496 17.915 5.62867 17.915 10C17.915 14.3713 14.3713 17.915 10 17.915C5.62867 17.915 2.08496 14.3713 2.08496 10C2.08496 5.62867 5.62867 2.08496 10 2.08496ZM9.22461 7.13086C8.68075 6.78163 7.96613 7.17202 7.96582 7.81836V12.1816C7.96613 12.828 8.68075 13.2184 9.22461 12.8691L12.6182 10.6875C13.1184 10.3657 13.1184 9.6343 12.6182 9.3125L9.22461 7.13086Z"
	}));

function pr({
	isDisabled: e = !1,
	isCodePreviewable: s = !1,
	isCodeRunning: n,
	disabledTooltip: r,
	clientThreadId: a,
	textdocType: l,
	onClick: c
}) {
	const [d, f] = o.useState(n), i = ss(We.hasSeenCanvasCodeExecutionNux), [{
		width: u
	}, m] = ct();
	o.useEffect(() => {
		let p = null;
		return !n || s ? f(n) : (p = setTimeout(() => {
			f(n)
		}, 200), () => clearTimeout(p))
	}, [n, s]);
	const h = () => ({
			conversation_id: a ? vs(a) : void 0
		}),
		g = () => {
			Es.logEventWithStatsig("Canvas Run Code Button Clicked", "chatgpt_canvas_run_code_button_clicked", h()), setTimeout(() => c?.())
		},
		x = t.jsx(I.button, {
			disabled: e || n && !d,
			onClick: g,
			className: N("btn rounded-full border transition-colors", d ? N($s, "border-transparent") : "border-token-border-default hover:bg-token-surface-hover bg-transparent"),
			animate: {
				width: u ?? 0
			},
			initial: {
				width: u ?? 0
			},
			transition: {
				type: "spring",
				bounce: .24,
				duration: .4
			},
			children: t.jsx("div", {
				ref: m,
				children: d ? t.jsxs(I.div, {
					className: "flex items-center gap-2 px-3 sm:px-4",
					initial: {
						opacity: 0
					},
					animate: {
						opacity: 1
					},
					exit: {
						opacity: 0
					},
					transition: {
						duration: .3
					},
					children: [t.jsx(Hs, {
						className: "icon"
					}), t.jsx("span", {
						className: "hidden sm:inline",
						children: t.jsx(T, {
							...me.stopCode
						})
					})]
				}) : t.jsxs(I.div, {
					className: "flex items-center gap-2 px-3 sm:px-4",
					initial: {
						opacity: 0
					},
					animate: {
						opacity: 1
					},
					exit: {
						opacity: 0
					},
					transition: {
						duration: .3
					},
					children: [t.jsx(Sn, {
						className: "icon"
					}), t.jsx("span", {
						className: "hidden sm:inline",
						children: t.jsx(T, {
							...s ? me.previewCode : me.runCode
						})
					})]
				})
			})
		}),
		b = !i.isLoading && i.eligible,
		E = e && r ? r : n ? null : t.jsx(T, {
			...s ? me.previewCodeTooltip : me.runCodeTooltip
		}),
		y = o.useMemo(() => {
			if (!l) return "canvas";
			switch (l) {
				case V.CODE_JAVASCRIPT:
					return "JavaScript";
				case V.CODE_TYPESCRIPT:
					return "TypeScript";
				case V.CODE_HTML:
					return "HTML";
				case V.CODE_PYTHON:
					return "Python";
				case V.CODE_REACT:
					return "React"
			}
			return dt(l) ?? "canvas"
		}, [l]);
	return b ? t.jsx(ns, {
		announcementKey: We.hasSeenCanvasCodeExecutionNux,
		show: !0,
		side: "bottom",
		align: "end",
		theme: "bright",
		dismissOnOutsideClick: !0,
		badge: "new",
		title: s ? t.jsx(T, {
			id: "O8VBVO",
			defaultMessage: "Preview your output"
		}) : t.jsx(T, {
			id: "2sN/zT",
			defaultMessage: "Run {language}",
			values: {
				language: y
			}
		}),
		description: s ? t.jsx(T, {
			id: "CMJOVI",
			defaultMessage: "Run your code to see how it looks and interact with the output."
		}) : t.jsx(T, {
			id: "ew1tTJ",
			defaultMessage: "See your output and get help debugging without leaving the canvas."
		}),
		onDismiss: i.markAsViewed,
		sideOffset: 0,
		children: x
	}) : E ? t.jsx(Ee, {
		label: E,
		children: x
	}) : x
}
const me = je({
		previewCode: {
			id: "a08baM",
			defaultMessage: "Preview"
		},
		runCode: {
			id: "O/1aYA",
			defaultMessage: "Run"
		},
		stopCode: {
			id: "nCwG4+",
			defaultMessage: "Stop"
		},
		runCodeTooltip: {
			id: "UeNB/S",
			defaultMessage: "See output and debug"
		},
		previewCodeTooltip: {
			id: "XLZZHl",
			defaultMessage: "Preview your output"
		}
	}),
	Nn = /\s/,
	Cn = 30;

function Je(e, s) {
	const n = e.indexOf(s);
	return n === -1 ? !1 : e.indexOf(s, n + s.length) === -1
}

function ae(e, s) {
	return Nn.test(e[s])
}

function Ze(e, s, n = !1) {
	if (s === 0 || n && ae(e, s - 1)) return s;
	for (; s > 0 && ae(e, s - 1);) s--;
	for (; s > 0 && !ae(e, s - 1);) s--;
	return ae(e, s) && s++, s
}

function Qe(e, s, n = !1) {
	if (s === e.length || n && ae(e, s)) return s;
	for (; s < e.length && ae(e, s);) s++;
	for (; s < e.length && !ae(e, s);) s++;
	return ae(e, s - 1) && s--, s
}

function Tn(e, s, n = !0, r = Cn) {
	if (e.start < 0 || e.end > s.length || e.start > e.end) throw new Error("Invalid commentSourceRange provided.");
	const a = s.substring(e.start, e.end);
	let l = e.start,
		c = e.end;
	n && (l = Ze(s, l, !0), c = Qe(s, c, !0));
	let d = s.substring(l, e.start),
		f = s.substring(e.end, c),
		i = `${d}${a}${f}`;
	if (Je(s, i) && (r == null || i.length >= r)) return {
		before: d,
		after: f,
		allSurrounding: i
	};
	let u = l,
		m = c,
		h = !0;
	for (; h && (r == null || i.length < r);) {
		let g = !1;
		const x = u > 0 ? Ze(s, u) : u;
		x < u && (u = x, g = !0);
		const b = m < s.length ? Qe(s, m) : m;
		if (b > m && (m = b, g = !0), g) {
			const E = s.substring(u, e.start),
				y = s.substring(e.end, m),
				p = `${E}${a}${y}`;
			if (Je(s, p) && (r == null || p.length >= r)) return {
				before: E,
				after: y,
				allSurrounding: p
			};
			d = E, f = y, i = p
		} else h = !1
	}
	return {
		before: d,
		after: f,
		allSurrounding: i
	}
}
const ge = "# Context",
	ye = "# Instructions";

function be(e, s, n) {
	if (s == null || n == null) return `The user is referring to the entire text of "${e}".`;
	const r = `
## Selected Text
The user has selected this text in "${e}" in particular:
${s}
`.trim();
	return n.allSurrounding === s ? r : `
${r}

## Surrounding Context
Here is the surrounding context:
${n.allSurrounding}
`.trim()
}

function Mt(e, s) {
	return e == null || s == null ? "entire document" : e === s.allSurrounding ? "selected text" : "surrounding context"
}

function At(e) {
	return `For the update pattern, create a regex which exactly matches the ${e}. Edit just this string in order to fullfill the user's request. NEVER rewrite the entire document. Instead, ALWAYS edit ONLY the ${e}. The only exception to this rule is if the ${e} includes markdown lists or tables. In that case, fully rewrite the document using ".*" as the regex update pattern.`.trim()
}

function kn(e, s, n, r) {
	if (!nt(s) && n && r) {
		const a = Mt(n, r);
		return `
${ge}
The user requests that you directly edit the document.

${be(e,n,r)}

${ye}
Use the update_textdoc tool to make this edit. ${At(a)}`.trim()
	}
	return `
${ge}
The user requests that you directly edit the document.

${be(e,n,r)}

${ye}
Use the update_textdoc tool to make this edit. You MUST fully rewrite the entire document by using ".*" as the update regex pattern.`.trim()
}

function Rn(e, s, n) {
	return `
${ge}
The user requests that you add comments about some text.

${be(e,s,n)}

${ye}
Do not respond to the user's question directly, just leave comments.`.trim()
}

function _n(e, s) {
	return nt(e) ? s === "entire document" ? ` If you choose to update the ${s}, you MUST fully rewrite the ${s} by using ".*" as the update regex pattern.` : ` If you choose to update the ${s}, you MUST fully rewrite the entire document by using ".*" as the update regex pattern. When you do so, ONLY modify the ${s} and rewrite other sections exactly as is, except for parts that must change based on this update` : s === "entire document" ? "" : ` If you choose to update the ${s}, follow these instructions: ${At(s)}`
}

function Mn(e, s, n, r) {
	const a = Mt(n, r),
		l = _n(s, a);
	return `
${ge}
${be(e,n,r)}

${ye}
The user would like you perform one of the following actions:
- Update the ${a} via the \`update_textdoc\` tool.${l}
- Explain the selected text via chat, or answer a general question about the selected text (no tool call required).
- Comment on the ${a} with feedback via the \`comment_textdoc\` tool. This should only be used if the user very explicitly asks for feedback, critique, or comments.

Based on the user's request, choose the appropriate action.
`.trim()
}

function An(e, s, n) {
	return `
${ge}
${be(e,s,n)}

${ye}
The user would like you to create a new textdoc.
`.trim()
}

function On(e, s, n, r = null, a = null) {
	switch (n) {
		case ce.ASK:
			return Mn(e, s, r, a);
		case ce.CREATE_TEXTDOC:
			return An(e, r, a);
		case ce.EDIT:
			return kn(e, s, r, a);
		case ce.COMMENT:
			return Rn(e, r, a)
	}
}

function In(e) {
	switch (e) {
		case W.ACCELERATOR:
		case W.CONSOLE:
		case W.ACCEPT_COMMENT:
		case W.HIVE_SPEAKER_EDIT:
			return !0;
		case W.ASK_CHATGPT:
		case W.FULL_SCREEN_SUBMIT:
			return !1
	}
}

function Ln(e, s) {
	switch (s) {
		case W.ASK_CHATGPT:
		case W.ACCEPT_COMMENT:
		case W.FULL_SCREEN_SUBMIT:
			return e.formatMessage(Pn.askChatGPT);
		case W.ACCELERATOR:
		case W.CONSOLE:
		case W.HIVE_SPEAKER_EDIT:
			return
	}
}
const Dn = (e, s) => {
		const n = le(),
			r = rs(e),
			a = Us(e),
			l = Ss();
		return o.useCallback(async ({
			content: c,
			sourceRange: d,
			action: f,
			userMessageType: i,
			acceleratorMetadata: u,
			selectionMetadata: m,
			sourceEvent: h
		}) => {
			if (s?.versionInt == null || l) return;
			const {
				textdocId: g,
				type: x,
				versionInt: b,
				content: E
			} = s;
			let y, p = null;
			d && d.start !== d.end && (y = E.slice(d.start, d.end), p = Tn(d, E));
			const w = On(g, x, f, y, p),
				L = Ns(w, {
					exclude_after_next_user_message: !0
				});
			a({
				sourceEvent: h,
				promptMessage: Cs(c, {
					canvas: {
						textdoc_id: g,
						textdoc_type: x,
						version: b,
						textdoc_content_length: E.length,
						user_message_type: i,
						accelerator_metadata: u,
						selection_metadata: m
					},
					is_visually_hidden_from_conversation: In(i),
					targeted_reply: y,
					targeted_reply_label: Ln(n, i),
					open_in_canvas_view: {
						type: "canvas_textdoc",
						id: g
					}
				}),
				completionMetadata: r ? {
					conversationMode: r
				} : void 0,
				appendMessages: [L]
			})
		}, [s, l, a, r, n])
	},
	Pn = je({
		askChatGPT: {
			id: "h5ANdM",
			defaultMessage: "Asked ChatGPT"
		}
	}),
	Bn = (e, s, n = 1) => {
		$t(e.scrollTop, s, {
			duration: n,
			ease: "easeInOut",
			onUpdate: r => {
				e.scrollTop = r
			}
		})
	},
	Ot = Y.div`flex w-full grow flex-col gap-1 rounded-xl p-2 pe-5 text-sm`,
	Fn = Y.input`ms-[-2px] w-auto rounded-none border-none bg-[#E5F3FF] p-0 px-0.5 text-sm font-semibold outline-none focus:outline-none`,
	$n = Y(I.span)`start border-token-text-tertiary absolute -bottom-0.5 w-full origin-left border-b border-solid`,
	Hn = Y(I.span)`start border-token-text-tertiary absolute -bottom-0.5 w-full border-b border-dashed`,
	Ne = Y.div`w-full loading-results-shimmer bg-token-bg-secondary h-2 rounded-full`,
	Un = () => t.jsxs(Ot, {
		className: "gap-2",
		children: [" ", t.jsx(Ne, {
			className: "w-[48px]"
		}), " ", t.jsx(Ne, {}), " ", t.jsx(Ne, {}), " ", t.jsx(Ne, {
			className: "w-1/2"
		})]
	}),
	Wn = {
		initial: {
			scaleX: 0,
			opacity: 1
		},
		animate: {
			scaleX: 1,
			opacity: 0,
			transition: {
				scaleX: {
					duration: .85,
					ease: [.65, 0, .35, 1]
				},
				opacity: {
					delay: .85,
					duration: .1
				}
			}
		}
	},
	qn = {
		initial: {
			opacity: 0
		},
		animate: {
			opacity: 1,
			transition: {
				delay: .85,
				duration: .1
			}
		}
	};
Y.div`ms-2 rounded-full px-2 py-0.5 text-xs font-medium`;
const It = ({
		speakerId: e,
		content: s,
		range: n,
		filterDecision: r,
		isEditing: a,
		isSaving: l,
		containerRef: c,
		measuredTextContainerRef: d,
		isEditingEnabled: f
	}) => {
		const i = o.useRef(null),
			{
				setSpeakers: u,
				setEditingSpeaker: m,
				hoveringSpeakerId: h,
				setHoveringSpeakerId: g,
				speakers: x,
				editingSpeaker: b,
				enableDebugger: E
			} = ke.getState(),
			y = ke(_ => _.currentTime),
			p = n.max == null ? y === n.min : y >= n.min && y <= n.max;
		o.useEffect(() => {
			if (p && i.current && c.current) {
				const _ = c.current,
					ne = i.current,
					B = _.getBoundingClientRect().top,
					X = ne.getBoundingClientRect().top - B + _.scrollTop - 20;
				Bn(_, X, .3)
			}
		}, [n.min, n.max, p, c]);
		const w = x.get(e),
			M = !!w?.storedName && w.storedName !== w?.placeholderName || (w?.isEdited ?? !1),
			L = w?.name ?? w?.storedName ?? w?.placeholderName ?? "Unidentified Speaker",
			R = o.useRef(null),
			D = e === b?.id,
			A = e === h,
			[q, z] = o.useState(!1),
			[K, U] = o.useState(!1);
		o.useEffect(() => {
			R.current && (!D || !K || (R.current?.focus(), M && (R.current.value = L)))
		}, [M, D, K, L]), Ts(() => {
			if (d?.current && R.current) {
				const _ = d.current.offsetWidth;
				R.current.style.width = `${_}px`
			}
		}, [b?.name]);
		const $ = o.useCallback(() => {
				if (!b || !w) return;
				m(null), U(!1), z(!1), g(null);
				const _ = x.set(e, {
					...w,
					name: b.name ? b.name : w.placeholderName,
					isEdited: !!b.name
				});
				u(_)
			}, [b, w, m, g, x, e, u]),
			k = !a || l;
		return t.jsxs(Ot, {
			ref: i,
			className: N(p && "animate-[hive-log-fadeout_0.3s_1.5s_forwards] bg-blue-500/10", !1, !1),
			children: [!1, t.jsxs("div", {
				className: "mb-[1px] flex w-full items-center justify-between",
				children: [f && (D ? t.jsx(Fn, {
					ref: R,
					disabled: !K,
					onBlur: $,
					className: N(!D && "hidden w-0"),
					placeholder: w?.isEdited ? void 0 : w?.placeholderName,
					value: b?.name,
					onKeyDown: _ => {
						_.key === "Enter" && $()
					},
					onChange: _ => m({
						id: e,
						name: _.target.value
					})
				}) : t.jsxs("div", {
					className: "flex items-center gap-1",
					children: [t.jsxs("div", {
						onClick: () => {
							k || (m({
								id: e,
								name: M ? L : ""
							}), U(!0))
						},
						onMouseEnter: () => {
							k || (g(e), z(!0))
						},
						onMouseLeave: () => {
							k || (g(null), z(!1))
						},
						className: N("relative flex font-semibold transition-colors", {
							"text-blue-400!": A && !k
						}, {
							"cursor-pointer": !k
						}, {
							"text-token-text-tertiary": !k && !M
						}),
						children: [L, !k && !M && t.jsxs(t.Fragment, {
							children: [t.jsx($n, {
								...Wn
							}), t.jsx(Hn, {
								...qn,
								className: N(A && !k && "border-blue-400!")
							})]
						})]
					}), q && !k && t.jsx(rt, {
						className: "h-4 w-4 text-blue-400"
					}), !1]
				})), t.jsx("div", {
					className: "text-xs text-[#5D5D5D]",
					children: Ws(n.min)
				})]
			}), t.jsx("div", {
				className: "flex",
				children: s
			})]
		})
	},
	zn = e => Be({
		queryKey: ["sharedHiveLog", e],
		queryFn: () => ue.safeGet("/hive/textdoc/shared/{shared_textdoc_id}/transcript", {
			parameters: {
				path: {
					shared_textdoc_id: e
				}
			}
		}),
		select: ut
	}),
	Gn = e => Be({
		queryKey: ["hiveLog", e],
		queryFn: () => ue.safeGet("/hive/{hive_id}/transcript", {
			parameters: {
				path: {
					hive_id: e
				}
			}
		}),
		enabled: !!e,
		select: ut
	}),
	Yn = () => Be({
		queryKey: ["hiveLogPrompts"],
		queryFn: () => ue.safeGet("/hive/prompts"),
		enabled: !0
	}),
	Kn = (e, s) => ue.safePost("/hive/{hive_id}/speakers", {
		parameters: {
			path: {
				hive_id: e
			}
		},
		requestBody: {
			speakers: s
		}
	}),
	Xn = Y.div`invisible absolute start-0 top-0 rounded-md border px-0.5 text-sm font-semibold whitespace-pre`,
	Vn = (e, s) => !s || !e ? "" : s.isEdited || e.name && e.name !== s.placeholderName ? e.name : s.placeholderName,
	Lt = () => t.jsx(_s, {
		children: t.jsx(T, {
			...de.researchPreview
		})
	}),
	Jn = Y.div`flex h-full w-full max-w-[360px] min-w-[240px] flex-col border-l border-gray-200`,
	Zn = Y.div`flex w-full max-w-[360px] min-w-[240px] flex-col border-l border-gray-200`,
	Qn = Y.div`bg-token-bg-primary mt-[0.5px] flex h-18 w-full items-center justify-between border-b-[0.5px] border-gray-200 p-4`,
	Dt = Y.div`flex h-full w-full flex-col gap-2 overflow-y-auto p-2`,
	et = Y(I.div)`flex items-center gap-2`,
	tt = {
		initial: {
			opacity: 0,
			y: -4
		},
		animate: {
			opacity: 1,
			y: 0,
			transition: {
				duration: .2
			}
		},
		exit: {
			opacity: 0,
			y: -4,
			transition: {
				duration: .2
			}
		}
	},
	xr = "ts",
	hr = ({
		sharedTextDocId: e
	}) => {
		const s = zn(e),
			n = o.useRef(null),
			r = ks(),
			{
				selectedFilters: a,
				isOpen: l,
				currentTime: c,
				closeSidebar: d
			} = ke(),
			f = o.useMemo(() => s.data?.filter(({
				filterDecision: m
			}) => !m || a?.includes(m)), [s.data, a]);
		if (s.isError) return null;
		const i = t.jsxs("div", {
				className: "text-token-text-secondary flex items-center gap-1.5 px-2 py-2 text-base font-medium md:px-0",
				children: [t.jsx(T, {
					...de.transcript
				}), t.jsx(Lt, {})]
			}),
			u = t.jsxs(t.Fragment, {
				children: [s.isLoading && Array.from({
					length: 16
				}).map((m, h) => t.jsx(Un, {}, `loading-${h}`)), f?.map(m => t.jsx(It, {
					isEditingEnabled: !1,
					containerRef: n,
					...m
				}, Pt(m)))]
			});
		return !l || !c ? null : r ? t.jsxs(Zn, {
			children: [t.jsxs(Qn, {
				children: [i, t.jsx(Rs, {
					onClick: d
				})]
			}), t.jsx(Dt, {
				ref: n,
				children: u
			})]
		}) : t.jsx(at, {
			contentRef: n,
			testId: "modal-shared-canvas-transcript-modal",
			isOpen: l,
			title: i,
			contentClassName: "overflow-y-auto gap-2 p-2 flex flex-col",
			showCloseButton: !0,
			onClose: d,
			children: u
		})
	},
	gr = ({
		hiveId: e,
		clientThreadId: s,
		ts: n,
		textdocVersion: r
	}) => {
		const a = Gn(e),
			l = Yn(),
			c = le(),
			[d, f] = o.useState(!1),
			i = o.useRef(null),
			u = Ms(),
			m = As(u, "2986567482"),
			{
				isOpen: h,
				closeSidebar: g,
				openSidebar: x,
				setCurrentTime: b,
				speakers: E,
				setSpeakers: y,
				editingSpeaker: p,
				enableDebugger: w,
				setEnableDebugger: M,
				selectedFilters: L,
				setSelectedFilters: R
			} = ke();
		o.useEffect(() => {
			n !== void 0 && (x(), b(n))
		}, [n, x, b]);
		const D = o.useRef(null),
			[A, q] = o.useState(!1),
			z = Dn(s, r);
		if (a.isLoading || l.isLoading || a.isError || l.isError || !a.data || !l.data) return null;
		const K = p ? E.get(p.id) : null,
			U = Array.from(E.values()).some(({
				isEdited: B
			}) => B),
			$ = () => {
				const B = new Map(Array.from(E.entries()).map(([G, X]) => [G, {
					...X,
					name: void 0,
					isEdited: !1
				}]));
				y(B), f(!1)
			},
			k = B => {
				if (!l.data.speaker_edits) return;
				const G = l.data.speaker_edits.replace("{speakers}", JSON.stringify(Array.from(E.entries())));
				return z({
					sourceEvent: B,
					action: ce.EDIT,
					content: G,
					userMessageType: W.HIVE_SPEAKER_EDIT,
					selectionMetadata: void 0
				})
			},
			_ = async B => {
				if (U) {
					q(!0);
					try {
						const G = [];
						Array.from(E.entries()).forEach(([v, j]) => {
							!j.isEdited || !j.name || G.push({
								id: v,
								updated_name: j.name
							})
						});
						const X = await Kn(e, G);
						if (!X) throw new Error("Failed to update hive content");
						const te = new Map(E);
						for (const v of X.updated_speakers) {
							if (!te.has(v.id)) continue;
							const j = te.get(v.id);
							j && te.set(v.id, {
								...j,
								storedName: v.updated_name,
								isEdited: !1
							})
						}
						await k(B), y(te), f(!1)
					} catch {} finally {
						q(!1)
					}
				}
			}, ne = a.data.filter(({
				filterDecision: B
			}) => !B || L?.includes(B));
		return t.jsxs(Jn, {
			className: N(h ? "visible" : "invisible hidden"),
			children: [t.jsxs("div", {
				className: "flex h-14 w-full items-center justify-between border-b border-gray-200 p-4",
				children: [t.jsxs("div", {
					className: "text-token-text-secondary group/debug flex items-center gap-1.5 py-2 text-base font-medium",
					children: [t.jsx(T, {
						...de[d ? "edit" : "transcript"]
					}), t.jsx(Lt, {}), !1]
				}), t.jsx("div", {
					className: "flex h-10 items-center gap-2",
					children: t.jsx(we, {
						mode: "wait",
						children: d ? t.jsxs(et, {
							...tt,
							children: [t.jsx(oe, {
								onClick: $,
								color: "secondary",
								disabled: A,
								children: t.jsx(T, {
									...de.cancelButton
								})
							}), t.jsx(oe, {
								color: "primary",
								onClick: _,
								disabled: !U,
								loading: A,
								children: t.jsx(T, {
									...de.saveButton
								})
							})]
						}, "edit-buttons") : t.jsxs(et, {
							...tt,
							children: [m && t.jsx(Ee, {
								className: "h-10",
								label: c.formatMessage(de.editButtonTooltip),
								children: t.jsx(qe, {
									icon: rt,
									onClick: () => f(!0)
								})
							}), t.jsx(qe, {
								icon: $e,
								onClick: () => g()
							})]
						}, "non-edit-buttons")
					})
				})]
			}), !1, t.jsxs(Dt, {
				ref: i,
				children: [m && p && t.jsx(Xn, {
					ref: D,
					children: Vn(p, K)
				}), ne.map(B => t.jsx(It, {
					isEditingEnabled: m,
					measuredTextContainerRef: D,
					containerRef: i,
					isEditing: d,
					isSaving: A,
					...B
				}, Pt(B)))]
			})]
		})
	},
	Pt = e => {
		const {
			speakerId: s,
			content: n,
			range: r
		} = e;
		return `${s}-${r.min}-${r.max}-${n.slice(0,2)}`
	},
	de = je({
		researchPreview: {
			id: "HiveLogSidebar.researchPreview",
			defaultMessage: "Research Preview"
		},
		edit: {
			id: "HiveLogSidebar.edit",
			defaultMessage: "Edit"
		},
		transcript: {
			id: "HiveLogSidebar.transcript",
			defaultMessage: "Transcript"
		},
		editButtonTooltip: {
			id: "HiveLogSidebar.editButtonTooltip",
			defaultMessage: "Edit speakers"
		},
		cancelButton: {
			id: "HiveLogSidebar.cancelButton",
			defaultMessage: "Cancel"
		},
		saveButton: {
			id: "HiveLogSidebar.saveButton",
			defaultMessage: "Save"
		}
	});
export {
	fr as C, xr as H, hr as S, pr as T, sn as a, mr as b, gr as c, nn as g, tn as i, Dn as u
};
//# sourceMappingURL=hmqs3pkvyqlgk67i.js.map