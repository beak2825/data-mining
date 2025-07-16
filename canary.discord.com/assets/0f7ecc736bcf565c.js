"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
	["27063"], {
		263145: function(e, t, n) {
			n.d(t, {
				Z: () => h
			});
			var r = n(255367),
				i = n(73800),
				a = n(120356),
				s = n.n(a),
				l = n(600164),
				d = n(930223),
				o = n(20493);

			function c(e, t, n) {
				return t in e ? Object.defineProperty(e, t, {
					value: n,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : e[t] = n, e
			}
			class u extends i.PureComponent {
				render() {
					let {
						focused: e
					} = this.state, {
						value: t,
						placeholder: n,
						error: i,
						className: a,
						maxLength: c,
						autoFocus: u,
						prefix: h,
						disabled: f
					} = this.props;
					return (0, r.jsxs)(l.Z, {
						align: l.Z.Align.CENTER,
						justify: l.Z.Justify.START,
						className: s()(d.prefixInput, a, {
							[d.focused]: e,
							[d.error]: i
						}),
						onClick: this.handleFocusInput,
						children: [(0, r.jsx)(l.Z.Child, {
							grow: 0,
							className: d.prefixInputPrefix,
							children: (0, r.jsx)("span", {
								children: h
							})
						}), (0, r.jsx)(l.Z.Child, {
							className: o.marginReset,
							children: (0, r.jsx)("input", {
								ref: this.setInputRef,
								className: d.prefixInputInput,
								value: t,
								placeholder: n,
								maxLength: c,
								onChange: this.handleChange,
								onFocus: this.handleFocus,
								onBlur: this.handleBlur,
								autoFocus: u,
								disabled: f
							})
						})]
					})
				}
				constructor(e) {
					super(e), c(this, "_inputRef", void 0), c(this, "setInputRef", e => {
						this._inputRef = e
					}), c(this, "handleChange", e => {
						let {
							onChange: t
						} = this.props;
						t(e.currentTarget.value)
					}), c(this, "handleFocus", () => {
						this.setState({
							focused: !0
						})
					}), c(this, "handleBlur", () => {
						this.setState({
							focused: !1
						})
					}), c(this, "handleFocusInput", () => {
						null != this._inputRef && this._inputRef.focus()
					});
					let {
						autoFocus: t
					} = this.props;
					this.state = {
						focused: null != t && t
					}
				}
			}
			let h = u
		},
		203377: function(e, t, n) {
			n.d(t, {
				G7: () => s,
				LG: () => c,
				Pg: () => a,
				ZI: () => d,
				_0: () => l,
				mf: () => u
			});
			var r, i = n(388032);
			let a = 5,
				s = 10,
				l = 30;
			var d = ((r = {})[r.DISPLAY = 0] = "DISPLAY", r[r.PERMISSIONS = 1] = "PERMISSIONS", r[r.MEMBERS = 2] = "MEMBERS", r[r.VERIFICATIONS = 3] = "VERIFICATIONS", r);
			let o = {
				afk_channel_id: () => i.intl.string(i.t.KuYcnZ),
				public_updates_channel_id: () => i.intl.string(i.t.vAyDGR),
				safety_alerts_channel_id: () => i.intl.string(i.t.sMkYEx),
				system_channel_id: () => i.intl.string(i.t.NASFnp)
			};

			function c(e) {
				var t;
				if (0 === Object.keys(e).length) return null;
				let n = Object.keys(e)[0],
					r = null == (t = o[n]) ? void 0 : t.call(o);
				return null != r ? "(".concat(r, ") ").concat(e[n]) : e[n]
			}
			let u = "https://discord.gg"
		},
		70086: function(e, t, n) {
			n.d(t, {
				P: () => o
			});
			var r = n(255367);
			n(73800);
			var i = n(755721),
				a = n(481060),
				s = n(709586),
				l = n(388032),
				d = n(476128);

			function o(e) {
				let {
					onClick: t,
					className: n
				} = e;
				return (0, r.jsxs)(a.gtL, {
					color: i.zx.Colors.GREEN,
					className: n,
					innerClassName: d.upsellButton,
					onClick: t,
					children: [(0, r.jsx)(s.Z, {
						height: 16,
						width: 16,
						className: d.premiumUpsellBadge
					}), " ", l.intl.string(l.t["+7XY39"])]
				})
			}
		},
		927160: function(e, t, n) {
			n.d(t, {
				Z: () => s
			}), n(704826), n(35282);
			var r = n(255367),
				i = n(263145),
				a = n(203377);

			function s(e) {
				let {
					value: t,
					onChange: n,
					error: s,
					disabled: l,
					className: d
				} = e;
				return (0, r.jsx)(i.Z, {
					prefix: "".concat(a.mf, "/"),
					value: t,
					onChange: e => {
						n(e.replace(/ /g, "-"))
					},
					maxLength: 25,
					error: s,
					disabled: l,
					className: d
				})
			}
		},
		755641: function(e, t, n) {
			n.d(t, {
				g: () => c
			});
			var r = n(255367),
				i = n(120356),
				a = n.n(i),
				s = n(481060),
				l = n(510918),
				d = n(254925),
				o = n(602268);

			function c(e) {
				let {
					selectedBadge: t,
					onBadgeClicked: n
				} = e;
				return (0, r.jsx)("div", {
					className: o.pickerGrid,
					children: d.QV.map(e => (0, r.jsx)(s.P3F, {
						className: a()(o.pickerItem, {
							[o.pickerItemSelected]: e === t
						}),
						onClick: () => null == n ? void 0 : n(e),
						children: (0, r.jsx)(l.v, {
							badge: e,
							width: 32,
							height: 32
						})
					}, e))
				})
			}
		},
		835887: function(e, t, n) {
			n.d(t, {
				Z: () => u
			});
			var r = n(255367),
				i = n(73800),
				a = n(481060),
				s = n(434404),
				l = n(755641),
				d = n(195196),
				o = n(388032),
				c = n(602268);

			function u(e) {
				let {
					className: t,
					guildId: n,
					selectedBadge: u
				} = e, h = i.useCallback(e => {
					s.Z.updateGuildProfile(n, {
						badge: e
					})
				}, [n]);
				return (0, r.jsxs)("div", {
					className: t,
					children: [(0, r.jsx)(a.vwX, {
						className: c.sectionTitle,
						children: o.intl.string(d.default.pb7lpK)
					}), (0, r.jsx)(l.g, {
						onBadgeClicked: h,
						selectedBadge: u
					})]
				})
			}
		},
		388661: function(e, t, n) {
			n.d(t, {
				Z: () => g
			});
			var r = n(255367),
				i = n(120356),
				a = n.n(i),
				s = n(442837),
				l = n(481060),
				d = n(510918),
				o = n(494620),
				c = n(63063),
				u = n(434404),
				h = n(999382),
				f = n(981631),
				m = n(195196),
				p = n(388032),
				x = n(602268);
			let g = function(e) {
				let {
					className: t,
					guildId: n,
					tag: i,
					badge: g,
					primaryColor: b,
					secondaryColor: y,
					isDisabled: j = !1
				} = e, v = (0, s.e7)([h.Z], () => h.Z.getProps().originalProfile), C = null != v && v.tag !== i;
				return (0, r.jsxs)("div", {
					className: t,
					children: [(0, r.jsx)(l.vwX, {
						className: x.sectionTitle,
						children: p.intl.string(m.default["tN+8pK"])
					}), (0, r.jsxs)("div", {
						className: x.tagContainer,
						children: [(0, r.jsx)("div", {
							className: x.tagInputContainer,
							children: (0, r.jsx)(l.oil, {
								className: x.tagInputWrapper,
								inputClassName: a()(x.tagInput, "heading-sm/semibold"),
								maxLength: 4,
								autoFocus: !0,
								placeholder: "WUMP",
								prefixElement: (0, r.jsx)(d.v, {
									badge: g,
									width: 40,
									height: 40,
									primaryTintColor: b,
									secondaryTintColor: y
								}),
								disabled: j,
								value: null != i ? i : "",
								onChange: function(e) {
									u.Z.updateGuildProfile(n, {
										tag: e
									})
								}
							})
						}), (0, r.jsx)("div", {
							className: x.tagTooltip,
							children: (0, r.jsx)(l.Text, {
								variant: "text-xs/medium",
								color: "text-muted",
								children: p.intl.string(m.default.CrHXHh)
							})
						})]
					}), C && (0, r.jsx)(o.Z, {
						className: x.tagChangeInfoBox,
						children: (0, r.jsx)(l.Text, {
							variant: "text-xs/medium",
							children: p.intl.format(m.default["4ZKDXl"], {
								articleUrl: c.Z.getArticleURL(f.BhN.SERVER_TAGS)
							})
						})
					})]
				})
			}
		},
		500230: function(e, t, n) {
			n.d(t, {
				Z: () => g
			}), n(388685);
			var r = n(255367),
				i = n(73800),
				a = n(120356),
				s = n.n(a),
				l = n(866442),
				d = n(481060),
				o = n(229190),
				c = n(510918),
				u = n(434404),
				h = n(254925),
				f = n(131085),
				m = n(195196),
				p = n(388032),
				x = n(602268);
			let g = function(e) {
				let {
					className: t,
					guildId: n,
					badge: a,
					primaryColor: g,
					secondaryColor: b
				} = e, [y, j] = i.useState(!1), v = i.useRef(null), C = i.useMemo(() => h.go.every(e => e.primary !== g || e.secondary !== b), [g, b]);

				function N(e) {
					let t = {};
					void 0 !== e.primary && (t.badgeColorPrimary = e.primary), void 0 !== e.secondary && (t.badgeColorSecondary = e.secondary), u.Z.updateGuildProfile(n, t)
				}
				return (0, r.jsxs)("div", {
					className: t,
					children: [(0, r.jsx)(d.vwX, {
						className: x.sectionTitle,
						children: p.intl.string(m.default.zSbMdX)
					}), (0, r.jsxs)("div", {
						className: x.pickerGrid,
						children: [h.go.map(e => (0, r.jsx)(d.P3F, {
							className: s()(x.pickerItem, {
								[x.pickerItemSelected]: e.primary === g && e.secondary === b
							}),
							onClick: () => N(e),
							children: (0, r.jsx)(c.v, {
								badge: a,
								width: 32,
								height: 32,
								primaryTintColor: e.primary,
								secondaryTintColor: e.secondary
							})
						}, "".concat(e.primary).concat(e.secondary))), (0, r.jsx)(o.Z, {
							popoutTargetRef: v,
							showSecondaryColor: f.ER[a] >= 2,
							palette: {
								primary: g,
								secondary: b
							},
							onPrimaryColorChange: e => {
								N({
									primary: (0, l.Rf)(e)
								})
							},
							onSecondaryColorChange: e => {
								N({
									secondary: (0, l.Rf)(e)
								})
							},
							shouldShow: y,
							onRequestClose: () => j(!1),
							children: e => {
								var t, n;
								return (0, r.jsx)(d.P3F, (t = function(e) {
									for (var t = 1; t < arguments.length; t++) {
										var n = null != arguments[t] ? arguments[t] : {},
											r = Object.keys(n);
										"function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
											return Object.getOwnPropertyDescriptor(n, e).enumerable
										}))), r.forEach(function(t) {
											var r;
											r = n[t], t in e ? Object.defineProperty(e, t, {
												value: r,
												enumerable: !0,
												configurable: !0,
												writable: !0
											}) : e[t] = r
										})
									}
									return e
								}({}, e), n = n = {
									innerRef: v,
									onClick: () => {
										j(e => !e)
									},
									className: s()(x.pickerItem, {
										[x.pickerItemSelected]: C
									}),
									children: (0, r.jsx)(d.ilE, {
										size: "custom",
										width: 20,
										height: 20
									})
								}, Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : (function(e, t) {
									var n = Object.keys(e);
									if (Object.getOwnPropertySymbols) {
										var r = Object.getOwnPropertySymbols(e);
										n.push.apply(n, r)
									}
									return n
								})(Object(n)).forEach(function(e) {
									Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
								}), t))
							}
						})]
					})]
				})
			}
		},
		254925: function(e, t, n) {
			n.d(t, {
				QV: () => R,
				ZP: () => O,
				go: () => _
			});
			var r = n(255367),
				i = n(73800),
				a = n(580685),
				s = n(442837),
				l = n(704215),
				d = n(481060),
				o = n(100527),
				c = n(266454),
				u = n(314852),
				h = n(65361),
				f = n(731722),
				m = n(441536),
				p = n(494620),
				x = n(434404),
				g = n(999382),
				b = n(70086),
				y = n(835887),
				j = n(388661),
				v = n(500230),
				C = n(58909),
				N = n(742409),
				S = n(981631),
				I = n(921944),
				P = n(131085),
				E = n(195196),
				Z = n(388032),
				T = n(602268);
			let R = [P.x_.LEAF, P.x_.SWORD, P.x_.HEART, P.x_.FIRE, P.x_.WATER_DROP, P.x_.SKULL, P.x_.MOON, P.x_.LIGHTNING, P.x_.COMPASS, P.x_.TOADSTOOL],
				_ = [{
					primary: "#ff1c90",
					secondary: "#ff7fc0"
				}, {
					primary: "#ff8f1c",
					secondary: "#ffae77"
				}, {
					primary: "#eebe1a",
					secondary: "#fffc7f"
				}, {
					primary: "#32a070",
					secondary: "#57b59e"
				}, {
					primary: "#32839a",
					secondary: "#71c2d9"
				}, {
					primary: "#8a43ff",
					secondary: "#bd95ff"
				}, {
					primary: "#9b3fe5",
					secondary: "#cc8dff"
				}, {
					primary: "#942e8f",
					secondary: "#d46cb5"
				}, {
					primary: "#d14242",
					secondary: "#ff8989"
				}, {
					primary: "#814300",
					secondary: "#a88a6c"
				}, {
					primary: "#717224",
					secondary: "#c3c3c3"
				}, {
					primary: "#5d1d47",
					secondary: "#c58fbb"
				}, {
					primary: "#222222",
					secondary: "#cccccc"
				}],
				O = function() {
					var e, t, n, P;
					(0, Z.useSyncMessages)(E.messagesLoader);
					let O = (0, s.e7)([g.Z], () => g.Z.getGuild()),
						k = (0, s.e7)([g.Z], () => g.Z.getGuildProfile()),
						{
							fetchGuildProfile: w,
							fetchStatus: G
						} = (0, h.u)(null == O ? void 0 : O.id);
					if (i.useEffect(() => {
							(0, c.Q3)(l.z.GUILD_TAG_SERVER_SETTINGS_NEW_BADGE, {
								dismissAction: I.L.AUTO
							})
						}, []), i.useEffect(() => {
							G === u.a.NOT_FETCHED && w()
						}, [w, G]), G !== u.a.FETCHED) return (0, r.jsx)("div", {
						className: T.spinnerContainer,
						children: (0, r.jsx)(d.$jN, {})
					});
					if (null == O || null == k) return null;
					let L = a.Y.VISIBLE.has(k.visibility),
						A = (0, f.up)(O),
						F = !A || (null == k ? void 0 : k.tag) == null,
						D = null != (e = k.badge) ? e : R[0],
						B = null != (t = k.badgeColorPrimary) ? t : _[0].primary,
						U = null != (n = k.badgeColorSecondary) ? n : _[0].secondary,
						M = (0, r.jsxs)(r.Fragment, {
							children: [(0, r.jsx)(j.Z, {
								className: T.section,
								guildId: O.id,
								isDisabled: F,
								tag: null != (P = k.tag) ? P : "",
								badge: D,
								primaryColor: B,
								secondaryColor: U
							}), (0, r.jsx)(y.Z, {
								className: T.section,
								selectedBadge: D,
								guildId: O.id
							}), (0, r.jsx)(v.Z, {
								className: T.section,
								guildId: O.id,
								badge: D,
								primaryColor: B,
								secondaryColor: U
							})]
						});
					return (0, r.jsxs)("div", {
						children: [(0, r.jsx)(d.X6q, {
							className: T.title,
							variant: "heading-lg/semibold",
							children: Z.intl.string(E.default.mf2OwM)
						}), (0, r.jsxs)("div", {
							className: T.container,
							children: [(0, r.jsxs)("div", {
								className: T.leftContent,
								children: [(0, r.jsxs)("div", {
									className: T.descriptionContainer,
									children: [(0, r.jsx)(d.Text, {
										variant: "text-sm/medium",
										color: "text-secondary",
										children: Z.intl.format(E.default["655Un5"], {
											onClickServerProfile: () => {
												x.Z.setSection(S.pNK.PROFILE)
											},
											onClickApplyToJoin: () => {
												x.Z.setSection(S.pNK.ACCESS)
											}
										})
									}), !L && (0, r.jsx)(p.Z, {
										className: T.privateProfileWarning,
										children: (0, r.jsx)(d.Text, {
											variant: "text-xs/medium",
											children: Z.intl.format(E.default.CRbkIy, {
												onClickEditSetting: () => x.Z.setSection(S.pNK.PROFILE, S.KsC.PROFILE_VISIBILITY)
											})
										})
									})]
								}), A ? (0, r.jsxs)("div", {
									className: T.enableSwitchContainer,
									children: [(0, r.jsx)("label", {
										htmlFor: "enable-server-tag",
										children: (0, r.jsx)(d.Text, {
											variant: "text-md/semibold",
											color: "header-primary",
											children: Z.intl.string(E.default["1zams7"])
										})
									}), (0, r.jsx)(d.rsf, {
										id: "enable-server-tag",
										checked: !F,
										onChange: () => {
											if (F) {
												var e;
												x.Z.updateGuildProfile(O.id, {
													tag: null != (e = k.tag) ? e : "",
													badge: D,
													badgeColorPrimary: B,
													badgeColorSecondary: U
												})
											} else x.Z.updateGuildProfile(O.id, {
												tag: null
											})
										}
									})]
								}) : (0, r.jsx)("div", {
									className: T.boostingLinkContainer,
									children: (0, r.jsx)(b.P, {
										onClick: () => {
											(0, m.Z)(O.id, o.Z.GUILD_POWERUPS_GUILD_SETTINGS_TAGS), x.Z.close()
										}
									})
								}), F ? (0, r.jsx)(d.nuw, {
									children: (0, r.jsx)("div", {
										className: T.disabledForm,
										children: M
									})
								}) : M]
							}), (0, r.jsxs)("div", {
								className: T.sidebarContainer,
								children: [(0, r.jsx)(N.Z, {
									guildId: O.id,
									tag: k.tag,
									badge: D,
									primaryColor: B,
									secondaryColor: U
								}), !F && (0, r.jsx)(C.Z, {
									guildId: O.id
								})]
							})]
						})]
					})
				}
		},
		58909: function(e, t, n) {
			n.d(t, {
				Z: () => y
			});
			var r = n(255367);
			n(73800);
			var i = n(120356),
				a = n.n(i),
				s = n(442837),
				l = n(481060),
				d = n(204418),
				o = n(731722),
				c = n(172751),
				u = n(446094),
				h = n(430824),
				f = n(594174),
				m = n(5192),
				p = n(742409),
				x = n(195196),
				g = n(388032),
				b = n(816123);

			function y(e) {
				var t, n;
				let {
					guildId: i
				} = e, y = (0, s.e7)([h.Z], () => h.Z.getGuild(i)), j = (0, s.e7)([f.default], () => f.default.getCurrentUser()), {
					onAdoptTag: v,
					isAdopting: C
				} = (0, u.Z)(i), N = (null == j || null == (t = j.primaryGuild) ? void 0 : t.identityGuildId) === i && (null == j || null == (n = j.primaryGuild) ? void 0 : n.identityEnabled) === !0;
				if (null != j && null != y && (0, o.jq)(y)) return (0, r.jsxs)("div", {
					className: b.container,
					children: [(0, r.jsx)(l.Text, {
						className: b.section,
						variant: "text-xs/medium",
						color: "text-muted",
						children: N ? g.intl.string(x.default["6xBCpK"]) : g.intl.string(x.default.eSRKe3)
					}), (0, r.jsx)("div", {
						className: b.divider
					}), (0, r.jsxs)("div", {
						className: a()(b.section, b.body),
						children: [(0, r.jsx)(p.l, {
							avatar: (0, r.jsx)(d.Z, {
								user: j,
								guildId: i,
								avatarSize: l.EFr.SIZE_40,
								"aria-hidden": !0
							}),
							decorations: (0, r.jsx)(c.m0, {
								guildId: y.id,
								guildBadge: y.profile.badge,
								guildTag: y.profile.tag,
								inline: !1
							}),
							username: m.ZP.getName(i, null, j),
							message: g.intl.string(g.t["6OSasb"])
						}), (0, r.jsx)(l.zxk, {
							variant: "primary",
							text: g.intl.string(g.t.cQDYRk),
							onClick: v,
							loading: C,
							disabled: N,
							fullWidth: !0
						})]
					})]
				})
			}
		},
		229190: function(e, t, n) {
			n.d(t, {
				Z: () => o
			});
			var r = n(255367),
				i = n(73800),
				a = n(481060),
				s = n(388032),
				l = n(404922);

			function d(e) {
				let {
					showSecondaryColor: t,
					palette: n,
					onPrimaryColorChange: d,
					onSecondaryColorChange: o
				} = e, c = i.useRef(null);
				return (0, a.Tbt)(c), (0, r.jsxs)("div", {
					className: l.popoutContainer,
					children: [(0, r.jsx)(a.Text, {
						variant: "text-xs/semibold",
						color: "header-secondary",
						className: l.customColorsHeader,
						children: s.intl.string(s.t.JhNpg4)
					}), (0, r.jsxs)("div", {
						ref: c,
						className: l.colorPickersContainer,
						children: [(0, r.jsxs)("div", {
							className: l.colorColumn,
							children: [(0, r.jsx)("div", {
								className: l.colorSwatch,
								style: {
									backgroundColor: n.primary
								}
							}), (0, r.jsx)(a.Text, {
								variant: "text-xs/medium",
								color: "text-default",
								children: s.intl.string(s.t.C3KTQk)
							}), (0, r.jsx)(a.Z$W, {
								className: l.colorPicker,
								value: n.primary,
								eagerUpdate: !0,
								wrapperComponentType: "div",
								showEyeDropper: !0,
								onChange: d
							})]
						}), t && (0, r.jsxs)("div", {
							className: l.colorColumn,
							children: [(0, r.jsx)("div", {
								className: l.colorSwatch,
								style: {
									backgroundColor: n.secondary
								}
							}), (0, r.jsx)(a.Text, {
								variant: "text-xs/medium",
								color: "text-default",
								children: s.intl.string(s.t["8elvy8"])
							}), (0, r.jsx)(a.Z$W, {
								className: l.colorPicker,
								value: n.secondary,
								eagerUpdate: !0,
								wrapperComponentType: "div",
								showEyeDropper: !0,
								onChange: o
							})]
						})]
					})]
				})
			}

			function o(e) {
				let {
					shouldShow: t,
					showSecondaryColor: n,
					onRequestClose: i,
					children: s,
					palette: l,
					onPrimaryColorChange: o,
					onSecondaryColorChange: c,
					popoutTargetRef: u
				} = e;
				return (0, r.jsx)(a.yRy, {
					targetElementRef: u,
					renderPopout: () => (0, r.jsx)(d, {
						showSecondaryColor: n,
						palette: l,
						onPrimaryColorChange: o,
						onSecondaryColorChange: c
					}),
					position: "top",
					shouldShow: t,
					onRequestClose: i,
					animation: a.yRy.Animation.TRANSLATE,
					animationPosition: "right",
					children: s
				})
			}
		},
		141006: function(e, t, n) {
			n.d(t, {
				Eg: () => i,
				SK: () => r,
				tl: () => a
			});
			let r = {
					primary_color: 0xa9c9ff,
					secondary_color: 0xffbbec,
					tertiary_color: 0xffc3a0
				},
				i = {
					primary_color: 0x9e6bff,
					secondary_color: 0x9fc1ff
				},
				a = [{
					start: 0xaa3b3b,
					end: 0xff4848,
					name: "fire"
				}, {
					start: 0xd4843d,
					end: 0xffde90,
					name: "golddust"
				}, {
					start: 3577974,
					end: 7471006,
					name: "emerald"
				}, {
					start: 5025232,
					end: 0xb2f9ff,
					name: "diamond"
				}, {
					start: 0x9e6bff,
					end: 0x9fc1ff,
					name: "blurple"
				}, {
					start: 0xff5dd6,
					end: 0xff9cbf,
					name: "cupid"
				}, {
					start: 9467253,
					end: 0xffcec6,
					name: "rosegold"
				}, {
					start: 0x9b8666,
					end: 0xffe1b4,
					name: "desert"
				}, {
					start: 7640178,
					end: 0xb3e1b9,
					name: "moss"
				}, {
					start: 8886702,
					end: 0xf1f7ff,
					name: "platinum"
				}, {
					start: 8547266,
					end: 0xb7a7f1,
					name: "plum"
				}, {
					start: 9854847,
					end: 0xffaadc,
					name: "rose"
				}]
		},
		195196: function(e, t, n) {
			n.r(t), n.d(t, {
				default: () => s,
				messagesLoader: () => i
			});
			let {
				createLoader: r
			} = n(515149), i = r({
				bg: () => n.e("22071").then(n.t.bind(n, 997687, 19)),
				cs: () => n.e("73011").then(n.t.bind(n, 994733, 19)),
				da: () => n.e("31303").then(n.t.bind(n, 564932, 19)),
				de: () => n.e("80925").then(n.t.bind(n, 74050, 19)),
				el: () => n.e("5794").then(n.t.bind(n, 474337, 19)),
				"en-GB": () => n.e("44293").then(n.t.bind(n, 354131, 19)),
				"es-419": () => n.e("29644").then(n.t.bind(n, 120107, 19)),
				"es-ES": () => n.e("1648").then(n.t.bind(n, 608286, 19)),
				fi: () => n.e("5627").then(n.t.bind(n, 637679, 19)),
				fr: () => n.e("69654").then(n.t.bind(n, 985418, 19)),
				hi: () => n.e("23061").then(n.t.bind(n, 442932, 19)),
				hr: () => n.e("16172").then(n.t.bind(n, 659324, 19)),
				hu: () => n.e("59318").then(n.t.bind(n, 435615, 19)),
				it: () => n.e("49138").then(n.t.bind(n, 716579, 19)),
				ja: () => n.e("8187").then(n.t.bind(n, 750520, 19)),
				ko: () => n.e("62190").then(n.t.bind(n, 636120, 19)),
				lt: () => n.e("95841").then(n.t.bind(n, 893007, 19)),
				nl: () => n.e("56340").then(n.t.bind(n, 433970, 19)),
				no: () => n.e("89587").then(n.t.bind(n, 330833, 19)),
				pl: () => n.e("78078").then(n.t.bind(n, 614733, 19)),
				"pt-BR": () => n.e("66582").then(n.t.bind(n, 30811, 19)),
				ro: () => n.e("13211").then(n.t.bind(n, 464130, 19)),
				ru: () => n.e("78028").then(n.t.bind(n, 527785, 19)),
				"sv-SE": () => n.e("64754").then(n.t.bind(n, 772019, 19)),
				th: () => n.e("55934").then(n.t.bind(n, 175721, 19)),
				tr: () => n.e("2428").then(n.t.bind(n, 646630, 19)),
				uk: () => n.e("17395").then(n.t.bind(n, 501220, 19)),
				vi: () => n.e("22227").then(n.t.bind(n, 881552, 19)),
				"zh-CN": () => n.e("70629").then(n.t.bind(n, 789052, 19)),
				"zh-TW": () => n.e("20979").then(n.t.bind(n, 558525, 19)),
				"en-US": () => n.e("85865").then(n.bind(n, 850747))
			}, "en-US"), {
				makeMessagesProxy: a
			} = n(515149), s = a(i)
		}
	}
]);
//# sourceMappingURL=0f7ecc736bcf565c.js.map