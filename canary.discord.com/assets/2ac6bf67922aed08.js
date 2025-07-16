"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
	["62059"], {
		950375: function(e) {
			e.exports = "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='271' height='141'><g fill='#000000' fill-rule='evenodd'><rect width='130' height='20' rx='5'/><rect width='254' height='20' y='30' rx='5'/><rect width='190' height='20' y='60' rx='5'/><rect width='66' height='32' y='102' rx='3'/></g></svg>"
		},
		21201: function(e) {
			e.exports = "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='271' height='165'><path fill='#000000' fill-rule='evenodd' d='M5 0h120c2.761424 0 5 2.23857625 5 5v10c0 2.7614237-2.238576 5-5 5H5c-2.76142375 0-5-2.2385763-5-5V5c0-2.76142375 2.23857625-5 5-5zm0 30h244c2.761424 0 5 2.2385763 5 5v10c0 2.7614237-2.238576 5-5 5H5c-2.76142375 0-5-2.2385763-5-5V35c0-2.7614237 2.23857625-5 5-5zm0 30h180c2.761424 0 5 2.2385763 5 5v10c0 2.7614237-2.238576 5-5 5H5c-2.76142375 0-5-2.2385763-5-5V65c0-2.7614237 2.23857625-5 5-5zm-2 60h60c1.6568542 0 3 1.343146 3 3v26c0 1.656854-1.3431458 3-3 3H3c-1.65685425 0-3-1.343146-3-3v-26c0-1.656854 1.34314575-3 3-3z'/></svg>"
		},
		107811: function(e) {
			e.exports = "/assets/423c2b95bd0fdafb.png"
		},
		819616: function(e) {
			e.exports = "/assets/f625814fc53c325e.svg"
		},
		930622: function(e) {
			e.exports = "/assets/d11dc1928431aa27.svg"
		},
		743134: function(e) {
			e.exports = "/assets/26a3dd69161dbf47.svg"
		},
		154239: function(e) {
			e.exports = "/assets/6f076a64de25de4b.svg"
		},
		344163: function(e) {
			e.exports = "/assets/61ccab047dad737a.svg"
		},
		819373: function(e) {
			e.exports = "/assets/56d26195509392db.svg"
		},
		570111: function(e) {
			e.exports = "/assets/8b9de960da063cb9.svg"
		},
		474019: function(e) {
			e.exports = "/assets/53e42368b1409f1a.svg"
		},
		324606: function(e) {
			e.exports = "/assets/5c56b22c17556059.svg"
		},
		508933: function(e) {
			e.exports = "/assets/49dd33256719a93e.svg"
		},
		61578: function(e) {
			e.exports = "/assets/abbc14555963e723.svg"
		},
		748973: function(e) {
			e.exports = "/assets/3f044af39abb8630.svg"
		},
		680785: function(e) {
			e.exports = "/assets/436b5a86429f186a.svg"
		},
		823624: function(e) {
			e.exports = "/assets/e409bdbc405200da.svg"
		},
		680674: function(e) {
			e.exports = "/assets/b8a42ea9203a690f.svg"
		},
		948514: function(e) {
			e.exports = "/assets/e0a972c9c0c4593e.svg"
		},
		850582: function(e) {
			e.exports = "/assets/0a94ba142c4eda17.svg"
		},
		195853: function(e) {
			e.exports = "/assets/df31f184a2abb737.png"
		},
		963129: function(e) {
			e.exports = "/assets/a3541a1173e706be.svg"
		},
		99669: function(e) {
			e.exports = "/assets/eb40cc3e32c7e70f.svg"
		},
		695862: function(e) {
			e.exports = "/assets/e790daeb039ddb5a.svg"
		},
		379631: function(e) {
			e.exports = "/assets/df3df6cdf0dd1991.svg"
		},
		340962: function(e) {
			e.exports = "/assets/609367095f652a43.png"
		},
		498967: function(e) {
			e.exports = "/assets/20dd0e244b9a7065.svg"
		},
		303893: function(e) {
			e.exports = "/assets/d03486255966663c.svg"
		},
		313226: function(e) {
			e.exports = "/assets/c16bfbbdeef06f25.svg"
		},
		769377: function(e) {
			e.exports = "/assets/8d4fb350d405ae2d.svg"
		},
		340600: function(e) {
			e.exports = "/assets/81672d3df281d7de.svg"
		},
		564120: function(e) {
			e.exports = "/assets/64dcefc70846922d.svg"
		},
		850852: function(e) {
			e.exports = "/assets/3bacc5415aa9a561.svg"
		},
		9569: function(e) {
			e.exports = "/assets/f80d470870ccfd01.svg"
		},
		439953: function(e) {
			e.exports = "/assets/2f7179a17c81ca41.svg"
		},
		527455: function(e) {
			e.exports = "/assets/a4a6886d9e7caa05.jpg"
		},
		528963: function(e, t, n) {
			n.d(t, {
				Z: () => a
			});
			var r = n(544891),
				i = n(570140),
				l = n(981631);
			let a = {
				createChannelFollower: (e, t) => r.tn.post({
					url: l.ANM.CHANNEL_FOLLOWERS(t),
					body: {
						webhook_channel_id: e
					},
					oldFormErrors: !0,
					rejectWithError: !1
				}),
				async fetchChannelFollowerStats(e) {
					i.Z.dispatch({
						type: "CHANNEL_FOLLOWER_STATS_FETCH_START"
					});
					try {
						let t = await r.tn.get({
							url: l.ANM.CHANNEL_FOLLOWER_STATS(e),
							body: {
								channel_id: e
							},
							oldFormErrors: !0,
							rejectWithError: !0
						});
						i.Z.dispatch({
							type: "CHANNEL_FOLLOWER_STATS_FETCH_SUCCESS",
							stats: t.body,
							channelId: e
						})
					} catch (t) {
						i.Z.dispatch({
							type: "CHANNEL_FOLLOWER_STATS_FETCH_FAILURE",
							channelId: e
						})
					}
				},
				dismissPublishBump(e) {
					i.Z.dispatch({
						type: "CHANNEL_FOLLOWING_PUBLISH_BUMP_DISMISSED",
						messageId: e
					})
				},
				permanentlyHidePublishBump(e) {
					i.Z.dispatch({
						type: "CHANNEL_FOLLOWING_PUBLISH_BUMP_HIDE_PERMANENTLY",
						channelId: e
					})
				}
			}
		},
		333848: function(e, t, n) {
			n.d(t, {
				Z: () => m
			}), n(415506);
			var r = n(990547),
				i = n(283693),
				l = n(570140),
				a = n(408987),
				o = n(9156),
				s = n(621600),
				c = n(573261),
				u = n(87051),
				d = n(981631),
				p = n(526761);
			let m = {
				createChannel(e) {
					let {
						guildId: t,
						type: n,
						name: m,
						permissionOverwrites: f = [],
						bitrate: _,
						userLimit: h,
						parentId: g,
						skuId: b,
						branchId: E
					} = e;
					l.Z.dispatch({
						type: "CREATE_CHANNEL_MODAL_SUBMIT",
						guildId: t,
						channelType: n
					});
					let y = {
						type: n,
						name: m,
						permission_overwrites: f
					};
					if (null != _ && _ !== d.epw && (y.bitrate = _), null != h && h > 0 && (y.user_limit = h), null != g && (y.parent_id = g), n === d.d4z.GUILD_STORE) {
						if (null == b) throw Error("Unexpected missing SKU");
						y.sku_id = b, y.branch_id = E
					}
					return c.Z.post({
						url: d.ANM.GUILD_CHANNELS(t),
						body: y,
						oldFormErrors: !0,
						trackedActionData: {
							event: r.NetworkActionNames.CHANNEL_CREATE,
							properties: e => {
								var t, n;
								return (0, i.iG)({
									is_private: f.length > 0,
									channel_id: null == e || null == (t = e.body) ? void 0 : t.id,
									channel_type: null == e || null == (n = e.body) ? void 0 : n.type
								})
							}
						},
						rejectWithError: !1
					}).then(e => (o.ZP.isOptInEnabled(t) && u.Z.updateChannelOverrideSettings(t, e.body.id, {
						flags: p.ic.OPT_IN_ENABLED
					}, s.ZB.OptedIn), a.Z.checkGuildTemplateDirty(t), e), e => {
						throw l.Z.dispatch({
							type: "CREATE_CHANNEL_MODAL_SUBMIT_FAILURE",
							errors: e.body
						}), e
					})
				},
				createRoleSubscriptionTemplateChannel: (e, t, n, l) => c.Z.post({
					url: d.ANM.GUILD_CHANNELS(e),
					body: {
						name: t,
						type: n,
						topic: l
					},
					oldFormErrors: !0,
					trackedActionData: {
						event: r.NetworkActionNames.CHANNEL_CREATE,
						properties: e => {
							var t, n;
							return (0, i.iG)({
								is_private: !0,
								channel_id: null == e || null == (t = e.body) ? void 0 : t.id,
								channel_type: null == e || null == (n = e.body) ? void 0 : n.type
							})
						}
					},
					rejectWithError: !1
				})
			}
		},
		533307: function(e, t, n) {
			let r;
			n.d(t, {
				Z: () => m
			});
			var i = n(544891),
				l = n(570140),
				a = n(728345),
				o = n(812206),
				s = n(625128),
				c = n(335131),
				u = n(669079),
				d = n(981631),
				p = n(474936);
			r = n(775644).Z;
			let m = function(e) {
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
				resolveGiftCode: async function(e) {
					let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
						n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
					l.Z.dispatch({
						type: "GIFT_CODE_RESOLVE",
						code: e
					});
					try {
						let r = await (0, u.bT)(e, t, n);
						if (null != r.application_id && r.application_id !== p.CL) {
							let e = o.Z.getApplication(r.application_id);
							if (null == e) try {
								await a.ZP.fetchApplication(r.application_id)
							} catch (e) {}
						}
						return r.application_id === d.XAJ && await (0, c.jr)(r.sku_id), l.Z.dispatch({
							type: "GIFT_CODE_RESOLVE_SUCCESS",
							giftCode: r
						}), {
							giftCode: r
						}
					} catch (t) {
						throw l.Z.dispatch({
							type: "GIFT_CODE_RESOLVE_FAILURE",
							code: e,
							error: t
						}), t
					}
				},
				async fetchUserGiftCodesForSKU(e) {
					let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
					l.Z.dispatch({
						type: "GIFT_CODES_FETCH",
						skuId: e,
						subscriptionPlanId: t
					});
					try {
						let n = await i.tn.get({
							url: d.ANM.USER_GIFT_CODES,
							query: {
								sku_id: e,
								subscription_plan_id: t
							},
							oldFormErrors: !0,
							rejectWithError: !0
						});
						l.Z.dispatch({
							type: "GIFT_CODES_FETCH_SUCCESS",
							giftCodes: n.body,
							skuId: e,
							subscriptionPlanId: t
						})
					} catch (n) {
						l.Z.dispatch({
							type: "GIFT_CODES_FETCH_FAILURE",
							skuId: e,
							subscriptionPlanId: t
						})
					}
				},
				async createGiftCode(e) {
					let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
						n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
					l.Z.dispatch({
						type: "GIFT_CODE_CREATE_START",
						skuId: e,
						subscriptionPlanId: t
					});
					try {
						let r = await i.tn.post({
							url: d.ANM.USER_GIFT_CODE_CREATE,
							body: {
								sku_id: e,
								subscription_plan_id: t,
								gift_style: n
							},
							oldFormErrors: !0,
							rejectWithError: !0
						});
						return l.Z.dispatch({
							type: "GIFT_CODE_CREATE_SUCCESS",
							giftCode: r.body
						}), r.body
					} catch (n) {
						l.Z.dispatch({
							type: "GIFT_CODE_CREATE_FAILURE",
							skuId: e,
							subscriptionPlanId: t
						})
					}
				},
				async revokeGiftCode(e) {
					l.Z.dispatch({
						type: "GIFT_CODE_REVOKE",
						code: e
					});
					try {
						await i.tn.del({
							url: d.ANM.USER_GIFT_CODE_REVOKE(e),
							oldFormErrors: !0,
							rejectWithError: !0
						}), l.Z.dispatch({
							type: "GIFT_CODE_REVOKE_SUCCESS",
							code: e
						})
					} catch (t) {
						l.Z.dispatch({
							type: "GIFT_CODE_REVOKE_FAILURE",
							code: e
						})
					}
				},
				openNativeGiftCodeModal(e) {
					s.Z.openNativeAppModal(e, d.Etm.GIFT_CODE_BROWSER)
				}
			}, r)
		},
		603263: function(e, t, n) {
			n.d(t, {
				Gn: () => x,
				Nz: () => f,
				QQ: () => h,
				QY: () => y,
				Vj: () => m,
				Vs: () => v,
				h7: () => C,
				j8: () => g,
				oO: () => _,
				qt: () => b,
				u$: () => E,
				yC: () => d,
				zH: () => p
			});
			var r = n(570140),
				i = n(652399),
				l = n(861262),
				a = n(768119),
				o = n(405656),
				s = n(981631);

			function c(e) {
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

			function u(e, t) {
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

			function d(e, t, n, a) {
				(0, o.jW)(t, e), a && (t.search_everywhere = !0), (0, i.tI)({
					searchType: (0, l.g)(e),
					searchId: e,
					query: t,
					queryString: n
				}), r.Z.dispatch({
					type: "SEARCH_START",
					query: t,
					searchId: e,
					queryString: n,
					searchEverywhere: a
				})
			}

			function p(e) {
				switch (e) {
					case s.QIO.MOST_RELEVANT:
						return {
							sort_by: "relevance", sort_order: "desc"
						};
					case s.QIO.OLDEST:
						return {
							sort_by: "timestamp", sort_order: "asc"
						};
					case s.QIO.NEWEST:
					default:
						return {
							sort_by: "timestamp", sort_order: "desc"
						}
				}
			}

			function m(e) {
				return null == e.sort_by || null == e.sort_order ? s.QIO.NEWEST : "relevance" === e.sort_by ? s.QIO.MOST_RELEVANT : "asc" === e.sort_order ? s.QIO.OLDEST : s.QIO.NEWEST
			}

			function f(e, t, n) {
				let r = a.Z.getQuery(e);
				return d(e, u(c({}, r, p(t)), {
					offset: 0
				}), n)
			}

			function _(e, t, n) {
				var r = e,
					i = t * s.vpv,
					l = n;
				let o = a.Z.getQuery(r),
					p = a.Z.getTotalResults(r);
				return i < 0 || i > p ? void 0 : d(r, u(c({}, o), {
					offset: i
				}), l)
			}

			function h(e) {
				r.Z.dispatch({
					type: "SEARCH_CLEAR_HISTORY",
					searchId: e
				})
			}

			function g(e, t) {
				null != e && r.Z.dispatch({
					type: "SEARCH_EDITOR_STATE_CHANGE",
					searchId: e,
					editorState: t
				})
			}

			function b(e) {
				r.Z.wait(() => r.Z.dispatch({
					type: "SEARCH_EDITOR_STATE_CLEAR",
					searchId: e
				}))
			}

			function E(e, t, n) {
				null != e && r.Z.dispatch({
					type: "SEARCH_AUTOCOMPLETE_QUERY_UPDATE",
					searchId: e,
					tokens: t,
					cursorScope: n
				})
			}

			function y(e, t) {
				r.Z.dispatch({
					type: "SEARCH_SET_SHOW_BLOCKED_RESULTS",
					searchId: e,
					showBlocked: t
				})
			}

			function x(e) {
				r.Z.dispatch({
					type: "SEARCH_SET_SHOW_NO_RESULTS_ALT",
					searchId: e
				})
			}

			function C(e, t) {
				r.Z.dispatch({
					type: "SEARCH_ADD_HISTORY",
					searchId: e,
					query: t
				})
			}

			function v(e, t, n, i) {
				r.Z.dispatch({
					type: "SEARCH_RESULTS_QUERY_UPDATE",
					searchId: e,
					queryString: t,
					query: n,
					offset: i
				})
			}
		},
		775644: function(e, t, n) {
			n.d(t, {
				Z: () => c
			});
			var r = n(544891),
				i = n(570140),
				l = n(881052),
				a = n(122289),
				o = n(981631);
			let s = Object.freeze({}),
				c = {
					redeemGiftCode: async function(e) {
						let {
							code: t,
							options: n = s,
							onRedeemed: c,
							onError: u
						} = e, {
							channelId: d = null,
							paymentSource: p = null
						} = n;
						i.Z.dispatch({
							type: "GIFT_CODE_REDEEM",
							code: t
						});
						try {
							let e = await r.tn.post({
								url: o.ANM.GIFT_CODE_REDEEM(t),
								body: {
									channel_id: d,
									payment_source_id: null == p ? void 0 : p.id,
									gateway_checkout_context: await (0, a.cn)(p)
								},
								oldFormErrors: !0,
								rejectWithError: !1
							});
							return i.Z.dispatch({
								type: "GIFT_CODE_REDEEM_SUCCESS",
								code: t,
								entitlement: e.body
							}), null == c || c(), {
								code: t,
								entitlement: e
							}
						} catch (n) {
							let e = new l.HF(n);
							throw i.Z.dispatch({
								type: "GIFT_CODE_REDEEM_FAILURE",
								code: t,
								error: e
							}), null == u || u(e), e
						}
					}
				}
		},
		256638: function(e, t, n) {
			n.d(t, {
				Z: () => eS,
				c: () => ej
			});
			var r = n(255367),
				i = n(73800),
				l = n(913527),
				a = n.n(l);
			if (12633 == n.j) var o = n(688642);
			var s = n(442837),
				c = n(481060),
				u = n(668781),
				d = n(846027),
				p = n(893776),
				m = n(117266),
				f = n(37234),
				_ = n(254854),
				h = n(195500),
				g = n(287734),
				b = n(205355),
				E = n(558381),
				y = n(223245),
				x = n(491428),
				C = n(401430),
				v = n(230711),
				O = n(726542),
				j = n(100527),
				I = n(906732),
				S = n(812206),
				T = n(391650),
				N = n(600164),
				P = n(266454),
				A = n(749277),
				w = n(196068),
				Z = n(131130),
				R = n(458725),
				k = n(386146),
				L = n(492435),
				D = n(353926),
				M = n(506357),
				U = n(36459),
				F = n(236069),
				B = n(305325),
				G = n(281956),
				H = n(574650),
				V = n(665302),
				z = n(434404),
				W = n(918658),
				K = n(859428),
				Y = n(963249),
				X = n(246965),
				q = n(272008),
				Q = n(523255),
				J = n(101879),
				$ = n(496729),
				ee = n(852923),
				et = n(592125),
				en = n(131951),
				er = n(19780),
				ei = n(914010),
				el = n(594174),
				ea = n(55563),
				eo = n(695103),
				es = n(933429),
				ec = n(626135),
				eu = n(63063),
				ed = n(72924),
				ep = n(69499),
				em = n(912193),
				ef = n(981631),
				e_ = n(474936),
				eh = n(610674),
				eg = n(65154),
				eb = n(388032),
				eE = n(131715);

			function ey(e) {
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
			let ex = e => {
					var t;
					let {
						error: n,
						location: i,
						allowClick: l = !1
					} = e, a = null == (t = (0, R.hp)(n)) ? void 0 : t.errorCode, o = eb.intl.formatToPlainString(eb.t["ejOT9/"], {
						errorCode: a
					}), {
						avErrorUIEnabled: s
					} = (0, k.JN)({
						location: i
					});
					if (!s) return null;
					let u = (0, r.jsx)(c.Text, {
						variant: "text-sm/bold",
						color: "currentColor",
						tag: "span",
						className: eE.errorCodeNoticeText,
						selectable: !0,
						children: o
					});
					return l ? (0, r.jsx)(c.P3F, {
						tag: "span",
						className: eE.errorCodeNoticeClickable,
						onClick: () => l && open(eu.Z.getArticleURL(ef.BhN.AV_ERROR_CODES)),
						children: u
					}) : u
				},
				eC = () => (0, r.jsxs)(c.qXd, {
					color: c.DM8.DANGER,
					children: [(0, r.jsx)(c.RyX, {
						onClick: () => {
							ej()
						}
					}), eb.intl.string(eb.t.o3zuY2), (0, r.jsx)(ex, {
						error: R.u.NO_INPUT_DEVICES,
						location: "AudioIssueNoticeInputDevices"
					}), (0, r.jsx)(c.u3T, {
						href: eu.Z.getArticleURL(ef.BhN.NO_INPUT_DETECTED),
						children: eb.intl.string(eb.t.RYKKo6)
					})]
				}),
				ev = () => (0, r.jsxs)(c.qXd, {
					color: c.DM8.DANGER,
					children: [(0, r.jsx)(c.RyX, {
						onClick: () => {
							ej(), (0, em.b)()
						}
					}), eb.intl.string(eb.t.nCO9bG), (0, r.jsx)(ex, {
						error: R.u.NO_AUDIO_INPUT_DETECTED,
						location: "AudioIssueNoticeHelpdesk"
					}), (0, r.jsx)(c.u3T, {
						href: eu.Z.getArticleURL(ef.BhN.NO_INPUT_DETECTED),
						children: eb.intl.string(eb.t.RYKKo6)
					})]
				}),
				eO = () => (0, r.jsxs)(c.qXd, {
					color: c.DM8.DANGER,
					children: [(0, r.jsx)(c.RyX, {
						onClick: () => {
							ej(), (0, em.b)()
						}
					}), eb.intl.string(eb.t.dNAJ19), (0, r.jsx)(ex, {
						allowClick: !0,
						error: R.u.NO_AUDIO_INPUT_DETECTED,
						location: "AudioIssueNoticeMicTester"
					}), (0, r.jsx)(c.EyT, {
						onClick: () => {
							(0, f.jN)(ef.S9g.USER_SETTINGS), v.Z.setSection(ef.oAB.VOICE)
						},
						children: eb.intl.string(eb.t.I6YlBw)
					})]
				});

			function ej(e) {
				_.Z.dismiss(null != e ? {
					untilAtLeast: a()(e)
				} : void 0)
			}
			let eI = 12633 == n.j ? i.memo(function() {
				var e, t;
				let l = (0, s.e7)([el.default], () => el.default.getCurrentUser()),
					_ = (0, s.e7)([ei.Z], () => ei.Z.getGuildId()),
					j = (0, s.e7)([es.ZP], () => es.ZP.getNotice()),
					{
						analyticsLocations: R
					} = (0, I.ZP)(),
					k = null == j ? void 0 : j.type,
					em = (0, G.J)(_);
				i.useEffect(() => {
					null != k && function(e, t) {
						let n = {
							notice_type: e
						};
						null != t && (n.guild_id = t), ec.default.track(ef.rMx.APP_NOTICE_VIEWED, n)
					}(k, _)
				}, [k, _]), i.useEffect(() => {
					if (null != j && j.type === ef.kVF.SURVEY && null != j.metadata) {
						let {
							metadata: e
						} = j, t = D.Z.getUserExperimentDescriptor(e.id);
						null != t && (0, L.W9)(e.id, t), (async () => {
							var e, t;
							(null == (e = j.metadata) ? void 0 : e.id) != null && await (0, x.g8)(null == (t = j.metadata) ? void 0 : t.id)
						})()
					}
				}, [j]);
				let ex = null != k ? es.o[k] : null,
					eI = null != k ? es.nA[k] : null,
					eS = null != k ? es.m9[k] : null;
				if (null == j) return null;
				if (null != ex) return (0, r.jsx)(Z.q, {
					dismissibleContent: ex,
					noticeType: j.type
				});
				if (null != eI) return (0, r.jsx)(w.c, {
					dismissibleContent: eI
				});
				if (null != eS) return (0, r.jsx)(A.A, {
					dismissibleContent: eS,
					noticeType: j.type
				});
				let eT = null == (e = j.metadata) ? void 0 : e.premiumType;
				switch (j.type) {
					case ef.kVF.LURKING_GUILD:
						return (0, r.jsx)(K.Z, {});
					case ef.kVF.PENDING_MEMBER:
						return (0, r.jsx)(H.Z, {});
					case ef.kVF.INVITED_TO_SPEAK:
						return (0, r.jsx)(ee.Z, {});
					case ef.kVF.GUILD_RAID_NOTIFICATION:
						let {
							dismissUntil: eN
						} = j.metadata;
						return (0, r.jsx)(M.Z, {
							onDismiss: () => ej(eN)
						});
					case ef.kVF.WIN32_DEPRECATED_MESSAGE:
						let {
							dismissUntil: eP
						} = j.metadata;
						return (0, r.jsxs)(c.qXd, {
							color: c.DM8.WARNING,
							children: [(0, r.jsx)(c.RyX, {
								onClick: () => ej(eP),
								noticeType: ef.kVF.WIN32_DEPRECATED_MESSAGE
							}), eb.intl.format(eb.t["08KQ1N"], {
								helpCenterLink: eu.Z.getArticleURL(ef.BhN.WIN32_DEPRECATE)
							})]
						});
					case ef.kVF.WIN7_8_DEPRECATED_MESSAGE:
						let {
							dismissUntil: eA
						} = j.metadata;
						return (0, r.jsxs)(c.qXd, {
							color: c.DM8.WARNING,
							children: [(0, r.jsx)(c.RyX, {
								onClick: () => ej(eA),
								noticeType: ef.kVF.WIN7_8_DEPRECATED_MESSAGE
							}), eb.intl.format(eb.t["8Je+dX"], {
								helpCenterLink: eu.Z.getArticleURL(ef.BhN.WIN7_8_DEPRECATE)
							})]
						});
					case ef.kVF.MACOS_19_DEPRECATED_MESSAGE:
						let {
							dismissUntil: ew
						} = j.metadata;
						return (0, r.jsxs)(c.qXd, {
							color: c.DM8.WARNING,
							children: [(0, r.jsx)(c.RyX, {
								onClick: () => ej(ew),
								noticeType: ef.kVF.MACOS_19_DEPRECATED_MESSAGE
							}), eb.intl.format(eb.t.q8VPLi, {
								helpCenterLink: eu.Z.getArticleURL(ef.BhN.MACOS_19_DEPRECATE)
							})]
						});
					case ef.kVF.GENERIC:
						return (0, r.jsxs)(c.qXd, {
							color: c.DM8.DEFAULT,
							children: [(0, r.jsx)(c.RyX, {
								onClick: () => ej(),
								noticeType: ef.kVF.GENERIC
							}), j.message, null != j.buttonText ? (0, r.jsx)(c.NoS, {
								onClick: j.callback,
								noticeType: ef.kVF.GENERIC,
								children: j.buttonText
							}) : null]
						});
					case ef.kVF.LAUNCH_GAME_FAILURE:
						return (0, r.jsxs)(c.qXd, {
							color: c.DM8.DANGER,
							children: [(0, r.jsx)(c.RyX, {
								onClick: () => ej(),
								noticeType: ef.kVF.LAUNCH_GAME_FAILURE
							}), j.message, null != j.buttonText ? (0, r.jsx)(c.NoS, {
								onClick: j.callback,
								noticeType: ef.kVF.LAUNCH_GAME_FAILURE,
								children: j.buttonText
							}) : null]
						});
					case ef.kVF.VOICE_DISABLED:
						return (0, r.jsxs)(c.qXd, {
							color: c.DM8.WARNING,
							children: [(0, r.jsx)(c.RyX, {
								onClick: () => {
									h.Z.clearRemoteDisconnectVoiceChannelId(), ej()
								},
								noticeType: ef.kVF.VOICE_DISABLED
							}), eb.intl.string(eb.t.bOQ3jY), (0, r.jsx)(c.NoS, {
								onClick: () => {
									let e = er.Z.getRemoteDisconnectVoiceChannelId();
									null != e && null != et.Z.getChannel(e) && g.default.selectVoiceChannel(e)
								},
								noticeType: ef.kVF.VOICE_DISABLED,
								children: eb.intl.string(eb.t.vD60Pj)
							})]
						});
					case ef.kVF.VOICE_CONNECTED_LAST_SESSION:
						return (0, r.jsxs)(c.qXd, {
							color: c.DM8.DEFAULT,
							children: [(0, r.jsx)(c.RyX, {
								onClick: () => {
									h.Z.clearLastSessionVoiceChannelId(), ej()
								},
								noticeType: ef.kVF.VOICE_CONNECTED_LAST_SESSION
							}), eb.intl.string(eb.t.jY2lUF), (0, r.jsx)(c.NoS, {
								onClick: () => {
									let e = er.Z.getLastSessionVoiceChannelId();
									null != e && null != et.Z.getChannel(e) && g.default.selectVoiceChannel(e)
								},
								noticeType: ef.kVF.VOICE_CONNECTED_LAST_SESSION,
								children: eb.intl.string(eb.t.vD60Pj)
							})]
						});
					case ef.kVF.SPOTIFY_AUTO_PAUSED:
						let eZ = O.Z.get(ef.ABu.SPOTIFY);
						return (0, r.jsxs)(c.qXd, {
							color: c.DM8.DANGER,
							children: [(0, r.jsx)(c.RyX, {
								onClick: () => ej(),
								noticeType: ef.kVF.SPOTIFY_AUTO_PAUSED
							}), (0, r.jsx)("img", {
								alt: "",
								className: eE.platformIcon,
								src: eZ.icon.whiteSVG
							}), eb.intl.string(eb.t["D8Cp7+"]), (0, r.jsx)(c.NoS, {
								onClick: () => v.Z.open(ef.oAB.VOICE),
								noticeType: ef.kVF.SPOTIFY_AUTO_PAUSED,
								children: eb.intl.string(eb.t.NiTd0d)
							}), (0, r.jsx)(c.eee, {
								className: eE.textLinkSmall,
								href: eu.Z.getArticleURL(ef.BhN.SPOTIFY_AUTO_PAUSED),
								target: "_blank",
								children: eb.intl.string(eb.t.CiqAIS)
							})]
						});
					case ef.kVF.UNCLAIMED_ACCOUNT:
						return (0, r.jsxs)(c.qXd, {
							color: c.DM8.DEFAULT,
							children: [eb.intl.string(eb.t["f+Zaoq"]), (0, r.jsx)(c.NoS, {
								noticeType: ef.kVF.UNCLAIMED_ACCOUNT,
								onClick: () => em && null != _ ? (0, B.hk)(_) : T.j(),
								children: eb.intl.string(eb.t.fiNVio)
							})]
						});
					case ef.kVF.UNVERIFIED_ACCOUNT:
						return (0, r.jsxs)(c.qXd, {
							color: c.DM8.DEFAULT,
							children: [eb.intl.string(eb.t["3sWbf3"]), (0, r.jsx)(c.NoS, {
								noticeType: ef.kVF.UNVERIFIED_ACCOUNT,
								onClick: () => {
									p.Z.verifyResend(), u.Z.show({
										title: eb.intl.string(eb.t.LykQYm),
										body: eb.intl.format(eb.t.azKEPz, {
											email: null == l ? void 0 : l.email
										}),
										secondaryConfirmText: eb.intl.string(eb.t.oP5zGB),
										onConfirmSecondary: T.j
									})
								},
								children: eb.intl.string(eb.t.WnX4Jy)
							})]
						});
					case ef.kVF.SCHEDULED_MAINTENANCE:
						if (null == j.metadata) return null;
						return (0, r.jsxs)(c.qXd, {
							color: c.DM8.DEFAULT,
							children: [(0, r.jsx)(c.RyX, {
								onClick: () => b.Z.ackScheduledMaintenance(),
								noticeType: ef.kVF.SCHEDULED_MAINTENANCE
							}), eb.intl.format(eb.t.yb96S0, j.metadata), (0, r.jsx)(c.u3T, {
								href: "".concat(ef.yXt.STATUS, "/incidents/").concat(j.metadata.id),
								children: eb.intl.string(eb.t.hvVgAQ)
							})]
						});
					case ef.kVF.NO_INPUT_DETECTED:
						if (!en.Z.supports(eg.AN.LOOPBACK)) return (0, r.jsx)(ev, {});
						return (0, r.jsx)(eO, {});
					case ef.kVF.NO_INPUT_DEVICES_DETECTED:
						return (0, r.jsx)(eC, {});
					case ef.kVF.HARDWARE_MUTE:
						if (null == j.metadata) return null;
						let {
							vendor: eR, model: ek
						} = j.metadata;
						return (0, r.jsxs)(c.qXd, {
							color: c.DM8.DANGER,
							children: [eb.intl.format(eb.t.qoDex8, {
								vendorName: eR.name,
								modelName: ek.name
							}), (0, r.jsx)(c.RyX, {
								onClick: () => {
									d.Z.setEnableHardwareMuteNotice(!1), ej()
								}
							}), (0, r.jsx)(c.u3T, {
								href: ek.url,
								target: "_blank",
								rel: "noreferrer noopener",
								children: eb.intl.string(eb.t["Yl/Rio"])
							})]
						});
					case ef.kVF.STREAMER_MODE:
						return (0, r.jsxs)(c.qXd, {
							color: c.DM8.STREAMER_MODE,
							children: [(0, r.jsx)(c.RyX, {
								onClick: () => ej(),
								noticeType: ef.kVF.STREAMER_MODE
							}), eb.intl.string(eb.t.iEgBXl), (0, r.jsx)(c.NoS, {
								onClick: () => y.Z.setEnabled(!1),
								noticeType: ef.kVF.STREAMER_MODE,
								children: eb.intl.string(eb.t.R9GHyc)
							})]
						});
					case ef.kVF.H264_DISABLED:
						return (0, r.jsxs)(c.qXd, {
							color: c.DM8.DANGER,
							children: [(0, r.jsx)(c.RyX, {
								onClick: () => {
									ej()
								}
							}), eb.intl.string(eb.t.HcErZW), (0, r.jsx)(c.EyT, {
								onClick: () => {
									(0, f.jN)(ef.S9g.USER_SETTINGS), v.Z.setSection(ef.oAB.VOICE)
								},
								children: eb.intl.string(eb.t["51hI/v"])
							})]
						});
					case ef.kVF.DETECTED_OFF_PLATFORM_PREMIUM_PERK:
						if (null == j.metadata) return null;
						let {
							skuId: eL, applicationId: eD
						} = j.metadata, eM = ea.Z.get(eL), eU = S.Z.getApplication(eD);
						if (null == eM || null == eU) return null;
						let eF = {
							page: ef.ZY5.IN_APP
						};
						return (0, r.jsxs)(c.qXd, {
							color: c.DM8.PREMIUM_TIER_1,
							children: [(0, r.jsx)(c.RyX, {
								onClick: () => m.Z(eM.id),
								noticeType: ef.kVF.DETECTED_OFF_PLATFORM_PREMIUM_PERK
							}), (0, r.jsx)(c.SrA, {
								size: "md",
								color: "currentColor",
								className: eE.premiumIcon
							}), eb.intl.format(eb.t["g3MU//"], {
								applicationName: eU.name,
								skuName: eM.name
							}), (0, r.jsx)(c.NoS, {
								noticeType: ef.kVF.DETECTED_OFF_PLATFORM_PREMIUM_PERK,
								onClick: () => (0, ed.S)({
									applicationId: eU.id,
									skuId: eM.id,
									openPremiumPaymentModal: () => {
										(0, Y.Z)({
											initialPlanId: null,
											subscriptionTier: e_.Si.TIER_2,
											analyticsLocations: R,
											analyticsObject: eF
										})
									},
									analyticsLocations: R,
									analyticsLocationObject: eF,
									context: __OVERLAY__ ? ef.IlC.OVERLAY : ef.IlC.APP
								}).then(() => m.Z(eM.id)),
								children: eb.intl.string(eb.t.KEwPY2)
							})]
						});
					case ef.kVF.DETECTED_OFF_PLATFORM_PREMIUM_PERK_UPSELL: {
						if (null == j.metadata) return null;
						let {
							skuId: e,
							applicationId: t
						} = j.metadata, n = ea.Z.get(e), i = S.Z.getApplication(t);
						if (null == n || null == i) return null;
						return (0, r.jsxs)(c.qXd, {
							color: c.DM8.PREMIUM_TIER_1,
							children: [(0, r.jsx)(c.RyX, {
								onClick: () => ej(),
								noticeType: ef.kVF.DETECTED_OFF_PLATFORM_PREMIUM_PERK_UPSELL
							}), (0, r.jsx)(c.SrA, {
								size: "md",
								color: "currentColor",
								className: eE.premiumIcon
							}), eb.intl.format(eb.t.LquIKC, {
								applicationName: i.name,
								skuName: n.name
							}), (0, r.jsx)(c.EyT, {
								children: (0, r.jsx)(o.rU, {
									onClick: () => ej(),
									to: {
										pathname: ef.Z5c.APPLICATION_STORE_LISTING_SKU(n.id),
										state: {
											scrollRestoration: !1
										}
									},
									children: eb.intl.string(eb.t.hvVgAQ)
								})
							})]
						})
					}
					case ef.kVF.SURVEY: {
						let e = j.metadata;
						if (null == e) return null;
						let {
							key: t,
							prompt: n,
							cta: i,
							url: l
						} = e;
						return (0, r.jsxs)(c.qXd, {
							color: c.DM8.CUSTOM,
							children: [(0, r.jsx)(c.RyX, {
								noticeType: ef.kVF.SURVEY,
								onClick: () => {
									(0, x.hZ)(t, !0)
								}
							}), n, (0, r.jsx)(c.NoS, {
								noticeType: ef.kVF.SURVEY,
								onClick: () => {
									window.open(l, "_blank"), (0, x.hZ)(t, !1)
								},
								children: i
							})]
						})
					}
					case ef.kVF.CORRUPT_INSTALLATION:
						return (0, r.jsxs)(c.qXd, {
							color: c.DM8.DANGER,
							children: [eb.intl.string(eb.t.ugxmk5), (0, r.jsx)(c.u3T, {
								href: eu.Z.getArticleURL(ef.BhN.CORRUPT_INSTALLATION),
								target: "_blank",
								children: eb.intl.string(eb.t["6ik4Xl"])
							})]
						});
					case ef.kVF.VIDEO_UNSUPPORTED_BROWSER:
						return (0, r.jsxs)(c.qXd, {
							color: c.DM8.WARNING,
							children: [(0, r.jsx)(c.RyX, {
								onClick: () => ej(),
								noticeType: ef.kVF.VIDEO_UNSUPPORTED_BROWSER
							}), eb.intl.string(eb.t.wVjKGh), (0, r.jsx)(c.NoS, {
								noticeType: ef.kVF.VIDEO_UNSUPPORTED_BROWSER,
								onClick: () => {
									(0, c.ZDy)(async () => {
										let {
											default: e
										} = await Promise.resolve().then(n.bind(n, 431583));
										return t => (0, r.jsx)(e, ey({
											source: "Video unsupported browser"
										}, t))
									})
								},
								children: eb.intl.string(eb.t["1WjMbG"])
							})]
						});
					case ef.kVF.DISPATCH_ERROR:
						if (null == j.metadata) return null;
						let {
							error: eB
						} = j.metadata;
						return (0, r.jsxs)(c.qXd, {
							color: c.DM8.DANGER,
							children: [(0, r.jsx)(c.RyX, {
								onClick: () => ej(),
								noticeType: ef.kVF.DISPATCH_ERROR
							}), null == eB ? void 0 : eB.displayMessage, (0, r.jsx)(c.NoS, {
								noticeType: ef.kVF.DISPATCH_ERROR,
								onClick: () => (0, c.ZDy)(async () => {
									let {
										default: e
									} = await n.e("20212").then(n.bind(n, 915194));
									return t => (0, r.jsx)(e, ey({}, t))
								}),
								children: eb.intl.string(eb.t.hvVgAQ)
							})]
						});
					case ef.kVF.DISPATCH_INSTALL_SCRIPT_PROGRESS:
						if (null == j.metadata) return null;
						let {
							progress: eG, total: eH, name: eV
						} = j.metadata;
						return (0, r.jsxs)(c.qXd, {
							color: c.DM8.DEFAULT,
							children: [(0, r.jsx)(c.RyX, {
								onClick: () => ej(),
								noticeType: ef.kVF.DISPATCH_INSTALL_SCRIPT_PROGRESS
							}), (0, r.jsxs)(N.Z, {
								justify: N.Z.Justify.CENTER,
								children: [null != eV ? eb.intl.formatToPlainString(eb.t["pHj+z8"], {
									name: "".concat(eV),
									progress: eG,
									total: eH
								}) : eb.intl.formatToPlainString(eb.t["lHZn+P"], {
									progress: eG,
									total: eH
								}), (0, r.jsx)(c.$jN, {
									type: c.$jN.Type.PULSING_ELLIPSIS,
									className: eE.ellipsis
								})]
							})]
						});
					case ef.kVF.APPLICATION_TEST_MODE:
						if (null == j.metadata) return null;
						if (null != eo.Z.testModeEmbeddedApplicationId) return (0, r.jsx)(c.qXd, {
							color: c.DM8.WARNING,
							children: (0, r.jsxs)(N.Z, {
								justify: N.Z.Justify.CENTER,
								align: N.Z.Align.CENTER,
								children: [(0, r.jsx)("div", {
									children: eb.intl.format(eb.t["1qxVe3"], {
										applicationName: j.metadata.applicationName
									})
								}), (0, r.jsx)(c.RyX, {
									onClick: C.mc,
									noticeType: ef.kVF.APPLICATION_TEST_MODE
								})]
							})
						});
						return (0, r.jsx)(c.qXd, {
							color: c.DM8.WARNING,
							children: (0, r.jsxs)(N.Z, {
								justify: N.Z.Justify.CENTER,
								align: N.Z.Align.CENTER,
								children: [(0, r.jsx)("div", {
									children: eb.intl.format(eb.t.Fv5HrK, {
										applicationName: j.metadata.applicationName
									})
								}), (0, r.jsx)(ep.Z, {
									dropdownSize: ep.E.DropdownSizes.SMALL,
									className: eE.testModeSKUSelector,
									color: ep.E.Colors.WHITE,
									look: ep.E.Looks.OUTLINED,
									size: ep.E.Sizes.MIN,
									onSKUSelect: e => E.yt(e.id, {
										analyticsSource: {
											page: null,
											section: ef.jXE.NOTIFICATION_BAR,
											object: ef.qAy.NAVIGATION_LINK
										}
									}),
									applicationId: j.metadata.applicationId,
									children: eb.intl.string(eb.t.Q5ZgpK)
								}), (0, r.jsx)(c.RyX, {
									onClick: C.mc,
									noticeType: ef.kVF.APPLICATION_TEST_MODE
								})]
							})
						});
					case ef.kVF.VIEWING_ROLES:
						return (0, r.jsx)(W.Z, {});
					case ef.kVF.PREMIUM_UNCANCEL:
						return (0, r.jsxs)(c.qXd, {
							color: eT === e_.p9.TIER_1 ? c.DM8.PREMIUM_TIER_1 : eT === e_.p9.TIER_0 ? c.DM8.PREMIUM_TIER_0 : c.DM8.PREMIUM_TIER_2,
							children: [(0, r.jsx)(c.RyX, {
								noticeType: ef.kVF.PREMIUM_UNCANCEL,
								onClick: () => {
									var e, t;
									ej(null == (t = j.metadata) || null == (e = t.premiumSubscription) ? void 0 : e.currentPeriodEnd)
								}
							}), (0, r.jsx)(c.SrA, {
								size: "md",
								color: "currentColor",
								className: eE.premiumIcon
							}), eT === e_.p9.TIER_1 ? eb.intl.formatToPlainString(eb.t.fXv4ws, {
								daysLeft: j.metadata.daysLeft
							}) : eT === e_.p9.TIER_0 ? eb.intl.formatToPlainString(eb.t.ZOHZMj, {
								daysLeft: j.metadata.daysLeft
							}) : eb.intl.formatToPlainString(eb.t.outyHh, {
								daysLeft: j.metadata.daysLeft
							}), (0, r.jsx)(c.NoS, {
								noticeType: ef.kVF.PREMIUM_UNCANCEL,
								onClick: () => {
									var e, t;
									ej(null == (t = j.metadata) || null == (e = t.premiumSubscription) ? void 0 : e.currentPeriodEnd), (0, c.ZDy)(async () => {
										let {
											default: e
										} = await Promise.all([n.e("17938"), n.e("84992"), n.e("13453")]).then(n.bind(n, 561623));
										return t => {
											var n, i;
											return (0, r.jsx)(e, (n = ey({}, t), i = i = {
												daysLeft: j.metadata.daysLeft,
												premiumType: eT,
												analyticsSource: "Nag Bar",
												premiumSubscription: j.metadata.premiumSubscription
											}, Object.getOwnPropertyDescriptors ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(i)) : (function(e, t) {
												var n = Object.keys(e);
												if (Object.getOwnPropertySymbols) {
													var r = Object.getOwnPropertySymbols(e);
													n.push.apply(n, r)
												}
												return n
											})(Object(i)).forEach(function(e) {
												Object.defineProperty(n, e, Object.getOwnPropertyDescriptor(i, e))
											}), n))
										}
									})
								},
								children: eT === e_.p9.TIER_1 ? eb.intl.string(eb.t.BkbUPD) : eT === e_.p9.TIER_0 ? eb.intl.string(eb.t.Px978f) : eb.intl.string(eb.t.LW5tCA)
							})]
						});
					case ef.kVF.PREMIUM_PAST_DUE_ONE_TIME_PAYMENT:
						let {
							daysPastDue: ez, dismissUntil: eW
						} = j.metadata;
						return (0, r.jsxs)(c.qXd, {
							color: c.DM8.WARNING,
							children: [(0, r.jsx)(c.RyX, {
								noticeType: k,
								onClick: () => {
									ej(eW)
								}
							}), eb.intl.format(eb.t.zxU0Ki, {
								daysPastDue: ez
							}), (0, r.jsx)(c.NoS, {
								noticeType: ef.kVF.PREMIUM_PAST_DUE_ONE_TIME_PAYMENT,
								onClick: () => {
									ej(eW), v.Z.open(ef.oAB.SUBSCRIPTIONS)
								},
								children: eb.intl.string(eb.t.q8rxeX)
							})]
						});
					case ef.kVF.PREMIUM_PAST_DUE_INVALID_PAYMENT:
						return (0, r.jsxs)(c.qXd, {
							color: c.DM8.DANGER,
							children: [(0, r.jsx)(c.RyX, {
								noticeType: ef.kVF.PREMIUM_PAST_DUE_INVALID_PAYMENT,
								onClick: () => {
									var e, t;
									ej(null == (t = j.metadata) || null == (e = t.premiumSubscription) ? void 0 : e.currentPeriodEnd)
								}
							}), eb.intl.string(eb.t.LlZaoa), (0, r.jsx)(c.NoS, {
								noticeType: ef.kVF.PREMIUM_PAST_DUE_INVALID_PAYMENT,
								onClick: () => {
									var e, t;
									ej(null == (t = j.metadata) || null == (e = t.premiumSubscription) ? void 0 : e.currentPeriodEnd), v.Z.open(ef.oAB.SUBSCRIPTIONS)
								},
								children: eb.intl.string(eb.t["Zpd+Ym"])
							})]
						});
					case ef.kVF.PREMIUM_PAST_DUE_MISSING_PAYMENT:
						return (0, r.jsxs)(c.qXd, {
							color: c.DM8.WARNING,
							children: [(0, r.jsx)(c.RyX, {
								noticeType: ef.kVF.PREMIUM_PAST_DUE_MISSING_PAYMENT,
								onClick: () => {
									var e, t;
									ej(null == (t = j.metadata) || null == (e = t.premiumSubscription) ? void 0 : e.currentPeriodEnd)
								}
							}), eb.intl.string(eb.t["30YfCg"]), (0, r.jsx)(c.NoS, {
								noticeType: ef.kVF.PREMIUM_PAST_DUE_MISSING_PAYMENT,
								onClick: () => {
									var e, t;
									ej(null == (t = j.metadata) || null == (e = t.premiumSubscription) ? void 0 : e.currentPeriodEnd), v.Z.open(ef.oAB.SUBSCRIPTIONS)
								},
								children: eb.intl.string(eb.t.U5pKWF)
							})]
						});
					case ef.kVF.PREMIUM_MISSING_PAYMENT:
						return (0, r.jsxs)(c.qXd, {
							color: c.DM8.WARNING,
							children: [(0, r.jsx)(c.RyX, {
								noticeType: ef.kVF.PREMIUM_MISSING_PAYMENT,
								onClick: () => {
									var e, t;
									ej(null == (t = j.metadata) || null == (e = t.premiumSubscription) ? void 0 : e.currentPeriodEnd)
								}
							}), eT === e_.p9.TIER_1 ? eb.intl.formatToPlainString(eb.t.b6QUvb, {
								daysLeft: j.metadata.daysLeft
							}) : eT === e_.p9.TIER_0 ? eb.intl.formatToPlainString(eb.t["tURZ/P"], {
								daysLeft: j.metadata.daysLeft
							}) : eb.intl.formatToPlainString(eb.t.AyC74O, {
								daysLeft: j.metadata.daysLeft
							}), (0, r.jsx)(c.NoS, {
								noticeType: ef.kVF.PREMIUM_MISSING_PAYMENT,
								onClick: () => {
									var e, t;
									ej(null == (t = j.metadata) || null == (e = t.premiumSubscription) ? void 0 : e.currentPeriodEnd), v.Z.open(ef.oAB.SUBSCRIPTIONS)
								},
								children: eT === e_.p9.TIER_1 ? eb.intl.string(eb.t.lboF5O) : eT === e_.p9.TIER_0 ? eb.intl.string(eb.t["4UPwOj"]) : eb.intl.string(eb.t["P/VvGR"])
							})]
						});
					case ef.kVF.BACK_TO_PREVIOUS_SCREEN:
						return (0, r.jsx)(V.h, {
							buttonText: null != (t = j.buttonText) ? t : eb.intl.string(eb.t["/g10LC"]),
							onGoBack: j.callback,
							onDismiss: () => ej(),
							showCloseButton: !0
						});
					case ef.kVF.AUTOMOD_QUARANTINED_USER_PROFILE: {
						let e = {
							page: ef.ZY5.IN_APP
						};
						return (0, r.jsx)(F.Z, {
							guildId: _,
							analyticsLocations: R,
							analyticsLocation: e
						})
					}
					case ef.kVF.QUARANTINED:
						return (0, r.jsxs)(c.qXd, {
							color: c.DM8.DANGER,
							children: [eb.intl.string(eb.t.DVFJYW), (0, r.jsx)(c.u3T, {
								href: eh.Z,
								target: "_blank",
								children: eb.intl.string(eb.t.kvHdFB)
							}), (0, r.jsx)(c.eee, {
								href: eu.Z.getArticleURL(ef.BhN.QUARANTINE),
								target: "_blank",
								className: eE.quarantineLearnMoreLink,
								children: eb.intl.string(eb.t.hvVgAQ)
							})]
						});
					case ef.kVF.BLOCKED_BY_PROXY:
						return (0, r.jsxs)(c.qXd, {
							color: c.DM8.WARNING,
							children: [eb.intl.string(eb.t.Ugijzs), (0, r.jsx)(c.u3T, {
								href: "".concat(ef.yXt.STATUS),
								children: eb.intl.string(eb.t.hvVgAQ)
							}), (0, r.jsx)(c.RyX, {
								onClick: () => ej(),
								noticeType: ef.kVF.BLOCKED_BY_PROXY
							})]
						});
					case ef.kVF.AUTO_MODERATION_MENTION_RAID_DETECTION:
						let {
							dismissUntil: eK, decisionId: eY
						} = j.metadata;
						return (0, r.jsxs)(c.qXd, {
							color: c.DM8.WARNING,
							children: [(0, r.jsx)(c.RyX, {
								noticeType: ef.kVF.AUTO_MODERATION_MENTION_RAID_DETECTION,
								onClick: () => {
									null != _ && (0, U.T9)(_), ej(eK)
								}
							}), eb.intl.string(eb.t.B8ruyc), (0, r.jsx)(c.EyT, {
								onClick: () => {
									null != _ && (0, U.UE)(_, eY, () => {
										ej(eK), (0, U.T9)(_)
									})
								},
								children: eb.intl.string(eb.t.oX14Eh)
							}), null != _ ? (0, r.jsx)(c.EyT, {
								onClick: () => z.Z.open(_, ef.pNK.GUILD_AUTOMOD, void 0, ef.KsC.AUTOMOD_MENTION_SPAM),
								children: eb.intl.string(eb.t["1R7QIy"])
							}) : null]
						});
					case ef.kVF.SAFETY_USER_SENTIMENT_NAGBAR:
						return (0, r.jsxs)(c.qXd, {
							color: c.DM8.BRAND,
							children: [(0, r.jsx)(c.RyX, {
								noticeType: ef.kVF.SAFETY_USER_SENTIMENT_NAGBAR,
								onClick: () => {
									Q.hZ(), ej()
								}
							}), eb.intl.string(eb.t.I1nKfH), (0, r.jsx)(c.NoS, {
								noticeType: ef.kVF.SAFETY_USER_SENTIMENT_NAGBAR,
								onClick: () => {
									(0, c.ZDy)(async () => {
										let {
											default: e
										} = await n.e("52432").then(n.bind(n, 349994));
										return t => (0, r.jsx)(e, ey({}, t))
									}), Q.hZ(), ej()
								},
								children: eb.intl.string(eb.t.l5xYnJ)
							})]
						});
					case ef.kVF.PREMIUM_TIER_2_TRIAL_ENDING:
						let eX = a()().add(5, "days").toDate();
						return (0, r.jsx)(X.Z, {
							dismissCurrentNotice: () => {
								(0, P.Q3)(es.m9[ef.kVF.PREMIUM_TIER_2_TRIAL_ENDING]), ej(eX)
							},
							subscriptionTier: e_.Si.TIER_2
						});
					case ef.kVF.QUESTS_PROGRESS_INTERRUPTION:
						return (0, r.jsxs)(c.qXd, {
							color: c.DM8.DANGER,
							children: [(0, r.jsx)(c.RyX, {
								noticeType: ef.kVF.QUESTS_PROGRESS_INTERRUPTION,
								onClick: () => {
									var e;
									(null == (e = j.metadata) ? void 0 : e.streamKey) != null && (0, q.nE)(j.metadata.streamKey)
								}
							}), eb.intl.string(eb.t.rOx44u)]
						});
					case ef.kVF.BLOCK_USER_FEEDBACK_NAGBAR:
						return (0, r.jsxs)(c.qXd, {
							color: c.DM8.BRAND,
							children: [(0, r.jsx)(c.RyX, {
								onClick: () => {
									var e;
									ej(null == (e = j.metadata) ? void 0 : e.dismissUntil)
								},
								noticeType: ef.kVF.BLOCK_USER_FEEDBACK_NAGBAR
							}), eb.intl.string(eb.t["0klLS0"]), (0, r.jsx)(c.NoS, {
								onClick: () => {
									var e;
									(0, $.ZZ)(), ej(null == (e = j.metadata) ? void 0 : e.dismissUntil)
								},
								noticeType: ef.kVF.BLOCK_USER_FEEDBACK_NAGBAR,
								children: eb.intl.string(eb.t.e4y2VF)
							})]
						});
					case ef.kVF.IGNORE_USER_FEEDBACK_NAGBAR:
						return (0, r.jsx)(J.Z, {});
					default:
						return null
				}
			}) : null;

			function eS() {
				let {
					analyticsLocations: e
				} = (0, I.ZP)(j.Z.NOTICE);
				return (0, r.jsx)(I.Gt, {
					value: e,
					children: (0, r.jsx)(eI, {})
				})
			}
		},
		654030: function(e, t, n) {
			n.d(t, {
				Z: () => H
			}), n(388685), n(35282);
			var r, i = n(255367),
				l = n(73800),
				a = n(442837),
				o = n(481060),
				s = n(278323),
				c = n(224706),
				u = n(763472),
				d = n(498179),
				p = n(276852),
				m = n(620662),
				f = n(994339),
				_ = n(275920),
				h = n(917621),
				g = n(431583),
				b = n(592745),
				E = n(952164),
				y = n(768419),
				x = n(456432),
				C = n(789407),
				v = n(598077),
				O = n(757266),
				j = n(831506),
				I = n(271383),
				S = n(283595),
				T = n(293273),
				N = n(885110),
				P = n(594174),
				A = n(181106),
				w = n(417363),
				Z = n(768581),
				R = n(358085),
				k = n(804739),
				L = n(410575),
				D = n(981631),
				M = n(701488);

			function U(e, t, n) {
				return t in e ? Object.defineProperty(e, t, {
					value: n,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : e[t] = n, e
			}

			function F(e) {
				for (var t = 1; t < arguments.length; t++) {
					var n = null != arguments[t] ? arguments[t] : {},
						r = Object.keys(n);
					"function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
						return Object.getOwnPropertyDescriptor(n, e).enumerable
					}))), r.forEach(function(t) {
						U(e, t, n[t])
					})
				}
				return e
			}
			let B = {
				spotify: "Spotify"
			};
			class G extends(r = l.PureComponent) {
				getCoverImage() {
					let {
						activity: e,
						connectedApplication: t,
						application: n,
						isPreview: r,
						message: i
					} = this.props;
					if (null != n && (r || null != i && (0, f.Z)(e, i, n.id))) {
						let t = (0, p.Z)(e, n.id);
						if (null != t) return t
					}
					return null == n || n instanceof C.ZP ? null : Z.ZP.getApplicationIconURL({
						id: n.id,
						icon: null != t ? t.coverImage : n.coverImage,
						size: M.cc
					})
				}
				handleOpenSpotifyTrack(e) {
					(0, E.aG)(e)
				}
				handleOpenSpotifyArtist(e, t, n) {
					(0, E.d$)(e, t, n)
				}
				handleOpenSpotifyAlbum(e, t) {
					(0, E.Z5)(e, t)
				}
				shouldRenderCustomButton() {
					let {
						isLaunchable: e,
						application: t
					} = this.props;
					return null != t && null != t.primarySkuId && !e && R.isPlatformEmbedded
				}
				render() {
					return (0, i.jsx)(L.Z, {
						section: L.Z.Sections.APPLICATION_EMBED,
						children: this.renderEmbed()
					})
				}
				constructor(...e) {
					super(...e), U(this, "state", {
						sending: !1
					}), U(this, "handleJoin", () => {
						let {
							activity: e,
							analyticsLocations: t,
							userId: n,
							message: r,
							guildId: i,
							channelId: l
						} = this.props;
						if (null != e && null != n && null != r && null != e.session_id && null != e.application_id) {
							let o = (0, m.Z)(e, D.xjy.EMBEDDED);
							if (c.Z.join({
									userId: n,
									sessionId: e.session_id,
									applicationId: e.application_id,
									channelId: l,
									messageId: r.id,
									source: D.Sbl.MESSAGE_EMBED,
									analyticsLocations: t,
									embedded: o
								}), !o) {
								var a;
								(0, _.Z)({
									type: D.q5t.JOIN,
									source: D.Sbl.MESSAGE_EMBED,
									userId: n,
									guildId: i,
									channelId: l,
									applicationId: e.application_id,
									partyId: null == (a = e.party) ? void 0 : a.id,
									messageId: r.id,
									analyticsLocations: t
								})
							}
						}
					}), U(this, "handleInvite", async () => {
						let {
							activity: e,
							channelId: t
						} = this.props;
						if (null != e && null != t) try {
							this.setState({
								sending: !0
							}), await s.Z.sendActivityInvite({
								type: D.mFx.JOIN,
								channelId: t,
								activity: e,
								location: D.Sbl.MESSAGE_EMBED
							})
						} finally {
							this.setState({
								sending: !1
							})
						}
					}), U(this, "handleSync", () => {
						let {
							activity: e,
							userId: t
						} = this.props;
						null != e && null != t && u.Z_(e, t)
					}), U(this, "handleDownloadApp", () => {
						(0, o.h7j)(e => (0, i.jsx)(g.default, F({
							source: "Game Invite"
						}, e)))
					}), U(this, "renderSpotifyJoinButton", e => {
						let {
							channelId: t,
							guildId: n
						} = this.props;
						return (0, i.jsx)(x.Z, F({
							guildId: null != n ? n : void 0,
							channelId: t,
							source: "Invite Embed"
						}, e))
					}), U(this, "renderCustomButton", e => {
						var t, n;
						let {
							application: r
						} = this.props;
						return (0, i.jsx)(d.Z, (t = F({}, e), n = n = {
							source: D.Sbl.MESSAGE_EMBED,
							application: r
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
					}), U(this, "renderEmbed", () => {
						let e, {
							activity: t,
							partyId: n,
							myPartyId: r,
							application: l,
							partyMembers: a,
							isPreview: o,
							isLaunching: s,
							isSender: c,
							activityActionType: u,
							className: d,
							channelId: p,
							message: m,
							hideParty: f,
							isSyncable: _,
							isLaunchable: g,
							guildId: b,
							analyticsLocations: E
						} = this.props;
						if (null != l) e = l.name;
						else if (null != n) {
							let [t] = n.split(":");
							e = B[t]
						}
						return (0, i.jsx)(h.Z, {
							activity: t,
							partyId: n,
							myPartyId: r,
							applicationId: null != l ? l.id : null,
							name: e,
							partyMembers: a,
							className: d,
							coverImage: this.getCoverImage(),
							isPreview: o,
							isGameLaunchable: g,
							isLoading: s || this.state.sending,
							activityActionType: u,
							isInBrowser: !R.isPlatformEmbedded,
							isSyncable: _,
							isSender: c,
							channelId: p,
							guildId: null != b ? b : void 0,
							message: m,
							analyticsLocations: E,
							hideParty: f,
							onJoin: this.handleJoin,
							onInvite: this.handleInvite,
							onSync: this.handleSync,
							onDownloadApp: this.handleDownloadApp,
							onOpenSpotifyTrack: this.handleOpenSpotifyTrack,
							onOpenSpotifyArtist: this.handleOpenSpotifyArtist,
							onOpenSpotifyAlbum: this.handleOpenSpotifyAlbum,
							renderSpotifyJoinButton: this.renderSpotifyJoinButton,
							renderCustomButton: this.shouldRenderCustomButton() ? this.renderCustomButton : null
						})
					})
				}
			}
			U(G, "defaultProps", {
				isPreview: !1
			});
			let H = a.ZP.connectStores([y.Z, j.Z, T.Z, N.Z, O.Z, A.Z, S.Z, b.Z, w.Z, P.default, I.ZP], e => {
				var t;
				let {
					activity: n,
					analyticsLocations: r,
					application: i,
					partyId: l,
					userId: a,
					guildId: o
				} = e, {
					id: s
				} = null != i ? i : {}, c = null != n && null != n.party && n.party.id === l ? j.Z.getParty(n.party.id) : null, u = null != s ? null != (t = T.Z.getApplicationActivity(s)) ? t : N.Z.getApplicationActivity(s, !0) : T.Z.findActivity(e => e.type === D.IIU.LISTENING), d = !1;
				null != s && (d = A.Z.getState(s, D.mFx.JOIN) === D.OcF.LOADING);
				let p = Array.from(null != c ? c : []).map(e => {
						let t = null != o ? I.ZP.getMember(o, e) : null,
							n = null != t ? t.nick : null,
							r = P.default.getUser(e),
							i = null == r;
						return null == r && (r = new v.Z({
							discriminator: "0005"
						})), {
							user: r,
							unknownUser: i,
							nick: n
						}
					}),
					m = null != n && y.Z.canPlay(n),
					f = y.Z.getSyncingWith(),
					_ = null != f && null != a && f.userId === a;
				return {
					analyticsLocations: r,
					partyMembers: p,
					connectedApplication: null != s ? O.Z.getApplication(s) : null,
					myPartyId: null != u && null != u.party ? u.party.id : null,
					isLaunching: d,
					isSyncable: m && !_,
					isLaunchable: null != s && (0, k.t)({
						LibraryApplicationStore: S.Z,
						LaunchableGameStore: b.Z,
						DispatchApplicationStore: w.Z,
						ConnectedAppsStore: O.Z,
						applicationId: s
					})
				}
			})(G)
		},
		498179: function(e, t, n) {
			n.d(t, {
				Z: () => m
			});
			var r = n(255367);
			n(73800);
			var i = n(442837),
				l = n(755721),
				a = n(283595),
				o = n(55563),
				s = n(780570),
				c = n(701560),
				u = n(785547);

			function d(e) {
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

			function p(e, t) {
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

			function m(e) {
				let {
					application: t,
					fullWidth: n = !1,
					size: m = l.zx.Sizes.LARGE,
					color: f,
					customDisabledColor: _,
					hideNotLaunchable: h,
					tooltipPosition: g,
					onClick: b,
					className: E,
					source: y,
					hover: x,
					innerClassName: C
				} = e, v = {
					fullWidth: n,
					size: m,
					color: f,
					customDisabledColor: _,
					tooltipPosition: g,
					onClick: b,
					className: E,
					hover: x,
					innerClassName: C
				}, O = (0, i.e7)([a.Z], () => a.Z.getActiveLibraryApplication(t.id)), j = null != O ? O.sku.id : null, I = null != j ? j : t.primarySkuId, S = (0, i.e7)([o.Z], () => null != I && !o.Z.didFetchingSkuFail(I));
				return null != O && (0, s.Je)(O) ? (0, r.jsx)(u.Z, p(d({}, v), {
					libraryApplication: O,
					source: y
				})) : S ? (0, r.jsx)("div", {
					children: "deprecated!"
				}) : (0, r.jsx)(c.Z, p(d({}, v), {
					hideNotLaunchable: h,
					applicationId: t.id
				}))
			}
		},
		701560: function(e, t, n) {
			n.d(t, {
				Z: () => I
			}), n(388685), n(415506);
			var r, i = n(255367),
				l = n(73800),
				a = n(120356),
				o = n.n(a),
				s = n(442837),
				c = n(755721),
				u = n(481060),
				d = n(239091),
				p = n(2052),
				m = n(594190),
				f = n(592745),
				_ = n(757266),
				h = n(417363),
				g = n(358085),
				b = n(346329),
				E = n(981631),
				y = n(388032),
				x = n(637214);

			function C(e, t, n) {
				return t in e ? Object.defineProperty(e, t, {
					value: n,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : e[t] = n, e
			}

			function v(e) {
				for (var t = 1; t < arguments.length; t++) {
					var n = null != arguments[t] ? arguments[t] : {},
						r = Object.keys(n);
					"function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
						return Object.getOwnPropertyDescriptor(n, e).enumerable
					}))), r.forEach(function(t) {
						C(e, t, n[t])
					})
				}
				return e
			}

			function O(e, t) {
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
			class j extends(r = l.PureComponent) {
				get analyticsLocation() {
					return O(v({}, this.props.analyticsContext.location), {
						object: E.qAy.BUTTON_CTA
					})
				}
				renderDropdown() {
					let {
						dispatchState: e
					} = this.props;
					return null != e && null != e.launchOptions && Object.keys(e.launchOptions).length > 1 ? (0, i.jsxs)(u.P3F, {
						"aria-label": y.intl.string(y.t.KTPVLC),
						className: x.dropdownArrowHitbox,
						onClick: this.handleDropdownClick,
						children: [(0, i.jsx)("div", {
							className: x.arrowSeparator
						}), (0, i.jsx)(u.CJ0, {
							size: "md",
							color: "currentColor",
							className: x.dropdownArrow
						})]
					}) : null
				}
				renderDisabledButton(e, t) {
					let {
						className: n,
						fullWidth: r,
						size: l,
						customDisabledColor: a,
						tooltipPosition: o
					} = this.props;
					return (0, i.jsxs)("div", {
						className: x.disabledButtonWrapper,
						children: [(0, i.jsx)(c.zx, {
							className: n,
							fullWidth: r,
							size: l,
							color: null != a ? a : x.disabledButtonColor,
							disabled: !0,
							children: e
						}), (0, i.jsx)(u.ua7, {
							text: t,
							position: o,
							children: e => (0, i.jsx)("div", v({
								className: x.disabledButtonOverlay
							}, e))
						})]
					})
				}
				render() {
					let {
						className: e,
						fullWidth: t,
						size: n,
						color: r,
						isLaunchable: l,
						isLaunching: a,
						isRunning: s,
						isShiny: d,
						hideNotLaunchable: p
					} = this.props;
					if (!l) return p ? null : this.renderDisabledButton(y.intl.string(y.t["359PbW"]), g.isPlatformEmbedded ? y.intl.string(y.t.NASLa2) : y.intl.string(y.t.o1bhkJ));
					if (s) return this.renderDisabledButton(y.intl.string(y.t["3elwAA"]));
					let m = d ? u.gtL : c.zx;
					return (0, i.jsxs)(m, {
						className: o()(x.playButton, e),
						innerClassName: x.playButtonContents,
						fullWidth: t,
						size: n,
						color: null != r ? r : c.zx.Colors.GREEN,
						submitting: a,
						onClick: this.handleClick,
						children: [(0, i.jsx)("div", {
							className: x.buttonText,
							children: y.intl.string(y.t["359PbW"])
						}), this.renderDropdown()]
					})
				}
				constructor(...e) {
					super(...e), C(this, "handleDropdownClick", e => {
						e.stopPropagation();
						let {
							libraryApplication: t,
							onDropdownOpen: r,
							onDropdownClose: l
						} = this.props;
						if (null == r || r(e), null == t) throw Error("Unexpected missing libraryApplication");
						d.jW(e, async () => {
							let {
								default: e
							} = await n.e("53195").then(n.bind(n, 918306));
							return n => (0, i.jsx)(e, O(v({}, n), {
								libraryApplication: t,
								onPlay: this.handleClick
							}))
						}, {
							onClose: l
						})
					}), C(this, "handleClick", () => {
						let {
							applicationId: e,
							libraryApplication: t,
							analyticsListSort: n,
							analyticsListIndex: r
						} = this.props;
						b.playApplication(e, t, {
							analyticsParams: {
								location: this.analyticsLocation,
								list_sort: n,
								list_index: r
							}
						})
					})
				}
			}

			function I(e) {
				let {
					applicationId: t,
					libraryApplication: n
				} = e, r = (0, p.O)(), [l, a] = (0, s.Wu)([_.Z, f.Z, h.Z], () => [_.Z.isConnected(t) || f.Z.isLaunchable(t) || null != n && h.Z.isLaunchable(n.id, n.branchId), f.Z.launchingGames.has(t)], [t, n]), o = (0, s.e7)([m.ZP], () => new Set(m.ZP.getRunningVerifiedApplicationIds()).has(t), [t]), c = (0, s.e7)([h.Z], () => null != n ? h.Z.getState(n.id, n.branchId) : null, [n]);
				return (0, i.jsx)(j, O(v({}, e), {
					analyticsContext: r,
					isLaunchable: l,
					isLaunching: a,
					isRunning: o,
					dispatchState: c
				}))
			}
			C(j, "defaultProps", {
				fullWidth: !1,
				size: c.zx.Sizes.LARGE,
				tooltipPosition: "top",
				isShiny: !1,
				hideNotLaunchable: !1
			})
		},
		585237: function(e, t, n) {
			n.d(t, {
				Z: () => p
			});
			var r, i = n(255367);
			n(73800);
			var l = n(755721),
				a = n(481060),
				o = n(600164),
				s = n(106887),
				c = ((r = c || {}).SMALL = "SMALL", r.MEDIUM = "MEDIUM", r.LARGE = "LARGE", r);
			let u = {
					SMALL: s.dropdownSmall,
					MEDIUM: s.dropdownMedium,
					LARGE: s.dropdownLarge
				},
				d = e => {
					var t, n, {
							onDropdownClick: r,
							children: c,
							contentClassName: d,
							dropdownSize: p = "MEDIUM"
						} = e,
						m = function(e, t) {
							if (null == e) return {};
							var n, r, i = function(e, t) {
								if (null == e) return {};
								var n, r, i = {},
									l = Object.keys(e);
								for (r = 0; r < l.length; r++) n = l[r], t.indexOf(n) >= 0 || (i[n] = e[n]);
								return i
							}(e, t);
							if (Object.getOwnPropertySymbols) {
								var l = Object.getOwnPropertySymbols(e);
								for (r = 0; r < l.length; r++) n = l[r], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n])
							}
							return i
						}(e, ["onDropdownClick", "children", "contentClassName", "dropdownSize"]);
					return (0, i.jsx)(l.zx, (t = function(e) {
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
					}({}, m), n = n = {
						children: (0, i.jsxs)(o.Z, {
							align: o.Z.Align.CENTER,
							children: [(0, i.jsx)(o.Z.Child, {
								className: d,
								children: c
							}), null != r ? (0, i.jsxs)(a.P3F, {
								className: u[p],
								onClick: e => {
									e.stopPropagation(), null != r && r(e)
								},
								children: [(0, i.jsx)("div", {
									className: s.arrowSeparator
								}), (0, i.jsx)(a.CJ0, {
									size: "md",
									color: "currentColor",
									className: s.dropdownArrow
								})]
							}) : null]
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
				};
			d.DropdownSizes = c, d.Sizes = l.zx.Sizes, d.Colors = l.zx.Colors, d.Looks = l.zx.Looks;
			let p = d
		},
		785547: function(e, t, n) {
			n.d(t, {
				Z: () => k
			}), n(415506), n(388685);
			var r, i, l = n(255367),
				a = n(73800),
				o = n(442837),
				s = n(692547),
				c = n(755721),
				u = n(481060),
				d = n(58642),
				p = n(2052),
				m = n(710845),
				f = n(703656),
				_ = n(173747),
				h = n(7956),
				g = n(293245),
				b = n(417363),
				E = n(941128),
				y = n(780570),
				x = n(358085),
				C = n(814225),
				v = n(346329),
				O = n(701560),
				j = n(981631),
				I = n(388032),
				S = n(207178);

			function T(e, t, n) {
				return t in e ? Object.defineProperty(e, t, {
					value: n,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : e[t] = n, e
			}

			function N(e) {
				for (var t = 1; t < arguments.length; t++) {
					var n = null != arguments[t] ? arguments[t] : {},
						r = Object.keys(n);
					"function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
						return Object.getOwnPropertyDescriptor(n, e).enumerable
					}))), r.forEach(function(t) {
						T(e, t, n[t])
					})
				}
				return e
			}

			function P(e, t) {
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
			var A = ((i = A || {}).PLAY = "play", i.NOW_PLAYING = "now_playing", i.INSTALL = "install", i.UPDATE = "update", i.PAUSED = "paused", i.LOCATE = "locate", i.UNINSTALLING = "uninstalling", i.QUEUED = "queued", i.DOWNLOADING = "downloading", i.UNSUPPORTED_OS = "unsupported_os", i.ADD_TO_LIBRARY = "add_to_library", i.PREORDER_WAIT = "preorder_wait", i);
			let w = Object.freeze({
					[j.apO.PLAY]: "play",
					[j.apO.INSTALL]: "install",
					[j.apO.UPDATE]: "update",
					[j.apO.PAUSE]: "downloading",
					[j.apO.MOVE_UP]: "queued",
					[j.apO.RESUME]: "paused"
				}),
				Z = () => [I.intl.string(I.t.r9wmKi), I.intl.string(I.t["6CpimZ"]), I.intl.string(I.t.ysbNDQ), I.intl.string(I.t.TLnXx8), I.intl.string(I.t.Qi8mnZ), I.intl.string(I.t.yvMu3d), I.intl.string(I.t.PnNUZ2), I.intl.string(I.t.hU2TEB), I.intl.string(I.t.YyY519), I.intl.string(I.t.PbHJb2)];
			class R extends(r = a.Component) {
				get analyticsLocation() {
					return P(N({}, this.props.analyticsContext.location), {
						object: j.qAy.BUTTON_CTA
					})
				}
				getText(e) {
					switch ("uninstalling" !== e && (this._uninstallStringIndex = null), e) {
						case "install":
						case "unsupported_os":
							return I.intl.string(I.t.nL0WvL);
						case "update":
							return I.intl.string(I.t.tkhwp6);
						case "paused":
							return I.intl.string(I.t["6EKrh4"]);
						case "locate":
							return I.intl.string(I.t["nIj+a2"]);
						case "uninstalling":
							let t = Z();
							return null == this._uninstallStringIndex && (this._uninstallStringIndex = Math.floor(Math.random() * t.length)), t[this._uninstallStringIndex];
						case "queued":
							return I.intl.string(I.t.TiJg5u);
						case "downloading":
							return I.intl.string(I.t.Tdhepa);
						case "preorder_wait":
							return I.intl.string(I.t.xiXyPT);
						case "add_to_library":
							return I.intl.string(I.t.r3fwub);
						default:
							throw Error("Unexpected button state")
					}
				}
				getButtonState() {
					let {
						libraryApplication: e,
						dispatchState: t,
						actionState: n
					} = this.props;
					if (e.isHidden()) return "add_to_library";
					if (e.isPreorder()) return "preorder_wait";
					let r = null != n ? w[n] : null;
					return null != r ? r : null != t && t.type === j.vxO.UNINSTALLING ? "uninstalling" : (0, x.isWeb)() ? "play" : "unsupported_os"
				}
				renderPlayButton() {
					let {
						libraryApplication: e,
						fullWidth: t,
						size: n,
						color: r,
						customDisabledColor: i,
						isPlayShiny: a,
						onDropdownOpen: o,
						onDropdownClose: s,
						analyticsListSort: c,
						analyticsListIndex: u
					} = this.props;
					return (0, l.jsx)(O.Z, {
						applicationId: e.id,
						libraryApplication: e,
						fullWidth: t,
						size: n,
						color: r,
						customDisabledColor: i,
						isShiny: a,
						onDropdownOpen: o,
						onDropdownClose: s,
						analyticsListSort: c,
						analyticsListIndex: u
					})
				}
				renderDisabledButton(e, t) {
					let {
						className: n,
						fullWidth: r,
						size: i,
						customDisabledColor: a,
						tooltipPosition: o
					} = this.props;
					return (0, l.jsxs)("div", {
						className: S.disabledButtonWrapper,
						children: [(0, l.jsxs)(c.zx, {
							className: n,
							fullWidth: r,
							size: i,
							color: null != a ? a : S.disabledButtonColor,
							disabled: !0,
							children: [this.getText(e), this.renderProgressBar()]
						}), (0, l.jsx)(u.ua7, {
							text: t,
							position: o,
							children: e => (0, l.jsx)("div", N({
								className: S.disabledButtonOverlay
							}, e))
						})]
					})
				}
				renderProgressBar() {
					let {
						hideProgress: e,
						dispatchState: t
					} = this.props;
					if (e) return null;
					let n = y.KJ(t);
					if (null == n) return null;
					let r = n.type === j.vxO.UNINSTALLING ? u.Exd.INDETERMINATE : y.xI(Number(n.progress), Number(n.total));
					return (0, l.jsx)(u.Exd, {
						percent: r,
						size: u.Exd.Sizes.XSMALL,
						foregroundColor: n.paused ? s.Z.unsafe_rawColors.PRIMARY_500.css : s.Z.unsafe_rawColors.GREEN_360.css,
						backgroundColor: s.Z.unsafe_rawColors.TRANSPARENT.css,
						className: S.progress
					})
				}
				renderActionButton(e, t) {
					let {
						className: n,
						fullWidth: r,
						size: i,
						color: a,
						isCloudSyncing: o
					} = this.props;
					return (0, l.jsxs)(c.zx, {
						className: n,
						fullWidth: r,
						size: i,
						color: null != a ? a : c.zx.Colors.GREEN,
						submitting: "uninstalling" === e || o,
						onClick: e => this.handleClick(e, t),
						children: [this.getText(e), this.renderProgressBar()]
					})
				}
				render() {
					let {
						hasNoBuild: e,
						libraryApplication: t
					} = this.props, n = this.getButtonState();
					if ("play" === n) return this.renderPlayButton();
					if ("preorder_wait" === n) return this.renderDisabledButton(n, function(e) {
						let t = C.en(e.sku);
						return null != t ? I.intl.formatToPlainString(I.t.Aqe2ZG, {
							date: t
						}) : null
					}(t));
					if ("unsupported_os" === n) return this.renderDisabledButton(n, I.intl.formatToPlainString(I.t.LBm0Aw, {
						operatingSystem: I.intl.string(I.t["0/xHFB"])
					}));
					if ("install" === n && e) return this.renderDisabledButton(n, I.intl.string(I.t.QUSQIC));
					let r = this.onClickHandlers[n];
					return null == r ? this.renderDisabledButton(n) : this.renderActionButton(n, r)
				}
				constructor(...e) {
					super(...e), T(this, "_uninstallStringIndex", null), T(this, "handleAddToLibrary", async () => {
						try {
							let {
								libraryApplication: e
							} = this.props;
							await d.h(e.id, e.branchId, e.getFlags() & ~j.eHb.HIDDEN), (0, f.uL)(j.Z5c.APPLICATION_LIBRARY)
						} catch (e) {
							new m.Z("LibraryApplicationButton").error(e)
						}
					}), T(this, "handleInstall", () => {
						let {
							libraryApplication: e,
							source: t
						} = this.props;
						v.installApplication(e.id, e.branchId, t)
					}), T(this, "handleUpdate", () => {
						let {
							libraryApplication: e
						} = this.props;
						v.updateApplication(e.id, e.branchId)
					}), T(this, "onClickHandlers", {
						add_to_library: this.handleAddToLibrary,
						install: this.handleInstall,
						update: this.handleUpdate
					}), T(this, "handleClick", (e, t) => {
						let {
							onClick: n
						} = this.props;
						null == n || n(e), t(e)
					})
				}
			}

			function k(e) {
				let {
					libraryApplication: t
				} = e, n = (0, p.O)(), [r, i] = (0, o.Wu)([b.Z, E.Z], () => [(0, h.i)(t, b.Z, E.Z), b.Z.getState(t.id, t.branchId)], [t]), a = (0, o.e7)([g.Z], () => g.Z.isSyncing(t.id, t.branchId), [t]), s = (0, o.e7)([_.Z], () => _.Z.hasNoBuild(t.id, t.branchId), [t]);
				return (0, l.jsx)(R, P(N({}, e), {
					analyticsContext: n,
					actionState: r,
					dispatchState: i,
					isCloudSyncing: a,
					hasNoBuild: s
				}))
			}
			T(R, "defaultProps", {
				fullWidth: !1,
				size: c.zx.Sizes.LARGE,
				hideProgress: !1,
				isPlayShiny: !1,
				tooltipPosition: "top"
			}), T(R, "ButtonStates", A)
		},
		86357: function(e, t, n) {
			n.d(t, {
				Z: () => v
			}), n(415506);
			var r, i, l, a = n(255367),
				o = n(73800),
				s = n(120356),
				c = n.n(s),
				u = n(481060),
				d = n(646288),
				p = n(388032),
				m = n(823209),
				f = ((i = f || {})[i.DIRECTORY_HERO = 1] = "DIRECTORY_HERO", i[i.DIRECTORY_TILE = 2] = "DIRECTORY_TILE", i[i.DIRECTORY_SEARCH = 3] = "DIRECTORY_SEARCH", i[i.LISTING = 4] = "LISTING", i[i.EMBED = 5] = "EMBED", i);
			let _ = e => {
					let {
						className: t
					} = e;
					return (0, a.jsxs)("div", {
						className: c()(m.row, t),
						children: [(0, a.jsx)(u.vqy, {
							size: "md",
							color: "currentColor",
							className: m.icon
						}), p.intl.string(p.t["7eicAA"])]
					})
				},
				h = e => {
					let {
						sku: t,
						className: n
					} = e;
					return (0, a.jsxs)("div", {
						className: c()(m.row, n),
						children: [(0, a.jsx)(u.SrA, {
							size: "md",
							color: "currentColor",
							className: m.icon
						}), (0, d.Z)(t)]
					})
				},
				g = e => {
					let {
						sku: t,
						className: n
					} = e;
					return (0, a.jsx)("div", {
						className: c()(m.salePercentage, n),
						children: t.getDisplaySalePercentage()
					})
				},
				b = e => {
					let {
						sku: t,
						className: n
					} = e;
					return (0, a.jsx)("div", {
						className: c()(m.originalAmount, n),
						children: (0, d.Z)(t, !1)
					})
				},
				E = e => {
					let {
						sku: t,
						className: n
					} = e;
					return (0, a.jsx)("div", {
						className: n,
						children: (0, d.Z)(t)
					})
				},
				y = e => {
					let {
						sku: t,
						className: n
					} = e;
					return (0, a.jsxs)("div", {
						className: c()(m.row, n),
						children: [(0, a.jsx)(g, {
							sku: t
						}), (0, a.jsx)(b, {
							sku: t
						}), (0, a.jsx)(E, {
							sku: t
						})]
					})
				},
				x = e => {
					let {
						className: t
					} = e;
					return (0, a.jsx)("div", {
						className: t,
						children: p.intl.string(p.t.QQsaCQ)
					})
				};
			class C extends(r = o.PureComponent) {
				getState() {
					let {
						inLibrary: e,
						sku: t,
						hasEntitlementBranch: n
					} = this.props;
					if (n) return 5;
					if (e) return 1;
					if (!t.available) return 4;
					if (t.premium) return 3;
					if (t.isOnSale) return 2;
					else if (null != t.getPrice()) return 4;
					return null
				}
				renderGeneric(e, t) {
					let {
						className: n,
						sku: r
					} = this.props;
					switch (e) {
						case 5:
							return (0, a.jsx)(x, {
								className: c()(t, n)
							});
						case 1:
							return (0, a.jsx)(_, {
								className: c()(t, n)
							});
						case 3:
							return (0, a.jsx)(h, {
								sku: r,
								className: c()(t, n)
							});
						case 2:
							return (0, a.jsx)(y, {
								sku: r,
								className: c()(t, n)
							});
						default:
							return (0, a.jsx)(E, {
								className: c()(t, n),
								sku: r
							})
					}
				}
				renderDirectoryHero(e) {
					let {
						className: t,
						sku: n
					} = this.props;
					switch (e) {
						case 5:
							return (0, a.jsx)(x, {
								className: t
							});
						case 3:
							return (0, a.jsx)(h, {
								sku: n,
								className: c()(m.directoryHeroPricePremium, t)
							});
						case 2:
							return (0, a.jsx)(y, {
								sku: n,
								className: c()(m.directoryHeroPrice, t)
							});
						default:
							return (0, a.jsx)(E, {
								className: c()(m.directoryHeroPrice, t),
								sku: n
							})
					}
				}
				renderListing(e) {
					let t, {
						className: n,
						sku: r
					} = this.props;
					switch (e) {
						case 5:
							t = (0, a.jsx)(x, {});
							break;
						case 2:
							t = (0, a.jsxs)(o.Fragment, {
								children: [(0, a.jsxs)("div", {
									className: m.row,
									children: [(0, a.jsx)(E, {
										sku: r
									}), (0, a.jsx)(g, {
										sku: r
									})]
								}), (0, a.jsx)(b, {
									sku: r
								})]
							});
							break;
						default:
							t = (0, a.jsx)(E, {
								sku: r
							})
					}
					return (0, a.jsx)("div", {
						className: c()(m.listingPrice, n),
						children: t
					})
				}
				render() {
					let e = this.getState();
					if (null == e) return null;
					switch (this.props.type) {
						case 1:
							return this.renderDirectoryHero(e);
						case 2:
							return this.renderGeneric(e, m.directoryTilePrice);
						case 3:
							return this.renderGeneric(e, m.directorySearchPrice);
						case 4:
							return this.renderListing(e);
						case 5:
							return this.renderGeneric(e, m.embedPrice);
						default:
							throw Error("Invalid Price Unit Type")
					}
				}
			}(l = "Types") in C ? Object.defineProperty(C, l, {
				value: f,
				enumerable: !0,
				configurable: !0,
				writable: !0
			}) : C[l] = f;
			let v = C
		},
		914602: function(e, t, n) {
			n.d(t, {
				Z: () => y
			}), n(388685);
			var r, i = n(255367),
				l = n(73800),
				a = n(120356),
				o = n.n(a),
				s = n(86357),
				c = n(54936),
				u = n(687755),
				d = n(351465),
				p = n(669021),
				m = n(73346),
				f = n(568836),
				_ = n(345898),
				h = n(981631),
				g = n(817165);

			function b(e, t, n) {
				return t in e ? Object.defineProperty(e, t, {
					value: n,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : e[t] = n, e
			}
			class E extends(r = l.PureComponent) {
				render() {
					let {
						sku: e,
						storeListing: t,
						isHorizontal: n,
						className: r,
						renderCustomTagline: l,
						renderCustomTitle: a,
						renderCustomMedia: o,
						isEmbed: s
					} = this.props, c = s ? f.$G : _.Z;
					return (0, i.jsx)(c, {
						className: r,
						renderMedia: null != o ? o : this.renderMedia,
						renderTitle: null != a ? a : () => e.name,
						renderTagline: null != l ? l : () => t.tagline,
						renderActions: this.renderActions,
						isHorizontal: n
					})
				}
				constructor(...e) {
					super(...e), b(this, "renderActions", () => {
						let {
							inLibrary: e,
							sku: t,
							renderCustomActions: n,
							isMouseOver: r,
							showBuyInline: l
						} = this.props, a = (l || !t.requiresPayment) && !e;
						return null != n ? n() : (0, i.jsxs)("div", {
							className: g.priceOs,
							children: [(0, i.jsx)(s.Z, {
								type: s.Z.Types.DIRECTORY_TILE,
								sku: t,
								inLibrary: e,
								className: a && r ? g.tilePriceWithVisibleBuyButton : g.tilePrice
							}), (0, i.jsx)(c.n, {
								systems: [h.TaA.WINDOWS],
								className: g.platform
							}), a ? (0, i.jsx)("div", {
								children: "deprecated!"
							}) : null]
						})
					}), b(this, "renderMedia", () => {
						let {
							playing: e,
							muted: t,
							showMediaPlaceholder: n,
							onToggleMute: r,
							sku: a,
							isHorizontal: s,
							storeListing: c
						} = this.props;
						return (0, i.jsxs)(l.Fragment, {
							children: [(0, i.jsx)(p.Z, {
								className: o()(g.splashContainer, {
									[g.splashContainerHorizontal]: s
								}),
								video: null != c.previewVideo ? (0, m._W)(a.applicationId, c.previewVideo) : void 0,
								image: null != c.thumbnail ? (0, m._W)(a.applicationId, c.thumbnail, 600) : null,
								title: a.name,
								playing: e,
								muted: t,
								placeholder: n,
								onToggleMute: r,
								splashClassName: g.splashVideo,
								splashPlaceholderClassName: g.splashPlaceholder
							}), a.exclusive ? (0, i.jsx)(d.Z, {
								className: o()(g.exclusiveRegular, {
									[g.exclusivePlaying]: e
								})
							}) : a.isTheGameAwardsWinner ? (0, i.jsx)(u.Z, {
								className: o()(g.exclusiveRegular, {
									[g.exclusivePlaying]: e
								})
							}) : null]
						})
					})
				}
			}
			b(E, "defaultProps", {
				showMediaPlaceholder: !1,
				isMouseOver: !1,
				showBuyInline: !1,
				isHorizontal: !1,
				isEmbed: !1
			});
			let y = E
		},
		568836: function(e, t, n) {
			n.d(t, {
				$G: () => d,
				OR: () => p,
				aL: () => u
			});
			var r = n(255367);
			n(73800);
			var i = n(120356),
				l = n.n(i),
				a = n(345898),
				o = n(433962);

			function s(e) {
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

			function c(e, t) {
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
			let u = 660,
				d = e => (0, r.jsx)(a.Z, c(s({}, e), {
					className: l()(e.className, {
						[o.embedVertical]: !e.isHorizontal,
						[o.embedHorizontal]: e.isHorizontal
					})
				})),
				p = e => {
					let {
						isHorizontal: t
					} = e;
					return (0, r.jsx)(d, c(s({}, e), {
						media: () => (0, r.jsx)("div", {
							className: o.loadingDescription,
							children: (0, r.jsx)("div", {
								className: l()(o.loadingBackgroundWrapper, {
									[o.loadingBackgroundWrapperHorizontal]: t
								}),
								children: (0, r.jsx)("div", {
									className: o.loadingBackground
								})
							})
						}),
						title: () => (0, r.jsx)("div", {
							className: l()(o.loadingImage, {
								[o.loadingImageHorizontal]: t
							})
						})
					}))
				}
		},
		345898: function(e, t, n) {
			n.d(t, {
				Z: () => s
			}), n(953529);
			var r = n(255367);
			n(73800);
			var i = n(120356),
				l = n.n(i),
				a = n(481060),
				o = n(360044);
			let s = e => {
				let {
					renderTitle: t,
					renderTagline: n,
					renderActions: i,
					renderMedia: s,
					className: c,
					isHorizontal: u = !1
				} = e;
				return (0, r.jsxs)("div", {
					className: l()(o.tile, {
						[o.tileHorizontal]: u
					}, c),
					children: [(0, r.jsx)("div", {
						className: l()(o.media, {
							[o.mediaHorizontal]: u
						}),
						children: null == s ? void 0 : s()
					}), (0, r.jsxs)("div", {
						className: o.description,
						children: [(0, r.jsx)(a.H, {
							className: o.title,
							children: null == t ? void 0 : t()
						}), (0, r.jsx)("div", {
							className: o.tagline,
							children: null == n ? void 0 : n()
						}), (0, r.jsx)("div", {
							className: o.actions,
							children: null == i ? void 0 : i()
						})]
					})]
				})
			}
		},
		637374: function(e, t, n) {
			n.d(t, {
				Z: () => Y
			}), n(388685);
			var r = n(255367),
				i = n(73800),
				l = n(120356),
				a = n.n(l),
				o = n(913527),
				s = n.n(o),
				c = n(442837),
				u = n(755721),
				d = n(481060),
				p = n(230711),
				m = n(568836),
				f = n(730749),
				_ = n(112724),
				h = n(607070),
				g = n(884697),
				b = n(600164),
				E = n(479446),
				y = n(930114),
				x = n(981632),
				C = n(108989),
				v = n(703656),
				O = n(314897),
				j = n(82142),
				I = n(283595),
				S = n(594174),
				T = n(509545),
				N = n(55563),
				P = n(199480),
				A = n(626135),
				w = n(669079),
				Z = n(74538),
				R = n(296848),
				k = n(51144),
				L = n(626799),
				D = n(981631),
				M = n(474936),
				U = n(388032),
				F = n(955964);

			function B(e, t, n) {
				return t in e ? Object.defineProperty(e, t, {
					value: n,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : e[t] = n, e
			}

			function G(e) {
				for (var t = 1; t < arguments.length; t++) {
					var n = null != arguments[t] ? arguments[t] : {},
						r = Object.keys(n);
					"function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
						return Object.getOwnPropertyDescriptor(n, e).enumerable
					}))), r.forEach(function(t) {
						B(e, t, n[t])
					})
				}
				return e
			}

			function H(e, t) {
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

			function V(e) {
				let {
					onClick: t,
					libraryApplication: n
				} = e;
				return (0, r.jsxs)(d.P3F, {
					className: F.libraryLink,
					onClick: t,
					children: [(0, r.jsx)(d.vqy, {
						size: "md",
						color: "currentColor",
						className: F.libraryIcon
					}), (0, r.jsx)("div", {
						children: n.isHidden() ? U.intl.string(U.t.Wi99Rk) : U.intl.string(U.t["+tXad3"])
					})]
				})
			}
			class z extends i.PureComponent {
				get isHorizontal() {
					let {
						width: e
					} = this.props;
					return e >= m.aL
				}
				handleViewInventory() {
					p.Z.open(D.oAB.INVENTORY)
				}
				render() {
					return (0, r.jsx)(m.$G, {
						isHorizontal: this.isHorizontal,
						renderTitle: this.renderTitle,
						renderTagline: this.renderTagline,
						renderMedia: this.renderMedia,
						renderActions: this.renderActions
					})
				}
				constructor(...e) {
					super(...e), B(this, "renderMedia", () => (0, r.jsx)("div", {
						className: a()(F.invalidPoop, {
							[F.invalidPoopHorizontal]: this.isHorizontal
						})
					})), B(this, "renderTitle", () => this.props.isSelfGift ? U.intl.string(U.t["mT9B4+"]) : U.intl.string(U.t.Vo5yHx)), B(this, "renderActions", () => this.props.isSelfGift ? (0, r.jsx)(d.zxk, {
						variant: "primary",
						size: "sm",
						text: U.intl.string(U.t["jcSP+v"]),
						onClick: this.handleViewInventory
					}) : (0, r.jsx)(d.zxk, {
						variant: "primary",
						size: "sm",
						text: U.intl.string(U.t.bUvv1d),
						disabled: !0
					})), B(this, "renderTagline", () => this.props.isSelfGift ? U.intl.string(U.t.aUqE6e) : U.intl.string(U.t["2mWvHB"]))
				}
			}
			class W extends i.Component {
				get analyticsLocation() {
					let {
						analyticsContext: {
							location: e
						}
					} = this.props;
					return H(G({}, e), {
						section: D.jXE.GIFT_CODE_EMBED
					})
				}
				renderActions(e) {
					let {
						libraryApplication: t
					} = this.props;
					return (0, r.jsxs)(b.Z, {
						justify: b.Z.Justify.BETWEEN,
						children: [(0, r.jsxs)(b.Z, {
							children: [this.renderButton(e), null == t || e.isSubscription ? null : (0, r.jsx)(V, {
								onClick: this.handleViewLibrary,
								libraryApplication: t
							})]
						}), (0, r.jsxs)(b.Z, {
							align: b.Z.Align.END,
							justify: b.Z.Justify.END,
							className: F.metadata,
							direction: b.Z.Direction.VERTICAL,
							children: [e.hasMultipleCopies ? (0, r.jsx)("div", {
								children: this.renderGiftCodeCopiesLeft(e)
							}) : null, e.redeemed || e.isClaimed || null != t || null == e.expiresAt ? null : (0, r.jsx)("div", {
								children: U.intl.format(U.t.nZBvUV, {
									hours: e.expiresAt.diff(s()(), "h")
								})
							})]
						})]
					})
				}
				renderGiftCodeCopiesLeft(e) {
					let t = e.isSubscription ? U.t["4iHwKS"] : U.t["YeLq8/"];
					return U.intl.format(t, {
						remaining: e.remainingUses,
						total: e.maxUses
					})
				}
				renderButton(e) {
					let {
						libraryApplication: t,
						currentUser: n,
						isSelfGift: i
					} = this.props, l = {
						onClick: this.handleAccept,
						color: u.zx.Colors.BRAND
					}, a = !e.isSubscription && null != t || !e.isSelfRedeemable && i || e.isExistingPremiumSubscriptionDisallowed && (0, Z.I5)(n);
					return (e.redeemed || a || e.isClaimed || !n.verified) && (l.color = u.zx.Colors.BRAND, l.disabled = !0), (0, r.jsx)(u.zx, H(G({}, l), {
						className: (0, g.mO)(e) ? F.collectiblesAcceptButton : null,
						size: u.zx.Sizes.SMALL,
						children: e.redeemed ? U.intl.string(U.t.BTihoq) : null != e.giftStyle ? U.intl.string(U.t.TiZFqa) : U.intl.string(U.t.bUvv1d)
					}))
				}
				isCustomGiftMessage() {
					let {
						type: e
					} = this.props;
					return e === D.uaV.CUSTOM_GIFT
				}
				renderTitle(e) {
					let {
						currentUser: t,
						isSelfGift: n,
						sku: r
					} = this.props;
					return this.isCustomGiftMessage() && !n ? U.intl.formatToPlainString(U.t.t1SOIS, {
						recipientDisplayName: k.ZP.getName(t)
					}) : null == r ? null : e.isSubscription ? n ? U.intl.string(U.t["2PJ1ND"]) : U.intl.string(U.t.hrnGnp) : n ? U.intl.string(U.t.QLEMlZ) : U.intl.string(U.t.W4DBc3)
				}
				renderBody(e) {
					let {
						libraryApplication: t,
						isSelfGift: n,
						sku: r,
						gifter: i,
						subscriptionPlan: l,
						currentUser: a
					} = this.props;
					if (null == r) return U.intl.string(U.t.ZTNur6);
					if (!n && this.isCustomGiftMessage() && !e.redeemed) return;
					let o = r.isPreorder() ? U.intl.formatToPlainString(U.t.evinTU, {
						name: r.name
					}) : r.name;
					if (e.redeemed) return e.isSubscription || (0, g.mO)(e) ? U.intl.string(U.t.mVC3Cg) : U.intl.format(U.t["ss/L+/"], {
						skuName: o,
						onViewInLibrary: this.handleViewLibrary
					});
					if (!e.isSubscription && null != t) return U.intl.format(U.t.UdXO8P, {
						skuName: o,
						onViewInLibrary: this.handleViewLibrary
					});
					if (e.isClaimed) return U.intl.string(U.t.ARWFQU);
					if (!a.verified) return U.intl.format(U.t.GQxl7u, {
						onClick: this.handleVerificationClick
					});
					if (n) return e.isSelfRedeemable ? U.intl.string(U.t["lQI+cH"]) : U.intl.formatToPlainString(U.t["A+etHx"], {
						skuName: o
					});
					if (e.isExistingPremiumSubscriptionDisallowed) return U.intl.string(U.t["UCIU9/"]);
					if (e.hasMultipleCopies) return null != i ? e.isSubscription ? U.intl.format(U.t.l3VxgI, {
						username: k.ZP.getUserTag(i),
						maxUses: e.maxUses,
						skuName: o
					}) : U.intl.format(U.t["9cYrw8"], {
						username: k.ZP.getUserTag(i),
						totalCopies: e.maxUses,
						skuName: o
					}) : e.isSubscription ? U.intl.formatToPlainString(U.t.svrO3d, {
						maxUses: e.maxUses,
						skuName: o
					}) : U.intl.formatToPlainString(U.t["3AgAn5"], {
						totalCopies: e.maxUses,
						skuName: o
					});
					if (e.isSubscription) {
						if (null == l) return U.intl.string(U.t.ZTNur6);
						if (null != i) {
							let e = l.interval === M.rV.MONTH ? U.t["/RDIEB"] : U.t["3CX6Eh"];
							return U.intl.format(e, {
								username: k.ZP.getUserTag(i),
								skuName: o,
								intervalCount: l.intervalCount
							})
						}
						let e = l.interval === M.rV.MONTH ? U.t["2O4lo6"] : U.t["+Xjmsb"];
						return U.intl.format(e, {
							skuName: o,
							intervalCount: l.intervalCount
						})
					}
					return null != i ? U.intl.format(U.t["3HsdQ0"], {
						username: k.ZP.getUserTag(i)
					}) : U.intl.string(U.t.Jdnjjo)
				}
				renderPromotionActions() {
					return (0, r.jsx)(d.zxk, {
						variant: "primary",
						size: "sm",
						text: U.intl.string(U.t["71nuwc"]),
						onClick: this.handleClaimPromotion
					})
				}
				renderEmbed() {
					let {
						giftCode: e,
						width: t
					} = this.props;
					return null == e ? null : (0, r.jsx)(L.$, {
						skuId: e.skuId,
						onEmbedClick: this.handleEmbedClick,
						analyticsSection: D.jXE.GIFT_CODE_EMBED,
						renderCustomActions: () => this.renderActions(e),
						renderCustomTitle: () => this.renderTitle(e),
						renderCustomTagline: () => this.renderBody(e),
						renderCustomMedia: null == e.giftStyle ? void 0 : () => this.renderCustomGiftBox(e),
						width: t
					})
				}
				render() {
					let {
						giftCode: e,
						resolved: t,
						width: n,
						isSelfGift: i
					} = this.props;
					if (null != e && null != e.promotion) return (0, r.jsx)(L.$, {
						skuId: e.skuId,
						onEmbedClick: this.handleClaimPromotion,
						analyticsSection: D.jXE.GIFT_CODE_EMBED,
						renderCustomActions: () => this.renderPromotionActions(),
						renderCustomTitle: () => U.intl.string(U.t.X4p5uL),
						renderCustomTagline: () => U.intl.string(U.t.VIuwDw),
						width: n
					});
					if (null == e || e.revoked)
						if (t) return (0, r.jsx)(z, {
							isSelfGift: i,
							width: n
						});
						else return (0, r.jsx)(m.OR, {
							isHorizontal: n >= m.aL
						});
					return (0, g.mO)(e) ? (0, r.jsx)("div", {
						className: F.collectiblesEmbedWrapper,
						children: this.renderEmbed()
					}) : this.renderEmbed()
				}
				constructor(...e) {
					super(...e), B(this, "handleViewLibrary", e => {
						let {
							libraryApplication: t
						} = this.props;
						e.preventDefault(), null != t && t.isHidden() ? (0, v.uL)(D.Z5c.APPLICATION_LIBRARY_SETTINGS) : (0, v.uL)(D.Z5c.APPLICATION_LIBRARY, {
							state: {
								applicationId: null != t ? t.id : void 0
							}
						})
					}), B(this, "handleVerificationClick", e => {
						e.stopPropagation(), e.preventDefault(), p.Z.open(D.oAB.ACCOUNT)
					}), B(this, "handleAccept", e => {
						let {
							channelId: t,
							code: n,
							content: r,
							type: i,
							giftInfo: l
						} = this.props;
						e.preventDefault(), e.stopPropagation(), A.default.track(D.rMx.OPEN_MODAL, {
							type: "gift_accept",
							location: H(G({}, this.analyticsLocation), {
								object: D.qAy.BUTTON_CTA
							})
						});
						let a = i !== D.uaV.CUSTOM_GIFT ? void 0 : r;
						(0, y.V)({
							processedCode: n,
							channelContext: t,
							customGiftMessage: a,
							giftInfo: l
						})
					}), B(this, "handleEmbedClick", e => {
						let {
							giftCode: t
						} = this.props;
						null != t && t.isSubscription && (e.preventDefault(), p.Z.open(D.oAB.PREMIUM))
					}), B(this, "handleClaimPromotion", e => {
						var t;
						e.stopPropagation(), e.preventDefault();
						let n = null == (t = this.props.giftCode) ? void 0 : t.code;
						null != n && window.open(D.Z5c.BILLING_PROMOTION_REDEMPTION(n))
					}), B(this, "renderCustomGiftBox", e => {
						let {
							useReducedMotion: t,
							width: n
						} = this.props;
						if (null == e || null == e.giftStyle) return null;
						let i = M.jy.includes(e.giftStyle),
							l = a()(F.customGiftEmbedWrapper, {
								[F.legacySeasonalGiftEmbedWrapper]: i,
								[F.giftEmbedWrapperHorizontal]: n >= m.aL
							}),
							o = a()({
								[F.legacySeasonalGiftEmbedBox]: i,
								[F.legacySeasonalGiftEmbedBoxHorizontal]: i && n >= m.aL,
								[F.customGiftEmbedBox]: !i,
								[F.customGiftEmbedBoxHorizontal]: !i && n >= m.aL
							});
						return (0, r.jsxs)("div", {
							className: l,
							children: [!t && M.eZ.includes(e.giftStyle) && (0, r.jsx)(C.Z, {
								className: F.snow,
								wind: 5
							}), i && (0, r.jsx)(P.Z, {
								className: F.headerIcon
							}), null != e.giftStyle && (0, r.jsx)(x.Z, {
								defaultAnimationState: e.redeemed ? E.SR.LOOP : E.SR.IDLE,
								giftStyle: e.giftStyle,
								className: o
							})]
						})
					})
				}
			}
			let K = (0, _.Z)((0, f.Z)(W)),
				Y = c.ZP.connectStores([j.Z, N.Z, S.default, I.Z, T.Z, O.default, h.Z], e => {
					let {
						code: t,
						author: n,
						currentUser: r
					} = e, i = j.Z.get(t), l = null != i ? N.Z.get(i.skuId) : null, a = null != i && null != i.userId ? S.default.getUser(i.userId) : null, o = h.Z.useReducedMotion;
					return {
						sku: l,
						giftCode: i,
						gifter: a,
						currentUser: r,
						subscriptionPlan: null != i && null != i.subscriptionPlanId ? (0, R.oE)(i.subscriptionPlanId) : null,
						isSelfGift: null != i ? O.default.getId() === i.userId : O.default.getId() === n.id,
						resolved: j.Z.getIsResolved(t),
						libraryApplication: null != l && (null == i ? void 0 : i.entitlementBranches) != null ? w.z2(i.entitlementBranches, l, I.Z) : null,
						useReducedMotion: o
					}
				})(K)
		},
		54936: function(e, t, n) {
			n.d(t, {
				n: () => _
			}), n(415506);
			var r = n(255367);
			n(73800);
			var i = n(120356),
				l = n.n(i),
				a = n(481060),
				o = n(910111),
				s = n(732559),
				c = n(723851),
				u = n(981631),
				d = n(388032),
				p = n(516417);
			let m = {
				[u.TaA.WINDOWS]: {
					icon: c.Z,
					getLabel: () => d.intl.string(d.t["0/xHFB"])
				},
				[u.TaA.MACOS]: {
					icon: s.Z,
					getLabel: () => d.intl.string(d.t.E4u4n5)
				},
				[u.TaA.LINUX]: {
					icon: o.Z,
					getLabel: () => d.intl.string(d.t.tcawo6)
				}
			};

			function f(e) {
				let {
					operatingSystem: t,
					className: n
				} = e, i = m[t];
				if (null == i) throw Error("Unexpected operating system: ".concat(t));
				let l = i.icon;
				return (0, r.jsx)(a.ua7, {
					text: i.getLabel(),
					children: e => {
						var t, i;
						return (0, r.jsx)(l, (t = function(e) {
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
						}({}, e), i = i = {
							className: n
						}, Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(i)) : (function(e, t) {
							var n = Object.keys(e);
							if (Object.getOwnPropertySymbols) {
								var r = Object.getOwnPropertySymbols(e);
								n.push.apply(n, r)
							}
							return n
						})(Object(i)).forEach(function(e) {
							Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(i, e))
						}), t))
					}
				})
			}
			let _ = e => {
				let {
					systems: t,
					className: n,
					iconClassName: i
				} = e;
				return (0, r.jsx)("div", {
					className: l()(p.OSSection, n),
					children: t.map(e => (0, r.jsx)(f, {
						operatingSystem: e,
						className: l()(p.purchaseUnitOperatingSystem, i)
					}, e))
				})
			}
		},
		626799: function(e, t, n) {
			n.d(t, {
				$: () => w,
				Z: () => A
			}), n(388685), n(415506);
			var r, i = n(255367),
				l = n(73800),
				a = n(688642),
				o = n(442837),
				s = n(755721),
				c = n(558381),
				u = n(410575),
				d = n(498179),
				p = n(86357),
				m = n(914602),
				f = n(568836),
				_ = n(730749),
				h = n(112724),
				g = n(812206),
				b = n(283595),
				E = n(558314),
				y = n(55563),
				x = n(551428),
				C = n(73346),
				v = n(981631),
				O = n(388032),
				j = n(228016);

			function I(e, t, n) {
				return t in e ? Object.defineProperty(e, t, {
					value: n,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : e[t] = n, e
			}
			class S extends(r = l.Component) {
				get analyticsLocation() {
					var e, t;
					let {
						analyticsContext: {
							location: n
						},
						analyticsSection: r
					} = this.props;
					return e = function(e) {
						for (var t = 1; t < arguments.length; t++) {
							var n = null != arguments[t] ? arguments[t] : {},
								r = Object.keys(n);
							"function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
								return Object.getOwnPropertyDescriptor(n, e).enumerable
							}))), r.forEach(function(t) {
								I(e, t, n[t])
							})
						}
						return e
					}({}, n), t = t = {
						section: null != r ? r : v.jXE.APPLICATION_EMBED,
						object: v.qAy.CARD
					}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : (function(e, t) {
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
				componentDidMount() {
					let {
						sku: e,
						skuId: t,
						storeListing: n
					} = this.props;
					(null == e || null == n) && (0, c.km)(t)
				}
				renderViewInStoreButton() {
					return (0, i.jsx)(s.zx.Link, {
						to: this.getStoreListingLocation(),
						className: j.actionButton,
						color: s.zx.Colors.GREEN,
						size: s.zx.Sizes.SMALL,
						children: O.intl.string(O.t["W+NB9/"])
					})
				}
				render() {
					let {
						sku: e,
						storeListing: t,
						width: n,
						fetchFailed: r,
						renderFallback: l
					} = this.props, o = n > f.aL;
					return null == e || null == t ? r ? l() : (0, i.jsx)(f.OR, {
						isHorizontal: o
					}) : e.productLine === v.POd.COLLECTIBLES ? (0, i.jsx)(u.Z, {
						section: v.jXE.APPLICATION_EMBED,
						children: this.renderApplicationTile(e, t)
					}) : (0, i.jsx)(u.Z, {
						section: v.jXE.APPLICATION_EMBED,
						children: (0, i.jsx)(a.rU, {
							onClick: this.handleLinkClick,
							to: this.getStoreListingLocation(),
							onMouseEnter: this.handleMouseEnter,
							onMouseLeave: this.handleMouseLeave,
							children: this.renderApplicationTile(e, t)
						})
					})
				}
				constructor(...e) {
					super(...e), I(this, "state", {
						playing: !1,
						muted: !0
					}), I(this, "handleToggleMute", () => {
						this.setState({
							muted: !this.state.muted
						})
					}), I(this, "handleMouseEnter", () => {
						this.setState({
							playing: !0
						})
					}), I(this, "handleMouseLeave", () => {
						this.setState({
							playing: !1
						})
					}), I(this, "getStoreListingLocation", () => {
						let {
							sku: e
						} = this.props;
						if (null == e) throw Error("Should not be link to ApplicationStoreListing without SKU");
						return (0, C.ZI)(e.id, {
							slug: e.slug,
							analyticsSource: this.analyticsLocation
						})
					}), I(this, "handleActionButtonClick", e => e.preventDefault()), I(this, "handleBuyButtonClick", e => e.preventDefault()), I(this, "handleLinkClick", e => {
						let {
							onEmbedClick: t
						} = this.props;
						null != t && t(e)
					}), I(this, "renderApplicationTile", (e, t) => {
						let {
							inLibrary: n,
							width: r,
							renderCustomTitle: l,
							renderCustomTagline: a,
							renderCustomMedia: o
						} = this.props, {
							playing: s,
							muted: c
						} = this.state, u = r > f.aL;
						return (0, i.jsx)(m.Z, {
							sku: e,
							storeListing: t,
							playing: s,
							muted: c,
							inLibrary: n,
							onToggleMute: this.handleToggleMute,
							renderCustomActions: () => this.renderActions(e),
							renderCustomTitle: l,
							renderCustomTagline: a,
							renderCustomMedia: o,
							isHorizontal: u,
							isEmbed: !0
						})
					}), I(this, "renderActions", e => {
						let {
							inLibrary: t,
							application: n,
							skuId: r,
							libraryApplication: l,
							renderCustomActions: a
						} = this.props;
						if (null != a) return (0, i.jsx)("div", {
							className: j.tileActions,
							children: a()
						});
						if (null == n) return null;
						let o = null != n && n.primarySkuId === r,
							c = null != l && l.hasFlag(v.eHb.HIDDEN);
						return (0, i.jsxs)("div", {
							className: j.tileActions,
							children: [!o || c ? this.renderViewInStoreButton() : (0, i.jsx)(d.Z, {
								application: n,
								customDisabledColor: s.zx.Colors.PRIMARY,
								size: s.zx.Sizes.SMALL,
								className: j.actionButton,
								source: v.Sbl.MESSAGE_EMBED,
								onClick: this.handleActionButtonClick
							}), t && !c || e.premium ? null : (0, i.jsx)(p.Z, {
								type: p.Z.Types.EMBED,
								sku: e,
								inLibrary: !1
							})]
						})
					})
				}
			}
			I(S, "defaultProps", {
				renderFallback: v.dG4
			});
			let T = [y.Z, E.Z, b.Z, x.Z];

			function N(e) {
				let {
					skuId: t
				} = e, n = y.Z.get(t), r = null != n ? g.Z.getApplication(n.applicationId) : null;
				return {
					sku: n,
					application: r,
					fetchFailed: y.Z.didFetchingSkuFail(t),
					inLibrary: null != n && b.Z.hasApplication(n.applicationId, n.applicationId, !0),
					storeListing: null != n ? x.Z.getForSKU(n.id) : null,
					libraryApplication: null != n ? b.Z.getLibraryApplication(n.applicationId, n.applicationId, !0) : null
				}
			}
			let P = (0, h.Z)((0, _.Z)(S)),
				A = o.ZP.connectStores(T, N)(P),
				w = (0, _.Z)(o.ZP.connectStores(T, N)(S))
		},
		143740: function(e, t, n) {
			n.d(t, {
				Z: () => l
			});
			var r = n(255367);
			n(73800);
			var i = n(481060);

			function l(e, t) {
				(0, i.ZDy)(async () => {
					let {
						default: i
					} = await n.e("6310").then(n.bind(n, 706923));
					return n => (0, r.jsx)(i, function(e) {
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
						channelId: e,
						messageId: t
					}, n))
				})
			}
		},
		935369: function(e, t, n) {
			n.d(t, {
				Z: () => a
			}), n(388685);
			var r = n(73800),
				i = n(479531),
				l = n(388032);

			function a(e) {
				let [t, n] = r.useState(!1), [a, o] = r.useState(null);
				return [r.useCallback(async function() {
					for (var t = arguments.length, r = Array(t), a = 0; a < t; a++) r[a] = arguments[a];
					try {
						return o(null), n(!0), await e(...r)
					} catch (e) {
						e.message !== l.intl.string(l.t.N2yb9f) && o(e instanceof i.Z ? e : new i.Z(e))
					} finally {
						n(!1)
					}
				}, [e]), {
					loading: t,
					error: a
				}]
			}
		},
		838085: function(e, t, n) {
			n.d(t, {
				Z: () => l
			}), n(388685);
			var r = n(73800),
				i = n(393238);

			function l() {
				let {
					ref: e,
					width: t
				} = (0, i.ZP)(), [n, l] = r.useState();
				return r.useEffect(() => {
					null == n && null != t && l(t)
				}, [n, t]), [e, n]
			}
		},
		475468: function(e, t, n) {
			n.d(t, {
				K: () => s,
				z: () => c
			});
			var r = n(481060),
				i = n(475179),
				l = n(925549),
				a = n(905423),
				o = n(981631);

			function s(e, t) {
				let n = !(arguments.length > 2) || void 0 === arguments[2] || arguments[2],
					s = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
				(0, r.$sL)() || (n && l.Z.channelListScrollTo(e, t), s && null != t && i.Z.updateChatOpen(t, !0), a.Z.getState().updatePath(o.Z5c.CHANNEL(e, t)))
			}

			function c(e) {
				(0, r.$sL)() || a.Z.getState().updatePath(e)
			}
		},
		133340: function(e, t, n) {
			n.d(t, {
				t: () => l
			});
			var r = n(818083),
				i = n(987338);
			let l = (0, r.B)({
				kind: "user",
				id: "2025-07_cloud_play_cta",
				commonTriggerPoint: i.$P.CONNECTION_OPEN,
				label: "Cloud Play CTA Experiment",
				defaultConfig: {
					enabled: !1
				},
				treatments: [{
					id: 1,
					label: "Enable Cloud Play CTA",
					config: {
						enabled: !0
					}
				}]
			})
		},
		365415: function(e, t, n) {
			n.d(t, {
				h: () => o
			});
			var r = n(442837),
				i = n(703047),
				l = n(649256),
				a = n(981631);
			let o = (0, r.Kb)(i.Z, {
				queryId: (e, t) => a.McO.CUSTOM_ACTIVITY_LINK(e, t),
				get: (e, t) => null == e || null == t ? null : i.Z.getOne(e, t),
				load: (e, t, n) => (0, l.UD)(t, n),
				useStateHook: r.e7
			})
		},
		758371: function(e, t, n) {
			n.d(t, {
				$v: () => o,
				dQ: () => a,
				wR: () => s,
				yy: () => c
			});
			var r = n(594174),
				i = n(981631),
				l = n(388032);

			function a(e, t) {
				switch (t) {
					case i.mFx.LISTEN:
						return l.intl.formatToPlainString(l.t["/8czHx"], {
							name: e
						});
					case i.mFx.WATCH:
						return l.intl.formatToPlainString(l.t.BBJXVl, {
							name: e
						});
					case i.mFx.JOIN:
						return l.intl.string(l.t.pkq6Vl);
					case i.mFx.JOIN_REQUEST:
					default:
						return l.intl.string(l.t.Ckxb6u)
				}
			}

			function o(e, t, n, i, a) {
				if (e.author.id === i) {
					if (n.isPrivate()) {
						let e = r.default.getUser(n.getRecipientId());
						if (null != e) return a ? l.intl.formatToPlainString(l.t.JddpNz, {
							username: e.globalName,
							appName: t.name
						}) : l.intl.formatToPlainString(l.t.gYVkSU, {
							username: e.globalName,
							appName: t.name
						})
					}
					return a ? l.intl.formatToPlainString(l.t["2N1kNT"], {
						appName: t.name
					}) : l.intl.formatToPlainString(l.t.IA6uDQ, {
						appName: t.name
					})
				}
				return a ? l.intl.formatToPlainString(l.t.XE8axM, {
					username: e.author.globalName,
					appName: t.name
				}) : l.intl.formatToPlainString(l.t.hgcjOj, {
					username: e.author.globalName,
					appName: t.name
				})
			}

			function s(e, t, n, r) {
				var a;
				switch (null == (a = e.activity) ? void 0 : a.type) {
					case i.mFx.LISTEN:
					case i.mFx.WATCH:
					case i.mFx.JOIN:
						return l.intl.string(l.t.x1UXGR);
					case i.mFx.JOIN_REQUEST:
					default:
						return o(e, t, n, r, !0)
				}
			}

			function c(e) {
				let t, {
					activityActionType: n,
					maxPartySize: r,
					partySize: a
				} = e;
				return n === i.mFx.LISTEN ? r > 0 ? l.intl.formatToPlainString(l.t.Zogooq, {
					partySize: a,
					maxPartySize: r
				}) : l.intl.formatToPlainString(l.t.UGei0t, {
					partySize: a
				}) : r > 0 ? l.intl.formatToPlainString(l.t.gLu7NT, {
					partySize: a,
					maxPartySize: r
				}) : l.intl.formatToPlainString(l.t["65JnWF"], {
					partySize: a
				})
			}
		},
		276852: function(e, t, n) {
			n.d(t, {
				Z: () => l
			});
			var r = n(81063),
				i = n(701488);

			function l(e, t) {
				return null == e || null == e.assets || null == e.assets.large_image ? null : (0, r.xF)(t, e.assets.large_image, [i.cc, i.cc])
			}
		},
		984211: function(e, t, n) {
			function r(e) {
				if (null == e || null == e.party || null == e.party.size || e.party.size.length < 2) return {
					partySize: -1,
					maxPartySize: -1
				};
				let [t, n] = e.party.size;
				return {
					partySize: t,
					maxPartySize: n
				}
			}
			n.d(t, {
				_: () => r
			}), n(388685)
		},
		994339: function(e, t, n) {
			n.d(t, {
				Z: () => a
			});
			var r = n(70956),
				i = n(709054);
			let l = 2 * r.Z.Millis.HOUR;

			function a(e, t, n) {
				if (null == e) return !1;
				let r = null != t.activity ? t.activity.party_id : null,
					a = null != r && (null == e.party || e.party.id !== r),
					o = i.default.extractTimestamp(t.id) + l < Date.now(),
					s = null != e.application_id && e.application_id !== n;
				return !a && !o && !s
			}
		},
		561766: function(e, t, n) {
			n.d(t, {
				Cx: () => s,
				Ol: () => a
			}), n(388685), n(539854);
			var r, i = n(73800),
				l = n(981631),
				a = ((r = {}).DESKTOP = "desktop", r.MOBILE = "mobile", r.ANDROID = "android", r.IOS = "ios", r.PLAYSTATION = "playstation", r.XBOX = "xbox", r);
			let o = [];

			function s(e) {
				let {
					platforms: t,
					currentPlatform: n
				} = e;
				return i.useMemo(() => (function(e) {
					let {
						platforms: t,
						currentPlatform: n
					} = e, r = new Set(t), i = [];
					return null == t || 0 === t.length || null != n && r.has(n) ? o : (r.has(l.M7m.ANDROID) && r.has(l.M7m.IOS) ? i.push("mobile") : r.has(l.M7m.ANDROID) ? i.push("android") : r.has(l.M7m.IOS) && i.push("ios"), (r.has(l.M7m.PS4) || r.has(l.M7m.PS5)) && i.push("playstation"), r.has(l.M7m.XBOX) && i.push("xbox"), r.has(l.M7m.DESKTOP) && i.push("desktop"), i)
				})({
					platforms: t,
					currentPlatform: n
				}), [n, t])
			}
		},
		624367: function(e, t, n) {
			n.d(t, {
				Z: () => d
			}), n(388685);
			var r = n(255367);
			n(73800);
			var i = n(100527),
				l = n(906732),
				a = n(783097),
				o = n(230171),
				s = n(835473),
				c = n(365415),
				u = n(50523);

			function d(e) {
				let {
					applicationId: t,
					customId: n,
					referrerId: d,
					linkId: p
				} = e, {
					analyticsLocations: m
				} = (0, l.ZP)(i.Z.ACTIVITY_BOOKMARK), [f] = (0, s.Z)([t]), _ = null != f && (0, a.ye)(f), {
					data: h,
					error: g
				} = (0, c.h)(null == f ? void 0 : f.id, p);
				return null == f || !1 === _ ? null : null != p && null == g && null != h ? (0, r.jsx)(l.Gt, {
					value: m,
					children: (0, r.jsx)(u.b, {
						application: f,
						customId: n,
						customLink: h,
						referrerId: d
					})
				}) : (0, r.jsx)(l.Gt, {
					value: m,
					children: (0, r.jsx)(o.O, {
						app: f,
						linkType: o.U.ACTIVITY,
						activityCustomId: n,
						activityReferrerId: d
					})
				})
			}
		},
		917621: function(e, t, n) {
			n.d(t, {
				Z: () => P
			}), n(388685), n(539854);
			var r = n(255367),
				i = n(73800),
				l = n(120356),
				a = n.n(l),
				o = n(755721),
				s = n(481060),
				c = n(914498),
				u = n(600164),
				d = n(424678),
				p = n(670188),
				m = n(237583),
				f = n(598077),
				_ = n(63063),
				h = n(153066),
				g = n(51144),
				b = n(620662),
				E = n(994339),
				y = n(503438),
				x = n(981631),
				C = n(616922),
				v = n(388032),
				O = n(638128);

			function j(e, t, n) {
				return t in e ? Object.defineProperty(e, t, {
					value: n,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : e[t] = n, e
			}

			function I(e) {
				for (var t = 1; t < arguments.length; t++) {
					var n = null != arguments[t] ? arguments[t] : {},
						r = Object.keys(n);
					"function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
						return Object.getOwnPropertyDescriptor(n, e).enumerable
					}))), r.forEach(function(t) {
						j(e, t, n[t])
					})
				}
				return e
			}

			function S(e, t) {
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

			function T(e) {
				let {
					member: t,
					className: n,
					guildId: l,
					channelId: o,
					messageId: c,
					analyticsLocations: u
				} = e, d = i.useRef(null);
				return t.unknownUser ? (0, r.jsx)("div", {
					className: O.partyMember,
					children: (0, r.jsx)(s.qEK, {
						src: t.user.getAvatarURL(l, (0, s.pxk)(s.EFr.SIZE_24)),
						size: s.EFr.SIZE_24,
						className: a()(O.partyAvatar, n),
						"aria-label": t.user.username
					})
				}) : (0, r.jsx)(p.Z, {
					targetElementRef: d,
					position: "left",
					user: t.user,
					guildId: l,
					channelId: o,
					messageId: c,
					newAnalyticsLocations: u,
					children: e => {
						var i;
						return (0, r.jsx)(s.ua7, {
							text: null != (i = t.nick) ? i : g.ZP.getName(t.user),
							children: i => (0, r.jsx)(s.P3F, S(I({
								innerRef: d,
								className: O.partyMemberKnown
							}, i, e), {
								children: (0, r.jsx)(s.qEK, {
									src: t.user.getAvatarURL(l, (0, s.pxk)(s.EFr.SIZE_24)),
									size: s.EFr.SIZE_24,
									className: a()(O.partyAvatar, n),
									"aria-label": t.user.username
								})
							}))
						})
					}
				})
			}
			class N extends i.PureComponent {
				isDeadInvite() {
					let {
						isPreview: e,
						message: t,
						activity: n,
						applicationId: r
					} = this.props;
					return !e && !(null != t && (0, E.Z)(n, t, r))
				}
				getPartySize() {
					let {
						activity: e
					} = this.props;
					return null == e || null == e.party || null == e.party.size || e.party.size.length < 2 ? [-1, -1] : e.party.size
				}
				getActionableMode() {
					return [x.mFx.LISTEN, x.mFx].includes(this.props.activityActionType) || this.props.isPreview || this.canJoin() ? "Actionable" : "NotActionable"
				}
				isInParty() {
					let {
						activity: e,
						myPartyId: t,
						isPreview: n
					} = this.props;
					return !n && null != e && null != e.party && t === e.party.id
				}
				isPartyFull() {
					let [e, t] = this.getPartySize();
					return e > -1 && t > 0 && e >= t
				}
				hasPartySize() {
					let [e, t] = this.getPartySize();
					return e > -1 && t > -1
				}
				isActionType(e) {
					return this.props.activityActionType === e
				}
				isEmbeddedActivityApplication() {
					return (0, b.Z)(this.props.activity, x.xjy.EMBEDDED)
				}
				canJoin() {
					let {
						activity: e,
						isPreview: t,
						isGameLaunchable: n,
						isInBrowser: r,
						isSender: i
					} = this.props;
					return !!t || !(i || this.isDeadInvite() || !this.isActionType(x.mFx.JOIN) || !(0, b.Z)(e, x.xjy.JOIN) || !this.hasPartySize() || this.isPartyFull() || this.isInParty()) && (!!this.isEmbeddedActivityApplication() || !r && !!n)
				}
				canSendInvite() {
					let {
						activity: e,
						isPreview: t
					} = this.props;
					return !!t || !(this.isDeadInvite() || !this.isActionType(x.mFx.JOIN_REQUEST) || !(0, b.Z)(e, x.xjy.JOIN) || !this.hasPartySize() || this.isPartyFull())
				}
				canSync() {
					let {
						activity: e,
						isPreview: t,
						isSyncable: n,
						isInBrowser: r
					} = this.props;
					return !!t || !(!this.isActionType(x.mFx.LISTEN) && !this.isActionType(x.mFx.WATCH) || this.isDeadInvite() || !(0, b.Z)(e, x.xjy.SYNC) || r || !n || this.isInParty())
				}
				getHelpdeskArticleURL() {
					let {
						partyId: e
					} = this.props;
					return null != e && (0, C.Ps)(e) ? x.BhN.SPOTIFY_CONNECTION : x.BhN.RICH_PRESENCE_INTRODUCTION
				}
				renderHeaderText() {
					let {
						activityActionType: e,
						name: t
					} = this.props;
					switch (e) {
						case x.mFx.LISTEN:
							return v.intl.formatToPlainString(v.t["/8czHx"], {
								name: t
							});
						case x.mFx.WATCH:
							return v.intl.formatToPlainString(v.t.BBJXVl, {
								name: t
							});
						case x.mFx.JOIN:
							return v.intl.string(v.t["hC/Ze3"]);
						case x.mFx.JOIN_REQUEST:
						default:
							return v.intl.string(v.t.Ckxb6u)
					}
				}
				renderPartyStatus() {
					let {
						activityActionType: e,
						isGameLaunchable: t,
						isSyncable: n,
						isPreview: i,
						isInBrowser: l,
						name: a,
						activity: o
					} = this.props, [c, u] = this.getPartySize();
					if (this.isDeadInvite()) switch (e) {
						case x.mFx.LISTEN:
							return v.intl.string(v.t["84qx9v"]);
						case x.mFx.WATCH:
							return v.intl.string(v.t.B9kbnZ);
						case x.mFx.JOIN:
						case x.mFx.JOIN_REQUEST:
						default:
							return v.intl.string(v.t["2Gbof3"])
					}
					return !l || i || this.isEmbeddedActivityApplication() || e !== x.mFx.JOIN ? this.isActionType(x.mFx.LISTEN) || this.isActionType(x.mFx.WATCH) ? null != o && null != o.details && null != o.state && (0, y.Z)(o) ? [(0, r.jsx)("div", {
						className: O.details,
						children: (0, r.jsx)(s.eee, {
							className: O.textLink,
							onClick: this.handleOpenSpotifyTrack,
							children: o.details
						})
					}, "details"), (0, r.jsx)("div", {
						className: O.state,
						children: v.intl.format(v.t.uU9le3, {
							artists: o.state,
							artistsHook: (e, t) => null != o.state ? (0, r.jsx)(d.Z, {
								artists: o.state,
								linkClassName: O.textLink,
								canOpen: null != o.sync_id,
								onOpenSpotifyArtist: this.handleOpenSpotifyArtist
							}, t) : null
						})
					}, "state")] : this.isActionType(x.mFx.LISTEN) ? v.intl.string(v.t.gXYoq6) : v.intl.string(v.t.eyKDl5) : this.isActionType(x.mFx.JOIN_REQUEST) ? this.isPartyFull() ? v.intl.string(v.t.jfrMtr) : this.hasPartySize() && 0 !== u ? v.intl.formatToPlainString(v.t.XWapnZ, {
						number: u - c
					}) : null : this.isInParty() ? v.intl.string(v.t.KC26NT) : t || n || i || this.isEmbeddedActivityApplication() ? this.isPartyFull() ? v.intl.string(v.t.jfrMtr) : this.hasPartySize() && 0 !== u ? v.intl.formatToPlainString(v.t.XWapnZ, {
						number: u - c
					}) : null : v.intl.formatToPlainString(v.t.SqJBnJ, {
						name: a
					}) : v.intl.string(v.t.c3EWuL)
				}
				renderActionButton() {
					let {
						isInBrowser: e,
						isPreview: t,
						isGameLaunchable: n,
						isSender: i,
						partyId: l,
						activity: a,
						message: s,
						renderSpotifyJoinButton: c,
						renderCustomButton: u
					} = this.props, d = {
						className: O.actionButton,
						size: o.zx.Sizes.SMALL
					}, p = null != u ? u(d) : null;
					return null != p ? p : !this.isDeadInvite() && this.isActionType(x.mFx.LISTEN) && null != l && null != s && null != a && (0, C.Ps)(l) ? c(S(I({}, d), {
						activity: a,
						user: s.author
					})) : (0, r.jsx)(o.zx, S(I({}, d, t || !e || this.isDeadInvite() || this.isEmbeddedActivityApplication() ? this.canJoin() ? {
						children: v.intl.string(v.t.VJlc0d),
						onClick: this.handleJoin
					} : this.canSync() ? {
						children: v.intl.string(v.t.VJlc0d),
						onClick: this.handleSync
					} : this.canSendInvite() ? {
						children: v.intl.string(v.t["hC/Ze3"]),
						onClick: this.handleInvite,
						disabled: i
					} : this.isInParty() ? {
						children: v.intl.string(v.t.KC26NT),
						disabled: !0
					} : {
						children: this.isActionType(x.mFx.JOIN_REQUEST) ? v.intl.string(v.t["hC/Ze3"]) : v.intl.string(v.t.VJlc0d),
						disabled: !0
					} : {
						children: v.intl.string(v.t.gUZonZ),
						onClick: this.handleDownloadApp
					}), {
						color: (e || n) && !this.isDeadInvite() ? o.zx.Colors.GREEN : o.zx.Colors.PRIMARY,
						submitting: this.props.isLoading
					}))
				}
				renderMoreUsers(e, t, n) {
					return (0, r.jsx)("div", {
						className: O.moreUsers,
						children: e
					}, n)
				}
				renderParty() {
					let {
						partyId: e,
						partyMembers: t,
						hideParty: n,
						guildId: i
					} = this.props, [l, a] = this.getPartySize(), o = this.hasPartySize() || this.isActionType(x.mFx.LISTEN) || this.isActionType(x.mFx.WATCH);
					if (null == e || this.isDeadInvite() || !o || n) return null;
					let s = [...t],
						c = Math.min(l, 6);
					for (; s.length < c;) s.push({
						user: new f.Z({
							discriminator: "0005"
						}),
						unknownUser: !0
					});
					let u = Math.min(a, 106);
					for (; s.length < u;) s.push(null);
					return (0, r.jsx)(m.Z, {
						guildId: i,
						className: O.partyMembers,
						users: s,
						max: a > 0 ? Math.min(a, 6) : 6,
						renderUser: this.renderUser,
						renderMoreUsers: this.renderMoreUsers
					})
				}
				render() {
					let {
						className: e,
						coverImage: t,
						name: n,
						activity: i
					} = this.props, l = this.isActionType(x.mFx.JOIN) || this.isActionType(x.mFx.JOIN_REQUEST), o = this.isDeadInvite(), c = null;
					null == t || null == i || l ? !l && o && (c = (0, r.jsx)("div", {
						className: O.artworkSpotifySessionEnded
					})) : c = (0, r.jsx)("img", {
						alt: "",
						src: t,
						className: (0, h.l)(O, "artwork", this.getActionableMode())
					});
					let d = null != i && null != c && null != i.assets && null != i.assets.large_text && "" !== i.assets.large_text && !o && (0, y.Z)(i) ? i.assets.large_text : null,
						p = null != d ? (0, r.jsx)(s.ua7, {
							text: d,
							children: e => {
								let {
									onMouseEnter: t,
									onMouseLeave: n
								} = e;
								return (0, r.jsx)(s.eee, {
									onClick: this.handleOpenSpotifyAlbum,
									onMouseEnter: t,
									onMouseLeave: n,
									children: c
								})
							}
						}) : c;
					return (0, r.jsxs)("div", {
						className: a()(O.invite, e),
						children: [(0, r.jsx)("div", {
							className: O.coverImageWrapper,
							children: (0, r.jsx)("div", {
								className: a()((0, h.l)(O, "coverImage", this.getActionableMode()), null != c ? O.blurred : null),
								style: {
									backgroundImage: null != t ? "url('".concat(t, "')") : void 0
								}
							})
						}), (0, r.jsxs)(u.Z, {
							className: O.fullHeight,
							children: [(0, r.jsxs)(u.Z, {
								direction: u.Z.Direction.VERTICAL,
								children: [(0, r.jsx)(s.Text, {
									className: O.header,
									variant: "text-sm/medium",
									color: "text-muted",
									children: this.renderHeaderText()
								}), (0, r.jsx)(u.Z.Child, {
									className: O.partyStatus,
									children: this.renderPartyStatus()
								}), (0, r.jsxs)(u.Z, {
									align: u.Z.Align.END,
									children: [(0, r.jsxs)(u.Z, {
										align: u.Z.Align.CENTER,
										className: O.actionAndParty,
										basis: 0,
										style: {
											marginRight: 0
										},
										children: [this.renderActionButton(), this.renderParty()]
									}), null == c && l ? (0, r.jsx)("div", {
										className: O.name,
										children: n
									}) : null]
								})]
							}), p]
						}), (0, r.jsx)(s.eee, {
							href: _.Z.getArticleURL(this.getHelpdeskArticleURL()),
							className: O.helpIcon,
							children: (0, r.jsx)(s.idN, {
								color: "currentColor",
								size: "xxs"
							})
						})]
					})
				}
				constructor(...e) {
					super(...e), j(this, "handleJoin", () => {
						let {
							onJoin: e,
							applicationId: t
						} = this.props;
						null != t && (0, c.KX)(t, c.Un.LEGACY_RICH_PRESENCE_INVITE, c.j_.PLAY), null == e || e()
					}), j(this, "handleInvite", () => {
						let {
							onInvite: e,
							applicationId: t
						} = this.props;
						null != t && (0, c.KX)(t, c.Un.LEGACY_RICH_PRESENCE_INVITE, c.j_.INVITE), null == e || e()
					}), j(this, "handleSync", () => {
						let {
							onSync: e,
							applicationId: t
						} = this.props;
						null != t && (0, c.KX)(t, c.Un.LEGACY_RICH_PRESENCE_INVITE, c.j_.SYNC), null == e || e()
					}), j(this, "handleDownloadApp", () => {
						let {
							onDownloadApp: e
						} = this.props;
						null == e || e()
					}), j(this, "handleOpenSpotifyTrack", () => {
						let {
							activity: e,
							onOpenSpotifyTrack: t
						} = this.props;
						null != e && (null == t || t(e))
					}), j(this, "handleOpenSpotifyArtist", e => {
						let {
							activity: t,
							onOpenSpotifyArtist: n,
							message: r
						} = this.props;
						null != t && null != r && (null == n || n(t, r.author.id, e))
					}), j(this, "handleOpenSpotifyAlbum", () => {
						let {
							activity: e,
							onOpenSpotifyAlbum: t,
							message: n
						} = this.props;
						null != e && null != n && (null == t || t(e, n.author.id))
					}), j(this, "renderUser", (e, t, n) => {
						let {
							guildId: i,
							channelId: l,
							message: o,
							analyticsLocations: s
						} = this.props;
						return null != e ? (0, r.jsx)(T, {
							member: e,
							className: t,
							guildId: i,
							channelId: l,
							messageId: null == o ? void 0 : o.id,
							analyticsLocations: s
						}, n) : (0, r.jsx)("div", {
							className: a()(O.partyMemberEmpty, t)
						}, n)
					})
				}
			}
			let P = N
		},
		50523: function(e, t, n) {
			n.d(t, {
				b: () => x
			}), n(539854), n(953529);
			var r = n(255367),
				i = n(442837),
				l = n(100527),
				a = n(906732),
				o = n(915346),
				s = n(783097),
				c = n(812236),
				u = n(230171),
				d = n(758199),
				p = n(914498),
				m = n(515344),
				f = n(944486),
				_ = n(768581),
				h = n(566620),
				g = n(317381),
				b = n(574952),
				E = n(374065),
				y = n(388032);

			function x(e) {
				var t, n;
				let {
					application: x,
					customId: C,
					customLink: v,
					embedUrl: O,
					referrerId: j
				} = e, I = null == x || null == (t = x.bot) ? void 0 : t.id, S = (0, c.ms)({
					context: {
						type: "contextless"
					},
					applicationId: x.id,
					botUserId: null == x || null == (n = x.bot) ? void 0 : n.id
				}), T = null != x && (0, s.ye)(x), N = null != I && T && S, {
					analyticsLocations: P
				} = (0, a.ZP)(l.Z.ACTIVITY_CUSTOM_LINK), A = (0, i.e7)([f.Z], () => f.Z.getChannelId()), w = (0, E.KF)(A), Z = (0, i.e7)([g.ZP], () => {
					if (null == A) return;
					let e = g.ZP.getEmbeddedActivitiesForChannel(A).filter(e => e.applicationId === x.id);
					return e.length > 0 ? e[0].compositeInstanceId : void 0
				}), R = (0, i.e7)([g.ZP], () => g.ZP.getCurrentEmbeddedActivity()), k = (0, b.Z)(), L = w === E.jy.CAN_LAUNCH, D = null != C ? C : v.customId, M = [];
				L && M.push({
					label: null == Z ? y.intl.string(y.t.RscU7O) : y.intl.string(y.t.VJlc0d),
					trackingArea: p.j_.PLAY,
					onClick() {
						(0, h.G6)({
							channelId: null != A ? A : void 0,
							applicationId: x.id,
							isStart: null == Z,
							embeddedActivitiesManager: k,
							customId: D,
							referrerId: j,
							analyticsLocations: P
						})
					},
					disabledReason: null != Z && (null == R ? void 0 : R.compositeInstanceId) === Z ? y.intl.string(y.t.wJNK8P) : void 0
				}), N && !L && M.push({
					label: y.intl.string(y.t.JeK1Wl),
					trackingArea: p.j_.PLAY,
					onClick() {
						(0, o.W)({
							appId: x.id,
							botId: I,
							analyticsLocations: P,
							customId: D,
							referrerId: j
						})
					}
				});
				let U = (0, m.G)(x);
				return (0, r.jsx)(d.W, {
					actions: M,
					onClickContent: U,
					embedUrl: O,
					header: x.name,
					iconSrc: _.ZP.getApplicationIconURL({
						id: x.id,
						icon: x.icon,
						bot: x.bot
					}),
					info: (0, r.jsx)("div", {
						children: v.description
					}),
					staticBannerSrc: v.getAssetURL(),
					title: v.title,
					trackingConfig: {
						id: x.id,
						linkType: u.U.CUSTOM_ACTIVITY_LINK,
						referrerId: j,
						activityCustomId: D
					}
				})
			}
		},
		627861: function(e, t, n) {
			n.d(t, {
				c: () => ep
			}), n(388685), n(539854), n(953529);
			var r = n(255367),
				i = n(73800),
				l = n(705512),
				a = n(267843),
				o = n(442837),
				s = n(481060),
				c = n(278323),
				u = n(224706),
				d = n(763472),
				p = n(915346),
				m = n(783097),
				f = n(728345),
				_ = n(758199),
				h = n(914498),
				g = n(172109),
				b = n(880251),
				E = n(515344),
				y = n(371991),
				x = n(561308),
				C = n(810568),
				v = n(567409),
				O = n(168524),
				j = n(592745),
				I = n(952164),
				S = n(829820),
				T = n(789407),
				N = n(314897),
				P = n(757266),
				A = n(831506),
				w = n(77498),
				Z = n(283595),
				R = n(293273),
				k = n(158776),
				L = n(885110),
				D = n(594174),
				M = n(417363),
				U = n(768581),
				F = n(823379),
				B = n(358085),
				G = n(804739),
				H = n(133340),
				V = n(758371),
				z = n(276852),
				W = n(984211),
				K = n(620662),
				Y = n(994339),
				X = n(275920),
				q = n(561766),
				Q = n(884338),
				J = n(404174),
				$ = n(981631),
				ee = n(616922),
				et = n(388032),
				en = n(581738);

			function er(e) {
				let {
					partyMembers: t,
					partySize: n,
					maxPartySize: i,
					guildId: l,
					activityActionType: a
				} = e, o = Math.max(n, t.length), c = (0, V.yy)({
					maxPartySize: i,
					partySize: o,
					activityActionType: a
				}), u = [...t];
				for (; u.length < n;) u.push(Q.ag);
				for (; u.length < i;) u.push(null);
				return (0, r.jsxs)("div", {
					className: en.partyStatusWrapper,
					children: [u.length > 0 && (0, r.jsx)(Q.ZP, {
						guildId: l,
						users: u,
						max: i > 0 ? Math.min(i, 8) : 8,
						size: Q.u8.SIZE_16,
						dimEmptyUsers: !0
					}), (0, r.jsx)(s.Text, {
						variant: "text-xs/medium",
						color: "none",
						children: c
					})]
				})
			}

			function ei(e) {
				var t;
				return (null == (t = e.activity) ? void 0 : t.type) === $.mFx.JOIN_REQUEST
			}

			function el(e) {
				let {
					partySize: t,
					maxPartySize: n
				} = e;
				return t > -1 && n > 0 && t >= n
			}

			function ea(e) {
				let {
					partySize: t,
					maxPartySize: n
				} = e;
				return t > -1 && n > -1
			}

			function eo(e, t) {
				var n, r;
				return (null == t || null == (n = t.party) ? void 0 : n.id) != null && (null == e || null == (r = e.party) ? void 0 : r.id) != null && e.party.id === t.party.id
			}

			function es(e) {
				var t, n, l, a, o;
				let {
					application: c,
					currentUserPresenceActivity: u,
					hideParty: d,
					message: p,
					onView: m,
					partyStatusElement: f,
					presenceActivity: g
				} = e, b = eo(u, g), E = (0, S.Lz)(g, p.author, "Invite Embed"), x = !(0, Y.Z)(g, p, c.id), C = i.useMemo(() => {
					let e = [];
					if (!b) {
						var t;
						e.push({
							label: null != (t = E.label) ? t : et.intl.string(et.t.VJlc0d),
							trackingArea: h.j_.SYNC,
							onClick: () => {
								E.onClick()
							},
							disabledReason: E.disabled ? E.tooltip : void 0
						})
					}
					return e
				}, [b, E]), v = i.useMemo(() => {
					if (null != g) return () => (0, I.aG)(g)
				}, [g]), O = (0, V.dQ)(c.name, null == (t = p.activity) ? void 0 : t.type);
				if (x) {
					let e = (0, r.jsx)(s.Text, {
						variant: "text-xs/medium",
						className: en.description,
						color: "none",
						lineClamp: 1,
						children: et.intl.string(et.t["84qx9v"])
					});
					return (0, r.jsx)(_.W, {
						header: O,
						title: c.name,
						iconSrc: T.r9.getWhiteIconURL(),
						info: e,
						actions: [],
						onClickContent: v,
						trackingConfig: {
							id: c.id,
							linkType: h.Un.RICH_PRESENCE_INVITE,
							onView: m
						}
					})
				} {
					let e = null != g && null != g.details && null != g.state ? et.intl.formatToPlainString(et.t.JCvHt7, {
							track: g.details,
							artist: g.state
						}) : c.name,
						t = null != (a = null == g || null == (n = g.timestamps) ? void 0 : n.start) ? a : null == g ? void 0 : g.created_at,
						i = null != t ? (0, r.jsxs)("div", {
							className: en.timestampContainer,
							children: [(0, r.jsx)(s.RZG, {
								size: "xxs",
								color: "currentColor"
							}), (0, r.jsx)(y.x3, {
								entry: {
									start: t,
									end: null == g || null == (l = g.timestamps) ? void 0 : l.end
								},
								textColor: "currentColor",
								textTabularNumbers: !1,
								textFontCode: !1
							})]
						}) : null,
						u = (0, r.jsxs)("div", {
							className: en.info,
							children: [(0, r.jsx)(s.Text, {
								variant: "text-xs/normal",
								className: en.tagline,
								color: "none",
								lineClamp: 1,
								children: i
							}), d ? null : f]
						});
					return (0, r.jsx)(_.W, {
						header: O,
						title: e,
						iconSrc: null != (o = (0, z.Z)(g, c.id)) ? o : void 0,
						info: u,
						actions: C,
						onClickContent: v,
						trackingConfig: {
							id: c.id,
							linkType: h.Un.RICH_PRESENCE_INVITE,
							onView: m
						}
					})
				}
			}

			function ec(e, t) {
				return {
					openGameProfileModal: (0, O.Z)({
						location: "Rich Presence Activity Invite Embed",
						applicationId: e,
						source: C.m1.Embed,
						trackEntryPointImpression: !0,
						sourceUserId: t
					}),
					isGameLaunchable: (0, o.e7)([Z.Z, j.Z, M.Z, P.Z], () => (0, G.t)({
						LibraryApplicationStore: Z.Z,
						LaunchableGameStore: j.Z,
						DispatchApplicationStore: M.Z,
						ConnectedAppsStore: P.Z,
						applicationId: null != e ? e : ""
					}), [e])
				}
			}

			function eu(e) {
				let {
					presenceActivity: t
				} = e, n = (0, q.Cx)({
					platforms: null == t ? void 0 : t.supported_platforms,
					currentPlatform: $.M7m.DESKTOP
				}), l = i.useMemo(() => n.map(e => {
					switch (e) {
						case q.Ol.MOBILE:
							return (0, r.jsx)(s.AtH, {
								size: "xxs",
								color: "currentColor"
							});
						case q.Ol.ANDROID:
							return (0, r.jsx)(J.j, {
								width: a.Z.xxs,
								height: a.Z.xxs,
								color: "currentColor"
							});
						case q.Ol.IOS:
							return (0, r.jsx)(s.gLQ, {
								size: "xxs",
								color: "currentColor"
							});
						case q.Ol.PLAYSTATION:
							return (0, r.jsx)(s.Tsp, {
								size: "xxs",
								color: "currentColor"
							});
						case q.Ol.XBOX:
							return (0, r.jsx)(s.Mko, {
								size: "xxs",
								color: "currentColor"
							});
						default:
							return null
					}
				}).filter(F.lm), [n]);
				return 0 === l.length ? null : (0, r.jsxs)("div", {
					className: en.footer,
					children: [(0, r.jsx)("div", {
						className: en.footerSupportedPlatformIconsContainer,
						children: l.map((e, t) => (0, r.jsx)("div", {
							className: en.footerSupportedPlatformIconContainer,
							children: e
						}, t))
					}), (0, r.jsx)(s.Text, {
						variant: "text-sm/medium",
						color: "currentColor",
						className: en.footerSupportedPlatformText,
						children: et.intl.string(et.t["4dGUPz"])
					})]
				})
			}

			function ed(e) {
				var t, n, a, g;
				let {
					analyticsLocations: C,
					application: O,
					channel: j,
					currentUserId: I,
					currentUserPresenceActivity: S,
					hideParty: T,
					message: N,
					onView: P,
					partyStatusElement: A,
					presenceActivity: Z
				} = e, R = (0, m.ye)(O), {
					bot: k
				} = O, L = U.ZP.getApplicationIconURL({
					id: O.id,
					icon: O.icon,
					bot: k
				}), {
					staticBannerSrc: D,
					videoBannerSrc: M,
					bannerAspectRatio: F
				} = (0, b.E)(O), {
					enabled: G
				} = H.t.useExperiment({
					location: "RichPresenceActivityInviteEmbed"
				}, {
					autoTrackExposure: !0
				}), z = !(0, Y.Z)(Z, N, O.id), q = ei(N), Q = (0, o.e7)([w.Z], () => w.Z.getGameByName(O.name), [O.name]), {
					openGameProfileModal: J,
					isGameLaunchable: ee
				} = ec(O.id, N.author.id), {
					openGameProfileModal: er,
					isGameLaunchable: es
				} = ec(null == Q ? void 0 : Q.id, N.author.id), ed = O.thirdPartySkus.find(e => {
					let {
						distributor: t
					} = e;
					return t === $.GQo.NVIDIA_GDN_APP
				}), ep = null == ed ? void 0 : ed.id, {
					data: em
				} = (0, f.IX)(ep), {
					bot: ef
				} = null != em ? em : {
					bot: null
				}, e_ = i.useMemo(() => G && null != ep && null != ef && null != em && (0, m.ye)(em) ? {
					label: "Play via Cloud",
					icon: (0, r.jsx)(s.v3n, {
						size: "xs",
						color: "currentColor"
					}),
					trackingArea: h.j_.CLOUD_PLAY,
					onClick: () => {
						(0, p.W)({
							appId: ep,
							botId: ef.id,
							analyticsLocations: C
						})
					}
				} : null, [C, G, em, ep, ef]), eh = function(e) {
					let {
						presenceActivity: t,
						currentUserPresenceActivity: n,
						currentUserId: r,
						message: i,
						application: l,
						isEmbeddedApplication: a,
						isGameLaunchable: o
					} = e;
					if (i.author.id === r || !(0, Y.Z)(t, i, l.id)) return !1;
					let s = (0, W._)(t);
					return !(!ea(s) || el(s) || eo(n, t) || ei(i)) && (!!a || !!B.isPlatformEmbedded && !!o)
				}({
					presenceActivity: Z,
					currentUserPresenceActivity: S,
					currentUserId: I,
					message: N,
					application: O,
					isEmbeddedApplication: R,
					isGameLaunchable: ee
				}), eg = !(null == Z || !(0, Y.Z)(Z, N, O.id) || !(0, K.Z)(Z, $.xjy.SYNC) || !B.isPlatformEmbedded || eo(S, Z)), eb = eo(S, Z), eE = function(e, t, n, r) {
					var i;
					if (t.author.id === r || !(0, Y.Z)(e, t, n.id) || (null == (i = t.activity) ? void 0 : i.type) !== $.mFx.JOIN_REQUEST || !(0, K.Z)(e, $.xjy.JOIN)) return !1;
					let l = (0, W._)(e);
					return !(!ea(l) || el(l))
				}(Z, N, O, I), ey = i.useMemo(() => eh ? {
					label: et.intl.string(et.t.VJlc0d),
					trackingArea: h.j_.JOIN,
					onClick: () => {
						var e;
						u.Z.join({
							userId: N.author.id,
							sessionId: Z.session_id,
							applicationId: Z.application_id,
							channelId: j.id,
							messageId: N.id,
							source: $.Sbl.MESSAGE_EMBED,
							analyticsLocations: C,
							embedded: (0, K.Z)(Z, $.xjy.EMBEDDED)
						}), (0, X.Z)({
							type: $.q5t.JOIN,
							source: $.Sbl.MESSAGE_EMBED,
							userId: N.author.id,
							guildId: j.guild_id,
							channelId: j.id,
							applicationId: Z.application_id,
							partyId: null == (e = Z.party) ? void 0 : e.id,
							messageId: N.id,
							analyticsLocations: C
						})
					}
				} : eg ? {
					label: et.intl.string(et.t.VJlc0d),
					trackingArea: h.j_.SYNC,
					onClick: () => {
						null != Z && d.Z_(Z, N.author.id)
					}
				} : eE ? {
					label: et.intl.string(et.t["hC/Ze3"]),
					trackingArea: h.j_.INVITE,
					onClick: () => {
						null != Z && c.Z.sendActivityInvite({
							type: $.mFx.JOIN,
							channelId: j.id,
							activity: Z,
							location: $.Sbl.MESSAGE_EMBED
						})
					},
					disabledReason: N.author.id === I ? et.intl.string(et.t.IBl8IC) : void 0
				} : eb ? {
					label: et.intl.string(et.t.KC26NT),
					trackingArea: h.j_.PLAY,
					onClick: () => {},
					disabledReason: et.intl.string(et.t.KC26NT)
				} : null != e_ ? e_ : void 0, [C, eh, eE, eg, j.id, j.guild_id, I, eb, N.author.id, N.id, Z, e_]), ex = i.useMemo(() => ee ? {
					label: et.intl.string(et.t.RscU7O),
					trackingArea: h.j_.PLAY,
					onClick: () => {
						u.Z.launch({
							applicationId: O.id
						})
					}
				} : es && (null == Q ? void 0 : Q.id) != null ? {
					label: et.intl.string(et.t.RscU7O),
					trackingArea: h.j_.PLAY,
					onClick: () => {
						u.Z.launch({
							applicationId: Q.id
						})
					}
				} : null != e_ ? e_ : void 0, [O.id, ee, es, null == Q ? void 0 : Q.id, e_]), eC = (0, E.G)(O), ev = i.useMemo(() => null != J ? J : null != er ? er : null != eC && R ? eC : void 0, [R, J, er, eC]), eO = i.useMemo(() => {
					let e = [];
					return z || null == ey ? z && null != ex && e.push(ex) : e.push(ey), e
				}, [ex, z, ey]), ej = (0, V.dQ)(O.name, null == (t = N.activity) ? void 0 : t.type), eI = (0, v.N)(O.id).some(e => (0, x.ig)(e) === l.o.GLOBAL) ? (0, r.jsxs)(r.Fragment, {
					children: [(0, r.jsx)(s.YqE, {
						size: "xxs",
						color: "currentColor"
					}), et.intl.string(et.t.TsWCdX)]
				}) : null, eS = (0, r.jsx)(eu, {
					presenceActivity: Z
				});
				if (z) {
					let e = (0, r.jsx)(s.Text, {
						variant: "text-xs/medium",
						className: en.description,
						color: "none",
						lineClamp: 3,
						children: (0, V.wR)(N, O, j, I)
					});
					return (0, r.jsx)(_.W, {
						header: ej,
						title: O.name,
						staticBannerSrc: D,
						videoBannerSrc: M,
						onClickBanner: ev,
						bannerAspectRatio: F,
						iconSrc: null != L ? L : void 0,
						info: e,
						actions: eO,
						onClickContent: ev,
						trackingConfig: {
							id: O.id,
							linkType: h.Un.RICH_PRESENCE_INVITE,
							onView: P
						}
					})
				}
				let eT = null != (g = null == Z || null == (n = Z.timestamps) ? void 0 : n.start) ? g : null == Z ? void 0 : Z.created_at,
					eN = null != eT ? (0, r.jsxs)("div", {
						className: en.timestampContainer,
						children: [(0, r.jsx)(s.iWm, {
							size: "xxs",
							color: "currentColor"
						}), (0, r.jsx)(y.x3, {
							entry: {
								start: eT,
								end: null == Z || null == (a = Z.timestamps) ? void 0 : a.end
							},
							textColor: "currentColor",
							textTabularNumbers: !1,
							textFontCode: !1
						})]
					}) : null,
					eP = (0, r.jsxs)(s.Text, {
						variant: "text-xs/normal",
						className: en.tagline,
						color: "none",
						lineClamp: 2,
						children: [q ? (0, V.$v)(N, O, j, I, z) : eN, q ? null : eI]
					}),
					eA = (0, r.jsxs)("div", {
						className: en.info,
						children: [eP, T || q ? null : A]
					});
				return (0, r.jsx)(_.W, {
					header: ej,
					title: O.name,
					staticBannerSrc: D,
					videoBannerSrc: M,
					onClickBanner: ev,
					bannerAspectRatio: F,
					iconSrc: null != L ? L : void 0,
					info: eA,
					actions: eO,
					onClickContent: ev,
					trackingConfig: {
						id: O.id,
						linkType: h.Un.RICH_PRESENCE_INVITE,
						onView: P
					},
					footer: eS
				})
			}

			function ep(e) {
				var t, n;
				let {
					analyticsLocations: l,
					app: a,
					channel: s,
					message: c,
					hideParty: u,
					onView: d
				} = e, p = (0, g.O)(a), m = (0, o.e7)([N.default], () => N.default.getId()), f = (0, o.e7)([k.Z], () => {
					if (null == c.application) return k.Z.findActivity(c.author.id, e => e.type === $.IIU.LISTENING);
					{
						let e = c.author.id;
						return ei(c) && (e = e === m && s.isPrivate() ? s.getRecipientId() : m), k.Z.getApplicationActivity(e, c.application.id)
					}
				}, [c, s, m]), _ = (0, o.e7)([R.Z, L.Z], () => {
					var e;
					return null != (e = R.Z.getApplicationActivity(p.id)) ? e : L.Z.getApplicationActivity(p.id, !0)
				}, [p.id]), h = (0, o.Wu)([A.Z], () => {
					var e;
					return null == f || null == f.party ? [] : Array.from(null != (e = A.Z.getParty(f.party.id)) ? e : [])
				}, [f]), {
					partySize: b,
					maxPartySize: E
				} = (0, W._)(f), y = i.useMemo(() => h.map(e => {
					let t = D.default.getUser(e);
					return null != t ? t : Q.ag
				}), [h]), x = (0, ee.Ps)(null == f || null == (t = f.party) ? void 0 : t.id) || p.id === T.r9.id, C = (0, r.jsx)(er, {
					partyMembers: y,
					partySize: b,
					maxPartySize: E,
					guildId: s.guild_id,
					activityActionType: null == (n = c.activity) ? void 0 : n.type
				});
				return x ? (0, r.jsx)(es, {
					application: p,
					currentUserPresenceActivity: _,
					hideParty: u,
					message: c,
					onView: d,
					partyStatusElement: C,
					presenceActivity: f
				}) : (0, r.jsx)(ed, {
					analyticsLocations: l,
					application: p,
					channel: s,
					currentUserId: m,
					currentUserPresenceActivity: _,
					hideParty: u,
					message: c,
					onView: d,
					partyStatusElement: C,
					presenceActivity: f
				})
			}
		},
		404174: function(e, t, n) {
			n.d(t, {
				j: () => i
			});
			var r = n(255367);
			let i = e => {
				let {
					width: t,
					height: n,
					color: i
				} = e;
				return (0, r.jsxs)("svg", {
					xmlns: "http://www.w3.org/2000/svg",
					width: t,
					height: n,
					viewBox: "0 0 15 9",
					fill: "none",
					children: [(0, r.jsx)("path", {
						fill: i,
						d: "M14.41 7.85a6.97 6.97 0 0 0-1.983-3.898 7.003 7.003 0 0 0-1.234-.98l.008-.013.421-.727.412-.71.295-.51a.64.64 0 0 0-1.105-.643l-.296.51-.411.71-.422.728-.046.08-.063-.025a6.969 6.969 0 0 0-2.562-.457 6.972 6.972 0 0 0-2.47.477l-.042-.075-.421-.727-.412-.71-.296-.51a.638.638 0 1 0-1.105.642l.295.51.412.71.421.728.003.006a7.027 7.027 0 0 0-2.52 2.718 6.972 6.972 0 0 0-.748 2.473h13.908a7.015 7.015 0 0 0-.04-.307Z"
					}), (0, r.jsx)("path", {
						fill: "#202124",
						d: "M11.113 6.232c.278-.185.319-.614.09-.958-.228-.344-.639-.472-.917-.286-.278.185-.319.614-.09.957.228.344.639.472.917.287Zm-6.306-.286c.228-.343.188-.772-.09-.957-.279-.186-.69-.057-.918.286-.228.344-.188.773.09.958.279.185.69.057.918-.287Z"
					})]
				})
			}
		},
		403404: function(e, t, n) {
			n.d(t, {
				Z: () => i
			});
			var r = n(397698);

			function i(e) {
				let {
					channel: t,
					openInPopout: n,
					analyticsLocations: i
				} = e, l = i.length > 0 ? i[i.length - 1] : "open-activity-shelf";
				(0, r.Z)({
					openInPopout: n,
					context: null != t ? {
						type: "channel",
						channel: t
					} : {
						type: "contextless"
					},
					analyticsLocation: l
				})
			}
		},
		183431: function(e, t, n) {
			n.d(t, {
				Z: () => u
			});
			var r = n(255367),
				i = n(73800),
				l = n(481060),
				a = n(168107),
				o = n(480916),
				s = n(81643),
				c = n(388032);

			function u(e) {
				let {
					channelId: t
				} = e, n = (0, s.l6)(), u = (0, s.L5)(), d = i.useCallback(() => {
					a.Z.showAgeVerificationGetStartedModal(o.cU.SYSTEM_DM_RETRY_BUTTON), (0, o.Z7)(o.io.RETRY, t)
				}, [t]);
				return (0, r.jsx)(l.zxk, {
					variant: "primary",
					text: n ? c.intl.string(c.t.KPGVWl) : c.intl.string(c.t["/nicWl"]),
					onClick: d,
					disabled: !u
				})
			}
		},
		824203: function(e, t, n) {
			n.d(t, {
				i: () => l
			});
			var r = n(39621),
				i = n(388032);

			function l(e) {
				switch (e) {
					case r.O.FEATURE_LIMITED:
						return i.intl.string(i.t.WCvmra);
					case r.O.GUILD_FEATURE_LIMITED:
						return i.intl.string(i.t["0QUDYW"]);
					case r.O.USER_FEATURE_LIMITED:
						return i.intl.string(i.t.gs1sxc);
					case r.O.SLOWMODE:
						return i.intl.string(i.t["9UAXh4"]);
					case r.O.RATE_LIMIT:
						return i.intl.string(i.t.zBB9xM);
					case r.O.CANNOT_MESSAGE_USER:
						return i.intl.string(i.t.w7sHnJ);
					case r.O.USER_VERIFICATION_LEVEL:
						return i.intl.string(i.t.SLAkFR);
					case r.O.CANNOT_UNARCHIVE_THREAD:
						return i.intl.string(i.t.AIqS3t);
					case r.O.CANNOT_JOIN_THREAD:
						return i.intl.string(i.t.BqKxlZ);
					case r.O.MISSING_PERMISSIONS:
						return i.intl.string(i.t.LLF2DA);
					case r.O.CANNOT_SEND_ATTACHMENTS:
						return i.intl.string(i.t.Htl7W1);
					case r.O.CANNOT_SEND_EMBEDS:
						return i.intl.string(i.t.vGgPMD);
					case r.O.CANNOT_SEND_STICKERS:
						return i.intl.string(i.t.byrr7u);
					case r.O.AUTOMOD_BLOCKED:
						return i.intl.string(i.t["24PAJy"]);
					case r.O.HARMFUL_LINK:
						return i.intl.string(i.t.zeqgmJ);
					case r.O.CANNOT_USE_COMMAND:
						return i.intl.string(i.t.kzMhho);
					case r.O.BETA_GUILD_SIZE:
						return i.intl.string(i.t.Af3rGR);
					case r.O.CANNOT_USE_EXTERNAL_APPS:
						return i.intl.string(i.t.Ji4l7O);
					default:
						return i.intl.string(i.t["v/OAcn"])
				}
			}
		},
		603270: function(e, t, n) {
			n.d(t, {
				F: () => k,
				P: () => R
			}), n(388685), n(997841), n(953529), n(781311);
			var r = n(255367),
				i = n(73800),
				l = n(512722),
				a = n.n(l),
				o = n(442837),
				s = n(755721),
				c = n(481060),
				u = n(241159),
				d = n(558381),
				p = n(728345),
				m = n(812206),
				f = n(307643),
				_ = n(171246),
				h = n(263519),
				g = n(592125),
				b = n(509545),
				E = n(238),
				y = n(55563),
				x = n(551428),
				C = n(626135),
				v = n(572004),
				O = n(601911),
				j = n(504211),
				I = n(970321),
				S = n(680005),
				T = n(981631),
				N = n(979007),
				P = n(388032),
				A = n(197866);
			let w = (0, o.Kb)([y.Z, x.Z, b.Z], {
					queryId: e => T.McO.SKU(e),
					get: e => {
						if (null == e) return;
						let t = y.Z.get(e),
							n = x.Z.getForSKU(e);
						if (null == t || null == n) return;
						let r = b.Z.getForSKU(e);
						return {
							sku: t,
							storeListing: n,
							subscriptionPlan: null != r ? r[0] : void 0
						}
					},
					load: async (e, t) => {
						a()(null != t, "skuId is null"), await (0, d.km)(t)
					},
					useStateHook: o.cj
				}),
				Z = (0, o.Kb)([y.Z], {
					queryId: (e, t) => T.McO.__DO_NOT_USE__STOREFRONT_MESSAGE_EMBED_PARENT_SKU(t),
					get: e => {
						if (null != e) return y.Z.getParentSKU(e)
					},
					load: async (e, t, n) => {
						a()(null != t && null != n, "appId is null"), await (0, d.oJ)(n)
					},
					useStateHook: o.cj
				});

			function R(e) {
				let {
					appId: t,
					message: l
				} = e, a = (0, I.R)(t), [d, p, _, h, b, y, x] = (0, o.Wu)([m.Z, E.Z, g.Z], () => {
					var e;
					let n = m.Z.getApplication(t),
						r = null != n ? (0, O.y)(n, 45) : void 0,
						i = null == (e = g.Z.getBasicChannel(l.channel_id)) ? void 0 : e.guild_id;
					return [n, m.Z.isFetchingApplication(t), m.Z.didFetchingApplicationFail(t), E.Z.getStoreLayout(t), E.Z.getFetchStatus(t), i, r]
				}, [t, l.channel_id]);
				i.useEffect(() => {
					b === E.N.NONE && (0, u.k)(t), null != d || p || _ || (0, f.UM)(t)
				}, [d, t, _, p, b]);
				let v = h.subscriptions.length,
					S = h.otps.length,
					w = i.useMemo(() => v > 0 && S > 0 ? P.intl.formatToPlainString(P.t["jA648/"], {
						subCount: v,
						itemCount: S
					}) : v > 0 ? P.intl.formatToPlainString(P.t.GSfibG, {
						count: v
					}) : S > 0 ? P.intl.formatToPlainString(P.t.j7Go5O, {
						count: S
					}) : P.intl.string(P.t.rMA98v), [S, v]);
				if (!a || null == d) return null;
				let Z = () => {
					(0, c.ZDy)(async () => {
						let {
							default: e
						} = await Promise.all([n.e("77803"), n.e("83372")]).then(n.bind(n, 7225));
						return n => (0, r.jsx)(e, {
							transitionState: n.transitionState,
							onClose: n.onClose,
							appId: t,
							guildId: y
						})
					})
				};
				return (0, r.jsx)(L, {
					appName: d.name,
					title: P.intl.formatToPlainString(P.t.XDRjs7, {
						appName: d.name
					}),
					description: w,
					link: "".concat(location.protocol, "//").concat(location.host).concat(T.Z5c.GLOBAL_DISCOVERY_APPS_PROFILE_SECTION(d.id, N.GlobalDiscoveryAppsSections.STORE)),
					onLinkCopy: () => {
						(0, j.X)(t, j.B.STORE_EMBED)
					},
					iconSrc: x,
					onIconClick: () => {
						Z(), C.default.track(T.rMx.STOREFRONT_STORE_MESSAGE_EMBED_CLICKED, {
							application_id: t,
							area: "app_icon"
						})
					},
					children: (0, r.jsx)(s.zx, {
						onClick: () => {
							Z(), C.default.track(T.rMx.STOREFRONT_STORE_MESSAGE_EMBED_CLICKED, {
								application_id: t,
								area: "open_store_button"
							})
						},
						className: A.openStoreButton,
						children: P.intl.string(P.t.kRvlKC)
					})
				})
			}

			function k(e) {
				var t, l;
				let {
					appId: a,
					skuId: u,
					message: d
				} = e, {
					parentSku: m,
					sku: f,
					subscriptionPlan: b,
					storeListing: E
				} = function(e, t) {
					var n, r;
					let {
						data: i
					} = w(e), l = null == i ? void 0 : i.sku, a = null == i ? void 0 : i.subscriptionPlan, o = null == i ? void 0 : i.storeListing, {
						data: s
					} = Z(e, null != (r = null == l || null == (n = l.application) ? void 0 : n.id) ? r : null == l ? void 0 : l.applicationId);
					return {
						parentSku: s,
						sku: (null == l ? void 0 : l.applicationId) === t ? l : null,
						storeListing: o,
						subscriptionPlan: a
					}
				}(u, a), {
					data: y
				} = (0, p.IX)(null == f ? void 0 : f.applicationId), x = (0, o.e7)([g.Z], () => {
					var e;
					return null == (e = g.Z.getBasicChannel(d.channel_id)) ? void 0 : e.guild_id
				}, [d]), v = i.useMemo(() => null != y ? (0, O.y)(y, 45) : void 0, [y]), R = (0, I.R)(null != (l = null == y ? void 0 : y.id) ? l : ""), {
					openModal: k,
					subscriptionPurchaseButtonState: D
				} = (0, h.Z)({
					skuId: u,
					initialSubscribeForGuild: x
				});
				if (!R || null == y || null == f) return null;
				let M = f.type === T.epS.SUBSCRIPTION,
					U = !!M && (0, _.KW)(f.flags),
					F = () => {
						(0, c.ZDy)(async () => {
							let {
								default: e
							} = await Promise.all([n.e("77803"), n.e("83372")]).then(n.bind(n, 7225));
							return t => (0, r.jsx)(e, {
								transitionState: t.transitionState,
								onClose: t.onClose,
								appId: y.id,
								guildId: x
							})
						})
					},
					B = () => {
						(0, c.ZDy)(async () => {
							let e = M ? (await Promise.resolve().then(n.bind(n, 519896))).SubscriptionDetailsModal : null,
								t = M ? null : (await Promise.resolve().then(n.bind(n, 147496))).ItemDetailsModal;
							return n => {
								let i = () => {
									n.onClose(), F()
								};
								return null != e && null != m ? (0, r.jsx)(e, {
									transitionState: n.transitionState,
									appId: y.id,
									skuId: f.id,
									guildId: x,
									subscriptionType: U ? "user" : "guild",
									onClose: n.onClose,
									onHeaderTitleClick: i
								}) : null != t ? (0, r.jsx)(t, {
									transitionState: n.transitionState,
									appId: y.id,
									skuId: u,
									onClose: n.onClose,
									onHeaderTitleClick: i
								}) : null
							}
						})
					},
					G = M ? U ? (0, r.jsxs)(r.Fragment, {
						children: [(0, r.jsx)(c.tBG, {
							size: "custom",
							width: 12,
							height: 12
						}), " ", P.intl.string(P.t.wnifjI)]
					}) : (0, r.jsxs)(r.Fragment, {
						children: [(0, r.jsx)(c.QTo, {
							size: "custom",
							width: 12,
							height: 12
						}), " ", P.intl.string(P.t.NRC3am)]
					}) : null == E || null == (t = E.description) ? void 0 : t.trim();
				"" === G && (G = void 0);
				let H = () => {
					C.default.track(T.rMx.STOREFRONT_SKU_MESSAGE_EMBED_CLICKED, {
						application_id: y.id,
						sku_id: f.id,
						area: "purchase_button"
					})
				};
				return (0, r.jsx)(L, {
					appName: y.name,
					title: f.name,
					description: G,
					link: "".concat(location.protocol, "//").concat(location.host).concat(T.Z5c.GLOBAL_DISCOVERY_APPS_PROFILE_SECTION(y.id, N.GlobalDiscoveryAppsSections.STORE)),
					onLinkCopy: () => {
						(0, j.X)(y.id, j.B.SKU_EMBED, u)
					},
					iconSrc: v,
					onIconClick: () => {
						F(), C.default.track(T.rMx.STOREFRONT_SKU_MESSAGE_EMBED_CLICKED, {
							application_id: y.id,
							sku_id: f.id,
							area: "app_icon"
						})
					},
					children: (0, r.jsxs)("div", {
						className: A.skuPurchaseButtons,
						children: [(0, r.jsx)(s.zx, {
							color: s.Tt.CUSTOM,
							onClick: () => {
								B(), C.default.track(T.rMx.STOREFRONT_SKU_MESSAGE_EMBED_CLICKED, {
									application_id: y.id,
									sku_id: f.id,
									area: "view_details"
								})
							},
							className: A.viewDetailsButton,
							children: P.intl.string(P.t.DXYfjI)
						}), M ? null != b ? (0, r.jsx)(S.pV, {
							onClick: k,
							appId: y.id,
							subscriptionType: U ? "user" : "guild",
							skuId: f.id,
							icon: (0, r.jsx)(c.EOn, {
								size: "xs",
								color: "currentcolor"
							}),
							onHasClicked: H,
							subscriptionPlan: b,
							state: D
						}) : (0, r.jsx)(c.zxk, {
							variant: "primary",
							text: P.intl.string(P.t.uuzaAA),
							onClick: B
						}) : (0, r.jsx)(S.YG, {
							appId: y.id,
							sku: f,
							icon: (0, r.jsx)(c.EOn, {
								size: "xs",
								color: "currentcolor"
							}),
							onHasClicked: H
						})]
					})
				})
			}

			function L(e) {
				let {
					appName: t,
					title: n,
					description: i,
					link: l,
					iconSrc: a,
					onIconClick: o,
					onLinkCopy: u,
					children: d
				} = e;
				return (0, r.jsxs)("div", {
					className: A.wrapper,
					children: [(0, r.jsxs)("div", {
						className: A.header,
						children: [(0, r.jsxs)("div", {
							className: A.headerTitle,
							children: [(0, r.jsx)(c.EOn, {
								size: "xxs"
							}), (0, r.jsx)(c.Text, {
								variant: "eyebrow",
								color: "text-muted",
								children: t
							})]
						}), v.wS && (0, r.jsx)(s.zx, {
							look: s.iL.BLANK,
							size: s.Ph.ICON,
							"aria-label": P.intl.string(P.t.WqhZsr),
							onClick: () => {
								(0, v.JG)(l, () => {
									(0, c.showToast)((0, c.createToast)(P.intl.string(P.t["L/PwZW"]), c.ToastType.SUCCESS)), u()
								})
							},
							children: (0, r.jsx)(c.xPt, {
								size: "xs"
							})
						})]
					}), (0, r.jsxs)("div", {
						className: A.content,
						children: [(0, r.jsxs)("div", {
							className: A.contentTextWrapper,
							children: [null != a && (0, r.jsx)(s.zx, {
								look: s.iL.BLANK,
								size: s.Ph.NONE,
								onClick: o,
								children: (0, r.jsx)("img", {
									src: a.href,
									alt: "",
									className: A.appIcon
								})
							}), (0, r.jsxs)("div", {
								className: A.contentText,
								style: null == i ? {
									justifyContent: "space-evenly"
								} : void 0,
								children: [(0, r.jsx)(c.Text, {
									variant: "heading-md/semibold",
									tag: "div",
									children: n
								}), null != i && (0, r.jsx)(c.Text, {
									variant: "heading-md/medium",
									color: "text-muted",
									tag: "div",
									className: A.description,
									children: i
								})]
							})]
						}), d]
					})]
				})
			}
		},
		592180: function(e, t, n) {
			n.d(t, {
				a: () => i,
				g: () => l
			});
			var r = n(911969);

			function i(e) {
				return null != e.interactionMetadata
			}

			function l(e) {
				var t, n;
				return (null == (t = e.interactionMetadata) ? void 0 : t.type) === r.B8.APPLICATION_COMMAND && (null == (n = e.interactionMetadata) ? void 0 : n.command_type) === r.yU.PRIMARY_ENTRY_POINT
			}
		},
		230171: function(e, t, n) {
			n.d(t, {
				O: () => R,
				U: () => T.Un
			}), n(539854), n(784620), n(973216), n(953529), n(388685);
			var r = n(255367),
				i = n(73800),
				l = n(373793),
				a = n(705512),
				o = n(442837),
				s = n(481060),
				c = n(566620),
				u = n(574952),
				d = n(100527),
				p = n(906732),
				m = n(915346),
				f = n(783097),
				_ = n(812236),
				h = n(561308),
				g = n(567409),
				b = n(706454),
				E = n(314897),
				y = n(699516),
				x = n(914010),
				C = n(594174),
				v = n(768581),
				O = n(433534),
				j = n(506895),
				I = n(758199),
				S = n(943762),
				T = n(914498),
				N = n(172109),
				P = n(880251),
				A = n(515344),
				w = n(388032),
				Z = n(758364);

			function R(e) {
				let {
					app: t,
					embedUrl: n,
					linkType: l,
					activityCustomId: a,
					activityReferrerId: s,
					onView: h
				} = e, {
					name: g,
					bot: b
				} = t = (0, N.O)(t), y = null == b ? void 0 : b.id, x = (0, f.ye)(t), C = v.ZP.getApplicationIconURL({
					id: t.id,
					icon: t.icon,
					bot: b
				}), {
					staticBannerSrc: O,
					videoBannerSrc: S,
					bannerAspectRatio: Z
				} = (0, P.E)(t), R = (0, o.e7)([E.default], () => null != s ? s : E.default.getId(), [s]), {
					analyticsLocations: D
				} = (0, p.ZP)(d.Z.APP_MESSAGE_EMBED), {
					currentChannelId: M,
					instanceId: U,
					isCurrentlyInInstance: F,
					canLaunchInChannel: B
				} = (0, j.c)(t.id), G = (0, u.Z)(), H = (0, _.ms)({
					context: {
						type: "contextless"
					},
					applicationId: t.id,
					botUserId: null == b ? void 0 : b.id
				}), V = null != y && x && H, z = B && x, W = (0, A.G)(t), K = (0, A.z)(t), Y = i.useMemo(() => {
					let e = [];
					return x ? (z && e.push({
						label: null == U ? w.intl.string(w.t.RscU7O) : w.intl.string(w.t.VJlc0d),
						trackingArea: T.j_.PLAY,
						onClick() {
							(0, c.G6)({
								channelId: null != M ? M : void 0,
								applicationId: t.id,
								isStart: null == U,
								embeddedActivitiesManager: G,
								customId: a,
								referrerId: R,
								analyticsLocations: D
							})
						},
						disabledReason: F ? w.intl.string(w.t.wJNK8P) : void 0
					}), !z && V && e.push({
						label: w.intl.string(w.t.JeK1Wl),
						trackingArea: T.j_.PLAY,
						onClick() {
							(0, m.W)({
								appId: t.id,
								botId: y,
								analyticsLocations: D,
								customId: a,
								referrerId: R
							})
						}
					})) : null != K && e.push(K), e
				}, [z, V, U, F, M, t.id, G, a, R, D, x, K, y]), X = x ? (0, r.jsx)(L, {
					app: t
				}) : (0, r.jsx)(k, {
					app: t
				});
				return (0, r.jsx)(I.W, {
					title: g,
					staticBannerSrc: O,
					videoBannerSrc: S,
					onClickBanner: W,
					bannerAspectRatio: Z,
					iconSrc: C,
					embedUrl: n,
					info: X,
					actions: Y,
					onClickContent: W,
					trackingConfig: {
						id: t.id,
						linkType: l,
						referrerId: R,
						activityCustomId: a,
						onView: h
					}
				})
			}

			function k(e) {
				var t, n, a;
				let {
					app: c
				} = e, u = (0, O.Eb)({
					customInstallUrl: c.customInstallUrl,
					installParams: c.installParams,
					integrationTypesConfig: c.integrationTypesConfig
				}) && null != c.integrationTypesConfig && l.Y.GUILD_INSTALL in c.integrationTypesConfig, d = (0, o.e7)([b.default], () => b.default.locale, []), p = i.useMemo(() => {
					var e, t;
					if (!u) return null;
					let n = new Intl.NumberFormat(d, {
							notation: "compact",
							compactDisplay: "short"
						}),
						r = null != (t = null == (e = c.directoryEntry) ? void 0 : e.guild_count) ? t : 0;
					return 0 === r ? null : w.intl.format(w.t["6IW6Wl"], {
						guildCount: n.format(r)
					})
				}, [null == (t = c.directoryEntry) ? void 0 : t.guild_count, u, d]), m = null == (a = c.categories) || null == (n = a.at(0)) ? void 0 : n.name;
				return (0, r.jsxs)(r.Fragment, {
					children: [null != m && (0, r.jsx)(s.Text, {
						variant: "text-xs/medium",
						className: Z.description,
						color: "none",
						children: m
					}), null != p && (0, r.jsxs)(s.Text, {
						variant: "text-xs/normal",
						className: Z.tagline,
						color: "none",
						lineClamp: 1,
						children: [(0, r.jsx)(s.Jmo, {
							size: "xxs",
							color: "currentColor"
						}), p]
					})]
				})
			}

			function L(e) {
				let {
					app: t
				} = e, {
					tags: n,
					maxParticipants: l = 0
				} = t, c = (0, o.e7)([x.Z], () => {
					var e;
					return null != (e = x.Z.getGuildId()) ? e : void 0
				}, []), u = (0, g.N)(t.id), d = (0, o.Wu)([C.default, y.Z], () => {
					let e = [];
					for (let [t, n] of u.entries()) {
						if (t >= 5) break;
						let r = C.default.getUser(n.author_id),
							i = y.Z.isFriend(n.author_id);
						null != r && i && e.push(r)
					}
					return e
				}, [u]), p = i.useMemo(() => {
					if (d.length > 0) return (0, r.jsx)(S.K, {
						activityUsers: d,
						guildId: c,
						activityText: w.intl.formatToPlainString(w.t["IJa+4+"], {
							count: d.length
						})
					});
					if (u.some(e => (0, h.ig)(e) === a.o.GLOBAL)) return (0, r.jsxs)(r.Fragment, {
						children: [(0, r.jsx)(s.YqE, {
							size: "xxs",
							color: "currentColor"
						}), w.intl.string(w.t.TsWCdX)]
					});
					let e = l > 0 ? w.intl.format(w.t.z8EAJS, {
						count: l
					}) : w.intl.string(w.t.RjceQU);
					return (0, r.jsxs)(r.Fragment, {
						children: [(0, r.jsx)(s.tBG, {
							size: "xxs",
							color: "currentColor"
						}), e]
					})
				}, [u, d, c, l]);
				return (0, r.jsxs)(r.Fragment, {
					children: [n.length > 0 && (0, r.jsx)(s.Text, {
						variant: "text-xs/medium",
						className: Z.description,
						color: "none",
						lineClamp: 1,
						children: n.map((e, t) => (0, r.jsx)("span", {
							className: Z.tag,
							children: e
						}, t))
					}), (0, r.jsx)(s.Text, {
						variant: "text-xs/normal",
						className: Z.tagline,
						color: "none",
						lineClamp: 1,
						children: p
					})]
				})
			}
		},
		758199: function(e, t, n) {
			n.d(t, {
				W: () => j,
				u: () => v
			}), n(190126), n(368063), n(65234), n(111804), n(490233), n(97749), n(388685);
			var r, i = n(255367),
				l = n(73800),
				a = n(120356),
				o = n.n(a),
				s = n(442837),
				c = n(755721),
				u = n(481060),
				d = n(434650),
				p = n(607070),
				m = n(206295),
				f = n(70097),
				_ = n(314897),
				h = n(572004),
				g = n(914498),
				b = n(217702),
				E = n(388032),
				y = n(383195);

			function x() {
				return (x = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
					}
					return e
				}).apply(this, arguments)
			}

			function C(e) {
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
			var v = ((r = {})[r.BOT = 0] = "BOT", r[r.ACTIVITY = 1] = "ACTIVITY", r);

			function O(e) {
				let {
					onClick: t,
					children: n,
					className: r
				} = e;
				return null != t ? (0, i.jsx)(u.P3F, {
					onClick: t,
					className: o()({
						[y.cursorPointer]: null != t
					}, r),
					children: n
				}) : (0, i.jsx)("div", {
					className: r,
					children: n
				})
			}

			function j(e) {
				var t, n, r, a;
				let {
					title: v,
					header: j,
					footer: I,
					info: S,
					staticBannerSrc: T,
					videoBannerSrc: N,
					bannerAspectRatio: P = 0,
					iconSrc: A,
					embedUrl: w,
					infoUrl: Z,
					actions: R = [],
					trackingConfig: k,
					onClickContent: L,
					onClickBanner: D
				} = e;
				k = {
					id: null != (n = null == (t = k) ? void 0 : t.id) ? n : "0",
					linkType: null != (r = null == t ? void 0 : t.linkType) ? r : g.Un.UNKNOWN,
					referrerId: null != (a = null == t ? void 0 : t.referrerId) ? a : _.default.getId(),
					activityCustomId: null == t ? void 0 : t.activityCustomId,
					onView: null == t ? void 0 : t.onView,
					onLinkCopied: null == t ? void 0 : t.onLinkCopied
				};
				let {
					primaryColor: M,
					secondaryColor: U
				} = (0, m.Z)(null != A ? A : T), F = "linear-gradient(45deg, ".concat(M, ", ").concat(U, ")"), B = (0, s.e7)([p.Z], () => p.Z.useReducedMotion), G = l.useRef(!1), H = (0, d.O)(e => {
					if (!1 === G.current && e) {
						var t;
						null == k || null == (t = k.onView) || t.call(k), (0, g.GF)(k.id, k.linkType, k.referrerId, k.activityCustomId), G.current = !0
					}
				}, void 0), V = h.wS && null != w ? (0, i.jsx)(c.zx, {
					look: c.zx.Looks.BLANK,
					size: c.zx.Sizes.ICON,
					"aria-label": E.intl.string(E.t.WqhZsr),
					className: y.linkIcon,
					onClick: () => {
						(0, h.JG)(w, () => (0, u.showToast)((0, u.createToast)(E.intl.string(E.t["L/PwZW"]), u.ToastType.SUCCESS))), (0, g.Yu)(k.id, k.linkType)
					},
					children: (0, i.jsx)(u.xPt, {
						size: "xs",
						color: "currentColor"
					})
				}) : null, z = null != Z ? (0, i.jsx)(u.eee, {
					"aria-label": E.intl.string(E.t.wuRE8P),
					className: y.linkIcon,
					href: Z,
					children: (0, i.jsx)(u.d3s, {
						size: "xs",
						color: u.TVs.colors.APP_MESSAGE_EMBED_SECONDARY_TEXT.css
					})
				}) : null, W = null != T, K = null != N && !1 === B, Y = W || K, X = 0 === P ? y.bannerAspectRatioBot : y.bannerAspectRatioActivity, q = l.useRef(null), Q = l.useCallback(() => {
					let e = q.current;
					null != e && ("hidden" === getComputedStyle(e).visibility ? e.pause() : e.play())
				}, []), J = l.useMemo(() => !!K && new URL(N).pathname.endsWith(".gif"), [K, N]), $ = l.useMemo(() => {
					if (null != L) return e => {
						L(e), (0, g.KX)(k.id, k.linkType, g.j_.CONTENT, k.referrerId, k.activityCustomId)
					}
				}, [L, k]), ee = l.useMemo(() => {
					if (null != D) return e => {
						D(e), (0, g.KX)(k.id, k.linkType, g.j_.BANNER, k.referrerId, k.activityCustomId)
					}
				}, [D, k]);
				return (0, i.jsxs)("div", {
					ref: H,
					className: y.embed,
					children: [Y && (0, i.jsxs)(O, {
						onClick: ee,
						className: o()(y.bannerWrapper, X, {
							[y.showVideoOnFocus]: K
						}),
						children: [K && (J ? (0, i.jsx)("div", {
							className: y.videoBanner,
							style: {
								backgroundImage: "url(".concat(N, ")")
							}
						}) : (0, i.jsx)(f.Z, {
							ref: q,
							src: N,
							mediaLayoutType: b.hV.MOSAIC,
							loop: !0,
							muted: !0,
							className: y.videoBanner
						})), W && (0, i.jsx)("div", {
							className: y.staticBanner,
							style: {
								backgroundImage: "url(".concat(T, ")")
							},
							onTransitionEnd: Q
						})]
					}), (0, i.jsxs)("div", {
						style: {
							background: F
						},
						children: [(0, i.jsxs)("div", {
							className: y.contentContainer,
							children: [null != j && (0, i.jsxs)("div", {
								className: y.header,
								children: [(0, i.jsx)(u.Text, {
									variant: "text-sm/semibold",
									color: "none",
									children: j
								}), null != V ? V : z]
							}), (0, i.jsxs)("div", {
								className: y.contentAndCopyButtonWrapper,
								children: [(0, i.jsxs)(O, {
									onClick: $,
									className: o()(y.contentWrapper, {
										[y.contentWrapperClickable]: null != $
									}),
									children: [null != A && (0, i.jsx)("div", {
										className: y.img,
										style: {
											backgroundImage: "url(".concat(A, ")")
										}
									}), (0, i.jsxs)("div", {
										className: y.content,
										children: [(0, i.jsx)(u.Text, {
											variant: "text-md/semibold",
											color: "none",
											lineClamp: 1,
											className: y.contentTitle,
											children: v
										}), (0, i.jsx)("div", {
											className: y.contentInfoWrapper,
											children: S
										})]
									})]
								}), null == j && (null != V ? V : z)]
							}), R.length > 0 && (0, i.jsx)("div", {
								className: y.actionWrapper,
								children: R.map((e, t) => {
									let {
										label: n,
										icon: r,
										onClick: l,
										disabledReason: a,
										submitting: o,
										trackingArea: s
									} = e, d = null != a, p = 0 === t, m = null != r ? (0, i.jsxs)(i.Fragment, {
										children: [r, (0, i.jsx)("span", {
											children: n
										})]
									}) : n, f = {
										color: p ? c.zx.Colors.WHITE : c.zx.Colors.TRANSPARENT,
										className: p ? y.primaryButton : y.alwaysWhiteText,
										disabled: d,
										submitting: o,
										children: m,
										onClick(e) {
											l(e), (0, g.KX)(k.id, k.linkType, s, k.referrerId, k.activityCustomId)
										}
									};
									return d ? (0, i.jsx)(u.ua7, {
										text: a,
										children: e => {
											var t = x({}, function(e) {
												if (null == e) throw TypeError("Cannot destructure " + e);
												return e
											}(e));
											return (0, i.jsx)(c.zx, C({}, f, t))
										}
									}, n) : (0, i.jsx)(c.zx, C({}, f), n)
								})
							})]
						}), null != I && I]
					})]
				})
			}
		},
		943762: function(e, t, n) {
			n.d(t, {
				K: () => c,
				r: () => u
			});
			var r = n(255367);
			n(73800);
			var i = n(481060),
				l = n(884338),
				a = n(981631),
				o = n(388032),
				s = n(368991);

			function c(e) {
				let {
					activityUsers: t,
					guildId: n,
					activityText: a
				} = e;
				return (0, r.jsxs)("div", {
					className: s.wrapper,
					children: [(0, r.jsx)(l.ZP, {
						guildId: n,
						users: t,
						max: 6,
						size: l.u8.SIZE_16
					}), (0, r.jsxs)(i.Text, {
						variant: "text-xs/normal",
						color: "none",
						children: [t.length, " ", a]
					})]
				})
			}

			function u(e) {
				switch (null == e ? void 0 : e.type) {
					case a.IIU.STREAMING:
						return {
							text: o.intl.string(o.t["Jpkr/v"]), Icon: i.m3e
						};
					case a.IIU.LISTENING:
						return {
							text: o.intl.string(o.t.kUEnxM), Icon: i.RZG
						};
					default:
						return {
							text: o.intl.string(o.t.BMTj29), Icon: i.iWm
						}
				}
			}
		},
		172109: function(e, t, n) {
			n.d(t, {
				O: () => s
			}), n(388685);
			var r = n(73800),
				i = n(442837),
				l = n(471518),
				a = n(370210),
				o = n(973616);

			function s(e) {
				let {
					id: t,
					isDiscoverable: n
				} = e, [s, c, u] = (0, i.Wu)([a.Z], () => [a.Z.getApplication(t), a.Z.isInvalidApplication(t), a.Z.getApplicationFetchState(t)], [t]);
				return r.useEffect(() => {
					!1 === n || c || u === a.M.FETCHED || u === a.M.FETCHING || (0, l.gZ)(t)
				}, [t, u, n, c]), r.useMemo(() => null != s ? e.mergeFromApplicationUpdate(o.ZP.createFromServer(s)) : e, [e, s])
			}
		},
		880251: function(e, t, n) {
			n.d(t, {
				E: () => c
			});
			var r = n(73800),
				i = n(361213),
				l = n(778569),
				a = n(783097),
				o = n(768581),
				s = n(758199);

			function c(e) {
				let {
					bot: t
				} = e, n = (0, a.ye)(e), {
					url: c
				} = (0, l.Z)({
					applicationId: n ? e.id : void 0,
					size: 600,
					names: ["embedded_cover"]
				});
				return r.useMemo(() => {
					let r, l, u = s.u.BOT;
					if (null != t) {
						let {
							banner: e
						} = t;
						r = (0, o.aN)({
							id: t.id,
							banner: e,
							size: 512,
							canAnimate: !1
						}), (0, o.xR)(e) && null == c && (l = (0, o.aN)({
							id: t.id,
							banner: e,
							size: 512,
							canAnimate: !0
						}))
					}
					if (n) {
						let t = (0, a.yJ)(e);
						null != c && (r = c, u = s.u.ACTIVITY);
						let n = null == t ? void 0 : t.activity_preview_video_asset_id;
						null != n && (l = (0, i.Z)(e.id, n), u = s.u.ACTIVITY)
					}
					return {
						staticBannerSrc: r,
						videoBannerSrc: l,
						bannerAspectRatio: u
					}
				}, [c, t, n, e])
			}
		},
		515344: function(e, t, n) {
			n.d(t, {
				G: () => y,
				z: () => x
			});
			var r = n(73800),
				i = n(442837),
				l = n(783097),
				a = n(176412),
				o = n(749681),
				s = n(258971),
				c = n(592125),
				u = n(496675),
				d = n(944486),
				p = n(914010),
				m = n(135431),
				f = n(433534),
				_ = n(914498),
				h = n(981631),
				g = n(49898),
				b = n(388032);

			function E(e) {
				let {
					isDiscoverable: t,
					customInstallUrl: n,
					installParams: r,
					integrationTypesConfig: a
				} = e, o = (0, f.Eb)({
					customInstallUrl: n,
					installParams: r,
					integrationTypesConfig: a
				}), s = (0, i.e7)([p.Z], () => {
					var e;
					return null != (e = p.Z.getGuildId()) ? e : void 0
				}), m = (0, i.e7)([c.Z, u.Z, d.Z], () => {
					let e = c.Z.getChannel(d.Z.getChannelId());
					return null != e && (e.isPrivate() || u.Z.can(h.Plq.SEND_MESSAGES, e))
				}, []), _ = (0, l.PZ)(e, s) && m;
				return {
					isDiscoverable: t,
					customInstallUrl: n,
					installParams: r,
					integrationTypesConfig: a,
					canViewApp: t || _,
					canOpenAppLauncher: _,
					isInstallable: o,
					selectedGuildId: s
				}
			}

			function y(e, t) {
				let {
					canViewApp: n,
					canOpenAppLauncher: i,
					isInstallable: l,
					customInstallUrl: c,
					installParams: u,
					integrationTypesConfig: d,
					selectedGuildId: p
				} = E(e);
				return r.useMemo(() => n ? () => {
					if (null == t || t(), i) return void(0, a.X)(e.id);
					(0, o.transitionToGlobalDiscovery)({
						tab: g.GlobalDiscoveryTab.APPS,
						applicationId: e.id,
						newSessionState: {
							entrypoint: {
								name: s.xF.APPLICATION_MESSAGE_EMBED
							}
						}
					})
				} : l ? () => {
					null == t || t(), (0, m.L)({
						applicationId: e.id,
						customInstallUrl: c,
						installParams: u,
						integrationTypesConfig: d,
						guildId: p,
						source: "app_message_embed"
					})
				} : void 0, [e.id, i, n, c, u, d, l, t, p])
			}

			function x(e) {
				let {
					canViewApp: t,
					isInstallable: n
				} = E(e), i = y(e);
				return r.useMemo(() => t && null != i ? {
					label: b.intl.string(b.t.hvVgAQ),
					trackingArea: _.j_.VIEW,
					onClick() {
						i()
					}
				} : n && null != i ? {
					label: b.intl.string(b.t.NgXl3N),
					trackingArea: _.j_.ADD_APP,
					onClick() {
						i()
					}
				} : void 0, [t, n, i])
			}
		},
		162297: function(e, t, n) {
			n.d(t, {
				Z: () => f
			}), n(388685);
			var r = n(255367),
				i = n(73800),
				l = n(990547),
				a = n(399606),
				o = n(100527),
				s = n(906732),
				c = n(213609),
				u = n(728345),
				d = n(812206),
				p = n(230171),
				m = n(433534);

			function f(e) {
				let {
					applicationId: t
				} = e, [n, l, o] = (0, a.Wu)([d.Z], () => [d.Z.getApplication(t), d.Z.isFetchingApplication(t), d.Z.didFetchingApplicationFail(t)], [t]);
				return (i.useEffect(() => {
					null != n || l || o || u.ZP.fetchApplication(t)
				}, [n, l, o, t]), null != n && (0, m.Eb)({
					customInstallUrl: n.customInstallUrl,
					installParams: n.installParams,
					integrationTypesConfig: n.integrationTypesConfig
				})) ? (0, r.jsx)(_, {
					application: n
				}) : null
			}

			function _(e) {
				let {
					application: t
				} = e, n = i.useCallback(() => {
					(0, c.h)({
						type: l.ImpressionTypes.VIEW,
						name: l.ImpressionNames.APP_OAUTH2_LINK_EMBED,
						properties: {
							application_id: t.id
						}
					})
				}, [t.id]), {
					analyticsLocations: a
				} = (0, s.ZP)(o.Z.APP_OAUTH2_LINK_EMBED);
				return (0, r.jsx)(s.Gt, {
					value: a,
					children: (0, r.jsx)(p.O, {
						app: t,
						linkType: p.U.OAUTH,
						onView: n
					})
				})
			}
		},
		792766: function(e, t, n) {
			n.d(t, {
				Z: () => g,
				y: () => h
			}), n(953529);
			var r = n(255367),
				i = n(73800),
				l = n(120356),
				a = n.n(l),
				o = n(755721),
				s = n(481060),
				c = n(686546),
				u = n(565138),
				d = n(598077),
				p = n(411198),
				m = n(388032),
				f = n(515230);
			let _ = e => {
					var t;
					let {
						speaker: n,
						guildId: i,
						isEmbed: l
					} = e, a = new d.Z(n.user);
					return (0, r.jsxs)("div", {
						className: f.speaker,
						children: [(0, r.jsx)(s.qEK, {
							src: a.getAvatarURL(i, l ? 16 : 24),
							size: l ? s.EFr.SIZE_16 : s.EFr.SIZE_24,
							"aria-label": "".concat(n.nick, "-avatar"),
							className: l ? null : f.avatar
						}), (0, r.jsx)(s.Text, {
							variant: l ? "text-xs/normal" : "text-sm/normal",
							color: "text-secondary",
							className: f.username,
							children: null != (t = n.nick) ? t : a.username
						})]
					})
				},
				h = e => {
					let {
						guild: t,
						onlineCount: n
					} = e;
					if (null == t) return null;
					let i = p.Qs(t),
						{
							name: l,
							description: a
						} = i;
					return (0, r.jsxs)("div", {
						children: [(0, r.jsx)(s.X6q, {
							variant: "heading-md/normal",
							color: "header-muted",
							className: f.alignStart,
							children: m.intl.string(m.t.Eabu19)
						}), (0, r.jsxs)("div", {
							className: f.guild,
							children: [(0, r.jsx)(c.ZP, {
								mask: c.ZP.Masks.SQUIRCLE,
								width: 40,
								height: 40,
								children: (0, r.jsx)(u.Z, {
									guild: i,
									size: u.Z.Sizes.MEDIUM,
									active: !0
								})
							}), (0, r.jsxs)("div", {
								className: f.guildInfo,
								children: [(0, r.jsx)(s.X6q, {
									variant: "heading-sm/semibold",
									children: l
								}), (0, r.jsxs)("div", {
									className: f.speaker,
									children: [(0, r.jsx)("div", {
										className: f.dot
									}), null != n && n > 0 ? (0, r.jsx)(s.Text, {
										variant: "text-sm/normal",
										children: m.intl.format(m.t["LC+S+v"], {
											membersOnline: n
										})
									}) : null]
								})]
							})]
						}), null != a && "" !== a && (0, r.jsx)(s.Text, {
							color: "header-secondary",
							className: f.alignStart,
							variant: "text-sm/normal",
							children: a
						})]
					})
				},
				g = e => {
					var t;
					let {
						stageInstance: n,
						guild: l,
						isCard: d = !1,
						isEmbed: h = !1,
						onClick: g
					} = e, b = i.useMemo(() => null == l ? null : p.lM(l) ? l : p.Qs(l), [l]);
					if (null == n || null == b) return null;
					let {
						topic: E,
						speaker_count: y,
						participant_count: x
					} = n, C = null != (t = n.members) ? t : [], v = h ? C.slice(0, 3) : C, O = y - v.length;
					return h && (O += C.length - v.length), (0, r.jsxs)("div", {
						children: [(0, r.jsxs)("div", {
							className: f.flex,
							children: [(0, r.jsxs)("div", {
								className: f.flex,
								children: [(0, r.jsx)(s.ewx, {
									size: "custom",
									color: "currentColor",
									height: 24,
									width: 24,
									className: f.live
								}), (0, r.jsx)(s.X6q, {
									variant: "eyebrow",
									className: a()(f.__invalid_label, f.live),
									children: m.intl.string(m.t["X2K3//"])
								})]
							}), (0, r.jsxs)("div", {
								className: f.background,
								children: [(0, r.jsx)(s.VWR, {
									size: "custom",
									color: "currentColor",
									height: 16,
									width: 16,
									className: f.listeners
								}), (0, r.jsx)(s.X6q, {
									className: a()(f.__invalid_label, f.listeners),
									variant: "heading-sm/semibold",
									children: x
								})]
							})]
						}), h && (0, r.jsxs)("div", {
							className: a()(f.guild, {
								[f.embed]: h
							}),
							children: [(0, r.jsx)(c.ZP, {
								mask: c.ZP.Masks.SQUIRCLE,
								width: 20,
								height: 20,
								children: (0, r.jsx)(u.Z, {
									guild: b,
									size: u.Z.Sizes.MINI,
									active: !0
								})
							}), (0, r.jsx)(s.Text, {
								color: "header-secondary",
								className: f.__invalid_label,
								variant: "text-sm/normal",
								children: b.name
							})]
						}), (0, r.jsx)(s.X6q, {
							variant: d || h ? "heading-md/semibold" : "heading-lg/semibold",
							className: a()(f.header, {
								[f.embed]: h
							}),
							children: E
						}), (0, r.jsxs)("div", {
							className: a()(f.members, {
								[f.embed]: h
							}),
							children: [v.length > 0 && (0, r.jsxs)("div", {
								className: f.speakers,
								children: [v.map(e => (0, r.jsx)(_, {
									speaker: e,
									guildId: b.id,
									isEmbed: h
								}, e.user.id)), O > 0 ? (0, r.jsxs)("div", {
									className: f.speaker,
									children: [(0, r.jsx)("div", {
										className: a()(f.icon, {
											[f.embed]: h
										}),
										children: (0, r.jsx)(s.S6n, {
											size: "custom",
											color: "currentColor",
											height: h ? 12 : 14,
											className: f.listeners
										})
									}), (0, r.jsxs)(s.Text, {
										variant: h ? "text-xs/normal" : "text-sm/normal",
										color: "text-secondary",
										children: ["+", m.intl.format(m.t.L1pCBQ, {
											count: O
										})]
									})]
								}) : null]
							}), h && (0, r.jsx)(o.zx, {
								color: o.zx.Colors.GREEN,
								onClick: g,
								className: f.joinButton,
								children: m.intl.string(m.t.ZYO5OD)
							})]
						})]
					})
				}
		},
		289823: function(e, t, n) {
			n.d(t, {
				Z: () => E
			});
			var r = n(255367),
				i = n(73800),
				l = n(120356),
				a = n.n(l),
				o = n(974674),
				s = n(438784),
				c = n(481060),
				u = n(686546),
				d = n(3682),
				p = n(630403);
			let m = {},
				f = 1 / 4;

			function _(e) {
				let {
					height: t,
					fillColor: n
				} = e;
				return (0, r.jsx)("div", {
					style: {
						display: "flex",
						justifyContent: "center",
						alignItems: "center",
						borderRadius: t / 2,
						backgroundColor: n,
						height: t,
						width: t * d.jR
					},
					children: (0, r.jsx)(s.b, {
						className: p.dots,
						dotRadius: t * f
					})
				})
			}

			function h(e) {
				let {
					isTyping: t,
					statusCoords: n,
					status: i
				} = e, l = (0, c.vjg)(c.Skl.ONLINE);
				return t ? (0, r.jsx)("div", {
					style: {
						position: "absolute",
						top: n.y,
						left: n.x
					},
					children: (0, r.jsx)(_, {
						height: n.height,
						fillColor: l
					})
				}) : null != i ? (0, r.jsx)(c.qbd, {
					size: n.height,
					status: i,
					style: {
						position: "absolute",
						top: n.y,
						left: n.x
					}
				}) : null
			}

			function g(e) {
				let {
					src: t,
					size: n
				} = e;
				return (0, r.jsx)("img", {
					className: p.circularImage,
					src: t,
					alt: "",
					width: n,
					height: n
				})
			}
			let b = {
					[c.EFr.SIZE_16]: {
						default: u.QS.DIAGONAL_FACEPILE_16,
						typing: u.QS.DIAGONAL_FACEPILE_TYPING_16,
						status: u.QS.DIAGONAL_FACEPILE_STATUS_16
					},
					[c.EFr.SIZE_20]: {
						default: u.QS.DIAGONAL_FACEPILE_20,
						typing: u.QS.DIAGONAL_FACEPILE_TYPING_20,
						status: u.QS.DIAGONAL_FACEPILE_STATUS_20
					},
					[c.EFr.SIZE_24]: {
						default: u.QS.DIAGONAL_FACEPILE_24,
						typing: u.QS.DIAGONAL_FACEPILE_TYPING_24,
						status: u.QS.DIAGONAL_FACEPILE_STATUS_24
					},
					[c.EFr.SIZE_32]: {
						default: u.QS.DIAGONAL_FACEPILE_32,
						typing: u.QS.DIAGONAL_FACEPILE_TYPING_32,
						status: u.QS.DIAGONAL_FACEPILE_STATUS_32
					},
					[c.EFr.SIZE_40]: {
						default: u.QS.DIAGONAL_FACEPILE_32,
						typing: u.QS.DIAGONAL_FACEPILE_TYPING_32,
						status: u.QS.DIAGONAL_FACEPILE_STATUS_32
					},
					[c.EFr.SIZE_48]: {
						default: u.QS.DIAGONAL_FACEPILE_40,
						typing: u.QS.DIAGONAL_FACEPILE_TYPING_40,
						status: u.QS.DIAGONAL_FACEPILE_STATUS_40
					},
					[c.EFr.SIZE_56]: {
						default: u.QS.DIAGONAL_FACEPILE_56,
						typing: u.QS.DIAGONAL_FACEPILE_TYPING_56,
						status: u.QS.DIAGONAL_FACEPILE_STATUS_56
					},
					[c.EFr.SIZE_80]: {
						default: u.QS.DIAGONAL_FACEPILE_80,
						typing: u.QS.DIAGONAL_FACEPILE_TYPING_80,
						status: u.QS.DIAGONAL_FACEPILE_STATUS_80
					},
					[c.EFr.SIZE_120]: {
						default: u.QS.DIAGONAL_FACEPILE_120,
						typing: u.QS.DIAGONAL_FACEPILE_TYPING_120,
						status: u.QS.DIAGONAL_FACEPILE_STATUS_120
					}
				},
				E = function(e) {
					var t, {
							backSrc: n,
							frontSrc: l,
							size: s,
							isTyping: f,
							status: _,
							style: E,
							className: y
						} = e,
						x = function(e, t) {
							if (null == e) return {};
							var n, r, i = function(e, t) {
								if (null == e) return {};
								var n, r, i = {},
									l = Object.keys(e);
								for (r = 0; r < l.length; r++) n = l[r], t.indexOf(n) >= 0 || (i[n] = e[n]);
								return i
							}(e, t);
							if (Object.getOwnPropertySymbols) {
								var l = Object.getOwnPropertySymbols(e);
								for (r = 0; r < l.length; r++) n = l[r], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n])
							}
							return i
						}(e, ["backSrc", "frontSrc", "size", "isTyping", "status", "style", "className"]);
					let {
						size: C
					} = c.ny6[s], {
						statusCoords: v,
						frontAvatarOffsetPx: O,
						frontAvatarSizePx: j,
						backAvatarSizePx: I
					} = i.useMemo(() => {
						var e;
						let t = "".concat(C, "-").concat(f);
						return null != (e = m[t]) ? e : function(e, t, n) {
							let r = c.ny6[e],
								i = r.size / (d.z3 + d.o),
								l = i * d.z3,
								a = i * d.o,
								s = {
									statusCoords: (0, o.Vq)(r, c.Skl.ONLINE, !1, t),
									frontAvatarSizePx: l,
									backAvatarSizePx: i,
									frontAvatarOffsetPx: a,
									frontAvatarCenter: a + l / 2
								};
							return m[n] = s, s
						}(s, f, t)
					}, [C, f, s]), S = (t = null != _, f ? b[s].typing : t ? b[s].status : b[s].default);
					return (0, r.jsxs)("div", {
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
							width: C,
							height: C
						}, E),
						"aria-label": x["aria-label"],
						"aria-hidden": x["aria-hidden"],
						className: a()(p.container, y),
						children: [(0, r.jsxs)(u.ZP, {
							mask: S,
							height: C,
							width: C,
							children: [(0, r.jsx)("img", {
								src: n,
								alt: "",
								width: I,
								height: I
							}), (0, r.jsx)("div", {
								style: {
									position: "absolute",
									top: O,
									left: O
								},
								children: (0, r.jsx)(g, {
									src: l,
									size: j,
									isTyping: f,
									status: _
								})
							})]
						}), (0, r.jsx)(h, {
							statusCoords: v,
							status: _,
							isTyping: f
						})]
					})
				}
		},
		212342: function(e, t, n) {
			n.d(t, {
				Z: () => y
			}), n(388685), n(997841);
			var r, i, l, a = n(442837),
				o = n(433517),
				s = n(570140),
				c = n(314897),
				u = n(592125),
				d = n(496675),
				p = n(594174),
				m = n(630388),
				f = n(110630),
				_ = n(981631);
			let h = "ChannelFollowingBumpChannels",
				g = new Set,
				b = new Set;
			class E extends(r = a.ZP.Store) {
				initialize() {
					this.waitFor(c.default), g = new Set(o.K.get(h))
				}
				shouldShowBump(e) {
					return b.has(e)
				}
			}
			l = "ChannelFollowingPublishBumpStore", (i = "displayName") in E ? Object.defineProperty(E, i, {
				value: l,
				enumerable: !0,
				configurable: !0,
				writable: !0
			}) : E[i] = l;
			let y = new E(s.Z, {
				MESSAGE_CREATE: function(e) {
					var t;
					let {
						channelId: n,
						message: r,
						optimistic: i
					} = e;
					if (i || g.has(n)) return !1;
					let l = u.Z.getChannel(n),
						a = p.default.getCurrentUser();
					if (!(null != l && l.type === _.d4z.GUILD_ANNOUNCEMENT && (0, f.Z)(r) && (null != a && (null == (t = r.author) ? void 0 : t.id) === a.id ? d.Z.can(_.Plq.SEND_MESSAGES, l) : d.Z.can(_.Plq.MANAGE_MESSAGES, l)) && !m.yE(Number(r.flags), _.iLy.CROSSPOSTED))) return !1;
					b.add(r.id)
				},
				MESSAGE_UPDATE: function(e) {
					let {
						message: t
					} = e;
					b.has(t.id) && m.yE(Number(t.flags), _.iLy.CROSSPOSTED) && b.delete(t.id)
				},
				CHANNEL_SELECT: function(e) {
					b.clear()
				},
				CHANNEL_FOLLOWING_PUBLISH_BUMP_DISMISSED: function(e) {
					let {
						messageId: t
					} = e;
					b.delete(t)
				},
				CHANNEL_FOLLOWING_PUBLISH_BUMP_HIDE_PERMANENTLY: function(e) {
					let {
						channelId: t
					} = e;
					g.add(t), o.K.set(h, g), b.clear()
				}
			})
		},
		110630: function(e, t, n) {
			n.d(t, {
				Z: () => a
			}), n(997841);
			var r = n(978003),
				i = n(630388),
				l = n(981631);

			function a(e) {
				var t;
				return !(e.type !== l.uaV.DEFAULT || null != e.poll || (0, i.yE)(null != (t = e.flags) ? t : 0, l.iLy.EPHEMERAL) || ("messageReference" in e ? (0, r.Z)(e) : (0, r.s)(e)))
			}
		},
		222709: function(e, t, n) {
			n.d(t, {
				Z: () => m
			});
			var r = n(255367),
				i = n(73800),
				l = n(442837),
				a = n(755721),
				o = n(481060),
				s = n(528963),
				c = n(143740),
				u = n(212342),
				d = n(388032),
				p = n(745641);
			let m = e => {
				let {
					channelId: t,
					messageId: n
				} = e, m = (0, l.e7)([u.Z], () => u.Z.shouldShowBump(n), [n]), f = i.useCallback(() => {
					s.Z.dismissPublishBump(n), (0, c.Z)(t, n)
				}, [t, n]), _ = i.useCallback(() => {
					s.Z.dismissPublishBump(n)
				}, [n]), h = i.useCallback(() => {
					s.Z.permanentlyHidePublishBump(t)
				}, [t]);
				return m ? (0, r.jsxs)("div", {
					className: p.container,
					children: [(0, r.jsxs)("div", {
						className: p.bumpBox,
						children: [(0, r.jsx)(o.MqZ, {
							size: "xs",
							color: "currentColor",
							className: p.icon
						}), (0, r.jsx)(o.X6q, {
							variant: "heading-sm/normal",
							className: p.tagline,
							children: d.intl.string(d.t.hasZoa)
						}), (0, r.jsx)(a.zx, {
							color: a.zx.Colors.LINK,
							look: a.zx.Looks.LINK,
							size: a.zx.Sizes.MIN,
							className: p.publish,
							onClick: f,
							children: d.intl.string(d.t["MFGE5+"])
						}), (0, r.jsx)(o.P3F, {
							onClick: _,
							children: (0, r.jsx)(o.k$p, {
								size: "xs",
								color: "currentColor",
								className: p.closeIcon
							})
						})]
					}), (0, r.jsx)(o.Text, {
						color: "text-muted",
						className: p.hidePermanently,
						variant: "text-sm/normal",
						children: (0, r.jsx)(o.P3F, {
							onClick: h,
							children: d.intl.string(d.t.efSkDg)
						})
					})]
				}) : null
			}
		},
		115610: function(e, t, n) {
			n.d(t, {
				O: () => g
			}), n(642613), n(472816), n(794429);
			var r = n(904245),
				i = n(339085),
				l = n(957730),
				a = n(285651),
				o = n(268350),
				s = n(926491),
				c = n(373228),
				u = n(430824),
				d = n(594174),
				p = n(176354),
				m = n(709054),
				f = n(981631),
				_ = n(185923);

			function h(e) {
				let t = u.Z.getGuild(e);
				return null != t && (t.nsfwLevel === f.V_K.DEFAULT || t.nsfwLevel === f.V_K.SAFE)
			}
			async function g(e, t) {
				var n, f, g;
				let b = t.getGuildId();
				if (null == b || null == u.Z.getGuild(b)) return;
				let E = d.default.getCurrentUser();
				if (null == E) return;
				await (0, o.$p)();
				let y = Array.from(s.Z.getAllStickersIterator()),
					x = y.filter(e => e.type === c.n0.GUILD).filter(e => h(e.guild_id) && (0, a.kl)(e, E, t)).sort((e, t) => -m.default.compare(e.id, t.id));
				if (x.length > 5) {
					let i = [x[Math.floor(Math.pow(Math.random(), 2) * x.length)].id];
					r.Z.sendStickers(t.id, i, "", {
						messageReference: {
							guild_id: null != (n = t.getGuildId()) ? n : void 0,
							channel_id: t.id,
							message_id: e
						}
					});
					return
				}
				let C = u.Z.getGuildIds().filter(h).map(e => i.ZP.getUsableGuildEmoji(e)).flat().filter(e => null == p.ZP.getEmojiUnavailableReason({
					emoji: e,
					channel: t,
					guildId: b,
					intention: _.Hz.CHAT
				})).sort((e, t) => -m.default.compare(e.id, t.id));
				if (C.length > 10) {
					let n = C[Math.floor(Math.pow(Math.random(), 2) * C.length)];
					r.Z.sendMessage(t.id, l.ZP.parse(t, n.allNamesString), !1, {
						messageReference: {
							guild_id: null != (f = t.getGuildId()) ? f : void 0,
							channel_id: t.id,
							message_id: e
						}
					});
					return
				}
				let v = y.filter(e => e.type === c.n0.STANDARD),
					O = [v[Math.floor(Math.random() * v.length)].id];
				r.Z.sendStickers(t.id, O, "", {
					messageReference: {
						guild_id: null != (g = t.getGuildId()) ? g : void 0,
						channel_id: t.id,
						message_id: e
					}
				})
			}
		},
		376484: function(e, t, n) {
			n.d(t, {
				Z: () => f
			}), n(388685);
			var r = n(255367);
			n(73800);
			var i = n(120356),
				l = n.n(i),
				a = n(481060),
				o = n(446411),
				s = n(454585),
				c = n(834129),
				u = n(553385),
				d = n(981631),
				p = n(388032),
				m = n(257590);

			function f(e) {
				let {
					message: t,
					channel: i,
					compact: o
				} = e, s = null != t.embeds && t.embeds.length > 0;
				return (0, r.jsxs)("div", {
					children: [(0, r.jsx)(c.Z, {
						className: l()(m.mainContainer, {
							[m.compact]: o
						}),
						icon: n(570111),
						compact: o,
						children: (0, r.jsx)("div", {
							className: l()(m.__invalid_content, {
								[m.compact]: o
							}),
							children: (0, r.jsx)("div", {
								className: l()(m.__invalid_messageContent, {
									[m.compact]: o
								}),
								children: t.content
							})
						})
					}), (0, r.jsx)("div", {
						className: l()(m.__invalid_embedContent, {
							[m.compact]: o
						}),
						children: (0, r.jsx)(_, {
							message: t
						})
					}), (0, r.jsx)("div", {
						className: m.actions,
						children: (0, r.jsx)(a.zxk, {
							variant: "secondary",
							text: p.intl.string(p.t.zdBCIi),
							onClick: () => {
								s ? (0, u.z$)(t) : (0, u.XP)(i.guild_id, i.id, t.id)
							}
						})
					})]
				})
			}

			function _(e) {
				var t;
				let {
					message: n
				} = e, [i] = null != (t = n.embeds) ? t : [];
				return null == i ? null : (0, r.jsx)(o.ZP, {
					className: m.embed,
					embed: i,
					renderTitle: (e, t) => s.Z.parseEmbedTitle(t, !0, {
						channelId: n.channel_id
					}),
					renderDescription: (e, t, r) => s.Z.parse(t, !0, {
						channelId: n.channel_id
					}),
					autoPlayGif: !1,
					renderImageComponent: d.VqG,
					renderVideoComponent: d.VqG,
					renderLinkComponent: d.VqG
				})
			}
		},
		362604: function(e, t, n) {
			n.d(t, {
				Z: () => y
			}), n(388685), n(472816), n(794429);
			var r = n(255367),
				i = n(73800),
				l = n(120356),
				a = n.n(l),
				o = n(442837),
				s = n(755721),
				c = n(481060),
				u = n(834129),
				d = n(623292),
				p = n(926491),
				m = n(419922),
				f = n(626135),
				_ = n(585483),
				h = n(115610),
				g = n(981631),
				b = n(388032),
				E = n(711643);

			function y(e) {
				let {
					message: t,
					channel: l,
					compact: y
				} = e, x = (0, o.Wu)([p.Z], () => Array.from(p.Z.getAllGuildStickers().values()).flat()).slice(0, 20), [C, v] = i.useState(null);
				return (i.useEffect(() => {
					let e = setInterval(() => {
						x.length > 0 && v(x[Math.floor(Math.random() * x.length)])
					}, 500);
					return () => clearInterval(e)
				}, [x]), null == l.guild_id) ? null : (0, r.jsxs)("div", {
					children: [(0, r.jsx)(u.Z, {
						className: a()(E.mainContainer, {
							[E.compact]: y
						}),
						icon: n(570111),
						compact: y,
						children: (0, r.jsx)("div", {
							className: a()(E.__invalid_content, {
								[E.compact]: y
							}),
							children: (0, r.jsx)("div", {
								className: a()(E.__invalid_messageContent, {
									[E.compact]: y
								}),
								children: "" !== t.content ? t.content : b.intl.string(b.t.wnn1DQ)
							})
						})
					}), (0, r.jsxs)("div", {
						className: E.actions,
						children: [(0, r.jsx)(c.DY3, {
							text: b.intl.string(b.t.ASZTf3),
							children: (0, r.jsx)(s.zx, {
								color: s.zx.Colors.PRIMARY,
								onClick: () => {
									f.default.track(g.rMx.CHANNEL_PROMPT_ACTION_CLICKED, {
										message_id: t.id,
										channel_id: l.id,
										guild_id: l.guild_id,
										action_type: "upload_file"
									}), _.S.dispatch(g.CkL.UPLOAD_FILE), (0, d.fE)({
										message: t,
										channel: l,
										shouldMention: !0
									})
								},
								children: (0, r.jsx)(c.FmF, {
									size: "md",
									color: "currentColor"
								})
							})
						}), (0, r.jsx)(c.DY3, {
							text: b.intl.string(b.t.gbrrAw),
							children: (0, r.jsx)(s.zx, {
								color: s.zx.Colors.PRIMARY,
								onClick: () => {
									f.default.track(g.rMx.CHANNEL_PROMPT_ACTION_CLICKED, {
										message_id: t.id,
										channel_id: l.id,
										guild_id: l.guild_id,
										action_type: "sticker"
									}), (0, h.O)(t.id, l)
								},
								children: null != C ? (0, r.jsx)(m.Z, {
									size: 32,
									sticker: C
								}) : (0, r.jsx)(c.EO4, {
									size: "md",
									color: "currentColor"
								})
							})
						})]
					})]
				})
			}
		},
		778087: function(e, t, n) {
			n.d(t, {
				Z: () => l
			}), n(49124), n(781311);
			var r = n(73800),
				i = n(10718);

			function l(e, t) {
				let n = r.useRef(null),
					l = r.useCallback((e, t) => {
						var r, i, l;
						e.preventDefault(), e.clipboardData.setData("application/x-discord-interaction-data", JSON.stringify(t)), e.clipboardData.setData("text/plain", null != (l = null == (i = n.current) || null == (r = i.textContent) ? void 0 : r.trim()) ? l : "")
					}, []);
				return i.YZ({
					channel: e,
					type: "channel"
				}, t), {
					onCopy: l,
					copyRef: n
				}
			}
		},
		115215: function(e, t, n) {
			n.d(t, {
				t: () => l
			});
			var r = n(602715),
				i = n(630388);

			function l(e) {
				var t;
				return (0, i.yE)(null != (t = e.recipientFlags) ? t : 0, r.V.DISMISSED_CURRENT_CHAT_WALLPAPER)
			}
		},
		66420: function(e, t, n) {
			n.d(t, {
				Z: () => s
			});
			var r = n(255367),
				i = n(657707),
				l = n(793030),
				a = n(834129),
				o = n(510064);

			function s(e) {
				let {
					channel: t,
					message: n,
					content: s,
					subtitle: c,
					compact: u,
					action: d
				} = e, p = n.reactions.length > 0;
				return (0, r.jsxs)(a.Z, {
					iconNode: t.isGroupDM() ? (0, r.jsx)(i.Dkj, {
						size: "md",
						color: "var(--premium-tier-2-purple-for-gradients-2)"
					}) : (0, r.jsx)(i.vdY, {
						size: "md",
						color: "var(--premium-tier-2-purple-for-gradients-2)"
					}),
					iconContainerClassName: o.iconContainer,
					compact: u,
					contentClassName: o.content,
					className: p ? o.withReactions : o.noReactions,
					children: [(0, r.jsxs)("div", {
						className: o.textContainer,
						children: [(0, r.jsx)(l.xv, {
							variant: "text-md/medium",
							color: "header-primary",
							children: s
						}), null != c && (0, r.jsx)(l.xv, {
							variant: "text-sm/medium",
							color: "text-secondary",
							children: c
						})]
					}), d]
				})
			}
		},
		479110: function(e, t, n) {
			n.d(t, {
				Z: () => c
			});
			var r = n(255367),
				i = n(442837),
				l = n(739566),
				a = n(594174),
				o = n(66420),
				s = n(388032);

			function c(e) {
				let {
					message: t,
					channel: n,
					compact: c
				} = e, u = (0, i.e7)([a.default], () => a.default.getCurrentUser()), d = (0, l.ZP)(t), p = (null == u ? void 0 : u.id) === t.author.id ? s.intl.string(s.t.huMLgY) : s.intl.format(s.t.PVAL4O, {
					username: null == d ? void 0 : d.nick
				});
				return (0, r.jsx)(o.Z, {
					channel: n,
					message: t,
					compact: c,
					content: p
				})
			}
		},
		413189: function(e, t, n) {
			n.d(t, {
				Z: () => O
			});
			var r = n(255367),
				i = n(73800),
				l = n(442837),
				a = n(755721),
				o = n(481060),
				s = n(410030),
				c = n(739566),
				u = n(612659),
				d = n(703656),
				p = n(594174),
				m = n(63063),
				f = n(436952),
				_ = n(411149),
				h = n(115215),
				g = n(151480),
				b = n(680783),
				E = n(66420),
				y = n(981631),
				x = n(474936),
				C = n(388032),
				v = n(510064);

			function O(e) {
				var t, n, O, j;
				let I, S, T, {
						message: N,
						channel: P,
						compact: A
					} = e,
					w = null == (t = N.chatWallpaperInfo) ? void 0 : t.wallpaperId,
					{
						enabled: Z
					} = (0, f.sX)({
						location: "ChatWallpaperSetSystemMessage"
					}),
					R = f.qM.useExperiment({
						location: "ChatWallpaperSetSystemMessage"
					}).lightMode,
					k = (0, c.ZP)(N),
					L = (0, o.wjy)((0, s.ZP)()),
					{
						chatWallpaper: D,
						isUpdatingChatWallpaperFlag: M,
						lastSetMessageId: U
					} = (0, l.cj)([_.Z], () => ({
						chatWallpaper: _.Z.getWallpaperById(w),
						isUpdatingChatWallpaperFlag: _.Z.isUpdatingChatWallpaperFlagForChannel(P.id),
						lastSetMessageId: _.Z.getLastSetWallpaperMessageIdForChannel(P.id)
					})),
					F = (0, b.Z)(P.id),
					B = U === N.id,
					G = (0, l.e7)([p.default], () => p.default.getCurrentUser()),
					H = (null == G ? void 0 : G.id) === N.author.id,
					V = (0, u.m)(x.p9.TIER_2),
					z = h.t(P);
				return (i.useEffect(() => {
					null == D && _.Z.shouldFetchWallpapers && g.k9()
				}, [D]), null == w) ? null : (I = H ? C.intl.format(C.t.z847Tk, {
					wallpaper_name: null != (n = null == D ? void 0 : D.label) ? n : C.intl.string(C.t["UQMV/P"])
				}) : C.intl.format(C.t["+lKndX"], {
					username: null == k ? void 0 : k.nick,
					wallpaper_name: null != (O = null == D ? void 0 : D.label) ? O : C.intl.string(C.t["UQMV/P"])
				}), Z ? L || R ? z && B ? S = C.intl.formatToPlainString(C.t.PzTpVV, {
					wallpaperName: null != (j = null == D ? void 0 : D.label) ? j : C.intl.string(C.t["UQMV/P"])
				}) : H || V || !B || (S = C.intl.format(C.t.JwUhHh, {
					onClickNitro: () => {
						(0, d.uL)(y.Z5c.NITRO_HOME)
					}
				})) : S = C.intl.format(C.t.dBxFsL, {
					learnMoreLink: m.Z.getArticleURL(y.BhN.DM_WALLPAPERS)
				}) : S = C.intl.string(C.t["6JSOu7"]), (null == F ? void 0 : F.isViewable) && B && !H && (T = (0, r.jsx)(a.zx, {
					className: v.action,
					onClick: () => {
						g.X(P, w, {
							shouldClear: !z,
							onError: () => {
								(0, o.showToast)((0, o.createToast)(C.intl.string(C.t.F8FvU1), o.ToastType.FAILURE))
							}
						})
					},
					submitting: M,
					children: C.intl.string(z ? C.t.o6850d : C.t["/ubFp6"])
				})), (0, r.jsx)(E.Z, {
					channel: P,
					content: I,
					subtitle: S,
					action: T,
					compact: A,
					message: N
				}))
			}
		},
		679056: function(e, t, n) {
			n.d(t, {
				Z: () => c
			}), n(388685);
			var r, i = n(255367),
				l = n(73800),
				a = n(846519);

			function o(e, t, n) {
				return t in e ? Object.defineProperty(e, t, {
					value: n,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : e[t] = n, e
			}
			class s extends(r = l.Component) {
				static getDerivedStateFromProps(e) {
					return e.disable ? {
						hovered: !1
					} : null
				}
				componentDidMount() {
					let {
						pauseOnHover: e,
						disable: t
					} = this.props, n = this.state.hovered && e;
					t || n || this.startTimer()
				}
				componentWillUnmount() {
					this.stopTimer()
				}
				componentDidUpdate(e, t) {
					let {
						props: n
					} = this, r = (e, t) => !e.disable && !(t.hovered && e.pauseOnHover), i = r(n, this.state), l = r(e, t);
					i && !l || e.interval !== n.interval ? this.startTimer() : !i && l && this.stopTimer()
				}
				startTimer() {
					let {
						interval: e,
						onInterval: t,
						disable: n
					} = this.props;
					n || this.timer.start(e, () => {
						t()
					})
				}
				stopTimer() {
					this.timer.stop()
				}
				render() {
					var e, t;
					let {
						children: n,
						className: r,
						disable: l
					} = this.props, a = l ? null : {
						onMouseEnter: this.handlePause,
						onFocus: this.handlePause,
						onMouseLeave: this.handleResume,
						onBlur: this.handleResume
					};
					return (0, i.jsx)("div", (e = function(e) {
						for (var t = 1; t < arguments.length; t++) {
							var n = null != arguments[t] ? arguments[t] : {},
								r = Object.keys(n);
							"function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
								return Object.getOwnPropertyDescriptor(n, e).enumerable
							}))), r.forEach(function(t) {
								o(e, t, n[t])
							})
						}
						return e
					}({}, a), t = t = {
						className: r,
						children: n
					}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : (function(e, t) {
						var n = Object.keys(e);
						if (Object.getOwnPropertySymbols) {
							var r = Object.getOwnPropertySymbols(e);
							n.push.apply(n, r)
						}
						return n
					})(Object(t)).forEach(function(n) {
						Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
					}), e))
				}
				constructor(...e) {
					super(...e), o(this, "timer", new a.Xp), o(this, "state", {
						hovered: !1
					}), o(this, "handlePause", () => {
						this.state.hovered || this.setState({
							hovered: !0
						})
					}), o(this, "handleResume", () => {
						this.setState({
							hovered: !1
						})
					})
				}
			}
			o(s, "defaultProps", {
				disable: !1,
				pauseOnHover: !1
			});
			let c = s
		},
		17079: function(e, t, n) {
			n.d(t, {
				T: () => l
			});
			var r = n(570140),
				i = n(155414);
			async function l(e, t) {
				r.Z.dispatch({
					type: "CREATOR_MONETIZATION_PRICE_TIERS_FETCH",
					guildId: e,
					priceTierType: t
				});
				try {
					let n = await i.X(e, t);
					r.Z.dispatch({
						type: "CREATOR_MONETIZATION_PRICE_TIERS_FETCH_SUCCESS",
						guildId: e,
						priceTierType: t,
						priceTiers: n
					})
				} catch (n) {
					r.Z.dispatch({
						type: "CREATOR_MONETIZATION_PRICE_TIERS_FETCH_FAILURE",
						guildId: e,
						priceTierType: t
					})
				}
			}
		},
		76535: function(e, t, n) {
			n.d(t, {
				H: () => c,
				R: () => s
			});
			var r = n(73800),
				i = n(442837),
				l = n(584825),
				a = n(17079),
				o = n(281320);

			function s(e, t) {
				let n = (0, i.e7)([o.Z], () => o.Z.getPriceTiersForGuildAndType(e, t)),
					l = (0, i.e7)([o.Z], () => o.Z.getPriceTiersFetchStateForGuildAndType(e, t));
				return r.useEffect(() => {
					l === o.M.NOT_FETCHED && (0, a.T)(e, t)
				}, [e, l, t]), {
					loading: l === o.M.FETCHING,
					priceTiers: n
				}
			}

			function c(e) {
				let {
					fetchSubscriptionsSettings: t,
					loading: n,
					error: i
				} = (0, l.JH)();
				r.useEffect(() => {
					t(e)
				}, [t, e]);
				let a = (0, l.YB)(e);
				return {
					loaded: null != a && !n,
					subscriptionsSettings: a,
					loading: n,
					error: i
				}
			}
		},
		155414: function(e, t, n) {
			n.d(t, {
				X: () => a
			});
			var r = n(544891),
				i = n(881052),
				l = n(981631);
			let a = async (e, t) => {
				try {
					return (await r.tn.get({
						url: l.ANM.PRICE_TIERS,
						query: {
							price_tier_type: t,
							guild_id: e
						},
						rejectWithError: !1
					})).body
				} catch (e) {
					throw new i.Hx(e)
				}
			}
		},
		281320: function(e, t, n) {
			n.d(t, {
				M: () => d,
				Z: () => m
			}), n(388685);
			var r, i, l, a, o = n(442837),
				s = n(570140);
			let c = new Map,
				u = new Map;
			var d = ((i = {})[i.NOT_FETCHED = 0] = "NOT_FETCHED", i[i.FETCHING = 1] = "FETCHING", i[i.FETCHED = 2] = "FETCHED", i);
			class p extends(r = o.ZP.Store) {
				getPriceTiersFetchStateForGuildAndType(e, t) {
					var n, r;
					return null != (r = null == (n = u.get(e)) ? void 0 : n.get(t)) ? r : 0
				}
				getPriceTiersForGuildAndType(e, t) {
					var n;
					return null == (n = c.get(e)) ? void 0 : n.get(t)
				}
			}
			a = "CreatorMonetizationStore", (l = "displayName") in p ? Object.defineProperty(p, l, {
				value: a,
				enumerable: !0,
				configurable: !0,
				writable: !0
			}) : p[l] = a;
			let m = new p(s.Z, {
				CONNECTION_OPEN: function() {
					c.clear(), u.clear()
				},
				CREATOR_MONETIZATION_PRICE_TIERS_FETCH: function(e) {
					let {
						guildId: t,
						priceTierType: n
					} = e;
					u.has(t) || u.set(t, new Map), u.get(t).set(n, 1)
				},
				CREATOR_MONETIZATION_PRICE_TIERS_FETCH_SUCCESS: function(e) {
					let {
						guildId: t,
						priceTierType: n,
						priceTiers: r
					} = e;
					u.has(t) || u.set(t, new Map), u.get(t).set(n, 2), c.has(t) || c.set(t, new Map), c.get(t).set(n, r)
				},
				CREATOR_MONETIZATION_PRICE_TIERS_FETCH_FAILURE: function(e) {
					let {
						guildId: t,
						priceTierType: n
					} = e;
					u.has(t) || u.set(t, new Map), u.get(t).set(n, 2)
				}
			})
		},
		834431: function(e, t, n) {
			n.d(t, {
				n: () => i
			});
			var r = n(506071);

			function i() {
				return (0, r.n)()
			}
		},
		166081: function(e, t, n) {
			n.d(t, {
				U: () => o
			});
			var r = n(73800),
				i = n(695346),
				l = n(73346),
				a = n(834431);

			function o(e, t) {
				let {
					shouldAnimate: n = !0
				} = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {}, o = i.QK.useSetting(), s = (0, a.n)(), c = n && s && o;
				return r.useMemo(() => {
					if ((null == e ? void 0 : e.image_asset) != null) return (0, l._W)(e.application_id, e.image_asset, t, c ? void 0 : "webp")
				}, [t, e, c])
			}
		},
		161314: function(e, t, n) {
			n.d(t, {
				Z: () => I
			}), n(388685), n(953529);
			var r = n(255367),
				i = n(73800),
				l = n(120356),
				a = n.n(l),
				o = n(990547),
				s = n(831209),
				c = n(442837),
				u = n(755721),
				d = n(481060),
				p = n(367907),
				m = n(213609),
				f = n(565138),
				_ = n(267101),
				h = n(336197),
				g = n(661824),
				b = n(430824),
				E = n(626135),
				y = n(76535),
				x = n(866104),
				C = n(886176),
				v = n(981631),
				O = n(388032),
				j = n(24665);

			function I(e) {
				var t;
				let {
					guildId: n
				} = e, l = (0, c.e7)([b.Z], () => b.Z.getGuild(n)), {
					loading: I,
					subscriptionsSettings: S
				} = (0, y.H)(n), {
					listingsLoaded: T
				} = (0, _.eD)(n), N = (0, _.ue)(n, {
					publishedOnly: !0
				}), P = i.useCallback(async () => {
					E.default.track(v.rMx.GUILD_SHOP_EMBED_CLICKED, function(e) {
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
					}({}, (0, p.hH)(n))), await (0, h.Z)(v.Z5c.SERVER_SHOP(n))
				}, [n]);
				(0, m.Z)({
					type: o.ImpressionTypes.VIEW,
					name: o.ImpressionNames.GUILD_SHOP_EMBED
				}, {
					disableTrack: null == l
				});
				let A = N.length > 0 ? new Date(Math.min(...N.map(e => Date.parse(e.published_at)))) : void 0;
				return I || !T ? (0, r.jsx)("div", {
					className: a()(j.guildShopEmbed, j.spinnerContainer),
					children: (0, r.jsx)(d.$jN, {})
				}) : null == l || null == S ? null : (0, r.jsxs)("div", {
					className: j.guildShopEmbed,
					children: [(0, r.jsx)(x.Z, {
						coverImageAsset: null != (t = S.cover_image_asset) ? t : null
					}), (0, r.jsx)(d.LZC, {
						size: 16
					}), (0, r.jsxs)("div", {
						className: j.serverShopLabel,
						children: [(0, r.jsx)(C.Z, {
							height: "16px",
							width: "16px",
							color: s.Z.INTERACTIVE_NORMAL
						}), (0, r.jsx)(d.X6q, {
							variant: "heading-sm/semibold",
							color: "interactive-normal",
							className: j.serverShopLabelText,
							children: O.intl.string(O.t.al5EXF)
						})]
					}), (0, r.jsx)(d.LZC, {
						size: 16
					}), (0, r.jsx)(d.X6q, {
						variant: "heading-md/semibold",
						color: "text-default",
						children: O.intl.format(O.t.NZeik5, {
							guildName: l.name
						})
					}), (0, r.jsx)(d.LZC, {
						size: 4
					}), (0, r.jsx)(d.Text, {
						variant: "text-sm/normal",
						color: "text-muted",
						lineClamp: 2,
						children: S.description
					}), (0, r.jsx)(d.LZC, {
						size: 16
					}), (0, r.jsx)(g.Z, {}), (0, r.jsx)(d.LZC, {
						size: 16
					}), (0, r.jsxs)("div", {
						className: j.guildShopEmbedFooter,
						children: [(0, r.jsx)(f.Z, {
							guild: l
						}), (0, r.jsxs)("ul", {
							className: j.guildShopSummary,
							children: [(0, r.jsx)("li", {
								children: (0, r.jsx)(d.Text, {
									variant: "text-sm/normal",
									color: "text-muted",
									children: O.intl.format(O.t.tKZNlZ, {
										listingCount: N.length
									})
								})
							}), null != A && (0, r.jsx)("li", {
								children: (0, r.jsx)(d.Text, {
									variant: "text-sm/normal",
									color: "text-muted",
									children: O.intl.format(O.t["kXr8+f"], {
										createdYear: A.getFullYear()
									})
								})
							})]
						}), (0, r.jsx)(u.zx, {
							className: j.guildShopEmbedCta,
							onClick: P,
							children: (0, r.jsxs)("div", {
								className: j.guildShopEmbedCtaContent,
								children: [(0, r.jsx)(C.Z, {
									height: "18px",
									width: "18px"
								}), (0, r.jsx)(d.Text, {
									variant: "text-sm/medium",
									color: "always-white",
									children: O.intl.string(O.t.jXx1CA)
								})]
							})
						})]
					})]
				})
			}
		},
		866104: function(e, t, n) {
			n.d(t, {
				C: () => T,
				Z: () => S
			}), n(388685), n(953529), n(781311);
			var r = n(255367),
				i = n(73800),
				l = n(512722),
				a = n.n(l),
				o = n(442837),
				s = n(481060),
				c = n(131388),
				u = n(357352),
				d = n(70097),
				p = n(565138),
				m = n(353254),
				f = n(695346),
				_ = n(271383),
				h = n(594174),
				g = n(671533),
				b = n(51144),
				E = n(506071),
				y = n(696014),
				x = n(847033),
				C = n(544978),
				v = n(893182),
				O = n(388032),
				j = n(414521);

			function I(e) {
				let {
					onClick: t
				} = e;
				return (0, r.jsxs)(s.P3F, {
					onClick: t,
					className: j.showMoreButton,
					children: [(0, r.jsx)(s.Text, {
						variant: "text-sm/medium",
						color: "header-primary",
						children: O.intl.string(O.t.J4cw1t)
					}), (0, r.jsx)(s.LZC, {
						size: 4,
						horizontal: !0
					}), (0, r.jsx)(g.Z, {
						direction: g.Z.Directions.RIGHT,
						className: j.showMoreArrow
					})]
				})
			}

			function S(e) {
				let {
					coverImageAsset: t,
					isPreview: n = !1
				} = e, i = f.QK.useSetting(), l = (0, E.n)() && i, [a, o] = (0, m.Z)(t, l), s = l ? (0, r.jsx)(d.Z, {
					autoPlay: !0,
					loop: !0,
					className: j.coverImage,
					width: 655,
					poster: (0, u.b)("server_products/storefront/default-header.png"),
					src: (0, u.b)("server_products/storefront/default-header.mov")
				}) : (0, r.jsx)("img", {
					src: (0, u.b)("server_products/storefront/default-header.png"),
					alt: "",
					className: j.coverImage
				});
				return (0, r.jsx)("div", {
					ref: a,
					className: j.coverImageContainer,
					children: null == o || n ? s : (0, r.jsx)("img", {
						src: o,
						alt: "",
						className: j.coverImage
					})
				})
			}

			function T(e) {
				var t, n;
				let {
					guild: l,
					subscriptionsSettings: d
				} = e, m = l.id, {
					nickname: f,
					nickcolor: g
				} = (0, o.cj)([_.ZP, h.default], () => {
					var e, t;
					let n = h.default.getCurrentUser();
					a()(null != n, "user cannot be null");
					let r = _.ZP.getMember(m, n.id);
					return {
						nickname: null != (e = null == r ? void 0 : r.nick) ? e : b.ZP.getName(n),
						nickcolor: null != (t = null == r ? void 0 : r.colorString) ? t : void 0
					}
				}, [m]), {
					isTruncated: E,
					ExpandableTextContainer: T
				} = (0, y.s)(), N = (null != (n = null == d || null == (t = d.description) ? void 0 : t.trim().length) ? n : 0) > 0, [P, A] = i.useState(1), w = (0, c.Z)("(max-width: 1439px)"), {
					selectedTab: Z,
					isPhantomPreview: R
				} = (0, x.m)(), k = Z === C.y.GUILD_PRODUCTS_PREVIEW ? O.intl.string(O.t["LvXy/P"]) : O.intl.string(O.t.XyqKh4), L = N ? (0, r.jsxs)(r.Fragment, {
					children: [(0, r.jsx)(T, {
						lineClamp: w || 2 === P ? 2 : 3,
						children: (0, r.jsx)(s.Text, {
							variant: "text-sm/normal",
							color: "text-default",
							children: null == d ? void 0 : d.description
						})
					}), E && (0, r.jsxs)(r.Fragment, {
						children: [(0, r.jsx)(s.LZC, {
							size: 4
						}), (0, r.jsx)(I, {
							onClick: () => (0, v.Z)({
								guildId: m
							})
						})]
					})]
				}) : (0, r.jsx)(s.Text, {
					variant: "text-sm/normal",
					color: "text-default",
					children: R ? k : O.intl.string(O.t["NY/FIS"])
				});
				return (0, r.jsxs)("div", {
					className: j.container,
					children: [(0, r.jsxs)("div", {
						className: j.infoContainer,
						children: [(0, r.jsx)("div", {
							children: (0, r.jsx)(p.Z, {
								guild: l,
								size: p.Z.Sizes.LARGER,
								iconSrc: null == l.icon || R ? (0, u.b)("server_products/storefront/default-guild-icon.jpg") : void 0
							})
						}), (0, r.jsx)(s.LZC, {
							size: 16,
							horizontal: !0
						}), (0, r.jsxs)("div", {
							children: [(0, r.jsx)("div", {
								ref: e => {
									null != e && e.clientHeight > 30 && A(2)
								},
								children: (0, r.jsx)(s.X6q, {
									variant: "heading-xl/semibold",
									color: "header-primary",
									lineClamp: 2,
									children: R ? O.intl.string(O.t.rtgp7u) : O.intl.formatToPlainString(O.t.NZeik5, {
										guildName: l.name
									})
								})
							}), (0, r.jsx)(s.LZC, {
								size: 8
							}), (0, r.jsx)(s.Text, {
								variant: "text-md/normal",
								color: "text-default",
								children: O.intl.format(O.t["7JwrlJ"], {
									username: f,
									usernameHook: function(e, t) {
										return (0, r.jsx)("span", {
											style: {
												color: g
											},
											children: e
										}, t)
									}
								})
							}), (0, r.jsx)(s.LZC, {
								size: 9
							}), L]
						})]
					}), (0, r.jsx)(S, {
						coverImageAsset: null == d ? void 0 : d.cover_image_asset,
						isPreview: R
					})]
				})
			}
		},
		886176: function(e, t, n) {
			n.d(t, {
				Z: () => l
			});
			var r = n(255367);
			n(73800);
			var i = n(325767);

			function l(e) {
				var t, n, {
						width: l = 24,
						height: a = 24,
						color: o = "currentColor"
					} = e,
					s = function(e, t) {
						if (null == e) return {};
						var n, r, i = function(e, t) {
							if (null == e) return {};
							var n, r, i = {},
								l = Object.keys(e);
							for (r = 0; r < l.length; r++) n = l[r], t.indexOf(n) >= 0 || (i[n] = e[n]);
							return i
						}(e, t);
						if (Object.getOwnPropertySymbols) {
							var l = Object.getOwnPropertySymbols(e);
							for (r = 0; r < l.length; r++) n = l[r], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n])
						}
						return i
					}(e, ["width", "height", "color"]);
				return (0, r.jsxs)("svg", (t = function(e) {
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
				}({}, (0, i.Z)(s)), n = n = {
					xmlns: "http://www.w3.org/2000/svg",
					width: l,
					height: a,
					viewBox: "0 0 20 20",
					fill: "none",
					children: [(0, r.jsxs)("g", {
						"clip-path": "url(#clip0_2645_182555)",
						children: [(0, r.jsx)("path", {
							fillRule: "evenodd",
							clipRule: "evenodd",
							d: "M13.6698 8.91016C14.5646 10.1567 16.3407 10.3342 17.4866 9.44283C17.4957 9.46624 17.5008 9.49191 17.5008 9.51916V15.8337C17.5008 17.2144 16.3815 18.3337 15.0008 18.3337H12.7092C12.5941 18.3337 12.5008 18.2404 12.5008 18.1253V13.3337C12.5008 12.4132 11.7547 11.667 10.8342 11.667H9.16748C8.24699 11.667 7.5008 12.4132 7.5008 13.3337V18.1253C7.5008 18.2404 7.40753 18.3337 7.29247 18.3337H5.0008C3.62009 18.3337 2.5008 17.2144 2.5008 15.8337V9.51916C2.5008 9.36341 2.66628 9.26158 2.81091 9.31949C3.23542 9.48933 3.70172 9.58366 4.19593 9.58366C5.27336 9.58366 6.24385 9.12583 6.92345 8.39408C7.0135 8.29708 7.17004 8.29679 7.26039 8.39349C7.94479 9.12583 8.91932 9.58366 10.0008 9.58366C11.0823 9.58366 12.0568 9.12583 12.7412 8.39349C12.8316 8.29679 12.9882 8.29708 13.0782 8.39408C13.2565 8.58599 13.4548 8.75916 13.6698 8.91016ZM11.7497 6.67891C9.42957 5.8204 9.4179 2.5511 11.7147 1.6683C11.699 1.66743 11.6833 1.66699 11.6675 1.66699H8.33415C7.87391 1.66699 7.50082 2.04009 7.50082 2.50033V5.83366C7.50082 5.87681 7.50191 5.9197 7.50407 5.96231C7.52181 6.31232 7.61153 6.64333 7.75873 6.94085C7.77282 6.96931 7.78743 6.99747 7.80255 7.02531C8.2259 7.80462 9.05157 8.33366 10.0008 8.33366C10.984 8.33366 11.8346 7.76614 12.2429 6.94084L12.2543 6.91751C12.2613 6.90286 12.2682 6.88812 12.2751 6.87331L11.7497 6.67891ZM15.8231 8.3336C15.4338 8.32949 15.0467 8.10931 14.8853 7.67305L14.4606 6.52524C14.2917 6.06904 13.9321 5.70936 13.4759 5.54055L13.3342 5.4881V2.84588L13.4759 2.79343C13.9321 2.62463 14.2917 2.26494 14.4606 1.80874L14.5131 1.66699H15.2462C16.3397 1.66699 17.3062 2.37762 17.6324 3.42131L18.1647 5.12491C18.2057 5.25598 18.2352 5.38724 18.254 5.51775L18.1924 5.54055C17.7361 5.70936 17.3765 6.06904 17.2077 6.52524L16.783 7.67305C16.627 8.09458 16.2603 8.31438 15.8847 8.33245C15.8642 8.33308 15.8437 8.33346 15.8231 8.3336ZM12.5008 3.15424V5.17974L12.3281 5.11583C11.4472 4.78989 11.4472 3.54409 12.3281 3.21816L12.5008 3.15424ZM4.75546 1.66699C3.662 1.66699 2.69541 2.37762 2.36926 3.4213L1.83688 5.12491C1.52876 6.11092 1.8679 7.1068 2.56708 7.72187C2.99643 8.09957 3.56156 8.33366 4.19593 8.33366C5.13437 8.33366 5.95065 7.81064 6.36917 7.04019C6.38619 7.00888 6.40255 6.97714 6.41823 6.94502C6.57788 6.618 6.66748 6.25052 6.66748 5.86211V2.50033C6.66748 2.04009 6.29438 1.66699 5.83415 1.66699H4.75546Z",
							fill: o
						}), (0, r.jsx)("path", {
							d: "M14.8838 0.660607C15.2097 -0.220202 16.4556 -0.220202 16.7815 0.660607L17.2062 1.80842C17.375 2.26462 17.7347 2.6243 18.1909 2.79311L19.3387 3.21783C20.2195 3.54377 20.2195 4.78957 19.3387 5.1155L18.1909 5.54023C17.7347 5.70903 17.375 6.06872 17.2062 6.52492L16.7815 7.67272C16.4556 8.5535 15.2097 8.5535 14.8838 7.67272L14.4591 6.52492C14.2903 6.06872 13.9306 5.70903 13.4744 5.54023L12.3266 5.1155C11.4458 4.78957 11.4458 3.54377 12.3266 3.21783L13.4744 2.79311C13.9306 2.6243 14.2903 2.26462 14.4591 1.80842L14.8838 0.660607Z",
							fill: o
						})]
					}), (0, r.jsx)("defs", {
						children: (0, r.jsx)("clipPath", {
							id: "clip0_2645_182555",
							children: (0, r.jsx)("rect", {
								width: "20",
								height: "20",
								fill: "white"
							})
						})
					})]
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
		},
		741914: function(e, t, n) {
			n.d(t, {
				Z: () => m
			});
			var r = n(392711),
				i = n.n(r),
				l = n(723454),
				a = n(428595),
				o = n(454585);

			function s(e) {
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

			function c(e, t) {
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
			let u = i().omit(a.Z.RULES, ["codeBlock", "heading"]),
				d = c(s({}, l.Z), {
					parse: function(e, t, n) {
						var r;
						let i = l.Z.parse(e, t, n),
							a = Math.min(6, (null != (r = n.initialHeaderLevel) ? r : 3) + i.level);
						return c(s({}, i), {
							level: a
						})
					}
				}),
				p = o.Z.combineAndInjectMentionRule(u, [o.Z.createReactRules(o.Z.defaultReactRuleOptions), {
					header: d
				}]),
				m = o.Z.reactParserFor(p)
		},
		54797: function(e, t, n) {
			n.d(t, {
				x: () => l
			});
			var r = n(255367);
			n(73800);
			var i = n(481060);

			function l(e) {
				let {
					listing: t
				} = e;
				(0, i.ZDy)(async () => {
					let {
						default: e
					} = await n.e("95480").then(n.bind(n, 275869));
					return n => (0, r.jsx)(e, function(e) {
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
						listing: t
					}, n))
				})
			}
		},
		240657: function(e, t, n) {
			n.d(t, {
				Z: () => d
			});
			var r = n(255367),
				i = n(73800),
				l = n(120356),
				a = n.n(l),
				o = n(481060),
				s = n(741914),
				c = n(497646),
				u = n(73433);

			function d(e) {
				let {
					color: t,
					className: n,
					variant: l,
					text: d,
					lineClamp: p
				} = e, m = (0, o.xSt)(), f = i.useMemo(() => null == d ? null : (0, s.Z)(d, !0, {
					allowHeading: null == p,
					allowList: null == p,
					initialHeaderLevel: m
				}), [d, p, m]);
				return (0, r.jsx)(o.Text, {
					className: a()(n, u.markup, {
						[c.lineClamp2Plus]: null != p && p > 1,
						[c.lineClamp1]: 1 === p
					}),
					color: t,
					variant: l,
					lineClamp: p,
					children: f
				})
			}
		},
		765400: function(e, t, n) {
			n.d(t, {
				v: () => o
			});
			var r = n(255367);
			n(73800);
			var i = n(481060),
				l = n(388032),
				a = n(233741);
			let o = () => (0, r.jsx)(i.IGR, {
				color: i.TVs.unsafe_rawColors.YELLOW_300.css,
				text: l.intl.string(l.t.vosPk5),
				className: a.draftBadge
			})
		},
		431583: function(e, t, n) {
			n.r(t), n.d(t, {
				default: () => S
			}), n(388685);
			var r = n(255367),
				i = n(73800),
				l = n(120356),
				a = n.n(l),
				o = n(525654),
				s = n.n(o),
				c = n(873546),
				u = n(213919),
				d = n(442837),
				p = n(755721),
				m = n(481060),
				f = n(391650),
				_ = n(313201),
				h = n(314897),
				g = n(594174),
				b = n(626135),
				E = n(361207),
				y = n(981631),
				x = n(388032),
				C = n(246404);
			let v = [{
					getOs: () => x.intl.string(x.t.NK5ySE),
					icon: C.apple,
					url: () => (0, E.w4)("osx", !1),
					platformKey: 0
				}, {
					getOs: () => x.intl.string(x.t.OvKGEx),
					icon: C.windows,
					url: () => (0, E.w4)("win", !1),
					platformKey: 1
				}, {
					getOs: () => x.intl.string(x.t.dJB4PD),
					icon: C.linux,
					url: [{
						url: () => (0, E.w4)("linux", !1, "deb"),
						getText: () => x.intl.string(x.t.Sodsur)
					}, {
						url: () => (0, E.w4)("linux", !1, "tar.gz"),
						getText: () => x.intl.string(x.t.G3U6IS)
					}],
					platformKey: 2
				}],
				O = [{
					getOs: () => x.intl.string(x.t.wCVyNT),
					icon: C.ios,
					url: () => y.fzT.IOS,
					platformKey: 3
				}, {
					getOs: () => x.intl.string(x.t.wuQpJC),
					icon: C.android,
					url: () => y.fzT.ANDROID,
					platformKey: 4
				}],
				j = e => {
					let {
						url: t,
						text: n,
						onClick: i
					} = e, l = (0, p.nY)({
						grow: !0
					});
					return (0, r.jsx)(m.eee, {
						useDefaultUnderlineStyles: !1,
						href: t,
						className: a()(l, C.refreshDownloadButton),
						onClick: i,
						children: n
					})
				},
				I = e => {
					let t, {
							platform: n,
							onClick: i,
							onMouseEnter: l,
							isActive: o,
							claimed: s
						} = e,
						{
							getOs: c,
							icon: u,
							url: d,
							platformKey: p
						} = n,
						f = c(),
						_ = a()(C.icon, u);
					if (Array.isArray(d)) t = d.map((e, t) => {
						let n = s ? e.url() : "";
						return (0, r.jsx)(j, {
							url: n,
							onClick: () => i(f),
							text: e.getText()
						}, "".concat(n, "-").concat(t))
					});
					else {
						let e = s ? d() : void 0;
						t = (0, r.jsx)(j, {
							url: e,
							onClick: () => i(f),
							text: x.intl.string(x.t["1WjMbG"])
						})
					}
					return (0, r.jsx)("li", {
						className: a()(C.platform, {
							[C.active]: o
						}),
						onMouseEnter: () => l(p),
						children: (0, r.jsxs)("div", {
							className: C.contentWrapper,
							children: [(0, r.jsxs)("div", {
								className: C.iconWrap,
								children: [(0, r.jsx)("div", {
									className: _
								}), (0, r.jsx)("div", {
									className: a()(C.active, _)
								})]
							}), (0, r.jsxs)("div", {
								children: [(0, r.jsx)(m.X6q, {
									className: C.platformName,
									variant: "heading-lg/semibold",
									children: f
								}), (0, r.jsx)("div", {
									className: a()(C.downloadButtons, {
										[C.list]: Array.isArray(t)
									}),
									children: t
								})]
							})]
						})
					})
				};

			function S(e) {
				let {
					source: t,
					onClose: n,
					transitionState: l
				} = e, a = (0, d.e7)([g.default], () => g.default.getCurrentUser()), o = (0, d.e7)([h.default], () => h.default.getFingerprint()), p = null == a || a.isClaimed(), [E, j] = i.useState(function() {
					var e;
					switch (null == (e = s().os) ? void 0 : e.family) {
						case "OS X":
							return 0;
						case "Windows":
							return 1;
						case "Ubuntu":
						case "Debian":
						case "Fedora":
						case "Red Hat":
						case "SuSE":
						case "Linux":
							return 2;
						case "iOS":
							return 3;
						case "Android":
							return 4;
						default:
							return
					}
				}());

				function S(e) {
					(null != u.getToken() || null != o) && b.default.track(y.rMx.DOWNLOAD_APP, {
						platform: e,
						ptb: !1,
						released: !0,
						has_e_mail: p,
						referring_location: t,
						qr_code: !1
					}), p || (n(), f.j())
				}

				function T(e) {
					j(e)
				}
				i.useEffect(() => {
					b.default.track(y.rMx.OPEN_MODAL, {
						type: "Download App",
						source: {
							location: t
						}
					})
				}, [t]);
				let N = (0, _.Dt)();
				return (0, r.jsxs)(m.Y0X, {
					className: C.downloadApps,
					transitionState: l,
					"aria-labelledby": N,
					parentComponent: "DownloadAppsModal",
					children: [(0, r.jsx)(m.olH, {
						onClick: n,
						className: C.modalCloseButton
					}), (0, r.jsxs)(m.hzk, {
						className: C.inner,
						children: [(0, r.jsx)(m.nn4, {
							children: (0, r.jsx)(m.H, {
								id: N,
								children: x.intl.string(x.t.BK8LKy)
							})
						}), !c.tq && (0, r.jsxs)("div", {
							className: C.platformsWrap,
							children: [(0, r.jsx)(m.X6q, {
								variant: "heading-lg/semibold",
								className: C.header,
								children: x.intl.string(x.t["0KK0bG"])
							}), (0, r.jsx)("ul", {
								className: C.platforms,
								children: v.map(e => (0, r.jsx)(I, {
									isActive: E === e.platformKey,
									platform: e,
									onClick: S,
									onMouseEnter: T,
									claimed: p
								}, e.platformKey))
							})]
						}), (0, r.jsxs)("div", {
							className: C.platformsWrap,
							children: [!c.tq && (0, r.jsx)(m.X6q, {
								variant: "heading-lg/semibold",
								className: C.header,
								children: x.intl.string(x.t.RdSNWV)
							}), (0, r.jsx)("ul", {
								className: C.platforms,
								children: O.map(e => (0, r.jsx)(I, {
									isActive: E === e.platformKey,
									platform: e,
									onClick: S,
									onMouseEnter: T,
									claimed: p
								}, e.platformKey))
							})]
						})]
					}), (0, r.jsx)(m.mzw, {
						className: C.footer,
						children: (0, r.jsx)(m.Text, {
							variant: "text-sm/normal",
							children: x.intl.format(x.t["RJS+1N"], {})
						})
					})]
				})
			}
		},
		387188: function(e, t, n) {
			n.d(t, {
				e: () => v,
				i: () => O
			}), n(35282), n(388685);
			var r = n(255367),
				i = n(73800),
				l = n(120356),
				a = n.n(l),
				o = n(657707),
				s = n(442837),
				c = n(481060),
				u = n(596454),
				d = n(739566),
				p = n(590956),
				m = n(834129),
				f = n(222677),
				_ = n(768581),
				h = n(585483),
				g = n(339085),
				b = n(981631),
				E = n(388032),
				y = n(841935);
			let x = /^<(a?):(\w+):(\d+)>/;

			function C(e) {
				let t = i.useMemo(() => {
					var t;
					return null == (t = x.exec(e)) ? void 0 : t[3]
				}, [e]);
				return (0, s.e7)([g.ZP], () => null == t ? null : g.ZP.getCustomEmojiById(t))
			}

			function v(e) {
				let {
					message: t,
					className: n
				} = e, [l, o] = i.useState(!1), s = t.getChannelId(), d = C(t.content), p = i.useCallback(() => {
					null != d && (0, f.rU)(s, t.id, {
						id: d.id,
						name: d.name
					}, f.TW.MESSAGE)
				}, [s, d, t.id]);
				return null == d ? null : (0, r.jsx)(c.ua7, {
					"aria-label": !1,
					text: (0, r.jsx)(u.Z, {
						emojiName: d.name,
						size: "jumbo",
						emojiId: d.id,
						animated: d.animated,
						isInteracting: !0,
						channelId: s,
						messageId: t.id
					}),
					children: e => {
						var i, m, {
								onMouseEnter: f,
								onMouseLeave: _
							} = e,
							h = function(e, t) {
								if (null == e) return {};
								var n, r, i = function(e, t) {
									if (null == e) return {};
									var n, r, i = {},
										l = Object.keys(e);
									for (r = 0; r < l.length; r++) n = l[r], t.indexOf(n) >= 0 || (i[n] = e[n]);
									return i
								}(e, t);
								if (Object.getOwnPropertySymbols) {
									var l = Object.getOwnPropertySymbols(e);
									for (r = 0; r < l.length; r++) n = l[r], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n])
								}
								return i
							}(e, ["onMouseEnter", "onMouseLeave"]);
						return (0, r.jsx)(c.P3F, (i = function(e) {
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
						}({}, h), m = m = {
							className: a()(n, y.ctaReactionButton),
							onClick: p,
							onMouseEnter: () => {
								o(!0), null == f || f()
							},
							onMouseLeave: () => {
								o(!1), null == _ || _()
							},
							children: (0, r.jsx)(c.Text, {
								variant: "text-sm/semibold",
								color: "text-secondary",
								className: y.ctaText,
								children: E.intl.format(E.t.z5Rnl5, {
									renderedEmoji: (0, r.jsx)(u.Z, {
										emojiName: d.name,
										size: "default",
										emojiId: d.id,
										animated: d.animated,
										isInteracting: l,
										channelId: s,
										messageId: t.id,
										className: y.ctaEmoji
									})
								})
							})
						}, Object.getOwnPropertyDescriptors ? Object.defineProperties(i, Object.getOwnPropertyDescriptors(m)) : (function(e, t) {
							var n = Object.keys(e);
							if (Object.getOwnPropertySymbols) {
								var r = Object.getOwnPropertySymbols(e);
								n.push.apply(n, r)
							}
							return n
						})(Object(m)).forEach(function(e) {
							Object.defineProperty(i, e, Object.getOwnPropertyDescriptor(m, e))
						}), i))
					}
				})
			}

			function O(e) {
				var t;
				let {
					message: n,
					compact: l,
					usernameHook: a
				} = e, s = n.content, [u, f] = i.useState(!1), g = (0, d.ZP)(n), x = a(g), v = C(s), O = i.useCallback(() => {
					null != v && h.S.dispatchToLastSubscribed(b.CkL.INSERT_TEXT, {
						plainText: ":".concat(v.name, ":"),
						rawText: s,
						addSpace: !0
					})
				}, [v, s]), j = i.useMemo(() => {
					var e;
					return null == v ? null : {
						src: _.ZP.getEmojiURL({
							id: v.id,
							animated: v.animated,
							size: 48
						}),
						emojiId: v.id,
						name: ":".concat(null != (e = v.originalName) ? e : v.name, ":"),
						animated: v.animated
					}
				}, [v]);
				return (0, r.jsx)(m.Z, {
					iconNode: (0, r.jsx)(o.EO4, {
						size: "refresh_sm",
						color: "currentColor"
					}),
					iconContainerClassName: y.iconContainer,
					timestamp: n.timestamp,
					compact: l,
					contentClassName: y.content,
					children: (0, r.jsx)("span", {
						children: null == v || null == j ? E.intl.format(E.t.k6Jc9f, {
							username: g.nick,
							usernameHook: x
						}) : E.intl.format(E.t.IihHBw, {
							username: g.nick,
							usernameHook: x,
							emojiPreview: (0, r.jsx)(p.Y, {
								node: j,
								isInteracting: u
							}),
							emojiName: (0, r.jsx)(c.P3F, {
								className: y.clickableEmoji,
								tag: "span",
								onClick: O,
								onMouseEnter: () => f(!0),
								onMouseLeave: () => f(!1),
								children: (0, r.jsx)(c.Text, {
									tag: "span",
									variant: "text-md/medium",
									color: "text-primary",
									children: ":".concat(null != (t = v.originalName) ? t : v.name, ":")
								})
							})
						})
					})
				})
			}
		},
		468706: function(e, t, n) {
			n.d(t, {
				e: () => u
			});
			var r = n(255367);
			n(73800);
			var i = n(481060),
				l = n(240872),
				a = n(923500),
				o = n(247206),
				s = n(774863),
				c = n(388032);

			function u(e, t) {
				if ((0, o.aP)({
						action: o.Yy.EXPLICIT_MEDIA_SENDER_FALSE_POSITIVE_BUTTON_CLICKED,
						messageId: t,
						channelId: e
					}), !s.Z.canSubmitFpReport(t)) {
					l.Z.show({
						title: c.intl.string(c.t["iS/eFB"]),
						body: c.intl.string(c.t.YrjcgY),
						confirmText: c.intl.string(c.t.BddRzc)
					}), a.Z.disableFalsePositiveButton(e, t);
					return
				}(0, i.ZDy)(async () => {
					let {
						default: i
					} = await n(773276);
					return n => (0, r.jsx)(i, function(e) {
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
						channelId: e,
						messageId: t
					}, n))
				})
			}
		},
		923500: function(e, t, n) {
			n.d(t, {
				Z: () => i
			});
			var r = n(570140);
			let i = {
				disableFalsePositiveButton: function(e, t) {
					r.Z.dispatch({
						type: "MESSAGE_EXPLICIT_CONTENT_FP_SUBMIT",
						messageId: t,
						channelId: e
					})
				}
			}
		},
		668058: function(e, t, n) {
			n.d(t, {
				$: () => l
			}), n(388685);
			var r = n(73800),
				i = n(881052);

			function l(e) {
				let {
					onError: t,
					onSuccess: n,
					report: l
				} = e, [a, o] = r.useState(!1);
				return {
					reportFalsePositive: r.useCallback(async () => {
						if (!a) {
							o(!0);
							try {
								await l(), null == n || n()
							} catch (n) {
								let e = new i.Hx(n);
								null == t || t(e)
							} finally {
								o(!1)
							}
						}
					}, [a, t, n, l]),
					isReportFalsePositiveLoading: a
				}
			}
		},
		703751: function(e, t, n) {
			n.d(t, {
				r: () => l
			});
			var r = n(399606),
				i = n(774863);
			let l = e => null != (0, r.e7)([i.Z], () => i.Z.getFpMessageInfo(e))
		},
		761538: function(e, t, n) {
			n.d(t, {
				Z: () => o
			});
			var r = n(255367);
			n(73800);
			var i = n(481060),
				l = n(388032),
				a = n(499632);

			function o(e) {
				let {
					message: t
				} = e;
				return (0, r.jsxs)(i.P3F, {
					onClick: () => {
						(0, i.ZDy)(async () => {
							let {
								default: e
							} = await n.e("14021").then(n.bind(n, 910673));
							return n => (0, r.jsx)(e, function(e) {
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
								channelId: t.channel_id,
								messageId: t.id
							}, n))
						})
					},
					className: a.accessory,
					children: [(0, r.jsx)(i.d3s, {
						size: "xs",
						color: "currentColor"
					}), (0, r.jsx)(i.Text, {
						variant: "text-xs/normal",
						className: a.accessoryText,
						children: l.intl.string(l.t["2aXnfX"])
					})]
				})
			}
		},
		674611: function(e, t, n) {
			n.d(t, {
				Z: () => u
			});
			var r = n(255367),
				i = n(73800),
				l = n(442837),
				a = n(481060),
				o = n(468706),
				s = n(774863),
				c = n(388032);

			function u(e) {
				let {
					messageId: t,
					channelId: n
				} = e, u = (0, l.e7)([s.Z], () => s.Z.canSubmitFpReport(t)), d = i.useCallback(() => {
					(0, o.e)(n, t)
				}, [n, t]);
				return (0, r.jsx)(a.zxk, {
					variant: "secondary",
					text: c.intl.string(c.t["4q1ElZ"]),
					onClick: d,
					disabled: !u
				})
			}
		},
		160877: function(e, t, n) {
			n.d(t, {
				$: () => O,
				s: () => v
			}), n(953529);
			var r = n(255367),
				i = n(73800),
				l = n(120356),
				a = n.n(l),
				o = n(470167),
				s = n(755721),
				c = n(481060),
				u = n(572691),
				d = n(313201),
				p = n(70097),
				m = n(406432),
				f = n(584656),
				_ = n(247206),
				h = n(470734),
				g = n(719548),
				b = n(388032),
				E = n(580297);
			let y = e => {
					let {
						attachment: t
					} = e, {
						url: n,
						description: i
					} = t;
					return null == n ? null : (0, r.jsx)(C, {
						url: n,
						description: i
					})
				},
				x = e => {
					var t, n, i;
					let {
						embed: l
					} = e;
					if (!g.n2.has(l.type)) return null;
					let a = void 0 !== l.video && l.type !== o.h.GIFV ? l.video.url : null != (i = null == (t = l.thumbnail) ? void 0 : t.url) ? i : null == (n = l.image) ? void 0 : n.url;
					return null == a ? null : (0, r.jsx)(C, {
						url: a
					})
				},
				C = e => {
					let {
						url: t,
						description: n
					} = e, i = (0, m.cb)(t);
					return (0, r.jsx)("div", {
						className: E.mediaContainer,
						children: i ? (0, r.jsx)(p.Z, {
							className: a()(E.video, E.media),
							controls: !0,
							src: t
						}) : (0, r.jsx)("img", {
							className: a()(E.image, E.media),
							src: t,
							alt: n
						})
					})
				};

			function v(e) {
				u.Z.pop(), (0, f.t)({
					id: "explicit-media-false-positive-modal",
					text: b.intl.string(b.t.gFsTKi)
				}), e()
			}

			function O(e) {
				let {
					channelId: t,
					messageId: n,
					isReportFalsePositiveLoading: l,
					analyticsContext: a,
					attachmentPreview: o,
					embedPreview: u,
					onConfirmPress: p,
					transitionState: m,
					onClose: f
				} = e, g = (0, d.Dt)(), C = (0, h.pn)("ExplicitMediaFalsePositiveModal"), v = i.useCallback(() => {
					(0, _.aP)({
						action: _.Yy.EXPLICIT_MEDIA_FALSE_POSITIVE_CLICK_CANCEL,
						channelId: t,
						messageId: n,
						context: a
					}), f()
				}, [t, n, a, f]), O = i.useCallback(() => {
					null == p || p(), (0, _.aP)({
						action: _.Yy.EXPLICIT_MEDIA_FALSE_POSITIVE_CLICK_CONFIRM,
						channelId: t,
						messageId: n,
						context: a
					})
				}, [t, n, a, p]);
				i.useEffect(() => {
					(0, _.aP)({
						action: _.Yy.EXPLICIT_MEDIA_FALSE_POSITIVE_VIEWED,
						channelId: t,
						messageId: n,
						context: a
					})
				}, [t, n, a]);
				let j = i.useMemo(() => C ? b.intl.string(b.t["z4du/P"]) : b.intl.string(b.t.gg5Dp6), [C]);
				return (0, r.jsxs)(c.Y0X, {
					transitionState: m,
					"aria-labelledby": g,
					size: c.CgR.SMALL,
					parentComponent: "ExplicitMediaFalsePositiveModal",
					children: [(0, r.jsxs)(c.hzk, {
						children: [(0, r.jsx)(c.olH, {
							onClick: v,
							className: E.closeButton
						}), (0, r.jsx)(c.X6q, {
							id: g,
							variant: "heading-lg/semibold",
							color: "header-primary",
							className: E.header,
							children: b.intl.string(b.t.TPpVkJ)
						}), (0, r.jsx)(c.Text, {
							variant: "text-sm/normal",
							color: "header-secondary",
							className: E.subheader,
							children: j
						}), null != o && (0, r.jsx)(y, {
							attachment: o
						}), null != u && (0, r.jsx)(x, {
							embed: u
						})]
					}), (0, r.jsxs)(c.mzw, {
						children: [(0, r.jsx)("div", {
							"data-button-hoisted-classname-wrapper": !0,
							className: E.button,
							children: (0, r.jsx)(c.zxk, {
								variant: "primary",
								text: b.intl.string(b.t["cY+Ooa"]),
								disabled: l,
								loading: l,
								onClick: O
							})
						}), (0, r.jsx)(s.zx, {
							className: E.button,
							disabled: l,
							color: s.zx.Colors.TRANSPARENT,
							size: s.zx.Sizes.MEDIUM,
							onClick: v,
							children: b.intl.string(b.t["ETE/oK"])
						})]
					})]
				})
			}
		},
		773276: function(e, t, n) {
			n.r(t), n.d(t, {
				default: () => m
			});
			var r = n(255367);
			n(73800);
			var i = n(399606),
				l = n(481060),
				a = n(923500),
				o = n(522664),
				s = n(247206),
				c = n(774863),
				u = n(668058),
				d = n(160877),
				p = n(388032);

			function m(e) {
				let {
					channelId: t,
					messageId: n,
					transitionState: m,
					onClose: f
				} = e, _ = (0, i.e7)([c.Z], () => c.Z.getFpMessageInfo(n)), h = _.attachments.map(e => e.id), g = _.attachments.map(e => e.filename), {
					reportFalsePositive: b,
					isReportFalsePositiveLoading: E
				} = (0, u.$)({
					onSuccess: () => {
						(0, d.s)(f), a.Z.disableFalsePositiveButton(t, n)
					},
					onError: () => {
						(0, l.showToast)((0, l.createToast)(p.intl.string(p.t.R0RpRU), l.ToastType.FAILURE))
					},
					report: () => {
						(0, o.Eq)(t, n, h, g)
					}
				});
				return _.attachments.length > 0 || f(), (0, r.jsx)(d.$, {
					messageId: n,
					channelId: t,
					isReportFalsePositiveLoading: E,
					analyticsContext: s.UU.EXPLICIT_MEDIA_SENDER_FALSE_POSITIVE_FLOW,
					onConfirmPress: b,
					transitionState: m,
					onClose: f
				})
			}
		},
		100604: function(e, t, n) {
			n.d(t, {
				r: () => _
			});
			var r = n(933557),
				i = n(356264),
				l = n(592125),
				a = n(430824),
				o = n(496675),
				s = n(699516),
				c = n(594174),
				u = n(768581),
				d = n(55935);
			n(978003);
			var p = n(388032);

			function m(e, t, n) {
				return t in e ? Object.defineProperty(e, t, {
					value: n,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : e[t] = n, e
			}

			function f(e, t) {
				return {
					originLabel: e.name,
					originIconUrl: u.ZP.getGuildIconURL({
						id: e.id,
						size: 16,
						icon: e.icon,
						canAnimate: !1
					}),
					timestampLabel: t,
					accessibilityLabel: p.intl.formatToPlainString(p.t["+l04BA"], {
						origin: e.name,
						timestamp: t
					})
				}
			}
			class _ {
				getForwardInfo() {
					var e, t, n, u;
					let m = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : l.Z,
						_ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : c.default,
						h = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : s.Z,
						g = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : o.Z,
						b = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : a.Z,
						E = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : i.Z,
						{
							snapshotIndex: y,
							parentMessage: x,
							messageSnapshot: C
						} = this,
						v = (0, d.Xf)(C.message.timestamp),
						O = m.getChannel(this.parentMessage.channel_id);
					if (null != O && O.guild_id === (null == (e = x.messageReference) ? void 0 : e.guild_id)) {
						let e = m.getChannel(null == (n = x.messageReference) ? void 0 : n.channel_id);
						if (null == e) {
							let e = b.getGuild(O.guild_id);
							return null == e ? {
								snapshotIndex: y
							} : {
								snapshotIndex: y,
								footerInfo: f(e, v)
							}
						}
						if (!g.can(e.accessPermissions, e)) return {
							snapshotIndex: y
						};
						let t = (0, r.F6)(e, _, h, !0);
						return {
							snapshotIndex: y,
							footerInfo: {
								originLabel: t,
								timestampLabel: v,
								accessibilityLabel: p.intl.formatToPlainString(p.t["+l04BA"], {
									origin: t,
									timestamp: v
								})
							}
						}
					}
					let j = null == (t = x.messageReference) ? void 0 : t.guild_id;
					if (null == j) return {
						snapshotIndex: y
					};
					let I = null != (u = b.getGuild(j)) ? u : E.getGuild(j);
					return null == I ? {
						snapshotIndex: y
					} : {
						snapshotIndex: y,
						footerInfo: f(I, v)
					}
				}
				constructor(e, t, n) {
					m(this, "parentMessage", void 0), m(this, "messageSnapshot", void 0), m(this, "snapshotIndex", void 0), this.parentMessage = e, this.messageSnapshot = t, this.snapshotIndex = n
				}
			}
		},
		694784: function(e, t, n) {
			n.d(t, {
				Z: () => u
			});
			var r = n(749210),
				i = n(336197),
				l = n(592125),
				a = n(430824),
				o = n(626135),
				s = n(900849),
				c = n(981631);
			async function u(e) {
				var t;
				if (null == e.messageReference) return;
				let n = e.messageReference.guild_id,
					u = e.messageReference.channel_id,
					d = e.messageReference.message_id,
					p = l.Z.getChannel(u),
					m = !1;
				if (null == p && null != n && null == a.Z.getGuild(n)) try {
					await (0, s.Ub)(n, {
						object: c.qAy.FORWARD_BREADCRUMB
					}, {
						shouldNavigate: !1
					}), m = !0, await (0, r.V)(n), p = l.Z.getChannel(u)
				} catch (e) {}
				o.default.track(c.rMx.FORWARD_BREADCRUMB_CLICKED, {
					guild_id: null == (t = l.Z.getBasicChannel(e.channel_id)) ? void 0 : t.guild_id,
					channel_id: e.channel_id,
					message_id: e.id,
					breadcrumb_guild_id: n,
					breadcrumb_channel_id: u,
					breadcrumb_message_id: d,
					did_lurk: m
				});
				let f = m ? u : void 0;
				(0, i.Z)(c.Z5c.CHANNEL(n, u, d), {
					welcomeModalChannelId: f
				})
			}
		},
		294734: function(e, t, n) {
			n.d(t, {
				Z: () => A
			});
			var r = n(255367),
				i = n(73800),
				l = n(793030),
				a = n(442837),
				o = n(902704),
				s = n(692547),
				c = n(481060),
				u = n(356264),
				d = n(628238),
				p = n(930282),
				m = n(25015),
				f = n(438075),
				_ = n(695346),
				h = n(592125),
				g = n(906467),
				b = n(430824),
				E = n(496675),
				y = n(699516),
				x = n(594174),
				C = n(100604),
				v = n(694784),
				O = n(39154),
				j = n(245216),
				I = n(388032),
				S = n(752386);

			function T() {
				return (0, r.jsxs)("div", {
					className: S.headerContainer,
					children: [(0, r.jsx)(j.Z, {
						size: "xs",
						className: S.headerIcon,
						color: s.Z.colors.TEXT_LOW_CONTRAST
					}), (0, r.jsx)(l.xv, {
						className: S.headerText,
						variant: "text-sm/semibold",
						color: "text-low-contrast",
						children: I.intl.string(I.t.ToyvLi)
					})]
				})
			}

			function N(e) {
				let {
					message: t,
					snapshot: n,
					index: d
				} = e, p = i.useMemo(() => new C.r(t, n, d), [t, n, d]), m = (0, a.e7)([h.Z, x.default, y.Z, E.Z, b.Z, u.Z], () => p.getForwardInfo(h.Z, x.default, y.Z, E.Z, b.Z, u.Z).footerInfo, [p], o.Z), f = i.useCallback(() => {
					(0, v.Z)(t)
				}, [t]);
				return null == m ? null : (0, r.jsxs)(c.P3F, {
					className: S.footerContainer,
					onClick: f,
					children: [null != m.originIconUrl ? (0, r.jsx)("img", {
						className: S.originIcon,
						src: m.originIconUrl,
						alt: ""
					}) : null, (0, r.jsx)(l.xv, {
						className: S.footerText,
						variant: "text-sm/medium",
						color: "none",
						children: "".concat(m.originLabel, "  •  ").concat(m.timestampLabel)
					}), (0, r.jsx)(c.Fbu, {
						size: "xxs",
						color: s.Z.colors.TEXT_LOW_CONTRAST
					})]
				})
			}

			function P(e) {
				var t;
				let {
					message: n,
					snapshot: l,
					index: o
				} = e, s = i.useMemo(() => (0, O.Z)(n, l), [n, l]), c = _.RS.useSetting(), u = _.NA.useSetting(), b = (0, a.e7)([g.Z], () => g.Z.isDeveloper), E = (0, d.A)((null != (t = s.editedTimestamp) ? t : s.timestamp).valueOf()), {
					content: y,
					hasSpoilerEmbeds: x
				} = (0, m.Z)(s, {
					hideSimpleEmbedContent: c && u,
					isInteracting: !1,
					formatInline: !1,
					allowList: E,
					allowHeading: E,
					allowLinks: !0,
					allowDevLinks: b,
					previewLinkTarget: !0
				}), C = (0, a.e7)([h.Z], () => h.Z.getChannel(n.channel_id)), v = _.jU.useSetting();
				return null == C ? null : (0, r.jsxs)("div", {
					className: S.container,
					children: [(0, r.jsx)("div", {
						className: S.quote
					}), (0, r.jsxs)("div", {
						className: S.content,
						children: [(0, r.jsx)(T, {}), (0, r.jsx)(p.ZP, {
							message: s,
							content: y,
							compact: v
						}), (0, f.Z)({
							channelMessageProps: {
								message: s,
								channel: C,
								compact: v
							},
							hasSpoilerEmbeds: x,
							isInteracting: !1,
							isMessageSnapshot: !0,
							renderThreadAccessory: !1
						}), (0, r.jsx)(N, {
							message: n,
							snapshot: l,
							index: o
						})]
					})]
				}, o)
			}

			function A(e) {
				let {
					message: t
				} = e;
				return (0, r.jsx)(r.Fragment, {
					children: t.messageSnapshots.map((e, n) => (0, r.jsx)(P, {
						message: t,
						snapshot: e,
						index: n
					}, n))
				})
			}
		},
		646288: function(e, t, n) {
			n.d(t, {
				Z: () => l
			});
			var r = n(937615),
				i = n(388032);

			function l(e) {
				let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1],
					n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
				if (!e.available) return i.intl.string(i.t.RWouSU);
				if (e.premium && !n) return i.intl.string(i.t.QGUSz8);
				let l = e.getPrice(null, t);
				if (null != l)
					if (l.amount > 0) return (0, r.T4)(l.amount, l.currency);
					else return i.intl.string(i.t.QQsaCQ);
				return i.intl.string(i.t.RWouSU)
			}
		},
		687755: function(e, t, n) {
			n.d(t, {
				Z: () => s
			});
			var r = n(255367);
			n(73800);
			var i = n(120356),
				l = n.n(i),
				a = n(388032),
				o = n(554116);
			let s = e => {
				let {
					className: t
				} = e;
				return (0, r.jsx)("div", {
					className: l()(o.tag, t),
					children: (0, r.jsx)("span", {
						className: o.text,
						children: a.intl.string(a.t["14lP0d"])
					})
				})
			}
		},
		10433: function(e, t, n) {
			n.d(t, {
				Z: () => b
			}), n(388685);
			var r = n(255367),
				i = n(73800),
				l = n(873546),
				a = n(399606),
				o = n(434650),
				s = n(230171),
				c = n(955415),
				u = n(973616),
				d = n(914010),
				p = n(626135),
				m = n(471518),
				f = n(370210),
				_ = n(981631),
				h = n(388032),
				g = n(280306);

			function b(e) {
				let {
					code: t,
					message: n
				} = e, [b, E, y] = (0, a.Wu)([f.Z], () => [f.Z.getApplication(t), f.Z.isInvalidApplication(t), f.Z.getApplicationFetchState(t)], [t]), x = (0, a.e7)([d.Z], () => {
					var e;
					return null != (e = d.Z.getGuildId()) ? e : void 0
				}), [C, v] = i.useState(!1), O = i.useCallback(e => {
					e && v(!0)
				}, []), j = (0, o.O)(O), I = i.useCallback(() => {
					p.default.track(_.rMx.APP_DIRECTORY_PROFILE_EMBED_VIEWED, {
						application_id: t,
						device_platform: l.tq ? "mobile_web" : "desktop_web",
						sender_user_id: n.author.id,
						guild_id: x,
						channel_id: n.channel_id
					})
				}, [t, x, n.author.id, n.channel_id]);
				return (i.useEffect(() => {
					(0, m.gZ)(t)
				}, [t]), i.useEffect(() => {
					C && y === f.M.FETCHED && I()
				}, [C, y, I]), i.useEffect(() => {
					C && E && p.default.track(_.rMx.APP_DIRECTORY_PROFILE_INVALID_EMBED_VIEWED, {
						device_platform: l.tq ? "mobile_web" : "desktop_web",
						sender_user_id: n.author.id,
						guild_id: x,
						channel_id: n.channel_id
					})
				}, [C, x, E, n.author.id, n.channel_id]), E) ? (0, r.jsxs)(c.Z, {
					containerRef: j,
					children: [(0, r.jsx)(c.Z.Header, {
						text: h.intl.string(h.t.j4KtLS)
					}), (0, r.jsx)(c.Z.Body, {
						children: (0, r.jsxs)("div", {
							className: g.invalidBody,
							children: [(0, r.jsx)(c.Z.Icon, {
								expired: !0
							}), (0, r.jsx)(c.Z.Info, {
								expired: !0,
								title: h.intl.string(h.t.NaQLEx),
								children: h.intl.string(h.t["0H5OT0"])
							})]
						})
					})]
				}) : null == b || y === f.M.FETCHING ? (0, r.jsxs)(c.Z, {
					containerRef: j,
					children: [(0, r.jsx)(c.Z.Header, {
						text: h.intl.string(h.t.m9hXGR)
					}), (0, r.jsx)(c.Z.Body, {
						resolving: !0
					})]
				}) : (0, r.jsx)(s.O, {
					app: u.ZP.createFromServer(b),
					linkType: s.U.APP_DISCOVERY,
					onView: I
				})
			}
		},
		641360: function(e, t, n) {
			n.d(t, {
				Ae: () => i,
				I3: () => l,
				p1: () => a
			});
			let r = (0, n(818083).B)({
				kind: "guild",
				id: "2025-04_gdm_bedazzling",
				label: "GDM Bedazzling",
				defaultConfig: {
					enabled: !1,
					unifiedEditing: !1
				},
				treatments: [{
					id: 1,
					label: "Enabled - T1 - Unified editing",
					config: {
						enabled: !0,
						unifiedEditing: !0
					}
				}, {
					id: 2,
					label: "Enabled - T2 - Retain Change Icon",
					config: {
						enabled: !0,
						unifiedEditing: !1
					}
				}]
			});

			function i(e, t, n) {
				return r.useExperiment({
					location: e,
					guildId: t
				}, n)
			}

			function l(e, t, n) {
				return i(e, t, n).enabled
			}

			function a(e, t) {
				let {
					enabled: n,
					unifiedEditing: r
				} = i(e, t);
				return !n || !r
			}
		},
		93687: function(e, t, n) {
			n.d(t, {
				Z: () => r
			});
			let r = (0, n(818083).B)({
				kind: "user",
				id: "2024-04_gdm_presence",
				label: "Group DM Presence",
				defaultConfig: {
					isFacepileEnabled: !1,
					isStatusIndicatorEnabled: !1,
					isTypingIndicatorEnabled: !1
				},
				treatments: [{
					id: 1,
					label: "Status Indicator Only",
					config: {
						isFacepileEnabled: !1,
						isStatusIndicatorEnabled: !0,
						isTypingIndicatorEnabled: !1
					}
				}, {
					id: 2,
					label: "Typing Indicator Only",
					config: {
						isFacepileEnabled: !1,
						isStatusIndicatorEnabled: !1,
						isTypingIndicatorEnabled: !0
					}
				}, {
					id: 3,
					label: "Status Indicator + Typing Indicator",
					config: {
						isFacepileEnabled: !1,
						isStatusIndicatorEnabled: !0,
						isTypingIndicatorEnabled: !0
					}
				}, {
					id: 4,
					label: "Facepile Only",
					config: {
						isFacepileEnabled: !0,
						isStatusIndicatorEnabled: !1,
						isTypingIndicatorEnabled: !1
					}
				}, {
					id: 5,
					label: "Facepile + Status Indicator",
					config: {
						isFacepileEnabled: !0,
						isStatusIndicatorEnabled: !0,
						isTypingIndicatorEnabled: !1
					}
				}, {
					id: 6,
					label: "Facepile + Typing Indicator",
					config: {
						isFacepileEnabled: !0,
						isStatusIndicatorEnabled: !1,
						isTypingIndicatorEnabled: !0
					}
				}, {
					id: 7,
					label: "Facepile + Typing Indicator + Status Indicator",
					config: {
						isFacepileEnabled: !0,
						isStatusIndicatorEnabled: !0,
						isTypingIndicatorEnabled: !0
					}
				}]
			})
		},
		266076: function(e, t, n) {
			n.d(t, {
				Z: () => c
			});
			var r = n(255367),
				i = n(73800),
				l = n(481060),
				a = n(43267),
				o = n(93687),
				s = n(785232);
			let c = i.memo(function(e) {
				var {
					channel: t,
					size: n,
					facepileSizeOverride: i,
					experimentLocation: c,
					isTyping: u,
					status: d,
					className: p,
					animated: m = !1
				} = e, f = function(e, t) {
					if (null == e) return {};
					var n, r, i = function(e, t) {
						if (null == e) return {};
						var n, r, i = {},
							l = Object.keys(e);
						for (r = 0; r < l.length; r++) n = l[r], t.indexOf(n) >= 0 || (i[n] = e[n]);
						return i
					}(e, t);
					if (Object.getOwnPropertySymbols) {
						var l = Object.getOwnPropertySymbols(e);
						for (r = 0; r < l.length; r++) n = l[r], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n])
					}
					return i
				}(e, ["channel", "size", "facepileSizeOverride", "experimentLocation", "isTyping", "status", "className", "animated"]);
				let {
					isFacepileEnabled: _
				} = o.Z.useExperiment({
					location: c
				}, {
					autoTrackExposure: !0
				});
				return t.recipients.length >= 2 && _ && null == t.icon ? (0, r.jsx)(s.Z, {
					"aria-label": f["aria-label"],
					"aria-hidden": f["aria-hidden"],
					className: p,
					recipients: t.recipients,
					size: null != i ? i : n,
					isTyping: u,
					status: d
				}) : (0, r.jsx)(l.qEK, {
					"aria-hidden": f["aria-hidden"],
					"aria-label": f["aria-label"],
					className: p,
					size: n,
					src: (0, a.x)(t, 80, m)
				})
			})
		},
		785232: function(e, t, n) {
			n.d(t, {
				Z: () => s
			});
			var r = n(255367);
			n(73800);
			var i = n(442837),
				l = n(481060),
				a = n(289823),
				o = n(594174);
			let s = function(e) {
				var {
					recipients: t,
					size: n,
					status: s,
					isTyping: c,
					className: u
				} = e, d = function(e, t) {
					if (null == e) return {};
					var n, r, i = function(e, t) {
						if (null == e) return {};
						var n, r, i = {},
							l = Object.keys(e);
						for (r = 0; r < l.length; r++) n = l[r], t.indexOf(n) >= 0 || (i[n] = e[n]);
						return i
					}(e, t);
					if (Object.getOwnPropertySymbols) {
						var l = Object.getOwnPropertySymbols(e);
						for (r = 0; r < l.length; r++) n = l[r], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n])
					}
					return i
				}(e, ["recipients", "size", "status", "isTyping", "className"]);
				let p = l.ny6[n],
					m = (0, i.Wu)([o.default], () => t.slice(0, 2).map(e => {
						let t = o.default.getUser(e);
						if (null != t) return t.getAvatarURL(void 0, p.size, !1)
					}), [t, p.size]);
				return (0, r.jsx)(a.Z, {
					"aria-label": d["aria-label"],
					"aria-hidden": d["aria-hidden"],
					backSrc: m[0],
					frontSrc: m[1],
					size: n,
					status: s,
					isTyping: null != c && c,
					className: u
				})
			}
		},
		769409: function(e, t, n) {
			n.d(t, {
				B: () => s
			});
			var r = n(255367);
			n(73800);
			var i = n(481060),
				l = n(668781),
				a = n(231338),
				o = n(388032);
			let s = (e, t) => {
				let s = "group-dm-edit-modal-".concat(e),
					c = !1,
					u = e => {
						c = e
					},
					d = () => {
						c ? l.Z.show({
							title: o.intl.string(o.t.pvRCSk),
							body: o.intl.string(o.t.DRi46e),
							confirmText: o.intl.string(o.t["6GQDFh"]),
							confirmVariant: "critical-primary",
							cancelText: o.intl.string(o.t.DmDzZG),
							onConfirm: () => (0, i.Mr3)(s),
							onCancel: a.dG
						}) : (0, i.Mr3)(s)
					};
				(0, i.ZDy)(async () => {
					let {
						default: i
					} = await n.e("41259").then(n.bind(n, 912114));
					return n => (0, r.jsx)(i, function(e) {
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
						closeOrShowDiscardChangesAlert: d,
						setHasPendingChanges: u,
						channelId: e,
						location: t
					}, n))
				}, {
					modalKey: s,
					onCloseRequest: d
				})
			}
		},
		273504: function(e, t, n) {
			n.d(t, {
				I3: () => u,
				Ic: () => E,
				Lg: () => b,
				OU: () => h,
				RH: () => s,
				Ux: () => o,
				VW: () => d,
				Vg: () => g,
				Vk: () => m,
				_6: () => y,
				aj: () => _,
				dc: () => x,
				fX: () => a.f,
				hu: () => p,
				jj: () => i.j,
				n4: () => c,
				q4: () => l.q,
				uE: () => f
			});
			var r, i = n(401653),
				l = n(95930),
				a = n(41381),
				o = ((r = {})[r.PROFANITY = 1] = "PROFANITY", r[r.SEXUAL_CONTENT = 2] = "SEXUAL_CONTENT", r[r.SLURS = 3] = "SLURS", r);
			a.f.USER_PROFILE, a.f.SERVER_POLICY, a.f.MENTION_SPAM, a.f.ML_SPAM, a.f.DEFAULT_KEYWORD_LIST, a.f.KEYWORD;
			let s = 1e3,
				c = 100,
				u = 1e3,
				d = 10,
				p = 60,
				m = 1,
				f = 1,
				_ = 260,
				h = 100,
				g = 1,
				b = 50,
				E = 20,
				y = 150,
				x = "automod-profile-quarantine-alert"
		},
		787824: function(e, t, n) {
			n.d(t, {
				C: () => function e(t) {
					return null == t ? t : Object.keys(t).reduce((n, i) => {
						let l = (0, r.camelCase)(i);
						return "object" != typeof t[i] || Array.isArray(t[i]) ? n[l] = t[i] : n[l] = e(t[i]), n
					}, {})
				},
				X: () => function e(t) {
					return null == t ? t : Object.keys(t).reduce((n, i) => {
						let l = (0, r.snakeCase)(i);
						return "object" != typeof t[i] || Array.isArray(t[i]) ? n[l] = t[i] : n[l] = e(t[i]), n[l] = t[i], n
					}, {})
				}
			});
			var r = n(392711)
		},
		223606: function(e, t, n) {
			n.d(t, {
				Z: () => j
			});
			var r, i = n(442837),
				l = n(570140),
				a = n(673750),
				o = n(786761),
				s = n(592125),
				c = n(375954),
				u = n(709054),
				d = n(539573),
				p = n(825829),
				m = n(981631);

			function f(e, t, n) {
				return t in e ? Object.defineProperty(e, t, {
					value: n,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : e[t] = n, e
			}
			let _ = {},
				h = 0,
				g = {},
				b = {},
				E = (e, t) => {
					let n = (0, a.hc)(e),
						r = {
							id: n,
							isBlockedEdit: (0, a.Bz)(e),
							messageData: e,
							errorMessage: (0, d.uF)(e, t)
						};
					_[n] = r, h++
				},
				y = e => _[e],
				x = e => {
					null != _[e] && delete _[e], h++
				};

			function C(e) {
				let {
					messageData: t,
					errorResponseBody: n
				} = e;
				return E(t, n), !0
			}

			function v(e) {
				var t;
				let {
					channelId: n,
					messages: r
				} = e, i = null == (t = s.Z.getChannel(n)) ? void 0 : t.getGuildId();
				if (null == i) return !1;
				let l = b[i],
					a = r.reduce((e, t) => {
						var n;
						return t.type === m.uaV.AUTO_MODERATION_ACTION && (null == (n = t.embeds) ? void 0 : n.some(e => {
							let {
								type: t
							} = e;
							return t === m.hBH.AUTO_MODERATION_NOTIFICATION
						})) ? null == e || -1 === u.default.compare(e, t.id) ? t.id : void 0 : e
					}, l);
				return null != a && b[i] !== a && (b[i] = a, !0)
			}
			class O extends(r = i.ZP.PersistedStore) {
				initialize(e) {
					this.waitFor(c.Z), null != e && (_ = e.automodFailedMessages, g = e.mentionRaidDetectionByGuild)
				}
				getState() {
					return {
						automodFailedMessages: _,
						mentionRaidDetectionByGuild: g,
						lastIncidentAlertMessage: b
					}
				}
				getMessage(e) {
					var t;
					return null == e ? null : null != (t = y(e)) ? t : null
				}
				getMessagesVersion() {
					return h
				}
				getMentionRaidDetected(e) {
					var t;
					return null != (t = g[e]) ? t : null
				}
				getLastIncidentAlertMessage(e) {
					var t;
					return null != (t = b[e]) ? t : null
				}
			}
			f(O, "displayName", "GuildAutomodMessageStore"), f(O, "persistKey", "GuildAutomodMessages");
			let j = new O(l.Z, {
				CONNECTION_OPEN: function(e) {
					return 0 !== Object.keys(_).length && (_ = {}, h++, !0)
				},
				LOAD_MESSAGES_SUCCESS: v,
				LOCAL_MESSAGES_LOADED: v,
				MESSAGE_CREATE: function(e) {
					let {
						guildId: t,
						message: n
					} = e;
					if (null == t || n.type !== m.uaV.AUTO_MODERATION_ACTION) return !1;
					let r = (0, o.e5)(n);
					return !!(0, p.nY)(r) && !!(0, p.OP)(r) && (b[t] = r.id, !0)
				},
				MESSAGE_SEND_FAILED_AUTOMOD: C,
				MESSAGE_EDIT_FAILED_AUTOMOD: C,
				REMOVE_AUTOMOD_MESSAGE_NOTICE: function(e) {
					let {
						messageId: t
					} = e;
					return x(t), !0
				},
				MESSAGE_END_EDIT: function(e) {
					let {
						response: t
					} = e;
					if ((null == t ? void 0 : t.body) == null || t.body.code === m.evJ.AUTOMOD_MESSAGE_BLOCKED) return !1;
					let n = t.body.id;
					if (null == n) return !1;
					x(n)
				},
				AUTO_MODERATION_MENTION_RAID_DETECTION: function(e) {
					let {
						guildId: t,
						decisionId: n,
						suspiciousMentionActivityUntil: r
					} = e;
					return g[t] = {
						guildId: t,
						decisionId: n,
						suspiciousMentionActivityUntil: r
					}, !0
				},
				AUTO_MODERATION_MENTION_RAID_NOTICE_DISMISS: function(e) {
					let {
						guildId: t
					} = e;
					return delete g[t], !0
				}
			})
		},
		351465: function(e, t, n) {
			n.d(t, {
				Z: () => s
			});
			var r = n(255367);
			n(73800);
			var i = n(120356),
				l = n.n(i),
				a = n(388032),
				o = n(142770);
			let s = e => {
				let {
					className: t
				} = e;
				return (0, r.jsx)("div", {
					className: l()(o.tag, t),
					children: (0, r.jsx)("span", {
						className: o.text,
						children: a.intl.string(a.t["8IfYqa"])
					})
				})
			}
		},
		602606: function(e, t, n) {
			n.d(t, {
				Z: () => p
			}), n(388685), n(457542);
			var r = n(73800),
				i = n(442837),
				l = n(430824),
				a = n(496675),
				o = n(709054),
				s = n(693546),
				c = n(826581),
				u = n(937111),
				d = n(981631);

			function p(e) {
				let [t, n] = r.useState(!1), [p, m] = r.useState(!1), f = o.default.cast(e), {
					joinRequest: _,
					guild: h
				} = (0, i.cj)([c.Z, u.Z, l.Z, a.Z], () => {
					var e;
					let t = c.Z.getRequest(f);
					if (null == t) return {
						joinRequest: null,
						isModmin: !1,
						guild: null
					};
					let n = null != (e = l.Z.getGuild(t.guildId)) ? e : u.Z.getJoinRequestGuild(t.guildId);
					return {
						joinRequest: t,
						isModmin: null != n && a.Z.can(d.Plq.KICK_MEMBERS, n),
						guild: n
					}
				});
				return r.useEffect(() => {
					null != h || p || (m(!0), s.Z.fetchRequestToJoinGuilds())
				}, [h, p]), r.useEffect(() => {
					null == _ && (n(!0), s.Z.fetchGuildJoinRequest(f).finally(() => {
						n(!1)
					}))
				}, [_, f]), {
					loading: t,
					joinRequest: _,
					joinRequestGuild: h
				}
			}
		},
		29887: function(e, t, n) {
			n.d(t, {
				Cn: () => _,
				R6: () => g,
				Ue: () => h
			});
			var r = n(255367),
				i = n(73800),
				l = n(442837),
				a = n(942951),
				o = n(834129),
				s = n(703656),
				c = n(314897),
				u = n(271383),
				d = n(594174),
				p = n(602606),
				m = n(388032);
			let f = (e, t) => {
				let {
					joinRequest: n,
					joinRequestGuild: r
				} = (0, p.Z)(t.id), o = (0, l.e7)([d.default], () => d.default.getUser(null == n ? void 0 : n.userId)), m = (0, a.l)({
					user: o,
					channelId: t.id,
					guildId: t.guild_id,
					messageId: e.id
				}), f = (0, l.e7)([u.ZP, c.default], () => u.ZP.isMember(null == r ? void 0 : r.id, c.default.getId())), _ = i.useCallback(() => {
					f && null != r && (0, s.XU)(r.id)
				}, [r, f]);
				return {
					guild: r,
					joinRequest: n,
					usernameHook: m,
					guildNameClick: _
				}
			};

			function _(e) {
				var t;
				let {
					message: i,
					channel: l,
					compact: a
				} = e, {
					guild: s,
					joinRequest: c,
					usernameHook: u,
					guildNameClick: d
				} = f(i, l), p = null == c || null == (t = c.user) ? void 0 : t.username, _ = null == s ? void 0 : s.name;
				return (0, r.jsx)(o.Z, {
					icon: n(570111),
					timestamp: i.timestamp,
					compact: a,
					children: null != p && null != _ ? m.intl.format(m.t["21R6Cg"], {
						username: p,
						usernameHook: u(),
						guildName: _,
						guildNameClick: d
					}) : m.intl.string(m.t["2VLV0d"])
				})
			}

			function h(e) {
				var t;
				let {
					message: i,
					channel: l,
					compact: a
				} = e, {
					guild: s,
					joinRequest: c,
					usernameHook: u,
					guildNameClick: d
				} = f(i, l), p = null == c || null == (t = c.user) ? void 0 : t.username, _ = null == s ? void 0 : s.name;
				return (0, r.jsx)(o.Z, {
					icon: n(474019),
					timestamp: i.timestamp,
					compact: a,
					children: null != p && null != _ ? m.intl.format(m.t["Bz/QCw"], {
						username: p,
						usernameHook: u(),
						guildName: _,
						guildNameClick: d
					}) : m.intl.string(m.t.FVF6qa)
				})
			}

			function g(e) {
				var t;
				let {
					message: i,
					channel: l,
					compact: a
				} = e, {
					guild: s,
					joinRequest: c,
					usernameHook: u,
					guildNameClick: d
				} = f(i, l), p = null == c || null == (t = c.user) ? void 0 : t.username, _ = null == s ? void 0 : s.name;
				return (0, r.jsx)(o.Z, {
					icon: n(474019),
					timestamp: i.timestamp,
					compact: a,
					children: null != p && null != _ ? m.intl.format(m.t.Kpkesr, {
						username: p,
						usernameHook: u(),
						guildName: _,
						guildNameClick: d
					}) : m.intl.string(m.t.BMlbEx)
				})
			}
		},
		527379: function(e, t, n) {
			n.d(t, {
				Dr: () => f,
				YO: () => p,
				_X: () => _,
				_o: () => m,
				nb: () => h,
				zO: () => d
			});
			var r = n(570140),
				i = n(434404),
				l = n(703656),
				a = n(430824),
				o = n(241559),
				s = n(327999),
				c = n(981631),
				u = n(176505);
			async function d(e) {
				await r.Z.dispatch({
					type: "INITIALIZE_MEMBER_SAFETY_STORE",
					guildId: e
				})
			}

			function p(e) {
				r.Z.dispatch({
					type: "MEMBER_SAFETY_NEW_MEMBER_TIMESTAMP_REFRESH",
					guildId: e
				})
			}

			function m(e, t) {
				var {
					continuationToken: n
				} = t, i = function(e, t) {
					if (null == e) return {};
					var n, r, i = function(e, t) {
						if (null == e) return {};
						var n, r, i = {},
							l = Object.keys(e);
						for (r = 0; r < l.length; r++) n = l[r], t.indexOf(n) >= 0 || (i[n] = e[n]);
						return i
					}(e, t);
					if (Object.getOwnPropertySymbols) {
						var l = Object.getOwnPropertySymbols(e);
						for (r = 0; r < l.length; r++) n = l[r], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n])
					}
					return i
				}(t, ["continuationToken"]);
				r.Z.dispatch({
					type: "MEMBER_SAFETY_PAGINATION_UPDATE",
					guildId: e,
					pagination: i
				})
			}
			async function f(e, t) {
				await r.Z.dispatch({
					type: "MEMBER_SAFETY_SEARCH_STATE_UPDATE",
					guildId: e,
					searchState: t
				})
			}

			function _(e) {
				let t = (0, o.lv)(e),
					n = a.Z.getGuild(e);
				return !!t && null != n && (n.features.has(c.oNc.MEMBER_VERIFICATION_MANUAL_APPROVAL) || n.features.has(c.oNc.COMMUNITY) || n.features.has(c.oNc.ENABLED_MODERATION_EXPERIENCE_FOR_NON_COMMUNITY) ? (0, l.uL)(c.Z5c.CHANNEL(e, u.oC.MEMBER_SAFETY)) : i.Z.open(n.id, c.pNK.MEMBERS), !0)
			}
			async function h(e, t) {
				let n = await (0, s._2)(e, t);
				return 0 === n.length ? [] : (await r.Z.dispatch({
					type: "FETCH_GUILD_MEMBER_SUPPLEMENTAL_SUCCESS",
					guildId: e,
					memberSupplementals: n
				}), n)
			}
		},
		495437: function(e, t, n) {
			n.d(t, {
				EB: () => a,
				Je: () => s,
				cf: () => o,
				mh: () => c
			});
			var r = n(570140),
				i = n(881052),
				l = n(824389);
			let a = async e => {
				r.Z.dispatch({
					type: "GUILD_PRODUCTS_FETCH",
					guildId: e
				});
				try {
					let t = await l.uV(e);
					r.Z.dispatch({
						type: "GUILD_PRODUCTS_FETCH_SUCCESS",
						guildId: e,
						products: t
					})
				} catch (t) {
					r.Z.dispatch({
						type: "GUILD_PRODUCTS_FETCH_FAILURE",
						guildId: e
					})
				}
			}, o = async (e, t) => {
				r.Z.dispatch({
					type: "GUILD_PRODUCT_FETCH",
					productId: t
				});
				try {
					let n = await l.p9(e, t);
					return r.Z.dispatch({
						type: "GUILD_PRODUCT_FETCH_SUCCESS",
						product: n
					}), n
				} catch (e) {
					throw r.Z.dispatch({
						type: "GUILD_PRODUCT_FETCH_FAILURE",
						productId: t,
						error: new i.Hx(e)
					}), e
				}
			};
			async function s(e, t, n) {
				let i = await l.Je(e, t, n);
				return r.Z.dispatch({
					type: "GUILD_PRODUCT_UPDATE",
					product: i
				}), i
			}
			async function c(e, t) {
				return await l.mh(e, t), r.Z.dispatch({
					type: "GUILD_PRODUCT_DELETE",
					productId: t
				}), !0
			}
		},
		267101: function(e, t, n) {
			n.d(t, {
				SO: () => h,
				eD: () => p,
				hO: () => m,
				r: () => _,
				ue: () => f
			}), n(388685);
			var r = n(73800),
				i = n(442837);
			n(935369);
			var l = n(38618),
				a = n(160404),
				o = n(496675),
				s = n(914010),
				c = n(495437),
				u = n(240864),
				d = n(981631);
			let p = e => {
					let t = (0, i.e7)([u.Z], () => null != e ? u.Z.getGuildProductsForGuildFetchState(e) : u.M.FETCHED, [e]),
						n = (0, i.e7)([l.Z], () => l.Z.isConnected()),
						[a, o] = r.useState(!0);
					return r.useEffect(() => {
						a && (t === u.M.NOT_FETCHED || t === u.M.FETCHED && u.Z.isGuildProductsCacheExpired(e)) && n && c.EB(e), o(!n)
					}, [e, n, t, a]), {
						listingsLoaded: t === u.M.FETCHED && !a
					}
				},
				m = function(e, t) {
					let {
						requireCurrentGuild: n
					} = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {
						requireCurrentGuild: !0
					}, a = (0, i.e7)([l.Z], () => l.Z.isConnected()), o = (0, i.e7)([s.Z], () => s.Z.getGuildId());
					return r.useEffect(() => {
						let r = u.Z.getGuildProductFetchState(t);
						if ((!n || o === e) && a && r === u.M.NOT_FETCHED) try {
							c.cf(e, t)
						} catch (e) {}
					}, [e, t, a, o, n]), (0, i.e7)([u.Z], () => u.Z.getGuildProduct(t))
				},
				f = function(e) {
					let {
						publishedOnly: t
					} = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
					return (0, i.e7)([u.Z, a.Z], () => u.Z.getGuildProductsForGuild(e, {
						publishedOnly: null != t ? t : !a.Z.isViewingServerShop(e)
					}))
				},
				_ = e => (0, i.e7)([u.Z], () => null == e ? void 0 : u.Z.getGuildProduct(e)),
				h = e => (0, i.e7)([o.Z], () => null != e && o.Z.can(d.Plq.ADMINISTRATOR, e))
		},
		824389: function(e, t, n) {
			n.d(t, {
				Je: () => o,
				gs: () => d,
				mh: () => s,
				p9: () => u,
				uV: () => c
			});
			var r = n(544891),
				i = n(881052),
				l = n(73346),
				a = n(981631);
			let o = async (e, t, n) => {
				var l, o, {
						priceTier: s,
						imageName: c,
						createNewRole: u,
						unlinkRole: d
					} = n,
					p = function(e, t) {
						if (null == e) return {};
						var n, r, i = function(e, t) {
							if (null == e) return {};
							var n, r, i = {},
								l = Object.keys(e);
							for (r = 0; r < l.length; r++) n = l[r], t.indexOf(n) >= 0 || (i[n] = e[n]);
							return i
						}(e, t);
						if (Object.getOwnPropertySymbols) {
							var l = Object.getOwnPropertySymbols(e);
							for (r = 0; r < l.length; r++) n = l[r], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n])
						}
						return i
					}(n, ["priceTier", "imageName", "createNewRole", "unlinkRole"]);
				try {
					return (await r.tn.patch({
						url: a.ANM.GUILD_PRODUCT_LISTINGS(e, t),
						body: (l = function(e) {
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
						}({}, p), o = {
							image_name: c,
							price_tier: s,
							create_new_role: u,
							unlink_role: d
						}, o = null != o ? o : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(l, Object.getOwnPropertyDescriptors(o)) : (function(e, t) {
							var n = Object.keys(e);
							if (Object.getOwnPropertySymbols) {
								var r = Object.getOwnPropertySymbols(e);
								n.push.apply(n, r)
							}
							return n
						})(Object(o)).forEach(function(e) {
							Object.defineProperty(l, e, Object.getOwnPropertyDescriptor(o, e))
						}), l),
						rejectWithError: !1
					})).body
				} catch (e) {
					throw new i.Hx(e)
				}
			}, s = async (e, t) => {
				try {
					await r.tn.del({
						url: a.ANM.GUILD_PRODUCT_LISTINGS(e, t),
						rejectWithError: !1
					})
				} catch (e) {
					throw new i.Hx(e)
				}
			}, c = async e => {
				try {
					return (await (0, l.Kb)({
						url: a.ANM.GUILD_PRODUCT_LISTINGS(e),
						rejectWithError: !1
					})).body.listings
				} catch (e) {
					throw new i.Hx(e)
				}
			}, u = async (e, t) => {
				try {
					return (await (0, l.Kb)({
						url: a.ANM.GUILD_PRODUCT_LISTINGS(e, t),
						rejectWithError: !1
					})).body
				} catch (e) {
					throw new i.Hx(e)
				}
			}, d = async e => {
				let {
					guildId: t,
					productId: n,
					attachmentId: l
				} = e;
				try {
					return (await r.tn.post({
						url: a.ANM.GUILD_PRODUCT_ATTACHMENT_DOWNLOAD(t, n, l),
						rejectWithError: !1
					})).body
				} catch (e) {
					throw new i.Hx(e)
				}
			}
		},
		240864: function(e, t, n) {
			n.d(t, {
				M: () => p,
				Z: () => C
			}), n(539854), n(388685);
			var r, i, l, a, o = n(442837),
				s = n(759174),
				c = n(570140),
				u = n(70956),
				d = n(709054),
				p = ((i = {})[i.NOT_FETCHED = 0] = "NOT_FETCHED", i[i.FETCHING = 1] = "FETCHING", i[i.FETCHED = 2] = "FETCHED", i);
			let m = {},
				f = {},
				_ = {},
				h = 10 * u.Z.Millis.MINUTE;

			function g(e) {
				return "guild:".concat(e)
			}

			function b(e) {
				return "guild:".concat(e, ":published")
			}
			let E = new s.h(e => {
					let t = [g(e.guild_id)];
					return e.published && t.push(b(e.guild_id)), t
				}, e => (function(e) {
					let t = d.default.extractTimestamp(e.id);
					return e.published ? -t : -t + 1e12
				})(e)),
				y = [];
			class x extends(r = o.ZP.Store) {
				getGuildProductsForGuildFetchState(e) {
					var t;
					return null != (t = m[e]) ? t : 0
				}
				getGuildProduct(e) {
					return E.get(e)
				}
				getGuildProductsForGuild(e, t) {
					let {
						publishedOnly: n
					} = t;
					return null == e ? y : E.values(n ? b(e) : g(e))
				}
				getGuildProductFetchState(e) {
					var t;
					return null != (t = f[e]) ? t : 0
				}
				isGuildProductsCacheExpired(e) {
					var t;
					return Date.now() - (null != (t = _[e]) ? t : 0) > h
				}
			}
			a = "GuildProductsStore", (l = "displayName") in x ? Object.defineProperty(x, l, {
				value: a,
				enumerable: !0,
				configurable: !0,
				writable: !0
			}) : x[l] = a;
			let C = new x(c.Z, {
				CONNECTION_OPEN: function() {
					E.clear(), m = {}, f = {}, _ = {}
				},
				GUILD_PRODUCTS_FETCH: function(e) {
					let {
						guildId: t
					} = e;
					m[t] = 1, [...E.values(g(t))].forEach(e => {
						E.delete(e.id)
					})
				},
				GUILD_PRODUCTS_FETCH_SUCCESS: function(e) {
					let {
						guildId: t,
						products: n
					} = e;
					m[t] = 2, _[t] = Date.now(), n.forEach(e => {
						E.set(e.id, e), f[e.id] = 2
					})
				},
				GUILD_PRODUCTS_FETCH_FAILURE: function(e) {
					let {
						guildId: t
					} = e;
					m[t] = 2
				},
				GUILD_PRODUCT_CREATE: function(e) {
					let {
						product: t
					} = e;
					E.set(t.id, t)
				},
				GUILD_PRODUCT_UPDATE: function(e) {
					let {
						product: t
					} = e;
					E.set(t.id, t)
				},
				GUILD_PRODUCT_DELETE: function(e) {
					let {
						productId: t
					} = e;
					E.delete(t)
				},
				GUILD_PRODUCT_FETCH: function(e) {
					let {
						productId: t
					} = e;
					f[t] = 1
				},
				GUILD_PRODUCT_FETCH_SUCCESS: function(e) {
					let {
						product: t
					} = e;
					f[t.id] = 2, E.set(t.id, t)
				},
				GUILD_PRODUCT_FETCH_FAILURE: function(e) {
					let {
						productId: t,
						error: n
					} = e;
					f[t] = 2, 404 === n.status && E.delete(t)
				}
			})
		},
		863663: function(e, t, n) {
			n.d(t, {
				NB: () => a,
				ar: () => u,
				fG: () => c,
				kg: () => o,
				pM: () => s
			}), n(781311), n(953529);
			var r = n(881052);
			n(496675);
			var i = n(981631),
				l = n(388032);
			let a = "_role";

			function o(e) {
				if (!(e >= 0)) switch (-e) {
					case i.evJ.ENTITY_TOO_LARGE:
						return l.intl.string(l.t.YbdEFB);
					case i.evJ.INVALID_SKU_ATTACHMENT_NO_ARCHIVES:
						return l.intl.string(l.t.ZaXBoK);
					case 1:
						return l.intl.string(l.t.R0RpRU);
					default:
						return l.intl.formatToPlainString(l.t.cYwlp6, {
							code: -e
						})
				}
			}

			function s(e) {
				let {
					newRoleParams: t
				} = e;
				if (null != t && "" === t.name.trim()) {
					var n;
					return n = l.intl.string(l.t["V0B/k5"]), new r.Hx({
						status: 400,
						body: {
							message: "Invalid form body",
							errors: {
								[a]: {
									_errors: [{
										code: "",
										message: n
									}]
								}
							}
						}
					})
				}
			}

			function c(e) {
				var t;
				let {
					guildProductListing: n,
					name: r,
					priceTier: i,
					description: l,
					image: a,
					imageName: o,
					isImageChanged: s,
					newRoleParams: c,
					hasUnsavedAttachmentChanges: u
				} = e, d = {};
				(null == n ? void 0 : n.name) !== r && "" !== r.trim() && (d.name = r), (null != (t = null == n ? void 0 : n.description) ? t : "") !== l && (d.description = l), (null == n ? void 0 : n.price_tier) !== i && null != i && (d.priceTier = i), null != c && "" !== c.name.trim() ? d.createNewRole = !0 : null === c && (d.unlinkRole = !0), a.startsWith("data:") && (s || null == n && (Object.keys(d).length > 0 || u)) && (d.image = a, d.imageName = o);
				let p = Object.keys(d).length > 0 || u;
				return {
					changes: d,
					hasUnsavedChanges: p,
					canSaveForDraft: p,
					canSaveForPublished: p,
					canPublishOrUnpublish: !(null == n || p)
				}
			}

			function u(e, t) {
				return "".concat(location.protocol, "//").concat(location.host).concat(i.Z5c.GUILD_PRODUCT(e, t))
			}
		},
		179838: function(e, t, n) {
			n.d(t, {
				L: () => i
			});
			var r = n(782568);

			function i(e) {
				return (0, r.Z)(e)
			}
		},
		406877: function(e, t, n) {
			n.d(t, {
				Z: () => c
			}), n(388685);
			var r = n(73800),
				i = n(668781),
				l = n(881052),
				a = n(824389),
				o = n(179838),
				s = n(388032);

			function c(e, t) {
				let [n, c] = r.useState(!1);
				return {
					isLoading: n,
					downloadAttachment: r.useCallback(async n => {
						if (null != e && null != t) {
							c(!0);
							try {
								let {
									url: r
								} = await a.gs({
									guildId: e,
									productId: t,
									attachmentId: n
								});
								await o.L(r)
							} catch (t) {
								let e = t instanceof l.Hx ? t.getAnyErrorMessage() : void 0;
								i.Z.show({
									title: s.intl.string(s.t.R0RpRU),
									body: null != e ? e : s.intl.string(s.t.eAn6z8)
								})
							} finally {
								c(!1)
							}
						}
					}, [e, t])
				}
			}
		},
		676651: function(e, t, n) {
			n.d(t, {
				h: () => a
			});
			var r = n(255367);
			n(73800);
			var i = n(481060),
				l = n(302463);

			function a(e, t) {
				(0, i.ZDy)(async () => {
					let {
						default: i
					} = await n.e("73628").then(n.bind(n, 458961));
					return n => (0, r.jsx)(i, function(e) {
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
						guildId: e,
						productId: t
					}, n))
				}, {
					modalKey: l.Yz
				})
			}
		},
		623488: function(e, t, n) {
			n.d(t, {
				Z: () => _
			}), n(953529);
			var r = n(255367);
			n(73800);
			var i = n(120356),
				l = n.n(i),
				a = n(481060),
				o = n(313201),
				s = n(240657),
				c = n(765400),
				u = n(916001),
				d = n(388032),
				p = n(940792);

			function m(e) {
				let {
					hidePurchaseToUnlockBadge: t,
					showDraftBadge: n,
					className: i,
					children: o
				} = e;
				return (0, r.jsxs)("div", {
					className: l()(p.productThumbnailContainer, i),
					children: [o, !t && (0, r.jsxs)("div", {
						className: p.purchaseToUnlockBadge,
						children: [(0, r.jsx)(a.mBM, {
							size: "xs",
							className: p.lockIcon,
							color: "currentColor",
							"aria-hidden": !0
						}), (0, r.jsx)(a.Text, {
							variant: "text-sm/normal",
							color: "always-white",
							className: p.__invalid_unlockText,
							children: d.intl.string(d.t.YmIiSU)
						})]
					}), n && (0, r.jsx)("div", {
						className: p.draftBadge,
						children: (0, r.jsx)(c.v, {})
					})]
				})
			}

			function f(e) {
				let {
					onShowFullDescription: t,
					variant: n
				} = e, i = (0, r.jsxs)(r.Fragment, {
					children: [(0, r.jsx)(a.Text, {
						variant: n,
						color: null != t ? "text-link" : "interactive-hover",
						children: d.intl.string(d.t["5fmYjY"])
					}), (0, r.jsx)(a.ZSh, {
						size: "xs",
						color: "currentColor",
						className: p.arrowIcon
					})]
				});
				return null == t ? (0, r.jsx)("div", {
					className: p.showMoreButton,
					children: i
				}) : (0, r.jsx)(a.P3F, {
					className: l()(p.showMoreButton, p.hasAction),
					onClick: e => {
						e.stopPropagation(), null != t && t()
					},
					children: i
				})
			}

			function _(e) {
				let {
					imageUrl: t,
					name: n,
					description: i,
					formattedPrice: c,
					role: _,
					ctaComponent: h,
					shouldShowFullDescriptionButton: g = !0,
					onShowFullDescription: b,
					productType: E,
					onTapCard: y,
					actionMenu: x,
					showOpaqueBackground: C = !1,
					hideRoleTag: v = !1,
					lineClamp: O = 1,
					cardWidth: j = 332,
					cardHeight: I,
					thumbnailHeight: S = 187,
					descriptionTextVariant: T = "text-sm/normal",
					isDraft: N = !1
				} = e, P = (0, o.hQ)(), A = (0, r.jsxs)(r.Fragment, {
					children: [(0, r.jsx)(m, {
						showDraftBadge: N,
						hidePurchaseToUnlockBadge: !0,
						children: (0, r.jsx)("img", {
							alt: "",
							src: t,
							className: p.productThumbnail,
							style: {
								height: S
							}
						})
					}), (0, r.jsxs)("div", {
						className: p.productDetails,
						children: [(0, r.jsxs)("div", {
							className: p.productDetailContent,
							children: [(0, r.jsx)(a.X6q, {
								variant: "text-md/medium",
								color: "header-primary",
								className: p.productName,
								id: P,
								children: n
							}), (0, r.jsx)(a.Rny, {
								children: (0, r.jsx)(s.Z, {
									variant: T,
									color: "text-muted",
									lineClamp: O,
									text: i
								})
							}), g && (0, r.jsx)(f, {
								onShowFullDescription: b,
								variant: T
							}), v || null == _ || "" === _.name ? null : (0, r.jsxs)(r.Fragment, {
								children: [(0, r.jsx)(a.LZC, {
									size: 16
								}), (0, r.jsx)(u.Z, {
									role: _
								})]
							})]
						}), x]
					}), (0, r.jsxs)("div", {
						className: p.purchaseDetails,
						children: [(0, r.jsx)(a.Text, {
							variant: "text-md/medium",
							color: "interactive-active",
							className: p.__invalid_productPrice,
							children: null != c ? c : d.intl.string(d.t["4uLhAg"])
						}), (0, r.jsx)(a.Text, {
							variant: "text-xxs/normal",
							color: "text-default",
							className: p.__invalid_productType,
							children: E
						}), (0, r.jsx)("div", {
							className: p.productActionButton,
							onClick: e => {
								e.stopPropagation()
							},
							children: h
						})]
					})]
				});
				return null == y ? (0, r.jsx)("article", {
					className: l()(p.productCard, C ? p.opaqueBackground : p.solidBackground),
					"aria-labelledby": P,
					children: A
				}) : (0, r.jsx)("div", {
					style: {
						width: j,
						height: I
					},
					children: (0, r.jsx)(a.kL8, {
						tag: "article",
						"aria-label": d.intl.formatToPlainString(d.t["e+TmJS"], {
							productName: n
						}),
						className: l()(p.productCard, C ? p.opaqueBackground : p.solidBackground, p.cardClickableContainer),
						onClick: y,
						children: A
					})
				})
			}
		},
		637618: function(e, t, n) {
			n.d(t, {
				Z: () => p
			}), n(388685), n(35282);
			var r = n(255367);
			n(73800);
			var i = n(990547),
				l = n(399606),
				a = n(100527),
				o = n(213609),
				s = n(914010),
				c = n(267101),
				u = n(675297),
				d = n(20281);

			function p(e) {
				let {
					code: t
				} = e, [n, p] = t.split("-"), m = (0, c.hO)(n, p), f = (0, l.e7)([s.Z], () => s.Z.getGuildId());
				return ((0, o.Z)({
					type: d.n.VIEW,
					name: i.ImpressionNames.GUILD_PRODUCT_LISTING_EMBED,
					properties: {
						guild_product_listing_id: p,
						has_entitlement: (null == m ? void 0 : m.has_entitlement) === !0
					}
				}, {
					disableTrack: null == m
				}), null == m || f !== n) ? null : (0, r.jsx)(u.H, {
					guildProductListing: m,
					guildId: n,
					location: a.Z.GUILD_PRODUCT_EMBED_CARD,
					cardWidth: 390,
					thumbnailHeight: 219
				})
			}
		},
		942833: function(e, t, n) {
			n.d(t, {
				C: () => a,
				k: () => o
			});
			var r = n(73800),
				i = n(937615),
				l = n(388032);

			function a(e) {
				return r.useMemo(() => {
					if (null == e) return;
					let t = null != e.role_id,
						n = e.attachments_count > 0;
					return t && n ? l.intl.string(l.t.ih4QMT) : t ? l.intl.string(l.t.o9xphY) : n ? l.intl.string(l.t.DWYJub) : void 0
				}, [e])
			}

			function o(e) {
				return r.useMemo(() => {
					if ((null == e ? void 0 : e.price) == null) return;
					let {
						amount: t,
						currency: n
					} = e.price;
					return (0, i.T4)(t, n)
				}, [e])
			}
		},
		596211: function(e, t, n) {
			n.d(t, {
				Z: () => a
			});
			var r = n(255367);
			n(73800);
			var i = n(755721),
				l = n(406877);

			function a(e) {
				var t, n, {
						guildId: a,
						productId: o,
						attachmentId: s
					} = e,
					c = function(e, t) {
						if (null == e) return {};
						var n, r, i = function(e, t) {
							if (null == e) return {};
							var n, r, i = {},
								l = Object.keys(e);
							for (r = 0; r < l.length; r++) n = l[r], t.indexOf(n) >= 0 || (i[n] = e[n]);
							return i
						}(e, t);
						if (Object.getOwnPropertySymbols) {
							var l = Object.getOwnPropertySymbols(e);
							for (r = 0; r < l.length; r++) n = l[r], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n])
						}
						return i
					}(e, ["guildId", "productId", "attachmentId"]);
				let {
					isLoading: u,
					downloadAttachment: d
				} = (0, l.Z)(a, o);
				return (0, r.jsx)(i.zx, (t = function(e) {
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
				}({}, c), n = n = {
					submitting: u,
					onClick: function() {
						d(s)
					}
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
		},
		400916: function(e, t, n) {
			n.d(t, {
				Z: () => _
			});
			var r = n(255367);
			n(73800);
			var i = n(512722),
				l = n.n(i),
				a = n(399606),
				o = n(755721),
				s = n(481060),
				c = n(671533),
				u = n(240864),
				d = n(613810),
				p = n(596211),
				m = n(388032),
				f = n(165674);

			function _(e) {
				var t, n, i, _;
				let {
					guildId: h,
					productId: g
				} = e, b = (0, a.e7)([u.Z], () => u.Z.getGuildProduct(g)), E = (null != (_ = null == b || null == (t = b.attachments) ? void 0 : t.length) ? _ : 0) > 1, y = null == b || null == (i = b.attachments) || null == (n = i[0]) ? void 0 : n.id;
				return E ? (0, r.jsxs)(o.zx, {
					onClick: function() {
						d.Z.open({
							guildId: h,
							productId: g
						})
					},
					innerClassName: f.textWithIcon,
					children: [(0, r.jsx)("div", {
						children: m.intl.string(m.t.UyuiUF)
					}), (0, r.jsx)(s.LZC, {
						size: 8,
						horizontal: !0
					}), (0, r.jsx)(c.Z, {
						width: 16,
						height: 16,
						direction: c.Z.Directions.RIGHT
					})]
				}) : (l()(null != y, "No attachment"), (0, r.jsxs)(p.Z, {
					guildId: h,
					productId: g,
					attachmentId: y,
					innerClassName: f.textWithIcon,
					children: [(0, r.jsx)("div", {
						children: m.intl.string(m.t.t9bE9f)
					}), (0, r.jsx)(s.LZC, {
						size: 8,
						horizontal: !0
					}), (0, r.jsx)(s._8t, {
						size: "xs",
						color: "currentColor"
					})]
				}))
			}
		},
		675297: function(e, t, n) {
			n.d(t, {
				H: () => y
			}), n(953529);
			var r = n(255367);
			n(73800);
			var i = n(399606),
				l = n(166081),
				a = n(54797),
				o = n(674180),
				s = n(485386),
				c = n(430824),
				u = n(572004),
				d = n(267101),
				p = n(863663),
				m = n(676651),
				f = n(623488),
				_ = n(942833),
				h = n(391181),
				g = n(964793),
				b = n(226060),
				E = n(981631);

			function y(e) {
				let {
					guildProductListing: t,
					guildId: n,
					location: y,
					shouldShowFullDescriptionButton: x = !0,
					hideRoleTag: C = !1,
					lineClamp: v = 1,
					cardWidth: O,
					cardHeight: j,
					thumbnailHeight: I,
					descriptionTextVariant: S = "text-sm/normal",
					showOpaqueBackground: T = !1
				} = e, N = (0, i.e7)([c.Z], () => c.Z.getGuild(n), [n]), P = (0, i.e7)([s.Z], () => {
					var e;
					return s.Z.getRole(n, null != (e = null == t ? void 0 : t.role_id) ? e : E.lds)
				}), A = (0, l.U)(t, 600), w = (0, _.C)(t), Z = (0, d.SO)(N), {
					shouldHideGuildPurchaseEntryPoints: R
				} = (0, o.uP)(n), k = (0, _.k)(t);
				if (null == N || R) return null;
				let L = () => (0, g.e)({
						guildId: n,
						guildProductListingId: t.id,
						analyticsLocation: y
					}),
					D = (0, r.jsx)(h.m, {
						product: t,
						guildId: n,
						showEditProduct: Z,
						showUnpublishProduct: !1,
						showCopyLink: !0,
						showTestDownload: !1,
						showDeleteProduct: !1,
						showReportProduct: !0,
						onEditProduct: Z ? () => {
							m.h(N.id, t.id)
						} : () => {},
						onUnpublishProduct: () => {},
						onDeleteProduct: () => {},
						onReportProduct: () => {
							(0, a.x)({
								listing: t
							})
						},
						onCopyProductLink: () => {
							(0, u.JG)((0, p.ar)(n, t.id))
						},
						onTestDownload: () => {}
					});
				return (0, r.jsx)(f.Z, {
					imageUrl: A,
					name: t.name,
					description: t.description,
					formattedPrice: k,
					role: P,
					ctaComponent: (0, r.jsx)(b.Z, {
						guildId: n,
						guildProductListingId: t.id,
						sourceAnalyticsLocations: y
					}),
					productType: w,
					shouldShowFullDescriptionButton: x,
					onShowFullDescription: L,
					onTapCard: L,
					actionMenu: D,
					showOpaqueBackground: T,
					hideRoleTag: C,
					lineClamp: v,
					cardWidth: O,
					cardHeight: j,
					thumbnailHeight: I,
					descriptionTextVariant: S,
					isDraft: !t.published
				}, t.id)
			}
		},
		226060: function(e, t, n) {
			n.d(t, {
				Z: () => h
			});
			var r = n(255367);
			n(73800);
			var i = n(512722),
				l = n.n(i),
				a = n(399606),
				o = n(481060),
				s = n(607070),
				c = n(430824),
				u = n(506071),
				d = n(267101),
				p = n(240864),
				m = n(57949),
				f = n(400916),
				_ = n(388032);

			function h(e) {
				let {
					guildId: t,
					guildProductListingId: n,
					sourceAnalyticsLocations: i
				} = e, h = (0, a.e7)([p.Z], () => p.Z.getGuildProduct(n)), g = (0, a.e7)([c.Z], () => c.Z.getGuild(t), [t]), b = (0, a.e7)([s.Z], () => s.Z.useReducedMotion), E = (0, u.n)();
				return (l()(null != g, "guild cannot be null"), l()(null != h, "guildProductListing cannot be null"), (0, d.SO)(g)) ? (0, r.jsx)(o.ua7, {
					text: _.intl.string(_.t.sAJr9f),
					children: e => {
						var t, n;
						return (0, r.jsx)(o.zxk, (t = function(e) {
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
							variant: "primary",
							text: _.intl.string(_.t.xUi3BA)
						}, e), n = n = {
							disabled: !0
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
				}) : h.has_entitlement ? null != h.attachments ? (0, r.jsx)(f.Z, {
					guildId: g.id,
					productId: h.id
				}) : (0, r.jsx)(o.zxk, {
					variant: "secondary",
					text: _.intl.string(_.t.RcTOGB),
					disabled: !0
				}) : (0, r.jsx)(o.gtL, {
					shineSize: o.gtL.ShineSizes.SMALL,
					pauseAnimation: b || !E,
					onClick: () => (0, m.z)({
						guildProductListing: h,
						guildId: g.id,
						sourceAnalyticsLocations: i
					}),
					children: _.intl.string(_.t.xUi3BA)
				})
			}
		},
		916001: function(e, t, n) {
			n.d(t, {
				Z: () => s
			});
			var r = n(255367);
			n(73800);
			var i = n(866442),
				l = n(481060),
				a = n(388032),
				o = n(838997);

			function s(e) {
				let {
					locked: t,
					role: n,
					textVariant: s = "text-xs/medium"
				} = e, c = (0, l.dQu)(l.TVs.colors.INTERACTIVE_NORMAL).hex();
				return (0, r.jsx)("div", {
					className: o.roleTagContainer,
					children: (0, r.jsxs)("div", {
						className: o.roleTag,
						children: [(0, r.jsx)("div", {
							className: o.roleColor,
							style: {
								backgroundColor: (0, i.Rf)(n.color)
							}
						}), (0, r.jsx)(l.LZC, {
							size: 8,
							horizontal: !0
						}), (0, r.jsxs)(l.Text, {
							variant: s,
							color: "text-default",
							children: [(0, r.jsx)(l.nn4, {
								children: a.intl.string(a.t.RnyseH)
							}), n.name]
						}), !0 === t && (0, r.jsxs)(r.Fragment, {
							children: [(0, r.jsx)(l.LZC, {
								size: 8,
								horizontal: !0
							}), (0, r.jsx)(l.mBM, {
								size: "md",
								color: c
							})]
						})]
					})
				})
			}
		},
		613810: function(e, t, n) {
			n.d(t, {
				Z: () => l
			});
			var r = n(255367);
			n(73800);
			var i = n(481060);
			let l = {
				open: function(e) {
					(0, i.ZDy)(async () => {
						let {
							default: t
						} = await n.e("53162").then(n.bind(n, 490576));
						return n => (0, r.jsx)(t, function(e) {
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
						}({}, e, n))
					})
				}
			}
		},
		391181: function(e, t, n) {
			n.d(t, {
				Z: () => y,
				m: () => E
			});
			var r = n(255367),
				i = n(73800),
				l = n(120356),
				a = n.n(l),
				o = n(481060),
				s = n(239091),
				c = n(166081),
				u = n(937615),
				d = n(942833),
				p = n(48691),
				m = n(231338),
				f = n(388032),
				_ = n(306846);

			function h(e) {
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

			function g(e, t) {
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

			function b(e) {
				let {
					showEditProduct: t,
					showUnpublishProduct: n,
					showCopyLink: i,
					showTestDownload: l,
					showDeleteProduct: a,
					showReportProduct: s,
					onEditProduct: c,
					onUnpublishProduct: u,
					onDeleteProduct: d,
					onCopyLink: p,
					onTestDownload: m,
					onReportProduct: h,
					closePopout: g,
					onSelect: b
				} = e;
				return (0, r.jsx)("div", {
					className: _.menuContainer,
					children: (0, r.jsxs)(o.v2r, {
						navId: "guild-product-context",
						onClose: g,
						"aria-label": f.intl.string(f.t.Z146dH),
						onSelect: b,
						children: [(0, r.jsxs)(o.kSQ, {
							children: [t && (0, r.jsx)(o.sNh, {
								id: "guild-product-edit",
								label: f.intl.string(f.t.EEfce3),
								action: c
							}), i && (0, r.jsx)(o.sNh, {
								id: "guild-product-copy-link",
								label: f.intl.string(f.t.XR26ur),
								icon: o.xPt,
								action: p
							}), l && (0, r.jsx)(o.sNh, {
								id: "guild-product-test-download",
								label: f.intl.string(f.t.aXoI6e),
								icon: o._8t,
								action: m
							})]
						}), (0, r.jsxs)(o.kSQ, {
							children: [n && (0, r.jsx)(o.sNh, {
								id: "guild-product-unpublish",
								label: f.intl.string(f.t.QrkMlJ),
								action: u
							}), a && (0, r.jsx)(o.sNh, {
								id: "guild-product-delete",
								label: f.intl.string(f.t.zWjqvL),
								color: "danger",
								action: d
							})]
						}), (0, r.jsx)(o.kSQ, {
							children: s && (0, r.jsx)(o.sNh, {
								id: "guild-product-report",
								label: f.intl.string(f.t["6yUzvL"]),
								color: "danger",
								action: h
							})
						})]
					})
				})
			}

			function E(e) {
				let {
					product: t,
					guildId: n,
					showEditProduct: l,
					showUnpublishProduct: a,
					showTestDownload: s,
					showCopyLink: c,
					showDeleteProduct: u,
					showReportProduct: d,
					onEditProduct: p,
					onUnpublishProduct: m,
					onDeleteProduct: E,
					onCopyProductLink: y,
					onTestDownload: x,
					onReportProduct: C
				} = e, v = i.useRef(null);
				return (0, r.jsx)("div", {
					onClick: e => {
						e.stopPropagation()
					},
					children: (0, r.jsx)(o.yRy, {
						targetElementRef: v,
						position: "right",
						align: "top",
						spacing: -8,
						animation: o.yRy.Animation.FADE,
						renderPopout: e => (0, r.jsx)(b, g(h({}, e), {
							guildId: n,
							productId: t.id,
							showEditProduct: l,
							showUnpublishProduct: a,
							showCopyLink: c,
							showTestDownload: s,
							showReportProduct: d,
							showDeleteProduct: u,
							onEditProduct: p,
							onUnpublishProduct: m,
							onDeleteProduct: E,
							onCopyLink: y,
							onTestDownload: x,
							onReportProduct: C
						})),
						children: (e, n) => {
							let {
								isShown: i
							} = n;
							return (0, r.jsx)(o.P3F, g(h({}, e), {
								innerRef: v,
								"aria-label": f.intl.formatToPlainString(f.t.RtqjeH, {
									productName: t.name
								}),
								"aria-haspopup": "listbox",
								"aria-expanded": i,
								className: _.productActionMenuButton,
								children: (0, r.jsx)(o.Huf, {
									size: "md",
									color: "currentColor",
									className: _.productActionMenuIcon,
									"aria-hidden": !0
								})
							}))
						}
					})
				})
			}

			function y(e) {
				let {
					product: t,
					guildId: n,
					onEditProduct: i,
					onUnpublishProduct: l,
					onDeleteProduct: y,
					onCopyProductLink: x,
					onTestDownload: C,
					disabled: v = !1
				} = e, O = (0, c.U)(t, 600), j = null !== t.price_tier ? (0, u.T4)(t.price_tier, m.pK.USD) : void 0, I = (0, d.C)(t);
				return (0, r.jsxs)(o.kL8, {
					tag: "article",
					className: a()(_.productCardClickable, _.productCard, {
						[_.disabled]: v
					}),
					onClick: v ? void 0 : i,
					onContextMenu: function(e) {
						(0, s.jW)(e, () => Promise.resolve(e => (0, r.jsx)(b, g(h({}, e), {
							closePopout: s.Zy,
							guildId: n,
							productId: t.id,
							showEditProduct: !0,
							showUnpublishProduct: t.published,
							showCopyLink: t.published,
							showTestDownload: null != t.attachments,
							showDeleteProduct: !0,
							showReportProduct: !1,
							onEditProduct: i,
							onUnpublishProduct: l,
							onDeleteProduct: y,
							onCopyLink: x,
							onTestDownload: C,
							onReportProduct: () => {}
						}))))
					},
					"aria-label": f.intl.formatToPlainString(f.t["X/yAKi"], {
						productName: t.name
					}),
					children: [(0, r.jsx)("img", {
						alt: "",
						src: O,
						className: _.productThumbnail
					}), (0, r.jsxs)("div", {
						className: _.productInfo,
						children: [(0, r.jsxs)("div", {
							className: _.productInfoContent,
							children: [(0, r.jsx)(o.X6q, {
								variant: "text-md/semibold",
								color: "header-primary",
								className: _.productName,
								children: t.name
							}), (0, r.jsx)(o.LZC, {
								size: 8
							}), (0, r.jsxs)("div", {
								className: _.productDetails,
								children: [(0, r.jsx)(o.Text, {
									variant: "text-md/normal",
									color: "header-secondary",
									children: j
								}), null != I ? (0, r.jsxs)(r.Fragment, {
									children: [(0, r.jsx)("div", {
										className: _.dotSeparator
									}), (0, r.jsx)(o.Text, {
										variant: "text-md/normal",
										color: "header-secondary",
										children: I
									})]
								}) : null]
							}), (0, r.jsx)(o.LZC, {
								size: 16
							}), t.published ? (0, r.jsx)(p.t, {}) : (0, r.jsx)(p.b, {})]
						}), !v && (0, r.jsx)(E, {
							product: t,
							guildId: n,
							showEditProduct: !0,
							showUnpublishProduct: t.published,
							showCopyLink: t.published,
							showTestDownload: null != t.attachments,
							showDeleteProduct: !0,
							showReportProduct: !1,
							onEditProduct: i,
							onUnpublishProduct: l,
							onDeleteProduct: y,
							onCopyProductLink: x,
							onTestDownload: C,
							onReportProduct: () => {}
						})]
					})]
				})
			}
		},
		48691: function(e, t, n) {
			n.d(t, {
				b: () => p,
				t: () => d
			});
			var r = n(255367);
			n(73800);
			var i = n(481060),
				l = n(44315),
				a = n(377171),
				o = n(981631),
				s = n(388032),
				c = n(28651);

			function u(e) {
				let {
					label: t,
					backgroundColor: n = a.Z.BUTTON_SECONDARY_BACKGROUND,
					icon: l,
					iconColor: o
				} = e;
				return (0, r.jsxs)("div", {
					className: c.badge,
					style: {
						backgroundColor: n
					},
					children: [(0, r.jsx)(i.Text, {
						variant: "text-sm/normal",
						color: "always-white",
						className: c.__invalid_badgeText,
						children: t
					}), (0, r.jsx)(l, {
						className: c.badgeIcon,
						color: null != o ? o : "currentColor",
						"aria-hidden": !0
					})]
				})
			}

			function d() {
				return (0, r.jsx)(u, {
					label: s.intl.string(s.t["I+02Gh"]),
					backgroundColor: "#207B8D",
					icon: i.T$Z
				})
			}

			function p() {
				return (0, r.jsx)(u, {
					label: s.intl.string(s.t.TgsPaG),
					icon: i.vdY,
					iconColor: (0, l.Lq)(o.Ilk.PRIMARY_330)
				})
			}
		},
		964793: function(e, t, n) {
			n.d(t, {
				e: () => l
			});
			var r = n(255367);
			n(73800);
			var i = n(481060);

			function l(e) {
				(0, i.ZDy)(async () => {
					let {
						default: t
					} = await n.e("38062").then(n.bind(n, 546604));
					return n => (0, r.jsx)(t, function(e) {
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
					}({}, e, n))
				})
			}
		},
		57949: function(e, t, n) {
			n.d(t, {
				z: () => u
			});
			var r = n(255367);
			n(73800);
			var i = n(772848),
				l = n(481060),
				a = n(159351),
				o = n(667),
				s = n(626135),
				c = n(981631);

			function u(e) {
				let {
					guildProductListing: t,
					guildId: u,
					sourceAnalyticsLocations: d
				} = e, p = !1, m = (0, i.Z)(), f = t.id, _ = () => {
					p = !0
				};
				(0, l.ZDy)(async () => {
					let {
						default: e
					} = await n.e("88806").then(n.bind(n, 578780));
					return n => {
						var i, l;
						return (0, r.jsx)(e, (i = function(e) {
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
						}({}, n), l = l = {
							applicationId: t.application_id,
							skuId: f,
							sourceAnalyticsLocations: d,
							guildProductContext: {
								guildProductListingId: t.id,
								guildId: u
							},
							loadId: m,
							onComplete: _
						}, Object.getOwnPropertyDescriptors ? Object.defineProperties(i, Object.getOwnPropertyDescriptors(l)) : (function(e, t) {
							var n = Object.keys(e);
							if (Object.getOwnPropertySymbols) {
								var r = Object.getOwnPropertySymbols(e);
								n.push.apply(n, r)
							}
							return n
						})(Object(l)).forEach(function(e) {
							Object.defineProperty(i, e, Object.getOwnPropertyDescriptor(l, e))
						}), i))
					}
				}, {
					onCloseCallback: () => {
						p || s.default.track(c.rMx.PAYMENT_FLOW_CANCELED, {
							load_id: m,
							payment_type: c.Zuq[c.GZQ.ONE_TIME],
							is_gift: !1,
							sku_id: f,
							location_stack: Array.isArray(d) ? d : [d]
						}), (0, a.fw)(), (0, o.p)()
					},
					onCloseRequest: c.dG4
				})
			}
		},
		331372: function(e, t, n) {
			n.d(t, {
				Z: () => o
			});
			var r = n(255367);
			n(73800);
			var i = n(325767);

			function l(e) {
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

			function a(e, t) {
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

			function o(e) {
				var {
					width: t = 440,
					height: n = 200,
					avatar: o
				} = e, s = function(e, t) {
					if (null == e) return {};
					var n, r, i = function(e, t) {
						if (null == e) return {};
						var n, r, i = {},
							l = Object.keys(e);
						for (r = 0; r < l.length; r++) n = l[r], t.indexOf(n) >= 0 || (i[n] = e[n]);
						return i
					}(e, t);
					if (Object.getOwnPropertySymbols) {
						var l = Object.getOwnPropertySymbols(e);
						for (r = 0; r < l.length; r++) n = l[r], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n])
					}
					return i
				}(e, ["width", "height", "avatar"]);
				return (0, r.jsxs)("svg", a(l(a(l({}, (0, i.Z)(s)), {
					width: t,
					height: n,
					viewBox: "0 0 ".concat(t, " ").concat(n),
					fill: "none",
					xmlns: "http://www.w3.org/2000/svg"
				}), s), {
					children: [(0, r.jsx)("rect", {
						y: "12",
						width: "440",
						height: "176",
						rx: "4",
						fill: "url(#paint0_linear_0_1)"
					}), (0, r.jsx)("path", {
						d: "M4 12C1.79086 12 0 13.7909 0 16V87.7111C0 89.0292 0.644578 90.2711 1.75757 90.9773C19.6029 102.3 40.6908 102.01 54.593 95.3775C74.7698 85.8079 78.9758 61.6391 58.8478 45.7384C50.2069 38.7483 44.7223 29.0027 45.9176 20.7172C46.434 17.1376 44.0823 12 40.4657 12H4Z",
						fill: "#3442D9"
					}), (0, r.jsx)("path", {
						d: "M440 44.2244C440 42.4907 438.885 40.9507 437.228 40.4399C387.67 25.1621 330.882 28.8097 301.274 66.4895C271.113 104.874 240.425 106.271 206.014 93.988C172.008 81.8488 55.3406 98.3422 74.0098 184.887C74.3973 186.683 76.0228 188 77.8605 188H436C438.209 188 440 186.209 440 184V44.2244Z",
						fill: "#3442D9"
					}), (0, r.jsx)("path", {
						d: "M397.403 63.2537C395.463 62.0597 394.269 60.2687 393.97 58.0299L393.373 54.2985C393.373 54.1493 393.224 54 392.925 54C392.776 54 392.627 54.1493 392.627 54.2985L392.03 58.0299C391.731 60.2687 390.537 62.0597 388.597 63.2537L388.149 63.5522C388 63.7015 388 63.8507 388 64C388 64.1493 388 64.1493 388.149 64.2985L388.597 64.597C390.537 65.791 391.731 67.5821 392.03 69.8209L392.627 73.5522C392.627 73.8507 392.776 74 392.925 74C393.224 74 393.373 73.8507 393.373 73.5522L393.97 69.8209C394.269 67.5821 395.463 65.791 397.403 64.597L397.851 64.2985C398 64.1493 398 64.1493 398 64C398 63.8507 398 63.7015 397.851 63.5522L397.403 63.2537Z",
						fill: "#57F287"
					}), (0, r.jsx)("path", {
						d: "M300.628 164.106C299.09 163.2 298.013 161.691 297.705 159.879L297.244 156.86C297.244 156.71 297.09 156.559 296.936 156.559C296.782 156.559 296.628 156.71 296.628 156.86L296.167 159.879C296.013 161.691 294.936 163.2 293.398 164.106L292.936 164.408C292.782 164.559 292.782 164.559 292.782 164.71V165.011H293.244C294.782 165.917 295.859 167.577 296.013 169.389L296.475 172.408C296.475 172.559 296.628 172.559 296.782 172.559C296.936 172.559 297.09 172.559 297.09 172.408L297.551 169.389C297.859 167.577 298.936 166.068 300.475 165.011H300.782V164.71C300.782 164.559 300.782 164.408 300.628 164.408V164.106Z",
						fill: "#808AFF"
					}), (0, r.jsx)("path", {
						d: "M232.642 35.4003C231.478 34.6839 230.761 33.5197 230.582 32.1765L230.224 30.0272C230.224 29.8481 230.134 29.7585 229.955 29.7585C229.866 29.7585 229.776 29.8481 229.776 30.0272L229.418 32.1765C229.239 33.5197 228.522 34.6839 227.358 35.4003L227.09 35.5794C227 35.669 227 35.669 227 35.7585C227 35.8481 227 35.9376 227.09 35.9376L227.358 36.2063C228.522 36.9227 229.239 37.9974 229.418 39.3406L229.776 41.5794C229.776 41.669 229.866 41.7585 229.955 41.7585C230.134 41.7585 230.224 41.669 230.224 41.5794L230.582 39.3406C230.761 37.9974 231.478 36.9227 232.642 36.2063L232.91 35.9376C233 35.8481 233 35.8481 233 35.7585C233 35.669 232.91 35.669 232.91 35.5794L232.642 35.4003Z",
						fill: "#FFE75C"
					}), (0, r.jsx)("defs", {
						children: (0, r.jsxs)("linearGradient", {
							id: "paint0_linear_0_1",
							x1: "220",
							y1: "12",
							x2: "220",
							y2: "188",
							gradientUnits: "userSpaceOnUse",
							children: [(0, r.jsx)("stop", {
								"stop-color": "#686bff"
							}), (0, r.jsx)("stop", {
								offset: "1",
								"stop-color": "#c356fd"
							})]
						})
					}), (0, r.jsx)("svg", {
						width: 100,
						height: 100,
						viewBox: "-2 -15 50 50",
						fill: "none",
						xmlns: "http://www.w3.org/2000/svg",
						children: (0, r.jsxs)("g", {
							"clip-path": "url(#clip0_2645_182555)",
							children: [(0, r.jsx)("path", {
								fillRule: "evenodd",
								clipRule: "evenodd",
								d: "M13.6698 8.91016C14.5646 10.1567 16.3407 10.3342 17.4866 9.44283C17.4957 9.46624 17.5008 9.49191 17.5008 9.51916V15.8337C17.5008 17.2144 16.3815 18.3337 15.0008 18.3337H12.7092C12.5941 18.3337 12.5008 18.2404 12.5008 18.1253V13.3337C12.5008 12.4132 11.7547 11.667 10.8342 11.667H9.16748C8.24699 11.667 7.5008 12.4132 7.5008 13.3337V18.1253C7.5008 18.2404 7.40753 18.3337 7.29247 18.3337H5.0008C3.62009 18.3337 2.5008 17.2144 2.5008 15.8337V9.51916C2.5008 9.36341 2.66628 9.26158 2.81091 9.31949C3.23542 9.48933 3.70172 9.58366 4.19593 9.58366C5.27336 9.58366 6.24385 9.12583 6.92345 8.39408C7.0135 8.29708 7.17004 8.29679 7.26039 8.39349C7.94479 9.12583 8.91932 9.58366 10.0008 9.58366C11.0823 9.58366 12.0568 9.12583 12.7412 8.39349C12.8316 8.29679 12.9882 8.29708 13.0782 8.39408C13.2565 8.58599 13.4548 8.75916 13.6698 8.91016ZM11.7497 6.67891C9.42957 5.8204 9.4179 2.5511 11.7147 1.6683C11.699 1.66743 11.6833 1.66699 11.6675 1.66699H8.33415C7.87391 1.66699 7.50082 2.04009 7.50082 2.50033V5.83366C7.50082 5.87681 7.50191 5.9197 7.50407 5.96231C7.52181 6.31232 7.61153 6.64333 7.75873 6.94085C7.77282 6.96931 7.78743 6.99747 7.80255 7.02531C8.2259 7.80462 9.05157 8.33366 10.0008 8.33366C10.984 8.33366 11.8346 7.76614 12.2429 6.94084L12.2543 6.91751C12.2613 6.90286 12.2682 6.88812 12.2751 6.87331L11.7497 6.67891ZM15.8231 8.3336C15.4338 8.32949 15.0467 8.10931 14.8853 7.67305L14.4606 6.52524C14.2917 6.06904 13.9321 5.70936 13.4759 5.54055L13.3342 5.4881V2.84588L13.4759 2.79343C13.9321 2.62463 14.2917 2.26494 14.4606 1.80874L14.5131 1.66699H15.2462C16.3397 1.66699 17.3062 2.37762 17.6324 3.42131L18.1647 5.12491C18.2057 5.25598 18.2352 5.38724 18.254 5.51775L18.1924 5.54055C17.7361 5.70936 17.3765 6.06904 17.2077 6.52524L16.783 7.67305C16.627 8.09458 16.2603 8.31438 15.8847 8.33245C15.8642 8.33308 15.8437 8.33346 15.8231 8.3336ZM12.5008 3.15424V5.17974L12.3281 5.11583C11.4472 4.78989 11.4472 3.54409 12.3281 3.21816L12.5008 3.15424ZM4.75546 1.66699C3.662 1.66699 2.69541 2.37762 2.36926 3.4213L1.83688 5.12491C1.52876 6.11092 1.8679 7.1068 2.56708 7.72187C2.99643 8.09957 3.56156 8.33366 4.19593 8.33366C5.13437 8.33366 5.95065 7.81064 6.36917 7.04019C6.38619 7.00888 6.40255 6.97714 6.41823 6.94502C6.57788 6.618 6.66748 6.25052 6.66748 5.86211V2.50033C6.66748 2.04009 6.29438 1.66699 5.83415 1.66699H4.75546Z",
								fill: "white"
							}), (0, r.jsx)("path", {
								d: "M14.8838 0.660607C15.2097 -0.220202 16.4556 -0.220202 16.7815 0.660607L17.2062 1.80842C17.375 2.26462 17.7347 2.6243 18.1909 2.79311L19.3387 3.21783C20.2195 3.54377 20.2195 4.78957 19.3387 5.1155L18.1909 5.54023C17.7347 5.70903 17.375 6.06872 17.2062 6.52492L16.7815 7.67272C16.4556 8.5535 15.2097 8.5535 14.8838 7.67272L14.4591 6.52492C14.2903 6.06872 13.9306 5.70903 13.4744 5.54023L12.3266 5.1155C11.4458 4.78957 11.4458 3.54377 12.3266 3.21783L13.4744 2.79311C13.9306 2.6243 14.2903 2.26462 14.4591 1.80842L14.8838 0.660607Z",
								fill: "white"
							})]
						})
					}), (0, r.jsx)("foreignObject", {
						x: "30",
						y: "100",
						width: "56",
						height: "56",
						children: o
					})]
				}))
			}
		},
		533694: function(e, t, n) {
			n.d(t, {
				Z: () => h
			});
			var r = n(255367);
			n(73800);
			var i = n(399606),
				l = n(481060),
				a = n(607070),
				o = n(739566),
				s = n(942951),
				c = n(834129),
				u = n(703656),
				d = n(331372),
				p = n(981631),
				m = n(388032),
				f = n(48215);

			function _(e) {
				let {
					guildId: t,
					user: n,
					username: o
				} = e, s = (0, i.e7)([a.Z], () => !a.Z.useReducedMotion), c = n.getAvatarURL(t, 56, s), u = (0, r.jsx)("img", {
					src: c,
					className: f.userAvatar,
					alt: ""
				});
				return (0, r.jsxs)("div", {
					className: f.thankYouCard,
					role: "img",
					"aria-label": m.intl.formatToPlainString(m.t["utf8+f"], {
						username: o
					}),
					children: [(0, r.jsx)(d.Z, {
						avatar: u
					}), (0, r.jsx)(l.Text, {
						className: f.thankYouText,
						tag: "p",
						color: "status-positive-text",
						variant: "heading-xl/medium",
						children: m.intl.format(m.t["52BAtL"], {
							username: o,
							usernameHook: (e, t) => (0, r.jsx)(l.Text, {
								tag: "span",
								color: "status-positive-text",
								variant: "heading-xxl/extrabold",
								lineClamp: 3,
								children: e
							}, t)
						})
					})]
				})
			}

			function h(e) {
				var t, i, l;
				let {
					channel: a,
					message: d,
					compact: f
				} = e, h = (0, o.ZP)(d), g = (0, s.l)({
					user: d.author,
					channelId: a.id,
					guildId: a.guild_id,
					messageId: d.id
				})(h), b = m.intl.format(m.t.TQs67u, {
					username: h.nick,
					usernameHook: g,
					productName: null != (l = null == (i = d.purchaseNotification) || null == (t = i.guild_product_purchase) ? void 0 : t.product_name) ? l : "",
					handleProductListingClick: () => {
						var e, t, n;
						(0, u.uL)(p.Z5c.GUILD_PRODUCT(a.guild_id, null != (n = null == (t = d.purchaseNotification) || null == (e = t.guild_product_purchase) ? void 0 : e.listing_id) ? n : ""))
					}
				});
				return (0, r.jsxs)(r.Fragment, {
					children: [(0, r.jsx)(c.Z, {
						icon: n(570111),
						timestamp: d.timestamp,
						compact: f,
						children: b
					}), (0, r.jsx)(_, {
						username: h.nick,
						guildId: a.guild_id,
						user: d.author
					})]
				})
			}
		},
		730647: function(e, t, n) {
			n.d(t, {
				f: () => u,
				l: () => d
			}), n(415506);
			var r = n(255367),
				i = n(73800),
				l = n(399606),
				a = n(38618),
				o = n(423117),
				s = n(289393);
			let c = i.createContext(void 0);

			function u(e) {
				let t = i.useContext(c);
				if (null == t) throw Error("".concat(null != e ? e : "useGroupListingsFetchContext", " must be used within a GroupListingsFetchContextProvider"));
				let {
					listingsLoaded: n,
					fetchGroupListingsForGuild: r
				} = t;
				return r(), n
			}

			function d(e) {
				let {
					guildId: t,
					children: n,
					refetchOnMount: u,
					includeSoftDeleted: d,
					countryCode: p,
					dontFetchWhileTrue: m
				} = e, f = (0, l.e7)([a.Z], () => a.Z.isConnected()), _ = (0, l.e7)([s.Z], () => null != t ? s.Z.getSubscriptionGroupListingsForGuildFetchState(t) : s.M.FETCHED), h = i.useRef(u), g = i.useCallback(() => {
					if (null == t || !f || !0 === m) return;
					let e = s.Z.getSubscriptionGroupListingsForGuildFetchState(t);
					(h.current || e === s.M.NOT_FETCHED) && (h.current = !1, o.FP(t, {
						includeSoftDeleted: d,
						countryCode: p
					}))
				}, [f, t, d, p, m]), b = i.useMemo(() => _ === s.M.FETCHED && !0 !== h.current, [_, h]);
				return (0, r.jsx)(c.Provider, {
					value: {
						listingsLoaded: b,
						fetchGroupListingsForGuild: g
					},
					children: n
				})
			}
		},
		944537: function(e, t, n) {
			n.d(t, {
				I: () => s,
				n: () => c
			});
			var r, i = n(97519),
				l = n(731965);

			function a(e) {
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

			function o(e, t) {
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
			var s = ((r = {})[r.ALL_CHANNELS_ACCESS = 0] = "ALL_CHANNELS_ACCESS", r[r.SOME_CHANNELS_ACCESS = 1] = "SOME_CHANNELS_ACCESS", r);
			let c = (0, i.U)(e => ({
				listings: {},
				setListing: (t, n) => (0, l.j)(() => e(e => ({
					listings: o(a({}, e.listings), {
						[t]: n(e.listings[t])
					})
				}))),
				editStateIdsForGroup: {},
				setEditStateIdsForGroup: (t, n) => (0, l.j)(() => {
					e(e => ({
						editStateIdsForGroup: o(a({}, e.editStateIdsForGroup), {
							[t]: n(e.editStateIdsForGroup[t])
						})
					}))
				})
			}))
		},
		144507: function(e, t, n) {
			n.d(t, {
				$D: () => h,
				H2: () => g,
				MO: () => _,
				X$: () => f,
				d5: () => p
			});
			var r, i = n(442837),
				l = n(223892),
				a = n(674180),
				o = n(601964),
				s = n(496675),
				c = n(594174),
				u = n(923726),
				d = n(981631),
				p = ((r = {})[r.NONE = 0] = "NONE", r[r.WAITLIST_ONLY = 1] = "WAITLIST_ONLY", r[r.NEEDS_COMMUNITY = 2] = "NEEDS_COMMUNITY", r[r.VISIBLE = 3] = "VISIBLE", r);

			function m(e) {
				if (e.guild.features.has(d.oNc.CREATOR_MONETIZABLE_DISABLED)) return 0;
				if (function(e) {
						let {
							guild: t,
							isOwner: n,
							canManageGuildRoleSubscriptions: r,
							isGuildEligibleForRoleSubscriptions: i,
							isExpeditedMonetizationOnboardingGuild: l,
							isUserInCreatorMonetizationEligibleCountry: a,
							shouldRestrictUpdatingRoleSubscriptionSettings: o
						} = e;
						return !!r && (!o || !!n) && (!!(t.features.has(d.oNc.CREATOR_MONETIZABLE) || t.features.has(d.oNc.CREATOR_MONETIZABLE_PROVISIONAL)) || !!t.features.has(d.oNc.COMMUNITY) && (!!i || !!l) && n && a)
					}(e)) return 3;
				let {
					guild: t,
					isOwner: n,
					isUserInCreatorMonetizationEligibleCountry: r,
					isMonetizationWaitlistEnabledForGuild: i,
					isGuildEligibleForRoleSubscriptions: l,
					isExpeditedMonetizationOnboardingGuild: a
				} = e;
				return n && !r && i ? 1 : n && i && (l || a) && !t.features.has(d.oNc.COMMUNITY) ? 2 : 0
			}

			function f(e) {
				return 0 !== m(e)
			}

			function _(e) {
				let t = (0, u.Bt)(null == e ? void 0 : e.id),
					n = (0, l.Ob)(e),
					r = (0, l.gS)(null == e ? void 0 : e.id),
					s = h(e),
					d = (0, i.e7)([c.default], () => {
						let t = c.default.getCurrentUser();
						return null != e && (0, o.eM)(e, t)
					}),
					p = (0, l.Sd)(),
					{
						shouldRestrictUpdatingCreatorMonetizationSettings: f
					} = (0, a.gX)(null == e ? void 0 : e.id);
				return null == e ? 0 : m({
					guild: e,
					isOwner: d,
					canManageGuildRoleSubscriptions: s,
					isGuildEligibleForRoleSubscriptions: t,
					isMonetizationWaitlistEnabledForGuild: r,
					isExpeditedMonetizationOnboardingGuild: n,
					isUserInCreatorMonetizationEligibleCountry: p,
					shouldRestrictUpdatingRoleSubscriptionSettings: f
				})
			}

			function h(e) {
				return (0, i.e7)([s.Z], () => g(e), [e])
			}

			function g(e) {
				return null != e && s.Z.can(d.Plq.ADMINISTRATOR, e)
			}
		},
		697227: function(e, t, n) {
			n.d(t, {
				V: () => a,
				W: () => l
			});
			var r = n(512722),
				i = n.n(r);

			function l(e) {
				let t = e.items;
				return i()(1 === t.length, "more than 1 subscription item for role subscription"), t[0].planId
			}

			function a(e) {
				var t;
				let n = null == e || null == (t = e.renewalMutations) ? void 0 : t.items;
				if (null != n) return i()(n.length <= 1, "more than 1 renewal mutation for role subscription"), null == n ? void 0 : n[0].planId
			}
		},
		853439: function(e, t, n) {
			n.d(t, {
				Z: () => m
			});
			var r, i, l, a = n(442837),
				o = n(570140),
				s = n(131704),
				c = n(592125);
			let u = {},
				d = {};
			class p extends(l = a.ZP.Store) {
				getTemplates(e) {
					return u[e]
				}
				getTemplateWithCategory(e, t) {
					var n;
					return null == (n = u[e]) ? void 0 : n.find(e => e.category === t)
				}
				getChannel(e) {
					return d[e]
				}
			}
			i = "GuildRoleSubscriptionTierTemplatesStore", (r = "displayName") in p ? Object.defineProperty(p, r, {
				value: i,
				enumerable: !0,
				configurable: !0,
				writable: !0
			}) : p[r] = i;
			let m = new p(o.Z, {
				GUILD_ROLE_SUBSCRIPTIONS_STASH_TEMPLATE_CHANNELS: function(e) {
					let {
						selectedTemplate: t,
						guildId: n
					} = e, r = Object.values(c.Z.getMutableGuildChannelsForGuild(n));
					t.listings.forEach(e => {
						e.channels.forEach(e => {
							let t = r.find(t => t.name === e.name);
							if (void 0 !== t) e.id = t.id;
							else if (!(e.id in d)) {
								let t = (0, s.kt)(e);
								d[e.id] = t
							}
						})
					})
				},
				GUILD_ROLE_SUBSCRIPTIONS_FETCH_TEMPLATES: function(e) {
					let {
						templates: t,
						guildId: n
					} = e;
					u[n] = t
				}
			})
		},
		303737: function(e, t, n) {
			n.d(t, {
				GN: () => x,
				be: () => y,
				g4: () => b,
				m7: () => g,
				r4: () => C,
				sO: () => O,
				yL: () => v
			}), n(539854), n(388685), n(993155), n(953529);
			var r = n(991637),
				i = n.n(r),
				l = n(399606),
				a = n(570140),
				o = n(333848),
				s = n(592125),
				c = n(923726),
				u = n(289393),
				d = n(944537),
				p = n(144507),
				m = n(853439),
				f = n(981631),
				_ = n(176505);
			i().shim();
			let h = {};

			function g(e) {
				let t = (0, l.e7)([s.Z], () => s.Z.getChannel(e)),
					n = (0, l.e7)([m.Z], () => m.Z.getChannel(e));
				return null != t ? t : n
			}

			function b(e, t, n) {
				let r = (0, l.e7)([u.Z], () => u.Z.getSubscriptionListingsForGuild(e)),
					i = (0, d.n)(t => t.editStateIdsForGroup[e]),
					a = (0, d.n)(e => e.listings);
				if (void 0 === n || void 0 === t) return null;
				let o = r.filter(e => !e.soft_deleted && !e.archived).map(e => e.subscription_plans[0].price),
					s = [];
				void 0 !== i && i.forEach(e => {
					let t = a[e],
						n = null == t ? void 0 : t.priceTier;
					null != n && s.push(n)
				});
				let c = new Set(s.concat(o));
				if (!c.has(n)) return null;
				let p = t.indexOf(n);
				if (-1 === p) return null;
				let m = [];
				for (let e = p + 1; e < t.length && (c.has(t[e]) || m.push(t[e]), 3 !== m.length); e++);
				return m
			}

			function E(e) {
				let t = d.n.getState().editStateIdsForGroup[e],
					n = d.n.getState().listings,
					r = new Set;
				null != t && t.forEach(e => {
					var t;
					let i = null == (t = n[e]) ? void 0 : t.channelBenefits;
					null == i || i.forEach(e => {
						null != m.Z.getChannel(e.ref_id) && r.add(e.ref_id)
					})
				});
				let i = [];
				for (let t of r) {
					let n = m.Z.getChannel(t);
					if (null != n) {
						let t = n.set("guild_id", e);
						i.push(t)
					}
				}
				return i
			}

			function y(e) {
				let t = E(e);
				h[e] = t, t.forEach(e => {
					let t = e.set("flags", _.zZ.IS_ROLE_SUBSCRIPTION_TEMPLATE_PREVIEW_CHANNEL);
					a.Z.dispatch({
						type: "CHANNEL_CREATE",
						channel: t
					})
				})
			}

			function x(e) {
				var t;
				(null != (t = h[e]) ? t : E(e)).forEach(e => {
					a.Z.dispatch({
						type: "CHANNEL_DELETE",
						channel: e
					})
				})
			}
			async function C(e, t) {
				let n = [],
					r = [];
				t.forEach(t => {
					let i = m.Z.getChannel(t.ref_id);
					null != i && (n.push(o.Z.createRoleSubscriptionTemplateChannel(e, i.name, i.type, i.topic)), r.push(i))
				}), 0 !== n.length && (await Promise.allSettled(n)).forEach((n, i) => {
					let l = r[i].id;
					if ("fulfilled" === n.status) {
						let t = n.value.body,
							r = d.n.getState().editStateIdsForGroup[e],
							i = d.n.getState().listings;
						null != r && r.forEach(e => {
							var n;
							let r = null == (n = i[e]) ? void 0 : n.channelBenefits;
							null == r || r.forEach(e => {
								e.ref_id === l && (e.ref_id = t.id)
							})
						})
					} else if (null != t) {
						let e = t.findIndex(e => e.ref_id === l); - 1 !== e && (null == t || t.splice(e, 1))
					}
				})
			}

			function v(e, t) {
				var n, r;
				let i = d.n.getState().listings[e],
					l = null == i ? void 0 : i.usedTemplate;
				if (null == l) return {
					templateCategory: null,
					hasChangeFromTemplate: null
				};
				let a = m.Z.getTemplateWithCategory(t, l);
				if (null == a) return {
					templateCategory: null,
					hasChangeFromTemplate: null
				};
				let o = a.listings[0];
				if ((null == i ? void 0 : i.name) !== o.name || (null == i ? void 0 : i.description) !== o.description || (null == i ? void 0 : i.priceTier) !== o.price_tier || (null == i ? void 0 : i.image) !== o.image || (null == i ? void 0 : i.roleColor) !== o.role_color || (null == i || null == (n = i.channelBenefits) ? void 0 : n.length) !== o.channels.length || (null == i || null == (r = i.intangibleBenefits) ? void 0 : r.length) !== o.additional_perks.length) return {
					templateCategory: a.category,
					hasChangeFromTemplate: !0
				};
				for (let e = 0; e < o.channels.length; e++) {
					let t = i.channelBenefits[e],
						n = o.channels[e];
					if (t.name !== n.name || t.description !== n.description || t.emoji_name !== n.emoji_name) return {
						templateCategory: a.category,
						hasChangeFromTemplate: !0
					}
				}
				for (let e = 0; e < o.additional_perks.length; e++) {
					let t = i.intangibleBenefits[e],
						n = o.additional_perks[e];
					if (t.name !== n.name || t.description !== n.description || t.emoji_name !== n.emoji_name) return {
						templateCategory: a.category,
						hasChangeFromTemplate: !0
					}
				}
				return {
					templateCategory: a.category,
					hasChangeFromTemplate: !1
				}
			}

			function O(e) {
				return (0, p.H2)(e) && e.features.has(f.oNc.ROLE_SUBSCRIPTIONS_ENABLED) && (0, c.$F)() && (0, c.hQ)(e.id)
			}
		},
		353254: function(e, t, n) {
			n.d(t, {
				Z: () => l
			}), n(388685);
			var r = n(838085),
				i = n(73346);

			function l(e) {
				let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1],
					[n, l] = (0, r.Z)();
				return [n, (null == e ? void 0 : e.application_id) != null && null != l ? (0, i._W)(e.application_id, e, l, t ? void 0 : "webp") : void 0]
			}
		},
		626751: function(e, t, n) {
			n.d(t, {
				Z: () => p
			});
			var r = n(255367),
				i = n(73800),
				l = n(442837),
				a = n(987909),
				o = n(430824),
				s = n(630388),
				c = n(35125),
				u = n(523361),
				d = n(981631);

			function p(e) {
				var t, n;
				let {
					channel: p,
					message: m
				} = e, f = null != (n = null == (t = m.roleSubscriptionData) ? void 0 : t.is_renewal) && n ? (0, u.Md)() : (0, u.Q8)(), _ = p.guild_id, h = (0, l.e7)([o.Z], () => {
					var e;
					return null == (e = o.Z.getGuild(_)) ? void 0 : e.systemChannelFlags
				}, [_]), g = null != h && (0, s.yE)(h, d.xmn.SUPPRESS_ROLE_SUBSCRIPTION_PURCHASE_NOTIFICATION_REPLIES), b = i.useMemo(() => (0, c._i)(p, m), [p, m]);
				return g ? null : (0, r.jsx)(a.Z, {
					channel: p,
					message: m,
					buttonLabels: f,
					stickers: u.HG,
					event: d.rMx.ROLE_SUBSCRIPTION_PURCHASE_SYSTEM_MESSAGE_CTA_CLICKED,
					eventProperties: b
				})
			}
		},
		345114: function(e, t, n) {
			n.d(t, {
				Z: () => x
			});
			var r = n(255367),
				i = n(73800),
				l = n(481060),
				a = n(100527),
				o = n(906732),
				s = n(739566),
				c = n(942951),
				u = n(834129),
				d = n(703656),
				p = n(35125),
				m = n(626751),
				f = n(891614),
				_ = n(981631),
				h = n(176505),
				g = n(388032),
				b = n(896293);

			function E(e) {
				let {
					username: t
				} = e;
				return (0, r.jsx)("div", {
					className: b.welcomeCardText,
					children: (0, r.jsx)(l.Text, {
						tag: "p",
						className: b.welcomeCardText,
						color: "status-positive-text",
						variant: "heading-xl/medium",
						children: g.intl.format(g.t.MLKSlp, {
							username: t,
							usernameHook: (e, t) => (0, r.jsx)(l.Text, {
								tag: "span",
								color: "status-positive-text",
								variant: "heading-xxl/extrabold",
								lineClamp: 3,
								children: e
							}, t)
						})
					})
				})
			}

			function y(e) {
				let {
					guildId: t,
					user: n,
					username: i
				} = e;
				return (0, r.jsxs)("div", {
					className: b.welcomeCard,
					role: "img",
					"aria-label": g.intl.formatToPlainString(g.t["utf8+f"], {
						username: i
					}),
					children: [(0, r.jsx)(f.Z, {
						guildId: t,
						user: n,
						className: b.welcomeCardBadge
					}), (0, r.jsx)(E, {
						username: i
					})]
				})
			}

			function x(e) {
				var t, l;
				let {
					channel: f,
					message: g,
					compact: b
				} = e, E = (0, s.ZP)(g), x = function(e) {
					let {
						author: t,
						channel: n,
						message: r
					} = e, l = n.guild_id, s = (0, c.l)({
						user: r.author,
						channelId: n.id,
						guildId: l,
						messageId: r.id
					})(t), {
						analyticsLocations: u
					} = (0, o.ZP)(a.Z.GUILD_ROLE_SUBSCRIPTION_PURCHASE_SYSTEM_MESSAGE), m = r.roleSubscriptionData, f = i.useCallback(() => {
						(0, d.uL)(_.Z5c.CHANNEL(l, h.oC.ROLE_SUBSCRIPTIONS), {
							sourceLocationStack: u
						}), (null == m ? void 0 : m.role_subscription_listing_id) != null && (0, p.y8)(l, n.id, r.id, m.role_subscription_listing_id)
					}, [l, n, r, m, u]);
					return null == m ? null : (0, p.Tn)({
						username: t.nick,
						usernameOnClickHandler: s,
						roleSubscriptionOnClickHandler: f,
						guildId: l,
						roleSubscriptionData: r.roleSubscriptionData
					})
				}({
					channel: f,
					message: g,
					author: E
				}), C = (null == (t = g.roleSubscriptionData) ? void 0 : t.total_months_subscribed) != null && (null == (l = g.roleSubscriptionData) ? void 0 : l.total_months_subscribed) <= 1;
				return null == x ? null : (0, r.jsxs)(r.Fragment, {
					children: [(0, r.jsx)(u.Z, {
						icon: n(570111),
						timestamp: g.timestamp,
						compact: b,
						children: x
					}), C && (0, r.jsx)(y, {
						guildId: f.guild_id,
						user: g.author,
						username: E.nick
					}), (0, r.jsx)(m.Z, {
						channel: f,
						message: g
					})]
				})
			}
		},
		891614: function(e, t, n) {
			n.d(t, {
				Z: () => o
			});
			var r = n(255367);
			n(73800);
			var i = n(442837),
				l = n(607070),
				a = n(326669);

			function o(e) {
				let {
					guildId: t,
					user: n,
					className: o
				} = e, s = (0, i.e7)([l.Z], () => !l.Z.useReducedMotion), c = n.getAvatarURL(t, 56, s), u = (0, r.jsx)("foreignObject", {
					x: "30",
					y: "68",
					width: "56",
					height: "56",
					transform: "skewX(12)",
					children: (0, r.jsx)("img", {
						src: c,
						className: a.userAvatar,
						alt: ""
					})
				});
				return (0, r.jsx)("div", {
					className: o,
					children: (0, r.jsxs)("svg", {
						width: "128",
						height: "200",
						viewBox: "0 0 128 200",
						fill: "none",
						xmlns: "http://www.w3.org/2000/svg",
						className: a.svg,
						children: [(0, r.jsx)("path", {
							fillRule: "evenodd",
							clipRule: "evenodd",
							d: "M41.6475 3.07525C42.2166 3.01705 42.7941 2.98723 43.3787 2.98723H44.0149C51.1639 2.98723 57.3812 8.03091 58.5312 14.9582L58.5326 14.9664L71.1297 85.803L74.1529 85.2934L61.5601 14.4815C61.5597 14.4786 61.5592 14.4758 61.5587 14.4729C60.1604 6.07701 52.6392 0 44.0149 0H42.997C42.4189 0 41.8467 0.037182 41.283 0.10879C31.6239 1.11743 24.0326 9.0199 24.0326 18.799C24.0326 21.3525 24.5847 23.8942 25.5481 26.1672L25.5512 26.1745L25.5543 26.1817C30.6753 37.9136 33.7197 47.8651 33.2106 58.7186C32.7013 69.5731 28.6272 81.5075 19.156 97.1507C9.58001 112.967 1.96875 129.323 0.328288 144.93C-1.32267 160.636 3.084 175.549 17.4069 188.258C44.018 211.936 78.8775 196.708 84.4502 170.024C87.2081 156.818 84.3006 145.78 79.001 135.687C75.0979 128.255 69.8387 121.246 64.61 114.277C62.8057 111.873 61.0052 109.473 59.2652 107.063C52.5319 97.7348 49.6357 89.4917 48.5724 81.9158C47.538 74.5461 48.2262 67.7588 48.9086 61.0273C48.9314 60.803 48.9541 60.5787 48.9768 60.3545C50.4158 46.1192 45.9689 34.8772 40.4143 27.5533L40.4092 27.5466L34.5424 19.988L34.533 19.9764C30.8561 15.4298 31.6398 8.83644 36.3021 5.27079C37.8665 4.11054 39.7105 3.32756 41.6475 3.07525ZM29.4797 10.5429C27.9714 12.9383 27.1008 15.7614 27.1008 18.799C27.1008 20.9399 27.5653 23.0928 28.3813 25.0206C33.564 36.8951 36.8159 47.3374 36.2756 58.8549C35.7352 70.3737 31.4122 82.7904 21.7991 98.6677C12.2907 114.372 4.95262 130.278 3.38056 145.234C1.81906 160.089 5.93633 174.039 19.4752 186.051L19.4768 186.053C44.2662 208.11 76.329 193.919 81.4435 169.429C84.0293 157.047 81.3387 146.702 76.2691 137.047C72.4865 129.844 67.4387 123.116 62.2536 116.205C60.4212 113.762 58.5717 111.297 56.7549 108.78C49.7474 99.0725 46.6638 90.3811 45.5325 82.3203C44.4482 74.5953 45.1687 67.4973 45.8457 60.8276C45.8717 60.5718 45.8976 60.3165 45.9233 60.0619C47.2829 46.613 43.0814 36.1022 37.951 29.3343L32.1127 21.8124C29.4463 18.5078 28.6103 14.3561 29.4797 10.5429Z",
							fill: "#57F287"
						}), (0, r.jsx)("path", {
							d: "M59.282 31.4071C56.8646 29.0585 57.1191 27.3279 58.0097 24.7321C58.1369 24.2377 58.6458 23.9905 59.1548 23.9905H62.9716V31.4071H59.282Z",
							fill: "#57F287"
						}), (0, r.jsx)("path", {
							d: "M125.569 155.388L122.388 158.601C120.734 160.332 118.317 161.321 115.899 161.321H101.268V135.486H125.569L127.859 147.971C128.368 150.69 127.477 153.41 125.569 155.388Z",
							fill: "#8CD9FF"
						}), (0, r.jsx)("path", {
							d: "M29.2561 45.6221L25.8209 49.0832C23.9125 51.0609 23.0219 53.9039 23.5308 56.6233L26.7115 74.6704H45.4142V45.6221H29.2561Z",
							fill: "#8CD9FF"
						}), (0, r.jsx)("path", {
							d: "M124.551 151.061C125.568 155.635 122.515 160.208 117.68 161.197C117.044 161.321 116.281 161.445 115.645 161.321H52.7936C46.6867 161.074 41.4703 156.871 40.198 151.061L23.531 56.7471C22.5132 52.1735 25.5667 47.6 30.4014 46.6111C31.0375 46.4875 31.8009 46.3639 32.437 46.4875H95.288C101.395 46.7347 106.611 50.9374 107.884 56.7471L124.551 151.061Z",
							fill: "#8CD9FF"
						}), (0, r.jsx)("path", {
							d: "M127.732 147.724C128.749 152.297 125.823 156.747 121.243 157.736C120.479 157.86 119.716 157.984 118.826 157.984H55.9745C49.8676 157.86 44.6512 153.534 43.3789 147.724L26.7119 53.5333C25.6941 48.9598 28.7476 44.3862 33.5823 43.3973C34.2184 43.2737 34.9818 43.1501 35.6179 43.2737H98.5962C104.703 43.3973 109.92 47.7237 111.065 53.5333L127.732 147.724Z",
							fill: "white"
						}), (0, r.jsx)("path", {
							d: "M78.7482 52.1736C79.2571 54.893 77.4759 57.6124 74.6769 58.1068C74.2952 58.2304 73.7863 58.2304 73.4046 58.2304H66.0253C62.4629 58.1068 59.4094 55.6346 58.6461 52.1736L55.3381 33.7557C54.8292 31.0363 56.6104 28.3169 59.4094 27.8225C59.7911 27.6989 60.3 27.6989 60.6817 27.6989H68.061C71.6234 27.8225 74.6769 30.2947 75.4402 33.7557L78.7482 52.1736Z",
							fill: "black"
						}), (0, r.jsx)("path", {
							d: "M115.39 139.071C115.899 142.285 113.736 145.375 110.428 145.87C109.919 145.993 109.537 145.993 109.028 145.993H62.7172C58.5186 145.87 54.829 143.027 53.9384 139.071C53.3022 135.857 55.4651 132.767 58.7731 132.149C59.282 132.025 59.7909 132.025 60.2998 132.025H106.611C110.81 132.149 114.499 134.992 115.39 139.071Z",
							fill: "#FFC619"
						}), (0, r.jsx)("path", {
							d: "M71.4152 52.8176C72.7444 51.4082 72.394 48.9945 70.6325 47.4264C68.8711 45.8582 66.3656 45.7295 65.0364 47.1389C63.7072 48.5482 64.0576 50.9619 65.819 52.5301C67.5805 54.0982 70.086 54.2269 71.4152 52.8176Z",
							fill: "#5865F2"
						}), (0, r.jsx)("path", {
							d: "M68.5697 30.9126C68.4425 31.1598 68.188 31.4071 67.9336 31.4071H60.8088C60.4271 31.4071 60.2998 31.1598 60.2998 31.0362C60.2998 30.9126 60.2998 30.9126 60.1726 30.9126V30.6654C60.1726 30.5418 60.1726 30.2946 60.2998 30.171C61.5721 27.0807 60.6815 25.5974 59.1548 24.4849V23.9905H64.3712C64.7529 23.9905 65.1345 23.9905 65.389 24.2377C67.9336 25.5974 70.0965 26.7099 68.5697 30.9126Z",
							fill: "#57F287"
						}), (0, r.jsx)("path", {
							d: "M63.4808 19.4171H59.155C58.7734 19.4171 58.5189 19.788 58.6461 20.0352L59.2823 23.9907H64.2442L63.4808 19.4171Z",
							fill: "black"
						}), (0, r.jsx)("path", {
							d: "M61.1485 21.3944C62.4818 21.3286 63.5224 20.5015 63.4728 19.547C63.4231 18.5925 62.302 17.872 60.9686 17.9378C59.6353 18.0035 58.5947 18.8306 58.6444 19.7851C58.694 20.7396 59.8152 21.4601 61.1485 21.3944Z",
							fill: "black"
						}), u]
					})
				})
			}
		},
		225890: function(e, t, n) {
			n.d(t, {
				Z: () => b
			}), n(388685), n(35282);
			var r = n(255367),
				i = n(73800),
				l = n(442837),
				a = n(305325),
				o = n(281956),
				s = n(922482),
				c = n(592125),
				u = n(271383),
				d = n(430824),
				p = n(594174),
				m = n(897285),
				f = n(924301),
				_ = n(482241),
				h = n(11868),
				g = n(231338);

			function b(e) {
				let {
					code: t
				} = e, [n, b, E] = t.split("-"), {
					guildScheduledEvent: y,
					guild: x,
					channel: C,
					isMember: v
				} = (0, l.cj)([f.ZP, d.Z, c.Z, u.ZP, p.default], () => {
					var e, t;
					let r = null != (t = f.ZP.getGuildScheduledEvent(b)) ? t : void 0,
						i = d.Z.getGuild(n),
						l = c.Z.getChannel(null == r ? void 0 : r.channel_id);
					return {
						guildScheduledEvent: r,
						guild: i,
						channel: l,
						isMember: u.ZP.isMember(n, null == (e = p.default.getCurrentUser()) ? void 0 : e.id)
					}
				}, [n, b]);
				return i.useEffect(() => {
					(null == y ? void 0 : y.id) == null && _.Z.fetchGuildEvent(n, b), m.Z.getGuildEventUserCounts(n, b, null != E ? [E] : []), m.Z.getGuildEventsForCurrentUser(n)
				}, [b, n, null == y ? void 0 : y.id, E]), (0, r.jsx)(h.ZP, {
					guild: x,
					channel: C,
					guildScheduledEvent: y,
					isMember: v,
					onAcceptInstantInvite: g.dG,
					onTransitionToInviteChannel: function() {
						if ((0, o.n)(n)) return void(0, a.hk)(n);
						(null == C ? void 0 : C.isGuildStageVoice()) ? (0, s.Cq)(C) : (null == C ? void 0 : C.isGuildVoice()) && _.Z.joinVoiceEvent(C.guild_id, C.id)
					},
					recurrenceId: E
				})
			}
		},
		364097: function(e, t, n) {
			n.d(t, {
				Z: () => m
			});
			var r = n(255367);
			n(73800);
			var i = n(442837),
				l = n(481060),
				a = n(955415),
				o = n(846587),
				s = n(409059),
				c = n(260539),
				u = n(388032),
				d = n(606966),
				p = n(273254);

			function m(e) {
				var t;
				let {
					code: m
				} = e, f = (0, i.e7)([s.Z], () => s.Z.getGuildTemplate(m));
				if (null == f || f.state === c.Rj.RESOLVING) return (0, r.jsxs)(a.Z, {
					children: [(0, r.jsx)(a.Z.Header, {
						text: u.intl.string(u.t.Xj87YW)
					}), (0, r.jsx)(a.Z.Body, {
						resolving: !0
					})]
				});
				if (f.state === c.Rj.EXPIRED) return (0, r.jsxs)(a.Z, {
					children: [(0, r.jsx)(a.Z.Header, {
						text: u.intl.string(u.t.C7ZRNz)
					}), (0, r.jsxs)(a.Z.Body, {
						children: [(0, r.jsx)(a.Z.Icon, {
							expired: !0
						}), (0, r.jsx)(a.Z.Info, {
							expired: !0,
							title: u.intl.string(u.t.A6MwXF)
						})]
					})]
				});
				let _ = __OVERLAY__ ? (0, r.jsx)(a.Z.Button, {
					isDisabled: !0,
					color: a.Z.Button.Colors.PRIMARY,
					children: u.intl.string(u.t.W7NTWl)
				}) : (0, r.jsx)(a.Z.Button, {
					onClick: () => {
						(0, l.ZDy)(async () => {
							let {
								default: e
							} = await Promise.all([n.e("10778"), n.e("44044")]).then(n.bind(n, 766775));
							return t => {
								var n, i;
								return (0, r.jsx)(e, (n = function(e) {
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
								}({}, t), i = i = {
									guildTemplate: f
								}, Object.getOwnPropertyDescriptors ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(i)) : (function(e, t) {
									var n = Object.keys(e);
									if (Object.getOwnPropertySymbols) {
										var r = Object.getOwnPropertySymbols(e);
										n.push.apply(n, r)
									}
									return n
								})(Object(i)).forEach(function(e) {
									Object.defineProperty(n, e, Object.getOwnPropertyDescriptor(i, e))
								}), n))
							}
						})
					},
					submitting: f.state === c.Rj.ACCEPTING,
					color: a.Z.Button.Colors.GREEN,
					children: u.intl.string(u.t["a3Gl+f"])
				});
				return (0, r.jsxs)(a.Z, {
					children: [(0, r.jsx)(a.Z.Header, {
						text: u.intl.string(u.t.kAvFkJ)
					}), (0, r.jsxs)(a.Z.Body, {
						children: [(0, r.jsxs)("div", {
							className: p.headerLine,
							children: [(0, r.jsx)(o.Z, {
								className: d.icon
							}), (0, r.jsx)(a.Z.Info, {
								title: f.name,
								children: u.intl.format(u.t.cGXXHB, {
									usageCount: String(null != (t = f.usageCount) ? t : 0)
								})
							})]
						}), _]
					})]
				})
			}
		},
		495129: function(e, t, n) {
			n.d(t, {
				H: () => O
			}), n(35282);
			var r = n(255367);
			n(73800);
			var i = n(120356),
				l = n.n(i),
				a = n(442837),
				o = n(755721),
				s = n(481060),
				c = n(904245),
				u = n(287734),
				d = n(957730),
				p = n(739566),
				m = n(779125),
				f = n(599706),
				_ = n(703656),
				h = n(592125),
				g = n(430824),
				b = n(594174),
				E = n(938475),
				y = n(5192),
				x = n(981631),
				C = n(388032),
				v = n(653072);

			function O(e) {
				var t, n, i, O, j, I, S, T, N, P;
				let {
					message: A,
					channel: w
				} = e, Z = null == (i = A.embeds[0]) || null == (n = i.fields) || null == (t = n.find(e => {
					let {
						rawName: t
					} = e;
					return "guild_id" === t
				})) ? void 0 : t.rawValue, R = null == (I = A.embeds[0]) || null == (j = I.fields) || null == (O = j.find(e => {
					let {
						rawName: t
					} = e;
					return "channel_id" === t
				})) ? void 0 : O.rawValue, k = (0, a.e7)([g.Z], () => g.Z.getGuild(Z)), L = (0, a.e7)([h.Z], () => h.Z.getChannel(R)), D = (0, a.e7)([b.default], () => b.default.getCurrentUser()), M = (0, a.e7)([], () => A.author.id === (null == D ? void 0 : D.id)), U = null == (S = w.recipients) ? void 0 : S.find(e => e !== A.author.id), F = (0, a.e7)([b.default], () => null != U ? b.default.getUser(U) : null), B = (0, p.ZP)(A), G = (0, y._T)(w.getGuildId(), w.id, F), H = (0, a.Wu)([E.ZP], () => null != L ? E.ZP.getVoiceStatesForChannel(L) : [], [L]), V = H.some(e => e.user.id === (null == D ? void 0 : D.id)), z = null == (P = A.embeds[0]) || null == (N = P.fields) || null == (T = N.find(e => {
					let {
						rawName: t
					} = e;
					return "voice_user_ids" === t
				})) ? void 0 : T.rawValue, W = null != z ? z.split(",") : [], K = (0, a.Wu)([b.default], () => W.map(e => b.default.getUser(e)).filter(Boolean)), Y = M && null != F ? C.intl.formatToPlainString(C.t["er/cHx"], {
					username: G
				}) : C.intl.formatToPlainString(C.t.noNjkZ, {
					username: B.nick
				}), X = null != k && null != L, q = null;
				q = X ? M || V ? C.intl.format(C.t.CaLQqK, {
					channelHook: (e, t) => (0, r.jsx)(m.Z, {
						channel: null != L ? L : void 0
					}, t)
				}) : C.intl.format(C.t.VugXpK, {
					channelHook: (e, t) => (0, r.jsx)(m.Z, {
						channel: null != L ? L : void 0
					}, t)
				}) : C.intl.string(C.t["tHT/Vl"]), 0 === H.length && (q = M ? C.intl.string(C.t.IE2uZW) : C.intl.string(C.t.QVhmGx));
				let Q = M ? C.intl.string(C.t["00XIbm"]) : C.intl.string(C.t["7CrE9/"]);
				return (0, r.jsxs)("div", {
					children: [(0, r.jsxs)("div", {
						className: v.card,
						children: [(0, r.jsx)(s.Text, {
							variant: "text-md/semibold",
							color: "header-primary",
							children: Y
						}), (0, r.jsx)(s.Text, {
							variant: "text-sm/normal",
							color: "header-secondary",
							children: q
						}), H.length > 0 ? (0, r.jsx)("div", {
							className: v.participants,
							children: (0, r.jsx)(f.Z, {
								guildId: Z,
								partySize: {
									knownSize: H.length,
									unknownSize: 0,
									totalSize: H.length
								},
								members: H.map(e => e.user),
								maxAvatarsShown: 5
							})
						}) : (0, r.jsx)("div", {
							className: l()(v.participants, v.disabled),
							children: (0, r.jsx)(f.Z, {
								guildId: Z,
								partySize: {
									knownSize: K.length,
									unknownSize: W.length - K.length,
									totalSize: W.length
								},
								members: K,
								maxAvatarsShown: 5
							})
						})]
					}), (0, r.jsxs)("div", {
						className: v.actions,
						children: [(0, r.jsxs)(o.zx, {
							color: o.zx.Colors.BRAND,
							onClick: () => {
								null != R && null != Z && ((0, _.uL)(x.Z5c.CHANNEL(Z, R)), u.default.selectVoiceChannel(R))
							},
							className: v.button,
							innerClassName: v.buttonInner,
							disabled: V || !X,
							children: [(0, r.jsx)(s.gj8, {
								size: "md",
								color: "currentColor"
							}), C.intl.string(C.t.zIeJq6)]
						}), (0, r.jsx)(o.zx, {
							color: o.zx.Colors.PRIMARY,
							onClick: () => {
								c.Z.sendMessage(w.id, d.ZP.parse(w, "\uD83D\uDC4B"))
							},
							className: v.button,
							children: Q
						})]
					})]
				})
			}
		},
		768762: function(e, t, n) {
			n.d(t, {
				Z: () => f
			});
			var r, i, l = n(255367),
				a = n(73800),
				o = n(120356),
				s = n.n(o),
				c = n(481060),
				u = n(974393);
			let d = {
					UP: "up",
					RIGHT: "right",
					DOWN: "down",
					LEFT: "left"
				},
				p = {
					[d.UP]: "",
					[d.RIGHT]: u.right,
					[d.DOWN]: u.down,
					[d.LEFT]: u.left
				};
			class m extends(i = a.PureComponent) {
				render() {
					let {
						direction: e,
						className: t
					} = this.props;
					return (0, l.jsx)(c.wj7, {
						size: "md",
						color: "currentColor",
						className: s()(t, {
							[p[e]]: !0
						})
					})
				}
			}(r = "Directions") in m ? Object.defineProperty(m, r, {
				value: d,
				enumerable: !0,
				configurable: !0,
				writable: !0
			}) : m[r] = d;
			let f = m
		},
		889695: function(e, t, n) {
			n.d(t, {
				Z: () => I
			}), n(388685), n(539854);
			var r = n(255367),
				i = n(73800),
				l = n(658722),
				a = n.n(l),
				o = n(392711),
				s = n.n(o),
				c = n(149765),
				u = n(442837),
				d = n(481060),
				p = n(601964),
				m = n(271383),
				f = n(485386),
				_ = n(430824),
				h = n(594174),
				g = n(700785),
				b = n(709054),
				E = n(962086),
				y = n(160404),
				x = n(225675),
				C = n(981631),
				v = n(388032),
				O = n(318135);

			function j(e) {
				var t;
				return (0, r.jsx)("span", {
					style: {
						color: null != (t = e.colorString) ? t : "currentColor"
					},
					children: e.name
				})
			}

			function I(e) {
				let {
					guildId: t
				} = e, n = (0, u.e7)([h.default], () => h.default.getCurrentUser()), l = (0, u.e7)([_.Z], () => _.Z.getGuild(t)), o = (0, u.e7)([f.Z], () => f.Z.getRoles(t)), {
					impersonateType: I,
					viewingRoles: S
				} = (0, u.cj)([y.Z], () => ({
					impersonateType: y.Z.getImpersonateType(t),
					viewingRoles: y.Z.getViewingRoles(t)
				})), T = I === x.z.SERVER_SHOP, N = (0, u.e7)([m.ZP], () => null != n ? m.ZP.getTrueMember(t, n.id) : null), [P, A] = (0, d.A7R)(null == S ? [] : b.default.keys(S)), w = i.useRef(l);
				i.useEffect(() => {
					let e = {},
						t = w.current;
					if (null != t && null != I) {
						for (let t of P) {
							let n = o[t];
							null != n && (e[t] = n)
						}(0, E.Zm)(t.id, {
							type: I,
							roles: e
						})
					}
				}, [P, I, o]);
				let Z = null != l && null != n && null != N ? s()(o).filter(e => -1 !== N.roles.indexOf(e.id)).sortBy(e => -e.position).first() : void 0,
					R = i.useMemo(() => null != l && null != n ? Object.values(o).filter(e => e.id !== l.id).filter(e => {
						var t;
						return !T || (null == (t = e.tags) ? void 0 : t.subscription_listing_id) != null
					}).filter(e => (null == Z ? void 0 : Z.id) === e.id || g.r6(l, n.id, Z, e)) : [], [l, n, T, Z, o]);
				if (null == n || null == l || null == N) return null;
				let k = {};
				return (N.roles.forEach(e => {
					let t = o[e];
					null != t && (k[t.id] = t)
				}), c.e$(g.I0({
					forceRoles: k,
					context: l
				}), c.$e(C.Plq.MANAGE_GUILD, C.Plq.MANAGE_ROLES)) || (0, p.eM)(l, n)) ? (0, r.jsx)("div", {
					className: O.container,
					children: (0, r.jsx)(d.hQY, {
						placeholder: v.intl.string(v.t.Sojqsr),
						value: P,
						onChange: A,
						autoFocus: !0,
						children: e => {
							let t = R.reduce((t, n) => (a()(e.toLowerCase(), n.name.toLowerCase()) && t.push((0, r.jsxs)(d.lo1, {
									value: n.id,
									children: [(0, r.jsx)(d.lo1.Label, {
										children: j(n)
									}), (0, r.jsx)(d.lo1.Checkbox, {})]
								}, n.id)), t), []),
								n = o[(0, p.lV)(l)];
							return null != n && t.push((0, r.jsxs)(d.lo1, {
								value: n.id,
								disabled: !0,
								children: [(0, r.jsx)(d.lo1.Label, {
									children: j(n)
								}), (0, r.jsx)(d.lo1.Checkbox, {
									checked: !0
								})]
							}, n.id)), t
						}
					})
				}) : (0, r.jsx)(d.Text, {
					variant: "text-md/medium",
					children: v.intl.string(v.t.MNSTbW)
				})
			}
		},
		939170: function(e, t, n) {
			n.d(t, {
				b: () => a
			}), n(997841);
			var r = n(630388),
				i = n(790642),
				l = n(981631);

			function a(e) {
				var t;
				return (0, r.yE)(null != (t = e.flags) ? t : 0, l.xPJ.IS_CONTENT_INVENTORY_ENTRY) && (0, i.Io)("isContentInventoryFallbackEmbed")
			}
		},
		187506: function(e, t, n) {
			n.d(t, {
				M: () => a
			}), n(388685);
			var r = n(876215),
				i = n(911969);
			let l = new Set([r.s.TOP_ARTIST, r.s.TOP_GAME, r.s.PLAYED_GAME, r.s.WATCHED_MEDIA, r.s.LISTENED_SESSION, r.s.LAUNCHED_ACTIVITY]);

			function a(e) {
				var t;
				let n = (null != (t = e.components) ? t : []).filter(e => e.type === i.re.CONTENT_INVENTORY_ENTRY);
				return 0 === n.length || n.some(e => {
					let {
						contentInventoryEntry: t
					} = e;
					return !l.has(t.content_type)
				})
			}
		},
		628238: function(e, t, n) {
			n.d(t, {
				A: () => i
			});
			var r = n(709054);

			function i(e) {
				return !(e < r.default.extractTimestamp("1088216706570268682"))
			}
		},
		669021: function(e, t, n) {
			n.d(t, {
				Z: () => b
			}), n(388685);
			var r = n(255367),
				i = n(73800),
				l = n(120356),
				a = n.n(l),
				o = n(748780),
				s = n(873546),
				c = n(846519),
				u = n(215569),
				d = n(481060),
				p = n(679056),
				m = n(70097),
				f = n(422461);

			function _(e, t, n) {
				return t in e ? Object.defineProperty(e, t, {
					value: n,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : e[t] = n, e
			}
			class h extends i.Component {
				renderMedia() {
					let {
						src: e,
						className: t,
						title: n
					} = this.props, {
						imageLoading: i
					} = this.state;
					return (0, r.jsx)(o.Z.img, {
						className: a()({
							[f.imageLoading]: i
						}, t),
						src: e,
						alt: n,
						style: this.getImageStyle(),
						onError: this.handleImageError,
						onLoad: this.handleImageLoaded
					})
				}
				render() {
					let {
						className: e,
						title: t,
						src: n
					} = this.props, {
						imageLoadError: i,
						imageLoading: l
					} = this.state;
					return null == n || i ? (0, r.jsx)(o.Z.div, {
						className: a()(f.titleContainer, e),
						style: this.getImageStyle(),
						children: t
					}) : (0, r.jsxs)(o.Z.div, {
						className: a()(l ? f.loadingContainer : null, e),
						style: this.getImageStyle(),
						children: [l ? (0, r.jsx)(d.$jN, {
							className: f.spinner,
							itemClassName: f.spinnerItem,
							type: d.$jN.Type.PULSING_ELLIPSIS,
							animated: !0
						}) : null, this.renderMedia()]
					})
				}
				constructor(...e) {
					super(...e), _(this, "_animatedValue", new o.Z.Value(1)), _(this, "state", {
						imageLoadError: !1,
						imageLoading: !0
					}), _(this, "componentWillEnter", e => {
						this._animatedValue.setValue(0), o.Z.timing(this._animatedValue, {
							toValue: 1,
							duration: 400
						}).start(e)
					}), _(this, "componentWillLeave", e => {
						o.Z.timing(this._animatedValue, {
							toValue: 0,
							duration: 400
						}).start(e)
					}), _(this, "getImageStyle", () => ({
						opacity: this._animatedValue
					})), _(this, "handleImageError", () => {
						this.setState({
							imageLoadError: !0,
							imageLoading: !1
						})
					}), _(this, "handleImageLoaded", () => {
						this.setState({
							imageLoading: !1
						})
					})
				}
			}
			class g extends i.Component {
				componentWillUnmount() {
					this.videoTimeout.stop()
				}
				componentDidUpdate(e) {
					let {
						playing: t
					} = this.props, n = this._video.current;
					if (null != n)
						if (t && !e.playing) {
							this.videoTimeout.stop(), isFinite(n.duration) && isFinite(n.currentTime) && (n.currentTime = 0), n.volume = .3;
							let e = n.play();
							null != e && e.then(() => {
								this.videoPlaying = !0
							})
						} else e.playing && !t && this.videoTimeout.start(400, () => {
							this.videoPlaying && (n.pause(), this.videoPlaying = !1)
						})
				}
				renderTypeImage() {
					let {
						playing: e,
						slideImages: t,
						image: n,
						title: i,
						splashClassName: l
					} = this.props;
					return null == t ? (0, r.jsx)(h, {
						className: a()(f.splash, l),
						src: n,
						title: i
					}, "image") : (0, r.jsx)(p.Z, {
						onInterval: this.nextItem,
						interval: 2e3,
						className: f.slideshowWrapper,
						disable: !e,
						children: (0, r.jsx)(u.W, {
							children: this.renderSlideItem(t)
						})
					})
				}
				render() {
					let {
						video: e,
						className: t,
						placeholder: n,
						renderMediaOverlay: i,
						playing: l
					} = this.props, {
						videoLoadError: o,
						videoLoaded: s
					} = this.state;
					return n ? (0, r.jsx)("div", {
						className: t
					}) : (0, r.jsxs)("figure", {
						className: a()(f.__invalid_tileMedia, t),
						children: [null == e || o ? this.renderTypeImage() : this.renderTypeVideo(), null != i && i(l && s)]
					})
				}
				constructor(...e) {
					super(...e), _(this, "state", {
						currentIndex: 0,
						videoLoadError: !1,
						videoLoaded: !1
					}), _(this, "_video", i.createRef()), _(this, "videoTimeout", new c.V7), _(this, "videoPlaying", !1), _(this, "handleToggleMute", e => {
						e.stopPropagation(), e.preventDefault();
						let {
							onToggleMute: t
						} = this.props;
						null == t || t(e)
					}), _(this, "handleVideoError", () => {
						this.setState({
							videoLoadError: !0
						})
					}), _(this, "handleVideoLoaded", () => {
						this.setState({
							videoLoaded: !0
						})
					}), _(this, "renderTypeVideo", () => {
						let {
							videoLoaded: e
						} = this.state, {
							video: t,
							image: n,
							title: l,
							playing: o,
							muted: c,
							splashClassName: p,
							splashPlaceholderClassName: _,
							renderMediaOverlay: g
						} = this.props, b = c ? d.OyP : d.gj8;
						return (0, r.jsxs)(i.Fragment, {
							children: [s.tq ? null : (0, r.jsx)(m.Z, {
								className: a()(f.splash, p),
								muted: c,
								loop: !0,
								preload: "none",
								ref: this._video,
								onLoadedMetadata: this.handleVideoLoaded,
								onError: this.handleVideoError,
								children: (0, r.jsx)("source", {
									src: t,
									type: "video/mp4"
								})
							}), (0, r.jsx)(u.W, {
								children: o && e ? null : (0, r.jsx)(h, {
									className: a()(f.splashPlaceholder, _),
									src: n,
									title: l
								}, 0)
							}), (0, r.jsx)(d.P3F, {
								className: a()(f.muteContainer, {
									[f.muteContainerPlaying]: o && e,
									[f.muteContainerMediaOverlay]: null != g
								}),
								onClick: this.handleToggleMute,
								children: o && e ? (0, r.jsx)(b, {
									className: f.mute
								}) : null
							})]
						})
					}), _(this, "nextItem", () => {
						let {
							slideImages: e
						} = this.props;
						null != e && this.setState({
							currentIndex: (this.state.currentIndex + 1) % e.length
						})
					}), _(this, "renderSlideItem", e => {
						let {
							image: t,
							title: n,
							playing: i,
							splashClassName: l
						} = this.props, {
							currentIndex: o
						} = this.state;
						return i ? (0, r.jsx)(h, {
							className: a()(f.splash, l),
							src: e[o],
							title: n
						}, o) : (0, r.jsx)(h, {
							className: a()(f.splash, l),
							src: t,
							title: n
						}, "image")
					})
				}
			}
			let b = g
		},
		158222: function(e, t, n) {
			n.d(t, {
				V6: () => c,
				fn: () => o,
				xP: () => s
			});
			var r = n(544891),
				i = n(570140),
				l = n(881052),
				a = n(981631);

			function o(e) {
				i.Z.dispatch({
					type: "DISMISS_MEDIA_POST_SHARE_PROMPT",
					threadId: e
				})
			}
			async function s(e) {
				i.Z.dispatch({
					type: "MEDIA_POST_EMBED_FETCH",
					threadId: e
				});
				try {
					let t = (await r.tn.get({
						url: a.ANM.MEDIA_POST_RESHARE_GET_PREVIEW(e),
						rejectWithError: !0
					})).body;
					i.Z.dispatch({
						type: "MEDIA_POST_EMBED_FETCH_SUCCESS",
						threadId: e,
						mediaPostEmbed: t
					})
				} catch (t) {
					i.Z.dispatch({
						type: "MEDIA_POST_EMBED_FETCH_FAILURE",
						threadId: e
					})
				}
			}
			async function c(e) {
				try {
					return (await r.tn.post({
						url: a.ANM.UNFURL_EMBED_URLS,
						body: {
							urls: e
						},
						rejectWithError: !1
					})).body
				} catch (e) {
					throw new l.Hx(e)
				}
			}
		},
		312146: function(e, t, n) {
			n.d(t, {
				Ui: () => a,
				p$: () => s
			});
			var r = n(818083),
				i = n(981631);
			let l = (0, r.B)({
				kind: "guild",
				id: "2023-03_guild_media_channel",
				label: "Media Channel",
				defaultConfig: {
					enabled: !1
				},
				treatments: [{
					id: 1,
					label: "Enables guild to create a media channel",
					config: {
						enabled: !0
					}
				}]
			});

			function a(e) {
				var t;
				let {
					enabled: n
				} = l.useExperiment({
					guildId: null != (t = null == e ? void 0 : e.id) ? t : i.lds,
					location: "96e84c_1"
				}, {
					autoTrackExposure: !0
				});
				return (null == e ? void 0 : e.id) != null && n
			}
			let o = (0, r.B)({
				kind: "user",
				id: "2023-04_guild_media_channel_post_preview_embed_users",
				label: "Guild Role Subscription Users",
				defaultConfig: {
					enabledForUser: !1
				},
				treatments: [{
					id: 1,
					label: "Enables for users Guild Media Post Preview Embeds",
					config: {
						enabledForUser: !0
					}
				}]
			});

			function s() {
				let {
					enabledForUser: e
				} = o.useExperiment({
					location: "96e84c_2"
				}, {
					autoTrackExposure: !0
				});
				return e
			}
		},
		487554: function(e, t, n) {
			n.d(t, {
				M: () => s,
				Z: () => p
			});
			var r, i, l = n(442837),
				a = n(570140);

			function o(e, t, n) {
				return t in e ? Object.defineProperty(e, t, {
					value: n,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : e[t] = n, e
			}
			var s = ((r = {})[r.NOT_FETCHED = 0] = "NOT_FETCHED", r[r.FETCHING = 1] = "FETCHING", r[r.FETCHED = 2] = "FETCHED", r[r.FAILED = 3] = "FAILED", r);
			let c = {},
				u = {};
			class d extends(i = l.ZP.Store) {
				getMediaPostEmbed(e) {
					if (null != e) return c[e]
				}
				getEmbedFetchState(e) {
					var t;
					return null != (t = u[e]) ? t : 0
				}
				getMediaPostEmbeds() {
					return c
				}
			}
			o(d, "displayName", "MediaPostEmbedStore");
			let p = new d(a.Z, {
				CONNECTION_OPEN: function() {
					c = {}, u = {}
				},
				MEDIA_POST_EMBED_FETCH: function(e) {
					let {
						threadId: t
					} = e;
					u[t] = 1
				},
				MEDIA_POST_EMBED_FETCH_SUCCESS: function(e) {
					var t, n;
					let {
						threadId: r,
						mediaPostEmbed: i
					} = e;
					t = function(e) {
						for (var t = 1; t < arguments.length; t++) {
							var n = null != arguments[t] ? arguments[t] : {},
								r = Object.keys(n);
							"function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
								return Object.getOwnPropertyDescriptor(n, e).enumerable
							}))), r.forEach(function(t) {
								o(e, t, n[t])
							})
						}
						return e
					}({}, c), n = n = {
						[r]: i
					}, Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : (function(e, t) {
						var n = Object.keys(e);
						if (Object.getOwnPropertySymbols) {
							var r = Object.getOwnPropertySymbols(e);
							n.push.apply(n, r)
						}
						return n
					})(Object(n)).forEach(function(e) {
						Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
					}), c = t, u[r] = 2
				},
				MEDIA_POST_EMBED_FETCH_FAILURE: function(e) {
					let {
						threadId: t
					} = e;
					u[t] = 3
				},
				LOGOUT: function(e) {
					e.isSwitchingAccount || (c = {}, u = {})
				}
			})
		},
		495114: function(e, t, n) {
			n.d(t, {
				Z: () => l
			});
			var r = n(255367);
			n(73800);
			var i = n(325767);

			function l(e) {
				var t, n, {
						width: l = 14,
						height: a = 18,
						color: o = "currentColor"
					} = e,
					s = function(e, t) {
						if (null == e) return {};
						var n, r, i = function(e, t) {
							if (null == e) return {};
							var n, r, i = {},
								l = Object.keys(e);
							for (r = 0; r < l.length; r++) n = l[r], t.indexOf(n) >= 0 || (i[n] = e[n]);
							return i
						}(e, t);
						if (Object.getOwnPropertySymbols) {
							var l = Object.getOwnPropertySymbols(e);
							for (r = 0; r < l.length; r++) n = l[r], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n])
						}
						return i
					}(e, ["width", "height", "color"]);
				return (0, r.jsx)("svg", (t = function(e) {
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
				}({}, (0, i.Z)(s)), n = n = {
					width: l,
					height: a,
					viewBox: "0 0 10 14",
					fill: "none",
					children: (0, r.jsx)("path", {
						d: "M8.33325 6.33301V3.66634C8.33325 1.82834 6.83725 0.333008 4.99992 0.333008C3.16125 0.333008 1.66659 1.82834 1.66659 3.66634V6.33301C0.931252 6.33301 0.333252 6.93034 0.333252 7.66634V12.333C0.333252 13.0683 0.931252 13.6663 1.66659 13.6663H8.33325C9.06859 13.6663 9.66659 13.0683 9.66659 12.333V7.66634C9.66659 6.93034 9.06859 6.33301 8.33325 6.33301ZM4.99992 10.9997C4.44792 10.9997 3.99992 10.5517 3.99992 9.99967C3.99992 9.44767 4.44792 8.99967 4.99992 8.99967C5.55192 8.99967 5.99992 9.44767 5.99992 9.99967C5.99992 10.5517 5.55192 10.9997 4.99992 10.9997ZM6.99992 6.33301H2.99992V3.66634C2.99992 2.56367 3.89725 1.66634 4.99992 1.66634C6.10259 1.66634 6.99992 2.56367 6.99992 3.66634V6.33301Z",
						fill: o
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
		},
		346013: function(e, t, n) {
			n.d(t, {
				Z: () => U
			}), n(388685);
			var r = n(255367),
				i = n(73800),
				l = n(120356),
				a = n.n(l),
				o = n(772848),
				s = n(831209),
				c = n(399606),
				u = n(755721),
				d = n(481060),
				p = n(607070),
				m = n(100527),
				f = n(367907),
				_ = n(676742),
				h = n(1585),
				g = n(841762),
				b = n(336197),
				E = n(406432),
				y = n(348238),
				x = n(38267),
				C = n(884902),
				v = n(670188),
				O = n(695346),
				j = n(271383),
				I = n(594174),
				S = n(768581),
				T = n(900849),
				N = n(506071),
				P = n(495114),
				A = n(170140),
				w = n(981631),
				Z = n(959517),
				R = n(388032),
				k = n(70249),
				L = n(527455);

			function D(e) {
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

			function M(e, t) {
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

			function U(e) {
				var t, n, l, U;
				let {
					embedUrl: F,
					message: B,
					channel: G
				} = e, H = i.useRef(null), V = i.useRef(null), z = (0, A.J)(F, B), {
					setPopout: W
				} = (0, x.Z)(B.id, Z.d$), K = (0, y.qo)(B, G, W, !0), Y = O.QK.useSetting(), X = (0, N.n)(), [q, Q] = i.useState(!1), [J, $] = i.useState((null == z ? void 0 : z.coverImage) == null), ee = (0, c.e7)([p.Z], () => p.Z.useReducedMotion), et = (0, c.e7)([j.ZP, I.default], () => {
					var e;
					return j.ZP.isMember(null == z ? void 0 : z.guildId, null == (e = I.default.getCurrentUser()) ? void 0 : e.id)
				}, [z]), en = (0, c.e7)([j.ZP], () => (null == z ? void 0 : z.authorId) != null ? j.ZP.getMember(z.guildId, z.authorId) : null), er = (0, _.Z)((null == en ? void 0 : en.avatarDecoration) != null ? null == en ? void 0 : en.avatarDecoration : null == z || null == (t = z.user) ? void 0 : t.avatarDecoration), [ei, el, ea] = i.useMemo(() => {
					var e;
					return [null != (e = null == en ? void 0 : en.colorString) ? e : "inherit", null == en ? void 0 : en.colorStrings, null == en ? void 0 : en.colorRoleId]
				}, [en]), eo = (0, C.X7)(null == en ? void 0 : en.guildId, null != (l = null == z ? void 0 : z.authorId) ? l : void 0, el), {
					reducedMotion: es
				} = i.useContext(d.Sfi), [ec, eu] = i.useState(!1), ed = i.useCallback(() => {
					Q(!0)
				}, [Q]), ep = i.useCallback(() => {
					Q(!1)
				}, [Q]), em = i.useCallback(async () => {
					null != z && ((0, f.yw)(w.rMx.MEDIA_POST_PREVIEW_EMBED_CLICKED, {
						media_post_id: z.threadId,
						channel_id: G.id,
						can_access: z.canAccess,
						is_member: et
					}), z.canAccess ? (0, b.Z)(w.Z5c.CHANNEL(z.guildId, z.threadId, z.messageId)) : et ? (0, b.Z)(w.Z5c.CHANNEL(z.guildId, z.parentChannelId)) : await T.Ub(z.guildId, {}, {
						channelId: z.parentChannelId
					}))
				}, [z, G, et]);
				if (null == z) return null;
				let ef = (0, S.NZ)({
						avatarDecoration: er,
						size: (0, h.y9)(d.EFr.SIZE_40),
						canAnimate: ec
					}),
					e_ = null == (n = z.user) ? void 0 : n.getAvatarURL(z.guildId, 40, ec),
					eh = () => {
						es.enabled || eu(e => !e)
					},
					eg = z.coverImage,
					eb = null != eg && (0, E.d$)(eg);
				return (0, r.jsxs)("div", {
					className: k.postPreviewContainer,
					children: [(0, r.jsxs)("div", {
						className: k.thumbnailContainer,
						onMouseEnter: ed,
						onMouseLeave: ep,
						children: [!J && (!0 === z.shouldShowBlurredThumbnailImage ? (0, r.jsx)("img", {
							src: L,
							alt: R.intl.string(R.t.rIbh8P),
							className: a()(k.thumbnail, {
								[k.spoiler]: z.shouldSpoiler
							}),
							onContextMenu: K,
							onError: () => $(!0)
						}) : (0, r.jsx)(g.Z, {
							src: !(X && (Y || q)) && eb ? "".concat(eg, "?format=png") : eg,
							backgroundSrc: "".concat(eg, "?format=png"),
							alt: R.intl.string(R.t.rIbh8P),
							aspectRatio: 16 / 9,
							className: a()(k.thumbnail, {
								[k.spoiler]: z.shouldSpoiler
							}),
							imageChildClassName: k.thumbnailImage,
							onContextMenu: K,
							onError: () => $(!0)
						})), null != z.coverImageOverlayText && (0, r.jsx)(d.P3F, {
							onClick: em,
							children: (0, r.jsx)("div", {
								className: k.thumbnailOverlay,
								children: (0, r.jsxs)("div", {
									className: k.thumbnailOverlayCta,
									children: [(0, r.jsx)(P.Z, {
										color: s.Z.WHITE
									}), (0, r.jsx)(d.Text, {
										variant: "text-sm/semibold",
										color: "always-white",
										children: z.coverImageOverlayText
									})]
								})
							})
						})]
					}), (0, r.jsxs)("div", {
						className: k.descriptionContainer,
						children: [(0, r.jsxs)("div", {
							className: k.descriptionHeader,
							children: [(0, r.jsx)(d.Text, {
								variant: "text-md/semibold",
								color: "text-default",
								className: k.descriptionHeaderText,
								children: z.title
							}), (0, r.jsx)(d.Text, {
								variant: "text-sm/normal",
								color: "text-muted",
								className: a()(k.descriptionHeaderText, k.descriptionSubtitle),
								children: z.subtitle
							})]
						}), (0, r.jsxs)("div", {
							className: k.descriptionFooter,
							children: [null != z.authorId && null != e_ && (0, r.jsx)(v.Z, {
								targetElementRef: V,
								userId: z.authorId,
								guildId: z.guildId,
								channelId: G.id,
								messageId: B.id,
								roleId: ea,
								avatarUrl: z.avatarUrl,
								newAnalyticsLocations: [m.Z.AVATAR],
								spacing: 12,
								children: e => (0, r.jsx)("div", {
									onMouseEnter: eh,
									onMouseLeave: eh,
									children: (0, r.jsx)(d.qEK, M(D({}, e), {
										ref: V,
										size: d.EFr.SIZE_40,
										src: e_,
										"aria-label": R.intl.string(R.t.KXz3XF),
										avatarDecoration: ef
									}))
								})
							}), (0, r.jsxs)("div", {
								className: k.descriptionFooterContainer,
								children: [(0, r.jsxs)("div", {
									className: k.descriptionFooterChannelName,
									children: [null != z.channelName && (0, r.jsx)(d.EAQ, {
										size: "md",
										color: "currentColor",
										className: k.mediaChannelIcon
									}), (0, r.jsx)(d.P3F, {
										onClick: em,
										className: k.channelName,
										children: (0, r.jsx)(d.X6q, {
											variant: "heading-md/semibold",
											color: "header-primary",
											children: null != (U = z.channelName) ? U : z.guildName
										})
									})]
								}), null != z.authorName && (0, r.jsx)(d.Text, {
									variant: "text-sm/medium",
									color: "text-muted",
									className: k.descriptionFooterAuthorContainer,
									children: R.intl.format(R.t.voIDKS, {
										authorName: z.authorName,
										authorNameHook: () => null == z.authorId ? (0, r.jsx)(d.rz2, {
											name: z.authorName,
											color: ei,
											roleColors: eo,
											className: k.authorName
										}) : (0, r.jsx)(v.Z, {
											targetElementRef: H,
											userId: z.authorId,
											guildId: z.guildId,
											channelId: G.id,
											messageId: B.id,
											roleId: ea,
											avatarUrl: z.avatarUrl,
											newAnalyticsLocations: [m.Z.USERNAME],
											children: e => (0, r.jsx)(d.rz2, M(D({}, e), {
												ref: H,
												name: z.authorName,
												color: ei,
												roleColors: eo,
												className: k.authorName
											}))
										}, (0, o.Z)())
									})
								})]
							}), z.canAccess ? (0, r.jsx)(u.zx, {
								color: u.Tt.BRAND,
								onClick: em,
								children: (0, r.jsx)(d.Text, {
									variant: "text-sm/medium",
									color: "always-white",
									children: z.ctaText
								})
							}) : (0, r.jsx)(d.gtL, {
								pauseAnimation: ee,
								onClick: em,
								className: a()(k.__invalid_ctaButtonContent, k.subscribeButton),
								color: u.zx.Colors.CUSTOM,
								children: (0, r.jsx)(d.Text, {
									variant: "text-sm/medium",
									color: "always-white",
									children: z.ctaText
								})
							})]
						})]
					})]
				})
			}
		},
		170140: function(e, t, n) {
			n.d(t, {
				J: () => b
			});
			var r = n(73800),
				i = n(399606),
				l = n(430198),
				a = n(754688),
				o = n(314897),
				s = n(592125),
				c = n(271383),
				u = n(430824),
				d = n(914010),
				p = n(594174),
				m = n(158222),
				f = n(312146),
				_ = n(487554),
				h = n(874748),
				g = n(981631);

			function b(e, t) {
				let n = (0, f.p$)(),
					b = (0, h.LR)(e),
					E = (0, i.e7)([c.ZP, o.default], () => {
						let e = o.default.getId();
						return c.ZP.isMember(null == b ? void 0 : b.guildId, e)
					}, [b]),
					y = (0, i.e7)([l.Z], () => null != b && (null == b ? void 0 : b.channelId) != null && l.Z.isChannelGated(b.guildId, b.channelId), [b]),
					x = t.hasFlag(g.iLy.IS_CROSSPOST),
					{
						rawMediaPostEmbedData: C,
						guild: v,
						parentChannel: O,
						user: j,
						selectedGuildId: I,
						canAccess: S
					} = (0, i.cj)([_.Z, u.Z, s.Z, p.default, d.Z], () => {
						var e;
						let t = null == (e = _.Z.getMediaPostEmbed(null == b ? void 0 : b.threadId)) ? void 0 : e.media,
							n = u.Z.getGuild(null == b ? void 0 : b.guildId),
							r = s.Z.getChannel(null == b ? void 0 : b.channelId),
							i = p.default.getUser(null == t ? void 0 : t.author_id),
							l = d.Z.getGuildId(),
							o = null != r && (0, a.YO)(r);
						return {
							rawMediaPostEmbedData: t,
							guild: n,
							parentChannel: r,
							user: i,
							selectedGuildId: l,
							canAccess: o
						}
					}, [b]),
					T = r.useMemo(() => {
						var e, t;
						let n = (0, h.ku)({
							mediaPostEmbedData: C,
							guild: v,
							parentChannel: O,
							user: j,
							selectedGuildId: I,
							canAccess: S
						});
						return null == n ? null : (e = function(e) {
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
						}({}, n), t = t = {
							user: j
						}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : (function(e, t) {
							var n = Object.keys(e);
							if (Object.getOwnPropertySymbols) {
								var r = Object.getOwnPropertySymbols(e);
								n.push.apply(n, r)
							}
							return n
						})(Object(t)).forEach(function(n) {
							Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
						}), e)
					}, [C, v, O, j, I, S]);
				return r.useEffect(() => {
					if ((null == b ? void 0 : b.threadId) != null) {
						let e = _.Z.getEmbedFetchState(b.threadId);
						!0 !== n || e !== _.M.NOT_FETCHED || E && !1 === y || !E && x || (0, m.xP)(null == b ? void 0 : b.threadId)
					}
				}, [b, n, E, y, x]), T
			}
		},
		63205: function(e, t, n) {
			n.d(t, {
				Z: () => r
			});
			let r = (0, n(818083).B)({
				kind: "user",
				id: "2023-07_announcement_views",
				label: "Announcement Views",
				defaultConfig: {
					enabled: !1
				},
				treatments: [{
					id: 1,
					label: "Enabled",
					config: {
						enabled: !0
					}
				}]
			})
		},
		594173: function(e, t, n) {
			n.d(t, {
				aD: () => a,
				ro: () => o
			});
			var r, i = n(81643),
				l = n(703751),
				a = ((r = {}).MARK_AS_FALSE_POSITIVE = "mark_as_false_positive", r.AGE_VERIFICATION_RETRY = "age_verification_retry", r);

			function o(e, t) {
				let n = (0, l.r)(e),
					r = (0, i.pY)(t, e);
				return n ? "mark_as_false_positive" : r ? "age_verification_retry" : void 0
			}
		},
		226378: function(e, t, n) {
			n.d(t, {
				NL: () => c
			});
			var r = n(73800),
				i = n(595519),
				l = n(527805),
				a = n(388032);

			function o(e) {
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

			function s(e, t) {
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

			function c(e) {
				let {
					embeddedActivity: t,
					joinability: n,
					currentEmbeddedActivity: c,
					channel: u
				} = e;
				return r.useMemo(() => (function(e) {
					let {
						embeddedActivity: t,
						joinability: n,
						currentEmbeddedActivity: r,
						channel: c
					} = e, u = null == t, d = {
						disabled: !1,
						isJoinAction: !u,
						text: u ? a.intl.string(a.t.I0v0Qk) : a.intl.string(a.t.sqe0ho),
						tooltip: void 0
					}, p = (0, i.WS)(c);
					if (null != t && null != r && t.launchId === r.launchId) return s(o({}, d), {
						disabled: !0,
						text: a.intl.string(a.t.DPfdsr),
						tooltip: a.intl.string(a.t.wJNK8P)
					});
					if (u) return s(o({}, d), {
						disabled: !p,
						tooltip: p ? void 0 : a.intl.string(a.t.f41E1t)
					});
					if (null != n && n !== l.Fw.CAN_JOIN) {
						let e;
						switch (n) {
							case l.Fw.NO_USE_EMBEDDED_ACTIVITIES_PERMISSION:
								e = a.intl.string(a.t.hHGrW1);
								break;
							case l.Fw.ACTIVITY_AGE_GATED:
								e = a.intl.string(a.t["4WuFRE"]);
								break;
							case l.Fw.ACTIVITIES_FEATURE_NOT_ENABLED_FOR_OS:
								e = a.intl.string(a.t.uGDCc3);
								break;
							case l.Fw.ACTIVITY_NOT_SUPPORTED_ON_OS:
								e = a.intl.string(a.t.UXoQTk);
								break;
							case l.Fw.CHANNEL_FULL:
								e = a.intl.string(a.t.rZfiNj);
								break;
							case l.Fw.NO_CHANNEL_CONNECT_PERMISSION:
								e = a.intl.string(a.t.w5SApq);
								break;
							case l.Fw.NO_CHANNEL:
							case l.Fw.NO_GUILD:
							case l.Fw.NO_USER:
							case l.Fw.IS_AFK_CHANNEL:
								e = a.intl.string(a.t.Etp6uL)
						}
						return s(o({}, d), {
							disabled: !0,
							tooltip: e
						})
					}
					return d
				})({
					embeddedActivity: t,
					joinability: n,
					currentEmbeddedActivity: c,
					channel: u
				}), [t, n, c, u])
			}
		},
		161010: function(e, t, n) {
			n.d(t, {
				M: () => i
			});
			let r = (0, n(818083).B)({
				kind: "user",
				id: "2023-10_social_proofing_file_size",
				label: "Social Proofing File Size",
				defaultConfig: {
					enabled: !1
				},
				treatments: [{
					id: 1,
					label: "Should show nitro upsell for large files",
					config: {
						enabled: !0
					}
				}]
			});

			function i(e) {
				return r.getCurrentConfig({
					location: e
				}).enabled
			}
		},
		461157: function(e, t, n) {
			n.d(t, {
				Z: () => r
			});

			function r(e) {
				let t = 0;
				return "" !== e.content && t++, null != e.activity && t++, (e.stickers.length > 0 || e.stickerItems.length > 0) && t++, e.components.length > 0 && t++, e.messageSnapshots.length > 0 && t++, null != e.poll && t++, t
			}
		},
		277707: function(e, t, n) {
			n.d(t, {
				e: () => i
			});
			var r = n(388032);

			function i(e) {
				let {
					isVoiceChannel: t,
					isHubGuild: n,
					isOwnInvite: i,
					isGuest: l,
					isStage: a,
					isStream: o
				} = e;
				if (t)
					if (i)
						if (o) return r.intl.string(r.t.N85DCg);
						else if (a) return r.intl.string(r.t.TJQcNj);
				else if (l) return r.intl.string(r.t.mJyBio);
				else return r.intl.string(r.t.lxTgPz);
				else if (o) return r.intl.string(r.t.Mnvc3N);
				else if (a) return r.intl.string(r.t.FdPNr6);
				else if (l) return r.intl.string(r.t.f4gmra);
				else return r.intl.string(r.t.H39rER);
				return n ? i ? r.intl.string(r.t.UxmnHx) : r.intl.string(r.t.sigPER) : i ? r.intl.string(r.t["oU/lsr"]) : r.intl.string(r.t.BoQUFR)
			}
		},
		697568: function(e, t, n) {
			n.d(t, {
				Z: () => a
			});
			var r = n(544891),
				i = n(900849),
				l = n(981631);
			let a = e => r.tn.get({
				url: l.ANM.STICKER_GUILD_DATA(e),
				oldFormErrors: !0,
				rejectWithError: !0
			}).then(e => (null == e ? void 0 : e.body) != null ? (0, i.PP)(e.body) : null).catch(() => null)
		},
		804063: function(e, t, n) {
			n.d(t, {
				Z: () => o
			});
			var r = n(668781),
				i = n(699516),
				l = n(493892),
				a = n(388032);

			function o(e) {
				let t = null;
				return i.Z.isBlockedForMessage(e) ? t = {
					title: a.t["j7eA/v"],
					body: a.t.dTNNgo
				} : i.Z.isIgnoredForMessage(e) ? t = {
					title: a.t.XyWoKS,
					body: a.t["8t8doK"]
				} : (0, l.DQ)(e) && (t = {
					title: a.t["6vJKFh"],
					body: a.t.zKNgPD
				}), null == t || (r.Z.show({
					title: a.intl.string(t.title),
					body: a.intl.formatToPlainString(t.body, {
						name: e.author.username
					}),
					confirmText: a.intl.string(a.t.BddRzc)
				}), !1)
			}
		},
		60174: function(e, t, n) {
			n.d(t, {
				X: () => P
			}), n(997841), n(388685);
			var r = n(255367),
				i = n(73800),
				l = n(120356),
				a = n.n(l),
				o = n(954955),
				s = n.n(o),
				c = n(507274),
				u = n(481060),
				d = n(255963),
				p = n(387188),
				m = n(466794),
				f = n(659215),
				_ = n(222677),
				h = n(995774),
				g = n(931651),
				b = n(594174),
				E = n(630388),
				y = n(74538),
				x = n(566006),
				C = n(981631),
				v = n(185923),
				O = n(474936),
				j = n(388032),
				I = n(92254),
				S = n(588429);

			function T(e, t, n) {
				return t in e ? Object.defineProperty(e, t, {
					value: n,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : e[t] = n, e
			}

			function N(e) {
				for (var t = 1; t < arguments.length; t++) {
					var n = null != arguments[t] ? arguments[t] : {},
						r = Object.keys(n);
					"function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
						return Object.getOwnPropertyDescriptor(n, e).enumerable
					}))), r.forEach(function(t) {
						T(e, t, n[t])
					})
				}
				return e
			}
			class P extends i.Component {
				render() {
					let {
						type: e,
						message: t,
						className: n,
						children: i,
						useChatFontScaling: l,
						tabIndex: o = 0
					} = this.props, {
						isReactionPickerActive: s
					} = this.state, c = t.state === C.yb.SENDING, f = e === x.O.BURST;
					if (c || (0, E.yE)(t.flags, C.iLy.EPHEMERAL)) return null;
					let _ = b.default.getCurrentUser(),
						h = (0, y.I5)(_),
						g = f ? j.intl.string(j.t.Kfcszs) : j.intl.string(j.t.lfIHs7);
					!h && f && (g = (0, r.jsx)(m.X, {
						tooltipText: j.intl.string(j.t.Kfcszs)
					}));
					let O = l ? S : I,
						T = {
							size: "sm",
							color: "currentColor",
							className: O.icon
						};
					return t.type === C.uaV.EMOJI_ADDED && 0 === t.reactions.length ? (0, r.jsx)(p.e, {
						message: t,
						className: a()(O.reactionBtn, n)
					}) : (0, r.jsx)(u.yRy, {
						targetElementRef: this.ref,
						shouldShow: s,
						onRequestClose: this.handleReactionPickerToggle,
						renderPopout: this.renderReactionPopout,
						position: "right",
						children: (e, t) => {
							var l, s;
							let {
								isShown: c
							} = t;
							return (0, r.jsx)(u.DY3, {
								text: g,
								color: u.FGA.PRIMARY,
								"aria-label": f ? j.intl.string(j.t.Kfcszs) : j.intl.string(j.t.lfIHs7),
								tooltipClassName: O.__invalid_addReactionTooltip,
								children: (0, r.jsxs)(u.P3F, (l = N({}, e), s = s = {
									innerRef: this.ref,
									tabIndex: o,
									onClick: e => {
										this.handleAddReactionClick(e)
									},
									onMouseEnter: () => (0, d.x)(v.qR.AddReactionPopoutMouseEntered),
									onFocus: () => (0, d.x)(v.qR.AddReactionPopoutFocused),
									className: a()(O.reactionBtn, {
										[O.active]: c
									}, n),
									children: [f ? (0, r.jsx)(u.Pt5, N({}, T)) : (0, r.jsx)(u.EO4, N({}, T)), i]
								}, Object.getOwnPropertyDescriptors ? Object.defineProperties(l, Object.getOwnPropertyDescriptors(s)) : (function(e, t) {
									var n = Object.keys(e);
									if (Object.getOwnPropertySymbols) {
										var r = Object.getOwnPropertySymbols(e);
										n.push.apply(n, r)
									}
									return n
								})(Object(s)).forEach(function(e) {
									Object.defineProperty(l, e, Object.getOwnPropertyDescriptor(s, e))
								}), l))
							})
						}
					})
				}
				constructor(...e) {
					super(...e), T(this, "state", {
						isReactionPickerActive: !1
					}), T(this, "ref", i.createRef()), T(this, "onAddReaction", (e, t) => {
						if (null == e) return;
						let {
							channel: n,
							message: r,
							isForumToolbar: i
						} = this.props;
						(0, _.rU)(n.id, r.id, (0, h.g1)(e), i ? _.TW.FORUM_TOOLBAR : _.TW.MESSAGE_INLINE_BUTTON, {
							burst: t
						})
					}), T(this, "handleReactionPickerToggle", () => {
						this.setState(e => ({
							isReactionPickerActive: !e.isReactionPickerActive
						}))
					}), T(this, "handleAddReactionClick", e => {
						let {
							type: t,
							channel: n
						} = this.props;
						e.stopPropagation();
						let r = b.default.getCurrentUser();
						t !== x.O.BURST || (0, y.I5)(r) || (0, f.m)({
							analytics: {
								type: O.cd.BURST_REACTION_UPSELL,
								page: null != n.getGuildId() ? C.ZY5.GUILD_CHANNEL : C.ZY5.DM_CHANNEL,
								section: (0, h.s4)(n),
								object: C.qAy.INLINE_REACTION_PICKER_UPSELL
							}
						}), this.handleReactionPickerToggle()
					}), T(this, "renderReactionPopout", e => {
						let {
							closePopout: t
						} = e, {
							type: n,
							channel: i,
							message: l
						} = this.props, a = N({
							openPopoutType: "message_reaction_emoji_picker"
						}, n === x.O.BURST && {
							openPopoutType: "message_super_reaction_emoji_picker",
							page: null != i.getGuildId() ? C.ZY5.GUILD_CHANNEL : C.ZY5.DM_CHANNEL,
							section: (0, h.s4)(i),
							object: C.qAy.REACTION_RAIL
						}), o = (0, r.jsx)(g.$, {
							closePopout: t,
							channel: i,
							onSelectEmoji: e => {
								let {
									emoji: n,
									willClose: r,
									isBurst: i
								} = e;
								this.onAddReaction(n, i), r && (i ? s()(t, 150)() : t())
							},
							analyticsOverride: a,
							messageId: l.id
						});
						return (0, r.jsx)(c.M.Consumer, {
							children: e => {
								let {
									inDialog: t
								} = e;
								return t ? (0, r.jsx)(u.VqE, {
									"aria-label": j.intl.string(j.t["7Xqzdn"]),
									children: o
								}) : o
							}
						})
					})
				}
			}
		},
		987909: function(e, t, n) {
			n.d(t, {
				Z: () => x
			}), n(388685);
			var r = n(255367),
				i = n(73800),
				l = n(442837),
				a = n(755721),
				o = n(904245),
				s = n(541716),
				c = n(419922),
				u = n(665906),
				d = n(271383),
				p = n(496675),
				m = n(594174),
				f = n(626135),
				_ = n(709054),
				h = n(838440),
				g = n(981631),
				b = n(18485);

			function E(e) {
				let {
					assets: t,
					currentUser: n,
					message: r
				} = e, i = (_.default.extractTimestamp(n.id) + _.default.extractTimestamp(r.id)) % t.length;
				return t[i]
			}

			function y(e) {
				let {
					currentUser: t,
					channel: n,
					message: l,
					buttonLabels: u,
					stickers: d,
					event: p,
					eventProperties: m
				} = e, [_, g] = i.useState(!1), y = i.useMemo(() => E({
					assets: d,
					currentUser: t,
					message: l
				}), [d, t, l]), x = i.useMemo(() => E({
					assets: u,
					currentUser: t,
					message: l
				}), [u, t, l]), C = i.useCallback(async () => {
					let {
						valid: e
					} = await (0, h.v)({
						type: s.Ie.FORM,
						content: "",
						channel: n
					});
					e && (! function(e) {
						let {
							channel: t,
							message: n,
							sticker: r
						} = e;
						o.Z.sendGreetMessage(t.id, r.id, o.Z.getSendMessageOptionsForReply({
							channel: t,
							message: n,
							shouldMention: !0,
							showMentionToggle: !0
						}))
					}({
						channel: n,
						message: l,
						sticker: y
					}), function(e) {
						var t, n;
						let {
							sticker: r,
							event: i,
							eventProperties: l
						} = e;
						null != i && f.default.track(i, (t = function(e) {
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
						}({}, l), n = n = {
							sticker_id: r.id
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
					}({
						sticker: y,
						event: p,
						eventProperties: m
					}))
				}, [n, l, y, p, m]);
				return (0, r.jsxs)(a.zx, {
					className: b.CTAMessageButtonOuter,
					innerClassName: b.CTAMessageButton,
					color: a.Tt.PRIMARY,
					onMouseEnter: () => g(!0),
					onMouseLeave: () => g(!1),
					onClick: C,
					children: [(0, r.jsx)(c.Z, {
						className: b.CTAMessageSticker,
						isInteracting: _,
						sticker: y,
						size: 28
					}), x]
				})
			}

			function x(e) {
				let {
					channel: t,
					message: n,
					buttonLabels: i,
					stickers: a,
					event: o,
					eventProperties: s
				} = e, c = m.default.getCurrentUser(), f = function(e) {
					let {
						channel: t,
						message: n,
						currentUser: r
					} = e;
					return (0, l.e7)([p.Z, d.ZP], () => {
						var e;
						let i = t.guild_id;
						if (null == r || null == i) return !1;
						let l = (0, u.xl)(t),
							a = p.Z.can(g.Plq.SEND_MESSAGES, t),
							o = null == (e = d.ZP.getMember(i, r.id)) ? void 0 : e.isPending,
							s = n.author.bot;
						return a && !l && !o && !s
					})
				}({
					channel: t,
					message: n,
					currentUser: c
				});
				return null != c && f ? (0, r.jsx)("div", {
					className: b.CTAMessage,
					children: (0, r.jsx)(y, {
						currentUser: c,
						channel: t,
						message: n,
						buttonLabels: i,
						stickers: a,
						event: o,
						eventProperties: s
					})
				}) : null
			}
		},
		384203: function(e, t, n) {
			n.d(t, {
				Z: () => c
			}), n(388685), n(35282);
			var r = n(255367);
			n(73800);
			var i = n(592125),
				l = n(430824),
				a = n(496675),
				o = n(983436),
				s = n(981631);

			function c(e) {
				let {
					code: t,
					message: n
				} = e, [c, u] = t.split("/"), d = i.Z.getChannel(u), p = l.Z.getGuild(c);
				return null != d && d.isGuildVocal() && null != p && a.Z.can(s.Plq.VIEW_CHANNEL, d) && a.Z.can(s.Plq.CONNECT, d) ? (0, r.jsx)(o.Z, {
					guild: p,
					channel: d,
					message: n
				}) : null
			}
		},
		779125: function(e, t, n) {
			n.d(t, {
				Z: () => E
			});
			var r = n(255367);
			n(73800);
			var i = n(442837),
				l = n(481060),
				a = n(475179),
				o = n(287734),
				s = n(933557),
				c = n(124072),
				u = n(703656),
				d = n(131704),
				p = n(592125),
				m = n(430824),
				f = n(699516),
				_ = n(594174),
				h = n(934415),
				g = n(900849),
				b = n(981631);

			function E(e) {
				let {
					channel: t,
					onClick: n,
					beforeTransition: E,
					className: y,
					openChatWithoutConnecting: x
				} = e, C = (0, i.e7)([_.default, f.Z], () => null == t ? "" : (0, s.F6)(t, _.default, f.Z), [t]);
				return (0, r.jsx)(l.ua7, {
					text: C,
					position: "top",
					children: e => {
						let {
							onMouseEnter: i,
							onMouseLeave: s
						} = e;
						return (0, r.jsx)(c.Z, {
							role: "link",
							className: y,
							onClick: e => {
								e.stopPropagation(), null != n ? n() : (null != E && E(), (0, l.pTH)(), function(e, t) {
									let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
									if (null == e || null == t) return;
									let r = m.Z.getGuild(e);
									if ((null == r ? void 0 : r.joinedAt) == null) return g.Ub(e, {}, {
										channelId: t
									});
									let i = p.Z.getChannel(t);
									if (null != i && (0, d.bw)(i.type)) {
										if (n) {
											a.Z.updateChatOpen(i.id, !0), (0, u.uL)(b.Z5c.CHANNEL(e, t));
											return
										}
										o.default.selectVoiceChannel(i.id);
										return
									}(0, u.uL)(b.Z5c.CHANNEL(e, t))
								}(null == t ? void 0 : t.guild_id, null == t ? void 0 : t.id, x))
							},
							onMouseEnter: i,
							onMouseLeave: s,
							iconType: (0, h.wl)(t),
							children: C
						})
					}
				})
			}
		},
		890410: function(e, t, n) {
			n.d(t, {
				Z: () => p
			});
			var r = n(255367);
			n(73800);
			var i = n(120356),
				l = n.n(i),
				a = n(739566),
				o = n(492593),
				s = n(930282),
				c = n(464891),
				u = n(115997);

			function d(e) {
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

			function p(e) {
				var t, n, {
						message: i,
						channel: p,
						content: m,
						className: f,
						compact: _,
						popoutProps: h,
						hideTimestamp: g = !1,
						withFooter: b = !1
					} = e,
					E = function(e, t) {
						if (null == e) return {};
						var n, r, i = function(e, t) {
							if (null == e) return {};
							var n, r, i = {},
								l = Object.keys(e);
							for (r = 0; r < l.length; r++) n = l[r], t.indexOf(n) >= 0 || (i[n] = e[n]);
							return i
						}(e, t);
						if (Object.getOwnPropertySymbols) {
							var l = Object.getOwnPropertySymbols(e);
							for (r = 0; r < l.length; r++) n = l[r], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n])
						}
						return i
					}(e, ["message", "channel", "content", "className", "compact", "popoutProps", "hideTimestamp", "withFooter"]);
				let y = (0, a.ZP)(i);
				return (0, r.jsx)("div", {
					className: l()({
						[u.withFooter]: b
					}, u.embedCard, {
						[u.compact]: _
					}, f),
					children: (0, r.jsx)(o.Z, (t = d({}, E), n = n = {
						className: l()(u.messageContainer, {
							[u.compact]: _
						}),
						childrenMessageContent: (0, r.jsx)(s.ZP, {
							className: l()(u.__invalid_messageContent, {
								[u.compact]: _
							}),
							message: i,
							content: m,
							compact: null != _ && _
						}),
						childrenHeader: (0, r.jsx)(c.ZP, d({
							message: i,
							channel: p,
							author: y,
							guildId: null == p ? void 0 : p.guild_id,
							compact: _,
							hideTimestamp: g,
							className: l()(u.header, {
								[u.compact]: _
							})
						}, null != h ? h : {})),
						compact: _,
						author: y
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
				})
			}
		},
		633957: function(e, t, n) {
			n.d(t, {
				Z: () => F
			}), n(388685);
			var r = n(255367),
				i = n(73800),
				l = n(120356),
				a = n.n(l),
				o = n(442837),
				s = n(846519),
				c = n(481060),
				u = n(2052),
				d = n(607070),
				p = n(317381),
				m = n(638880),
				f = n(122613),
				_ = n(527805),
				h = n(100527),
				g = n(906732),
				b = n(895924),
				E = n(758199),
				y = n(943762),
				x = n(914498),
				C = n(515344),
				v = n(429551),
				O = n(973616),
				j = n(314897),
				I = n(592125),
				S = n(158776),
				T = n(594174),
				N = n(626135),
				P = n(768581),
				A = n(70956),
				w = n(823379),
				Z = n(506071),
				R = n(226378),
				k = n(981631),
				L = n(701488),
				D = n(388032),
				M = n(484608);
			let U = i.memo(e => {
				let {
					start: t
				} = e, [n, r] = i.useState(0), l = (0, Z.n)(), a = (0, o.e7)([d.Z], () => d.Z.useReducedMotion), c = !1 === l || a;
				return i.useEffect(() => {
					let e = new s.Xp;
					return e.start(c ? 15 * A.Z.Millis.SECOND : A.Z.Millis.SECOND, () => {
						r((new Date().getTime() - t) / A.Z.Millis.SECOND)
					}), () => e.stop()
				}, [c, t]), (0, v.m)(n)
			});
			U.displayName = "ActivityRuntimeCounter";
			let F = i.memo(function(e) {
				var t, n, l, s;
				let d, {
						application: v,
						channelId: A,
						guildId: Z
					} = e,
					{
						analyticsLocations: F
					} = (0, g.ZP)(h.Z.ACTIVITY_INSTANCE_EMBED),
					B = (0, u.O)(),
					G = (0, o.e7)([I.Z], () => I.Z.getChannel(A), [A]),
					H = (null == G || null == (t = G.isThread) ? void 0 : t.call(G)) ? null == G ? void 0 : G.parent_id : A,
					V = (0, o.e7)([j.default], () => j.default.getId()),
					{
						embeddedActivity: z,
						currentEmbeddedActivity: W,
						activityLaunchState: K
					} = (0, o.cj)([p.ZP], () => ({
						embeddedActivity: p.ZP.getEmbeddedActivitiesForChannel(null != H ? H : "").find(e => e.applicationId === v.id),
						currentEmbeddedActivity: p.ZP.getCurrentEmbeddedActivity(),
						activityLaunchState: p.ZP.getLaunchState(v.id, null != H ? H : void 0)
					}), [H, v.id]),
					Y = null == z ? void 0 : z.userIds,
					X = (0, o.Wu)([T.default], () => Array.from(null != Y ? Y : []).map(e => T.default.getUser(e)).filter(w.lm), [Y]),
					q = (0, o.e7)([S.Z], () => {
						if (null == Y) return null;
						for (let e of Y) {
							let t = S.Z.findActivity(e, e => e.application_id === v.id);
							if (null != t) return t
						}
						return null
					}, [v.id, Y]),
					Q = null == q ? void 0 : q.details,
					J = i.useMemo(() => {
						let e = new O.ZP(v);
						return null == e.embeddedActivityConfig && (e.embeddedActivityConfig = L.wT), e
					}, [v]),
					$ = (0, _.s5)({
						userId: V,
						channelId: A,
						application: J
					}),
					ee = null == z,
					et = (0, R.NL)({
						embeddedActivity: z,
						joinability: $,
						currentEmbeddedActivity: W,
						channel: G
					}),
					en = i.useId(),
					er = null != K && K.isLaunching && K.componentId === en,
					ei = async () => {
						N.default.track(k.rMx.ACTIVITY_INSTANCE_EMBED_CLICKED, {
							application_id: v.id,
							channel_id: A,
							channel_type: null == G ? void 0 : G.type,
							is_activity_start: ee,
							cta: "Play"
						}), ee ? await (0, f.Z)({
							targetApplicationId: v.id,
							channelId: A,
							locationObject: B.location,
							analyticsLocations: F,
							componentId: en,
							commandOrigin: b.bB.ACTIVITY_INSTANCE_EMBED
						}) : await (0, m.Z)({
							applicationId: z.applicationId,
							activityChannelId: A,
							locationObject: B.location,
							analyticsLocations: F,
							componentId: en
						})
					}, el = et.disabled ? D.intl.string(D.t.JBnc7O) : D.intl.string(D.t.cX9uLS), ea = (0, C.G)(J, () => {
						N.default.track(k.rMx.ACTIVITY_INSTANCE_EMBED_CLICKED, {
							application_id: v.id,
							channel_id: A,
							channel_type: null == G ? void 0 : G.type,
							cta: "View"
						})
					}), eo = P.ZP.getApplicationIconURL({
						id: v.id,
						icon: v.icon,
						bot: v.bot
					});
				et.disabled && (d = null != (l = et.tooltip) ? l : et.text);
				let es = X.length,
					ec = null != (s = null == q || null == (n = q.timestamps) ? void 0 : n.start) ? s : null == q ? void 0 : q.created_at,
					eu = (0, y.r)(q),
					ed = [{
						label: ee ? D.intl.string(D.t.RscU7O) : D.intl.string(D.t.VJlc0d),
						trackingArea: x.j_.PLAY,
						onClick: ei,
						disabledReason: d,
						submitting: er
					}];
				return (0, r.jsx)(E.W, {
					header: D.intl.string(D.t.pkq6Vl),
					title: v.name,
					iconSrc: eo,
					info: (0, r.jsx)("div", {
						className: M.infoWrapper,
						children: ee ? (0, r.jsx)(c.Text, {
							variant: "text-xs/medium",
							color: "none",
							children: el
						}) : (0, r.jsxs)(r.Fragment, {
							children: [null != Q && (0, r.jsxs)("div", {
								className: M.activityPresenceDetailsContainer,
								children: [null != ec && (0, r.jsxs)("div", {
									className: M.activityPresenceDetailsItemContainer,
									children: [(0, r.jsx)("div", {
										className: M.activityPresenceDetailsItemIconContainer,
										children: (0, r.jsx)(eu.Icon, {
											size: "xxs",
											color: "currentColor"
										})
									}), (0, r.jsx)(c.Text, {
										variant: "text-xs/medium",
										color: "none",
										children: (0, r.jsx)(U, {
											start: ec
										})
									})]
								}), (0, r.jsxs)("div", {
									className: a()(M.activityPresenceDetailsItemContainer, M.truncatesText),
									children: [(0, r.jsx)("div", {
										children: (0, r.jsx)(c.hH0, {
											size: "xxs",
											color: "currentColor"
										})
									}), (0, r.jsx)(c.Text, {
										variant: "text-xs/medium",
										color: "none",
										lineClamp: 1,
										children: Q
									})]
								})]
							}), es > 0 && (0, r.jsx)(y.K, {
								activityUsers: X,
								guildId: Z,
								activityText: eu.text
							})]
						})
					}),
					actions: ed,
					onClickContent: ea,
					trackingConfig: {
						id: v.id,
						linkType: x.Un.ACTIVITY_INSTANCE
					}
				})
			})
		},
		530472: function(e, t, n) {
			n.d(t, {
				Z: () => c
			});
			var r = n(255367);
			n(73800);
			var i = n(481060),
				l = n(824203),
				a = n(981631),
				o = n(388032),
				s = n(806518);

			function c(e) {
				var t;
				let n, {
						message: c,
						onDeleteMessage: u,
						children: d
					} = e,
					p = null == (t = c.interactionMetadata) ? void 0 : t.ephemerality_reason,
					m = () => u(c, !0);
				if (null != p) {
					let e = (0, l.i)(p);
					n = (0, r.jsx)("div", {
						className: s.userAppsBetaContent,
						children: o.intl.format(o.t.wx1tLS, {
							handleDelete: m,
							reason: e
						})
					})
				} else n = c.type === a.uaV.STAGE_RAISE_HAND ? o.intl.format(o.t["qDAX+/"], {
					handleDelete: m
				}) : o.intl.format(o.t.uX3ecH, {
					count: 1,
					countMessages: 1,
					handleDelete: m
				});
				return (0, r.jsxs)("div", {
					className: s.ephemeralMessage,
					onClick: e => e.stopPropagation(),
					children: [(0, r.jsx)(i.tEF, {
						size: "xs",
						color: "currentColor",
						className: s.icon
					}), n, d]
				})
			}
		},
		697451: function(e, t, n) {
			n.d(t, {
				Z: () => H
			});
			var r = n(255367),
				i = n(73800),
				l = n(120356),
				a = n.n(l),
				o = n(512722),
				s = n.n(o),
				c = n(913527),
				u = n.n(c),
				d = n(442837),
				p = n(481060),
				m = n(911969),
				f = n(456100),
				_ = n(595519),
				h = n(566620),
				g = n(403404),
				b = n(100527),
				E = n(906732),
				y = n(783097),
				x = n(581364),
				C = n(592180),
				v = n(726033),
				O = n(598077),
				j = n(594174),
				I = n(768581),
				S = n(585483),
				T = n(55935),
				N = n(739566),
				P = n(421399),
				A = n(310423),
				w = n(223021),
				Z = n(981631),
				R = n(388032),
				k = n(848697);

			function L(e) {
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

			function D(e, t) {
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

			function M(e) {
				let {
					width: t = 6,
					height: n = 10,
					color: i = "currentColor",
					className: l,
					foreground: a
				} = e;
				return (0, r.jsx)("svg", {
					className: l,
					width: t,
					height: n,
					viewBox: "0 0 6 10",
					fill: "none",
					xmlns: "http://www.w3.org/2000/svg",
					children: (0, r.jsx)("path", {
						d: "M4.61241 0L6 0.845294L1.38759 10L0 9.15471L4.61241 0Z",
						className: a,
						fill: i
					})
				})
			}

			function U(e, t, n, i, l, o) {
				var s, c, u;
				let {
					message: d,
					compact: m,
					channel: f,
					isInteractionUserBlocked: _,
					isInteractionUserIgnored: h,
					showAvatarPopout: g,
					showTargetAvatarPopout: b,
					onClickAvatar: E,
					onUserContextMenu: y,
					onClickTargetAvatar: x,
					onTargetUserContextMenu: C,
					onPopoutRequestClose: v
				} = e;
				if (m && 1 === n) return null;
				if (m && null == d.activityInstance || _ || h) return (0, r.jsx)("div", {
					className: k.replyBadge,
					children: (0, r.jsx)(M, {
						className: k.commandIcon
					})
				});
				let O = null != (u = I.ZP.getGuildMemberAvatarURL({
						avatar: null != (s = i.guildMemberAvatar) ? s : void 0,
						userId: t.id,
						guildId: null != (c = null == f ? void 0 : f.guild_id) ? c : ""
					})) ? u : void 0,
					j = () => (function(e) {
						let {
							user: t,
							guildId: n,
							guildAvatar: i,
							onClick: l,
							onContextMenu: o,
							onMouseDown: s,
							ref: c
						} = e;
						return (0, r.jsx)("img", {
							alt: "",
							src: null != i ? i : t.getAvatarURL(n, 16),
							onClick: l,
							onContextMenu: o,
							onMouseDown: s,
							className: a()({
								[k.executedCommandAvatar]: !0,
								[k.clickable]: null != l
							}),
							ref: c
						})
					})({
						user: t,
						guildId: f.guild_id,
						guildAvatar: O,
						onClick: 1 === n ? x : E,
						onContextMenu: 1 === n ? C : y,
						ref: o
					}),
					S = 1 === n ? b : g;
				return null != l && null != S && null != o ? (0, r.jsx)(p.yRy, {
					targetElementRef: o,
					renderPopout: l,
					shouldShow: S,
					position: "right",
					onRequestClose: v,
					children: j
				}) : j()
			}

			function F(e, t, n, i, l) {
				let {
					message: a,
					channel: o,
					showUsernamePopout: s,
					showTargetUsernamePopout: c,
					onClickUsername: u,
					onUserContextMenu: d,
					onClickTargetUsername: p,
					onTargetUserContextMenu: m,
					onPopoutRequestClose: f
				} = e;
				return (0, r.jsx)(P.Z, {
					className: 1 === n ? k.targetUsername : "",
					compact: !0,
					author: i,
					message: a,
					channel: o,
					userOverride: t,
					showPopout: 1 === n ? c : s,
					renderPopout: l,
					onClick: 1 === n ? p : u,
					onContextMenu: 1 === n ? m : d,
					onPopoutRequestClose: f
				})
			}
			let B = () => (0, r.jsx)(p.Fbu, {
				size: "xxs",
				color: "currentColor",
				className: k.executedCommandSeparator
			});

			function G(e) {
				let {
					enabled: t
				} = f.c.useExperiment({
					location: "ExecutedCommand"
				}, {
					autoTrackExposure: !0
				}), n = t ? p.iWm : p.jje;
				return (0, r.jsx)(n, L({}, e))
			}

			function H(e) {
				var t;
				let n, {
						message: l,
						channel: o
					} = e,
					{
						analyticsLocations: c
					} = (0, E.ZP)(b.Z.EXECUTED_COMMAND),
					f = (0, d.e7)([j.default], () => j.default.getCurrentUser()),
					I = i.useRef(null),
					P = i.useRef(null),
					M = i.useMemo(() => (e, t, n) => (s()(null != t, "ExecutedCommand: user cannot be undefined"), s()(null != f, "ExecutedCommand: currentUser cannot be undefined"), s()(null != o, "ExecutedCommand: channel cannot be undefined"), (0, r.jsx)(v.Z, D(L({}, e), {
						user: t,
						currentUser: f,
						guildId: o.guild_id,
						channelId: o.id,
						messageId: l.id,
						newAnalyticsLocations: n
					}))), [f, o, l.id]),
					H = i.useMemo(() => e => (s()(null != o, "ExecutedCommand: channel cannot be null"), (0, r.jsx)(A.Z, D(L({}, e), {
						channel: o,
						messageId: l.id,
						interactionData: l.interactionData
					}))), [o, l.id, l.interactionData]),
					V = (0, x.t0)(l),
					z = (null == V ? void 0 : V.type) === m.B8.APPLICATION_COMMAND && null != V.target_user ? new O.Z(V.target_user) : null,
					W = (null == V ? void 0 : V.type) === m.B8.APPLICATION_COMMAND && null != l.messageReference && null != e.renderTargetMessage,
					K = (0, N.Sw)(null == (t = l.interaction) ? void 0 : t.user, o),
					Y = (0, N.Sw)(z, o),
					X = i.useMemo(() => e.compact ? (0, w.Z)((0, T.vc)(u()(), "LT")) : null, [e.compact]),
					q = (0, _.NX)(o.id),
					Q = l.interaction;
				if (null == Q || null == K) return null;
				let J = () => {
					let t = U(e, Q.user, 0, K, e => M(e, Q.user, [b.Z.AVATAR]), I),
						n = F(e, Q.user, 0, K, e => M(e, Q.user));
					return (0, r.jsxs)(i.Fragment, {
						children: [t, n]
					}, "user")
				};
				if ((null == l ? void 0 : l.activityInstance) === null || (0, C.g)(l)) n = R.intl.format(R.t["rg7U+P"], {
					userHook: J,
					commandHook: () => {
						let t = function(e, t, n) {
							let {
								showDataPopout: i,
								message: l,
								onClickCommand: o,
								onPopoutRequestClose: s
							} = e, c = l.interaction.displayName;
							return (0, r.jsx)(p.yRy, {
								targetElementRef: n,
								renderPopout: t,
								shouldShow: i,
								position: "top",
								align: "center",
								onRequestClose: s,
								animation: p.yRy.Animation.FADE,
								positionKey: null != l.interactionData ? "ready" : "loading",
								children: e => {
									var {
										onClick: t
									} = e, i = function(e, t) {
										if (null == e) return {};
										var n, r, i = function(e, t) {
											if (null == e) return {};
											var n, r, i = {},
												l = Object.keys(e);
											for (r = 0; r < l.length; r++) n = l[r], t.indexOf(n) >= 0 || (i[n] = e[n]);
											return i
										}(e, t);
										if (Object.getOwnPropertySymbols) {
											var l = Object.getOwnPropertySymbols(e);
											for (r = 0; r < l.length; r++) n = l[r], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n])
										}
										return i
									}(e, ["onClick"]);
									if (l.type === Z.uaV.CHAT_INPUT_COMMAND || l.type === Z.uaV.INTERACTION_PREMIUM_UPSELL) return (0, r.jsx)(p.P3F, D(L({}, i), {
										tag: "span",
										onClick: o,
										innerRef: n,
										children: (0, r.jsxs)("div", {
											className: a()(k.appLauncherOnboardingCommandName, k.clickable),
											children: [(0, r.jsx)(p.jje, {
												size: "custom",
												color: "currentColor",
												height: 10,
												width: 10,
												className: k.appsIcon
											}), c]
										})
									}));
									if (!(0, C.g)(l)) return (0, r.jsx)("div", {
										className: k.commandName,
										ref: n,
										children: c
									});
									{
										let e = (0, y.XZ)(c);
										return (0, r.jsx)(p.P3F, D(L({}, i), {
											tag: "span",
											onClick: () => {
												S.S.dispatchToLastSubscribed(Z.CkL.OPEN_APP_LAUNCHER, {
													applicationId: l.applicationId
												})
											},
											innerRef: n,
											children: (0, r.jsxs)("div", {
												className: a()(k.appLauncherOnboardingCommandName, k.clickable),
												children: [(0, r.jsx)(G, {
													size: "custom",
													color: "currentColor",
													height: 10,
													width: 10,
													className: k.appsIcon
												}), e]
											})
										}))
									}
								}
							})
						}(e, H, P);
						return (0, r.jsx)(i.Fragment, {
							children: t
						}, "command")
					}
				}), W && null != e.renderTargetMessage ? n = (0, r.jsxs)(r.Fragment, {
					children: [n, (0, r.jsx)(B, {}), e.renderTargetMessage()]
				}) : null != z && (n = (0, r.jsxs)(r.Fragment, {
					children: [n, (0, r.jsx)(B, {}), (0, r.jsx)(() => {
						if (null == z) return null;
						let t = U(e, z, 1, Y, e => M(e, z, [b.Z.AVATAR]), I),
							n = F(e, z, 1, Y, e => M(e, z));
						return (0, r.jsxs)(i.Fragment, {
							children: [t, n]
						}, "target")
					}, {})]
				}));
				else {
					let e = () => {
						(0, g.Z)({
							channel: o,
							openInPopout: !1,
							analyticsLocations: c
						}), (0, h.w1)({
							guildId: o.guild_id
						})
					};
					n = q ? R.intl.format(R.t.kfV8WF, {
						userHook: J,
						activityHook: () => (0, r.jsx)(p.P3F, {
							tag: "span",
							onClick: e,
							children: (0, r.jsx)("div", {
								className: a()(k.commandName, k.clickable),
								children: R.intl.string(R.t.YTgRvr)
							})
						})
					}) : R.intl.format(R.t["6FeSyc"], {
						userHook: J
					})
				}
				return (0, r.jsx)(E.Gt, {
					value: c,
					children: (0, r.jsx)("div", {
						className: a()(k.repliedMessage, k.messageSpine, k.executedCommand, X),
						"aria-hidden": !e.compact,
						children: n
					})
				})
			}
		},
		310423: function(e, t, n) {
			n.d(t, {
				Z: () => T
			}), n(467055), n(388685);
			var r = n(255367),
				i = n(73800),
				l = n(120356),
				a = n.n(l),
				o = n(442837),
				s = n(481060),
				c = n(911969),
				u = n(906732),
				d = n(778087),
				p = n(603721),
				m = n(124072),
				f = n(892001),
				_ = n(592125),
				h = n(485386),
				g = n(430824),
				b = n(594174),
				E = n(739566),
				y = n(761652),
				x = n(388032),
				C = n(912861);

			function v(e) {
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

			function O(e, t) {
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
			let j = {
					tag: "span",
					variant: "text-md/normal",
					color: "header-secondary"
				},
				I = {
					className: a()("mention", C.mention)
				};

			function S(e) {
				return (0, r.jsx)(s.Text, O(v({}, j), {
					color: "header-primary",
					children: e
				}))
			}
			let T = i.memo(function(e) {
				var t, n, l, a, T, N;
				let P, {
						channel: A,
						messageId: w,
						interactionData: Z
					} = e,
					{
						analyticsLocations: R
					} = (0, u.ZP)(),
					{
						onCopy: k,
						copyRef: L
					} = (0, d.Z)(A, null == Z || null == (t = Z.application_command) ? void 0 : t.id),
					D = (0, o.e7)([g.Z], () => g.Z.getGuild(A.guild_id), [A.guild_id]);
				if (i.useEffect(() => {
						(null == Z || Z.type === c.yU.CHAT && void 0 === Z.application_command) && p.OG(A.id, w)
					}, [A.id, w, Z]), null == Z) P = (0, r.jsx)(s.$jN, {
					type: s.$jN.Type.SPINNING_CIRCLE,
					className: C.spinner
				});
				else {
					let e = [],
						t = Object.fromEntries((null != (a = null == (n = Z.application_command) ? void 0 : n.options) ? a : []).map(e => [e.name, e]));
					for (let n of null != (T = Z.options) ? T : []) e = e.concat(function e(t) {
						var n, l, a, o, u, d, p;
						let g, {
								option: C,
								channel: T,
								guild: N,
								messageId: P,
								parentOptionKey: A,
								commandOptionSpec: w,
								sourceAnalyticsLocations: Z
							} = t,
							R = null != A ? A + " " + C.name : C.name;
						if (C.type === c.jw.SUB_COMMAND || C.type === c.jw.SUB_COMMAND_GROUP) {
							let t = [(0, r.jsxs)(i.Fragment, {
									children: [" ", (0, r.jsx)(s.Text, O(v({}, j), {
										children: null != (l = null == w ? void 0 : w.name_localized) ? l : C.name
									}))]
								}, R)],
								c = Object.fromEntries(null == (n = null != (a = null == w ? void 0 : w.options) ? a : []) ? void 0 : n.map(e => [e.name, e]));
							for (let n of null != (o = C.options) ? o : []) t = t.concat(e({
								option: n,
								channel: T,
								guild: N,
								messageId: P,
								parentOptionKey: R,
								commandOptionSpec: c[n.name],
								sourceAnalyticsLocations: Z
							}));
							return t
						}
						let k = C.value;
						if (null != C.value) switch (C.type) {
							case c.jw.USER: {
								let e = C.value.toString(),
									t = b.default.getUser(e);
								if (null != t) {
									let e = (0, E.ij)(t, T);
									g = (0, r.jsxs)(m.Z, O(v({}, I), {
										onClick: () => (0, f.openUserProfileModal)({
											userId: t.id,
											guildId: T.guild_id,
											channelId: T.id,
											messageId: P,
											sourceAnalyticsLocations: Z
										}),
										children: [y.ME, e.nick]
									}))
								}
								break
							}
							case c.jw.CHANNEL: {
								let e = C.value.toString(),
									t = _.Z.getChannel(e);
								null != t && (g = (0, r.jsxs)(m.Z, O(v({}, I), {
									children: [y.zy, t.name]
								})));
								break
							}
							case c.jw.ROLE: {
								let e = C.value.toString(),
									t = null != N ? h.Z.getRole(N.id, e) : void 0;
								null != t && (g = (0, r.jsxs)(m.Z, O(v({}, I), {
									children: [y.ME, t.name]
								})));
								break
							}
							case c.jw.MENTIONABLE: {
								let e = C.value.toString(),
									t = null != N ? h.Z.getRole(N.id, e) : void 0;
								if (null != t) g = (0, r.jsxs)(m.Z, {
									children: [y.ME, t.name]
								});
								else {
									let t = b.default.getUser(e);
									if (null != t) {
										let e = (0, E.ij)(t, T);
										g = (0, r.jsxs)(m.Z, O(v({}, I), {
											onClick: () => (0, f.openUserProfileModal)({
												userId: t.id,
												guildId: T.guild_id,
												sourceAnalyticsLocations: Z
											}),
											children: [y.ME, e.nick]
										}))
									}
								}
								break
							}
							case c.jw.ATTACHMENT:
								g = S(x.intl.string(x.t.nONJVV));
								break;
							default: {
								let e = null == w || null == (u = w.choices) ? void 0 : u.find(e => e.value === C.value);
								null != e && (k = null != (d = e.name_localized) ? d : e.name)
							}
						}
						return null == g && (g = S(null == k ? void 0 : k.toString())), [(0, r.jsxs)(i.Fragment, {
							children: [(0, r.jsxs)(s.Text, O(v({}, j), {
								children: [" ", null != (p = null == w ? void 0 : w.name_localized) ? p : C.name, ": "]
							})), g]
						}, R)]
					}({
						option: n,
						channel: A,
						guild: D,
						messageId: w,
						parentOptionKey: null,
						commandOptionSpec: t[n.name],
						sourceAnalyticsLocations: R
					}));
					P = (0, r.jsxs)(r.Fragment, {
						children: [(0, r.jsxs)(s.Text, O(v({}, j), {
							children: ["/", null != (N = null == (l = Z.application_command) ? void 0 : l.name_localized) ? N : Z.name]
						})), e]
					})
				}
				return (0, r.jsxs)("div", {
					className: C.container,
					onCopy: e => {
						var t, n, r;
						let i = null != (r = null == (n = window) || null == (t = n.getSelection()) ? void 0 : t.toString()) ? r : "";
						i.startsWith("/") && i.endsWith("\n") && k(e, Z)
					},
					children: [(0, r.jsx)("div", {
						className: C.tooltip,
						ref: L,
						children: P
					}), (0, r.jsx)("div", {
						className: C.tooltipPointer
					})]
				})
			})
		},
		15642: function(e, t, n) {
			n.d(t, {
				Z: () => u
			});
			var r = n(255367);
			n(73800);
			var i = n(481060),
				l = n(674701),
				a = n(934415),
				o = n(834129),
				s = n(981631),
				c = n(848024);

			function u(e) {
				let {
					giftIntentType: t,
					recipientUser: n,
					giftIntentSecondaryAction: u,
					channel: d
				} = e;
				return (0, r.jsx)(o.Z, {
					contentClassName: c.messageContentContainer,
					iconContainerClassName: c.iconContainer,
					iconNode: (0, r.jsx)(i.Dkj, {
						colorClass: c.icon
					}),
					children: (0, r.jsx)(l.Z, {
						giftIntentType: t,
						premiumGiftIntentCardType: l.U.SYSTEM_MESSAGE,
						recipientUser: n,
						analyticsPage: (0, a.mE)(d),
						analyticsSection: s.jXE.CHANNEL,
						giftIntentSecondaryAction: u
					})
				})
			}
		},
		260736: function(e, t, n) {
			n.d(t, {
				Z: () => _
			});
			var r = n(255367);
			n(73800);
			var i = n(481060),
				l = n(67390),
				a = n(896835),
				o = n(447564),
				s = n(63063),
				c = n(739566),
				u = n(942951),
				d = n(834129),
				p = n(981631),
				m = n(388032),
				f = n(861477);

			function _(e) {
				let {
					compact: t,
					message: n,
					channel: _
				} = e, h = (0, c.ZP)(n), g = (0, u.l)({
					user: n.author,
					channelId: n.channel_id,
					guildId: _.guild_id,
					messageId: n.id
				})(h), b = (0, a.j)("HDStreamingUpgradedMessage"), E = () => (0, o.k)(_, "HDStreamingUpgradedMessage"), y = b ? E : s.Z.getArticleURL(p.BhN.HD_STREAMING_POTION);
				return (0, r.jsxs)(r.Fragment, {
					children: [(0, r.jsx)("div", {
						className: f.parentContainer,
						children: (0, r.jsx)(d.Z, {
							iconNode: (0, r.jsx)(i.hh5, {
								size: "sm"
							}),
							timestamp: n.timestamp,
							compact: t,
							children: m.intl.format(m.t["u0qJ4+"], {
								actorName: h.nick,
								actorHook: g
							})
						})
					}), (0, r.jsxs)(i.P3F, {
						onClick: () => {
							b ? E() : window.open(s.Z.getArticleURL(p.BhN.HD_STREAMING_POTION), "_blank")
						},
						className: f.embed,
						children: [(0, r.jsx)(l.Z, {}), (0, r.jsxs)("div", {
							className: f.text,
							children: [(0, r.jsx)(i.Text, {
								color: "text-default",
								variant: "text-sm/semibold",
								className: f.title,
								children: m.intl.string(m.t["Fh/mk5"])
							}), (0, r.jsx)(i.Text, {
								color: "text-primary",
								variant: "text-xs/normal",
								children: m.intl.format(m.t["bmGF+f"], {
									helpCenterLink: y
								})
							})]
						})]
					})]
				})
			}
		},
		782658: function(e, t, n) {
			n.d(t, {
				Z: () => R
			});
			var r = n(255367),
				i = n(73800),
				l = n(442837),
				a = n(447543),
				o = n(410575),
				s = n(758119),
				c = n(622822),
				u = n(906732),
				d = n(749958),
				p = n(997431),
				m = n(924301),
				f = n(11868),
				_ = n(413605),
				h = n(451603),
				g = n(885714),
				b = n(314897),
				E = n(430824),
				y = n(701190),
				x = n(411198),
				C = n(610699),
				v = n(313876),
				O = n(778333),
				j = n(949981),
				I = n(680668),
				S = n(508273),
				T = n(143708),
				N = n(358595),
				P = n(563917),
				A = n(135845),
				w = n(981631),
				Z = n(723359);

			function R(e) {
				let {
					code: t,
					message: n,
					getAcceptInviteContext: R
				} = e, {
					invite: k,
					inviteError: L
				} = (0, l.cj)([y.Z], () => ({
					invite: y.Z.getInvite(t),
					inviteError: y.Z.getInviteError(t)
				}), [t]), D = null == k;
				i.useEffect(() => {
					D && a.ZP.resolveInvite(t)
				}, [t, D]);
				let M = null != k ? k : {
						state: w.r2o.RESOLVING,
						code: ""
					},
					{
						analyticsLocations: U
					} = (0, u.ZP)(),
					F = (0, d.v)(),
					B = (0, l.e7)([E.Z], () => (null == k ? void 0 : k.guild) != null ? E.Z.getGuild(k.guild.id) : null, [k]),
					G = (0, l.e7)([b.default], () => b.default.getId()),
					H = (0, l.e7)([m.ZP], () => {
						var e;
						return m.ZP.getGuildScheduledEvent(null == (e = M.guild_scheduled_event) ? void 0 : e.id)
					}, [M]),
					V = () => {
						null != M.channel && a.ZP.transitionToInviteSync(M)
					},
					z = () => {
						if (null == B && (null == k ? void 0 : k.guild) != null) {
							let e = x.Qs(k.guild);
							if ((0, c.bN)() && (0, c.Yt)(e)) return void(0, s.mN)(Z.L0.NSFW_SERVER_INVITE_EMBED)
						}(0, h.yU)() ? (0, g.Z)({
							analyticsSource: {
								page: w.ZY5.INVITE_EMBED
							},
							analyticsLocation: {
								page: w.ZY5.INVITE_EMBED,
								section: w.jXE.GUILD_CAP_UPSELL_MODAL
							},
							analyticsLocations: U
						}) : a.ZP.acceptInviteAndTransitionToInviteChannel({
							inviteKey: t,
							context: R("Invite Button Embed")
						})
					},
					W = (0, r.jsx)(I.Z, {
						onTransitionToInviteChannel: V,
						onAcceptInstantInvite: z,
						currentUserId: G,
						guild: B,
						invite: M,
						message: n
					});
				switch (M.state) {
					case w.r2o.RESOLVING:
						W = (0, r.jsx)(N.Z, {});
						break;
					case w.r2o.EXPIRED:
					case w.r2o.BANNED:
						W = (0, r.jsx)(T.Z, {
							banned: M.state === w.r2o.BANNED,
							author: n.author,
							channelId: n.channel_id
						});
						break;
					case w.r2o.ERROR:
						W = (0, r.jsx)(v.Z, {
							author: n.author,
							inviteError: L
						});
						break;
					default:
						switch ((0, _.VR)(M)) {
							case _.wx.GROUP_DM:
								W = (0, r.jsx)(j.Z, {
									onTransitionToInviteChannel: V,
									onAcceptInstantInvite: z,
									currentUserId: G,
									invite: M,
									message: n
								});
								break;
							case _.wx.FRIEND:
								W = (0, r.jsx)(O.Z, {
									invite: M,
									message: n,
									getAcceptInviteContext: R
								});
								break;
							default:
								if ((0, _.TY)(M)) {
									W = (0, r.jsx)(A.Z, {
										onTransitionToInviteChannel: V,
										onAcceptInstantInvite: z,
										currentUserId: G,
										message: n,
										guild: B,
										invite: M
									});
									break
								}
								if ((0, _.Tx)(M)) {
									W = (0, r.jsx)(f.ZP, {
										guildScheduledEvent: H,
										guild: M.guild,
										channel: M.channel,
										isMember: null != B,
										onAcceptInstantInvite: z,
										onTransitionToInviteChannel: V
									});
									break
								}
								if ((0, _.$P)(M)) {
									W = (0, r.jsx)(P.Z, {
										invite: M,
										stageInstance: M.stage_instance,
										guild: M.guild,
										isMember: null != B,
										message: n,
										onTransitionToInviteChannel: V,
										onAcceptInstantInvite: z
									});
									break
								}
								if ((0, _.P1)(M)) {
									W = (0, r.jsx)(C.Z, {
										invite: M,
										getAcceptInviteContext: R,
										message: n
									});
									break
								}!F && (0, p.l)(M) && (W = (0, r.jsx)(S.Z, {
									onTransitionToInviteChannel: V,
									onAcceptInstantInvite: z,
									isMemberOfGuild: null != B,
									invite: M,
									message: n
								}))
						}
				}
				return (0, r.jsx)(o.Z, {
					section: w.jXE.INVITE_LINK,
					children: W
				})
			}
		},
		219797: function(e, t, n) {
			n.d(t, {
				L9: () => N,
				ZK: () => T,
				d4: () => S,
				dS: () => v,
				jY: () => I,
				q7: () => j,
				vZ: () => O
			}), n(953529), n(997841);
			var r = n(255367),
				i = n(73800),
				l = n(442837),
				a = n(993365),
				o = n(981729),
				s = n(481060),
				c = n(543651),
				u = n(177751),
				d = n(519320),
				p = n(592125),
				m = n(52824),
				f = n(630388),
				_ = n(591759),
				h = n(850908),
				g = n(524444),
				b = n(981631),
				E = n(388032),
				y = n(324846);

			function x(e) {
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

			function C(e, t) {
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

			function v(e) {
				var t;
				let n = e.item.originalItem;
				return (0, g.Yi)(C(x({}, e), {
					alt: n.description,
					src: (0, m.q)({
						proxyURL: n.proxy_url,
						url: n.url
					}),
					original: n.url,
					placeholder: n.placeholder,
					placeholderVersion: n.placeholder_version,
					srcIsAnimated: (0, f.yE)(null != (t = n.flags) ? t : 0, b.J0y.IS_ANIMATED),
					sourceMetadata: {
						message: e.message,
						identifier: {
							type: "attachment",
							attachmentId: n.id,
							filename: n.filename,
							title: n.title,
							size: n.size
						}
					},
					analyticsSource: "ImageComponentForMessageAttachment"
				}))
			}

			function O(e) {
				var t;
				let n = e.item.originalItem,
					l = i.useCallback(() => {
						var e;
						return (0, f.yE)(null != (e = n.flags) ? e : 0, b.J0y.IS_CLIP) ? (0, r.jsxs)(o.DY, {
							text: E.intl.string(E.t["/fgfWl"]),
							className: y.clipPill,
							children: [(0, r.jsx)(s.AlX, {
								size: "xs",
								color: "currentColor"
							}), (0, r.jsx)(a.x, {
								variant: "text-xs/semibold",
								color: "always-white",
								children: E.intl.string(E.t.oA4afH)
							})]
						}) : null
					}, [n]),
					c = _.Z.toURLSafe(n.proxy_url);
				return null == c ? null : (c.searchParams.append("format", "webp"), (0, g.lV)(C(x({}, e), {
					alt: n.description,
					poster: c.toString(),
					fileSize: n.size,
					fileName: (0, h.Z)(n),
					src: n.url,
					placeholder: n.placeholder,
					placeholderVersion: n.placeholder_version,
					srcIsAnimated: (0, f.yE)(null != (t = n.flags) ? t : 0, b.J0y.IS_ANIMATED),
					renderOverlayContent: l,
					sourceMetadata: {
						message: e.message,
						identifier: {
							type: "attachment",
							attachmentId: n.id,
							filename: n.filename,
							size: n.size
						}
					}
				})))
			}

			function j(e) {
				let t = e.item.originalItem;
				return (0, g.hX)(C(x({}, e), {
					fileSize: t.size,
					fileName: (0, h.Z)(t),
					src: t.url
				}))
			}

			function I(e) {
				let {
					message: t,
					item: n
				} = e, r = n.originalItem, l = (0, u.RT)(u.Ir.VOICE_MESSAGE, r.id), a = i.useCallback((e, n, i) => {
					var l;
					(0, d.tb)(t.id, null != (l = r.duration_secs) ? l : null, n, t.author.id)
				}, [t, r.duration_secs]), o = i.useCallback((e, n) => {
					var i;
					(0, d.EW)(t.id, null != (i = r.duration_secs) ? i : null, e, t.author.id, n)
				}, [t, r.duration_secs]), s = i.useCallback(e => {
					var n;
					(0, d.Np)(t.id, null != (n = null == e ? void 0 : e.message) ? n : null)
				}, [t]);
				return (0, g.wj)(C(x({}, e), {
					fileSize: r.size,
					fileName: (0, h.Z)(r),
					src: r.url,
					durationSecs: r.duration_secs,
					waveform: r.waveform,
					onPlay: a,
					onPause: o,
					onError: s,
					playbackCacheKey: l
				}))
			}

			function S(e) {
				let t = e.item.originalItem;
				return (0, g.xi)(C(x({}, e), {
					url: t.url,
					fileName: (0, h.Z)(t),
					fileSize: t.size,
					contentType: t.content_type
				}))
			}

			function T(e) {
				let t = e.item.originalItem;
				return (0, g.ur)(C(x({}, e), {
					url: t.url,
					fileName: (0, h.Z)(t),
					fileSize: t.size
				}))
			}

			function N(e) {
				return "CLIP" === e.item.type ? (0, r.jsx)(P, {
					attachment: e.item.originalItem,
					message: e.message
				}) : null
			}

			function P(e) {
				var t;
				let {
					attachment: n,
					message: i
				} = e, a = i.channel_id, o = (0, l.e7)([p.Z], () => {
					var e;
					return null == (e = p.Z.getBasicChannel(a)) ? void 0 : e.guild_id
				}), {
					clip_created_at: s,
					clip_participants: u,
					title: d,
					application: m
				} = n;
				return (0, r.jsx)(c.Z, {
					createdAt: null != s ? Date.parse(s) : void 0,
					participantIds: null != (t = null == u ? void 0 : u.map(e => {
						let {
							id: t
						} = e;
						return t
					})) ? t : [],
					applicationId: null == m ? void 0 : m.id,
					title: d,
					guildId: o
				})
			}
		},
		938353: function(e, t, n) {
			n.d(t, {
				$p: () => e4,
				BB: () => e8,
				ZP: () => e6
			}), n(388685), n(997841), n(35282), n(415506), n(361932), n(187205);
			var r, i = n(255367),
				l = n(73800),
				a = n(120356),
				o = n.n(a),
				s = n(275726),
				c = n(442837),
				u = n(377108),
				d = n(902704),
				p = n(481060),
				m = n(904245),
				f = n(637374),
				_ = n(626799),
				h = n(624367),
				g = n(183431),
				b = n(421474),
				E = n(603270),
				y = n(234431),
				x = n(162297),
				C = n(222709),
				v = n(446411),
				O = n(960904),
				j = n(161314),
				I = n(629710),
				S = n(262777),
				T = n(761538),
				N = n(674611),
				P = n(294734),
				A = n(947849),
				w = n(10433),
				Z = n(715903),
				R = n(71619),
				k = n(637618),
				L = n(225890),
				D = n(364097),
				M = n(495129),
				U = n(939170),
				F = n(187506),
				B = n(954654),
				G = n(41776),
				H = n(628238),
				V = n(454585),
				z = n(768494),
				W = n(124347),
				K = n(976853),
				Y = n(346013),
				X = n(207982),
				q = n(977683),
				Q = n(128435),
				J = n(98278),
				$ = n(614825),
				ee = n(265299),
				et = n(982168),
				en = n(163038),
				er = n(699833),
				ei = n(344997),
				el = n(378233),
				ea = n(374425),
				eo = n(665906),
				es = n(432147),
				ec = n(695346),
				eu = n(314897),
				ed = n(271383),
				ep = n(607744),
				em = n(496675),
				ef = n(594174),
				e_ = n(52824),
				eh = n(626135),
				eg = n(70956),
				eb = n(408433),
				eE = n(630388),
				ey = n(709054),
				ex = n(591759),
				eC = n(594173),
				ev = n(169525),
				eO = n(786761),
				ej = n(161010),
				eI = n(255269),
				eS = n(461157),
				eT = n(901461),
				eN = n(432376),
				eP = n(384203),
				eA = n(633957),
				ew = n(530472),
				eZ = n(29909),
				eR = n(782658),
				ek = n(219797),
				eL = n(453687),
				eD = n(128854),
				eM = n(101578),
				eU = n(524444),
				eF = n(319323),
				eB = n(884182),
				eG = n(546432),
				eH = n(920888),
				eV = n(328966),
				ez = n(817384),
				eW = n(981631),
				eK = n(474936),
				eY = n(388032),
				eX = n(813102),
				eq = n(680674);

			function eQ(e, t, n) {
				return t in e ? Object.defineProperty(e, t, {
					value: n,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : e[t] = n, e
			}

			function eJ(e) {
				for (var t = 1; t < arguments.length; t++) {
					var n = null != arguments[t] ? arguments[t] : {},
						r = Object.keys(n);
					"function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
						return Object.getOwnPropertyDescriptor(n, e).enumerable
					}))), r.forEach(function(t) {
						eQ(e, t, n[t])
					})
				}
				return e
			}

			function e$(e, t) {
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

			function e0() {
				return (0, i.jsxs)("div", {
					className: eX.nitroFileSizeUpsell,
					children: [(0, i.jsx)("img", {
						src: eq,
						className: eX.nitroBadgeSvg,
						alt: ""
					}), (0, i.jsx)(p.Text, {
						variant: "text-xs/normal",
						color: "text-muted",
						children: eY.intl.format(eY.t["G/H+s7"], {
							onClick: () => (0, J.z)()
						})
					})]
				})
			}
			let e1 = 15 * eg.Z.Millis.MINUTE,
				e3 = new Set(["discord-developers", "discord-testers", "discord-townhall", "discordgameslab"]),
				e2 = (e, t, n) => () => {
					let r = null != t ? t : n;
					if (null == r) return null;
					let {
						url: l,
						proxyURL: a,
						width: o,
						height: s
					} = r;
					return (0, i.jsx)(eZ.Z, {
						width: o,
						height: s,
						src: null != a && "" !== a ? a : l,
						url: null != e && "" !== e ? e : null != a && "" !== a ? a : l,
						format: null != n ? u.EO.VIDEO : u.EO.IMAGE,
						className: eX.gifFavoriteButton
					})
				},
				e5 = e => () => {
					let {
						url: t,
						proxyUrl: n,
						width: r,
						height: l,
						flags: a
					} = e, o = (0, eE.yE)(a, z.hR.IS_ANIMATED);
					return null != r && null != l && (W.uo.test(n) || o && (W.YG.test(n) || W.FH.test(n))) ? (0, i.jsx)(eZ.Z, {
						width: r,
						height: l,
						src: n,
						url: t,
						format: u.EO.IMAGE,
						className: eX.gifFavoriteButton
					}) : null
				};
			class e8 extends(r = l.Component) {
				shouldRenderInvite(e) {
					let {
						channel: t
					} = this.props;
					return !(t.isDM() && !t.isSystemDM() && !t.isGroupDM() && e3.has(e))
				}
				shouldComponentUpdate(e, t) {
					var n, r;
					let {
						channel: i,
						message: l,
						poll: a
					} = this.props, {
						channel: o,
						message: s,
						poll: c
					} = e;
					return !(0, d.Z)(this.state, t) || !(0, d.Z)(this.props, e, ["message", "channel"]) || i.type !== o.type || c !== a || s.codedLinks !== l.codedLinks || s.flags !== l.flags || s.giftCodes !== l.giftCodes || s.attachments !== l.attachments || s.embeds !== l.embeds || s.components !== l.components || s.activity !== l.activity || (n = s.reactions) !== (r = l.reactions) && (n.length !== r.length || !!n.some((e, t) => {
						let {
							emoji: n,
							count: i,
							burst_count: l
						} = e, {
							emoji: a,
							count: o,
							burst_count: s
						} = r[t];
						return l !== s || i !== o || n.id !== a.id || n.name !== a.name
					}))
				}
				renderCtaButton() {
					let {
						message: e,
						channel: t,
						ctaButtonType: n
					} = this.props, r = null;
					switch (n) {
						case eC.aD.MARK_AS_FALSE_POSITIVE:
							r = (0, i.jsx)(N.Z, {
								messageId: e.id,
								channelId: t.id
							});
							break;
						case eC.aD.AGE_VERIFICATION_RETRY:
							r = (0, i.jsx)(g.Z, {
								channelId: t.id
							});
							break;
						default:
							return null
					}
					return (0, i.jsx)("div", {
						className: eX.ctaButtonContainer,
						children: r
					})
				}
				renderSocialProofingFileSizeNitroUpsell(e) {
					let t = e.attachments.some(e => e.size > eK.Lw);
					return (0, ej.M)("attachment") && t ? (0, i.jsx)(e0, {}) : null
				}
				renderCodedLinks(e) {
					return 0 === e.codedLinks.length ? null : e.codedLinks.map(t => {
						let {
							type: n,
							code: r,
							url: l
						} = t;
						if (n === O.g.INVITE) return this.shouldRenderInvite(r) ? (0, i.jsx)(eR.Z, {
							code: r,
							message: e,
							getAcceptInviteContext: this.getAcceptInviteContext
						}, r) : null;
						if (n === O.g.TEMPLATE) return (0, i.jsx)(D.Z, {
							code: r
						}, r);
						if (n === O.g.EVENT) return (0, i.jsx)(L.Z, {
							code: r
						}, r);
						if (n === O.g.CHANNEL_LINK) return (0, i.jsx)(eP.Z, {
							code: r,
							message: e
						}, r);
						if (n === O.g.APP_DIRECTORY_PROFILE) return (0, i.jsx)(w.Z, {
							code: r,
							message: e
						}, r);
						else if (n === O.g.ACTIVITY_BOOKMARK) {
							let {
								referrerId: t = e.author.id,
								customId: n,
								linkId: a
							} = (0, y.U)(l);
							return (0, i.jsx)(h.Z, {
								applicationId: r,
								message: e,
								referrerId: t,
								customId: n,
								linkId: a
							}, r)
						} else if (n === O.g.GUILD_PRODUCT) return (0, i.jsx)(k.Z, {
							code: r
						}, r);
						else if (n === O.g.SERVER_SHOP) return (0, i.jsx)(j.Z, {
							guildId: r
						}, r);
						else if (n === O.g.QUESTS_EMBED) return (0, i.jsx)(ee.Z, {
							questId: r
						}, r);
						else if (n === O.g.APP_DIRECTORY_STOREFRONT) return (0, i.jsx)(E.P, {
							appId: r,
							message: e
						}, r);
						else if (n === O.g.APP_DIRECTORY_STOREFRONT_SKU) {
							let t = (0, b.Q)(r);
							return null == t ? null : (0, i.jsx)(E.F, {
								appId: t.applicationId,
								skuId: t.skuId,
								message: e
							}, r)
						} else if (n === O.g.APP_OAUTH2_LINK) return (0, i.jsx)(x.Z, {
							applicationId: r
						}, r);
						else if (n === O.g.COLLECTIBLES_SHOP) return null;
						else throw Error("Unknown coded link type: ".concat(n))
					})
				}
				renderGiftCodes(e) {
					let {
						giftCodes: t,
						author: n,
						channel_id: r,
						type: l,
						content: a,
						giftInfo: o
					} = e, s = ef.default.getCurrentUser();
					return null != s && t.length > 0 ? t.map(e => (0, i.jsx)("div", {
						className: eX.giftCodeContainer,
						children: (0, i.jsx)(f.Z, {
							code: e,
							author: n,
							channelId: r,
							currentUser: s,
							type: l,
							content: a,
							giftInfo: o
						})
					}, e)) : null
				}
				renderReferralTrial(e) {
					let {
						referralTrialOfferId: t,
						type: n
					} = e, {
						canRenderReferralEmbed: r
					} = this.props;
					return n !== s.u.PREMIUM_REFERRAL || null == t ? null : (0, i.jsx)("div", {
						className: eX.referralContainer,
						children: (0, i.jsx)($.Z, {
							userTrialOfferId: t,
							canRenderReferralEmbed: null != r && r
						})
					}, t)
				}
				renderReactions(e) {
					let {
						disableReactionCreates: t,
						disableReactionReads: n,
						disableReactionUpdates: r,
						isLurking: l,
						isGuest: a,
						isPendingMember: o,
						channel: s,
						forceAddReactions: c
					} = this.props;
					return n ? null : (0, i.jsx)(eH.Z, {
						message: e,
						channel: s,
						disableReactionCreates: t,
						disableReactionUpdates: r,
						isLurking: l,
						isGuest: a,
						isPendingMember: o,
						forceAddReactions: c,
						useChatFontScaling: !0
					})
				}
				renderAttachments(e) {
					let {
						channel: t,
						gifAutoPlay: n,
						canDeleteAttachments: r,
						inlineAttachmentMedia: l,
						onMediaItemContextMenu: a,
						enabledContentHarmTypeFlags: o,
						shouldHideMediaOptions: s
					} = this.props, {
						attachments: c,
						flags: u
					} = e;
					if (0 === c.length || e.isPoll() || e.isComponentsV2()) return null;
					let d = c.filter(e => null == e.flags || !(0, eE.yE)(e.flags, eW.J0y.IS_THUMBNAIL));
					if (0 === d.length) return null;
					let p = d.map(t => {
							var n;
							return e$(eJ({}, (0, z.JD)(t, e)), {
								original: t.url,
								srcIsAnimated: (0, eE.yE)(null != (n = t.flags) ? n : 0, eW.J0y.IS_ANIMATED)
							})
						}).filter(e => "INVALID" !== e.type),
						{
							srcToOnClickOverride: m,
							srcToHandlePreloadImage: f
						} = (0, X.G)(p, {
							enabledContentHarmTypeFlags: o,
							shouldHideMediaOptions: s
						}, "Media Mosaic"),
						_ = p.length > 1,
						h = (0, eE.yE)(u, eW.iLy.IS_VOICE_MESSAGE);

					function g(e, t) {
						return (0, ev.dn)(e.originalItem, t)
					}
					let b = d.map(i => {
						let o = (0, z.VY)(i),
							s = {
								message: e,
								item: (0, eG.OB)(i, l),
								autoPlayGif: n,
								canRemoveItem: r && (d.length > 1 || "" !== e.content),
								onRemoveItem: this.handleRemoveAttachment,
								getObscureReason: g,
								onContextMenu: null != a ? e => {
									e.stopPropagation(), e.preventDefault(), a(e, o)
								} : void 0,
								renderAudioComponent: h ? ek.jY : ek.q7,
								renderImageComponent: ek.dS,
								renderVideoComponent: ek.vZ,
								renderPlaintextFilePreview: ek.d4,
								renderGenericFileComponent: ek.ZK,
								renderMosaicItemFooter: ek.L9,
								onPlay: (e, n, r) => {
									eh.default.track(eW.rMx.MEDIA_ATTACHMENT_PLAYBACK_STARTED, {
										guild_id: t.guild_id,
										channel_id: t.id,
										channel_type: t.type,
										type: i.content_type,
										flags: i.flags,
										size: i.size,
										duration: r
									})
								},
								gifFavoriteButton: e5(o),
								isSearchResult: this.props.isSearchResult
							},
							c = (0, e_.q)({
								proxyURL: i.proxy_url,
								url: i.url
							});
						return c in m && _ && (s.onClick = m[c], s.handlePreloadImage = f[c]), s
					});
					return (0, i.jsx)(eB.Z, {
						items: b
					})
				}
				renderEmbeds(e) {
					let {
						renderEmbeds: t
					} = this.props;
					return 0 !== e.embeds.length && t ? e.embeds.map((t, n) => {
						if (ez.b.has(t.type) || (0, eb.l3)(t) || (0, U.b)(t) && !(0, F.M)(e) || (0, eb.jz)(t)) return null;
						let r = {
							renderImageComponent: eU.Yi,
							renderVideoComponent: eU.lV,
							renderLinkComponent: eU.iT
						};
						if (t.type === eW.hBH.ARTICLE && null != t.url && /^https?:\/\/(?:canary|ptb|www)?\.discord(?:app)?\.com\/store\/skus\/(?:[0-9]+)/.test(t.url) && null != t.provider && "Discord" === t.provider.name) {
							let l = ex.Z.safeParseWithQuery(t.url);
							if (null != l && null != l.pathname) {
								let a = l.pathname.split("/")[3];
								if (null != a) return (0, i.jsx)(_.Z, {
									skuId: a,
									renderFallback: () => this.renderEmbed(t, n, r, e)
								}, t.id)
							}
						}
						return this.renderEmbed(t, n, r, e)
					}) : null
				}
				renderComponentAccessories(e) {
					if (0 === e.components.length) return null;
					let {
						gifAutoPlay: t,
						enabledContentHarmTypeFlags: n,
						shouldHideMediaOptions: r,
						disableComponentInteractivity: l,
						onMediaItemContextMenu: a
					} = this.props;
					return (0, i.jsx)(eD.F, {
						gifAutoPlay: t,
						getGifFavButton: e5,
						getOnMediaItemContextMenu: null == a ? void 0 : e => t => {
							t.stopPropagation(), t.preventDefault(), null == a || a(t, e)
						},
						shouldHideMediaOptions: r,
						enabledContentHarmTypeFlags: n,
						children: (0, i.jsx)(B.ZP, {
							message: e,
							shouldDisableInteractiveComponents: l
						})
					})
				}
				renderActivityInvite(e) {
					if (null == e.activity) return null;
					let {
						channel: t
					} = this.props;
					return (0, i.jsx)(eM.Z, {
						channel: t,
						message: e,
						hideParty: !1
					})
				}
				renderPublishBump(e) {
					return this.props.channel.type !== eW.d4z.GUILD_ANNOUNCEMENT || this.props.isMessageSnapshot ? null : (0, i.jsx)(C.Z, {
						channelId: e.channel_id,
						messageId: e.id
					})
				}
				renderEphemeralAccessories(e) {
					return (0, eO.Pv)(e) ? (0, i.jsx)(ew.Z, {
						message: e,
						onDeleteMessage: () => {
							m.Z.dismissAutomatedMessage(e)
						}
					}) : null
				}
				renderStickersAccessories(e) {
					let t = (0, el.cv)(e),
						{
							channel: n,
							isInteracting: r
						} = this.props;
					return 0 === t.length ? null : t.map(e => (0, i.jsx)(ea.Z, {
						channel: n,
						isInteracting: r,
						renderableSticker: e
					}, e.id))
				}
				renderThreadAccessories(e) {
					if (e.hasFlag(eW.iLy.HAS_THREAD) && !1 !== this.props.renderThreadAccessory) return (0, i.jsx)(es.Z, {
						message: e,
						compact: this.props.compact
					})
				}
				renderThreadRoleMentionWarning(e) {
					if (e.hasFlag(eW.iLy.FAILED_TO_MENTION_SOME_ROLES_IN_THREAD) && this.props.isCurrentUser && !(Date.now() - ey.default.extractTimestamp(e.id) >= e1)) return (0, i.jsx)("div", {
						className: eX.threadRoleMentionFailure,
						children: eY.intl.string(eY.t.ma8Rs7)
					})
				}
				renderSuppressConfirmModal() {
					let {
						channel: e,
						message: t
					} = this.props;
					return (0, i.jsxs)(p.sYh, {
						dismissable: !0,
						header: eY.intl.string(eY.t.VL1KOj),
						confirmText: eY.intl.string(eY.t.YEHppK),
						cancelText: eY.intl.string(eY.t["ETE/oK"]),
						onCancel: () => this.setState({
							showSuppressModal: !1
						}),
						onConfirm: () => {
							m.Z.suppressEmbeds(e.id, t.id), this.setState({
								showSuppressModal: !1
							})
						},
						children: [(0, i.jsx)(p.Text, {
							variant: "text-md/normal",
							color: "text-default",
							className: eX.confirmText,
							children: eY.intl.string(eY.t["vXZ+Fh"])
						}), (0, i.jsx)(p.Text, {
							variant: "text-md/normal",
							color: "text-muted",
							children: eY.intl.string(eY.t["5j2by8"])
						})]
					})
				}
				renderRemoveAttachmentConfirmModal() {
					let {
						channel: e,
						message: t
					} = this.props, {
						attachmentToDelete: n
					} = this.state;
					return null == n ? void this.setState({
						showRemoveAttachmentModal: !1
					}) : (0, i.jsx)(p.sYh, {
						dismissable: !0,
						header: eY.intl.string(eY.t.CbTIEh),
						confirmText: eY.intl.string(eY.t.kFwAsb),
						cancelText: eY.intl.string(eY.t["ETE/oK"]),
						onCancel: () => this.setState({
							showRemoveAttachmentModal: !1,
							attachmentToDelete: null
						}),
						onConfirm: () => {
							let r = t.attachments.filter(e => e.id !== n.id);
							m.Z.patchMessageAttachments(e.id, t.id, r), this.setState({
								showRemoveAttachmentModal: !1,
								attachmentToDelete: null
							})
						},
						children: (0, i.jsx)(p.Text, {
							variant: "text-md/normal",
							color: "text-default",
							className: eX.confirmText,
							children: eY.intl.string(eY.t.faHmOz)
						})
					})
				}
				renderInteractionPremiumUpsell(e) {
					let t = e.applicationId;
					return e.type !== s.u.INTERACTION_PREMIUM_UPSELL || null == t ? null : (0, i.jsx)(eF.Z, {
						applicationId: t,
						guildId: this.props.channel.guild_id
					})
				}
				renderEmbeddedApplicationInstanceEmbed(e) {
					let {
						application: t,
						activityInstance: n
					} = e;
					return null == t || null == n ? null : (0, i.jsx)(eA.Z, {
						application: t,
						channelId: this.props.channel.id,
						guildId: this.props.channel.guild_id
					})
				}
				renderMediaPostEmbeds(e) {
					return e.embeds.flatMap(t => t.type !== eW.hBH.POST_PREVIEW || null == t.url ? [] : (0, i.jsx)(Y.Z, {
						embedUrl: t.url,
						message: e,
						channel: this.props.channel
					}, t.id))
				}
				renderSafetyPolicyNotice(e) {
					return 1 === e.embeds.length && e.embeds[0].type === eW.hBH.SAFETY_POLICY_NOTICE ? (0, i.jsx)(er.i, {
						message: e
					}) : null
				}
				renderSafetySystemNotification(e) {
					return 1 === e.embeds.length && e.embeds[0].type === eW.hBH.SAFETY_SYSTEM_NOTIFICATION ? (0, i.jsx)(ei.g, {
						embed: e.embeds[0]
					}) : null
				}
				renderVoiceChannelInvite(e, t) {
					if (1 === e.embeds.length && e.embeds[0].type === eW.hBH.VOICE_CHANNEL) return (0, i.jsx)(M.H, {
						message: e,
						channel: t
					})
				}
				renderMediaObscureNotice(e) {
					return (0 !== e.attachments.length || 0 !== e.embeds.length) && (0, I.kC)(e) ? (0, i.jsx)(T.Z, {
						message: e
					}) : null
				}
				renderPoll(e, t) {
					if (null != t) return (0, i.jsx)(Q.Z, {
						message: e,
						poll: t,
						className: eX.pollContainer
					})
				}
				renderReportedMessage(e) {
					if (e.messageSnapshots.length > 0 && (0, et.Gi)(e, this.props.channel)) return (0, i.jsx)(en.Z, {
						message: e
					})
				}
				renderForwardedMessage(e) {
					if (e.messageSnapshots.length > 0 && !(0, et.Gi)(e, this.props.channel)) return (0, i.jsx)(P.Z, {
						message: e
					})
				}
				renderEditedTag(e, t) {
					return (0, i.jsx)(eV.Z, {
						message: e,
						compact: t,
						location: eV.H.AFTER_ACCESSORIES
					})
				}
				render() {
					let {
						className: e,
						message: t,
						channel: n,
						poll: r,
						compact: l
					} = this.props, {
						showSuppressModal: a,
						showRemoveAttachmentModal: s
					} = this.state, c = this.renderEditedTag(t, l), u = this.renderCodedLinks(t), d = this.renderGiftCodes(t), p = this.renderReferralTrial(t), m = this.renderAttachments(t), f = this.renderCtaButton(), _ = this.renderSocialProofingFileSizeNitroUpsell(t), h = this.renderEmbeds(t), g = this.renderActivityInvite(t), b = this.renderReactions(t), E = this.renderPublishBump(t), y = this.renderEphemeralAccessories(t), x = this.renderStickersAccessories(t), C = this.renderThreadAccessories(t), v = this.renderComponentAccessories(t), O = this.renderThreadRoleMentionWarning(t), j = this.renderEmbeddedApplicationInstanceEmbed(t), I = this.renderInteractionPremiumUpsell(t), S = this.renderMediaPostEmbeds(t), T = this.renderSafetyPolicyNotice(t), N = this.renderSafetySystemNotification(t), P = this.renderVoiceChannelInvite(t, n), A = this.renderMediaObscureNotice(t), w = this.renderPoll(t, r), Z = this.renderForwardedMessage(t), R = this.renderReportedMessage(t);
					return null == u && null == m && null == h && null == g && null == b && null == d && null == p && null == E && null == y && null == x && null == C && null == v && null == j && null == O && null == S && null == T && null != I && null == w && null == P && null == Z && null == R ? null : (0, i.jsxs)("div", {
						id: (0, eL.bX)(t),
						className: o()(e, eX.container),
						children: [R, Z, O, w, u, d, p, S, m, f, h, A, g, x, v, j, I, _, c, b, E, y, a && this.renderSuppressConfirmModal(), s && this.renderRemoveAttachmentConfirmModal(), C, T, N, P]
					})
				}
				constructor(...e) {
					super(...e), eQ(this, "state", {
						showSuppressModal: !1,
						showRemoveAttachmentModal: !1,
						attachmentToDelete: null
					}), eQ(this, "getAcceptInviteContext", e => {
						let {
							channel: t,
							message: n
						} = this.props;
						return {
							location: e,
							location_guild_id: t.getGuildId(),
							location_channel_id: t.id,
							location_channel_type: t.type,
							location_message_id: n.id
						}
					}), eQ(this, "renderEmbed", (e, t, n, r) => {
						let {
							gifAutoPlay: l,
							inlineEmbedMedia: a,
							canSuppressEmbeds: o,
							hasSpoilerEmbeds: s,
							enabledContentHarmTypeFlags: c,
							isSearchResult: u
						} = this.props, d = r.channel_id, p = r.id, m = (0, ev.BP)(e, d, p, s, c);
						return e.type === eW.hBH.GIFT ? null : (0, i.jsx)(A.h.Provider, {
							value: e2(e.url, e.image, e.video),
							children: (0, i.jsx)(v.ZP, eJ({
								embed: e,
								obscureReason: null != m ? m : void 0,
								autoPlayGif: l,
								hideMedia: !a,
								allowFullScreen: !this.props.disableComponentInteractivity,
								onSuppressEmbed: o ? this.handleEmbedSuppressed : void 0,
								renderTitle: this.renderEmbedTitle,
								renderDescription: this.renderEmbedDescription,
								message: r,
								showImageRecs: !1,
								isSearchResult: u,
								embedIndex: t
							}, n))
						}, e.id)
					}), eQ(this, "renderEmbedTitle", (e, t) => e.type === eW.hBH.RICH ? V.Z.parseEmbedTitle(t, !0, {
						channelId: this.props.channel.id
					}) : t), eQ(this, "renderEmbedDescription", (e, t, n) => e.type === eW.hBH.RICH ? V.Z.parse(t, !0, {
						channelId: this.props.channel.id,
						allowLinks: !0,
						allowEmojiLinks: !0,
						allowList: this.props.showListsAndHeaders,
						allowHeading: !n && this.props.showListsAndHeaders,
						previewLinkTarget: this.props.showMaskedLinks
					}) : t), eQ(this, "handleEmbedSuppressed", e => {
						let {
							channel: t,
							message: n
						} = this.props;
						e.shiftKey ? m.Z.suppressEmbeds(t.id, n.id) : this.setState({
							showSuppressModal: !0
						})
					}), eQ(this, "handleRemoveAttachment", e => {
						let t = e.originalItem;
						this.setState({
							showRemoveAttachmentModal: !0,
							attachmentToDelete: t
						})
					})
				}
			}

			function e6(e) {
				var t;
				let {
					channel: n,
					message: r,
					renderSuppressEmbeds: l,
					isMessageSnapshot: a
				} = e, o = (0, c.e7)([eu.default], () => eu.default.getId()), s = ec.x4.useSetting(), u = ec.RS.useSetting(), d = ec.NA.useSetting() && !(0, eT.Z)(e.message), p = ec.nc.useSetting() && !1 !== e.renderReactions, m = ec.QK.useSetting(), f = (0, c.e7)([ep.Z], () => null == n.guild_id || ep.Z.canChatInGuild(n.guild_id), [n]), _ = (0, c.e7)([G.Z], () => null != n.guild_id && G.Z.isLurking(n.guild_id), [n]), h = (0, c.e7)([ed.ZP], () => ed.ZP.isCurrentUserGuest(n.guild_id), [n]), g = (0, c.e7)([ed.ZP, ef.default], () => {
					var e, t;
					let r = ef.default.getCurrentUser();
					return null != (t = null != n.guild_id && null != r ? null == (e = ed.ZP.getMember(n.guild_id, r.id)) ? void 0 : e.isPending : null) && t
				}), {
					canAddNewReactions: b,
					canManageMessages: E
				} = (0, c.cj)([em.Z], () => ({
					canAddNewReactions: f && em.Z.can(eW.Plq.ADD_REACTIONS, n),
					canManageMessages: em.Z.can(eW.Plq.MANAGE_MESSAGES, n)
				}), [f, n]), y = (0, Z.ux)(n.guild_id), [, x] = (0, R.AB)(n.guild_id), C = (0, eo.$R)(n), v = (o === r.author.id || E) && r.author.id !== eW.LAt && !1 !== l && !(0, eE.yE)(r.flags, eW.iLy.EPHEMERAL) && C && 1 === (0, eS.Z)(r), O = o === r.author.id && C && !a, j = r.author.id === o, I = r.isFirstMessageInForumPost(n), T = (0, eN.Z)({
					channel: n,
					canChat: f,
					renderReactions: p,
					canAddNewReactions: b,
					isLurking: _,
					isGuest: h,
					communicationDisabled: x,
					isActiveChannelOrUnarchivableThread: C,
					isAutomodQuarantined: y
				}), N = (0, H.A)((null != (t = r.editedTimestamp) ? t : r.timestamp).valueOf()), P = (0, K.Z)(null == n ? void 0 : n.id), A = (0, q.Z)(r), w = (0, S.v)(r), k = (0, eI._)(n), L = (0, eC.ro)(r.id, r.channel_id);
				return (0, i.jsx)(e8, e$(eJ(e$(eJ({
					canSuppressEmbeds: v,
					canDeleteAttachments: O
				}, T), {
					disableReactionReads: !!I || T.disableReactionReads
				}), e), {
					hasSpoilerEmbeds: e.hasSpoilerEmbeds && k,
					isLurking: _ && f,
					isGuest: h && f,
					isPendingMember: g && f,
					isCurrentUser: j,
					inlineAttachmentMedia: s,
					inlineEmbedMedia: u,
					renderEmbeds: d,
					gifAutoPlay: m,
					canRenderReferralEmbed: n.isDM(),
					poll: A,
					showListsAndHeaders: N,
					showMaskedLinks: N,
					shouldHideMediaOptions: P,
					enabledContentHarmTypeFlags: w,
					ctaButtonType: L
				}))
			}
			eQ(e8, "defaultProps", {
				renderEmbeds: !0,
				compact: !1
			});
			let e4 = e => {
				var t, {
						message: n,
						channel: r,
						disableReactionReads: l = !1,
						renderThreadAccessory: a = !1,
						disableReactionCreates: o = !0,
						disableReactionUpdates: s = !0,
						disableComponentInteractivity: c = !0,
						isSearchResult: u = !1
					} = e,
					d = function(e, t) {
						if (null == e) return {};
						var n, r, i = function(e, t) {
							if (null == e) return {};
							var n, r, i = {},
								l = Object.keys(e);
							for (r = 0; r < l.length; r++) n = l[r], t.indexOf(n) >= 0 || (i[n] = e[n]);
							return i
						}(e, t);
						if (Object.getOwnPropertySymbols) {
							var l = Object.getOwnPropertySymbols(e);
							for (r = 0; r < l.length; r++) n = l[r], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n])
						}
						return i
					}(e, ["message", "channel", "disableReactionReads", "renderThreadAccessory", "disableReactionCreates", "disableReactionUpdates", "disableComponentInteractivity", "isSearchResult"]);
				let p = ec.x4.useSetting(),
					m = ec.RS.useSetting(),
					f = ec.NA.useSetting(),
					_ = ec.QK.useSetting(),
					h = (0, H.A)((null != (t = n.editedTimestamp) ? t : n.timestamp).valueOf()),
					g = (0, K.Z)(null == r ? void 0 : r.id),
					b = (0, S.v)(n),
					E = (0, eC.ro)(n.id, n.channel_id),
					y = (0, q.Z)(n);
				return (0, i.jsx)(e8, e$(eJ({}, d), {
					message: n,
					channel: r,
					disableReactionReads: l,
					disableReactionCreates: o,
					disableReactionUpdates: s,
					disableComponentInteractivity: c,
					canSuppressEmbeds: !1,
					canDeleteAttachments: !1,
					renderThreadAccessory: a,
					inlineAttachmentMedia: p,
					inlineEmbedMedia: m,
					renderEmbeds: f,
					gifAutoPlay: _,
					poll: y,
					showListsAndHeaders: h,
					showMaskedLinks: h,
					shouldHideMediaOptions: g,
					enabledContentHarmTypeFlags: b,
					ctaButtonType: E,
					isSearchResult: u
				}))
			}
		},
		101578: function(e, t, n) {
			n.d(t, {
				Z: () => E
			});
			var r = n(255367);
			n(73800);
			var i = n(442837),
				l = n(654030),
				a = n(380249),
				o = n(627861),
				s = n(100527),
				c = n(906732),
				u = n(728345),
				d = n(973616),
				p = n(789407),
				m = n(314897),
				f = n(158776),
				_ = n(981631),
				h = n(616922),
				g = n(125865);

			function b(e) {
				return null != e.application ? d.ZP.createFromServer(e.application) : null != e.activity && null != e.activity.party_id && (0, h.Ps)(e.activity.party_id) ? p.r9 : void 0
			}
			let E = e => {
				var t;
				let {
					channel: n,
					message: d,
					hideParty: p
				} = e, {
					analyticsLocations: h
				} = (0, c.ZP)(s.Z.INVITE_EMBED), E = (0, i.e7)([m.default], () => m.default.getId()), y = (0, i.e7)([f.Z], () => {
					if (null == d.application) return f.Z.findActivity(d.author.id, e => e.type === _.IIU.LISTENING);
					{
						var e;
						let t = d.author.id;
						return (null == (e = d.activity) ? void 0 : e.type) === _.mFx.JOIN_REQUEST && (t = t === E && n.isPrivate() ? n.getRecipientId() : E), f.Z.getApplicationActivity(t, d.application.id)
					}
				}, [d, n, E]), {
					enabled: x
				} = a.m.useExperiment({
					location: "ActivityInviteEmbed"
				}, {
					autoTrackExposure: !0
				}), C = b(d), {
					data: v
				} = (0, u.IX)(null == (t = d.application) ? void 0 : t.id), O = null != v ? v : C;
				return null != O && x ? (0, r.jsx)(o.c, {
					app: O,
					channel: n,
					message: d,
					hideParty: p,
					analyticsLocations: h
				}) : (0, r.jsx)(l.Z, {
					className: g.container,
					activity: y,
					activityActionType: null != d.activity ? d.activity.type : null,
					partyId: null != d.activity ? d.activity.party_id : null,
					userId: d.author.id,
					application: b(d),
					message: d,
					channelId: n.id,
					guildId: n.getGuildId(),
					hideParty: p,
					isSender: d.author.id === E,
					analyticsLocations: h
				})
			}
		},
		319323: function(e, t, n) {
			n.d(t, {
				Z: () => d
			});
			var r = n(255367),
				i = n(73800),
				l = n(755721),
				a = n(481060),
				o = n(283836),
				s = n(728345),
				c = n(388032),
				u = n(75905);

			function d(e) {
				let {
					applicationId: t,
					guildId: n
				} = e, {
					data: i
				} = (0, s.IX)(t);
				return null == i ? null : (0, r.jsx)(p, {
					app: i,
					guildId: n
				})
			}

			function p(e) {
				let {
					app: t,
					guildId: s
				} = e;
				(0, o.q)(t.id);
				let d = i.useCallback(() => {
					(0, a.ZDy)(async () => {
						let {
							default: e
						} = await Promise.all([n.e("77803"), n.e("83372")]).then(n.bind(n, 7225));
						return n => (0, r.jsx)(e, function(e) {
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
							appId: t.id,
							guildId: s
						}, n))
					})
				}, [t, s]);
				return (0, r.jsx)(l.zx, {
					color: l.zx.Colors.BRAND,
					size: l.zx.Sizes.SMALL,
					onClick: d,
					children: (0, r.jsxs)("div", {
						className: u.button,
						children: [(0, r.jsx)(a.QJP, {
							size: "xs",
							color: "white"
						}), c.intl.format(c.t.XDRjs7, {
							appName: t.name
						})]
					})
				})
			}
		},
		920888: function(e, t, n) {
			n.d(t, {
				Z: () => O
			}), n(388685), n(539854);
			var r = n(255367),
				i = n(73800),
				l = n(120356),
				a = n.n(l),
				o = n(215569),
				s = n(481060),
				c = n(566006),
				u = n(60174),
				d = n(453687),
				p = n(434624),
				m = n(287151),
				f = n(388032),
				_ = n(92254),
				h = n(588429);

			function g(e, t, n) {
				return t in e ? Object.defineProperty(e, t, {
					value: n,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : e[t] = n, e
			}

			function b(e) {
				for (var t = 1; t < arguments.length; t++) {
					var n = null != arguments[t] ? arguments[t] : {},
						r = Object.keys(n);
					"function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
						return Object.getOwnPropertyDescriptor(n, e).enumerable
					}))), r.forEach(function(t) {
						g(e, t, n[t])
					})
				}
				return e
			}

			function E(e, t) {
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
			let y = (e, t) => null == e && null == t || e === t,
				x = (e, t) => e.findIndex(e => y(e.emoji.id, null == t ? void 0 : t.id) && y(e.emoji.name, null == t ? void 0 : t.name)),
				C = (e, t) => {
					if (null == t) return e;
					let n = x(e, t);
					return n < 0 ? e : [e[n], ...e.slice(0, n), ...e.slice(n + 1)]
				};
			class v extends i.PureComponent {
				static getDerivedStateFromProps(e, t) {
					let n = e.message.reactions.length;
					return 0 === t.reactionsCount && n > 0 ? {
						disableTransitionAppear: !1,
						reactionsCount: n
					} : t.reactionsCount !== n ? {
						reactionsCount: n
					} : null
				}
				render() {
					let {
						message: e,
						disableReactionCreates: t,
						disableReactionUpdates: n,
						isLurking: i,
						isGuest: l,
						isPendingMember: g,
						isForumToolbar: b,
						channel: E,
						className: y,
						forceAddReactions: x,
						reactionClassName: C,
						useChatFontScaling: v,
						forceHideReactionCreates: O,
						remainingReactions: j,
						combinedReactions: I,
						visibleReactionsCount: S
					} = this.props, {
						disableTransitionAppear: T
					} = this.state, N = v ? h : _, P = S > 0;
					if (!P && !x) return null;
					let A = x || P;
					return (0, r.jsxs)(o.W, {
						component: "div",
						className: a()(N.reactions, y),
						transitionAppear: !T,
						role: "group",
						transitionLeave: !1,
						id: (0, d.bY)(e),
						onMouseEnter: () => this.setState({
							isHovered: !0
						}),
						onMouseLeave: () => this.setState({
							isHovered: !1
						}),
						children: [(0, r.jsx)(p.l, {
							reactions: I,
							message: e,
							readOnly: n,
							isLurking: i,
							isGuest: l,
							isPendingMember: g,
							isForumToolbar: b,
							useChatFontScaling: v,
							className: C
						}), j > 0 && (0, r.jsx)(s.P3F, {
							onClick: t => {
								t.stopPropagation(), (0, m.op)(E, e)
							},
							className: a()(N.reaction, C, N.remainingReactions),
							"aria-label": f.intl.string(f.t.lfIHs7),
							children: (0, r.jsxs)(s.Text, {
								className: N.reactionInner,
								variant: "text-sm/normal",
								children: ["+", j]
							})
						}), !t && !O && (0, r.jsx)(u.X, {
							tabIndex: A || this.state.isHovered ? 0 : -1,
							type: c.O.NORMAL,
							message: e,
							channel: E,
							useChatFontScaling: v,
							isHovered: this.state.isHovered,
							className: a()({
								[N.forceShow]: A
							})
						})]
					})
				}
				constructor(...e) {
					super(...e), g(this, "state", {
						disableTransitionAppear: !0,
						reactionsCount: this.props.message.reactions.length,
						isHovered: !1
					})
				}
			}
			let O = e => {
				let {
					message: t,
					maxReactions: n,
					hoistReaction: l
				} = e, {
					combinedReactions: a,
					remainingReactions: o,
					visibleReactionsCount: s
				} = i.useMemo(() => {
					let e = [],
						r = C(t.reactions, l),
						i = null != n && n < r.length ? r.slice(0, n) : r,
						a = r.length - i.length,
						o = r.length;
					return i.forEach(t => {
						t.burst_count > 0 && e.push(E(b({}, t), {
							type: c.O.BURST
						})), t.count > 0 && e.push(E(b({}, t), {
							type: c.O.NORMAL
						})), null != t.me_vote && --o
					}), {
						combinedReactions: e,
						visibleReactionsCount: o,
						remainingReactions: a
					}
				}, [l, n, t.reactions]);
				return (0, r.jsx)(v, E(b({}, e), {
					visibleReactionsCount: s,
					combinedReactions: a,
					remainingReactions: o
				}))
			}
		},
		434624: function(e, t, n) {
			n.d(t, {
				l: () => g
			}), n(388685);
			var r = n(255367),
				i = n(73800),
				l = n(120356),
				a = n.n(l),
				o = n(866442),
				s = n(596454),
				c = n(434650),
				u = n(446489),
				d = n(56314),
				p = n(566006),
				m = n(287151),
				f = n(92254),
				_ = n(588429);
			let h = i.memo(function(e) {
					let t, n, {
							useChatFontScaling: i,
							hideEmoji: l,
							emoji: c,
							className: h,
							count: g,
							me: b,
							me_burst: E,
							burst_count: y,
							burst_colors: x,
							readOnly: C,
							isLurking: v,
							isGuest: O,
							isPendingMember: j,
							type: I,
							emojiSize: S
						} = e,
						T = I === p.O.BURST,
						N = (0, m.y4)(b, E, I),
						P = (0, d.v)(T && null != x ? x : []),
						A = i ? _ : f,
						w = T ? y : g,
						Z = (0, u.y)(w, m.aO),
						R = {};
					if (T && null != P) {
						var k;
						let {
							accentColor: e,
							backgroundColor: r,
							opacity: i
						} = P, l = null != (k = (0, o.wK)(null != r ? r : "", i)) ? k : "";
						N && (R.borderColor = r), R.background = l, t = e, n = e
					}
					let L = {
						minWidth: Z,
						color: t,
						borderColor: n
					};
					return (0, r.jsxs)("div", {
						className: a()(A.reaction, A.reactionInner, h, {
							[A.reactionMe]: N,
							[A.reactionReadOnly]: C && !v && !j && !O
						}),
						style: R,
						children: [(0, r.jsx)(s.Z, {
							className: a()({
								[A.hideEmoji]: l
							}),
							emojiId: c.id,
							emojiName: c.name,
							size: S,
							animated: T && c.animated
						}), (0, r.jsx)("div", {
							className: A.reactionCount,
							style: L,
							children: w
						})]
					})
				}),
				g = i.memo(function(e) {
					var {
						showImmediate: t,
						reactions: n
					} = e, l = function(e, t) {
						if (null == e) return {};
						var n, r, i = function(e, t) {
							if (null == e) return {};
							var n, r, i = {},
								l = Object.keys(e);
							for (r = 0; r < l.length; r++) n = l[r], t.indexOf(n) >= 0 || (i[n] = e[n]);
							return i
						}(e, t);
						if (Object.getOwnPropertySymbols) {
							var l = Object.getOwnPropertySymbols(e);
							for (r = 0; r < l.length; r++) n = l[r], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n])
						}
						return i
					}(e, ["showImmediate", "reactions"]);
					let [a, o] = i.useState(!1), [s, u] = i.useTransition(), d = i.useCallback(e => {
						!e || a || s || u(() => {
							o(!0)
						})
					}, [a, s]), f = (0, c.O)(d), _ = a && !s || t ? m.le : h;
					return (0, r.jsxs)(r.Fragment, {
						children: [(0, r.jsx)("div", {
							ref: f
						}), n.map(e => {
							var t, n, i;
							return (0, r.jsx)(_, (t = function(e) {
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
							}({}, l, e), n = n = {
								emojiSize: "reaction"
							}, Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : (function(e, t) {
								var n = Object.keys(e);
								if (Object.getOwnPropertySymbols) {
									var r = Object.getOwnPropertySymbols(e);
									n.push.apply(n, r)
								}
								return n
							})(Object(n)).forEach(function(e) {
								Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
							}), t), "".concat(e.type === p.O.BURST ? "burst:" : "").concat(null != (i = e.emoji.id) ? i : 0, ":").concat(e.emoji.name))
						})]
					})
				})
		},
		818570: function(e, t, n) {
			n.d(t, {
				Z: () => p
			});
			var r = n(255367);
			n(73800);
			var i = n(755721),
				l = n(481060),
				a = n(767714),
				o = n(834129),
				s = n(981631),
				c = n(474936),
				u = n(388032),
				d = n(806725);

			function p(e) {
				let {
					message: t,
					channel: n
				} = e, p = null != n.guild_id ? s.jXE.TEXT_IN_VOICE : s.jXE.CHANNEL_TEXT_AREA;
				return (0, r.jsx)(o.Z, {
					contentClassName: d.messageContentContainer,
					iconContainerClassName: d.iconContainer,
					iconNode: (0, r.jsx)(l.Dkj, {
						colorClass: d.icon
					}),
					children: (0, r.jsxs)("div", {
						className: d.container,
						children: [(0, r.jsxs)("div", {
							children: [(0, r.jsx)(l.Text, {
								variant: "text-sm/medium",
								children: t.content
							}), (0, r.jsxs)("div", {
								className: d.nitroBadge,
								children: [(0, r.jsx)(l.SrA, {
									size: "xs",
									colorClass: d.nitroBadgeIcon
								}), (0, r.jsx)(l.Text, {
									variant: "text-xs/medium",
									className: d.nitroBadgeText,
									children: u.intl.string(u.t["BMw+7O"])
								})]
							})]
						}), (0, r.jsx)("div", {
							className: d.buttonContainer,
							children: (0, r.jsx)(a.Z, {
								showGradient: !0,
								iconClassName: d.premiumIcon,
								subscriptionTier: c.Si.TIER_2,
								textOptions: {
									textOverride: u.intl.string(u.t.Y2WKTk)
								},
								size: i.zx.Sizes.SMALL,
								premiumModalAnalyticsLocation: {
									section: p,
									object: s.qAy.MESSAGE
								}
							})
						})]
					})
				})
			}
		},
		815387: function(e, t, n) {
			n.d(t, {
				Z: () => eD
			}), n(415506);
			var r = n(255367),
				i = n(73800),
				l = n(442837),
				a = n(755721),
				o = n(481060),
				s = n(239091),
				c = n(904245),
				u = n(287734),
				d = n(872810),
				p = n(911969),
				m = n(376484),
				f = n(362604),
				_ = n(479110),
				h = n(413189),
				g = n(710845),
				b = n(387188),
				E = n(825829),
				y = n(623624),
				x = n(29887),
				C = n(533694),
				v = n(345114),
				O = n(924301),
				j = n(225890),
				I = n(434404),
				S = n(507435),
				T = n(504733),
				N = n(563959),
				P = n(917318),
				A = n(703656),
				w = n(471253),
				Z = n(565799),
				R = n(590415),
				k = n(911560),
				L = n(488131),
				D = n(814820),
				M = n(314897),
				U = n(523746),
				F = n(592125),
				B = n(430824),
				G = n(496675),
				H = n(158776),
				V = n(944486),
				z = n(594174),
				W = n(979651),
				K = n(585483),
				Y = n(5192),
				X = n(960048),
				q = n(709054),
				Q = n(937889),
				J = n(15642),
				$ = n(260736),
				ee = n(930282),
				et = n(818570),
				en = n(942951),
				er = n(9423),
				ei = n(789267),
				el = n(262),
				ea = n(303135),
				eo = n(673052),
				es = n(385063),
				ec = n(253118),
				eu = n(54817),
				ed = n(502115),
				ep = n(27103),
				em = n(396252),
				ef = n(522860),
				e_ = n(600397),
				eh = n(73352),
				eg = n(377499),
				eb = n(857640),
				eE = n(614972),
				ey = n(701181),
				ex = n(29338),
				eC = n(461135),
				ev = n(296571),
				eO = n(587737),
				ej = n(482239),
				eI = n(328749),
				eS = n(4305),
				eT = n(910548),
				eN = n(981631),
				eP = n(70722),
				eA = n(388032),
				ew = n(40450);

			function eZ(e) {
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

			function eR(e) {
				let {
					message: t,
					channel: n,
					compact: a
				} = e, {
					author: o
				} = t, {
					guild_id: s
				} = n, c = t.getChannelId(), u = (0, l.e7)([B.Z], () => B.Z.getGuild(s), [s]), d = i.useCallback(() => {
					null != u && (0, y.f)({
						guildId: u.id,
						location: {
							section: eN.jXE.CHANNEL_TEXT_AREA,
							object: eN.qAy.BOOST_ANNOUNCEMENT_UPSELL
						}
					})
				}, [u]), p = (0, en.l)({
					user: o,
					channelId: c,
					guildId: n.guild_id,
					messageId: t.id,
					stopPropagation: !0
				});
				return (0, r.jsx)(eT.ZP, {
					message: t,
					compact: a,
					guild: u,
					usernameHook: p,
					onClickMessage: d
				})
			}

			function ek(e) {
				let {
					message: t,
					compact: n,
					channel: i
				} = e, l = (0, en.l)({
					user: t.author,
					channelId: i.id,
					guildId: i.guild_id,
					messageId: t.id
				});
				return (0, r.jsx)(eu.Z, {
					message: t,
					compact: n,
					usernameHook: l
				})
			}
			let eL = Object.freeze({
					[eN.uaV.DEFAULT]: void 0,
					[eN.uaV.REPLY]: void 0,
					[eN.uaV.CHAT_INPUT_COMMAND]: void 0,
					[eN.uaV.CONTEXT_MENU_COMMAND]: void 0,
					[eN.uaV.RECIPIENT_ADD]: function(e) {
						let {
							message: t,
							channel: n,
							compact: i
						} = e, {
							author: a
						} = t, o = t.getChannelId(), s = (0, l.e7)([z.default], () => z.default.getUser(t.mentions[0]), [t]), c = Y.ZP.getName(null, o, s), u = (0, en.l)({
							user: a,
							channelId: o,
							guildId: n.guild_id,
							messageId: t.id
						}), d = (0, en.l)({
							user: s,
							channelId: o,
							guildId: n.guild_id,
							messageId: t.id
						});
						return n.isThread() ? (0, r.jsx)(eO.Z, {
							message: t,
							channel: n,
							compact: i,
							targetUser: s,
							actorUsernameHook: u,
							targetUsernameHook: d
						}) : (0, r.jsx)(eh.Z, {
							message: t,
							compact: i,
							otherUsername: c,
							usernameHook: u,
							otherUsernameHook: d
						})
					},
					[eN.uaV.RECIPIENT_REMOVE]: function(e) {
						let {
							message: t,
							channel: n,
							compact: i
						} = e, {
							author: a
						} = t, o = t.getChannelId(), s = (0, l.e7)([z.default], () => z.default.getUser(t.mentions[0]), [t]), c = (0, en.l)({
							user: a,
							channelId: o,
							guildId: n.guild_id,
							messageId: t.id
						}), u = (0, en.l)({
							user: s,
							channelId: o,
							guildId: n.guild_id,
							messageId: t.id
						});
						return n.isThread() ? (0, r.jsx)(ej.Z, {
							message: t,
							channel: n,
							compact: i,
							targetUser: s,
							actorUsernameHook: c,
							targetUsernameHook: u
						}) : null != s && s.id !== a.id ? (0, r.jsx)(eg.Z, {
							message: t,
							channel: n,
							compact: i,
							usernameHook: c,
							otherUser: s,
							otherUsernameHook: u
						}) : (0, r.jsx)(eg.Z, {
							message: t,
							channel: n,
							usernameHook: c
						})
					},
					[eN.uaV.CALL]: function(e) {
						let {
							message: t,
							compact: n,
							channel: a
						} = e, {
							id: o,
							author: s
						} = t, c = M.default.getId(), d = t.getChannelId(), p = (0, l.e7)([U.Z], () => U.Z.isCallActive(d, o), [d, o]), m = (0, l.e7)([W.Z], () => W.Z.getVoiceState(eN.ME, c)), f = !p && null != t.call && !t.call.participants.includes(c), _ = p && (null == m || m.channelId !== d), h = i.useCallback(() => u.default.selectVoiceChannel(d), [d]), g = (0, en.l)({
							user: s,
							channelId: d,
							guildId: a.guild_id,
							messageId: t.id
						});
						return (0, r.jsx)(ei.Z, {
							compact: n,
							message: t,
							missed: f,
							joinable: _,
							usernameHook: g,
							onClickJoinCall: h
						})
					},
					[eN.uaV.CHANNEL_NAME_CHANGE]: function(e) {
						let {
							message: t,
							compact: n,
							channel: i
						} = e, {
							author: l
						} = t, a = t.getChannelId(), o = (0, en.l)({
							user: l,
							channelId: a,
							guildId: i.guild_id,
							messageId: t.id
						});
						return (0, r.jsx)(es.Z, {
							compact: n,
							message: t,
							usernameHook: o,
							isForumPost: i.isForumPost()
						})
					},
					[eN.uaV.CHANNEL_ICON_CHANGE]: function(e) {
						let {
							message: t,
							compact: n,
							channel: i
						} = e, {
							author: l
						} = t, a = t.getChannelId(), o = (0, en.l)({
							user: l,
							channelId: a,
							guildId: i.guild_id,
							messageId: t.id
						});
						return (0, r.jsx)(ea.Z, {
							compact: n,
							message: t,
							usernameHook: o
						})
					},
					[eN.uaV.CHANNEL_PINNED_MESSAGE]: function(e) {
						let {
							message: t,
							compact: n,
							channel: l
						} = e, {
							author: a
						} = t, o = t.getChannelId(), s = i.useCallback(() => {
							if (V.Z.getChannelId() !== o) {
								let e = F.Z.getChannel(o);
								null != e && (0, A.XU)(e.guild_id, e.id)
							}
							setTimeout(() => K.S.dispatch(eN.CkL.TOGGLE_CHANNEL_PINS), 0)
						}, [o]), c = (0, en.l)({
							user: a,
							channelId: o,
							guildId: l.guild_id,
							messageId: t.id
						});
						return (0, r.jsx)(ec.Z, {
							message: t,
							compact: n,
							usernameHook: c,
							onClickPins: __OVERLAY__ ? null : s
						})
					},
					[eN.uaV.USER_JOIN]: function(e) {
						let {
							message: t,
							compact: n,
							channel: i
						} = e, {
							author: l
						} = t, a = t.getChannelId(), o = (0, en.l)({
							user: l,
							channelId: a,
							guildId: i.guild_id,
							messageId: t.id
						});
						return (0, r.jsxs)(r.Fragment, {
							children: [(0, r.jsx)(eS.Z, {
								message: t,
								compact: n,
								usernameHook: o
							}), (0, r.jsx)(D.f, {
								channel: i,
								message: t
							})]
						})
					},
					[eN.uaV.GUILD_BOOST]: eR,
					[eN.uaV.GUILD_BOOST_TIER_1]: eR,
					[eN.uaV.GUILD_BOOST_TIER_2]: eR,
					[eN.uaV.GUILD_BOOST_TIER_3]: eR,
					[eN.uaV.CHANNEL_FOLLOW_ADD]: function(e) {
						let {
							message: t,
							compact: n,
							channel: i
						} = e, {
							author: l
						} = t, a = t.getChannelId(), o = (0, en.l)({
							user: l,
							channelId: a,
							guildId: i.guild_id,
							messageId: t.id
						});
						return (0, r.jsx)(el.Z, {
							message: t,
							compact: n,
							usernameHook: o
						})
					},
					[eN.uaV.GUILD_STREAM]: function(e) {
						let {
							message: t,
							compact: n,
							channel: a
						} = e, {
							author: o,
							author: {
								id: s
							},
							messageReference: c
						} = t, u = t.getChannelId(), p = (0, l.e7)([H.Z], () => H.Z.findActivity(s, e => e.type === eN.IIU.PLAYING), [s]), m = (0, l.e7)([F.Z], () => null != c ? F.Z.getChannel(c.channel_id) : null, [c]), f = null == c ? void 0 : c.guild_id, _ = (0, en.l)({
							user: o,
							channelId: u,
							guildId: a.guild_id,
							messageId: t.id
						}), h = i.useCallback(() => {
							null != m && null != f && (0, d.iV)({
								streamType: eP.lo.GUILD,
								ownerId: s,
								channelId: m.id,
								guildId: f
							})
						}, [s, m, f]);
						return null != c && null != m && null != c.guild_id ? (0, r.jsx)(ef.Z, {
							message: t,
							compact: n,
							channel: m,
							playingActivity: p,
							onJoinStream: h,
							usernameHook: _
						}) : null
					},
					[eN.uaV.GUILD_DISCOVERY_DISQUALIFIED]: function(e) {
						let {
							message: t,
							compact: n
						} = e, i = t.getChannelId(), a = (0, l.e7)([F.Z], () => F.Z.getChannel(i), [i]), o = null != a ? a.getGuildId() : null;
						return (0, r.jsx)(ed.FJ, {
							message: t,
							compact: n,
							onClick: () => {
								null != o && I.Z.open(o, eN.pNK.ACCESS, eN.KsC.ACCESS_DISCOVERABLE)
							}
						})
					},
					[eN.uaV.GUILD_DISCOVERY_REQUALIFIED]: ed.xe,
					[eN.uaV.GUILD_DISCOVERY_GRACE_PERIOD_INITIAL_WARNING]: ed.HL,
					[eN.uaV.GUILD_DISCOVERY_GRACE_PERIOD_FINAL_WARNING]: ed.Yc,
					[eN.uaV.THREAD_CREATED]: function(e) {
						let {
							message: t,
							channel: l,
							compact: a
						} = e, c = (0, en.l)({
							user: t.author,
							channelId: t.channel_id,
							guildId: l.guild_id,
							messageId: t.id
						}), u = i.useCallback(async e => {
							var n;
							let r = null == (n = t.messageReference) ? void 0 : n.channel_id;
							if (null != r) {
								await k.Z.loadThread(r);
								let t = F.Z.getChannel(r);
								null != t && (0, L.ok)(t, e.shiftKey)
							}
						}, [t]), d = i.useCallback(() => {
							(0, o.ZDy)(async () => {
								let {
									default: e
								} = await Promise.all([n.e("91315"), n.e("59505")]).then(n.bind(n, 223901));
								return t => (0, r.jsx)(e, eZ({
									channel: l
								}, t))
							})
						}, [l]), p = i.useCallback(e => {
							var i;
							let l = F.Z.getChannel(null == (i = t.messageReference) ? void 0 : i.channel_id);
							null != l && (0, s.jW)(e, async () => {
								let {
									default: e
								} = await Promise.all([n.e("90508"), n.e("78650")]).then(n.bind(n, 422200));
								return t => {
									var n, i;
									return (0, r.jsx)(e, (n = eZ({}, t), i = i = {
										channel: l
									}, Object.getOwnPropertyDescriptors ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(i)) : (function(e, t) {
										var n = Object.keys(e);
										if (Object.getOwnPropertySymbols) {
											var r = Object.getOwnPropertySymbols(e);
											n.push.apply(n, r)
										}
										return n
									})(Object(i)).forEach(function(e) {
										Object.defineProperty(n, e, Object.getOwnPropertyDescriptor(i, e))
									}), n))
								}
							})
						}, [t]);
						return (0, r.jsx)(ev.Z, {
							message: t,
							compact: a,
							usernameHook: c,
							onClickThread: u,
							onClickViewThreads: d,
							onContextMenuThread: p
						})
					},
					[eN.uaV.THREAD_STARTER_MESSAGE]: eI.Z,
					[eN.uaV.GUILD_INVITE_REMINDER]: void 0,
					[eN.uaV.AUTO_MODERATION_ACTION]: function(e) {
						let {
							message: t,
							compact: n,
							channel: i
						} = e;
						return (0, E.nY)(t) ? (0, r.jsx)(er.Z, {
							message: t,
							compact: n,
							channel: i
						}) : null
					},
					[eN.uaV.GUILD_INCIDENT_ALERT_MODE_ENABLED]: ek,
					[eN.uaV.GUILD_INCIDENT_ALERT_MODE_DISABLED]: ek,
					[eN.uaV.GUILD_INCIDENT_REPORT_RAID]: function(e) {
						let {
							message: t,
							compact: n,
							channel: i
						} = e, l = (0, en.l)({
							user: t.author,
							channelId: i.id,
							guildId: i.guild_id,
							messageId: t.id
						});
						return (0, r.jsx)(em.Z, {
							message: t,
							compact: n,
							channel: i,
							usernameHook: l
						})
					},
					[eN.uaV.GUILD_INCIDENT_REPORT_FALSE_ALARM]: function(e) {
						let {
							message: t,
							compact: n,
							channel: i
						} = e, l = (0, en.l)({
							user: t.author,
							channelId: i.id,
							guildId: i.guild_id,
							messageId: t.id
						});
						return (0, r.jsx)(ep.Z, {
							message: t,
							compact: n,
							channel: i,
							usernameHook: l
						})
					},
					[eN.uaV.ROLE_SUBSCRIPTION_PURCHASE]: v.Z,
					[eN.uaV.PURCHASE_NOTIFICATION]: function(e) {
						var t;
						let {
							message: n,
							channel: i,
							compact: l
						} = e;
						return (null == (t = n.purchaseNotification) ? void 0 : t.type) === p.Eh.GUILD_PRODUCT ? (0, r.jsx)(C.Z, {
							message: n,
							channel: i,
							compact: l
						}) : null
					},
					[eN.uaV.INTERACTION_PREMIUM_UPSELL]: void 0,
					[eN.uaV.STAGE_START]: function(e) {
						let {
							message: t,
							channel: n,
							compact: i
						} = e, a = (0, en.l)({
							user: t.author,
							channelId: n.id,
							guildId: n.guild_id,
							messageId: t.id
						}), o = (0, l.e7)([O.ZP], () => O.ZP.getActiveEventByChannel(n.id), [n.id]);
						return (0, r.jsxs)(r.Fragment, {
							children: [(0, r.jsx)(ex.Z, {
								message: t,
								compact: i,
								usernameHook: a
							}), null != o && o.name === t.content ? (0, r.jsx)(j.Z, {
								code: "".concat(n.guild_id, "-").concat(o.id)
							}) : null]
						})
					},
					[eN.uaV.STAGE_END]: function(e) {
						let {
							message: t,
							channel: n,
							compact: i
						} = e, l = (0, en.l)({
							user: t.author,
							channelId: n.id,
							guildId: n.guild_id,
							messageId: t.id
						});
						return (0, r.jsx)(eb.Z, {
							message: t,
							compact: i,
							usernameHook: l
						})
					},
					[eN.uaV.STAGE_SPEAKER]: function(e) {
						let {
							message: t,
							channel: n,
							compact: i
						} = e, l = (0, en.l)({
							user: t.author,
							channelId: n.id,
							guildId: n.guild_id,
							messageId: t.id
						});
						return (0, r.jsx)(ey.Z, {
							message: t,
							compact: i,
							usernameHook: l
						})
					},
					[eN.uaV.STAGE_RAISE_HAND]: function(e) {
						var t, n;
						let {
							message: i,
							channel: s,
							compact: u
						} = e, d = (0, en.l)({
							user: i.author,
							channelId: s.id,
							guildId: s.guild_id,
							messageId: i.id
						}), p = (0, l.e7)([G.Z], () => G.Z.can(eN.Plq.MUTE_MEMBERS, s)), m = (0, l.e7)([Z.Z], () => Z.Z.getParticipant(s.id, i.author.id)), f = new Date(q.default.extractTimestamp(i.id)).toISOString() === new Date(null != (n = null == m || null == (t = m.voiceState) ? void 0 : t.requestToSpeakTimestamp) ? n : 0).toISOString(), _ = p && (null == m ? void 0 : m.rtsState) === R.xO.REQUESTED_TO_SPEAK && f;
						return (0, r.jsxs)(r.Fragment, {
							children: [(0, r.jsx)(eE.Z, {
								message: i,
								compact: u,
								usernameHook: d
							}), _ ? (0, r.jsxs)(a.zx, {
								wrapperClassName: ew.inviteToSpeakButtonWrapper,
								innerClassName: ew.inviteToSpeakButtonInner,
								look: a.zx.Looks.FILLED,
								color: a.zx.Colors.PRIMARY,
								onClick: () => {
									(0, w.DT)(s, i.author.id, !1), c.Z.deleteMessage(s.id, i.id, !0)
								},
								children: [(0, r.jsx)(o.Lrb, {
									size: "custom",
									color: "currentColor",
									height: 20,
									width: 20
								}), eA.intl.string(eA.t.f0T7hI)]
							}) : null]
						})
					},
					[eN.uaV.STAGE_TOPIC]: function(e) {
						let {
							message: t,
							channel: n,
							compact: i
						} = e, l = (0, en.l)({
							user: t.author,
							channelId: n.id,
							guildId: n.guild_id,
							messageId: t.id
						});
						return (0, r.jsx)(eC.Z, {
							message: t,
							compact: i,
							usernameHook: l
						})
					},
					[eN.uaV.GUILD_APPLICATION_PREMIUM_SUBSCRIPTION]: T.Z,
					[eN.uaV.PRIVATE_CHANNEL_INTEGRATION_ADDED]: N.P,
					[eN.uaV.PRIVATE_CHANNEL_INTEGRATION_REMOVED]: N.e,
					[eN.uaV.PREMIUM_REFERRAL]: void 0,
					[eN.uaV.GUILD_DEADCHAT_REVIVE_PROMPT]: function(e) {
						let {
							message: t,
							channel: n,
							compact: i
						} = e;
						return (0, r.jsx)(f.Z, {
							message: t,
							channel: n,
							compact: i
						})
					},
					[eN.uaV.CUSTOM_GIFT]: void 0,
					[eN.uaV.GUILD_GAMING_STATS_PROMPT]: function(e) {
						let {
							message: t,
							channel: n,
							compact: i
						} = e;
						return (0, r.jsx)(m.Z, {
							message: t,
							channel: n,
							compact: i
						})
					},
					[eN.uaV.VOICE_HANGOUT_INVITE]: void 0,
					[eN.uaV.POLL_RESULT]: S.Z,
					[eN.uaV.CHANGELOG]: void 0,
					[eN.uaV.NITRO_NOTIFICATION]: function(e) {
						let {
							message: t,
							channel: n
						} = e;
						return (0, r.jsx)(et.Z, {
							message: t,
							channel: n
						})
					},
					[eN.uaV.CHANNEL_LINKED_TO_LOBBY]: function(e) {
						let {
							message: t,
							channel: n,
							compact: i
						} = e;
						return (0, r.jsx)(eo.Z, {
							message: t,
							channel: n,
							compact: i
						})
					},
					[eN.uaV.GIFTING_PROMPT]: function(e) {
						let {
							message: t,
							channel: n
						} = e, i = t.giftingPrompt, a = (0, l.e7)([z.default], () => z.default.getUser(null == i ? void 0 : i.recipientUserId));
						return null == i || null == a ? null : (0, r.jsx)(J.Z, {
							giftIntentType: i.giftIntentType,
							recipientUser: a,
							channel: n,
							giftIntentSecondaryAction: i.giftIntentSecondaryAction
						})
					},
					[eN.uaV.IN_GAME_MESSAGE_NUX]: function(e) {
						let {
							message: t,
							channel: n,
							compact: i
						} = e;
						return (0, r.jsx)(e_.Z, {
							message: t,
							channel: n,
							author: t.author,
							compact: i
						})
					},
					[eN.uaV.GUILD_JOIN_REQUEST_ACCEPT_NOTIFICATION]: x.Cn,
					[eN.uaV.GUILD_JOIN_REQUEST_REJECT_NOTIFICATION]: x.Ue,
					[eN.uaV.GUILD_JOIN_REQUEST_WITHDRAWN_NOTIFICATION]: x.R6,
					[eN.uaV.HD_STREAMING_UPGRADED]: function(e) {
						let {
							message: t,
							channel: n,
							compact: i
						} = e;
						return (0, r.jsx)($.Z, {
							message: t,
							channel: n,
							compact: i
						})
					},
					[eN.uaV.EMOJI_ADDED]: function(e) {
						let {
							message: t,
							channel: n,
							compact: i
						} = e, l = (0, en.l)({
							user: t.author,
							channelId: n.id,
							guildId: n.guild_id,
							messageId: t.id
						});
						return (0, r.jsx)(b.i, {
							message: t,
							channel: n,
							compact: i,
							usernameHook: l
						})
					},
					[eN.uaV.CHAT_WALLPAPER_SET]: function(e) {
						let {
							message: t,
							channel: n,
							compact: i
						} = e;
						return (0, r.jsx)(h.Z, {
							message: t,
							channel: n,
							compact: i
						})
					},
					[eN.uaV.CHAT_WALLPAPER_REMOVED]: function(e) {
						let {
							message: t,
							channel: n,
							compact: i
						} = e;
						return (0, r.jsx)(_.Z, {
							message: t,
							channel: n,
							compact: i
						})
					},
					[eN.uaV.REPORT_TO_MOD_BAN_USER]: P.Z,
					[eN.uaV.REPORT_TO_MOD_KICK_USER]: P.Z,
					[eN.uaV.REPORT_TO_MOD_TIMEOUT_USER]: P.Z,
					[eN.uaV.REPORT_TO_MOD_DELETED_MESSAGE]: P.Z,
					[eN.uaV.REPORT_TO_MOD_CLOSED_REPORT]: P.Z
				}),
				eD = i.memo(function(e) {
					let {
						message: t,
						channel: n,
						compact: i,
						disableInteraction: l
					} = e, {
						type: a
					} = t, o = eL[a];
					if (null == o) {
						var s;
						return s = Error("unknown message type ".concat(t.type)), X.Z.captureException(s), new g.Z("SystemMessage").error("", s), null
					}
					return (0, r.jsx)(ee.ZP, {
						message: t,
						content: (0, Q.ZP)(t).content,
						compact: null != i && i,
						children: (0, r.jsx)(o, {
							message: t,
							channel: n,
							compact: i,
							disableInteraction: l
						})
					})
				})
		},
		507418: function(e, t, n) {
			n.d(t, {
				Z: () => m
			}), n(35282);
			var r = n(255367);
			n(73800);
			var i = n(512722),
				l = n.n(i),
				a = n(527562),
				o = n(245315),
				s = n(556041),
				c = n(726033),
				u = n(592125),
				d = n(594174),
				p = n(368859);

			function m(e, t) {
				var n, i, m, f;
				if ((0, o.cp)(t)) return (0, r.jsx)(s.Z, {});
				if ((0, p.Z)(t)) {
					let l = (null != (i = null == t || null == (n = t.author) ? void 0 : n.username) ? i : "").split(" ").slice(0, -1).join(" "),
						{
							guild_id: o
						} = t.messageReference;
					if (null != o) return (0, r.jsx)(a.Z, {
						setPopoutRef: e.setPopoutRef,
						guildId: o,
						name: l
					})
				}
				if (null != t.interaction && "SENDING" === t.state) return (0, r.jsx)(r.Fragment, {});
				let _ = null != t.webhookId ? t.author : d.default.getUser(t.author.id);
				l()(null != _, "renderUserGuildPopout: user should never be null");
				let h = d.default.getCurrentUser();
				l()(null != h, "renderUserGuildPopout: currentUser should never be null");
				let g = u.Z.getChannel(t.channel_id);
				return l()(null != g, "renderUserGuildPopout: channel should never be null"), (0, r.jsx)(c.Z, (m = function(e) {
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
				}({}, e), f = f = {
					user: _,
					currentUser: h,
					guildId: g.guild_id,
					channelId: t.channel_id,
					messageId: t.id
				}, Object.getOwnPropertyDescriptors ? Object.defineProperties(m, Object.getOwnPropertyDescriptors(f)) : (function(e, t) {
					var n = Object.keys(e);
					if (Object.getOwnPropertySymbols) {
						var r = Object.getOwnPropertySymbols(e);
						n.push.apply(n, r)
					}
					return n
				})(Object(f)).forEach(function(e) {
					Object.defineProperty(m, e, Object.getOwnPropertyDescriptor(f, e))
				}), m))
			}
		},
		348238: function(e, t, n) {
			n.d(t, {
				$3: () => V,
				Go: () => B,
				JC: () => w,
				NU: () => L,
				Nk: () => A,
				R9: () => R,
				RN: () => U,
				Wl: () => P,
				XO: () => N,
				Xn: () => z,
				bb: () => H,
				qo: () => D,
				rY: () => k,
				sR: () => F,
				tn: () => G,
				wq: () => M
			}), n(997841), n(388685);
			var r = n(255367),
				i = n(73800),
				l = n(239091),
				a = n(904245),
				o = n(144144),
				s = n(40851),
				c = n(407477),
				u = n(992970),
				d = n(287941),
				p = n(235894),
				m = n(675478),
				f = n(592125),
				_ = n(323873),
				h = n(375954),
				g = n(594174),
				b = n(585483),
				E = n(5967),
				y = n(630388),
				x = n(358085),
				C = n(51144),
				v = n(91047),
				O = n(50284),
				j = n(804063),
				I = n(981631);

			function S(e, t, n) {
				return i.useCallback(() => {
					n({
						[e]: !t
					})
				}, [e, n, t])
			}

			function T(e, t, n) {
				return i.useCallback(r => {
					let i = g.default.getUser(e);
					if (null == i) return;
					if (r.preventDefault(), r.stopPropagation(), !r.shiftKey) return void n();
					let l = "@".concat(C.ZP.getUserTag(i, {
							decoration: "never"
						})),
						a = "<@".concat(e, ">");
					b.S.dispatchToLastSubscribed(I.CkL.INSERT_TEXT, {
						plainText: l,
						rawText: a
					}), o.Z.startTyping(t)
				}, [e, t, n])
			}

			function N(e, t, n, r) {
				let i = S("usernameProfile", n, r);
				return T(e.author.id, t.id, i)
			}

			function P(e, t, n, r) {
				let i = S("referencedUsernameProfile", n, r);
				return T(null == e ? void 0 : e.author.id, t.id, i)
			}

			function A(e, t, n, r) {
				let i = S("interactionUsernameProfile", n, r);
				return T(null == e ? void 0 : e.user.id, t.id, i)
			}

			function w(e, t, n, r) {
				let i = S("referencedUsernameProfile", n, r);
				return T(e, t.id, i)
			}

			function Z(e) {
				return i.useCallback(t => {
					t.preventDefault(), t.stopPropagation(), e()
				}, [e])
			}

			function R(e, t) {
				return Z(S("avatarProfile", e, t))
			}

			function k(e, t) {
				return Z(S("referencedAvatarProfile", e, t))
			}

			function L(e, t) {
				return Z(S("interactionAvatarProfile", e, t))
			}

			function D(e, t, a, o) {
				let {
					id: c
				} = t, {
					id: u,
					flags: d
				} = e, p = (0, y.yE)(d, I.iLy.EPHEMERAL), m = (0, s.bp)();
				return i.useCallback((e, t) => {
					if (p) return;
					if (!x.isPlatformEmbedded) {
						let t = e.target;
						if ("A" === t.tagName && "" !== t.textContent || null == window.getSelection) return;
						let n = window.getSelection();
						if (null != n && !n.isCollapsed && (n.focusNode === e.target || t.contains(n.focusNode))) return
					}
					let i = f.Z.getChannel(c),
						s = h.Z.getMessage(c, u),
						d = _.Z.isEditing(c, u);
					null == i || null == s || d || (a({
						contextMenu: !0
					}), (0, l.jW)(e, async () => {
						let {
							default: e
						} = await Promise.all([n.e("93375"), n.e("16705"), n.e("37220"), n.e("41629")]).then(n.bind(n, 225138));
						return n => {
							var l, a;
							return (0, r.jsx)(e, (l = function(e) {
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
							}({}, n), a = a = {
								message: s,
								channel: i,
								mediaItem: t,
								shouldHideMediaOptions: o
							}, Object.getOwnPropertyDescriptors ? Object.defineProperties(l, Object.getOwnPropertyDescriptors(a)) : (function(e, t) {
								var n = Object.keys(e);
								if (Object.getOwnPropertySymbols) {
									var r = Object.getOwnPropertySymbols(e);
									n.push.apply(n, r)
								}
								return n
							})(Object(a)).forEach(function(e) {
								Object.defineProperty(l, e, Object.getOwnPropertyDescriptor(a, e))
							}), l))
						}
					}, {
						onClose: () => a({
							contextMenu: !1
						}),
						context: m
					}))
				}, [p, c, u, a, m, o])
			}

			function M(e, t) {
				return i.useCallback(n => {
					let r = g.default.getUser(e),
						i = f.Z.getChannel(t);
					null != r && null != i && (n.stopPropagation(), (0, v.Pv)(n, r, i))
				}, [e, t])
			}

			function U(e, t, n) {
				return i.useCallback(r => {
					let i = g.default.getUser(e),
						l = f.Z.getChannel(t);
					null != i && null != l && (r.stopPropagation(), (0, v._j)(r, {
						user: i,
						channel: l,
						moderationAlertId: n
					}))
				}, [e, t, n])
			}

			function F(e, t) {
				return i.useCallback(n => {
					let r = g.default.getUser(e),
						i = f.Z.getChannel(t);
					null != r && null != i && (n.stopPropagation(), (0, v.xS)(n, r, i.guild_id))
				}, [e, t])
			}

			function B(e, t) {
				let {
					id: n
				} = e, {
					id: r
				} = t;
				return i.useCallback(e => {
					e.altKey && (e.preventDefault(), (0, O.Z)(r, n))
				}, [r, n])
			}

			function G(e) {
				var t, n;
				let {
					groupId: r,
					message: l,
					defaultValue: a,
					popouts: o
				} = e, {
					canShowReactionsOnMessageHover: s
				} = c.ZP.useExperiment({
					location: "useHoveredMessage"
				}, {
					autoTrackExposure: !1
				}), f = l.author.id, _ = "".concat(r, ":").concat(f), h = i.useRef(a), g = (t = l, n = o, i.useCallback(e => {
					if (null == e || !(e.nativeEvent instanceof MouseEvent) || Object.values(n).some(e => e)) return;
					let r = e.target;
					if ((0, p.Uw)(t)) {
						let {
							x: e,
							y: n,
							width: i,
							height: l
						} = r.getBoundingClientRect();
						(0, d.Z)(t, {
							x: e,
							y: n,
							w: i,
							h: l
						}, !1, u.LL.UserTriggered)
					}
				}, [t, n])), [E, y] = i.useState(a);
				h.current = E || h.current;
				let x = i.useCallback(e => {
						s && (0, m.T6)(), E || (b.S.dispatchKeyed(I.LPv.ANIMATE_CHAT_AVATAR, _, !0), g(e), y(!0))
					}, [E, _, s, g]),
					C = i.useCallback(() => {
						b.S.dispatchKeyed(I.LPv.ANIMATE_CHAT_AVATAR, _, !1), y(!1)
					}, [_]);
				return {
					hasHovered: h.current,
					isHovered: E,
					handleMouseEnter: x,
					handleMouseLeave: C
				}
			}

			function H(e, t) {
				let [n, r] = i.useState(!1), [l, a] = i.useState(!1);
				return {
					handleFocus: i.useCallback(t => {
						var n, i;
						let l = null != (i = null == (n = (0, E.uB)(t)) ? void 0 : n.activeElement) ? i : null;
						(t.target === t.currentTarget || t.currentTarget.contains(l)) && (a(!0), r(!0)), null != e && e(t)
					}, [e]),
					handleBlur: i.useCallback(e => {
						var n, i;
						let l = null != (i = null == (n = (0, E.uB)(e)) ? void 0 : n.activeElement) ? i : null;
						e.target !== e.currentTarget && e.currentTarget.contains(l) || r(!1), null != t && t(e)
					}, [t]),
					isFocused: n,
					hasFocused: l
				}
			}

			function V(e, t) {
				return i.useCallback(() => {
					let {
						messageReference: n
					} = e;
					(null == t || (0, j.Z)(t)) && a.Z.jumpToMessage({
						channelId: n.channel_id,
						messageId: n.message_id,
						flash: !0,
						returnMessageId: e.id
					})
				}, [t, e])
			}

			function z(e, t) {
				let n = S("interactionData", e, t);
				return i.useCallback(e => {
					e.preventDefault(), e.stopPropagation(), n()
				}, [n])
			}
		},
		38267: function(e, t, n) {
			n.d(t, {
				Z: () => o
			}), n(388685);
			var r = n(73800),
				i = n(585483),
				l = n(981631);

			function a(e) {
				return Object.keys(e).some(t => e[t])
			}

			function o(e, t) {
				let [n, o] = r.useState(t), [s, c] = r.useState(a(n)), u = r.useRef(s), d = r.useRef(null), p = r.useCallback(e => {
					o(t => {
						let n = function(e) {
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
							}({}, t, e),
							r = a(n);
						return r !== u.current && (u.current = r, null != d.current && (cancelAnimationFrame(d.current), d.current = null), r ? c(!0) : d.current = requestAnimationFrame(() => c(!1))), n
					})
				}, []);
				return r.useEffect(() => {
					let t = e => {
						let {
							emojiPicker: t,
							emojiBurstPicker: n
						} = e;
						return p({
							emojiPicker: t,
							emojiBurstPicker: n
						})
					};
					return i.S.subscribeKeyed(l.LPv.TOGGLE_REACTION_POPOUT, e, t), () => void i.S.unsubscribeKeyed(l.LPv.TOGGLE_REACTION_POPOUT, e, t)
				}, [e, p]), {
					popouts: n,
					setPopout: p,
					selected: s
				}
			}
		},
		689674: function(e, t, n) {
			n.d(t, {
				Z: () => d
			});
			var r = n(73800),
				i = n(106351),
				l = n(442837),
				a = n(434650),
				o = n(430824),
				s = n(63205),
				c = n(529726),
				u = n(981631);

			function d(e) {
				var t, n;
				let {
					message: d,
					channel: p,
					enabled: m = !0
				} = e, f = (0, l.e7)([o.Z], () => {
					var e;
					let t = o.Z.getGuild(p.guild_id);
					return null != (e = null == t ? void 0 : t.features.has(u.oNc.COMMUNITY)) && e
				}, [p.guild_id]), _ = (null == (t = d.messageReference) ? void 0 : t.guild_id) != null && null != d.webhookId && d.hasFlag(u.iLy.IS_CROSSPOST) && null != p.guild_id, h = p.type === i.d.GUILD_ANNOUNCEMENT && f, g = !d.hasFlag(u.iLy.EPHEMERAL) && (_ || h), b = _ && null != d.messageReference ? d.messageReference.message_id : d.id, E = _ && null != d.messageReference ? d.messageReference.channel_id : p.id, y = _ && (null == (n = d.messageReference) ? void 0 : n.guild_id) != null ? d.messageReference.guild_id : p.guild_id, x = r.useCallback(e => {
					e ? c.Z.handleMessageBecameVisible({
						messageId: b,
						channelId: p.id,
						guildId: p.guild_id,
						sourceChannelId: E,
						sourceGuildId: y
					}) : c.Z.handleMessageLostVisibility(b)
				}, [b, p.id, p.guild_id, E, y]), C = s.Z.useExperiment({
					location: "836a4b_1"
				}, {
					disable: !g || !m,
					autoTrackExposure: !0
				}).enabled, v = (0, a.O)(x, 0, C);
				return r.useEffect(() => () => {
					c.Z.handleMessageLostVisibility(b)
				}, [b]), v
			}
		},
		610699: function(e, t, n) {
			n.d(t, {
				Z: () => D
			}), n(539854), n(361932), n(187205);
			var r = n(255367),
				i = n(73800),
				l = n(120356),
				a = n.n(l),
				o = n(512722),
				s = n.n(o),
				c = n(442837),
				u = n(481060),
				d = n(447543),
				p = n(317381),
				m = n(100527),
				f = n(906732),
				_ = n(758199),
				h = n(943762),
				g = n(914498),
				b = n(880251),
				E = n(515344),
				y = n(835473),
				x = n(471445),
				C = n(111028),
				v = n(592125),
				O = n(430824),
				j = n(496675),
				I = n(594174),
				S = n(626135),
				T = n(768581),
				N = n(411198),
				P = n(358595),
				A = n(981631),
				w = n(245335),
				Z = n(388032),
				R = n(582909);

			function k(e) {
				let {
					members: t,
					membersOnline: n,
					textColor: i
				} = e, l = [];
				return null != n && n > 0 && l.push((0, r.jsxs)("div", {
					className: R.statusWrapper,
					children: [(0, r.jsx)("i", {
						className: R.statusOnline
					}), (0, r.jsx)(u.Text, {
						variant: "text-xs/normal",
						className: R.count,
						color: i,
						children: Z.intl.format(Z.t["LC+S+v"], {
							membersOnline: n
						})
					})]
				}, "onlineCount")), null != t && l.push((0, r.jsxs)("div", {
					className: R.statusWrapper,
					children: [(0, r.jsx)("i", {
						className: R.statusOffline
					}), (0, r.jsx)(u.Text, {
						variant: "text-xs/normal",
						className: R.count,
						color: i,
						children: Z.intl.format(Z.t.zRl6XV, {
							count: t
						})
					})]
				}, "memberCount")), (0, r.jsx)("div", {
					className: R.statusCounts,
					children: l
				})
			}

			function L(e) {
				let {
					channel: t,
					guild: n,
					hasEnded: i,
					textColor: l
				} = e;
				if (null != t && null != n) {
					let e = (0, x.KS)(t, n);
					return (0, r.jsxs)("div", {
						className: a()(R.channel, {
							[R.ended]: i
						}),
						children: [null != e ? (0, r.jsx)(e, {
							className: R.channelIcon,
							size: "xs",
							color: "currentColor"
						}) : null, (0, r.jsx)(C.Z, {
							children: (0, r.jsx)(u.Text, {
								variant: "text-xs/normal",
								color: l,
								children: Z.intl.format(Z.t["dc+LW1"], {
									channelName: t.name,
									serverName: n.name
								})
							})
						})]
					})
				}
				return null != n ? (0, r.jsx)("div", {
					className: a()(R.channel, {
						[R.ended]: i
					}),
					children: (0, r.jsx)(C.Z, {
						children: (0, r.jsx)(u.Text, {
							variant: "text-xs/normal",
							color: l,
							children: Z.intl.format(Z.t.u0vaDA, {
								guildName: n.name
							})
						})
					})
				}) : null
			}

			function D(e) {
				var t, n;
				let l, {
						invite: a,
						message: o,
						getAcceptInviteContext: u
					} = e,
					{
						approximate_member_count: _,
						approximate_presence_count: h,
						target_type: g,
						target_application: b
					} = a;
				s()(g === w.Iq.EMBEDDED_APPLICATION && null != b, "invalid application invite");
				let E = i.useCallback(() => {
						var e;
						S.default.track(A.rMx.EMBEDDED_APPLICATION_INVITE_EMBED_VIEWED, {
							application_id: b.id,
							invite_inviter_id: null == (e = a.inviter) ? void 0 : e.id
						})
					}, [null == (t = a.inviter) ? void 0 : t.id, b.id]),
					x = (0, c.e7)([O.Z], () => null != a.guild ? O.Z.getGuild(a.guild.id) : null, [a]),
					C = (0, y.Z)([b.id])[0],
					T = (0, c.e7)([p.ZP], () => {
						var e;
						return (null == a ? void 0 : a.channel) != null && (null == (e = p.ZP.getSelfEmbeddedActivityForChannel(a.channel.id)) ? void 0 : e.applicationId) === b.id
					}),
					R = (0, c.e7)([p.ZP], () => {
						var e;
						return ((null == (e = a.channel) ? void 0 : e.id) != null ? p.ZP.getEmbeddedActivitiesForChannel(a.channel.id) : []).some(e => {
							let {
								applicationId: t
							} = e;
							return b.id === t
						})
					}),
					k = v.Z.getChannel(null == (n = a.channel) ? void 0 : n.id),
					L = (0, c.e7)([j.Z], () => null != k && j.Z.can(A.Plq.USE_EMBEDDED_ACTIVITIES, k), [k]),
					{
						analyticsLocations: D
					} = (0, f.ZP)(m.Z.INVITE_EMBED),
					U = (0, c.Wu)([p.ZP], () => null != k ? p.ZP.getEmbeddedActivitiesForChannel(k.id).filter(e => e.applicationId === b.id).flatMap(e => Array.from(e.userIds)) : [], [k, b.id]),
					F = (0, c.Wu)([I.default], () => U.map(e => I.default.getUser(e)).filter(e => null != e), [U]),
					B = i.useCallback(() => {
						(0, d.r$)({
							invite: a,
							action: "accept",
							inviter_id: o.author.id,
							invite_message_id: o.id
						}, D), d.ZP.acceptInviteAndTransitionToInviteChannel({
							inviteKey: a.code,
							context: u("Invite Button Embed"),
							analyticsLocations: D
						})
					}, [a, o, D, u]),
					G = a.state === A.r2o.ACCEPTING,
					H = null != x;
				if (null == x) {
					if (null == a.guild) return (0, r.jsx)(P.Z, {});
					x = (0, N.Qs)(a.guild)
				}
				let V = H && !L || H && T;
				return (H && T && (l = Z.intl.string(Z.t.wJNK8P)), L || (l = Z.intl.string(Z.t.hHGrW1)), null == a.code || "" === a.code || null == C) ? null : (0, r.jsx)(f.Gt, {
					value: D,
					children: (0, r.jsx)(M, {
						app: C,
						activityUsers: F,
						isMember: H,
						channel: k,
						guild: x,
						members: _,
						membersOnline: h,
						isActivityActive: R,
						submitting: G,
						isDisabled: V,
						tooltip: l,
						handleAcceptInvite: B,
						onView: E
					})
				})
			}

			function M(e) {
				var t, n;
				let {
					app: l,
					activityUsers: a,
					isMember: o,
					channel: s,
					guild: c,
					members: u,
					membersOnline: d,
					isActivityActive: p,
					submitting: m,
					isDisabled: f,
					tooltip: y,
					handleAcceptInvite: x,
					onView: C
				} = e, {
					bot: v,
					icon: O
				} = l, j = T.ZP.getApplicationIconURL({
					id: l.id,
					icon: O,
					bot: v
				}), I = (0, E.G)(l), S = (0, b.E)(l), N = a.length, P = i.useMemo(() => [{
					label: o ? p ? Z.intl.string(Z.t.VJlc0d) : Z.intl.string(Z.t.RscU7O) : Z.intl.string(Z.t["2BP08P"]),
					trackingArea: o ? g.j_.PLAY : g.j_.JOIN_SERVER,
					submitting: m,
					disabledReason: f && null != y ? y : void 0,
					onClick: x
				}], [x, p, f, o, m, y]);
				return (0, r.jsx)(_.W, (t = function(e) {
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
					header: l.name,
					title: Z.intl.string(Z.t["7vb6n5"]),
					iconSrc: j
				}, S), n = n = {
					onClickBanner: I,
					info: (0, r.jsxs)("div", {
						className: R.infoWrapper,
						children: [(0, r.jsx)(L, {
							channel: s,
							guild: c,
							hasEnded: !p,
							textColor: "none"
						}), o ? N > 0 && (0, r.jsx)(h.K, {
							activityUsers: a,
							guildId: c.id,
							activityText: Z.intl.string(Z.t.BMTj29)
						}) : (0, r.jsx)(k, {
							members: u,
							membersOnline: d,
							textColor: "none"
						})]
					}),
					actions: P,
					onClickContent: I,
					trackingConfig: {
						id: l.id,
						linkType: g.Un.ACTIVITY_INVITE,
						onView: C
					}
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
		},
		313876: function(e, t, n) {
			n.d(t, {
				Z: () => c
			}), n(953529);
			var r = n(255367);
			n(73800);
			var i = n(442837),
				l = n(955415),
				a = n(314897),
				o = n(782605),
				s = n(388032);

			function c(e) {
				var t, n;
				let {
					author: c,
					inviteError: u
				} = e, d = (0, i.e7)([a.default], () => a.default.getId()) === c.id ? s.intl.string(s.t.C89OLC) : s.intl.string(s.t["YVub5+"]), p = (0, o.l)(null == u ? void 0 : u.code);
				return (0, r.jsxs)(l.Z, {
					children: [(0, r.jsx)(l.Z.Header, {
						text: d
					}), (0, r.jsxs)(l.Z.Body, {
						children: [(0, r.jsx)(l.Z.Icon, {
							expired: !0
						}), (0, r.jsx)(l.Z.Info, {
							expired: !0,
							title: null != (t = null == p ? void 0 : p.title) ? t : s.intl.string(s.t["Jhx/ub"]),
							children: null != (n = null == p ? void 0 : p.description) ? n : null == u ? void 0 : u.message
						})]
					})]
				})
			}
		},
		778333: function(e, t, n) {
			n.d(t, {
				Z: () => E
			});
			var r = n(255367),
				i = n(73800),
				l = n(442837),
				a = n(493683),
				o = n(447543),
				s = n(100527),
				c = n(906732),
				u = n(955415),
				d = n(598077),
				p = n(314897),
				m = n(592125),
				f = n(699516),
				_ = n(51144),
				h = n(981631),
				g = n(388032),
				b = n(273254);

			function E(e) {
				var t;
				let {
					invite: n,
					message: E,
					getAcceptInviteContext: y
				} = e, x = (0, l.e7)([p.default], () => p.default.getId()), C = (null == (t = n.inviter) ? void 0 : t.id) === x, v = n.state === h.r2o.ACCEPTING, {
					analyticsLocations: O
				} = (0, c.ZP)(s.Z.INVITE_EMBED), j = (0, l.e7)([f.Z], () => {
					var e;
					return null != n.inviter && f.Z.isFriend(null == (e = n.inviter) ? void 0 : e.id)
				}), I = i.useCallback(() => {
					let e = "noop";
					null != n.inviter && null != m.Z.getDMFromUserId(n.inviter.id) && (e = "transition", a.Z.openPrivateChannel({
						recipientIds: [n.inviter.id]
					})), (0, o.r$)({
						invite: n,
						action: e,
						inviter_id: E.author.id,
						invite_message_id: E.id
					}, O)
				}, [n, E, O]), S = i.useCallback(() => {
					(0, o.r$)({
						invite: n,
						action: "accept",
						inviter_id: E.author.id,
						invite_message_id: E.id
					}, O);
					let e = y("Invite Button Embed");
					o.ZP.acceptInviteAndTransitionToInviteChannel({
						inviteKey: n.code,
						context: e
					})
				}, [n, E, O, y]);
				if (null == n.inviter) return null;
				let T = j ? I : S,
					N = g.intl.string(g.t.ib7Ng4),
					P = u.Z.Button.Colors.GREEN;
				j ? (N = g.intl.string(g.t.xhxnPj), P = u.Z.Button.Colors.PRIMARY) : C && (N = g.intl.string(g.t.ib7Ng4), P = u.Z.Button.Colors.PRIMARY);
				let A = C ? g.intl.string(g.t.eQyu1N) : g.intl.string(g.t.PYJHW1),
					w = null != n.inviter ? "".concat(n.inviter.username) : "",
					Z = null != n.inviter ? _.ZP.getUserTag(n.inviter) : "";
				return (0, r.jsxs)(u.Z, {
					children: [(0, r.jsx)(u.Z.Header, {
						text: A
					}), (0, r.jsxs)(u.Z.Body, {
						children: [(0, r.jsxs)("div", {
							className: b.headerLine,
							children: [(0, r.jsx)(u.Z.Icon, {
								user: new d.Z(n.inviter),
								onClick: j ? T : void 0
							}), (0, r.jsx)(u.Z.Info, {
								title: w,
								onClick: j ? T : void 0,
								children: Z
							})]
						}), (0, r.jsx)(u.Z.Button, {
							onClick: T,
							submitting: v,
							isDisabled: C,
							color: P,
							children: N
						})]
					})]
				})
			}
		},
		949981: function(e, t, n) {
			n.d(t, {
				Z: () => y
			}), n(539854);
			var r = n(255367),
				i = n(73800),
				l = n(512722),
				a = n.n(l),
				o = n(442837),
				s = n(447543),
				c = n(100527),
				u = n(906732),
				d = n(955415),
				p = n(131704),
				m = n(592125),
				f = n(594174),
				_ = n(823379),
				h = n(358595),
				g = n(981631),
				b = n(388032),
				E = n(273254);

			function y(e) {
				let t, {
						invite: n,
						message: l,
						currentUserId: y,
						onTransitionToInviteChannel: x,
						onAcceptInstantInvite: C
					} = e,
					v = y === l.author.id,
					O = n.state === g.r2o.ACCEPTING,
					j = (0, o.e7)([m.Z], () => null != n.channel ? m.Z.getChannel(n.channel.id) : null, [n]);
				a()(null == j || j.isPrivate(), "must be a private channel");
				let {
					analyticsLocations: I
				} = (0, u.ZP)(c.Z.INVITE_EMBED), S = null != j, T = i.useCallback(() => {
					let e = "noop";
					S ? (x(), e = "transition") : (C(), e = "accept"), (0, s.r$)({
						invite: n,
						action: e,
						inviter_id: l.author.id,
						invite_message_id: l.id
					}, I)
				}, [n, l, I, S, x, C]);
				if (null == j) {
					if (null == n.channel) return (0, r.jsx)(h.Z, {});
					j = (0, p.jD)(n.channel), t = null != n.channel && null != n.channel.recipients ? n.channel.recipients : []
				} else {
					t = j.recipients.reduce((e, t) => {
						let n = f.default.getUser(t);
						return null != n && e.push(n), e
					}, []);
					let e = f.default.getCurrentUser();
					S && null != e && t.push(e)
				}
				let N = j.name;
				(null == N || "" === N) && (N = t.length > 0 ? t.filter(_.lm).map(e => e.username).join(", ") : b.intl.string(b.t.LJpTRE));
				let P = b.intl.string(b.t.XpeFYm),
					A = d.Z.Button.Colors.GREEN;
				S && (P = b.intl.string(b.t.cEnaW1), A = d.Z.Button.Colors.PRIMARY);
				let w = b.intl.string(b.t["3p3/BA"]);
				return v && (w = b.intl.string(b.t.qmtuXF)), (0, r.jsxs)(d.Z, {
					children: [(0, r.jsx)(d.Z.Header, {
						text: w
					}), (0, r.jsxs)(d.Z.Body, {
						children: [(0, r.jsxs)("div", {
							className: E.headerLine,
							children: [(0, r.jsx)(d.Z.Icon, {
								channel: j,
								onClick: S ? T : void 0
							}), (0, r.jsx)(d.Z.Info, {
								title: N,
								onClick: S ? T : void 0,
								children: (0, r.jsx)(d.Z.Data, {
									members: t.length
								})
							})]
						}), (0, r.jsx)(d.Z.Button, {
							onClick: T,
							submitting: O,
							isDisabled: S,
							color: A,
							children: P
						})]
					})]
				})
			}
		},
		680668: function(e, t, n) {
			n.d(t, {
				Z: () => x
			}), n(997841), n(388685);
			var r = n(255367),
				i = n(73800),
				l = n(533800),
				a = n(481060),
				o = n(447543),
				s = n(100527),
				c = n(906732),
				u = n(857395),
				d = n(358555),
				p = n(955415),
				m = n(131704),
				f = n(630388),
				_ = n(411198),
				h = n(277707),
				g = n(358595),
				b = n(981631),
				E = n(388032),
				y = n(273254);

			function x(e) {
				var t, x, C;
				let v, O, j, {
						onTransitionToInviteChannel: I,
						onAcceptInstantInvite: S,
						guild: T,
						invite: N,
						message: P,
						currentUserId: A
					} = e,
					w = A === P.author.id,
					{
						channel: Z,
						approximate_member_count: R,
						approximate_presence_count: k
					} = N,
					L = N.state === b.r2o.ACCEPTING,
					D = null != Z ? (0, m.jD)(Z) : null,
					M = null != T,
					U = null != D,
					F = null != D && D.isGuildVocal(),
					B = null != D && D.isGuildStageVoice(),
					G = (0, f.yE)(null != (t = N.flags) ? t : 0, l.$.IS_GUEST_INVITE),
					H = null != (x = null == T ? void 0 : T.features.has(b.oNc.HUB)) && x,
					V = null == T ? void 0 : T.id,
					{
						analyticsLocations: z
					} = (0, c.ZP)(s.Z.INVITE_EMBED),
					[W, K] = i.useState(!1),
					Y = i.useCallback(() => K(!1), []),
					X = i.useRef(null),
					q = i.useCallback(() => {
						K(!0), (0, o.CB)(V, "show profile", z)
					}, [V, z]),
					Q = i.useCallback(() => {
						let e = "noop";
						M ? (I(), e = "transition") : (S(), e = "accept"), (0, o.r$)({
							invite: N,
							action: e,
							inviter_id: P.author.id,
							invite_message_id: P.id
						}, z)
					}, [N, P, z, M, I, S]);
				if (null == T) {
					if (null == N.guild) return (0, r.jsx)(g.Z, {});
					(T = _.Qs(N.guild)).premiumTier = null != (C = N.guild.premium_tier) ? C : b.Eu4.NONE
				}
				let J = (0, h.e)({
					isVoiceChannel: F,
					isOwnInvite: w,
					isGuest: G,
					isHubGuild: H,
					isStage: B,
					isStream: !1
				});
				return O = (0, r.jsxs)("span", {
					className: y.infoTitle,
					children: [(0, r.jsx)(u.Z, {
						guildId: T.id,
						name: T.name,
						shouldShow: W,
						onRequestClose: Y,
						targetElementRef: X,
						children: () => (0, r.jsx)(p.Z.GuildName, {
							guild: T,
							ref: X
						})
					}), (0, r.jsx)("span", {
						className: y.infoBadge,
						children: (0, r.jsx)(d.Z, {
							guild: T,
							isBannerVisible: !1,
							disableBoostClick: !0
						})
					})]
				}), G && (j = (0, r.jsx)(a.DY3, {
					className: y.tooltipContainer,
					text: E.intl.string(E.t["/FeTKy"]),
					children: (0, r.jsx)(a.d3s, {
						size: "md",
						color: "currentColor",
						className: y.infoIcon
					})
				})), F ? (O = (0, r.jsx)(p.Z.Channel, {
					channel: D
				}), v = (0, r.jsxs)("span", {
					className: y.infoTitle,
					children: [E.intl.format(E.t["2wimj4"], {
						guildName: T.name
					}), (0, r.jsx)("span", {
						className: y.infoBadge,
						children: (0, r.jsx)(d.Z, {
							guild: T,
							isBannerVisible: !1
						})
					})]
				})) : null != R && R >= 5 || null != k && k > 0 ? v = (0, r.jsx)(p.Z.Data, {
					members: R,
					membersOnline: k
				}) : U && (v = (0, r.jsx)(p.Z.Channel, {
					channel: D,
					guild: T
				})), (0, r.jsxs)(p.Z, {
					children: [(0, r.jsx)(p.Z.GuildSplash, {
						guild: T
					}), (0, r.jsx)(p.Z.Header, {
						text: J,
						extra: j
					}), (0, r.jsxs)(p.Z.Body, {
						children: [(0, r.jsxs)("div", {
							className: y.headerLine,
							children: [(0, r.jsx)(p.Z.Icon, {
								guild: T
							}), (0, r.jsx)(p.Z.Info, {
								title: O,
								onClick: q,
								children: v
							})]
						}), (0, r.jsx)(p.Z.Button, {
							onClick: Q,
							submitting: L,
							color: p.Z.Button.Colors.GREEN,
							children: F ? B ? E.intl.string(E.t["7vb2cX"]) : E.intl.string(E.t.gpqgam) : M ? E.intl.string(E.t.cEnaW1) : E.intl.string(E.t.XpeFYm)
						})]
					}), T.features.has(b.oNc.HUB) && (0, r.jsxs)(r.Fragment, {
						children: [(0, r.jsx)("div", {
							className: y.separator
						}), (0, r.jsx)(a.Text, {
							variant: "text-sm/normal",
							color: "header-secondary",
							children: E.intl.format(E.t["/o1IfH"], {
								onClick: () => (0, a.ZDy)(async () => {
									let {
										default: e
									} = await Promise.all([n.e("95468"), n.e("46343")]).then(n.bind(n, 650233));
									return t => (0, r.jsx)(e, function(e) {
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
									}({}, t))
								})
							})
						})]
					})]
				})
			}
		},
		508273: function(e, t, n) {
			n.d(t, {
				Z: () => v
			}), n(388685);
			var r = n(255367),
				i = n(73800),
				l = n(120356),
				a = n.n(l),
				o = n(442837),
				s = n(481060),
				c = n(447543),
				u = n(607070),
				d = n(100527),
				p = n(906732),
				m = n(406218),
				f = n(993860),
				_ = n(328656),
				h = n(708321),
				g = n(174161),
				b = n(798476),
				E = n(358595),
				y = n(981631),
				x = n(388032),
				C = n(583136);

			function v(e) {
				let {
					invite: t,
					isMemberOfGuild: n,
					message: l,
					onTransitionToInviteChannel: c,
					onAcceptInstantInvite: d
				} = e, p = i.useRef(null), [f, h] = i.useState(!0), [v, j] = i.useState(!1), I = t.state === y.r2o.ACCEPTING, S = (0, o.e7)([u.Z], () => u.Z.useReducedMotion);
				i.useLayoutEffect(() => {
					var e, t;
					j((null != (t = null == (e = p.current) ? void 0 : e.clientHeight) ? t : 0) > 292)
				}, [j]);
				let T = (0, m.PC)(t),
					N = i.useCallback(() => {
						v && f && h(!1)
					}, [f, v]),
					P = i.useCallback(() => {
						v && (f || h(!0))
					}, [f, v]),
					A = i.useMemo(() => {
						var e;
						return v && (null == (e = p.current) ? void 0 : e.clientHeight) != null ? {
							height: f ? 292 : p.current.clientHeight + 36 + 48,
							transition: S ? void 0 : "height 0.2s ease"
						} : {}
					}, [f, v, S]);
				return null == T ? (0, r.jsx)(E.Z, {}) : (0, r.jsxs)(s.P3F, {
					className: a()(C.guildInviteContainer, {
						[C.clickable]: v && f
					}),
					onClick: N,
					style: A,
					children: [(0, r.jsxs)("div", {
						className: C.cardHeightMeasure,
						ref: p,
						children: [(0, r.jsx)(b.Z7, {
							profile: T,
							className: C.banner
						}), (0, r.jsx)(b.N3, {
							profile: T
						}), (0, r.jsx)(g.Z, {
							profile: T
						}), (0, r.jsx)(_.E, {
							profile: T,
							className: C.mainContent
						})]
					}), v && !f ? (0, r.jsx)("div", {
						className: C.hideDetailsButtonContainer,
						children: (0, r.jsx)(s.Avr, {
							textVariant: "text-xs/medium",
							variant: "secondary",
							size: "sm",
							onClick: P,
							text: x.intl.string(x.t.xdCLeH)
						})
					}) : null, (0, r.jsxs)("div", {
						className: a()(C.footer, {
							[C.floatingFooter]: v
						}),
						children: [v && f ? (0, r.jsx)("div", {
							className: C.gradient
						}) : null, (0, r.jsx)("div", {
							className: a()(C.footerContent, {
								[C.collapsedFooterContent]: v && f
							}),
							children: (0, r.jsx)("div", {
								className: C.buttonContainer,
								children: (0, r.jsx)(O, {
									invite: t,
									profile: T,
									isMemberOfGuild: n,
									message: l,
									submitting: I,
									onTransitionToInviteChannel: c,
									onAcceptInstantInvite: d
								})
							})
						})]
					})]
				})
			}

			function O(e) {
				let {
					invite: t,
					profile: n,
					isMemberOfGuild: l,
					message: a,
					submitting: o,
					onTransitionToInviteChannel: s,
					onAcceptInstantInvite: u
				} = e, {
					guildId: m,
					ctaType: _
				} = (0, f.ZP)(n, f.F3.INVITE), {
					analyticsLocations: g
				} = (0, p.ZP)(d.Z.INVITE_EMBED), b = i.useCallback(() => {
					let e = l ? "transition" : "accept";
					(0, c.r$)({
						invite: t,
						action: e,
						inviter_id: a.author.id,
						invite_message_id: a.id
					}, g)
				}, [t, a, g, l]);
				return null == _ ? null : (0, r.jsx)(h.o, {
					guildId: m,
					ctaType: _,
					submitting: o,
					onGoToGuild: s,
					onAcceptInvite: u,
					onStartApplication: u,
					onComplete: b
				})
			}
		},
		143708: function(e, t, n) {
			n.d(t, {
				Z: () => h
			});
			var r = n(255367);
			n(73800);
			var i = n(442837),
				l = n(144144),
				a = n(955415),
				o = n(665906),
				s = n(314897),
				c = n(592125),
				u = n(496675),
				d = n(585483),
				p = n(51144),
				m = n(981631),
				f = n(388032),
				_ = n(273254);

			function h(e) {
				let t, n, h, {
						author: g,
						banned: b,
						channelId: E
					} = e,
					y = (0, i.e7)([s.default], () => s.default.getId()),
					x = p.ZP.useName(g),
					C = y === g.id,
					v = (0, i.e7)([c.Z, u.Z], () => {
						let e = c.Z.getChannel(E);
						if (null == e) return !1;
						if (e.isPrivate()) return !0;
						if (e.isThread()) {
							let t = (0, o.xl)(e),
								n = u.Z.can(m.Plq.SEND_MESSAGES_IN_THREADS, e);
							return !t && n
						}
						return u.Z.can(m.Plq.SEND_MESSAGES, e)
					});
				return C ? (t = f.intl.string(f.t["F/OLvL"]), h = f.intl.string(f.t.C89OLC)) : (h = f.intl.string(f.t["YVub5+"]), b ? t = f.intl.string(f.t["57nBt7"]) : null != x && v ? (t = f.intl.formatToPlainString(f.t["9Akp1t"], {
					username: x
				}), n = (0, r.jsx)(a.Z.Button, {
					onClick: function() {
						let {
							id: e
						} = g, t = "@".concat(p.ZP.getUserTag(g, {
							decoration: "never"
						}));
						d.S.dispatchToLastSubscribed(m.CkL.INSERT_TEXT, {
							plainText: t,
							rawText: "<@".concat(e, ">")
						}), null != E && l.Z.startTyping(E)
					},
					children: f.intl.string(f.t.P8tvKC)
				})) : t = f.intl.string(f.t["SMJr+f"])), (0, r.jsxs)(a.Z, {
					children: [(0, r.jsx)(a.Z.Header, {
						text: h
					}), (0, r.jsxs)(a.Z.Body, {
						children: [(0, r.jsxs)("div", {
							className: _.headerLine,
							children: [(0, r.jsx)(a.Z.Icon, {
								expired: !0
							}), (0, r.jsx)(a.Z.Info, {
								expired: !0,
								title: f.intl.string(f.t["Jhx/ub"]),
								children: t
							})]
						}), n]
					})]
				})
			}
		},
		358595: function(e, t, n) {
			n.d(t, {
				Z: () => a
			});
			var r = n(255367);
			n(73800);
			var i = n(955415),
				l = n(388032);

			function a() {
				return (0, r.jsxs)(i.Z, {
					children: [(0, r.jsx)(i.Z.Header, {
						text: l.intl.string(l.t["N/g9Z2"])
					}), (0, r.jsx)(i.Z.Body, {
						resolving: !0
					})]
				})
			}
		},
		563917: function(e, t, n) {
			n.d(t, {
				Z: () => u
			});
			var r = n(255367),
				i = n(73800),
				l = n(447543),
				a = n(100527),
				o = n(906732),
				s = n(792766),
				c = n(955415);
			let u = e => {
				let {
					invite: t,
					stageInstance: n,
					guild: u,
					message: d,
					isMember: p,
					onTransitionToInviteChannel: m,
					onAcceptInstantInvite: f
				} = e, {
					analyticsLocations: _
				} = (0, o.ZP)(a.Z.INVITE_EMBED), h = i.useCallback(() => {
					let e = "noop";
					p ? (m(), e = "transition") : (f(), e = "accept"), (0, l.r$)({
						invite: t,
						action: e,
						inviter_id: d.author.id,
						invite_message_id: d.id
					}, _)
				}, [t, d, _, p, m, f]);
				return (0, r.jsx)(c.Z, {
					children: (0, r.jsx)(s.Z, {
						isEmbed: !0,
						stageInstance: n,
						guild: u,
						onClick: h
					})
				})
			}
		},
		135845: function(e, t, n) {
			n.d(t, {
				Z: () => C
			});
			var r = n(255367),
				i = n(73800),
				l = n(512722),
				a = n.n(l),
				o = n(442837),
				s = n(447543),
				c = n(100527),
				u = n(906732),
				d = n(955415),
				p = n(131704),
				m = n(199902),
				f = n(914010),
				_ = n(411198),
				h = n(51144),
				g = n(358595),
				b = n(981631),
				E = n(245335),
				y = n(388032),
				x = n(273254);

			function C(e) {
				let t, n, l, {
						invite: C,
						currentUserId: v,
						guild: O,
						message: j,
						onTransitionToInviteChannel: I,
						onAcceptInstantInvite: S
					} = e,
					T = null == O ? void 0 : O.id,
					N = (0, o.e7)([f.Z], () => f.Z.getGuildId()),
					P = (0, o.e7)([m.Z], () => null != C && null != C.target_user ? m.Z.getActiveStreamForUser(C.target_user.id, T) : null, [C, T]),
					A = (0, o.e7)([m.Z], () => null != C && null != C.target_user ? m.Z.getStreamForUser(C.target_user.id, T) : null, [C, T]),
					{
						analyticsLocations: w
					} = (0, u.ZP)(c.Z.INVITE_EMBED),
					Z = null != C && C.target_type === E.Iq.STREAM && null != C.target_user && null != P,
					R = null != C && null != A && null != C.channel && null != C.guild && A.channelId === C.channel.id && A.guildId === C.guild.id;
				a()(null != C, "Invite cannot be null");
				let {
					target_type: k,
					target_user: L
				} = C;
				a()(k === E.Iq.STREAM && null != L, "invalid streaming invite");
				let D = v === L.id,
					M = C.state === b.r2o.ACCEPTING,
					U = i.useCallback(() => {
						let e = "noop";
						Z ? (I(), e = "transition") : (S(), e = "accept"), (0, s.r$)({
							invite: C,
							action: e,
							inviter_id: j.author.id,
							invite_message_id: j.id
						}, w)
					}, [C, j, w, Z, I, S]),
					F = null != O;
				if (null == O) {
					if (null == C.guild) return (0, r.jsx)(g.Z, {});
					O = (0, _.Qs)(C.guild)
				}
				let B = null != C.channel ? (0, p.jD)(C.channel) : null,
					G = h.ZP.getName(L);
				F && !R ? l = D ? y.intl.string(y.t.oBLoZG) : y.intl.formatToPlainString(y.t["0QJmAw"], {
					name: G
				}) : (t = y.intl.string(y.t["I6JG4+"]), n = d.Z.Button.Colors.GREEN, Z && (t = y.intl.string(y.t["Q1W99/"]), n = d.Z.Button.Colors.PRIMARY), l = D ? y.intl.string(y.t["4hyaHh"]) : y.intl.formatToPlainString(y.t.QmlLEh, {
					name: G
				}));
				let H = N === O.id && null != B ? (0, r.jsx)(d.Z.Channel, {
					channel: B
				}) : y.intl.formatToPlainString(y.t.u0vaDA, {
					guildName: O.name
				});
				return (0, r.jsxs)(d.Z, {
					children: [(0, r.jsx)(d.Z.Header, {
						text: y.intl.string(y.t["wS+5WV"])
					}), (0, r.jsxs)(d.Z.Body, {
						children: [(0, r.jsxs)("div", {
							className: x.headerLine,
							children: [(0, r.jsx)(d.Z.Icon, {
								guild: O,
								onClick: F && R ? U : void 0
							}), (0, r.jsx)(d.Z.Info, {
								title: l,
								onClick: F && R ? U : void 0,
								children: H
							})]
						}), R ? (0, r.jsx)(d.Z.Button, {
							disabled: F && !R,
							onClick: U,
							submitting: M,
							isDisabled: Z && R,
							color: n,
							children: t
						}) : null]
					})]
				})
			}
		},
		983436: function(e, t, n) {
			n.d(t, {
				Z: () => _
			});
			var r = n(255367),
				i = n(73800),
				l = n(287734),
				a = n(475468),
				o = n(358555),
				s = n(955415),
				c = n(944486),
				u = n(914010),
				d = n(626135),
				p = n(981631),
				m = n(388032),
				f = n(273254);

			function _(e) {
				let {
					guild: t,
					channel: n,
					message: _
				} = e, h = u.Z.getGuildId(), g = c.Z.getChannelId(h), b = i.useCallback(() => {
					var e;
					d.default.track(p.rMx.CHANNEL_LINK_PREVIEW_JOINED, {
						author_id: null == (e = _.author) ? void 0 : e.id,
						link_guild_id: t.id,
						link_channel_id: n.id,
						link_channel_type: n.type,
						guild_id: h,
						channel_id: g
					}), (0, a.K)(t.id, n.id), l.default.selectVoiceChannel(n.id)
				}, [_, t, n, h, g]), E = (0, r.jsx)(s.Z.Channel, {
					channel: n
				});
				return (0, r.jsx)(s.Z, {
					children: (0, r.jsxs)(s.Z.Body, {
						children: [(0, r.jsxs)("div", {
							className: f.headerLine,
							children: [(0, r.jsx)(s.Z.Icon, {
								guild: t
							}), (0, r.jsx)(s.Z.Info, {
								title: E,
								onClick: b,
								children: (0, r.jsxs)("span", {
									className: f.infoTitle,
									children: [m.intl.format(m.t["2wimj4"], {
										guildName: t.name
									}), (0, r.jsx)("span", {
										className: f.infoBadge,
										children: (0, r.jsx)(o.Z, {
											guild: t,
											isBannerVisible: !1
										})
									})]
								})
							})]
						}), (0, r.jsx)(s.Z.Button, {
							onClick: b,
							color: s.Z.Button.Colors.GREEN,
							children: n.isGuildStageVoice() ? m.intl.string(m.t["7vb2cX"]) : m.intl.string(m.t["96ANUF"])
						})]
					})
				})
			}
		},
		438075: function(e, t, n) {
			n.d(t, {
				Q: () => o,
				Z: () => a
			});
			var r = n(255367);
			n(73800);
			var i = n(275344),
				l = n(938353);

			function a(e) {
				let {
					channelMessageProps: {
						message: t,
						channel: n,
						compact: a = !1
					},
					hasSpoilerEmbeds: o,
					handleContextMenu: s,
					isInteracting: c,
					isAutomodBlockedMessage: u,
					isMessageSnapshot: d,
					renderThreadAccessory: p,
					renderSuppressEmbeds: m,
					renderReactions: f,
					forceAddReactions: _,
					disableComponentInteractivity: h,
					className: g
				} = e;
				return u ? null : (0, r.jsx)(i.Z, {
					message: t,
					children: (0, r.jsx)(l.ZP, {
						className: g,
						isInteracting: c,
						message: t,
						channel: n,
						compact: a,
						hasSpoilerEmbeds: o,
						isMessageSnapshot: d,
						onMediaItemContextMenu: s,
						renderThreadAccessory: p,
						disableComponentInteractivity: h,
						renderSuppressEmbeds: m,
						forceAddReactions: _,
						renderReactions: f
					})
				})
			}

			function o(e, t) {
				let {
					message: n,
					channel: i,
					compact: a = !1,
					renderThreadAccessory: o,
					disableReactionCreates: s,
					disableReactionUpdates: c,
					isSearchResult: u
				} = e;
				return (0, r.jsx)(l.$p, {
					message: n,
					channel: i,
					compact: a,
					hasSpoilerEmbeds: t,
					renderThreadAccessory: o,
					disableReactionCreates: s,
					disableReactionUpdates: c,
					isSearchResult: u
				})
			}
		},
		963550: function(e, t, n) {
			n.d(t, {
				Z: () => l
			});
			var r = n(255367);
			n(73800);
			var i = n(930282);

			function l(e, t) {
				let {
					message: n,
					compact: l
				} = e;
				return (0, r.jsx)(i.ZP, {
					message: n,
					content: t,
					compact: null != l && l
				})
			}
		},
		845080: function(e, t, n) {
			n.d(t, {
				Z: () => s
			});
			var r = n(255367),
				i = n(73800),
				l = n(901461),
				a = n(464891);
			let o = i.memo(a.ZP);

			function s(e) {
				let {
					message: t,
					channel: n,
					author: i,
					compact: a,
					animateAvatar: s,
					guildId: c,
					isGroupStart: u = !0,
					roleIcon: d,
					hideTimestamp: p,
					preview: m
				} = e;
				return !(0, l.Z)(t) && (u || a) ? (0, r.jsx)(o, {
					message: t,
					channel: n,
					author: i,
					guildId: c,
					compact: a,
					animate: s,
					roleIcon: d,
					hideTimestamp: p,
					preview: m
				}) : void 0
			}
		},
		295790: function(e, t, n) {
			n.d(t, {
				Z: () => a
			});
			var r = n(255367);
			n(73800);
			var i = n(901461),
				l = n(815387);

			function a(e) {
				let {
					message: t,
					channel: n,
					compact: a,
					disableInteraction: o
				} = e;
				return (0, i.Z)(t) ? (0, r.jsx)(l.Z, {
					message: t,
					channel: n,
					compact: a,
					disableInteraction: o
				}) : null
			}
		},
		145807: function(e, t, n) {
			n.d(t, {
				Z: () => s
			});
			var r = n(255367);
			n(73800);
			var i = n(442837),
				l = n(699516),
				a = n(697451);

			function o(e) {
				let {
					message: t,
					channel: n,
					compact: o
				} = e, s = (0, i.e7)([l.Z], () => null != t.interaction && l.Z.isBlocked(t.interaction.user.id), [t.interaction]);
				return (0, r.jsx)(a.Z, {
					message: t,
					channel: n,
					compact: o,
					isInteractionUserBlocked: s
				})
			}

			function s(e, t, n) {
				return null != e.interaction && "" !== e.interaction.displayName ? (0, r.jsx)(o, {
					message: e,
					channel: t,
					compact: n
				}) : null
			}
		},
		56744: function(e, t, n) {
			n.d(t, {
				Z: () => f
			});
			var r = n(255367),
				i = n(73800),
				l = n(442837),
				a = n(905405),
				o = n(869765),
				s = n(699516),
				c = n(937889),
				u = n(739566),
				d = n(267128),
				p = n(981631);
			let m = i.memo(function(e) {
				let {
					baseMessage: t,
					channel: n,
					referencedMessage: p,
					compact: m = !1
				} = e, f = p.state === o.Y.LOADED ? p.message : void 0, _ = (0, a.p)(), h = i.useMemo(() => (null == f ? void 0 : f.content) != null && "" !== f.content ? (0, c.ZP)(f, {
					formatInline: !0,
					shouldFilterKeywords: _
				}).content : null, [f, _]), {
					isReplyAuthorBlocked: g,
					isReplyAuthorIgnored: b
				} = (0, l.cj)([s.Z], () => ({
					isReplyAuthorBlocked: null != f && s.Z.isBlockedForMessage(f),
					isReplyAuthorIgnored: null != f && s.Z.isIgnoredForMessage(f)
				}), [f]), E = (0, u.Uj)(f), y = (0, u.Uj)(t);
				return (0, r.jsx)(d.Z, {
					repliedAuthor: E,
					baseAuthor: y,
					baseMessage: t,
					channel: n,
					referencedMessage: p,
					content: h,
					compact: m,
					isReplyAuthorBlocked: g,
					isReplyAuthorIgnored: b,
					isReplySpineClickable: !1,
					showReplySpine: !0
				})
			});

			function f(e, t, n, i, l) {
				return e.type !== p.uaV.REPLY || null == n ? null : (0, r.jsx)(m, {
					baseMessage: e,
					channel: t,
					referencedMessage: i,
					compact: l
				})
			}
		},
		33803: function(e, t, n) {
			n.d(t, {
				Z: () => ee
			}), n(642613);
			var r = n(255367),
				i = n(73800),
				l = n(120356),
				a = n.n(l),
				o = n(913527),
				s = n.n(o),
				c = n(91192),
				u = n(722770),
				d = n(442837),
				p = n(481060),
				m = n(287734),
				f = n(607070),
				_ = n(385499),
				h = n(313889),
				g = n(825829),
				b = n(226192),
				E = n(36459),
				y = n(336197),
				x = n(359110),
				C = n(726033),
				v = n(496675),
				O = n(594174),
				j = n(5192),
				I = n(51144),
				S = n(937889),
				T = n(739566),
				N = n(779125),
				P = n(890410),
				A = n(464891),
				w = n(507418),
				Z = n(348238),
				R = n(38267),
				k = n(605568),
				L = n(834129),
				D = n(959517),
				M = n(981631),
				U = n(674563),
				F = n(590433),
				B = n(388032),
				G = n(860918);

			function H(e) {
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

			function V(e, t) {
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

			function z(e, t) {
				if (null == e) return {};
				var n, r, i = function(e, t) {
					if (null == e) return {};
					var n, r, i = {},
						l = Object.keys(e);
					for (r = 0; r < l.length; r++) n = l[r], t.indexOf(n) >= 0 || (i[n] = e[n]);
					return i
				}(e, t);
				if (Object.getOwnPropertySymbols) {
					var l = Object.getOwnPropertySymbols(e);
					for (r = 0; r < l.length; r++) n = l[r], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n])
				}
				return i
			}

			function W(e, t) {
				let {
					popouts: n,
					selected: r,
					setPopout: l
				} = (0, R.Z)(e.id, D.d$), {
					usernameProfile: a,
					avatarProfile: o
				} = n, s = (0, Z.wq)(e.author.id, t.id), c = (0, Z.RN)(e.author.id, t.id, e.id), u = (0, Z.XO)(e, t, a, l);
				return {
					selected: r,
					onContextMenu: s,
					onContextMenuModerateUser: c,
					onClickUsername: u,
					onClickAvatar: (0, Z.R9)(o, l),
					onPopoutRequestClose: i.useCallback(() => l({
						usernameProfile: !1,
						avatarProfile: !1,
						referencedUsernameProfile: !1
					}), [l]),
					renderPopout: w.Z,
					showAvatarPopout: o,
					showUsernamePopout: a
				}
			}

			function K(e, t, n) {
				return i.useMemo(() => {
					if (null != t && null != n) return i => (0, r.jsx)(C.Z, V(H({}, i), {
						user: t,
						currentUser: n,
						guildId: e.guild_id,
						channelId: e.id
					}))
				}, [e, t, n])
			}

			function Y(e) {
				let {
					children: t,
					className: n,
					compact: i
				} = e;
				return (0, r.jsx)("div", {
					className: a()(G.footerContainer, n, {
						[G.compact]: i
					}),
					children: t
				})
			}

			function X(e) {
				let {
					children: t,
					className: n
				} = e;
				return (0, r.jsx)("div", {
					className: a()(G.annotationRow, n),
					children: t
				})
			}

			function q(e, t) {
				switch (e) {
					case h.d.DELETE_USER_MESSAGE:
						return (0, r.jsx)(p.XHJ, H({
							size: "xs",
							color: "currentColor",
							className: G.alertActionIcon
						}, t));
					case h.d.SET_COMPLETED:
						return (0, r.jsx)(p.dz2, H({
							size: "xs",
							color: "currentColor",
							className: a()(G.alertActionIcon, G.alertActionSetCompletedIcon)
						}, t));
					case h.d.SUBMIT_FEEDBACK:
						return (0, r.jsx)(p.U65, H({
							size: "xs",
							color: "currentColor",
							className: G.alertActionIcon
						}, t));
					default:
						return null
				}
			}

			function Q(e) {
				let {
					alertAction: t,
					guildId: n
				} = e, i = (0, d.e7)([O.default], () => O.default.getUser(t.actor), [t.actor]);
				try {
					let e = parseInt(t.actionType);
					if (null == i) return q(e, {});
					let l = function(e, t, n) {
						var r;
						let i = null != (r = j.ZP.getNickname(n, null, t)) ? r : I.ZP.getUserTag(t),
							l = s()(e.ts),
							a = "".concat(i, " ").concat(l.fromNow());
						try {
							switch (parseInt(e.actionType)) {
								case h.d.DELETE_USER_MESSAGE:
									return B.intl.formatToPlainString(B.t.BtKE9v, {
										userName: i,
										timestamp: l.fromNow()
									});
								case h.d.SET_COMPLETED:
									return B.intl.formatToPlainString(B.t.dyo9UV, {
										userName: i,
										timestamp: l.fromNow()
									});
								case h.d.SUBMIT_FEEDBACK:
									return B.intl.formatToPlainString(B.t["C9/kIC"], {
										userName: i,
										timestamp: l.fromNow()
									});
								default:
									return a
							}
						} catch (e) {
							return a
						}
					}(t, i, n);
					return (0, r.jsx)(p.ua7, {
						text: l,
						children: t => q(e, t)
					})
				} catch (e) {
					return null
				}
			}

			function J(e) {
				let {
					alertActionsExecution: t,
					guildId: n
				} = e, i = Object.values(t.actions).sort((e, t) => e.actionType < t.actionType ? 1 : -1);
				return (0, r.jsx)("div", {
					className: G.alertActionsIconContainer,
					children: i.map(e => (0, r.jsx)(Q, {
						alertAction: e,
						guildId: n
					}, e.actionType))
				})
			}
			let $ = i.memo(function(e) {
				let t, {
						message: n,
						channel: i,
						embedChannel: l,
						compact: a,
						interactionUserId: o
					} = e,
					s = W(n, i),
					c = K(i, n.author),
					u = (0, T.ZP)(n),
					d = (0, A.CF)(H({
						message: n,
						channel: i,
						author: u,
						guildId: null == i ? void 0 : i.guild_id,
						compact: a
					}, s), c),
					m = O.default.getUser(o),
					f = W(n, i),
					_ = K(i, m, O.default.getCurrentUser());
				if (null != m) {
					let e = (0, T.ij)(m, i),
						r = (0, A.CF)(H({
							message: n,
							channel: i,
							author: e,
							guildId: null == i ? void 0 : i.guild_id,
							compact: a
						}, f), _);
					t = () => r
				}
				return (0, r.jsx)(p.Text, {
					variant: "text-md/normal",
					color: "header-primary",
					tag: "span",
					className: G.spanCorrection,
					children: (0, g.Mq)(n, l, () => (0, r.jsx)("div", {
						className: G.channelNameContainer,
						children: (0, r.jsx)(N.Z, {
							channel: l,
							className: G.channelName,
							openChatWithoutConnecting: !0
						})
					}), () => d, t)
				})
			});

			function ee(e) {
				var t;
				let {
					id: n,
					compact: l,
					message: o,
					channel: s
				} = e, {
					avatarSrc: C,
					eventHandlers: {
						onMouseEnter: O,
						onMouseLeave: j
					}
				} = (0, k.m)(!0), I = (0, c.JA)(null != n ? n : ""), {
					onFocus: T
				} = I, N = z(I, ["onFocus"]), {
					isFocused: w,
					handleFocus: R,
					handleBlur: D
				} = (0, Z.bb)(T), K = (0, d.e7)([f.Z], () => f.Z.keyboardModeEnabled), q = (0, d.e7)([v.Z], () => v.Z.can(M.Plq.MANAGE_MESSAGES, s), [s]), {
					ruleName: Q,
					embedChannel: ee,
					decisionId: et,
					keywordMatchedContent: en,
					keyword: er,
					content: ei,
					flaggedMessageId: el,
					timeoutDuration: ea,
					decisionReason: eo,
					alertActionsExecution: es,
					quarantineType: ec,
					interactionUserId: eu
				} = (0, g.ZP)(o), ed = i.useMemo(() => (0, S.k$)(ei, en, s.id), [ei, en, s]), ep = W(o, s), {
					selected: em
				} = ep, ef = z(ep, ["selected"]), e_ = i.useCallback(() => {
					(0, b._s)(o.id, ei, et, s)
				}, [o.id, ei, et, s]), eh = i.useCallback(e => {
					null != el && null != ee && (e.stopPropagation(), e.preventDefault(), (0, y.Z)(M.Z5c.CHANNEL(null == ee ? void 0 : ee.guild_id, null == ee ? void 0 : ee.id, el)))
				}, [ee, el]), eg = i.useCallback(e => {
					null != ee && (m.default.selectChannel({
						guildId: ee.guild_id,
						channelId: e,
						messageId: o.id
					}), (0, x.Kh)(e))
				}, [o, ee]), eb = i.useCallback(() => {
					(0, E.Xx)(o.id, s, h.d.DELETE_USER_MESSAGE)
				}, [s, o.id]), eE = (0, F.L9)(Number(ea)), ey = null != eo, ex = q && null != el && (null == es || !es.actions.hasOwnProperty(h.d.DELETE_USER_MESSAGE)), eC = o.embeds.length > 0 ? null == (t = o.embeds[0].fields.find(e => "channel_id" === e.rawName)) ? void 0 : t.rawValue : null, ev = null != eC;
				return (0, r.jsx)("div", {
					onMouseEnter: O,
					onMouseLeave: j,
					children: (0, r.jsx)(L.Z, {
						className: a()(G.mainContainer, {
							[G.compact]: l
						}),
						iconNode: l ? null : (0, r.jsx)(k.S, {
							src: C
						}),
						iconContainerClassName: G.iconContainer,
						compact: l,
						children: (0, r.jsxs)("div", {
							className: a()(G.content, {
								[G.compact]: l
							}),
							children: [(0, r.jsx)(A.nD, {
								message: o,
								messageClassname: G.spanCorrection,
								className: a()(G.usernameContainer, G.spanCorrection, {
									[G.compact]: l
								}),
								username: (0, r.jsxs)("div", {
									className: G.spanCorrection,
									children: [(0, r.jsx)(p.Text, {
										variant: "text-md/normal",
										color: "text-brand",
										tag: "span",
										className: G.username,
										children: B.intl.string(B.t.hG1StL)
									}), (0, r.jsx)(_.Z, {
										type: U.Hb.SYSTEM_DM,
										className: G.systemTag
									}), (0, r.jsx)($, {
										message: o,
										channel: s,
										embedChannel: ee,
										compact: l,
										interactionUserId: eu
									})]
								}),
								compact: l,
								showTimestamp: !0
							}), (0, r.jsx)("div", {
								className: a()(G.messageContent, {
									[G.compact]: l
								}),
								children: (0, r.jsx)(P.Z, V(H({}, N), {
									message: o,
									channel: ee,
									content: ed,
									compact: l,
									withFooter: !0,
									hideTimestamp: !0,
									className: a()(G.embedCard, {
										[G.compact]: l,
										[G.selected]: em || K && w,
										[G.isClickable]: null != el && null != ee
									}),
									childrenAccessories: (0, r.jsxs)(r.Fragment, {
										children: [(0, r.jsxs)("div", {
											className: G.centeredRowContainer,
											children: [null != er && (0, r.jsxs)(r.Fragment, {
												children: [(0, r.jsx)(p.Text, {
													variant: "text-xs/medium",
													color: "text-muted",
													tag: "span",
													children: B.intl.format(B.t.SYIUTU, {
														keyword: er
													})
												}), (0, r.jsx)("div", {
													className: a()(G.dot, G.dotMargin)
												})]
											}), null != Q && (0, r.jsx)(p.Text, {
												variant: "text-xs/medium",
												color: "text-muted",
												tag: "span",
												children: B.intl.format(B.t.ZoOyKC, {
													ruleName: Q
												})
											}), null != eE && (0, r.jsxs)(r.Fragment, {
												children: [(0, r.jsx)("div", {
													className: a()(G.dot, G.dotMargin)
												}), (0, r.jsx)(p.Text, {
													variant: "text-xs/medium",
													color: "text-muted",
													tag: "span",
													className: G.__invalid_footerText,
													children: B.intl.format(B.t["3LYql5"], {
														duration: eE
													})
												})]
											}), null != ec && (0, r.jsxs)(r.Fragment, {
												children: [(0, r.jsx)("div", {
													className: a()(G.dot, G.dotMargin)
												}), (0, r.jsx)(p.Text, {
													variant: "text-xs/medium",
													color: "text-muted",
													tag: "span",
													className: G.titleCase,
													children: B.intl.format(B.t["26bB2N"], {
														reason: (0, g.hU)(ec)
													})
												})]
											})]
										}), ey ? (0, r.jsx)(X, {
											children: (0, r.jsx)(p.Text, {
												variant: "text-xs/medium",
												color: "text-default",
												tag: "span",
												children: eo
											})
										}) : null]
									}),
									popoutProps: ef,
									zalgo: !0,
									onFocus: R,
									onBlur: D,
									onClick: eh
								}))
							}), (0, r.jsx)(Y, {
								compact: l,
								children: (0, r.jsxs)("div", {
									className: a()(G.centeredRowContainer, G.buttonContainer, {
										[G.compact]: l
									}),
									children: [(0, r.jsxs)("div", {
										className: G.footerAction,
										children: [(0, r.jsx)(p.b7C, {
											size: "xs",
											color: u.Z.BRAND,
											className: G.footerIcon
										}), (0, r.jsx)(p.Avr, {
											variant: "primary",
											size: "sm",
											textVariant: "text-xs/normal",
											text: B.intl.string(B.t.DEoVWV),
											onClick: e => {
												var t;
												null == (t = ef.onContextMenuModerateUser) || t.call(ef, e)
											}
										})]
									}), ev ? (0, r.jsxs)(r.Fragment, {
										children: [(0, r.jsx)("div", {
											className: G.dot
										}), (0, r.jsx)("div", {
											className: G.footerAction,
											children: (0, r.jsx)(p.Avr, {
												onClick: () => eg(eC),
												variant: "primary",
												size: "sm",
												textVariant: "text-xs/normal",
												text: B.intl.string(B.t.jtkj09)
											})
										})]
									}) : null, (0, r.jsx)("div", {
										className: G.dot
									}), (0, r.jsx)("div", {
										className: G.footerAction,
										children: (0, r.jsx)(p.Avr, {
											onClick: e_,
											variant: "primary",
											size: "sm",
											textVariant: "text-xs/normal",
											text: B.intl.string(B.t["94JbMz"])
										})
									}), ex ? (0, r.jsxs)(r.Fragment, {
										children: [(0, r.jsx)("div", {
											className: G.dot
										}), (0, r.jsx)("div", {
											className: G.footerAction,
											children: (0, r.jsx)(p.Avr, {
												onClick: eb,
												variant: "primary",
												size: "sm",
												textVariant: "text-xs/normal",
												text: B.intl.string(B.t["3A52tb"])
											})
										})]
									}) : null, null != es ? (0, r.jsx)(J, {
										alertActionsExecution: es,
										guildId: s.guild_id
									}) : null]
								})
							})]
						})
					})
				})
			}
		},
		9423: function(e, t, n) {
			n.d(t, {
				Z: () => s
			});
			var r = n(255367);
			n(73800);
			var i = n(825829),
				l = n(33803),
				a = n(517820);

			function o(e) {
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

			function s(e) {
				var {
					message: t
				} = e, n = function(e, t) {
					if (null == e) return {};
					var n, r, i = function(e, t) {
						if (null == e) return {};
						var n, r, i = {},
							l = Object.keys(e);
						for (r = 0; r < l.length; r++) n = l[r], t.indexOf(n) >= 0 || (i[n] = e[n]);
						return i
					}(e, t);
					if (Object.getOwnPropertySymbols) {
						var l = Object.getOwnPropertySymbols(e);
						for (r = 0; r < l.length; r++) n = l[r], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n])
					}
					return i
				}(e, ["message"]);
				return (0, i.OP)(t) ? (0, r.jsx)(a.Z, o({
					message: t
				}, n)) : (0, r.jsx)(l.Z, o({
					message: t
				}, n))
			}
		},
		605568: function(e, t, n) {
			n.d(t, {
				S: () => f,
				m: () => m
			}), n(388685);
			var r = n(255367),
				i = n(73800),
				l = n(442837),
				a = n(481060),
				o = n(607070),
				s = n(426563),
				c = n(998502),
				u = n(388032),
				d = n(860918);
			let p = c.ZP.getEnableHardwareAcceleration() ? a.Xo$ : a.qEK;

			function m() {
				let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
					[t, n] = i.useState(!1),
					r = (0, l.e7)([o.Z], () => o.Z.useReducedMotion),
					a = i.useMemo(() => {
						let n = t || !r && !e;
						return (0, s.j)(n)
					}, [t, r, e]);
				return {
					avatarSrc: a,
					eventHandlers: {
						onMouseEnter: i.useCallback(() => n(!0), []),
						onMouseLeave: i.useCallback(() => n(!1), [])
					}
				}
			}

			function f(e) {
				let {
					src: t
				} = e;
				return (0, r.jsx)("div", {
					className: d.avatarContainer,
					children: (0, r.jsx)(p, {
						src: t,
						size: a.EFr.SIZE_40,
						"aria-label": u.intl.string(u.t.hG1StL)
					})
				})
			}
		},
		517820: function(e, t, n) {
			n.d(t, {
				Z: () => W
			});
			var r = n(255367),
				i = n(73800),
				l = n(120356),
				a = n.n(l),
				o = n(913527),
				s = n.n(o),
				c = n(722770),
				u = n(320285),
				d = n(688813),
				p = n(442837),
				m = n(692547),
				f = n(481060),
				_ = n(256638),
				h = n(385499),
				g = n(528011),
				b = n(533244),
				E = n(825829),
				y = n(226192),
				x = n(36459),
				C = n(434404),
				v = n(518950),
				O = n(670188),
				j = n(592125),
				I = n(271383),
				S = n(594174),
				T = n(464891),
				N = n(348238),
				P = n(605568),
				A = n(834129),
				w = n(981631),
				Z = n(674563),
				R = n(388032),
				k = n(126759);

			function L(e) {
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

			function D(e, t) {
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

			function M() {
				return (0, r.jsx)("div", {
					className: k.dot
				})
			}

			function U(e) {
				let {
					message: t,
					compact: n
				} = e, {
					notificationType: i
				} = (0, E.FL)(t);
				switch (i) {
					case E.nj:
					case u.p.RAID:
						return (0, r.jsx)(H, {
							message: t,
							compact: n
						});
					case u.p.MENTION_RAID:
						return (0, r.jsx)(V, {
							message: t,
							compact: n
						});
					case u.p.ACTIVITY_ALERTS_ENABLED:
						return (0, r.jsx)(G, {
							message: t,
							compact: n
						});
					case u.p.INTERACTION_BLOCKED:
						return (0, r.jsx)(B, {
							compact: n
						});
					default:
						return (0, r.jsx)(F, {
							compact: n
						})
				}
			}

			function F(e) {
				let {
					compact: t
				} = e;
				return (0, r.jsx)(z, {
					compact: t,
					header: (0, r.jsxs)(i.Fragment, {
						children: [(0, r.jsx)(f.P4T, {
							size: "xs",
							color: m.Z.colors.HEADER_SECONDARY.css
						}), (0, r.jsx)(f.Text, {
							variant: "text-md/semibold",
							color: "header-secondary",
							children: R.intl.string(R.t.VdZCcH)
						})]
					}),
					content: (0, r.jsx)(f.Text, {
						variant: "text-md/normal",
						color: "text-muted",
						children: R.intl.string(R.t.NxHYX1)
					})
				})
			}

			function B(e) {
				let {
					compact: t
				} = e;
				return (0, r.jsx)(z, {
					compact: t,
					header: (0, r.jsxs)(i.Fragment, {
						children: [(0, r.jsx)(f.P4T, {
							size: "xs",
							color: m.Z.colors.HEADER_SECONDARY.css
						}), (0, r.jsx)(f.Text, {
							variant: "text-md/semibold",
							color: "header-secondary",
							children: R.intl.string(R.t["2qTBw8"])
						})]
					}),
					content: (0, r.jsx)(f.Text, {
						variant: "text-md/normal",
						color: "text-muted",
						children: R.intl.string(R.t.Dc9wCg)
					})
				})
			}

			function G(e) {
				var t;
				let {
					message: n,
					compact: l
				} = e, a = S.default.getUser((0, E.Sw)(n)), o = null == (t = j.Z.getBasicChannel(n.channel_id)) ? void 0 : t.guild_id, c = null != o && null != a ? I.ZP.getMember(o, a.id) : null, {
					avatarSrc: u,
					avatarDecorationSrc: d,
					eventHandlers: p
				} = (0, v.Z)({
					userId: null == a ? void 0 : a.id,
					guildId: o,
					size: 12
				}), _ = i.useRef(null);
				return (0, r.jsx)(z, {
					compact: l,
					header: (0, r.jsxs)(i.Fragment, {
						children: [(0, r.jsx)(f.bgT, {
							size: "xs",
							color: m.Z.colors.TEXT_FEEDBACK_POSITIVE.css
						}), (0, r.jsx)(f.Text, {
							variant: "text-md/semibold",
							color: "text-feedback-positive",
							children: R.intl.string(R.t.lVLiFh)
						})]
					}),
					subheader: (0, r.jsxs)("div", {
						className: k.dotSeparatedRow,
						children: [(0, r.jsx)("div", {
							className: k.alertsEnabledSubHeader,
							children: null != c && null != a && (0, r.jsxs)(i.Fragment, {
								children: [(0, r.jsx)(f.Text, {
									variant: "text-xs/medium",
									color: "text-default",
									children: R.intl.string(R.t.qlFrXV)
								}), (0, r.jsx)(O.Z, {
									targetElementRef: _,
									user: a,
									guildId: o,
									channelId: n.channel_id,
									messageId: n.id,
									children: e => (0, r.jsxs)(f.P3F, D(L({
										innerRef: _,
										className: k.alertsEnabledSubHeaderAvatarUsername
									}, e), {
										children: [(0, r.jsx)("div", D(L({}, p), {
											children: (0, r.jsx)(f.qEK, {
												src: u,
												avatarDecoration: d,
												size: f.EFr.SIZE_16,
												"aria-label": "TODO"
											})
										})), (0, r.jsxs)(f.Text, {
											variant: "text-xs/medium",
											style: {
												color: null != c.colorString ? c.colorString : m.Z.colors.TEXT_DEFAULT.css
											},
											children: [" ", "@", a.username]
										})]
									}))
								})]
							})
						}), (0, r.jsx)(M, {}), (0, r.jsx)(f.Text, {
							variant: "text-xs/medium",
							color: "text-default",
							children: s()(n.timestamp).fromNow()
						})]
					}),
					content: (0, r.jsx)(f.Text, {
						variant: "text-md/normal",
						color: "text-muted",
						children: R.intl.string(R.t["QV/8u7"])
					})
				})
			}

			function H(e) {
				var t;
				let {
					message: n,
					compact: l
				} = e, {
					joinAttempts: a,
					raidDatetime: o,
					dmsSent: u,
					raidType: _,
					resolvedReason: h
				} = (0, E.FL)(n), x = (0, p.e7)([j.Z], () => j.Z.getChannel(n.channel_id), [n.channel_id]), C = null != (t = null == x ? void 0 : x.guild_id) ? t : null, {
					shouldShowIncidentActions: v
				} = (0, g.mI)(C), O = (0, N.sR)(n.author.id, n.channel_id), I = i.useCallback(() => {
					let e = null == x ? void 0 : x.guild_id;
					null != e && (0, y.kW)(n.id, e)
				}, [n.id, x]), S = _ === d.$.DM_RAID, T = S ? f.P4T : f.b6m;
				return (0, r.jsx)(z, {
					compact: l,
					header: (0, r.jsxs)(i.Fragment, {
						children: [(0, r.jsx)(T, {
							size: "xs",
							color: m.Z.colors.TEXT_DANGER.css
						}), (0, r.jsx)(f.Text, {
							variant: "text-md/semibold",
							color: "text-danger",
							children: S ? R.intl.string(R.t["8+lHUV"]) : R.intl.string(R.t.xMwcwc)
						})]
					}),
					subheader: (0, r.jsxs)("div", {
						className: k.dotSeparatedRow,
						children: [null != a && (0, r.jsx)(f.Text, {
							variant: "text-xs/medium",
							color: "text-default",
							children: R.intl.format(R.t["4ylIio"], {
								joinCount: a
							})
						}), null != u && (0, r.jsx)(f.Text, {
							variant: "text-xs/medium",
							color: "text-default",
							children: R.intl.format(R.t["5C8Mh4"], {
								dmsSent: u
							})
						}), null != o && (0, r.jsxs)(i.Fragment, {
							children: [(0, r.jsx)(M, {}), (0, r.jsx)(f.Text, {
								variant: "text-xs/medium",
								color: "text-default",
								children: s()(o).fromNow()
							})]
						})]
					}),
					content: null != o ? (0, r.jsx)(f.Text, {
						variant: "text-md/normal",
						color: "text-muted",
						children: R.intl.format(R.t["4QIIZm"], {
							dateTime: o.toLocaleString(R.intl.currentLocale, b.pQ)
						})
					}) : null,
					footerButtons: v ? (0, r.jsxs)("div", {
						className: k.footerRow,
						children: [(0, r.jsxs)("div", {
							className: k.footerAction,
							children: [(0, r.jsx)(f.b7C, {
								size: "xs",
								color: c.Z.BRAND,
								className: k.footerIcon
							}), (0, r.jsx)(f.Avr, {
								variant: "primary",
								size: "sm",
								textVariant: "text-xs/medium",
								text: R.intl.string(R.t.DEoVWV),
								onClick: e => {
									O(e)
								}
							})]
						}), (0, r.jsx)(M, {}), (0, r.jsx)("div", {
							className: k.footerAction,
							children: (0, r.jsx)(f.Avr, {
								variant: "primary",
								textVariant: "text-xs/medium",
								size: "sm",
								text: (0, E.ge)(h),
								onClick: I
							})
						})]
					}) : null
				})
			}

			function V(e) {
				var t;
				let {
					message: n,
					compact: l
				} = e, a = null == (t = j.Z.getBasicChannel(n.channel_id)) ? void 0 : t.guild_id, {
					raidDatetime: o,
					decisionId: c,
					suspiciousMentionActivityUntil: u
				} = (0, E.FL)(n);
				return (0, r.jsx)(z, {
					compact: l,
					header: (0, r.jsxs)(i.Fragment, {
						children: [(0, r.jsx)(f.P4T, {
							size: "xs",
							color: m.Z.colors.TEXT_DANGER.css
						}), (0, r.jsx)(f.Text, {
							variant: "text-md/semibold",
							color: "text-danger",
							children: R.intl.string(R.t.C2uIXF)
						})]
					}),
					subheader: (0, r.jsx)("div", {
						className: k.dotSeparatedRow,
						children: null != o && (0, r.jsx)(f.Text, {
							variant: "text-xs/medium",
							color: "text-default",
							children: s()(o).fromNow()
						})
					}),
					content: (0, r.jsx)(f.Text, {
						variant: "text-md/normal",
						color: "text-muted",
						children: R.intl.string(R.t.SWIWER)
					}),
					footerButtons: (0, r.jsxs)("div", {
						className: k.footerRow,
						children: [(0, r.jsx)("div", {
							className: k.footerAction,
							children: (0, r.jsx)(f.Avr, {
								variant: "primary",
								textVariant: "text-xs/medium",
								size: "sm",
								text: R.intl.string(R.t.oX14Eh),
								onClick: function() {
									null != a && null != c && (0, x.UE)(a, c, () => {
										(0, _.c)(u), (0, x.T9)(a)
									})
								}
							})
						}), (0, r.jsx)(M, {}), (0, r.jsx)("div", {
							className: k.footerAction,
							children: (0, r.jsx)(f.Avr, {
								variant: "primary",
								textVariant: "text-xs/medium",
								size: "sm",
								text: R.intl.string(R.t["1R7QIy"]),
								onClick: function() {
									null != a && C.Z.open(a, w.pNK.GUILD_AUTOMOD, void 0, w.KsC.AUTOMOD_MENTION_SPAM)
								}
							})
						})]
					})
				})
			}

			function z(e) {
				let {
					compact: t,
					header: n,
					subheader: i,
					content: l,
					footerButtons: o
				} = e;
				return (0, r.jsxs)("div", {
					className: a()(k.embedCard, {
						[k.compact]: t
					}),
					children: [(0, r.jsxs)("div", {
						className: k.cardContent,
						children: [(0, r.jsxs)("div", {
							className: k.cardHeaderContianer,
							children: [(0, r.jsx)("div", {
								className: k.cardHeader,
								children: n
							}), null != i && (0, r.jsx)("div", {
								className: k.subheader,
								children: i
							})]
						}), l]
					}), null != o && (0, r.jsx)("div", {
						className: a()(k.centeredRowContainer, k.cardFooter, {
							[k.compact]: t
						}),
						children: o
					})]
				})
			}

			function W(e) {
				let {
					id: t,
					compact: n,
					message: i,
					channel: l
				} = e, {
					avatarSrc: o,
					eventHandlers: {
						onMouseEnter: s,
						onMouseLeave: c
					}
				} = (0, P.m)(!0), {
					notificationType: d
				} = (0, E.FL)(i), p = null == d || d === u.p.RAID;
				return (0, r.jsx)("div", {
					onMouseEnter: s,
					onMouseLeave: c,
					children: (0, r.jsx)(A.Z, {
						className: a()(k.mainContainer, {
							[k.compact]: n
						}),
						iconNode: n ? null : (0, r.jsx)(P.S, {
							src: o
						}),
						iconContainerClassName: k.iconContainer,
						compact: n,
						children: (0, r.jsxs)("div", {
							className: a()(k.content, {
								[k.compact]: n
							}),
							children: [(0, r.jsx)(T.nD, {
								message: i,
								messageClassname: k.spanCorrection,
								className: a()(k.usernameContainer, k.spanCorrection, {
									[k.compact]: n
								}),
								username: (0, r.jsxs)("div", {
									className: k.spanCorrection,
									children: [(0, r.jsx)(f.Text, {
										variant: "text-md/normal",
										color: "text-brand",
										tag: "span",
										className: k.username,
										children: R.intl.string(R.t.hG1StL)
									}), (0, r.jsx)(h.Z, {
										type: Z.Hb.SYSTEM_DM,
										className: k.systemTag
									}), p && (0, r.jsx)(f.Text, {
										variant: "text-md/normal",
										color: "header-primary",
										tag: "span",
										className: k.spanCorrection,
										children: R.intl.string(R.t.ufawc3)
									})]
								}),
								compact: n,
								showTimestamp: !0
							}), (0, r.jsx)("div", {
								className: k.flexLineBreak
							}), (0, r.jsx)(U, {
								message: i,
								compact: n
							})]
						})
					})
				})
			}
		},
		834129: function(e, t, n) {
			n.d(t, {
				Z: () => u
			});
			var r = n(255367);
			n(73800);
			var i = n(120356),
				l = n.n(i),
				a = n(481060),
				o = n(318713),
				s = n(614507);

			function c(e) {
				let {
					icon: t,
					iconNode: n,
					timestamp: i,
					timestampFormat: a,
					className: c,
					children: u,
					contentClassName: d,
					iconClassName: p,
					iconContainerClassName: m,
					timestampClassName: f,
					compact: _ = !1
				} = e;
				return (0, r.jsxs)("div", {
					className: l()(c, {
						[s.container]: !0,
						[s.compact]: _,
						[s.cozy]: !_
					}),
					children: [null != n && (0, r.jsx)("div", {
						className: l()(s.iconContainer, m),
						children: n
					}), null != t && (0, r.jsx)("div", {
						className: s.iconContainer,
						children: (0, r.jsx)("div", {
							"data-accessibility": "desaturate",
							className: l()(s.icon, s.iconSize, p),
							style: {
								backgroundImage: "url('".concat(t, "')")
							}
						})
					}), (0, r.jsxs)("div", {
						className: l()(d, s.content),
						children: [u, null != i && (0, r.jsx)(o.Z, {
							timestamp: i,
							timestampFormat: a,
							className: f
						})]
					})]
				})
			}
			c.Action = e => {
				let {
					onClick: t,
					children: n
				} = e;
				return (0, r.jsxs)("span", {
					className: s.action,
					children: ["—", (0, r.jsx)(a.eee, {
						onClick: t,
						className: s.actionAnchor,
						children: n
					})]
				})
			};
			let u = c
		},
		789267: function(e, t, n) {
			n.d(t, {
				Z: () => o
			});
			var r = n(255367);
			n(73800);
			var i = n(739566),
				l = n(834129),
				a = n(388032);

			function o(e) {
				let {
					message: t,
					compact: o,
					missed: s,
					joinable: c,
					usernameHook: u,
					onClickJoinCall: d
				} = e, p = (0, i.ZP)(t), m = p.nick, f = u(p), _ = function(e) {
					let t = null != e.call ? e.call.duration : null;
					return null != t ? t.humanize() : null
				}(t);
				return s ? (0, r.jsx)(l.Z, {
					icon: n(154239),
					timestamp: t.timestamp,
					compact: o,
					children: null != _ ? a.intl.format(a.t.AcqBmJ, {
						username: m,
						usernameHook: f,
						callDuration: _
					}) : a.intl.format(a.t["43phHx"], {
						username: m,
						usernameHook: f
					})
				}) : (0, r.jsxs)(l.Z, {
					icon: n(344163),
					timestamp: t.timestamp,
					compact: o,
					children: [null != _ ? a.intl.format(a.t["7TeC1N"], {
						username: m,
						usernameHook: f,
						callDuration: _
					}) : a.intl.format(a.t.LuB5RE, {
						username: m,
						usernameHook: f
					}), c ? (0, r.jsx)(l.Z.Action, {
						onClick: d,
						children: a.intl.string(a.t.oa9mvb)
					}) : null]
				})
			}
		},
		262: function(e, t, n) {
			n.d(t, {
				Z: () => d
			}), n(35282);
			var r = n(255367),
				i = n(73800),
				l = n(481060),
				a = n(857395),
				o = n(739566),
				s = n(834129),
				c = n(388032);

			function u(e) {
				let {
					children: t,
					messageReference: n,
					guildName: o
				} = e, s = i.useRef(null);
				if (null == n) return (0, r.jsx)(l.eee, {
					children: t
				});
				let {
					guild_id: c
				} = n;
				return null == c ? (0, r.jsx)(l.eee, {
					children: t
				}) : (0, r.jsx)(a.Z, {
					guildId: c,
					name: o,
					targetElementRef: s,
					children: e => {
						var n, i;
						let {
							"aria-controls": a,
							"aria-expanded": o
						} = e, c = function(e, t) {
							if (null == e) return {};
							var n, r, i = function(e, t) {
								if (null == e) return {};
								var n, r, i = {},
									l = Object.keys(e);
								for (r = 0; r < l.length; r++) n = l[r], t.indexOf(n) >= 0 || (i[n] = e[n]);
								return i
							}(e, t);
							if (Object.getOwnPropertySymbols) {
								var l = Object.getOwnPropertySymbols(e);
								for (r = 0; r < l.length; r++) n = l[r], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n])
							}
							return i
						}(e, ["aria-controls", "aria-expanded"]);
						return (0, r.jsx)(l.eee, (n = function(e) {
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
						}({}, c), i = i = {
							ref: s,
							children: t
						}, Object.getOwnPropertyDescriptors ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(i)) : (function(e, t) {
							var n = Object.keys(e);
							if (Object.getOwnPropertySymbols) {
								var r = Object.getOwnPropertySymbols(e);
								n.push.apply(n, r)
							}
							return n
						})(Object(i)).forEach(function(e) {
							Object.defineProperty(n, e, Object.getOwnPropertyDescriptor(i, e))
						}), n))
					}
				})
			}

			function d(e) {
				let {
					usernameHook: t,
					message: i,
					compact: l
				} = e, {
					content: a,
					timestamp: d,
					messageReference: p
				} = i, m = (0, o.ZP)(i), f = t(m), _ = (null != a ? a : "").split(" ").slice(0, -1).join(" "), h = c.intl.format(c.t["47CZc3"], {
					username: m.nick,
					usernameHook: f,
					webhookName: a,
					webhookNameHook: (e, t) => (0, r.jsx)(u, {
						messageReference: p,
						guildName: _,
						children: e
					}, t)
				});
				return (0, r.jsx)(s.Z, {
					icon: n(570111),
					timestamp: d,
					compact: l,
					children: h
				})
			}
		},
		303135: function(e, t, n) {
			n.d(t, {
				Z: () => d
			});
			var r = n(255367);
			n(73800);
			var i = n(481060),
				l = n(100527),
				a = n(641360),
				o = n(769409),
				s = n(739566),
				c = n(834129),
				u = n(388032);

			function d(e) {
				let {
					message: t,
					usernameHook: d,
					compact: p
				} = e, m = (0, s.ZP)(t), f = d(m), _ = (0, a.I3)("GdmNameChangeSystemMessage", t.channel_id);
				return (0, r.jsx)(c.Z, {
					icon: n(819373),
					timestamp: t.timestamp,
					compact: p,
					children: _ ? u.intl.format(u.t["4wLp29"], {
						username: m.nick,
						usernameHook: f,
						editGroupButton: (0, r.jsx)(i.Text, {
							tag: "span",
							variant: "text-md/medium",
							color: "text-link",
							children: u.intl.string(u.t["5Q9+/P"])
						}, "edit-group-button-".concat(t.id)),
						onEditGroup: () => (0, o.B)(t.channel_id, l.Z.GROUP_DM_SYSTEM_MESSAGE_ICON)
					}) : u.intl.format(u.t.OEdU6e, {
						username: m.nick,
						usernameHook: f
					})
				})
			}
		},
		673052: function(e, t, n) {
			n.d(t, {
				Z: () => d
			});
			var r = n(255367);
			n(73800);
			var i = n(481060),
				l = n(835473),
				a = n(739566),
				o = n(942951),
				s = n(834129),
				c = n(388032),
				u = n(583512);

			function d(e) {
				let {
					message: t,
					channel: n,
					compact: d
				} = e, p = (0, a.ZP)(t), m = (0, o.l)({
					user: t.author,
					channelId: n.id,
					guildId: n.guild_id,
					messageId: t.id
				})(p), f = (0, l.q)(t.applicationId);
				if (null == f) return null;
				let _ = c.intl.format(c.t.mAtJTE, {
					username: t.author.username,
					usernameHook: m,
					applicationName: f.name,
					applicationNameHook: () => (0, r.jsx)(i.Text, {
						className: u.applicationName,
						variant: "text-md/semibold",
						color: "header-primary",
						children: f.name
					}, f.name),
					helpdeskArticle: "#"
				});
				return (0, r.jsx)(s.Z, {
					iconNode: (0, r.jsx)(i.DuK, {
						size: "sm",
						color: i.TVs.colors.STATUS_POSITIVE
					}),
					timestamp: t.timestamp,
					compact: d,
					contentClassName: u.systemMessage,
					children: _
				})
			}
		},
		385063: function(e, t, n) {
			n.d(t, {
				Z: () => f
			});
			var r = n(255367);
			n(73800);
			var i = n(442837),
				l = n(481060),
				a = n(100527),
				o = n(641360),
				s = n(769409),
				c = n(592125),
				u = n(739566),
				d = n(834129),
				p = n(388032),
				m = n(677972);

			function f(e) {
				let {
					message: t,
					usernameHook: l,
					compact: a,
					isForumPost: o
				} = e, s = (0, u.ZP)(t), f = l(s);
				return (0, i.e7)([c.Z], () => {
					var e, n;
					return null != (n = null == (e = c.Z.getChannel(t.channel_id)) ? void 0 : e.isGroupDM()) && n
				}) ? (0, r.jsx)(_, {
					message: t,
					usernameHook: l,
					compact: a,
					isForumPost: o
				}) : (0, r.jsx)(d.Z, {
					compact: a,
					className: m.channelNameChange,
					icon: n(819373),
					timestamp: t.timestamp,
					children: p.intl.format(o ? p.t.SOQ4hI : p.t.oItgEx, {
						username: s.nick,
						usernameHook: f,
						channelName: t.content
					})
				})
			}

			function _(e) {
				let {
					message: t,
					usernameHook: i,
					compact: c
				} = e, f = (0, u.ZP)(t), _ = i(f), h = (0, o.I3)("GdmNameChangeSystemMessage", t.channel_id), g = "" === t.content ? p.t.AI1ZZm : p.t.geP3ra;
				return (0, r.jsx)(d.Z, {
					compact: c,
					className: m.channelNameChange,
					icon: n(819373),
					timestamp: t.timestamp,
					children: h ? p.intl.format(g, {
						username: f.nick,
						usernameHook: _,
						channelName: t.content,
						editGroupButton: (0, r.jsx)(l.Text, {
							tag: "span",
							variant: "text-md/medium",
							color: "text-link",
							children: p.intl.string(p.t["5Q9+/P"])
						}, "edit-group-button-".concat(t.id)),
						onEditGroup: () => (0, s.B)(t.channel_id, a.Z.GROUP_DM_SYSTEM_MESSAGE_NAME)
					}) : p.intl.format(p.t.oItgEx, {
						username: f.nick,
						usernameHook: _,
						channelName: t.content
					})
				})
			}
		},
		253118: function(e, t, n) {
			n.d(t, {
				Z: () => c
			});
			var r = n(255367);
			n(73800);
			var i = n(481060),
				l = n(904245),
				a = n(739566),
				o = n(834129),
				s = n(388032);

			function c(e) {
				var t, n;
				let {
					message: c,
					usernameHook: u,
					onClickPins: d,
					compact: p
				} = e, m = (0, a.ZP)(c), f = m.nick, _ = u(m), h = () => {
					if (null == c.messageReference) return;
					let {
						channel_id: e,
						message_id: t
					} = c.messageReference;
					l.Z.jumpToMessage({
						channelId: e,
						messageId: t,
						flash: !0
					})
				}, g = {
					iconNode: (0, r.jsx)(i.qQX, {
						size: "sm",
						color: "currentColor"
					})
				};
				return (0, r.jsx)(o.Z, (t = function(e) {
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
				}({}, g), n = n = {
					timestamp: c.timestamp,
					compact: p,
					children: null != c.messageReference ? null == d ? s.intl.format(s.t.lD5tur, {
						usernameHook: _,
						username: f,
						messageOnClick: h
					}) : s.intl.format(s.t.yIDvPD, {
						usernameHook: _,
						username: f,
						pinsActionOnClick: d,
						messageOnClick: h
					}) : null == d ? s.intl.format(s.t.vfkjq6, {
						usernameHook: _,
						username: f
					}) : s.intl.format(s.t.R7vZGR, {
						usernameHook: _,
						username: f,
						pinsActionOnClick: d
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
		},
		54817: function(e, t, n) {
			n.d(t, {
				Z: () => h
			});
			var r = n(255367);
			n(73800);
			var i = n(120356),
				l = n.n(i),
				a = n(481060),
				o = n(385499),
				s = n(739566),
				c = n(464891),
				u = n(605568),
				d = n(834129),
				p = n(981631),
				m = n(674563),
				f = n(388032),
				_ = n(126759);

			function h(e) {
				let {
					message: t,
					compact: n,
					usernameHook: i
				} = e, h = (0, s.ZP)(t), g = i(h), {
					avatarSrc: b,
					eventHandlers: {
						onMouseEnter: E,
						onMouseLeave: y
					}
				} = (0, u.m)(!0), x = "" !== t.content ? new Date(t.content).toLocaleString(f.intl.currentLocale, {
					hour: "numeric",
					minute: "2-digit",
					month: "2-digit",
					day: "2-digit",
					year: "numeric"
				}) : "";
				return (0, r.jsx)("div", {
					onMouseEnter: E,
					onMouseLeave: y,
					children: (0, r.jsx)(d.Z, {
						className: l()(_.mainContainer, {
							[_.compact]: n
						}),
						iconNode: n ? null : (0, r.jsx)(u.S, {
							src: b
						}),
						iconContainerClassName: _.iconContainer,
						compact: n,
						children: (0, r.jsxs)("div", {
							className: l()(_.content, {
								[_.compact]: n
							}),
							children: [(0, r.jsx)(c.nD, {
								message: t,
								messageClassname: _.spanCorrection,
								className: l()(_.usernameContainer, _.spanCorrection, {
									[_.compact]: n
								}),
								username: (0, r.jsxs)("div", {
									className: _.spanCorrection,
									children: [(0, r.jsx)(a.Text, {
										variant: "text-md/normal",
										color: "text-brand",
										tag: "span",
										className: _.username,
										children: f.intl.string(f.t.hG1StL)
									}), (0, r.jsx)(o.Z, {
										type: m.Hb.SYSTEM_DM,
										className: _.systemTag
									})]
								}),
								compact: n,
								showTimestamp: !0
							}), (0, r.jsx)("div", {
								className: l()(_.__invalid_messageContent, {
									[_.compact]: n
								}),
								children: t.type === p.uaV.GUILD_INCIDENT_ALERT_MODE_ENABLED ? f.intl.format(f.t["+m8eDw"], {
									username: h.nick,
									usernameHook: g,
									time: x
								}) : f.intl.format(f.t.BHeke3, {
									username: h.nick,
									usernameHook: g
								})
							})]
						})
					})
				})
			}
		},
		502115: function(e, t, n) {
			n.d(t, {
				FJ: () => s,
				HL: () => u,
				Yc: () => d,
				xe: () => c
			});
			var r = n(255367);
			n(73800);
			var i = n(481060),
				l = n(834129),
				a = n(388032),
				o = n(794446);

			function s(e) {
				let {
					message: t,
					compact: i,
					onClick: s
				} = e;
				return (0, r.jsx)(l.Z, {
					icon: n(508933),
					timestamp: t.timestamp,
					compact: i,
					contentClassName: o.messageContent,
					children: a.intl.format(a.t.bYdG3d, {
						onClick: s
					})
				})
			}

			function c(e) {
				let {
					message: t,
					compact: i
				} = e;
				return (0, r.jsx)(l.Z, {
					icon: n(324606),
					timestamp: t.timestamp,
					compact: i,
					contentClassName: o.messageContent,
					children: a.intl.string(a.t.tu6tOT)
				})
			}

			function u(e) {
				let {
					message: t,
					compact: n
				} = e;
				return (0, r.jsx)(l.Z, {
					iconNode: (0, r.jsx)(i.P4T, {
						size: "custom",
						width: 20,
						height: 20,
						color: "currentColor",
						className: o.alertIcon
					}),
					timestamp: t.timestamp,
					compact: n,
					contentClassName: o.messageContent,
					children: a.intl.string(a.t.vzfXqq)
				})
			}

			function d(e) {
				let {
					message: t,
					compact: n
				} = e;
				return (0, r.jsx)(l.Z, {
					iconNode: (0, r.jsx)(i.P4T, {
						size: "custom",
						width: 20,
						height: 20,
						color: "currentColor",
						className: o.alertIcon
					}),
					timestamp: t.timestamp,
					compact: n,
					contentClassName: o.messageContent,
					children: a.intl.string(a.t["/Tfvyc"])
				})
			}
		},
		27103: function(e, t, n) {
			n.d(t, {
				Z: () => _
			});
			var r = n(255367);
			n(73800);
			var i = n(120356),
				l = n.n(i),
				a = n(481060),
				o = n(385499),
				s = n(739566),
				c = n(464891),
				u = n(605568),
				d = n(834129),
				p = n(674563),
				m = n(388032),
				f = n(126759);

			function _(e) {
				let {
					message: t,
					compact: n,
					usernameHook: i
				} = e, _ = (0, s.ZP)(t), h = i(_), {
					avatarSrc: g,
					eventHandlers: {
						onMouseEnter: b,
						onMouseLeave: E
					}
				} = (0, u.m)(!0);
				return (0, r.jsx)("div", {
					onMouseEnter: b,
					onMouseLeave: E,
					children: (0, r.jsx)(d.Z, {
						className: l()(f.mainContainer, {
							[f.compact]: n
						}),
						iconNode: n ? null : (0, r.jsx)(u.S, {
							src: g
						}),
						iconContainerClassName: f.iconContainer,
						compact: n,
						children: (0, r.jsxs)("div", {
							className: l()(f.content, {
								[f.compact]: n
							}),
							children: [(0, r.jsx)(c.nD, {
								message: t,
								messageClassname: f.spanCorrection,
								className: l()(f.usernameContainer, f.spanCorrection, {
									[f.compact]: n
								}),
								username: (0, r.jsxs)("div", {
									className: f.spanCorrection,
									children: [(0, r.jsx)(a.Text, {
										variant: "text-md/normal",
										color: "text-brand",
										tag: "span",
										className: f.username,
										children: m.intl.string(m.t.hG1StL)
									}), (0, r.jsx)(o.Z, {
										type: p.Hb.SYSTEM_DM,
										className: f.systemTag
									})]
								}),
								compact: n,
								showTimestamp: !0
							}), (0, r.jsx)("div", {
								className: l()(f.__invalid_messageContent, {
									[f.compact]: n
								}),
								children: m.intl.format(m.t.qntXNT, {
									username: _.nick,
									usernameHook: h
								})
							})]
						})
					})
				})
			}
		},
		396252: function(e, t, n) {
			n.d(t, {
				Z: () => g
			});
			var r = n(255367);
			n(73800);
			var i = n(120356),
				l = n.n(i),
				a = n(442837),
				o = n(481060),
				s = n(385499),
				c = n(430824),
				u = n(739566),
				d = n(464891),
				p = n(605568),
				m = n(834129),
				f = n(674563),
				_ = n(388032),
				h = n(126759);

			function g(e) {
				var t;
				let {
					message: n,
					compact: i,
					usernameHook: g,
					channel: b
				} = e, E = (0, a.e7)([c.Z], () => c.Z.getGuild(b.guild_id)), y = (0, u.ZP)(n), x = g(y), {
					avatarSrc: C,
					eventHandlers: {
						onMouseEnter: v,
						onMouseLeave: O
					}
				} = (0, p.m)(!0);
				return (0, r.jsx)("div", {
					onMouseEnter: v,
					onMouseLeave: O,
					children: (0, r.jsx)(m.Z, {
						className: l()(h.mainContainer, {
							[h.compact]: i
						}),
						iconNode: i ? null : (0, r.jsx)(p.S, {
							src: C
						}),
						iconContainerClassName: h.iconContainer,
						compact: i,
						children: (0, r.jsxs)("div", {
							className: l()(h.content, {
								[h.compact]: i
							}),
							children: [(0, r.jsx)(d.nD, {
								message: n,
								messageClassname: h.spanCorrection,
								className: l()(h.usernameContainer, h.spanCorrection, {
									[h.compact]: i
								}),
								username: (0, r.jsxs)("div", {
									className: h.spanCorrection,
									children: [(0, r.jsx)(o.Text, {
										variant: "text-md/normal",
										color: "text-brand",
										tag: "span",
										className: h.username,
										children: _.intl.string(_.t.hG1StL)
									}), (0, r.jsx)(s.Z, {
										type: f.Hb.SYSTEM_DM,
										className: h.systemTag
									})]
								}),
								compact: i,
								showTimestamp: !0
							}), (0, r.jsx)("div", {
								className: l()(h.__invalid_messageContent, {
									[h.compact]: i
								}),
								children: _.intl.format(_.t.W0UBIy, {
									username: y.nick,
									usernameHook: x,
									guildName: null != (t = null == E ? void 0 : E.name) ? t : ""
								})
							})]
						})
					})
				})
			}
		},
		522860: function(e, t, n) {
			n.d(t, {
				Z: () => c
			});
			var r = n(255367);
			n(73800);
			var i = n(481060),
				l = n(194082),
				a = n(739566),
				o = n(834129),
				s = n(388032);

			function c(e) {
				var t;
				let {
					message: n,
					channel: c,
					playingActivity: u,
					onJoinStream: d,
					usernameHook: p,
					compact: m
				} = e, f = (0, a.ZP)(n), _ = null == (t = n.call) ? void 0 : t.duration, h = p(f), g = s.intl.format(s.t.FKXvaG, {
					username: f.nick,
					activityName: null != u ? u.name : "unknown",
					onJoinStream: d,
					usernameHook: h
				});
				return null != _ && (g = s.intl.format(s.t.NEFxtb, {
					username: f.nick,
					duration: _.humanize(),
					channelName: c.name,
					usernameHook: h
				})), (0, r.jsx)(o.Z, {
					iconNode: null != _ ? (0, r.jsx)(i.g5r, {
						size: "custom",
						color: "currentColor",
						width: 20,
						height: 20
					}) : (0, r.jsx)(l.ZP, {
						size: l.ZP.Sizes.SMALL
					}),
					timestamp: n.timestamp,
					compact: m,
					children: g
				})
			}
		},
		600397: function(e, t, n) {
			n.d(t, {
				Z: () => f
			});
			var r = n(255367);
			n(73800);
			var i = n(657707),
				l = n(835473),
				a = n(925329),
				o = n(63063),
				s = n(739566),
				c = n(942951),
				u = n(834129),
				d = n(981631),
				p = n(388032),
				m = n(768921);

			function f(e) {
				let {
					message: t,
					channel: n,
					author: f,
					compact: _
				} = e, {
					nick: h
				} = (0, s.Sw)(f, n), g = (0, c.l)({
					user: f,
					channelId: n.id,
					guildId: void 0,
					messageId: void 0
				})(), b = (0, l.q)(t.applicationId);
				if (null == b) return null;
				let E = p.intl.format(p.t.m7Lwam, {
					username: h,
					usernameHook: g,
					gameName: b.name,
					gameIconHook: e => (0, r.jsxs)("span", {
						className: m.gameContainer,
						children: [(0, r.jsx)(a.Z, {
							game: b,
							size: a.Z.Sizes.XXSMALL,
							className: m.inlineIcon
						}), " ", e]
					}),
					helpdeskArticle: o.Z.getArticleURL(d.BhN.SOCIAL_LAYER_CONNECTIONS)
				});
				return (0, r.jsx)(u.Z, {
					iconNode: (0, r.jsx)(i.iWm, {
						size: "sm"
					}),
					compact: _,
					contentClassName: m.content,
					children: (0, r.jsx)("div", {
						children: E
					})
				})
			}
		},
		73352: function(e, t, n) {
			n.d(t, {
				Z: () => o
			});
			var r = n(255367);
			n(73800);
			var i = n(739566),
				l = n(834129),
				a = n(388032);

			function o(e) {
				let {
					message: t,
					otherUsername: o,
					usernameHook: s,
					otherUsernameHook: c,
					compact: u
				} = e, {
					nick: d
				} = (0, i.ZP)(t), p = s(), m = c(), f = a.intl.format(a.t.MMN2Ji, {
					username: d,
					usernameHook: p,
					otherUsername: o,
					otherUsernameHook: m
				});
				return (0, r.jsx)(l.Z, {
					icon: n(570111),
					timestamp: t.timestamp,
					compact: u,
					children: f
				})
			}
		},
		377499: function(e, t, n) {
			n.d(t, {
				Z: () => o
			});
			var r = n(255367);
			n(73800);
			var i = n(739566),
				l = n(834129),
				a = n(388032);

			function o(e) {
				let t, {
						message: o,
						usernameHook: s,
						otherUser: c,
						otherUsernameHook: u,
						compact: d,
						channel: p
					} = e,
					m = (0, i.ZP)(o),
					f = m.nick,
					_ = s(m),
					h = (0, i.Sw)(c, p);
				if (null != h && null != u) {
					let e = u(h);
					t = a.intl.format(a.t.L2FyVl, {
						username: f,
						usernameHook: _,
						otherUsername: h.nick,
						otherUsernameHook: e
					})
				} else t = a.intl.format(a.t["5v2xa2"], {
					username: f,
					usernameHook: _
				});
				return (0, r.jsx)(l.Z, {
					icon: n(474019),
					timestamp: o.timestamp,
					compact: d,
					children: t
				})
			}
		},
		857640: function(e, t, n) {
			n.d(t, {
				Z: () => c
			});
			var r = n(255367);
			n(73800);
			var i = n(481060),
				l = n(739566),
				a = n(834129),
				o = n(388032),
				s = n(40450);

			function c(e) {
				let {
					message: t,
					compact: n,
					usernameHook: c
				} = e, u = (0, l.ZP)(t), d = c(u), p = o.intl.format(o.t["zla/u7"], {
					username: u.nick,
					usernameHook: d,
					topic: t.content
				});
				return (0, r.jsx)(a.Z, {
					className: s.stageSystemMessage,
					iconNode: (0, r.jsx)(i.ewx, {
						size: "md",
						color: "currentColor"
					}),
					iconContainerClassName: s.iconContainer,
					timestamp: t.timestamp,
					compact: n,
					children: p
				})
			}
		},
		614972: function(e, t, n) {
			n.d(t, {
				Z: () => c
			});
			var r = n(255367);
			n(73800);
			var i = n(481060),
				l = n(739566),
				a = n(834129),
				o = n(388032),
				s = n(40450);

			function c(e) {
				let {
					message: t,
					compact: n,
					usernameHook: c
				} = e, u = (0, l.ZP)(t), d = c(u), p = o.intl.format(o.t.tv2DNz, {
					username: u.nick,
					usernameHook: d
				});
				return (0, r.jsx)(a.Z, {
					className: s.stageSystemMessage,
					iconNode: (0, r.jsx)(i.V9, {
						size: "md",
						color: "currentColor"
					}),
					iconContainerClassName: s.iconContainer,
					timestamp: t.timestamp,
					compact: n,
					children: p
				})
			}
		},
		701181: function(e, t, n) {
			n.d(t, {
				Z: () => c
			});
			var r = n(255367);
			n(73800);
			var i = n(481060),
				l = n(739566),
				a = n(834129),
				o = n(388032),
				s = n(40450);

			function c(e) {
				let {
					message: t,
					compact: n,
					usernameHook: c
				} = e, u = (0, l.ZP)(t), d = c(u), p = o.intl.format(o.t.dKW5Cw, {
					username: u.nick,
					usernameHook: d
				});
				return (0, r.jsx)(a.Z, {
					className: s.stageSystemMessage,
					iconNode: (0, r.jsx)(i.Lrb, {
						size: "md",
						color: "currentColor"
					}),
					iconContainerClassName: s.iconContainer,
					timestamp: t.timestamp,
					compact: n,
					children: p
				})
			}
		},
		29338: function(e, t, n) {
			n.d(t, {
				Z: () => u
			});
			var r = n(255367);
			n(73800);
			var i = n(692547),
				l = n(481060),
				a = n(739566),
				o = n(834129),
				s = n(388032),
				c = n(40450);

			function u(e) {
				let {
					message: t,
					compact: n,
					usernameHook: u
				} = e, d = (0, a.ZP)(t), p = u(d), m = s.intl.format(s.t["Rv+TSE"], {
					username: d.nick,
					usernameHook: p,
					topic: t.content
				});
				return (0, r.jsx)(o.Z, {
					className: c.stageSystemMessage,
					iconNode: (0, r.jsx)(l.ewx, {
						size: "md",
						color: i.Z.unsafe_rawColors.GREEN_360.css
					}),
					iconContainerClassName: c.iconContainer,
					timestamp: t.timestamp,
					compact: n,
					children: m
				})
			}
		},
		461135: function(e, t, n) {
			n.d(t, {
				Z: () => c
			});
			var r = n(255367);
			n(73800);
			var i = n(481060),
				l = n(739566),
				a = n(834129),
				o = n(388032),
				s = n(40450);

			function c(e) {
				let {
					message: t,
					compact: n,
					usernameHook: c
				} = e, u = (0, l.ZP)(t), d = c(u), p = o.intl.format(o.t.Yy6vLi, {
					username: u.nick,
					usernameHook: d,
					topic: t.content
				});
				return (0, r.jsx)(a.Z, {
					className: s.stageSystemMessage,
					iconNode: (0, r.jsx)(i.ewx, {
						size: "md",
						color: "currentColor"
					}),
					iconContainerClassName: s.iconContainer,
					timestamp: t.timestamp,
					compact: n,
					children: p
				})
			}
		},
		296571: function(e, t, n) {
			n.d(t, {
				Z: () => d
			});
			var r = n(255367);
			n(73800);
			var i = n(442837),
				l = n(481060),
				a = n(592125),
				o = n(739566),
				s = n(834129),
				c = n(388032),
				u = n(907273);

			function d(e) {
				var t;
				let {
					message: n,
					compact: d,
					usernameHook: p,
					onClickThread: m,
					onClickViewThreads: f,
					onContextMenuThread: _
				} = e, h = (0, o.ZP)(n), g = p(h), b = (0, i.e7)([a.Z], () => {
					var e;
					return a.Z.getChannel(null == (e = n.messageReference) ? void 0 : e.channel_id)
				}), E = c.intl.format(c.t.cZ9Uf3, {
					actorName: h.nick,
					actorHook: g,
					threadName: null != (t = null == b ? void 0 : b.name) ? t : n.content,
					threadOnClick: {
						onClick: m,
						onContextMenu: _
					},
					viewThreadsOnClick: f
				});
				return (0, r.jsx)(s.Z, {
					iconNode: (0, r.jsx)(l.or_, {
						size: "md",
						color: "currentColor",
						className: u.icon
					}),
					timestamp: n.timestamp,
					compact: d,
					children: E
				})
			}
		},
		587737: function(e, t, n) {
			n.d(t, {
				Z: () => o
			});
			var r = n(255367);
			n(73800);
			var i = n(739566),
				l = n(834129),
				a = n(388032);

			function o(e) {
				let {
					message: t,
					channel: o,
					targetUser: s,
					actorUsernameHook: c,
					targetUsernameHook: u,
					compact: d
				} = e, p = (0, i.ZP)(t), m = (0, i.Sw)(s, o), f = c(p), _ = u(null != m ? m : void 0), h = a.intl.format(a.t.tusv2t, {
					actorName: p.nick,
					actorHook: f,
					targetName: null == m ? void 0 : m.nick,
					targetHook: _
				});
				return (0, r.jsx)(l.Z, {
					icon: n(570111),
					timestamp: t.timestamp,
					compact: d,
					children: h
				})
			}
		},
		482239: function(e, t, n) {
			n.d(t, {
				Z: () => o
			});
			var r = n(255367);
			n(73800);
			var i = n(739566),
				l = n(834129),
				a = n(388032);

			function o(e) {
				let {
					message: t,
					channel: o,
					targetUser: s,
					actorUsernameHook: c,
					targetUsernameHook: u,
					compact: d
				} = e, p = (0, i.ZP)(t), m = (0, i.Sw)(s, o), f = c(p), _ = u(null != m ? m : void 0), h = a.intl.format(a.t["32QI5+"], {
					actorName: p.nick,
					actorHook: f,
					targetName: null == m ? void 0 : m.nick,
					targetHook: _
				});
				return (0, r.jsx)(l.Z, {
					icon: n(474019),
					timestamp: t.timestamp,
					compact: d,
					children: h
				})
			}
		},
		328749: function(e, t, n) {
			n.d(t, {
				Z: () => s
			});
			var r = n(255367);
			n(73800);
			var i = n(481060),
				l = n(834129),
				a = n(388032),
				o = n(482893);

			function s(e) {
				let {
					message: t,
					compact: n
				} = e;
				return (0, r.jsx)(l.Z, {
					iconNode: (0, r.jsx)(i.or_, {
						size: "md",
						color: "currentColor",
						className: o.icon
					}),
					timestamp: t.timestamp,
					compact: n,
					children: a.intl.string(a.t.OCs36O)
				})
			}
		},
		4305: function(e, t, n) {
			n.d(t, {
				Z: () => s
			});
			var r = n(255367);
			n(73800);
			var i = n(352736),
				l = n(739566),
				a = n(834129),
				o = n(388032);

			function s(e) {
				let {
					message: t,
					usernameHook: s,
					compact: c
				} = e, u = (0, l.ZP)(t), d = s(u), p = i.Z.getSystemMessageUserJoin(t.id), m = o.intl.format(p, {
					username: u.nick,
					usernameHook: d
				});
				return (0, r.jsx)(a.Z, {
					icon: n(570111),
					timestamp: t.timestamp,
					compact: c,
					children: m
				})
			}
		},
		910548: function(e, t, n) {
			n.d(t, {
				ZP: () => F
			}), n(388685);
			var r, i = n(255367),
				l = n(73800),
				a = n(120356),
				o = n.n(a),
				s = n(505266),
				c = n(772848),
				u = n(468194),
				d = n(477690),
				p = n(481060),
				m = n(230711),
				f = n(745510),
				_ = n(549006),
				h = n(64078),
				g = n(29270),
				b = n(709586),
				E = n(267642),
				y = n(739566),
				x = n(834129),
				C = n(981631),
				v = n(388032),
				O = n(573510);

			function j(e) {
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
			let S = {
				enter: {
					BEG: 0,
					END: 22
				},
				confetti: {
					BEG: 23,
					END: 119
				},
				leaf_peel: {
					BEG: 120,
					END: 160
				},
				leaf_fall: {
					BEG: 161,
					END: 163
				},
				exit: {
					BEG: 164,
					END: 200
				}
			};
			var T = ((r = {}).TOP_LEFT = "TOP_LEFT", r.TOP_RIGHT = "TOP_RIGHT", r.BOTTOM_LEFT = "BOTTOM_LEFT", r.BOTTOM_RIGHT = "BOTTOM_RIGHT", r);
			let N = ["TOP_LEFT", "TOP_RIGHT"],
				P = (0, u.Mg)(d.Z.USER_PREMIUM_GUILD_SUBSCRIPTION_EASTER_EGG_SIZE),
				A = {
					leafPosition: {
						x: 85,
						y: 125
					},
					leafRotationDirection: 1
				},
				w = Object.freeze({
					TOP_LEFT: {
						getConfettiPosition: e => ({
							x: e - 11,
							y: e - 125
						}),
						confettiVelocityDirection: {
							x: 1,
							y: 1
						},
						leafPosition: {
							x: 100,
							y: 144
						},
						leafRotationDirection: 1
					},
					TOP_RIGHT: {
						getConfettiPosition: e => ({
							x: 11,
							y: e - 125
						}),
						confettiVelocityDirection: {
							x: -1,
							y: 1
						},
						leafPosition: {
							x: 90,
							y: 144
						},
						leafRotationDirection: -1
					},
					BOTTOM_LEFT: I(j({}, A), {
						getConfettiPosition: e => ({
							x: e - 11,
							y: 125
						}),
						confettiVelocityDirection: {
							x: 1,
							y: -1
						}
					}),
					BOTTOM_RIGHT: I(j({}, A), {
						getConfettiPosition: e => ({
							x: 11,
							y: 125
						}),
						confettiVelocityDirection: {
							x: -1,
							y: -1
						}
					})
				}),
				Z = "falling-leaf",
				R = ["#61D5B2"],
				k = n(303893),
				L = n(313226),
				D = [k, L];

			function M() {
				return n.e("77843").then(n.t.bind(n, 931152, 19)).then(e => {
					let {
						default: t
					} = e;
					return t
				})
			}

			function U(e) {
				let {
					onAnimationComplete: t,
					onClick: n,
					position: r,
					size: a
				} = e, u = l.useRef(null), [d, m] = l.useState(null), [_] = l.useState(null != r ? r : function() {
					switch (Math.floor(Math.random() * Object.keys(T).length)) {
						case 0:
							return "TOP_LEFT";
						case 2:
							return "TOP_RIGHT";
						case 3:
							return "BOTTOM_LEFT";
						default:
							return "BOTTOM_RIGHT"
					}
				}()), {
					createMultipleConfettiAt: h,
					confettiCanvas: g
				} = l.useContext(f.h), [b, E] = l.useState(null), y = (0, s.uR)(g, b), x = function(e, t) {
					if (null == e) return "enter";
					switch (e) {
						case "enter":
							return "confetti";
						case "confetti":
							if (N.includes(t)) return "leaf_peel";
							return "exit";
						case "leaf_peel":
							return "leaf_fall";
						case "leaf_fall":
							return "exit";
						case "exit":
							return "enter"
					}
				}(d, _), C = N.includes(_), v = C && "exit" === d, j = l.useCallback(e => {
					m(e)
				}, []), I = l.useCallback(() => {
					"exit" === d && (null == t || t())
				}, [t, d]), A = l.useCallback(e => {
					u.current = e
				}, []);
				return l.useEffect(() => {
					if ("confetti" === d) {
						let {
							confettiVelocityDirection: e
						} = w[_], t = function(e, t) {
							let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : P,
								r = null == e ? void 0 : e.getBoundingClientRect();
							if (null == r) return {
								x: 0,
								y: 0
							};
							let i = w[t].getConfettiPosition(n);
							return {
								x: r.left + i.x,
								y: r.top + i.y
							}
						}(u.current, _, a);
						h(t.x, t.y, {
							velocity: {
								type: "static-random",
								minValue: {
									x: 10 * e.x,
									y: 80 * e.y
								},
								maxValue: {
									x: 80 * e.x,
									y: 180 * e.y
								}
							}
						})
					}
				}, [h, _, d, a]), l.useEffect(() => {
					if (C && "leaf_fall" === d) {
						let e = w[_].leafRotationDirection;
						y.createConfetti({
							id: "".concat(Z, "-").concat((0, c.Z)()),
							position: {
								type: "static",
								value: function(e, t) {
									let n = null == e ? void 0 : e.getBoundingClientRect();
									if (null == n) return {
										x: 0,
										y: 0
									};
									let r = w[t];
									return {
										x: n.left + r.leafPosition.x,
										y: n.top + r.leafPosition.y
									}
								}(u.current, _)
							},
							size: {
								type: "static",
								value: 45
							},
							rotation: {
								type: "linear-random",
								minValue: {
									x: 0,
									y: 0,
									z: 0
								},
								maxValue: {
									x: 0,
									y: 0,
									z: 0
								},
								minAddValue: {
									x: 0,
									y: 0,
									z: 8 * e
								},
								maxAddValue: {
									x: 0,
									y: 0,
									z: 12 * e
								}
							}
						}, {
							sprite: "TOP_LEFT" === _ ? k : L
						})
					}
				}, [C, y, _, d]), (0, i.jsxs)(i.Fragment, {
					children: [(0, i.jsx)(s.Ji, {
						ref: E,
						sprites: D,
						colors: R,
						spriteWidth: 45,
						spriteHeight: 45
					}), (0, i.jsx)(p.P3F, {
						onClick: n,
						className: o()(O.easterEggAnimationClickTarget, {
							[O.easterEggAnimationClickTargetTopLeft]: "TOP_LEFT" === _,
							[O.easterEggAnimationClickTargetTopRight]: "TOP_RIGHT" === _,
							[O.easterEggAnimationClickTargetBottomLeft]: "BOTTOM_LEFT" === _,
							[O.easterEggAnimationClickTargetBottomRight]: "BOTTOM_RIGHT" === _
						}),
						children: (0, i.jsx)(p.kci, {
							animationRef: A,
							className: o()(O.easterEggAnimation, {
								[O.easterEggAnimationHideLeaf]: v
							}),
							nextScene: x,
							sceneSegments: S,
							onScenePlay: j,
							onSceneComplete: I,
							importData: M,
							pauseWhileUnfocused: !1
						})
					})]
				})
			}

			function F(e) {
				let t, {
						message: n,
						compact: r,
						guild: a,
						usernameHook: o,
						onClickMessage: s
					} = e,
					c = function(e) {
						switch (e.type) {
							case C.uaV.GUILD_BOOST_TIER_1:
								return C.Eu4.TIER_1;
							case C.uaV.GUILD_BOOST_TIER_2:
								return C.Eu4.TIER_2;
							case C.uaV.GUILD_BOOST_TIER_3:
								return C.Eu4.TIER_3
						}
						return null
					}(n),
					u = (0, g.Z)(n),
					{
						createMultipleConfettiAt: d,
						addClickListener: j
					} = l.useContext(f.h),
					[I, S] = l.useState(!1),
					T = l.useRef(null),
					{
						reducedMotion: N
					} = l.useContext(p.Sfi),
					P = (0, y.ZP)(n),
					A = P.nick,
					w = o(P);
				t = null == c || null == a ? u > 1 ? v.intl.format(v.t.yfC9dn, {
					username: A,
					usernameHook: w,
					numSubscriptions: u
				}) : v.intl.format(v.t["57St//"], {
					username: A,
					usernameHook: w
				}) : u > 1 ? v.intl.format(v.t.PO9uJC, {
					username: A,
					usernameHook: w,
					numSubscriptions: u,
					guildName: a.name,
					newTierName: (0, E.nW)(c)
				}) : v.intl.format(v.t.cUfTTE, {
					username: A,
					usernameHook: w,
					guildName: a.name,
					newTierName: (0, E.nW)(c)
				});
				let R = l.useCallback(() => {
						if (!N.enabled)
							if (I || 0 !== Math.floor(50 * Math.random())) {
								var e;
								let t = null == (e = T.current) ? void 0 : e.getBoundingClientRect();
								if (null == t) return;
								d(t.left + t.width / 2, t.top + t.height / 2)
							} else S(!0)
					}, [d, N, I]),
					k = l.useCallback(() => {
						S(!1)
					}, []),
					L = l.useCallback(() => {
						(0, h.AI)({
							settingsVisible: !0
						}), m.Z.open(C.oAB.POGGERMODE), S(!1)
					}, []),
					D = l.useCallback((e, t) => {
						(null == t ? void 0 : t.id.startsWith(Z)) && L()
					}, [L]);
				l.useEffect(() => j(D));
				let M = (0, i.jsx)(p.P3F, {
					className: O.iconWrapper,
					innerRef: T,
					onClick: s,
					children: (0, i.jsx)(b.Z, {
						className: O.icon,
						onMouseEnter: R
					})
				});
				return (0, i.jsxs)(x.Z, {
					iconNode: M,
					timestamp: n.timestamp,
					compact: r,
					children: [(0, i.jsx)("div", {
						onClick: s,
						className: O.message,
						children: t
					}), I ? (0, i.jsx)(_.ZP, {
						children: (0, i.jsx)("div", {
							className: O.cannonWrapper,
							children: (0, i.jsx)(U, {
								onAnimationComplete: k,
								onClick: L
							})
						})
					}) : null]
				})
			}
		},
		599706: function(e, t, n) {
			n.d(t, {
				Z: () => f
			}), n(539854);
			var r = n(255367),
				i = n(73800),
				l = n(392711),
				a = n.n(l),
				o = n(481060),
				s = n(100527),
				c = n(670188),
				u = n(463618),
				d = n(823379),
				p = n(88729);
			let m = e => {
					let {
						member: t,
						empty: n,
						guildId: l
					} = e, a = i.useRef(null);
					return n ? (0, r.jsx)("div", {
						className: p.partyMemberEmpty
					}) : null == t ? (0, r.jsx)("div", {
						className: p.partyMemberUnknown,
						children: (0, r.jsx)(u.Z, {
							className: p.partyMemberUnknownIcon
						})
					}) : (0, r.jsx)("div", {
						className: p.partyMemberKnown,
						children: (0, r.jsx)(c.Z, {
							targetElementRef: a,
							userId: t.id,
							guildId: l,
							newAnalyticsLocations: [s.Z.AVATAR],
							position: "left",
							clickTrap: !0,
							children: e => {
								var n, i;
								return (0, r.jsx)(o.qEK, (n = function(e) {
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
								}({}, e), i = i = {
									ref: a,
									src: t.getAvatarURL(l, 24),
									"aria-label": t.username,
									size: o.EFr.SIZE_24,
									className: p.partyMember
								}, Object.getOwnPropertyDescriptors ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(i)) : (function(e, t) {
									var n = Object.keys(e);
									if (Object.getOwnPropertySymbols) {
										var r = Object.getOwnPropertySymbols(e);
										n.push.apply(n, r)
									}
									return n
								})(Object(i)).forEach(function(e) {
									Object.defineProperty(n, e, Object.getOwnPropertyDescriptor(i, e))
								}), n))
							}
						})
					})
				},
				f = e => {
					let {
						partySize: t,
						members: n,
						minAvatarsShown: i = 1,
						maxAvatarsShown: l = 2,
						guildId: o
					} = e, {
						unknownSize: s,
						totalSize: c,
						knownSize: u
					} = t;
					if (c < i) return null;
					let f = a()(n).filter(d.lm).take(l).map(e => (0, r.jsx)(m, {
						member: e,
						guildId: o
					}, e.id)).value();
					for (let e = 0; e < s && f.length < l; e++) f.push((0, r.jsx)(m, {
						guildId: o
					}, "unknown-member-".concat(e)));
					let _ = c - u - s;
					for (let e = 0; e < _ && f.length < l; e++) f.push((0, r.jsx)(m, {
						empty: !0,
						guildId: o
					}, "empty-member-".concat(e)));
					let h = Math.max(Math.min(c - f.length, 99), 0);
					if (1 === h) {
						let e = n[l];
						f.push((0, r.jsx)(m, {
							member: e,
							guildId: o
						}, e.id))
					}
					return (0, r.jsx)("div", {
						className: p.wrapper,
						children: (0, r.jsxs)("div", {
							className: p.partyMembers,
							children: [f, h > 1 ? (0, r.jsxs)("div", {
								className: p.partyMemberOverflow,
								children: ["+", h]
							}) : null]
						})
					})
				}
		},
		553803: function(e, t, n) {
			n.d(t, {
				A: () => l
			});
			var r = n(255367);
			n(73800);
			var i = n(481060);

			function l(e) {
				let {
					message: t,
					initialAnswerId: l
				} = e;
				(0, i.ZDy)(async () => {
					let {
						default: e
					} = await n.e("74590").then(n.bind(n, 651081));
					return n => {
						var i, a;
						return (0, r.jsx)(e, (i = function(e) {
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
						}({}, n), a = a = {
							message: t,
							initialAnswerId: l
						}, Object.getOwnPropertyDescriptors ? Object.defineProperties(i, Object.getOwnPropertyDescriptors(a)) : (function(e, t) {
							var n = Object.keys(e);
							if (Object.getOwnPropertySymbols) {
								var r = Object.getOwnPropertySymbols(e);
								n.push.apply(n, r)
							}
							return n
						})(Object(a)).forEach(function(e) {
							Object.defineProperty(i, e, Object.getOwnPropertyDescriptor(a, e))
						}), i))
					}
				})
			}
		},
		203143: function(e, t, n) {
			n.d(t, {
				Z: () => H,
				n: () => L
			}), n(415506), n(388685), n(361932), n(187205), n(781311);
			var r = n(512722),
				i = n.n(r),
				l = n(392711),
				a = n.n(l),
				o = n(263568),
				s = n(442837),
				c = n(780384),
				u = n(570140),
				d = n(668781),
				p = n(749210),
				m = n(904245),
				f = n(881052),
				_ = n(367907),
				h = n(41776),
				g = n(58873),
				b = n(566006),
				E = n(869765),
				y = n(314897),
				x = n(592125),
				C = n(703558),
				v = n(607744),
				O = n(375954),
				j = n(117530),
				I = n(553803),
				S = n(467531),
				T = n(798628),
				N = n(918088),
				P = n(981631),
				A = n(388032);

			function w(e) {
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

			function Z(e, t) {
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

			function R(e, t) {
				let n = [...t],
					r = 0,
					i = 0;
				for (let t of n) {
					var l;
					let n = null == e || null == (l = e.find(e => e.answer_id === parseInt(t))) ? void 0 : l.poll_media;
					(null == n ? void 0 : n.text) != null && (r += 1), (null == n ? void 0 : n.emoji) != null && (i += 1)
				}
				return {
					analyticsSelectedAnswerIds: n,
					selectedTextAnswersCount: r,
					selectedEmojiAnswersCount: i
				}
			}

			function k(e) {
				let {
					guildId: t,
					title: n,
					body: r
				} = e;
				d.Z.show({
					title: n,
					body: r,
					confirmText: A.intl.string(A.t["9VLmlZ"]),
					cancelText: A.intl.string(A.t["2m+Sqq"]),
					onConfirm: () => {
						p.Z.joinGuild(t, {
							source: P.vtS.POLL_ALERT
						})
					}
				})
			}

			function L(e) {
				let {
					channelId: t,
					messageId: n,
					answerId: r
				} = e, i = x.Z.getChannel(t);
				if (null == i) return;
				if (h.Z.isLurking(i.guild_id)) return void k({
					guildId: i.guild_id,
					title: A.intl.string(A.t["7LpysL"]),
					body: A.intl.string(A.t["5sHHo6"])
				});
				let l = O.Z.getMessage(t, n);
				if (null == l || null == l.poll || 0 === l.poll.answers.length) return;
				let a = null != r ? r : String(l.poll.answers[0].answer_id);
				I.A({
					message: l,
					initialAnswerId: a
				})
			}

			function D(e) {
				let {
					channelId: t,
					messageId: n,
					isEditing: r
				} = e;
				(0, T.eu)(t, n, e => {
					var n;
					return {
						channelId: t,
						selectedAnswerIds: new Set,
						submitting: !1,
						editing: r,
						showResults: null != (n = null == e ? void 0 : e.showResults) && n
					}
				})
			}

			function M(e) {
				let {
					channelId: t,
					messageId: n
				} = e, r = O.Z.getMessage(t, n);
				return null == r ? [] : r.reactions.flatMap(e => !0 === e.me_vote ? e.emoji.name : [])
			}
			async function U(e) {
				let {
					channelId: t,
					messageId: n,
					answerIds: r
				} = e, i = M({
					channelId: t,
					messageId: n
				}), l = a().difference(i, r), o = a().difference(r, i), c = y.default.getId(), d = [...l.map(e => ({
					type: "MESSAGE_REACTION_REMOVE",
					id: e
				})), ...o.map(e => ({
					type: "MESSAGE_REACTION_ADD",
					id: e
				}))], p = s.ZP.Emitter.batched(() => {
					let e;
					for (let {
							id: r,
							type: i
						}
						of d) e = u.Z.dispatch({
						type: i,
						channelId: t,
						messageId: n,
						emoji: {
							id: r,
							name: r
						},
						userId: c,
						optimistic: !0,
						reactionType: b.O.VOTE
					});
					return e
				});
				null != p && await p
			}
			async function F(e) {
				let {
					channelId: t,
					messageId: n
				} = e, r = x.Z.getChannel(t);
				if (null == r) return;
				if (h.Z.isLurking(r.guild_id)) return void k({
					guildId: r.guild_id,
					title: A.intl.string(A.t.Qic1FB),
					body: A.intl.string(A.t["5sHHo6"])
				});
				if (!v.Z.canChatInGuild(r.guild_id)) return void d.Z.show({
					title: A.intl.string(A.t.p245ws),
					body: A.intl.string(A.t["U/uodn"])
				});
				let l = (0, T.fU)(t, n);
				i()(null != l, "Must not be able to vote without existing state!");
				let a = M({
					channelId: t,
					messageId: n
				});
				try {
					let e = [...l.selectedAnswerIds.values()];
					(0, T.eu)(t, n, e => (i()(null != e, "Must not be able to vote without existing state!"), Z(w({}, e), {
						submitting: !0,
						editing: !1
					}))), await U({
						channelId: t,
						messageId: n,
						answerIds: e
					}), await S.B({
						channelId: t,
						messageId: n,
						answerIds: e
					}), (0, T.eu)(t, n, () => void 0), c.uv.announce(0 === e.length ? A.intl.string(A.t["xcvy+/"]) : A.intl.string(A.t.o20GSk))
				} catch (e) {
					var o, s, u;
					d.Z.show({
						title: A.intl.string(A.t.iufib2),
						body: null != (u = null != (s = null == (o = e.getAnyErrorMessage) ? void 0 : o.call(e)) ? s : e.message) ? u : A.intl.string(A.t.eAn6z8)
					}), await U({
						channelId: t,
						messageId: n,
						answerIds: a
					}), (0, T.eu)(t, n, e => {
						if (null != e) return Z(w({}, e), {
							submitting: !1,
							editing: !1
						})
					})
				}
			}
			async function B(e) {
				let {
					channelId: t,
					messageId: n
				} = e, r = x.Z.getChannel(t);
				if (null != r) return h.Z.isLurking(r.guild_id) ? void k({
					guildId: r.guild_id,
					title: A.intl.string(A.t.B9QnBg),
					body: A.intl.string(A.t.BVZCTk)
				}) : ((0, T.eu)(t, n, e => {
					var n;
					return {
						channelId: t,
						selectedAnswerIds: new Set,
						submitting: !1,
						editing: !1,
						showResults: null != (n = null == e ? void 0 : e.showResults) && n
					}
				}), await F({
					channelId: t,
					messageId: n
				}))
			}
			async function G(e) {
				let {
					channelId: t,
					messageId: n,
					type: r
				} = e;
				switch (r) {
					case "submit":
						await F({
							channelId: t,
							messageId: n
						});
						break;
					case "remove":
						await B({
							channelId: t,
							messageId: n
						});
						break;
					case "cancel":
						D({
							channelId: t,
							messageId: n,
							isEditing: !1
						});
						break;
					case "showVotes":
						! function(e) {
							let {
								channelId: t,
								messageId: n
							} = e;
							(0, T.eu)(t, n, e => {
								var r, i;
								let l = null == e || !e.showResults,
									a = O.Z.getMessage(t, n),
									o = null != a ? a.reactions.reduce((e, t) => {
										var n, r;
										return e + (null != (r = null == (n = t.count_details) ? void 0 : n.vote) ? r : 0)
									}, 0) : 0;
								return _.ZP.trackWithMetadata(P.rMx.POLL_SHOW_RESULTS_CLICKED, {
									channel_id: t,
									message_id: n,
									show_results: l,
									votes_count: o
								}), {
									channelId: t,
									selectedAnswerIds: new Set,
									submitting: null != (r = null == e ? void 0 : e.submitting) && r,
									editing: null != (i = null == e ? void 0 : e.submitting) && i,
									showResults: l
								}
							})
						}({
							channelId: t,
							messageId: n
						});
						break;
					case "showVoterDetails":
						L({
							channelId: t,
							messageId: n
						});
						break;
					default:
						i()(!1, "Unknown poll action type: ".concat(r))
				}
			}
			let H = {
				handlePollAnswerTapped: function(e) {
					var t, n, {
						answerId: r
					} = e;
					let {
						channelId: l,
						messageId: a,
						message: o
					} = function(e) {
						let {
							channelId: t,
							messageId: n
						} = e, r = O.Z.getMessage(t, n);
						if (null != r) return {
							message: r,
							channelId: t,
							messageId: n
						};
						let l = E.Z.getMessage(t, n);
						if (null != l.message) return {
							channelId: t,
							messageId: n,
							message: l.message
						};
						throw i()(null != r, "Tapped on a non-existent poll message"), Error()
					}(function(e, t) {
						if (null == e) return {};
						var n, r, i = function(e, t) {
							if (null == e) return {};
							var n, r, i = {},
								l = Object.keys(e);
							for (r = 0; r < l.length; r++) n = l[r], t.indexOf(n) >= 0 || (i[n] = e[n]);
							return i
						}(e, t);
						if (Object.getOwnPropertySymbols) {
							var l = Object.getOwnPropertySymbols(e);
							for (r = 0; r < l.length; r++) n = l[r], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n])
						}
						return i
					}(e, ["answerId"])), {
						tapShouldOpenVotersModal: s
					} = null != (n = (0, N.Tk)(o)) ? n : {};
					if (!0 === s) return void L({
						channelId: l,
						messageId: a,
						answerId: r
					});
					let c = null == (t = o.poll) ? void 0 : t.allow_multiselect;
					(0, T.eu)(l, a, e => {
						var t, n;
						if (null == e) {
							let e = new Set([r]),
								{
									analyticsSelectedAnswerIds: t,
									selectedTextAnswersCount: i,
									selectedEmojiAnswersCount: s
								} = R(null == (n = o.poll) ? void 0 : n.answers, e);
							return _.ZP.trackWithMetadata(P.rMx.POLL_VOTE_SELECTED, {
								channel_id: l,
								message_id: a,
								selected_answer_ids: t,
								selected_text_answers_count: i,
								selected_emoji_answers_count: s
							}), {
								channelId: l,
								selectedAnswerIds: e,
								submitting: !1,
								editing: !1,
								showResults: !1
							}
						}
						let i = w({}, e),
							s = new Set(i.selectedAnswerIds);
						if (i.selectedAnswerIds = s, s.has(r)) s.delete(r);
						else {
							if (!c)
								for (let e of s) s.delete(e);
							s.add(r)
						}
						let {
							analyticsSelectedAnswerIds: u,
							selectedTextAnswersCount: d,
							selectedEmojiAnswersCount: p
						} = R(null == (t = o.poll) ? void 0 : t.answers, s);
						return _.ZP.trackWithMetadata(P.rMx.POLL_VOTE_SELECTED, {
							channel_id: l,
							message_id: a,
							selected_answer_ids: u,
							selected_text_answers_count: d,
							selected_emoji_answers_count: p
						}), i
					})
				},
				handlePollSubmitVote: F,
				handleUpdateVoteEditingState: D,
				handlePollActionTapped: G,
				createPoll: async function(e) {
					let {
						channel: t,
						question: n,
						answers: r,
						allowMultiSelect: i,
						duration: l,
						layout: a,
						onClose: s
					} = e, c = j.Z.getUploads(t.id, C.d.Poll), u = r.map(e => {
						var t, n;
						let r = null == c ? void 0 : c.findIndex(t => t.id === e.localCreationAnswerId),
							i = {
								attachment_ids: -1 !== r ? ["".concat(r)] : void 0
							};
						a === o.C.DEFAULT && (i.text = null == (n = e.text) ? void 0 : n.trim());
						let l = null == (t = e.image) ? void 0 : t.emoji;
						return null != l && (null != l.id ? i.emoji = {
							id: l.id,
							name: ""
						} : null != l.optionallyDiverseSequence && (i.emoji = {
							name: l.optionallyDiverseSequence
						})), {
							poll_media: i
						}
					}), d = {
						question: {
							text: n.trim()
						},
						answers: u,
						allow_multiselect: i,
						duration: l,
						layout_type: a
					};
					try {
						await m.Z.sendPollMessage(t.id, d, {
							attachmentsToUpload: c,
							onAttachmentUploadError: (e, n, r) => {
								(0, g.A)({
									file: e,
									guildId: t.getGuildId(),
									analyticsLocations: [],
									code: n,
									reason: r
								})
							}
						}), null == s || s()
					} catch (e) {
						if ("poll" === (e instanceof f.Hx ? e : new f.Hx(e)).getAnyErrorMessage() && null != e.text) throw Z(w({}, e), {
							body: JSON.parse(e.text)
						});
						throw e
					}
				},
				endPollEarly: async function(e) {
					let {
						channelId: t,
						messageId: n
					} = e;
					await d.Z.confirm({
						title: A.intl.string(A.t["+rfkTE"]),
						body: A.intl.string(A.t.H2I1gI)
					}) && await S.W({
						channelId: t,
						messageId: n
					})
				}
			}
		},
		467531: function(e, t, n) {
			n.d(t, {
				B: () => a,
				W: () => o
			});
			var r = n(544891),
				i = n(881052),
				l = n(981631);
			async function a(e) {
				let {
					channelId: t,
					messageId: n,
					answerIds: a
				} = e;
				try {
					await r.tn.put({
						url: l.ANM.POLL_ANSWERS(t, n),
						body: {
							answer_ids: a
						},
						rejectWithError: !1
					})
				} catch (e) {
					throw new i.Hx(e)
				}
			}
			async function o(e) {
				let {
					channelId: t,
					messageId: n
				} = e;
				try {
					await r.tn.post({
						url: l.ANM.POLL_EXPIRE(t, n),
						rejectWithError: !1
					})
				} catch (e) {
					throw new i.Hx(e)
				}
			}
		},
		798628: function(e, t, n) {
			n.d(t, {
				cE: () => u,
				eu: () => d,
				fU: () => p
			});
			var r = n(362383),
				i = n(731965),
				l = n(902704);

			function a(e) {
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

			function o(e, t) {
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
			let s = {},
				c = (0, r.F)(e => ({
					polls: {},
					updatePollState(t, n, r) {
						(0, i.j)(() => {
							e(e => {
								var i;
								return {
									polls: o(a({}, e.polls), {
										[t]: o(a({}, e.polls[t]), {
											[n]: r(null == (i = e.polls[t]) ? void 0 : i[n])
										})
									})
								}
							})
						})
					}
				}));

			function u(e) {
				return c(t => {
					var n;
					return null != (n = t.polls[e]) ? n : s
				}, l.Z)
			}

			function d(e, t, n) {
				c.getState().updatePollState(e, t, n)
			}

			function p(e, t) {
				var n;
				return null == (n = c.getState().polls[e]) ? void 0 : n[t]
			}
		},
		275344: function(e, t, n) {
			n.d(t, {
				Z: () => f,
				v: () => p
			});
			var r = n(255367),
				i = n(73800),
				l = n(512722),
				a = n.n(l),
				o = n(399606),
				s = n(904245),
				c = n(375954),
				u = n(918088);
			let d = i.createContext(void 0);

			function p(e) {
				var t;
				let n = null != (t = i.useContext(d)) ? t : e;
				return a()(null != n, "Using PollReferenceMessageContext without a provider (or a fallback)"), n
			}

			function m(e) {
				let {
					message: t,
					children: n
				} = e, l = (0, o.e7)([c.Z], () => c.Z.getMessage(t.channel_id, t.id), [t.channel_id, t.id]), a = null != l;
				return i.useEffect(() => {
					a || s.Z.focusMessage({
						channelId: t.channel_id,
						messageId: t.id
					})
				}, [a, t.channel_id, t.id]), (0, r.jsx)(d.Provider, {
					value: null != l ? l : t,
					children: n
				})
			}

			function f(e) {
				let {
					message: t,
					children: n
				} = e;
				return (0, u.r8)(t) ? n : (0, r.jsx)(m, {
					message: t,
					children: n
				})
			}
		},
		839963: function(e, t, n) {
			n.d(t, {
				Y7: () => i
			});
			var r, i = ((r = {})[r.LIST = 1] = "LIST", r[r.CHECKBOXES = 2] = "CHECKBOXES", r[r.RADIO_BUTTONS = 3] = "RADIO_BUTTONS", r)
		},
		897325: function(e, t, n) {
			n.d(t, {
				E: () => o,
				_: () => a
			}), n(314940);
			var r = n(278074),
				i = n(263568),
				l = n(228127);

			function a(e, t) {
				let n = (0, r.EQ)(t).with(i.C.IMAGE_ONLY_ANSWERS, () => l.normalStylesImageOnlyAnswers).otherwise(() => l.normalStylesDefault);
				return {
					styles: {
						loserSelected: n,
						normal: n,
						notVoted: n,
						selected: n,
						voted: l.votedStyles,
						victorSelected: l.victorStyles,
						victorNotSelected: l.victorStyles,
						normalVote: n
					}
				}
			}

			function o(e, t) {
				return e.getAvatarURL(t, 20, !1)
			}
		},
		57101: function(e, t, n) {
			n.d(t, {
				Z: () => l
			});
			var r = n(392711),
				i = n(897325);
			let l = (0, r.memoize)(function(e) {
				let {
					theme: t,
					layoutType: n
				} = e;
				return (0, i._)(t, n)
			}, e => {
				let {
					theme: t,
					layoutType: n
				} = e;
				return "".concat(t, ":").concat(n)
			})
		},
		918088: function(e, t, n) {
			n.d(t, {
				Tk: () => N,
				ZP: () => P,
				ef: () => I,
				r8: () => T
			}), n(388685), n(314940);
			var r = n(278074),
				i = n(263568),
				l = n(607070),
				a = n(339085),
				o = n(633302),
				s = n(715903),
				c = n(69882),
				u = n(592125),
				d = n(271383),
				p = n(375954),
				m = n(594174),
				f = n(768581),
				_ = n(176354),
				h = n(358085),
				g = n(798628),
				b = n(79390),
				E = n(839963),
				y = n(897325),
				x = n(57101),
				C = n(562293),
				v = n(981631),
				O = n(388032);
			let j = {
				channelId: v.lds,
				selectedAnswerIds: new Set,
				submitting: !1,
				editing: !1,
				showResults: !1
			};

			function I(e, t) {
				for (let n of e)
					if (("number" == typeof n.emoji.id ? "".concat(n.emoji.id) : n.emoji.id) === t) return n
			}
			let S = e => (0, r.EQ)(e).with({
				isExpired: !0,
				isLeader: !0,
				didSelfVote: !0
			}, () => "victorSelected").with({
				isExpired: !0,
				isLeader: !0,
				didSelfVote: !1
			}, () => "victorNotSelected").with({
				isExpired: !0,
				didSelfVote: !0
			}, () => "loserSelected").with({
				isExpired: !0
			}, () => "notVoted").with({
				didSelfVote: !0,
				isExpired: !1
			}, () => "voted").with({
				hasVoted: !0,
				isExpired: !1
			}, () => "notVoted").with({
				isSelected: !0
			}, () => "selected").with({
				isExpired: !1,
				showResults: !0
			}, () => "notVoted").otherwise(() => "normalVote");

			function T(e) {
				return null == e.poll || p.Z.getMessage(e.channel_id, e.id) === e
			}

			function N(e, t) {
				var n, r, i, l;
				let {
					formattedExpirationLabel: a
				} = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {}, {
					poll: o
				} = e;
				if (null == o) return;
				let m = e.state === v.yb.SENT,
					f = m ? null != a ? a : (0, C.H)(o.expiry) : "",
					_ = null == f && m,
					{
						selectedAnswerIds: h,
						submitting: b,
						editing: E,
						showResults: y
					} = null != (i = null != t ? t : (0, g.fU)(e.getChannelId(), e.id)) ? i : j,
					x = e.reactions,
					O = !0;
				if (!T(e)) {
					let t = p.Z.getMessage(e.channel_id, e.id);
					O = !e.isSearchHit && null != t, x = null != (l = null == t ? void 0 : t.reactions) ? l : x
				}
				let I = h.size > 0,
					S = x.some(e => !0 === e.me_vote),
					N = !E && S,
					P = N || _ || y,
					A = m && O && (!S || E || P),
					w = null == (r = u.Z.getChannel(e.getChannelId())) || null == (n = r.getGuildId) ? void 0 : n.call(r),
					Z = null != w ? d.ZP.getSelfMember(w) : null,
					R = (0, s.EY)(Z),
					k = (0, c.b)(Z),
					L = !b && I && !N && m && !R && !k;
				return {
					poll: o,
					canTapAnswers: A,
					canRemoveVote: N && m && !_,
					canShowVoteCounts: P,
					canSubmitVote: L,
					expirationLabel: f,
					hasSelectedAnswer: I,
					hasVoted: N,
					hasVoteRecorded: S,
					isEditingVote: E,
					isExpired: _,
					isInteractive: O,
					isSent: m,
					reactions: x,
					selectedAnswerIds: h,
					submitting: b,
					tapShouldOpenVotersModal: P,
					showResults: y
				}
			}

			function P(e, t) {
				var n, s;
				let {
					animateEmoji: c = !1,
					theme: d = "dark",
					formattedExpirationLabel: p
				} = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {}, {
					poll: g
				} = e;
				if (null == g) return;
				let C = m.default.getCurrentUser();
				if (null == C) return;
				let v = l.Z.useReducedMotion,
					j = null == (s = u.Z.getChannel(e.getChannelId())) || null == (n = s.getGuildId) ? void 0 : n.call(s),
					T = (0, y.E)(C, j),
					P = g.answers,
					A = g.layout_type,
					w = N(e, t, {
						formattedExpirationLabel: p
					});
				if (null == w) return;
				let {
					canTapAnswers: Z,
					canRemoveVote: R,
					canShowVoteCounts: k,
					canSubmitVote: L,
					expirationLabel: D = O.intl.string(O.t["e+J3JS"]),
					hasSelectedAnswer: M,
					hasVoted: U,
					isEditingVote: F,
					isExpired: B,
					isInteractive: G,
					reactions: H,
					selectedAnswerIds: V,
					submitting: z,
					tapShouldOpenVotersModal: W,
					showResults: K
				} = w, Y = (0, b.cZ)(H), X = O.intl.formatToPlainString(O.t.XRkuoa, {
					count: Y.toLocaleString()
				}), q = Math.max(...P.map(e => {
					var t, n;
					let r = I(H, "".concat(e.answer_id));
					return null != (n = null == r || null == (t = r.count_details) ? void 0 : t.vote) ? n : 0
				})), Q = P.map(e => {
					var t, n, l;
					let s = "".concat(e.answer_id),
						u = I(H, s),
						d = null != (n = null == u || null == (t = u.count_details) ? void 0 : t.vote) ? n : 0,
						p = 0 === Y ? 0 : d / Y,
						m = V.has(s),
						h = d >= q && 0 !== d,
						g = U && null != (l = null == u ? void 0 : u.me_vote) && l,
						b = S({
							didSelfVote: g,
							hasVoted: U,
							isExpired: B,
							isSelected: m,
							isLeader: h,
							showResults: K
						});
					return {
						answerId: s,
						pollMedia: {
							text: e.poll_media.text,
							emoji: function(e) {
								let {
									animateEmoji: t = !1,
									size: n = 48
								} = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
								if (null == e) return;
								let r = e.animated;
								if (null == r && null != e.id) {
									var i, l;
									r = null != (l = null == (i = a.ZP.getCustomEmojiById(e.id)) ? void 0 : i.animated) && l
								}
								let s = t && null != r && r;
								return {
									id: null == e.id ? null : "".concat(e.id),
									name: e.name,
									displayName: null == e.id ? o.ZP.convertSurrogateToName(e.name) : e.name,
									src: null == e.id ? _.ZP.getURL(e.name) : f.ZP.getEmojiURL({
										id: e.id,
										animated: s,
										size: n
									}),
									animated: s
								}
							}(e.poll_media.emoji, {
								animateEmoji: c
							}),
							stickerId: e.poll_media.sticker_id,
							attachmentIds: e.poll_media.attachment_ids
						},
						isSelected: m,
						isVictor: B && h,
						didSelfVote: g,
						style: b,
						shouldAnimateTransition: z && !v,
						votesPercentage: Math.round(100 * p),
						votes: (0, r.EQ)(A).with(i.C.IMAGE_ONLY_ANSWERS, () => "(".concat(d.toLocaleString(), ")")).otherwise(() => O.intl.formatToPlainString(O.t.XRkuoa, {
							count: d.toLocaleString()
						}))
					}
				}), J = (0, r.EQ)({
					isExpired: B,
					canSubmitVote: L,
					hasVoted: U,
					isEditingVote: F,
					canRemoveVote: R,
					isInteractive: G,
					showResults: K
				}).with({
					isInteractive: !1
				}, () => void 0).with({
					isExpired: !0
				}, () => void 0).with({
					isEditingVote: !0
				}, () => ({
					label: O.intl.string(O.t.JwkNU1),
					presentation: "button",
					enabled: M,
					type: "submit"
				})).with({
					canRemoveVote: !0
				}, () => ({
					label: O.intl.string(O.t.XhQEh4),
					presentation: "secondaryButton",
					enabled: !0,
					type: "remove"
				})).with({
					hasVoted: !1,
					showResults: !0
				}, () => ({
					label: O.intl.string(O.t.gNj6Ii),
					presentation: "secondaryButton",
					enabled: !0,
					type: "showVotes"
				})).otherwise(() => ({
					label: O.intl.string(O.t.JwkNU1),
					presentation: "button",
					enabled: L,
					type: "submit"
				})), $ = (0, h.isIOS)() ? O.intl.string(O.t.PVATMz) : O.intl.string(O.t.cHfFqq), ee = (0, r.EQ)({
					isExpired: B,
					isInteractive: G,
					isEditingVote: F
				}).with({
					isInteractive: !1,
					isExpired: !1
				}, () => ({
					label: O.intl.string(O.t.trrip6),
					presentation: "text",
					enabled: !1
				})).with({
					isEditingVote: !0
				}, () => ({
					label: O.intl.string(O.t["ETE/oK"]),
					presentation: "textButton",
					enabled: !0,
					type: "cancel"
				})).otherwise(() => ({
					label: X,
					secondaryLabel: D,
					accessibilityHint: $,
					presentation: "text",
					enabled: !0,
					type: "showVoterDetails"
				})), et = !G || B || U || K ? void 0 : {
					label: O.intl.string(O.t["/KHAUF"]),
					presentation: "textButton",
					enabled: !0,
					type: "showVotes"
				}, en = g.allow_multiselect, er = (0, r.EQ)({
					isInteractive: G,
					isExpired: B,
					canSelectMultipleAnswers: en
				}).with({
					isInteractive: !1
				}, () => void 0).with({
					isExpired: !0
				}, () => void 0).with({
					canSelectMultipleAnswers: !0
				}, () => O.intl.string(O.t.yCXvxc)).otherwise(() => O.intl.string(O.t["9Y2wKC"]));
				return {
					question: g.question,
					promptLabel: er,
					answers: Q,
					answersInteraction: (0, r.EQ)({
						tapShouldOpenVotersModal: W,
						canTapAnswers: Z,
						canSelectMultipleAnswers: en
					}).with({
						tapShouldOpenVotersModal: !0
					}, () => E.Y7.LIST).with({
						canTapAnswers: !1
					}, () => E.Y7.LIST).with({
						canSelectMultipleAnswers: !1
					}, () => E.Y7.RADIO_BUTTONS).with({
						canSelectMultipleAnswers: !0
					}, () => E.Y7.CHECKBOXES).exhaustive(),
					answerTapAccessibilityLabel: W ? $ : void 0,
					layoutType: A,
					resources: (0, x.Z)({
						theme: d,
						layoutType: A
					}),
					containerStyle: "normal",
					primaryAction: J,
					isInteractive: G,
					canTapAnswers: Z,
					canSelectMultipleAnswers: en,
					hasSelectedAnswer: M,
					canShowVoteCounts: k,
					hasVoted: U,
					isExpired: B,
					myAvatarUrl: T,
					secondaryAction: ee,
					tertiaryAction: et
				}
			}
		},
		562293: function(e, t, n) {
			n.d(t, {
				H: () => a,
				Z: () => o
			});
			var r = n(913527),
				i = n.n(r),
				l = n(388032);

			function a(e) {
				let t = i()();
				if (e <= t) return;
				let n = e.diff(t, "days");
				if (n > 1) return l.intl.formatToPlainString(l.t.dex68f, {
					days: n
				});
				let r = e.diff(t, "hours");
				if (r > 1) return l.intl.formatToPlainString(l.t.BWqf0d, {
					hours: r
				});
				let a = e.diff(t, "minutes");
				return l.intl.formatToPlainString(l.t["3SLXAw"], {
					minutes: a
				})
			}

			function o(e) {
				if (null != e) return a(e)
			}
		},
		977683: function(e, t, n) {
			n.d(t, {
				Z: () => u
			});
			var r = n(73800),
				i = n(410030),
				l = n(695346),
				a = n(798628),
				o = n(275344),
				s = n(918088),
				c = n(562293);

			function u(e, t) {
				var n;
				let u = (0, o.v)(e),
					d = (0, a.cE)(u.getChannelId())[u.id],
					p = (0, c.Z)(null == (n = u.poll) ? void 0 : n.expiry),
					m = l.Yk.useSetting(),
					f = (0, i.ZP)(),
					_ = null != t ? t : f;
				return r.useMemo(() => (0, s.ZP)(u, d, {
					animateEmoji: m,
					theme: _,
					formattedExpirationLabel: p
				}), [m, u, d, p, _])
			}
		},
		809026: function(e, t, n) {
			function r(e) {
				if ((null == e ? void 0 : e.fields) == null) return null;
				let t = {},
					n = {};
				for (let r of e.fields) switch (r.rawName) {
					case "poll_question_text":
						t.questionText = r.rawValue;
						break;
					case "victor_answer_id":
						t.victorAnswerId = r.rawValue;
						break;
					case "victor_answer_text":
						t.victorAnswerText = r.rawValue;
						break;
					case "victor_answer_votes":
						t.victorAnswerVotes = parseInt(r.rawValue, 10);
						break;
					case "total_votes":
						t.totalVotes = parseInt(r.rawValue, 10);
						break;
					case "victor_answer_emoji_id":
						n.id = r.rawValue;
						break;
					case "victor_answer_emoji_name":
						n.name = r.rawValue;
						break;
					case "victor_answer_emoji_animated":
						n.animated = "true" === r.rawValue
				}
				if (null != n.name) {
					var r;
					n.animated = null != (r = n.animated) && r, t.victorEmoji = n
				}
				return t
			}
			n.d(t, {
				Z: () => r
			}), n(388685)
		},
		507435: function(e, t, n) {
			n.d(t, {
				Z: () => j
			}), n(953529);
			var r = n(255367),
				i = n(73800),
				l = n(120356),
				a = n.n(l),
				o = n(468194),
				s = n(755721),
				c = n(481060),
				u = n(904245),
				d = n(596454),
				p = n(377171),
				m = n(739566),
				f = n(942951),
				_ = n(834129),
				h = n(809026),
				g = n(139256),
				b = n(489887),
				E = n(388032),
				y = n(271629);

			function x() {
				return (0, r.jsx)("svg", {
					width: "24",
					height: "24",
					viewBox: "0 0 24 24",
					fill: p.Z.INTERACTIVE_NORMAL,
					"aria-hidden": !0,
					children: (0, r.jsx)("path", {
						"fill-rule": "evenodd",
						"clip-rule": "evenodd",
						d: "M12 23C18.0751 23 23 18.0751 23 12C23 5.92487 18.0751 1 12 1C5.92487 1 1 5.92487 1 12C1 18.0751 5.92487 23 12 23ZM5.70711 9.29289C5.31658 8.90237 4.68342 8.90237 4.29289 9.29289C3.90237 9.68342 3.90237 10.3166 4.29289 10.7071L5.08579 11.5L4.29289 12.2929C3.90237 12.6834 3.90237 13.3166 4.29289 13.7071C4.68342 14.0976 5.31658 14.0976 5.70711 13.7071L6.5 12.9142L7.29289 13.7071C7.68342 14.0976 8.31658 14.0976 8.70711 13.7071C9.09763 13.3166 9.09763 12.6834 8.70711 12.2929L7.91421 11.5L8.70711 10.7071C9.09763 10.3166 9.09763 9.68342 8.70711 9.29289C8.31658 8.90237 7.68342 8.90237 7.29289 9.29289L6.5 10.0858L5.70711 9.29289ZM15.2929 9.29289C15.6834 8.90237 16.3166 8.90237 16.7071 9.29289L17.5 10.0858L18.2929 9.29289C18.6834 8.90237 19.3166 8.90237 19.7071 9.29289C20.0976 9.68342 20.0976 10.3166 19.7071 10.7071L18.9142 11.5L19.7071 12.2929C20.0976 12.6834 20.0976 13.3166 19.7071 13.7071C19.3166 14.0976 18.6834 14.0976 18.2929 13.7071L17.5 12.9142L16.7071 13.7071C16.3166 14.0976 15.6834 14.0976 15.2929 13.7071C14.9024 13.3166 14.9024 12.6834 15.2929 12.2929L16.0858 11.5L15.2929 10.7071C14.9024 10.3166 14.9024 9.68342 15.2929 9.29289ZM9.08869 17.5563C8.78148 18.0152 8.16038 18.1382 7.70142 17.831C7.24247 17.5238 7.11947 16.9027 7.42669 16.4437C8.41166 14.9723 10.092 14 11.9999 14C13.9078 14 15.5881 14.9723 16.5731 16.4437C16.8803 16.9027 16.7573 17.5238 16.2984 17.831C15.8394 18.1382 15.2183 18.0152 14.9111 17.5563C14.2815 16.6158 13.2124 16 11.9999 16C10.7874 16 9.71825 16.6158 9.08869 17.5563Z",
						fill: "currentColor"
					})
				})
			}

			function C(e) {
				let t, {
					hasNoVotes: n,
					victorEmoji: i
				} = e;
				if (n) t = (0, r.jsx)(x, {});
				else if (null != i) {
					let e = "" !== i.name ? i.name : i.displayName;
					t = (0, r.jsx)(d.Z, {
						emojiId: i.id,
						emojiName: e,
						animated: i.animated
					})
				}
				return null != t ? (0, r.jsx)("div", {
					className: y.imageContainer,
					children: t
				}) : null
			}

			function v(e) {
				let t;
				var {
					type: n
				} = e, i = function(e, t) {
					if (null == e) return {};
					var n, r, i = function(e, t) {
						if (null == e) return {};
						var n, r, i = {},
							l = Object.keys(e);
						for (r = 0; r < l.length; r++) n = l[r], t.indexOf(n) >= 0 || (i[n] = e[n]);
						return i
					}(e, t);
					if (Object.getOwnPropertySymbols) {
						var l = Object.getOwnPropertySymbols(e);
						for (r = 0; r < l.length; r++) n = l[r], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n])
					}
					return i
				}(e, ["type"]);
				let l = "text-muted";
				switch (n) {
					case "NO_VOTES":
						t = (0, r.jsx)(c.Text, {
							variant: "text-sm/semibold",
							color: "text-default",
							scaleFontToUserSetting: !0,
							children: E.intl.string(E.t["a+lSZ2"])
						});
						break;
					case "VICTOR":
						let {
							victorAnswerText: a, victorVotePercentage: o
						} = i;
						t = (0, r.jsxs)(r.Fragment, {
							children: [(0, r.jsxs)("div", {
								className: y.victorAnswer,
								children: [(0, r.jsx)(c.Text, {
									variant: "text-sm/semibold",
									color: "text-default",
									className: y.victorAnswerText,
									scaleFontToUserSetting: !0,
									children: a
								}), (0, r.jsx)(g.ZY, {
									size: 16,
									className: y.victorIcon,
									isVictor: !0,
									isExpired: !0
								})]
							}), (0, r.jsxs)(c.Text, {
								variant: "text-xs/medium",
								color: l,
								scaleFontToUserSetting: !0,
								children: [E.intl.string(E.t.ufIDIy), " • ", o, "%"]
							})]
						});
						break;
					case "TIE":
						let {
							tiedVotePercentage: s
						} = i;
						t = (0, r.jsxs)(r.Fragment, {
							children: [(0, r.jsx)(c.Text, {
								variant: "text-sm/semibold",
								color: "text-default",
								scaleFontToUserSetting: !0,
								children: E.intl.string(E.t.kPN9sr)
							}), (0, r.jsxs)(c.Text, {
								variant: "text-xs/medium",
								color: l,
								scaleFontToUserSetting: !0,
								children: [s, "%"]
							})]
						})
				}
				return (0, r.jsx)("div", {
					className: y.description,
					children: t
				})
			}

			function O(e) {
				let {
					className: t,
					data: n,
					onClickPollLink: l
				} = e, o = i.useMemo(() => (function(e) {
					if (0 === e.totalVotes) return {
						type: "NO_VOTES"
					};
					let t = null != e.victorAnswerId,
						n = e.totalVotes > 0 ? Math.round(e.victorAnswerVotes / e.totalVotes * 100) : 0;
					return t ? {
						type: "VICTOR",
						victorAnswerText: e.victorAnswerText,
						victorVotePercentage: n
					} : {
						type: "TIE",
						tiedVotePercentage: n
					}
				})(n), [n]), u = null != n.victorEmoji || "NO_VOTES" === o.type;
				return (0, r.jsxs)("div", {
					className: a()(y.container, {
						[y.containerWithImage]: u
					}, t),
					children: [(0, r.jsx)(C, {
						hasNoVotes: "NO_VOTES" === o.type,
						victorEmoji: n.victorEmoji
					}), (0, r.jsx)(v, function(e) {
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
					}({}, o)), null != l && (0, r.jsx)(s.zx, {
						className: y.button,
						size: s.zx.Sizes.TINY,
						onClick: l,
						color: s.zx.Colors.PRIMARY,
						children: (0, r.jsx)(c.Text, {
							variant: "text-sm/medium",
							color: "none",
							scaleFontToUserSetting: !0,
							children: E.intl.string(E.t.Jw7VbW)
						})
					})]
				})
			}

			function j(e) {
				var t;
				let {
					message: n,
					channel: l,
					compact: a,
					disableInteraction: s = !1
				} = e, d = n.embeds[0], p = i.useMemo(() => (0, h.Z)(d), [d]), g = (0, o.aF)(null != (t = null == p ? void 0 : p.questionText) ? t : "", b.Dv), x = (0, m.ZP)(n), C = (0, f.l)({
					user: n.author,
					channelId: l.id,
					guildId: l.guild_id,
					messageId: n.id
				}), v = n.messageReference, j = i.useCallback(() => {
					null != v && u.Z.jumpToMessage({
						channelId: v.channel_id,
						messageId: v.message_id,
						flash: !0,
						returnMessageId: n.id
					})
				}, [n.id, v]);
				return null == p ? null : (0, r.jsxs)(r.Fragment, {
					children: [(0, r.jsx)(_.Z, {
						iconNode: (0, r.jsx)(c.QDj, {
							size: "xs"
						}),
						timestamp: n.timestamp,
						compact: a,
						children: E.intl.format(E.t["VJcK4+"], {
							username: x.nick,
							usernameHook: C(x),
							title: g,
							titleOnClick: j
						})
					}), (0, r.jsx)(O, {
						className: y.embed,
						data: p,
						onClickPollLink: s ? void 0 : j
					})]
				})
			}
		},
		139256: function(e, t, n) {
			n.d(t, {
				$e: () => w,
				$w: () => D,
				Og: () => U,
				ZY: () => M,
				sc: () => k,
				zs: () => F
			}), n(314940), n(953529);
			var r = n(255367),
				i = n(73800),
				l = n(120356),
				a = n.n(l),
				o = n(278074),
				s = n(481060),
				c = n(596454),
				u = n(44315),
				d = n(377171),
				p = n(124347),
				m = n(695346),
				f = n(186523),
				_ = n(553826),
				h = n(506071),
				g = n(203143),
				b = n(79390),
				E = n(839963),
				y = n(294608),
				x = n(65145),
				C = n(981631),
				v = n(388032),
				O = n(56228);

			function j(e) {
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

			function S(e) {
				let {
					className: t,
					children: n
				} = e;
				return (0, r.jsx)("ul", {
					"aria-label": v.intl.string(v.t.sJpqBQ),
					className: t,
					children: n
				})
			}

			function T(e) {
				let {
					className: t,
					children: n
				} = e;
				return (0, r.jsx)("div", {
					"aria-label": v.intl.string(v.t.sJpqBQ),
					role: "group",
					className: t,
					children: n
				})
			}

			function N(e) {
				let {
					className: t,
					children: n
				} = e, i = (0, s.arW)({
					orientation: "vertical"
				}), {
					ref: l
				} = i, a = function(e, t) {
					if (null == e) return {};
					var n, r, i = function(e, t) {
						if (null == e) return {};
						var n, r, i = {},
							l = Object.keys(e);
						for (r = 0; r < l.length; r++) n = l[r], t.indexOf(n) >= 0 || (i[n] = e[n]);
						return i
					}(e, t);
					if (Object.getOwnPropertySymbols) {
						var l = Object.getOwnPropertySymbols(e);
						for (r = 0; r < l.length; r++) n = l[r], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n])
					}
					return i
				}(i, ["ref"]);
				return (0, r.jsx)("div", I(j({
					"aria-label": v.intl.string(v.t.sJpqBQ),
					ref: l
				}, a), {
					className: t,
					children: n
				}))
			}

			function P(e) {
				let {
					className: t,
					onClick: n,
					isSelected: i,
					isFirstAnswer: l,
					children: o
				} = e, {
					pollAnswerRef: c
				} = (0, x.dv)();
				return (0, r.jsx)(s.P3F, {
					role: "checkbox",
					className: a()(t, O.enabled),
					onClick: n,
					"aria-checked": i,
					ref: l ? c : void 0,
					children: o
				})
			}

			function A(e) {
				let {
					className: t,
					children: n,
					onClick: i,
					isSelected: l,
					hasSelectedAnyAnswer: o,
					isFirstAnswer: c
				} = e, {
					pollAnswerRef: u
				} = (0, x.dv)();
				return (0, r.jsx)(s.P3F, {
					role: "radio",
					className: a()(t, O.enabled),
					onClick: i,
					"aria-checked": l,
					tabIndex: o ? l ? 0 : -1 : c ? 0 : -1,
					ref: c ? u : void 0,
					children: n
				})
			}

			function w(e) {
				let {
					answers: t,
					answersInteraction: n,
					answerTapAccessibilityLabel: i,
					canTapAnswers: l,
					hasSelectedAnyAnswer: a,
					className: s,
					answerClassName: c,
					renderAnswerContent: u
				} = e, {
					ContainerComponent: d,
					answerElementType: p
				} = (0, o.EQ)({
					canTapAnswers: l,
					answersInteraction: n
				}).with({
					answersInteraction: E.Y7.RADIO_BUTTONS
				}, () => ({
					ContainerComponent: N,
					answerElementType: 1
				})).with({
					answersInteraction: E.Y7.CHECKBOXES
				}, () => ({
					ContainerComponent: T,
					answerElementType: 2
				})).with({
					canTapAnswers: !0,
					answersInteraction: E.Y7.LIST
				}, () => ({
					ContainerComponent: S,
					answerElementType: 3
				})).otherwise(() => ({
					ContainerComponent: S,
					answerElementType: 0
				}));
				return (0, r.jsx)(d, {
					className: s,
					children: t.map((e, t) => (0, r.jsx)(Z, {
						className: c,
						answer: e,
						isFirstAnswer: 0 === t,
						elementType: p,
						answerTapAccessibilityLabel: i,
						hasSelectedAnyAnswer: a,
						children: u(e)
					}, e.answerId))
				})
			}

			function Z(e) {
				let {
					className: t,
					answer: n,
					children: l,
					hasSelectedAnyAnswer: o,
					isFirstAnswer: s,
					elementType: c
				} = e, {
					channelId: u,
					messageId: d
				} = (0, y.pE)(), p = (0, y.$B)(n.style), m = !0 === n.isSelected, f = i.useCallback(() => {
					g.Z.handlePollAnswerTapped({
						channelId: u,
						messageId: d,
						answerId: n.answerId
					})
				}, [u, d, n.answerId]);
				switch (c) {
					case 0:
					case 3:
						return (0, r.jsx)("li", {
							className: a()(t, p),
							children: l
						});
					case 1:
						return (0, r.jsx)(A, {
							className: a()(t, p),
							onClick: f,
							isSelected: m,
							hasSelectedAnyAnswer: o,
							isFirstAnswer: s,
							children: l
						});
					case 2:
						return (0, r.jsx)(P, {
							className: a()(t, p),
							onClick: f,
							isSelected: m,
							isFirstAnswer: s,
							children: l
						})
				}
			}

			function R(e) {
				var t;
				let {
					attachment: n,
					className: i
				} = e, l = (0, h.n)(), a = m.QK.useSetting();
				return (0, r.jsx)(p.ZP, {
					className: i,
					imageClassName: O.attachmentImage,
					src: null != n.proxy_url && "" !== n.proxy_url ? n.proxy_url : n.url,
					alt: null != (t = n.description) ? t : (0, b.fw)(n.filename),
					responsive: !0,
					width: 212,
					height: 212,
					autoPlay: a,
					shouldAnimate: l,
					shouldRenderAccessory: !1
				})
			}

			function k(e) {
				let {
					className: t,
					emoji: n
				} = e;
				return (0, r.jsx)(c.Z, {
					className: t,
					emojiId: n.id,
					emojiName: n.name,
					animated: n.animated
				})
			}

			function L(e, t) {
				return null != e ? (0, r.jsx)("div", {
					className: e,
					children: t
				}) : t
			}

			function D(e) {
				let {
					media: t,
					containerClassName: n,
					attachmentClassName: i,
					emojiClassName: l,
					fallback: a
				} = e, {
					message: o
				} = (0, y.GF)();
				if (null != t.attachmentIds && t.attachmentIds.length > 0) {
					let e = o.attachments.find(e => {
						var n;
						return e.id === (null == (n = t.attachmentIds) ? void 0 : n[0])
					});
					if (null != e) return L(n, (0, r.jsx)(R, {
						className: i,
						attachment: e
					}))
				}
				return null != t.emoji ? L(n, (0, r.jsx)(k, {
					className: l,
					emoji: t.emoji
				})) : void 0 !== a ? a : null
			}

			function M(e) {
				let {
					isVictor: t,
					isExpired: n,
					size: i,
					className: l
				} = e, {
					color: a,
					backgroundColor: c
				} = (0, o.EQ)({
					isVictor: t,
					isExpired: n
				}).with({
					isExpired: !0,
					isVictor: !0
				}, () => ({
					color: d.Z.BUTTON_POSITIVE_BACKGROUND,
					backgroundColor: (0, u.Lq)(C.Ilk.WHITE_500)
				})).with({
					isExpired: !0,
					isVictor: !1
				}, () => ({
					color: d.Z.ICON_PRIMARY,
					backgroundColor: d.Z.BACKGROUND_MOD_FAINT
				})).otherwise(() => ({
					color: (0, u.Lq)(C.Ilk.BRAND_500),
					backgroundColor: (0, u.Lq)(C.Ilk.WHITE_500)
				}));
				return (0, r.jsx)(s.owK, {
					size: "custom",
					width: i,
					height: i,
					className: l,
					color: a,
					secondaryColor: c,
					"aria-hidden": !0
				})
			}

			function U(e) {
				let {
					isSelected: t,
					size: n,
					className: i
				} = e, l = {
					width: n,
					height: n,
					background: O.radioBackground,
					"aria-hidden": !0
				};
				return t ? (0, r.jsx)(_.Z, I(j({}, l), {
					foreground: O.radioForeground,
					className: i
				})) : (0, r.jsx)(f.Z, I(j({}, l), {
					className: i
				}))
			}

			function F(e) {
				let {
					isSelected: t,
					size: n,
					className: i
				} = e, l = .85 * n;
				return (0, r.jsx)("div", {
					className: a()(O.checkbox, {
						[O.checkboxSelected]: t
					}, i),
					style: {
						width: n,
						height: n
					},
					"aria-hidden": !0,
					children: t && (0, r.jsx)(s.dz2, {
						size: "custom",
						width: l,
						height: l,
						color: (0, u.Lq)(C.Ilk.WHITE_500)
					})
				})
			}
		},
		365206: function(e, t, n) {
			n.d(t, {
				Z: () => f
			});
			var r = n(255367);
			n(73800);
			var i = n(120356),
				l = n.n(i),
				a = n(528708),
				o = n(481060),
				s = n(839963),
				c = n(139256),
				u = n(388032),
				d = n(241127);

			function p(e) {
				let {
					didSelfVote: t,
					label: n,
					percentage: i
				} = e;
				return (0, r.jsxs)("div", {
					className: d.votesData,
					children: [t && (0, r.jsx)(a.T, {
						children: u.intl.string(u.t["8DAM+/"])
					}), (0, r.jsxs)(o.Text, {
						variant: "text-md/semibold",
						color: "none",
						children: [i, "%"]
					}), (0, r.jsx)(o.Text, {
						variant: "text-xs/semibold",
						color: "none",
						children: n
					})]
				})
			}

			function m(e) {
				let {
					answer: t,
					isExpired: n,
					myAvatarUrl: i,
					canShowVoteCounts: a
				} = e, o = !0 === t.isSelected, s = !0 === t.didSelfVote, u = !0 === t.isVictor;
				return (0, r.jsxs)(r.Fragment, {
					children: [(0, r.jsx)(c.$w, {
						attachmentClassName: l()(d.attachment, {
							[d.attachmentWithResults]: a
						}),
						emojiClassName: d.emoji,
						media: t.pollMedia,
						fallback: (0, r.jsx)("div", {
							className: l()(d.attachment, d.mediaMissing)
						})
					}), o && (0, r.jsx)(c.ZY, {
						size: 40,
						isVictor: u,
						isExpired: n,
						className: d.selectedIcon
					}), a && (0, r.jsxs)(r.Fragment, {
						children: [(0, r.jsx)(p, {
							didSelfVote: s,
							percentage: t.votesPercentage,
							label: t.votes,
							myAvatarUrl: s ? i : void 0
						}), (!n && s || u) && (0, r.jsx)(c.ZY, {
							size: 18,
							isVictor: u,
							isExpired: n,
							className: d.pollAnswerIcon
						})]
					})]
				})
			}

			function f(e) {
				var {
					isExpired: t,
					myAvatarUrl: n,
					answersInteraction: i,
					canShowVoteCounts: a
				} = e, o = function(e, t) {
					if (null == e) return {};
					var n, r, i = function(e, t) {
						if (null == e) return {};
						var n, r, i = {},
							l = Object.keys(e);
						for (r = 0; r < l.length; r++) n = l[r], t.indexOf(n) >= 0 || (i[n] = e[n]);
						return i
					}(e, t);
					if (Object.getOwnPropertySymbols) {
						var l = Object.getOwnPropertySymbols(e);
						for (r = 0; r < l.length; r++) n = l[r], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n])
					}
					return i
				}(e, ["isExpired", "myAvatarUrl", "answersInteraction", "canShowVoteCounts"]);
				return (0, r.jsx)(c.$e, function(e) {
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
					className: d.answersContainer,
					answerClassName: l()(d.answer, {
						[d.currentlyVoting]: i !== s.Y7.LIST
					}),
					myAvatarUrl: n,
					answersInteraction: i,
					renderAnswerContent: e => (0, r.jsx)(m, {
						answer: e,
						isExpired: t,
						myAvatarUrl: n,
						answersInteraction: i,
						canShowVoteCounts: a
					})
				}, o))
			}
		},
		294608: function(e, t, n) {
			n.d(t, {
				$B: () => s,
				GF: () => a,
				XL: () => o,
				pE: () => c
			}), n(415506);
			var r = n(255367),
				i = n(73800);
			let l = i.createContext(void 0);

			function a() {
				let e = i.useContext(l);
				if (null == e) throw Error("No PollContextProvider found");
				return e
			}

			function o(e) {
				let {
					children: t,
					message: n,
					poll: a
				} = e, o = i.useMemo(() => ({
					message: n,
					poll: a
				}), [n, a]);
				return (0, r.jsx)(l.Provider, {
					value: o,
					children: t
				})
			}

			function s(e) {
				return function() {
					let {
						poll: e
					} = a();
					return e.resources
				}().styles[e]
			}

			function c() {
				let {
					message: e
				} = a(), t = e.getChannelId();
				return i.useMemo(() => ({
					channelId: t,
					messageId: e.id
				}), [e.id, t])
			}
		},
		128435: function(e, t, n) {
			n.d(t, {
				Z: () => v
			}), n(314940);
			var r = n(255367),
				i = n(73800),
				l = n(120356),
				a = n.n(l),
				o = n(278074),
				s = n(263568),
				c = n(755721),
				u = n(481060),
				d = n(203143),
				p = n(365206),
				m = n(294608),
				f = n(65145),
				_ = n(920557),
				h = n(484953);

			function g(e) {
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

			function b(e) {
				let {
					media: t
				} = e;
				return (0, r.jsx)(u.X6q, {
					variant: "text-md/medium",
					className: h.question,
					scaleFontToUserSetting: !0,
					children: t.text
				})
			}

			function E(e) {
				let {
					children: t,
					onClick: n,
					variant: i = "text-sm/medium",
					color: l = "interactive-active",
					className: o,
					buttonRef: s
				} = e;
				return (0, r.jsx)(c.zx, {
					onClick: n,
					className: a()(h.__invalid_textButton, o),
					look: c.zx.Looks.BLANK,
					size: c.zx.Sizes.NONE,
					buttonRef: s,
					children: (0, r.jsx)(u.Text, {
						variant: i,
						color: l,
						scaleFontToUserSetting: !0,
						children: t
					})
				})
			}

			function y(e) {
				let {
					buttonLabel: t,
					secondaryLabel: n,
					handleClick: i,
					isInteractive: l,
					className: o
				} = e;
				return (0, r.jsxs)("div", {
					className: a()(h.detailsText, o),
					children: [l ? (0, r.jsx)(E, {
						onClick: i,
						variant: "text-sm/normal",
						color: "none",
						className: a()(h.detailsTextButton, h.interactive),
						children: t
					}) : (0, r.jsx)(u.Text, {
						variant: "text-sm/normal",
						color: "text-muted",
						scaleFontToUserSetting: !0,
						children: t
					}), null != n && (0, r.jsx)(u.Text, {
						variant: "text-sm/normal",
						color: "text-muted",
						scaleFontToUserSetting: !0,
						children: n
					})]
				})
			}

			function x(e) {
				let {
					action: t,
					channelId: n,
					messageId: l,
					isInteractive: o,
					className: s
				} = e, {
					actionButtonRef: p,
					manageFocusOnAction: m
				} = (0, f.dv)(), _ = i.useCallback(async () => {
					(null == t ? void 0 : t.type) != null && (await d.Z.handlePollActionTapped({
						channelId: n,
						messageId: l,
						type: t.type
					}), m(t.type))
				}, [null == t ? void 0 : t.type, n, l, m]);
				return null == t ? null : "button" === t.presentation || "secondaryButton" === t.presentation ? (0, r.jsx)(c.zx, {
					buttonRef: p,
					onClick: _,
					disabled: !t.enabled,
					color: "secondaryButton" === t.presentation ? c.zx.Colors.CUSTOM : c.zx.Colors.BRAND,
					size: c.zx.Sizes.SMALL,
					className: a()(s, h.buttonPresentation, "secondaryButton" === t.presentation && h.secondaryButtonPresentation),
					children: (0, r.jsx)(u.Text, {
						variant: "text-sm/medium",
						color: "none",
						scaleFontToUserSetting: !0,
						children: t.label
					})
				}, t.presentation) : "textButton" === t.presentation ? (0, r.jsx)(E, {
					buttonRef: p,
					onClick: _,
					className: s,
					children: t.label
				}) : (0, r.jsx)(y, {
					buttonLabel: t.label,
					secondaryLabel: t.secondaryLabel,
					handleClick: _,
					isInteractive: o,
					className: s
				})
			}

			function C(e) {
				let {
					message: t,
					poll: n,
					className: i
				} = e, l = (0, m.$B)(n.containerStyle), c = function(e, t) {
					let n = {
						answers: t.answers,
						answersInteraction: t.answersInteraction,
						answerTapAccessibilityLabel: t.answerTapAccessibilityLabel,
						isExpired: t.isExpired,
						canTapAnswers: t.canTapAnswers,
						hasSelectedAnyAnswer: t.hasSelectedAnswer,
						myAvatarUrl: t.myAvatarUrl,
						canShowVoteCounts: t.canShowVoteCounts
					};
					return (0, o.EQ)(t.layoutType).with(s.C.DEFAULT, () => (0, r.jsx)(_.K, g({}, n))).with(s.C.IMAGE_ONLY_ANSWERS, () => (0, r.jsx)(p.Z, g({}, n))).otherwise(() => null)
				}(0, n);
				return null == c ? null : (0, r.jsx)("div", {
					className: a()(h.container, l, i),
					children: (0, r.jsxs)(u.y5t, {
						children: [(0, r.jsxs)("div", {
							className: h.header,
							children: [(0, r.jsx)(b, {
								media: n.question
							}), null != n.promptLabel && (0, r.jsx)(u.Text, {
								variant: "text-sm/normal",
								color: "text-muted",
								className: h.prompt,
								scaleFontToUserSetting: !0,
								children: n.promptLabel
							})]
						}), c, (0, r.jsxs)("div", {
							className: h.bottomBar,
							children: [(0, r.jsx)(x, {
								channelId: t.getChannelId(),
								messageId: t.id,
								action: n.secondaryAction,
								className: h.secondaryAction,
								isInteractive: n.isInteractive
							}), (0, r.jsx)(x, {
								channelId: t.getChannelId(),
								messageId: t.id,
								action: n.tertiaryAction,
								className: h.tertiaryAction
							}), (0, r.jsx)(x, {
								channelId: t.getChannelId(),
								messageId: t.id,
								action: n.primaryAction
							})]
						})]
					})
				})
			}

			function v(e) {
				let {
					message: t,
					poll: n,
					className: i
				} = e;
				return (0, r.jsx)(m.XL, {
					message: t,
					poll: n,
					children: (0, r.jsx)(f.Pk, {
						children: (0, r.jsx)(C, {
							message: t,
							poll: n,
							className: i
						})
					})
				})
			}
		},
		65145: function(e, t, n) {
			n.d(t, {
				Pk: () => c,
				dv: () => o
			}), n(415506), n(388685);
			var r = n(255367),
				i = n(73800),
				l = n(823379);
			let a = i.createContext(void 0);

			function o() {
				let e = i.useContext(a);
				if (null == e) throw Error("No PollFocusContextProvider found");
				return e
			}

			function s(e) {
				let {
					children: t,
					actionButtonRef: n,
					pollAnswerRef: l,
					manageFocusOnAction: o
				} = e, s = i.useMemo(() => ({
					actionButtonRef: n,
					pollAnswerRef: l,
					manageFocusOnAction: o
				}), [n, l, o]);
				return (0, r.jsx)(a.Provider, {
					value: s,
					children: t
				})
			}

			function c(e) {
				let {
					children: t
				} = e, [n, a] = i.useState(), o = i.useRef(null), c = i.useRef(null);
				return i.useEffect(() => {
					var e, t, r;
					"POLL_ANSWERS" === n && null != c.current && (null == (t = c.current) || null == (e = t.ref) || e.focus()), "ACTION_BUTTON" === n && null != o.current && (null == (r = o.current) || r.focus())
				}, [n]), (0, r.jsx)(s, {
					pollAnswerRef: c,
					actionButtonRef: o,
					manageFocusOnAction: e => {
						switch (e) {
							case "submit":
							case "cancel":
								a("ACTION_BUTTON");
								break;
							case "remove":
							case "showVotes":
								a("POLL_ANSWERS");
								break;
							case "showVoterDetails":
								break;
							default:
								(0, l.vE)(e)
						}
					},
					children: t
				})
			}
		},
		920557: function(e, t, n) {
			n.d(t, {
				K: () => S
			}), n(388685), n(314940);
			var r = n(255367),
				i = n(73800),
				l = n(120356),
				a = n.n(l),
				o = n(528708),
				s = n(108542),
				c = n(278074),
				u = n(748780),
				d = n(755721),
				p = n(481060),
				m = n(313201),
				f = n(542578),
				_ = n(203143),
				h = n(79390),
				g = n(839963),
				b = n(139256),
				E = n(294608),
				y = n(388032),
				x = n(709893);

			function C(e) {
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

			function v(e) {
				let {
					percentage: t,
					label: n,
					canShowVoterDetails: l,
					answerId: a
				} = e, s = (0, m.Dt)(), {
					channelId: c,
					messageId: u
				} = (0, E.pE)(), [g, b] = i.useState(""), [y, v] = i.useState(!1), O = "" !== g && y, j = i.useCallback(() => {
					b((0, h.e1)(u, c, a))
				}, [u, c, a]), I = i.useCallback(() => {
					j(), v(!0)
				}, [j]), S = i.useCallback(() => {
					v(!1)
				}, []), T = i.useCallback(() => {
					(0, _.n)({
						channelId: c,
						messageId: u,
						answerId: a
					})
				}, [c, u, a]);
				i.useEffect(() => {
					if (y) return f.Z.addReactChangeListener(j), () => {
						f.Z.removeReactChangeListener(j)
					}
				}, [y, j]);
				let N = (0, r.jsx)(p.Text, {
					variant: "text-xs/semibold",
					color: "none",
					className: x.voteCount,
					scaleFontToUserSetting: !0,
					children: n
				});
				return (0, r.jsxs)("div", {
					className: x.votesData,
					children: [l ? (0, r.jsxs)(r.Fragment, {
						children: [(0, r.jsx)(p.ua7, {
							text: (0, r.jsx)(p.Text, {
								variant: "text-sm/normal",
								color: "text-muted",
								scaleFontToUserSetting: !0,
								children: g
							}),
							forceOpen: O,
							"aria-label": !1,
							children: e => {
								var t, n;
								return (0, r.jsx)(d.zx, (t = C({}, e), n = n = {
									onMouseEnter: I,
									onMouseLeave: S,
									onFocus: I,
									onBlur: S,
									onClick: T,
									className: x.voteCountButton,
									"aria-describedby": O ? s : void 0,
									look: d.zx.Looks.BLANK,
									size: d.zx.Sizes.NONE,
									children: N
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
						}), O && (0, r.jsx)(o.T, {
							id: s,
							children: g
						})]
					}) : N, (0, r.jsxs)(p.Text, {
						variant: "text-md/bold",
						color: "none",
						scaleFontToUserSetting: !0,
						children: [t, "%"]
					})]
				})
			}

			function O(e) {
				let {
					percentage: t,
					shouldAnimate: n
				} = e, i = (0, p.q_F)({
					from: {
						width: n ? "0%" : "".concat(t, "%")
					},
					to: {
						width: "".concat(t, "%")
					},
					config: {
						duration: 1200,
						easing: u.Z.Easing.inOut(u.Z.Easing.ease)
					}
				}, "animate-always");
				return (0, r.jsx)(s.animated.span, {
					className: x.votePercentageBar,
					style: i,
					"aria-hidden": !0
				})
			}

			function j(e) {
				let {
					answersInteraction: t,
					isSelected: n,
					didSelfVote: i,
					isVictor: l,
					isExpired: a,
					className: o
				} = e;
				return (0, c.EQ)({
					answersInteraction: t,
					didSelfVote: i
				}).with({
					answersInteraction: g.Y7.RADIO_BUTTONS
				}, () => (0, r.jsx)(b.Og, {
					isSelected: n,
					size: 24,
					className: o
				})).with({
					answersInteraction: g.Y7.CHECKBOXES
				}, () => (0, r.jsx)(b.zs, {
					isSelected: n,
					size: 20,
					className: o
				})).with({
					answersInteraction: g.Y7.LIST,
					didSelfVote: !0
				}, () => (0, r.jsx)(b.ZY, {
					isVictor: l,
					isExpired: a,
					size: 24,
					className: o
				})).otherwise(() => null)
			}

			function I(e) {
				let {
					answer: t,
					isExpired: n,
					answersInteraction: i,
					canShowVoteCounts: l,
					canShowVoterDetails: s
				} = e, c = !0 === t.isSelected, u = !0 === t.didSelfVote, d = !0 === t.isVictor, m = t.shouldAnimateTransition;
				return (0, r.jsxs)("div", {
					className: a()(x.answerInner, {
						[x.currentlyVoting]: i !== g.Y7.LIST,
						[x.selected]: c
					}),
					children: [l ? (0, r.jsx)(O, {
						percentage: t.votesPercentage,
						shouldAnimate: m
					}) : null, null != t.pollMedia.emoji && (0, r.jsx)(b.sc, {
						className: x.emoji,
						emoji: t.pollMedia.emoji
					}), (0, r.jsx)(p.Text, {
						className: x.label,
						variant: "text-sm/semibold",
						color: "none",
						scaleFontToUserSetting: !0,
						children: t.pollMedia.text
					}), t.didSelfVote && (0, r.jsx)(o.T, {
						children: y.intl.string(y.t["8DAM+/"])
					}), l && (0, r.jsx)(v, {
						percentage: t.votesPercentage,
						label: t.votes,
						canShowVoterDetails: s,
						answerId: t.answerId
					}), (0, r.jsx)(j, {
						answersInteraction: i,
						isSelected: c,
						didSelfVote: u,
						isVictor: d,
						isExpired: n,
						className: x.answerSelectionIcon
					})]
				})
			}

			function S(e) {
				var {
					isExpired: t,
					answersInteraction: n,
					canShowVoteCounts: i,
					canTapAnswers: l
				} = e, a = function(e, t) {
					if (null == e) return {};
					var n, r, i = function(e, t) {
						if (null == e) return {};
						var n, r, i = {},
							l = Object.keys(e);
						for (r = 0; r < l.length; r++) n = l[r], t.indexOf(n) >= 0 || (i[n] = e[n]);
						return i
					}(e, t);
					if (Object.getOwnPropertySymbols) {
						var l = Object.getOwnPropertySymbols(e);
						for (r = 0; r < l.length; r++) n = l[r], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n])
					}
					return i
				}(e, ["isExpired", "answersInteraction", "canShowVoteCounts", "canTapAnswers"]);
				return (0, r.jsx)(b.$e, C({
					className: x.answersContainer,
					answerClassName: x.answer,
					answersInteraction: n,
					canTapAnswers: l,
					renderAnswerContent: e => (0, r.jsx)(I, {
						answer: e,
						isExpired: t,
						answersInteraction: n,
						canShowVoteCounts: i,
						canShowVoterDetails: l
					})
				}, a))
			}
		},
		67390: function(e, t, n) {
			n.d(t, {
				Z: () => u
			});
			var r = n(255367);
			n(73800);
			var i = n(120356),
				l = n.n(i),
				a = n(410030),
				o = n(231338),
				s = n(388032),
				c = n(150481);

			function u(e) {
				let {
					className: t,
					size: n = "md"
				} = e, i = (0, a.ZP)() === o.BR.LIGHT ? "https://cdn.discordapp.com/assets/content/e4ec02f7af5d01c8c168eb814823a94a6bf1ce440e70e35e5a6f18b0fdad3321.png" : "https://cdn.discordapp.com/assets/content/f814e4be3c27004f4e60c1bdad648ee24acfa9716c0be8048cc63b5b869e56a4.png";
				return (0, r.jsx)("img", {
					className: l()(t, {
						[c.sm]: "sm" === n,
						[c.md]: "md" === n
					}),
					src: i,
					alt: s.intl.string(s.t.htEhYm)
				})
			}
		},
		30684: function(e, t, n) {
			n.d(t, {
				Z: () => p
			});
			var r, i, l, a = n(442837),
				o = n(570140);
			let s = !1,
				c = !1,
				u = !1;
			class d extends(l = a.ZP.Store) {
				getIsTargeted() {
					return u
				}
				shouldFetchCheckoutRecovery() {
					return !s && !c
				}
			}
			i = "CheckoutRecoveryStore", (r = "displayName") in d ? Object.defineProperty(d, r, {
				value: i,
				enumerable: !0,
				configurable: !0,
				writable: !0
			}) : d[r] = i;
			let p = new d(o.Z, {
				CHECKOUT_RECOVERY_STATUS_FETCH_SUCCESS: function(e) {
					c = !0, s = !1, u = e.isTargeted
				},
				CHECKOUT_RECOVERY_STATUS_FETCH_FAILURE: function() {
					c = !0, s = !1
				},
				CHECKOUT_RECOVERY_STATUS_FETCH: function() {
					s = !0
				},
				LOGOUT: function() {
					s = !1, c = !1, u = !1
				}
			})
		},
		451603: function(e, t, n) {
			n.d(t, {
				yU: () => o
			}), n(442837), n(536442);
			var r = n(430824),
				i = n(594174),
				l = n(74538),
				a = n(981631);

			function o() {
				let e = r.Z.getGuildCount() >= a.DZw,
					t = l.ZP.canUseIncreasedGuildCap(i.default.getCurrentUser());
				return e && !t
			}
		},
		614825: function(e, t, n) {
			n.d(t, {
				Z: () => w
			}), n(953529), n(388685);
			var r = n(255367),
				i = n(73800),
				l = n(120356),
				a = n.n(l),
				o = n(913527),
				s = n.n(o),
				c = n(873546),
				u = n(442837),
				d = n(755721),
				p = n(481060),
				m = n(568836),
				f = n(100527),
				_ = n(906732),
				h = n(963249),
				g = n(594174),
				b = n(78839),
				E = n(55935),
				y = n(63063),
				x = n(74538),
				C = n(276444),
				v = n(93237),
				O = n(786397),
				j = n(474936),
				I = n(981631),
				S = n(388032),
				T = n(271818);

			function N(e, t, n) {
				return t in e ? Object.defineProperty(e, t, {
					value: n,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : e[t] = n, e
			}

			function P(e) {
				for (var t = 1; t < arguments.length; t++) {
					var n = null != arguments[t] ? arguments[t] : {},
						r = Object.keys(n);
					"function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
						return Object.getOwnPropertyDescriptor(n, e).enumerable
					}))), r.forEach(function(t) {
						N(e, t, n[t])
					})
				}
				return e
			}
			class A extends i.Component {
				renderTitle(e, t, n) {
					let {
						trialOffer: r
					} = this.props, i = g.default.getUser(r.user_id), l = null != i ? i.username : "???", a = g.default.getUser(r.referrer_id), o = null != a ? a.username : "???";
					return e && void 0 === r.redeemed_at ? S.intl.formatToPlainString(S.t.Mptau7, {
						username: l
					}) : t ? n ? S.intl.string(S.t["9SNdf3"]) : S.intl.formatToPlainString(S.t["H0+MxM"], {
						userName: o
					}) : S.intl.formatToPlainString(S.t.IiWKws, {
						senderUserName: o,
						recipientUserName: l
					})
				}
				renderBody(e, t, n) {
					let {
						trialOffer: r
					} = this.props;
					return e && !n && void 0 === r.redeemed_at ? S.intl.format(S.t.LwCwT0, {
						helpdeskArticle: y.Z.getArticleURL(I.BhN.REFERRAL_PROGRAM)
					}) : t ? null : S.intl.string(S.t.lQLlOT)
				}
				renderActions(e, t, n) {
					var i, l;
					let {
						trialOffer: a,
						currentUser: o,
						analyticsLocations: s
					} = this.props, c = {
						onClick: () => {
							this.handleStartTrial(a, s)
						},
						color: d.zx.Colors.BRAND
					}, u = o.id !== a.user_id || (0, x.I5)(o) || !o.verified || (0, O.B)(a), p = this.renderExpirationDate(e, t, n);
					return c.disabled = u, (0, r.jsxs)("div", {
						className: T.buttonContainer,
						children: [(0, r.jsx)("div", {
							children: (0, r.jsx)(d.zx, (i = P({}, c), l = l = {
								size: d.zx.Sizes.SMALL,
								onClick: () => {
									(0, h.Z)({
										initialPlanId: null,
										subscriptionTier: j.Si.TIER_2,
										analyticsLocations: s,
										trialId: a.trial_id,
										referralTrialOfferId: a.id
									})
								},
								children: S.intl.string(S.t.O0etsL)
							}, Object.getOwnPropertyDescriptors ? Object.defineProperties(i, Object.getOwnPropertyDescriptors(l)) : (function(e, t) {
								var n = Object.keys(e);
								if (Object.getOwnPropertySymbols) {
									var r = Object.getOwnPropertySymbols(e);
									n.push.apply(n, r)
								}
								return n
							})(Object(l)).forEach(function(e) {
								Object.defineProperty(i, e, Object.getOwnPropertyDescriptor(l, e))
							}), i))
						}), (0, r.jsx)("div", {
							className: T.metadata,
							children: p
						})]
					})
				}
				renderExpirationDate(e, t, n) {
					let {
						trialOffer: r,
						trialEndsAt: i
					} = this.props;
					if (void 0 !== r.redeemed_at && !n && null !== i) return S.intl.formatToPlainString(S.t.nP0ivb, {
						date: (0, E.vc)(s()(i), "LL")
					});
					if (e || void 0 === r.expires_at) return null;
					let l = s()(r.expires_at);
					return t ? S.intl.formatToPlainString(S.t.PuSHfX, {
						date: (0, E.vc)(s()(l), "LL")
					}) : (0, v.F6)(l.valueOf())
				}
				renderMedia() {
					return (0, r.jsx)("div", {
						className: T.referral
					})
				}
				render() {
					let {
						trialOffer: e,
						currentUser: t,
						recipientHasNitro: n
					} = this.props, i = (0, O.B)(e), l = t.id === e.referrer_id;
					return (0, r.jsxs)("div", {
						className: a()(T.tile, T.container),
						children: [(0, r.jsx)("div", {
							className: T.media,
							children: this.renderMedia()
						}), (0, r.jsxs)("div", {
							className: T.description,
							children: [(0, r.jsx)(p.H, {
								className: T.title,
								children: this.renderTitle(n, i, l)
							}), (0, r.jsx)("div", {
								className: T.tagline,
								children: this.renderBody(n, i, l)
							}), (0, r.jsx)("div", {
								className: T.actions,
								children: this.renderActions(n, i, l)
							})]
						})]
					})
				}
				constructor(...e) {
					super(...e), N(this, "handleStartTrial", (e, t) => {
						(0, h.Z)({
							initialPlanId: null,
							subscriptionTier: j.Si.TIER_2,
							analyticsLocations: t,
							trialId: e.trial_id
						})
					})
				}
			}

			function w(e) {
				let {
					userTrialOfferId: t,
					canRenderReferralEmbed: n
				} = e, {
					trialOffer: i,
					isResolving: l
				} = (0, u.cj)([C.Z], () => ({
					trialOffer: n ? C.Z.getRelevantUserTrialOffer(t) : null,
					isResolving: !!n && C.Z.isResolving(t)
				}), [n, t]), a = g.default.getCurrentUser(), o = (0, u.e7)([g.default], () => null != i && (0, x.I5)(void 0 !== a && i.user_id === a.id ? a : g.default.getUser(i.user_id))), s = (0, u.e7)([b.Z], () => {
					var e;
					return o ? null == (e = b.Z.getPremiumTypeSubscription()) ? void 0 : e.trialEndsAt : null
				}), {
					analyticsLocations: d
				} = (0, _.ZP)(f.Z.SHARE_NITRO_EMBED);
				return l ? (0, r.jsx)(m.OR, {
					isHorizontal: !c.tq
				}) : n && null != i && void 0 !== a ? (0, r.jsx)(A, P({
					trialOffer: i,
					currentUser: a,
					recipientHasNitro: o,
					trialEndsAt: s,
					analyticsLocations: d
				}, e)) : (0, r.jsx)("div", {
					className: T.invalidWrapper,
					children: (0, r.jsx)("div", {
						className: T.invalid
					})
				})
			}
		},
		616106: function(e, t, n) {
			n.d(t, {
				Z: () => _
			});
			var r, i, l, a = n(913527),
				o = n.n(a),
				s = n(442837),
				c = n(570140),
				u = n(255078),
				d = n(594174),
				p = n(74538);
			let m = !1;
			class f extends(l = s.ZP.Store) {
				shouldShowReactivateNotice() {
					let e = d.default.getCurrentUser();
					return !(0, p.I5)(e) && m
				}
			}
			i = "SubscriptionRemindersStore", (r = "displayName") in f ? Object.defineProperty(f, r, {
				value: i,
				enumerable: !0,
				configurable: !0,
				writable: !0
			}) : f[r] = i;
			let _ = new f(c.Z, {
				BILLING_MOST_RECENT_SUBSCRIPTION_FETCH_SUCCESS: function(e) {
					let {
						subscription: t
					} = e;
					if (null != t) {
						var n;
						let e = u.Z.createFromServer(t);
						if (null == (0, p.Af)(e) || (null == (n = e.metadata) ? void 0 : n.ended_at) == null) return;
						let r = o()(e.metadata.ended_at);
						o()().isBetween(r.clone().add(4, "days"), r.clone().add(11, "days")) && (m = !0)
					}
				}
			})
		},
		304480: function(e, t, n) {
			n.d(t, {
				Z: () => r
			});
			let r = (0, n(818083).B)({
				kind: "user",
				id: "2025-06_referral_program_badge_banner",
				label: "Referral Program Badge Banner Experiment",
				defaultConfig: {
					enabled: !1,
					nDelayDays: 0
				},
				treatments: [{
					id: 0,
					label: "Control group. Users experience existing flow.",
					config: {
						enabled: !1,
						nDelayDays: 0
					}
				}, {
					id: 1,
					label: "Treatment group. Users with a see a badge and updated marketing page immediately after receiving a referral trial.",
					config: {
						enabled: !0,
						nDelayDays: 0
					}
				}, {
					id: 2,
					label: "Treatment group. Users with a see a badge and updated marketing page 6 days after receiving a referral trial.",
					config: {
						enabled: !0,
						nDelayDays: 6
					}
				}]
			})
		},
		29270: function(e, t, n) {
			n.d(t, {
				Z: () => r
			});

			function r(e) {
				let t = Number(e.content);
				return isNaN(t) || 0 === t ? 1 : t
			}
		},
		674701: function(e, t, n) {
			n.d(t, {
				U: () => R,
				Z: () => k
			});
			var r, i = n(255367),
				l = n(73800),
				a = n(120356),
				o = n.n(a),
				s = n(990547),
				c = n(442837),
				u = n(692547),
				d = n(755721),
				p = n(481060),
				m = n(493683),
				f = n(529103),
				_ = n(700582),
				h = n(906732),
				g = n(213609),
				b = n(541716),
				E = n(28546),
				y = n(963249),
				x = n(594174),
				C = n(626135),
				v = n(51144),
				O = n(479446),
				j = n(795448),
				I = n(441623),
				S = n(317271),
				T = n(474936),
				N = n(981631),
				P = n(182294),
				A = n(957825),
				w = n(388032),
				Z = n(587862),
				R = ((r = {}).SYSTEM_MESSAGE = "system_message", r.COACHMARK = "coachmark", r);

			function k(e) {
				let {
					giftIntentType: t,
					premiumGiftIntentCardType: n,
					recipientUser: r,
					onMouseEnter: a,
					onMouseLeave: R,
					popoutPosition: k,
					analyticsPage: L,
					analyticsSection: D,
					glow: M,
					giftIntentSecondaryAction: U
				} = e, F = (0, c.e7)([x.default], () => x.default.getCurrentUser()), {
					analyticsLocations: B
				} = (0, h.ZP)(), G = (0, c.e7)([I.Z], () => I.Z.getFriendAnniversaryYears(r.id));
				l.useEffect(() => {
					(0, g.h)({
						name: s.ImpressionNames.GIFT_INTENT_CARD,
						type: s.ImpressionTypes.VIEW,
						properties: {
							gift_intent_type: t,
							type: n,
							num_friend_anniversaries: I.Z.getFriendAnniversaries().length
						}
					})
				}, [t, n]);
				let H = () => t === T.hX.FRIEND_ANNIVERSARY ? w.intl.formatToPlainString(w.t["L2s/Nz"], {
						numberOfYears: G
					}) : (0, O.Ou)(t),
					V = "coachmark" === n,
					z = V ? Z.innerContentCoachmark : Z.innerContent,
					W = V ? Z.recipientUserAvatarCoachmark : Z.recipientUserAvatar,
					K = V ? Z.currentUserAvatarCoachmark : Z.currentUserAvatar,
					Y = V ? Z.subHeaderTextCoachmark : Z.subHeaderText,
					X = V ? d.zx.Colors.BRAND : d.zx.Colors.WHITE,
					q = V ? u.Z.colors.WHITE : u.Z.colors.BG_BRAND,
					Q = V ? Z.buttonTextPrimaryCoachmark : Z.buttonTextPrimary,
					J = V ? Z.buttonSecondaryCoachmark : Z.buttonSecondary,
					$ = V ? Z.buttonTextSecondaryCoachmark : Z.buttonTextSecondary;
				return (0, i.jsx)("div", {
					className: o()(Z.content, {
						[Z.outerGlow]: M,
						[Z.contentCoachmark]: V
					}),
					onMouseEnter: a,
					onMouseLeave: R,
					children: (0, i.jsxs)("div", {
						className: o()(z, {
							[Z.innerGlow]: M
						}),
						children: [(0, i.jsxs)("div", {
							className: Z.subContent,
							children: [(0, i.jsxs)("div", {
								className: Z.avatars,
								children: [(0, i.jsx)(_.Z, {
									className: W,
									user: r,
									"aria-label": r.username,
									size: P.EF.SIZE_56
								}), null != F && (0, i.jsx)(_.Z, {
									className: K,
									user: F,
									"aria-label": r.username,
									size: P.EF.SIZE_24
								})]
							}), (0, i.jsxs)("div", {
								className: Z.textContainer,
								children: [(0, i.jsx)(p.Text, {
									variant: "text-md/medium",
									color: V ? "header-primary" : "always-white",
									lineClamp: 3,
									children: t === T.hX.FRIEND_ANNIVERSARY ? w.intl.formatToPlainString(w.t.BWJvAA, {
										friendUserName: v.ZP.getName(r)
									}) : (0, O.Ou)(t)
								}), (0, i.jsx)(p.Text, {
									className: Y,
									variant: "text-sm/normal",
									children: t === T.hX.FRIEND_ANNIVERSARY ? w.intl.formatToPlainString(w.t.S3fdq6, {
										numberOfYears: G
									}) : (0, O.Ou)(t)
								})]
							})]
						}), (0, i.jsxs)("div", {
							className: Z.buttonContainer,
							children: [null != U && (0, i.jsx)(d.zx, {
								className: o()(Z.button, J),
								onClick: e => {
									e.stopPropagation(), C.default.track(N.rMx.GIFT_INTENT_CARD_SECONDARY_CTA_CLICKED, {
										gift_intent_type: t,
										cta_type: U
									}), U === T.X2.VIEW_ALL ? f.Z.transitionToSection(N.pJs.ALL, {
										explicit: !0
									}) : U === T.X2.SEND_MESSAGE && ((0, j.PV)(r.id), m.Z.openPrivateChannel({
										recipientIds: r.id
									}).then(() => {
										setTimeout(() => {
											(0, E.PG)(A.X1.GIF, b.Ie.NORMAL), setTimeout(() => {
												(0, E.ql)(w.intl.string(w.t.jrtJi4), !0)
											}, 50)
										}, 100)
									}))
								},
								size: d.zx.Sizes.MEDIUM,
								color: d.zx.Colors.CUSTOM,
								look: d.zx.Looks.OUTLINED,
								children: (0, i.jsx)("div", {
									className: Z.buttonContentContainer,
									children: (0, i.jsx)(p.Text, {
										variant: "text-sm/medium",
										className: o()(Z.buttonText, $),
										children: (() => {
											switch (U) {
												case T.X2.VIEW_ALL:
													return w.intl.string(w.t.WkxniI);
												case T.X2.SEND_MESSAGE:
													return w.intl.string(w.t.I61IsL);
												default:
													return
											}
										})()
									})
								})
							}), (0, i.jsx)(d.zx, {
								className: Z.button,
								onClick: e => {
									e.stopPropagation();
									let i = (0, S.F)(t);
									(0, y.Z)({
										isGift: !0,
										initialPlanId: null,
										giftRecipient: r,
										analyticsLocation: "system_message" === n ? i.chat : i.actionButtonCoachmark,
										analyticsLocations: B,
										analyticsObject: {
											page: L,
											section: D,
											object: N.qAy.BUTTON_CTA,
											objectType: N.Qqv.GIFT
										},
										giftMessage: H()
									})
								},
								size: d.zx.Sizes.MEDIUM,
								color: X,
								children: (0, i.jsxs)("div", {
									className: Z.buttonContentContainer,
									children: [(0, i.jsx)(p.OgN, {
										color: q,
										size: "custom",
										width: "14",
										height: "14"
									}), (0, i.jsx)(p.Text, {
										variant: "text-sm/medium",
										className: o()(Z.buttonText, Q),
										children: w.intl.string(w.t["wg/30t"])
									})]
								})
							})]
						}), null != k && (0, i.jsx)("div", {
							className: o()(Z.connector, {
								[Z.leftPopoutConnector]: "left" === k,
								[Z.rightPopoutConnector]: "right" === k
							})
						})]
					})
				})
			}
		},
		93237: function(e, t, n) {
			n.d(t, {
				$q: () => u,
				F6: () => c,
				HI: () => p,
				p9: () => d
			});
			var r = n(704215),
				i = n(266454),
				l = n(70956),
				a = n(709054),
				o = n(304480),
				s = n(388032);

			function c(e) {
				let t = (e - Date.now()) / l.Z.Millis.HOUR;
				return t > 24 ? s.intl.formatToPlainString(s.t["g9s+dH"], {
					numDays: Math.floor(t / 24)
				}) : t >= 1 ? s.intl.formatToPlainString(s.t.k9v339, {
					numHours: Math.floor(t)
				}) : s.intl.formatToPlainString(s.t["/d0GmZ"], {
					numMinutes: Math.floor(60 * t)
				})
			}
			let u = () => (0, i.zu)(r.z.REFERRAL_PROGRAM_NITRO_TAB_BADGE),
				d = () => {
					(0, i.Q3)(r.z.REFERRAL_PROGRAM_NITRO_TAB_BADGE)
				},
				p = e => {
					let {
						trialOffer: t
					} = e, n = o.Z.useExperiment({
						location: "useIsReferralProgramBadgeShowable"
					});
					if (!1 === n.enabled || null == t) return !1;
					let r = void 0 !== t.referrer_id,
						i = void 0 === t.redeemed_at,
						l = new Date(a.default.extractTimestamp(t.id));
					l.setDate(l.getDate() + n.nDelayDays);
					let s = new Date >= l;
					return r && i && s
				}
		},
		930114: function(e, t, n) {
			n.d(t, {
				V: () => p
			});
			var r = n(255367);
			n(73800);
			var i = n(481060),
				l = n(594174),
				a = n(78839),
				o = n(585483),
				s = n(74538),
				c = n(138464),
				u = n(474936),
				d = n(981631);

			function p(e) {
				let {
					processedCode: t,
					channelContext: p,
					customGiftMessage: m,
					giftInfo: f
				} = e, _ = !1, h = null, g = l.default.getCurrentUser(), b = (0, s.yd)(null == g ? void 0 : g.premiumType, u.p9.TIER_0);
				(0, i.ZDy)(async () => {
					let {
						default: e
					} = await Promise.all([n.e("92446"), n.e("47016")]).then(n.bind(n, 409858));
					return n => {
						var i, l;
						return (0, r.jsx)(e, function(e) {
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
							code: t,
							channelContext: p,
							customGiftMessage: m,
							emojiName: null == f || null == (i = f.emoji) ? void 0 : i.name,
							soundId: null == f || null == (l = f.sound) ? void 0 : l.id,
							onComplete: (e, t) => {
								h = e, t && (_ = t, e.isSubscription && null == a.Z.getPremiumSubscription(!1) && (0, c.H)(!0))
							}
						}, n))
					}
				}, {
					onCloseCallback: () => {
						var e;
						_ && null != h && !b && h.isSubscription && (null == h || null == (e = h.subscriptionPlan) ? void 0 : e.premiumSubscriptionType) === u.p9.TIER_2 && o.S.dispatch(d.CkL.PREMIUM_SUBSCRIPTION_CREATED)
					}
				})
			}
		},
		466794: function(e, t, n) {
			n.d(t, {
				X: () => a
			});
			var r = n(255367);
			n(73800);
			var i = n(481060),
				l = n(299491);

			function a(e) {
				let {
					tooltipText: t,
					textColor: n
				} = e;
				return (0, r.jsxs)("span", {
					className: l.tooltipTextContainer,
					children: [(0, r.jsx)(i.SrA, {
						size: "md",
						color: "currentColor",
						className: l.nitroWheel
					}), (0, r.jsx)(i.Text, {
						className: l.tooltipText,
						variant: "text-sm/medium",
						color: null != n ? n : "text-default",
						children: t
					})]
				})
			}
		},
		885714: function(e, t, n) {
			n.d(t, {
				Z: () => a
			});
			var r = n(255367);
			n(73800);
			var i = n(481060),
				l = n(430824);

			function a(e) {
				var {
					onCloseCallback: t,
					analyticsLocations: a
				} = e, o = function(e, t) {
					if (null == e) return {};
					var n, r, i = function(e, t) {
						if (null == e) return {};
						var n, r, i = {},
							l = Object.keys(e);
						for (r = 0; r < l.length; r++) n = l[r], t.indexOf(n) >= 0 || (i[n] = e[n]);
						return i
					}(e, t);
					if (Object.getOwnPropertySymbols) {
						var l = Object.getOwnPropertySymbols(e);
						for (r = 0; r < l.length; r++) n = l[r], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n])
					}
					return i
				}(e, ["onCloseCallback", "analyticsLocations"]);
				(0, i.ZDy)(async () => {
					let {
						default: e
					} = await n.e("11166").then(n.bind(n, 971949));
					return t => {
						var n, i;
						return (0, r.jsx)(e, (n = function(e) {
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
						}({}, t, o), i = i = {
							analyticsLocations: a,
							guildCount: l.Z.getGuildCount(),
							"aria-labelledby": "nitro-guild-cap-upsell"
						}, Object.getOwnPropertyDescriptors ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(i)) : (function(e, t) {
							var n = Object.keys(e);
							if (Object.getOwnPropertySymbols) {
								var r = Object.getOwnPropertySymbols(e);
								n.push.apply(n, r)
							}
							return n
						})(Object(i)).forEach(function(e) {
							Object.defineProperty(n, e, Object.getOwnPropertyDescriptor(i, e))
						}), n))
					}
				}, {
					onCloseCallback: t
				})
			}
		},
		504733: function(e, t, n) {
			n.d(t, {
				Z: () => u
			});
			var r = n(255367);
			n(73800);
			var i = n(481060),
				l = n(739566),
				a = n(942951),
				o = n(834129),
				s = n(981791),
				c = n(875378);

			function u(e) {
				let {
					message: t,
					channel: n,
					compact: u
				} = e, d = (0, l.ZP)(t), p = t.application, m = (0, a.l)({
					user: t.author,
					channelId: n.id,
					guildId: n.guild_id,
					messageId: t.id
				});
				return (0, r.jsx)(o.Z, {
					iconNode: (0, r.jsx)(i.Prq, {
						size: "md",
						color: "currentColor",
						className: c.ticketIcon
					}),
					timestamp: t.timestamp,
					compact: u,
					children: (0, s.A)({
						application: p,
						username: d.nick,
						usernameHook: m(d)
					})
				})
			}
		},
		981791: function(e, t, n) {
			n.d(t, {
				A: () => l
			});
			var r = n(981631),
				i = n(388032);

			function l(e) {
				let {
					application: t,
					username: n,
					usernameHook: l = r.dG4
				} = e;
				return null != t ? i.intl.format(i.t.dXdgnp, {
					username: n,
					applicationName: t.name,
					usernameHook: l
				}) : i.intl.format(i.t.O829Ul, {
					username: n,
					usernameHook: l
				})
			}
		},
		563959: function(e, t, n) {
			n.d(t, {
				P: () => f,
				e: () => _
			});
			var r = n(255367),
				i = n(73800),
				l = n(481060),
				a = n(739566),
				o = n(942951),
				s = n(834129),
				c = n(670188),
				u = n(768581),
				d = n(693912),
				p = n(981631);

			function m(e, t) {
				let n = i.useRef(null);
				return i.useCallback(i => (a, o) => {
					let s = u.ZP.getApplicationIconURL({
							id: i.id,
							icon: i.icon,
							bot: i.bot,
							botIconFirst: !0
						}),
						{
							bot: d
						} = i;
					return null == d ? a : (0, r.jsx)(c.Z, {
						targetElementRef: n,
						userId: d.id,
						avatarUrl: s,
						guildId: e.guild_id,
						channelId: e.id,
						messageId: t.id,
						clickTrap: !0,
						children: e => {
							var t, i;
							return (0, r.jsx)(l.eee, (t = function(e) {
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
							}({}, e), i = i = {
								ref: n,
								children: a
							}, Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(i)) : (function(e, t) {
								var n = Object.keys(e);
								if (Object.getOwnPropertySymbols) {
									var r = Object.getOwnPropertySymbols(e);
									n.push.apply(n, r)
								}
								return n
							})(Object(i)).forEach(function(e) {
								Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(i, e))
							}), t))
						}
					}, o)
				}, [e, t.id])
			}

			function f(e) {
				let {
					message: t,
					channel: i,
					compact: l
				} = e, c = (0, a.ZP)(t), u = t.application, f = (0, o.l)({
					user: t.author,
					channelId: i.id,
					guildId: i.guild_id,
					messageId: t.id
				}), _ = m(i, t);
				return (0, r.jsx)(s.Z, {
					icon: n(570111),
					timestamp: t.timestamp,
					compact: l,
					children: (0, d.DS)({
						application: u,
						username: c.nick,
						usernameHook: f(c),
						applicationNameHook: null != u ? _(u) : p.dG4
					})
				})
			}

			function _(e) {
				let {
					message: t,
					channel: i,
					compact: l
				} = e, c = (0, a.ZP)(t), u = t.application, f = (0, o.l)({
					user: t.author,
					channelId: i.id,
					guildId: i.guild_id,
					messageId: t.id
				}), _ = m(i, t);
				return (0, r.jsx)(s.Z, {
					icon: n(474019),
					timestamp: t.timestamp,
					compact: l,
					children: (0, d.nh)({
						application: u,
						username: c.nick,
						usernameHook: f(c),
						applicationNameHook: null != u ? _(u) : p.dG4
					})
				})
			}
		},
		621615: function(e, t, n) {
			n.d(t, {
				Z: () => r
			});
			let r = (0, n(818083).B)({
				kind: "user",
				id: "2023-09_proxy_block_notice",
				label: "Proxy Block Experiment",
				defaultConfig: {
					eligibleForNotice: !1
				},
				treatments: [{
					id: 1,
					label: "Show nag bar when proxy blocks an API request",
					config: {
						eligibleForNotice: !0
					}
				}]
			})
		},
		417626: function(e, t, n) {
			n.d(t, {
				Z: () => u
			});
			var r, i, l, a = n(442837),
				o = n(570140);
			let s = !1;
			class c extends(l = a.ZP.Store) {
				get blockedByProxy() {
					return s
				}
			}
			i = "ProxyBlockStore", (r = "displayName") in c ? Object.defineProperty(c, r, {
				value: i,
				enumerable: !0,
				configurable: !0,
				writable: !0
			}) : c[r] = i;
			let u = new c(o.Z, {
				PROXY_BLOCKED_REQUEST: function(e) {
					s = !0
				}
			})
		},
		556041: function(e, t, n) {
			n.d(t, {
				Z: () => c
			}), n(953529);
			var r = n(255367);
			n(73800);
			var i = n(481060),
				l = n(600164),
				a = n(245315),
				o = n(388032),
				s = n(49791);
			let c = () => (0, r.jsxs)(l.Z, {
				align: l.Z.Align.CENTER,
				justify: l.Z.Justify.CENTER,
				direction: l.Z.Direction.VERTICAL,
				className: s.popout,
				children: [(0, r.jsx)("img", {
					alt: "",
					src: (0, a.QA)(),
					className: s.avatar
				}), (0, r.jsxs)(l.Z, {
					align: l.Z.Align.CENTER,
					justify: l.Z.Justify.CENTER,
					className: s.nameWrapper,
					children: [(0, r.jsx)(i.ua7, {
						text: o.intl.string(o.t.oMx98P),
						children: e => {
							var t, n;
							return (0, r.jsx)("div", (t = function(e) {
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
								className: s.staffBadge
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
					}), (0, r.jsx)(i.X6q, {
						className: s.header,
						variant: "heading-md/semibold",
						children: o.intl.string(o.t.xfAlNz)
					})]
				}), (0, r.jsx)(i.Text, {
					className: s.description,
					color: "header-secondary",
					variant: "text-sm/normal",
					children: o.intl.string(o.t.BUZ0sr)
				}), (0, r.jsx)(i.Text, {
					className: s.description,
					color: "header-secondary",
					variant: "text-sm/normal",
					children: o.intl.string(o.t.w5beJC)
				})]
			})
		},
		722334: function(e, t, n) {
			n.d(t, {
				W: () => y
			});
			var r = n(255367);
			n(73800);
			var i = n(120356),
				l = n.n(i),
				a = n(772848),
				o = n(755721),
				s = n(481060),
				c = n(626135),
				u = n(617136),
				d = n(497505),
				p = n(266843),
				m = n(341907),
				f = n(46140),
				_ = n(981631),
				h = n(388032),
				g = n(355060),
				b = n(87181);

			function E(e) {
				let {
					questId: t
				} = e;
				return (0, r.jsx)("div", {
					className: g.buttonContainer,
					children: (0, r.jsx)(o.zx, {
						className: g.button,
						color: o.Tt.BRAND,
						onClick: () => {
							(0, m.navigateToQuestHome)({
								fromContent: d.jn.EXCLUDED_QUEST_EMBED
							}), c.default.track(_.rMx.QUEST_CONTENT_CLICKED, function(e) {
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
								quest_id: t,
								click_id: (0, a.Z)(),
								cta_name: u.jZ.VIEW_QUESTS,
								is_targeted: !1
							}, (0, u.mH)(d.jn.EXCLUDED_QUEST_EMBED)))
						},
						children: h.intl.string(h.t.GURBQk)
					})
				})
			}

			function y(e) {
				let {
					questId: t
				} = e, {
					containerRef: n,
					size: i
				} = (0, p.h)();
				return (0, u.Zk)(f.V_.EXCLUDED_QUEST, t), (0, r.jsxs)("div", {
					ref: e => {
						n.current = e
					},
					className: l()(g.container, {
						[g.wide]: "lg" === i,
						[g.tall]: "lg" !== i
					}),
					children: [(0, r.jsxs)("div", {
						className: g.contentContainer,
						children: [(0, r.jsx)(s.X6q, {
							variant: "lg" === i ? "heading-xl/bold" : "heading-lg/bold",
							color: "header-primary",
							children: h.intl.string(h.t.vnP31d)
						}), (0, r.jsx)(s.Text, {
							variant: "lg" === i ? "text-sm/medium" : "text-xs/medium",
							color: "text-default",
							className: g.__invalid_mobileWebCopy,
							children: h.intl.string(h.t.nuWSYW)
						}), (0, r.jsx)(E, {
							questId: t
						})]
					}), (0, r.jsx)("div", {
						className: g.imgContainer,
						children: (0, r.jsx)("img", {
							src: b,
							alt: "",
							className: g.missingQuestImage
						})
					})]
				})
			}
		},
		265299: function(e, t, n) {
			n.d(t, {
				Z: () => m
			});
			var r = n(255367),
				i = n(73800),
				l = n(481060),
				a = n(113434),
				o = n(497505),
				s = n(918701),
				c = n(37303),
				u = n(722334),
				d = n(683650),
				p = n(626314);

			function m(e) {
				let {
					questId: t
				} = e, {
					quests: n,
					excludedQuests: m,
					isFetchingCurrentQuests: f
				} = (0, a.J2)({
					fetchPolicy: "cache-or-network"
				}), _ = i.useMemo(() => n.find(e => e.id === t), [t, n]), h = i.useMemo(() => m.find(e => e.id === t), [t, m]);
				return f ? (0, r.jsx)(l.$jN, {
					className: p.spinner
				}) : null != h ? (0, r.jsx)(u.W, {
					questId: t
				}) : null == _ ? (0, r.jsx)(d.o, {
					questId: t,
					reason: d.X.NOT_FOUND
				}) : (0, s.HJ)(_) ? (0, r.jsx)(d.o, {
					questId: t,
					reason: d.X.MOBILE_ONLY
				}) : (0, r.jsx)(c.Z, {
					quest: _,
					location: o.jn.QUESTS_EMBED,
					sourceQuestContent: o.jn.QUESTS_EMBED
				}, _.id)
			}
		},
		863214: function(e, t, n) {
			n.d(t, {
				p: () => i
			});
			let r = (0, n(818083).B)({
				kind: "guild",
				id: "2025-04_report_to_mod_survey",
				label: "Report to mod survey",
				defaultConfig: {
					enabled: !1
				},
				treatments: [{
					id: 1,
					label: "Show report to mod survey",
					config: {
						enabled: !0
					}
				}]
			});

			function i(e, t) {
				return r.getCurrentConfig({
					guildId: e,
					location: t
				}, {
					autoTrackExposure: !0
				}).enabled
			}
		},
		338247: function(e, t, n) {
			n.d(t, {
				s: () => l
			});
			var r = n(430824),
				i = n(863214);

			function l(e, t) {
				if (null == t) return !1;
				let n = (0, i.p)(t, "should_show_report_to_mod_survey"),
					l = r.Z.getGuild(t);
				return n && null != l && l.ownerId === e.id && l.features.has("REPORT_TO_MOD_SURVEY")
			}
		},
		917318: function(e, t, n) {
			n.d(t, {
				Z: () => b
			});
			var r = n(255367);
			n(73800);
			var i = n(275726),
				l = n(442837),
				a = n(481060),
				o = n(739566),
				s = n(942951),
				c = n(834129),
				u = n(594174),
				d = n(130883),
				p = n(388032);
			let m = {
					[i.u.REPORT_TO_MOD_BAN_USER]: () => d.default.komFTk,
					[i.u.REPORT_TO_MOD_KICK_USER]: () => d.default.FAJmJS,
					[i.u.REPORT_TO_MOD_TIMEOUT_USER]: () => d.default["90r/sb"]
				},
				f = {
					[i.u.REPORT_TO_MOD_DELETED_MESSAGE]: () => d.default["4023i4"],
					[i.u.REPORT_TO_MOD_CLOSED_REPORT]: () => d.default.UE81zc
				};

			function _(e) {
				let {
					type: t
				} = e, n = null;
				switch (t) {
					case i.u.REPORT_TO_MOD_BAN_USER:
						n = a.pgN;
						break;
					case i.u.REPORT_TO_MOD_KICK_USER:
						n = a.I9k;
						break;
					case i.u.REPORT_TO_MOD_TIMEOUT_USER:
						n = a.YlB;
						break;
					case i.u.REPORT_TO_MOD_DELETED_MESSAGE:
						n = a.XHJ;
						break;
					case i.u.REPORT_TO_MOD_CLOSED_REPORT:
						n = a.kmB
				}
				return null != n ? (0, r.jsx)(n, {
					size: "refresh_sm",
					color: "currentColor"
				}) : null
			}

			function h(e) {
				var t;
				let {
					message: n,
					channel: i,
					compact: a
				} = e, {
					author: d,
					mentions: f,
					type: h
				} = n, g = (0, o.ZP)(n), b = n.getChannelId(), E = (0, l.e7)([u.default], () => u.default.getUser(f[0]), [f]), y = (0, o.JZ)(d, i), x = (0, s.l)({
					user: d,
					channelId: b,
					guildId: i.guild_id,
					messageId: n.id
				})(y), C = (0, o.Sw)(E, i), v = (0, s.l)({
					user: E,
					channelId: b,
					guildId: i.guild_id,
					messageId: n.id
				})(C), O = null != (t = m[h]) ? t : null;
				if (null == O) return null;
				let j = p.intl.format(O(), {
					actorName: g.nick,
					actorHook: x,
					targetName: null == C ? void 0 : C.nick,
					targetHook: v
				});
				return (0, r.jsx)(c.Z, {
					iconNode: (0, r.jsx)(_, {
						type: h
					}),
					timestamp: n.timestamp,
					compact: a,
					children: j
				})
			}

			function g(e) {
				var t;
				let {
					message: n,
					channel: i,
					compact: l
				} = e, {
					author: a,
					type: u
				} = n, d = (0, o.ZP)(n), m = n.getChannelId(), h = (0, o.JZ)(a, i), g = (0, s.l)({
					user: a,
					channelId: m,
					guildId: i.guild_id,
					messageId: n.id
				})(h), b = null != (t = f[u]) ? t : null;
				if (null == b) return null;
				let E = p.intl.format(b(), {
					actorName: d.nick,
					actorHook: g
				});
				return (0, r.jsx)(c.Z, {
					iconNode: (0, r.jsx)(_, {
						type: u
					}),
					timestamp: n.timestamp,
					compact: l,
					children: E
				})
			}

			function b(e) {
				let {
					message: t,
					channel: n,
					compact: l
				} = e, {
					type: a
				} = t;
				return a === i.u.REPORT_TO_MOD_BAN_USER || a === i.u.REPORT_TO_MOD_KICK_USER || a === i.u.REPORT_TO_MOD_TIMEOUT_USER ? (0, r.jsx)(h, {
					message: t,
					channel: n,
					compact: l
				}) : (0, r.jsx)(g, {
					message: t,
					channel: n,
					compact: l
				})
			}
		},
		163038: function(e, t, n) {
			n.d(t, {
				Z: () => H
			}), n(388685);
			var r = n(255367),
				i = n(73800),
				l = n(793030),
				a = n(442837),
				o = n(902704),
				s = n(692547),
				c = n(481060),
				u = n(232567),
				d = n(100604),
				p = n(39154),
				m = n(356264),
				f = n(628238),
				_ = n(739566),
				h = n(492593),
				g = n(930282),
				b = n(464891),
				E = n(507418),
				y = n(348238),
				x = n(38267),
				C = n(25015),
				v = n(438075),
				O = n(359110),
				j = n(6025),
				I = n(695346),
				S = n(433355),
				T = n(592125),
				N = n(906467),
				P = n(430824),
				A = n(496675),
				w = n(699516),
				Z = n(944486),
				R = n(594174),
				k = n(626135),
				L = n(22665),
				D = n(981631),
				M = n(959517),
				U = n(995717);

			function F(e) {
				let {
					message: t,
					snapshot: n,
					index: u
				} = e, p = i.useMemo(() => new d.r(t, n, u), [t, n, u]), f = (0, a.e7)([T.Z, R.default, w.Z, A.Z, P.Z, m.Z], () => p.getForwardInfo(T.Z, R.default, w.Z, A.Z, P.Z, m.Z).footerInfo, [p], o.Z), _ = i.useCallback(() => {
					var e, n;
					let r = T.Z.getChannel(t.channel_id),
						i = P.Z.getGuild(null == r ? void 0 : r.guild_id),
						l = null == (e = t.messageReference) ? void 0 : e.channel_id,
						a = Z.Z.getCurrentlySelectedChannelId(),
						o = S.ZP.getCurrentSidebarChannelId(null == (n = t.messageReference) ? void 0 : n.channel_id),
						s = a === l && o === (null == r ? void 0 : r.id);
					null == r || null == i || s || null == l || (j.Z.openThreadAsSidebar({
						channelId: r.id,
						baseChannelId: l,
						guildId: r.guild_id
					}), (0, O.Kh)(l), k.default.track(D.rMx.MODERATOR_REPORT_ORIGINAL_MESSAGE_LINK_CLICKED, {
						moderator_report_id: t.channel_id,
						destination_channel_id: l,
						destination_message_id: t.id
					}))
				}, [t]);
				return null == f ? null : (0, r.jsxs)(c.P3F, {
					className: U.footerContainer,
					onClick: _,
					children: [null != f.originIconUrl ? (0, r.jsx)("img", {
						className: U.originIcon,
						src: f.originIconUrl,
						alt: ""
					}) : null, (0, r.jsx)(l.xv, {
						className: U.footerText,
						variant: "text-sm/medium",
						color: "none",
						children: "".concat(f.originLabel, "  •  ").concat(f.timestampLabel)
					}), (0, r.jsx)(c.Fbu, {
						size: "xxs",
						color: s.Z.colors.TEXT_LOW_CONTRAST
					})]
				})
			}

			function B(e) {
				let {
					mergedMessageRecord: t,
					content: n,
					channel: l,
					reportingUserId: a,
					reportedTimestamp: o
				} = e, s = (0, _.JZ)(t.author, l), {
					onClickUsername: c,
					onClickAvatar: u,
					onPopoutRequestClose: d,
					showUsernamePopout: p,
					showAvatarPopout: m
				} = function(e, t) {
					let {
						popouts: n,
						setPopout: r
					} = (0, x.Z)(e.id, M.d$), {
						usernameProfile: l,
						avatarProfile: a
					} = n, o = (0, y.XO)(e, t, l, r);
					return {
						onClickUsername: o,
						onClickAvatar: (0, y.R9)(a, r),
						onPopoutRequestClose: i.useCallback(() => r({
							usernameProfile: !1,
							avatarProfile: !1,
							referencedUsernameProfile: !1
						}), [r]),
						showUsernamePopout: l,
						showAvatarPopout: a
					}
				}(t, l);
				return (0, r.jsx)(h.Z, {
					childrenExecutedCommand: (0, r.jsx)(L.Z, {
						reportingUserId: a,
						guildId: l.guild_id,
						channel: l,
						messageId: t.id,
						reportedTimestamp: o,
						compact: !1
					}),
					childrenHeader: (0, r.jsx)(b.ZP, {
						message: t,
						channel: l,
						author: s,
						guildId: l.guild_id,
						hideTimestamp: !0,
						onClickUsername: c,
						onClickAvatar: u,
						onPopoutRequestClose: d,
						showUsernamePopout: p,
						showAvatarPopout: m,
						renderPopout: E.Z,
						compact: !1,
						displayCompactAvatars: !1
					}),
					childrenMessageContent: (0, r.jsx)(g.ZP, {
						message: t,
						content: n,
						compact: !1
					}),
					disableInteraction: !0,
					compact: !1,
					className: U.message,
					author: s
				})
			}

			function G(e) {
				var t, n, l;
				let {
					message: o,
					snapshot: s,
					index: c
				} = e, [d, m] = i.useState(void 0);
				i.useEffect(() => {
					var e;
					(null == s || null == (e = s.moderatorReport) ? void 0 : e.reported_user_id) != null && (0, u.PR)(s.moderatorReport.reported_user_id).then(e => {
						m(e)
					}).catch(() => {})
				}, [null == s || null == (t = s.moderatorReport) ? void 0 : t.reported_user_id]);
				let _ = i.useMemo(() => {
						var e;
						let t = (0, p.Z)(o, s);
						return null != d && (null == s || null == (e = s.moderatorReport) ? void 0 : e.reported_user_id) != null ? t.set("author", d) : t
					}, [o, s, d]),
					h = I.RS.useSetting(),
					g = I.NA.useSetting(),
					b = (0, a.e7)([N.Z], () => N.Z.isDeveloper),
					E = (0, f.A)((null != (l = _.editedTimestamp) ? l : _.timestamp).valueOf()),
					{
						content: y,
						hasSpoilerEmbeds: x
					} = (0, C.Z)(_, {
						hideSimpleEmbedContent: h && g,
						isInteracting: !1,
						formatInline: !1,
						allowList: E,
						allowHeading: E,
						allowLinks: !0,
						allowDevLinks: b,
						previewLinkTarget: !0
					}),
					O = (0, a.e7)([T.Z], () => T.Z.getChannel(o.channel_id));
				return null == O ? null : (0, r.jsx)("div", {
					className: U.container,
					children: (0, r.jsxs)("div", {
						className: U.content,
						children: [(0, r.jsx)(B, {
							mergedMessageRecord: _,
							content: y,
							channel: O,
							reportingUserId: null == s || null == (n = s.moderatorReport) ? void 0 : n.reporting_user_id,
							reportedTimestamp: o.timestamp
						}), (0, v.Z)({
							channelMessageProps: {
								message: _,
								channel: O,
								compact: !1
							},
							hasSpoilerEmbeds: x,
							isInteracting: !1,
							isMessageSnapshot: !0,
							renderThreadAccessory: !1,
							className: U.nestedAccessories
						}), (0, r.jsx)(F, {
							message: o,
							snapshot: s,
							index: c
						})]
					})
				}, c)
			}

			function H(e) {
				let {
					message: t
				} = e;
				return (0, r.jsx)(r.Fragment, {
					children: t.messageSnapshots.map((e, n) => (0, r.jsx)(G, {
						message: t,
						snapshot: e,
						index: n
					}, n))
				})
			}
		},
		22665: function(e, t, n) {
			n.d(t, {
				Z: () => x
			});
			var r = n(255367),
				i = n(73800),
				l = n(120356),
				a = n.n(l),
				o = n(913527),
				s = n.n(o),
				c = n(481060),
				u = n(739566),
				d = n(318713),
				p = n(223021),
				m = n(942951),
				f = n(594174),
				_ = n(55935),
				h = n(130883),
				g = n(388032),
				b = n(537670),
				E = n(848697),
				y = n(328756);
			let x = e => {
				let {
					reportingUserId: t,
					guildId: n,
					compact: l,
					channel: o,
					messageId: x,
					reportedTimestamp: C
				} = e, v = f.default.getUser(t), O = i.useMemo(() => l ? (0, p.Z)((0, _.vc)(s()(), "LT")) : null, [l]), j = (0, m.l)({
					user: v,
					channelId: o.id,
					guildId: n,
					messageId: x
				})((0, u.JZ)(v, o)), I = null != v ? v.getAvatarURL(n, (0, c.pxk)(c.EFr.SIZE_16)) : y, S = null != v ? g.intl.format(h.default["+zqXZm"], {
					username: v.username,
					onUserClick: j
				}) : g.intl.string(h.default.xpRjfX);
				return (0, r.jsxs)("div", {
					className: a()(E.messageSpine, E.repliedMessage, O),
					children: [(0, r.jsx)(c.qEK, {
						src: I,
						size: c.EFr.SIZE_16,
						className: b.avatar,
						"aria-label": ""
					}), (0, r.jsx)(c.Text, {
						variant: "text-sm/medium",
						color: "text-secondary",
						className: b.username,
						children: S
					}), (0, r.jsxs)(c.Text, {
						variant: "text-sm/medium",
						color: "text-secondary",
						children: [(0, r.jsx)("span", {
							className: b.timestampSeparator,
							children: "•"
						}), (0, r.jsx)(d.Z, {
							timestamp: C,
							className: b.timestamp
						})]
					})]
				})
			}
		},
		800530: function(e, t, n) {
			n.d(t, {
				Cg: () => f,
				Cp: () => N,
				Cs: () => O,
				EY: () => C,
				I5: () => h,
				JQ: () => j,
				RY: () => y,
				Sv: () => x,
				TX: () => T,
				ZW: () => v,
				bK: () => E,
				n0: () => g,
				o6: () => P,
				oE: () => S,
				qS: () => I,
				s: () => b,
				sQ: () => m,
				wo: () => _
			});
			var r, i, l, a, o, s, c, u = n(990547),
				d = n(981631);

			function p(e, t, n) {
				return t in e ? Object.defineProperty(e, t, {
					value: n,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : e[t] = n, e
			}
			class m {}
			p(m, "TOS_LINK", "https://discord.com/terms"), p(m, "COMMUNITY_GUIDELINES", "https://discord.com/guidelines"), p(m, "APPEALS_LINK", "https://support.discord.com/hc/requests/new?ticket_form_id=360000029731"), p(m, "WARNING_SYSTEM_HELPCENTER_LINK", "https://support.discord.com/hc/articles/18210965981847"), p(m, "AGE_VERIFICATION_LINK", "https://support.discord.com/hc/requests/new?ticket_form_id=360000029731"), p(m, "SPAM_LINK", "https://support.discord.com/hc/requests/new?ticket_form_id=360000029731&tf_360055270593=__dc.ticket_form-tnsv1_appeals_other_questions__"), p(m, "LEARN_MORE_UU_APPEAL_LINK", "https://support.discord.com/hc/articles/360041820932");
			class f {}
			p(f, "CLASSIFICATION_ID", "classification_id"), p(f, "INCIDENT_TIMESTAMP", "incident_time");
			var _ = ((r = {}).POLICY_VIOLATION_DETAIL = "policy_violation_detail", r.LEARN_MORE_LINK = "learn_more_link", r);
			class h {}
			p(h, "ICON_TYPE", "icon_type"), p(h, "HEADER", "header"), p(h, "BODY", "body"), p(h, "CTAS", "ctas"), p(h, "TIMESTAMP", "timestamp"), p(h, "THEME", "theme"), p(h, "CLIENT_VERSION_MESSAGE", "client_version_message"), p(h, "LEARN_MORE_LINK", "learn_more_link"), p(h, "CLASSIFICATION_ID", "classification_id");
			var g = ((i = {})[i.ViewViolationDetail = 0] = "ViewViolationDetail", i[i.ViewViolationsDropdown = 1] = "ViewViolationsDropdown", i[i.ClickLetUsKnow = 2] = "ClickLetUsKnow", i[i.ClickAgeVerificationLink = 3] = "ClickAgeVerificationLink", i[i.ClickSpamWebformLink = 4] = "ClickSpamWebformLink", i[i.ClickLearnMoreLink = 5] = "ClickLearnMoreLink", i[i.ClickCommunityGuidelinesLink = 6] = "ClickCommunityGuidelinesLink", i[i.ClickWarningSystemHelpcenterLink = 7] = "ClickWarningSystemHelpcenterLink", i),
				b = ((l = {})[l.SystemDM = 0] = "SystemDM", l[l.StandingTab = 1] = "StandingTab", l[l.AppealIngestion = 2] = "AppealIngestion", l);
			Object.freeze({
				SPEED_BUMP: d.jXE.APPEAL_INGESTION_SPEED_BUMP,
				COLLECT_SIGNAL: d.jXE.APPEAL_INGESTION_COLLECT_SIGNAL,
				CONFIRM_SUBMISSION: d.jXE.APPEAL_INGESTION_CONFIRM_SUBMISSION,
				REQUEST_SENT: d.jXE.APPEAL_INGESTION_REQUEST_SENT,
				THANKS: d.jXE.APPEAL_INGESTION_THANKS,
				SPAM: d.jXE.APPEAL_INGESTION_SPAM
			});
			var E = ((a = {})[a.DIDNT_VIOLATE_POLICY = 0] = "DIDNT_VIOLATE_POLICY", a[a.TOO_STRICT_UNFAIR = 1] = "TOO_STRICT_UNFAIR", a[a.DONT_AGREE_PENALTY = 2] = "DONT_AGREE_PENALTY", a[a.SOMETHING_ELSE = 3] = "SOMETHING_ELSE", a);
			let y = [0, 1, 2, 3],
				x = 372,
				C = 279,
				v = {
					impression_group: u.ImpressionGroups.APPEAL_INGESTION
				};
			var O = ((o = {}).SPEED_BUMP = "speed-bump", o.COLLECT_SIGNAL = "collect-signal", o.CONFIRM_SUBMISSION = "confirm-submission", o.REQUEST_SENT = "request-sent", o.THANKS = "thanks", o);
			let j = {
				"speed-bump": {
					next: "collect-signal",
					prev: null
				},
				"collect-signal": {
					next: "confirm-submission",
					prev: "speed-bump"
				},
				"confirm-submission": {
					next: "request-sent",
					prev: "collect-signal"
				},
				"request-sent": {
					next: null,
					prev: null
				}
			};
			var I = ((s = {})[s.USER = 1] = "USER", s[s.GUILD_OWNER = 2] = "GUILD_OWNER", s[s.GUILD_MEMBER = 3] = "GUILD_MEMBER", s),
				S = ((c = {}).LOADING = "loading", c.ERROR = "error", c.SUCCESS = "success", c.FAILURE = "failure", c.NONE = "none", c);
			let T = 2e3,
				N = 15e3,
				P = 5
		},
		531441: function(e, t, n) {
			n.d(t, {
				OY: () => h,
				Sn: () => m,
				hQ: () => p,
				j4: () => _,
				lK: () => u,
				tG: () => f,
				wO: () => d
			});
			var r, i, l, a, o, s, c, u = ((r = {}).MESSAGE = "message", r),
				d = ((i = {})[i.OWNER = 1] = "OWNER", i[i.MEMBER = 2] = "MEMBER", i),
				p = ((l = {})[l.REVIEW_PENDING = 1] = "REVIEW_PENDING", l[l.CLASSIFICATION_UPHELD = 2] = "CLASSIFICATION_UPHELD", l[l.CLASSIFICATION_INVALIDATED = 3] = "CLASSIFICATION_INVALIDATED", l),
				m = ((a = {})[a.ALL_GOOD = 100] = "ALL_GOOD", a[a.LIMITED = 200] = "LIMITED", a[a.VERY_LIMITED = 300] = "VERY_LIMITED", a[a.AT_RISK = 400] = "AT_RISK", a[a.SUSPENDED = 500] = "SUSPENDED", a),
				f = ((o = {})[o.DSA_ELIGIBLE = 1] = "DSA_ELIGIBLE", o[o.IN_APP_ELIGIBLE = 2] = "IN_APP_ELIGIBLE", o[o.AGE_VERIFY_ELIGIBLE = 3] = "AGE_VERIFY_ELIGIBLE", o),
				_ = ((s = {})[s.WEBFORM = 0] = "WEBFORM", s[s.AGE_VERIFY = 1] = "AGE_VERIFY", s[s.IN_APP = 2] = "IN_APP", s),
				h = ((c = {})[c.PENDING = 0] = "PENDING", c[c.SUCCESS = 1] = "SUCCESS", c[c.FAILED = 2] = "FAILED", c)
		},
		788080: function(e, t, n) {
			n.d(t, {
				FB: () => E,
				GE: () => C,
				Pu: () => x,
				Vt: () => h,
				XX: () => m,
				Zs: () => y,
				c7: () => b,
				eS: () => f,
				fr: () => _,
				ox: () => g
			}), n(35282);
			var r = n(913527),
				i = n.n(r),
				l = n(442837),
				a = n(406432),
				o = n(314897),
				s = n(531441),
				c = n(800530),
				u = n(981631),
				d = n(959517),
				p = n(388032);

			function m(e) {
				return i()().to(i()(e))
			}

			function f(e) {
				var t, n;
				return (0, a.CO)(e.filename) || (0, a.NU)(e.filename) ? "".concat(d._j).concat(null != (t = e.filename) ? t : ".png") : null != (n = e.filename) ? n : ""
			}

			function _(e) {
				var t, n, r, i;
				if (null == e.fields) return;
				let l = e.fields.reduce((e, t) => (e[t.rawName] = t.rawValue, e), {});
				return {
					header: null != (t = l[c.I5.HEADER]) ? t : "",
					icon: l[c.I5.ICON_TYPE],
					body: null != (n = l[c.I5.BODY]) ? n : "",
					ctas: (null != (r = l[c.I5.CTAS]) ? r : "").split(",").filter(e => "" !== e),
					timestamp: parseFloat(null != (i = l[c.I5.TIMESTAMP]) ? i : 0),
					theme: l[c.I5.THEME],
					learn_more_link: l[c.I5.LEARN_MORE_LINK],
					classification_id: l[c.I5.CLASSIFICATION_ID]
				}
			}

			function h(e) {
				return e.type !== s.lK.MESSAGE || "" === e.content && 0 === e.attachments.length
			}
			let g = e => ({
					[c.bK.DIDNT_VIOLATE_POLICY]: p.intl.string(p.t.mZffAg),
					[c.bK.TOO_STRICT_UNFAIR]: p.intl.string(p.t.wgZVAg),
					[c.bK.DONT_AGREE_PENALTY]: p.intl.string(p.t.eu8G4u),
					[c.bK.SOMETHING_ELSE]: p.intl.string(p.t.XU3s6u)
				})[e],
				b = e => null == e || 0 === e.length ? "" : 1 === e.length ? e.toUpperCase() : "".concat(e.charAt(0).toUpperCase()).concat(e.slice(1));

			function E(e) {
				return null != e && null != e.guild_metadata
			}
			let y = e => e === u.evJ.DSA_APPEAL_REQUEST_DEFLECTION ? p.intl.string(p.t["0qyXXF"]) : p.intl.string(p.t.aPmsx8);

			function x(e) {
				let t = e.max_expiration_time;
				if (null == t) return null;
				try {
					return new Date(t)
				} catch (e) {
					return null
				}
			}
			let C = () => null != (0, l.e7)([o.default], () => o.default.getSuspendedUserToken())
		},
		699833: function(e, t, n) {
			n.d(t, {
				i: () => m
			});
			var r = n(255367);
			n(73800);
			var i = n(913527),
				l = n.n(i),
				a = n(692547),
				o = n(755721),
				s = n(481060),
				c = n(800530),
				u = n(388032),
				d = n(524438);
			let p = e => l()().diff(l().unix(e), "days");

			function m(e) {
				var t, i, l, m, f;
				if (null == e.message.embeds || null == e.message.embeds[0].fields) return null;
				let _ = e.message.embeds[0],
					h = null != (l = null == (t = _.fields) ? void 0 : t.find(e => e.rawName === c.Cg.CLASSIFICATION_ID)) ? l : void 0,
					g = null != (m = null == h ? void 0 : h.rawValue) ? m : void 0,
					b = null != (f = null == (i = _.fields) ? void 0 : i.find(e => e.rawName === c.Cg.INCIDENT_TIMESTAMP)) ? f : void 0,
					E = null == b || null == b.rawValue ? void 0 : parseFloat(b.rawValue);
				return null == g || null == E ? null : (0, r.jsxs)(s.P3F, {
					onClick: () => {
						(0, s.ZDy)(async () => {
							let {
								default: e
							} = await Promise.all([n.e("25183"), n.e("3940"), n.e("18831"), n.e("68464")]).then(n.bind(n, 41164));
							return t => (0, r.jsx)(e, {
								classificationId: g,
								source: c.s.SystemDM,
								transitionState: t.transitionState,
								onClose: t.onClose
							})
						})
					},
					className: d.safetyPolicyNoticeContainer,
					children: [(0, r.jsxs)("div", {
						className: d.noticeContent,
						children: [(0, r.jsxs)("div", {
							className: d.headerRow,
							children: [(0, r.jsx)(s.aNP, {
								className: d.warningIcon,
								color: a.Z.colors.STATUS_DANGER
							}), (0, r.jsx)(s.Text, {
								variant: "text-md/semibold",
								children: u.intl.string(u.t["4CxGXl"])
							})]
						}), (0, r.jsx)("div", {
							className: d.incidentTiming,
							children: (0, r.jsx)(s.Text, {
								variant: "text-xs/medium",
								children: u.intl.format(u.t.eevFb2, {
									daysAgo: p(E)
								})
							})
						}), (0, r.jsx)("div", {
							className: d.noticeBody,
							children: (0, r.jsx)(s.Text, {
								variant: "text-md/normal",
								color: "text-muted",
								children: u.intl.string(u.t["5CLb0N"])
							})
						})]
					}), (0, r.jsx)("div", {
						className: d.footerContainer,
						children: (0, r.jsx)(o.zx, {
							look: o.zx.Looks.BLANK,
							className: d.detailsButton,
							color: o.zx.Colors.WHITE,
							children: u.intl.string(u.t.zKnzws)
						})
					})]
				})
			}
		},
		344997: function(e, t, n) {
			n.d(t, {
				g: () => b
			});
			var r = n(255367);
			n(73800);
			var i = n(913527),
				l = n.n(i),
				a = n(692547),
				o = n(481060),
				s = n(788080),
				c = n(800530),
				u = n(388032),
				d = n(94740);
			let p = e => l()().diff(l().unix(e), "days");

			function m(e) {
				let {
					classificationId: t
				} = e;
				return (0, r.jsx)(o.eee, {
					onClick: () => {
						(0, o.ZDy)(async () => {
							let {
								default: e
							} = await Promise.all([n.e("25183"), n.e("3940"), n.e("18831"), n.e("68464")]).then(n.bind(n, 41164));
							return n => (0, r.jsx)(e, {
								classificationId: t,
								source: c.s.SystemDM,
								transitionState: n.transitionState,
								onClose: n.onClose
							})
						})
					},
					className: d.detailsButton,
					children: u.intl.string(u.t.QsqdXF)
				})
			}

			function f(e) {
				let {
					learnMoreLink: t
				} = e;
				return (0, r.jsx)(o.eee, {
					className: d.detailsButton,
					href: t,
					children: u.intl.string(u.t["8/GdRE"])
				})
			}

			function _(e) {
				let {
					ctaType: t,
					classificationId: n,
					learnMoreLink: i
				} = e;
				switch (t) {
					case c.wo.POLICY_VIOLATION_DETAIL:
						if (null == n) return null;
						return (0, r.jsx)(m, {
							classificationId: n
						});
					case c.wo.LEARN_MORE_LINK:
						if (null == i) return null;
						return (0, r.jsx)(f, {
							learnMoreLink: i
						});
					default:
						return null
				}
			}

			function h(e) {
				let {
					iconType: t
				} = e, n = {
					default: (0, r.jsx)(o.MqZ, {
						size: "xs",
						color: a.Z.colors.TEXT_LINK.css
					}),
					danger: (0, r.jsx)(o.aNP, {
						color: a.Z.colors.STATUS_DANGER
					})
				};
				return null != t && t in n ? (0, r.jsx)("div", {
					className: d.icon,
					children: n[t]
				}) : null
			}

			function g(e) {
				let {
					children: t,
					theme: n
				} = e, i = {
					default: d.defaultFooterContainer,
					danger: d.dangerFooterContainer
				};
				return (0, r.jsx)("div", {
					className: i[null != n ? n : "default"],
					children: t
				})
			}

			function b(e) {
				var t, n;
				if (null == e.embed || null == e.embed.fields) return null;
				let i = (0, s.fr)(e.embed);
				return null == i ? null : (0, r.jsxs)(o.P3F, {
					className: d.safetyPolicyNoticeContainer,
					children: [(0, r.jsxs)("div", {
						className: d.noticeContent,
						children: [(0, r.jsxs)("div", {
							className: d.headerRow,
							children: [(0, r.jsx)(h, {
								iconType: i.icon
							}), (0, r.jsx)(o.Text, {
								variant: "text-md/semibold",
								children: i.header
							})]
						}), (0, r.jsx)("div", {
							className: d.incidentTiming,
							children: (0, r.jsx)(o.Text, {
								variant: "text-xs/medium",
								children: u.intl.format(u.t.eevFb2, {
									daysAgo: p(null != (n = i.timestamp) ? n : 0)
								})
							})
						}), (0, r.jsx)("div", {
							className: d.noticeBody,
							children: (0, r.jsx)(o.Text, {
								variant: "text-md/normal",
								color: "text-muted",
								children: i.body
							})
						})]
					}), (0, r.jsx)(g, {
						theme: i.theme,
						children: null == (t = i.ctas) ? void 0 : t.map(e => (0, r.jsx)(_, {
							ctaType: e,
							classificationId: i.classification_id,
							learnMoreLink: i.learn_more_link
						}, e))
					})]
				})
			}
		},
		905567: function(e, t, n) {
			n.d(t, {
				C: () => r
			});
			let r = (0, n(818083).B)({
				kind: "user",
				id: "2023-05_safety_user_sentiment",
				label: "Safety User Sentiment Feedback Eligible",
				defaultConfig: {
					isEligible: !1
				},
				treatments: [{
					id: 1,
					label: "Eligible",
					config: {
						isEligible: !0
					}
				}]
			})
		},
		652399: function(e, t, n) {
			n.d(t, {
				$z: () => w,
				I1: () => C,
				IZ: () => v,
				PJ: () => N,
				Qb: () => x,
				Yc: () => I,
				bh: () => Z,
				bo: () => S,
				cy: () => O,
				hM: () => b,
				sL: () => E,
				tI: () => j,
				z4: () => T,
				zW: () => y
			}), n(781311), n(388685);
			var r = n(603263),
				i = n(367907),
				l = n(710845),
				a = n(466863),
				o = n(768119),
				s = n(626135),
				c = n(405656),
				u = n(861262),
				d = n(981631),
				p = n(862825);

			function m(e, t) {
				let n = function(e) {
					let t = null != e ? (0, u.g)(e) : null;
					return t === d.aib.DMS ? {
						type: d.aib.DMS
					} : t === d.aib.FAVORITES ? {
						type: d.aib.FAVORITES
					} : t === d.aib.GUILD ? {
						type: d.aib.GUILD,
						guildId: e
					} : t === d.aib.CHANNEL ? {
						type: d.aib.CHANNEL,
						channelId: e
					} : null
				}(e);
				return null != n ? t(n) : null
			}

			function f(e) {
				return m(e, e => a.Z.getSessionId(e))
			}

			function _(e) {
				return m(e, e => a.Z.getQueryId(e))
			}

			function h(e) {
				var t, n;
				return null != (n = null == e || null == (t = e.trim()) ? void 0 : t.length) ? n : 0
			}

			function g(e) {
				var t, n, r;
				return null != (r = null == e || null == (n = e.content) || null == (t = n.trim()) ? void 0 : t.length) ? r : 0
			}

			function b(e) {
				let {
					searchType: t,
					searchId: n,
					searchAnalyticsId: r,
					prevSearchAnalyticsId: l,
					isError: a,
					limit: o,
					offset: s,
					page: c,
					totalResults: u,
					pageResults: p,
					isIndexing: m,
					pageNumMessages: b,
					pageNumLinks: E,
					pageNumEmbeds: y,
					pageNumAttachments: x,
					searchQueryString: C,
					searchQuery: v
				} = e;
				i.ZP.trackWithMetadata(d.rMx.SEARCH_RESULT_VIEWED, {
					search_type: t,
					search_id: r,
					prev_search_id: l,
					search_session_id: f(n),
					search_query_id: _(n),
					is_error: a,
					limit: o,
					offset: s,
					page: c,
					total_results: u,
					page_results: p,
					is_indexing: m,
					page_num_messages: b,
					page_num_links: E,
					page_num_embeds: y,
					page_num_attach: x,
					search_query_length: h(C),
					search_query_content_length: g(v)
				})
			}

			function E(e) {
				let {
					searchType: t,
					searchId: n,
					searchAnalyticsId: r,
					guildId: i,
					channelId: l,
					pageResults: a,
					totalResults: o,
					page: c,
					limit: u,
					offset: p,
					index: m,
					searchQueryString: b,
					searchQuery: E
				} = e;
				s.default.track(d.rMx.SEARCH_RESULT_SELECTED, {
					search_type: t,
					search_id: r,
					search_session_id: f(n),
					search_query_id: _(n),
					guild_id: i,
					channel_id: l,
					page_results: a,
					total_results: o,
					page: c,
					limit: u,
					offset: p,
					index_num: m,
					search_query_length: h(b),
					search_query_content_length: g(E)
				})
			}

			function y(e) {
				let {
					searchType: t,
					searchId: n,
					searchAnalyticsId: r,
					mode: l
				} = e;
				i.ZP.trackWithMetadata(d.rMx.SEARCH_RESULT_SORT_CHANGED, {
					search_id: r,
					search_session_id: f(n),
					search_query_id: _(n),
					search_type: t,
					new_sort_type: l
				})
			}

			function x(e) {
				let {
					searchType: t,
					searchId: n,
					searchAnalyticsId: r,
					searchQueryString: l,
					searchQuery: a
				} = e;
				i.ZP.trackWithMetadata(d.rMx.SEARCH_RESULT_EMPTY, {
					search_id: r,
					search_session_id: f(n),
					search_query_id: _(n),
					search_type: t,
					search_query_length: h(l),
					search_query_content_length: g(a)
				})
			}

			function C(e) {
				let {
					searchType: t,
					searchId: n
				} = e;
				m(n, e => {
					a.Z.initialize({
						searchContext: e,
						initialTab: p.sR.MESSAGES
					})
				}), i.ZP.trackWithMetadata(d.rMx.SEARCH_OPENED, {
					search_id: null != n ? o.Z.getAnalyticsId(n) : null,
					search_session_id: f(n),
					search_type: t
				})
			}

			function v(e) {
				let {
					searchId: t,
					searchType: n
				} = e;
				i.ZP.trackWithMetadata(d.rMx.SEARCH_CLOSED, {
					search_id: null != t ? o.Z.getAnalyticsId(t) : null,
					search_session_id: f(t),
					search_query_id: _(t),
					search_type: n
				}), m(t, e => {
					a.Z.terminate(e)
				})
			}

			function O(e) {
				let {
					searchType: t,
					searchId: n
				} = e;
				i.ZP.trackWithMetadata(d.rMx.SEARCH_INPUT_CLEARED, {
					search_id: null != n ? o.Z.getAnalyticsId(n) : null,
					search_session_id: f(n),
					search_query_id: _(n),
					search_type: t
				})
			}

			function j(e) {
				let {
					searchType: t,
					searchId: n,
					query: l,
					queryString: s
				} = e;
				m(n, e => {
					a.Z.refreshQueryId(e)
				});
				let u = Object.keys(l),
					p = u.reduce((e, t) => {
						let n = l[t];
						return e[t] = Array.isArray(n) ? n.length : 1, e
					}, {}),
					b = null != s ? (0, c.kG)(s) : [],
					E = 0,
					y = 0,
					x = 0,
					C = 0,
					v = 0,
					O = 0,
					j = 0,
					I = 0;
				b.forEach(e => {
					e.type === d.dCx.ANSWER_IN ? E++ : e.type === d.dCx.ANSWER_USERNAME_FROM ? y++ : e.type === d.dCx.ANSWER_USERNAME_MENTIONS ? x++ : e.type === d.dCx.ANSWER_HAS ? C++ : e.type === d.dCx.ANSWER_BEFORE ? v++ : e.type === d.dCx.ANSWER_ON ? O++ : e.type === d.dCx.ANSWER_AFTER ? j++ : e.type === d.dCx.ANSWER_PINNED && I++
				});
				let S = _(n);
				i.ZP.trackWithMetadata(d.rMx.MESSAGES_SEARCH_STARTED, {
					search_id: null != n ? o.Z.getAnalyticsId(n) : null,
					search_session_id: f(n),
					search_query_id: S,
					search_type: t,
					search_query_length: h(s),
					search_query_content_length: g(l),
					sort_type: (0, r.Vj)(l),
					filter_in_count: E,
					filter_from_count: y,
					filter_mentions_count: x,
					filter_has_count: C,
					filter_before_count: v,
					filter_during_count: O,
					filter_after_count: j,
					filter_pinned_count: I
				}), i.ZP.trackWithMetadata(d.rMx.SEARCH_STARTED, {
					search_id: null != n ? o.Z.getAnalyticsId(n) : null,
					search_session_id: f(n),
					search_query_id: _(n),
					search_type: t,
					num_modifiers: u.length,
					modifiers: p
				})
			}

			function I(e) {
				let {
					rating: t,
					searchId: n,
					searchType: r
				} = e;
				i.ZP.trackWithMetadata(d.rMx.SEARCH_RESULTS_FEEDBACK_MODAL_VIEWED, {
					rating: t,
					search_id: null != n ? o.Z.getAnalyticsId(n) : null,
					search_type: r,
					search_session_id: f(n),
					search_query_id: _(n)
				})
			}

			function S(e) {
				let {
					searchId: t,
					searchType: n
				} = e;
				i.ZP.trackWithMetadata(d.rMx.SEARCH_RESULTS_FEEDBACK_ENTRYPOINT_VIEWED, {
					search_id: null != t ? o.Z.getAnalyticsId(t) : null,
					search_type: n,
					search_session_id: f(t),
					search_query_id: _(t)
				})
			}

			function T(e) {
				let {
					rating: t,
					searchId: n,
					searchType: r,
					unsatisfiedQuestionOption: l,
					unsatisfiedQuestionText: a,
					describeSearchQuestionOption: s,
					describeSearchQuestionText: c
				} = e;
				i.ZP.trackWithMetadata(d.rMx.SEARCH_RESULTS_FEEDBACK_SUBMITTED, {
					search_id: null != n ? o.Z.getAnalyticsId(n) : null,
					search_type: r,
					search_session_id: f(n),
					search_query_id: _(n),
					rating: t,
					unsatisfied_question_option: l,
					unsatisfied_question_text: a,
					describe_search_question_option: s,
					describe_search_question_text: c
				})
			}

			function N(e) {
				let {
					searchType: t,
					searchId: n
				} = e;
				m(n, e => {
					a.Z.initialize({
						searchContext: e,
						initialTab: p.sR.MESSAGES
					})
				}), i.ZP.trackWithMetadata(d.rMx.SEARCH_MESSAGES_CHANNEL_PREFILL, {
					search_type: t,
					search_id: null != n ? o.Z.getAnalyticsId(n) : null,
					search_session_id: f(n)
				})
			}
			new l.Z("SearchTracking");
			let P = new Map([
					[d.dCx.ANSWER_IN, "in"],
					[d.dCx.FILTER_IN, "in"],
					[d.dCx.ANSWER_USERNAME_FROM, "from"],
					[d.dCx.FILTER_FROM, "from"],
					[d.dCx.ANSWER_USERNAME_MENTIONS, "mentions"],
					[d.dCx.FILTER_MENTIONS, "mentions"],
					[d.dCx.ANSWER_HAS, "has"],
					[d.dCx.FILTER_HAS, "has"],
					[d.dCx.ANSWER_BEFORE, "before"],
					[d.dCx.FILTER_BEFORE, "before"],
					[d.dCx.ANSWER_ON, "during"],
					[d.dCx.FILTER_ON, "during"],
					[d.dCx.ANSWER_AFTER, "after"],
					[d.dCx.FILTER_AFTER, "after"],
					[d.dCx.ANSWER_PINNED, "pinned"],
					[d.dCx.FILTER_PINNED, "pinned"]
				]),
				A = new Map([
					[d.rtL.HISTORY, "history"],
					[d.rtL.DATES, "dates"],
					[d.rtL.SEARCH_OPTIONS, "search_options"]
				]);

			function w(e) {
				let {
					searchId: t,
					searchHistoryIndex: n,
					searchHistoryTotalResults: r
				} = e, l = (0, u.g)(t);
				i.ZP.trackWithMetadata(d.rMx.SEARCH_HISTORY_CLICKED, {
					search_id: null != t ? o.Z.getAnalyticsId(t) : null,
					search_type: l,
					search_session_id: f(t),
					search_history_index: n,
					search_history_total_results: r
				})
			}

			function Z(e) {
				var t;
				let {
					searchId: n,
					searchQuery: r,
					searchQueryString: l,
					searchAutocompleteResultIndex: a,
					searchAutocompleteTotalResults: s,
					searchTokenType: c,
					searchAutocompleteGroup: p,
					isSearchFilterPrefix: m,
					isSearchFilterAnswer: b,
					isSearchFilterComplete: E
				} = e, y = (0, u.g)(n);
				d.rtL.HISTORY;
				let x = null != (t = P.get(p)) ? t : A.get(p),
					C = null != c ? P.get(c) : null;
				i.ZP.trackWithMetadata(d.rMx.SEARCH_MESSAGES_AUTOCOMPLETE_CLICKED, {
					search_id: null != n ? o.Z.getAnalyticsId(n) : null,
					search_type: y,
					search_session_id: f(n),
					search_query_id: _(n),
					search_query_length: h(l),
					search_query_content_length: g(r),
					search_autocomplete_result_index: a,
					search_autocomplete_total_results: s,
					search_autocomplete_group: x,
					search_autocomplete_filter_type: C,
					is_search_filter_prefix: m,
					is_search_filter_answer: b,
					is_search_filter_complete: E
				})
			}
		},
		994463: function(e, t, n) {
			n.d(t, {
				Z: () => p
			}), n(388685);
			var r = n(255367),
				i = n(73800),
				l = n(525654),
				a = n.n(l),
				o = n(748780),
				s = n(782682);

			function c(e, t, n) {
				return t in e ? Object.defineProperty(e, t, {
					value: n,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : e[t] = n, e
			}

			function u(e) {
				let t = e => e.interpolate({
					inputRange: [0, 1],
					outputRange: ["0px", "1px"]
				});
				return {
					transform: [{
						translateX: t(e.x)
					}, {
						translateY: t(e.y)
					}]
				}
			}
			class d extends i.Component {
				componentDidMount() {
					this._isMounted = !0;
					let {
						x: e,
						y: t
					} = this.state;
					"Firefox" !== a().name && (o.Z.animate(e, {
						loop: !0,
						toValueMin: -74,
						toValueMax: 95,
						overshootClamping: !0,
						friction: 5,
						tension: 1,
						shouldLoop: this.shouldLoop
					}), o.Z.animate(t, {
						loop: !0,
						toValueMin: -59,
						toValueMax: 75,
						overshootClamping: !0,
						friction: 5,
						tension: 1,
						shouldLoop: this.shouldLoop
					}))
				}
				componentWillUnmount() {
					this._isMounted = !1
				}
				render() {
					return (0, r.jsxs)("div", {
						className: s.searchIndexAnimation,
						children: [(0, r.jsx)("div", {
							className: s.searchIndexBackground
						}), (0, r.jsxs)("svg", {
							className: s.searchIndexForeground,
							width: "320",
							height: "280",
							children: [(0, r.jsx)("defs", {
								children: (0, r.jsx)("rect", {
									id: "search-index-foreground-mask-a",
									width: "80",
									height: "80",
									rx: "40"
								})
							}), (0, r.jsxs)("g", {
								fill: "none",
								fillRule: "evenodd",
								children: [(0, r.jsxs)("g", {
									transform: "translate(120 80)",
									children: [(0, r.jsx)("mask", {
										id: "search-index-foreground-mask-b",
										fill: "#fff",
										children: (0, r.jsx)(o.Z.use, {
											style: u(this.state),
											className: s.mask,
											xlinkHref: "#search-index-foreground-mask-a"
										})
									}), (0, r.jsxs)("g", {
										mask: "url(#search-index-foreground-mask-b)",
										children: [(0, r.jsx)("path", {
											fill: "#FFF",
											d: "M-7.1156 170.8361c0 10.68-8.658 19.338-19.339 19.338-10.68 0-19.338-8.658-19.338-19.338 0-10.68 8.658-19.338 19.338-19.338 10.681 0 19.339 8.658 19.339 19.338"
										}), (0, r.jsx)("path", {
											fill: "#FFF",
											d: "M-7.1156 170.8361c0 10.68-8.658 19.338-19.339 19.338-10.68 0-19.338-8.658-19.338-19.338 0-10.68 8.658-19.338 19.338-19.338 10.681 0 19.339 8.658 19.339 19.338"
										}), (0, r.jsx)("path", {
											fill: "#FFD773",
											d: "M-7.1156 170.8361c0 10.68-8.658 19.338-19.339 19.338-10.68 0-19.338-8.658-19.338-19.338 0-10.68 8.658-19.338 19.338-19.338 10.681 0 19.339 8.658 19.339 19.338"
										}), (0, r.jsx)("path", {
											stroke: "#1E2126",
											strokeWidth: "2",
											d: "M-7.1156 170.8361c0 10.68-8.658 19.338-19.339 19.338-10.68 0-19.338-8.658-19.338-19.338 0-10.68 8.658-19.338 19.338-19.338 10.681 0 19.339 8.658 19.339 19.338z",
											strokeLinecap: "round",
											strokeLinejoin: "round"
										}), (0, r.jsx)("path", {
											stroke: "#1E2126",
											strokeWidth: "2",
											d: "M-15.0267 170.8361c0 6.311-5.116 11.427-11.428 11.427-6.31 0-11.426-5.116-11.426-11.427s5.116-11.427 11.426-11.427c6.312 0 11.428 5.116 11.428 11.427z",
											strokeLinecap: "round",
											strokeLinejoin: "round"
										}), (0, r.jsx)("path", {
											fill: "#FFF",
											d: "M6.9479 154.135c0 10.68-8.658 19.338-19.338 19.338-10.68 0-19.338-8.658-19.338-19.338 0-10.68 8.658-19.338 19.338-19.338 10.68 0 19.338 8.658 19.338 19.338"
										}), (0, r.jsx)("path", {
											fill: "#FFF",
											d: "M6.9479 154.135c0 10.68-8.658 19.338-19.338 19.338-10.68 0-19.338-8.658-19.338-19.338 0-10.68 8.658-19.338 19.338-19.338 10.68 0 19.338 8.658 19.338 19.338"
										}), (0, r.jsx)("path", {
											fill: "#FFD773",
											d: "M6.9479 154.135c0 10.68-8.658 19.338-19.338 19.338-10.68 0-19.338-8.658-19.338-19.338 0-10.68 8.658-19.338 19.338-19.338 10.68 0 19.338 8.658 19.338 19.338"
										}), (0, r.jsx)("path", {
											stroke: "#1E2126",
											strokeWidth: "2",
											d: "M6.9479 154.135c0 10.68-8.658 19.338-19.338 19.338-10.68 0-19.338-8.658-19.338-19.338 0-10.68 8.658-19.338 19.338-19.338 10.68 0 19.338 8.658 19.338 19.338z",
											strokeLinecap: "round",
											strokeLinejoin: "round"
										}), (0, r.jsx)("path", {
											stroke: "#1E2126",
											strokeWidth: "2",
											d: "M-12.39 165.5622c-6.311 0-11.427-5.116-11.427-11.427s5.116-11.427 11.427-11.427 11.427 5.116 11.427 11.427c0 2.727-.955 5.231-2.55 7.196",
											strokeLinecap: "round",
											strokeLinejoin: "round"
										}), (0, r.jsx)("path", {
											fill: "#FFF",
											d: "M-4.4789 140.9499c0 10.68-8.658 19.338-19.338 19.338-10.681 0-19.338-8.658-19.338-19.338 0-10.68 8.657-19.338 19.338-19.338 10.68 0 19.338 8.658 19.338 19.338"
										}), (0, r.jsx)("path", {
											fill: "#FFF",
											d: "M-4.4789 140.9499c0 10.68-8.658 19.338-19.338 19.338-10.681 0-19.338-8.658-19.338-19.338 0-10.68 8.657-19.338 19.338-19.338 10.68 0 19.338 8.658 19.338 19.338"
										}), (0, r.jsx)("path", {
											fill: "#FFD773",
											d: "M-4.4789 140.9499c0 10.68-8.658 19.338-19.338 19.338-10.681 0-19.338-8.658-19.338-19.338 0-10.68 8.657-19.338 19.338-19.338 10.68 0 19.338 8.658 19.338 19.338"
										}), (0, r.jsx)("path", {
											stroke: "#1E2126",
											strokeWidth: "2",
											d: "M-4.4789 140.9499c0 10.68-8.658 19.338-19.338 19.338-10.681 0-19.338-8.658-19.338-19.338 0-10.68 8.657-19.338 19.338-19.338 10.68 0 19.338 8.658 19.338 19.338z",
											strokeLinecap: "round",
											strokeLinejoin: "round"
										}), (0, r.jsx)("path", {
											stroke: "#1E2126",
											strokeWidth: "2",
											d: "M-23.8168 129.5232c6.311 0 11.427 5.116 11.427 11.427s-5.116 11.427-11.427 11.427c-6.312 0-11.427-5.116-11.427-11.427",
											strokeLinecap: "round",
											strokeLinejoin: "round"
										}), (0, r.jsx)("path", {
											fill: "#FFF",
											d: "M100.5348-15.3089c-10.639.941-20.026-6.919-20.968-17.558-.941-10.638 6.92-20.026 17.559-20.967 10.638-.942 20.025 6.919 20.967 17.558.941 10.638-6.919 20.026-17.558 20.967"
										}), (0, r.jsx)("path", {
											fill: "#FFF",
											d: "M100.5348-15.3089c-10.639.941-20.026-6.919-20.968-17.558-.941-10.638 6.92-20.026 17.559-20.967 10.638-.942 20.025 6.919 20.967 17.558.941 10.638-6.919 20.026-17.558 20.967"
										}), (0, r.jsx)("path", {
											fill: "#FFD773",
											d: "M100.5348-15.3089c-10.639.941-20.026-6.919-20.968-17.558-.941-10.638 6.92-20.026 17.559-20.967 10.638-.942 20.025 6.919 20.967 17.558.941 10.638-6.919 20.026-17.558 20.967"
										}), (0, r.jsx)("path", {
											stroke: "#1E2126",
											strokeWidth: "2",
											d: "M100.5348-15.3089c-10.639.941-20.026-6.919-20.968-17.558-.941-10.638 6.92-20.026 17.559-20.967 10.638-.942 20.025 6.919 20.967 17.558.941 10.638-6.919 20.026-17.558 20.967z",
											strokeLinecap: "round",
											strokeLinejoin: "round"
										}), (0, r.jsx)("path", {
											stroke: "#1E2126",
											strokeWidth: "2",
											d: "M110.2125-35.5789c.556 6.286-4.089 11.833-10.375 12.39-6.287.556-11.834-4.089-12.391-10.375-.555-6.286 4.089-11.834 10.376-12.39",
											strokeLinecap: "round",
											strokeLinejoin: "round"
										}), (0, r.jsx)("path", {
											fill: "#C2FFF9",
											d: "M-76.4877 122.3928l14.704 5.777-8.133 24.358-25.269-4.57 1.997-15.671"
										}), (0, r.jsx)("path", {
											stroke: "#1E2126",
											strokeWidth: "2",
											d: "M-76.4877 122.3928l14.704 5.777-8.133 24.358-25.269-4.57 1.997-15.671zm-18.6982 25.5654l33.402-19.788",
											strokeLinecap: "round",
											strokeLinejoin: "round"
										}), (0, r.jsx)("path", {
											stroke: "#1E2126",
											strokeWidth: "2",
											d: "M-93.1889 132.2868l23.272 20.241-6.571-30.135",
											strokeLinecap: "round",
											strokeLinejoin: "round"
										}), (0, r.jsx)("path", {
											fill: "#C2FFF9",
											d: "M151.5172-63.3406l4.276 12.99-20.723 8.042-10.921-19.362 11.546-7.33"
										}), (0, r.jsx)("path", {
											stroke: "#1E2126",
											strokeWidth: "2",
											d: "M151.5172-63.3406l4.276 12.99-20.723 8.042-10.921-19.362 11.546-7.33z",
											strokeLinecap: "round",
											strokeLinejoin: "round"
										}), (0, r.jsx)("path", {
											stroke: "#1E2126",
											strokeWidth: "2",
											d: "M135.6949-69.0003l-.625 26.692 16.447-21.032m-27.3679 1.6701l31.645 11.319",
											strokeLinecap: "round",
											strokeLinejoin: "round"
										}), (0, r.jsx)("path", {
											fill: "#E4E9F8",
											d: "M59.7897 13.2502l-102.171 25.055c-2.453.602-4.93-.899-5.531-3.352l-17.794-72.557c-.602-2.454.9-4.93 3.353-5.532l102.171-25.055c2.454-.601 4.931.899 5.533 3.353l17.793 72.556c.601 2.454-.9 4.93-3.354 5.532"
										}), (0, r.jsx)("path", {
											fill: "#7687B2",
											d: "M45.3502-64.8382c-.602-2.453-3.078-3.954-5.532-3.353l-102.171 25.056c-2.454.601-3.954 3.078-3.353 5.531l3.489 14.228 111.056-27.234-3.489-14.228z"
										}), (0, r.jsx)("path", {
											stroke: "#1E2126",
											strokeWidth: "2",
											d: "M59.7897 13.2502l-102.171 25.055c-2.453.602-4.93-.899-5.531-3.352l-17.794-72.557c-.602-2.454.9-4.93 3.353-5.532l102.171-25.055c2.454-.601 4.931.899 5.533 3.353l17.793 72.556c.601 2.454-.9 4.93-3.354 5.532zM-62.2172-23.3763l111.057-27.234m-95.9164 3.7287l-8.367 21.844m30.0096-27.1517l-8.366 21.844m30.0096-27.1516l-8.366 21.844M17.8522-62.804L9.4862-40.96m30.0095-27.1516l-8.366 21.844",
											strokeLinecap: "round",
											strokeLinejoin: "round"
										}), (0, r.jsx)("path", {
											fill: "#FF7B78",
											d: "M28.693-19.9388c3.986 16.254-5.959 32.661-22.213 36.647-16.254 3.986-32.661-5.959-36.646-22.213-3.987-16.253 5.959-32.661 22.213-36.646 16.252-3.986 32.661 5.959 36.646 22.212"
										}), (0, r.jsx)("path", {
											stroke: "#1E2126",
											strokeWidth: "2",
											d: "M28.693-19.9388c3.986 16.254-5.959 32.661-22.213 36.647-16.254 3.986-32.661-5.959-36.646-22.213-3.987-16.253 5.959-32.661 22.213-36.646 16.252-3.986 32.661 5.959 36.646 22.212z",
											strokeLinecap: "round",
											strokeLinejoin: "round"
										}), (0, r.jsx)("path", {
											fill: "#FFF",
											d: "M-16.3051-26.1936l7.999 32.618 26.541-23.798"
										}), (0, r.jsx)("path", {
											stroke: "#1E2126",
											strokeWidth: "2",
											d: "M-16.3051-26.1936l7.999 32.618 26.541-23.798z",
											strokeLinecap: "round",
											strokeLinejoin: "round"
										}), (0, r.jsx)("path", {
											fill: "#FFF",
											d: "M101.5895 23.7946l33.137 35.518-29.647-1.029c-2.585-.09-4.608-2.258-4.518-4.843l1.028-29.646z"
										}), (0, r.jsx)("path", {
											fill: "#E4E9F8",
											d: "M134.7262 59.3127l-3.195 92.059c-.089 2.585-2.258 4.608-4.843 4.519l-93.619-3.249c-2.586-.09-4.609-2.258-4.519-4.844l4.223-121.705c.09-2.585 2.259-4.608 4.844-4.518l63.972 2.22"
										}), (0, r.jsx)("path", {
											stroke: "#1E2126",
											strokeWidth: "2",
											d: "M134.7262 59.3127l-3.195 92.059c-.089 2.585-2.258 4.608-4.843 4.519l-93.619-3.249c-2.586-.09-4.609-2.258-4.519-4.844l4.223-121.705c.09-2.585 2.259-4.608 4.844-4.518l63.972 2.22",
											strokeLinecap: "round",
											strokeLinejoin: "round"
										}), (0, r.jsx)("path", {
											stroke: "#1E2126",
											strokeWidth: "2",
											d: "M101.5895 23.7946l33.137 35.518-29.647-1.029c-2.585-.09-4.608-2.258-4.518-4.843l1.028-29.646z",
											strokeLinecap: "round",
											strokeLinejoin: "round"
										}), (0, r.jsx)("path", {
											fill: "#FFF",
											d: "M104.15 6.4353l39.81 27.834-29.21 5.171c-2.547.451-4.978-1.248-5.429-3.796l-5.171-29.209z"
										}), (0, r.jsx)("path", {
											fill: "#E4E9F8",
											d: "M143.9596 34.2692l16.058 90.704c.45 2.547-1.249 4.978-3.796 5.429l-92.242 16.329c-2.546.452-4.977-1.248-5.428-3.795l-21.229-119.914c-.451-2.547 1.248-4.978 3.796-5.428l63.031-11.159"
										}), (0, r.jsx)("path", {
											stroke: "#1E2126",
											strokeWidth: "2",
											d: "M143.9596 34.2692l16.058 90.704c.45 2.547-1.249 4.978-3.796 5.429l-92.242 16.329c-2.546.452-4.977-1.248-5.428-3.795l-21.229-119.914c-.451-2.547 1.248-4.978 3.796-5.428l63.031-11.159",
											strokeLinecap: "round",
											strokeLinejoin: "round"
										}), (0, r.jsx)("path", {
											stroke: "#1E2126",
											strokeWidth: "2",
											d: "M104.15 6.4353l39.81 27.834-29.21 5.171c-2.547.451-4.978-1.248-5.429-3.796l-5.171-29.209z",
											strokeLinecap: "round",
											strokeLinejoin: "round"
										}), (0, r.jsx)("path", {
											fill: "#5871B7",
											d: "M10.7613-26.0428h117.831c2.829 0 5.123 2.294 5.123 5.123v7.341c0 1.565.716 3.045 1.943 4.016l7 5.542c.659.522.646 1.525-.026 2.029l-6.867 5.151c-1.29.967-2.05 2.485-2.05 4.098v7.685c0 2.829-2.294 5.123-5.123 5.123H10.7613c-2.83 0-5.124-2.294-5.124-5.123v-35.862c0-2.829 2.294-5.123 5.124-5.123"
										}), (0, r.jsx)("path", {
											stroke: "#1E2126",
											strokeWidth: "2",
											d: "M10.7613-26.0428h117.831c2.829 0 5.123 2.294 5.123 5.123v7.341c0 1.565.716 3.045 1.943 4.016l7 5.542c.659.522.646 1.525-.026 2.029l-6.867 5.151c-1.29.967-2.05 2.485-2.05 4.098v7.685c0 2.829-2.294 5.123-5.123 5.123H10.7613c-2.83 0-5.124-2.294-5.124-5.123v-35.862c0-2.829 2.294-5.123 5.124-5.123zM64.1588 1.2805h-43.147m21.5738-8.1114h-21.574m91.3894 0H49.816m33.9815-8.1118h-62.786",
											strokeLinecap: "round",
											strokeLinejoin: "round"
										}), (0, r.jsx)("path", {
											fill: "#FFF",
											d: "M166.0641 58.8137l-21.664 89.53c-.608 2.514-3.14 4.06-5.654 3.451l-91.048-22.031c-2.515-.608-4.06-3.14-3.451-5.654l28.64-118.362c.609-2.515 3.14-4.059 5.655-3.451l62.215 15.055"
										}), (0, r.jsx)("path", {
											fill: "#E4E9F8",
											d: "M140.7574 17.3513l25.307 41.462-28.832-6.976c-2.515-.609-4.06-3.14-3.452-5.654l6.977-28.832z"
										}), (0, r.jsx)("path", {
											stroke: "#1E2126",
											strokeWidth: "2",
											d: "M166.0641 58.8137l-21.664 89.53c-.608 2.514-3.14 4.06-5.654 3.451l-91.048-22.031c-2.515-.608-4.06-3.14-3.451-5.654l28.64-118.362c.609-2.515 3.14-4.059 5.655-3.451l62.215 15.055",
											strokeLinecap: "round",
											strokeLinejoin: "round"
										}), (0, r.jsx)("path", {
											stroke: "#1E2126",
											strokeWidth: "2",
											d: "M140.7574 17.3513l25.307 41.462-28.832-6.976c-2.515-.609-4.06-3.14-3.452-5.654l6.977-28.832z",
											strokeLinecap: "round",
											strokeLinejoin: "round"
										}), (0, r.jsx)("path", {
											fill: "#5865f2",
											d: "M84.6422 57.6999h-117.832c-2.829 0-5.123-2.293-5.123-5.123v-7.34c0-1.566-.716-3.045-1.943-4.017l-7-5.542c-.659-.521-.646-1.525.027-2.029l6.867-5.151c1.29-.967 2.049-2.485 2.049-4.098v-7.685c0-2.829 2.294-5.123 5.123-5.123h117.832c2.829 0 5.123 2.294 5.123 5.123v35.862c0 2.83-2.294 5.123-5.123 5.123"
										}), (0, r.jsx)("path", {
											stroke: "#1E2126",
											strokeWidth: "2",
											d: "M84.6422 57.6999h-117.832c-2.829 0-5.123-2.293-5.123-5.123v-7.34c0-1.566-.716-3.045-1.943-4.017l-7-5.542c-.659-.521-.646-1.525.027-2.029l6.867-5.151c1.29-.967 2.049-2.485 2.049-4.098v-7.685c0-2.829 2.294-5.123 5.123-5.123h117.832c2.829 0 5.123 2.294 5.123 5.123v35.862c0 2.83-2.294 5.123-5.123 5.123zM-26.3637 22.2653h48.67M6.0826 30.3767h68.309m-100.7553 0h22.799m53.1942 8.1118h14.942m-24.3346 0h4.534m-71.1346 0h54.093m-54.093 8.1113h63.186",
											strokeLinecap: "round",
											strokeLinejoin: "round"
										}), (0, r.jsx)("path", {
											fill: "#98AFED",
											d: "M63.191 113.1003h-130.64c-2.829 0-5.123-2.293-5.123-5.123v-7.34c0-1.566-.716-3.046-1.943-4.017l-7-5.542c-.658-.521-.646-1.525.026-2.029l6.868-5.151c1.291-.967 2.049-2.485 2.049-4.098v-7.685c0-2.829 2.294-5.123 5.123-5.123h130.64c2.829 0 5.123 2.294 5.123 5.123v35.862c0 2.83-2.294 5.123-5.123 5.123"
										}), (0, r.jsx)("path", {
											stroke: "#1E2126",
											strokeWidth: "2",
											d: "M63.191 113.1003h-130.64c-2.829 0-5.123-2.293-5.123-5.123v-7.34c0-1.566-.716-3.046-1.943-4.017l-7-5.542c-.658-.521-.646-1.525.026-2.029l6.868-5.151c1.291-.967 2.049-2.485 2.049-4.098v-7.685c0-2.829 2.294-5.123 5.123-5.123h130.64c2.829 0 5.123 2.294 5.123 5.123v35.862c0 2.83-2.294 5.123-5.123 5.123zM-60.6225 77.6657h99.433m-23.4398 8.1114h7.949m-19.6892 0h-64.253m0 8.1118h47.398m-47.398 8.1113h116.122",
											strokeLinecap: "round",
											strokeLinejoin: "round"
										}), (0, r.jsx)("path", {
											fill: "#E4E9F8",
											d: "M37.8805 30.8191h-105.198c-2.527 0-4.574-2.048-4.574-4.574v-74.706c0-2.527 2.047-4.574 4.574-4.574h105.198c2.526 0 4.574 2.047 4.574 4.574v74.706c0 2.526-2.048 4.574-4.574 4.574"
										}), (0, r.jsx)("path", {
											fill: "#7687B2",
											d: "M42.4547-33.7181v-14.743c0-2.527-2.048-4.574-4.574-4.574h-105.198c-2.527 0-4.575 2.047-4.575 4.574v14.743h114.347z"
										}), (0, r.jsx)("path", {
											stroke: "#1E2126",
											strokeWidth: "2",
											d: "M37.8805 30.8191h-105.198c-2.527 0-4.574-2.048-4.574-4.574v-74.706c0-2.527 2.047-4.574 4.574-4.574h105.198c2.526 0 4.574 2.047 4.574 4.574v74.706c0 2.526-2.048 4.574-4.574 4.574zM-71.892-33.8123H42.455m-94.0442-19.2231l-13.328 19.223m35.6121-19.223l-13.328 19.223m35.6132-19.223l-13.328 19.223m35.6122-19.223l-13.328 19.223m35.6121-19.223l-13.328 19.223",
											strokeLinecap: "round",
											strokeLinejoin: "round"
										}), (0, r.jsx)("path", {
											fill: "#FF7B78",
											d: "M15.5836-8.8211c0 16.735-13.566 30.302-30.302 30.302-16.735 0-30.302-13.567-30.302-30.302s13.567-30.302 30.302-30.302c16.736 0 30.302 13.567 30.302 30.302"
										}), (0, r.jsx)("path", {
											stroke: "#1E2126",
											strokeWidth: "2",
											d: "M15.5836-8.8211c0 16.735-13.566 30.302-30.302 30.302-16.735 0-30.302-13.567-30.302-30.302s13.567-30.302 30.302-30.302c16.736 0 30.302 13.567 30.302 30.302z",
											strokeLinecap: "round",
											strokeLinejoin: "round"
										}), (0, r.jsx)("path", {
											fill: "#FFF",
											d: "M-26.6293-25.6136v33.584l31.445-16.792"
										}), (0, r.jsx)("path", {
											stroke: "#1E2126",
											strokeWidth: "2",
											d: "M-26.6293-25.6136v33.584l31.445-16.792zM184.3375 8.3772v6.43m3.2149-3.2152h-6.43m-292.9079 79.082v6.43m3.2148-3.2151h-6.43M195.901-43.6692l-1.516 1.515m-6.0611 6.0621l-1.516 1.516m9.0931-.0004l-1.516-1.516m-6.0611-6.0616l-1.516-1.515M-88.642 168.9265l-1.516 1.516m-6.0621 6.0616l-1.516 1.515m9.0941.0001l-1.516-1.515m-6.0621-6.0621l-1.516-1.516M174.3463-8.8211c0 1.775-1.439 3.215-3.215 3.215-1.776 0-3.215-1.44-3.215-3.215s1.439-3.215 3.215-3.215c1.776 0 3.215 1.44 3.215 3.215z",
											strokeLinecap: "round",
											strokeLinejoin: "round"
										})]
									})]
								}), (0, r.jsxs)(o.Z.g, {
									className: s.magnifyingGlass,
									style: u(this.state),
									children: [(0, r.jsx)("path", {
										fill: "#C9D2F0",
										d: "M89.8311 190.9259c-2.441-2.441-2.441-6.4 0-8.841l36.771-36.771 8.841 8.841-36.771 36.771c-2.441 2.441-6.4 2.441-8.841 0"
									}), (0, r.jsx)("path", {
										stroke: "#1E2126",
										strokeWidth: "2",
										d: "M89.8311 190.9259c-2.441-2.441-2.441-6.4 0-8.841l36.771-36.771 8.841 8.841-36.771 36.771c-2.441 2.441-6.4 2.441-8.841 0z",
										strokeLinecap: "round",
										strokeLinejoin: "round"
									}), (0, r.jsx)("path", {
										fill: "#9F7373",
										d: "M100.1458 189.4524l-8.841-8.841c-1.628-1.628-1.628-4.267 0-5.894l17.437-17.437c1.627-1.628 4.266-1.628 5.894 0l8.841 8.841c1.628 1.628 1.628 4.267 0 5.894l-17.437 17.437c-1.627 1.628-4.266 1.628-5.894 0"
									}), (0, r.jsx)("path", {
										stroke: "#1E2126",
										strokeWidth: "2",
										d: "M100.1458 189.4524l-8.841-8.841c-1.628-1.628-1.628-4.267 0-5.894l17.437-17.437c1.627-1.628 4.266-1.628 5.894 0l8.841 8.841c1.628 1.628 1.628 4.267 0 5.894l-17.437 17.437c-1.627 1.628-4.266 1.628-5.894 0z",
										strokeLinecap: "round",
										strokeLinejoin: "round"
									}), (0, r.jsx)("path", {
										fill: "#F3F9FF",
										d: "M132.1122 148.6448c-15.621-15.621-15.621-40.948 0-56.569 15.621-15.621 40.948-15.621 56.569 0 15.621 15.621 15.621 40.948 0 56.569-15.621 15.621-40.948 15.621-56.569 0m63.895-63.895c-19.667-19.667-51.554-19.667-71.221 0s-19.667 51.554 0 71.221 51.554 19.667 71.221 0 19.667-51.554 0-71.221"
									}), (0, r.jsx)("path", {
										stroke: "#1E2126",
										strokeWidth: "2",
										d: "M196.0069 155.9708c-19.667 19.667-51.554 19.667-71.221 0s-19.667-51.554 0-71.221 51.554-19.667 71.221 0 19.667 51.554 0 71.221z",
										strokeLinecap: "round",
										strokeLinejoin: "round"
									}), (0, r.jsx)("path", {
										stroke: "#1E2126",
										strokeWidth: "2",
										d: "M132.1122 148.6448c-15.621-15.621-15.621-40.948 0-56.569 15.621-15.621 40.948-15.621 56.569 0 15.621 15.621 15.621 40.948 0 56.569-15.621 15.621-40.948 15.621-56.569 0z",
										strokeLinecap: "round",
										strokeLinejoin: "round"
									}), (0, r.jsx)("path", {
										d: "M84 66h130v130H84z"
									})]
								})]
							})]
						})]
					})
				}
				constructor(...e) {
					super(...e), c(this, "state", {
						x: new o.Z.Value(0),
						y: new o.Z.Value(0)
					}), c(this, "_isMounted", !1), c(this, "shouldLoop", () => this._isMounted)
				}
			}
			let p = d
		},
		101695: function(e, t, n) {
			n.d(t, {
				Z: () => o
			});
			var r = n(255367),
				i = n(73800),
				l = n(481060),
				a = n(930362);

			function o(e) {
				let {
					onPageChange: t,
					offset: n,
					totalCount: o,
					pageSize: s
				} = e, c = Math.floor(n / s) + 1, u = i.useCallback(e => {
					t(e - 1)
				}, [t]);
				return (0, r.jsx)("div", {
					className: a.container,
					children: (0, r.jsx)(l.DsT, {
						currentPage: c,
						totalCount: o,
						pageSize: s,
						onPageChange: u,
						maxVisiblePages: 5
					})
				})
			}
		},
		683101: function(e, t, n) {
			n.d(t, {
				Z: () => g
			}), n(388685);
			var r = n(255367),
				i = n(73800),
				l = n(392711),
				a = n.n(l),
				o = n(374470),
				s = n(481060),
				c = n(239091),
				u = n(294218),
				d = n(592125),
				p = n(388032),
				m = n(548185);

			function f(e, t, n) {
				return t in e ? Object.defineProperty(e, t, {
					value: n,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : e[t] = n, e
			}

			function _(e) {
				for (var t = 1; t < arguments.length; t++) {
					var n = null != arguments[t] ? arguments[t] : {},
						r = Object.keys(n);
					"function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
						return Object.getOwnPropertyDescriptor(n, e).enumerable
					}))), r.forEach(function(t) {
						f(e, t, n[t])
					})
				}
				return e
			}

			function h(e, t) {
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
			class g extends i.PureComponent {
				render() {
					let {
						result: e,
						listItemProps: t,
						searchOffset: n,
						index: i,
						totalResults: l
					} = this.props, o = a().find(e, e => e.isSearchHit);
					if (null == o) return null;
					let c = d.Z.getChannel(o.channel_id);
					if (null == c) return null;
					let f = "search-result-".concat(o.id);
					return (0, r.jsx)(s.tEY, {
						ringTarget: this.hitRef,
						ringClassName: m.__invalid_searchResultFocusRing,
						offset: 4,
						children: (0, r.jsxs)("li", h(_({
							className: m.container
						}, t), {
							"aria-posinset": 1 + n + i,
							"aria-setsize": l,
							"aria-labelledby": f,
							children: [(0, r.jsx)(s.P3F, {
								tabIndex: -1,
								onClick: this.handleMessageClick,
								innerRef: this.containerRef,
								className: m.searchResult,
								focusProps: {
									enabled: !1
								},
								children: (0, r.jsx)("div", {
									ref: this.hitRef,
									className: m.message,
									children: (0, r.jsx)(u.Z, {
										id: f,
										message: o,
										channel: c,
										onContextMenu: e => this.handleContextMenu(e, o),
										animateAvatar: !1,
										subscribeToComponentDispatch: !1,
										trackAnnouncementViews: !0,
										isSearchResult: !0
									})
								}, o.id)
							}), (0, r.jsx)("div", {
								className: m.buttonsContainer,
								"aria-hidden": !0,
								children: (0, r.jsx)(s.P3F, {
									className: m.button,
									onClick: this.jumpTo,
									children: p.intl.string(p.t.k5WiPT)
								})
							})]
						}))
					})
				}
				constructor(...e) {
					super(...e), f(this, "containerRef", i.createRef()), f(this, "hitRef", i.createRef()), f(this, "handleContextMenu", (e, t) => {
						let i = d.Z.getChannel(t.channel_id);
						null != i && (e.stopPropagation(), (0, c.jW)(e, async () => {
							let {
								default: e
							} = await Promise.all([n.e("16705"), n.e("32670")]).then(n.bind(n, 858341));
							return n => (0, r.jsx)(e, h(_({}, n), {
								message: t,
								channel: i
							}))
						}))
					}), f(this, "jumpTo", e => {
						null != e && (e.preventDefault(), e.stopPropagation());
						let {
							onJump: t,
							result: n,
							index: r
						} = this.props, i = n.find(e => e.isSearchHit);
						null != i && t(i, r)
					}), f(this, "handleMessageClick", e => {
						if (function(e, t) {
								var n;
								let r = null == (n = window) ? void 0 : n.getSelection();
								if (null != r && !r.isCollapsed) return !0;
								if (null == e || null == t) return !1;
								for (;
									(0, o.k)(e) && e !== t;) {
									let {
										tagName: t
									} = e;
									if ("A" === t || "IMG" === t || "BUTTON" === t) return !0;
									e = e.parentNode
								}
								return !1
							}(e.target, this.containerRef.current)) return void e.stopPropagation();
						this.jumpTo(e)
					})
				}
			}
		},
		619753: function(e, t, n) {
			n.d(t, {
				Z: () => U
			}), n(35282), n(539854), n(388685);
			var r = n(255367),
				i = n(73800),
				l = n(120356),
				a = n.n(l),
				o = n(837969),
				s = n(481060),
				c = n(904245),
				u = n(603263),
				d = n(963374),
				p = n(607070),
				m = n(933557),
				f = n(471445),
				_ = n(95398),
				h = n(905405),
				g = n(255269),
				b = n(937889),
				E = n(804063),
				y = n(703656),
				x = n(359110),
				C = n(695346),
				v = n(131704),
				O = n(592125),
				j = n(430824),
				I = n(496675),
				S = n(699516),
				T = n(768119),
				N = n(944486),
				P = n(594174),
				A = n(861262),
				w = n(101695),
				Z = n(683101),
				R = n(981631),
				k = n(388032),
				L = n(378869);

			function D(e) {
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

			function M(e, t) {
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
			let U = i.memo(function(e) {
				var t;
				let {
					search: n,
					searchId: l,
					renderEmbeds: a,
					scrollTo: m,
					searchResults: f,
					blockCount: _,
					ignoreCount: h,
					onPageChange: g,
					onClick: b
				} = e, {
					offset: x,
					totalResults: C,
					isSearching: v,
					showBlockedResults: j
				} = n, I = i.useCallback((e, t) => {
					if (null == b || b(e, t), (0, E.Z)(e)) {
						let t = O.Z.getChannel(e.channel_id),
							n = null != t ? t.getGuildId() : null;
						c.Z.trackJump(e.channel_id, e.id, "Search Results", {
							search_id: T.Z.getAnalyticsId(l)
						}), (0, y.uL)(R.Z5c.CHANNEL(n, e.channel_id, e.id))
					}
				}, [b, l]), N = i.useMemo(() => {
					let e;
					if (null == f) return [];
					let t = 0;
					return f.reduce((n, r) => {
						let i = r.find(e => e.isSearchHit);
						if (!j && null != i && (S.Z.isBlockedForMessage(i) || S.Z.isIgnoredForMessage(i))) return n;
						let l = O.Z.getChannel(r[0].channel_id);
						return null == l || ((null == e || e !== l.id) && n.push({
							channel: l,
							results: [],
							startIndex: t
						}), t += 1, n[n.length - 1].results.push(r), e = null == l ? void 0 : l.id), n
					}, [])
				}, [f, j]), P = i.useRef([]), Z = N.reduce((e, t) => e + 1 + t.results.length, 0), U = i.useCallback((e, t) => {
					if (!p.Z.keyboardModeEnabled) return;
					let n = P.current,
						r = null != t ? n[t] : void 0;
					if (null == r || null == r.hitRef.current) return;
					let i = r.hitRef.current.getClientRects()[0];
					m(i.top - .5 * i.height, !1, () => {
						var t;
						null == (t = document.getElementById(e)) || t.focus()
					})
				}, [m]), F = i.useCallback(e => {
					let t = P.current[e];
					null == t || t.jumpTo()
				}, []), G = (0, o.ZP)({
					navId: "search-results",
					itemCount: Z,
					focusedIndex: 0,
					setFocus: U,
					onSelect: F
				}), H = T.Z.getQuery(l), V = (0, A.k)(l) === R.aib.FAVORITES, z = (0, d.nC)(null != (t = null == H ? void 0 : H.content) ? t : ""), W = N.map(e => {
					let {
						channel: t,
						results: n,
						startIndex: i
					} = e;
					return (0, r.jsx)(B, {
						channel: t,
						results: n,
						highlighter: z,
						startIndex: i,
						resultRefs: P,
						totalResults: C,
						scrollTo: m,
						searchId: l,
						renderEmbeds: a,
						offset: x,
						jumpToMessage: I,
						listNavigator: G,
						favoriteSearch: V
					}, "".concat(t.id, "-").concat(i))
				});
				W.push();
				let K = i.useRef(null);
				i.useLayoutEffect(() => {
					var e;
					null == (e = K.current) || e.focus()
				}, [f]);
				let Y = (0, s.mFp)();
				return (0, r.jsxs)(r.Fragment, {
					children: [(0, r.jsx)("div", M(D({
						ref: K
					}, G.getContainerProps(), Y), {
						"aria-busy": v,
						children: W
					})), _ > 0 || h > 0 ? (0, r.jsxs)(s.P3F, {
						tag: "div",
						className: L.resultsBlocked,
						onClick: () => u.QY(l, !j),
						children: [(0, r.jsx)("div", {
							className: L.resultsBlockedImage
						}), (0, r.jsx)("div", {
							className: L.__invalid_resultsBlockedText,
							children: j ? _ > 0 && h > 0 ? k.intl.formatToPlainString(k.t["OvJs9/"], {
								count: _ + h
							}) : _ > 0 ? k.intl.formatToPlainString(k.t["n/1QFR"], {
								count: _
							}) : k.intl.formatToPlainString(k.t.ypezTE, {
								count: h
							}) : _ > 0 && h > 0 ? k.intl.formatToPlainString(k.t.EJHRcX, {
								count: _ + h
							}) : _ > 0 ? k.intl.formatToPlainString(k.t.HTE8JC, {
								count: _
							}) : k.intl.formatToPlainString(k.t.e7f8r6, {
								count: h
							})
						})]
					}) : null, !v && !V && (0, r.jsx)(w.Z, {
						onPageChange: g,
						offset: x,
						totalCount: C,
						pageSize: R.vpv
					})]
				})
			});

			function F(e) {
				let {
					parentChannel: t,
					onSelectChannel: n
				} = e;
				if ((null == t ? void 0 : t.name) == null) return null;
				let i = null != t ? (0, f.KS)(t) : null;
				if (null == i) return null;
				let l = (0, r.jsxs)(r.Fragment, {
					children: [(0, r.jsx)(i, {
						className: L.parentChannelNameIcon,
						size: "xxs",
						color: "currentColor"
					}), (0, r.jsx)(s.Text, {
						className: L.parentChannelNameText,
						variant: "text-xs/medium",
						color: "header-secondary",
						children: t.name
					})]
				});
				return (0, v.Em)(t.type) ? (0, r.jsx)(s.P3F, {
					className: a()(L.parentChannelName, L.parentChannelNameClickable),
					onClick: e => {
						e.stopPropagation(), n(t.id)
					},
					children: l
				}) : (0, r.jsx)("div", {
					className: L.parentChannelName,
					children: l
				})
			}

			function B(e) {
				var t, n, l;
				let {
					channel: a,
					results: o,
					highlighter: c,
					startIndex: u,
					resultRefs: d,
					totalResults: p,
					scrollTo: E,
					searchId: y,
					renderEmbeds: v,
					offset: T,
					jumpToMessage: A,
					listNavigator: w,
					favoriteSearch: k
				} = e, U = C.cC.useSetting(), B = (0, h.p)(), G = i.useCallback(e => {
					if (e === N.Z.getChannelId()) return;
					let t = O.Z.getChannel(e);
					null != t && (I.Z.can(R.Plq.VIEW_CHANNEL, t) || t.isPrivate()) && (0, x.Kh)(t.id)
				}, []), H = null != a ? (0, m.F6)(a, P.default, S.Z, !1) : "???", V = k && null != a.guild_id ? null == (t = j.Z.getGuild(a.guild_id)) ? void 0 : t.name : null, z = (null == a ? void 0 : a.parent_id) != null ? O.Z.getChannel(a.parent_id) : null, W = null != (n = null == z ? void 0 : z.name) ? n : null, K = null != (l = (0, f.KS)(a)) ? l : s.VL1, Y = I.Z.can(R.Plq.MANAGE_MESSAGES, a), {
					content: X
				} = (0, b.ZP)({
					content: H,
					embeds: []
				}, {
					postProcessor: c,
					shouldFilterKeywords: B
				}), q = i.useRef(null), [Q, J] = i.useState(!1);
				i.useEffect(() => {
					let e = q.current;
					null != e && null != e.offsetWidth && null != e.scrollWidth && J(e.offsetWidth < e.scrollWidth)
				}, []);
				let $ = [H, W, V].filter(e => null != e).join(", ");
				return (0, r.jsx)(_.aQ.Provider, {
					value: (0, g.Z)(U, Y),
					children: (0, r.jsxs)("ul", {
						role: "group",
						className: L.searchResultGroup,
						"aria-label": $,
						children: [(0, r.jsx)(s.P3F, {
							onClick: () => G(a.id),
							children: (0, r.jsxs)("div", {
								className: L.channelNameContainer,
								children: [(0, r.jsx)(K, {
									className: L.channelNameIcon,
									size: "xs",
									color: "currentColor"
								}), (0, r.jsx)(s.ua7, {
									text: H,
									shouldShow: Q,
									children: e => (0, r.jsxs)("span", M(D({}, e), {
										ref: q,
										className: L.channelNameText,
										children: [k && null !== V && "".concat(V, " : "), X]
									}))
								}), (0, r.jsx)(F, {
									parentChannel: z,
									onSelectChannel: G
								})]
							})
						}), o.map((e, t) => {
							let n = u + t;
							return (0, r.jsx)(Z.Z, {
								ref: e => {
									d.current[n] = e
								},
								totalResults: p,
								scrollTo: E,
								searchId: y,
								renderEmbeds: v,
								searchOffset: T,
								pageResultsLength: o.length,
								result: e,
								index: n,
								onJump: A,
								listItemProps: w.getItemProps({
									index: n
								})
							}, "search-result-".concat(n))
						})]
					})
				})
			}
		},
		862825: function(e, t, n) {
			n.d(t, {
				E2: () => a,
				SO: () => o,
				sR: () => s,
				yY: () => c
			}), n(388685);
			var r, i = n(85746),
				l = n(981631);
			let a = {
					sort_by: "timestamp",
					sort_order: "desc"
				},
				o = {
					1: {
						has: ["image", "video"]
					},
					3: {
						has: ["file"]
					},
					0: {},
					2: {
						has: ["link"]
					},
					4: {
						pinned: !0
					}
				};
			var s = ((r = {}).RECENT = "recent", r.MEMBERS = "members", r.PEOPLE = "people", r.MEDIA = "media", r.PINS = "pins", r.MESSAGES = "messages", r.LINKS = "links", r.FILES = "files", r.GUILD_CHANNELS = "guild_channels", r.THREADS = "threads", r);
			let c = {
				recent: 1,
				media: 1,
				pins: 4,
				messages: 0,
				links: 2,
				files: 3
			};
			l.aib.THREAD, l.aib.CHANNEL, l.aib.GUILD_CHANNEL, l.aib.GUILD, l.aib.DMS, l.aib.FAVORITES, l.aib.THREAD, l.aib.CHANNEL, l.aib.GUILD_CHANNEL, l.aib.GUILD, l.aib.DMS, l.aib.FAVORITES, i.l.COZY
		},
		466863: function(e, t, n) {
			n.d(t, {
				Z: () => s
			}), n(388685);
			var r = n(772848),
				i = n(710845),
				l = n(416638);

			function a(e, t, n) {
				return t in e ? Object.defineProperty(e, t, {
					value: n,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : e[t] = n, e
			}

			function o(e) {
				return {
					sessionId: (0, r.Z)(),
					selectedSearchTab: null != e ? e : null,
					searchCount: 0,
					searchWithFiltersCount: 0
				}
			}
			new i.Z("SearchSessionAnalyticsManager");
			let s = new class {
				upsertState(e, t) {
					let n = (0, l.Tm)(e),
						r = this.sessions.get(n),
						i = null != r ? r : o();
					this.sessions.set(n, function(e) {
						for (var t = 1; t < arguments.length; t++) {
							var n = null != arguments[t] ? arguments[t] : {},
								r = Object.keys(n);
							"function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
								return Object.getOwnPropertyDescriptor(n, e).enumerable
							}))), r.forEach(function(t) {
								a(e, t, n[t])
							})
						}
						return e
					}({}, i, t))
				}
				getState(e) {
					let t = (0, l.Tm)(e);
					return this.sessions.get(t)
				}
				incrementSearchCount(e, t) {
					var n, r;
					let i = this.getState(e),
						l = {};
					l.searchCount = (null != (n = null == i ? void 0 : i.searchCount) ? n : 0) + 1, t && (l.searchWithFiltersCount = (null != (r = null == i ? void 0 : i.searchWithFiltersCount) ? r : 0) + 1), this.upsertState(e, l)
				}
				getSearchCount(e) {
					var t, n;
					return null != (n = null == (t = this.getState(e)) ? void 0 : t.searchCount) ? n : 0
				}
				getSearchWithFiltersCount(e) {
					var t, n;
					return null != (n = null == (t = this.getState(e)) ? void 0 : t.searchWithFiltersCount) ? n : 0
				}
				getSearchCountWithoutFilters(e) {
					return Math.max(0, this.getSearchCount(e) - this.getSearchWithFiltersCount(e))
				}
				setSelectedSearchTab(e, t) {
					null != t && this.upsertState(e, {
						selectedSearchTab: t
					})
				}
				getSessionId(e) {
					var t;
					return null == (t = this.getState(e)) ? void 0 : t.sessionId
				}
				refreshQueryId(e) {
					let t = (0, l.Tm)(e);
					this.searchQueryIds.set(t, (0, r.Z)())
				}
				getQueryId(e) {
					let t = (0, l.Tm)(e);
					return this.searchQueryIds.get(t)
				}
				getSelectedSearchTab(e) {
					var t;
					return null == (t = this.getState(e)) ? void 0 : t.selectedSearchTab
				}
				initialize(e) {
					let {
						searchContext: t,
						initialTab: n,
						initializeSearchQueryId: i
					} = e, a = (0, l.Tm)(t);
					this.sessions.has(a) || this.sessions.set(a, o(n)), i && !this.searchQueryIds.has(a) && this.searchQueryIds.set(a, (0, r.Z)())
				}
				terminate(e) {
					let t = (0, l.Tm)(e);
					this.sessions.delete(t), this.searchQueryIds.delete(t)
				}
				constructor() {
					a(this, "sessions", new Map), a(this, "searchQueryIds", new Map)
				}
			}
		},
		584656: function(e, t, n) {
			n.d(t, {
				t: () => a
			});
			var r = n(255367);
			n(73800);
			var i = n(481060),
				l = n(820644);

			function a(e) {
				let {
					text: t,
					id: n
				} = e;
				(0, i.showToast)((0, i.createToast)(t, i.ToastType.CUSTOM, {
					component: (0, r.jsx)(l.o, {
						text: t
					}, n)
				}))
			}
		},
		820644: function(e, t, n) {
			n.d(t, {
				o: () => c
			});
			var r = n(255367);
			n(73800);
			var i = n(120356),
				l = n.n(i),
				a = n(481060),
				o = n(774599),
				s = n(986449);

			function c(e) {
				let {
					text: t
				} = e;
				return (0, r.jsxs)("div", {
					className: l()(s.toast, o.toast),
					children: [(0, r.jsx)(a.b7C, {
						color: a.TVs.colors.TEXT_BRAND
					}), (0, r.jsx)(a.Text, {
						className: s.__invalid_content,
						color: "header-primary",
						variant: "text-md/normal",
						children: t
					})]
				})
			}
		},
		869031: function(e, t, n) {
			n.d(t, {
				nZ: () => i
			});
			let r = (0, n(818083).B)({
				kind: "user",
				id: "2024-10_block_user_feedback",
				label: "Block User Feedback Experiment",
				defaultConfig: {
					enabled: !1
				},
				treatments: [{
					id: 1,
					label: "Enable Block User Feedback Survey",
					config: {
						enabled: !0
					}
				}]
			});

			function i(e) {
				let {
					enabled: t
				} = r.getCurrentConfig({
					location: e
				}, {
					autoTrackExposure: !0
				});
				return t
			}
		},
		987562: function(e, t, n) {
			n.d(t, {
				CE: () => p,
				F5: () => d,
				Me: () => f,
				TL: () => u,
				XL: () => m,
				YA: () => c,
				pv: () => s
			});
			var r, i, l, a = n(70956),
				o = n(388032);
			let s = 6 * a.Z.Millis.DAYS_30;
			var c = ((r = {}).TOO_MANY_NOTIFICATIONS = "too_many_notifications", r.TEMPORARY_BREAK = "temporary_break", r.ANNOYING = "annoying", r.UNSAFE = "unsafe", r.SPAM = "spam", r.OTHER = "other", r);

			function u() {
				return [{
					value: "too_many_notifications",
					label: o.intl.string(o.t.bQHhT0)
				}, {
					value: "temporary_break",
					label: o.intl.string(o.t.OuPkvL)
				}, {
					value: "annoying",
					label: o.intl.string(o.t["3kmAMD"])
				}, {
					value: "unsafe",
					label: o.intl.string(o.t.nmW7jI)
				}, {
					value: "spam",
					label: o.intl.string(o.t.cCPYjo)
				}, {
					value: "other",
					label: o.intl.string(o.t["7ZIIJy"])
				}]
			}
			var d = ((i = {}).CONFUSION = "confusion", i.DOES_NOT_ACHIEVE_WANTS = "does_not_achieve_wants", i.HARD_TO_ACCESS = "hard_to_access", i.SOMETHING_ELSE = "something_else", i);

			function p() {
				return [{
					value: "confusion",
					label: o.intl.string(o.t["64Oph4"])
				}, {
					value: "does_not_achieve_wants",
					label: o.intl.string(o.t["wH5R/v"])
				}, {
					value: "hard_to_access",
					label: o.intl.string(o.t["4uZBRk"])
				}, {
					value: "something_else",
					label: o.intl.string(o.t.YicFbG)
				}]
			}
			var m = ((l = {}).CONFUSION = "confusion", l.DOES_NOT_ACHIEVE_WANTS = "does_not_achieve_wants", l.HARD_TO_ACCESS = "hard_to_access", l.SOMETHING_ELSE = "something_else", l);

			function f() {
				return [{
					value: "confusion",
					label: o.intl.string(o.t.IumZmp)
				}, {
					value: "does_not_achieve_wants",
					label: o.intl.string(o.t.mXkYyc)
				}, {
					value: "hard_to_access",
					label: o.intl.string(o.t.eg1hVF)
				}, {
					value: "something_else",
					label: o.intl.string(o.t.WAYoT0)
				}]
			}
		},
		711758: function(e, t, n) {
			n.d(t, {
				Z: () => u
			});
			var r, i = n(442837),
				l = n(570140);

			function a(e, t, n) {
				return t in e ? Object.defineProperty(e, t, {
					value: n,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : e[t] = n, e
			}
			let o = s();

			function s() {
				return {
					ignoreTimestamps: {}
				}
			}
			class c extends(r = i.ZP.PersistedStore) {
				initialize(e) {
					var t, n, r;
					let i = null != (t = null == e ? void 0 : e.ignoreTimestamps) ? t : {};
					n = function(e) {
						for (var t = 1; t < arguments.length; t++) {
							var n = null != arguments[t] ? arguments[t] : {},
								r = Object.keys(n);
							"function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
								return Object.getOwnPropertyDescriptor(n, e).enumerable
							}))), r.forEach(function(t) {
								a(e, t, n[t])
							})
						}
						return e
					}({}, s()), r = r = {
						ignoreTimestamps: i
					}, Object.getOwnPropertyDescriptors ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(r)) : (function(e, t) {
						var n = Object.keys(e);
						if (Object.getOwnPropertySymbols) {
							var r = Object.getOwnPropertySymbols(e);
							n.push.apply(n, r)
						}
						return n
					})(Object(r)).forEach(function(e) {
						Object.defineProperty(n, e, Object.getOwnPropertyDescriptor(r, e))
					}), o = n
				}
				getState() {
					return o
				}
				getIgnoreTimestamps() {
					return o.ignoreTimestamps
				}
			}
			a(c, "displayName", "IgnoreNoticeStore"), a(c, "persistKey", "IgnoreNoticeStore");
			let u = new c(l.Z, {
				RELATIONSHIP_IGNORE_USER_SUCCESS: function(e) {
					let {
						userId: t,
						timestamp: n
					} = e;
					o.ignoreTimestamps[t] = n
				}
			})
		},
		982863: function(e, t, n) {
			n.d(t, {
				C$: () => i
			});
			let r = (0, n(818083).B)({
				kind: "user",
				id: "2025-04_ignore_user_feedback",
				label: "Ignore User Feedback Experiment",
				defaultConfig: {
					enabled: !1,
					shouldGetShorterIgnoreDuration: !1
				},
				treatments: [{
					id: 1,
					label: "Enable Ignore User Feedback Survey",
					config: {
						enabled: !0,
						shouldGetShorterIgnoreDuration: !1
					}
				}, {
					id: 2,
					label: "Enable Ignore User Feedback Survey w/ shorter duration for testing",
					config: {
						enabled: !0,
						shouldGetShorterIgnoreDuration: !0
					}
				}]
			});

			function i(e) {
				return r.getCurrentConfig({
					location: e
				}, {
					autoTrackExposure: !0
				})
			}
		},
		867003: function(e, t, n) {
			n.d(t, {
				L0: () => h,
				Rr: () => b,
				tp: () => g,
				wT: () => E
			});
			var r = n(704215),
				i = n(605236),
				l = n(699516),
				a = n(626135),
				o = n(70956),
				s = n(869031),
				c = n(711758),
				u = n(982863),
				d = n(987562),
				p = n(981631);
			let m = 3 * o.Z.Millis.DAY,
				f = o.Z.Millis.WEEK,
				_ = o.Z.Millis.DAYS_30,
				h = () => {
					if (!(0, s.nZ)("block_user_feedback_utils")) return !1;
					let e = l.Z.getSinces();
					return Object.keys(e).some(t => {
						let n = Date.now() - Date.parse(e[t]);
						return l.Z.isBlocked(t) && n > f && n < _
					})
				},
				g = (e, t, n, r) => {
					a.default.track(p.rMx.BLOCK_USER_FEEDBACK_SUBMITTED, {
						rating: e,
						feedback: t,
						reason: n,
						skipped: r
					})
				},
				b = () => {
					let {
						enabled: e,
						shouldGetShorterIgnoreDuration: t
					} = (0, u.C$)("ignore_user_feedback_utils");
					if (!e) return !1;
					let {
						isDismissed: n
					} = (0, i.Fo)(r.z.NAGBAR_NOTICE_IGNORE_USER_FEEDBACK, {
						cooldownDurationMs: d.pv
					});
					if (n) return !1;
					let a = t ? m : f,
						o = c.Z.getIgnoreTimestamps();
					return Object.keys(o).some(e => {
						let t = Date.now() - Number(o[e]);
						return l.Z.isIgnored(e) && t > a && t < _
					})
				},
				E = (e, t, n, r) => {
					a.default.track(p.rMx.IGNORE_USER_FEEDBACK_SUBMITTED, {
						rating: e,
						feedback: t,
						reason: n,
						skipped: r
					})
				}
		},
		456432: function(e, t, n) {
			n.d(t, {
				Z: () => o
			});
			var r = n(255367);
			n(73800);
			var i = n(755721),
				l = n(481060),
				a = n(829820);

			function o(e) {
				let {
					activity: t,
					user: n,
					source: o
				} = e, s = function(e, t) {
					if (null == e) return {};
					var n, r, i = function(e, t) {
						if (null == e) return {};
						var n, r, i = {},
							l = Object.keys(e);
						for (r = 0; r < l.length; r++) n = l[r], t.indexOf(n) >= 0 || (i[n] = e[n]);
						return i
					}(e, t);
					if (Object.getOwnPropertySymbols) {
						var l = Object.getOwnPropertySymbols(e);
						for (r = 0; r < l.length; r++) n = l[r], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n])
					}
					return i
				}(e, ["activity", "user", "source"]), {
					label: c,
					tooltip: u,
					loading: d,
					disabled: p,
					onClick: m
				} = (0, a.Lz)(t, n, o);
				return (0, r.jsx)(l.ua7, {
					text: u,
					children: e => {
						var t, n;
						let {
							onMouseEnter: l,
							onMouseLeave: a
						} = e;
						return (0, r.jsx)(i.zx, (t = function(e) {
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
						}({}, s), n = n = {
							color: p ? i.zx.Colors.PRIMARY : i.zx.Colors.GREEN,
							onClick: m,
							onMouseEnter: l,
							onMouseLeave: a,
							disabled: !d && p,
							submitting: d,
							children: c
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
				})
			}
		},
		192079: function(e, t, n) {
			n.d(t, {
				ER: () => d,
				kk: () => p,
				s$: () => m
			}), n(388685), n(392711);
			var r = n(19780),
				i = n(5192),
				l = n(700785),
				a = n(427679),
				o = n(157925),
				s = n(981631),
				c = n(71080),
				u = n(388032);

			function d(e, t, n, r) {
				let l = t[0],
					a = i.ZP.getName(e, n, l),
					o = null != r ? r : t.length;
				return 1 === o && null != l ? a : null == l ? u.intl.formatToPlainString(u.t.chmM9P, {
					count: o
				}) : u.intl.formatToPlainString(u.t.GhkJ29, {
					name: a,
					count: o - 1
				})
			}

			function p(e, t) {
				switch (e) {
					case c.aC.OWNER:
						return u.intl.string(u.t.icuNBA);
					case c.aC.ADMINISTRATOR:
						return u.intl.string(u.t.eTmN5e);
					case c.aC.MEMBER:
					case c.aC.ROLE:
						return t ? u.intl.string(u.t.Hw3XW1) : u.intl.string(u.t.YieyPj);
					case c.aC.EMPTY_STATE:
				}
				return null
			}

			function m(e) {
				let t = a.Z.getStageInstanceByChannel(e.id);
				return {
					channel_id: e.id,
					guild_id: e.guild_id,
					topic: null == t ? void 0 : t.topic,
					media_session_id: r.Z.getMediaSessionId(),
					request_to_speak_state: l.Uu(s.Plq.REQUEST_TO_SPEAK, e) ? o.BM.EVERYONE : o.BM.NO_ONE,
					stage_instance_id: null == t ? void 0 : t.id
				}
			}
		},
		706058: function(e, t, n) {
			n.d(t, {
				Dk: () => a,
				Ix: () => o,
				me: () => l
			});
			var r = n(544891),
				i = n(981631);
			async function l(e, t, n, l, a) {
				return (await r.tn.post({
					url: i.ANM.STAGE_INSTANCES,
					body: {
						channel_id: e,
						topic: t,
						privacy_level: n,
						guild_scheduled_event_id: a,
						send_start_notification: l
					},
					rejectWithError: !1
				})).body
			}
			async function a(e, t, n) {
				return (await r.tn.patch({
					url: i.ANM.STAGE_INSTANCE(e),
					body: {
						topic: t,
						privacy_level: n
					},
					rejectWithError: !1
				})).body
			}

			function o(e) {
				return r.tn.del({
					url: i.ANM.STAGE_INSTANCE(e),
					rejectWithError: !1
				})
			}
		},
		374425: function(e, t, n) {
			n.d(t, {
				Z: () => v
			}), n(388685);
			var r = n(255367),
				i = n(73800),
				l = n(477690),
				a = n(481060),
				o = n(100527),
				s = n(367907),
				c = n(906732),
				u = n(524444),
				d = n(624138),
				p = n(453070),
				m = n(373228),
				f = n(419922),
				_ = n(217588),
				h = n(981631),
				g = n(474936),
				b = n(282940);

			function E(e) {
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

			function y(e, t) {
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
			let x = (0, d.Mg)(l.Z.STICKERS_CONSTANTS_STICKER_DIMENSION),
				C = e => {
					null != e && s.ZP.trackWithMetadata(h.rMx.EXPRESSION_TOOLTIP_VIEWED, {
						type: g.cd.STICKER_IN_MESSAGE_HOVER,
						expression_id: e.id,
						expression_name: e.name,
						is_animated: (0, m.aQ)(e.format_type),
						is_custom: (0, m.z)(e.type)
					})
				},
				v = e => {
					let {
						renderableSticker: t,
						channel: n,
						isInteracting: l
					} = e, s = i.useRef(null), [d, m] = i.useState(!0), [h, g] = i.useState(String(Date.now())), [v] = (0, p.XW)(t, l), {
						analyticsLocations: O
					} = (0, c.ZP)(o.Z.STICKER_MESSAGE), j = (0, r.jsxs)("span", {
						className: b.stickerName,
						children: [(0, r.jsx)(a.B7q, {
							size: "xs",
							color: "currentColor",
							className: b.stickerIcon
						}), (null != v ? v : t).name]
					});
					return (0, r.jsx)(c.Gt, {
						value: O,
						children: (0, r.jsx)(a.yRy, {
							align: "center",
							animation: a.yRy.Animation.TRANSLATE,
							positionKey: h,
							onRequestClose: () => {
								m(!0)
							},
							renderPopout: e => (0, r.jsx)(_.Z, y(E({}, e), {
								renderableSticker: t,
								channel: n,
								refreshPositionKey: () => g(String(Date.now()))
							})),
							targetElementRef: s,
							children: e => {
								let {
									onClick: n
								} = e;
								return (0, r.jsx)(a.ua7, y(E({}, u.b_), {
									shouldShow: d,
									text: (0, u.Y)(j),
									"aria-label": !1,
									onTooltipShow: () => {
										C(v)
									},
									children: e => (0, r.jsx)(a.P3F, y(E({}, e), {
										innerRef: s,
										className: b.clickableSticker,
										onClick: e => {
											m(!d), n(e)
										},
										tag: "span",
										children: (0, r.jsx)(f.Z, {
											isInteracting: l,
											size: x,
											sticker: null != v ? v : t
										})
									}))
								}))
							}
						})
					})
				}
		},
		217588: function(e, t, n) {
			n.d(t, {
				Z: () => V
			}), n(953529), n(388685);
			var r = n(255367),
				i = n(73800),
				l = n(120356),
				a = n.n(l),
				o = n(442837),
				s = n(755721),
				c = n(481060),
				u = n(749210),
				d = n(493773),
				p = n(367907),
				m = n(600164),
				f = n(111028),
				_ = n(231053),
				h = n(697568),
				g = n(183023),
				b = n(524444),
				E = n(98278),
				y = n(767714),
				x = n(430824),
				C = n(594174),
				v = n(626135),
				O = n(74538),
				j = n(453070),
				I = n(926491),
				S = n(378233),
				T = n(419922),
				N = n(688179),
				P = n(981631),
				A = n(474936),
				w = n(388032),
				Z = n(673206),
				R = n(239594);

			function k(e) {
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

			function L(e, t) {
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
			let D = (e, t) => t ? w.intl.format(w.t.auckX1, {
					stickerPackName: e.name
				}) : w.intl.format(w.t.OzB6e3, {
					stickerPackName: e.name
				}),
				M = e => {
					let {
						sticker: t,
						stickerPack: n
					} = e;
					return i.useMemo(() => null == n ? [] : n.stickers.slice(0, 4).reduce((e, n) => 3 !== e.length && n.id !== t.id ? e.concat(n) : e, []), [t, n])
				};

			function U(e) {
				v.default.track(P.rMx.PREMIUM_PROMOTION_OPENED, {
					location_page: null != e.guild_id ? P.ZY5.GUILD_CHANNEL : P.ZY5.DM_CHANNEL,
					location_section: P.jXE.STICKER_POPOUT
				}), (0, E.z)()
			}

			function F(e) {
				let {
					sticker: t,
					description: n
				} = e;
				return (0, r.jsxs)(m.Z, {
					children: [(0, r.jsx)(T.Z, {
						sticker: t,
						size: 48,
						isInteracting: !0
					}), (0, r.jsxs)(m.Z, {
						direction: m.Z.Direction.VERTICAL,
						justify: m.Z.Justify.CENTER,
						className: R.truncatingText,
						children: [(0, r.jsx)(c.Text, {
							className: R.__invalid_emojiName,
							variant: "text-md/semibold",
							children: (0, r.jsx)(f.Z, {
								children: t.name
							})
						}), null != n && (0, r.jsx)(c.Text, {
							variant: "text-sm/normal",
							children: n
						})]
					})]
				})
			}
			let B = e => {
					let {
						closePopout: t,
						sticker: n,
						channel: l,
						refreshPositionKey: a
					} = e, [s, u, d] = (0, o.Wu)([I.Z], () => [I.Z.getStickerPack(n.pack_id), !I.Z.hasLoadedStickerPacks, I.Z.isPremiumPack(n.pack_id)], [n]), m = M({
						sticker: n,
						stickerPack: s
					});
					(0, j.Pq)(n.pack_id);
					let f = (0, j.Sd)(l),
						_ = {
							refreshPositionKey: a,
							channel: l
						},
						h = i.useRef(_);
					return (i.useEffect(() => {
						h.current = _
					}), i.useEffect(() => {
						let {
							refreshPositionKey: e
						} = h.current;
						e()
					}, [u]), i.useEffect(() => {
						let {
							channel: e
						} = h.current;
						v.default.track(P.rMx.OPEN_POPOUT, k({
							type: P.jXE.STICKER_POPOUT,
							guild_id: e.getGuildId(),
							sticker_pack_id: n.pack_id
						}, (0, p.v_)(e)))
					}, [n.pack_id]), u || null == s) ? (0, r.jsx)(b.SE, {
						className: Z.popoutLoader
					}) : (0, r.jsxs)(b.W_, {
						className: Z.popoutContent,
						children: [(0, r.jsx)(c.X6q, {
							variant: "heading-md/semibold",
							children: n.name
						}), (0, r.jsx)(c.Text, {
							variant: "text-sm/normal",
							children: D(s, d)
						}), (0, r.jsx)("ul", {
							className: Z.stickersList,
							children: m.map(e => (0, r.jsx)(T.Z, {
								isInteracting: !0,
								size: 80,
								sticker: e
							}, e.id))
						}), d && (0, r.jsx)("div", {
							className: Z.packActions,
							children: (0, r.jsx)(c.zxk, {
								variant: "secondary",
								size: "sm",
								text: w.intl.string(w.t.GPy3Ag),
								onClick: () => {
									d && (0, N.m)({
										stickerPack: s,
										stickerPickerCategories: f
									}), t()
								}
							}, "view-sticker-pack")
						})]
					})
				},
				G = e => {
					let t, {
							sticker: n,
							channel: l,
							closePopout: f,
							refreshPositionKey: E
						} = e,
						[j, I] = i.useState(null),
						[S, N] = i.useState(!1),
						D = C.default.getCurrentUser(),
						M = O.ZP.canUseCustomStickersEverywhere(D),
						B = (0, o.e7)([x.Z], () => x.Z.getGuild(n.guild_id)),
						G = null != B,
						[H, V] = i.useState(!1),
						[z, W] = i.useState(null),
						K = i.useMemo(() => ({
							page: null != l.guild_id ? P.ZY5.GUILD_CHANNEL : P.ZY5.DM_CHANNEL,
							section: P.jXE.STICKER_POPOUT
						}), [l.guild_id]),
						{
							current: Y
						} = i.useRef(k({
							guild_id: l.getGuildId()
						}, (0, p.v_)(l))),
						X = {
							stickerSourceGuild: B,
							refreshPositionKey: E
						},
						q = i.useRef(X);
					i.useEffect(() => {
						q.current = X
					}), i.useEffect(() => {
						let {
							stickerSourceGuild: e
						} = q.current;
						(async () => {
							(null == e || e.features.has(P.oNc.DISCOVERABLE)) && I(await (0, h.Z)(n.id)), N(!0)
						})()
					}, [n.id, G]);
					let Q = n.guild_id === l.getGuildId(),
						J = null != j,
						$ = !1,
						ee = "Custom Sticker Popout";
					M ? t = G ? Q ? w.intl.string(w.t.fZ0DiI) : w.intl.string(w.t["1f6D9v"]) : J ? w.intl.string(w.t.yHmoR0) : w.intl.string(w.t.vZaScH) : G ? (t = Q ? w.intl.string(w.t.jNphpq) : w.intl.string(w.t.lyD5ZW), $ = !0, ee = "Custom Sticker Popout (Upsell)") : J ? (t = w.intl.string(w.t.IuXYcn), $ = !0, ee = "Custom Sticker Popout (Upsell)") : (t = w.intl.format(w.t.hGWuxc, {
						openPremiumSettings: () => {
							U(l), f()
						}
					}), ee = "Custom Sticker Popout (Soft Upsell)");
					let et = !$ && !G && J && M;
					return (i.useEffect(() => {
						let {
							refreshPositionKey: e
						} = q.current;
						e()
					}, [S, j]), (0, d.ZP)(() => {
						v.default.track(P.rMx.OPEN_POPOUT, k({
							type: ee
						}, Y))
					}), S) ? (0, r.jsxs)(b.W_, {
						className: R.popoutContent,
						children: [(() => {
							let e = async () => {
								if (null == j || G) return;
								f();
								let e = j.id;
								try {
									await u.Z.joinGuild(e), u.Z.transitionToGuildSync(e)
								} catch (e) {}
							};
							return (0, r.jsxs)("div", {
								className: R.emojiSection,
								children: [(0, r.jsx)(F, {
									description: t,
									sticker: n
								}), $ && (0, r.jsx)(y.Z, {
									className: R.ctaButton,
									subscriptionTier: A.Si.TIER_2,
									size: s.zx.Sizes.SMALL,
									fullWidth: !0,
									textOptions: {
										textOverride: w.intl.string(w.t["gl/XHB"])
									},
									onSubscribeModalClose: t => t ? e() : f(),
									postSuccessGuild: G || null == j ? void 0 : j,
									premiumModalAnalyticsLocation: K
								}), et && (0, r.jsx)("div", {
									"data-button-hoisted-classname-wrapper": !0,
									className: R.ctaButton,
									children: (0, r.jsx)(c.zxk, {
										variant: "primary",
										size: "sm",
										text: w.intl.string(w.t.riu2R0),
										fullWidth: !0,
										onClick: e
									})
								})]
							})
						})(), (null != B || null != j) && (() => {
							var e;
							if (!J && !G) return;
							let t = (null != (e = null == j ? void 0 : j.stickers) ? e : []).slice(0, 13).filter(e => e.id !== n.id).slice(0, 12),
								i = null != j ? _.JO.createFromDiscoverableGuild(j) : _.JO.createFromGuildRecord(B);
							return (0, r.jsxs)("div", {
								className: R.guildSection,
								children: [(0, r.jsx)(c.vwX, {
									className: R.guildTitle,
									children: G ? w.intl.string(w.t.kx6pEB) : w.intl.string(w.t.pDE7GR)
								}), (0, r.jsx)(g.Oe, {
									expressionSourceGuild: i,
									hasJoinedExpressionSourceGuild: G,
									isDisplayingJoinGuildButtonInPopout: et
								}), !G && (0, r.jsxs)(r.Fragment, {
									children: [(0, r.jsx)(c.P3F, {
										onClick: () => {
											E(), V(!H)
										},
										className: R.showMoreEmojis,
										children: (0, r.jsxs)(m.Z, {
											children: [(0, r.jsx)(c.Text, {
												className: R.__invalid_showMoreEmojisLabel,
												variant: "text-xs/normal",
												color: "none",
												children: w.intl.string(w.t.vtH5ho)
											}), (0, r.jsx)(c.CJ0, {
												size: "md",
												color: "currentColor",
												className: a()(R.showMoreEmojisArrow, {
													[R.showMoreEmojisArrowCollapsed]: !H
												})
											})]
										})
									}), H && (0, r.jsx)(m.Z, {
										wrap: m.Z.Wrap.WRAP,
										align: m.Z.Align.START,
										justify: m.Z.Justify.START,
										className: R.otherEmojisContainer,
										children: t.map(e => (0, r.jsx)(c.ua7, L(k({
											text: e.name
										}, b.b_), {
											children: t => {
												var {
													onMouseEnter: n,
													onMouseLeave: i
												} = t, l = function(e, t) {
													if (null == e) return {};
													var n, r, i = function(e, t) {
														if (null == e) return {};
														var n, r, i = {},
															l = Object.keys(e);
														for (r = 0; r < l.length; r++) n = l[r], t.indexOf(n) >= 0 || (i[n] = e[n]);
														return i
													}(e, t);
													if (Object.getOwnPropertySymbols) {
														var l = Object.getOwnPropertySymbols(e);
														for (r = 0; r < l.length; r++) n = l[r], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n])
													}
													return i
												}(t, ["onMouseEnter", "onMouseLeave"]);
												return (0, r.jsx)("div", L(k({
													className: a()(R.otherEmoji, {
														[Z.nonInteractingSticker]: null != z && z !== e.id
													}),
													onMouseEnter: () => {
														null == n || n(), W(e.id)
													},
													onMouseLeave: () => {
														null == i || i(), W(null)
													}
												}, l), {
													children: (0, r.jsx)(T.Z, {
														size: 32,
														enlargeOnInteraction: !0,
														enlargeWithName: !1,
														enlargeScaleFactor: 2,
														isInteracting: z === e.id,
														sticker: e
													})
												}), e.id)
											}
										}), e.id))
									})]
								})]
							})
						})()]
					}) : (0, r.jsx)(b.SE, {
						className: Z.popoutLoader
					})
				};

			function H(e) {
				let {
					channel: t,
					closePopout: n,
					sticker: i
				} = e;
				return (0, r.jsx)(b.W_, {
					className: Z.popoutContent,
					children: (0, r.jsx)(F, {
						sticker: i,
						description: w.intl.format(w.t.hGWuxc, {
							openPremiumSettings: () => {
								n(), U(t)
							}
						})
					})
				})
			}
			let V = e => {
				let {
					renderableSticker: t,
					channel: n,
					closePopout: i,
					refreshPositionKey: l
				} = e, [a, o] = (0, j.XW)(t, !0);
				return null != a && (0, S.jl)(a) ? (0, r.jsx)(B, {
					sticker: a,
					closePopout: i,
					channel: n,
					refreshPositionKey: l
				}) : null != a && (0, S.J8)(a) ? (0, r.jsx)(G, {
					sticker: a,
					channel: n,
					closePopout: i,
					refreshPositionKey: l
				}) : o ? o && null == a ? (0, r.jsx)(H, {
					channel: n,
					closePopout: i,
					sticker: t
				}) : (i(), null) : (0, r.jsx)(b.SE, {})
			}
		},
		688179: function(e, t, n) {
			n.d(t, {
				m: () => o
			});
			var r = n(806966),
				i = n(585483),
				l = n(981631),
				a = n(957825);

			function o(e) {
				let {
					stickerPack: t,
					stickerPickerCategories: n
				} = e;
				i.S.dispatchToLastSubscribed(l.CkL.OPEN_EXPRESSION_PICKER, {
					activeView: a.X1.STICKER
				});
				let o = n.findIndex(e => e.id === t.id); - 1 !== o && r.ZN.setActiveCategoryIndex(o)
			}
		},
		432147: function(e, t, n) {
			n.d(t, {
				Z: () => y
			});
			var r = n(255367);
			n(73800);
			var i = n(120356),
				l = n.n(i),
				a = n(442837),
				o = n(481060),
				s = n(239091),
				c = n(901461),
				u = n(592125),
				d = n(709054),
				p = n(723774),
				m = n(144140),
				f = n(91159),
				_ = n(576799),
				h = n(488131),
				g = n(981631),
				b = n(388032),
				E = n(955344);

			function y(e) {
				let {
					message: t,
					compact: n
				} = e, i = (0, a.e7)([u.Z], () => u.Z.getChannel(d.default.castMessageIdAsChannelId(t.id)));
				return null == i ? null : (0, r.jsx)(x, {
					channel: i,
					compact: n,
					isSystemMessage: (0, c.Z)(t)
				})
			}

			function x(e) {
				let {
					channel: t,
					compact: i,
					isSystemMessage: c
				} = e, u = (0, a.e7)([m.Z], () => m.Z.getCount(t.id)), d = function(e) {
					var t;
					let n = (0, a.e7)([m.Z], () => m.Z.getMostRecentMessage(e.id)),
						i = (0, a.e7)([m.Z], () => m.Z.getCount(e.id)),
						l = (0, f.Ok)(e);
					return (null == (t = e.threadMetadata) ? void 0 : t.archived) ? b.intl.string(b.t.ZTo4HR) : null == i || 0 === i ? b.intl.string(b.t.HYtNyM) : null == n ? (0, r.jsxs)(r.Fragment, {
						children: [(0, r.jsx)("span", {
							children: b.intl.string(b.t.ZTo4HR)
						}), (0, r.jsx)("span", {
							className: E.timestamp,
							children: (0, f.Ye)(l)
						})]
					}) : (0, r.jsxs)(r.Fragment, {
						children: [(0, r.jsx)(_.Z, {
							message: n,
							channel: e
						}), (0, r.jsx)("span", {
							className: E.timestamp,
							children: (0, f.Ye)(l)
						})]
					})
				}(t), y = null != u && u > 0;
				return (0, r.jsxs)(r.Fragment, {
					children: [(0, r.jsx)("div", {
						className: l()(E.spine, {
							[E.cozy]: !i,
							[E.systemMessageSpine]: c
						})
					}), (0, r.jsx)(o.P3F, {
						onClick: function(e) {
							e.stopPropagation(), (0, h.ok)(t, e.shiftKey)
						},
						onKeyDown: function(e) {
							e.stopPropagation();
							let n = !e.altKey && !e.ctrlKey && !e.metaKey && !e.shiftKey,
								r = e.shiftKey && !(e.altKey || e.ctrlKey || e.metaKey);
							(e.which === g.yXg.SPACE || e.which === g.yXg.ENTER) && (e.preventDefault(), (n || r) && (0, h.ok)(t, r))
						},
						onContextMenu: function(e) {
							(0, s.jW)(e, async () => {
								let {
									default: e
								} = await Promise.all([n.e("90508"), n.e("78650")]).then(n.bind(n, 422200));
								return n => (0, r.jsx)(e, function(e) {
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
									channel: t
								}, n))
							})
						},
						"aria-roledescription": b.intl.string(b.t["8ipxiY"]),
						className: l()(E.container, {
							[E.systemMessageContainer]: c
						}),
						children: (0, r.jsxs)(o.nuw, {
							children: [(0, r.jsxs)("div", {
								className: E.topLine,
								children: [(0, r.jsx)(o.nn4, {
									children: b.intl.string(b.t["7Xm5QE"])
								}), (0, r.jsx)("span", {
									className: E.name,
									children: t.name
								}), (0, r.jsx)("span", {
									className: E.cta,
									"aria-hidden": !y,
									children: (0, p.WE)(u, t.id)
								})]
							}), (0, r.jsx)(o.Text, {
								variant: "text-sm/normal",
								"aria-hidden": !0,
								lineClamp: 1,
								color: "header-secondary",
								className: E.bottomLine,
								children: d
							})]
						})
					})]
				})
			}
		},
		576799: function(e, t, n) {
			n.d(t, {
				Z: () => f
			});
			var r = n(255367),
				i = n(73800),
				l = n(442837),
				a = n(616780),
				o = n(905405),
				s = n(937889),
				c = n(267128),
				u = n(123145),
				d = n(699516),
				p = n(217702),
				m = n(848697);

			function f(e) {
				let {
					message: t,
					channel: n
				} = e, {
					isBlocked: f,
					isIgnored: _
				} = (0, l.cj)([d.Z], () => ({
					isBlocked: d.Z.isBlockedForMessage(t),
					isIgnored: d.Z.isIgnoredForMessage(t)
				}), [t]), h = (0, o.p)(), g = i.useMemo(() => ({
					[n.guild_id]: [t.author.id]
				}), [n.guild_id, t.author.id]);
				(0, a.$)(g);
				let b = i.useMemo(() => null != t.content && "" !== t.content ? (0, s.ZP)(t, {
					formatInline: !0,
					shouldFilterKeywords: h
				}).content : null, [t, h]);
				return (0, r.jsxs)("div", {
					className: m.threadMessageAccessory,
					children: [(0, r.jsx)("img", {
						alt: "",
						src: t.author.getAvatarURL(n.guild_id, 16),
						className: m.threadMessageAccessoryAvatar
					}), (0, r.jsx)(u.Z, {
						message: t,
						channel: n,
						compact: !0
					}), (0, r.jsx)("div", {
						className: m.threadMessageAccessoryPreview,
						children: function(e, t, n, i) {
							let {
								contentPlaceholder: l,
								renderedContent: a,
								leadingIcon: o,
								trailingIcon: s
							} = (0, c.f)(e, t, n, i, m.threadMessageAccessoryContent, {
								trailingIconClass: m.threadMessageAccessoryContentTrailingIcon,
								leadingIconClass: m.threadMessageAccessoryContentLeadingIcon,
								iconSize: p.WW
							});
							return (0, r.jsxs)(r.Fragment, {
								children: [o, null != a ? a : (0, r.jsx)("span", {
									className: m.threadMessageAccessoryPlaceholder,
									children: l
								}), s]
							})
						}(t, b, f, _)
					})]
				})
			}
		},
		447564: function(e, t, n) {
			n.d(t, {
				default: () => j,
				k: () => O
			}), n(388685);
			var r = n(255367),
				i = n(73800),
				l = n(311570),
				a = n(692547),
				o = n(755721),
				s = n(481060),
				c = n(100527),
				u = n(906732),
				d = n(688465),
				p = n(333867),
				m = n(980463),
				f = n(576645),
				_ = n(317951),
				h = n(63063),
				g = n(937615),
				b = n(82950),
				E = n(981631),
				y = n(388032),
				x = n(668275),
				C = n(99713);

			function v(e) {
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
			let O = (e, t) => {
				(0, f.mx)(t), (0, s.ZDy)(async () => {
					let {
						default: t
					} = await Promise.resolve().then(n.bind(n, 447564));
					return n => (0, r.jsx)(t, v({
						channel: e
					}, n))
				}, {
					modalKey: I
				})
			};

			function j(e) {
				let {
					transitionState: t,
					channel: n
				} = e;
				return (0, r.jsx)(s.Y0X, {
					size: s.CgR.DYNAMIC,
					transitionState: t,
					parentComponent: "HDStreamingConsumableModal",
					children: (0, r.jsx)(S, {
						channel: n
					})
				})
			}
			let I = "HD_STREAMING_POTION_MODAL_KEY";

			function S(e) {
				let {
					channel: t
				} = e, n = (0, f.T$)(t), [a, o] = (0, i.useState)(!1), {
					price: d,
					fetchingPrice: h,
					error: g
				} = (0, f.R2)(_.FX), {
					entitlement: b,
					fetchedEntitlement: y,
					error: x
				} = (0, f.t6)(_.FX), C = g || x, {
					analyticsLocations: v
				} = (0, u.ZP)([c.Z.HD_STREAMING_POTION_MODAL]), O = null != b && !b.consumed;
				(0, i.useEffect)(() => () => {
					C && (0, m.SN)(_.FX)
				}, [b, t, a, C]);
				let j = (0, i.useCallback)(() => {
						(0, m.Zu)(t.id), (0, s.pTH)()
					}, [t.id]),
					I = (0, i.useCallback)(() => {
						(0, p.Z)({
							skuId: _.FX,
							analyticsLocations: v,
							onComplete: j,
							variantsReturnStyle: l.v.INDIVIDUAL_PRODUCTS
						})
					}, [v, j]),
					S = (0, i.useMemo)(() => () => t.isHDStreamSplashed ? 4 : n ? (null == b ? void 0 : b.type) === E.qc2.DEVELOPER_GIFT ? 1 : 2 * !!O : 3, [t.isHDStreamSplashed, n, null == b ? void 0 : b.type, O]),
					N = (0, i.useMemo)(() => S(), [S]);
				return (0, r.jsx)(T, {
					channel: t,
					buttonState: N,
					price: d,
					onActionClick: () => {
						o(!0), (O ? j : I)()
					},
					loading: h || !y
				})
			}
			let T = e => {
					let {
						channel: t,
						buttonState: n,
						price: i,
						onActionClick: l,
						loading: a
					} = e;
					return a ? (0, r.jsx)(R, {}) : null == i ? (0, r.jsx)(Z, {}) : (0, r.jsxs)(r.Fragment, {
						children: [(0, r.jsxs)("div", {
							className: x.modal,
							children: [(0, r.jsx)(N, {}), (0, r.jsx)(P, {
								channel: t
							})]
						}), (0, r.jsx)(A, {
							buttonState: n,
							price: i,
							onActionClick: l
						})]
					})
				},
				N = () => (0, r.jsx)("img", {
					className: x.image,
					src: "https://cdn.discordapp.com/assets/premium/roadblocks/hd_streaming.png",
					alt: y.intl.string(y.t.DdigcX)
				}),
				P = e => {
					let {
						channel: t
					} = e;
					return (0, r.jsxs)(r.Fragment, {
						children: [(0, r.jsxs)("div", {
							className: x.body,
							children: [(0, r.jsxs)("div", {
								className: x.heading,
								children: [(0, r.jsx)(s.X6q, {
									variant: "heading-lg/bold",
									children: y.intl.string(y.t.K04rOD)
								}), (0, r.jsx)(d.Z, {})]
							}), (0, r.jsx)(s.Text, {
								variant: "text-sm/normal",
								children: y.intl.string(y.t.lq40Pz)
							}), (0, r.jsx)(s.Text, {
								color: "text-link",
								variant: "text-sm/normal",
								children: y.intl.format(y.t["1wV4qq"], {
									helpCenterLink: h.Z.getArticleURL(E.BhN.HD_STREAMING_POTION)
								})
							}), (0, r.jsx)(s.Text, {
								color: "text-muted",
								variant: "text-xs/medium",
								children: y.intl.string(y.t.qk07Mj)
							})]
						}), (0, r.jsx)("div", {
							className: x.divider
						}), (0, r.jsxs)("div", {
							className: x.applyingTo,
							children: [(0, r.jsx)(s.Text, {
								variant: "eyebrow",
								children: y.intl.string(y.t.tZyXg4)
							}), (0, r.jsx)(b.Z, {
								channel: t
							})]
						})]
					})
				},
				A = e => {
					let {
						buttonState: t,
						price: n,
						onActionClick: i
					} = e;
					return (0, r.jsxs)("div", {
						className: x.footer,
						children: [(0, r.jsx)(s.zxk, {
							variant: "secondary",
							text: y.intl.string(y.t.Avt5KS),
							onClick: () => {
								(0, s.Mr3)(I)
							}
						}), (0, r.jsx)(w, {
							buttonState: t,
							price: n,
							onActionClick: i
						})]
					})
				},
				w = e => {
					let {
						buttonState: t,
						price: n,
						onActionClick: i
					} = e, l = y.intl.formatToPlainString(y.t.S9LAdX, {
						price: (0, g.T4)(n.amount, n.currency)
					});
					if (3 === t || 4 === t) {
						let e = {
							3: y.intl.string(y.t.Qrh2BQ),
							4: y.intl.string(y.t.utRdl5)
						} [t];
						return (0, r.jsx)(s.ua7, {
							tooltipContentClassName: x.tooltip,
							text: e,
							children: e => {
								var t, n;
								return (0, r.jsx)(o.zx, (t = v({}, e), n = n = {
									disabled: !0,
									children: l
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
						})
					}
					let c = {
						0: l,
						1: y.intl.string(y.t.sl6Tcn),
						2: y.intl.string(y.t.XJ9INj)
					} [t];
					return (0, r.jsx)(o.zx, {
						onClick: i,
						children: (0, r.jsxs)("div", {
							className: x.buttonCopy,
							children: [(0, r.jsx)(s.hh5, {
								color: a.Z.colors.WHITE,
								size: "sm"
							}), c]
						})
					})
				},
				Z = () => (0, r.jsx)("div", {
					className: x.anomaly,
					children: (0, r.jsxs)("div", {
						className: x.error,
						children: [(0, r.jsx)(s.Eep, {
							src: C,
							width: 178,
							height: 190
						}), (0, r.jsx)(s.Text, {
							variant: "text-md/normal",
							children: y.intl.string(y.t.sIA0OD)
						})]
					})
				}),
				R = () => (0, r.jsx)("div", {
					className: x.anomaly,
					children: (0, r.jsx)("div", {
						className: x.spinner,
						children: (0, r.jsx)(s.$jN, {})
					})
				})
		},
		207126: function(e, t, n) {
			n.d(t, {
				Z: () => s
			});
			var r = n(255367);
			n(73800);
			var i = n(481060),
				l = n(422034),
				a = n(938475),
				o = n(787508);

			function s(e) {
				let {
					channel: t
				} = e;
				if (null == t) return null;
				let n = a.ZP.getVoiceStatesForChannel(t).slice(0, 6),
					s = n.map((e, t) => {
						let {
							user: a
						} = e;
						return (0, r.jsx)(l.O, {
							affinity: a,
							applyMask: t !== n.length - 1,
							size: i.EFr.SIZE_20
						}, a.id)
					});
				return (0, r.jsx)("div", {
					className: o.avatars,
					children: s
				})
			}
		},
		82950: function(e, t, n) {
			n.d(t, {
				Z: () => o
			});
			var r = n(255367);
			n(73800);
			var i = n(481060),
				l = n(207126),
				a = n(763010);

			function o(e) {
				let {
					channel: t
				} = e;
				return (0, r.jsxs)("div", {
					className: a.channel,
					children: [(0, r.jsxs)("div", {
						className: a.channelLeft,
						children: [(0, r.jsx)(i.gj8, {}), (0, r.jsx)(i.Text, {
							variant: "text-md/normal",
							children: t.name
						})]
					}), (0, r.jsx)(l.Z, {
						channel: t
					})]
				})
			}
		},
		519320: function(e, t, n) {
			n.d(t, {
				EW: () => a,
				Np: () => o,
				tb: () => l
			});
			var r = n(626135),
				i = n(981631);

			function l(e, t, n, l) {
				r.default.track(i.rMx.VOICE_MESSAGE_PLAYBACK_STARTED, {
					message_id: e,
					total_duration_secs: t,
					start_duration_secs: Math.min(null != t ? t : n, n),
					sender_user_id: l
				})
			}

			function a(e, t, n, l, a) {
				r.default.track(i.rMx.VOICE_MESSAGE_PLAYBACK_ENDED, {
					message_id: e,
					total_duration_secs: t,
					end_duration_secs: Math.min(null != t ? t : n, n),
					sender_user_id: l,
					duration_listening_secs: a
				})
			}

			function o(e, t) {
				r.default.track(i.rMx.VOICE_MESSAGE_PLAYBACK_FAILED, {
					message_id: e,
					error_message: t
				})
			}
		},
		8532: function(e, t, n) {
			n.d(t, {
				m: () => r
			});
			let r = [{
				id: "749054660769218631",
				format_type: 3,
				description: "Wumpus waves hello",
				name: "Wave"
			}, {
				id: "751606379340365864",
				format_type: 3,
				description: "Nelly peeks around a wall and waves hello",
				name: "Wave"
			}, {
				id: "754108890559283200",
				format_type: 3,
				description: "Clyde cheerfully waving",
				name: "Wave"
			}, {
				id: "781291131828699156",
				format_type: 2,
				description: "Choco waves in greeting",
				name: "Wave"
			}, {
				id: "816087792291282944",
				format_type: 3,
				description: "Doggo spins and greets you",
				name: "Sup"
			}, {
				id: "819128604311027752",
				format_type: 3,
				description: "Peach raising her arms in distress",
				name: "Scream"
			}]
		},
		779139: function(e, t, n) {
			n.d(t, {
				TZ: () => u,
				y6: () => c
			});
			var r = n(904245),
				i = n(594174),
				l = n(626135),
				a = n(709054),
				o = n(8532),
				s = n(981631);
			let c = e => {
					var t;
					let n = null == (t = i.default.getCurrentUser()) ? void 0 : t.id,
						r = ((null != n ? a.default.extractTimestamp(n) : 0) + a.default.extractTimestamp(e)) % o.m.length;
					return o.m[r]
				},
				u = (e, t, n) => {
					var a;
					r.Z.sendGreetMessage(e.id, n, r.Z.getSendMessageOptionsForReply({
						channel: e,
						message: t,
						shouldMention: !0,
						showMentionToggle: !0
					})), l.default.track(s.rMx.WELCOME_CTA_CLICKED, {
						is_reply: !0,
						sticker_id: n,
						target_user: t.author.id,
						sender: null == (a = i.default.getCurrentUser()) ? void 0 : a.id
					})
				}
		},
		814820: function(e, t, n) {
			n.d(t, {
				f: () => y
			}), n(388685);
			var r = n(255367),
				i = n(73800),
				l = n(442837),
				a = n(755721),
				o = n(541716),
				s = n(419922),
				c = n(665906),
				u = n(271383),
				d = n(430824),
				p = n(496675),
				m = n(594174),
				f = n(838440),
				_ = n(779139),
				h = n(981631),
				g = n(388032),
				b = n(429495);
			let E = e => {
					let {
						channel: t,
						message: n
					} = e, [l, c] = i.useState(!1), u = (0, _.y6)(n.id), d = i.useCallback(() => {
						(0, f.v)({
							type: o.Ie.FORM,
							content: "",
							channel: t
						}).then(e => {
							let {
								valid: r
							} = e;
							r && (0, _.TZ)(t, n, u.id)
						})
					}, [t, n, u]);
					return (0, r.jsx)("div", {
						className: b.welcomeCTA,
						children: (0, r.jsxs)(a.zx, {
							className: b.welcomeCTAButtonOuter,
							innerClassName: b.welcomeCTAButton,
							color: a.Tt.PRIMARY,
							onMouseEnter: () => c(!0),
							onMouseLeave: () => c(!1),
							onClick: d,
							children: [(0, r.jsx)(s.Z, {
								className: b.welcomeCTASticker,
								isInteracting: l,
								sticker: u,
								size: 28
							}), g.intl.string(g.t["7Tj6HR"])]
						})
					})
				},
				y = e => {
					let {
						message: t,
						channel: n
					} = e, i = n.getGuildId(), a = (0, l.e7)([m.default, p.Z, d.Z, u.ZP], () => {
						var e;
						let r = m.default.getCurrentUser(),
							l = (0, c.xl)(n),
							a = p.Z.can(h.Plq.SEND_MESSAGES, n),
							o = null != i && null != r && (null == (e = u.ZP.getMember(i, r.id)) ? void 0 : e.isPending),
							s = t.author.bot,
							f = d.Z.getGuild(i),
							_ = null != f && (f.systemChannelFlags & h.xmn.SUPPRESS_JOIN_NOTIFICATION_REPLIES) == 0;
						return a && !l && !o && !s && _
					});
					return null != i && a ? (0, r.jsx)(E, {
						message: t,
						channel: n
					}) : null
				}
		},
		427123: function(e, t, n) {
			n.d(t, {
				Z: () => I
			}), n(388685), n(539854);
			var r, i, l, a = n(392711),
				o = n.n(a),
				s = n(442837),
				c = n(433517),
				u = n(570140),
				d = n(496929),
				p = n(16084),
				m = n(728345),
				f = n(812206),
				_ = n(594190),
				h = n(594174),
				g = n(580130),
				b = n(55563),
				E = n(981631);
			let y = "DetectedOffPlatformPremiumPerksStore",
				x = {},
				C = {},
				v = [];

			function O() {
				let e = !1;
				for (let {
						skuId: t,
						applicationId: n
					}
					of o().values(C)) {
					if (v.includes(t)) continue;
					let r = f.Z.getApplication(n);
					if (null == r) {
						f.Z.isFetchingApplication(n) || f.Z.didFetchingApplicationFail(n) || m.ZP.fetchApplication(n);
						continue
					}
					let i = b.Z.get(t);
					if (null == i) {
						b.Z.isFetching(t) || b.Z.didFetchingSkuFail(t) || p.$N(r.id, t);
						continue
					}
					g.Z.applicationIdsFetching.has(r.id) || g.Z.isEntitledToSku(h.default.getCurrentUser(), t, r.id, r.id) || !i.available ? null != x[t] && (delete x[t], e = !0) : (x[t] = {
						skuId: t,
						applicationId: n
					}, e = !0)
				}
				return e
			}
			class j extends(r = s.ZP.Store) {
				initialize() {
					var e;
					this.waitFor(_.ZP, b.Z, g.Z), v = null != (e = c.K.get(y)) ? e : v
				}
				getDetectedOffPlatformPremiumPerks() {
					return o().values(x)
				}
			}
			l = "DetectedOffPlatformPremiumPerksStore", (i = "displayName") in j ? Object.defineProperty(j, i, {
				value: l,
				enumerable: !0,
				configurable: !0,
				writable: !0
			}) : j[i] = l;
			let I = new j(u.Z, {
				LOGOUT: function() {
					x = {}, C = {}
				},
				SKU_FETCH_SUCCESS: O,
				ENTITLEMENT_FETCH_APPLICATION_SUCCESS: O,
				ENTITLEMENT_CREATE: O,
				APPLICATION_FETCH_SUCCESS: O,
				DETECTED_OFF_PLATFORM_PREMIUM_PERKS_DISMISS: function(e) {
					let {
						skuId: t
					} = e;
					if (delete x[t], v.includes(t)) return !1;
					v.push(t), c.K.set(y, v)
				},
				RUNNING_GAMES_CHANGE: function() {
					let e = !1;
					for (let {
							id: t,
							distributor: n
						}
						of _.ZP.getRunningGames())
						if (null != t && n !== E.GQo.DISCORD)
							for (let {
									skuId: n,
									applicationId: r
								}
								of E.Lg6) r !== t || v.includes(n) || null == C[n] && (g.Z.applicationIdsFetched.has(r) || g.Z.applicationIdsFetching.has(r) || null != g.Z.getForSku(n) || d.yD(r), C[n] = {
								skuId: n,
								applicationId: r
							}, e = !0);
					return e && O(), e
				}
			})
		},
		82142: function(e, t, n) {
			n.d(t, {
				Z: () => w
			}), n(388685);
			var r, i, l, a = n(913527),
				o = n.n(a),
				s = n(442837),
				c = n(846519),
				u = n(570140),
				d = n(533307),
				p = n(590783),
				m = n(669079),
				f = n(981631);
			let _ = {},
				h = new Map,
				g = [],
				b = [],
				E = [],
				y = new Set,
				x = {},
				C = {},
				v = new Set;

			function O(e) {
				let t = p.Z.createFromServer(e),
					n = t.code;
				if (h.has(n)) h.set(n, h.get(n).merge(t));
				else if (h.set(n, t), null != t.expiresAt) {
					let e = new c.V7;
					_[n] = e,
						function e(t) {
							let n = h.get(t);
							if (null == n || null == n.expiresAt) return;
							let r = n.expiresAt.valueOf() - o()().valueOf();
							if (r <= 0) h.delete(t), delete _[t], A.emitChange();
							else {
								let n = _[t];
								if (null == n) return;
								n.start(Math.min(0x7fffffff, r), () => e(t))
							}
						}(n)
				}
			}

			function j(e) {
				let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
				if (t && !v.has(e.channel_id)) return !1;
				let n = (0, m.Fp)(e) ? (0, m.Q_)((null == e ? void 0 : e.embeds) != null ? null == e ? void 0 : e.embeds[0].url : void 0) : (0, m.Q_)(e.content);
				return 0 !== n.length && (n.forEach(e => {
					g.includes(e) || E.includes(e) || (I({
						code: e
					}), u.Z.wait(() => d.Z.resolveGiftCode(e, !1, !0).catch(f.VqG)))
				}), !1)
			}

			function I(e) {
				let {
					code: t
				} = e;
				g.includes(t) || (g = [...g, t])
			}

			function S(e) {
				let {
					message: t
				} = e;
				return j(t, !0)
			}

			function T(e) {
				let {
					channelId: t,
					messages: n
				} = e;
				v.add(t), n.forEach(e => j(e, !0))
			}

			function N(e) {
				let {
					firstMessages: t
				} = e;
				if (null == t) return !1;
				null == t || t.forEach(e => j(e))
			}
			class P extends(r = s.ZP.Store) {
				get(e) {
					let t = h.get(e);
					return null == t || t.isExpired() ? null : t
				}
				getError(e) {
					return null != e ? C[e] : null
				}
				getForGifterSKUAndPlan(e, t, n) {
					return Array.from(h.values()).filter(r => r.userId === e && r.skuId === t && (null == n || r.subscriptionPlanId === n) && !r.isExpired())
				}
				getIsResolving(e) {
					return g.includes(e)
				}
				getIsResolved(e) {
					return E.includes(e)
				}
				getIsAccepting(e) {
					return b.includes(e)
				}
				getUserGiftCodesFetchingForSKUAndPlan(e, t) {
					return y.has((0, m.Bg)(e, t))
				}
				getUserGiftCodesLoadedAtForSKUAndPlan(e, t) {
					return x[(0, m.Bg)(e, t)]
				}
				getResolvingCodes() {
					return g
				}
				getResolvedCodes() {
					return E
				}
				getAcceptingCodes() {
					return b
				}
			}
			l = "GiftCodeStore", (i = "displayName") in P ? Object.defineProperty(P, i, {
				value: l,
				enumerable: !0,
				configurable: !0,
				writable: !0
			}) : P[i] = l;
			let A = new P(u.Z, {
					CONNECTION_OPEN: function() {
						return v.clear(), !1
					},
					CHANNEL_SELECT: function(e) {
						let {
							channelId: t
						} = e;
						return null != t && v.add(t), !1
					},
					GIFT_CODE_RESOLVE: I,
					GIFT_CODE_RESOLVE_SUCCESS: function(e) {
						let {
							giftCode: t
						} = e;
						return g = g.filter(e => e !== t.code), E.includes(t.code) || (E = [...E, t.code]), O(t)
					},
					GIFT_CODE_RESOLVE_FAILURE: function(e) {
						let {
							code: t
						} = e;
						g = g.filter(e => e !== t), E.includes(t) || (E = [...E, t])
					},
					GIFT_CODE_REDEEM: function(e) {
						let {
							code: t
						} = e;
						b.includes(t) || (b = [...b, t])
					},
					GIFT_CODE_REDEEM_SUCCESS: function(e) {
						let {
							code: t
						} = e;
						b = b.filter(e => e !== t);
						let n = h.get(t);
						null != n && h.set(t, n.merge({
							redeemed: !0,
							uses: n.uses + 1
						}))
					},
					GIFT_CODE_REDEEM_FAILURE: function(e) {
						let {
							code: t,
							error: n
						} = e;
						b = b.filter(e => e !== t);
						let r = h.get(t);
						if (C[t] = n, null != r) switch (n.code) {
							case f.evJ.UNKNOWN_GIFT_CODE:
								h.set(t, r.set("revoked", !0));
								break;
							case f.evJ.INVALID_GIFT_REDEMPTION_EXHAUSTED:
								h.set(t, r.set("uses", r.maxUses))
						}
					},
					GIFT_CODE_REVOKE_SUCCESS: function(e) {
						let {
							code: t
						} = e;
						h.delete(t);
						let n = _[t];
						null != n && (n.stop(), delete _[t]), E.includes(t) || (E = [...E, t])
					},
					GIFT_CODE_CREATE_SUCCESS: function(e) {
						let {
							giftCode: t
						} = e;
						O(t)
					},
					GIFT_CODES_FETCH: function(e) {
						let {
							skuId: t,
							subscriptionPlanId: n
						} = e;
						y.add((0, m.Bg)(t, n))
					},
					GIFT_CODES_FETCH_SUCCESS: function(e) {
						let {
							giftCodes: t,
							skuId: n,
							subscriptionPlanId: r
						} = e;
						t.forEach(O);
						let i = (0, m.Bg)(n, r);
						x[i] = Date.now(), y.delete(i)
					},
					GIFT_CODES_FETCH_FAILURE: function(e) {
						let {
							skuId: t,
							subscriptionPlanId: n
						} = e;
						y.delete((0, m.Bg)(t, n))
					},
					MESSAGE_CREATE: S,
					MESSAGE_UPDATE: S,
					LOCAL_MESSAGES_LOADED: T,
					LOAD_MESSAGES_SUCCESS: T,
					LOAD_MESSAGES_AROUND_SUCCESS: T,
					LOAD_RECENT_MENTIONS_SUCCESS: function(e) {
						let {
							messages: t
						} = e;
						t.forEach(e => j(e))
					},
					LOAD_PINNED_MESSAGES_SUCCESS: function(e) {
						let {
							pins: t
						} = e;
						t.forEach(e => {
							let {
								message: t
							} = e;
							return j(t)
						})
					},
					SEARCH_FINISH: function(e) {
						e.messages.forEach(e => {
							e.forEach(e => j(e))
						})
					},
					GIFT_CODE_UPDATE: function(e) {
						let {
							uses: t,
							code: n
						} = e, r = h.get(n);
						null != r && h.set(n, r.set("uses", Math.max(r.uses, t)))
					},
					LOAD_THREADS_SUCCESS: N,
					LOAD_ARCHIVED_THREADS_SUCCESS: N,
					LOAD_FORUM_POSTS: function(e) {
						let {
							threads: t
						} = e;
						Object.values(t).map(e => {
							let {
								first_message: t
							} = e;
							return null != t && j(t)
						})
					}
				}),
				w = A
		},
		571474: function(e, t, n) {
			n.d(t, {
				Z: () => _
			});
			var r, i, l, a = n(442837),
				o = n(570140),
				s = n(70956),
				c = n(709054),
				u = n(314897),
				d = n(699516);
			let p = 180 * s.Z.Millis.DAY,
				m = !1;
			class f extends(l = a.ZP.Store) {
				initialize() {
					this.waitFor(d.Z, u.default)
				}
				isEligible() {
					return m
				}
			}
			i = "PremiumPromoStore", (r = "displayName") in f ? Object.defineProperty(f, r, {
				value: i,
				enumerable: !0,
				configurable: !0,
				writable: !0
			}) : f[r] = i;
			let _ = new f(o.Z, {
				CONNECTION_OPEN: function() {
					return m !== (m = d.Z.getFriendIDs().length >= 10 && c.default.extractTimestamp(u.default.getId()) < Date.now() - p)
				}
			})
		},
		215427: function(e, t, n) {
			n.d(t, {
				Z: () => _
			});
			var r, i, l, a = n(442837),
				o = n(433517),
				s = n(570140),
				c = n(205355);
			let u = "MaintenanceStore",
				d = null,
				p = null,
				m = null;
			class f extends(l = a.ZP.Store) {
				initialize() {
					m = o.K.get(u)
				}
				getIncident() {
					return d
				}
				getScheduledMaintenance() {
					return null != p && p.id !== m ? p : null
				}
			}
			i = "MaintenanceStore", (r = "displayName") in f ? Object.defineProperty(f, r, {
				value: i,
				enumerable: !0,
				configurable: !0,
				writable: !0
			}) : f[r] = i;
			let _ = new f(s.Z, {
				CONNECTION_OPEN: function() {
					d = null, c.Z.checkScheduledMaintenances()
				},
				STATUS_PAGE_INCIDENT: function(e) {
					d = e.incident
				},
				STATUS_PAGE_SCHEDULED_MAINTENANCE: function(e) {
					p = e.maintenance
				},
				STATUS_PAGE_SCHEDULED_MAINTENANCE_ACK: function() {
					if (null == p) return !1;
					m = p.id, o.K.set(u, m)
				}
			})
		},
		558724: function(e, t, n) {
			n.d(t, {
				J: () => I,
				Z: () => k
			}), n(388685);
			var r, i, l = n(913527),
				a = n.n(l),
				o = n(149765),
				s = n(442837),
				c = n(433517),
				u = n(570140),
				d = n(491428),
				p = n(650774),
				m = n(430824),
				f = n(496675),
				_ = n(914010),
				h = n(594174),
				g = n(981631);

			function b(e, t, n) {
				return t in e ? Object.defineProperty(e, t, {
					value: n,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : e[t] = n, e
			}

			function E(e) {
				for (var t = 1; t < arguments.length; t++) {
					var n = null != arguments[t] ? arguments[t] : {},
						r = Object.keys(n);
					"function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
						return Object.getOwnPropertyDescriptor(n, e).enumerable
					}))), r.forEach(function(t) {
						b(e, t, n[t])
					})
				}
				return e
			}

			function y(e, t) {
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
			let x = {
					hiddenSurveys: {},
					surveyOverride: null,
					lastFetched: null,
					lastSeen: null
				},
				C = x,
				v = {},
				O = null,
				j = !1,
				I = 864e5;
			var S = ((i = S || {}).IS_OWNER = "is_owner", i.IS_ADMIN = "is_admin", i.IS_COMMUNITY = "is_community", i.GUILD_SIZE = "guild_size", i.IS_HUB = "is_hub", i.IS_VIEWING = "is_viewing", i.GUILD_PERMISSIONS = "guild_permissions", i.GUILD_SIZE_ALL = "guild_size_all", i);
			let T = new Set(Object.values(S));

			function N() {
				return null == C.lastFetched || Date.now() - C.lastFetched >= I
			}

			function P() {
				!j && (N() || null != C.surveyOverride) && (j = !0, (0, d.wk)(C.surveyOverride, !0))
			}

			function A(e) {
				var t;
				return t = 0, !0,
					function(e) {
						let {
							guild_requirements: t = [],
							guild_size: n = [null, null],
							guild_permissions: r = []
						} = e;
						if (0 === t.length) return !0;
						for (let e of t)
							if (!T.has(e)) return !1;
						let i = t.includes("guild_size_all"),
							l = !0;
						for (let a of m.Z.getGuildsArray()) {
							if (i || t.includes("guild_size")) {
								let e = p.Z.getMemberCount(a.id);
								if (null == e || null != n[0] && e < n[0] || null != n[1] && e > n[1]) {
									l = !1;
									continue
								}
							}
							if (t.includes("is_community") && !a.features.has(g.oNc.COMMUNITY) || t.includes("is_hub") && !a.features.has(g.oNc.HUB)) continue;
							if (t.includes("guild_permissions")) {
								if (0 === r.length) continue;
								let e = !1;
								for (let t of r) try {
									let n = o.vB(t);
									if (f.Z.can(n, a)) {
										e = !0;
										break
									}
								} catch (e) {}
								if (!e) continue
							}
							let s = h.default.getCurrentUser(),
								c = (null == s ? void 0 : s.id) === a.ownerId,
								u = f.Z.can(g.Plq.ADMINISTRATOR, a);
							if (t.includes("is_owner") && !c || t.includes("is_admin") && !u) continue;
							null == (v = null != v ? v : {})[e.key] && (v[e.key] = e);
							let d = _.Z.getGuildId(),
								m = null != d && d === a.id;
							if ((!t.includes("is_viewing") || m) && !i) return !0
						}
						return !!i && !!l
					}(e)
			}

			function w(e) {
				let {
					survey: t
				} = e;
				j = !1, C.lastFetched = Date.now(), null == C.hiddenSurveys && (C.hiddenSurveys = {});
				let n = null != t,
					r = n && null == C.hiddenSurveys[t.key],
					i = n && A(t);
				var l = 0;
				let o = c.K.get(g.z7k);
				null == o || a()().diff(o, "day"), O = r && i && 1 ? t : null
			}

			function Z() {
				if (null != O && (A(O) || (O = null, 0))) return !1;
				let e = Object.values(v = null != v ? v : {})[0];
				null != e && A(e) ? w({
					type: "SURVEY_FETCHED",
					survey: e
				}) : null != O && (O = null)
			}
			class R extends(r = s.ZP.PersistedStore) {
				initialize(e) {
					C = null != e ? e : x, this.syncWith([_.Z], Z)
				}
				getState() {
					return C
				}
				getCurrentSurvey() {
					return N() ? null : O
				}
				getSurveyOverride() {
					return C.surveyOverride
				}
				getLastSeenTimestamp() {
					return C.lastSeen
				}
			}
			b(R, "displayName", "SurveyStore"), b(R, "persistKey", "SurveyStore"), b(R, "migrations", [e => {
				let t = E({}, e);
				return delete t.validSurveys, delete t.currentSurvey, delete t.iosIsPushNotificationClicked, delete t.iosIsInviteShown, delete t.iosFirstRunDate, t
			}, e => {
				var t;
				return y(E({}, e), {
					lastSeen: null != (t = e.lastSeen) ? t : null
				})
			}, e => {
				var t;
				return y(E({}, e), {
					hiddenSurveys: null != (t = e.hiddenSurveys) ? t : {}
				})
			}]);
			let k = new R(u.Z, {
				CONNECTION_OPEN: P,
				CONNECTION_RESUMED: P,
				SURVEY_FETCHED: w,
				SURVEY_HIDE: function(e) {
					let {
						key: t
					} = e;
					C.hiddenSurveys[t] = !0, O = null, v = null != v ? v : {}, delete v[t]
				},
				SURVEY_OVERRIDE: function(e) {
					let {
						id: t
					} = e;
					C.surveyOverride = t, null != t && delete C.hiddenSurveys[t], (0, d.wk)(C.surveyOverride, !0)
				},
				PUSH_NOTIFICATION_CLICK: function() {},
				DISPLAYED_INVITE_SHOW: function() {},
				LOGOUT: function() {
					C.hiddenSurveys = {}
				},
				SURVEY_SEEN: function() {
					C.lastSeen = Date.now()
				}
			})
		},
		23434: function(e, t, n) {
			n.d(t, {
				Z: () => d
			});
			var r, i, l, a = n(442837),
				o = n(570140);
			let s = null;
			class c extends(l = a.ZP.Store) {
				hasAction() {
					return null != s
				}
				getAction() {
					return s
				}
			}

			function u(e) {
				s = e.requiredAction
			}
			i = "UserRequiredActionStore", (r = "displayName") in c ? Object.defineProperty(c, r, {
				value: i,
				enumerable: !0,
				configurable: !0,
				writable: !0
			}) : c[r] = i;
			let d = new c(o.Z, {
				CONNECTION_OPEN: u,
				USER_REQUIRED_ACTION_UPDATE: u
			})
		},
		558314: function(e, t, n) {
			n.d(t, {
				Z: () => u
			});
			var r, i, l, a = n(442837),
				o = n(570140);
			let s = {
				matureAgree: !1
			};
			class c extends(l = a.ZP.Store) {
				get didMatureAgree() {
					return s.matureAgree
				}
			}
			i = "ApplicationStoreSettingsStore", (r = "displayName") in c ? Object.defineProperty(c, r, {
				value: i,
				enumerable: !0,
				configurable: !0,
				writable: !0
			}) : c[r] = i;
			let u = new c(o.Z, {
				APPLICATION_STORE_MATURE_AGREE: function() {
					s.matureAgree = !0
				}
			})
		},
		922156: function(e, t, n) {
			n.d(t, {
				Z: () => m
			});
			var r, i, l, a = n(442837),
				o = n(570140),
				s = n(186901);
			let c = null,
				u = [s.ff.REDISTRIBUTABLE_INSTALL_FAILED, s.ff.POST_INSTALL_FAILED, s.ff.POST_INSTALL_CANCELLED],
				d = [s.ff.APPLICATION_NOT_FOUND, s.ff.APPLICATION_LOAD_FAILED, s.ff.INTERRUPTED, s.ff.DESERIALIZATION_FAILED];
			class p extends(l = a.ZP.Store) {
				getLastError() {
					return c
				}
			}
			i = "DispatchApplicationErrorStore", (r = "displayName") in p ? Object.defineProperty(p, r, {
				value: i,
				enumerable: !0,
				configurable: !0,
				writable: !0
			}) : p[r] = i;
			let m = new p(o.Z, {
				DISPATCH_APPLICATION_LAUNCH_SETUP_START: function() {
					null != c && null != c.code && u.includes(c.code) && (c = null)
				},
				DISPATCH_APPLICATION_ERROR: function(e) {
					let {
						error: t
					} = e;
					c = null != t.code && d.includes(t.code) ? null : t
				}
			})
		},
		199480: function(e, t, n) {
			n.d(t, {
				Z: () => l
			});
			var r = n(255367);
			n(73800);
			var i = n(325767);

			function l(e) {
				var t, n, {
						color: l = "currentColor",
						foreground: a
					} = e,
					o = function(e, t) {
						if (null == e) return {};
						var n, r, i = function(e, t) {
							if (null == e) return {};
							var n, r, i = {},
								l = Object.keys(e);
							for (r = 0; r < l.length; r++) n = l[r], t.indexOf(n) >= 0 || (i[n] = e[n]);
							return i
						}(e, t);
						if (Object.getOwnPropertySymbols) {
							var l = Object.getOwnPropertySymbols(e);
							for (r = 0; r < l.length; r++) n = l[r], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n])
						}
						return i
					}(e, ["color", "foreground"]);
				return (0, r.jsx)("svg", (t = function(e) {
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
				}({}, (0, i.Z)(o)), n = n = {
					viewBox: "0 0 136 56",
					fill: "none",
					xmlns: "http://www.w3.org/2000/svg",
					children: (0, r.jsxs)("g", {
						className: a,
						fill: l,
						children: [(0, r.jsx)("path", {
							d: "M124.299 22.9512H107.187C106.75 22.9512 106.368 23.2787 106.313 23.7154L105.495 29.3918C105.413 29.9103 105.822 30.4015 106.368 30.4015H109.506C109.834 30.4015 110.025 30.729 109.916 31.0019C109.534 31.9025 109.234 32.9122 109.097 33.9766L107.514 44.9746C106.477 52.343 112.591 56 119.277 56C126.264 56 133.142 52.3157 134.179 44.9746L135.762 33.9766C136.744 26.7719 130.822 23.115 124.299 22.9512ZM127.574 34.0038L125.991 44.7563C125.636 47.2943 122.771 48.4678 120.123 48.4678C117.667 48.4678 115.265 47.2943 115.593 44.9746L117.176 33.9766C117.53 31.575 120.396 30.3469 123.043 30.3469C125.691 30.3469 127.956 31.575 127.574 34.0038Z",
							fill: l
						}), (0, r.jsx)("path", {
							d: "M29.3491 22.9512H22.9627C22.526 22.9512 22.1439 23.2787 22.0894 23.7154L20.1243 37.7154V37.7427L20.2062 43.1462C20.2062 43.2553 20.1243 43.3645 20.0151 43.3918L18.1866 36.8694V36.8421L12.4825 23.497C12.346 23.1696 12.0185 22.9512 11.6637 22.9512H5.19545C4.75878 22.9512 4.37668 23.2787 4.3221 23.7154L0.00992229 54.5536C-0.0719545 55.0994 0.364722 55.5633 0.883275 55.5633H7.32425C7.76092 55.5633 8.14302 55.2358 8.1976 54.7992L9.88972 42.5458V42.5185L9.80784 36.2417L9.99889 36.1871L11.9366 42.7095V42.7368L17.2586 55.0448C17.3951 55.3723 17.7226 55.5906 18.0774 55.5906H25.0642C25.5009 55.5906 25.883 55.2631 25.9376 54.8265L30.2497 23.9883C30.3316 23.4425 29.8949 22.9512 29.3491 22.9512Z",
							fill: l
						}), (0, r.jsx)("path", {
							d: "M43.322 22.9512H36.8814C36.4448 22.9512 36.0627 23.2787 36.0081 23.7154L31.6962 54.5263C31.6144 55.0721 32.051 55.536 32.5695 55.536H39.0101C39.4467 55.536 39.8288 55.2085 39.8834 54.7719L44.1953 23.961C44.2771 23.4424 43.8678 22.9512 43.322 22.9512Z",
							fill: l
						}), (0, r.jsx)("path", {
							d: "M73.5353 22.9512H49.4363C48.9996 22.9512 48.6175 23.2787 48.5629 23.7154L47.7168 29.4736C47.635 30.0194 48.0443 30.4834 48.5902 30.4834H55.3314C55.8772 30.4834 56.2866 30.9473 56.2047 31.4931L53.0388 54.5263C52.957 55.0721 53.3936 55.536 53.9122 55.536H60.435C60.8717 55.536 61.2538 55.2085 61.3084 54.7719L64.5562 31.2475C64.6107 30.8109 64.9928 30.4834 65.4295 30.4834H72.662C73.0986 30.4834 73.4807 30.1559 73.5353 29.7192L74.3814 23.961C74.5178 23.4424 74.0812 22.9512 73.5353 22.9512Z",
							fill: l
						}), (0, r.jsx)("path", {
							d: "M91.9575 22.9512H79.7033C79.2666 22.9512 78.8845 23.2787 78.8299 23.7154L74.5177 54.5263C74.4359 55.0721 74.8725 55.536 75.3911 55.536H81.9139C82.3506 55.536 82.7327 55.2085 82.7873 54.7719L84.0427 45.575C84.07 45.3567 84.2611 45.1929 84.4794 45.1929H85.3255C85.4892 45.1929 85.6257 45.2748 85.7076 45.4113L91.9302 55.1539C92.0939 55.3996 92.3669 55.5633 92.6944 55.5633H100.773C101.482 55.5633 101.919 54.7446 101.51 54.1715L94.9596 44.8109C94.7959 44.5925 94.8778 44.2651 95.1234 44.1559C99.2991 42.1091 101.728 40.035 102.52 34.1949C103.448 26.5536 98.6714 22.9512 91.9575 22.9512ZM94.1954 34.3313C93.9771 36.2144 92.5033 38.0974 89.9651 38.0974H86.1715C85.6257 38.0974 85.2163 37.6062 85.2982 37.0877L86.1169 31.4113C86.1715 30.9746 86.5536 30.6471 86.9903 30.6471H91.0568C93.4586 30.6471 94.4411 32.3664 94.1954 34.3313Z",
							fill: l
						}), (0, r.jsx)("path", {
							d: "M29.1035 3.43858H33.7428C34.8617 3.43858 35.8169 3.60233 36.581 3.9571C37.2906 4.2573 37.891 4.77581 38.3276 5.43079C38.7097 6.08576 38.928 6.8226 38.9007 7.55944C38.9007 8.32357 38.7097 9.06041 38.3003 9.71539C37.8637 10.3976 37.2087 10.9162 36.4719 11.2437C35.6532 11.6257 34.6161 11.8167 33.4153 11.8167H29.1035V3.43858V3.43858ZM33.3881 9.66081C34.1522 9.66081 34.7253 9.46977 35.1346 9.08771C35.544 8.67835 35.7623 8.13254 35.735 7.53215C35.7623 6.98634 35.5713 6.46782 35.1892 6.08576C34.8345 5.73098 34.2886 5.53995 33.5518 5.53995H32.1054V9.63351H33.3881V9.66081Z",
							fill: l
						}), (0, r.jsx)("path", {
							d: "M45.8881 11.7895C45.2877 11.6257 44.6873 11.3801 44.1415 11.0526V9.06043C44.6055 9.4152 45.1513 9.66082 45.6971 9.79727C46.3248 9.9883 46.9525 10.0702 47.6074 10.0975C47.8258 10.0975 48.0441 10.0702 48.2624 9.9883C48.3989 9.90643 48.4807 9.82456 48.4807 9.7154C48.4807 9.60624 48.4534 9.49707 48.3716 9.4152C48.2351 9.30604 48.0714 9.25146 47.9076 9.22417L46.4885 8.89668C45.6698 8.70565 45.0967 8.43275 44.7419 8.10526C44.3872 7.75049 44.1961 7.25926 44.2234 6.76803C44.2234 6.33138 44.3872 5.89473 44.6873 5.56725C45.0421 5.18518 45.4788 4.91228 45.97 4.77583C46.5977 4.58479 47.2527 4.47563 47.9349 4.50292C48.5626 4.50292 49.163 4.5575 49.7634 4.72124C50.2546 4.83041 50.7185 5.02144 51.1552 5.26705V7.1501C50.7458 6.90448 50.3092 6.74074 49.8725 6.63158C49.3813 6.49512 48.8628 6.44054 48.3716 6.44054C47.6347 6.44054 47.2527 6.577 47.2527 6.82261C47.2527 6.93177 47.3072 7.04093 47.4164 7.09551C47.6074 7.17739 47.8258 7.23197 48.0441 7.28655L49.2449 7.50487C50.009 7.64132 50.6094 7.88694 50.9914 8.21442C51.3735 8.54191 51.5645 9.06043 51.5645 9.7154C51.5645 10.4249 51.2098 11.0799 50.6094 11.4347C49.9817 11.8441 49.0811 12.0624 47.9076 12.0624C47.2254 12.0351 46.5431 11.9532 45.8881 11.7895Z",
							fill: l
						}), (0, r.jsx)("path", {
							d: "M54.3486 11.5438C53.7209 11.2436 53.1751 10.7797 52.7931 10.1793C52.4383 9.60622 52.2745 8.92396 52.2745 8.2417C52.2745 7.55944 52.4383 6.90447 52.8203 6.33137C53.2024 5.73098 53.7482 5.29433 54.4032 4.99413C55.1946 4.66665 56.0406 4.47562 56.8866 4.50291C58.0874 4.50291 59.0699 4.74852 59.8613 5.26704V7.45027C59.5611 7.25924 59.2336 7.0955 58.8788 6.98634C58.4968 6.87718 58.0874 6.7953 57.678 6.7953C56.9412 6.7953 56.3681 6.93176 55.9315 7.20466C55.3311 7.53215 55.14 8.26899 55.4675 8.86938C55.5767 9.06041 55.7404 9.22415 55.9315 9.33332C56.3408 9.60622 56.9139 9.74267 57.7053 9.74267C58.1147 9.74267 58.4968 9.68809 58.8788 9.57893C59.2336 9.46977 59.5611 9.33332 59.8613 9.14228V11.2436C58.9334 11.7895 57.8964 12.0624 56.832 12.0351C55.986 12.0624 55.1127 11.8986 54.3486 11.5438Z",
							fill: l
						}), (0, r.jsx)("path", {
							d: "M62.8365 11.5439C62.1816 11.2437 61.6358 10.7797 61.2537 10.1793C60.8989 9.60624 60.7079 8.92398 60.7079 8.24171C60.7079 7.55945 60.8716 6.90448 61.2537 6.33138C61.6358 5.75828 62.1816 5.29435 62.8365 5.02144C64.3921 4.39376 66.166 4.39376 67.7215 5.02144C68.3492 5.29435 68.895 5.75828 69.2771 6.33138C69.6319 6.90448 69.8229 7.58674 69.8229 8.24171C69.8229 8.92398 69.6319 9.60624 69.2771 10.1793C68.895 10.7797 68.3492 11.2437 67.7215 11.5439C66.1387 12.1988 64.3921 12.1988 62.8365 11.5439ZM66.4389 9.4152C66.7391 9.11501 66.9028 8.67836 66.8755 8.269C66.9028 7.83236 66.7391 7.423 66.4389 7.12281C66.1114 6.82261 65.6747 6.68616 65.2381 6.68616C64.8015 6.65887 64.3648 6.82261 64.0373 7.12281C63.7371 7.423 63.5734 7.83236 63.6007 8.269C63.5734 8.70565 63.7371 9.11501 64.0373 9.4152C64.3648 9.7154 64.8015 9.87914 65.2381 9.85185C65.702 9.87914 66.1387 9.7154 66.4389 9.4152Z",
							fill: l
						}), (0, r.jsx)("path", {
							d: "M76.9736 4.93955V7.53214C76.6188 7.31381 76.2095 7.20465 75.8001 7.23194C75.1724 7.23194 74.6812 7.42298 74.3264 7.80504C73.999 8.18711 73.8079 8.7875 73.8079 9.60621V11.7894H70.8878V4.80309H73.7533V7.01362C73.9171 6.19491 74.1627 5.59452 74.5175 5.21245C74.8723 4.83038 75.3635 4.61206 75.882 4.63935C76.2641 4.63935 76.6461 4.74851 76.9736 4.93955Z",
							fill: l
						}), (0, r.jsx)("path", {
							d: "M86.6895 3.19298V11.7895H83.7694V10.2339C83.5511 10.7797 83.1418 11.2709 82.6505 11.5711C82.0774 11.8986 81.4497 12.0624 80.7948 12.0351C80.1944 12.0624 79.594 11.8713 79.0755 11.5439C78.5842 11.2164 78.1749 10.7524 77.9293 10.2066C77.6564 9.60623 77.5199 8.95126 77.5199 8.29629C77.4926 7.61403 77.6564 6.93177 77.9293 6.33138C78.2022 5.75828 78.6388 5.29434 79.1573 4.96686C79.7032 4.63937 80.3308 4.47563 80.9585 4.47563C82.3503 4.47563 83.2782 5.07602 83.7694 6.2768V3.19298H86.6895ZM83.3328 9.36062C83.633 9.06042 83.7967 8.65107 83.7694 8.24171C83.7694 7.83235 83.6057 7.423 83.3328 7.15009C82.6505 6.57699 81.6681 6.57699 80.9585 7.15009C80.6583 7.45029 80.4946 7.83235 80.5219 8.24171C80.4946 8.65107 80.6583 9.06042 80.9585 9.36062C81.286 9.66081 81.6954 9.79727 82.132 9.79727C82.5959 9.82456 83.0053 9.66081 83.3328 9.36062Z",
							fill: l
						}), (0, r.jsx)("path", {
							d: "M18.3503 1.36452C16.9311 0.736842 15.4301 0.272904 13.8744 0C13.6561 0.382066 13.465 0.764132 13.3013 1.17349C11.6637 0.927875 9.9716 0.927875 8.33407 1.17349C8.17031 0.764132 7.97927 0.382066 7.76093 0C6.23256 0.272904 4.73149 0.736842 3.285 1.39181C0.473899 5.56725 -0.290284 9.63353 0.0918077 13.6725C1.75664 14.9006 3.61251 15.8285 5.57755 16.4288C6.01423 15.8285 6.42361 15.2008 6.75112 14.5458C6.1234 14.3002 5.49567 14 4.89524 13.6725C5.059 13.5633 5.19546 13.4542 5.35921 13.345C8.82533 14.9825 12.8373 14.9825 16.3307 13.345C16.4672 13.4542 16.6309 13.5906 16.7947 13.6725C16.1942 14.0273 15.5938 14.3275 14.9388 14.5458C15.2663 15.2008 15.6757 15.8285 16.1124 16.4288C18.0774 15.8285 19.9333 14.9006 21.5981 13.6725C22.0348 9.00585 20.8066 4.96686 18.3503 1.36452ZM7.21509 11.1891C6.15069 11.1891 5.25004 10.2066 5.25004 9.03314C5.25004 7.85965 6.0961 6.8499 7.18779 6.8499C8.27948 6.8499 9.15284 7.83236 9.15284 9.03314C9.15284 10.2339 8.30678 11.1891 7.21509 11.1891ZM14.4202 11.1891C13.3558 11.1891 12.4825 10.2066 12.4825 9.03314C12.4825 7.85965 13.3285 6.8499 14.4202 6.8499C15.5119 6.8499 16.3853 7.83236 16.358 9.03314C16.358 10.2339 15.5119 11.1891 14.4202 11.1891Z",
							fill: l
						}), (0, r.jsx)("path", {
							d: "M41.3849 5.56724C42.1837 5.56724 42.8313 4.98076 42.8313 4.2573C42.8313 3.53384 42.1837 2.94736 41.3849 2.94736C40.5861 2.94736 39.9385 3.53384 39.9385 4.2573C39.9385 4.98076 40.5861 5.56724 41.3849 5.56724Z",
							fill: l
						}), (0, r.jsx)("path", {
							d: "M39.9385 6.46785C40.8664 6.84992 41.9307 6.84992 42.8586 6.46785V11.8441H39.9385V6.46785Z",
							fill: l
						})]
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
		},
		910111: function(e, t, n) {
			n.d(t, {
				Z: () => l
			});
			var r = n(255367);
			n(73800);
			var i = n(325767);

			function l(e) {
				var t, n, {
						width: l = 24,
						height: a = 24,
						color: o = "currentColor",
						foreground: s
					} = e,
					c = function(e, t) {
						if (null == e) return {};
						var n, r, i = function(e, t) {
							if (null == e) return {};
							var n, r, i = {},
								l = Object.keys(e);
							for (r = 0; r < l.length; r++) n = l[r], t.indexOf(n) >= 0 || (i[n] = e[n]);
							return i
						}(e, t);
						if (Object.getOwnPropertySymbols) {
							var l = Object.getOwnPropertySymbols(e);
							for (r = 0; r < l.length; r++) n = l[r], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n])
						}
						return i
					}(e, ["width", "height", "color", "foreground"]);
				return (0, r.jsx)("svg", (t = function(e) {
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
				}({}, (0, i.Z)(c)), n = n = {
					width: l,
					height: a,
					viewBox: "0 0 24 24",
					children: (0, r.jsxs)("g", {
						fill: "none",
						fillRule: "evenodd",
						children: [(0, r.jsx)("path", {
							className: s,
							fill: o,
							d: "M14.62 8.35c-.42.28-1.75 1.04-1.95 1.19-.39.31-.75.29-1.14-.01-.2-.16-1.53-.92-1.95-1.19-.48-.31-.45-.7.08-.92 1.64-.69 3.28-.64 4.91.03.49.21.51.6.05.9m7.22 7.28c-.93-2.09-2.2-3.99-3.84-5.66a4.31 4.31 0 0 1-1.06-1.88c-.1-.33-.17-.67-.24-1.01-.2-.88-.29-1.78-.7-2.61-.73-1.58-2-2.4-3.84-2.47-1.81.05-3.16.81-3.95 2.4-.21.43-.36.88-.46 1.34-.17.76-.32 1.55-.5 2.32-.15.65-.45 1.21-.96 1.71-1.61 1.57-2.9 3.37-3.88 5.35-.14.29-.28.58-.37.88-.19.66.29 1.12.99.96.44-.09.88-.18 1.3-.31.41-.15.57-.05.67.35.65 2.15 2.07 3.66 4.24 4.5 4.12 1.56 8.93-.66 9.97-4.58.07-.27.17-.37.47-.27.46.14.93.24 1.4.35.49.09.85-.16.92-.64.03-.26-.06-.49-.16-.73"
						}), (0, r.jsx)("rect", {
							width: "24",
							height: "24"
						})]
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
		},
		732559: function(e, t, n) {
			n.d(t, {
				Z: () => l
			});
			var r = n(255367);
			n(73800);
			var i = n(325767);

			function l(e) {
				var t, n, {
						width: l = 24,
						height: a = 24,
						color: o = "currentColor",
						foreground: s
					} = e,
					c = function(e, t) {
						if (null == e) return {};
						var n, r, i = function(e, t) {
							if (null == e) return {};
							var n, r, i = {},
								l = Object.keys(e);
							for (r = 0; r < l.length; r++) n = l[r], t.indexOf(n) >= 0 || (i[n] = e[n]);
							return i
						}(e, t);
						if (Object.getOwnPropertySymbols) {
							var l = Object.getOwnPropertySymbols(e);
							for (r = 0; r < l.length; r++) n = l[r], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n])
						}
						return i
					}(e, ["width", "height", "color", "foreground"]);
				return (0, r.jsx)("svg", (t = function(e) {
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
				}({}, (0, i.Z)(c)), n = n = {
					width: l,
					height: a,
					viewBox: "0 0 24 24",
					children: (0, r.jsxs)("g", {
						fill: "none",
						fillRule: "evenodd",
						children: [(0, r.jsx)("path", {
							className: s,
							fill: o,
							d: "M18.64 19.499c-.82 1.24-1.687 2.45-3.008 2.47-1.322.03-1.746-.79-3.245-.79-1.508 0-1.972.77-3.224.82-1.292.05-2.268-1.32-3.097-2.53-1.686-2.47-2.978-7.02-1.242-10.08.858-1.52 2.396-2.48 4.063-2.51 1.262-.02 2.465.87 3.244.87.77 0 2.229-1.07 3.757-.91.64.03 2.436.26 3.59 1.98-.09.06-2.14 1.28-2.12 3.81.029 3.02 2.612 4.03 2.642 4.04-.03.07-.414 1.44-1.36 2.83zm-5.631-16c.72-.829 1.913-1.459 2.899-1.499.128 1.17-.336 2.35-1.026 3.19-.68.85-1.804 1.51-2.909 1.42-.148-1.15.404-2.35 1.036-3.11z"
						}), (0, r.jsx)("rect", {
							width: "24",
							height: "24"
						})]
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
		},
		723851: function(e, t, n) {
			n.d(t, {
				Z: () => l
			});
			var r = n(255367);
			n(73800);
			var i = n(325767);

			function l(e) {
				var t, n, {
						width: l = 24,
						height: a = 24,
						color: o = "currentColor",
						foreground: s
					} = e,
					c = function(e, t) {
						if (null == e) return {};
						var n, r, i = function(e, t) {
							if (null == e) return {};
							var n, r, i = {},
								l = Object.keys(e);
							for (r = 0; r < l.length; r++) n = l[r], t.indexOf(n) >= 0 || (i[n] = e[n]);
							return i
						}(e, t);
						if (Object.getOwnPropertySymbols) {
							var l = Object.getOwnPropertySymbols(e);
							for (r = 0; r < l.length; r++) n = l[r], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n])
						}
						return i
					}(e, ["width", "height", "color", "foreground"]);
				return (0, r.jsx)("svg", (t = function(e) {
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
				}({}, (0, i.Z)(c)), n = n = {
					width: l,
					height: a,
					viewBox: "0 0 24 24",
					children: (0, r.jsxs)("g", {
						fill: "none",
						fillRule: "evenodd",
						children: [(0, r.jsx)("path", {
							className: s,
							fill: o,
							d: "M4 11.526V6.553l5.684-1.25v6.138L4 11.526zM20.105 3v8.29l-9.473.142V5.094L20.105 3zM4 12.474l5.684.085v6.452L4 17.92v-5.447zm16.105.237V21l-9.473-1.81v-6.622l9.473.143z"
						}), (0, r.jsx)("rect", {
							width: "24",
							height: "24"
						})]
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
		},
		186523: function(e, t, n) {
			n.d(t, {
				Z: () => l
			});
			var r = n(255367);
			n(73800);
			var i = n(325767);

			function l(e) {
				var t, n, {
						width: l = 24,
						height: a = 24,
						color: o = "currentColor",
						foreground: s
					} = e,
					c = function(e, t) {
						if (null == e) return {};
						var n, r, i = function(e, t) {
							if (null == e) return {};
							var n, r, i = {},
								l = Object.keys(e);
							for (r = 0; r < l.length; r++) n = l[r], t.indexOf(n) >= 0 || (i[n] = e[n]);
							return i
						}(e, t);
						if (Object.getOwnPropertySymbols) {
							var l = Object.getOwnPropertySymbols(e);
							for (r = 0; r < l.length; r++) n = l[r], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n])
						}
						return i
					}(e, ["width", "height", "color", "foreground"]);
				return (0, r.jsx)("svg", (t = function(e) {
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
				}({}, (0, i.Z)(c)), n = n = {
					width: l,
					height: a,
					viewBox: "0 0 24 24",
					children: (0, r.jsx)("path", {
						fillRule: "evenodd",
						clipRule: "evenodd",
						d: "M12 20C16.4183 20 20 16.4183 20 12C20 7.58172 16.4183 4 12 4C7.58172 4 4 7.58172 4 12C4 16.4183 7.58172 20 12 20ZM12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z",
						className: s,
						fill: o
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
		},
		553826: function(e, t, n) {
			n.d(t, {
				Z: () => l
			});
			var r = n(255367);
			n(73800);
			var i = n(325767);

			function l(e) {
				var t, n, {
						width: l = 24,
						height: a = 24,
						color: o = "currentColor",
						background: s,
						foreground: c
					} = e,
					u = function(e, t) {
						if (null == e) return {};
						var n, r, i = function(e, t) {
							if (null == e) return {};
							var n, r, i = {},
								l = Object.keys(e);
							for (r = 0; r < l.length; r++) n = l[r], t.indexOf(n) >= 0 || (i[n] = e[n]);
							return i
						}(e, t);
						if (Object.getOwnPropertySymbols) {
							var l = Object.getOwnPropertySymbols(e);
							for (r = 0; r < l.length; r++) n = l[r], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n])
						}
						return i
					}(e, ["width", "height", "color", "background", "foreground"]);
				return (0, r.jsxs)("svg", (t = function(e) {
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
				}({}, (0, i.Z)(u)), n = n = {
					width: l,
					height: a,
					viewBox: "0 0 24 24",
					children: [(0, r.jsx)("path", {
						fillRule: "evenodd",
						clipRule: "evenodd",
						d: "M12 20C16.4183 20 20 16.4183 20 12C20 7.58172 16.4183 4 12 4C7.58172 4 4 7.58172 4 12C4 16.4183 7.58172 20 12 20ZM12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z",
						className: s,
						fill: o
					}), (0, r.jsx)("circle", {
						cx: "12",
						cy: "12",
						r: "5",
						className: c,
						fill: o
					})]
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
		},
		846587: function(e, t, n) {
			n.d(t, {
				Z: () => l
			});
			var r = n(255367);
			n(73800);
			var i = n(325767);

			function l(e) {
				var t, n, {
						width: l = 40,
						height: a = 40,
						color: o = "currentColor"
					} = e,
					s = function(e, t) {
						if (null == e) return {};
						var n, r, i = function(e, t) {
							if (null == e) return {};
							var n, r, i = {},
								l = Object.keys(e);
							for (r = 0; r < l.length; r++) n = l[r], t.indexOf(n) >= 0 || (i[n] = e[n]);
							return i
						}(e, t);
						if (Object.getOwnPropertySymbols) {
							var l = Object.getOwnPropertySymbols(e);
							for (r = 0; r < l.length; r++) n = l[r], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n])
						}
						return i
					}(e, ["width", "height", "color"]);
				return (0, r.jsxs)("svg", (t = function(e) {
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
				}({}, (0, i.Z)(s)), n = n = {
					width: l,
					height: a,
					style: {
						minWidth: l,
						minHeight: a
					},
					viewBox: "0 0 40 40",
					children: [(0, r.jsx)("path", {
						fillRule: "evenodd",
						clipRule: "evenodd",
						d: "M20 4C15.5817 4 12 7.58172 12 12V20C12 24.4183 15.5817 28 20 28H28C32.4183 28 36 24.4183 36 20V12C36 7.58172 32.4183 4 28 4H20ZM19.5962 21.6084C19.5599 21.8126 19.717 22 19.9244 22H20.5806C20.7422 22 20.8806 21.8841 20.9088 21.7249L21.3333 19.3333H25.3333L24.9295 21.6084C24.8932 21.8126 25.0503 22 25.2577 22H25.9139C26.0756 22 26.2139 21.8841 26.2421 21.7249L26.6667 19.3333H29.0533C29.2152 19.3333 29.3537 19.217 29.3816 19.0575L29.4983 18.3908C29.534 18.1868 29.377 18 29.1699 18H26.9L27.6067 14H29.9933C30.1552 14 30.2937 13.8836 30.3216 13.7241L30.4383 13.0575C30.474 12.8535 30.317 12.6667 30.1099 12.6667H27.84L28.2438 10.3916C28.2801 10.1874 28.123 10 27.9156 10H27.2594C27.0977 10 26.9594 10.1159 26.9312 10.2751L26.5067 12.6667H22.5067L22.9105 10.3916C22.9467 10.1874 22.7897 10 22.5823 10H21.926C21.7644 10 21.6261 10.1159 21.5978 10.2751L21.1733 12.6667H18.7867C18.6248 12.6667 18.4863 12.783 18.4584 12.9425L18.3417 13.6092C18.306 13.8132 18.463 14 18.6701 14H20.94L20.2333 18H17.8467C17.6848 18 17.5463 18.1164 17.5184 18.2759L17.4017 18.9425C17.366 19.1465 17.523 19.3333 17.7301 19.3333H20L19.5962 21.6084ZM21.5669 18L22.2736 14H26.2736L25.5669 18H21.5669Z",
						fill: o
					}), (0, r.jsx)("path", {
						fillRule: "evenodd",
						clipRule: "evenodd",
						d: "M9.33335 14.0208C6.11738 16.1734 4 19.8395 4 24C4 30.6274 9.37258 36 16 36C20.1604 36 23.8262 33.8829 25.979 30.6672H24.3268C22.372 33.1055 19.3683 34.6667 16 34.6667C10.109 34.6667 5.33333 29.8911 5.33333 24C5.33333 20.6315 6.89477 17.6277 9.33335 15.6729V14.0208Z",
						fill: o
					})]
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
		},
		463618: function(e, t, n) {
			n.d(t, {
				Z: () => l
			});
			var r = n(255367);
			n(73800);
			var i = n(325767);

			function l(e) {
				var t, n, {
						width: l = 24,
						height: a = 24,
						color: o = "currentColor"
					} = e,
					s = function(e, t) {
						if (null == e) return {};
						var n, r, i = function(e, t) {
							if (null == e) return {};
							var n, r, i = {},
								l = Object.keys(e);
							for (r = 0; r < l.length; r++) n = l[r], t.indexOf(n) >= 0 || (i[n] = e[n]);
							return i
						}(e, t);
						if (Object.getOwnPropertySymbols) {
							var l = Object.getOwnPropertySymbols(e);
							for (r = 0; r < l.length; r++) n = l[r], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n])
						}
						return i
					}(e, ["width", "height", "color"]);
				return (0, r.jsxs)("svg", (t = function(e) {
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
				}({}, (0, i.Z)(s)), n = n = {
					width: l,
					height: a,
					viewBox: "0 0 24 24",
					children: [(0, r.jsx)("path", {
						fill: o,
						d: "M12 14C7.289 14 4 16.467 4 20V22H20V20C20 16.467 16.711 14 12 14ZM11 19C10.447 19 10 18.553 10 18C10 17.447 10.447 17 11 17C11.553 17 12 17.447 12 18C12 18.553 11.553 19 11 19ZM14 19C13.447 19 13 18.553 13 18C13 17.447 13.447 17 14 17C14.553 17 15 17.447 15 18C15 18.553 14.553 19 14 19Z"
					}), (0, r.jsx)("path", {
						fill: o,
						d: "M18 6H17.91C17.432 3.167 14.967 1 12 1C9.033 1 6.568 3.167 6.09 6H6C4.896 6 4 6.896 4 8V9C4 10.104 4.896 11 6 11C6 12.102 6.897 13 8 13H16C17.104 13 18 12.102 18 11C19.104 11 20 10.104 20 9V8C20 6.896 19.104 6 18 6ZM16 10H8V6H16V10Z"
					})]
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
		},
		782605: function(e, t, n) {
			n.d(t, {
				O: () => c,
				l: () => s
			});
			var r = n(594174),
				i = n(63063),
				l = n(74538),
				a = n(981631),
				o = n(388032);

			function s(e) {
				switch (e) {
					case a.evJ.TOO_MANY_USER_GUILDS:
						let t = r.default.getCurrentUser(),
							n = l.ZP.canUseIncreasedGuildCap(t) || (null == t ? void 0 : t.isStaff()) ? a.tHP : a.DZw;
						return {
							title: o.intl.formatToPlainString(o.t["ttJ/ho"], {
								quantity: n
							}), description: o.intl.string(o.t.iLyuDA)
						};
					case a.evJ.GUILD_AT_CAPACITY:
						return {
							title: o.intl.string(o.t.ZZlox8), description: o.intl.string(o.t.ZUEGFh)
						};
					case a.evJ.GUILD_JOIN_INVITE_LIMITED_ACCESS:
						return {
							title: o.intl.string(o.t.kJwpBQ), description: o.intl.string(o.t.ZUEGFh)
						};
					default:
						return null
				}
			}

			function c(e) {
				switch (e) {
					case a.evJ.TOO_MANY_USER_GUILDS:
						return o.intl.string(o.t.iLyuDA);
					case a.evJ.GUILD_AT_CAPACITY:
						return o.intl.string(o.t.M6unND);
					case a.evJ.INVALID_COUNTRY_CODE:
						return o.intl.string(o.t.sRJGR0);
					case a.evJ.INVALID_CANNOT_FRIEND_SELF:
						return o.intl.string(o.t["mY2R+P"]);
					case a.evJ.INVITES_DISABLED:
						return o.intl.format(o.t.RXSeLi, {
							articleLink: i.Z.getArticleURL(a.BhN.INVITE_DISABLED)
						});
					default:
						return o.intl.string(o.t.dDZRd3)
				}
			}
		},
		814225: function(e, t, n) {
			n.d(t, {
				P3: () => p,
				ZK: () => d,
				en: () => f
			}), n(704826), n(35282), n(388685);
			var r = n(913527),
				i = n.n(r);
			if (12633 == n.j) var l = n(114858);
			n(358085), n(73346);
			var a = n(981631),
				o = n(388032);
			let s = {},
				c = {},
				u = Object.freeze(function(e) {
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
					ALL: -1
				}, a.EKQ));

			function d(e) {
				let t = (0, l.LX)(e, {
					path: a.Z5c.APPLICATION_STORE_LISTING_SKU(":skuId", ":slug")
				});
				return null != t ? t.params.skuId : null
			}

			function p(e) {
				switch (e) {
					case a.EKQ.ACTION:
						return o.intl.string(o.t["1o2/IC"]);
					case a.EKQ.ACTION_RPG:
						return o.intl.string(o.t.e9Yo4O);
					case a.EKQ.BRAWLER:
						return o.intl.string(o.t.WCkEjY);
					case a.EKQ.HACK_AND_SLASH:
						return o.intl.string(o.t.xQ4VmJ);
					case a.EKQ.PLATFORMER:
						return o.intl.string(o.t["WA318/"]);
					case a.EKQ.STEALTH:
						return o.intl.string(o.t["6UPFd3"]);
					case a.EKQ.SURVIVAL:
						return o.intl.string(o.t.SVPCt7);
					case a.EKQ.ADVENTURE:
						return o.intl.string(o.t["15p8oq"]);
					case a.EKQ.ACTION_ADVENTURE:
						return o.intl.string(o.t.AxkUBg);
					case a.EKQ.METROIDVANIA:
						return o.intl.string(o.t.Iwr38v);
					case a.EKQ.OPEN_WORLD:
						return o.intl.string(o.t["2HRHJC"]);
					case a.EKQ.PSYCHOLOGICAL_HORROR:
						return o.intl.string(o.t["/IwK3t"]);
					case a.EKQ.SANDBOX:
						return o.intl.string(o.t["2+Vu4e"]);
					case a.EKQ.SURVIVAL_HORROR:
						return o.intl.string(o.t.CCzRiI);
					case a.EKQ.VISUAL_NOVEL:
						return o.intl.string(o.t.FE7rnp);
					case a.EKQ.DRIVING_RACING:
						return o.intl.string(o.t.ErzgcX);
					case a.EKQ.VEHICULAR_COMBAT:
						return o.intl.string(o.t.YQHhoq);
					case a.EKQ.MASSIVELY_MULTIPLAYER:
						return o.intl.string(o.t["5CNg1t"]);
					case a.EKQ.MMORPG:
						return o.intl.string(o.t.c4NuOz);
					case a.EKQ.ROLE_PLAYING:
						return o.intl.string(o.t.yayVgo);
					case a.EKQ.DUNGEON_CRAWLER:
						return o.intl.string(o.t.qicemZ);
					case a.EKQ.ROGUELIKE:
						return o.intl.string(o.t.zWzaCg);
					case a.EKQ.SHOOTER:
						return o.intl.string(o.t["+pk6sb"]);
					case a.EKQ.LIGHT_GUN:
						return o.intl.string(o.t["TDS96+"]);
					case a.EKQ.SHOOT_EM_UP:
						return o.intl.string(o.t.wltDUF);
					case a.EKQ.FPS:
						return o.intl.string(o.t.olTaq6);
					case a.EKQ.DUAL_JOYSTICK_SHOOTER:
						return o.intl.string(o.t["SN+NS0"]);
					case a.EKQ.SIMULATION:
						return o.intl.string(o.t.sxMPdn);
					case a.EKQ.FLIGHT_SIMULATOR:
						return o.intl.string(o.t.Q7msr6);
					case a.EKQ.TRAIN_SIMULATOR:
						return o.intl.string(o.t.ZtECf3);
					case a.EKQ.LIFE_SIMULATOR:
						return o.intl.string(o.t.byt5Fh);
					case a.EKQ.FISHING:
						return o.intl.string(o.t.BKwiwc);
					case a.EKQ.SPORTS:
						return o.intl.string(o.t.O0B7XF);
					case a.EKQ.BASEBALL:
						return o.intl.string(o.t["jPYb//"]);
					case a.EKQ.BASKETBALL:
						return o.intl.string(o.t["o+D1Bg"]);
					case a.EKQ.BILLIARDS:
						return o.intl.string(o.t.PJ5o4O);
					case a.EKQ.BOWLING:
						return o.intl.string(o.t["82afJy"]);
					case a.EKQ.BOXING:
						return o.intl.string(o.t.DQvfen);
					case a.EKQ.FOOTBALL:
						return o.intl.string(o.t.slOYkp);
					case a.EKQ.GOLF:
						return o.intl.string(o.t.aeQPlJ);
					case a.EKQ.HOCKEY:
						return o.intl.string(o.t.g7oe5e);
					case a.EKQ.SKATEBOARDING_SKATING:
						return o.intl.string(o.t.yBDEPz);
					case a.EKQ.SNOWBOARDING_SKIING:
						return o.intl.string(o.t.GVaAcn);
					case a.EKQ.SOCCER:
						return o.intl.string(o.t.KPznxs);
					case a.EKQ.TRACK_FIELD:
						return o.intl.string(o.t.hJ62Q0);
					case a.EKQ.SURFING_WAKEBOARDING:
						return o.intl.string(o.t.PSh0CQ);
					case a.EKQ.WRESTLING:
						return o.intl.string(o.t["3y9hAQ"]);
					case a.EKQ.STRATEGY:
						return o.intl.string(o.t.KovTDw);
					case a.EKQ.FOUR_X:
						return o.intl.string(o.t["19h4dX"]);
					case a.EKQ.ARTILLERY:
						return o.intl.string(o.t.sBqLsL);
					case a.EKQ.RTS:
						return o.intl.string(o.t.yS4ddn);
					case a.EKQ.TOWER_DEFENSE:
						return o.intl.string(o.t.SULyIC);
					case a.EKQ.TURN_BASED_STRATEGY:
						return o.intl.string(o.t.VDsbrq);
					case a.EKQ.WARGAME:
						return o.intl.string(o.t.YDCIrK);
					case a.EKQ.MOBA:
						return o.intl.string(o.t.i1m1t7);
					case a.EKQ.FIGHTING:
						return o.intl.string(o.t.KepcSE);
					case a.EKQ.PUZZLE:
						return o.intl.string(o.t.rm7Ggo);
					case a.EKQ.CARD_GAME:
						return o.intl.string(o.t.kX85v7);
					case a.EKQ.EDUCATION:
						return o.intl.string(o.t["klIi6+"]);
					case a.EKQ.FITNESS:
						return o.intl.string(o.t.GOaaFR);
					case a.EKQ.GAMBLING:
						return o.intl.string(o.t["X8/Ee3"]);
					case a.EKQ.MUSIC_RHYTHM:
						return o.intl.string(o.t.qPgrg4);
					case a.EKQ.PARTY_MINI_GAME:
						return o.intl.string(o.t.diBclJ);
					case a.EKQ.PINBALL:
						return o.intl.string(o.t["1+ott7"]);
					case a.EKQ.TRIVIA_BOARD_GAME:
						return o.intl.string(o.t.aLlxjI);
					case a.EKQ.TACTICAL:
						return o.intl.string(o.t.LRPgbm);
					case a.EKQ.INDIE:
						return o.intl.string(o.t.hz9Xvr);
					case a.EKQ.ARCADE:
						return o.intl.string(o.t.Sbxows);
					case a.EKQ.POINT_AND_CLICK:
						return o.intl.string(o.t.vcerEh);
					default:
						return o.intl.string(o.t["9b4eUl"])
				}
			}
			Object.keys(u).forEach(e => {
				let t = e.toLowerCase().replace(/_/g, "-"),
					n = u[e];
				s[t] = n, c[n] = t
			});
			let m = [
				["YYYY-MM-DD", "MMMM DD, Y"],
				["YYYY-MM", "MMMM Y"],
				["MM-DD", "MMMM DD"],
				["MM", "MMMM"],
				["YYYY", "Y"]
			];

			function f(e) {
				let {
					preorderReleaseAt: t,
					preorderApproximateReleaseDate: n
				} = e;
				if (null != t) return t.format("MMMM DD");
				if (null == n) return null;
				for (let e = 0; e < m.length; e++) {
					let [t, r] = m[e], l = i()(n, t, !0);
					if (l.isValid()) return l.format(r)
				}
				return n
			}
		},
		714319: function(e, t, n) {
			n.d(t, {
				G: () => o,
				Z: () => s
			});
			var r, i = n(536895);

			function l(e) {
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

			function a(e, t) {
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
			var o = ((r = {}).UPDATE_ITEM_COUNT = "UPDATE_ITEM_COUNT", r.SET_FOCUSED_INDEX = "SET_FOCUSED_INDEX", r);

			function s(e, t) {
				switch (t.type) {
					case i.Us.NAVIGATE_UP:
						return a(l({}, e), {
							focusedIndex: Math.max(0, e.focusedIndex - 1)
						});
					case i.Us.NAVIGATE_DOWN:
						return a(l({}, e), {
							focusedIndex: Math.min(e.focusedIndex + 1, e.itemCount - 1)
						});
					case i.Us.NAVIGATE_START:
						return a(l({}, e), {
							focusedIndex: 0
						});
					case i.Us.NAVIGATE_END:
						return a(l({}, e), {
							focusedIndex: e.itemCount - 1
						});
					case "UPDATE_ITEM_COUNT":
						let {
							itemCount: n
						} = t;
						return a(l({}, e), {
							itemCount: n,
							focusedIndex: Math.min(n - 1, e.focusedIndex)
						});
					case "SET_FOCUSED_INDEX":
						let {
							index: r
						} = t;
						return a(l({}, e), {
							focusedIndex: Math.max(0, Math.min(r, e.itemCount - 1))
						});
					case i.Us.SELECT_FOCUSED_ITEM:
						break;
					default:
						console.warn("Listbox navigator was given an unhandled action ".concat(t.type))
				}
				return e
			}
		},
		837969: function(e, t, n) {
			n.d(t, {
				ZP: () => d
			}), n(388685);
			var r = n(73800),
				i = n(714319),
				l = n(536895),
				a = n(260866);
			let o = [l.R8.TAB, l.R8.UP, l.R8.DOWN];

			function s(e, t, n) {
				return null != n ? "#".concat(e(t, n)) : "#".concat(t)
			}

			function c(e) {
				return document.querySelector(e)
			}

			function u(e) {
				var t;
				null == (t = document.getElementById(e)) || t.focus()
			}

			function d(e) {
				let {
					navId: t,
					itemCount: n,
					focusedIndex: d = 0,
					onSelect: p,
					setFocus: m,
					getNewFocusIndex: f,
					maintainFocusPosition: _ = !0,
					includeSetSizes: h = !0,
					focusOnMount: g = !0,
					enabled: b = !0,
					onDispatch: E
				} = e, y = r.useCallback((e, t) => {
					let n = (0, i.Z)(e, t);
					return null != E && E(e, n, t), n
				}, [E]), [x, C] = r.useReducer(y, {
					focusedIndex: d,
					itemCount: n
				}), {
					itemCount: v,
					focusedIndex: O
				} = x, [j] = r.useState(() => (0, a.P2)(C, 16));
				return r.useEffect(() => {
						C({
							type: i.G.UPDATE_ITEM_COUNT,
							itemCount: n
						})
					}, [n]),
					function(e) {
						let {
							navId: t,
							itemCount: n,
							focusedIndex: d,
							onSelect: p,
							setFocus: m = u,
							getNewFocusIndex: f,
							dispatch: _,
							maintainFocusPosition: h,
							includeSetSizes: g,
							focusOnMount: b,
							enabled: E,
							makeId: y = a.qR,
							getIndexFromId: x
						} = e, C = r.useRef(n), v = r.useRef(x);
						v.current = x, C.current = n;
						let O = r.useRef(E);
						r.useEffect(() => {
							O.current = E
						}, [E]);
						let [j, I] = r.useState(!1), [S] = r.useState(() => new a.$o(e => () => {
							let t = null != v.current && "string" == typeof e ? v.current(e) : e;
							"number" != typeof t || t < 0 || _({
								type: i.G.SET_FOCUSED_INDEX,
								index: t
							})
						}));
						r.useEffect(() => () => S.clean(), [S]);
						let T = r.useCallback((e, t) => {
								O.current && m(e, t)
							}, [m]),
							[N, P] = r.useState(!0);
						r.useEffect(() => {
							if (N && !b) return void P(!1);
							T(y(t, d), d)
						}, [d]);
						let A = r.useCallback(function() {
								let e = !(arguments.length > 0) || void 0 === arguments[0] || arguments[0],
									n = null != f ? f(d) : d;
								n !== d && _({
									type: i.G.SET_FOCUSED_INDEX,
									index: n
								}), e && T(y(t, n), n)
							}, [y, d, f, _, t, T]),
							w = r.useCallback(e => {
								if (!O.current) return;
								if (o.includes(e.key) && !(e.shiftKey || e.altKey || e.metaKey || e.ctrlKey) && e.currentTarget === e.target) {
									e.preventDefault(), e.stopPropagation(), A();
									return
								}
								let n = function(e) {
									switch (e.key) {
										case l.R8.ENTER:
										case l.R8.SPACE:
											return l.Us.SELECT_FOCUSED_ITEM;
										case l.R8.UP:
											return l.Us.NAVIGATE_UP;
										case l.R8.DOWN:
											return l.Us.NAVIGATE_DOWN;
										case l.R8.HOME:
											return l.Us.NAVIGATE_START;
										case l.R8.END:
											return l.Us.NAVIGATE_END
									}
								}(e);
								switch (n) {
									case l.Us.NAVIGATE_UP:
									case l.Us.NAVIGATE_DOWN:
									case l.Us.NAVIGATE_START:
									case l.Us.NAVIGATE_END:
										e.preventDefault(), e.stopPropagation(), _({
											type: n
										});
										return;
									case l.Us.SELECT_FOCUSED_ITEM:
										let r = c(s(y, t, d));
										if ((null == r ? void 0 : r.ownerDocument.activeElement) !== r || e.repeat) return;
										if (e.preventDefault(), e.stopPropagation(), _({
												type: n
											}), null != p) return void p(d);
										null == r || r.click()
								}
							}, [y, t, _, d, A, p]),
							Z = r.useCallback(() => {
								j || I(!0)
							}, [j]),
							R = r.useCallback(() => {
								j || (h ? T(y(t, d), d) : A(!0))
							}, [y, t, T, h, j, d, A]),
							k = r.useCallback(e => {
								e.currentTarget.contains(e.relatedTarget) || requestAnimationFrame(() => {
									if (null == c(s(y, t, d))) return void T(t);
									I(!1)
								})
							}, [y, t, d, T]),
							L = r.useRef(null);
						r.useLayoutEffect(() => {
							let e = L.current;
							if (null != e) return e.addEventListener("focusin", Z), e.addEventListener("focus", R), e.addEventListener("focusout", k), () => {
								e.removeEventListener("focusin", Z), e.removeEventListener("focus", R), e.removeEventListener("focusout", k)
							}
						}, [R, Z, k]);
						let D = r.useCallback(() => ({
								role: "list",
								tabIndex: j && h ? -1 : 0,
								id: t,
								onKeyDown: w,
								ref: L
							}), [t, j, w, h]),
							M = r.useCallback(e => {
								let {
									index: n
								} = e;
								return {
									role: "listitem",
									"aria-setsize": g ? C.current : void 0,
									"aria-posinset": g ? n + 1 : void 0,
									id: y(t, n),
									tabIndex: h && n === d ? 0 : -1,
									onFocus: S.get(null != v.current ? y(t, n) : n)
								}
							}, [y, t, d, h, S, g]);
						return r.useMemo(() => ({
							dispatch: _,
							getContainerProps: D,
							getItemProps: M
						}), [_, D, M])
					}({
						navId: t,
						itemCount: v,
						focusedIndex: O,
						dispatch: j,
						onSelect: p,
						setFocus: m,
						getNewFocusIndex: f,
						maintainFocusPosition: _,
						includeSetSizes: h,
						focusOnMount: g,
						enabled: b
					})
			}
		},
		401653: function(e, t, n) {
			n.d(t, {
				j: () => i
			});
			var r, i = ((r = {})[r.BLOCK_MESSAGE = 1] = "BLOCK_MESSAGE", r[r.FLAG_TO_CHANNEL = 2] = "FLAG_TO_CHANNEL", r[r.USER_COMMUNICATION_DISABLED = 3] = "USER_COMMUNICATION_DISABLED", r[r.QUARANTINE_USER = 4] = "QUARANTINE_USER", r)
		},
		95930: function(e, t, n) {
			n.d(t, {
				q: () => i
			});
			var r, i = ((r = {})[r.UNKNOWN = 0] = "UNKNOWN", r[r.MESSAGE_SEND = 1] = "MESSAGE_SEND", r[r.GUILD_MEMBER_JOIN_OR_UPDATE = 2] = "GUILD_MEMBER_JOIN_OR_UPDATE", r)
		},
		688813: function(e, t, n) {
			n.d(t, {
				$: () => i
			});
			var r, i = ((r = {}).JOIN_RAID = "JOIN_RAID", r.DM_RAID = "DM_RAID", r.MENTION_RAID = "MENTION_RAID", r)
		},
		41381: function(e, t, n) {
			n.d(t, {
				f: () => i
			});
			var r, i = ((r = {})[r.KEYWORD = 1] = "KEYWORD", r[r.SPAM_LINK = 2] = "SPAM_LINK", r[r.ML_SPAM = 3] = "ML_SPAM", r[r.DEFAULT_KEYWORD_LIST = 4] = "DEFAULT_KEYWORD_LIST", r[r.MENTION_SPAM = 5] = "MENTION_SPAM", r[r.USER_PROFILE = 6] = "USER_PROFILE", r[r.SERVER_POLICY = 7] = "SERVER_POLICY", r)
		},
		39621: function(e, t, n) {
			n.d(t, {
				O: () => i
			});
			var r, i = ((r = {})[r.NONE = 0] = "NONE", r[r.FEATURE_LIMITED = 1] = "FEATURE_LIMITED", r[r.GUILD_FEATURE_LIMITED = 2] = "GUILD_FEATURE_LIMITED", r[r.USER_FEATURE_LIMITED = 3] = "USER_FEATURE_LIMITED", r[r.SLOWMODE = 4] = "SLOWMODE", r[r.RATE_LIMIT = 5] = "RATE_LIMIT", r[r.CANNOT_MESSAGE_USER = 6] = "CANNOT_MESSAGE_USER", r[r.USER_VERIFICATION_LEVEL = 7] = "USER_VERIFICATION_LEVEL", r[r.CANNOT_UNARCHIVE_THREAD = 8] = "CANNOT_UNARCHIVE_THREAD", r[r.CANNOT_JOIN_THREAD = 9] = "CANNOT_JOIN_THREAD", r[r.MISSING_PERMISSIONS = 10] = "MISSING_PERMISSIONS", r[r.CANNOT_SEND_ATTACHMENTS = 11] = "CANNOT_SEND_ATTACHMENTS", r[r.CANNOT_SEND_EMBEDS = 12] = "CANNOT_SEND_EMBEDS", r[r.CANNOT_SEND_STICKERS = 13] = "CANNOT_SEND_STICKERS", r[r.AUTOMOD_BLOCKED = 14] = "AUTOMOD_BLOCKED", r[r.HARMFUL_LINK = 15] = "HARMFUL_LINK", r[r.CANNOT_USE_COMMAND = 16] = "CANNOT_USE_COMMAND", r[r.BETA_GUILD_SIZE = 17] = "BETA_GUILD_SIZE", r[r.CANNOT_USE_EXTERNAL_APPS = 18] = "CANNOT_USE_EXTERNAL_APPS", r)
		},
		637214: function(e, t, n) {
			e.exports = {
				playButton: "playButton__0cb56",
				playButtonContents: "playButtonContents__0cb56",
				disabledButtonWrapper: "disabledButtonWrapper__0cb56",
				disabledButtonOverlay: "disabledButtonOverlay__0cb56",
				disabledButtonColor: "disabledButtonColor__0cb56",
				buttonText: "buttonText__0cb56",
				dropdownArrowHitbox: "dropdownArrowHitbox__0cb56",
				arrowSeparator: "arrowSeparator__0cb56",
				dropdownArrow: "dropdownArrow__0cb56"
			}
		},
		106887: function(e, t, n) {
			e.exports = {
				dropdownArrowHitbox: "dropdownArrowHitbox_e8c23e",
				dropdownArrow: "dropdownArrow_e8c23e",
				arrowSeparator: "arrowSeparator_e8c23e",
				dropdownSmall: "dropdownSmall_e8c23e dropdownArrowHitbox_e8c23e",
				dropdownMedium: "dropdownMedium_e8c23e dropdownArrowHitbox_e8c23e",
				dropdownLarge: "dropdownLarge_e8c23e dropdownArrowHitbox_e8c23e"
			}
		},
		207178: function(e, t, n) {
			e.exports = {
				progress: "progress__61462",
				disabledButtonWrapper: "disabledButtonWrapper__61462",
				disabledButtonOverlay: "disabledButtonOverlay__61462",
				disabledButtonColor: "disabledButtonColor__61462"
			}
		},
		823209: function(e, t, n) {
			e.exports = {
				row: "row_c7dbcb",
				icon: "icon_c7dbcb",
				salePercentage: "salePercentage_c7dbcb",
				originalAmount: "originalAmount_c7dbcb",
				directoryTilePrice: "directoryTilePrice_c7dbcb",
				directoryHeroPrice: "directoryHeroPrice_c7dbcb",
				directoryHeroPricePremium: "directoryHeroPricePremium_c7dbcb",
				directorySearchPrice: "directorySearchPrice_c7dbcb",
				listingPrice: "listingPrice_c7dbcb",
				embedPrice: "embedPrice_c7dbcb"
			}
		},
		817165: function(e, t, n) {
			e.exports = {
				splashContainer: "splashContainer__0bef9",
				splashContainerHorizontal: "splashContainerHorizontal__0bef9",
				priceOs: "priceOs__0bef9",
				platform: "platform__0bef9",
				exclusiveRegular: "exclusiveRegular__0bef9",
				exclusivePlaying: "exclusivePlaying__0bef9",
				splashPlaceholder: "splashPlaceholder__0bef9",
				splashVideo: "splashVideo__0bef9",
				tileBuyButton: "tileBuyButton__0bef9",
				tilePrice: "tilePrice__0bef9",
				tilePriceWithVisibleBuyButton: "tilePriceWithVisibleBuyButton__0bef9 tilePrice__0bef9"
			}
		},
		433962: function(e, t, n) {
			e.exports = {
				embedHorizontal: "embedHorizontal_a8b53f",
				embedVertical: "embedVertical_a8b53f",
				loading: "loading_a8b53f",
				loadingDescription: "loadingDescription_a8b53f",
				loadingBackgroundWrapper: "loadingBackgroundWrapper_a8b53f",
				loadingBackgroundWrapperHorizontal: "loadingBackgroundWrapperHorizontal_a8b53f",
				loadingImage: "loadingImage_a8b53f",
				loadingImageHorizontal: "loadingImageHorizontal_a8b53f",
				loadingBackground: "loadingBackground_a8b53f"
			}
		},
		360044: function(e, t, n) {
			e.exports = {
				tile: "tile__72090",
				tileHorizontal: "tileHorizontal__72090",
				title: "title__72090",
				tagline: "tagline__72090",
				actions: "actions__72090",
				media: "media__72090",
				mediaHorizontal: "mediaHorizontal__72090",
				description: "description__72090"
			}
		},
		50611: function(e, t, n) {
			e.exports = {
				closeButton: "closeButton__47998",
				art: "art__47998",
				description: "description__47998",
				conflictButton: "conflictButton__47998",
				linkButtonSize: "linkButtonSize__47998",
				linkButton: "linkButton__47998",
				retryButton: "retryButton__47998",
				conflictButtonInner: "conflictButtonInner__47998",
				title: "title__47998",
				buttonBody: "buttonBody__47998",
				timestamp: "timestamp__47998",
				choiceWrapper: "choiceWrapper__47998",
				choiceLine: "choiceLine__47998",
				choiceTitle: "choiceTitle__47998 title__47998",
				conflictTitle: "conflictTitle__47998 title__47998",
				conflictArt: "conflictArt__47998 art__47998",
				conflictDownloadArt: "conflictDownloadArt__47998 conflictArt__47998 art__47998",
				conflictUploadArt: "conflictUploadArt__47998 conflictArt__47998 art__47998",
				errorArt: "errorArt__47998 art__47998",
				modal: "modal__47998"
			}
		},
		955964: function(e, t, n) {
			e.exports = {
				metadata: "metadata__857bf",
				libraryLink: "libraryLink__857bf",
				libraryIcon: "libraryIcon__857bf",
				invalidPoop: "invalidPoop__857bf",
				invalidPoopHorizontal: "invalidPoopHorizontal__857bf",
				legacySeasonalGiftEmbedWrapper: "legacySeasonalGiftEmbedWrapper__857bf",
				customGiftEmbedWrapper: "customGiftEmbedWrapper__857bf",
				giftEmbedWrapperHorizontal: "giftEmbedWrapperHorizontal__857bf",
				snow: "snow__857bf",
				legacySeasonalGiftEmbedBox: "legacySeasonalGiftEmbedBox__857bf",
				legacySeasonalGiftEmbedBoxHorizontal: "legacySeasonalGiftEmbedBoxHorizontal__857bf",
				customGiftEmbedBox: "customGiftEmbedBox__857bf",
				customGiftEmbedBoxHorizontal: "customGiftEmbedBoxHorizontal__857bf",
				headerIcon: "headerIcon__857bf",
				collectiblesEmbedWrapper: "collectiblesEmbedWrapper__857bf",
				collectiblesAcceptButton: "collectiblesAcceptButton__857bf"
			}
		},
		516417: function(e, t, n) {
			e.exports = {
				OSSection: "OSSection_f28827",
				purchaseUnitOperatingSystem: "purchaseUnitOperatingSystem_f28827"
			}
		},
		228016: function(e, t, n) {
			e.exports = {
				tileActions: "tileActions_bd7f32",
				actionButton: "actionButton_bd7f32"
			}
		},
		111932: function(e, t, n) {
			e.exports = {
				container: "container_cc2dff",
				scroller: "scroller_cc2dff",
				reactorsContainer: "reactorsContainer_cc2dff",
				reactors: "reactors_cc2dff",
				reactionDefault: "reactionDefault_cc2dff",
				reactionSelected: "reactionSelected_cc2dff",
				emoji: "emoji_cc2dff",
				emojiText: "emojiText_cc2dff",
				burstEmojiSection: "burstEmojiSection_cc2dff",
				hideEmoji: "hideEmoji_cc2dff",
				burstEmoji: "burstEmoji_cc2dff",
				spinner: "spinner_cc2dff",
				spinnerMore: "spinnerMore_cc2dff",
				reactor: "reactor_cc2dff",
				reactorDefault: "reactorDefault_cc2dff reactor_cc2dff",
				name: "name_cc2dff",
				nickname: "nickname_cc2dff",
				username: "username_cc2dff",
				tagFaded: "tagFaded_cc2dff",
				discriminator: "discriminator_cc2dff",
				remove: "remove_cc2dff"
			}
		},
		638128: function(e, t, n) {
			n.r(e.exports = {
				inFront: "inFront__4d3fa",
				invite: "invite__4d3fa",
				fullHeight: "fullHeight__4d3fa",
				coverImageWrapper: "coverImageWrapper__4d3fa",
				coverImage: "coverImage__4d3fa",
				coverImageActionable: "coverImageActionable__4d3fa coverImage__4d3fa",
				blurred: "blurred__4d3fa",
				coverImageNotActionable: "coverImageNotActionable__4d3fa coverImage__4d3fa",
				artwork: "artwork__4d3fa",
				artworkActionable: "artworkActionable__4d3fa artwork__4d3fa",
				artworkNotActionable: "artworkNotActionable__4d3fa artwork__4d3fa",
				artworkSpotifySessionEnded: "artworkSpotifySessionEnded__4d3fa artwork__4d3fa",
				header: "header__4d3fa inFront__4d3fa",
				partyStatus: "partyStatus__4d3fa inFront__4d3fa",
				actionAndParty: "actionAndParty__4d3fa",
				actionButton: "actionButton__4d3fa inFront__4d3fa",
				name: "name__4d3fa inFront__4d3fa",
				partyMembers: "partyMembers__4d3fa",
				partyMember: "partyMember__4d3fa inFront__4d3fa",
				partyMemberKnown: "partyMemberKnown__4d3fa partyMember__4d3fa inFront__4d3fa",
				partyAvatar: "partyAvatar__4d3fa",
				partyMemberEmpty: "partyMemberEmpty__4d3fa partyMember__4d3fa inFront__4d3fa partyAvatar__4d3fa",
				moreUsers: "moreUsers__4d3fa inFront__4d3fa",
				helpIcon: "helpIcon__4d3fa",
				details: "details__4d3fa",
				state: "state__4d3fa",
				textLink: "textLink__4d3fa"
			})
		},
		581738: function(e, t, n) {
			e.exports = {
				description: "description_c8f246",
				info: "info_c8f246",
				tagline: "tagline_c8f246",
				timestampContainer: "timestampContainer_c8f246",
				partyStatusWrapper: "partyStatusWrapper_c8f246",
				footer: "footer_c8f246",
				footerSupportedPlatformIconsContainer: "footerSupportedPlatformIconsContainer_c8f246",
				footerSupportedPlatformIconContainer: "footerSupportedPlatformIconContainer_c8f246",
				footerSupportedPlatformText: "footerSupportedPlatformText_c8f246"
			}
		},
		568618: function(e, t, n) {
			e.exports = {
				title: "title_a9fc04"
			}
		},
		197866: function(e, t, n) {
			e.exports = {
				wrapper: "wrapper__727be",
				header: "header__727be",
				headerTitle: "headerTitle__727be",
				content: "content__727be",
				contentTextWrapper: "contentTextWrapper__727be",
				contentText: "contentText__727be",
				appIcon: "appIcon__727be",
				description: "description__727be",
				openStoreButton: "openStoreButton__727be",
				skuPurchaseButtons: "skuPurchaseButtons__727be",
				viewDetailsButton: "viewDetailsButton__727be"
			}
		},
		969878: function(e, t, n) {
			e.exports = {
				modal: "modal__49777",
				modalHeader: "modalHeader__49777",
				modalTitle: "modalTitle__49777",
				modalHeaderLinks: "modalHeaderLinks__49777",
				modalCloseBtn: "modalCloseBtn__49777",
				scrollerWrapper: "scrollerWrapper__49777",
				scroller: "scroller__49777"
			}
		},
		409369: function(e, t, n) {
			e.exports = {
				modal: "modal__24654",
				footer: "footer__24654",
				footerButtons: "footerButtons__24654",
				linkButton: "linkButton__24654",
				innerLinkButton: "innerLinkButton__24654",
				appIcon: "appIcon__24654",
				content: "content__24654",
				unavailableTitle: "unavailableTitle__24654",
				unavailableBody: "unavailableBody__24654",
				button: "button__24654"
			}
		},
		299283: function(e, t, n) {
			e.exports = {
				btnContent: "btnContent__3b75d"
			}
		},
		71851: function(e, t, n) {
			e.exports = {
				text: "text_f4d1ff"
			}
		},
		758364: function(e, t, n) {
			e.exports = {
				description: "description__1f7ec",
				tagline: "tagline__1f7ec",
				tag: "tag__1f7ec"
			}
		},
		383195: function(e, t, n) {
			e.exports = {
				embed: "embed__98ba8",
				showVideoOnFocus: "showVideoOnFocus__98ba8",
				staticBanner: "staticBanner__98ba8",
				videoBanner: "videoBanner__98ba8",
				bannerWrapper: "bannerWrapper__98ba8",
				bannerAspectRatioBot: "bannerAspectRatioBot__98ba8",
				bannerAspectRatioActivity: "bannerAspectRatioActivity__98ba8",
				header: "header__98ba8",
				contentContainer: "contentContainer__98ba8",
				contentAndCopyButtonWrapper: "contentAndCopyButtonWrapper__98ba8",
				contentWrapper: "contentWrapper__98ba8",
				cursorPointer: "cursorPointer__98ba8",
				contentWrapperClickable: "contentWrapperClickable__98ba8",
				contentTitle: "contentTitle__98ba8",
				img: "img__98ba8",
				content: "content__98ba8",
				contentInfoWrapper: "contentInfoWrapper__98ba8",
				linkIcon: "linkIcon__98ba8",
				actionWrapper: "actionWrapper__98ba8",
				alwaysWhiteText: "alwaysWhiteText__98ba8",
				primaryButton: "primaryButton__98ba8"
			}
		},
		368991: function(e, t, n) {
			e.exports = {
				wrapper: "wrapper__748d7"
			}
		},
		515230: function(e, t, n) {
			e.exports = {
				flex: "flex__708d1",
				header: "header__708d1",
				embed: "embed__708d1",
				listeners: "listeners__708d1",
				live: "live__708d1",
				speakers: "speakers__708d1",
				members: "members__708d1",
				speaker: "speaker__708d1",
				joinButton: "joinButton__708d1",
				background: "background__708d1",
				icon: "icon__708d1",
				guild: "guild__708d1",
				guildInfo: "guildInfo__708d1",
				dot: "dot__708d1",
				alignStart: "alignStart__708d1",
				avatar: "avatar__708d1",
				username: "username__708d1"
			}
		},
		630403: function(e, t, n) {
			e.exports = {
				container: "container__1ce5d",
				circularImage: "circularImage__1ce5d",
				dots: "dots__1ce5d"
			}
		},
		745641: function(e, t, n) {
			e.exports = {
				container: "container_cacd02",
				bumpBox: "bumpBox_cacd02",
				icon: "icon_cacd02",
				publish: "publish_cacd02",
				tagline: "tagline_cacd02",
				hidePermanently: "hidePermanently_cacd02",
				closeIcon: "closeIcon_cacd02"
			}
		},
		257590: function(e, t, n) {
			e.exports = {
				mainContainer: "mainContainer_ceba9e",
				compact: "compact_ceba9e",
				actions: "actions_ceba9e",
				embed: "embed_ceba9e"
			}
		},
		711643: function(e, t, n) {
			e.exports = {
				mainContainer: "mainContainer__844a1",
				compact: "compact__844a1",
				actions: "actions__844a1"
			}
		},
		94488: function(e, t, n) {
			e.exports = {
				embedFull: "embedFull__623de embed__623de",
				embed: "embed__623de",
				isHidden: "isHidden__623de",
				inlineMediaEmbed: "inlineMediaEmbed__623de embed__623de",
				embedAuthorName: "embedAuthorName__623de",
				embedAuthorNameLink: "embedAuthorNameLink__623de embedLink__623de embedAuthorName__623de",
				embedDescription: "embedDescription__623de",
				embedFieldName: "embedFieldName__623de",
				embedFieldValue: "embedFieldValue__623de",
				embedFooterText: "embedFooterText__623de",
				embedLink: "embedLink__623de",
				embedProvider: "embedProvider__623de",
				embedTitle: "embedTitle__623de",
				embedTitleLink: "embedTitleLink__623de embedLink__623de embedTitle__623de",
				gridContainer: "gridContainer__623de",
				grid: "grid__623de",
				hasThumbnail: "hasThumbnail__623de",
				embedMargin: "embedMargin__623de",
				embedSuppressButton: "embedSuppressButton__623de",
				embedAuthor: "embedAuthor__623de",
				embedAuthorIcon: "embedAuthorIcon__623de",
				embedImage: "embedImage__623de",
				embedThumbnail: "embedThumbnail__623de",
				embedVideo: "embedVideo__623de",
				embedGalleryImagesWrapper: "embedGalleryImagesWrapper__623de",
				embedGallerySide: "embedGallerySide__623de",
				galleryImage: "galleryImage__623de",
				obscureVideoSpacing: "obscureVideoSpacing__623de",
				galleryImageContainer: "galleryImageContainer__623de",
				embedGalleryImageElement: "embedGalleryImageElement__623de",
				centerContent: "centerContent__623de",
				embedVideoActions: "embedVideoActions__623de",
				embedVideoImageComponent: "embedVideoImageComponent__623de",
				embedVideoImageComponentInner: "embedVideoImageComponentInner__623de",
				embedIframe: "embedIframe__623de",
				embedFooter: "embedFooter__623de",
				embedFooterSeparator: "embedFooterSeparator__623de",
				embedFooterIcon: "embedFooterIcon__623de",
				embedFields: "embedFields__623de",
				embedField: "embedField__623de",
				embedMedia: "embedMedia__623de",
				embedAmazonMusic: "embedAmazonMusic__623de",
				embedAppleMusic: "embedAppleMusic__623de",
				embedSpotify: "embedSpotify__623de",
				hiddenEmbed: "hiddenEmbed__623de",
				spoilerEmbed: "spoilerEmbed__623de hiddenEmbed__623de",
				hiddenExplicitEmbed: "hiddenExplicitEmbed__623de hiddenEmbed__623de",
				justifyAuto: "justifyAuto__623de",
				hiddenAttachment: "hiddenAttachment__623de",
				spoilerAttachment: "spoilerAttachment__623de hiddenAttachment__623de",
				hiddenExplicitAttachment: "hiddenExplicitAttachment__623de hiddenAttachment__623de"
			}
		},
		519222: function(e, t, n) {
			e.exports = {
				embedIFrame: "embedIFrame__49997"
			}
		},
		166011: function(e, t, n) {
			e.exports = {
				hoverButtonGroup: "hoverButtonGroup__06ab4",
				forceShowHover: "forceShowHover__06ab4",
				hoverButton: "hoverButton__06ab4",
				selected: "selected__06ab4",
				nonMediaMosaicItem: "nonMediaMosaicItem__06ab4",
				sizer: "sizer__06ab4"
			}
		},
		510064: function(e, t, n) {
			e.exports = {
				iconContainer: "iconContainer__4bcae",
				content: "content__4bcae",
				noReactions: "noReactions__4bcae",
				withReactions: "withReactions__4bcae",
				textContainer: "textContainer__4bcae",
				action: "action__4bcae"
			}
		},
		933466: function(e, t, n) {
			e.exports = {
				badge: "badge__86331",
				badgeVerifiedIcon: "badgeVerifiedIcon__86331",
				roleName: "roleName__86331",
				popout: "popout__86331",
				popoutChecks: "popoutChecks__86331",
				popoutChecksGroup: "popoutChecksGroup__86331",
				popoutCheckGroupName: "popoutCheckGroupName__86331",
				popoutCheckGroupPlatformIcon: "popoutCheckGroupPlatformIcon__86331",
				popoutCheck: "popoutCheck__86331",
				popoutCheckIcon: "popoutCheckIcon__86331",
				popoutHeaderContainer: "popoutHeaderContainer__86331",
				popoutHeaderText: "popoutHeaderText__86331",
				buttonContainer: "buttonContainer__86331",
				getRolesButton: "getRolesButton__86331",
				viewConnectionsButton: "viewConnectionsButton__86331",
				botTag: "botTag__86331"
			}
		},
		103395: function(e, t, n) {
			e.exports = {
				clickable: "clickable__4337d",
				container: "container__4337d",
				truncatedText: "truncatedText__4337d",
				usersHeader: "usersHeader__4337d"
			}
		},
		24665: function(e, t, n) {
			e.exports = {
				guildShopEmbed: "guildShopEmbed__86fa6",
				spinnerContainer: "spinnerContainer__86fa6",
				serverShopLabel: "serverShopLabel__86fa6",
				serverShopLabelText: "serverShopLabelText__86fa6",
				guildShopEmbedFooter: "guildShopEmbedFooter__86fa6",
				guildShopSummary: "guildShopSummary__86fa6",
				guildShopEmbedCta: "guildShopEmbedCta__86fa6",
				guildShopEmbedCtaContent: "guildShopEmbedCtaContent__86fa6"
			}
		},
		414521: function(e, t, n) {
			e.exports = {
				container: "container_adb50a",
				coverImageContainer: "coverImageContainer_adb50a",
				infoContainer: "infoContainer_adb50a",
				coverImage: "coverImage_adb50a",
				showMoreButton: "showMoreButton_adb50a",
				showMoreArrow: "showMoreArrow_adb50a"
			}
		},
		497646: function(e, t, n) {
			e.exports = {
				lineClamp2Plus: "lineClamp2Plus__38db5",
				lineClamp1: "lineClamp1__38db5"
			}
		},
		233741: function(e, t, n) {
			e.exports = {
				draftBadge: "draftBadge__53d72"
			}
		},
		246404: function(e, t, n) {
			e.exports = {
				downloadApps: "downloadApps__4a98c",
				contentWrapper: "contentWrapper__4a98c",
				inner: "inner__4a98c",
				header: "header__4a98c",
				footer: "footer__4a98c",
				platformsWrap: "platformsWrap__4a98c",
				platforms: "platforms__4a98c",
				platform: "platform__4a98c",
				active: "active__4a98c",
				icon: "icon__4a98c",
				platformName: "platformName__4a98c",
				iconWrap: "iconWrap__4a98c",
				apple: "apple__4a98c",
				android: "android__4a98c",
				windows: "windows__4a98c",
				linux: "linux__4a98c",
				ios: "ios__4a98c",
				downloadButtons: "downloadButtons__4a98c",
				list: "list__4a98c",
				modalCloseButton: "modalCloseButton__4a98c",
				refreshDownloadButton: "refreshDownloadButton__4a98c"
			}
		},
		403122: function(e, t, n) {
			e.exports = {
				emojiContainer: "emojiContainer__0524a",
				emoji: "emoji__0524a"
			}
		},
		841935: function(e, t, n) {
			e.exports = {
				iconContainer: "iconContainer__45eb7",
				content: "content__45eb7",
				clickableEmoji: "clickableEmoji__45eb7",
				ctaReactionButton: "ctaReactionButton__45eb7",
				ctaText: "ctaText__45eb7",
				ctaEmoji: "ctaEmoji__45eb7"
			}
		},
		499632: function(e, t, n) {
			e.exports = {
				accessory: "accessory__09bc1",
				accessoryText: "accessoryText__09bc1"
			}
		},
		580297: function(e, t, n) {
			e.exports = {
				header: "header_d93468",
				subheader: "subheader_d93468",
				closeButton: "closeButton_d93468",
				button: "button_d93468",
				image: "image_d93468",
				video: "video_d93468",
				media: "media_d93468",
				mediaContainer: "mediaContainer_d93468"
			}
		},
		752386: function(e, t, n) {
			e.exports = {
				container: "container__122e4",
				quote: "quote__122e4",
				content: "content__122e4",
				headerContainer: "headerContainer__122e4",
				headerIcon: "headerIcon__122e4",
				headerText: "headerText__122e4",
				footerContainer: "footerContainer__122e4",
				footerText: "footerText__122e4",
				originIcon: "originIcon__122e4"
			}
		},
		554116: function(e, t, n) {
			e.exports = {
				tag: "tag_d0ccaf",
				text: "text_d0ccaf"
			}
		},
		280306: function(e, t, n) {
			e.exports = {
				invalidBody: "invalidBody__164c9"
			}
		},
		142770: function(e, t, n) {
			e.exports = {
				tag: "tag__6c02d",
				text: "text__6c02d"
			}
		},
		374701: function(e, t, n) {
			e.exports = {
				newMemberBadge: "newMemberBadge_f80704"
			}
		},
		400822: function(e, t, n) {
			e.exports = {
				messagePopoutContent: "messagePopoutContent_c00127",
				popoutContainer: "popoutContainer_c00127",
				mainContent: "mainContent_c00127",
				iconContainer: "iconContainer_c00127",
				header: "header_c00127",
				ctaButton: "ctaButton_c00127"
			}
		},
		940792: function(e, t, n) {
			e.exports = {
				productCard: "productCard__79d38",
				solidBackground: "solidBackground__79d38",
				opaqueBackground: "opaqueBackground__79d38",
				productThumbnailContainer: "productThumbnailContainer__79d38",
				productThumbnail: "productThumbnail__79d38",
				purchaseToUnlockBadge: "purchaseToUnlockBadge__79d38",
				draftBadge: "draftBadge__79d38",
				lockIcon: "lockIcon__79d38",
				productName: "productName__79d38",
				productDetails: "productDetails__79d38",
				productDetailContent: "productDetailContent__79d38",
				purchaseDetails: "purchaseDetails__79d38",
				productActionButton: "productActionButton__79d38",
				showMoreButton: "showMoreButton__79d38",
				arrowIcon: "arrowIcon__79d38",
				hasAction: "hasAction__79d38",
				cardClickableContainer: "cardClickableContainer__79d38"
			}
		},
		165674: function(e, t, n) {
			e.exports = {
				textWithIcon: "textWithIcon__6e421"
			}
		},
		838997: function(e, t, n) {
			e.exports = {
				roleTag: "roleTag__9cd44",
				roleTagContainer: "roleTagContainer__9cd44",
				roleColor: "roleColor__9cd44"
			}
		},
		306846: function(e, t, n) {
			e.exports = {
				productCard: "productCard__8d9f6",
				productCardClickable: "productCardClickable__8d9f6",
				productThumbnail: "productThumbnail__8d9f6",
				productInfo: "productInfo__8d9f6",
				productInfoContent: "productInfoContent__8d9f6",
				productName: "productName__8d9f6",
				productDetails: "productDetails__8d9f6",
				dotSeparator: "dotSeparator__8d9f6",
				productActionMenuButton: "productActionMenuButton__8d9f6",
				productActionMenuIcon: "productActionMenuIcon__8d9f6",
				menuContainer: "menuContainer__8d9f6",
				disabled: "disabled__8d9f6"
			}
		},
		28651: function(e, t, n) {
			e.exports = {
				badge: "badge__436c9",
				badgeIcon: "badgeIcon__436c9"
			}
		},
		48215: function(e, t, n) {
			e.exports = {
				thankYouCard: "thankYouCard_b851f5",
				thankYouText: "thankYouText_b851f5",
				userAvatar: "userAvatar_b851f5"
			}
		},
		896293: function(e, t, n) {
			e.exports = {
				welcomeCard: "welcomeCard_d74b42",
				welcomeCardText: "welcomeCardText_d74b42",
				welcomeCardBadge: "welcomeCardBadge_d74b42"
			}
		},
		326669: function(e, t, n) {
			e.exports = {
				userAvatar: "userAvatar__9ec1a",
				svg: "svg__9ec1a"
			}
		},
		974844: function(e, t, n) {
			e.exports = {
				descriptionText: "descriptionText__535f5",
				truncate: "truncate__535f5"
			}
		},
		912306: function(e, t, n) {
			e.exports = {
				container: "container__652b4"
			}
		},
		274569: function(e, t, n) {
			e.exports = {
				container: "container_b5010b",
				eventName: "eventName_b5010b",
				description: "description_b5010b",
				descriptionWithThumbnail: "descriptionWithThumbnail_b5010b",
				spacer: "spacer_b5010b",
				rsvpCount: "rsvpCount_b5010b",
				rsvpIcon: "rsvpIcon_b5010b",
				creator: "creator_b5010b",
				eventInfoStatusContainer: "eventInfoStatusContainer_b5010b",
				statusContainer: "statusContainer_b5010b",
				withThumbnail: "withThumbnail_b5010b",
				thumbnailContainer: "thumbnailContainer_b5010b",
				thumbnail: "thumbnail_b5010b"
			}
		},
		923167: function(e, t, n) {
			e.exports = {
				eventStatusContainer: "eventStatusContainer__29021",
				isRecurring: "isRecurring__29021",
				eventStatusLabel: "eventStatusLabel__29021",
				liveEventEndTime: "liveEventEndTime__29021",
				newBadge: "newBadge__29021",
				newBadgeText: "newBadgeText__29021"
			}
		},
		690606: function(e, t, n) {
			e.exports = {
				inviteDetailsContainer: "inviteDetailsContainer_da5e8d",
				clickable: "clickable_da5e8d",
				guildChannelInfoContainer: "guildChannelInfoContainer_da5e8d",
				verticalContainer: "verticalContainer_da5e8d",
				footerContainer: "footerContainer_da5e8d",
				button: "button_da5e8d",
				innerButton: "innerButton_da5e8d",
				buttonIcon: "buttonIcon_da5e8d",
				eventDescription: "eventDescription_da5e8d",
				channelDescription: "channelDescription_da5e8d",
				guildBadge: "guildBadge_da5e8d",
				guildName: "guildName_da5e8d",
				guildNameClickable: "guildNameClickable_da5e8d",
				guildNameLinkable: "guildNameLinkable_da5e8d guildName_da5e8d",
				channelIcon: "channelIcon_da5e8d",
				channelInfoContainer: "channelInfoContainer_da5e8d",
				channelLocationLink: "channelLocationLink_da5e8d",
				banner: "banner_da5e8d"
			}
		},
		976988: function(e, t, n) {
			e.exports = {
				responseOptions: "responseOptions_d650db"
			}
		},
		606966: function(e, t, n) {
			e.exports = {
				icon: "icon__33e19"
			}
		},
		653072: function(e, t, n) {
			e.exports = {
				card: "card_a8610c",
				participants: "participants_a8610c",
				disabled: "disabled_a8610c",
				actions: "actions_a8610c",
				button: "button_a8610c",
				buttonInner: "buttonInner_a8610c"
			}
		},
		974393: function(e, t, n) {
			e.exports = {
				right: "right__89d2b",
				down: "down__89d2b",
				left: "left__89d2b"
			}
		},
		318135: function(e, t, n) {
			e.exports = {
				container: "container__09ccc"
			}
		},
		800515: function(e, t, n) {
			e.exports = {
				settingsWrapper: "settingsWrapper_c9e42f",
				osx: "osx_c9e42f",
				backButton: "backButton_c9e42f",
				windows: "windows_c9e42f",
				notice: "notice_c9e42f",
				noticeContents: "noticeContents_c9e42f",
				noticeText: "noticeText_c9e42f",
				previewWarning: "previewWarning_c9e42f",
				button: "button_c9e42f",
				buttonInner: "buttonInner_c9e42f",
				backArrow: "backArrow_c9e42f",
				selectCaret: "selectCaret_c9e42f"
			}
		},
		676011: function(e, t, n) {
			n.r(e.exports = {
				wrapper: "wrapper_d5f3cd",
				header: "header_d5f3cd",
				content: "content_d5f3cd",
				guildIcon: "guildIcon_d5f3cd",
				applicationIcon: "applicationIcon_d5f3cd",
				guildIconJoined: "guildIconJoined_d5f3cd guildIcon_d5f3cd",
				guildIconImage: "guildIconImage_d5f3cd guildIcon_d5f3cd",
				guildIconImageJoined: "guildIconImageJoined_d5f3cd guildIconImage_d5f3cd guildIcon_d5f3cd",
				inviteDestination: "inviteDestination_d5f3cd",
				inviteDestinationJoined: "inviteDestinationJoined_d5f3cd inviteDestination_d5f3cd",
				channel: "channel_d5f3cd",
				channelName: "channelName_d5f3cd",
				channelIcon: "channelIcon_d5f3cd",
				status: "status_d5f3cd",
				statusWrapper: "statusWrapper_d5f3cd",
				statusOnline: "statusOnline_d5f3cd status_d5f3cd",
				statusOffline: "statusOffline_d5f3cd status_d5f3cd",
				count: "count_d5f3cd",
				guildNameWrapper: "guildNameWrapper_d5f3cd",
				guildName: "guildName_d5f3cd",
				guildBadge: "guildBadge_d5f3cd",
				guildInfo: "guildInfo_d5f3cd",
				guildDetail: "guildDetail_d5f3cd",
				statusCounts: "statusCounts_d5f3cd",
				inviteSplash: "inviteSplash_d5f3cd",
				inviteSplashImage: "inviteSplashImage_d5f3cd",
				inviteSplashBadge: "inviteSplashBadge_d5f3cd",
				inviteSplashImageLoaded: "inviteSplashImageLoaded_d5f3cd",
				button: "button_d5f3cd",
				buttonSize: "buttonSize_d5f3cd",
				guildIconExpired: "guildIconExpired_d5f3cd guildIcon_d5f3cd",
				inviteDestinationExpired: "inviteDestinationExpired_d5f3cd",
				buttonForNonMember: "buttonForNonMember_d5f3cd",
				"invite-button-resolving": "invite-button-resolving_d5f3cd",
				resolvingWrapper: "resolvingWrapper_d5f3cd",
				resolving: "resolving_d5f3cd",
				resolvingBackground: "resolvingBackground_d5f3cd",
				resolvingFakeButton: "resolvingFakeButton_d5f3cd"
			})
		},
		841806: function(e, t, n) {
			e.exports = {
				container: "container__5e208",
				isComponentsV2: "isComponentsV2__5e208"
			}
		},
		127879: function(e, t, n) {
			e.exports = {
				content: "content__57f77",
				loading: "loading__57f77",
				textEmoji: "textEmoji__57f77",
				premium: "premium__57f77",
				shopIcon: "shopIcon__57f77",
				launchIcon: "launchIcon__57f77",
				hidden: "hidden__57f77",
				label: "label__57f77"
			}
		},
		922127: function(e, t, n) {
			e.exports = {
				discriminator: "discriminator__78c91",
				username: "username__78c91",
				tag: "tag__78c91",
				bot: "bot__78c91",
				label: "label__78c91",
				labelText: "labelText__78c91",
				roleCountContainer: "roleCountContainer__78c91",
				roleCountIcon: "roleCountIcon__78c91",
				roleCountText: "roleCountText__78c91"
			}
		},
		749778: function(e, t, n) {
			e.exports = {
				container: "container__81a06",
				select: "select__81a06",
				iconContainer: "iconContainer__81a06",
				badges: "badges__81a06",
				soloInput: "soloInput__81a06",
				inlineInput: "inlineInput__81a06",
				singleSelect: "singleSelect__81a06",
				hidden: "hidden__81a06"
			}
		},
		950386: function(e, t, n) {
			e.exports = {
				container: "container_b08511",
				select: "select_b08511",
				selectOption: "selectOption_b08511",
				disabled: "disabled_b08511",
				emoji: "emoji_b08511",
				smallEmoji: "smallEmoji_b08511",
				offset: "offset_b08511",
				optionTag: "optionTag_b08511",
				labelContainer: "labelContainer_b08511",
				label: "label_b08511",
				description: "description_b08511",
				singleValueLabel: "singleValueLabel_b08511",
				tag: "tag_b08511",
				option: "option_b08511",
				value: "value_b08511",
				singleValue: "singleValue_b08511",
				error: "error_b08511"
			}
		},
		290829: function(e, t, n) {
			e.exports = {
				formItem: "formItem__1b11b"
			}
		},
		823670: function(e, t, n) {
			e.exports = {
				fileDisplayContainer: "fileDisplayContainer__55ed7",
				fileHidden: "fileHidden__55ed7"
			}
		},
		116181: function(e, t, n) {
			e.exports = {
				divider: "divider__1fcac",
				spacingLarge: "spacingLarge__1fcac"
			}
		},
		317997: function(e, t, n) {
			e.exports = {
				markdownContainer: "markdownContainer__48344",
				containerSizedText: "containerSizedText__48344"
			}
		},
		583760: function(e, t, n) {
			e.exports = {
				imgContainer: "imgContainer__8f9ad",
				img: "img__8f9ad",
				hiddenSpoiler: "hiddenSpoiler__8f9ad"
			}
		},
		217440: function(e, t, n) {
			e.exports = {
				textPrimary: "textPrimary__8e577",
				textSecondary: "textSecondary__8e577",
				headerIcons: "headerIcons__8e577",
				container: "container__8e577",
				clickable: "clickable__8e577",
				badges: "badges__8e577",
				clickableText: "clickableText__8e577",
				truncatedText: "truncatedText__8e577",
				infoContainer: "infoContainer__8e577",
				users: "users__8e577",
				thumbnailContainer: "thumbnailContainer__8e577"
			}
		},
		118925: function(e, t, n) {
			e.exports = {
				container: "container__1647d",
				children: "children__1647d",
				error: "error__1647d"
			}
		},
		719877: function(e, t, n) {
			e.exports = {
				container: "container__60fa3",
				isHidden: "isHidden__60fa3",
				withAccentColor: "withAccentColor__60fa3"
			}
		},
		46171: function(e, t, n) {
			e.exports = {
				section: "section_c3d3d9",
				children: "children_c3d3d9",
				textChildren: "textChildren_c3d3d9",
				verticallyCenterAlign: "verticallyCenterAlign_c3d3d9",
				accessory: "accessory_c3d3d9",
				restrictWidth: "restrictWidth_c3d3d9"
			}
		},
		868327: function(e, t, n) {
			e.exports = {
				notFoundPlaceholder: "notFoundPlaceholder_a3c1e1",
				fadeIn: "fadeIn_a3c1e1",
				brokenImageIcon: "brokenImageIcon_a3c1e1",
				hiddenSpoilers: "hiddenSpoilers_a3c1e1"
			}
		},
		791644: function(e, t, n) {
			e.exports = {
				badge: "badge__36097",
				image: "image__36097"
			}
		},
		816398: function(e, t, n) {
			e.exports = {
				loadingWrapper: "loadingWrapper__5a143"
			}
		},
		695256: function(e, t, n) {
			e.exports = {
				container: "container__7e919",
				content: "content__7e919",
				buttonContainer: "buttonContainer__7e919",
				cancel: "cancel__7e919",
				image: "image__7e919"
			}
		},
		422461: function(e, t, n) {
			e.exports = {
				centeringContainer: "centeringContainer__0d97c",
				titleContainer: "titleContainer__0d97c centeringContainer__0d97c",
				loadingContainer: "loadingContainer__0d97c centeringContainer__0d97c",
				slideshowWrapper: "slideshowWrapper__0d97c",
				spinner: "spinner__0d97c",
				imageLoading: "imageLoading__0d97c",
				splash: "splash__0d97c",
				splashPlaceholder: "splashPlaceholder__0d97c",
				muteContainer: "muteContainer__0d97c",
				muteContainerPlaying: "muteContainerPlaying__0d97c",
				muteContainerMediaOverlay: "muteContainerMediaOverlay__0d97c",
				mute: "mute__0d97c",
				spinnerItem: "spinnerItem__0d97c"
			}
		},
		70249: function(e, t, n) {
			e.exports = {
				postPreviewContainer: "postPreviewContainer__419e3",
				thumbnailContainer: "thumbnailContainer__419e3",
				thumbnail: "thumbnail__419e3",
				thumbnailImage: "thumbnailImage__419e3",
				thumbnailOverlay: "thumbnailOverlay__419e3",
				thumbnailOverlayCta: "thumbnailOverlayCta__419e3",
				descriptionContainer: "descriptionContainer__419e3",
				descriptionHeader: "descriptionHeader__419e3",
				descriptionHeaderText: "descriptionHeaderText__419e3",
				descriptionSubtitle: "descriptionSubtitle__419e3",
				descriptionFooter: "descriptionFooter__419e3",
				descriptionFooterContainer: "descriptionFooterContainer__419e3",
				descriptionFooterChannelName: "descriptionFooterChannelName__419e3",
				descriptionFooterAuthorContainer: "descriptionFooterAuthorContainer__419e3",
				authorName: "authorName__419e3",
				mediaChannelIcon: "mediaChannelIcon__419e3",
				channelName: "channelName__419e3",
				subscribeButton: "subscribeButton__419e3",
				spoiler: "spoiler__419e3"
			}
		},
		18485: function(e, t, n) {
			e.exports = {
				CTAMessage: "CTAMessage_e887d4",
				CTAMessageButtonOuter: "CTAMessageButtonOuter_e887d4",
				CTAMessageButton: "CTAMessageButton_e887d4",
				CTAMessageSticker: "CTAMessageSticker_e887d4"
			}
		},
		115997: function(e, t, n) {
			e.exports = {
				embedCard: "embedCard__44c9a",
				compact: "compact__44c9a",
				header: "header__44c9a",
				withFooter: "withFooter__44c9a",
				messageContainer: "messageContainer__44c9a"
			}
		},
		484608: function(e, t, n) {
			e.exports = {
				infoWrapper: "infoWrapper_c44293",
				activityPresenceDetailsContainer: "activityPresenceDetailsContainer_c44293",
				activityPresenceDetailsItemContainer: "activityPresenceDetailsItemContainer_c44293",
				truncatesText: "truncatesText_c44293",
				activityPresenceDetailsItemIconContainer: "activityPresenceDetailsItemIconContainer_c44293"
			}
		},
		806518: function(e, t, n) {
			e.exports = {
				ephemeralMessage: "ephemeralMessage__124d2",
				userAppsBetaContent: "userAppsBetaContent__124d2",
				icon: "icon__124d2"
			}
		},
		912861: function(e, t, n) {
			e.exports = {
				container: "container_c530da",
				tooltip: "tooltip_c530da",
				tooltipPointer: "tooltipPointer_c530da",
				mention: "mention_c530da",
				spinner: "spinner_c530da"
			}
		},
		848024: function(e, t, n) {
			e.exports = {
				messageContentContainer: "messageContentContainer__4ea49",
				iconContainer: "iconContainer__4ea49",
				icon: "icon__4ea49"
			}
		},
		861477: function(e, t, n) {
			e.exports = {
				embed: "embed_fb5def",
				text: "text_fb5def",
				title: "title_fb5def",
				parentContainer: "parentContainer_fb5def"
			}
		},
		964732: function(e, t, n) {
			e.exports = {
				wrapper: "wrapper__74bfa",
				icon: "icon__74bfa",
				errorIcon: "errorIcon__74bfa"
			}
		},
		324846: function(e, t, n) {
			e.exports = {
				clipPill: "clipPill_d762d7"
			}
		},
		813102: function(e, t, n) {
			e.exports = {
				container: "container_b7e1cb",
				gifFavoriteButton: "gifFavoriteButton_b7e1cb",
				giftCodeContainer: "giftCodeContainer_b7e1cb",
				referralContainer: "referralContainer_b7e1cb",
				pollContainer: "pollContainer_b7e1cb",
				confirmText: "confirmText_b7e1cb",
				threadRoleMentionFailure: "threadRoleMentionFailure_b7e1cb",
				nitroFileSizeUpsell: "nitroFileSizeUpsell_b7e1cb",
				nitroBadgeSvg: "nitroBadgeSvg_b7e1cb",
				ctaButtonContainer: "ctaButtonContainer_b7e1cb"
			}
		},
		125865: function(e, t, n) {
			e.exports = {
				container: "container__6f250"
			}
		},
		75905: function(e, t, n) {
			e.exports = {
				button: "button_c96cb2"
			}
		},
		400003: function(e, t, n) {
			e.exports = {
				oneByOneGrid: "oneByOneGrid_f4758a",
				oneByOneGridSingle: "oneByOneGridSingle_f4758a",
				oneByOneGridMosaic: "oneByOneGridMosaic_f4758a",
				oneByTwoGrid: "oneByTwoGrid_f4758a",
				oneByTwoLayoutThreeGrid: "oneByTwoLayoutThreeGrid_f4758a",
				oneByTwoGridItem: "oneByTwoGridItem_f4758a",
				itemContentContainer: "itemContentContainer_f4758a",
				lazyImg: "lazyImg_f4758a",
				oneByTwoSoloItem: "oneByTwoSoloItem_f4758a",
				oneByTwoDuoItem: "oneByTwoDuoItem_f4758a",
				twoByOneGrid: "twoByOneGrid_f4758a",
				twoByOneGridItem: "twoByOneGridItem_f4758a",
				threeByThreeGrid: "threeByThreeGrid_f4758a",
				lazyImgContainer: "lazyImgContainer_f4758a",
				twoByTwoGrid: "twoByTwoGrid_f4758a",
				visualMediaItemContainer: "visualMediaItemContainer_f4758a",
				isInAppComponentsV2: "isInAppComponentsV2_f4758a",
				nonVisualMediaItemContainer: "nonVisualMediaItemContainer_f4758a",
				nonVisualMediaItem: "nonVisualMediaItem_f4758a",
				hasFooter: "hasFooter_f4758a"
			}
		},
		308315: function(e, t, n) {
			e.exports = {
				inline: "inline__6c706",
				hiddenMosaicItem: "hiddenMosaicItem__6c706",
				obscured: "obscured__6c706",
				hiddenSpoiler: "hiddenSpoiler__6c706",
				hiddenExplicit: "hiddenExplicit__6c706",
				obscureVideoSpacing: "obscureVideoSpacing__6c706",
				mosaicItemContent: "mosaicItemContent__6c706",
				removeMosaicItemButton: "removeMosaicItemButton__6c706",
				spoilerRemoveMosaicItemButton: "spoilerRemoveMosaicItemButton__6c706 removeMosaicItemButton__6c706",
				mosaicItem: "mosaicItem__6c706",
				mosaicItemNoJustify: "mosaicItemNoJustify__6c706",
				mosaicItemFullWidth: "mosaicItemFullWidth__6c706",
				mosaicItemMediaMosaic: "mosaicItemMediaMosaic__6c706",
				hasFooter: "hasFooter__6c706",
				mosaicItemWithFooter: "mosaicItemWithFooter__6c706",
				hideOverflow: "hideOverflow__6c706",
				removeMosaicItemHoverButton: "removeMosaicItemHoverButton__6c706",
				downloadHoverButtonIcon: "downloadHoverButtonIcon__6c706"
			}
		},
		92254: function(e, t, n) {
			n.r(e.exports = {
				reactions: "reactions_f8896c",
				icon: "icon_f8896c",
				reactionBtn: "reactionBtn_f8896c",
				active: "active_f8896c",
				visible: "visible_f8896c",
				forceShow: "forceShow_f8896c",
				hideEmoji: "hideEmoji_f8896c",
				reaction: "reaction_f8896c",
				shakeReaction: "shakeReaction_f8896c",
				shake: "shake_f8896c",
				reactionReadOnly: "reactionReadOnly_f8896c",
				reactionCount: "reactionCount_f8896c",
				reactionMe: "reactionMe_f8896c",
				reactionInner: "reactionInner_f8896c",
				remainingReactions: "remainingReactions_f8896c",
				premiumIcon: "premiumIcon_f8896c",
				sparkles: "sparkles_f8896c",
				burstGlow: "burstGlow_f8896c"
			})
		},
		588429: function(e, t, n) {
			n.r(e.exports = {
				reactions: "reactions__23977",
				icon: "icon__23977",
				reactionBtn: "reactionBtn__23977",
				active: "active__23977",
				visible: "visible__23977",
				forceShow: "forceShow__23977",
				hideEmoji: "hideEmoji__23977",
				reaction: "reaction__23977",
				reactionCount: "reactionCount__23977",
				shakeReaction: "shakeReaction__23977",
				shake: "shake__23977",
				reactionReadOnly: "reactionReadOnly__23977",
				reactionMe: "reactionMe__23977",
				reactionInner: "reactionInner__23977",
				remainingReactions: "remainingReactions__23977",
				premiumIcon: "premiumIcon__23977",
				sparkles: "sparkles__23977",
				burstGlow: "burstGlow__23977"
			})
		},
		965935: function(e, t, n) {
			e.exports = {
				gameIcon: "gameIcon__5a366",
				gameMessageTooltip: "gameMessageTooltip__5a366",
				gameMessageTooltipContent: "gameMessageTooltipContent__5a366",
				textContainer: "textContainer__5a366",
				timestamp: "timestamp__5a366"
			}
		},
		806725: function(e, t, n) {
			e.exports = {
				container: "container__85015",
				buttonContainer: "buttonContainer__85015",
				messageContentContainer: "messageContentContainer__85015",
				iconContainer: "iconContainer__85015",
				icon: "icon__85015",
				nitroBadge: "nitroBadge__85015",
				nitroBadgeIcon: "nitroBadgeIcon__85015",
				nitroBadgeText: "nitroBadgeText__85015",
				premiumIcon: "premiumIcon__85015"
			}
		},
		215084: function(e, t, n) {
			e.exports = {
				reactionTooltip: "reactionTooltip_b49891",
				reactionTooltipEmoji: "reactionTooltipEmoji_b49891",
				reactionTooltipText: "reactionTooltipText_b49891",
				reactionTooltipInner: "reactionTooltipInner_b49891",
				burstReactionTooltipInner: "burstReactionTooltipInner_b49891",
				burstReactionTooltipMessage: "burstReactionTooltipMessage_b49891",
				burstReactionTooltipSpacer: "burstReactionTooltipSpacer_b49891",
				burstReactionTooltipPrompt: "burstReactionTooltipPrompt_b49891",
				burstReactionTooltipPromptClickable: "burstReactionTooltipPromptClickable_b49891",
				burstReactionTooltipNitroIcon: "burstReactionTooltipNitroIcon_b49891",
				burstReactionTooltipUpsellCta: "burstReactionTooltipUpsellCta_b49891"
			}
		},
		854422: function(e, t, n) {
			e.exports = {
				popoutContainer: "popoutContainer__8641f",
				mainContent: "mainContent__8641f",
				roleIconContainer: "roleIconContainer__8641f",
				roleName: "roleName__8641f",
				truncatingText: "truncatingText__8641f"
			}
		},
		872333: function(e, t, n) {
			e.exports = {
				effect: "effect_a9ddb3",
				effectsWrapper: "effectsWrapper_a9ddb3"
			}
		},
		981341: function(e, t, n) {
			n.r(e.exports = {
				effect: "effect__263e4",
				effects: "effects__263e4"
			})
		},
		994648: function(e, t, n) {
			n.r(e.exports = {
				effect: "effect_e5f2cb",
				effects: "effects_e5f2cb"
			})
		},
		582909: function(e, t, n) {
			e.exports = {
				statusCounts: "statusCounts_a4b24e",
				status: "status_a4b24e",
				statusWrapper: "statusWrapper_a4b24e",
				statusOnline: "statusOnline_a4b24e status_a4b24e",
				count: "count_a4b24e",
				statusOffline: "statusOffline_a4b24e status_a4b24e",
				channel: "channel_a4b24e",
				ended: "ended_a4b24e",
				channelIcon: "channelIcon_a4b24e",
				infoWrapper: "infoWrapper_a4b24e"
			}
		},
		273254: function(e, t, n) {
			e.exports = {
				separator: "separator_ae2544",
				infoTitle: "infoTitle_ae2544",
				infoBadge: "infoBadge_ae2544",
				headerLine: "headerLine_ae2544",
				tooltipContainer: "tooltipContainer_ae2544",
				infoIcon: "infoIcon_ae2544"
			}
		},
		583136: function(e, t, n) {
			e.exports = {
				guildInviteContainer: "guildInviteContainer__083ae",
				clickable: "clickable__083ae",
				cardHeightMeasure: "cardHeightMeasure__083ae",
				banner: "banner__083ae",
				mainContent: "mainContent__083ae",
				footer: "footer__083ae",
				floatingFooter: "floatingFooter__083ae",
				gradient: "gradient__083ae",
				footerContent: "footerContent__083ae",
				collapsedFooterContent: "collapsedFooterContent__083ae",
				buttonContainer: "buttonContainer__083ae",
				hideDetailsButtonContainer: "hideDetailsButtonContainer__083ae"
			}
		},
		860918: function(e, t, n) {
			e.exports = {
				mainContainer: "mainContainer__44492",
				compact: "compact__44492",
				content: "content__44492",
				embedCard: "embedCard__44492",
				selected: "selected__44492",
				isClickable: "isClickable__44492",
				messageContent: "messageContent__44492",
				channelNameContainer: "channelNameContainer__44492",
				channelName: "channelName__44492",
				iconContainer: "iconContainer__44492",
				avatarContainer: "avatarContainer__44492",
				usernameContainer: "usernameContainer__44492",
				username: "username__44492",
				systemTag: "systemTag__44492",
				centeredRowContainer: "centeredRowContainer__44492",
				dotMargin: "dotMargin__44492",
				buttonContainer: "buttonContainer__44492",
				footerIcon: "footerIcon__44492",
				footerAction: "footerAction__44492",
				dot: "dot__44492",
				spanCorrection: "spanCorrection__44492",
				footerContainer: "footerContainer__44492",
				annotationRow: "annotationRow__44492",
				alertActionIcon: "alertActionIcon__44492",
				alertActionSetCompletedIcon: "alertActionSetCompletedIcon__44492",
				alertActionsIconContainer: "alertActionsIconContainer__44492",
				titleCase: "titleCase__44492"
			}
		},
		126759: function(e, t, n) {
			e.exports = {
				mainContainer: "mainContainer_b99f57",
				compact: "compact_b99f57",
				content: "content_b99f57",
				flexLineBreak: "flexLineBreak_b99f57",
				embedCard: "embedCard_b99f57",
				cardContent: "cardContent_b99f57",
				cardHeader: "cardHeader_b99f57",
				cardHeaderContianer: "cardHeaderContianer_b99f57",
				subheader: "subheader_b99f57",
				cardFooter: "cardFooter_b99f57",
				iconContainer: "iconContainer_b99f57",
				usernameContainer: "usernameContainer_b99f57",
				username: "username_b99f57",
				systemTag: "systemTag_b99f57",
				centeredRowContainer: "centeredRowContainer_b99f57",
				footerIcon: "footerIcon_b99f57",
				footerAction: "footerAction_b99f57",
				spanCorrection: "spanCorrection_b99f57",
				alertsEnabledSubHeader: "alertsEnabledSubHeader_b99f57",
				alertsEnabledSubHeaderAvatarUsername: "alertsEnabledSubHeaderAvatarUsername_b99f57",
				dotSeparatedRow: "dotSeparatedRow_b99f57",
				footerRow: "footerRow_b99f57",
				dot: "dot_b99f57"
			}
		},
		614507: function(e, t, n) {
			e.exports = {
				container: "container__235ca",
				compact: "compact__235ca",
				content: "content__235ca",
				actionAnchor: "actionAnchor__235ca",
				iconContainer: "iconContainer__235ca",
				cozy: "cozy__235ca",
				icon: "icon__235ca",
				iconSize: "iconSize__235ca",
				action: "action__235ca"
			}
		},
		583512: function(e, t, n) {
			e.exports = {
				applicationName: "applicationName__9e50d",
				systemMessage: "systemMessage__9e50d"
			}
		},
		677972: function(e, t, n) {
			e.exports = {
				channelNameChange: "channelNameChange__2f82d"
			}
		},
		794446: function(e, t, n) {
			e.exports = {
				messageContent: "messageContent__2facc",
				alertIcon: "alertIcon__2facc"
			}
		},
		768921: function(e, t, n) {
			e.exports = {
				content: "content_e8c018",
				gameContainer: "gameContainer_e8c018",
				inlineIcon: "inlineIcon_e8c018"
			}
		},
		40450: function(e, t, n) {
			e.exports = {
				stageSystemMessage: "stageSystemMessage_e9ab2f",
				iconContainer: "iconContainer_e9ab2f",
				inviteToSpeakButtonWrapper: "inviteToSpeakButtonWrapper_e9ab2f",
				inviteToSpeakButtonInner: "inviteToSpeakButtonInner_e9ab2f"
			}
		},
		907273: function(e, t, n) {
			e.exports = {
				icon: "icon_b9588c"
			}
		},
		482893: function(e, t, n) {
			e.exports = {
				icon: "icon__80514"
			}
		},
		573510: function(e, t, n) {
			e.exports = {
				iconWrapper: "iconWrapper__9f20a",
				icon: "icon__9f20a",
				message: "message__9f20a",
				cannonWrapper: "cannonWrapper__9f20a",
				easterEggAnimationClickTarget: "easterEggAnimationClickTarget__9f20a",
				easterEggAnimationClickTargetTopLeft: "easterEggAnimationClickTargetTopLeft__9f20a",
				easterEggAnimationClickTargetTopRight: "easterEggAnimationClickTargetTopRight__9f20a",
				easterEggAnimationClickTargetBottomLeft: "easterEggAnimationClickTargetBottomLeft__9f20a",
				easterEggAnimationClickTargetBottomRight: "easterEggAnimationClickTargetBottomRight__9f20a",
				easterEggAnimation: "easterEggAnimation__9f20a",
				easterEggAnimationHideLeaf: "easterEggAnimationHideLeaf__9f20a"
			}
		},
		88729: function(e, t, n) {
			e.exports = {
				wrapper: "wrapper_e45a82",
				partyMembers: "partyMembers_e45a82",
				partyMember: "partyMember_e45a82",
				partyMemberKnown: "partyMemberKnown_e45a82 partyMember_e45a82",
				partyMemberEmpty: "partyMemberEmpty_e45a82 partyMember_e45a82",
				partyMemberUnknown: "partyMemberUnknown_e45a82 partyMember_e45a82",
				partyMemberUnknownIcon: "partyMemberUnknownIcon_e45a82",
				partyMemberOverflow: "partyMemberOverflow_e45a82"
			}
		},
		228127: function(e, t, n) {
			e.exports = {
				normalStylesDefault: "normalStylesDefault_a1443c",
				normalStylesImageOnlyAnswers: "normalStylesImageOnlyAnswers_a1443c",
				victorStyles: "victorStyles_a1443c",
				votedStyles: "votedStyles_a1443c"
			}
		},
		271629: function(e, t, n) {
			e.exports = {
				embed: "embed_f69538",
				container: "container_f69538",
				containerWithImage: "containerWithImage_f69538",
				imageContainer: "imageContainer_f69538",
				description: "description_f69538",
				victorAnswer: "victorAnswer_f69538",
				victorAnswerText: "victorAnswerText_f69538",
				button: "button_f69538",
				victorIcon: "victorIcon_f69538"
			}
		},
		56228: function(e, t, n) {
			e.exports = {
				enabled: "enabled_f4f0eb",
				attachmentImage: "attachmentImage_f4f0eb",
				radioBackground: "radioBackground_f4f0eb",
				radioForeground: "radioForeground_f4f0eb",
				checkbox: "checkbox_f4f0eb",
				checkboxSelected: "checkboxSelected_f4f0eb"
			}
		},
		241127: function(e, t, n) {
			e.exports = {
				answersContainer: "answersContainer__10758",
				answer: "answer__10758",
				currentlyVoting: "currentlyVoting__10758",
				attachment: "attachment__10758",
				attachmentWithResults: "attachmentWithResults__10758",
				emoji: "emoji__10758",
				mediaMissing: "mediaMissing__10758",
				selectedIcon: "selectedIcon__10758",
				pollAnswerIcon: "pollAnswerIcon__10758",
				votesData: "votesData__10758"
			}
		},
		484953: function(e, t, n) {
			e.exports = {
				container: "container__0be77",
				header: "header__0be77",
				question: "question__0be77",
				prompt: "prompt__0be77",
				detailsText: "detailsText__0be77",
				detailsTextButton: "detailsTextButton__0be77",
				interactive: "interactive__0be77",
				bottomBar: "bottomBar__0be77",
				secondaryAction: "secondaryAction__0be77",
				tertiaryAction: "tertiaryAction__0be77",
				buttonPresentation: "buttonPresentation__0be77",
				secondaryButtonPresentation: "secondaryButtonPresentation__0be77"
			}
		},
		709893: function(e, t, n) {
			e.exports = {
				answersContainer: "answersContainer__4c520",
				answer: "answer__4c520",
				answerInner: "answerInner__4c520",
				currentlyVoting: "currentlyVoting__4c520",
				selected: "selected__4c520",
				emoji: "emoji__4c520",
				label: "label__4c520",
				votePercentageBar: "votePercentageBar__4c520",
				votesData: "votesData__4c520",
				voteCount: "voteCount__4c520",
				voteCountButton: "voteCountButton__4c520",
				answerSelectionIcon: "answerSelectionIcon__4c520"
			}
		},
		277586: function(e, t, n) {
			e.exports = {
				potionBadge: "potionBadge__18061"
			}
		},
		150481: function(e, t, n) {
			e.exports = {
				sm: "sm__0d948",
				md: "md__0d948"
			}
		},
		271818: function(e, t, n) {
			e.exports = {
				invalidWrapper: "invalidWrapper_ff4e03",
				invalid: "invalid_ff4e03",
				buttonContainer: "buttonContainer_ff4e03",
				metadata: "metadata_ff4e03",
				container: "container_ff4e03",
				tile: "tile_ff4e03",
				title: "title_ff4e03",
				tagline: "tagline_ff4e03",
				actions: "actions_ff4e03",
				media: "media_ff4e03",
				referral: "referral_ff4e03",
				description: "description_ff4e03"
			}
		},
		587862: function(e, t, n) {
			e.exports = {
				content: "content__75e8e",
				contentCoachmark: "contentCoachmark__75e8e",
				innerContent: "innerContent__75e8e",
				innerGlow: "innerGlow__75e8e",
				outerGlow: "outerGlow__75e8e",
				innerContentCoachmark: "innerContentCoachmark__75e8e",
				subContent: "subContent__75e8e",
				avatars: "avatars__75e8e",
				recipientUserAvatar: "recipientUserAvatar__75e8e",
				recipientUserAvatarCoachmark: "recipientUserAvatarCoachmark__75e8e",
				currentUserAvatar: "currentUserAvatar__75e8e",
				currentUserAvatarCoachmark: "currentUserAvatarCoachmark__75e8e",
				textContainer: "textContainer__75e8e",
				subHeaderText: "subHeaderText__75e8e",
				subHeaderTextCoachmark: "subHeaderTextCoachmark__75e8e",
				button: "button__75e8e",
				buttonSecondary: "buttonSecondary__75e8e",
				buttonSecondaryCoachmark: "buttonSecondaryCoachmark__75e8e",
				buttonContentContainer: "buttonContentContainer__75e8e",
				buttonText: "buttonText__75e8e",
				buttonTextPrimary: "buttonTextPrimary__75e8e",
				buttonTextPrimaryCoachmark: "buttonTextPrimaryCoachmark__75e8e",
				buttonTextSecondary: "buttonTextSecondary__75e8e",
				buttonTextSecondaryCoachmark: "buttonTextSecondaryCoachmark__75e8e",
				buttonContainer: "buttonContainer__75e8e",
				connector: "connector__75e8e",
				rightPopoutConnector: "rightPopoutConnector__75e8e",
				leftPopoutConnector: "leftPopoutConnector__75e8e"
			}
		},
		299491: function(e, t, n) {
			e.exports = {
				tooltipTextContainer: "tooltipTextContainer__0ca35",
				nitroWheel: "nitroWheel__0ca35",
				tooltipText: "tooltipText__0ca35"
			}
		},
		628755: function(e, t, n) {
			e.exports = {
				artContainer: "artContainer_ade26d",
				modalContainer: "modalContainer_ade26d",
				bodyContainer: "bodyContainer_ade26d"
			}
		},
		875378: function(e, t, n) {
			e.exports = {
				ticketIcon: "ticketIcon__0557e"
			}
		},
		49791: function(e, t, n) {
			e.exports = {
				popout: "popout_d5c2c4",
				staffBadge: "staffBadge_d5c2c4",
				nameWrapper: "nameWrapper_d5c2c4",
				header: "header_d5c2c4",
				description: "description_d5c2c4",
				avatar: "avatar_d5c2c4"
			}
		},
		582835: function(e, t, n) {
			e.exports = {
				partnerBranding: "partnerBranding__83420",
				partnerBrandingGameTile: "partnerBrandingGameTile__83420",
				partnerBrandingLogotype: "partnerBrandingLogotype__83420",
				partnerBrandingLogotypeWithCosponsor: "partnerBrandingLogotypeWithCosponsor__83420",
				cosponsorBrandSeparatorWrapper: "cosponsorBrandSeparatorWrapper__83420",
				cosponsorBrandSeparator: "cosponsorBrandSeparator__83420"
			}
		},
		485662: function(e, t, n) {
			e.exports = {
				wrapper: "wrapper_ef0e9b",
				percentCompleteWrapper: "percentCompleteWrapper_ef0e9b",
				percentCompleteLabel: "percentCompleteLabel_ef0e9b",
				progressBar: "progressBar_ef0e9b",
				progressBarFill: "progressBarFill_ef0e9b",
				percentCompleteLabelOffset: "percentCompleteLabelOffset_ef0e9b"
			}
		},
		286737: function(e, t, n) {
			e.exports = {
				promotedTag: "promotedTag__1d868",
				promotedTagBackground: "promotedTagBackground__1d868"
			}
		},
		166246: function(e, t, n) {
			e.exports = {
				container: "container__0d029",
				info: "info__0d029",
				header: "header__0d029",
				headerIcon: "headerIcon__0d029",
				warning: "warning__0d029",
				danger: "danger__0d029",
				cta: "cta__0d029",
				ctaInner: "ctaInner__0d029",
				refreshIcon: "refreshIcon__0d029",
				inFlight: "inFlight__0d029"
			}
		},
		463910: function(e, t, n) {
			e.exports = {
				questsCard: "questsCard__72a00"
			}
		},
		717735: function(e, t, n) {
			e.exports = {
				outerContainer: "outerContainer__2055a",
				outerContainerNoProgress: "outerContainerNoProgress__2055a",
				outerContainerSm: "outerContainerSm__2055a",
				outerContainerXs: "outerContainerXs__2055a",
				gridImg: "gridImg__2055a",
				gridText: "gridText__2055a",
				gridCtaButtons: "gridCtaButtons__2055a",
				gridProgressBar: "gridProgressBar__2055a",
				questRewardGiftInventory: "questRewardGiftInventory__2055a",
				questRewardEmbed: "questRewardEmbed__2055a",
				questRewardEmbedSm: "questRewardEmbedSm__2055a",
				questRewardEmbedXs: "questRewardEmbedXs__2055a",
				taskDetails: "taskDetails__2055a",
				taskInstructions: "taskInstructions__2055a",
				ctaButtonContainer: "ctaButtonContainer__2055a",
				questEnrollmentBlockedButton: "questEnrollmentBlockedButton__2055a",
				ctaButtonWrapper: "ctaButtonWrapper__2055a",
				ctaButtonInner: "ctaButtonInner__2055a",
				learnMoreLink: "learnMoreLink__2055a",
				ctaTooltipText: "ctaTooltipText__2055a",
				root: "root__2055a",
				rewardTileWrapper: "rewardTileWrapper__2055a",
				rewardTileExpired: "rewardTileExpired__2055a",
				rewardTileExpirationTooltip: "rewardTileExpirationTooltip__2055a",
				separator: "separator__2055a",
				microphoneContainer: "microphoneContainer__2055a"
			}
		},
		491821: function(e, t, n) {
			e.exports = {
				outerContainer: "outerContainer__092f9",
				outerContainerGiftInventory: "outerContainerGiftInventory__092f9",
				outerContainerEmbed: "outerContainerEmbed__092f9",
				questSplash: "questSplash__092f9",
				header: "header__092f9",
				outerContainerXs: "outerContainerXs__092f9",
				headerContent: "headerContent__092f9",
				headerContentEmbed: "headerContentEmbed__092f9",
				headerExpandedContent: "headerExpandedContent__092f9",
				headerExpandedWrapper: "headerExpandedWrapper__092f9",
				headerCollapsedContent: "headerCollapsedContent__092f9",
				headerCollapsedClickableContainer: "headerCollapsedClickableContainer__092f9",
				headerCollapsedContentRewardWrapper: "headerCollapsedContentRewardWrapper__092f9",
				headerCollapsedRewardTile: "headerCollapsedRewardTile__092f9",
				headerCollapsedContentCopyWrapper: "headerCollapsedContentCopyWrapper__092f9",
				headerCollapsedContentCopyLogos: "headerCollapsedContentCopyLogos__092f9",
				iconLogotypeContainer: "iconLogotypeContainer__092f9",
				partnerBranding: "partnerBranding__092f9",
				partnerBrandingLogotypes: "partnerBrandingLogotypes__092f9",
				questInfo: "questInfo__092f9",
				heading: "heading__092f9",
				iconsContainer: "iconsContainer__092f9",
				iconWrapper: "iconWrapper__092f9",
				shareButton: "shareButton__092f9"
			}
		},
		723781: function(e, t, n) {
			e.exports = {
				questsCollectibleReward: "questsCollectibleReward__16be0"
			}
		},
		355060: function(e, t, n) {
			e.exports = {
				container: "container__3dd8b",
				wide: "wide__3dd8b",
				tall: "tall__3dd8b",
				contentContainer: "contentContainer__3dd8b",
				buttonContainer: "buttonContainer__3dd8b",
				button: "button__3dd8b",
				imgContainer: "imgContainer__3dd8b",
				missingQuestImage: "missingQuestImage__3dd8b"
			}
		},
		444879: function(e, t, n) {
			e.exports = {
				container: "container_c55cae",
				wide: "wide_c55cae",
				tall: "tall_c55cae",
				contentContainer: "contentContainer_c55cae",
				buttonContainer: "buttonContainer_c55cae",
				button: "button_c55cae",
				imgContainer: "imgContainer_c55cae",
				missingQuestImage: "missingQuestImage_c55cae"
			}
		},
		626314: function(e, t, n) {
			e.exports = {
				spinner: "spinner__65252"
			}
		},
		332173: function(e, t, n) {
			e.exports = {
				desktopTooltip: "desktopTooltip_fed3a2",
				infoIcon: "infoIcon_fed3a2"
			}
		},
		995717: function(e, t, n) {
			e.exports = {
				container: "container__0ed20",
				content: "content__0ed20",
				message: "message__0ed20",
				nestedAccessories: "nestedAccessories__0ed20",
				footerContainer: "footerContainer__0ed20",
				footerText: "footerText__0ed20",
				originIcon: "originIcon__0ed20"
			}
		},
		537670: function(e, t, n) {
			e.exports = {
				avatar: "avatar__8c0e2",
				username: "username__8c0e2",
				timestampSeparator: "timestampSeparator__8c0e2",
				timestamp: "timestamp__8c0e2"
			}
		},
		524438: function(e, t, n) {
			e.exports = {
				safetyPolicyNoticeContainer: "safetyPolicyNoticeContainer_e80b85",
				noticeContent: "noticeContent_e80b85",
				headerRow: "headerRow_e80b85",
				warningIcon: "warningIcon_e80b85",
				incidentTiming: "incidentTiming_e80b85",
				noticeBody: "noticeBody_e80b85",
				detailsButton: "detailsButton_e80b85",
				footerContainer: "footerContainer_e80b85"
			}
		},
		94740: function(e, t, n) {
			e.exports = {
				safetyPolicyNoticeContainer: "safetyPolicyNoticeContainer__86361",
				noticeContent: "noticeContent__86361",
				headerRow: "headerRow__86361",
				icon: "icon__86361",
				incidentTiming: "incidentTiming__86361",
				noticeBody: "noticeBody__86361",
				detailsButton: "detailsButton__86361",
				defaultFooterContainer: "defaultFooterContainer__86361",
				dangerFooterContainer: "dangerFooterContainer__86361"
			}
		},
		782682: function(e, t, n) {
			e.exports = {
				searchIndexAnimation: "searchIndexAnimation_e1fee6",
				searchIndexBackground: "searchIndexBackground_e1fee6",
				searchIndexForeground: "searchIndexForeground_e1fee6",
				magnifyingGlass: "magnifyingGlass_e1fee6",
				mask: "mask_e1fee6"
			}
		},
		930362: function(e, t, n) {
			e.exports = {
				container: "container__86c0f"
			}
		},
		548185: function(e, t, n) {
			e.exports = {
				container: "container__02a39",
				searchResult: "searchResult__02a39",
				message: "message__02a39",
				buttonsContainer: "buttonsContainer__02a39",
				button: "button__02a39"
			}
		},
		378869: function(e, t, n) {
			e.exports = {
				searchResultGroup: "searchResultGroup_c68065",
				channelNameContainer: "channelNameContainer_c68065",
				channelNameText: "channelNameText_c68065",
				parentChannelName: "parentChannelName_c68065",
				parentChannelNameClickable: "parentChannelNameClickable_c68065",
				parentChannelNameText: "parentChannelNameText_c68065",
				channelNameIcon: "channelNameIcon_c68065",
				parentChannelNameIcon: "parentChannelNameIcon_c68065",
				resultsBlocked: "resultsBlocked_c68065",
				resultsBlockedImage: "resultsBlockedImage_c68065"
			}
		},
		774599: function(e, t, n) {
			e.exports = {
				toast: "toast__1562f"
			}
		},
		282940: function(e, t, n) {
			e.exports = {
				clickableSticker: "clickableSticker_abd7a8",
				stickerName: "stickerName_abd7a8",
				stickerIcon: "stickerIcon_abd7a8"
			}
		},
		673206: function(e, t, n) {
			e.exports = {
				popoutContent: "popoutContent_dfa983",
				stickersList: "stickersList_dfa983",
				packActions: "packActions_dfa983",
				popoutLoader: "popoutLoader_dfa983",
				nonInteractingSticker: "nonInteractingSticker_dfa983"
			}
		},
		156189: function(e, t, n) {
			e.exports = {
				badge: "badge__6ba43"
			}
		},
		955344: function(e, t, n) {
			e.exports = {
				spine: "spine__9271d",
				systemMessageSpine: "systemMessageSpine__9271d",
				cozy: "cozy__9271d",
				container: "container__9271d",
				systemMessageContainer: "systemMessageContainer__9271d",
				topLine: "topLine__9271d",
				name: "name__9271d",
				cta: "cta__9271d",
				bottomLine: "bottomLine__9271d",
				timestamp: "timestamp__9271d"
			}
		},
		668275: function(e, t, n) {
			e.exports = {
				modal: "modal_de9b99",
				heading: "heading_de9b99",
				divider: "divider_de9b99",
				image: "image_de9b99",
				body: "body_de9b99",
				applyingTo: "applyingTo_de9b99",
				footer: "footer_de9b99",
				anomaly: "anomaly_de9b99",
				error: "error_de9b99",
				spinner: "spinner_de9b99",
				buttonCopy: "buttonCopy_de9b99",
				tooltip: "tooltip_de9b99"
			}
		},
		787508: function(e, t, n) {
			e.exports = {
				avatars: "avatars_c37975"
			}
		},
		763010: function(e, t, n) {
			e.exports = {
				channel: "channel__8f92d",
				channelLeft: "channelLeft__8f92d"
			}
		},
		429495: function(e, t, n) {
			e.exports = {
				welcomeCTA: "welcomeCTA_f5d1e2",
				welcomeCTAButtonOuter: "welcomeCTAButtonOuter_f5d1e2",
				welcomeCTAButton: "welcomeCTAButton_f5d1e2",
				welcomeCTASticker: "welcomeCTASticker_f5d1e2"
			}
		},
		806726: function(e, t, n) {
			e.exports = {
				containerScrollGradient: "containerScrollGradient_a54921"
			}
		},
		845533: function(e, t, n) {
			e.exports = {
				container: "container__000a3",
				header: "header__000a3",
				headerBackground: "headerBackground__000a3",
				headerImage: "headerImage__000a3",
				scroller: "scroller__000a3",
				scrollContent: "scrollContent__000a3",
				content: "content__000a3",
				details: "details__000a3",
				benefits: "benefits__000a3",
				description: "description__000a3"
			}
		},
		812743: function(e, t, n) {
			e.exports = {
				container: "container__62119",
				image: "image__62119",
				description: "description__62119",
				card: "card__62119",
				body: "body__62119",
				purchaseBtn: "purchaseBtn__62119",
				benefits: "benefits__62119",
				benefitsContainer: "benefitsContainer__62119",
				benefitsList: "benefitsList__62119",
				cardBenefit: "cardBenefit__62119",
				cardBenefitIcon: "cardBenefitIcon__62119",
				benefitsSummary: "benefitsSummary__62119"
			}
		},
		914439: function(e, t, n) {
			e.exports = {
				container: "container__4216d"
			}
		},
		875231: function(e, t, n) {
			n.r(e.exports = {
				video: "video__1689b",
				container: "container__1689b",
				image: "image__1689b",
				title: "title__1689b",
				lead: "lead__1689b",
				added: "added__1689b title__1689b",
				fixed: "fixed__1689b title__1689b",
				improved: "improved__1689b title__1689b",
				progress: "progress__1689b title__1689b",
				marginTop: "marginTop__1689b",
				footer: "footer__1689b",
				socialLink: "socialLink__1689b",
				premiumBanner: "premiumBanner__1689b",
				premiumIcon: "premiumIcon__1689b",
				date: "date__1689b"
			})
		}
	}
]);
//# sourceMappingURL=2ac6bf67922aed08.js.map