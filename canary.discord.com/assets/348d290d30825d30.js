"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
	["37220"], {
		466721: function(e, t, n) {
			n.d(t, {
				C: () => r
			});
			let r = (0, n(818083).B)({
				kind: "user",
				id: "2025-07_staff_ai_features",
				label: "Staff AI Features",
				defaultConfig: {
					enableAIFeatures: !1
				},
				treatments: [{
					id: 1,
					label: "Enable AI Features",
					config: {
						enableAIFeatures: !0
					}
				}]
			})
		},
		112554: function(e, t, n) {
			n.d(t, {
				Z: () => c,
				v: () => s
			});
			var r = n(399606),
				i = n(375954),
				l = n(991621),
				a = n(629710),
				o = n(262777);
			let s = (e, t, n) => {
					var s, c;
					let u = (0, r.e7)([i.Z], () => i.Z.getMessage(e, t)),
						d = (0, o.v)(u);
					if (null == u) return [];
					let f = void 0 !== n ? e => e.url === n || e.id === n : e => (0, a.g4)({
						type: l.l.Attachment,
						media: e
					}, d);
					return null != (c = null == u || null == (s = u.attachments) ? void 0 : s.filter(f)) ? c : []
				},
				c = (e, t, n) => {
					var s, c;
					let u = (0, r.e7)([i.Z], () => i.Z.getMessage(e, t)),
						d = (0, o.v)(u);
					if (null == u) return [];
					let f = void 0 !== n ? e => e.id === n : e => (0, a.g4)({
						type: l.l.Embed,
						media: e
					}, d);
					return null != (c = null == u || null == (s = u.embeds) ? void 0 : s.filter(f)) ? c : []
				}
		},
		788679: function(e, t, n) {
			n.r(t), n.d(t, {
				default: () => d
			});
			var r = n(255367);
			n(73800);
			var i = n(481060),
				l = n(522664),
				a = n(247206),
				o = n(668058),
				s = n(112554),
				c = n(160877),
				u = n(388032);

			function d(e) {
				let {
					channelId: t,
					messageId: n,
					mediaItemUrl: d,
					embedId: f,
					transitionState: g,
					onClose: b
				} = e, p = (0, s.v)(t, n, d), m = (0, s.Z)(t, n, f), {
					reportFalsePositive: O,
					isReportFalsePositiveLoading: y
				} = (0, o.$)({
					onSuccess: () => (0, c.s)(b),
					onError: () => {
						(0, i.showToast)((0, i.createToast)(u.intl.string(u.t.R0RpRU), i.ToastType.FAILURE))
					},
					report: () => {
						(0, l.Uj)(t, n, p.map(e => e.id), m.map(e => e.id))
					}
				});
				return p.length > 0 || m.length > 0 || b(), (0, r.jsx)(c.$, {
					messageId: n,
					channelId: t,
					isReportFalsePositiveLoading: y,
					analyticsContext: a.UU.EXPLICIT_MEDIA_OBSCURED_FALSE_POSITIVE_FLOW,
					onConfirmPress: O,
					attachmentPreview: 1 === p.length && 0 === m.length ? p[0] : void 0,
					embedPreview: 1 === m.length && 0 === p.length ? m[0] : void 0,
					transitionState: g,
					onClose: b
				})
			}
		},
		822869: function(e, t, n) {
			n.d(t, {
				Ad: () => b,
				Lb: () => c,
				ZF: () => f,
				gP: () => d,
				mh: () => g,
				sF: () => u
			});
			var r = n(73800),
				i = n(392711),
				l = n(367907),
				a = n(592125),
				o = n(626135),
				s = n(981631);

			function c(e, t, n) {
				o.default.track(s.rMx.FORWARD_MESSAGE_STARTED, {
					channel_id: e,
					message_id: t,
					source: n
				})
			}

			function u(e) {
				let {
					channelId: t,
					messageId: n,
					numDestinationChanges: r,
					numQueryChanges: i
				} = e;
				o.default.track(s.rMx.FORWARD_MESSAGE_CANCELLED, {
					channel_id: t,
					message_id: n,
					num_destination_changes: r,
					num_query_changes: i
				})
			}

			function d(e) {
				let {
					channelId: t,
					messageId: n,
					hasError: r,
					hasContextMessage: i,
					numDestinations: c,
					numDestinationChanges: u,
					numQueryChanges: d,
					anyDestinationHasSlowmode: f,
					source: g
				} = e;
				if (o.default.track(s.rMx.FORWARD_MESSAGE_SENT, {
						channel_id: t,
						message_id: n,
						has_error: r,
						has_context_message: i,
						num_destinations: c,
						num_destination_changes: u,
						num_query_changes: d,
						any_destination_has_slowmode: f
					}), "message-shortcut" === g) {
					let e = a.Z.getChannel(t);
					o.default.track(s.rMx.MESSAGE_SHORTCUT_ACTION_SENT, function(e) {
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
						action: "forward",
						original_message_id: n
					}, (0, l.hH)(null == e ? void 0 : e.guild_id), (0, l.v_)(e)))
				}
			}

			function f() {
				return r.useMemo(() => (0, i.once)((e, t, n) => {
					o.default.track(s.rMx.FORWARD_ADD_RECIPIENT, {
						channel_id: e,
						message_id: t,
						has_query: n
					})
				}), [])
			}

			function g() {
				return r.useMemo(() => (0, i.once)((e, t) => {
					o.default.track(s.rMx.FORWARD_EDIT_SEARCH, {
						channel_id: e,
						message_id: t
					})
				}), [])
			}

			function b() {
				return r.useMemo(() => (0, i.once)((e, t) => {
					o.default.track(s.rMx.FORWARD_EDIT_CONTEXT_MESSAGE, {
						channel_id: e,
						message_id: t
					})
				}), [])
			}
		},
		868643: function(e, t, n) {
			n.d(t, {
				a: () => g,
				h: () => f
			}), n(997841);
			var r = n(73800),
				i = n(442837),
				l = n(430198),
				a = n(592125),
				o = n(430824),
				s = n(630388),
				c = n(981631);
			let u = c.iLy.CROSSPOSTED | c.iLy.FAILED_TO_MENTION_SOME_ROLES_IN_THREAD | c.iLy.GUILD_FEED_HIDDEN | c.iLy.HAS_SNAPSHOT | c.iLy.HAS_THREAD | c.iLy.IS_CROSSPOST | c.iLy.IS_VOICE_MESSAGE | c.iLy.SHOULD_SHOW_LINK_NOT_DISCORD_WARNING | c.iLy.SUPPRESS_EMBEDS | c.iLy.SUPPRESS_NOTIFICATIONS | c.iLy.URGENT | c.iLy.IS_COMPONENTS_V2;

			function d(e) {
				return e.state !== c.yb.SEND_FAILED && !!c.V$x.FORWARDABLE.has(e.type) && null == e.poll && null == e.activity && null == e.call && null == e.activityInstance && 0 === (0, s.Ge)(e.flags, u) && !0
			}

			function f(e) {
				var t;
				if (!d(e)) return !1;
				let n = null == (t = a.Z.getChannel(e.channel_id)) ? void 0 : t.guild_id;
				return !(null != n && l.Z.isChannelOrThreadParentGated(n, e.channel_id))
			}

			function g(e) {
				let t = (0, i.e7)([o.Z, l.Z, a.Z], () => {
					var t, n, r;
					if (null == e) return !0;
					let i = null == (t = a.Z.getChannel(e.channel_id)) ? void 0 : t.guild_id;
					if (null != i && (null == (n = o.Z.getGuild(i)) ? void 0 : n.features.has(c.oNc.FORWARDING_DISABLED))) return !0;
					let s = null != i && l.Z.isChannelOrThreadParentGated(i, e.channel_id),
						u = null != e && (null == (r = a.Z.getChannel(e.channel_id)) ? void 0 : r.isModeratorReportChannel());
					return s || u
				});
				return r.useMemo(() => !t && null != e && d(e), [t, e])
			}
		},
		912332: function(e, t, n) {
			n.d(t, {
				Np: () => d,
				l8: () => c,
				mc: () => u,
				so: () => s
			});
			var r = n(255367);
			n(73800);
			var i = n(481060),
				l = n(822869);

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
			let s = "forward-modal";

			function c(e) {
				let {
					message: t,
					source: c,
					initialSelectedDestinations: u = [],
					forwardOptions: d,
					onRequestSent: f
				} = e;
				(0, l.Lb)(t.channel_id, t.id, c), (0, i.ZDy)(async () => {
					let {
						ForwardModal: e
					} = await Promise.all([n.e("25292"), n.e("6380"), n.e("16967")]).then(n.bind(n, 930864));
					return n => (0, r.jsx)(e, o(a({}, n), {
						message: t,
						initialSelectedDestinations: u,
						forwardOptions: d,
						onRequestSent: f
					}))
				}, {
					modalKey: s
				})
			}

			function u() {
				(0, i.Mr3)(s)
			}

			function d(e) {
				let {
					message: t,
					failedDestinations: l,
					forwardOptions: s
				} = e;
				(0, i.ZDy)(async () => {
					let {
						ForwardFailedAlertModal: e
					} = await n.e("86590").then(n.bind(n, 384331));
					return n => (0, r.jsx)(e, o(a({}, n), {
						message: t,
						failedDestinations: l,
						forwardOptions: s
					}))
				})
			}
		},
		111618: function(e, t, n) {
			n.d(t, {
				Z: () => u
			});
			var r, i, l, a = n(442837),
				o = n(570140);
			let s = {};
			class c extends(l = a.ZP.Store) {
				getOptions(e) {
					return s[e]
				}
			}
			i = "SendMessageOptionsStore", (r = "displayName") in c ? Object.defineProperty(c, r, {
				value: i,
				enumerable: !0,
				configurable: !0,
				writable: !0
			}) : c[r] = i;
			let u = new c(o.Z, {
				MESSAGE_CREATE: function(e) {
					let {
						message: t,
						sendMessageOptions: n
					} = e;
					null != n && (s[t.id] = n), null != t.nonce && t.nonce in s && delete s[t.nonce]
				}
			})
		},
		730954: function(e, t, n) {
			n.d(t, {
				Z: () => l
			}), n(997841);
			var r = n(904245),
				i = n(667204);

			function l(e, t, n) {
				let l = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
				if (r.Z.deleteMessage(e.id, t.id, !0), t.isCommandType()) {
					null != t.interactionData && null != l.applicationId && (0, i.d)(t, e, l);
					return
				}
				let {
					content: a,
					tts: o,
					messageReference: s,
					flags: c,
					nonce: u
				} = t;
				r.Z.sendMessage(e.id, {
					content: a,
					tts: o,
					invalidEmojis: [],
					validNonShortcutEmojis: []
				}, void 0, function(e) {
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
					nonce: u,
					flags: c,
					messageReference: null != s ? s : void 0
				}, l))
			}
		},
		996861: function(e, t, n) {
			n.d(t, {
				$Z: () => Z,
				B8: () => I,
				F4: () => _,
				HH: () => x,
				Hd: () => T,
				Xl: () => A,
				dF: () => C,
				eM: () => R,
				fB: () => P,
				gK: () => M,
				mG: () => w,
				qe: () => D,
				rY: () => N,
				ts: () => L,
				zW: () => E
			}), n(255367), n(73800), n(481060);
			var r = n(332148),
				i = n(904245),
				l = n(257559),
				a = n(143740),
				o = n(912332),
				s = n(434404);
			n(726521);
			var c = n(623292),
				u = n(324701),
				d = n(488131),
				f = n(314897),
				g = n(592125),
				b = n(626135),
				p = n(934415),
				m = n(572004),
				O = n(585483),
				y = n(709054),
				h = n(111618),
				v = n(50284),
				j = n(730954),
				S = n(981631);

			function E(e) {
				let t = e.getGuildId();
				null != t && s.Z.open(t, S.pNK.ENGAGEMENT)
			}

			function _(e, t, n) {
				(0, m.JG)(n.shiftKey ? "".concat(t.channel_id, "-").concat(t.id) : t.id)
			}

			function P(e, t) {
				b.default.track(S.rMx.MESSAGE_LINK_COPIED, {
					message_id: t.id,
					channel: t.channel_id
				}), (0, m.JG)((0, p.wR)(e.guild_id, e.id, t.id))
			}

			function Z(e, t, n) {
				t.state === S.yb.SEND_FAILED || n.shiftKey ? i.Z.deleteMessage(e.id, t.id, t.state === S.yb.SEND_FAILED) : l.Z.confirmDelete(e, t)
			}

			function T(e, t) {
				i.Z.startEditMessage(e.id, t.id, t.content)
			}

			function I(e, t) {
				(0, v.Z)(e.id, t.id)
			}

			function N(e, t, n) {
				if (!1 === t.pinned) return void(n.shiftKey ? r.Z.pinMessage(e, t.id) : l.Z.confirmPin(e, t));
				n.shiftKey ? r.Z.unpinMessage(e, t.id) : l.Z.confirmUnpin(e, t)
			}

			function A(e, t) {
				(0, a.Z)(e.id, t.id)
			}

			function w(e, t) {
				(0, j.Z)(e, t, void 0, h.Z.getOptions(t.id))
			}

			function x(e, t, n) {
				let r = e.isPrivate(),
					i = t.author.id === f.default.getId();
				(0, c.fE)({
					channel: e,
					message: t,
					shouldMention: !n.shiftKey && !i,
					showMentionToggle: !r && !i
				}), O.S.dispatch(S.CkL.FOCUS_CHANNEL_TEXT_AREA, {
					channelId: e.id
				})
			}

			function M(e, t) {
				(0, d.R6)(e, t, "Message")
			}

			function D(e, t) {
				let n = g.Z.getChannel(y.default.castMessageIdAsChannelId(t.id));
				null != n && (0, d.ok)(n)
			}

			function C(e, t) {
				(0, u.z)({
					channelId: e.id,
					messageId: t.id
				})
			}

			function R(e, t) {
				(0, u.x)({
					channelId: e.id,
					messageId: t.id
				})
			}

			function L(e, t) {
				(0, o.l8)({
					message: t,
					source: "message-actions"
				})
			}
		},
		225138: function(e, t, n) {
			n.d(t, {
				S: () => X,
				default: () => B
			});
			var r = n(255367);
			n(73800);
			var i = n(374470),
				l = n(481060),
				a = n(239091),
				o = n(911969),
				s = n(100527),
				c = n(906732),
				u = n(299206),
				d = n(26737),
				f = n(29264),
				g = n(905041),
				b = n(89013),
				p = n(988500),
				m = n(570870),
				O = n(786095),
				y = n(268623),
				h = n(986240),
				v = n(667922),
				j = n(941389),
				S = n(449751),
				E = n(749339),
				_ = n(601184),
				P = n(6148),
				Z = n(519110),
				T = n(759875),
				I = n(168405),
				N = n(536639),
				A = n(720904),
				w = n(88791),
				x = n(385302),
				M = n(873699),
				D = n(134323),
				C = n(429260),
				R = n(1626),
				L = n(279329),
				k = n(627938),
				G = n(189976),
				U = n(512303),
				F = n(481300),
				H = n(975368),
				z = n(388032);

			function B(e) {
				var t, n;
				let l, o, u, d, {
						channel: f,
						message: g,
						target: b,
						mediaItem: p,
						shouldHideMediaOptions: m,
						onSelect: O,
						onHeightUpdate: y
					} = e,
					{
						analyticsLocations: h
					} = (0, c.ZP)([s.Z.MESSAGE_CONTEXT_MENU]),
					v = b,
					j = b.getAttribute("data-type"),
					S = b.getAttribute("data-id"),
					E = b.getAttribute("data-name");
				if (null != p) o = l = u = p.url;
				else
					for (;
						(0, i.k)(v);)(0, i.k)(v, HTMLImageElement) && null != v.src && (o = v.src), (0, i.k)(v, HTMLAnchorElement) && null != v.href && (l = v.href, d = v.textContent, null == o && "img" === v.getAttribute("data-role") && (o = l, v.hasAttribute("data-safe-src") && "" !== v.getAttribute("data-safe-src") && (u = v.getAttribute("data-safe-src")))), v = v.parentNode;
				let _ = null != (n = null == (t = document.getSelection()) ? void 0 : t.toString()) ? n : "";
				return (0, r.jsx)(c.Gt, {
					value: h,
					children: X({
						message: g,
						channel: f,
						mediaItem: p,
						textSelection: _,
						favoriteableType: j,
						favoriteableId: S,
						favoriteableName: E,
						itemHref: l,
						itemSrc: o,
						itemSafeSrc: u,
						itemTextContent: d,
						canReport: !0,
						onHeightUpdate: y,
						onSelect: O,
						onClose: a.Zy,
						navId: "message",
						ariaLabel: z.intl.string(z.t.ChPNkJ),
						shouldHideMediaOptions: m
					})
				})
			}

			function X(e) {
				let {
					message: t,
					channel: n,
					mediaItem: i,
					textSelection: a,
					favoriteableType: s,
					favoriteableId: c,
					favoriteableName: B,
					itemHref: X,
					itemSrc: K,
					itemSafeSrc: W,
					itemTextContent: q,
					canReport: V,
					onHeightUpdate: J,
					onSelect: Q,
					onClose: Y,
					navId: $,
					ariaLabel: ee,
					shouldHideMediaOptions: et = !1
				} = e, en = (0, d.Z)(a), er = (0, b.Z)(a), ei = (0, A.Z)(t, n), el = (0, v.Z)(t, n), ea = (0, P.Z)(t, n), eo = (0, N.Z)(t, n), es = (0, Z.Z)({
					type: s,
					id: c,
					name: B
				}), ec = (0, R.Z)(t, n), eu = (0, I.Z)(t, n), ed = (0, w.Z)(t), ef = (0, j.Z)(t, n), eg = (0, S.Z)(t, n), eb = (0, x.Z)(t, n), ep = (0, M.Z)(t, n), em = (0, _.Z)(t, n), eO = (0, C.ZP)(t), ey = (0, C.wY)(t), eh = (0, C.eH)(t), ev = (0, L.Z)(t, n), ej = (0, g.Z)(null != X ? X : K, q, t, {
					shouldHideMediaOptions: et
				}), eS = (0, f.Z)(W, t, {
					shouldHideMediaOptions: et,
					contentType: null == i ? void 0 : i.contentType
				}), eE = (0, F.Z)(t, i), e_ = (0, u.Z)({
					id: t.id,
					label: z.intl.string(z.t.zBoHlZ),
					shiftId: "".concat(t.channel_id, "-").concat(t.id)
				}), eP = (0, D.Z)(t, n), eZ = (0, T.Z)(t, n), eT = (0, k.Z)(t, n), eI = (0, O.Z)(a, n.getGuildId()), eN = (0, y.Z)(t), eA = (0, E.Z)(t), ew = (0, G.Z)(t, n), ex = (0, H.Z)(t), eM = (0, h.Z)(t, n), eD = (0, m.Z)({
					commandType: o.yU.MESSAGE,
					commandTargetId: t.id,
					channel: n,
					guildId: void 0,
					onHeightUpdate: J
				}), eC = (0, U.Z)(t), eR = (0, p.Z)(t);
				return (0, r.jsxs)(l.v2r, {
					navId: $,
					onClose: Y,
					"aria-label": ee,
					onSelect: Q,
					children: [(0, r.jsx)(l.kSQ, {
						children: en
					}), (0, r.jsx)(l.kSQ, {
						children: er
					}), (0, r.jsxs)(l.kSQ, {
						children: ["" === a ? ei : null, el, ed, eM]
					}), (0, r.jsxs)(l.kSQ, {
						children: [ea, eP, eZ, eT]
					}), (0, r.jsxs)(l.kSQ, {
						children: [eA, ew, eo, eN, eD, ec, eu, ef, eg, ev, eR, eC]
					}), (0, r.jsxs)(l.kSQ, {
						children: [ep, eb, em, V && eO, V && eh, ey]
					}), (0, r.jsxs)(l.kSQ, {
						children: [es, eI, eS, eE, ex]
					}), (0, r.jsx)(l.kSQ, {
						children: ej
					}), (0, r.jsx)(l.kSQ, {
						children: e_
					})]
				})
			}
		},
		786095: function(e, t, n) {
			n.d(t, {
				Z: () => S
			}), n(388685), n(35282);
			var r = n(255367),
				i = n(73800),
				l = n(481060),
				a = n(239091),
				o = n(236413),
				s = n(727072),
				c = n(85960),
				u = n(676317),
				d = n(65912),
				f = n(556012),
				g = n(572456),
				b = n(434404),
				p = n(981631),
				m = n(273504),
				O = n(388032),
				y = n(466745);

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

			function v(e, t) {
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
			let j = m.fX.KEYWORD;

			function S(e, t) {
				let {
					perGuildMaxCount: n
				} = c.I6[j], {
					isLoading: S,
					saveRule: E,
					errorMessage: _
				} = (0, d.w)(), {
					createNewEditingRule: P
				} = (0, d.V)(), [Z, T] = i.useState(!1), [I, N] = (0, s.I2)(t), {
					rulesByTriggerType: A,
					updateRule: w
				} = (0, s.pH)(t), x = i.useMemo(() => {
					var e;
					return null != (e = A[j]) ? e : []
				}, [A]), M = 0 === x.length, D = n > x.length && !M;
				if (!i.useMemo(() => (0, u.ze)(t), [t]) || null == e || 0 === e.length || null == t) return null;
				let C = e.split(" "),
					R = C.length;
				try {
					(0, o.km)(C, m.RH)
				} catch (e) {
					return null
				}
				let L = () => {
						null != t && ((0, a.Zy)(), b.Z.open(t, p.pNK.GUILD_AUTOMOD), setTimeout(() => {
							P(t, j, {
								triggerMetadata: {
									keywordFilter: [e],
									regexPatterns: [],
									allowList: []
								}
							})
						}, 400))
					},
					k = async t => {
						var n, r;
						if ((0, a.Zy)(), !await (0, g.XN)(t.name, e)) return;
						let i = v(h({}, t), {
							triggerMetadata: v(h({}, t.triggerMetadata), {
								keywordFilter: [...null != (r = null == (n = t.triggerMetadata) ? void 0 : n.keywordFilter) ? r : [], e]
							})
						});
						await E(i, x), w(i), null != _ ? (0, l.showToast)((0, l.createToast)(O.intl.string(O.t.wH6L0t), l.ToastType.FAILURE)) : (0, l.showToast)((0, l.createToast)(O.intl.string(O.t["0rdYm5"]), l.ToastType.SUCCESS))
					}, G = (0, r.jsx)(l.sNh, {
						id: "automod-rules-loading",
						label: O.intl.string(O.t.ZTNur6)
					});
				return I || (G = (0, r.jsxs)(r.Fragment, {
					children: [M && (0, r.jsx)(l.sNh, {
						id: "add-first-rule",
						label: O.intl.string(O.t.f72Zqa),
						action: L,
						disabled: S
					}), x.map(e => {
						let t = (0, c.V9)(j).reduce((t, n) => {
							let r = e.actions.find(e => {
								let {
									type: t
								} = e;
								return n === t
							});
							if (null == r) return t;
							let i = (0, f.c)(n, r);
							return t + ", ".concat(null == i ? void 0 : i.headerText)
						}, "");
						return (0, r.jsx)(l.k5B, {
							id: e.id,
							label: e.name,
							subtext: (0, r.jsx)(l.Text, {
								color: "text-muted",
								className: y.actionTextHeader,
								variant: "text-xs/normal",
								children: t.slice(2)
							}),
							group: "automod-rule-selection",
							checked: !1,
							disabled: S,
							action: () => k(e)
						}, e.id)
					}), D && (0, r.jsxs)(r.Fragment, {
						children: [(0, r.jsx)(l.Clw, {}), (0, r.jsx)(l.sNh, {
							id: "add-another-rule",
							label: O.intl.string(O.t["0K5jDA"]),
							action: L,
							disabled: S
						})]
					})]
				})), (0, r.jsx)(l.sNh, {
					id: "guild-automod-add-selection",
					label: O.intl.formatToPlainString(O.t.Kkjv1t, {
						keywordCount: R
					}),
					onFocus: () => {
						Z || (T(!0), N())
					},
					children: G
				})
			}
		},
		268623: function(e, t, n) {
			n.d(t, {
				Z: () => m,
				x: () => O
			}), n(388685);
			var r = n(255367),
				i = n(73800),
				l = n(442837),
				a = n(481060),
				o = n(436774),
				s = n(2818),
				c = n(324701),
				u = n(575016),
				d = n(768943),
				f = n(175006),
				g = n(898150),
				b = n(70956),
				p = n(388032);

			function m(e) {
				let {
					enabled: t
				} = s.Z.useExperiment({
					location: "LongPressMessageActionSheet"
				}), n = (0, l.e7)([d.Z], () => d.Z.getSavedMessage(e.channel_id, e.id)), i = O({
					message: e,
					savedMessage: n
				});
				return t ? null != n || (0, f.Z)() ? (0, r.jsxs)(a.sNh, {
					id: "save-for-later",
					label: p.intl.string(p.t.tpxJtr),
					action: () => null == n ? (0, c.z)({
						channelId: e.channel_id,
						messageId: e.id,
						displayToast: !0
					}) : (0, c.x)({
						channelId: e.channel_id,
						messageId: e.id,
						dueAt: n.saveData.dueAt,
						displayToast: !0
					}),
					children: [null != n ? (0, r.jsx)(a.sNh, {
						id: "remove-from-for-later",
						label: p.intl.string(p.t.SvXS1d),
						icon: a.plf,
						action: () => (0, c.x)({
							channelId: e.channel_id,
							messageId: e.id,
							dueAt: n.saveData.dueAt,
							displayToast: !0
						})
					}) : (0, r.jsx)(a.sNh, {
						id: "create-bookmark",
						label: p.intl.string(p.t["9p3D9v"]),
						icon: a.gt9,
						action: () => (0, c.z)({
							channelId: e.channel_id,
							messageId: e.id,
							displayToast: !0
						})
					}), (0, r.jsx)(a.Clw, {}), i]
				}) : (0, r.jsx)(a.sNh, {
					id: "save-for-later-upsell",
					label: p.intl.string(p.t.tpxJtr),
					icon: a.SrA,
					iconProps: {
						color: o.JX.PREMIUM_TIER_2
					},
					action: () => (0, c.z)({
						channelId: e.channel_id,
						messageId: e.id,
						displayToast: !0
					})
				}) : null
			}

			function O(e) {
				let {
					message: t,
					savedMessage: n
				} = e, [l, o] = i.useState(new Date);
				i.useEffect(() => {
					let e = setInterval(() => o(new Date), b.Z.Millis.MINUTE);
					return () => {
						clearInterval(e)
					}
				}, []);
				let s = i.useCallback(e => (0, c.z)({
						channelId: t.channel_id,
						messageId: t.id,
						dueAt: e,
						displayToast: !0
					}), [t.channel_id, t.id]),
					d = (0, g.r)({
						createReminder: s
					}),
					{
						dueInText: f
					} = (0, u.AT)({
						dueAt: null == n ? void 0 : n.saveData.dueAt,
						now: l,
						type: u.hQ.LONG
					});
				return (null == n ? void 0 : n.saveData.dueAt) == null ? (0, r.jsx)(a.kSQ, {
					label: p.intl.string(p.t.roMu1N),
					children: d
				}) : (0, r.jsxs)(a.kSQ, {
					label: f,
					children: [(0, r.jsx)(a.sNh, {
						id: "mark-complete",
						label: p.intl.string(p.t.yjGtdH),
						icon: a.kmB,
						action: () => (0, c.z)({
							channelId: t.channel_id,
							messageId: t.id,
							dueAt: void 0
						})
					}), (0, r.jsx)(a.sNh, {
						id: "edit-reminder",
						label: p.intl.string(p.t.vrbqs7),
						children: d
					})]
				})
			}
		},
		986240: function(e, t, n) {
			n.d(t, {
				Z: () => p
			});
			var r = n(255367),
				i = n(73800),
				l = n(481060),
				a = n(980463),
				o = n(328908),
				s = n(992970),
				c = n(135793),
				u = n(576645),
				d = n(84040),
				f = n(626135),
				g = n(981631),
				b = n(388032);

			function p(e, t) {
				let n = (0, d.Z)(t),
					p = e.hasPotions(),
					m = (0, u.Nt)(),
					O = i.useCallback(n => {
						try {
							(0, a.qc)(t.id, e.id, n)
						} catch (e) {
							(0, l.showToast)((0, l.createToast)(b.intl.string(b.t.xsfC2d), l.ToastType.FAILURE))
						}
					}, [t.id, e.id]),
					y = i.useCallback(() => {
						f.default.track(g.rMx.CONFETTI_POTION_ENTRYPOINT_CLICKED, {
							location: s.MG.MessageContextMenu
						}), (0, c.s)({
							channelId: t.id,
							message: e,
							onRedeem: O,
							onClose: o.Qy,
							source: s.YD.MessageContextMenu
						})
					}, [t.id, e, O]);
				return n && !p && m ? (0, r.jsx)(l.sNh, {
					id: "add-confetti-potion",
					label: b.intl.string(b.t.icaJW1),
					icon: l.l22,
					action: y
				}) : null
			}
		},
		667922: function(e, t, n) {
			n.d(t, {
				Z: () => h
			});
			var r = n(255367),
				i = n(73800),
				l = n(442837),
				a = n(481060),
				o = n(543241),
				s = n(222677),
				c = n(995774),
				u = n(665906),
				d = n(695346),
				f = n(496675),
				g = n(768581),
				b = n(585483),
				p = n(176354),
				m = n(981631),
				O = n(185923),
				y = n(388032);

			function h(e, t) {
				let {
					reducedMotion: n
				} = i.useContext(a.Sfi), g = (0, u.$R)(t), h = (0, l.e7)([f.Z], () => (t.isPrivate() || f.Z.can(m.Plq.ADD_REACTIONS, t)) && g, [t, g]), j = (0, o.MZ)(t.getGuildId());
				if (!d.nc.getSetting() || !h) return null;
				let S = j.filter(e => !p.ZP.isEmojiFilteredOrLocked({
					emoji: e,
					channel: t,
					intention: O.Hz.REACTION
				})).slice(0, 12).map((i, l) => {
					var o, u;
					return (0, r.jsx)(a.sNh, {
						color: "default",
						id: null != (u = null != (o = i.id) ? o : i.optionallyDiverseSequence) ? u : i.name,
						label: ":".concat(i.name, ":"),
						icon: e => {
							var t, l;
							return (0, r.jsx)(v, (t = function(e) {
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
							}({}, e), l = l = {
								reducedMotionEnabled: n.enabled,
								emoji: i
							}, Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(l)) : (function(e, t) {
								var n = Object.keys(e);
								if (Object.getOwnPropertySymbols) {
									var r = Object.getOwnPropertySymbols(e);
									n.push.apply(n, r)
								}
								return n
							})(Object(l)).forEach(function(e) {
								Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(l, e))
							}), t))
						},
						action: () => {
							(0, s.rU)(t.id, e.id, (0, c.g1)(i), s.TW.MESSAGE_CONTEXT_MENU)
						},
						dontCloseOnActionIfHoldingShiftKey: !0
					}, l)
				});
				return (0, r.jsx)(a.sNh, {
					id: "add-reaction",
					label: y.intl.string(y.t.lfIHs7),
					action: () => {
						b.S.dispatchKeyed(m.LPv.TOGGLE_REACTION_POPOUT, e.id, {
							emojiPicker: !0
						})
					},
					color: "default",
					children: (0, r.jsxs)(r.Fragment, {
						children: [S, (0, r.jsx)(a.Clw, {}), (0, r.jsx)(a.sNh, {
							color: "default",
							id: "other-reactions",
							label: y.intl.string(y.t["OBCR+v"]),
							icon: a.EO4,
							action: () => {
								b.S.dispatchKeyed(m.LPv.TOGGLE_REACTION_POPOUT, e.id, {
									emojiPicker: !0
								})
							}
						})]
					})
				})
			}

			function v(e) {
				var t;
				let {
					emoji: n,
					reducedMotionEnabled: i,
					className: l = "",
					isFocused: a = !1
				} = e;
				return (0, r.jsx)("img", {
					className: l,
					src: null != n.id ? g.ZP.getEmojiURL({
						id: n.id,
						animated: n.animated && (!i || a),
						size: 18
					}) : p.ZP.getURL(null != (t = n.optionallyDiverseSequence) ? t : ""),
					alt: ""
				})
			}
		},
		941389: function(e, t, n) {
			n.d(t, {
				Z: () => c
			});
			var r = n(255367);
			n(73800);
			var i = n(481060),
				l = n(496675),
				a = n(996861),
				o = n(981631),
				s = n(388032);

			function c(e, t) {
				let n = t.getGuildId();
				return null != n && e.type === o.uaV.USER_JOIN && l.Z.canWithPartialContext(o.Plq.MANAGE_GUILD, {
					guildId: n
				}) ? (0, r.jsx)(i.sNh, {
					id: "configure",
					label: s.intl.string(s.t.NpHUi4),
					icon: i.idN,
					action: () => (0, a.zW)(t)
				}) : null
			}
		},
		749339: function(e, t, n) {
			n.d(t, {
				Z: () => c
			});
			var r = n(255367);
			n(73800);
			var i = n(481060),
				l = n(39154),
				a = n(292419),
				o = n(572004),
				s = n(388032);

			function c(e) {
				return o.wS ? (0, r.jsx)(i.sNh, {
					id: "copy-text",
					label: s.intl.string(s.t.JrGD7O),
					icon: i.TIy,
					action: () => {
						if ((e = (0, l.Z)(e)).isComponentsV2()) {
							let t = (0, a.np)(e.components);
							null != t && (0, o.JG)(t)
						} else(0, o.JG)(e.content)
					}
				}) : null
			}
		},
		6148: function(e, t, n) {
			n.d(t, {
				Z: () => d
			});
			var r = n(255367);
			n(73800);
			var i = n(442837),
				l = n(481060),
				a = n(904245),
				o = n(665906),
				s = n(314897),
				c = n(418476),
				u = n(388032);

			function d(e, t) {
				let n = (0, i.e7)([s.default], () => s.default.getId()),
					d = (0, o.$R)(t),
					f = (0, o.Gu)(t);
				return (0, c.Z)(e, n) && d && !f ? (0, r.jsx)(l.sNh, {
					id: "edit",
					label: u.intl.string(u.t.fsBWmZ),
					action: () => a.Z.startEditMessage(t.id, e.id, e.content),
					icon: l.vdY
				}) : null
			}
		},
		519110: function(e, t, n) {
			n.d(t, {
				Z: () => E
			}), n(704826), n(35282);
			var r = n(255367),
				i = n(73800),
				l = n(442837),
				a = n(481060),
				o = n(80932),
				s = n(2052),
				c = n(543241),
				u = n(339085),
				d = n(633302),
				f = n(691251),
				g = n(268350),
				b = n(217590),
				p = n(453070),
				m = n(926491),
				O = n(378233),
				y = n(981631),
				h = n(388032);

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

			function j(e, t) {
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
				return d.ZP.getByName(e.replace(/(^:|:$)/g, ""))
			}

			function E(e) {
				let {
					type: t,
					id: n,
					name: E,
					isInExpressionPicker: _ = !1
				} = e, {
					location: P
				} = (0, s.O)(), Z = i.useMemo(() => j(v({}, P), {
					section: _ ? y.jXE.EXPRESSION_PICKER : y.jXE.CONTEXT_MENU
				}), [P, _]), T = (0, p.Go)(), I = (0, l.e7)([m.Z], () => t === f.S.STICKER && null != n ? m.Z.getStickerById(n) : null), N = null != I && T.includes(I.id), A = (0, l.e7)([u.ZP], () => {
					if (t === f.S.EMOJI) {
						if (null != n) return u.ZP.getDisambiguatedEmojiContext().getById(n);
						else if (null != E) {
							var e;
							return null != (e = S(E)) ? e : S(d.ZP.convertSurrogateToName(E))
						}
					}
				}), w = (0, c.C1)(null, A);
				return null != I && t === f.S.STICKER ? (0, O.J8)(I) && !(0, O.V9)(I) ? null : N ? (0, r.jsx)(a.sNh, {
					id: "unfavorite",
					action: () => (0, g.hW)(I.id),
					label: h.intl.string(h.t.XhzKyM)
				}) : (0, r.jsx)(a.sNh, {
					id: "favorite",
					action: () => {
						(0, b.cQ)({
							sticker: I,
							location: j(v({}, Z), {
								object: y.qAy.STICKER
							})
						}), (0, g.SA)(null == I ? void 0 : I.id)
					},
					label: h.intl.string(h.t.kWmiPT)
				}) : null != A && t === f.S.EMOJI ? w ? (0, r.jsx)(a.sNh, {
					id: "unfavorite",
					action: () => (0, o.Xe)(A),
					label: h.intl.string(h.t.Ay49KC)
				}) : (0, r.jsx)(a.sNh, {
					id: "favorite",
					action: () => {
						(0, c.J1)({
							emoji: A,
							location: j(v({}, Z), {
								object: y.qAy.EMOJI
							})
						}), (0, o.$K)(A)
					},
					label: h.intl.string(h.t["nNsr6+"])
				}) : void 0
			}
		},
		759875: function(e, t, n) {
			n.d(t, {
				Z: () => c
			});
			var r = n(255367);
			n(73800);
			var i = n(481060),
				l = n(868643),
				a = n(245216),
				o = n(996861),
				s = n(388032);

			function c(e, t) {
				return (0, l.a)(e) ? (0, r.jsx)(i.sNh, {
					id: "forward",
					label: s.intl.string(s.t.I3ltXF),
					icon: a.Z,
					action: () => {
						(0, o.ts)(t, e)
					}
				}) : null
			}
		},
		720904: function(e, t, n) {
			n.d(t, {
				Z: () => _
			}), n(781311);
			var r = n(255367);
			n(73800);
			var i = n(120356),
				l = n.n(i),
				a = n(442837),
				o = n(481060),
				s = n(543241),
				c = n(222677),
				u = n(995774),
				d = n(665906),
				f = n(695346),
				g = n(496675),
				b = n(768581),
				p = n(176354),
				m = n(981631),
				O = n(185923),
				y = n(388032),
				h = n(933070);

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

			function j(e, t) {
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
			let S = ["slight_smile", "frowning", "smile", "stuck_out_tongue", "wink"];

			function E(e) {
				var t;
				let {
					emoji: n,
					isFocused: i
				} = e, {
					animated: a,
					src: s,
					surrogates: c
				} = n;
				return null == s && null != n.id ? s = b.ZP.getEmojiURL({
					id: n.id,
					animated: !!a,
					size: 20
				}) : null == s && (s = p.ZP.getURL(c)), (0, r.jsx)(o.ua7, {
					text: n.allNamesString,
					hideOnClick: !0,
					spacing: 16,
					forceOpen: i,
					children: e => (0, r.jsx)("div", j(v({
						"aria-label": y.intl.formatToPlainString(y.t["/iYSo6"], {
							emojiName: n.name
						}),
						className: l()(h.button, {
							[h.focused]: i
						})
					}, e), {
						children: null == s || "" === s.trim() ? (0, r.jsx)("span", j(v({
							className: l()("emoji", "emoji-text", h.icon)
						}, e), {
							children: c
						})) : (0, r.jsx)("img", {
							className: h.icon,
							src: s,
							alt: ""
						})
					}))
				}, null != (t = n.id) ? t : n.name)
			}

			function _(e, t) {
				let n = (0, s.MZ)(t.guild_id).filter(e => {
					var n;
					return !(e.useSpriteSheet && S.indexOf(null != (n = e.uniqueName) ? n : "") >= 0) && !p.ZP.isEmojiPremiumLocked({
						emoji: e,
						channel: t,
						intention: O.Hz.REACTION
					})
				});
				n.length > 4 && (n.length = 4);
				let i = f.nc.useSetting(),
					l = (0, d.$R)(t),
					b = (0, a.e7)([g.Z], () => i && l && (t.isPrivate() || g.Z.can(m.Plq.ADD_REACTIONS, t)), [t, l, i]),
					y = n => {
						(0, c.rU)(t.id, e.id, (0, u.g1)(n), c.TW.MESSAGE_CONTEXT_MENU)
					};
				return b && n.length > 0 ? (0, r.jsx)(o.kSQ, {
					className: h.wrapper,
					children: n.map((e, t) => {
						var n;
						return (0, r.jsx)(o.sNh, {
							id: "quickreact-".concat(null != (n = e.id) ? n : t),
							render: t => {
								let {
									isFocused: n
								} = t;
								return (0, r.jsx)(E, {
									emoji: e,
									isFocused: n
								})
							},
							action: () => y(e),
							dontCloseOnActionIfHoldingShiftKey: !0
						}, t)
					})
				}) : null
			}
		},
		88791: function(e, t, n) {
			n.d(t, {
				Z: () => o
			});
			var r = n(255367);
			n(73800);
			var i = n(481060),
				l = n(79390),
				a = n(388032);

			function o(e) {
				return null == e.reactions || 0 === e.reactions.length || e.isPoll() && !(0, l.eQ)(e) ? null : (0, r.jsx)(i.sNh, {
					id: "reactions",
					label: a.intl.string(a.t.wikODg),
					icon: i.EO4,
					action: () => (0, i.ZDy)(async () => {
						let {
							default: t
						} = await Promise.resolve().then(n.bind(n, 785388));
						return n => {
							var i, l;
							return (0, r.jsx)(t, (i = function(e) {
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
								message: e
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
					})
				})
			}
		},
		385302: function(e, t, n) {
			n.d(t, {
				Z: () => g
			});
			var r = n(255367);
			n(73800);
			var i = n(442837),
				l = n(481060),
				a = n(668781),
				o = n(79390),
				s = n(222677),
				c = n(665906),
				u = n(496675),
				d = n(981631),
				f = n(388032);

			function g(e, t) {
				let n = (0, c.$R)(t);
				return !(0, i.e7)([u.Z], () => u.Z.can(d.Plq.MANAGE_MESSAGES, t) && n, [t, n]) || null == e.reactions || 0 === e.reactions.length || e.isPoll() && !(0, o.eQ)(e) ? null : (0, r.jsx)(l.sNh, {
					id: "remove-reactions",
					label: f.intl.string(f.t.ZbtGBg),
					action: function(n) {
						n.shiftKey ? (0, s.wX)(t.id, e.id) : a.Z.show({
							title: f.intl.string(f.t.iz3vYW),
							body: f.intl.string(f.t.VpjOCg),
							confirmText: f.intl.string(f.t.p89ACg),
							confirmVariant: "critical-primary",
							cancelText: f.intl.string(f.t.gm1Ven),
							onConfirm: () => {
								(0, s.wX)(t.id, e.id)
							}
						})
					},
					color: "danger"
				})
			}
		},
		873699: function(e, t, n) {
			n.d(t, {
				Z: () => m
			}), n(388685);
			var r = n(255367),
				i = n(73800),
				l = n(442837),
				a = n(481060),
				o = n(668781),
				s = n(79390),
				c = n(222677),
				u = n(665906),
				d = n(496675),
				f = n(768581),
				g = n(176354),
				b = n(981631),
				p = n(388032);

			function m(e, t) {
				let {
					reducedMotion: n
				} = i.useContext(a.Sfi), f = (0, u.$R)(t), g = (0, l.e7)([d.Z], () => d.Z.can(b.Plq.MANAGE_MESSAGES, t) && f, [t, f]), m = e.reactions.reduce((e, t) => {
					var n;
					return (null == (n = t.count_details) ? void 0 : n.vote) != null || null != e.find(e => null != e.id && e.id === t.emoji.id || e.name === t.emoji.name) ? e : [...e, t.emoji]
				}, []), y = (n, r) => {
					n.shiftKey ? (0, c.$E)(t.id, e.id, r) : o.Z.show({
						title: p.intl.string(p.t["73GqT0"]),
						body: p.intl.string(p.t.dmy5bm),
						confirmText: p.intl.string(p.t.p89ACg),
						confirmVariant: "critical-primary",
						cancelText: p.intl.string(p.t.gm1Ven),
						onConfirm: () => {
							(0, c.$E)(t.id, e.id, r)
						}
					})
				};
				return !g || null == e.reactions || 0 === e.reactions.length || e.isPoll() && !(0, s.eQ)(e) ? null : (0, r.jsx)(a.sNh, {
					id: "remove-emoji-reactions",
					label: p.intl.string(p.t["zx/e4O"]),
					color: "danger",
					children: m.map(e => {
						var t, i;
						return (0, r.jsx)(a.sNh, {
							id: "remove-emoji-reactions-".concat(null != (t = e.name) ? t : e.id),
							label: null == e.id ? e.name : ":".concat(e.name, ":"),
							action: t => y(t, e),
							icon: t => {
								var i, l;
								return (0, r.jsx)(O, (i = function(e) {
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
									reducedMotionEnabled: n.enabled,
									emoji: e
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
							},
							dontCloseOnActionIfHoldingShiftKey: !0
						}, null != (i = e.name) ? i : e.id)
					})
				})
			}

			function O(e) {
				var t;
				let {
					emoji: n,
					reducedMotionEnabled: i,
					className: l = "",
					isFocused: a = !1
				} = e;
				return (0, r.jsx)("img", {
					className: l,
					src: null != n.id ? f.ZP.getEmojiURL({
						id: n.id,
						animated: n.animated && (!i || a),
						size: 18
					}) : g.ZP.getURL(null != (t = n.name) ? t : ""),
					alt: ""
				})
			}
		},
		134323: function(e, t, n) {
			n.d(t, {
				Z: () => s
			});
			var r = n(255367);
			n(73800);
			var i = n(481060),
				l = n(280845),
				a = n(996861),
				o = n(388032);

			function s(e, t) {
				return (0, l.U)(t, e) ? (0, r.jsx)(i.sNh, {
					id: "reply",
					label: o.intl.string(o.t["5IEsGx"]),
					icon: i.n$P,
					action: n => {
						(0, a.HH)(t, e, n)
					}
				}) : null
			}
		},
		429260: function(e, t, n) {
			n.d(t, {
				ZP: () => S,
				eH: () => P,
				wY: () => _
			});
			var r = n(255367);
			n(73800);
			var i = n(442837),
				l = n(704215),
				a = n(481060),
				o = n(493773),
				s = n(377171),
				c = n(432877),
				u = n(266454),
				d = n(243778),
				f = n(726521),
				g = n(993706),
				b = n(982168),
				p = n(216572),
				m = n(914010),
				O = n(594174),
				y = n(970257),
				h = n(921944),
				v = n(388032),
				j = n(130883);

			function S(e) {
				let t = (0, i.e7)([m.Z], () => m.Z.getGuildId()),
					n = (0, p.Q_)(t);
				return (0, y.a4)(e) ? (0, r.jsx)(a.sNh, {
					id: "report",
					label: n ? v.intl.string(v.t.n5EBAA) : v.intl.string(v.t.GwbdGR),
					action: () => (0, f.ak)(e, "web_message_context_menu"),
					icon: n ? a.gw7 : a.U65,
					color: "danger"
				}) : null
			}

			function E() {
				return (0, r.jsx)(d.ZP, {
					contentTypes: [l.z.REPORT_TO_MOD_NEW_TAG],
					children: e => {
						let {
							visibleContent: t
						} = e;
						return t === l.z.REPORT_TO_MOD_NEW_TAG ? (0, r.jsx)(a.IGR, {
							color: s.Z.BG_BRAND,
							text: v.intl.string(v.t.y2b7CA)
						}) : (0, r.jsx)(a.U65, {
							color: "currentColor",
							size: "refresh_sm"
						})
					}
				})
			}

			function _(e) {
				let t = (0, i.e7)([g.Z], () => g.Z.hasReportedMessage(e.channel_id, e.id)),
					n = (0, b.sP)(e);
				return ((0, o.zq)(() => {
					n && (0, u.Q3)(l.z.REPORT_TO_MOD_NEW_TAG, {
						dismissAction: h.L.AUTO_DISMISS
					})
				}), n) ? (0, r.jsx)(a.sNh, {
					id: "report-to-mod",
					label: t ? v.intl.string(j.default["8wsdnp"]) : v.intl.string(j.default["1D+vq6"]),
					action: () => {
						(0, u.Q3)(l.z.REPORT_TO_MOD_NEW_TAG, {
							dismissAction: h.L.USER_DISMISS
						}), (0, f.tV)(e)
					},
					icon: (0, r.jsx)(E, {}),
					disabled: t
				}) : null
			}

			function P(e) {
				let t = (0, i.e7)([c.ZP], () => c.ZP.get("iar_testing")),
					n = (0, i.e7)([O.default], () => O.default.getCurrentUser());
				return (0, y.a4)(e) && null != n && n.isStaff() && t ? (0, r.jsx)(a.sNh, {
					id: "staff-test-message-report",
					label: "[STAFF] Test Message Report",
					action: () => (0, f.Jw)(e, "web_message_context_menu"),
					icon: a.U65,
					color: "danger"
				}) : null
			}
		},
		1626: function(e, t, n) {
			n.d(t, {
				Z: () => c
			});
			var r = n(255367);
			n(73800);
			var i = n(481060),
				l = n(111618),
				a = n(730954),
				o = n(981631),
				s = n(388032);

			function c(e, t) {
				return e.state !== o.yb.SEND_FAILED ? null : (0, r.jsx)(i.sNh, {
					id: "resend",
					label: s.intl.string(s.t.lXHojo),
					action: () => (0, a.Z)(t, e, void 0, l.Z.getOptions(e.id))
				})
			}
		},
		279329: function(e, t, n) {
			n.d(t, {
				Z: () => c
			});
			var r = n(255367);
			n(73800);
			var i = n(442837),
				l = n(481060),
				a = n(196051),
				o = n(441729),
				s = n(388032);

			function c(e, t) {
				let n = (0, i.e7)([o.Z], () => o.Z.isSpeakingMessage(t.id, e.id), [t, e]);
				return "" === e.content ? null : (0, r.jsx)(l.sNh, {
					id: "tts",
					label: n ? s.intl.string(s.t.CJ30BA) : s.intl.string(s.t.yGLjXF),
					icon: l.J2R,
					action: () => n ? (0, a.NB)() : (0, a.LA)(t, e)
				})
			}
		},
		627938: function(e, t, n) {
			n.d(t, {
				Z: () => s
			});
			var r = n(255367);
			n(73800);
			var i = n(481060),
				l = n(665906),
				a = n(996861),
				o = n(388032);

			function s(e, t) {
				return (0, l.NE)(t, e) ? (0, r.jsx)(i.sNh, {
					id: "thread",
					label: o.intl.string(o.t.rBIGBA),
					icon: i.or_,
					action: () => {
						(0, a.gK)(t, e)
					}
				}) : null
			}
		},
		189976: function(e, t, n) {
			n.d(t, {
				Z: () => p
			}), n(388685), n(781311);
			var r = n(255367),
				i = n(73800),
				l = n(442837),
				a = n(544891),
				o = n(481060),
				s = n(570140),
				c = n(466721),
				u = n(706454),
				d = n(981631),
				f = n(388032),
				g = n(66761);
			let b = new Map;

			function p(e, t) {
				let p = c.C.useExperiment({
						location: "MessageContextMenu"
					}),
					{
						handleTranslate: m,
						handleRevertTranslation: O,
						isTranslating: y,
						isTranslated: h
					} = function(e) {
						let [t, n] = i.useState(!1), r = (0, l.e7)([u.default], () => u.default.locale);
						return {
							handleTranslate: i.useCallback(async (i, l) => {
								var c, u;
								if (t) return;
								let g = null != i ? i : r;
								n(!0);
								let p = null != (u = null != l ? l : null == (c = (0, f.getAvailableLocales)().find(e => e.value === g)) ? void 0 : c.name) ? u : g;
								b.has(e.id) || b.set(e.id, e.content), (0, o.showToast)((0, o.createToast)(f.intl.formatToPlainString(f.t.Znl8Z2, {
									targetLanguage: p
								}), o.ToastType.AI));
								try {
									let t = await a.tn.post({
										url: d.ANM.AI_TRANSLATE,
										body: {
											content: e.content,
											locale: g
										},
										rejectWithError: !1
									});
									t.ok && t.body && (s.Z.dispatch({
										type: "MESSAGE_UPDATE",
										message: {
											id: e.id,
											channel_id: e.channel_id,
											content: t.body.content
										}
									}), (0, o.showToast)((0, o.createToast)(f.intl.formatToPlainString(f.t.FtVUqq, {
										targetLanguage: p
									}), o.ToastType.SUCCESS)))
								} finally {
									n(!1)
								}
							}, [e, t, r]),
							handleRevertTranslation: i.useCallback(() => {
								let t = b.get(e.id);
								null != t && (s.Z.dispatch({
									type: "MESSAGE_UPDATE",
									message: {
										id: e.id,
										channel_id: e.channel_id,
										content: t
									}
								}), b.delete(e.id))
							}, [e.id, e.channel_id]),
							isTranslating: t,
							isTranslated: b.has(e.id)
						}
					}(e),
					v = function(e, t) {
						let l = (0, f.getAvailableLocales)();
						return i.useMemo(() => l.map(i => {
							let l;
							try {
								l = n(621287)("./".concat(i.value, ".png"))
							} catch (e) {
								l = n(1474)
							}
							return (0, r.jsx)(o.sNh, {
								id: "translate-".concat(i.value),
								label: i.name,
								icon: () => (0, r.jsx)("img", {
									alt: "",
									src: l,
									className: g.flagIcon
								}),
								action: () => e(i.value, i.name),
								disabled: t
							}, i.value)
						}), [e, t, l])
					}(m, y);
				return null != e.content && "" !== e.content.trim() && (null == p ? void 0 : p.enableAIFeatures) ? h ? (0, r.jsx)(o.sNh, {
					id: "revert-translation",
					label: f.intl.string(f.t.JC9BXl),
					icon: o.os0,
					action: O,
					disabled: y
				}) : (0, r.jsx)(o.sNh, {
					id: "translate",
					label: y ? f.intl.string(f.t.SVKIdX) : f.intl.string(f.t["6epDlZ"]),
					action: () => m(),
					disabled: y,
					children: v
				}) : null
			}
		},
		512303: function(e, t, n) {
			n.d(t, {
				Z: () => v
			});
			var r = n(255367),
				i = n(73800),
				l = n(373793),
				a = n(442837),
				o = n(481060),
				s = n(232567),
				c = n(700582),
				u = n(906732),
				d = n(592180),
				f = n(565138),
				g = n(892001),
				b = n(598077),
				p = n(592125),
				m = n(430824),
				O = n(594174),
				y = n(388032),
				h = n(274693);

			function v(e) {
				var t, n, v, j;
				let {
					analyticsLocations: S
				} = (0, u.ZP)(), E = null == (t = e.interactionMetadata) ? void 0 : t.authorizing_integration_owners[l.Y.USER_INSTALL], _ = null == (n = e.interactionMetadata) ? void 0 : n.authorizing_integration_owners[l.Y.GUILD_INSTALL], P = null == (v = e.interactionMetadata) ? void 0 : v.user.id, Z = (0, a.e7)([O.default], () => O.default.getUser(E)), T = (0, a.e7)([m.Z], () => m.Z.getGuild(_)), I = p.Z.getChannel(e.channel_id), N = null == I ? void 0 : I.getGuildId(), A = (0, a.e7)([O.default], () => O.default.getUser(P));
				if (i.useEffect(() => {
						null == Z && null != E && (0, s.PR)(E)
					}, [Z, E]), !(0, d.a)(e)) return null;
				null == A && (A = new b.Z(null == (j = e.interactionMetadata) ? void 0 : j.user));
				let w = null;
				return null != T ? w = (0, r.jsx)(o.sNh, {
					className: h.interactionInfoMenuItem,
					disabled: !0,
					iconLeft: () => (0, r.jsx)(f.Z, {
						guild: T,
						size: f.Z.Sizes.MINI
					}),
					id: "integration-owner",
					label: T.name,
					subtext: y.intl.formatToPlainString(y.t.ShLXXF, {
						application: e.author.username
					})
				}) : null != Z && (w = (0, r.jsx)(o.sNh, {
					action: () => (0, g.openUserProfileModal)({
						userId: Z.id,
						guildId: N,
						channelId: e.channel_id,
						sourceAnalyticsLocations: S
					}),
					className: h.interactionInfoMenuItem,
					iconLeft: () => (0, r.jsx)(c.Z, {
						user: Z,
						size: o.EFr.SIZE_20
					}),
					id: "integration-owner",
					label: Z.username,
					subtext: y.intl.formatToPlainString(y.t.ShLXXF, {
						application: e.author.username
					})
				})), (0, r.jsxs)(o.sNh, {
					id: "view-interaction-info",
					label: y.intl.string(y.t.Rjezb2),
					children: [w, null != A ? (0, r.jsx)(o.sNh, {
						action: () => (0, g.openUserProfileModal)({
							userId: A.id,
							guildId: N,
							channelId: e.channel_id,
							sourceAnalyticsLocations: S
						}),
						className: h.interactionInfoMenuItem,
						iconLeft: () => (0, r.jsx)(c.Z, {
							user: A,
							size: o.EFr.SIZE_20
						}),
						id: "interaction-user",
						label: A.username,
						subtext: y.intl.string(y.t["04gxNj"])
					}) : null]
				})
			}
		},
		481300: function(e, t, n) {
			n.d(t, {
				Z: () => s
			});
			var r = n(255367);
			n(73800);
			var i = n(481060),
				l = n(991621),
				a = n(629710),
				o = n(388032);

			function s(e, t) {
				let s = (0, a.rb)(e),
					c = null != t && (0, a.g4)({
						type: l.l.GenericMedia,
						media: t
					}, s);
				return null != t && c ? (0, r.jsx)(i.sNh, {
					id: "report-image-false-positive",
					label: o.intl.string(o.t.ZH7P2t),
					action: () => {
						(0, i.ZDy)(async () => {
							let {
								default: i
							} = await n(788679);
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
								channelId: e.channel_id,
								messageId: e.id,
								mediaItemUrl: t.url
							}, n))
						})
					},
					icon: i.fFY
				}, "report-image-false-positive") : null
			}
		},
		975368: function(e, t, n) {
			n.d(t, {
				Z: () => d
			}), n(997841);
			var r = n(255367);
			n(73800);
			var i = n(481060),
				l = n(296182),
				a = n(630388),
				o = n(49012),
				s = n(694859),
				c = n(981631),
				u = n(388032);

			function d(e) {
				let t = (0, s.X)("use-save-voice-message-audio");
				return (0, a.yE)(e.flags, c.iLy.IS_VOICE_MESSAGE) && t ? (0, r.jsx)(i.sNh, {
					id: "save-voice-message-audio",
					label: u.intl.string(u.t.vbAEaG),
					icon: i._8t,
					action: () => {
						let t = (0, l.s$)(e.attachments[0].url);
						(0, o.q)({
							href: t
						})
					}
				}) : null
			}
		},
		694859: function(e, t, n) {
			n.d(t, {
				X: () => i
			});
			let r = (0, n(818083).B)({
				kind: "user",
				id: "2024-12_save_voice_message_menu_item",
				label: "Save voice message menu item on web",
				defaultConfig: {
					enabled: !1
				},
				treatments: [{
					id: 1,
					label: "Save voice message menu item active",
					config: {
						enabled: !0
					}
				}]
			});

			function i(e) {
				let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1];
				return r.useExperiment({
					location: e
				}, {
					autoTrackExposure: t
				}).enabled
			}
		},
		29264: function(e, t, n) {
			n.d(t, {
				Z: () => m
			});
			var r = n(255367);
			n(73800);
			var i = n(481060),
				l = n(296182),
				a = n(976853),
				o = n(626135),
				s = n(358085),
				c = n(960048),
				u = n(998502),
				d = n(36998),
				f = n(981631),
				g = n(388032);

			function b(e) {
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
				(0, i.showToast)((0, i.createToast)(e, i.ToastType.FAILURE)), c.Z.captureException(t)
			}

			function m(e, t, n) {
				if ((0, a.Z)(null == t ? void 0 : t.getChannelId()) || (null == n ? void 0 : n.shouldHideMediaOptions) === !0 || !s.isPlatformEmbedded || null == e || !(0, l.gS)(e, null == n ? void 0 : n.contentType)) return null;
				let c = (0, l.s$)(e, null == n ? void 0 : n.contentType, l.wV),
					m = async () => {
						try {
							await u.ZP.saveImage(c, null == n ? void 0 : n.contentType, l.wV), o.default.track(f.rMx.CONTEXT_MENU_IMAGE_SAVED, b({}, (0, d.v)())), (0, i.showToast)((0, i.createToast)(g.intl.string(g.t.cqpdJS), i.ToastType.SUCCESS))
						} catch (e) {
							o.default.track(f.rMx.CONTEXT_MENU_IMAGE_SAVE_FAILED, b({}, (0, d.v)())), p(g.intl.string(g.t["8Ve/S0"]), e)
						}
					}, O = async () => {
						try {
							await u.ZP.copyImage(c, null == n ? void 0 : n.contentType), o.default.track(f.rMx.CONTEXT_MENU_IMAGE_COPIED, b({}, (0, d.v)())), (0, i.showToast)((0, i.createToast)(g.intl.string(g.t.bhUpvL), i.ToastType.SUCCESS))
						} catch (e) {
							p(g.intl.string(g.t.PTPbj4), e), o.default.track(f.rMx.CONTEXT_MENU_IMAGE_COPY_FAILED, b({}, (0, d.v)()))
						}
					};
				return [(0, l.Lz)(e, null == n ? void 0 : n.contentType) ? (0, r.jsx)(i.sNh, {
					id: "copy-image",
					label: g.intl.string(g.t.tvUqWl),
					action: O
				}, "copy-image") : null, (0, r.jsx)(i.sNh, {
					id: "save-image",
					label: g.intl.string(g.t.PeXhgI),
					action: m
				}, "save-image")]
			}
		},
		615669: function(e, t, n) {
			n.d(t, {
				Z: () => s,
				z: () => a
			}), n(539854);
			var r, i = n(442837),
				l = n(314897),
				a = ((r = {})[r.END_EARLY = 0] = "END_EARLY", r);
			let o = [];

			function s(e) {
				let t = (0, i.e7)([l.default], () => l.default.getId()),
					{
						poll: n
					} = e;
				if (!e.isPoll() || null == n) return o;
				let r = [];
				return n.expiry.isSameOrBefore(Date.now()) || e.author.id !== t || r.push(0), r
			}
		},
		988500: function(e, t, n) {
			n.d(t, {
				Z: () => c
			});
			var r = n(255367);
			n(73800);
			var i = n(481060),
				l = n(203143),
				a = n(615669),
				o = n(388032);
			let s = {
				[a.z.END_EARLY]: e => (0, r.jsx)(i.sNh, {
					id: "end-poll-early",
					label: o.intl.string(o.t.grdwws),
					icon: i.e0C,
					action: () => {
						l.Z.endPollEarly({
							channelId: e.channel_id,
							messageId: e.id
						})
					},
					iconProps: {
						color: "currentColor"
					}
				})
			};

			function c(e) {
				let t = (0, a.Z)(e);
				return 0 === t.length ? null : (0, r.jsx)(r.Fragment, {
					children: t.map(t => s[t](e))
				})
			}
		},
		84040: function(e, t, n) {
			n.d(t, {
				Z: () => c
			});
			var r = n(442837),
				i = n(665906),
				l = n(695346),
				a = n(496675),
				o = n(981631),
				s = n(231338);
			let c = e => {
				let t = (0, i.$R)(e),
					n = (0, r.e7)([a.Z], () => (e.isPrivate() || a.Z.can(s.Pl.ADD_REACTIONS, e)) && t, [e, t]),
					c = e.type !== o.d4z.GUILD_ANNOUNCEMENT;
				return l.nc.getSetting() && n && c
			}
		},
		280845: function(e, t, n) {
			n.d(t, {
				U: () => g,
				o: () => b
			}), n(388685);
			var r = n(275726),
				i = n(442837),
				l = n(71619),
				a = n(665906),
				o = n(496675),
				s = n(594174),
				c = n(981631),
				u = n(231338);

			function d(e, t, n) {
				let i;
				return (e.isPrivate() ? !e.isSystemDM() : n.can(u.Pl.SEND_MESSAGES, e) && n.can(u.Pl.READ_MESSAGE_HISTORY, e)) && r.V.REPLYABLE.has(t.type)
			}

			function f(e, t, n, r, i) {
				let l = t.hasFlag(c.iLy.EPHEMERAL),
					a = t.state === c.yb.SENT,
					o = !e.isArchivedThread() || i;
				return n && a && !l && !r && o
			}

			function g(e, t) {
				var n;
				let r = (0, a.tc)(e),
					[, s] = (0, l.AB)(null != (n = null == e ? void 0 : e.getGuildId()) ? n : void 0),
					c = (0, i.e7)([o.Z], () => null != e && null != t && d(e, t, o.Z));
				return null != e && null != t && f(e, t, c, s, r)
			}

			function b(e, t) {
				var n;
				let r = (0, a.kn)(e),
					i = d(e, t, o.Z),
					c = s.default.getCurrentUser(),
					[, u] = (0, l.s5)(null == c ? void 0 : c.id, null != (n = e.getGuildId()) ? n : void 0);
				return f(e, t, i, u, r)
			}
		},
		993706: function(e, t, n) {
			n.d(t, {
				Z: () => g
			}), n(388685), n(467055);
			var r, i = n(442837),
				l = n(570140),
				a = n(914010);

			function o(e, t, n) {
				return t in e ? Object.defineProperty(e, t, {
					value: n,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : e[t] = n, e
			}
			let s = null,
				c = null,
				u = {
					reportedMessages: {}
				};

			function d() {
				let e = a.Z.getLastSelectedGuildId();
				e !== s && (c = null, s = null != e ? e : null)
			}
			class f extends(r = i.ZP.PersistedStore) {
				initialize(e) {
					null != e && (u.reportedMessages = Object.fromEntries(Object.entries(e.reportedMessages).map(e => {
						let [t, n] = e;
						return [t, new Set(n)]
					}))), this.syncWith([a.Z], d)
				}
				getState() {
					return u
				}
				isUserBanned(e) {
					var t;
					return null != (t = null == c ? void 0 : c.get(e)) ? t : null
				}
				getReportedMessages() {
					return u.reportedMessages
				}
				hasReportedMessage(e, t) {
					var n, r;
					return null != (r = null == (n = u.reportedMessages[e]) ? void 0 : n.has(t)) && r
				}
			}
			o(f, "displayName", "ReportToModStore"), o(f, "persistKey", "ReportToModStore"), o(f, "migrations", [e => {
				var t;
				return {
					reportedMessages: null != (t = null == e ? void 0 : e.reportedMessages) ? t : {}
				}
			}]);
			let g = new f(l.Z, {
				REPORT_TO_MOD_REPORT_MESSAGE_SUCCESS: function(e) {
					let {
						channelId: t,
						messageId: n
					} = e;
					null == u.reportedMessages[t] && (u.reportedMessages[t] = new Set), u.reportedMessages[t].add(n)
				},
				GUILD_BAN_ADD: function(e) {
					let {
						user: t,
						guildId: n
					} = e;
					n === s && null != c && c.set(t.id, !0)
				},
				GUILD_BAN_REMOVE: function(e) {
					let {
						user: t,
						guildId: n
					} = e;
					n === s && null != c && c.set(t.id, !1)
				},
				GUILD_SETTINGS_LOADED_BANS_BATCH: function(e) {
					let {
						bans: t,
						guildId: n,
						userIds: r
					} = e;
					if (n !== s) return;
					let i = new Set(t.map(e => {
							var t;
							return null == (t = e.user) ? void 0 : t.id
						})),
						l = Array.from(new Set(null != r ? r : [])).filter(e => !i.has(e));
					null == c && (c = new Map), i.forEach(e => {
						null == c || c.set(e, !0)
					}), l.forEach(e => {
						null == c || c.set(e, !1)
					})
				},
				LOGOUT: function() {
					s = null, c = null, u.reportedMessages = {}
				}
			})
		},
		550727: function(e, t, n) {
			n.d(t, {
				B: () => a
			});
			var r = n(913527),
				i = n.n(r),
				l = n(388032);
			let a = [{
				getDueAt: () => i()().add(30, "minutes").toDate(),
				getLabel: () => l.intl.string(l.t["OV8l/P"])
			}, {
				getDueAt: () => i()().add(1, "hour").toDate(),
				getLabel: () => l.intl.string(l.t["zf0R+/"])
			}, {
				getDueAt: () => i()().add(4, "hour").toDate(),
				getLabel: () => l.intl.string(l.t["5gztZG"])
			}, {
				getDueAt: () => i()().add(1, "day").startOf("day").add(9, "hours").toDate(),
				getLabel: () => l.intl.string(l.t["7MKr2N"])
			}, {
				getDueAt: () => i()().day(8).startOf("day").add(9, "hours").toDate(),
				getLabel: () => l.intl.string(l.t["q+Ls09"])
			}]
		},
		898150: function(e, t, n) {
			n.d(t, {
				MessageReminderEditMenu: () => d,
				r: () => u
			}), n(539854);
			var r = n(255367),
				i = n(73800),
				l = n(481060),
				a = n(239091),
				o = n(324701),
				s = n(550727),
				c = n(388032);

			function u(e) {
				let {
					createReminder: t
				} = e, a = i.useCallback(() => {
					(0, l.ZDy)(async () => {
						let {
							default: e
						} = await n.e("43866").then(n.bind(n, 423639));
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
								createReminder: t
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
					})
				}, [t]);
				return i.useMemo(() => {
					let e = s.B.map(e => {
						let {
							getDueAt: n,
							getLabel: i
						} = e;
						return (0, r.jsx)(l.sNh, {
							id: "create-reminder-".concat(i()),
							label: i(),
							action: () => t(n())
						}, "create-reminder-".concat(i()))
					});
					return e.push((0, r.jsx)(l.sNh, {
						id: "create-reminder-custom",
						label: c.intl.string(c.t.OLA8Zm),
						action: a
					}, "custom")), e
				}, [t, a])
			}

			function d(e) {
				let {
					message: t,
					label: n
				} = e, i = u({
					createReminder: e => (0, o.z)({
						channelId: t.channel_id,
						messageId: t.id,
						dueAt: e
					})
				});
				return (0, r.jsx)(l.v2r, {
					navId: "message-reminder-create",
					onClose: a.Zy,
					"aria-label": c.intl.string(c.t.mJ3P0N),
					onSelect: () => null,
					children: (0, r.jsx)(l.kSQ, {
						label: n,
						children: i
					})
				})
			}
		}
	}
]);
//# sourceMappingURL=348d290d30825d30.js.map