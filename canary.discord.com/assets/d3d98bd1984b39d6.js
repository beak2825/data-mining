"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
	["91689"], {
		792254: function(e, t, n) {
			n.d(t, {
				Z: () => O
			});
			var c = n(442837),
				a = n(410030),
				d = n(607070),
				o = n(474936),
				s = n(231338),
				r = n(955092),
				i = n(250225),
				f = n(778441),
				p = n(238988),
				A = n(298233),
				b = n(304354),
				l = n(265704),
				u = n(85010),
				R = n(954620),
				L = n(28747),
				Z = n(962658),
				g = n(29971),
				E = n(730837),
				m = n(95897),
				_ = n(171362),
				C = n(945720);

			function O(e) {
				let t = (0, c.e7)([d.Z], () => d.Z.useReducedMotion),
					n = (0, a.ZP)();
				return t ? function(e, t) {
					switch (e) {
						case o.cd.ANIMATED_AVATAR_MODAL_UPSELL:
							return t === s.BR.DARK ? R.Z : E.Z;
						case o.cd.ANIMATED_BANNER_MODAL_UPSELL:
							return t === s.BR.DARK ? L.Z : m.Z;
						case o.cd.PROFILE_EFFECT_MODAL_UPSELL:
							return t === s.BR.DARK ? g.Z : C.Z;
						case o.cd.AVATAR_DECORATION_MODAL_UPSELL:
							return t === s.BR.DARK ? Z.Z : _.Z
					}
				}(e, n) : function(e, t) {
					switch (e) {
						case o.cd.ANIMATED_AVATAR_MODAL_UPSELL:
							return t === s.BR.DARK ? r.Z : A.Z;
						case o.cd.ANIMATED_BANNER_MODAL_UPSELL:
							return t === s.BR.DARK ? i.Z : b.Z;
						case o.cd.PROFILE_EFFECT_MODAL_UPSELL:
							return t === s.BR.DARK ? p.Z : u.Z;
						case o.cd.AVATAR_DECORATION_MODAL_UPSELL:
							return t === s.BR.DARK ? f.Z : l.Z
					}
				}(e, n)
			}
		},
		378879: function(e, t, n) {
			n.d(t, {
				default: () => g,
				s: () => Z
			});
			var c = n(255367);
			n(73800);
			var a = n(481060),
				d = n(678135),
				o = n(687158),
				s = n(576635),
				r = n(594174),
				i = n(98278),
				f = n(792254),
				p = n(790527),
				A = n(474936),
				b = n(981631),
				l = n(486324),
				u = n(388032),
				R = n(784687);

			function L(e) {
				for (var t = 1; t < arguments.length; t++) {
					var n = null != arguments[t] ? arguments[t] : {},
						c = Object.keys(n);
					"function" == typeof Object.getOwnPropertySymbols && (c = c.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
						return Object.getOwnPropertyDescriptor(n, e).enumerable
					}))), c.forEach(function(t) {
						var c;
						c = n[t], t in e ? Object.defineProperty(e, t, {
							value: c,
							enumerable: !0,
							configurable: !0,
							writable: !0
						}) : e[t] = c
					})
				}
				return e
			}

			function Z(e) {
				let {
					uploadType: t,
					imageSrc: d,
					analyticsSource: o
				} = e, s = r.default.getCurrentUser();
				return null != s && ((0, a.ZDy)(async () => {
					let {
						default: e
					} = await Promise.resolve().then(n.bind(n, 378879));
					return n => (0, c.jsx)(e, L({
						user: s,
						imageSrc: d,
						uploadType: t,
						analyticsSource: o,
						analyticsLocation: {
							section: b.jXE.USER_PROFILE,
							object: b.qAy.BUTTON_CTA
						},
						onSecondaryClick: a.pTH
					}, n))
				}), !0)
			}

			function g(e) {
				var {
					user: t,
					uploadType: n,
					imageSrc: a,
					onClose: r,
					analyticsSource: b,
					analyticsLocation: Z,
					onSecondaryClick: g
				} = e, E = function(e, t) {
					if (null == e) return {};
					var n, c, a = function(e, t) {
						if (null == e) return {};
						var n, c, a = {},
							d = Object.keys(e);
						for (c = 0; c < d.length; c++) n = d[c], t.indexOf(n) >= 0 || (a[n] = e[n]);
						return a
					}(e, t);
					if (Object.getOwnPropertySymbols) {
						var d = Object.getOwnPropertySymbols(e);
						for (c = 0; c < d.length; c++) n = d[c], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (a[n] = e[n])
					}
					return a
				}(e, ["user", "uploadType", "imageSrc", "onClose", "analyticsSource", "analyticsLocation", "onSecondaryClick"]);
				let m = (0, o.ZP)(t.id),
					{
						primaryColor: _,
						secondaryColor: C
					} = (0, s.Z)({
						user: t,
						displayProfile: m,
						pendingAvatarSrc: n === l.pC.AVATAR ? a : void 0,
						isPreview: !0
					}),
					O = n === l.pC.AVATAR || n === l.pC.BANNER,
					h = null != a,
					T = (0, f.Z)(n === l.pC.AVATAR ? A.cd.ANIMATED_AVATAR_MODAL_UPSELL : A.cd.ANIMATED_BANNER_MODAL_UPSELL);
				return O ? (0, c.jsx)(p.Z, L({
					artURL: h ? void 0 : T,
					modalClassName: h ? R.modal : void 0,
					modalContentClassName: h ? R.modalContent : void 0,
					type: n === l.pC.AVATAR ? A.cd.ANIMATED_AVATAR_MODAL_UPSELL : A.cd.ANIMATED_BANNER_MODAL_UPSELL,
					title: n === l.pC.AVATAR ? u.intl.string(u.t["X7tO6+"]) : u.intl.string(u.t.zXPa2N),
					body: n === l.pC.AVATAR ? u.intl.string(u.t.ifCRdH) : u.intl.string(u.t.yQAnf3),
					glowUp: n === l.pC.AVATAR ? u.intl.string(u.t.ifCRdH) : u.intl.string(u.t.yQAnf3),
					onSecondaryClick: () => {
						null == g || g(), (0, i.$)(r)
					},
					secondaryCTA: u.intl.string(u.t.PcTCBw),
					onClose: r,
					enableArtBoxShadow: !1,
					analyticsSource: b,
					analyticsLocation: Z,
					hideBackButton: !0,
					showEnhancedUpsell: !0,
					LeadingComponent: h ? (0, c.jsx)("div", {
						className: R.previewContainerParent,
						children: (0, c.jsx)(d.Z, {
							containerClassName: R.previewContainer,
							user: t,
							canUsePremiumCustomization: !0,
							disabledInputs: !0,
							pendingAvatar: n === l.pC.AVATAR ? a : void 0,
							pendingBanner: n === l.pC.BANNER ? a : void 0,
							pendingThemeColors: [_, C],
							hideExampleButton: !0
						})
					}) : void 0
				}, E)) : null
			}
		},
		955092: function(e, t, n) {
			n.d(t, {
				Z: () => c
			});
			let c = "https://cdn.discordapp.com/assets/content/5b4dc771eb1d2e239bcba774f3589b977845bf70d179315dc2f9a531b253c6d8.png"
		},
		250225: function(e, t, n) {
			n.d(t, {
				Z: () => c
			});
			let c = "https://cdn.discordapp.com/assets/content/577d28b05d22c43a8b3dfe5ebfc6fa278c58f03907e888db884c331d13c3ad23.png"
		},
		778441: function(e, t, n) {
			n.d(t, {
				Z: () => c
			});
			let c = "https://cdn.discordapp.com/assets/content/7fa341ec7211b62a71a0bd433d2bafe570ada865b0fd72d695b90de4a581022a.png"
		},
		238988: function(e, t, n) {
			n.d(t, {
				Z: () => c
			});
			let c = "https://cdn.discordapp.com/assets/content/f3e3de08090be16d5041988655da92f175ba9967e7854f170caa18550159ae10.png"
		},
		298233: function(e, t, n) {
			n.d(t, {
				Z: () => c
			});
			let c = "https://cdn.discordapp.com/assets/content/f56fdb607f14f6ebe5a37eac65f5b8c975ea446224c06dd8aef4dd0187c81874.png"
		},
		304354: function(e, t, n) {
			n.d(t, {
				Z: () => c
			});
			let c = "https://cdn.discordapp.com/assets/content/d1dcb0c115a836edc8cbf021a15888bdf416fd352187518f227b8e905a20227f.png"
		},
		265704: function(e, t, n) {
			n.d(t, {
				Z: () => c
			});
			let c = "https://cdn.discordapp.com/assets/content/b344b1fe2b3d2cc66466f09c46b4e2dcce56a16f1ff047aed69155fa4cff39a8.png"
		},
		85010: function(e, t, n) {
			n.d(t, {
				Z: () => c
			});
			let c = "https://cdn.discordapp.com/assets/content/f3e3de08090be16d5041988655da92f175ba9967e7854f170caa18550159ae10.png"
		},
		954620: function(e, t, n) {
			n.d(t, {
				Z: () => c
			});
			let c = "https://cdn.discordapp.com/assets/content/87534097f7ff0b0a3c6164bbcaad8968b2e7f8dbbdc59776c782cf14dba4c53c.png"
		},
		28747: function(e, t, n) {
			n.d(t, {
				Z: () => c
			});
			let c = "https://cdn.discordapp.com/assets/content/5e27b7f8865a87dd6eec34188b96bb51924a55252b16f9ebfb8aa72973304bbd.png"
		},
		962658: function(e, t, n) {
			n.d(t, {
				Z: () => c
			});
			let c = "https://cdn.discordapp.com/assets/content/15940a9acc0fab74b37e730350d6cef34289948e14b6d73e90432c19b4a51beb.png"
		},
		29971: function(e, t, n) {
			n.d(t, {
				Z: () => c
			});
			let c = "https://cdn.discordapp.com/assets/content/6c6eeb5576f47ad8c19a40e67a6404ffaae3b939f07183afc984d669f17137de.png"
		},
		730837: function(e, t, n) {
			n.d(t, {
				Z: () => c
			});
			let c = "https://cdn.discordapp.com/assets/content/fab9a25304af3a77b100b6beabd1d46013120289193faa37e9fa82977f133322.png"
		},
		95897: function(e, t, n) {
			n.d(t, {
				Z: () => c
			});
			let c = "https://cdn.discordapp.com/assets/content/ef7a0b437305ab3a5ccda00a5ecd4eddd69544a90eac121e5c984ca63dd93b9e.png"
		},
		171362: function(e, t, n) {
			n.d(t, {
				Z: () => c
			});
			let c = "https://cdn.discordapp.com/assets/content/71744284320fdf451ac09af729ea60d3fde7ef492f7c7e8c5657387c20c2b9c6.png"
		},
		945720: function(e, t, n) {
			n.d(t, {
				Z: () => c
			});
			let c = "https://cdn.discordapp.com/assets/content/6c6eeb5576f47ad8c19a40e67a6404ffaae3b939f07183afc984d669f17137de.png"
		}
	}
]);
//# sourceMappingURL=d3d98bd1984b39d6.js.map