! function() {
	"use strict";
	var r = {
			n: function(o) {
				var t = o && o.__esModule ? function() {
					return o.default
				} : function() {
					return o
				};
				return r.d(t, {
					a: t
				}), t
			},
			d: function(o, t) {
				for (var e in t) r.o(t, e) && !r.o(o, e) && Object.defineProperty(o, e, {
					enumerable: !0,
					get: t[e]
				})
			},
			o: function(o, t) {
				return Object.prototype.hasOwnProperty.call(o, t)
			}
		},
		o = jQuery,
		e = r.n(o),
		n = Roblox,
		a = {
			cssClass: "text-link",
			hasProtocolRegex: /(https?:\/\/)/,
			regex: /(https?:\/\/)?(?:www\.)?([a-z0-9-]{2,}\.)*(((m|de|www|web|api|blog|wiki|corp|events|polls|bloxcon|developer|devforum|forum|status|create)\.roblox\.com|robloxlabs\.com)|(www\.shoproblox\.com)|(roblox\.status\.io)|(rblx\.co)|help\.roblox\.com(?![A-Za-z0-9/.]*\/attachments\/))(?!\/[A-Za-z0-9-+&@#/=~_|!:,.;]*%)((\/[A-Za-z0-9-+&@#/%?=~_|!:,.;]*)|(?=\s|\b))/gm,
			robloxDomainSuffixes: [".roblox.com", ".robloxlabs.com"]
		};

	function t(o) {
		var t = e = o.replace(/&amp;/g, "&"),
			e = e.replace(/\.+$/g, ""),
			e = (e = (o = e).match(a.hasProtocolRegex) ? o : "https://".concat(o)).replace("http://", "https://"),
			o = $("<a></a>");
		o.addClass(a.cssClass), o.attr("href", e), o.text(t), void 0 !== n.DeviceMeta && (0, n.DeviceMeta)().isPhone || o.attr("target", "_blank");
		t = "noopener";
		return function(o) {
			var t = o.prop("hostname");
			if (void 0 !== t)
				for (var e = a.robloxDomainSuffixes, r = 0; r < e.length; r++) {
					var n = e[r];
					if (t.endsWith(n)) return 1
				}
		}(o) || (t += " noreferrer"), o.attr("rel", t), o.clone().wrap("<div>").parent().html()
	}
	var i = {
		String: function(o) {
			return 0 < $("<div>".concat(o, "</div>")).find("a[href]").length ? o : o.replace(a.regex, t)
		}
	};
	window.Roblox = window.Roblox || {}, window.Roblox.Linkify = i, e().fn.linkify = function() {
		return this.each(function() {
			var o = e()(this),
				t = o.html();
			null != t && (t = i.String(t), o.html(t))
		})
	}, e()(function() {
		e()(".linkify").linkify()
	})
}();
//# sourceMappingURL=https://js.rbxcdn.com/5d41cc2fe50706c7c0f24aa88af4c27c-linkify.bundle.min.js.map

/* Bundle detector */
window.Roblox && window.Roblox.BundleDetector && window.Roblox.BundleDetector.bundleDetected("Linkify");