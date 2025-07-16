"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
	["7839"], {
		97797: function(t, e, n) {
			n.d(e, {
				i: () => i
			});
			var r = n(981631),
				l = n(388032);

			function i(t) {
				let {
					username: e,
					usernameOnClickHandler: n = r.dG4,
					productName: i
				} = t;
				return l.intl.formatToParts(l.t.w4iXs7, {
					username: e,
					usernameHook: n,
					productName: i
				})
			}
		},
		523361: function(t, e, n) {
			n.d(e, {
				HG: () => u,
				Md: () => a,
				Q8: () => i
			});
			var r = n(373228),
				l = n(388032);
			let i = () => [l.intl.string(l.t.b6wEe3), l.intl.string(l.t.i8o9hY)],
				a = () => [l.intl.string(l.t.vqnToa), l.intl.string(l.t["9yh+dH"])],
				u = [{
					id: "781323471249604648",
					format_type: r.u3.APNG,
					description: "Cheerful Choco jumps out of gift box",
					name: "Surprise"
				}, {
					id: "781324642736144424",
					format_type: r.u3.APNG,
					description: "Cheerful Choco preens against window",
					name: "Affection"
				}, {
					id: "781323769960202280",
					format_type: r.u3.APNG,
					description: "Cheerful Choco sparkles",
					name: "OMG"
				}, {
					id: "781324722394103808",
					format_type: r.u3.APNG,
					description: "Cheerful Choco cheers",
					name: "Cheer"
				}, {
					id: "813951723822645278",
					format_type: r.u3.APNG,
					description: "Cheerful Choco gives thumbs up",
					name: "Nice"
				}]
		},
		35125: function(t, e, n) {
			n.d(e, {
				PA: () => m,
				Tn: () => c,
				_i: () => I,
				eI: () => _,
				vp: () => N,
				y8: () => T
			});
			var r = n(367907),
				l = n(200876),
				i = n(430824),
				a = n(594174);
			n(709054), n(523361);
			var u = n(981631),
				o = n(388032);

			function s(t) {
				return t
			}

			function c(t) {
				let {
					username: e,
					usernameOnClickHandler: n,
					roleSubscriptionOnClickHandler: r,
					guildId: l,
					roleSubscriptionData: i
				} = t, {
					content: a,
					formatParams: u
				} = f({
					username: e,
					usernameOnClickHandler: n,
					roleSubscriptionOnClickHandler: r,
					guildId: l,
					roleSubscriptionData: i
				});
				return o.intl.format(a, u)
			}

			function m(t) {
				let {
					username: e,
					usernameOnClickHandler: n,
					roleSubscriptionOnClickHandler: r,
					guildId: l,
					roleSubscriptionData: i
				} = t, {
					content: a,
					formatParams: u
				} = f({
					username: e,
					usernameOnClickHandler: n,
					roleSubscriptionOnClickHandler: r,
					guildId: l,
					roleSubscriptionData: i
				});
				return o.intl.formatToParts(a, u)
			}

			function d(t, e) {
				var n, r;
				let l = i.Z.getGuild(t),
					a = null != (n = null == e ? void 0 : e.total_months_subscribed) ? n : 0;
				return {
					guild: l,
					totalMonthsSubscribed: a,
					showWithDuration: a > 0,
					isRenewal: null != (r = null == e ? void 0 : e.is_renewal) && r
				}
			}

			function f(t) {
				let {
					username: e,
					usernameOnClickHandler: n = s,
					roleSubscriptionOnClickHandler: r = u.dG4,
					guildId: l,
					roleSubscriptionData: i
				} = t, {
					guild: a,
					totalMonthsSubscribed: c,
					showWithDuration: m,
					isRenewal: f
				} = d(l, i);
				return {
					content: m ? f ? o.t.Iy66Mz : o.t.eCgb2d : f ? o.t.mPTTdn : o.t.mYjFFx,
					formatParams: {
						username: e,
						usernameHook: n,
						guildName: null == a ? void 0 : a.name,
						handleGuildNameClick: r,
						tierName: null == i ? void 0 : i.tier_name,
						months: c
					}
				}
			}

			function N(t) {
				let e, {
						username: n,
						usernameOnClickHandler: r = s,
						roleSubscriptionOnClickHandler: l = u.dG4,
						guildId: i,
						roleSubscriptionData: a
					} = t,
					{
						guild: c,
						totalMonthsSubscribed: m,
						showWithDuration: f,
						isRenewal: N
					} = d(i, a);
				return e = f ? N ? o.t.OQ0OU1 : o.t["+N9bxs"] : N ? o.t.OxP1ND : o.t["6Z1E+/"], o.intl.formatToParts(e, {
					guildName: null == c ? void 0 : c.name,
					tierName: null == a ? void 0 : a.tier_name,
					username: n,
					usernameOnClick: r,
					roleSubscriptionOnClick: l,
					months: m
				})
			}

			function _(t) {
				return (0, l.l)(t)
			}

			function T(t, e, n, l) {
				var i;
				r.ZP.trackWithMetadata(u.rMx.ROLE_SUBSCRIPTION_PURCHASE_SYSTEM_MESSAGE_CLICKED, {
					guild_id: t,
					user_id: null == (i = a.default.getCurrentUser()) ? void 0 : i.id,
					channel_id: e,
					message_id: n,
					role_subscription_listing_id: l
				})
			}

			function I(t, e) {
				var n;
				return {
					guild_id: t.guild_id,
					sender: null == (n = a.default.getCurrentUser()) ? void 0 : n.id,
					target_user: e.author.id,
					channel_id: t.id,
					message_id: e.id
				}
			}
		},
		850908: function(t, e, n) {
			n.d(e, {
				Z: () => r
			});

			function r(t) {
				if (null != t.title && null != t.filename) {
					let e = t.filename.lastIndexOf("."),
						n = e > 0 ? t.filename.substr(e) : "";
					return t.title + n
				}
				return t.filename
			}
		},
		499401: function(t, e, n) {
			n.d(e, {
				Y: () => l
			});
			var r = n(388032);

			function l(t) {
				let {
					application: e,
					username: n,
					usernameOnClick: l
				} = t;
				return null != e ? r.intl.formatToParts(r.t.Tes5Oj, {
					username: n,
					applicationName: e.name,
					usernameOnClick: l
				}) : r.intl.formatToParts(r.t.PUJtgo, {
					username: n,
					usernameOnClick: l
				})
			}
		},
		693912: function(t, e, n) {
			n.d(e, {
				B2: () => o,
				DS: () => a,
				hj: () => s,
				nh: () => u
			});
			var r = n(63063),
				l = n(981631),
				i = n(388032);

			function a(t) {
				let {
					application: e,
					username: n,
					usernameHook: a = l.dG4,
					applicationNameHook: u = l.dG4
				} = t;
				return null != e ? i.intl.format(i.t.J8SaGx, {
					username: n,
					otherUsername: e.name,
					usernameHook: a,
					otherUsernameHook: u,
					helpCenterLink: r.Z.getArticleURL(l.BhN.PRIVATE_CHANNEL_INTEGRATIONS)
				}) : i.intl.format(i.t["+6V2sb"], {
					username: n,
					usernameHook: a,
					helpCenterLink: r.Z.getArticleURL(l.BhN.PRIVATE_CHANNEL_INTEGRATIONS)
				})
			}

			function u(t) {
				let {
					application: e,
					username: n,
					usernameHook: a = l.dG4,
					applicationNameHook: u = l.dG4
				} = t;
				return null != e ? i.intl.format(i.t.eGCDam, {
					username: n,
					otherUsername: e.name,
					usernameHook: a,
					otherUsernameHook: u,
					helpCenterLink: r.Z.getArticleURL(l.BhN.PRIVATE_CHANNEL_INTEGRATIONS)
				}) : i.intl.format(i.t.sAX6rq, {
					username: n,
					usernameHook: a,
					helpCenterLink: r.Z.getArticleURL(l.BhN.PRIVATE_CHANNEL_INTEGRATIONS)
				})
			}

			function o(t) {
				let {
					application: e,
					username: n,
					usernameOnClick: a,
					applicationNameOnClick: u,
					medium: o
				} = t;
				return null != e ? i.intl.formatToParts(i.t["8r+Z+P"], {
					username: n,
					otherUsername: e.name,
					usernameOnClick: a,
					otherUsernameOnClick: u,
					medium: o,
					helpCenterLink: {
						url: r.Z.getArticleURL(l.BhN.PRIVATE_CHANNEL_INTEGRATIONS)
					}
				}) : i.intl.formatToParts(i.t.ojysqa, {
					username: n,
					usernameOnClick: a,
					medium: o,
					helpCenterLink: {
						url: r.Z.getArticleURL(l.BhN.PRIVATE_CHANNEL_INTEGRATIONS)
					}
				})
			}

			function s(t) {
				let {
					application: e,
					username: n,
					usernameOnClick: a,
					applicationNameOnClick: u,
					medium: o
				} = t;
				return null != e ? i.intl.formatToParts(i.t.zmc0mp, {
					username: n,
					otherUsername: e.name,
					usernameOnClick: a,
					otherUsernameOnClick: u,
					medium: o,
					helpCenterLink: {
						url: r.Z.getArticleURL(l.BhN.PRIVATE_CHANNEL_INTEGRATIONS)
					}
				}) : i.intl.formatToParts(i.t["x2CN/f"], {
					username: n,
					usernameOnClick: a,
					medium: o,
					helpCenterLink: {
						url: r.Z.getArticleURL(l.BhN.PRIVATE_CHANNEL_INTEGRATIONS)
					}
				})
			}
		},
		723774: function(t, e, n) {
			n.d(e, {
				WE: () => s,
				lE: () => u
			});
			var r = n(709054),
				l = n(124368),
				i = n(388032);
			let a = t => r.default.compare("992549565104128000", t) > -1,
				u = (t, e) => {
					if (null == t || t < 0) return "0";
					{
						let n = a(e);
						return (null == e || n) && t >= l.vw ? "50+" : t >= l.M3 ? "100k+" : "".concat(t)
					}
				},
				o = (t, e, n) => {
					let r = u(t, n);
					return "0" === r ? i.intl.string(i.t.eXHkho) : i.intl.formatToPlainString(e, {
						count: r
					})
				},
				s = (t, e) => o(t, i.t.rfAXDQ, e)
		},
		352736: function(t, e, n) {
			n.d(e, {
				Z: () => P
			}), n(388685);
			var r = n(721355),
				l = n(320285),
				i = n(25209),
				a = n(97797),
				u = n(35125),
				o = n(786761),
				s = n(739566),
				c = n(499401),
				m = n(693912),
				d = n(23750),
				f = n(314897),
				N = n(592125),
				_ = n(430824),
				T = n(594174),
				I = n(5192),
				E = n(709054),
				p = n(981631),
				C = n(388032);
			let A = {
					"234395307759108106": "https://groovy.bot/commands",
					"365975655608745985": "https://www.pokecord.com/getting-started",
					"512412940897484800": "http://jameslantz.net/smilebot"
				},
				h = () => [C.t["0cuj7u"], C.t["MuW+CA"], C.t.osqpHR, C.t["5ToSh4"], C.t.JEB8pq, C.t.pkOV5e, C.t.kRb1Jy, C.t.EmKLY2, C.t.rPtBnZ, C.t["5B/ekZ"], C.t.ESNC3d, C.t["Iw6d8/"], C.t.WecSZ2],
				R = () => [C.t.Jm6e09, C.t.MGRnRU, C.t.EXOEGh, C.t["5uCTFB"], C.t.rl45Qk, C.t.Bh9zpa, C.t.RdEy1N, C.t.qcdp09, C.t.F7w2Rk, C.t.gSyOgI, C.t.uYgqv7, C.t["b/1SBQ"], C.t.LhebZG];

			function O(t) {
				let e = R(),
					n = E.default.extractTimestamp(t) % e.length;
				return e[n]
			}

			function g(t) {
				return (0, i.Rp)(C.intl.formatToParts(C.t["ihxM9/"], {
					username: t,
					usernameOnClick: p.dG4
				}))
			}
			let P = {
				stringify: function(t, e) {
					var n, E, A, h;
					let R = function(t) {
							var e, n, r;
							let [l] = null != (e = t.mentions) ? e : [];
							return null == l ? null : "object" == typeof l ? null != (n = T.default.getUser(l.id)) ? n : null : "string" == typeof l && null != (r = T.default.getUser(l)) ? r : null
						}(t),
						P = t.channel_id,
						G = I.ZP.getName(null, P, t.author);
					switch (t.type) {
						case p.uaV.RECIPIENT_ADD:
							if (null == R) return;
							return (0, i.Rp)(C.intl.formatToParts(C.t["7/Xl0d"], {
								username: G,
								usernameOnClick: p.dG4,
								otherUsername: I.ZP.getName(null, P, R),
								otherUsernameOnClick: p.dG4
							}));
						case p.uaV.RECIPIENT_REMOVE:
							if (null == R) return;
							let L = t.author;
							if (null == L || L.id === R.id) return (0, i.Rp)(C.intl.formatToParts(C.t["Qn5+LS"], {
								username: G,
								usernameOnClick: p.dG4
							}));
							return (0, i.Rp)(C.intl.formatToParts(C.t.QtZ0RE, {
								username: G,
								usernameOnClick: p.dG4,
								otherUsername: I.ZP.getName(null, P, R),
								otherUsernameOnClick: p.dG4
							}));
						case p.uaV.CALL:
							let {
								call: S
							} = t;
							if (null != S && -1 === S.participants.indexOf(f.default.getId())) return (0, i.Rp)(C.intl.formatToParts(C.t.DbgSAw, {
								username: G,
								usernameOnClick: p.dG4
							}));
							return;
						case p.uaV.CHANNEL_NAME_CHANGE:
							return (0, i.Rp)(C.intl.formatToParts(e.isForumPost() ? C.t["qa0e/v"] : C.t.XCPMEB, {
								username: G,
								usernameOnClick: p.dG4,
								channelName: t.content
							}));
						case p.uaV.CHANNEL_ICON_CHANGE:
							return (0, i.Rp)(C.intl.formatToParts(C.t.wypJZ2, {
								username: G,
								usernameOnClick: p.dG4
							}));
						case p.uaV.CHANNEL_PINNED_MESSAGE:
							return (0, i.Rp)(C.intl.formatToParts(C.t["/M60j4"], {
								username: G,
								usernameOnClick: p.dG4
							}));
						case p.uaV.USER_JOIN:
							return (0, i.Rp)(C.intl.formatToParts(O(t.id), {
								username: G,
								usernameOnClick: p.dG4
							}));
						case p.uaV.GUILD_BOOST:
							return g(G);
						case p.uaV.GUILD_BOOST_TIER_1:
						case p.uaV.GUILD_BOOST_TIER_2:
						case p.uaV.GUILD_BOOST_TIER_3:
							let k = N.Z.getChannel(P);
							return null == k || null == _.Z.getGuild(k.getGuildId()) ? g(G) : (0, i.Rp)(C.intl.formatToParts(C.t["ihxM9/"], {
								username: G,
								usernameOnClick: p.dG4
							}));
						case p.uaV.GUILD_INVITE_REMINDER:
							return C.intl.string(C.t.gxyKvr);
						case p.uaV.THREAD_STARTER_MESSAGE:
							return C.intl.formatToPlainString(C.t["B8H+Cg"], {
								username: G,
								threadName: e.name
							});
						case p.uaV.ROLE_SUBSCRIPTION_PURCHASE:
							if (t instanceof d.ZP) return null;
							return (0, i.Rp)((0, u.vp)({
								username: G,
								guildId: e.guild_id,
								roleSubscriptionData: t.role_subscription_data
							}));
						case p.uaV.PURCHASE_NOTIFICATION:
							if (t instanceof d.ZP || (null == (E = t.purchase_notification) || null == (n = E.guild_product_purchase) ? void 0 : n.product_name) == null) return null;
							return (0, i.Rp)((0, a.i)({
								username: G,
								productName: t.purchase_notification.guild_product_purchase.product_name
							}));
						case p.uaV.GUILD_APPLICATION_PREMIUM_SUBSCRIPTION:
							if (t instanceof d.ZP) return null;
							let U = (0, s.ZH)((0, o.e5)(t));
							return (0, i.Rp)((0, c.Y)({
								application: t.application,
								username: U.nick
							}));
						case p.uaV.PRIVATE_CHANNEL_INTEGRATION_ADDED:
							if (t instanceof d.ZP) return null;
							return (0, i.Rp)((0, m.B2)({
								application: t.application,
								username: (0, s.ZH)((0, o.e5)(t)).nick
							}));
						case p.uaV.PRIVATE_CHANNEL_INTEGRATION_REMOVED:
							if (t instanceof d.ZP) return null;
							return (0, i.Rp)((0, m.hj)({
								application: t.application,
								username: (0, s.ZH)((0, o.e5)(t)).nick
							}));
						case p.uaV.AUTO_MODERATION_ACTION:
							if (null == (A = t.embeds) ? void 0 : A.some(t => {
									let {
										type: e
									} = t;
									return e === p.hBH.AUTO_MODERATION_NOTIFICATION
								})) {
								let e = t.embeds.find(t => {
										let {
											type: e
										} = t;
										return e === p.hBH.AUTO_MODERATION_NOTIFICATION
									}),
									n = null == e || null == (h = e.fields) ? void 0 : h.find(t => "name" in t && t.name === r.D.NOTIFICATION_TYPE),
									a = null != n && "value" in n ? n.value : void 0,
									u = N.Z.getChannel(P);
								if (null == u) return null;
								let o = _.Z.getGuild(u.getGuildId());
								if (null == o) return null;
								switch (a) {
									case l.p.ACTIVITY_ALERTS_ENABLED:
										return (0, i.Rp)(C.intl.formatToParts(C.t.wt3ZUF, {
											guildName: o.name
										}));
									case l.p.INTERACTION_BLOCKED:
										return (0, i.Rp)(C.intl.formatToParts(C.t.AkqI0t, {
											guildName: o.name
										}));
									default:
										return (0, i.Rp)(C.intl.formatToParts(C.t["a+lJKi"], {
											guildName: o.name
										}))
								}
							}
							return t.content;
						case p.uaV.GUILD_INCIDENT_ALERT_MODE_ENABLED:
							var D = t.content;
							let Z = N.Z.getChannel(P);
							if (null == Z) return null;
							let v = _.Z.getGuild(Z.getGuildId());
							return null == v ? null : (0, i.Rp)(C.intl.formatToParts(C.t.iOuWPj, {
								username: G,
								guildName: v.name,
								time: "" !== D ? new Date(D).toLocaleString(C.intl.currentLocale, {
									hour: "numeric",
									minute: "2-digit"
								}) : ""
							}));
						case p.uaV.GUILD_INCIDENT_ALERT_MODE_DISABLED:
							let V = N.Z.getChannel(P);
							if (null == V) return null;
							let B = _.Z.getGuild(V.getGuildId());
							return null == B ? null : (0, i.Rp)(C.intl.formatToParts(C.t.axmbpq, {
								username: G,
								guildName: B.name
							}));
						default:
							return t.content
					}
				},
				getSystemMessageUserJoin: function(t) {
					let e = h(),
						n = E.default.extractTimestamp(t) % e.length;
					return e[n]
				},
				getSystemMessageUserJoinMobile: O,
				getSystemMessageBotJoin: function(t) {
					return null == A[t] ? null : C.intl.format(C.t.xw1Ij4, {
						learnOnClick: {
							onClick: () => window.open(A[t])
						}
					})
				}
			}
		},
		320285: function(t, e, n) {
			n.d(e, {
				p: () => l
			});
			var r, l = ((r = {}).RAID = "raid", r.MENTION_RAID = "mention_raid", r.ACTIVITY_ALERTS_ENABLED = "activity_alerts_enabled", r.INTERACTION_BLOCKED = "interaction_blocked", r)
		}
	}
]);
//# sourceMappingURL=99aa0c6c5f73f9a2.js.map