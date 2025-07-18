! function() {
	var a = {
			380: function(e, t, a) {
				var n = {
					"./gameBadgesList.html": 284
				};

				function r(e) {
					e = i(e);
					return a(e)
				}

				function i(e) {
					if (a.o(n, e)) return n[e];
					e = new Error("Cannot find module '" + e + "'");
					throw e.code = "MODULE_NOT_FOUND", e
				}
				r.keys = function() {
					return Object.keys(n)
				}, r.resolve = i, (e.exports = r).id = 380
			},
			22: function(e, t, a) {
				var n = {
					"./gameBadgesListComponent.js": 505
				};

				function r(e) {
					e = i(e);
					return a(e)
				}

				function i(e) {
					if (a.o(n, e)) return n[e];
					e = new Error("Cannot find module '" + e + "'");
					throw e.code = "MODULE_NOT_FOUND", e
				}
				r.keys = function() {
					return Object.keys(n)
				}, r.resolve = i, (e.exports = r).id = 22
			},
			783: function(e, t, a) {
				var n = {
					"./gameBadgesConstants.js": 754
				};

				function r(e) {
					e = i(e);
					return a(e)
				}

				function i(e) {
					if (a.o(n, e)) return n[e];
					e = new Error("Cannot find module '" + e + "'");
					throw e.code = "MODULE_NOT_FOUND", e
				}
				r.keys = function() {
					return Object.keys(n)
				}, r.resolve = i, (e.exports = r).id = 783
			},
			347: function(e, t, a) {
				var n = {
					"./gameBadgesListController.js": 95
				};

				function r(e) {
					e = i(e);
					return a(e)
				}

				function i(e) {
					if (a.o(n, e)) return n[e];
					e = new Error("Cannot find module '" + e + "'");
					throw e.code = "MODULE_NOT_FOUND", e
				}
				r.keys = function() {
					return Object.keys(n)
				}, r.resolve = i, (e.exports = r).id = 347
			},
			602: function(e, t, a) {
				var n = {
					"./gameBadgesLanguageService.js": 31
				};

				function r(e) {
					e = i(e);
					return a(e)
				}

				function i(e) {
					if (a.o(n, e)) return n[e];
					e = new Error("Cannot find module '" + e + "'");
					throw e.code = "MODULE_NOT_FOUND", e
				}
				r.keys = function() {
					return Object.keys(n)
				}, r.resolve = i, (e.exports = r).id = 602
			},
			525: function(e) {
				function i(e) {
					return e.replace(/([a-z])([A-Z])/g, "$1-$2").toLowerCase()
				}

				function o(e) {
					return e.split("/").pop().replace(".html", "")
				}
				var t = {
					importFilesUnderPath: function(e) {
						e.keys().forEach(e)
					},
					templateCacheGenerator: function(e, t, n, r) {
						return e.module(t, []).run(["$templateCache", function(a) {
							n && n.keys().forEach(function(e) {
								var t = i(o(e));
								a.put(t, n(e))
							}), r && r.keys().forEach(function(e) {
								var t = i(o(e));
								a.put(t, r(e).replace(/<\/?script[^>]*>/gi, ""))
							})
						}])
					}
				};
				e.exports = t
			},
			505: function(e, t, a) {
				"use strict";
				a.r(t);
				var n = {
					templateUrl: "game-badges-list",
					bindings: {
						universeId: "<"
					},
					controller: "gameBadgesListController"
				};
				a(437).A.component("gameBadgesList", n), t.default = n
			},
			754: function(e, t, a) {
				"use strict";
				a.r(t);
				var n = a(437),
					r = a(577),
					r = {
						badgePageLoadSize: 100,
						layout: {
							minimumDisplayedBadgeCount: 3,
							badgeCountPerPage: 25
						},
						urls: {
							getGameBadges: r.EnvironmentUrls.badgesApi + "/v1/universes/{universeId}/badges"
						}
					};
				n.A.constant("gameBadgesConstants", r), t.default = r
			},
			95: function(e, t, a) {
				"use strict";
				a.r(t);
				var n = a(127),
					l = a.n(n),
					a = a(437);

				function r(e, a, t, n, r) {
					function i(e) {
						var t = 100 * e.statistics.winRatePercentage;
						return {
							id: e.id,
							name: e.displayName || e.name,
							description: e.displayDescription || e.description,
							winRatePercentage: t,
							awardedCount: e.statistics.awardedCount,
							pastDayAwardedCount: e.statistics.pastDayAwardedCount,
							rarityName: a.getRarityName(t),
							detailsPageUrl: n("seoUrl")("badges", e.id, e.name)
						}
					}

					function o() {
						s.badges.displayedBadgeCount >= s.badges.data.length && s.badges.pager.canLoadNextPage() && s.badges.pager.loadNextPage()
					}
					var s = this;
					s.layout = l().extend({}, e.layout), s.badges = {
						displayedBadgeCount: s.layout.minimumDisplayedBadgeCount,
						data: [],
						pager: t.createPager({
							sortOrder: t.sortOrder.Asc,
							pageSize: s.layout.badgeCountPerPage,
							loadPageSize: e.badgePageLoadSize,
							getCacheKeyParameters: function() {
								return {
									universeId: s.universeId
								}
							},
							getRequestUrl: function() {
								return n("formatString")(e.urls.getGameBadges, {
									universeId: s.universeId
								})
							},
							loadSuccess: function(e) {
								e.forEach(function(e) {
									e.enabled && s.badges.data.push(i(e))
								}), o()
							}
						})
					}, s.seeMore = function() {
						var e = s.layout.badgeCountPerPage - s.badges.displayedBadgeCount % s.layout.badgeCountPerPage;
						s.badges.displayedBadgeCount += e, o()
					}, s.getRarityName = a.getRarityName, s.translateBadgeFromResponse = i;
					s.$onInit = function() {
						s.thumbnailTypes = r.thumbnailTypes, s.badges.pager.loadFirstPage()
					}
				}
				r.$inject = ["gameBadgesConstants", "badgesLanguageService", "cursorPaginationService", "$filter", "thumbnailConstants"], a.A.controller("gameBadgesListController", r), t.default = r
			},
			437: function(e, t, a) {
				"use strict";
				var n = a(127),
					n = a.n(n),
					r = a(577),
					n = n().module("gameBadges", ["robloxApp", "cursorPagination", "gameBadgesTemplates", "thumbnails"]).config(["languageResourceProvider", function(e) {
						var t = (new r.TranslationResourceProvider).getTranslationResource("Feature.GameBadges");
						e.setTranslationResources([t])
					}]);
				t.A = n
			},
			31: function(e, t, a) {
				"use strict";
				a.r(t);
				a = a(437);

				function n(e) {
					var r = {
						1: e.get("Label.RarityImpossible"),
						5: e.get("Label.RarityInsane"),
						10: e.get("Label.RarityExtreme"),
						20: e.get("Label.RarityHard"),
						30: e.get("Label.RarityChallenging"),
						50: e.get("Label.RarityModerate"),
						70: e.get("Label.RarityEasy"),
						80: e.get("Label.RarityCakeWalk"),
						100: e.get("Label.RarityFreebie")
					};
					return {
						getRarityName: function(e) {
							for (var t = Object.keys(r), a = 0; a < t.length; a++) {
								var n = Number(t[a]);
								if (e <= n) return r[n]
							}
							return r[100]
						}
					}
				}
				n.$inject = ["languageResource"], a.A.factory("badgesLanguageService", n), t.default = n
			},
			284: function(e) {
				e.exports = '<div class="stack badge-container" ng-if="$ctrl.badges.data.length > 0"> <div class="container-header"> <h2 ng-bind="\'HeadingGameBadges\' | translate"></h2> </div> <ul class="stack-list"> <li ng-repeat="badge in $ctrl.badges.data | limitTo: $ctrl.badges.displayedBadgeCount" class="stack-row badge-row"> <div class="badge-image"> <a href="{{ badge.detailsPageUrl }}"> <thumbnail-2d thumbnail-type="$ctrl.thumbnailTypes.badgeIcon" thumbnail-target-id="badge.id"/> </a> </div> <div class="badge-content"> <div class="badge-data-container"> <div class="font-header-2 badge-name" ng-bind="badge.name"></div> <p class="para-overflow" ng-bind="badge.description"></p> </div> <ul class="badge-stats-container"> <li> <div class="text-label" ng-bind="\'LabelRarity\' | translate"></div> <div class="font-header-2 badge-stats-info">{{ badge.winRatePercentage | number : 1 }}% ({{ badge.rarityName }})</div> </li> <li> <div class="text-label" ng-bind="\'LabelWonYesterday\' | translate"></div> <div class="font-header-2 badge-stats-info" ng-bind="badge.pastDayAwardedCount"></div> </li> <li> <div class="text-label" ng-bind="\'LabelWonEver\' | translate"></div> <div class="font-header-2 badge-stats-info" ng-bind="badge.awardedCount"></div> </li> </ul> </div> </li> <li ng-if="$ctrl.badges.displayedBadgeCount < $ctrl.badges.data.length"> <button type="button" class="btn-full-width btn-control-sm" ng-bind="\'LabelSeeMore\' | translate" ng-click="$ctrl.seeMore()"></button> </li> </ul> </div>'
			},
			577: function(e) {
				"use strict";
				e.exports = Roblox
			},
			127: function(e) {
				"use strict";
				e.exports = angular
			}
		},
		n = {};

	function B(e) {
		var t = n[e];
		if (void 0 !== t) return t.exports;
		t = n[e] = {
			exports: {}
		};
		return a[e](t, t.exports, B), t.exports
	}
	B.n = function(e) {
			var t = e && e.__esModule ? function() {
				return e.default
			} : function() {
				return e
			};
			return B.d(t, {
				a: t
			}), t
		}, B.d = function(e, t) {
			for (var a in t) B.o(t, a) && !B.o(e, a) && Object.defineProperty(e, a, {
				enumerable: !0,
				get: t[a]
			})
		}, B.o = function(e, t) {
			return Object.prototype.hasOwnProperty.call(e, t)
		}, B.r = function(e) {
			"undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
				value: "Module"
			}), Object.defineProperty(e, "__esModule", {
				value: !0
			})
		},
		function() {
			"use strict";

			function o(e) {
				var a = e.badge,
					n = e.translate,
					e = (0, s.useMemo)(function() {
						return t = 100 * (e = a).statistics.winRatePercentage, {
							id: e.id,
							name: e.displayName || e.name,
							description: e.displayDescription || e.description,
							winRatePercentage: t,
							rarityLabel: t.toFixed(1) + "% (" + n(g(t)) + ")",
							pastDayAwardedCount: e.statistics.pastDayAwardedCount,
							awardedCount: e.statistics.awardedCount,
							url: b(e.id, e.name)
						};
						var e, t
					}, [a]);
				return f().createElement("li", {
					className: "stack-row badge-row"
				}, f().createElement("div", {
					className: "badge-image"
				}, f().createElement(m.Link, {
					url: e.url
				}, f().createElement(r.Thumbnail2d, {
					containerClass: "badge-image-container",
					targetId: e.id,
					format: r.ThumbnailFormat.webp,
					type: r.ThumbnailTypes.badgeIcon,
					size: r.ThumbnailBadgeIconSize.size150
				}))), f().createElement("div", {
					className: "badge-content"
				}, f().createElement("div", {
					className: "badge-data-container"
				}, f().createElement("div", {
					className: "font-header-2 badge-name"
				}, e.name), f().createElement("p", {
					className: "para-overflow"
				}, e.description)), f().createElement("ul", {
					className: "badge-stats-container"
				}, f().createElement("li", null, f().createElement("div", {
					className: "text-label"
				}, n(y.LabelRarity)), f().createElement("div", {
					className: "font-header-2 badge-stats-info"
				}, e.rarityLabel)), f().createElement("li", null, f().createElement("div", {
					className: "text-label"
				}, n(y.LabelWonYesterday)), f().createElement("div", {
					className: "font-header-2 badge-stats-info"
				}, e.pastDayAwardedCount)), f().createElement("li", null, f().createElement("div", {
					className: "text-label"
				}, n(y.LabelWonEver)), f().createElement("div", {
					className: "font-header-2 badge-stats-info"
				}, e.awardedCount)))))
			}
			var e = B(127),
				t = B.n(e),
				a = B(525),
				s = React,
				f = B.n(s),
				n = ReactUtilities,
				m = ReactStyleGuide,
				r = RobloxThumbnails,
				l = CoreUtilities,
				i = B(577),
				u = l.urlService.composeQueryString,
				d = {
					translationMap: {
						HeadingGameBadges: "HeadingGameBadges",
						LabelRarity: "LabelRarity",
						LabelSeeMore: "LabelSeeMore",
						LabelWonYesterday: "LabelWonYesterday",
						LabelWonEver: "LabelWonEver",
						LabelRarityImpossible: "Label.RarityImpossible",
						LabelRarityInsane: "Label.RarityInsane",
						LabelRarityExtreme: "Label.RarityExtreme",
						LabelRarityHard: "Label.RarityHard",
						LabelRarityChallenging: "Label.RarityChallenging",
						LabelRarityModerate: "Label.RarityModerate",
						LabelRarityEasy: "Label.RarityEasy",
						LabelRarityCakeWalk: "Label.RarityCakeWalk",
						LabelRarityFreebie: "Label.RarityFreebie"
					},
					badgePageSize: 20,
					badgePageLoadSize: 100,
					minimumDisplayedBadgeCount: 3,
					urls: {
						getGameBadges: function(e, t, a) {
							return {
								url: i.EnvironmentUrls.badgesApi + "/v1/universes/" + e + "/badges?" + u({
									cursor: t,
									limit: a,
									sortOrder: "Asc"
								}),
								withCredentials: !0
							}
						}
					}
				},
				c = d.translationMap,
				g = function(t) {
					var e = {
						1: c.LabelRarityImpossible,
						5: c.LabelRarityInsane,
						10: c.LabelRarityExtreme,
						20: c.LabelRarityHard,
						30: c.LabelRarityChallenging,
						50: c.LabelRarityModerate,
						70: c.LabelRarityEasy,
						80: c.LabelRarityCakeWalk,
						100: c.LabelRarityFreebie
					};
					return e[Object.keys(e).sort(function(e, t) {
						return Number(e) - Number(t)
					}).find(function(e) {
						return t <= Number(e)
					}) || 100]
				},
				b = function(e, t) {
					return l.urlService.getAbsoluteUrl("/badges/" + e + "/" + l.seoName.formatSeoName(t))
				},
				y = d.translationMap,
				p = function(e, o, s, l) {
					return new(s = s || Promise)(function(a, t) {
						function n(e) {
							try {
								i(l.next(e))
							} catch (e) {
								t(e)
							}
						}

						function r(e) {
							try {
								i(l.throw(e))
							} catch (e) {
								t(e)
							}
						}

						function i(e) {
							var t;
							e.done ? a(e.value) : ((t = e.value) instanceof s ? t : new s(function(e) {
								e(t)
							})).then(n, r)
						}
						i((l = l.apply(e, o || [])).next())
					})
				},
				v = function(a, n) {
					var r, i, o, s = {
							label: 0,
							sent: function() {
								if (1 & o[0]) throw o[1];
								return o[1]
							},
							trys: [],
							ops: []
						},
						e = {
							next: t(0),
							throw: t(1),
							return: t(2)
						};
					return "function" == typeof Symbol && (e[Symbol.iterator] = function() {
						return this
					}), e;

					function t(t) {
						return function(e) {
							return function(t) {
								if (r) throw new TypeError("Generator is already executing.");
								for (; s;) try {
									if (r = 1, i && (o = 2 & t[0] ? i.return : t[0] ? i.throw || ((o = i.return) && o.call(i), 0) : i.next) && !(o = o.call(i, t[1])).done) return o;
									switch (i = 0, o && (t = [2 & t[0], o.value]), t[0]) {
										case 0:
										case 1:
											o = t;
											break;
										case 4:
											return s.label++, {
												value: t[1],
												done: !1
											};
										case 5:
											s.label++, i = t[1], t = [0];
											continue;
										case 7:
											t = s.ops.pop(), s.trys.pop();
											continue;
										default:
											if (!(o = 0 < (o = s.trys).length && o[o.length - 1]) && (6 === t[0] || 2 === t[0])) {
												s = 0;
												continue
											}
											if (3 === t[0] && (!o || t[1] > o[0] && t[1] < o[3])) {
												s.label = t[1];
												break
											}
											if (6 === t[0] && s.label < o[1]) {
												s.label = o[1], o = t;
												break
											}
											if (o && s.label < o[2]) {
												s.label = o[2], s.ops.push(t);
												break
											}
											o[2] && s.ops.pop(), s.trys.pop();
											continue
									}
									t = n.call(a, s)
								} catch (e) {
									t = [6, e], i = 0
								} finally {
									r = o = 0
								}
								if (5 & t[0]) throw t[1];
								return {
									value: t[0] ? t[1] : void 0,
									done: !0
								}
							}([t, e])
						}
					}
				},
				h = d.urls,
				L = function(r, i, o) {
					return p(void 0, void 0, Promise, function() {
						var t, a, n;
						return v(this, function(e) {
							switch (e.label) {
								case 0:
									return [4, l.httpService.get(h.getGameBadges(r, i, o))];
								case 1:
									return n = e.sent().data, t = n.data, a = n.nextPageCursor, n = n.previousPageCursor, [2, {
										data: t.filter(function(e) {
											return e.enabled
										}),
										nextPageCursor: a,
										previousPageCursor: n
									}]
							}
						})
					})
				},
				e = {
					common: [],
					feature: "Feature.GameBadges"
				},
				w = function(e, o, s, l) {
					return new(s = s || Promise)(function(a, t) {
						function n(e) {
							try {
								i(l.next(e))
							} catch (e) {
								t(e)
							}
						}

						function r(e) {
							try {
								i(l.throw(e))
							} catch (e) {
								t(e)
							}
						}

						function i(e) {
							var t;
							e.done ? a(e.value) : ((t = e.value) instanceof s ? t : new s(function(e) {
								e(t)
							})).then(n, r)
						}
						i((l = l.apply(e, o || [])).next())
					})
				},
				R = function(a, n) {
					var r, i, o, s = {
							label: 0,
							sent: function() {
								if (1 & o[0]) throw o[1];
								return o[1]
							},
							trys: [],
							ops: []
						},
						e = {
							next: t(0),
							throw: t(1),
							return: t(2)
						};
					return "function" == typeof Symbol && (e[Symbol.iterator] = function() {
						return this
					}), e;

					function t(t) {
						return function(e) {
							return function(t) {
								if (r) throw new TypeError("Generator is already executing.");
								for (; s;) try {
									if (r = 1, i && (o = 2 & t[0] ? i.return : t[0] ? i.throw || ((o = i.return) && o.call(i), 0) : i.next) && !(o = o.call(i, t[1])).done) return o;
									switch (i = 0, o && (t = [2 & t[0], o.value]), t[0]) {
										case 0:
										case 1:
											o = t;
											break;
										case 4:
											return s.label++, {
												value: t[1],
												done: !1
											};
										case 5:
											s.label++, i = t[1], t = [0];
											continue;
										case 7:
											t = s.ops.pop(), s.trys.pop();
											continue;
										default:
											if (!(o = 0 < (o = s.trys).length && o[o.length - 1]) && (6 === t[0] || 2 === t[0])) {
												s = 0;
												continue
											}
											if (3 === t[0] && (!o || t[1] > o[0] && t[1] < o[3])) {
												s.label = t[1];
												break
											}
											if (6 === t[0] && s.label < o[1]) {
												s.label = o[1], o = t;
												break
											}
											if (o && s.label < o[2]) {
												s.label = o[2], s.ops.push(t);
												break
											}
											o[2] && s.ops.pop(), s.trys.pop();
											continue
									}
									t = n.call(a, s)
								} catch (e) {
									t = [6, e], i = 0
								} finally {
									r = o = 0
								}
								if (5 & t[0]) throw t[1];
								return {
									value: t[0] ? t[1] : void 0,
									done: !0
								}
							}([t, e])
						}
					}
				},
				C = function(e, t) {
					for (var a = 0, n = t.length, r = e.length; a < n; a++, r++) e[r] = t[a];
					return e
				},
				E = d.translationMap,
				P = d.minimumDisplayedBadgeCount,
				x = d.badgePageSize,
				N = d.badgePageLoadSize,
				n = (0, n.withTranslations)(function(e) {
					var l = e.universeId,
						t = e.translate,
						a = (0, s.useState)(P),
						n = a[0],
						r = a[1],
						e = (0, s.useState)(void 0),
						i = e[0],
						u = e[1],
						a = (0, s.useState)([]),
						e = a[0],
						d = a[1],
						c = (0, s.useRef)(n),
						g = (0, s.useRef)(e.length),
						b = function(r, i, o, s) {
							return w(void 0, void 0, void 0, function() {
								var t, a, n;
								return R(this, function(e) {
									switch (e.label) {
										case 0:
											if (!(i || c.current >= g.current && o)) return [3, 4];
											e.label = 1;
										case 1:
											return e.trys.push([1, 3, , 4]), [4, L(l, o, s)];
										case 2:
											return t = e.sent(), n = t.nextPageCursor, a = t.data, g.current += a.length, d(function(e) {
												return C(C([], e), a)
											}), u(n), b(r, !1, n, s), [3, 4];
										case 3:
											return n = e.sent(), console.error(n), [3, 4];
										case 4:
											return [2]
									}
								})
							})
						};
					return (0, s.useEffect)(function() {
						b(l, !0, void 0, N)
					}, []), 0 === e.length ? null : f().createElement("div", {
						className: "stack badge-container game-badges-list"
					}, f().createElement("div", {
						className: "container-header"
					}, f().createElement("h2", null, t(E.HeadingGameBadges))), f().createElement("ul", {
						className: "stack-list"
					}, e.slice(0, n).map(function(e) {
						return f().createElement(o, {
							key: e.id,
							badge: e,
							translate: t
						})
					})), n < e.length && f().createElement("li", null, f().createElement(m.Button, {
						variant: m.Button.variants.control,
						width: m.Button.widths.full,
						onClick: function() {
							r(function(e) {
								var t = x - e % x;
								return c.current += t, t + e
							}), b(l, !1, i, N)
						}
					}, t(E.LabelSeeMore))))
				}, e),
				k = B(437),
				e = B(380);
			(0, a.templateCacheGenerator)(t(), "gameBadgesTemplates", e), (0, a.importFilesUnderPath)(B(783)), (0, a.importFilesUnderPath)(B(602)), (0, a.importFilesUnderPath)(B(347)), (0, a.importFilesUnderPath)(B(22)), t().element(function() {
				t().bootstrap("#game-badges-container", [k.A.name])
			}), window.Roblox.GameBadgesList = n
		}()
}();
//# sourceMappingURL=https://sourcemaps.rbxcdn.com/29077666f607b835e46d9fcec9c67cf8-gameBadges.bundle.min.js.map

/* Bundle detector */
window.Roblox && window.Roblox.BundleDetector && window.Roblox.BundleDetector.bundleDetected("GameBadges");