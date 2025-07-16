! function() {
    var t = {
            4452: function(e, r) {
                var t;
                /*!
                	Copyright (c) 2018 Jed Watson.
                	Licensed under the MIT License (MIT), see
                	http://jedwatson.github.io/classnames
                */
                ! function() {
                    "use strict";
                    var n = {}.hasOwnProperty;

                    function a() {
                        for (var e = "", r = 0; r < arguments.length; r++) {
                            var t = arguments[r];
                            t && (e = i(e, function(e) {
                                if ("string" == typeof e || "number" == typeof e) return e;
                                if ("object" != typeof e) return "";
                                if (Array.isArray(e)) return a.apply(null, e);
                                if (e.toString !== Object.prototype.toString && !e.toString.toString().includes("[native code]")) return e.toString();
                                var r, t = "";
                                for (r in e) n.call(e, r) && e[r] && (t = i(t, r));
                                return t
                            }(t)))
                        }
                        return e
                    }

                    function i(e, r) {
                        return r ? e ? e + " " + r : e + r : e
                    }
                    e.exports ? (a.default = a, e.exports = a) : void 0 === (t = function() {
                        return a
                    }.apply(r, [])) || (e.exports = t)
                }()
            }
        },
        n = {};

    function qt(e) {
        var r = n[e];
        if (void 0 !== r) return r.exports;
        r = n[e] = {
            exports: {}
        };
        return t[e](r, r.exports, qt), r.exports
    }
    qt.n = function(e) {
            var r = e && e.__esModule ? function() {
                return e.default
            } : function() {
                return e
            };
            return qt.d(r, {
                a: r
            }), r
        }, qt.d = function(e, r) {
            for (var t in r) qt.o(r, t) && !qt.o(e, t) && Object.defineProperty(e, t, {
                enumerable: !0,
                get: r[t]
            })
        }, qt.o = function(e, r) {
            return Object.prototype.hasOwnProperty.call(e, r)
        },
        function() {
            "use strict";
            var O = React,
                L = qt.n(O),
                e = ReactDOM,
                v = CoreUtilities,
                D = ReactDOMServer,
                r = PropTypes,
                t = qt.n(r),
                k = RobloxItemPurchase,
                F = ReactStyleGuide,
                n = ReactUtilities,
                R = window.EventTracker ? EventTracker : {
                    fireEvent: console.log,
                    start: console.log,
                    endSuccess: console.log,
                    endCancel: console.log,
                    endFailure: console.log
                },
                g = RobloxThumbnails,
                y = Roblox,
                a = {
                    common: ["CommonUI.Controls"],
                    feature: "Feature.ServerList"
                },
                i = {
                    common: [],
                    feature: "Feature.PrivateServers"
                },
                o = {
                    common: [],
                    feature: "Purchasing.PurchaseDialog"
                },
                s = {
                    common: [],
                    feature: "Feature.VIPServer"
                },
                c = 5,
                l = 15,
                u = 50,
                d = 4,
                m = {
                    friend: {
                        key: "friends",
                        value: "Friend"
                    },
                    public: {
                        key: "public",
                        value: "Public"
                    },
                    Vip: {
                        key: "private",
                        value: "VIP"
                    }
                },
                p = {
                    descending: "Desc",
                    ascending: "Asc"
                },
                j = {
                    sortOrder: "Desc",
                    excludeFullGames: !1
                },
                f = {
                    ascending: "Action.Ascending",
                    atCapacityError: "Message.PrivateServersAtCapacity",
                    buyNowText: "Action.BuyNow",
                    cancelAction: "Action.Cancel",
                    cancelPrivateServerText: "Action.CancelPrivateServer",
                    cancelServerText: "Message.CancelServerConfirmation",
                    cancelText: "Label.Cancel",
                    cantJoinPrivacySettingText: "Label.NoOneCanJoinServerDueToPrivacySettings",
                    configureServerText: "Action.ConfigureServer",
                    confirmCancelText: "Action.ConfirmCancel",
                    confirmEnableFuturePaymentsText: "Label.ConfirmEnableFuturePayments",
                    createPrivateServerPriceText: "Label.CreatePrivateServerFor",
                    createPrivateServerText: "Action.CreatePrivateServer",
                    createPrivateServerTitle: "Action.CreatePrivateServer",
                    createServerFooterDescription: "Description.RecurringSubscriptionRenewal",
                    createServerFooterText: "Label.FooterText",
                    descending: "Action.Descending",
                    doNotCancelText: "Action.DoNotCancel",
                    freeGameText: "Label.Free",
                    friendInServerLabel: "Label.FriendInServer",
                    connectionInServerLabel: "Label.ConnectionInServer",
                    friendsServersTitle: "Heading.ServersMyFriendsAreIn",
                    connectionsServersTitle: "Heading.ServersMyConnectionsAreIn",
                    gameNameText: "Label.GameName",
                    hideFullServers: "Label.ExcludeFullServers",
                    inactiveServerText: "Label.Inactive",
                    insufficientFunds: "Label.InsufficientFunds",
                    joinServerText: "Label.ServerListJoin",
                    loadMoreButtonText: "Action.LoadMore",
                    loadServersError: "Message.LoadServersFailure",
                    manyFriendsInServerLabel: "Label.ManyFriendsInThisServer",
                    manyConnectionsInServerLabel: "Label.ManyConnectionsInServer",
                    maxFreePrivateServersText: "Description.MaxFreePrivateServers",
                    noServersFoundText: "Label.NoServersFound",
                    numberOfPlayers: "Label.NumberOfPlayers",
                    perMonthText: "Label.PerMonth",
                    playerCountText: "Label.CurrentPlayerCount",
                    privacySettingsText: "Label.PrivacySettings",
                    privateServerHeader: "Heading.PrivateServers",
                    privateServerLabel: "Label.PrivateServer",
                    privateServerPlayWithOthers: "Label.PlayWithOthers",
                    privateServerPlayWithConnections: "Label.PlayWithConnections",
                    privateServerPrice: "Label.Price",
                    privateServerRefreshText: "Action.Refresh",
                    privateServersNotSupported: "Label.VipServersNotSupported",
                    privateServerTooltip: "Label.PrivateServersAbout",
                    privateServerTooltipConnections: "Label.PrivateServersAboutConnections",
                    publicServersTitle: "Heading.OtherServers",
                    purchaseError: "Message.InternalErrorPurchaseError",
                    renewalCanceledText: "Label.RenewalCanceled",
                    renewPrivateServerTitle: "Label.RenewPrivateServer",
                    renewServerListText: "Label.Renew",
                    renewsMonthlyText: "Label.RenewsMonthlyCancelAnytime",
                    renewSubscriptionError: "Message.RenewSubscriptionError",
                    renewSubscriptionSuccess: "Message.RenewSubscriptionSuccess",
                    seeAllPrivateServersText: "Label.SeeAllPrivateServers",
                    serverCancellationSuccess: "Message.ServerCancellationSuccess",
                    serverNameText: "Label.ServerName",
                    serversText: "Label.Servers",
                    serverIdText: "Label.ServerId",
                    shutdownServerError: "Message.ShutdownServerError",
                    shutdownServerSuccess: "Message.ShutdownServerSuccess",
                    shutdownServerText: "Label.ShutDownServer",
                    slowGameWarning: "Label.SlowGame",
                    startRenewingPrivateServerPrice: "Label.StartRenewingPrivateServerPrice",
                    subscribeText: "Action.Subscribe",
                    transactionFailedHeading: "Heading.TransactionFailed",
                    twoFriendsInServerLabel: "Label.TwoFriendsInServer",
                    twoConnectionsInServerLabel: "Label.TwoConnectionsInServer"
                },
                b = y.EnvironmentUrls.gamesApi,
                S = y.EnvironmentUrls.apiGatewayUrl,
                h = y.EnvironmentUrls.matchmakingApi,
                I = function(e) {
                    return v.urlService.getAbsoluteUrl("/users/".concat(e, "/profile"))
                },
                w = function(e) {
                    return v.urlService.getUrlWithQueries("/private-server/configure", {
                        privateServerId: e
                    })
                },
                M = function(e) {
                    return v.urlService.getUrlWithLocale("/info/vip-server", e)
                },
                E = function() {
                    return v.urlService.getAbsoluteUrl("/my/account#!/privacy")
                };

            function P(r, e) {
                var t, n = Object.keys(r);
                return Object.getOwnPropertySymbols && (t = Object.getOwnPropertySymbols(r), e && (t = t.filter(function(e) {
                    return Object.getOwnPropertyDescriptor(r, e).enumerable
                })), n.push.apply(n, t)), n
            }

            function T(n) {
                for (var e = 1; e < arguments.length; e++) {
                    var a = null != arguments[e] ? arguments[e] : {};
                    e % 2 ? P(Object(a), !0).forEach(function(e) {
                        var r, t;
                        r = n, e = a[t = e], t in r ? Object.defineProperty(r, t, {
                            value: e,
                            enumerable: !0,
                            configurable: !0,
                            writable: !0
                        }) : r[t] = e
                    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(a)) : P(Object(a)).forEach(function(e) {
                        Object.defineProperty(n, e, Object.getOwnPropertyDescriptor(a, e))
                    })
                }
                return n
            }
            var x = m,
                C = function(e, r) {
                    return v.urlService.getAbsoluteUrl("".concat(b, "/v1/games/").concat(e, "/servers/").concat(r))
                },
                A = function(e) {
                    return v.urlService.getAbsoluteUrl("".concat(b, "/v1/games/").concat(e, "/private-servers"))
                },
                N = function() {
                    return v.urlService.getAbsoluteUrl("".concat(h, "/v1/game-instances/shutdown"))
                },
                q = function(e) {
                    return "".concat(b, "/v1/vip-servers/").concat(e)
                },
                G = function(e) {
                    return "".concat(b, "/v1/games/vip-servers/").concat(e)
                },
                U = function(e) {
                    return "".concat(b, "/v1/games/vip-servers/").concat(e)
                },
                B = function(e) {
                    return "".concat(b, "/v1/vip-servers/").concat(e, "/subscription")
                },
                V = function() {
                    return "".concat(S, "/user-settings-api/v1/user-settings")
                },
                _ = function() {
                    return "".concat(S, "/universal-app-configuration/v1/behaviors/account-settings-ui/content")
                },
                H = {
                    getPublicGameInstances: function(e, r, t) {
                        t = 2 < arguments.length && void 0 !== t ? t : {}, e = {
                            url: C(e, x.public.value),
                            retryable: !0,
                            withCredentials: !0
                        }, t = T({
                            cursor: r
                        }, t);
                        return v.httpService.get(e, t)
                    },
                    getFriendsGameInstances: function(e, r, t) {
                        t = 2 < arguments.length && void 0 !== t ? t : {}, e = {
                            url: C(e, x.friend.value),
                            retryable: !1,
                            withCredentials: !0
                        }, t = T({
                            cursor: r
                        }, t);
                        return v.httpService.get(e, t)
                    },
                    getVipGameInstances: function(e, r, t) {
                        t = 2 < arguments.length && void 0 !== t ? t : {}, e = {
                            url: A(e),
                            retryable: !1,
                            withCredentials: !0
                        }, t = T({
                            cursor: r
                        }, t);
                        return v.httpService.get(e, t)
                    },
                    shutdownGameInstance: function(e, r, t) {
                        var n = null === (a = document.getElementsByName("__RequestVerificationToken")[0]) || void 0 === a ? void 0 : a.value,
                            a = {
                                url: N(),
                                retryable: !0,
                                withCredentials: !0
                            },
                            r = {
                                __RequestVerificationToken: n,
                                placeId: e,
                                gameId: r
                            };
                        return t && (r.privateServerId = t), v.httpService.post(a, r)
                    },
                    createPrivateServer: function(e, r, t) {
                        e = {
                            url: U(e),
                            retryable: !0,
                            withCredentials: !0
                        }, t = {
                            name: r,
                            expectedPrice: t
                        };
                        return v.httpService.post(e, t)
                    },
                    getVipServer: function(e) {
                        e = {
                            url: q(e),
                            retryable: !0,
                            withCredentials: !0
                        };
                        return v.httpService.get(e)
                    },
                    createVipServer: function(e, r, t) {
                        e = {
                            url: G(e),
                            retryable: !0,
                            withCredentials: !0
                        };
                        return v.httpService.post(e, {
                            name: r,
                            expectedPrice: t
                        })
                    },
                    updateVipServerSubscription: function(e, r, t) {
                        e = {
                            url: B(e),
                            retryable: !0,
                            withCredentials: !0
                        };
                        return v.httpService.patch(e, {
                            active: r,
                            price: t
                        })
                    },
                    getUserSettings: function() {
                        var e = {
                            retryable: !0,
                            withCredentials: !0,
                            url: V()
                        };
                        return v.httpService.get(e).then(function(e) {
                            return e.data
                        }, function(e) {
                            return null
                        })
                    },
                    getAccountSettingsGuacPolicy: function() {
                        var e = {
                            retryable: !0,
                            withCredentials: !0,
                            url: _()
                        };
                        return v.httpService.get(e).then(function(e) {
                            return e.data
                        }, function(e) {
                            return null
                        })
                    }
                };

            function W(e, r) {
                return function(e) {
                    if (Array.isArray(e)) return e
                }(e) || function(e, r) {
                    if ("undefined" == typeof Symbol || !(Symbol.iterator in Object(e))) return;
                    var t = [],
                        n = !0,
                        a = !1,
                        i = void 0;
                    try {
                        for (var o, s = e[Symbol.iterator](); !(n = (o = s.next()).done) && (t.push(o.value), !r || t.length !== r); n = !0);
                    } catch (e) {
                        a = !0, i = e
                    } finally {
                        try {
                            n || null == s.return || s.return()
                        } finally {
                            if (a) throw i
                        }
                    }
                    return t
                }(e, r) || function(e, r) {
                    if (!e) return;
                    if ("string" == typeof e) return J(e, r);
                    var t = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === t && e.constructor && (t = e.constructor.name);
                    if ("Map" === t || "Set" === t) return Array.from(e);
                    if ("Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)) return J(e, r)
                }(e, r) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }

            function J(e, r) {
                (null == r || r > e.length) && (r = e.length);
                for (var t = 0, n = new Array(r); t < r; t++) n[t] = e[t];
                return n
            }

            function z(e) {
                void 0 === e && (e = {
                    baseUrl: ""
                }), this.configuration = e, this.baseUrl = this.configuration.baseUrl
            }
            var $ = (te = W((0, F.createModal)(), 2))[0],
                K = te[1],
                Q = f,
                X = u,
                Y = function() {
                    var e = document.getElementById("game-detail-meta-data");
                    return e ? {
                        gameDetailUniverseId: parseInt(e.getAttribute("data-universe-id"), 10),
                        gameDetailPlaceName: e.getAttribute("data-place-name"),
                        gameDetailPlaceId: parseInt(e.getAttribute("data-place-id"), 10),
                        gameDetailPageId: e.getAttribute("data-page-id"),
                        gameDetailGameInstanceId: e.getAttribute("data-game-instance-id"),
                        gameDetailShowShutdownAllButton: "True" === e.getAttribute("data-show-shut-down-all-button"),
                        gameDetailUserCanManagePlace: "True" === e.getAttribute("data-user-can-manage-place"),
                        gameDetailPrivateServerPrice: parseInt(e.getAttribute("data-private-server-price"), 10),
                        gameDetailCanCreateServer: "True" === e.getAttribute("data-can-create-server"),
                        gameDetailPrivateServerLimit: parseInt(e.getAttribute("data-private-server-limit"), 10) || 0,
                        gameDetailSellerName: e.getAttribute("data-seller-name"),
                        gameDetailSellerId: parseInt(e.getAttribute("data-seller-id"), 10),
                        gameDetailPrivateServerProductId: parseInt(e.getAttribute("data-private-server-product-id"), 10),
                        gameDetailPreopenCreatePrivateServerModal: "True" === e.getAttribute("data-preopen-create-private-server-modal"),
                        gameDetailExperienceInviteLinkId: e.getAttribute("data-experience-invite-link-id"),
                        gameDetailExperienceInviteStatus: e.getAttribute("data-experience-invite-status")
                    } : null
                },
                r = (Z.prototype.sendEvent = function(e) {
                    var r = e.localTime,
                        t = e.target,
                        n = e.eventType,
                        a = e.context,
                        i = e.additionalProperties,
                        o = e.currentUrl,
                        s = e.guestId,
                        e = e.sessionId,
                        r = r.toISOString(),
                        c = new URL("".concat(this.baseUrl, "/pe"));
                    return c.searchParams.append("t", t), c.searchParams.append("evt", n), c.searchParams.append("ctx", a), c.searchParams.append("lt", r), c.searchParams.append("url", o || window.location.href), void 0 !== s && c.searchParams.append("gid", s), void 0 !== e && c.searchParams.append("sid", e), void 0 !== i && Object.keys(i).forEach(function(e) {
                        c.searchParams.append(e, (null !== (e = i[e]) && void 0 !== e ? e : "").toString())
                    }), fetch(c.href, {
                        credentials: "same-origin"
                    })
                }, Z.prototype.sendEventViaImg = function(e, r) {
                    var t = e.localTime,
                        n = e.target,
                        a = e.eventType,
                        i = e.context,
                        o = e.additionalProperties,
                        s = e.currentUrl,
                        c = e.guestId,
                        e = e.sessionId,
                        t = t.toISOString(),
                        l = new URL("".concat(this.baseUrl, "/e.png"));
                    l.searchParams.append("t", n), l.searchParams.append("evt", a), l.searchParams.append("ctx", i), l.searchParams.append("lt", t), l.searchParams.append("url", s || window.location.href), void 0 !== c && l.searchParams.append("gid", c), void 0 !== e && l.searchParams.append("sid", e), void 0 !== o && Object.keys(o).forEach(function(e) {
                        l.searchParams.append(e, (null !== (e = o[e]) && void 0 !== e ? e : "").toString())
                    });
                    e = new Image;
                    return e.src = l.href, e.onload = function() {
                        void 0 !== r && r(!0)
                    }, e.onerror = function(e) {
                        void 0 !== r && r(!1), console.error(e)
                    }, e
                }, Z);

            function Z(e) {
                void 0 === e && (e = new z), this.configuration = e, this.baseUrl = e.baseUrl
            }
            var ee, re, te = y.EnvironmentUrls.domain;
            (u = ee = ee || {}).PRIVATE_SERVER_JOIN = "privateServerJoin", u.PRIVATE_SERVER_LOAD = "privateServerLoad", (re = re || {}).GAME_TAB = "gameTab";
            var ne = new r(new z({
                    baseUrl: "https://ecsv2." + te + "/www"
                })),
                ae = {
                    sendEvent: function(e, r, t) {
                        t = {
                            target: "www",
                            localTime: new Date,
                            eventType: e,
                            context: r,
                            additionalProperties: {
                                latency: t
                            }
                        };
                        return ne.sendEventViaImg(t)
                    }
                };

            function ie() {
                return (ie = Object.assign || function(e) {
                    for (var r = 1; r < arguments.length; r++) {
                        var t, n = arguments[r];
                        for (t in n) Object.prototype.hasOwnProperty.call(n, t) && (e[t] = n[t])
                    }
                    return e
                }).apply(this, arguments)
            }

            function oe(e, r) {
                return function(e) {
                    if (Array.isArray(e)) return e
                }(e) || function(e, r) {
                    if ("undefined" == typeof Symbol || !(Symbol.iterator in Object(e))) return;
                    var t = [],
                        n = !0,
                        a = !1,
                        i = void 0;
                    try {
                        for (var o, s = e[Symbol.iterator](); !(n = (o = s.next()).done) && (t.push(o.value), !r || t.length !== r); n = !0);
                    } catch (e) {
                        a = !0, i = e
                    } finally {
                        try {
                            n || null == s.return || s.return()
                        } finally {
                            if (a) throw i
                        }
                    }
                    return t
                }(e, r) || function(e, r) {
                    if (!e) return;
                    if ("string" == typeof e) return se(e, r);
                    var t = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === t && e.constructor && (t = e.constructor.name);
                    if ("Map" === t || "Set" === t) return Array.from(e);
                    if ("Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)) return se(e, r)
                }(e, r) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }

            function se(e, r) {
                (null == r || r > e.length) && (r = e.length);
                for (var t = 0, n = new Array(r); t < r; t++) n[t] = e[t];
                return n
            }
            var ce = f,
                te = (r = oe((le.defaultProps = {
                    serverName: "",
                    createServerError: !1,
                    loading: !1
                }, le.propTypes = {
                    translate: t().func.isRequired,
                    privateServerTranslate: t().func.isRequired,
                    thumbnail: t().node.isRequired,
                    assetName: t().string.isRequired,
                    expectedPrice: t().number.isRequired,
                    serverName: t().string,
                    onAction: t().func.isRequired,
                    onServerNameChange: t().func.isRequired,
                    createServerError: t().bool,
                    loading: t().bool,
                    clearForm: t().func.isRequired
                }, [(0, n.withTranslations)(le, o), K]), 2))[0],
                r = r[1];

            function le(e) {
                var r = e.translate,
                    t = e.privateServerTranslate,
                    n = e.assetName,
                    a = e.expectedPrice,
                    i = e.thumbnail,
                    o = e.serverName,
                    s = e.onAction,
                    c = e.onServerNameChange,
                    l = e.clearForm,
                    u = e.loading,
                    d = t(Q.perMonthText) || "/month",
                    v = (0, O.useMemo)(function() {
                        return 0 !== a ? r(Q.subscribeText) || "Subscribe" : r(Q.buyNowText)
                    }, [a, r]),
                    m = L().createElement("span", {
                        className: "purchase-private-server-modal-footer-text"
                    }, L().createElement(k.BalanceAfterSaleText, {
                        expectedPrice: a
                    }), " ", t(Q.createServerFooterDescription) || "This is a subscription-based feature. It will auto-renew once a month until you cancel the subscription."),
                    p = W((0, O.useState)(!1), 2),
                    f = p[0],
                    g = p[1],
                    b = W((0, O.useState)(!1), 2),
                    e = b[0],
                    S = b[1],
                    p = W((0, O.useState)(!1), 2),
                    b = p[0],
                    h = p[1],
                    p = "<a id='redirect-link' href=".concat(E(), ">").concat(t(Q.privacySettingsText), "</a>");
                (0, O.useEffect)(function() {
                    y.CurrentUser.isUnder13 && H.getUserSettings().then(function(e) {
                        e && S("NoOne" === (null == e ? void 0 : e.privateServerPrivacy))
                    }, function() {})
                }, []), (0, O.useEffect)(function() {
                    H.getAccountSettingsGuacPolicy().then(function(e) {
                        e && h(null == e ? void 0 : e.isPrivateServerPrivacyV2Enabled)
                    }, function() {})
                }, []);
                p = L().createElement("div", {
                    className: "private-server-purchase"
                }, L().createElement("div", {
                    className: "modal-list-item private-server-main-text",
                    dangerouslySetInnerHTML: {
                        __html: t(Q.createPrivateServerPriceText, {
                            target: "".concat((0, D.renderToString)(L().createElement(k.PriceLabel, {
                                price: a
                            }))).concat(0 !== a ? d : "")
                        })
                    }
                }), L().createElement("div", {
                    className: "modal-list-item"
                }, L().createElement("span", {
                    className: "text-label private-server-game-name"
                }, t(Q.gameNameText)), L().createElement("span", {
                    className: "game-name"
                }, n)), L().createElement("div", {
                    className: "modal-list-item private-server-name-input"
                }, L().createElement("span", {
                    className: "text-label"
                }, t(Q.serverNameText)), L().createElement("div", {
                    className: "form-group form-has-feedback"
                }, L().createElement("input", {
                    type: "text",
                    value: o,
                    onChange: c,
                    maxLength: X,
                    className: "form-control input-field private-server-name",
                    id: "private-server-name-text-box"
                }), 0 < o.length && L().createElement("p", {
                    className: "form-control-label text-secondary"
                }, o.length, "/", X))), L().createElement("div", {
                    className: "modal-image-container"
                }, i), 0 !== a && L().createElement("p", {
                    className: "rbx-private-server-renewal-disclosure"
                }, t(Q.renewsMonthlyText) || "Renews monthly. Cancel anytime."), b && e && L().createElement("div", null, L().createElement("br", null), L().createElement("div", {
                    className: "private-settings-disclaimer"
                }, L().createElement("span", {
                    className: "private-settings-disclaimer-checkbox"
                }, L().createElement("input", {
                    id: "privacy-settings-disclaimer-checkbox",
                    type: "checkbox",
                    checked: f,
                    onClick: function() {
                        return g(!f)
                    }
                })), L().createElement("b", null, L().createElement("span", {
                    className: "private-servers-disclaimer-text",
                    dangerouslySetInnerHTML: {
                        __html: t(Q.cantJoinPrivacySettingText, {
                            privacySettingsLink: p
                        })
                    }
                })))));
                return L().createElement($, {
                    id: "purchase-private-server-modal",
                    title: t(Q.createPrivateServerTitle),
                    body: p,
                    actionButtonText: v,
                    neutralButtonText: r(Q.cancelAction),
                    footerText: m,
                    onAction: s,
                    onNeutral: l,
                    loading: u,
                    actionButtonShow: !0,
                    disableActionButton: 0 === o.length || e && b && !f
                })
            }
            var ue = (te = oe((0, k.createItemPurchase)({
                    customPurchaseVerificationModal: te,
                    customPurchaseVerificationModalService: r
                }), 2))[0],
                de = te[1],
                ve = Y;

            function me(e) {
                var r = e.canCreatePrivateServer,
                    t = e.currency,
                    n = e.placeName,
                    i = e.price,
                    a = e.privateServerTranslate,
                    o = e.productId,
                    s = e.refreshServers,
                    c = e.sellerId,
                    l = e.sellerName,
                    u = e.translate,
                    d = e.universeId,
                    v = e.disabled,
                    e = oe((0, O.useState)(""), 2),
                    m = e[0],
                    p = e[1];
                ve().gameDetailPreopenCreatePrivateServerModal && de.start();

                function f() {
                    return p(""), !0
                }
                e = L().createElement(g.Thumbnail2d, {
                    containerClass: "modal-thumb",
                    format: g.ThumbnailFormat.jpeg,
                    imgClassName: "original-image",
                    size: g.DefaultThumbnailSize,
                    targetId: d,
                    type: g.ThumbnailTypes.gameIcon
                });
                return L().createElement("span", {
                    className: "rbx-private-server-create"
                }, L().createElement(F.Button, {
                    className: "btn-more rbx-private-server-create-button",
                    isDisabled: v || !r,
                    onClick: de.start,
                    size: F.Button.sizes.medium,
                    variant: F.Button.variants.secondary
                }, a(ce.createPrivateServerTitle)), L().createElement(ue, ie({
                    assetName: n,
                    assetType: k.ASSET_TYPE_ENUM.PRIVATE_SERVER,
                    customProps: {
                        privateServerTranslate: a,
                        serverName: m,
                        onServerNameChange: function(e) {
                            e = e.target.value;
                            return p(e)
                        },
                        clearForm: f
                    },
                    expectedCurrency: t,
                    expectedPrice: i,
                    expectedSellerId: c,
                    handlePurchase: function(e) {
                        var r = e.handleError,
                            t = e.setLoading,
                            n = e.openConfirmation,
                            a = e.closeAll;
                        t(!0), H.createPrivateServer(d, m, i).then(function(e) {
                            e = e.data;
                            t(!1), a();
                            var r = e.vipServerId;
                            n({
                                transactionVerb: k.TransactionVerb.Bought,
                                onAccept: function() {
                                    window.location.href = w(r)
                                },
                                onDecline: function() {
                                    return (0, R.start)(ee.PRIVATE_SERVER_LOAD), s({
                                        startTime: performance.now()
                                    }), f(), !0
                                }
                            })
                        }, function(e) {
                            var e = e.data;
                            t(!1), a();
                            e = null !== (e = null === (e = e.errors) || void 0 === e ? void 0 : e[0].userFacingMessage) && void 0 !== e ? e : u(ce.purchaseError);
                            r({
                                errorMsg: e,
                                onDecline: function() {
                                    return (0, R.start)(ee.PRIVATE_SERVER_LOAD), s({
                                        startTime: performance.now()
                                    }), !0
                                },
                                showDivId: k.errorTypeIds.transactionFailure,
                                title: u(ce.transactionFailedHeading)
                            })
                        })
                    },
                    productId: o,
                    sellerName: l,
                    thumbnail: e
                }, {
                    isPrivateServer: !0
                })), !r && L().createElement("span", {
                    className: "text-footer rbx-private-server-create-disabled-text"
                }, u(ce.maxFreePrivateServersText)))
            }
            me.defaultProps = {
                canCreatePrivateServer: !0,
                currency: 1,
                disabled: !1
            }, me.propTypes = {
                canCreatePrivateServer: t().bool,
                currency: t().number,
                placeName: t().string.isRequired,
                price: t().number.isRequired,
                privateServerTranslate: t().func.isRequired,
                productId: t().number.isRequired,
                refreshServers: t().func.isRequired,
                sellerId: t().number.isRequired,
                sellerName: t().string.isRequired,
                translate: t().func.isRequired,
                universeId: t().number.isRequired,
                disabled: t().bool
            };
            var pe, fe = (0, n.withTranslations)(me, s),
                r = qt(4452),
                ge = qt.n(r),
                be = HeaderScripts,
                Se = "robloxAttributionIds";

            function he(e) {
                var r = window,
                    t = r[Se];
                return t || (t = {}, r[Se] = t), (r = t[e]) || (r = v.uuidService.generateRandomUuid(), t[e] = r), r
            }(pe = pe || {}).GameDetailReferral = "gameDetailReferral";
            var ye, Ie, we = he,
                K = CoreRobloxUtilities;

            function Ee(t) {
                return Object.keys(t).reduce(function(e, r) {
                    return "object" == typeof t[r] && t[r] && (e[r] = JSON.stringify(t[r])), "number" == typeof t[r] && (e[r] = t[r]), "string" == typeof t[r] && (e[r] = encodeURIComponent(t[r])), "boolean" == typeof t[r] && (e[r] = t[r] ? 1 : 0), e
                }, {})
            }(te = {}).Game = "Game", te.CatalogAsset = "CatalogAsset", te.CatalogBundle = "CatalogBundle", (s = ye = ye || {}).Carousel = "Carousel", s.AvatarCarousel = "AvatarCarousel", s.SortlessGrid = "SortlessGrid", s.FriendCarousel = "FriendCarousel", s.InterestGrid = "InterestGrid", s.Pills = "Pills", s.Sdui = "sdui", s.SongCarousel = "SongCarousel", (r = {}).Carousel = "Carousel", r.HeroUnit = "HeroUnit", (te = {}).Sponsored = "Sponsored", te.SponsoredGame = "SponsoredGame", (s = Ie = Ie || {}).AppGameTileNoMetadata = "AppGameTileNoMetadata", s.GridTile = "GridTile", s.EventTile = "EventTile", s.InterestTile = "InterestTile", s.ExperienceEventsTile = "ExperienceEventsTile", (r = {}).Always = "Always", r.Hover = "Hover", r.Footer = "Footer", (te = {}).Disabled = "Disabled", te.Enabled = "Enabled";
            var Pe, s = (new y.Intl).getDateTimeFormatter(),
                r = v.urlService.parseQueryString,
                te = v.numberFormat.getNumberFormat;

            function Te() {
                return document.referrer
            }(s = Pe = Pe || {}).SearchPage = "searchPage", s.SortDetailPageDiscover = "sortDetailPageDiscover", s.SortDetailPageHome = "sortDetailPageHome", s.GameDetailPage = "gameDetailPage", s.GamesPage = "gamesPage", s.HomePage = "homePage", s.PeopleListInHomePage = "peopleListInHomePage", s.InterestCatcher = "interestCatcher", s.SearchLandingPage = "searchLandingPage";
            var xe, Re, Ce = function() {
                    return (Ce = Object.assign || function(e) {
                        for (var r, t = 1, n = arguments.length; t < n; t++)
                            for (var a in r = arguments[t]) Object.prototype.hasOwnProperty.call(r, a) && (e[a] = r[a]);
                        return e
                    }).apply(this, arguments)
                },
                Ae = function(e, r) {
                    var t = {};
                    for (a in e) Object.prototype.hasOwnProperty.call(e, a) && r.indexOf(a) < 0 && (t[a] = e[a]);
                    if (null != e && "function" == typeof Object.getOwnPropertySymbols)
                        for (var n = 0, a = Object.getOwnPropertySymbols(e); n < a.length; n++) r.indexOf(a[n]) < 0 && Object.prototype.propertyIsEnumerable.call(e, a[n]) && (t[a[n]] = e[a[n]]);
                    return t
                },
                Ne = (r = K.eventStreamService.eventTypes).pageLoad,
                Oe = r.formInteraction;

            function Le(r, e) {
                var t, n = Object.keys(r);
                return Object.getOwnPropertySymbols && (t = Object.getOwnPropertySymbols(r), e && (t = t.filter(function(e) {
                    return Object.getOwnPropertyDescriptor(r, e).enumerable
                })), n.push.apply(n, t)), n
            }

            function De(n) {
                for (var e = 1; e < arguments.length; e++) {
                    var a = null != arguments[e] ? arguments[e] : {};
                    e % 2 ? Le(Object(a), !0).forEach(function(e) {
                        var r, t;
                        r = n, e = a[t = e], t in r ? Object.defineProperty(r, t, {
                            value: e,
                            enumerable: !0,
                            configurable: !0,
                            writable: !0
                        }) : r[t] = e
                    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(a)) : Le(Object(a)).forEach(function(e) {
                        Object.defineProperty(n, e, Object.getOwnPropertyDescriptor(a, e))
                    })
                }
                return n
            }

            function ke() {
                var e = /\/games\/(\d+)\//g.exec(window.location.pathname);
                return e ? +e[1] : null
            }

            function Fe(e, r, t, n) {
                var a = r.instanceId,
                    i = r.accessCode,
                    o = performance.now();

                function s() {
                    y.EventStream.SendEventWithTarget("playGameClicked", l, De({
                        attributionId: we(Re.GameDetailReferral)
                    }, u), y.EventStream.TargetTypes.WWW)
                }(0, R.start)(ee.PRIVATE_SERVER_JOIN);
                var c = y.GameLauncher.isJoinAttemptIdEnabled() ? v.uuidService.generateRandomUuid() : void 0,
                    r = Me().gameDetailUniverseId,
                    l = "".concat(t, "ServerListJoin"),
                    u = {
                        universeId: r,
                        placeId: e,
                        pid: e,
                        joinAttemptId: c
                    };
                if ("computer" === Ge && !Ue && !Ve || "tablet" === Ge && je || Ue) return function() {
                    return s(), y.EventStream.SendEventWithTarget("gamePlayIntent", l, De({
                        lType: "protocol",
                        refuid: null,
                        pg: "gameDetail"
                    }, u), y.EventStream.TargetTypes.WWW), t === qe.friend.key ? (ae.sendEvent(ee.PRIVATE_SERVER_JOIN, re.GAME_TAB, performance.now() - o), (0, R.endSuccess)(ee.PRIVATE_SERVER_JOIN), void y.GameLauncher.followPlayerIntoGame(n.filter(function(e) {
                        return null !== e.id && e.id !== be.authenticatedUser.id
                    })[0].id, c, l)) : i ? (ae.sendEvent(ee.PRIVATE_SERVER_JOIN, re.GAME_TAB, performance.now() - o), (0, R.endSuccess)(ee.PRIVATE_SERVER_JOIN), void y.GameLauncher.joinPrivateGame(e, i, void 0, c, y.GameLauncher.isJoinAttemptIdEnabled() ? l : void 0)) : void(a && (ae.sendEvent(ee.PRIVATE_SERVER_JOIN, re.GAME_TAB, performance.now() - o), (0, R.endSuccess)(ee.PRIVATE_SERVER_JOIN), y.GameLauncher.joinGameInstance(e, a, !1, !1, c, y.GameLauncher.isJoinAttemptIdEnabled() ? l : void 0)))
                };
                var d = "",
                    d = Be ? v.urlService.getUrlWithQueries("/games/start", {
                        placeId: e
                    }) : "robloxmobile://placeID=".concat(e);
                return a && (d += "&gameInstanceId=".concat(a)), i && (d += "&accessCode=".concat(i)), y.GameLauncher.isJoinAttemptIdEnabled() && c && (d += "&joinAttemptId=".concat(c, "&joinAttemptOrigin=").concat(l)),
                    function() {
                        s(), window.location.href = d
                    }
            }(s = xe = xe || {}).AbsPositions = "absPositions", s.AdsPositions = "adsPositions", s.AdFlags = "adFlags", s.Algorithm = "algorithm", s.AppliedFilters = "appliedFilters", s.AttributionId = "attributionId", s.ComponentType = "componentType", s.Direction = "direction", s.Distance = "distance", s.HttpReferrer = "httpReferrer", s.EmphasisFlag = "emphasisFlag", s.FilterId = "filterId", s.FilterIds = "filterIds", s.GameSetTargetId = "gameSetTargetId", s.GameSetTypeId = "gameSetTypeId", s.InteractionType = "interactionType", s.IsAd = "isAd", s.NativeAdData = "nativeAdData", s.AdIds = "adIds", s.NumberOfLoadedTiles = "numberOfLoadedTiles", s.Page = "page", s.PageSession = "pageSession", s.PlaceId = "placeId", s.PlayContext = "playContext", s.Position = "position", s.PreviousOptionId = "previousOptionId", s.PromptId = "promptId", s.PromptText = "promptText", s.ResourceId = "resourceId", s.ResponseOptionIds = "responseOptionIds", s.ResponseOptionTexts = "responseOptionTexts", s.RootPlaceIds = "rootPlaceIds", s.SelectedIds = "selectedIds", s.SelectedTexts = "selectedTexts", s.ScreenSizeX = "screenSizeX", s.ScreenSizeY = "screenSizeY", s.ScrollAreaSize = "scrollAreaSize", s.ScrollDepth = "scrollDepth", s.SelectedOptionId = "selectedOptionId", s.SelectedOptionIds = "selectedOptionIds", s.ShareLinkType = "shareLinkType", s.ShareLinkId = "shareLinkId", s.SortId = "sortId", s.SortPos = "sortPos", s.StartDepth = "startDepth", s.StartPos = "startPos", s.SuggestionKwd = "suggestionKwd", s.SuggestionReplacedKwd = "suggestionReplacedKwd", s.SuggestionCorrectedKwd = "suggestionCorrectedKwd", s.SuggestionAlgorithm = "suggestionAlgorithm", s.TimeToRespond = "timeToRespond", s.Token = "token", s.Topics = "topics", s.TreatmentType = "treatmentType", s.UniverseId = "universeId", s.UniverseIds = "universeIds", s.FriendId = "friendId", s.ThumbnailAssetIds = "thumbnailAssetIds", s.ThumbnailListIds = "thumbnailListIds", s.LinkPath = "linkPath", s.LocationName = "locationName", s.RowsOnPage = "rowsOnPage", s.PositionsInRow = "positionsInRow", s.NavigationUids = "navigationUids", s.TileBadgeContexts = "tileBadgeContexts", s.ButtonName = "buttonName", s.IsInterested = "isInterested", s.InterestedUniverseIds = "interestedUniverseIds", (r = Re = Re || {}).GameImpressions = "gameImpressions", r.GameDetailReferral = "gameDetailReferral", r.SortDetailReferral = "sortDetailReferral", r.FeedScroll = "feedScroll", r.NavigateToSortLink = "navigateToSortLink", r.SurveyInteraction = "surveyInteraction", r.SurveyImpression = "surveyImpression", r.InterestCatcherClick = "interestCatcherClick", r.FilterImpressions = "filterImpressions", r.GamesFilterClick = "gamesFilterClick", r.RequestRefundClick = "requestRefundClick", (s = {}).HomePageSessionInfo = "homePageSessionInfo", s.GameSearchSessionInfo = "gameSearchSessionInfo", s.DiscoverPageSessionInfo = "discoverPageSessionInfo", s.SearchLandingPageSessionInfo = "searchLandingPageSessionInfo", (r = {}).Submission = "submission", r.Cancellation = "cancellation", (s = {}).Horizontal = "horizontal", s.Vertical = "vertical", (r = {}).Skip = "skip", r.Continue = "continue", r.Interested = "interested", (s = {}).OpenDropdown = "openDropdown", s.CloseDropdown = "closeDropdown", s.Apply = "apply", (r = {})[Re.GameImpressions] = function(e) {
                e = Ae(e, []);
                return [{
                    name: Re.GameImpressions,
                    type: Re.GameImpressions,
                    context: Oe
                }, Ee(Ce({}, e))]
            }, r[Re.GameDetailReferral] = function(e) {
                var r;
                return void 0 === e && (e = {}), [{
                    name: Re.GameDetailReferral,
                    type: Re.GameDetailReferral,
                    context: Ne
                }, Ee(Ce(((r = {})[xe.AttributionId] = he(pe.GameDetailReferral), r[xe.HttpReferrer] = Te(), r), e))]
            }, r[Re.SortDetailReferral] = function(e) {
                return void 0 === e && (e = {}), [{
                    name: Re.SortDetailReferral,
                    type: Re.SortDetailReferral,
                    context: Ne
                }, Ee(Ce({}, e))]
            }, r[Re.NavigateToSortLink] = function(e) {
                return void 0 === e && (e = {}), [{
                    name: Re.NavigateToSortLink,
                    type: Re.NavigateToSortLink,
                    context: Oe
                }, Ee(Ce({}, e))]
            }, r[Re.SurveyInteraction] = function(e) {
                return void 0 === e && (e = {}), [{
                    name: Re.SurveyInteraction,
                    type: Re.SurveyInteraction,
                    context: Oe
                }, Ee(Ce({}, e))]
            }, r[Re.SurveyImpression] = function(e) {
                return void 0 === e && (e = {}), [{
                    name: Re.SurveyImpression,
                    type: Re.SurveyImpression,
                    context: Oe
                }, Ee(Ce({}, e))]
            }, r[Re.InterestCatcherClick] = function(e) {
                return void 0 === e && (e = {}), [{
                    name: Re.InterestCatcherClick,
                    type: Re.InterestCatcherClick,
                    context: Oe
                }, Ee(Ce({}, e))]
            }, r[Re.FilterImpressions] = function(e) {
                return void 0 === e && (e = {}), [{
                    name: Re.FilterImpressions,
                    type: Re.FilterImpressions,
                    context: Oe
                }, Ee(Ce({}, e))]
            }, r[Re.GamesFilterClick] = function(e) {
                return void 0 === e && (e = {}), [{
                    name: Re.GamesFilterClick,
                    type: Re.GamesFilterClick,
                    context: Oe
                }, Ee(Ce({}, e))]
            }, r[Re.RequestRefundClick] = function(e) {
                var r;
                return [{
                    name: Re.RequestRefundClick,
                    type: Re.RequestRefundClick,
                    context: Oe
                }, Ee(((r = {})[xe.PlaceId] = e.placeId, r))]
            }, y.EnvironmentUrls.gamesApi, y.EnvironmentUrls.voiceApi, K.dataStores.gamesDataStore, K.dataStores.userDataStoreV2, K.dataStores.localeDataStore, K.dataStores.userDataStore.FriendsUserSortType;
            var je = be.jsClientDeviceIdentifier.isIE11,
                Me = Y,
                qe = m,
                Ge = (s = (0, y.DeviceMeta)()).deviceType,
                Ue = s.isUWPApp,
                Be = s.isInApp,
                Ve = s.isChromeOs;

            function _e(e, r) {
                return function(e) {
                    if (Array.isArray(e)) return e
                }(e) || function(e, r) {
                    if ("undefined" == typeof Symbol || !(Symbol.iterator in Object(e))) return;
                    var t = [],
                        n = !0,
                        a = !1,
                        i = void 0;
                    try {
                        for (var o, s = e[Symbol.iterator](); !(n = (o = s.next()).done) && (t.push(o.value), !r || t.length !== r); n = !0);
                    } catch (e) {
                        a = !0, i = e
                    } finally {
                        try {
                            n || null == s.return || s.return()
                        } finally {
                            if (a) throw i
                        }
                    }
                    return t
                }(e, r) || function(e, r) {
                    if (!e) return;
                    if ("string" == typeof e) return He(e, r);
                    var t = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === t && e.constructor && (t = e.constructor.name);
                    if ("Map" === t || "Set" === t) return Array.from(e);
                    if ("Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)) return He(e, r)
                }(e, r) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }

            function He(e, r) {
                (null == r || r > e.length) && (r = e.length);
                for (var t = 0, n = new Array(r); t < r; t++) n[t] = e[t];
                return n
            }
            var We = f;

            function Je(e) {
                var r = e.translate,
                    t = e.showModal,
                    n = e.closeModal,
                    a = e.expirationDate,
                    i = e.cancelPrivateServer,
                    o = e.systemFeedbackService,
                    s = e.setSubscription,
                    c = _e((0, O.useState)(!1), 2),
                    e = c[0],
                    l = c[1],
                    c = L().createElement("p", null, r(We.cancelServerText, {
                        date: a
                    })),
                    a = (0, O.useCallback)(function() {
                        l(!0), i().then(function(e) {
                            e = e.data;
                            s(e), o.success(r(We.serverCancellationSuccess) || "Server renewal successfully canceled")
                        }).catch(function(e) {
                            var r = e.data;
                            0 < (null === (e = r.errors) || void 0 === e ? void 0 : e.length) && (e = r.errors[0], o.warning(null !== (r = e.userFacingMessage) && void 0 !== r ? r : e.message))
                        }).finally(function() {
                            l(!1), n(!0)
                        })
                    }, [i, n, s, o, r]);
                return L().createElement(F.SimpleModal, {
                    show: t,
                    title: r(We.cancelPrivateServerText),
                    body: c,
                    actionButtonText: r(We.confirmCancelText),
                    neutralButtonText: r(We.doNotCancelText),
                    onAction: a,
                    onClose: n,
                    onNeutral: n,
                    actionButtonShow: !0,
                    loading: e
                })
            }
            Je.propTypes = {
                translate: t().func.isRequired,
                showModal: t().bool.isRequired,
                closeModal: t().func.isRequired,
                expirationDate: t().string.isRequired,
                cancelPrivateServer: t().func.isRequired,
                systemFeedbackService: t().shape({
                    success: t().func.isRequired,
                    warning: t().func.isRequired
                }).isRequired,
                setSubscription: t().func.isRequired
            };
            var ze = (0, n.withTranslations)(Je, i);

            function $e(e, r) {
                return function(e) {
                    if (Array.isArray(e)) return e
                }(e) || function(e, r) {
                    if ("undefined" == typeof Symbol || !(Symbol.iterator in Object(e))) return;
                    var t = [],
                        n = !0,
                        a = !1,
                        i = void 0;
                    try {
                        for (var o, s = e[Symbol.iterator](); !(n = (o = s.next()).done) && (t.push(o.value), !r || t.length !== r); n = !0);
                    } catch (e) {
                        a = !0, i = e
                    } finally {
                        try {
                            n || null == s.return || s.return()
                        } finally {
                            if (a) throw i
                        }
                    }
                    return t
                }(e, r) || function(e, r) {
                    if (!e) return;
                    if ("string" == typeof e) return Ke(e, r);
                    var t = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === t && e.constructor && (t = e.constructor.name);
                    if ("Map" === t || "Set" === t) return Array.from(e);
                    if ("Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)) return Ke(e, r)
                }(e, r) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }

            function Ke(e, r) {
                (null == r || r > e.length) && (r = e.length);
                for (var t = 0, n = new Array(r); t < r; t++) n[t] = e[t];
                return n
            }
            var Qe = f,
                Xe = w;

            function Ye(e) {
                var r = e.className,
                    t = e.translate,
                    n = e.gameId,
                    a = e.vipServerId,
                    i = e.isOwner,
                    o = e.canManagePlace,
                    s = e.shutdownServer,
                    c = e.subscription,
                    l = e.setSubscription,
                    u = e.isLoading,
                    d = e.systemFeedbackService,
                    v = $e((0, O.useState)(!1), 2),
                    e = v[0],
                    m = v[1],
                    v = 0 < a,
                    i = v && i,
                    v = null !== n && (!v && o || i),
                    o = i && c.active;
                return i || v ? L().createElement("div", {
                    className: r
                }, L().createElement(F.Popover, {
                    id: "game-instance-dropdown-menu",
                    button: L().createElement(F.IconButton, {
                        iconName: "more",
                        size: F.IconButton.sizes.small,
                        isDisabled: u
                    }),
                    trigger: "click",
                    placement: "bottom"
                }, L().createElement("ul", {
                    className: "dropdown-menu",
                    role: "menu"
                }, i && L().createElement("li", null, L().createElement(F.Link, {
                    url: Xe(a),
                    className: "rbx-private-server-configure"
                }, t(Qe.configureServerText))), v && L().createElement("li", null, L().createElement("button", {
                    type: "button",
                    onClick: s,
                    className: "rbx-private-server-shutdown rbx-private-server-shutdown"
                }, t(Qe.shutdownServerText))), o && L().createElement("li", null, L().createElement(F.Button, {
                    className: "rbx-private-server-cancel",
                    onClick: function() {
                        return m(!0)
                    },
                    size: F.Button.sizes.default,
                    width: F.Button.widths.full,
                    variant: F.Button.variants.default,
                    isDisabled: u
                }, t(Qe.cancelText))))), o && L().createElement(ze, {
                    translate: t,
                    showModal: e,
                    closeModal: function() {
                        return m(!1)
                    },
                    expirationDate: new Date(c.expirationDate).toLocaleString("default", {
                        month: "long",
                        day: "numeric",
                        year: "numeric"
                    }),
                    cancelPrivateServer: function() {
                        return H.updateVipServerSubscription(a, !1, c.price)
                    },
                    systemFeedbackService: d,
                    setSubscription: l
                })) : L().createElement(O.Fragment, null)
            }
            Ye.defaultProps = {
                className: "",
                gameId: null,
                vipServerId: 0,
                isOwner: !1,
                canManagePlace: !1,
                subscription: {}
            }, Ye.propTypes = {
                className: t().string,
                translate: t().func.isRequired,
                gameId: t().string,
                vipServerId: t().number,
                isOwner: t().bool,
                canManagePlace: t().bool,
                shutdownServer: t().func.isRequired,
                subscription: t().shape({
                    active: t().bool,
                    expired: t().bool,
                    expirationDate: t().string,
                    price: t().number,
                    canRenew: t().bool,
                    hasInsufficientFunds: t().bool,
                    hasRecurringProfile: t().bool,
                    hasPriceChanged: t().bool
                }),
                setSubscription: t().func.isRequired,
                isLoading: t().bool.isRequired,
                systemFeedbackService: t().shape({
                    success: t().func.isRequired,
                    warning: t().func.isRequired
                }).isRequired
            };
            var Ze = Ye;

            function er(e, r) {
                return function(e) {
                    if (Array.isArray(e)) return e
                }(e) || function(e, r) {
                    if ("undefined" == typeof Symbol || !(Symbol.iterator in Object(e))) return;
                    var t = [],
                        n = !0,
                        a = !1,
                        i = void 0;
                    try {
                        for (var o, s = e[Symbol.iterator](); !(n = (o = s.next()).done) && (t.push(o.value), !r || t.length !== r); n = !0);
                    } catch (e) {
                        a = !0, i = e
                    } finally {
                        try {
                            n || null == s.return || s.return()
                        } finally {
                            if (a) throw i
                        }
                    }
                    return t
                }(e, r) || function(e, r) {
                    if (!e) return;
                    if ("string" == typeof e) return rr(e, r);
                    var t = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === t && e.constructor && (t = e.constructor.name);
                    if ("Map" === t || "Set" === t) return Array.from(e);
                    if ("Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)) return rr(e, r)
                }(e, r) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }

            function rr(e, r) {
                (null == r || r > e.length) && (r = e.length);
                for (var t = 0, n = new Array(r); t < r; t++) n[t] = e[t];
                return n
            }
            var tr = f;

            function nr(e) {
                var r = e.translate,
                    t = e.placeName,
                    n = e.creatorName,
                    a = e.price,
                    i = e.renewPrivateServer,
                    o = e.isLoading,
                    s = er((0, O.useState)(!1), 2),
                    c = s[0],
                    l = s[1],
                    e = er((0, O.useState)(!1), 2),
                    s = e[0],
                    u = e[1],
                    n = L().createElement(O.Fragment, null, L().createElement("p", {
                        className: "renew-server-modal-body-text"
                    }, r(tr.confirmEnableFuturePaymentsText, {
                        placeName: t,
                        creatorName: n
                    })), L().createElement("p", {
                        className: "renew-server-modal-body-text",
                        dangerouslySetInnerHTML: {
                            __html: r(tr.startRenewingPrivateServerPrice, {
                                price: (0, D.renderToString)(L().createElement(k.PriceLabel, {
                                    price: a
                                }))
                            })
                        }
                    })),
                    d = (0, O.useCallback)(function() {
                        l(!1)
                    }, []),
                    a = (0, O.useCallback)(function() {
                        d(), u(!0), i().finally(function() {
                            u(!1)
                        })
                    }, [i]);
                return L().createElement(O.Fragment, null, L().createElement(F.Button, {
                    className: "rbx-private-server-renew",
                    onClick: function() {
                        return l(!0)
                    },
                    size: F.Button.sizes.extraSmall,
                    width: F.Button.widths.full,
                    variant: F.Button.variants.control,
                    isDisabled: o || s
                }, r(tr.renewServerListText)), L().createElement(F.SimpleModal, {
                    show: c,
                    title: r(tr.renewPrivateServerTitle),
                    body: n,
                    actionButtonText: r(tr.renewServerListText),
                    neutralButtonText: r(tr.cancelText),
                    onAction: a,
                    onClose: d,
                    onNeutral: d,
                    actionButtonShow: !0
                }))
            }
            nr.propTypes = {
                translate: t().func.isRequired,
                placeName: t().string.isRequired,
                creatorName: t().string.isRequired,
                price: t().number.isRequired,
                renewPrivateServer: t().func.isRequired,
                isLoading: t().bool.isRequired
            };
            var ar = (0, n.withTranslations)(nr, i),
                ir = Y,
                or = f;

            function sr(e) {
                var t = e.translate,
                    r = e.privateServerId,
                    n = e.isPaymentCancelled,
                    a = e.isInsufficientFunds,
                    i = e.isServerInactive,
                    o = e.canRenew,
                    s = e.setSubscription,
                    c = e.isLoading,
                    l = e.systemFeedbackService,
                    u = ir(),
                    d = u.gameDetailPlaceName,
                    v = u.gameDetailPrivateServerPrice,
                    e = u.gameDetailSellerName,
                    u = (0, O.useCallback)(function() {
                        return new Promise(function(e) {
                            H.updateVipServerSubscription(r, !0, v).then(function(e) {
                                e = e.data;
                                s(e), l.success(t(or.renewSubscriptionSuccess) || "Successfully renewed private server")
                            }, function(e) {
                                var r = e.data;
                                0 < (null === (e = r.errors) || void 0 === e ? void 0 : e.length) ? (e = r.errors[0], l.warning(null !== (r = e.userFacingMessage) && void 0 !== r ? r : e.message)) : l.warning(t(or.renewSubscriptionError) || "Unable to renew subscription.")
                            }).finally(function() {
                                e()
                            })
                        })
                    }, [r, v, s, t, l]);
                return L().createElement(O.Fragment, null, n && L().createElement("div", {
                    className: "rbx-private-server-subscription-alert text-alert"
                }, L().createElement("span", {
                    className: "rbx-private-server-subscription-alert-text"
                }, t(or.renewalCanceledText) || "Renewal Canceled")), a && L().createElement("div", {
                    className: "rbx-private-server-insufficient-funds text-alert"
                }, L().createElement("span", {
                    className: "icon-remove"
                }), t(or.insufficientFunds)), i && L().createElement("div", {
                    className: "rbx-private-server-inactive"
                }, L().createElement("span", {
                    className: "icon-turn-off"
                }), t(or.inactiveServerText)), o && L().createElement(ar, {
                    placeName: d,
                    creatorName: e,
                    price: v,
                    renewPrivateServer: u,
                    isLoading: c
                }))
            }
            sr.propTypes = {
                translate: t().func.isRequired,
                privateServerId: t().number.isRequired,
                isPaymentCancelled: t().bool.isRequired,
                isInsufficientFunds: t().bool.isRequired,
                isServerInactive: t().bool.isRequired,
                canRenew: t().bool.isRequired,
                setSubscription: t().func.isRequired,
                isLoading: t().bool.isRequired,
                systemFeedbackService: t().shape({
                    success: t().func.isRequired,
                    warning: t().func.isRequired
                }).isRequired
            };
            var cr = (0, n.withTranslations)(sr, a),
                lr = RobloxBadges,
                ur = I;

            function dr(e) {
                var r = e.ownerUserId,
                    t = e.ownerName,
                    e = e.ownerHasVerifiedBadge;
                return L().createElement("div", {
                    className: "rbx-private-owner"
                }, L().createElement(F.Link, {
                    title: t,
                    url: ur(r),
                    className: "avatar avatar-card-fullbody owner-avatar"
                }, L().createElement(g.Thumbnail2d, {
                    type: g.ThumbnailTypes.avatarHeadshot,
                    size: g.DefaultThumbnailSize,
                    targetId: r,
                    containerClass: "avatar-card-image"
                })), L().createElement(F.Link, {
                    url: ur(r),
                    className: "text-name text-overflow"
                }, L().createElement(lr.VerifiedBadgeStringContainer, {
                    size: lr.BadgeSizes.CAPTIONHEADER,
                    showVerifiedBadge: e,
                    text: t
                })))
            }
            dr.propTypes = {
                ownerUserId: t().number.isRequired,
                ownerName: t().string.isRequired,
                ownerHasVerifiedBadge: t().bool.isRequired
            };
            var vr = dr,
                mr = y.EnvironmentUrls.apiGatewayUrl,
                pr = {
                    getExperimentationValues: function(e, r, t) {
                        return {
                            url: mr + "/product-experimentation-platform/v1/projects/" + e + "/layers/" + r + "/values?parameters=" + t.join(","),
                            withCredentials: !0
                        }
                    }
                },
                r = {
                    homePage: {},
                    homePageWeb: {
                        IsExpandHomeContentEnabled: !0
                    },
                    gridUi: {
                        IsNewSortHeaderEnabled: !1,
                        IsCarouselHorizontalScrollEnabled: !1,
                        IsNewScrollArrowsEnabled: !1
                    },
                    serverTab: {
                        ShouldDisableJoinButtonForFullServers: !1
                    },
                    gameDetails: {
                        ShouldHidePrivateServersInAboutTab: !1,
                        IsGameStorePreviewEnabled: !1
                    },
                    gameDetailsExposure: {
                        IsEventsSectionUprankEnabled: !1,
                        IsEventsSectionRedesignEnabled: !1
                    },
                    searchPage: {
                        ShouldUseOmniSearchAPI: !1
                    },
                    discoverPage: {
                        IsChartsPageRenameEnabled: !0
                    },
                    tileLayer: {},
                    playButton: {}
                },
                s = {
                    homePage: "PlayerApp.HomePage.UX",
                    homePageWeb: "Website.Homepage",
                    gridUi: "PlayerApp.GridUI",
                    serverTab: "GameDetails.ServersTab",
                    gameDetails: "Website.GameDetails",
                    gameDetailsExposure: "Website.GameDetails.Exposure",
                    searchPage: "Website.SearchResultsPage",
                    discoverPage: "Website.GamesPage",
                    tileLayer: "Website.TileLayer",
                    playButton: "Website.PlayButton"
                },
                fr = y.EnvironmentUrls.apiGatewayUrl,
                gr = {
                    url: {
                        getOmniRecommendations: {
                            url: fr + "/discovery-api/omni-recommendation",
                            withCredentials: !0
                        },
                        getOmniRecommendationsMetadata: {
                            url: fr + "/discovery-api/omni-recommendation-metadata",
                            withCredentials: !0
                        },
                        getOmniSearch: {
                            url: fr + "/search-api/omni-search",
                            withCredentials: !0
                        },
                        getExploreSorts: {
                            url: fr + "/explore-api/v1/get-sorts",
                            withCredentials: !0
                        },
                        getExploreSortContents: {
                            url: fr + "/explore-api/v1/get-sort-content",
                            withCredentials: !0
                        },
                        getSearchLandingPage: {
                            url: fr + "/search-api/search-landing-page",
                            withCredentials: !0
                        },
                        getSurvey: function(e) {
                            return {
                                url: fr + "/rocap/v1/locations/" + e + "/prompts",
                                withCredentials: !0
                            }
                        },
                        postSurveyResults: function(e) {
                            return {
                                url: fr + "/rocap/v1/locations/" + e + "/annotations",
                                withCredentials: !0
                            }
                        },
                        getGuacAppPolicyBehaviorData: function() {
                            return {
                                url: fr + "/universal-app-configuration/v1/behaviors/app-policy/content",
                                withCredentials: !0
                            }
                        },
                        getWebFriendsRenamePoliciesGuacPolicy: function() {
                            return {
                                url: fr + "/universal-app-configuration/v1/behaviors/web-rename-friends/content",
                                withCredentials: !0
                            }
                        }
                    }
                },
                br = function() {
                    return (br = Object.assign || function(e) {
                        for (var r, t = 1, n = arguments.length; t < n; t++)
                            for (var a in r = arguments[t]) Object.prototype.hasOwnProperty.call(r, a) && (e[a] = r[a]);
                        return e
                    }).apply(this, arguments)
                },
                Sr = function(e, o, s, c) {
                    return new(s = s || Promise)(function(t, r) {
                        function n(e) {
                            try {
                                i(c.next(e))
                            } catch (e) {
                                r(e)
                            }
                        }

                        function a(e) {
                            try {
                                i(c.throw(e))
                            } catch (e) {
                                r(e)
                            }
                        }

                        function i(e) {
                            var r;
                            e.done ? t(e.value) : ((r = e.value) instanceof s ? r : new s(function(e) {
                                e(r)
                            })).then(n, a)
                        }
                        i((c = c.apply(e, o || [])).next())
                    })
                },
                hr = function(t, n) {
                    var a, i, o, s = {
                            label: 0,
                            sent: function() {
                                if (1 & o[0]) throw o[1];
                                return o[1]
                            },
                            trys: [],
                            ops: []
                        },
                        e = {
                            next: r(0),
                            throw: r(1),
                            return: r(2)
                        };
                    return "function" == typeof Symbol && (e[Symbol.iterator] = function() {
                        return this
                    }), e;

                    function r(r) {
                        return function(e) {
                            return function(r) {
                                if (a) throw new TypeError("Generator is already executing.");
                                for (; s;) try {
                                    if (a = 1, i && (o = 2 & r[0] ? i.return : r[0] ? i.throw || ((o = i.return) && o.call(i), 0) : i.next) && !(o = o.call(i, r[1])).done) return o;
                                    switch (i = 0, o && (r = [2 & r[0], o.value]), r[0]) {
                                        case 0:
                                        case 1:
                                            o = r;
                                            break;
                                        case 4:
                                            return s.label++, {
                                                value: r[1],
                                                done: !1
                                            };
                                        case 5:
                                            s.label++, i = r[1], r = [0];
                                            continue;
                                        case 7:
                                            r = s.ops.pop(), s.trys.pop();
                                            continue;
                                        default:
                                            if (!(o = 0 < (o = s.trys).length && o[o.length - 1]) && (6 === r[0] || 2 === r[0])) {
                                                s = 0;
                                                continue
                                            }
                                            if (3 === r[0] && (!o || r[1] > o[0] && r[1] < o[3])) {
                                                s.label = r[1];
                                                break
                                            }
                                            if (6 === r[0] && s.label < o[1]) {
                                                s.label = o[1], o = r;
                                                break
                                            }
                                            if (o && s.label < o[2]) {
                                                s.label = o[2], s.ops.push(r);
                                                break
                                            }
                                            o[2] && s.ops.pop(), s.trys.pop();
                                            continue
                                    }
                                    r = n.call(t, s)
                                } catch (e) {
                                    r = [6, e], i = 0
                                } finally {
                                    a = o = 0
                                }
                                if (5 & r[0]) throw r[1];
                                return {
                                    value: r[0] ? r[1] : void 0,
                                    done: !0
                                }
                            }([r, e])
                        }
                    }
                },
                yr = function(n, a, i) {
                    return void 0 === i && (i = 1), Sr(void 0, void 0, Promise, function() {
                        var t, r;
                        return hr(this, function(e) {
                            switch (e.label) {
                                case 0:
                                    return e.trys.push([0, 2, , 3]), [4, v.httpService.get(pr.getExperimentationValues(i, n, Object.keys(a)))];
                                case 1:
                                    return t = e.sent().data, r = Object.keys(t).reduce(function(e, r) {
                                        return null !== t[r] && (e[r] = t[r]), e
                                    }, {}), [2, br(br({}, a), r)];
                                case 2:
                                    return e.sent(), [2, a];
                                case 3:
                                    return [2]
                            }
                        })
                    })
                },
                Ir = function() {
                    return v.httpService.get(gr.url.getWebFriendsRenamePoliciesGuacPolicy()).then(function(e) {
                        return e.data
                    })
                },
                wr = function() {
                    var e = (0, O.useState)(!1),
                        r = e[0],
                        t = e[1],
                        n = (0, O.useState)(!0),
                        e = n[0],
                        a = n[1];
                    return (0, O.useEffect)(function() {
                        Ir().then(function(e) {
                            t(!0 === e.renameFriendsToConnections)
                        }).catch(function() {
                            t(!1)
                        }).finally(function() {
                            a(!1)
                        })
                    }, []), {
                        renameFriendsToConnections: r,
                        isLoading: e
                    }
                },
                Er = I,
                Pr = f;

            function Tr(e) {
                function n(e) {
                    return void 0 === e ? L().createElement(O.Fragment, null) : L().createElement(F.Link, {
                        href: Er(e.id),
                        className: "text-name"
                    }, e.displayName)
                }
                var a = e.translate,
                    r = e.players,
                    e = wr(),
                    i = e.renameFriendsToConnections,
                    o = e.isLoading,
                    s = (0, O.useMemo)(function() {
                        return r.filter(function(e) {
                            return null !== e.id && e.id !== be.authenticatedUser.id
                        })
                    }, [r]),
                    e = (0, O.useMemo)(function() {
                        if (0 === s.length || o) return "";
                        var e = (0, D.renderToString)(n(s[0]));
                        if (1 === s.length) return a(i ? Pr.connectionInServerLabel : Pr.friendInServerLabel, {
                            friend: e
                        }) || "".concat(i ? "Connection" : "Friend", " in this server: ").concat(e);
                        var r = (0, D.renderToString)(n(s[1]));
                        if (2 === s.length) return a(i ? Pr.twoConnectionsInServerLabel : Pr.twoFriendsInServerLabel, {
                            firstFriend: e,
                            secondFriend: r
                        }) || "".concat(i ? "Connections" : "Friends", " in this server: ").concat(e, " and ").concat(r);
                        var t = s.length - 2;
                        return i ? a(Pr.manyConnectionsInServerLabel, {
                            firstFriend: e,
                            secondFriend: r,
                            numOtherFriends: t
                        }) : "".concat(i ? "Connections" : "Friends", " in this server: ").concat(e, ", ").concat(r, ", and ").concat(t, " ").concat(1 == t ? "other" : "others")
                    }, [s, o, i, a]);
                return 0 === s.length ? L().createElement(O.Fragment, null) : L().createElement("div", {
                    className: "text friends-in-server-label",
                    "aria-label": e.replace(/<[^>]*>/g, ""),
                    dangerouslySetInnerHTML: {
                        __html: e
                    }
                })
            }

            function xr(e) {
                var r = e.children,
                    t = (0, O.useState)(Nr),
                    e = t[0],
                    n = t[1];
                return (0, O.useEffect)(function() {
                    yr(Cr.serverTab, Ar.serverTab).then(function(e) {
                        n({
                            disableJoinButtonForFullServers: !(null == e || !e.ShouldDisableJoinButtonForFullServers)
                        })
                    }).catch(function(e) {
                        console.error(e)
                    })
                }, []), L().createElement(Or.Provider, {
                    value: e
                }, r)
            }
            Tr.propTypes = {
                translate: t().func.isRequired,
                players: t().arrayOf(t().any).isRequired
            };
            var Rr = Tr,
                Cr = s,
                Ar = r,
                Nr = {
                    disableJoinButtonForFullServers: !1
                },
                Or = (0, O.createContext)(Nr),
                Lr = Or;

            function Dr(e, r) {
                return function(e) {
                    if (Array.isArray(e)) return e
                }(e) || function(e, r) {
                    if ("undefined" == typeof Symbol || !(Symbol.iterator in Object(e))) return;
                    var t = [],
                        n = !0,
                        a = !1,
                        i = void 0;
                    try {
                        for (var o, s = e[Symbol.iterator](); !(n = (o = s.next()).done) && (t.push(o.value), !r || t.length !== r); n = !0);
                    } catch (e) {
                        a = !0, i = e
                    } finally {
                        try {
                            n || null == s.return || s.return()
                        } finally {
                            if (a) throw i
                        }
                    }
                    return t
                }(e, r) || function(e, r) {
                    if (!e) return;
                    if ("string" == typeof e) return kr(e, r);
                    var t = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === t && e.constructor && (t = e.constructor.name);
                    if ("Map" === t || "Set" === t) return Array.from(e);
                    if ("Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)) return kr(e, r)
                }(e, r) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }

            function kr(e, r) {
                (null == r || r > e.length) && (r = e.length);
                for (var t = 0, n = new Array(r); t < r; t++) n[t] = e[t];
                return n
            }
            var Fr = I,
                jr = f,
                Mr = c,
                qr = m;

            function Gr(e) {
                var r = e.maxPlayerCount,
                    e = e.currentPlayerCount;
                if (!r) return L().createElement(O.Fragment, null);
                r = Math.round(e / r * 100);
                return L().createElement("div", {
                    className: "server-player-count-gauge border"
                }, L().createElement("div", {
                    className: "gauge-inner-bar border",
                    style: {
                        width: "".concat(r, "%")
                    }
                }))
            }

            function Ur(e) {
                e = e.player;
                return L().createElement("span", {
                    key: e.playerToken,
                    className: "avatar avatar-headshot-md player-avatar"
                }, null == e.id ? L().createElement(g.Thumbnail2d, {
                    type: g.ThumbnailTypes.avatarHeadshot,
                    token: e.playerToken,
                    containerClass: "avatar-card-image"
                }) : L().createElement(F.Link, {
                    className: "avatar-card-link",
                    href: Fr(e.id)
                }, L().createElement(g.Thumbnail2d, {
                    type: g.ThumbnailTypes.avatarHeadshot,
                    targetId: e.id,
                    containerClass: "avatar-card-image",
                    altName: e.displayName
                })))
            }

            function Br(e) {
                var r = e.id,
                    t = e.translate,
                    n = e.cssKey,
                    a = e.serverListType,
                    i = e.placeId,
                    o = e.gameServerStatus,
                    s = e.canManagePlace,
                    c = e.name,
                    l = e.vipServerId,
                    u = e.vipServerSubscription,
                    d = e.accessCode,
                    v = e.showSlowGameMessage,
                    m = e.owner,
                    p = e.players,
                    f = e.onShutdownServerSuccess,
                    g = e.systemFeedbackService,
                    b = e.isLoading,
                    S = e.setIsLoading,
                    h = e.maxPlayers,
                    y = e.currentPlayersCount,
                    I = e.privateServerNewJoinsDisallowed,
                    w = Dr((0, O.useState)(u), 2),
                    E = w[0],
                    P = w[1],
                    T = (null == m ? void 0 : m.id) === be.authenticatedUser.id,
                    x = !!l,
                    R = x && !d,
                    C = (0, O.useContext)(Lr);
                (0, O.useEffect)(function() {
                    P(u)
                }, [u]);
                var A = Mr && 0 < Mr ? null == p ? void 0 : p.slice(0, Mr) : p,
                    N = 0 < l,
                    e = N && T,
                    w = null !== r,
                    N = e || w && (!N && s || e),
                    e = 0 < y - A.length && "+".concat(y - A.length),
                    w = w ? r.substring(9, 18) : "",
                    w = t(jr.serverIdText, {
                        serverId: w
                    }) || "ID: ".concat(w);
                return L().createElement("li", {
                    className: "rbx-".concat(n, "game-server-item col-md-3 col-sm-4 col-xs-6")
                }, L().createElement("div", {
                    className: "card-item card-item-".concat(n, "server")
                }, L().createElement("div", {
                    className: "player-thumbnails-container"
                }, A.map(function(e) {
                    return L().createElement(Ur, {
                        key: e.playerToken,
                        player: e
                    })
                }), !!e && L().createElement("span", {
                    className: "avatar avatar-headshot-md player-avatar hidden-players-placeholder"
                }, e)), L().createElement("div", {
                    className: ge()("rbx-".concat(n, "game-server-details"), "game-server-details", {
                        "border-right": a === qr.Vip.key
                    })
                }, (!!c || !!N) && L().createElement("div", {
                    className: "section-header"
                }, c && L().createElement("span", {
                    className: "font-bold"
                }, c), L().createElement(Ze, {
                    className: "link-menu rbx-".concat(n, "game-server-menu"),
                    translate: t,
                    placeId: i,
                    gameId: r,
                    vipServerId: l,
                    isOwner: T,
                    canManagePlace: s,
                    shutdownServer: function() {
                        b && g.warning(t(jr.shutdownServerError)), S(!0), H.shutdownGameInstance(i, r, l).then(function() {
                            g.success(t(jr.shutdownServerSuccess)), f()
                        }, function() {
                            g.warning(t(jr.shutdownServerError))
                        }).finally(function() {
                            S(!1)
                        })
                    },
                    subscription: E,
                    setSubscription: P,
                    isLoading: b,
                    systemFeedbackService: g
                })), x && L().createElement(vr, {
                    ownerUserId: m.id,
                    ownerName: m.displayName,
                    ownerHasVerifiedBadge: m.hasVerifiedBadge
                }), L().createElement("div", {
                    className: "text-info rbx-game-status rbx-".concat(n, "game-server-status text-overflow")
                }, o), L().createElement(Gr, {
                    maxPlayerCount: h,
                    currentPlayerCount: y
                }), a === qr.friend.key && L().createElement(Rr, {
                    translate: t,
                    players: p
                }), v && L().createElement("div", {
                    className: "rbx-".concat(n, "game-server-alert")
                }, L().createElement("span", {
                    className: "icon-remove"
                }), t(jr.slowGameWarning)), x && L().createElement(cr, {
                    privateServerId: l,
                    isPaymentCancelled: !(null != E && E.active) && 0 < (null == E ? void 0 : E.price),
                    isInsufficientFunds: null == E ? void 0 : E.hasInsufficientFunds,
                    isServerInactive: R,
                    canRenew: (null == E ? void 0 : E.canRenew) && !(null != E && E.active),
                    setSubscription: P,
                    isLoading: b,
                    systemFeedbackService: g
                }), !R && !(null != E && E.isExpired) && L().createElement("span", {
                    "data-placeid": i
                }, L().createElement(F.Button, {
                    className: "btn-full-width btn-control-xs rbx-".concat(n, "game-server-join game-server-join-btn"),
                    onClick: I && 0 === y ? function() {
                        g.warning(t(jr.atCapacityError))
                    } : Fe(i, {
                        instanceId: r,
                        accessCode: d
                    }, a, p),
                    isDisabled: b || C.disableJoinButtonForFullServers && h <= y
                }, t(jr.joinServerText))), a === qr.public.key && L().createElement("div", {
                    className: "server-id-text text-info xsmall"
                }, w))))
            }
            Br.defaultProps = {
                id: null,
                cssKey: "",
                canManagePlace: !1,
                name: "",
                vipServerId: 0,
                accessCode: "",
                showSlowGameMessage: !1,
                owner: void 0,
                vipServerSubscription: void 0,
                players: [],
                maxPlayers: 0,
                currentPlayersCount: 0,
                privateServerNewJoinsDisallowed: !1
            }, Br.propTypes = {
                id: t().string,
                translate: t().func.isRequired,
                cssKey: t().string,
                serverListType: t().string.isRequired,
                placeId: t().number.isRequired,
                name: t().string,
                vipServerId: t().number,
                maxPlayers: t().number,
                currentPlayersCount: t().number,
                vipServerSubscription: {
                    canRenew: t().bool.isRequired,
                    active: t().bool.isRequired,
                    hasInsufficientFunds: t().bool.isRequired,
                    price: t().number.isRequired,
                    expired: t().bool.isRequired
                },
                accessCode: t().string,
                gameServerStatus: t().string.isRequired,
                canManagePlace: t().bool,
                showSlowGameMessage: t().bool,
                owner: {
                    id: t().number.isRequired,
                    name: t().string.isRequired,
                    displayName: t().string.isRequired,
                    hasVerifiedBadge: t().bool.isRequired
                },
                players: t().arrayOf(t().any),
                onShutdownServerSuccess: t().func.isRequired,
                isLoading: t().bool.isRequired,
                setIsLoading: t().func.isRequired,
                systemFeedbackService: t().shape({
                    success: t().func.isRequired,
                    warning: t().func.isRequired
                }).isRequired,
                privateServerNewJoinsDisallowed: t().bool
            };
            var Vr = Br,
                _r = function() {
                    return (_r = Object.assign || function(e) {
                        for (var r, t = 1, n = arguments.length; t < n; t++)
                            for (var a in r = arguments[t]) Object.prototype.hasOwnProperty.call(r, a) && (e[a] = r[a]);
                        return e
                    }).apply(this, arguments)
                },
                Hr = f,
                Wr = p,
                Jr = (0, n.withTranslations)(function(e) {
                    var r = e.translate,
                        t = e.options,
                        n = e.setOptions,
                        e = void 0 !== (e = e.isLoading) && e;
                    return L().createElement("div", {
                        className: "server-list-options"
                    }, L().createElement("div", {
                        className: "select-group"
                    }, L().createElement("label", {
                        className: "select-label text-label",
                        htmlFor: "sort-select"
                    }, r(Hr.numberOfPlayers) || "Number of Players"), L().createElement("div", {
                        className: "rbx-select-group select-group"
                    }, L().createElement("select", {
                        onChange: function(r) {
                            y.EventStream.SendEventWithTarget("serverListOptionsInteraction", "sortSelect", {
                                pid: ke(),
                                sort: r.currentTarget.value
                            }, y.EventStream.TargetTypes.WWW), n(function(e) {
                                return _r(_r({}, e), {
                                    sortOrder: r.currentTarget.value
                                })
                            })
                        },
                        onFocus: function() {
                            y.EventStream.SendEventWithTarget("serverListOptionsInteraction", "sortDropdown", {
                                pid: ke()
                            }, y.EventStream.TargetTypes.WWW)
                        },
                        disabled: e,
                        value: t.sortOrder,
                        id: "sort-select",
                        "data-testid": "sort-select",
                        className: "input-field rbx-select select-option"
                    }, L().createElement("option", {
                        value: Wr.descending
                    }, r(Hr.descending) || "Descending"), L().createElement("option", {
                        value: Wr.ascending
                    }, r(Hr.ascending) || "Ascending")), L().createElement("span", {
                        className: "icon-arrow icon-down-16x16"
                    }))), L().createElement("div", {
                        className: "checkbox"
                    }, L().createElement("input", {
                        onChange: function(r) {
                            y.EventStream.SendEventWithTarget("serverListOptionsInteraction", "filterSelect", {
                                pid: ke(),
                                checked: r.currentTarget.checked
                            }, y.EventStream.TargetTypes.WWW), n(function(e) {
                                return _r(_r({}, e), {
                                    excludeFullGames: r.currentTarget.checked
                                })
                            })
                        },
                        disabled: e,
                        type: "checkbox",
                        id: "filter-checkbox",
                        "data-testid": "filter-checkbox",
                        checked: t.excludeFullGames
                    }), L().createElement("label", {
                        className: "checkbox-label text-label",
                        htmlFor: "filter-checkbox"
                    }, r(Hr.hideFullServers) || "Hide Full Servers")))
                }, a);

            function zr() {
                return (zr = Object.assign || function(e) {
                    for (var r = 1; r < arguments.length; r++) {
                        var t, n = arguments[r];
                        for (t in n) Object.prototype.hasOwnProperty.call(n, t) && (e[t] = n[t])
                    }
                    return e
                }).apply(this, arguments)
            }

            function $r(e, r) {
                return function(e) {
                    if (Array.isArray(e)) return e
                }(e) || function(e, r) {
                    if ("undefined" == typeof Symbol || !(Symbol.iterator in Object(e))) return;
                    var t = [],
                        n = !0,
                        a = !1,
                        i = void 0;
                    try {
                        for (var o, s = e[Symbol.iterator](); !(n = (o = s.next()).done) && (t.push(o.value), !r || t.length !== r); n = !0);
                    } catch (e) {
                        a = !0, i = e
                    } finally {
                        try {
                            n || null == s.return || s.return()
                        } finally {
                            if (a) throw i
                        }
                    }
                    return t
                }(e, r) || function(e, r) {
                    if (!e) return;
                    if ("string" == typeof e) return Kr(e, r);
                    var t = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === t && e.constructor && (t = e.constructor.name);
                    if ("Map" === t || "Set" === t) return Array.from(e);
                    if ("Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)) return Kr(e, r)
                }(e, r) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }

            function Kr(e, r) {
                (null == r || r > e.length) && (r = e.length);
                for (var t = 0, n = new Array(r); t < r; t++) n[t] = e[t];
                return n
            }
            var Qr = (p = $r((0, F.createSystemFeedback)(), 2))[0],
                Xr = p[1],
                Yr = l,
                Zr = f,
                et = d,
                rt = j,
                tt = m;

            function nt(e) {
                var r = e.gameInstances,
                    d = e.handleGameInstanceShutdownAtIndex,
                    t = e.headerTitle,
                    v = e.isLoading,
                    n = e.loadMoreGameInstances,
                    a = e.loadingError,
                    m = e.placeId,
                    i = e.refreshGameInstances,
                    p = e.setIsLoading,
                    o = e.showLoadMoreButton,
                    f = e.translate,
                    g = e.type,
                    b = e.userCanManagePlace,
                    S = e.privateServerNewJoinsDisallowed,
                    h = "".concat(g, "-"),
                    s = 0 === r.length,
                    c = "rbx-".concat(h, "running-games-footer"),
                    l = "rbx-".concat(h, "running-games"),
                    u = "card-list rbx-".concat(h, "game-server-item-container"),
                    y = "rbx-".concat(h, "game-server-item-container"),
                    I = (0, O.useMemo)(function() {
                        var e = r.length % et;
                        return 0 < e && o ? r.slice(0, -1 * e) : r
                    }, [r, o]),
                    e = $r((0, O.useState)(rt), 2),
                    w = e[0],
                    e = e[1];
                return (0, O.useEffect)(function() {
                    null != i && i(w)
                }, [w]), L().createElement(O.Fragment, null, L().createElement(Qr, null), L().createElement("div", {
                    id: l,
                    className: "stack server-list-section",
                    "data-placeid": m,
                    "data-showshutdown": !0
                }, t && L().createElement("div", {
                    className: "container-header"
                }, L().createElement("div", {
                    className: "server-list-container-header"
                }, L().createElement("h2", {
                    className: "server-list-header"
                }, t), L().createElement(F.Button, {
                    className: "btn-more rbx-refresh refresh-link-icon",
                    isDisabled: v,
                    onClick: function() {
                        return i(w)
                    },
                    size: F.Button.sizes.extraSmall,
                    variant: F.Button.variants.control
                }, f(Zr.privateServerRefreshText) || "Refresh")), g === tt.public.key && L().createElement(Jr, {
                    isLoading: v,
                    options: w,
                    setOptions: e,
                    translate: f
                })), s ? L().createElement("div", {
                    className: "section-content-off empty-game-instances-container"
                }, v ? L().createElement(F.Loading, null) : L().createElement("p", {
                    className: "no-servers-message"
                }, a ? f(Zr.loadServersError) || "Unable to load servers." : f(Zr.noServersFoundText))) : L().createElement(O.Fragment, null, L().createElement("ul", {
                    id: y,
                    className: u
                }, I.map(function(e, r) {
                    var t = e.accessCode,
                        n = e.id,
                        a = e.maxPlayers,
                        i = e.name,
                        o = e.owner,
                        s = e.pfs,
                        c = e.players,
                        l = e.playing,
                        u = e.vipServerId,
                        e = e.vipServerSubscription;
                    return L().createElement(Vr, zr({
                        key: u
                    }, {
                        accessCode: t,
                        canManagePlace: b,
                        cssKey: h,
                        currentPlayersCount: l || c.length,
                        gameServerStatus: f(Zr.playerCountText, {
                            currentPlayers: l || c.length,
                            maximumAllowedPlayers: a
                        }),
                        id: n,
                        isLoading: v,
                        maxPlayers: a,
                        name: i,
                        onShutdownServerSuccess: function() {
                            d(r)
                        },
                        owner: o,
                        placeId: m,
                        players: c,
                        serverListType: g,
                        setIsLoading: p,
                        showSlowGameMessage: s < Yr,
                        systemFeedbackService: Xr,
                        translate: f,
                        vipServerId: u,
                        vipServerSubscription: e,
                        privateServerNewJoinsDisallowed: S
                    }))
                })), L().createElement("div", {
                    className: c
                }, o && L().createElement(F.Button, {
                    className: "rbx-running-games-load-more",
                    isDisabled: v,
                    onClick: function() {
                        return n(w)
                    },
                    type: "button",
                    variant: F.Button.variants.control,
                    width: F.Button.widths.full
                }, f(Zr.loadMoreButtonText))))))
            }
            nt.defaultProps = {
                showLoadMoreButton: !1,
                loadMoreButtonText: "",
                headerTitle: "",
                gameInstances: [],
                privateServerNewJoinsDisallowed: !1
            }, nt.propTypes = {
                translate: t().func.isRequired,
                type: t().string.isRequired,
                placeId: t().number.isRequired,
                headerTitle: t().string,
                loadMoreGameInstances: t().func.isRequired,
                showLoadMoreButton: t().bool,
                loadMoreButtonText: t().string,
                gameInstances: t().arrayOf(t().any),
                refreshGameInstances: t().func.isRequired,
                handleGameInstanceShutdownAtIndex: t().func.isRequired,
                userCanManagePlace: t().bool.isRequired,
                isLoading: t().bool.isRequired,
                setIsLoading: t().func.isRequired,
                loadingError: t().bool.isRequired,
                privateServerNewJoinsDisallowed: t().bool
            };
            var at = (0, n.withTranslations)(nt, a),
                it = (d = {
                    gameDetailTabs: d = {
                        about: "tab-about",
                        store: "tab-store",
                        servers: "tab-game-instances"
                    },
                    gameDetailHashesToTabs: {
                        "#!/about": d.about,
                        "#!/store": d.store,
                        "#!/game-instances": d.servers
                    }
                }).gameDetailTabs;

            function ot(e, r) {
                return function(e) {
                    if (Array.isArray(e)) return e
                }(e) || function(e, r) {
                    if ("undefined" == typeof Symbol || !(Symbol.iterator in Object(e))) return;
                    var t = [],
                        n = !0,
                        a = !1,
                        i = void 0;
                    try {
                        for (var o, s = e[Symbol.iterator](); !(n = (o = s.next()).done) && (t.push(o.value), !r || t.length !== r); n = !0);
                    } catch (e) {
                        a = !0, i = e
                    } finally {
                        try {
                            n || null == s.return || s.return()
                        } finally {
                            if (a) throw i
                        }
                    }
                    return t
                }(e, r) || function(e, r) {
                    if (!e) return;
                    if ("string" == typeof e) return st(e, r);
                    var t = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === t && e.constructor && (t = e.constructor.name);
                    if ("Map" === t || "Set" === t) return Array.from(e);
                    if ("Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)) return st(e, r)
                }(e, r) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }

            function st(e, r) {
                (null == r || r > e.length) && (r = e.length);
                for (var t = 0, n = new Array(r); t < r; t++) n[t] = e[t];
                return n
            }

            function ct() {
                if (!dt()) return null;
                var e = ut[window.location.hash];
                return e || lt.about
            }
            var lt = d.gameDetailTabs,
                ut = d.gameDetailHashesToTabs,
                dt = function() {
                    var r = document.getElementById("horizontal-tabs");
                    if (r) {
                        var e = Object.values(it);
                        try {
                            e.forEach(function(e) {
                                if (!r.querySelector("#".concat(e))) throw new Error("Unable to find horizontal tab with id ".concat(e))
                            })
                        } catch (e) {
                            return console.log(e.message), !1
                        }
                        return !0
                    }
                    return !1
                },
                vt = function() {
                    function e() {
                        n(ct())
                    }
                    var r = ot((0, O.useState)(ct()), 2),
                        t = r[0],
                        n = r[1];
                    return (0, O.useEffect)(function() {
                        return window.addEventListener("hashchange", e),
                            function() {
                                window.removeEventListener("hashchange", e)
                            }
                    }, []), t
                };

            function mt(e, r, t, n, a, i, o) {
                try {
                    var s = e[i](o),
                        c = s.value
                } catch (e) {
                    return void t(e)
                }
                s.done ? r(c) : Promise.resolve(c).then(n, a)
            }

            function pt(s) {
                return function() {
                    var e = this,
                        o = arguments;
                    return new Promise(function(r, t) {
                        var n = s.apply(e, o);

                        function a(e) {
                            mt(n, r, t, a, i, "next", e)
                        }

                        function i(e) {
                            mt(n, r, t, a, i, "throw", e)
                        }
                        a(void 0)
                    })
                }
            }

            function ft(e, r) {
                return function(e) {
                    if (Array.isArray(e)) return e
                }(e) || function(e, r) {
                    if ("undefined" == typeof Symbol || !(Symbol.iterator in Object(e))) return;
                    var t = [],
                        n = !0,
                        a = !1,
                        i = void 0;
                    try {
                        for (var o, s = e[Symbol.iterator](); !(n = (o = s.next()).done) && (t.push(o.value), !r || t.length !== r); n = !0);
                    } catch (e) {
                        a = !0, i = e
                    } finally {
                        try {
                            n || null == s.return || s.return()
                        } finally {
                            if (a) throw i
                        }
                    }
                    return t
                }(e, r) || function(e, r) {
                    if (!e) return;
                    if ("string" == typeof e) return gt(e, r);
                    var t = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === t && e.constructor && (t = e.constructor.name);
                    if ("Map" === t || "Set" === t) return Array.from(e);
                    if ("Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)) return gt(e, r)
                }(e, r) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }

            function gt(e, r) {
                (null == r || r > e.length) && (r = e.length);
                for (var t = 0, n = new Array(r); t < r; t++) n[t] = e[t];
                return n
            }

            function bt(e) {
                return JSON.parse(JSON.stringify(e))
            }
            var St = Y,
                ht = function(s) {
                    var c = 1 < arguments.length && void 0 !== arguments[1] && arguments[1],
                        e = (b = St()).gameDetailCanCreateServer,
                        l = b.gameDetailPlaceId,
                        r = b.gameDetailPlaceName,
                        t = b.gameDetailPrivateServerPrice,
                        n = b.gameDetailPrivateServerProductId,
                        a = b.gameDetailSellerId,
                        i = b.gameDetailSellerName,
                        o = b.gameDetailUniverseId,
                        u = b.gameDetailUserCanManagePlace,
                        d = (T = ft((0, O.useState)(!1), 2))[0],
                        v = T[1],
                        m = (x = ft((0, O.useState)(!1), 2))[0],
                        p = x[1],
                        f = (I = ft((0, O.useState)([]), 2))[0],
                        g = I[1],
                        b = (P = ft((0, O.useState)(null), 2))[0],
                        S = P[1],
                        h = (T = ft((0, O.useState)(""), 2))[0],
                        y = T[1],
                        I = (x = ft((0, O.useState)(!1), 2))[0],
                        w = x[1],
                        E = (0, O.useCallback)(pt(regeneratorRuntime.mark(function e() {
                            var r, t, n, a, i, o = arguments;
                            return regeneratorRuntime.wrap(function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        if (r = 0 < o.length && void 0 !== o[0] ? o[0] : {}, t = 1 < o.length && void 0 !== o[1] && o[1], d) throw Error("Cannot load more servers while a request is in flight");
                                        e.next = 4;
                                        break;
                                    case 4:
                                        return v(!0), p(!1), e.prev = 6, e.next = 9, s(l, t ? "" : h, r);
                                    case 9:
                                        return a = e.sent, i = a.data, n = i.data, a = i.nextPageCursor, i = i.gameJoinRestricted, S(i), e.next = 17, Promise.all(n.map(function() {
                                            var r = pt(regeneratorRuntime.mark(function e(r) {
                                                var t, n, a, i;
                                                return regeneratorRuntime.wrap(function(e) {
                                                    for (;;) switch (e.prev = e.next) {
                                                        case 0:
                                                            if (void 0 === r.players && (r.players = []), t = r.players, n = r.playerTokens, a = {}, t.forEach(function(e) {
                                                                    a[e.playerToken] = e
                                                                }), n.forEach(function(e) {
                                                                    null == a[e] && t.push({
                                                                        id: null,
                                                                        name: null,
                                                                        playerToken: e,
                                                                        displayName: null
                                                                    })
                                                                }), c && r.vipServerId && (null === (n = r.owner) || void 0 === n ? void 0 : n.id) === be.authenticatedUser.id) return i = r.vipServerId, e.prev = 7, e.next = 10, H.getVipServer(i);
                                                            e.next = 17;
                                                            break;
                                                        case 10:
                                                            i = e.sent, i = i.data, r.vipServerSubscription = i.subscription, e.next = 17;
                                                            break;
                                                        case 15:
                                                            e.prev = 15, e.t0 = e.catch(7);
                                                        case 17:
                                                        case "end":
                                                            return e.stop()
                                                    }
                                                }, e, null, [
                                                    [7, 15]
                                                ])
                                            }));
                                            return function(e) {
                                                return r.apply(this, arguments)
                                            }
                                        }()));
                                    case 17:
                                        g(t ? n : function(e, r) {
                                            var t = bt(e),
                                                n = {};
                                            return t.forEach(function(e) {
                                                void 0 !== e.id && (n[e.id] = e)
                                            }), r.forEach(function(e) {
                                                var r = n[e.id];
                                                r ? Object.assign(r, e) : t.push(e)
                                            }), t
                                        }(f, n)), y(a), w(!0), e.next = 27;
                                        break;
                                    case 22:
                                        e.prev = 22, e.t0 = e.catch(6), g([]), y(""), p(!0);
                                    case 27:
                                        return e.prev = 27, r.startTime && (i = performance.now() - r.startTime, (0, R.endSuccess)(ee.PRIVATE_SERVER_LOAD), ae.sendEvent(ee.PRIVATE_SERVER_LOAD, re.GAME_TAB, i)), v(!1), e.finish(27);
                                    case 31:
                                    case "end":
                                        return e.stop()
                                }
                            }, e, null, [
                                [6, 22, 27, 31]
                            ])
                        })), [d, l, h, f, s, c]),
                        P = (0, O.useCallback)(function(e) {
                            if (d) throw Error("Cannot remove server from list while a request is in flight");
                            var r = bt(f);
                            r.splice(e, 1), g(r)
                        }, [d, f]),
                        T = (0, O.useCallback)(function(e) {
                            if (d) throw Error("Cannot clear server while a request is in flight");
                            var r = bt(f),
                                e = r[e];
                            e.playerTokens = [], e.players = [], e.playing = 0, e.id = null, g(r)
                        }, [d, f]),
                        x = (0, O.useCallback)(function() {
                            var e = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : {};
                            if (d) throw Error("Cannot refresh server list while a request is in flight");
                            E(e, !0)
                        }, [d, E]);
                    return {
                        metaData: {
                            universeId: o,
                            placeId: l,
                            placeName: r,
                            canCreateServer: e,
                            price: t,
                            userCanManagePlace: u,
                            sellerId: a,
                            sellerName: i,
                            privateServerProductId: n
                        },
                        servers: f,
                        loadMoreServers: E,
                        removeServerAtIndex: P,
                        clearServerAtIndex: T,
                        refreshServers: x,
                        hasNext: !!h,
                        isBusy: d,
                        setIsBusy: v,
                        hasError: m,
                        isReady: I,
                        joinRestricted: b
                    }
                };

            function yt() {
                return (yt = Object.assign || function(e) {
                    for (var r = 1; r < arguments.length; r++) {
                        var t, n = arguments[r];
                        for (t in n) Object.prototype.hasOwnProperty.call(n, t) && (e[t] = n[t])
                    }
                    return e
                }).apply(this, arguments)
            }

            function It(e, r) {
                return function(e) {
                    if (Array.isArray(e)) return e
                }(e) || function(e, r) {
                    if ("undefined" == typeof Symbol || !(Symbol.iterator in Object(e))) return;
                    var t = [],
                        n = !0,
                        a = !1,
                        i = void 0;
                    try {
                        for (var o, s = e[Symbol.iterator](); !(n = (o = s.next()).done) && (t.push(o.value), !r || t.length !== r); n = !0);
                    } catch (e) {
                        a = !0, i = e
                    } finally {
                        try {
                            n || null == s.return || s.return()
                        } finally {
                            if (a) throw i
                        }
                    }
                    return t
                }(e, r) || function(e, r) {
                    if (!e) return;
                    if ("string" == typeof e) return wt(e, r);
                    var t = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === t && e.constructor && (t = e.constructor.name);
                    if ("Map" === t || "Set" === t) return Array.from(e);
                    if ("Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)) return wt(e, r)
                }(e, r) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }

            function wt(e, r) {
                (null == r || r > e.length) && (r = e.length);
                for (var t = 0, n = new Array(r); t < r; t++) n[t] = e[t];
                return n
            }
            var Et = d.gameDetailTabs,
                Pt = f,
                Tt = m;

            function xt(e) {
                var r = e.translate,
                    t = e.showServers,
                    n = e.intl,
                    a = ht(H.getVipGameInstances, t, !1),
                    i = a.clearServerAtIndex,
                    o = a.hasError,
                    s = a.hasNext,
                    c = a.isBusy,
                    l = a.loadMoreServers,
                    u = a.metaData,
                    d = u.canCreateServer,
                    v = u.placeId,
                    m = u.placeName,
                    p = u.price,
                    f = u.privateServerProductId,
                    g = u.sellerId,
                    b = u.sellerName,
                    S = u.universeId,
                    h = u.userCanManagePlace,
                    y = a.refreshServers,
                    I = a.servers,
                    w = a.setIsBusy,
                    E = a.isReady,
                    P = a.joinRestricted,
                    T = wr(),
                    x = T.renameFriendsToConnections,
                    e = T.isLoading,
                    R = null !== (u = vt()) && void 0 !== u ? u : Et.servers,
                    a = It((0, O.useState)(!0), 2),
                    C = a[0],
                    A = a[1];
                (0, O.useEffect)(function() {
                    R !== Et.servers ? A(!0) : A(!1)
                }, [R]), (0, O.useEffect)(function() {
                    R === Et.servers && t && C && y(j)
                }, [R, C, t]);
                var N, u = (T = I, N = Me().gameDetailPrivateServerLimit, T.forEach(function(e) {
                        e.owner.id === be.authenticatedUser.id && --N
                    }), 0 < N),
                    a = 0 !== f,
                    T = '<a class="text-link" href="#!/game-instances">'.concat(r(Pt.serversText), "</a>"),
                    n = '<a class="text-link" href="'.concat(M(n.getRobloxLocale()), '">').concat(r(Pt.privateServerHeader), "</a>");
                return L().createElement("div", {
                    id: "rbx-private-servers",
                    className: "stack"
                }, L().createElement("div", {
                    className: "container-header"
                }, L().createElement("h2", null, r(Pt.privateServerHeader)), t && a && L().createElement(F.Button, {
                    className: "btn-more rbx-refresh refresh-link-icon",
                    isDisabled: c,
                    onClick: function() {
                        return y()
                    },
                    size: F.Button.sizes.extraSmall,
                    variant: F.Button.variants.control
                }, r(Pt.privateServerRefreshText)), L().createElement(F.Tooltip, {
                    content: e ? "" : r(x ? Pt.privateServerTooltipConnections : Pt.privateServerTooltip),
                    id: "private-server-tooltip",
                    placement: "bottom"
                }, L().createElement("span", {
                    className: "icon-moreinfo"
                }))), a ? L().createElement(O.Fragment, null, L().createElement("div", {
                    className: "create-server-banner section-content remove-panel"
                }, L().createElement("div", {
                    className: "create-server-banner-text text"
                }, d && L().createElement("span", {
                    className: "private-server-price",
                    dangerouslySetInnerHTML: {
                        __html: r(Pt.privateServerPrice, {
                            price: (0, D.renderToString)(L().createElement(k.PriceLabel, {
                                price: p
                            }))
                        })
                    }
                }), L().createElement("span", {
                    className: "play-with-others-text"
                }, e ? "" : r(x ? Pt.privateServerPlayWithConnections : Pt.privateServerPlayWithOthers), L().createElement("br", null), !t && L().createElement("span", {
                    dangerouslySetInnerHTML: {
                        __html: r(Pt.seeAllPrivateServersText, {
                            serversLink: T
                        })
                    }
                }))), d && L().createElement(fe, yt({
                    privateServerTranslate: r,
                    refreshServers: y,
                    disabled: !E
                }, {
                    placeName: m,
                    universeId: S,
                    price: p,
                    canCreatePrivateServer: u,
                    sellerId: g,
                    sellerName: b,
                    productId: f
                }))), L().createElement("div", {
                    className: "section tab-server-only"
                }, t && L().createElement(at, {
                    gameInstances: I,
                    handleGameInstanceShutdownAtIndex: i,
                    isLoading: c,
                    loadMoreGameInstances: l,
                    loadingError: o,
                    placeId: v,
                    setIsLoading: w,
                    showLoadMoreButton: s,
                    type: Tt.Vip.key,
                    userCanManagePlace: h,
                    privateServerNewJoinsDisallowed: null != P && P
                }))) : L().createElement("div", {
                    className: "section-content-off",
                    dangerouslySetInnerHTML: {
                        __html: r(Pt.privateServersNotSupported, {
                            vipServersLink: n
                        })
                    }
                }))
            }
            xt.defaultProps = {
                showServers: !0
            }, xt.propTypes = {
                intl: t().shape({
                    getRobloxLocale: t().func.isRequired
                }).isRequired,
                showServers: t().bool,
                translate: t().func.isRequired
            };
            var Rt = (0, n.withTranslations)(xt, i);

            function Ct(e) {
                var r = e.type,
                    t = e.translate,
                    n = e.headerTitleResource,
                    a = e.getGameServers,
                    i = ht(a),
                    o = i.servers,
                    s = i.loadMoreServers,
                    c = i.refreshServers,
                    l = i.removeServerAtIndex,
                    u = i.hasNext,
                    d = i.isBusy,
                    v = i.setIsBusy,
                    e = i.hasError,
                    a = i.metaData,
                    i = a.placeId,
                    a = a.userCanManagePlace;
                return L().createElement(at, {
                    type: r,
                    placeId: i,
                    gameInstances: o,
                    headerTitle: t(n),
                    showLoadMoreButton: u,
                    loadMoreGameInstances: s,
                    refreshGameInstances: c,
                    handleGameInstanceShutdownAtIndex: l,
                    userCanManagePlace: a,
                    isLoading: d,
                    setIsLoading: v,
                    loadingError: e
                })
            }
            Ct.propTypes = {
                type: t().string.isRequired,
                translate: t().func.isRequired,
                headerTitleResource: t().string.isRequired,
                getGameServers: t().func.isRequired
            };
            var At = (0, n.withTranslations)(Ct, a);

            function Nt(e, r) {
                return function(e) {
                    if (Array.isArray(e)) return e
                }(e) || function(e, r) {
                    if ("undefined" == typeof Symbol || !(Symbol.iterator in Object(e))) return;
                    var t = [],
                        n = !0,
                        a = !1,
                        i = void 0;
                    try {
                        for (var o, s = e[Symbol.iterator](); !(n = (o = s.next()).done) && (t.push(o.value), !r || t.length !== r); n = !0);
                    } catch (e) {
                        a = !0, i = e
                    } finally {
                        try {
                            n || null == s.return || s.return()
                        } finally {
                            if (a) throw i
                        }
                    }
                    return t
                }(e, r) || function(e, r) {
                    if (!e) return;
                    if ("string" == typeof e) return Ot(e, r);
                    var t = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === t && e.constructor && (t = e.constructor.name);
                    if ("Map" === t || "Set" === t) return Array.from(e);
                    if ("Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)) return Ot(e, r)
                }(e, r) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }

            function Ot(e, r) {
                (null == r || r > e.length) && (r = e.length);
                for (var t = 0, n = new Array(r); t < r; t++) n[t] = e[t];
                return n
            }
            var Lt = m,
                Dt = f,
                kt = d.gameDetailTabs;

            function Ft() {
                var e = Nt((0, O.useState)(!1), 2),
                    r = e[0],
                    t = e[1],
                    n = vt(),
                    a = wr(),
                    i = a.renameFriendsToConnections,
                    e = a.isLoading,
                    a = "";
                return e || (a = i ? Dt.connectionsServersTitle : Dt.friendsServersTitle), (0, O.useEffect)(function() {
                    r || n === kt.servers && t(!0)
                }, [n, r]), n && !r ? L().createElement(O.Fragment, null) : L().createElement(xr, null, L().createElement(Rt, null), !e && L().createElement(At, {
                    type: Lt.friend.key,
                    getGameServers: H.getFriendsGameInstances,
                    headerTitleResource: a
                }), L().createElement(At, {
                    type: Lt.public.key,
                    getGameServers: H.getPublicGameInstances,
                    headerTitleResource: Dt.publicServersTitle
                }))
            }
            Ft.propTypes = {};
            var jt = Ft,
                Mt = "running-game-instances-container";
            (0, v.ready)(function() {
                document.getElementById(Mt) && (0, e.render)(L().createElement(jt, null), document.getElementById(Mt))
            })
        }()
}();
//# sourceMappingURL=https://sourcemaps.rbxcdn.com/a61cdd47a53f0a969a41ce6d2b80fbdf-serverList.bundle.min.js.map

/* Bundle detector */
window.Roblox && window.Roblox.BundleDetector && window.Roblox.BundleDetector.bundleDetected("ServerList");