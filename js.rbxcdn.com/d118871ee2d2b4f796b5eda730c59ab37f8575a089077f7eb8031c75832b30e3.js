! function() {
	var t = {
			300: function(t, e, n) {
				var r = {
					"./2dThumbnailComponent.js": "435"
				};

				function o(t) {
					return n(i(t))
				}

				function i(t) {
					if (!n.o(r, t)) {
						var e = Error("Cannot find module '" + t + "'");
						throw e.code = "MODULE_NOT_FOUND", e
					}
					return r[t]
				}
				o.keys = function() {
					return Object.keys(r)
				}, o.resolve = i, t.exports = o, o.id = 300
			},
			465: function(t, e, n) {
				var r = {
					"./thumbnailConstants.js": "829"
				};

				function o(t) {
					return n(i(t))
				}

				function i(t) {
					if (!n.o(r, t)) {
						var e = Error("Cannot find module '" + t + "'");
						throw e.code = "MODULE_NOT_FOUND", e
					}
					return r[t]
				}
				o.keys = function() {
					return Object.keys(r)
				}, o.resolve = i, t.exports = o, o.id = 465
			},
			549: function(t, e, n) {
				var r = {
					"./2dThumbnailController.js": "618"
				};

				function o(t) {
					return n(i(t))
				}

				function i(t) {
					if (!n.o(r, t)) {
						var e = Error("Cannot find module '" + t + "'");
						throw e.code = "MODULE_NOT_FOUND", e
					}
					return r[t]
				}
				o.keys = function() {
					return Object.keys(r)
				}, o.resolve = i, t.exports = o, o.id = 549
			},
			25: function(t, e, n) {
				var r = {
					"./imageLoadDirective.js": "531",
					"./thumbnailErrorDirective.js": "892"
				};

				function o(t) {
					return n(i(t))
				}

				function i(t) {
					if (!n.o(r, t)) {
						var e = Error("Cannot find module '" + t + "'");
						throw e.code = "MODULE_NOT_FOUND", e
					}
					return r[t]
				}
				o.keys = function() {
					return Object.keys(r)
				}, o.resolve = i, t.exports = o, o.id = 25
			},
			242: function(t, e, n) {
				var r = {
					"./thumbnailService.js": "360"
				};

				function o(t) {
					return n(i(t))
				}

				function i(t) {
					if (!n.o(r, t)) {
						var e = Error("Cannot find module '" + t + "'");
						throw e.code = "MODULE_NOT_FOUND", e
					}
					return r[t]
				}
				o.keys = function() {
					return Object.keys(r)
				}, o.resolve = i, t.exports = o, o.id = 242
			},
			576: function(t, e, n) {
				var r = {
					"./components/templates/2dThumbnail.html": "799"
				};

				function o(t) {
					return n(i(t))
				}

				function i(t) {
					if (!n.o(r, t)) {
						var e = Error("Cannot find module '" + t + "'");
						throw e.code = "MODULE_NOT_FOUND", e
					}
					return r[t]
				}
				o.keys = function() {
					return Object.keys(r)
				}, o.resolve = i, t.exports = o, o.id = 576
			},
			799: function(t) {
				t.exports = '<span ng-class="$ctrl.getCssClasses()" class="thumbnail-2d-container" thumbnail-type="{{ $ctrl.thumbnailType }}" thumbnail-target-id="{{ $ctrl.thumbnailTargetId }}"> <img ng-if="$ctrl.thumbnailUrl && !$ctrl.isLazyLoadingEnabled()" ng-src="{{ $ctrl.thumbnailUrl }}" thumbnail-error="$ctrl.setThumbnailLoadFailed" ng-class="{\'loading\': $ctrl.thumbnailUrl && !isLoaded }" image-load alt="{{$ctrl.altName}}" title="{{$ctrl.altName}}"/> <img ng-if="$ctrl.thumbnailUrl && $ctrl.isLazyLoadingEnabled()" lazy-img="{{ $ctrl.thumbnailUrl }}" thumbnail-error="$ctrl.setThumbnailLoadFailed"/> </span> '
			},
			435: function(t, e, n) {
				"use strict";
				n.r(e);
				var r = n(208),
					o = {
						templateUrl: "2d-thumbnail",
						bindings: {
							thumbnailType: "<",
							thumbnailTargetId: "<",
							thumbnailOptions: "<?",
							onSuccess: "<",
							onFailure: "<",
							altName: "<"
						},
						controller: "2dThumbnailController"
					};
				r.Z.component("thumbnail2d", o), e.default = o
			},
			829: function(t, e, n) {
				"use strict";
				n.r(e);
				var r = n(685),
					o = n(208),
					i = {
						thumbnailTypes: r.Ij,
						thumbnailStates: r.Ab,
						formats: r.wR,
						avatarHeadshotSize: r.j7,
						gameIconSize: r.NJ,
						thumbnailAvatarsSize: r.qW
					};
				o.Z.constant("thumbnailConstants", i), e.default = i
			},
			618: function(t, e, n) {
				"use strict";
				n.r(e);
				var r = n(408),
					o = n(685),
					i = n(208);

				function a(t, e) {
					var n = this,
						i = "",
						a = o.Ab;
					n.getCssClasses = function() {
						return n.isThumbnailRequestSending ? "shimmer" : e.getCssClass(n.thumbnailState)
					}, n.setThumbnailLoadFailed = function() {}, n.isLazyLoadingEnabled = function() {
						return n.thumbnailOptions && n.thumbnailOptions.isLazyLoading
					}, n.updateImageLoadMetrics = function(t) {
						var e = t - n.startTime,
							o = n.performance.retryAttempts;
						(0, r.I)("ThumbnailLoadDurationWebapp", {
							Status: "Success",
							ThumbnailType: "".concat(n.thumbnailType, "_2d"),
							Version: n.version,
							Value: e.toString()
						}), o ? (0, r.I)("ThumbnailRetryWebapp", {
							ThumbnailType: "".concat(n.thumbnailType, "_2d"),
							Version: n.version,
							Value: o.toString()
						}).catch(function(t) {
							console.error(t)
						}) : (0, r.I)("ThumbnailNoRetrySuccessWebapp", {
							ThumbnailType: "".concat(n.thumbnailType, "_2d"),
							Version: n.version
						}).catch(function(t) {
							console.error(t)
						})
					};
					var u = function() {
						var t, r, u = "".concat(n.thumbnailType, ":").concat(n.thumbnailTargetId);
						if (n.startTime = new Date().getTime(), i !== u) {
							i = u, n.thumbnailState = a.loading;
							var c = (null === (t = n.thumbnailOptions) || void 0 === t ? void 0 : t.size) || o.lq,
								l = (null === (r = n.thumbnailOptions) || void 0 === r ? void 0 : r.format) || o.MB;
							n.isThumbnailRequestSending = !0, e.getThumbnailImage(n.thumbnailType, n.thumbnailTargetId, c, l).then(function(t) {
								var e = t.thumbnail,
									r = e.state,
									o = e.imageUrl,
									i = e.version,
									a = t.performance;
								n.thumbnailState = r, n.thumbnailUrl = o, n.performance = a, n.version = i, n.onSuccess && n.onSuccess(a)
							}).catch(function(t) {
								n.thumbnailState = a.error, n.onFailure && n.onFailure(t)
							}).finally(function() {
								n.isThumbnailRequestSending = !1
							})
						}
					};
					n.$onInit = u, n.$onChanges = u
				}
				a.$inject = ["$scope", "thumbnailService"], i.Z.controller("2dThumbnailController", a), e.default = a
			},
			531: function(t, e, n) {
				"use strict";

				function r() {
					return {
						restrict: "A",
						link: function(t, e) {
							e.bind("load", function() {
								t.$evalAsync(function() {
									t.$parent.$ctrl.updateImageLoadMetrics(new Date().getTime()), t.isLoaded = !0
								})
							})
						}
					}
				}
				n.r(e), n(208).Z.directive("imageLoad", r), e.default = r
			},
			892: function(t, e, n) {
				"use strict";

				function r() {
					return {
						scope: {
							thumbnailError: "<"
						},
						link: function(t, e) {
							e.on("error", t.thumbnailError)
						}
					}
				}
				n.r(e), n(208).Z.directive("thumbnailError", r), e.default = r
			},
			360: function(t, e, n) {
				"use strict";
				n.r(e);
				var r = n(951),
					o = n(208);

				function i(t) {
					return {
						getThumbnailImage: function(e, n, o, i) {
							return t(function(t, a) {
								r.getThumbnailImage(e, o, i, n).then(function(e) {
									t(e)
								}).catch(a)
							})
						},
						getCssClass: function(t) {
							return r.getCssClass(t)
						},
						reloadThumbnailImage: function(e, n, o) {
							return t(function(t, i) {
								r.reloadThumbnailImage(e, o, null, n).then(function(e) {
									t(e)
								}).catch(i)
							})
						}
					}
				}
				i.$inject = ["$q"], o.Z.factory("thumbnailService", i), e.default = i
			},
			208: function(t, e, n) {
				"use strict";
				var r = n(993),
					o = n.n(r)().module("thumbnails", ["robloxApp", "thumbnailsTemplates", "angularLazyImg"]);
				e.Z = o
			},
			908: function(t) {
				function e(t) {
					return (e = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
						return typeof t
					} : function(t) {
						return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
					})(t)
				}!
				/*!
					Copyright (c) 2018 Jed Watson.
					Licensed under the MIT License (MIT), see
					http://jedwatson.github.io/classnames
				*/
				function() {
					"use strict";
					var n = {}.hasOwnProperty;

					function r() {
						for (var t = "", i = 0; i < arguments.length; i++) {
							var a = arguments[i];
							a && (t = o(t, function(t) {
								if ("string" == typeof t || "number" == typeof t) return t;
								if ("object" !== e(t)) return "";
								if (Array.isArray(t)) return r.apply(null, t);
								if (t.toString !== Object.prototype.toString && !t.toString.toString().includes("[native code]")) return t.toString();
								var i = "";
								for (var a in t) n.call(t, a) && t[a] && (i = o(i, a));
								return i
							}(a)))
						}
						return t
					}

					function o(t, e) {
						return e ? t ? t + " " + e : t + e : t
					}
					t.exports ? (r.default = r, t.exports = r) : "function" == typeof define && "object" === e(define.amd) && define.amd ? define("classnames", [], function() {
						return r
					}) : window.classNames = r
				}()
			},
			685: function(t, e, n) {
				"use strict";
				n.d(e, {
					Ab: function() {
						return D
					},
					E2: function() {
						return U
					},
					Ij: function() {
						return O
					},
					KH: function() {
						return $
					},
					KO: function() {
						return _
					},
					MB: function() {
						return z
					},
					NJ: function() {
						return P
					},
					O7: function() {
						return F
					},
					ON: function() {
						return M
					},
					R1: function() {
						return R
					},
					Ul: function() {
						return C
					},
					W3: function() {
						return W
					},
					Wp: function() {
						return N
					},
					e$: function() {
						return j
					},
					eS: function() {
						return G
					},
					fA: function() {
						return J
					},
					hM: function() {
						return L
					},
					hc: function() {
						return V
					},
					j7: function() {
						return q
					},
					jM: function() {
						return H
					},
					kM: function() {
						return k
					},
					lJ: function() {
						return S
					},
					lq: function() {
						return A
					},
					qW: function() {
						return E
					},
					ql: function() {
						return K
					},
					sR: function() {
						return x
					},
					vI: function() {
						return w
					},
					wR: function() {
						return B
					},
					wq: function() {
						return Z
					}
				});
				var r, o, i, a, u, c, l, s, f, m, h, d, b, p, v, y, g, I = n(14),
					T = n.n(I)().thumbnailsApi,
					w = "".concat(T, "/v1/metadata"),
					S = ((r = {}).processFailure = "processFailure", r.unretriableFailure = "unretriableFailure", r.maxAttemptsReached = "maxAttemptsReached", r),
					C = ((o = {}).Avatar = "Avatar", o.AvatarHeadShot = "AvatarHeadShot", o.GameIcon = "GameIcon", o.BadgeIcon = "BadgeIcon", o.GameThumbnail = "GameThumbnail", o.GamePass = "GamePass", o.Asset = "Asset", o.BundleThumbnail = "BundleThumbnail", o.Outfit = "Outfit", o.GroupIcon = "GroupIcon", o.DeveloperProduct = "DeveloperProduct", o.PlaceIcon = "PlaceIcon", o.LookThumbnail = "Look", o.Screenshot = "Screenshot", o),
					O = ((i = {}).avatar = "Avatar", i.avatarHeadshot = "AvatarHeadshot", i.gameIcon = "GameIcon", i.gameThumbnail = "GameThumbnail", i.badgeIcon = "BadgeIcon", i.gamePassIcon = "GamePass", i.assetThumbnail = "Asset", i.bundleThumbnail = "BundleThumbnail", i.userOutfit = "Outfit", i.groupIcon = "GroupIcon", i.developerProductIcon = "DeveloperProduct", i.universeThumbnail = "UniverseThumbnail", i.universeThumbnails = "UniverseThumbnails", i.placeGameIcon = "PlaceGameIcon", i.lookThumbnail = "Look", i.screenshot = "Screenshot", i),
					j = 100,
					x = ((a = {})[a.maxRetryAttempts = 10] = "maxRetryAttempts", a[a.minCooldown = 1e3] = "minCooldown", a[a.maxCooldown = 3e4] = "maxCooldown", a),
					A = "150x150",
					z = "webp",
					P = ((u = {}).size50 = "50x50", u.size150 = "150x150", u.size256 = "256x256", u.size512 = "512x512", u),
					R = ((c = {}).size150 = "150x150", c),
					k = ((l = {}).size150 = "150x150", l.size420 = "420x420", l.size700 = "700x700", l.width256 = "256x144", l.width384 = "384x216", l.width480 = "480x270", l.width576 = "576x324", l.width768 = "768x432", l.width1320 = "1320x440", l.width660 = "660x220", l.width330 = "330x110", l.width720 = "720x228", l.width1440 = "1440x456", l),
					E = ((s = {}).size100 = "100x100", s.size352 = "352x352", s.size720 = "720x720", s),
					q = ((f = {}).size48 = "48x48", f.size60 = "60x60", f.size150 = "150x150", f),
					M = ((m = {}).size150 = "150x150", m.size420 = "420x420", m),
					U = ((h = {}).size150 = "150x150", h),
					N = ((d = {}).size150 = "150x150", d),
					$ = ((b = {}).width768 = "768x432", b.width576 = "576x324", b.width480 = "480x270", b.width384 = "384x216", b.width256 = "256x144", b),
					L = ((p = {}).width768 = "768x432", p.width576 = "576x324", p.width480 = "480x270", p.width384 = "384x216", p.width256 = "256x144", p),
					D = ((v = {}).error = "Error", v.complete = "Completed", v.inReview = "InReview", v.pending = "Pending", v.blocked = "Blocked", v),
					B = ((y = {}).png = "png", y.jpg = "jpg", y.jpeg = "jpeg", y.webp = "webp", y),
					F = ((g = {}).PlaceHolder = "PlaceHolder", g.AutoGenerated = "AutoGenerated", g.ForceAutoGenerated = "ForceAutoGenerated", g),
					G = "Thumbnail2DWeb",
					W = "LoadSuccess",
					_ = "RetryLoadSuccess",
					H = "RetryPerThumbnailType",
					V = "Sequence",
					J = "LoadFailure",
					Z = "Counter",
					K = {
						thumbnailMetricsSampleSize: 10,
						isWebappUseCacheEnabled: !1,
						webappCacheExpirationTimespan: "00:00:00",
						requestMinCooldown: 1e3,
						requestMaxCooldown: 3e3,
						requestMaxRetryAttempts: 5,
						requestBatchSize: 100,
						concurrentThumbnailRequestCount: 1
					}
			},
			408: function(t, e, n) {
				"use strict";
				n.d(e, {
					I: function() {
						return b
					}
				});
				var r, o, i = window.CoreUtilities,
					a = n(14),
					u = n.n(a)().thumbnailsApi;

				function c(t) {
					for (var e = 1; e < arguments.length; e++) {
						var n = null != arguments[e] ? arguments[e] : {},
							r = Object.keys(n);
						"function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(t) {
							return Object.getOwnPropertyDescriptor(n, t).enumerable
						}))), r.forEach(function(e) {
							var r;
							r = n[e], e in t ? Object.defineProperty(t, e, {
								value: r,
								enumerable: !0,
								configurable: !0,
								writable: !0
							}) : t[e] = r
						})
					}
					return t
				}
				var l = new i.BatchRequestFactory,
					s = 0,
					f = (o = document.getElementsByName("performance")[0]) ? {
						performanceMetricsBatchWaitTime: function(t) {
							if (!t) return 0;
							var e, n, r, o = t.split(":");
							return (3600 * parseInt(null !== (e = o[0]) && void 0 !== e ? e : "", 10) + 60 * parseInt(null !== (n = o[1]) && void 0 !== n ? n : "", 10) + parseInt(null !== (r = o[2]) && void 0 !== r ? r : "", 10)) * 1e3
						}(o.getAttribute("data-ui-performance-metrics-batch-wait-time")),
						performanceMetricsBatchSize: parseInt(null !== (r = o.getAttribute("data-ui-performance-metrics-batch-size")) && void 0 !== r ? r : "", 10)
					} : {},
					m = f.performanceMetricsBatchWaitTime,
					h = f.performanceMetricsBatchSize,
					d = l.createRequestProcessor(function(t) {
						var e = t.map(function(t) {
							return t.data.taskId, c({}, function(t, e) {
								if (null == t) return {};
								var n, r, o = function(t, e) {
									if (null == t) return {};
									var n, r, o = {},
										i = Object.keys(t);
									for (r = 0; r < i.length; r++) n = i[r], e.indexOf(n) >= 0 || (o[n] = t[n]);
									return o
								}(t, e);
								if (Object.getOwnPropertySymbols) {
									var i = Object.getOwnPropertySymbols(t);
									for (r = 0; r < i.length; r++) n = i[r], !(e.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(t, n) && (o[n] = t[n])
								}
								return o
							}(t.data, ["taskId"]))
						});
						return i.httpService.post({
							url: "".concat(u, "/v1/measurements"),
							retryable: !0,
							withCredentials: !0
						}, e).then(function() {
							var e = {};
							return t.forEach(function(t) {
								e[t.key] = !0
							}), e
						})
					}, function(t) {
						var e, n = t.taskId;
						return null !== (e = null == n ? void 0 : n.toString()) && void 0 !== e ? e : ""
					}, {
						getFailureCooldown: l.createExponentialBackoffCooldown(1e3, 3e3),
						maxRetryAttempts: 5,
						batchSize: null != h ? h : 100,
						processBatchWaitTime: null != m ? m : 1e3
					}),
					b = function(t, e) {
						var n = s;
						s += 1;
						var r = {
							metricName: t,
							jsonData: JSON.stringify(e)
						};
						return d.queueItem(c({
							taskId: n
						}, r))
					}
			},
			951: function(t, e, n) {
				"use strict";
				n.r(e), n.d(e, {
					getCssClass: function() {
						return l
					},
					getThumbnailImage: function() {
						return u
					},
					reloadThumbnailImage: function() {
						return c
					}
				});
				var r = n(824),
					o = n(155),
					i = n(685),
					a = function(t, e) {
						var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : i.wR.webp,
							a = arguments.length > 3 ? arguments[3] : void 0,
							u = arguments.length > 4 ? arguments[4] : void 0,
							c = arguments.length > 5 ? arguments[5] : void 0,
							l = arguments.length > 6 ? arguments[6] : void 0;
						if (!a && !u) return new Promise(function(t, e) {
							e(Error("TargetId or token can not be empty."))
						});
						if (!t) return new Promise(function(t, e) {
							e(Error("ThumbnailType can not be empty."))
						});
						null == n && (n = i.wR.webp);
						var s = n;
						(t === i.Ij.gameIcon || t === i.Ij.gameThumbnail || t === i.Ij.placeGameIcon || t === i.Ij.universeThumbnail) && (s = i.wR.webp);
						var f = {
								targetId: a,
								token: u,
								type: t,
								format: s,
								size: e,
								version: l
							},
							m = [i.Ij.universeThumbnails, i.Ij.universeThumbnail].includes(t) ? "universeThumbnailProcessor" : "thumbnail2dProcessor";
						return r.Sr.processThumbnailBatchRequest(f, function(e) {
							return t === i.Ij.universeThumbnail ? o.Az.handle(e, 1) : t === i.Ij.universeThumbnails ? o.Az.handle(e, 10) : o.hA.handle(e)
						}, m, c)
					},
					u = function(t, e) {
						var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : i.wR.webp,
							r = arguments.length > 3 ? arguments[3] : void 0,
							o = arguments.length > 4 ? arguments[4] : void 0;
						return a(t, e, n, r, o, !1)
					},
					c = function(t, e) {
						var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : i.wR.webp,
							r = arguments.length > 3 ? arguments[3] : void 0,
							o = arguments.length > 4 ? arguments[4] : void 0;
						return a(t, e, n, r, o, !0)
					},
					l = function(t) {
						return {
							"icon-broken": t === i.Ab.error,
							"icon-in-review": t === i.Ab.inReview,
							"icon-blocked": t === i.Ab.blocked,
							"icon-pending": t === i.Ab.pending
						}
					}
			},
			155: function(t, e, n) {
				"use strict";
				n.d(e, {
					hA: function() {
						return f
					},
					o3: function() {
						return s
					},
					Az: function() {
						return m
					}
				});
				var r = window.CoreRobloxUtilities,
					o = n(765),
					i = n(685);

				function a(t, e, n) {
					return e in t ? Object.defineProperty(t, e, {
						value: n,
						enumerable: !0,
						configurable: !0,
						writable: !0
					}) : t[e] = n, t
				}

				function u(t) {
					for (var e = 1; e < arguments.length; e++) {
						var n = null != arguments[e] ? arguments[e] : {},
							r = Object.keys(n);
						"function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(t) {
							return Object.getOwnPropertyDescriptor(n, t).enumerable
						}))), r.forEach(function(e) {
							a(t, e, n[e])
						})
					}
					return t
				}
				var c = r.dataStores.thumbnailsDataStore,
					l = r.dataStores.gameThumbnailsDataStore,
					s = function() {
						var t;

						function e(t, n, r, o, i) {
							(function(t, e) {
								if (!(t instanceof e)) throw TypeError("Cannot call a class as a function")
							})(this, e), a(this, "storeInstance", void 0), a(this, "keySetter", void 0), a(this, "keyGetter", void 0), a(this, "validator", void 0), a(this, "resultSetter", void 0), this.storeInstance = t, this.keySetter = n, this.keyGetter = r, this.validator = o, this.resultSetter = i
						}
						return t = [{
								key: "handle",
								value: function(t, e) {
									var n = this;
									return new Promise(function(r) {
										n.storeInstance(t, e).then(function(o) {
											var a, c, l = new Map,
												s = {};
											(null !== (c = null == o ? void 0 : null === (a = o.data) || void 0 === a ? void 0 : a.data) && void 0 !== c ? c : []).forEach(function(t) {
												l.set(n.keySetter(t), t)
											}), t.forEach(function(t) {
												var r = n.keyGetter(t);
												if (l.has(r)) {
													var o = l.get(r);
													o && n.validator(o) && (s[r] = n.resultSetter(o, e))
												} else {
													var a, c, f = {};
													f = e && e > 1 ? {
														thumbnails: []
													} : {
														thumbnail: {
															targetId: r,
															state: i.Ab.error
														}
													}, s[r] = (a = u({}, f), c = c = {
														errorcode: 3,
														errorMessage: "id doesn't exist"
													}, Object.getOwnPropertyDescriptors ? Object.defineProperties(a, Object.getOwnPropertyDescriptors(c)) : (function(t, e) {
														var n = Object.keys(t);
														if (Object.getOwnPropertySymbols) {
															var r = Object.getOwnPropertySymbols(t);
															n.push.apply(n, r)
														}
														return n
													})(Object(c)).forEach(function(t) {
														Object.defineProperty(a, t, Object.getOwnPropertyDescriptor(c, t))
													}), a)
												}
											}), r(s)
										}).catch(function() {
											r({})
										})
									})
								}
							}],
							function(t, e) {
								for (var n = 0; n < e.length; n++) {
									var r = e[n];
									r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r)
								}
							}(e.prototype, t), e
					}(),
					f = new s(function(t) {
						var e = t.map(function(t) {
							var e = t.data.type,
								n = t.key,
								r = function(t, e) {
									if (null == t) return {};
									var n, r, o = function(t, e) {
										if (null == t) return {};
										var n, r, o = {},
											i = Object.keys(t);
										for (r = 0; r < i.length; r++) n = i[r], e.indexOf(n) >= 0 || (o[n] = t[n]);
										return o
									}(t, e);
									if (Object.getOwnPropertySymbols) {
										var i = Object.getOwnPropertySymbols(t);
										for (r = 0; r < i.length; r++) n = i[r], !(e.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(t, n) && (o[n] = t[n])
									}
									return o
								}(t.data, ["type"]);
							return u({
								requestId: n,
								type: (0, o.tY)(e)
							}, r)
						});
						return new Promise(function(t, n) {
							c.getBatchThumbnails(e).then(t).catch(n)
						})
					}, function(t) {
						var e;
						return null !== (e = t.requestId) && void 0 !== e ? e : ""
					}, function(t) {
						return t.key
					}, function(t) {
						return t.state !== i.Ab.pending
					}, function(t) {
						return {
							thumbnail: t
						}
					}),
					m = new s(function(t, e) {
						return new Promise(function(n, r) {
							var o, i, a;
							l.getAllUniverseThumbnails(t.map(function(t) {
								var e = t.data.targetId;
								return null != e ? e : 0
							}), null === (o = t[0]) || void 0 === o ? void 0 : o.data.size, null === (i = t[0]) || void 0 === i ? void 0 : i.data.format, null === (a = t[0]) || void 0 === a ? void 0 : a.data.isCircular, e).then(n).catch(r)
						})
					}, function(t) {
						return t.universeId.toString()
					}, function(t) {
						return t.data.targetId ? t.data.targetId.toString() : ""
					}, function(t) {
						return !t.error
					}, function(t, e) {
						return 1 === e ? {
							thumbnail: t.thumbnails[0]
						} : {
							thumbnails: t.thumbnails
						}
					})
			},
			824: function(t, e, n) {
				"use strict";
				n.d(e, {
					Sr: function() {
						return f
					},
					xs: function() {
						return l
					}
				});
				var r = window.Roblox["core-scripts"].util.batchRequest,
					o = n.n(r),
					i = n(408),
					a = n(685),
					u = n(765);

				function c(t, e, n) {
					return e in t ? Object.defineProperty(t, e, {
						value: n,
						enumerable: !0,
						configurable: !0,
						writable: !0
					}) : t[e] = n, t
				}
				var l = function() {
					var t;

					function e(t, n) {
						(function(t, e) {
							if (!(t instanceof e)) throw TypeError("Cannot call a class as a function")
						})(this, e), c(this, "batchRequestFactory", void 0), c(this, "thumbnailProcessorKeySerializer", void 0), c(this, "thumbnailItemIdSerializer", void 0), c(this, "thumbnailRequesters", {}), this.batchRequestFactory = new(o()), this.thumbnailItemIdSerializer = t, this.thumbnailProcessorKeySerializer = n
					}
					return t = [{
							key: "getThumbnailRequesterProperties",
							value: function(t) {
								return t ? {
									getFailureCooldown: this.batchRequestFactory.createExponentialBackoffCooldown(t.requestMinCooldown, t.requestMaxCooldown),
									maxRetryAttempts: t.requestMaxRetryAttempts,
									batchSize: t.requestBatchSize,
									concurrentRequestCount: t.concurrentThumbnailRequestCount,
									debugMode: !0
								} : {
									getFailureCooldown: this.batchRequestFactory.createExponentialBackoffCooldown(a.sR.minCooldown, a.sR.maxCooldown),
									maxRetryAttempts: a.sR.maxRetryAttempts,
									batchSize: a.e$,
									debugMode: !0
								}
							}
						}, {
							key: "getThumbnailRequester",
							value: function(t, e, n) {
								var r = this,
									o = this.thumbnailRequesters[e];
								if (o) return o;
								var i = this.batchRequestFactory.createRequestProcessor(t, function(t) {
									return r.thumbnailItemIdSerializer(t)
								}, this.getThumbnailRequesterProperties(n));
								return this.thumbnailRequesters[e] = i, i
							}
						}, {
							key: "processThumbnailBatchRequest",
							value: function(t, e) {
								var n, r, o, c, l, s, f, m, h, d = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : this.thumbnailProcessorKeySerializer(t),
									b = arguments.length > 3 ? arguments[3] : void 0,
									p = t.type,
									v = void 0 === p ? "custom" : p,
									y = (h = null === (n = document.getElementsByName("thumbnail-meta-data")[0]) || void 0 === n ? void 0 : n.dataset) ? {
										thumbnailMetricsSampleSize: parseInt(null !== (r = h.thumbnailMetricsSampleSize) && void 0 !== r ? r : "", 10),
										isWebappUseCacheEnabled: "True" === h.isWebappCacheEnabled,
										webappCacheExpirationTimespan: null !== (o = h.webappCacheExpirationsTimespan) && void 0 !== o ? o : "",
										requestMinCooldown: parseInt(null !== (c = h.requestMinCooldown) && void 0 !== c ? c : "", 10),
										requestMaxCooldown: parseInt(null !== (l = h.requestMaxCooldown) && void 0 !== l ? l : "", 10),
										requestMaxRetryAttempts: parseInt(null !== (s = h.requestMaxRetryAttempts) && void 0 !== s ? s : "", 10),
										requestBatchSize: parseInt(null !== (f = h.requestBatchSize) && void 0 !== f ? f : "", 10),
										concurrentThumbnailRequestCount: parseInt(null !== (m = h.concurrentThumbnailRequestCount) && void 0 !== m ? m : "", 10)
									} : a.ql,
									g = this.getThumbnailRequester(e, d, y);
								b && g.invalidateItem(t);
								var I = (0, u.ET)(y);
								return g.queueItem(t, void 0, I).then(function(t) {
									if (t.performance && (0, u.IL)(y)) {
										var e = t.thumbnails,
											n = t.thumbnail,
											r = function(t) {
												(0, i.I)("ThumbnailStatusCountWebapp", {
													ThumbnailType: "".concat(v, "_2d"),
													Status: t.state,
													Version: t.version
												}).catch(function(t) {
													console.error(t)
												})
											};
										n && r(n), e && e.forEach(r)
									}
									return t
								}).catch(function(t) {
									return console.error({
										error: t
									}), (0, u.IL)(y) && t === a.lJ.maxAttemptsReached && (0, i.I)("ThumbnailTimeoutWebapp", {
										ThumbnailType: "".concat(v, "_2d")
									}).catch(function(t) {
										console.error(t)
									}), Promise.reject(t)
								})
							}
						}],
						function(t, e) {
							for (var n = 0; n < e.length; n++) {
								var r = e[n];
								r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r)
							}
						}(e.prototype, t), e
				}();

				function s(t) {
					var e = t.targetId,
						n = t.token,
						r = t.type,
						o = t.size,
						i = t.format,
						a = t.isCircular,
						u = t.version;
					return "".concat((void 0 === e ? 0 : e).toString(), ":").concat(n, ":").concat(r, ":").concat(o, ":").concat(i, ":").concat(a ? "circular" : "regular", ":").concat(void 0 === u ? 0 : u)
				}
				var f = new l(function(t) {
					var e = t.type,
						n = t.targetId;
					return e === a.Ij.universeThumbnail || e === a.Ij.universeThumbnails ? (void 0 === n ? 0 : n).toString() : s(t)
				}, s);
				new l(function(t) {
					return t.key
				}, function() {
					return "customThumbnailRequester"
				})
			},
			765: function(t, e, n) {
				"use strict";
				n.d(e, {
					ET: function() {
						return l
					},
					IL: function() {
						return s
					},
					tY: function() {
						return c
					}
				});
				var r, o = n(685);

				function i(t, e) {
					(null == e || e > t.length) && (e = t.length);
					for (var n = 0, r = Array(e); n < e; n++) r[n] = t[n];
					return r
				}

				function a(t, e, n) {
					return e in t ? Object.defineProperty(t, e, {
						value: n,
						enumerable: !0,
						configurable: !0,
						writable: !0
					}) : t[e] = n, t
				}
				var u = (a(r = {}, o.Ij.avatar, o.Ul.Avatar), a(r, o.Ij.avatarHeadshot, o.Ul.AvatarHeadShot), a(r, o.Ij.gameIcon, o.Ul.GameIcon), a(r, o.Ij.badgeIcon, o.Ul.BadgeIcon), a(r, o.Ij.gamePassIcon, o.Ul.GamePass), a(r, o.Ij.assetThumbnail, o.Ul.Asset), a(r, o.Ij.bundleThumbnail, o.Ul.BundleThumbnail), a(r, o.Ij.userOutfit, o.Ul.Outfit), a(r, o.Ij.groupIcon, o.Ul.GroupIcon), a(r, o.Ij.placeGameIcon, o.Ul.PlaceIcon), a(r, o.Ij.developerProductIcon, o.Ul.DeveloperProduct), a(r, o.Ij.gameThumbnail, o.Ul.GameThumbnail), a(r, o.Ij.lookThumbnail, o.Ul.LookThumbnail), a(r, o.Ij.screenshot, o.Ul.Screenshot), r);

				function c(t) {
					return u[t]
				}

				function l(t) {
					if (t) {
						var e, n, r, o, a;
						return {
							useCache: t.isWebappUseCacheEnabled,
							expirationWindowMS: (r = (n = function(t) {
								if (Array.isArray(t)) return t
							}(e = t.webappCacheExpirationTimespan.split(":")) || function(t, e) {
								var n, r, o = null == t ? null : "undefined" != typeof Symbol && t[Symbol.iterator] || t["@@iterator"];
								if (null != o) {
									var i = [],
										a = !0,
										u = !1;
									try {
										for (o = o.call(t); !(a = (n = o.next()).done) && (i.push(n.value), i.length !== e); a = !0);
									} catch (t) {
										u = !0, r = t
									} finally {
										try {
											a || null == o.return || o.return()
										} finally {
											if (u) throw r
										}
									}
									return i
								}
							}(e, 3) || function(t, e) {
								if (t) {
									if ("string" == typeof t) return i(t, 3);
									var n = Object.prototype.toString.call(t).slice(8, -1);
									if ("Object" === n && t.constructor && (n = t.constructor.name), "Map" === n || "Set" === n) return Array.from(n);
									if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return i(t, e)
								}
							}(e, 3) || function() {
								throw TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
							}())[0], o = n[1], a = n[2], void 0 === r || void 0 === o || void 0 === a ? NaN : (3600 * parseInt(r, 10) + 60 * parseInt(o, 10) + parseInt(a, 10)) * 1e3)
						}
					}
				}

				function s(t) {
					return !t || Math.floor(100 * Math.random()) <= t.thumbnailMetricsSampleSize
				}
			},
			354: function(t, e, n) {
				"use strict";
				t.exports = {}
			},
			993: function(t) {
				"use strict";
				t.exports = window.angular
			},
			14: function(t) {
				"use strict";
				t.exports = window.Roblox["core-scripts"].environmentUrls
			}
		},
		e = {};

	function n(r) {
		var o = e[r];
		if (void 0 !== o) return o.exports;
		var i = e[r] = {
			exports: {}
		};
		return t[r](i, i.exports, n), i.exports
	}
	n.m = t, n.n = function(t) {
			var e = t && t.__esModule ? function() {
				return t.default
			} : function() {
				return t
			};
			return n.d(e, {
				a: e
			}), e
		}, n.d = function(t, e) {
			for (var r in e) n.o(e, r) && !n.o(t, r) && Object.defineProperty(t, r, {
				enumerable: !0,
				get: e[r]
			})
		}, n.k = function(t) {
			return "" + t + ".css"
		}, n.g = function() {
			if ("object" == typeof globalThis) return globalThis;
			try {
				return this || Function("return this")()
			} catch (t) {
				if ("object" == typeof window) return window
			}
		}(), n.o = function(t, e) {
			return Object.prototype.hasOwnProperty.call(t, e)
		}, n.r = function(t) {
			"undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, {
				value: "Module"
			}), Object.defineProperty(t, "__esModule", {
				value: !0
			})
		}, n.rv = function() {
			return "1.2.8"
		},
		function() {
			n.g.importScripts && (t = n.g.location + "");
			var t, e = n.g.document;
			if (!t && e && (e.currentScript && "SCRIPT" === e.currentScript.tagName.toUpperCase() && (t = e.currentScript.src), !t)) {
				var r = e.getElementsByTagName("script");
				if (r.length)
					for (var o = r.length - 1; o > -1 && (!t || !/^http(s?):/.test(t));) t = r[o--].src
			}
			if (!t) throw Error("Automatic publicPath is not supported in this browser");
			t = t.replace(/^blob:/, "").replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/"), n.p = t
		}(), n.ruid = "bundler=rspack@1.2.8",
		function() {
			"use strict";
			var t, e, r = {};
			n.r(r), n.d(r, {
				BatchRequestError: function() {
					return g.lJ
				},
				DEFAULT_META_DATA: function() {
					return g.ql
				},
				DefaultBatchSize: function() {
					return g.e$
				},
				DefaultThumbnailFormat: function() {
					return g.MB
				},
				DefaultThumbnailSize: function() {
					return g.lq
				},
				FeatureName: function() {
					return g.eS
				},
				LoadFailureMetricsType: function() {
					return g.wq
				},
				LoadFailureName: function() {
					return g.fA
				},
				LoadRetrySuccessName: function() {
					return g.KO
				},
				LoadSuccessMetricsType: function() {
					return g.hc
				},
				LoadSuccessName: function() {
					return g.W3
				},
				RetryPerThumbnailType: function() {
					return g.jM
				},
				ReturnPolicy: function() {
					return g.O7
				},
				RobloxThumbnailsApisModelsThumbnailBatchRequestTypeEnum: function() {
					return g.Ul
				},
				Thumbnail2d: function() {
					return x
				},
				Thumbnail2dCarouselContainer: function() {
					return R
				},
				ThumbnailAssetsSize: function() {
					return g.kM
				},
				ThumbnailAvatarHeadshotSize: function() {
					return g.j7
				},
				ThumbnailAvatarsSize: function() {
					return g.qW
				},
				ThumbnailBadgeIconSize: function() {
					return g.E2
				},
				ThumbnailCooldown: function() {
					return g.sR
				},
				ThumbnailDeveloperProductIconSize: function() {
					return g.Wp
				},
				ThumbnailFormat: function() {
					return g.wR
				},
				ThumbnailGameIconSize: function() {
					return g.NJ
				},
				ThumbnailGamePassIconSize: function() {
					return g.R1
				},
				ThumbnailGameThumbnailSize: function() {
					return g.KH
				},
				ThumbnailGroupIconSize: function() {
					return g.ON
				},
				ThumbnailMetadataUrl: function() {
					return g.vI
				},
				ThumbnailStates: function() {
					return g.Ab
				},
				ThumbnailTypes: function() {
					return g.Ij
				},
				ThumbnailUniverseThumbnailSize: function() {
					return g.hM
				},
				thumbnailService: function() {
					return p
				}
			});
			var o = n(993),
				i = n.n(o);

			function a(t, e) {
				if (t) {
					if ("string" == typeof t) return u(t, e);
					var n = ({}).toString.call(t).slice(8, -1);
					return "Object" === n && t.constructor && (n = t.constructor.name), "Map" === n || "Set" === n ? Array.from(t) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? u(t, e) : void 0
				}
			}

			function u(t, e) {
				(null == e || e > t.length) && (e = t.length);
				for (var n = 0, r = Array(e); n < e; n++) r[n] = t[n];
				return r
			}
			var c = function(t) {
					t.keys().forEach(t)
				},
				l = window.ReactJSX,
				s = window.React,
				f = n(908),
				m = n.n(f),
				h = window.PropTypes,
				d = n.n(h),
				b = n(408),
				p = n(951),
				v = n(824),
				y = n(155),
				g = n(685);

			function I(t, e) {
				(null == e || e > t.length) && (e = t.length);
				for (var n = 0, r = Array(e); n < e; n++) r[n] = t[n];
				return r
			}

			function T(t) {
				var e, n = t.onLoad,
					r = t.errorIconClass,
					o = t.thumbnailUrl,
					i = t.imgClassName,
					a = t.containerClass,
					u = t.altName,
					c = m()("thumbnail-2d-container", r, a),
					f = function(t) {
						if (Array.isArray(t)) return t
					}(e = (0, s.useState)(m()(i, "loading"))) || function(t, e) {
						var n, r, o = null == t ? null : "undefined" != typeof Symbol && t[Symbol.iterator] || t["@@iterator"];
						if (null != o) {
							var i = [],
								a = !0,
								u = !1;
							try {
								for (o = o.call(t); !(a = (n = o.next()).done) && (i.push(n.value), i.length !== e); a = !0);
							} catch (t) {
								u = !0, r = t
							} finally {
								try {
									a || null == o.return || o.return()
								} finally {
									if (u) throw r
								}
							}
							return i
						}
					}(e, 2) || function(t, e) {
						if (t) {
							if ("string" == typeof t) return I(t, 2);
							var n = Object.prototype.toString.call(t).slice(8, -1);
							if ("Object" === n && t.constructor && (n = t.constructor.name), "Map" === n || "Set" === n) return Array.from(n);
							if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return I(t, e)
						}
					}(e, 2) || function() {
						throw TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
					}(),
					h = f[0],
					d = f[1];
				return (0, s.useEffect)(function() {
					null === o && d(m()(i, "loading"))
				}, [o, i]), (0, l.jsx)("span", {
					className: c,
					children: o && (0, l.jsx)("img", {
						className: h,
						src: o,
						alt: u,
						title: u,
						onLoad: function() {
							n(), d(i)
						}
					})
				})
			}

			function w(t, e) {
				(null == e || e > t.length) && (e = t.length);
				for (var n = 0, r = Array(e); n < e; n++) r[n] = t[n];
				return r
			}

			function S(t) {
				for (var e = 1; e < arguments.length; e++) {
					var n = null != arguments[e] ? arguments[e] : {},
						r = Object.keys(n);
					"function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(t) {
						return Object.getOwnPropertyDescriptor(n, t).enumerable
					}))), r.forEach(function(e) {
						var r;
						r = n[e], e in t ? Object.defineProperty(t, e, {
							value: r,
							enumerable: !0,
							configurable: !0,
							writable: !0
						}) : t[e] = r
					})
				}
				return t
			}

			function C(t, e) {
				return function(t) {
					if (Array.isArray(t)) return t
				}(t) || function(t, e) {
					var n, r, o = null == t ? null : "undefined" != typeof Symbol && t[Symbol.iterator] || t["@@iterator"];
					if (null != o) {
						var i = [],
							a = !0,
							u = !1;
						try {
							for (o = o.call(t); !(a = (n = o.next()).done) && (i.push(n.value), !e || i.length !== e); a = !0);
						} catch (t) {
							u = !0, r = t
						} finally {
							try {
								a || null == o.return || o.return()
							} finally {
								if (u) throw r
							}
						}
						return i
					}
				}(t, e) || function(t, e) {
					if (t) {
						if ("string" == typeof t) return w(t, e);
						var n = Object.prototype.toString.call(t).slice(8, -1);
						if ("Object" === n && t.constructor && (n = t.constructor.name), "Map" === n || "Set" === n) return Array.from(n);
						if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return w(t, e)
					}
				}(t, e) || function() {
					throw TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
				}()
			}
			T.defaultProps = {
				errorIconClass: "",
				thumbnailUrl: "",
				imgClassName: "",
				containerClass: "",
				altName: "",
				onLoad: function() {}
			}, T.propTypes = {
				errorIconClass: d().string,
				thumbnailUrl: d().string,
				imgClassName: d().string,
				containerClass: d().string,
				altName: d().string,
				onLoad: d().func
			};
			var O = new v.xs(function(t) {
				return t.targetId
			}, function() {
				return "customThumbnailRequester"
			});

			function j(t) {
				var e = t.type,
					n = t.targetId,
					r = t.token,
					o = t.size,
					i = t.imgClassName,
					a = t.containerClass,
					u = t.format,
					c = t.altName,
					f = t.onLoad,
					h = t.getThumbnail,
					d = t.version,
					v = C((0, s.useState)(new Date().getTime()), 1)[0],
					I = C((0, s.useState)(null), 2),
					w = I[0],
					j = I[1],
					x = C((0, s.useState)(null), 2),
					A = x[0],
					z = x[1],
					P = m()(p.getCssClass(w)),
					R = C((0, s.useState)("shimmer"), 2),
					k = R[0],
					E = R[1],
					q = C((0, s.useState)(null), 2),
					M = q[0],
					U = q[1],
					N = (0, s.useMemo)(function() {
						return new y.o3(function() {
							return new Promise(function(t, e) {
								h().then(function(e) {
									var r, o;
									t({
										data: {
											data: [(r = S({}, e.data), o = o = {
												targetId: n
											}, Object.getOwnPropertyDescriptors ? Object.defineProperties(r, Object.getOwnPropertyDescriptors(o)) : (function(t, e) {
												var n = Object.keys(t);
												if (Object.getOwnPropertySymbols) {
													var r = Object.getOwnPropertySymbols(t);
													n.push.apply(n, r)
												}
												return n
											})(Object(o)).forEach(function(t) {
												Object.defineProperty(r, t, Object.getOwnPropertyDescriptor(o, t))
											}), r)]
										}
									})
								}).catch(e)
							})
						}, function(t) {
							return t.targetId
						}, function(t) {
							return t.key
						}, function(t) {
							return t.state !== g.Ab.pending
						}, function(t) {
							return {
								thumbnail: t
							}
						})
					}, [n, h]),
					$ = (0, s.useCallback)(function() {
						if (M) {
							var t = new Date().getTime() - v,
								n = M.retryAttempts;
							(0, b.I)("ThumbnailLoadDurationWebapp", {
								Status: "Success",
								ThumbnailType: "".concat(e, "_2d"),
								Value: t.toString()
							}).catch(function(t) {
								console.error(t)
							}), n ? (0, b.I)("ThumbnailRetryWebapp", {
								ThumbnailType: "".concat(e, "_2d"),
								Value: n.toString()
							}).catch(function(t) {
								console.error(t)
							}) : (0, b.I)("ThumbnailNoRetrySuccessWebapp", {
								ThumbnailType: "".concat(e, "_2d")
							}).catch(function(t) {
								console.error(t)
							})
						}
						f && f()
					}, [M]);
				return (0, s.useEffect)(function() {
					E("shimmer"), j(null), z(null);
					var t = !1,
						i = p.getThumbnailImage(e, o, u, n, r);
					return h && (i = O.processThumbnailBatchRequest({
							targetId: n,
							type: e
						}, function(t) {
							return N.handle(t)
						}, n)), i.then(function(e) {
							var n = e.thumbnail,
								r = n.state,
								o = n.imageUrl,
								i = e.performance;
							!t && (j(r), z(o), E(""), i && U(S({}, i)))
						}).catch(function(e) {
							console.error(e), t || E("")
						}),
						function() {
							t = !0
						}
				}, [e, n, r, o, i, h, d]), (0, l.jsx)(T, {
					thumbnailUrl: A,
					errorIconClass: P,
					imgClassName: i,
					altName: c,
					onLoad: $,
					containerClass: m()(k, a)
				})
			}
			j.defaultProps = {
				targetId: 0,
				token: "",
				size: "150x150",
				imgClassName: "",
				containerClass: "",
				format: "webp",
				altName: "",
				onLoad: function() {},
				getThumbnail: null,
				version: ""
			}, j.propTypes = {
				type: d().string.isRequired,
				targetId: d().number,
				token: d().string,
				size: d().string,
				format: d().string,
				imgClassName: d().string,
				containerClass: d().string,
				altName: d().string,
				onLoad: d().func,
				getThumbnail: d().func,
				version: d().string
			};
			var x = j;

			function A(t, e) {
				(null == e || e > t.length) && (e = t.length);
				for (var n = 0, r = Array(e); n < e; n++) r[n] = t[n];
				return r
			}

			function z(t, e) {
				return function(t) {
					if (Array.isArray(t)) return t
				}(t) || function(t, e) {
					var n, r, o = null == t ? null : "undefined" != typeof Symbol && t[Symbol.iterator] || t["@@iterator"];
					if (null != o) {
						var i = [],
							a = !0,
							u = !1;
						try {
							for (o = o.call(t); !(a = (n = o.next()).done) && (i.push(n.value), !e || i.length !== e); a = !0);
						} catch (t) {
							u = !0, r = t
						} finally {
							try {
								a || null == o.return || o.return()
							} finally {
								if (u) throw r
							}
						}
						return i
					}
				}(t, e) || function(t, e) {
					if (t) {
						if ("string" == typeof t) return A(t, e);
						var n = Object.prototype.toString.call(t).slice(8, -1);
						if ("Object" === n && t.constructor && (n = t.constructor.name), "Map" === n || "Set" === n) return Array.from(n);
						if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return A(t, e)
					}
				}(t, e) || function() {
					throw TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
				}()
			}

			function P(t) {
				var e = t.type,
					n = t.targetId,
					r = t.size,
					o = t.imgClassName,
					i = t.containerClass,
					a = t.format,
					u = t.altName,
					c = z((0, s.useState)(null), 2),
					f = c[0],
					h = c[1],
					d = z((0, s.useState)(null), 2),
					b = d[0],
					v = d[1],
					y = z((0, s.useState)(null), 2),
					g = y[0],
					I = y[1],
					w = z((0, s.useState)("shimmer"), 2),
					S = w[0],
					C = w[1],
					O = z((0, s.useState)(0), 2),
					j = O[0],
					x = O[1],
					A = function() {
						x(j >= f.length - 1 ? 0 : j + 1)
					};
				return (0, s.useEffect)(function() {
					var t;
					if (f) {
						var e = f[j];
						v(e.state), I(e.imageUrl), C(""), t = setInterval(function() {
							return A()
						}, 4e3)
					}
					return function() {
						clearInterval(t)
					}
				}, [f, j]), (0, s.useEffect)(function() {
					var t = !1;
					return p.getThumbnailImage(e, r, a, n).then(function(e) {
							t || h(e.thumbnails)
						}).catch(function() {
							t || C("")
						}),
						function() {
							t = !0
						}
				}, [e, n, r, o, a]), (0, l.jsx)(T, {
					thumbnailUrl: g,
					errorIconClass: m()(p.getCssClass(b)),
					imgClassName: o,
					altName: u,
					containerClass: m()(S, i)
				})
			}
			P.defaultProps = {
				size: "576x324",
				imgClassName: "",
				containerClass: "",
				format: "webp",
				altName: ""
			}, P.propTypes = {
				type: d().string.isRequired,
				targetId: d().number.isRequired,
				size: d().string,
				format: d().string,
				imgClassName: d().string,
				containerClass: d().string,
				altName: d().string
			};
			var R = P;
			n(354), i().module("angularLazyImg", []).factory("LazyImgMagic", ["$window", "$rootScope", "lazyImgConfig", "lazyImgHelpers", function(t, e, n, r) {
					var o, a, u, c, l, s, f, m;

					function h() {
						for (var t = u.length - 1; t >= 0; t--) {
							var n = u[t];
							n && r.isElementInView(n.$elem[0], l.offset, o) && (function(t) {
								var n = new Image;
								n.onerror = function() {
									l.errorClass && t.$elem.addClass(l.errorClass), e.$emit("lazyImg:error", t), l.onError(t)
								}, n.onload = function() {
									var n, r;
									n = t.$elem, r = t.src, "img" === n[0].nodeName.toLowerCase() ? n[0].src = r : n.css("background-image", 'url("'.concat(r, '")')), t.$elem.removeClass(l.loadingClass), l.successClass && t.$elem.addClass(l.successClass), e.$emit("lazyImg:success", t), l.onSuccess(t)
								}, n.src = t.src
							}(n), u.splice(t, 1))
						}
						0 === u.length && p()
					}

					function d(t) {
						m.forEach(function(e) {
							e[t]("scroll", s), e[t]("touchmove", s)
						}), a[t]("resize", s), a[t]("resize", f)
					}

					function b() {
						c = !0, setTimeout(function() {
							h(), d("on")
						}, 1)
					}

					function p() {
						c = !1, d("off")
					}

					function v(t) {
						t.addClass(l.loadingClass), this.$elem = t
					}
					return u = [], c = !1, l = n.getOptions(), a = i().element(t), o = r.getWinDimensions(), f = r.throttle(function() {
						o = r.getWinDimensions()
					}, 60), m = [l.container || a], s = r.throttle(h, 30), v.prototype.setSource = function(t) {
						this.src = t, u.unshift(this), c || b()
					}, v.prototype.removeImage = function() {
						var t; - 1 !== (t = u.indexOf(this)) && u.splice(t, 1), 0 === u.length && p()
					}, v.prototype.checkImages = function() {
						h()
					}, v.addContainer = function(t) {
						p(), m.push(t), b()
					}, v.removeContainer = function(t) {
						p(), m.splice(m.indexOf(t), 1), b()
					}, v
				}]).provider("lazyImgConfig", function() {
					this.options = {
						offset: 100,
						errorClass: null,
						successClass: null,
						onError: function() {},
						onSuccess: function() {},
						loadingClass: "icon-placeholder-game"
					}, this.$get = function() {
						var t = this.options;
						return {
							getOptions: function() {
								return t
							}
						}
					}, this.setOptions = function(t) {
						i().extend(this.options, t)
					}
				}).factory("lazyImgHelpers", ["$window", function(t) {
					return {
						isElementInView: function(t, e, n) {
							var r = t.getBoundingClientRect(),
								o = n.height + e;
							return t.offsetParent && r.left >= 0 && r.right <= n.width + e && (r.top >= 0 && r.top <= o || r.bottom <= o && r.bottom >= 0 - e)
						},
						getWinDimensions: function() {
							return {
								height: t.innerHeight,
								width: t.innerWidth
							}
						},
						throttle: function(t, e, n) {
							var r, o;
							return function() {
								var i = n || this,
									a = +new Date,
									u = arguments;
								r && a < r + e ? (clearTimeout(o), o = setTimeout(function() {
									r = a, t.apply(i, u)
								}, e)) : (r = a, t.apply(i, u))
							}
						}
					}
				}]).directive("lazyImg", ["$rootScope", "LazyImgMagic", function(t, e) {
					return {
						link: function(n, r, o) {
							var i = new e(r);
							o.$observe("lazyImg", function(t) {
								t && i.setSource(t)
							}), n.$on("$destroy", function() {
								i.removeImage()
							}), t.$on("lazyImg.runCheck", function() {
								i.checkImages()
							}), t.$on("lazyImg:refresh", function() {
								i.checkImages()
							})
						},
						restrict: "A"
					}
				}]).directive("lazyImgContainer", ["LazyImgMagic", function(t) {
					return {
						link: function(e, n) {
							t.addContainer(n), e.$on("$destroy", function() {
								t.removeContainer(n)
							})
						},
						restrict: "A"
					}
				}]), n(208),
				function(t, e) {
					var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : window;
					if ("string" == typeof t) n[t] = e;
					else {
						var r, o = function(t) {
								if (Array.isArray(t)) return u(t)
							}(t) || function(t) {
								if ("undefined" != typeof Symbol && null != t[Symbol.iterator] || null != t["@@iterator"]) return Array.from(t)
							}(t) || a(t) || function() {
								throw TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
							}(),
							i = o.pop(),
							c = n,
							l = function(t, e) {
								var n = "undefined" != typeof Symbol && t[Symbol.iterator] || t["@@iterator"];
								if (!n) {
									if (Array.isArray(t) || (n = a(t))) {
										n && (t = n);
										var r = 0,
											o = function() {};
										return {
											s: o,
											n: function() {
												return r >= t.length ? {
													done: !0
												} : {
													done: !1,
													value: t[r++]
												}
											},
											e: function(t) {
												throw t
											},
											f: o
										}
									}
									throw TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
								}
								var i, u = !0,
									c = !1;
								return {
									s: function() {
										n = n.call(t)
									},
									n: function() {
										var t = n.next();
										return u = t.done, t
									},
									e: function(t) {
										c = !0, i = t
									},
									f: function() {
										try {
											u || null == n.return || n.return()
										} finally {
											if (c) throw i
										}
									}
								}
							}(o);
						try {
							for (l.s(); !(r = l.n()).done;) {
								var s, f, m = r.value;
								null !== (f = (s = c)[m]) && void 0 !== f || (s[m] = {}), c = c[m]
							}
						} catch (t) {
							l.e(t)
						} finally {
							l.f()
						}
						c[i] = e
					}
				}("RobloxThumbnails", r), c(n(300)), c(n(465)), c(n(549)), c(n(25)), c(n(242));
			var k = n(576);
			t = i(), e = "thumbnailsTemplates", t.module(e, []).run(["$templateCache", function(t) {
				k && k.keys().forEach(function(e) {
					var n = e.split("/").pop().replace(".html", "").replace(/([a-z])([A-Z])/g, "$1-$2").toLowerCase();
					t.put(n, k(e))
				})
			}])
		}()
}(), window.Roblox && window.Roblox.BundleDetector && window.Roblox.BundleDetector.bundleDetected("Thumbnails");
//# debugId=e245b474-aca0-4acd-b1cb-219bf2118cd8
//# sourceMappingURL=https://sourcemaps.rbxcdn.com/thumbnails-5990bd1f99e79689.js.map