"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
	["17938"], {
		982404: function(e) {
			e.exports = "/assets/ff07ae06c15adc58.svg"
		},
		299156: function(e) {
			e.exports = "/assets/dd0f35fb103d174b.svg"
		},
		834982: function(e) {
			e.exports = "/assets/b5a84c68f2051c39.svg"
		},
		912450: function(e) {
			e.exports = "/assets/d403174a2d73fc48.svg"
		},
		703548: function(e) {
			e.exports = "/assets/351b85bf9e59346f.svg"
		},
		869333: function(e) {
			e.exports = "/assets/cd3b44e57a5e6597.svg"
		},
		652528: function(e) {
			e.exports = "/assets/f30ca678d7e3549e.svg"
		},
		874692: function(e) {
			e.exports = "/assets/27244382f9e8cc5f.svg"
		},
		391458: function(e) {
			e.exports = "/assets/b8183e94e7ff0020.svg"
		},
		70967: function(e) {
			e.exports = "/assets/17f762a38d0747e7.svg"
		},
		674264: function(e) {
			e.exports = "/assets/34c8999cfe272b23.svg"
		},
		360088: function(e) {
			e.exports = "/assets/893dc4a04464a54a.svg"
		},
		304880: function(e) {
			e.exports = "/assets/b3a9ce9d2cf3ff2f.svg"
		},
		789155: function(e, s, t) {
			t.d(s, {
				Z: () => d
			});
			var r = t(255367);
			t(73800);
			var n = t(780384),
				i = t(755721),
				a = t(481060),
				o = t(410030),
				l = t(388032),
				c = t(615836),
				u = t(982404),
				m = t(299156);
			let d = function(e) {
				let {
					churnUserDiscountOffer: s,
					onDiscountClaim: t,
					onContinue: d
				} = e, p = (0, o.ZP)(), x = (0, n.wj)(p) ? u : m;
				return null == s ? null : (0, r.jsxs)("div", {
					className: c.churnFooterContainer,
					children: [(0, r.jsx)("div", {
						className: c.churnFooterGlow
					}), (0, r.jsx)("div", {
						className: c.churnFooterTopBorder
					}), (0, r.jsx)("div", {
						className: c.churnFooterContent,
						children: (0, r.jsxs)("div", {
							className: c.churnFooterContentBody,
							children: [(0, r.jsx)("img", {
								alt: "",
								src: x,
								className: c.churnFooterIcon
							}), (0, r.jsxs)("div", {
								className: c.churnFooterContentBodyInner,
								children: [(0, r.jsx)(a.Text, {
									variant: "text-md/medium",
									className: c.churnFooterCopy,
									children: l.intl.format(l.t["2gem09"], {
										percent: s.discount.amount,
										numMonths: s.discount.user_usage_limit
									})
								}), (0, r.jsxs)("div", {
									className: c.churnFooterCTAs,
									children: [(0, r.jsxs)(a.gtL, {
										className: c.churnFooterClaimCTA,
										innerClassName: c.churnFooterClaimCTAInner,
										look: i.iL.OUTLINED,
										color: i.Tt.CUSTOM,
										onClick: () => null == t ? void 0 : t(),
										children: [(0, r.jsx)(a.SrA, {
											size: "xs",
											color: "currentColor",
											className: c.churnFooterClaimIcon
										}), (0, r.jsx)(a.Text, {
											variant: "text-sm/semibold",
											className: c.churnFooterClaimCopy,
											children: l.intl.string(l.t.zrCzVF)
										})]
									}), (0, r.jsx)(a.zxk, {
										variant: "primary",
										text: l.intl.string(l.t["3PatS0"]),
										onClick: () => null == d ? void 0 : d()
									})]
								})]
							})]
						})
					})]
				})
			}
		},
		807163: function(e, s, t) {
			t.d(s, {
				Z: () => eC
			}), t(953529), t(388685), t(539854);
			var r = t(255367),
				n = t(73800),
				i = t(120356),
				a = t.n(i),
				o = t(512722),
				l = t.n(o),
				c = t(392711),
				u = t.n(c),
				m = t(442837),
				d = t(780384),
				p = t(755721),
				x = t(481060),
				f = t(570140),
				j = t(179360),
				h = t(230711),
				C = t(410030),
				g = t(607070),
				I = t(543241),
				N = t(906411),
				T = t(565138),
				v = t(822179),
				b = t(419922),
				E = t(687158),
				_ = t(484459),
				L = t(813549),
				y = t(867176),
				A = t(502762),
				M = t(652853),
				O = t(430824),
				Z = t(594174),
				P = t(314884),
				U = t(709586),
				w = t(626135),
				S = t(768581),
				R = t(63063),
				k = t(998502),
				F = t(53900),
				z = t(789155),
				V = t(55610),
				D = t(798769),
				K = t(474936),
				B = t(981631),
				W = t(388032),
				G = t(18908),
				Y = t(834982),
				q = t(912450),
				H = t(703548),
				Q = t(869333),
				X = t(652528),
				$ = t(874692),
				J = t(391458),
				ee = t(70967),
				es = t(674264),
				et = t(360088),
				er = t(304880);

			function en() {
				return (en = Object.assign || function(e) {
					for (var s = 1; s < arguments.length; s++) {
						var t = arguments[s];
						for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r])
					}
					return e
				}).apply(this, arguments)
			}
			let ei = k.ZP.getEnableHardwareAcceleration() ? x.Xo$ : x.qEK,
				ea = {
					boostItemVisual: X,
					emojiStickersVisual: $,
					screenShareItemVisual: et,
					uploadsMessagesItemVisual: J,
					uploadsMessagesItemVisualV2: ee,
					PL: es,
					TR: er
				},
				eo = {
					boostItemVisual: Y,
					emojiStickersVisual: q,
					screenShareItemVisual: et,
					uploadsMessagesItemVisual: H,
					uploadsMessagesItemVisualV2: Q,
					PL: es,
					TR: er
				};

			function el() {
				let e = (0, C.ZP)();
				return (0, d.wj)(e) ? eo : ea
			}

			function ec(e) {
				let {
					description: s,
					onLearnMore: t,
					renderVisual: n
				} = e;
				return (0, r.jsxs)("div", {
					className: G.whatYouLoseItem,
					children: [(0, r.jsxs)("div", {
						className: G.whatYouLoseItemLeftColumn,
						children: [(0, r.jsx)(x.Text, {
							variant: "text-md/normal",
							children: s
						}), (0, r.jsx)(p.zx, {
							look: p.zx.Looks.LINK,
							color: p.zx.Colors.LINK,
							size: p.zx.Sizes.NONE,
							className: G.whatYouLoseItemLearnMore,
							onClick: t,
							children: W.intl.string(W.t.hvVgAQ)
						})]
					}), (0, r.jsx)("div", {
						className: G.whatYouLoseItemRightColumn,
						children: n()
					})]
				})
			}

			function eu(e) {
				var s, t, n = en({}, function(e) {
					if (null == e) throw TypeError("Cannot destructure " + e);
					return e
				}(e));
				let {
					theme: i
				} = (0, M.z)(), a = (0, x.dQu)(x.TVs.colors.INTERACTIVE_ACTIVE, i).hex();
				return (0, r.jsx)(x.SrA, (s = function(e) {
					for (var s = 1; s < arguments.length; s++) {
						var t = null != arguments[s] ? arguments[s] : {},
							r = Object.keys(t);
						"function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(t).filter(function(e) {
							return Object.getOwnPropertyDescriptor(t, e).enumerable
						}))), r.forEach(function(s) {
							var r;
							r = t[s], s in e ? Object.defineProperty(e, s, {
								value: r,
								enumerable: !0,
								configurable: !0,
								writable: !0
							}) : e[s] = r
						})
					}
					return e
				}({
					size: "md"
				}, n), t = t = {
					color: a
				}, Object.getOwnPropertyDescriptors ? Object.defineProperties(s, Object.getOwnPropertyDescriptors(t)) : (function(e, s) {
					var t = Object.keys(e);
					if (Object.getOwnPropertySymbols) {
						var r = Object.getOwnPropertySymbols(e);
						t.push.apply(t, r)
					}
					return t
				})(Object(t)).forEach(function(e) {
					Object.defineProperty(s, e, Object.getOwnPropertyDescriptor(t, e))
				}), s))
			}

			function em(e) {
				let s, {
						currentUser: t,
						premiumType: n,
						onClose: i
					} = e,
					a = (0, E.ZP)(t.id),
					o = (0, m.e7)([g.Z], () => g.Z.useReducedMotion),
					l = n === K.p9.TIER_1;
				return s = (null == a ? void 0 : a.premiumType) === K.p9.TIER_2 ? (0, r.jsxs)(A.Z, {
					user: t,
					displayProfile: a,
					forceShowPremium: !0,
					themeType: null,
					className: G.profileCard,
					children: [(0, r.jsx)(y.b, {
						user: t,
						displayProfile: a,
						avatarSize: x.EFr.SIZE_56,
						avatarOffsetX: 8,
						avatarOffsetY: 2,
						bannerWidth: 172,
						bannerHeight: 60,
						themePadding: 4
					}), (0, r.jsx)(ei, {
						className: G.profileAvatar,
						src: t.getAvatarURL(void 0, (0, x.pxk)(x.EFr.SIZE_56), !o),
						size: x.EFr.SIZE_56,
						"aria-label": t.username
					}), (0, r.jsxs)("div", {
						className: G.profileUserInfo,
						children: [(0, r.jsx)(L.Z, {
							className: G.profileNameTag,
							usernameClass: G.profileNameTagUsername,
							name: t.toString()
						}), (0, r.jsx)(eu, {
							className: G.profilePremiumIcon
						})]
					})]
				}) : (0, r.jsxs)("div", {
					className: G.profileCardTier1,
					children: [(0, r.jsx)(ei, {
						className: G.profileAvatarTier1,
						src: t.getAvatarURL(void 0, (0, x.pxk)(x.EFr.SIZE_56), !o),
						size: x.EFr.SIZE_56,
						"aria-label": t.username
					}), (0, r.jsxs)("div", {
						className: G.profileUserInfoTier1,
						children: [(0, r.jsx)(L.Z, {
							className: G.profileNameTag,
							usernameClass: G.profileNameTagUsername,
							name: t.toString()
						}), (0, r.jsx)(x.SrA, {
							size: "md",
							color: "currentColor",
							className: G.profilePremiumIcon
						})]
					})]
				}), (0, r.jsx)(ec, {
					description: l ? W.intl.format(W.t.xCaYwM, {}) : W.intl.format(W.t["gpqr+v"], {}),
					onLearnMore: () => {
						i(), h.Z.open(B.oAB.PROFILE_CUSTOMIZATION), w.default.track(B.rMx.PREMIUM_UNCANCEL_WINBACK_CTA_CLICKED, {
							action: "user_profile_customization"
						})
					},
					renderVisual: () => s
				}, "profile-item")
			}

			function ed(e) {
				let {
					premiumType: s
				} = e, t = (0, m.e7)([g.Z], () => g.Z.useReducedMotion), n = (0, I.wC)(null).filter(e => e.type === N.B.GUILD && (e.animated || null != e.guildId)).slice(0, 3), i = (0, m.Wu)([v.Z], () => v.Z.stickerFrecencyWithoutFetchingLatest.frequently.slice(0, 3 - n.length)), a = el().emojiStickersVisual, o = s === K.p9.TIER_1;
				return (0, r.jsx)(ec, {
					description: o ? W.intl.format(W.t.couiKC, {}) : W.intl.format(W.t["0hUHi4"], {}),
					onLearnMore: () => {
						window.open(R.Z.getArticleURL(B.BhN.PREMIUM_DETAILS)), w.default.track(B.rMx.PREMIUM_UNCANCEL_WINBACK_CTA_CLICKED, {
							action: "emojis_stickers"
						})
					},
					renderVisual: () => null != n && n.length > 0 || !o && null != i && i.length > 0 ? (0, r.jsxs)("div", {
						className: G.emojiStickersPersonalizedContainer,
						children: [n.map(e => null == e.id ? e.url : S.ZP.getEmojiURL({
							id: e.id,
							animated: !t && e.animated,
							size: 58
						})).map(e => null != e ? (0, r.jsx)("img", {
							className: G.personalizedEmoji,
							alt: "",
							src: e
						}) : null), o ? null : i.map(e => (0, r.jsx)(b.Z, {
							disableAnimation: t,
							sticker: e,
							size: 58,
							withLoadingIndicator: !1
						}, e.id))]
					}) : (0, r.jsx)("img", {
						className: G.nonPersonalizedGraphic,
						alt: "",
						src: a
					})
				}, "emoji-stickers-item")
			}

			function ep(e) {
				let {
					premiumType: s,
					onClose: t
				} = e;
				n.useEffect(() => f.Z.wait(() => (0, j.X8)()), []);
				let i = (0, m.e7)([g.Z], () => g.Z.useReducedMotion),
					[o, l] = (0, m.Wu)([P.Z, O.Z], () => {
						let e = P.Z.boostSlots,
							s = new Map;
						u()(e).map("premiumGuildSubscription").map("guildId").forEach(e => {
							if (null != O.Z.getGuild(e)) {
								var t;
								let r = null != (t = s.get(e)) ? t : 0;
								s.set(e, r + 1)
							}
						});
						let t = null,
							r = 0;
						return s.size > 0 && ([t, r] = Array.from(s.entries()).reduce((e, s) => s[1] > e[1] ? s : e)), [O.Z.getGuild(t), r]
					}),
					c = null != o && l > 0,
					d = el().boostItemVisual;
				return (0, r.jsx)(ec, {
					description: s === K.p9.TIER_1 ? W.intl.format(W.t["K4Hv6+"], {}) : W.intl.format(W.t.wRxEDQ, {}),
					onLearnMore: () => {
						t(), h.Z.open(B.oAB.GUILD_BOOSTING), w.default.track(B.rMx.PREMIUM_UNCANCEL_WINBACK_CTA_CLICKED, {
							action: "boosts"
						})
					},
					renderVisual: () => c ? (0, r.jsx)("div", {
						className: G.boostCardContainer,
						children: (0, r.jsxs)("div", {
							className: G.boostCard,
							children: [(0, r.jsx)(T.Z, {
								guild: o,
								size: T.Z.Sizes.MEDIUM,
								animate: !i,
								className: G.boostCardIcon
							}), (0, r.jsxs)("div", {
								className: G.boostCardInfo,
								children: [(0, r.jsx)(x.Text, {
									variant: "text-md/normal",
									className: a()(G.textSingleLineEllipsis, G.boostCardTitle),
									children: o.name
								}), (0, r.jsxs)("div", {
									className: G.boostCardSubtitle,
									children: [(0, r.jsx)(U.Z, {
										className: G.boostCardGem
									}), (0, r.jsx)(x.Text, {
										variant: "text-xs/normal",
										className: a()(G.textSingleLineEllipsis, G.boostCardCount),
										children: W.intl.format(W.t["Ou/g/P"], {
											boostCount: l
										})
									})]
								})]
							})]
						})
					}) : (0, r.jsx)("img", {
						alt: "",
						src: d
					})
				}, "boost-item")
			}
			let ex = () => {
				let e = el().screenShareItemVisual;
				return (0, r.jsx)(ec, {
					description: W.intl.format(W.t.wK04T0, {}),
					onLearnMore: () => {
						window.open(R.Z.getArticleURL(B.BhN.STREAM_QUALITY_SETTINGS)), w.default.track(B.rMx.PREMIUM_UNCANCEL_WINBACK_CTA_CLICKED, {
							action: "screen_share"
						})
					},
					renderVisual: () => (0, r.jsx)("img", {
						alt: "",
						src: e
					})
				}, "screen-share-item")
			};

			function ef(e) {
				let {
					premiumType: s
				} = e, t = el().uploadsMessagesItemVisual;
				return (0, r.jsx)(ec, {
					description: s === K.p9.TIER_2 ? W.intl.format(W.t.GsOFRE, {}) : W.intl.format(W.t.wFWO6O, {}),
					onLearnMore: () => {
						window.open(R.Z.getArticleURL(B.BhN.PREMIUM_DETAILS)), w.default.track(B.rMx.PREMIUM_UNCANCEL_WINBACK_CTA_CLICKED, {
							action: "msgs_uploads"
						})
					},
					renderVisual: () => (0, r.jsx)("img", {
						alt: "",
						src: t
					})
				}, "uploads-item")
			}
			let ej = e => {
				let {
					country: s
				} = e, t = el(), n = "PL" === s ? t.PL : t.TR;
				return (0, r.jsx)(ec, {
					description: W.intl.format("PL" === s ? W.t["0MAev7"] : W.t.p2CqUl, {}),
					onLearnMore: () => {
						window.open(R.Z.getArticleURL(B.BhN.LOCALIZED_PRICING)), w.default.track(B.rMx.PREMIUM_UNCANCEL_WINBACK_CTA_CLICKED, {
							action: "grandfathered_prices"
						})
					},
					renderVisual: () => (0, r.jsx)("img", {
						alt: "",
						src: n
					})
				}, "grandfathered-prices-item")
			};

			function eh(e) {
				let {
					currentUser: s,
					premiumType: t,
					onClose: i,
					isDowngrade: a = !1
				} = e, o = (0, F.Z)(), c = (0, V.U)(), u = n.useMemo(() => {
					let e = [];
					switch (c && (l()(null != o, "Subscription billing country should not be null"), e.push((0, r.jsx)(ej, {
							country: o
						}))), t) {
						case K.p9.TIER_0:
							e.push((0, r.jsx)(ed, {
								premiumType: t
							}), (0, r.jsx)(ef, {
								premiumType: t
							}));
							break;
						case K.p9.TIER_1:
							a ? e.push((0, r.jsx)(em, {
								currentUser: s,
								premiumType: t,
								onClose: i
							}), (0, r.jsx)(ex, {}), (0, r.jsx)(ep, {
								premiumType: t,
								onClose: i
							})) : e.push((0, r.jsx)(em, {
								currentUser: s,
								premiumType: t,
								onClose: i
							}), (0, r.jsx)(ed, {
								premiumType: t
							}), (0, r.jsx)(ex, {}), (0, r.jsx)(ef, {
								premiumType: t
							}), (0, r.jsx)(ep, {
								premiumType: t,
								onClose: i
							}));
							break;
						case K.p9.TIER_2:
							a ? e.push((0, r.jsx)(em, {
								currentUser: s,
								premiumType: t,
								onClose: i
							}), (0, r.jsx)(ep, {
								premiumType: t,
								onClose: i
							}), (0, r.jsx)(ex, {})) : e.push((0, r.jsx)(em, {
								currentUser: s,
								premiumType: t,
								onClose: i
							}), (0, r.jsx)(ed, {
								premiumType: t
							}), (0, r.jsx)(ep, {
								premiumType: t,
								onClose: i
							}), (0, r.jsx)(ex, {}), (0, r.jsx)(ef, {
								premiumType: t
							}))
					}
					return e
				}, [t, s, i, a, c, o]);
				return (0, r.jsx)("div", {
					className: G.whatYouLoseItemContainer,
					children: u
				})
			}
			let eC = function(e) {
				let {
					premiumType: s,
					titleText: t,
					subtitleText: i,
					footer: a,
					onClose: o,
					onDiscountClaim: c,
					onContinue: u,
					analyticsLocations: d,
					isLoading: p = !1,
					churnUserDiscountOffer: f = null,
					isDowngrade: j = !1,
					subtitleIcon: h,
					subtitleClassName: C
				} = e, g = (0, m.e7)([Z.default], () => {
					let e = Z.default.getCurrentUser();
					return l()(null != e, "ProfileItem: currentUser cannot be undefined"), e
				});
				n.useEffect(() => {
					(0, _.Z)(g.id, g.getAvatarURL(null, 80))
				}, [g]);
				let I = null != f && !p;
				return (n.useEffect(() => {
					I && w.default.track(B.rMx.CANCELLATION_FLOW_DISCOUNT_OFFER_PROMPT_VIEWED, {
						location_stack: d,
						discount_id: null == f ? void 0 : f.discount_id
					})
				}, [I, d, f]), p) ? (0, r.jsxs)(r.Fragment, {
					children: [(0, r.jsx)(D.Z, {
						premiumType: s,
						onClose: o
					}), (0, r.jsx)(x.hzk, {
						className: G.body,
						children: (0, r.jsx)(x.$jN, {
							className: G.spinner
						})
					})]
				}) : (0, r.jsxs)(r.Fragment, {
					children: [(0, r.jsx)(D.Z, {
						premiumType: s,
						onClose: o
					}), (0, r.jsxs)(x.hzk, {
						className: G.body,
						children: [(0, r.jsx)(x.X6q, {
							variant: "heading-xl/semibold",
							color: "header-primary",
							className: G.title,
							children: t
						}), (0, r.jsxs)("div", {
							className: C,
							children: [h, (0, r.jsx)(x.Text, {
								variant: "text-md/normal",
								children: i
							})]
						}), (0, r.jsx)(eh, {
							currentUser: g,
							premiumType: s,
							onClose: o,
							isDowngrade: j
						})]
					}), !I && (0, r.jsx)(x.mzw, {
						children: a
					}), I && (0, r.jsx)(z.Z, {
						churnUserDiscountOffer: f,
						onDiscountClaim: c,
						onContinue: u
					})]
				})
			}
		}
	}
]);
//# sourceMappingURL=f7829fca72bafd51.js.map