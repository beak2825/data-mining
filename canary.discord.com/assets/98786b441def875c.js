"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
	["86282"], {
		886253: function(e, n, l) {
			l.d(n, {
				A: () => f
			});
			var t = l(255367);
			l(73800);
			var r = l(442837),
				i = l(755721),
				s = l(481060),
				a = l(812206),
				o = l(370210),
				c = l(757746),
				d = l(572004),
				u = l(601911),
				m = l(504211),
				x = l(533159),
				h = l(981631),
				p = l(388032),
				v = l(969878),
				j = l(409369);

			function f(e) {
				let {
					appId: n,
					skuId: l,
					transitionState: f,
					onClose: b,
					onHeaderTitleClick: N,
					children: S,
					footer: g
				} = e, O = (0, r.e7)([a.Z, o.Z], () => {
					var e;
					return null != (e = a.Z.getApplication(n)) ? e : o.Z.getApplicationRecord(n)
				}, [n]), {
					data: I
				} = (0, c.Z)(l);
				if (null == O) return null;
				let C = (0, u.y)(O, 25),
					{
						termsOfServiceUrl: y,
						privacyPolicyUrl: T
					} = O;
				return (null == I ? void 0 : I.applicationId) !== n ? (0, t.jsxs)(s.Y0X, {
					transitionState: f,
					size: s.CgR.SMALL,
					parentComponent: "CardDetailsModal",
					children: [(0, t.jsxs)(s.hzk, {
						className: j.content,
						children: [(0, t.jsx)(s.olH, {
							onClick: b,
							className: v.modalCloseBtn
						}), (0, t.jsx)(s.Text, {
							variant: "text-lg/semibold",
							color: "header-primary",
							className: j.unavailableTitle,
							children: p.intl.string(p.t["0Bf80N"])
						}), (0, t.jsx)(s.Text, {
							variant: "text-md/normal",
							color: "header-secondary",
							className: j.unavailableBody,
							children: p.intl.string(p.t.omH3bm)
						})]
					}), (0, t.jsx)(s.mzw, {
						children: (0, t.jsx)(i.zx, {
							className: j.button,
							color: i.zx.Colors.BRAND,
							onClick: b,
							size: i.zx.Sizes.LARGE,
							children: p.intl.string(p.t.BddRzc)
						})
					})]
				}) : (0, t.jsxs)(s.Y0X, {
					transitionState: f,
					size: s.CgR.DYNAMIC,
					className: j.modal,
					parentComponent: "CardDetailsModal",
					children: [(0, t.jsxs)(s.xBx, {
						className: v.modalHeader,
						children: [(0, t.jsxs)(s.P3F, {
							className: v.modalTitle,
							onClick: N,
							children: [null != C && (0, t.jsx)("img", {
								src: C.href,
								alt: "",
								className: j.appIcon
							}), (0, t.jsx)(s.X6q, {
								variant: "heading-md/semibold",
								children: O.name
							})]
						}), (0, t.jsx)(s.olH, {
							onClick: b,
							className: v.modalCloseBtn
						})]
					}), S, (0, t.jsxs)(s.mzw, {
						className: j.footer,
						children: [null != y || null != T ? (0, t.jsx)(s.Text, {
							color: "header-primary",
							variant: "text-sm/normal",
							children: (0, t.jsx)(x.Z, {
								termsOfServiceUrl: y,
								privacyPolicyUrl: T
							})
						}) : (0, t.jsx)(s.Text, {
							color: "header-primary",
							variant: "text-xs/normal",
							children: p.intl.string(p.t["3ZY+0N"])
						}), (0, t.jsxs)("div", {
							className: j.footerButtons,
							children: [d.wS && (0, t.jsx)(i.zx, {
								look: i.zx.Looks.FILLED,
								size: i.zx.Sizes.ICON,
								color: i.zx.Colors.PRIMARY,
								"aria-label": p.intl.string(p.t.WqhZsr),
								className: j.linkButton,
								innerClassName: j.innerLinkButton,
								onClick: () => {
									let e = "".concat(location.protocol, "//").concat(location.host).concat(h.Z5c.GLOBAL_DISCOVERY_APPS_PROFILE_STORE_SKU(n, l));
									(0, d.JG)(e, () => (0, s.showToast)((0, s.createToast)(p.intl.string(p.t["L/PwZW"]), s.ToastType.SUCCESS))), (0, m.X)(n, m.B.DETAILS_MODAL, l)
								},
								children: (0, t.jsx)(s.xPt, {
									size: "xs",
									color: "currentColor"
								})
							}), g]
						})]
					})]
				})
			}
		},
		519896: function(e, n, l) {
			l.r(n), l.d(n, {
				SubscriptionDetailsModal: () => j
			}), l(953529);
			var t = l(255367),
				r = l(73800),
				i = l(269210),
				s = l(752843),
				a = l(481060),
				o = l(757746),
				c = l(930155),
				d = l(889989),
				u = l(263519),
				m = l(73346),
				x = l(591759),
				h = l(886253),
				p = l(680005),
				v = l(938337);

			function j(e) {
				var n, l;
				let {
					appId: j,
					subscriptionType: f,
					onClose: b,
					skuId: N,
					guildId: S,
					transitionState: g,
					onHeaderTitleClick: O
				} = e, {
					data: I
				} = (0, c.H)(N), C = I[0], {
					data: y
				} = (0, o.Z)(N), T = r.useMemo(() => {
					var e;
					return (null == y ? void 0 : y.thumbnail) != null && null != (e = x.Z.toURLSafe((0, m._W)(j, y.thumbnail, 256))) ? e : void 0
				}, [j, null == y ? void 0 : y.thumbnail]), R = r.useMemo(() => {
					let e = null == y ? void 0 : y.benefits;
					if (null != e && 0 !== e.length) return e.map(e => ({
						id: e.id,
						title: e.name,
						description: e.description,
						icon: (0, d.n)(j, e.icon)
					}))
				}, [j, null == y ? void 0 : y.benefits]), {
					openModal: k,
					subscriptionPurchaseButtonState: E
				} = (0, u.Z)({
					skuId: N,
					initialSubscribeForGuild: null != S ? S : void 0
				});
				return null == y ? null : (0, t.jsx)(h.A, {
					appId: j,
					skuId: N,
					transitionState: g,
					onHeaderTitleClick: null != O ? O : b,
					onClose: b,
					footer: (0, t.jsx)(p.pV, {
						onClick: k,
						appId: j,
						subscriptionType: f,
						skuId: N,
						subscriptionPlan: C,
						state: E
					}),
					children: (0, t.jsx)(v.i, {
						appId: j,
						skuId: N,
						benefits: null != R ? R.map(e => (0, t.jsx)(i.Gm, {
							header: e.title,
							icon: e.icon,
							description: e.description
						}, e.id)) : void 0,
						description: null != (n = y.description) ? n : void 0,
						imgSrc: T,
						title: null != (l = null == C ? void 0 : C.name) ? l : y.summary,
						tag: (0, t.jsx)(s.Z, {
							type: f
						}),
						FallbackIcon: a.Vh5
					})
				})
			}
		},
		938337: function(e, n, l) {
			l.d(n, {
				i: () => c
			});
			var t = l(255367),
				r = l(73800),
				i = l(512100),
				s = l(906732),
				a = l(626135),
				o = l(981631);

			function c(e) {
				var {
					appId: n,
					skuId: l
				} = e, c = function(e, n) {
					if (null == e) return {};
					var l, t, r = function(e, n) {
						if (null == e) return {};
						var l, t, r = {},
							i = Object.keys(e);
						for (t = 0; t < i.length; t++) l = i[t], n.indexOf(l) >= 0 || (r[l] = e[l]);
						return r
					}(e, n);
					if (Object.getOwnPropertySymbols) {
						var i = Object.getOwnPropertySymbols(e);
						for (t = 0; t < i.length; t++) l = i[t], !(n.indexOf(l) >= 0) && Object.prototype.propertyIsEnumerable.call(e, l) && (r[l] = e[l])
					}
					return r
				}(e, ["appId", "skuId"]);
				let {
					analyticsLocations: d
				} = (0, s.ZP)();
				return r.useEffect(() => {
					a.default.track(o.rMx.VIEW_PREMIUM_APP_EXPANDED_PRODUCT_CARD, {
						application_id: n,
						sku_id: l,
						location_stack: d
					})
				}, [d, n, l]), (0, t.jsx)(i.u, function(e) {
					for (var n = 1; n < arguments.length; n++) {
						var l = null != arguments[n] ? arguments[n] : {},
							t = Object.keys(l);
						"function" == typeof Object.getOwnPropertySymbols && (t = t.concat(Object.getOwnPropertySymbols(l).filter(function(e) {
							return Object.getOwnPropertyDescriptor(l, e).enumerable
						}))), t.forEach(function(n) {
							var t;
							t = l[n], n in e ? Object.defineProperty(e, n, {
								value: t,
								enumerable: !0,
								configurable: !0,
								writable: !0
							}) : e[n] = t
						})
					}
					return e
				}({}, c))
			}
		},
		757746: function(e, n, l) {
			l.d(n, {
				Z: () => a
			});
			var t = l(442837),
				r = l(558381),
				i = l(551428),
				s = l(981631);
			let a = (0, t.Kb)(i.Z, {
				queryId: e => s.McO.STORE_LISTING(e),
				get: e => null != e ? i.Z.getForSKU(e) : null,
				load: (e, n) => null != n ? (0, r.km)(n) : Promise.resolve(),
				useStateHook: t.e7
			})
		},
		512100: function(e, n, l) {
			l.d(n, {
				u: () => c
			}), l(953529);
			var t = l(255367);
			l(73800);
			var r = l(409794),
				i = l(777207),
				s = l(541822),
				a = l(330711),
				o = l(845533);

			function c(e) {
				let {
					benefits: n,
					description: l,
					imgSrc: c,
					title: d,
					tag: u,
					FallbackIcon: m
				} = e, x = null != c ? {
					"--custom-background-url": "url(".concat(c.toString(), ")")
				} : void 0;
				return (0, t.jsx)("div", {
					className: o.container,
					children: (0, t.jsx)(s.Z, {
						className: o.scroller,
						children: (0, t.jsxs)("div", {
							className: o.scrollContent,
							children: [(0, t.jsxs)("div", {
								className: o.header,
								children: [(0, t.jsx)("div", {
									className: o.headerBackground,
									style: x
								}), (0, t.jsx)("div", {
									className: o.headerImage,
									children: null != c ? (0, t.jsx)("img", {
										src: c.toString(),
										alt: ""
									}) : (0, t.jsx)(m, {
										size: "custom",
										color: "var(--text-muted)",
										height: 96,
										width: 96
									})
								})]
							}), (0, t.jsxs)("div", {
								className: o.content,
								children: [(0, t.jsxs)("div", {
									className: o.details,
									children: [null != u && (0, t.jsx)("div", {
										children: u
									}), (0, t.jsx)(r.X, {
										color: "header-primary",
										variant: "heading-xl/semibold",
										children: d
									}), null != l && "" !== l && (0, t.jsx)(i.x, {
										color: "text-default",
										variant: "text-md/normal",
										className: o.description,
										children: l
									})]
								}), null != n && (0, t.jsxs)("div", {
									className: o.benefits,
									children: [(0, t.jsx)(i.x, {
										color: "header-secondary",
										variant: "eyebrow",
										children: a.Z.Messages.STOREFRONT_BENEFITS_TITLE
									}), n]
								})]
							})]
						})
					})
				})
			}
		},
		752843: function(e, n, l) {
			l.d(n, {
				V: () => u,
				Z: () => d
			});
			var t = l(255367);
			l(73800);
			var r = l(628028),
				i = l(220427),
				s = l(777207),
				a = l(692547),
				o = l(330711),
				c = l(914439);

			function d(e) {
				let {
					type: n
				} = e;
				return (0, t.jsx)(u, {
					icon: "user" === n ? (0, t.jsx)(i.t, {
						size: "xxs",
						color: a.Z.colors.INTERACTIVE_NORMAL
					}) : (0, t.jsx)(r.Q, {
						size: "xxs",
						color: a.Z.colors.INTERACTIVE_NORMAL
					}),
					text: "user" === n ? o.Z.Messages.STOREFRONT_USER_SUBSCRIPTION : o.Z.Messages.STOREFRONT_SERVER_SUBSCRIPTION
				})
			}

			function u(e) {
				let {
					icon: n,
					text: l
				} = e;
				return (0, t.jsxs)("div", {
					className: c.container,
					children: [n, (0, t.jsx)(s.x, {
						color: "header-primary",
						variant: "text-sm/medium",
						children: l
					})]
				})
			}
		}
	}
]);
//# sourceMappingURL=98786b441def875c.js.map