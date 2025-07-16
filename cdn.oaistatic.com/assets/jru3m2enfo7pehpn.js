import {
	r as p,
	d as le,
	e as oe,
	f as ae,
	j as d,
	M as ce,
	A as de
} from "./fyeo2h7okrqcf3nz.js";
import {
	cx as ue,
	R as he,
	o as xe,
	B as pe,
	aN as ye,
	D as U,
	bE as me,
	bB as te,
	aS as ve,
	a9 as ge,
	b6 as fe,
	fL as be,
	cL as ne,
	H as Ee,
	hp as Ce,
	q as _e,
	Q as we
} from "./egb2c0f6p1ew61vt.js";
import {
	s as ke,
	r as Se,
	u as Me,
	c as De
} from "./cv2ja3m1kj318n5b.js";
import {
	C as Te
} from "./b5mw1mm1timwd209.js";
import {
	u as Ke
} from "./np62wv8wj4i0jtdl.js";
import "./f7j18j5u52u1pnnk.js";
import "./ixsisjuxwij5x7d3.js";
import "./f2cokc4vvw85wf3h.js";
import "./lqc3mxovgoy4h7eq.js";
import "./falvn1u1m9kfl56g.js";
import "./pc2givv05uuq8g6l.js";
import "./ia4gjlhup29rqu2j.js";
import "./ha8fmsbxx7xv171r.js";
import "./dlxldtpg3t60aqlu.js";

function Pe(s) {
	const {
		session: e
	} = ue();
	p.useEffect(() => {
		ke(s, e?.accessToken ?? null)
	}, [s, e?.accessToken])
}
const Le = (s, e) => {
		const t = async () => await he.safeGet("/internal/conversation/{conversation_id}/agent/state", {
			parameters: {
				path: {
					conversation_id: s
				}
			},
			intercomEventOnError: "fetch-error:agent-state:get",
			authOption: xe.SendIfAvailable
		}), {
			data: i,
			isLoading: o,
			isError: a,
			refetch: l
		} = le({
			queryKey: ["agent_state"],
			queryFn: async () => await t(),
			enabled: e,
			refetchOnReconnect: !0,
			refetchOnWindowFocus: !0
		});
		return {
			agentState: p.useMemo(() => i, [i]),
			data: i,
			refetch: l,
			isLoading: o,
			isError: a
		}
	},
	Re = ({
		handleEndControl: s,
		isConnecting: e
	}) => {
		const t = oe(),
			i = B.controlModeTitle,
			o = e ? B.connectingDescription : B.controlModeDescription;
		return d.jsxs("div", {
			className: "border-token-border-default relative z-10 flex w-full items-center justify-between gap-3 border-t px-7 py-6",
			style: {
				boxShadow: "0px -2px 8px 0px rgba(0, 0, 0, 0.05)"
			},
			children: [d.jsxs("div", {
				className: "flex flex-col",
				children: [d.jsx("span", {
					className: "text-token-text-primary font-medium",
					children: t.formatMessage(i)
				}), d.jsx("span", {
					className: "text-token-text-secondary text-sm",
					children: t.formatMessage(o)
				})]
			}), d.jsx(pe, {
				onClick: s,
				color: "primary",
				children: t.formatMessage(B.endControlButton)
			})]
		})
	},
	B = ae({
		connectingDescription: {
			id: "takeoverControlPanel.connectingDescription",
			defaultMessage: "Connecting…"
		},
		controlModeTitle: {
			id: "takeoverControlPanel.controlModeTitle",
			defaultMessage: "You’re controlling the browser"
		},
		controlModeDescription: {
			id: "takeoverControlPanel.controlModeDescription",
			defaultMessage: "ChatGPT won’t see or store anything you do while you’re here."
		},
		endControlButton: {
			id: "vnc.endControlButton",
			defaultMessage: "Finish controlling"
		}
	});
var b = b || {};
b.Keyboard = function(e) {
	var t = this,
		i = b.Keyboard._nextID++,
		o = "_GUAC_KEYBOARD_HANDLED_BY_" + i;
	this.onkeydown = null, this.onkeyup = null;
	var a = {
		keyupUnreliable: !1,
		altIsTypableOnly: !1,
		capsLockKeyupUnreliable: !1
	};
	navigator && navigator.platform && (navigator.platform.match(/ipad|iphone|ipod/i) ? a.keyupUnreliable = !0 : navigator.platform.match(/^mac/i) && (a.altIsTypableOnly = !0, a.capsLockKeyupUnreliable = !0));
	var l = function(n) {
			var f = this;
			this.keyCode = n ? n.which || n.keyCode : 0, this.keyIdentifier = n && n.keyIdentifier, this.key = n && n.key, this.location = n ? g(n) : 0, this.modifiers = n ? b.Keyboard.ModifierState.fromKeyboardEvent(n) : new b.Keyboard.ModifierState, this.timestamp = new Date().getTime(), this.defaultPrevented = !1, this.keysym = null, this.reliable = !1, this.getAge = function() {
				return new Date().getTime() - f.timestamp
			}
		},
		x = function(n) {
			l.call(this, n), this.keysym = O(this.key, this.location) || A(this.keyCode, this.location), this.keyupReliable = !a.keyupUnreliable, this.keysym && !$(this.keysym) && (this.reliable = !0), !this.keysym && Y(this.keyCode, this.keyIdentifier) && (this.keysym = O(this.keyIdentifier, this.location, this.modifiers.shift)), this.modifiers.meta && this.keysym !== 65511 && this.keysym !== 65512 ? this.keyupReliable = !1 : this.keysym === 65509 && a.capsLockKeyupUnreliable && (this.keyupReliable = !1);
			var f = !this.modifiers.ctrl && !a.altIsTypableOnly,
				c = !this.modifiers.alt;
			(c && this.modifiers.ctrl || f && this.modifiers.alt || this.modifiers.meta || this.modifiers.hyper) && (this.reliable = !0), M[this.keyCode] = this.keysym
		};
	x.prototype = new l;
	var v = function(n) {
		l.call(this, n), this.keysym = I(this.keyCode), this.reliable = !0
	};
	v.prototype = new l;
	var h = function(n) {
		l.call(this, n), this.keysym = A(this.keyCode, this.location) || O(this.key, this.location), t.pressed[this.keysym] || (this.keysym = M[this.keyCode] || this.keysym), this.reliable = !0
	};
	h.prototype = new l;
	var u = [],
		V = {
			8: [65288],
			9: [65289],
			12: [65291, 65291, 65291, 65461],
			13: [65293],
			16: [65505, 65505, 65506],
			17: [65507, 65507, 65508],
			18: [65513, 65513, 65027],
			19: [65299],
			20: [65509],
			27: [65307],
			32: [32],
			33: [65365, 65365, 65365, 65465],
			34: [65366, 65366, 65366, 65459],
			35: [65367, 65367, 65367, 65457],
			36: [65360, 65360, 65360, 65463],
			37: [65361, 65361, 65361, 65460],
			38: [65362, 65362, 65362, 65464],
			39: [65363, 65363, 65363, 65462],
			40: [65364, 65364, 65364, 65458],
			45: [65379, 65379, 65379, 65456],
			46: [65535, 65535, 65535, 65454],
			91: [65511],
			92: [65512],
			93: [65383],
			96: [65456],
			97: [65457],
			98: [65458],
			99: [65459],
			100: [65460],
			101: [65461],
			102: [65462],
			103: [65463],
			104: [65464],
			105: [65465],
			106: [65450],
			107: [65451],
			109: [65453],
			110: [65454],
			111: [65455],
			112: [65470],
			113: [65471],
			114: [65472],
			115: [65473],
			116: [65474],
			117: [65475],
			118: [65476],
			119: [65477],
			120: [65478],
			121: [65479],
			122: [65480],
			123: [65481],
			144: [65407],
			145: [65300],
			225: [65027]
		},
		S = {
			Again: [65382],
			AllCandidates: [65341],
			Alphanumeric: [65328],
			Alt: [65513, 65513, 65027],
			Attn: [64782],
			AltGraph: [65027],
			ArrowDown: [65364],
			ArrowLeft: [65361],
			ArrowRight: [65363],
			ArrowUp: [65362],
			Backspace: [65288],
			CapsLock: [65509],
			Cancel: [65385],
			Clear: [65291],
			Convert: [65313],
			Copy: [64789],
			Crsel: [64796],
			CrSel: [64796],
			CodeInput: [65335],
			Compose: [65312],
			Control: [65507, 65507, 65508],
			ContextMenu: [65383],
			Delete: [65535],
			Down: [65364],
			End: [65367],
			Enter: [65293],
			EraseEof: [64774],
			Escape: [65307],
			Execute: [65378],
			Exsel: [64797],
			ExSel: [64797],
			F1: [65470],
			F2: [65471],
			F3: [65472],
			F4: [65473],
			F5: [65474],
			F6: [65475],
			F7: [65476],
			F8: [65477],
			F9: [65478],
			F10: [65479],
			F11: [65480],
			F12: [65481],
			F13: [65482],
			F14: [65483],
			F15: [65484],
			F16: [65485],
			F17: [65486],
			F18: [65487],
			F19: [65488],
			F20: [65489],
			F21: [65490],
			F22: [65491],
			F23: [65492],
			F24: [65493],
			Find: [65384],
			GroupFirst: [65036],
			GroupLast: [65038],
			GroupNext: [65032],
			GroupPrevious: [65034],
			FullWidth: null,
			HalfWidth: null,
			HangulMode: [65329],
			Hankaku: [65321],
			HanjaMode: [65332],
			Help: [65386],
			Hiragana: [65317],
			HiraganaKatakana: [65319],
			Home: [65360],
			Hyper: [65517, 65517, 65518],
			Insert: [65379],
			JapaneseHiragana: [65317],
			JapaneseKatakana: [65318],
			JapaneseRomaji: [65316],
			JunjaMode: [65336],
			KanaMode: [65325],
			KanjiMode: [65313],
			Katakana: [65318],
			Left: [65361],
			Meta: [65511, 65511, 65512],
			ModeChange: [65406],
			NumLock: [65407],
			PageDown: [65366],
			PageUp: [65365],
			Pause: [65299],
			Play: [64790],
			PreviousCandidate: [65342],
			PrintScreen: [65377],
			Redo: [65382],
			Right: [65363],
			RomanCharacters: null,
			Scroll: [65300],
			Select: [65376],
			Separator: [65452],
			Shift: [65505, 65505, 65506],
			SingleCandidate: [65340],
			Super: [65515, 65515, 65516],
			Tab: [65289],
			UIKeyInputDownArrow: [65364],
			UIKeyInputEscape: [65307],
			UIKeyInputLeftArrow: [65361],
			UIKeyInputRightArrow: [65363],
			UIKeyInputUpArrow: [65362],
			Up: [65362],
			Undo: [65381],
			Win: [65511, 65511, 65512],
			Zenkaku: [65320],
			ZenkakuHankaku: [65322]
		},
		G = {
			65027: !0,
			65505: !0,
			65506: !0,
			65507: !0,
			65508: !0,
			65509: !0,
			65511: !0,
			65512: !0,
			65513: !0,
			65514: !0,
			65515: !0,
			65516: !0
		};
	this.modifiers = new b.Keyboard.ModifierState, this.pressed = {};
	var C = {},
		R = {},
		M = {},
		k = null,
		D = null,
		T = function(n, f) {
			return n ? n[f] || n[0] : null
		},
		$ = function(n) {
			return n >= 0 && n <= 255 || (n & 4294901760) === 16777216
		};

	function O(r, n, f) {
		if (!r) return null;
		var c, m = r.indexOf("U+");
		if (m >= 0) {
			var w = r.substring(m + 2);
			c = String.fromCharCode(parseInt(w, 16))
		} else if (r.length === 1 && n !== 3) c = r;
		else return T(S[r], n);
		f === !0 ? c = c.toUpperCase() : f === !1 && (c = c.toLowerCase());
		var E = c.charCodeAt(0);
		return I(E)
	}

	function z(r) {
		return r <= 31 || r >= 127 && r <= 159
	}

	function I(r) {
		return z(r) ? 65280 | r : r >= 0 && r <= 255 ? r : r >= 256 && r <= 1114111 ? 16777216 | r : null
	}

	function A(r, n) {
		return T(V[r], n)
	}
	var Y = function(n, f) {
		if (!f) return !1;
		var c = f.indexOf("U+");
		if (c === -1) return !0;
		var m = parseInt(f.substring(c + 2), 16);
		return n !== m || n >= 65 && n <= 90 || n >= 48 && n <= 57
	};
	this.press = function(r) {
		if (r !== null) {
			if (!t.pressed[r] && (t.pressed[r] = !0, t.onkeydown)) {
				var n = t.onkeydown(r);
				return R[r] = n, window.clearTimeout(k), window.clearInterval(D), G[r] || (k = window.setTimeout(function() {
					D = window.setInterval(function() {
						t.onkeyup(r), t.onkeydown(r)
					}, 50)
				}, 500)), n
			}
			return R[r] || !1
		}
	}, this.release = function(r) {
		t.pressed[r] && (delete t.pressed[r], delete C[r], window.clearTimeout(k), window.clearInterval(D), r !== null && t.onkeyup && t.onkeyup(r))
	}, this.type = function(n) {
		for (var f = 0; f < n.length; f++) {
			var c = n.codePointAt ? n.codePointAt(f) : n.charCodeAt(f),
				m = I(c);
			t.press(m), t.release(m)
		}
	}, this.reset = function() {
		for (var r in t.pressed) t.release(parseInt(r));
		u = []
	};
	var _ = function(n, f, c) {
			var m = c.modifiers[n],
				w = t.modifiers[n],
				E;
			if (f.indexOf(c.keysym) === -1) {
				if (w && m === !1)
					for (E = 0; E < f.length; E++) t.release(f[E]);
				else if (!w && m) {
					for (E = 0; E < f.length; E++)
						if (t.pressed[f[E]]) return;
					var ee = f[0];
					c.keysym && (C[ee] = !0), t.press(ee)
				}
			}
		},
		K = function(n) {
			_("alt", [65513, 65514, 65027], n), _("shift", [65505, 65506], n), _("ctrl", [65507, 65508], n), _("meta", [65511, 65512], n), _("hyper", [65515, 65516], n), t.modifiers = n.modifiers
		},
		q = function() {
			for (var n in t.pressed)
				if (!C[n]) return !1;
			return !0
		};

	function N() {
		var r = j();
		if (!r) return !1;
		var n;
		do n = r, r = j(); while (r !== null);
		return q() && t.reset(), n.defaultPrevented
	}
	var J = function(n) {
			!t.modifiers.ctrl || !t.modifiers.alt || n >= 65 && n <= 90 || n >= 97 && n <= 122 || (n <= 255 || (n & 4278190080) === 16777216) && (t.release(65507), t.release(65508), t.release(65513), t.release(65514))
		},
		j = function() {
			var n = u[0];
			if (!n) return null;
			if (n instanceof x) {
				var f = null,
					c = [];
				if (n.keysym === 65511 || n.keysym === 65512) {
					if (u.length === 1) return null;
					if (u[1].keysym !== n.keysym) {
						if (!u[1].modifiers.meta) return u.shift()
					} else if (u[1] instanceof x) return u.shift()
				}
				if (n.reliable ? (f = n.keysym, c = u.splice(0, 1)) : u[1] instanceof v ? (f = u[1].keysym, c = u.splice(0, 2)) : u[1] && (f = n.keysym, c = u.splice(0, 1)), c.length > 0) {
					if (K(n), f) {
						J(f);
						var m = !t.press(f);
						M[n.keyCode] = f, n.keyupReliable || t.release(f);
						for (var w = 0; w < c.length; w++) c[w].defaultPrevented = m
					}
					return n
				}
			} else if (n instanceof h && !a.keyupUnreliable) {
				var f = n.keysym;
				if (f) t.release(f), delete M[n.keyCode], n.defaultPrevented = !0;
				else return t.reset(), n;
				return K(n), u.shift()
			} else return u.shift();
			return null
		},
		g = function(n) {
			return "location" in n ? n.location : "keyLocation" in n ? n.keyLocation : 0
		},
		y = function(n) {
			return n[o] ? !1 : (n[o] = !0, !0)
		},
		X = function(r) {
			if (t.onkeydown && y(r)) {
				var n = new x(r);
				n.keyCode !== 229 && (u.push(n), N() && r.preventDefault())
			}
		},
		Q = function(r) {
			!t.onkeydown && !t.onkeyup || y(r) && (u.push(new v(r)), N() && r.preventDefault())
		},
		Z = function(r) {
			t.onkeyup && y(r) && (r.preventDefault(), u.push(new h(r)), N())
		};
	this.listenTo = function(n) {
		n.addEventListener("keydown", X.bind(this), !0), n.addEventListener("keypress", Q.bind(this), !0), n.addEventListener("keyup", Z.bind(this), !0)
	}, e && t.listenTo(e), this.interpretKeyEvent = function(r) {
		switch (r.type) {
			case "keydown":
				X(r);
				break;
			case "keyup":
				Z(r);
				break;
			case "keypress":
				Q(r);
				break
		}
	}, this.newKeyEvent = r => new l(r), this.newKeydownEvent = r => new x(r), this.newKeyupEvent = r => new h(r)
};
b.Keyboard._nextID = 0;
b.Keyboard.ModifierState = function() {
	this.shift = !1, this.ctrl = !1, this.alt = !1, this.meta = !1, this.hyper = !1
};
b.Keyboard.ModifierState.fromKeyboardEvent = function(s) {
	var e = new b.Keyboard.ModifierState;
	return e.shift = s.shiftKey, e.ctrl = s.ctrlKey, e.alt = s.altKey, e.meta = s.metaKey, s.getModifierState && (e.hyper = s.getModifierState("OS") || s.getModifierState("Super") || s.getModifierState("Hyper") || s.getModifierState("Win")), e
};
const Oe = b.Keyboard,
	re = 10,
	se = 19;
var H = (s => (s.OBSERVE = "observe", s.CONTROL = "control", s))(H || {}),
	P = (s => (s.MESSAGE = "message", s.ERROR = "error", s.MODE_CHANGE = "modechange", s.STREAMING = "streaming", s.DATA_OPENED = "dataopened", s.DATA_CLOSED = "dataclosed", s.CONNECTED = "connected", s.DISCONNECTED = "disconnected", s))(P || {});
const W = s => typeof s == "object" && s !== null && !Array.isArray(s),
	Ie = s => W(s) && s.event === "control/clipboard" && typeof s.text == "string",
	Ne = s => W(s) && s.event === "control/locked",
	Ue = s => W(s) && s.event === "control/release",
	Ae = s => Ie(s) || Ne(s) || Ue(s) || W(s),
	je = 118,
	Be = 200;
class L {
	constructor(e = "", t = null) {
		this.stream = null, this.mode = "observe", this.peerConnection = null, this.dataChannel = null, this._additionalHeaders = null, this._invertScroll = !0, this._onPeerDidResolve = [], this._onPeerDidRejection = [], this._peerTimeout = 0, this._listeners = {
			connected: [],
			disconnected: [],
			message: [],
			error: [],
			dataopened: [],
			dataclosed: [],
			streaming: [],
			modechange: []
		}, this.keyboard = new Oe, this.keyEventSource = null, this.mouseEventSource = null, this._wheelThrottle = !1, this._clipboardSyncInProgress = !1, this._clipboardSyncWaiter = null, this._keyEventBuffer = [], this._lastClipboardText = null, this._handlePeerTrack = i => {
			if (i.track.kind !== "video") return;
			const [o] = i.streams;
			o && (this._handleStream(o), this.addEventListener("dataopened", () => this._handlePeerDidResolve()))
		}, this._peerURL = e, this._additionalHeaders = t, this.keyboard.onkeydown = this.keyDown.bind(this), this.keyboard.onkeyup = this.keyUp.bind(this), this._sendEvent = this.sendEvent.bind(this), this._onContextMenu = this.onContextMenu.bind(this)
	}
	get peerURL() {
		return this._peerURL
	}
	set peerURL(e) {
		this.disconnect(), this._peerURL = e
	}
	get additionalHeaders() {
		return this._additionalHeaders
	}
	set additionalHeaders(e) {
		this.disconnect(), this._additionalHeaders = e
	}
	connect(e = 2e3) {
		return setTimeout(() => this._createPeer()), this._peerTimeout || (this._peerTimeout = window.setTimeout(() => this._handlePeerDidRejection(new Error("The connection timed‑out while waiting for the peer to respond.")), e)), new Promise((t, i) => {
			this._onPeerDidResolve.push(t), this._onPeerDidRejection.push(i)
		})
	}
	disconnect() {
		this.dataChannel?.close(), this.dataChannel = null, this.peerConnection?.close(), this.peerConnection = null, this._emit("disconnected", this)
	}
	setMode(e) {
		switch (e) {
			case "control":
				this._requestControl();
				break;
			case "observe":
				this._releaseControl();
				break;
			default:
				throw new Error(`Invalid client mode "${e}" specified.`)
		}
	}
	sendData(e, t) {
		if (this.mode !== "control" || !this.dataChannel) return;
		if (e === "clipboard") {
			const {
				text: a
			} = t;
			this.dataChannel.send(JSON.stringify({
				event: "control/clipboard",
				text: a
			}));
			return
		}
		let i, o;
		switch (e) {
			case "mousemove": {
				const {
					x: a,
					y: l
				} = t;
				i = new ArrayBuffer(7), o = new DataView(i), o.setUint8(0, 1), o.setUint16(1, 4, !0), o.setUint16(3, a, !0), o.setUint16(5, l, !0);
				break
			}
			case "wheel": {
				const {
					x: a,
					y: l
				} = t;
				i = new ArrayBuffer(7), o = new DataView(i), o.setUint8(0, 2), o.setUint16(1, 4, !0), o.setInt16(3, a, !0), o.setInt16(5, l, !0);
				break
			}
			case "keydown":
			case "mousedown": {
				const {
					key: a
				} = t;
				i = new ArrayBuffer(11), o = new DataView(i), o.setUint8(0, 3), o.setUint16(1, 8, !0), o.setBigUint64(3, BigInt(a), !0);
				break
			}
			case "keyup":
			case "mouseup": {
				const {
					key: a
				} = t;
				i = new ArrayBuffer(11), o = new DataView(i), o.setUint8(0, 4), o.setUint16(1, 8, !0), o.setBigUint64(3, BigInt(a), !0);
				break
			}
			default:
				console.warn("Unknown event", e);
				return
		}
		this.dataChannel.send(i)
	}
	mouseMoved(e, t) {
		this.sendData("mousemove", t ? L.getScaledOffset(e, t) : e)
	}
	mouseDown(e) {
		this.sendData("mousedown", {
			key: e + 1
		})
	}
	mouseUp(e) {
		this.sendData("mouseup", {
			key: e + 1
		})
	}
	sendMouseEvent(e) {
		switch (e.type) {
			case "mousedown":
				this.mouseDown(e.button);
				break;
			case "mouseup":
				this.mouseUp(e.button);
				break;
			case "mousemove":
				this.mouseMoved({
					x: e.offsetX,
					y: e.offsetY
				}, e.currentTarget instanceof HTMLVideoElement ? e.currentTarget : void 0);
				break
		}
	}
	sendWheelEvent(e) {
		let {
			deltaX: t,
			deltaY: i
		} = e;
		e.deltaMode !== 0 && (t *= se, i *= se), this._invertScroll && (t *= -1, i *= -1), t = Math.min(Math.max(t, -10), re), i = Math.min(Math.max(i, -10), re), this.mouseMoved({
			x: e.offsetX,
			y: e.offsetY
		}, e.currentTarget instanceof HTMLVideoElement ? e.currentTarget : void 0), this._wheelThrottle || (this._wheelThrottle = !0, this.sendData("wheel", {
			x: t,
			y: i
		}), setTimeout(() => {
			this._wheelThrottle = !1
		}, 100))
	}
	_isPasteKey(e) {
		return e === je && (this.keyboard.modifiers.meta || this.keyboard.modifiers.ctrl)
	}
	async _startSyncClipboard() {
		if (document.hasFocus() && !this._clipboardSyncInProgress) {
			console.log("startSyncClipboard"), this._clipboardSyncInProgress = !0;
			try {
				const e = await navigator.clipboard.readText();
				e !== this._lastClipboardText && (this._lastClipboardText = e, this.dataChannel?.send(JSON.stringify({
					event: "control/clipboard",
					text: e
				})), console.log("clipboard sent to remote"), setTimeout(() => {
					this._clipboardSyncWaiter && (console.log("clipboard timeout"), this._clipboardSyncWaiter(), this._clipboardSyncWaiter = null)
				}, Be), await new Promise(t => {
					this._clipboardSyncWaiter = t
				}), console.log("clipboard updated"))
			} finally {
				this._flushKeyEvents(), this._clipboardSyncInProgress = !1
			}
		}
	}
	async keyDown(e) {
		this._pushKeyEvent({
			type: "keydown",
			key: L.getPlatformKeyCode(e)
		}), this._isPasteKey(e) && await this._startSyncClipboard(), !this._clipboardSyncInProgress && this._flushKeyEvents()
	}
	async keyUp(e) {
		this._pushKeyEvent({
			type: "keyup",
			key: L.getPlatformKeyCode(e)
		}), !this._clipboardSyncInProgress && this._flushKeyEvents()
	}
	_pushKeyEvent(e) {
		this._keyEventBuffer.push(e)
	}
	_flushKeyEvents() {
		for (const e of this._keyEventBuffer) this.sendData(e.type, {
			key: e.key
		});
		this._keyEventBuffer = []
	}
	sendKeyEvent(e) {
		this.mode !== "observe" && this.keyboard.interpretKeyEvent(e)
	}
	sendEvent(e) {
		e.preventDefault(), e instanceof WheelEvent ? this.sendWheelEvent(e) : e instanceof MouseEvent ? this.sendMouseEvent(e) : e instanceof KeyboardEvent && this.sendKeyEvent(e)
	}
	onContextMenu(e) {
		e.preventDefault()
	}
	setKeyEventSource(e) {
		const t = ["keydown", "keypress", "keyup"];
		if (this.keyEventSource)
			for (const i of t) this.keyEventSource.removeEventListener(i, this._sendEvent, !0);
		if (e) {
			if (typeof e == "string" ? this.keyEventSource = document.querySelector(e) : this.keyEventSource = e, !this.keyEventSource) {
				console.warn("[NekoClient] Invalid key event source.");
				return
			}
			for (const i of t) this.keyEventSource.addEventListener(i, this._sendEvent, !0)
		}
	}
	setMouseEventSource(e) {
		const t = ["mousemove", "mousedown", "mouseup", "wheel"];
		if (this.mouseEventSource) {
			for (const i of t) this.mouseEventSource.removeEventListener(i, this._sendEvent);
			this.mouseEventSource.removeEventListener("contextmenu", this._onContextMenu)
		}
		if (e) {
			if (typeof e == "string" ? this.mouseEventSource = document.querySelector(e) : this.mouseEventSource = e, !this.mouseEventSource) {
				console.warn("[NekoClient] Invalid mouse event source.");
				return
			}
			for (const i of t) this.mouseEventSource.addEventListener(i, this._sendEvent);
			this.mouseEventSource.addEventListener("contextmenu", this._onContextMenu)
		}
	}
	addEventListener(e, t) {
		this._listeners[e].push(t)
	}
	removeEventListener(e, t) {
		const i = this._listeners[e].indexOf(t);
		i !== -1 && this._listeners[e].splice(i, 1)
	}
	_emit(e, ...t) {
		for (const i of this._listeners[e]) i(...t)
	}
	_handleDataChannelDidOpen() {
		this.dataChannel && (this._emit("dataopened", this.dataChannel), this.addEventListener("streaming", () => this._emit("connected", this)))
	}
	_handleDataChannelDidClose() {
		this._emit("dataclosed")
	}
	_handleMessage(e) {
		console.log("_handleMessage", e);
		let t, i;
		try {
			typeof e.data == "string" && (t = JSON.parse(e.data))
		} catch (o) {
			i = o
		}
		if (i || !Ae(t)) {
			this._emit("error", i ? i instanceof Error ? i : new Error(`Failed to parse message: ${i}`) : new Error(`Invalid message payload: ${e.data}`));
			return
		}
		switch (this._emit("message", t), t.event) {
			case "control/clipboard":
				console.log("_handleMessage - control/clipboard"), navigator.clipboard.writeText(t.text).catch(o => {
					console.log("control/clipboard error"), this._handleError(o instanceof Error ? o : new Error(`Pasteboard Error: ${o}`))
				}).finally(() => {
					console.log("control/clipboard finally"), this._clipboardSyncWaiter && (console.log("control/clipboard finally - _clipboardSyncWaiter", this._clipboardSyncWaiter), this._clipboardSyncWaiter(), this._clipboardSyncWaiter = null)
				});
				break;
			case "control/locked":
				this._handleModeDidChange("control");
				break;
			case "control/release":
				this._handleModeDidChange("observe");
				break
		}
	}
	_handleModeDidChange(e) {
		this.mode = e, this._emit("modechange", e)
	}
	_handlePeerDidResolve() {
		this._emit("connected", this), setTimeout(() => {
			this._listeners.dataopened.length = 0, this._listeners.streaming.length = 0
		}), clearTimeout(this._peerTimeout), this._peerTimeout = 0, this._onPeerDidRejection.length = 0, this._onPeerDidResolve.forEach(e => e(this)), this._onPeerDidResolve.length = 0
	}
	_handlePeerDidRejection(e) {
		this._onPeerDidResolve.length = 0, this._onPeerDidRejection.forEach(t => t(e)), this._onPeerDidRejection.length = 0, this._handleError(e)
	}
	_handleStream(e) {
		this.stream = e, this._emit("streaming", e)
	}
	_handleError(e) {
		this._emit("error", e)
	}
	_createPeer() {
		console.assert(this.peerConnection === null, "WARNING: Client already connected"), this.peerConnection = new RTCPeerConnection, this.peerConnection.ontrack = this._handlePeerTrack, this.peerConnection.addTransceiver("audio"), this.peerConnection.addTransceiver("video"), this.dataChannel = this.peerConnection.createDataChannel(""), this.dataChannel.onmessage = this._handleMessage.bind(this), this.dataChannel.onopen = this._handleDataChannelDidOpen.bind(this), this.dataChannel.onclose = this._handleDataChannelDidClose.bind(this), this.dataChannel.onerror = e => this._handleError("error" in e && e.error instanceof Error ? e.error : new Error(`Unknown Data Channel Error: ${JSON.stringify(e)}`)), this.peerConnection.createOffer().then(e => (this.peerConnection?.setLocalDescription(e), fetch(this._peerURL, {
			method: "POST",
			body: e.sdp ?? "",
			headers: {
				"Content-Type": "application/sdp",
				...this._additionalHeaders ?? {}
			}
		}))).then(e => e.text()).then(e => {
			this.peerConnection?.setRemoteDescription({
				type: "answer",
				sdp: e
			}).catch(this._handlePeerDidRejection.bind(this))
		}).catch(this._handlePeerDidRejection.bind(this))
	}
	_requestControl() {
		this.dataChannel?.send(JSON.stringify({
			event: "control/request"
		}))
	}
	_releaseControl() {
		this.dataChannel?.send(JSON.stringify({
			event: "control/release"
		}))
	}
	static get _isMacOS() {
		return /(Mac|iPhone|iPod|iPad)/i.test(navigator.platform)
	}
	static getPlatformKeyCode(e) {
		if (!L._isMacOS) return e;
		switch (e) {
			case 65511:
				return 65507;
			case 65515:
				return 65513;
			case 65516:
				return 65515;
			case 65513:
				return 65406;
			case 65514:
				return 65027;
			default:
				return e
		}
	}
	static getScaledOffset({
		x: e,
		y: t
	}, i) {
		const {
			width: o,
			height: a
		} = i.getBoundingClientRect(), {
			videoWidth: l,
			videoHeight: x
		} = i;
		return {
			x: Math.round(l / o * e),
			y: Math.round(x / a * t)
		}
	}
}
const Fe = 2e4;
class He {
	nekoClient = null;
	videoElement = null;
	initialized = !1;
	init(e, t, i, o, a, l, x) {
		if (this.initialized) return;
		this.initialized = !0, this.videoElement = o;
		const v = ye();
		return delete v["cf-timezone"], this.nekoClient = new L(t, {
			Authorization: `Bearer ${i}`,
			"Content-Type": "application/sdp",
			...v
		}), this.nekoClient.addEventListener(P.STREAMING, h => {
			this.videoElement && (this.videoElement.srcObject = h, a())
		}), this.nekoClient.addEventListener(P.DATA_OPENED, () => {
			this.setMode(x ?? H.CONTROL)
		}), this.nekoClient.addEventListener(P.MODE_CHANGE, h => {
			this.nekoClient && h === H.CONTROL && (this.nekoClient.setKeyEventSource(document), this.nekoClient.setMouseEventSource(this.videoElement))
		}), this.nekoClient.addEventListener(P.DISCONNECTED, h => {
			h.setMouseEventSource(null), h.setKeyEventSource(null), this.initialized = !1
		}), this.nekoClient.addEventListener(P.ERROR, h => {
			U.addError("[NekoClient] Error", {
				cause: h,
				conversationId: e
			}), this.nekoClient?.disconnect(), l(h)
		}), this.connect()
	}
	connect() {
		return this.nekoClient?.connect(Fe)
	}
	disconnect() {
		this.initialized = !1, this.nekoClient?.disconnect()
	}
	setMode(e) {
		this.nekoClient?.setMode(e)
	}
	setKeyEventSource(e) {
		this.nekoClient?.setKeyEventSource(e)
	}
	setMouseEventSource(e) {
		this.nekoClient?.setMouseEventSource(e)
	}
	addEventListener(e, t) {
		this.nekoClient?.addEventListener(e, t)
	}
	getMode() {
		return this.nekoClient?.mode
	}
}
const ie = new He;

function We(s) {
	const [e, t] = p.useState({
		status: s ? "loading" : "error",
		src: ""
	});
	return p.useEffect(() => {
		if (!s) {
			t({
				status: "error",
				src: ""
			});
			return
		}
		let i = !1;
		return (async () => {
			t({
				status: "loading",
				src: ""
			});
			try {
				await new Promise((a, l) => {
					const x = new Image;
					x.onload = () => a(), x.onerror = () => l(new Error("failed")), x.src = s
				}), i || t({
					status: "loaded",
					src: s
				})
			} catch {
				i || t({
					status: "error",
					src: ""
				})
			}
		})(), () => {
			i = !0
		}
	}, [s]), {
		status: e.status,
		src: e.src,
		isLoaded: e.status === "loaded",
		isError: e.status === "error"
	}
}
const Ve = ({
	isOpen: s,
	onClose: e,
	onRetry: t,
	errorMessage: i
}) => {
	const o = oe();
	let a = o.formatMessage(F.connectionErrorDescription);
	return d.jsx(fe, {
		testId: "modal-takeover-connection-error",
		isOpen: s,
		onClose: e,
		icon: be,
		title: o.formatMessage(F.connectionErrorTitle),
		description: a,
		type: "warning",
		rootClassName: "z-50",
		onEscapeKeyDown: l => {
			l.stopPropagation(), l.preventDefault()
		},
		shouldIgnoreClickOutside: !0,
		secondaryButton: d.jsx(ne.Button, {
			onClick: e,
			title: o.formatMessage(F.okButton)
		}),
		primaryButton: d.jsx(ne.Button, {
			onClick: t,
			title: o.formatMessage(F.retryButton)
		})
	})
};

function Ge(s) {
	Le(s, !1);
	const e = ve(ge(), "3843674407");
	let t;
	return e ? t = "https://realtime.chatgpt.com/v1/cua" : t = "https://transceiver.api.openai.com/v1/cua", `${t}?cid=${s}`
}
const $e = ({
		clientThreadId: s,
		serverThreadId: e,
		token: t,
		onClose: i
	}) => {
		const o = p.useRef(null),
			[a, l] = p.useState(!0),
			[x, v] = p.useState(!1),
			[h, u] = p.useState(!1),
			[V, S] = p.useState(!1),
			[G, C] = p.useState(null),
			R = me(s, g => Ee.findNode(g, y => y.message.content.content_type === te.ComputerOutput)),
			M = R?.message.content.content_type === te.ComputerOutput ? R?.message.content.screenshot : void 0,
			k = Ge(e),
			D = p.useCallback(g => {
				U.addError("Error triggered by neko client:", g), C(g.message), S(!0), v(!0)
			}, []),
			T = p.useCallback(async g => {
				l(!0), v(!1);
				try {
					o.current && k && await ie.init(e, k, g, o.current, () => {
						u(!0)
					}, D, H.CONTROL)
				} catch (y) {
					y instanceof Error ? (U.addError("Error initializing neko client:", y), C(y.message)) : (U.addError("Error initializing neko client:", {
						error: y
					}), C("An unknown error occurred")), S(!0), v(!0)
				} finally {
					l(!1)
				}
			}, [D, e, k]);
		p.useEffect(() => {
			t && T(t)
		}, [t, T]), p.useEffect(() => {
			const g = y => {
				y.preventDefault()
			};
			if (h) return window.addEventListener("beforeunload", g), () => window.removeEventListener("beforeunload", g)
		}, [h]);

		function $() {
			ie.disconnect(), i({
				startNewTurn: !0
			})
		}

		function O() {
			S(!1), C(null), t && T(t)
		}

		function z() {
			S(!1), C(null), i({
				startNewTurn: !1
			})
		}
		const I = !x && !h,
			A = Ke(M, e),
			{
				isLoaded: Y,
				src: _
			} = We(A),
			K = "64px",
			{
				bar: q,
				ratio: N,
				vw: J,
				vh: j
			} = {
				bar: "93px",
				ratio: "4/3",
				vw: `calc(100vw - ${K} * 2)`,
				vh: `calc(100dvh - ${K} * 2)`
			};
		return d.jsxs("div", {
			className: `flex h-full w-full flex-col items-center justify-center p-[${K}]`,
			children: [d.jsxs("div", {
				className: "bg-token-bg-primary flex flex-col items-center justify-center overflow-hidden rounded-lg shadow-lg",
				style: {
					width: `min(${J}, calc((${j} - ${q}) * ${N}))`
				},
				children: [d.jsxs("div", {
					className: "group relative aspect-[4/3] w-full flex-shrink-0 overflow-hidden bg-gray-50",
					children: [Y && _ && d.jsx("img", {
						src: _,
						alt: "",
						className: "absolute inset-0 h-full w-full blur"
					}), d.jsx("video", {
						ref: o,
						className: "absolute inset-0 h-full w-full object-contain",
						autoPlay: !0,
						playsInline: !0,
						muted: !0
					}), I && d.jsx("div", {
						className: "absolute inset-0 flex items-center justify-center",
						children: d.jsx(Te, {
							size: 36
						})
					})]
				}), d.jsx(Re, {
					handleEndControl: $,
					isConnecting: a
				})]
			}), !1, d.jsx(Ve, {
				isOpen: V,
				onClose: z,
				onRetry: O,
				errorMessage: G
			})]
		})
	},
	F = ae({
		retryButton: {
			id: "vnc.retryButton",
			defaultMessage: "Retry"
		},
		okButton: {
			id: "vnc.okButton",
			defaultMessage: "OK"
		},
		connectionErrorTitle: {
			id: "vnc.connectionErrorTitle",
			defaultMessage: "Could not connect to virtual browser"
		},
		connectionErrorDescription: {
			id: "vnc.connectionErrorDescription",
			defaultMessage: "There was a problem connecting to the remote browser. Try again later."
		},
		controlModalTitle: {
			id: "vnc.controlModalTitle",
			defaultMessage: "You're in control"
		},
		controlModalDescription: {
			id: "vnc.controlModalDescription",
			defaultMessage: "You’re controlling ChatGPT’s remote browser. While you’re in control, ChatGPT won’t see any data or information you enter."
		},
		controlModalContinueButton: {
			id: "vnc.controlModalContinueButton",
			defaultMessage: "Continue"
		},
		cancelButton: {
			id: "vnc.cancelButton",
			defaultMessage: "Cancel"
		}
	}),
	ze = ({
		clientThreadId: s,
		serverThreadId: e,
		token: t,
		isOpen: i,
		onClose: o
	}) => d.jsx(fe, {
		testId: "modal-vnc-viewer-content",
		type: "success",
		size: "fullscreen",
		isOpen: i,
		onClose: () => o({
			startNewTurn: !1
		}),
		title: d.jsx(ce, {
			id: "vnc.message.contentModalTitle",
			defaultMessage: "Virtual browser"
		}),
		shouldIgnoreClickOutside: !0,
		onEscapeKeyDown: a => {
			a.stopPropagation(), a.preventDefault()
		},
		visuallyHiddenHeader: !0,
		className: "bg-token-bg-primary/40! backdrop-blur-sm",
		children: e && t && d.jsx($e, {
			clientThreadId: s,
			serverThreadId: e,
			token: t,
			onClose: a => o(a)
		})
	}),
	Ye = ({
		clientThreadId: s
	}) => {
		Pe(s);
		const {
			isOpen: e,
			token: t
		} = Me(), i = _e(), o = we(s), a = e ? d.jsx(ze, {
			clientThreadId: s,
			serverThreadId: o,
			token: t,
			isOpen: e,
			onClose: l => De(i, l)
		}) : null;
		return d.jsx(de, {
			children: a
		}, s)
	},
	lt = s => {
		const e = p.useRef(null);
		return d.jsx(Ce, {
			ref: e,
			onError: (t, i) => {
				Se(), setTimeout(() => {
					e.current?.resetErrorBoundary()
				}), U.addError(t, {
					componentStack: i
				})
			},
			name: "vnc-focused-view",
			children: d.jsx(Ye, {
				...s
			})
		})
	};
export {
	lt as VNCFocusedViewManager
};
//# sourceMappingURL=jru3m2enfo7pehpn.js.map