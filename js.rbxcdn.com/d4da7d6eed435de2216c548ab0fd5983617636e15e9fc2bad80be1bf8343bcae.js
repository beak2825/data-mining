/*! For license information please see profileHeader.bundle.min.js.LICENSE.txt */ ! function() {
    var e = {
            452: function(e, t) {
                var n;
                ! function() {
                    "use strict";
                    var r = {}.hasOwnProperty;

                    function a() {
                        for (var e = "", t = 0; t < arguments.length; t++) {
                            var n = arguments[t];
                            n && (e = i(e, o(n)))
                        }
                        return e
                    }

                    function o(e) {
                        if ("string" == typeof e || "number" == typeof e) return e;
                        if ("object" != typeof e) return "";
                        if (Array.isArray(e)) return a.apply(null, e);
                        if (e.toString !== Object.prototype.toString && !e.toString.toString().includes("[native code]")) return e.toString();
                        var t = "";
                        for (var n in e) r.call(e, n) && e[n] && (t = i(t, n));
                        return t
                    }

                    function i(e, t) {
                        return t ? e ? e + " " + t : e + t : e
                    }
                    e.exports ? (a.default = a, e.exports = a) : void 0 === (n = function() {
                        return a
                    }.apply(t, [])) || (e.exports = n)
                }()
            }
        },
        t = {};

    function n(r) {
        var a = t[r];
        if (void 0 !== a) return a.exports;
        var o = t[r] = {
            exports: {}
        };
        return e[r](o, o.exports, n), o.exports
    }
    n.n = function(e) {
            var t = e && e.__esModule ? function() {
                return e.default
            } : function() {
                return e
            };
            return n.d(t, {
                a: t
            }), t
        }, n.d = function(e, t) {
            for (var r in t) n.o(t, r) && !n.o(e, r) && Object.defineProperty(e, r, {
                enumerable: !0,
                get: t[r]
            })
        }, n.o = function(e, t) {
            return Object.prototype.hasOwnProperty.call(e, t)
        },
        function() {
            "use strict";
            var e = CoreUtilities,
                t = React,
                r = n.n(t),
                a = ReactDOM,
                o = WebBlox,
                i = {
                    profileHeaderContainer: function() {
                        return document.getElementById("profile-header-container")
                    },
                    translationKeys: {
                        friends: "Label.Friends",
                        friend: "HeadingFriendSingular",
                        connections: "Label.Connections",
                        connection: "Label.Connection",
                        followers: "Label.Followers",
                        following: "Label.Following",
                        customizeName: "Label.CustomizeName",
                        cancel: "Label.Cancel",
                        setCustomName: "Description.SetCustomName2",
                        recognizeFriends: "Description.RecognizeFriendsByCustomName",
                        save: "Action.Save",
                        customizeNamePlaceholder: "Label.CustomizeNamePlaceholder",
                        invalidAlias: "Message.InvalidAliasError",
                        customName: "Label.CustomName",
                        recognizeTooltip: "Tooltip.CustomNameProfile",
                        buttons: {
                            accept: "Action.Accept",
                            addFriend: "Action.AddFriend",
                            addConnection: "Label.AddConnection",
                            pending: "Action.Pending",
                            unFriend: "Action.Unfriend",
                            removeConnection: "Label.RemoveConnection",
                            chat: "Action.Chat",
                            message: "Action.Message",
                            joinGame: "Action.JoinGame",
                            openDropdown: "Action.SeeMore"
                        },
                        modal: {
                            block: {
                                title: "Heading.BlockUser",
                                body: "Message.BlockConfirmation",
                                blockButton: "Action.Block",
                                blockAndReportButton: "Action.BlockAndReport",
                                cancelButton: "Action.Cancel"
                            },
                            unblock: {
                                title: "Heading.UnblockUser",
                                body: "Message.UnblockConfirmation",
                                unblockButton: "Action.Unblock",
                                cancelButton: "Action.Cancel"
                            }
                        },
                        dropdown: {
                            message: "Action.Message",
                            follow: "Action.Follow",
                            unfollow: "Action.Unfollow",
                            blockUser: "Action.BlockUser",
                            unblockUser: "Action.UnblockUser",
                            inventory: "Action.Inventory",
                            favorites: "Action.Favorites",
                            impersonateUser: "Action.ImpersonateUser",
                            tradeItems: "Action.TradeItems"
                        },
                        error: {
                            acceptFriendRequestFailed: "Message.AcceptFriendRequestError",
                            sendFriendRequestFailed: "Message.SendFriendRequestError",
                            removeFriendFailed: "Message.RemoveFriendError",
                            followFailed: "Message.FollowError",
                            unfollowFailed: "Message.UnfollowError",
                            blockFailed: "Message.BlockError",
                            blockRequestFailed: "Message.BlockRequestError",
                            impersonateUserFailed: "Message.ImpersonateUserError",
                            updateStatusFailed: "Message.UpdateStatusError",
                            tooManyAttempts: "Response.TooManyAttempts",
                            blockLimitExceeded: "Message.TooManyBlockedUsersError",
                            targetAlreadyBlocked: "Message.UserAlreadyBlockedError",
                            targetNotBlocked: "Message.TargetNotBlockedError",
                            parentManaged: "Message.ParentBlockedUserError",
                            blockedOnPlatform: "Message.TargetBlockedOnPlatform"
                        }
                    },
                    eventNames: {
                        playerFriendAdd: "playerFriendAdd",
                        playerFriendAccept: "playerFriendAccept",
                        tradeEntryPoint: "tradeEntryPoint",
                        modalOpen: "modalOpen",
                        buttonClick: "buttonClick",
                        customNameInvalidInput: "customizeNameSaveAttemptInvalidInput",
                        customNameMaxLimit: "customizeNameMaximumCharLimitTyped",
                        customNameClearedInput: "customizeNameClearedInput"
                    },
                    eventCtx: {
                        userProfile: "userProfile",
                        profileMenu: "profileMenu",
                        customizeName: "customizeName"
                    },
                    maxCharactersForAlias: 20,
                    eventBtns: {
                        saveAlias: "saveAlias",
                        closeCustomName: "closeCustomizeName"
                    },
                    experiments: {
                        profileFRAcceptCTALayer: "Social.Profile",
                        profileFRAcceptCTAParameter: "useProminentFRAcceptCTA"
                    }
                },
                s = ReactUtilities,
                l = CoreRobloxUtilities,
                c = HeaderScripts,
                u = RobloxUserProfiles,
                d = RobloxPresence,
                f = n.n(d),
                p = Roblox,
                m = p.EnvironmentUrls.friendsApi,
                v = p.EnvironmentUrls.premiumFeaturesApi,
                h = p.EnvironmentUrls.usersApi,
                b = p.EnvironmentUrls.gamesApi,
                y = p.EnvironmentUrls.contactsApi,
                w = (p.EnvironmentUrls.accountSettingsApi, p.EnvironmentUrls.authApi),
                g = p.EnvironmentUrls.tradesApi,
                E = p.EnvironmentUrls.apiGatewayUrl,
                S = p.EnvironmentUrls.chatApi,
                k = function(e) {
                    return {
                        url: "".concat(m, "/v1/users/").concat(e, "/friends/count"),
                        withCredentials: !0
                    }
                },
                C = function(e) {
                    return {
                        url: "".concat(m, "/v1/users/").concat(e, "/followings/count"),
                        withCredentials: !0
                    }
                },
                A = function(e) {
                    return {
                        url: "".concat(m, "/v1/users/").concat(e, "/followers/count"),
                        withCredentials: !0
                    }
                },
                T = function(e) {
                    return {
                        url: "".concat(v, "/v1/users/").concat(e, "/validate-membership"),
                        withCredentials: !0
                    }
                },
                U = function(e) {
                    return {
                        url: "".concat(h, "/v1/users/").concat(e),
                        withCredentials: !0
                    }
                },
                N = function(e) {
                    return {
                        url: "".concat(m, "/v1/users/").concat(e, "/friends/statuses"),
                        withCredentials: !0
                    }
                },
                P = function() {
                    return {
                        url: "".concat(S, "/v1/metadata"),
                        withCredentials: !0
                    }
                },
                x = function(e) {
                    return {
                        url: "".concat(m, "/v1/users/").concat(e, "/request-friendship"),
                        withCredentials: !0
                    }
                },
                F = function(e) {
                    return {
                        url: "".concat(m, "/v1/users/").concat(e, "/accept-friend-request"),
                        withCredentials: !0
                    }
                },
                I = function(e) {
                    return {
                        url: "".concat(m, "/v1/users/").concat(e, "/unfriend"),
                        withCredentials: !0
                    }
                },
                R = function() {
                    return {
                        url: "".concat(m, "/v1/user/following-exists"),
                        withCredentials: !0
                    }
                },
                _ = function() {
                    return {
                        url: "".concat(y, "/v1/user/tag"),
                        withCredentials: !0
                    }
                },
                B = function(e) {
                    return {
                        url: "".concat(m, "/v1/users/").concat(e, "/follow"),
                        withCredentials: !0
                    }
                },
                O = function(e) {
                    return {
                        url: "".concat(m, "/v1/users/").concat(e, "/unfollow"),
                        withCredentials: !0
                    }
                },
                M = function(e) {
                    return {
                        url: "".concat(b, "/v2/users/").concat(e, "/games"),
                        withCredentials: !0
                    }
                },
                L = function(e) {
                    return {
                        url: "".concat(E, "/user-blocking-api/v1/users/").concat(e, "/block-user"),
                        withCredentials: !0
                    }
                },
                D = function(e) {
                    return {
                        url: "".concat(E, "/user-blocking-api/v1/users/").concat(e, "/unblock-user"),
                        withCredentials: !0
                    }
                },
                W = function(e) {
                    return {
                        url: "".concat(E, "/user-blocking-api/v1/users/").concat(e, "/is-blocked"),
                        withCredentials: !0
                    }
                },
                K = function() {
                    return {
                        url: "".concat(E, "/user-blocking-api/v1/users/batch-check-reciprocal-block"),
                        withCredentials: !0
                    }
                },
                G = function(e) {
                    return {
                        url: "".concat(w, "/v2/users/").concat(e, "/impersonate"),
                        withCredentials: !0
                    }
                },
                z = function(e) {
                    return {
                        url: "".concat(g, "/v1/users/").concat(e, "/can-trade-with"),
                        withCredentials: !0
                    }
                },
                q = function() {
                    return {
                        url: "".concat(E, "/universal-app-configuration/v1/behaviors/web-profile-ui/content"),
                        withCredentials: !0
                    }
                },
                H = function() {
                    return {
                        url: "".concat(E, "/universal-app-configuration/v1/behaviors/web-rename-friends/content"),
                        retryable: !0,
                        withCredentials: !0
                    }
                },
                j = function(e, t, n, r) {
                    return new(n || (n = Promise))((function(a, o) {
                        function i(e) {
                            try {
                                l(r.next(e))
                            } catch (e) {
                                o(e)
                            }
                        }

                        function s(e) {
                            try {
                                l(r.throw(e))
                            } catch (e) {
                                o(e)
                            }
                        }

                        function l(e) {
                            var t;
                            e.done ? a(e.value) : (t = e.value, t instanceof n ? t : new n((function(e) {
                                e(t)
                            }))).then(i, s)
                        }
                        l((r = r.apply(e, t || [])).next())
                    }))
                },
                V = function(e, t) {
                    var n, r, a, o, i = {
                        label: 0,
                        sent: function() {
                            if (1 & a[0]) throw a[1];
                            return a[1]
                        },
                        trys: [],
                        ops: []
                    };
                    return o = {
                        next: s(0),
                        throw: s(1),
                        return: s(2)
                    }, "function" == typeof Symbol && (o[Symbol.iterator] = function() {
                        return this
                    }), o;

                    function s(o) {
                        return function(s) {
                            return function(o) {
                                if (n) throw new TypeError("Generator is already executing.");
                                for (; i;) try {
                                    if (n = 1, r && (a = 2 & o[0] ? r.return : o[0] ? r.throw || ((a = r.return) && a.call(r), 0) : r.next) && !(a = a.call(r, o[1])).done) return a;
                                    switch (r = 0, a && (o = [2 & o[0], a.value]), o[0]) {
                                        case 0:
                                        case 1:
                                            a = o;
                                            break;
                                        case 4:
                                            return i.label++, {
                                                value: o[1],
                                                done: !1
                                            };
                                        case 5:
                                            i.label++, r = o[1], o = [0];
                                            continue;
                                        case 7:
                                            o = i.ops.pop(), i.trys.pop();
                                            continue;
                                        default:
                                            if (!(a = i.trys, (a = a.length > 0 && a[a.length - 1]) || 6 !== o[0] && 2 !== o[0])) {
                                                i = 0;
                                                continue
                                            }
                                            if (3 === o[0] && (!a || o[1] > a[0] && o[1] < a[3])) {
                                                i.label = o[1];
                                                break
                                            }
                                            if (6 === o[0] && i.label < a[1]) {
                                                i.label = a[1], a = o;
                                                break
                                            }
                                            if (a && i.label < a[2]) {
                                                i.label = a[2], i.ops.push(o);
                                                break
                                            }
                                            a[2] && i.ops.pop(), i.trys.pop();
                                            continue
                                    }
                                    o = t.call(e, i)
                                } catch (e) {
                                    o = [6, e], r = 0
                                } finally {
                                    n = a = 0
                                }
                                if (5 & o[0]) throw o[1];
                                return {
                                    value: o[0] ? o[1] : void 0,
                                    done: !0
                                }
                            }([o, s])
                        }
                    }
                },
                J = function(t) {
                    return j(void 0, void 0, Promise, (function() {
                        return V(this, (function(n) {
                            switch (n.label) {
                                case 0:
                                    return [4, e.httpService.post(O(t))];
                                case 1:
                                    return [2, n.sent().data]
                            }
                        }))
                    }))
                },
                Q = function(t) {
                    return j(void 0, void 0, Promise, (function() {
                        return V(this, (function(n) {
                            switch (n.label) {
                                case 0:
                                    return [4, e.httpService.post(B(t))];
                                case 1:
                                    return [2, n.sent().data]
                            }
                        }))
                    }))
                },
                X = function(t) {
                    return j(void 0, void 0, Promise, (function() {
                        return V(this, (function(n) {
                            switch (n.label) {
                                case 0:
                                    return [4, e.httpService.post(R(), {
                                        targetUserIds: [t]
                                    })];
                                case 1:
                                    return [2, n.sent().data.followings[0]]
                            }
                        }))
                    }))
                },
                Y = function(t) {
                    return j(void 0, void 0, Promise, (function() {
                        return V(this, (function(n) {
                            switch (n.label) {
                                case 0:
                                    return [4, e.httpService.post(I(t))];
                                case 1:
                                    return [2, n.sent().data]
                            }
                        }))
                    }))
                },
                Z = function(t) {
                    return j(void 0, void 0, Promise, (function() {
                        return V(this, (function(n) {
                            switch (n.label) {
                                case 0:
                                    return [4, e.httpService.post(F(t))];
                                case 1:
                                    return [2, n.sent().data]
                            }
                        }))
                    }))
                },
                $ = function(t) {
                    return j(void 0, void 0, Promise, (function() {
                        var n;
                        return V(this, (function(r) {
                            switch (r.label) {
                                case 0:
                                    return n = e.urlService.getQueryParam("friendshipSourceType") || "UserProfile", [4, e.httpService.post(x(t), {
                                        friendshipOriginSourceType: n
                                    })];
                                case 1:
                                    return [2, r.sent().data]
                            }
                        }))
                    }))
                },
                ee = function(t, n) {
                    return j(void 0, void 0, Promise, (function() {
                        return V(this, (function(r) {
                            switch (r.label) {
                                case 0:
                                    return [4, e.httpService.get(N(t), {
                                        userIds: [n]
                                    })];
                                case 1:
                                    return [2, r.sent().data.data[0]]
                            }
                        }))
                    }))
                },
                te = function(t) {
                    return j(void 0, void 0, Promise, (function() {
                        return V(this, (function(n) {
                            switch (n.label) {
                                case 0:
                                    return [4, e.httpService.get(C(t))];
                                case 1:
                                    return [2, n.sent().data]
                            }
                        }))
                    }))
                },
                ne = function(t) {
                    return j(void 0, void 0, Promise, (function() {
                        return V(this, (function(n) {
                            switch (n.label) {
                                case 0:
                                    return [4, e.httpService.get(A(t))];
                                case 1:
                                    return [2, n.sent().data]
                            }
                        }))
                    }))
                },
                re = function(t) {
                    return j(void 0, void 0, Promise, (function() {
                        return V(this, (function(n) {
                            switch (n.label) {
                                case 0:
                                    return [4, e.httpService.get(k(t))];
                                case 1:
                                    return [2, n.sent().data]
                            }
                        }))
                    }))
                },
                ae = function() {
                    return j(void 0, void 0, Promise, (function() {
                        var t;
                        return V(this, (function(n) {
                            switch (n.label) {
                                case 0:
                                    return n.trys.push([0, 2, , 3]), [4, e.httpService.get(H())];
                                case 1:
                                    return [2, n.sent().data.renameFriendsToConnections];
                                case 2:
                                    return t = n.sent(), console.error("Error fetching renameFriendsToConnections:", t), [2, !1];
                                case 3:
                                    return [2]
                            }
                        }))
                    }))
                },
                oe = function(e, t, n, r) {
                    return new(n || (n = Promise))((function(a, o) {
                        function i(e) {
                            try {
                                l(r.next(e))
                            } catch (e) {
                                o(e)
                            }
                        }

                        function s(e) {
                            try {
                                l(r.throw(e))
                            } catch (e) {
                                o(e)
                            }
                        }

                        function l(e) {
                            var t;
                            e.done ? a(e.value) : (t = e.value, t instanceof n ? t : new n((function(e) {
                                e(t)
                            }))).then(i, s)
                        }
                        l((r = r.apply(e, t || [])).next())
                    }))
                },
                ie = function(e, t) {
                    var n, r, a, o, i = {
                        label: 0,
                        sent: function() {
                            if (1 & a[0]) throw a[1];
                            return a[1]
                        },
                        trys: [],
                        ops: []
                    };
                    return o = {
                        next: s(0),
                        throw: s(1),
                        return: s(2)
                    }, "function" == typeof Symbol && (o[Symbol.iterator] = function() {
                        return this
                    }), o;

                    function s(o) {
                        return function(s) {
                            return function(o) {
                                if (n) throw new TypeError("Generator is already executing.");
                                for (; i;) try {
                                    if (n = 1, r && (a = 2 & o[0] ? r.return : o[0] ? r.throw || ((a = r.return) && a.call(r), 0) : r.next) && !(a = a.call(r, o[1])).done) return a;
                                    switch (r = 0, a && (o = [2 & o[0], a.value]), o[0]) {
                                        case 0:
                                        case 1:
                                            a = o;
                                            break;
                                        case 4:
                                            return i.label++, {
                                                value: o[1],
                                                done: !1
                                            };
                                        case 5:
                                            i.label++, r = o[1], o = [0];
                                            continue;
                                        case 7:
                                            o = i.ops.pop(), i.trys.pop();
                                            continue;
                                        default:
                                            if (!(a = i.trys, (a = a.length > 0 && a[a.length - 1]) || 6 !== o[0] && 2 !== o[0])) {
                                                i = 0;
                                                continue
                                            }
                                            if (3 === o[0] && (!a || o[1] > a[0] && o[1] < a[3])) {
                                                i.label = o[1];
                                                break
                                            }
                                            if (6 === o[0] && i.label < a[1]) {
                                                i.label = a[1], a = o;
                                                break
                                            }
                                            if (a && i.label < a[2]) {
                                                i.label = a[2], i.ops.push(o);
                                                break
                                            }
                                            a[2] && i.ops.pop(), i.trys.pop();
                                            continue
                                    }
                                    o = t.call(e, i)
                                } catch (e) {
                                    o = [6, e], r = 0
                                } finally {
                                    n = a = 0
                                }
                                if (5 & o[0]) throw o[1];
                                return {
                                    value: o[0] ? o[1] : void 0,
                                    done: !0
                                }
                            }([o, s])
                        }
                    }
                },
                se = function(t) {
                    return oe(void 0, void 0, Promise, (function() {
                        return ie(this, (function(n) {
                            switch (n.label) {
                                case 0:
                                    return [4, e.httpService.get(T(t))];
                                case 1:
                                    return [2, n.sent().data]
                            }
                        }))
                    }))
                },
                le = {
                    common: ["Feature.Home", "CommonUI.Features", "Feature.BlockingModal"],
                    feature: "Feature.Profile"
                },
                ce = RobloxThumbnails,
                ue = function(e) {
                    var t = e.profileUserId,
                        n = e.presenceUrl;
                    return r().createElement("div", {
                        className: "avatar avatar-headshot-lg card-plain profile-avatar-image"
                    }, r().createElement("span", {
                        className: "avatar-card-link avatar-image-link"
                    }, r().createElement(ce.Thumbnail2d, {
                        containerClass: "avatar-card-image profile-avatar-thumb",
                        targetId: t,
                        format: ce.ThumbnailFormat.webp,
                        type: ce.ThumbnailTypes.avatarHeadshot,
                        size: ce.ThumbnailBadgeIconSize.size150
                    })), r().createElement("a", {
                        className: "avatar-status",
                        href: n
                    }, r().createElement(f().PresenceStatusIcon, {
                        className: "profile-avatar-status",
                        userId: t
                    })))
                };
            ue.defaultProps = {
                presenceUrl: ""
            };
            var de, fe = ue,
                pe = RobloxBadges;
            ! function(e) {
                e.Friends = "Friends", e.NotFriends = "NotFriends", e.RequestSent = "RequestSent", e.RequestReceived = "RequestReceived"
            }(de || (de = {}));
            var me, ve = de;
            ! function(e) {
                e[e.SET_PROFILE_DATA = 0] = "SET_PROFILE_DATA", e[e.UPDATE_FRIEND_COUNT = 1] = "UPDATE_FRIEND_COUNT", e[e.SET_FRIEND_STATUS = 2] = "SET_FRIEND_STATUS", e[e.SET_NAMES = 3] = "SET_NAMES", e[e.SET_ERROR_MESSAGE = 4] = "SET_ERROR_MESSAGE", e[e.UPDATE_FOLLOWERS_COUNT = 5] = "UPDATE_FOLLOWERS_COUNT", e[e.UPDATE_FOLLOWING = 6] = "UPDATE_FOLLOWING", e[e.SHOW_BLOCK_USER_MODAL = 7] = "SHOW_BLOCK_USER_MODAL", e[e.UPDATE_USER_BLOCK = 8] = "UPDATE_USER_BLOCK", e[e.SHOW_ALIAS_EDIT_MODAL = 9] = "SHOW_ALIAS_EDIT_MODAL"
            }(me || (me = {}));
            var he, be = function() {
                    return be = Object.assign || function(e) {
                        for (var t, n = 1, r = arguments.length; n < r; n++)
                            for (var a in t = arguments[n]) Object.prototype.hasOwnProperty.call(t, a) && (e[a] = t[a]);
                        return e
                    }, be.apply(this, arguments)
                },
                ye = function(e, t) {
                    switch (t.type) {
                        case me.SET_PROFILE_DATA:
                            return be(be({}, e), t.data);
                        case me.UPDATE_FRIEND_COUNT:
                            return be(be({}, e), {
                                friendCount: e.friendCount + t.amount
                            });
                        case me.SET_FRIEND_STATUS:
                            return be(be({}, e), {
                                friendStatus: t.status
                            });
                        case me.SET_NAMES:
                            return be(be({}, e), {
                                names: t.names
                            });
                        case me.SET_ERROR_MESSAGE:
                            return be(be({}, e), {
                                showUserBlockModal: !1,
                                errorMessage: t.message
                            });
                        case me.UPDATE_FOLLOWERS_COUNT:
                            return be(be({}, e), {
                                followersCount: e.followersCount + t.amount
                            });
                        case me.UPDATE_FOLLOWING:
                            return be(be({}, e), {
                                isFollowing: t.following
                            });
                        case me.SHOW_BLOCK_USER_MODAL:
                            return be(be({}, e), {
                                showUserBlockModal: t.show
                            });
                        case me.SHOW_ALIAS_EDIT_MODAL:
                            return be(be({}, e), {
                                showAliasEditModal: t.show
                            });
                        case me.UPDATE_USER_BLOCK:
                            return be(be({}, e), {
                                isBlocked: t.block,
                                friendStatus: ve.NotFriends,
                                showUserBlockModal: !1
                            });
                        default:
                            throw new Error
                    }
                },
                we = {
                    names: {
                        combinedName: "",
                        username: "",
                        displayName: "",
                        alias: ""
                    },
                    friendCount: 0,
                    followingsCount: 0,
                    followersCount: 0,
                    hasPremiumMembership: !1,
                    hasVerifiedBadge: !1,
                    friendStatus: "",
                    canChat: !1,
                    errorMessage: null,
                    isFollowed: !1,
                    isFollowing: !1,
                    hasFavorites: !1,
                    showUserBlockModal: !1,
                    showAliasEditModal: !1,
                    isBlocked: !1,
                    canTradeWith: !1,
                    policies: {
                        userBlockingApiEnabled: 0
                    },
                    mustNotLinkConnections: !0,
                    isFriendsRenamedToConnections: "true" === localStorage.getItem("isFriendsRenamedToConnections")
                },
                ge = (0, t.createContext)({
                    state: we,
                    dispatch: function() {
                        return !0
                    }
                }),
                Ee = function(e) {
                    var n = e.children,
                        a = (0, t.useReducer)(ye, we),
                        o = a[0],
                        i = a[1];
                    return r().createElement(ge.Provider, {
                        value: {
                            state: o,
                            dispatch: i
                        }
                    }, n)
                },
                Se = function() {
                    var e = (0, t.useContext)(ge);
                    if (null === e) throw new Error("ProfileHeaderContext was not provided in the current scope");
                    return e
                },
                ke = function(e) {
                    var t, n = e.profileUserId,
                        a = Se().state;
                    a.hasVerifiedBadge ? t = r().createElement("span", {
                        "data-testid": "verified-badge"
                    }, r().createElement(pe.VerifiedBadgeIconContainer, {
                        overrideImgClass: "profile-verified-badge-icon",
                        size: pe.BadgeSizes.TITLE,
                        titleText: n.toString()
                    })) : a.hasPremiumMembership && (t = r().createElement(o.PremiumIcon, {
                        "data-testid": "premium-badge",
                        className: "profile-header-premium-badge"
                    }));
                    var i;
                    return r().createElement("div", {
                        className: "profile-header-names"
                    }, r().createElement("span", {
                        className: "profile-header-title-container"
                    }, r().createElement(o.Typography, {
                        variant: "h1"
                    }, a.names.combinedName), t), r().createElement(o.Typography, {
                        variant: "body1",
                        color: "secondary",
                        className: "profile-header-username"
                    }, (i = a.names.username) ? "@" + i : ""))
                },
                Ce = function(t) {
                    var n = t.label,
                        a = t.count,
                        i = t.profileId,
                        s = t.subPage,
                        l = t.isClickable,
                        c = "/users/" + i + "/friends#!/" + s,
                        u = e.abbreviateNumber.getTruncValue(a, 1e3, e.abbreviateNumber.suffixNames.withoutPlus, 1),
                        d = u.indexOf(".0"); - 1 !== d && (u = u.substring(0, d) + u.substring(d + 2));
                    var f = l ? 0 : -1,
                        p = l ? {} : {
                            pointerEvents: "none",
                            cursor: "default"
                        };
                    return r().createElement("li", null, r().createElement("a", {
                        className: "profile-header-social-count",
                        href: e.urlService.getAbsoluteUrl(c),
                        title: a + " " + n,
                        style: p,
                        tabIndex: f
                    }, r().createElement(o.Typography, {
                        variant: "body1"
                    }, r().createElement("b", null, u), " ", r().createElement("span", {
                        className: "profile-header-social-count-label"
                    }, n))))
                },
                Ae = function(e, t, n, r) {
                    return new(n || (n = Promise))((function(a, o) {
                        function i(e) {
                            try {
                                l(r.next(e))
                            } catch (e) {
                                o(e)
                            }
                        }

                        function s(e) {
                            try {
                                l(r.throw(e))
                            } catch (e) {
                                o(e)
                            }
                        }

                        function l(e) {
                            var t;
                            e.done ? a(e.value) : (t = e.value, t instanceof n ? t : new n((function(e) {
                                e(t)
                            }))).then(i, s)
                        }
                        l((r = r.apply(e, t || [])).next())
                    }))
                },
                Te = function(e, t) {
                    var n, r, a, o, i = {
                        label: 0,
                        sent: function() {
                            if (1 & a[0]) throw a[1];
                            return a[1]
                        },
                        trys: [],
                        ops: []
                    };
                    return o = {
                        next: s(0),
                        throw: s(1),
                        return: s(2)
                    }, "function" == typeof Symbol && (o[Symbol.iterator] = function() {
                        return this
                    }), o;

                    function s(o) {
                        return function(s) {
                            return function(o) {
                                if (n) throw new TypeError("Generator is already executing.");
                                for (; i;) try {
                                    if (n = 1, r && (a = 2 & o[0] ? r.return : o[0] ? r.throw || ((a = r.return) && a.call(r), 0) : r.next) && !(a = a.call(r, o[1])).done) return a;
                                    switch (r = 0, a && (o = [2 & o[0], a.value]), o[0]) {
                                        case 0:
                                        case 1:
                                            a = o;
                                            break;
                                        case 4:
                                            return i.label++, {
                                                value: o[1],
                                                done: !1
                                            };
                                        case 5:
                                            i.label++, r = o[1], o = [0];
                                            continue;
                                        case 7:
                                            o = i.ops.pop(), i.trys.pop();
                                            continue;
                                        default:
                                            if (!(a = i.trys, (a = a.length > 0 && a[a.length - 1]) || 6 !== o[0] && 2 !== o[0])) {
                                                i = 0;
                                                continue
                                            }
                                            if (3 === o[0] && (!a || o[1] > a[0] && o[1] < a[3])) {
                                                i.label = o[1];
                                                break
                                            }
                                            if (6 === o[0] && i.label < a[1]) {
                                                i.label = a[1], a = o;
                                                break
                                            }
                                            if (a && i.label < a[2]) {
                                                i.label = a[2], i.ops.push(o);
                                                break
                                            }
                                            a[2] && i.ops.pop(), i.trys.pop();
                                            continue
                                    }
                                    o = t.call(e, i)
                                } catch (e) {
                                    o = [6, e], r = 0
                                } finally {
                                    n = a = 0
                                }
                                if (5 & o[0]) throw o[1];
                                return {
                                    value: o[0] ? o[1] : void 0,
                                    done: !0
                                }
                            }([o, s])
                        }
                    }
                },
                Ue = function(t) {
                    return Ae(void 0, void 0, Promise, (function() {
                        return Te(this, (function(n) {
                            switch (n.label) {
                                case 0:
                                    return [4, e.httpService.get(U(t))];
                                case 1:
                                    return [2, n.sent().data]
                            }
                        }))
                    }))
                },
                Ne = function(e, t, n, r) {
                    return new(n || (n = Promise))((function(a, o) {
                        function i(e) {
                            try {
                                l(r.next(e))
                            } catch (e) {
                                o(e)
                            }
                        }

                        function s(e) {
                            try {
                                l(r.throw(e))
                            } catch (e) {
                                o(e)
                            }
                        }

                        function l(e) {
                            var t;
                            e.done ? a(e.value) : (t = e.value, t instanceof n ? t : new n((function(e) {
                                e(t)
                            }))).then(i, s)
                        }
                        l((r = r.apply(e, t || [])).next())
                    }))
                },
                Pe = function(e, t) {
                    var n, r, a, o, i = {
                        label: 0,
                        sent: function() {
                            if (1 & a[0]) throw a[1];
                            return a[1]
                        },
                        trys: [],
                        ops: []
                    };
                    return o = {
                        next: s(0),
                        throw: s(1),
                        return: s(2)
                    }, "function" == typeof Symbol && (o[Symbol.iterator] = function() {
                        return this
                    }), o;

                    function s(o) {
                        return function(s) {
                            return function(o) {
                                if (n) throw new TypeError("Generator is already executing.");
                                for (; i;) try {
                                    if (n = 1, r && (a = 2 & o[0] ? r.return : o[0] ? r.throw || ((a = r.return) && a.call(r), 0) : r.next) && !(a = a.call(r, o[1])).done) return a;
                                    switch (r = 0, a && (o = [2 & o[0], a.value]), o[0]) {
                                        case 0:
                                        case 1:
                                            a = o;
                                            break;
                                        case 4:
                                            return i.label++, {
                                                value: o[1],
                                                done: !1
                                            };
                                        case 5:
                                            i.label++, r = o[1], o = [0];
                                            continue;
                                        case 7:
                                            o = i.ops.pop(), i.trys.pop();
                                            continue;
                                        default:
                                            if (!(a = i.trys, (a = a.length > 0 && a[a.length - 1]) || 6 !== o[0] && 2 !== o[0])) {
                                                i = 0;
                                                continue
                                            }
                                            if (3 === o[0] && (!a || o[1] > a[0] && o[1] < a[3])) {
                                                i.label = o[1];
                                                break
                                            }
                                            if (6 === o[0] && i.label < a[1]) {
                                                i.label = a[1], a = o;
                                                break
                                            }
                                            if (a && i.label < a[2]) {
                                                i.label = a[2], i.ops.push(o);
                                                break
                                            }
                                            a[2] && i.ops.pop(), i.trys.pop();
                                            continue
                                    }
                                    o = t.call(e, i)
                                } catch (e) {
                                    o = [6, e], r = 0
                                } finally {
                                    n = a = 0
                                }
                                if (5 & o[0]) throw o[1];
                                return {
                                    value: o[0] ? o[1] : void 0,
                                    done: !0
                                }
                            }([o, s])
                        }
                    }
                },
                xe = function(t) {
                    return Ne(void 0, void 0, Promise, (function() {
                        return Pe(this, (function(n) {
                            switch (n.label) {
                                case 0:
                                    return [4, e.httpService.get(M(t))];
                                case 1:
                                    return [2, n.sent().data]
                            }
                        }))
                    }))
                };
            ! function(e) {
                e.Friends = "friends", e.Followers = "followers", e.Following = "following"
            }(he || (he = {}));
            var Fe, Ie = he,
                Re = function(e, t, n, r) {
                    return new(n || (n = Promise))((function(a, o) {
                        function i(e) {
                            try {
                                l(r.next(e))
                            } catch (e) {
                                o(e)
                            }
                        }

                        function s(e) {
                            try {
                                l(r.throw(e))
                            } catch (e) {
                                o(e)
                            }
                        }

                        function l(e) {
                            var t;
                            e.done ? a(e.value) : (t = e.value, t instanceof n ? t : new n((function(e) {
                                e(t)
                            }))).then(i, s)
                        }
                        l((r = r.apply(e, t || [])).next())
                    }))
                },
                _e = function(e, t) {
                    var n, r, a, o, i = {
                        label: 0,
                        sent: function() {
                            if (1 & a[0]) throw a[1];
                            return a[1]
                        },
                        trys: [],
                        ops: []
                    };
                    return o = {
                        next: s(0),
                        throw: s(1),
                        return: s(2)
                    }, "function" == typeof Symbol && (o[Symbol.iterator] = function() {
                        return this
                    }), o;

                    function s(o) {
                        return function(s) {
                            return function(o) {
                                if (n) throw new TypeError("Generator is already executing.");
                                for (; i;) try {
                                    if (n = 1, r && (a = 2 & o[0] ? r.return : o[0] ? r.throw || ((a = r.return) && a.call(r), 0) : r.next) && !(a = a.call(r, o[1])).done) return a;
                                    switch (r = 0, a && (o = [2 & o[0], a.value]), o[0]) {
                                        case 0:
                                        case 1:
                                            a = o;
                                            break;
                                        case 4:
                                            return i.label++, {
                                                value: o[1],
                                                done: !1
                                            };
                                        case 5:
                                            i.label++, r = o[1], o = [0];
                                            continue;
                                        case 7:
                                            o = i.ops.pop(), i.trys.pop();
                                            continue;
                                        default:
                                            if (!(a = i.trys, (a = a.length > 0 && a[a.length - 1]) || 6 !== o[0] && 2 !== o[0])) {
                                                i = 0;
                                                continue
                                            }
                                            if (3 === o[0] && (!a || o[1] > a[0] && o[1] < a[3])) {
                                                i.label = o[1];
                                                break
                                            }
                                            if (6 === o[0] && i.label < a[1]) {
                                                i.label = a[1], a = o;
                                                break
                                            }
                                            if (a && i.label < a[2]) {
                                                i.label = a[2], i.ops.push(o);
                                                break
                                            }
                                            a[2] && i.ops.pop(), i.trys.pop();
                                            continue
                                    }
                                    o = t.call(e, i)
                                } catch (e) {
                                    o = [6, e], r = 0
                                } finally {
                                    n = a = 0
                                }
                                if (5 & o[0]) throw o[1];
                                return {
                                    value: o[0] ? o[1] : void 0,
                                    done: !0
                                }
                            }([o, s])
                        }
                    }
                },
                Be = function() {
                    return Re(void 0, void 0, Promise, (function() {
                        var t;
                        return _e(this, (function(n) {
                            switch (n.label) {
                                case 0:
                                    return [4, e.httpService.get(P())];
                                case 1:
                                    return [2, {
                                        chatEnabled: null == (t = n.sent().data) ? void 0 : t.isChatUserMessagesEnabled
                                    }]
                            }
                        }))
                    }))
                },
                Oe = function(e, t, n, r) {
                    return new(n || (n = Promise))((function(a, o) {
                        function i(e) {
                            try {
                                l(r.next(e))
                            } catch (e) {
                                o(e)
                            }
                        }

                        function s(e) {
                            try {
                                l(r.throw(e))
                            } catch (e) {
                                o(e)
                            }
                        }

                        function l(e) {
                            var t;
                            e.done ? a(e.value) : (t = e.value, t instanceof n ? t : new n((function(e) {
                                e(t)
                            }))).then(i, s)
                        }
                        l((r = r.apply(e, t || [])).next())
                    }))
                },
                Me = function(e, t) {
                    var n, r, a, o, i = {
                        label: 0,
                        sent: function() {
                            if (1 & a[0]) throw a[1];
                            return a[1]
                        },
                        trys: [],
                        ops: []
                    };
                    return o = {
                        next: s(0),
                        throw: s(1),
                        return: s(2)
                    }, "function" == typeof Symbol && (o[Symbol.iterator] = function() {
                        return this
                    }), o;

                    function s(o) {
                        return function(s) {
                            return function(o) {
                                if (n) throw new TypeError("Generator is already executing.");
                                for (; i;) try {
                                    if (n = 1, r && (a = 2 & o[0] ? r.return : o[0] ? r.throw || ((a = r.return) && a.call(r), 0) : r.next) && !(a = a.call(r, o[1])).done) return a;
                                    switch (r = 0, a && (o = [2 & o[0], a.value]), o[0]) {
                                        case 0:
                                        case 1:
                                            a = o;
                                            break;
                                        case 4:
                                            return i.label++, {
                                                value: o[1],
                                                done: !1
                                            };
                                        case 5:
                                            i.label++, r = o[1], o = [0];
                                            continue;
                                        case 7:
                                            o = i.ops.pop(), i.trys.pop();
                                            continue;
                                        default:
                                            if (!(a = i.trys, (a = a.length > 0 && a[a.length - 1]) || 6 !== o[0] && 2 !== o[0])) {
                                                i = 0;
                                                continue
                                            }
                                            if (3 === o[0] && (!a || o[1] > a[0] && o[1] < a[3])) {
                                                i.label = o[1];
                                                break
                                            }
                                            if (6 === o[0] && i.label < a[1]) {
                                                i.label = a[1], a = o;
                                                break
                                            }
                                            if (a && i.label < a[2]) {
                                                i.label = a[2], i.ops.push(o);
                                                break
                                            }
                                            a[2] && i.ops.pop(), i.trys.pop();
                                            continue
                                    }
                                    o = t.call(e, i)
                                } catch (e) {
                                    o = [6, e], r = 0
                                } finally {
                                    n = a = 0
                                }
                                if (5 & o[0]) throw o[1];
                                return {
                                    value: o[0] ? o[1] : void 0,
                                    done: !0
                                }
                            }([o, s])
                        }
                    }
                },
                Le = function(t) {
                    return Oe(void 0, void 0, Promise, (function() {
                        return Me(this, (function(n) {
                            switch (n.label) {
                                case 0:
                                    return [4, e.httpService.post(L(t))];
                                case 1:
                                    return [2, n.sent().data]
                            }
                        }))
                    }))
                },
                De = function(t) {
                    return Oe(void 0, void 0, Promise, (function() {
                        return Me(this, (function(n) {
                            switch (n.label) {
                                case 0:
                                    return [4, e.httpService.post(D(t))];
                                case 1:
                                    return [2, n.sent().data]
                            }
                        }))
                    }))
                },
                We = function(t) {
                    return Oe(void 0, void 0, Promise, (function() {
                        return Me(this, (function(n) {
                            switch (n.label) {
                                case 0:
                                    return [4, e.httpService.get(W(t))];
                                case 1:
                                    return [2, n.sent().data]
                            }
                        }))
                    }))
                },
                Ke = function(t) {
                    return Oe(void 0, void 0, Promise, (function() {
                        var n;
                        return Me(this, (function(r) {
                            switch (r.label) {
                                case 0:
                                    return n = parseInt(p.CurrentUser.userId, 10), Number.isNaN(n) || !n ? [2, {
                                        users: [{
                                            isBlocked: !1,
                                            isBlockingViewer: !1,
                                            userId: 0
                                        }]
                                    }] : [4, e.httpService.post(K(), {
                                        userIds: t,
                                        requesterUserId: n
                                    })];
                                case 1:
                                    return [2, r.sent().data]
                            }
                        }))
                    }))
                };
            ! function(e) {
                e[e.InvalidTarget = 0] = "InvalidTarget", e[e.TargetAlreadyBlocked = 1] = "TargetAlreadyBlocked", e[e.BlockLimitExceeded = 2] = "BlockLimitExceeded", e[e.BlockingDisabled = 3] = "BlockingDisabled", e[e.TargetNotBlocked = 4] = "TargetNotBlocked", e[e.UserUnblockable = 5] = "UserUnblockable", e[e.UserNotLoggedIn = 6] = "UserNotLoggedIn", e[e.Invalid = 7] = "Invalid", e[e.NoAuthenticatedUser = 8] = "NoAuthenticatedUser", e[e.NoBrowserTrackerId = 9] = "NoBrowserTrackerId", e[e.UserIdMismatch = 10] = "UserIdMismatch", e[e.MissingRequesterUserId = 11] = "MissingRequesterUserId", e[e.NotRccRequest = 12] = "NotRccRequest", e[e.UserCannotBlock = 13] = "UserCannotBlock", e[e.ParentManaged = 14] = "ParentManaged", e[e.NotLinked = 15] = "NotLinked", e[e.BlockedOnPlatform = 16] = "BlockedOnPlatform"
            }(Fe || (Fe = {}));
            var Ge, ze = Fe,
                qe = function(e, t, n, r) {
                    return new(n || (n = Promise))((function(a, o) {
                        function i(e) {
                            try {
                                l(r.next(e))
                            } catch (e) {
                                o(e)
                            }
                        }

                        function s(e) {
                            try {
                                l(r.throw(e))
                            } catch (e) {
                                o(e)
                            }
                        }

                        function l(e) {
                            var t;
                            e.done ? a(e.value) : (t = e.value, t instanceof n ? t : new n((function(e) {
                                e(t)
                            }))).then(i, s)
                        }
                        l((r = r.apply(e, t || [])).next())
                    }))
                },
                He = function(e, t) {
                    var n, r, a, o, i = {
                        label: 0,
                        sent: function() {
                            if (1 & a[0]) throw a[1];
                            return a[1]
                        },
                        trys: [],
                        ops: []
                    };
                    return o = {
                        next: s(0),
                        throw: s(1),
                        return: s(2)
                    }, "function" == typeof Symbol && (o[Symbol.iterator] = function() {
                        return this
                    }), o;

                    function s(o) {
                        return function(s) {
                            return function(o) {
                                if (n) throw new TypeError("Generator is already executing.");
                                for (; i;) try {
                                    if (n = 1, r && (a = 2 & o[0] ? r.return : o[0] ? r.throw || ((a = r.return) && a.call(r), 0) : r.next) && !(a = a.call(r, o[1])).done) return a;
                                    switch (r = 0, a && (o = [2 & o[0], a.value]), o[0]) {
                                        case 0:
                                        case 1:
                                            a = o;
                                            break;
                                        case 4:
                                            return i.label++, {
                                                value: o[1],
                                                done: !1
                                            };
                                        case 5:
                                            i.label++, r = o[1], o = [0];
                                            continue;
                                        case 7:
                                            o = i.ops.pop(), i.trys.pop();
                                            continue;
                                        default:
                                            if (!(a = i.trys, (a = a.length > 0 && a[a.length - 1]) || 6 !== o[0] && 2 !== o[0])) {
                                                i = 0;
                                                continue
                                            }
                                            if (3 === o[0] && (!a || o[1] > a[0] && o[1] < a[3])) {
                                                i.label = o[1];
                                                break
                                            }
                                            if (6 === o[0] && i.label < a[1]) {
                                                i.label = a[1], a = o;
                                                break
                                            }
                                            if (a && i.label < a[2]) {
                                                i.label = a[2], i.ops.push(o);
                                                break
                                            }
                                            a[2] && i.ops.pop(), i.trys.pop();
                                            continue
                                    }
                                    o = t.call(e, i)
                                } catch (e) {
                                    o = [6, e], r = 0
                                } finally {
                                    n = a = 0
                                }
                                if (5 & o[0]) throw o[1];
                                return {
                                    value: o[0] ? o[1] : void 0,
                                    done: !0
                                }
                            }([o, s])
                        }
                    }
                },
                je = function(e) {
                    var t = e.translate,
                        n = e.profileUserId,
                        a = Se(),
                        s = a.state,
                        l = a.dispatch,
                        c = s.names.combinedName || "",
                        d = function() {
                            l({
                                type: me.SHOW_BLOCK_USER_MODAL,
                                show: !1
                            })
                        },
                        f = function() {
                            return qe(void 0, void 0, void 0, (function() {
                                var e;
                                return He(this, (function(r) {
                                    switch (r.label) {
                                        case 0:
                                            return r.trys.push([0, 2, , 3]), [4, Le(n)];
                                        case 1:
                                            return r.sent(), l({
                                                type: me.UPDATE_USER_BLOCK,
                                                block: !0
                                            }), e = [u.UserProfileField.Names.CombinedName, u.UserProfileField.Names.Username, u.UserProfileField.Names.DisplayName, u.UserProfileField.Names.Alias], (0, u.writeQuery)(n, e, {
                                                names: {
                                                    alias: null,
                                                    combinedName: s.names.displayName,
                                                    displayName: s.names.displayName,
                                                    username: s.names.username
                                                }
                                            }), [3, 3];
                                        case 2:
                                            return r.sent(), l({
                                                type: me.SET_ERROR_MESSAGE,
                                                message: t(i.translationKeys.error.blockFailed)
                                            }), [3, 3];
                                        case 3:
                                            return [2]
                                    }
                                }))
                            }))
                        },
                        m = i.translationKeys.modal.block,
                        v = i.translationKeys.modal.unblock;
                    return s.showUserBlockModal ? s.isBlocked ? r().createElement(o.Dialog, {
                        open: s.showUserBlockModal,
                        onClose: d
                    }, r().createElement(o.DialogTitle, null, t(v.title, {
                        DisplayName: c
                    })), r().createElement(o.DialogContent, null, r().createElement(o.DialogContentText, null, t(v.body))), r().createElement(o.DialogActions, null, r().createElement(o.Button, {
                        color: "primary",
                        variant: "text",
                        onClick: d
                    }, t(v.cancelButton)), r().createElement(o.Button, {
                        color: "primaryBrand",
                        variant: "contained",
                        onClick: function() {
                            return qe(void 0, void 0, void 0, (function() {
                                var e, r;
                                return He(this, (function(a) {
                                    switch (a.label) {
                                        case 0:
                                            return a.trys.push([0, 2, , 3]), [4, De(n)];
                                        case 1:
                                            return a.sent(), l({
                                                type: me.UPDATE_USER_BLOCK,
                                                block: !1
                                            }), [3, 3];
                                        case 2:
                                            switch (e = a.sent(), r = t(i.translationKeys.error.blockRequestFailed), e.data) {
                                                case ze.BlockLimitExceeded:
                                                    r = t(i.translationKeys.error.blockLimitExceeded);
                                                    break;
                                                case ze.TargetAlreadyBlocked:
                                                    r = t(i.translationKeys.error.targetAlreadyBlocked);
                                                    break;
                                                case ze.ParentManaged:
                                                    r = t(i.translationKeys.error.parentManaged);
                                                    break;
                                                case ze.TargetNotBlocked:
                                                    r = t(i.translationKeys.error.targetNotBlocked);
                                                    break;
                                                case ze.BlockedOnPlatform:
                                                    r = t(i.translationKeys.error.blockedOnPlatform)
                                            }
                                            return l({
                                                type: me.SET_ERROR_MESSAGE,
                                                message: r
                                            }), [3, 3];
                                        case 3:
                                            return [2]
                                    }
                                }))
                            }))
                        }
                    }, t(v.unblockButton)))) : r().createElement(o.Dialog, {
                        open: s.showUserBlockModal,
                        onClose: d
                    }, r().createElement(o.DialogTitle, null, t(m.title, {
                        DisplayName: c
                    })), r().createElement(o.DialogContent, null, r().createElement(o.DialogContentText, null, r().createElement("span", {
                        dangerouslySetInnerHTML: {
                            __html: t(m.body)
                        }
                    }))), r().createElement(o.DialogActions, null, r().createElement(o.Button, {
                        color: "destructive",
                        variant: "outlined",
                        onClick: f
                    }, t(m.blockButton)), r().createElement(o.Button, {
                        color: "destructive",
                        variant: "outlined",
                        onClick: function() {
                            return qe(void 0, void 0, void 0, (function() {
                                return He(this, (function(e) {
                                    switch (e.label) {
                                        case 0:
                                            return [4, f()];
                                        case 1:
                                            return e.sent(), window.location.href = (t = window.location.href, r = "/AbuseReport/userprofile?ID=" + n + "&RedirectUrl=" + t, p.Endpoints.getAbsoluteUrl(r)), [2]
                                    }
                                    var t, r
                                }))
                            }))
                        }
                    }, t(m.blockAndReportButton)), r().createElement(o.Button, {
                        color: "primary",
                        variant: "text",
                        onClick: d
                    }, t(m.cancelButton)))) : null
                },
                Ve = ReactStyleGuide,
                Je = n(452),
                Qe = n.n(Je),
                Xe = function(e, t, n, r) {
                    return new(n || (n = Promise))((function(a, o) {
                        function i(e) {
                            try {
                                l(r.next(e))
                            } catch (e) {
                                o(e)
                            }
                        }

                        function s(e) {
                            try {
                                l(r.throw(e))
                            } catch (e) {
                                o(e)
                            }
                        }

                        function l(e) {
                            var t;
                            e.done ? a(e.value) : (t = e.value, t instanceof n ? t : new n((function(e) {
                                e(t)
                            }))).then(i, s)
                        }
                        l((r = r.apply(e, t || [])).next())
                    }))
                },
                Ye = function(e, t) {
                    var n, r, a, o, i = {
                        label: 0,
                        sent: function() {
                            if (1 & a[0]) throw a[1];
                            return a[1]
                        },
                        trys: [],
                        ops: []
                    };
                    return o = {
                        next: s(0),
                        throw: s(1),
                        return: s(2)
                    }, "function" == typeof Symbol && (o[Symbol.iterator] = function() {
                        return this
                    }), o;

                    function s(o) {
                        return function(s) {
                            return function(o) {
                                if (n) throw new TypeError("Generator is already executing.");
                                for (; i;) try {
                                    if (n = 1, r && (a = 2 & o[0] ? r.return : o[0] ? r.throw || ((a = r.return) && a.call(r), 0) : r.next) && !(a = a.call(r, o[1])).done) return a;
                                    switch (r = 0, a && (o = [2 & o[0], a.value]), o[0]) {
                                        case 0:
                                        case 1:
                                            a = o;
                                            break;
                                        case 4:
                                            return i.label++, {
                                                value: o[1],
                                                done: !1
                                            };
                                        case 5:
                                            i.label++, r = o[1], o = [0];
                                            continue;
                                        case 7:
                                            o = i.ops.pop(), i.trys.pop();
                                            continue;
                                        default:
                                            if (!(a = i.trys, (a = a.length > 0 && a[a.length - 1]) || 6 !== o[0] && 2 !== o[0])) {
                                                i = 0;
                                                continue
                                            }
                                            if (3 === o[0] && (!a || o[1] > a[0] && o[1] < a[3])) {
                                                i.label = o[1];
                                                break
                                            }
                                            if (6 === o[0] && i.label < a[1]) {
                                                i.label = a[1], a = o;
                                                break
                                            }
                                            if (a && i.label < a[2]) {
                                                i.label = a[2], i.ops.push(o);
                                                break
                                            }
                                            a[2] && i.ops.pop(), i.trys.pop();
                                            continue
                                    }
                                    o = t.call(e, i)
                                } catch (e) {
                                    o = [6, e], r = 0
                                } finally {
                                    n = a = 0
                                }
                                if (5 & o[0]) throw o[1];
                                return {
                                    value: o[0] ? o[1] : void 0,
                                    done: !0
                                }
                            }([o, s])
                        }
                    }
                },
                Ze = function(t, n) {
                    return Xe(void 0, void 0, Promise, (function() {
                        return Ye(this, (function(r) {
                            switch (r.label) {
                                case 0:
                                    return [4, e.httpService.post(_(), {
                                        targetUserId: t,
                                        userTag: n
                                    })];
                                case 1:
                                    return [2, r.sent().data]
                            }
                        }))
                    }))
                },
                $e = function(e) {
                    var n = e.currName,
                        a = e.currTextCount,
                        o = e.placeHolderText,
                        s = e.errorText,
                        l = e.inputClassNames,
                        c = e.fireMaxLimitAlias,
                        u = e.fireClearedAlias,
                        d = e.setHasErrored,
                        f = (0, t.useState)(n),
                        p = f[0],
                        m = f[1],
                        v = (0, t.useState)(a),
                        h = v[0],
                        b = v[1],
                        y = h + "/" + i.maxCharactersForAlias;
                    return r().createElement("div", {
                        className: l
                    }, r().createElement("input", {
                        className: "form-control input-field",
                        id: "aliasInputBox",
                        onChange: function(e) {
                            var t, n = e.currentTarget.value,
                                r = (t = n, Array.from(t).length);
                            if (r > i.maxCharactersForAlias) {
                                if (h === i.maxCharactersForAlias) return;
                                n = Array.from(n).slice(0, i.maxCharactersForAlias).join(""), r = i.maxCharactersForAlias
                            }
                            m(n), b(r), r === i.maxCharactersForAlias && c(n), 0 === r && u(), d(!1)
                        },
                        value: p,
                        placeholder: o
                    }), r().createElement("div", {
                        className: "clearfix font-caption-body change-alias-feedback-container"
                    }, r().createElement("span", {
                        className: "count-down"
                    }, y), r().createElement("span", {
                        className: "form-control-label"
                    }, s)))
                },
                et = function(e) {
                    var n = e.translate,
                        a = e.profileUserId,
                        o = Se(),
                        s = o.state,
                        l = o.dispatch,
                        c = (0, Ve.createModal)(),
                        d = c[0],
                        f = c[1],
                        m = function() {
                            l({
                                type: me.SHOW_ALIAS_EDIT_MODAL,
                                show: !1
                            })
                        },
                        v = (0, t.useState)(""),
                        h = v[0],
                        b = v[1],
                        y = (0, t.useState)(0),
                        w = y[0],
                        g = y[1],
                        E = (0, t.useState)(!1),
                        S = E[0],
                        k = E[1],
                        C = S ? n(i.translationKeys.invalidAlias) : "",
                        A = n(i.translationKeys.customizeNamePlaceholder),
                        T = n(i.translationKeys.setCustomName) + " ",
                        U = n(i.translationKeys.recognizeFriends),
                        N = n(i.translationKeys.customizeName),
                        P = r().useCallback((function() {
                            p.EventStream.SendEventWithTarget(i.eventNames.modalOpen, i.eventCtx.customizeName, {
                                origin: "userProfile",
                                playerId: a.toString()
                            }, p.EventStream.TargetTypes.WWW)
                        }), [a]),
                        x = r().useCallback((function() {
                            p.EventStream.SendEventWithTarget(i.eventNames.buttonClick, i.eventCtx.customizeName, {
                                btn: i.eventBtns.closeCustomName,
                                playerId: a.toString()
                            }, p.EventStream.TargetTypes.WWW)
                        }), [a]),
                        F = r().useCallback((function() {
                            var e;
                            b(s.names.alias || ""), g((e = s.names.alias || "", Array.from(e).length)), k(!1)
                        }), [s.names.alias]),
                        I = r().useCallback((function() {
                            F(), f.close(), x(), setTimeout((function() {
                                document.activeElement.blur()
                            }))
                        }), [f, x, F]),
                        R = r().useCallback((function() {
                            f.open(), P()
                        }), [f, P]),
                        _ = Qe()("form-group", {
                            "form-has-error": S,
                            "form-has-feedback": !0
                        }),
                        B = [u.UserProfileField.Names.CombinedName, u.UserProfileField.Names.Username, u.UserProfileField.Names.DisplayName, u.UserProfileField.Names.Alias],
                        O = function(e) {
                            Ze(a, e).then((function(t) {
                                "Success" === t.status ? ("" === e ? (0, u.writeQuery)(a, B, {
                                    names: {
                                        alias: e,
                                        combinedName: s.names.displayName,
                                        displayName: s.names.displayName,
                                        username: s.names.username
                                    }
                                }) : (0, u.writeQuery)(a, B, {
                                    names: {
                                        alias: e,
                                        combinedName: e,
                                        displayName: s.names.displayName,
                                        username: s.names.username
                                    }
                                }), function(e) {
                                    p.EventStream.SendEventWithTarget(i.eventNames.buttonClick, i.eventCtx.customizeName, {
                                        btn: i.eventBtns.saveAlias,
                                        alias: e,
                                        playerId: a.toString()
                                    }, p.EventStream.TargetTypes.WWW)
                                }(e), m()) : (! function(e) {
                                    p.EventStream.SendEventWithTarget(i.eventNames.customNameInvalidInput, i.eventCtx.customizeName, {
                                        alias: e,
                                        playerId: a.toString()
                                    }, p.EventStream.TargetTypes.WWW)
                                }(e), k(!0))
                            }), (function() {
                                k(!0)
                            }))
                        };
                    return (0, t.useEffect)((function() {
                        s.showAliasEditModal ? R() : I()
                    }), [I, R, s.showAliasEditModal]), s.showAliasEditModal ? r().createElement(d, {
                        title: N,
                        body: r().createElement("div", {
                            className: "change-alias-modal"
                        }, r().createElement("div", {
                            className: "text-label"
                        }, r().createElement("span", null, T), r().createElement("span", {
                            className: "change-alias-bolded"
                        }, s.names.displayName)), r().createElement("div", {
                            className: "change-alias-description"
                        }, U), r().createElement($e, {
                            currName: h,
                            currTextCount: w,
                            placeHolderText: A,
                            errorText: C,
                            inputClassNames: _,
                            fireMaxLimitAlias: function(e) {
                                p.EventStream.SendEventWithTarget(i.eventNames.customNameMaxLimit, i.eventCtx.customizeName, {
                                    alias: e,
                                    playerId: a.toString()
                                }, p.EventStream.TargetTypes.WWW)
                            },
                            fireClearedAlias: function() {
                                p.EventStream.SendEventWithTarget(i.eventNames.customNameClearedInput, i.eventCtx.customizeName, {
                                    playerId: a.toString()
                                }, p.EventStream.TargetTypes.WWW)
                            },
                            setHasErrored: k
                        })),
                        actionButtonShow: !0,
                        disableActionButton: S,
                        actionButtonText: n(i.translationKeys.save),
                        neutralButtonText: n(i.translationKeys.cancel),
                        onNeutral: function() {
                            m()
                        },
                        onAction: function() {
                            var e = document.getElementById("aliasInputBox"),
                                t = (null == e ? void 0 : e.value) || "";
                            O(t)
                        }
                    }) : null
                },
                tt = function(e) {
                    var n = e.buttons,
                        a = e.translate,
                        s = (0, t.useState)(null),
                        l = s[0],
                        c = s[1];
                    return r().createElement(r().Fragment, null, r().createElement(o.IconButton, {
                        "aria-label": a(i.translationKeys.buttons.openDropdown),
                        size: "medium",
                        variant: "default",
                        color: "default",
                        className: "profile-header-dropdown",
                        onClick: function(e) {
                            return c(e.currentTarget)
                        }
                    }, r().createElement(o.MoreHorizIcon, {
                        className: "profile-header-more-icon"
                    })), r().createElement(o.Menu, {
                        id: "profile-header-dropdown-menu",
                        variant: "menu",
                        anchorEl: l,
                        open: null != l,
                        onClose: function() {
                            return c(null)
                        }
                    }, n.map((function(e) {
                        var t = e.id,
                            n = e.onClick,
                            i = e.label;
                        return r().createElement(o.MenuItem, {
                            onClick: function() {
                                c(null), n()
                            },
                            key: i,
                            id: t
                        }, r().createElement("span", {
                            className: "profile-header-dropdown-label"
                        }, a(i)))
                    }))))
                },
                nt = function(e, t, n, r) {
                    return new(n || (n = Promise))((function(a, o) {
                        function i(e) {
                            try {
                                l(r.next(e))
                            } catch (e) {
                                o(e)
                            }
                        }

                        function s(e) {
                            try {
                                l(r.throw(e))
                            } catch (e) {
                                o(e)
                            }
                        }

                        function l(e) {
                            var t;
                            e.done ? a(e.value) : (t = e.value, t instanceof n ? t : new n((function(e) {
                                e(t)
                            }))).then(i, s)
                        }
                        l((r = r.apply(e, t || [])).next())
                    }))
                },
                rt = function(e, t) {
                    var n, r, a, o, i = {
                        label: 0,
                        sent: function() {
                            if (1 & a[0]) throw a[1];
                            return a[1]
                        },
                        trys: [],
                        ops: []
                    };
                    return o = {
                        next: s(0),
                        throw: s(1),
                        return: s(2)
                    }, "function" == typeof Symbol && (o[Symbol.iterator] = function() {
                        return this
                    }), o;

                    function s(o) {
                        return function(s) {
                            return function(o) {
                                if (n) throw new TypeError("Generator is already executing.");
                                for (; i;) try {
                                    if (n = 1, r && (a = 2 & o[0] ? r.return : o[0] ? r.throw || ((a = r.return) && a.call(r), 0) : r.next) && !(a = a.call(r, o[1])).done) return a;
                                    switch (r = 0, a && (o = [2 & o[0], a.value]), o[0]) {
                                        case 0:
                                        case 1:
                                            a = o;
                                            break;
                                        case 4:
                                            return i.label++, {
                                                value: o[1],
                                                done: !1
                                            };
                                        case 5:
                                            i.label++, r = o[1], o = [0];
                                            continue;
                                        case 7:
                                            o = i.ops.pop(), i.trys.pop();
                                            continue;
                                        default:
                                            if (!(a = i.trys, (a = a.length > 0 && a[a.length - 1]) || 6 !== o[0] && 2 !== o[0])) {
                                                i = 0;
                                                continue
                                            }
                                            if (3 === o[0] && (!a || o[1] > a[0] && o[1] < a[3])) {
                                                i.label = o[1];
                                                break
                                            }
                                            if (6 === o[0] && i.label < a[1]) {
                                                i.label = a[1], a = o;
                                                break
                                            }
                                            if (a && i.label < a[2]) {
                                                i.label = a[2], i.ops.push(o);
                                                break
                                            }
                                            a[2] && i.ops.pop(), i.trys.pop();
                                            continue
                                    }
                                    o = t.call(e, i)
                                } catch (e) {
                                    o = [6, e], r = 0
                                } finally {
                                    n = a = 0
                                }
                                if (5 & o[0]) throw o[1];
                                return {
                                    value: o[0] ? o[1] : void 0,
                                    done: !0
                                }
                            }([o, s])
                        }
                    }
                },
                at = function(t) {
                    return nt(void 0, void 0, Promise, (function() {
                        return rt(this, (function(n) {
                            switch (n.label) {
                                case 0:
                                    return [4, e.httpService.post(G(t))];
                                case 1:
                                    return [2, n.sent().data]
                            }
                        }))
                    }))
                },
                ot = function(e, t, n, r) {
                    return new(n || (n = Promise))((function(a, o) {
                        function i(e) {
                            try {
                                l(r.next(e))
                            } catch (e) {
                                o(e)
                            }
                        }

                        function s(e) {
                            try {
                                l(r.throw(e))
                            } catch (e) {
                                o(e)
                            }
                        }

                        function l(e) {
                            var t;
                            e.done ? a(e.value) : (t = e.value, t instanceof n ? t : new n((function(e) {
                                e(t)
                            }))).then(i, s)
                        }
                        l((r = r.apply(e, t || [])).next())
                    }))
                },
                it = function(e, t) {
                    var n, r, a, o, i = {
                        label: 0,
                        sent: function() {
                            if (1 & a[0]) throw a[1];
                            return a[1]
                        },
                        trys: [],
                        ops: []
                    };
                    return o = {
                        next: s(0),
                        throw: s(1),
                        return: s(2)
                    }, "function" == typeof Symbol && (o[Symbol.iterator] = function() {
                        return this
                    }), o;

                    function s(o) {
                        return function(s) {
                            return function(o) {
                                if (n) throw new TypeError("Generator is already executing.");
                                for (; i;) try {
                                    if (n = 1, r && (a = 2 & o[0] ? r.return : o[0] ? r.throw || ((a = r.return) && a.call(r), 0) : r.next) && !(a = a.call(r, o[1])).done) return a;
                                    switch (r = 0, a && (o = [2 & o[0], a.value]), o[0]) {
                                        case 0:
                                        case 1:
                                            a = o;
                                            break;
                                        case 4:
                                            return i.label++, {
                                                value: o[1],
                                                done: !1
                                            };
                                        case 5:
                                            i.label++, r = o[1], o = [0];
                                            continue;
                                        case 7:
                                            o = i.ops.pop(), i.trys.pop();
                                            continue;
                                        default:
                                            if (!(a = i.trys, (a = a.length > 0 && a[a.length - 1]) || 6 !== o[0] && 2 !== o[0])) {
                                                i = 0;
                                                continue
                                            }
                                            if (3 === o[0] && (!a || o[1] > a[0] && o[1] < a[3])) {
                                                i.label = o[1];
                                                break
                                            }
                                            if (6 === o[0] && i.label < a[1]) {
                                                i.label = a[1], a = o;
                                                break
                                            }
                                            if (a && i.label < a[2]) {
                                                i.label = a[2], i.ops.push(o);
                                                break
                                            }
                                            a[2] && i.ops.pop(), i.trys.pop();
                                            continue
                                    }
                                    o = t.call(e, i)
                                } catch (e) {
                                    o = [6, e], r = 0
                                } finally {
                                    n = a = 0
                                }
                                if (5 & o[0]) throw o[1];
                                return {
                                    value: o[0] ? o[1] : void 0,
                                    done: !0
                                }
                            }([o, s])
                        }
                    }
                },
                st = function(e) {
                    var t, n = e.profileUserId,
                        a = e.translate,
                        o = Se(),
                        s = o.state,
                        l = o.dispatch,
                        u = c.authenticatedUser.id,
                        d = n === u,
                        f = -1 !== u,
                        m = p.Endpoints.getAbsoluteUrl("/login"),
                        v = p.Endpoints.getAbsoluteUrl("/users/" + n + "/inventory/"),
                        h = p.Endpoints.getAbsoluteUrl("/users/" + n + "/favorites#!/places"),
                        b = p.Endpoints.getAbsoluteUrl("/home"),
                        y = "true" === (null === (t = document.querySelector("div[data-mayimpersonate]")) || void 0 === t ? void 0 : t.getAttribute("data-mayimpersonate")),
                        w = [{
                            id: "customize-name-button",
                            label: i.translationKeys.customizeName,
                            visible: s.friendStatus === ve.Friends,
                            onClick: function() {
                                l({
                                    type: me.SHOW_ALIAS_EDIT_MODAL,
                                    show: !0
                                })
                            }
                        }, {
                            id: "follow-button",
                            label: i.translationKeys.dropdown.follow,
                            visible: !d && !s.isFollowing && !s.isBlocked,
                            onClick: function() {
                                return ot(void 0, void 0, void 0, (function() {
                                    return it(this, (function(e) {
                                        switch (e.label) {
                                            case 0:
                                                return e.trys.push([0, 2, , 3]), [4, Q(n)];
                                            case 1:
                                                return e.sent().success && (l({
                                                    type: me.UPDATE_FOLLOWERS_COUNT,
                                                    amount: 1
                                                }), l({
                                                    type: me.UPDATE_FOLLOWING,
                                                    following: !0
                                                })), [3, 3];
                                            case 2:
                                                return e.sent(), l({
                                                    type: me.SET_ERROR_MESSAGE,
                                                    message: a(i.translationKeys.error.followFailed)
                                                }), [3, 3];
                                            case 3:
                                                return [2]
                                        }
                                    }))
                                }))
                            }
                        }, {
                            id: "unfollow-button",
                            label: i.translationKeys.dropdown.unfollow,
                            visible: !d && s.isFollowing && !s.isBlocked,
                            onClick: function() {
                                return ot(void 0, void 0, void 0, (function() {
                                    return it(this, (function(e) {
                                        switch (e.label) {
                                            case 0:
                                                return u ? [3, 1] : (window.location.href = m, [3, 4]);
                                            case 1:
                                                return e.trys.push([1, 3, , 4]), [4, J(n)];
                                            case 2:
                                                return e.sent(), l({
                                                    type: me.UPDATE_FOLLOWERS_COUNT,
                                                    amount: -1
                                                }), l({
                                                    type: me.UPDATE_FOLLOWING,
                                                    following: !1
                                                }), [3, 4];
                                            case 3:
                                                return e.sent(), l({
                                                    type: me.SET_ERROR_MESSAGE,
                                                    message: a(i.translationKeys.error.unfollowFailed)
                                                }), [3, 4];
                                            case 4:
                                                return [2]
                                        }
                                    }))
                                }))
                            }
                        }, {
                            id: "trade-button",
                            label: i.translationKeys.dropdown.tradeItems,
                            visible: !s.isBlocked && s.canTradeWith,
                            onClick: function() {
                                p.EventStream.SendEventWithTarget(i.eventNames.tradeEntryPoint, i.eventCtx.profileMenu, {
                                    partnerId: n.toString()
                                }, p.EventStream.TargetTypes.WWW), window.location.href = p.Endpoints.getAbsoluteUrl("/users/" + n + "/trade")
                            }
                        }, {
                            id: "block-button",
                            label: s.isBlocked ? i.translationKeys.dropdown.unblockUser : i.translationKeys.dropdown.blockUser,
                            visible: !d && f,
                            onClick: function() {
                                l({
                                    type: me.SHOW_BLOCK_USER_MODAL,
                                    show: !0
                                })
                            }
                        }, {
                            id: "inventory-button",
                            label: i.translationKeys.dropdown.inventory,
                            visible: 1 !== n,
                            onClick: function() {
                                window.location.href = v
                            }
                        }, {
                            id: "favorites-button",
                            label: i.translationKeys.dropdown.favorites,
                            visible: s.hasFavorites,
                            onClick: function() {
                                window.location.href = h
                            }
                        }, {
                            id: "impersonate-button",
                            label: i.translationKeys.dropdown.impersonateUser,
                            visible: y,
                            onClick: function() {
                                return ot(void 0, void 0, void 0, (function() {
                                    return it(this, (function(e) {
                                        switch (e.label) {
                                            case 0:
                                                return e.trys.push([0, 2, , 3]), [4, at(n)];
                                            case 1:
                                                return e.sent(), window.location.href = b, [3, 3];
                                            case 2:
                                                return e.sent(), l({
                                                    type: me.SET_ERROR_MESSAGE,
                                                    message: a(i.translationKeys.error.impersonateUserFailed)
                                                }), [3, 3];
                                            case 3:
                                                return [2]
                                        }
                                    }))
                                }))
                            }
                        }].filter((function(e) {
                            return e.visible
                        }));
                    return r().createElement(tt, {
                        translate: a,
                        buttons: w
                    })
                },
                lt = function(t) {
                    var n = t.profileUserId,
                        a = t.isMyProfile,
                        s = t.canBeFollowed,
                        l = t.translate,
                        c = t.sendFriendRequest,
                        u = t.acceptFriendRequest,
                        d = t.removeFriend,
                        f = t.startChat,
                        p = t.launchGame,
                        m = Se().state,
                        v = e.urlService.getAbsoluteUrl("/users/" + n + "/friends#!"),
                        h = null;
                    a || (m.friendStatus === ve.RequestReceived ? h = r().createElement(o.Button, {
                        id: "friend-button",
                        color: "secondary",
                        size: "medium",
                        variant: "outlined",
                        "data-target-user-id": n,
                        "data-friends-url": v,
                        onClick: u
                    }, l(i.translationKeys.buttons.accept)) : m.friendStatus === ve.NotFriends ? h = r().createElement(o.Button, {
                        id: "friend-button",
                        color: "secondary",
                        size: "medium",
                        variant: "outlined",
                        onClick: c,
                        disabled: m.isBlocked
                    }, l(m.isFriendsRenamedToConnections ? i.translationKeys.buttons.addConnection : i.translationKeys.buttons.addFriend)) : m.friendStatus === ve.RequestSent ? h = r().createElement(o.Button, {
                        id: "friend-button",
                        color: "secondary",
                        size: "medium",
                        variant: "contained",
                        disabled: !0
                    }, l(i.translationKeys.buttons.pending)) : m.friendStatus === ve.Friends && (h = r().createElement(o.Button, {
                        id: "unfriend-button",
                        color: "secondary",
                        size: "medium",
                        variant: "outlined",
                        "data-target-user-id": n,
                        onClick: d
                    }, l(m.isFriendsRenamedToConnections ? i.translationKeys.buttons.removeConnection : i.translationKeys.buttons.unFriend))));
                    var b = !a && m.canChat && m.friendStatus === ve.Friends ? r().createElement(o.Button, {
                            id: "chat-button",
                            color: "secondary",
                            size: "medium",
                            variant: "contained",
                            onClick: f
                        }, l(i.translationKeys.buttons.chat)) : null,
                        y = s && "" !== m.friendStatus ? r().createElement(o.Button, {
                            id: "join-game-button",
                            color: "primaryBrand",
                            size: "medium",
                            variant: "contained",
                            onClick: p
                        }, l(i.translationKeys.buttons.joinGame)) : null;
                    return r().createElement("div", {
                        className: "profile-header-buttons"
                    }, y, b, h, r().createElement(st, {
                        translate: l,
                        profileUserId: n
                    }))
                },
                ct = function(e, t, n, r) {
                    return new(n || (n = Promise))((function(a, o) {
                        function i(e) {
                            try {
                                l(r.next(e))
                            } catch (e) {
                                o(e)
                            }
                        }

                        function s(e) {
                            try {
                                l(r.throw(e))
                            } catch (e) {
                                o(e)
                            }
                        }

                        function l(e) {
                            var t;
                            e.done ? a(e.value) : (t = e.value, t instanceof n ? t : new n((function(e) {
                                e(t)
                            }))).then(i, s)
                        }
                        l((r = r.apply(e, t || [])).next())
                    }))
                },
                ut = function(e, t) {
                    var n, r, a, o, i = {
                        label: 0,
                        sent: function() {
                            if (1 & a[0]) throw a[1];
                            return a[1]
                        },
                        trys: [],
                        ops: []
                    };
                    return o = {
                        next: s(0),
                        throw: s(1),
                        return: s(2)
                    }, "function" == typeof Symbol && (o[Symbol.iterator] = function() {
                        return this
                    }), o;

                    function s(o) {
                        return function(s) {
                            return function(o) {
                                if (n) throw new TypeError("Generator is already executing.");
                                for (; i;) try {
                                    if (n = 1, r && (a = 2 & o[0] ? r.return : o[0] ? r.throw || ((a = r.return) && a.call(r), 0) : r.next) && !(a = a.call(r, o[1])).done) return a;
                                    switch (r = 0, a && (o = [2 & o[0], a.value]), o[0]) {
                                        case 0:
                                        case 1:
                                            a = o;
                                            break;
                                        case 4:
                                            return i.label++, {
                                                value: o[1],
                                                done: !1
                                            };
                                        case 5:
                                            i.label++, r = o[1], o = [0];
                                            continue;
                                        case 7:
                                            o = i.ops.pop(), i.trys.pop();
                                            continue;
                                        default:
                                            if (!(a = i.trys, (a = a.length > 0 && a[a.length - 1]) || 6 !== o[0] && 2 !== o[0])) {
                                                i = 0;
                                                continue
                                            }
                                            if (3 === o[0] && (!a || o[1] > a[0] && o[1] < a[3])) {
                                                i.label = o[1];
                                                break
                                            }
                                            if (6 === o[0] && i.label < a[1]) {
                                                i.label = a[1], a = o;
                                                break
                                            }
                                            if (a && i.label < a[2]) {
                                                i.label = a[2], i.ops.push(o);
                                                break
                                            }
                                            a[2] && i.ops.pop(), i.trys.pop();
                                            continue
                                    }
                                    o = t.call(e, i)
                                } catch (e) {
                                    o = [6, e], r = 0
                                } finally {
                                    n = a = 0
                                }
                                if (5 & o[0]) throw o[1];
                                return {
                                    value: o[0] ? o[1] : void 0,
                                    done: !0
                                }
                            }([o, s])
                        }
                    }
                },
                dt = function(e) {
                    var t = e.id,
                        n = e.profileUserId,
                        a = e.translate,
                        o = Se().dispatch,
                        s = f().usePresence(n, void 0),
                        c = p.Endpoints.getAbsoluteUrl("/login"),
                        u = n === t,
                        d = !u && s.userPresenceType === f().PresenceType.Game && null != s.rootPlaceId;
                    return r().createElement(lt, {
                        profileUserId: n,
                        isMyProfile: u,
                        canBeFollowed: d,
                        sendFriendRequest: function() {
                            return ct(void 0, void 0, void 0, (function() {
                                return ut(this, (function(e) {
                                    switch (e.label) {
                                        case 0:
                                            return t ? [3, 1] : (window.location.href = c, [3, 4]);
                                        case 1:
                                            return e.trys.push([1, 3, , 4]), [4, $(n)];
                                        case 2:
                                            return !0 === e.sent().success ? (p.EventStream.SendEventWithTarget(i.eventNames.playerFriendAdd, i.eventCtx.userProfile, {
                                                uid: t.toString(),
                                                playerId: n.toString()
                                            }, p.EventStream.TargetTypes.WWW), o({
                                                type: me.SET_FRIEND_STATUS,
                                                status: ve.RequestSent
                                            })) : o({
                                                type: me.SET_ERROR_MESSAGE,
                                                message: a(i.translationKeys.error.sendFriendRequestFailed)
                                            }), [3, 4];
                                        case 3:
                                            return e.sent(), o({
                                                type: me.SET_ERROR_MESSAGE,
                                                message: a(i.translationKeys.error.sendFriendRequestFailed)
                                            }), [3, 4];
                                        case 4:
                                            return [2]
                                    }
                                }))
                            }))
                        },
                        acceptFriendRequest: function() {
                            return ct(void 0, void 0, void 0, (function() {
                                return ut(this, (function(e) {
                                    switch (e.label) {
                                        case 0:
                                            return t ? [3, 1] : (window.location.href = c, [3, 5]);
                                        case 1:
                                            return e.trys.push([1, 4, , 5]), [4, Z(n)];
                                        case 2:
                                            return e.sent(), p.EventStream.SendEventWithTarget(i.eventNames.playerFriendAccept, i.eventCtx.userProfile, {
                                                uid: t.toString(),
                                                playerId: n.toString()
                                            }, p.EventStream.TargetTypes.WWW), [4, new Promise((function(e) {
                                                return setTimeout(e, 2e3)
                                            }))];
                                        case 3:
                                            return e.sent(), o({
                                                type: me.SET_FRIEND_STATUS,
                                                status: ve.Friends
                                            }), o({
                                                type: me.UPDATE_FRIEND_COUNT,
                                                amount: 1
                                            }), [3, 5];
                                        case 4:
                                            return e.sent(), o({
                                                type: me.SET_ERROR_MESSAGE,
                                                message: a(i.translationKeys.error.acceptFriendRequestFailed)
                                            }), [3, 5];
                                        case 5:
                                            return [2]
                                    }
                                }))
                            }))
                        },
                        removeFriend: function() {
                            return ct(void 0, void 0, void 0, (function() {
                                return ut(this, (function(e) {
                                    switch (e.label) {
                                        case 0:
                                            return t ? [3, 1] : (window.location.href = c, [3, 4]);
                                        case 1:
                                            return e.trys.push([1, 3, , 4]), [4, Y(n)];
                                        case 2:
                                            return e.sent(), o({
                                                type: me.SET_FRIEND_STATUS,
                                                status: ve.NotFriends
                                            }), o({
                                                type: me.UPDATE_FRIEND_COUNT,
                                                amount: -1
                                            }), [3, 4];
                                        case 3:
                                            return e.sent(), o({
                                                type: me.SET_ERROR_MESSAGE,
                                                message: a(i.translationKeys.error.removeFriendFailed)
                                            }), [3, 4];
                                        case 4:
                                            return [2]
                                    }
                                }))
                            }))
                        },
                        startChat: function() {
                            l.chatService.startDesktopAndMobileWebChat({
                                userId: n
                            })
                        },
                        launchGame: function() {
                            return ct(void 0, void 0, void 0, (function() {
                                var e;
                                return ut(this, (function(t) {
                                    switch (t.label) {
                                        case 0:
                                            return e = s.gameId || "", (0, p.DeviceMeta)().isInApp ? ((0, p.DeviceMeta)().isDesktop ? p.GameLauncher.followPlayerIntoGame(n, e, "JoinUser") : window.location.href = "/games/start?userID=" + n + "&joinAttemptId=" + e + "&joinAttemptOrigin=JoinUser", [3, 5]) : [3, 1];
                                        case 1:
                                            return (0, p.DeviceMeta)().isAndroidDevice || (0, p.DeviceMeta)().isChromeOs ? (window.location.href = "intent://userId=" + n + "&joinAttemptId=" + e + "&joinAttemptOrigin=JoinUser#Intent;scheme=robloxmobile;package=com.roblox.client;S.browser_fallback_url=https%3A%2F%2Fplay.google.com%2Fstore%2Fapps%2Fdetails%3Fid%3Dcom.roblox.client;end", [3, 5]) : [3, 2];
                                        case 2:
                                            return (0, p.DeviceMeta)().isIosDevice ? (window.location.href = "robloxmobile://userId=" + n + "&joinAttemptId=" + e + "&joinAttemptOrigin=JoinUser", [3, 5]) : [3, 3];
                                        case 3:
                                            return [4, p.ProtocolHandlerClientInterface.followPlayerIntoGame({
                                                userId: n,
                                                joinAttemptId: e,
                                                joinAttemptOrigin: "JoinUser"
                                            })];
                                        case 4:
                                            t.sent(), t.label = 5;
                                        case 5:
                                            return [2]
                                    }
                                }))
                            }))
                        },
                        translate: a
                    })
                },
                ft = function(e, t, n, r) {
                    return new(n || (n = Promise))((function(a, o) {
                        function i(e) {
                            try {
                                l(r.next(e))
                            } catch (e) {
                                o(e)
                            }
                        }

                        function s(e) {
                            try {
                                l(r.throw(e))
                            } catch (e) {
                                o(e)
                            }
                        }

                        function l(e) {
                            var t;
                            e.done ? a(e.value) : (t = e.value, t instanceof n ? t : new n((function(e) {
                                e(t)
                            }))).then(i, s)
                        }
                        l((r = r.apply(e, t || [])).next())
                    }))
                },
                pt = function(e, t) {
                    var n, r, a, o, i = {
                        label: 0,
                        sent: function() {
                            if (1 & a[0]) throw a[1];
                            return a[1]
                        },
                        trys: [],
                        ops: []
                    };
                    return o = {
                        next: s(0),
                        throw: s(1),
                        return: s(2)
                    }, "function" == typeof Symbol && (o[Symbol.iterator] = function() {
                        return this
                    }), o;

                    function s(o) {
                        return function(s) {
                            return function(o) {
                                if (n) throw new TypeError("Generator is already executing.");
                                for (; i;) try {
                                    if (n = 1, r && (a = 2 & o[0] ? r.return : o[0] ? r.throw || ((a = r.return) && a.call(r), 0) : r.next) && !(a = a.call(r, o[1])).done) return a;
                                    switch (r = 0, a && (o = [2 & o[0], a.value]), o[0]) {
                                        case 0:
                                        case 1:
                                            a = o;
                                            break;
                                        case 4:
                                            return i.label++, {
                                                value: o[1],
                                                done: !1
                                            };
                                        case 5:
                                            i.label++, r = o[1], o = [0];
                                            continue;
                                        case 7:
                                            o = i.ops.pop(), i.trys.pop();
                                            continue;
                                        default:
                                            if (!(a = i.trys, (a = a.length > 0 && a[a.length - 1]) || 6 !== o[0] && 2 !== o[0])) {
                                                i = 0;
                                                continue
                                            }
                                            if (3 === o[0] && (!a || o[1] > a[0] && o[1] < a[3])) {
                                                i.label = o[1];
                                                break
                                            }
                                            if (6 === o[0] && i.label < a[1]) {
                                                i.label = a[1], a = o;
                                                break
                                            }
                                            if (a && i.label < a[2]) {
                                                i.label = a[2], i.ops.push(o);
                                                break
                                            }
                                            a[2] && i.ops.pop(), i.trys.pop();
                                            continue
                                    }
                                    o = t.call(e, i)
                                } catch (e) {
                                    o = [6, e], r = 0
                                } finally {
                                    n = a = 0
                                }
                                if (5 & o[0]) throw o[1];
                                return {
                                    value: o[0] ? o[1] : void 0,
                                    done: !0
                                }
                            }([o, s])
                        }
                    }
                },
                mt = function(t) {
                    return ft(void 0, void 0, Promise, (function() {
                        return pt(this, (function(n) {
                            switch (n.label) {
                                case 0:
                                    return [4, e.httpService.get(z(t))];
                                case 1:
                                    return [2, n.sent().data]
                            }
                        }))
                    }))
                },
                vt = function(e) {
                    void 0 === e && (e = {
                        baseUrl: ""
                    }), this.configuration = e, this.baseUrl = this.configuration.baseUrl
                },
                ht = function() {
                    function e(e) {
                        void 0 === e && (e = new vt), this.configuration = e, this.baseUrl = e.baseUrl
                    }
                    return e.prototype.sendEvent = function(e) {
                        var t = e.localTime,
                            n = e.target,
                            r = e.eventType,
                            a = e.context,
                            o = e.additionalProperties,
                            i = e.currentUrl,
                            s = e.guestId,
                            l = e.sessionId,
                            c = t.toISOString(),
                            u = new URL("".concat(this.baseUrl, "/pe"));
                        return u.searchParams.append("t", n), u.searchParams.append("evt", r), u.searchParams.append("ctx", a), u.searchParams.append("lt", c), u.searchParams.append("url", i || window.location.href), void 0 !== s && u.searchParams.append("gid", s), void 0 !== l && u.searchParams.append("sid", l), void 0 !== o && Object.keys(o).forEach((function(e) {
                            var t;
                            u.searchParams.append(e, (null !== (t = o[e]) && void 0 !== t ? t : "").toString())
                        })), fetch(u.href, {
                            credentials: "same-origin"
                        })
                    }, e.prototype.sendEventViaImg = function(e, t) {
                        var n = e.localTime,
                            r = e.target,
                            a = e.eventType,
                            o = e.context,
                            i = e.additionalProperties,
                            s = e.currentUrl,
                            l = e.guestId,
                            c = e.sessionId,
                            u = n.toISOString(),
                            d = new URL("".concat(this.baseUrl, "/e.png"));
                        d.searchParams.append("t", r), d.searchParams.append("evt", a), d.searchParams.append("ctx", o), d.searchParams.append("lt", u), d.searchParams.append("url", s || window.location.href), void 0 !== l && d.searchParams.append("gid", l), void 0 !== c && d.searchParams.append("sid", c), void 0 !== i && Object.keys(i).forEach((function(e) {
                            var t;
                            d.searchParams.append(e, (null !== (t = i[e]) && void 0 !== t ? t : "").toString())
                        }));
                        var f = new Image;
                        return f.src = d.href, f.onload = function() {
                            void 0 !== t && t(!0)
                        }, f.onerror = function(e) {
                            void 0 !== t && t(!1), console.error(e)
                        }, f
                    }, e
                }(),
                bt = p.EnvironmentUrls.domain;
            ! function(e) {
                e.PAGE_LOAD = "pageLoad", e.BUTTON_CLICK = "buttonClick"
            }(Ge || (Ge = {}));
            var yt = new ht(new vt({
                    baseUrl: "https://ecsv2." + bt + "/www"
                })),
                wt = {
                    sendEvent: function(e, t, n) {
                        var r = {
                            target: "www",
                            localTime: new Date,
                            eventType: e,
                            context: t,
                            additionalProperties: {
                                profileUserId: n
                            }
                        };
                        return yt.sendEventViaImg(r)
                    }
                };
            var gt = function(e, t, n, r) {
                    return new(n || (n = Promise))((function(a, o) {
                        function i(e) {
                            try {
                                l(r.next(e))
                            } catch (e) {
                                o(e)
                            }
                        }

                        function s(e) {
                            try {
                                l(r.throw(e))
                            } catch (e) {
                                o(e)
                            }
                        }

                        function l(e) {
                            var t;
                            e.done ? a(e.value) : (t = e.value, t instanceof n ? t : new n((function(e) {
                                e(t)
                            }))).then(i, s)
                        }
                        l((r = r.apply(e, t || [])).next())
                    }))
                },
                Et = function(e, t) {
                    var n, r, a, o, i = {
                        label: 0,
                        sent: function() {
                            if (1 & a[0]) throw a[1];
                            return a[1]
                        },
                        trys: [],
                        ops: []
                    };
                    return o = {
                        next: s(0),
                        throw: s(1),
                        return: s(2)
                    }, "function" == typeof Symbol && (o[Symbol.iterator] = function() {
                        return this
                    }), o;

                    function s(o) {
                        return function(s) {
                            return function(o) {
                                if (n) throw new TypeError("Generator is already executing.");
                                for (; i;) try {
                                    if (n = 1, r && (a = 2 & o[0] ? r.return : o[0] ? r.throw || ((a = r.return) && a.call(r), 0) : r.next) && !(a = a.call(r, o[1])).done) return a;
                                    switch (r = 0, a && (o = [2 & o[0], a.value]), o[0]) {
                                        case 0:
                                        case 1:
                                            a = o;
                                            break;
                                        case 4:
                                            return i.label++, {
                                                value: o[1],
                                                done: !1
                                            };
                                        case 5:
                                            i.label++, r = o[1], o = [0];
                                            continue;
                                        case 7:
                                            o = i.ops.pop(), i.trys.pop();
                                            continue;
                                        default:
                                            if (!(a = i.trys, (a = a.length > 0 && a[a.length - 1]) || 6 !== o[0] && 2 !== o[0])) {
                                                i = 0;
                                                continue
                                            }
                                            if (3 === o[0] && (!a || o[1] > a[0] && o[1] < a[3])) {
                                                i.label = o[1];
                                                break
                                            }
                                            if (6 === o[0] && i.label < a[1]) {
                                                i.label = a[1], a = o;
                                                break
                                            }
                                            if (a && i.label < a[2]) {
                                                i.label = a[2], i.ops.push(o);
                                                break
                                            }
                                            a[2] && i.ops.pop(), i.trys.pop();
                                            continue
                                    }
                                    o = t.call(e, i)
                                } catch (e) {
                                    o = [6, e], r = 0
                                } finally {
                                    n = a = 0
                                }
                                if (5 & o[0]) throw o[1];
                                return {
                                    value: o[0] ? o[1] : void 0,
                                    done: !0
                                }
                            }([o, s])
                        }
                    }
                },
                St = function() {
                    return gt(void 0, void 0, Promise, (function() {
                        return Et(this, (function(t) {
                            switch (t.label) {
                                case 0:
                                    return [4, e.httpService.get(q())];
                                case 1:
                                    return [2, t.sent().data]
                            }
                        }))
                    }))
                },
                kt = p.EnvironmentUrls.apiGatewayUrl,
                Ct = (p.EnvironmentUrls.friendsApi, p.EnvironmentUrls.thumbnailsApi, p.EnvironmentUrls.presenceApi, p.EnvironmentUrls.gamesApi, p.EnvironmentUrls.usersApi, function(e) {
                    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
                        n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
                    return {
                        retryable: !0,
                        withCredentials: !0,
                        url: "".concat(kt, "/access-management/v1/upsell-feature-access?featureName=").concat(e).concat(t ? "&extraParameters=".concat(t) : "").concat(n ? "&successfulActions=".concat(n) : "")
                    }
                });

            function At(e, t, n, r, a, o, i) {
                try {
                    var s = e[o](i),
                        l = s.value
                } catch (e) {
                    return void n(e)
                }
                s.done ? t(l) : Promise.resolve(l).then(r, a)
            }
            var Tt = function() {
                    var t, n = (t = regeneratorRuntime.mark((function t(n, r, a) {
                        var o, i, s, l;
                        return regeneratorRuntime.wrap((function(t) {
                            for (;;) switch (t.prev = t.next) {
                                case 0:
                                    return o = r ? btoa(JSON.stringify(r)) : null, i = Ct(n, o, a), t.next = 4, e.httpService.get(i);
                                case 4:
                                    return s = t.sent, l = s.data, t.abrupt("return", l);
                                case 7:
                                case "end":
                                    return t.stop()
                            }
                        }), t)
                    })), function() {
                        var e = this,
                            n = arguments;
                        return new Promise((function(r, a) {
                            var o = t.apply(e, n);

                            function i(e) {
                                At(o, r, a, i, s, "next", e)
                            }

                            function s(e) {
                                At(o, r, a, i, s, "throw", e)
                            }
                            i(void 0)
                        }))
                    });
                    return function(e, t, r) {
                        return n.apply(this, arguments)
                    }
                }(),
                Ut = Tt;

            function Nt(e, t, n, r, a, o, i) {
                try {
                    var s = e[o](i),
                        l = s.value
                } catch (e) {
                    return void n(e)
                }
                s.done ? t(l) : Promise.resolve(l).then(r, a)
            }

            function Pt(e) {
                return function() {
                    var t = this,
                        n = arguments;
                    return new Promise((function(r, a) {
                        var o = e.apply(t, n);

                        function i(e) {
                            Nt(o, r, a, i, s, "next", e)
                        }

                        function s(e) {
                            Nt(o, r, a, i, s, "throw", e)
                        }
                        i(void 0)
                    }))
                }
            }
            var xt = function() {
                    var e = Pt(regeneratorRuntime.mark((function e(t) {
                        var n;
                        return regeneratorRuntime.wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return e.prev = 0, e.next = 3, Ut("MustHideConnections", [{
                                        name: "vieweeUserId",
                                        type: "UserId",
                                        value: "".concat(t)
                                    }]);
                                case 3:
                                    return n = e.sent, e.abrupt("return", "Granted" === (null == n ? void 0 : n.access));
                                case 7:
                                    e.prev = 7, e.t0 = e.catch(0), console.debug(e.t0);
                                case 10:
                                    return e.abrupt("return", !0);
                                case 11:
                                case "end":
                                    return e.stop()
                            }
                        }), e, null, [
                            [0, 7]
                        ])
                    })));
                    return function(t) {
                        return e.apply(this, arguments)
                    }
                }(),
                Ft = function() {
                    var e = Pt(regeneratorRuntime.mark((function e(t) {
                        var n;
                        return regeneratorRuntime.wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return e.prev = 0, e.next = 3, Ke([parseInt(t, 10)]);
                                case 3:
                                    if (!(null != (n = e.sent) && n.users && n.users.length > 0)) {
                                        e.next = 6;
                                        break
                                    }
                                    return e.abrupt("return", n.users[0].isBlockingViewer);
                                case 6:
                                    e.next = 11;
                                    break;
                                case 8:
                                    e.prev = 8, e.t0 = e.catch(0), console.debug(e.t0);
                                case 11:
                                    return e.abrupt("return", !0);
                                case 12:
                                case "end":
                                    return e.stop()
                            }
                        }), e, null, [
                            [0, 8]
                        ])
                    })));
                    return function(t) {
                        return e.apply(this, arguments)
                    }
                }(),
                It = function(e, t, n, r) {
                    return new(n || (n = Promise))((function(a, o) {
                        function i(e) {
                            try {
                                l(r.next(e))
                            } catch (e) {
                                o(e)
                            }
                        }

                        function s(e) {
                            try {
                                l(r.throw(e))
                            } catch (e) {
                                o(e)
                            }
                        }

                        function l(e) {
                            var t;
                            e.done ? a(e.value) : (t = e.value, t instanceof n ? t : new n((function(e) {
                                e(t)
                            }))).then(i, s)
                        }
                        l((r = r.apply(e, t || [])).next())
                    }))
                },
                Rt = function(e, t) {
                    var n, r, a, o, i = {
                        label: 0,
                        sent: function() {
                            if (1 & a[0]) throw a[1];
                            return a[1]
                        },
                        trys: [],
                        ops: []
                    };
                    return o = {
                        next: s(0),
                        throw: s(1),
                        return: s(2)
                    }, "function" == typeof Symbol && (o[Symbol.iterator] = function() {
                        return this
                    }), o;

                    function s(o) {
                        return function(s) {
                            return function(o) {
                                if (n) throw new TypeError("Generator is already executing.");
                                for (; i;) try {
                                    if (n = 1, r && (a = 2 & o[0] ? r.return : o[0] ? r.throw || ((a = r.return) && a.call(r), 0) : r.next) && !(a = a.call(r, o[1])).done) return a;
                                    switch (r = 0, a && (o = [2 & o[0], a.value]), o[0]) {
                                        case 0:
                                        case 1:
                                            a = o;
                                            break;
                                        case 4:
                                            return i.label++, {
                                                value: o[1],
                                                done: !1
                                            };
                                        case 5:
                                            i.label++, r = o[1], o = [0];
                                            continue;
                                        case 7:
                                            o = i.ops.pop(), i.trys.pop();
                                            continue;
                                        default:
                                            if (!(a = i.trys, (a = a.length > 0 && a[a.length - 1]) || 6 !== o[0] && 2 !== o[0])) {
                                                i = 0;
                                                continue
                                            }
                                            if (3 === o[0] && (!a || o[1] > a[0] && o[1] < a[3])) {
                                                i.label = o[1];
                                                break
                                            }
                                            if (6 === o[0] && i.label < a[1]) {
                                                i.label = a[1], a = o;
                                                break
                                            }
                                            if (a && i.label < a[2]) {
                                                i.label = a[2], i.ops.push(o);
                                                break
                                            }
                                            a[2] && i.ops.pop(), i.trys.pop();
                                            continue
                                    }
                                    o = t.call(e, i)
                                } catch (e) {
                                    o = [6, e], r = 0
                                } finally {
                                    n = a = 0
                                }
                                if (5 & o[0]) throw o[1];
                                return {
                                    value: o[0] ? o[1] : void 0,
                                    done: !0
                                }
                            }([o, s])
                        }
                    }
                },
                _t = function(e) {
                    return Promise.all(e.map((function(e) {
                        return e.then((function(e) {
                            return {
                                status: "fulfilled",
                                value: e
                            }
                        })).catch((function(e) {
                            return {
                                status: "rejected",
                                reason: e,
                                value: null
                            }
                        }))
                    })))
                },
                Bt = function(e, t) {
                    return It(void 0, void 0, void 0, (function() {
                        return Rt(this, (function(n) {
                            switch (n.label) {
                                case 0:
                                    return t ? [2, !1] : [4, Ft(e)];
                                case 1:
                                    return n.sent() ? [2, !0] : [4, xt(e)];
                                case 2:
                                    return [2, n.sent()]
                            }
                        }))
                    }))
                },
                Ot = function(n) {
                    var a, d, p = n.translate,
                        m = (0, s.useTheme)(),
                        v = Se(),
                        h = v.state,
                        b = v.dispatch,
                        y = c.authenticatedUser.id,
                        w = (a = /\/users\/(\d+)\//g.exec(window.location.pathname)) ? a[1] : null,
                        g = w ? parseInt(w, 10) : y,
                        E = g === y,
                        S = [u.UserProfileField.Names.CombinedName, u.UserProfileField.Names.Username, u.UserProfileField.Names.DisplayName, u.UserProfileField.Names.Alias],
                        k = (0, u.useUserProfiles)([g], S).data,
                        C = f().usePresence(g, void 0),
                        A = C.userPresenceType === f().PresenceType.Game && C.rootPlaceId ? (d = C.rootPlaceId, e.urlService.getUrlWithQueries(l.entityUrl.game.getReferralPath(), {
                            PlaceId: d,
                            PageType: "Profile",
                            Position: 0
                        })) : void 0,
                        T = null == h.errorMessage ? null : r().createElement("p", {
                            className: "text-error profile-header-error"
                        }, h.errorMessage);
                    return (0, t.useEffect)((function() {
                        wt.sendEvent(Ge.PAGE_LOAD, "profileHeader", g.toString()), It(void 0, void 0, void 0, (function() {
                            var e, t, n, r, a, o, i, s, l, u, d, f, p, m, v, h, w, S, k;
                            return Rt(this, (function(C) {
                                switch (C.label) {
                                    case 0:
                                        return e = [re(g), te(g), ne(g), se(g), Ue(g), ee(y, g), Be(), E ? Promise.resolve({
                                            isFollowed: !1,
                                            isFollowing: !1
                                        }) : X(g), xe(g), !E && c.authenticatedUser.isAuthenticated ? We(g) : Promise.resolve(!1), mt(g), St(), Bt(g, E), ae()], [4, _t(e)];
                                    case 1:
                                        return t = C.sent(), n = t[0], r = t[1], a = t[2], o = t[3], i = t[4], s = t[5], l = t[6], u = t[7], d = t[8], f = t[9], p = t[10], m = t[11], v = t[12], h = t[13], w = "fulfilled" !== f.status || f.value, S = !1, k = !1, "fulfilled" === u.status && (S = u.value.isFollowing, k = u.value.isFollowing), b({
                                            type: me.SET_PROFILE_DATA,
                                            data: {
                                                hasVerifiedBadge: "fulfilled" === i.status && i.value.hasVerifiedBadge,
                                                friendCount: "fulfilled" === n.status ? n.value.count : 0,
                                                followingsCount: "fulfilled" === r.status ? r.value.count : 0,
                                                followersCount: "fulfilled" === a.status ? a.value.count : 0,
                                                hasPremiumMembership: "fulfilled" === o.status && o.value,
                                                friendStatus: "fulfilled" === s.status ? s.value.status : ve.NotFriends,
                                                canChat: "fulfilled" === l.status && l.value.chatEnabled,
                                                isFollowed: k,
                                                isFollowing: S,
                                                hasFavorites: "fulfilled" === d.status && d.value.data.length > 0,
                                                isBlocked: w,
                                                canTradeWith: "fulfilled" === p.status && p.value.canTrade,
                                                policies: "fulfilled" === m.status ? m.value : void 0,
                                                mustNotLinkConnections: "fulfilled" !== v.status || v.value,
                                                isFriendsRenamedToConnections: "fulfilled" === h.status && h.value
                                            }
                                        }), [2]
                                }
                            }))
                        })).catch((function(e) {
                            throw e
                        }))
                    }), []), (0, t.useEffect)((function() {
                        var e = k ? k[g].names : {};
                        b({
                            type: me.SET_NAMES,
                            names: e
                        })
                    }), [g, b, k]), r().createElement(o.UIThemeProvider, {
                        theme: m
                    }, r().createElement("div", {
                        className: "profile-header-main"
                    }, r().createElement(fe, {
                        profileUserId: g,
                        presenceUrl: A
                    }), r().createElement("div", {
                        className: "profile-header-details"
                    }, r().createElement(ke, {
                        profileUserId: g
                    }), r().createElement("ul", {
                        className: "profile-header-social-counts"
                    }, r().createElement(Ce, {
                        label: 1 === h.friendCount ? p(h.isFriendsRenamedToConnections ? i.translationKeys.connection : i.translationKeys.friend) : p(h.isFriendsRenamedToConnections ? i.translationKeys.connections : i.translationKeys.friends),
                        count: h.friendCount,
                        profileId: g,
                        subPage: Ie.Friends,
                        isClickable: !h.mustNotLinkConnections
                    }), r().createElement(Ce, {
                        label: p(i.translationKeys.followers),
                        count: h.followersCount,
                        profileId: g,
                        subPage: Ie.Followers,
                        isClickable: !h.mustNotLinkConnections
                    }), r().createElement(Ce, {
                        label: p(i.translationKeys.following),
                        count: h.followingsCount,
                        profileId: g,
                        subPage: Ie.Following,
                        isClickable: !h.mustNotLinkConnections
                    }))), r().createElement(dt, {
                        id: y,
                        profileUserId: g,
                        translate: p
                    })), T, r().createElement(je, {
                        profileUserId: g,
                        translate: p
                    }), r().createElement(et, {
                        profileUserId: g,
                        translate: p
                    }))
                };
            Ot.defaultProps = {
                translate: void 0
            };
            var Mt = (0, s.withTranslations)(Ot, le);
            (0, e.ready)((function() {
                if (i.profileHeaderContainer()) {
                    var e = (0, o.createCache)();
                    (0, a.render)(r().createElement(o.CacheProvider, {
                        cache: e
                    }, r().createElement(Ee, null, r().createElement(Mt, null))), i.profileHeaderContainer())
                }
            }))
        }()
}();
//# sourceMappingURL=https://sourcemaps.rbxcdn.com/ce0034074e7ed860934bf6ec6266af0e-profileHeader.bundle.min.js.map

/* Bundle detector */
window.Roblox && window.Roblox.BundleDetector && window.Roblox.BundleDetector.bundleDetected("ProfileHeader");