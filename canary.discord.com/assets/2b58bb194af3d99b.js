"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
	["44421"], {
		637735: function(e) {
			e.exports = "data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='259' height='50' viewBox='6.122 5.864 259 50'%3E%3Cpath fill-rule='evenodd' d='M68.122 11.864h124a3 3 0 0 1 3 3v14a3 3 0 0 1-3 3h-124a3 3 0 0 1-3-3v-14a3 3 0 0 1 3-3m0 24h194a3 3 0 0 1 3 3v10a3 3 0 0 1-3 3h-194a3 3 0 0 1-3-3v-10a3 3 0 0 1 3-3m-42.77-30h11.54c6.687 0 9.112.696 11.556 2.003a13.63 13.63 0 0 1 5.67 5.67c1.31 2.447 2.004 4.87 2.004 11.557v11.54c0 6.687-.696 9.112-2.003 11.556a13.63 13.63 0 0 1-5.67 5.67c-2.447 1.31-4.87 2.004-11.557 2.004h-11.54c-6.687 0-9.112-.696-11.556-2.003a13.63 13.63 0 0 1-5.67-5.67c-1.31-2.447-2.004-4.87-2.004-11.557v-11.54c0-6.687.696-9.112 2.003-11.556a13.63 13.63 0 0 1 5.67-5.67c2.447-1.31 4.87-2.004 11.557-2.004'/%3E%3C/svg%3E"
		},
		782961: function(e) {
			e.exports = "data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='66' height='38' viewBox='0 0 66 38'%3E%3Cpath d='M0 0h66v38H0z' style='fill:%23000;stroke:%23000'/%3E%3C/svg%3E"
		},
		725436: function(e, t, n) {
			n.d(t, {
				m: () => u
			});
			var r = n(454585),
				l = n(551452),
				i = n(532901);

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
			let c = s(a({}, r.Z.guildEventRules.link), {
					react: (0, i.Z)({
						enableBuildOverrides: !1,
						mustConfirmExternalLink: !0
					}).react
				}),
				o = s(a({}, r.Z.guildEventRules.channelMention), {
					react: (0, l.Z)({
						enableBuildOverrides: !1,
						shouldCloseDefaultModals: !0,
						shouldStopPropagation: !0
					}).react
				}),
				u = r.Z.reactParserFor(s(a({}, r.Z.guildEventRules), {
					link: c,
					channelMention: o
				}))
		},
		978227: function(e, t, n) {
			n.d(t, {
				Z: () => s
			});
			var r = n(73800),
				l = n(442837),
				i = n(749210),
				a = n(594174);

			function s(e) {
				let t = (0, l.e7)([a.default], () => a.default.getUser(null == e ? void 0 : e.creator_id), [e]);
				return r.useEffect(() => {
					null == t && (null == e ? void 0 : e.creator_id) != null && i.Z.requestMembersById(e.guild_id, e.creator_id)
				}, [e, t]), t
			}
		},
		315416: function(e, t, n) {
			n.d(t, {
				Z: () => s
			});
			var r = n(73800),
				l = n(442837),
				i = n(897285),
				a = n(924301);

			function s(e, t, n) {
				let s = (0, l.e7)([a.ZP], () => a.ZP.getUserCount(t, n));
				return (0, r.useEffect)(() => {
					null != e && null != t && i.Z.getGuildEventUserCounts(e, t, null != n ? [n] : [])
				}, [t, e, n]), s
			}
		},
		405613: function(e, t, n) {
			n.d(t, {
				Z: () => i
			});
			var r = n(134432),
				l = n(981631);

			function i(e, t) {
				let n;
				if (null == e.image) return null;
				null == t && (t = window.screen.width * (0, r.x_)()), t = (0, r.oO)(t);
				let i = window.GLOBAL_ENV.CDN_HOST;
				if (null != i) {
					var a;
					n = "".concat(a = "https:", "//").concat(i, "/guild-events/").concat(e.id, "/").concat(e.image)
				} else n = location.protocol + window.GLOBAL_ENV.API_ENDPOINT + l.ANM.GUILD_EVENT_IMAGE(e.id, e.image, "png");
				return n + "?size=".concat(t)
			}
		},
		391174: function(e, t, n) {
			n.d(t, {
				Z: () => u
			}), n(953529);
			var r = n(255367),
				l = n(73800),
				i = n(120356),
				a = n.n(i),
				s = n(725436),
				c = n(974844),
				o = n(73433);

			function u(e) {
				let {
					description: t,
					className: n,
					guildId: i,
					truncate: u = !0
				} = e, d = l.useMemo(() => (0, s.m)(t, !0, {
					guildId: i,
					allowLinks: !0,
					allowHeading: !0,
					allowList: !0
				}), [t, i]);
				return (0, r.jsx)("div", {
					className: a()(c.descriptionText, n, o.markup, {
						[c.truncate]: u
					}),
					children: d
				})
			}
		},
		95291: function(e, t, n) {
			n.d(t, {
				Z: () => s
			});
			var r = n(255367);
			n(73800);
			var l = n(120356),
				i = n.n(l),
				a = n(912306);

			function s(e) {
				let {
					source: t,
					className: n
				} = e;
				return null == t ? null : (0, r.jsx)("div", {
					className: i()(a.container, n),
					style: {
						backgroundImage: "url(".concat(t, ")")
					}
				})
			}
		},
		742593: function(e, t, n) {
			n.d(t, {
				HZ: () => x,
				Rf: () => N,
				ZP: () => E
			}), n(953529);
			var r = n(255367);
			n(73800);
			var l = n(120356),
				i = n.n(l),
				a = n(442837),
				s = n(481060),
				c = n(271383),
				o = n(51144),
				u = n(894017),
				d = n(79874),
				p = n(315416),
				m = n(236373),
				f = n(854698),
				v = n(391174),
				g = n(95291),
				b = n(390966),
				h = n(388032),
				j = n(274569);

			function O(e) {
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

			function x(e) {
				let {
					className: t,
					creator: n,
					guildId: l,
					isNew: v,
					isHub: g = !1,
					guildEvent: x,
					eventPreview: N,
					recurrenceId: E
				} = e, w = (0, p.Z)(l, x.id, E), P = null != x ? x : N, S = (0, a.e7)([c.ZP], () => c.ZP.getNick(l, null == n ? void 0 : n.id), [l, n]);
				E = null == P || null != E ? E : (0, f.DK)(P);
				let {
					startTime: I
				} = (0, d.ZP)(null != x ? x : N, E), C = (0, u.Z)(E, x.id), T = (null == P ? void 0 : P.scheduled_start_time) != null ? (0, f.lh)(C, I, new Date(P.scheduled_start_time)) : null;
				if (null == P) return null;
				let {
					entity_type: D,
					status: Z,
					recurrence_rule: k
				} = P;
				return (0, r.jsxs)("div", {
					className: i()(j.statusContainer, t),
					children: [(0, r.jsx)(b.z, {
						startTime: I.toISOString(),
						status: null != T ? T : Z,
						eventType: D,
						isNew: v,
						recurrenceRule: (0, m.KV)(k),
						guildEventId: x.id,
						recurrenceId: E
					}), (0, r.jsx)("div", {
						className: j.spacer
					}), !g && null != n && (0, r.jsx)(s.ua7, {
						text: h.intl.formatToPlainString(h.t["+3iypa"], {
							username: null != S ? S : o.ZP.getName(n)
						}),
						children: e => (0, r.jsx)(s.qEK, y(O({}, e), {
							src: n.getAvatarURL(l, 20),
							size: s.EFr.SIZE_20,
							"aria-label": null != S ? S : n.username,
							className: j.creator
						}))
					}), (0, r.jsx)(s.ua7, {
						text: h.intl.formatToPlainString(h.t["+DLsDw"], {
							count: w
						}),
						children: e => (0, r.jsxs)("div", y(O({
							className: j.rsvpCount
						}, e), {
							children: [(0, r.jsx)(s.BFJ, {
								size: "xxs",
								color: "currentColor",
								className: j.rsvpIcon
							}), (0, r.jsx)(s.Text, {
								color: "header-secondary",
								variant: "text-sm/normal",
								children: w
							})]
						}))
					})]
				})
			}

			function N(e) {
				let {
					headerVariant: t = "heading-lg/medium",
					descriptionClassName: n,
					name: l,
					description: a,
					truncate: c,
					guildId: o,
					imageSource: u
				} = e;
				return (0, r.jsxs)("div", {
					className: i()({
						[j.withThumbnail]: null != u
					}),
					children: [(0, r.jsxs)("div", {
						className: i()({
							[j.descriptionWithThumbnail]: null != u
						}),
						children: [(0, r.jsx)(s.X6q, {
							variant: t,
							selectable: !0,
							className: j.eventName,
							children: l
						}), null != a && (0, r.jsx)(v.Z, {
							description: a,
							className: i()(n, j.description),
							truncate: c,
							guildId: o
						})]
					}), null != u && (0, r.jsx)("div", {
						className: j.thumbnailContainer,
						children: (0, r.jsx)(g.Z, {
							source: u,
							className: j.thumbnail
						})
					})]
				})
			}

			function E(e) {
				let {
					headerVariant: t,
					descriptionClassName: n,
					creator: l,
					name: i,
					description: a,
					imageSource: s,
					isHub: c = !1,
					truncate: o,
					guildId: u,
					isNew: d,
					guildEvent: p,
					eventPreview: m,
					recurrenceId: f
				} = e;
				return (0, r.jsxs)("div", {
					className: j.container,
					children: [null != s ? (0, r.jsx)("div", {
						className: j.thumbnailContainer,
						children: (0, r.jsx)(g.Z, {
							source: s,
							className: j.thumbnail
						})
					}) : null, (0, r.jsx)(x, {
						className: j.eventInfoStatusContainer,
						creator: l,
						guildId: u,
						isHub: c,
						isNew: d,
						guildEvent: p,
						eventPreview: m,
						recurrenceId: f
					}), (0, r.jsx)(N, {
						name: i,
						description: a,
						headerVariant: t,
						descriptionClassName: n,
						truncate: o,
						guildId: u
					})]
				})
			}
		},
		390966: function(e, t, n) {
			n.d(t, {
				z: () => j
			}), n(388685);
			var r = n(255367),
				l = n(73800),
				i = n(120356),
				a = n.n(i),
				s = n(913527),
				c = n.n(s),
				o = n(692547),
				u = n(481060),
				d = n(894017),
				p = n(854698),
				m = n(849464),
				f = n(765305),
				v = n(388032),
				g = n(923167);

			function b() {
				return (0, r.jsx)(u.IGR, {
					className: g.newBadge,
					color: o.Z.unsafe_rawColors.BRAND_260.css,
					text: (0, r.jsx)(u.Text, {
						className: g.newBadgeText,
						variant: "text-xs/bold",
						children: v.intl.string(v.t.y2b7CA)
					})
				})
			}

			function h(e) {
				let {
					children: t,
					className: n,
					tooltipText: l
				} = e;
				return (0, r.jsx)("div", {
					className: a()(g.eventStatusContainer, n),
					children: (0, r.jsx)(u.ua7, {
						position: "right",
						text: l,
						shouldShow: null != l,
						children: e => {
							var l, i;
							return (0, r.jsx)("div", (l = function(e) {
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
								className: a()(g.eventStatusContainer, n),
								children: t
							}, Object.getOwnPropertyDescriptors ? Object.defineProperties(l, Object.getOwnPropertyDescriptors(i)) : (function(e, t) {
								var n = Object.keys(e);
								if (Object.getOwnPropertySymbols) {
									var r = Object.getOwnPropertySymbols(e);
									n.push.apply(n, r)
								}
								return n
							})(Object(i)).forEach(function(e) {
								Object.defineProperty(l, e, Object.getOwnPropertyDescriptor(i, e))
							}), l))
						}
					})
				})
			}

			function j(e) {
				let {
					startTime: t,
					status: n,
					eventType: i,
					className: s,
					endTime: j,
					liveText: O,
					textVariant: y = "text-sm/semibold",
					isNew: x,
					recurrenceRule: N,
					guildEventId: E,
					recurrenceId: w
				} = e, P = (0, u.dQu)(o.Z.colors.TEXT_BRAND).hex(), S = (0, u.dQu)(o.Z.colors.TEXT_FEEDBACK_POSITIVE).hex(), I = (0, u.dQu)(o.Z.colors.TEXT_DANGER).hex();
				null == O && (O = i === f.WX.EXTERNAL ? v.intl.string(v.t.IyZxjI) : v.intl.string(v.t["X2K3//"]));
				let C = (0, d.Z)(w, E),
					[{
						startDateTimeString: T,
						endDateTimeString: D,
						currentOrPastEvent: Z,
						upcomingEvent: k,
						diffMinutes: R
					}, B] = l.useState((0, p.ub)(t, j));
				l.useEffect(() => {
					B((0, p.ub)(t, j));
					let e = setInterval(() => B((0, p.ub)(t, j)), 1e3);
					return () => {
						clearInterval(e)
					}
				}, [t, j]);
				let _ = T;
				null != D && "" !== D && (_ = v.intl.formatToPlainString(v.t.tXbu7O, {
					start: T,
					end: D
				}));
				let L = l.useMemo(() => n === f.p1.CANCELED || (null == C ? void 0 : C.is_canceled) ? 5 : n === f.p1.ACTIVE ? 3 : f.$I.has(n) ? 4 : Z ? 2 : +!!k, [n, null == C ? void 0 : C.is_canceled, Z, k]),
					z = function(e, t, n, l, i) {
						switch (e) {
							case 1:
								return i > 0 ? v.intl.formatToPlainString(v.t.PQlCWl, {
									minutes: i
								}) : v.intl.string(v.t.WINqKS);
							case 2:
								return v.intl.string(v.t.WINqKS);
							case 3:
								return null != l && "" !== l ? v.intl.format(v.t.vHYgJS, {
									start: n,
									startHook: e => (0, r.jsx)(u.Text, {
										color: "text-feedback-positive",
										variant: "text-sm/semibold",
										className: g.liveEventEndTime,
										children: e
									}),
									end: l
								}) : null != n ? n : "";
							default:
								return t
						}
					}(L, _, O, D, R),
					{
						Icon: A,
						iconColor: K,
						textColor: X,
						tooltipText: G
					} = l.useMemo(() => (function(e) {
						let t, {
								timeStatus: n,
								textBrand: r,
								textPositive: l,
								textDanger: i,
								endDateTimeString: a,
								startDateTimeString: s
							} = e,
							c = u.Que,
							o = r,
							d = "header-secondary";
						switch (n) {
							case 3:
								o = l, d = null != a ? void 0 : "text-feedback-positive";
								break;
							case 4:
								c = u.T39;
								break;
							case 2:
							case 1:
								d = "text-brand", t = s;
								break;
							case 5:
								o = i
						}
						return {
							Icon: c,
							iconColor: o,
							textColor: d,
							tooltipText: t
						}
					})({
						timeStatus: L,
						textBrand: P,
						textPositive: S,
						textDanger: I,
						endDateTimeString: D,
						startDateTimeString: T
					}), [L, P, S, I, D, T]),
					W = null;
				if (null != N) {
					let e = (0, p.Ho)(N);
					W = v.intl.formatToPlainString(v.t.HmKEqa, {
						recurrenceRule: e.toText()
					});
					let n = c()(t);
					W = function(e, t) {
						let n = t.toDate(),
							r = n.toLocaleString(v.intl.currentLocale, {
								weekday: "long"
							});
						switch (e) {
							case m.z.WEEKLY:
								return v.intl.formatToPlainString(v.t.xQM9X1, {
									weekday: r
								});
							case m.z.BIWEEKLY:
								return v.intl.formatToPlainString(v.t.RYscaW, {
									weekday: r
								});
							case m.z.MONTHLY:
								let l = Math.ceil(n.getDate() / 7);
								return v.intl.formatToPlainString(v.t["4ZN9Ag"], {
									weekday: r,
									nth: l
								});
							case m.z.YEARLY:
								return v.intl.formatToPlainString(v.t["rXUS+v"], {
									date: n.toLocaleString(v.intl.currentLocale, {
										month: "short",
										day: "2-digit"
									})
								});
							case m.z.WEEKDAY_ONLY:
								return v.intl.string(v.t["2BX6bG"]);
							case m.z.WEEKEND_ONLY:
								return v.intl.string(v.t["IEi+R0"]);
							default:
								return null
						}
					}((0, p.zi)(n, N), n)
				}
				return (0, r.jsxs)(h, {
					className: a()(s, {
						[g.isRecurring]: null != W
					}),
					tooltipText: G,
					children: [x && n === f.p1.SCHEDULED ? (0, r.jsx)(b, {}) : (0, r.jsx)(A, {
						color: K,
						size: "custom",
						width: 20,
						height: 20
					}), (0, r.jsxs)("div", {
						className: g.eventStatusLabel,
						children: [(0, r.jsx)(u.Text, {
							color: X,
							variant: y,
							children: z
						}), null != W && (0, r.jsx)(u.Text, {
							color: "header-secondary",
							variant: "text-xs/normal",
							children: W
						})]
					})]
				})
			}
		},
		217804: function(e, t, n) {
			n.d(t, {
				u: () => a
			});
			var r = n(481060),
				l = n(471445),
				i = n(230900);

			function a(e, t) {
				let n, a;
				if (null == e) return null;
				let s = (0, i.cS)(e);
				if (null != s) n = r._tJ, a = s;
				else {
					if (null == t) return null;
					n = (0, l.Th)(t.type), a = t.name
				}
				return {
					IconComponent: n,
					locationName: a
				}
			}
		},
		139712: function(e, t, n) {
			n.d(t, {
				Z: () => v
			}), n(388685);
			var r = n(255367),
				l = n(73800),
				i = n(755721),
				a = n(481060),
				s = n(482241),
				c = n(124165),
				o = n(765305),
				u = n(388032),
				d = n(976988);

			function p(e) {
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

			function m(e, t) {
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

			function f(e) {
				var {
					event: t,
					recurrenceId: n,
					guildId: f,
					onRsvp: v
				} = e, g = function(e, t) {
					if (null == e) return {};
					var n, r, l = function(e, t) {
						if (null == e) return {};
						var n, r, l = {},
							i = Object.keys(e);
						for (r = 0; r < i.length; r++) n = i[r], t.indexOf(n) >= 0 || (l[n] = e[n]);
						return l
					}(e, t);
					if (Object.getOwnPropertySymbols) {
						var i = Object.getOwnPropertySymbols(e);
						for (r = 0; r < i.length; r++) n = i[r], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (l[n] = e[n])
					}
					return l
				}(e, ["event", "recurrenceId", "guildId", "onRsvp"]);
				let [b, h] = l.useState(c.KX.SERIES), j = (0, c.X2)(t.id, null), O = (null == j ? void 0 : j.response) === o.gv.INTERESTED ? o.gv.UNINTERESTED : o.gv.INTERESTED, y = O === o.gv.INTERESTED ? u.intl.string(u.t.WtOReX) : u.intl.string(u.t["8MPCVl"]);
				return (0, r.jsx)(a.ConfirmModal, m(p({}, g), {
					header: y,
					confirmText: u.intl.string(u.t.TyCVIi),
					cancelText: u.intl.string(u.t["ETE/oK"]),
					onConfirm: () => {
						b === c.KX.SERIES ? s.Z.updateRsvp(t.id, null, f, O) : s.Z.updateRsvp(t.id, n, f, O), null == v || v(), g.onClose()
					},
					confirmButtonColor: i.zx.Colors.BRAND,
					children: (0, r.jsx)(a.FXm, {
						className: d.responseOptions,
						value: b,
						options: (0, c.pF)(),
						onChange: e => h(e.value)
					})
				}))
			}

			function v(e, t, n, l) {
				(0, c.cg)({
					eventId: e,
					recurrenceId: t,
					guildId: n,
					updateRsvp: (t, r, l, i) => s.Z.updateRsvp(e, r, n, i),
					openRsvpPicker: (e, t) => {
						(0, a.ZDy)(() => Promise.resolve(i => (0, r.jsx)(f, m(p({}, i), {
							event: e,
							recurrenceId: t,
							guildId: n,
							onRsvp: l
						}))))
					},
					onRsvp: l
				})
			}
		},
		955415: function(e, t, n) {
			n.d(t, {
				Z: () => Z
			}), n(539854), n(388685);
			var r = n(255367),
				l = n(73800),
				i = n(120356),
				a = n.n(i),
				s = n(755721),
				c = n(481060),
				o = n(43267),
				u = n(933557),
				d = n(471445),
				p = n(600164),
				m = n(925329),
				f = n(565138),
				v = n(134432),
				g = n(695346),
				b = n(768581),
				h = n(153066),
				j = n(388032),
				O = n(676011);
			let y = e => {
					let {
						text: t,
						extra: n
					} = e;
					return (0, r.jsxs)(c.vwX, {
						className: O.header,
						children: [t, n]
					})
				},
				x = e => {
					let {
						resolving: t,
						children: n
					} = e;
					return (0, r.jsx)("div", {
						className: O.content,
						children: t ? (0, r.jsxs)("div", {
							className: O.resolvingWrapper,
							children: [(0, r.jsx)("div", {
								className: O.resolving,
								children: (0, r.jsx)("div", {
									className: O.resolvingBackground
								})
							}), (0, r.jsx)("div", {
								className: O.resolvingFakeButton,
								children: (0, r.jsx)("div", {
									className: O.resolvingBackground
								})
							})]
						}) : n
					})
				},
				N = e => {
					var t;
					let {
						application: n,
						guild: l,
						channel: i,
						onClick: s,
						expired: d = !1,
						user: p,
						className: v
					} = e, b = null != (t = (0, u.ZP)(i)) ? t : "", j = g.QK.useSetting();
					if (d) return (0, r.jsx)("div", {
						className: O.guildIconExpired
					});
					let y = null == l || null != l.icon,
						x = a()((0, h.l)(O, "guildIcon", y ? "Image" : "", null != s ? "Joined" : ""), v);
					return null != n ? (0, r.jsx)(m.Z, {
						game: n,
						onClick: s,
						size: O.applicationIcon,
						className: x
					}) : null != l ? (0, r.jsx)(f.Z, {
						onClick: s,
						active: !0,
						guild: l,
						className: x,
						animate: j
					}) : null != i ? (0, r.jsx)(c.qEK, {
						onClick: s,
						src: (0, o.x)(i),
						size: c.EFr.SIZE_56,
						className: x,
						"aria-label": b
					}) : null != p ? (0, r.jsx)(c.qEK, {
						onClick: s,
						src: p.getAvatarURL(null, 56),
						size: c.EFr.SIZE_56,
						className: x,
						"aria-label": b
					}) : null
				},
				E = e => {
					let {
						title: t,
						onClick: n,
						expired: l,
						children: i
					} = e, a = (0, r.jsx)(c.X6q, {
						variant: "heading-md/semibold",
						className: (0, h.l)(O, "inviteDestination", l ? "Expired" : null != n ? "Joined" : ""),
						children: t
					});
					return (0, r.jsxs)(p.Z, {
						className: O.guildInfo,
						direction: p.Z.Direction.VERTICAL,
						justify: p.Z.Justify.CENTER,
						children: [null == n ? a : (0, r.jsx)(c.P3F, {
							onClick: n,
							children: a
						}), (0, r.jsx)(c.Text, {
							tag: "strong",
							className: O.guildDetail,
							variant: "text-sm/normal",
							children: i
						})]
					})
				},
				w = e => {
					let {
						membersOnline: t,
						members: n
					} = e, l = [];
					return null != t && t > 0 && l.push((0, r.jsxs)("div", {
						className: O.statusWrapper,
						children: [(0, r.jsx)("i", {
							className: O.statusOnline
						}), (0, r.jsx)("span", {
							className: O.count,
							children: j.intl.format(j.t["LC+S+v"], {
								membersOnline: t
							})
						})]
					}, "onlineCount")), null != n && l.push((0, r.jsxs)("div", {
						className: O.statusWrapper,
						children: [(0, r.jsx)("i", {
							className: O.statusOffline
						}), (0, r.jsx)("span", {
							className: O.count,
							children: j.intl.format(j.t.zRl6XV, {
								count: n
							})
						})]
					}, "memberCount")), (0, r.jsx)("div", {
						className: O.statusCounts,
						children: l
					})
				},
				P = e => {
					let {
						channel: t,
						guild: n
					} = e, l = (0, d.KS)(t, n);
					return null == t || null == l ? null : (0, r.jsxs)("div", {
						className: O.channel,
						children: [(0, r.jsx)(l, {
							className: O.channelIcon,
							color: "currentColor",
							size: "custom",
							width: 20,
							height: 20
						}), (0, r.jsx)("span", {
							className: O.channelName,
							children: t.name
						})]
					})
				},
				S = e => {
					var t, n, {
							children: l,
							onClick: i,
							className: c,
							isDisabled: o
						} = e,
						u = function(e, t) {
							if (null == e) return {};
							var n, r, l = function(e, t) {
								if (null == e) return {};
								var n, r, l = {},
									i = Object.keys(e);
								for (r = 0; r < i.length; r++) n = i[r], t.indexOf(n) >= 0 || (l[n] = e[n]);
								return l
							}(e, t);
							if (Object.getOwnPropertySymbols) {
								var i = Object.getOwnPropertySymbols(e);
								for (r = 0; r < i.length; r++) n = i[r], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (l[n] = e[n])
							}
							return l
						}(e, ["children", "onClick", "className", "isDisabled"]);
					return (0, r.jsx)(s.zx, (t = function(e) {
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
					}({}, u), n = n = {
						disabled: o,
						onClick: i,
						size: O.buttonSize,
						className: a()(O.button, c),
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
				};
			S.Colors = s.zx.Colors, S.Looks = s.zx.Looks, S.defaultProps = {
				className: null,
				isDisabled: !1
			};
			let I = e => {
					let {
						children: t,
						className: n,
						containerRef: l
					} = e;
					return (0, r.jsx)("div", {
						ref: l,
						className: a()(O.wrapper, n),
						children: t
					})
				},
				C = e => {
					let {
						guild: t
					} = e, [n, i] = l.useState(!1), s = b.ZP.getGuildSplashURL({
						id: t.id,
						splash: t.splash,
						size: 400 * (0, v.x_)()
					});
					return null == s ? null : (0, r.jsx)("div", {
						className: O.inviteSplash,
						children: (0, r.jsx)("img", {
							src: s,
							alt: "",
							className: a()(O.inviteSplashImage, {
								[O.inviteSplashImageLoaded]: n
							}),
							onLoad: () => i(!0)
						})
					})
				},
				T = e => {
					let {
						guild: t,
						ref: n
					} = e;
					return (0, r.jsx)("div", {
						className: O.guildNameWrapper,
						ref: n,
						children: (0, r.jsx)("span", {
							className: O.guildName,
							children: t.name
						})
					})
				},
				D = e => {
					let {
						guildTemplate: t
					} = e;
					return (0, r.jsx)("div", {
						className: O.guildNameWrapper,
						children: (0, r.jsx)("span", {
							className: O.guildName,
							children: t.serializedSourceGuild.name
						})
					})
				};
			I.Header = y, I.Body = x, I.Icon = N, I.Info = E, I.Data = w, I.Channel = P, I.Button = S, I.GuildSplash = C, I.GuildName = T, I.GuildTemplateName = D, y.displayName = "InviteButton.Header", x.displayName = "InviteButton.Body", N.displayName = "InviteButton.Icon", E.displayName = "InviteButton.Info", w.displayName = "InviteButton.Data", P.displayName = "InviteButton.Channel", S.displayName = "InviteButton.Button", C.displayName = "InviteButton.GuildSplash", T.displayName = "InviteButton.GuildName", D.displayName = "InviteButton.GuildTemplateName";
			let Z = I
		}
	}
]);
//# sourceMappingURL=2b58bb194af3d99b.js.map