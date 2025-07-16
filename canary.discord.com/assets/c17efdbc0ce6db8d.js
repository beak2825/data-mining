"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
	["36878"], {
		79808: function(e, t, n) {
			n.d(t, {
				Z: () => f
			}), n(388685);
			var i = n(255367),
				a = n(73800),
				s = n(120356),
				o = n.n(s),
				r = n(873546),
				l = n(636298),
				d = n(404975),
				c = n(178167),
				u = n(254204);

			function f(e) {
				let {
					onClose: t,
					config: n,
					initialSetting: s
				} = e, [f, m] = a.useState(!0), [h, x] = a.useState(s);
				return (0, i.jsxs)("div", {
					className: o()(u.container, {
						[u.mobile]: r.tq,
						[u.mobileNavigationOpen]: f
					}),
					children: [(0, i.jsx)(c.d, {
						onClose: t
					}), (0, i.jsx)(d.P, {}), (0, i.jsx)(l.Z, {
						onClose: t,
						setShowNavigationMobile: m,
						setting: h
					})]
				})
			}
		},
		36361: function(e, t, n) {
			n.d(t, {
				Z: () => u
			}), n(415506);
			var i = n(255367),
				a = n(73800),
				s = n(281215),
				o = n(401250),
				r = n(867694),
				l = n(142118),
				d = n(670304),
				c = n(357660);
			let u = a.memo(function(e) {
				let {
					node: t
				} = e;
				if (t.is(s.Jq.ROOT)) throw Error("Root nodes should never be rendered directly");
				return t.is(s.Jq.PANEL) ? (0, i.jsx)(c.T, {
					node: t
				}) : t.is(s.Jq.PANE) ? (0, i.jsx)(d.Z, {
					node: t
				}) : t.is(s.Jq.CATEGORY) ? (0, i.jsx)(l.Z, {
					node: t
				}) : t.is(s.Jq.TOGGLE) ? (0, i.jsx)(r.I, {
					node: t
				}) : (0, i.jsx)(o.W, {
					node: t
				})
			})
		},
		636298: function(e, t, n) {
			n.d(t, {
				Z: () => f
			});
			var i = n(255367),
				a = n(73800),
				s = n(873546),
				o = n(755721),
				r = n(481060),
				l = n(36361),
				d = n(254204);

			function c(e) {
				let {
					icon: t,
					onClick: n
				} = e;
				return (0, i.jsx)(o.zx, {
					look: o.zx.Looks.BLANK,
					size: o.zx.Sizes.ICON,
					className: d.contentHeaderButton,
					innerClassName: d.iconButtonInner,
					onClick: n,
					children: (0, i.jsx)(t, {
						size: "sm"
					})
				})
			}

			function u(e) {
				let {
					title: t,
					onClose: n,
					setShowNavigationMobile: a
				} = e;
				return (0, i.jsxs)("div", {
					className: d.contentHeader,
					children: [(0, i.jsxs)("div", {
						className: d.contentHeaderLeft,
						children: [s.tq && (0, i.jsx)(c, {
							icon: r.yFM,
							onClick: () => a(!0)
						}), (0, i.jsx)(r.X6q, {
							variant: "heading-md/normal",
							color: "header-secondary",
							children: t
						})]
					}), !s.tq && (0, i.jsx)(c, {
						icon: r.Uz9,
						onClick: n
					})]
				})
			}
			let f = a.memo(function(e) {
				let {
					onClose: t,
					setShowNavigationMobile: n,
					setting: a
				} = e, s = a.data.useTitle();
				return (0, i.jsxs)("div", {
					className: d.content,
					children: [(0, i.jsx)(u, {
						title: s,
						onClose: t,
						setShowNavigationMobile: n
					}), (0, i.jsx)(l.Z, {
						node: a
					})]
				})
			})
		},
		404975: function(e, t, n) {
			n.d(t, {
				P: () => s
			});
			var i = n(255367),
				a = n(254204);

			function s() {
				return (0, i.jsx)("div", {
					className: a.sidebar
				})
			}
		},
		178167: function(e, t, n) {
			n.d(t, {
				d: () => c
			});
			var i = n(255367),
				a = n(873546),
				s = n(755721),
				o = n(481060),
				r = n(950796),
				l = n(254204);

			function d(e) {
				let {
					icon: t,
					onClick: n
				} = e;
				return (0, i.jsx)(s.zx, {
					look: s.zx.Looks.BLANK,
					size: s.zx.Sizes.NONE,
					className: l.topBarButton,
					innerClassName: l.iconButtonInner,
					onClick: n,
					children: (0, i.jsx)(t, {
						size: "sm"
					})
				})
			}

			function c(e) {
				let {
					onClose: t
				} = e;
				return (0, i.jsx)("div", {
					className: l.topBar,
					children: (0, i.jsx)(r.T, {
						leading: (0, i.jsxs)("div", {
							className: l.arrowButtons,
							children: [(0, i.jsx)(d, {
								icon: o.whL
							}), (0, i.jsx)(d, {
								icon: o.ZSh
							})]
						}),
						trailing: a.tq && (0, i.jsx)(d, {
							icon: o.Dio,
							onClick: t
						})
					})
				})
			}
		},
		206403: function(e, t, n) {
			n.d(t, {
				x: () => d
			}), n(953529);
			var i = n(255367),
				a = n(120356),
				s = n.n(a),
				o = n(793030),
				r = n(481060),
				l = n(788551);

			function d(e) {
				let {
					leadingElement: t,
					primaryTrailingElement: n,
					secondaryTrailingElement: a,
					title: d,
					secondaryTitle: c,
					description: u,
					compact: f = !1,
					onClick: m
				} = e;
				return (0, i.jsxs)(r.P3F, {
					className: s()(l.baseControlItem, {
						[l.compact]: f
					}),
					onClick: m,
					children: [null != t && (0, i.jsx)("div", {
						className: l.baseControlItemLeadingElement,
						children: t
					}), (0, i.jsxs)("div", {
						className: l.baseControlItemContent,
						children: [(0, i.jsxs)("div", {
							className: l.baseControlItemTitle,
							children: [(0, i.jsx)(o.X6, {
								variant: "heading-md/semibold",
								color: "text-primary",
								children: d
							}), null != c && (0, i.jsx)(o.X6, {
								variant: "heading-md/semibold",
								color: "text-secondary",
								className: l.secondaryTitle,
								children: c
							})]
						}), null != u && (0, i.jsx)(o.xv, {
							variant: "text-md/normal",
							color: "text-secondary",
							children: u
						})]
					}), (null != n || null != a) && (0, i.jsxs)("div", {
						className: l.baseControlItemTrailingElements,
						children: [n, a]
					})]
				})
			}
		},
		401250: function(e, t, n) {
			n.d(t, {
				W: () => o
			});
			var i = n(255367),
				a = n(657707),
				s = n(206403);

			function o(e) {
				let {
					node: t
				} = e;
				return (0, i.jsx)(s.x, {
					title: "useTitle" in t.data && "function" == typeof t.data.useTitle ? t.data.useTitle() : "",
					secondaryTrailingElement: (0, i.jsx)(a.LJT, {})
				})
			}
		},
		867694: function(e, t, n) {
			n.d(t, {
				I: () => o
			});
			var i = n(255367),
				a = n(471141),
				s = n(851005);

			function o(e) {
				let {
					node: t
				} = e, {
					useValue: n,
					setValue: o,
					useTitle: r,
					useSubtitle: l
				} = t.data, d = r(), c = null == l ? void 0 : l(), u = n();
				return (0, i.jsx)(a.j, {
					value: u,
					onChange: e => o(e),
					className: s.toggle,
					note: c,
					hideBorder: !0,
					children: d
				})
			}
		},
		142118: function(e, t, n) {
			n.d(t, {
				Z: () => d
			});
			var i = n(255367),
				a = n(73800),
				s = n(481060),
				o = n(36361),
				r = n(598612),
				l = n(355521);
			let d = a.memo(function(e) {
				let {
					node: t
				} = e, {
					useTitle: n,
					layout: a,
					render: d
				} = t.data, c = null == n ? void 0 : n();
				return null != d ? (0, i.jsx)(d, {}) : (0, i.jsxs)(s.hjN, {
					className: l.category,
					children: [null != c && (0, i.jsx)(r.Y, {
						title: c
					}), a.map(e => (0, i.jsx)(o.Z, {
						node: e
					}, e.key))]
				})
			})
		},
		598612: function(e, t, n) {
			n.d(t, {
				Y: () => o
			});
			var i = n(255367),
				a = n(793030),
				s = n(878282);

			function o(e) {
				let {
					title: t,
					subtitle: n,
					icon: o,
					type: r = "primary"
				} = e;
				return "secondary" === r ? (0, i.jsx)("div", {
					className: s.header,
					children: (0, i.jsx)(a.X6, {
						variant: "heading-md/semibold",
						color: "text-secondary",
						children: t
					})
				}) : (0, i.jsxs)("div", {
					className: s.header,
					children: [(0, i.jsxs)("div", {
						className: s.headerTitle,
						children: [(0, i.jsx)(a.X6, {
							variant: "heading-xl/normal",
							color: "header-primary",
							children: t
						}), null != o && o]
					}), null != n && (0, i.jsx)(a.xv, {
						variant: "text-md/normal",
						color: "text-secondary",
						children: n
					})]
				})
			}
		},
		670304: function(e, t, n) {
			n.d(t, {
				Z: () => l
			}), n(415506);
			var i = n(255367),
				a = n(73800),
				s = n(281215),
				o = n(36361),
				r = n(49354);
			let l = a.memo(function(e) {
				let {
					node: t
				} = e, n = t.data.render;
				if (null != n) return (0, i.jsx)(n, {});
				if (t.data.layout.some(e => e.is(s.Jq.PANE))) throw Error("Panes should only be defined for custom panels.");
				return (0, i.jsx)("div", {
					className: r.pane,
					children: t.data.layout.map(e => (0, i.jsx)(o.Z, {
						node: e
					}, e.key))
				})
			})
		},
		357660: function(e, t, n) {
			n.d(t, {
				T: () => o
			});
			var i = n(255367),
				a = n(670304),
				s = n(594263);

			function o(e) {
				let {
					node: t
				} = e, n = t.data.render;
				return null != n ? (0, i.jsx)(n, {}) : (0, i.jsx)("div", {
					className: s.panel,
					children: (0, i.jsx)(a.Z, {
						node: t
					})
				})
			}
		},
		281215: function(e, t, n) {
			function i(e, t, n) {
				return t in e ? Object.defineProperty(e, t, {
					value: n,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : e[t] = n, e
			}
			n.d(t, {
				Em: () => f,
				Jq: () => r,
				ZP: () => s,
				k4: () => u,
				qs: () => d,
				wf: () => c
			}), n(953529), n(388685), n(415506);
			let a = Symbol.iterator;
			class s {
				linkToParent(e) {
					this._parent = e
				}
				get parent() {
					if (0 !== this.type) {
						if (null == this._parent) throw Error("This node has not been linked to its parent. It must be added to a SettingsTree first.");
						return this._parent
					}
				}
				is(e) {
					return this.type === e
				}
				isDataOfType(e) {
					return this.is(e)
				}
				isLayoutType() {
					return this.isDataOfType(0) || this.isDataOfType(1) || this.isDataOfType(2) || this.isDataOfType(3) || this.isDataOfType(4)
				} [a]() {
					return this.isLayoutType() ? this.data.layout.values() : [].values()
				}
				constructor(e, t, n) {
					i(this, "key", void 0), i(this, "type", void 0), i(this, "data", void 0), i(this, "_parent", void 0), this.type = e, this.key = t, this.data = n
				}
			}
			var o, r = ((o = {})[o.ROOT = 0] = "ROOT", o[o.PANEL = 1] = "PANEL", o[o.PANE = 2] = "PANE", o[o.CATEGORY = 3] = "CATEGORY", o[o.ACCORDION = 4] = "ACCORDION", o[o.STATIC = 5] = "STATIC", o[o.BUTTON = 6] = "BUTTON", o[o.TOGGLE = 7] = "TOGGLE", o[o.SLIDER = 8] = "SLIDER", o[o.SELECT = 9] = "SELECT", o[o.RADIO = 10] = "RADIO", o[o.CHECKBOX = 11] = "CHECKBOX", o[o.NAVIGATOR = 12] = "NAVIGATOR", o[o.CUSTOM = 13] = "CUSTOM", o);

			function l(e) {
				return (t, n) => new s(e, t, n)
			}
			l(5), l(6);
			let d = l(7);

			function c(e, t) {
				return new s(1, e, t)
			}

			function u(e, t) {
				return new s(3, e, t)
			}

			function f(e, t) {
				return new s(9, e, t)
			}
			l(8), l(12), l(13)
		},
		51880: function(e, t, n) {
			n.d(t, {
				Z: () => s,
				d: () => a
			}), n(415506), n(388685);
			var i = n(281215);
			let a = "$root";
			class s {
				get(e) {
					return this.items[e]
				}
				constructor(...e) {
					var t, n;
					n = void 0, (t = "items") in this ? Object.defineProperty(this, t, {
						value: n,
						enumerable: !0,
						configurable: !0,
						writable: !0
					}) : this[t] = n;
					let s = {},
						o = (e, t) => {
							if (null != s[e.key]) throw Error("Duplicate setting key '".concat(e.key, "'"));
							if (null != t && e.linkToParent(t), s[e.key] = e, e.isLayoutType())
								for (let t of e) o(t, e)
						};
					o(new i.ZP(i.Jq.ROOT, a, {
						layout: e
					})), this.items = Object.freeze(s)
				}
			}
		},
		154150: function(e, t, n) {
			n.d(t, {
				X: () => s
			}), n(388685);
			var i = n(51880);
			class a extends i.Z {
				get root() {
					return this.items[i.d]
				}
			}

			function s() {
				for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n];
				return new a(...t)
			}
		},
		604960: function(e, t, n) {
			n.r(t), n.d(t, {
				default: () => c,
				useUserSettingsConfigV2: () => d
			});
			var i = n(255367),
				a = n(73800),
				s = n(37234),
				o = n(79808),
				r = n(908820),
				l = n(640896);

			function d() {
				return a.useMemo(() => l.Z, [])
			}

			function c() {
				let e = d();
				return (0, i.jsx)(o.Z, {
					onClose: s.xf,
					config: e,
					initialSetting: r.Z
				})
			}
		},
		908820: function(e, t, n) {
			n.d(t, {
				Z: () => d
			});
			var i = n(281215),
				a = n(403044),
				s = n(938712),
				o = n(614458),
				r = n(388032);
			let l = (0, i.k4)("Overview", {
					useTitle: () => r.intl.string(r.t["/dp6yc"]),
					layout: [a.Z, s.Z, o.Z]
				}),
				d = (0, i.wf)("Notifs", {
					useTitle: () => r.intl.string(r.t.HcoRu7),
					layout: [l]
				})
		},
		640896: function(e, t, n) {
			n.d(t, {
				Z: () => s
			});
			var i = n(154150),
				a = n(908820);
			let s = (0, i.X)(a.Z)
		},
		403044: function(e, t, n) {
			n.d(t, {
				Z: () => d
			});
			var i = n(442837),
				a = n(292556),
				s = n(281215),
				o = n(292959),
				r = n(981631),
				l = n(388032);
			let d = (0, s.qs)("DesktopNotifs", {
				useTitle: () => l.intl.string(l.t["/0WClp"]),
				useSubtitle: () => l.intl.string(l.t.wF9ih4),
				useValue: () => (0, i.e7)([o.Z], () => o.Z.getDesktopType()) !== r.qrD.NEVER,
				setValue: e => a.default.setDesktopType(e ? r.qrD.ALL : r.qrD.NEVER)
			})
		},
		938712: function(e, t, n) {
			n.d(t, {
				Z: () => l
			});
			var i = n(442837),
				a = n(292556),
				s = n(281215),
				o = n(292959),
				r = n(388032);
			let l = (0, s.qs)("EnableUnreadMessageBadge", {
				useTitle: () => r.intl.string(r.t.VH8AIC),
				useSubtitle: () => r.intl.string(r.t["9K4qwc"]),
				useValue: () => (0, i.e7)([o.Z], () => !o.Z.getDisableUnreadBadge()),
				setValue: e => a.default.setDisableUnreadBadge(!e)
			})
		},
		614458: function(e, t, n) {
			n.d(t, {
				Z: () => l
			});
			var i = n(524437),
				a = n(995774),
				s = n(281215),
				o = n(695346),
				r = n(388032);
			let l = (0, s.Em)("ReactionNotifs", {
				useTitle: () => r.intl.string(r.t.Rq0NFh),
				options: [{
					label: () => r.intl.string(r.t["9x/Rtb"]),
					value: i.Ns.NOTIFICATIONS_ENABLED
				}, {
					label: () => r.intl.string(r.t.fJAbQU),
					value: i.Ns.ONLY_DMS
				}, {
					label: () => r.intl.string(r.t["xu+UDQ"]),
					value: i.Ns.NOTIFICATIONS_DISABLED
				}],
				useValue: o.fz.useSetting,
				setValue: e => (0, a.MR)(e, o.fz.getSetting())
			})
		},
		254204: function(e, t, n) {
			e.exports = {
				container: "container_abd9a8",
				topBar: "topBar_abd9a8",
				sidebar: "sidebar_abd9a8",
				content: "content_abd9a8",
				mobile: "mobile_abd9a8",
				mobileNavigationOpen: "mobileNavigationOpen_abd9a8",
				contentHeader: "contentHeader_abd9a8",
				contentHeaderLeft: "contentHeaderLeft_abd9a8",
				contentHeaderButton: "contentHeaderButton_abd9a8",
				topBarButton: "topBarButton_abd9a8",
				arrowButtons: "arrowButtons_abd9a8",
				iconButtonInner: "iconButtonInner_abd9a8"
			}
		},
		788551: function(e, t, n) {
			e.exports = {
				baseControlItem: "baseControlItem_dbfbe0",
				compact: "compact_dbfbe0",
				baseControlItemLeadingElement: "baseControlItemLeadingElement_dbfbe0",
				baseControlItemTrailingElements: "baseControlItemTrailingElements_dbfbe0",
				baseControlItemTitle: "baseControlItemTitle_dbfbe0",
				baseControlItemContent: "baseControlItemContent_dbfbe0",
				secondaryTitle: "secondaryTitle_dbfbe0"
			}
		},
		851005: function(e, t, n) {
			e.exports = {
				toggle: "toggle__6467f"
			}
		},
		355521: function(e, t, n) {
			e.exports = {
				category: "category__35939"
			}
		},
		878282: function(e, t, n) {
			e.exports = {
				header: "header__450f6",
				headerTitle: "headerTitle__450f6"
			}
		},
		49354: function(e, t, n) {
			e.exports = {
				pane: "pane__3e84f"
			}
		},
		594263: function(e, t, n) {
			e.exports = {
				panel: "panel__6131a"
			}
		}
	}
]);
//# sourceMappingURL=c17efdbc0ce6db8d.js.map