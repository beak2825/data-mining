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
                    var l = {}.hasOwnProperty;

                    function i() {
                        for (var e = [], t = 0; t < arguments.length; t++) {
                            var n = arguments[t];
                            if (n) {
                                var o, r = typeof n;
                                if ("string" == r || "number" == r) e.push(n);
                                else if (Array.isArray(n)) !n.length || (o = i.apply(null, n)) && e.push(o);
                                else if ("object" == r)
                                    if (n.toString === Object.prototype.toString || n.toString.toString().includes("[native code]"))
                                        for (var a in n) l.call(n, a) && n[a] && e.push(a);
                                    else e.push(n.toString())
                            }
                        }
                        return e.join(" ")
                    }
                    e.exports ? (i.default = i, e.exports = i) : void 0 === (n = function() {
                        return i
                    }.apply(t, [])) || (e.exports = n)
                }()
            }
        },
        o = {};

    function H(e) {
        var t = o[e];
        if (void 0 !== t) return t.exports;
        t = o[e] = {
            exports: {}
        };
        return n[e](t, t.exports, H), t.exports
    }
    H.n = function(e) {
            var t = e && e.__esModule ? function() {
                return e.default
            } : function() {
                return e
            };
            return H.d(t, {
                a: t
            }), t
        }, H.d = function(e, t) {
            for (var n in t) H.o(t, n) && !H.o(e, n) && Object.defineProperty(e, n, {
                enumerable: !0,
                get: t[n]
            })
        }, H.o = function(e, t) {
            return Object.prototype.hasOwnProperty.call(e, t)
        },
        function() {
            "use strict";
            var i, s, c = React,
                u = H.n(c),
                r = CoreUtilities,
                e = ReactDOM,
                p = 5e3,
                t = function() {
                    return document.getElementById("profile-posts")
                },
                a = {
                    downloadButton: "Label.DownloadInstallRoblox",
                    downloadModalTitle: "Title.DownloadApp",
                    loadingModalBody: "Body.OpeningApp",
                    loadingModalTitle: "Title.OpeningApp",
                    noPostsFound: "Description.NoPostsFound",
                    noPostsOthers: "Description.OthersNoPosts",
                    noPostsSelf: "Description.SelfNoPosts",
                    posts: "Title.Posts",
                    postsTooltip: "Description.PostsTooltip",
                    seeAll: "Action.SeeAll"
                },
                d = ReactUtilities,
                f = {
                    common: ["CommonUI.Controls", "Common.VisitGame"],
                    feature: "Feature.ContentFeed"
                };

            function h(e) {
                var t = e.showLoading,
                    n = e.showDownload,
                    o = e.onClose,
                    e = (0, d.useTranslation)().translate;
                return u().createElement(u().Fragment, null, u().createElement(y.Modal, {
                    id: "content-posts-loading-modal",
                    show: t,
                    onHide: o,
                    size: "sm",
                    "aria-labelledby": "content-posts-loading-modal-header"
                }, u().createElement(y.Modal.Header, {
                    id: "content-posts-loading-modal-header",
                    title: e(a.loadingModalTitle),
                    showCloseButton: !1
                }), u().createElement(y.Modal.Body, null, u().createElement("div", {
                    className: "text-center"
                }, u().createElement("p", null, e(a.loadingModalBody)))), u().createElement(y.Modal.Footer, null, u().createElement("span", {
                    className: "spinner spinner-default"
                }))), u().createElement(y.Modal, {
                    id: "content-posts-download-modal",
                    show: n,
                    onHide: o,
                    size: "sm",
                    "aria-labelledby": "content-posts-download-modal-header"
                }, u().createElement(y.Modal.Header, {
                    id: "content-posts-download-modal-header",
                    title: e(a.downloadModalTitle),
                    showCloseButton: !0,
                    onClose: o
                }), u().createElement(y.Modal.Footer, null, u().createElement(y.Button, {
                    variant: y.Button.variants.primary,
                    size: y.Button.sizes.medium,
                    onClick: function() {
                        return g(void 0, void 0, void 0, function() {
                            return E(this, function(e) {
                                switch (e.label) {
                                    case 0:
                                        return [4, b.ProtocolHandlerClientInterface.startDownload()];
                                    case 1:
                                        return e.sent(), o(), [2]
                                }
                            })
                        })
                    }
                }, e(a.downloadButton)))))
            }

            function l(e) {
                var t = e.callback,
                    n = e.getLabel,
                    o = e.post,
                    e = (a = (0, c.useState)(!1))[0],
                    r = a[1],
                    a = x()("post-tile-container", {
                        shimmer: !e
                    }),
                    e = (null !== (e = null === (e = null == o ? void 0 : o.screenshotMetadata) || void 0 === e ? void 0 : e.carouselUrl) && void 0 !== e ? e : "").replace(new RegExp("noFilter", "g"), "cropToAspectRatio"),
                    e = null != o.assetId && void 0 !== o.assetId && 0 !== o.assetId ? e : k(o.contentLinkId);
                return u().createElement(u().Fragment, null, u().createElement("li", {
                    className: a
                }, u().createElement("button", {
                    type: "button",
                    className: "post-tile-button",
                    onClick: t
                }, u().createElement("div", {
                    className: "post-tile-overlay"
                }, u().createElement("p", null, n(o))), u().createElement("img", {
                    alt: o.caption,
                    className: "post-tile-image",
                    onLoad: function() {
                        return r(!0)
                    },
                    src: e
                }))))
            }

            function m(e) {
                var n = e.callback,
                    o = e.getLabel,
                    e = e.posts;
                return u().createElement(u().Fragment, null, u().createElement("ul", {
                    className: "posts-carousel"
                }, e.map(function(e, t) {
                    return u().createElement(l, {
                        callback: function() {
                            return n(e, t + 1)
                        },
                        getLabel: o,
                        key: e.postId,
                        post: e
                    })
                })))
            }

            function v() {
                var e = (0, d.useTranslation)().translate;
                return u().createElement("div", {
                    className: "container-header"
                }, u().createElement("h2", null, e(a.posts)), u().createElement(y.Tooltip, {
                    containerClassName: "tooltip-container",
                    content: u().createElement(u().Fragment, null, u().createElement("p", {
                        className: "tooltip-body"
                    }, e(a.postsTooltip))),
                    id: "profile-posts-tooltip",
                    placement: "right"
                }, u().createElement("span", {
                    className: "icon-actions-info-sm"
                })))
            }(n = i = i || {}).CarouselLoaded = "carousel_loaded", n.PostSelected = "post_selected", (n = s = s || {}).ButtonClick = "buttonClick", n.ComponentLoad = "componentLoad";
            var b = Roblox,
                o = function() {
                    return (o = Object.assign || function(e) {
                        for (var t, n = 1, o = arguments.length; n < o; n++)
                            for (var r in t = arguments[n]) Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
                        return e
                    }).apply(this, arguments)
                },
                w = function(e, t, n) {
                    e = {
                        action: e,
                        namespace: "web_profile_carousel"
                    };
                    b.EventStream.SendEventWithTarget(t, "socialContentEntrypoints", o(o({}, e), n), b.EventStream.TargetTypes.WWW)
                },
                y = ReactStyleGuide,
                g = function(e, l, i, s) {
                    return new(i = i || Promise)(function(n, t) {
                        function o(e) {
                            try {
                                a(s.next(e))
                            } catch (e) {
                                t(e)
                            }
                        }

                        function r(e) {
                            try {
                                a(s.throw(e))
                            } catch (e) {
                                t(e)
                            }
                        }

                        function a(e) {
                            var t;
                            e.done ? n(e.value) : ((t = e.value) instanceof i ? t : new i(function(e) {
                                e(t)
                            })).then(o, r)
                        }
                        a((s = s.apply(e, l || [])).next())
                    })
                },
                E = function(n, o) {
                    var r, a, l, i = {
                            label: 0,
                            sent: function() {
                                if (1 & l[0]) throw l[1];
                                return l[1]
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
                                for (; i;) try {
                                    if (r = 1, a && (l = 2 & t[0] ? a.return : t[0] ? a.throw || ((l = a.return) && l.call(a), 0) : a.next) && !(l = l.call(a, t[1])).done) return l;
                                    switch (a = 0, l && (t = [2 & t[0], l.value]), t[0]) {
                                        case 0:
                                        case 1:
                                            l = t;
                                            break;
                                        case 4:
                                            return i.label++, {
                                                value: t[1],
                                                done: !1
                                            };
                                        case 5:
                                            i.label++, a = t[1], t = [0];
                                            continue;
                                        case 7:
                                            t = i.ops.pop(), i.trys.pop();
                                            continue;
                                        default:
                                            if (!(l = 0 < (l = i.trys).length && l[l.length - 1]) && (6 === t[0] || 2 === t[0])) {
                                                i = 0;
                                                continue
                                            }
                                            if (3 === t[0] && (!l || t[1] > l[0] && t[1] < l[3])) {
                                                i.label = t[1];
                                                break
                                            }
                                            if (6 === t[0] && i.label < l[1]) {
                                                i.label = l[1], l = t;
                                                break
                                            }
                                            if (l && i.label < l[2]) {
                                                i.label = l[2], i.ops.push(t);
                                                break
                                            }
                                            l[2] && i.ops.pop(), i.trys.pop();
                                            continue
                                    }
                                    t = o.call(n, i)
                                } catch (e) {
                                    t = [6, e], a = 0
                                } finally {
                                    r = l = 0
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
                n = H(870),
                x = H.n(n),
                C = b.EnvironmentUrls.thumbnailsApi,
                k = function(e, t, n) {
                    return void 0 === t && (t = 320), void 0 === n && (n = 180), C.includes("sitetest") ? C.replace("thumbnails", "thumbnailsresizer") + "/v1/resize/" + e + "/" + n + "/" + t + "/ShareContent/Png/cropToAspectRatio" : "https://tr.rbxcdn.com/" + e + "/" + n + "/" + t + "/ShareContent/Png/cropToAspectRatio"
                },
                S = function(e, l, i, s) {
                    return new(i = i || Promise)(function(n, t) {
                        function o(e) {
                            try {
                                a(s.next(e))
                            } catch (e) {
                                t(e)
                            }
                        }

                        function r(e) {
                            try {
                                a(s.throw(e))
                            } catch (e) {
                                t(e)
                            }
                        }

                        function a(e) {
                            var t;
                            e.done ? n(e.value) : ((t = e.value) instanceof i ? t : new i(function(e) {
                                e(t)
                            })).then(o, r)
                        }
                        a((s = s.apply(e, l || [])).next())
                    })
                },
                P = function(n, o) {
                    var r, a, l, i = {
                            label: 0,
                            sent: function() {
                                if (1 & l[0]) throw l[1];
                                return l[1]
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
                                for (; i;) try {
                                    if (r = 1, a && (l = 2 & t[0] ? a.return : t[0] ? a.throw || ((l = a.return) && l.call(a), 0) : a.next) && !(l = l.call(a, t[1])).done) return l;
                                    switch (a = 0, l && (t = [2 & t[0], l.value]), t[0]) {
                                        case 0:
                                        case 1:
                                            l = t;
                                            break;
                                        case 4:
                                            return i.label++, {
                                                value: t[1],
                                                done: !1
                                            };
                                        case 5:
                                            i.label++, a = t[1], t = [0];
                                            continue;
                                        case 7:
                                            t = i.ops.pop(), i.trys.pop();
                                            continue;
                                        default:
                                            if (!(l = 0 < (l = i.trys).length && l[l.length - 1]) && (6 === t[0] || 2 === t[0])) {
                                                i = 0;
                                                continue
                                            }
                                            if (3 === t[0] && (!l || t[1] > l[0] && t[1] < l[3])) {
                                                i.label = t[1];
                                                break
                                            }
                                            if (6 === t[0] && i.label < l[1]) {
                                                i.label = l[1], l = t;
                                                break
                                            }
                                            if (l && i.label < l[2]) {
                                                i.label = l[2], i.ops.push(t);
                                                break
                                            }
                                            l[2] && i.ops.pop(), i.trys.pop();
                                            continue
                                    }
                                    t = o.call(n, i)
                                } catch (e) {
                                    t = [6, e], a = 0
                                } finally {
                                    r = l = 0
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
                T = b.EnvironmentUrls.gamesApi,
                I = function(n) {
                    return S(void 0, void 0, Promise, function() {
                        var t;
                        return P(this, function(e) {
                            switch (e.label) {
                                case 0:
                                    return 0 === n.length ? [2, {
                                        data: []
                                    }] : (t = {
                                        url: T + "/v1/games?universeIds=" + n.join(","),
                                        retryable: !0,
                                        withCredentials: !0
                                    }, [4, r.httpService.get(t)]);
                                case 1:
                                    return [2, e.sent().data]
                            }
                        })
                    })
                },
                M = function(e, l, i, s) {
                    return new(i = i || Promise)(function(n, t) {
                        function o(e) {
                            try {
                                a(s.next(e))
                            } catch (e) {
                                t(e)
                            }
                        }

                        function r(e) {
                            try {
                                a(s.throw(e))
                            } catch (e) {
                                t(e)
                            }
                        }

                        function a(e) {
                            var t;
                            e.done ? n(e.value) : ((t = e.value) instanceof i ? t : new i(function(e) {
                                e(t)
                            })).then(o, r)
                        }
                        a((s = s.apply(e, l || [])).next())
                    })
                },
                D = function(n, o) {
                    var r, a, l, i = {
                            label: 0,
                            sent: function() {
                                if (1 & l[0]) throw l[1];
                                return l[1]
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
                                for (; i;) try {
                                    if (r = 1, a && (l = 2 & t[0] ? a.return : t[0] ? a.throw || ((l = a.return) && l.call(a), 0) : a.next) && !(l = l.call(a, t[1])).done) return l;
                                    switch (a = 0, l && (t = [2 & t[0], l.value]), t[0]) {
                                        case 0:
                                        case 1:
                                            l = t;
                                            break;
                                        case 4:
                                            return i.label++, {
                                                value: t[1],
                                                done: !1
                                            };
                                        case 5:
                                            i.label++, a = t[1], t = [0];
                                            continue;
                                        case 7:
                                            t = i.ops.pop(), i.trys.pop();
                                            continue;
                                        default:
                                            if (!(l = 0 < (l = i.trys).length && l[l.length - 1]) && (6 === t[0] || 2 === t[0])) {
                                                i = 0;
                                                continue
                                            }
                                            if (3 === t[0] && (!l || t[1] > l[0] && t[1] < l[3])) {
                                                i.label = t[1];
                                                break
                                            }
                                            if (6 === t[0] && i.label < l[1]) {
                                                i.label = l[1], l = t;
                                                break
                                            }
                                            if (l && i.label < l[2]) {
                                                i.label = l[2], i.ops.push(t);
                                                break
                                            }
                                            l[2] && i.ops.pop(), i.trys.pop();
                                            continue
                                    }
                                    t = o.call(n, i)
                                } catch (e) {
                                    t = [6, e], a = 0
                                } finally {
                                    r = l = 0
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
                A = b.EnvironmentUrls.apiGatewayUrl,
                L = function(o) {
                    return M(void 0, void 0, Promise, function() {
                        var t, n;
                        return D(this, function(e) {
                            switch (e.label) {
                                case 0:
                                    return t = {
                                        url: A + "/posts-api/v1/content-posts/findByUser",
                                        retryable: !0,
                                        withCredentials: !0
                                    }, n = {
                                        userId: o,
                                        limit: 20
                                    }, [4, r.httpService.get(t, n)];
                                case 1:
                                    return [2, e.sent().data]
                            }
                        })
                    })
                },
                N = function(e, l, i, s) {
                    return new(i = i || Promise)(function(n, t) {
                        function o(e) {
                            try {
                                a(s.next(e))
                            } catch (e) {
                                t(e)
                            }
                        }

                        function r(e) {
                            try {
                                a(s.throw(e))
                            } catch (e) {
                                t(e)
                            }
                        }

                        function a(e) {
                            var t;
                            e.done ? n(e.value) : ((t = e.value) instanceof i ? t : new i(function(e) {
                                e(t)
                            })).then(o, r)
                        }
                        a((s = s.apply(e, l || [])).next())
                    })
                },
                U = function(n, o) {
                    var r, a, l, i = {
                            label: 0,
                            sent: function() {
                                if (1 & l[0]) throw l[1];
                                return l[1]
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
                                for (; i;) try {
                                    if (r = 1, a && (l = 2 & t[0] ? a.return : t[0] ? a.throw || ((l = a.return) && l.call(a), 0) : a.next) && !(l = l.call(a, t[1])).done) return l;
                                    switch (a = 0, l && (t = [2 & t[0], l.value]), t[0]) {
                                        case 0:
                                        case 1:
                                            l = t;
                                            break;
                                        case 4:
                                            return i.label++, {
                                                value: t[1],
                                                done: !1
                                            };
                                        case 5:
                                            i.label++, a = t[1], t = [0];
                                            continue;
                                        case 7:
                                            t = i.ops.pop(), i.trys.pop();
                                            continue;
                                        default:
                                            if (!(l = 0 < (l = i.trys).length && l[l.length - 1]) && (6 === t[0] || 2 === t[0])) {
                                                i = 0;
                                                continue
                                            }
                                            if (3 === t[0] && (!l || t[1] > l[0] && t[1] < l[3])) {
                                                i.label = t[1];
                                                break
                                            }
                                            if (6 === t[0] && i.label < l[1]) {
                                                i.label = l[1], l = t;
                                                break
                                            }
                                            if (l && i.label < l[2]) {
                                                i.label = l[2], i.ops.push(t);
                                                break
                                            }
                                            l[2] && i.ops.pop(), i.trys.pop();
                                            continue
                                    }
                                    t = o.call(n, i)
                                } catch (e) {
                                    t = [6, e], a = 0
                                } finally {
                                    r = l = 0
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
                B = function(n) {
                    var e = (0, c.useState)(new Map),
                        t = e[0],
                        o = e[1],
                        r = (0, c.useState)([]),
                        e = r[0],
                        a = r[1];
                    return (0, c.useEffect)(function() {
                        N(void 0, void 0, void 0, function() {
                            var t;
                            return U(this, function(e) {
                                switch (e.label) {
                                    case 0:
                                        return [4, L(n)];
                                    case 1:
                                        return t = e.sent(), a(t.posts), t = t.posts.map(function(e) {
                                            return e.experienceContext.experienceId
                                        }), [4, I(t)];
                                    case 2:
                                        return t = e.sent(), t = new Map(t.data.map(function(e) {
                                            return [e.id, e.name]
                                        })), o(t), [2]
                                }
                            })
                        }).catch(function(e) {
                            console.debug(e)
                        })
                    }, [n]), {
                        posts: e,
                        experienceIdToNames: t
                    }
                },
                _ = function(e) {
                    return "https://ro.blox.com/Ebh5?pid=appstart_mobileweb&is_retargeting=false&deep_link_value=" + e
                },
                O = function(e, t) {
                    return "roblox://navigation/content_posts?userId=" + e + "&postId=" + t
                },
                F = function(e) {
                    return "roblox://navigation/content_posts?userId=" + e
                },
                R = function(n, o) {
                    var r = (0, c.useCallback)(function(e) {
                        var t, n = (0, b.DeviceMeta)();
                        null != n && n.isInApp ? window.open(e, "_self") : null != n && n.isIosDevice || null != n && n.isAndroidDevice || b.JsClientDeviceIdentifier.isIos13Ipad || null != n && n.isChromeOs ? (t = encodeURIComponent(e), window.open(_(t), "_self")) : (window.open(e, "_self"), null != n && n.isDesktop && o())
                    }, [o]);
                    return {
                        navigateToPost: (0, c.useCallback)(function(e, t) {
                            void 0 !== t && w(i.PostSelected, s.ButtonClick, {
                                creatorUserId: n,
                                postId: e.postId,
                                postPosition: t
                            });
                            e = O(n, e.postId);
                            r(e)
                        }, [r, n]),
                        navigateToSeeAllModal: (0, c.useCallback)(function() {
                            var e = F(n);
                            r(e)
                        }, [r, n])
                    }
                },
                j = function(e) {
                    var t = (0, c.useState)(!1),
                        n = t[0],
                        o = t[1],
                        r = (0, c.useState)(!1),
                        t = r[0],
                        a = r[1];
                    return {
                        showLoading: n,
                        showDownload: t,
                        openPopUpModal: (0, c.useCallback)(function() {
                            setTimeout(function() {
                                o(!1), a(!0)
                            }, e), o(!0)
                        }, [e]),
                        closePopUpModal: (0, c.useCallback)(function() {
                            o(!1), a(!1)
                        }, [])
                    }
                },
                G = function() {
                    var e = /\/users\/(\d+)\//g.exec(window.location.pathname);
                    return parseInt(e ? e[1] : "0", 10)
                }(),
                z = (0, d.withTranslations)(function() {
                    var e = B(G),
                        t = e.posts,
                        n = e.experienceIdToNames,
                        o = j(p),
                        r = o.showLoading,
                        a = o.showDownload,
                        l = o.openPopUpModal,
                        e = o.closePopUpModal,
                        o = R(G, l).navigateToPost;
                    (0, c.useEffect)(function() {
                        0 < t.length && w(i.CarouselLoaded, s.ComponentLoad, {
                            creatorUserId: G
                        })
                    }, [t]);
                    l = (0, c.useCallback)(function(e) {
                        return n.get(e.experienceContext.experienceId) || ""
                    }, [n]);
                    return 0 === t.length ? u().createElement(u().Fragment, null) : u().createElement(u().Fragment, null, u().createElement(d.TranslationProvider, {
                        config: f
                    }, u().createElement(v, null), u().createElement(m, {
                        callback: o,
                        getLabel: l,
                        posts: t
                    }), u().createElement(h, {
                        showLoading: r,
                        showDownload: a,
                        onClose: e
                    })))
                }, f);
            (0, r.ready)(function() {
                t() && (0, e.render)(u().createElement(z, null), t())
            })
        }()
}();
//# sourceMappingURL=https://js.rbxcdn.com/ddfabb060f14b3f760ca0a048d64e6ce-profilePosts.bundle.min.js.map

/* Bundle detector */
window.Roblox && window.Roblox.BundleDetector && window.Roblox.BundleDetector.bundleDetected("ProfilePosts");