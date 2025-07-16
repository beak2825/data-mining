"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
	["37447"], {
		87181: function(e) {
			e.exports = "/assets/2431801debe6535e.svg"
		},
		111382: function(e, t, n) {
			n.d(t, {
				n: () => s
			});
			let r = (0, n(818083).B)({
					id: "2024-07_quest_interactable_expired_crendentials",
					kind: "user",
					label: "Quest interactable expired crendentials errors",
					defaultConfig: {
						enabled: !1
					},
					treatments: [{
						id: 0,
						label: "not interactable",
						config: {
							enabled: !1
						}
					}, {
						id: 1,
						label: "interactable",
						config: {
							enabled: !0
						}
					}]
				}),
				s = () => r.useExperiment({
					location: "never"
				}, {
					autoTrackExposure: !1
				}).enabled
		},
		685613: function(e, t, n) {
			n.d(t, {
				US: () => j,
				ZP: () => C,
				fF: () => g
			});
			var r, s, o = n(255367);
			n(73800);
			var i = n(120356),
				a = n.n(i),
				l = n(692547),
				c = n(780384),
				u = n(481060),
				d = n(113434),
				m = n(475595),
				p = n(78826),
				h = n(981631),
				x = n(582835),
				g = ((r = {})[r.SMALL = 24] = "SMALL", r[r.MEDIUM = 32] = "MEDIUM", r),
				j = ((s = {})[s.SMALL = 2] = "SMALL", s[s.MEDIUM = 8] = "MEDIUM", s);
			let C = function(e) {
				let {
					className: t,
					logotypeClassName: n,
					gameTileSize: r = 24,
					quest: s,
					separatorSpacing: i = 2,
					theme: g = h.BRd.DARK,
					withCosponsor: j = !0,
					withGameTile: C = !0,
					onLoadComplete: f
				} = e, b = (0, c.wj)(g) ? h.BRd.DARK : h.BRd.LIGHT, v = (0, d.Gd)(s.id, b), y = j && null != s.config.cosponsorMetadata && null != v;
				return (0, o.jsxs)("div", {
					className: a()(x.partnerBranding, t),
					children: [C && (0, o.jsx)(p.Fl, {
						id: "QuestPartnerBranding_gameTile",
						children: e => (0, o.jsx)("img", {
							ref: e,
							className: x.partnerBrandingGameTile,
							alt: "",
							src: (0, m.fh)(s, m.eC.GAME_TILE, b).url,
							style: {
								borderRadius: function(e) {
									switch (e) {
										case 24:
											return 3;
										case 32:
											return 4
									}
								}(r),
								width: r,
								height: r
							},
							onLoad: f
						})
					}), (0, o.jsx)(p.Fl, {
						id: "QuestPartnerBranding_gameLogotype",
						children: e => (0, o.jsx)("img", {
							ref: e,
							className: a()(x.partnerBrandingLogotype, n, {
								[x.partnerBrandingLogotypeWithCosponsor]: y
							}),
							alt: s.config.messages.gameTitle,
							src: (0, m.fh)(s, m.eC.LOGO_TYPE, b).url,
							onLoad: f
						})
					}), y && (0, o.jsxs)(o.Fragment, {
						children: [(0, o.jsx)("div", {
							className: x.cosponsorBrandSeparatorWrapper,
							style: {
								margin: "0 ".concat(i, "px")
							},
							children: (0, o.jsx)(u.P$X, {
								className: x.cosponsorBrandSeparator,
								color: l.Z.colors.WHITE
							})
						}), (0, o.jsx)(p.Fl, {
							id: "QuestPartnerBranding_cosponsorLogotype",
							children: e => {
								var t, r;
								return (0, o.jsx)("img", {
									ref: e,
									className: a()(x.partnerBrandingLogotype, x.partnerBrandingLogotypeWithCosponsor, n),
									alt: null != (r = null == (t = s.config.cosponsorMetadata) ? void 0 : t.name) ? r : "",
									src: v.url,
									onLoad: f
								})
							}
						})]
					})]
				})
			}
		},
		340100: function(e, t, n) {
			n.d(t, {
				Z: () => d
			}), n(784620), n(973216);
			var r = n(255367);
			n(73800);
			var s = n(120356),
				o = n.n(s),
				i = n(692547),
				a = n(481060),
				l = n(113434),
				c = n(26650),
				u = n(485662);
			let d = function(e) {
				let {
					className: t,
					color: n = i.Z.colors.WHITE,
					quest: s,
					isInventory: d
				} = e, m = (0, l.qb)(e.quest), {
					percentComplete: p,
					completedRatioDisplay: h
				} = (0, l.I)(s);
				return !d && m.length > 0 ? (0, r.jsx)(c.Z, {
					children: m.at(0)
				}) : (0, r.jsxs)("div", {
					className: o()(u.wrapper, t),
					style: {
						color: n.css
					},
					children: [(0, r.jsxs)("div", {
						className: u.percentCompleteWrapper,
						children: [(0, r.jsx)(a.Text, {
							variant: "text-xs/semibold",
							className: u.percentCompleteLabel,
							color: "none",
							children: h
						}), (0, r.jsx)("div", {
							className: u.percentCompleteLabelOffset,
							style: {
								width: "".concat(100 - p, "%")
							}
						})]
					}), (0, r.jsx)("div", {
						className: u.progressBar,
						role: "progressbar",
						"aria-valuenow": p,
						children: (0, r.jsx)("div", {
							className: u.progressBarFill,
							style: {
								width: "".concat(p, "%")
							}
						})
					}), m.length > 0 && (0, r.jsx)(c.Z, {
						isInventory: d,
						children: m.at(0)
					})]
				})
			}
		},
		611855: function(e, t, n) {
			n.d(t, {
				Z: () => d
			});
			var r = n(255367);
			n(73800);
			var s = n(120356),
				o = n.n(s),
				i = n(780384),
				a = n(481060),
				l = n(410030),
				c = n(388032),
				u = n(286737);
			let d = function(e) {
				let {
					className: t,
					color: n = "header-primary",
					textOpacity: s = .9
				} = e, d = (0, l.Fg)(), m = (0, i.wj)(d);
				return (0, r.jsxs)(a.Text, {
					variant: "text-xxs/medium",
					color: n,
					className: o()(u.promotedTag, t),
					children: [(0, r.jsx)("span", {
						className: u.promotedTagBackground,
						style: {
							backgroundColor: "rgba(0, 0, 0, ".concat(m ? .2 : .08, ")")
						}
					}), (0, r.jsx)("span", {
						style: {
							opacity: s
						},
						children: c.intl.string(c.t.o6FLcH)
					})]
				})
			}
		},
		128535: function(e, t, n) {
			n.d(t, {
				Z: () => N
			}), n(539854), n(388685);
			var r = n(255367);
			n(73800);
			var s = n(120356),
				o = n.n(s),
				i = n(959078),
				a = n(442837),
				l = n(755721),
				c = n(481060),
				u = n(607070),
				d = n(553795),
				m = n(358085),
				p = n(617136),
				h = n(915750),
				x = n(111382),
				g = n(113434),
				j = n(918701),
				C = n(667105),
				f = n(388032),
				b = n(166246);
			let v = e => 0 === e.length ? b.warning : b.danger,
				y = (e, t) => 0 === e.length ? f.intl.formatToPlainString(f.t.gX0Qc3, {
					gameTitle: t
				}) : f.intl.formatToPlainString(f.t["28Ql29"], {
					gameTitle: t
				}),
				O = e => {
					let {
						quest: t,
						location: n,
						errors: s,
						gameTitle: o,
						consoleHelpArticle: a,
						expiredCredentialsInteractable: l,
						impressionId: u,
						sourceQuestContent: h
					} = e;
					if (0 === s.length) return (0, r.jsx)(c.Text, {
						variant: "text-sm/medium",
						color: "text-muted",
						children: f.intl.format(f.t.GXqvCw, {
							gameTitle: o
						})
					});
					let x = [];
					(0, j.Nj)({
						quest: t
					}) && x.push((0, m.isWeb)() ? f.intl.string(f.t["0UTkPz"]) : f.intl.string(f.t.XGRUho));
					let g = [...x, ...s.map(e => {
						if (e.type !== i.K.EXPIRED_CREDENTIAL || !l) return e.message;
						let r = d.Z.getAccount(e.connected_account_id, e.connected_account_type),
							s = (0, j.C9)(e),
							o = (0, j._j)(e);
						return f.intl.format(s, {
							account_name: null == r ? void 0 : r.name,
							onClick: () => {
								(0, j.fY)({
									quest: t,
									platformType: o
								}, {
									content: n,
									ctaContent: p.jZ.DEFIBRILLATOR_RECONNECT_CONSOLE,
									impressionId: u,
									sourceQuestContent: h
								})
							}
						})
					}), a];
					return (0, r.jsx)(c.Text, {
						variant: "text-sm/medium",
						color: "text-muted",
						children: g.reduce((e, t) => [...e, t, " "], [])
					})
				},
				N = function(e) {
					let t = e.quest.config.messages.gameTitle,
						n = (0, a.e7)([u.Z], () => u.Z.useReducedMotion),
						s = (0, C.k3)(e.quest.id, e.location, e.sourceQuestContent),
						i = (0, x.n)(),
						d = (0, p.O5)(),
						m = (0, h.aM)(),
						j = (0, C.g2)({
							useReducedMotion: n,
							className: b.refreshIcon
						}),
						{
							errorHints: N,
							startingConsoleQuest: T,
							startConsoleQuest: E
						} = (0, g.GI)({
							questId: e.quest.id,
							beforeRequest: () => {
								j.startAnimation(), d({
									questId: e.quest.id,
									questContent: e.location,
									questContentCTA: p.jZ.DEFIBRILLATOR,
									sourceQuestContent: e.sourceQuestContent
								})
							},
							afterRequest: j.stopAnimation
						});
					return (0, r.jsxs)("div", {
						className: o()(b.container, {
							[b.inFlight]: T
						}),
						children: [(0, r.jsxs)("div", {
							className: b.info,
							children: [(0, r.jsxs)("div", {
								className: b.header,
								children: [(0, r.jsx)(c.P4T, {
									className: o()(b.headerIcon, v(N)),
									size: "custom",
									color: "currentColor",
									width: 16,
									height: 16
								}), (0, r.jsx)(c.Text, {
									variant: "text-sm/semibold",
									children: y(N, t)
								})]
							}), O({
								quest: e.quest,
								errors: N,
								gameTitle: t,
								location: e.location,
								consoleHelpArticle: s,
								expiredCredentialsInteractable: i,
								impressionId: m,
								sourceQuestContent: e.sourceQuestContent
							})]
						}), (0, r.jsx)("div", {
							className: b.cta,
							children: (0, r.jsx)(l.zx, {
								color: l.Tt.PRIMARY,
								onClick: E,
								disabled: T,
								children: (0, r.jsxs)("div", {
									className: b.ctaInner,
									children: [j.render(), f.intl.string(f.t.nPThNT)]
								})
							})
						})]
					})
				}
		},
		87894: function(e, t, n) {
			n.d(t, {
				DJ: () => a,
				U0: () => u,
				W_: () => o,
				Z$: () => c,
				Z0: () => m,
				iM: () => i,
				j2: () => d,
				jc: () => l,
				uq: () => s
			});
			var r = n(497505);

			function s(e) {
				return [r.jn.GIFT_INVENTORY_FOR_YOU, r.jn.GIFT_INVENTORY_OTHER].includes(e)
			}

			function o(e) {
				return e === r.jn.GIFT_INVENTORY_FOR_YOU || !s(e)
			}

			function i(e) {
				let {
					quest: t,
					location: n
				} = e, {
					userStatus: r
				} = t;
				return (null == r ? void 0 : r.enrolledAt) != null && null == r.completedAt || o(n)
			}
			let a = 100,
				l = 20,
				c = 32,
				u = 1e3,
				d = 460,
				m = 280
		},
		37303: function(e, t, n) {
			n.d(t, {
				Z: () => h
			}), n(388685);
			var r = n(255367),
				s = n(73800),
				o = n(108542);
			n(442837);
			var i = n(113434);
			n(569984);
			var a = n(497505),
				l = n(602667),
				c = n(87894),
				u = n(372113),
				d = n(206044),
				m = n(266843),
				p = n(463910);

			function h(e) {
				let {
					quest: t,
					location: n,
					initiallyExpanded: h,
					contentPosition: x,
					sourceQuestContent: g
				} = e, [j, C] = s.useState(!1), f = s.useCallback(() => C(!0), []), b = s.useCallback(() => C(!1), []), v = (0, i.tP)(t), {
					containerRef: y,
					size: O,
					height: N
				} = (0, m.h)(), {
					expansionSpring: T,
					isAnimating: E,
					isExpanded: q,
					toggleExpanded: S
				} = (0, m.O)({
					initiallyExpanded: h || (0, c.iM)({
						location: n,
						quest: t
					})
				}), P = null != N ? N : c.U0;
				return (0, r.jsx)(l.A, {
					questOrQuests: t,
					questContent: n,
					questContentPosition: x,
					trackGuildAndChannelMetadata: n === a.jn.QUESTS_EMBED,
					sourceQuestContent: g,
					children: e => (0, r.jsx)(o.animated.div, {
						style: {
							maxHeight: n === a.jn.QUESTS_EMBED ? void 0 : T.to({
								range: [0, 1],
								output: [c.DJ, P]
							})
						},
						className: p.questsCard,
						onFocus: f,
						onMouseEnter: f,
						onBlur: b,
						onMouseLeave: b,
						children: (0, r.jsxs)("div", {
							ref: t => {
								e.current = t, y.current = t
							},
							children: [(0, r.jsx)(d.Z, {
								isQuestExpired: v,
								location: n,
								quest: t,
								size: O,
								expansionSpring: T,
								isAnimating: E,
								isExpanded: q,
								contentPosition: x,
								toggleExpanded: S,
								sourceQuestContent: g
							}), (0, r.jsx)(u.Z, {
								quest: t,
								isQuestExpired: v,
								location: n,
								size: O,
								isFocused: j,
								isExpanded: q,
								isAnimating: E,
								contentPosition: x,
								sourceQuestContent: g
							})]
						})
					})
				})
			}
		},
		372113: function(e, t, n) {
			n.d(t, {
				Z: () => Q
			});
			var r = n(255367),
				s = n(73800),
				o = n(120356),
				i = n.n(o),
				a = n(442837),
				l = n(755721),
				c = n(481060),
				u = n(607070),
				d = n(706454),
				m = n(63063),
				p = n(930153),
				h = n(617136),
				x = n(113434),
				g = n(569984),
				j = n(497505),
				C = n(918701),
				f = n(373370),
				b = n(566078),
				v = n(340100),
				y = n(644646),
				O = n(667105),
				N = n(341907),
				T = n(128535),
				E = n(87894),
				q = n(2660),
				S = n(46140),
				P = n(981631),
				w = n(388032),
				R = n(717735);

			function _(e) {
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
			}

			function I(e, t) {
				return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : (function(e, t) {
					var n = Object.keys(e);
					if (Object.getOwnPropertySymbols) {
						var r = Object.getOwnPropertySymbols(e);
						n.push.apply(n, r)
					}
					return n
				})(Object(t)).forEach(function(n) {
					Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
				}), e
			}
			let D = (e, t, n) => (0, E.uq)(e) && !n && "lg" === t ? "text-lg/medium" : "lg" === t ? "text-md/medium" : "sm" === t ? "text-sm/medium" : "text-xs/medium";

			function M(e) {
				let {
					containerSize: t,
					onClick: n,
					children: s,
					tabIndex: o
				} = e;
				return "xs" === t ? (0, r.jsx)(c.P3F, {
					tabIndex: o,
					className: R.learnMoreLink,
					tag: "span",
					onClick: n,
					children: (0, r.jsx)(c.Text, {
						variant: "text-sm/medium",
						color: "text-link",
						children: s
					})
				}) : (0, r.jsx)(l.zx, {
					tabIndex: o,
					wrapperClassName: R.ctaButtonWrapper,
					color: l.Tt.PRIMARY,
					onClick: n,
					children: s
				})
			}

			function A(e) {
				let {
					quest: t,
					progressState: n,
					isCollectibleQuest: s,
					questContent: o,
					questContentPosition: i,
					inGiftInventory: d,
					sourceQuestContent: m
				} = e, p = n >= x.OH.COMPLETED, h = (0, a.e7)([u.Z], () => u.Z.useReducedMotion), j = (0, a.e7)([g.Z], () => g.Z.isEnrolling(t.id)), f = (0, C.q8)(t), b = (0, C.Vl)(t), v = (0, O.Ks)({
					progressState: n,
					quest: t,
					questContent: o,
					isCollectibleQuest: s,
					questContentPosition: i,
					inGiftInventory: d,
					isVideoQuest: f,
					inGameQuest: b,
					sourceQuestContent: m
				}), y = p && !h ? c.gtL : l.zx;
				return (0, r.jsx)(c.ua7, {
					text: v.tooltipText,
					tooltipContentClassName: R.ctaTooltipText,
					children: e => {
						var t;
						return (0, r.jsx)(y, I(_({}, e), {
							wrapperClassName: R.ctaButtonWrapper,
							color: l.Tt.BRAND,
							disabled: null == v.onClick,
							submitting: j,
							onClick: null != (t = v.onClick) ? t : () => {},
							children: (0, r.jsx)("div", {
								className: R.ctaButtonInner,
								children: v.text
							})
						}))
					}
				}, v.tooltipText)
			}
			let Q = e => {
				var t;
				let {
					quest: n,
					location: o,
					size: u,
					isFocused: O,
					isQuestExpired: Q,
					isExpanded: Z,
					isAnimating: L,
					contentPosition: k,
					sourceQuestContent: B
				} = e, U = (0, x._Q)(n), G = (0, x.B6)(null == (t = n.userStatus) ? void 0 : t.completedAt, {
					year: "numeric",
					month: "long",
					day: "numeric"
				}), W = U >= x.OH.ACCEPTED, F = U >= x.OH.COMPLETED, z = U >= x.OH.CLAIMED, X = (0, C.Xv)(n.config), H = (0, E.uq)(o), Y = o === j.jn.QUESTS_EMBED, V = Z || L, J = W && !z && H, K = (0, x.t5)(n, S.dr.QUESTS_CARD, o, B), {
					xboxAndPlaystationAccounts: $
				} = (0, x.z6)(), ee = (0, h.O5)(), et = s.useMemo(() => b.r.build(n.config), [n.config]), en = (0, x.Rf)(n), er = (0, f.DD)({
					quest: n,
					taskDetails: en,
					location: S.dr.QUESTS_CARD,
					questContent: j.jn.QUESTS_EMBED,
					sourceQuestContent: B
				}), es = (0, a.e7)([g.Z], () => null != g.Z.questEnrollmentBlockedUntil, []), eo = (0, a.e7)([d.default], () => d.default.locale), ei = (0, x.z)(n), ea = H && X, el = Q && !F, ec = $.length > 0 && H && (0, C.$J)(n) && W && !F && !ei, eu = (0, r.jsx)(y.Z, {
					autoplay: O,
					className: i()(R.gridImg, {
						[R.questRewardGiftInventory]: H && "lg" === u,
						[R.questRewardEmbed]: Y && "lg" === u,
						[R.questRewardEmbedSm]: "sm" === u,
						[R.questRewardEmbedXs]: "xs" === u
					}),
					learnMoreStyle: H ? null : "text",
					location: S.dr.QUESTS_CARD,
					quest: n,
					questContent: o,
					questContentPosition: k,
					sourceQuestContent: B
				});
				return (0, r.jsxs)("div", {
					className: R.root,
					children: [(0, r.jsxs)("div", {
						className: i()(R.outerContainer, {
							[R.outerContainerSm]: "sm" === u,
							[R.outerContainerXs]: "xs" === u,
							[R.outerContainerNoProgress]: !J
						}),
						style: {
							visibility: V ? "inherit" : "hidden"
						},
						"aria-hidden": !V,
						children: [(0, r.jsx)(c.ua7, {
							text: el ? w.intl.string(w.t["04MTGR"]) : null,
							tooltipContentClassName: R.rewardTileExpirationTooltip,
							shouldShow: el,
							children: e => (0, r.jsxs)("div", I(_({
								className: R.rewardTileWrapper
							}, e), {
								children: [Q && (0, r.jsx)("div", {
									className: R.rewardTileExpired,
									children: (0, r.jsx)(c.P4T, {
										color: c.TVs.colors.WHITE
									})
								}), ea ? (0, r.jsx)(q.Z, {
									questConfig: n.config,
									fallback: eu,
									isFocused: O
								}) : eu]
							}))
						}), (0, r.jsxs)("div", {
							className: i()(R.gridText, R.taskDetails),
							children: [(0, r.jsx)(c.Text, {
								variant: D(o, u, W),
								className: R.taskInstructions,
								children: Q ? w.intl.formatToPlainString(w.t["ge+AJi"], {
									questName: n.config.messages.questName
								}) : K
							}), (0, r.jsx)(c.Text, {
								variant: "lg" === u ? "text-sm/medium" : "text-xs/medium",
								color: "text-muted",
								children: function(e) {
									var t, n, r, s, o;
									let {
										quest: i,
										locale: a,
										isQuestExpired: l,
										sharedQuestFields: c,
										collectibleQuestRewardDescription: u,
										formattedCompletionDate: d
									} = e, h = (null == (t = i.userStatus) ? void 0 : t.completedAt) != null, x = h && (null == (n = i.userStatus) ? void 0 : n.claimedAt) != null, g = (0, C.oo)({
										quest: i
									}), j = c.defaultRewardNameWithArticle;
									if (x) {
										let e = g ? (0, C.o9)({
												quest: i,
												idx: null == (r = i.userStatus) ? void 0 : r.claimedTier
											}) : null,
											t = null != (s = null == e ? void 0 : e.messages.nameWithArticle) ? s : null;
										return null != t ? w.intl.formatToPlainString(w.t.RrxtPT, {
											reward: t,
											date: d
										}) : w.intl.formatToPlainString(w.t.zNoqRU, {
											reward: j,
											date: d
										})
									}
									if (h) return g ? w.intl.formatToPlainString(w.t.l1jCMz, {
										date: d
									}) : w.intl.formatToPlainString(w.t.zNoqRU, {
										reward: j,
										date: d
									});
									let f = g ? (0, C.o9)({
										quest: i,
										idx: 0
									}) : null;
									return l ? w.intl.formatToPlainString(w.t.DT3aub, {
										reward: null != (o = null == f ? void 0 : f.messages.nameWithArticle) ? o : j
									}) : null != f && null != f.approximateCount ? w.intl.format(w.t["4bMK19"], {
										maxReward: f.messages.nameWithArticle,
										maxRewardCount: (0, p.Bs)(f.approximateCount, a),
										helpCenterLink: m.Z.getArticleURL(P.BhN.QUESTS_LEARN_MORE)
									}) : u
								}({
									quest: n,
									locale: eo,
									isQuestExpired: Q,
									sharedQuestFields: et,
									collectibleQuestRewardDescription: er,
									formattedCompletionDate: G
								})
							})]
						}), es ? (0, r.jsxs)("div", {
							className: i()(R.ctaButtonContainer, R.gridCtaButtons),
							children: [(0, r.jsx)(l.zx, {
								color: l.Tt.PRIMARY,
								disabled: !0,
								className: R.questEnrollmentBlockedButton,
								children: w.intl.string(w.t.V293qq)
							}), (0, r.jsx)(l.zx, {
								color: l.Tt.BRAND,
								onClick: () => (0, N.openQuestMinorEnrollmentBlockModal)(n, o, B),
								className: R.questEnrollmentBlockedButton,
								children: w.intl.string(w.t.vY9GgI)
							})]
						}) : (0, r.jsxs)("div", {
							className: i()(R.ctaButtonContainer, R.gridCtaButtons),
							children: [!H && (0, r.jsx)(M, {
								containerSize: u,
								onClick: () => {
									(0, N.navigateToQuestHome)({
										fromContent: o,
										questId: n.id
									}), ee({
										questId: n.id,
										questContent: o,
										questContentPosition: k,
										questContentCTA: h.jZ.LEARN_MORE,
										sourceQuestContent: B
									})
								},
								children: w.intl.string(w.t.LLLLPD)
							}), Q && !F ? null : (0, r.jsx)(A, {
								quest: n,
								progressState: U,
								isCollectibleQuest: X,
								questContent: o,
								inGiftInventory: H,
								sourceQuestContent: B
							})]
						}), J && (0, r.jsx)(v.Z, {
							className: R.gridProgressBar,
							color: F ? c.TVs.colors.TEXT_FEEDBACK_POSITIVE : c.TVs.colors.BG_BRAND,
							quest: n,
							isInventory: H
						})]
					}), ec && (0, r.jsxs)("div", {
						className: R.microphoneContainer,
						children: [(0, r.jsx)("div", {
							className: R.separator
						}), (0, r.jsx)(T.Z, {
							quest: n,
							location: o,
							sourceQuestContent: B
						})]
					})]
				})
			}
		},
		206044: function(e, t, n) {
			n.d(t, {
				Z: () => M
			}), n(388685);
			var r = n(255367),
				s = n(73800),
				o = n(120356),
				i = n.n(o),
				a = n(108542),
				l = n(722770),
				c = n(846519),
				u = n(755721),
				d = n(481060),
				m = n(393238),
				p = n(393903),
				h = n(448986),
				x = n(572004),
				g = n(617136),
				j = n(113434),
				C = n(497505),
				f = n(918701),
				b = n(566078),
				v = n(685613),
				y = n(611855),
				O = n(644646),
				N = n(968435),
				T = n(670638),
				E = n(87894),
				q = n(46140),
				S = n(231338),
				P = n(388032),
				w = n(491821);

			function R(e) {
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
			}

			function _(e, t) {
				return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : (function(e, t) {
					var n = Object.keys(e);
					if (Object.getOwnPropertySymbols) {
						var r = Object.getOwnPropertySymbols(e);
						n.push.apply(n, r)
					}
					return n
				})(Object(t)).forEach(function(n) {
					Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
				}), e
			}
			let I = (0, a.animated)(d.CJ0),
				D = e => {
					var {
						quest: t,
						location: n,
						questContentPosition: o,
						sourceQuestContent: i
					} = e, a = function(e, t) {
						if (null == e) return {};
						var n, r, s = function(e, t) {
							if (null == e) return {};
							var n, r, s = {},
								o = Object.keys(e);
							for (r = 0; r < o.length; r++) n = o[r], t.indexOf(n) >= 0 || (s[n] = e[n]);
							return s
						}(e, t);
						if (Object.getOwnPropertySymbols) {
							var o = Object.getOwnPropertySymbols(e);
							for (r = 0; r < o.length; r++) n = o[r], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (s[n] = e[n])
						}
						return s
					}(e, ["quest", "location", "questContentPosition", "sourceQuestContent"]);
					let [l, m] = s.useState(!1), p = s.useRef(new c.V7), h = (0, g.O5)();
					s.useEffect(() => {
						let e = p.current;
						return function() {
							e.stop()
						}
					}, []);
					let j = () => {
						h({
							questId: t.id,
							questContent: n,
							questContentCTA: g.jZ.COPY_QUEST_URL,
							questContentPosition: o,
							sourceQuestContent: i
						}), (0, x.JG)((0, f.Rs)(t.id), () => {
							m(!0), p.current.start(1e3, () => m(!1))
						})
					};
					return (0, r.jsx)(d.ua7, {
						forceOpen: l,
						shouldShow: l,
						color: d.ua7.Colors.GREEN,
						text: P.intl.string(P.t.MSaeTU),
						children: () => (0, r.jsx)(u.zx, _(R({}, a), {
							className: w.shareButton,
							color: u.zx.Colors.PRIMARY,
							size: u.zx.Sizes.SMALL,
							onClick: j,
							children: P.intl.string(P.t["5Z6rz8"])
						}))
					})
				},
				M = e => {
					var t;
					let {
						isQuestExpired: n,
						quest: o,
						location: c,
						size: u,
						expansionSpring: x,
						isAnimating: f,
						isExpanded: M,
						contentPosition: A,
						toggleExpanded: Q,
						sourceQuestContent: Z
					} = e, {
						ref: L,
						height: k
					} = (0, m.ZP)(), [B, U] = s.useState(null), [G, W] = s.useState(null), F = (0, h.Z)(e => {
						let t = e.target;
						U(t.offsetWidth), W(t.scrollWidth)
					}), z = (0, p.y)(F), X = (0, E.uq)(c), H = c === C.jn.QUESTS_EMBED, Y = (0, j.t5)(o, q.dr.QUESTS_CARD, c, Z), V = (null == (t = o.userStatus) ? void 0 : t.completedAt) != null, J = (0, g.O5)(), K = (0, j.B6)(o.config.expiresAt), $ = (0, j.B6)(b.r.build(o.config).rewardsExpireAt), ee = s.useMemo(() => null != o.config.cosponsorMetadata, [o]), et = e => {
						e.stopPropagation(), e.currentTarget.blur(), Q(), J({
							questId: o.id,
							questContent: c,
							questContentCTA: M ? g.jZ.COLLAPSE : g.jZ.EXPAND,
							questContentPosition: A,
							sourceQuestContent: Z
						})
					}, en = (0, r.jsx)(v.ZP, {
						className: w.partnerBranding,
						logotypeClassName: ee ? w.partnerBrandingLogotypes : void 0,
						gameTileSize: v.fF.MEDIUM,
						quest: o,
						separatorSpacing: v.US.MEDIUM,
						theme: S.BR.DARK,
						withGameTile: !H || null == o.config.cosponsorMetadata
					});
					return (0, r.jsxs)("div", {
						className: i()(w.outerContainer, {
							[w.outerContainerGiftInventory]: X,
							[w.outerContainerEmbed]: H,
							[w.outerContainerXs]: "xs" === u
						}),
						"aria-label": P.intl.string(P.t.dcl9MT),
						style: {
							height: X ? k : void 0
						},
						children: [(0, r.jsx)(N.Z, {
							quest: o,
							dimensions: {
								width: 660,
								height: 185
							},
							className: w.questSplash
						}), (0, r.jsxs)("div", {
							className: w.header,
							"aria-expanded": M,
							children: [(0, r.jsxs)(a.animated.div, {
								className: i()(w.headerContent, {
									[w.headerContentEmbed]: H
								}),
								style: {
									y: X ? x.to({
										range: [0, 1],
										output: [E.DJ, 0]
									}) : void 0
								},
								children: [X && (0, r.jsx)(a.animated.div, {
									className: w.headerCollapsedContent,
									style: {
										opacity: x.to({
											range: [0, 1],
											output: [1, 0]
										}),
										visibility: f || !M ? "inherit" : "hidden"
									},
									"aria-hidden": !f && M,
									children: (0, r.jsxs)(d.kL8, {
										"aria-label": P.intl.string(P.t.dcl9MT),
										onClick: et,
										className: w.headerCollapsedClickableContainer,
										children: [(0, r.jsx)("div", {
											className: w.headerCollapsedContentRewardWrapper,
											children: (0, r.jsx)(O.Z, {
												quest: o,
												questContent: c,
												className: w.headerCollapsedRewardTile,
												location: q.dr.QUESTS_CARD,
												sourceQuestContent: Z
											})
										}), (0, r.jsxs)("div", {
											className: w.headerCollapsedContentCopyWrapper,
											children: [(0, r.jsxs)("div", {
												className: w.headerCollapsedContentCopyLogos,
												children: [en, (0, r.jsx)(y.Z, {
													color: "always-white"
												})]
											}), (0, r.jsx)(d.Text, {
												variant: "text-xs/medium",
												children: Y
											})]
										})]
									})
								}), (0, r.jsxs)(a.animated.div, {
									ref: e => {
										L.current = e
									},
									className: i()(w.headerExpandedContent, {
										[w.outerContainerGiftInventory]: X,
										[w.outerContainerEmbed]: H
									}),
									style: {
										opacity: x.to({
											range: [0, 1],
											output: [0, 1]
										}),
										visibility: f || M ? "inherit" : "hidden"
									},
									"aria-hidden": !f && !M,
									children: [(0, r.jsxs)("div", {
										className: w.headerExpandedWrapper,
										children: [(0, r.jsxs)("div", {
											className: w.iconLogotypeContainer,
											children: [en, H ? null : (0, r.jsx)(y.Z, {
												color: "always-white"
											})]
										}), (0, r.jsxs)("div", {
											className: w.questInfo,
											children: [(0, r.jsx)(d.ua7, {
												text: o.config.messages.questName,
												shouldShow: null != B && null != G && B < G,
												children: e => (0, r.jsx)(d.X6q, _(R({
													ref: z,
													variant: "lg" === u ? "heading-xxl/bold" : "sm" === u ? "heading-xl/bold" : "heading-lg/bold",
													className: w.heading,
													color: "always-white"
												}, e), {
													children: P.intl.format(P.t.EAYZAg, {
														questName: o.config.messages.questName
													})
												}))
											}), (0, r.jsx)(d.Text, {
												variant: "text-xs/normal",
												color: "always-white",
												children: V ? P.intl.formatToPlainString(P.t.APddvL, {
													expirationDate: $
												}) : n ? P.intl.formatToPlainString(P.t.v7xMw8, {
													expirationDate: K
												}) : P.intl.formatToPlainString(P.t["pX+fmp"], {
													expirationDate: K
												})
											})]
										})]
									}), !n && X && (0, r.jsx)(D, {
										quest: o,
										location: c,
										questContentPosition: A,
										sourceQuestContent: Z
									})]
								})]
							}), (0, r.jsxs)(a.animated.div, {
								className: w.iconsContainer,
								style: {
									top: X ? x.to({
										range: [0, 1],
										output: [E.DJ / 2 - E.Z$ / 2, E.jc]
									}) : E.jc
								},
								children: [(0, r.jsx)(T.r, {
									questContent: c,
									quest: o,
									questContentPosition: A,
									shouldShowDisclosure: !0,
									hideLearnMore: X,
									showShareLink: !n && H,
									sourceQuestContent: Z,
									children: e => (0, r.jsx)(a.animated.div, {
										style: {
											opacity: x,
											visibility: f || M ? "inherit" : "hidden"
										},
										"aria-hidden": !f && !M,
										children: (0, r.jsx)(d.P3F, _(R({}, e), {
											className: w.iconWrapper,
											"aria-label": P.intl.string(P.t.DEoVWV),
											children: (0, r.jsx)(d.xhG, {
												size: "md",
												color: l.Z.WHITE
											})
										}))
									})
								}), !(0, E.W_)(c) && (0, r.jsx)(d.P3F, {
									onClick: et,
									className: w.iconWrapper,
									"aria-label": M ? P.intl.string(P.t.iTcumZ) : P.intl.string(P.t.dcl9MT),
									children: (0, r.jsx)(I, {
										style: {
											rotate: x.to({
												range: [0, 1],
												output: [0, 180]
											})
										},
										color: l.Z.WHITE
									})
								})]
							})]
						})]
					})
				}
		},
		266843: function(e, t, n) {
			n.d(t, {
				O: () => c,
				h: () => l
			}), n(388685);
			var r = n(73800),
				s = n(481060),
				o = n(393903),
				i = n(448986),
				a = n(87894);

			function l() {
				let [e, t] = r.useState("lg"), [n, s] = r.useState(void 0), l = (0, i.Z)(e => {
					let n = e.target,
						r = e.contentRect.width;
					return (s(n.scrollHeight), null == r || r > a.j2) ? t("lg") : r > a.Z0 ? t("sm") : t("xs")
				});
				return {
					containerRef: (0, o.y)(l),
					size: e,
					height: n
				}
			}

			function c(e) {
				let {
					initiallyExpanded: t
				} = e, [n, o] = r.useState(t), [i, a] = r.useState(!1), l = r.useCallback(() => {
					o(e => !e), a(!0)
				}, []), {
					expansionSpring: c
				} = (0, s.q_F)({
					expansionSpring: +!!n,
					config: {
						tension: 450,
						friction: 45
					},
					onRest: () => a(!1)
				});
				return {
					expansionSpring: c,
					isAnimating: i,
					isExpanded: n,
					toggleExpanded: l
				}
			}
		},
		2660: function(e, t, n) {
			n.d(t, {
				Z: () => m
			});
			var r = n(255367);
			n(73800);
			var s = n(442837),
				o = n(481060),
				i = n(204418),
				a = n(594174),
				l = n(113434),
				c = n(182294),
				u = n(723781);
			let d = e => {
					let {
						questConfig: t,
						fallback: n,
						isFocused: d
					} = e, m = (0, s.e7)([a.default], () => a.default.getCurrentUser()), {
						avatarDecoration: p,
						isFetching: h
					} = (0, l.DU)(t);
					return h ? (0, r.jsx)("div", {
						className: u.questsCollectibleReward,
						children: (0, r.jsx)(o.$jN, {})
					}) : null == m || null == p ? n : (0, r.jsx)("div", {
						className: u.questsCollectibleReward,
						children: (0, r.jsx)(i.Z, {
							avatarSize: c.EF.SIZE_56,
							user: m,
							guildId: null,
							avatarDecorationOverride: p,
							animateOnHover: !d
						})
					})
				},
				m = e => (0, r.jsx)(d, function(e) {
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
				}({}, e))
		},
		683650: function(e, t, n) {
			n.d(t, {
				X: () => C,
				o: () => f
			});
			var r, s = n(255367);
			n(73800);
			var o = n(120356),
				i = n.n(o),
				a = n(755721),
				l = n(481060),
				c = n(617136),
				u = n(497505),
				d = n(266843),
				m = n(341907),
				p = n(46140),
				h = n(388032),
				x = n(444879),
				g = n(87181);

			function j() {
				return (0, s.jsx)("div", {
					className: x.buttonContainer,
					children: (0, s.jsx)(a.zx, {
						className: x.button,
						color: a.Tt.BRAND,
						onClick: () => {
							(0, m.navigateToQuestHome)({
								fromContent: u.jn.QUESTS_EMBED
							})
						},
						children: h.intl.string(h.t.GURBQk)
					})
				})
			}
			var C = ((r = {}).NOT_FOUND = "not_found", r.MOBILE_ONLY = "mobile_only", r);

			function f(e) {
				let {
					questId: t,
					reason: n = "not_found"
				} = e, {
					containerRef: r,
					size: o
				} = (0, d.h)();
				return (0, c.Zk)(p.V_.UNKNOWN_QUEST, t), (0, s.jsxs)("div", {
					ref: e => {
						r.current = e
					},
					className: i()(x.container, {
						[x.wide]: "lg" === o,
						[x.tall]: "lg" !== o
					}),
					children: [(0, s.jsxs)("div", {
						className: x.contentContainer,
						children: [(0, s.jsx)(l.X6q, {
							variant: "lg" === o ? "heading-xl/bold" : "heading-lg/bold",
							color: "header-primary",
							children: h.intl.string(h.t.vnP31d)
						}), (0, s.jsx)(l.Text, {
							variant: "lg" === o ? "text-sm/medium" : "text-xs/medium",
							color: "text-default",
							className: x.__invalid_mobileWebCopy,
							children: h.intl.string("mobile_only" === n ? h.t.Pag1gY : h.t.CTn0yc)
						}), (0, s.jsx)(j, {})]
					}), (0, s.jsx)("div", {
						className: x.imgContainer,
						children: (0, s.jsx)("img", {
							src: g,
							alt: "",
							className: x.missingQuestImage
						})
					})]
				})
			}
		},
		670638: function(e, t, n) {
			n.d(t, {
				r: () => q
			});
			var r = n(255367),
				s = n(73800),
				o = n(442837),
				i = n(481060),
				a = n(239091),
				l = n(479531),
				c = n(390322),
				u = n(572004),
				d = n(63063),
				m = n(617136),
				p = n(915750),
				h = n(272008),
				x = n(113434),
				g = n(569984),
				j = n(497505),
				C = n(918701),
				f = n(341907),
				b = n(46140),
				v = n(981631),
				y = n(231338),
				O = n(388032);

			function N(e) {
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
			}

			function T(e, t) {
				return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : (function(e, t) {
					var n = Object.keys(e);
					if (Object.getOwnPropertySymbols) {
						var r = Object.getOwnPropertySymbols(e);
						n.push.apply(n, r)
					}
					return n
				})(Object(t)).forEach(function(n) {
					Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
				}), e
			}

			function E(e) {
				var t;
				let n = (0, o.e7)([g.Z], () => g.Z.questDeliveryOverride, []),
					c = (0, C.GN)(e.questContent),
					N = [j.jn.QUEST_BAR_V2, j.jn.QUEST_BAR].includes(e.questContent),
					T = (0, m.O5)(),
					E = (0, p.aM)(),
					q = (0, x.Yj)(e.quest),
					{
						handleComplete: S,
						handleProgress: P,
						handleResetDismissibilityClick: w,
						handleResetStatusClick: R,
						handleOverrideDeliveryClick: _
					} = (0, x.kJ)(e.quest.id),
					I = s.useCallback(() => {
						if (e.quest.id === b.V6) return void window.open(d.Z.getArticleURL(v.BhN.VIRTUAL_CURRENCY_LEARN_MORE));
						(0, C.nc)(e.quest, {
							content: e.questContent,
							ctaContent: m.jZ.CONTEXT_MENU_OPEN_GAME_LINK,
							impressionId: E,
							sourceQuestContent: e.sourceQuestContent
						})
					}, [E, e.quest, e.questContent, e.sourceQuestContent]),
					D = s.useCallback(() => {
						(0, C.f2)(e.quest.id, {
							content: e.questContent,
							position: e.questContentPosition,
							ctaContent: m.jZ.CONTEXT_MENU_COPY_LINK,
							impressionId: E,
							sourceQuestContent: e.sourceQuestContent
						}), (0, i.showToast)((0, i.createToast)(O.intl.string(O.t["+5kSoa"]), i.ToastType.SUCCESS))
					}, [E, e.quest.id, e.questContent, e.questContentPosition, e.sourceQuestContent]),
					M = e => (0, i.showToast)((0, i.createToast)(new l.Z(e, e.status).message, i.ToastType.FAILURE)),
					A = () => (0, h.is)(e.quest.id).catch(M),
					Q = s.useMemo(() => (0, r.jsx)(i.S89, {
						id: "delivery",
						label: "Show in Quest Bar",
						checked: (null == n ? void 0 : n.id) === e.quest.id,
						action: _
					}), [_, e.quest.id, null == n ? void 0 : n.id]),
					Z = e.shouldShowDisclosure && e.quest.id !== b.V6;
				return (0, r.jsxs)(i.v2r, {
					variant: "fixed",
					onSelect: () => {
						null != e.onSelect ? e.onSelect() : (0, a.Zy)()
					},
					navId: "quests-entry",
					"aria-label": O.intl.string(O.t.ogxXGh),
					onClose: null != (t = null == e ? void 0 : e.onClose) ? t : y.dG,
					children: [(0, r.jsxs)(i.kSQ, {
						children: [(0, r.jsx)(i.sNh, {
							id: "play-game",
							label: q,
							action: I,
							icon: i.zFc
						}), !0 === e.showShareLink && (0, r.jsx)(i.sNh, {
							id: "share-link",
							label: O.intl.string(O.t.RDE0SU),
							action: D,
							icon: i.TIy
						}), !1]
					}, "major-actions"), (0, r.jsxs)(i.kSQ, {
						children: [!e.hideLearnMore && (0, r.jsx)(i.sNh, {
							id: "learn-more",
							label: O.intl.string(O.t.Ws2Bl5),
							action: () => {
								T({
									questId: e.quest.id,
									questContent: e.questContent,
									questContentPosition: e.questContentPosition,
									questContentCTA: m.jZ.CONTEXT_MENU_LEARN_MORE,
									sourceQuestContent: e.sourceQuestContent
								}), (0, f.navigateToQuestHome)({
									fromContent: e.questContent,
									questId: e.quest.id
								})
							},
							icon: i.qDn
						}), Z && (0, r.jsx)(i.sNh, {
							id: "display-disclosure",
							label: O.intl.string(O.t.GcsZKC),
							action: () => {
								(0, f.openDisclosureModal)(e.quest, {
									content: e.questContent,
									position: e.questContentPosition,
									ctaContent: m.jZ.CONTEXT_MENU_OPEN_DISCLOSURE,
									impressionId: E,
									sourceQuestContent: e.sourceQuestContent
								})
							}
						}), c && (0, r.jsx)(i.sNh, {
							id: "hide-entrypoint",
							label: O.intl.string(O.t.NN79Ex),
							action: () => {
								T({
									questId: e.quest.id,
									questContent: e.questContent,
									questContentPosition: e.questContentPosition,
									questContentCTA: m.jZ.CONTEXT_MENU_HIDE_CONTENT,
									sourceQuestContent: e.sourceQuestContent
								}), (0, C.GN)(e.questContent) && ((0, h.gl)(e.quest.id, e.questContent), N && (0, f.maybeShowSurveyForQuest)(e.quest))
							},
							subtext: O.intl.string(O.t["1u3YPD"])
						})]
					}, "minor-actions"), e.quest.preview && (0, r.jsxs)(i.kSQ, {
						label: "Preview Controls",
						children: [Q, (0, r.jsx)(i.sNh, {
							id: "dismiss",
							label: "Reset Dismissibility",
							action: w
						}), (0, r.jsx)(i.sNh, {
							id: "enrollment",
							label: "Reset Quest",
							action: () => {
								R(), A()
							}
						}), (0, r.jsx)(i.sNh, {
							id: "progress",
							label: "Set Random Quest Progress",
							action: () => {
								P(.9 * Math.random() + .03)
							}
						}), (0, r.jsx)(i.sNh, {
							id: "complete",
							label: "Complete Quest",
							action: S
						}), (0, C.$J)(e.quest) && (0, r.jsxs)(i.sNh, {
							id: "console",
							label: "Console Heartbeat",
							children: [(0, r.jsx)(i.sNh, {
								disabled: !0,
								id: "status",
								label: "Status: ".concat((0, C.Bz)(e.quest) ? "alive" : "dead")
							}), (0, r.jsx)(i.sNh, {
								id: "start",
								label: "Start heartbeat (cheatmode)",
								action: () => (0, h.CS)(e.quest.id, !0).catch(M)
							}), (0, r.jsx)(i.sNh, {
								id: "stop",
								label: "Stop heartbeat",
								action: A
							})]
						}), (0, r.jsx)(i.sNh, {
							id: "copy-quest-id",
							label: "Copy Quest ID",
							action: () => {
								(0, u.JG)(e.quest.id)
							}
						})]
					}, "preview-controls")]
				})
			}

			function q(e) {
				let {
					children: t,
					onOpen: n,
					onClose: o,
					preventIdle: a,
					quest: l,
					questContent: u,
					questContentPosition: d,
					sourceQuestContent: p
				} = e, h = function(e, t) {
					if (null == e) return {};
					var n, r, s = function(e, t) {
						if (null == e) return {};
						var n, r, s = {},
							o = Object.keys(e);
						for (r = 0; r < o.length; r++) n = o[r], t.indexOf(n) >= 0 || (s[n] = e[n]);
						return s
					}(e, t);
					if (Object.getOwnPropertySymbols) {
						var o = Object.getOwnPropertySymbols(e);
						for (r = 0; r < o.length; r++) n = o[r], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (s[n] = e[n])
					}
					return s
				}(e, ["children", "onOpen", "onClose", "preventIdle", "quest", "questContent", "questContentPosition", "sourceQuestContent"]), x = (0, m.O5)(), g = s.useRef(null), j = s.useCallback(() => {
					x({
						questId: l.id,
						questContent: u,
						questContentCTA: m.jZ.OPEN_CONTEXT_MENU,
						questContentPosition: d,
						sourceQuestContent: p
					}), null != n && n()
				}, [n, l.id, u, d, x, p]);
				return (0, r.jsx)(i.yRy, {
					targetElementRef: g,
					onRequestOpen: j,
					onRequestClose: o,
					renderPopout: e => {
						let {
							closePopout: t
						} = e;
						return a ? (0, r.jsx)(c.Z, {
							children: (0, r.jsx)(E, T(N({}, h), {
								quest: l,
								questContent: u,
								questContentPosition: d,
								onClose: t,
								sourceQuestContent: p
							}))
						}) : (0, r.jsx)(E, T(N({}, h), {
							quest: l,
							questContent: u,
							questContentPosition: d,
							onClose: t,
							sourceQuestContent: p
						}))
					},
					animation: i.yRy.Animation.NONE,
					children: e => (0, r.jsx)("div", {
						ref: g,
						children: t(e)
					})
				})
			}
		},
		26650: function(e, t, n) {
			n.d(t, {
				Z: () => l
			});
			var r = n(255367),
				s = n(73800),
				o = n(481060),
				i = n(377171),
				a = n(332173);
			let l = s.forwardRef(function(e, t) {
				let {
					isInventory: n,
					style: s,
					children: l
				} = e;
				return (0, r.jsxs)("div", {
					ref: t,
					className: a.desktopTooltip,
					style: function(e) {
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
					}({
						marginTop: 8 * !!n
					}, s),
					children: [(0, r.jsx)(o.d3s, {
						size: "custom",
						className: a.infoIcon,
						height: n ? 16 : 12,
						width: n ? 16 : 12,
						color: n ? i.Z.TEXT_MUTED : i.Z.WHITE
					}), (0, r.jsx)(o.Text, {
						color: n ? "text-muted" : "always-white",
						variant: n ? "text-xs/normal" : "text-xxs/normal",
						children: l
					})]
				})
			})
		},
		390322: function(e, t, n) {
			n.d(t, {
				Z: () => o
			});
			var r = n(73800),
				s = n(618158);

			function o(e) {
				let {
					children: t
				} = e, {
					preventIdle: n,
					allowIdle: o
				} = (0, s.Y)("popup");
				return r.useEffect(() => (n(), () => o()), [o, n]), t
			}
		}
	}
]);
//# sourceMappingURL=2d083b69f2f8e06f.js.map