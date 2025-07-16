"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
	["91315"], {
		869382: function(e, t, n) {
			n.d(t, {
				N: () => o
			});
			var r = n(97519),
				l = n(296574),
				a = n(731965);
			let s = (0, r.U)((0, l.tJ)((e, t) => ({
					channelShowResolvedFlags: {},
					setShowResolvedFlags: (t, n) => (0, a.j)(() => {
						e(e => {
							var r, l;
							return {
								channelShowResolvedFlags: (r = function(e) {
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
								}({}, e.channelShowResolvedFlags), l = l = {
									[t]: n
								}, Object.getOwnPropertyDescriptors ? Object.defineProperties(r, Object.getOwnPropertyDescriptors(l)) : (function(e, t) {
									var n = Object.keys(e);
									if (Object.getOwnPropertySymbols) {
										var r = Object.getOwnPropertySymbols(e);
										n.push.apply(n, r)
									}
									return n
								})(Object(l)).forEach(function(e) {
									Object.defineProperty(r, e, Object.getOwnPropertyDescriptor(l, e))
								}), r)
							}
						})
					}),
					getShowResolvedFlags: e => {
						var n;
						return null == (n = t().channelShowResolvedFlags[e]) || n
					}
				}), {
					name: "report-to-mod-channel-storage",
					storage: (0, l.FL)(() => localStorage)
				})),
				o = e => {
					var t;
					let n = s();
					return null == e ? {
						showResolvedFlags: !0,
						setShowResolvedFlags: () => {}
					} : {
						showResolvedFlags: null == (t = n.getShowResolvedFlags(e)) || t,
						setShowResolvedFlags: t => n.setShowResolvedFlags(e, t)
					}
				}
		},
		235449: function(e, t, n) {
			n.d(t, {
				FO: () => Z,
				nA: () => y,
				qQ: () => O,
				r7: () => b
			}), n(388685), n(642613), n(583741);
			var r = n(73800),
				l = n(392711),
				a = n.n(l),
				s = n(442837),
				o = n(883429),
				i = n(869382),
				c = n(592125),
				d = n(496675),
				u = n(306680),
				h = n(823379),
				g = n(709054),
				m = n(344185),
				f = n(920303),
				j = n(569471),
				v = n(346479),
				x = n(91159),
				p = n(231338);

			function b() {
				r.useEffect(() => {
					(0, x.A_)()
				}, [])
			}

			function Z(e) {
				let t = function(e) {
						let t = (0, s.Wu)([d.Z, m.Z, c.Z], () => a()(m.Z.getThreadsForParent(e.guild_id, e.id)).values().map(e => {
							let {
								id: t
							} = e;
							return c.Z.getChannel(t)
						}).filter(h.lm).filter(e => d.Z.can(p.Pl.VIEW_CHANNEL, e)).map(e => e.id).value(), [e.guild_id, e.id]);
						return r.useMemo(() => a()(t).sort((e, t) => g.default.compare(u.ZP.lastMessageId(e), u.ZP.lastMessageId(t))).reverse().value(), [t])
					}(e),
					[n, l] = (0, s.e7)([j.Z], () => a().partition(t, e => j.Z.hasJoined(e)), [t], s.pF);
				return {
					joinedThreadIds: n,
					unjoinedThreadIds: l
				}
			}

			function y(e) {
				let t = (0, s.Wu)([d.Z, m.Z, c.Z], () => a()(m.Z.getThreadsForGuild(e)).values().map(e => a().values(e)).flatten().map(e => {
					let {
						id: t
					} = e;
					return c.Z.getChannel(t)
				}).filter(h.lm).filter(e => d.Z.can(p.Pl.VIEW_CHANNEL, e)).map(e => e.id).value(), [e]);
				return r.useMemo(() => a()(t).sort((e, t) => g.default.compare(u.ZP.lastMessageId(e), u.ZP.lastMessageId(t))).reverse().value(), [t])
			}

			function O(e, t, n, l) {
				let u = e.isModeratorReportChannel(),
					{
						showResolvedFlags: h
					} = (0, i.N)(e.id),
					{
						canLoadMore: g,
						loading: m,
						nextOffset: j,
						isInitialLoad: x
					} = (0, s.cj)([f.Z], () => ({
						loading: f.Z.isLoading(e.id, t, n, l),
						isInitialLoad: f.Z.isInitialLoad,
						canLoadMore: f.Z.canLoadMore,
						nextOffset: f.Z.nextOffset
					})),
					b = r.useCallback(() => {
						d.Z.can(p.Pl.READ_MESSAGE_HISTORY, e) && (!u || h) && v.Z.loadArchivedThreads({
							guildId: e.guild_id,
							channelId: e.id,
							sortOrder: t,
							tagFilter: n,
							tagSetting: l,
							offset: j
						})
					}, [e, t, n, l, j, h, u]),
					Z = r.useRef(b);
				return r.useEffect(() => {
					Z.current = b
				}), r.useEffect(() => {
					x && Z.current()
				}, [e.id, t, n, x, h]), r.useEffect(() => {
					o.Z.resort(e.id)
				}, [e.id, h]), {
					threadIds: (0, s.Wu)([f.Z, c.Z, d.Z], () => a()(f.Z.getThreads(e.id, t, n, l)).filter(e => {
						if (u && !h) return !1;
						let t = c.Z.getChannel(e);
						return null != t && d.Z.can(p.Pl.VIEW_CHANNEL, t)
					}).value()),
					canLoadMore: g,
					loading: (m || x) && h,
					loadMore: b
				}
			}
		},
		443671: function(e, t, n) {
			n.d(t, {
				Z: () => h
			});
			var r = n(255367),
				l = n(73800),
				a = n(120356),
				s = n.n(a),
				o = n(481060),
				i = n(487894),
				c = n(300234),
				d = n(388032),
				u = n(148571);

			function h(e) {
				let {
					channel: t,
					threadIds: n,
					startThread: a,
					goToThread: h
				} = e, g = l.useCallback(e => (0, r.jsx)(c.Z, {
					threadId: n[e.row],
					goToThread: h
				}, "".concat(e.section, "-").concat(e.row)), [n, h]);
				return 0 === n.length ? (0, r.jsx)(i.Z, {
					channel: t,
					header: d.intl.string(d.t.HgTQ8v),
					startThread: a
				}) : (0, r.jsx)(o.aVo, {
					className: s()(u.list, u.activeThreadsList),
					fade: !0,
					sections: [n.length],
					sectionHeight: 0,
					rowHeight: 80,
					renderRow: g,
					renderSection: () => null,
					chunkSize: 20
				})
			}
		},
		593130: function(e, t, n) {
			n.d(t, {
				Z: () => Z
			}), n(388685);
			var r = n(255367),
				l = n(73800),
				a = n(120356),
				s = n.n(a),
				o = n(442837),
				i = n(755721),
				c = n(481060),
				d = n(496675),
				u = n(346479),
				h = n(665906),
				g = n(91159),
				m = n(443671),
				f = n(342449),
				j = n(488131),
				v = n(124368),
				x = n(981631),
				p = n(388032),
				b = n(269932);

			function Z(e) {
				let {
					channel: t,
					className: n,
					onClose: a
				} = e, Z = (0, o.e7)([d.Z], () => d.Z.can(x.Plq.READ_MESSAGE_HISTORY, t)), O = (0, h.cD)(t), w = () => {
					a(), (0, j.R6)(t, void 0, "Thread Browser Empty State")
				}, N = l.useCallback((e, t) => {
					a(), (0, j.ok)(e, !t, v.on.BROWSER)
				}, [a]), P = function(e, t) {
					let [n, r] = l.useState(""), [a, s] = l.useState(!1), [o, i] = l.useState(!1), [c, d] = l.useState([]), h = async () => {
						if (null != n && "" !== n && !a) {
							s(!0);
							try {
								let r = await u.Z.searchThreads(e, t, n);
								i(!0), d(r)
							} finally {
								s(!1)
							}
						}
					};
					return {
						query: n,
						setQuery: e => {
							r(e), 0 === e.length && i(!1)
						},
						isLoading: a,
						hasResults: o,
						submit: h,
						results: c
					}
				}(t.guild_id, t.id);
				return l.useEffect(() => {
					(0, g.A_)()
				}, []), (0, r.jsx)("div", {
					className: s()(n, b.container),
					children: (0, r.jsx)(c.y5t, {
						component: (0, r.jsxs)("div", {
							className: b.header,
							children: [(0, r.jsx)(c.or_, {
								size: "md",
								color: "currentColor",
								className: b.threadIcon
							}), (0, r.jsx)(c.X6q, {
								variant: "heading-md/semibold",
								className: b.title,
								children: p.intl.string(p.t.E3H5lJ)
							}), Z ? (0, r.jsxs)(r.Fragment, {
								children: [(0, r.jsx)("div", {
									className: b.divider
								}), (0, r.jsx)(y, function(e) {
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
								}({}, P))]
							}) : null, (0, r.jsx)("div", {
								className: b.spacer
							}), O ? (0, r.jsx)(i.zx, {
								size: i.zx.Sizes.TINY,
								className: b.createButton,
								onClick: () => {
									a(), (0, j.R6)(t, void 0, "Thread Browser Toolbar")
								},
								children: p.intl.string(p.t.CumH4u)
							}) : null, (0, r.jsx)(c.P3F, {
								className: b.closeIcon,
								onClick: a,
								"aria-label": p.intl.string(p.t.cpT0Cg),
								children: (0, r.jsx)(c.Dio, {
									size: "md",
									color: "currentColor"
								})
							})]
						}),
						children: P.hasResults ? (0, r.jsx)(m.Z, {
							channel: t,
							startThread: w,
							goToThread: N,
							threadIds: P.results
						}) : (0, r.jsx)(f.Z, {
							channel: t,
							startThread: w,
							goToThread: N
						})
					})
				})
			}

			function y(e) {
				let {
					query: t,
					setQuery: n,
					submit: l,
					isLoading: a
				} = e;
				return (0, r.jsx)(c.E1j, {
					autoFocus: !0,
					className: b.searchBox,
					query: t,
					isLoading: a,
					onChange: e => n(e),
					onClear: () => n(""),
					onKeyDown: e => "Enter" === e.key && l(),
					placeholder: p.intl.string(p.t.h0JN7e),
					"aria-label": p.intl.string(p.t.h0JN7e)
				})
			}
		},
		487894: function(e, t, n) {
			n.d(t, {
				Z: () => c
			});
			var r = n(255367);
			n(73800);
			var l = n(481060),
				a = n(499033),
				s = n(665906),
				o = n(388032),
				i = n(268797);

			function c(e) {
				let {
					channel: t,
					header: n,
					startThread: c
				} = e, d = (0, s.NE)(t), u = (0, s.Xu)(t);
				return (0, r.jsxs)("div", {
					className: i.container,
					children: [(0, r.jsxs)("div", {
						className: i.iconContainer,
						children: [(0, r.jsx)("div", {
							className: i.icon,
							children: (0, r.jsx)(l.or_, {
								size: "custom",
								color: "currentColor",
								width: 36,
								height: 36
							})
						}), (0, r.jsx)(a.Z, {
							className: i.stars
						})]
					}), (0, r.jsx)(l.X6q, {
						className: i.header,
						variant: "heading-xl/semibold",
						children: n
					}), (0, r.jsx)(l.Text, {
						color: "header-secondary",
						variant: "text-md/normal",
						children: o.intl.string(o.t.jmq9GB)
					}), d || u ? (0, r.jsx)("div", {
						"data-button-hoisted-classname-wrapper": !0,
						className: i.cta,
						children: (0, r.jsx)(l.zxk, {
							variant: "primary",
							text: o.intl.string(o.t.rBIGBA),
							onClick: c
						})
					}) : null]
				})
			}
		},
		300234: function(e, t, n) {
			n.d(t, {
				Z: () => v
			});
			var r = n(255367),
				l = n(73800),
				a = n(442837),
				s = n(481060),
				o = n(239091),
				i = n(493773),
				c = n(884338),
				d = n(592125),
				u = n(720202),
				h = n(594174),
				g = n(260483),
				m = n(314208),
				f = n(124368),
				j = n(915298);
			let v = l.memo(function(e) {
				let {
					threadId: t,
					goToThread: l,
					showChannelName: i
				} = e, c = (0, a.e7)([d.Z], () => d.Z.getChannel(t)), u = (0, a.e7)([d.Z], () => d.Z.getChannel(c.parent_id));
				return (0, r.jsxs)(s.P3F, {
					className: j.container,
					onClick: e => l(c, e.shiftKey),
					onContextMenu: e => (0, o.jW)(e, async () => {
						let {
							default: e
						} = await Promise.all([n.e("90508"), n.e("78650")]).then(n.bind(n, 422200));
						return t => {
							var n, l;
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
							}({}, t), l = l = {
								channel: c
							}, Object.getOwnPropertyDescriptors ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(l)) : (function(e, t) {
								var n = Object.keys(e);
								if (Object.getOwnPropertySymbols) {
									var r = Object.getOwnPropertySymbols(e);
									n.push.apply(n, r)
								}
								return n
							})(Object(l)).forEach(function(e) {
								Object.defineProperty(n, e, Object.getOwnPropertyDescriptor(l, e))
							}), n))
						}
					}),
					children: [(0, r.jsxs)("div", {
						className: j.left,
						children: [(0, r.jsxs)(s.X6q, {
							className: j.threadNameLine,
							variant: "heading-md/semibold",
							children: [(0, r.jsx)("span", {
								className: j.threadName,
								children: c.name
							}), i && null != u ? (0, r.jsx)("span", {
								className: j.parentName,
								children: "#".concat(u.name)
							}) : null]
						}), (0, m.Z)(c)]
					}), (0, r.jsx)(x, {
						channel: c
					})]
				})
			});

			function x(e) {
				let {
					channel: t
				} = e, n = (0, a.e7)([g.Z], () => {
					var e;
					return null != (e = g.Z.getMemberIdsPreview(t.id)) ? e : []
				}), l = (0, a.e7)([g.Z], () => {
					var e;
					return null != (e = g.Z.getMemberCount(t.id)) ? e : 0
				}), s = (0, a.Wu)([h.default], () => n.map(e => h.default.getUser(e)));
				return ((0, i.ZP)(() => {
					n.filter((e, t) => null == s[t]).forEach(e => {
						u.Z.requestMember(t.guild_id, e)
					})
				}), 0 === n.length) ? null : (0, r.jsx)(c.ZP, {
					className: j.facepile,
					showDefaultAvatarsForNullUsers: !0,
					guildId: t.guild_id,
					users: s,
					count: l,
					max: f.yX
				})
			}
		},
		314208: function(e, t, n) {
			n.d(t, {
				Z: () => P
			});
			var r = n(255367),
				l = n(73800),
				a = n(442837),
				s = n(481060),
				o = n(99690),
				i = n(616780),
				c = n(471445),
				d = n(905405),
				u = n(937889),
				h = n(739566),
				g = n(267128),
				m = n(884902),
				f = n(271383),
				j = n(306680),
				v = n(699516),
				x = n(594174),
				p = n(709054),
				b = n(51144),
				Z = n(144140),
				y = n(91159),
				O = n(217702),
				w = n(388032),
				N = n(915298);

			function P(e) {
				return e.isActiveThread() ? (0, r.jsx)(S, {
					channel: e
				}) : (0, r.jsx)(I, {
					channel: e
				})
			}

			function S(e) {
				let {
					channel: t
				} = e, n = (0, a.e7)([Z.Z], () => Z.Z.getMostRecentMessage(t.id));
				return null == n ? (0, r.jsx)(T, {
					channel: t
				}) : (0, r.jsx)(C, {
					channel: t,
					message: n
				})
			}

			function T(e) {
				let {
					channel: t
				} = e, n = (0, y.Ok)(t);
				return (0, r.jsxs)(s.Text, {
					className: N.subtext,
					variant: "text-sm/normal",
					color: "header-secondary",
					children: [w.intl.string(w.t.Jmh6n5), "\xa0 • \xa0", (0, y.Ye)(n)]
				})
			}

			function C(e) {
				let {
					channel: t,
					message: n
				} = e;
				(0, i.$)({
					[t.guild_id]: [n.author.id]
				});
				let c = (0, a.e7)([x.default], () => {
						var e;
						return null != (e = x.default.getUser(n.author.id)) ? e : n.author
					}),
					{
						nick: f,
						colorString: j,
						colorStrings: b
					} = (0, h.ZP)(n),
					Z = (0, m.X7)(t.guild_id, c.id, b),
					{
						isBlocked: w,
						isIgnored: P
					} = (0, a.cj)([v.Z], () => ({
						isBlocked: v.Z.isBlockedForMessage(n),
						isIgnored: v.Z.isIgnoredForMessage(n)
					}), [n]),
					S = (0, d.p)(),
					T = l.useMemo(() => {
						let e = null != n.content && "" !== n.content ? (0, u.ZP)(n, {
								formatInline: !0,
								shouldFilterKeywords: S
							}).content : null,
							{
								contentPlaceholder: t,
								renderedContent: l,
								trailingIcon: a,
								leadingIcon: s
							} = (0, g.f)(n, e, w, P, N.messageContent, {
								trailingIconClass: N.messageContentTrailingIcon,
								leadingIconClass: N.messageContentLeadingIcon,
								iconSize: O.WW
							});
						return (0, r.jsxs)(r.Fragment, {
							children: [s, null != l ? l : (0, r.jsx)("span", {
								children: t
							}), a]
						})
					}, [n, w, P, S]);
				return (0, r.jsxs)(s.Text, {
					className: N.subtext,
					variant: "text-sm/normal",
					color: "header-secondary",
					children: [(0, r.jsx)(o.Z, {
						className: N.avatar,
						user: c,
						size: s.EFr.SIZE_16
					}), (0, r.jsx)(s.PUh, {
						name: f,
						color: j,
						roleColors: Z,
						className: N.authorName
					}), ":\xa0", T, "\xa0 • \xa0", (0, y.Ye)(p.default.extractTimestamp(n.id))]
				})
			}

			function I(e) {
				var t, n, l;
				let {
					channel: d
				} = e, u = (0, a.e7)([j.ZP], () => j.ZP.lastMessageId(d.id)), h = null == u ? new Date(null != (n = null == (t = d.threadMetadata) ? void 0 : t.archiveTimestamp) ? n : Date.now()).getTime() : p.default.extractTimestamp(u);
				(0, i.$)({
					[d.guild_id]: [d.ownerId]
				});
				let g = (0, a.e7)([x.default], () => x.default.getUser(d.ownerId)),
					v = (0, a.e7)([f.ZP], () => f.ZP.getMember(d.guild_id, d.ownerId)),
					Z = (0, m.X7)(d.guild_id, null == g ? void 0 : g.id, null == v ? void 0 : v.colorStrings),
					O = null != (l = (0, c.KS)(d)) ? l : s.or_;
				return (0, r.jsx)(s.Text, {
					className: N.subtext,
					variant: "text-sm/normal",
					color: "header-secondary",
					children: null == g ? (0, r.jsxs)(r.Fragment, {
						children: [(0, r.jsx)("div", {
							className: N.noAvatarIcon,
							children: (0, r.jsx)(O, {
								width: 10,
								height: 10,
								size: "custom",
								color: "currentColor"
							})
						}), w.intl.format(w.t["5Wk9+v"], {
							time: (0, y.Ye)(h)
						})]
					}) : (0, r.jsxs)(r.Fragment, {
						children: [(0, r.jsx)(o.Z, {
							className: N.avatar,
							user: g,
							size: s.EFr.SIZE_16
						}), w.intl.format(w.t.GFDmd3, {
							authorHook(e, t) {
								var n, l;
								return (0, r.jsx)(s.PUh, {
									className: N.startedByName,
									color: null != (n = null == v ? void 0 : v.colorString) ? n : void 0,
									roleColors: Z,
									name: null != (l = null == v ? void 0 : v.nick) ? l : b.ZP.getName(g)
								}, t)
							}
						}), (0, r.jsx)("span", {
							className: N.bullet,
							children: "•"
						}), w.intl.format(w.t["5Wk9+v"], {
							time: (0, y.Ye)(h)
						})]
					})
				})
			}
		},
		342449: function(e, t, n) {
			n.d(t, {
				Z: () => m
			}), n(388685);
			var r = n(255367),
				l = n(73800),
				a = n(697988),
				s = n(683860),
				o = n(481060),
				i = n(235449),
				c = n(487894),
				d = n(300234),
				u = n(388032),
				h = n(148571);
			let g = new Set;

			function m(e) {
				let {
					channel: t,
					startThread: n,
					goToThread: m
				} = e, {
					joinedThreadIds: j,
					unjoinedThreadIds: v
				} = (0, i.FO)(t), {
					threadIds: x,
					canLoadMore: p,
					loading: b,
					loadMore: Z
				} = (0, i.qQ)(t, s.z.LATEST_ACTIVITY, g, a.z.MATCH_SOME), y = l.useRef(null);
				(0, i.r7)();
				let O = l.useCallback(e => {
						let t = 0 === e.section ? j : 1 === e.section ? v : x;
						return (0, r.jsx)(d.Z, {
							threadId: t[e.row],
							goToThread: m
						}, "".concat(e.section, "-").concat(e.row))
					}, [x, j, v, m]),
					w = l.useCallback(e => 0 === e.section ? (0, r.jsx)(f, {
						text: u.intl.formatToPlainString(u.t["4E27f3"], {
							count: j.length
						})
					}, e.section) : 1 === e.section ? (0, r.jsx)(f, {
						text: u.intl.formatToPlainString(u.t.csPc4O, {
							count: v.length
						})
					}, e.section) : (0, r.jsx)(f, {
						text: u.intl.string(u.t["wUNQ+/"])
					}, e.section), [j.length, v.length]),
					N = l.useCallback(e => 1 === e && j.length > 0 || 2 === e && (j.length > 0 || v.length > 0) ? 64 : 32, [j.length, v.length]),
					P = l.useCallback(() => {
						var e;
						let t = null == (e = y.current) ? void 0 : e.getScrollerState();
						if (null == t) return;
						let n = t.scrollTop + t.offsetHeight;
						t.scrollHeight - n < 200 && Z()
					}, [Z]);
				if (0 === j.length && 0 === v.length && 0 === x.length)
					if (b) return (0, r.jsx)("div", {
						className: h.list,
						children: (0, r.jsx)(o.$jN, {
							className: h.spinner
						})
					});
					else return (0, r.jsx)("div", {
						className: h.list,
						children: (0, r.jsx)(c.Z, {
							channel: t,
							header: u.intl.string(u.t.HgTQ8v),
							startThread: n
						})
					});
				return (0, r.jsx)(o.aVo, {
					ref: y,
					className: h.list,
					fade: !0,
					sections: [j.length, v.length, x.length],
					sectionHeight: N,
					rowHeight: 80,
					renderRow: O,
					renderSection: w,
					chunkSize: 20,
					onScroll: p ? P : void 0
				})
			}

			function f(e) {
				let {
					text: t
				} = e;
				return (0, r.jsx)(o.Text, {
					color: "header-secondary",
					variant: "text-xs/bold",
					className: h.sectionHeader,
					children: t
				})
			}
		}
	}
]);
//# sourceMappingURL=c86bbcc14eb7e02c.js.map