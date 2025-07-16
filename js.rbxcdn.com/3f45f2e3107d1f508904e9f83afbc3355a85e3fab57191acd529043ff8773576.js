! function() {
    var e = {
            671: function(e) {
                function t(e) {
                    return e && "undefined" != typeof Symbol && e.constructor === Symbol ? "symbol" : typeof e
                }!
                /*!
                	Copyright (c) 2018 Jed Watson.
                	Licensed under the MIT License (MIT), see
                	http://jedwatson.github.io/classnames
                */
                function() {
                    "use strict";
                    var n = {}.hasOwnProperty;

                    function o() {
                        for (var e = "", r = 0; r < arguments.length; r++) {
                            var i = arguments[r];
                            i && (e = a(e, function(e) {
                                if ("string" == typeof e || "number" == typeof e) return e;
                                if ((void 0 === e ? "undefined" : t(e)) !== "object") return "";
                                if (Array.isArray(e)) return o.apply(null, e);
                                if (e.toString !== Object.prototype.toString && !e.toString.toString().includes("[native code]")) return e.toString();
                                var r = "";
                                for (var i in e) n.call(e, i) && e[i] && (r = a(r, i));
                                return r
                            }(i)))
                        }
                        return e
                    }

                    function a(e, t) {
                        return t ? e ? e + " " + t : e + t : e
                    }
                    e.exports ? (o.default = o, e.exports = o) : "function" == typeof define && "object" === t(define.amd) && define.amd ? define("classnames", [], function() {
                        return o
                    }) : window.classNames = o
                }()
            },
            587: function(e, t, n) {
                "use strict";
                e.exports = {}
            }
        },
        t = {};

    function n(o) {
        var a = t[o];
        if (void 0 !== a) return a.exports;
        var r = t[o] = {
            exports: {}
        };
        return e[o](r, r.exports, n), r.exports
    }
    n.m = e, n.n = function(e) {
            var t = e && e.__esModule ? function() {
                return e.default
            } : function() {
                return e
            };
            return n.d(t, {
                a: t
            }), t
        }, n.d = function(e, t) {
            for (var o in t) n.o(t, o) && !n.o(e, o) && Object.defineProperty(e, o, {
                enumerable: !0,
                get: t[o]
            })
        }, n.k = function(e) {
            return "" + e + ".css"
        }, n.g = function() {
            if ("object" == typeof globalThis) return globalThis;
            try {
                return this || Function("return this")()
            } catch (e) {
                if ("object" == typeof window) return window
            }
        }(), n.o = function(e, t) {
            return Object.prototype.hasOwnProperty.call(e, t)
        }, n.r = function(e) {
            "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
                value: "Module"
            }), Object.defineProperty(e, "__esModule", {
                value: !0
            })
        }, n.rv = function() {
            return "1.2.8"
        },
        function() {
            n.g.importScripts && (e = n.g.location + "");
            var e, t = n.g.document;
            if (!e && t && (t.currentScript && "SCRIPT" === t.currentScript.tagName.toUpperCase() && (e = t.currentScript.src), !e)) {
                var o = t.getElementsByTagName("script");
                if (o.length)
                    for (var a = o.length - 1; a > -1 && (!e || !/^http(s?):/.test(e));) e = o[a--].src
            }
            if (!e) throw Error("Automatic publicPath is not supported in this browser");
            e = e.replace(/^blob:/, "").replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/"), n.p = e
        }(), n.ruid = "bundler=rspack@1.2.8",
        function() {
            "use strict";
            var e, t, o = window.ReactJSX,
                a = window.Roblox["core-scripts"].util.ready,
                r = n.n(a),
                i = window.Roblox["core-scripts"].react,
                l = "https://images.rbxcdn.com/dbc562edb12e2e68.webp",
                s = [{
                    name: "about",
                    path: "/info/about-us",
                    labelTranslationKey: "Label.AboutUs"
                }, {
                    name: "jobs",
                    path: "/info/jobs",
                    labelTranslationKey: "Label.Jobs"
                }, {
                    name: "blog",
                    path: "/info/blog",
                    labelTranslationKey: "Label.sBlog"
                }, {
                    name: "parents",
                    path: "/info/parents",
                    labelTranslationKey: "Label.Parents"
                }, {
                    name: "help",
                    path: "/info/help",
                    labelTranslationKey: "Label.Help"
                }, {
                    name: "terms",
                    path: "/info/terms",
                    labelTranslationKey: "Label.Terms"
                }, {
                    name: "accessibility",
                    path: "/info/accessibility",
                    labelTranslationKey: "Label.Accessibility"
                }, {
                    name: "privacy",
                    path: "/info/privacy",
                    labelTranslationKey: "Label.Privacy"
                }, {
                    name: "your-privacy-choices",
                    path: "/my/account#!/privacy",
                    labelTranslationKey: "Label.YourPrivacyChoices",
                    postfixIcon: l
                }],
                c = [{
                    name: "about",
                    path: "/info/about-us",
                    labelTranslationKey: "Label.AboutUs"
                }, {
                    name: "jobs",
                    path: "/info/jobs",
                    labelTranslationKey: "Label.Jobs"
                }, {
                    name: "blog",
                    path: "/info/blog",
                    labelTranslationKey: "Label.sBlog"
                }, {
                    name: "parents",
                    path: "/info/parents",
                    labelTranslationKey: "Label.Parents"
                }, {
                    name: "giftcards",
                    path: "/giftcards",
                    labelTranslationKey: "Label.GiftCards",
                    cssClass: "giftcards"
                }, {
                    name: "help",
                    path: "/info/help",
                    labelTranslationKey: "Label.Help"
                }, {
                    name: "terms",
                    path: "/info/terms",
                    labelTranslationKey: "Label.Terms"
                }, {
                    name: "accessibility",
                    path: "/info/accessibility",
                    labelTranslationKey: "Label.Accessibility"
                }, {
                    name: "privacy",
                    path: "/info/privacy",
                    labelTranslationKey: "Label.Privacy"
                }, {
                    name: "your-privacy-choices",
                    path: "/my/account#!/privacy",
                    labelTranslationKey: "Label.YourPrivacyChoices",
                    postfixIcon: l
                }],
                u = window.PropTypes,
                p = n.n(u),
                d = JSON.parse('{"I":["CommonUI.Features","Common.AlertsAndOptions","Feature.Tracking"]}'),
                f = window.HeaderScripts,
                h = window.Roblox,
                y = window.CoreUtilities;

            function g(e) {
                var t = e.translate,
                    n = new Date().getFullYear();
                return (0, o.jsx)("p", {
                    className: "text-footer footer-note",
                    children: t("Description.CopyRightMessageDynamicYear", {
                        copyrightYear: n
                    })
                })
            }
            g.propTypes = {
                translate: p().func.isRequired
            };
            var b = n(671),
                m = n.n(b),
                v = window.Roblox["core-scripts"].eventStream,
                x = window.React,
                w = n.n(x),
                L = window.ReactStyleGuide,
                S = window.Roblox["core-scripts"].intl.intl,
                j = n.n(S),
                k = "RBXViralAcquisition",
                C = "Description.RBXViralAcquisition",
                N = "RBXSource",
                U = "Description.RBXSource",
                A = "Heading.GoogleAnalytics",
                T = [{
                    label: "Label.DataCollected",
                    content: "Description.DataCollected"
                }, {
                    label: "Label.DataSharing",
                    content: "Description.DataSharing"
                }, {
                    label: "Label.DataRetention",
                    content: "Description.DataRetention"
                }, {
                    label: "Label.DataUse",
                    content: "Description.DataUse"
                }, {
                    label: "Label.DataStorage",
                    content: "Description.Undisclosed"
                }],
                P = window.Roblox["core-scripts"].environmentUrls,
                E = n.n(P),
                I = window.Roblox["core-scripts"].endpoints,
                D = {
                    privacyPolicyUrl: (E().universalAppConfigurationApi, (0, I.getAbsoluteUrl)("/info/privacy")),
                    googleAnalyticsWebsite: "https://marketingplatform.google.com/about/analytics/",
                    supportUrl: (0, I.getAbsoluteUrl)("/support"),
                    googleAnalyticsReadMore: "https://developers.google.com/analytics/devguides/collection/analyticsjs/cookie-usage"
                },
                O = function(e) {
                    var t = e.cookieName,
                        n = e.description;
                    return (0, o.jsxs)("div", {
                        className: "cookie-item",
                        children: [(0, o.jsx)("p", {
                            className: "cookie-name font-body text",
                            children: t
                        }), (0, o.jsx)("p", {
                            className: "cookie-description font-footer",
                            children: n
                        })]
                    })
                },
                R = function(e) {
                    var t = e.translate,
                        n = e.isNonEssentialCookieListVisible,
                        a = m()({
                            hidden: !n
                        }),
                        r = T.map(function(e) {
                            return (0, o.jsxs)("div", {
                                className: "google-analytics-company-info-sec",
                                children: [(0, o.jsx)("p", {
                                    className: "font-caption-header text-emphasis",
                                    children: t(e.label)
                                }), (0, o.jsx)("p", {
                                    className: "font-caption-body text",
                                    children: t(e.content)
                                })]
                            }, e.label)
                        }),
                        i = (0, o.jsx)("a", {
                            className: "text-link",
                            target: "_blank",
                            href: D.googleAnalyticsReadMore,
                            rel: "noreferrer",
                            children: t(A)
                        }),
                        l = t("Description.GAReadMore"),
                        s = l.indexOf("{googleAnalyticsLink}"),
                        c = (0, o.jsxs)("p", {
                            className: "font-caption-body text",
                            children: [l.substring(0, s), i]
                        }),
                        u = (0, o.jsxs)("div", {
                            children: [(0, o.jsxs)("a", {
                                className: "font-header-2 text-emphasis",
                                href: D.googleAnalyticsWebsite,
                                children: [t(A), (0, o.jsx)("span", {
                                    className: "icon-nav-external-link-sm cookie-external-link-icon"
                                })]
                            }), (0, o.jsxs)("div", {
                                children: [(0, o.jsx)("span", {
                                    className: "google-analytics-info-subheader",
                                    children: t("Label.OwnedBy")
                                }), (0, o.jsx)("span", {
                                    className: "font-caption-header text-emphasis",
                                    children: "Google Inc."
                                })]
                            }), (0, o.jsx)("p", {
                                className: "text-emphasis google-analytics-company-info-sec",
                                children: t("Heading.GoogleAnalyticsPurpose")
                            }), (0, o.jsx)("span", {
                                className: "font-caption-body text",
                                children: t("Description.GoogleAnalyticsPurpose")
                            }), (0, o.jsx)("p", {
                                className: "text-emphasis google-analytics-company-info-sec",
                                children: t("Heading.CompanyCollection")
                            }), r, c]
                        }),
                        p = (0, o.jsxs)("div", {
                            className: "analytics-cookie-list",
                            children: [(0, o.jsx)(O, {
                                cookieName: k,
                                description: t(C)
                            }), (0, o.jsx)(O, {
                                cookieName: N,
                                description: t(U)
                            })]
                        });
                    return (0, o.jsxs)("div", {
                        className: a,
                        children: [p, u]
                    })
                },
                M = {
                    consentCookieName: "RBXcb",
                    consentExpirationDays: 180,
                    privacyPolicy: "Description.PrivacyPolicy"
                },
                B = function(e) {
                    var t, n = "".concat(e, "="),
                        o = null === (t = document.cookie.split("; ").find(function(e) {
                            return e.startsWith(n)
                        })) || void 0 === t ? void 0 : t.split("=")[1];
                    return null != o ? decodeURIComponent(o) : null
                },
                F = function() {
                    var e = window.location.hostname;
                    return e.startsWith("www.") ? e.substring(4) : e
                },
                W = function(e) {
                    var t = "".concat(e, "=; ").concat("expires=Thu, 01 Jan 1970 00:00:00 UTC", "; path=").concat("/"),
                        n = window.location.hostname,
                        o = F();
                    document.cookie = "".concat(t, "; domain=").concat(n, ";"), o !== n && (document.cookie = "".concat(t, "; domain=").concat(o, ";")), o.split(".").length >= 2 && (document.cookie = "".concat(t, "; domain=.").concat(o, ";")), document.cookie = "".concat(t, ";")
                },
                K = function(e, t, n) {
                    var o = new Date;
                    o.setTime(o.getTime() + 864e5 * n);
                    var a = "expires=".concat(o.toUTCString()),
                        r = F();
                    document.cookie = "".concat(e, "=").concat(encodeURIComponent(t), ";").concat(a).concat(";domain=.".concat(r))
                },
                q = function(e, t) {
                    var n = B(M.consentCookieName);
                    n && n.length > 0 && W(M.consentCookieName);
                    var o = "",
                        a = [];
                    t.forEach(function(n, r) {
                        e.includes(n) ? o += "".concat(n, "=true&") : (o += "".concat(n, "=false&"), a.push(n)), r === t.length - 1 && (o = o.slice(0, -1))
                    }), a.forEach(function(e) {
                        W(e)
                    }), K(M.consentCookieName, o, M.consentExpirationDays)
                },
                _ = function() {
                    var e = B(M.consentCookieName);
                    return !!e && "" !== e && !!e.split("&").find(function(e) {
                        return "true" === e.split("=")[1]
                    })
                };

            function H(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var n = 0, o = Array(t); n < t; n++) o[n] = e[n];
                return o
            }

            function G(e, t) {
                return function(e) {
                    if (Array.isArray(e)) return e
                }(e) || function(e, t) {
                    var n, o, a = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                    if (null != a) {
                        var r = [],
                            i = !0,
                            l = !1;
                        try {
                            for (a = a.call(e); !(i = (n = a.next()).done) && (r.push(n.value), !t || r.length !== t); i = !0);
                        } catch (e) {
                            l = !0, o = e
                        } finally {
                            try {
                                i || null == a.return || a.return()
                            } finally {
                                if (l) throw o
                            }
                        }
                        return r
                    }
                }(e, t) || function(e, t) {
                    if (e) {
                        if ("string" == typeof e) return H(e, t);
                        var n = Object.prototype.toString.call(e).slice(8, -1);
                        if ("Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n) return Array.from(n);
                        if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return H(e, t)
                    }
                }(e, t) || function() {
                    throw TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }
            var $ = G((0, L.createModal)(), 2),
                V = $[0],
                X = $[1],
                z = function(e) {
                    var t = e.nonEssentialCookieList,
                        n = e.essentialCookieList,
                        a = e.translate,
                        r = e.closeConsentTool,
                        i = _(),
                        l = G((0, x.useState)(i), 2),
                        s = l[0],
                        c = l[1],
                        u = G((0, x.useState)(!1), 2),
                        p = u[0],
                        d = u[1],
                        f = G((0, x.useState)(!1), 2),
                        h = f[0],
                        g = f[1];
                    (0, x.useEffect)(function() {
                        X.open()
                    }, []);
                    var b = m()({
                            hidden: !p
                        }),
                        v = m()("cookie-consent-tool-collaps", {
                            on: h
                        }),
                        w = m()("cookie-consent-tool-collaps font-header-2 text-emphasis ", {
                            on: p
                        }),
                        S = new(j())().getRobloxLocale(),
                        k = y.urlService.getUrlWithLocale("string" == typeof D.privacyPolicyUrl ? D.privacyPolicyUrl : "", S),
                        C = (0, o.jsx)("div", {
                            className: "cookie-consent-tool-info-link",
                            children: (0, o.jsxs)("a", {
                                className: "text-link",
                                target: "_blank",
                                href: k,
                                rel: "noreferrer",
                                children: [a(M.privacyPolicy), (0, o.jsx)("span", {
                                    className: "icon-nav-external-link-sm cookie-external-link-icon"
                                })]
                            })
                        }),
                        N = "string" == typeof D.supportUrl ? D.supportUrl : "",
                        U = (0, o.jsx)("div", {
                            className: "cookie-consent-tool-info-link",
                            children: (0, o.jsxs)("a", {
                                className: "text-link",
                                target: "_blank",
                                href: N,
                                rel: "noreferrer",
                                children: [a("Action.RequestData"), (0, o.jsx)("span", {
                                    className: "icon-nav-external-link-sm cookie-external-link-icon"
                                })]
                            })
                        }),
                        A = (0, o.jsxs)("div", {
                            children: [(0, o.jsxs)("div", {
                                className: "static-section",
                                children: [(0, o.jsx)("div", {
                                    className: "font-header-2 text-emphasis google-analytics-company-info-sec",
                                    children: a("Heading.InformationCollection")
                                }), (0, o.jsx)("p", {
                                    className: "font-caption-body text",
                                    children: a("Description.InformationCollection")
                                })]
                            }), (0, o.jsxs)("div", {
                                className: "static-section",
                                children: [(0, o.jsx)("div", {
                                    className: "font-header-2 text-emphasis google-analytics-company-info-sec",
                                    children: a("Heading.InformationCollection2")
                                }), (0, o.jsx)("p", {
                                    className: "font-caption-body text",
                                    children: a("Description.InformationCollection2")
                                })]
                            }), (0, o.jsxs)("div", {
                                className: "static-section",
                                children: [(0, o.jsx)("div", {
                                    className: "font-header-2 text-emphasis google-analytics-company-info-sec",
                                    children: a("Heading.InformationPartnerCollection")
                                }), (0, o.jsx)("p", {
                                    className: "font-caption-body text",
                                    children: a("Description.InformationPartnerCollection")
                                })]
                            })]
                        }),
                        T = (0, o.jsxs)("div", {
                            children: [(0, o.jsx)("button", {
                                className: v,
                                type: "button",
                                onClick: function() {
                                    g(!h)
                                },
                                children: (0, o.jsx)("span", {
                                    className: "font-header-2 text-emphasis",
                                    children: a("Heading.AnalyticsCookies")
                                })
                            }), (0, o.jsx)(L.Toggle, {
                                className: "cookie-toggle",
                                isOn: s,
                                onToggle: function() {
                                    c(!s)
                                }
                            })]
                        }),
                        P = n.map(function(e) {
                            return (0, o.jsx)(O, {
                                cookieName: e.cookieName,
                                description: a(e.description)
                            }, e.cookieName)
                        }),
                        E = (0, o.jsxs)("div", {
                            children: [U, C]
                        }),
                        I = (0, o.jsxs)("div", {
                            className: "essential-cookie-section",
                            children: [(0, o.jsx)("button", {
                                className: w,
                                type: "button",
                                onClick: function() {
                                    d(!p)
                                },
                                children: a("Heading.EssentialCookies")
                            }), (0, o.jsx)("div", {
                                className: b,
                                children: P
                            })]
                        }),
                        B = (0, o.jsxs)("div", {
                            className: "cookie-consent-tool-body",
                            children: [A, E, I, T, (0, o.jsx)(R, {
                                isNonEssentialCookieListVisible: h,
                                translate: a
                            })]
                        });
                    return (0, o.jsx)(V, {
                        title: a("Heading.CookieSettings"),
                        body: B,
                        actionButtonShow: !0,
                        actionButtonText: a("Action.SavePreferences"),
                        neutralButtonText: a("Action.Cancel"),
                        onAction: function() {
                            q(s ? t : [], t), r(null)
                        },
                        onNeutral: function() {
                            r("banner")
                        },
                        id: "cookie-consent-tool-modal",
                        size: "lg"
                    })
                };

            function J(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var n = 0, o = Array(t); n < t; n++) o[n] = e[n];
                return o
            }
            var Y = function(e) {
                    var t, n = e.nonEssentialCookieList,
                        a = e.essentialCookieList,
                        r = e.translate,
                        i = e.onCloseConsentTool,
                        l = function(e) {
                            if (Array.isArray(e)) return e
                        }(t = (0, x.useState)(!1)) || function(e, t) {
                            var n, o, a = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                            if (null != a) {
                                var r = [],
                                    i = !0,
                                    l = !1;
                                try {
                                    for (a = a.call(e); !(i = (n = a.next()).done) && (r.push(n.value), r.length !== t); i = !0);
                                } catch (e) {
                                    l = !0, o = e
                                } finally {
                                    try {
                                        i || null == a.return || a.return()
                                    } finally {
                                        if (l) throw o
                                    }
                                }
                                return r
                            }
                        }(t, 2) || function(e, t) {
                            if (e) {
                                if ("string" == typeof e) return J(e, 2);
                                var n = Object.prototype.toString.call(e).slice(8, -1);
                                if ("Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n) return Array.from(n);
                                if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return J(e, t)
                            }
                        }(t, 2) || function() {
                            throw TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                        }(),
                        s = l[0],
                        c = l[1],
                        u = {
                            open: function() {
                                c(!0)
                            },
                            close: function() {
                                c(!1)
                            }
                        };
                    return [s ? (0, o.jsx)(z, {
                        translate: r,
                        essentialCookieList: a,
                        nonEssentialCookieList: n,
                        closeConsentTool: function(e) {
                            u.close(), null == i || i(e)
                        }
                    }) : (0, o.jsx)("div", {}), u]
                },
                Q = {
                    consentLinkText: "Heading.CookieSettings"
                },
                Z = h.EnvironmentUrls.universalAppConfigurationApi,
                ee = {
                    getCookiePolicyConfig: {
                        withCredentials: !0,
                        url: "".concat(Z, "/v1/behaviors/cookie-policy/content")
                    }
                };

            function et(e, t, n, o, a, r, i) {
                try {
                    var l = e[r](i),
                        s = l.value
                } catch (e) {
                    n(e);
                    return
                }
                l.done ? t(s) : Promise.resolve(s).then(o, a)
            }
            var en = {
                getCookiePolicy: (e = function() {
                    var e, t;
                    return function(e, t) {
                        var n, o, a, r, i = {
                            label: 0,
                            sent: function() {
                                if (1 & a[0]) throw a[1];
                                return a[1]
                            },
                            trys: [],
                            ops: []
                        };
                        return r = {
                            next: l(0),
                            throw: l(1),
                            return: l(2)
                        }, "function" == typeof Symbol && (r[Symbol.iterator] = function() {
                            return this
                        }), r;

                        function l(r) {
                            return function(l) {
                                return function(r) {
                                    if (n) throw TypeError("Generator is already executing.");
                                    for (; i;) try {
                                        if (n = 1, o && (a = 2 & r[0] ? o.return : r[0] ? o.throw || ((a = o.return) && a.call(o), 0) : o.next) && !(a = a.call(o, r[1])).done) return a;
                                        switch (o = 0, a && (r = [2 & r[0], a.value]), r[0]) {
                                            case 0:
                                            case 1:
                                                a = r;
                                                break;
                                            case 4:
                                                return i.label++, {
                                                    value: r[1],
                                                    done: !1
                                                };
                                            case 5:
                                                i.label++, o = r[1], r = [0];
                                                continue;
                                            case 7:
                                                r = i.ops.pop(), i.trys.pop();
                                                continue;
                                            default:
                                                if (!(a = (a = i.trys).length > 0 && a[a.length - 1]) && (6 === r[0] || 2 === r[0])) {
                                                    i = 0;
                                                    continue
                                                }
                                                if (3 === r[0] && (!a || r[1] > a[0] && r[1] < a[3])) {
                                                    i.label = r[1];
                                                    break
                                                }
                                                if (6 === r[0] && i.label < a[1]) {
                                                    i.label = a[1], a = r;
                                                    break
                                                }
                                                if (a && i.label < a[2]) {
                                                    i.label = a[2], i.ops.push(r);
                                                    break
                                                }
                                                a[2] && i.ops.pop(), i.trys.pop();
                                                continue
                                        }
                                        r = t.call(e, i)
                                    } catch (e) {
                                        r = [6, e], o = 0
                                    } finally {
                                        n = a = 0
                                    }
                                    if (5 & r[0]) throw r[1];
                                    return {
                                        value: r[0] ? r[1] : void 0,
                                        done: !0
                                    }
                                }([r, l])
                            }
                        }
                    }(this, function(n) {
                        switch (n.label) {
                            case 0:
                                return e = ee.getCookiePolicyConfig, [4, y.httpService.get(e)];
                            case 1:
                                if (void 0 !== (t = n.sent())) return [2, t.data];
                                return [2, {
                                    ShouldDisplayCookieBannerV3: !1,
                                    NonEssentialCookieList: [],
                                    EssentialCookieList: []
                                }]
                        }
                    })
                }, t = function() {
                    var t = this,
                        n = arguments;
                    return new Promise(function(o, a) {
                        var r = e.apply(t, n);

                        function i(e) {
                            et(r, o, a, i, l, "next", e)
                        }

                        function l(e) {
                            et(r, o, a, i, l, "throw", e)
                        }
                        i(void 0)
                    })
                }, function() {
                    return t.apply(this, arguments)
                })
            };

            function eo(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var n = 0, o = Array(t); n < t; n++) o[n] = e[n];
                return o
            }

            function ea(e, t, n, o, a, r, i) {
                try {
                    var l = e[r](i),
                        s = l.value
                } catch (e) {
                    n(e);
                    return
                }
                l.done ? t(s) : Promise.resolve(s).then(o, a)
            }

            function er(e, t) {
                return function(e) {
                    if (Array.isArray(e)) return e
                }(e) || function(e, t) {
                    var n, o, a = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                    if (null != a) {
                        var r = [],
                            i = !0,
                            l = !1;
                        try {
                            for (a = a.call(e); !(i = (n = a.next()).done) && (r.push(n.value), !t || r.length !== t); i = !0);
                        } catch (e) {
                            l = !0, o = e
                        } finally {
                            try {
                                i || null == a.return || a.return()
                            } finally {
                                if (l) throw o
                            }
                        }
                        return r
                    }
                }(e, t) || function(e, t) {
                    if (e) {
                        if ("string" == typeof e) return eo(e, t);
                        var n = Object.prototype.toString.call(e).slice(8, -1);
                        if ("Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n) return Array.from(n);
                        if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return eo(e, t)
                    }
                }(e, t) || function() {
                    throw TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }

            function ei(e) {
                var t = e.translate,
                    n = er((0, x.useState)([]), 2),
                    a = n[0],
                    r = n[1],
                    i = er((0, x.useState)([]), 2),
                    l = i[0],
                    s = i[1];
                (0, x.useEffect)(function() {
                    var e, t;
                    (e = function() {
                        var e;
                        return function(e, t) {
                            var n, o, a, r, i = {
                                label: 0,
                                sent: function() {
                                    if (1 & a[0]) throw a[1];
                                    return a[1]
                                },
                                trys: [],
                                ops: []
                            };
                            return r = {
                                next: l(0),
                                throw: l(1),
                                return: l(2)
                            }, "function" == typeof Symbol && (r[Symbol.iterator] = function() {
                                return this
                            }), r;

                            function l(r) {
                                return function(l) {
                                    return function(r) {
                                        if (n) throw TypeError("Generator is already executing.");
                                        for (; i;) try {
                                            if (n = 1, o && (a = 2 & r[0] ? o.return : r[0] ? o.throw || ((a = o.return) && a.call(o), 0) : o.next) && !(a = a.call(o, r[1])).done) return a;
                                            switch (o = 0, a && (r = [2 & r[0], a.value]), r[0]) {
                                                case 0:
                                                case 1:
                                                    a = r;
                                                    break;
                                                case 4:
                                                    return i.label++, {
                                                        value: r[1],
                                                        done: !1
                                                    };
                                                case 5:
                                                    i.label++, o = r[1], r = [0];
                                                    continue;
                                                case 7:
                                                    r = i.ops.pop(), i.trys.pop();
                                                    continue;
                                                default:
                                                    if (!(a = (a = i.trys).length > 0 && a[a.length - 1]) && (6 === r[0] || 2 === r[0])) {
                                                        i = 0;
                                                        continue
                                                    }
                                                    if (3 === r[0] && (!a || r[1] > a[0] && r[1] < a[3])) {
                                                        i.label = r[1];
                                                        break
                                                    }
                                                    if (6 === r[0] && i.label < a[1]) {
                                                        i.label = a[1], a = r;
                                                        break
                                                    }
                                                    if (a && i.label < a[2]) {
                                                        i.label = a[2], i.ops.push(r);
                                                        break
                                                    }
                                                    a[2] && i.ops.pop(), i.trys.pop();
                                                    continue
                                            }
                                            r = t.call(e, i)
                                        } catch (e) {
                                            r = [6, e], o = 0
                                        } finally {
                                            n = a = 0
                                        }
                                        if (5 & r[0]) throw r[1];
                                        return {
                                            value: r[0] ? r[1] : void 0,
                                            done: !0
                                        }
                                    }([r, l])
                                }
                            }
                        }(this, function(t) {
                            switch (t.label) {
                                case 0:
                                    return [4, en.getCookiePolicy()];
                                case 1:
                                    return (e = t.sent()).ShouldDisplayCookieBannerV3 && e.NonEssentialCookieList && (r(e.NonEssentialCookieList), s(e.EssentialCookieList)), [2]
                            }
                        })
                    }, t = function() {
                        var t = this,
                            n = arguments;
                        return new Promise(function(o, a) {
                            var r = e.apply(t, n);

                            function i(e) {
                                ea(r, o, a, i, l, "next", e)
                            }

                            function l(e) {
                                ea(r, o, a, i, l, "throw", e)
                            }
                            i(void 0)
                        })
                    }, function() {
                        return t.apply(this, arguments)
                    })()
                }, []);
                var c = er(Y({
                        nonEssentialCookieList: a,
                        essentialCookieList: l,
                        translate: t
                    }), 2),
                    u = c[0],
                    p = c[1];
                return l.length > 0 ? (0, o.jsxs)("div", {
                    children: [(0, o.jsx)(L.Button, {
                        onClick: p.open,
                        className: "btn text-footer-nav cookie-consent-link",
                        variant: null,
                        size: null,
                        width: null,
                        children: t(Q.consentLinkText)
                    }), u]
                }) : null
            }

            function el(e) {
                var t = e.translate,
                    n = e.intl,
                    a = s,
                    r = !1,
                    i = document.getElementById("footer-container");
                if (null != i) {
                    var l = i.getAttribute("data-is-giftcards-footer-enabled");
                    null != l && (r = "true" === l.toLowerCase())
                }
                r && (a = c);
                var u = a.map(function(e) {
                    return (0, o.jsx)("li", {
                        className: "footer-link",
                        children: (0, o.jsxs)("a", {
                            href: y.urlService.getUrlWithLocale(e.path, n.getRobloxLocale()),
                            className: m()("text-footer-nav", e.cssClass),
                            target: "_blank",
                            rel: "noreferrer",
                            onClick: function(t) {
                                var n;
                                return n = e.name, void(0, v.sendEventWithTarget)("PageFooter", "click", {
                                    destination: "".concat(n),
                                    source: "".concat(t.currentTarget.ownerDocument.location.pathname)
                                }, v.targetTypes.WWW)
                            },
                            children: [t(e.labelTranslationKey), e.postfixIcon ? (0, o.jsx)("img", {
                                src: e.postfixIcon,
                                alt: "",
                                className: "footer-postfixIcon"
                            }) : ""]
                        })
                    }, e.name)
                });
                return (0, o.jsxs)("ul", {
                    className: "row footer-links",
                    children: [u, (0, o.jsx)("li", {
                        children: (0, o.jsx)(ei, {
                            translate: t
                        })
                    })]
                })
            }
            ei.propTypes = {
                translate: p().func.isRequired
            }, el.propTypes = {
                translate: p().func.isRequired,
                intl: p().shape({
                    getRobloxLocale: p().func.isRequired
                }).isRequired
            };
            var es = window.CoreRobloxUtilities;
            es.cryptoUtil.generateSecureAuthIntent;
            var ec = es.eventStreamService.eventTypes,
                eu = "Localization",
                ep = {
                    changeLanguage: {
                        name: "changeLanguage",
                        type: ec.formInteraction,
                        context: eu,
                        requiredParams: ["userId", "newSupportedLocaleCode", "previousSupportedLocaleCode"]
                    },
                    changeLanguageModal: {
                        name: "changeLanguageModal",
                        type: ec.formInteraction,
                        context: eu,
                        requiredParams: ["userId", "newSupportedLocaleCode"]
                    }
                };

            function ed(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var n = 0, o = Array(t); n < t; n++) o[n] = e[n];
                return o
            }

            function ef(e, t, n, o, a, r, i) {
                try {
                    var l = e[r](i),
                        s = l.value
                } catch (e) {
                    n(e);
                    return
                }
                l.done ? t(s) : Promise.resolve(s).then(o, a)
            }

            function eh(e) {
                return (eh = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                    return e.__proto__ || Object.getPrototypeOf(e)
                })(e)
            }

            function ey(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {},
                        o = Object.keys(n);
                    "function" == typeof Object.getOwnPropertySymbols && (o = o.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
                        return Object.getOwnPropertyDescriptor(n, e).enumerable
                    }))), o.forEach(function(t) {
                        var o;
                        o = n[t], t in e ? Object.defineProperty(e, t, {
                            value: o,
                            enumerable: !0,
                            configurable: !0,
                            writable: !0
                        }) : e[t] = o
                    })
                }
                return e
            }

            function eg(e, t) {
                return (eg = Object.setPrototypeOf || function(e, t) {
                    return e.__proto__ = t, e
                })(e, t)
            }

            function eb(e) {
                return function(e) {
                    if (Array.isArray(e)) return ed(e)
                }(e) || function(e) {
                    if ("undefined" != typeof Symbol && null != e[Symbol.iterator] || null != e["@@iterator"]) return Array.from(e)
                }(e) || function(e, t) {
                    if (e) {
                        if ("string" == typeof e) return ed(e, void 0);
                        var n = Object.prototype.toString.call(e).slice(8, -1);
                        if ("Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n) return Array.from(n);
                        if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return ed(e, t)
                    }
                }(e) || function() {
                    throw TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }

            function em() {
                try {
                    var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {}))
                } catch (e) {}
                return (em = function() {
                    return !!e
                })()
            }
            var ev = es.dataStores.localeDataStore,
                ex = function(e) {
                    return e.locale && e.locale.nativeName ? e.isEnabledForFullExperience ? e.locale.nativeName : "".concat(e.locale.nativeName, "*") : ""
                },
                ew = function(e) {
                    var t;

                    function n(e) {
                        var t, o, a, r, i, l;
                        return function(e, t) {
                            if (!(e instanceof t)) throw TypeError("Cannot call a class as a function")
                        }(this, n), o = n, a = [e], o = eh(o), (r = this, t = (i = em() ? Reflect.construct(o, a || [], eh(this).constructor) : o.apply(this, a)) && ("object" == ((l = i) && "undefined" != typeof Symbol && l.constructor === Symbol ? "symbol" : typeof l) || "function" == typeof i) ? i : function(e) {
                            if (void 0 === e) throw ReferenceError("this hasn't been initialised - super() hasn't been called");
                            return e
                        }(r)).state = {
                            supportedLocales: [],
                            userLocale: {},
                            showUnsupportedModal: !1,
                            isUserLocaleUnsupported: !1,
                            isLocaleUpdateInProgress: !1
                        }, t.handleNativeLanguageChange = t.handleNativeLanguageChange.bind(t), t.hideUnsupportedModal = t.hideUnsupportedModal.bind(t), t
                    }
                    return function(e, t) {
                            if ("function" != typeof t && null !== t) throw TypeError("Super expression must either be null or a function");
                            e.prototype = Object.create(t && t.prototype, {
                                constructor: {
                                    value: e,
                                    writable: !0,
                                    configurable: !0
                                }
                            }), t && eg(e, t)
                        }(n, e), t = [{
                            key: "componentDidMount",
                            value: function() {
                                this.loadSupportedLocales()
                            }
                        }, {
                            key: "handleLanguageChange",
                            value: function(e) {
                                var t = this,
                                    n = ey({}, e.locale),
                                    o = this.state.userLocale,
                                    a = this.props,
                                    r = a.isAuthenticatedUser,
                                    i = a.onLanguageChange,
                                    l = ey({}, o);
                                if (r) {
                                    this.setState({
                                        isLocaleUpdateInProgress: !0
                                    });
                                    var s, c = this;
                                    ev.setUserLocale(n.locale).then((s = function() {
                                        return function(e, t) {
                                            var n, o, a, r, i = {
                                                label: 0,
                                                sent: function() {
                                                    if (1 & a[0]) throw a[1];
                                                    return a[1]
                                                },
                                                trys: [],
                                                ops: []
                                            };
                                            return r = {
                                                next: l(0),
                                                throw: l(1),
                                                return: l(2)
                                            }, "function" == typeof Symbol && (r[Symbol.iterator] = function() {
                                                return this
                                            }), r;

                                            function l(r) {
                                                return function(l) {
                                                    return function(r) {
                                                        if (n) throw TypeError("Generator is already executing.");
                                                        for (; i;) try {
                                                            if (n = 1, o && (a = 2 & r[0] ? o.return : r[0] ? o.throw || ((a = o.return) && a.call(o), 0) : o.next) && !(a = a.call(o, r[1])).done) return a;
                                                            switch (o = 0, a && (r = [2 & r[0], a.value]), r[0]) {
                                                                case 0:
                                                                case 1:
                                                                    a = r;
                                                                    break;
                                                                case 4:
                                                                    return i.label++, {
                                                                        value: r[1],
                                                                        done: !1
                                                                    };
                                                                case 5:
                                                                    i.label++, o = r[1], r = [0];
                                                                    continue;
                                                                case 7:
                                                                    r = i.ops.pop(), i.trys.pop();
                                                                    continue;
                                                                default:
                                                                    if (!(a = (a = i.trys).length > 0 && a[a.length - 1]) && (6 === r[0] || 2 === r[0])) {
                                                                        i = 0;
                                                                        continue
                                                                    }
                                                                    if (3 === r[0] && (!a || r[1] > a[0] && r[1] < a[3])) {
                                                                        i.label = r[1];
                                                                        break
                                                                    }
                                                                    if (6 === r[0] && i.label < a[1]) {
                                                                        i.label = a[1], a = r;
                                                                        break
                                                                    }
                                                                    if (a && i.label < a[2]) {
                                                                        i.label = a[2], i.ops.push(r);
                                                                        break
                                                                    }
                                                                    a[2] && i.ops.pop(), i.trys.pop();
                                                                    continue
                                                            }
                                                            r = t.call(e, i)
                                                        } catch (e) {
                                                            r = [6, e], o = 0
                                                        } finally {
                                                            n = a = 0
                                                        }
                                                        if (5 & r[0]) throw r[1];
                                                        return {
                                                            value: r[0] ? r[1] : void 0,
                                                            done: !0
                                                        }
                                                    }([r, l])
                                                }
                                            }
                                        }(this, function(t) {
                                            return e.isEnabledForFullExperience ? i(n) : (c.showUnsupportedLocaleMessage(), c.showUnsupportedLocaleModal(n)), [2]
                                        })
                                    }, function() {
                                        var e = this,
                                            t = arguments;
                                        return new Promise(function(n, o) {
                                            var a = s.apply(e, t);

                                            function r(e) {
                                                ef(a, n, o, r, i, "next", e)
                                            }

                                            function i(e) {
                                                ef(a, n, o, r, i, "throw", e)
                                            }
                                            r(void 0)
                                        })
                                    }), function(e) {
                                        console.error(e)
                                    }).finally(function() {
                                        t.setState({
                                            isLocaleUpdateInProgress: !1
                                        })
                                    })
                                } else i(n);
                                this.setUserLocaleByLocaleCode(n.locale), es.eventStreamService.sendEvent(ep.changeLanguage, {
                                    userId: f.authenticatedUser.id,
                                    newSupportedLocaleCode: n.locale,
                                    previousSupportedLocaleCode: l.locale.locale
                                })
                            }
                        }, {
                            key: "handleNativeLanguageChange",
                            value: function(e) {
                                var t = this.state.supportedLocales,
                                    n = e.target.value,
                                    o = t.find(function(e) {
                                        return e.locale.locale === n
                                    });
                                this.handleLanguageChange(o)
                            }
                        }, {
                            key: "getDefaultSelector",
                            value: function() {
                                var e = this,
                                    t = this.state,
                                    n = t.supportedLocales,
                                    a = t.userLocale,
                                    r = t.isLocaleUpdateInProgress,
                                    i = n.map(function(t) {
                                        return (0, o.jsx)(L.Dropdown.Item, {
                                            onClick: function() {
                                                return e.handleLanguageChange(t)
                                            },
                                            children: ex(t)
                                        }, t.locale.id)
                                    }),
                                    l = ex(a);
                                return (0, o.jsx)(L.Dropdown, {
                                    currSelectionLabel: l,
                                    id: "language-switcher",
                                    icon: "icon-globe",
                                    disabled: r,
                                    children: i
                                })
                            }
                        }, {
                            key: "getNativeSelector",
                            value: function() {
                                var e = this.state,
                                    t = e.supportedLocales,
                                    n = e.userLocale,
                                    a = t.map(function(e) {
                                        return {
                                            value: e.locale.locale,
                                            key: e.locale.id,
                                            label: ex(e)
                                        }
                                    }),
                                    r = n.locale && n.locale.locale;
                                return a.length > 0 && (0, o.jsx)(L.NativeDropdown, {
                                    id: "language-switcher",
                                    selectionItems: a,
                                    onChange: this.handleNativeLanguageChange,
                                    selectedItemvalue: r
                                })
                            }
                        }, {
                            key: "setUserLocaleByLocaleCode",
                            value: function(e) {
                                var t = this.findSupportedLocaleByLocaleCode(e);
                                this.setState({
                                    userLocale: ey({}, t)
                                }), t.isEnabledForFullExperience || this.showUnsupportedLocaleMessage()
                            }
                        }, {
                            key: "sortSupportedLocalesByFullExperience",
                            value: function(e) {
                                if (Array.isArray(e)) {
                                    var t = e.filter(function(e) {
                                            return e.isEnabledForFullExperience
                                        }).sort(function(e, t) {
                                            return e.locale.nativeName > t.locale.nativeName ? 1 : -1
                                        }),
                                        n = e.filter(function(e) {
                                            return !e.isEnabledForFullExperience
                                        }).sort(function(e, t) {
                                            return e.locale.nativeName > t.locale.nativeName ? 1 : -1
                                        });
                                    return eb(t).concat(eb(n))
                                }
                                return e
                            }
                        }, {
                            key: "filterLocalesBySeoSupport",
                            value: function(e) {
                                return Array.isArray(e) ? e.filter(function(e) {
                                    return e.isEnabledForFullExperience && 2 === e.locale.language.languageCode.length
                                }).sort(function(e, t) {
                                    return e.locale.nativeName > t.locale.nativeName ? 1 : -1
                                }) : e
                            }
                        }, {
                            key: "findSupportedLocaleByLocaleCode",
                            value: function(e) {
                                return this.state.supportedLocales.find(function(t) {
                                    return t.locale.locale === e
                                })
                            }
                        }, {
                            key: "loadSupportedLocales",
                            value: function() {
                                var e = this;
                                ev.getLocalesWithCache(6e5).then(function(t) {
                                    e.props.hideSeoUnsupportedLocales ? e.setState({
                                        supportedLocales: e.filterLocalesBySeoSupport(t.data)
                                    }) : e.setState({
                                        supportedLocales: e.sortSupportedLocalesByFullExperience(t.data)
                                    }), e.loadUserLocale()
                                }, function(e) {
                                    console.error(e)
                                })
                            }
                        }, {
                            key: "loadUserLocale",
                            value: function() {
                                var e = this,
                                    t = y.urlService.getQueryParam("locale");
                                if (t) this.setUserLocaleByLocaleCode(t);
                                else {
                                    var n = this.props.isAuthenticatedUser;
                                    ev.getUserLocale().then(function(t) {
                                        var o = n ? t.data.ugc.locale : t.data.signupAndLogin.locale;
                                        e.setUserLocaleByLocaleCode(o)
                                    }, function(e) {
                                        console.error(e)
                                    })
                                }
                            }
                        }, {
                            key: "showUnsupportedLocaleModal",
                            value: function(e) {
                                this.props.showWarningModalForUnsupportedLocale && (this.setState({
                                    showUnsupportedModal: !0
                                }), es.eventStreamService.sendEvent(ep.changeLanguageModal, {
                                    userId: f.authenticatedUser.id,
                                    newSupportedLocaleCode: e.locale
                                }))
                            }
                        }, {
                            key: "hideUnsupportedModal",
                            value: function() {
                                (0, this.props.onLanguageChange)(this.state.userLocale)
                            }
                        }, {
                            key: "showUnsupportedLocaleMessage",
                            value: function() {
                                this.props.showWarningMessageForUnsupportedLocale && this.setState({
                                    isUserLocaleUnsupported: !0
                                })
                            }
                        }, {
                            key: "render",
                            value: function() {
                                var e = this.props,
                                    t = e.translate,
                                    n = e.isNative,
                                    a = this.state,
                                    r = a.showUnsupportedModal,
                                    i = a.isUserLocaleUnsupported,
                                    l = a.supportedLocales,
                                    s = a.userLocale;
                                return (0, o.jsxs)(w().Fragment, {
                                    children: [l.length > 0 && s.locale ? (0, o.jsx)("div", {
                                        className: "language-selector-wrapper",
                                        children: n ? this.getNativeSelector() : this.getDefaultSelector()
                                    }) : (0, o.jsx)(L.Loading, {}), (0, o.jsx)(L.SimpleModal, {
                                        title: t("Heading.UnsupportedLanguage"),
                                        body: t("Description.UnsupportedLanguage"),
                                        show: r,
                                        neutralButtonText: t("Action.Ok"),
                                        onNeutral: this.hideUnsupportedModal
                                    }), i && (0, o.jsx)("div", {
                                        className: "row",
                                        children: (0, o.jsx)("span", {
                                            className: "text text-error",
                                            children: t("Description.UnsupportedLanguage")
                                        })
                                    })]
                                })
                            }
                        }],
                        function(e, t) {
                            for (var n = 0; n < t.length; n++) {
                                var o = t[n];
                                o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, o.key, o)
                            }
                        }(n.prototype, t), n
                }(w().Component);

            function eL(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {},
                        o = Object.keys(n);
                    "function" == typeof Object.getOwnPropertySymbols && (o = o.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
                        return Object.getOwnPropertyDescriptor(n, e).enumerable
                    }))), o.forEach(function(t) {
                        var o;
                        o = n[t], t in e ? Object.defineProperty(e, t, {
                            value: o,
                            enumerable: !0,
                            configurable: !0,
                            writable: !0
                        }) : e[t] = o
                    })
                }
                return e
            }

            function eS(e) {
                var t = y.pageName.PageNameProvider && y.pageName.PageNameProvider.isLandingPage(),
                    n = null === f.authenticatedUser || void 0 === f.authenticatedUser ? void 0 : f.authenticatedUser.isAuthenticated,
                    a = h.DeviceMeta && new h.DeviceMeta,
                    r = a && (a.isPhone || a.isTablet),
                    i = n || t,
                    l = e.translate;
                return (0, o.jsxs)("div", {
                    className: "footer",
                    children: [(0, o.jsx)(el, eL({}, e)), (0, o.jsxs)("div", {
                        className: "row copyright-container",
                        children: [(0, o.jsx)("div", {
                            className: "col-sm-6 col-md-3",
                            children: i && (0, o.jsx)(ew, {
                                translate: l,
                                onLanguageChange: function(e) {
                                    var n = e.locale,
                                        o = e.language;
                                    if (t && n) {
                                        var a = Object.fromEntries(new URLSearchParams(window.location.search)),
                                            r = {
                                                pathname: o.languageCode,
                                                query: a
                                            };
                                        window.location.href = y.urlService.formatUrl(r)
                                    } else window.location.reload()
                                },
                                isAuthenticatedUser: n,
                                showWarningMessageForUnsupportedLocale: !1,
                                isNative: r,
                                hideSeoUnsupportedLocales: t
                            })
                        }), (0, o.jsx)("div", {
                            className: i ? "col-sm-6 col-md-9" : "col-sm-12",
                            children: (0, o.jsx)(g, eL({}, e))
                        })]
                    })]
                })
            }

            function ej(e) {
                var t = e.translate,
                    n = e.intl;
                return (0, o.jsx)(eS, {
                    translate: t,
                    intl: n
                })
            }
            ew.defaultProps = {
                onLanguageChange: function() {},
                isAuthenticatedUser: !1,
                isNative: !1,
                showWarningModalForUnsupportedLocale: !0,
                showWarningMessageForUnsupportedLocale: !0,
                hideSeoUnsupportedLocales: !1
            }, ew.propTypes = {
                isAuthenticatedUser: p().bool,
                onLanguageChange: p().func,
                isNative: p().bool,
                showWarningModalForUnsupportedLocale: p().bool,
                showWarningMessageForUnsupportedLocale: p().bool,
                translate: p().func.isRequired,
                hideSeoUnsupportedLocales: p().bool
            }, eS.propTypes = {
                translate: p().func.isRequired
            }, ej.propTypes = {
                translate: p().func.isRequired,
                intl: p().shape({
                    getRobloxLocale: p().func.isRequired
                }).isRequired
            };
            var ek = (0, i.withTranslations)(ej, d.I),
                eC = function(e, t) {
                    h.DeviceMeta && es.hybridService && new h.DeviceMeta().isInApp && es.hybridService.localization && es.hybridService.localization(e, t)
                };

            function eN(e) {
                var t = e.translate,
                    n = null === f.authenticatedUser || void 0 === f.authenticatedUser ? void 0 : f.authenticatedUser.isAuthenticated;
                return (0, o.jsx)(ew, {
                    onLanguageChange: function(e) {
                        var t = e.locale;
                        t && eC(t, function() {
                            console.warn("Language Change Hybrid Event: ".concat(t))
                        }), window.location.reload()
                    },
                    translate: t,
                    isAuthenticatedUser: n,
                    isNative: !0
                })
            }
            window.Roblox.AccountSettingsLanguageSelector = eN, eN.propTypes = {
                translate: p().func.isRequired
            };
            var eU = (0, i.withTranslations)(eN, d.I);
            n(587);
            var eA = "account-settings-language-selector";
            r()(function() {
                var e = document.getElementById("footer-container");
                e && (0, i.renderWithErrorBoundary)((0, o.jsx)(ek, {}), e);
                var t = document.getElementById(eA),
                    n = 10,
                    a = function() {
                        (t = document.getElementById(eA)) || !(n > 0) ? t && (0, i.renderWithErrorBoundary)((0, o.jsx)(eU, {}), t): (n -= 1, setTimeout(a, 200))
                    };
                a(), window.location.pathname.toLowerCase().indexOf("/my/account") > -1 && (window.onhashchange = function() {
                    if ("#!/info" === window.location.hash) {
                        var e = document.getElementById(eA);
                        e && (0, i.renderWithErrorBoundary)((0, o.jsx)(eU, {}), e)
                    }
                })
            })
        }()
}(), window.Roblox && window.Roblox.BundleDetector && window.Roblox.BundleDetector.bundleDetected("Footer");
//# debugId=80b0afb2-4456-4144-aaed-e5b899e0bf61
//# sourceMappingURL=https://sourcemaps.rbxcdn.com/footer-39b84c19f0ca6d7e.js.map