"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
	["3940"], {
		103879: function(t, e, n) {
			n.d(e, {
				FN: () => c,
				NA: () => S,
				_w: () => U,
				uR: () => T,
				yq: () => o
			});
			var i = n(544891),
				E = n(570140),
				_ = n(406432),
				l = n(314897),
				A = n(236289),
				a = n(788080),
				r = n(800530),
				u = n(981631);
			async function o() {
				E.Z.dispatch({
					type: "SAFETY_HUB_FETCH_START"
				});
				let t = l.default.getSuspendedUserToken(),
					e = null != t ? u.ANM.SAFETY_HUB_SUSPENDED : u.ANM.SAFETY_HUB,
					n = null != t ? i.tn.post({
						url: e,
						body: {
							token: t
						},
						rejectWithError: !1
					}) : i.tn.get({
						url: e,
						rejectWithError: !1
					});
				await n.then(t => {
					let {
						body: e
					} = t, {
						classifications: n,
						guild_classifications: i,
						account_standing: _,
						is_dsa_eligible: l,
						username: A,
						is_appeal_eligible: a,
						appeal_eligibility: r
					} = e, u = n.map(t => (s(t), t));
					E.Z.dispatch({
						type: "SAFETY_HUB_FETCH_SUCCESS",
						classifications: u.concat(null != i ? i : []),
						accountStanding: _,
						isDsaEligible: l,
						username: A,
						isAppealEligible: a,
						appealEligibility: null != r ? r : []
					})
				}).catch(t => {
					var e, n;
					E.Z.dispatch({
						type: "SAFETY_HUB_FETCH_FAILURE",
						error: null != (n = null == t || null == (e = t.body) ? void 0 : e.message) ? n : "Unknown error"
					})
				})
			}
			async function S(t) {
				E.Z.dispatch({
					type: "SAFETY_HUB_FETCH_CLASSIFICATION_START",
					classificationId: t
				});
				let e = l.default.getSuspendedUserToken(),
					n = null != e ? u.ANM.SAFETY_HUB_SUSPENDED : u.ANM.SAFETY_HUB,
					_ = null != e ? i.tn.post({
						url: n,
						body: {
							token: e
						},
						rejectWithError: !1
					}) : i.tn.get({
						url: n,
						rejectWithError: !1
					});
				await _.then(e => {
					let {
						body: n
					} = e, {
						classifications: i,
						account_standing: _,
						is_dsa_eligible: l,
						username: A,
						is_appeal_eligible: a
					} = n, r = i.find(e => e.id === t);
					null != r ? (s(r), E.Z.dispatch({
						type: "SAFETY_HUB_FETCH_CLASSIFICATION_SUCCESS",
						classification: r,
						accountStanding: _,
						isDsaEligible: l,
						username: A,
						isAppealEligible: a
					})) : E.Z.dispatch({
						type: "SAFETY_HUB_FETCH_CLASSIFICATION_FAILURE",
						error: "Classification not found.",
						classificationId: t
					})
				}).catch(e => {
					var n, i;
					E.Z.dispatch({
						type: "SAFETY_HUB_FETCH_CLASSIFICATION_FAILURE",
						error: null != (i = null == e || null == (n = e.body) ? void 0 : n.message) ? i : "Unknown error",
						classificationId: t
					})
				})
			}

			function s(t) {
				if (null != t.flagged_content && t.flagged_content.length > 0) {
					let e = t.flagged_content[0];
					e.attachments = e.attachments.filter(t => {
						let {
							filename: e
						} = t;
						return (0, _.CO)(e) || (0, _.NU)(e)
					}), t.flagged_content = (0, a.Vt)(e) ? [] : [e]
				}
			}
			async function T(t, e, n) {
				let _ = l.default.getSuspendedUserToken(),
					A = null != _ ? u.ANM.SAFETY_HUB_REQUEST_SUSPENDED_USER_REVIEW(t) : u.ANM.SAFETY_HUB_REQUEST_REVIEW(t),
					a = null != _ ? i.tn.put({
						url: A,
						body: {
							signal: e,
							user_input: n,
							token: _
						},
						rejectWithError: !1
					}) : i.tn.put({
						url: A,
						body: {
							signal: e,
							user_input: n
						},
						rejectWithError: !1
					});
				E.Z.dispatch({
					type: "SAFETY_HUB_REQUEST_REVIEW_START"
				}), await a.then(() => {
					E.Z.dispatch({
						type: "SAFETY_HUB_REQUEST_REVIEW_SUCCESS",
						classificationId: t
					})
				}).catch(t => {
					var e, n;
					throw E.Z.dispatch({
						type: "SAFETY_HUB_REQUEST_REVIEW_FAILURE",
						error: null != (n = null == t || null == (e = t.body) ? void 0 : e.message) ? n : "Unknown error"
					}), t
				})
			}
			async function c(t) {
				E.Z.dispatch({
					type: "SAFETY_HUB_REQUEST_AUTOMATED_UNDERAGE_APPEAL_START"
				});
				let e = l.default.getSuspendedUserToken(),
					n = u.ANM.SAFETY_HUB_REQUEST_SUSPENDED_AGE_VERIFICATION,
					_ = i.tn.post({
						url: n,
						body: {
							token: e,
							from_classification_id: t
						},
						rejectWithError: !1
					});
				await _.then(t => {
					let {
						body: e
					} = t, {
						verification_request_id: n,
						verification_webview_url: i
					} = e;
					E.Z.dispatch({
						type: "SAFETY_HUB_REQUEST_AUTOMATED_UNDERAGE_APPEAL_SUCCESS",
						verificationRequestId: n,
						verificationWebviewUrl: i
					})
				}).catch(t => {
					var e, n;
					E.Z.dispatch({
						type: "SAFETY_HUB_REQUEST_AUTOMATED_UNDERAGE_APPEAL_FAILURE",
						error: null != (n = null == t || null == (e = t.body) ? void 0 : e.message) ? n : "Unknown error"
					})
				})
			}
			async function U() {
				E.Z.dispatch({
					type: "SAFETY_HUB_CHECK_AUTOMATED_UNDERAGE_APPEAL_START"
				});
				let t = l.default.getSuspendedUserToken(),
					e = A.Z.getAgeCheckAttempts(),
					n = u.ANM.SAFETY_HUB_CHECK_SUSPENDED_AGE_VERIFICATION,
					_ = i.tn.post({
						url: n,
						body: {
							token: t
						},
						rejectWithError: !1
					});
				await _.then(t => {
					let {
						body: n
					} = t, {
						success: i
					} = n;
					!i && e < r.o6 && setTimeout(() => U(), r.Cp), E.Z.dispatch({
						type: "SAFETY_HUB_CHECK_AUTOMATED_UNDERAGE_APPEAL_SUCCESS",
						success: i
					})
				}).catch(t => {
					var e, n;
					E.Z.dispatch({
						type: "SAFETY_HUB_CHECK_AUTOMATED_UNDERAGE_APPEAL_FAILURE",
						error: null != (n = null == t || null == (e = t.body) ? void 0 : e.message) ? n : "Unknown error"
					})
				})
			}
		},
		364226: function(t, e, n) {
			n.d(e, {
				A: () => E
			});
			let i = (0, n(818083).B)({
				kind: "user",
				id: "2024-02_safety_hub_guild_violation_in_app_appeals",
				label: "Safety Hub Guild Violation In App Appeals",
				defaultConfig: {
					enabled: !1
				},
				treatments: [{
					id: 1,
					label: "Allow guild violations to be applied using the new appeals ingestion flow",
					config: {
						enabled: !0
					}
				}]
			});

			function E(t) {
				return !!i.useExperiment({
					location: t
				}, {
					autoTrackExposure: !0
				}).enabled
			}
		},
		236289: function(t, e, n) {
			n.d(e, {
				Z: () => y
			});
			var i, E, _, l = n(979079),
				A = n.n(l),
				a = n(442837),
				r = n(570140),
				u = n(531441),
				o = n(800530);
			let S = {},
				s = {},
				T = {
					state: u.Sn.ALL_GOOD
				},
				c = !1,
				U = !1,
				p = null,
				d = null,
				f = !1,
				g = !1,
				C = [],
				F = !1,
				I = null,
				R = o.bK.DIDNT_VIOLATE_POLICY,
				D = "",
				H = "",
				L = "",
				N = 0,
				O = null,
				P = !1,
				h = o.oE.NONE,
				Y = null;

			function b(t) {
				let {} = t;
				L = "", O = null, P = !1
			}
			class B extends(_ = a.ZP.Store) {
				isFetching() {
					return c
				}
				getClassifications() {
					return Object.values(S)
				}
				getClassification(t) {
					return S[t]
				}
				getAccountStanding() {
					return T
				}
				getFetchError() {
					return p
				}
				isInitialized() {
					return U
				}
				getClassificationRequestState(t) {
					return s[t]
				}
				getAppealClassificationId() {
					return d
				}
				getIsDsaEligible() {
					return f
				}
				getIsAppealEligible() {
					return g
				}
				getAppealEligibility() {
					return C
				}
				getAppealSignal() {
					return R
				}
				getFreeTextAppealReason() {
					return D
				}
				getIsSubmitting() {
					return F
				}
				getSubmitError() {
					return I
				}
				getUsername() {
					return H
				}
				getAgeVerificationWebviewUrl() {
					return L
				}
				getAgeVerificationError() {
					return O
				}
				getIsLoadingAgeVerification() {
					return P
				}
				getAgeCheckStatus() {
					return h
				}
				getAgeCheckError() {
					return Y
				}
				getAgeCheckAttempts() {
					return N
				}
			}
			E = "SafetyHubStore", (i = "displayName") in B ? Object.defineProperty(B, i, {
				value: E,
				enumerable: !0,
				configurable: !0,
				writable: !0
			}) : B[i] = E;
			let y = new B(r.Z, {
				SAFETY_HUB_FETCH_START: function(t) {
					c = !0
				},
				SAFETY_HUB_FETCH_SUCCESS: function(t) {
					let {
						classifications: e,
						accountStanding: n,
						isDsaEligible: i,
						isAppealEligible: E,
						username: _,
						appealEligibility: l
					} = t;
					S = A()(e, "id"), T = n, f = i, g = E, c = !1, U = !0, p = null, H = _, C = l
				},
				SAFETY_HUB_FETCH_FAILURE: function(t) {
					let {
						error: e
					} = t;
					c = !1, U = !1, p = e
				},
				SAFETY_HUB_FETCH_CLASSIFICATION_START: function(t) {
					s[t.classificationId] = u.OY.PENDING, c = !0
				},
				SAFETY_HUB_FETCH_CLASSIFICATION_SUCCESS: function(t) {
					let {
						classification: e,
						accountStanding: n,
						isDsaEligible: i,
						username: E,
						isAppealEligible: _
					} = t;
					S[e.id] = e, s[e.id] = u.OY.SUCCESS, T = n, c = !1, p = null, f = i, g = _, U = !0, H = E
				},
				SAFETY_HUB_FETCH_CLASSIFICATION_FAILURE: function(t) {
					let {
						error: e,
						classificationId: n
					} = t;
					c = !1, p = e, s[n] = u.OY.FAILED, U = !1
				},
				SAFETY_HUB_APPEAL_OPEN: function(t) {
					let {
						classificationId: e
					} = t;
					d = e
				},
				SAFETY_HUB_APPEAL_CLOSE: function() {
					d = null, R = o.bK.DIDNT_VIOLATE_POLICY, D = ""
				},
				SAFETY_HUB_APPEAL_SIGNAL_SELECT: function(t) {
					let {
						signal: e
					} = t;
					R = e
				},
				SAFETY_HUB_APPEAL_SIGNAL_CUSTOM_INPUT_CHANGE: function(t) {
					let {
						userInput: e
					} = t;
					D = e
				},
				SAFETY_HUB_REQUEST_REVIEW_START: function(t) {
					let {} = t;
					F = !0, I = null
				},
				SAFETY_HUB_REQUEST_REVIEW_SUCCESS: function(t) {
					let {
						classificationId: e
					} = t;
					F = !1, I = null, S[e].appeal_status = {
						status: u.hQ.REVIEW_PENDING
					}
				},
				SAFETY_HUB_REQUEST_REVIEW_FAILURE: function(t) {
					let {
						error: e
					} = t;
					F = !1, I = e
				},
				SAFETY_HUB_REQUEST_AUTOMATED_UNDERAGE_APPEAL_START: function(t) {
					let {} = t;
					L = "", O = null, P = !0
				},
				SAFETY_HUB_REQUEST_AUTOMATED_UNDERAGE_APPEAL_SUCCESS: function(t) {
					let {
						verificationWebviewUrl: e
					} = t;
					L = e, O = null, P = !1
				},
				SAFETY_HUB_REQUEST_AUTOMATED_UNDERAGE_APPEAL_FAILURE: function(t) {
					let {
						error: e
					} = t;
					L = "", O = e, P = !1
				},
				SAFETY_HUB_AUTOMATED_UNDERAGE_APPEAL_MODAL_OPEN: b,
				SAFETY_HUB_AUTOMATED_UNDERAGE_APPEAL_MODAL_CLOSE: b,
				SAFETY_HUB_AUTOMATED_UNDERAGE_APPEAL_SUBMIT_SUCCESS: function(t) {
					let {} = t;
					for (let t in h = o.oE.LOADING, S) S[t].is_coppa && (S[t].appeal_status = {
						status: u.hQ.REVIEW_PENDING
					})
				},
				SAFETY_HUB_AUTOMATED_UNDERAGE_APPEAL_START_POLL: function(t) {
					let {} = t;
					h = o.oE.LOADING, Y = null
				},
				SAFETY_HUB_CHECK_AUTOMATED_UNDERAGE_APPEAL_START: function(t) {
					let {} = t;
					h = o.oE.LOADING, Y = null, N += 1
				},
				SAFETY_HUB_CHECK_AUTOMATED_UNDERAGE_APPEAL_SUCCESS: function(t) {
					let {
						success: e
					} = t;
					h = e ? o.oE.SUCCESS : N < o.o6 ? o.oE.LOADING : o.oE.FAILURE, Y = null
				},
				SAFETY_HUB_CHECK_AUTOMATED_UNDERAGE_APPEAL_FAILURE: function(t) {
					let {
						error: e
					} = t;
					h = o.oE.ERROR, Y = e
				},
				LOGOUT: function() {
					c = !1, S = {}, T = {
						state: u.Sn.ALL_GOOD
					}, d = null, R = o.bK.DIDNT_VIOLATE_POLICY, D = "", C = []
				}
			})
		},
		451284: function(t, e, n) {
			n.d(e, {
				P: () => _
			});
			var i = n(442837),
				E = n(236289);

			function _() {
				return (0, i.e7)([E.Z], () => E.Z.getAccountStanding())
			}
		},
		613734: function(t, e, n) {
			n.d(e, {
				KM: () => c,
				U0: () => U,
				YG: () => s,
				y9: () => T
			}), n(642613);
			var i = n(73800),
				E = n(442837),
				_ = n(709054),
				l = n(103879),
				A = n(364226),
				a = n(531441),
				r = n(236289),
				u = n(788080),
				o = n(800530);

			function S() {
				return (0, E.Wu)([r.Z], () => r.Z.getClassifications()).sort((t, e) => _.default.extractTimestamp(e.id) - _.default.extractTimestamp(t.id))
			}

			function s(t) {
				let e, n = (0, E.e7)([r.Z], () => r.Z.getClassification(t)),
					_ = (0, E.e7)([r.Z], () => r.Z.getClassificationRequestState(t)),
					S = (0, E.e7)([r.Z], () => r.Z.getIsDsaEligible()),
					s = (0, E.e7)([r.Z], () => r.Z.getIsAppealEligible()),
					T = (0, A.A)("classification_detail");
				if ((0, u.FB)(n)) {
					var c;
					e = (null == (c = n.guild_metadata) ? void 0 : c.member_type) === a.wO.OWNER ? o.qS.GUILD_OWNER : o.qS.GUILD_MEMBER
				} else e = o.qS.USER;
				return i.useEffect(() => {
					void 0 === n && null == _ && l.NA(t)
				}, [t, n, _]), {
					classification: n,
					classificationRequestState: _,
					isDsaEligible: S,
					isAppealEligible: s && null != n && null == n.appeal_status && (!(0, u.FB)(n) || T),
					violationType: e
				}
			}

			function T() {
				let t = S(),
					e = new Date;
				return t.filter(t => new Date(t.max_expiration_time) > e)
			}

			function c() {
				let t = S(),
					e = new Date;
				return t.filter(t => new Date(t.max_expiration_time) <= e)
			}

			function U() {
				return (0, E.e7)([r.Z], () => r.Z.getAppealSignal())
			}
		},
		846488: function(t, e, n) {
			n.d(e, {
				e: () => _
			});
			var i = n(442837),
				E = n(236289);

			function _() {
				return (0, i.e7)([E.Z], () => E.Z.isInitialized())
			}
		},
		181211: function(t, e, n) {
			n.d(e, {
				Z: () => _
			});
			var i = n(442837),
				E = n(236289);

			function _() {
				return (0, i.e7)([E.Z], () => E.Z.isFetching())
			}
		}
	}
]);
//# sourceMappingURL=26c6b7e21a448667.js.map