! function() {
    "use strict";
    var e = {},
        r = {};

    function t(n) {
        var o = r[n];
        if (void 0 !== o) return o.exports;
        var i = r[n] = {
            exports: {}
        };
        return e[n](i, i.exports, t), i.exports
    }
    t.d = function(e, r) {
        for (var n in r) t.o(r, n) && !t.o(e, n) && Object.defineProperty(e, n, {
            enumerable: !0,
            get: r[n]
        })
    }, t.o = function(e, r) {
        return Object.prototype.hasOwnProperty.call(e, r)
    }, t.r = function(e) {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
            value: "Module"
        }), Object.defineProperty(e, "__esModule", {
            value: !0
        })
    }, t.rv = function() {
        return "1.2.8"
    }, t.ruid = "bundler=rspack@1.2.8";
    var n = {};

    function o(e, r) {
        (null == r || r > e.length) && (r = e.length);
        for (var t = 0, n = Array(r); t < r; t++) n[t] = e[t];
        return n
    }
    t.r(n), t.d(n, {
        getTheme: function() {
            return h
        },
        rawThemeOverride: function() {
            return u
        },
        setTheme: function() {
            return y
        },
        themeOverride: function() {
            return a
        }
    });
    var i = function(e) {
            var r;
            return null === (r = document.cookie.split("; ").find(function(r) {
                return r.startsWith("".concat(e, "="))
            })) || void 0 === r ? void 0 : r.split("=")[1]
        },
        a = function() {
            var e;
            return "True" === i("RBXHideThemeSetting") ? null !== (e = i("RBXThemeOverride")) && void 0 !== e ? e : "True" : void 0
        },
        u = function() {
            return i("RBXThemeOverride")
        },
        c = document.body.classList,
        s = window.matchMedia("(prefers-color-scheme: dark)"),
        l = function() {
            c.add("light-theme"), c.remove("dark-theme")
        },
        d = function() {
            c.add("dark-theme"), c.remove("light-theme")
        },
        f = function(e) {
            e ? d() : l()
        },
        m = function(e) {
            f(e.matches)
        },
        v = "system",
        h = function() {
            return v
        },
        y = function(e) {
            switch (v = e, e) {
                case "system":
                    c.add("system-theme"), f(s.matches), s.addEventListener("change", m);
                    break;
                case "light":
                    s.removeEventListener("change", m), l(), c.remove("system-theme");
                    break;
                case "dark":
                    s.removeEventListener("change", m), d(), c.remove("system-theme")
            }
        };
    (function(e, r) {
        var t = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : window;
        if ("string" == typeof e) t[e] = r;
        else {
            var n = function(e) {
                    if (Array.isArray(e)) return o(e)
                }(e) || function(e) {
                    if ("undefined" != typeof Symbol && null != e[Symbol.iterator] || null != e["@@iterator"]) return Array.from(e)
                }(e) || function(e, r) {
                    if (e) {
                        if ("string" == typeof e) return o(e, void 0);
                        var t = Object.prototype.toString.call(e).slice(8, -1);
                        if ("Object" === t && e.constructor && (t = e.constructor.name), "Map" === t || "Set" === t) return Array.from(t);
                        if ("Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)) return o(e, r)
                    }
                }(e) || function() {
                    throw TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }(),
                i = n.pop(),
                a = t,
                u = !0,
                c = !1,
                s = void 0;
            try {
                for (var l, d = n[Symbol.iterator](); !(u = (l = d.next()).done); u = !0) {
                    var f, m, v = l.value;
                    null !== (m = (f = a)[v]) && void 0 !== m || (f[v] = {}), a = a[v]
                }
            } catch (e) {
                c = !0, s = e
            } finally {
                try {
                    u || null == d.return || d.return()
                } finally {
                    if (c) throw s
                }
            }
            a[i] = r
        }
    })(["Roblox", "core-scripts", "util", "theme"], n),
    function() {
        var e = u();
        switch (e) {
            case "system":
            case "light":
            case "dark":
                y(e);
                break;
            case "none":
            case void 0:
                break;
            default:
                console.warn("Unknown theme override: ".concat(e))
        }
    }()
}();
//# debugId=f56bd4ea-64f3-4978-a3b1-8b325f6116cf
//# sourceMappingURL=https://sourcemaps.rbxcdn.com/theme-475718623024ba93.js.map
window.Roblox && window.Roblox.BundleDetector && window.Roblox.BundleDetector.bundleDetected("Theme");