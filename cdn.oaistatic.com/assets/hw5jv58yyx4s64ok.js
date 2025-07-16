const __vite__mapDeps = (i, m = __vite__mapDeps, d = (m.f || (m.f = ["assets/k6mdtfh42rerge50.js", "assets/fyeo2h7okrqcf3nz.js", "assets/egb2c0f6p1ew61vt.js", "assets/root-dql6y2cb.css", "assets/mxkjzc9vf3dbqtlt.js", "assets/bomum2mkkc55wkmd.js", "assets/f7j18j5u52u1pnnk.js", "assets/conversation-small-k592qa8k.css", "assets/nqsfh48hfyfa7pp4.js", "assets/ixlu2roce72wluyh.js", "assets/mc4gupq3ornmff88.js", "assets/gayt6avnfip5st7p.js", "assets/f9rv07xfg1rgyv7i.js", "assets/cbrjkkbokuo79ldz.js", "assets/lk4s8c9e8k6949av.js", "assets/euyyz74sa52ztdnb.js", "assets/m29otmaum97sqv1d.js", "assets/jlvrtz9al5nbcxs8.js"]))) => i.map(i => d[i]);
import {
	h8 as O,
	cl as kA,
	ha as de,
	nk as ue,
	P as me,
	d4 as ge,
	ev as he,
	he as fe,
	cP as pe,
	fJ as NA,
	nl as Ce,
	f8 as xA,
	H as rA,
	bn as CA,
	cG as Ee,
	cL as ke,
	b6 as ve,
	f as cA,
	T as GA,
	b9 as vA,
	dT as be,
	B as Be,
	hd as yA,
	hb as Se,
	aw as Me,
	h9 as Ie,
	fF as we,
	q as xe,
	aS as ye,
	c_ as JA,
	nm as Qe,
	cZ as Ve
} from "./egb2c0f6p1ew61vt.js";
import {
	r as o,
	g as Te,
	p as Re,
	k as XA,
	e as _,
	j as r,
	n as D,
	A as z
} from "./fyeo2h7okrqcf3nz.js";
import {
	i9 as lA,
	dx as uA,
	wu as mA,
	wv as QA,
	ww as PA,
	wx as je,
	z as De,
	dw as M,
	ba as Ze,
	bj as Le,
	iw as Oe,
	iv as _e,
	dl as bA,
	ia as Ye,
	wy as Fe,
	i8 as Ne,
	wz as BA,
	wA as SA,
	wB as Ge,
	wC as L,
	d_ as Je
} from "./f7j18j5u52u1pnnk.js";
import {
	a as Xe,
	$ as Pe,
	C as We,
	_ as Q,
	R as Ue,
	b as Y,
	y as qe,
	M as Ke,
	c as F,
	W as He,
	T as sA,
	O as WA,
	N as ze,
	I as $e,
	d as At,
	e as et,
	f as tt,
	Y as ot,
	F as st,
	S as nA,
	h as MA,
	u as UA,
	g as EA,
	i as qA,
	j as nt,
	k as dA,
	A as IA,
	l as X,
	m as it,
	s as at,
	B as KA,
	n as rt,
	o as ct,
	p as lt,
	G as dt,
	q as ut,
	v as mt,
	r as gt,
	t as ht,
	w as VA,
	x as ft,
	z as pt,
	V as Ct,
	D as Et,
	L as kt,
	E as vt,
	H as bt,
	J as Bt,
	K as St
} from "./ixlu2roce72wluyh.js";
import {
	d as TA
} from "./f9rv07xfg1rgyv7i.js";
import {
	S as Mt
} from "./jlvrtz9al5nbcxs8.js";

function It() {
	const A = lA(),
		e = Xe(),
		t = o.useCallback(() => {
			uA.debug("disconnected from room"), mA(A)
		}, [A]),
		s = o.useCallback(i => {
			e.danger("Something went wrong", {
				toastId: "livekit_room_error"
			}), uA.error("an error occurred within the room", i);
			const a = QA(A.getState());
			O.voiceMode.error({
				...a,
				error: i.message
			}), A.setState(c => {
				c.metrics.livekitConnectSuccessTime || (c.metrics.livekitConnectFailTime = new Date)
			}), mA(A)
		}, [e, A]),
		n = o.useCallback(i => {
			e.danger("Something went wrong", {
				toastId: "livekit_room_error",
				loggingTitle: "Encryption error",
				loggingDescription: i.message
			}), uA.error("an encryption error occurred within the room", i);
			const a = QA(A.getState());
			O.voiceMode.error({
				encryptionError: i.message,
				eventSource: "voice-session",
				...a
			}), A.setState(c => {
				c.metrics.livekitConnectSuccessTime || (c.metrics.livekitConnectFailTime = new Date)
			}), mA(A)
		}, [e, A]);
	return {
		onDisconnected: t,
		onError: s,
		onEncryptionError: n
	}
}

function HA(A) {
	var e, t, s = "";
	if (typeof A == "string" || typeof A == "number") s += A;
	else if (typeof A == "object")
		if (Array.isArray(A)) {
			var n = A.length;
			for (e = 0; e < n; e++) A[e] && (t = HA(A[e])) && (s && (s += " "), s += t)
		} else
			for (t in A) A[t] && (s && (s += " "), s += t);
	return s
}

function wt() {
	for (var A, e, t = 0, s = "", n = arguments.length; t < n; t++)(A = arguments[t]) && (e = HA(A)) && (s && (s += " "), s += e);
	return s
}

function xt(...A) {
	return (...e) => {
		for (const t of A)
			if (typeof t == "function") try {
				t(...e)
			} catch (s) {
				console.error(s)
			}
	}
}

function zA(...A) {
	const e = {
		...A[0]
	};
	for (let t = 1; t < A.length; t++) {
		const s = A[t];
		for (const n in s) {
			const i = e[n],
				a = s[n];
			typeof i == "function" && typeof a == "function" && n[0] === "o" && n[1] === "n" && n.charCodeAt(2) >= 65 && n.charCodeAt(2) <= 90 ? e[n] = xt(i, a) : (n === "className" || n === "UNSAFE_className") && typeof i == "string" && typeof a == "string" ? e[n] = wt(i, a) : e[n] = a !== void 0 ? a : i
		}
	}
	return e
}
const yt = {
	connect: !0,
	audio: !1,
	video: !1
};

function Qt(A) {
	const {
		token: e,
		serverUrl: t,
		options: s,
		room: n,
		connectOptions: i,
		connect: a,
		audio: c,
		video: l,
		screen: d,
		onConnected: g,
		onDisconnected: m,
		onError: u,
		onMediaDeviceFailure: h,
		onEncryptionError: v,
		simulateParticipants: C,
		...k
	} = {
		...yt,
		...A
	};
	s && n && Q.warn("when using a manually created room, the options object will be ignored. set the desired options directly when creating the room instead.");
	const [f, b] = o.useState();
	o.useEffect(() => {
		b(n ?? new Ue(s))
	}, [n]);
	const x = o.useMemo(() => {
		const {
			className: B
		} = qe();
		return zA(k, {
			className: B
		})
	}, [k]);
	return o.useEffect(() => {
		if (!f) return;
		const B = () => {
				const S = f.localParticipant;
				Q.debug("trying to publish local tracks"), Promise.all([S.setMicrophoneEnabled(!!c, typeof c != "boolean" ? c : void 0), S.setCameraEnabled(!!l, typeof l != "boolean" ? l : void 0), S.setScreenShareEnabled(!!d, typeof d != "boolean" ? d : void 0)]).catch(R => {
					Q.warn(R), u?.(R)
				})
			},
			p = S => {
				const R = Ke.getFailure(S);
				h?.(R)
			},
			V = S => {
				v?.(S)
			};
		return f.on(Y.SignalConnected, B).on(Y.MediaDevicesError, p).on(Y.EncryptionError, V), () => {
			f.off(Y.SignalConnected, B).off(Y.MediaDevicesError, p).off(Y.EncryptionError, V)
		}
	}, [f, c, l, d, u, v, h]), o.useEffect(() => {
		if (f) {
			if (C) {
				f.simulateParticipants({
					participants: {
						count: C
					},
					publish: {
						audio: !0,
						useRealTracks: !0
					}
				});
				return
			}
			if (!e) {
				Q.debug("no token yet");
				return
			}
			if (!t) {
				Q.warn("no livekit url provided"), u?.(Error("no livekit url provided"));
				return
			}
			a ? (Q.debug("connecting"), f.connect(t, e, i).catch(B => {
				Q.warn(B), u?.(B)
			})) : (Q.debug("disconnecting because connect is false"), f.disconnect())
		}
	}, [a, e, JSON.stringify(i), f, u, t, C]), o.useEffect(() => {
		if (!f) return;
		const B = p => {
			switch (p) {
				case F.Disconnected:
					m && m();
					break;
				case F.Connected:
					g && g();
					break
			}
		};
		return f.on(Y.ConnectionStateChanged, B), () => {
			f.off(Y.ConnectionStateChanged, B)
		}
	}, [e, g, m, f]), o.useEffect(() => {
		if (f) return () => {
			Q.info("disconnecting on onmount"), f.disconnect()
		}
	}, [f]), {
		room: f,
		htmlProps: x
	}
}
const Vt = o.forwardRef(function(A, e) {
	const {
		room: t,
		htmlProps: s
	} = Qt(A);
	return o.createElement("div", {
		ref: e,
		...s
	}, t && o.createElement(Pe.Provider, {
		value: t
	}, o.createElement(We.Provider, {
		value: A.featureFlags
	}, A.children)))
});

function Tt(A) {
	return A !== void 0
}

function Rt(...A) {
	return zA(...A.filter(Tt))
}

function jt(A, e = {}) {
	const [t, s] = o.useState(tt(A)), [n, i] = o.useState(t?.isMuted), [a, c] = o.useState(t?.isSubscribed), [l, d] = o.useState(t?.track), [g, m] = o.useState("landscape"), u = o.useRef(), {
		className: h,
		trackObserver: v
	} = o.useMemo(() => ot(A), [A.participant.sid ?? A.participant.identity, A.source, st(A) && A.publication.trackSid]);
	return o.useEffect(() => {
		const C = v.subscribe(k => {
			Q.debug("update track", k), s(k), i(k?.isMuted), c(k?.isSubscribed), d(k?.track)
		});
		return () => C?.unsubscribe()
	}, [v]), o.useEffect(() => {
		var C, k;
		return l && (u.current && l.detach(u.current), (C = e.element) != null && C.current && !(WA(A.participant) && l?.kind === "audio") && l.attach(e.element.current)), u.current = (k = e.element) == null ? void 0 : k.current, () => {
			u.current && l?.detach(u.current)
		}
	}, [l, e.element]), o.useEffect(() => {
		var C, k;
		if (typeof((C = t?.dimensions) == null ? void 0 : C.width) == "number" && typeof((k = t?.dimensions) == null ? void 0 : k.height) == "number") {
			const f = t.dimensions.width > t.dimensions.height ? "landscape" : "portrait";
			m(f)
		}
	}, [t]), {
		publication: t,
		isMuted: n,
		isSubscribed: a,
		track: l,
		elementProps: Rt(e.props, {
			className: h,
			"data-lk-local-participant": A.participant.isLocal,
			"data-lk-source": t?.source,
			...t?.kind === "video" && {
				"data-lk-orientation": g
			}
		})
	}
}
var Dt = typeof nA == "object" && nA && nA.Object === Object && nA,
	Zt = typeof self == "object" && self && self.Object === Object && self;
Dt || Zt || Function("return this")();
const Lt = o.forwardRef(function({
	trackRef: A,
	onSubscriptionStatusChanged: e,
	volume: t,
	muted: s,
	...n
}, i) {
	const a = $e(A),
		c = o.useRef(null);
	o.useImperativeHandle(i, () => c.current);
	const {
		elementProps: l,
		isSubscribed: d,
		track: g,
		publication: m
	} = jt(a, {
		element: c,
		props: n
	});
	return o.useEffect(() => {
		e?.(!!d)
	}, [d, e]), o.useEffect(() => {
		g === void 0 || t === void 0 || (g instanceof At ? g.setVolume(t) : Q.warn("Volume can only be set on remote audio tracks."))
	}, [t, g]), o.useEffect(() => {
		m === void 0 || s === void 0 || (m instanceof et ? m.setEnabled(!s) : Q.warn("Can only call setEnabled on remote track publications."))
	}, [s, m, g]), o.createElement("audio", {
		ref: c,
		...l
	})
});

function Ot({
	volume: A,
	muted: e
}) {
	const t = He([sA.Source.Microphone, sA.Source.ScreenShareAudio, sA.Source.Unknown], {
		updateOnlyOn: [],
		onlySubscribed: !0
	}).filter(s => !WA(s.participant) && s.publication.kind === sA.Kind.Audio);
	return o.createElement("div", {
		style: {
			display: "none"
		}
	}, t.map(s => o.createElement(Lt, {
		key: ze(s),
		trackRef: s,
		volume: A,
		muted: e
	})))
}
const RA = A => A.length > 0 ? A.reduce((e, t) => e + t, 0) / A.length : null,
	I = A => A?.toISOString() ?? null;

function $A({
	conversationId: A
}) {
	const {
		shouldDelayDisconnect: e,
		delayDisconnect: t,
		immediateDisconnect: s
	} = MA({
		refetchLater: !0
	}), {
		toggleMute: n
	} = PA(), i = kA(A), a = lA(), c = de(), l = ue(), d = je();
	return o.useCallback(async g => {
		O.voiceSessionEndedByUser.click(), a.setState(h => {
			h.metrics.sessionEndTime = new Date
		}), De.setState({
			voiceFeedbackThread: i,
			lastVoiceSessionEndTime: new Date
		});
		const {
			voiceMode: m,
			metrics: u
		} = a.getState();
		me.logEvent("Voice Session End Summary", {
			session_create_time: I(u.sessionCreateTime),
			get_status_sent_time: I(u.getStatusSentTime),
			get_status_success_time: I(u.getStatusSuccessTime),
			get_status_failed_time: I(u.getStatusFailedTime),
			get_token_sent_time: I(u.getTokenSentTime),
			get_token_success_time: I(u.getTokenSuccessTime),
			get_token_failed_time: I(u.getTokenFailedTime),
			conversation_start_success_time: I(u.conversationStartSuccessTime),
			conversation_start_fail_time: I(u.conversationStartFailTime),
			livekit_connect_time: I(u.livekitConnectTime),
			livekit_connect_success_time: I(u.livekitConnectSuccessTime),
			livekit_connect_fail_time: I(u.livekitConnectFailTime),
			session_connected_time: I(u.sessionConnectedTime),
			session_end_time: I(u.sessionEndTime),
			avg_total_latency_ms: RA(u.totalLatencyMs),
			avg_rtt_ms: RA(u.currentRttMs),
			num_of_turns_speaking: u.numSpeaking,
			num_of_turns_thinking: u.numThinking,
			num_of_turns_listening: u.numListening,
			protocol: c,
			voice_session_id: l,
			reason: l.length === 0 ? "aborted" : g,
			data_channel_open_time: I(u.dataChannelOpenTime),
			conversation_latency_ms: u.conversationLatency,
			...TA().length > 0 ? {
				status_prefetch_ineligible_reasons: TA().join(",")
			} : {},
			voice_mode: m,
			get_token: {
				...d
			}
		}), e ? (a.setState(h => {
			h.video = null, h.screenshare = null
		}), await n(), t()) : s()
	}, [t, s, i, e, n, a, c, l, d])
}
var gA, jA;

function _t() {
	return jA || (jA = 1, gA = {
		webm: "data:video/webm;base64,GkXfowEAAAAAAAAfQoaBAUL3gQFC8oEEQvOBCEKChHdlYm1Ch4EEQoWBAhhTgGcBAAAAAAAVkhFNm3RALE27i1OrhBVJqWZTrIHfTbuMU6uEFlSua1OsggEwTbuMU6uEHFO7a1OsghV17AEAAAAAAACkAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAVSalmAQAAAAAAAEUq17GDD0JATYCNTGF2ZjU1LjMzLjEwMFdBjUxhdmY1NS4zMy4xMDBzpJBlrrXf3DCDVB8KcgbMpcr+RImIQJBgAAAAAAAWVK5rAQAAAAAAD++uAQAAAAAAADLXgQFzxYEBnIEAIrWcg3VuZIaFVl9WUDiDgQEj44OEAmJaAOABAAAAAAAABrCBsLqBkK4BAAAAAAAPq9eBAnPFgQKcgQAitZyDdW5khohBX1ZPUkJJU4OBAuEBAAAAAAAAEZ+BArWIQOdwAAAAAABiZIEgY6JPbwIeVgF2b3JiaXMAAAAAAoC7AAAAAAAAgLUBAAAAAAC4AQN2b3JiaXMtAAAAWGlwaC5PcmcgbGliVm9yYmlzIEkgMjAxMDExMDEgKFNjaGF1ZmVudWdnZXQpAQAAABUAAABlbmNvZGVyPUxhdmM1NS41Mi4xMDIBBXZvcmJpcyVCQ1YBAEAAACRzGCpGpXMWhBAaQlAZ4xxCzmvsGUJMEYIcMkxbyyVzkCGkoEKIWyiB0JBVAABAAACHQXgUhIpBCCGEJT1YkoMnPQghhIg5eBSEaUEIIYQQQgghhBBCCCGERTlokoMnQQgdhOMwOAyD5Tj4HIRFOVgQgydB6CCED0K4moOsOQghhCQ1SFCDBjnoHITCLCiKgsQwuBaEBDUojILkMMjUgwtCiJqDSTX4GoRnQXgWhGlBCCGEJEFIkIMGQcgYhEZBWJKDBjm4FITLQagahCo5CB+EIDRkFQCQAACgoiiKoigKEBqyCgDIAAAQQFEUx3EcyZEcybEcCwgNWQUAAAEACAAAoEiKpEiO5EiSJFmSJVmSJVmS5omqLMuyLMuyLMsyEBqyCgBIAABQUQxFcRQHCA1ZBQBkAAAIoDiKpViKpWiK54iOCISGrAIAgAAABAAAEDRDUzxHlETPVFXXtm3btm3btm3btm3btm1blmUZCA1ZBQBAAAAQ0mlmqQaIMAMZBkJDVgEACAAAgBGKMMSA0JBVAABAAACAGEoOogmtOd+c46BZDppKsTkdnEi1eZKbirk555xzzsnmnDHOOeecopxZDJoJrTnnnMSgWQqaCa0555wnsXnQmiqtOeeccc7pYJwRxjnnnCateZCajbU555wFrWmOmkuxOeecSLl5UptLtTnnnHPOOeecc84555zqxekcnBPOOeecqL25lpvQxTnnnE/G6d6cEM4555xzzjnnnHPOOeecIDRkFQAABABAEIaNYdwpCNLnaCBGEWIaMulB9+gwCRqDnELq0ehopJQ6CCWVcVJKJwgNWQUAAAIAQAghhRRSSCGFFFJIIYUUYoghhhhyyimnoIJKKqmooowyyyyzzDLLLLPMOuyssw47DDHEEEMrrcRSU2011lhr7jnnmoO0VlprrbVSSimllFIKQkNWAQAgAAAEQgYZZJBRSCGFFGKIKaeccgoqqIDQkFUAACAAgAAAAABP8hzRER3RER3RER3RER3R8RzPESVREiVREi3TMjXTU0VVdWXXlnVZt31b2IVd933d933d+HVhWJZlWZZlWZZlWZZlWZZlWZYgNGQVAAACAAAghBBCSCGFFFJIKcYYc8w56CSUEAgNWQUAAAIACAAAAHAUR3EcyZEcSbIkS9IkzdIsT/M0TxM9URRF0zRV0RVdUTdtUTZl0zVdUzZdVVZtV5ZtW7Z125dl2/d93/d93/d93/d93/d9XQdCQ1YBABIAADqSIymSIimS4ziOJElAaMgqAEAGAEAAAIriKI7jOJIkSZIlaZJneZaomZrpmZ4qqkBoyCoAABAAQAAAAAAAAIqmeIqpeIqoeI7oiJJomZaoqZoryqbsuq7ruq7ruq7ruq7ruq7ruq7ruq7ruq7ruq7ruq7ruq7ruq4LhIasAgAkAAB0JEdyJEdSJEVSJEdygNCQVQCADACAAAAcwzEkRXIsy9I0T/M0TxM90RM901NFV3SB0JBVAAAgAIAAAAAAAAAMybAUy9EcTRIl1VItVVMt1VJF1VNVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVN0zRNEwgNWQkAkAEAkBBTLS3GmgmLJGLSaqugYwxS7KWxSCpntbfKMYUYtV4ah5RREHupJGOKQcwtpNApJq3WVEKFFKSYYyoVUg5SIDRkhQAQmgHgcBxAsixAsiwAAAAAAAAAkDQN0DwPsDQPAAAAAAAAACRNAyxPAzTPAwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABA0jRA8zxA8zwAAAAAAAAA0DwP8DwR8EQRAAAAAAAAACzPAzTRAzxRBAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABA0jRA8zxA8zwAAAAAAAAAsDwP8EQR0DwRAAAAAAAAACzPAzxRBDzRAwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEAAAEOAAABBgIRQasiIAiBMAcEgSJAmSBM0DSJYFTYOmwTQBkmVB06BpME0AAAAAAAAAAAAAJE2DpkHTIIoASdOgadA0iCIAAAAAAAAAAAAAkqZB06BpEEWApGnQNGgaRBEAAAAAAAAAAAAAzzQhihBFmCbAM02IIkQRpgkAAAAAAAAAAAAAAAAAAAAAAAAAAAAACAAAGHAAAAgwoQwUGrIiAIgTAHA4imUBAIDjOJYFAACO41gWAABYliWKAABgWZooAgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAIAAAYcAAACDChDBQashIAiAIAcCiKZQHHsSzgOJYFJMmyAJYF0DyApgFEEQAIAAAocAAACLBBU2JxgEJDVgIAUQAABsWxLE0TRZKkaZoniiRJ0zxPFGma53meacLzPM80IYqiaJoQRVE0TZimaaoqME1VFQAAUOAAABBgg6bE4gCFhqwEAEICAByKYlma5nmeJ4qmqZokSdM8TxRF0TRNU1VJkqZ5niiKommapqqyLE3zPFEURdNUVVWFpnmeKIqiaaqq6sLzPE8URdE0VdV14XmeJ4qiaJqq6roQRVE0TdNUTVV1XSCKpmmaqqqqrgtETxRNU1Vd13WB54miaaqqq7ouEE3TVFVVdV1ZBpimaaqq68oyQFVV1XVdV5YBqqqqruu6sgxQVdd1XVmWZQCu67qyLMsCAAAOHAAAAoygk4wqi7DRhAsPQKEhKwKAKAAAwBimFFPKMCYhpBAaxiSEFEImJaXSUqogpFJSKRWEVEoqJaOUUmopVRBSKamUCkIqJZVSAADYgQMA2IGFUGjISgAgDwCAMEYpxhhzTiKkFGPOOScRUoox55yTSjHmnHPOSSkZc8w556SUzjnnnHNSSuacc845KaVzzjnnnJRSSuecc05KKSWEzkEnpZTSOeecEwAAVOAAABBgo8jmBCNBhYasBABSAQAMjmNZmuZ5omialiRpmud5niiapiZJmuZ5nieKqsnzPE8URdE0VZXneZ4oiqJpqirXFUXTNE1VVV2yLIqmaZqq6rowTdNUVdd1XZimaaqq67oubFtVVdV1ZRm2raqq6rqyDFzXdWXZloEsu67s2rIAAPAEBwCgAhtWRzgpGgssNGQlAJABAEAYg5BCCCFlEEIKIYSUUggJAAAYcAAACDChDBQashIASAUAAIyx1lprrbXWQGettdZaa62AzFprrbXWWmuttdZaa6211lJrrbXWWmuttdZaa6211lprrbXWWmuttdZaa6211lprrbXWWmuttdZaa6211lprrbXWWmstpZRSSimllFJKKaWUUkoppZRSSgUA+lU4APg/2LA6wknRWGChISsBgHAAAMAYpRhzDEIppVQIMeacdFRai7FCiDHnJKTUWmzFc85BKCGV1mIsnnMOQikpxVZjUSmEUlJKLbZYi0qho5JSSq3VWIwxqaTWWoutxmKMSSm01FqLMRYjbE2ptdhqq7EYY2sqLbQYY4zFCF9kbC2m2moNxggjWywt1VprMMYY3VuLpbaaizE++NpSLDHWXAAAd4MDAESCjTOsJJ0VjgYXGrISAAgJACAQUooxxhhzzjnnpFKMOeaccw5CCKFUijHGnHMOQgghlIwx5pxzEEIIIYRSSsaccxBCCCGEkFLqnHMQQgghhBBKKZ1zDkIIIYQQQimlgxBCCCGEEEoopaQUQgghhBBCCKmklEIIIYRSQighlZRSCCGEEEIpJaSUUgohhFJCCKGElFJKKYUQQgillJJSSimlEkoJJYQSUikppRRKCCGUUkpKKaVUSgmhhBJKKSWllFJKIYQQSikFAAAcOAAABBhBJxlVFmGjCRcegEJDVgIAZAAAkKKUUiktRYIipRikGEtGFXNQWoqocgxSzalSziDmJJaIMYSUk1Qy5hRCDELqHHVMKQYtlRhCxhik2HJLoXMOAAAAQQCAgJAAAAMEBTMAwOAA4XMQdAIERxsAgCBEZohEw0JweFAJEBFTAUBigkIuAFRYXKRdXECXAS7o4q4DIQQhCEEsDqCABByccMMTb3jCDU7QKSp1IAAAAAAADADwAACQXAAREdHMYWRobHB0eHyAhIiMkAgAAAAAABcAfAAAJCVAREQ0cxgZGhscHR4fICEiIyQBAIAAAgAAAAAggAAEBAQAAAAAAAIAAAAEBB9DtnUBAAAAAAAEPueBAKOFggAAgACjzoEAA4BwBwCdASqwAJAAAEcIhYWIhYSIAgIABhwJ7kPfbJyHvtk5D32ych77ZOQ99snIe+2TkPfbJyHvtk5D32ych77ZOQ99YAD+/6tQgKOFggADgAqjhYIAD4AOo4WCACSADqOZgQArADECAAEQEAAYABhYL/QACIBDmAYAAKOFggA6gA6jhYIAT4AOo5mBAFMAMQIAARAQABgAGFgv9AAIgEOYBgAAo4WCAGSADqOFggB6gA6jmYEAewAxAgABEBAAGAAYWC/0AAiAQ5gGAACjhYIAj4AOo5mBAKMAMQIAARAQABgAGFgv9AAIgEOYBgAAo4WCAKSADqOFggC6gA6jmYEAywAxAgABEBAAGAAYWC/0AAiAQ5gGAACjhYIAz4AOo4WCAOSADqOZgQDzADECAAEQEAAYABhYL/QACIBDmAYAAKOFggD6gA6jhYIBD4AOo5iBARsAEQIAARAQFGAAYWC/0AAiAQ5gGACjhYIBJIAOo4WCATqADqOZgQFDADECAAEQEAAYABhYL/QACIBDmAYAAKOFggFPgA6jhYIBZIAOo5mBAWsAMQIAARAQABgAGFgv9AAIgEOYBgAAo4WCAXqADqOFggGPgA6jmYEBkwAxAgABEBAAGAAYWC/0AAiAQ5gGAACjhYIBpIAOo4WCAbqADqOZgQG7ADECAAEQEAAYABhYL/QACIBDmAYAAKOFggHPgA6jmYEB4wAxAgABEBAAGAAYWC/0AAiAQ5gGAACjhYIB5IAOo4WCAfqADqOZgQILADECAAEQEAAYABhYL/QACIBDmAYAAKOFggIPgA6jhYICJIAOo5mBAjMAMQIAARAQABgAGFgv9AAIgEOYBgAAo4WCAjqADqOFggJPgA6jmYECWwAxAgABEBAAGAAYWC/0AAiAQ5gGAACjhYICZIAOo4WCAnqADqOZgQKDADECAAEQEAAYABhYL/QACIBDmAYAAKOFggKPgA6jhYICpIAOo5mBAqsAMQIAARAQABgAGFgv9AAIgEOYBgAAo4WCArqADqOFggLPgA6jmIEC0wARAgABEBAUYABhYL/QACIBDmAYAKOFggLkgA6jhYIC+oAOo5mBAvsAMQIAARAQABgAGFgv9AAIgEOYBgAAo4WCAw+ADqOZgQMjADECAAEQEAAYABhYL/QACIBDmAYAAKOFggMkgA6jhYIDOoAOo5mBA0sAMQIAARAQABgAGFgv9AAIgEOYBgAAo4WCA0+ADqOFggNkgA6jmYEDcwAxAgABEBAAGAAYWC/0AAiAQ5gGAACjhYIDeoAOo4WCA4+ADqOZgQObADECAAEQEAAYABhYL/QACIBDmAYAAKOFggOkgA6jhYIDuoAOo5mBA8MAMQIAARAQABgAGFgv9AAIgEOYBgAAo4WCA8+ADqOFggPkgA6jhYID+oAOo4WCBA+ADhxTu2sBAAAAAAAAEbuPs4EDt4r3gQHxghEr8IEK",
		mp4: "data:video/mp4;base64,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"
	}), gA
}
var hA, DA;

function Yt() {
	if (DA) return hA;
	DA = 1;
	const {
		webm: A,
		mp4: e
	} = _t(), t = () => typeof navigator < "u" && parseFloat(("" + (/CPU.*OS ([0-9_]{3,4})[0-9_]{0,1}|(CPU like).*AppleWebKit.*Mobile/i.exec(navigator.userAgent) || [0, ""])[1]).replace("undefined", "3_2").replace("_", ".").replace("_", "")) < 10 && !window.MSStream, s = () => "wakeLock" in navigator;
	class n {
		constructor() {
			if (this.enabled = !1, s()) {
				this._wakeLock = null;
				const a = () => {
					this._wakeLock !== null && document.visibilityState === "visible" && this.enable()
				};
				document.addEventListener("visibilitychange", a), document.addEventListener("fullscreenchange", a)
			} else t() ? this.noSleepTimer = null : (this.noSleepVideo = document.createElement("video"), this.noSleepVideo.setAttribute("title", "No Sleep"), this.noSleepVideo.setAttribute("playsinline", ""), this._addSourceToVideo(this.noSleepVideo, "webm", A), this._addSourceToVideo(this.noSleepVideo, "mp4", e), this.noSleepVideo.addEventListener("loadedmetadata", () => {
				this.noSleepVideo.duration <= 1 ? this.noSleepVideo.setAttribute("loop", "") : this.noSleepVideo.addEventListener("timeupdate", () => {
					this.noSleepVideo.currentTime > .5 && (this.noSleepVideo.currentTime = Math.random())
				})
			}))
		}
		_addSourceToVideo(a, c, l) {
			var d = document.createElement("source");
			d.src = l, d.type = `video/${c}`, a.appendChild(d)
		}
		get isEnabled() {
			return this.enabled
		}
		enable() {
			return s() ? navigator.wakeLock.request("screen").then(a => {
				this._wakeLock = a, this.enabled = !0, console.log("Wake Lock active."), this._wakeLock.addEventListener("release", () => {
					console.log("Wake Lock released.")
				})
			}).catch(a => {
				throw this.enabled = !1, console.error(`${a.name}, ${a.message}`), a
			}) : t() ? (this.disable(), console.warn(`
        NoSleep enabled for older iOS devices. This can interrupt
        active or long-running network requests from completing successfully.
        See https://github.com/richtr/NoSleep.js/issues/15 for more details.
      `), this.noSleepTimer = window.setInterval(() => {
				document.hidden || (window.location.href = window.location.href.split("#")[0], window.setTimeout(window.stop, 0))
			}, 15e3), this.enabled = !0, Promise.resolve()) : this.noSleepVideo.play().then(c => (this.enabled = !0, c)).catch(c => {
				throw this.enabled = !1, c
			})
		}
		disable() {
			s() ? (this._wakeLock && this._wakeLock.release(), this._wakeLock = null) : t() ? this.noSleepTimer && (console.warn(`
          NoSleep now disabled for older iOS devices.
        `), window.clearInterval(this.noSleepTimer), this.noSleepTimer = null) : this.noSleepVideo.pause(), this.enabled = !1
		}
	}
	return hA = n, hA
}
var Ft = Yt();
const Nt = Te(Ft),
	ZA = "mode",
	Gt = "voice",
	Jt = () => {
		const [A, e] = Re(), t = A.get(ZA), s = lA(), n = M(g => g.isVoiceModeActive), {
			isUnauthenticated: i
		} = ge(), a = Ze(), c = he(), l = !i, d = XA();
		o.useEffect(() => {
			t === Gt && !n && (e(g => (g.delete(ZA), g)), c ? d("/update-app") : l ? s.setState({
				isVoiceModeActive: !0
			}) : a({
				authType: "login",
				callbackUrl: window.location.href
			}))
		}, [l, c, t, d, a, e, n, s])
	},
	Xt = A => o.createElement("svg", {
		width: 20,
		height: 20,
		viewBox: "0 0 20 20",
		fill: "currentColor",
		xmlns: "http://www.w3.org/2000/svg",
		...A
	}, o.createElement("path", {
		d: "M15.7806 10.1963C16.1326 10.3011 16.3336 10.6714 16.2288 11.0234L16.1487 11.2725C15.3429 13.6262 13.2236 15.3697 10.6644 15.6299L10.6653 16.835H12.0833L12.2171 16.8486C12.5202 16.9106 12.7484 17.1786 12.7484 17.5C12.7484 17.8214 12.5202 18.0894 12.2171 18.1514L12.0833 18.165H7.91632C7.5492 18.1649 7.25128 17.8672 7.25128 17.5C7.25128 17.1328 7.5492 16.8351 7.91632 16.835H9.33527L9.33429 15.6299C6.775 15.3697 4.6558 13.6262 3.84992 11.2725L3.76984 11.0234L3.74445 10.8906C3.71751 10.5825 3.91011 10.2879 4.21808 10.1963C4.52615 10.1047 4.84769 10.2466 4.99347 10.5195L5.04523 10.6436L5.10871 10.8418C5.8047 12.8745 7.73211 14.335 9.99933 14.335C12.3396 14.3349 14.3179 12.7789 14.9534 10.6436L15.0052 10.5195C15.151 10.2466 15.4725 10.1046 15.7806 10.1963ZM13.5814 9.16699C13.5812 11.1448 11.9781 12.7479 10.0003 12.748C8.02232 12.748 6.41845 11.1449 6.41828 9.16699V5.41699C6.41828 3.43889 8.02221 1.83496 10.0003 1.83496C11.9783 1.83514 13.5814 3.439 13.5814 5.41699V9.16699Z"
	})),
	Pt = A => o.createElement("svg", {
		width: 20,
		height: 20,
		viewBox: "0 0 20 20",
		fill: "currentColor",
		xmlns: "http://www.w3.org/2000/svg",
		...A
	}, o.createElement("path", {
		d: "M4.21847 10.1963C4.52646 10.1048 4.84811 10.2467 4.99386 10.5195L5.04561 10.6436L5.10909 10.8418C5.80511 12.8745 7.73253 14.335 9.99972 14.335C10.5286 14.3349 11.0387 14.2541 11.5192 14.1064L12.5534 15.1406C11.9635 15.3929 11.3293 15.5623 10.6648 15.6299L10.6657 16.835H12.0837L12.2175 16.8486C12.5205 16.9107 12.7487 17.1787 12.7487 17.5C12.7487 17.8213 12.5205 18.0893 12.2175 18.1514L12.0837 18.165H7.91671C7.54959 18.1649 7.25167 17.8672 7.25167 17.5C7.25167 17.1328 7.54959 16.8351 7.91671 16.835H9.33565L9.33468 15.6299C6.77542 15.3697 4.65621 13.6261 3.8503 11.2725L3.77022 11.0234L3.74483 10.8906C3.71789 10.5825 3.9105 10.2879 4.21847 10.1963Z"
	}), o.createElement("path", {
		d: "M2.52901 2.5293C2.75621 2.3021 3.10782 2.274 3.36593 2.44434L3.47042 2.5293L17.4704 16.5293L17.5554 16.6338C17.7259 16.8919 17.6977 17.2434 17.4704 17.4707C17.2431 17.6978 16.8916 17.7261 16.6335 17.5557L16.529 17.4707L2.52901 3.4707L2.44405 3.36621C2.2737 3.10816 2.30194 2.75653 2.52901 2.5293Z"
	}), o.createElement("path", {
		d: "M15.0056 10.5195C15.1514 10.2467 15.4729 10.1047 15.781 10.1963C16.1328 10.3012 16.3339 10.6715 16.2292 11.0234L16.1491 11.2725C15.9624 11.8178 15.7043 12.3299 15.3874 12.7988L14.4245 11.8359C14.6481 11.4661 14.8279 11.0665 14.9538 10.6436L15.0056 10.5195Z"
	}), o.createElement("path", {
		d: "M10.156 12.7432C10.1045 12.7454 10.0527 12.748 10.0007 12.748C8.0227 12.748 6.41884 11.1449 6.41866 9.16699V9.00586L10.156 12.7432Z"
	}), o.createElement("path", {
		d: "M10.0007 1.83496C11.9785 1.83529 13.5817 3.4391 13.5817 5.41699V9.16699C13.5817 9.70173 13.4627 10.2084 13.2526 10.6641L6.67452 4.08594C7.20297 2.76693 8.49303 1.83496 10.0007 1.83496Z"
	})),
	Wt = A => o.createElement("svg", {
		width: 20,
		height: 20,
		viewBox: "0 0 20 20",
		fill: "currentColor",
		xmlns: "http://www.w3.org/2000/svg",
		...A
	}, o.createElement("path", {
		fillRule: "evenodd",
		clipRule: "evenodd",
		d: "M13.5 2.66797C14.1891 2.66797 14.7461 2.66732 15.1963 2.7041C15.654 2.74151 16.0599 2.82094 16.4365 3.0127L16.6553 3.13477C17.1509 3.43881 17.5548 3.87557 17.8203 4.39649L17.8867 4.53906C18.0309 4.87526 18.0962 5.23621 18.1289 5.63672C18.1657 6.08689 18.165 6.64407 18.165 7.33301V12.666C18.165 13.3548 18.1656 13.9122 18.1289 14.3623C18.0962 14.7631 18.0311 15.1245 17.8867 15.4609L17.8203 15.6035C17.5549 16.1244 17.1508 16.5602 16.6553 16.8643L16.4365 16.9863C16.0599 17.1782 15.6541 17.2575 15.1963 17.2949C14.746 17.3317 14.1891 17.3311 13.5 17.3311H6.5C5.81091 17.3311 5.25395 17.3317 4.80371 17.2949C4.40304 17.2622 4.04236 17.197 3.70606 17.0527L3.56348 16.9863C3.04242 16.7208 2.60583 16.3171 2.30176 15.8213L2.17969 15.6035C1.98782 15.2268 1.90851 14.8202 1.87109 14.3623C1.83435 13.9122 1.83496 13.3548 1.83496 12.666V7.33301C1.83496 6.64407 1.83431 6.08689 1.87109 5.63672C1.90852 5.17906 1.98793 4.77301 2.17969 4.39649C2.48314 3.80107 2.96803 3.31609 3.56348 3.0127C3.94005 2.82094 4.34597 2.74151 4.80371 2.7041C5.25395 2.66732 5.81092 2.66797 6.5 2.66797H13.5ZM5.41699 11.418C5.04984 11.418 4.75214 11.7159 4.75195 12.083C4.75195 12.4044 4.98008 12.6724 5.2832 12.7344L5.41699 12.748L5.51953 12.7529C6.02437 12.8044 6.41878 13.2316 6.41895 13.75C6.41912 14.1171 6.71682 14.415 7.08399 14.415C7.45088 14.4147 7.74885 14.1169 7.74902 13.75C7.74885 12.5429 6.8309 11.5491 5.65527 11.4297L5.41699 11.418ZM5.41699 8.08496C5.04972 8.08496 4.75195 8.38273 4.75195 8.75C4.75195 9.07143 4.98008 9.33944 5.2832 9.40137L5.41699 9.41504L5.63965 9.4209C7.93021 9.53692 9.75195 11.4306 9.75195 13.75C9.75195 14.1173 10.0497 14.415 10.417 14.415C10.7842 14.4149 11.082 14.1172 11.082 13.75C11.082 10.7193 8.70186 8.24487 5.70899 8.09277L5.41699 8.08496Z"
	})),
	Ut = A => o.createElement("svg", {
		width: 20,
		height: 20,
		viewBox: "0 0 20 20",
		fill: "currentColor",
		xmlns: "http://www.w3.org/2000/svg",
		...A
	}, o.createElement("path", {
		d: "M6.46567 3.75C5.79487 3.74999 5.24122 3.74998 4.79023 3.78683C4.32181 3.8251 3.89123 3.90724 3.48678 4.11331C2.85957 4.43289 2.34964 4.94283 2.03006 5.57003C1.82399 5.97448 1.74185 6.40507 1.70358 6.87348C1.66673 7.32447 1.66674 7.8781 1.66675 8.5489V11.4511C1.66674 12.1219 1.66673 12.6755 1.70358 13.1265C1.74185 13.5949 1.82399 14.0255 2.03006 14.43C2.34964 15.0572 2.85957 15.5671 3.48678 15.8867C3.89123 16.0928 4.32181 16.1749 4.79023 16.2132C5.24123 16.25 5.79487 16.25 6.46569 16.25H8.95114C9.62196 16.25 10.1756 16.25 10.6266 16.2132C11.095 16.1749 11.5256 16.0928 11.93 15.8867C12.5573 15.5671 13.0672 15.0572 13.3868 14.43C13.5928 14.0255 13.675 13.5949 13.7133 13.1265C13.7501 12.6755 13.7501 12.1219 13.7501 11.4511V8.54894C13.7501 7.87812 13.7501 7.32448 13.7133 6.87348C13.675 6.40507 13.5928 5.97448 13.3868 5.57003C13.0672 4.94283 12.5573 4.43289 11.93 4.11331C11.5256 3.90724 11.095 3.8251 10.6266 3.78683C10.1756 3.74998 9.62198 3.74999 8.95118 3.75H6.46567Z"
	}), o.createElement("path", {
		d: "M19.1667 6.526C19.1667 5.46049 17.919 4.88349 17.1072 5.57357L15.4405 6.99024C15.1611 7.22774 15.0001 7.57595 15.0001 7.94267V12.0573C15.0001 12.424 15.1611 12.7722 15.4405 13.0097L17.1072 14.4264C17.919 15.1165 19.1667 14.5395 19.1667 13.474V6.526Z"
	})),
	Ae = "inline-flex items-center bg-transparent text-token-text-secondary hover:text-token-text-primary",
	qt = ({
		message: A,
		onClick: e,
		type: t
	}) => {
		const s = _(),
			n = fe() && pe;
		if (!A) return null;
		switch (t) {
			case "microphone_denied":
				return n ? r.jsxs("a", {
					href: "ms-settings:privacy-microphone",
					className: Ae,
					children: [A, r.jsx(NA, {
						className: "icon-sm ms-1"
					})]
				}) : r.jsx(LA, {
					onClick: e,
					message: A
				});
			case "connection_quality":
				return r.jsxs("div", {
					className: "inline-flex items-center",
					children: [A, r.jsx("button", {
						onClick: e,
						className: "ms-1",
						children: r.jsx("strong", {
							children: s.formatMessage(ee.retry)
						})
					})]
				});
			case "normal":
				return r.jsx(LA, {
					onClick: e,
					message: A
				})
		}
	},
	LA = ({
		message: A,
		onClick: e
	}) => {
		const t = _();
		return r.jsxs("button", {
			onClick: e,
			className: Ae,
			"aria-label": t.formatMessage(ee.openInfoModal),
			children: [A, r.jsx(NA, {
				className: "icon-sm ms-1"
			})]
		})
	},
	ee = {
		openInfoModal: {
			id: "hintMessage.openInfoModal",
			defaultMessage: "Open info modal",
			description: "Open info modal about voice mode usage"
		},
		retry: {
			id: "hintMessage.retry",
			defaultMessage: "Retry",
			description: "Retry text next to lost connection message"
		}
	};

function Kt(A) {
	const {
		button: e,
		conversationId: t,
		onClick: s
	} = A, n = kA(t), {
		startVoiceMode: i
	} = UA(), a = XA(), c = o.useCallback(() => {
		switch (e.action) {
			case "new_chat": {
				Le("/"), i(EA({
					serverThreadId: void 0,
					isAdvancedMode: !0,
					eventSource: `modal_${e.action}`,
					parentMessageId: void 0,
					clientThreadId: Ee(),
					gizmoId: void 0,
					skipCacheReason: "modal-new-chat-button"
				}));
				break
			}
			case "switch_to_standard":
				n && i(EA({
					serverThreadId: n,
					isAdvancedMode: !1,
					eventSource: `modal_${e.action}`,
					parentMessageId: void 0,
					clientThreadId: n,
					gizmoId: rA.getGizmoId(CA(t)),
					skipCacheReason: "modal-switch-to-standard-button"
				}));
				break;
			case "upgrade_to_plus":
				xA(a, "Voice Mode Upgrade To Plus Modal");
				break;
			case "upgrade_to_pro":
				xA(a, "Voice Mode Upgrade To Pro Modal");
				break
		}
		s?.()
	}, [e.action, t, a, s, n, i]);
	return r.jsx(ke.Button, {
		onClick: c,
		title: e.title,
		color: A.color
	})
}
const Ht = {
	primary: "primary",
	secondary: "secondary",
	tertiary: "ghost"
};

function zt({
	buttons: A,
	conversationId: e,
	onClick: t
}) {
	let s, n, i;
	const a = o.useCallback(c => () => {
		c === "upgrade_to_plus" ? O.upsell.upgradeToPlus() : c === "upgrade_to_pro" && O.upsell.upgradeToPro(), t()
	}, [t]);
	return !A || A.length === 0 ? {
		primary: void 0,
		secondary: void 0,
		tertiary: void 0
	} : (A.forEach(c => {
		if (!Ce.includes(c.action)) return;
		const d = r.jsx(Kt, {
			button: c,
			conversationId: e,
			onClick: a(c.action),
			color: Ht[c.style]
		});
		switch (c.style) {
			case "primary":
				s = d;
				break;
			case "secondary":
				n = d;
				break;
			case "tertiary":
				i = d;
				break
		}
	}), {
		primary: s,
		secondary: n,
		tertiary: i
	})
}

function $t({
	conversationId: A,
	isOpen: e,
	onClose: t,
	buttons: s,
	title: n,
	description_markdown: i
}) {
	const a = zt({
			buttons: s,
			conversationId: A,
			onClick: t
		}),
		c = r.jsx(Oe, {
			className: "markdown text-token-text-secondary mb-6",
			urlTransform: l => l,
			children: i
		});
	return r.jsx(ve, {
		testId: "modal-voice-rate-limit",
		title: n,
		isOpen: e,
		onClose: t,
		size: "custom",
		className: "max-w-[550px]",
		type: "warning",
		showCloseButton: !0,
		children: r.jsxs("div", {
			className: "w-full",
			children: [c, r.jsxs("div", {
				className: "flex flex-row justify-end gap-6",
				children: [a.primary, a.secondary, a.tertiary]
			})]
		})
	})
}

function Ao({
	conversationId: A
}) {
	const e = _(),
		t = lA(),
		s = $A({
			conversationId: A
		}),
		n = M(E => E.server.usage),
		i = M(E => E.server.voiceConnectionQuality),
		a = E => E === qA.LOST,
		c = _e(),
		{
			voiceName: l
		} = bA(),
		[d, g] = o.useState(!1),
		m = M(E => E.server.toolUpdate),
		[u, h] = o.useState(!1),
		[v, C] = o.useState(!0),
		[k, f] = o.useState(null),
		[b, x] = o.useState(null),
		[B, p] = o.useState(null),
		V = o.useRef(!1),
		{
			prospectiveModelId: S
		} = Ye(A),
		R = kA(A),
		{
			startVoiceMode: N,
			stopVoiceMode: AA,
			isVoiceModeActive: T
		} = UA(),
		G = M(E => E.server.connectionState),
		eA = o.useCallback(() => {
			const E = G == null || G === F.Connecting;
			s(E ? "user-aborted" : "user-requested")
		}, [G, s]),
		{
			requestMicrophonePermissions: P,
			userDeclinedMicrophonePermissions: w,
			microphoneAvailable: W,
			microphoneLabel: tA
		} = Fe();
	o.useEffect(() => {
		P()
	}, [P]), o.useEffect(() => {
		T && w && (g(!1), p(null), f(e.formatMessage(fA.hint)), x({
			title: e.formatMessage(fA.title),
			description_markdown: e.formatMessage(fA.description_markdown),
			buttons: []
		}))
	}, [e, T, w]), o.useEffect(() => {
		if (W && !G && !V.current) {
			V.current = !0, f(null), x(null);
			const E = CA(A),
				Z = EA({
					serverThreadId: R,
					parentMessageId: rA.getCurrentNode(E)?.id,
					isAdvancedMode: !0,
					eventSource: "composer_speech_button",
					clientThreadId: A,
					gizmoId: rA.getGizmoId(E)
				});
			O.voiceSessionStarted.click({
				voice: l
			}), Z.requested_default_model = S ?? void 0, N(Z)
		}
	}, [G, A, W, S, R, N, l]);
	const {
		reaching_limit_disclosure: U,
		exceed_limit_message: j
	} = n?.rate_limit_message ?? {}, y = c?.modes.find(E => E.mode === c?.default_voice_mode), q = y?.disclosure_message, K = a(i) ? "Lost connection." : U?.hint ?? j?.title ?? q?.hint ?? null;
	o.useEffect(() => {
		y && !w && f(y.disclosure_message?.hint ?? null)
	}, [y, w]), o.useEffect(() => {
		const E = m?.text;
		let Z, oA, J;
		return E && (C(!1), Z = setTimeout(() => {
			h(!0), oA = setTimeout(() => {
				h(!1), J = setTimeout(() => {
					C(!0), t.setState(le => {
						le.server.toolUpdate = null
					})
				}, 750)
			}, 3e3)
		}, 750)), () => {
			clearTimeout(Z), clearTimeout(oA), clearTimeout(J)
		}
	}, [m, t]), o.useEffect(() => {
		if (!w) {
			if (K && f(K), j && T) {
				AA();
				const E = {
					title: j.title,
					description_markdown: j.description_markdown,
					buttons: j.buttons
				};
				d ? p(E) : (x(E), g(!0));
				const Z = j.buttons.some(J => J.action === "upgrade_to_plus"),
					oA = j.buttons.some(J => J.action === "upgrade_to_pro");
				O.rateLimitReached.success({
					upgrade_to_plus: Z,
					upgrade_to_pro: oA
				})
			} else if (!b) {
				const E = U ?? q;
				E && x({
					title: E.title,
					description_markdown: E.message_markdown,
					buttons: E.buttons
				})
			}
		}
	}, [q, j, K, d, T, b, U, AA, w]);
	const ie = o.useCallback(() => {
			B && (x(B), p(null)), g(!0)
		}, [B]),
		ae = o.useCallback(() => {
			g(!1)
		}, []),
		re = M(E => E.voiceMode),
		ce = async () => {
			try {
				f(null), await N({
					conversation_id: R,
					eventSource: "lost_connection_hint_message",
					voice_mode: re,
					voice: l,
					clientThreadId: A,
					gizmo_id: rA.getGizmoId(CA(A)),
					skipCacheReason: "lost-connection-retry"
				})
			} catch (E) {
				const Z = E instanceof Error ? E.message : String(E);
				O.voiceMode.error({
					error: Z,
					eventSource: "lost_connection_hint_message"
				})
			}
		};
	let H;
	return w ? H = "microphone_denied" : a(i) ? H = "connection_quality" : H = "normal", r.jsxs("div", {
		className: "flex w-full flex-col items-center",
		children: [r.jsxs("div", {
			className: "text-token-text-secondary relative mb-6 flex min-h-5 w-full items-center justify-center text-xs",
			children: [m?.text && r.jsx(D.div, {
				initial: {
					opacity: 0
				},
				animate: {
					opacity: u ? 1 : 0
				},
				transition: {
					duration: .5
				},
				style: {
					position: "absolute",
					left: "50%",
					transform: "translateX(-50%)",
					textAlign: "center"
				},
				children: r.jsxs("div", {
					className: "flex items-center",
					children: [m?.text && r.jsx(Mt, {
						className: "icon-sm me-1"
					}), m?.text]
				})
			}), r.jsx(D.div, {
				initial: {
					opacity: 0
				},
				animate: {
					opacity: v ? 1 : 0
				},
				transition: {
					duration: .5
				},
				style: {
					position: "absolute",
					left: "50%",
					transform: "translateX(-50%)",
					textAlign: "center",
					pointerEvents: m?.text ? "none" : "auto",
					cursor: m?.text ? "default" : "pointer"
				},
				children: r.jsx("div", {
					className: "flex items-center",
					children: r.jsx(qt, {
						type: H,
						message: k,
						onClick: H === "connection_quality" ? ce : ie
					})
				})
			})]
		}), r.jsxs("div", {
			className: cA("flex flex-row items-center gap-6", "rounded-full px-3 py-1", "transition-width duration-200 ease-in-out"),
			children: [r.jsx(OA, {
				capability: "video",
				children: r.jsx(eo, {})
			}), r.jsx(to, {
				hideTooltip: w,
				microphoneLabel: tA,
				isMicrophoneEnabled: W
			}), r.jsx(OA, {
				capability: "screenshare",
				children: r.jsx(oo, {})
			}), r.jsx(wA, {
				onClick: eA
			})]
		}), r.jsx($t, {
			conversationId: A,
			isOpen: d,
			onClose: ae,
			title: b?.title,
			description_markdown: b?.description_markdown,
			buttons: b?.buttons ?? []
		})]
	})
}

function OA({
	children: A,
	capability: e
}) {
	return nt()[e] ? A : null
}

function eo() {
	const {
		isVideoEnabled: A,
		isStartingVideo: e,
		toggleVideo: t
	} = BA(), s = _();
	let n = null;
	e ? n = vA : n = Ut;
	const i = A ? "bg-gray-900 hover:bg-gray-800 active:bg-gray-700" : "bg-black/5 hover:bg-black/10 active:bg-black/20 dark:bg-[rgba(255,255,255,0.04)] dark:hover:bg-white/5 dark:active:bg-white/10",
		a = A ? "text-token-main-surface-primary" : "text-token-main-surface-primary-inverse",
		c = s.formatMessage({
			id: "SRVwhB",
			defaultMessage: "Toggle video"
		});
	return r.jsx($, {
		"aria-label": c,
		onClick: () => t("ControlButton"),
		disabled: e,
		icon: n,
		className: i,
		iconColor: a
	})
}

function to({
	hideTooltip: A,
	microphoneLabel: e,
	isMicrophoneEnabled: t
}) {
	const {
		isMuting: s,
		toggleMute: n
	} = PA(), i = _(), {
		disconnectPending: a
	} = MA(), c = !!M(h => h.dev.room?.localParticipant.isMicrophoneEnabled), l = t && c, d = l ? Xt : Pt, g = l ? "bg-black/5 hover:bg-black/10 active:bg-black/20 dark:bg-[rgba(255,255,255,0.04)] dark:hover:bg-white/5 dark:active:bg-white/10" : "bg-red-500/10 hover:bg-red-500/15 active:bg-red-500/20 dark:bg-red-500/10 dark:hover:bg-red-500/15 dark:active:bg-red-500/20", m = l ? "text-token-main-surface-primary-inverse" : "text-danger", u = l ? i.formatMessage({
		id: "PJzixV",
		defaultMessage: "Turn off microphone"
	}) : i.formatMessage({
		id: "nbbUMb",
		defaultMessage: "Turn on microphone"
	});
	return r.jsx($, {
		"aria-label": u,
		onClick: n,
		icon: d,
		disabled: s || a,
		className: g,
		iconColor: m,
		tooltipPrimaryLabel: !A && e ? u : "",
		tooltipSecondaryLabel: e
	})
}

function oo() {
	const {
		isScreenshareEnabled: A,
		isScreenshareStarting: e,
		toggleScreenShare: t
	} = SA(), s = _();
	let n = null;
	e ? n = vA : n = Wt;
	const i = A ? "bg-gray-900 hover:bg-gray-800 active:bg-gray-700" : "bg-black/5 hover:bg-black/10 active:bg-black/20 dark:bg-[rgba(255,255,255,0.04)] dark:hover:bg-white/5 dark:active:bg-white/10",
		a = A ? "text-token-main-surface-primary" : "text-token-main-surface-primary-inverse",
		c = s.formatMessage({
			id: "ShdqyW",
			defaultMessage: "Toggle screenshare"
		});
	return r.jsx($, {
		"aria-label": c,
		onClick: () => t("ControlButton"),
		disabled: e,
		icon: n,
		className: i,
		iconColor: a
	})
}

function wA({
	className: A,
	onClick: e
}) {
	const t = _(),
		{
			disconnectPending: s
		} = MA(),
		n = "bg-black/5 hover:bg-black/10 active:bg-black/20 dark:bg-[rgba(255,255,255,0.04)] dark:hover:bg-white/5 dark:active:bg-white/10",
		i = t.formatMessage({
			id: "9Mto0a",
			defaultMessage: "End"
		});
	return r.jsx($, {
		disabled: s,
		onClick: e,
		icon: s ? vA : be,
		iconColor: "text-token-main-surface-primary-inverse",
		className: A ?? n,
		"aria-label": t.formatMessage({
			id: "7/8k4Y",
			defaultMessage: "End voice mode"
		}),
		tooltipPrimaryLabel: i
	})
}

function $(A) {
	const {
		icon: e,
		disabled: t,
		className: s,
		iconColor: n = "text-current",
		iconSize: i = "icon-xl",
		buttonSize: a = "h-16 w-16",
		tooltipPrimaryLabel: c,
		tooltipSecondaryLabel: l,
		...d
	} = A, [g, m] = o.useState(!1), u = o.useRef(void 0), h = o.useCallback(() => {
		const k = window.setTimeout(() => {
			m(!0)
		}, Ne);
		u.current = k
	}, []), v = o.useCallback(() => {
		clearTimeout(u.current), m(!1)
	}, []), C = r.jsx(no, {
		className: cA(s, a, "text-token-text-primary hover:text-token-text-secondary overflow-hidden rounded-full border-none p-0.5 transition-colors duration-200 ease-in-out"),
		disabled: t,
		...d,
		children: r.jsx(e, {
			className: cA(i, n)
		})
	});
	return c ? r.jsx(GA, {
		sideOffset: 14,
		label: c,
		secondaryLabel: l,
		contentClassName: "flex flex-col items-center justify-center",
		className: "flex",
		open: g,
		side: "top",
		children: r.jsx("span", {
			onPointerEnter: h,
			onPointerLeave: v,
			children: C
		})
	}) : C
}
const so = o.forwardRef(function(e, t) {
		return r.jsx(Be, {
			...e,
			ref: t
		})
	}),
	no = D.create(so),
	fA = {
		hint: {
			id: "micMessages.hint",
			defaultMessage: "Enable microphone access in Settings",
			description: "Hint to the user to manually enable microphone access for voice mode"
		},
		title: {
			id: "micMessages.title",
			defaultMessage: "Microphone access required",
			description: "Title for modal that informs the user that microphone access is required for voice mode"
		},
		description_markdown: {
			id: "micMessages.description_markdown",
			defaultMessage: "To use voice mode, you'll need to enable your microphone and try again.",
			description: "Description for modal that informs the user that microphone access is required for voice mode"
		}
	};

function te(A, e) {
	if (e.srcObject instanceof MediaStream) {
		const t = e.srcObject;
		t.removeTrack(A), t.getTracks().length > 0 ? e.srcObject = t : e.srcObject = null
	}
}

function oe(A, e) {
	let t;
	e.srcObject instanceof MediaStream ? t = e.srcObject : t = new MediaStream;
	let s;
	A.kind === "audio" ? s = t.getAudioTracks() : s = t.getVideoTracks(), s.includes(A) || (s.forEach(n => {
		t.removeTrack(n)
	}), t.addTrack(A)), (!yA() || !(e instanceof HTMLVideoElement)) && (e.autoplay = !0), e.muted = t.getAudioTracks().length === 0, e instanceof HTMLVideoElement && (e.playsInline = !0), e.srcObject !== t && (e.srcObject = t, (yA() || Se()) && e instanceof HTMLVideoElement && setTimeout(() => {
		e.srcObject = t, e.play().catch(() => {})
	}, 0))
}

function io({
	children: A
}) {
	const {
		isVideoEnabled: e
	} = BA(), {
		isScreenshareEnabled: t
	} = SA(), s = e || t;
	return r.jsx(z, {
		mode: "wait",
		children: s ? r.jsx("div", {
			className: "flex h-full w-full flex-nowrap items-center",
			children: e ? r.jsx(ao, {}) : r.jsx(ro, {})
		}) : r.jsx(D.div, {
			className: "flex h-full w-full items-center justify-center",
			initial: {
				opacity: 0
			},
			animate: {
				opacity: 1
			},
			exit: {
				opacity: 0
			},
			children: A
		}, "children")
	})
}

function ao() {
	const {
		isVideoEnabled: A,
		isStartingVideo: e,
		toggleVideo: t
	} = BA(), {
		getTracks: s
	} = dA(), i = s([IA.Camera]).find(l => l.origin === X.Local), a = o.useRef(null), c = A && !e && i;
	return o.useEffect(() => {
		if (i) {
			const l = () => {
				t("Browser Video Controls")
			};
			return i.onEnded(l), () => {
				i.offEnded(l)
			}
		}
	}, [i, t]), o.useEffect(() => {
		const l = a.current;
		return l && i && oe(i.track, l), () => {
			l && i && te(i.track, l)
		}
	}, [i]), r.jsx(z, {
		children: c && r.jsx(se, {
			children: r.jsxs("div", {
				className: "aspect-w-16 aspect-h-9 group relative max-h-[95%] w-fit max-w-[60%] overflow-hidden rounded-3xl shadow-md",
				children: [r.jsx("div", {
					className: "absolute end-2 top-2 z-10 opacity-0 transition-opacity group-hover:opacity-90",
					children: r.jsx(wA, {
						onClick: () => t("StopButton"),
						className: "bg-gray-900/20 backdrop-blur-lg hover:bg-gray-900/30 dark:backdrop-blur-lg"
					})
				}), r.jsx("video", {
					ref: a,
					className: "h-full w-full object-contain",
					muted: !0
				})]
			})
		}, "camera-renderer")
	})
}

function ro() {
	const {
		isScreenshareEnabled: A,
		isScreenshareStarting: e,
		toggleScreenShare: t
	} = SA(), {
		getTracks: s
	} = dA(), i = s([IA.ScreenShare]).find(l => l.origin === X.Local), a = o.useRef(null), c = A && !e && i;
	return o.useEffect(() => {
		if (i) {
			const l = () => {
				t("Browser ScreenShare Controls")
			};
			return i.onEnded(l), () => {
				i.offEnded(l)
			}
		}
	}, [i, t]), o.useEffect(() => {
		const l = a.current;
		return l && i && c && oe(i.track, l), () => {
			l && i && te(i.track, l)
		}
	}, [i, c]), r.jsx(z, {
		children: c && r.jsx(se, {
			children: r.jsxs("div", {
				className: "aspect-w-16 aspect-h-9 group relative max-h-[95%] w-fit max-w-[60%] overflow-hidden rounded-3xl shadow-md",
				children: [r.jsx("div", {
					className: "absolute end-2 top-2 z-10 opacity-0 transition-opacity group-hover:opacity-90",
					children: r.jsx(wA, {
						onClick: () => t("StopButton"),
						className: "bg-gray-900/20 backdrop-blur-lg hover:bg-gray-900/30 dark:backdrop-blur-lg"
					})
				}), r.jsx("video", {
					ref: a,
					className: "h-full w-full object-contain",
					muted: !0
				})]
			})
		}, "screenshare-renderer")
	})
}

function se({
	children: A,
	key: e
}) {
	return r.jsx(D.div, {
		className: "bg-token-main-surface-primary flex h-full w-full flex-col items-center justify-center gap-2",
		initial: {
			opacity: 0,
			transform: "blur(12px)",
			scale: .75
		},
		animate: {
			opacity: 1,
			transform: "blur(0px)",
			scale: 1
		},
		exit: {
			opacity: 0,
			transform: "blur(12px)",
			scale: .75
		},
		transition: {
			duration: .2
		},
		children: A
	}, e)
}
const iA = (A, e) => {
		const [t, s] = o.useState(A === e ? performance.now() : 0), n = o.useRef(e);
		o.useEffect(() => {
			n.current !== e && A === e && s(performance.now()), n.current = e
		}, [e, A]);
		const i = o.useCallback(() => {
			s(0)
		}, []);
		return [A === e ? 1 : 0, t, i]
	},
	aA = ([A, e, t], s = 500) => {
		const [n, i] = o.useState(A), a = o.useRef(A), c = o.useRef(void 0), l = o.useCallback((d, g, m) => {
			const u = h => {
				const v = Math.min((h - d) / s, 1),
					C = g + v * (m - g);
				i(C), v < 1 && (c.current = requestAnimationFrame(u))
			};
			c.current = requestAnimationFrame(u)
		}, [s]);
		return o.useEffect(() => {
			if (a.current !== A) {
				a.current = A, c.current && cancelAnimationFrame(c.current);
				const d = n,
					g = A;
				l(performance.now(), d, g)
			}
		}, [l, n, A]), [n, e / 1e3, t]
	},
	_A = A => {
		const [e, t] = o.useState({
			audioData: [0, 0, 0, 0],
			cumulativeAudioData: [0, 0, 0, 0]
		}), s = o.useRef([0, 0, 0, 0]), n = o.useRef(void 0), i = o.useRef(performance.now()), {
			bandMagnitudes: a,
			cumulativeMagnitude: c
		} = it(A, {
			bands: 3,
			bins: 1,
			gainMultipliers: [10, 1, 1]
		});
		s.current = [...a, c].flat();
		const l = o.useCallback(() => {
			const d = performance.now(),
				g = (d - i.current) / 1e3;
			i.current = d;
			const m = s.current,
				{
					audioData: u,
					cumulativeAudioData: h
				} = e,
				v = at({
					deltaTimeS: g,
					audioDataRaw: m,
					prevAudioData: u,
					prevCumulativeAudioData: h
				});
			t(v)
		}, [e]);
		return o.useEffect(() => (n.current || (n.current = window.setInterval(l, KA)), () => {
			clearInterval(n.current), n.current = void 0
		}), [l]), e
	},
	ne = () => Me(() => Ie()) === "transceiver";

function YA({
	className: A
}) {
	return r.jsx(po, {
		className: A
	})
}
const co = 1.55,
	lo = 1.4,
	uo = "audio",
	mo = "shout",
	go = "User",
	ho = {
		bands: 4,
		loPass: 0,
		hiPass: 400
	},
	FA = [300, 300];

function fo() {
	const A = we(),
		e = M(p => p.voiceMode === "advanced"),
		t = ne(),
		s = xe(),
		n = ye(s, "2624610486"),
		{
			getTracks: i
		} = dA(),
		a = i([IA.Microphone]),
		c = a.find(p => p.name === uo),
		l = a.find(p => p.name === mo);
	let d = VA(l?.track, ho);
	d.length === 0 && (d = [0, 0, 0, 0]), d.map(p => p * lo);
	const g = _A(l?.track),
		m = _A(c?.track),
		u = g.audioData.map((p, V) => {
			const S = m.audioData[V];
			return p > 0 && S > 0 ? (p + S) / 2 : p > 0 ? p : S
		}),
		h = g.cumulativeAudioData.map((p, V) => {
			const S = m.cumulativeAudioData[V];
			return p > 0 && S > 0 ? (p + S) / 2 : p > 0 ? p : S
		}),
		v = M(p => p.server.remoteState),
		C = M(p => p.server.connectionState),
		k = o.useMemo(() => {
			switch (C) {
				case F.Connected:
					return v;
				case F.Connecting:
				case F.Reconnecting:
				case F.SignalReconnecting:
				case null:
					return null;
				case F.Disconnected:
					return L.Halted
			}
		}, [C, v]),
		f = o.useMemo(() => a.find(p => p.userName === go)?.track, [a]),
		b = (VA(f, {
			bands: 1,
			loPass: 0,
			hiPass: 400
		})[0] ?? 0) * co,
		{
			voiceName: x
		} = bA();
	let B;
	return t && n ? B = "HELLO_TIBOR" : x === "shade" && (B = "ANGSTY_BLACK"), {
		remoteState: k,
		userVolume: b,
		isAdvanced: e,
		avgMag: u,
		cumulativeAudio: h,
		isDarkMode: A,
		standardBloopVolumes: d,
		overrideColor: B
	}
}

function po({
	className: A
}) {
	const {
		remoteState: e,
		userVolume: t,
		isAdvanced: s,
		avgMag: n,
		cumulativeAudio: i,
		isDarkMode: a,
		standardBloopVolumes: c,
		overrideColor: l
	} = fo(), [d, g] = o.useState(FA), {
		canvasSizeRef: m,
		handleCanvasSizeUpdate: u
	} = Ge(FA), h = o.useRef(void 0), v = o.useCallback(y => {
		g([y.width, y.height])
	}, []), C = o.useRef([0, 0, 0, 0]);
	o.useEffect(() => {
		e === L.Connecting && (C.current = [0, 0, 0, 0])
	}, [e]);
	const k = o.useRef(performance.now());
	o.useEffect(() => {
		const y = performance.now();
		e === L.Speaking && y - k.current > 50 && (k.current = y, C.current = C.current.map((q, K) => q + n[K]))
	}, [e, n]);
	const [f, b] = aA(iA(L.Listening, e)), [x, B] = aA(iA(L.Speaking, e)), [p, V] = aA(iA(L.Thinking, e)), [S, R] = aA(iA(L.Halted, e)), [N, AA] = o.useState(performance.now() / 1e3);
	o.useEffect(() => {
		const y = setInterval(() => {
			AA(performance.now() / 1e3)
		}, KA);
		return () => clearInterval(y)
	}, []);
	const T = o.useMemo(() => performance.now() / 1e3, []),
		[G, eA] = o.useState(1e5),
		P = o.useRef(e);
	o.useEffect(() => {
		e === L.Connecting ? eA(1e5) : P.current === L.Connecting && eA(N), P.current = e
	}, [e, N]);
	const w = rt({
			isAdvanced: s,
			overrideColor: l
		}),
		W = s ? n : c,
		tA = f === 1 || x === 1,
		U = ct({
			viewport: d,
			canvasSize: m.current,
			shouldMeasurePerf: tA,
			source: "VoiceMode"
		}),
		j = lt({
			shouldCalibrate: tA,
			viewport: d,
			initialScale: 1
		});
	return h.current = {
		time: N - T,
		micLevel: t,
		stateListen: f,
		listenTimestamp: Math.max(b - T, 0),
		stateThink: p,
		thinkTimestamp: Math.max(V - T, 0),
		stateSpeak: x,
		speakTimestamp: Math.max(B - T, 0),
		readyTimestamp: G - T,
		stateHalt: S,
		haltTimestamp: Math.max(R - T, 0),
		touchDownTimestamp: 0,
		touchUpTimestamp: 0,
		stateFailedToConnect: 0,
		failedToConnectTimestamp: 0,
		avgMag: W,
		cumulativeAudio: i ?? C.current,
		isNewBloop: !0,
		isAdvancedBloop: s,
		bloopColorMain: Array.from(w.bloopColorMain),
		bloopColorLow: Array.from(w.bloopColorLow),
		bloopColorMid: Array.from(w.bloopColorMid),
		bloopColorHigh: Array.from(w.bloopColorHigh),
		isDarkMode: a,
		screenScaleFactor: window.devicePixelRatio,
		viewport: d,
		silenceAmount: 0,
		silenceTimestamp: 0,
		fadeBloopWhileListening: !1
	}, r.jsx(dt, {
		className: cA("flex items-center justify-center", A),
		variablesRef: h,
		onViewportUpdate: v,
		textureImage: ht,
		textureName: "uTextureNoise",
		onGlAvailable: U,
		onCanvasSizeUpdate: u,
		scale: j,
		GLUniformsSetter: gt,
		vert: mt,
		frag: ut
	})
}
const Co = ({
	conversationId: A
}) => {
	const {
		getTracks: e
	} = dA(), t = e(), [s, n] = o.useState(!1), [i, a] = o.useState(!1), {
		voiceName: c
	} = bA(), l = _(), d = o.useCallback(() => {
		for (const b of t) b.origin === X.Local ? (a(b.isMuted), b.setMuted(!0)) : b.origin === X.Remote && b.setMuted(!0)
	}, [t]), g = o.useCallback(() => {
		for (const b of t) b.origin === X.Local ? i || b.setMuted(!1) : b.origin === X.Remote && b.setMuted(!1)
	}, [t, i]), m = o.useCallback(() => {
		O.voiceSelectionShown.click({
			voice: c
		}), d(), n(!0)
	}, [c, d]), u = () => {
		g(), n(!1)
	}, h = ft(), v = c === "shade", {
		alreadyTriggered: C
	} = pt(), k = h && !v && !C, f = o.useMemo(() => r.jsx($, {
		onClick: m,
		icon: Je,
		iconColor: "text-token-text-secondary",
		className: "h-[40px] w-[40px] bg-transparent hover:bg-black/10 active:bg-black/20 dark:bg-transparent dark:hover:bg-white/5 dark:active:bg-white/10",
		iconSize: "icon"
	}), [m]);
	return r.jsxs("div", {
		className: "relative h-[40px] w-[40px]",
		children: [k ? r.jsx(GA, {
			label: l.formatMessage({
				id: "SxYG4e",
				defaultMessage: "Talk to Monday (ugh)"
			}),
			children: f
		}) : f, s && r.jsx(Ct, {
			conversationId: A,
			onClose: u
		})]
	})
};
class Eo extends Worker {
	constructor(e, t) {
		const s = String(e);
		super(s.includes("://") && !s.startsWith(location.origin) ? URL.createObjectURL(new Blob([`import("${s}")`], {
			type: "text/javascript"
		})) : e, t)
	}
}

function ko(A = {}) {
	const [e, t] = o.useState(!1), [s, n] = o.useState(!1), [i, a] = o.useState(!1);
	let c = Et().microphoneTrack;
	const [l, d] = o.useState();
	A.trackRef && (c = A.trackRef.publication);
	const g = o.useCallback(async m => {
		if (m) {
			const {
				KrispNoiseFilter: u,
				isKrispNoiseFilterSupported: h
			} = await JA(async () => {
				const {
					KrispNoiseFilter: v,
					isKrispNoiseFilterSupported: C
				} = await import("./bcef2kukc614r4kn.js");
				return {
					KrispNoiseFilter: v,
					isKrispNoiseFilterSupported: C
				}
			}, []);
			if (!h()) {
				console.warn("Krisp noise filter is not supported in this browser");
				return
			}
			l || d(u(A.filterOptions))
		}
		t(u => (u !== m && n(!0), m))
	}, []);
	return o.useEffect(() => {
		var m;
		if (c && c.track instanceof kt && l) {
			const u = c.track.getProcessor();
			u && u.name === "livekit-noise-filter" ? (n(!0), u.setEnabled(e).finally(() => {
				n(!1), a(e)
			})) : !u && e && (n(!0), (m = c?.track) == null || m.setProcessor(l).then(() => l.setEnabled(e)).then(() => {
				a(!0)
			}).catch(h => {
				a(!1), console.error(h)
			}).finally(() => {
				n(!1)
			}))
		}
	}, [e, c, l]), {
		setNoiseFilterEnabled: g,
		isNoiseFilterEnabled: i,
		isNoiseFilterPending: s,
		processor: l
	}
}
const vo = o.memo(function() {
		const {
			setNoiseFilterEnabled: e
		} = ko();
		return o.useEffect(() => {
			e(!0)
		}, [e]), null
	}),
	bo = new Eo(new URL("https://cdn.oaistatic.com/assets/livekit-client.e2ee.worker-DK0iMXIf.js", import.meta.url), {
		type: "module"
	}),
	Bo = o.memo(function({
		children: e
	}) {
		const t = o.useRef({
				keyProvider: new vt
			}).current,
			[s, n] = o.useState(!1),
			{
				token: i,
				url: a,
				e2eeKey: c
			} = M(h => h.credentials),
			l = It(),
			d = M(h => h.isVoiceModeActive),
			g = M(h => h.audioInputDevice?.deviceId),
			m = ne(),
			u = m ? bt : Bt;
		return o.useEffect(() => {
			const h = i && a && c;
			!s && h ? t.keyProvider.setKey(c).then(() => {
				n(!0)
			}) : s && !h && n(!1)
		}, [i, a, c, s, t]), d ? r.jsx(Vt, {
			...l,
			connect: !0,
			token: i ?? void 0,
			serverUrl: a ?? void 0,
			audio: {
				deviceId: {
					ideal: g,
					exact: g
				},
				noiseSuppression: !0,
				echoCancellation: !0
			},
			options: {
				e2ee: {
					keyProvider: t.keyProvider,
					worker: bo
				}
			},
			children: r.jsxs(u, {
				children: [e, m || s && i && a ? r.jsx(St, {}) : null, s && i && a && r.jsx(Ot, {}), s && i && a && r.jsx(vo, {})]
			})
		}) : null
	}),
	So = Ve(() => JA(() => import("./k6mdtfh42rerge50.js"), __vite__mapDeps([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17])).then(A => A.VoiceModeDevPanel));

function Mo({
	conversationId: A
}) {
	const [e, t] = o.useState(!1), s = M(d => d.isVoiceModeActive), n = M(d => d.server.voiceConnectionQuality), i = M(d => d.screenshare != null), a = M(d => d.video != null), c = _();
	Jt();
	const l = $A({
		conversationId: A
	});
	return Qe(() => {
		s && l("electron-app-minimized")
	}), o.useEffect(() => {
		const d = new Nt;
		return s ? d.enable() : d.disable(), () => {
			d.disable()
		}
	}, [s]), r.jsxs(Bo, {
		conversationId: A,
		children: [r.jsx(z, {
			children: s ? r.jsx(D.div, {
				className: "bg-token-main-surface-primary fixed start-0 top-0 z-50 flex h-full w-full flex-col",
				initial: "hidden",
				animate: "visible",
				exit: "hidden",
				variants: pA,
				children: r.jsxs(D.div, {
					className: "relative h-full w-full",
					variants: pA,
					children: [r.jsxs(D.div, {
						variants: pA,
						className: "flex h-full w-full flex-col justify-between gap-6",
						children: [r.jsxs(D.div, {
							className: "relative mt-6 flex w-full justify-center",
							children: [r.jsx("div", {
								className: "flex w-full items-center justify-center",
								children: (i || a) && r.jsx(YA, {
									className: "h-16 w-16"
								})
							}), r.jsx("div", {
								className: "me-4",
								children: r.jsx(Co, {
									conversationId: A
								})
							})]
						}), r.jsxs("div", {
							className: "flex h-full min-h-0 items-center justify-center",
							children: [r.jsx(io, {
								children: r.jsx(YA, {
									className: "min-h-bloop min-w-bloop h-max w-max"
								})
							}), r.jsx(z, {
								children: e ? r.jsx(So, {
									conversationId: A
								}) : null
							})]
						}), r.jsx(D.div, {
							className: "mb-6 flex justify-center",
							children: r.jsx(Ao, {
								conversationId: A
							})
						})]
					}), !1]
				})
			}) : null
		}), n === qA.POOR && r.jsx("div", {
			className: "absolute start-1/2 top-6 z-50 -translate-x-1/2 transform",
			children: r.jsx("div", {
				className: "border-token-border-default bg-token-main-surface-primary inline-flex flex-col items-center rounded-full border px-6 py-3",
				children: r.jsx("span", {
					className: "text-token-text-secondary",
					children: c.formatMessage({
						id: "YE2Eng",
						defaultMessage: "Poor connection"
					})
				})
			})
		})]
	})
}
const pA = {
		hidden: {
			opacity: 0,
			transform: "blur(4px)"
		},
		visible: {
			transform: "blur(0px)",
			opacity: 1
		},
		exit: {
			opacity: 0,
			transform: "blur(4px)"
		}
	},
	To = Object.freeze(Object.defineProperty({
		__proto__: null,
		VoiceModeLayout: Mo
	}, Symbol.toStringTag, {
		value: "Module"
	}));
export {
	zt as u, To as v
};
//# sourceMappingURL=hw5jv58yyx4s64ok.js.map