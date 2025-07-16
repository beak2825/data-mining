"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
	["80417"], {
		90641: function(e, t, n) {
			n.d(t, {
				Z: () => y
			});
			var r = n(570140),
				i = n(668781),
				a = n(287734),
				o = n(881052),
				c = n(314897),
				l = n(592125),
				u = n(979651),
				s = n(352954),
				E = n(630759),
				d = n(760373),
				f = n(981631),
				_ = n(388032);
			async function S(e, t) {
				if (e) {
					r.Z.dispatch({
						type: "SECURE_FRAMES_SETTINGS_UPDATE",
						persistentCodesEnabled: e
					});
					try {
						await (0, E.om)(d.GB), null == t || t()
					} catch (t) {
						var n;
						let e = new o.Hx(t);
						r.Z.dispatch({
							type: "SECURE_FRAMES_SETTINGS_UPDATE",
							persistentCodesEnabled: !1
						}), i.Z.show({
							title: _.intl.string(_.t.R0RpRU),
							body: null != (n = e.getAnyErrorMessage()) ? n : _.intl.string(_.t.eAn6z8)
						})
					}
				} else r.Z.dispatch({
					type: "SECURE_FRAMES_SETTINGS_UPDATE",
					persistentCodesEnabled: e
				}), null == t || t()
			}
			let y = {
				clearUploadedKeyVersions: function() {
					r.Z.dispatch({
						type: "SECURE_FRAMES_UPLOADED_KEY_VERSION_CLEAR"
					})
				},
				updatePersistentCodesEnabled: async function e(e) {
					let t = function() {
						let e = u.Z.getVoiceStateForUser(c.default.getId()),
							t = l.Z.getChannel(null == e ? void 0 : e.channelId);
						return c.default.getSessionId() === (null == e ? void 0 : e.sessionId) && null != t && t.type !== f.d4z.GUILD_STAGE_VOICE ? t.id : null
					}();
					null != t ? s.Z.openSecureFramesUpdateConfirmation({
						title: e ? _.intl.string(_.t.DRFN1N) : _.intl.string(_.t.q29xJy),
						subtitle: e ? _.intl.string(_.t.y015ZW) : _.intl.string(_.t.E66FQk),
						confirmText: _.intl.string(_.t.aTuFYW),
						onConfirm: async () => {
							await S(e, () => {
								a.default.disconnect(), a.default.selectVoiceChannel(t)
							})
						}
					}) : await S(e)
				},
				addUploadedKeyVersion: function(e) {
					r.Z.dispatch({
						type: "SECURE_FRAMES_UPLOADED_KEY_VERSION_ADD",
						keyVersion: e
					})
				},
				createSecureFramesVerifiedKey: function(e, t) {
					r.Z.dispatch({
						type: "SECURE_FRAMES_VERIFIED_KEY_CREATE",
						userId: e,
						key: t
					})
				},
				deleteSecureFramesVerifiedKey: function(e, t) {
					r.Z.dispatch({
						type: "SECURE_FRAMES_VERIFIED_KEY_DELETE",
						userId: e,
						serializedKey: t
					})
				},
				deleteSecureFramesUserVerifiedKeys: function(e) {
					r.Z.dispatch({
						type: "SECURE_FRAMES_USER_VERIFIED_KEYS_DELETE",
						userId: e
					})
				},
				createSecureFramesTransientKey: function(e, t) {
					r.Z.dispatch({
						type: "SECURE_FRAMES_TRANSIENT_KEY_CREATE",
						userId: e,
						key: t
					})
				},
				deleteSecureFramesTransientKey: function(e) {
					r.Z.dispatch({
						type: "SECURE_FRAMES_TRANSIENT_KEY_DELETE",
						userId: e
					})
				}
			}
		},
		760373: function(e, t, n) {
			n.d(t, {
				Eg: () => d,
				GB: () => _,
				KN: () => c,
				WK: () => a,
				Xe: () => E,
				Xj: () => S,
				YP: () => i,
				ak: () => l,
				iQ: () => o,
				tu: () => f,
				y6: () => r
			});
			let r = 5,
				i = 30,
				a = 3,
				o = 5,
				c = 45,
				l = 3;
			var u, s, E = ((u = {}).MATCH = "match", u.OTHER_USER_ALREADY_VERIFIED = "other_user_already_verified", u.OTHER_USER_INCONSISTENT_KEYS = "other_user_inconsistent_keys", u.FINGERPRINT_MISMATCH = "fingerprint_mismatch", u.UNABLE_TO_VERIFY = "unable_to_verify", u.OTHER_USER_DISCONNECTED = "other_user_disconnected", u.CURRENT_USER_DISCONNECTED = "current_user_disconnected", u);
			let d = 0;
			var f = ((s = {}).RTC_DEBUG_PANEL = "rtc_debug_panel", s.RTC_SECURE_FRAMES = "rtc_secure_frames", s);
			let _ = 1,
				S = 0
		},
		352954: function(e, t, n) {
			n.d(t, {
				Z: () => l
			}), n(415506);
			var r = n(255367);
			n(73800);
			var i = n(481060),
				a = n(981631),
				o = n(388032);

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
			let l = {
				openSecureFramesStreamVerification: function(e, t) {
					(0, i.ZDy)(async () => {
						let i = (await n.e("94904").then(n.bind(n, 660250))).default;
						return n => (0, r.jsx)(i, c({
							streamKey: e,
							channelId: t
						}, n))
					})
				},
				openSecureFramesUserVerificationModal: function(e, t, o, l) {
					o() && (0, i.ZDy)(async () => {
						let i = (await n.e("33397").then(n.bind(n, 963410))).default;
						return n => (0, r.jsx)(i, c({
							userId: e,
							channelId: t
						}, n))
					}, {
						contextKey: l === a.IlC.POPOUT ? i.u1M : i.z1l
					})
				},
				openSecureFramesUpdateConfirmation: function(e) {
					let {
						title: t,
						subtitle: a,
						confirmText: l = o.intl.string(o.t["cY+Ooa"]),
						onConfirm: u
					} = e;
					(0, i.ZDy)(async () => {
						let {
							ConfirmModal: e
						} = await Promise.resolve().then(n.bind(n, 481060));
						return n => {
							var s, E;
							return (0, r.jsx)(e, (s = c({
								header: t,
								confirmText: l,
								cancelText: o.intl.string(o.t["ETE/oK"]),
								onConfirm: u
							}, n), E = E = {
								children: (0, r.jsx)(i.Text, {
									variant: "text-sm/normal",
									color: "header-secondary",
									children: a
								})
							}, Object.getOwnPropertyDescriptors ? Object.defineProperties(s, Object.getOwnPropertyDescriptors(E)) : (function(e, t) {
								var n = Object.keys(e);
								if (Object.getOwnPropertySymbols) {
									var r = Object.getOwnPropertySymbols(e);
									n.push.apply(n, r)
								}
								return n
							})(Object(E)).forEach(function(e) {
								Object.defineProperty(s, e, Object.getOwnPropertyDescriptor(E, e))
							}), s))
						}
					})
				},
				handleSecureFramesUserVerificationLink: function(e) {
					throw Error("handleSecureFramesUserVerificationLink not implemented")
				}
			}
		},
		571826: function(e, t, n) {
			n.d(t, {
				CW: () => f,
				DF: () => h,
				KA: () => g,
				M1: () => d,
				PM: () => S,
				Pn: () => p,
				Rq: () => E,
				ih: () => y,
				s$: () => _,
				sN: () => s
			});
			var r = n(367907),
				i = n(221292),
				a = n(592125),
				o = n(626135),
				c = n(981631);

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

			function u(e) {
				var t;
				return null == (t = a.Z.getChannel(e)) ? void 0 : t.guild_id
			}

			function s(e) {
				let {
					channelId: t,
					selectedTab: n
				} = e;
				r.ZP.trackWithMetadata(c.rMx.RTC_PANEL_VIEWED, {
					channel_id: t,
					guild_id: u(t),
					selected_tab: n
				})
			}

			function E(e) {
				let {
					channelId: t,
					userId: n
				} = e;
				r.ZP.trackWithMetadata(c.rMx.E2EE_USER_VERIFICATION_VIEWED, l({
					channel_id: t,
					guild_id: u(t)
				}, (0, i.QN)({
					userId: n
				})))
			}

			function d(e) {
				let {
					channelId: t,
					userId: n,
					analyticsLocation: a
				} = e;
				r.ZP.trackWithMetadata(c.rMx.E2EE_USER_VERIFIED, l({
					channel_id: t,
					guild_id: u(t),
					location: a
				}, (0, i.QN)({
					userId: n
				})))
			}

			function f(e) {
				let {
					channelId: t,
					userId: n,
					keyVersion: a,
					reason: o
				} = e;
				r.ZP.trackWithMetadata(c.rMx.E2EE_USER_VERIFICATION_FAILED, l({
					channel_id: t,
					guild_id: u(t),
					failure_reason: o,
					key_version: "".concat(a)
				}, (0, i.QN)({
					userId: n
				})))
			}

			function _(e) {
				let {
					channelId: t,
					userId: n
				} = e;
				r.ZP.trackWithMetadata(c.rMx.E2EE_USER_VERIFICATION_CODE_COPIED, l({
					channel_id: t,
					guild_id: u(t)
				}, (0, i.QN)({
					userId: n
				})))
			}

			function S(e) {
				let {
					channelId: t
				} = e;
				r.ZP.trackWithMetadata(c.rMx.E2EE_CALL_VERIFICATION_CODE_COPIED, {
					channel_id: t,
					guild_id: u(t)
				})
			}

			function y(e) {
				let {
					channelId: t
				} = e;
				r.ZP.trackWithMetadata(c.rMx.E2EE_STREAM_VERIFICATION_CODE_COPIED, {
					channel_id: t,
					guild_id: u(t)
				})
			}

			function h() {
				o.default.track(c.rMx.E2EE_SETTINGS_USER_DELETE)
			}

			function p() {
				o.default.track(c.rMx.E2EE_SETTINGS_DEVICE_DELETE)
			}

			function g(e) {
				o.default.track(c.rMx.E2EE_PUBLIC_KEY_MISMATCH, {
					key_version: "".concat(e)
				})
			}
		},
		630759: function(e, t, n) {
			n.d(t, {
				J6: () => v,
				LO: () => P,
				TQ: () => Z,
				UB: () => B,
				ZU: () => w,
				Zn: () => M,
				aZ: () => D,
				bo: () => F,
				fz: () => G,
				kK: () => K,
				lg: () => W,
				om: () => x,
				pL: () => N,
				uV: () => O,
				uX: () => j
			}), n(410992), n(227481), n(730884), n(20464), n(341884), n(364341), n(629680), n(505025), n(918970), n(121784), n(644351), n(146733), n(388685);
			var r = n(250683),
				i = n(512722),
				a = n.n(i),
				o = n(913527),
				c = n.n(o),
				l = n(544891),
				u = n(974167),
				s = n(668781),
				E = n(314897),
				d = n(131951),
				f = n(19780),
				_ = n(959457),
				S = n(594174),
				y = n(70956),
				h = n(63063),
				p = n(5192),
				g = n(960048),
				I = n(51144),
				m = n(90641),
				T = n(615830),
				R = n(352954),
				U = n(571826),
				C = n(760373),
				b = n(981631),
				A = n(388032);

			function O() {
				return h.Z.getArticleURL(b.BhN.END_TO_END_ENCRYPTION)
			}

			function D() {
				return h.Z.getArticleURL(b.BhN.END_TO_END_ENCRYPTION)
			}

			function N() {
				return h.Z.getArticleURL(b.BhN.END_TO_END_ENCRYPTION)
			}

			function Z(e, t, n, r, i) {
				n ? m.Z.createSecureFramesVerifiedKey(e, t) : m.Z.createSecureFramesTransientKey(e, t), (0, U.M1)({
					channelId: r,
					userId: e,
					analyticsLocation: i
				})
			}

			function P(e, t, n) {
				if (n) {
					let n = (0, u.MK)(new Uint8Array(t));
					m.Z.deleteSecureFramesVerifiedKey(e, n)
				} else m.Z.deleteSecureFramesTransientKey(e)
			}

			function w(e, t) {
				R.Z.openSecureFramesUpdateConfirmation({
					title: A.intl.string(A.t["hdL15+"]),
					subtitle: A.intl.string(A.t["8VGYKi"]),
					onConfirm: () => {
						m.Z.deleteSecureFramesVerifiedKey(e, t), (0, U.Pn)()
					}
				})
			}

			function M(e) {
				let t = S.default.getUser(e),
					n = I.ZP.getName(t);
				R.Z.openSecureFramesUpdateConfirmation({
					title: A.intl.formatToPlainString(A.t.K6NGBw, {
						username: n
					}),
					subtitle: A.intl.string(A.t.F1BQKy),
					onConfirm: () => {
						m.Z.deleteSecureFramesUserVerifiedKeys(e), (0, U.DF)()
					}
				})
			}

			function F(e) {
				let t = c()(e),
					n = c()().diff(t, "s");
				if (n > 12 * y.Z.Seconds.DAYS_30) {
					let e = Math.round(n / (12 * y.Z.Seconds.DAYS_30));
					return A.intl.formatToPlainString(A.t.F1wqkJ, {
						count: e
					})
				}
				if (n > y.Z.Seconds.DAYS_30) {
					let e = Math.round(n / y.Z.Seconds.DAYS_30);
					return A.intl.formatToPlainString(A.t["iT+b+/"], {
						count: e
					})
				}
				if (n > 7 * y.Z.Seconds.DAY) {
					let e = Math.round(n / (7 * y.Z.Seconds.DAY));
					return A.intl.formatToPlainString(A.t.dLurKS, {
						count: e
					})
				}
				if (n > y.Z.Seconds.DAY) {
					let e = Math.round(n / y.Z.Seconds.DAY);
					return A.intl.formatToPlainString(A.t.LE8a2N, {
						count: e
					})
				}
				if (n > y.Z.Seconds.HOUR) {
					let e = Math.round(n / y.Z.Seconds.HOUR);
					return A.intl.formatToPlainString(A.t.KULxVV, {
						count: e
					})
				} else {
					if (!(n > y.Z.Seconds.MINUTE)) return A.intl.formatToPlainString(A.t["/w0Qp6"], {
						count: n
					});
					let e = Math.round(n / y.Z.Seconds.MINUTE);
					return A.intl.formatToPlainString(A.t.ws6rWl, {
						count: e
					})
				}
			}

			function K(e) {
				let {
					isCurrentUserKeyPersistent: t,
					isOtherUserKeyPersistent: n,
					otherUserNickname: r
				} = e;
				return t && n ? A.intl.format(A.t["FJN+kp"], {
					helpArticle: O()
				}) : t ? A.intl.format(A.t["p/9PGh"], {
					username: r,
					helpArticle: O()
				}) : n ? A.intl.format(A.t["qT5z8/"], {
					helpArticle: O()
				}) : A.intl.format(A.t["6JLy+v"], {
					helpArticle: O()
				})
			}
			async function L(e) {
				let t = E.default.getStaticAuthSessionId();
				return a()(null != t, "[getCurrentUserPublicKey] session id should not be null"), await d.Z.getMLSSigningKey(t, e)
			}

			function V(e) {
				let t = r.fromByteArray(new Uint8Array(e));
				return "data:application/octet-stream;base64,".concat(t)
			}
			async function v(e, t, n) {
				try {
					return (await l.tn.post({
						url: b.ANM.VOICE_MATCH_PUBLIC_KEY(e),
						body: {
							public_key: V(t),
							key_version: n
						},
						rejectWithError: !1
					})).body.is_match
				} catch (e) {
					throw g.Z.captureException(e), e
				}
			}
			async function k(e) {
				let {
					key: t,
					signature: n
				} = await L(e);
				try {
					await l.tn.put({
						url: b.ANM.VOICE_PUBLIC_KEYS(),
						body: {
							public_key: V(t),
							signature: V(n),
							key_version: e
						},
						rejectWithError: !1
					}), m.Z.addUploadedKeyVersion(e)
				} catch (e) {
					throw g.Z.captureException(e), e
				}
			}

			function Y(e) {
				return T.Z.getUploadedKeyVersionsCached().includes(e)
			}
			async function x(e) {
				Y(e) || await k(e)
			}
			async function j(e) {
				if (!Y(e)) return await k(e), !0;
				let t = E.default.getId(),
					{
						key: n
					} = await L(e),
					r = await v(t, n, e);
				return r || (0, U.KA)(e), r
			}

			function B(e, t) {
				let [n, r] = t;
				if (!n.isUserConnected(e)) return !1;
				let i = n.getSecureFramesRosterMapEntry(e);
				if (null == i) return !1;
				let a = new Uint8Array(i);
				for (let t of r.getAllActiveStreamKeys()) {
					if (!r.isUserConnected(t, e)) continue;
					let n = _.Z.getSecureFramesRosterMapEntry(t, e);
					if (null == n) return !0;
					let i = new Uint8Array(n);
					for (let e = 0; e < a.length; e++)
						if (a[e] !== i[e]) return !0
				}
				return !1
			}

			function W(e) {
				let {
					userId: t,
					channelId: n,
					nickname: r
				} = e;
				(0, U.CW)({
					userId: t,
					channelId: n,
					keyVersion: C.GB,
					reason: C.Xe.OTHER_USER_INCONSISTENT_KEYS
				}), s.Z.show({
					title: A.intl.string(A.t.mznLyc),
					body: A.intl.format(A.t.WY6IKS, {
						username: r
					})
				})
			}

			function G(e) {
				let {
					userId: t,
					guildId: n,
					channelId: r
				} = e;
				if (!B(t, [f.Z, _.Z])) return !0;
				{
					let e = S.default.getUser(t),
						i = p.ZP.getName(n, r, e);
					return W({
						userId: t,
						channelId: r,
						nickname: i
					}), !1
				}
			}
		},
		974167: function(e, t, n) {
			n.d(t, {
				Dq: () => r.Dq,
				Il: () => r.Il,
				MK: () => r.MK
			});
			var r = n(610731)
		},
		202475: function(e, t, n) {
			n.d(t, {
				D: () => r
			}), n(415506);

			function r(e, t, n) {
				if (e.byteLength < t) throw Error("data.byteLength must be greater than or equal to desiredLength");
				if (t % n != 0) throw Error("desiredLength must be a multiple of groupSize");
				if (n > 8) throw Error("groupSize must be less than or equal to ".concat(8));
				let r = BigInt(10 ** n),
					i = "";
				for (let a = 0; a < t; a += n) {
					let t = BigInt(0);
					for (let r = n; r > 0; --r) {
						let i = e[a + (n - r)];
						if (void 0 === i) throw Error("Out of bounds access from data array");
						t = t << 8n | BigInt(i)
					}
					t %= r, i += t.toString().padStart(n, "0")
				}
				return i
			}
		},
		214908: function(e, t, n) {
			n.d(t, {
				x: () => r
			}), n(415506), n(410992), n(227481), n(730884), n(20464), n(341884), n(364341), n(629680), n(505025), n(918970), n(121784), n(644351), n(146733);
			async function r(e, t, n) {
				if (0 !== e) throw Error("unsupported fingerprint format version");
				if (0 === t.byteLength) throw Error("zero-length key");
				if (0 === n.length) throw Error("zero-length user ID");
				let r = BigInt(n);
				if (r < 0n || r >= 2n ** 64n) throw Error("user ID out of range");
				let i = new Uint8Array(2 + t.byteLength + 8);
				i.set(t, 2);
				let a = new DataView(i.buffer);
				return a.setUint16(0, e), a.setBigUint64(2 + t.byteLength, r), i
			}
		},
		746178: function(e, t, n) {
			n.d(t, {
				I: () => l
			}), n(410992), n(227481), n(730884), n(20464), n(341884), n(364341), n(629680), n(505025), n(918970), n(121784), n(644351), n(146733), n(724083), n(388685), n(642613);
			var r = n(214908),
				i = n(972164);
			let a = Uint8Array.of(36, 202, 177, 122, 122, 248, 236, 43, 130, 180, 18, 185, 45, 171, 25, 46),
				o = {
					N: 16384,
					r: 8,
					p: 2,
					dkLen: 64
				};

			function c(e, t) {
				for (let n = 0; n < e.length && n < t.length; n++)
					if (e[n] != t[n]) return e[n] - t[n];
				return e.length - t.length
			}
			async function l(e, t, n, l, u) {
				let s = await Promise.all([(0, r.x)(e, t, n), (0, r.x)(e, l, u)]);
				s.sort(c);
				let E = new Uint8Array(s[0].byteLength + s[1].byteLength);
				return E.set(s[0], 0), E.set(s[1], s[0].byteLength), new Uint8Array(await (0, i.E)(E, a, o))
			}
		}
	}
]);
//# sourceMappingURL=d91d7b85b31a7e4c.js.map