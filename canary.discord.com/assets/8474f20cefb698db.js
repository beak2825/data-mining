"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
	["28467"], {
		39154: function(e, t, s) {
			s.d(t, {
				Z: () => l
			}), s(997841);
			var n = s(978003);

			function l(e, t) {
				return null == (t = null != t ? t : (0, n.Z)(e) ? e.messageSnapshots[0] : void 0) ? e : e.merge({
					content: t.message.content,
					attachments: t.message.attachments,
					embeds: t.message.embeds,
					flags: t.message.flags,
					components: t.message.components,
					editedTimestamp: null,
					timestamp: t.message.timestamp,
					codedLinks: t.message.codedLinks,
					reactions: [],
					messageSnapshots: [],
					stickers: t.message.stickers,
					stickerItems: t.message.stickerItems,
					customRenderedContent: null
				})
			}
		},
		267128: function(e, t, s) {
			s.d(t, {
				Z: () => D,
				f: () => R
			}), s(388685);
			var n = s(255367),
				l = s(73800),
				a = s(120356),
				i = s.n(a),
				r = s(913527),
				o = s.n(r),
				c = s(481060),
				u = s(100527),
				d = s(906732),
				m = s(407477),
				p = s(978003),
				g = s(39154),
				h = s(245216),
				C = s(79390),
				x = s(869765),
				P = s(403132),
				O = s(378233),
				j = s(768581),
				v = s(55935),
				N = s(823379),
				f = s(453687),
				E = s(930282),
				y = s(123145),
				S = s(223021),
				T = s(217702),
				M = s(981631),
				I = s(388032),
				_ = s(848697),
				L = s(73433);

			function b(e) {
				let {
					width: t = 12,
					height: s = 8,
					color: l = "currentColor",
					className: a,
					foreground: i
				} = e;
				return (0, n.jsx)("svg", {
					className: a,
					width: t,
					height: s,
					viewBox: "0 0 12 8",
					children: (0, n.jsx)("path", {
						d: "M0.809739 3.59646L5.12565 0.468433C5.17446 0.431163 5.23323 0.408043 5.2951 0.401763C5.35698 0.395482 5.41943 0.406298 5.4752 0.432954C5.53096 0.45961 5.57776 0.50101 5.61013 0.552343C5.64251 0.603676 5.65914 0.662833 5.6581 0.722939V2.3707C10.3624 2.3707 11.2539 5.52482 11.3991 7.21174C11.4028 7.27916 11.3848 7.34603 11.3474 7.40312C11.3101 7.46021 11.2554 7.50471 11.1908 7.53049C11.1262 7.55626 11.0549 7.56204 10.9868 7.54703C10.9187 7.53201 10.857 7.49695 10.8104 7.44666C8.72224 5.08977 5.6581 5.63359 5.6581 5.63359V7.28135C5.65831 7.34051 5.64141 7.39856 5.60931 7.44894C5.5772 7.49932 5.53117 7.54004 5.4764 7.5665C5.42163 7.59296 5.3603 7.60411 5.29932 7.59869C5.23834 7.59328 5.18014 7.57151 5.13128 7.53585L0.809739 4.40892C0.744492 4.3616 0.691538 4.30026 0.655067 4.22975C0.618596 4.15925 0.599609 4.08151 0.599609 4.00269C0.599609 3.92386 0.618596 3.84612 0.655067 3.77562C0.691538 3.70511 0.744492 3.64377 0.809739 3.59646Z",
						className: i,
						fill: l
					})
				})
			}

			function A(e) {
				let {
					width: t = 18,
					height: s = 18,
					className: l,
					foreground: a
				} = e;
				return (0, n.jsx)("svg", {
					className: l,
					width: t,
					height: s,
					viewBox: "0 0 18 18",
					children: (0, n.jsx)("path", {
						fill: "#3ba55c",
						d: "M0 8h14.2l-3.6-3.6L12 3l6 6-6 6-1.4-1.4 3.6-3.6H0",
						className: a
					})
				})
			}

			function R(e, t, s, l, a, r) {
				let o, u, d, m, x = (0, g.Z)(e),
					{
						trailingIconClass: P,
						leadingIconClass: j,
						iconSize: v
					} = r,
					N = null == t || "" === t || Array.isArray(t) && 0 === t.length,
					f = (0, O.cv)(x).length > 0,
					y = null != x.interaction,
					S = x.hasFlag(M.iLy.IS_VOICE_MESSAGE),
					T = x.isPoll(),
					b = x.type === M.uaV.POLL_RESULT;
				if ((0, p.Z)(e) && (m = (0, n.jsx)(h.Z, {
						size: "custom",
						className: j,
						width: v,
						height: v
					})), s) o = I.intl.string(I.t.XAkOo6);
				else if (l) o = I.intl.string(I.t.G7p6v7);
				else if (x.type === M.uaV.CHANNEL_PINNED_MESSAGE) o = I.intl.string(I.t.sCfDDg);
				else if (N)
					if (T) {
						var A, R;
						u = (0, n.jsx)("div", {
							className: i()(_.repliedTextContent, L.markup),
							children: null == x || null == (R = x.poll) || null == (A = R.question) ? void 0 : A.text
						})
					} else b ? o = (0, C.N4)(x) : f ? o = I.intl.string(I.t.kHdYCQ) : y ? o = I.intl.string(I.t["E+6SSU"]) : S ? o = I.intl.string(I.t["XC3A5+"]) : x.hasFlag(M.iLy.IS_COMPONENTS_V2) ? o = I.intl.string(I.t.Xxat6e) : (o = I.intl.string(I.t["6hGo0d"]), d = (0, n.jsx)(c.XBm, {
						size: "custom",
						color: "currentColor",
						className: P,
						width: v,
						height: v
					}));
				else u = (0, n.jsx)(E.ZP, {
					message: x,
					content: t,
					className: a,
					compact: !0
				});
				return f ? d = (0, n.jsx)(c.B7q, {
					size: "custom",
					color: "currentColor",
					className: P,
					width: v,
					height: v
				}) : y ? d = (0, n.jsx)(c.SsZ, {
					size: "custom",
					color: "currentColor",
					className: P,
					width: v,
					height: v
				}) : S ? d = (0, n.jsx)(c.S6n, {
					size: "custom",
					color: "currentColor",
					className: P,
					width: 19 / 24 * v,
					height: v
				}) : (x.attachments.length > 0 || x.embeds.length > 0) && !b && (d = (0, n.jsx)(c.XBm, {
					size: "custom",
					color: "currentColor",
					className: P,
					width: v,
					height: v
				})), {
					contentPlaceholder: o,
					renderedContent: u,
					trailingIcon: d,
					leadingIcon: m
				}
			}

			function D(e) {
				let t, {
						repliedAuthor: s,
						baseAuthor: a,
						baseMessage: r,
						referencedMessage: p,
						renderPopout: g,
						isReplySpineClickable: h,
						showReplySpine: C
					} = e,
					{
						canShowReactionsOnMessageHover: O
					} = m.ZP.useExperiment({
						location: "RepliedMessage"
					}, {
						autoTrackExposure: !1
					}),
					[E, L] = l.useState(!1),
					D = l.useMemo(() => null != g && p.state === x.Y.LOADED ? e => g(e, p.message) : void 0, [p, g]),
					k = l.useCallback(() => L(e => !e), []),
					w = function(e, t, s) {
						let {
							referencedMessage: a,
							channel: r,
							compact: o,
							isReplyAuthorBlocked: m,
							repliedAuthor: p,
							showAvatarPopout: g,
							onClickAvatar: h,
							onContextMenu: C,
							onPopoutRequestClose: P
						} = e, {
							analyticsLocations: O
						} = (0, d.ZP)(u.Z.AVATAR), v = l.useRef(null);
						if (o || a.state !== x.Y.LOADED || m) return s === M.uaV.CONTEXT_MENU_COMMAND ? (0, n.jsx)("div", {
							className: _.replyChatIconContainer,
							children: (0, n.jsx)(c.kBi, {
								size: "xs"
							})
						}) : (0, n.jsx)("div", {
							className: _.replyBadge,
							children: (0, n.jsx)(b, {
								className: _.replyIcon
							})
						});
						if (a.message.type === M.uaV.USER_JOIN || a.message.type === M.uaV.ROLE_SUBSCRIPTION_PURCHASE || a.message.type === M.uaV.GUILD_DEADCHAT_REVIVE_PROMPT || a.message.type === M.uaV.GUILD_GAMING_STATS_PROMPT) return (0, n.jsx)(A, {
							className: _.userJoinSystemMessageIcon
						});
						if (a.message.type === M.uaV.GUILD_APPLICATION_PREMIUM_SUBSCRIPTION) return (0, n.jsx)(c.Prq, {
							size: "md",
							color: "currentColor",
							className: _.ticketIcon
						});
						if (a.message.type === M.uaV.POLL_RESULT) return (0, n.jsx)(c.QDj, {
							className: _.repliedTextContentLeadingIcon,
							width: T.WW,
							height: T.WW,
							size: "custom"
						});
						let N = () => {
							var e, t;
							return e = a.message.author, t = r.guild_id, (0, n.jsx)("img", {
								alt: "",
								src: (null == p ? void 0 : p.guildMemberAvatar) != null && null != t ? (0, j.JM)({
									guildId: t,
									userId: e.id,
									avatar: p.guildMemberAvatar
								}) : e.getAvatarURL(t, 16),
								onClick: h,
								onContextMenu: C,
								className: i()({
									[_.replyAvatar]: !0,
									[_.clickable]: null != h
								}),
								ref: v
							})
						};
						return null != t && null != g ? (0, n.jsx)(d.Gt, {
							value: O,
							children: (0, n.jsx)(c.yRy, {
								targetElementRef: v,
								renderPopout: t,
								shouldShow: g,
								position: "right",
								onRequestClose: P,
								children: N
							})
						}) : (0, n.jsx)(d.Gt, {
							value: O,
							children: N()
						})
					}(e, D, r.type),
					V = function(e, t) {
						let {
							baseMessage: s,
							channel: l,
							referencedMessage: a,
							showUsernamePopout: i,
							onClickUsername: r,
							onContextMenu: o,
							onPopoutRequestClose: c
						} = e, u = (null == a ? void 0 : a.state) === x.Y.LOADED ? a.message : void 0;
						return null == u || u.type === M.uaV.USER_JOIN || u.type === M.uaV.ROLE_SUBSCRIPTION_PURCHASE || u.type === M.uaV.GUILD_APPLICATION_PREMIUM_SUBSCRIPTION || u.type === M.uaV.GUILD_DEADCHAT_REVIVE_PROMPT || u.type === M.uaV.GUILD_GAMING_STATS_PROMPT || u.type === M.uaV.POLL_RESULT ? null : (0, n.jsx)(y.Z, {
							message: u,
							channel: l,
							compact: !0,
							withMentionPrefix: (0, P.Z)(s, u),
							showPopout: i,
							renderPopout: t,
							onClick: r,
							onContextMenu: o,
							onPopoutRequestClose: c,
							isRepliedMessage: !0
						})
					}(e, D),
					U = function(e, t, s) {
						let {
							content: l,
							referencedMessage: a,
							isReplyAuthorBlocked: r,
							isReplyAuthorIgnored: o,
							onClickReply: u
						} = e, d = a.state !== x.Y.DELETED ? u : void 0;
						switch (a.state) {
							case x.Y.LOADED: {
								let {
									contentPlaceholder: e,
									renderedContent: u,
									trailingIcon: m,
									leadingIcon: p
								} = R(a.message, l, r, o, _.repliedTextContent, {
									trailingIconClass: _.repliedTextContentTrailingIcon,
									leadingIconClass: _.repliedTextContentLeadingIcon,
									iconSize: T.WW
								});
								return (0, n.jsxs)(n.Fragment, {
									children: [p, (0, n.jsx)(c.P3F, {
										className: i()(_.repliedTextPreview, _.clickable, {
											[_.repliedMessageClickableSpineHovered]: t
										}),
										onClick: d,
										onMouseEnter: s,
										onMouseLeave: s,
										children: (0, n.jsx)(c.nuw, {
											children: null != u ? u : (0, n.jsx)("span", {
												className: _.repliedTextPlaceholder,
												children: e
											})
										})
									}), m]
								})
							}
							case x.Y.NOT_LOADED:
								return (0, n.jsx)(c.P3F, {
									className: i()(_.repliedTextPreview, _.clickable),
									onClick: d,
									children: (0, n.jsx)("span", {
										className: _.repliedTextPlaceholder,
										children: I.intl.string(I.t["1i+hMj"])
									})
								});
							case x.Y.DELETED:
								return (0, n.jsx)("div", {
									className: _.repliedTextPreview,
									children: (0, n.jsx)("span", {
										className: _.repliedTextPlaceholder,
										children: I.intl.string(I.t.mE3KJC)
									})
								});
							default:
								(0, N.vE)(a)
						}
					}(e, E, k),
					Z = l.useMemo(() => e.compact ? (0, S.Z)((0, v.vc)(o()(), "LT")) : null, [e.compact]);
				null != s && null != a && (t = I.intl.formatToPlainString(I.t.RhbQ2N, {
					author: null == a ? void 0 : a.nick,
					repliedAuthor: null == s ? void 0 : s.nick
				}));
				let G = r.type === M.uaV.CONTEXT_MENU_COMMAND;
				return (0, n.jsxs)("div", {
					id: (0, f.Gq)(r),
					className: i()(_.repliedMessage, Z, G ? _.contextCommandMessage : {
						[_.messageSpine]: !O || !h && C
					}),
					"aria-label": t,
					children: [O && h && C && (0, n.jsx)(c.P3F, {
						tag: "div",
						"aria-label": I.intl.string(I.t.dpjpOj),
						className: i()(_.repliedMessageClickableSpine, {
							[_.repliedMessageContentHovered]: E
						}),
						onClick: e.onClickReply,
						onMouseEnter: k,
						onMouseLeave: k
					}), w, V, U]
				})
			}
		},
		123145: function(e, t, s) {
			s.d(t, {
				Z: () => r
			});
			var n = s(255367);
			s(73800);
			var l = s(739566),
				a = s(421399),
				i = s(47930);

			function r(e) {
				var t, s, r, o;
				let c = (0, l.ZP)(e.message),
					u = (0, i.x)({
						message: e.message,
						channel: e.channel,
						user: null != (s = null == (t = e.message) ? void 0 : t.author) ? s : e.userOverride,
						compact: !!e.compact,
						isRepliedMessage: !!e.isRepliedMessage
					}),
					d = {};
				return null != u && (d[a.a.SYSTEM_TAG] = u), (0, n.jsx)(a.Z, (r = function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = null != arguments[t] ? arguments[t] : {},
							n = Object.keys(s);
						"function" == typeof Object.getOwnPropertySymbols && (n = n.concat(Object.getOwnPropertySymbols(s).filter(function(e) {
							return Object.getOwnPropertyDescriptor(s, e).enumerable
						}))), n.forEach(function(t) {
							var n;
							n = s[t], t in e ? Object.defineProperty(e, t, {
								value: n,
								enumerable: !0,
								configurable: !0,
								writable: !0
							}) : e[t] = n
						})
					}
					return e
				}({}, e), o = o = {
					author: c,
					decorations: d
				}, Object.getOwnPropertyDescriptors ? Object.defineProperties(r, Object.getOwnPropertyDescriptors(o)) : (function(e, t) {
					var s = Object.keys(e);
					if (Object.getOwnPropertySymbols) {
						var n = Object.getOwnPropertySymbols(e);
						s.push.apply(s, n)
					}
					return s
				})(Object(o)).forEach(function(e) {
					Object.defineProperty(r, e, Object.getOwnPropertyDescriptor(o, e))
				}), r))
			}
		},
		403132: function(e, t, s) {
			s.d(t, {
				Z: () => n
			});

			function n(e, t) {
				return null != t && !!e.mentions.includes(t.author.id)
			}
		}
	}
]);
//# sourceMappingURL=8474f20cefb698db.js.map