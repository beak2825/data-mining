"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
	["20176"], {
		432472: function(n, e, i) {
			i.r(e), i.d(e, {
				default: () => o
			});
			var t = i(255367);
			i(73800);
			var l = i(512722),
				a = i.n(l),
				r = i(399606),
				u = i(372900),
				c = i(238246),
				d = i(592125),
				h = i(856393);

			function o(n) {
				let {
					windowKey: e,
					channelId: i
				} = n, l = (0, r.e7)([d.Z], () => d.Z.getChannel(i));
				return a()(null != l, "channel cannot be null for popout"), (0, t.jsx)(c.Z, {
					withTitleBar: !0,
					windowKey: e,
					title: l.name,
					children: (0, t.jsx)(u.Z.Provider, {
						value: l.guild_id,
						children: (0, t.jsx)(h.Z, {
							channel: l
						})
					})
				})
			}
		}
	}
]);
//# sourceMappingURL=d88f27e031e0424f.js.map