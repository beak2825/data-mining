"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
	["6380"], {
		715941: function(t) {
			t.exports = "/assets/cc1962559d37a6d1.svg"
		},
		317192: function(t) {
			t.exports = "/assets/7eb5ad9165537ef6.svg"
		},
		309509: function(t) {
			t.exports = "/assets/49e200b52c0a66ab.svg"
		},
		264298: function(t) {
			t.exports = "/assets/eaf420114113c0bc.svg"
		},
		969315: function(t) {
			t.exports = "/assets/c9d06b948b249c3a.svg"
		},
		157118: function(t) {
			t.exports = "/assets/c48922675fa3fdb4.svg"
		},
		372123: function(t, e, n) {
			n.d(e, {
				Z: () => c
			}), n(415506);
			var i = n(570140),
				r = n(710845),
				l = n(209492),
				a = n(981631);
			let o = new r.Z("CloudSync");
			class s {
				constructor(t) {
					var e, n;
					n = void 0, (e = "message") in this ? Object.defineProperty(this, e, {
						value: n,
						enumerable: !0,
						configurable: !0,
						writable: !0
					}) : this[e] = n, this.message = t
				}
			}
			async function c(t, e) {
				let n, r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
				i.Z.dispatch({
					type: "GAME_CLOUD_SYNC_START",
					applicationId: t,
					branchId: e
				});
				try {
					if ((n = await l.j(t, e, r)).type === a.QCD.CONFLICT) throw i.Z.dispatch({
						type: "GAME_CLOUD_SYNC_CONFLICT",
						applicationId: t,
						branchId: e,
						next: n.next,
						remote: n.remote
					}), new s("Conflict in cloud sync.");
					(n.type === a.QCD.PULL || n.type === a.QCD.PUSH) && o.info("Sync complete", n)
				} catch (n) {
					if (n instanceof s) throw n;
					throw i.Z.dispatch({
						type: "GAME_CLOUD_SYNC_ERROR",
						applicationId: t,
						branchId: e
					}), o.error("Failed to cloud sync:", n), Error("Failed to cloud sync.")
				}
				return i.Z.dispatch({
					type: "GAME_CLOUD_SYNC_COMPLETE",
					applicationId: t,
					branchId: e
				}), n
			}
		},
		696748: function(t, e, n) {
			n.d(e, {
				a: () => j
			}), n(953529), n(415506), n(388685);
			var i = n(255367),
				r = n(73800),
				l = n(913527),
				a = n.n(l),
				o = n(442837),
				s = n(755721),
				c = n(481060),
				d = n(372123),
				u = n(224706),
				p = n(812206),
				h = n(600164),
				f = n(293245),
				y = n(626135),
				C = n(981631),
				O = n(388032),
				g = n(50611),
				m = n(20493);

			function b(t, e, n) {
				return e in t ? Object.defineProperty(t, e, {
					value: n,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : t[e] = n, t
			}

			function N(t) {
				for (var e = 1; e < arguments.length; e++) {
					var n = null != arguments[e] ? arguments[e] : {},
						i = Object.keys(n);
					"function" == typeof Object.getOwnPropertySymbols && (i = i.concat(Object.getOwnPropertySymbols(n).filter(function(t) {
						return Object.getOwnPropertyDescriptor(n, t).enumerable
					}))), i.forEach(function(e) {
						b(t, e, n[e])
					})
				}
				return t
			}
			class T extends r.PureComponent {
				renderConflictButton(t, e, n, r) {
					return (0, i.jsxs)(s.zx, {
						className: g.conflictButton,
						innerClassName: g.conflictButtonInner,
						onClick: r,
						children: [(0, i.jsx)("div", {
							className: n
						}), (0, i.jsxs)("div", {
							className: g.buttonBody,
							children: [(0, i.jsx)("div", {
								className: g.conflictTitle,
								children: t
							}), (0, i.jsx)("div", {
								children: O.intl.string(O.t.gflHOz)
							}), (0, i.jsx)("div", {
								className: g.timestamp,
								children: a()(e).calendar()
							})]
						})]
					})
				}
				renderError() {
					let {
						application: t
					} = this.props;
					return (0, i.jsxs)(r.Fragment, {
						children: [(0, i.jsxs)(c.hzk, {
							children: [(0, i.jsx)(h.Z, {
								justify: h.Z.Justify.CENTER,
								children: (0, i.jsx)("div", {
									className: g.errorArt
								})
							}), (0, i.jsx)("div", {
								className: g.description,
								children: O.intl.format(O.t.RAaWyc, {
									applicationName: t.name
								})
							})]
						}), (0, i.jsx)(c.mzw, {
							children: (0, i.jsxs)(h.Z, {
								justify: h.Z.Justify.BETWEEN,
								children: [(0, i.jsx)(s.zx, {
									className: g.linkButton,
									size: g.linkButtonSize,
									look: s.zx.Looks.LINK,
									color: s.zx.Colors.PRIMARY,
									onClick: this.onClose,
									children: O.intl.string(O.t["ETE/oK"])
								}), (0, i.jsxs)(h.Z, {
									direction: h.Z.Direction.HORIZONTAL,
									justify: h.Z.Justify.END,
									children: [(0, i.jsx)("div", {
										"data-button-hoisted-classname-wrapper": !0,
										className: g.retryButton,
										children: (0, i.jsx)(c.zxk, {
											variant: "secondary",
											text: O.intl.string(O.t["5911LS"]),
											onClick: () => this.handlePlay()
										})
									}), (0, i.jsx)(c.zxk, {
										variant: "primary",
										text: O.intl.string(O.t["359PbW"]),
										onClick: () => this.handlePlay(!1)
									})]
								})]
							})
						})]
					})
				}
				renderConflict() {
					let {
						application: t,
						cloudSyncState: e
					} = this.props;
					if (e.type !== C.TzF.CONFLICT) throw Error("Cannot render conflict for non conflict type");
					return (0, i.jsxs)(c.hzk, {
						className: m.marginBottom20,
						children: [(0, i.jsx)("div", {
							className: g.description,
							children: O.intl.format(O.t.eyXUPz, {
								applicationName: t.name
							})
						}), this.renderConflictButton(O.intl.string(O.t.AQUmkp), e.remote.timestamp, g.conflictDownloadArt, this.handleChooseDownload), (0, i.jsxs)(h.Z, {
							className: g.choiceWrapper,
							align: h.Z.Align.CENTER,
							children: [(0, i.jsx)("div", {
								className: g.choiceLine
							}), (0, i.jsx)("div", {
								className: g.choiceTitle,
								children: O.intl.string(O.t.WUsA2N)
							}), (0, i.jsx)("div", {
								className: g.choiceLine
							})]
						}), this.renderConflictButton(O.intl.string(O.t.AXVws7), e.next.timestamp, g.conflictUploadArt, this.handleChooseUpload)]
					})
				}
				render() {
					let {
						cloudSyncState: t,
						transitionState: e
					} = this.props, n = t.type === C.TzF.CONFLICT ? O.intl.string(O.t.oNbO1d) : O.intl.string(O.t.as4Tgo);
					return (0, i.jsxs)(c.Y0X, {
						transitionState: e,
						className: g.modal,
						"aria-label": n,
						parentComponent: "CloudSyncResolutionModal",
						children: [(0, i.jsxs)(c.xBx, {
							separator: !1,
							children: [(0, i.jsx)(c.olH, {
								className: g.closeButton,
								onClick: this.onClose
							}), (0, i.jsx)(c.vwX, {
								tag: "h2",
								className: m.marginReset,
								children: n
							})]
						}), t.type === C.TzF.CONFLICT ? this.renderConflict() : this.renderError()]
					})
				}
				constructor(...t) {
					var e;
					super(...t), e = this, b(this, "onClose", () => {
						this.props.onClose()
					}), b(this, "handlePlay", function() {
						let t = !(arguments.length > 0) || void 0 === arguments[0] || arguments[0],
							n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
							{
								libraryApplication: i,
								analyticsParams: r
							} = e.props;
						e.onClose(), j(i.id, i, {
							analyticsParams: r,
							cloudSync: t,
							cloudSyncForceHash: n
						})
					}), b(this, "handleChooseDownload", () => {
						let {
							cloudSyncState: t
						} = this.props;
						t.type === C.TzF.CONFLICT && this.handlePlay(!0, t.remote.hash)
					}), b(this, "handleChooseUpload", () => {
						let {
							cloudSyncState: t
						} = this.props;
						t.type === C.TzF.CONFLICT && this.handlePlay(!0, t.next.hash)
					})
				}
			}
			let A = o.ZP.connectStores([f.Z, p.Z], t => {
				let {
					libraryApplication: e,
					branchId: n
				} = t;
				return {
					cloudSyncState: f.Z.getState(e.id, n),
					application: p.Z.getApplication(e.id)
				}
			})(T);
			async function j(t, e, n) {
				let r = p.Z.getApplication(t);
				if (null == r) return;
				let {
					cloudSync: l = !0,
					cloudSyncForceHash: a = null,
					analyticsParams: o
				} = n;
				if (l && null != e) {
					let t = e.branchId;
					try {
						await d.Z(e.id, t, a)
					} catch (n) {
						(0, c.h7j)(n => (0, i.jsx)(A, N({
							libraryApplication: e,
							analyticsParams: o,
							branchId: t
						}, n)));
						return
					}
				}
				return y.default.track(C.rMx.APPLICATION_OPENED, N({
					application_id: r.id,
					application_name: r.name,
					type: C.q5t.LAUNCH,
					distributor: null != e ? e.getDistributor() : null
				}, o)), u.Z.launch({
					applicationId: r.id,
					branchId: null == e ? void 0 : e.branchId
				})
			}
		},
		293245: function(t, e, n) {
			let i, r, l;
			n.d(e, {
				Z: () => m
			}), n(388685);
			var a, o, s, c = n(442837),
				d = n(570140),
				u = n(372123),
				p = n(594190),
				h = n(283595),
				f = n(780570),
				y = n(358085),
				C = n(209492),
				O = n(981631);
			class g extends(a = c.ZP.Store) {
				initialize() {
					y.isPlatformEmbedded && C.S(), i = {}, r = new Set, l = []
				}
				getState(t, e) {
					return i[(0, f.Tu)(t, e)]
				}
				isSyncing(t, e) {
					let n = (0, f.Tu)(t, e);
					return r.has(n)
				}
			}
			s = "CloudSyncStore", (o = "displayName") in g ? Object.defineProperty(g, o, {
				value: s,
				enumerable: !0,
				configurable: !0,
				writable: !0
			}) : g[o] = s;
			let m = new g(d.Z, {
				GAME_CLOUD_SYNC_START: function(t) {
					let {
						applicationId: e,
						branchId: n
					} = t, i = (0, f.Tu)(e, n);
					r.add(i)
				},
				GAME_CLOUD_SYNC_UPDATE: function(t) {
					let {
						state: e
					} = t;
					for (let t of Object.keys(e)) i[t] = e[t]
				},
				GAME_CLOUD_SYNC_COMPLETE: function(t) {
					let {
						applicationId: e,
						branchId: n
					} = t, l = (0, f.Tu)(e, n);
					return r.delete(l), i[l] = {
						type: O.TzF.DONE,
						timestamp: Date.now()
					}, !0
				},
				GAME_CLOUD_SYNC_CONFLICT: function(t) {
					let {
						applicationId: e,
						branchId: n,
						next: l,
						remote: a
					} = t, o = (0, f.Tu)(e, n);
					i[o] = {
						type: O.TzF.CONFLICT,
						next: l,
						remote: a
					}, r.delete(o)
				},
				GAME_CLOUD_SYNC_ERROR: function(t) {
					let {
						applicationId: e,
						branchId: n
					} = t, l = (0, f.Tu)(e, n);
					i[l] = {
						type: O.TzF.ERROR
					}, r.delete(l)
				},
				RUNNING_GAMES_CHANGE: function() {
					let t = p.ZP.getRunningDiscordApplicationIds();
					for (let e of l.filter(e => !t.includes(e))) {
						let t = h.Z.getActiveLibraryApplication(e);
						null != t && d.Z.wait(() => {
							try {
								u.Z(t.id, t.branchId)
							} catch (t) {}
						})
					}
					return l = t, !1
				}
			})
		},
		209492: function(t, e, n) {
			let i;
			n.d(e, {
				S: () => f,
				j: () => y
			}), n(415506);
			var r = n(544891),
				l = n(570140),
				a = n(710845),
				o = n(893988),
				s = n(314897),
				c = n(417363),
				d = n(780570),
				u = n(358085),
				p = n(998502),
				h = n(981631);
			async function f() {
				if (null == i) {
					if (!(u.isPlatformEmbedded && ((0, u.isMac)() || (0, u.isWindows)() && "arm64" !== p.ZP.architecture))) return void new a.Z("CloudSyncUtils").warn("CloudSync is not supported on this platform");
					await p.ZP.ensureModule("discord_cloudsync"), (i = new(p.ZP.getCloudSync())).on("state", t => l.Z.dispatch({
						type: "GAME_CLOUD_SYNC_UPDATE",
						state: t
					}))
				}
			}

			function y(t, e) {
				var n;
				let l = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
				if (!c.Z.supportsCloudSync(t, e)) return Promise.resolve({
					type: h.QCD.NONE
				});
				let a = function() {
						if (null == i) throw Error("Initialize cloud sync module before syncing.");
						return i
					}(),
					u = c.Z.getState(t, e);
				if (null == u) throw Error("No dispatch state for ".concat(t, ":").concat(e));
				let p = null != (n = u.storage) ? n : {},
					f = (0, d.Tu)(t, e),
					y = s.default.getToken();
				if (null == y) throw Error("Cannot use cloud sync when not authenticated.");
				let C = null != u.installPath ? (0, o.Z)(u.installPath) : null;
				if (null == C) throw Error("No install path for ".concat(t, ":").concat(e));
				let O = s.default.getId(),
					g = {
						forceHash: l,
						manifestPath: h.SRg.STORAGE_MANIFEST(C, O),
						roots: null != p.roots ? p.roots : [{
							id: h.SRg.ROOT_ID,
							paths: Object.keys(h.SRg.ROOT_PLATFORMS).map(t => ({
								platform: t,
								path: h.SRg.ROOT_STORAGE_PATH(C, O)
							})),
							patterns: h.SRg.ROOT_PATTERN
						}],
						storage: {
							baseURL: "".concat((0, r.K0)()).concat(h.ANM.APPLICATION_STORAGE(t, e)),
							token: y
						},
						replacements: {
							INSTALLDIR: h.SRg.INSTALL_DIR(C),
							USERID: O,
							BRANCHID: e
						}
					};
				return a.sync(f, g)
			}
		},
		702523: function(t, e, n) {
			n.d(e, {
				L: () => s
			});
			var i = n(255367);
			n(73800);
			var r = n(481060),
				l = n(51025),
				a = n(850840),
				o = n(391690);

			function s(t, e, s, c, d) {
				let u = o.Z.getInstallationPath(t.id, e),
					p = null != t.eulaId && !a.Z.hasAcceptedEULA(t.eulaId);
				null == u || p ? (0, r.ZDy)(async () => {
					let {
						default: r
					} = await n.e("226").then(n.bind(n, 472064));
					return n => {
						var l, a;
						return (0, i.jsx)(r, (l = function(t) {
							for (var e = 1; e < arguments.length; e++) {
								var n = null != arguments[e] ? arguments[e] : {},
									i = Object.keys(n);
								"function" == typeof Object.getOwnPropertySymbols && (i = i.concat(Object.getOwnPropertySymbols(n).filter(function(t) {
									return Object.getOwnPropertyDescriptor(n, t).enumerable
								}))), i.forEach(function(e) {
									var i;
									i = n[e], e in t ? Object.defineProperty(t, e, {
										value: i,
										enumerable: !0,
										configurable: !0,
										writable: !0
									}) : t[e] = i
								})
							}
							return t
						}({}, n), a = a = {
							applicationId: t.id,
							branchId: e,
							analyticsLocation: d
						}, Object.getOwnPropertyDescriptors ? Object.defineProperties(l, Object.getOwnPropertyDescriptors(a)) : (function(t, e) {
							var n = Object.keys(t);
							if (Object.getOwnPropertySymbols) {
								var i = Object.getOwnPropertySymbols(t);
								n.push.apply(n, i)
							}
							return n
						})(Object(a)).forEach(function(t) {
							Object.defineProperty(l, t, Object.getOwnPropertyDescriptor(a, t))
						}), l))
					}
				}) : (0, l.LO)({
					application: t,
					branchId: e,
					buildId: s,
					manifestIds: c,
					installationPath: u,
					analyticsLocation: d
				})
			}
		},
		346329: function(t, e, n) {
			n.r(e), n.d(e, {
				installApplication: () => p,
				performDefaultLibraryApplicationAction: () => y,
				playApplication: () => r.a,
				repairApplication: () => f,
				updateApplication: () => h
			});
			var i = n(51025),
				r = n(696748),
				l = n(812206),
				a = n(173747),
				o = n(7956),
				s = n(417363),
				c = n(941128),
				d = n(702523),
				u = n(981631);

			function p(t, e, n) {
				let i = l.Z.getApplication(t);
				if (null == i) return;
				let r = a.Z.getTargetBuildId(i.id, e),
					o = a.Z.getTargetManifests(i.id, e);
				null != r && null != o && null != d.L && (0, d.L)(i, e, r, o, n)
			}

			function h(t, e) {
				let n = l.Z.getApplication(t);
				if (null != n) return i.li(n, e, a.Z.getTargetBuildId(n.id, e), a.Z.getTargetManifests(n.id, e))
			}

			function f(t, e, n) {
				let r = l.Z.getApplication(t);
				if (null != r) return i.cG(r, e, n)
			}

			function y(t, e) {
				let n = (0, o.i)(t, s.Z, c.Z),
					{
						analyticsParams: i
					} = e;
				switch (n) {
					case u.apO.PLAY:
						return (0, r.a)(t.id, t, {
							analyticsParams: i
						});
					case u.apO.INSTALL:
						return p(t.id, t.branchId, i.source);
					case u.apO.UPDATE:
						return h(t.id, t.branchId)
				}
			}
		}
	}
]);
//# sourceMappingURL=c56a70982e3591f9.js.map