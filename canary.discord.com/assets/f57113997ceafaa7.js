"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
	["71418"], {
		62640: function(e) {
			e.exports = "/assets/6ca913b246a05ffc.svg"
		},
		639933: function(e) {
			e.exports = "/assets/8f18dfd4baacebf4.svg"
		},
		516129: function(e, n, t) {
			t.d(n, {
				Z: () => g
			});
			var r = t(255367);
			t(73800);
			var l = t(120356),
				a = t.n(l),
				i = t(780384),
				s = t(481060),
				o = t(410030),
				c = t(44315),
				d = t(208567),
				u = t(981631),
				p = t(758253);

			function m(e) {
				for (var n = 1; n < arguments.length; n++) {
					var t = null != arguments[n] ? arguments[n] : {},
						r = Object.keys(t);
					"function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(t).filter(function(e) {
						return Object.getOwnPropertyDescriptor(t, e).enumerable
					}))), r.forEach(function(n) {
						var r;
						r = t[n], n in e ? Object.defineProperty(e, n, {
							value: r,
							enumerable: !0,
							configurable: !0,
							writable: !0
						}) : e[n] = r
					})
				}
				return e
			}
			let h = u.Ilk.PRIMARY_400,
				f = u.Ilk.PRIMARY_500;

			function g(e) {
				var {
					enabled: n,
					imageClassName: t,
					iconWrapperClassName: l
				} = e, u = function(e, n) {
					if (null == e) return {};
					var t, r, l = function(e, n) {
						if (null == e) return {};
						var t, r, l = {},
							a = Object.keys(e);
						for (r = 0; r < a.length; r++) t = a[r], n.indexOf(t) >= 0 || (l[t] = e[t]);
						return l
					}(e, n);
					if (Object.getOwnPropertySymbols) {
						var a = Object.getOwnPropertySymbols(e);
						for (r = 0; r < a.length; r++) t = a[r], !(n.indexOf(t) >= 0) && Object.prototype.propertyIsEnumerable.call(e, t) && (l[t] = e[t])
					}
					return l
				}(e, ["enabled", "imageClassName", "iconWrapperClassName"]);
				let g = (0, o.ZP)(),
					x = (0, i.wj)(g) ? h : f,
					b = {
						height: 18,
						width: 18,
						color: (0, c.Lq)(x)
					};
				return (0, r.jsx)(d.Z, m({
					className: a()({
						[p.avatarUploader]: n,
						[p.avatarUploaderDisabled]: !n
					}),
					imageClassName: a()(t, p.avatarUploaderInnerSquare, {
						[p.avatarUploaderInnerSquareDisabled]: !n
					}),
					icon: null != u.image && "" !== u.image ? (0, r.jsx)(s.vdY, m({
						size: "custom"
					}, b)) : (0, r.jsx)(s.FmF, m({
						size: "custom"
					}, b)),
					iconClassName: a()(p.avatarUploadIcon, p.hideDefaultIcon),
					iconWrapperClassName: l,
					showIcon: !0,
					showIconDisabled: !0,
					hideSize: !0
				}, u))
			}
		},
		208567: function(e, n, t) {
			t.d(n, {
				S: () => j,
				Z: () => y
			}), t(35282), t(388685);
			var r, l = t(255367),
				a = t(73800),
				i = t(120356),
				s = t.n(i),
				o = t(512722),
				c = t.n(o),
				d = t(481060),
				u = t(624138),
				p = t(813197),
				m = t(981631),
				h = t(388032),
				f = t(348563);

			function g(e, n, t) {
				return n in e ? Object.defineProperty(e, n, {
					value: t,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : e[n] = t, e
			}

			function x(e) {
				for (var n = 1; n < arguments.length; n++) {
					var t = null != arguments[n] ? arguments[n] : {},
						r = Object.keys(t);
					"function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(t).filter(function(e) {
						return Object.getOwnPropertyDescriptor(t, e).enumerable
					}))), r.forEach(function(n) {
						g(e, n, t[n])
					})
				}
				return e
			}

			function b(e, n) {
				return n = null != n ? n : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : (function(e, n) {
					var t = Object.keys(e);
					if (Object.getOwnPropertySymbols) {
						var r = Object.getOwnPropertySymbols(e);
						t.push.apply(t, r)
					}
					return t
				})(Object(n)).forEach(function(t) {
					Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
				}), e
			}

			function j(e) {
				let {
					className: n,
					icon: t = null
				} = e;
				return (0, l.jsx)(d.f6W, {
					theme: m.BRd.LIGHT,
					children: e => (0, l.jsx)("div", {
						className: s()(f.imageUploaderIcon, n, e),
						children: t
					})
				})
			}
			class v extends(r = a.PureComponent) {
				handleExternalFileChange(e) {
					c()(null != this.inputRef.current, "ImageInputRef asked to handleExternalFileChange when not mounted"), this.inputRef.current.handleFileChange(e)
				}
				render() {
					var e;
					let n, t, r, a, {
						image: i,
						hint: o,
						name: c,
						makeURL: g,
						disabled: v,
						onChange: y,
						showIcon: O,
						showIconDisabled: I,
						className: N,
						imageClassName: P,
						iconClassName: C,
						iconWrapperClassName: S,
						icon: w,
						hideSize: k,
						imageStyle: T,
						showRemoveButton: U,
						maxFileSizeBytes: _,
						onFileSizeError: E,
						onOpenImageSelectModal: A,
						"aria-label": R
					} = this.props;
					if (null != (n = null != i && /^data:/.test(i) ? i : g(i)) ? t = 'url("'.concat(n, '")') : null != c && (r = (0, l.jsx)(d.X6q, {
							variant: "heading-xxl/normal",
							color: "always-white",
							className: f.imageUploaderAcronym,
							children: (0, u.Zg)(c)
						})), v) return (0, l.jsx)("div", {
						className: s()(f.imageUploader, f.disabled, N),
						children: (0, l.jsxs)("div", {
							className: s()(f.imageUploaderInner, P),
							style: b(x({}, T), {
								backgroundImage: t
							}),
							children: [r, I && (0, l.jsx)("div", {
								className: s()(f.imageUploaderIcon, f.imageUploaderIconDisabled, C),
								children: w
							})]
						})
					});
					null != i ? a = (0, l.jsx)(d.eee, {
						className: f.removeButton,
						onClick: this.handleRemove,
						children: h.intl.string(h.t.N86XcH)
					}) : k || (a = (0, l.jsx)("small", {
						className: f.sizeInfo,
						children: h.intl.format(h.t.AH4c7e, {
							size: m.IXf
						})
					}));
					let F = null != (e = null != R ? R : o) ? e : h.intl.string(h.t["Ge+94+"]);
					return (0, l.jsxs)("div", {
						className: s()(f.imageUploader, N),
						children: [(0, l.jsx)(d.tEY, {
							within: !0,
							children: (0, l.jsxs)("div", {
								className: O ? s()(f.imageUploaderIconWrapper, S) : void 0,
								children: [(0, l.jsxs)("div", {
									className: s()(f.imageUploaderInner, P),
									style: b(x({}, T), {
										backgroundImage: t
									}),
									children: [(0, l.jsx)("span", {
										"aria-hidden": !0,
										children: r
									}), null != A ? (0, l.jsx)(d.P3F, {
										className: f.imageUploaderFileInput,
										"aria-label": F,
										onClick: A
									}) : (0, l.jsx)(p.ZP, {
										ref: this.inputRef,
										onChange: y,
										className: f.imageUploaderFileInput,
										"aria-label": F,
										tabIndex: 0,
										maxFileSizeBytes: _,
										onFileSizeError: E
									})]
								}), null != o && (0, l.jsx)("div", {
									className: f.imageUploaderHint,
									"aria-hidden": "true",
									children: o
								}), O && (0, l.jsx)(j, {
									className: C,
									icon: w
								})]
							})
						}), U ? a : null]
					})
				}
				constructor(...e) {
					super(...e), g(this, "inputRef", a.createRef()), g(this, "handleRemove", () => {
						this.props.onChange(null)
					})
				}
			}
			g(v, "defaultProps", {
				name: "",
				makeURL: e => e,
				disabled: !1,
				showIcon: !1,
				hideSize: !1,
				showRemoveButton: !0,
				maxFileSizeBytes: 1 / 0,
				icon: null
			});
			let y = v
		},
		603236: function(e, n, t) {
			t.d(n, {
				I: () => N,
				S: () => I
			}), t(997841);
			var r = t(255367),
				l = t(73800),
				a = t(120356),
				i = t.n(a),
				s = t(533800),
				o = t(442837),
				c = t(755721),
				d = t(481060),
				u = t(484614),
				p = t(914010),
				m = t(246946),
				h = t(626135),
				f = t(630388),
				g = t(971130),
				x = t(530436),
				b = t(245335),
				j = t(981631),
				v = t(388032),
				y = t(821022),
				O = t(20493);
			let I = o.ZP.connectStores([m.Z], () => ({
					hideValue: m.Z.hideInstantInvites
				}))(e => {
					let {
						value: n,
						autoFocus: t,
						hideValue: l,
						onCopy: a,
						disabled: i
					} = e;
					return (0, r.jsx)(u.Z, {
						value: n,
						hideMessage: l ? v.intl.string(v.t["6HzNgY"]) : null,
						buttonColor: c.zx.Colors.BRAND,
						onCopy: a,
						autoFocus: t,
						disabled: i
					})
				}),
				N = e => {
					let {
						guild: n,
						noInvitesAvailable: t,
						showFriends: a,
						onClose: o,
						modalState: c,
						isApplicationBypassToggleEnabled: u,
						setInviteFlags: m,
						copyValue: N,
						changePage: P,
						inviteChannel: C,
						source: S,
						code: w,
						guildScheduledEvent: k,
						disabled: T,
						application: U
					} = e, {
						maxAge: _,
						maxUses: E,
						networkError: A,
						showVanityURL: R,
						flags: F
					} = c, z = l.useCallback(() => {
						h.default.track(j.rMx.COPY_INSTANT_INVITE, {
							server: p.Z.getGuildId(),
							channel: null == C ? void 0 : C.id,
							channel_type: null == C ? void 0 : C.type,
							location: S,
							code: w,
							guild_scheduled_event_id: null == k ? void 0 : k.id,
							application_id: null == U ? void 0 : U.id
						})
					}, [null == U ? void 0 : U.id, C, S, w, k]);
					return (0, r.jsxs)(r.Fragment, {
						children: [(0, r.jsx)(I, {
							value: N,
							autoFocus: a,
							onCopy: z,
							disabled: T
						}), u && (0, r.jsxs)(r.Fragment, {
							children: [(0, r.jsx)("div", {
								className: y.divider
							}), (0, r.jsx)(d.j7V, {
								className: y.toggle,
								value: (0, f.yE)(F, s.$.IS_APPLICATION_BYPASS),
								onChange: e => m((0, f.mB)(F, s.$.IS_APPLICATION_BYPASS, e)),
								disabled: T,
								hideBorder: !0,
								children: (0, r.jsxs)("div", {
									className: y.formText,
									children: [(0, r.jsx)(d.Text, {
										variant: "text-md/semibold",
										children: v.intl.string(v.t["1i1bUl"])
									}), (0, r.jsx)(d.ua7, {
										text: v.intl.string(v.t["jvd/LC"]),
										children: e => (0, r.jsx)(d.d3s, function(e) {
											for (var n = 1; n < arguments.length; n++) {
												var t = null != arguments[n] ? arguments[n] : {},
													r = Object.keys(t);
												"function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(t).filter(function(e) {
													return Object.getOwnPropertyDescriptor(t, e).enumerable
												}))), r.forEach(function(n) {
													var r;
													r = t[n], n in e ? Object.defineProperty(e, n, {
														value: r,
														enumerable: !0,
														configurable: !0,
														writable: !0
													}) : e[n] = r
												})
											}
											return e
										}({
											size: "xs",
											color: "currentColor"
										}, e))
									})]
								})
							})]
						}), t || R ? null : (0, r.jsxs)(d.Text, {
							variant: "text-xs/normal",
							className: i()(O.marginTop8, y.footerText),
							children: [(0, g.Vg)(_, E), " ", a ? (0, r.jsx)(d.eee, {
								onClick: () => P(b.RV.SETTINGS),
								children: v.intl.string(v.t.VNe8Pz)
							}) : null]
						}), !t && a && R ? (0, r.jsxs)(d.Text, {
							variant: "text-xs/normal",
							className: i()(O.marginTop8, y.footerText),
							children: [v.intl.string(v.t["0M2U9/"]), " "]
						}) : null, null != A ? (0, r.jsx)(x.W, {
							guild: n,
							error: A,
							onClose: o
						}) : null]
					})
				}
		},
		530436: function(e, n, t) {
			t.d(n, {
				W: () => p
			});
			var r = t(255367),
				l = t(73800),
				a = t(481060),
				i = t(479531),
				s = t(434404),
				o = t(496675),
				c = t(981631),
				d = t(388032),
				u = t(821022);

			function p(e) {
				let {
					guild: n,
					error: t,
					onClose: p
				} = e, m = n.id, h = l.useCallback(() => {
					p(), s.Z.open(m, c.pNK.INVITES)
				}, [m, p]), f = l.useCallback(e => (0, r.jsx)(a.P3F, {
					className: u.errorLink,
					onClick: h,
					children: (0, r.jsx)(a.Text, {
						variant: "text-xs/normal",
						color: "text-link",
						tag: "span",
						children: e
					})
				}), [h]), g = l.useCallback(e => (0, r.jsx)(a.eee, {
					href: c.EYA.INVITES_HELP,
					target: "_blank",
					children: (0, r.jsx)(a.Text, {
						variant: "text-xs/normal",
						color: "text-link",
						tag: "span",
						children: e
					})
				}), []), x = t instanceof i.Z ? t.code !== c.evJ.TOO_MANY_INVITES ? t.getAnyErrorMessage() : o.Z.can(c.Plq.MANAGE_GUILD, n) ? d.intl.format(d.t["H/RUY2"], {
					inviteListHook: f,
					inviteHelpHook: g
				}) : d.intl.string(d.t["/FxH6O"]) : "message" in t ? t.message : d.intl.string(d.t.eAn6z8);
				return (0, r.jsx)(a.Text, {
					className: u.errorMessage,
					variant: "text-xs/normal",
					color: "text-danger",
					children: x
				})
			}
		}
	}
]);
//# sourceMappingURL=f57113997ceafaa7.js.map