! function() {
    var n = {
            329: function(e, t, n) {
                "use strict";
                /** @license React v17.0.2
                 * react-jsx-runtime.production.min.js
                 *
                 * Copyright (c) Facebook, Inc. and its affiliates.
                 *
                 * This source code is licensed under the MIT license found in the
                 * LICENSE file in the root directory of this source tree.
                 */
                n(513);
                var r = n(594),
                    l = 60103;
                "function" == typeof Symbol && Symbol.for && (l = (n = Symbol.for)("react.element"), n("react.fragment"));
                var c = r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
                    u = Object.prototype.hasOwnProperty,
                    s = {
                        key: !0,
                        ref: !0,
                        __self: !0,
                        __source: !0
                    };

                function a(e, t, n) {
                    var r, a = {},
                        o = null,
                        i = null;
                    for (r in void 0 !== n && (o = "" + n), void 0 !== t.key && (o = "" + t.key), void 0 !== t.ref && (i = t.ref), t) u.call(t, r) && !s.hasOwnProperty(r) && (a[r] = t[r]);
                    if (e && e.defaultProps)
                        for (r in t = e.defaultProps) void 0 === a[r] && (a[r] = t[r]);
                    return {
                        $$typeof: l,
                        type: e,
                        key: o,
                        ref: i,
                        props: a,
                        _owner: c.current
                    }
                }
                t.jsx = a, t.jsxs = a
            },
            707: function(e, t, n) {
                "use strict";
                e.exports = n(329)
            },
            513: function(e) {
                "use strict";
                /*
                object-assign
                (c) Sindre Sorhus
                @license MIT
                */
                var c = Object.getOwnPropertySymbols,
                    u = Object.prototype.hasOwnProperty,
                    s = Object.prototype.propertyIsEnumerable;
                e.exports = function() {
                    try {
                        if (!Object.assign) return;
                        var e = new String("abc");
                        if (e[5] = "de", "5" === Object.getOwnPropertyNames(e)[0]) return;
                        for (var t = {}, n = 0; n < 10; n++) t["_" + String.fromCharCode(n)] = n;
                        if ("0123456789" !== Object.getOwnPropertyNames(t).map(function(e) {
                                return t[e]
                            }).join("")) return;
                        var r = {};
                        return "abcdefghijklmnopqrst".split("").forEach(function(e) {
                            r[e] = e
                        }), "abcdefghijklmnopqrst" !== Object.keys(Object.assign({}, r)).join("") ? void 0 : 1
                    } catch (e) {
                        return
                    }
                }() ? Object.assign : function(e, t) {
                    for (var n, r, a = function(e) {
                            if (null == e) throw new TypeError("Object.assign cannot be called with null or undefined");
                            return Object(e)
                        }(e), o = 1; o < arguments.length; o++) {
                        for (var i in n = Object(arguments[o])) u.call(n, i) && (a[i] = n[i]);
                        if (c) {
                            r = c(n);
                            for (var l = 0; l < r.length; l++) s.call(n, r[l]) && (a[r[l]] = n[r[l]])
                        }
                    }
                    return a
                }
            },
            500: function(e) {
                e.exports = "https://images.rbxcdn.com/cd61247b93abe1751dd351fa6c253ba1-install-app-qr-code.png"
            },
            594: function(e) {
                "use strict";
                e.exports = React
            }
        },
        r = {};

    function co(e) {
        var t = r[e];
        if (void 0 !== t) return t.exports;
        t = r[e] = {
            exports: {}
        };
        return n[e](t, t.exports, co), t.exports
    }
    co.n = function(e) {
            var t = e && e.__esModule ? function() {
                return e.default
            } : function() {
                return e
            };
            return co.d(t, {
                a: t
            }), t
        }, co.d = function(e, t) {
            for (var n in t) co.o(t, n) && !co.o(e, n) && Object.defineProperty(e, n, {
                enumerable: !0,
                get: t[n]
            })
        }, co.o = function(e, t) {
            return Object.prototype.hasOwnProperty.call(e, t)
        },
        function() {
            "use strict";
            var e = jQuery,
                l = co.n(e),
                N = Roblox,
                r = co.n(N);

            function n(e) {
                var t = new(l().Deferred);
                return N.Hybrid.Game.launchGame(e, function() {
                    t.resolve(e)
                }), t
            }
            var t, a, o = {
                    isJoinAttemptIdEnabled: !1,
                    joinMultiplayerGame: function(e) {
                        var t = !0 === e.isPlayTogetherGame,
                            t = {
                                requestType: N.Hybrid.Game.LAUNCH_MODES.SIMPLE_GAME,
                                placeId: e.placeId.toString(),
                                isPlayTogetherGame: t,
                                browserTrackerId: N.Cookies.getBrowserTrackerId()
                            };
                        return e.joinAttemptId && (t.joinAttemptId = e.joinAttemptId), e.joinAttemptOrigin && (t.joinAttemptOrigin = e.joinAttemptOrigin), n(t)
                    },
                    followPlayerIntoGame: function(e) {
                        var t = {
                            requestType: N.Hybrid.Game.LAUNCH_MODES.FOLLOW_USER,
                            userId: e.userId.toString(),
                            browserTrackerId: N.Cookies.getBrowserTrackerId()
                        };
                        return e.joinAttemptId && (t.joinAttemptId = e.joinAttemptId), e.joinAttemptOrigin && (t.joinAttemptOrigin = e.joinAttemptOrigin), n(t)
                    },
                    joinGameInstance: function(e) {
                        var t = !0 === e.isPlayTogetherGame,
                            t = {
                                requestType: N.Hybrid.Game.LAUNCH_MODES.GAME_INSTANCE,
                                placeId: e.placeId.toString(),
                                instanceId: e.gameId,
                                isPlayTogetherGame: t,
                                browserTrackerId: N.Cookies.getBrowserTrackerId()
                            };
                        return e.joinAttemptId && (t.joinAttemptId = e.joinAttemptId), e.joinAttemptOrigin && (t.joinAttemptOrigin = e.joinAttemptOrigin), n(t)
                    },
                    joinPrivateGame: function(e) {
                        var t = {
                            requestType: N.Hybrid.Game.LAUNCH_MODES.PRIVATE_SERVER,
                            placeId: e.placeId.toString(),
                            accessCode: e.accessCode,
                            browserTrackerId: N.Cookies.getBrowserTrackerId()
                        };
                        return e.joinAttemptId && (t.joinAttemptId = e.joinAttemptId), e.joinAttemptOrigin && (t.joinAttemptOrigin = e.joinAttemptOrigin), n(t)
                    },
                    playTogetherGame: function(e) {
                        var t = {
                            requestType: N.Hybrid.Game.LAUNCH_MODES.SIMPLE_GAME,
                            placeId: e.placeId.toString(),
                            conversationId: e.conversationId.toString(),
                            browserTrackerId: N.Cookies.getBrowserTrackerId()
                        };
                        return e.joinAttemptId && (t.joinAttemptId = e.joinAttemptId), e.joinAttemptOrigin && (t.joinAttemptOrigin = e.joinAttemptOrigin), n(t)
                    }
                },
                i = {
                    modalClassName: "soli-modal",
                    loginUrl: "/login?returnurl=",
                    signupUrl: "/?returnurl=",
                    eventContext: "gameDetails",
                    loginField: "gameLaunch_login",
                    signupField: "gameLaunch_signup"
                };
            l()(document).ready(function() {
                t = new N.TranslationResourceProvider, a = t.getTranslationResource("Feature.GameLaunchGuestMode")
            });
            var c = {
                    restrictGuests: function(e) {
                        var t = new(l().Deferred);
                        return "True" === l()("#PlaceLauncherStatusPanel").data("is-user-logged-in") ? t.resolve(e) : N.Dialog.open({
                            titleText: a.get("Heading.Dialog.SignUpOrLogin"),
                            bodyContent: a.get("Description.Dialog.SignUpOrLogin"),
                            cssClass: i.modalClassName,
                            acceptColor: N.Dialog.green,
                            acceptText: a.get("Action.Dialog.SignUp"),
                            declineText: a.get("Action.Dialog.Login"),
                            onDecline: function() {
                                N.FormEvents && N.FormEvents.SendInteractionClick(i.eventContext, i.loginField);
                                var e = i.loginUrl + encodeURIComponent(window.location.origin + window.location.pathname + window.location.search);
                                window.location.href = N.Endpoints ? N.Endpoints.getAbsoluteUrl(e) : e
                            },
                            onAccept: function() {
                                var e;
                                e = i.signupField, N.FormEvents && N.FormEvents.SendInteractionClick("gameDetails", e), e = i.signupUrl + encodeURIComponent(window.location.origin + window.location.pathname + window.location.search), window.location.href = N.Endpoints ? N.Endpoints.getAbsoluteUrl(e) : e
                            }
                        }), t
                    }
                },
                f = CoreUtilities,
                u = {
                    bars: [],
                    init: function(e, t, n, r) {
                        var a = this.get(e);
                        null == a && (a = {}), a.barID = e, a.innerBarID = t, a.percentageID = n, void 0 === r && (a.percentComplete = 0), this.bars.push(a), this.update(e, a.percentComplete)
                    },
                    get: function(e) {
                        for (var t = 0; t < this.bars.length; t += 1)
                            if (this.bars[t].barID === e) return this.bars[t];
                        return null
                    },
                    dispose: function(e) {
                        for (var t = 0; t < this.bars.length; t += 1) this.bars[t].barID === e && this.bars.splice(t, 1)
                    },
                    update: function(e, t) {
                        var n = this.get(e);
                        n && (1 < t && (t = 1), e = l()("#".concat(e)).width(), e = Math.round(e * t), l()("#".concat(n.innerBarID)).animate({
                            width: e
                        }, 200, "swing"), n.percentageID && 0 < l()("#".concat(n.percentageID)).length && l()("#".concat(n.percentageID)).html("".concat(Math.round(100 * t), "%")), n.percentComplete = t)
                    }
                },
                s = {
                    newValue: "",
                    showVideoPreRoll: !1,
                    videoInitialized: !1,
                    videoStarted: !1,
                    videoCompleted: !1,
                    videoSkipped: !1,
                    videoCancelled: !1,
                    videoErrored: !1,
                    loadingBarMaxTime: 3e4,
                    loadingBarCurrentTime: 0,
                    loadingBarIntervalID: 0,
                    loadingBarID: "videoPrerollLoadingBar",
                    loadingBarInnerID: "videoPrerollLoadingBarCompleted",
                    loadingBarPercentageID: "videoPrerollLoadingPercent",
                    videoDiv: "videoPrerollMainDiv",
                    companionAdDiv: "videoPrerollCompanionAd",
                    contentElement: "contentElement",
                    videoLoadingTimeout: 7e3,
                    videoPlayingTimeout: 23e3,
                    videoLogNote: "",
                    logsEnabled: !1,
                    includedPlaceIds: "",
                    isSwfPreloaderEnabled: !1,
                    isFlashInstalled: !1,
                    isPrerollShownEveryXMinutesEnabled: !1,
                    isAgeTargetingEnabled: !0,
                    isAgeOrSegmentTargetingEnabled: !1,
                    adUnit: "",
                    adTime: 0,
                    placeId: 0,
                    customTargeting: {
                        userAge: "",
                        userAgeOrSegment: "",
                        userGender: "",
                        gameGenres: "",
                        environment: "",
                        adTime: "",
                        PLVU: !1
                    },
                    adsManager: null,
                    adsLoader: null,
                    adDisplayContainer: null,
                    intervalTimer: null,
                    videoContent: null,
                    isCompanionAdRenderedByGoogleTag: !1
                };

            function d() {
                s.adsLoader.contentComplete()
            }

            function p() {
                s.videoContent = document.getElementById(s.contentElement)
            }

            function m() {
                s.adDisplayContainer = new window.google.ima.AdDisplayContainer(document.getElementById(s.videoDiv), s.videoContent)
            }

            function v() {
                var e = "&iu=".concat(s.adUnit),
                    t = "";
                s.isAgeTargetingEnabled && (t += "&Age=".concat(s.customTargeting.userAge)), s.isAgeOrSegmentTargetingEnabled && (t += "&A=".concat(s.customTargeting.userAgeOrSegment));
                t = encodeURIComponent("Env=".concat(s.customTargeting.environment, "&Gender=").concat(s.customTargeting.userGender).concat(t, "&Genres=").concat(s.customTargeting.gameGenres, "&PlaceID=").concat(s.placeId, "&Time=").concat(s.customTargeting.adTime, "&PLVU=").concat(s.customTargeting.PLVU));
                return "".concat("http://pubads.g.doubleclick.net/gampad/ads?impl=s&gdfp_req=1&env=vp&output=xml_vast2&unviewed_position_start=1&url=[referrer_url]&description_url=[description_url]&correlator=[timestamp]").concat("&sz=400x300").concat(e).concat("&ciu_szs=300x250", "&cust_params=").concat(t, "&")
            }

            function h() {
                window.googletag.defineSlot(s.adUnit, [300, 250], s.companionAdDiv).addService(window.googletag.companionAds()), window.googletag.enableServices(), window.googletag.display(s.companionAdDiv)
            }

            function g(e) {
                switch (e.type) {
                    case window.google.ima.AdEvent.Type.LOADED:
                        break;
                    case window.google.ima.AdEvent.Type.STARTED:
                        if (s.videoStarted = !0, s.isCompanionAdRenderedBywindow.googletag) {
                            if (!window.googletag) break;
                            window.googletag.cmd.push(h)
                        } else {
                            var t = e.getAd().getCompanionAds(300, 250);
                            0 < t.length && (t = t[0].getContent(), document.getElementById(s.companionAdDiv).innerHTML = t)
                        }
                        break;
                    case window.google.ima.AdEvent.Type.SKIPPED:
                        s.videoCompleted = !0, s.videoSkipped = !0, s.showVideoPreRoll = !1;
                        break;
                    case window.google.ima.AdEvent.Type.COMPLETE:
                        s.videoStarted && !1 === s.videoCancelled && (s.videoCompleted = !0, s.showVideoPreRoll = !1, "" !== s.newValue && l().cookie("RBXVPR", s.newValue, 180))
                }
            }

            function y() {
                s.videoErrored = !0, s.videoCompleted = !0, s.videoLogNote = "AdError"
            }

            function b(e) {
                s.adsManager = e.getAdsManager(s.videoContent), s.adsManager.addEventListener(window.google.ima.AdErrorEvent.Type.AD_ERROR, y), s.adsManager.addEventListener(window.google.ima.AdEvent.Type.ALL_ADS_COMPLETED, g), s.adsManager.addEventListener(window.google.ima.AdEvent.Type.LOADED, g), s.adsManager.addEventListener(window.google.ima.AdEvent.Type.STARTED, g), s.adsManager.addEventListener(window.google.ima.AdEvent.Type.SKIPPED, g), s.adsManager.addEventListener(window.google.ima.AdEvent.Type.COMPLETE, g);
                try {
                    s.adsManager.init(400, 300, window.google.ima.ViewMode.NORMAL), s.adsManager.start()
                } catch (e) {
                    y()
                }
            }

            function w() {
                window.google.ima.settings.setVpaidAllowed(!0), p(), m(), s.adDisplayContainer.initialize(), s.adsLoader = new window.google.ima.AdsLoader(s.adDisplayContainer), s.adsLoader.addEventListener(window.google.ima.AdsManagerLoadedEvent.Type.ADS_MANAGER_LOADED, b, !1), s.adsLoader.addEventListener(window.google.ima.AdErrorEvent.Type.AD_ERROR, y, !1), s.videoContent.addEventListener("ended", d);
                var e = new window.google.ima.AdsRequest,
                    t = v();
                e.adTagUrl = t, e.linearAdSlotWidth = 400, e.linearAdSlotHeight = 300, e.nonLinearAdSlotWidth = 400, e.nonLinearAdSlotHeight = 300, s.adsLoader.requestAds(e)
            }

            function P() {
                var t = !1;
                try {
                    new window.ActiveXObject("ShockwaveFlash.ShockwaveFlash") && (t = !0)
                } catch (e) {
                    navigator.mimeTypes && void 0 !== navigator.mimeTypes["application/x-shockwave-flash"] && navigator.mimeTypes["application/x-shockwave-flash"].enabledPlugin && (t = !0)
                }
                return t
            }

            function E() {
                if (s.logsEnabled) {
                    var e = "";
                    if (s.videoCompleted) e = "Complete", "" === s.videoLogNote && (s.videoLogNote = "NoTimeout"), s.logsEnabled = !1;
                    else if (s.videoCancelled) e = "Cancelled", s.videoLogNote = window.RobloxLaunch.state;
                    else {
                        if (!1 !== s.videoInitialized || "" === s.videoLogNote) return;
                        e = "Failed", s.logsEnabled = !1
                    }
                    N.GaEventSettings.gaDFPPreRollEnabled && window.GoogleAnalyticsEvents && window.GoogleAnalyticsEvents.FireEvent(["DFPPreRoll", e, s.videoLogNote])
                }
            }

            function C() {
                return !!s.videoInitialized && (s.videoInitialized && !s.videoStarted && s.loadingBarCurrentTime > s.videoLoadingTimeout && (s.videoCompleted = !0, s.videoLogNote = "LoadingTimeout"), s.videoStarted && !s.videoCompleted && s.loadingBarCurrentTime > s.videoPlayingTimeout && (s.videoCompleted = !0, s.videoLogNote = "PlayingTimeout"), !s.videoCompleted)
            }

            function I() {
                var e = encodeURIComponent(v()),
                    e = "adTagUrl=".concat(e);
                l().ajax({
                    url: "/game/preloader",
                    data: {
                        url: e
                    },
                    method: "GET",
                    crossDomain: !0,
                    xhrFields: {
                        withCredentials: !0
                    }
                }).success(function(e) {
                    l()("#videoPrerollMainDiv").html(e), s.videoErrored || (s.videoStarted = !0)
                })
            }

            function S() {
                l().ajax({
                    url: "/game/updateprerollcount",
                    method: "GET",
                    crossDomain: !0,
                    xhrFields: {
                        withCredentials: !0
                    }
                })
            }
            Object.assign(s, {
                contentEndedListener: d,
                createVideoContent: p,
                createAdDisplayContainer: m,
                constructUrl: v,
                renderCompanionAd: h,
                onAdEvent: g,
                onAdError: y,
                onAdsManagerLoaded: b,
                requestAds: w,
                checkFlashEnabled: P,
                checkEligibility: function() {
                    s.showVideoPreRoll && (P() && (s.isFlashInstalled = !0), "True" === l()("#PlaceLauncherStatusPanel").data("is-protocol-handler-launch-enabled") || N.Client.IsRobloxInstalled() ? void 0 === window.google || void 0 === window.google.ima ? (s.videoLogNote = "NoGoogle", s.showVideoPreRoll = !1) : N.Client.isIDE() ? (s.videoLogNote = "RobloxStudio", s.showVideoPreRoll = !1) : N.Client.isRobloxBrowser() ? (s.videoLogNote = "RobloxPlayer", s.showVideoPreRoll = !1) : (window.chrome || window.safari) && "#chromeInstall" === window.location.hash && (s.showVideoPreRoll = !1) : s.showVideoPreRoll = !1)
                },
                logVideoPreRoll: E,
                isPlaying: C,
                correctIEModalPosition: function(e) {
                    var t, n;
                    e.container.innerHeight() <= 30 && (t = l()("#videoPrerollPanel"), n = -Math.floor(t.innerHeight() / 2), t.css({
                        position: "relative",
                        top: "".concat(n, "px")
                    }), e.container.find(".VprCloseButton").css({
                        top: "".concat(n - 10, "px"),
                        "z-index": "1003"
                    }))
                },
                renderImaPreloader: I,
                updatePrerollCount: S,
                start: function() {
                    0 === s.placeId && "undefined" != typeof play_placeId && (s.placeId = play_placeId), s.videoInitialized = !0, s.videoStarted = !1, s.videoCancelled = !1, s.videoCompleted = !1, s.videoSkipped = !1, s.loadingBarCurrentTime = 0, s.videoLogNote = "", u.init(s.loadingBarID, s.loadingBarInnerID, s.loadingBarPercentageID), s.loadingBarIntervalID = setInterval(function() {
                        s.loadingBarCurrentTime += 1e3, u.update(s.loadingBarID, s.loadingBarCurrentTime / s.loadingBarMaxTime)
                    }, 1e3), (s.isSwfPreloaderEnabled && s.isFlashInstalled ? I : w)()
                },
                cancel: function() {
                    s.videoCancelled = !0, l().modal.close()
                },
                skip: function() {
                    s.videoCompleted = !0, s.videoSkipped = !0, s.showVideoPreRoll = !1
                },
                close: function() {
                    window.MadStatus && window.MadStatus.running && window.MadStatus.stop(""), window.RobloxLaunch.launcher && (window.RobloxLaunch.launcher._cancelled = !0), clearInterval(s.loadingBarIntervalID), u.dispose(s.loadingBarID), C() && (s.videoCancelled = !0), l().modal.close(), E(), s.isPrerollShownEveryXMinutesEnabled && s.videoInitialized && s.videoCompleted && S()
                }
            });
            var x = s,
                A = {
                    waitForPreroll: function(e) {
                        var t, n, r = new(l().Deferred),
                            a = x;
                        return a.placeId = void 0 !== e.placeId ? e.placeId : 0, a.showVideoPreRoll ? (t = {
                            escClose: !0,
                            opacity: 80,
                            overlayCss: {
                                backgroundColor: "#000"
                            },
                            zIndex: 1031,
                            onShow: function(e) {
                                a.correctIEModalPosition(e), a.start(), l()("#prerollClose").hide(), l()("#prerollClose").delay(1e3 * a.adTime).show(300)
                            },
                            onClose: function() {
                                a.close()
                            },
                            closeHTML: '<a href="#" id="prerollClose" class="ImageButton closeBtnCircle_35h ABCloseCircle VprCloseButton"></a>'
                        }, l()("#videoPrerollPanel").modal(t), n = setInterval(function() {
                            a.isPlaying() || (l().modal.close(), clearInterval(n), a.videoCancelled ? r.reject(e) : r.resolve(e))
                        }, 200)) : (r.resolve(e), a.logVideoPreRoll()), r
                    }
                };

            function T(e, t, n, r, a, o, i) {
                try {
                    var l = e[o](i),
                        c = l.value
                } catch (e) {
                    return void n(e)
                }
                l.done ? t(c) : Promise.resolve(c).then(r, a)
            }

            function O(t, e) {
                var n, r = Object.keys(t);
                return Object.getOwnPropertySymbols && (n = Object.getOwnPropertySymbols(t), e && (n = n.filter(function(e) {
                    return Object.getOwnPropertyDescriptor(t, e).enumerable
                })), r.push.apply(r, n)), r
            }

            function k(r) {
                for (var e = 1; e < arguments.length; e++) {
                    var a = null != arguments[e] ? arguments[e] : {};
                    e % 2 ? O(Object(a), !0).forEach(function(e) {
                        var t, n;
                        t = r, e = a[n = e], n in t ? Object.defineProperty(t, n, {
                            value: e,
                            enumerable: !0,
                            configurable: !0,
                            writable: !0
                        }) : t[n] = e
                    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(r, Object.getOwnPropertyDescriptors(a)) : O(Object(a)).forEach(function(e) {
                        Object.defineProperty(r, e, Object.getOwnPropertyDescriptor(a, e))
                    })
                }
                return r
            }
            var R, U = {
                gameLaunchInterface: null,
                gameLaunchLogger: null,
                initialized: new Promise(function(e, t) {
                    R = e
                })
            };

            function L(e, t, n) {
                t = k(k({}, e), {}, {
                    joinAttemptId: null != t ? t : f.uuidService.generateRandomUuid()
                });
                return n && (t.joinAttemptOrigin = n), t
            }

            function D(e, t, n) {
                var r, a;
                3 < arguments.length && void 0 !== arguments[3] && arguments[3] && (4 < arguments.length && void 0 !== arguments[4] && arguments[4]) && (r = e, a = {
                    url: "".concat(N.EnvironmentUrls.gameJoinApi, "/v1/team-create-preemptive"),
                    withCredentials: !0,
                    headers: {
                        Accept: "application/json",
                        "Content-Type": "application/json"
                    }
                }, r = {
                    gameJoinAttemptId: f.uuidService.generateRandomUuid(),
                    placeId: r
                }, f.httpService.post(a, r)), U.gameLaunchInterface.editGameInStudio(e, t, n)
            }

            function j(e) {
                var t = 2 < arguments.length ? arguments[2] : void 0,
                    n = 3 < arguments.length ? arguments[3] : void 0,
                    r = 4 < arguments.length ? arguments[4] : void 0,
                    a = 5 < arguments.length ? arguments[5] : void 0,
                    o = 6 < arguments.length ? arguments[6] : void 0,
                    o = {
                        placeId: e,
                        launchData: null == a ? void 0 : a.launchData,
                        eventId: null == a ? void 0 : a.eventId,
                        isPlayTogetherGame: !0 === t,
                        referredByPlayerId: o
                    };
                return U.gameLaunchInterface.isJoinAttemptIdEnabled && (o = L(o, n, r)), c.restrictGuests(o).then(A.waitForPreroll).then(U.gameLaunchInterface.joinMultiplayerGame)
            }

            function B() {
                var l;
                return l = regeneratorRuntime.mark(function e(t, n, r, a, o) {
                    var i;
                    return regeneratorRuntime.wrap(function(e) {
                        for (;;) switch (e.prev = e.next) {
                            case 0:
                                return e.next = 2, U.initialized;
                            case 2:
                                return i = {
                                    placeId: t,
                                    accessCode: n,
                                    linkCode: r
                                }, U.gameLaunchInterface.isJoinAttemptIdEnabled && (i = L(i, a, o)), i = A.waitForPreroll(i).then(U.gameLaunchInterface.joinPrivateGame), e.abrupt("return", i);
                            case 6:
                            case "end":
                                return e.stop()
                        }
                    }, e)
                }), (B = function() {
                    var e = this,
                        i = arguments;
                    return new Promise(function(t, n) {
                        var r = l.apply(e, i);

                        function a(e) {
                            T(r, t, n, a, o, "next", e)
                        }

                        function o(e) {
                            T(r, t, n, a, o, "throw", e)
                        }
                        a(void 0)
                    })
                }).apply(this, arguments)
            }
            l().fn.bindGameLaunch = function() {
                return this.find(".VisitButtonPlayGLI").click(function() {
                    var e = l()(this);
                    j(e.attr("placeid"), e.data("is-membership-level-ok"))
                }), this.find(".VisitButtonEditGLI").click(function() {
                    var e = l()(this);
                    D(e.attr("placeid"), e.data("universeid"), !!e.data("allowupload"))
                }), this
            }, l()(document).ready(function() {
                l()("body").bindGameLaunch()
            }), Object.assign(U, {
                authenticationChecker: c,
                prerollPlayer: A,
                joinMultiplayerGame: j,
                openStudio: function() {
                    U.gameLaunchInterface.openStudio()
                },
                openPluginInStudio: function(e) {
                    U.gameLaunchInterface.openPluginInStudio(e)
                },
                editGameInStudio: D,
                followPlayerIntoGame: function(e, t, n) {
                    return e = {
                        userId: e
                    }, U.gameLaunchInterface.isJoinAttemptIdEnabled && (e = L(e, t, n)), c.restrictGuests(e).then(A.waitForPreroll).then(U.gameLaunchInterface.followPlayerIntoGame)
                },
                joinGameInstance: function(e, t, n, r, a, o, i) {
                    return i = {
                        placeId: e,
                        gameId: t,
                        isPlayTogetherGame: !0 === r,
                        referredByPlayerId: i
                    }, U.gameLaunchInterface.isJoinAttemptIdEnabled && (i = L(i, a, o)), c.restrictGuests(i).then(A.waitForPreroll).then(U.gameLaunchInterface.joinGameInstance)
                },
                joinPrivateGame: function(e, t, n, r, a) {
                    return B.apply(this, arguments)
                },
                playTogetherGame: function(e, t, n, r) {
                    return t = {
                        placeId: e,
                        conversationId: t
                    }, U.gameLaunchInterface.isJoinAttemptIdEnabled && (t = L(t, n, r)), c.restrictGuests(t).then(A.waitForPreroll).then(U.gameLaunchInterface.playTogetherGame)
                },
                setGameLaunchInterface: function(e) {
                    U.gameLaunchInterface = e, R()
                },
                setGameLaunchLogger: function(e) {
                    U.gameLaunchLogger = e
                },
                tryAssetInStudio: function(e) {
                    U.gameLaunchInterface.tryAssetInStudio(e)
                },
                isJoinAttemptIdEnabled: function() {
                    var e;
                    return null === (e = U.gameLaunchInterface) || void 0 === e ? void 0 : e.isJoinAttemptIdEnabled
                },
                startClientAttemptedEvent: "startClientAttempted",
                startClientFailedEvent: "startClientFailed",
                startClientSucceededEvent: "startClientSucceeded",
                beginInstallEvent: "beginInstall",
                successfulInstallEvent: "successfulInstall",
                manualDownloadEvent: "manualDownload"
            });
            var M = U,
                G = {
                    lastContext: "unknown",
                    contextCategories: {
                        joinUser: "JoinUser"
                    }
                };

            function F(e, t, n) {
                var r, a = l()("#PlaceLauncherStatusPanel");
                return {
                    lType: a && a.data("is-protocol-handler-launch-enabled") && "true" === a.data("is-protocol-handler-launch-enabled").toLowerCase() ? "protocol" : "plugin",
                    pid: e,
                    refuid: t,
                    pg: (r = window.location.pathname.toLowerCase(), e = "profile", -1 !== (t = r.lastIndexOf(e)) && r.length === t + e.length ? e : 0 === r.indexOf("/develop") ? "develop" : 0 === r.indexOf("/discover") ? "games" : "gameDetail"),
                    joinAttemptId: "True" === (null !== (a = a.data("is-join-attempt-id-enabled")) && void 0 !== a ? a : "False") ? n : void 0
                }
            }

            function _(e, t, n, r, a) {
                null !== t && "" !== t && "unknown" !== t && (G.lastContext = t), N.EventStream.SendEvent(e, G.lastContext, F(n, r, a))
            }
            Object.assign(G, {
                SendGamePlayIntent: function(e, t, n, r) {
                    _("gamePlayIntent", e, t, n, r), l()(document).trigger("playButton:gamePlayIntent")
                },
                SendDevelopIntent: function(e, t) {
                    _("developIntent", e, t)
                },
                SendInstallBegin: function(e, t) {
                    _("installBegin", e, t)
                },
                SendInstallSuccess: function(e, t) {
                    _("installSuccess", e, t)
                },
                SendClientStartAttempt: function(e, t) {
                    _("clientStartAttempt", e, t)
                },
                SendClientStartSuccessWeb: function(e, t) {
                    _("clientStartSuccessWeb", e, t)
                },
                SendManualDownloadClick: function(e, t) {
                    _("manualDownload", e, t)
                }
            });
            var V = G,
                W = {
                    logToConsoleEnabled: !1,
                    logToGAEnabled: !0,
                    logToEphemeralCountersEnabled: !0
                },
                H = {};
            H[M.startClientAttemptedEvent] = ["GameLaunchAttempt_<os>", "GameLaunchAttempt_<os>_<launchmethod>"], H[M.startClientSucceededEvent] = ["GameLaunchSuccessWeb_<os>", "GameLaunchSuccessWeb_<os>_<launchmethod>"];
            var z = {};
            N.GaEventSettings.gaLaunchAttemptAndLaunchSuccessEnabled && (z[M.startClientAttemptedEvent] = "Launch Attempt", z[M.startClientSucceededEvent] = "Launch Success"), z[M.beginInstallEvent] = "Install Begin", z[M.successfulInstallEvent] = "Install Success", z[M.manualDownloadEvent] = "Manual Download";
            var q = {};

            function J(e) {
                W.logToConsoleEnabled && console.log(e)
            }

            function X(e, t) {
                var n;
                W.logToEphemeralCountersEnabled && ("Windows" === (n = l()("#PlaceLauncherStatusPanel").data("os-name")) && (n = "Win32"), e = (e = e.replace("<os>", n)).replace("<launchmethod>", t), null !== (t = window.EventTracker) && void 0 !== t && t.fireEvent && window.EventTracker.fireEvent(e))
            }

            function K(e, t, n, r) {
                void 0 !== window.GoogleAnalyticsEvents && W.logToGAEnabled && window.GoogleAnalyticsEvents.FireEvent && window.GoogleAnalyticsEvents.FireEvent([e, t, n, r])
            }

            function Y(e, n) {
                J("".concat(e.type, ": ").concat(JSON.stringify(n))), H[e.type] && l().each(H[e.type], function(e, t) {
                    X(t, n.launchMethod)
                }), z[e.type] && K(n.launchMethod, z[e.type], n.params.launchMode, 0), "True" === l()("#PlaceLauncherStatusPanel").data("event-stream-for-protocol-enabled") && q[e.type] && q[e.type](null, n.params.placeId)
            }
            q[M.startClientAttemptedEvent] = V.SendClientStartAttempt, q[M.startClientSucceededEvent] = V.SendClientStartSuccessWeb, q[M.beginInstallEvent] = V.SendInstallBegin, q[M.successfulInstallEvent] = V.SendInstallSuccess, q[M.manualDownloadEvent] = V.SendManualDownloadClick, Object.assign(W, {
                logToConsole: J,
                logToEphemeralCounters: X,
                logToGA: K
            }), l()(document).ready(function() {
                var e = [M.startClientAttemptedEvent, M.startClientFailedEvent, M.startClientSucceededEvent, M.beginInstallEvent, M.successfulInstallEvent, M.manualDownloadEvent];
                l()(M).on(e.join(" "), Y)
            });
            var Q = W,
                Z = function() {
                    var e = "click";
                    l()("body").on(e, ".VisitButtonPlay, .VisitButtonPlayGLI", function() {
                        var e, t, n = l()(this);
                        (n.hasClass("VisitButtonPlay") || n.hasClass("VisitButtonPlayGLI")) && (e = "PlayButton"), e && (t = l()(this).attr("placeid"), n = N.UrlParser ? N.UrlParser.getParameterValueByName("rbxp") : null, V.SendGamePlayIntent(e, t, n))
                    }), l()("body").on(e, ".VisitButtonEdit, .VisitButtonEditGLI", function() {
                        var e = l()(this).attr("placeid");
                        V.SendDevelopIntent("Edit", e)
                    }), l()("#rbx-running-games").on(e, ".rbx-game-server-item .rbx-game-server-join", function() {
                        var e = l()(this).data("placeid");
                        e && V.SendGamePlayIntent("JoinInstance", e)
                    }), l()("#rbx-friends-running-games").on(e, ".rbx-friends-game-server-item .rbx-friends-game-server-join", function() {
                        var e = l()(this).data("placeid");
                        e && V.SendGamePlayIntent("JoinInstance", e)
                    }), l()("#game-instances").on(e, "#rbx-vip-servers .rbx-vip-server-item .rbx-vip-server-join", function() {
                        var e = l()(this).data("placeid");
                        e && V.SendGamePlayIntent("PrivateServer", e)
                    }), l()("#build-page").on(e, ".roblox-edit-button", function() {
                        var e = l()(this).parents("table.item-table"),
                            e = e.data("rootplace-id") || e.data("item-id");
                        e && V.SendDevelopIntent("Edit", e)
                    })
                },
                $ = co(594),
                ee = co.n($),
                te = ReactDOM,
                ne = co.n(te),
                re = ReactUtilities,
                ae = "token",
                oe = "deeplink",
                ie = ["/games/{placeId}/{placeName}", "/share-links?code={linkId}&type=ExperienceInvite"].map(function(e) {
                    return new RegExp(e.replace(/\{.*?\}/g, "([^/]+)"))
                }),
                le = ["/share-links"],
                ce = ["ExperienceAffiliate"],
                ue = function(e) {
                    try {
                        var t = new URL(e).searchParams.get("referralUrl");
                        if (!t) return null;
                        var n = new URL(decodeURIComponent(t));
                        return (t = n, le.includes(t.pathname) && ce.includes(null !== (t = t.searchParams.get("type")) && void 0 !== t ? t : "")) ? n.href : null
                    } catch (e) {
                        return null
                    }
                },
                se = function(e, t, n) {
                    var r = {
                        link_url: t,
                        group: oe,
                        action: "create-token-attempt",
                        status_code: n,
                        token: null != e ? e : ""
                    };
                    try {
                        N.EventStream.SendEventWithTarget("tokenAction", "EdpDownloadRobloxInstaller", r, N.EventStream.TargetTypes.WWW)
                    } catch (e) {}
                },
                de = function(e, i, l, c) {
                    return new(l = l || Promise)(function(n, t) {
                        function r(e) {
                            try {
                                o(c.next(e))
                            } catch (e) {
                                t(e)
                            }
                        }

                        function a(e) {
                            try {
                                o(c.throw(e))
                            } catch (e) {
                                t(e)
                            }
                        }

                        function o(e) {
                            var t;
                            e.done ? n(e.value) : ((t = e.value) instanceof l ? t : new l(function(e) {
                                e(t)
                            })).then(r, a)
                        }
                        o((c = c.apply(e, i || [])).next())
                    })
                },
                pe = function(n, r) {
                    var a, o, i, l = {
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
                                for (; l;) try {
                                    if (a = 1, o && (i = 2 & t[0] ? o.return : t[0] ? o.throw || ((i = o.return) && i.call(o), 0) : o.next) && !(i = i.call(o, t[1])).done) return i;
                                    switch (o = 0, i && (t = [2 & t[0], i.value]), t[0]) {
                                        case 0:
                                        case 1:
                                            i = t;
                                            break;
                                        case 4:
                                            return l.label++, {
                                                value: t[1],
                                                done: !1
                                            };
                                        case 5:
                                            l.label++, o = t[1], t = [0];
                                            continue;
                                        case 7:
                                            t = l.ops.pop(), l.trys.pop();
                                            continue;
                                        default:
                                            if (!(i = 0 < (i = l.trys).length && i[i.length - 1]) && (6 === t[0] || 2 === t[0])) {
                                                l = 0;
                                                continue
                                            }
                                            if (3 === t[0] && (!i || t[1] > i[0] && t[1] < i[3])) {
                                                l.label = t[1];
                                                break
                                            }
                                            if (6 === t[0] && l.label < i[1]) {
                                                l.label = i[1], i = t;
                                                break
                                            }
                                            if (i && l.label < i[2]) {
                                                l.label = i[2], l.ops.push(t);
                                                break
                                            }
                                            i[2] && l.ops.pop(), l.trys.pop();
                                            continue
                                    }
                                    t = r.call(n, l)
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
                fe = N.EnvironmentUrls.apiGatewayUrl + "/deferred-deep-link/token-api",
                me = function(r) {
                    return de(void 0, void 0, Promise, function() {
                        var t, n;
                        return pe(this, function(e) {
                            switch (e.label) {
                                case 0:
                                    n = {
                                        linkId: r,
                                        group: oe
                                    }, t = {
                                        withCredentials: !0,
                                        url: fe + "/create-token"
                                    }, e.label = 1;
                                case 1:
                                    return e.trys.push([1, 3, , 4]), [4, f.httpService.post(t, n)];
                                case 2:
                                    return t = e.sent(), n = null !== (n = t.data.token) && void 0 !== n ? n : null, se(n, r, t.status), [2, n];
                                case 3:
                                    return e.sent(), [2, null];
                                case 4:
                                    return [2]
                            }
                        })
                    })
                },
                ve = function(e, i, l, c) {
                    return new(l = l || Promise)(function(n, t) {
                        function r(e) {
                            try {
                                o(c.next(e))
                            } catch (e) {
                                t(e)
                            }
                        }

                        function a(e) {
                            try {
                                o(c.throw(e))
                            } catch (e) {
                                t(e)
                            }
                        }

                        function o(e) {
                            var t;
                            e.done ? n(e.value) : ((t = e.value) instanceof l ? t : new l(function(e) {
                                e(t)
                            })).then(r, a)
                        }
                        o((c = c.apply(e, i || [])).next())
                    })
                },
                he = function(n, r) {
                    var a, o, i, l = {
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
                                for (; l;) try {
                                    if (a = 1, o && (i = 2 & t[0] ? o.return : t[0] ? o.throw || ((i = o.return) && i.call(o), 0) : o.next) && !(i = i.call(o, t[1])).done) return i;
                                    switch (o = 0, i && (t = [2 & t[0], i.value]), t[0]) {
                                        case 0:
                                        case 1:
                                            i = t;
                                            break;
                                        case 4:
                                            return l.label++, {
                                                value: t[1],
                                                done: !1
                                            };
                                        case 5:
                                            l.label++, o = t[1], t = [0];
                                            continue;
                                        case 7:
                                            t = l.ops.pop(), l.trys.pop();
                                            continue;
                                        default:
                                            if (!(i = 0 < (i = l.trys).length && i[i.length - 1]) && (6 === t[0] || 2 === t[0])) {
                                                l = 0;
                                                continue
                                            }
                                            if (3 === t[0] && (!i || t[1] > i[0] && t[1] < i[3])) {
                                                l.label = t[1];
                                                break
                                            }
                                            if (6 === t[0] && l.label < i[1]) {
                                                l.label = i[1], i = t;
                                                break
                                            }
                                            if (i && l.label < i[2]) {
                                                l.label = i[2], l.ops.push(t);
                                                break
                                            }
                                            i[2] && l.ops.pop(), l.trys.pop();
                                            continue
                                    }
                                    t = r.call(n, l)
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
                };

            function ge(r) {
                return ve(this, void 0, Promise, function() {
                    var t, n;
                    return he(this, function(e) {
                        switch (e.label) {
                            case 0:
                                return t = "", (n = function(e) {
                                    var t = ue(e);
                                    if (t) return t;
                                    var n = new URL(e);
                                    return n.search = "", n.hash = "", ie.some(function(e) {
                                        return e.test(n.pathname)
                                    }) ? n.toString() : null
                                }(r)) ? [4, me(n)] : [2, t];
                            case 1:
                                return (n = e.sent()) && (t = "?" + ae + "=" + n), [2, t]
                        }
                    })
                })
            }
            var ye = WebBlox,
                be = "undefined" != typeof window ? window.navigator.userAgent : "",
                we = /Mac OS X/i.test(be),
                Pe = /Windows NT/i.test(be),
                Ee = (/Linux/i.test(be) && /Android/i.test(be), /Android/i.test(be)),
                Ce = /iPhone|iPad|iPod/i.test(be);

            function Ie(e) {
                var t = void 0 === (a = e.alt) ? "App Icon" : a,
                    n = void 0 === (r = e.className) ? "" : r,
                    r = void 0 === (a = e.title) ? "" : a,
                    e = void 0 === (a = e.style) ? {} : a,
                    a = we ? "mac" : Pe ? "windows" : Ce ? "ios" : Ee ? "android" : "windows";
                return $.createElement("div", {
                    className: "app-icon-bluebg app-icon-".concat(a, " ").concat(n),
                    role: "img",
                    "aria-label": t,
                    title: r || t,
                    style: e
                })
            }

            function Se(e) {
                return (Se = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                    return typeof e
                } : function(e) {
                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                })(e)
            }
            var xe = function() {
                return (xe = Object.assign || function(e) {
                    for (var t, n = 1, r = arguments.length; n < r; n++)
                        for (var a in t = arguments[n]) Object.prototype.hasOwnProperty.call(t, a) && (e[a] = t[a]);
                    return e
                }).apply(this, arguments)
            };

            function Ae(e, t) {
                var n = {};
                for (a in e) Object.prototype.hasOwnProperty.call(e, a) && t.indexOf(a) < 0 && (n[a] = e[a]);
                if (null != e && "function" == typeof Object.getOwnPropertySymbols)
                    for (var r = 0, a = Object.getOwnPropertySymbols(e); r < a.length; r++) t.indexOf(a[r]) < 0 && Object.prototype.propertyIsEnumerable.call(e, a[r]) && (n[a[r]] = e[a[r]]);
                return n
            }

            function Te() {
                for (var e, t, n = 0, r = "", a = arguments.length; n < a; n++)(e = arguments[n]) && (t = function e(t) {
                    var n, r = "";
                    if ("string" == typeof t || "number" == typeof t) r += t;
                    else if ("object" == Se(t))
                        if (Array.isArray(t))
                            for (var a = t.length, o = 0; o < a; o++) t[o] && (n = e(t[o])) && (r && (r += " "), r += n);
                        else
                            for (n in t) t[n] && (r && (r += " "), r += n);
                    return r
                }(e)) && (r && (r += " "), r += t);
                return r
            }

            function Oe(e, t) {
                void 0 === t && (t = {});
                var n, r = t.insertAt;
                e && "undefined" != typeof document && (n = document.head || document.getElementsByTagName("head")[0], (t = document.createElement("style")).type = "text/css", "top" === r && n.firstChild ? n.insertBefore(t, n.firstChild) : n.appendChild(t), t.styleSheet ? t.styleSheet.cssText = e : t.appendChild(document.createTextNode(e)))
            }

            function ke(e) {
                var t = e.width,
                    e = e.height;
                return ee().createElement("div", {
                    className: "foundation-web-loading-spinner"
                }, ee().createElement("svg", {
                    width: t,
                    height: e,
                    viewBox: "0 0 20 20",
                    fill: "none",
                    xmlns: "http://www.w3.org/2000/svg"
                }, ee().createElement("path", {
                    fillRule: "evenodd",
                    clipRule: "evenodd",
                    d: "M10 2.75C8.56609 2.75 7.16438 3.1752 5.97212 3.97185C4.77986 4.76849 3.85061 5.90078 3.30188 7.22554C2.75314 8.55031 2.60957 10.008 2.88931 11.4144C3.16905 12.8208 3.85955 14.1126 4.87348 15.1265C5.88741 16.1405 7.17924 16.831 8.5856 17.1107C9.99196 17.3904 11.4497 17.2469 12.7745 16.6981C14.0992 16.1494 15.2315 15.2201 16.0282 14.0279C16.8248 12.8356 17.25 11.4339 17.25 10C17.25 9.58579 17.5858 9.25 18 9.25C18.4142 9.25 18.75 9.58579 18.75 10C18.75 11.7306 18.2368 13.4223 17.2754 14.8612C16.3139 16.3002 14.9473 17.4217 13.3485 18.0839C11.7496 18.7462 9.9903 18.9195 8.29296 18.5819C6.59563 18.2443 5.03653 17.4109 3.81282 16.1872C2.58911 14.9635 1.75575 13.4044 1.41813 11.707C1.08051 10.0097 1.25379 8.25037 1.91606 6.65152C2.57832 5.05267 3.69983 3.6861 5.13876 2.72464C6.57769 1.76318 8.26942 1.25 10 1.25C10.4142 1.25 10.75 1.58579 10.75 2C10.75 2.41421 10.4142 2.75 10 2.75Z"
                })))
            }

            function Re(e) {
                var t = e.children,
                    n = e.className,
                    r = e.as,
                    a = void 0 !== (i = e.isDisabled) && i,
                    o = void 0 !== (c = e.isLoading) && c,
                    i = void 0 === (l = e.size) ? "Large" : l,
                    l = void 0 === (c = e.variant) ? "Emphasis" : c,
                    c = Ae(e, ["children", "className", "as", "isDisabled", "isLoading", "size", "variant"]),
                    e = null != r ? r : "button",
                    r = c.href,
                    c = Ae(c, ["href"]);
                return ee().createElement(e, xe({
                    type: "button",
                    disabled: a,
                    "aria-disabled": a,
                    href: a ? void 0 : r
                }, c, {
                    className: Te("foundation-web-button", "foundation-web-interactable", "stroke-none", "flex", "items-center", "justify-center", Ne[i], De[i], je[i], Be[i], (a ? Ge : Me)[l], (a ? _e : Fe)[l], n)
                }), ee().createElement("span", {
                    className: Te("foundation-web-button-content relative", o && "isLoading")
                }, t), o && ee().createElement("div", {
                    className: "foundation-web-loading-spinner-wrapper"
                }, ee().createElement(ke, {
                    width: Le[i],
                    height: Le[i]
                })))
            }

            function Ue(e) {
                void 0 === e && (e = ":r");
                var t = (0, $.useRef)();
                return t.current || (We += 1, t.current = "".concat(e).concat(We)), t.current
            }
            Oe('.foundation-web-interactable{overflow:hidden;position:relative}.foundation-web-interactable:before{bottom:0;content:"";left:0;position:absolute;right:0;top:0;transition:background-color var(--time-100) var(--ease-linear)}.foundation-web-interactable:focus-visible{outline:var(--stroke-thicker) solid var(--color-selection-start)}@media (hover:hover){.foundation-web-interactable:not(:disabled):hover:before{background-color:var(--color-state-hover)}}.foundation-web-interactable:not(:disabled):active:before{background-color:var(--color-state-press)}'), Oe("@keyframes rotation{0%{transform:rotate(0deg)}to{transform:rotate(359deg)}}.foundation-web-loading-spinner{animation:rotation 1s linear infinite normal;display:flex}.foundation-web-loading-spinner svg path{fill:var(--color-action-standard-foreground)}"), Oe(".foundation-web-button{-webkit-user-select:none;-moz-user-select:none;user-select:none}.foundation-web-button[disabled]{opacity:.5}.foundation-web-button.content-action-emphasis{--button-spinner-fill:var(--color-action-emphasis-foreground)}.foundation-web-button.content-action-standard{--button-spinner-fill:var(--color-action-standard-foreground)}.foundation-web-button.content-action-soft-emphasis{--button-spinner-fill:var(--color-action-soft-emphasis-foreground)}.foundation-web-button.content-action-alert{--button-spinner-fill:var(--color-action-alert-foreground)}.foundation-web-button .foundation-web-loading-spinner svg path{fill:var(--button-spinner-fill)}.foundation-web-button .foundation-web-button-content.isLoading{opacity:0}.foundation-web-button .foundation-web-loading-spinner-wrapper{left:50%;position:absolute;top:50%;transform:translate(-50%,-50%)}");
            var Le = {
                    Large: 24,
                    Medium: 20,
                    Small: 16,
                    XSmall: 12
                },
                Ne = {
                    Large: "radius-medium",
                    Medium: "radius-medium",
                    Small: "radius-medium",
                    XSmall: "radius-small"
                },
                De = {
                    Large: "text-label-large",
                    Medium: "text-label-medium",
                    Small: "text-label-small",
                    XSmall: "text-label-small"
                },
                je = {
                    Large: "height-1200",
                    Medium: "height-1000",
                    Small: "height-800",
                    XSmall: "height-600"
                },
                Be = {
                    Large: "padding-x-large",
                    Medium: "padding-x-medium",
                    Small: "padding-x-small",
                    XSmall: "padding-x-small"
                },
                Me = {
                    Emphasis: "bg-action-emphasis",
                    Standard: "bg-action-standard",
                    SoftEmphasis: "bg-action-soft-emphasis",
                    ActionUtility: "bg-action-subtle",
                    Alert: "bg-action-alert"
                },
                Ge = {
                    Emphasis: "bg-action-standard",
                    Standard: "bg-action-standard",
                    SoftEmphasis: "bg-action-standard",
                    ActionUtility: "bg-action-subtle",
                    Alert: "bg-action-standard"
                },
                Fe = {
                    Emphasis: "content-action-emphasis",
                    Standard: "content-action-standard",
                    SoftEmphasis: "content-action-soft-emphasis",
                    ActionUtility: "content-action-standard",
                    Alert: "content-action-alert"
                },
                _e = {
                    Emphasis: "content-action-standard",
                    Standard: "content-action-standard",
                    SoftEmphasis: "content-action-standard",
                    ActionUtility: "content-action-standard",
                    Alert: "content-action-standard"
                },
                Ve = co(707),
                We = 0;

            function He(e, t) {
                return function(e) {
                    if (Array.isArray(e)) return e
                }(e) || function(e, t) {
                    if ("undefined" == typeof Symbol || !(Symbol.iterator in Object(e))) return;
                    var n = [],
                        r = !0,
                        a = !1,
                        o = void 0;
                    try {
                        for (var i, l = e[Symbol.iterator](); !(r = (i = l.next()).done) && (n.push(i.value), !t || n.length !== t); r = !0);
                    } catch (e) {
                        a = !0, o = e
                    } finally {
                        try {
                            r || null == l.return || l.return()
                        } finally {
                            if (a) throw o
                        }
                    }
                    return n
                }(e, t) || Je(e, t) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }

            function ze(e, t) {
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

            function qe(e) {
                return function(e) {
                    if (Array.isArray(e)) return Xe(e)
                }(e) || function(e) {
                    if ("undefined" != typeof Symbol && Symbol.iterator in Object(e)) return Array.from(e)
                }(e) || Je(e) || function() {
                    throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }

            function Je(e, t) {
                if (e) {
                    if ("string" == typeof e) return Xe(e, t);
                    var n = Object.prototype.toString.call(e).slice(8, -1);
                    return "Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n ? Array.from(e) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? Xe(e, t) : void 0
                }
            }

            function Xe(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
                return r
            }

            function Ke(t, e) {
                var n, r = Object.keys(t);
                return Object.getOwnPropertySymbols && (n = Object.getOwnPropertySymbols(t), e && (n = n.filter(function(e) {
                    return Object.getOwnPropertyDescriptor(t, e).enumerable
                })), r.push.apply(r, n)), r
            }

            function Ye(t) {
                for (var e = 1; e < arguments.length; e++) {
                    var n = null != arguments[e] ? arguments[e] : {};
                    e % 2 ? Ke(Object(n), !0).forEach(function(e) {
                        Qe(t, e, n[e])
                    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : Ke(Object(n)).forEach(function(e) {
                        Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
                    })
                }
                return t
            }

            function Qe(e, t, n) {
                return t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n, e
            }

            function Ze(t, n, e) {
                var e = (2 < arguments.length && void 0 !== e ? e : {}).checkForDefaultPrevented,
                    r = void 0 === e || e;
                return function(e) {
                    if (null != t && t(e), !1 === r || !e.defaultPrevented) return null == n ? void 0 : n(e)
                }
            }

            function $e(e, t) {
                if ("function" == typeof e) return e(t);
                null != e && (e.current = t)
            }

            function et() {
                for (var e = arguments.length, a = new Array(e), t = 0; t < e; t++) a[t] = arguments[t];
                return function(t) {
                    var n = !1,
                        r = a.map(function(e) {
                            e = $e(e, t);
                            return n || "function" != typeof e || (n = !0), e
                        });
                    if (n) return function() {
                        for (var e = 0; e < r.length; e++) {
                            var t = r[e];
                            "function" == typeof t ? t() : $e(a[e], null)
                        }
                    }
                }
            }

            function tt() {
                for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++) t[n] = arguments[n];
                return $.useCallback(et.apply(void 0, t), t)
            }

            function nt(l, e) {
                var t = 1 < arguments.length && void 0 !== e ? e : [],
                    c = [],
                    e = function() {
                        var n = c.map(function(e) {
                            return $.createContext(e)
                        });
                        return function(e) {
                            var t = (null == e ? void 0 : e[l]) || n;
                            return $.useMemo(function() {
                                return Qe({}, "__scope".concat(l), Ye(Ye({}, e), {}, Qe({}, l, t)))
                            }, [e, t])
                        }
                    };
                return e.scopeName = l, [function(r, a) {
                    var o = $.createContext(a),
                        i = c.length;
                    c = [].concat(qe(c), [a]);

                    function e(e) {
                        var t = e.scope,
                            n = e.children,
                            r = ze(e, ["scope", "children"]),
                            t = (null == t || null === (a = t[l]) || void 0 === a ? void 0 : a[i]) || o,
                            a = $.useMemo(function() {
                                return r
                            }, Object.values(r));
                        return (0, Ve.jsx)(t.Provider, {
                            value: a,
                            children: n
                        })
                    }
                    return e.displayName = r + "Provider", [e, function(e, t) {
                        var n = (null == t || null === (n = t[l]) || void 0 === n ? void 0 : n[i]) || o,
                            n = $.useContext(n);
                        if (n) return n;
                        if (void 0 !== a) return a;
                        throw new Error("`".concat(e, "` must be used within `").concat(r, "`"))
                    }]
                }, function() {
                    for (var e = arguments.length, n = new Array(e), t = 0; t < e; t++) n[t] = arguments[t];
                    var a = n[0];
                    if (1 === n.length) return a;

                    function r() {
                        var t = n.map(function(e) {
                            return {
                                useScope: e(),
                                scopeName: e.scopeName
                            }
                        });
                        return function(r) {
                            var e = t.reduce(function(e, t) {
                                var n = t.useScope,
                                    t = t.scopeName;
                                return Ye(Ye({}, e), n(r)["__scope".concat(t)])
                            }, {});
                            return $.useMemo(function() {
                                return Qe({}, "__scope".concat(a.scopeName), e)
                            }, [e])
                        }
                    }
                    return r.scopeName = a.scopeName, r
                }.apply(void 0, [e].concat(qe(t)))]
            }

            function rt(e) {
                var t = $.forwardRef(function(e, t) {
                    var n, r = e.children,
                        a = ze(e, ["children"]);
                    if ($.isValidElement(r)) {
                        var o = (o = r, e = null === (n = Object.getOwnPropertyDescriptor(o.props, "ref")) || void 0 === n ? void 0 : n.get, e && "isReactWarning" in e && e.isReactWarning ? o.ref : (e = null === (n = Object.getOwnPropertyDescriptor(o, "ref")) || void 0 === n ? void 0 : n.get) && "isReactWarning" in e && e.isReactWarning ? o.props.ref : o.props.ref || o.ref),
                            a = function(r, a) {
                                var e, o = Ye({}, a);
                                for (e in a) ! function(e) {
                                    var t = r[e],
                                        n = a[e];
                                    /^on[A-Z]/.test(e) ? t && n ? o[e] = function() {
                                        n.apply(void 0, arguments), t.apply(void 0, arguments)
                                    } : t && (o[e] = t) : "style" === e ? o[e] = Ye(Ye({}, t), n) : "className" === e && (o[e] = [t, n].filter(Boolean).join(" "))
                                }(e);
                                return Ye(Ye({}, r), o)
                            }(a, r.props);
                        return r.type !== $.Fragment && (a.ref = t ? et(t, o) : o), $.cloneElement(r, a)
                    }
                    return 1 < $.Children.count(r) ? $.Children.only(null) : null
                });
                return t.displayName = "".concat(e, ".SlotClone"), t
            }
            var at = Symbol("radix.slottable");

            function ot(e) {
                return $.isValidElement(e) && "function" == typeof e.type && "__radixId" in e.type && e.type.__radixId === at
            }
            var it = ["a", "button", "div", "form", "h2", "h3", "img", "input", "label", "li", "nav", "ol", "p", "span", "svg", "ul"].reduce(function(e, r) {
                var t, i, n, a = (t = "Primitive.".concat(r), i = rt(t), (n = $.forwardRef(function(e, t) {
                        var n = e.children,
                            r = ze(e, ["children"]),
                            e = $.Children.toArray(n),
                            a = e.find(ot);
                        if (a) {
                            var o = a.props.children,
                                e = e.map(function(e) {
                                    return e === a ? 1 < $.Children.count(o) ? $.Children.only(null) : $.isValidElement(o) ? o.props.children : null : e
                                });
                            return (0, Ve.jsx)(i, Ye(Ye({}, r), {}, {
                                ref: t,
                                children: $.isValidElement(o) ? $.cloneElement(o, void 0, e) : null
                            }))
                        }
                        return (0, Ve.jsx)(i, Ye(Ye({}, r), {}, {
                            ref: t,
                            children: n
                        }))
                    })).displayName = "".concat(t, ".Slot"), n),
                    n = $.forwardRef(function(e, t) {
                        var n = e.asChild,
                            e = ze(e, ["asChild"]),
                            n = n ? a : r;
                        return "undefined" != typeof window && (window[Symbol.for("radix-ui")] = !0), (0, Ve.jsx)(n, Ye(Ye({}, e), {}, {
                            ref: t
                        }))
                    });
                return n.displayName = "Primitive.".concat(r), Ye(Ye({}, e), {}, Qe({}, r, n))
            }, {});

            function lt(t, n, e) {
                var e = (2 < arguments.length && void 0 !== e ? e : {}).checkForDefaultPrevented,
                    r = void 0 === e || e;
                return function(e) {
                    if (null != t && t(e), !1 === r || !e.defaultPrevented) return null == n ? void 0 : n(e)
                }
            }

            function ct() {
                for (var e = arguments.length, n = new Array(e), t = 0; t < e; t++) n[t] = arguments[t];
                var a = n[0];
                if (1 === n.length) return a;

                function r() {
                    var t = n.map(function(e) {
                        return {
                            useScope: e(),
                            scopeName: e.scopeName
                        }
                    });
                    return function(r) {
                        var e = t.reduce(function(e, t) {
                            var n = t.useScope,
                                t = t.scopeName;
                            return Ye(Ye({}, e), n(r)["__scope".concat(t)])
                        }, {});
                        return $.useMemo(function() {
                            return Qe({}, "__scope".concat(a.scopeName), e)
                        }, [e])
                    }
                }
                return r.scopeName = a.scopeName, r
            }

            function ut(e, t) {
                if ("function" == typeof e) return e(t);
                null != e && (e.current = t)
            }

            function st() {
                for (var e = arguments.length, a = new Array(e), t = 0; t < e; t++) a[t] = arguments[t];
                return function(t) {
                    var n = !1,
                        r = a.map(function(e) {
                            e = ut(e, t);
                            return n || "function" != typeof e || (n = !0), e
                        });
                    if (n) return function() {
                        for (var e = 0; e < r.length; e++) {
                            var t = r[e];
                            "function" == typeof t ? t() : ut(a[e], null)
                        }
                    }
                }
            }

            function dt() {
                for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++) t[n] = arguments[n];
                return $.useCallback(st.apply(void 0, t), t)
            }

            function pt(e) {
                var t, n, i = (t = e, (n = $.forwardRef(function(e, t) {
                        var n, r = e.children,
                            a = ze(e, ["children"]);
                        if ($.isValidElement(r)) {
                            var o = (o = r, e = null === (n = Object.getOwnPropertyDescriptor(o.props, "ref")) || void 0 === n ? void 0 : n.get, e && "isReactWarning" in e && e.isReactWarning ? o.ref : (e = null === (n = Object.getOwnPropertyDescriptor(o, "ref")) || void 0 === n ? void 0 : n.get) && "isReactWarning" in e && e.isReactWarning ? o.props.ref : o.props.ref || o.ref),
                                a = function(r, a) {
                                    var e, o = Ye({}, a);
                                    for (e in a) ! function(e) {
                                        var t = r[e],
                                            n = a[e];
                                        /^on[A-Z]/.test(e) ? t && n ? o[e] = function() {
                                            n.apply(void 0, arguments), t.apply(void 0, arguments)
                                        } : t && (o[e] = t) : "style" === e ? o[e] = Ye(Ye({}, t), n) : "className" === e && (o[e] = [t, n].filter(Boolean).join(" "))
                                    }(e);
                                    return Ye(Ye({}, r), o)
                                }(a, r.props);
                            return r.type !== $.Fragment && (a.ref = t ? st(t, o) : o), $.cloneElement(r, a)
                        }
                        return 1 < $.Children.count(r) ? $.Children.only(null) : null
                    })).displayName = "".concat(t, ".SlotClone"), n),
                    n = $.forwardRef(function(e, t) {
                        var n = e.children,
                            r = ze(e, ["children"]),
                            e = $.Children.toArray(n),
                            a = e.find(mt);
                        if (a) {
                            var o = a.props.children,
                                e = e.map(function(e) {
                                    return e === a ? 1 < $.Children.count(o) ? $.Children.only(null) : $.isValidElement(o) ? o.props.children : null : e
                                });
                            return (0, Ve.jsx)(i, Ye(Ye({}, r), {}, {
                                ref: t,
                                children: $.isValidElement(o) ? $.cloneElement(o, void 0, e) : null
                            }))
                        }
                        return (0, Ve.jsx)(i, Ye(Ye({}, r), {}, {
                            ref: t,
                            children: n
                        }))
                    });
                return n.displayName = "".concat(e, ".Slot"), n
            }
            var ft = Symbol("radix.slottable");

            function mt(e) {
                return $.isValidElement(e) && "function" == typeof e.type && "__radixId" in e.type && e.type.__radixId === ft
            }

            function vt(e, t) {
                if ("function" == typeof e) return e(t);
                null != e && (e.current = t)
            }

            function ht() {
                for (var e = arguments.length, a = new Array(e), t = 0; t < e; t++) a[t] = arguments[t];
                return function(t) {
                    var n = !1,
                        r = a.map(function(e) {
                            e = vt(e, t);
                            return n || "function" != typeof e || (n = !0), e
                        });
                    if (n) return function() {
                        for (var e = 0; e < r.length; e++) {
                            var t = r[e];
                            "function" == typeof t ? t() : vt(a[e], null)
                        }
                    }
                }
            }

            function gt() {
                for (var e = arguments.length, n = new Array(e), t = 0; t < e; t++) n[t] = arguments[t];
                var a = n[0];
                if (1 === n.length) return a;

                function r() {
                    var t = n.map(function(e) {
                        return {
                            useScope: e(),
                            scopeName: e.scopeName
                        }
                    });
                    return function(r) {
                        var e = t.reduce(function(e, t) {
                            var n = t.useScope,
                                t = t.scopeName;
                            return Ye(Ye({}, e), n(r)["__scope".concat(t)])
                        }, {});
                        return $.useMemo(function() {
                            return Qe({}, "__scope".concat(a.scopeName), e)
                        }, [e])
                    }
                }
                return r.scopeName = a.scopeName, r
            }
            var yt = null !== globalThis && void 0 !== globalThis && globalThis.document ? $.useLayoutEffect : function() {},
                bt = $[" useId ".trim().toString()] || function() {},
                wt = 0;

            function Pt(e) {
                var t = $.forwardRef(function(e, t) {
                    var n, r = e.children,
                        a = ze(e, ["children"]);
                    if ($.isValidElement(r)) {
                        var o = (o = r, e = null === (n = Object.getOwnPropertyDescriptor(o.props, "ref")) || void 0 === n ? void 0 : n.get, e && "isReactWarning" in e && e.isReactWarning ? o.ref : (e = null === (n = Object.getOwnPropertyDescriptor(o, "ref")) || void 0 === n ? void 0 : n.get) && "isReactWarning" in e && e.isReactWarning ? o.props.ref : o.props.ref || o.ref),
                            a = function(r, a) {
                                var e, o = Ye({}, a);
                                for (e in a) ! function(e) {
                                    var t = r[e],
                                        n = a[e];
                                    /^on[A-Z]/.test(e) ? t && n ? o[e] = function() {
                                        n.apply(void 0, arguments), t.apply(void 0, arguments)
                                    } : t && (o[e] = t) : "style" === e ? o[e] = Ye(Ye({}, t), n) : "className" === e && (o[e] = [t, n].filter(Boolean).join(" "))
                                }(e);
                                return Ye(Ye({}, r), o)
                            }(a, r.props);
                        return r.type !== $.Fragment && (a.ref = t ? ht(t, o) : o), $.cloneElement(r, a)
                    }
                    return 1 < $.Children.count(r) ? $.Children.only(null) : null
                });
                return t.displayName = "".concat(e, ".SlotClone"), t
            }
            var Et = Symbol("radix.slottable");

            function Ct(e) {
                return $.isValidElement(e) && "function" == typeof e.type && "__radixId" in e.type && e.type.__radixId === Et
            }
            var It = ["a", "button", "div", "form", "h2", "h3", "img", "input", "label", "li", "nav", "ol", "p", "span", "svg", "ul"].reduce(function(e, r) {
                var t, i, n, a = (t = "Primitive.".concat(r), i = Pt(t), (n = $.forwardRef(function(e, t) {
                        var n = e.children,
                            r = ze(e, ["children"]),
                            e = $.Children.toArray(n),
                            a = e.find(Ct);
                        if (a) {
                            var o = a.props.children,
                                e = e.map(function(e) {
                                    return e === a ? 1 < $.Children.count(o) ? $.Children.only(null) : $.isValidElement(o) ? o.props.children : null : e
                                });
                            return (0, Ve.jsx)(i, Ye(Ye({}, r), {}, {
                                ref: t,
                                children: $.isValidElement(o) ? $.cloneElement(o, void 0, e) : null
                            }))
                        }
                        return (0, Ve.jsx)(i, Ye(Ye({}, r), {}, {
                            ref: t,
                            children: n
                        }))
                    })).displayName = "".concat(t, ".Slot"), n),
                    n = $.forwardRef(function(e, t) {
                        var n = e.asChild,
                            e = ze(e, ["asChild"]),
                            n = n ? a : r;
                        return "undefined" != typeof window && (window[Symbol.for("radix-ui")] = !0), (0, Ve.jsx)(n, Ye(Ye({}, e), {}, {
                            ref: t
                        }))
                    });
                return n.displayName = "Primitive.".concat(r), Ye(Ye({}, e), {}, Qe({}, r, n))
            }, {});

            function St(e) {
                var a = $.useRef(e);
                return $.useEffect(function() {
                    a.current = e
                }), $.useMemo(function() {
                    return function() {
                        for (var e, t = arguments.length, n = new Array(t), r = 0; r < t; r++) n[r] = arguments[r];
                        return null === (e = a.current) || void 0 === e ? void 0 : e.call.apply(e, [a].concat(n))
                    }
                }, [])
            }
            var xt = $.createContext(void 0);

            function At(e) {
                var t = $.useContext(xt);
                return e || t || "ltr"
            }
            var Tt = "rovingFocusGroup.onEntryFocus",
                Ot = {
                    bubbles: !1,
                    cancelable: !0
                },
                kt = "RovingFocusGroup",
                Rt = function(n) {
                    var e = n + "CollectionProvider",
                        t = He(function(l, e) {
                            var t = 1 < arguments.length && void 0 !== e ? e : [],
                                c = [],
                                e = function() {
                                    var n = c.map(function(e) {
                                        return $.createContext(e)
                                    });
                                    return function(e) {
                                        var t = (null == e ? void 0 : e[l]) || n;
                                        return $.useMemo(function() {
                                            return Qe({}, "__scope".concat(l), Ye(Ye({}, e), {}, Qe({}, l, t)))
                                        }, [e, t])
                                    }
                                };
                            return e.scopeName = l, [function(r, a) {
                                var o = $.createContext(a),
                                    i = c.length;
                                c = [].concat(qe(c), [a]);

                                function e(e) {
                                    var t = e.scope,
                                        n = e.children,
                                        r = ze(e, ["scope", "children"]),
                                        t = (null == t || null === (a = t[l]) || void 0 === a ? void 0 : a[i]) || o,
                                        a = $.useMemo(function() {
                                            return r
                                        }, Object.values(r));
                                    return (0, Ve.jsx)(t.Provider, {
                                        value: a,
                                        children: n
                                    })
                                }
                                return e.displayName = r + "Provider", [e, function(e, t) {
                                    var n = (null == t || null === (n = t[l]) || void 0 === n ? void 0 : n[i]) || o,
                                        n = $.useContext(n);
                                    if (n) return n;
                                    if (void 0 !== a) return a;
                                    throw new Error("`".concat(e, "` must be used within `").concat(r, "`"))
                                }]
                            }, ct.apply(void 0, [e].concat(qe(t)))]
                        }(e), 2),
                        r = t[0],
                        a = t[1],
                        t = He(r(e, {
                            collectionRef: {
                                current: null
                            },
                            itemMap: new Map
                        }), 2),
                        o = t[0],
                        l = t[1],
                        r = function(e) {
                            var t = e.scope,
                                n = e.children,
                                r = ee().useRef(null),
                                e = ee().useRef(new Map).current;
                            return (0, Ve.jsx)(o, {
                                scope: t,
                                itemMap: e,
                                collectionRef: r,
                                children: n
                            })
                        };
                    r.displayName = e;
                    var i = n + "CollectionSlot",
                        c = pt(i),
                        t = ee().forwardRef(function(e, t) {
                            var n = e.scope,
                                e = e.children,
                                n = dt(t, l(i, n).collectionRef);
                            return (0, Ve.jsx)(c, {
                                ref: n,
                                children: e
                            })
                        });
                    t.displayName = i;
                    var u = n + "CollectionItemSlot",
                        s = "data-radix-collection-item",
                        d = pt(u),
                        e = ee().forwardRef(function(e, t) {
                            var n = e.scope,
                                r = e.children,
                                a = ze(e, ["scope", "children"]),
                                o = ee().useRef(null),
                                t = dt(t, o),
                                i = l(u, n);
                            return ee().useEffect(function() {
                                return i.itemMap.set(o, Ye({
                                        ref: o
                                    }, a)),
                                    function() {
                                        i.itemMap.delete(o)
                                    }
                            }), (0, Ve.jsx)(d, (Qe(n = {}, s, ""), Qe(n, "ref", t), Qe(n, "children", r), n))
                        });
                    return e.displayName = u, [{
                        Provider: r,
                        Slot: t,
                        ItemSlot: e
                    }, function(e) {
                        var t = l(n + "CollectionConsumer", e);
                        return ee().useCallback(function() {
                            var e = t.collectionRef.current;
                            if (!e) return [];
                            var n = Array.from(e.querySelectorAll("[".concat(s, "]")));
                            return Array.from(t.itemMap.values()).sort(function(e, t) {
                                return n.indexOf(e.ref.current) - n.indexOf(t.ref.current)
                            })
                        }, [t.collectionRef, t.itemMap])
                    }, a]
                }(kt),
                Ut = (e = He(Rt, 3))[0],
                Lt = e[1],
                be = (te = He(function(l, e) {
                    var t = 1 < arguments.length && void 0 !== e ? e : [],
                        c = [],
                        e = function() {
                            var n = c.map(function(e) {
                                return $.createContext(e)
                            });
                            return function(e) {
                                var t = (null == e ? void 0 : e[l]) || n;
                                return $.useMemo(function() {
                                    return Qe({}, "__scope".concat(l), Ye(Ye({}, e), {}, Qe({}, l, t)))
                                }, [e, t])
                            }
                        };
                    return e.scopeName = l, [function(r, a) {
                        var o = $.createContext(a),
                            i = c.length;
                        c = [].concat(qe(c), [a]);

                        function e(e) {
                            var t = e.scope,
                                n = e.children,
                                r = ze(e, ["scope", "children"]),
                                t = (null == t || null === (a = t[l]) || void 0 === a ? void 0 : a[i]) || o,
                                a = $.useMemo(function() {
                                    return r
                                }, Object.values(r));
                            return (0, Ve.jsx)(t.Provider, {
                                value: a,
                                children: n
                            })
                        }
                        return e.displayName = r + "Provider", [e, function(e, t) {
                            var n = (null == t || null === (n = t[l]) || void 0 === n ? void 0 : n[i]) || o,
                                n = $.useContext(n);
                            if (n) return n;
                            if (void 0 !== a) return a;
                            throw new Error("`".concat(e, "` must be used within `").concat(r, "`"))
                        }]
                    }, gt.apply(void 0, [e].concat(qe(t)))]
                }(kt, [e[2]]), 2))[0],
                Rt = te[1],
                Nt = (e = He(be(kt), 2))[0],
                Dt = e[1];
            (te = $.forwardRef(function(e, t) {
                return (0, Ve.jsx)(Ut.Provider, {
                    scope: e.__scopeRovingFocusGroup,
                    children: (0, Ve.jsx)(Ut.Slot, {
                        scope: e.__scopeRovingFocusGroup,
                        children: (0, Ve.jsx)(jt, Ye(Ye({}, e), {}, {
                            ref: t
                        }))
                    })
                })
            })).displayName = kt;
            var jt = $.forwardRef(function(e, t) {
                    var n, r, a, o, i, l, c, u = e.__scopeRovingFocusGroup,
                        s = e.orientation,
                        d = e.loop,
                        p = void 0 !== d && d,
                        f = e.dir,
                        m = e.currentTabStopId,
                        v = e.defaultCurrentTabStopId,
                        h = e.onCurrentTabStopIdChange,
                        g = e.onEntryFocus,
                        d = e.preventScrollOnEntryFocus,
                        y = void 0 !== d && d,
                        d = ze(e, ["__scopeRovingFocusGroup", "orientation", "loop", "dir", "currentTabStopId", "defaultCurrentTabStopId", "onCurrentTabStopIdChange", "onEntryFocus", "preventScrollOnEntryFocus"]),
                        b = $.useRef(null),
                        t = function() {
                            for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++) t[n] = arguments[n];
                            return $.useCallback(ht.apply(void 0, t), t)
                        }(t, b),
                        f = At(f),
                        m = (o = (m = {
                            prop: m,
                            defaultProp: v,
                            onChange: h
                        }).prop, v = m.defaultProp, h = m.onChange, v = (h = {
                            defaultProp: v,
                            onChange: m = void 0 === h ? function() {} : h
                        }).defaultProp, h = h.onChange, v = $.useState(v), n = He(v, 1)[0], r = $.useRef(n), a = St(h), $.useEffect(function() {
                            r.current !== n && (a(n), r.current = n)
                        }, [n, r, a]), h = (v = He(h = v, 2))[0], i = v[1], h = (l = void 0 !== o) ? o : h, c = St(m), [h, $.useCallback(function(e) {
                            var t;
                            l ? (t = "function" == typeof e ? e(o) : e) !== o && c(t) : i(e)
                        }, [l, o, i, c])]),
                        h = He(m, 2),
                        m = h[0],
                        w = void 0 === m ? null : m,
                        P = h[1],
                        h = He($.useState(!1), 2),
                        E = h[0],
                        C = h[1],
                        I = St(g),
                        S = Lt(u),
                        x = $.useRef(!1),
                        h = He($.useState(0), 2),
                        g = h[0],
                        A = h[1];
                    return $.useEffect(function() {
                        var e = b.current;
                        if (e) return e.addEventListener(Tt, I),
                            function() {
                                return e.removeEventListener(Tt, I)
                            }
                    }, [I]), (0, Ve.jsx)(Nt, {
                        scope: u,
                        orientation: s,
                        dir: f,
                        loop: p,
                        currentTabStopId: w,
                        onItemFocus: $.useCallback(function(e) {
                            return P(e)
                        }, [P]),
                        onItemShiftTab: $.useCallback(function() {
                            return C(!0)
                        }, []),
                        onFocusableItemAdd: $.useCallback(function() {
                            return A(function(e) {
                                return e + 1
                            })
                        }, []),
                        onFocusableItemRemove: $.useCallback(function() {
                            return A(function(e) {
                                return e - 1
                            })
                        }, []),
                        children: (0, Ve.jsx)(It.div, Ye(Ye({
                            tabIndex: E || 0 === g ? -1 : 0,
                            "data-orientation": s
                        }, d), {}, {
                            ref: t,
                            style: Ye({
                                outline: "none"
                            }, e.style),
                            onMouseDown: lt(e.onMouseDown, function() {
                                x.current = !0
                            }),
                            onFocus: lt(e.onFocus, function(e) {
                                var t = !x.current;
                                e.target === e.currentTarget && t && !E && (t = new CustomEvent(Tt, Ot), e.currentTarget.dispatchEvent(t), t.defaultPrevented || Gt([(t = S().filter(function(e) {
                                    return e.focusable
                                })).find(function(e) {
                                    return e.active
                                }), t.find(function(e) {
                                    return e.id === w
                                })].concat(qe(t)).filter(Boolean).map(function(e) {
                                    return e.ref.current
                                }), y)), x.current = !1
                            }),
                            onBlur: lt(e.onBlur, function() {
                                return C(!1)
                            })
                        }))
                    })
                }),
                Bt = "RovingFocusGroupItem";
            (be = $.forwardRef(function(e, t) {
                var n, r, a = e.__scopeRovingFocusGroup,
                    o = e.focusable,
                    i = void 0 === o || o,
                    l = e.active,
                    c = void 0 !== l && l,
                    u = e.tabStopId,
                    s = ze(e, ["__scopeRovingFocusGroup", "focusable", "active", "tabStopId"]),
                    l = (o = He($.useState(bt()), 2), l = o[0], r = o[1], yt(function() {
                        r(function(e) {
                            return null != e ? e : String(wt++)
                        })
                    }, [n]), l ? "radix-".concat(l) : ""),
                    d = u || l,
                    p = Dt(Bt, a),
                    l = p.currentTabStopId === d,
                    f = Lt(a),
                    m = p.onFocusableItemAdd,
                    v = p.onFocusableItemRemove;
                return $.useEffect(function() {
                    if (i) return m(),
                        function() {
                            return v()
                        }
                }, [i, m, v]), (0, Ve.jsx)(Ut.ItemSlot, {
                    scope: a,
                    id: d,
                    focusable: i,
                    active: c,
                    children: (0, Ve.jsx)(It.span, Ye(Ye({
                        tabIndex: l ? 0 : -1,
                        "data-orientation": p.orientation
                    }, s), {}, {
                        ref: t,
                        onMouseDown: lt(e.onMouseDown, function(e) {
                            i ? p.onItemFocus(d) : e.preventDefault()
                        }),
                        onFocus: lt(e.onFocus, function() {
                            return p.onItemFocus(d)
                        }),
                        onKeyDown: lt(e.onKeyDown, function(e) {
                            var t, n, r, a, o, i;
                            "Tab" === e.key && e.shiftKey ? p.onItemShiftTab() : e.target === e.currentTarget && (t = p.orientation, n = p.dir, r = e.key, r = "rtl" !== n ? r : "ArrowLeft" === r ? "ArrowRight" : "ArrowRight" === r ? "ArrowLeft" : r, void 0 !== (r = "vertical" === t && ["ArrowLeft", "ArrowRight"].includes(r) || "horizontal" === t && ["ArrowUp", "ArrowDown"].includes(r) ? void 0 : Mt[r]) && (e.metaKey || e.ctrlKey || e.altKey || e.shiftKey || (e.preventDefault(), a = f().filter(function(e) {
                                return e.focusable
                            }).map(function(e) {
                                return e.ref.current
                            }), "last" === r ? a.reverse() : "prev" !== r && "next" !== r || ("prev" === r && a.reverse(), e = a.indexOf(e.currentTarget), a = p.loop ? (i = e + 1, (o = a).map(function(e, t) {
                                return o[(i + t) % o.length]
                            })) : a.slice(e + 1)), setTimeout(function() {
                                return Gt(a)
                            }))))
                        })
                    }))
                })
            })).displayName = Bt;
            var Mt = {
                ArrowLeft: "prev",
                ArrowUp: "prev",
                ArrowRight: "next",
                ArrowDown: "next",
                PageUp: "first",
                Home: "first",
                PageDown: "last",
                End: "last"
            };

            function Gt(e, t) {
                var n = 1 < arguments.length && void 0 !== t && t,
                    r = document.activeElement,
                    a = function(e, t) {
                        var n;
                        if ("undefined" == typeof Symbol || null == e[Symbol.iterator]) {
                            if (Array.isArray(e) || (n = Je(e)) || t && e && "number" == typeof e.length) {
                                n && (e = n);
                                var r = 0,
                                    t = function() {};
                                return {
                                    s: t,
                                    n: function() {
                                        return r >= e.length ? {
                                            done: !0
                                        } : {
                                            done: !1,
                                            value: e[r++]
                                        }
                                    },
                                    e: function(e) {
                                        throw e
                                    },
                                    f: t
                                }
                            }
                            throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                        }
                        var a, o = !0,
                            i = !1;
                        return {
                            s: function() {
                                n = e[Symbol.iterator]()
                            },
                            n: function() {
                                var e = n.next();
                                return o = e.done, e
                            },
                            e: function(e) {
                                i = !0, a = e
                            },
                            f: function() {
                                try {
                                    o || null == n.return || n.return()
                                } finally {
                                    if (i) throw a
                                }
                            }
                        }
                    }(e);
                try {
                    for (a.s(); !(o = a.n()).done;) {
                        var o = o.value;
                        if (o === r) return;
                        if (o.focus({
                                preventScroll: n
                            }), document.activeElement !== r) return
                    }
                } catch (e) {
                    a.e(e)
                } finally {
                    a.f()
                }
            }
            var Ft = te,
                _t = be;

            function Vt(e) {
                var a = $.useRef(e);
                return $.useEffect(function() {
                    a.current = e
                }), $.useMemo(function() {
                    return function() {
                        for (var e, t = arguments.length, n = new Array(t), r = 0; r < t; r++) n[r] = arguments[r];
                        return null === (e = a.current) || void 0 === e ? void 0 : e.call.apply(e, [a].concat(n))
                    }
                }, [])
            }

            function Wt(e) {
                var a, n, t, o, r, i, l, c, u, s, d = e.present,
                    p = e.children,
                    f = (a = d, t = He($.useState(), 2), o = t[0], r = t[1], i = $.useRef({}), l = $.useRef(a), c = $.useRef("none"), t = a ? "mounted" : "unmounted", t = He((n = {
                        mounted: {
                            UNMOUNT: "unmounted",
                            ANIMATION_OUT: "unmountSuspended"
                        },
                        unmountSuspended: {
                            MOUNT: "mounted",
                            ANIMATION_END: "unmounted"
                        },
                        unmounted: {
                            MOUNT: "mounted"
                        }
                    }, $.useReducer(function(e, t) {
                        return null !== (t = n[e][t]) && void 0 !== t ? t : e
                    }, t)), 2), u = t[0], s = t[1], $.useEffect(function() {
                        var e = zt(i.current);
                        c.current = "mounted" === u ? e : "none"
                    }, [u]), Ht(function() {
                        var e, t, n = i.current,
                            r = l.current;
                        r !== a && (e = c.current, t = zt(n), a ? s("MOUNT") : "none" === t || "none" === (null == n ? void 0 : n.display) ? s("UNMOUNT") : s(r && e !== t ? "ANIMATION_OUT" : "UNMOUNT"), l.current = a)
                    }, [a, s]), Ht(function() {
                        if (o) {
                            var e, r, a = null !== (e = o.ownerDocument.defaultView) && void 0 !== e ? e : window,
                                t = function(e) {
                                    var t, n = zt(i.current).includes(e.animationName);
                                    e.target === o && n && (s("ANIMATION_END"), !l.current) && (t = o.style.animationFillMode, o.style.animationFillMode = "forwards", r = a.setTimeout(function() {
                                        "forwards" === o.style.animationFillMode && (o.style.animationFillMode = t)
                                    }))
                                },
                                n = function(e) {
                                    e.target === o && (c.current = zt(i.current))
                                };
                            return o.addEventListener("animationstart", n), o.addEventListener("animationcancel", t), o.addEventListener("animationend", t),
                                function() {
                                    a.clearTimeout(r), o.removeEventListener("animationstart", n), o.removeEventListener("animationcancel", t), o.removeEventListener("animationend", t)
                                }
                        }
                        s("ANIMATION_END")
                    }, [o, s]), {
                        isPresent: ["mounted", "unmountSuspended"].includes(u),
                        ref: $.useCallback(function(e) {
                            e && (i.current = getComputedStyle(e)), r(e)
                        }, [])
                    }),
                    m = "function" == typeof p ? p({
                        present: f.isPresent
                    }) : $.Children.only(p),
                    e = tt(f.ref, (e = m, (t = null === (d = Object.getOwnPropertyDescriptor(e.props, "ref")) || void 0 === d ? void 0 : d.get) && "isReactWarning" in t && t.isReactWarning ? e.ref : (t = null === (d = Object.getOwnPropertyDescriptor(e, "ref")) || void 0 === d ? void 0 : d.get) && "isReactWarning" in t && t.isReactWarning ? e.props.ref : e.props.ref || e.ref));
                return "function" == typeof p || f.isPresent ? $.cloneElement(m, {
                    ref: e
                }) : null
            }
            var Ht = null !== globalThis && void 0 !== globalThis && globalThis.document ? $.useLayoutEffect : function() {};

            function zt(e) {
                return (null == e ? void 0 : e.animationName) || "none"
            }
            Wt.displayName = "Presence";
            var te = (kt = He(nt(e = "Radio"), 2))[0],
                be = kt[1],
                qt = (kt = He(te(e), 2))[0],
                Jt = kt[1],
                Xt = $.forwardRef(function(e, t) {
                    var n = e.__scopeRadio,
                        r = e.name,
                        a = e.checked,
                        o = void 0 !== a && a,
                        i = e.required,
                        l = e.disabled,
                        c = e.value,
                        u = void 0 === c ? "on" : c,
                        s = e.onCheck,
                        d = e.form,
                        p = ze(e, ["__scopeRadio", "name", "checked", "required", "disabled", "value", "onCheck", "form"]),
                        a = He($.useState(null), 2),
                        c = a[0],
                        f = a[1],
                        t = tt(t, function(e) {
                            return f(e)
                        }),
                        m = $.useRef(!1),
                        v = !c || d || !!c.closest("form");
                    return (0, Ve.jsxs)(qt, {
                        scope: n,
                        checked: o,
                        disabled: l,
                        children: [(0, Ve.jsx)(it.button, Ye(Ye({
                            type: "button",
                            role: "radio",
                            "aria-checked": o,
                            "data-state": Zt(o),
                            "data-disabled": l ? "" : void 0,
                            disabled: l,
                            value: u
                        }, p), {}, {
                            ref: t,
                            onClick: Ze(e.onClick, function(e) {
                                o || null != s && s(), v && (m.current = e.isPropagationStopped(), m.current || e.stopPropagation())
                            })
                        })), v && (0, Ve.jsx)(Qt, {
                            control: c,
                            bubbles: !m.current,
                            name: r,
                            value: u,
                            checked: o,
                            required: i,
                            disabled: l,
                            form: d,
                            style: {
                                transform: "translateX(-100%)"
                            }
                        })]
                    })
                });
            Xt.displayName = e;
            var Kt = "RadioIndicator",
                Yt = $.forwardRef(function(e, t) {
                    var n = e.__scopeRadio,
                        r = e.forceMount,
                        e = ze(e, ["__scopeRadio", "forceMount"]),
                        n = Jt(Kt, n);
                    return (0, Ve.jsx)(Wt, {
                        present: r || n.checked,
                        children: (0, Ve.jsx)(it.span, Ye(Ye({
                            "data-state": Zt(n.checked),
                            "data-disabled": n.disabled ? "" : void 0
                        }, e), {}, {
                            ref: t
                        }))
                    })
                });
            Yt.displayName = Kt;
            var Qt = function(e) {
                var r, a, t, n, o = e.control,
                    i = e.checked,
                    l = e.bubbles,
                    c = void 0 === l || l,
                    u = ze(e, ["control", "checked", "bubbles"]),
                    s = $.useRef(null),
                    d = (t = i, n = $.useRef({
                        value: t,
                        previous: t
                    }), $.useMemo(function() {
                        return n.current.value !== t && (n.current.previous = n.current.value, n.current.value = t), n.current.previous
                    }, [t])),
                    o = (r = o, l = He($.useState(void 0), 2), o = l[0], a = l[1], Ht(function() {
                        if (r) {
                            a({
                                width: r.offsetWidth,
                                height: r.offsetHeight
                            });
                            var e = new ResizeObserver(function(e) {
                                var t, n;
                                Array.isArray(e) && e.length && (n = "borderBoxSize" in (e = e[0]) ? (t = e.borderBoxSize, t = (n = Array.isArray(t) ? t[0] : t).inlineSize, n.blockSize) : (t = r.offsetWidth, r.offsetHeight), a({
                                    width: t,
                                    height: n
                                }))
                            });
                            return e.observe(r, {
                                    box: "border-box"
                                }),
                                function() {
                                    return e.unobserve(r)
                                }
                        }
                        a(void 0)
                    }, [r]), o);
                return $.useEffect(function() {
                    var e = s.current,
                        t = window.HTMLInputElement.prototype,
                        n = Object.getOwnPropertyDescriptor(t, "checked").set;
                    d !== i && n && (t = new Event("click", {
                        bubbles: c
                    }), n.call(e, i), e.dispatchEvent(t))
                }, [d, i, c]), (0, Ve.jsx)("input", Ye(Ye({
                    type: "radio",
                    "aria-hidden": !0,
                    defaultChecked: i
                }, u), {}, {
                    tabIndex: -1,
                    ref: s,
                    style: Ye(Ye(Ye({}, e.style), o), {}, {
                        position: "absolute",
                        pointerEvents: "none",
                        opacity: 0,
                        margin: 0
                    })
                }))
            };

            function Zt(e) {
                return e ? "checked" : "unchecked"
            }
            var $t = ["ArrowUp", "ArrowDown", "ArrowLeft", "ArrowRight"],
                e = (kt = He(nt(te = "RadioGroup", [Rt, be]), 2))[0],
                en = (kt[1], Rt()),
                tn = be(),
                nn = (be = He(e(te), 2))[0],
                rn = be[1],
                an = $.forwardRef(function(e, t) {
                    var n, r, a, o, i, l, c, u = e.__scopeRadioGroup,
                        s = e.name,
                        d = e.defaultValue,
                        p = e.value,
                        f = e.required,
                        m = void 0 !== f && f,
                        v = e.disabled,
                        h = void 0 !== v && v,
                        g = e.orientation,
                        y = e.dir,
                        b = e.loop,
                        f = void 0 === b || b,
                        v = e.onValueChange,
                        b = ze(e, ["__scopeRadioGroup", "name", "defaultValue", "value", "required", "disabled", "orientation", "dir", "loop", "onValueChange"]),
                        e = en(u),
                        y = At(y),
                        p = (o = (p = {
                            prop: p,
                            defaultProp: d,
                            onChange: v
                        }).prop, d = p.defaultProp, v = p.onChange, d = (v = {
                            defaultProp: d,
                            onChange: p = void 0 === v ? function() {} : v
                        }).defaultProp, v = v.onChange, d = $.useState(d), n = He(d, 1)[0], r = $.useRef(n), a = Vt(v), $.useEffect(function() {
                            r.current !== n && (a(n), r.current = n)
                        }, [n, r, a]), v = (d = He(v = d, 2))[0], i = d[1], v = (l = void 0 !== o) ? o : v, c = Vt(p), [v, $.useCallback(function(e) {
                            var t;
                            l ? (t = "function" == typeof e ? e(o) : e) !== o && c(t) : i(e)
                        }, [l, o, i, c])]),
                        v = He(p, 2),
                        p = v[0],
                        v = v[1];
                    return (0, Ve.jsx)(nn, {
                        scope: u,
                        name: s,
                        required: m,
                        disabled: h,
                        value: p,
                        onValueChange: v,
                        children: (0, Ve.jsx)(Ft, Ye(Ye({
                            asChild: !0
                        }, e), {}, {
                            orientation: g,
                            dir: y,
                            loop: f,
                            children: (0, Ve.jsx)(it.div, Ye(Ye({
                                role: "radiogroup",
                                "aria-required": m,
                                "aria-orientation": g,
                                "data-disabled": h ? "" : void 0,
                                dir: y
                            }, b), {}, {
                                ref: t
                            }))
                        }))
                    })
                });
            an.displayName = te;
            var on = "RadioGroupItem",
                ln = $.forwardRef(function(e, t) {
                    var n = e.__scopeRadioGroup,
                        r = e.disabled,
                        a = ze(e, ["__scopeRadioGroup", "disabled"]),
                        o = rn(on, n),
                        i = o.disabled || r,
                        e = en(n),
                        r = tn(n),
                        l = $.useRef(null),
                        n = tt(t, l),
                        t = o.value === a.value,
                        c = $.useRef(!1);
                    return $.useEffect(function() {
                        function e(e) {
                            $t.includes(e.key) && (c.current = !0)
                        }

                        function t() {
                            return c.current = !1
                        }
                        return document.addEventListener("keydown", e), document.addEventListener("keyup", t),
                            function() {
                                document.removeEventListener("keydown", e), document.removeEventListener("keyup", t)
                            }
                    }, []), (0, Ve.jsx)(_t, Ye(Ye({
                        asChild: !0
                    }, e), {}, {
                        focusable: !i,
                        active: t,
                        children: (0, Ve.jsx)(Xt, Ye(Ye(Ye({
                            disabled: i,
                            required: o.required,
                            checked: t
                        }, r), a), {}, {
                            name: o.name,
                            ref: n,
                            onCheck: function() {
                                return o.onValueChange(a.value)
                            },
                            onKeyDown: Ze(function(e) {
                                "Enter" === e.key && e.preventDefault()
                            }),
                            onFocus: Ze(a.onFocus, function() {
                                var e;
                                c.current && null !== (e = l.current) && void 0 !== e && e.click()
                            })
                        }))
                    }))
                });
            ln.displayName = on;
            var cn = $.forwardRef(function(e, t) {
                var n = e.__scopeRadioGroup,
                    e = ze(e, ["__scopeRadioGroup"]),
                    n = tn(n);
                return (0, Ve.jsx)(Yt, Ye(Ye(Ye({}, n), e), {}, {
                    ref: t
                }))
            });
            cn.displayName = "RadioGroupIndicator", Oe('.disabled{opacity:.5}.foundation-web-radio-indicator:after{background-color:var(--color-action-sub-emphasis-foreground);border-radius:100%;content:"";display:block}.foundation-web-radio-indicator-xsmall:after{height:var(--size-150);width:var(--size-150)}.foundation-web-radio-indicator-small:after{height:var(--size-200);width:var(--size-200)}.foundation-web-radio-indicator-large:after,.foundation-web-radio-indicator-medium:after{height:var(--size-250);width:var(--size-250)}.foundation-web-radio{align-items:center;border:var(--stroke-standard) solid;border-color:var(--color-stroke-emphasis);border-radius:100%;display:flex;flex:0 0 auto;flex-direction:column;justify-content:center;outline-offset:3px}.foundation-web-radio[data-state=checked]{background-color:var(--color-action-sub-emphasis-background)}');
            var un = {
                    XSmall: "size-400",
                    Small: "size-500",
                    Medium: "size-600",
                    Large: "size-600"
                },
                sn = {
                    XSmall: "xsmall",
                    Small: "small",
                    Medium: "medium",
                    Large: "large"
                },
                dn = {
                    XSmall: "gap-medium",
                    Small: "gap-medium",
                    Medium: "gap-medium",
                    Large: "gap-large"
                },
                pn = {
                    XSmall: "text-title-small",
                    Small: "text-title-small",
                    Medium: "text-title-medium",
                    Large: "text-title-large"
                },
                fn = {
                    XSmall: "text-body-small",
                    Small: "text-body-small",
                    Medium: "text-body-medium",
                    Large: "text-body-large"
                },
                mn = {
                    size: "Medium",
                    placement: "Start",
                    disabled: !1
                },
                vn = (0, $.createContext)(mn);
            ee().forwardRef(function(e, t) {
                var n = e.groupLabel,
                    r = e.size,
                    a = e.placement,
                    o = e.isDisabled,
                    i = e.className,
                    l = e.children,
                    c = Ae(e, ["groupLabel", "size", "placement", "isDisabled", "className", "children"]),
                    u = Ue(),
                    s = (0, $.useMemo)(function() {
                        return null != r ? r : mn.size
                    }, [r]),
                    e = (0, $.useMemo)(function() {
                        return null != a ? a : mn.placement
                    }, [a]);
                return ee().createElement(vn.Provider, {
                    value: {
                        size: s,
                        placement: e,
                        disabled: null != o && o
                    }
                }, ee().createElement("div", {
                    className: Te("flex fill flex-col gap-small")
                }, n && ee().createElement("label", {
                    htmlFor: u,
                    className: Te("foundation-web-radio-group-label", pn[s], "content-default")
                }, n), ee().createElement(an, xe({
                    ref: t,
                    id: u,
                    className: Te("foundation-web-radio-group", "flex flex-col gap-medium", i),
                    name: n
                }, c), l)))
            }).displayName = "RadioGroup", ee().forwardRef(function(e, t) {
                var n = e.className,
                    r = e.value,
                    a = e.isDisabled,
                    o = e.label,
                    i = e.hint,
                    l = Ae(e, ["className", "value", "isDisabled", "label", "hint"]),
                    c = (0, $.useRef)(null),
                    u = (0, $.useRef)(null),
                    s = (0, $.useState)(!1),
                    d = s[0],
                    p = s[1],
                    f = function() {
                        var e = (0, $.useContext)(vn);
                        if (!e) throw new Error("Radio must be used within a RadioGroup");
                        return e
                    }(),
                    m = f.size,
                    v = f.placement,
                    h = f.disabled,
                    e = Ue(),
                    s = (0, $.useMemo)(function() {
                        return !!i
                    }, [i]),
                    f = (0, $.useMemo)(function() {
                        return a || h
                    }, [a, h]);
                return (0, $.useEffect)(function() {
                    var e = new ResizeObserver(function() {
                        function e(e) {
                            if (!e) return !1;
                            var t = getComputedStyle(e),
                                t = parseFloat(t.lineHeight);
                            return 1 < Math.round(e.scrollHeight / t)
                        }
                        var t = c.current,
                            n = u.current,
                            n = e(t) || e(n);
                        p(n)
                    });
                    return c.current && e.observe(c.current), u.current && e.observe(u.current),
                        function() {
                            return e.disconnect()
                        }
                }, [s]), ee().createElement("div", {
                    className: Te("flex gap-medium", {
                        disabled: f,
                        "flex-row": "Start" === v,
                        "flex-row-reverse": "End" === v
                    })
                }, ee().createElement(ln, xe({
                    ref: t,
                    className: Te("foundation-web-radio foundation-web-interactable", dn[m], un[m], n),
                    disabled: f,
                    value: r,
                    "aria-label": o,
                    id: e
                }, l), ee().createElement(cn, {
                    className: Te("foundation-web-radio-indicator", "foundation-web-radio-indicator-".concat(sn[m]), "flex items-center justify-center size-full relative")
                })), ee().createElement("div", {
                    className: Te("flex fill flex-col width-full", {
                        "gap-xsmall": d,
                        "gap-none": !d,
                        "padding-top-xxsmall": "XSmall" !== m
                    })
                }, ee().createElement("label", {
                    ref: c,
                    htmlFor: e,
                    "aria-describedby": "".concat(e, "Hint"),
                    className: Te(pn[m], "content-emphasis")
                }, o), s && ee().createElement("div", {
                    ref: u,
                    id: "".concat(e, "Hint"),
                    className: Te(fn[m], "content-default")
                }, i)))
            }).displayName = "Radio";
            var hn = HeaderScripts,
                e = co(500),
                gn = co.n(e);

            function yn(t, e) {
                var n, r = Object.keys(t);
                return Object.getOwnPropertySymbols && (n = Object.getOwnPropertySymbols(t), e && (n = n.filter(function(e) {
                    return Object.getOwnPropertyDescriptor(t, e).enumerable
                })), r.push.apply(r, n)), r
            }

            function bn(r) {
                for (var e = 1; e < arguments.length; e++) {
                    var a = null != arguments[e] ? arguments[e] : {};
                    e % 2 ? yn(Object(a), !0).forEach(function(e) {
                        var t, n;
                        t = r, e = a[n = e], n in t ? Object.defineProperty(t, n, {
                            value: e,
                            enumerable: !0,
                            configurable: !0,
                            writable: !0
                        }) : t[n] = e
                    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(r, Object.getOwnPropertyDescriptors(a)) : yn(Object(a)).forEach(function(e) {
                        Object.defineProperty(r, e, Object.getOwnPropertyDescriptor(a, e))
                    })
                }
                return r
            }

            function wn(e) {
                return bn(bn({}, e.typography.h5), {}, {
                    fontSize: "16px",
                    paddingBottom: "8px"
                })
            }
            var Pn = {
                    width: "268px",
                    paddingBottom: "24px",
                    fontSize: "14px"
                },
                En = {
                    display: "block",
                    width: "285px"
                },
                Cn = {
                    listStyleType: "decimal",
                    listStylePosition: "outside"
                },
                In = {
                    position: "absolute",
                    left: "12px",
                    top: "10px"
                },
                Sn = (0, ye.makeStyles)()(function(e) {
                    return {
                        container: {
                            display: "flex",
                            width: "729px",
                            padding: "54.5px 40px 40px 40px",
                            flexDirection: "column",
                            alignItems: "flex-start",
                            backgroundColor: e.palette.surface[200],
                            a: {
                                textDecoration: "underline"
                            }
                        },
                        paragraph: {
                            alignSelf: "stretch",
                            width: "589px",
                            paddingBottom: "40px"
                        },
                        columnWrapper: {
                            width: "649px",
                            display: "flex",
                            alignItems: "flex-start",
                            gap: "56px",
                            alignSelf: "stretch",
                            flexDirection: "row"
                        },
                        column: {
                            flex: 1,
                            width: "268px"
                        },
                        columnRight: {
                            width: "268px",
                            flex: 1,
                            display: "flex",
                            flexDirection: "column"
                        },
                        borderRight: {
                            borderRight: "1px solid #333",
                            paddingRight: "24px",
                            display: "flex",
                            flexDirection: "column"
                        },
                        list: {
                            listStyleType: "decimal",
                            listStylePosition: "inside",
                            paddingLeft: "20px",
                            display: "inline-grid",
                            gap: "20px",
                            fontSize: "14px"
                        },
                        qrBox: {
                            display: "flex",
                            width: "268px",
                            height: "190px",
                            padding: "20px",
                            justifyContent: "center",
                            alignItems: "center",
                            gap: "8px",
                            alignSelf: "stretch",
                            borderRadius: "8px",
                            background: "rgba(208, 217, 251, 0.04)"
                        },
                        qrImage: {
                            width: "100px",
                            height: "100px",
                            objectFit: "contain",
                            border: "8px solid white",
                            borderRadius: "12px"
                        },
                        message: {}
                    }
                }),
                xn = (0, ye.makeStyles)()(function(e) {
                    return {
                        root: {
                            width: "350px",
                            height: "284px",
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "center",
                            textAlign: "center",
                            fontSize: "20px",
                            fontWeight: 600,
                            padding: "54px 24px 24px",
                            backgroundColor: e.palette.surface[200]
                        },
                        logoBox: {
                            width: "72px"
                        },
                        logoImage: {
                            width: "72px",
                            height: "72px"
                        },
                        message: {
                            lineHeight: "120%",
                            letterSpacing: "-0.2px",
                            padding: "24px"
                        },
                        button: {
                            width: "302px",
                            height: "40px",
                            fontSize: "14px"
                        }
                    }
                }),
                An = ((0, ye.makeStyles)()(function(e) {
                    return {
                        foreground: {
                            padding: 5,
                            borderRadius: 5,
                            backgroundColor: e.palette.content.standard,
                            color: e.palette.content.inverse
                        }
                    }
                }), "Action.Close"),
                Tn = "Label.RobloxExciteToDownload",
                On = "Title.DownloadPage",
                kn = "Label.RobloxLoadingToPlay",
                Rn = "Heading.DownloadConfirmation",
                Un = "Label.FollowInstallSteps",
                Ln = "Label.RetryDownload",
                Nn = "Heading.InstallInstructions",
                Dn = "Response.Dialog.MacFirstInstruction",
                jn = "Response.Dialog.WindowsFirstInstruction",
                Bn = "Response.Dialog.SecondInstruction",
                Mn = "Response.Dialog.ThirdInstruction",
                Gn = "Response.Dialog.FourthInstruction",
                Fn = "Heading.MobileAppDownloadOption",
                _n = "Label.MobileAppQrCode";

            function Vn(t, e) {
                var n, r = Object.keys(t);
                return Object.getOwnPropertySymbols && (n = Object.getOwnPropertySymbols(t), e && (n = n.filter(function(e) {
                    return Object.getOwnPropertyDescriptor(t, e).enumerable
                })), r.push.apply(r, n)), r
            }

            function Wn(r) {
                for (var e = 1; e < arguments.length; e++) {
                    var a = null != arguments[e] ? arguments[e] : {};
                    e % 2 ? Vn(Object(a), !0).forEach(function(e) {
                        var t, n;
                        t = r, e = a[n = e], n in t ? Object.defineProperty(t, n, {
                            value: e,
                            enumerable: !0,
                            configurable: !0,
                            writable: !0
                        }) : t[n] = e
                    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(r, Object.getOwnPropertyDescriptors(a)) : Vn(Object(a)).forEach(function(e) {
                        Object.defineProperty(r, e, Object.getOwnPropertyDescriptor(a, e))
                    })
                }
                return r
            }

            function Hn(e, t) {
                return function(e) {
                    if (Array.isArray(e)) return e
                }(e) || function(e, t) {
                    if ("undefined" == typeof Symbol || !(Symbol.iterator in Object(e))) return;
                    var n = [],
                        r = !0,
                        a = !1,
                        o = void 0;
                    try {
                        for (var i, l = e[Symbol.iterator](); !(r = (i = l.next()).done) && (n.push(i.value), !t || n.length !== t); r = !0);
                    } catch (e) {
                        a = !0, o = e
                    } finally {
                        try {
                            r || null == l.return || l.return()
                        } finally {
                            if (a) throw o
                        }
                    }
                    return n
                }(e, t) || function(e, t) {
                    if (!e) return;
                    if ("string" == typeof e) return zn(e, t);
                    var n = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === n && e.constructor && (n = e.constructor.name);
                    if ("Map" === n || "Set" === n) return Array.from(e);
                    if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return zn(e, t)
                }(e, t) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }

            function zn(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
                return r
            }

            function qn(e) {
                return e = e.fill, ee().createElement("svg", {
                    xmlns: "http://www.w3.org/2000/svg",
                    width: "28",
                    height: "28",
                    viewBox: "0 0 28 28",
                    fill: "none"
                }, ee().createElement("path", {
                    fillRule: "evenodd",
                    clipRule: "evenodd",
                    d: "M6.53033 5.46967C6.23744 5.17678 5.76256 5.17678 5.46967 5.46967C5.17678 5.76256 5.17678 6.23744 5.46967 6.53033L12.9393 14L5.46967 21.4697C5.17678 21.7626 5.17678 22.2374 5.46967 22.5303C5.76256 22.8232 6.23744 22.8232 6.53033 22.5303L14 15.0607L21.4697 22.5303C21.7626 22.8232 22.2374 22.8232 22.5303 22.5303C22.8232 22.2374 22.8232 21.7626 22.5303 21.4697L15.0607 14L22.5303 6.53033C22.8232 6.23744 22.8232 5.76256 22.5303 5.46967C22.2374 5.17678 21.7626 5.17678 21.4697 5.46967L14 12.9393L6.53033 5.46967Z",
                    fill: e
                }))
            }

            function Jn(e) {
                var t = e.inputMessage,
                    n = e.bottomButton,
                    r = e.onClose,
                    a = (u = xn().classes).root,
                    o = u.logoBox,
                    i = u.logoImage,
                    l = u.message,
                    c = u.button,
                    e = (0, ye.useTheme)(),
                    u = (0, re.useTranslation)().translate;
                return ee().createElement("section", {
                    className: a
                }, ee().createElement(ye.IconButton, {
                    "aria-label": u(An),
                    color: "inherit",
                    onClick: r,
                    size: "small",
                    style: In
                }, ee().createElement(qn, {
                    fill: e.palette.content.standard
                })), ee().createElement(ye.Grid, {
                    className: "flex flex-col items-center"
                }, ee().createElement(ye.Grid, {
                    className: o
                }, ee().createElement(Ie, {
                    className: i
                })), ee().createElement("p", {
                    className: l,
                    style: bn(bn({}, (e = e).typography.h5), {}, {
                        fontSize: "20px",
                        color: e.palette.content.standard
                    })
                }, t)), ee().createElement(ye.Grid, {
                    className: "flex flex-col items-stretch ".concat(c)
                }, n))
            }

            function Xn(e) {
                var t = e.isOpen,
                    n = e.onClose,
                    e = (0, re.useTranslation)().translate;
                return ee().createElement(ye.Dialog, {
                    open: t,
                    onClose: n
                }, ee().createElement(Jn, {
                    inputMessage: ee().createElement("span", {
                        style: En
                    }, (t = (e = Hn((t = e(kn)).split("."), 2))[0], e = e[1], ee().createElement(ee().Fragment, null, t && ee().createElement(ee().Fragment, null, [t, "."], ee().createElement("br", null)), e))),
                    bottomButton: ee().createElement(Re, {
                        variant: "Emphasis",
                        size: "Medium",
                        isLoading: !0
                    }),
                    onClose: n
                }))
            }

            function Kn(e) {
                var t = e.isOpen,
                    n = e.onClose,
                    r = e.callback,
                    e = (0, re.useTranslation)().translate;
                return ee().createElement(ye.Dialog, {
                    open: t,
                    onClose: n
                }, ee().createElement(Jn, {
                    inputMessage: ee().createElement("span", {
                        style: En
                    }, e(Tn)),
                    bottomButton: ee().createElement(Re, {
                        variant: "Emphasis",
                        size: "Medium",
                        onClick: r
                    }, e(On)),
                    onClose: n
                }))
            }

            function Yn(e) {
                var t = e.isOpen,
                    n = e.onClose,
                    r = e.continueInstallClick,
                    a = e.gameLaunchParams,
                    o = (0, re.useTranslation)().translate,
                    i = (0, ye.useTheme)(),
                    l = Sn().classes,
                    c = l.container,
                    u = l.paragraph,
                    s = l.columnWrapper,
                    d = l.column,
                    p = l.borderRight,
                    f = l.list,
                    m = l.columnRight,
                    v = l.qrBox,
                    h = l.qrImage;
                return (0, $.useEffect)(function() {
                    var t = null,
                        e = null,
                        n = new MutationObserver(function() {
                            (t = document.querySelector(".custom-click-link")) && (t.classList.remove("disabled"), e = function(e) {
                                e.data = a, r.call(t, e)
                            }, t.addEventListener("click", e), n.disconnect())
                        });
                    return n.observe(document.body, {
                            childList: !0,
                            subtree: !0
                        }),
                        function() {
                            n.disconnect(), t && e && t.removeEventListener("click", e)
                        }
                }, [r, a]), e = Dn, l = Qn("/download/client?os=mac"), hn.jsClientDeviceIdentifier.isWindows && (e = jn, l = Qn("/download/client?os=win")), ee().createElement(ye.Dialog, {
                    open: t,
                    onClose: n,
                    maxWidth: !1
                }, ee().createElement(ye.Grid, {
                    className: c
                }, ee().createElement(ye.IconButton, {
                    "aria-label": o(An),
                    color: "inherit",
                    onClick: n,
                    size: "small",
                    style: In
                }, ee().createElement(qn, {
                    fill: i.palette.content.standard
                })), ee().createElement("h2", {
                    style: bn({}, i.typography.h2)
                }, o(Rn)), ee().createElement("p", {
                    className: u,
                    dangerouslySetInnerHTML: {
                        __html: "".concat(o(Un), " ").concat(o(Ln, {
                            startLink: '<a href="'.concat(l, '">'),
                            endLink: "</a>"
                        }))
                    }
                }), ee().createElement(ye.Grid, {
                    className: s
                }, ee().createElement(ye.Grid, {
                    className: "".concat(d, " ").concat(p)
                }, ee().createElement("h5", {
                    style: wn(i)
                }, o(Nn)), ee().createElement("ol", {
                    className: f
                }, ee().createElement("li", {
                    style: Cn,
                    dangerouslySetInnerHTML: {
                        __html: o(e, {
                            startBold: "<b>",
                            endBold: "</b>"
                        })
                    }
                }), ee().createElement("li", {
                    style: Cn,
                    dangerouslySetInnerHTML: {
                        __html: o(Bn, {
                            startBold: "<b>",
                            endBold: "</b>"
                        })
                    }
                }), ee().createElement("li", {
                    style: Cn
                }, o(Mn)), ee().createElement("li", {
                    style: Cn,
                    dangerouslySetInnerHTML: {
                        __html: o(Gn, {
                            startLink: '<a class="custom-click-link">',
                            endLink: "</a>"
                        })
                    }
                }))), ee().createElement(ye.Grid, {
                    className: m
                }, ee().createElement("h5", {
                    style: Wn({}, wn(i))
                }, o(Fn)), ee().createElement("p", {
                    style: Pn
                }, o(_n)), ee().createElement(ye.Grid, {
                    className: v
                }, ee().createElement("img", {
                    src: gn(),
                    alt: "QR Code",
                    className: h
                }))))))
            }
            var Qn = N.Endpoints.getAbsoluteUrl,
                Zn = {
                    common: ["Common.VisitGame"],
                    feature: "Feature.DownloadLanding"
                };

            function $n(e, t, n, r, a, o, i) {
                try {
                    var l = e[o](i),
                        c = l.value
                } catch (e) {
                    return void n(e)
                }
                l.done ? t(c) : Promise.resolve(c).then(r, a)
            }

            function er(l) {
                return function() {
                    var e = this,
                        i = arguments;
                    return new Promise(function(t, n) {
                        var r = l.apply(e, i);

                        function a(e) {
                            $n(r, t, n, a, o, "next", e)
                        }

                        function o(e) {
                            $n(r, t, n, a, o, "throw", e)
                        }
                        a(void 0)
                    })
                }
            }

            function tr(t, e) {
                var n, r = Object.keys(t);
                return Object.getOwnPropertySymbols && (n = Object.getOwnPropertySymbols(t), e && (n = n.filter(function(e) {
                    return Object.getOwnPropertyDescriptor(t, e).enumerable
                })), r.push.apply(r, n)), r
            }

            function nr(r) {
                for (var e = 1; e < arguments.length; e++) {
                    var a = null != arguments[e] ? arguments[e] : {};
                    e % 2 ? tr(Object(a), !0).forEach(function(e) {
                        var t, n;
                        t = r, e = a[n = e], n in t ? Object.defineProperty(t, n, {
                            value: e,
                            enumerable: !0,
                            configurable: !0,
                            writable: !0
                        }) : t[n] = e
                    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(r, Object.getOwnPropertyDescriptors(a)) : tr(Object(a)).forEach(function(e) {
                        Object.defineProperty(r, e, Object.getOwnPropertyDescriptor(a, e))
                    })
                }
                return r
            }

            function rr(e, t) {
                return function(e) {
                    if (Array.isArray(e)) return e
                }(e) || function(e, t) {
                    if ("undefined" == typeof Symbol || !(Symbol.iterator in Object(e))) return;
                    var n = [],
                        r = !0,
                        a = !1,
                        o = void 0;
                    try {
                        for (var i, l = e[Symbol.iterator](); !(r = (i = l.next()).done) && (n.push(i.value), !t || n.length !== t); r = !0);
                    } catch (e) {
                        a = !0, o = e
                    } finally {
                        try {
                            r || null == l.return || l.return()
                        } finally {
                            if (a) throw o
                        }
                    }
                    return n
                }(e, t) || function(e, t) {
                    if (!e) return;
                    if ("string" == typeof e) return ar(e, t);
                    var n = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === n && e.constructor && (n = e.constructor.name);
                    if ("Map" === n || "Set" === n) return Array.from(e);
                    if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return ar(e, t)
                }(e, t) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }

            function ar(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
                return r
            }
            var or = null,
                ir = null,
                lr = {
                    isInstalling: !1,
                    statusInterval: 0,
                    robloxLocale: "",
                    gameLocale: "",
                    protocolUrlSeparator: "+",
                    protocolUrlIncludesLaunchTime: !1,
                    protocolDetectionEnabled: !1,
                    avatarParamEnabled: !0,
                    separateScriptParamsEnabled: !1,
                    waitTimeBeforeFailure: 300,
                    protocolNameForStudio: "roblox-studio",
                    protocolNameForClient: "roblox-client",
                    logger: null,
                    channel: "",
                    studioChannel: "",
                    playerChannel: "",
                    isDuarAutoOptInEnabled: !1,
                    isDuarOptOutDisabled: !1,
                    isJoinAttemptIdEnabled: !1
                },
                cr = {
                    Global: "Global"
                },
                ur = {
                    edit: "edit",
                    plugin: "plugin",
                    play: "play",
                    build: "build",
                    app: "app",
                    asset: "asset"
                };

            function sr(e) {
                return e === ur.edit || e === ur.plugin || e === ur.asset
            }
            var dr = function() {
                var e = rr((0, $.useState)(!0), 2),
                    t = e[0],
                    n = e[1],
                    e = (0, $.useCallback)(function() {
                        return n(!1)
                    }, []);
                return ee().createElement(re.WebBloxProvider, null, ee().createElement(re.TranslationProvider, {
                    config: Zn
                }, ee().createElement(Xn, {
                    isOpen: t,
                    onClose: e
                })))
            };

            function pr() {
                var e = "react-dialog-container",
                    t = document.getElementById(e);
                return t ? t.innerHTML = "" : ((t = document.createElement("div")).id = e, document.body.appendChild(t)), t
            }

            function fr() {
                if (!ir) {
                    var t = "Website.DownloadFlow",
                        e = N.ExperimentationService.getAllValuesForLayer(t);
                    if (!e || "function" != typeof e.then) return ir = Promise.resolve(null);
                    ir = e.then(function(e) {
                        e && N.ExperimentationService.logLayerExposure(t), or = !0 === (null == e ? void 0 : e.showNewInstruction);
                        e = !!N.DeviceMeta && (0, N.DeviceMeta)().isDesktop;
                        return or && e
                    })
                }
                return ir
            }

            function mr(r, a) {
                var t;
                t = function(e) {
                    function t() {
                        clearTimeout(n), r()
                    }
                    var n = setTimeout(function() {
                        l().modal.close(),
                            function(e, t) {
                                var n = 2 < arguments.length && void 0 !== arguments[2] && arguments[2],
                                    r = sr(t.launchMode);
                                if (n) {
                                    n = pr();
                                    return ne().render(ee().createElement(Ur, {
                                        gameLaunchParams: t
                                    }), n)
                                }
                                r = r ? N.PlaceLauncher.Resources.ProtocolHandlerAreYouInstalled.studio : N.PlaceLauncher.Resources.ProtocolHandlerAreYouInstalled.play, N.Dialog.open({
                                    bodyContent: r.content,
                                    allowHtmlContentInBody: !0,
                                    showAccept: !0,
                                    acceptColor: N.Dialog.green,
                                    acceptText: r.buttonText,
                                    showDecline: !1,
                                    dismissable: !1,
                                    xToCancel: !0,
                                    footerText: r.footerContent,
                                    allowHtmlContentInFooter: !0,
                                    onAccept: function() {
                                        Rr(t)
                                    },
                                    cssClass: "protocolhandler-are-you-installed-modal"
                                })
                            }(t, a, e)
                    }, 5e3);
                    ! function(e, t, n) {
                        var r, n = 2 < arguments.length && void 0 !== n && n,
                            t = sr(t);
                        n ? (r = pr(), ne().render(ee().createElement(dr, null), r)) : (r = (t ? N.PlaceLauncher.Resources.ProtocolHandlerStartingDialog.studio : N.PlaceLauncher.Resources.ProtocolHandlerStartingDialog.play).content, t = N.PlaceLauncher.Resources.ProtocolHandlerStartingDialog.loader, N.Dialog.open({
                            bodyContent: r + t,
                            allowHtmlContentInBody: !0,
                            showAccept: !1,
                            showDecline: !1,
                            dismissable: !1,
                            cssClass: "protocolhandler-starting-modal",
                            onCloseCallback: e,
                            onCancel: function() {
                                e(), l().modal.close()
                            }
                        }))
                    }(t, a.launchMode, e)
                }, null !== or ? t(or) : fr().then(function(e) {
                    t(e)
                })
            }

            function vr() {
                l().modal.close();
                var e = new N.TranslationResourceProvider,
                    t = e.getTranslationResource("Common.VisitGame"),
                    e = e.getTranslationResource("CommonUI.Controls");
                N.Dialog.open({
                    titleText: t.get("Heading.ErrorStartingGame"),
                    bodyContent: t.get("Response.Dialog.ErrorLaunching"),
                    acceptText: e.get("Action.OK") || "OK",
                    showDecline: !1
                })
            }

            function hr(t) {
                var n = new(l().Deferred);
                return clearInterval(lr.statusInterval), lr.statusInterval = setInterval(function() {
                    var e = "".concat(N.EnvironmentUrls.matchmakingApi, "/v1/client-status");
                    l().ajax({
                        method: "GET",
                        url: e,
                        dataType: "json",
                        contentType: "application/json",
                        cache: !1,
                        success: function(e) {
                            "Unknown" !== (null == e ? void 0 : e.status) && (n.resolve(t), clearInterval(lr.statusInterval))
                        }
                    })
                }, 3e3), n
            }

            function gr(e) {
                l().modal.close();
                e = {
                    launchMethod: "Protocol",
                    params: e
                };
                l()(M).trigger(M.startClientSucceededEvent, e), lr.isInstalling && (l()(M).trigger(M.successfulInstallEvent, e), lr.isInstalling = !1)
            }

            function yr(e) {
                return !1
            }

            function br(e) {
                var r = new(l().Deferred),
                    t = sr(e.launchMode),
                    a = nr({}, e);
                return !N.CurrentUser.isAuthenticated || t ? (r.resolve(a), r) : lr.getClientAssertionEnabled().then(function(e) {
                    return e ? lr.doClientAssertionRequest().then(function(e) {
                        return n(e.clientAssertion)
                    }, function() {
                        return n()
                    }) : n()
                }, function() {
                    return n()
                });

                function n(e) {
                    return lr.doAuthTicketRequest(e).then(function(e, t, n) {
                        n = n.getResponseHeader("RBX-Authentication-Ticket");
                        return n && 0 < n.length ? (a.gameInfo = n, r.resolve(a)) : r.reject(), r
                    })
                }
            }

            function wr(e) {
                var t;
                lr.protocolDetectionEnabled && void 0 !== navigator.msLaunchUri ? navigator.msLaunchUri(e, function() {}, function() {}) : (0 < (t = l()("iframe#gamelaunch")).length && t.remove(), t = l()("<iframe id='gamelaunch' class='hidden'></iframe>").attr("src", e), l()("body").append(t), t = new Event("ProtocolLaunchStartSelenium"), window.dispatchEvent(t))
            }

            function Pr(e) {
                var t, n = new(l().Deferred),
                    r = sr(e.launchMode),
                    a = lr.protocolUrlSeparator,
                    o = "".concat(e.protocolName, ":"),
                    i = [];
                return i.push(1), i.push("launchmode:".concat(e.launchMode)), !e.gameInfo || e.protocolName === lr.protocolNameForStudio && 0 === e.gameInfo.indexOf("Guest:") || i.push("gameinfo:".concat(encodeURIComponent(e.gameInfo))), lr.protocolUrlIncludesLaunchTime && i.push("launchtime:".concat(e.launchTime)), "True" === N.PlaceLauncher.Resources.IsProtocolHandlerBaseUrlParamEnabled && (t = N.EnvironmentUrls.websiteUrl || "https://".concat(window.location.host), i.push("baseUrl:".concat(encodeURIComponent(t)))), r && N.CurrentUser.isAuthenticated && (i.push("distributorType:".concat(cr.Global)), i.push("userId:".concat(N.CurrentUser.userId))), r && i.push("browser:".concat((0, f.getCurrentBrowser)())), l().each(e.otherParams, function(e, t) {
                    e === t ? i.push(e) : i.push("".concat(e, ":").concat(encodeURIComponent(t)))
                }), o += i.join(a), M.gameLaunchLogger && M.gameLaunchLogger.logToConsole("launchProtocolUrl: ".concat(JSON.stringify({
                    url: o,
                    params: e
                }))), wr(o), n.resolve(e), n
            }

            function Er(e) {
                return l().when(br(e), (e = "".concat(N.EnvironmentUrls.matchmakingApi, "/v1/client-status"), null === (e = l().ajax({
                    method: "POST",
                    url: e,
                    contentType: "application/json",
                    data: {
                        status: "Unknown"
                    },
                    dataType: "json"
                })) || void 0 === e ? void 0 : e.success)).then(Pr, vr).then(hr).then(gr, yr)
            }

            function Cr(e) {
                return l()(this).hasClass("disabled") || (Er(e.data), void 0 === (e = l()("#ProtocolHandlerClickAlwaysAllowed")).data("hideRememberOverlay") && e.show()), !1
            }

            function Ir(e) {
                e = nr({}, e);
                return e.launchTime = (new Date).getTime(), e.otherParams.browsertrackerid = N.Cookies.getBrowserTrackerId(), e.otherParams.robloxLocale = lr.robloxLocale, e.otherParams.gameLocale = lr.gameLocale, e.otherParams.channel = lr.channel, e.protocolName === lr.protocolNameForStudio ? e.otherParams.channel = lr.studioChannel : e.otherParams.channel = lr.playerChannel, lr.isDuarAutoOptInEnabled && e.protocolName === lr.protocolNameForClient && !e.otherParams.LaunchExp && (lr.isDuarOptOutDisabled ? e.otherParams.LaunchExp = "InApp" : e.otherParams.LaunchExp = "PreferInApp"), l()(M).trigger(M.startClientAttemptedEvent, {
                    launchMethod: "Protocol",
                    params: e
                }), mr(function() {}, e), Er(e)
            }

            function Sr(e, t) {
                var n = " ";
                N.Endpoints && N.Endpoints.Urls && (n = "".concat(N.Endpoints.getAbsoluteUrl("/Game/PlaceLauncher.ashx"), "?")), "h" !== n[0] && (n = "http://".concat(window.location.host) + "/Game/PlaceLauncher.ashx?"), n = n.replace("placelauncher", "PlaceLauncher");
                e = {
                    request: e,
                    browserTrackerId: N.Cookies.getBrowserTrackerId()
                };
                return l().extend(e, t), n + l().param(e)
            }

            function xr(e, t, n) {
                return r = "Edit.ashx", a = e, e = t, t = n, n = " ", N.Endpoints && N.Endpoints.Urls && (n = "".concat(N.Endpoints.getAbsoluteUrl("/Game/".concat(r)), "?")), "h" !== n[0] && (n = "http://".concat(window.location.host) + "/Game/".concat(r, "?")), e = {
                    placeId: a,
                    upload: t ? a : "",
                    universeId: e,
                    testMode: !1
                }, n + l().param(e);
                var r, a
            }

            function Ar() {
                return Tr.apply(this, arguments)
            }

            function Tr() {
                return (Tr = er(regeneratorRuntime.mark(function e() {
                    var t, n, r, a;
                    return regeneratorRuntime.wrap(function(e) {
                        for (;;) switch (e.prev = e.next) {
                            case 0:
                                return t = document.getElementById("downloadInstallerIFrame"), n = "/download/client", r = "", t.referrerPolicy = "no-referrer", e.next = 6, ge(window.location.toString());
                            case 6:
                                a = e.sent, r = a, t.src = "".concat(n).concat(r);
                            case 9:
                            case "end":
                                return e.stop()
                        }
                    }, e)
                }))).apply(this, arguments)
            }

            function Or() {
                return (Or = er(regeneratorRuntime.mark(function e(t, n) {
                    var r, a;
                    return regeneratorRuntime.wrap(function(e) {
                        for (;;) switch (e.prev = e.next) {
                            case 0:
                                if (r = nr({}, t), a = r.gameInfo, void 0 !== r.gameInfo && (r.gameInfo = void 0), l()(M).trigger(M.beginInstallEvent, {
                                        launchMethod: "Protocol",
                                        params: r
                                    }), lr.isInstalling = !0, r.url = window.location.href, void 0 !== a && (r.gameInfo = a), !n) {
                                    e.next = 11;
                                    break
                                }
                                document.getElementById("downloadInstallerIFrame").src = "/download/studio", e.next = 13;
                                break;
                            case 11:
                                return e.next = 13, Ar();
                            case 13:
                            case "end":
                                return e.stop()
                        }
                    }, e)
                }))).apply(this, arguments)
            }
            var kr = function(e) {
                var t = e.gameLaunchParams,
                    n = rr((0, $.useState)(!0), 2),
                    e = n[0],
                    r = n[1],
                    n = (0, $.useCallback)(function() {
                        return r(!1)
                    }, []);
                return ee().createElement(re.WebBloxProvider, null, ee().createElement(re.TranslationProvider, {
                    config: Zn
                }, ee().createElement(Yn, {
                    isOpen: e,
                    onClose: n,
                    continueInstallClick: Cr,
                    gameLaunchParams: t
                })))
            };

            function Rr(e, t) {
                var n, r = 1 < arguments.length && void 0 !== t && t,
                    t = sr(e.launchMode);
                l().modal.close(), t || (r ? (n = pr(), ne().render(ee().createElement(kr, {
                        gameLaunchParams: e
                    }), n)) : N.Dialog.open({
                        titleText: l()("#InstallationInstructions .ph-modal-header .title").text(),
                        allowHtmlContentInBody: !0,
                        bodyContent: l()("#InstallationInstructions .modal-content-container").html(),
                        allowHtmlContentInFooter: !0,
                        footerText: l()("#InstallationInstructions .xsmall").html(),
                        acceptColor: N.Dialog.none,
                        declineColor: N.Dialog.none,
                        cssClass: "install-instructions-modal",
                        xToCancel: !0,
                        onCloseCallback: function() {
                            l()("#ProtocolHandlerClickAlwaysAllowed").hide()
                        }
                    }), 0 === l()("#GameLaunchInstructionsLinkScript").length && lr.attachManualDownloadToLink(), e.placeId && null !== window.localStorage.getItem("ref_info") && (n = function() {
                        var e = window.localStorage.getItem("ref_info");
                        if (window.localStorage.removeItem("ref_info"), !e) return {};
                        try {
                            return JSON.parse(atob(e))
                        } catch (e) {
                            return {}
                        }
                    }(), e.referredByPlayerId = n[e.placeId]), setTimeout(function() {
                        l()(".VisitButtonContinueGLI a").removeClass("disabled").click(e, Cr)
                    }, 5e3)),
                    function() {
                        Or.apply(this, arguments)
                    }(e, t)
            }
            var Ur = function(e) {
                var t = e.gameLaunchParams,
                    n = rr((0, $.useState)(!0), 2),
                    e = n[0],
                    r = n[1],
                    a = (0, $.useCallback)(function() {
                        return r(!1)
                    }, []),
                    n = (0, $.useCallback)(er(regeneratorRuntime.mark(function e() {
                        return regeneratorRuntime.wrap(function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    try {
                                        Rr(t, !0)
                                    } finally {
                                        a()
                                    }
                                case 1:
                                case "end":
                                    return e.stop()
                            }
                        }, e)
                    })), [t, a]);
                return ee().createElement(re.WebBloxProvider, null, ee().createElement(re.TranslationProvider, {
                    config: Zn
                }, ee().createElement(Kn, {
                    isOpen: e,
                    onClose: a,
                    callback: n
                })))
            };

            function Lr() {
                return Nr.apply(this, arguments)
            }

            function Nr() {
                return (Nr = er(regeneratorRuntime.mark(function e() {
                    return regeneratorRuntime.wrap(function(e) {
                        for (;;) switch (e.prev = e.next) {
                            case 0:
                                return l()(M).trigger(M.manualDownloadEvent, {
                                    launchMethod: "Protocol",
                                    params: {}
                                }), e.next = 3, Ar();
                            case 3:
                            case "end":
                                return e.stop()
                        }
                    }, e)
                }))).apply(this, arguments)
            }

            function Dr() {
                return (Dr = er(regeneratorRuntime.mark(function e() {
                    return regeneratorRuntime.wrap(function(e) {
                        for (;;) switch (e.prev = e.next) {
                            case 0:
                                l()("body #GameLaunchManualInstallLink").click(er(regeneratorRuntime.mark(function e() {
                                    return regeneratorRuntime.wrap(function(e) {
                                        for (;;) switch (e.prev = e.next) {
                                            case 0:
                                                return e.next = 2, Lr();
                                            case 2:
                                                return e.abrupt("return", !1);
                                            case 3:
                                            case "end":
                                                return e.stop()
                                        }
                                    }, e)
                                })));
                            case 1:
                            case "end":
                                return e.stop()
                        }
                    }, e)
                }))).apply(this, arguments)
            }
            Object.assign(lr, {
                joinMultiplayerGame: function(e) {
                    var t = lr.protocolNameForClient,
                        n = Sr("RequestGame", e),
                        r = !0 === e.isPlayTogetherGame;
                    return Ir({
                        protocolName: t,
                        launchMode: "play",
                        otherParams: {
                            placelauncherurl: n
                        },
                        placeId: e.placeId,
                        isPlayTogetherGame: r,
                        launchData: e.launchData,
                        eventId: e.eventId
                    })
                },
                openStudio: function() {
                    var e = {};
                    return lr.avatarParamEnabled && (e.avatar = "avatar"), Ir({
                        protocolName: lr.protocolNameForStudio,
                        launchMode: "edit",
                        otherParams: e
                    })
                },
                tryAssetInStudio: function(e) {
                    return e = {
                        assetid: e
                    }, lr.avatarParamEnabled && (e.avatar = "avatar"), Ir({
                        protocolName: lr.protocolNameForStudio,
                        launchMode: "asset",
                        otherParams: e
                    })
                },
                openPluginInStudio: function(e) {
                    e = {
                        pluginid: e
                    }, lr.avatarParamEnabled && (e.avatar = "avatar"), Ir({
                        protocolName: lr.protocolNameForStudio,
                        launchMode: "plugin",
                        otherParams: e
                    })
                },
                editGameInStudio: function(e, t, n) {
                    n = lr.separateScriptParamsEnabled ? {
                        task: "EditPlace",
                        placeId: e,
                        universeId: t
                    } : {
                        script: xr(e, t, n)
                    }, lr.avatarParamEnabled && (n.avatar = "avatar"), Ir({
                        protocolName: lr.protocolNameForStudio,
                        launchMode: "edit",
                        otherParams: n,
                        placeId: e
                    })
                },
                followPlayerIntoGame: function(e) {
                    return Ir({
                        protocolName: lr.protocolNameForClient,
                        launchMode: "play",
                        otherParams: {
                            placelauncherurl: Sr("RequestFollowUser", e)
                        }
                    })
                },
                joinGameInstance: function(e) {
                    var t = lr.protocolNameForClient,
                        n = Sr("RequestGameJob", e),
                        r = !0 === e.isPlayTogetherGame;
                    return Ir({
                        protocolName: t,
                        launchMode: "play",
                        otherParams: {
                            placelauncherurl: n
                        },
                        placeId: e.placeId,
                        isPlayTogetherGame: r
                    })
                },
                joinPrivateGame: function(e) {
                    return Ir({
                        protocolName: lr.protocolNameForClient,
                        launchMode: "play",
                        otherParams: {
                            placelauncherurl: Sr("RequestPrivateGame", e)
                        },
                        placeId: e.placeId
                    })
                },
                playTogetherGame: function(e) {
                    return Ir({
                        protocolName: lr.protocolNameForClient,
                        launchMode: "play",
                        otherParams: {
                            placelauncherurl: Sr("RequestPlayTogetherGame", e)
                        },
                        placeId: e.placeId,
                        conversationId: e.conversationId
                    })
                },
                manualDownload: Lr,
                attachManualDownloadToLink: function() {
                    return Dr.apply(this, arguments)
                },
                startDownload: Ar,
                setLocationHref: wr,
                doAuthTicketRequest: function(e) {
                    var t = "".concat(N.EnvironmentUrls.authApi, "/v1/authentication-ticket/");
                    return l().ajax({
                        method: "POST",
                        url: t,
                        data: JSON.stringify({
                            clientAssertion: e
                        }),
                        contentType: "application/json"
                    })
                },
                doClientAssertionRequest: function() {
                    var e = "".concat(N.EnvironmentUrls.authApi, "/v1/client-assertion/");
                    return l().ajax({
                        method: "GET",
                        url: e,
                        contentType: "application/json",
                        timeout: 1e4
                    })
                },
                getClientAssertionEnabled: function() {
                    var e = "".concat(N.EnvironmentUrls.apiGatewayUrl, "/universal-app-configuration/v1/behaviors/auth-ticket-client-assertion/content");
                    return l().ajax({
                        method: "GET",
                        url: e,
                        contentType: "application/json",
                        timeout: 1e4
                    }).then(function(e) {
                        return Boolean(e && "true" === e.isClientAssertionEnabled)
                    }, function() {
                        return !1
                    })
                },
                openDesktopUniversalApp: function() {
                    var e = {},
                        t = lr.protocolNameForClient;
                    return e.protocolName = t, e.launchTime = (new Date).getTime(), e.launchMode = ur.app, e.otherParams = {}, e.otherParams.browsertrackerid = N.Cookies.getBrowserTrackerId(), e.otherParams.robloxLocale = lr.robloxLocale, e.otherParams.gameLocale = lr.gameLocale, e.otherParams.LaunchExp = "InApp", l()(M).trigger(M.startClientAttemptedEvent, {
                        launchMethod: "Protocol",
                        params: e
                    }), mr(function() {}, e), Er(e)
                },
                showDialog: mr,
                showLaunchFailureDialog: vr,
                cleanUpAndLogSuccess: gr,
                cleanUpAndLogFailure: yr,
                startGameWithDeepLinkUrl: function(e, t) {
                    mr(function() {}, {
                        launchMode: "play",
                        protocolName: lr.protocolNameForClient,
                        placeId: t
                    }), wr(e), setTimeout(function() {
                        l().modal.close()
                    }, 6e4)
                }
            }), l()(document).ready(function() {
                M.setGameLaunchInterface(lr);
                var e = l()("#PlaceLauncherStatusPanel");
                fr(), lr.protocolNameForClient = e.data("protocol-name-for-client"), lr.protocolNameForStudio = e.data("protocol-name-for-studio"), lr.protocolUrlIncludesLaunchTime = e.data("protocol-url-includes-launchtime"), lr.protocolDetectionEnabled = e.data("protocol-detection-enabled"), lr.separateScriptParamsEnabled = e.data("protocol-separate-script-parameters-enabled"), lr.avatarParamEnabled = e.data("protocol-avatar-parameter-enabled"), lr.isJoinAttemptIdEnabled = "True" === (null !== (t = e.data("is-join-attempt-id-enabled")) && void 0 !== t ? t : "False"), lr.robloxLocale = e.data("protocol-roblox-locale"), lr.gameLocale = e.data("protocol-game-locale");
                var t = e.data("protocol-channel-name");
                "string" == typeof t && "LIVE" !== t.toUpperCase() && (lr.channel = t);
                t = e.data("protocol-studio-channel-name");
                "string" == typeof t && "LIVE" !== t.toUpperCase() && (lr.studioChannel = t);
                t = e.data("protocol-player-channel-name");
                "string" == typeof t && "LIVE" !== t.toUpperCase() && (lr.playerChannel = t), lr.logger || void 0 === window.Roblox.ProtocolHandlerLogger || (lr.logger = window.Roblox.ProtocolHandlerLogger), lr.isDuarAutoOptInEnabled = e.data("is-duar-auto-opt-in-enabled"), lr.isDuarOptOutDisabled = e.data("is-duar-opt-out-disabled")
            });
            var be = lr,
                jr = ReactStyleGuide,
                Br = window.EventTracker ? EventTracker : {
                    fireEvent: console.log,
                    start: console.log,
                    endSuccess: console.log,
                    endCancel: console.log,
                    endFailure: console.log
                },
                Mr = function() {
                    return (Mr = Object.assign || function(e) {
                        for (var t, n = 1, r = arguments.length; n < r; n++)
                            for (var a in t = arguments[n]) Object.prototype.hasOwnProperty.call(t, a) && (e[a] = t[a]);
                        return e
                    }).apply(this, arguments)
                },
                Gr = {
                    UnplayableOtherReason: "UnplayableOtherReason",
                    Playable: "Playable",
                    GuestProhibited: "GuestProhibited",
                    GameUnapproved: "GameUnapproved",
                    IncorrectConfiguration: "IncorrectConfiguration",
                    UniverseRootPlaceIsPrivate: "UniverseRootPlaceIsPrivate",
                    InsufficientPermissionFriendsOnly: "InsufficientPermissionFriendsOnly",
                    InsufficientPermissionGroupOnly: "InsufficientPermissionGroupOnly",
                    DeviceRestricted: "DeviceRestricted",
                    UnderReview: "UnderReview",
                    PurchaseRequired: "PurchaseRequired",
                    AccountRestricted: "AccountRestricted",
                    TemporarilyUnavailable: "TemporarilyUnavailable",
                    ComplianceBlocked: "ComplianceBlocked",
                    ContextualPlayabilityRegionalAvailability: "ContextualPlayabilityRegionalAvailability",
                    ContextualPlayabilityRegionalCompliance: "ContextualPlayabilityRegionalCompliance",
                    ContextualPlayabilityAgeRecommendationParentalControls: "ContextualPlayabilityAgeRecommendationParentalControls",
                    ContextualPlayabilityAgeGated: "ContextualPlayabilityAgeGated",
                    PlaceHasNoPublishedVersion: "PlaceHasNoPublishedVersion",
                    ContextualPlayabilityUnverifiedSeventeenPlusUser: "ContextualPlayabilityUnverifiedSeventeenPlusUser",
                    FiatPurchaseRequired: "FiatPurchaseRequired",
                    ContextualPlayabilityUnrated: "ContextualPlayabilityUnrated",
                    ContextualPlayabilityAgeGatedByDescriptor: "ContextualPlayabilityAgeGatedByDescriptor",
                    ContextualPlayabilityExperienceBlockedParentalControls: "ContextualPlayabilityExperienceBlockedParentalControls"
                },
                Fr = {
                    playButtonErrorStatusTranslationMap: ((te = {})[Gr.UnplayableOtherReason] = "UnplayableError.UnplayableOther", te[Gr.TemporarilyUnavailable] = "UnplayableError.TemporarilyUnavailable", te[Gr.GameUnapproved] = "UnplayableError.GameUnapproved", te[Gr.IncorrectConfiguration] = "UnplayableError.IncorrectConfiguration", te[Gr.UniverseRootPlaceIsPrivate] = "UnplayableError.UniverseRootPlaceIsPrivate", te[Gr.InsufficientPermissionFriendsOnly] = "UnplayableError.InsufficientPermissionFriendsOnly", te[Gr.InsufficientPermissionGroupOnly] = "UnplayableError.InsufficientPermissionGroupOnly", te[Gr.DeviceRestricted] = "UnplayableError.DeviceRestrictedDefault", te[Gr.UnderReview] = "UnplayableError.UnderReview", te[Gr.AccountRestricted] = "UnplayableError.AccountRestricted", te[Gr.ComplianceBlocked] = "UnplayableError.ComplianceBlocked", te[Gr.ContextualPlayabilityRegionalAvailability] = "UnplayableError.ContextualPlayabilityRegionalAvailability", te[Gr.ContextualPlayabilityRegionalCompliance] = "UnplayableError.ContextualPlayabilityRegionalCompliance", te[Gr.ContextualPlayabilityAgeGated] = "UnplayableError.ContextualPlayabilityAgeGated", te[Gr.PlaceHasNoPublishedVersion] = "UnplayableError.PlaceHasNoPublishedVersion", te[Gr.ContextualPlayabilityUnrated] = "UnplayableError.ContextualPlayabilityUnrated", te[Gr.ContextualPlayabilityAgeGatedByDescriptor] = "UnplayableError.ContextualPlayabilityAgeGatedByDescriptor", te[Gr.ContextualPlayabilityExperienceBlockedParentalControls] = "UnplayableError.ContextualPlayabilityExperienceBlockedParentalControls", te),
                    playButtonTextTranslationMap: {
                        ActionNeeded: "PlayButtonText.ActionNeeded",
                        Unplayable: "PlayButtonText.Unavailable",
                        Buy: "PlayButtonText.Buy"
                    },
                    eventStreamProperties: function(e, t) {
                        return {
                            eventName: "playGameClicked",
                            ctx: "click",
                            properties: Mr(Mr({}, t), {
                                placeId: e
                            }),
                            gamePlayIntentEventCtx: "PlayButton"
                        }
                    },
                    PlayabilityStatus: Gr,
                    counterEvents: {
                        ActionNeeded: "ActionNeededButtonShown",
                        Unplayable: "UnplayableErrorShown",
                        SeventeenPlusInPlayable: "ReachedSeventeenPlusCaseInPlayable",
                        PlayButtonUpsellSelfUpdateSettingTriggered: "PlayButtonUpsellSelfUpdateSettingTriggered",
                        PlayButtonUpsellAskYourParentTriggered: "PlayButtonUpsellAskYourParentTriggered",
                        PlayButtonUpsellRestrictedUnplayableTriggered: "PlayButtonUpsellRestrictedUnplayableTriggered",
                        PlayButtonUpsellAgeRestrictionVerificationTriggered: "PlayButtonUpsellAgeRestrictionVerificationTriggered",
                        PlayButtonUpsellUnknownSettingOrAge: "PlayButtonUpsellUnknownSettingOrAge",
                        PlayButtonUpsellAgeNotInMapping: "PlayButtonUpsellAgeNotInMapping",
                        PlayButtonUpsellParentalConsentError: "PlayButtonUpsellParentalConsentError",
                        PlayButtonUpsellAgeRestrictionVerificationError: "PlayButtonUpsellAgeRestrictionVerificationError",
                        PlayButtonUpsellUnknownRequirement: "PlayButtonUpsellUnknownRequirement",
                        PreparePurchaseUrlError: "PreparePurchaseUrlError",
                        PlayButtonShowIdentificationError: "PlayButtonShowIdentificationIssueCaught"
                    },
                    avatarChatUpsellLayer: "Voice.AvatarChat.Upsell",
                    avatarChatUpsellLayerU13: "Voice.AvatarChat.U13Upsell",
                    playButtonLayer: "Website.PlayButton",
                    unlockPlayIntentConstants: {
                        eventName: "unlockPlayIntent",
                        gameLaunchFallbackUpsellName: "GameLaunch",
                        restrictedUnplayableUpsellName: "RestrictedUnplayableOptionNotFound",
                        unverifiedSeventeenPlusUpsellName: "AgeVerificationUnverifiedSeventeenPlusUser",
                        fiatPurchaseUpsellName: "FiatPurchase"
                    },
                    FeatureExperienceDetails: {
                        PlayButtonMessageAgreeToNotice: "PlayButtonMessage.AgreeToNotice"
                    },
                    defaultAfReferralProperties: {
                        pid: "experiencestart_mobileweb",
                        is_retargeting: "false"
                    }
                },
                _r = CoreRobloxUtilities,
                Vr = function(e, i, l, c) {
                    return new(l = l || Promise)(function(n, t) {
                        function r(e) {
                            try {
                                o(c.next(e))
                            } catch (e) {
                                t(e)
                            }
                        }

                        function a(e) {
                            try {
                                o(c.throw(e))
                            } catch (e) {
                                t(e)
                            }
                        }

                        function o(e) {
                            var t;
                            e.done ? n(e.value) : ((t = e.value) instanceof l ? t : new l(function(e) {
                                e(t)
                            })).then(r, a)
                        }
                        o((c = c.apply(e, i || [])).next())
                    })
                },
                Wr = function(n, r) {
                    var a, o, i, l = {
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
                                for (; l;) try {
                                    if (a = 1, o && (i = 2 & t[0] ? o.return : t[0] ? o.throw || ((i = o.return) && i.call(o), 0) : o.next) && !(i = i.call(o, t[1])).done) return i;
                                    switch (o = 0, i && (t = [2 & t[0], i.value]), t[0]) {
                                        case 0:
                                        case 1:
                                            i = t;
                                            break;
                                        case 4:
                                            return l.label++, {
                                                value: t[1],
                                                done: !1
                                            };
                                        case 5:
                                            l.label++, o = t[1], t = [0];
                                            continue;
                                        case 7:
                                            t = l.ops.pop(), l.trys.pop();
                                            continue;
                                        default:
                                            if (!(i = 0 < (i = l.trys).length && i[i.length - 1]) && (6 === t[0] || 2 === t[0])) {
                                                l = 0;
                                                continue
                                            }
                                            if (3 === t[0] && (!i || t[1] > i[0] && t[1] < i[3])) {
                                                l.label = t[1];
                                                break
                                            }
                                            if (6 === t[0] && l.label < i[1]) {
                                                l.label = i[1], i = t;
                                                break
                                            }
                                            if (i && l.label < i[2]) {
                                                l.label = i[2], l.ops.push(t);
                                                break
                                            }
                                            i[2] && l.ops.pop(), l.trys.pop();
                                            continue
                                    }
                                    t = r.call(n, l)
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
                Hr = _r.dataStores.gamesDataStore,
                zr = function(n) {
                    return Vr(void 0, void 0, Promise, function() {
                        var t;
                        return Wr(this, function(e) {
                            switch (e.label) {
                                case 0:
                                    return [4, Hr.getProductInfo(n)];
                                case 1:
                                    return t = e.sent().data.data, [2, (void 0 === t ? [] : t)[0]]
                            }
                        })
                    })
                },
                qr = function(n) {
                    return Vr(void 0, void 0, Promise, function() {
                        var t;
                        return Wr(this, function(e) {
                            switch (e.label) {
                                case 0:
                                    return [4, Hr.getPlaceDetails(n)];
                                case 1:
                                    return t = e.sent().data, [2, (void 0 === t ? [] : t)[0]]
                            }
                        })
                    })
                },
                Jr = function(n) {
                    return Vr(void 0, void 0, Promise, function() {
                        var t;
                        return Wr(this, function(e) {
                            switch (e.label) {
                                case 0:
                                    return [4, Hr.getPlayabilityStatus(n)];
                                case 1:
                                    return t = e.sent().data, [2, (void 0 === t ? [] : t)[0]]
                            }
                        })
                    })
                },
                Xr = function(n) {
                    return Vr(void 0, void 0, Promise, function() {
                        var t;
                        return Wr(this, function(e) {
                            switch (e.label) {
                                case 0:
                                    return t = {
                                        withCredentials: !0,
                                        url: N.EnvironmentUrls.voiceApi + "/v1/settings/verify/show-age-verification-overlay/" + n
                                    }, [4, f.httpService.get(t)];
                                case 1:
                                    return [2, e.sent().data]
                            }
                        })
                    })
                },
                Kr = function() {
                    return Vr(void 0, void 0, Promise, function() {
                        var t;
                        return Wr(this, function(e) {
                            switch (e.label) {
                                case 0:
                                    return t = {
                                        withCredentials: !0,
                                        url: N.EnvironmentUrls.apiGatewayUrl + "/universal-app-configuration/v1/behaviors/play-button-ui/content"
                                    }, [4, f.httpService.get(t)];
                                case 1:
                                    return [2, e.sent().data]
                            }
                        })
                    })
                },
                Yr = function() {
                    var e = {
                        url: N.EnvironmentUrls.apiGatewayUrl + "/user-settings-api/v1/user-settings/settings-and-options",
                        withCredentials: !0
                    };
                    return f.httpService.get(e).then(function(e) {
                        return e.data
                    })
                },
                Qr = function(e) {
                    var t = {
                        url: N.EnvironmentUrls.apiGatewayUrl + "/experience-guidelines-api/experience-guidelines/get-age-recommendation",
                        withCredentials: !0
                    };
                    return f.httpService.post(t, {
                        universeId: e
                    }).then(function(e) {
                        return e.data
                    })
                },
                Zr = function(e, t) {
                    var n = {
                        url: N.EnvironmentUrls.apiGatewayUrl + "/fiat-paid-access-service/v1/purchase",
                        withCredentials: !0,
                        retryable: !0
                    };
                    return f.httpService.post(n, {
                        rootPlaceId: e,
                        expectedBasePriceId: t
                    }).then(function(e) {
                        var e = JSON.parse(null !== (e = null === (e = e.data) || void 0 === e ? void 0 : e.checkoutUrl) && void 0 !== e ? e : "");
                        return null !== (e = null == e ? void 0 : e.checkoutUrl) && void 0 !== e ? e : ""
                    })
                },
                $r = function() {
                    return ($r = Object.assign || function(e) {
                        for (var t, n = 1, r = arguments.length; n < r; n++)
                            for (var a in t = arguments[n]) Object.prototype.hasOwnProperty.call(t, a) && (e[a] = t[a]);
                        return e
                    }).apply(this, arguments)
                },
                ea = function(e, i, l, c) {
                    return new(l = l || Promise)(function(n, t) {
                        function r(e) {
                            try {
                                o(c.next(e))
                            } catch (e) {
                                t(e)
                            }
                        }

                        function a(e) {
                            try {
                                o(c.throw(e))
                            } catch (e) {
                                t(e)
                            }
                        }

                        function o(e) {
                            var t;
                            e.done ? n(e.value) : ((t = e.value) instanceof l ? t : new l(function(e) {
                                e(t)
                            })).then(r, a)
                        }
                        o((c = c.apply(e, i || [])).next())
                    })
                },
                ta = function(n, r) {
                    var a, o, i, l = {
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
                                for (; l;) try {
                                    if (a = 1, o && (i = 2 & t[0] ? o.return : t[0] ? o.throw || ((i = o.return) && i.call(o), 0) : o.next) && !(i = i.call(o, t[1])).done) return i;
                                    switch (o = 0, i && (t = [2 & t[0], i.value]), t[0]) {
                                        case 0:
                                        case 1:
                                            i = t;
                                            break;
                                        case 4:
                                            return l.label++, {
                                                value: t[1],
                                                done: !1
                                            };
                                        case 5:
                                            l.label++, o = t[1], t = [0];
                                            continue;
                                        case 7:
                                            t = l.ops.pop(), l.trys.pop();
                                            continue;
                                        default:
                                            if (!(i = 0 < (i = l.trys).length && i[i.length - 1]) && (6 === t[0] || 2 === t[0])) {
                                                l = 0;
                                                continue
                                            }
                                            if (3 === t[0] && (!i || t[1] > i[0] && t[1] < i[3])) {
                                                l.label = t[1];
                                                break
                                            }
                                            if (6 === t[0] && l.label < i[1]) {
                                                l.label = i[1], i = t;
                                                break
                                            }
                                            if (i && l.label < i[2]) {
                                                l.label = i[2], l.ops.push(t);
                                                break
                                            }
                                            i[2] && l.ops.pop(), l.trys.pop();
                                            continue
                                    }
                                    t = r.call(n, l)
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
                na = Fr.unlockPlayIntentConstants,
                ra = Fr.defaultAfReferralProperties;

            function aa(e) {
                if (!N.GameLauncher.isJoinAttemptIdEnabled()) return {};
                var t = e.joinAttemptOrigin,
                    e = e.joinAttemptId;
                return {
                    joinAttemptId: e = "string" == typeof e ? e : f.uuidService.generateRandomUuid(),
                    joinAttemptOrigin: t
                }
            }

            function oa(e, t, n) {
                n = $r($r($r({
                    placeId: t
                }, e), aa(e)), n);
                return _r.eventStreamService.sendEventWithTarget("playGameClicked", "click", n), n
            }

            function ia(e, t) {
                void 0 === t && (t = {});
                var n = N.EnvironmentUrls.websiteUrl + "/games/start?placeid=" + e;
                N.GameLauncher.isJoinAttemptIdEnabled() && (e = (r = aa(t)).joinAttemptId, r = r.joinAttemptOrigin, "string" == typeof e && 0 < e.length && (n += "&joinAttemptId=" + e, "string" == typeof r && 0 < r.length && (n += "&joinAttemptOrigin=" + r)));
                var r = t.launchData,
                    t = t.eventId;
                return "string" == typeof r && 0 < r.length && (n += "&launchData=" + r), "string" == typeof t && 0 < t.length && (n += "&eventId=" + t), encodeURIComponent(n)
            }

            function la(e, t, n, r, a, o, i) {
                void 0 === a && (a = {}), void 0 === o && (o = {}), void 0 === i && (i = {});
                var l, c = hn.deviceMeta.getDeviceMeta();
                null != c && c.isIosDevice || null != c && c.isAndroidDevice || hn.jsClientDeviceIdentifier.isIos13Ipad || null != c && c.isChromeOs ? (l = ia(e, oa(a, e, o)), i = f.urlService.composeQueryString($r($r({}, ra), i)), window.open("https://ro.blox.com/Ebh5?" + i + "&af_dp=" + l + "&af_web_dp=" + l + "&deep_link_value=" + l, "_self")) : (l = "0", null !== window.localStorage.getItem("ref_info") && (l = function() {
                    var e = window.localStorage.getItem("ref_info");
                    if (!e) return {};
                    try {
                        return JSON.parse(atob(e))
                    } catch (e) {
                        return {}
                    }
                }()[e]), _r.playGameService.launchGame(_r.playGameService.buildPlayGameProperties(t, e, r, void 0, n, l, o), Fr.eventStreamProperties(e, a)), window.localStorage.getItem("ref_info") && window.localStorage.removeItem("ref_info"))
            }

            function ca(e, t) {
                void 0 === t && (t = {});
                var n = hn.deviceMeta.getDeviceMeta();
                null != n && n.isIosDevice || null != n && n.isAndroidDevice || hn.jsClientDeviceIdentifier.isIos13Ipad || null != n && n.isChromeOs ? (n = ia(e, oa({}, e, {})), t = f.urlService.composeQueryString($r($r({}, ra), t)), window.open("https://ro.blox.com/Ebh5?" + t + "&af_dp=" + n + "&af_web_dp=" + n + "&deep_link_value=" + n, "_self")) : _r.playGameService.launchGame(_r.playGameService.buildPlayGameProperties(void 0, e.toString()), Fr.eventStreamProperties(e, {}))
            }

            function ua() {
                return ea(void 0, void 0, Promise, function() {
                    return ta(this, function(e) {
                        try {
                            return [2, N.IdentityVerificationService.startVerificationFlow()]
                        } catch (e) {
                            return [2, [!1, !1]]
                        }
                        return [2]
                    })
                })
            }

            function sa(t, n) {
                return ea(void 0, void 0, Promise, function() {
                    return ta(this, function(e) {
                        try {
                            return [2, N.IdentityVerificationService.showVoiceOptInOverlay(t, n)]
                        } catch (e) {
                            return [2, !1]
                        }
                        return [2]
                    })
                })
            }

            function da() {
                return ea(void 0, void 0, Promise, function() {
                    return ta(this, function(e) {
                        switch (e.label) {
                            case 0:
                                return e.trys.push([0, 2, , 3]), [4, N.AccessManagementUpsellService.showAccessManagementVerificationModal()];
                            case 1:
                                return [2, e.sent()];
                            case 2:
                                return e.sent(), [2, !1];
                            case 3:
                                return [2]
                        }
                    })
                })
            }

            function pa(e, t) {
                try {
                    var n = r().UrlParser.getParameterValueByName("shareLinkSourceType", !1);
                    if ("experiencedetails" !== (null == n ? void 0 : n.toLowerCase())) return;
                    N.EventStream.SendEventWithTarget("shareLinkGameJoin", "GamePlayButtonWeb", {
                        placeId: e,
                        universeId: t
                    }, N.EventStream.TargetTypes.WWW)
                } catch (e) {}
            }

            function fa(e) {
                return void 0 !== e && (e !== Gr.Playable && e !== Gr.GuestProhibited && e !== Gr.PurchaseRequired && e !== Gr.ContextualPlayabilityUnverifiedSeventeenPlusUser && e !== Gr.FiatPurchaseRequired && e !== Gr.ContextualPlayabilityAgeRecommendationParentalControls)
            }

            function ma(e, t, n) {
                n = {
                    universeId: e,
                    upsellName: t,
                    playabilityStatus: n
                }, _r.eventStreamService.sendEvent({
                    name: na.eventName,
                    type: na.eventName,
                    context: _r.eventStreamService.eventTypes.formInteraction
                }, n)
            }
            var e = {
                    common: ["Common.VisitGame"],
                    feature: "Feature.ExperienceDetails"
                },
                va = Fr.playButtonTextTranslationMap,
                ha = (0, re.withTranslations)(function(e) {
                    var t = e.onButtonClick,
                        n = e.iconClassName,
                        r = void 0 === n ? "icon-status-private-primary" : n,
                        a = e.buttonWidth,
                        o = void 0 === a ? jr.Button.widths.full : a,
                        n = e.buttonClassName,
                        a = void 0 === n ? "btn-common-play-game-action-needed-lg" : n,
                        n = e.hideButtonText,
                        n = void 0 !== n && n,
                        e = e.translate;
                    return ee().createElement(ee().Fragment, null, ee().createElement(jr.Button, {
                        "data-testid": "play-action-needed-button",
                        width: o,
                        className: a,
                        onClick: t
                    }, ee().createElement("span", {
                        className: r
                    }), !n && ee().createElement("span", {
                        className: "btn-text"
                    }, e(va.ActionNeeded))), ee().createElement("div", {
                        id: "access-management-upsell-container-v1"
                    }))
                }, e);

            function ga(e) {
                var t = e.isModalOpen,
                    n = e.navigateToAccountSettings,
                    r = e.closeModal,
                    e = e.translate;
                return ee().createElement(ba, {
                    titleText: e("UpdateMaturitySettingModal.Label.Title"),
                    bodyText: e("UpdateMaturitySettingModal.Label.Body"),
                    primaryButtonText: e("UpdateMaturitySettingModal.Action.GoToSettings"),
                    secondaryButtonText: e("UpdateMaturitySettingModal.Action.Cancel"),
                    onPrimaryButtonClick: n,
                    onSecondaryButtonClick: r,
                    isModalOpen: t,
                    onCloseModal: r
                })
            }

            function ya(e) {
                var t = e.isModalOpen,
                    n = e.closeModal,
                    e = e.translate;
                return ee().createElement(ba, {
                    titleText: e("RestrictedUnplayableModal.Label.Title"),
                    bodyText: e("RestrictedUnplayableModal.Label.Body"),
                    secondaryButtonText: e("RestrictedUnplayableModal.Action.Ok"),
                    onSecondaryButtonClick: n,
                    isModalOpen: t,
                    onCloseModal: n
                })
            }(te = function(e) {
                var t = e.titleText,
                    n = e.bodyText,
                    r = e.primaryButtonText,
                    a = e.secondaryButtonText,
                    o = e.onPrimaryButtonClick,
                    i = e.onSecondaryButtonClick,
                    l = e.isModalOpen,
                    c = e.onCloseModal,
                    e = e.modalSize;
                return ee().createElement(jr.Modal, {
                    show: l,
                    onHide: c,
                    size: e,
                    "aria-labelledby": "upsell-modal-title",
                    className: "upsell-modal-container",
                    centered: "true"
                }, ee().createElement(jr.Modal.Header, {
                    useBaseBootstrapComponent: !0
                }, ee().createElement("button", {
                    type: "button",
                    className: "close",
                    onClick: c
                }, ee().createElement("span", {
                    className: "icon-close"
                })), ee().createElement(jr.Modal.Title, {
                    id: "upsell-modal-title"
                }, t)), ee().createElement(jr.Modal.Body, null, n), ee().createElement(jr.Modal.Footer, null, a && i && ee().createElement(jr.Button, {
                    variant: jr.Button.variants.secondary,
                    size: jr.Button.sizes.medium,
                    onClick: i,
                    className: "modal-button"
                }, a), r && o && ee().createElement(jr.Button, {
                    variant: jr.Button.variants.primary,
                    size: jr.Button.sizes.medium,
                    onClick: o,
                    className: "modal-button"
                }, r)))
            }).defaultProps = {
                primaryButtonText: void 0,
                secondaryButtonText: void 0,
                onPrimaryButtonClick: void 0,
                onSecondaryButtonClick: void 0,
                modalSize: "sm"
            };
            var ba = te,
                wa = function(e) {
                    var t = (0, $.useState)(void 0),
                        n = t[0],
                        r = t[1],
                        a = (0, $.useState)(!1),
                        o = a[0],
                        i = a[1],
                        l = (0, $.useState)(void 0),
                        c = l[0],
                        u = l[1],
                        t = (0, $.useState)(!1),
                        a = t[0],
                        s = t[1],
                        l = (0, $.useState)(!1),
                        t = l[0],
                        d = l[1];
                    return (0, $.useEffect)(function() {
                        i(!0), Yr().then(function(e) {
                            r(null == e ? void 0 : e.contentAgeRestriction)
                        }).catch(function() {
                            return d(!0)
                        }).finally(function() {
                            return i(!1)
                        })
                    }, []), (0, $.useEffect)(function() {
                        s(!0), Qr(e).then(function(e) {
                            var t;
                            u(null !== (e = null == (t = e) ? void 0 : t.ageRecommendationDetails) && void 0 !== e && e.summary && !t.ageRecommendationDetails.summary.ageRecommendation ? -1 : null === (t = null === (t = null === (t = null == t ? void 0 : t.ageRecommendationDetails) || void 0 === t ? void 0 : t.summary) || void 0 === t ? void 0 : t.ageRecommendation) || void 0 === t ? void 0 : t.minimumAge)
                        }).catch(function() {
                            return d(!0)
                        }).finally(function() {
                            return s(!1)
                        })
                    }, [e]), {
                        contentAgeRestriction: n,
                        minimumAge: c,
                        isFetching: o || a,
                        hasError: t
                    }
                },
                Pa = function(e, i, l, c) {
                    return new(l = l || Promise)(function(n, t) {
                        function r(e) {
                            try {
                                o(c.next(e))
                            } catch (e) {
                                t(e)
                            }
                        }

                        function a(e) {
                            try {
                                o(c.throw(e))
                            } catch (e) {
                                t(e)
                            }
                        }

                        function o(e) {
                            var t;
                            e.done ? n(e.value) : ((t = e.value) instanceof l ? t : new l(function(e) {
                                e(t)
                            })).then(r, a)
                        }
                        o((c = c.apply(e, i || [])).next())
                    })
                },
                Ea = function(n, r) {
                    var a, o, i, l = {
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
                                for (; l;) try {
                                    if (a = 1, o && (i = 2 & t[0] ? o.return : t[0] ? o.throw || ((i = o.return) && i.call(o), 0) : o.next) && !(i = i.call(o, t[1])).done) return i;
                                    switch (o = 0, i && (t = [2 & t[0], i.value]), t[0]) {
                                        case 0:
                                        case 1:
                                            i = t;
                                            break;
                                        case 4:
                                            return l.label++, {
                                                value: t[1],
                                                done: !1
                                            };
                                        case 5:
                                            l.label++, o = t[1], t = [0];
                                            continue;
                                        case 7:
                                            t = l.ops.pop(), l.trys.pop();
                                            continue;
                                        default:
                                            if (!(i = 0 < (i = l.trys).length && i[i.length - 1]) && (6 === t[0] || 2 === t[0])) {
                                                l = 0;
                                                continue
                                            }
                                            if (3 === t[0] && (!i || t[1] > i[0] && t[1] < i[3])) {
                                                l.label = t[1];
                                                break
                                            }
                                            if (6 === t[0] && l.label < i[1]) {
                                                l.label = i[1], i = t;
                                                break
                                            }
                                            if (i && l.label < i[2]) {
                                                l.label = i[2], l.ops.push(t);
                                                break
                                            }
                                            i[2] && l.ops.pop(), l.trys.pop();
                                            continue
                                    }
                                    t = r.call(n, l)
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
                Ca = Fr.counterEvents,
                Ia = Fr.unlockPlayIntentConstants,
                Sa = function(e, c, t, n, r, a, o) {
                    var i = (0, $.useState)(!1),
                        l = i[0],
                        u = i[1],
                        s = (0, $.useState)(!1),
                        d = s[0],
                        p = s[1],
                        f = (0, $.useCallback)(function() {
                            la(e, t, n, r, a, void 0, o)
                        }, [a, r, e, n, t, o]),
                        m = (0, $.useCallback)(function(o, i, l) {
                            return Pa(void 0, void 0, void 0, function() {
                                var t, n, r, a;
                                return Ea(this, function(e) {
                                    switch (e.label) {
                                        case 0:
                                            if (t = function(e) {
                                                    ma(c, e, Gr.ContextualPlayabilityAgeRecommendationParentalControls)
                                                }, l || void 0 === o || void 0 === i) return f(), (0, Br.fireEvent)(Ca.PlayButtonUpsellUnknownSettingOrAge), t(Ia.gameLaunchFallbackUpsellName), [2];
                                            if (!(r = {
                                                    "-1": "ThirteenPlus",
                                                    9: "NinePlus",
                                                    13: "ThirteenPlus",
                                                    17: "SeventeenPlus",
                                                    18: "EighteenPlus"
                                                })[i]) return f(), (0, Br.fireEvent)(Ca.PlayButtonUpsellAgeNotInMapping), t(Ia.gameLaunchFallbackUpsellName), [2];
                                            if (n = r[i], !(a = o.options.find(function(e) {
                                                    return (null === (e = null == e ? void 0 : e.option) || void 0 === e ? void 0 : e.optionValue) === n
                                                }))) return [3, 12];
                                            switch (r = a.requirement) {
                                                case "SelfUpdateSetting":
                                                    return [3, 1];
                                                case "ParentalConsent":
                                                    return [3, 2];
                                                case "ContentAgeRestrictionVerification":
                                                    return [3, 6]
                                            }
                                            return [3, 10];
                                        case 1:
                                            return u(!0), (0, Br.fireEvent)(Ca.PlayButtonUpsellSelfUpdateSettingTriggered), t(r), [3, 11];
                                        case 2:
                                            return e.trys.push([2, 4, , 5]), (0, Br.fireEvent)(Ca.PlayButtonUpsellAskYourParentTriggered), t(r), [4, N.AccessManagementUpsellV2Service.startAccessManagementUpsell({
                                                featureName: "CanChangeSetting",
                                                isAsyncCall: !1,
                                                usePrologue: !0,
                                                ampRecourseData: {
                                                    contentAgeRestriction: null === (a = null == a ? void 0 : a.option) || void 0 === a ? void 0 : a.optionValue
                                                }
                                            })];
                                        case 3:
                                            return e.sent(), [3, 5];
                                        case 4:
                                            return e.sent(), f(), (0, Br.fireEvent)(Ca.PlayButtonUpsellParentalConsentError), t(Ia.gameLaunchFallbackUpsellName), [3, 5];
                                        case 5:
                                            return [3, 11];
                                        case 6:
                                            return e.trys.push([6, 8, , 9]), (0, Br.fireEvent)(Ca.PlayButtonUpsellAgeRestrictionVerificationTriggered), t(r), [4, da()];
                                        case 7:
                                            return e.sent(), [3, 9];
                                        case 8:
                                            return e.sent(), f(), (0, Br.fireEvent)(Ca.PlayButtonUpsellAgeRestrictionVerificationError), t(Ia.gameLaunchFallbackUpsellName), [3, 9];
                                        case 9:
                                            return [3, 11];
                                        case 10:
                                            f(), (0, Br.fireEvent)(Ca.PlayButtonUpsellUnknownRequirement), t(Ia.gameLaunchFallbackUpsellName), e.label = 11;
                                        case 11:
                                            return [3, 13];
                                        case 12:
                                            p(!0), (0, Br.fireEvent)(Ca.PlayButtonUpsellRestrictedUnplayableTriggered), t(Ia.restrictedUnplayableUpsellName), e.label = 13;
                                        case 13:
                                            return [2]
                                    }
                                })
                            })
                        }, [f, c]),
                        i = (0, $.useCallback)(function() {
                            u(!1)
                        }, []),
                        s = (0, $.useCallback)(function() {
                            p(!1)
                        }, []);
                    return {
                        launchPlayButtonUpsell: m,
                        isSelfUpdateSettingModalOpen: l,
                        navigateToAccountSettings: (0, $.useCallback)(function() {
                            var e = N.Endpoints.getAbsoluteUrl("/my/account#!/privacy");
                            "undefined" != typeof window && (window.location.href = e, u(!1))
                        }, []),
                        closeSelfUpdateSettingModal: i,
                        isRestrictedUnplayableModalOpen: d,
                        closeRestrictedUnplayableModal: s
                    }
                };
            (te = function(e) {
                var t = e.universeId,
                    n = e.hideButtonText,
                    r = e.buttonClassName,
                    a = e.placeId,
                    o = e.rootPlaceId,
                    i = e.privateServerLinkCode,
                    l = e.gameInstanceId,
                    c = e.eventProperties,
                    u = e.appsFlyerReferralProperties,
                    s = e.translate,
                    d = wa(t),
                    p = d.contentAgeRestriction,
                    f = d.minimumAge,
                    e = d.isFetching,
                    m = d.hasError,
                    t = Sa(a, t, o, i, l, c, u),
                    v = t.launchPlayButtonUpsell,
                    o = t.isSelfUpdateSettingModalOpen,
                    i = t.navigateToAccountSettings,
                    l = t.closeSelfUpdateSettingModal,
                    c = t.isRestrictedUnplayableModalOpen,
                    u = t.closeRestrictedUnplayableModal,
                    t = (0, $.useCallback)(function(e) {
                        e.preventDefault(), e.stopPropagation(), v(p, f, m)
                    }, [v, p, f, m]);
                return !m && e ? ee().createElement(jr.Loading, null) : ee().createElement(ee().Fragment, null, ee().createElement(ha, {
                    onButtonClick: t,
                    hideButtonText: n,
                    buttonClassName: r
                }), o && ee().createElement(ga, {
                    isModalOpen: o,
                    navigateToAccountSettings: i,
                    closeModal: l,
                    translate: s
                }), c && ee().createElement(ya, {
                    isModalOpen: c,
                    closeModal: u,
                    translate: s
                }))
            }).defaultProps = {
                hideButtonText: void 0,
                buttonClassName: void 0,
                rootPlaceId: void 0,
                privateServerLinkCode: void 0,
                gameInstanceId: void 0,
                eventProperties: {},
                appsFlyerReferralProperties: {}
            };
            var xa = (0, re.withTranslations)(te, e);

            function Aa(e) {
                var r = e.universeId,
                    a = e.placeId,
                    o = e.productDetails,
                    t = e.translate,
                    n = e.iconClassName,
                    i = e.buttonWidth,
                    l = e.buttonClassName,
                    c = e.hideButtonText,
                    u = e.redirectPurchaseUrl,
                    s = void 0 !== (d = e.showDefaultPurchaseText) && d,
                    d = (e = (0, $.useState)(!1))[0],
                    p = e[1],
                    e = (0, $.useCallback)(function(n) {
                        return Ra(void 0, void 0, void 0, function() {
                            var t;
                            return Ua(this, function(e) {
                                switch (e.label) {
                                    case 0:
                                        if (n.preventDefault(), n.stopPropagation(), t = null === (t = null == o ? void 0 : o.fiatPurchaseData) || void 0 === t ? void 0 : t.basePriceId, !a || !t) return [2];
                                        p(!0), e.label = 1;
                                    case 1:
                                        return e.trys.push([1, 3, 4, 5]), ma(r, Na.fiatPurchaseUpsellName, Gr.FiatPurchaseRequired), [4, Zr(a, t)];
                                    case 2:
                                        return (t = e.sent()) && f.urlService.isValidStripeCheckoutUrl(t) && (window.location.href = t), [3, 5];
                                    case 3:
                                        return e.sent(), (0, Br.fireEvent)(La.PreparePurchaseUrlError), console.error("Error preparing purchase url"), [3, 5];
                                    case 4:
                                        return p(!1), [7];
                                    case 5:
                                        return [2]
                                }
                            })
                        })
                    }, [a, o, r]);
                return ee().createElement(ka, {
                    buttonWidth: i,
                    buttonClassName: l,
                    iconClassName: n,
                    hideButtonText: c,
                    hideButtonIcon: !0,
                    buttonContent: s ? t(Da.Buy) : null !== (t = null === (t = null == (t = o) ? void 0 : t.fiatPurchaseData) || void 0 === t ? void 0 : t.localizedFiatPrice) && void 0 !== t ? t : "",
                    onClick: u ? void 0 : e,
                    redirectUrl: u,
                    isPurchasing: d
                })
            }

            function Ta(e) {
                var t = e.universeId,
                    n = e.iconClassName,
                    r = e.buttonWidth,
                    a = e.buttonClassName,
                    o = e.hideButtonText,
                    i = e.redirectPurchaseUrl,
                    l = e.productDetails,
                    c = e.productInfo,
                    u = e.translate,
                    s = e.refetchPlayabilityStatus,
                    e = (0, $.useCallback)(function(e) {
                        e.preventDefault(), e.stopPropagation(), Ga.start()
                    }, []);
                return ee().createElement(ee().Fragment, null, ee().createElement(ka, {
                    buttonWidth: r,
                    buttonClassName: a,
                    iconClassName: n,
                    hideButtonText: o,
                    buttonContent: null !== (o = null === (o = null == (o = c) ? void 0 : o.price) || void 0 === o ? void 0 : o.toString()) && void 0 !== o ? o : "",
                    onClick: i ? void 0 : e,
                    redirectUrl: i
                }), ee().createElement(Ma, Ba({}, {
                    translate: u,
                    productId: c.productId,
                    expectedPrice: c.price,
                    thumbnail: ee().createElement(ja.Thumbnail2d, {
                        type: ja.ThumbnailTypes.gameIcon,
                        size: ja.DefaultThumbnailSize,
                        targetId: parseInt(t, 10),
                        imgClassName: "game-card-thumb",
                        format: ja.ThumbnailFormat.jpeg
                    }),
                    assetName: l.name,
                    assetType: "Place",
                    sellerName: l.builder,
                    expectedCurrency: 1,
                    expectedSellerId: c.sellerId,
                    onPurchaseSuccess: s,
                    isPlace: !0
                })))
            }(te = function(e) {
                var t = e.buttonWidth,
                    n = e.buttonClassName,
                    r = e.iconClassName,
                    a = e.hideButtonText,
                    o = e.hideButtonIcon,
                    i = e.buttonContent,
                    l = e.onClick,
                    c = e.isPurchasing,
                    e = e.redirectUrl;
                return e ? ee().createElement(jr.Link, {
                    url: e,
                    className: "purchase-button-link"
                }, ee().createElement(jr.Button, {
                    "data-testid": "play-purchase-button",
                    width: t,
                    className: n,
                    onClick: function() {
                        return null
                    },
                    isDisabled: c
                }, !o && ee().createElement("span", {
                    className: r
                }), !a && ee().createElement("span", {
                    className: "btn-text"
                }, i))) : ee().createElement(jr.Button, {
                    "data-testid": "play-purchase-button",
                    width: t,
                    className: n,
                    onClick: function(e) {
                        l && !c && l(e)
                    },
                    isDisabled: c
                }, !o && ee().createElement("span", {
                    className: r
                }), !a && ee().createElement("span", {
                    className: "btn-text"
                }, i))
            }).defaultProps = {
                hideButtonText: !1,
                buttonWidth: jr.Button.widths.full,
                buttonClassName: "btn-economy-robux-white-lg",
                iconClassName: "icon-robux-white",
                hideButtonIcon: !1,
                isPurchasing: !1,
                onClick: void 0,
                redirectUrl: void 0
            };
            var Oa, ka = te,
                Ra = function(e, i, l, c) {
                    return new(l = l || Promise)(function(n, t) {
                        function r(e) {
                            try {
                                o(c.next(e))
                            } catch (e) {
                                t(e)
                            }
                        }

                        function a(e) {
                            try {
                                o(c.throw(e))
                            } catch (e) {
                                t(e)
                            }
                        }

                        function o(e) {
                            var t;
                            e.done ? n(e.value) : ((t = e.value) instanceof l ? t : new l(function(e) {
                                e(t)
                            })).then(r, a)
                        }
                        o((c = c.apply(e, i || [])).next())
                    })
                },
                Ua = function(n, r) {
                    var a, o, i, l = {
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
                                for (; l;) try {
                                    if (a = 1, o && (i = 2 & t[0] ? o.return : t[0] ? o.throw || ((i = o.return) && i.call(o), 0) : o.next) && !(i = i.call(o, t[1])).done) return i;
                                    switch (o = 0, i && (t = [2 & t[0], i.value]), t[0]) {
                                        case 0:
                                        case 1:
                                            i = t;
                                            break;
                                        case 4:
                                            return l.label++, {
                                                value: t[1],
                                                done: !1
                                            };
                                        case 5:
                                            l.label++, o = t[1], t = [0];
                                            continue;
                                        case 7:
                                            t = l.ops.pop(), l.trys.pop();
                                            continue;
                                        default:
                                            if (!(i = 0 < (i = l.trys).length && i[i.length - 1]) && (6 === t[0] || 2 === t[0])) {
                                                l = 0;
                                                continue
                                            }
                                            if (3 === t[0] && (!i || t[1] > i[0] && t[1] < i[3])) {
                                                l.label = t[1];
                                                break
                                            }
                                            if (6 === t[0] && l.label < i[1]) {
                                                l.label = i[1], i = t;
                                                break
                                            }
                                            if (i && l.label < i[2]) {
                                                l.label = i[2], l.ops.push(t);
                                                break
                                            }
                                            i[2] && l.ops.pop(), l.trys.pop();
                                            continue
                                    }
                                    t = r.call(n, l)
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
                La = Fr.counterEvents,
                Na = Fr.unlockPlayIntentConstants,
                Da = Fr.playButtonTextTranslationMap,
                te = RobloxItemPurchase,
                ja = RobloxThumbnails,
                Ba = function() {
                    return (Ba = Object.assign || function(e) {
                        for (var t, n = 1, r = arguments.length; n < r; n++)
                            for (var a in t = arguments[n]) Object.prototype.hasOwnProperty.call(t, a) && (e[a] = t[a]);
                        return e
                    }).apply(this, arguments)
                },
                Ma = (te = (0, te.createItemPurchase)())[0],
                Ga = te[1],
                Fa = function(e, i, l, c) {
                    return new(l = l || Promise)(function(n, t) {
                        function r(e) {
                            try {
                                o(c.next(e))
                            } catch (e) {
                                t(e)
                            }
                        }

                        function a(e) {
                            try {
                                o(c.throw(e))
                            } catch (e) {
                                t(e)
                            }
                        }

                        function o(e) {
                            var t;
                            e.done ? n(e.value) : ((t = e.value) instanceof l ? t : new l(function(e) {
                                e(t)
                            })).then(r, a)
                        }
                        o((c = c.apply(e, i || [])).next())
                    })
                },
                _a = function(n, r) {
                    var a, o, i, l = {
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
                                for (; l;) try {
                                    if (a = 1, o && (i = 2 & t[0] ? o.return : t[0] ? o.throw || ((i = o.return) && i.call(o), 0) : o.next) && !(i = i.call(o, t[1])).done) return i;
                                    switch (o = 0, i && (t = [2 & t[0], i.value]), t[0]) {
                                        case 0:
                                        case 1:
                                            i = t;
                                            break;
                                        case 4:
                                            return l.label++, {
                                                value: t[1],
                                                done: !1
                                            };
                                        case 5:
                                            l.label++, o = t[1], t = [0];
                                            continue;
                                        case 7:
                                            t = l.ops.pop(), l.trys.pop();
                                            continue;
                                        default:
                                            if (!(i = 0 < (i = l.trys).length && i[i.length - 1]) && (6 === t[0] || 2 === t[0])) {
                                                l = 0;
                                                continue
                                            }
                                            if (3 === t[0] && (!i || t[1] > i[0] && t[1] < i[3])) {
                                                l.label = t[1];
                                                break
                                            }
                                            if (6 === t[0] && l.label < i[1]) {
                                                l.label = i[1], i = t;
                                                break
                                            }
                                            if (i && l.label < i[2]) {
                                                l.label = i[2], l.ops.push(t);
                                                break
                                            }
                                            i[2] && l.ops.pop(), l.trys.pop();
                                            continue
                                    }
                                    t = r.call(n, l)
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
                };
            (te = Oa = Oa || {}).Robux = "Robux", te.Fiat = "Fiat";
            var Va = (0, re.withTranslations)(function(e) {
                    var t = e.translate,
                        n = e.universeId,
                        r = e.placeId,
                        a = e.iconClassName,
                        o = void 0 === a ? "icon-robux-white" : a,
                        i = e.buttonWidth,
                        l = void 0 === i ? jr.Button.widths.full : i,
                        c = e.buttonClassName,
                        u = void 0 === c ? "btn-economy-robux-white-lg" : c,
                        s = e.refetchPlayabilityStatus,
                        d = e.hideButtonText,
                        p = void 0 !== d && d,
                        f = e.redirectPurchaseUrl,
                        a = e.playabilityStatus,
                        i = e.showDefaultPurchaseText,
                        c = void 0 !== i && i,
                        d = (0, $.useState)(void 0),
                        e = d[0],
                        m = d[1],
                        i = (0, $.useState)(void 0),
                        d = i[0],
                        v = i[1];
                    return (0, $.useEffect)(function() {
                        Fa(void 0, void 0, void 0, function() {
                            var t;
                            return _a(this, function(e) {
                                switch (e.label) {
                                    case 0:
                                        return e.trys.push([0, 2, , 3]), [4, zr([n])];
                                    case 1:
                                        return t = e.sent(), m(t), [3, 3];
                                    case 2:
                                        return t = e.sent(), console.log(t), [3, 3];
                                    case 3:
                                        return [2]
                                }
                            })
                        }), Fa(void 0, void 0, void 0, function() {
                            var t;
                            return _a(this, function(e) {
                                switch (e.label) {
                                    case 0:
                                        return e.trys.push([0, 2, , 3]), [4, qr([r])];
                                    case 1:
                                        return t = e.sent(), v(t), [3, 3];
                                    case 2:
                                        return t = e.sent(), console.log(t), [3, 3];
                                    case 3:
                                        return [2]
                                }
                            })
                        })
                    }, [r, n]), void 0 === e || void 0 === d ? ee().createElement(jr.Loading, null) : (i = d, (a === Gr.FiatPurchaseRequired && null != i && i.fiatPurchaseData ? Oa.Fiat : Oa.Robux) === Oa.Fiat ? ee().createElement(Aa, {
                        universeId: n,
                        placeId: r,
                        iconClassName: o,
                        buttonWidth: l,
                        buttonClassName: u,
                        hideButtonText: p,
                        redirectPurchaseUrl: f,
                        productDetails: d,
                        translate: t,
                        showDefaultPurchaseText: c
                    }) : ee().createElement(Ta, {
                        universeId: n,
                        iconClassName: o,
                        buttonWidth: l,
                        buttonClassName: u,
                        hideButtonText: p,
                        redirectPurchaseUrl: f,
                        productDetails: d,
                        productInfo: e,
                        translate: t,
                        refetchPlayabilityStatus: s
                    }))
                }, e),
                Wa = function(e, i, l, c) {
                    return new(l = l || Promise)(function(n, t) {
                        function r(e) {
                            try {
                                o(c.next(e))
                            } catch (e) {
                                t(e)
                            }
                        }

                        function a(e) {
                            try {
                                o(c.throw(e))
                            } catch (e) {
                                t(e)
                            }
                        }

                        function o(e) {
                            var t;
                            e.done ? n(e.value) : ((t = e.value) instanceof l ? t : new l(function(e) {
                                e(t)
                            })).then(r, a)
                        }
                        o((c = c.apply(e, i || [])).next())
                    })
                },
                Ha = function(n, r) {
                    var a, o, i, l = {
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
                                for (; l;) try {
                                    if (a = 1, o && (i = 2 & t[0] ? o.return : t[0] ? o.throw || ((i = o.return) && i.call(o), 0) : o.next) && !(i = i.call(o, t[1])).done) return i;
                                    switch (o = 0, i && (t = [2 & t[0], i.value]), t[0]) {
                                        case 0:
                                        case 1:
                                            i = t;
                                            break;
                                        case 4:
                                            return l.label++, {
                                                value: t[1],
                                                done: !1
                                            };
                                        case 5:
                                            l.label++, o = t[1], t = [0];
                                            continue;
                                        case 7:
                                            t = l.ops.pop(), l.trys.pop();
                                            continue;
                                        default:
                                            if (!(i = 0 < (i = l.trys).length && i[i.length - 1]) && (6 === t[0] || 2 === t[0])) {
                                                l = 0;
                                                continue
                                            }
                                            if (3 === t[0] && (!i || t[1] > i[0] && t[1] < i[3])) {
                                                l.label = t[1];
                                                break
                                            }
                                            if (6 === t[0] && l.label < i[1]) {
                                                l.label = i[1], i = t;
                                                break
                                            }
                                            if (i && l.label < i[2]) {
                                                l.label = i[2], l.ops.push(t);
                                                break
                                            }
                                            i[2] && l.ops.pop(), l.trys.pop();
                                            continue
                                    }
                                    t = r.call(n, l)
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
                za = Fr.unlockPlayIntentConstants;

            function qa(e) {
                var l = e.universeId,
                    c = e.placeId,
                    u = e.rootPlaceId,
                    s = e.privateServerLinkCode,
                    d = e.gameInstanceId,
                    p = e.status,
                    f = void 0 === (i = e.eventProperties) ? {} : i,
                    m = void 0 === (r = e.appsFlyerReferralProperties) ? {} : r,
                    t = void 0 === (o = e.iconClassName) ? "icon-common-play" : o,
                    n = void 0 === (a = e.buttonWidth) ? jr.Button.widths.full : a,
                    r = void 0 === (i = e.buttonClassName) ? "btn-common-play-game-lg" : i,
                    a = void 0 !== (o = e.disableLoadingState) && o,
                    o = void 0 === (i = e.buttonText) ? void 0 : i,
                    i = void 0 !== (i = e.hideIcon) && i,
                    v = void 0 === (e = e.analyticsCallback) ? void 0 : e,
                    h = (e = (0, $.useState)(void 0))[0],
                    g = e[1],
                    y = (e = (0, $.useState)(void 0))[0],
                    b = e[1],
                    w = (e = (0, $.useState)(void 0))[0],
                    P = e[1],
                    E = (e = (0, $.useState)(void 0))[0],
                    C = e[1],
                    I = (e = (0, $.useState)(void 0))[0],
                    S = e[1],
                    x = (e = (0, $.useState)(void 0))[0],
                    A = e[1],
                    T = (e = (0, $.useState)(void 0))[0],
                    O = e[1],
                    k = (e = (0, $.useState)(void 0))[0],
                    R = e[1],
                    U = (e = (0, $.useState)(!1))[0],
                    L = e[1];
                return (0, $.useEffect)(function() {
                    try {
                        Ya(void 0, void 0, Promise, function() {
                            var t;
                            return Qa(this, function(e) {
                                switch (e.label) {
                                    case 0:
                                        return [4, null === N.NavigationService || void 0 === N.NavigationService ? void 0 : N.NavigationService.getIsVNGLandingRedirectEnabled()];
                                    case 1:
                                        return t = e.sent(), L(t), [2]
                                }
                            })
                        })
                    } catch (e) {
                        L(!1)
                    }
                }, []), (0, $.useEffect)(function() {
                    Ya(void 0, void 0, void 0, function() {
                        var t, n;
                        return Qa(this, function(e) {
                            switch (e.label) {
                                case 0:
                                    return e.trys.push([0, 2, , 3]), [4, (y = l, Ya(void 0, void 0, Promise, function() {
                                        var t, n, r, a, o, i, l, c, u, s, d, p, f, m, v, h, g;
                                        return Qa(this, function(e) {
                                            switch (e.label) {
                                                case 0:
                                                    return t = {
                                                        isUniverseEnabledForVoice: !1,
                                                        isUniverseEnabledForAvatarVideo: !1
                                                    }, hn.authenticatedUser.isAuthenticated ? [4, Kr()] : [2, {
                                                        elegibleToSeeVoiceUpsell: !1,
                                                        universePlaceVoiceEnabledSettings: t,
                                                        showAgeVerificationOverlay: !1,
                                                        showVoiceOptInOverlay: !1,
                                                        showAvatarVideoOptInOverlay: !1,
                                                        requireExplicitVoiceConsent: !0,
                                                        useCameraU13Design: !1,
                                                        useVoiceUpsellV2Design: !1
                                                    }];
                                                case 1:
                                                    return c = e.sent(), n = c.playButtonOverlayWebFlag, r = c.voiceOptInWebFlag, a = c.cameraOptInWebFlag, o = c.cameraOptInWebFlagU13, i = c.requireExplicitVoiceConsent, l = c.useCameraU13Design, c = c.useVoiceUpsellV2Design, n || r || a ? [4, Xr(y)] : [2, {
                                                        elegibleToSeeVoiceUpsell: !1,
                                                        universePlaceVoiceEnabledSettings: t,
                                                        showAgeVerificationOverlay: !1,
                                                        showVoiceOptInOverlay: !1,
                                                        showAvatarVideoOptInOverlay: !1,
                                                        requireExplicitVoiceConsent: i,
                                                        useCameraU13Design: l,
                                                        useVoiceUpsellV2Design: c
                                                    }];
                                                case 2:
                                                    return (v = e.sent(), u = v.showAgeVerificationOverlay, s = v.showVoiceOptInOverlay, d = v.showAvatarVideoOptInOverlay, p = v.elegibleToSeeVoiceUpsell, f = v.universePlaceVoiceEnabledSettings, v = m = !1, N.ExperimentationService.getAllValuesForLayer) ? (h = Boolean, [4, N.ExperimentationService.getAllValuesForLayer(eo)]) : [3, 5];
                                                case 3:
                                                    return m = h.apply(void 0, [e.sent().ShouldShowUpsell]), g = Boolean, [4, N.ExperimentationService.getAllValuesForLayer(to)];
                                                case 4:
                                                    v = g.apply(void 0, [e.sent().ShouldShowUpsell]), e.label = 5;
                                                case 5:
                                                    return [2, {
                                                        elegibleToSeeVoiceUpsell: p,
                                                        universePlaceVoiceEnabledSettings: f,
                                                        showAgeVerificationOverlay: n && u,
                                                        showVoiceOptInOverlay: r && s,
                                                        showAvatarVideoOptInOverlay: d && (a && m || o && v),
                                                        requireExplicitVoiceConsent: i,
                                                        useCameraU13Design: l,
                                                        useVoiceUpsellV2Design: c
                                                    }]
                                            }
                                        })
                                    }))];
                                case 1:
                                    return t = e.sent(), g(null !== (n = null === (n = t.universePlaceVoiceEnabledSettings) || void 0 === n ? void 0 : n.isUniverseEnabledForVoice) && void 0 !== n && n), P(t.elegibleToSeeVoiceUpsell), b(t.showAgeVerificationOverlay), C(t.showVoiceOptInOverlay), S(t.showAvatarVideoOptInOverlay), A(t.requireExplicitVoiceConsent), O(t.useCameraU13Design), R(t.useVoiceUpsellV2Design), [3, 3];
                                case 2:
                                    return e.sent(), (0, Br.fireEvent)($a.PlayButtonShowIdentificationError), P(!1), g(!1), b(!1), C(!1), S(!1), A(!0), O(!1), R(!1), [3, 3];
                                case 3:
                                    return [2]
                            }
                            var y
                        })
                    })
                }, []), void 0 !== y || a ? ee().createElement(ee().Fragment, null, ee().createElement(jr.Button, {
                    "data-testid": "play-button",
                    width: n,
                    className: r,
                    onClick: function(i) {
                        return Ya(void 0, void 0, void 0, function() {
                            var a, o;
                            return Qa(this, function(e) {
                                switch (e.label) {
                                    case 0:
                                        return (i.preventDefault(), i.stopPropagation(), p !== Za.Playable) ? [3, 7] : (w && h && (a = "SocialVoice.VoiceUpsell", N.ExperimentationService.getAllValuesForLayer(a).then(function() {
                                            N.ExperimentationService.logLayerExposure(a)
                                        }).catch(function() {
                                            return console.error("error logging exposure event in play-join")
                                        })), y ? [4, ua()] : [3, 2]);
                                    case 1:
                                        return o = e.sent(), o[0], o[1] && b(!1), [3, 6];
                                    case 2:
                                        return E ? [4, sa(null == x || x, null != k && k)] : [3, 4];
                                    case 3:
                                        return e.sent() && C(!1), [3, 6];
                                    case 4:
                                        return I ? [4, (n = null == x || x, r = null == T || T, ea(void 0, void 0, Promise, function() {
                                            return ta(this, function(e) {
                                                try {
                                                    return [2, N.IdentityVerificationService.showAvatarVideoOptInOverlay(n, r)]
                                                } catch (e) {
                                                    return [2, !1]
                                                }
                                                return [2]
                                            })
                                        }))] : [3, 6];
                                    case 5:
                                        e.sent() && S(!1), e.label = 6;
                                    case 6:
                                        return pa(c, l), o = {
                                            launchData: null !== (t = new URLSearchParams(window.location.search).get("launchData")) && void 0 !== t ? t : void 0,
                                            eventId: null !== (t = new URLSearchParams(window.location.search).get("eventId")) && void 0 !== t ? t : void 0
                                        }, la(c, u, s, d, f, o, m), [3, 8];
                                    case 7:
                                        p === Za.GuestProhibited && (U ? null !== N.NavigationService && void 0 !== N.NavigationService && N.NavigationService.navigateToLoginWithRedirect() : ca(c, m)), e.label = 8;
                                    case 8:
                                        return v && v(), [2]
                                }
                                var t, n, r
                            })
                        })
                    }
                }, !i && ee().createElement("span", {
                    className: t
                }), o && ee().createElement("span", {
                    className: "play-button-text"
                }, o)), ee().createElement("div", {
                    id: "id-verification-container"
                })) : ee().createElement(jr.Loading, null)
            }(te = function(e) {
                var n = e.universeId,
                    t = e.hideButtonText,
                    r = e.buttonClassName,
                    e = (0, $.useCallback)(function(t) {
                        return Wa(void 0, void 0, void 0, function() {
                            return Ha(this, function(e) {
                                switch (e.label) {
                                    case 0:
                                        return t.preventDefault(), t.stopPropagation(), ma(n, za.unverifiedSeventeenPlusUpsellName, Gr.ContextualPlayabilityUnverifiedSeventeenPlusUser), [4, da()];
                                    case 1:
                                        return e.sent(), [2]
                                }
                            })
                        })
                    }, [n]);
                return ee().createElement(ha, {
                    onButtonClick: e,
                    hideButtonText: t,
                    buttonClassName: r
                })
            }).defaultProps = {
                hideButtonText: void 0,
                buttonClassName: void 0
            };
            var Ja = te,
                Xa = Fr.playButtonTextTranslationMap,
                Ka = (0, re.withTranslations)(function(e) {
                    var t = e.translate,
                        n = e.iconClassName,
                        r = void 0 === n ? "icon-status-unavailable-secondary" : n,
                        a = e.buttonWidth,
                        n = void 0 === a ? jr.Button.widths.full : a,
                        a = e.buttonClassName,
                        a = void 0 === a ? "btn-common-play-game-unplayable-lg" : a,
                        e = e.hideButtonText,
                        e = void 0 !== e && e;
                    return ee().createElement(ee().Fragment, null, ee().createElement(jr.Button, {
                        "data-testid": "play-unplayable-button",
                        width: n,
                        className: a,
                        isDisabled: !0,
                        onClick: function() {
                            return null
                        }
                    }, ee().createElement("span", {
                        className: r
                    }), !e && ee().createElement("span", {
                        className: "btn-text"
                    }, t(Xa.Unplayable))))
                }, e),
                Ya = function(e, i, l, c) {
                    return new(l = l || Promise)(function(n, t) {
                        function r(e) {
                            try {
                                o(c.next(e))
                            } catch (e) {
                                t(e)
                            }
                        }

                        function a(e) {
                            try {
                                o(c.throw(e))
                            } catch (e) {
                                t(e)
                            }
                        }

                        function o(e) {
                            var t;
                            e.done ? n(e.value) : ((t = e.value) instanceof l ? t : new l(function(e) {
                                e(t)
                            })).then(r, a)
                        }
                        o((c = c.apply(e, i || [])).next())
                    })
                },
                Qa = function(n, r) {
                    var a, o, i, l = {
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
                                for (; l;) try {
                                    if (a = 1, o && (i = 2 & t[0] ? o.return : t[0] ? o.throw || ((i = o.return) && i.call(o), 0) : o.next) && !(i = i.call(o, t[1])).done) return i;
                                    switch (o = 0, i && (t = [2 & t[0], i.value]), t[0]) {
                                        case 0:
                                        case 1:
                                            i = t;
                                            break;
                                        case 4:
                                            return l.label++, {
                                                value: t[1],
                                                done: !1
                                            };
                                        case 5:
                                            l.label++, o = t[1], t = [0];
                                            continue;
                                        case 7:
                                            t = l.ops.pop(), l.trys.pop();
                                            continue;
                                        default:
                                            if (!(i = 0 < (i = l.trys).length && i[i.length - 1]) && (6 === t[0] || 2 === t[0])) {
                                                l = 0;
                                                continue
                                            }
                                            if (3 === t[0] && (!i || t[1] > i[0] && t[1] < i[3])) {
                                                l.label = t[1];
                                                break
                                            }
                                            if (6 === t[0] && l.label < i[1]) {
                                                l.label = i[1], i = t;
                                                break
                                            }
                                            if (i && l.label < i[2]) {
                                                l.label = i[2], l.ops.push(t);
                                                break
                                            }
                                            i[2] && l.ops.pop(), l.trys.pop();
                                            continue
                                    }
                                    t = r.call(n, l)
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
                Za = Fr.PlayabilityStatus,
                $a = Fr.counterEvents,
                eo = Fr.avatarChatUpsellLayer,
                to = Fr.avatarChatUpsellLayerU13,
                no = Fr.playButtonErrorStatusTranslationMap,
                ro = Fr.PlayabilityStatus,
                ao = (0, re.withTranslations)(function(e) {
                    var t = e.translate,
                        n = e.playabilityStatus,
                        r = e.unplayableDisplayText,
                        e = e.errorClassName,
                        e = void 0 === e ? "error-message" : e;
                    return ee().createElement("span", {
                        "data-testid": "play-error",
                        className: e
                    }, r || t(no[n] || no[ro.UnplayableOtherReason]))
                }, e),
                oo = Fr.PlayabilityStatus,
                te = (0, re.withTranslations)(function(e) {
                    var t = e.translate,
                        n = e.playabilityStatus,
                        r = e.unplayableDisplayText,
                        a = e.shouldShowNoticeAgreementIfPlayable,
                        e = e.contextualMessageClassName,
                        e = void 0 === e ? "contextual-message" : e;
                    return fa(n) ? ee().createElement(ao, {
                        playabilityStatus: n,
                        unplayableDisplayText: r,
                        errorClassName: e
                    }) : n === oo.Playable && a ? ee().createElement("span", {
                        "data-testid": "play-contextual-message",
                        className: e
                    }, t(Fr.FeatureExperienceDetails.PlayButtonMessageAgreeToNotice)) : ee().createElement(ee().Fragment, null)
                }, e),
                io = function(e, i, l, c) {
                    return new(l = l || Promise)(function(n, t) {
                        function r(e) {
                            try {
                                o(c.next(e))
                            } catch (e) {
                                t(e)
                            }
                        }

                        function a(e) {
                            try {
                                o(c.throw(e))
                            } catch (e) {
                                t(e)
                            }
                        }

                        function o(e) {
                            var t;
                            e.done ? n(e.value) : ((t = e.value) instanceof l ? t : new l(function(e) {
                                e(t)
                            })).then(r, a)
                        }
                        o((c = c.apply(e, i || [])).next())
                    })
                },
                lo = function(n, r) {
                    var a, o, i, l = {
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
                                for (; l;) try {
                                    if (a = 1, o && (i = 2 & t[0] ? o.return : t[0] ? o.throw || ((i = o.return) && i.call(o), 0) : o.next) && !(i = i.call(o, t[1])).done) return i;
                                    switch (o = 0, i && (t = [2 & t[0], i.value]), t[0]) {
                                        case 0:
                                        case 1:
                                            i = t;
                                            break;
                                        case 4:
                                            return l.label++, {
                                                value: t[1],
                                                done: !1
                                            };
                                        case 5:
                                            l.label++, o = t[1], t = [0];
                                            continue;
                                        case 7:
                                            t = l.ops.pop(), l.trys.pop();
                                            continue;
                                        default:
                                            if (!(i = 0 < (i = l.trys).length && i[i.length - 1]) && (6 === t[0] || 2 === t[0])) {
                                                l = 0;
                                                continue
                                            }
                                            if (3 === t[0] && (!i || t[1] > i[0] && t[1] < i[3])) {
                                                l.label = t[1];
                                                break
                                            }
                                            if (6 === t[0] && l.label < i[1]) {
                                                l.label = i[1], i = t;
                                                break
                                            }
                                            if (i && l.label < i[2]) {
                                                l.label = i[2], l.ops.push(t);
                                                break
                                            }
                                            i[2] && l.ops.pop(), l.trys.pop();
                                            continue
                                    }
                                    t = r.call(n, l)
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
                te = {
                    usePlayabilityStatus: e = function(n) {
                        function t() {
                            return io(void 0, void 0, void 0, function() {
                                var t;
                                return lo(this, function(e) {
                                    switch (e.label) {
                                        case 0:
                                            a(void 0), i(void 0), e.label = 1;
                                        case 1:
                                            return e.trys.push([1, 3, , 4]), [4, Jr([n])];
                                        case 2:
                                            return t = e.sent(), a(null == t ? void 0 : t.playabilityStatus), i(null == t ? void 0 : t.unplayableDisplayText), [3, 4];
                                        case 3:
                                            return e.sent(), a(Gr.TemporarilyUnavailable), i(void 0), [3, 4];
                                        case 4:
                                            return [2]
                                    }
                                })
                            })
                        }
                        var e = (0, $.useState)(void 0),
                            r = e[0],
                            a = e[1],
                            o = (0, $.useState)(void 0),
                            e = o[0],
                            i = o[1];
                        return (0, $.useEffect)(function() {
                            t();

                            function e(e) {
                                e.persisted && t()
                            }
                            return window.addEventListener("pageshow", e),
                                function() {
                                    window.removeEventListener("pageshow", e)
                                }
                        }, []), [r, t, e]
                    },
                    PlayabilityStatuses: Gr,
                    launchGame: la,
                    launchLogin: ca,
                    shouldShowUnplayableButton: fa,
                    DefaultPlayButton: function(e) {
                        var t = e.placeId,
                            n = e.rootPlaceId,
                            r = e.universeId,
                            a = e.privateServerLinkCode,
                            o = e.gameInstanceId,
                            i = e.refetchPlayabilityStatus,
                            l = e.playabilityStatus,
                            c = e.hideButtonText,
                            u = e.eventProperties,
                            s = void 0 === u ? {} : u,
                            u = e.appsFlyerReferralProperties,
                            d = void 0 === u ? {} : u,
                            p = e.disableLoadingState,
                            f = e.buttonClassName,
                            m = e.redirectPurchaseUrl,
                            v = e.showDefaultPurchaseText;
                        switch (l) {
                            case void 0:
                                return p ? ee().createElement(qa, {
                                    universeId: r,
                                    placeId: t,
                                    rootPlaceId: n,
                                    privateServerLinkCode: a,
                                    gameInstanceId: o,
                                    status: Za.Playable,
                                    eventProperties: s,
                                    appsFlyerReferralProperties: d,
                                    disableLoadingState: p,
                                    buttonClassName: f
                                }) : ee().createElement(jr.Loading, null);
                            case Za.Playable:
                            case Za.GuestProhibited:
                                return ee().createElement(qa, {
                                    universeId: r,
                                    placeId: t,
                                    rootPlaceId: n,
                                    privateServerLinkCode: a,
                                    gameInstanceId: o,
                                    status: l,
                                    eventProperties: s,
                                    appsFlyerReferralProperties: d,
                                    disableLoadingState: p,
                                    buttonClassName: f
                                });
                            case Za.ContextualPlayabilityUnverifiedSeventeenPlusUser:
                                return (0, Br.fireEvent)($a.ActionNeeded), ee().createElement(Ja, {
                                    universeId: r,
                                    hideButtonText: c,
                                    buttonClassName: f
                                });
                            case Za.PurchaseRequired:
                            case Za.FiatPurchaseRequired:
                                return ee().createElement(Va, {
                                    refetchPlayabilityStatus: i,
                                    universeId: r,
                                    placeId: t,
                                    hideButtonText: c,
                                    buttonClassName: f,
                                    redirectPurchaseUrl: m,
                                    playabilityStatus: l,
                                    showDefaultPurchaseText: v
                                });
                            case Za.ContextualPlayabilityAgeRecommendationParentalControls:
                                return (0, Br.fireEvent)($a.ActionNeeded), ee().createElement(xa, {
                                    universeId: r,
                                    hideButtonText: c,
                                    buttonClassName: f,
                                    placeId: t,
                                    rootPlaceId: n,
                                    privateServerLinkCode: a,
                                    gameInstanceId: o,
                                    eventProperties: s,
                                    appsFlyerReferralProperties: d
                                });
                            default:
                                return (0, Br.fireEvent)($a.Unplayable), ee().createElement(Ka, {
                                    hideButtonText: c,
                                    buttonClassName: f
                                })
                        }
                    },
                    PlayButton: qa,
                    PurchaseButton: Va,
                    Error: ao,
                    ContextualMessage: te
                };
            window.Roblox || (window.Roblox = {}), Object.assign(window.Roblox, {
                AuthenticationChecker: c,
                GameLauncher: M,
                GameLaunchLogger: Q,
                GamePlayEvents: V,
                PrerollPlayer: A,
                ProtocolHandlerClientInterface: be,
                VideoPreRollDFP: x,
                PlayButton: te
            }), l()(document).ready(function() {
                Z();
                var e = (0, N.DeviceMeta)();
                (e.isUWPApp || e.isUniversalApp) && (e = l()("#PlaceLauncherStatusPanel"), o.isJoinAttemptIdEnabled = "True" === (null !== (e = e.data("is-join-attempt-id-enabled")) && void 0 !== e ? e : "False"), window.Roblox.AppHybridClientInterface = o, M.setGameLaunchInterface(o)), M.setGameLaunchLogger(Q)
            })
        }()
}();
//# sourceMappingURL=https://sourcemaps.rbxcdn.com/1cd016717b563c137164096d5f635370-gameLaunch.bundle.min.js.map

/* Bundle detector */
window.Roblox && window.Roblox.BundleDetector && window.Roblox.BundleDetector.bundleDetected("GameLaunch");