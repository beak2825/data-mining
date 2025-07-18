! function() {
	"use strict";

	function n(e) {
		void 0 === e && (e = {
			baseUrl: ""
		}), this.configuration = e, this.baseUrl = this.configuration.baseUrl
	}
	var a = {
			n: function(e) {
				var n = e && e.__esModule ? function() {
					return e.default
				} : function() {
					return e
				};
				return a.d(n, {
					a: n
				}), n
			},
			d: function(e, n) {
				for (var t in n) a.o(n, t) && !a.o(e, t) && Object.defineProperty(e, t, {
					enumerable: !0,
					get: n[t]
				})
			},
			o: function(e, n) {
				return Object.prototype.hasOwnProperty.call(e, n)
			}
		},
		l = React,
		d = a.n(l),
		u = Roblox,
		e = a.n(u),
		t = ReactDOM,
		o = CoreUtilities,
		r = "access-management-upsell-container-v1",
		s = ReactUtilities,
		c = PropTypes,
		i = a.n(c),
		p = ReactStyleGuide,
		m = "Modal.Title",
		f = "Modal.ContentText",
		v = "Button.AccountInfo",
		h = "/my/account#!/info",
		g = {
			OpenAccessManagementVerificationModal: "OpenAccessManagementVerificationModal"
		},
		w = (y.prototype.sendEvent = function(e) {
			var n = e.localTime,
				t = e.target,
				a = e.eventType,
				o = e.context,
				r = e.additionalProperties,
				s = e.currentUrl,
				c = e.guestId,
				e = e.sessionId,
				n = n.toISOString(),
				i = new URL("".concat(this.baseUrl, "/pe"));
			return i.searchParams.append("t", t), i.searchParams.append("evt", a), i.searchParams.append("ctx", o), i.searchParams.append("lt", n), i.searchParams.append("url", s || window.location.href), void 0 !== c && i.searchParams.append("gid", c), void 0 !== e && i.searchParams.append("sid", e), void 0 !== r && Object.keys(r).forEach(function(e) {
				i.searchParams.append(e, (null !== (e = r[e]) && void 0 !== e ? e : "").toString())
			}), fetch(i.href, {
				credentials: "same-origin"
			})
		}, y.prototype.sendEventViaImg = function(e, n) {
			var t = e.localTime,
				a = e.target,
				o = e.eventType,
				r = e.context,
				s = e.additionalProperties,
				c = e.currentUrl,
				i = e.guestId,
				e = e.sessionId,
				t = t.toISOString(),
				l = new URL("".concat(this.baseUrl, "/e.png"));
			l.searchParams.append("t", a), l.searchParams.append("evt", o), l.searchParams.append("ctx", r), l.searchParams.append("lt", t), l.searchParams.append("url", c || window.location.href), void 0 !== i && l.searchParams.append("gid", i), void 0 !== e && l.searchParams.append("sid", e), void 0 !== s && Object.keys(s).forEach(function(e) {
				l.searchParams.append(e, (null !== (e = s[e]) && void 0 !== e ? e : "").toString())
			});
			e = new Image;
			return e.src = l.href, e.onload = function() {
				void 0 !== n && n(!0)
			}, e.onerror = function(e) {
				void 0 !== n && n(!1), console.error(e)
			}, e
		}, y);

	function y(e) {
		void 0 === e && (e = new n), this.configuration = e, this.baseUrl = e.baseUrl
	}
	var b = function() {
			return (b = Object.assign || function(e) {
				for (var n, t = 1, a = arguments.length; t < a; t++)
					for (var o in n = arguments[t]) Object.prototype.hasOwnProperty.call(n, o) && (e[o] = n[o]);
				return e
			}).apply(this, arguments)
		},
		c = u.EnvironmentUrls.domain,
		E = new w(new n({
			baseUrl: "https://ecsv2." + c + "/AccessManagementUpsell"
		})),
		P = {
			sendEvent: function(e) {
				e = {
					target: e.name,
					localTime: new Date,
					eventType: e.type,
					context: e.context,
					additionalProperties: b({}, e.params)
				};
				return E.sendEventViaImg(e)
			}
		},
		w = CoreRobloxUtilities.eventStreamService.eventTypes,
		c = "accessManagementUpsell",
		M = {
			name: "showModal",
			type: w.modalAction,
			context: c,
			params: {
				aType: "shown"
			}
		},
		U = {
			name: "accountSettingsClick",
			type: w.buttonClick,
			context: c,
			params: {
				btn: "accountInfo"
			}
		};

	function O(e) {
		var n = e.translate,
			t = m,
			a = f,
			o = v,
			r = h,
			s = (0, l.useState)(!1),
			e = s[0],
			c = s[1];

		function i() {
			c(!1)
		}
		return (0, l.useEffect)(function() {
			window.addEventListener(g.OpenAccessManagementVerificationModal, function() {
				c(!0), P.sendEvent(M)
			}, !1)
		}, []), d().createElement(d().Fragment, null, d().createElement(p.Modal, {
			show: e,
			onHide: i,
			size: "sm",
			"aria-labelledby": "access-management-modal-title",
			className: "access-management-upsell-modal",
			scrollable: "true",
			centered: "true"
		}, d().createElement(p.Modal.Header, {
			useBaseBootstrapComponent: !0
		}, d().createElement("button", {
			type: "button",
			className: "close",
			id: "access-management-upsell-close-button",
			onClick: i
		}, d().createElement("span", {
			className: "icon-close"
		})), d().createElement(p.Modal.Title, {
			id: "access-management-modal-title"
		}, n(t))), d().createElement(p.Modal.Body, null, n(a)), d().createElement(p.Modal.Footer, null, d().createElement(p.Button, {
			variant: p.Button.variants.primary,
			width: "full",
			onClick: function() {
				return e = u.Endpoints.getAbsoluteUrl(r), void("undefined" != typeof window && (window.location.href = e, c(!1), P.sendEvent(U)));
				var e
			},
			className: "modal-button"
		}, n(o)))))
	}
	O.propTypes = {
		translate: i().func.isRequired
	};
	var T = O,
		A = (0, s.withTranslations)(function(e) {
			return e = e.translate, d().createElement(T, {
				translate: e
			})
		}, {
			common: [],
			feature: "Feature.AgeVerificationUpsell"
		}),
		s = function() {
			return new Promise(function(n) {
				var e = new CustomEvent(g.OpenAccessManagementVerificationModal, {
					detail: {
						closeCallback: function(e) {
							n(e)
						}
					}
				});
				window.dispatchEvent(e)
			})
		};

	function I() {
		var e = document.getElementById(r);
		e ? (0, t.render)(d().createElement(A, null), e) : window.requestAnimationFrame(I)
	}
	e().AccessManagementUpsellService = {
		showAccessManagementVerificationModal: s
	}, (0, o.ready)(function() {
		r && I()
	})
}();
//# sourceMappingURL=https://js.rbxcdn.com/286004f816b9824df5785f553920f44e-accessManagementUpsell.bundle.min.js.map

/* Bundle detector */
window.Roblox && window.Roblox.BundleDetector && window.Roblox.BundleDetector.bundleDetected("AccessManagementUpsell");