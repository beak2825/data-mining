! function() {
	var n = {
			870: function(e, t) {
				var n;
				/*!
					Copyright (c) 2018 Jed Watson.
					Licensed under the MIT License (MIT), see
					http://jedwatson.github.io/classnames
				*/
				! function() {
					"use strict";
					var i = {}.hasOwnProperty;

					function c() {
						for (var e = [], t = 0; t < arguments.length; t++) {
							var n = arguments[t];
							if (n) {
								var r, a = typeof n;
								if ("string" == a || "number" == a) e.push(n);
								else if (Array.isArray(n)) !n.length || (r = c.apply(null, n)) && e.push(r);
								else if ("object" == a)
									if (n.toString === Object.prototype.toString || n.toString.toString().includes("[native code]"))
										for (var o in n) i.call(n, o) && n[o] && e.push(o);
									else e.push(n.toString())
							}
						}
						return e.join(" ")
					}
					e.exports ? (c.default = c, e.exports = c) : void 0 === (n = function() {
						return c
					}.apply(t, [])) || (e.exports = n)
				}()
			},
			74: function(e) {
				e.exports = 'module.exports = __webpack_public_path__ + "../html/navigation.html";'
			},
			286: function(e) {
				e.exports = "https://images.rbxcdn.com/b8e34f5437bc8e885b4efe1a3cf2c405-The_Hatch_Final_400x400_AR.webp"
			},
			15: function(e) {
				e.exports = "https://images.rbxcdn.com/dc69000f773142f7035e2bccdd57a3ad-The_Hatch_Final_400x400_CHS.webp"
			},
			58: function(e) {
				e.exports = "https://images.rbxcdn.com/fb02837ad82b065b59d448bf615e886b-The_Hatch_Final_400x400_CHT.webp"
			},
			310: function(e) {
				e.exports = "https://images.rbxcdn.com/74b1ec2f327ae1590ebdba9a40ed36cc-The_Hatch_Final_400x400_EN.webp"
			},
			524: function(e) {
				e.exports = "https://images.rbxcdn.com/d9c7c9512b0e92e95d9defa27f3ca273-The_Hatch_Final_400x400_ESMX.webp"
			},
			685: function(e) {
				e.exports = "https://images.rbxcdn.com/61c6c6dac7f25d7ae6e5fe34c922e4b4-The_Hatch_Final_400x400_FR.webp"
			},
			127: function(e) {
				e.exports = "https://images.rbxcdn.com/38bcc094682b5c3c713e5ea6d7cafe2a-The_Hatch_Final_400x400_JP.webp"
			},
			485: function(e) {
				e.exports = "https://images.rbxcdn.com/5fecbf013bd79421759b2e19b58856f0-The_Hatch_Final_400x400_PL.webp"
			},
			613: function(e) {
				e.exports = "https://images.rbxcdn.com/d8ab55e9161b51fc11cad6e92bda2108-The_Hatch_Final_400x400_PTBR.webp"
			},
			371: function(e) {
				e.exports = "https://images.rbxcdn.com/ccae3ed53e5ac742fe2042f7ff8338f1-The_Hatch_Final_400x400_TR.webp"
			},
			857: function(e) {
				e.exports = "https://images.rbxcdn.com/b7dee11ad4e215b2eed2bed42ec3c28d-The_Hatch_Final_400x400_VN.webp"
			}
		},
		r = {};

	function Ho(e) {
		var t = r[e];
		if (void 0 !== t) return t.exports;
		t = r[e] = {
			exports: {}
		};
		return n[e](t, t.exports, Ho), t.exports
	}
	Ho.n = function(e) {
			var t = e && e.__esModule ? function() {
				return e.default
			} : function() {
				return e
			};
			return Ho.d(t, {
				a: t
			}), t
		}, Ho.d = function(e, t) {
			for (var n in t) Ho.o(t, n) && !Ho.o(e, n) && Object.defineProperty(e, n, {
				enumerable: !0,
				get: t[n]
			})
		}, Ho.o = function(e, t) {
			return Object.prototype.hasOwnProperty.call(e, t)
		},
		function() {
			"use strict";
			var M = React,
				B = Ho.n(M),
				q = CoreUtilities,
				e = ReactDOM,
				G = Roblox,
				t = Ho.n(G),
				L = HeaderScripts,
				V = ReactUtilities,
				K = {
					arrowUp: 38,
					arrowDown: 40,
					tab: 9,
					enter: 13
				},
				n = "container-main",
				r = {
					name: "Roblox.Logout"
				},
				a = 1,
				o = {
					clickMerchandise: "clickMerchandiseInLeftNav",
					goToAmazonStore: "clickContinueToAmazonStore"
				},
				i = {
					friendshipNotifications: "FriendshipNotifications",
					requestCountChanged: "Roblox.Friends.CountChanged",
					friendshipCreated: "FriendshipCreated",
					friendshipDestroyed: "FriendshipDestroyed",
					friendshipDeclined: "FriendshipDeclined",
					friendshipRequested: "FriendshipRequested"
				},
				c = {
					name: "Roblox.Messages.CountChanged"
				},
				y = "?",
				k = "Response.InternalServerErrorDescription",
				u = {
					name: "headerMenuIconClick"
				},
				l = {
					quickLogin: "quickLogin",
					logout: "logout",
					settings: "settings",
					switchAccountKey: "switchAccountKey"
				},
				S = {
					robuxTruncateThreshold: 1e4,
					creditTruncateThreshold: 1e4
				},
				_ = {
					control: "control",
					hideCreditAndRobux: "hideCreditAndRobux",
					showCreditAndRobux: "showCreditAndRobux"
				},
				j = {
					accountSwitchedFlag: "RBXASAccountSwitched",
					accountSwitchedMessage: "Description.AccountSwitchedConfirmationBannerText"
				},
				s = {
					common: ["CommonUI.Features", "CommonUI.Messages", "Common.AlertsAndOptions"],
					feature: "Feature.ShopDialog"
				},
				d = PropTypes,
				f = Ho.n(d),
				m = Ho(870),
				T = Ho.n(m),
				A = ReactStyleGuide,
				p = RobloxThumbnails,
				v = RobloxBadges,
				b = function(e, t) {
					for (var n = 0, r = t.length, a = e.length; n < r; n++, a++) e[a] = t[n];
					return e
				},
				h = G.Endpoints.getAbsoluteUrl,
				g = G.EnvironmentUrls.authApi,
				E = {
					url: h("/discover/?Keyword="),
					label: "Label.Experience",
					pageSort: ["home", "games", "discover"],
					icon: "icon-menu-games-off"
				},
				w = {
					url: h("/catalog?CatalogContext=1&Keyword="),
					label: "Heading.Marketplace",
					pageSort: ["catalog", "inventory", "bundles", "my/avatar", "trades"],
					icon: "icon-menu-shop"
				},
				C = [{
					url: h("/search/users?keyword="),
					label: "Label.Players",
					pageSort: ["users"],
					icon: "icon-menu-profile"
				}, w, {
					url: h("/search/communities?keyword="),
					label: "Label.sGroups",
					pageSort: ["groups"],
					icon: "icon-menu-groups"
				}, {
					url: h("/develop/library?CatalogContext=2&Category=6&Keyword="),
					label: "Label.CreatorStore",
					pageSort: ["develop"],
					icon: "icon-menu-library"
				}],
				x = "isFriendsRenamedToConnections",
				H = {
					creatorStoreUrl: "https://create." + G.EnvironmentUrls.domain + "/store/models?keyword=",
					friendsRenamedToConnectionsCacheKey: x,
					scrollListItems: {
						home: {
							url: h("/home"),
							idSelector: "nav-home",
							iconClass: "icon-nav-home",
							name: "home",
							labelTranslationKey: "Label.sHome"
						},
						profile: {
							url: h("/users/" + L.authenticatedUser.id + "/profile"),
							idSelector: "nav-profile",
							iconClass: "icon-nav-profile",
							name: "profile",
							labelTranslationKey: "Label.sProfile"
						},
						messages: {
							url: h("/my/messages/#!/inbox"),
							urlForNotification: h("/my/messages/#!/inbox"),
							idSelector: "nav-message",
							iconClass: "icon-nav-message",
							name: "messages",
							labelTranslationKey: "Label.sMessages"
						},
						friends: {
							url: h("/users/friends"),
							urlForNotification: h("/users/friends#!/friend-requests"),
							idSelector: "nav-friends",
							iconClass: "icon-nav-friends",
							name: "friends",
							labelTranslationKey: "true" === localStorage.getItem(x) ? "Label.Connections" : "Label.sFriends",
							labelFriendsTranslationKey: "Label.sFriends",
							labelConnectionsTranslationKey: "Label.Connections"
						},
						avatar: {
							url: h("/my/avatar"),
							idSelector: "nav-character",
							iconClass: "icon-nav-charactercustomizer",
							name: "avatar",
							labelTranslationKey: "Label.sAvatar"
						},
						inventory: {
							url: h("/users/" + L.authenticatedUser.id + "/inventory"),
							idSelector: "nav-inventory",
							iconClass: "icon-nav-inventory",
							name: "inventory",
							labelTranslationKey: "Label.sInventory"
						},
						trade: {
							url: h("/trades"),
							urlForNotification: h("/trades"),
							idSelector: "nav-trade",
							iconClass: "icon-nav-trade",
							name: "trade",
							labelTranslationKey: "Label.sTrade"
						},
						groups: {
							url: h("/my/communities"),
							idSelector: "nav-group",
							iconClass: "icon-nav-group",
							name: "groups",
							labelTranslationKey: "Label.sGroups"
						},
						blog: {
							url: h("https://blog.roblox.com"),
							idSelector: "nav-blog",
							iconClass: "icon-nav-blog",
							name: "blog",
							labelTranslationKey: "Label.sBlog",
							blankTarget: !0
						},
						shop: {
							isModal: !0,
							idSelector: "nav-shop",
							iconClass: "icon-nav-shop",
							name: "shop",
							labelTranslationKey: "Label.OfficialStore"
						},
						giftcards: {
							url: h("/giftcards-us"),
							idSelector: "nav-giftcards",
							iconClass: "icon-nav-giftcards",
							name: "giftcards",
							labelTranslationKey: "Label.GiftCards"
						}
					},
					upgradeButton: {
						url: h("/premium/membership?ctx=leftnav"),
						labelTranslationKey: L.authenticatedUser.isPremiumUser ? "ActionsPremium" : "ActionsGetPremium"
					},
					sponsorEvents: {
						label: {
							labelTranslationKey: "Label.sEvents"
						},
						events: {}
					},
					gameSearchLink: E,
					avatarSearchLink: w,
					miscSearchLink: C,
					universalSearchUrls: [{
						url: h("/search/users?keyword="),
						label: "Label.Players",
						pageSort: []
					}, {
						url: h("/discover/?Keyword="),
						label: "Label.Experience",
						pageSort: ["home", "games", "discover"]
					}, {
						url: h("/catalog?CatalogContext=1&Keyword="),
						label: "Label.sCatalog",
						pageSort: ["catalog", "inventory", "bundles"]
					}, {
						url: h("/search/communities?keyword="),
						label: "Label.sGroups",
						pageSort: ["groups"]
					}, {
						url: h("/develop/library?CatalogContext=2&Category=6&Keyword="),
						label: "Label.CreatorStore",
						pageSort: ["develop"]
					}],
					newUniversalSearchUrls: b([E], C),
					settingsUrl: {
						settings: {
							url: h("/my/account"),
							label: "Label.sSettings"
						},
						quickLogin: {
							url: h("/home"),
							label: "Label.sQuickLogin"
						},
						safetySupport: {
							url: h("/help-safety"),
							label: "Label.HelpAndSafety"
						},
						switchAccountKey: {
							url: h("/home"),
							label: "Label.sSwitchAccount"
						},
						logout: {
							url: g + "/v2/logout",
							label: "Label.sLogout"
						}
					},
					buyRobuxUrl: {
						myTransactions: {
							url: h("/transactions"),
							label: "Label.MyMoney"
						},
						buyRobux: {
							url: h("/upgrades/robux?ctx=navpopover"),
							label: "Label.sBuyRobux",
							name: "Label.sRobux"
						},
						buyRobuxOnVng: {
							url: G.EnvironmentUrls.vngGamesShopUrl,
							label: "Label.sBuyRobux",
							cacheKey: "isEligibleForVng"
						}
					},
					userDataUrl: h("/navigation/userData"),
					quickLoginUrl: h("/crossdevicelogin/ConfirmCode"),
					redeemUrl: {
						url: h("/redeem"),
						label: "Heading.RedeemRobloxCodes"
					},
					buyGiftCardUrl: {
						url: "https://roblox.cashstar.com/gift-card/buy/?ref=1023buygc",
						label: "Label.sBuyGiftCard",
						cacheKey: "giftCardExp"
					}
				},
				R = G.Endpoints.getAbsoluteUrl,
				O = G.EnvironmentUrls.authApi,
				N = (G.EnvironmentUrls.accountSettingsApi, G.EnvironmentUrls.websiteUrl, G.EnvironmentUrls.adsApi, G.EnvironmentUrls.economyApi),
				I = G.EnvironmentUrls.privateMessagesApi,
				U = G.EnvironmentUrls.tradesApi,
				P = G.EnvironmentUrls.friendsApi,
				F = G.EnvironmentUrls.apiGatewayUrl,
				D = G.EnvironmentUrls.universalAppConfigurationApi,
				W = function() {
					return R("/account/signupredir")
				},
				z = function() {
					return R("/home")
				},
				Q = function() {
					return "".concat(O, "/v2/logout-current-session-and-reauthenticate")
				},
				X = function(e, t) {
					return R("/".concat(e.toLowerCase(), "/").concat(t))
				},
				$ = function() {
					return R("/login")
				},
				Y = function() {
					return R("/newLogin")
				},
				Z = function() {
					return R("/CreateAccount")
				},
				J = function() {
					return "".concat(D, "/v1/behaviors/intl-auth-compliance/content")
				},
				ee = function() {
					return "".concat(O, "/v2/logout")
				},
				te = function() {
					return "".concat(I, "/v1/messages/unread/count")
				},
				ne = function(e) {
					return "".concat(N, "/v1/users/").concat(e, "/currency")
				},
				re = function() {
					return "".concat(F, "/universal-app-configuration/v1/behaviors/navigation-header-ui/content")
				},
				ae = function() {
					return "".concat(U, "/v1/trades/inbound/count")
				},
				oe = function() {
					return "".concat(P, "/v1/user/friend-requests/count")
				},
				ie = function() {
					return "".concat(F, "/credit-balance/v1/get-credit-balance-for-navigation")
				},
				ce = function() {
					return "".concat(F, "/credit-balance/v1/get-conversion-metadata")
				},
				ue = function() {
					return "".concat(F, "/credit-balance/v1/get-gift-card-visibility")
				},
				le = function() {
					return "".concat(F, "/vng-payments/v1/getVngShopUrl")
				},
				se = function() {
					return "".concat(F, "/robuxbadge/v1/robuxbadge")
				},
				de = function() {
					return "".concat(F, "/universal-app-configuration/v1/behaviors/web-rename-friends/content")
				},
				fe = function() {
					var e = {
						url: te(),
						withCredentials: !0
					};
					return q.httpService.get(e)
				},
				me = function(e) {
					e = {
						url: ne(e),
						withCredentials: !0
					};
					return q.httpService.get(e)
				},
				pe = function() {
					var e = {
						url: re(),
						withCredentials: !0
					};
					return q.httpService.get(e)
				},
				ve = function() {
					var e = {
						url: ae(),
						withCredentials: !0
					};
					return q.httpService.get(e)
				},
				be = function() {
					var e = {
						url: oe(),
						withCredentials: !0
					};
					return q.httpService.get(e)
				},
				he = function() {
					var e = {
						url: ee(),
						withCredentials: !0
					};
					return q.httpService.post(e)
				},
				ge = function() {
					var e = {
						url: ie(),
						withCredentials: !0
					};
					return q.httpService.get(e)
				},
				ye = function() {
					var e = {
						url: ce(),
						withCredentials: !0
					};
					return q.httpService.get(e)
				},
				Se = function() {
					var e = {
						url: ue(),
						withCredentials: !0
					};
					return q.httpService.get(e)
				},
				Ee = function() {
					var e = {
						url: le(),
						withCredentials: !0
					};
					return q.httpService.get(e)
				},
				we = function() {
					var e = {
						url: se(),
						withCredentials: !0
					};
					return q.httpService.get(e)
				},
				Ce = function() {
					var e = {
						url: de(),
						withCredentials: !0,
						retryable: !0
					};
					return q.httpService.get(e)
				},
				xe = CoreRobloxUtilities;

			function Ae(e, t, n) {
				return t in e ? Object.defineProperty(e, t, {
					value: n,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : e[t] = n, e
			}
			var Re = xe.dataStores.userDataStore.maxFriendRequestNotificationCount,
				Oe = xe.dataStores.userDataStore.maxMessagesNotificationCount;

			function Te(e) {
				var t = e.translate,
					n = e.idSelector,
					r = e.isModal,
					a = e.name,
					o = e.iconClass,
					i = e.labelTranslationKey,
					c = e.url,
					u = e.urlForNotification,
					l = e.onClickShopLink,
					s = e.friendsData,
					d = e.messagesData,
					f = e.tradeData,
					m = e.blankTarget,
					e = (Ae(e = {}, H.scrollListItems.friends.name, s), Ae(e, H.scrollListItems.messages.name, d), Ae(e, H.scrollListItems.trade.name, f), e)[a],
					c = null != e && e.count ? u : c,
					m = m ? "_blank" : "_self";
				return r ? B().createElement("li", {
					key: a
				}, B().createElement("button", {
					id: n,
					type: "button",
					onClick: l,
					className: "dynamic-overflow-container text-nav"
				}, B().createElement("div", null, B().createElement("span", {
					className: o
				})), B().createElement("span", {
					className: "font-header-2 dynamic-ellipsis-item",
					title: t(i)
				}, t(i)))) : B().createElement("li", {
					key: a
				}, B().createElement(A.Link, {
					url: c,
					id: n,
					className: "dynamic-overflow-container text-nav",
					target: m
				}, B().createElement("div", null, B().createElement("span", {
					className: o
				})), B().createElement("span", {
					className: "font-header-2 dynamic-ellipsis-item",
					title: t(i)
				}, t(i)), e && 0 < e.count && B().createElement("div", {
					className: "dynamic-width-item align-right"
				}, B().createElement("span", {
					className: "notification-blue notification",
					title: q.numberFormat.getNumberFormat(e.count)
				}, function(e, t) {
					if (e === H.scrollListItems.friends.name && Re <= t) return "".concat(Re, "+");
					if (e === H.scrollListItems.messages.name && Oe <= t) return "".concat(Oe, "+");
					return q.abbreviateNumber.getTruncValue(t, 1e3)
				}(a, e.count)))))
			}
			Te.defaultProps = {
				idSelector: "",
				url: "",
				urlForNotification: "",
				isModal: !1,
				blankTarget: !1,
				friendsData: {
					count: 0
				},
				messagesData: {
					count: 0
				},
				tradeData: {
					count: 0
				}
			}, Te.propTypes = {
				idSelector: f().string,
				translate: f().func.isRequired,
				isModal: f().bool,
				name: f().string.isRequired,
				iconClass: f().string.isRequired,
				labelTranslationKey: f().string.isRequired,
				url: f().string,
				urlForNotification: f().string,
				onClickShopLink: f().func.isRequired,
				blankTarget: f().bool,
				friendsData: f().shape({
					count: f().number
				}),
				messagesData: f().shape({
					count: f().number
				}),
				tradeData: f().shape({
					count: f().number
				})
			};
			var Ne = Te;

			function Ie(e, t) {
				return function(e) {
					if (Array.isArray(e)) return e
				}(e) || function(e, t) {
					if ("undefined" == typeof Symbol || !(Symbol.iterator in Object(e))) return;
					var n = [],
						r = !0,
						a = !1,
						o = void 0;
					try {
						for (var i, c = e[Symbol.iterator](); !(r = (i = c.next()).done) && (n.push(i.value), !t || n.length !== t); r = !0);
					} catch (e) {
						a = !0, o = e
					} finally {
						try {
							r || null == c.return || c.return()
						} finally {
							if (a) throw o
						}
					}
					return n
				}(e, t) || Pe(e, t) || function() {
					throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
				}()
			}

			function Ue(e) {
				return function(e) {
					if (Array.isArray(e)) return Le(e)
				}(e) || function(e) {
					if ("undefined" != typeof Symbol && Symbol.iterator in Object(e)) return Array.from(e)
				}(e) || Pe(e) || function() {
					throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
				}()
			}

			function Pe(e, t) {
				if (e) {
					if ("string" == typeof e) return Le(e, t);
					var n = Object.prototype.toString.call(e).slice(8, -1);
					return "Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n ? Array.from(e) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? Le(e, t) : void 0
				}
			}

			function Le(e, t) {
				(null == t || t > e.length) && (t = e.length);
				for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
				return r
			}

			function ke() {
				return document.getElementById("navigation-container")
			}(d = xe.eventStreamService.eventTypes).pageLoad, f().func.isRequired, f().instanceOf(Array);
			var _e = H.universalSearchUrls,
				je = H.newUniversalSearchUrls,
				Fe = H.avatarSearchLink,
				De = !L.authenticatedUser.isAuthenticated,
				m = function() {
					return Promise.resolve(0)
				},
				Me = function(e) {
					G.EventStream && G.EventStream.SendEventWithTarget(e, "click", {}, G.EventStream.TargetTypes.WWW)
				},
				Be = function(e) {
					if (De || !G.RealTime) return function() {};
					document.addEventListener(i.requestCountChanged, e);
					var t = G.RealTime.Factory.GetClient();
					return t.Subscribe(i.friendshipNotifications, e),
						function() {
							document.removeEventListener(i.requestCountChanged, e), t.Unsubscribe(i.friendshipNotifications, e)
						}
				},
				qe = function(e) {
					return De || !G.RealTime ? function() {} : (document.addEventListener(c, e), function() {
						document.removeEventListener(c, e)
					})
				},
				Ge = function() {
					var e;
					return null !== (e = (null === (e = window) || void 0 === e ? void 0 : e.innerWidth) < 543) && e
				},
				Ve = function() {
					var e = Ue(_e);
					return e.sort(function(e) {
						return e.pageSort.reduce(function(e, t) {
							return e || -1 < window.location.href.indexOf(t)
						}, !1) ? -1 : 1
					}), e
				},
				Ke = function() {
					var e = Ue(je),
						t = e.filter(function(e) {
							return e.pageSort.some(function(e) {
								return -1 < window.location.pathname.indexOf(e)
							})
						}),
						e = e.filter(function(e) {
							return e.pageSort.every(function(e) {
								return -1 === window.location.pathname.indexOf(e)
							})
						});
					return [].concat(Ue(t), Ue(e))
				},
				He = function() {
					return Fe.pageSort.some(function(e) {
						return -1 < window.location.pathname.indexOf(e)
					})
				},
				We = function() {
					return document.getElementById("navigation-container") && document.getElementById("navigation-container").className
				},
				ze = function(e) {
					var n = {};
					return ("?" === e[0] ? e.substr(1) : e).split("&").forEach(function(e) {
						var t;
						e.includes("=") && (e = (t = Ie(e.split("="), 2))[0], t = t[1], n[null === (e = decodeURIComponent(e)) || void 0 === e ? void 0 : e.toLowerCase()] = decodeURIComponent(t))
					}), n
				},
				x = G.EnvironmentUrls.apiGatewayUrl,
				w = G.EnvironmentUrls.apiGatewayCdnUrl,
				Qe = (G.EnvironmentUrls.localeApi, {
					debounceTimeout: 100,
					debouncedSearchInputMaxLength: 35,
					expiryTimeout: 5e3,
					variationId: 1,
					trendingVariationId: 0,
					avatarAutocompleteQueryPaddingAmount: 10,
					requestSuggestionUrl: {
						url: x + "/games-autocomplete/v1/request-suggestion",
						withCredentials: !0
					},
					getSuggestionUrl: {
						url: x + "/games-autocomplete/v1/get-suggestion/",
						withCredentials: !0
					},
					avatarRequestSuggestionUrl: {
						url: x + "/autocomplete-avatar/v2/suggest",
						withCredentials: !0
					},
					avatarRequestSuggestionCdnUrl: {
						url: w + "/autocomplete-avatar/v2/suggest",
						withCredentials: !0
					},
					englishLanguageCode: "en",
					avatarAutocompleteUrlLocations: ["Catalog", "Trades", "Inventory", "Avatar", "CatalogItem"],
					avatarAutocompleteSuggestionLimit: 5,
					isSpecialTreatmentAutocompleteRestricted: function() {
						return 7 === parseInt(ke().dataset.numberOfAutocompleteSuggestions, 10) && H.miscSearchLink.reduce(function(e, t) {
							return e.push.apply(e, t.pageSort), e
						}, []).reduce(function(e, t) {
							return e || -1 < window.location.pathname.indexOf(t)
						}, !1)
					},
					isSpecialTreatment: function() {
						var e;
						return 7 === parseInt(null === (e = ke()) || void 0 === e ? void 0 : e.dataset.numberOfAutocompleteSuggestions, 10)
					},
					numberOfSpecialTreatmentAutocompleteSuggestions: 3,
					isAutocompleteSuggestionsIXPTestEnabled: function() {
						var e;
						return 0 < parseInt(null === (e = ke()) || void 0 === e ? void 0 : e.dataset.numberOfAutocompleteSuggestions, 10)
					},
					numberOfAutocompleteSuggestions: function() {
						var e;
						return parseInt(null === (e = ke()) || void 0 === e ? void 0 : e.dataset.numberOfAutocompleteSuggestions, 10) || 0
					}
				}),
				b = Ho(857),
				E = Ho.n(b),
				C = Ho(371),
				g = Ho.n(C),
				h = Ho(613),
				X = Ho.n(h),
				d = Ho(485),
				a = Ho.n(d),
				x = Ho(127),
				w = Ho.n(x),
				b = Ho(685),
				C = Ho.n(b),
				h = Ho(524),
				d = Ho.n(h),
				x = Ho(310),
				Xe = Ho.n(x),
				b = Ho(58),
				h = Ho.n(b),
				x = Ho(15),
				b = Ho.n(x),
				x = Ho(286),
				x = Ho.n(x),
				$e = {
					vi_vn: E(),
					tr_tr: g(),
					pt_br: X(),
					pl_pl: a(),
					ja_jp: w(),
					fr_fr: C(),
					es_es: d(),
					en_us: Xe(),
					zh_tw: h(),
					zh_cn: b(),
					ar_001: x()
				},
				Ye = function() {
					var e;
					return null !== (e = ke()) && void 0 !== e && e.dataset.platformEventLeftNavEntryStartTime ? new Date(Date.parse("".concat(null === (e = ke()) || void 0 === e ? void 0 : e.dataset.platformEventLeftNavEntryStartTime, " UTC"))) : new Date("01/01/2001")
				},
				Ze = function() {
					var e;
					return null !== (e = ke()) && void 0 !== e && e.dataset.platformEventLeftNavEntryEndTime ? new Date(Date.parse("".concat(null === (e = ke()) || void 0 === e ? void 0 : e.dataset.platformEventLeftNavEntryEndTime, " UTC"))) : new Date("01/01/2001")
				},
				Je = function() {
					var e;
					return null !== (e = ke()) && void 0 !== e && e.dataset.platformEventLeftNavUrl ? null === (e = ke()) || void 0 === e ? void 0 : e.dataset.platformEventLeftNavUrl : ""
				},
				et = function(e) {
					return $e[e] || Xe()
				};

			function tt() {
				return (tt = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n, r = arguments[t];
						for (n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n])
					}
					return e
				}).apply(this, arguments)
			}

			function nt(t, e) {
				var n, r = Object.keys(t);
				return Object.getOwnPropertySymbols && (n = Object.getOwnPropertySymbols(t), e && (n = n.filter(function(e) {
					return Object.getOwnPropertyDescriptor(t, e).enumerable
				})), r.push.apply(r, n)), r
			}

			function rt(r) {
				for (var e = 1; e < arguments.length; e++) {
					var a = null != arguments[e] ? arguments[e] : {};
					e % 2 ? nt(Object(a), !0).forEach(function(e) {
						var t, n;
						t = r, e = a[n = e], n in t ? Object.defineProperty(t, n, {
							value: e,
							enumerable: !0,
							configurable: !0,
							writable: !0
						}) : t[n] = e
					}) : Object.getOwnPropertyDescriptors ? Object.defineProperties(r, Object.getOwnPropertyDescriptors(a)) : nt(Object(a)).forEach(function(e) {
						Object.defineProperty(r, e, Object.getOwnPropertyDescriptor(a, e))
					})
				}
				return r
			}

			function at(e, t) {
				return function(e) {
					if (Array.isArray(e)) return e
				}(e) || function(e, t) {
					if ("undefined" == typeof Symbol || !(Symbol.iterator in Object(e))) return;
					var n = [],
						r = !0,
						a = !1,
						o = void 0;
					try {
						for (var i, c = e[Symbol.iterator](); !(r = (i = c.next()).done) && (n.push(i.value), !t || n.length !== t); r = !0);
					} catch (e) {
						a = !0, o = e
					} finally {
						try {
							r || null == c.return || c.return()
						} finally {
							if (a) throw o
						}
					}
					return n
				}(e, t) || function(e, t) {
					if (!e) return;
					if ("string" == typeof e) return ot(e, t);
					var n = Object.prototype.toString.call(e).slice(8, -1);
					"Object" === n && e.constructor && (n = e.constructor.name);
					if ("Map" === n || "Set" === n) return Array.from(e);
					if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return ot(e, t)
				}(e, t) || function() {
					throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
				}()
			}

			function ot(e, t) {
				(null == t || t > e.length) && (t = e.length);
				for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
				return r
			}

			function it(e, t) {
				if (null == e) return {};
				var n, r = function(e, t) {
					if (null == e) return {};
					var n, r, a = {},
						o = Object.keys(e);
					for (r = 0; r < o.length; r++) n = o[r], 0 <= t.indexOf(n) || (a[n] = e[n]);
					return a
				}(e, t);
				if (Object.getOwnPropertySymbols)
					for (var a = Object.getOwnPropertySymbols(e), o = 0; o < a.length; o++) n = a[o], 0 <= t.indexOf(n) || Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n]);
				return r
			}
			var ct = o;

			function ut(e) {
				var t = e.translate,
					n = it(e, ["translate"]),
					r = at((0, M.useState)(!1), 2),
					a = r[0],
					o = r[1],
					i = (0, M.useCallback)(function() {
						o(function(e) {
							return !e
						}), Me(ct.clickMerchandise)
					}, []),
					c = function() {
						o(!1)
					},
					u = Object.values(H.scrollListItems).map(function(e) {
						return B().createElement(Ne, tt({
							key: e.name
						}, rt(rt({
							translate: t,
							onClickShopLink: i
						}, e), n)))
					}),
					l = B().createElement("li", {
						className: "rbx-upgrade-now"
					}, B().createElement("a", {
						href: H.upgradeButton.url,
						className: "btn-growth-md btn-secondary-md",
						onClick: function() {
							xe.paymentFlowAnalyticsService.sendUserPurchaseFlowEvent(xe.paymentFlowAnalyticsService.ENUM_TRIGGERING_CONTEXT.WEB_PREMIUM_PURCHASE, !1, xe.paymentFlowAnalyticsService.ENUM_VIEW_NAME.LEFT_NAVIGATION_BAR, xe.paymentFlowAnalyticsService.ENUM_PURCHASE_EVENT_TYPE.USER_INPUT, L.authenticatedUser.isPremiumUser ? xe.paymentFlowAnalyticsService.ENUM_VIEW_MESSAGE.PREMIUM : xe.paymentFlowAnalyticsService.ENUM_VIEW_MESSAGE.GET_PREMIUM)
						},
						id: "upgrade-now-button"
					}, t(H.upgradeButton.labelTranslationKey))),
					s = B().createElement(B().Fragment, null, B().createElement("p", {
						className: "shop-description"
					}, t("Description.RetailWebsiteRedirect")), B().createElement("p", {
						className: "shop-warning"
					}, t("Description.PurchaseAgeWarning"))),
					d = B().createElement(A.SimpleModal, {
						title: t("Heading.LeavingRoblox"),
						body: s,
						show: a,
						actionButtonShow: !0,
						actionButtonText: t("Action.Continue"),
						neutralButtonText: t("Action.Cancel"),
						onAction: function() {
							var e = decodeURIComponent(G.EnvironmentUrls.amazonWebStoreLink);
							window.open(e, "_blank"), Me(ct.goToAmazonStore)
						},
						onNeutral: c,
						onClose: c
					}),
					e = new Date,
					r = Ye(),
					s = Ze(),
					a = Je(),
					c = G.Intl && new G.Intl,
					c = et(c.getRobloxLocale()),
					c = B().createElement("a", {
						href: a,
						className: "rbx-platform-event-container"
					}, B().createElement("div", {
						className: "rbx-platform-event-header dynamic-overflow-container"
					}, B().createElement("span", {
						className: "rbx-event-icon"
					}), B().createElement("span", {
						className: "rbx-event-header-text dynamic-ellipsis-item"
					}, t("Label.sEvents"))), B().createElement("img", {
						className: "rbx-platform-event-thumbnail",
						src: c,
						alt: t("Label.TheHunt")
					}));
				return B().createElement("ul", {
					className: "left-col-list"
				}, u, l, !1, d, r < e && e < s && a && c)
			}
			ut.defaultProps = {
				sponsoredPagesData: []
			}, ut.propTypes = {
				sponsoredPagesData: f().instanceOf(Array),
				translate: f().func.isRequired
			};
			var lt = ut;

			function st(t, e) {
				var n, r = Object.keys(t);
				return Object.getOwnPropertySymbols && (n = Object.getOwnPropertySymbols(t), e && (n = n.filter(function(e) {
					return Object.getOwnPropertyDescriptor(t, e).enumerable
				})), r.push.apply(r, n)), r
			}

			function dt(r) {
				for (var e = 1; e < arguments.length; e++) {
					var a = null != arguments[e] ? arguments[e] : {};
					e % 2 ? st(Object(a), !0).forEach(function(e) {
						var t, n;
						t = r, e = a[n = e], n in t ? Object.defineProperty(t, n, {
							value: e,
							enumerable: !0,
							configurable: !0,
							writable: !0
						}) : t[n] = e
					}) : Object.getOwnPropertyDescriptors ? Object.defineProperties(r, Object.getOwnPropertyDescriptors(a)) : st(Object(a)).forEach(function(e) {
						Object.defineProperty(r, e, Object.getOwnPropertyDescriptor(a, e))
					})
				}
				return r
			}

			function ft(e, t) {
				return function(e) {
					if (Array.isArray(e)) return e
				}(e) || function(e, t) {
					if ("undefined" == typeof Symbol || !(Symbol.iterator in Object(e))) return;
					var n = [],
						r = !0,
						a = !1,
						o = void 0;
					try {
						for (var i, c = e[Symbol.iterator](); !(r = (i = c.next()).done) && (n.push(i.value), !t || n.length !== t); r = !0);
					} catch (e) {
						a = !0, o = e
					} finally {
						try {
							r || null == c.return || c.return()
						} finally {
							if (a) throw o
						}
					}
					return n
				}(e, t) || function(e, t) {
					if (!e) return;
					if ("string" == typeof e) return mt(e, t);
					var n = Object.prototype.toString.call(e).slice(8, -1);
					"Object" === n && e.constructor && (n = e.constructor.name);
					if ("Map" === n || "Set" === n) return Array.from(e);
					if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return mt(e, t)
				}(e, t) || function() {
					throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
				}()
			}

			function mt(e, t) {
				(null == t || t > e.length) && (t = e.length);
				for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
				return r
			}

			function pt(e) {
				var n = L.authenticatedUser.isAuthenticated,
					t = ft((0, M.useState)({}), 2),
					r = t[0],
					a = t[1],
					o = (c = ft((0, M.useState)({}), 2))[0],
					i = c[1],
					c = (t = ft((0, M.useState)({}), 2))[0],
					u = t[1];
				return (0, M.useEffect)(function() {
					var e = function() {},
						t = function() {};
					return n && (e = Be(function() {
							be().then(function(e) {
								e = e.data;
								a(e)
							}, function(e) {
								console.debug(e)
							})
						}), t = qe(function() {
							fe().then(function(e) {
								e = e.data;
								i(e)
							})
						}), be().then(function(e) {
							e = e.data;
							a(e)
						}, function(e) {
							console.debug(e)
						}), fe().then(function(e) {
							e = e.data;
							i(e)
						}, function(e) {
							console.debug(e)
						}), ve().then(function(e) {
							e = e.data;
							u(e)
						}, function(e) {
							console.debug(e)
						})),
						function() {
							e(), t()
						}
				}, []), B().createElement(lt, dt({
					friendsData: r,
					messagesData: o,
					tradeData: c
				}, e))
			}
			var b = L.authenticatedUser.name,
				x = L.authenticatedUser.displayName,
				vt = {
					nameForDisplay: null !== G.DisplayNames && void 0 !== G.DisplayNames && G.DisplayNames.Enabled() ? x : b,
					nameForHeader: null !== G.DisplayNames && void 0 !== G.DisplayNames && G.DisplayNames.Enabled() ? q.concatTexts.concat(["", b]) : b
				};

			function bt(e, t, n, r, a, o, i) {
				try {
					var c = e[o](i),
						u = c.value
				} catch (e) {
					return void n(e)
				}
				c.done ? t(u) : Promise.resolve(u).then(r, a)
			}

			function ht(e, t) {
				return function(e) {
					if (Array.isArray(e)) return e
				}(e) || function(e, t) {
					if ("undefined" == typeof Symbol || !(Symbol.iterator in Object(e))) return;
					var n = [],
						r = !0,
						a = !1,
						o = void 0;
					try {
						for (var i, c = e[Symbol.iterator](); !(r = (i = c.next()).done) && (n.push(i.value), !t || n.length !== t); r = !0);
					} catch (e) {
						a = !0, o = e
					} finally {
						try {
							r || null == c.return || c.return()
						} finally {
							if (a) throw o
						}
					}
					return n
				}(e, t) || function(e, t) {
					if (!e) return;
					if ("string" == typeof e) return gt(e, t);
					var n = Object.prototype.toString.call(e).slice(8, -1);
					"Object" === n && e.constructor && (n = e.constructor.name);
					if ("Map" === n || "Set" === n) return Array.from(e);
					if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return gt(e, t)
				}(e, t) || function() {
					throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
				}()
			}

			function gt(e, t) {
				(null == t || t > e.length) && (t = e.length);
				for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
				return r
			}

			function yt(e, t) {
				if (null == e) return {};
				var n, r = function(e, t) {
					if (null == e) return {};
					var n, r, a = {},
						o = Object.keys(e);
					for (r = 0; r < o.length; r++) n = o[r], 0 <= t.indexOf(n) || (a[n] = e[n]);
					return a
				}(e, t);
				if (Object.getOwnPropertySymbols)
					for (var a = Object.getOwnPropertySymbols(e), o = 0; o < a.length; o++) n = a[o], 0 <= t.indexOf(n) || Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n]);
				return r
			}

			function St(e) {
				var t = e.isLeftNavOpen,
					n = yt(e, ["isLeftNavOpen"]),
					r = ht((0, M.useState)(!1), 2),
					e = r[0],
					a = r[1],
					o = (0, M.useRef)(null),
					r = ht((0, M.useState)(null), 2),
					i = r[0],
					c = r[1],
					u = H.friendsRenamedToConnectionsCacheKey;
				(0, M.useEffect)(function() {
					null !== i && (localStorage.setItem(u, i), H.scrollListItems.friends.labelTranslationKey = i ? H.scrollListItems.friends.labelConnectionsTranslationKey : H.scrollListItems.friends.labelFriendsTranslationKey)
				}, [i]), (0, M.useEffect)(function() {
					(function() {
						var c, e = (c = regeneratorRuntime.mark(function e() {
							return regeneratorRuntime.wrap(function(e) {
								for (;;) switch (e.prev = e.next) {
									case 0:
										e.next = 4;
										break;
									case 4:
										return e.prev = 4, e.next = 7, (0, v.robloxBadgesReadyForRender)();
									case 7:
										e.sent && a((0, v.currentUserHasVerifiedBadge)()), e.next = 14;
										break;
									case 11:
										e.prev = 11, e.t0 = e.catch(4), a(!1);
									case 14:
									case "end":
										return e.stop()
								}
							}, e, null, [
								[4, 11]
							])
						}), function() {
							var e = this,
								i = arguments;
							return new Promise(function(t, n) {
								var r = c.apply(e, i);

								function a(e) {
									bt(r, t, n, a, o, "next", e)
								}

								function o(e) {
									bt(r, t, n, a, o, "throw", e)
								}
								a(void 0)
							})
						});
						return function() {
							return e.apply(this, arguments)
						}
					})()().catch(function() {})
				}, [t, o]), (0, M.useEffect)(function() {
					Ce().then(function(e) {
						var t;
						void 0 !== (null == e || null === (t = e.data) || void 0 === t ? void 0 : t.renameFriendsToConnections) && c(e.data.renameFriendsToConnections)
					})
				}, []);
				r = e && v.VerifiedBadgeIconContainer ? B().createElement("section", {
					ref: function(e) {
						o.current = e
					}
				}, B().createElement(v.VerifiedBadgeIconContainer, {
					overrideImgClass: "verified-badge-icon-header",
					size: v.BadgeSizes.CAPTIONHEADER
				})) : null, t = T()("rbx-left-col", {
					"nav-show": t
				}), e = T()("font-header-2 dynamic-ellipsis-item", {
					"verified-badge-left-nav": e
				});
				return B().createElement("div", {
					id: "navigation",
					className: t
				}, B().createElement("ul", null, B().createElement("li", {
					key: "username"
				}, B().createElement(A.Link, {
					className: "dynamic-overflow-container text-nav",
					role: "link",
					url: H.scrollListItems.profile.url
				}, B().createElement("span", {
					className: "avatar avatar-headshot-xs"
				}, B().createElement(p.Thumbnail2d, {
					containerClass: "avatar-card-image",
					targetId: L.authenticatedUser.id,
					type: p.ThumbnailTypes.avatarHeadshot,
					altName: L.authenticatedUser.name
				})), B().createElement("div", {
					className: e
				}, vt.nameForDisplay), r)), B().createElement("li", {
					key: "divider",
					className: "rbx-divider"
				})), B().createElement(A.ScrollBar, {
					className: "rbx-scrollbar"
				}, B().createElement(pt, n)))
			}
			St.propTypes = {
				isLeftNavOpen: f().bool.isRequired
			};
			var Et = St;

			function wt(t, e) {
				var n, r = Object.keys(t);
				return Object.getOwnPropertySymbols && (n = Object.getOwnPropertySymbols(t), e && (n = n.filter(function(e) {
					return Object.getOwnPropertyDescriptor(t, e).enumerable
				})), r.push.apply(r, n)), r
			}

			function Ct(r) {
				for (var e = 1; e < arguments.length; e++) {
					var a = null != arguments[e] ? arguments[e] : {};
					e % 2 ? wt(Object(a), !0).forEach(function(e) {
						var t, n;
						t = r, e = a[n = e], n in t ? Object.defineProperty(t, n, {
							value: e,
							enumerable: !0,
							configurable: !0,
							writable: !0
						}) : t[n] = e
					}) : Object.getOwnPropertyDescriptors ? Object.defineProperties(r, Object.getOwnPropertyDescriptors(a)) : wt(Object(a)).forEach(function(e) {
						Object.defineProperty(r, e, Object.getOwnPropertyDescriptor(a, e))
					})
				}
				return r
			}

			function xt(e, t) {
				return function(e) {
					if (Array.isArray(e)) return e
				}(e) || function(e, t) {
					if ("undefined" == typeof Symbol || !(Symbol.iterator in Object(e))) return;
					var n = [],
						r = !0,
						a = !1,
						o = void 0;
					try {
						for (var i, c = e[Symbol.iterator](); !(r = (i = c.next()).done) && (n.push(i.value), !t || n.length !== t); r = !0);
					} catch (e) {
						a = !0, o = e
					} finally {
						try {
							r || null == c.return || c.return()
						} finally {
							if (a) throw o
						}
					}
					return n
				}(e, t) || function(e, t) {
					if (!e) return;
					if ("string" == typeof e) return At(e, t);
					var n = Object.prototype.toString.call(e).slice(8, -1);
					"Object" === n && e.constructor && (n = e.constructor.name);
					if ("Map" === n || "Set" === n) return Array.from(e);
					if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return At(e, t)
				}(e, t) || function() {
					throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
				}()
			}

			function At(e, t) {
				(null == t || t > e.length) && (t = e.length);
				for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
				return r
			}
			var Rt, Ot = u,
				Tt = (0, V.withTranslations)(function(e) {
					var t = L.authenticatedUser.isAuthenticated,
						n = xt((0, M.useState)(!1), 2),
						r = n[0],
						a = n[1],
						o = (0, M.useCallback)(function() {
							a(!r)
						}, [r]);
					return (0, M.useEffect)(function() {
						return document.addEventListener(Ot.name, o),
							function() {
								document.removeEventListener(Ot.name, o)
							}
					}, [o]), t ? B().createElement(Et, Ct({
						isLeftNavOpen: r
					}, e)) : null
				}, s),
				Nt = window.EventTracker ? EventTracker : {
					fireEvent: console.log,
					start: console.log,
					endSuccess: console.log,
					endCancel: console.log,
					endFailure: console.log
				},
				It = function() {
					return (It = Object.assign || function(e) {
						for (var t, n = 1, r = arguments.length; n < r; n++)
							for (var a in t = arguments[n]) Object.prototype.hasOwnProperty.call(t, a) && (e[a] = t[a]);
						return e
					}).apply(this, arguments)
				},
				Ut = function(e, i, c, u) {
					return new(c = c || Promise)(function(n, t) {
						function r(e) {
							try {
								o(u.next(e))
							} catch (e) {
								t(e)
							}
						}

						function a(e) {
							try {
								o(u.throw(e))
							} catch (e) {
								t(e)
							}
						}

						function o(e) {
							var t;
							e.done ? n(e.value) : ((t = e.value) instanceof c ? t : new c(function(e) {
								e(t)
							})).then(r, a)
						}
						o((u = u.apply(e, i || [])).next())
					})
				},
				Pt = function(n, r) {
					var a, o, i, c = {
							label: 0,
							sent: function() {
								if (1 & i[0]) throw i[1];
								return i[1]
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
								if (a) throw new TypeError("Generator is already executing.");
								for (; c;) try {
									if (a = 1, o && (i = 2 & t[0] ? o.return : t[0] ? o.throw || ((i = o.return) && i.call(o), 0) : o.next) && !(i = i.call(o, t[1])).done) return i;
									switch (o = 0, i && (t = [2 & t[0], i.value]), t[0]) {
										case 0:
										case 1:
											i = t;
											break;
										case 4:
											return c.label++, {
												value: t[1],
												done: !1
											};
										case 5:
											c.label++, o = t[1], t = [0];
											continue;
										case 7:
											t = c.ops.pop(), c.trys.pop();
											continue;
										default:
											if (!(i = 0 < (i = c.trys).length && i[i.length - 1]) && (6 === t[0] || 2 === t[0])) {
												c = 0;
												continue
											}
											if (3 === t[0] && (!i || t[1] > i[0] && t[1] < i[3])) {
												c.label = t[1];
												break
											}
											if (6 === t[0] && c.label < i[1]) {
												c.label = i[1], i = t;
												break
											}
											if (i && c.label < i[2]) {
												c.label = i[2], c.ops.push(t);
												break
											}
											i[2] && c.ops.pop(), c.trys.pop();
											continue
									}
									t = r.call(n, c)
								} catch (e) {
									t = [6, e], o = 0
								} finally {
									a = i = 0
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
				Lt = q.httpService.createCancelToken();

			function kt(e) {
				return void 0 === (null == e ? void 0 : e.label)
			}

			function _t(e) {
				return void 0 !== (null == e ? void 0 : e.Query)
			}

			function jt(e) {
				if (_t(e)) return "avatar";
				switch (e.type) {
					case Rt.QuerySuggestion:
						return "keyword";
					case Rt.GameSuggestion:
						return "game";
					default:
						throw Error("Unrecognized autocomplete suggestion, ".concat(JSON.stringify(e)))
				}
			}

			function Ft(e) {
				switch (e.label) {
					case "Label.Players":
						return "defaultPlayers";
					case "Heading.Marketplace":
					case "Label.AvatarShop":
					case "Label.sCatalog":
						return "defaultShops";
					case "Label.sGroups":
						return "defaultGroups";
					case "Label.CreatorStore":
						return "defaultLibrary";
					case "Label.Experience":
						return "defaultGames";
					default:
						throw Error("Unrecognized default suggestion, ".concat(JSON.stringify(e)))
				}
			}(o = Rt = Rt || {})[o.GameSuggestion = 0] = "GameSuggestion", o[o.QuerySuggestion = 1] = "QuerySuggestion", o[o.TrendingQuerySuggestion = 2] = "TrendingQuerySuggestion";
			var Dt = function(t) {
					return Ut(void 0, void 0, Promise, function() {
						return Pt(this, function(e) {
							switch (e.label) {
								case 0:
									return Lt.cancel(), Lt = q.httpService.createCancelToken(), [4, q.httpService.get(It(It({}, Qe.getSuggestionUrl), {
										url: Qe.getSuggestionUrl.url + encodeURIComponent(t.toLowerCase()),
										cancelToken: Lt.token
									}))];
								case 1:
									return [2, e.sent().data]
							}
						})
					})
				},
				Mt = function(n, r, a, o, i) {
					return void 0 === i && (i = !1), Ut(void 0, void 0, Promise, function() {
						var t;
						return Pt(this, function(e) {
							switch (e.label) {
								case 0:
									return null === (t = r) && (t = Qe.englishLanguageCode), t = {
										prefix: n.toLowerCase(),
										limit: a,
										lang: t,
										q: o
									}, Lt.cancel(), Lt = q.httpService.createCancelToken(), i ? [4, q.httpService.get(It(It({}, Qe.avatarRequestSuggestionUrl), {
										timeout: Qe.expiryTimeout,
										cancelToken: Lt.token,
										fullError: !0
									}), t)] : [3, 2];
								case 1:
									return [2, e.sent().data];
								case 2:
									return [4, q.httpService.get(It(It({}, Qe.avatarRequestSuggestionCdnUrl), {
										timeout: Qe.expiryTimeout,
										cancelToken: Lt.token,
										fullError: !0
									}), t)];
								case 3:
									return [2, e.sent().data]
							}
						})
					})
				},
				Bt = kt,
				qt = _t,
				Gt = jt,
				Vt = Ft,
				Kt = function(e, t) {
					var n;
					return kt(e) && _t(e) ? H.avatarSearchLink.url + encodeURIComponent(e.Query) : kt(e) ? H.gameSearchLink.url + encodeURIComponent(e.searchQuery) : null != t && null !== (n = t.target) && void 0 !== n && n.value ? e.url + encodeURIComponent(t.target.value) : ""
				},
				Ht = function() {
					var e = (new G.TranslationResourceProvider).intl.locale,
						t = e.indexOf("-");
					return (e = e.substring(0, -1 !== t ? t : e.length)) !== Qe.englishLanguageCode && (e += ",".concat(Qe.englishLanguageCode)), e
				},
				Wt = function(e, t) {
					return e.map(function(e) {
						return kt(e) ? "".concat(jt(e), "|").concat(e.searchQuery) : "".concat(Ft(e), "|").concat(t)
					}).join(",")
				},
				zt = xe.eventStreamService.eventTypes,
				Qt = "searchAutocomplete",
				o = q.uuidService.generateRandomUuid,
				Xt = {
					contexts: {
						searchAutocomplete: Qt,
						searchLandingPage: "searchLandingPage"
					},
					actionTypes: {
						open: "open",
						submit: "submit",
						close: "close",
						cancel: "cancel"
					},
					generateSessionInfo: o,
					searchTextTrim: function(e, t, n, r) {
						return [{
							name: "searchTextTrim",
							type: zt.formInteraction,
							context: Qt
						}, {
							kwd: e,
							resultingKwd: t,
							searchType: n,
							sessionInfo: r
						}]
					},
					searchClear: function(e, t, n, r) {
						return [{
							name: "searchClear",
							type: zt.formInteraction,
							context: Qt
						}, {
							kwd: e,
							searchType: t,
							sessionInfo: n,
							page: r
						}]
					},
					searchSuggestionClicked: function(e, t, n, r, a, o, i) {
						return [{
							name: "searchSuggestionClicked",
							type: zt.formInteraction,
							context: Qt
						}, {
							kwd: e,
							searchType: t,
							suggestionPosition: n,
							suggestionClicked: r,
							suggestionType: a,
							suggestions: o,
							sessionInfo: i
						}]
					},
					searchAutocomplete: function(e, t, n, r, a, o, i, c, u, l) {
						return [{
							name: "searchAutocomplete",
							type: zt.formInteraction,
							context: Qt
						}, {
							kwd: e,
							previousKwd: t,
							fromLocalCache: n,
							suggestions: r,
							algorithm: a,
							latency: o,
							timeoutDelayMs: i,
							sessionInfo: c,
							page: u,
							isPersonalizedBasedOnPreviousQuery: l
						}]
					},
					search: function(e, t, n, r, a) {
						return [{
							name: "search",
							type: zt.formInteraction,
							context: t
						}, {
							kwd: e,
							actionType: n,
							sessionInfo: r,
							searchLandingPageSessionInfo: a
						}]
					},
					catalogSearch: function(e, t) {
						return [{
							name: "catalogSearch",
							type: zt.formInteraction,
							context: Qt
						}, {
							autocompleteFlag: e,
							previousPage: t
						}]
					}
				};

			function $t(e) {
				return function(e) {
					if (Array.isArray(e)) return Jt(e)
				}(e) || function(e) {
					if ("undefined" != typeof Symbol && Symbol.iterator in Object(e)) return Array.from(e)
				}(e) || Zt(e) || function() {
					throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
				}()
			}

			function Yt(e, t) {
				return function(e) {
					if (Array.isArray(e)) return e
				}(e) || function(e, t) {
					if ("undefined" == typeof Symbol || !(Symbol.iterator in Object(e))) return;
					var n = [],
						r = !0,
						a = !1,
						o = void 0;
					try {
						for (var i, c = e[Symbol.iterator](); !(r = (i = c.next()).done) && (n.push(i.value), !t || n.length !== t); r = !0);
					} catch (e) {
						a = !0, o = e
					} finally {
						try {
							r || null == c.return || c.return()
						} finally {
							if (a) throw o
						}
					}
					return n
				}(e, t) || Zt(e, t) || function() {
					throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
				}()
			}

			function Zt(e, t) {
				if (e) {
					if ("string" == typeof e) return Jt(e, t);
					var n = Object.prototype.toString.call(e).slice(8, -1);
					return "Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n ? Array.from(e) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? Jt(e, t) : void 0
				}
			}

			function Jt(e, t) {
				(null == t || t > e.length) && (t = e.length);
				for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
				return r
			}

			function en(e) {
				var o = e.translate,
					i = e.searchInput,
					c = e.indexOfSelectedOption,
					u = e.autocompleteSessionInfo,
					l = e.resetSessionInfo,
					s = Ve();
				return B().createElement(B().Fragment, null, Object.entries(s).map(function(e) {
					var t = Yt(e, 2),
						n = t[0],
						r = t[1],
						a = r.url,
						e = r.label,
						t = T()("navbar-search-option rbx-clickable-li", parseInt(n, 10) === c ? " selected" : "");
					return B().createElement("li", {
						key: n,
						className: t
					}, B().createElement(A.Link, {
						className: "navbar-search-anchor",
						url: a + i,
						onClick: function() {
							xe.eventStreamService.sendEvent.apply(xe.eventStreamService, $t(Xt.searchSuggestionClicked(i, void 0, n, i, Vt(r), Wt(s, i), u))), l()
						}
					}, o("Label.sSearchPhrase", {
						phrase: i,
						location: o(e)
					})))
				}))
			}
			en.propTypes = {
				translate: f().func.isRequired,
				searchInput: f().string.isRequired,
				indexOfSelectedOption: f().number.isRequired,
				autocompleteSessionInfo: f().string.isRequired,
				resetSessionInfo: f().func.isRequired
			};
			var tn = en;

			function nn(e, t) {
				return function(e) {
					if (Array.isArray(e)) return e
				}(e) || function(e, t) {
					if ("undefined" == typeof Symbol || !(Symbol.iterator in Object(e))) return;
					var n = [],
						r = !0,
						a = !1,
						o = void 0;
					try {
						for (var i, c = e[Symbol.iterator](); !(r = (i = c.next()).done) && (n.push(i.value), !t || n.length !== t); r = !0);
					} catch (e) {
						a = !0, o = e
					} finally {
						try {
							r || null == c.return || c.return()
						} finally {
							if (a) throw o
						}
					}
					return n
				}(e, t) || function(e, t) {
					if (!e) return;
					if ("string" == typeof e) return rn(e, t);
					var n = Object.prototype.toString.call(e).slice(8, -1);
					"Object" === n && e.constructor && (n = e.constructor.name);
					if ("Map" === n || "Set" === n) return Array.from(e);
					if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return rn(e, t)
				}(e, t) || function() {
					throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
				}()
			}

			function rn(e, t) {
				(null == t || t > e.length) && (t = e.length);
				for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
				return r
			}
			var an = H.gameSearchLink,
				on = H.avatarSearchLink,
				cn = H.creatorStoreUrl;

			function un(e) {
				var t = e.translate,
					n = e.selected,
					r = e.suggestion,
					a = e.onClick,
					o = T()("navbar-search-option rbx-clickable-li", {
						"new-selected": n
					}),
					i = r.type,
					c = r.universeId,
					e = r.searchQuery,
					n = nn((0, M.useState)(!1), 2),
					r = n[0],
					u = n[1];
				return i === Rt.GameSuggestion ? B().createElement("li", {
					className: o
				}, B().createElement(A.Link, {
					className: "new-navbar-search-anchor",
					url: an.url + encodeURIComponent(e),
					onClick: a
				}, B().createElement("span", {
					className: T()(an.icon, "navbar-list-option-icon")
				}), B().createElement("span", {
					className: "navbar-list-option-text"
				}, e), B().createElement("span", {
					className: "navbar-list-option-suffix"
				}, t("Label.sSearchPhraseV2", {
					location: t(an.label)
				})), B().createElement("span", {
					className: T()("navbar-list-option-thumbnail", {
						"navbar-list-option-thumbnail-visible": r
					})
				}, B().createElement("span", {
					className: "background-icon"
				}), B().createElement(p.Thumbnail2d, {
					type: p.ThumbnailTypes.gameIcon,
					size: p.DefaultThumbnailSize,
					targetId: c,
					containerClass: "thumbnail-icon",
					format: p.ThumbnailFormat.jpeg,
					onLoad: function() {
						u(!0)
					}
				})))) : B().createElement("li", {
					className: o
				}, B().createElement(A.Link, {
					className: "new-navbar-search-anchor",
					url: an.url + encodeURIComponent(e),
					onClick: a
				}, B().createElement("span", {
					className: T()(an.icon, "navbar-list-option-icon")
				}), B().createElement("span", {
					className: "navbar-list-option-text"
				}, e), B().createElement("span", {
					className: "navbar-list-option-suffix"
				}, t("Label.sSearchPhraseV2", {
					location: t(an.label)
				}))))
			}

			function ln(e) {
				var t = e.translate,
					n = e.selected,
					r = e.suggestion,
					e = e.onClick,
					n = T()("navbar-search-option rbx-clickable-li", {
						"new-selected": n
					}),
					r = r.Query;
				return B().createElement("li", {
					className: n
				}, B().createElement(A.Link, {
					className: "new-navbar-search-anchor",
					url: on.url + encodeURIComponent(r),
					onClick: e
				}, B().createElement("span", {
					className: T()(on.icon, "navbar-list-option-icon")
				}), B().createElement("span", {
					className: "navbar-list-option-text"
				}, r), B().createElement("span", {
					className: "navbar-list-option-suffix"
				}, t("Label.sSearchPhraseV2", {
					location: t(on.label)
				}))))
			}

			function sn(e) {
				var t = e.translate,
					n = e.selected,
					r = e.searchInput,
					a = e.suggestion,
					o = e.onClick,
					i = a.url,
					e = a.label,
					a = a.icon,
					i = "Label.CreatorStore" === e ? cn : i,
					n = T()("navbar-search-option rbx-clickable-li", {
						"new-selected": n
					});
				return B().createElement("li", {
					className: n
				}, B().createElement(A.Link, {
					className: "new-navbar-search-anchor",
					url: i + encodeURIComponent(r),
					onClick: o
				}, B().createElement("span", {
					className: T()(a, "navbar-list-option-icon")
				}), B().createElement("span", {
					className: "navbar-list-option-text"
				}, r.toLowerCase()), B().createElement("span", {
					className: "navbar-list-option-suffix"
				}, t("Label.sSearchPhraseV2", {
					location: t(e)
				}))))
			}

			function dn(e) {
				return function(e) {
					if (Array.isArray(e)) return fn(e)
				}(e) || function(e) {
					if ("undefined" != typeof Symbol && Symbol.iterator in Object(e)) return Array.from(e)
				}(e) || function(e, t) {
					if (!e) return;
					if ("string" == typeof e) return fn(e, t);
					var n = Object.prototype.toString.call(e).slice(8, -1);
					"Object" === n && e.constructor && (n = e.constructor.name);
					if ("Map" === n || "Set" === n) return Array.from(e);
					if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return fn(e, t)
				}(e) || function() {
					throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
				}()
			}

			function fn(e, t) {
				(null == t || t > e.length) && (t = e.length);
				for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
				return r
			}

			function mn(e) {
				function r(t, n) {
					return function() {
						var e = c[n];
						xe.eventStreamService.sendEvent.apply(xe.eventStreamService, dn(Xt.searchSuggestionClicked(o, void 0, n, Bt(e) ? e.searchQuery : o, t, Wt(c, o), u))), l();
						e = t.includes("default") ? 0 : 1;
						xe.eventStreamService.sendEvent.apply(xe.eventStreamService, dn(Xt.catalogSearch(e, q.pageName.PageNameProvider.getInternalPageName())))
					}
				}
				var a = e.translate,
					o = e.searchInput,
					i = e.indexOfSelectedOption,
					c = e.searchSuggestions,
					u = e.autocompleteSessionInfo,
					l = e.resetSessionInfo;
				return c.map(function(e, t) {
					var n = parseInt(t, 10) === i;
					return Bt(e) && qt(e) ? B().createElement(ln, {
						key: e.Query,
						translate: a,
						selected: n,
						suggestion: e,
						onClick: r(Gt(e), t)
					}) : Bt(e) ? B().createElement(un, {
						key: e.searchQuery,
						translate: a,
						selected: n,
						suggestion: e,
						onClick: r(Gt(e), t)
					}) : B().createElement(sn, {
						key: e.url,
						translate: a,
						selected: n,
						suggestion: e,
						searchInput: o,
						onClick: r(Vt(e), t)
					})
				})
			}
			un.propTypes = {
				translate: f().func.isRequired,
				selected: f().bool.isRequired,
				suggestion: f().shape({
					type: f().number.isRequired,
					score: f().number.isRequired,
					universeId: f().number,
					canonicalTitle: f().string,
					thumbnailUrl: f().string,
					searchQuery: f().string.isRequired,
					trendingSearchStartDateTime: f().string
				}).isRequired,
				onClick: f().func.isRequired
			}, ln.propTypes = {
				translate: f().func.isRequired,
				selected: f().bool.isRequired,
				suggestion: f().shape({
					Query: f().string
				}).isRequired,
				onClick: f().func.isRequired
			}, sn.propTypes = {
				translate: f().func.isRequired,
				selected: f().bool.isRequired,
				searchInput: f().string.isRequired,
				suggestion: f().shape({
					url: f().string.isRequired,
					label: f().string.isRequired,
					pageSort: f().arrayOf(f().string).isRequired,
					icon: f().string.isRequired
				}).isRequired,
				onClick: f().func.isRequired
			}, mn.propTypes = {
				translate: f().func.isRequired,
				searchInput: f().string.isRequired,
				indexOfSelectedOption: f().number.isRequired,
				searchSuggestions: f().arrayOf(f().oneOfType([f().shape({
					type: f().number.isRequired,
					score: f().number.isRequired,
					universeId: f().number.isRequired,
					canonicalTitle: f().string,
					thumbnailUrl: f().string,
					searchQuery: f().string.isRequired,
					trendingSearchStartDateTime: f().string
				}), f().shape({
					url: f().string.isRequired,
					label: f().string.isRequired,
					pageSort: f().arrayOf(f().string).isRequired,
					icon: f().string.isRequired
				}), f().shape({
					Query: f().string.isRequired,
					Score: f().number.isRequired
				})])).isRequired,
				autocompleteSessionInfo: f().string.isRequired,
				resetSessionInfo: f().func.isRequired
			};
			var pn = mn;

			function vn(e) {
				return function(e) {
					if (Array.isArray(e)) return gn(e)
				}(e) || function(e) {
					if ("undefined" != typeof Symbol && Symbol.iterator in Object(e)) return Array.from(e)
				}(e) || hn(e) || function() {
					throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
				}()
			}

			function bn(e, t) {
				return function(e) {
					if (Array.isArray(e)) return e
				}(e) || function(e, t) {
					if ("undefined" == typeof Symbol || !(Symbol.iterator in Object(e))) return;
					var n = [],
						r = !0,
						a = !1,
						o = void 0;
					try {
						for (var i, c = e[Symbol.iterator](); !(r = (i = c.next()).done) && (n.push(i.value), !t || n.length !== t); r = !0);
					} catch (e) {
						a = !0, o = e
					} finally {
						try {
							r || null == c.return || c.return()
						} finally {
							if (a) throw o
						}
					}
					return n
				}(e, t) || hn(e, t) || function() {
					throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
				}()
			}

			function hn(e, t) {
				if (e) {
					if ("string" == typeof e) return gn(e, t);
					var n = Object.prototype.toString.call(e).slice(8, -1);
					return "Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n ? Array.from(e) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? gn(e, t) : void 0
				}
			}

			function gn(e, t) {
				(null == t || t > e.length) && (t = e.length);
				for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
				return r
			}

			function yn(e) {
				var t = e.translate,
					n = e.searchInput,
					r = e.isMenuOpen,
					a = e.handleSearchOpenOrInputChange,
					o = e.closeMenu,
					i = e.setIsMenuHover,
					c = e.indexOfSelectedOption,
					u = e.onSubmit,
					l = e.onKeyDown,
					s = e.onKeyUp,
					d = e.isUniverseSearchShown,
					f = e.searchSuggestions,
					m = e.isSearchLandingEnabled,
					p = e.autocompleteSessionInfo,
					v = e.resetSessionInfo,
					b = e.isAvatarAutocompleteEnabled,
					h = (0, M.createRef)(),
					g = (0, M.createRef)(),
					y = (0, M.useRef)(),
					S = bn((0, M.useState)(!1), 2),
					E = S[0],
					w = S[1],
					C = bn((0, M.useState)(!0), 2),
					x = C[0],
					A = C[1];
				(0, M.useEffect)(function() {
					function e() {
						A(!1)
					}
					return window.addEventListener("SetSearchLandingHasContent", e),
						function() {
							window.removeEventListener("SetSearchLandingHasContent", e)
						}
				}, []);
				var R = (0, M.useRef)(!1),
					O = (0, M.useCallback)(function() {
						var e;
						xe.eventStreamService.sendEvent.apply(xe.eventStreamService, vn(Xt.searchClear(n, void 0, p, null === q.pageName || void 0 === q.pageName || null === (e = q.pageName.PageNameProvider) || void 0 === e ? void 0 : e.getInternalPageName()))), R.current = !0, null == h || null !== (e = h.current) && void 0 !== e && e.focus(), a("")
					}, [p, h, a, n]),
					e = (0, M.useCallback)(function() {
						w(!0), R.current ? R.current = !1 : a()
					}, [a]),
					S = function() {
						w(!1)
					},
					C = (0, M.useCallback)(function(e) {
						a(e.target.value)
					}, [a]),
					r = T()("navbar-left navbar-search col-xs-5 col-sm-6 col-md-2 col-lg-3", {
						"navbar-search-open": m ? r && 0 < n.length : r,
						shown: d
					}),
					d = T()("search-landing-root", {
						"search-landing-root-open": m && 0 === n.length && E
					}),
					E = E && (!x && 0 === n.length || 0 < n.length),
					x = T()("search-overlay", {
						"search-overlay-show": E
					}),
					E = Qe.isAutocompleteSuggestionsIXPTestEnabled() || b,
					b = (0, M.useMemo)(function() {
						var e = [h, g];
						return m && e.push(y.current), e
					}, [g, h, m, y]);
				return (0, V.useOnClickOutside)(b, o), (0, M.useEffect)(function() {
					y.current && G.SearchLandingService.mountSearchLanding()
				}, [y]), B().createElement(B().Fragment, null, B().createElement("div", {
					"data-testid": "navigation-search-input",
					className: r,
					role: "search"
				}, B().createElement("div", {
					className: "input-group"
				}, B().createElement("form", {
					name: "search-form",
					onSubmit: u,
					action: "/search"
				}, E ? B().createElement("div", {
					className: "form-has-feedback"
				}, B().createElement("input", {
					ref: h,
					id: "navbar-search-input",
					type: "search",
					name: "search-bar",
					"data-testid": "navigation-search-input-field",
					className: "form-control input-field new-input-field",
					value: n,
					onChange: C,
					placeholder: t("Label.sSearch"),
					maxLength: "120",
					onFocus: e,
					onBlur: S,
					onKeyDown: l,
					onKeyUp: s,
					autoComplete: "off",
					autoCorrect: "off",
					autoCapitalize: "off",
					spellCheck: "false"
				}), 0 < n.length && B().createElement("span", {
					"data-testid": "navigation-search-input-clear-button",
					tabIndex: 0,
					role: "button",
					"aria-label": "Clear Search",
					onClick: O,
					onKeyDown: O,
					className: "clear-search icon-actions-clear-sm"
				}, B().createElement("span", null))) : B().createElement("input", {
					ref: h,
					id: "navbar-search-input",
					type: "search",
					name: "search-bar",
					"data-testid": "navigation-search-input-field",
					className: "form-control input-field",
					value: n,
					onChange: C,
					placeholder: t("Label.sSearch"),
					maxLength: "120",
					onFocus: e,
					onBlur: S,
					onKeyDown: l,
					onKeyUp: s,
					autoComplete: "off"
				})), B().createElement("div", {
					className: "input-group-btn"
				}, B().createElement("button", {
					"data-testid": "navigation-search-input-search-button",
					className: "input-addon-btn",
					type: "submit"
				}, B().createElement("span", {
					className: "icon-common-search-sm"
				})))), B().createElement("ul", {
					ref: g,
					className: T()("dropdown-menu", {
						"new-dropdown-menu": E
					}),
					role: "menu",
					onMouseEnter: function() {
						i(!0)
					},
					onMouseLeave: function() {
						i(!1)
					}
				}, E ? B().createElement(pn, {
					translate: t,
					searchInput: n,
					indexOfSelectedOption: c,
					searchSuggestions: f,
					autocompleteSessionInfo: p,
					resetSessionInfo: v
				}) : B().createElement(tn, {
					translate: t,
					searchInput: n,
					indexOfSelectedOption: c,
					autocompleteSessionInfo: p,
					resetSessionInfo: v
				})), B().createElement("div", {
					ref: y,
					id: "search-landing-root",
					"data-testid": "search-landing-root",
					className: d
				})), m && B().createElement("div", {
					className: x
				}))
			}
			yn.defaultProps = {
				isUniverseSearchShown: !0,
				isAvatarAutocompleteEnabled: !1,
				isSearchLandingEnabled: !1
			}, yn.propTypes = {
				translate: f().func.isRequired,
				searchInput: f().string.isRequired,
				isMenuOpen: f().bool.isRequired,
				handleSearchOpenOrInputChange: f().func.isRequired,
				closeMenu: f().func.isRequired,
				setIsMenuHover: f().func.isRequired,
				indexOfSelectedOption: f().number.isRequired,
				onSubmit: f().func.isRequired,
				onKeyDown: f().func.isRequired,
				onKeyUp: f().func.isRequired,
				isUniverseSearchShown: f().bool,
				isAvatarAutocompleteEnabled: f().bool,
				searchSuggestions: f().arrayOf(f().oneOfType([f().shape({
					type: f().number.isRequired,
					score: f().number.isRequired,
					universeId: f().number.isRequired,
					canonicalTitle: f().string,
					thumbnailUrl: f().string,
					searchQuery: f().string.isRequired,
					trendingSearchStartDateTime: f().string
				}), f().shape({
					url: f().string.isRequired,
					label: f().string.isRequired,
					pageSort: f().arrayOf(f().string).isRequired,
					icon: f().string
				}), f().shape({
					query: f().string.isRequired,
					score: f().number.isRequired
				})])).isRequired,
				isSearchLandingEnabled: f().bool,
				autocompleteSessionInfo: f().string.isRequired,
				resetSessionInfo: f().func.isRequired
			};
			var Sn = yn,
				En = {
					searchLandingPageExperimentFetchError: "SearchLandingPageExperimentFetchError"
				};

			function wn(e, t, n, r, a, o, i) {
				try {
					var c = e[o](i),
						u = c.value
				} catch (e) {
					return void n(e)
				}
				c.done ? t(u) : Promise.resolve(u).then(r, a)
			}

			function Cn(c) {
				return function() {
					var e = this,
						i = arguments;
					return new Promise(function(t, n) {
						var r = c.apply(e, i);

						function a(e) {
							wn(r, t, n, a, o, "next", e)
						}

						function o(e) {
							wn(r, t, n, a, o, "throw", e)
						}
						a(void 0)
					})
				}
			}

			function xn(e) {
				return function(e) {
					if (Array.isArray(e)) return On(e)
				}(e) || function(e) {
					if ("undefined" != typeof Symbol && Symbol.iterator in Object(e)) return Array.from(e)
				}(e) || Rn(e) || function() {
					throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
				}()
			}

			function An(e, t) {
				return function(e) {
					if (Array.isArray(e)) return e
				}(e) || function(e, t) {
					if ("undefined" == typeof Symbol || !(Symbol.iterator in Object(e))) return;
					var n = [],
						r = !0,
						a = !1,
						o = void 0;
					try {
						for (var i, c = e[Symbol.iterator](); !(r = (i = c.next()).done) && (n.push(i.value), !t || n.length !== t); r = !0);
					} catch (e) {
						a = !0, o = e
					} finally {
						try {
							r || null == c.return || c.return()
						} finally {
							if (a) throw o
						}
					}
					return n
				}(e, t) || Rn(e, t) || function() {
					throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
				}()
			}

			function Rn(e, t) {
				if (e) {
					if ("string" == typeof e) return On(e, t);
					var n = Object.prototype.toString.call(e).slice(8, -1);
					return "Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n ? Array.from(e) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? On(e, t) : void 0
				}
			}

			function On(e, t) {
				(null == t || t > e.length) && (t = e.length);
				for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
				return r
			}

			function Tn(e) {
				function i(e) {
					if (e) {
						if (L) {
							var t = -1 === a.findIndex(function(e) {
									return e.searchQuery === u.toLowerCase() && qt(e)
								}),
								n = e.filter(function(e) {
									return e.searchQuery !== u.toLowerCase() || qt(e)
								});
							return [].concat(xn(T.slice(0, t ? U + 1 : U)), xn(n), xn(T.slice(U + 1)))
						}
						if (Qe.isSpecialTreatmentAutocompleteRestricted()) return T;
						n = -1 === e.findIndex(function(e) {
							return e.searchQuery === u.toLowerCase() && e.type === Rt.GameSuggestion
						}), e = e.filter(function(e) {
							return e.searchQuery !== u.toLowerCase() || e.type === Rt.GameSuggestion
						}).slice(0, Qe.isSpecialTreatment() ? Qe.numberOfSpecialTreatmentAutocompleteSuggestions : Qe.numberOfAutocompleteSuggestions());
						return [].concat(xn(T.slice(0, n ? I + 1 : I)), xn(e), xn(T.slice(I + 1)))
					}
					return T
				}
				var t = e.translate,
					n = e.isUniverseSearchShown,
					r = An((0, M.useState)(ze(window.location.search).keyword || ""), 2),
					o = r[0],
					c = r[1],
					u = (0, V.useDebounce)(o, Qe.debounceTimeout),
					l = (0, V.usePrevious)(u),
					e = An((0, M.useState)(null), 2),
					a = e[0],
					s = e[1],
					r = An((0, M.useState)(Xt.generateSessionInfo()), 2),
					d = r[0],
					f = r[1],
					e = An((0, M.useState)(Xt.generateSessionInfo()), 2),
					m = e[0],
					p = e[1],
					v = (0, M.useRef)(!1),
					r = An((0, M.useState)(!1), 2),
					b = r[0],
					h = r[1],
					e = An((0, M.useState)(!1), 2),
					g = e[0],
					y = e[1],
					r = An((0, M.useState)(!0), 2),
					S = r[0],
					E = r[1],
					e = An((0, M.useState)(!1), 2),
					w = e[0],
					r = e[1],
					e = An((0, M.useState)(0), 2),
					C = e[0],
					x = e[1],
					e = An((0, M.useState)(!1), 2),
					A = e[0],
					R = e[1],
					O = K,
					e = An((0, M.useState)((Qe.isAutocompleteSuggestionsIXPTestEnabled() ? Ke : Ve)()), 2),
					T = e[0],
					N = e[1],
					I = T.findIndex(function(e) {
						return e.label === H.gameSearchLink.label
					}),
					U = Ke().findIndex(function(e) {
						return e.label === H.avatarSearchLink.label
					}),
					P = Ht(),
					L = He(),
					k = (0, M.useMemo)(function() {
						return i(a)
					}, [a, T]),
					_ = k.length;
				(0, M.useEffect)(function() {
					S || xe.eventStreamService.sendEvent.apply(xe.eventStreamService, xn(Xt.search(o, Xt.contexts.searchAutocomplete, Xt.actionTypes.submit, d))), E(!1);
					var e = function() {
						var e = Cn(regeneratorRuntime.mark(function e() {
							var t, n, r, a, o;
							return regeneratorRuntime.wrap(function(e) {
								for (;;) switch (e.prev = e.next) {
									case 0:
										if (!(void 0 !== u && "" !== u && u.length <= Qe.debouncedSearchInputMaxLength)) {
											e.next = 34;
											break
										}
										if (s(null), t = Date.now(), L) return e.prev = 4, n = Date.now(), e.next = 8, Mt(u, P, Qe.avatarAutocompleteQueryPaddingAmount, l, A);
										e.next = 20;
										break;
									case 8:
										a = e.sent, o = function(e, t) {
											var n = 0,
												r = [];
											return e.forEach(function(e) {
												n < Qe.avatarAutocompleteSuggestionLimit && e.Query !== t && (r.push(e), n += 1)
											}), r
										}(a.Data, u), xe.eventStreamService.sendEvent.apply(xe.eventStreamService, xn(Xt.searchAutocomplete(u, l, !1, o, a.Args.Algo, n - t, Qe.debounceTimeout, "", q.pageName.PageNameProvider.getInternalPageName(), "" !== l))), s(o), e.next = 18;
										break;
									case 14:
										e.prev = 14, e.t0 = e.catch(4), q.httpService.isCancelled(e.t0) || s([]), R(!0);
									case 18:
										e.next = 34;
										break;
									case 20:
										if (Qe.isAutocompleteSuggestionsIXPTestEnabled()) return e.prev = 21, e.next = 24, Dt(u);
										e.next = 34;
										break;
									case 24:
										r = e.sent, a = Date.now(), o = i(r.entries), xe.eventStreamService.sendEvent.apply(xe.eventStreamService, xn(Xt.searchAutocomplete(u, l, !1, Wt(o, u), r.algorithmName, a - t, Qe.debounceTimeout, d, q.pageName.PageNameProvider.getInternalPageName(), !1))), s(r.entries), e.next = 34;
										break;
									case 31:
										e.prev = 31, e.t1 = e.catch(21), q.httpService.isCancelled(e.t1) || s([]);
									case 34:
									case "end":
										return e.stop()
								}
							}, e, null, [
								[4, 14],
								[21, 31]
							])
						}));
						return function() {
							return e.apply(this, arguments)
						}
					}();
					L && N(Ke()), e()
				}, [u]);

				function j() {
					f(Xt.generateSessionInfo())
				}

				function F() {
					y(!1)
				}
				var D = (0, M.useCallback)(Cn(regeneratorRuntime.mark(function e() {
						var t, n;
						return regeneratorRuntime.wrap(function(e) {
							for (;;) switch (e.prev = e.next) {
								case 0:
									if (t = b, e.prev = 1, v.current) {
										e.next = 7;
										break
									}
									return e.next = 5, G.ExperimentationService.getAllValuesForLayer("PlayerApp.HomePage.UX.WholePageRanking");
								case 5:
									n = e.sent, t = null !== (n = null == n ? void 0 : n.shouldShowSearchLandingPageWeb) && void 0 !== n && n;
								case 7:
									t && (n = Xt.generateSessionInfo(), G.SearchLandingService.showSearchLanding(n), xe.eventStreamService.sendEvent.apply(xe.eventStreamService, xn(Xt.search(void 0, Xt.contexts.searchLandingPage, Xt.actionTypes.open, void 0, n))), h(t), p(n)), e.next = 13;
									break;
								case 10:
									e.prev = 10, e.t0 = e.catch(1), (0, Nt.fireEvent)(En.searchLandingPageExperimentFetchError);
								case 13:
									return v.current = !0, e.abrupt("return", t);
								case 15:
								case "end":
									return e.stop()
							}
						}, e, null, [
							[1, 10]
						])
					})), [b]),
					e = (0, M.useCallback)(Cn(regeneratorRuntime.mark(function e() {
						var t, n, r, a = arguments;
						return regeneratorRuntime.wrap(function(e) {
							for (;;) switch (e.prev = e.next) {
								case 0:
									if (c(t = 0 < a.length && void 0 !== a[0] ? a[0] : o), t.length < o.length && xe.eventStreamService.sendEvent.apply(xe.eventStreamService, xn(Xt.searchTextTrim(o, t, void 0, d))), n = b, 0 === t.length) return e.next = 7, D();
									e.next = 12;
									break;
								case 7:
									n = e.sent, r = Xt.generateSessionInfo(), xe.eventStreamService.sendEvent.apply(xe.eventStreamService, xn(Xt.search(t, Xt.contexts.searchAutocomplete, Xt.actionTypes.open, r))), f(r), x(0);
								case 12:
									if (w) return e.abrupt("return");
									e.next = 14;
									break;
								case 14:
									y(!!n || 0 < t.length);
								case 15:
								case "end":
									return e.stop()
							}
						}, e)
					})), [d, D, w, b, o]);
				return (0, M.useEffect)(function() {
					return window.addEventListener("setSearchMenuClose", F),
						function() {
							window.removeEventListener("setSearchMenuClose", F)
						}
				}, [g]), B().createElement(Sn, {
					searchInput: o,
					handleSearchOpenOrInputChange: e,
					isSearchLandingEnabled: b,
					closeMenu: function() {
						g && (b && 0 === o.length ? xe.eventStreamService.sendEvent.apply(xe.eventStreamService, xn(Xt.search(null, Xt.contexts.searchLandingPage, Xt.actionTypes.cancel, void 0, m))) : xe.eventStreamService.sendEvent.apply(xe.eventStreamService, xn(Xt.search(o, Xt.contexts.searchAutocomplete, Xt.actionTypes.close, d))), y(!1))
					},
					setIsMenuHover: r,
					isMenuOpen: g,
					indexOfSelectedOption: C,
					onSubmit: function(e) {
						e.preventDefault(), e.stopPropagation()
					},
					onKeyDown: function(e) {
						var t = C;
						!g || e.keyCode !== O.arrowUp && e.keyCode !== O.arrowDown && e.keyCode !== O.tab || (e.stopPropagation(), e.preventDefault(), e.keyCode === O.arrowUp ? --t : t += 1, (t %= _) < 0 && (t = _ + t), x(t))
					},
					onKeyUp: function(e) {
						if (e.keyCode === O.enter && (e.stopPropagation(), e.preventDefault(), !b || 0 !== o.length)) {
							var t = k[C];
							Bt(t) ? (xe.eventStreamService.sendEvent.apply(xe.eventStreamService, xn(Xt.searchSuggestionClicked(u, void 0, C, t.searchQuery, Gt(t), Wt(k, o), d))), xe.eventStreamService.sendEvent.apply(xe.eventStreamService, xn(Xt.catalogSearch(1, q.pageName.PageNameProvider.getInternalPageName())))) : (xe.eventStreamService.sendEvent.apply(xe.eventStreamService, xn(Xt.searchSuggestionClicked(u, void 0, C, u, Vt(t), Wt(k, o), d))), xe.eventStreamService.sendEvent.apply(xe.eventStreamService, xn(Xt.catalogSearch(0, q.pageName.PageNameProvider.getInternalPageName())))), j();
							var n = Kt(t, e);
							if (n) {
								var r, n = n;
								if ("Label.CreatorStore" === t.label && (n = H.creatorStoreUrl, null != e && null !== (r = e.target) && void 0 !== r && r.value && (n += encodeURIComponent(e.target.value))), document.getElementById("routing")) {
									e = new URL(n);
									if (e.origin === window.location.origin && "/catalog" === G.Endpoints.removeUrlLocale(e.pathname).toLowerCase()) {
										e = new CustomEvent("externalNavigation", {
											detail: {
												url: n
											}
										});
										return window.dispatchEvent(e), y(!1), void document.getElementById("navbar-search-input").blur()
									}
								}
								window.location = n
							}
						}
					},
					isUniverseSearchShown: n,
					translate: t,
					searchSuggestions: k,
					autocompleteSessionInfo: d,
					resetSessionInfo: function() {
						var e;
						j(), e = Xt.generateSessionInfo(), p(e), G.SearchLandingService.updateSessionInfo(e)
					},
					isAvatarAutocompleteEnabled: L
				})
			}
			Tn.defaultProps = {
				isUniverseSearchShown: !0
			}, Tn.propTypes = {
				translate: f().func.isRequired,
				isUniverseSearchShown: f().bool
			};
			var Nn = (0, V.withTranslations)(Tn, s),
				o = angular,
				In = Ho.n(o);

			function Un(e) {
				return (Un = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
					return typeof e
				} : function(e) {
					return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
				})(e)
			}

			function Pn(e, t) {
				for (var n = 0; n < t.length; n++) {
					var r = t[n];
					r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
				}
			}

			function Ln(e, t) {
				return (Ln = Object.setPrototypeOf || function(e, t) {
					return e.__proto__ = t, e
				})(e, t)
			}

			function kn(n) {
				var r = function() {
					if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
					if (Reflect.construct.sham) return !1;
					if ("function" == typeof Proxy) return !0;
					try {
						return Date.prototype.toString.call(Reflect.construct(Date, [], function() {})), !0
					} catch (e) {
						return !1
					}
				}();
				return function() {
					var e, t = _n(n);
					return e = r ? (e = _n(this).constructor, Reflect.construct(t, arguments, e)) : t.apply(this, arguments), t = this, !(e = e) || "object" !== Un(e) && "function" != typeof e ? function(e) {
						if (void 0 !== e) return e;
						throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
					}(t) : e
				}
			}

			function _n(e) {
				return (_n = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
					return e.__proto__ || Object.getPrototypeOf(e)
				})(e)
			}
			var jn = function() {
				! function(e, t) {
					if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
					e.prototype = Object.create(t && t.prototype, {
						constructor: {
							value: e,
							writable: !0,
							configurable: !0
						}
					}), t && Ln(e, t)
				}(a, B().Component);
				var e, t, n, r = kn(a);

				function a() {
					return function(e) {
						if (!(e instanceof a)) throw new TypeError("Cannot call a class as a function")
					}(this), r.apply(this, arguments)
				}
				return e = a, (t = [{
					key: "componentDidMount",
					value: function() {
						try {
							In().module("notificationStreamIcon"), In().bootstrap(this.container, ["notificationStreamIcon"])
						} catch (e) {
							console.log(e)
						}
					}
				}, {
					key: "render",
					value: function() {
						var t = this;
						return B().createElement("span", {
							ref: function(e) {
								t.container = e
							},
							className: "nav-robux-icon rbx-menu-item"
						}, B().createElement("span", {
							id: "notification-stream-icon-container",
							"notification-stream-indicator": "true"
						}))
					}
				}]) && Pn(e.prototype, t), n && Pn(e, n), a
			}();

			function Fn(e) {
				return (Fn = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
					return typeof e
				} : function(e) {
					return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
				})(e)
			}

			function Dn(e, t) {
				for (var n = 0; n < t.length; n++) {
					var r = t[n];
					r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
				}
			}

			function Mn(e, t) {
				return (Mn = Object.setPrototypeOf || function(e, t) {
					return e.__proto__ = t, e
				})(e, t)
			}

			function Bn(n) {
				var r = function() {
					if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
					if (Reflect.construct.sham) return !1;
					if ("function" == typeof Proxy) return !0;
					try {
						return Date.prototype.toString.call(Reflect.construct(Date, [], function() {})), !0
					} catch (e) {
						return !1
					}
				}();
				return function() {
					var e, t = qn(n);
					return e = r ? (e = qn(this).constructor, Reflect.construct(t, arguments, e)) : t.apply(this, arguments), t = this, !(e = e) || "object" !== Fn(e) && "function" != typeof e ? function(e) {
						if (void 0 !== e) return e;
						throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
					}(t) : e
				}
			}

			function qn(e) {
				return (qn = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
					return e.__proto__ || Object.getPrototypeOf(e)
				})(e)
			}
			var Gn = function() {
					! function(e, t) {
						if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
						e.prototype = Object.create(t && t.prototype, {
							constructor: {
								value: e,
								writable: !0,
								configurable: !0
							}
						}), t && Mn(e, t)
					}(a, B().Component);
					var e, t, n, r = Bn(a);

					function a() {
						return function(e) {
							if (!(e instanceof a)) throw new TypeError("Cannot call a class as a function")
						}(this), r.apply(this, arguments)
					}
					return e = a, (t = [{
						key: "componentDidMount",
						value: function() {
							try {
								In().module("notificationStream"), In().bootstrap(this.container, ["notificationStream"])
							} catch (e) {
								console.log(e)
							}
						}
					}, {
						key: "render",
						value: function() {
							var t = this,
								e = We(),
								e = T()("notification-stream-base", e);
							return B().createElement("div", {
								ref: function(e) {
									t.container = e
								},
								className: e,
								"notification-stream-base-view": "true"
							})
						}
					}]) && Dn(e.prototype, t), n && Dn(e, n), a
				}(),
				Vn = {
					name: "nsCloseContent",
					context: "click",
					additionalProperties: {}
				};

			function Kn() {
				var e = (0, M.useRef)();
				return B().createElement("li", {
					id: "navbar-stream",
					ref: e,
					className: "navbar-icon-item navbar-stream notification-margins"
				}, B().createElement(A.Popover, {
					id: "notification-stream-popover",
					trigger: "click",
					placement: "bottom",
					closeOnClick: !1,
					button: B().createElement("button", {
						type: "button",
						className: "btn-uiblox-common-common-notification-bell-md"
					}, B().createElement(jn, null)),
					container: e.current,
					onExit: function() {
						window.dispatchEvent(new Event("Roblox.NotificationStream.StreamClosed")), xe.eventStreamService.sendEventWithTarget(Vn.name, Vn.context, Vn.additionalProperties)
					},
					role: "menu"
				}, B().createElement(Gn, null)))
			}
			Kn.propTypes = {};
			var Hn = Kn;

			function Wn(e) {
				var t = e.accountNotificationCount,
					e = T()("notification-red notification nav-setting-highlight", {
						hidden: 0 === t
					});
				return B().createElement("span", {
					id: "settings-icon",
					className: "nav-settings-icon rbx-menu-item"
				}, B().createElement("span", {
					className: "icon-nav-settings roblox-popover-close",
					id: "nav-settings"
				}), B().createElement("span", {
					className: e
				}, t))
			}

			function zn() {
				return Xn(void 0, void 0, Promise, function() {
					var t;
					return $n(this, function(e) {
						switch (e.label) {
							case 0:
								return t = {
									url: Yn(),
									withCredentials: !0
								}, [4, q.httpService.get(t)];
							case 1:
								return [2, e.sent().data]
						}
					})
				})
			}
			Wn.defaultProps = {
				accountNotificationCount: 0
			}, Wn.propTypes = {
				accountNotificationCount: f().number
			};
			var Qn = Wn,
				Xn = function(e, i, c, u) {
					return new(c = c || Promise)(function(n, t) {
						function r(e) {
							try {
								o(u.next(e))
							} catch (e) {
								t(e)
							}
						}

						function a(e) {
							try {
								o(u.throw(e))
							} catch (e) {
								t(e)
							}
						}

						function o(e) {
							var t;
							e.done ? n(e.value) : ((t = e.value) instanceof c ? t : new c(function(e) {
								e(t)
							})).then(r, a)
						}
						o((u = u.apply(e, i || [])).next())
					})
				},
				$n = function(n, r) {
					var a, o, i, c = {
							label: 0,
							sent: function() {
								if (1 & i[0]) throw i[1];
								return i[1]
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
								if (a) throw new TypeError("Generator is already executing.");
								for (; c;) try {
									if (a = 1, o && (i = 2 & t[0] ? o.return : t[0] ? o.throw || ((i = o.return) && i.call(o), 0) : o.next) && !(i = i.call(o, t[1])).done) return i;
									switch (o = 0, i && (t = [2 & t[0], i.value]), t[0]) {
										case 0:
										case 1:
											i = t;
											break;
										case 4:
											return c.label++, {
												value: t[1],
												done: !1
											};
										case 5:
											c.label++, o = t[1], t = [0];
											continue;
										case 7:
											t = c.ops.pop(), c.trys.pop();
											continue;
										default:
											if (!(i = 0 < (i = c.trys).length && i[i.length - 1]) && (6 === t[0] || 2 === t[0])) {
												c = 0;
												continue
											}
											if (3 === t[0] && (!i || t[1] > i[0] && t[1] < i[3])) {
												c.label = t[1];
												break
											}
											if (6 === t[0] && c.label < i[1]) {
												c.label = i[1], i = t;
												break
											}
											if (i && c.label < i[2]) {
												c.label = i[2], c.ops.push(t);
												break
											}
											i[2] && c.ops.pop(), c.trys.pop();
											continue
									}
									t = r.call(n, c)
								} catch (e) {
									t = [6, e], o = 0
								} finally {
									a = i = 0
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
				Yn = J,
				Zn = {
					schematizedEventTypes: {
						authButtonClick: "authButtonClick",
						authPageLoad: "authPageLoad"
					},
					context: {
						homepage: "homepage",
						accountSwitcherStatus: "accountSwitcherStatus"
					},
					btn: {
						logout: "logout",
						switchAccount: "switchAccount"
					}
				};

			function Jn(e, t, n, r, a, o, i) {
				try {
					var c = e[o](i),
						u = c.value
				} catch (e) {
					return void n(e)
				}
				c.done ? t(u) : Promise.resolve(u).then(r, a)
			}

			function er(c) {
				return function() {
					var e = this,
						i = arguments;
					return new Promise(function(t, n) {
						var r = c.apply(e, i);

						function a(e) {
							Jn(r, t, n, a, o, "next", e)
						}

						function o(e) {
							Jn(r, t, n, a, o, "throw", e)
						}
						a(void 0)
					})
				}
			}

			function tr() {
				var e = or("returnUrl") || window.location.href;
				return e = e === ur() || e === dr() ? "" : e
			}

			function nr() {
				var e = null !== G.AccountSwitcherService && void 0 !== G.AccountSwitcherService && G.AccountSwitcherService.isAccountSwitcherAvailable() ? tr() : or("returnUrl") || window.location.href,
					t = ur();
				return "".concat(t, "?").concat(ir({
					returnUrl: e
				}))
			}

			function rr() {
				return he().then(er(regeneratorRuntime.mark(function e() {
					return regeneratorRuntime.wrap(function(e) {
						for (;;) switch (e.prev = e.next) {
							case 0:
								window.location.reload();
							case 1:
							case "end":
								return e.stop()
						}
					}, e)
				})))
			}
			var ar = xe.cryptoUtil.generateSecureAuthIntent,
				or = q.urlService.getQueryParam,
				ir = q.urlService.composeQueryString,
				cr = W,
				ur = $,
				lr = Y,
				sr = z,
				dr = Z,
				fr = Q,
				mr = r,
				r = {
					getSignupUrl: function(e) {
						var t, n, e = 0 < arguments.length && void 0 !== e && e;
						return n = L.authenticatedUser.isAuthenticated && e ? (t = tr(), dr()) : (t = (n = (t = or("returnUrl") || window.location.href).toLowerCase()).startsWith(ur().toLowerCase()) || n.startsWith(lr().toLowerCase()) ? "" : t, cr()), "".concat(n, "?").concat(ir({
							returnUrl: t
						}))
					},
					getLoginLinkUrl: nr,
					logoutUser: function(e) {
						e.stopPropagation(), e.preventDefault(), document.dispatchEvent(new CustomEvent(mr.name)), xe.eventStreamService.sendEventWithTarget(Zn.schematizedEventTypes.authButtonClick, Zn.context.homepage, {
							btn: Zn.btn.logout
						}), In().isUndefined(In().element("#chat-container").scope()) || (e = In().element("#chat-container").scope()).$digest(e.$broadcast("Roblox.Chat.destroyChatCookie")), null !== G.EmailVerificationService && void 0 !== G.EmailVerificationService && G.EmailVerificationService.handleUserEmailUpsellAtLogout(rr).then(function(e) {
							e && !e.emailAddress || rr()
						})
					},
					logoutAndRedirect: rr,
					logoutAndReauth: function() {
						var e = er(regeneratorRuntime.mark(function e() {
							var t;
							return regeneratorRuntime.wrap(function(e) {
								for (;;) switch (e.prev = e.next) {
									case 0:
										return e.next = 2, ar();
									case 2:
										return t = e.sent, e.next = 5, q.httpService.post({
											url: fr(),
											withCredentials: !0
										}, {
											secureAuthenticationIntent: t
										});
									case 5:
									case "end":
										return e.stop()
								}
							}, e)
						}));
						return function() {
							return e.apply(this, arguments)
						}
					}(),
					isLoginLinkAvailable: function() {
						var e = (null === (e = window) || void 0 === e ? void 0 : e.location).pathname,
							e = null !== (e = null == e ? void 0 : e.toLowerCase()) && void 0 !== e ? e : "";
						return !e.startsWith("/login") && !e.startsWith("/newlogin")
					},
					switchAccount: function(e) {
						e.stopPropagation(), e.preventDefault(), e = window.location.href, xe.eventStreamService.sendEventWithTarget(Zn.schematizedEventTypes.authButtonClick, Zn.context.homepage, {
							btn: Zn.btn.switchAccount,
							state: e.toString()
						}), In().isUndefined(In().element("#chat-container").scope()) || (e = In().element("#chat-container").scope()).$digest(e.$broadcast("Roblox.Chat.destroyChatCookie"));
						var t = {
							containerId: "navigation-account-switcher-container",
							onAccountSwitched: function() {
								xe.localStorageService.setLocalStorage(j.accountSwitchedFlag, !0), window.location.href = sr()
							},
							handleAddAccount: function() {
								window.location.href = $()
							}
						};
						(function() {
							var e = er(regeneratorRuntime.mark(function e() {
								return regeneratorRuntime.wrap(function(e) {
									for (;;) switch (e.prev = e.next) {
										case 0:
											return e.next = 2, null === G.AccountSwitcherService || void 0 === G.AccountSwitcherService ? void 0 : G.AccountSwitcherService.isAccountSwitcherAvailable();
										case 2:
											if (!e.sent) {
												e.next = 4;
												break
											}
											null === G.AccountSwitcherService || void 0 === G.AccountSwitcherService || G.AccountSwitcherService.renderAccountSwitcher(t);
										case 4:
										case "end":
											return e.stop()
									}
								}, e)
							}));
							return function() {
								return e.apply(this, arguments)
							}
						})()()
					},
					getIsVNGLandingRedirectEnabled: function() {
						var e = er(regeneratorRuntime.mark(function e() {
							var t, n;
							return regeneratorRuntime.wrap(function(e) {
								for (;;) switch (e.prev = e.next) {
									case 0:
										return e.prev = 0, e.next = 3, G.ExperimentationService.getAllValuesForLayer("Website.LandingPage");
									case 3:
										return t = e.sent, t = null !== (n = null == t ? void 0 : t.IsVngLandingPageRedirectEnabled) && void 0 !== n && n, e.next = 7, zn();
									case 7:
										return n = e.sent, n = n.isVNGComplianceEnabled, e.abrupt("return", n && t);
									case 12:
										return e.prev = 12, e.t0 = e.catch(0), e.abrupt("return", !1);
									case 15:
									case "end":
										return e.stop()
								}
							}, e, null, [
								[0, 12]
							])
						}));
						return function() {
							return e.apply(this, arguments)
						}
					}(),
					navigateToLoginWithRedirect: function() {
						window.location.href = nr()
					}
				},
				pr = H.settingsUrl,
				vr = H.quickLoginUrl,
				br = r.logoutUser,
				hr = r.switchAccount,
				gr = l.quickLogin,
				yr = l.settings,
				Sr = l.logout,
				Er = l.switchAccountKey;

			function wr(e) {
				var r = e.translate,
					t = e.accountNotificationCount,
					a = void 0 === t ? 0 : t,
					o = void 0 !== (e = e.isCrossDeviceLoginCodeValidationDisplayed) && e,
					i = T()("notification-blue notification nav-setting-highlight", {
						hidden: 0 === a
					}),
					c = (null !== (e = null === G.AccountSwitcherService || void 0 === G.AccountSwitcherService ? void 0 : G.AccountSwitcherService.useIsAccountSwitcherAvailableForBrowser()) && void 0 !== e ? e : [!1])[0],
					e = Object.entries(pr).map(function(e) {
						var t = e[0],
							n = e[1],
							e = n.url,
							n = n.label;
						return B().createElement("li", {
							key: t
						}, t === Sr && B().createElement(A.Link, {
							className: "rbx-menu-item logout-menu-item",
							key: t,
							onClick: br,
							url: "#"
						}, r(n)), t === Er && c && B().createElement(A.Link, {
							className: "rbx-menu-item account-switch-menu-item",
							key: t,
							onClick: hr,
							url: "#"
						}, r(n)), t === gr && o && B().createElement(A.Link, {
							className: "rbx-menu-item",
							key: t,
							url: vr
						}, r(n)), t !== Sr && t !== gr && t !== Er && B().createElement(A.Link, {
							cssClasses: "rbx-menu-item",
							key: t,
							url: e
						}, r(n), t === yr && B().createElement("span", {
							className: i
						}, a)))
					});
				return B().createElement(B().Fragment, null, e)
			}

			function Cr(e, t, n, r, a, o, i) {
				try {
					var c = e[o](i),
						u = c.value
				} catch (e) {
					return void n(e)
				}
				c.done ? t(u) : Promise.resolve(u).then(r, a)
			}

			function xr(e, t) {
				return function(e) {
					if (Array.isArray(e)) return e
				}(e) || function(e, t) {
					if ("undefined" == typeof Symbol || !(Symbol.iterator in Object(e))) return;
					var n = [],
						r = !0,
						a = !1,
						o = void 0;
					try {
						for (var i, c = e[Symbol.iterator](); !(r = (i = c.next()).done) && (n.push(i.value), !t || n.length !== t); r = !0);
					} catch (e) {
						a = !0, o = e
					} finally {
						try {
							r || null == c.return || c.return()
						} finally {
							if (a) throw o
						}
					}
					return n
				}(e, t) || function(e, t) {
					if (!e) return;
					if ("string" == typeof e) return Ar(e, t);
					var n = Object.prototype.toString.call(e).slice(8, -1);
					"Object" === n && e.constructor && (n = e.constructor.name);
					if ("Map" === n || "Set" === n) return Array.from(e);
					if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return Ar(e, t)
				}(e, t) || function() {
					throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
				}()
			}

			function Ar(e, t) {
				(null == t || t > e.length) && (t = e.length);
				for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
				return r
			}

			function Rr(e) {
				var t = e.translate,
					n = e.accountNotificationCount,
					r = xr((0, M.useState)(!1), 2),
					e = r[0],
					a = r[1],
					r = (0, M.useRef)();
				return (0, M.useEffect)(function() {
					var e, t = function() {
						var c, e = (c = regeneratorRuntime.mark(function e() {
							return regeneratorRuntime.wrap(function(e) {
								for (;;) switch (e.prev = e.next) {
									case 0:
										return e.prev = 0, e.next = 3, null === G.AccountSwitcherService || void 0 === G.AccountSwitcherService ? void 0 : G.AccountSwitcherService.syncAccountSwitcherBlobIfNeeded();
									case 3:
										e.next = 8;
										break;
									case 5:
										e.prev = 5, e.t0 = e.catch(0), console.warn("account switching has issues", e.t0);
									case 8:
									case "end":
										return e.stop()
								}
							}, e, null, [
								[0, 5]
							])
						}), function() {
							var e = this,
								i = arguments;
							return new Promise(function(t, n) {
								var r = c.apply(e, i);

								function a(e) {
									Cr(r, t, n, a, o, "next", e)
								}

								function o(e) {
									Cr(r, t, n, a, o, "throw", e)
								}
								a(void 0)
							})
						});
						return function() {
							return e.apply(this, arguments)
						}
					}();
					a(!0), e = !(null === G.AccountSwitcherService || void 0 === G.AccountSwitcherService || !G.AccountSwitcherService.getStoredAccountSwitcherBlob()), xe.eventStreamService.sendEventWithTarget(Zn.schematizedEventTypes.authPageLoad, Zn.context.accountSwitcherStatus, {
						state: e.toString()
					}), t()
				}, []), B().createElement("li", {
					id: "navbar-settings",
					ref: r,
					className: "navbar-icon-item"
				}, B().createElement(A.Popover, {
					id: "settings-popover",
					trigger: "click",
					placement: "bottom",
					className: We(),
					containerPadding: 20,
					button: B().createElement("button", {
						type: "button",
						className: "btn-navigation-nav-settings-md"
					}, B().createElement(Qn, {
						accountNotificationCount: n
					})),
					container: r.current,
					role: "menu"
				}, B().createElement("div", {
					className: We()
				}, B().createElement("ul", {
					id: "settings-popover-menu",
					className: "dropdown-menu"
				}, B().createElement(wr, {
					isCrossDeviceLoginCodeValidationDisplayed: e,
					translate: t,
					accountNotificationCount: n
				})))))
			}
			Rr.defaultProps = {
				accountNotificationCount: 0
			}, Rr.propTypes = {
				translate: f().func.isRequired,
				accountNotificationCount: f().number
			};
			var Or = Rr,
				Tr = {
					VIRTUAL_ITEM: "VIRTUAL_ITEM",
					UPDATE: "UPDATE",
					PERSONALIZED_BONUS_ITEMS: "PERSONALIZED_BONUS_ITEMS"
				};

			function Nr(e) {
				var t = e.robuxAmount,
					n = e.isGetCurrencyCallDone,
					r = e.robuxError,
					a = e.creditDisplayConfig,
					e = e.robuxBadgeType,
					t = r ? y : q.abbreviateNumber.getTruncValue(t),
					e = T()("notification-red robux-badge", {
						hidden: !e
					}),
					t = B().createElement(M.Fragment, null, B().createElement("span", {
						className: "icon-robux-28x28 roblox-popover-close",
						id: "nav-robux"
					}), a !== _.hideCreditAndRobux && B().createElement("span", {
						className: "rbx-text-navbar-right text-header",
						id: "nav-robux-amount"
					}, n && t));
				return B().createElement("span", {
					id: "nav-robux-icon",
					className: "nav-robux-icon rbx-menu-item"
				}, r ? B().createElement(A.Tooltip, {
					id: "current-error",
					content: r,
					placement: "bottom",
					containerClassName: "nav-buy-robux-icon-tooltip-container"
				}, t) : t, B().createElement("span", {
					className: e
				}))
			}

			function Ir(e) {
				switch (e) {
					case Tr.VIRTUAL_ITEM:
						return "prevLocalVirtualItemStartTimeSeconds" + G.CurrentUser.userId;
					case Tr.UPDATE:
						return "hasSeenRobuxUpdate";
					case Tr.PERSONALIZED_BONUS_ITEMS:
						return "hasSeenRobuxPersonalizedBonusItems";
					default:
						return ""
				}
			}

			function Ur() {
				return "true" !== function(e) {
					e = Ir(e);
					return xe.localStorageService.getLocalStorage(e)
				}(Tr.PERSONALIZED_BONUS_ITEMS) ? Tr.PERSONALIZED_BONUS_ITEMS : ""
			}
			Nr.defaultProps = {
				robuxAmount: 0,
				robuxError: "",
				robuxBadgeType: null
			}, Nr.propTypes = {
				robuxAmount: f().number,
				robuxError: f().string,
				isGetCurrencyCallDone: f().bool.isRequired,
				creditDisplayConfig: f().string.isRequired,
				robuxBadgeType: f().oneOf(Object.values(Tr))
			};
			var Pr = Nr;

			function Lr(e, t) {
				return function(e) {
					if (Array.isArray(e)) return e
				}(e) || function(e, t) {
					if ("undefined" == typeof Symbol || !(Symbol.iterator in Object(e))) return;
					var n = [],
						r = !0,
						a = !1,
						o = void 0;
					try {
						for (var i, c = e[Symbol.iterator](); !(r = (i = c.next()).done) && (n.push(i.value), !t || n.length !== t); r = !0);
					} catch (e) {
						a = !0, o = e
					} finally {
						try {
							r || null == c.return || c.return()
						} finally {
							if (a) throw o
						}
					}
					return n
				}(e, t) || function(e, t) {
					if (!e) return;
					if ("string" == typeof e) return kr(e, t);
					var n = Object.prototype.toString.call(e).slice(8, -1);
					"Object" === n && e.constructor && (n = e.constructor.name);
					if ("Map" === n || "Set" === n) return Array.from(e);
					if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return kr(e, t)
				}(e, t) || function() {
					throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
				}()
			}

			function kr(e, t) {
				(null == t || t > e.length) && (t = e.length);
				for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
				return r
			}
			var _r = H.buyRobuxUrl,
				jr = H.redeemUrl,
				Fr = H.buyGiftCardUrl,
				Dr = new Map,
				Mr = new Map;

			function Br(e) {
				var t = e.creditAmount,
					n = e.creditDisplayConfig,
					r = e.creditError,
					a = e.currencyCode,
					o = e.isEligibleForVng,
					i = e.robuxAmount,
					c = e.robuxError,
					u = e.openConvertCreditModal,
					l = e.onBuyGiftCardClick,
					s = e.onBuyRobuxExternalClick,
					d = e.robuxBadgeType,
					f = e.translate,
					m = Lr((0, M.useState)(!0), 2),
					p = m[0],
					v = m[1],
					b = Lr((0, M.useState)(!1), 2),
					e = b[0],
					h = b[1],
					m = Lr((0, M.useState)(!1), 2),
					b = m[0],
					g = m[1],
					m = c ? y : q.numberFormat.getNumberFormat(i),
					c = function(e) {
						switch (e) {
							case Tr.VIRTUAL_ITEM:
							case Tr.PERSONALIZED_BONUS_ITEMS:
								return "Labels.NewItem";
							case Tr.UPDATE:
								return "Labels.NewUpdate";
							default:
								return ""
						}
					}(d);
				return (0, M.useEffect)(function() {
					i < S.robuxTruncateThreshold && t < S.creditTruncateThreshold && n !== _.hideCreditAndRobux && v(!1)
				}, [i, t, n]), (0, M.useEffect)(function() {
					window.dispatchEvent(new CustomEvent("price-tag:render", {
						detail: {
							targetSelector: ".dropdown-credit-balance"
						}
					}))
				}, [n]), (0, M.useEffect)(function() {
					0 === t ? h(!1) : Dr.has(t) ? h(Dr.get(t)) : ye().then(function(e) {
						0 < e.data.robuxConversionAmount ? (Dr.set(t, !0), h(!0)) : (Dr.set(t, !1), h(!1))
					})
				}, [t]), (0, M.useEffect)(function() {
					Mr.has(Fr.cacheKey) ? g(Mr.get(Fr.cacheKey)) : Se().then(function(e) {
						e = e.data;
						g(e.displayBuyGiftCardOption), Mr.set(Fr.cacheKey, e.displayBuyGiftCardOption)
					})
				}, []), B().createElement(M.Fragment, null, B().createElement("div", {
					className: p ? "" : "wallet-hidden"
				}, B().createElement("li", {
					className: "dropdown-wallet"
				}, B().createElement(A.Link, {
					className: "dropdown-wallet-section"
				}, B().createElement("span", {
					className: "icon-robux-28x28",
					id: "nav-robux"
				}), B().createElement("span", {
					id: "nav-robux-balance"
				}, m))), n !== _.control && B().createElement("li", {
					className: "dropdown-wallet"
				}, B().createElement(A.Link, {
					className: "dropdown-wallet-section"
				}, B().createElement("span", {
					className: "icon-menu-wallet"
				}), r ? y : B().createElement("span", {
					className: "dropdown-credit-balance",
					"data-amount": t,
					"data-currency-code": a
				}))), B().createElement("li", {
					className: "rbx-divider"
				})), o ? B().createElement("li", null, B().createElement("button", {
					type: "button",
					cssClasses: "rbx-menu-item",
					onClick: s
				}, f(_r.buyRobux.label))) : B().createElement("li", {
					className: "rbx-menu-item-container"
				}, B().createElement(A.Link, {
					cssClasses: "rbx-menu-item buy-robux-button",
					url: _r.buyRobux.url,
					onClick: function() {
						var e;
						e = xe.paymentFlowAnalyticsService.ENUM_VIEW_MESSAGE.BUY_ROBUX, xe.paymentFlowAnalyticsService.sendUserPurchaseFlowEvent(xe.paymentFlowAnalyticsService.ENUM_TRIGGERING_CONTEXT.WEB_ROBUX_PURCHASE, !1, xe.paymentFlowAnalyticsService.ENUM_VIEW_NAME.NAVIGATION_DROPDOWN_MENU, xe.paymentFlowAnalyticsService.ENUM_PURCHASE_EVENT_TYPE.USER_INPUT, e),
							function(e) {
								var t = Ir(e);
								switch (e) {
									case Tr.VIRTUAL_ITEM:
										xe.localStorageService.setLocalStorage(t, Math.floor(Date.now() / 1e3));
										break;
									case Tr.UPDATE:
									case Tr.PERSONALIZED_BONUS_ITEMS:
										xe.localStorageService.setLocalStorage(t, "true")
								}
							}(d)
					}
				}, B().createElement("span", {
					className: "buy-robux-link-container"
				}, f(_r.buyRobux.label), c && B().createElement("div", {
					className: "new-item-pill small"
				}, B().createElement("span", {
					className: "new-item-pill-text"
				}, f(c)))))), b && B().createElement("li", null, B().createElement("button", {
					type: "button",
					cssClasses: "rbx-menu-item",
					onClick: l
				}, f(Fr.label) || "Buy Gift Card")), B().createElement("li", null, B().createElement(A.Link, {
					cssClasses: "rbx-menu-item",
					url: _r.myTransactions.url
				}, f(_r.myTransactions.label))), B().createElement("li", null, B().createElement(A.Link, {
					cssClasses: "rbx-menu-item",
					url: jr.url
				}, f(jr.label))), n !== _.control && e && B().createElement("li", null, B().createElement(A.Link, {
					cssClasses: "rbx-menu-item",
					onClick: u
				}, f("Label.ConvertCreditSuccess"))))
			}
			Br.defaultProps = {
				isEligibleForVng: !1,
				robuxAmount: 0,
				robuxError: "",
				creditAmount: 0,
				currencyCode: "",
				creditError: "",
				robuxBadgeType: null
			}, Br.propTypes = {
				isEligibleForVng: f().bool,
				translate: f().func.isRequired,
				robuxAmount: f().number,
				robuxError: f().string,
				creditAmount: f().number,
				currencyCode: f().string,
				creditError: f().string,
				robuxBadgeType: f().oneOf(Object.values(Tr)),
				creditDisplayConfig: f().string.isRequired,
				openConvertCreditModal: f().func.isRequired,
				onBuyGiftCardClick: f().func.isRequired,
				onBuyRobuxExternalClick: f().func.isRequired
			};
			var qr = Br;

			function Gr(e) {
				var t = e.creditAmount,
					n = e.currencyCode,
					e = e.creditError,
					e = B().createElement(M.Fragment, null, B().createElement("span", {
						className: "icon-menu-wallet roblox-popover-close",
						id: "nav-credit-icon"
					}), B().createElement("span", {
						className: "rbx-text-navbar-right text-header",
						id: "nav-robux-amount"
					}, e ? B().createElement("div", {
						className: "nav-credit-text"
					}, y) : B().createElement("div", {
						className: "credit-balance",
						"data-amount": t,
						"data-currency-code": n
					})));
				return (0, M.useEffect)(function() {
					window.dispatchEvent(new CustomEvent("price-tag:render", {
						detail: {
							targetSelector: ".credit-balance",
							tagClassName: "navbar-compact nav-credit-text"
						}
					}))
				}, [t, n]), B().createElement(M.Fragment, null, B().createElement("span", {
					id: "nav-robux-icon",
					className: "nav-robux-icon rbx-menu-item nav-credit"
				}, e))
			}
			Gr.defaultProps = {
				creditAmount: 0,
				creditError: "",
				currencyCode: "USD"
			}, Gr.propTypes = {
				creditAmount: f().number,
				creditError: f().string,
				currencyCode: f().string
			};
			var Vr = Gr;

			function Kr(e) {
				var t = e.translate,
					n = e.isShopModalOpen,
					r = e.closeShopModal,
					a = e.onModalContinue,
					e = B().createElement(B().Fragment, null, B().createElement("p", {
						className: "shop-description"
					}, t("Description.RetailWebsiteRedirect")), B().createElement("p", {
						className: "shop-warning"
					}, t("Description.PurchaseAgeWarning")));
				return B().createElement(A.SimpleModal, {
					title: t("Heading.LeavingRoblox"),
					body: e,
					show: n,
					actionButtonShow: !0,
					actionButtonText: t("Action.Continue"),
					neutralButtonText: t("Action.Cancel"),
					onAction: a,
					onNeutral: r,
					onClose: r
				})
			}
			Kr.propTypes = {
				translate: f().func.isRequired,
				isShopModalOpen: f().bool.isRequired,
				closeShopModal: f().func.isRequired,
				onModalContinue: f().func.isRequired
			};
			var Hr = (0, V.withTranslations)(Kr, s);

			function Wr(e) {
				var t = e.translate,
					n = e.isOpen,
					r = e.onClose,
					a = e.onContinue,
					e = B().createElement(B().Fragment, null, B().createElement("p", {
						className: "modal-body"
					}, t("Description.RedirectToPartnerWebsite") || "This purchase must be completed on our partner’s website. You will be returned to Roblox after the purchase is completed.\n\nProceed to partner website for payment?"));
				return B().createElement(A.SimpleModal, {
					title: t("Heading.LeaveRoblox") || "Leaving Roblox",
					body: e,
					show: n,
					actionButtonShow: !0,
					actionButtonText: t("Action.ContinueToPayment") || "Continue to Payment",
					neutralButtonText: t("Action.Cancel") || "Cancel",
					onAction: a,
					onNeutral: r,
					onClose: r
				})
			}
			Wr.propTypes = {
				translate: f().func.isRequired,
				isOpen: f().bool.isRequired,
				onClose: f().func.isRequired,
				onContinue: f().func.isRequired
			};
			var zr = (0, V.withTranslations)(Wr, s);

			function Qr(e, t) {
				return function(e) {
					if (Array.isArray(e)) return e
				}(e) || function(e, t) {
					if ("undefined" == typeof Symbol || !(Symbol.iterator in Object(e))) return;
					var n = [],
						r = !0,
						a = !1,
						o = void 0;
					try {
						for (var i, c = e[Symbol.iterator](); !(r = (i = c.next()).done) && (n.push(i.value), !t || n.length !== t); r = !0);
					} catch (e) {
						a = !0, o = e
					} finally {
						try {
							r || null == c.return || c.return()
						} finally {
							if (a) throw o
						}
					}
					return n
				}(e, t) || function(e, t) {
					if (!e) return;
					if ("string" == typeof e) return Xr(e, t);
					var n = Object.prototype.toString.call(e).slice(8, -1);
					"Object" === n && e.constructor && (n = e.constructor.name);
					if ("Map" === n || "Set" === n) return Array.from(e);
					if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return Xr(e, t)
				}(e, t) || function() {
					throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
				}()
			}

			function Xr(e, t) {
				(null == t || t > e.length) && (t = e.length);
				for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
				return r
			}

			function $r(e) {
				function t(e) {
					xe.paymentFlowAnalyticsService.sendUserPurchaseFlowEvent(b.WEB_ROBUX_PURCHASE, !1, h.NAVIGATION_DROPDOWN_MENU, y.USER_INPUT, e)
				}
				var n = e.creditAmount,
					r = e.creditDisplayConfig,
					a = e.creditError,
					o = e.currencyCode,
					i = e.isEligibleForVng,
					c = e.isExperimentCallDone,
					u = e.isGetCurrencyCallDone,
					l = e.openConvertCreditModal,
					s = e.robuxBadgeType,
					d = e.robuxAmount,
					f = e.robuxError,
					m = e.translate,
					p = H.buyGiftCardUrl,
					v = H.buyRobuxUrl.buyRobuxOnVng,
					b = xe.paymentFlowAnalyticsService.ENUM_TRIGGERING_CONTEXT,
					h = xe.paymentFlowAnalyticsService.ENUM_VIEW_NAME,
					g = xe.paymentFlowAnalyticsService.ENUM_VIEW_MESSAGE,
					y = xe.paymentFlowAnalyticsService.ENUM_PURCHASE_EVENT_TYPE,
					S = (0, M.useRef)(),
					E = Qr((0, M.useState)(!1), 2),
					w = E[0],
					C = E[1],
					e = Qr((0, M.useState)(!1), 2),
					E = e[0],
					x = e[1];
				return B().createElement("li", {
					id: "navbar-robux",
					ref: S,
					className: T()("navbar-icon-item", {
						"robux-popover-margins": r === _.hideCreditAndRobux
					})
				}, B().createElement(Hr, {
					isShopModalOpen: w,
					closeShopModal: function() {
						C(!1)
					},
					onModalContinue: function() {
						t(g.CONTINUE_TO_CASHSTAR);
						var e = decodeURIComponent(p.url);
						window.open(e, "_blank")
					}
				}), i && B().createElement(zr, {
					isOpen: E,
					onClose: function() {
						x(!1)
					},
					onContinue: function() {
						t(g.CONTINUE_TO_VNG), Ee().then(function(e) {
							e = e.data.vngShopRedirectUrl;
							window.open(e || v.url, "_blank").focus()
						}, function() {
							window.open(v.url, "_blank").focus()
						}), x(!1)
					}
				}), c && B().createElement(A.Popover, {
					id: "buy-robux-popover",
					trigger: "click",
					placement: "bottom",
					button: B().createElement("button", {
						type: "button",
						className: "btn-navigation-nav-robux-md"
					}, B().createElement(Pr, {
						robuxAmount: d,
						isGetCurrencyCallDone: u,
						robuxError: f,
						creditDisplayConfig: r,
						robuxBadgeType: s
					}), r === _.showCreditAndRobux && B().createElement(Vr, {
						creditAmount: n,
						currencyCode: o,
						creditError: a
					})),
					role: "menu",
					container: S.current
				}, B().createElement("div", {
					className: We()
				}, B().createElement("ul", {
					id: "buy-robux-popover-menu",
					className: "dropdown-menu"
				}, B().createElement(qr, {
					isEligibleForVng: i,
					translate: m,
					robuxAmount: d,
					robuxError: f,
					creditAmount: n,
					currencyCode: o,
					creditError: a,
					creditDisplayConfig: r,
					openConvertCreditModal: l,
					onBuyGiftCardClick: function() {
						t(g.BUY_GIFT_CARD), C(!0)
					},
					onBuyRobuxExternalClick: function() {
						t(g.EXTERNAL_LINK_MODAL), x(!0)
					},
					robuxBadgeType: s
				})))))
			}
			$r.defaultProps = {
				robuxAmount: 0,
				robuxError: "",
				creditAmount: 0,
				creditError: "",
				currencyCode: "USD",
				creditDisplayConfig: _.control,
				isExperimentCallDone: !1,
				isEligibleForVng: !1,
				robuxBadgeType: null
			}, $r.propTypes = {
				translate: f().func.isRequired,
				robuxAmount: f().number,
				robuxError: f().string,
				isGetCurrencyCallDone: f().bool.isRequired,
				creditAmount: f().number,
				currencyCode: f().string,
				creditError: f().string,
				creditDisplayConfig: f().string,
				isExperimentCallDone: f().bool,
				openConvertCreditModal: f().func.isRequired,
				isEligibleForVng: f().bool,
				robuxBadgeType: f().oneOf(Object.values(Tr))
			};
			var Yr = $r;

			function Zr(e) {
				e = e.toggleUniverseSearch;
				return B().createElement("li", {
					className: "rbx-navbar-right-search"
				}, B().createElement("button", {
					type: "button",
					className: "rbx-menu-item btn-navigation-nav-search-white-md",
					onClick: e
				}, B().createElement("span", {
					className: "icon-nav-search-white"
				})))
			}
			Zr.propTypes = {
				toggleUniverseSearch: f().func.isRequired
			};
			var Jr = Zr;

			function ea() {
				var t = (0, M.useRef)(null),
					e = L.authenticatedUser.isUnder13,
					n = (0, v.currentUserHasVerifiedBadge)() && v.VerifiedBadgeIconContainer ? B().createElement("section", {
						ref: function(e) {
							t.current = e
						}
					}, B().createElement(v.VerifiedBadgeIconContainer, {
						overrideImgClass: "verified-badge-icon-header",
						size: v.BadgeSizes.CAPTIONHEADER
					})) : null;
				return B().createElement("div", {
					className: "age-bracket-label text-header"
				}, B().createElement(A.Link, {
					className: "text-link dynamic-overflow-container",
					url: H.scrollListItems.profile.url
				}, B().createElement("span", {
					className: "avatar avatar-headshot-xs"
				}, B().createElement(p.Thumbnail2d, {
					containerClass: "avatar-card-image",
					targetId: L.authenticatedUser.id,
					type: p.ThumbnailTypes.avatarHeadshot,
					altName: L.authenticatedUser.name
				})), B().createElement("span", {
					className: "text-overflow age-bracket-label-username font-caption-header"
				}, vt.nameForDisplay), n), B().createElement("span", {
					className: "xsmall age-bracket-label-age text-secondary"
				}, e ? "<13" : "13+"))
			}

			function ta() {
				return ka(void 0, void 0, Promise, function() {
					var t;
					return _a(this, function(e) {
						return t = {
							withCredentials: !0,
							url: G.EnvironmentUrls.apiGatewayUrl + "/credit-balance/v1/get-next-purchasable-metadata"
						}, [2, q.httpService.get(t)]
					})
				})
			}

			function na(r) {
				return ka(void 0, void 0, Promise, function() {
					var t, n;
					return _a(this, function(e) {
						return t = {
							paymentProviderType: "Credit",
							providerPayload: {
								product_id: 0 === r || null == r ? void 0 : r
							}
						}, n = {
							withCredentials: !0,
							url: G.EnvironmentUrls.apiGatewayUrl + "/payments-gateway/v1/process-payment"
						}, [2, q.httpService.post(n, t)]
					})
				})
			}
			var ra = "Label.AvailableCreditWithColon",
				aa = "Label.BalanceDue",
				oa = "Label.CreditAfterTransaction",
				ia = "Action.Buy",
				ca = "Action.Cancel",
				ua = "Action.ConvertToRobux",
				la = "Label.ConvertCreditSuccess",
				sa = "Heading.BuyRobuxWithCredit",
				da = "Message.Step1LargestAvailablePackageYouCanBuy",
				fa = "Message.Step2NextLargestPackage",
				ma = "Message.Step3ConvertRobux",
				pa = "Message.ConvertCreditToRobux",
				va = "Alert.RobuxPackagePurchased",
				ba = "Alert.RobuxPackagePurchaseFailed",
				ha = "Alert.SuccessfullyConvertedCreditToRobux",
				ga = "Heading.CreditConversionFail",
				ya = "Alert.GenericFailure",
				Sa = "NewCreditConversionGetNextPurchasableFailedStatusCode",
				Ea = "NewCreditConversionGetNextPurchasableCreditBalanceZero",
				wa = "NewCreditConversionGetNextPurchasableUnexpectedException",
				Ca = "NewCreditConversionGetNextPurchasableConversion",
				xa = "NewCreditConversionGetNextPurchasableProductPurchase",
				Aa = "ProcessPaymentRequestFailedStatusCode",
				Ra = "ProcessPaymentNextStep",
				Oa = "ProcessPaymentNotSuccessful",
				Ta = "ProcessPaymentNotSuccessful",
				Na = "ProcessPaymentUnexpectedException",
				Ia = "ProcessPaymentEconomicRestriction",
				Ua = "ConversionCancelClicked",
				Pa = "ProductPurchaseCancelClicked",
				La = {
					common: ["CommonUI.Controls", "CommonUI.Features", "IAPExperience.PurchaseError", "Feature.NotApproved"],
					feature: "Purchasing.RedeemGameCard"
				},
				ka = function(e, i, c, u) {
					return new(c = c || Promise)(function(n, t) {
						function r(e) {
							try {
								o(u.next(e))
							} catch (e) {
								t(e)
							}
						}

						function a(e) {
							try {
								o(u.throw(e))
							} catch (e) {
								t(e)
							}
						}

						function o(e) {
							var t;
							e.done ? n(e.value) : ((t = e.value) instanceof c ? t : new c(function(e) {
								e(t)
							})).then(r, a)
						}
						o((u = u.apply(e, i || [])).next())
					})
				},
				_a = function(n, r) {
					var a, o, i, c = {
							label: 0,
							sent: function() {
								if (1 & i[0]) throw i[1];
								return i[1]
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
								if (a) throw new TypeError("Generator is already executing.");
								for (; c;) try {
									if (a = 1, o && (i = 2 & t[0] ? o.return : t[0] ? o.throw || ((i = o.return) && i.call(o), 0) : o.next) && !(i = i.call(o, t[1])).done) return i;
									switch (o = 0, i && (t = [2 & t[0], i.value]), t[0]) {
										case 0:
										case 1:
											i = t;
											break;
										case 4:
											return c.label++, {
												value: t[1],
												done: !1
											};
										case 5:
											c.label++, o = t[1], t = [0];
											continue;
										case 7:
											t = c.ops.pop(), c.trys.pop();
											continue;
										default:
											if (!(i = 0 < (i = c.trys).length && i[i.length - 1]) && (6 === t[0] || 2 === t[0])) {
												c = 0;
												continue
											}
											if (3 === t[0] && (!i || t[1] > i[0] && t[1] < i[3])) {
												c.label = t[1];
												break
											}
											if (6 === t[0] && c.label < i[1]) {
												c.label = i[1], i = t;
												break
											}
											if (i && c.label < i[2]) {
												c.label = i[2], c.ops.push(t);
												break
											}
											i[2] && c.ops.pop(), c.trys.pop();
											continue
									}
									t = r.call(n, c)
								} catch (e) {
									t = [6, e], o = 0
								} finally {
									a = i = 0
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
				ja = "ar-",
				Fa = "en-",
				Da = ["JPY"],
				Ma = {
					PRICE_DATA_NOT_VALID: (l = "PriceTag") + "DataNotValid",
					NUMBER_FORMAT_LOCALE_EXCEPTION: l + "NumberFormatLocaleException",
					ARABIC_LOCALE_TRIGGERED: l + "ArabicLocale"
				};

			function Ba(e) {
				var t = e.amount,
					n = e.currencyCode,
					r = e.tagClassName,
					e = t < 0,
					a = Math.abs(t),
					o = "" + a + n,
					i = T()("price-tag", r);
				try {
					var c = (u = Intl.NumberFormat().resolvedOptions().locale).startsWith(ja) ? ((0, Nt.fireEvent)(Ma.ARABIC_LOCALE_TRIGGERED), u.replace(ja, Fa)) : u,
						u = {
							style: "currency",
							currency: n,
							notation: "standard"
						};
					1e4 <= a && !Da.includes(n) && (u.minimumFractionDigits = 0, u.maximumFractionDigits = 2, u.maximumSignificantDigits = 21, u.notation = "compact"), i.split(" ").includes("navbar-compact") && (u.maximumSignificantDigits = 4), o = Intl.NumberFormat(c, u).format(a)
				} catch (e) {
					(0, Nt.fireEvent)(Ma.NUMBER_FORMAT_LOCALE_EXCEPTION)
				}
				return B().createElement("div", {
					className: "d-flex-inline gap-1 justify-content-start align-items-center"
				}, e && B().createElement("span", {
					className: i
				}, "-"), B().createElement("span", {
					className: i
				}, o))
			}
			Ba.propTypes = {
				amount: f().number.isRequired,
				currencyCode: f().string.isRequired
			};
			var qa = Ba,
				Ga = {
					FraudPaymentAbuse: "FraudPaymentAbuse",
					FraudVirtualEconomyAbuse: "FraudVirtualEconomyAbuse",
					FraudAbuseOfTheAffiliateSystem: "FraudAbuseOfTheAffiliateSystem",
					FraudAttemptedUnauthorizedPaymentMethodUse: "FraudAttemptedUnauthorizedPaymentMethodUse",
					FraudRepeatedRefundRequests: "FraudRepeatedRefundRequests",
					FraudSuspiciousRefundRequests: "FraudSuspiciousRefundRequests",
					FraudUnauthorizedPurchase: "FraudUnauthorizedPurchase",
					FraudUseOfUnauthorizedOffPlatformTransactions: "FraudUseOfUnauthorizedOffPlatformTransactions",
					FraudUseOfUnauthorizedPaymentMethod: "FraudUseOfUnauthorizedPaymentMethod",
					FraudSuspiciousAccountPatterns: "FraudSuspiciousAccountPatterns"
				};

			function Va(e, t) {
				switch (t) {
					case Ga.FraudPaymentAbuse:
						return e("Label.Sublabel.FraudPaymentAbuse");
					case Ga.FraudVirtualEconomyAbuse:
						return e("Label.Sublabel.FraudVirtualEconomyAbuse");
					case Ga.FraudAbuseOfTheAffiliateSystem:
						return e("Label.Sublabel.FraudAbuseOfTheAffiliateSystem");
					case Ga.FraudAttemptedUnauthorizedPaymentMethodUse:
						return e("Label.Sublabel.FraudAttemptedUnauthorizedPaymentMethodUse");
					case Ga.FraudRepeatedRefundRequests:
						return e("Label.Sublabel.FraudRepeatedRefundRequests");
					case Ga.FraudSuspiciousRefundRequests:
						return e("Label.Sublabel.FraudSuspiciousRefundRequests");
					case Ga.FraudUnauthorizedPurchase:
						return e("Label.Sublabel.FraudUnauthorizedPurchase");
					case Ga.FraudUseOfUnauthorizedOffPlatformTransactions:
						return e("Label.Sublabel.FraudUseOfUnauthorizedOffPlatformTransactions");
					case Ga.FraudUseOfUnauthorizedPaymentMethod:
						return e("Label.Sublabel.FraudUseOfUnauthorizedPaymentMethod");
					case Ga.FraudSuspiciousAccountPatterns:
						return e("Label.Sublabel.FraudSuspiciousAccountPatterns");
					default:
						return e("Label.Sublabel.FraudPaymentAbuse")
				}
			}
			var Ka, Ha, Wa = function(e, i, c, u) {
					return new(c = c || Promise)(function(n, t) {
						function r(e) {
							try {
								o(u.next(e))
							} catch (e) {
								t(e)
							}
						}

						function a(e) {
							try {
								o(u.throw(e))
							} catch (e) {
								t(e)
							}
						}

						function o(e) {
							var t;
							e.done ? n(e.value) : ((t = e.value) instanceof c ? t : new c(function(e) {
								e(t)
							})).then(r, a)
						}
						o((u = u.apply(e, i || [])).next())
					})
				},
				za = function(n, r) {
					var a, o, i, c = {
							label: 0,
							sent: function() {
								if (1 & i[0]) throw i[1];
								return i[1]
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
								if (a) throw new TypeError("Generator is already executing.");
								for (; c;) try {
									if (a = 1, o && (i = 2 & t[0] ? o.return : t[0] ? o.throw || ((i = o.return) && i.call(o), 0) : o.next) && !(i = i.call(o, t[1])).done) return i;
									switch (o = 0, i && (t = [2 & t[0], i.value]), t[0]) {
										case 0:
										case 1:
											i = t;
											break;
										case 4:
											return c.label++, {
												value: t[1],
												done: !1
											};
										case 5:
											c.label++, o = t[1], t = [0];
											continue;
										case 7:
											t = c.ops.pop(), c.trys.pop();
											continue;
										default:
											if (!(i = 0 < (i = c.trys).length && i[i.length - 1]) && (6 === t[0] || 2 === t[0])) {
												c = 0;
												continue
											}
											if (3 === t[0] && (!i || t[1] > i[0] && t[1] < i[3])) {
												c.label = t[1];
												break
											}
											if (6 === t[0] && c.label < i[1]) {
												c.label = i[1], i = t;
												break
											}
											if (i && c.label < i[2]) {
												c.label = i[2], c.ops.push(t);
												break
											}
											i[2] && c.ops.pop(), c.trys.pop();
											continue
									}
									t = r.call(n, c)
								} catch (e) {
									t = [6, e], o = 0
								} finally {
									a = i = 0
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
				Qa = (l = (Q = (0, A.createModal)(), Ka = Q[0], [function(e) {
					var t = e.availableBalance,
						n = e.totalBalanceDue,
						r = e.currencyCode,
						a = e.numberOfPurchase,
						o = e.robuxAmountInPackage,
						i = e.loading,
						c = e.onNeutral,
						u = e.onPurchase,
						e = e.translate;
					return B().createElement(Ka, {
						id: "purchase-product-modal",
						title: e(sa),
						body: B().createElement("div", {
							className: "d-flex justify-content-center flex-direction-column text-center"
						}, B().createElement("div", {
							className: "purchase-prompt"
						}, 1 === a ? e(da) || "Largest package you can buy with your available credit:" : e(fa)), B().createElement("div", {
							className: "purchase-logo"
						}, B().createElement("div", {
							className: T()("robux-product-logo", "margin-auto", "robux-graphic", "robux-" + o)
						}), B().createElement("div", null, B().createElement("span", {
							className: "icon-robux-16x16"
						}), B().createElement("span", {
							className: "text-robux"
						}, o))), B().createElement("div", {
							className: "purchase-summary d-flex flex-direction-column text-left"
						}, B().createElement("div", {
							className: "available-credit d-flex justify-content-between"
						}, B().createElement("span", null, e(ra)), B().createElement(qa, {
							amount: t,
							currencyCode: r
						})), B().createElement("div", {
							className: "balance-due d-flex justify-content-between"
						}, B().createElement("span", null, e(aa)), B().createElement(qa, {
							amount: -1 * n,
							currencyCode: r
						})), B().createElement("div", {
							className: "rbx-divider"
						}), B().createElement("div", {
							className: "credit-after-transaction d-flex justify-content-between"
						}, B().createElement("span", null, e(oa)), B().createElement(qa, {
							amount: t - n,
							currencyCode: r
						})))),
						neutralButtonText: e(ca),
						actionButtonText: e(ia),
						onNeutral: c,
						onAction: u,
						loading: i,
						actionButtonShow: !0
					})
				}, Q[1]]))[0],
				Xa = l[1],
				$a = (l = (Q = (0, A.createModal)(), Ha = Q[0], [function(e) {
					var t = e.remainingCreditBalance,
						n = e.currencyCode,
						r = e.robuxConversionAmount,
						a = e.loading,
						o = e.numberOfPurchase,
						i = e.onConvert,
						c = e.onNeutral,
						e = e.translate,
						r = B().createElement("div", {
							className: "text-center conversion-message",
							dangerouslySetInnerHTML: {
								__html: 1 === o ? e(pa, {
									robuxAmount: '<br /><span class="icon-robux-16x16"></span>' + r
								}) : e(ma, {
									remainingCreditBalance: "<span class='fiat-price-tag ml-1' data-amount=" + t + " data-currency-code=" + n + "></span>",
									lineBreaker: "<br />",
									robuxConversionAmount: '<span class="icon-robux-16x16"></span>' + r
								})
							},
							ref: function() {
								window.dispatchEvent(new CustomEvent("price-tag:render", {
									detail: {
										targetSelector: ".fiat-price-tag"
									}
								}))
							}
						});
					return B().createElement(Ha, {
						id: "convert-credit-modal",
						title: e(la),
						body: r,
						neutralButtonText: e(ca),
						actionButtonText: e(ua),
						onNeutral: c,
						onAction: i,
						loading: a,
						actionButtonShow: !0
					})
				}, Q[1]]))[0],
				Ya = l[1],
				Za = function(e) {
					function o(e, t) {
						f.warning(e), Xa.close(), Ya.close(), t && (window.location.href = q.urlService.getAbsoluteUrl("/upgrades/robux"))
					}

					function i() {
						o(m(ya) || "Something went wrong! Please try again later.", !0)
					}

					function c(e, t) {
						t = 0 === t || null == t, e ? f.success(m(t ? ha : va)) : f.warning(m(t ? ga : ba) || m(ya) || "Something went wrong! Please try again later.")
					}

					function u() {
						return Wa(t, void 0, void 0, function() {
							var t;
							return za(this, function(e) {
								switch (e.label) {
									case 0:
										C(!0), e.label = 1;
									case 1:
										return e.trys.push([1, 3, 4, 5]), [4, ta()];
									case 2:
										return 200 !== (t = e.sent()).status ? (f.warning(m(ya) || "Something went wrong! Please try again later."), C(!1), (0, Nt.fireEvent)(Sa), (0, Nt.fireEvent)("" + Sa + t.status), [2]) : 0 === (t = t.data).creditBalance || 0 === t.productId && 0 === t.robuxConversionAmount ? (C(!1), Ya.close(), Xa.close(), r(t.creditBalance), (0, Nt.fireEvent)(Ea), [2]) : (r(t.creditBalance), l(t.currencyCode), d(t.robuxConversionAmount), v(t.productId), y(t.balanceDue), E(t.robuxAmountProductGrant), 0 === t.productId ? (Ya.open(), Xa.close(), (0, Nt.fireEvent)(Ca)) : (Xa.open(), (0, Nt.fireEvent)(xa)), [3, 5]);
									case 3:
										return e.sent(), i(), (0, Nt.fireEvent)(wa), [3, 5];
									case 4:
										return C(!1), [7];
									case 5:
										return [2]
								}
							})
						})
					}
					var t = this,
						n = e.creditBalance,
						r = e.setCreditBalance,
						a = e.currencyCode,
						l = e.setCurrencyCode,
						s = e.convertedRobuxAmount,
						d = e.setConvertedRobuxAmount,
						f = e.systemFeedbackService,
						m = e.translate,
						p = (e = (0, M.useState)(0))[0],
						v = e[1],
						b = (e = (0, M.useState)(0))[0],
						h = e[1],
						g = (e = (0, M.useState)(0))[0],
						y = e[1],
						S = (e = (0, M.useState)(0))[0],
						E = e[1],
						w = (e = (0, M.useState)(!1))[0],
						C = e[1],
						x = function() {
							return Wa(t, void 0, void 0, function() {
								var n, r, a;
								return za(this, function(e) {
									switch (e.label) {
										case 0:
											C(!0), e.label = 1;
										case 1:
											return e.trys.push([1, 6, 7, 8]), [4, na(p)];
										case 2:
											return 200 !== (n = e.sent()).status ? (c(!1, p), C(!1), (0, Nt.fireEvent)(Aa), (0, Nt.fireEvent)("" + Aa + n.status), [2]) : (r = n.data, c(r.isSuccess, p), r.isSuccess && null !== (a = r.providerPayload) && void 0 !== a && a.IsSuccessful ? [4, u()] : [3, 4]);
										case 3:
											return e.sent(), h(b + 1), (0, Nt.fireEvent)(Ra), [3, 5];
										case 4:
											Xa.close(), Ya.close(), (0, Nt.fireEvent)(Oa), e.label = 5;
										case 5:
											return (0, Nt.fireEvent)(Ta + r.providerPayload.ResponseMessage), [3, 8];
										case 6:
											return (r = e.sent(), void 0 !== (t = r).data && void 0 !== t.data.expirationTimeInMinutes && void 0 !== t.data.failureReason) ? (o(function(e) {
												var t = e.translate,
													n = e.violation,
													r = e.timeoutDurationInMinutes;
												if (24 < (e = Math.ceil(r / 60))) {
													r = Math.ceil(e / 24);
													return t("Text.EconomicRestrictionsDays", {
														violation: Va(t, n),
														day: r
													})
												}
												return t("Text.EconomicRestrictionsHours", {
													violation: Va(t, n),
													hour: e
												})
											}({
												translate: m,
												violation: r.data.failureReason,
												timeoutDurationInMinutes: r.data.expirationTimeInMinutes
											}), !1), (0, Nt.fireEvent)(Ia), [2]) : (i(), (0, Nt.fireEvent)(Na), [3, 8]);
										case 7:
											return C(!1), [7];
										case 8:
											return [2]
									}
									var t
								})
							})
						};
					return [(0, V.withTranslations)(function() {
						function e() {
							0 === p ? (Ya.close(), (0, Nt.fireEvent)(Ua)) : (Xa.close(), (0, Nt.fireEvent)(Pa))
						}
						return B().createElement(M.Fragment, null, B().createElement(Qa, {
							availableBalance: n,
							totalBalanceDue: g,
							currencyCode: a,
							numberOfPurchase: b,
							robuxAmountInPackage: S,
							onPurchase: function() {
								x()
							},
							onNeutral: e,
							loading: w,
							translate: m
						}), B().createElement($a, {
							remainingCreditBalance: n,
							currencyCode: a,
							robuxConversionAmount: s,
							numberOfPurchase: b,
							onConvert: function() {
								x()
							},
							onNeutral: e,
							loading: w,
							translate: m
						}))
					}, La), function() {
						h(0), u(), h(1)
					}]
				};

			function Ja(e, t) {
				return function(e) {
					if (Array.isArray(e)) return e
				}(e) || function(e, t) {
					if ("undefined" == typeof Symbol || !(Symbol.iterator in Object(e))) return;
					var n = [],
						r = !0,
						a = !1,
						o = void 0;
					try {
						for (var i, c = e[Symbol.iterator](); !(r = (i = c.next()).done) && (n.push(i.value), !t || n.length !== t); r = !0);
					} catch (e) {
						a = !0, o = e
					} finally {
						try {
							r || null == c.return || c.return()
						} finally {
							if (a) throw o
						}
					}
					return n
				}(e, t) || function(e, t) {
					if (!e) return;
					if ("string" == typeof e) return eo(e, t);
					var n = Object.prototype.toString.call(e).slice(8, -1);
					"Object" === n && e.constructor && (n = e.constructor.name);
					if ("Map" === n || "Set" === n) return Array.from(e);
					if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return eo(e, t)
				}(e, t) || function() {
					throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
				}()
			}

			function eo(e, t) {
				(null == t || t > e.length) && (t = e.length);
				for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
				return r
			}
			var to = m,
				no = (m = Ja((0, A.createSystemFeedback)(), 2))[0],
				ro = m[1];

			function ao(e) {
				function t() {
					a && (d(!1), me(o).then(function(e) {
						e = e.data;
						p(e.robux)
					}, function() {
						A(n(k))
					}).finally(function() {
						d(!0)
					}))
				}
				var n = e.translate,
					r = e.toggleUniverseSearch,
					a = L.authenticatedUser.isAuthenticated,
					o = L.authenticatedUser.id,
					i = Ja((0, M.useState)(0), 2),
					c = i[0],
					u = i[1],
					l = Ja((0, M.useState)(!1), 2),
					s = l[0],
					d = l[1],
					f = Ja((0, M.useState)(0), 2),
					m = f[0],
					p = f[1],
					v = Ja((0, M.useState)(!1), 2),
					b = v[0],
					h = v[1],
					g = Ja((0, M.useState)(!0), 2),
					y = g[0],
					S = g[1],
					E = Ja((0, M.useState)(null), 2),
					w = E[0],
					C = E[1],
					x = Ja((0, M.useState)(""), 2),
					e = x[0],
					A = x[1],
					i = Ja((0, M.useState)(_.control), 2),
					l = i[0],
					R = i[1],
					f = Ja((0, M.useState)(null), 2),
					v = f[0],
					O = f[1],
					g = Ja((0, M.useState)(null), 2),
					E = g[0],
					T = g[1],
					x = Ja((0, M.useState)(""), 2),
					i = x[0],
					N = x[1],
					f = Ja((0, M.useState)(!1), 2),
					g = f[0],
					I = f[1],
					x = Ja((0, M.useState)(0), 2),
					f = x[0],
					x = x[1],
					f = Ja(Za({
						creditBalance: v,
						setCreditBalance: O,
						currencyCode: E,
						setCurrencyCode: T,
						convertedRobuxAmount: f,
						setConvertedRobuxAmount: x,
						systemFeedbackService: ro,
						translate: n
					}), 2),
					x = f[0],
					U = f[1];
				(0, M.useEffect)(function() {
					window.addEventListener("navigation-update-user-currency", function(e) {
						t()
					})
				}, []), (0, M.useEffect)(function() {
					if (a) {
						to().then(u), t(), a && pe().then(function(e) {
							e = e.data;
							h(e.shouldShowVng), S(e.notificationsCanAccessStream)
						}, function() {
							A(n(k))
						}), a && we().then(function(e) {
							var t = e.data,
								e = Ur();
							t.is_virtual_item_available && e && C(e)
						}), ge().then(function(e) {
							var t = e.data;
							null === t.creditDisplayConfig || null === t.creditBalance || 0 === t.creditBalance || null === t.currencyCode ? R(_.control) : R(null !== (e = t.creditDisplayConfig) && void 0 !== e ? e : _.control), O(t.creditBalance), T(t.currencyCode)
						}, function() {
							N(n(k))
						}).finally(function() {
							I(!0)
						});
						try {
							xe.localStorageService.getLocalStorage(j.accountSwitchedFlag) && (ro.success(n(j.accountSwitchedMessage, {
								accountName: L.authenticatedUser.name
							}), 0, 5e3), xe.localStorageService.removeLocalStorage(j.accountSwitchedFlag))
						} catch (e) {}
					}
				}, [a, o]);
				var P = B().createElement("li", {
					id: "navbar-stream",
					className: "navbar-icon-item navbar-stream"
				}, B().createElement("span", {
					className: "nav-robux-icon rbx-menu-item"
				}, B().createElement("span", {
					id: "notification-stream-icon-container",
					"notification-stream-indicator": "true"
				})));
				try {
					In().module("notificationStreamIcon"), In().module("notificationStream"), P = B().createElement(Hn, null)
				} catch (e) {
					console.log(e)
				}
				return B().createElement("ul", {
					className: "nav navbar-right rbx-navbar-icon-group"
				}, B().createElement(no, null), B().createElement(ea, null), B().createElement(Jr, {
					translate: n,
					toggleUniverseSearch: r
				}), y && P, B().createElement(Yr, {
					translate: n,
					robuxAmount: m,
					robuxError: e,
					creditAmount: v,
					currencyCode: E,
					creditError: i,
					creditDisplayConfig: l,
					isEligibleForVng: b,
					isExperimentCallDone: g,
					isGetCurrencyCallDone: s,
					openConvertCreditModal: function() {
						U()
					},
					robuxBadgeType: w
				}), B().createElement(Or, {
					translate: n,
					accountNotificationCount: c
				}), B().createElement(x, null))
			}
			ao.propTypes = {
				translate: f().func.isRequired,
				toggleUniverseSearch: f().func.isRequired
			};
			var oo = (0, V.withTranslations)(ao, {
				common: ["CommonUI.Features", "Common.AlertsAndOptions"],
				feature: "Purchasing.RedeemGameCard"
			});

			function io(e, t, n, r, a, o, i) {
				try {
					var c = e[o](i),
						u = c.value
				} catch (e) {
					return void n(e)
				}
				c.done ? t(u) : Promise.resolve(u).then(r, a)
			}

			function co(e, t) {
				return function(e) {
					if (Array.isArray(e)) return e
				}(e) || function(e, t) {
					if ("undefined" == typeof Symbol || !(Symbol.iterator in Object(e))) return;
					var n = [],
						r = !0,
						a = !1,
						o = void 0;
					try {
						for (var i, c = e[Symbol.iterator](); !(r = (i = c.next()).done) && (n.push(i.value), !t || n.length !== t); r = !0);
					} catch (e) {
						a = !0, o = e
					} finally {
						try {
							r || null == c.return || c.return()
						} finally {
							if (a) throw o
						}
					}
					return n
				}(e, t) || function(e, t) {
					if (!e) return;
					if ("string" == typeof e) return uo(e, t);
					var n = Object.prototype.toString.call(e).slice(8, -1);
					"Object" === n && e.constructor && (n = e.constructor.name);
					if ("Map" === n || "Set" === n) return Array.from(e);
					if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return uo(e, t)
				}(e, t) || function() {
					throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
				}()
			}

			function uo(e, t) {
				(null == t || t > e.length) && (t = e.length);
				for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
				return r
			}
			var lo = r.getSignupUrl,
				so = r.getIsVNGLandingRedirectEnabled;

			function fo(e) {
				var t = e.translate,
					n = co((0, M.useState)(!1), 2),
					e = n[0],
					r = n[1],
					a = co(null !== (n = null === G.AccountSwitcherService || void 0 === G.AccountSwitcherService ? void 0 : G.AccountSwitcherService.useIsAccountSwitcherAvailableForBrowser()) && void 0 !== n ? n : [!1], 1)[0];
				return (0, M.useEffect)(function() {
					try {
						(0, xe.dataStores.authIntentDataStore.saveGameIntentFromCurrentUrl)()
					} catch (e) {
						console.error("Failed to save game intent from current url", e)
					}
				}, []), (0, M.useEffect)(function() {
					(function() {
						var c, e = (c = regeneratorRuntime.mark(function e() {
							var t;
							return regeneratorRuntime.wrap(function(e) {
								for (;;) switch (e.prev = e.next) {
									case 0:
										return e.prev = 0, e.next = 3, so();
									case 3:
										t = e.sent, r(!t), e.next = 10;
										break;
									case 7:
										e.prev = 7, e.t0 = e.catch(0), r(!0);
									case 10:
									case "end":
										return e.stop()
								}
							}, e, null, [
								[0, 7]
							])
						}), function() {
							var e = this,
								i = arguments;
							return new Promise(function(t, n) {
								var r = c.apply(e, i);

								function a(e) {
									io(r, t, n, a, o, "next", e)
								}

								function o(e) {
									io(r, t, n, a, o, "throw", e)
								}
								a(void 0)
							})
						});
						return function() {
							return e.apply(this, arguments)
						}
					})()()
				}, []), e && B().createElement("li", {
					className: "signup-button-container"
				}, B().createElement(A.Link, {
					onClick: function() {
						window.location.href = lo(a)
					},
					url: lo(a),
					id: "sign-up-button",
					className: "rbx-navbar-signup btn-growth-sm nav-menu-title signup-button"
				}, t("Label.sSignUp")))
			}

			function mo() {
				window.location.href = bo()
			}
			fo.propTypes = {
				translate: f().func.isRequired
			};
			var po = fo,
				vo = r.isLoginLinkAvailable,
				bo = r.getLoginLinkUrl;

			function ho(e) {
				e = e.translate;
				return B().createElement("li", {
					className: "login-action"
				}, vo() && B().createElement(A.Link, {
					onClick: mo,
					url: bo(),
					className: "rbx-navbar-login btn-secondary-sm nav-menu-title rbx-menu-item"
				}, e("Label.sLogin")))
			}
			ho.propTypes = {
				translate: f().func.isRequired
			};
			var go = ho;

			function yo() {
				return (yo = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n, r = arguments[t];
						for (n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n])
					}
					return e
				}).apply(this, arguments)
			}

			function So(e, t) {
				if (null == e) return {};
				var n, r = function(e, t) {
					if (null == e) return {};
					var n, r, a = {},
						o = Object.keys(e);
					for (r = 0; r < o.length; r++) n = o[r], 0 <= t.indexOf(n) || (a[n] = e[n]);
					return a
				}(e, t);
				if (Object.getOwnPropertySymbols)
					for (var a = Object.getOwnPropertySymbols(e), o = 0; o < a.length; o++) n = a[o], 0 <= t.indexOf(n) || Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n]);
				return r
			}

			function Eo(e) {
				var t = e.translate,
					n = e.toggleUniverseSearch,
					e = So(e, ["translate", "toggleUniverseSearch"]);
				return L.authenticatedUser.isAuthenticated ? B().createElement("div", {
					className: "navbar-right rbx-navbar-right"
				}, B().createElement(oo, yo({
					translate: t,
					toggleUniverseSearch: n
				}, e))) : B().createElement("div", {
					className: "navbar-right rbx-navbar-right"
				}, B().createElement("ul", {
					className: "nav navbar-right rbx-navbar-right-nav"
				}, B().createElement(po, {
					translate: t
				}), B().createElement(go, {
					translate: t
				}), B().createElement(Jr, {
					translate: t,
					toggleUniverseSearch: n
				})))
			}
			Eo.propTypes = {
				translate: f().func.isRequired,
				toggleUniverseSearch: f().func.isRequired
			};
			var wo = Eo;

			function Co() {
				return (Co = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n, r = arguments[t];
						for (n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n])
					}
					return e
				}).apply(this, arguments)
			}

			function xo(e, t) {
				return function(e) {
					if (Array.isArray(e)) return e
				}(e) || function(e, t) {
					if ("undefined" == typeof Symbol || !(Symbol.iterator in Object(e))) return;
					var n = [],
						r = !0,
						a = !1,
						o = void 0;
					try {
						for (var i, c = e[Symbol.iterator](); !(r = (i = c.next()).done) && (n.push(i.value), !t || n.length !== t); r = !0);
					} catch (e) {
						a = !0, o = e
					} finally {
						try {
							r || null == c.return || c.return()
						} finally {
							if (a) throw o
						}
					}
					return n
				}(e, t) || function(e, t) {
					if (!e) return;
					if ("string" == typeof e) return Ao(e, t);
					var n = Object.prototype.toString.call(e).slice(8, -1);
					"Object" === n && e.constructor && (n = e.constructor.name);
					if ("Map" === n || "Set" === n) return Array.from(e);
					if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return Ao(e, t)
				}(e, t) || function() {
					throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
				}()
			}

			function Ao(e, t) {
				(null == t || t > e.length) && (t = e.length);
				for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
				return r
			}
			var Ro = (0, V.withTranslations)(function(e) {
				var t = Ge(),
					n = xo((0, M.useState)(t), 2),
					r = n[0],
					a = n[1],
					t = (n = xo((0, M.useState)(!t), 2))[0],
					o = n[1],
					i = (0, M.useCallback)(function() {
						var e = Ge();
						r !== e && (a(e), o(!e))
					}, [r]);
				return (0, M.useEffect)(function() {
					return window.addEventListener("resize", i),
						function() {
							window.removeEventListener("resize", i)
						}
				}, [i]), B().createElement(B().Fragment, null, B().createElement(Nn, Co({
					isUniverseSearchShown: t
				}, e)), B().createElement(wo, Co({
					toggleUniverseSearch: function() {
						o(function(e) {
							return !e
						})
					}
				}, e)))
			}, s);

			function Oo(e, t) {
				return function(e) {
					if (Array.isArray(e)) return e
				}(e) || function(e, t) {
					if ("undefined" == typeof Symbol || !(Symbol.iterator in Object(e))) return;
					var n = [],
						r = !0,
						a = !1,
						o = void 0;
					try {
						for (var i, c = e[Symbol.iterator](); !(r = (i = c.next()).done) && (n.push(i.value), !t || n.length !== t); r = !0);
					} catch (e) {
						a = !0, o = e
					} finally {
						try {
							r || null == c.return || c.return()
						} finally {
							if (a) throw o
						}
					}
					return n
				}(e, t) || function(e, t) {
					if (!e) return;
					if ("string" == typeof e) return To(e, t);
					var n = Object.prototype.toString.call(e).slice(8, -1);
					"Object" === n && e.constructor && (n = e.constructor.name);
					if ("Map" === n || "Set" === n) return Array.from(e);
					if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return To(e, t)
				}(e, t) || function() {
					throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
				}()
			}

			function To(e, t) {
				(null == t || t > e.length) && (t = e.length);
				for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
				return r
			}

			function No(e) {
				function t(e) {
					xe.paymentFlowAnalyticsService.sendUserPurchaseFlowEvent(c.WEB_ROBUX_PURCHASE, !1, u.NAVIGATION_ROBUX_TEXT, s.USER_INPUT, e)
				}
				var n = e.translate,
					r = H.buyRobuxUrl,
					a = r.buyRobux,
					o = r.buyRobuxOnVng,
					i = L.authenticatedUser.isAuthenticated,
					c = xe.paymentFlowAnalyticsService.ENUM_TRIGGERING_CONTEXT,
					u = xe.paymentFlowAnalyticsService.ENUM_VIEW_NAME,
					l = xe.paymentFlowAnalyticsService.ENUM_VIEW_MESSAGE,
					s = xe.paymentFlowAnalyticsService.ENUM_PURCHASE_EVENT_TYPE,
					d = Oo((0, M.useState)(!1), 2),
					e = d[0],
					f = d[1],
					r = Oo((0, M.useState)(!1), 2),
					d = r[0],
					m = r[1],
					p = (0, M.useRef)(new Map);
				(0, M.useEffect)(function() {
					var t = p.current,
						n = o.cacheKey;
					t.has(n) ? f(t.get(n)) : i && pe().then(function(e) {
						e = e.data.shouldShowVng;
						f(e), t.set(n, e)
					})
				}, [o, o.cacheKey, i]);
				return B().createElement("div", null, e ? B().createElement(B().Fragment, null, B().createElement(zr, {
					isOpen: d,
					onClose: function() {
						m(!1)
					},
					onContinue: function() {
						t(l.CONTINUE_TO_VNG), Ee().then(function(e) {
							e = e.data.vngShopRedirectUrl;
							window.open(e || o.url, "_blank").focus()
						}, function() {
							window.open(o.url, "_blank").focus()
						}), m(!1)
					}
				}), B().createElement(A.Link, {
					cssClasses: "font-header-2 nav-menu-title text-header robux-menu-btn",
					onClick: function() {
						t(l.EXTERNAL_LINK_MODAL), m(!0)
					}
				}, n(a.name))) : B().createElement(A.Link, {
					cssClasses: "font-header-2 nav-menu-title text-header robux-menu-btn",
					url: a.url,
					onClick: function() {
						return t(l.BUY_ROBUX)
					}
				}, n(a.name)))
			}
			No.propTypes = {
				translate: f().func.isRequired
			};
			var Io = (0, V.withTranslations)(No, s),
				m = function() {
					var e = document.getElementById("header-develop-md-link"),
						t = document.getElementById("header-develop-sm-link");
					null !== e && (e.href = "https://create.".concat(G.EnvironmentUrls.domain, "/")), null !== t && (t.href = "https://create.".concat(G.EnvironmentUrls.domain, "/"))
				},
				Uo = n;

			function Po(e) {
				var e = e.translate,
					t = document.getElementById(Uo);
				return B().createElement(A.Button, {
					id: "skip-to-main-content",
					size: A.Button.sizes.extraSmall,
					variant: A.Button.variants.primary,
					onClick: function() {
						return t.focus()
					}
				}, e("Action.SkipToMainContent") || "Skip to main content")
			}
			Po.propTypes = {
				translate: f().func.isRequired
			};
			var Lo = Po,
				ko = u,
				_o = L.authenticatedUser.isAuthenticated;

			function jo(e) {
				var t = A.IconButton.iconTypes;
				return B().createElement(M.Fragment, null, B().createElement(Lo, e), _o && B().createElement(A.IconButton, {
					className: "menu-button",
					iconType: t.navigation,
					iconName: "nav-menu",
					onClick: function() {
						document.dispatchEvent(new CustomEvent(ko.name))
					}
				}))
			}
			jo.propTypes = {};
			var Fo = (0, V.withTranslations)(jo, s);

			function Do(t, e) {
				var n, r = Object.keys(t);
				return Object.getOwnPropertySymbols && (n = Object.getOwnPropertySymbols(t), e && (n = n.filter(function(e) {
					return Object.getOwnPropertyDescriptor(t, e).enumerable
				})), r.push.apply(r, n)), r
			}

			function Mo(r) {
				for (var e = 1; e < arguments.length; e++) {
					var a = null != arguments[e] ? arguments[e] : {};
					e % 2 ? Do(Object(a), !0).forEach(function(e) {
						var t, n;
						t = r, e = a[n = e], n in t ? Object.defineProperty(t, n, {
							value: e,
							enumerable: !0,
							configurable: !0,
							writable: !0
						}) : t[n] = e
					}) : Object.getOwnPropertyDescriptors ? Object.defineProperties(r, Object.getOwnPropertyDescriptors(a)) : Do(Object(a)).forEach(function(e) {
						Object.defineProperty(r, e, Object.getOwnPropertyDescriptor(a, e))
					})
				}
				return r
			}
			Ho(74);
			var f = r.logoutAndRedirect,
				u = r.getIsVNGLandingRedirectEnabled,
				s = r.navigateToLoginWithRedirect,
				r = r.getSignupUrl,
				Bo = "right-navigation-header",
				qo = "left-navigation-container",
				Go = "header-menu-icon",
				Vo = "navigation-robux-container",
				Ko = "navigation-robux-mobile-container";
			t().NavigationService = Mo(Mo({}, t().NavigationService), {}, {
				logoutAndRedirect: f,
				getIsVNGLandingRedirectEnabled: u,
				navigateToLoginWithRedirect: s,
				getSignupUrl: r
			}), m(), (0, q.ready)(function() {
				document.getElementById(Go) && (0, e.render)(B().createElement(Fo, null), document.getElementById(Go)), document.getElementById(Vo) && (0, e.render)(B().createElement(Io, null), document.getElementById(Vo)), document.getElementById(Ko) && (0, e.render)(B().createElement(Io, null), document.getElementById(Ko)), document.getElementById(Bo) && (0, e.render)(B().createElement(Ro, null), document.getElementById(Bo)), document.getElementById(qo) && (0, e.render)(B().createElement(Tt, null), document.getElementById(qo))
			})
		}()
}();
//# sourceMappingURL=https://sourcemaps.rbxcdn.com/a8a6b39464fa1126ca67335ecfe4052a-navigation.bundle.min.js.map

/* Bundle detector */
window.Roblox && window.Roblox.BundleDetector && window.Roblox.BundleDetector.bundleDetected("Navigation");