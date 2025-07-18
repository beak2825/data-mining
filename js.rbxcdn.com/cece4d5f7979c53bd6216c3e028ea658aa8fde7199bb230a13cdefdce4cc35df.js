! function() {
	var r = {
			986: function(e, t, r) {
				var o = {
					"./socialLinksConstants.js": 777
				};

				function i(e) {
					e = a(e);
					return r(e)
				}

				function a(e) {
					if (r.o(o, e)) return o[e];
					e = new Error("Cannot find module '" + e + "'");
					throw e.code = "MODULE_NOT_FOUND", e
				}
				i.keys = function() {
					return Object.keys(o)
				}, i.resolve = a, (e.exports = i).id = 986
			},
			50: function(e, t, r) {
				var o = {
					"./socialLinksService.js": 115
				};

				function i(e) {
					e = a(e);
					return r(e)
				}

				function a(e) {
					if (r.o(o, e)) return o[e];
					e = new Error("Cannot find module '" + e + "'");
					throw e.code = "MODULE_NOT_FOUND", e
				}
				i.keys = function() {
					return Object.keys(o)
				}, i.resolve = a, (e.exports = i).id = 50
			},
			544: function(e) {
				function a(e) {
					return e.replace(/([a-z])([A-Z])/g, "$1-$2").toLowerCase()
				}

				function n(e) {
					return e.split("/").pop().replace(".html", "")
				}
				var t = {
					importFilesUnderPath: function(e) {
						e.keys().forEach(e)
					},
					templateCacheGenerator: function(e, t, o, i) {
						return e.module(t, []).run(["$templateCache", function(r) {
							o && o.keys().forEach(function(e) {
								var t = a(n(e));
								r.put(t, o(e))
							}), i && i.keys().forEach(function(e) {
								var t = a(n(e));
								r.put(t, i(e).replace(/<\/?script[^>]*>/gi, ""))
							})
						}])
					}
				};
				e.exports = t
			},
			777: function(e, t, r) {
				"use strict";
				r.r(t), r.d(t, {
					default: function() {
						return o
					}
				});
				t = Roblox, r = r(15), t = {
					urlBase: {
						getGameSocialLinks: t.EnvironmentUrls.gamesApi,
						getGroupSocialLinks: t.EnvironmentUrls.groupsApi,
						setGameSocialLinks: t.EnvironmentUrls.developApi,
						setGroupSocialLinks: t.EnvironmentUrls.groupsApi,
						getGameSocialLinksMetadata: t.EnvironmentUrls.developApi,
						getUserSocialLinks: t.EnvironmentUrls.accountInformationApi
					},
					urlRegexes: {
						facebook: /^((http|https):\/\/)?(www\.)?facebook\.com\/(?:(?:\w)*#!\/)?(?:pages\/)?(?:[?\w\-]*\/)?(?:profile\.php\?id=(?=\d.*))?([\w\-]*)?$/,
						twitter: /^(((http|https):\/\/)?(www\.)?twitter\.com\/|@)([a-zA-Z0-9_]{1,15})$/,
						youtube: /^((http|https):\/\/)?(www\.)?youtube\.com\/(?!logout(\/|$))[@a-zA-Z0-9\-/_]+$/,
						twitch: /^((http|https):\/\/)?(www\.)?twitch\.tv\/[a-zA-Z0-9\-/_]+$/,
						discord: /^((http|https):\/\/)?(www\.)?discord\.(gg|io|me|li)\/[a-zA-Z0-9\-_/]+$/,
						robloxGroup: /^(?:https?):\/\/(?:[a-z0-9-]{2,}\.)*(?:roblox(labs)?\.com\/)(?:[Gg]roups\/[Gg]roup\.aspx\?gid=|[Mm]y\/[Gg]roups\.aspx\?gid=|groups\/)([\d]+)/,
						amazon: /^((https?):\/\/)?(www\.)?amazon\.com\/stores\/page\/[\w\-/]+(\?[\w\-/]+(=[\w\-/]*)?(&[\w\-/]+(=[\w\-/]*)?)*)?$/,
						guilded: /^((http|https):\/\/)?(www\.)?guilded\.gg\/((profile|teams|i|r|u)\/)?([a-zA-Z0-9-]{3,30})(\/(overview))?(\?[i|r]=?([a-zA-Z0-9-]{3,16}))?$/
					},
					targetTypes: {
						game: "game",
						group: "group",
						user: "user"
					},
					socialLinkDisplayTypes: {
						icon: "icon",
						card: "card"
					},
					socialMediaTypes: {
						facebook: "Facebook",
						twitter: "Twitter",
						youtube: "YouTube",
						twitch: "Twitch",
						discord: "Discord",
						robloxGroup: "RobloxGroup",
						amazon: "Amazon",
						guilded: "Guilded"
					},
					socialMediaNames: {
						Facebook: "Facebook",
						Twitter: "Twitter",
						YouTube: "YouTube",
						Twitch: "Twitch",
						Discord: "Discord",
						Amazon: "Amazon",
						RobloxGroup: "Roblox Group",
						Guilded: "Guilded"
					},
					availableSocialMediaTypes: {
						game: ["facebook", "twitter", "youtube", "twitch", "discord", "robloxGroup", "amazon", "guilded"],
						group: ["facebook", "twitter", "youtube", "twitch", "discord", "guilded"],
						user: ["facebook", "twitter", "youtube", "twitch", "guilded"]
					},
					availableIconTypes: ["Facebook", "Twitter", "YouTube", "Twitch", "Discord", "RobloxGroup", "GitHub", "Amazon", "Guilded"],
					eventSteamEventNames: {
						click: "socialLinkClickEvent"
					},
					layout: {
						maxUrlLength: 256,
						maxNameLength: 70
					},
					errorCodes: {
						internal: {
							unknownError: 0,
							invalidTarget: 1,
							featureDisabled: 2,
							invalidViewer: 3,
							invalidTitle: 4,
							invalidUrl: 5,
							invalidType: 6,
							unauthorized: 7,
							socialLinkRemoved: 8,
							noGroupPermission: 9,
							noMetadata: 10
						},
						getGroupSocialLinks: {
							1: 1,
							11: 2,
							13: 3
						},
						getGameSocialLinks: {
							2: 2,
							3: 3,
							10: 10
						},
						setGameSocialLinks: {
							1: 7,
							2: 4,
							3: 4,
							4: 5,
							7: 8,
							8: 6,
							11: 4,
							18: 9
						},
						setGroupSocialLinks: {
							1: 1,
							2: 7,
							3: 4,
							4: 4,
							5: 5,
							6: 5,
							8: 8,
							9: 6,
							12: 4,
							16: 6
						},
						getUserSocialLinks: {
							1: 1
						}
					},
					translations: {
						socialLinkoffPlatformModalTitle: "Message.SocialLinkoffPlatformModalTitle",
						socialLinkoffPlatformModalBody: "Message.SocialLinkoffPlatformModalBody",
						socialLinkoffPlatformModalContinueButtonText: "Message.SocialLinkoffPlatformModalContinueButtonText",
						socialLinkoffPlatformModalCancelButtonText: "Message.SocialLinkoffPlatformModalCancelButtonText",
						socialLinkRemoved: "Message.SocialLinkRemoved",
						socialLinkSaved: "Message.SocialLinkSaved",
						socialLinkInvalidError: "Message.SocialLinkInvalidError",
						socialLinksEditDisabledError: "Message.SocialLinksEditDisabledError",
						unauthorizedError: "Message.UnauthorizedError",
						titleModeratedError: "Message.TitleModeratedError",
						unknownError: "Message.UnknownError",
						socialLinkTypeLimitError: "Message.SocialLinkTypeLimitError",
						urlSocialMediaTypeMismatchError: "Message.UrlSocialMediaTypeMismatchError",
						urlEmptyError: "Message.UrlEmptyError",
						titleEmptyError: "Message.TitleEmptyError",
						noGroupPermission: "Message.NoGroupPermission"
					}
				};
				r.Z.constant("socialLinksConstants", t);
				var o = t
			},
			115: function(e, t, r) {
				"use strict";
				r.r(t), r.d(t, {
					default: function() {
						return i
					}
				});
				var f = HeaderScripts,
					r = r(15);

				function a(t, e) {
					var r, o = Object.keys(t);
					return Object.getOwnPropertySymbols && (r = Object.getOwnPropertySymbols(t), e && (r = r.filter(function(e) {
						return Object.getOwnPropertyDescriptor(t, e).enumerable
					})), o.push.apply(o, r)), o
				}

				function g(o) {
					for (var e = 1; e < arguments.length; e++) {
						var i = null != arguments[e] ? arguments[e] : {};
						e % 2 ? a(Object(i), !0).forEach(function(e) {
							var t, r;
							t = o, e = i[r = e], r in t ? Object.defineProperty(t, r, {
								value: e,
								enumerable: !0,
								configurable: !0,
								writable: !0
							}) : t[r] = e
						}) : Object.getOwnPropertyDescriptors ? Object.defineProperties(o, Object.getOwnPropertyDescriptors(i)) : a(Object(i)).forEach(function(e) {
							Object.defineProperty(o, e, Object.getOwnPropertyDescriptor(i, e))
						})
					}
					return o
				}
				var k = {
					AmazonStoreLinksEnabledForUser: !(o.$inject = ["$q", "httpService", "socialLinksConstants", "$window"])
				};

				function o(t, c, l, e) {
					function u(e, t) {
						return (e = c.getApiErrorCodes(e)[0] || l.errorCodes.internal.unknownError) !== l.errorCodes.internal.unknownError && t.hasOwnProperty(e) ? t[e] : e
					}

					function d(i) {
						return t(function(t, r) {
							var e, o;
							i <= 0 ? r(l.errorCodes.internal.invalidTarget) : f.authenticatedUser.isAuthenticated && !f.authenticatedUser.isUnder13 ? (e = {
								url: "".concat(l.urlBase.getGameSocialLinksMetadata, "/v1/universes/").concat(i, "/social-links/metadata")
							}, o = l.errorCodes.getGameSocialLinks, c.httpGet(e).then(function(e) {
								t(e)
							}, function(e) {
								r(u(e, o))
							})) : r(l.errorCodes.internal.invalidViewer)
						})
					}
					var p = {};
					return {
						getSocialLinks: function(a, n, e) {
							var s = 2 < arguments.length && void 0 !== e && e;
							return t(function(t, r) {
								if (n <= 0) r(l.errorCodes.internal.invalidTarget);
								else if (f.authenticatedUser.isAuthenticated && !f.authenticatedUser.isUnder13) {
									var i = "".concat(a || "", ":").concat(n);
									if (p[i]) t(p[i]);
									else {
										var o, e = {};
										switch (a) {
											case l.targetTypes.game:
												e.url = "".concat(l.urlBase.getGameSocialLinks, "/v1/games/").concat(n, "/social-links/list"), o = l.errorCodes.getGameSocialLinks;
												break;
											case l.targetTypes.group:
												e.url = "".concat(l.urlBase.getGroupSocialLinks, "/v1/groups/").concat(n, "/social-links"), o = l.errorCodes.getGroupSocialLinks;
												break;
											case l.targetTypes.user:
												e.url = "".concat(l.urlBase.getUserSocialLinks, "/v1/users/").concat(n, "/promotion-channels?alwaysReturnUrls=true"), o = l.errorCodes.getUserSocialLinks;
												break;
											default:
												return void r(l.errorCodes.invalidTarget)
										}
										c.httpGet(e).then(function(r) {
											var e, o = {};
											a === l.targetTypes.user ? (o.data = [], Object.keys(l.socialMediaTypes).forEach(function(e) {
												var t = r[e];
												t && o.data.push({
													id: 0,
													title: l.socialMediaTypes[e],
													type: l.socialMediaTypes[e],
													url: t
												})
											})) : o.data = r.data, o.data.forEach(function(e) {
												e.target = {
													id: n,
													type: a
												}
											}), s ? d(n).then(function() {
												var e = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : k,
													e = g(g({}, o), {}, {
														socialLinksMetadata: e
													});
												p[i] = e, t(e)
											}) : (e = g(g({}, o), {}, {
												socialLinksMetadata: k
											}), p[i] = e, t(e))
										}, function(e) {
											r(u(e, o))
										})
									}
								} else r(l.errorCodes.internal.invalidViewer)
							})
						},
						getSocialLinksMetadata: d,
						saveSocialLink: function(a) {
							return t(function(t, r) {
								var o, e = {},
									i = {
										type: a.type,
										url: a.url,
										title: a.title
									};
								switch (a.target.type) {
									case l.targetTypes.game:
										e.url = "".concat(l.urlBase.setGameSocialLinks, "/v1/universes/").concat(a.target.id, "/social-links"), o = l.errorCodes.setGameSocialLinks;
										break;
									case l.targetTypes.group:
										e.url = "".concat(l.urlBase.setGroupSocialLinks, "/v1/groups/").concat(a.target.id, "/social-links"), o = l.errorCodes.setGroupSocialLinks;
										break;
									default:
										return void r(l.errorCodes.invalidTarget)
								}
								a.id ? (e.url += "/".concat(a.id), c.httpPatch(e, i).then(t, function(e) {
									r(u(e, o))
								})) : c.httpPost(e, i).then(function(e) {
									a.id = e.id || e.Id, t()
								}, function(e) {
									r(u(e, o))
								})
							})
						},
						deleteSocialLink: function(i) {
							return t(function(e, t) {
								var r, o = {};
								switch (i.target.type) {
									case l.targetTypes.game:
										o.url = "".concat(l.urlBase.setGameSocialLinks, "/v1/universes/").concat(i.target.id, "/social-links"), r = l.errorCodes.setGameSocialLinks;
										break;
									case l.targetTypes.group:
										o.url = "".concat(l.urlBase.setGroupSocialLinks, "/v1/groups/").concat(i.target.id, "/social-links"), r = l.errorCodes.setGroupSocialLinks;
										break;
									default:
										return void t(l.errorCodes.invalidTarget)
								}
								o.url += "/".concat(i.id), c.httpDelete(o).then(e, function(e) {
									t(u(e, r))
								})
							})
						}
					}
				}
				r.Z.factory("socialLinksService", o);
				var i = o
			},
			15: function(e, t, r) {
				"use strict";
				r.d(t, {
					Z: function() {
						return o
					}
				});
				var t = angular,
					o = r.n(t)().module("socialLinksCommon", ["robloxApp"])
			}
		},
		o = {};

	function i(e) {
		if (o[e]) return o[e].exports;
		var t = o[e] = {
			exports: {}
		};
		return r[e](t, t.exports, i), t.exports
	}
	i.n = function(e) {
			var t = e && e.__esModule ? function() {
				return e.default
			} : function() {
				return e
			};
			return i.d(t, {
				a: t
			}), t
		}, i.d = function(e, t) {
			for (var r in t) i.o(t, r) && !i.o(e, r) && Object.defineProperty(e, r, {
				enumerable: !0,
				get: t[r]
			})
		}, i.o = function(e, t) {
			return Object.prototype.hasOwnProperty.call(e, t)
		}, i.r = function(e) {
			"undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
				value: "Module"
			}), Object.defineProperty(e, "__esModule", {
				value: !0
			})
		},
		function() {
			"use strict";
			var e = i(544);
			i(15), (0, e.importFilesUnderPath)(i(986)), (0, e.importFilesUnderPath)(i(50))
		}()
}();
//# sourceMappingURL=https://js.rbxcdn.com/f6085fb4648ccbf2411fa182f5d7e90e-socialLinksCommon.bundle.min.js.map

! function() {
	var e = {
			361: function(n, t, e) {
				var i = {
					"./socialLinkCard.html": 589,
					"./socialLinkIcon.html": 966,
					"./socialLinkIconList.html": 384,
					"./socialLinksContainer.html": 389
				};

				function o(n) {
					n = a(n);
					return e(n)
				}

				function a(n) {
					if (e.o(i, n)) return i[n];
					n = new Error("Cannot find module '" + n + "'");
					throw n.code = "MODULE_NOT_FOUND", n
				}
				o.keys = function() {
					return Object.keys(i)
				}, o.resolve = a, (n.exports = o).id = 361
			},
			41: function(n, t, e) {
				var i = {
					"./socialLinkCardComponent.js": 724,
					"./socialLinkIconComponent.js": 117,
					"./socialLinkIconListComponent.js": 979,
					"./socialLinksContainerComponent.js": 890
				};

				function o(n) {
					n = a(n);
					return e(n)
				}

				function a(n) {
					if (e.o(i, n)) return i[n];
					n = new Error("Cannot find module '" + n + "'");
					throw n.code = "MODULE_NOT_FOUND", n
				}
				o.keys = function() {
					return Object.keys(i)
				}, o.resolve = a, (n.exports = o).id = 41
			},
			710: function(n, t, e) {
				var i = {
					"./socialLinkController.js": 136,
					"./socialLinkIconListController.js": 3,
					"./socialLinksContainerController.js": 666
				};

				function o(n) {
					n = a(n);
					return e(n)
				}

				function a(n) {
					if (e.o(i, n)) return i[n];
					n = new Error("Cannot find module '" + n + "'");
					throw n.code = "MODULE_NOT_FOUND", n
				}
				o.keys = function() {
					return Object.keys(i)
				}, o.resolve = a, (n.exports = o).id = 710
			},
			544: function(n) {
				function a(n) {
					return n.replace(/([a-z])([A-Z])/g, "$1-$2").toLowerCase()
				}

				function r(n) {
					return n.split("/").pop().replace(".html", "")
				}
				var t = {
					importFilesUnderPath: function(n) {
						n.keys().forEach(n)
					},
					templateCacheGenerator: function(n, t, i, o) {
						return n.module(t, []).run(["$templateCache", function(e) {
							i && i.keys().forEach(function(n) {
								var t = a(r(n));
								e.put(t, i(n))
							}), o && o.keys().forEach(function(n) {
								var t = a(r(n));
								e.put(t, o(n).replace(/<\/?script[^>]*>/gi, ""))
							})
						}])
					}
				};
				n.exports = t
			},
			724: function(n, t, e) {
				"use strict";
				e.r(t);
				var i = {
					templateUrl: "social-link-card",
					bindings: {
						url: "<",
						title: "<",
						type: "<",
						target: "<",
						displayType: "<"
					},
					controller: "socialLinkController"
				};
				e(492).Z.component("socialLinkCard", i), t.default = i
			},
			117: function(n, t, e) {
				"use strict";
				e.r(t);
				var i = {
					templateUrl: "social-link-icon",
					bindings: {
						url: "<",
						type: "<",
						target: "<",
						displayType: "<"
					},
					controller: "socialLinkController"
				};
				e(492).Z.component("socialLinkIcon", i), t.default = i
			},
			979: function(n, t, e) {
				"use strict";
				e.r(t);
				var i = {
					templateUrl: "social-link-icon-list",
					bindings: {
						targetType: "@",
						targetId: "<"
					},
					controller: "socialLinkIconListController"
				};
				e(492).Z.component("socialLinkIconList", i), t.default = i
			},
			890: function(n, t, e) {
				"use strict";
				e.r(t);
				var i = {
					templateUrl: "social-links-container",
					bindings: {
						targetType: "@",
						targetId: "<"
					},
					controller: "socialLinksContainerController"
				};
				e(492).Z.component("socialLinksContainer", i), t.default = i
			},
			136: function(n, t, e) {
				"use strict";
				e.r(t);
				var i = e(492),
					a = e(792);

				function o(t, n, e, i) {
					var o = this;
					o.socialMediaTypes = t.socialMediaTypes, o.socialLinkClick = function() {
						var n = {
							assignmentId: o.target.id,
							assignmentType: o.target.type,
							socialLinkType: o.type,
							socialLinkUrl: o.url,
							socialLinkDisplayType: o.displayType
						};
						a.EventStream && a.EventStream.SendEvent && a.EventStream.SendEvent(t.eventSteamEventNames.click, o.target.type, n)
					}, o.socialLinkOffPlatformClick = function() {
						n.open({
							titleText: i.get(t.translations.socialLinkoffPlatformModalTitle),
							bodyText: i.get(t.translations.socialLinkoffPlatformModalBody, {
								lineBreak: "\n\n"
							}),
							actionButtonShow: !0,
							actionButtonText: i.get(t.translations.socialLinkoffPlatformModalContinueButtonText),
							neutralButtonText: i.get(t.translations.socialLinkoffPlatformModalCancelButtonText),
							actionButtonClass: "btn-primary-md"
						}).result.then(function() {
							o.socialLinkClick(), e.open(o.url, "_blank")
						}, angular.noop)
					}
				}
				o.$inject = ["socialLinksConstants", "modalService", "$window", "languageResource"], i.Z.controller("socialLinkController", o), t.default = o
			},
			3: function(n, t, e) {
				"use strict";
				e.r(t);
				e = e(492);

				function i(t, n) {
					function e() {
						i.socialLinks = [], i.socialLinkDisplayTypes = t.socialLinkDisplayTypes, n.getSocialLinks(i.targetType, i.targetId, !1).then(function(n) {
							n = n.data || [];
							i.socialLinks = n.filter(function(n) {
								return 0 <= t.availableIconTypes.indexOf(n.type)
							})
						}).catch(function(n) {
							switch (n) {
								case t.errorCodes.internal.featureDisabled:
								case t.errorCodes.internal.invalidViewer:
							}
						})
					}
					var i = this;
					i.$onInit = e, i.$onChanges = e
				}
				i.$inject = ["socialLinksConstants", "socialLinksService"], e.Z.controller("socialLinkIconListController", i), t.default = i
			},
			666: function(n, t, e) {
				"use strict";
				e.r(t);
				e = e(492);

				function i(t, e) {
					function n() {
						var n = i.targetType + ":" + i.targetId;
						o !== n && (o = n, i.socialLinks = [], i.socialLinkDisplayTypes = t.socialLinkDisplayTypes, e.getSocialLinks(i.targetType, i.targetId, !1).then(function() {
							var n = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : {};
							i.socialLinks = n.data || []
						}).catch(function(n) {
							switch (n) {
								case t.errorCodes.internal.featureDisabled:
								case t.errorCodes.internal.invalidViewer:
							}
						}))
					}
					var i = this,
						o = "";
					i.$onInit = n, i.$onChanges = n
				}
				i.$inject = ["socialLinksConstants", "socialLinksService"], e.Z.controller("socialLinksContainerController", i), t.default = i
			},
			492: function(n, t, e) {
				"use strict";
				var i = e(792),
					e = angular.module("socialLinksJumbotron", ["robloxApp", "socialLinksCommon", "socialLinksJumbotronHtmlTemplateApp", "modal"]).config(["languageResourceProvider", function(n) {
						var t = (new i.TranslationResourceProvider).getTranslationResource("Feature.PromotedChannels");
						n.setTranslationResources([t])
					}]);
				t.Z = e
			},
			779: function(n, t) {
				var e;
				/*!
					Copyright (c) 2018 Jed Watson.
					Licensed under the MIT License (MIT), see
					http://jedwatson.github.io/classnames
				*/
				! function() {
					"use strict";
					var r = {}.hasOwnProperty;

					function l() {
						for (var n = [], t = 0; t < arguments.length; t++) {
							var e = arguments[t];
							if (e) {
								var i, o = typeof e;
								if ("string" == o || "number" == o) n.push(e);
								else if (Array.isArray(e)) !e.length || (i = l.apply(null, e)) && n.push(i);
								else if ("object" == o)
									if (e.toString === Object.prototype.toString || e.toString.toString().includes("[native code]"))
										for (var a in e) r.call(e, a) && e[a] && n.push(a);
									else n.push(e.toString())
							}
						}
						return n.join(" ")
					}
					n.exports ? (l.default = l, n.exports = l) : void 0 === (e = function() {
						return l
					}.apply(t, [])) || (n.exports = e)
				}()
			},
			589: function(n) {
				n.exports = '<div id="social-link-card"> <div ng-if="$ctrl.type === $ctrl.socialMediaTypes.amazon" class="col-xs-12 col-md-4 col-sm-6"> <span class="social-link" title="{{ $ctrl.title }}" ng-click="$ctrl.socialLinkOffPlatformClick()" context-menu="$ctrl.socialLinkOffPlatformClick()"> <div class="medallion border"> <div class="contents"> <span class="type-img {{ $ctrl.type }}"></span> <div class="title-wrapper"> <span class="title" ng-bind="$ctrl.title"></span> </div> </div> </div> </span> </div> <div ng-if="$ctrl.type !== $ctrl.socialMediaTypes.amazon" class="col-xs-12 col-md-4 col-sm-6"> <a class="social-link" ng-href="{{ $ctrl.url }}" target="_blank" title="{{ $ctrl.title }}" ng-click="$ctrl.socialLinkClick()" context-menu="$ctrl.socialLinkClick()"> <div class="medallion border"> <div class="contents"> <span class="type-img {{ $ctrl.type }}"></span> <div class="title-wrapper"> <span class="title" ng-bind="$ctrl.title"></span> </div> </div> </div> </a> </div> </div>'
			},
			966: function(n) {
				n.exports = '<div id="social-link-icon"> <a ng-href="{{ $ctrl.url }}" target="_blank" title="{{ $ctrl.type }}" ng-click="$ctrl.socialLinkClick()" context-menu="$ctrl.socialLinkClick()"> <span class="social-link-icon {{ $ctrl.type }}"></span> </a> </div>'
			},
			384: function(n) {
				n.exports = '<div class="social-link-icon-list"> <ul ng-if="$ctrl.socialLinks.length > 0"> <li ng-repeat="socialLink in $ctrl.socialLinks"> <social-link-icon url="socialLink.url" type="socialLink.type" target="socialLink.target" display-type="$ctrl.socialLinkDisplayTypes.icon"></social-link-icon> </li> </ul> </div> '
			},
			389: function(n) {
				n.exports = '<div id="social-links-container"> <div class="stack social-links" ng-if="$ctrl.socialLinks.length > 0"> <div class="container-header"> <h2 ng-bind="\'HeadingSocialLinks\' | translate"></h2> </div> <div class="section-content remove-panel"> <social-link-card ng-repeat="socialLink in $ctrl.socialLinks" url="socialLink.url" title="socialLink.title" type="socialLink.type" target="socialLink.target" display-type="$ctrl.socialLinkDisplayTypes.card"></social-link-card> </div> </div> </div>'
			},
			792: function(n) {
				"use strict";
				n.exports = Roblox
			}
		},
		i = {};

	function x(n) {
		if (i[n]) return i[n].exports;
		var t = i[n] = {
			exports: {}
		};
		return e[n](t, t.exports, x), t.exports
	}
	x.n = function(n) {
			var t = n && n.__esModule ? function() {
				return n.default
			} : function() {
				return n
			};
			return x.d(t, {
				a: t
			}), t
		}, x.d = function(n, t) {
			for (var e in t) x.o(t, e) && !x.o(n, e) && Object.defineProperty(n, e, {
				enumerable: !0,
				get: t[e]
			})
		}, x.o = function(n, t) {
			return Object.prototype.hasOwnProperty.call(n, t)
		}, x.r = function(n) {
			"undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(n, Symbol.toStringTag, {
				value: "Module"
			}), Object.defineProperty(n, "__esModule", {
				value: !0
			})
		},
		function() {
			"use strict";
			var n, t = angular,
				e = x.n(t),
				i = x(544),
				r = React,
				l = x.n(r),
				o = x(779),
				c = x.n(o),
				s = HeaderScripts,
				u = CoreRobloxUtilities,
				d = ReactStyleGuide,
				a = ReactUtilities,
				f = CoreUtilities,
				t = x(792);
			(w = w || {}).Game = "Game", (o = n = n || {}).Facebook = "Facebook", o.Twitter = "Twitter", o.Youtube = "YouTube", o.Twitch = "Twitch", o.Discord = "Discord", o.RobloxGroup = "RobloxGroup", o.Amazon = "Amazon", o.Guilded = "Guilded";
			var p = t.EnvironmentUrls.gamesApi,
				o = {
					getGameSocialLinks: function(n) {
						return {
							url: p + "/v1/games/" + n + "/social-links/list",
							withCredentials: !0
						}
					}
				},
				k = {
					socialLinksTranslationMap: {
						sectionHeader: "HeadingSocialLinks",
						modalHeader: "Message.SocialLinkoffPlatformModalTitle",
						modalBody: "Message.SocialLinkoffPlatformModalBody",
						modalConfirm: "Message.SocialLinkoffPlatformModalContinueButtonText",
						modalCancel: "Message.SocialLinkoffPlatformModalCancelButtonText"
					},
					iconMap: ((t = {})[n.Amazon] = "icon-social-media-amazon", t[n.Discord] = "icon-social-media-discord", t[n.Facebook] = "icon-social-media-facebook", t[n.RobloxGroup] = "icon-social-media-roblox", t[n.Twitch] = "icon-social-media-twitch", t[n.Twitter] = "icon-social-media-twitter", t[n.Youtube] = "icon-social-media-youtube", t[n.Guilded] = "icon-social-media-guilded", t),
					url: o
				},
				m = function(n, r, l, c) {
					return new(l = l || Promise)(function(e, t) {
						function i(n) {
							try {
								a(c.next(n))
							} catch (n) {
								t(n)
							}
						}

						function o(n) {
							try {
								a(c.throw(n))
							} catch (n) {
								t(n)
							}
						}

						function a(n) {
							var t;
							n.done ? e(n.value) : ((t = n.value) instanceof l ? t : new l(function(n) {
								n(t)
							})).then(i, o)
						}
						a((c = c.apply(n, r || [])).next())
					})
				},
				y = function(e, i) {
					var o, a, r, l = {
							label: 0,
							sent: function() {
								if (1 & r[0]) throw r[1];
								return r[1]
							},
							trys: [],
							ops: []
						},
						n = {
							next: t(0),
							throw: t(1),
							return: t(2)
						};
					return "function" == typeof Symbol && (n[Symbol.iterator] = function() {
						return this
					}), n;

					function t(t) {
						return function(n) {
							return function(t) {
								if (o) throw new TypeError("Generator is already executing.");
								for (; l;) try {
									if (o = 1, a && (r = 2 & t[0] ? a.return : t[0] ? a.throw || ((r = a.return) && r.call(a), 0) : a.next) && !(r = r.call(a, t[1])).done) return r;
									switch (a = 0, r && (t = [2 & t[0], r.value]), t[0]) {
										case 0:
										case 1:
											r = t;
											break;
										case 4:
											return l.label++, {
												value: t[1],
												done: !1
											};
										case 5:
											l.label++, a = t[1], t = [0];
											continue;
										case 7:
											t = l.ops.pop(), l.trys.pop();
											continue;
										default:
											if (!(r = 0 < (r = l.trys).length && r[r.length - 1]) && (6 === t[0] || 2 === t[0])) {
												l = 0;
												continue
											}
											if (3 === t[0] && (!r || t[1] > r[0] && t[1] < r[3])) {
												l.label = t[1];
												break
											}
											if (6 === t[0] && l.label < r[1]) {
												l.label = r[1], r = t;
												break
											}
											if (r && l.label < r[2]) {
												l.label = r[2], l.ops.push(t);
												break
											}
											r[2] && l.ops.pop(), l.trys.pop();
											continue
									}
									t = i.call(e, l)
								} catch (n) {
									t = [6, n], a = 0
								} finally {
									o = r = 0
								}
								if (5 & t[0]) throw t[1];
								return {
									value: t[0] ? t[1] : void 0,
									done: !0
								}
							}([t, n])
						}
					}
				},
				v = function(t) {
					return m(void 0, void 0, Promise, function() {
						return y(this, function(n) {
							switch (n.label) {
								case 0:
									return [4, f.httpService.get(k.url.getGameSocialLinks(t))];
								case 1:
									return [2, n.sent().data.data]
							}
						})
					})
				},
				g = u.eventStreamService.eventTypes,
				L = function(n) {
					return [{
						name: "socialLinkClickEvent",
						type: "socialLinkClickEvent",
						context: g.formInteraction
					}, {
						assignmentId: n.id,
						assignmentType: n.type,
						socialLinkType: "game",
						socialLinkUrl: n.url,
						socialLinkDisplayType: n.type
					}]
				},
				o = {
					common: ["CommonUI.Controls"],
					feature: "Feature.PromotedChannels"
				},
				h = function(n, r, l, c) {
					return new(l = l || Promise)(function(e, t) {
						function i(n) {
							try {
								a(c.next(n))
							} catch (n) {
								t(n)
							}
						}

						function o(n) {
							try {
								a(c.throw(n))
							} catch (n) {
								t(n)
							}
						}

						function a(n) {
							var t;
							n.done ? e(n.value) : ((t = n.value) instanceof l ? t : new l(function(n) {
								n(t)
							})).then(i, o)
						}
						a((c = c.apply(n, r || [])).next())
					})
				},
				b = function(e, i) {
					var o, a, r, l = {
							label: 0,
							sent: function() {
								if (1 & r[0]) throw r[1];
								return r[1]
							},
							trys: [],
							ops: []
						},
						n = {
							next: t(0),
							throw: t(1),
							return: t(2)
						};
					return "function" == typeof Symbol && (n[Symbol.iterator] = function() {
						return this
					}), n;

					function t(t) {
						return function(n) {
							return function(t) {
								if (o) throw new TypeError("Generator is already executing.");
								for (; l;) try {
									if (o = 1, a && (r = 2 & t[0] ? a.return : t[0] ? a.throw || ((r = a.return) && r.call(a), 0) : a.next) && !(r = r.call(a, t[1])).done) return r;
									switch (a = 0, r && (t = [2 & t[0], r.value]), t[0]) {
										case 0:
										case 1:
											r = t;
											break;
										case 4:
											return l.label++, {
												value: t[1],
												done: !1
											};
										case 5:
											l.label++, a = t[1], t = [0];
											continue;
										case 7:
											t = l.ops.pop(), l.trys.pop();
											continue;
										default:
											if (!(r = 0 < (r = l.trys).length && r[r.length - 1]) && (6 === t[0] || 2 === t[0])) {
												l = 0;
												continue
											}
											if (3 === t[0] && (!r || t[1] > r[0] && t[1] < r[3])) {
												l.label = t[1];
												break
											}
											if (6 === t[0] && l.label < r[1]) {
												l.label = r[1], r = t;
												break
											}
											if (r && l.label < r[2]) {
												l.label = r[2], l.ops.push(t);
												break
											}
											r[2] && l.ops.pop(), l.trys.pop();
											continue
									}
									t = i.call(e, l)
								} catch (n) {
									t = [6, n], a = 0
								} finally {
									o = r = 0
								}
								if (5 & t[0]) throw t[1];
								return {
									value: t[0] ? t[1] : void 0,
									done: !0
								}
							}([t, n])
						}
					}
				},
				C = k.socialLinksTranslationMap,
				T = k.iconMap,
				o = Object.assign((0, a.withTranslations)(function(n) {
					n.type;

					function t(n) {
						u.eventStreamService.sendEvent.apply(u.eventStreamService, L(n)), window.open(n.url, "_blank")
					}
					var e = n.targetId,
						i = n.translate,
						o = (0, r.useState)(void 0),
						n = o[0],
						a = o[1];
					return (0, r.useEffect)(function() {
						h(void 0, void 0, void 0, function() {
							var t;
							return b(this, function(n) {
								switch (n.label) {
									case 0:
										if (s.authenticatedUser.isUnder13 || !s.authenticatedUser.isAuthenticated) return [3, 5];
										n.label = 1;
									case 1:
										return n.trys.push([1, 3, , 4]), [4, v(e)];
									case 2:
										return t = n.sent(), a(t), [3, 4];
									case 3:
										return n.sent(), a([]), [3, 4];
									case 4:
										return [3, 6];
									case 5:
										a([]), n.label = 6;
									case 6:
										return [2]
								}
							})
						})
					}, []), n && 0 !== (null == n ? void 0 : n.length) ? l().createElement("div", null, l().createElement("h2", null, i(C.sectionHeader)), l().createElement("ul", {
						className: "game-social-links"
					}, n.map(function(n) {
						return l().createElement(d.Link, {
							onClick: function() {
								t(n)
							},
							onKeyDown: function() {
								t(n)
							},
							key: n.id,
							className: "btn-secondary-lg border"
						}, l().createElement("span", {
							className: c()("social-icon", T[n.type])
						}), l().createElement("div", null, n.title))
					}))) : null
				}, o), {
					SocialLinkJumbotronType: w
				});
			(0, i.importFilesUnderPath)(x(710)), (0, i.importFilesUnderPath)(x(41));
			var w = x(361);
			(0, i.templateCacheGenerator)(e(), "socialLinksJumbotronHtmlTemplateApp", null, w), window.Roblox.SocialLinksJumbotron = o
		}()
}();
//# sourceMappingURL=https://js.rbxcdn.com/841a767b472b42433ef8af26b1c8d392-socialLinksJumbotron.bundle.min.js.map

/* Bundle detector */
window.Roblox && window.Roblox.BundleDetector && window.Roblox.BundleDetector.bundleDetected("SocialLinksJumbotron");