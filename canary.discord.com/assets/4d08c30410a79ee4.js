"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
	["22173"], {
		824578: function(e, t, n) {
			n.d(t, {
				Q: () => i
			}), n(539854);
			var r = n(442837),
				s = n(699516),
				l = n(111583),
				a = n(594174);

			function i(e) {
				let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Number.MAX_SAFE_INTEGER;
				return (0, r.Wu)([a.default, l.Z, s.Z], () => {
					var n;
					let r = null == (n = a.default.getCurrentUser()) ? void 0 : n.id,
						i = l.Z.getTypingUsers(e),
						o = [];
					for (let e in i) {
						if (o.length >= t) break;
						let n = a.default.getUser(e);
						null != n && n.id !== r && (s.Z.isBlockedOrIgnored(n.id) || o.push(n.id))
					}
					return o
				}, [e, t])
			}
		},
		73315: function(e, t, n) {
			n.d(t, {
				Z: () => c
			});
			var r = n(255367);
			n(73800);
			var s = n(120356),
				l = n.n(s),
				a = n(481060),
				i = n(936141),
				o = n(500984);
			let c = e => {
				let {
					obscureReason: t,
					iconClassname: n
				} = e;
				switch (t) {
					case i.wk.EXPLICIT_CONTENT:
					case i.wk.GORE_CONTENT:
						return (0, r.jsx)(a.fFY, {
							className: l()(n, o.obscuredIcon),
							color: "white"
						});
					case i.wk.SPOILER:
						return (0, r.jsx)(a.tEF, {
							size: "md",
							color: "currentColor",
							className: n
						});
					default:
						return null
				}
			}
		},
		404616: function(e, t, n) {
			n.d(t, {
				Lp: () => ea,
				NN: () => eu,
				TJ: () => ei,
				ZP: () => eo,
				au: () => ef,
				kZ: () => eg,
				m9: () => eh,
				og: () => ep
			}), n(388685);
			var r = n(255367),
				s = n(73800),
				l = n(120356),
				a = n.n(l),
				i = n(512722),
				o = n.n(i),
				c = n(913527),
				u = n.n(c),
				d = n(94171),
				m = n(91192),
				h = n(442837),
				g = n(692547),
				f = n(481060),
				b = n(738619),
				p = n(393238),
				j = n(963374),
				x = n(884338),
				v = n(168107),
				O = n(480916),
				y = n(446489),
				P = n(824578),
				N = n(95398),
				C = n(247206),
				w = n(406432),
				Z = n(169525),
				S = n(566006),
				T = n(255269),
				k = n(937889),
				M = n(443877),
				_ = n(524444),
				I = n(287151),
				R = n(267128),
				E = n(695346),
				A = n(433355),
				L = n(592125),
				D = n(496675),
				B = n(699516),
				F = n(451478),
				z = n(55935),
				U = n(109434),
				W = n(456269),
				H = n(109590),
				G = n(660189),
				Q = n(208970),
				J = n(73315),
				X = n(470623),
				q = n(196255),
				K = n(858543),
				V = n(265641),
				Y = n(627896),
				$ = n(883728),
				ee = n(981631),
				et = n(217702),
				en = n(388032),
				er = n(602512),
				es = n(73433);

			function el(e) {
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
			let ea = 72,
				ei = 72,
				eo = s.memo(function(e) {
					let {
						threadId: t,
						goToThread: n,
						observePostVisibilityAnalytics: l,
						overrideMedia: i,
						className: c,
						containerWidth: u
					} = e, {
						channel: g,
						isOpen: b,
						messageCount: j,
						firstMessage: x,
						content: v,
						media: O
					} = function(e) {
						let {
							threadId: t,
							overrideMedia: n
						} = e, r = (0, h.e7)([L.Z], () => L.Z.getChannel(t));
						o()(null != r, "the thread should not be null here, a store must have missed an update");
						let s = (0, h.e7)([A.ZP], () => A.ZP.getCurrentSidebarChannelId(r.parent_id) === r.id),
							{
								firstMessage: l
							} = (0, H.cl)(r),
							{
								content: a,
								firstMedia: i
							} = (0, W.mX)({
								firstMessage: l
							}),
							{
								messageCountText: c
							} = (0, W.nP)(r);
						return {
							channel: r,
							isOpen: s,
							messageCount: c,
							firstMessage: l,
							content: a,
							media: null != n ? n : i
						}
					}({
						threadId: t,
						overrideMedia: i
					}), {
						ref: y,
						height: P
					} = (0, p.ZP)(), N = (0, X.xH)(e => e.setCardHeight, d.X);
					s.useEffect(() => {
						null != P && N(t, P)
					}, [P, N, t]), s.useEffect(() => {
						null == l || l(y.current, t)
					}, [y, l, t]);
					let C = s.useRef(null),
						{
							handleLeftClick: w,
							handleRightClick: Z
						} = (0, $.Z)({
							facepileRef: C,
							goToThread: n,
							channel: g
						}),
						S = (0, m.JA)(t),
						{
							role: T,
							onFocus: k
						} = S,
						M = function(e, t) {
							if (null == e) return {};
							var n, r, s = function(e, t) {
								if (null == e) return {};
								var n, r, s = {},
									l = Object.keys(e);
								for (r = 0; r < l.length; r++) n = l[r], t.indexOf(n) >= 0 || (s[n] = e[n]);
								return s
							}(e, t);
							if (Object.getOwnPropertySymbols) {
								var l = Object.getOwnPropertySymbols(e);
								for (r = 0; r < l.length; r++) n = l[r], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (s[n] = e[n])
							}
							return s
						}(S, ["role", "onFocus"]),
						{
							isFocused: _,
							handleFocus: I,
							handleBlur: R
						} = (0, V.Z)(k);
					return (0, r.jsxs)("div", {
						ref: y,
						"data-item-id": t,
						onClick: w,
						onContextMenu: Z,
						className: a()(er.container, c, {
							[er.isOpen]: b
						}),
						children: [(0, r.jsx)(f.P3F, el({
							onClick: w,
							focusProps: {
								ringTarget: y
							},
							onContextMenu: Z,
							"aria-label": en.intl.formatToPlainString(en.t.pgYN6e, {
								title: g.name,
								count: j
							}),
							className: er.focusTarget,
							onFocus: I,
							onBlur: R
						}, M)), (0, r.jsxs)("div", {
							className: er.left,
							children: [(0, r.jsx)(f.y5t, {
								children: (0, r.jsx)(ec, {
									channel: g,
									firstMessage: x,
									content: v,
									hasMediaAttachment: null != O,
									containerWidth: u
								})
							}), (0, r.jsx)(f.Rny, {
								enabled: !_,
								children: (0, r.jsx)(em, {
									channel: g,
									firstMessage: x,
									facepileRef: C
								})
							})]
						}), (null == x ? void 0 : x.blocked) || null == O ? null : (0, r.jsx)(ex, {
							channel: g,
							firstMedia: O
						})]
					})
				});

			function ec(e) {
				let {
					channel: t,
					firstMessage: n,
					content: s,
					hasMediaAttachment: l,
					containerWidth: i
				} = e, {
					isNew: o,
					hasUnreads: c
				} = (0, W.J$)(t), u = eu(t), {
					postTitleRef: d,
					isNewBadgeOverflow: m
				} = (0, Y.x)(o, 24, i);
				return (0, r.jsxs)("div", {
					className: er.body,
					children: [(0, r.jsx)(K.ZP, {
						channel: t
					}), (0, r.jsx)("div", {
						className: a()(er.header, {
							[er.withNewBadgeOverflow]: m
						}),
						children: (0, r.jsxs)("div", {
							className: er.headerText,
							children: [(0, r.jsx)(f.X6q, {
								variant: "heading-lg/semibold",
								color: c ? "header-primary" : "text-muted",
								lineClamp: 2,
								className: er.postTitleText,
								children: (0, r.jsxs)("span", {
									ref: d,
									children: [u, o && (0, r.jsx)("span", {
										className: er.newBadgeWrapper,
										children: (0, r.jsx)(f.IGR, {
											className: er.newBadge,
											color: g.Z.unsafe_rawColors.BRAND_260.css,
											text: en.intl.string(en.t.y2b7CA)
										})
									})]
								})
							}), o && m && (0, r.jsx)(f.IGR, {
								className: er.newBadge,
								color: g.Z.unsafe_rawColors.BRAND_260.css,
								text: en.intl.string(en.t.y2b7CA)
							})]
						})
					}), (0, r.jsx)("div", {
						className: er.message,
						children: (0, r.jsx)(ed, {
							channel: t,
							message: n,
							content: s,
							hasMediaAttachment: l,
							hasUnreads: c
						})
					})]
				})
			}

			function eu(e) {
				let t = (0, h.e7)([Q.Z], () => Q.Z.getHasSearchResults(e.parent_id)),
					n = (0, h.e7)([Q.Z], () => Q.Z.getSearchQuery(e.parent_id)),
					r = s.useMemo(() => (0, j.nC)(t && null != n ? n : ""), [t, n]);
				return s.useMemo(() => (0, k.ZP)({
					content: e.name,
					embeds: []
				}, {
					postProcessor: r
				}).content, [e.name, r])
			}
			let ed = s.memo(function(e) {
				let {
					message: t,
					channel: n,
					content: s,
					hasMediaAttachment: l,
					hasUnreads: i
				} = e, {
					isBlocked: o,
					isIgnored: c
				} = (0, h.cj)([B.Z], () => ({
					isBlocked: null != t && B.Z.isBlockedForMessage(t),
					isIgnored: null != t && B.Z.isIgnoredForMessage(t)
				})), u = (0, h.e7)([G.Z], () => G.Z.isLoading(n.id)), d = (0, h.e7)([D.Z], () => D.Z.can(ee.Plq.MANAGE_MESSAGES, n)), m = E.cC.useSetting(), g = null;
				if (o) g = (0, r.jsx)(f.Text, {
					className: er.blockedMessage,
					variant: "text-sm/medium",
					color: "text-muted",
					children: en.intl.string(en.t.Lkp2fH)
				});
				else if (c) g = (0, r.jsx)(f.Text, {
					className: er.blockedMessage,
					variant: "text-sm/medium",
					color: "text-muted",
					children: en.intl.string(en.t.yWK7ZG)
				});
				else {
					let {
						contentPlaceholder: e,
						renderedContent: n
					} = null == t ? {
						contentPlaceholder: null,
						renderedContent: null
					} : (0, R.f)(t, s, o, c, a()(er.messageContent, es.inlineFormat, es.__invalid_smallFontSize), {
						leadingIconClass: er.messageContentLeadingIcon,
						trailingIconClass: er.messageContentTrailingIcon,
						iconSize: et.WW
					});
					g = null != n ? (0, r.jsx)(f.Text, {
						variant: "text-sm/semibold",
						color: i ? "header-secondary" : "text-muted",
						children: n
					}) : l ? null : (0, r.jsx)(f.Text, {
						tag: "span",
						variant: "text-sm/medium",
						color: i ? "header-secondary" : "text-muted",
						className: er.messageContent,
						children: null == t ? u ? null : en.intl.string(en.t.mE3KJC) : e
					})
				}
				return (0, r.jsxs)(N.aQ.Provider, {
					value: (0, T.Z)(m, d),
					children: [!o && (0, r.jsx)(q.Z, {
						channel: n,
						message: t,
						renderColon: null != g,
						hasUnreads: i
					}), (0, r.jsx)(f.Rny, {
						className: er.messageFocusBlock,
						children: g
					})]
				})
			});

			function em(e) {
				let {
					channel: t,
					facepileRef: n,
					firstMessage: s
				} = e, l = (0, P.Q)(t.id), a = (null == s ? void 0 : s.reactions) != null && s.reactions.length > 0;
				return (0, r.jsxs)("div", {
					className: er.footer,
					children: [a || null == s ? null : (0, r.jsx)(eg, {
						firstMessage: s,
						channel: t
					}), null == s ? null : (0, r.jsx)(ef, {
						firstMessage: s,
						channel: t
					}), (0, r.jsx)(eh, {
						channel: t,
						iconSize: 14
					}), (0, r.jsx)("span", {
						className: er.bullet,
						children: "•"
					}), l.length > 0 ? (0, r.jsxs)("div", {
						className: er.typing,
						children: [(0, r.jsx)(ep, {
							channel: t,
							userIds: l,
							facepileRef: n
						}), (0, r.jsx)("div", {
							className: er.dots,
							children: (0, r.jsx)(f.bbz, {
								themed: !0,
								dotRadius: 2
							})
						}), (0, r.jsx)(b.ZP, {
							channel: t,
							className: er.typingUsers,
							renderDots: !1
						})]
					}) : (0, r.jsx)(eb, {
						channel: t
					})]
				})
			}

			function eh(e) {
				let {
					channel: t,
					iconSize: n,
					showReadState: s = !1
				} = e, {
					messageCountText: l,
					unreadCount: i
				} = (0, W.nP)(t);
				return (0, r.jsxs)("div", {
					className: a()(er.messageCountBox, {
						[er.hasRead]: s && null == i
					}),
					children: [(0, r.jsx)("span", {
						className: er.messageCountIcon,
						children: (0, r.jsx)(f.kBi, {
							size: "custom",
							color: "currentColor",
							width: n,
							height: n
						})
					}), "number" == typeof l ? (0, r.jsx)(y.Z, {
						value: l,
						digitWidth: 9,
						className: er.messageCountText
					}) : (0, r.jsx)("div", {
						className: er.messageCountText,
						children: l
					}), null == i ? null : (0, r.jsxs)(f.Text, {
						className: er.newMessageCount,
						variant: "text-sm/semibold",
						color: "text-brand",
						children: ["(", en.intl.format(en.t.z3PEtr, {
							count: i
						}), ")"]
					})]
				})
			}

			function eg(e) {
				let {
					firstMessage: t,
					channel: n
				} = e, s = (0, h.e7)([L.Z], () => L.Z.getChannel(n.parent_id)), l = (0, W.Bs)(s), {
					disableReactionCreates: a,
					isLurking: i,
					isPendingMember: o
				} = (0, M.Z)(n);
				return null == l || a ? null : (0, r.jsx)(I.le, {
					className: er.updateReactionButton,
					message: t,
					readOnly: n.isArchivedLockedThread(),
					useChatFontScaling: !1,
					isLurking: i,
					isPendingMember: o,
					emoji: l,
					hideCount: !0,
					count: 0,
					burst_count: 0,
					me: !1,
					me_burst: !1,
					type: S.O.NORMAL,
					emojiSize: "reaction",
					emojiSizeTooltip: "reaction"
				})
			}

			function ef(e) {
				var t;
				let {
					firstMessage: n,
					channel: s
				} = e, l = (0, W.IN)(n), {
					disableReactionUpdates: a,
					isLurking: i,
					isPendingMember: o
				} = (0, M.Z)(s);
				return null == l ? null : (0, r.jsx)(I.le, el({
					className: er.updateReactionButton,
					message: n,
					readOnly: a || s.isArchivedLockedThread(),
					isLurking: i,
					isPendingMember: o,
					useChatFontScaling: !1,
					type: l.burst_count >= l.count ? S.O.BURST : S.O.NORMAL,
					emojiSize: "reaction",
					emojiSizeTooltip: "reaction"
				}, l), "".concat(null != (t = l.emoji.id) ? t : 0, ":").concat(l.emoji.name))
			}

			function eb(e) {
				var t;
				let {
					channel: n
				} = e, {
					sortOrder: s
				} = (0, U.H)(n.parent_id), l = (0, W.xw)(n, s), a = null == (t = n.threadMetadata) ? void 0 : t.createTimestamp, i = null == a ? null : en.intl.formatToPlainString(en.t["13euCQ"], {
					timestamp: (0, z.vc)(u()(a), "LLLL")
				});
				return (0, r.jsx)(f.ua7, {
					text: i,
					tooltipClassName: er.timestampTooltip,
					children: e => {
						var t, n;
						return (0, r.jsx)(f.Text, (t = el({
							className: er.__invalid_activityText,
							variant: "text-sm/normal",
							color: "header-secondary"
						}, e), n = n = {
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

			function ep(e) {
				let {
					channel: t,
					userIds: n,
					facepileRef: s
				} = e, l = (0, W.iM)(t, n);
				return (0, r.jsx)("div", {
					ref: s,
					children: (0, r.jsx)(x.ZP, {
						className: er.__invalid_facepile,
						showDefaultAvatarsForNullUsers: !0,
						guildId: t.guild_id,
						users: l,
						max: 5,
						size: 16,
						hideMoreUsers: !0,
						showUserPopout: !0
					})
				})
			}

			function ej(e) {
				let {
					firstMedia: t,
					shouldObscure: n,
					obscureReason: s,
					shouldShowAgeVerification: l
				} = e, i = (0, h.e7)([F.Z], () => F.Z.isFocused()), o = (0, w.d$)(t.src), c = E.QK.useSetting(), u = (0, Z.MC)(s), {
					src: d,
					width: m,
					height: g,
					alt: b
				} = t;
				if (l) {
					var p;
					return (0, r.jsx)("div", {
						"aria-label": null != (p = null != u ? u : b) ? p : en.intl.string(en.t.hqwnc3),
						className: a()(er.thumbnailContainer, er.obscuredThumbnailPlaceholder),
						style: {
							maxWidth: ei,
							maxHeight: ea,
							height: g,
							width: m
						}
					})
				}
				return d.startsWith("data:") ? (0, r.jsx)(f.Eep, {
					src: d,
					width: m,
					height: g,
					minWidth: ei,
					minHeight: ea,
					alt: null != b && n ? u : b,
					className: er.thumbnailContainer,
					imageClassName: a()(er.thumbnailOverride, {
						[er.obscured]: n
					})
				}) : (0, _.Yi)({
					src: d,
					width: m,
					height: g,
					minWidth: ei,
					minHeight: ea,
					alt: null != b && n ? u : b,
					autoPlay: c,
					animated: o && !n && i,
					srcIsAnimated: t.srcIsAnimated,
					containerClassName: er.thumbnailContainer,
					imageClassName: a()(er.thumbnailOverride, {
						[er.obscured]: n
					}),
					analyticsSource: "ForumPostMediaPreview"
				})
			}

			function ex(e) {
				let {
					channel: t,
					firstMedia: n
				} = e, [s, l] = (0, Z.hL)({
					media: n,
					channel: t
				}), a = (0, C.JO)(l);
				return (0, r.jsx)(f.Rny, {
					enabled: !0,
					children: (0, r.jsxs)("div", {
						className: er.bodyMedia,
						onClick: function(e) {
							e.stopPropagation(), a && (e.preventDefault(), e.nativeEvent.stopImmediatePropagation(), v.Z.showAgeVerificationGetStartedModal(O.cU.FORUM_POST_MEDIA_PREVIEW))
						},
						children: [(0, r.jsx)(ej, {
							firstMedia: n,
							shouldObscure: s,
							obscureReason: l,
							shouldShowAgeVerification: a
						}), s && (0, r.jsx)(J.Z, {
							iconClassname: er.obscuredTag,
							obscureReason: l
						})]
					})
				})
			}
		},
		196255: function(e, t, n) {
			n.d(t, {
				Z: () => d
			});
			var r = n(255367);
			n(73800);
			var s = n(120356),
				l = n.n(s),
				a = n(481060),
				i = n(942951),
				o = n(456269),
				c = n(388032),
				u = n(794168);
			let d = e => {
				var t, n;
				let {
					message: s,
					channel: d,
					renderColon: m,
					hasUnreads: h
				} = e, {
					user: g,
					author: f
				} = (0, o.AJ)(d), b = null != (n = null != (t = null == f ? void 0 : f.nick) ? t : null == g ? void 0 : g.username) ? n : "", p = (0, i.l)({
					user: null == s ? void 0 : s.author,
					channelId: d.id,
					guildId: d.guild_id,
					messageId: null == s ? void 0 : s.id,
					stopPropagation: !0,
					ariaLabel: c.intl.formatToPlainString(c.t.CSIeU1, {
						name: b
					})
				})(null != f ? f : void 0)(b, d.id);
				return (0, r.jsxs)(a.Text, {
					tag: "span",
					className: l()(u.author, {
						[u.hasUnreads]: h
					}),
					variant: "text-sm/semibold",
					children: [p, !0 === m ? ": " : null]
				})
			}
		},
		858543: function(e, t, n) {
			n.d(t, {
				DM: () => f,
				ZP: () => b
			});
			var r = n(255367);
			n(73800);
			var s = n(120356),
				l = n.n(s),
				a = n(692547),
				i = n(481060),
				o = n(109434),
				c = n(456269),
				u = n(479099),
				d = n(176505),
				m = n(388032),
				h = n(602512),
				g = n(520069);

			function f(e) {
				let {
					channel: t,
					isNew: n
				} = e, r = (0, c.eV)(t), s = r.slice(void 0, 3), l = r.slice(3), a = r.length > 3 ? r.length - 3 : 0, i = t.hasFlag(d.zZ.PINNED), o = s.length > 0 || i || n;
				return {
					shownTags: s,
					remainingTags: l,
					moreTagsCount: a,
					isPinned: i,
					shouldRenderTagsRow: o,
					forumPostContainsTags: r.length > 0
				}
			}

			function b(e) {
				let {
					channel: t,
					isNew: n,
					tagsClassName: s,
					className: c
				} = e, {
					shownTags: d,
					remainingTags: b,
					moreTagsCount: p,
					isPinned: j,
					shouldRenderTagsRow: x
				} = f({
					channel: t,
					isNew: n
				}), {
					tagFilter: v
				} = (0, o.H)(t.id);
				return x ? (0, r.jsxs)("div", {
					className: l()(g.tags, c),
					children: [n ? (0, r.jsx)(i.IGR, {
						className: l()(h.newBadge, h.inTagsRow),
						color: a.Z.unsafe_rawColors.BRAND_260.css,
						text: m.intl.string(m.t.y2b7CA)
					}) : null, j && (0, r.jsx)("div", {
						className: g.pinIcon,
						children: (0, r.jsx)(i.ua7, {
							text: m.intl.string(m.t["1QLRYW"]),
							children: e => {
								var t, n;
								return (0, r.jsx)(i.qQX, (t = function(e) {
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
									size: "custom"
								}, e), n = n = {
									width: 16,
									height: 16,
									color: "white"
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
					}), d.map(e => (0, r.jsx)(u.Z, {
						tag: e,
						size: u.Z.Sizes.SMALL,
						className: l()(s, {
							[g.tagFiltered]: v.has(e.id)
						})
					}, e.id)), p > 0 ? (0, r.jsx)(u.f, {
						tags: b,
						count: p,
						size: u.Z.Sizes.SMALL
					}) : null]
				}) : null
			}
		},
		265641: function(e, t, n) {
			n.d(t, {
				Z: () => s
			}), n(388685);
			var r = n(73800);
			let s = e => {
				let [t, n] = r.useState(!1);
				return {
					isFocused: t,
					handleFocus: r.useCallback(t => {
						e(t), n(!0)
					}, [e, n]),
					handleBlur: () => {
						n(!1)
					}
				}
			}
		},
		627896: function(e, t, n) {
			n.d(t, {
				x: () => s
			}), n(388685);
			var r = n(73800);

			function s(e, t, n) {
				let s = r.useRef(null),
					[l, a] = r.useState(!1),
					i = r.useCallback(() => {
						if (e && null !== s.current) {
							var n;
							a((null == (n = s.current) ? void 0 : n.offsetHeight) > 2.5 * t)
						}
					}, [a, e, t]);
				return r.useLayoutEffect(() => {
					i()
				}, [i, e, n]), {
					postTitleRef: s,
					isNewBadgeOverflow: l
				}
			}
		},
		883728: function(e, t, n) {
			n.d(t, {
				Z: () => a
			});
			var r = n(255367);
			n(73800);
			var s = n(374470),
				l = n(239091);
			let a = e => {
				let {
					facepileRef: t,
					goToThread: a,
					channel: i
				} = e;
				return {
					handleLeftClick: e => {
						var n;
						(0, s.k)(e.target) && (null == (n = t.current) ? void 0 : n.contains(e.target)) || a(i, e.shiftKey)
					},
					handleRightClick: e => (0, l.jW)(e, async () => {
						let {
							default: e
						} = await n.e("11300").then(n.bind(n, 422200));
						return t => {
							var n, s;
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
							}({}, t), s = s = {
								channel: i
							}, Object.getOwnPropertyDescriptors ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(s)) : (function(e, t) {
								var n = Object.keys(e);
								if (Object.getOwnPropertySymbols) {
									var r = Object.getOwnPropertySymbols(e);
									n.push.apply(n, r)
								}
								return n
							})(Object(s)).forEach(function(e) {
								Object.defineProperty(n, e, Object.getOwnPropertyDescriptor(s, e))
							}), n))
						}
					})
				}
			}
		}
	}
]);
//# sourceMappingURL=4d08c30410a79ee4.js.map