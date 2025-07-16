import {
	fM as b,
	bS as ee
} from "./egb2c0f6p1ew61vt.js";
import {
	hO as I,
	hP as E,
	hQ as $,
	hR as _,
	hS as w,
	hT as V,
	hU as p,
	hV as F,
	hW as Q,
	hX as te,
	hY as ne,
	hZ as W
} from "./f7j18j5u52u1pnnk.js";
import "./fyeo2h7okrqcf3nz.js";
var z;
(e => {
	e.VERSION_INFO = [{
		version: 0,
		size: 32
	}], e.CURRENT_VERSION = e.VERSION_INFO[e.VERSION_INFO.length - 1];

	function s(n) {
		return I.bytes(e.CURRENT_VERSION.size).add(I.forString(n.accessToken)).add(I.forString(n.idToken))
	}
	e.measure = s;

	function o(n, t) {
		n.setString(0, t.accessToken), n.setString(8, t.idToken), n.setF64(16, t.expiresTimestampMsSince1970)
	}
	e.encode = o;

	function R(n, t) {
		return {
			accessToken: E(n.getString(0)),
			idToken: E(n.getString(8)),
			expiresTimestampMsSince1970: E(n.getF64(16))
		}
	}
	e.decode = R
})(z || (z = {}));
var X;
(e => {
	function s(R) {
		if (R === "justLoggedInAccessToken") return 0;
		if (R === "reloadPageIfLoggedOut") return 1;
		if (R === "fullTokenToSessionConversion") return 2;
		throw new $
	}
	e.encode = s;

	function o(R) {
		switch (R) {
			case 0:
				return "justLoggedInAccessToken";
			case 1:
				return "reloadPageIfLoggedOut";
			case 2:
				return "fullTokenToSessionConversion";
			default:
				return "justLoggedInAccessToken"
		}
	}
	e.decode = o
})(X || (X = {}));
class Y {
	static interfaceName = "web.bridge.AuthHandler";
	static interfaceVersion = 0
}(e => {
	let s;
	(t => {
		t.VERSION_INFO = [{
			version: 0,
			size: 8
		}], t.CURRENT_VERSION = t.VERSION_INFO[t.VERSION_INFO.length - 1];

		function c(N) {
			return I.bytes(t.CURRENT_VERSION.size)
		}
		t.measure = c;

		function i(N, S) {}
		t.encode = i;

		function d(N, S) {
			return {}
		}
		t.decode = d
	})(s = e.AuthHandler_HandleMissingSessionAuth_Params || (e.AuthHandler_HandleMissingSessionAuth_Params = {}));
	let o;
	(t => {
		t.VERSION_INFO = [{
			version: 0,
			size: 8
		}], t.CURRENT_VERSION = t.VERSION_INFO[t.VERSION_INFO.length - 1];

		function c(N) {
			return I.bytes(t.CURRENT_VERSION.size)
		}
		t.measure = c;

		function i(N, S) {}
		t.encode = i;

		function d(N, S) {
			return {}
		}
		t.decode = d
	})(o = e.AuthHandler_RecordAvailableSessionAuth_Params || (e.AuthHandler_RecordAvailableSessionAuth_Params = {}));
	class R {
		constructor(c) {
			this._endpoint = new _(c.endpointState, !0), this._version = 0
		}
		static create() {
			const [c, i] = w.createChannel(e);
			return [new R(c), i]
		}
		static createToBrowser() {
			const [c, i] = this.create();
			return Mojo.bindInterface(e.interfaceName, i.pipe.rawHandle), c
		}
		handleMissingSessionAuth() {
			const c = {};
			this._endpoint.send(V.encode(0, p.None, s, c))
		}
		recordAvailableSessionAuth() {
			const c = {};
			this._endpoint.send(V.encode(1, p.None, o, c))
		}
		_endpoint;
		_version
	}
	e.Proxy = R;
	class n extends F {
		constructor() {
			super(e)
		}
		onDisconnect;
		bind(c, i) {
			this.addReceiver(i, async (d, N) => {
				switch (d.header.ordinal) {
					case 0: {
						d.decode(s), c.handleMissingSessionAuth();
						break
					}
					case 1: {
						d.decode(o), c.recordAvailableSessionAuth();
						break
					}
					default:
						d.header.expectsResponse && N.sendUnimplementedResponse(d.header.requestID, d.header.ordinal)
				}
				return Promise.resolve()
			}, () => {
				this.onDisconnect && this.onDisconnect(c)
			})
		}
		createRemote(c) {
			const [i, d] = w.createChannel(e);
			return this.bind(c, d), i
		}
	}
	e.Dispatcher = n
})(Y || (Y = {}));
class B {
	static interfaceName = "web.bridge.AuthStateController";
	static interfaceVersion = 0
}(e => {
	let s;
	(n => {
		n.VERSION_INFO = [{
			version: 0,
			size: 24
		}], n.CURRENT_VERSION = n.VERSION_INFO[n.VERSION_INFO.length - 1];

		function t(d) {
			return I.bytes(n.CURRENT_VERSION.size).add(I.forObject(z, d.authToken))
		}
		n.measure = t;

		function c(d, N) {
			d.setObjectIndirect(z, 0, N.authToken), d.setEnumValue(X, 8, N.behavior)
		}
		n.encode = c;

		function i(d, N) {
			return {
				authToken: E(d.getObjectIndirect(z, 0)),
				behavior: E(d.getEnumValue(X, 8))
			}
		}
		n.decode = i
	})(s = e.AuthStateController_RefreshSessionContext_Params || (e.AuthStateController_RefreshSessionContext_Params = {}));
	class o {
		constructor(t) {
			this._endpoint = new _(t.endpointState, !0), this._version = 0
		}
		static create() {
			const [t, c] = w.createChannel(e);
			return [new o(t), c]
		}
		static createToBrowser() {
			const [t, c] = this.create();
			return Mojo.bindInterface(e.interfaceName, c.pipe.rawHandle), t
		}
		refreshSessionContext(t, c) {
			const i = {
				authToken: t,
				behavior: c
			};
			this._endpoint.send(V.encode(0, p.None, s, i))
		}
		_endpoint;
		_version
	}
	e.Proxy = o;
	class R extends F {
		constructor() {
			super(e)
		}
		onDisconnect;
		bind(t, c) {
			this.addReceiver(c, async (i, d) => {
				switch (i.header.ordinal) {
					case 0: {
						const N = i.decode(s);
						t.refreshSessionContext(N.authToken, N.behavior);
						break
					}
					default:
						i.header.expectsResponse && d.sendUnimplementedResponse(i.header.requestID, i.header.ordinal)
				}
				return Promise.resolve()
			}, () => {
				this.onDisconnect && this.onDisconnect(t)
			})
		}
		createRemote(t) {
			const [c, i] = w.createChannel(e);
			return this.bind(t, i), c
		}
	}
	e.Dispatcher = R
})(B || (B = {}));
var m;
(e => {
	e.VERSION_INFO = [{
		version: 0,
		size: 32
	}], e.CURRENT_VERSION = e.VERSION_INFO[e.VERSION_INFO.length - 1];

	function s(n) {
		return I.bytes(e.CURRENT_VERSION.size).add(I.forString(n.conduitToken))
	}
	e.measure = s;

	function o(n, t) {
		n.setEnumValue(J, 0, t.prepareState), n.setF64(8, t.lastPrepareTimestampMsSince1970), n.setString(16, t.conduitToken)
	}
	e.encode = o;

	function R(n, t) {
		return {
			prepareState: E(n.getEnumValue(J, 0)),
			lastPrepareTimestampMsSince1970: E(n.getF64(8)),
			conduitToken: E(n.getString(16))
		}
	}
	e.decode = R
})(m || (m = {}));
var q;
(e => {
	e.VERSION_INFO = [{
		version: 0,
		size: 16
	}], e.CURRENT_VERSION = e.VERSION_INFO[e.VERSION_INFO.length - 1];

	function s(n) {
		return I.bytes(e.CURRENT_VERSION.size)
	}
	e.measure = s;

	function o(n, t) {
		n.setEnumValue(K, 0, t.selectedTab)
	}
	e.encode = o;

	function R(n, t) {
		return {
			selectedTab: E(n.getEnumValue(K, 0))
		}
	}
	e.decode = R
})(q || (q = {}));
var x;
(e => {
	e.VERSION_INFO = [{
		version: 0,
		size: 56
	}], e.CURRENT_VERSION = e.VERSION_INFO[e.VERSION_INFO.length - 1];

	function s(n) {
		return I.bytes(e.CURRENT_VERSION.size).add(I.forString(n.id)).add(I.forString(n.name)).add(I.forString(n.mimeType))
	}
	e.measure = s;

	function o(n, t) {
		let c = 0;
		n.setString(0, t.id), n.setI64(8, t.size), n.setString(16, t.name), n.setString(24, t.mimeType), t.width !== null && t.width !== void 0 && (c |= 1, n.setI32(36, t.width)), t.height !== null && t.height !== void 0 && (c |= 2, n.setI32(40, t.height)), t.fileTokenSize !== null && t.fileTokenSize !== void 0 && (c |= 4, n.setI32(44, t.fileTokenSize)), n.setU8(32, c)
	}
	e.encode = o;

	function R(n, t) {
		const c = n.getU8(32),
			i = (c & 1) != 0,
			d = (c & 2) != 0,
			N = (c & 4) != 0;
		return {
			id: E(n.getString(0)),
			size: E(n.getI64(8)),
			name: E(n.getString(16)),
			mimeType: E(n.getString(24)),
			...i ? {
				width: E(n.getI32(36))
			} : {},
			...d ? {
				height: E(n.getI32(40))
			} : {},
			...N ? {
				fileTokenSize: E(n.getI32(44))
			} : {}
		}
	}
	e.decode = R
})(x || (x = {}));
var Z;
(e => {
	function s(R) {
		if (R === "mainPage") return 0;
		if (R === "sidebar") return 1;
		throw new $
	}
	e.encode = s;

	function o(R) {
		switch (R) {
			case 0:
				return "mainPage";
			case 1:
				return "sidebar";
			default:
				throw new $
		}
	}
	e.decode = o
})(Z || (Z = {}));
var J;
(e => {
	function s(R) {
		if (R === "none") return 0;
		if (R === "sent") return 1;
		if (R === "success") return 2;
		if (R === "failure") return 3;
		throw new $
	}
	e.encode = s;

	function o(R) {
		switch (R) {
			case 0:
				return "none";
			case 1:
				return "sent";
			case 2:
				return "success";
			case 3:
				return "failure";
			default:
				return "none"
		}
	}
	e.decode = o
})(J || (J = {}));
var K;
(e => {
	function s(R) {
		if (R === "answer") return 0;
		if (R === "web") return 1;
		if (R === "images") return 2;
		if (R === "videos") return 3;
		throw new $
	}
	e.encode = s;

	function o(R) {
		switch (R) {
			case 0:
				return "answer";
			case 1:
				return "web";
			case 2:
				return "images";
			case 3:
				return "videos";
			default:
				return "answer"
		}
	}
	e.decode = o
})(K || (K = {}));
class v {
	static interfaceName = "web.bridge.ConversationController";
	static interfaceVersion = 0
}(e => {
	let s;
	(r => {
		r.VERSION_INFO = [{
			version: 0,
			size: 16
		}], r.CURRENT_VERSION = r.VERSION_INFO[r.VERSION_INFO.length - 1];

		function h(u) {
			return I.bytes(r.CURRENT_VERSION.size)
		}
		r.measure = h;

		function f(u, O) {
			u.setEnumValue(Z, 0, O.windowStyle)
		}
		r.encode = f;

		function a(u, O) {
			return {
				windowStyle: E(u.getEnumValue(Z, 0))
			}
		}
		r.decode = a
	})(s = e.ConversationController_SetWindowStyle_Params || (e.ConversationController_SetWindowStyle_Params = {}));
	let o;
	(r => {
		r.VERSION_INFO = [{
			version: 0,
			size: 16
		}], r.CURRENT_VERSION = r.VERSION_INFO[r.VERSION_INFO.length - 1];

		function h(u) {
			return I.bytes(r.CURRENT_VERSION.size).add(I.forString(u.modelSlug))
		}
		r.measure = h;

		function f(u, O) {
			u.setString(0, O.modelSlug)
		}
		r.encode = f;

		function a(u, O) {
			return {
				modelSlug: E(u.getString(0))
			}
		}
		r.decode = a
	})(o = e.ConversationController_SetModel_Params || (e.ConversationController_SetModel_Params = {}));
	let R;
	(r => {
		r.VERSION_INFO = [{
			version: 0,
			size: 8
		}], r.CURRENT_VERSION = r.VERSION_INFO[r.VERSION_INFO.length - 1];

		function h(u) {
			return I.bytes(r.CURRENT_VERSION.size)
		}
		r.measure = h;

		function f(u, O) {}
		r.encode = f;

		function a(u, O) {
			return {}
		}
		r.decode = a
	})(R = e.ConversationController_NewConversation_Params || (e.ConversationController_NewConversation_Params = {}));
	let n;
	(r => {
		r.VERSION_INFO = [{
			version: 0,
			size: 16
		}], r.CURRENT_VERSION = r.VERSION_INFO[r.VERSION_INFO.length - 1];

		function h(u) {
			return I.bytes(r.CURRENT_VERSION.size).add(I.forString(u.remoteConversationId))
		}
		r.measure = h;

		function f(u, O) {
			u.setString(0, O.remoteConversationId)
		}
		r.encode = f;

		function a(u, O) {
			return {
				remoteConversationId: E(u.getString(0))
			}
		}
		r.decode = a
	})(n = e.ConversationController_LoadConversation_Params || (e.ConversationController_LoadConversation_Params = {}));
	let t;
	(r => {
		r.VERSION_INFO = [{
			version: 0,
			size: 32
		}], r.CURRENT_VERSION = r.VERSION_INFO[r.VERSION_INFO.length - 1];

		function h(u) {
			return I.bytes(r.CURRENT_VERSION.size).add(I.forString(u.prompt)).add(I.forStringArray(u.systemHints)).add(I.forString(u.modelSlug))
		}
		r.measure = h;

		function f(u, O) {
			u.setString(0, O.prompt), u.setStringArray(8, O.systemHints), u.setString(16, O.modelSlug)
		}
		r.encode = f;

		function a(u, O) {
			return {
				prompt: E(u.getString(0)),
				systemHints: E(Q(u.getStringArray(8))),
				modelSlug: E(u.getString(16))
			}
		}
		r.decode = a
	})(t = e.ConversationController_RequestCompletion_Params || (e.ConversationController_RequestCompletion_Params = {}));
	let c;
	(r => {
		r.VERSION_INFO = [{
			version: 0,
			size: 24
		}], r.CURRENT_VERSION = r.VERSION_INFO[r.VERSION_INFO.length - 1];

		function h(u) {
			return I.bytes(r.CURRENT_VERSION.size).add(I.forString(u.userMessage ?? null)).add(I.forString(u.targetedReply ?? null))
		}
		r.measure = h;

		function f(u, O) {
			u.setString(0, O.userMessage ?? null), u.setString(8, O.targetedReply ?? null)
		}
		r.encode = f;

		function a(u, O) {
			const U = u.getString(0),
				G = u.getString(8);
			return {
				...U !== null ? {
					userMessage: U
				} : {},
				...G !== null ? {
					targetedReply: G
				} : {}
			}
		}
		r.decode = a
	})(c = e.ConversationController_PopulatePrompt_Params || (e.ConversationController_PopulatePrompt_Params = {}));
	let i;
	(r => {
		r.VERSION_INFO = [{
			version: 0,
			size: 32
		}], r.CURRENT_VERSION = r.VERSION_INFO[r.VERSION_INFO.length - 1];

		function h(u) {
			return I.bytes(r.CURRENT_VERSION.size).add(I.forString(u.url)).add(I.forString(u.title)).add(I.forString(u.base64favicon ?? null))
		}
		r.measure = h;

		function f(u, O) {
			u.setString(0, O.url), u.setString(8, O.title), u.setString(16, O.base64favicon ?? null)
		}
		r.encode = f;

		function a(u, O) {
			const U = u.getString(16);
			return {
				url: E(u.getString(0)),
				title: E(u.getString(8)),
				...U !== null ? {
					base64favicon: U
				} : {}
			}
		}
		r.decode = a
	})(i = e.ConversationController_UpdateContext_Params || (e.ConversationController_UpdateContext_Params = {}));
	let d;
	(r => {
		r.VERSION_INFO = [{
			version: 0,
			size: 16
		}], r.CURRENT_VERSION = r.VERSION_INFO[r.VERSION_INFO.length - 1];

		function h(u) {
			return I.bytes(r.CURRENT_VERSION.size).add(I.forObject(m, u.details))
		}
		r.measure = h;

		function f(u, O) {
			u.setObjectIndirect(m, 0, O.details)
		}
		r.encode = f;

		function a(u, O) {
			return {
				details: E(u.getObjectIndirect(m, 0))
			}
		}
		r.decode = a
	})(d = e.ConversationController_PrepareConversation_Params || (e.ConversationController_PrepareConversation_Params = {}));
	let N;
	(r => {
		r.VERSION_INFO = [{
			version: 0,
			size: 16
		}], r.CURRENT_VERSION = r.VERSION_INFO[r.VERSION_INFO.length - 1];

		function h(u) {
			return I.bytes(r.CURRENT_VERSION.size).add(I.forObject(q, u.options))
		}
		r.measure = h;

		function f(u, O) {
			u.setObjectIndirect(q, 0, O.options)
		}
		r.encode = f;

		function a(u, O) {
			return {
				options: E(u.getObjectIndirect(q, 0))
			}
		}
		r.decode = a
	})(N = e.ConversationController_SetSuperWidgetOptions_Params || (e.ConversationController_SetSuperWidgetOptions_Params = {}));
	let S;
	(r => {
		r.VERSION_INFO = [{
			version: 0,
			size: 16
		}], r.CURRENT_VERSION = r.VERSION_INFO[r.VERSION_INFO.length - 1];

		function h(u) {
			return I.bytes(r.CURRENT_VERSION.size).add(I.forObjectArray(x, u.attachments))
		}
		r.measure = h;

		function f(u, O) {
			u.setObjectArray(x, 0, O.attachments)
		}
		r.encode = f;

		function a(u, O) {
			return {
				attachments: E(Q(u.getObjectArray(x, 0)))
			}
		}
		r.decode = a
	})(S = e.ConversationController_SetAttachments_Params || (e.ConversationController_SetAttachments_Params = {}));
	let g;
	(r => {
		r.VERSION_INFO = [{
			version: 0,
			size: 16
		}], r.CURRENT_VERSION = r.VERSION_INFO[r.VERSION_INFO.length - 1];

		function h(u) {
			return I.bytes(r.CURRENT_VERSION.size).add(I.forString(u.to))
		}
		r.measure = h;

		function f(u, O) {
			u.setString(0, O.to)
		}
		r.encode = f;

		function a(u, O) {
			return {
				to: E(u.getString(0))
			}
		}
		r.decode = a
	})(g = e.ConversationController_Navigate_Params || (e.ConversationController_Navigate_Params = {}));
	class T {
		constructor(h) {
			this._endpoint = new _(h.endpointState, !0), this._version = 0
		}
		static create() {
			const [h, f] = w.createChannel(e);
			return [new T(h), f]
		}
		static createToBrowser() {
			const [h, f] = this.create();
			return Mojo.bindInterface(e.interfaceName, f.pipe.rawHandle), h
		}
		setWindowStyle(h) {
			const f = {
				windowStyle: h
			};
			this._endpoint.send(V.encode(0, p.None, s, f))
		}
		setModel(h) {
			const f = {
				modelSlug: h
			};
			this._endpoint.send(V.encode(1, p.None, o, f))
		}
		newConversation() {
			const h = {};
			this._endpoint.send(V.encode(2, p.None, R, h))
		}
		loadConversation(h) {
			const f = {
				remoteConversationId: h
			};
			this._endpoint.send(V.encode(3, p.None, n, f))
		}
		requestCompletion(h, f, a) {
			const u = {
				prompt: h,
				systemHints: f,
				modelSlug: a
			};
			this._endpoint.send(V.encode(4, p.None, t, u))
		}
		populatePrompt(h, f) {
			const a = {
				userMessage: h,
				targetedReply: f
			};
			this._endpoint.send(V.encode(5, p.None, c, a))
		}
		updateContext(h, f, a) {
			const u = {
				url: h,
				title: f,
				base64favicon: a
			};
			this._endpoint.send(V.encode(6, p.None, i, u))
		}
		prepareConversation(h) {
			const f = {
				details: h
			};
			this._endpoint.send(V.encode(7, p.None, d, f))
		}
		setSuperWidgetOptions(h) {
			const f = {
				options: h
			};
			this._endpoint.send(V.encode(8, p.None, N, f))
		}
		setAttachments(h) {
			const f = {
				attachments: h
			};
			this._endpoint.send(V.encode(9, p.None, S, f))
		}
		navigate(h) {
			const f = {
				to: h
			};
			this._endpoint.send(V.encode(10, p.None, g, f))
		}
		_endpoint;
		_version
	}
	e.Proxy = T;
	class l extends F {
		constructor() {
			super(e)
		}
		onDisconnect;
		bind(h, f) {
			this.addReceiver(f, async (a, u) => {
				switch (a.header.ordinal) {
					case 0: {
						const O = a.decode(s);
						h.setWindowStyle(O.windowStyle);
						break
					}
					case 1: {
						const O = a.decode(o);
						h.setModel(O.modelSlug);
						break
					}
					case 2: {
						a.decode(R), h.newConversation();
						break
					}
					case 3: {
						const O = a.decode(n);
						h.loadConversation(O.remoteConversationId);
						break
					}
					case 4: {
						const O = a.decode(t);
						h.requestCompletion(O.prompt, O.systemHints, O.modelSlug);
						break
					}
					case 5: {
						const O = a.decode(c);
						h.populatePrompt(O.userMessage, O.targetedReply);
						break
					}
					case 6: {
						const O = a.decode(i);
						h.updateContext(O.url, O.title, O.base64favicon);
						break
					}
					case 7: {
						const O = a.decode(d);
						h.prepareConversation(O.details);
						break
					}
					case 8: {
						const O = a.decode(N);
						h.setSuperWidgetOptions(O.options);
						break
					}
					case 9: {
						const O = a.decode(S);
						h.setAttachments(O.attachments);
						break
					}
					case 10: {
						const O = a.decode(g);
						h.navigate(O.to);
						break
					}
					default:
						a.header.expectsResponse && u.sendUnimplementedResponse(a.header.requestID, a.header.ordinal)
				}
				return Promise.resolve()
			}, () => {
				this.onDisconnect && this.onDisconnect(h)
			})
		}
		createRemote(h) {
			const [f, a] = w.createChannel(e);
			return this.bind(h, a), f
		}
	}
	e.Dispatcher = l
})(v || (v = {}));
class P {
	static interfaceName = "web.bridge.ConversationSidebarController";
	static interfaceVersion = 0
}(e => {
	let s;
	(n => {
		n.VERSION_INFO = [{
			version: 0,
			size: 8
		}], n.CURRENT_VERSION = n.VERSION_INFO[n.VERSION_INFO.length - 1];

		function t(d) {
			return I.bytes(n.CURRENT_VERSION.size)
		}
		n.measure = t;

		function c(d, N) {}
		n.encode = c;

		function i(d, N) {
			return {}
		}
		n.decode = i
	})(s = e.ConversationSidebarController_OpenSidebar_Params || (e.ConversationSidebarController_OpenSidebar_Params = {}));
	class o {
		constructor(t) {
			this._endpoint = new _(t.endpointState, !0), this._version = 0
		}
		static create() {
			const [t, c] = w.createChannel(e);
			return [new o(t), c]
		}
		static createToBrowser() {
			const [t, c] = this.create();
			return Mojo.bindInterface(e.interfaceName, c.pipe.rawHandle), t
		}
		openSidebar() {
			const t = {};
			this._endpoint.send(V.encode(0, p.None, s, t))
		}
		_endpoint;
		_version
	}
	e.Proxy = o;
	class R extends F {
		constructor() {
			super(e)
		}
		onDisconnect;
		bind(t, c) {
			this.addReceiver(c, async (i, d) => {
				switch (i.header.ordinal) {
					case 0: {
						i.decode(s), t.openSidebar();
						break
					}
					default:
						i.header.expectsResponse && d.sendUnimplementedResponse(i.header.requestID, i.header.ordinal)
				}
				return Promise.resolve()
			}, () => {
				this.onDisconnect && this.onDisconnect(t)
			})
		}
		createRemote(t) {
			const [c, i] = w.createChannel(e);
			return this.bind(t, i), c
		}
	}
	e.Dispatcher = R
})(P || (P = {}));
class C {
	static interfaceName = "web.bridge.GenericInterface";
	static interfaceVersion = 0
}(e => {
	let s;
	(t => {
		t.VERSION_INFO = [{
			version: 0,
			size: 16
		}], t.CURRENT_VERSION = t.VERSION_INFO[t.VERSION_INFO.length - 1];

		function c(N) {
			return I.bytes(t.CURRENT_VERSION.size).add(I.forString(N.request))
		}
		t.measure = c;

		function i(N, S) {
			N.setString(0, S.request)
		}
		t.encode = i;

		function d(N, S) {
			return {
				request: E(N.getString(0))
			}
		}
		t.decode = d
	})(s = e.GenericInterface_AcceptMessage_Params || (e.GenericInterface_AcceptMessage_Params = {}));
	let o;
	(t => {
		t.VERSION_INFO = [{
			version: 0,
			size: 16
		}], t.CURRENT_VERSION = t.VERSION_INFO[t.VERSION_INFO.length - 1];

		function c(N) {
			return I.bytes(t.CURRENT_VERSION.size).add(I.forString(N.response ?? null))
		}
		t.measure = c;

		function i(N, S) {
			N.setString(0, S.response ?? null)
		}
		t.encode = i;

		function d(N, S) {
			const g = N.getString(0);
			return {
				...g !== null ? {
					response: g
				} : {}
			}
		}
		t.decode = d
	})(o = e.GenericInterface_AcceptMessage_ResponseParams || (e.GenericInterface_AcceptMessage_ResponseParams = {}));
	class R {
		constructor(c) {
			this._endpoint = new _(c.endpointState, !0), this._version = 0
		}
		static create() {
			const [c, i] = w.createChannel(e);
			return [new R(c), i]
		}
		static createToBrowser() {
			const [c, i] = this.create();
			return Mojo.bindInterface(e.interfaceName, i.pipe.rawHandle), c
		}
		async acceptMessage(c) {
			const i = {
				request: c
			};
			return (await this._endpoint.sendAndAwaitResponse(V.encode(0, p.None, s, i))).decode(o).response
		}
		_endpoint;
		_version
	}
	e.Proxy = R;
	class n extends F {
		constructor() {
			super(e)
		}
		onDisconnect;
		bind(c, i) {
			this.addReceiver(i, async (d, N) => {
				switch (d.header.ordinal) {
					case 0: {
						const S = d.decode(s),
							g = c.acceptMessage(S.request),
							T = N.createResponder(o, 0, d.header.requestID),
							l = await g;
						T({
							response: l
						});
						break
					}
					default:
						d.header.expectsResponse && N.sendUnimplementedResponse(d.header.requestID, d.header.ordinal)
				}
				return Promise.resolve()
			}, () => {
				this.onDisconnect && this.onDisconnect(c)
			})
		}
		createRemote(c) {
			const [i, d] = w.createChannel(e);
			return this.bind(c, d), i
		}
	}
	e.Dispatcher = n
})(C || (C = {}));
class L {
	static interfaceName = "web.bridge.LinkHandler";
	static interfaceVersion = 0
}(e => {
	let s;
	(n => {
		n.VERSION_INFO = [{
			version: 0,
			size: 24
		}], n.CURRENT_VERSION = n.VERSION_INFO[n.VERSION_INFO.length - 1];

		function t(d) {
			return I.bytes(n.CURRENT_VERSION.size).add(I.forString(d.url)).add(I.forString(d.target))
		}
		n.measure = t;

		function c(d, N) {
			d.setString(0, N.url), d.setString(8, N.target)
		}
		n.encode = c;

		function i(d, N) {
			return {
				url: E(d.getString(0)),
				target: E(d.getString(8))
			}
		}
		n.decode = i
	})(s = e.LinkHandler_HandleLink_Params || (e.LinkHandler_HandleLink_Params = {}));
	class o {
		constructor(t) {
			this._endpoint = new _(t.endpointState, !0), this._version = 0
		}
		static create() {
			const [t, c] = w.createChannel(e);
			return [new o(t), c]
		}
		static createToBrowser() {
			const [t, c] = this.create();
			return Mojo.bindInterface(e.interfaceName, c.pipe.rawHandle), t
		}
		handleLink(t, c) {
			const i = {
				url: t,
				target: c
			};
			this._endpoint.send(V.encode(0, p.None, s, i))
		}
		_endpoint;
		_version
	}
	e.Proxy = o;
	class R extends F {
		constructor() {
			super(e)
		}
		onDisconnect;
		bind(t, c) {
			this.addReceiver(c, async (i, d) => {
				switch (i.header.ordinal) {
					case 0: {
						const N = i.decode(s);
						t.handleLink(N.url, N.target);
						break
					}
					default:
						i.header.expectsResponse && d.sendUnimplementedResponse(i.header.requestID, i.header.ordinal)
				}
				return Promise.resolve()
			}, () => {
				this.onDisconnect && this.onDisconnect(t)
			})
		}
		createRemote(t) {
			const [c, i] = w.createChannel(e);
			return this.bind(t, i), c
		}
	}
	e.Dispatcher = R
})(L || (L = {}));
class A {
	static interfaceName = "web.bridge.DesktopSidebarController";
	static interfaceVersion = 0
}(e => {
	let s;
	(c => {
		c.VERSION_INFO = [{
			version: 0,
			size: 8
		}], c.CURRENT_VERSION = c.VERSION_INFO[c.VERSION_INFO.length - 1];

		function i(S) {
			return I.bytes(c.CURRENT_VERSION.size)
		}
		c.measure = i;

		function d(S, g) {}
		c.encode = d;

		function N(S, g) {
			return {}
		}
		c.decode = N
	})(s = e.DesktopSidebarController_CloseSidebar_Params || (e.DesktopSidebarController_CloseSidebar_Params = {}));
	let o;
	(c => {
		c.VERSION_INFO = [{
			version: 0,
			size: 8
		}], c.CURRENT_VERSION = c.VERSION_INFO[c.VERSION_INFO.length - 1];

		function i(S) {
			return I.bytes(c.CURRENT_VERSION.size)
		}
		c.measure = i;

		function d(S, g) {}
		c.encode = d;

		function N(S, g) {
			return {}
		}
		c.decode = N
	})(o = e.DesktopSidebarController_CanHideHeader_Params || (e.DesktopSidebarController_CanHideHeader_Params = {}));
	let R;
	(c => {
		c.VERSION_INFO = [{
			version: 0,
			size: 16
		}], c.CURRENT_VERSION = c.VERSION_INFO[c.VERSION_INFO.length - 1];

		function i(S) {
			return I.bytes(c.CURRENT_VERSION.size)
		}
		c.measure = i;

		function d(S, g) {
			let T = 0;
			g.canHideHeader && (T |= 1), S.setU8(0, T)
		}
		c.encode = d;

		function N(S, g) {
			return {
				canHideHeader: (S.getU8(0) & 1) != 0
			}
		}
		c.decode = N
	})(R = e.DesktopSidebarController_CanHideHeader_ResponseParams || (e.DesktopSidebarController_CanHideHeader_ResponseParams = {}));
	class n {
		constructor(i) {
			this._endpoint = new _(i.endpointState, !0), this._version = 0
		}
		static create() {
			const [i, d] = w.createChannel(e);
			return [new n(i), d]
		}
		static createToBrowser() {
			const [i, d] = this.create();
			return Mojo.bindInterface(e.interfaceName, d.pipe.rawHandle), i
		}
		closeSidebar() {
			const i = {};
			this._endpoint.send(V.encode(0, p.None, s, i))
		}
		async canHideHeader() {
			const i = {};
			return (await this._endpoint.sendAndAwaitResponse(V.encode(1, p.None, o, i))).decode(R).canHideHeader
		}
		_endpoint;
		_version
	}
	e.Proxy = n;
	class t extends F {
		constructor() {
			super(e)
		}
		onDisconnect;
		bind(i, d) {
			this.addReceiver(d, async (N, S) => {
				switch (N.header.ordinal) {
					case 0: {
						N.decode(s), i.closeSidebar();
						break
					}
					case 1: {
						N.decode(o);
						const g = i.canHideHeader(),
							T = S.createResponder(R, 1, N.header.requestID),
							l = await g;
						T({
							canHideHeader: l
						});
						break
					}
					default:
						N.header.expectsResponse && S.sendUnimplementedResponse(N.header.requestID, N.header.ordinal)
				}
				return Promise.resolve()
			}, () => {
				this.onDisconnect && this.onDisconnect(i)
			})
		}
		createRemote(i) {
			const [d, N] = w.createChannel(e);
			return this.bind(i, N), d
		}
	}
	e.Dispatcher = t
})(A || (A = {}));
var j;
(e => {
	e.VERSION_INFO = [{
		version: 0,
		size: 8
	}], e.CURRENT_VERSION = e.VERSION_INFO[e.VERSION_INFO.length - 1];

	function s(n) {
		return I.bytes(e.CURRENT_VERSION.size)
	}
	e.measure = s;

	function o(n, t) {}
	e.encode = o;

	function R(n, t) {
		return {}
	}
	e.decode = R
})(j || (j = {}));
var D;
(e => {
	e.VERSION_INFO = [{
		version: 0,
		size: 48
	}], e.CURRENT_VERSION = e.VERSION_INFO[e.VERSION_INFO.length - 1];

	function s(n) {
		return I.bytes(e.CURRENT_VERSION.size).add(I.forString(n.id)).add(I.forString(n.fileid)).add(I.forString(n.name)).add(I.forString(n.mimetype))
	}
	e.measure = s;

	function o(n, t) {
		n.setString(0, t.id), n.setString(8, t.fileid), n.setString(16, t.name), n.setU32(24, t.size), n.setString(32, t.mimetype)
	}
	e.encode = o;

	function R(n, t) {
		return {
			id: E(n.getString(0)),
			fileid: E(n.getString(8)),
			name: E(n.getString(16)),
			size: E(n.getU32(24)),
			mimetype: E(n.getString(32))
		}
	}
	e.decode = R
})(D || (D = {}));
var M;
(e => {
	e.VERSION_INFO = [{
		version: 0,
		size: 32
	}], e.CURRENT_VERSION = e.VERSION_INFO[e.VERSION_INFO.length - 1];

	function s(n) {
		return I.bytes(e.CURRENT_VERSION.size).add(I.forString(n.assetPointer))
	}
	e.measure = s;

	function o(n, t) {
		n.setString(0, t.assetPointer), n.setU32(8, t.sizeBytes), n.setU32(12, t.width), n.setU32(16, t.height)
	}
	e.encode = o;

	function R(n, t) {
		return {
			assetPointer: E(n.getString(0)),
			sizeBytes: E(n.getU32(8)),
			width: E(n.getU32(12)),
			height: E(n.getU32(16))
		}
	}
	e.decode = R
})(M || (M = {}));
var k;
(e => {
	e.VERSION_INFO = [{
		version: 0,
		size: 32
	}], e.CURRENT_VERSION = e.VERSION_INFO[e.VERSION_INFO.length - 1];

	function s(n) {
		return I.bytes(e.CURRENT_VERSION.size).add(I.forString(n.content ?? null)).add(I.forObjectArray(D, n.files ?? null)).add(I.forObjectArray(M, n.imageAssetPointers ?? null))
	}
	e.measure = s;

	function o(n, t) {
		n.setString(0, t.content ?? null), n.setObjectArray(D, 8, t.files ?? null), n.setObjectArray(M, 16, t.imageAssetPointers ?? null)
	}
	e.encode = o;

	function R(n, t) {
		const c = n.getString(0),
			i = Q(n.getObjectArray(D, 8)),
			d = Q(n.getObjectArray(M, 16));
		return {
			...c !== null ? {
				content: c
			} : {},
			...i !== null ? {
				files: i
			} : {},
			...d !== null ? {
				imageAssetPointers: d
			} : {}
		}
	}
	e.decode = R
})(k || (k = {}));
class H {
	static interfaceName = "web.bridge.WhisperContentProvider";
	static interfaceVersion = 0
}(e => {
	let s;
	(t => {
		t.VERSION_INFO = [{
			version: 0,
			size: 16
		}], t.CURRENT_VERSION = t.VERSION_INFO[t.VERSION_INFO.length - 1];

		function c(N) {
			return I.bytes(t.CURRENT_VERSION.size).add(I.forObject(j, N.options ?? null))
		}
		t.measure = c;

		function i(N, S) {
			N.setObjectIndirect(j, 0, S.options ?? null)
		}
		t.encode = i;

		function d(N, S) {
			const g = N.getObjectIndirect(j, 0);
			return {
				...g !== null ? {
					options: g
				} : {}
			}
		}
		t.decode = d
	})(s = e.WhisperContentProvider_GetWhisperContent_Params || (e.WhisperContentProvider_GetWhisperContent_Params = {}));
	let o;
	(t => {
		t.VERSION_INFO = [{
			version: 0,
			size: 16
		}], t.CURRENT_VERSION = t.VERSION_INFO[t.VERSION_INFO.length - 1];

		function c(N) {
			return I.bytes(t.CURRENT_VERSION.size).add(I.forObject(k, N.content ?? null))
		}
		t.measure = c;

		function i(N, S) {
			N.setObjectIndirect(k, 0, S.content ?? null)
		}
		t.encode = i;

		function d(N, S) {
			const g = N.getObjectIndirect(k, 0);
			return {
				...g !== null ? {
					content: g
				} : {}
			}
		}
		t.decode = d
	})(o = e.WhisperContentProvider_GetWhisperContent_ResponseParams || (e.WhisperContentProvider_GetWhisperContent_ResponseParams = {}));
	class R {
		constructor(c) {
			this._endpoint = new _(c.endpointState, !0), this._version = 0
		}
		static create() {
			const [c, i] = w.createChannel(e);
			return [new R(c), i]
		}
		static createToBrowser() {
			const [c, i] = this.create();
			return Mojo.bindInterface(e.interfaceName, i.pipe.rawHandle), c
		}
		async getWhisperContent(c) {
			const i = {
				options: c
			};
			return (await this._endpoint.sendAndAwaitResponse(V.encode(0, p.None, s, i))).decode(o).content
		}
		_endpoint;
		_version
	}
	e.Proxy = R;
	class n extends F {
		constructor() {
			super(e)
		}
		onDisconnect;
		bind(c, i) {
			this.addReceiver(i, async (d, N) => {
				switch (d.header.ordinal) {
					case 0: {
						const S = d.decode(s),
							g = c.getWhisperContent(S.options),
							T = N.createResponder(o, 0, d.header.requestID),
							l = await g;
						T({
							content: l
						});
						break
					}
					default:
						d.header.expectsResponse && N.sendUnimplementedResponse(d.header.requestID, d.header.ordinal)
				}
				return Promise.resolve()
			}, () => {
				this.onDisconnect && this.onDisconnect(c)
			})
		}
		createRemote(c) {
			const [i, d] = w.createChannel(e);
			return this.bind(c, d), i
		}
	}
	e.Dispatcher = n
})(H || (H = {}));
class ce {
	dispatcher;
	constructor(s) {
		this.dispatcher = new B.Dispatcher, this.dispatcher.bind(this, s)
	}
	refreshSessionContext(s, o) {
		b.authSessionContext = {
			authToken: s,
			behavior: o
		}, b.wantsAuthSessionContext$.set(!0)
	}
}

function se(e) {
	return e === "none" || e === "sent" || e === "success" || e === "failure"
}
class ie {
	prepareState;
	lastPrepareTimestamp;
	conduitToken;
	constructor(s, o, R) {
		this.prepareState = se(s) ? s : "none", this.lastPrepareTimestamp = o - performance.timeOrigin, this.conduitToken = R
	}
}
class re {
	dispatcher;
	constructor(s) {
		this.dispatcher = new v.Dispatcher, this.dispatcher.bind(this, s)
	}
	setWindowStyle(s) {
		b.windowStyle$.set(s)
	}
	setModel(s) {
		b.wantsModelSlug$.set(s)
	}
	newConversation() {
		b.wantsNewConversation$.set(!0), b.selectedConversationId$.set(void 0)
	}
	loadConversation(s) {
		b.wantsNewConversation$.set(!1), b.selectedConversationId$.set(s)
	}
	requestCompletion(s, o, R) {
		b.requestCompletion = {
			prompt: s,
			systemHints: o,
			modelSlug: R
		}, b.wantsRequestCompletion$.set(!0)
	}
	populatePrompt(s, o) {
		b.populatePrompt = {
			userMessage: s ?? null,
			targetedReply: o ?? null
		}, b.wantsPopulatePrompt$.set(!0)
	}
	updateContext(s, o, R) {
		b.context$.set({
			url: s,
			title: o,
			base64favicon: R
		})
	}
	prepareConversation(s) {
		b.prepareConversationDetails = new ie(s.prepareState, s.lastPrepareTimestampMsSince1970, s.conduitToken ?? void 0)
	}
	setSuperWidgetOptions(s) {}
	setAttachments(s) {
		b.attachments = s.map(o => {
			const {
				id: R,
				name: n,
				size: t,
				mimeType: c,
				width: i,
				height: d,
				fileTokenSize: N
			} = o;
			return {
				...R && {
					id: R
				},
				...n && {
					name: n
				},
				...t && {
					size: typeof t == "bigint" ? Number(t) : t
				},
				...c && {
					mime_type: c
				},
				...i && {
					width: i
				},
				...d && {
					height: d
				},
				...N && {
					file_token_size: N
				}
			}
		})
	}
	navigate(s) {
		b.wantsNavigate$.set(s)
	}
}
const de = 6e4;
class oe {
	host;
	logger;
	lastMissingAuthTime = 0;
	constructor(s, o) {
		this.host = s, this.logger = o
	}
	async getAccountID() {
		return await this.host.getAccountID()
	}
	onMissingSessionAuth() {
		const s = Date.now();
		if (s - this.lastMissingAuthTime > de) {
			this.lastMissingAuthTime = s;
			const [o, R] = Y.Proxy.create();
			this.bindReceiver(R), this.logger.notice("onMissingSessionAuth.invoked"), o.handleMissingSessionAuth()
		}
	}
	recordAvailableSessionAuth() {
		const [s, o] = Y.Proxy.create();
		this.bindReceiver(o), this.logger.notice("recordAvailableSessionAuth.invoked"), s.recordAvailableSessionAuth()
	}
	closeSideChat() {
		const [s, o] = A.Proxy.create();
		this.bindReceiver(o), s.closeSidebar()
	}
	supportsWebSideChatHeader() {
		const [s, o] = A.Proxy.create();
		return this.bindReceiver(o), s.canHideHeader()
	}
	async getWhisperContent() {
		const [s, o] = H.Proxy.create();
		return this.bindReceiver(o), await s.getWhisperContent({})
	}
	receivedFirstToken() {
		this.host.receivedFirstToken("")
	}
	bindReceiver(s) {
		this.host.bindReceiver(s.interfaceType.interfaceName, s.pipe)
	}
}
class ue {
	proxy;
	constructor(s) {
		this.proxy = s
	}
	handleLink(s, o) {
		this.proxy.handleLink(s, o)
	}
}
class Ne {
	dispatcher;
	host;
	logger;
	conversationControllers = [];
	authStateController = [];
	constructor() {
		this.logger = ee.createLogger("web-bridge-host", "info", "http"), this.dispatcher = new te.Dispatcher;
		const s = ne.Proxy.createToBrowser();
		this.host = new oe(s, this.logger), s.setFrontend(this.dispatcher.createRemote(this))
	}
	get linkHandler() {
		const [s, o] = L.Proxy.create();
		return this.host.bindReceiver(o), new ue(s)
	}
	logConsoleMessage(s) {
		this.logger.info(s)
	}
	sendMessage(s, o) {
		return Promise.resolve(null)
	}
	bindReceiver(s, o) {
		s === v.interfaceName ? this.conversationControllers.push(new re(new W(v, o))) : s === B.interfaceName && this.authStateController.push(new ce(new W(B, o)))
	}
}
let y;
async function Oe() {
	y = new Ne;
	const e = await y.host.getAccountID();
	y.logger.info(`Account ID: ${e}`)
}

function fe() {
	return y?.host
}

function ae() {
	return y?.linkHandler
}
async function Ee() {
	return y ? (y.logger.debug("Getting whisper content"), await y.host.getWhisperContent()) : null
}

function Se() {
	if (!y) return null;
	y.host.closeSideChat()
}

function ge() {
	return y ? y.host.supportsWebSideChatHeader() : null
}
export {
	Se as closeSideChat, fe as getHost, ae as getLinkHandler, Ee as getSidebarWhisperContent, Oe as initHostConnection, ge as supportsWebSideChatHeader
};
//# sourceMappingURL=licto72kg488zsoz.js.map