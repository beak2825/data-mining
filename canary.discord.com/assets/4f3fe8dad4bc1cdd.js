"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
	["54408"], {
		944163: function(e, i, t) {
			t.d(i, {
				Z: () => f,
				t: () => c
			}), t(953529);
			var n, l = t(392711),
				r = t.n(l),
				s = t(442837),
				a = t(570140),
				u = t(246364);

			function o(e, i, t) {
				return i in e ? Object.defineProperty(e, i, {
					value: t,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : e[i] = t, e
			}
			let c = {
					version: "",
					description: "",
					formFields: []
				},
				d = {};
			class E extends(n = s.ZP.Store) {
				get(e) {
					if (null != e) return d[e]
				}
				getRulesPrompt(e) {
					var i;
					return r().find(null == (i = d[e]) ? void 0 : i.formFields, u.J)
				}
			}
			o(E, "displayName", "MemberVerificationFormStore");
			let f = new E(a.Z, {
				INVITE_ACCEPT_SUCCESS: function(e) {
					let {
						invite: i
					} = e, {
						member_verification_form: t
					} = i, {
						guild: n
					} = i;
					if (null != n && null != t) {
						var l;
						return d[n.id] = {
							version: t.version,
							description: null != (l = t.description) ? l : "",
							formFields: t.form_fields,
							guild: n
						}, !0
					}
					return !1
				},
				MEMBER_VERIFICATION_FORM_UPDATE: function(e) {
					let {
						form: i,
						guildId: t
					} = e;
					if (null == i) d[t] = c;
					else {
						var n;
						let e = null != (n = d[t]) ? n : c;
						d[t] = function(e) {
							for (var i = 1; i < arguments.length; i++) {
								var t = null != arguments[i] ? arguments[i] : {},
									n = Object.keys(t);
								"function" == typeof Object.getOwnPropertySymbols && (n = n.concat(Object.getOwnPropertySymbols(t).filter(function(e) {
									return Object.getOwnPropertyDescriptor(t, e).enumerable
								}))), n.forEach(function(i) {
									o(e, i, t[i])
								})
							}
							return e
						}({}, e, i)
					}
				},
				MEMBER_VERIFICATION_FORM_FETCH_FAIL: function(e) {
					var i;
					let {
						guildId: t
					} = e;
					d[t] = null != (i = d[t]) ? i : c
				},
				GUILD_DELETE: function(e) {
					let {
						guild: i
					} = e;
					delete d[null == i ? void 0 : i.id]
				}
			})
		},
		118215: function(e, i, t) {
			t.d(i, {
				ZP: () => d
			});
			var n, l, r, s = t(442837),
				a = t(570140);
			let u = {},
				o = !1;
			class c extends(r = s.ZP.Store) {
				isLoading() {
					return o
				}
				passesChecklist(e) {
					var i;
					return !o && (null == (i = u[e]) ? void 0 : i.sufficient)
				}
				isPendingSuccess(e) {
					let i = u[e];
					return null != i && !o && i.healthScorePending && i.safeEnvironment && 0 === Object.keys(i.nsfwProperties).length && i.size && i.protected
				}
				getDiscoveryChecklist(e) {
					return u[e]
				}
			}
			l = "DiscoverGuildChecklistStore", (n = "displayName") in c ? Object.defineProperty(c, n, {
				value: l,
				enumerable: !0,
				configurable: !0,
				writable: !0
			}) : c[n] = l;
			let d = new c(a.Z, {
				DISCOVER_CHECKLIST_FETCH_START: function(e) {
					o = !0
				},
				DISCOVER_CHECKLIST_FETCH_FAILURE: function(e) {
					o = !1
				},
				DISCOVER_CHECKLIST_FETCH_SUCCESS: function(e) {
					var i;
					let {
						checklist: t,
						guildId: n
					} = e;
					o = !1, u[n] = {
						guildId: t.guild_id,
						safeEnvironment: t.safe_environment,
						healthy: t.healthy,
						healthScorePending: t.health_score_pending,
						nsfwProperties: t.nsfw_properties,
						size: t.size,
						protected: t.protected,
						sufficient: t.sufficient,
						sufficientWithoutGracePeriod: t.sufficient_without_grace_period,
						gracePeriodEndDate: null != t.grace_period_end_date ? new Date(t.grace_period_end_date) : null,
						retentionHealthy: t.retention_healthy,
						engagementHealthy: t.engagement_healthy,
						minimumGuildSize: null != t.minimum_size ? t.minimum_size : 1e3,
						healthScore: t.health_score,
						minimumGuildAge: null != (i = t.minimum_age) ? i : 0,
						age: t.age
					}
				}
			})
		},
		166184: function(e, i, t) {
			t.d(i, {
				Z: () => v
			}), t(953529), t(388685), t(35282);
			var n = t(255367),
				l = t(73800),
				r = t(120356),
				s = t.n(r),
				a = t(780384),
				u = t(481060),
				o = t(410030),
				c = t(686546),
				d = t(372769),
				E = t(134432),
				f = t(768581),
				I = t(624138),
				_ = t(388032),
				S = t(192639),
				g = t(129512),
				m = t(330065);
			let h = [16, 16, 14, 14, 12, 10, 8],
				v = function(e) {
					var i, t;
					let {
						guild: r,
						disabled: v,
						small: T,
						loading: p = !1,
						description: A,
						memberCount: N,
						presenceCount: C,
						className: D
					} = e, y = (0, o.ZP)(), [O, P] = l.useState(!1);
					if (null == r || p) return (0, n.jsx)("div", {
						className: s()(D, S.card, S.cardPlaceholder, {
							[S.cardSmall]: T,
							[S.cardDisabled]: v
						})
					});
					let {
						name: R
					} = r, L = null != r.discoverySplash && /^data:/.test(r.discoverySplash) ? r.discoverySplash : f.ZP.getGuildDiscoverySplashURL({
						id: r.id,
						splash: r.discoverySplash,
						size: 240 * (0, E.x_)()
					}), b = (0, a.wj)(y) ? g : m, j = null != (i = f.ZP.getGuildIconURL({
						id: r.id,
						icon: r.icon,
						size: 40
					})) ? i : void 0, V = null != r.description ? r.description : A, G = null != N ? N : null == r ? void 0 : r.memberCount, x = null != C ? C : null == r ? void 0 : r.presenceCount, M = null;
					if (null != j) M = (0, n.jsx)("img", {
						src: j,
						alt: "",
						className: S.avatar
					});
					else {
						let e = (0, I.Zg)(r.name);
						M = (0, n.jsx)("div", {
							className: S.defaultIcon,
							children: (0, n.jsx)(u.Text, {
								className: S.acronym,
								style: {
									fontSize: null != (t = h[e.length]) ? t : h[h.length - 1]
								},
								variant: "text-sm/normal",
								children: e
							})
						})
					}
					return (0, n.jsxs)("div", {
						className: s()(D, S.card, {
							[S.cardSmall]: T,
							[S.cardDisabled]: v,
							[S.splashLoaded]: O
						}),
						children: [(0, n.jsxs)("div", {
							className: S.cardHeader,
							children: [(0, n.jsx)("div", {
								className: S.splash,
								children: (0, n.jsx)("img", {
									src: null != L ? L : b,
									alt: "",
									className: S.splashImage,
									onLoad: () => P(!0)
								})
							}), (0, n.jsx)("div", {
								className: S.guildIcon,
								children: (0, n.jsx)(c.ZP, {
									mask: c.ZP.Masks.SQUIRCLE,
									width: 48,
									height: 48,
									children: (0, n.jsx)("div", {
										className: S.iconMask,
										children: (0, n.jsx)(c.ZP, {
											mask: c.ZP.Masks.SQUIRCLE,
											width: 40,
											height: 40,
											children: null != M ? M : null
										})
									})
								})
							})]
						}), (0, n.jsxs)("div", {
							className: S.guildInfo,
							children: [(0, n.jsxs)("div", {
								className: S.title,
								children: [(0, n.jsx)(d.Z, {
									className: S.verifiedIcon,
									guild: r,
									tooltipColor: u.ua7.Colors.PRIMARY
								}), (0, n.jsx)(u.Text, {
									className: S.guildName,
									variant: "text-md/normal",
									children: (0, n.jsx)("span", {
										children: R
									})
								})]
							}), (0, n.jsx)("div", {
								className: S.descriptionContainer,
								children: (0, n.jsx)(u.Text, {
									lineClamp: 3,
									className: S.description,
									variant: "text-sm/normal",
									tag: "span",
									children: V
								})
							}), (0, n.jsxs)("div", {
								className: S.memberInfo,
								children: [null != x && (0, n.jsxs)("div", {
									className: S.memberCount,
									children: [(0, n.jsx)("div", {
										className: S.dotOnline
									}), (0, n.jsx)(u.Text, {
										variant: "text-xs/normal",
										children: T ? _.intl.formatToPlainString(_.t.YMor7u, {
											count: x
										}) : _.intl.formatToPlainString(_.t["LC+S+v"], {
											membersOnline: x
										})
									})]
								}), null != G && (0, n.jsxs)("div", {
									className: S.memberCount,
									children: [(0, n.jsx)("div", {
										className: S.dotOffline
									}), (0, n.jsx)(u.Text, {
										variant: "text-xs/normal",
										children: T ? _.intl.formatToPlainString(_.t.YMor7u, {
											count: G
										}) : _.intl.formatToPlainString(_.t.zRl6XV, {
											count: G
										})
									})]
								})]
							})]
						})]
					})
				}
		},
		658666: function(e, i, t) {
			let n;
			t.d(i, {
				Z: () => x
			}), t(388685), t(781311);
			var l, r = t(392711),
				s = t.n(r),
				a = t(442837),
				u = t(570140),
				o = t(944163),
				c = t(246364),
				d = t(314852),
				E = t(999382),
				f = t(118215),
				I = t(384632),
				_ = t(386885),
				S = t(981631),
				g = t(388032);

			function m(e, i, t) {
				return i in e ? Object.defineProperty(e, i, {
					value: t,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : e[i] = t, e
			}

			function h(e) {
				for (var i = 1; i < arguments.length; i++) {
					var t = null != arguments[i] ? arguments[i] : {},
						n = Object.keys(t);
					"function" == typeof Object.getOwnPropertySymbols && (n = n.concat(Object.getOwnPropertySymbols(t).filter(function(e) {
						return Object.getOwnPropertyDescriptor(t, e).enumerable
					}))), n.forEach(function(i) {
						m(e, i, t[i])
					})
				}
				return e
			}

			function v(e, i) {
				return i = null != i ? i : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(i)) : (function(e, i) {
					var t = Object.keys(e);
					if (Object.getOwnPropertySymbols) {
						var n = Object.getOwnPropertySymbols(e);
						t.push.apply(t, n)
					}
					return t
				})(Object(i)).forEach(function(t) {
					Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(i, t))
				}), e
			}
			let T = {
					verificationDirty: !1,
					guildDirty: !1,
					profileDirty: !1,
					isAgeRestrictedDirty: !1
				},
				p = T;

			function A() {
				let e = E.Z.getGuild();
				if (null == e) return;
				let i = f.ZP.getDiscoveryChecklist(e.id);
				if (null != i) return (0, _.V)(e, i)
			}

			function N() {
				var e;
				let i = E.Z.getGuildId();
				return null == i ? null : null == (e = o.Z.get(i)) ? void 0 : e.formFields
			}

			function C() {
				let e = N();
				if (null == e) return;
				let i = e.find(e => (0, c.J)(e));
				return null == i ? [{
					id: (0, r.uniqueId)(),
					value: ""
				}] : i.values.map(e => ({
					id: (0, r.uniqueId)(),
					value: e
				}))
			}

			function D() {
				let e = N();
				if (null == e) return;
				let i = e.find(e => (0, c.J)(e));
				if (0 === e.length || 1 === e.length && null != i) {
					let e = {
						field_type: c.QJ.TEXT_INPUT,
						label: g.intl.string(g.t["83ZsRU"]),
						required: !0
					};
					return null != i ? [i, e] : [e]
				}
				return [...e]
			}

			function y(e) {
				return e.features.has(S.oNc.DISCOVERABLE) ? I.A.DISCOVERABLE : e.features.has(S.oNc.MEMBER_VERIFICATION_GATE_ENABLED) && e.features.has(S.oNc.MEMBER_VERIFICATION_MANUAL_APPROVAL) ? I.A.APPLY : I.A.INVITE
			}

			function O(e, i) {
				let t = e.features.has(S.oNc.MEMBER_VERIFICATION_GATE_ENABLED),
					n = e.ownerConfiguredContentLevel === S.V_K.AGE_RESTRICTED;
				switch (i) {
					case I.A.INVITE:
						return {
							joinType: I.A.INVITE, requireTerms: t, termRules: C(), isAgeRestricted: n
						};
					case I.A.APPLY:
						return {
							joinType: I.A.APPLY, pendingVerificationFields: D(), isAgeRestricted: n
						};
					case I.A.DISCOVERABLE:
						return {
							joinType: I.A.DISCOVERABLE, settingsView: A(), requireTerms: t, termRules: C(), isAgeRestricted: n
						}
				}
			}

			function P(e, i) {
				var t, n, l, r;
				let {
					requireTerms: a,
					termRules: u
				} = i;
				if (e.features.has(S.oNc.MEMBER_VERIFICATION_MANUAL_APPROVAL) || e.features.has(S.oNc.MEMBER_VERIFICATION_GATE_ENABLED) !== a) return !0;
				let o = null != (n = N()) ? n : [];
				if (o.length > 1) return !0;
				let d = null != (l = null == (t = o.find(e => (0, c.J)(e))) ? void 0 : t.values) ? l : [],
					E = null != (r = null == u ? void 0 : u.map(e => e.value.trim()).filter(e => "" !== e)) ? r : [];
				return !s().isEqual(d, E)
			}

			function R() {
				let e = E.Z.getGuild();
				if (null == e || null == n) {
					p = T;
					return
				}
				let i = y(e) !== n.joinType,
					t = e.ownerConfiguredContentLevel === S.V_K.AGE_RESTRICTED !== n.isAgeRestricted;
				switch (n.joinType) {
					case I.A.INVITE:
						p = {
							verificationDirty: P(e, n),
							guildDirty: i,
							profileDirty: !1,
							isAgeRestrictedDirty: t
						};
						break;
					case I.A.APPLY:
						var l, r;
						let a, u = N(),
							{
								pendingVerificationFields: o
							} = n,
							c = !e.features.has(S.oNc.MEMBER_VERIFICATION_GATE_ENABLED) || !e.features.has(S.oNc.MEMBER_VERIFICATION_MANUAL_APPROVAL);
						a = null == u ? null != o : null != o && !s().isEqual(u, o), p = {
							verificationDirty: c || a,
							guildDirty: i,
							profileDirty: (null == (l = d.Z.getProfile(e.id)) ? void 0 : l.visibility) !== (null == (r = E.Z.getGuildProfile()) ? void 0 : r.visibility),
							isAgeRestrictedDirty: t
						};
						break;
					case I.A.DISCOVERABLE:
						p = {
							verificationDirty: P(e, n),
							guildDirty: i || E.Z.hasChanges(),
							profileDirty: !1,
							isAgeRestrictedDirty: t
						}
				}
			}

			function L() {
				if (null == E.Z.getGuildId() || null == n) return !1;
				n = n.joinType === I.A.APPLY ? v(h({}, n), {
					pendingVerificationFields: D()
				}) : v(h({}, n), {
					termRules: C()
				}), R()
			}

			function b(e) {
				let {
					section: i,
					subsection: t
				} = e;
				if (i !== S.pNK.ACCESS) return j();
				let l = E.Z.getGuild();
				if (null == l) return !1;
				let r = t === S.KsC.ACCESS_DISCOVERABLE && l.features.has(S.oNc.COMMUNITY) ? I.A.DISCOVERABLE : y(l);
				n = O(l, r), R()
			}

			function j() {
				n = void 0, p = T
			}

			function V() {
				if ((null == n ? void 0 : n.joinType) !== I.A.DISCOVERABLE) return !1;
				n = v(h({}, n), {
					settingsView: A()
				}), R()
			}
			class G extends(l = a.ZP.Store) {
				initialize() {
					this.waitFor(E.Z, o.Z, f.ZP), this.syncWith([E.Z, o.Z], () => {
						R()
					})
				}
				get pendingState() {
					return n
				}
				get dirtyState() {
					return p
				}
				showNotice() {
					return p.guildDirty || p.verificationDirty || p.profileDirty || p.isAgeRestrictedDirty
				}
			}
			m(G, "displayName", "GuildSettingsJoinRulesStore");
			let x = new G(u.Z, {
				GUILD_SETTINGS_JOIN_RULES_INVITE_SET_PENDING_RULES: function(e) {
					let {
						guildId: i,
						requireTerms: t,
						termRules: l
					} = e;
					if (i !== E.Z.getGuildId() || (null == n ? void 0 : n.joinType) !== I.A.INVITE && (null == n ? void 0 : n.joinType) !== I.A.DISCOVERABLE) return !1;
					n = v(h({}, n), {
						requireTerms: t,
						termRules: l
					}), R()
				},
				GUILD_SETTINGS_JOIN_RULES_APPLY_SET_PENDING_FORM_FIELDS: function(e) {
					let {
						guildId: i,
						formFields: t
					} = e;
					if (i !== E.Z.getGuildId() || (null == n ? void 0 : n.joinType) !== I.A.APPLY) return !1;
					n = v(h({}, n), {
						pendingVerificationFields: t
					}), R()
				},
				GUILD_SETTINGS_JOIN_RULES_SET_SELECTED_TYPE: function(e) {
					let {
						guildId: i,
						joinType: t
					} = e, l = E.Z.getGuild();
					if (i !== (null == l ? void 0 : l.id)) return !1;
					n = O(l, t), R()
				},
				GUILD_SETTINGS_JOIN_RULES_SET_CONTENT_LEVEL: function(e) {
					let {
						guildId: i,
						isAgeRestricted: t
					} = e, l = E.Z.getGuild();
					if (i !== (null == l ? void 0 : l.id)) return !1;
					n = v(h({}, null != n ? n : O(l, y(l))), {
						isAgeRestricted: t
					}), R()
				},
				MEMBER_VERIFICATION_FORM_UPDATE: L,
				MEMBER_VERIFICATION_FORM_FETCH_FAIL: L,
				GUILD_SETTINGS_INIT: b,
				GUILD_SETTINGS_SET_SECTION: b,
				GUILD_SETTINGS_CLOSE: j,
				DISCOVER_CHECKLIST_FETCH_SUCCESS: V,
				GUILD_UPDATE_DISCOVERY_METADATA_FROM_SERVER: V,
				GUILD_SETTINGS_SUBMIT_SUCCESS: V
			})
		},
		384632: function(e, i, t) {
			t.d(i, {
				A: () => l
			});
			var n, l = ((n = {}).INVITE = "invite", n.APPLY = "apply", n.DISCOVERABLE = "discoverable", n)
		},
		386885: function(e, i, t) {
			t.d(i, {
				U: () => r,
				V: () => s
			});
			var n, l = t(981631),
				r = ((n = {}).INELIGIBLE = "ineligible", n.DISQUALIFIED = "disqualified", n.ELIGIBLE_DISABLED = "eligible_disabled", n.ELIGIBLE_ENABLED = "eligible_enabled", n);

			function s(e, i) {
				let t = e.features.has(l.oNc.VERIFIED),
					n = e.features.has(l.oNc.DISCOVERABLE);
				if (t) return n ? "eligible_enabled" : "eligible_disabled";
				if (n) {
					let e = i.sufficientWithoutGracePeriod && null != i.gracePeriodEndDate && i.gracePeriodEndDate > new Date;
					return i.sufficient || e ? "eligible_enabled" : "disqualified"
				}
				return i.sufficient ? "eligible_disabled" : "ineligible"
			}
		}
	}
]);
//# sourceMappingURL=4f3fe8dad4bc1cdd.js.map