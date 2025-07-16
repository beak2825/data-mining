! function() {
    var n = {
            7989: function(e, a, t) {
                function n() {
                    var e;
                    try {
                        e = a.storage.debug
                    } catch (e) {}
                    return !e && "undefined" != typeof process && "env" in process && (e = process.env.DEBUG), e
                }(a = e.exports = t(2426)).log = function() {
                    return "object" == typeof console && console.log && Function.prototype.apply.call(console.log, console, arguments)
                }, a.formatArgs = function(e) {
                    var t = this.useColors;
                    if (e[0] = (t ? "%c" : "") + this.namespace + (t ? " %c" : " ") + e[0] + (t ? "%c " : " ") + "+" + a.humanize(this.diff), !t) return;
                    t = "color: " + this.color;
                    e.splice(1, 0, t, "color: inherit");
                    var n = 0,
                        r = 0;
                    e[0].replace(/%[a-zA-Z%]/g, function(e) {
                        "%%" !== e && (n++, "%c" === e && (r = n))
                    }), e.splice(r, 0, t)
                }, a.save = function(e) {
                    try {
                        null == e ? a.storage.removeItem("debug") : a.storage.debug = e
                    } catch (e) {}
                }, a.load = n, a.useColors = function() {
                    if ("undefined" != typeof window && window.process && "renderer" === window.process.type) return !0;
                    return "undefined" != typeof document && document.documentElement && document.documentElement.style && document.documentElement.style.WebkitAppearance || "undefined" != typeof window && window.console && (window.console.firebug || window.console.exception && window.console.table) || "undefined" != typeof navigator && navigator.userAgent && navigator.userAgent.toLowerCase().match(/firefox\/(\d+)/) && 31 <= parseInt(RegExp.$1, 10) || "undefined" != typeof navigator && navigator.userAgent && navigator.userAgent.toLowerCase().match(/applewebkit\/(\d+)/)
                }, a.storage = "undefined" != typeof chrome && void 0 !== chrome.storage ? chrome.storage.local : function() {
                    try {
                        return window.localStorage
                    } catch (e) {}
                }(), a.colors = ["lightseagreen", "forestgreen", "goldenrod", "dodgerblue", "darkorchid", "crimson"], a.formatters.j = function(e) {
                    try {
                        return JSON.stringify(e)
                    } catch (e) {
                        return "[UnexpectedJSONParseError]: " + e.message
                    }
                }, a.enable(n())
            },
            2426: function(e, l, t) {
                var u;

                function n(e) {
                    function o() {
                        if (o.enabled) {
                            var r = o,
                                e = +new Date,
                                t = e - (u || e);
                            r.diff = t, r.prev = u, r.curr = e, u = e;
                            for (var a = new Array(arguments.length), n = 0; n < a.length; n++) a[n] = arguments[n];
                            a[0] = l.coerce(a[0]), "string" != typeof a[0] && a.unshift("%O");
                            var i = 0;
                            a[0] = a[0].replace(/%([a-zA-Z%])/g, function(e, t) {
                                if ("%%" === e) return e;
                                i++;
                                var n = l.formatters[t];
                                return "function" == typeof n && (t = a[i], e = n.call(r, t), a.splice(i, 1), i--), e
                            }), l.formatArgs.call(r, a), (o.log || l.log || console.log.bind(console)).apply(r, a)
                        }
                    }
                    return o.namespace = e, o.enabled = l.enabled(e), o.useColors = l.useColors(), o.color = function(e) {
                        var t, n = 0;
                        for (t in e) n = (n << 5) - n + e.charCodeAt(t), n |= 0;
                        return l.colors[Math.abs(n) % l.colors.length]
                    }(e), "function" == typeof l.init && l.init(o), o
                }(l = e.exports = n.debug = n.default = n).coerce = function(e) {
                    return e instanceof Error ? e.stack || e.message : e
                }, l.disable = function() {
                    l.enable("")
                }, l.enable = function(e) {
                    l.save(e), l.names = [], l.skips = [];
                    for (var t = ("string" == typeof e ? e : "").split(/[\s,]+/), n = t.length, r = 0; r < n; r++) t[r] && ("-" === (e = t[r].replace(/\*/g, ".*?"))[0] ? l.skips.push(new RegExp("^" + e.substr(1) + "$")) : l.names.push(new RegExp("^" + e + "$")))
                }, l.enabled = function(e) {
                    var t, n;
                    for (t = 0, n = l.skips.length; t < n; t++)
                        if (l.skips[t].test(e)) return !1;
                    for (t = 0, n = l.names.length; t < n; t++)
                        if (l.names[t].test(e)) return !0;
                    return !1
                }, l.humanize = t(6301), l.names = [], l.skips = [], l.formatters = {}
            },
            4351: function(e) {
                function i(e, t) {
                    e.onload = function() {
                        this.onerror = this.onload = null, t(null, e)
                    }, e.onerror = function() {
                        this.onerror = this.onload = null, t(new Error("Failed to load " + this.src), e)
                    }
                }

                function o(e, t) {
                    e.onreadystatechange = function() {
                        "complete" != this.readyState && "loaded" != this.readyState || (this.onreadystatechange = null, t(null, e))
                    }
                }
                e.exports = function(e, t, n) {
                    var r = document.head || document.getElementsByTagName("head")[0],
                        a = document.createElement("script");
                    "function" == typeof t && (n = t, t = {}), t = t || {}, n = n || function() {}, a.type = t.type || "text/javascript", a.charset = t.charset || "utf8", a.async = !("async" in t) || !!t.async, a.src = e, t.attrs && function(e, t) {
                        for (var n in t) e.setAttribute(n, t[n])
                    }(a, t.attrs), t.text && (a.text = "" + t.text), ("onload" in a ? i : o)(a, n), a.onload || i(a, n), r.appendChild(a)
                }
            },
            6301: function(e) {
                var r = 36e5,
                    a = 864e5;

                function i(e, t, n) {
                    if (!(e < t)) return e < 1.5 * t ? Math.floor(e / t) + " " + n : Math.ceil(e / t) + " " + n + "s"
                }
                e.exports = function(e, t) {
                    t = t || {};
                    var n = typeof e;
                    if ("string" == n && 0 < e.length) return function(e) {
                        if (100 < (e = String(e)).length) return;
                        e = /^((?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|years?|yrs?|y)?$/i.exec(e);
                        if (!e) return;
                        var t = parseFloat(e[1]);
                        switch ((e[2] || "ms").toLowerCase()) {
                            case "years":
                            case "year":
                            case "yrs":
                            case "yr":
                            case "y":
                                return 315576e5 * t;
                            case "days":
                            case "day":
                            case "d":
                                return t * a;
                            case "hours":
                            case "hour":
                            case "hrs":
                            case "hr":
                            case "h":
                                return t * r;
                            case "minutes":
                            case "minute":
                            case "mins":
                            case "min":
                            case "m":
                                return 6e4 * t;
                            case "seconds":
                            case "second":
                            case "secs":
                            case "sec":
                            case "s":
                                return 1e3 * t;
                            case "milliseconds":
                            case "millisecond":
                            case "msecs":
                            case "msec":
                            case "ms":
                                return t;
                            default:
                                return
                        }
                    }(e);
                    if ("number" == n && !1 === isNaN(e)) return t.long ? i(t = e, a, "day") || i(t, r, "hour") || i(t, 6e4, "minute") || i(t, 1e3, "second") || t + " ms" : function(e) {
                        if (a <= e) return Math.round(e / a) + "d";
                        if (r <= e) return Math.round(e / r) + "h";
                        if (6e4 <= e) return Math.round(e / 6e4) + "m";
                        if (1e3 <= e) return Math.round(e / 1e3) + "s";
                        return e + "ms"
                    }(e);
                    throw new Error("val is not a non-empty string or a valid number. val=" + JSON.stringify(e))
                }
            },
            350: function(e) {
                "use strict";
                var
                    /**
                     * @link https://github.com/gajus/sister for the canonical source repository
                     * @license https://github.com/gajus/sister/blob/master/LICENSE BSD 3-Clause
                     */
                    t = function() {
                        var e = {},
                            a = {};
                        return e.on = function(e, t) {
                            t = {
                                name: e,
                                handler: t
                            };
                            return a[e] = a[e] || [], a[e].unshift(t), t
                        }, e.off = function(e) {
                            var t = a[e.name].indexOf(e); - 1 !== t && a[e.name].splice(t, 1)
                        }, e.trigger = function(e, t) {
                            var n, r = a[e];
                            if (r)
                                for (n = r.length; n--;) r[n].handler(t)
                        }, e
                    };
                e.exports = t
            },
            2664: function(e, t, n) {
                "use strict";
                Object.defineProperty(t, "__esModule", {
                    value: !0
                });
                var r, a = n(8592),
                    n = (r = a) && r.__esModule ? r : {
                        default: r
                    };
                t.default = {
                    pauseVideo: {
                        acceptableStates: [n.default.ENDED, n.default.PAUSED],
                        stateChangeRequired: !1
                    },
                    playVideo: {
                        acceptableStates: [n.default.ENDED, n.default.PLAYING],
                        stateChangeRequired: !1
                    },
                    seekTo: {
                        acceptableStates: [n.default.ENDED, n.default.PLAYING, n.default.PAUSED],
                        stateChangeRequired: !0,
                        timeout: 3e3
                    }
                }, e.exports = t.default
            },
            3449: function(e, t, n) {
                "use strict";
                Object.defineProperty(t, "__esModule", {
                    value: !0
                });
                var r = a(n(7989)),
                    u = a(n(7677)),
                    l = a(n(7013)),
                    s = a(n(2664));

                function a(e) {
                    return e && e.__esModule ? e : {
                        default: e
                    }
                }
                var c = (0, r.default)("youtube-player"),
                    r = {};
                r.proxyEvents = function(r) {
                    var e = {},
                        t = !0,
                        n = !1,
                        a = void 0;
                    try {
                        for (var i, o = l.default[Symbol.iterator](); !(t = (i = o.next()).done); t = !0) ! function(t) {
                            var n = "on" + t.slice(0, 1).toUpperCase() + t.slice(1);
                            e[n] = function(e) {
                                c('event "%s"', n, e), r.trigger(t, e)
                            }
                        }(i.value)
                    } catch (e) {
                        n = !0, a = e
                    } finally {
                        try {
                            !t && o.return && o.return()
                        } finally {
                            if (n) throw a
                        }
                    }
                    return e
                }, r.promisifyPlayer = function(a) {
                    var e = 1 < arguments.length && void 0 !== arguments[1] && arguments[1],
                        t = {},
                        n = !0,
                        r = !1,
                        i = void 0;
                    try {
                        for (var o, l = u.default[Symbol.iterator](); !(n = (o = l.next()).done); n = !0) ! function(r) {
                            e && s.default[r] ? t[r] = function() {
                                for (var e = arguments.length, n = Array(e), t = 0; t < e; t++) n[t] = arguments[t];
                                return a.then(function(a) {
                                    var i = s.default[r],
                                        e = a.getPlayerState(),
                                        t = a[r].apply(a, n);
                                    return i.stateChangeRequired || Array.isArray(i.acceptableStates) && -1 === i.acceptableStates.indexOf(e) ? new Promise(function(n) {
                                        function r() {
                                            var e = a.getPlayerState(),
                                                t = void 0;
                                            "number" == typeof i.timeout && (t = setTimeout(function() {
                                                a.removeEventListener("onStateChange", r), n()
                                            }, i.timeout)), Array.isArray(i.acceptableStates) && -1 !== i.acceptableStates.indexOf(e) && (a.removeEventListener("onStateChange", r), clearTimeout(t), n())
                                        }
                                        a.addEventListener("onStateChange", r)
                                    }).then(function() {
                                        return t
                                    }) : t
                                })
                            } : t[r] = function() {
                                for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n];
                                return a.then(function(e) {
                                    return e[r].apply(e, t)
                                })
                            }
                        }(o.value)
                    } catch (e) {
                        r = !0, i = e
                    } finally {
                        try {
                            !n && l.return && l.return()
                        } finally {
                            if (r) throw i
                        }
                    }
                    return t
                }, t.default = r, e.exports = t.default
            },
            8592: function(e, t) {
                "use strict";
                Object.defineProperty(t, "__esModule", {
                    value: !0
                }), t.default = {
                    BUFFERING: 3,
                    ENDED: 0,
                    PAUSED: 2,
                    PLAYING: 1,
                    UNSTARTED: -1,
                    VIDEO_CUED: 5
                }, e.exports = t.default
            },
            7013: function(e, t) {
                "use strict";
                Object.defineProperty(t, "__esModule", {
                    value: !0
                }), t.default = ["ready", "stateChange", "playbackQualityChange", "playbackRateChange", "error", "apiChange", "volumeChange"], e.exports = t.default
            },
            7677: function(e, t) {
                "use strict";
                Object.defineProperty(t, "__esModule", {
                    value: !0
                }), t.default = ["cueVideoById", "loadVideoById", "cueVideoByUrl", "loadVideoByUrl", "playVideo", "pauseVideo", "stopVideo", "getVideoLoadedFraction", "cuePlaylist", "loadPlaylist", "nextVideo", "previousVideo", "playVideoAt", "setShuffle", "setLoop", "getPlaylist", "getPlaylistIndex", "setOption", "mute", "unMute", "isMuted", "setVolume", "getVolume", "seekTo", "getPlayerState", "getPlaybackRate", "setPlaybackRate", "getAvailablePlaybackRates", "getPlaybackQuality", "setPlaybackQuality", "getAvailableQualityLevels", "getCurrentTime", "getDuration", "removeEventListener", "getVideoUrl", "getVideoEmbedCode", "getOptions", "getOption", "addEventListener", "destroy", "setSize", "getIframe"], e.exports = t.default
            },
            6585: function(e, t, n) {
                "use strict";
                Object.defineProperty(t, "__esModule", {
                    value: !0
                });
                var o = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                        return typeof e
                    } : function(e) {
                        return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                    },
                    l = r(n(350)),
                    u = r(n(7946)),
                    s = r(n(3449));

                function r(e) {
                    return e && e.__esModule ? e : {
                        default: e
                    }
                }
                var c = void 0;
                t.default = function(r) {
                    var a = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : {},
                        e = 2 < arguments.length && void 0 !== arguments[2] && arguments[2],
                        i = (0, l.default)();
                    if (c = c || (0, u.default)(i), a.events) throw new Error("Event handlers cannot be overwritten.");
                    if ("string" == typeof r && !document.getElementById(r)) throw new Error('Element "' + r + '" does not exist.');
                    a.events = s.default.proxyEvents(i);
                    var t = new Promise(function(n) {
                            "object" === (void 0 === r ? "undefined" : o(r)) && r.playVideo instanceof Function ? n(r) : c.then(function(e) {
                                var t = new e.Player(r, a);
                                return i.on("ready", function() {
                                    n(t)
                                }), null
                            })
                        }),
                        e = s.default.promisifyPlayer(t, e);
                    return e.on = i.on, e.off = i.off, e
                }, e.exports = t.default
            },
            7946: function(e, t, n) {
                "use strict";
                Object.defineProperty(t, "__esModule", {
                    value: !0
                });
                var r, a = n(4351),
                    i = (r = a) && r.__esModule ? r : {
                        default: r
                    };
                t.default = function(r) {
                    return new Promise(function(e) {
                        var t, n;
                        window.YT && window.YT.Player && window.YT.Player instanceof Function ? e(window.YT) : (t = "http:" === window.location.protocol ? "http:" : "https:", (0, i.default)(t + "//www.youtube.com/iframe_api", function(e) {
                            e && r.trigger("error", e)
                        }), n = window.onYouTubeIframeAPIReady, window.onYouTubeIframeAPIReady = function() {
                            n && n(), e(window.YT)
                        })
                    })
                }, e.exports = t.default
            },
            5250: function(N, L, R) {
                var A;
                /**
                 * @license
                 * Lodash <https://lodash.com/>
                 * Copyright OpenJS Foundation and other contributors <https://openjsf.org/>
                 * Released under MIT license <https://lodash.com/license>
                 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
                 * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
                 */
                N = R.nmd(N),
                    function() {
                        var Bi, Vi = "Expected a function",
                            qi = "__lodash_hash_undefined__",
                            Wi = "__lodash_placeholder__",
                            Hi = 128,
                            zi = 9007199254740991,
                            $i = NaN,
                            Ji = 4294967295,
                            Ki = [
                                ["ary", Hi],
                                ["bind", 1],
                                ["bindKey", 2],
                                ["curry", 8],
                                ["curryRight", 16],
                                ["flip", 512],
                                ["partial", 32],
                                ["partialRight", 64],
                                ["rearg", 256]
                            ],
                            Yi = "[object Arguments]",
                            Qi = "[object Array]",
                            Zi = "[object Boolean]",
                            Xi = "[object Date]",
                            eo = "[object Error]",
                            to = "[object Function]",
                            no = "[object GeneratorFunction]",
                            ro = "[object Map]",
                            ao = "[object Number]",
                            io = "[object Object]",
                            oo = "[object Promise]",
                            lo = "[object RegExp]",
                            uo = "[object Set]",
                            so = "[object String]",
                            co = "[object Symbol]",
                            fo = "[object WeakMap]",
                            mo = "[object ArrayBuffer]",
                            vo = "[object DataView]",
                            po = "[object Float32Array]",
                            ho = "[object Float64Array]",
                            go = "[object Int8Array]",
                            yo = "[object Int16Array]",
                            bo = "[object Int32Array]",
                            Eo = "[object Uint8Array]",
                            So = "[object Uint8ClampedArray]",
                            wo = "[object Uint16Array]",
                            Io = "[object Uint32Array]",
                            xo = /\b__p \+= '';/g,
                            To = /\b(__p \+=) '' \+/g,
                            Po = /(__e\(.*?\)|\b__t\)) \+\n'';/g,
                            _o = /&(?:amp|lt|gt|quot|#39);/g,
                            Co = /[&<>"']/g,
                            ko = RegExp(_o.source),
                            No = RegExp(Co.source),
                            Lo = /<%-([\s\S]+?)%>/g,
                            Ro = /<%([\s\S]+?)%>/g,
                            Ao = /<%=([\s\S]+?)%>/g,
                            Do = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
                            Oo = /^\w*$/,
                            Fo = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,
                            Mo = /[\\^$.*+?()[\]{}|]/g,
                            Uo = RegExp(Mo.source),
                            Go = /^\s+/,
                            n = /\s/,
                            jo = /\{(?:\n\/\* \[wrapped with .+\] \*\/)?\n?/,
                            Bo = /\{\n\/\* \[wrapped with (.+)\] \*/,
                            Vo = /,? & /,
                            qo = /[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g,
                            Wo = /[()=,{}\[\]\/\s]/,
                            Ho = /\\(\\)?/g,
                            zo = /\$\{([^\\}]*(?:\\.[^\\}]*)*)\}/g,
                            $o = /\w*$/,
                            Jo = /^[-+]0x[0-9a-f]+$/i,
                            Ko = /^0b[01]+$/i,
                            Yo = /^\[object .+?Constructor\]$/,
                            Qo = /^0o[0-7]+$/i,
                            Zo = /^(?:0|[1-9]\d*)$/,
                            Xo = /[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g,
                            el = /($^)/,
                            tl = /['\n\r\u2028\u2029\\]/g,
                            e = "\\ud800-\\udfff",
                            t = "\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff",
                            r = "\\u2700-\\u27bf",
                            a = "a-z\\xdf-\\xf6\\xf8-\\xff",
                            i = "A-Z\\xc0-\\xd6\\xd8-\\xde",
                            o = "\\ufe0e\\ufe0f",
                            l = "\\xac\\xb1\\xd7\\xf7\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf\\u2000-\\u206f \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000",
                            u = "['’]",
                            s = "[" + e + "]",
                            c = "[" + l + "]",
                            f = "[" + t + "]",
                            d = "\\d+",
                            m = "[" + r + "]",
                            v = "[" + a + "]",
                            p = "[^" + e + l + d + r + a + i + "]",
                            h = "\\ud83c[\\udffb-\\udfff]",
                            g = "[^" + e + "]",
                            y = "(?:\\ud83c[\\udde6-\\uddff]){2}",
                            b = "[\\ud800-\\udbff][\\udc00-\\udfff]",
                            E = "[" + i + "]",
                            S = "\\u200d",
                            w = "(?:" + v + "|" + p + ")",
                            l = "(?:" + E + "|" + p + ")",
                            r = "(?:['’](?:d|ll|m|re|s|t|ve))?",
                            a = "(?:['’](?:D|LL|M|RE|S|T|VE))?",
                            i = "(?:" + f + "|" + h + ")" + "?",
                            p = "[" + o + "]?",
                            i = p + i + ("(?:" + S + "(?:" + [g, y, b].join("|") + ")" + p + i + ")*"),
                            m = "(?:" + [m, y, b].join("|") + ")" + i,
                            s = "(?:" + [g + f + "?", f, y, b, s].join("|") + ")",
                            nl = RegExp(u, "g"),
                            rl = RegExp(f, "g"),
                            I = RegExp(h + "(?=" + h + ")|" + s + i, "g"),
                            al = RegExp([E + "?" + v + "+" + r + "(?=" + [c, E, "$"].join("|") + ")", l + "+" + a + "(?=" + [c, E + w, "$"].join("|") + ")", E + "?" + w + "+" + r, E + "+" + a, "\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])", "\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])", d, m].join("|"), "g"),
                            x = RegExp("[" + S + e + t + o + "]"),
                            il = /[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/,
                            ol = ["Array", "Buffer", "DataView", "Date", "Error", "Float32Array", "Float64Array", "Function", "Int8Array", "Int16Array", "Int32Array", "Map", "Math", "Object", "Promise", "RegExp", "Set", "String", "Symbol", "TypeError", "Uint8Array", "Uint8ClampedArray", "Uint16Array", "Uint32Array", "WeakMap", "_", "clearTimeout", "isFinite", "parseInt", "setTimeout"],
                            ll = -1,
                            ul = {};
                        ul[po] = ul[ho] = ul[go] = ul[yo] = ul[bo] = ul[Eo] = ul[So] = ul[wo] = ul[Io] = !0, ul[Yi] = ul[Qi] = ul[mo] = ul[Zi] = ul[vo] = ul[Xi] = ul[eo] = ul[to] = ul[ro] = ul[ao] = ul[io] = ul[lo] = ul[uo] = ul[so] = ul[fo] = !1;
                        var sl = {};
                        sl[Yi] = sl[Qi] = sl[mo] = sl[vo] = sl[Zi] = sl[Xi] = sl[po] = sl[ho] = sl[go] = sl[yo] = sl[bo] = sl[ro] = sl[ao] = sl[io] = sl[lo] = sl[uo] = sl[so] = sl[co] = sl[Eo] = sl[So] = sl[wo] = sl[Io] = !0, sl[eo] = sl[to] = sl[fo] = !1;
                        var T = {
                                "\\": "\\",
                                "'": "'",
                                "\n": "n",
                                "\r": "r",
                                "\u2028": "u2028",
                                "\u2029": "u2029"
                            },
                            cl = parseFloat,
                            fl = parseInt,
                            t = "object" == typeof R.g && R.g && R.g.Object === Object && R.g,
                            o = "object" == typeof self && self && self.Object === Object && self,
                            dl = t || o || Function("return this")(),
                            o = L && !L.nodeType && L,
                            P = o && N && !N.nodeType && N,
                            ml = P && P.exports === o,
                            _ = ml && t.process,
                            t = function() {
                                try {
                                    var e = P && P.require && P.require("util").types;
                                    return e ? e : _ && _.binding && _.binding("util")
                                } catch (e) {}
                            }(),
                            vl = t && t.isArrayBuffer,
                            pl = t && t.isDate,
                            hl = t && t.isMap,
                            gl = t && t.isRegExp,
                            yl = t && t.isSet,
                            bl = t && t.isTypedArray;

                        function El(e, t, n) {
                            switch (n.length) {
                                case 0:
                                    return e.call(t);
                                case 1:
                                    return e.call(t, n[0]);
                                case 2:
                                    return e.call(t, n[0], n[1]);
                                case 3:
                                    return e.call(t, n[0], n[1], n[2])
                            }
                            return e.apply(t, n)
                        }

                        function Sl(e, t, n, r) {
                            for (var a = -1, i = null == e ? 0 : e.length; ++a < i;) {
                                var o = e[a];
                                t(r, o, n(o), e)
                            }
                            return r
                        }

                        function wl(e, t) {
                            for (var n = -1, r = null == e ? 0 : e.length; ++n < r && !1 !== t(e[n], n, e););
                            return e
                        }

                        function Il(e, t) {
                            for (var n = null == e ? 0 : e.length; n-- && !1 !== t(e[n], n, e););
                            return e
                        }

                        function xl(e, t) {
                            for (var n = -1, r = null == e ? 0 : e.length; ++n < r;)
                                if (!t(e[n], n, e)) return !1;
                            return !0
                        }

                        function Tl(e, t) {
                            for (var n = -1, r = null == e ? 0 : e.length, a = 0, i = []; ++n < r;) {
                                var o = e[n];
                                t(o, n, e) && (i[a++] = o)
                            }
                            return i
                        }

                        function Pl(e, t) {
                            return !!(null == e ? 0 : e.length) && -1 < Ol(e, t, 0)
                        }

                        function _l(e, t, n) {
                            for (var r = -1, a = null == e ? 0 : e.length; ++r < a;)
                                if (n(t, e[r])) return !0;
                            return !1
                        }

                        function Cl(e, t) {
                            for (var n = -1, r = null == e ? 0 : e.length, a = Array(r); ++n < r;) a[n] = t(e[n], n, e);
                            return a
                        }

                        function kl(e, t) {
                            for (var n = -1, r = t.length, a = e.length; ++n < r;) e[a + n] = t[n];
                            return e
                        }

                        function Nl(e, t, n, r) {
                            var a = -1,
                                i = null == e ? 0 : e.length;
                            for (r && i && (n = e[++a]); ++a < i;) n = t(n, e[a], a, e);
                            return n
                        }

                        function Ll(e, t, n, r) {
                            var a = null == e ? 0 : e.length;
                            for (r && a && (n = e[--a]); a--;) n = t(n, e[a], a, e);
                            return n
                        }

                        function Rl(e, t) {
                            for (var n = -1, r = null == e ? 0 : e.length; ++n < r;)
                                if (t(e[n], n, e)) return !0;
                            return !1
                        }
                        var C = Gl("length");

                        function Al(e, r, t) {
                            var a;
                            return t(e, function(e, t, n) {
                                if (r(e, t, n)) return a = t, !1
                            }), a
                        }

                        function Dl(e, t, n, r) {
                            for (var a = e.length, i = n + (r ? 1 : -1); r ? i-- : ++i < a;)
                                if (t(e[i], i, e)) return i;
                            return -1
                        }

                        function Ol(e, t, n) {
                            return t == t ? function(e, t, n) {
                                var r = n - 1,
                                    a = e.length;
                                for (; ++r < a;)
                                    if (e[r] === t) return r;
                                return -1
                            }(e, t, n) : Dl(e, Ml, n)
                        }

                        function Fl(e, t, n, r) {
                            for (var a = n - 1, i = e.length; ++a < i;)
                                if (r(e[a], t)) return a;
                            return -1
                        }

                        function Ml(e) {
                            return e != e
                        }

                        function Ul(e, t) {
                            var n = null == e ? 0 : e.length;
                            return n ? Bl(e, t) / n : $i
                        }

                        function Gl(t) {
                            return function(e) {
                                return null == e ? Bi : e[t]
                            }
                        }

                        function k(t) {
                            return function(e) {
                                return null == t ? Bi : t[e]
                            }
                        }

                        function jl(e, r, a, i, t) {
                            return t(e, function(e, t, n) {
                                a = i ? (i = !1, e) : r(a, e, t, n)
                            }), a
                        }

                        function Bl(e, t) {
                            for (var n, r = -1, a = e.length; ++r < a;) {
                                var i = t(e[r]);
                                i !== Bi && (n = n === Bi ? i : n + i)
                            }
                            return n
                        }

                        function Vl(e, t) {
                            for (var n = -1, r = Array(e); ++n < e;) r[n] = t(n);
                            return r
                        }

                        function ql(e) {
                            return e && e.slice(0, iu(e) + 1).replace(Go, "")
                        }

                        function Wl(t) {
                            return function(e) {
                                return t(e)
                            }
                        }

                        function Hl(t, e) {
                            return Cl(e, function(e) {
                                return t[e]
                            })
                        }

                        function zl(e, t) {
                            return e.has(t)
                        }

                        function $l(e, t) {
                            for (var n = -1, r = e.length; ++n < r && -1 < Ol(t, e[n], 0););
                            return n
                        }

                        function Jl(e, t) {
                            for (var n = e.length; n-- && -1 < Ol(t, e[n], 0););
                            return n
                        }
                        var Kl = k({
                                "À": "A",
                                "Á": "A",
                                "Â": "A",
                                "Ã": "A",
                                "Ä": "A",
                                "Å": "A",
                                "à": "a",
                                "á": "a",
                                "â": "a",
                                "ã": "a",
                                "ä": "a",
                                "å": "a",
                                "Ç": "C",
                                "ç": "c",
                                "Ð": "D",
                                "ð": "d",
                                "È": "E",
                                "É": "E",
                                "Ê": "E",
                                "Ë": "E",
                                "è": "e",
                                "é": "e",
                                "ê": "e",
                                "ë": "e",
                                "Ì": "I",
                                "Í": "I",
                                "Î": "I",
                                "Ï": "I",
                                "ì": "i",
                                "í": "i",
                                "î": "i",
                                "ï": "i",
                                "Ñ": "N",
                                "ñ": "n",
                                "Ò": "O",
                                "Ó": "O",
                                "Ô": "O",
                                "Õ": "O",
                                "Ö": "O",
                                "Ø": "O",
                                "ò": "o",
                                "ó": "o",
                                "ô": "o",
                                "õ": "o",
                                "ö": "o",
                                "ø": "o",
                                "Ù": "U",
                                "Ú": "U",
                                "Û": "U",
                                "Ü": "U",
                                "ù": "u",
                                "ú": "u",
                                "û": "u",
                                "ü": "u",
                                "Ý": "Y",
                                "ý": "y",
                                "ÿ": "y",
                                "Æ": "Ae",
                                "æ": "ae",
                                "Þ": "Th",
                                "þ": "th",
                                "ß": "ss",
                                "Ā": "A",
                                "Ă": "A",
                                "Ą": "A",
                                "ā": "a",
                                "ă": "a",
                                "ą": "a",
                                "Ć": "C",
                                "Ĉ": "C",
                                "Ċ": "C",
                                "Č": "C",
                                "ć": "c",
                                "ĉ": "c",
                                "ċ": "c",
                                "č": "c",
                                "Ď": "D",
                                "Đ": "D",
                                "ď": "d",
                                "đ": "d",
                                "Ē": "E",
                                "Ĕ": "E",
                                "Ė": "E",
                                "Ę": "E",
                                "Ě": "E",
                                "ē": "e",
                                "ĕ": "e",
                                "ė": "e",
                                "ę": "e",
                                "ě": "e",
                                "Ĝ": "G",
                                "Ğ": "G",
                                "Ġ": "G",
                                "Ģ": "G",
                                "ĝ": "g",
                                "ğ": "g",
                                "ġ": "g",
                                "ģ": "g",
                                "Ĥ": "H",
                                "Ħ": "H",
                                "ĥ": "h",
                                "ħ": "h",
                                "Ĩ": "I",
                                "Ī": "I",
                                "Ĭ": "I",
                                "Į": "I",
                                "İ": "I",
                                "ĩ": "i",
                                "ī": "i",
                                "ĭ": "i",
                                "į": "i",
                                "ı": "i",
                                "Ĵ": "J",
                                "ĵ": "j",
                                "Ķ": "K",
                                "ķ": "k",
                                "ĸ": "k",
                                "Ĺ": "L",
                                "Ļ": "L",
                                "Ľ": "L",
                                "Ŀ": "L",
                                "Ł": "L",
                                "ĺ": "l",
                                "ļ": "l",
                                "ľ": "l",
                                "ŀ": "l",
                                "ł": "l",
                                "Ń": "N",
                                "Ņ": "N",
                                "Ň": "N",
                                "Ŋ": "N",
                                "ń": "n",
                                "ņ": "n",
                                "ň": "n",
                                "ŋ": "n",
                                "Ō": "O",
                                "Ŏ": "O",
                                "Ő": "O",
                                "ō": "o",
                                "ŏ": "o",
                                "ő": "o",
                                "Ŕ": "R",
                                "Ŗ": "R",
                                "Ř": "R",
                                "ŕ": "r",
                                "ŗ": "r",
                                "ř": "r",
                                "Ś": "S",
                                "Ŝ": "S",
                                "Ş": "S",
                                "Š": "S",
                                "ś": "s",
                                "ŝ": "s",
                                "ş": "s",
                                "š": "s",
                                "Ţ": "T",
                                "Ť": "T",
                                "Ŧ": "T",
                                "ţ": "t",
                                "ť": "t",
                                "ŧ": "t",
                                "Ũ": "U",
                                "Ū": "U",
                                "Ŭ": "U",
                                "Ů": "U",
                                "Ű": "U",
                                "Ų": "U",
                                "ũ": "u",
                                "ū": "u",
                                "ŭ": "u",
                                "ů": "u",
                                "ű": "u",
                                "ų": "u",
                                "Ŵ": "W",
                                "ŵ": "w",
                                "Ŷ": "Y",
                                "ŷ": "y",
                                "Ÿ": "Y",
                                "Ź": "Z",
                                "Ż": "Z",
                                "Ž": "Z",
                                "ź": "z",
                                "ż": "z",
                                "ž": "z",
                                "Ĳ": "IJ",
                                "ĳ": "ij",
                                "Œ": "Oe",
                                "œ": "oe",
                                "ŉ": "'n",
                                "ſ": "s"
                            }),
                            Yl = k({
                                "&": "&amp;",
                                "<": "&lt;",
                                ">": "&gt;",
                                '"': "&quot;",
                                "'": "&#39;"
                            });

                        function Ql(e) {
                            return "\\" + T[e]
                        }

                        function Zl(e) {
                            return x.test(e)
                        }

                        function Xl(e) {
                            var n = -1,
                                r = Array(e.size);
                            return e.forEach(function(e, t) {
                                r[++n] = [t, e]
                            }), r
                        }

                        function eu(t, n) {
                            return function(e) {
                                return t(n(e))
                            }
                        }

                        function tu(e, t) {
                            for (var n = -1, r = e.length, a = 0, i = []; ++n < r;) {
                                var o = e[n];
                                o !== t && o !== Wi || (e[n] = Wi, i[a++] = n)
                            }
                            return i
                        }

                        function nu(e) {
                            var t = -1,
                                n = Array(e.size);
                            return e.forEach(function(e) {
                                n[++t] = e
                            }), n
                        }

                        function ru(e) {
                            return (Zl(e) ? function(e) {
                                var t = I.lastIndex = 0;
                                for (; I.test(e);) ++t;
                                return t
                            } : C)(e)
                        }

                        function au(e) {
                            return Zl(e) ? e.match(I) || [] : e.split("")
                        }

                        function iu(e) {
                            for (var t = e.length; t-- && n.test(e.charAt(t)););
                            return t
                        }
                        var ou = k({
                            "&amp;": "&",
                            "&lt;": "<",
                            "&gt;": ">",
                            "&quot;": '"',
                            "&#39;": "'"
                        });
                        var lu = function e(t) {
                            var I = (t = null == t ? dl : lu.defaults(dl.Object(), t, lu.pick(dl, ol))).Array,
                                n = t.Date,
                                f = t.Error,
                                d = t.Function,
                                a = t.Math,
                                p = t.Object,
                                m = t.RegExp,
                                c = t.String,
                                w = t.TypeError,
                                i = I.prototype,
                                r = d.prototype,
                                v = p.prototype,
                                o = t["__core-js_shared__"],
                                l = r.toString,
                                y = v.hasOwnProperty,
                                u = 0,
                                s = (Ri = /[^.]+$/.exec(o && o.keys && o.keys.IE_PROTO || "")) ? "Symbol(src)_1." + Ri : "",
                                h = v.toString,
                                g = l.call(p),
                                b = dl._,
                                E = m("^" + l.call(y).replace(Mo, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"),
                                S = ml ? t.Buffer : Bi,
                                x = t.Symbol,
                                T = t.Uint8Array,
                                P = S ? S.allocUnsafe : Bi,
                                _ = eu(p.getPrototypeOf, p),
                                C = p.create,
                                k = v.propertyIsEnumerable,
                                N = i.splice,
                                L = x ? x.isConcatSpreadable : Bi,
                                R = x ? x.iterator : Bi,
                                A = x ? x.toStringTag : Bi,
                                D = function() {
                                    try {
                                        var e = Vn(p, "defineProperty");
                                        return e({}, "", {}), e
                                    } catch (e) {}
                                }(),
                                O = t.clearTimeout !== dl.clearTimeout && t.clearTimeout,
                                F = n && n.now !== dl.Date.now && n.now,
                                M = t.setTimeout !== dl.setTimeout && t.setTimeout,
                                U = a.ceil,
                                G = a.floor,
                                j = p.getOwnPropertySymbols,
                                B = S ? S.isBuffer : Bi,
                                V = t.isFinite,
                                q = i.join,
                                W = eu(p.keys, p),
                                H = a.max,
                                z = a.min,
                                $ = n.now,
                                J = t.parseInt,
                                K = a.random,
                                Y = i.reverse,
                                Q = Vn(t, "DataView"),
                                Z = Vn(t, "Map"),
                                X = Vn(t, "Promise"),
                                ee = Vn(t, "Set"),
                                te = Vn(t, "WeakMap"),
                                ne = Vn(p, "create"),
                                re = te && new te,
                                ae = {},
                                ie = hr(Q),
                                oe = hr(Z),
                                le = hr(X),
                                ue = hr(ee),
                                se = hr(te),
                                ce = x ? x.prototype : Bi,
                                fe = ce ? ce.valueOf : Bi,
                                de = ce ? ce.toString : Bi;

                            function me(e) {
                                if (Aa(e) && !wa(e) && !(e instanceof ye)) {
                                    if (e instanceof ge) return e;
                                    if (y.call(e, "__wrapped__")) return gr(e)
                                }
                                return new ge(e)
                            }
                            var ve = function(e) {
                                if (!Ra(e)) return {};
                                if (C) return C(e);
                                pe.prototype = e;
                                e = new pe;
                                return pe.prototype = Bi, e
                            };

                            function pe() {}

                            function he() {}

                            function ge(e, t) {
                                this.__wrapped__ = e, this.__actions__ = [], this.__chain__ = !!t, this.__index__ = 0, this.__values__ = Bi
                            }

                            function ye(e) {
                                this.__wrapped__ = e, this.__actions__ = [], this.__dir__ = 1, this.__filtered__ = !1, this.__iteratees__ = [], this.__takeCount__ = Ji, this.__views__ = []
                            }

                            function be(e) {
                                var t = -1,
                                    n = null == e ? 0 : e.length;
                                for (this.clear(); ++t < n;) {
                                    var r = e[t];
                                    this.set(r[0], r[1])
                                }
                            }

                            function Ee(e) {
                                var t = -1,
                                    n = null == e ? 0 : e.length;
                                for (this.clear(); ++t < n;) {
                                    var r = e[t];
                                    this.set(r[0], r[1])
                                }
                            }

                            function Se(e) {
                                var t = -1,
                                    n = null == e ? 0 : e.length;
                                for (this.clear(); ++t < n;) {
                                    var r = e[t];
                                    this.set(r[0], r[1])
                                }
                            }

                            function we(e) {
                                var t = -1,
                                    n = null == e ? 0 : e.length;
                                for (this.__data__ = new Se; ++t < n;) this.add(e[t])
                            }

                            function Ie(e) {
                                e = this.__data__ = new Ee(e);
                                this.size = e.size
                            }

                            function xe(e, t) {
                                var n, r = wa(e),
                                    a = !r && Sa(e),
                                    i = !r && !a && Pa(e),
                                    o = !r && !a && !i && Ba(e),
                                    l = r || a || i || o,
                                    u = l ? Vl(e.length, c) : [],
                                    s = u.length;
                                for (n in e) !t && !y.call(e, n) || l && ("length" == n || i && ("offset" == n || "parent" == n) || o && ("buffer" == n || "byteLength" == n || "byteOffset" == n) || Kn(n, s)) || u.push(n);
                                return u
                            }

                            function Te(e) {
                                var t = e.length;
                                return t ? e[wt(0, t - 1)] : Bi
                            }

                            function Pe(e, t) {
                                return fr(rn(e), Oe(t, 0, e.length))
                            }

                            function _e(e) {
                                return fr(rn(e))
                            }

                            function Ce(e, t, n) {
                                (n === Bi || ya(e[t], n)) && (n !== Bi || t in e) || Ae(e, t, n)
                            }

                            function ke(e, t, n) {
                                var r = e[t];
                                y.call(e, t) && ya(r, n) && (n !== Bi || t in e) || Ae(e, t, n)
                            }

                            function Ne(e, t) {
                                for (var n = e.length; n--;)
                                    if (ya(e[n][0], t)) return n;
                                return -1
                            }

                            function Le(e, r, a, i) {
                                return je(e, function(e, t, n) {
                                    r(i, e, a(e), n)
                                }), i
                            }

                            function Re(e, t) {
                                return e && an(t, si(t), e)
                            }

                            function Ae(e, t, n) {
                                "__proto__" == t && D ? D(e, t, {
                                    configurable: !0,
                                    enumerable: !0,
                                    value: n,
                                    writable: !0
                                }) : e[t] = n
                            }

                            function De(e, t) {
                                for (var n = -1, r = t.length, a = I(r), i = null == e; ++n < r;) a[n] = i ? Bi : ai(e, t[n]);
                                return a
                            }

                            function Oe(e, t, n) {
                                return e == e && (n !== Bi && (e = e <= n ? e : n), t !== Bi && (e = t <= e ? e : t)), e
                            }

                            function Fe(n, r, a, e, t, i) {
                                var o, l = 1 & r,
                                    u = 2 & r,
                                    s = 4 & r;
                                if (a && (o = t ? a(n, e, t, i) : a(n)), o !== Bi) return o;
                                if (!Ra(n)) return n;
                                var c, f, d = wa(n);
                                if (d) {
                                    if (o = function(e) {
                                            var t = e.length,
                                                n = new e.constructor(t);
                                            t && "string" == typeof e[0] && y.call(e, "index") && (n.index = e.index, n.input = e.input);
                                            return n
                                        }(n), !l) return rn(n, o)
                                } else {
                                    var m = Hn(n),
                                        e = m == to || m == no;
                                    if (Pa(n)) return Qt(n, l);
                                    if (m == io || m == Yi || e && !t) {
                                        if (o = u || e ? {} : $n(n), !l) return u ? (e = c = n, f = (f = o) && an(e, ci(e), f), an(c, Wn(c), f)) : (f = Re(o, c = n), an(c, qn(c), f))
                                    } else {
                                        if (!sl[m]) return t ? n : {};
                                        o = function(e, t, n) {
                                            var r = e.constructor;
                                            switch (t) {
                                                case mo:
                                                    return Zt(e);
                                                case Zi:
                                                case Xi:
                                                    return new r(+e);
                                                case vo:
                                                    return function(e, t) {
                                                        t = t ? Zt(e.buffer) : e.buffer;
                                                        return new e.constructor(t, e.byteOffset, e.byteLength)
                                                    }(e, n);
                                                case po:
                                                case ho:
                                                case go:
                                                case yo:
                                                case bo:
                                                case Eo:
                                                case So:
                                                case wo:
                                                case Io:
                                                    return Xt(e, n);
                                                case ro:
                                                    return new r;
                                                case ao:
                                                case so:
                                                    return new r(e);
                                                case lo:
                                                    return function(e) {
                                                        var t = new e.constructor(e.source, $o.exec(e));
                                                        return t.lastIndex = e.lastIndex, t
                                                    }(e);
                                                case uo:
                                                    return new r;
                                                case co:
                                                    return function(e) {
                                                        return fe ? p(fe.call(e)) : {}
                                                    }(e)
                                            }
                                        }(n, m, l)
                                    }
                                }
                                l = (i = i || new Ie).get(n);
                                if (l) return l;
                                i.set(n, o), Ua(n) ? n.forEach(function(e) {
                                    o.add(Fe(e, r, a, e, n, i))
                                }) : Da(n) && n.forEach(function(e, t) {
                                    o.set(t, Fe(e, r, a, t, n, i))
                                });
                                var v = d ? Bi : (s ? u ? On : Dn : u ? ci : si)(n);
                                return wl(v || n, function(e, t) {
                                    v && (e = n[t = e]), ke(o, t, Fe(e, r, a, t, n, i))
                                }), o
                            }

                            function Me(e, t, n) {
                                var r = n.length;
                                if (null == e) return !r;
                                for (e = p(e); r--;) {
                                    var a = n[r],
                                        i = t[a],
                                        o = e[a];
                                    if (o === Bi && !(a in e) || !i(o)) return !1
                                }
                                return !0
                            }

                            function Ue(e, t, n) {
                                if ("function" != typeof e) throw new w(Vi);
                                return lr(function() {
                                    e.apply(Bi, n)
                                }, t)
                            }

                            function Ge(e, t, n, r) {
                                var a = -1,
                                    i = Pl,
                                    o = !0,
                                    l = e.length,
                                    u = [],
                                    s = t.length;
                                if (!l) return u;
                                n && (t = Cl(t, Wl(n))), r ? (i = _l, o = !1) : 200 <= t.length && (i = zl, o = !1, t = new we(t));
                                e: for (; ++a < l;) {
                                    var c = e[a],
                                        f = null == n ? c : n(c),
                                        c = r || 0 !== c ? c : 0;
                                    if (o && f == f) {
                                        for (var d = s; d--;)
                                            if (t[d] === f) continue e;
                                        u.push(c)
                                    } else i(t, f, r) || u.push(c)
                                }
                                return u
                            }
                            me.templateSettings = {
                                escape: Lo,
                                evaluate: Ro,
                                interpolate: Ao,
                                variable: "",
                                imports: {
                                    _: me
                                }
                            }, (me.prototype = he.prototype).constructor = me, (ge.prototype = ve(he.prototype)).constructor = ge, (ye.prototype = ve(he.prototype)).constructor = ye, be.prototype.clear = function() {
                                this.__data__ = ne ? ne(null) : {}, this.size = 0
                            }, be.prototype.delete = function(e) {
                                return e = this.has(e) && delete this.__data__[e], this.size -= e ? 1 : 0, e
                            }, be.prototype.get = function(e) {
                                var t = this.__data__;
                                if (ne) {
                                    var n = t[e];
                                    return n === qi ? Bi : n
                                }
                                return y.call(t, e) ? t[e] : Bi
                            }, be.prototype.has = function(e) {
                                var t = this.__data__;
                                return ne ? t[e] !== Bi : y.call(t, e)
                            }, be.prototype.set = function(e, t) {
                                var n = this.__data__;
                                return this.size += this.has(e) ? 0 : 1, n[e] = ne && t === Bi ? qi : t, this
                            }, Ee.prototype.clear = function() {
                                this.__data__ = [], this.size = 0
                            }, Ee.prototype.delete = function(e) {
                                var t = this.__data__;
                                return !((e = Ne(t, e)) < 0) && (e == t.length - 1 ? t.pop() : N.call(t, e, 1), --this.size, !0)
                            }, Ee.prototype.get = function(e) {
                                var t = this.__data__;
                                return (e = Ne(t, e)) < 0 ? Bi : t[e][1]
                            }, Ee.prototype.has = function(e) {
                                return -1 < Ne(this.__data__, e)
                            }, Ee.prototype.set = function(e, t) {
                                var n = this.__data__,
                                    r = Ne(n, e);
                                return r < 0 ? (++this.size, n.push([e, t])) : n[r][1] = t, this
                            }, Se.prototype.clear = function() {
                                this.size = 0, this.__data__ = {
                                    hash: new be,
                                    map: new(Z || Ee),
                                    string: new be
                                }
                            }, Se.prototype.delete = function(e) {
                                return e = jn(this, e).delete(e), this.size -= e ? 1 : 0, e
                            }, Se.prototype.get = function(e) {
                                return jn(this, e).get(e)
                            }, Se.prototype.has = function(e) {
                                return jn(this, e).has(e)
                            }, Se.prototype.set = function(e, t) {
                                var n = jn(this, e),
                                    r = n.size;
                                return n.set(e, t), this.size += n.size == r ? 0 : 1, this
                            }, we.prototype.add = we.prototype.push = function(e) {
                                return this.__data__.set(e, qi), this
                            }, we.prototype.has = function(e) {
                                return this.__data__.has(e)
                            }, Ie.prototype.clear = function() {
                                this.__data__ = new Ee, this.size = 0
                            }, Ie.prototype.delete = function(e) {
                                var t = this.__data__,
                                    e = t.delete(e);
                                return this.size = t.size, e
                            }, Ie.prototype.get = function(e) {
                                return this.__data__.get(e)
                            }, Ie.prototype.has = function(e) {
                                return this.__data__.has(e)
                            }, Ie.prototype.set = function(e, t) {
                                var n = this.__data__;
                                if (n instanceof Ee) {
                                    var r = n.__data__;
                                    if (!Z || r.length < 199) return r.push([e, t]), this.size = ++n.size, this;
                                    n = this.__data__ = new Se(r)
                                }
                                return n.set(e, t), this.size = n.size, this
                            };
                            var je = un(Je),
                                Be = un(Ke, !0);

                            function Ve(e, r) {
                                var a = !0;
                                return je(e, function(e, t, n) {
                                    return a = !!r(e, t, n)
                                }), a
                            }

                            function qe(e, t, n) {
                                for (var r = -1, a = e.length; ++r < a;) {
                                    var i, o, l = e[r],
                                        u = t(l);
                                    null != u && (i === Bi ? u == u && !ja(u) : n(u, i)) && (i = u, o = l)
                                }
                                return o
                            }

                            function We(e, r) {
                                var a = [];
                                return je(e, function(e, t, n) {
                                    r(e, t, n) && a.push(e)
                                }), a
                            }

                            function He(e, t, n, r, a) {
                                var i = -1,
                                    o = e.length;
                                for (n = n || Jn, a = a || []; ++i < o;) {
                                    var l = e[i];
                                    0 < t && n(l) ? 1 < t ? He(l, t - 1, n, r, a) : kl(a, l) : r || (a[a.length] = l)
                                }
                                return a
                            }
                            var ze = sn(),
                                $e = sn(!0);

                            function Je(e, t) {
                                return e && ze(e, t, si)
                            }

                            function Ke(e, t) {
                                return e && $e(e, t, si)
                            }

                            function Ye(t, e) {
                                return Tl(e, function(e) {
                                    return ka(t[e])
                                })
                            }

                            function Qe(e, t) {
                                for (var n = 0, r = (t = $t(t, e)).length; null != e && n < r;) e = e[pr(t[n++])];
                                return n && n == r ? e : Bi
                            }

                            function Ze(e, t, n) {
                                t = t(e);
                                return wa(e) ? t : kl(t, n(e))
                            }

                            function Xe(e) {
                                return null == e ? e === Bi ? "[object Undefined]" : "[object Null]" : A && A in p(e) ? function(e) {
                                    var t = y.call(e, A),
                                        n = e[A];
                                    try {
                                        e[A] = Bi;
                                        var r = !0
                                    } catch (e) {}
                                    var a = h.call(e);
                                    r && (t ? e[A] = n : delete e[A]);
                                    return a
                                }(e) : (e = e, h.call(e))
                            }

                            function et(e, t) {
                                return t < e
                            }

                            function tt(e, t) {
                                return null != e && y.call(e, t)
                            }

                            function nt(e, t) {
                                return null != e && t in p(e)
                            }

                            function rt(e, t, n) {
                                for (var r = n ? _l : Pl, a = e[0].length, i = e.length, o = i, l = I(i), u = 1 / 0, s = []; o--;) {
                                    var c = e[o];
                                    o && t && (c = Cl(c, Wl(t))), u = z(c.length, u), l[o] = !n && (t || 120 <= a && 120 <= c.length) ? new we(o && c) : Bi
                                }
                                c = e[0];
                                var f = -1,
                                    d = l[0];
                                e: for (; ++f < a && s.length < u;) {
                                    var m = c[f],
                                        v = t ? t(m) : m,
                                        m = n || 0 !== m ? m : 0;
                                    if (!(d ? zl(d, v) : r(s, v, n))) {
                                        for (o = i; --o;) {
                                            var p = l[o];
                                            if (!(p ? zl(p, v) : r(e[o], v, n))) continue e
                                        }
                                        d && d.push(v), s.push(m)
                                    }
                                }
                                return s
                            }

                            function at(e, t, n) {
                                t = null == (e = ar(e, t = $t(t, e))) ? e : e[pr(Cr(t))];
                                return null == t ? Bi : El(t, e, n)
                            }

                            function it(e) {
                                return Aa(e) && Xe(e) == Yi
                            }

                            function ot(e, t, n, r, a) {
                                return e === t || (null == e || null == t || !Aa(e) && !Aa(t) ? e != e && t != t : function(e, t, n, r, a, i) {
                                    var o = wa(e),
                                        l = wa(t),
                                        u = o ? Qi : Hn(e),
                                        s = l ? Qi : Hn(t),
                                        c = (u = u == Yi ? io : u) == io,
                                        l = (s = s == Yi ? io : s) == io,
                                        s = u == s;
                                    if (s && Pa(e)) {
                                        if (!Pa(t)) return !1;
                                        c = !(o = !0)
                                    }
                                    if (s && !c) return i = i || new Ie, o || Ba(e) ? Rn(e, t, n, r, a, i) : function(e, t, n, r, a, i, o) {
                                        switch (n) {
                                            case vo:
                                                if (e.byteLength != t.byteLength || e.byteOffset != t.byteOffset) return !1;
                                                e = e.buffer, t = t.buffer;
                                            case mo:
                                                return e.byteLength == t.byteLength && i(new T(e), new T(t)) ? !0 : !1;
                                            case Zi:
                                            case Xi:
                                            case ao:
                                                return ya(+e, +t);
                                            case eo:
                                                return e.name == t.name && e.message == t.message;
                                            case lo:
                                            case so:
                                                return e == t + "";
                                            case ro:
                                                var l = Xl;
                                            case uo:
                                                var u = 1 & r;
                                                if (l = l || nu, e.size != t.size && !u) return !1;
                                                u = o.get(e);
                                                if (u) return u == t;
                                                r |= 2, o.set(e, t);
                                                l = Rn(l(e), l(t), r, a, i, o);
                                                return o.delete(e), l;
                                            case co:
                                                if (fe) return fe.call(e) == fe.call(t)
                                        }
                                        return !1
                                    }(e, t, u, n, r, a, i);
                                    if (!(1 & n)) {
                                        c = c && y.call(e, "__wrapped__"), l = l && y.call(t, "__wrapped__");
                                        if (c || l) {
                                            c = c ? e.value() : e, l = l ? t.value() : t;
                                            return i = i || new Ie, a(c, l, n, r, i)
                                        }
                                    }
                                    return s && (i = i || new Ie, function(e, t, n, r, a, i) {
                                        var o = 1 & n,
                                            l = Dn(e),
                                            u = l.length,
                                            s = Dn(t).length;
                                        if (u != s && !o) return !1;
                                        var c = u;
                                        for (; c--;) {
                                            var f = l[c];
                                            if (!(o ? f in t : y.call(t, f))) return !1
                                        }
                                        var d = i.get(e),
                                            s = i.get(t);
                                        if (d && s) return d == t && s == e;
                                        var m = !0;
                                        i.set(e, t), i.set(t, e);
                                        var v = o;
                                        for (; ++c < u;) {
                                            f = l[c];
                                            var p, h = e[f],
                                                g = t[f];
                                            if (r && (p = o ? r(g, h, f, t, e, i) : r(h, g, f, e, t, i)), !(p === Bi ? h === g || a(h, g, n, r, i) : p)) {
                                                m = !1;
                                                break
                                            }
                                            v = v || "constructor" == f
                                        }
                                        m && !v && (d = e.constructor, s = t.constructor, d != s && "constructor" in e && "constructor" in t && !("function" == typeof d && d instanceof d && "function" == typeof s && s instanceof s) && (m = !1));
                                        return i.delete(e), i.delete(t), m
                                    }(e, t, n, r, a, i))
                                }(e, t, n, r, ot, a))
                            }

                            function lt(e, t, n, r) {
                                var a = n.length,
                                    i = a,
                                    o = !r;
                                if (null == e) return !i;
                                for (e = p(e); a--;) {
                                    var l = n[a];
                                    if (o && l[2] ? l[1] !== e[l[0]] : !(l[0] in e)) return !1
                                }
                                for (; ++a < i;) {
                                    var u = (l = n[a])[0],
                                        s = e[u],
                                        c = l[1];
                                    if (o && l[2]) {
                                        if (s === Bi && !(u in e)) return !1
                                    } else {
                                        var f, d = new Ie;
                                        if (r && (f = r(s, c, u, e, t, d)), !(f === Bi ? ot(c, s, 3, r, d) : f)) return !1
                                    }
                                }
                                return !0
                            }

                            function ut(e) {
                                return !(!Ra(e) || (t = e, s && s in t)) && (ka(e) ? E : Yo).test(hr(e));
                                var t
                            }

                            function st(e) {
                                return "function" == typeof e ? e : null == e ? Ai : "object" == typeof e ? wa(e) ? pt(e[0], e[1]) : vt(e) : Mi(e)
                            }

                            function ct(e) {
                                if (!er(e)) return W(e);
                                var t, n = [];
                                for (t in p(e)) y.call(e, t) && "constructor" != t && n.push(t);
                                return n
                            }

                            function ft(e) {
                                if (!Ra(e)) return function(e) {
                                    var t = [];
                                    if (null != e)
                                        for (var n in p(e)) t.push(n);
                                    return t
                                }(e);
                                var t, n = er(e),
                                    r = [];
                                for (t in e)("constructor" != t || !n && y.call(e, t)) && r.push(t);
                                return r
                            }

                            function dt(e, t) {
                                return e < t
                            }

                            function mt(e, r) {
                                var a = -1,
                                    i = xa(e) ? I(e.length) : [];
                                return je(e, function(e, t, n) {
                                    i[++a] = r(e, t, n)
                                }), i
                            }

                            function vt(t) {
                                var n = Bn(t);
                                return 1 == n.length && n[0][2] ? nr(n[0][0], n[0][1]) : function(e) {
                                    return e === t || lt(e, t, n)
                                }
                            }

                            function pt(n, r) {
                                return Qn(n) && tr(r) ? nr(pr(n), r) : function(e) {
                                    var t = ai(e, n);
                                    return t === Bi && t === r ? ii(e, n) : ot(r, t, 3)
                                }
                            }

                            function ht(r, a, i, o, l) {
                                r !== a && ze(a, function(e, t) {
                                    var n;
                                    l = l || new Ie, Ra(e) ? function(e, t, n, r, a, i, o) {
                                        var l = ir(e, n),
                                            u = ir(t, n),
                                            s = o.get(u);
                                        if (s) return Ce(e, n, s);
                                        var c, f = i ? i(l, u, n + "", e, t, o) : Bi,
                                            d = f === Bi;
                                        d && (c = wa(u), s = !c && Pa(u), t = !c && !s && Ba(u), f = u, c || s || t ? f = wa(l) ? l : Ta(l) ? rn(l) : s ? Qt(u, !(d = !1)) : t ? Xt(u, !(d = !1)) : [] : Fa(u) || Sa(u) ? Sa(f = l) ? f = Ka(l) : Ra(l) && !ka(l) || (f = $n(u)) : d = !1), d && (o.set(u, f), a(f, u, r, i, o), o.delete(u)), Ce(e, n, f)
                                    }(r, a, t, i, ht, o, l) : ((n = o ? o(ir(r, t), e, t + "", r, a, l) : Bi) === Bi && (n = e), Ce(r, t, n))
                                }, ci)
                            }

                            function gt(e, t) {
                                var n = e.length;
                                if (n) return Kn(t += t < 0 ? n : 0, n) ? e[t] : Bi
                            }

                            function yt(e, r, n) {
                                r = r.length ? Cl(r, function(t) {
                                    return wa(t) ? function(e) {
                                        return Qe(e, 1 === t.length ? t[0] : t)
                                    } : t
                                }) : [Ai];
                                var a = -1;
                                return r = Cl(r, Wl(Gn())),
                                    function(e, t) {
                                        var n = e.length;
                                        for (e.sort(t); n--;) e[n] = e[n].value;
                                        return e
                                    }(mt(e, function(t, e, n) {
                                        return {
                                            criteria: Cl(r, function(e) {
                                                return e(t)
                                            }),
                                            index: ++a,
                                            value: t
                                        }
                                    }), function(e, t) {
                                        return function(e, t, n) {
                                            var r = -1,
                                                a = e.criteria,
                                                i = t.criteria,
                                                o = a.length,
                                                l = n.length;
                                            for (; ++r < o;) {
                                                var u = en(a[r], i[r]);
                                                if (u) {
                                                    if (l <= r) return u;
                                                    var s = n[r];
                                                    return u * ("desc" == s ? -1 : 1)
                                                }
                                            }
                                            return e.index - t.index
                                        }(e, t, n)
                                    })
                            }

                            function bt(e, t, n) {
                                for (var r = -1, a = t.length, i = {}; ++r < a;) {
                                    var o = t[r],
                                        l = Qe(e, o);
                                    n(l, o) && _t(i, $t(o, e), l)
                                }
                                return i
                            }

                            function Et(e, t, n, r) {
                                var a = r ? Fl : Ol,
                                    i = -1,
                                    o = t.length,
                                    l = e;
                                for (e === t && (t = rn(t)), n && (l = Cl(e, Wl(n))); ++i < o;)
                                    for (var u = 0, s = t[i], c = n ? n(s) : s; - 1 < (u = a(l, c, u, r));) l !== e && N.call(l, u, 1), N.call(e, u, 1);
                                return e
                            }

                            function St(e, t) {
                                for (var n = e ? t.length : 0, r = n - 1; n--;) {
                                    var a, i = t[n];
                                    n != r && i === a || (Kn(a = i) ? N.call(e, i, 1) : Gt(e, i))
                                }
                                return e
                            }

                            function wt(e, t) {
                                return e + G(K() * (t - e + 1))
                            }

                            function It(e, t) {
                                var n = "";
                                if (!e || t < 1 || zi < t) return n;
                                for (; t % 2 && (n += e), (t = G(t / 2)) && (e += e), t;);
                                return n
                            }

                            function xt(e, t) {
                                return ur(rr(e, t, Ai), e + "")
                            }

                            function Tt(e) {
                                return Te(yi(e))
                            }

                            function Pt(e, t) {
                                e = yi(e);
                                return fr(e, Oe(t, 0, e.length))
                            }

                            function _t(e, t, n, r) {
                                if (!Ra(e)) return e;
                                for (var a = -1, i = (t = $t(t, e)).length, o = i - 1, l = e; null != l && ++a < i;) {
                                    var u, s = pr(t[a]),
                                        c = n;
                                    if ("__proto__" === s || "constructor" === s || "prototype" === s) return e;
                                    a != o && (u = l[s], (c = r ? r(u, s, l) : Bi) === Bi && (c = Ra(u) ? u : Kn(t[a + 1]) ? [] : {})), ke(l, s, c), l = l[s]
                                }
                                return e
                            }
                            var Ct = re ? function(e, t) {
                                    return re.set(e, t), e
                                } : Ai,
                                kt = D ? function(e, t) {
                                    return D(e, "toString", {
                                        configurable: !0,
                                        enumerable: !1,
                                        value: Li(t),
                                        writable: !0
                                    })
                                } : Ai;

                            function Nt(e) {
                                return fr(yi(e))
                            }

                            function Lt(e, t, n) {
                                var r = -1,
                                    a = e.length;
                                t < 0 && (t = a < -t ? 0 : a + t), (n = a < n ? a : n) < 0 && (n += a), a = n < t ? 0 : n - t >>> 0, t >>>= 0;
                                for (var i = I(a); ++r < a;) i[r] = e[r + t];
                                return i
                            }

                            function Rt(e, r) {
                                var a;
                                return je(e, function(e, t, n) {
                                    return !(a = r(e, t, n))
                                }), !!a
                            }

                            function At(e, t, n) {
                                var r = 0,
                                    a = null == e ? r : e.length;
                                if ("number" == typeof t && t == t && a <= 2147483647) {
                                    for (; r < a;) {
                                        var i = r + a >>> 1,
                                            o = e[i];
                                        null !== o && !ja(o) && (n ? o <= t : o < t) ? r = 1 + i : a = i
                                    }
                                    return a
                                }
                                return Dt(e, t, Ai, n)
                            }

                            function Dt(e, t, n, r) {
                                var a = 0,
                                    i = null == e ? 0 : e.length;
                                if (0 === i) return 0;
                                for (var o = (t = n(t)) != t, l = null === t, u = ja(t), s = t === Bi; a < i;) {
                                    var c = G((a + i) / 2),
                                        f = n(e[c]),
                                        d = f !== Bi,
                                        m = null === f,
                                        v = f == f,
                                        p = ja(f),
                                        f = o ? r || v : s ? v && (r || d) : l ? v && d && (r || !m) : u ? v && d && !m && (r || !p) : !m && !p && (r ? f <= t : f < t);
                                    f ? a = c + 1 : i = c
                                }
                                return z(i, 4294967294)
                            }

                            function Ot(e, t) {
                                for (var n = -1, r = e.length, a = 0, i = []; ++n < r;) {
                                    var o, l = e[n],
                                        u = t ? t(l) : l;
                                    n && ya(u, o) || (o = u, i[a++] = 0 === l ? 0 : l)
                                }
                                return i
                            }

                            function Ft(e) {
                                return "number" == typeof e ? e : ja(e) ? $i : +e
                            }

                            function Mt(e) {
                                if ("string" == typeof e) return e;
                                if (wa(e)) return Cl(e, Mt) + "";
                                if (ja(e)) return de ? de.call(e) : "";
                                var t = e + "";
                                return "0" == t && 1 / e == -1 / 0 ? "-0" : t
                            }

                            function Ut(e, t, n) {
                                var r = -1,
                                    a = Pl,
                                    i = e.length,
                                    o = !0,
                                    l = [],
                                    u = l;
                                if (n) o = !1, a = _l;
                                else if (200 <= i) {
                                    var s = t ? null : Pn(e);
                                    if (s) return nu(s);
                                    o = !1, a = zl, u = new we
                                } else u = t ? [] : l;
                                e: for (; ++r < i;) {
                                    var c = e[r],
                                        f = t ? t(c) : c,
                                        c = n || 0 !== c ? c : 0;
                                    if (o && f == f) {
                                        for (var d = u.length; d--;)
                                            if (u[d] === f) continue e;
                                        t && u.push(f), l.push(c)
                                    } else a(u, f, n) || (u !== l && u.push(f), l.push(c))
                                }
                                return l
                            }

                            function Gt(e, t) {
                                return null == (e = ar(e, t = $t(t, e))) || delete e[pr(Cr(t))]
                            }

                            function jt(e, t, n, r) {
                                return _t(e, t, n(Qe(e, t)), r)
                            }

                            function Bt(e, t, n, r) {
                                for (var a = e.length, i = r ? a : -1;
                                    (r ? i-- : ++i < a) && t(e[i], i, e););
                                return n ? Lt(e, r ? 0 : i, r ? i + 1 : a) : Lt(e, r ? i + 1 : 0, r ? a : i)
                            }

                            function Vt(e, t) {
                                return e instanceof ye && (e = e.value()), Nl(t, function(e, t) {
                                    return t.func.apply(t.thisArg, kl([e], t.args))
                                }, e)
                            }

                            function qt(e, t, n) {
                                var r = e.length;
                                if (r < 2) return r ? Ut(e[0]) : [];
                                for (var a = -1, i = I(r); ++a < r;)
                                    for (var o = e[a], l = -1; ++l < r;) l != a && (i[a] = Ge(i[a] || o, e[l], t, n));
                                return Ut(He(i, 1), t, n)
                            }

                            function Wt(e, t, n) {
                                for (var r = -1, a = e.length, i = t.length, o = {}; ++r < a;) {
                                    var l = r < i ? t[r] : Bi;
                                    n(o, e[r], l)
                                }
                                return o
                            }

                            function Ht(e) {
                                return Ta(e) ? e : []
                            }

                            function zt(e) {
                                return "function" == typeof e ? e : Ai
                            }

                            function $t(e, t) {
                                return wa(e) ? e : Qn(e, t) ? [e] : vr(Ya(e))
                            }
                            var Jt = xt;

                            function Kt(e, t, n) {
                                var r = e.length;
                                return n = n === Bi ? r : n, !t && r <= n ? e : Lt(e, t, n)
                            }
                            var Yt = O || function(e) {
                                return dl.clearTimeout(e)
                            };

                            function Qt(e, t) {
                                if (t) return e.slice();
                                t = e.length, t = P ? P(t) : new e.constructor(t);
                                return e.copy(t), t
                            }

                            function Zt(e) {
                                var t = new e.constructor(e.byteLength);
                                return new T(t).set(new T(e)), t
                            }

                            function Xt(e, t) {
                                t = t ? Zt(e.buffer) : e.buffer;
                                return new e.constructor(t, e.byteOffset, e.length)
                            }

                            function en(e, t) {
                                if (e !== t) {
                                    var n = e !== Bi,
                                        r = null === e,
                                        a = e == e,
                                        i = ja(e),
                                        o = t !== Bi,
                                        l = null === t,
                                        u = t == t,
                                        s = ja(t);
                                    if (!l && !s && !i && t < e || i && o && u && !l && !s || r && o && u || !n && u || !a) return 1;
                                    if (!r && !i && !s && e < t || s && n && a && !r && !i || l && n && a || !o && a || !u) return -1
                                }
                                return 0
                            }

                            function tn(e, t, n, r) {
                                for (var a = -1, i = e.length, o = n.length, l = -1, u = t.length, s = H(i - o, 0), c = I(u + s), f = !r; ++l < u;) c[l] = t[l];
                                for (; ++a < o;)(f || a < i) && (c[n[a]] = e[a]);
                                for (; s--;) c[l++] = e[a++];
                                return c
                            }

                            function nn(e, t, n, r) {
                                for (var a = -1, i = e.length, o = -1, l = n.length, u = -1, s = t.length, c = H(i - l, 0), f = I(c + s), d = !r; ++a < c;) f[a] = e[a];
                                for (var m = a; ++u < s;) f[m + u] = t[u];
                                for (; ++o < l;)(d || a < i) && (f[m + n[o]] = e[a++]);
                                return f
                            }

                            function rn(e, t) {
                                var n = -1,
                                    r = e.length;
                                for (t = t || I(r); ++n < r;) t[n] = e[n];
                                return t
                            }

                            function an(e, t, n, r) {
                                var a = !n;
                                n = n || {};
                                for (var i = -1, o = t.length; ++i < o;) {
                                    var l = t[i],
                                        u = r ? r(n[l], e[l], l, n, e) : Bi;
                                    u === Bi && (u = e[l]), (a ? Ae : ke)(n, l, u)
                                }
                                return n
                            }

                            function on(a, i) {
                                return function(e, t) {
                                    var n = wa(e) ? Sl : Le,
                                        r = i ? i() : {};
                                    return n(e, a, Gn(t, 2), r)
                                }
                            }

                            function ln(l) {
                                return xt(function(e, t) {
                                    var n = -1,
                                        r = t.length,
                                        a = 1 < r ? t[r - 1] : Bi,
                                        i = 2 < r ? t[2] : Bi,
                                        a = 3 < l.length && "function" == typeof a ? (r--, a) : Bi;
                                    for (i && Yn(t[0], t[1], i) && (a = r < 3 ? Bi : a, r = 1), e = p(e); ++n < r;) {
                                        var o = t[n];
                                        o && l(e, o, n, a)
                                    }
                                    return e
                                })
                            }

                            function un(i, o) {
                                return function(e, t) {
                                    if (null == e) return e;
                                    if (!xa(e)) return i(e, t);
                                    for (var n = e.length, r = o ? n : -1, a = p(e);
                                        (o ? r-- : ++r < n) && !1 !== t(a[r], r, a););
                                    return e
                                }
                            }

                            function sn(u) {
                                return function(e, t, n) {
                                    for (var r = -1, a = p(e), i = n(e), o = i.length; o--;) {
                                        var l = i[u ? o : ++r];
                                        if (!1 === t(a[l], l, a)) break
                                    }
                                    return e
                                }
                            }

                            function cn(r) {
                                return function(e) {
                                    var t = Zl(e = Ya(e)) ? au(e) : Bi,
                                        n = t ? t[0] : e.charAt(0),
                                        e = t ? Kt(t, 1).join("") : e.slice(1);
                                    return n[r]() + e
                                }
                            }

                            function fn(t) {
                                return function(e) {
                                    return Nl(ki(Si(e).replace(nl, "")), t, "")
                                }
                            }

                            function dn(r) {
                                return function() {
                                    var e = arguments;
                                    switch (e.length) {
                                        case 0:
                                            return new r;
                                        case 1:
                                            return new r(e[0]);
                                        case 2:
                                            return new r(e[0], e[1]);
                                        case 3:
                                            return new r(e[0], e[1], e[2]);
                                        case 4:
                                            return new r(e[0], e[1], e[2], e[3]);
                                        case 5:
                                            return new r(e[0], e[1], e[2], e[3], e[4]);
                                        case 6:
                                            return new r(e[0], e[1], e[2], e[3], e[4], e[5]);
                                        case 7:
                                            return new r(e[0], e[1], e[2], e[3], e[4], e[5], e[6])
                                    }
                                    var t = ve(r.prototype),
                                        n = r.apply(t, e);
                                    return Ra(n) ? n : t
                                }
                            }

                            function mn(i, o, l) {
                                var u = dn(i);
                                return function e() {
                                    for (var t = arguments.length, n = I(t), r = t, a = Un(e); r--;) n[r] = arguments[r];
                                    a = t < 3 && n[0] !== a && n[t - 1] !== a ? [] : tu(n, a);
                                    return (t -= a.length) < l ? xn(i, o, hn, e.placeholder, Bi, n, a, Bi, Bi, l - t) : El(this && this !== dl && this instanceof e ? u : i, this, n)
                                }
                            }

                            function vn(i) {
                                return function(e, t, n) {
                                    var r, a = p(e);
                                    xa(e) || (r = Gn(t, 3), e = si(e), t = function(e) {
                                        return r(a[e], e, a)
                                    });
                                    n = i(e, t, n);
                                    return -1 < n ? a[r ? e[n] : n] : Bi
                                }
                            }

                            function pn(u) {
                                return An(function(a) {
                                    var i = a.length,
                                        e = i,
                                        t = ge.prototype.thru;
                                    for (u && a.reverse(); e--;) {
                                        var n = a[e];
                                        if ("function" != typeof n) throw new w(Vi);
                                        t && !l && "wrapper" == Mn(n) && (l = new ge([], !0))
                                    }
                                    for (e = l ? e : i; ++e < i;) var r = Mn(n = a[e]),
                                        o = "wrapper" == r ? Fn(n) : Bi,
                                        l = o && Zn(o[0]) && 424 == o[1] && !o[4].length && 1 == o[9] ? l[Mn(o[0])].apply(l, o[3]) : 1 == n.length && Zn(n) ? l[r]() : l.thru(n);
                                    return function() {
                                        var e = arguments,
                                            t = e[0];
                                        if (l && 1 == e.length && wa(t)) return l.plant(t).value();
                                        for (var n = 0, r = i ? a[n].apply(this, e) : t; ++n < i;) r = a[n].call(this, r);
                                        return r
                                    }
                                })
                            }

                            function hn(l, u, s, c, f, d, m, v, p, h) {
                                var g = u & Hi,
                                    y = 1 & u,
                                    b = 2 & u,
                                    E = 24 & u,
                                    S = 512 & u,
                                    w = b ? Bi : dn(l);
                                return function e() {
                                    for (var t, n = I(o = arguments.length), r = o; r--;) n[r] = arguments[r];
                                    if (E && (t = function(e, t) {
                                            for (var n = e.length, r = 0; n--;) e[n] === t && ++r;
                                            return r
                                        }(n, i = Un(e))), c && (n = tn(n, c, f, E)), d && (n = nn(n, d, m, E)), o -= t, E && o < h) {
                                        var a = tu(n, i);
                                        return xn(l, u, hn, e.placeholder, s, n, a, v, p, h - o)
                                    }
                                    var i = y ? s : this,
                                        a = b ? i[l] : l,
                                        o = n.length;
                                    return v ? n = function(e, t) {
                                        for (var n = e.length, r = z(t.length, n), a = rn(e); r--;) {
                                            var i = t[r];
                                            e[r] = Kn(i, n) ? a[i] : Bi
                                        }
                                        return e
                                    }(n, v) : S && 1 < o && n.reverse(), g && p < o && (n.length = p), this && this !== dl && this instanceof e && (a = w || dn(a)), a.apply(i, n)
                                }
                            }

                            function gn(n, o) {
                                return function(e, t) {
                                    return e = e, r = n, a = o(t), i = {}, Je(e, function(e, t, n) {
                                        r(i, a(e), t, n)
                                    }), i;
                                    var r, a, i
                                }
                            }

                            function yn(r, a) {
                                return function(e, t) {
                                    var n;
                                    if (e === Bi && t === Bi) return a;
                                    if (e !== Bi && (n = e), t !== Bi) {
                                        if (n === Bi) return t;
                                        t = "string" == typeof e || "string" == typeof t ? (e = Mt(e), Mt(t)) : (e = Ft(e), Ft(t)), n = r(e, t)
                                    }
                                    return n
                                }
                            }

                            function bn(r) {
                                return An(function(e) {
                                    return e = Cl(e, Wl(Gn())), xt(function(t) {
                                        var n = this;
                                        return r(e, function(e) {
                                            return El(e, n, t)
                                        })
                                    })
                                })
                            }

                            function En(e, t) {
                                var n = (t = t === Bi ? " " : Mt(t)).length;
                                if (n < 2) return n ? It(t, e) : t;
                                n = It(t, U(e / ru(t)));
                                return Zl(t) ? Kt(au(n), 0, e).join("") : n.slice(0, e)
                            }

                            function Sn(l, e, u, s) {
                                var c = 1 & e,
                                    f = dn(l);
                                return function e() {
                                    for (var t = -1, n = arguments.length, r = -1, a = s.length, i = I(a + n), o = this && this !== dl && this instanceof e ? f : l; ++r < a;) i[r] = s[r];
                                    for (; n--;) i[r++] = arguments[++t];
                                    return El(o, c ? u : this, i)
                                }
                            }

                            function wn(r) {
                                return function(e, t, n) {
                                    return n && "number" != typeof n && Yn(e, t, n) && (t = n = Bi), e = Ha(e), t === Bi ? (t = e, e = 0) : t = Ha(t),
                                        function(e, t, n, r) {
                                            for (var a = -1, i = H(U((t - e) / (n || 1)), 0), o = I(i); i--;) o[r ? i : ++a] = e, e += n;
                                            return o
                                        }(e, t, n = n === Bi ? e < t ? 1 : -1 : Ha(n), r)
                                }
                            }

                            function In(n) {
                                return function(e, t) {
                                    return "string" == typeof e && "string" == typeof t || (e = Ja(e), t = Ja(t)), n(e, t)
                                }
                            }

                            function xn(e, t, n, r, a, i, o, l, u, s) {
                                var c = 8 & t;
                                t |= c ? 32 : 64, 4 & (t &= ~(c ? 64 : 32)) || (t &= -4);
                                s = [e, t, a, c ? i : Bi, c ? o : Bi, c ? Bi : i, c ? Bi : o, l, u, s], n = n.apply(Bi, s);
                                return Zn(e) && or(n, s), n.placeholder = r, sr(n, e, t)
                            }

                            function Tn(e) {
                                var r = a[e];
                                return function(e, t) {
                                    if (e = Ja(e), (t = null == t ? 0 : z(za(t), 292)) && V(e)) {
                                        var n = (Ya(e) + "e").split("e");
                                        return +((n = (Ya(r(n[0] + "e" + (+n[1] + t))) + "e").split("e"))[0] + "e" + (+n[1] - t))
                                    }
                                    return r(e)
                                }
                            }
                            var Pn = ee && 1 / nu(new ee([, -0]))[1] == 1 / 0 ? function(e) {
                                return new ee(e)
                            } : Fi;

                            function _n(i) {
                                return function(e) {
                                    var t, n, r, a = Hn(e);
                                    return a == ro ? Xl(e) : a == uo ? (a = e, t = -1, n = Array(a.size), a.forEach(function(e) {
                                        n[++t] = [e, e]
                                    }), n) : Cl(i(r = e), function(e) {
                                        return [e, r[e]]
                                    })
                                }
                            }

                            function Cn(e, t, n, r, a, i, o, l) {
                                var u = 2 & t;
                                if (!u && "function" != typeof e) throw new w(Vi);
                                var s = r ? r.length : 0;
                                s || (t &= -97, r = a = Bi), o = o === Bi ? o : H(za(o), 0), l = l === Bi ? l : za(l), s -= a ? a.length : 0, 64 & t && (v = r, p = a, r = a = Bi);
                                var c, f, d, m, v, p, h, g, y, b, E = u ? Bi : Fn(e),
                                    S = [e, t, n, r, a, v, p, i, o, l];
                                return E && (f = E, m = (c = S)[1], v = f[1], i = (p = m | v) < 131, o = v == Hi && 8 == m || v == Hi && 256 == m && c[7].length <= f[8] || 384 == v && f[7].length <= f[8] && 8 == m, (i || o) && (1 & v && (c[2] = f[2], p |= 1 & m ? 0 : 4), (m = f[3]) && (d = c[3], c[3] = d ? tn(d, m, f[4]) : m, c[4] = d ? tu(c[3], Wi) : f[4]), (m = f[5]) && (d = c[5], c[5] = d ? nn(d, m, f[6]) : m, c[6] = d ? tu(c[5], Wi) : f[6]), (m = f[7]) && (c[7] = m), v & Hi && (c[8] = null == c[8] ? f[8] : z(c[8], f[8])), null == c[9] && (c[9] = f[9]), c[0] = f[0], c[1] = p)), e = S[0], t = S[1], n = S[2], r = S[3], a = S[4], !(l = S[9] = S[9] === Bi ? u ? 0 : e.length : H(S[9] - s, 0)) && 24 & t && (t &= -25), n = t && 1 != t ? 8 == t || 16 == t ? mn(e, t, l) : 32 != t && 33 != t || a.length ? hn.apply(Bi, S) : Sn(e, t, n, r) : (g = n, y = 1 & t, b = dn(h = e), function e() {
                                    return (this && this !== dl && this instanceof e ? b : h).apply(y ? g : this, arguments)
                                }), sr((E ? Ct : or)(n, S), e, t)
                            }

                            function kn(e, t, n, r) {
                                return e === Bi || ya(e, v[n]) && !y.call(r, n) ? t : e
                            }

                            function Nn(e, t, n, r, a, i) {
                                return Ra(e) && Ra(t) && (i.set(t, e), ht(e, t, Bi, Nn, i), i.delete(t)), e
                            }

                            function Ln(e) {
                                return Fa(e) ? Bi : e
                            }

                            function Rn(e, t, n, r, a, i) {
                                var o = 1 & n,
                                    l = e.length,
                                    u = t.length;
                                if (l != u && !(o && l < u)) return !1;
                                var s = i.get(e),
                                    u = i.get(t);
                                if (s && u) return s == t && u == e;
                                var c = -1,
                                    f = !0,
                                    d = 2 & n ? new we : Bi;
                                for (i.set(e, t), i.set(t, e); ++c < l;) {
                                    var m, v = e[c],
                                        p = t[c];
                                    if (r && (m = o ? r(p, v, c, t, e, i) : r(v, p, c, e, t, i)), m !== Bi) {
                                        if (m) continue;
                                        f = !1;
                                        break
                                    }
                                    if (d) {
                                        if (!Rl(t, function(e, t) {
                                                return !zl(d, t) && (v === e || a(v, e, n, r, i)) && d.push(t)
                                            })) {
                                            f = !1;
                                            break
                                        }
                                    } else if (v !== p && !a(v, p, n, r, i)) {
                                        f = !1;
                                        break
                                    }
                                }
                                return i.delete(e), i.delete(t), f
                            }

                            function An(e) {
                                return ur(rr(e, Bi, Ir), e + "")
                            }

                            function Dn(e) {
                                return Ze(e, si, qn)
                            }

                            function On(e) {
                                return Ze(e, ci, Wn)
                            }
                            var Fn = re ? function(e) {
                                return re.get(e)
                            } : Fi;

                            function Mn(e) {
                                for (var t = e.name + "", n = ae[t], r = y.call(ae, t) ? n.length : 0; r--;) {
                                    var a = n[r],
                                        i = a.func;
                                    if (null == i || i == e) return a.name
                                }
                                return t
                            }

                            function Un(e) {
                                return (y.call(me, "placeholder") ? me : e).placeholder
                            }

                            function Gn() {
                                var e = (e = me.iteratee || Di) === Di ? st : e;
                                return arguments.length ? e(arguments[0], arguments[1]) : e
                            }

                            function jn(e, t) {
                                var n, r = e.__data__;
                                return ("string" == (e = typeof(n = t)) || "number" == e || "symbol" == e || "boolean" == e ? "__proto__" !== n : null === n) ? r["string" == typeof t ? "string" : "hash"] : r.map
                            }

                            function Bn(e) {
                                for (var t = si(e), n = t.length; n--;) {
                                    var r = t[n],
                                        a = e[r];
                                    t[n] = [r, a, tr(a)]
                                }
                                return t
                            }

                            function Vn(e, t) {
                                t = t, t = null == (e = e) ? Bi : e[t];
                                return ut(t) ? t : Bi
                            }
                            var qn = j ? function(t) {
                                    return null == t ? [] : (t = p(t), Tl(j(t), function(e) {
                                        return k.call(t, e)
                                    }))
                                } : Ui,
                                Wn = j ? function(e) {
                                    for (var t = []; e;) kl(t, qn(e)), e = _(e);
                                    return t
                                } : Ui,
                                Hn = Xe;

                            function zn(e, t, n) {
                                for (var r = -1, a = (t = $t(t, e)).length, i = !1; ++r < a;) {
                                    var o = pr(t[r]);
                                    if (!(i = null != e && n(e, o))) break;
                                    e = e[o]
                                }
                                return i || ++r != a ? i : !!(a = null == e ? 0 : e.length) && La(a) && Kn(o, a) && (wa(e) || Sa(e))
                            }

                            function $n(e) {
                                return "function" != typeof e.constructor || er(e) ? {} : ve(_(e))
                            }

                            function Jn(e) {
                                return wa(e) || Sa(e) || !!(L && e && e[L])
                            }

                            function Kn(e, t) {
                                var n = typeof e;
                                return !!(t = null == t ? zi : t) && ("number" == n || "symbol" != n && Zo.test(e)) && -1 < e && e % 1 == 0 && e < t
                            }

                            function Yn(e, t, n) {
                                if (Ra(n)) {
                                    var r = typeof t;
                                    return ("number" == r ? xa(n) && Kn(t, n.length) : "string" == r && t in n) && ya(n[t], e)
                                }
                            }

                            function Qn(e, t) {
                                if (!wa(e)) {
                                    var n = typeof e;
                                    return "number" == n || "symbol" == n || "boolean" == n || null == e || ja(e) || (Oo.test(e) || !Do.test(e) || null != t && e in p(t))
                                }
                            }

                            function Zn(e) {
                                var t = Mn(e),
                                    n = me[t];
                                if ("function" == typeof n && t in ye.prototype) {
                                    if (e === n) return 1;
                                    n = Fn(n);
                                    return n && e === n[0]
                                }
                            }(Q && Hn(new Q(new ArrayBuffer(1))) != vo || Z && Hn(new Z) != ro || X && Hn(X.resolve()) != oo || ee && Hn(new ee) != uo || te && Hn(new te) != fo) && (Hn = function(e) {
                                var t = Xe(e),
                                    e = t == io ? e.constructor : Bi,
                                    e = e ? hr(e) : "";
                                if (e) switch (e) {
                                    case ie:
                                        return vo;
                                    case oe:
                                        return ro;
                                    case le:
                                        return oo;
                                    case ue:
                                        return uo;
                                    case se:
                                        return fo
                                }
                                return t
                            });
                            var Xn = o ? ka : Gi;

                            function er(e) {
                                var t = e && e.constructor;
                                return e === ("function" == typeof t && t.prototype || v)
                            }

                            function tr(e) {
                                return e == e && !Ra(e)
                            }

                            function nr(t, n) {
                                return function(e) {
                                    return null != e && (e[t] === n && (n !== Bi || t in p(e)))
                                }
                            }

                            function rr(i, o, l) {
                                return o = H(o === Bi ? i.length - 1 : o, 0),
                                    function() {
                                        for (var e = arguments, t = -1, n = H(e.length - o, 0), r = I(n); ++t < n;) r[t] = e[o + t];
                                        t = -1;
                                        for (var a = I(o + 1); ++t < o;) a[t] = e[t];
                                        return a[o] = l(r), El(i, this, a)
                                    }
                            }

                            function ar(e, t) {
                                return t.length < 2 ? e : Qe(e, Lt(t, 0, -1))
                            }

                            function ir(e, t) {
                                if (("constructor" !== t || "function" != typeof e[t]) && "__proto__" != t) return e[t]
                            }
                            var or = cr(Ct),
                                lr = M || function(e, t) {
                                    return dl.setTimeout(e, t)
                                },
                                ur = cr(kt);

                            function sr(e, t, n) {
                                var r, a, t = t + "";
                                return ur(e, function(e, t) {
                                    var n = t.length;
                                    if (!n) return e;
                                    var r = n - 1;
                                    return t[r] = (1 < n ? "& " : "") + t[r], t = t.join(2 < n ? ", " : " "), e.replace(jo, "{\n/* [wrapped with " + t + "] */\n")
                                }(t, (r = (t = (t = t).match(Bo)) ? t[1].split(Vo) : [], a = n, wl(Ki, function(e) {
                                    var t = "_." + e[0];
                                    a & e[1] && !Pl(r, t) && r.push(t)
                                }), r.sort())))
                            }

                            function cr(n) {
                                var r = 0,
                                    a = 0;
                                return function() {
                                    var e = $(),
                                        t = 16 - (e - a);
                                    if (a = e, 0 < t) {
                                        if (800 <= ++r) return arguments[0]
                                    } else r = 0;
                                    return n.apply(Bi, arguments)
                                }
                            }

                            function fr(e, t) {
                                var n = -1,
                                    r = e.length,
                                    a = r - 1;
                                for (t = t === Bi ? r : t; ++n < t;) {
                                    var i = wt(n, a),
                                        o = e[i];
                                    e[i] = e[n], e[n] = o
                                }
                                return e.length = t, e
                            }
                            var dr, mr, vr = (mr = (dr = da(dr = function(e) {
                                var a = [];
                                return 46 === e.charCodeAt(0) && a.push(""), e.replace(Fo, function(e, t, n, r) {
                                    a.push(n ? r.replace(Ho, "$1") : t || e)
                                }), a
                            }, function(e) {
                                return 500 === mr.size && mr.clear(), e
                            })).cache, dr);

                            function pr(e) {
                                if ("string" == typeof e || ja(e)) return e;
                                var t = e + "";
                                return "0" == t && 1 / e == -1 / 0 ? "-0" : t
                            }

                            function hr(e) {
                                if (null != e) {
                                    try {
                                        return l.call(e)
                                    } catch (e) {}
                                    try {
                                        return e + ""
                                    } catch (e) {}
                                }
                                return ""
                            }

                            function gr(e) {
                                if (e instanceof ye) return e.clone();
                                var t = new ge(e.__wrapped__, e.__chain__);
                                return t.__actions__ = rn(e.__actions__), t.__index__ = e.__index__, t.__values__ = e.__values__, t
                            }
                            var yr = xt(function(e, t) {
                                    return Ta(e) ? Ge(e, He(t, 1, Ta, !0)) : []
                                }),
                                br = xt(function(e, t) {
                                    var n = Cr(t);
                                    return Ta(n) && (n = Bi), Ta(e) ? Ge(e, He(t, 1, Ta, !0), Gn(n, 2)) : []
                                }),
                                Er = xt(function(e, t) {
                                    var n = Cr(t);
                                    return Ta(n) && (n = Bi), Ta(e) ? Ge(e, He(t, 1, Ta, !0), Bi, n) : []
                                });

                            function Sr(e, t, n) {
                                var r = null == e ? 0 : e.length;
                                if (!r) return -1;
                                n = null == n ? 0 : za(n);
                                return n < 0 && (n = H(r + n, 0)), Dl(e, Gn(t, 3), n)
                            }

                            function wr(e, t, n) {
                                var r = null == e ? 0 : e.length;
                                if (!r) return -1;
                                var a = r - 1;
                                return n !== Bi && (a = za(n), a = n < 0 ? H(r + a, 0) : z(a, r - 1)), Dl(e, Gn(t, 3), a, !0)
                            }

                            function Ir(e) {
                                return (null == e ? 0 : e.length) ? He(e, 1) : []
                            }

                            function xr(e) {
                                return e && e.length ? e[0] : Bi
                            }
                            var Tr = xt(function(e) {
                                    var t = Cl(e, Ht);
                                    return t.length && t[0] === e[0] ? rt(t) : []
                                }),
                                Pr = xt(function(e) {
                                    var t = Cr(e),
                                        n = Cl(e, Ht);
                                    return t === Cr(n) ? t = Bi : n.pop(), n.length && n[0] === e[0] ? rt(n, Gn(t, 2)) : []
                                }),
                                _r = xt(function(e) {
                                    var t = Cr(e),
                                        n = Cl(e, Ht);
                                    return (t = "function" == typeof t ? t : Bi) && n.pop(), n.length && n[0] === e[0] ? rt(n, Bi, t) : []
                                });

                            function Cr(e) {
                                var t = null == e ? 0 : e.length;
                                return t ? e[t - 1] : Bi
                            }
                            var kr = xt(Nr);

                            function Nr(e, t) {
                                return e && e.length && t && t.length ? Et(e, t) : e
                            }
                            var Lr = An(function(e, t) {
                                var n = null == e ? 0 : e.length,
                                    r = De(e, t);
                                return St(e, Cl(t, function(e) {
                                    return Kn(e, n) ? +e : e
                                }).sort(en)), r
                            });

                            function Rr(e) {
                                return null == e ? e : Y.call(e)
                            }
                            var Ar = xt(function(e) {
                                    return Ut(He(e, 1, Ta, !0))
                                }),
                                Dr = xt(function(e) {
                                    var t = Cr(e);
                                    return Ta(t) && (t = Bi), Ut(He(e, 1, Ta, !0), Gn(t, 2))
                                }),
                                Or = xt(function(e) {
                                    var t = "function" == typeof(t = Cr(e)) ? t : Bi;
                                    return Ut(He(e, 1, Ta, !0), Bi, t)
                                });

                            function Fr(t) {
                                if (!t || !t.length) return [];
                                var n = 0;
                                return t = Tl(t, function(e) {
                                    return Ta(e) && (n = H(e.length, n), 1)
                                }), Vl(n, function(e) {
                                    return Cl(t, Gl(e))
                                })
                            }

                            function Mr(e, t) {
                                if (!e || !e.length) return [];
                                e = Fr(e);
                                return null == t ? e : Cl(e, function(e) {
                                    return El(t, Bi, e)
                                })
                            }
                            var Ur = xt(function(e, t) {
                                    return Ta(e) ? Ge(e, t) : []
                                }),
                                Gr = xt(function(e) {
                                    return qt(Tl(e, Ta))
                                }),
                                jr = xt(function(e) {
                                    var t = Cr(e);
                                    return Ta(t) && (t = Bi), qt(Tl(e, Ta), Gn(t, 2))
                                }),
                                Br = xt(function(e) {
                                    var t = "function" == typeof(t = Cr(e)) ? t : Bi;
                                    return qt(Tl(e, Ta), Bi, t)
                                }),
                                Vr = xt(Fr);
                            var qr = xt(function(e) {
                                var t = e.length,
                                    t = "function" == typeof(t = 1 < t ? e[t - 1] : Bi) ? (e.pop(), t) : Bi;
                                return Mr(e, t)
                            });

                            function Wr(e) {
                                e = me(e);
                                return e.__chain__ = !0, e
                            }

                            function Hr(e, t) {
                                return t(e)
                            }
                            var zr = An(function(t) {
                                function e(e) {
                                    return De(e, t)
                                }
                                var n = t.length,
                                    r = n ? t[0] : 0,
                                    a = this.__wrapped__;
                                return !(1 < n || this.__actions__.length) && a instanceof ye && Kn(r) ? ((a = a.slice(r, +r + (n ? 1 : 0))).__actions__.push({
                                    func: Hr,
                                    args: [e],
                                    thisArg: Bi
                                }), new ge(a, this.__chain__).thru(function(e) {
                                    return n && !e.length && e.push(Bi), e
                                })) : this.thru(e)
                            });
                            var $r = on(function(e, t, n) {
                                y.call(e, n) ? ++e[n] : Ae(e, n, 1)
                            });
                            var Jr = vn(Sr),
                                Kr = vn(wr);

                            function Yr(e, t) {
                                return (wa(e) ? wl : je)(e, Gn(t, 3))
                            }

                            function Qr(e, t) {
                                return (wa(e) ? Il : Be)(e, Gn(t, 3))
                            }
                            var Zr = on(function(e, t, n) {
                                y.call(e, n) ? e[n].push(t) : Ae(e, n, [t])
                            });
                            var Xr = xt(function(e, t, n) {
                                    var r = -1,
                                        a = "function" == typeof t,
                                        i = xa(e) ? I(e.length) : [];
                                    return je(e, function(e) {
                                        i[++r] = a ? El(t, e, n) : at(e, t, n)
                                    }), i
                                }),
                                ea = on(function(e, t, n) {
                                    Ae(e, n, t)
                                });

                            function ta(e, t) {
                                return (wa(e) ? Cl : mt)(e, Gn(t, 3))
                            }
                            var na = on(function(e, t, n) {
                                e[n ? 0 : 1].push(t)
                            }, function() {
                                return [
                                    [],
                                    []
                                ]
                            });
                            var ra = xt(function(e, t) {
                                    if (null == e) return [];
                                    var n = t.length;
                                    return 1 < n && Yn(e, t[0], t[1]) ? t = [] : 2 < n && Yn(t[0], t[1], t[2]) && (t = [t[0]]), yt(e, He(t, 1), [])
                                }),
                                aa = F || function() {
                                    return dl.Date.now()
                                };

                            function ia(e, t, n) {
                                return t = n ? Bi : t, t = e && null == t ? e.length : t, Cn(e, Hi, Bi, Bi, Bi, Bi, t)
                            }

                            function oa(e, t) {
                                var n;
                                if ("function" != typeof t) throw new w(Vi);
                                return e = za(e),
                                    function() {
                                        return 0 < --e && (n = t.apply(this, arguments)), e <= 1 && (t = Bi), n
                                    }
                            }
                            var la = xt(function(e, t, n) {
                                    var r, a = 1;
                                    return n.length && (r = tu(n, Un(la)), a |= 32), Cn(e, a, t, n, r)
                                }),
                                ua = xt(function(e, t, n) {
                                    var r, a = 3;
                                    return n.length && (r = tu(n, Un(ua)), a |= 32), Cn(t, a, e, n, r)
                                });

                            function sa(r, n, e) {
                                var a, i, o, l, u, s, c = 0,
                                    f = !1,
                                    d = !1,
                                    t = !0;
                                if ("function" != typeof r) throw new w(Vi);

                                function m(e) {
                                    var t = a,
                                        n = i;
                                    return a = i = Bi, c = e, l = r.apply(n, t)
                                }

                                function v(e) {
                                    var t = e - s;
                                    return s === Bi || n <= t || t < 0 || d && o <= e - c
                                }

                                function p() {
                                    var e, t = aa();
                                    if (v(t)) return h(t);
                                    u = lr(p, (t = n - ((e = t) - s), d ? z(t, o - (e - c)) : t))
                                }

                                function h(e) {
                                    return u = Bi, t && a ? m(e) : (a = i = Bi, l)
                                }

                                function g() {
                                    var e = aa(),
                                        t = v(e);
                                    if (a = arguments, i = this, s = e, t) {
                                        if (u === Bi) return c = t = s, u = lr(p, n), f ? m(t) : l;
                                        if (d) return Yt(u), u = lr(p, n), m(s)
                                    }
                                    return u === Bi && (u = lr(p, n)), l
                                }
                                return n = Ja(n) || 0, Ra(e) && (f = !!e.leading, d = "maxWait" in e, o = d ? H(Ja(e.maxWait) || 0, n) : o, t = "trailing" in e ? !!e.trailing : t), g.cancel = function() {
                                    u !== Bi && Yt(u), c = 0, a = s = i = u = Bi
                                }, g.flush = function() {
                                    return u === Bi ? l : h(aa())
                                }, g
                            }
                            var ca = xt(function(e, t) {
                                    return Ue(e, 1, t)
                                }),
                                fa = xt(function(e, t, n) {
                                    return Ue(e, Ja(t) || 0, n)
                                });

                            function da(r, a) {
                                if ("function" != typeof r || null != a && "function" != typeof a) throw new w(Vi);
                                var i = function() {
                                    var e = arguments,
                                        t = a ? a.apply(this, e) : e[0],
                                        n = i.cache;
                                    if (n.has(t)) return n.get(t);
                                    e = r.apply(this, e);
                                    return i.cache = n.set(t, e) || n, e
                                };
                                return i.cache = new(da.Cache || Se), i
                            }

                            function ma(t) {
                                if ("function" != typeof t) throw new w(Vi);
                                return function() {
                                    var e = arguments;
                                    switch (e.length) {
                                        case 0:
                                            return !t.call(this);
                                        case 1:
                                            return !t.call(this, e[0]);
                                        case 2:
                                            return !t.call(this, e[0], e[1]);
                                        case 3:
                                            return !t.call(this, e[0], e[1], e[2])
                                    }
                                    return !t.apply(this, e)
                                }
                            }
                            da.Cache = Se;
                            var va = Jt(function(r, a) {
                                    var i = (a = 1 == a.length && wa(a[0]) ? Cl(a[0], Wl(Gn())) : Cl(He(a, 1), Wl(Gn()))).length;
                                    return xt(function(e) {
                                        for (var t = -1, n = z(e.length, i); ++t < n;) e[t] = a[t].call(this, e[t]);
                                        return El(r, this, e)
                                    })
                                }),
                                pa = xt(function(e, t) {
                                    var n = tu(t, Un(pa));
                                    return Cn(e, 32, Bi, t, n)
                                }),
                                ha = xt(function(e, t) {
                                    var n = tu(t, Un(ha));
                                    return Cn(e, 64, Bi, t, n)
                                }),
                                ga = An(function(e, t) {
                                    return Cn(e, 256, Bi, Bi, Bi, t)
                                });

                            function ya(e, t) {
                                return e === t || e != e && t != t
                            }
                            var ba = In(et),
                                Ea = In(function(e, t) {
                                    return t <= e
                                }),
                                Sa = it(function() {
                                    return arguments
                                }()) ? it : function(e) {
                                    return Aa(e) && y.call(e, "callee") && !k.call(e, "callee")
                                },
                                wa = I.isArray,
                                Ia = vl ? Wl(vl) : function(e) {
                                    return Aa(e) && Xe(e) == mo
                                };

                            function xa(e) {
                                return null != e && La(e.length) && !ka(e)
                            }

                            function Ta(e) {
                                return Aa(e) && xa(e)
                            }
                            var Pa = B || Gi,
                                _a = pl ? Wl(pl) : function(e) {
                                    return Aa(e) && Xe(e) == Xi
                                };

                            function Ca(e) {
                                if (!Aa(e)) return !1;
                                var t = Xe(e);
                                return t == eo || "[object DOMException]" == t || "string" == typeof e.message && "string" == typeof e.name && !Fa(e)
                            }

                            function ka(e) {
                                if (!Ra(e)) return !1;
                                e = Xe(e);
                                return e == to || e == no || "[object AsyncFunction]" == e || "[object Proxy]" == e
                            }

                            function Na(e) {
                                return "number" == typeof e && e == za(e)
                            }

                            function La(e) {
                                return "number" == typeof e && -1 < e && e % 1 == 0 && e <= zi
                            }

                            function Ra(e) {
                                var t = typeof e;
                                return null != e && ("object" == t || "function" == t)
                            }

                            function Aa(e) {
                                return null != e && "object" == typeof e
                            }
                            var Da = hl ? Wl(hl) : function(e) {
                                return Aa(e) && Hn(e) == ro
                            };

                            function Oa(e) {
                                return "number" == typeof e || Aa(e) && Xe(e) == ao
                            }

                            function Fa(e) {
                                if (!Aa(e) || Xe(e) != io) return !1;
                                e = _(e);
                                if (null === e) return !0;
                                e = y.call(e, "constructor") && e.constructor;
                                return "function" == typeof e && e instanceof e && l.call(e) == g
                            }
                            var Ma = gl ? Wl(gl) : function(e) {
                                return Aa(e) && Xe(e) == lo
                            };
                            var Ua = yl ? Wl(yl) : function(e) {
                                return Aa(e) && Hn(e) == uo
                            };

                            function Ga(e) {
                                return "string" == typeof e || !wa(e) && Aa(e) && Xe(e) == so
                            }

                            function ja(e) {
                                return "symbol" == typeof e || Aa(e) && Xe(e) == co
                            }
                            var Ba = bl ? Wl(bl) : function(e) {
                                return Aa(e) && La(e.length) && !!ul[Xe(e)]
                            };
                            var Va = In(dt),
                                qa = In(function(e, t) {
                                    return e <= t
                                });

                            function Wa(e) {
                                if (!e) return [];
                                if (xa(e)) return (Ga(e) ? au : rn)(e);
                                if (R && e[R]) return function(e) {
                                    for (var t, n = []; !(t = e.next()).done;) n.push(t.value);
                                    return n
                                }(e[R]());
                                var t = Hn(e);
                                return (t == ro ? Xl : t == uo ? nu : yi)(e)
                            }

                            function Ha(e) {
                                return e ? (e = Ja(e)) !== 1 / 0 && e !== -1 / 0 ? e == e ? e : 0 : 17976931348623157e292 * (e < 0 ? -1 : 1) : 0 === e ? e : 0
                            }

                            function za(e) {
                                var t = Ha(e),
                                    e = t % 1;
                                return t == t ? e ? t - e : t : 0
                            }

                            function $a(e) {
                                return e ? Oe(za(e), 0, Ji) : 0
                            }

                            function Ja(e) {
                                if ("number" == typeof e) return e;
                                if (ja(e)) return $i;
                                if (Ra(e) && (e = Ra(t = "function" == typeof e.valueOf ? e.valueOf() : e) ? t + "" : t), "string" != typeof e) return 0 === e ? e : +e;
                                e = ql(e);
                                var t = Ko.test(e);
                                return t || Qo.test(e) ? fl(e.slice(2), t ? 2 : 8) : Jo.test(e) ? $i : +e
                            }

                            function Ka(e) {
                                return an(e, ci(e))
                            }

                            function Ya(e) {
                                return null == e ? "" : Mt(e)
                            }
                            var Qa = ln(function(e, t) {
                                    if (er(t) || xa(t)) an(t, si(t), e);
                                    else
                                        for (var n in t) y.call(t, n) && ke(e, n, t[n])
                                }),
                                Za = ln(function(e, t) {
                                    an(t, ci(t), e)
                                }),
                                Xa = ln(function(e, t, n, r) {
                                    an(t, ci(t), e, r)
                                }),
                                ei = ln(function(e, t, n, r) {
                                    an(t, si(t), e, r)
                                }),
                                ti = An(De);
                            var ni = xt(function(e, t) {
                                    e = p(e);
                                    var n = -1,
                                        r = t.length,
                                        a = 2 < r ? t[2] : Bi;
                                    for (a && Yn(t[0], t[1], a) && (r = 1); ++n < r;)
                                        for (var i = t[n], o = ci(i), l = -1, u = o.length; ++l < u;) {
                                            var s = o[l],
                                                c = e[s];
                                            (c === Bi || ya(c, v[s]) && !y.call(e, s)) && (e[s] = i[s])
                                        }
                                    return e
                                }),
                                ri = xt(function(e) {
                                    return e.push(Bi, Nn), El(di, Bi, e)
                                });

                            function ai(e, t, n) {
                                t = null == e ? Bi : Qe(e, t);
                                return t === Bi ? n : t
                            }

                            function ii(e, t) {
                                return null != e && zn(e, t, nt)
                            }
                            var oi = gn(function(e, t, n) {
                                    null != t && "function" != typeof t.toString && (t = h.call(t)), e[t] = n
                                }, Li(Ai)),
                                li = gn(function(e, t, n) {
                                    null != t && "function" != typeof t.toString && (t = h.call(t)), y.call(e, t) ? e[t].push(n) : e[t] = [n]
                                }, Gn),
                                ui = xt(at);

                            function si(e) {
                                return (xa(e) ? xe : ct)(e)
                            }

                            function ci(e) {
                                return xa(e) ? xe(e, !0) : ft(e)
                            }
                            var fi = ln(function(e, t, n) {
                                    ht(e, t, n)
                                }),
                                di = ln(function(e, t, n, r) {
                                    ht(e, t, n, r)
                                }),
                                mi = An(function(t, e) {
                                    var n = {};
                                    if (null == t) return n;
                                    var r = !1;
                                    e = Cl(e, function(e) {
                                        return e = $t(e, t), r = r || 1 < e.length, e
                                    }), an(t, On(t), n), r && (n = Fe(n, 7, Ln));
                                    for (var a = e.length; a--;) Gt(n, e[a]);
                                    return n
                                });
                            var vi = An(function(e, t) {
                                return null == e ? {} : bt(n = e, t, function(e, t) {
                                    return ii(n, t)
                                });
                                var n
                            });

                            function pi(e, n) {
                                if (null == e) return {};
                                var t = Cl(On(e), function(e) {
                                    return [e]
                                });
                                return n = Gn(n), bt(e, t, function(e, t) {
                                    return n(e, t[0])
                                })
                            }
                            var hi = _n(si),
                                gi = _n(ci);

                            function yi(e) {
                                return null == e ? [] : Hl(e, si(e))
                            }
                            var bi = fn(function(e, t, n) {
                                return t = t.toLowerCase(), e + (n ? Ei(t) : t)
                            });

                            function Ei(e) {
                                return Ci(Ya(e).toLowerCase())
                            }

                            function Si(e) {
                                return (e = Ya(e)) && e.replace(Xo, Kl).replace(rl, "")
                            }
                            var wi = fn(function(e, t, n) {
                                    return e + (n ? "-" : "") + t.toLowerCase()
                                }),
                                Ii = fn(function(e, t, n) {
                                    return e + (n ? " " : "") + t.toLowerCase()
                                }),
                                xi = cn("toLowerCase");
                            var Ti = fn(function(e, t, n) {
                                return e + (n ? "_" : "") + t.toLowerCase()
                            });
                            var Pi = fn(function(e, t, n) {
                                return e + (n ? " " : "") + Ci(t)
                            });
                            var _i = fn(function(e, t, n) {
                                    return e + (n ? " " : "") + t.toUpperCase()
                                }),
                                Ci = cn("toUpperCase");

                            function ki(e, t, n) {
                                return e = Ya(e), (t = n ? Bi : t) === Bi ? (n = e, il.test(n) ? e.match(al) || [] : e.match(qo) || []) : e.match(t) || []
                            }
                            var Ni = xt(function(e, t) {
                                    try {
                                        return El(e, Bi, t)
                                    } catch (e) {
                                        return Ca(e) ? e : new f(e)
                                    }
                                }),
                                r = An(function(t, e) {
                                    return wl(e, function(e) {
                                        e = pr(e), Ae(t, e, la(t[e], t))
                                    }), t
                                });

                            function Li(e) {
                                return function() {
                                    return e
                                }
                            }
                            var Ri = pn(),
                                S = pn(!0);

                            function Ai(e) {
                                return e
                            }

                            function Di(e) {
                                return st("function" == typeof e ? e : Fe(e, 1))
                            }
                            n = xt(function(t, n) {
                                return function(e) {
                                    return at(e, t, n)
                                }
                            }), t = xt(function(t, n) {
                                return function(e) {
                                    return at(t, e, n)
                                }
                            });

                            function Oi(r, t, e) {
                                var n = si(t),
                                    a = Ye(t, n);
                                null != e || Ra(t) && (a.length || !n.length) || (e = t, t = r, r = this, a = Ye(t, si(t)));
                                var i = !(Ra(e) && "chain" in e && !e.chain),
                                    o = ka(r);
                                return wl(a, function(e) {
                                    var n = t[e];
                                    r[e] = n, o && (r.prototype[e] = function() {
                                        var e = this.__chain__;
                                        if (i || e) {
                                            var t = r(this.__wrapped__);
                                            return (t.__actions__ = rn(this.__actions__)).push({
                                                func: n,
                                                args: arguments,
                                                thisArg: r
                                            }), t.__chain__ = e, t
                                        }
                                        return n.apply(r, kl([this.value()], arguments))
                                    })
                                }), r
                            }

                            function Fi() {}
                            x = bn(Cl), ce = bn(xl), O = bn(Rl);

                            function Mi(e) {
                                return Qn(e) ? Gl(pr(e)) : (t = e, function(e) {
                                    return Qe(e, t)
                                });
                                var t
                            }
                            Q = wn(), X = wn(!0);

                            function Ui() {
                                return []
                            }

                            function Gi() {
                                return !1
                            }
                            te = yn(function(e, t) {
                                return e + t
                            }, 0), o = Tn("ceil"), M = yn(function(e, t) {
                                return e / t
                            }, 1), kt = Tn("floor");
                            var ji, F = yn(function(e, t) {
                                    return e * t
                                }, 1),
                                Jt = Tn("round"),
                                B = yn(function(e, t) {
                                    return e - t
                                }, 0);
                            return me.after = function(e, t) {
                                if ("function" != typeof t) throw new w(Vi);
                                return e = za(e),
                                    function() {
                                        if (--e < 1) return t.apply(this, arguments)
                                    }
                            }, me.ary = ia, me.assign = Qa, me.assignIn = Za, me.assignInWith = Xa, me.assignWith = ei, me.at = ti, me.before = oa, me.bind = la, me.bindAll = r, me.bindKey = ua, me.castArray = function() {
                                if (!arguments.length) return [];
                                var e = arguments[0];
                                return wa(e) ? e : [e]
                            }, me.chain = Wr, me.chunk = function(e, t, n) {
                                t = (n ? Yn(e, t, n) : t === Bi) ? 1 : H(za(t), 0);
                                var r = null == e ? 0 : e.length;
                                if (!r || t < 1) return [];
                                for (var a = 0, i = 0, o = I(U(r / t)); a < r;) o[i++] = Lt(e, a, a += t);
                                return o
                            }, me.compact = function(e) {
                                for (var t = -1, n = null == e ? 0 : e.length, r = 0, a = []; ++t < n;) {
                                    var i = e[t];
                                    i && (a[r++] = i)
                                }
                                return a
                            }, me.concat = function() {
                                var e = arguments.length;
                                if (!e) return [];
                                for (var t = I(e - 1), n = arguments[0], r = e; r--;) t[r - 1] = arguments[r];
                                return kl(wa(n) ? rn(n) : [n], He(t, 1))
                            }, me.cond = function(r) {
                                var a = null == r ? 0 : r.length,
                                    t = Gn();
                                return r = a ? Cl(r, function(e) {
                                    if ("function" != typeof e[1]) throw new w(Vi);
                                    return [t(e[0]), e[1]]
                                }) : [], xt(function(e) {
                                    for (var t = -1; ++t < a;) {
                                        var n = r[t];
                                        if (El(n[0], this, e)) return El(n[1], this, e)
                                    }
                                })
                            }, me.conforms = function(e) {
                                return t = Fe(e, 1), n = si(t),
                                    function(e) {
                                        return Me(e, t, n)
                                    };
                                var t, n
                            }, me.constant = Li, me.countBy = $r, me.create = function(e, t) {
                                return e = ve(e), null == t ? e : Re(e, t)
                            }, me.curry = function e(t, n, r) {
                                n = Cn(t, 8, Bi, Bi, Bi, Bi, Bi, n = r ? Bi : n);
                                return n.placeholder = e.placeholder, n
                            }, me.curryRight = function e(t, n, r) {
                                n = Cn(t, 16, Bi, Bi, Bi, Bi, Bi, n = r ? Bi : n);
                                return n.placeholder = e.placeholder, n
                            }, me.debounce = sa, me.defaults = ni, me.defaultsDeep = ri, me.defer = ca, me.delay = fa, me.difference = yr, me.differenceBy = br, me.differenceWith = Er, me.drop = function(e, t, n) {
                                var r = null == e ? 0 : e.length;
                                return r ? Lt(e, (t = n || t === Bi ? 1 : za(t)) < 0 ? 0 : t, r) : []
                            }, me.dropRight = function(e, t, n) {
                                var r = null == e ? 0 : e.length;
                                return r ? Lt(e, 0, (t = r - (t = n || t === Bi ? 1 : za(t))) < 0 ? 0 : t) : []
                            }, me.dropRightWhile = function(e, t) {
                                return e && e.length ? Bt(e, Gn(t, 3), !0, !0) : []
                            }, me.dropWhile = function(e, t) {
                                return e && e.length ? Bt(e, Gn(t, 3), !0) : []
                            }, me.fill = function(e, t, n, r) {
                                var a = null == e ? 0 : e.length;
                                return a ? (n && "number" != typeof n && Yn(e, t, n) && (n = 0, r = a), function(e, t, n, r) {
                                    var a = e.length;
                                    for ((n = za(n)) < 0 && (n = a < -n ? 0 : a + n), (r = r === Bi || a < r ? a : za(r)) < 0 && (r += a), r = r < n ? 0 : $a(r); n < r;) e[n++] = t;
                                    return e
                                }(e, t, n, r)) : []
                            }, me.filter = function(e, t) {
                                return (wa(e) ? Tl : We)(e, Gn(t, 3))
                            }, me.flatMap = function(e, t) {
                                return He(ta(e, t), 1)
                            }, me.flatMapDeep = function(e, t) {
                                return He(ta(e, t), 1 / 0)
                            }, me.flatMapDepth = function(e, t, n) {
                                return n = n === Bi ? 1 : za(n), He(ta(e, t), n)
                            }, me.flatten = Ir, me.flattenDeep = function(e) {
                                return (null == e ? 0 : e.length) ? He(e, 1 / 0) : []
                            }, me.flattenDepth = function(e, t) {
                                return (null == e ? 0 : e.length) ? He(e, t = t === Bi ? 1 : za(t)) : []
                            }, me.flip = function(e) {
                                return Cn(e, 512)
                            }, me.flow = Ri, me.flowRight = S, me.fromPairs = function(e) {
                                for (var t = -1, n = null == e ? 0 : e.length, r = {}; ++t < n;) {
                                    var a = e[t];
                                    r[a[0]] = a[1]
                                }
                                return r
                            }, me.functions = function(e) {
                                return null == e ? [] : Ye(e, si(e))
                            }, me.functionsIn = function(e) {
                                return null == e ? [] : Ye(e, ci(e))
                            }, me.groupBy = Zr, me.initial = function(e) {
                                return (null == e ? 0 : e.length) ? Lt(e, 0, -1) : []
                            }, me.intersection = Tr, me.intersectionBy = Pr, me.intersectionWith = _r, me.invert = oi, me.invertBy = li, me.invokeMap = Xr, me.iteratee = Di, me.keyBy = ea, me.keys = si, me.keysIn = ci, me.map = ta, me.mapKeys = function(e, r) {
                                var a = {};
                                return r = Gn(r, 3), Je(e, function(e, t, n) {
                                    Ae(a, r(e, t, n), e)
                                }), a
                            }, me.mapValues = function(e, r) {
                                var a = {};
                                return r = Gn(r, 3), Je(e, function(e, t, n) {
                                    Ae(a, t, r(e, t, n))
                                }), a
                            }, me.matches = function(e) {
                                return vt(Fe(e, 1))
                            }, me.matchesProperty = function(e, t) {
                                return pt(e, Fe(t, 1))
                            }, me.memoize = da, me.merge = fi, me.mergeWith = di, me.method = n, me.methodOf = t, me.mixin = Oi, me.negate = ma, me.nthArg = function(t) {
                                return t = za(t), xt(function(e) {
                                    return gt(e, t)
                                })
                            }, me.omit = mi, me.omitBy = function(e, t) {
                                return pi(e, ma(Gn(t)))
                            }, me.once = function(e) {
                                return oa(2, e)
                            }, me.orderBy = function(e, t, n, r) {
                                return null == e ? [] : (wa(t) || (t = null == t ? [] : [t]), wa(n = r ? Bi : n) || (n = null == n ? [] : [n]), yt(e, t, n))
                            }, me.over = x, me.overArgs = va, me.overEvery = ce, me.overSome = O, me.partial = pa, me.partialRight = ha, me.partition = na, me.pick = vi, me.pickBy = pi, me.property = Mi, me.propertyOf = function(t) {
                                return function(e) {
                                    return null == t ? Bi : Qe(t, e)
                                }
                            }, me.pull = kr, me.pullAll = Nr, me.pullAllBy = function(e, t, n) {
                                return e && e.length && t && t.length ? Et(e, t, Gn(n, 2)) : e
                            }, me.pullAllWith = function(e, t, n) {
                                return e && e.length && t && t.length ? Et(e, t, Bi, n) : e
                            }, me.pullAt = Lr, me.range = Q, me.rangeRight = X, me.rearg = ga, me.reject = function(e, t) {
                                return (wa(e) ? Tl : We)(e, ma(Gn(t, 3)))
                            }, me.remove = function(e, t) {
                                var n = [];
                                if (!e || !e.length) return n;
                                var r = -1,
                                    a = [],
                                    i = e.length;
                                for (t = Gn(t, 3); ++r < i;) {
                                    var o = e[r];
                                    t(o, r, e) && (n.push(o), a.push(r))
                                }
                                return St(e, a), n
                            }, me.rest = function(e, t) {
                                if ("function" != typeof e) throw new w(Vi);
                                return xt(e, t = t === Bi ? t : za(t))
                            }, me.reverse = Rr, me.sampleSize = function(e, t, n) {
                                return t = (n ? Yn(e, t, n) : t === Bi) ? 1 : za(t), (wa(e) ? Pe : Pt)(e, t)
                            }, me.set = function(e, t, n) {
                                return null == e ? e : _t(e, t, n)
                            }, me.setWith = function(e, t, n, r) {
                                return r = "function" == typeof r ? r : Bi, null == e ? e : _t(e, t, n, r)
                            }, me.shuffle = function(e) {
                                return (wa(e) ? _e : Nt)(e)
                            }, me.slice = function(e, t, n) {
                                var r = null == e ? 0 : e.length;
                                return r ? (n = n && "number" != typeof n && Yn(e, t, n) ? (t = 0, r) : (t = null == t ? 0 : za(t), n === Bi ? r : za(n)), Lt(e, t, n)) : []
                            }, me.sortBy = ra, me.sortedUniq = function(e) {
                                return e && e.length ? Ot(e) : []
                            }, me.sortedUniqBy = function(e, t) {
                                return e && e.length ? Ot(e, Gn(t, 2)) : []
                            }, me.split = function(e, t, n) {
                                return n && "number" != typeof n && Yn(e, t, n) && (t = n = Bi), (n = n === Bi ? Ji : n >>> 0) ? (e = Ya(e)) && ("string" == typeof t || null != t && !Ma(t)) && !(t = Mt(t)) && Zl(e) ? Kt(au(e), 0, n) : e.split(t, n) : []
                            }, me.spread = function(n, r) {
                                if ("function" != typeof n) throw new w(Vi);
                                return r = null == r ? 0 : H(za(r), 0), xt(function(e) {
                                    var t = e[r],
                                        e = Kt(e, 0, r);
                                    return t && kl(e, t), El(n, this, e)
                                })
                            }, me.tail = function(e) {
                                var t = null == e ? 0 : e.length;
                                return t ? Lt(e, 1, t) : []
                            }, me.take = function(e, t, n) {
                                return e && e.length ? Lt(e, 0, (t = n || t === Bi ? 1 : za(t)) < 0 ? 0 : t) : []
                            }, me.takeRight = function(e, t, n) {
                                var r = null == e ? 0 : e.length;
                                return r ? Lt(e, (t = r - (t = n || t === Bi ? 1 : za(t))) < 0 ? 0 : t, r) : []
                            }, me.takeRightWhile = function(e, t) {
                                return e && e.length ? Bt(e, Gn(t, 3), !1, !0) : []
                            }, me.takeWhile = function(e, t) {
                                return e && e.length ? Bt(e, Gn(t, 3)) : []
                            }, me.tap = function(e, t) {
                                return t(e), e
                            }, me.throttle = function(e, t, n) {
                                var r = !0,
                                    a = !0;
                                if ("function" != typeof e) throw new w(Vi);
                                return Ra(n) && (r = "leading" in n ? !!n.leading : r, a = "trailing" in n ? !!n.trailing : a), sa(e, t, {
                                    leading: r,
                                    maxWait: t,
                                    trailing: a
                                })
                            }, me.thru = Hr, me.toArray = Wa, me.toPairs = hi, me.toPairsIn = gi, me.toPath = function(e) {
                                return wa(e) ? Cl(e, pr) : ja(e) ? [e] : rn(vr(Ya(e)))
                            }, me.toPlainObject = Ka, me.transform = function(e, r, a) {
                                var t, n = wa(e),
                                    i = n || Pa(e) || Ba(e);
                                return r = Gn(r, 4), null == a && (t = e && e.constructor, a = i ? n ? new t : [] : Ra(e) && ka(t) ? ve(_(e)) : {}), (i ? wl : Je)(e, function(e, t, n) {
                                    return r(a, e, t, n)
                                }), a
                            }, me.unary = function(e) {
                                return ia(e, 1)
                            }, me.union = Ar, me.unionBy = Dr, me.unionWith = Or, me.uniq = function(e) {
                                return e && e.length ? Ut(e) : []
                            }, me.uniqBy = function(e, t) {
                                return e && e.length ? Ut(e, Gn(t, 2)) : []
                            }, me.uniqWith = function(e, t) {
                                return t = "function" == typeof t ? t : Bi, e && e.length ? Ut(e, Bi, t) : []
                            }, me.unset = function(e, t) {
                                return null == e || Gt(e, t)
                            }, me.unzip = Fr, me.unzipWith = Mr, me.update = function(e, t, n) {
                                return null == e ? e : jt(e, t, zt(n))
                            }, me.updateWith = function(e, t, n, r) {
                                return r = "function" == typeof r ? r : Bi, null == e ? e : jt(e, t, zt(n), r)
                            }, me.values = yi, me.valuesIn = function(e) {
                                return null == e ? [] : Hl(e, ci(e))
                            }, me.without = Ur, me.words = ki, me.wrap = function(e, t) {
                                return pa(zt(t), e)
                            }, me.xor = Gr, me.xorBy = jr, me.xorWith = Br, me.zip = Vr, me.zipObject = function(e, t) {
                                return Wt(e || [], t || [], ke)
                            }, me.zipObjectDeep = function(e, t) {
                                return Wt(e || [], t || [], _t)
                            }, me.zipWith = qr, me.entries = hi, me.entriesIn = gi, me.extend = Za, me.extendWith = Xa, Oi(me, me), me.add = te, me.attempt = Ni, me.camelCase = bi, me.capitalize = Ei, me.ceil = o, me.clamp = function(e, t, n) {
                                return n === Bi && (n = t, t = Bi), n !== Bi && (n = (n = Ja(n)) == n ? n : 0), t !== Bi && (t = (t = Ja(t)) == t ? t : 0), Oe(Ja(e), t, n)
                            }, me.clone = function(e) {
                                return Fe(e, 4)
                            }, me.cloneDeep = function(e) {
                                return Fe(e, 5)
                            }, me.cloneDeepWith = function(e, t) {
                                return Fe(e, 5, t = "function" == typeof t ? t : Bi)
                            }, me.cloneWith = function(e, t) {
                                return Fe(e, 4, t = "function" == typeof t ? t : Bi)
                            }, me.conformsTo = function(e, t) {
                                return null == t || Me(e, t, si(t))
                            }, me.deburr = Si, me.defaultTo = function(e, t) {
                                return null == e || e != e ? t : e
                            }, me.divide = M, me.endsWith = function(e, t, n) {
                                e = Ya(e), t = Mt(t);
                                var r = e.length,
                                    r = n = n === Bi ? r : Oe(za(n), 0, r);
                                return 0 <= (n -= t.length) && e.slice(n, r) == t
                            }, me.eq = ya, me.escape = function(e) {
                                return (e = Ya(e)) && No.test(e) ? e.replace(Co, Yl) : e
                            }, me.escapeRegExp = function(e) {
                                return (e = Ya(e)) && Uo.test(e) ? e.replace(Mo, "\\$&") : e
                            }, me.every = function(e, t, n) {
                                var r = wa(e) ? xl : Ve;
                                return n && Yn(e, t, n) && (t = Bi), r(e, Gn(t, 3))
                            }, me.find = Jr, me.findIndex = Sr, me.findKey = function(e, t) {
                                return Al(e, Gn(t, 3), Je)
                            }, me.findLast = Kr, me.findLastIndex = wr, me.findLastKey = function(e, t) {
                                return Al(e, Gn(t, 3), Ke)
                            }, me.floor = kt, me.forEach = Yr, me.forEachRight = Qr, me.forIn = function(e, t) {
                                return null == e ? e : ze(e, Gn(t, 3), ci)
                            }, me.forInRight = function(e, t) {
                                return null == e ? e : $e(e, Gn(t, 3), ci)
                            }, me.forOwn = function(e, t) {
                                return e && Je(e, Gn(t, 3))
                            }, me.forOwnRight = function(e, t) {
                                return e && Ke(e, Gn(t, 3))
                            }, me.get = ai, me.gt = ba, me.gte = Ea, me.has = function(e, t) {
                                return null != e && zn(e, t, tt)
                            }, me.hasIn = ii, me.head = xr, me.identity = Ai, me.includes = function(e, t, n, r) {
                                return e = xa(e) ? e : yi(e), n = n && !r ? za(n) : 0, r = e.length, n < 0 && (n = H(r + n, 0)), Ga(e) ? n <= r && -1 < e.indexOf(t, n) : !!r && -1 < Ol(e, t, n)
                            }, me.indexOf = function(e, t, n) {
                                var r = null == e ? 0 : e.length;
                                return r ? ((n = null == n ? 0 : za(n)) < 0 && (n = H(r + n, 0)), Ol(e, t, n)) : -1
                            }, me.inRange = function(e, t, n) {
                                return t = Ha(t), n === Bi ? (n = t, t = 0) : n = Ha(n), (e = e = Ja(e)) >= z(t = t, n = n) && e < H(t, n)
                            }, me.invoke = ui, me.isArguments = Sa, me.isArray = wa, me.isArrayBuffer = Ia, me.isArrayLike = xa, me.isArrayLikeObject = Ta, me.isBoolean = function(e) {
                                return !0 === e || !1 === e || Aa(e) && Xe(e) == Zi
                            }, me.isBuffer = Pa, me.isDate = _a, me.isElement = function(e) {
                                return Aa(e) && 1 === e.nodeType && !Fa(e)
                            }, me.isEmpty = function(e) {
                                if (null == e) return !0;
                                if (xa(e) && (wa(e) || "string" == typeof e || "function" == typeof e.splice || Pa(e) || Ba(e) || Sa(e))) return !e.length;
                                var t, n = Hn(e);
                                if (n == ro || n == uo) return !e.size;
                                if (er(e)) return !ct(e).length;
                                for (t in e)
                                    if (y.call(e, t)) return !1;
                                return !0
                            }, me.isEqual = function(e, t) {
                                return ot(e, t)
                            }, me.isEqualWith = function(e, t, n) {
                                var r = (n = "function" == typeof n ? n : Bi) ? n(e, t) : Bi;
                                return r === Bi ? ot(e, t, Bi, n) : !!r
                            }, me.isError = Ca, me.isFinite = function(e) {
                                return "number" == typeof e && V(e)
                            }, me.isFunction = ka, me.isInteger = Na, me.isLength = La, me.isMap = Da, me.isMatch = function(e, t) {
                                return e === t || lt(e, t, Bn(t))
                            }, me.isMatchWith = function(e, t, n) {
                                return n = "function" == typeof n ? n : Bi, lt(e, t, Bn(t), n)
                            }, me.isNaN = function(e) {
                                return Oa(e) && e != +e
                            }, me.isNative = function(e) {
                                if (Xn(e)) throw new f("Unsupported core-js use. Try https://npms.io/search?q=ponyfill.");
                                return ut(e)
                            }, me.isNil = function(e) {
                                return null == e
                            }, me.isNull = function(e) {
                                return null === e
                            }, me.isNumber = Oa, me.isObject = Ra, me.isObjectLike = Aa, me.isPlainObject = Fa, me.isRegExp = Ma, me.isSafeInteger = function(e) {
                                return Na(e) && -zi <= e && e <= zi
                            }, me.isSet = Ua, me.isString = Ga, me.isSymbol = ja, me.isTypedArray = Ba, me.isUndefined = function(e) {
                                return e === Bi
                            }, me.isWeakMap = function(e) {
                                return Aa(e) && Hn(e) == fo
                            }, me.isWeakSet = function(e) {
                                return Aa(e) && "[object WeakSet]" == Xe(e)
                            }, me.join = function(e, t) {
                                return null == e ? "" : q.call(e, t)
                            }, me.kebabCase = wi, me.last = Cr, me.lastIndexOf = function(e, t, n) {
                                var r = null == e ? 0 : e.length;
                                if (!r) return -1;
                                var a = r;
                                return n !== Bi && (a = (a = za(n)) < 0 ? H(r + a, 0) : z(a, r - 1)), t == t ? function(e, t, n) {
                                    for (var r = n + 1; r--;)
                                        if (e[r] === t) return r;
                                    return r
                                }(e, t, a) : Dl(e, Ml, a, !0)
                            }, me.lowerCase = Ii, me.lowerFirst = xi, me.lt = Va, me.lte = qa, me.max = function(e) {
                                return e && e.length ? qe(e, Ai, et) : Bi
                            }, me.maxBy = function(e, t) {
                                return e && e.length ? qe(e, Gn(t, 2), et) : Bi
                            }, me.mean = function(e) {
                                return Ul(e, Ai)
                            }, me.meanBy = function(e, t) {
                                return Ul(e, Gn(t, 2))
                            }, me.min = function(e) {
                                return e && e.length ? qe(e, Ai, dt) : Bi
                            }, me.minBy = function(e, t) {
                                return e && e.length ? qe(e, Gn(t, 2), dt) : Bi
                            }, me.stubArray = Ui, me.stubFalse = Gi, me.stubObject = function() {
                                return {}
                            }, me.stubString = function() {
                                return ""
                            }, me.stubTrue = function() {
                                return !0
                            }, me.multiply = F, me.nth = function(e, t) {
                                return e && e.length ? gt(e, za(t)) : Bi
                            }, me.noConflict = function() {
                                return dl._ === this && (dl._ = b), this
                            }, me.noop = Fi, me.now = aa, me.pad = function(e, t, n) {
                                e = Ya(e);
                                var r = (t = za(t)) ? ru(e) : 0;
                                return !t || t <= r ? e : En(G(r = (t - r) / 2), n) + e + En(U(r), n)
                            }, me.padEnd = function(e, t, n) {
                                e = Ya(e);
                                var r = (t = za(t)) ? ru(e) : 0;
                                return t && r < t ? e + En(t - r, n) : e
                            }, me.padStart = function(e, t, n) {
                                e = Ya(e);
                                var r = (t = za(t)) ? ru(e) : 0;
                                return t && r < t ? En(t - r, n) + e : e
                            }, me.parseInt = function(e, t, n) {
                                return t = n || null == t ? 0 : t && +t, J(Ya(e).replace(Go, ""), t || 0)
                            }, me.random = function(e, t, n) {
                                var r;
                                if (n && "boolean" != typeof n && Yn(e, t, n) && (t = n = Bi), n === Bi && ("boolean" == typeof t ? (n = t, t = Bi) : "boolean" == typeof e && (n = e, e = Bi)), e === Bi && t === Bi ? (e = 0, t = 1) : (e = Ha(e), t === Bi ? (t = e, e = 0) : t = Ha(t)), t < e && (r = e, e = t, t = r), n || e % 1 || t % 1) {
                                    n = K();
                                    return z(e + n * (t - e + cl("1e-" + ((n + "").length - 1))), t)
                                }
                                return wt(e, t)
                            }, me.reduce = function(e, t, n) {
                                var r = wa(e) ? Nl : jl,
                                    a = arguments.length < 3;
                                return r(e, Gn(t, 4), n, a, je)
                            }, me.reduceRight = function(e, t, n) {
                                var r = wa(e) ? Ll : jl,
                                    a = arguments.length < 3;
                                return r(e, Gn(t, 4), n, a, Be)
                            }, me.repeat = function(e, t, n) {
                                return t = (n ? Yn(e, t, n) : t === Bi) ? 1 : za(t), It(Ya(e), t)
                            }, me.replace = function() {
                                var e = arguments,
                                    t = Ya(e[0]);
                                return e.length < 3 ? t : t.replace(e[1], e[2])
                            }, me.result = function(e, t, n) {
                                var r = -1,
                                    a = (t = $t(t, e)).length;
                                for (a || (a = 1, e = Bi); ++r < a;) {
                                    var i = null == e ? Bi : e[pr(t[r])];
                                    i === Bi && (r = a, i = n), e = ka(i) ? i.call(e) : i
                                }
                                return e
                            }, me.round = Jt, me.runInContext = e, me.sample = function(e) {
                                return (wa(e) ? Te : Tt)(e)
                            }, me.size = function(e) {
                                if (null == e) return 0;
                                if (xa(e)) return Ga(e) ? ru(e) : e.length;
                                var t = Hn(e);
                                return t == ro || t == uo ? e.size : ct(e).length
                            }, me.snakeCase = Ti, me.some = function(e, t, n) {
                                var r = wa(e) ? Rl : Rt;
                                return n && Yn(e, t, n) && (t = Bi), r(e, Gn(t, 3))
                            }, me.sortedIndex = function(e, t) {
                                return At(e, t)
                            }, me.sortedIndexBy = function(e, t, n) {
                                return Dt(e, t, Gn(n, 2))
                            }, me.sortedIndexOf = function(e, t) {
                                var n = null == e ? 0 : e.length;
                                if (n) {
                                    var r = At(e, t);
                                    if (r < n && ya(e[r], t)) return r
                                }
                                return -1
                            }, me.sortedLastIndex = function(e, t) {
                                return At(e, t, !0)
                            }, me.sortedLastIndexBy = function(e, t, n) {
                                return Dt(e, t, Gn(n, 2), !0)
                            }, me.sortedLastIndexOf = function(e, t) {
                                if (null == e ? 0 : e.length) {
                                    var n = At(e, t, !0) - 1;
                                    if (ya(e[n], t)) return n
                                }
                                return -1
                            }, me.startCase = Pi, me.startsWith = function(e, t, n) {
                                return e = Ya(e), n = null == n ? 0 : Oe(za(n), 0, e.length), t = Mt(t), e.slice(n, n + t.length) == t
                            }, me.subtract = B, me.sum = function(e) {
                                return e && e.length ? Bl(e, Ai) : 0
                            }, me.sumBy = function(e, t) {
                                return e && e.length ? Bl(e, Gn(t, 2)) : 0
                            }, me.template = function(o, e, t) {
                                var n = me.templateSettings;
                                t && Yn(o, e, t) && (e = Bi), o = Ya(o), e = Xa({}, e, n, kn);
                                var l, u, r = si(n = Xa({}, e.imports, n.imports, kn)),
                                    a = Hl(n, r),
                                    s = 0,
                                    n = e.interpolate || el,
                                    c = "__p += '",
                                    n = m((e.escape || el).source + "|" + n.source + "|" + (n === Ao ? zo : el).source + "|" + (e.evaluate || el).source + "|$", "g"),
                                    i = "//# sourceURL=" + (y.call(e, "sourceURL") ? (e.sourceURL + "").replace(/\s/g, " ") : "lodash.templateSources[" + ++ll + "]") + "\n";
                                if (o.replace(n, function(e, t, n, r, a, i) {
                                        return n = n || r, c += o.slice(s, i).replace(tl, Ql), t && (l = !0, c += "' +\n__e(" + t + ") +\n'"), a && (u = !0, c += "';\n" + a + ";\n__p += '"), n && (c += "' +\n((__t = (" + n + ")) == null ? '' : __t) +\n'"), s = i + e.length, e
                                    }), c += "';\n", e = y.call(e, "variable") && e.variable) {
                                    if (Wo.test(e)) throw new f("Invalid `variable` option passed into `_.template`")
                                } else c = "with (obj) {\n" + c + "\n}\n";
                                if (c = (u ? c.replace(xo, "") : c).replace(To, "$1").replace(Po, "$1;"), c = "function(" + (e || "obj") + ") {\n" + (e ? "" : "obj || (obj = {});\n") + "var __t, __p = ''" + (l ? ", __e = _.escape" : "") + (u ? ", __j = Array.prototype.join;\nfunction print() { __p += __j.call(arguments, '') }\n" : ";\n") + c + "return __p\n}", (e = Ni(function() {
                                        return d(r, i + "return " + c).apply(Bi, a)
                                    })).source = c, Ca(e)) throw e;
                                return e
                            }, me.times = function(e, t) {
                                if ((e = za(e)) < 1 || zi < e) return [];
                                var n = Ji,
                                    r = z(e, Ji);
                                for (t = Gn(t), e -= Ji, r = Vl(r, t); ++n < e;) t(n);
                                return r
                            }, me.toFinite = Ha, me.toInteger = za, me.toLength = $a, me.toLower = function(e) {
                                return Ya(e).toLowerCase()
                            }, me.toNumber = Ja, me.toSafeInteger = function(e) {
                                return e ? Oe(za(e), -zi, zi) : 0 === e ? e : 0
                            }, me.toString = Ya, me.toUpper = function(e) {
                                return Ya(e).toUpperCase()
                            }, me.trim = function(e, t, n) {
                                return (e = Ya(e)) && (n || t === Bi) ? ql(e) : e && (t = Mt(t)) ? (e = au(e), t = au(t), Kt(e, $l(e, t), Jl(e, t) + 1).join("")) : e
                            }, me.trimEnd = function(e, t, n) {
                                return (e = Ya(e)) && (n || t === Bi) ? e.slice(0, iu(e) + 1) : e && (t = Mt(t)) ? Kt(e = au(e), 0, Jl(e, au(t)) + 1).join("") : e
                            }, me.trimStart = function(e, t, n) {
                                return (e = Ya(e)) && (n || t === Bi) ? e.replace(Go, "") : e && (t = Mt(t)) ? Kt(e = au(e), $l(e, au(t))).join("") : e
                            }, me.truncate = function(e, t) {
                                var n, r = 30,
                                    a = "...";
                                Ra(t) && (n = "separator" in t ? t.separator : n, r = "length" in t ? za(t.length) : r, a = "omission" in t ? Mt(t.omission) : a);
                                var i, t = (e = Ya(e)).length;
                                if (Zl(e) && (t = (i = au(e)).length), t <= r) return e;
                                if ((t = r - ru(a)) < 1) return a;
                                if (r = i ? Kt(i, 0, t).join("") : e.slice(0, t), n === Bi) return r + a;
                                if (i && (t += r.length - t), Ma(n)) {
                                    if (e.slice(t).search(n)) {
                                        var o, l = r;
                                        for (n.global || (n = m(n.source, Ya($o.exec(n)) + "g")), n.lastIndex = 0; o = n.exec(l);) var u = o.index;
                                        r = r.slice(0, u === Bi ? t : u)
                                    }
                                } else e.indexOf(Mt(n), t) == t || -1 < (t = r.lastIndexOf(n)) && (r = r.slice(0, t));
                                return r + a
                            }, me.unescape = function(e) {
                                return (e = Ya(e)) && ko.test(e) ? e.replace(_o, ou) : e
                            }, me.uniqueId = function(e) {
                                var t = ++u;
                                return Ya(e) + t
                            }, me.upperCase = _i, me.upperFirst = Ci, me.each = Yr, me.eachRight = Qr, me.first = xr, Oi(me, (ji = {}, Je(me, function(e, t) {
                                y.call(me.prototype, t) || (ji[t] = e)
                            }), ji), {
                                chain: !1
                            }), me.VERSION = "4.17.21", wl(["bind", "bindKey", "curry", "curryRight", "partial", "partialRight"], function(e) {
                                me[e].placeholder = me
                            }), wl(["drop", "take"], function(n, r) {
                                ye.prototype[n] = function(e) {
                                    e = e === Bi ? 1 : H(za(e), 0);
                                    var t = this.__filtered__ && !r ? new ye(this) : this.clone();
                                    return t.__filtered__ ? t.__takeCount__ = z(e, t.__takeCount__) : t.__views__.push({
                                        size: z(e, Ji),
                                        type: n + (t.__dir__ < 0 ? "Right" : "")
                                    }), t
                                }, ye.prototype[n + "Right"] = function(e) {
                                    return this.reverse()[n](e).reverse()
                                }
                            }), wl(["filter", "map", "takeWhile"], function(e, t) {
                                var n = t + 1,
                                    r = 1 == n || 3 == n;
                                ye.prototype[e] = function(e) {
                                    var t = this.clone();
                                    return t.__iteratees__.push({
                                        iteratee: Gn(e, 3),
                                        type: n
                                    }), t.__filtered__ = t.__filtered__ || r, t
                                }
                            }), wl(["head", "last"], function(e, t) {
                                var n = "take" + (t ? "Right" : "");
                                ye.prototype[e] = function() {
                                    return this[n](1).value()[0]
                                }
                            }), wl(["initial", "tail"], function(e, t) {
                                var n = "drop" + (t ? "" : "Right");
                                ye.prototype[e] = function() {
                                    return this.__filtered__ ? new ye(this) : this[n](1)
                                }
                            }), ye.prototype.compact = function() {
                                return this.filter(Ai)
                            }, ye.prototype.find = function(e) {
                                return this.filter(e).head()
                            }, ye.prototype.findLast = function(e) {
                                return this.reverse().find(e)
                            }, ye.prototype.invokeMap = xt(function(t, n) {
                                return "function" == typeof t ? new ye(this) : this.map(function(e) {
                                    return at(e, t, n)
                                })
                            }), ye.prototype.reject = function(e) {
                                return this.filter(ma(Gn(e)))
                            }, ye.prototype.slice = function(e, t) {
                                e = za(e);
                                var n = this;
                                return n.__filtered__ && (0 < e || t < 0) ? new ye(n) : (e < 0 ? n = n.takeRight(-e) : e && (n = n.drop(e)), t !== Bi && (n = (t = za(t)) < 0 ? n.dropRight(-t) : n.take(t - e)), n)
                            }, ye.prototype.takeRightWhile = function(e) {
                                return this.reverse().takeWhile(e).reverse()
                            }, ye.prototype.toArray = function() {
                                return this.take(Ji)
                            }, Je(ye.prototype, function(s, e) {
                                var c = /^(?:filter|find|map|reject)|While$/.test(e),
                                    f = /^(?:head|last)$/.test(e),
                                    d = me[f ? "take" + ("last" == e ? "Right" : "") : e],
                                    m = f || /^find/.test(e);
                                d && (me.prototype[e] = function() {
                                    function e(e) {
                                        return e = d.apply(me, kl([e], n)), f && o ? e[0] : e
                                    }
                                    var t = this.__wrapped__,
                                        n = f ? [1] : arguments,
                                        r = t instanceof ye,
                                        a = n[0],
                                        i = r || wa(t);
                                    i && c && "function" == typeof a && 1 != a.length && (r = i = !1);
                                    var o = this.__chain__,
                                        l = !!this.__actions__.length,
                                        a = m && !o,
                                        l = r && !l;
                                    if (m || !i) return a && l ? s.apply(this, n) : (u = this.thru(e), a ? f ? u.value()[0] : u.value() : u);
                                    t = l ? t : new ye(this);
                                    var u = s.apply(t, n);
                                    return u.__actions__.push({
                                        func: Hr,
                                        args: [e],
                                        thisArg: Bi
                                    }), new ge(u, o)
                                })
                            }), wl(["pop", "push", "shift", "sort", "splice", "unshift"], function(e) {
                                var n = i[e],
                                    r = /^(?:push|sort|unshift)$/.test(e) ? "tap" : "thru",
                                    a = /^(?:pop|shift)$/.test(e);
                                me.prototype[e] = function() {
                                    var t = arguments;
                                    if (!a || this.__chain__) return this[r](function(e) {
                                        return n.apply(wa(e) ? e : [], t)
                                    });
                                    var e = this.value();
                                    return n.apply(wa(e) ? e : [], t)
                                }
                            }), Je(ye.prototype, function(e, t) {
                                var n, r = me[t];
                                r && (n = r.name + "", y.call(ae, n) || (ae[n] = []), ae[n].push({
                                    name: t,
                                    func: r
                                }))
                            }), ae[hn(Bi, 2).name] = [{
                                name: "wrapper",
                                func: Bi
                            }], ye.prototype.clone = function() {
                                var e = new ye(this.__wrapped__);
                                return e.__actions__ = rn(this.__actions__), e.__dir__ = this.__dir__, e.__filtered__ = this.__filtered__, e.__iteratees__ = rn(this.__iteratees__), e.__takeCount__ = this.__takeCount__, e.__views__ = rn(this.__views__), e
                            }, ye.prototype.reverse = function() {
                                var e;
                                return this.__filtered__ ? ((e = new ye(this)).__dir__ = -1, e.__filtered__ = !0) : (e = this.clone()).__dir__ *= -1, e
                            }, ye.prototype.value = function() {
                                var e = this.__wrapped__.value(),
                                    t = this.__dir__,
                                    n = wa(e),
                                    r = t < 0,
                                    a = n ? e.length : 0,
                                    i = function(e, t, n) {
                                        var r = -1,
                                            a = n.length;
                                        for (; ++r < a;) {
                                            var i = n[r],
                                                o = i.size;
                                            switch (i.type) {
                                                case "drop":
                                                    e += o;
                                                    break;
                                                case "dropRight":
                                                    t -= o;
                                                    break;
                                                case "take":
                                                    t = z(t, e + o);
                                                    break;
                                                case "takeRight":
                                                    e = H(e, t - o)
                                            }
                                        }
                                        return {
                                            start: e,
                                            end: t
                                        }
                                    }(0, a, this.__views__),
                                    o = i.start,
                                    l = (i = i.end) - o,
                                    u = r ? i : o - 1,
                                    s = this.__iteratees__,
                                    c = s.length,
                                    f = 0,
                                    d = z(l, this.__takeCount__);
                                if (!n || !r && a == l && d == l) return Vt(e, this.__actions__);
                                var m = [];
                                e: for (; l-- && f < d;) {
                                    for (var v = -1, p = e[u += t]; ++v < c;) {
                                        var h = s[v],
                                            g = h.iteratee,
                                            h = h.type,
                                            g = g(p);
                                        if (2 == h) p = g;
                                        else if (!g) {
                                            if (1 == h) continue e;
                                            break e
                                        }
                                    }
                                    m[f++] = p
                                }
                                return m
                            }, me.prototype.at = zr, me.prototype.chain = function() {
                                return Wr(this)
                            }, me.prototype.commit = function() {
                                return new ge(this.value(), this.__chain__)
                            }, me.prototype.next = function() {
                                this.__values__ === Bi && (this.__values__ = Wa(this.value()));
                                var e = this.__index__ >= this.__values__.length;
                                return {
                                    done: e,
                                    value: e ? Bi : this.__values__[this.__index__++]
                                }
                            }, me.prototype.plant = function(e) {
                                for (var t, n = this; n instanceof he;) {
                                    var r = gr(n);
                                    r.__index__ = 0, r.__values__ = Bi, t ? a.__wrapped__ = r : t = r;
                                    var a = r,
                                        n = n.__wrapped__
                                }
                                return a.__wrapped__ = e, t
                            }, me.prototype.reverse = function() {
                                var e = this.__wrapped__;
                                if (e instanceof ye) {
                                    e = e;
                                    return this.__actions__.length && (e = new ye(this)), (e = e.reverse()).__actions__.push({
                                        func: Hr,
                                        args: [Rr],
                                        thisArg: Bi
                                    }), new ge(e, this.__chain__)
                                }
                                return this.thru(Rr)
                            }, me.prototype.toJSON = me.prototype.valueOf = me.prototype.value = function() {
                                return Vt(this.__wrapped__, this.__actions__)
                            }, me.prototype.first = me.prototype.head, R && (me.prototype[R] = function() {
                                return this
                            }), me
                        }();
                        dl._ = lu, (A = function() {
                            return lu
                        }.call(L, R, L, N)) === Bi || (N.exports = A)
                    }.call(this)
            },
            4452: function(e, t) {
                var n;
                /*!
                	Copyright (c) 2018 Jed Watson.
                	Licensed under the MIT License (MIT), see
                	http://jedwatson.github.io/classnames
                */
                ! function() {
                    "use strict";
                    var r = {}.hasOwnProperty;

                    function a() {
                        for (var e = "", t = 0; t < arguments.length; t++) {
                            var n = arguments[t];
                            n && (e = i(e, function(e) {
                                if ("string" == typeof e || "number" == typeof e) return e;
                                if ("object" != typeof e) return "";
                                if (Array.isArray(e)) return a.apply(null, e);
                                if (e.toString !== Object.prototype.toString && !e.toString.toString().includes("[native code]")) return e.toString();
                                var t, n = "";
                                for (t in e) r.call(e, t) && e[t] && (n = i(n, t));
                                return n
                            }(n)))
                        }
                        return e
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
        r = {};

    function ts(e) {
        var t = r[e];
        if (void 0 !== t) return t.exports;
        t = r[e] = {
            id: e,
            loaded: !1,
            exports: {}
        };
        return n[e].call(t.exports, t, t.exports, ts), t.loaded = !0, t.exports
    }
    ts.n = function(e) {
            var t = e && e.__esModule ? function() {
                return e.default
            } : function() {
                return e
            };
            return ts.d(t, {
                a: t
            }), t
        }, ts.d = function(e, t) {
            for (var n in t) ts.o(t, n) && !ts.o(e, n) && Object.defineProperty(e, n, {
                enumerable: !0,
                get: t[n]
            })
        }, ts.g = function() {
            if ("object" == typeof globalThis) return globalThis;
            try {
                return this || new Function("return this")()
            } catch (e) {
                if ("object" == typeof window) return window
            }
        }(), ts.o = function(e, t) {
            return Object.prototype.hasOwnProperty.call(e, t)
        }, ts.nmd = function(e) {
            return e.paths = [], e.children || (e.children = []), e
        },
        function() {
            "use strict";

            function s(e, t, n) {
                return {
                    name: "buttonClick",
                    type: "buttonClick",
                    context: x,
                    params: {
                        btn: e,
                        page: "shareLinkErrorDialog",
                        linkType: "ExperienceInvite",
                        linkId: t,
                        linkStatus: n
                    }
                }
            }
            var E, S = Roblox,
                o = ts.n(S),
                _ = CoreUtilities,
                D = React,
                O = ts.n(D),
                l = ReactDOM,
                C = window.EventTracker ? EventTracker : {
                    fireEvent: console.log,
                    start: console.log,
                    endSuccess: console.log,
                    endCancel: console.log,
                    endFailure: console.log
                },
                u = ReactUtilities,
                c = TanstackQuery,
                f = {
                    maxTilesPerCarouselPage: 6,
                    maxWideGameTilesPerCarouselPage: 4,
                    minWideGameTilesPerCarouselPage: 2,
                    gameTileWidth: 150,
                    homeFeedMaxWidth: 970,
                    wideGameTileTilesPerRowBreakpointWidth: 738,
                    sortlessGridMaxTilesMetadataToFetch: 300,
                    adSortHomePageId: 4e8,
                    topicIdsWithoutSeeAll: [5e8, 500000001],
                    friendsCarouselAngularBootstrapErrorEvent: "HomePageFriendsCarouselBootstrapError",
                    missingNumberOfRowsForLoggingErrorEvent: "HomePageMissingNumberOfRowsForLoggingError",
                    omniRecommendationEndpointErrorEvent: "HomePageOmniRecommendationEndpointError",
                    omniRecommendationEndpointSuccessEvent: "HomePageOmniRecommendationEndpointSuccess",
                    omniRecommendationFeedStatsLoggingErrorEvent: "HomePageOmniRecommendationFeedStatsLoggingError",
                    linkStartDelimiter: "{linkStart}",
                    linkEndDelimiter: "{linkEnd}"
                },
                w = {
                    maxTilesPerCarouselPage: 6,
                    visitsTruncationDigitsAfterDecimalPoint: 1,
                    surveyImpressionsIntersectionThreshold: .5,
                    eventsRedesignExposureLogError: "EventsRedesignExposureLogError",
                    eventsRedesignExposureLogServiceMissing: "EventsRedesignExposureLogServiceMissing",
                    requestRefundError: "RequestRefundError",
                    votingPanelLoadFailure: "VotingPanelLoadFailure"
                },
                m = {
                    maxTilesInGameImpressionsEvent: 25,
                    gameImpressionsIntersectionThreshold: .5,
                    filterImpressionsIntersectionThreshold: .5,
                    wideTileHoverGrowWidthPx: 26,
                    numberOfInGameAvatarIcons: 3,
                    numberOfInGameNames: 1,
                    maxFacepileFriendCountValue: 99,
                    numberOfGameTilesPerLoad: 60,
                    numberOfGamePassesPerLoad: 50,
                    keyBoardEventCode: {
                        enter: "Enter",
                        escape: "Escape"
                    },
                    RatingPercentageText: "Label.RatingPercentage"
                },
                F = f,
                d = w,
                M = ReactStyleGuide,
                k = CoreRobloxUtilities,
                v = {
                    ActionApply: "Action.Apply",
                    LabelSponsoredAd: "Label.SponsoredAd",
                    LabelNoSearchResults: "LabelNoSearchResults",
                    LabelPlayingOnePlusUsersWithComma: "LabelPlayingOnePlusUsersWithComma",
                    LabelPlayingOneUser: "LabelPlayingOneUser",
                    LabelBy: "LabelCreatorBy",
                    LabelByPrefix: "Label.By"
                },
                t = {
                    LabelApiError: "Label.ApiError",
                    LabelGames: "Label.Games",
                    LabelSponsoredAdsDisclosureStatic: "Label.SponsoredAdsDisclosureStatic",
                    LabelContentLoadFailed: "Label.ContentLoadFailed"
                },
                y = "Action.Close",
                N = "Response.UnexpectedError",
                U = {
                    ActionSeeAll: "Action.SeeAll",
                    ActionInterestCatcherContinue: "Action.InterestCatcherContinue",
                    ActionInterestCatcherContinueSelected: "Action.InterestCatcherContinueSelected",
                    ActionInterestCatcherSkip: "Action.InterestCatcherSkip",
                    ActionInterestCatcherInterested: "Action.InterestCatcherInterested"
                },
                p = {
                    HeadingDescription: "Heading.Description",
                    LabelAgeGuidelines: "Label.AgeGuidelines",
                    LabelLearnMore: "Label.LearnMore",
                    LabelBy: "Label.By",
                    LabelPlaying: "Label.Playing",
                    LabelFavorites: "Label.Favorites",
                    LabelVisits: "Label.Visits",
                    LabelCreated: "Label.Created",
                    LabelUpdated: "Label.Updated",
                    LabelMaxPlayers: "Label.MaxPlayers",
                    LabelGenre: "Label.Genre",
                    LabelSubgenre: "Label.Subgenre",
                    LabelReportAbuse: "Label.ReportAbuse",
                    LabelPlaceCopyingAllowed: "Label.PlaceCopyingAllowed",
                    LabelVoiceEnabled: "Label.VoiceEnabled",
                    LabelContentFailedToLoad: "Label.ContentFailedToLoad",
                    LabelYes: "Label.Yes",
                    LabelNo: "Label.No",
                    LabelUnavailable: "Label.Unavailable",
                    LabelSuitableForEveryone: "Label.SuitableForEveryone",
                    LabelMicrophone: "Label.Microphone",
                    LabelCamera: "Label.Camera",
                    LabelNone: "Label.None",
                    LabelThankYou: "Label.ThankYouMessage",
                    LabelGenreUnderConstruction: "Label.GenreUnderConstruction",
                    LabelGenreInProgress: "Label.GenreInProgress",
                    HeadingRecommendedGames: "Heading.RecommendedGames",
                    ActionSwapToSource: "Action.SwapToSource",
                    ActionSwapToTranslation: "Action.SwapToTranslation",
                    ActionTranslate: "Action.Translate",
                    LabelNotSupported: "Label.NotSupported",
                    LabelSupported: "Label.Supported",
                    LabelVoiceChat: "Label.VoiceChat",
                    HeadingRefund: "Heading.Refund",
                    ActionRequestRefund: "Action.RequestRefund",
                    HeadingNotice: "Body.NotesTitle",
                    InExperiencePurchase: "Notes.InExperiencePurchase"
                },
                h = {
                    HeadingCommunityTitle: "Heading.CommunityTitle",
                    DescriptionCommunityDefault: "Description.CommunityDefault",
                    LabelViewButton: "Label.ViewButton"
                },
                g = {
                    LabelInviteExpiredError: "Label.InviteExpiredError",
                    LabelInviterNotHereError: "Label.InviterNotHereError",
                    DescriptionInviteExpiredError: "Description.InviteExpiredError",
                    DescriptionInviterNotHereError: "Description.InviterNotHereError",
                    LabelCancel: "Label.Cancel",
                    LabelPlay: "Label.Play"
                },
                L = "Message.MaxLengthCharacters",
                R = "Message.MinLengthCharacters",
                A = "Message.ReportAbuseInsteadLong",
                G = "Message.SubmitSuccess",
                b = "PromptBanner.GiveFeedbackButton",
                I = "PromptBanner.TitleOnly",
                e = {
                    common: ["CommonUI.Controls", "Feature.ExperienceDetails"],
                    feature: "Feature.GameDetails"
                },
                n = {
                    common: ["CommonUI.Controls"],
                    feature: "Feature.GameDetails"
                },
                r = {
                    common: ["CommonUI.Messages"],
                    feature: "PlayerFeedbacks.VoteForm"
                },
                a = {
                    common: ["Common.VisitGame"],
                    feature: "Feature.SocialShare"
                },
                x = "shareLinks",
                T = ((ln = {})[S.ShareLinks.ExperienceInviteStatus.EXPIRED] = {
                    Header: g.LabelInviteExpiredError,
                    Description: g.DescriptionInviteExpiredError
                }, ln[S.ShareLinks.ExperienceInviteStatus.INVITER_NOT_IN_EXPERIENCE] = {
                    Header: g.LabelInviterNotHereError,
                    Description: g.DescriptionInviterNotHereError
                }, ln),
                i = "game-details-invite-link-expired-modal-container",
                P = function() {
                    return document.getElementById(i)
                },
                j = HeaderScripts,
                B = S.EnvironmentUrls.gamesApi,
                V = {
                    url: {
                        getOmniRecommendations: function(e, t) {
                            return {
                                url: B + "/v1/games/omni-recommendations?model.pageType=" + e + (void 0 !== t ? "&model.sessionId=" + t : ""),
                                withCredentials: !0
                            }
                        },
                        getOmniRecommendationsMetadata: {
                            url: B + "/v1/games/omni-recommendations-metadata",
                            withCredentials: !0
                        },
                        getGameList: {
                            url: B + "/v1/games/list",
                            withCredentials: !0
                        },
                        getGamePasses: function(e, t) {
                            return {
                                url: B + "/v1/games/" + e + "/game-passes?limit=" + t,
                                withCredentials: !0
                            }
                        },
                        getGameRecommendations: function(e) {
                            return {
                                url: B + "/v1/games/recommendations/game/" + e,
                                withCredentials: !0
                            }
                        },
                        getGameSorts: {
                            url: B + "/v1/games/sorts",
                            withCredentials: !0
                        },
                        getUniverseVoiceStatus: function(e) {
                            return {
                                withCredentials: !0,
                                url: S.EnvironmentUrls.voiceApi + "/v1/settings/universe/" + e
                            }
                        },
                        getVoiceOptInStatus: {
                            withCredentials: !0,
                            url: S.EnvironmentUrls.voiceApi + "/v1/settings/user-opt-in"
                        },
                        getAssetDataFromAssetId: function(e) {
                            return {
                                url: S.EnvironmentUrls.assetDeliveryApi + "/v2/assetId/" + e,
                                withCredentials: !0
                            }
                        }
                    },
                    defaultCacheCriteria: {
                        refreshCache: !1,
                        expirationWindowMS: 3e4,
                        useCache: !0
                    }
                },
                q = function(e, o, l, u) {
                    return new(l = l || Promise)(function(n, t) {
                        function r(e) {
                            try {
                                i(u.next(e))
                            } catch (e) {
                                t(e)
                            }
                        }

                        function a(e) {
                            try {
                                i(u.throw(e))
                            } catch (e) {
                                t(e)
                            }
                        }

                        function i(e) {
                            var t;
                            e.done ? n(e.value) : ((t = e.value) instanceof l ? t : new l(function(e) {
                                e(t)
                            })).then(r, a)
                        }
                        i((u = u.apply(e, o || [])).next())
                    })
                },
                W = function(n, r) {
                    var a, i, o, l = {
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
                                if (a) throw new TypeError("Generator is already executing.");
                                for (; l;) try {
                                    if (a = 1, i && (o = 2 & t[0] ? i.return : t[0] ? i.throw || ((o = i.return) && o.call(i), 0) : i.next) && !(o = o.call(i, t[1])).done) return o;
                                    switch (i = 0, o && (t = [2 & t[0], o.value]), t[0]) {
                                        case 0:
                                        case 1:
                                            o = t;
                                            break;
                                        case 4:
                                            return l.label++, {
                                                value: t[1],
                                                done: !1
                                            };
                                        case 5:
                                            l.label++, i = t[1], t = [0];
                                            continue;
                                        case 7:
                                            t = l.ops.pop(), l.trys.pop();
                                            continue;
                                        default:
                                            if (!(o = 0 < (o = l.trys).length && o[o.length - 1]) && (6 === t[0] || 2 === t[0])) {
                                                l = 0;
                                                continue
                                            }
                                            if (3 === t[0] && (!o || t[1] > o[0] && t[1] < o[3])) {
                                                l.label = t[1];
                                                break
                                            }
                                            if (6 === t[0] && l.label < o[1]) {
                                                l.label = o[1], o = t;
                                                break
                                            }
                                            if (o && l.label < o[2]) {
                                                l.label = o[2], l.ops.push(t);
                                                break
                                            }
                                            o[2] && l.ops.pop(), l.trys.pop();
                                            continue
                                    }
                                    t = r.call(n, l)
                                } catch (e) {
                                    t = [6, e], i = 0
                                } finally {
                                    a = o = 0
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
                H = k.dataStores.gamesDataStore,
                z = (k.dataStores.userDataStoreV2, k.dataStores.localeDataStore),
                J = (k.dataStores.userDataStore.FriendsUserSortType, function(t) {
                    return q(void 0, void 0, Promise, function() {
                        return W(this, function(e) {
                            switch (e.label) {
                                case 0:
                                    return [4, H.getGameDetails([t])];
                                case 1:
                                    return [2, e.sent().data.data[0]]
                            }
                        })
                    })
                }),
                K = function(t, n) {
                    return q(void 0, void 0, Promise, function() {
                        return W(this, function(e) {
                            switch (e.label) {
                                case 0:
                                    return [4, _.httpService.get(V.url.getGameRecommendations(t), {
                                        maxRows: n
                                    })];
                                case 1:
                                    return [2, e.sent().data]
                            }
                        })
                    })
                },
                Y = function(t) {
                    return q(void 0, void 0, Promise, function() {
                        return W(this, function(e) {
                            switch (e.label) {
                                case 0:
                                    return [4, _.httpService.get(V.url.getUniverseVoiceStatus(t))];
                                case 1:
                                    return [2, e.sent().data]
                            }
                        })
                    })
                },
                Q = function(n) {
                    return q(void 0, void 0, Promise, function() {
                        var t;
                        return W(this, function(e) {
                            switch (e.label) {
                                case 0:
                                    return [4, H.getPlaceDetails([n])];
                                case 1:
                                    return t = e.sent().data, [2, (void 0 === t ? [] : t)[0]]
                            }
                        })
                    })
                },
                Z = function() {
                    return z.getUserLocale().then(function(e) {
                        return e.data
                    }).then(function(e) {
                        var t;
                        return null !== (t = null == e ? void 0 : e.ugc) && void 0 !== t ? t : null == e ? void 0 : e.signupAndLogin
                    })
                },
                X = function(e) {
                    var t = (0, c.useQuery)({
                        queryKey: ["getGameDetails", e],
                        queryFn: function() {
                            return J(e)
                        }
                    });
                    return {
                        gameDetails: t.data,
                        hasError: t.isError
                    }
                },
                ee = (S.ShareLinks.ExperienceInviteStatus, (0, u.withTranslations)(function(e) {
                    function t() {
                        return u(!1)
                    }
                    var n = e.translate,
                        r = e.linkId,
                        a = e.linkStatus,
                        i = e.placeId,
                        o = e.universeId,
                        l = (0, D.useState)(!0),
                        e = l[0],
                        u = l[1],
                        l = X(o).gameDetails,
                        o = O().createElement("p", null, n(T[a].Description, {
                            experienceName: null == l ? void 0 : l.name
                        }));
                    return O().createElement(M.SimpleModal, {
                        show: e,
                        title: n(T[a].Header),
                        body: l && o,
                        loading: !l,
                        actionButtonShow: !0,
                        actionButtonText: n(g.LabelPlay),
                        neutralButtonText: n(g.LabelCancel),
                        onAction: function() {
                            var e = "0";
                            null !== window.localStorage.getItem("ref_info") && (e = function() {
                                var e = window.localStorage.getItem("ref_info");
                                if (!e) return {};
                                try {
                                    return JSON.parse(atob(e))
                                } catch (e) {
                                    return {}
                                }
                            }()[i]), k.playGameService.launchGame(k.playGameService.buildPlayGameProperties(i, i, void 0, void 0, void 0, e), {
                                eventName: "joinGameFromInviteLink",
                                gamePlayIntentEventCtx: x,
                                ctx: x,
                                properties: {
                                    linkStatus: a,
                                    linkType: "ExperienceInvite",
                                    placeId: i,
                                    linkId: r
                                }
                            }), window.localStorage.getItem("ref_info") && window.localStorage.removeItem("ref_info");
                            e = s("join", r, a);
                            k.eventStreamService.sendEventWithTarget(e.type, e.context, e.params), t()
                        },
                        onClose: t,
                        onNeutral: function() {
                            var e = s("cancel", r, a);
                            k.eventStreamService.sendEventWithTarget(e.type, e.context, e.params), t()
                        }
                    })
                }, a));
            (Fi = {})[Fi.Image = 1] = "Image", Fi[Fi.YouTubeVideo = 33] = "YouTubeVideo", Fi[Fi.Unknown = 0] = "Unknown", (Mi = E = E || {}).Image = "Image", Mi.YouTubeVideo = "YouTubeVideo", Mi.Place = "Place", Mi[Mi.Unknown = 0] = "Unknown";
            var te, ne = ts(4452),
                re = ts.n(ne),
                ae = RobloxThumbnails,
                ie = ts(6585),
                oe = ts.n(ie),
                le = "game-details-carousel-container",
                ue = "game-details-play-button-container",
                se = function() {
                    return document.getElementById(le)
                },
                ce = {
                    back: "Action.Back",
                    next: "Action.Next"
                },
                fe = {
                    delay: 6e3
                },
                de = function(e) {
                    return {
                        width: 768,
                        height: 432,
                        videoId: e,
                        host: "https://www.youtube-nocookie.com",
                        playerVars: {
                            cc_load_policy: 1,
                            modestbranding: 1,
                            rel: 0
                        }
                    }
                },
                me = function(e, o, l, u) {
                    return new(l = l || Promise)(function(n, t) {
                        function r(e) {
                            try {
                                i(u.next(e))
                            } catch (e) {
                                t(e)
                            }
                        }

                        function a(e) {
                            try {
                                i(u.throw(e))
                            } catch (e) {
                                t(e)
                            }
                        }

                        function i(e) {
                            var t;
                            e.done ? n(e.value) : ((t = e.value) instanceof l ? t : new l(function(e) {
                                e(t)
                            })).then(r, a)
                        }
                        i((u = u.apply(e, o || [])).next())
                    })
                },
                ve = function(n, r) {
                    var a, i, o, l = {
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
                                if (a) throw new TypeError("Generator is already executing.");
                                for (; l;) try {
                                    if (a = 1, i && (o = 2 & t[0] ? i.return : t[0] ? i.throw || ((o = i.return) && o.call(i), 0) : i.next) && !(o = o.call(i, t[1])).done) return o;
                                    switch (i = 0, o && (t = [2 & t[0], o.value]), t[0]) {
                                        case 0:
                                        case 1:
                                            o = t;
                                            break;
                                        case 4:
                                            return l.label++, {
                                                value: t[1],
                                                done: !1
                                            };
                                        case 5:
                                            l.label++, i = t[1], t = [0];
                                            continue;
                                        case 7:
                                            t = l.ops.pop(), l.trys.pop();
                                            continue;
                                        default:
                                            if (!(o = 0 < (o = l.trys).length && o[o.length - 1]) && (6 === t[0] || 2 === t[0])) {
                                                l = 0;
                                                continue
                                            }
                                            if (3 === t[0] && (!o || t[1] > o[0] && t[1] < o[3])) {
                                                l.label = t[1];
                                                break
                                            }
                                            if (6 === t[0] && l.label < o[1]) {
                                                l.label = o[1], o = t;
                                                break
                                            }
                                            if (o && l.label < o[2]) {
                                                l.label = o[2], l.ops.push(t);
                                                break
                                            }
                                            o[2] && l.ops.pop(), l.trys.pop();
                                            continue
                                    }
                                    t = r.call(n, l)
                                } catch (e) {
                                    t = [6, e], i = 0
                                } finally {
                                    a = o = 0
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

            function pe() {
                return document.getElementById(Ae)
            }(Gi = te = te || {})[Gi.Unstarted = -1] = "Unstarted", Gi[Gi.Ended = 0] = "Ended", Gi[Gi.Playing = 1] = "Playing", Gi[Gi.Paused = 2] = "Paused", Gi[Gi.Buffering = 3] = "Buffering", Gi[Gi.Cued = 5] = "Cued";
            var he, ge, ye, be, Ee, Se = (0, D.forwardRef)(function(e, t) {
                    function n(e) {
                        switch (e.data) {
                            case te.Playing:
                            case te.Buffering:
                                o && o(e);
                                break;
                            case te.Paused:
                                l && l(e);
                                break;
                            case te.Ended:
                                u && u(e)
                        }
                    }

                    function r(e) {
                        var t;
                        null !== (t = c.current) && void 0 !== t && t.mute(), s && s(e)
                    }
                    var a = e.id,
                        i = e.className,
                        o = e.onPlay,
                        l = e.onPaused,
                        u = e.onEnd,
                        s = e.onReady,
                        c = (0, D.useRef)(void 0);
                    return (0, D.useImperativeHandle)(t, function() {
                        return {
                            pause: function() {
                                var e;
                                null !== (e = c.current) && void 0 !== e && e.pauseVideo()
                            },
                            play: function(e) {
                                var t;
                                void 0 !== e && null !== (t = c.current) && void 0 !== t && t.seekTo(e, !0), null !== (e = c.current) && void 0 !== e && e.playVideo()
                            },
                            getCurrentTime: function() {
                                return me(void 0, void 0, Promise, function() {
                                    var t;
                                    return ve(this, function(e) {
                                        switch (e.label) {
                                            case 0:
                                                return [4, null === (t = c.current) || void 0 === t ? void 0 : t.getCurrentTime()];
                                            case 1:
                                                return [2, e.sent() || -1]
                                        }
                                    })
                                })
                            },
                            getDuration: function() {
                                return me(void 0, void 0, Promise, function() {
                                    var t;
                                    return ve(this, function(e) {
                                        switch (e.label) {
                                            case 0:
                                                return [4, null === (t = c.current) || void 0 === t ? void 0 : t.getDuration()];
                                            case 1:
                                                return [2, e.sent() || -1]
                                        }
                                    })
                                })
                            }
                        }
                    }), (0, D.useEffect)(function() {
                        return c.current = oe()(a, de(a)), c.current.on("stateChange", n), c.current.on("ready", r),
                            function() {
                                var e;
                                null !== (e = c.current) && void 0 !== e && e.destroy()
                            }
                    }, []), O().createElement("div", {
                        className: i
                    }, O().createElement("div", {
                        id: a
                    }))
                }),
                we = function(e, o, l, u) {
                    return new(l = l || Promise)(function(n, t) {
                        function r(e) {
                            try {
                                i(u.next(e))
                            } catch (e) {
                                t(e)
                            }
                        }

                        function a(e) {
                            try {
                                i(u.throw(e))
                            } catch (e) {
                                t(e)
                            }
                        }

                        function i(e) {
                            var t;
                            e.done ? n(e.value) : ((t = e.value) instanceof l ? t : new l(function(e) {
                                e(t)
                            })).then(r, a)
                        }
                        i((u = u.apply(e, o || [])).next())
                    })
                },
                Ie = function(n, r) {
                    var a, i, o, l = {
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
                                if (a) throw new TypeError("Generator is already executing.");
                                for (; l;) try {
                                    if (a = 1, i && (o = 2 & t[0] ? i.return : t[0] ? i.throw || ((o = i.return) && o.call(i), 0) : i.next) && !(o = o.call(i, t[1])).done) return o;
                                    switch (i = 0, o && (t = [2 & t[0], o.value]), t[0]) {
                                        case 0:
                                        case 1:
                                            o = t;
                                            break;
                                        case 4:
                                            return l.label++, {
                                                value: t[1],
                                                done: !1
                                            };
                                        case 5:
                                            l.label++, i = t[1], t = [0];
                                            continue;
                                        case 7:
                                            t = l.ops.pop(), l.trys.pop();
                                            continue;
                                        default:
                                            if (!(o = 0 < (o = l.trys).length && o[o.length - 1]) && (6 === t[0] || 2 === t[0])) {
                                                l = 0;
                                                continue
                                            }
                                            if (3 === t[0] && (!o || t[1] > o[0] && t[1] < o[3])) {
                                                l.label = t[1];
                                                break
                                            }
                                            if (6 === t[0] && l.label < o[1]) {
                                                l.label = o[1], o = t;
                                                break
                                            }
                                            if (o && l.label < o[2]) {
                                                l.label = o[2], l.ops.push(t);
                                                break
                                            }
                                            o[2] && l.ops.pop(), l.trys.pop();
                                            continue
                                    }
                                    t = r.call(n, l)
                                } catch (e) {
                                    t = [6, e], i = 0
                                } finally {
                                    a = o = 0
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
                xe = (0, D.forwardRef)(function(e, t) {
                    function s() {
                        y.current && Object.values(y.current).forEach(function(e) {
                            e.pause()
                        })
                    }

                    function n(u) {
                        return we(void 0, void 0, void 0, function() {
                            var t, n, r, a, i, o, l;
                            return Ie(this, function(e) {
                                switch (e.label) {
                                    case 0:
                                        return (null != u && u.preventDefault(), s(), t = (g.current + 1) % c.length, f(t), g.current = t, b(), c[t].type !== E.YouTubeVideo) ? [3, 3] : (n = null === (l = y.current) || void 0 === l ? void 0 : l[t], l = (a = Math).ceil, [4, n.getDuration()]);
                                    case 1:
                                        return r = l.apply(a, [e.sent()]), o = (i = Math).ceil, [4, n.getCurrentTime()];
                                    case 2:
                                        ((i = o.apply(i, [e.sent()])) <= 0 || r <= i) && g.current === t && n.play(0), e.label = 3;
                                    case 3:
                                        return [2]
                                }
                            })
                        })
                    }

                    function r(e) {
                        null != e && e.preventDefault(), s(), e = g.current - 1 < 0 ? c.length - 1 : g.current - 1, f(e), g.current = e, b()
                    }

                    function a() {
                        h.current && clearTimeout(h.current)
                    }
                    var c = e.items,
                        i = e.delay,
                        o = e.translate,
                        l = (0, D.useState)(0),
                        u = l[0],
                        f = l[1],
                        e = (0, D.useState)(!1),
                        l = e[0],
                        d = e[1],
                        m = (0, D.useRef)(!1),
                        e = (0, D.useState)(!1),
                        v = e[0],
                        p = e[1],
                        h = (0, D.useRef)(void 0),
                        g = (0, D.useRef)(u),
                        y = (0, D.useRef)({}),
                        b = function() {
                            a(), v || m.current || (h.current = setTimeout(function() {
                                n()
                            }, i))
                        };
                    (0, D.useEffect)(function() {
                        var e;
                        return b(), null !== (e = document.getElementById(ue)) && void 0 !== e && e.addEventListener("click", s),
                            function() {
                                var e;
                                a(), null !== (e = document.getElementById(ue)) && void 0 !== e && e.removeEventListener("click", s)
                            }
                    }, []), (0, D.useImperativeHandle)(t, function() {
                        return {
                            start: b,
                            stop: a,
                            next: n,
                            back: r
                        }
                    });
                    t = function(e) {
                        e.stopPropagation()
                    };
                    return O().createElement("div", {
                        "data-testid": "carousel",
                        onFocus: function() {
                            d(!0), m.current = !0, a()
                        },
                        onBlur: function() {
                            d(!1), m.current = !1, b()
                        },
                        onMouseEnter: function() {
                            d(!0), m.current = !0, a()
                        },
                        onMouseLeave: function() {
                            d(!1), m.current = !1, b()
                        }
                    }, 1 < c.length && O().createElement(O().Fragment, null, O().createElement(M.Button, {
                        className: re()("carousel-controls", "carousel-controls-left", {
                            "carousel-controls-visible": l
                        }),
                        onClick: r,
                        onBlur: t,
                        "aria-label": o(ce.back)
                    }, O().createElement("span", {
                        className: "icon-carousel-left"
                    })), O().createElement(M.Button, {
                        className: re()("carousel-controls", "carousel-controls-right", {
                            "carousel-controls-visible": l
                        }),
                        onClick: n,
                        onBlur: t,
                        "aria-label": o(ce.next)
                    }, O().createElement("span", {
                        className: "icon-carousel-right"
                    }))), c.map(function(e, t) {
                        switch (e.type) {
                            case E.Image:
                            case E.Place:
                                return O().createElement(ae.Thumbnail2d, {
                                    key: e.assetId,
                                    type: e.type === E.Image ? ae.ThumbnailTypes.assetThumbnail : ae.ThumbnailTypes.gameThumbnail,
                                    size: ae.ThumbnailUniverseThumbnailSize.width768,
                                    targetId: e.assetId,
                                    altName: e.altText,
                                    containerClass: re()("carousel-item", {
                                        "carousel-item-active": t === u,
                                        "carousel-item-active-out": t === (u - 1 < 0 ? c.length - 1 : u - 1) || t === (u + 1) % c.length
                                    })
                                });
                            case E.YouTubeVideo:
                                return O().createElement(Se, {
                                    ref: function(e) {
                                        e && (y.current[t] = e)
                                    },
                                    id: e.videoHash,
                                    key: e.videoHash,
                                    className: re()("carousel-item", "carousel-video", {
                                        "carousel-item-active": t === u,
                                        "carousel-item-active-out": t === (u - 1 < 0 ? c.length - 1 : u - 1) || t === (u + 1) % c.length
                                    }),
                                    onPlay: function() {
                                        a(), p(!0)
                                    },
                                    onPaused: function() {
                                        b(), p(!1)
                                    },
                                    onEnd: function() {
                                        n(), p(!1)
                                    },
                                    onReady: function() {
                                        var e;
                                        0 === t && g.current === t && null !== (e = y.current) && void 0 !== e && e[t].play(0)
                                    }
                                });
                            default:
                                return null
                        }
                    }))
                }),
                Te = function(e, o, l, u) {
                    return new(l = l || Promise)(function(n, t) {
                        function r(e) {
                            try {
                                i(u.next(e))
                            } catch (e) {
                                t(e)
                            }
                        }

                        function a(e) {
                            try {
                                i(u.throw(e))
                            } catch (e) {
                                t(e)
                            }
                        }

                        function i(e) {
                            var t;
                            e.done ? n(e.value) : ((t = e.value) instanceof l ? t : new l(function(e) {
                                e(t)
                            })).then(r, a)
                        }
                        i((u = u.apply(e, o || [])).next())
                    })
                },
                Pe = function(n, r) {
                    var a, i, o, l = {
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
                                if (a) throw new TypeError("Generator is already executing.");
                                for (; l;) try {
                                    if (a = 1, i && (o = 2 & t[0] ? i.return : t[0] ? i.throw || ((o = i.return) && o.call(i), 0) : i.next) && !(o = o.call(i, t[1])).done) return o;
                                    switch (i = 0, o && (t = [2 & t[0], o.value]), t[0]) {
                                        case 0:
                                        case 1:
                                            o = t;
                                            break;
                                        case 4:
                                            return l.label++, {
                                                value: t[1],
                                                done: !1
                                            };
                                        case 5:
                                            l.label++, i = t[1], t = [0];
                                            continue;
                                        case 7:
                                            t = l.ops.pop(), l.trys.pop();
                                            continue;
                                        default:
                                            if (!(o = 0 < (o = l.trys).length && o[o.length - 1]) && (6 === t[0] || 2 === t[0])) {
                                                l = 0;
                                                continue
                                            }
                                            if (3 === t[0] && (!o || t[1] > o[0] && t[1] < o[3])) {
                                                l.label = t[1];
                                                break
                                            }
                                            if (6 === t[0] && l.label < o[1]) {
                                                l.label = o[1], o = t;
                                                break
                                            }
                                            if (o && l.label < o[2]) {
                                                l.label = o[2], l.ops.push(t);
                                                break
                                            }
                                            o[2] && l.ops.pop(), l.trys.pop();
                                            continue
                                    }
                                    t = r.call(n, l)
                                } catch (e) {
                                    t = [6, e], i = 0
                                } finally {
                                    a = o = 0
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
                _e = k.dataStores.gamesDataStore,
                Ce = {},
                ke = function(n) {
                    return Te(void 0, void 0, Promise, function() {
                        var t;
                        return Pe(this, function(e) {
                            switch (e.label) {
                                case 0:
                                    return Ce[n] ? [2, Ce[n]] : [4, _e.getUniverseMedia(n)];
                                case 1:
                                    return t = e.sent().data.data, t = (void 0 === t ? [] : t).filter(function(e) {
                                        return e.approved
                                    }).map(function(e) {
                                        switch (e.assetType) {
                                            case E.Image:
                                                return {
                                                    type: e.assetType,
                                                    assetId: e.imageId,
                                                    altText: e.altText
                                                };
                                            case E.YouTubeVideo:
                                                return {
                                                    type: e.assetType,
                                                    videoHash: e.videoHash
                                                };
                                            default:
                                                return {
                                                    type: E.Unknown,
                                                    assetId: 0
                                                }
                                        }
                                    }).filter(function(e) {
                                        return e.type !== E.Unknown
                                    }), [2, Ce[n] = t]
                            }
                        })
                    })
                },
                Ne = function(e, o, l, u) {
                    return new(l = l || Promise)(function(n, t) {
                        function r(e) {
                            try {
                                i(u.next(e))
                            } catch (e) {
                                t(e)
                            }
                        }

                        function a(e) {
                            try {
                                i(u.throw(e))
                            } catch (e) {
                                t(e)
                            }
                        }

                        function i(e) {
                            var t;
                            e.done ? n(e.value) : ((t = e.value) instanceof l ? t : new l(function(e) {
                                e(t)
                            })).then(r, a)
                        }
                        i((u = u.apply(e, o || [])).next())
                    })
                },
                Le = function(n, r) {
                    var a, i, o, l = {
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
                                if (a) throw new TypeError("Generator is already executing.");
                                for (; l;) try {
                                    if (a = 1, i && (o = 2 & t[0] ? i.return : t[0] ? i.throw || ((o = i.return) && o.call(i), 0) : i.next) && !(o = o.call(i, t[1])).done) return o;
                                    switch (i = 0, o && (t = [2 & t[0], o.value]), t[0]) {
                                        case 0:
                                        case 1:
                                            o = t;
                                            break;
                                        case 4:
                                            return l.label++, {
                                                value: t[1],
                                                done: !1
                                            };
                                        case 5:
                                            l.label++, i = t[1], t = [0];
                                            continue;
                                        case 7:
                                            t = l.ops.pop(), l.trys.pop();
                                            continue;
                                        default:
                                            if (!(o = 0 < (o = l.trys).length && o[o.length - 1]) && (6 === t[0] || 2 === t[0])) {
                                                l = 0;
                                                continue
                                            }
                                            if (3 === t[0] && (!o || t[1] > o[0] && t[1] < o[3])) {
                                                l.label = t[1];
                                                break
                                            }
                                            if (6 === t[0] && l.label < o[1]) {
                                                l.label = o[1], o = t;
                                                break
                                            }
                                            if (o && l.label < o[2]) {
                                                l.label = o[2], l.ops.push(t);
                                                break
                                            }
                                            o[2] && l.ops.pop(), l.trys.pop();
                                            continue
                                    }
                                    t = r.call(n, l)
                                } catch (e) {
                                    t = [6, e], i = 0
                                } finally {
                                    a = o = 0
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
                Re = (0, u.withTranslations)(function(e) {
                    var t = e.translate,
                        n = e.placeId,
                        r = e.universeId,
                        a = e.delay,
                        i = (0, D.useState)(void 0),
                        e = i[0],
                        o = i[1];
                    return (0, D.useEffect)(function() {
                        Ne(void 0, void 0, void 0, function() {
                            var t;
                            return Le(this, function(e) {
                                switch (e.label) {
                                    case 0:
                                        return e.trys.push([0, 2, , 3]), [4, ke(r)];
                                    case 1:
                                        return t = e.sent(), o(t), [3, 3];
                                    case 2:
                                        return e.sent(), o([]), [3, 3];
                                    case 3:
                                        return [2]
                                }
                            })
                        })
                    }, [r]), void 0 === e ? O().createElement("div", {
                        className: "shimmer",
                        "data-testid": "loading"
                    }) : 0 === e.length ? O().createElement(xe, {
                        translate: t,
                        delay: a,
                        items: [{
                            type: E.Place,
                            assetId: parseInt(n, 10)
                        }]
                    }) : O().createElement(xe, {
                        translate: t,
                        delay: a,
                        items: e
                    })
                }, n),
                Ae = "game-detail-meta-data",
                De = function() {
                    var e, r = (null === (e = pe()) || void 0 === e ? void 0 : e.dataset) || {};
                    return Object.keys(r).reduce(function(e, t) {
                        var n = r[t].toLowerCase();
                        return e[t] = "true" === n || "false" !== n && r[t], e
                    }, {})
                };

            function Oe(e, n) {
                return e.filter(function(e) {
                    var t;
                    return (null === (t = e.presence) || void 0 === t ? void 0 : t.universeId) === n && (null === (e = e.presence) || void 0 === e ? void 0 : e.userPresenceType) === S.Presence.PresenceTypes.InGame
                })
            }

            function Fe(e, t) {
                var n = 0;
                if (void 0 !== e && void 0 !== t) {
                    if (!Number.isNaN(e) && !Number.isNaN(t)) {
                        if (0 === e && 0 === t) return;
                        n = 0 === e && 0 !== t ? 0 : 0 !== e && 0 === t || 100 < (n = Math.floor(e / (e + t) * 100)) ? 100 : n
                    }
                    return n
                }
            }

            function Me(n) {
                return Object.keys(n).reduce(function(e, t) {
                    return "object" == typeof n[t] && n[t] && (e[t] = JSON.stringify(n[t])), "number" == typeof n[t] && (e[t] = n[t]), "string" == typeof n[t] && (e[t] = encodeURIComponent(n[t])), "boolean" == typeof n[t] && (e[t] = n[t] ? 1 : 0), e
                }, {})
            }

            function Ue(t, e) {
                var n;
                return e.some(function(e) {
                    return null === (e = t[e]) || void 0 === e ? void 0 : e.isSponsored
                }) ? ((n = {})[at.AdsPositions] = e.map(function(e) {
                    return t[e].isSponsored ? 1 : 0
                }), n[at.AdFlags] = e.map(function(e) {
                    return t[e].isSponsored ? 1 : 0
                }), n[at.AdIds] = e.map(function(e) {
                    return (null === (e = t[e]) || void 0 === e ? void 0 : e.nativeAdData) || "0"
                }), n) : {}
            }

            function Ge(e, t) {
                function n(e) {
                    return (e = null === (e = null == e ? void 0 : e.primaryMediaAsset) || void 0 === e ? void 0 : e.wideImageAssetId) && "0" !== e ? parseInt(e, 10) : null
                }
                var r;
                return e.layoutDataBySort && t && e.layoutDataBySort[t] ? r = n(e.layoutDataBySort[t]) : e.defaultLayoutData && (r = n(e.defaultLayoutData)), r || n(e)
            }

            function je(e) {
                var t = e.tileBadgesByPosition,
                    e = [];
                if (t) return !t.ImageTopLeft || (t = t.ImageTopLeft.map(function(e) {
                    return e.analyticsId
                })) && 0 < t.length && e.push("ImageTopLeft=" + t.join("+")), 0 < e.length ? e.join("&") : void 0
            }

            function Be(e) {
                if ((e = _.urlService.getQueryParam(e)) && "string" == typeof e) return e
            }

            function Ve(e) {
                return void 0 !== e ? {
                    inputUniverseIds: {
                        interestCatcher: e.map(function(e) {
                            return e.toString()
                        })
                    }
                } : {}
            }(Bn = {}).Game = "Game", Bn.CatalogAsset = "CatalogAsset", Bn.CatalogBundle = "CatalogBundle", (rr = he = he || {}).Carousel = "Carousel", rr.AvatarCarousel = "AvatarCarousel", rr.SortlessGrid = "SortlessGrid", rr.FriendCarousel = "FriendCarousel", rr.InterestGrid = "InterestGrid", rr.Pills = "Pills", rr.Sdui = "sdui", rr.SongCarousel = "SongCarousel", (Ra = {}).Carousel = "Carousel", Ra.HeroUnit = "HeroUnit", (ji = {}).Sponsored = "Sponsored", ji.SponsoredGame = "SponsoredGame", (Vi = ge = ge || {}).AppGameTileNoMetadata = "AppGameTileNoMetadata", Vi.GridTile = "GridTile", Vi.EventTile = "EventTile", Vi.InterestTile = "InterestTile", Vi.ExperienceEventsTile = "ExperienceEventsTile", (Nt = ye = ye || {}).Always = "Always", Nt.Hover = "Hover", Nt.Footer = "Footer", (ln = be = be || {}).Disabled = "Disabled", ln.Enabled = "Enabled", (Ee = Ee || {}).imageOverlay = "imageOverlay";
            var qe, We = function(e, t) {
                    for (var n = 0, r = t.length, a = e.length; n < r; n++, a++) e[a] = t[n];
                    return e
                },
                He = (new S.Intl).getDateTimeFormatter(),
                ze = _.urlService.parseQueryString,
                $e = _.numberFormat.getNumberFormat,
                Je = {
                    capitalize: function(e) {
                        return e.charAt(0).toUpperCase() + e.slice(1)
                    },
                    parseEventParams: Me,
                    getInGameFriends: Oe,
                    getVotePercentageValue: Fe,
                    getVotePercentage: function(e, t) {
                        t = Fe(e, t);
                        return void 0 !== t ? t + "%" : void 0
                    },
                    getPlayerCount: function(e) {
                        return -1 === e ? "--" : _.abbreviateNumber.getAbbreviatedValue(e)
                    },
                    getNumberFormat: $e,
                    dateTimeFormatter: He,
                    parseQueryString: ze,
                    composeQueryString: function(e) {
                        e = _.urlService.composeQueryString(e);
                        return e ? "?" + e : ""
                    },
                    getSponsoredAdImpressionsData: Ue,
                    getThumbnailAssetIdImpressionsData: function(r, a, e, t) {
                        return t === ge.GridTile || t === ge.EventTile || t === ge.InterestTile ? ((t = {})[at.ThumbnailAssetIds] = e.map(function(e) {
                            return null !== (e = Ge(r[e], a.toString())) && void 0 !== e ? e : "0"
                        }), t[at.ThumbnailListIds] = e.map(function(e) {
                            var t, n;
                            return null !== (t = r[e], e = a.toString(), t = t.layoutDataBySort && e && t.layoutDataBySort[e] ? null === (n = t.layoutDataBySort[e].primaryMediaAsset) || void 0 === n ? void 0 : n.wideImageListId : t.defaultLayoutData ? null === (n = t.defaultLayoutData.primaryMediaAsset) || void 0 === n ? void 0 : n.wideImageListId : null === (t = t.primaryMediaAsset) || void 0 === t ? void 0 : t.wideImageListId) && void 0 !== t ? t : "0"
                        }), t) : {}
                    },
                    getTileBadgeContextsImpressionsData: function(r, a, e, t) {
                        return t === ge.GridTile || t === ge.EventTile || t === ge.InterestTile ? ((t = {})[at.TileBadgeContexts] = e.map(function(e) {
                            var t, n;
                            return null !== (t = r[e], e = a.toString(), t.layoutDataBySort && e && t.layoutDataBySort[e] ? n = je(t.layoutDataBySort[e]) : t.defaultLayoutData && (n = je(t.defaultLayoutData)), n) && void 0 !== n ? n : "0"
                        }), t) : {}
                    },
                    calculateImpressedIndexes: function(e, n) {
                        if (void 0 === e) return Array.from(new Array(n[1] - n[0] + 1), function(e, t) {
                            return t + n[0]
                        });
                        var r = n[0] < e[0] ? [n[0], e[0]] : void 0,
                            a = n[1] > e[1] ? [e[1], n[1]] : void 0,
                            t = r ? new Array(r[1] - r[0]).fill(0).map(function(e, t) {
                                return t + r[0]
                            }) : [],
                            e = a ? new Array(a[1] - a[0]).fill(0).map(function(e, t) {
                                return t + a[0] + 1
                            }) : [];
                        return We(We([], t), e)
                    },
                    splitArray: function(n, r) {
                        if (0 === n.length || 0 === r) return [n];
                        var e = Math.ceil(n.length / r);
                        return new Array(e).fill(0).map(function(e, t) {
                            return n.slice(t * r, (t + 1) * r)
                        })
                    },
                    GAME_STATS_PLACEHOLDER_STRING: "--",
                    getQueryParamIfString: Be,
                    getInputUniverseIdsRequestParam: Ve
                },
                Ke = "robloxAttributionIds";

            function Ye(e) {
                var t = window,
                    n = t[Ke];
                return n || (n = {}, t[Ke] = n), (t = n[e]) || (t = _.uuidService.generateRandomUuid(), n[e] = t), t
            }(qe = qe || {}).GameDetailReferral = "gameDetailReferral";
            var Qe, Ze = Ye;
            (a = Qe = Qe || {}).SearchPage = "searchPage", a.SortDetailPageDiscover = "sortDetailPageDiscover", a.SortDetailPageHome = "sortDetailPageHome", a.GameDetailPage = "gameDetailPage", a.GamesPage = "gamesPage", a.HomePage = "homePage", a.PeopleListInHomePage = "peopleListInHomePage", a.InterestCatcher = "interestCatcher", a.SearchLandingPage = "searchLandingPage", a.SpotlightPage = "spotlightPage";
            var Xe = function(e, o, l, u) {
                    return new(l = l || Promise)(function(n, t) {
                        function r(e) {
                            try {
                                i(u.next(e))
                            } catch (e) {
                                t(e)
                            }
                        }

                        function a(e) {
                            try {
                                i(u.throw(e))
                            } catch (e) {
                                t(e)
                            }
                        }

                        function i(e) {
                            var t;
                            e.done ? n(e.value) : ((t = e.value) instanceof l ? t : new l(function(e) {
                                e(t)
                            })).then(r, a)
                        }
                        i((u = u.apply(e, o || [])).next())
                    })
                },
                et = function(n, r) {
                    var a, i, o, l = {
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
                                if (a) throw new TypeError("Generator is already executing.");
                                for (; l;) try {
                                    if (a = 1, i && (o = 2 & t[0] ? i.return : t[0] ? i.throw || ((o = i.return) && o.call(i), 0) : i.next) && !(o = o.call(i, t[1])).done) return o;
                                    switch (i = 0, o && (t = [2 & t[0], o.value]), t[0]) {
                                        case 0:
                                        case 1:
                                            o = t;
                                            break;
                                        case 4:
                                            return l.label++, {
                                                value: t[1],
                                                done: !1
                                            };
                                        case 5:
                                            l.label++, i = t[1], t = [0];
                                            continue;
                                        case 7:
                                            t = l.ops.pop(), l.trys.pop();
                                            continue;
                                        default:
                                            if (!(o = 0 < (o = l.trys).length && o[o.length - 1]) && (6 === t[0] || 2 === t[0])) {
                                                l = 0;
                                                continue
                                            }
                                            if (3 === t[0] && (!o || t[1] > o[0] && t[1] < o[3])) {
                                                l.label = t[1];
                                                break
                                            }
                                            if (6 === t[0] && l.label < o[1]) {
                                                l.label = o[1], o = t;
                                                break
                                            }
                                            if (o && l.label < o[2]) {
                                                l.label = o[2], l.ops.push(t);
                                                break
                                            }
                                            o[2] && l.ops.pop(), l.trys.pop();
                                            continue
                                    }
                                    t = r.call(n, l)
                                } catch (e) {
                                    t = [6, e], i = 0
                                } finally {
                                    a = o = 0
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

            function tt(i, o) {
                return lt(void 0, void 0, Promise, function() {
                    var a;
                    return ut(this, function(e) {
                        switch (e.label) {
                            case 0:
                                return [4, function() {
                                    return Xe(this, void 0, Promise, function() {
                                        var t;
                                        return et(this, function(e) {
                                            switch (e.label) {
                                                case 0:
                                                    t = S.EnvironmentUrls.universalAppConfigurationApi, e.label = 1;
                                                case 1:
                                                    return e.trys.push([1, 3, , 4]), [4, _.httpService.get({
                                                        url: t + "/v1/behaviors/abuse-reporting-revamp/content"
                                                    })];
                                                case 2:
                                                    return t = e.sent(), (t = null == t ? void 0 : t.data) ? [2, {
                                                        EnableExperience: Boolean(t.EnableExperience)
                                                    }] : [2, {
                                                        EnableExperience: !1
                                                    }];
                                                case 3:
                                                    return e.sent(), [2, {
                                                        EnableExperience: !1
                                                    }];
                                                case 4:
                                                    return [2]
                                            }
                                        })
                                    })
                                }()];
                            case 1:
                                return e.sent().EnableExperience ? (t = {
                                    targetId: i,
                                    submitterId: S.CurrentUser.userId,
                                    abuseVector: "experience"
                                }, n = t.targetId, r = t.submitterId, t = t.abuseVector, [2, "/report-abuse/?" + new URLSearchParams({
                                    targetId: n,
                                    submitterId: r,
                                    abuseVector: t
                                }).toString()]) : (a = {
                                    id: i,
                                    RedirectUrl: encodeURIComponent(k.entityUrl.game.getRelativePath(i) + "/" + _.seoName.formatSeoName(o))
                                }, [2, _.urlService.getUrlWithQueries("/abusereport/asset", a)])
                        }
                        var t, n, r
                    })
                })
            }

            function nt(e) {
                return _.urlService.getAbsoluteUrl("/events/" + e)
            }

            function rt() {
                return document.referrer
            }
            var at, it, ot, lt = function(e, o, l, u) {
                    return new(l = l || Promise)(function(n, t) {
                        function r(e) {
                            try {
                                i(u.next(e))
                            } catch (e) {
                                t(e)
                            }
                        }

                        function a(e) {
                            try {
                                i(u.throw(e))
                            } catch (e) {
                                t(e)
                            }
                        }

                        function i(e) {
                            var t;
                            e.done ? n(e.value) : ((t = e.value) instanceof l ? t : new l(function(e) {
                                e(t)
                            })).then(r, a)
                        }
                        i((u = u.apply(e, o || [])).next())
                    })
                },
                ut = function(n, r) {
                    var a, i, o, l = {
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
                                if (a) throw new TypeError("Generator is already executing.");
                                for (; l;) try {
                                    if (a = 1, i && (o = 2 & t[0] ? i.return : t[0] ? i.throw || ((o = i.return) && o.call(i), 0) : i.next) && !(o = o.call(i, t[1])).done) return o;
                                    switch (i = 0, o && (t = [2 & t[0], o.value]), t[0]) {
                                        case 0:
                                        case 1:
                                            o = t;
                                            break;
                                        case 4:
                                            return l.label++, {
                                                value: t[1],
                                                done: !1
                                            };
                                        case 5:
                                            l.label++, i = t[1], t = [0];
                                            continue;
                                        case 7:
                                            t = l.ops.pop(), l.trys.pop();
                                            continue;
                                        default:
                                            if (!(o = 0 < (o = l.trys).length && o[o.length - 1]) && (6 === t[0] || 2 === t[0])) {
                                                l = 0;
                                                continue
                                            }
                                            if (3 === t[0] && (!o || t[1] > o[0] && t[1] < o[3])) {
                                                l.label = t[1];
                                                break
                                            }
                                            if (6 === t[0] && l.label < o[1]) {
                                                l.label = o[1], o = t;
                                                break
                                            }
                                            if (o && l.label < o[2]) {
                                                l.label = o[2], l.ops.push(t);
                                                break
                                            }
                                            o[2] && l.ops.pop(), l.trys.pop();
                                            continue
                                    }
                                    t = r.call(n, l)
                                } catch (e) {
                                    t = [6, e], i = 0
                                } finally {
                                    a = o = 0
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
                st = function(e, t, n) {
                    return void 0 === n && (n = {}), _.urlService.getUrlWithQueries(k.entityUrl.game.getRelativePath(e) + "/" + _.seoName.formatSeoName(t), n)
                },
                ct = function() {
                    return (ct = Object.assign || function(e) {
                        for (var t, n = 1, r = arguments.length; n < r; n++)
                            for (var a in t = arguments[n]) Object.prototype.hasOwnProperty.call(t, a) && (e[a] = t[a]);
                        return e
                    }).apply(this, arguments)
                },
                ft = function(e, t) {
                    var n = {};
                    for (a in e) Object.prototype.hasOwnProperty.call(e, a) && t.indexOf(a) < 0 && (n[a] = e[a]);
                    if (null != e && "function" == typeof Object.getOwnPropertySymbols)
                        for (var r = 0, a = Object.getOwnPropertySymbols(e); r < a.length; r++) t.indexOf(a[r]) < 0 && Object.prototype.propertyIsEnumerable.call(e, a[r]) && (n[a[r]] = e[a[r]]);
                    return n
                },
                dt = (Fi = k.eventStreamService.eventTypes).pageLoad,
                mt = Fi.formInteraction;

            function vt(e) {
                e instanceof SyntaxError && window.sessionStorage.removeItem(gt)
            }(Mi = at = at || {}).AbsPositions = "absPositions", Mi.AdsPositions = "adsPositions", Mi.AdFlags = "adFlags", Mi.Algorithm = "algorithm", Mi.AppliedFilters = "appliedFilters", Mi.AttributionId = "attributionId", Mi.ComponentType = "componentType", Mi.Direction = "direction", Mi.Distance = "distance", Mi.HttpReferrer = "httpReferrer", Mi.EmphasisFlag = "emphasisFlag", Mi.FilterId = "filterId", Mi.FilterIds = "filterIds", Mi.GameSetTargetId = "gameSetTargetId", Mi.GameSetTypeId = "gameSetTypeId", Mi.InteractionType = "interactionType", Mi.IsAd = "isAd", Mi.NativeAdData = "nativeAdData", Mi.AdIds = "adIds", Mi.NumberOfLoadedTiles = "numberOfLoadedTiles", Mi.Page = "page", Mi.PageSession = "pageSession", Mi.PlaceId = "placeId", Mi.PlayContext = "playContext", Mi.Position = "position", Mi.PreviousOptionId = "previousOptionId", Mi.PromptId = "promptId", Mi.PromptText = "promptText", Mi.ResourceId = "resourceId", Mi.ResponseOptionIds = "responseOptionIds", Mi.ResponseOptionTexts = "responseOptionTexts", Mi.RootPlaceIds = "rootPlaceIds", Mi.SelectedIds = "selectedIds", Mi.SelectedTexts = "selectedTexts", Mi.ScreenSizeX = "screenSizeX", Mi.ScreenSizeY = "screenSizeY", Mi.ScrollAreaSize = "scrollAreaSize", Mi.ScrollDepth = "scrollDepth", Mi.SelectedOptionId = "selectedOptionId", Mi.SelectedOptionIds = "selectedOptionIds", Mi.ShareLinkType = "shareLinkType", Mi.ShareLinkId = "shareLinkId", Mi.SortId = "sortId", Mi.SortPos = "sortPos", Mi.StartDepth = "startDepth", Mi.StartPos = "startPos", Mi.SubPageName = "subPageName", Mi.SuggestionKwd = "suggestionKwd", Mi.SuggestionReplacedKwd = "suggestionReplacedKwd", Mi.SuggestionCorrectedKwd = "suggestionCorrectedKwd", Mi.SuggestionAlgorithm = "suggestionAlgorithm", Mi.TimeToRespond = "timeToRespond", Mi.Token = "token", Mi.Topics = "topics", Mi.TreatmentType = "treatmentType", Mi.UniverseId = "universeId", Mi.UniverseIds = "universeIds", Mi.FriendId = "friendId", Mi.ThumbnailAssetIds = "thumbnailAssetIds", Mi.ThumbnailListIds = "thumbnailListIds", Mi.LinkPath = "linkPath", Mi.LocationName = "locationName", Mi.RowsOnPage = "rowsOnPage", Mi.PositionsInRow = "positionsInRow", Mi.NavigationUids = "navigationUids", Mi.TileBadgeContexts = "tileBadgeContexts", Mi.ButtonName = "buttonName", Mi.IsInterested = "isInterested", Mi.InterestedUniverseIds = "interestedUniverseIds", (ne = it = it || {}).GameImpressions = "gameImpressions", ne.GameDetailReferral = "gameDetailReferral", ne.SortDetailReferral = "sortDetailReferral", ne.FeedScroll = "feedScroll", ne.NavigateToSortLink = "navigateToSortLink", ne.SurveyInteraction = "surveyInteraction", ne.SurveyImpression = "surveyImpression", ne.InterestCatcherClick = "interestCatcherClick", ne.FilterImpressions = "filterImpressions", ne.GamesFilterClick = "gamesFilterClick", ne.RequestRefundClick = "requestRefundClick", (ie = ot = ot || {}).HomePageSessionInfo = "homePageSessionInfo", ie.GameSearchSessionInfo = "gameSearchSessionInfo", ie.DiscoverPageSessionInfo = "discoverPageSessionInfo", ie.SearchLandingPageSessionInfo = "searchLandingPageSessionInfo", ie.SpotlightPageSessionInfo = "spotlightPageSessionInfo", (Gi = {}).Submission = "submission", Gi.Cancellation = "cancellation", (n = {}).Horizontal = "horizontal", n.Vertical = "vertical", (Bn = {}).Skip = "skip", Bn.Continue = "continue", Bn.Interested = "interested", (rr = {}).OpenDropdown = "openDropdown", rr.CloseDropdown = "closeDropdown", rr.Apply = "apply";
            var pt = ((Ra = {})[it.GameImpressions] = function(e) {
                    e = ft(e, []);
                    return [{
                        name: it.GameImpressions,
                        type: it.GameImpressions,
                        context: mt
                    }, Me(ct({}, e))]
                }, Ra[it.GameDetailReferral] = function(e) {
                    var t;
                    return void 0 === e && (e = {}), [{
                        name: it.GameDetailReferral,
                        type: it.GameDetailReferral,
                        context: dt
                    }, Me(ct(((t = {})[at.AttributionId] = Ye(qe.GameDetailReferral), t[at.HttpReferrer] = rt(), t), e))]
                }, Ra[it.SortDetailReferral] = function(e) {
                    return void 0 === e && (e = {}), [{
                        name: it.SortDetailReferral,
                        type: it.SortDetailReferral,
                        context: dt
                    }, Me(ct({}, e))]
                }, Ra[it.NavigateToSortLink] = function(e) {
                    return void 0 === e && (e = {}), [{
                        name: it.NavigateToSortLink,
                        type: it.NavigateToSortLink,
                        context: mt
                    }, Me(ct({}, e))]
                }, Ra[it.SurveyInteraction] = function(e) {
                    return void 0 === e && (e = {}), [{
                        name: it.SurveyInteraction,
                        type: it.SurveyInteraction,
                        context: mt
                    }, Me(ct({}, e))]
                }, Ra[it.SurveyImpression] = function(e) {
                    return void 0 === e && (e = {}), [{
                        name: it.SurveyImpression,
                        type: it.SurveyImpression,
                        context: mt
                    }, Me(ct({}, e))]
                }, Ra[it.InterestCatcherClick] = function(e) {
                    return void 0 === e && (e = {}), [{
                        name: it.InterestCatcherClick,
                        type: it.InterestCatcherClick,
                        context: mt
                    }, Me(ct({}, e))]
                }, Ra[it.FilterImpressions] = function(e) {
                    return void 0 === e && (e = {}), [{
                        name: it.FilterImpressions,
                        type: it.FilterImpressions,
                        context: mt
                    }, Me(ct({}, e))]
                }, Ra[it.GamesFilterClick] = function(e) {
                    return void 0 === e && (e = {}), [{
                        name: it.GamesFilterClick,
                        type: it.GamesFilterClick,
                        context: mt
                    }, Me(ct({}, e))]
                }, Ra[it.RequestRefundClick] = function(e) {
                    var t;
                    return [{
                        name: it.RequestRefundClick,
                        type: it.RequestRefundClick,
                        context: mt
                    }, Me(((t = {})[at.PlaceId] = e.placeId, t))]
                }, Ra),
                ht = function() {
                    return (ht = Object.assign || function(e) {
                        for (var t, n = 1, r = arguments.length; n < r; n++)
                            for (var a in t = arguments[n]) Object.prototype.hasOwnProperty.call(t, a) && (e[a] = t[a]);
                        return e
                    }).apply(this, arguments)
                },
                gt = "eventTracker",
                yt = function(e) {
                    try {
                        var t = JSON.parse(window.sessionStorage.getItem(gt) || "{}"),
                            t = ht(ht({}, t), e);
                        return window.sessionStorage.setItem(gt, JSON.stringify(t)), !0
                    } catch (e) {
                        return vt(e), !1
                    }
                };

            function bt(e) {
                void 0 === e && (e = window.location);
                var r = ze(e.search);
                return r ? Object.entries(It).reduce(function(e, t) {
                    var n = t[0],
                        t = t[1].find(function(e) {
                            return void 0 !== r[e] && null !== r[e]
                        });
                    return !t || "string" != typeof r[t] && "number" != typeof r[t] || (e[n] = r[t]), e
                }, {}) : {}
            }

            function Et(e, t) {
                try {
                    var n = new URL(e);
                    return Bt.includes(n.pathname) ? null !== (n = n.searchParams.get(t)) && void 0 !== n ? n : "" : ""
                } catch (e) {
                    return ""
                }
            }

            function St(e) {
                try {
                    var t = new URL(e).searchParams.get("referralUrl");
                    if (!t) return null;
                    var n = new URL(decodeURIComponent(t));
                    return (t = n, Bt.includes(t.pathname) && Vt.includes(null !== (t = t.searchParams.get("type")) && void 0 !== t ? t : "")) ? n.href : null
                } catch (e) {
                    return null
                }
            }(ji = Bi = Bi || {}).AfAd = "af_ad", ji.AfAdId = "af_ad_id", ji.AfAdset = "af_adset", ji.AfAdsetId = "af_adset_id", ji.AfChannel = "af_channel", ji.AfCid = "af_c_id", ji.AfSub1 = "af_sub1", ji.AfSub2 = "af_sub2", ji.AfSub4 = "af_sub4", ji.C = "c", ji.Pid = "pid", ji.Gclid = "gclid", ji.Fbclid = "fbclid";
            var wt, It = ((Vi = {})[Bi.AfAd] = ["utm_adname", "af_ad"], Vi[Bi.AfAdId] = ["utm_adid", "af_ad_id"], Vi[Bi.AfAdset] = ["utm_adset", "af_adset"], Vi[Bi.AfAdsetId] = ["utm_adsetid", "af_adset_id"], Vi[Bi.AfChannel] = ["utm_channel", "af_channel"], Vi[Bi.AfCid] = ["utm_id", "af_c_id"], Vi[Bi.AfSub1] = ["gclid", "af_sub1"], Vi[Bi.Gclid] = ["gclid", "gclid"], Vi[Bi.AfSub2] = ["fbclid", "af_sub2"], Vi[Bi.Fbclid] = ["fbclid", "fbclid"], Vi[Bi.C] = ["utm_campaign", "c"], Vi[Bi.Pid] = ["utm_source", "pid"], Vi[Bi.AfSub4] = ["utm_control_test", "af_sub4"], Vi),
                xt = function() {
                    return (xt = Object.assign || function(e) {
                        for (var t, n = 1, r = arguments.length; n < r; n++)
                            for (var a in t = arguments[n]) Object.prototype.hasOwnProperty.call(t, a) && (e[a] = t[a]);
                        return e
                    }).apply(this, arguments)
                },
                Tt = Je.parseQueryString,
                Pt = Je.composeQueryString,
                _t = function(r, a, i, o, l, u) {
                    void 0 === o && (o = {}), void 0 === l && (l = window.location), void 0 === u && (u = window.history);
                    var e = (0, D.useState)(Tt(l.search)),
                        t = e[0],
                        s = e[1],
                        e = (0, D.useMemo)(function() {
                            return bt(l)
                        }, [l]);
                    return (0, D.useEffect)(function() {
                        var n, e, t;
                        n = Tt(l.search), e = a.reduce(function(e, t) {
                            return void 0 === n[t] && null === n[t] || (e[t] = n[t]), e
                        }, {}), !(t = i.reduce(function(e, t) {
                            return void 0 === n[t] && null === n[t] || (e[t] = n[t]), e
                        }, {})).launchData && t.placeId && delete t.placeId, s(e), yt(e), void 0 !== u.replace && u.replace("" + l.pathname + Pt(t)), void 0 !== u.replaceState && u.replaceState(void 0, "", "" + l.pathname + l.hash + Pt(t)), k.eventStreamService.sendEvent.apply(k.eventStreamService, r(xt(xt({}, e), o)))
                    }, []), {
                        referralParams: t,
                        appsFlyerReferralParams: e
                    }
                },
                Ct = S.EnvironmentUrls.apiGatewayUrl,
                kt = {
                    getExperimentationValues: function(e, t, n) {
                        return {
                            url: Ct + "/product-experimentation-platform/v1/projects/" + e + "/layers/" + t + "/values?parameters=" + n.join(","),
                            withCredentials: !0
                        }
                    }
                },
                Nt = {
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
                        IsChartsPageRenameEnabled: !0,
                        IsMusicChartsCarouselEnabled: !0
                    },
                    tileLayer: {},
                    playButton: {}
                },
                Lt = {
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
                Rt = S.EnvironmentUrls.apiGatewayUrl,
                At = {
                    url: {
                        getOmniRecommendations: {
                            url: Rt + "/discovery-api/omni-recommendation",
                            withCredentials: !0
                        },
                        getOmniRecommendationsMetadata: {
                            url: Rt + "/discovery-api/omni-recommendation-metadata",
                            withCredentials: !0
                        },
                        getOmniSearch: {
                            url: Rt + "/search-api/omni-search",
                            withCredentials: !0
                        },
                        getExploreSorts: {
                            url: Rt + "/explore-api/v1/get-sorts",
                            withCredentials: !0
                        },
                        getExploreSortContents: {
                            url: Rt + "/explore-api/v1/get-sort-content",
                            withCredentials: !0
                        },
                        getSearchLandingPage: {
                            url: Rt + "/search-api/search-landing-page",
                            withCredentials: !0
                        },
                        getSurvey: function(e) {
                            return {
                                url: Rt + "/rocap/v1/locations/" + e + "/prompts",
                                withCredentials: !0
                            }
                        },
                        postSurveyResults: function(e) {
                            return {
                                url: Rt + "/rocap/v1/locations/" + e + "/annotations",
                                withCredentials: !0
                            }
                        },
                        getWebFriendsRenamePoliciesGuacPolicy: function() {
                            return {
                                url: Rt + "/universal-app-configuration/v1/behaviors/web-rename-friends/content",
                                withCredentials: !0
                            }
                        },
                        getLandingPageData: function() {
                            return {
                                url: Rt + "/landing-page-api/landing-page",
                                withCredentials: !0
                            }
                        }
                    }
                },
                Dt = function() {
                    return (Dt = Object.assign || function(e) {
                        for (var t, n = 1, r = arguments.length; n < r; n++)
                            for (var a in t = arguments[n]) Object.prototype.hasOwnProperty.call(t, a) && (e[a] = t[a]);
                        return e
                    }).apply(this, arguments)
                },
                Ot = function(e, o, l, u) {
                    return new(l = l || Promise)(function(n, t) {
                        function r(e) {
                            try {
                                i(u.next(e))
                            } catch (e) {
                                t(e)
                            }
                        }

                        function a(e) {
                            try {
                                i(u.throw(e))
                            } catch (e) {
                                t(e)
                            }
                        }

                        function i(e) {
                            var t;
                            e.done ? n(e.value) : ((t = e.value) instanceof l ? t : new l(function(e) {
                                e(t)
                            })).then(r, a)
                        }
                        i((u = u.apply(e, o || [])).next())
                    })
                },
                Ft = function(n, r) {
                    var a, i, o, l = {
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
                                if (a) throw new TypeError("Generator is already executing.");
                                for (; l;) try {
                                    if (a = 1, i && (o = 2 & t[0] ? i.return : t[0] ? i.throw || ((o = i.return) && o.call(i), 0) : i.next) && !(o = o.call(i, t[1])).done) return o;
                                    switch (i = 0, o && (t = [2 & t[0], o.value]), t[0]) {
                                        case 0:
                                        case 1:
                                            o = t;
                                            break;
                                        case 4:
                                            return l.label++, {
                                                value: t[1],
                                                done: !1
                                            };
                                        case 5:
                                            l.label++, i = t[1], t = [0];
                                            continue;
                                        case 7:
                                            t = l.ops.pop(), l.trys.pop();
                                            continue;
                                        default:
                                            if (!(o = 0 < (o = l.trys).length && o[o.length - 1]) && (6 === t[0] || 2 === t[0])) {
                                                l = 0;
                                                continue
                                            }
                                            if (3 === t[0] && (!o || t[1] > o[0] && t[1] < o[3])) {
                                                l.label = t[1];
                                                break
                                            }
                                            if (6 === t[0] && l.label < o[1]) {
                                                l.label = o[1], o = t;
                                                break
                                            }
                                            if (o && l.label < o[2]) {
                                                l.label = o[2], l.ops.push(t);
                                                break
                                            }
                                            o[2] && l.ops.pop(), l.trys.pop();
                                            continue
                                    }
                                    t = r.call(n, l)
                                } catch (e) {
                                    t = [6, e], i = 0
                                } finally {
                                    a = o = 0
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
                Mt = function(r, a, i) {
                    return void 0 === i && (i = 1), Ot(void 0, void 0, Promise, function() {
                        var n, t;
                        return Ft(this, function(e) {
                            switch (e.label) {
                                case 0:
                                    return e.trys.push([0, 2, , 3]), [4, _.httpService.get(kt.getExperimentationValues(i, r, Object.keys(a)))];
                                case 1:
                                    return n = e.sent().data, t = Object.keys(n).reduce(function(e, t) {
                                        return null !== n[t] && (e[t] = n[t]), e
                                    }, {}), [2, Dt(Dt({}, a), t)];
                                case 2:
                                    return e.sent(), [2, a];
                                case 3:
                                    return [2]
                            }
                        })
                    })
                },
                Ut = function() {
                    return S.Guac.callBehaviour("app-policy")
                },
                Gt = function() {
                    return _.httpService.get(At.url.getWebFriendsRenamePoliciesGuacPolicy()).then(function(e) {
                        return e.data
                    })
                },
                jt = function() {
                    var e = (0, D.useState)({
                            shouldShowLikeFavoriteCounts: void 0,
                            experienceDetailsNoticeType: void 0
                        }),
                        t = e[0],
                        n = e[1],
                        e = (0, D.useState)(!1),
                        r = e[0],
                        a = e[1];
                    return (0, D.useEffect)(function() {
                        a(!0), Ut().then(function(e) {
                            n({
                                shouldShowLikeFavoriteCounts: e.EnableAggregateLikesFavoritesCount,
                                experienceDetailsNoticeType: e.experienceDetailsNoticeType
                            })
                        }).catch(function() {
                            n({
                                shouldShowLikeFavoriteCounts: !1,
                                experienceDetailsNoticeType: void 0
                            })
                        }).finally(function() {
                            a(!1)
                        })
                    }, []), (0, D.useMemo)(function() {
                        return {
                            shouldShowLikeFavoriteCounts: t.shouldShowLikeFavoriteCounts,
                            experienceDetailsNoticeType: t.experienceDetailsNoticeType,
                            isFetchingPolicy: r
                        }
                    }, [t.shouldShowLikeFavoriteCounts, t.experienceDetailsNoticeType, r])
                },
                Bt = ["/share-links"],
                Vt = ["ExperienceAffiliate"],
                qt = function(e) {
                    e = St(e);
                    return e ? {
                        linkCode: Et(e, "code"),
                        linkType: Et(e, "type")
                    } : {
                        linkCode: "",
                        linkType: ""
                    }
                };
            (wt = wt || {}).InExperiencePurchase = "InExperiencePurchase";
            var Wt = {
                    UnknownNoticeType: "UnknownNoticeType"
                },
                Ht = S.PlayButton.usePlayabilityStatus,
                zt = S.PlayButton.DefaultPlayButton,
                $t = S.PlayButton.ContextualMessage;

            function Jt(e) {
                var t = e.attributionId,
                    n = De() || {},
                    r = n.universeId,
                    a = void 0 === r ? "" : r,
                    i = n.rootPlaceId,
                    o = void 0 === i ? "" : i,
                    l = n.privateServerLinkCode,
                    u = void 0 === l ? "" : l,
                    s = n.gameInstanceId,
                    c = void 0 === s ? "" : s,
                    f = Ht(a),
                    d = f[0],
                    e = f[1],
                    r = f[2],
                    i = jt(),
                    l = i.experienceDetailsNoticeType,
                    n = i.isFetchingPolicy,
                    s = qt(window.location.toString()),
                    f = s.linkCode,
                    i = s.linkType,
                    f = _t(pt.gameDetailReferral, [at.IsAd, at.NativeAdData, at.Page, at.PlaceId, at.UniverseId, at.SortPos, at.Position, at.GameSetTypeId, at.GameSetTargetId, at.FriendId, at.NumberOfLoadedTiles, at.AppliedFilters, ot.DiscoverPageSessionInfo, ot.HomePageSessionInfo, ot.GameSearchSessionInfo, ot.SearchLandingPageSessionInfo, ot.SpotlightPageSessionInfo], ["privateServerLinkCode", "placeId", "launchData", "gameInstanceId", "referralUrl"], ((s = {})[at.PlaceId] = o, s[at.UniverseId] = a, s[at.ShareLinkType] = i, s[at.ShareLinkId] = f, s)),
                    s = f.referralParams,
                    f = f.appsFlyerReferralParams;
                return n ? O().createElement(M.Loading, null) : O().createElement(O().Fragment, null, O().createElement(zt, {
                    placeId: o,
                    rootPlaceId: o,
                    universeId: a,
                    privateServerLinkCode: u,
                    gameInstanceId: c,
                    refetchPlayabilityStatus: e,
                    playabilityStatus: d,
                    hideButtonText: !1,
                    disableLoadingState: !1,
                    eventProperties: ((e = {})[ot.DiscoverPageSessionInfo] = s.discoverPageSessionInfo, e[ot.GameSearchSessionInfo] = s.gameSearchSessionInfo, e[ot.HomePageSessionInfo] = s.homePageSessionInfo, e[ot.SpotlightPageSessionInfo] = s.spotlightPageSessionInfo, e[ot.SearchLandingPageSessionInfo] = s.searchLandingPageSessionInfo, e[at.AttributionId] = t, e[at.Page] = s.page, e[at.SortPos] = s.sortPos, e[at.GameSetTypeId] = s.gameSetTypeId, e[at.UniverseId] = a, e[at.AppliedFilters] = s.appliedFilters, e[at.PlayContext] = Qe.GameDetailPage, e),
                    appsFlyerReferralProperties: f
                }), O().createElement($t, {
                    playabilityStatus: d,
                    shouldShowNoticeAgreementIfPlayable: l === wt.InExperiencePurchase,
                    unplayableDisplayText: r,
                    contextualMessageClassName: "play-button-contextual-message"
                }))
            }

            function Kt(e) {
                return e = e.descriptionText, O().createElement("pre", {
                    className: "text game-description"
                }, null == e ? void 0 : e.split(_.regex.url).map(function(e, t) {
                    return -1 < e.search(_.regex.url) ? O().createElement("a", {
                        key: t,
                        "data-testid": "game-description-link",
                        className: "text-link",
                        href: e
                    }, e) : e
                }))
            }

            function Yt(e) {
                var t = e.name,
                    n = e.sourceName,
                    r = e.description,
                    a = e.sourceDescription,
                    i = e.translate,
                    o = O().useState(!1),
                    l = o[0],
                    u = o[1],
                    s = (e = O().useState(void 0))[0],
                    c = e[1];
                return (0, D.useEffect)(function() {
                    Z().then(function(e) {
                        null != e && e.nativeName && c(e.nativeName)
                    }).catch(function() {})
                }, []), o = O().useMemo(function() {
                    return t && n && t !== n || r && a && r !== a
                }, [t, n, r, a]), (0, D.useEffect)(function() {
                    if (t && n && t !== n) try {
                        var e = document.querySelector(".game-title-container");
                        !e || (e = e.querySelector("h1")) && (e.textContent = l ? n : t)
                    } catch (e) {}
                }, [l, t, n]), e = (0, D.useMemo)(function() {
                    return l ? s ? i(p.ActionSwapToTranslation, {
                        userLanguage: s
                    }) : i(p.ActionTranslate) || "Translate" : i(p.ActionSwapToSource)
                }, [l, s, i]), O().createElement(O().Fragment, null, O().createElement(Kt, {
                    descriptionText: l ? a : r
                }), o && O().createElement("div", {
                    role: "button",
                    tabIndex: 0,
                    className: "toggle-translation-button",
                    "data-testid": "swap-to-source-button",
                    onClick: function() {
                        return u(!l)
                    },
                    onKeyDown: function(e) {
                        e.key === m.keyBoardEventCode.enter && (e.stopPropagation(), e.preventDefault(), u(!l))
                    }
                }, O().createElement("span", {
                    className: "swap-translated-content font-bold"
                }, e), O().createElement("span", {
                    className: "icon-common-refresh"
                })))
            }

            function Qt(e) {
                var t = e.valueText,
                    n = e.id,
                    e = e.dataTestId;
                return O().createElement("p", {
                    className: "text-lead font-caption-body",
                    id: n,
                    "data-testid": e
                }, t)
            }
            var Zt = function(e, t) {
                for (var n = 0, r = t.length, a = e.length; n < r; n++, a++) e[a] = t[n];
                return e
            };

            function Xt(e) {
                var t = e.gameDetails,
                    n = e.universeVoiceStatus,
                    r = e.shouldShowFavoritesCount,
                    e = e.translate,
                    t = Zt(Zt(Zt([{
                        label: e(p.LabelPlaying),
                        value: O().createElement(Qt, {
                            valueText: $e(t.playing)
                        })
                    }], r ? [{
                        label: e(p.LabelFavorites),
                        value: O().createElement(Qt, {
                            dataTestId: "game-favorites-count",
                            valueText: $e(t.favoritedCount)
                        })
                    }] : []), [{
                        label: e(p.LabelVisits),
                        value: O().createElement(Qt, {
                            valueText: _.abbreviateNumber.getTruncValue(t.visits, void 0, void 0, w.visitsTruncationDigitsAfterDecimalPoint),
                            id: "game-visits-count"
                        })
                    }, {
                        label: e(p.LabelVoiceChat),
                        value: O().createElement(Qt, {
                            valueText: n.isUniverseEnabledForVoice ? e(p.LabelSupported) : e(p.LabelNotSupported),
                            dataTestId: "voice-value"
                        })
                    }, {
                        label: e(p.LabelCamera),
                        value: O().createElement(Qt, {
                            valueText: n.isUniverseEnabledForAvatarVideo ? e(p.LabelSupported) : e(p.LabelNotSupported),
                            dataTestId: "camera-value"
                        })
                    }, {
                        label: e(p.LabelCreated),
                        value: O().createElement(Qt, {
                            valueText: He.getShortDate(t.created)
                        })
                    }, {
                        label: e(p.LabelUpdated),
                        value: O().createElement(Qt, {
                            valueText: He.getShortDate(t.updated)
                        })
                    }, {
                        label: e(p.LabelMaxPlayers),
                        value: O().createElement(Qt, {
                            valueText: $e(t.maxPlayers)
                        })
                    }, {
                        label: e(p.LabelGenre),
                        value: O().createElement(Qt, {
                            valueText: t.genre_l1 || e(p.LabelUnavailable)
                        })
                    }]), t.genre_l2 ? [{
                        label: e(p.LabelSubgenre),
                        value: O().createElement(Qt, {
                            valueText: t.genre_l2
                        })
                    }] : []);
                return O().createElement("ul", {
                    className: "border-top border-bottom game-stat-container"
                }, t.map(function(e) {
                    return O().createElement("li", {
                        key: e.label,
                        className: "game-stat"
                    }, O().createElement("p", {
                        className: "text-label text-overflow font-caption-header"
                    }, e.label), e.value)
                }))
            }

            function en(e, t) {
                return t = {
                    id: e,
                    RedirectUrl: encodeURIComponent(k.entityUrl.game.getRelativePath(e) + "/" + _.seoName.formatSeoName(t))
                }, _.urlService.getUrlWithQueries("/abusereport/asset", t)
            }

            function tn(e) {
                var t = e.placeId,
                    n = e.name,
                    r = e.copyingAllowed,
                    a = e.translate,
                    i = (0, D.useState)(function() {
                        return en(t, n)
                    }),
                    e = i[0],
                    o = i[1];
                return (0, D.useEffect)(function() {
                    tt(t, n).then(function(e) {
                        o(e)
                    }).catch(function() {
                        o(en(t, n))
                    })
                }, [t, n]), O().createElement("div", {
                    className: "game-description-footer"
                }, r && O().createElement("p", {
                    className: "text-pastname"
                }, a(p.LabelPlaceCopyingAllowed)), O().createElement(M.Link, {
                    className: "text-report",
                    url: e
                }, a(p.LabelReportAbuse)))
            }
            Qt.defaultProps = {
                id: void 0,
                dataTestId: void 0
            };
            var nn = S.EnvironmentUrls.apiGatewayUrl,
                rn = function(e) {
                    return _.urlService.getUrlWithLocale("/info/age-recommendations-policy", e)
                },
                an = function() {
                    return nn + "/experience-guidelines-api/experience-guidelines/get-age-recommendation"
                },
                on = function(e) {
                    var t = {
                            url: an(),
                            retryable: !0,
                            withCredentials: !0
                        },
                        e = {
                            universeId: e
                        };
                    return _.httpService.post(t, e)
                },
                ln = {
                    common: [],
                    feature: "Feature.GameDetails"
                },
                un = "Suitable for everyone",
                sn = "Content Maturity",
                cn = "N/A",
                fn = "Label.ContentMaturity",
                dn = "Label.Unavailable",
                mn = "Label.ContainsStrongLanguageWarningWithGuideline",
                vn = function(e, o, l, u) {
                    return new(l = l || Promise)(function(n, t) {
                        function r(e) {
                            try {
                                i(u.next(e))
                            } catch (e) {
                                t(e)
                            }
                        }

                        function a(e) {
                            try {
                                i(u.throw(e))
                            } catch (e) {
                                t(e)
                            }
                        }

                        function i(e) {
                            var t;
                            e.done ? n(e.value) : ((t = e.value) instanceof l ? t : new l(function(e) {
                                e(t)
                            })).then(r, a)
                        }
                        i((u = u.apply(e, o || [])).next())
                    })
                },
                pn = function(n, r) {
                    var a, i, o, l = {
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
                                if (a) throw new TypeError("Generator is already executing.");
                                for (; l;) try {
                                    if (a = 1, i && (o = 2 & t[0] ? i.return : t[0] ? i.throw || ((o = i.return) && o.call(i), 0) : i.next) && !(o = o.call(i, t[1])).done) return o;
                                    switch (i = 0, o && (t = [2 & t[0], o.value]), t[0]) {
                                        case 0:
                                        case 1:
                                            o = t;
                                            break;
                                        case 4:
                                            return l.label++, {
                                                value: t[1],
                                                done: !1
                                            };
                                        case 5:
                                            l.label++, i = t[1], t = [0];
                                            continue;
                                        case 7:
                                            t = l.ops.pop(), l.trys.pop();
                                            continue;
                                        default:
                                            if (!(o = 0 < (o = l.trys).length && o[o.length - 1]) && (6 === t[0] || 2 === t[0])) {
                                                l = 0;
                                                continue
                                            }
                                            if (3 === t[0] && (!o || t[1] > o[0] && t[1] < o[3])) {
                                                l.label = t[1];
                                                break
                                            }
                                            if (6 === t[0] && l.label < o[1]) {
                                                l.label = o[1], o = t;
                                                break
                                            }
                                            if (o && l.label < o[2]) {
                                                l.label = o[2], l.ops.push(t);
                                                break
                                            }
                                            o[2] && l.ops.pop(), l.trys.pop();
                                            continue
                                    }
                                    t = r.call(n, l)
                                } catch (e) {
                                    t = [6, e], i = 0
                                } finally {
                                    a = o = 0
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
                hn = function(e) {
                    return nn + "/asset-text-filter-settings/public/universe/" + e
                },
                gn = function(n) {
                    return vn(void 0, void 0, Promise, function() {
                        var t;
                        return pn(this, function(e) {
                            switch (e.label) {
                                case 0:
                                    return t = {
                                        url: hn(n),
                                        retryable: !0,
                                        withCredentials: !0
                                    }, [4, _.httpService.get(t)];
                                case 1:
                                    return [2, e.sent().data]
                            }
                        })
                    })
                },
                yn = function(e, o, l, u) {
                    return new(l = l || Promise)(function(n, t) {
                        function r(e) {
                            try {
                                i(u.next(e))
                            } catch (e) {
                                t(e)
                            }
                        }

                        function a(e) {
                            try {
                                i(u.throw(e))
                            } catch (e) {
                                t(e)
                            }
                        }

                        function i(e) {
                            var t;
                            e.done ? n(e.value) : ((t = e.value) instanceof l ? t : new l(function(e) {
                                e(t)
                            })).then(r, a)
                        }
                        i((u = u.apply(e, o || [])).next())
                    })
                },
                bn = function(n, r) {
                    var a, i, o, l = {
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
                                if (a) throw new TypeError("Generator is already executing.");
                                for (; l;) try {
                                    if (a = 1, i && (o = 2 & t[0] ? i.return : t[0] ? i.throw || ((o = i.return) && o.call(i), 0) : i.next) && !(o = o.call(i, t[1])).done) return o;
                                    switch (i = 0, o && (t = [2 & t[0], o.value]), t[0]) {
                                        case 0:
                                        case 1:
                                            o = t;
                                            break;
                                        case 4:
                                            return l.label++, {
                                                value: t[1],
                                                done: !1
                                            };
                                        case 5:
                                            l.label++, i = t[1], t = [0];
                                            continue;
                                        case 7:
                                            t = l.ops.pop(), l.trys.pop();
                                            continue;
                                        default:
                                            if (!(o = 0 < (o = l.trys).length && o[o.length - 1]) && (6 === t[0] || 2 === t[0])) {
                                                l = 0;
                                                continue
                                            }
                                            if (3 === t[0] && (!o || t[1] > o[0] && t[1] < o[3])) {
                                                l.label = t[1];
                                                break
                                            }
                                            if (6 === t[0] && l.label < o[1]) {
                                                l.label = o[1], o = t;
                                                break
                                            }
                                            if (o && l.label < o[2]) {
                                                l.label = o[2], l.ops.push(t);
                                                break
                                            }
                                            o[2] && l.ops.pop(), l.trys.pop();
                                            continue
                                    }
                                    t = r.call(n, l)
                                } catch (e) {
                                    t = [6, e], i = 0
                                } finally {
                                    a = o = 0
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
                En = (0, u.withTranslations)(function(e) {
                    var t = e.isDisplayAgeRecommendationDetails,
                        n = e.translate,
                        r = (0, D.useState)(!1),
                        a = r[0],
                        i = r[1],
                        o = (0, D.useState)(!1),
                        l = (o[0], o[1]),
                        u = (0, D.useState)(!1),
                        s = u[0],
                        c = u[1],
                        e = (0, D.useState)(!1),
                        r = e[0],
                        f = e[1],
                        o = (0, D.useState)(null),
                        u = o[0],
                        d = o[1],
                        e = (0, D.useState)(null),
                        o = e[0],
                        m = e[1],
                        e = (De() || {}).universeId,
                        v = void 0 === e ? "" : e,
                        p = (0, D.useCallback)(function() {
                            return yn(void 0, void 0, void 0, function() {
                                var t;
                                return bn(this, function(e) {
                                    switch (e.label) {
                                        case 0:
                                            return e.trys.push([0, 2, , 3]), [4, gn(v)];
                                        case 1:
                                            return t = e.sent(), f(!0 === (null == t ? void 0 : t.Profanity)), [3, 3];
                                        case 2:
                                            return e.sent(), f(!1), [3, 3];
                                        case 3:
                                            return [2]
                                    }
                                })
                            })
                        }, [v]),
                        h = (0, D.useCallback)(function() {
                            return yn(void 0, void 0, void 0, function() {
                                var t, n;
                                return bn(this, function(e) {
                                    switch (e.label) {
                                        case 0:
                                            i(!0), e.label = 1;
                                        case 1:
                                            return e.trys.push([1, 3, 4, 5]), [4, on(v)];
                                        case 2:
                                            return (t = e.sent(), n = t.data, m(n.headerDisplayName), null == (null === (t = n.ageRecommendationDetails) || void 0 === t ? void 0 : t.summary.ageRecommendation)) ? (d(null), [2]) : (t = (t = null === (t = n.ageRecommendationDetails.descriptorUsages) || void 0 === t ? void 0 : t.map(function(e) {
                                                return e.descriptor.displayName
                                            }).join(", ")) || (0 === n.ageRecommendationDetails.summary.ageRecommendation.minimumAge ? un : ""), t = {
                                                descriptorDisplayNames: t,
                                                ageRecommendationBracket: null !== (t = n.ageRecommendationDetails.summary.ageRecommendation.displayNameWithHeaderShort) && void 0 !== t ? t : n.ageRecommendationDetails.summary.ageRecommendation.displayName
                                            }, d(t), n = null === (n = n.ageRecommendationDetails.descriptorUsages) || void 0 === n ? void 0 : n.find(function(e) {
                                                return "strong-language" === e.name
                                            }), c(!0 === (null == n ? void 0 : n.contains)), [3, 5]);
                                        case 3:
                                            return e.sent(), l(!0), d(null), c(!1), m(null), [3, 5];
                                        case 4:
                                            return i(!1), [7];
                                        case 5:
                                            return [2]
                                    }
                                })
                            })
                        }, [v]),
                        g = (0, D.useCallback)(function() {
                            return yn(void 0, void 0, void 0, function() {
                                return bn(this, function(e) {
                                    switch (e.label) {
                                        case 0:
                                            return e.trys.push([0, 3, 4, 5]), i(!0), [4, h()];
                                        case 1:
                                            return e.sent(), [4, p()];
                                        case 2:
                                            return e.sent(), [3, 5];
                                        case 3:
                                            return e.sent(), l(!0), d(null), f(!1), m(null), c(!1), [3, 5];
                                        case 4:
                                            return i(!1), [7];
                                        case 5:
                                            return [2]
                                    }
                                })
                            })
                        }, [h, p]);
                    (0, D.useEffect)(function() {
                        g()
                    }, [g]);
                    e = (new S.Intl).getRobloxLocale();
                    if (t) {
                        if (u) return O().createElement("div", {
                            className: "age-rating-details col-xs-12 section-content"
                        }, O().createElement("a", {
                            className: "age-rating-age-bracket text-lead text-link",
                            href: rn(e)
                        }, u.ageRecommendationBracket), O().createElement("span", {
                            className: "age-rating-display-name text"
                        }, u.descriptorDisplayNames));
                        if (!a) return O().createElement("div", {
                            className: "age-rating-details col-xs-12 section-content"
                        }, O().createElement("a", {
                            className: "age-rating-age-bracket text-lead text-link",
                            href: rn(e)
                        }, null !== (o = null != o ? o : n(fn)) && void 0 !== o ? o : sn), O().createElement("span", {
                            className: "age-rating-display-name text"
                        }, null !== (o = n(dn)) && void 0 !== o ? o : cn))
                    }
                    if (u && (r || s)) {
                        n = n(mn, {
                            guideline: u.ageRecommendationBracket
                        });
                        return O().createElement("a", {
                            className: "age-recommendation-title text",
                            href: "#game-age-recommendation-details"
                        }, "" !== n ? n : u.ageRecommendationBracket)
                    }
                    return u ? O().createElement("a", {
                        className: "age-recommendation-title text",
                        href: "#game-age-recommendation-details-container"
                    }, u.ageRecommendationBracket) : O().createElement(O().Fragment, null)
                }, ln),
                Sn = S.EnvironmentUrls.apiGatewayUrl;

            function wn(e) {
                var t = e.universeId,
                    n = e.placeId,
                    r = e.gameDetails,
                    a = e.shouldShowLikeFavoriteCounts,
                    i = e.isFetchingPolicy,
                    o = e.translate,
                    l = (0, D.useState)(void 0),
                    e = l[0],
                    u = l[1];
                return (0, D.useEffect)(function() {
                    Y(t).then(function(e) {
                        return u(e)
                    }).catch(function() {
                        return u({
                            isUniverseEnabledForVoice: !1,
                            isUniverseEnabledForAvatarVideo: !1
                        })
                    })
                }, [t]), void 0 === r || void 0 === e || i ? O().createElement(M.Loading, null) : O().createElement("div", {
                    className: "game-description-container"
                }, O().createElement("div", {
                    className: "container-header"
                }, O().createElement("h2", null, o(p.HeadingDescription))), O().createElement(Yt, {
                    name: r.name,
                    sourceName: r.sourceName,
                    description: r.description,
                    sourceDescription: r.sourceDescription,
                    translate: o
                }), O().createElement("div", {
                    id: "game-age-recommendation-details-container",
                    className: "game-age-recommendation-details-container"
                }, O().createElement(En, {
                    isDisplayAgeRecommendationDetails: !0
                })), O().createElement("div", {
                    className: "game-community-link-display-container"
                }, O().createElement(An, null)), O().createElement(Xt, {
                    gameDetails: r,
                    universeVoiceStatus: e,
                    shouldShowFavoritesCount: a,
                    translate: o
                }), O().createElement(tn, {
                    placeId: n,
                    name: r.name,
                    copyingAllowed: r.copyingAllowed,
                    translate: o
                }))
            }

            function In(n, r) {
                var a;
                return void 0 === r && (r = 300), [function() {
                    for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
                    clearTimeout(a), a = setTimeout(function() {
                        n.apply(void 0, e)
                    }, r)
                }, function() {
                    clearTimeout(a)
                }]
            }
            var xn, Tn, Pn, _n = function(e, o, l, u) {
                    return new(l = l || Promise)(function(n, t) {
                        function r(e) {
                            try {
                                i(u.next(e))
                            } catch (e) {
                                t(e)
                            }
                        }

                        function a(e) {
                            try {
                                i(u.throw(e))
                            } catch (e) {
                                t(e)
                            }
                        }

                        function i(e) {
                            var t;
                            e.done ? n(e.value) : ((t = e.value) instanceof l ? t : new l(function(e) {
                                e(t)
                            })).then(r, a)
                        }
                        i((u = u.apply(e, o || [])).next())
                    })
                },
                Cn = function(n, r) {
                    var a, i, o, l = {
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
                                if (a) throw new TypeError("Generator is already executing.");
                                for (; l;) try {
                                    if (a = 1, i && (o = 2 & t[0] ? i.return : t[0] ? i.throw || ((o = i.return) && o.call(i), 0) : i.next) && !(o = o.call(i, t[1])).done) return o;
                                    switch (i = 0, o && (t = [2 & t[0], o.value]), t[0]) {
                                        case 0:
                                        case 1:
                                            o = t;
                                            break;
                                        case 4:
                                            return l.label++, {
                                                value: t[1],
                                                done: !1
                                            };
                                        case 5:
                                            l.label++, i = t[1], t = [0];
                                            continue;
                                        case 7:
                                            t = l.ops.pop(), l.trys.pop();
                                            continue;
                                        default:
                                            if (!(o = 0 < (o = l.trys).length && o[o.length - 1]) && (6 === t[0] || 2 === t[0])) {
                                                l = 0;
                                                continue
                                            }
                                            if (3 === t[0] && (!o || t[1] > o[0] && t[1] < o[3])) {
                                                l.label = t[1];
                                                break
                                            }
                                            if (6 === t[0] && l.label < o[1]) {
                                                l.label = o[1], o = t;
                                                break
                                            }
                                            if (o && l.label < o[2]) {
                                                l.label = o[2], l.ops.push(t);
                                                break
                                            }
                                            o[2] && l.ops.pop(), l.trys.pop();
                                            continue
                                    }
                                    t = r.call(n, l)
                                } catch (e) {
                                    t = [6, e], i = 0
                                } finally {
                                    a = o = 0
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
                kn = function(n) {
                    return _n(void 0, void 0, Promise, function() {
                        var t;
                        return Cn(this, function(e) {
                            switch (e.label) {
                                case 0:
                                    return t = {
                                        url: Sn + "/community-links/v1/universes/" + n + "/community",
                                        retryable: !0,
                                        withCredentials: !0
                                    }, [4, _.httpService.get(t)];
                                case 1:
                                    return [2, e.sent().data]
                            }
                        })
                    })
                },
                a = {
                    common: [],
                    feature: "Feature.CommunityLinks"
                },
                Nn = "UserCommunities.EDP.CommunityLinks",
                Ln = function(e, o, l, u) {
                    return new(l = l || Promise)(function(n, t) {
                        function r(e) {
                            try {
                                i(u.next(e))
                            } catch (e) {
                                t(e)
                            }
                        }

                        function a(e) {
                            try {
                                i(u.throw(e))
                            } catch (e) {
                                t(e)
                            }
                        }

                        function i(e) {
                            var t;
                            e.done ? n(e.value) : ((t = e.value) instanceof l ? t : new l(function(e) {
                                e(t)
                            })).then(r, a)
                        }
                        i((u = u.apply(e, o || [])).next())
                    })
                },
                Rn = function(n, r) {
                    var a, i, o, l = {
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
                                if (a) throw new TypeError("Generator is already executing.");
                                for (; l;) try {
                                    if (a = 1, i && (o = 2 & t[0] ? i.return : t[0] ? i.throw || ((o = i.return) && o.call(i), 0) : i.next) && !(o = o.call(i, t[1])).done) return o;
                                    switch (i = 0, o && (t = [2 & t[0], o.value]), t[0]) {
                                        case 0:
                                        case 1:
                                            o = t;
                                            break;
                                        case 4:
                                            return l.label++, {
                                                value: t[1],
                                                done: !1
                                            };
                                        case 5:
                                            l.label++, i = t[1], t = [0];
                                            continue;
                                        case 7:
                                            t = l.ops.pop(), l.trys.pop();
                                            continue;
                                        default:
                                            if (!(o = 0 < (o = l.trys).length && o[o.length - 1]) && (6 === t[0] || 2 === t[0])) {
                                                l = 0;
                                                continue
                                            }
                                            if (3 === t[0] && (!o || t[1] > o[0] && t[1] < o[3])) {
                                                l.label = t[1];
                                                break
                                            }
                                            if (6 === t[0] && l.label < o[1]) {
                                                l.label = o[1], o = t;
                                                break
                                            }
                                            if (o && l.label < o[2]) {
                                                l.label = o[2], l.ops.push(t);
                                                break
                                            }
                                            o[2] && l.ops.pop(), l.trys.pop();
                                            continue
                                    }
                                    t = r.call(n, l)
                                } catch (e) {
                                    t = [6, e], i = 0
                                } finally {
                                    a = o = 0
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
                An = (0, u.withTranslations)(function(e) {
                    var t = e.translate,
                        n = (0, D.useState)(null),
                        r = n[0],
                        a = n[1],
                        i = De() || {},
                        o = i.universeId,
                        l = void 0 === o ? "" : o,
                        u = i.placeName,
                        e = void 0 === u ? "" : u,
                        n = (0, D.useState)(void 0),
                        o = n[0],
                        s = n[1],
                        i = (0, D.useState)(!1),
                        u = i[0],
                        n = i[1],
                        c = (0, D.useCallback)(function() {
                            return Ln(void 0, void 0, void 0, function() {
                                var t;
                                return Rn(this, function(e) {
                                    switch (e.label) {
                                        case 0:
                                            return [4, S.ExperimentationService.getAllValuesForLayer(Nn)];
                                        case 1:
                                            return t = e.sent(), s(null == t ? void 0 : t.communityLinkDisplayConfig), [2]
                                    }
                                })
                            })
                        }, []),
                        f = (0, D.useCallback)(function() {
                            return Ln(void 0, void 0, void 0, function() {
                                var t;
                                return Rn(this, function(e) {
                                    switch (e.label) {
                                        case 0:
                                            return e.trys.push([0, 2, , 3]), [4, kn(l)];
                                        case 1:
                                            return t = e.sent(), a(t), [3, 3];
                                        case 2:
                                            return e.sent(), a(null), [3, 3];
                                        case 3:
                                            return [2]
                                    }
                                })
                            })
                        }, [l]),
                        i = (0, D.useCallback)(function() {
                            var e, t;
                            null != r && r.communityId && (e = l, t = r.communityId, k.eventStreamService.sendEventWithTarget("clickCommunityLink", "communityLinkDisplay", {
                                guildedServerId: t,
                                entityType: "universe",
                                entityId: e
                            }))
                        }, [l, r]);
                    return (0, D.useEffect)(function() {
                        !j.authenticatedUser.isUnder13 && j.authenticatedUser.isAuthenticated && Ln(void 0, void 0, void 0, function() {
                            return Rn(this, function(e) {
                                switch (e.label) {
                                    case 0:
                                        return [4, Promise.all([f(), c()])];
                                    case 1:
                                        return e.sent(), [2]
                                }
                            })
                        })
                    }, [f, c]), null != r && r.communityId && "private" !== r.visibility && o ? (u || (n(!0), S.ExperimentationService.logLayerExposure(Nn)), o.inTreatment ? O().createElement("div", {
                        className: "game-community-section"
                    }, O().createElement("h2", {
                        className: "game-community-title"
                    }, t(h.HeadingCommunityTitle)), O().createElement("a", {
                        className: "game-community-link",
                        "data-testid": "game-community-link",
                        href: (o = r.communityId, Sn + "/community-links/v1/guilded/" + o + "/join?a=red"),
                        onClick: i,
                        target: "_blank",
                        rel: "noreferrer"
                    }, O().createElement("div", {
                        className: "game-community-icon-container"
                    }, O().createElement("div", {
                        className: "game-community-icon"
                    })), O().createElement("div", {
                        className: "game-community-info-container"
                    }, O().createElement("div", null, O().createElement("h5", {
                        className: "game-community-name"
                    }, r.name)), O().createElement("div", null, O().createElement("span", {
                        className: "game-community-description text-default"
                    }, r.description || t(h.DescriptionCommunityDefault, {
                        experienceName: e
                    })))), O().createElement("div", {
                        className: "game-community-visit-container"
                    }, O().createElement("button", {
                        className: "btn btn-cta-md btn-min-width",
                        type: "button"
                    }, t(h.LabelViewButton))))) : null) : null
                }, a),
                Dn = function() {
                    var e = (0, D.useState)(!1),
                        t = e[0],
                        n = e[1],
                        r = (e = In(function() {
                            n(!0)
                        }, 100))[0],
                        a = e[1],
                        i = (e = In(function() {
                            n(!1)
                        }, 100))[0],
                        o = e[1];
                    return [t, function() {
                        o(), r()
                    }, function() {
                        a(), i()
                    }]
                },
                On = function(e, t) {
                    return (0, D.useMemo)(function() {
                        return e.layoutDataBySort && t && e.layoutDataBySort[t] ? e.layoutDataBySort[t] : e.defaultLayoutData
                    }, [e.layoutDataBySort, e.defaultLayoutData, t])
                };

            function Fn(e) {
                return "icons/menu/gem_small" !== e ? null : "icon-gem-dark-stroke"
            }

            function Mn(e) {
                return e.isShimmerEnabled ? "shimmer-animation" : null
            }

            function Un(e) {
                return e !== xn.IMAGE_TOP_LEFT ? "" : "game-card-pill-top-left"
            }

            function Gn(e) {
                var t = [];
                return (e = null === (e = null == e ? void 0 : e.tileBadgesByPosition) || void 0 === e ? void 0 : e.ImageTopLeft) && e.length && (t = e.map(function(e) {
                    var t, n = {
                        id: e.analyticsId
                    };
                    return e.tileBadgeType === Pn.Text && e.text ? (n.text = e.text, n.animationClass = Mn(e)) : e.tileBadgeType === Pn.Icon && e.icons && (t = e.icons.map(Fn).filter(function(e) {
                        return !!e
                    }), n.icons = t, n.animationClass = Mn(e)), n
                })), t.length ? ((e = {})[xn.IMAGE_TOP_LEFT] = t, e) : null
            }

            function jn(e) {
                var t;
                return (null === (t = null == e ? void 0 : e.footer) || void 0 === t ? void 0 : t.type) === Tn.TextLabel ? e.footer : null
            }(Fi = xn = xn || {}).INVALID = "Invalid", Fi.IMAGE_TOP_LEFT = "ImageTopLeft", Fi.IMAGE_BOTTOM_LEFT = "ImageBottomLeft", (Mi = {}).Home = "Home", Mi.Games = "Games", (ne = {}).Invalid = "Invalid", ne.HasLootBoxes = "HasLootBoxes", ne.HasInGameTrading = "HasInGameTrading", ne.IsUsingLootBoxApi = "IsUsingLootBoxApi", ne.IsUsingInGameTradingApi = "IsUsingInGameTradingApi", ne.HasAllowedExternalLinkReferences = "HasAllowedExternalLinkReferences", ne.IsUsingAllowedExternalLinkReferencesApi = "IsUsingAllowedExternalLinkReferencesApi", (ie = {}).MorphToR6 = "MorphToR6", ie.PlayerChoice = "PlayerChoice", ie.MorphToR15 = "MorphToR15", (Gi = {}).Scroll = "Scroll", Gi.Button = "Button", (Tn = Tn || {}).TextLabel = "TextLabel", (n = Pn = Pn || {}).Text = "Text", n.Icon = "Icon";
            var Bn = PropTypes,
                Vn = ts.n(Bn),
                qn = "Label.ContextMenuTitle",
                Wn = "Action.ViewDetails",
                Hn = "Action.JoinGame",
                zn = {
                    goToProfileInPlacesList: {
                        name: "goToProfileInPlacesList",
                        ctx: "click"
                    },
                    openModalFromGameTile: {
                        name: "openModalFromGameTile",
                        ctx: "click"
                    },
                    goToChatInPlacesList: {
                        name: "goToChatInPlacesList",
                        ctx: "click"
                    },
                    joinGameInPlacesList: {
                        name: "joinGameInPlacesList",
                        ctx: "click"
                    },
                    goToGameDetailInPlacesList: {
                        name: "goToGameDetailInPlacesList",
                        ctx: "click"
                    },
                    gamePlayIntentInPlacesList: {
                        ctx: "placesListInHomePage"
                    }
                };

            function $n(e) {
                var t = e.game,
                    n = e.translate,
                    r = t.universeId,
                    a = t.name,
                    e = t.referralUrl,
                    t = t.isPlayable,
                    r = O().createElement(ae.Thumbnail2d, {
                        type: ae.ThumbnailTypes.gameIcon,
                        size: ae.DefaultThumbnailSize,
                        targetId: r,
                        imgClassName: "game-card-thumb",
                        format: ae.ThumbnailFormat.jpeg
                    });
                return O().createElement("div", {
                    className: "border-bottom player-interaction-container"
                }, O().createElement("span", {
                    className: "cursor-pointer game-icon"
                }, O().createElement(M.Link, {
                    url: e,
                    className: "game-card-link"
                }, r)), O().createElement("span", {
                    className: "game-info-container"
                }, O().createElement(M.Link, {
                    url: e,
                    className: "game-name"
                }, a), !t && O().createElement(M.Link, {
                    url: e,
                    className: "btn-control-sm game-link"
                }, n(Wn))))
            }
            $n.propTypes = {
                game: Vn().shape({
                    universeId: Vn().number,
                    placeId: Vn().number,
                    name: Vn().string,
                    playerCount: Vn().number,
                    isShowSponsoredLabel: Vn().bool,
                    nativeAdData: Vn().string,
                    imageUrl: Vn().string,
                    referralUrl: Vn().string,
                    isPlayable: Vn().bool
                }).isRequired,
                translate: Vn().func.isRequired
            };
            var Jn = $n;

            function Kn(e) {
                var t = e.playerId,
                    e = e.altName;
                return O().createElement("div", {
                    className: "avatar-card-link"
                }, O().createElement(ae.Thumbnail2d, {
                    type: ae.ThumbnailTypes.avatarHeadshot,
                    size: ae.ThumbnailAvatarHeadshotSize.size48,
                    targetId: t,
                    imgClassName: "avatar-card-image",
                    format: ae.ThumbnailFormat.webp,
                    altName: e
                }))
            }
            Kn.defaultProps = {
                altName: ""
            }, Kn.propTypes = {
                playerId: Vn().number.isRequired,
                altName: Vn().string
            };
            var Yn = Kn;

            function Qn(e) {
                var t = e.playerData,
                    i = e.dismissModal,
                    n = e.isPlayable,
                    r = e.translate,
                    e = t.presence,
                    o = e.rootPlaceId,
                    l = e.placeId,
                    u = e.gameId,
                    s = t.id,
                    t = t.nameForDisplay;
                return O().createElement("div", {
                    className: "border-bottom player-info"
                }, O().createElement("span", {
                    className: "player-name"
                }, t), O().createElement(M.Button, {
                    className: "cursor-pointer btn-primary-sm player-action",
                    onClick: function(e) {
                        var t = {
                                rootPlaceId: o,
                                placeId: l
                            },
                            n = k.playGameService.buildPlayGameProperties(o, l, u, s),
                            r = zn.joinGameInPlacesList,
                            a = zn.gamePlayIntentInPlacesList,
                            a = {
                                eventName: r.name,
                                ctx: r.ctx,
                                properties: t,
                                gamePlayIntentEventCtx: a.ctx
                            };
                        k.playGameService.launchGame(n, a), i(e)
                    },
                    isDisabled: !n
                }, r(Hn)))
            }
            Qn.propTypes = {
                playerData: Vn().shape({
                    presence: Vn().shape({
                        rootPlaceId: Vn().number,
                        placeId: Vn().number,
                        gameId: Vn().string
                    }),
                    id: Vn().number,
                    nameForDisplay: Vn().string
                }).isRequired,
                dismissModal: Vn().func.isRequired,
                isPlayable: Vn().bool.isRequired,
                translate: Vn().func.isRequired
            };
            var Zn = Qn;

            function Xn(e) {
                var t = e.friendsData,
                    n = e.friendsInGame,
                    a = e.dismissModal,
                    i = e.isPlayable,
                    o = e.translate,
                    l = {};
                return t.forEach(function(e) {
                    l[e.id] = e
                }), O().createElement("div", {
                    className: "interaction-container"
                }, O().createElement("ul", {
                    className: "interaction-list"
                }, n.map(function(e, t) {
                    var n = e + t,
                        r = l[e],
                        t = r.id,
                        e = r.nameForDisplay;
                    return O().createElement("li", {
                        key: n,
                        className: "interaction-item",
                        "aria-hidden": "true"
                    }, O().createElement("span", {
                        className: "avatar avatar-headshot avatar-headshot-sm player-avatar"
                    }, O().createElement(Yn, {
                        playerId: t,
                        altName: e
                    })), O().createElement(Zn, {
                        playerData: r,
                        dismissModal: a,
                        isPlayable: i,
                        translate: o
                    }))
                })))
            }
            Xn.propTypes = {
                friendsData: Vn().arrayOf(Vn().shape({
                    presense: Vn().shape({
                        rootPlaceId: Vn().number,
                        placeId: Vn().number,
                        gameId: Vn().string
                    }),
                    id: Vn().number,
                    nameForDisplay: Vn().string
                })).isRequired,
                friendsInGame: Vn().arrayOf(Vn().number).isRequired,
                dismissModal: Vn().func.isRequired,
                isPlayable: Vn().bool.isRequired,
                translate: Vn().func.isRequired
            };
            var er = Xn;

            function tr(e) {
                var t = e.friendsData,
                    n = e.friendsInGame,
                    r = e.game,
                    a = e.dismissModal,
                    i = e.translate,
                    e = i(qn);
                return O().createElement("div", {
                    "data-testid": "game-players-player-interaction-modal"
                }, O().createElement(M.Modal.Header, {
                    title: e,
                    onClose: a
                }), O().createElement(Jn, {
                    game: r,
                    translate: i
                }), O().createElement(er, {
                    friendsData: t,
                    friendsInGame: n,
                    dismissModal: a,
                    isPlayable: r.isPlayable,
                    translate: i
                }))
            }
            tr.propTypes = {
                friendsData: Vn().arrayOf(Vn().shape({
                    presense: Vn().shape({
                        rootPlaceId: Vn().number,
                        placeId: Vn().number,
                        gameId: Vn().string
                    }),
                    id: Vn().number,
                    nameForDisplay: Vn().string
                })).isRequired,
                friendsInGame: Vn().arrayOf(Vn().number).isRequired,
                game: Vn().shape({
                    universeId: Vn().number,
                    placeId: Vn().number,
                    name: Vn().string,
                    playerCount: Vn().number,
                    isShowSponsoredLabel: Vn().bool,
                    nativeAdData: Vn().string,
                    imageUrl: Vn().string,
                    referralUrl: Vn().string,
                    isPlayable: Vn().bool
                }).isRequired,
                dismissModal: Vn().func.isRequired,
                translate: Vn().func.isRequired
            };
            var nr = tr,
                rr = {
                    common: ["Common.GameSorts", "Feature.GamePage", "Feature.GameDetails", "Feature.ContactUpsell"],
                    feature: "Feature.PlacesList"
                };
            (Ra = function(e) {
                var t = e.tooltipText,
                    n = e.placement,
                    r = e.sizeInPx,
                    r = void 0 === r ? 16 : r,
                    e = e.centerIcon;
                return O().createElement("span", {
                    className: re()("info-tooltip-container", {
                        "icon-centered": e
                    })
                }, O().createElement(M.Tooltip, {
                    id: "games-info-tooltip",
                    placement: n,
                    containerClassName: re()("games-info-tooltip", {
                        "icon-centered": e
                    }),
                    content: t
                }, O().createElement("svg", {
                    width: r,
                    height: r,
                    viewBox: "0 0 16 16",
                    fill: "none",
                    xmlns: "http://www.w3.org/2000/svg"
                }, O().createElement("path", {
                    d: "M8.97 5.44H7V4H8.97V5.44Z",
                    fill: "currentColor"
                }), O().createElement("path", {
                    d: "M8.94347 11.9999H7.05347V6.37988H8.94347V11.9999Z",
                    fill: "currentColor"
                }), O().createElement("path", {
                    fillRule: "evenodd",
                    clipRule: "evenodd",
                    d: "M8 16C12.4183 16 16 12.4183 16 8C16 3.58172 12.4183 0 8 0C3.58172 0 0 3.58172 0 8C0 12.4183 3.58172 16 8 16ZM8 14.5C11.5899 14.5 14.5 11.5899 14.5 8C14.5 4.41015 11.5899 1.5 8 1.5C4.41015 1.5 1.5 4.41015 1.5 8C1.5 11.5899 4.41015 14.5 8 14.5Z",
                    fill: "currentColor"
                }))))
            }).defaultProps = {
                sizeInPx: 16
            };
            var ar = Ra,
                ir = function() {
                    return (ir = Object.assign || function(e) {
                        for (var t, n = 1, r = arguments.length; n < r; n++)
                            for (var a in t = arguments[n]) Object.prototype.hasOwnProperty.call(t, a) && (e[a] = t[a]);
                        return e
                    }).apply(this, arguments)
                },
                or = ((ji = {})[ge.GridTile] = {
                    minTileWidth: 233,
                    columnGap: 16,
                    minTilesPerRow: 2,
                    maxTilesPerRow: 6
                }, ji[ge.EventTile] = {
                    minTileWidth: 233,
                    columnGap: 16,
                    minTilesPerRow: 4,
                    maxTilesPerRow: 4
                }, ji[ge.InterestTile] = {
                    minTileWidth: 311,
                    columnGap: 16,
                    minTilesPerRow: 2,
                    maxTilesPerRow: 6
                }, ji[ge.AppGameTileNoMetadata] = {
                    minTileWidth: 150,
                    columnGap: 16,
                    minTilesPerRow: 3,
                    maxTilesPerRow: 12
                }, ji[ge.ExperienceEventsTile] = {
                    minTileWidth: 233,
                    columnGap: 16,
                    minTilesPerRow: 2,
                    maxTilesPerRow: 3
                }, ji),
                lr = ir(ir({}, or), ((Bi = {})[ge.EventTile] = {
                    minTileWidth: 300,
                    columnGap: 16,
                    minTilesPerRow: 2,
                    maxTilesPerRow: 4
                }, Bi)),
                ur = {
                    minTileWidth: 150,
                    columnGap: 16,
                    minTilesPerRow: 3,
                    maxTilesPerRow: 12
                };

            function sr(e) {
                var n = e.pills,
                    r = e.isFocused,
                    e = Object.keys(n);
                return O().createElement(D.Fragment, null, e.map(function(e) {
                    var t;
                    return !(null === (t = n[t = e]) || void 0 === t || !t.length) && O().createElement("div", {
                        key: e,
                        className: "game-card-pills-container " + Un(e)
                    }, null === (e = n[e]) || void 0 === e ? void 0 : e.map(function(e) {
                        return O().createElement(dr, {
                            key: e.id,
                            id: e.id,
                            animationClass: e.animationClass,
                            icons: e.icons,
                            text: e.text,
                            isFocused: r
                        })
                    }))
                }))
            }

            function cr(e) {
                return e = e.playerCount, e = Je.getPlayerCount(e), O().createElement("div", {
                    className: "game-card-info",
                    "data-testid": "game-tile-stats-player-count"
                }, O().createElement("span", {
                    className: "info-label icon-playing-counts-gray"
                }), O().createElement("span", {
                    className: "info-label playing-counts-label"
                }, e))
            }

            function fr(e) {
                var t = e.playerCount,
                    e = e.playerCountStyle,
                    e = re()("game-card-image-pill", {
                        "hover-only": e === ye.Hover
                    });
                return O().createElement("div", {
                    className: e,
                    "data-testid": "game-tile-player-count-pill"
                }, O().createElement(cr, {
                    playerCount: t
                }))
            }(Vi = function(e) {
                var t = e.animationClass,
                    n = e.isFocused,
                    r = e.icons,
                    a = e.text;
                return null != r && r.length || a ? O().createElement("div", {
                    className: "game-card-pill-with-animation"
                }, O().createElement("div", {
                    className: re()("game-card-pill-animation-container", ((e = {})[null != t ? t : ""] = t && n, e))
                }, (null == r ? void 0 : r.length) && r.map(function(e, t) {
                    return O().createElement("span", {
                        key: t,
                        className: "game-card-pill-icon " + e
                    })
                }), a && O().createElement("div", {
                    className: "game-card-pill-text"
                }, a))) : null
            }).defaultProps = {
                animation: void 0
            };
            var dr = Vi;

            function mr(e) {
                return e = e.featureTypes, O().createElement("div", {
                    className: "game-card-image-feature-pill",
                    "data-testid": "game-tile-social-feature-pill"
                }, O().createElement("div", {
                    className: "game-card-info",
                    "data-testid": "game-tile-social-feature-list"
                }, e.map(function(e) {
                    return pr[e] && O().createElement("span", {
                        key: e,
                        className: pr[e]
                    })
                })))
            }

            function vr(e) {
                return e = e.text, O().createElement("div", {
                    className: "game-card-text-pill"
                }, O().createElement("div", {
                    className: "game-card-info"
                }, e))
            }
            fr.defaultProps = {
                playerCountStyle: void 0
            };
            var pr = {
                Voice: "pill-icon icon-default-voice-16x16-white",
                Camera: "pill-icon icon-default-camera-white"
            };

            function hr(e) {
                var t = e.id,
                    n = e.children,
                    r = e.gameData,
                    a = e.isOnScreen,
                    i = e.page,
                    o = e.buildEventProperties,
                    l = e.isFocused,
                    u = e.topicId,
                    e = ae.ThumbnailGameIconSize.size256,
                    u = On(r, u);
                return O().createElement(M.Link, {
                    url: st(r.placeId, r.name, o(r, t)),
                    tabIndex: a ? 0 : -1,
                    "aria-hidden": !a,
                    className: "game-card-link",
                    id: r.universeId.toString()
                }, O().createElement(gr, {
                    gameLayoutData: u,
                    isFocused: !!l
                }), i === Qe.GamesPage ? O().createElement("div", {
                    className: "game-card-thumb-container"
                }, O().createElement(ae.Thumbnail2d, {
                    type: ae.ThumbnailTypes.gameIcon,
                    size: e,
                    targetId: r.universeId,
                    containerClass: "game-card-thumb",
                    format: ae.ThumbnailFormat.jpeg,
                    altName: r.name
                })) : O().createElement(ae.Thumbnail2d, {
                    type: ae.ThumbnailTypes.gameIcon,
                    size: e,
                    targetId: r.universeId,
                    containerClass: "game-card-thumb-container",
                    format: ae.ThumbnailFormat.jpeg,
                    altName: r.name
                }), O().createElement("div", {
                    className: "game-card-name game-name-title",
                    title: r.name
                }, r.name), n)
            }(ln = function(e) {
                var t = e.gameLayoutData,
                    n = e.playerCountStyle,
                    r = e.playerCount,
                    a = e.isFocused,
                    e = Gn(t);
                return e ? O().createElement(sr, {
                    pills: e,
                    isFocused: a
                }) : null !== (a = null == t ? void 0 : t.pill) && void 0 !== a && a.types && 0 < t.pill.types.length ? O().createElement(mr, {
                    featureTypes: t.pill.types
                }) : void 0 === r || n !== ye.Always && n !== ye.Hover ? null : O().createElement(fr, {
                    playerCount: r,
                    playerCountStyle: n
                })
            }).defaultProps = {
                gameLayoutData: void 0,
                playerCountStyle: void 0,
                playerCount: void 0
            };
            var gr = ln,
                yr = function() {
                    return (yr = Object.assign || function(e) {
                        for (var t, n = 1, r = arguments.length; n < r; n++)
                            for (var a in t = arguments[n]) Object.prototype.hasOwnProperty.call(t, a) && (e[a] = t[a]);
                        return e
                    }).apply(this, arguments)
                },
                br = m.keyBoardEventCode,
                Er = m.numberOfInGameAvatarIcons,
                Sr = m.numberOfInGameNames;

            function wr(e) {
                var t = e.totalDownVotes,
                    n = e.totalUpVotes,
                    e = e.playerCount,
                    t = Je.getVotePercentage(n, t),
                    e = Je.getPlayerCount(e);
                return O().createElement("div", {
                    className: "game-card-info",
                    "data-testid": "game-tile-stats"
                }, O().createElement("span", {
                    className: "info-label icon-votes-gray"
                }), t ? O().createElement("span", {
                    className: "info-label vote-percentage-label"
                }, t) : O().createElement("span", {
                    className: "info-label no-vote"
                }), O().createElement("span", {
                    className: "info-label icon-playing-counts-gray"
                }), O().createElement("span", {
                    className: "info-label playing-counts-label"
                }, e))
            }

            function Ir(e) {
                var t = e.totalDownVotes,
                    n = e.totalUpVotes,
                    r = e.translate,
                    e = m.RatingPercentageText,
                    t = (null == (t = Je.getVotePercentageValue(n, t)) ? void 0 : t.toString()) || "--";
                return O().createElement("div", {
                    className: "game-card-info",
                    "data-testid": "game-tile-stats-rating"
                }, O().createElement("span", {
                    className: "info-label icon-votes-gray"
                }), O().createElement("span", {
                    className: "info-label vote-percentage-label"
                }, r(e, {
                    percentRating: t
                }) || t + "% Rating"))
            }

            function xr(e) {
                return e = e.footerData, O().createElement("div", {
                    className: "game-card-info",
                    "data-testid": "game-tile-stats-text-footer"
                }, O().createElement("span", {
                    className: "info-label"
                }, e.text.textLiteral))
            }

            function Tr(e) {
                var t = e.iconClassName,
                    e = e.text;
                return O().createElement("div", {
                    className: "game-card-info",
                    "data-testid": "game-tile-stats-icon-text-footer"
                }, O().createElement("span", {
                    className: re()("info-label", t)
                }), O().createElement("span", {
                    className: "info-label text-label-with-icon"
                }, e))
            }

            function Pr(e) {
                return e = e.footerText, O().createElement("div", {
                    className: "game-card-info",
                    "data-testid": "game-tile-stats-friend-activity"
                }, O().createElement("span", {
                    className: "info-label"
                }, e))
            }

            function _r(e) {
                return e = e.translate, O().createElement("div", {
                    className: "game-card-native-ad",
                    "data-testid": "game-tile-sponsored-footer"
                }, O().createElement("div", {
                    className: "native-ad-label"
                }, e(v.LabelSponsoredAd), O().createElement(ar, {
                    tooltipText: e(t.LabelSponsoredAdsDisclosureStatic) || "Sponsored experiences are paid for by Creators. They may be shown to you based on general information about your device type, location, and demographics.",
                    placement: "right",
                    sizeInPx: 12
                })))
            }

            function Cr(e) {
                return e = e.user, O().createElement(ae.Thumbnail2d, {
                    type: ae.ThumbnailTypes.avatarHeadshot,
                    size: ae.ThumbnailAvatarHeadshotSize.size48,
                    targetId: e.id,
                    containerClass: "avatar avatar-headshot avatar-headshot-xs",
                    imgClassName: "avatar-card-image",
                    format: ae.ThumbnailFormat.webp,
                    altName: e.displayName
                })
            }

            function kr(e) {
                return e = e.translate, O().createElement("div", {
                    className: "game-card-info",
                    "data-testid": "wide-game-tile-sponsored-footer"
                }, O().createElement(ar, {
                    tooltipText: e(t.LabelSponsoredAdsDisclosureStatic) || "Sponsored experiences are paid for by Creators. They may be shown to you based on general information about your device type, location, and demographics.",
                    placement: "right",
                    sizeInPx: 12
                }), O().createElement("span", {
                    className: "info-label text-label-with-icon"
                }, e(v.LabelSponsoredAd)))
            }

            function Nr(e) {
                var t = e.friendsData,
                    n = e.isOnline,
                    r = m.maxFacepileFriendCountValue,
                    r = (null == t ? void 0 : t.length) > r ? r.toString() + "+" : (null == t ? void 0 : t.length) > Er ? null == t ? void 0 : t.length.toString() : "",
                    e = r ? Er - 1 : Er,
                    a = re()("avatar-card", {
                        "avatar-card-online": n
                    });
                return O().createElement("div", {
                    className: "info-avatar"
                }, r && O().createElement("div", {
                    className: a
                }, O().createElement("div", {
                    className: "avatar-count-container"
                }, O().createElement("span", {
                    className: "avatar-count info-label"
                }, r))), t.slice(0, e).map(function(e) {
                    return O().createElement("div", {
                        className: a,
                        key: e.displayName
                    }, O().createElement(Cr, {
                        user: e
                    }))
                }))
            }

            function Lr(e) {
                var t = e.friendsData,
                    e = e.isOnline;
                if (0 === t.length) throw new Error("friendData should not be empty");
                return O().createElement("div", {
                    className: "game-card-info",
                    "data-testid": "game-tile-stats-" + (e ? "online" : "offline") + "-friends-facepile"
                }, O().createElement(Nr, {
                    friendsData: t,
                    isOnline: e
                }), O().createElement("span", {
                    className: "info-label"
                }, t.map(function(e) {
                    return e.displayName
                }).join(", ")))
            }

            function Rr(e) {
                var t = e.friendData,
                    n = e.gameData,
                    r = e.translate,
                    a = (0, D.useState)(!1),
                    e = a[0],
                    i = a[1];
                if (0 === t.length) throw new Error("friendData should not be empty");
                return O().createElement("div", {
                    className: "game-card-friend-info game-card-info",
                    "data-testid": "game-tile-stats-friends"
                }, O().createElement("div", {
                    className: "info-avatar",
                    style: {
                        width: 22 * (t.slice(0, Er).length - 1) + 32 + "px"
                    }
                }, t.slice(0, Er).map(function(e) {
                    return O().createElement("div", {
                        className: "avatar-card",
                        role: "button",
                        tabIndex: 0,
                        key: e.displayName,
                        onClick: function(e) {
                            e.stopPropagation(), e.preventDefault(), i(!0)
                        },
                        onKeyDown: function(e) {
                            e.code === br.enter && (e.stopPropagation(), e.preventDefault(), i(!0))
                        }
                    }, O().createElement(Cr, {
                        user: e
                    }))
                })), r && O().createElement("span", {
                    className: "info-label text-overflow",
                    "data-testid": "game-tile-stats-info-label"
                }, t.length > Sr ? r(v.LabelPlayingOnePlusUsersWithComma, {
                    username: t[0].displayName,
                    count: t.length - Sr
                }) : r(v.LabelPlayingOneUser, {
                    user: t[0].displayName
                })), O().createElement(Ar, {
                    friendsDataInGame: t,
                    game: n,
                    show: e,
                    onHide: function(e) {
                        e.stopPropagation(), e.preventDefault(), i(!1)
                    }
                }))
            }
            hr.defaultProps = {
                page: Qe.HomePage,
                isOnScreen: !0,
                isFocused: !1
            }, Rr.defaultProps = {
                translate: void 0
            };
            var Ar = (0, u.withTranslations)(function(e) {
                    var t = e.show,
                        n = e.onHide,
                        r = e.friendsDataInGame,
                        a = e.game,
                        e = e.translate;
                    return O().createElement(M.Modal, {
                        show: t,
                        onHide: n,
                        size: "lg"
                    }, O().createElement(nr, {
                        friendsData: r.map(function(e) {
                            return yr(yr({}, e), {
                                nameForDisplay: e.displayName
                            })
                        }),
                        friendsInGame: r.map(function(e) {
                            return e.id
                        }),
                        game: a,
                        dismissModal: n,
                        translate: e
                    }))
                }, rr),
                Dr = function(e, o, l, u) {
                    return new(l = l || Promise)(function(n, t) {
                        function r(e) {
                            try {
                                i(u.next(e))
                            } catch (e) {
                                t(e)
                            }
                        }

                        function a(e) {
                            try {
                                i(u.throw(e))
                            } catch (e) {
                                t(e)
                            }
                        }

                        function i(e) {
                            var t;
                            e.done ? n(e.value) : ((t = e.value) instanceof l ? t : new l(function(e) {
                                e(t)
                            })).then(r, a)
                        }
                        i((u = u.apply(e, o || [])).next())
                    })
                },
                Or = function(n, r) {
                    var a, i, o, l = {
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
                                if (a) throw new TypeError("Generator is already executing.");
                                for (; l;) try {
                                    if (a = 1, i && (o = 2 & t[0] ? i.return : t[0] ? i.throw || ((o = i.return) && o.call(i), 0) : i.next) && !(o = o.call(i, t[1])).done) return o;
                                    switch (i = 0, o && (t = [2 & t[0], o.value]), t[0]) {
                                        case 0:
                                        case 1:
                                            o = t;
                                            break;
                                        case 4:
                                            return l.label++, {
                                                value: t[1],
                                                done: !1
                                            };
                                        case 5:
                                            l.label++, i = t[1], t = [0];
                                            continue;
                                        case 7:
                                            t = l.ops.pop(), l.trys.pop();
                                            continue;
                                        default:
                                            if (!(o = 0 < (o = l.trys).length && o[o.length - 1]) && (6 === t[0] || 2 === t[0])) {
                                                l = 0;
                                                continue
                                            }
                                            if (3 === t[0] && (!o || t[1] > o[0] && t[1] < o[3])) {
                                                l.label = t[1];
                                                break
                                            }
                                            if (6 === t[0] && l.label < o[1]) {
                                                l.label = o[1], o = t;
                                                break
                                            }
                                            if (o && l.label < o[2]) {
                                                l.label = o[2], l.ops.push(t);
                                                break
                                            }
                                            o[2] && l.ops.pop(), l.trys.pop();
                                            continue
                                    }
                                    t = r.call(n, l)
                                } catch (e) {
                                    t = [6, e], i = 0
                                } finally {
                                    a = o = 0
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
            (a = (0, D.forwardRef)(function(e, t) {
                var n = e.id,
                    r = e.buildEventProperties,
                    a = e.gameData,
                    i = e.page,
                    o = void 0 === i ? Qe.HomePage : i,
                    l = e.className,
                    u = void 0 === l ? "grid-item-container game-card-container" : l,
                    s = e.friendData,
                    c = void 0 === s ? [] : s,
                    f = e.isOnScreen,
                    i = void 0 === f || f,
                    l = e.shouldShowMetadata,
                    d = void 0 === l || l,
                    s = e.isSponsoredFooterAllowed,
                    m = void 0 !== s && s,
                    f = e.topicId,
                    v = e.translate,
                    l = (0, D.useState)(),
                    p = l[0],
                    h = l[1],
                    s = Dn(),
                    e = s[0],
                    l = s[1],
                    s = s[2],
                    g = (0, D.useMemo)(function() {
                        return Oe(c, a.universeId)
                    }, [c, a.universeId]),
                    y = On(a, f);
                (0, D.useEffect)(function() {
                    void 0 === p && 0 < g.length && Dr(void 0, void 0, void 0, function() {
                        var t;
                        return Or(this, function(e) {
                            switch (e.label) {
                                case 0:
                                    return e.trys.push([0, 2, , 3]), [4, Q(a.placeId.toString())];
                                case 1:
                                    return t = e.sent(), h(t), [3, 3];
                                case 2:
                                    return t = e.sent(), console.error(t), [3, 3];
                                case 3:
                                    return [2]
                            }
                        })
                    })
                }, [g, p]);
                return O().createElement("div", {
                    ref: t,
                    className: u,
                    "data-testid": "game-tile",
                    onMouseOver: l,
                    onMouseLeave: s,
                    onFocus: l,
                    onBlur: s
                }, O().createElement(hr, {
                    id: n,
                    isOnScreen: i,
                    buildEventProperties: r,
                    gameData: a,
                    page: o,
                    isFocused: e,
                    topicId: f
                }, function() {
                    if (!d) return O().createElement(O().Fragment, null);
                    if (null != a && a.isShowSponsoredLabel || null != a && a.isSponsored && m) return O().createElement(_r, {
                        translate: v
                    });
                    var e = jn(y);
                    return e ? O().createElement(xr, {
                        footerData: e
                    }) : 0 < g.length && p ? O().createElement(Rr, {
                        friendData: g,
                        gameData: p
                    }) : null != a && a.friendActivityTitle ? O().createElement(Pr, {
                        footerText: a.friendActivityTitle
                    }) : O().createElement(wr, {
                        totalUpVotes: a.totalUpVotes,
                        totalDownVotes: a.totalDownVotes,
                        playerCount: a.playerCount
                    })
                }()))
            })).displayName = "GameTile";
            var Fr = a;
            (Fi = function(e) {
                var t = e.placeId,
                    n = e.clientReferralUrl,
                    r = e.buttonClassName,
                    a = e.purchaseIconClassName,
                    i = (0, D.useState)(void 0),
                    o = i[0],
                    l = i[1],
                    e = (0, D.useState)(void 0),
                    i = e[0],
                    u = e[1];
                if ((0, D.useEffect)(function() {
                        Q(t).then(function(e) {
                            return l(e)
                        }).catch(function() {
                            u(!0)
                        })
                    }, [t]), void 0 === o && !i) return O().createElement(Ur, null);
                r = re()(r, "btn-full-width");
                return O().createElement(O().Fragment, null, O().createElement(M.Link, {
                    "data-testid": "hover-tile-purchase-button",
                    className: r,
                    url: n || (null == o ? void 0 : o.url)
                }, O().createElement("span", {
                    className: a
                }), O().createElement("span", {
                    className: "btn-text"
                }, (null == o ? void 0 : o.price) || "--"), " "))
            }).defaultProps = {
                clientReferralUrl: ""
            };
            var Mr = Fi,
                Ur = function() {
                    return O().createElement("div", {
                        className: "shimmer play-button game-card-thumb-container",
                        "data-testid": "play-button-default"
                    })
                };

            function Gr(e) {
                var t = e.gameData,
                    n = e.topicId,
                    r = e.wideTileType,
                    a = (0, D.useMemo)(function() {
                        return Ge(t, n)
                    }, [t, n]),
                    e = (0, D.useMemo)(function() {
                        return r === ge.EventTile ? ae.ThumbnailGameThumbnailSize.width576 : ae.ThumbnailGameThumbnailSize.width384
                    }, [r]);
                return null !== a ? O().createElement(ae.Thumbnail2d, {
                    type: ae.ThumbnailTypes.assetThumbnail,
                    size: e,
                    targetId: a,
                    containerClass: "brief-game-icon",
                    format: ae.ThumbnailFormat.jpeg,
                    altName: t.name
                }) : O().createElement(ae.Thumbnail2d, {
                    type: ae.ThumbnailTypes.gameThumbnail,
                    size: e,
                    targetId: t.placeId,
                    containerClass: "brief-game-icon",
                    format: ae.ThumbnailFormat.jpeg,
                    altName: t.name
                })
            }

            function jr(e) {
                var t = e.wrapperClassName,
                    n = e.isTileClickEnabled,
                    r = e.isOnScreen,
                    a = e.linkUrl,
                    e = e.children;
                return n ? O().createElement(M.Link, {
                    url: a,
                    className: t,
                    tabIndex: r ? 0 : -1
                }, e) : O().createElement("span", {
                    className: t
                }, e)
            }(Mi = function(e) {
                var t = e.universeId,
                    n = e.placeId,
                    r = e.playButtonEventProperties,
                    a = e.buttonClassName,
                    i = e.purchaseIconClassName,
                    o = e.clientReferralUrl,
                    l = e.shouldPurchaseNavigateToDetails,
                    e = S.PlayButton.usePlayabilityStatus,
                    u = S.PlayButton.PlayabilityStatuses,
                    s = S.PlayButton.PlayButton,
                    c = S.PlayButton.PurchaseButton,
                    e = e(t),
                    f = e[0],
                    d = e[1];
                switch (f) {
                    case void 0:
                    case u.GuestProhibited:
                    case u.Playable:
                        return O().createElement(s, {
                            universeId: t,
                            placeId: n,
                            status: null != f ? f : u.Playable,
                            eventProperties: r,
                            buttonClassName: a ? re()(a, "regular-play-button") : void 0,
                            disableLoadingState: !0
                        });
                    case u.PurchaseRequired:
                        return l ? O().createElement(Mr, {
                            placeId: n,
                            clientReferralUrl: o,
                            purchaseIconClassName: null != i ? i : "icon-common-play",
                            buttonClassName: re()(null != a ? a : "btn-growth-lg play-button", "purchase-button")
                        }) : O().createElement(c, {
                            universeId: t,
                            placeId: n,
                            iconClassName: null != i ? i : "icon-common-play",
                            refetchPlayabilityStatus: d,
                            buttonClassName: a
                        });
                    case u.UniverseRootPlaceIsPrivate:
                        return O().createElement("div", {
                            className: null != a ? a : "btn-growth-lg play-button"
                        }, O().createElement("span", {
                            className: "icon-status-private"
                        }));
                    default:
                        return O().createElement("div", {
                            className: null != a ? a : "btn-growth-lg play-button"
                        }, O().createElement("span", {
                            className: "icon-status-unavailable"
                        }))
                }
            }).defaultProps = {
                playButtonEventProperties: {},
                buttonClassName: void 0,
                purchaseIconClassName: void 0,
                clientReferralUrl: void 0,
                shouldPurchaseNavigateToDetails: !1
            };
            var Br = Mi;
            (ne = O().forwardRef(function(e, t) {
                var n = e.gameData,
                    r = e.id,
                    a = e.buildEventProperties,
                    i = e.friendData,
                    o = void 0 === i ? [] : i,
                    l = e.playerCountStyle,
                    u = e.playButtonStyle,
                    s = e.navigationRootPlaceId,
                    c = e.isSponsoredFooterAllowed,
                    f = void 0 !== c && c,
                    d = e.wideTileType,
                    m = e.hoverStyle,
                    v = e.topicId,
                    p = e.isOnScreen,
                    h = void 0 === p || p,
                    g = e.isInterestedUniverse,
                    y = void 0 === g ? void 0 : g,
                    b = e.toggleInterest,
                    E = void 0 === b ? void 0 : b,
                    S = e.translate,
                    w = 0 === r,
                    I = r === F.maxWideGameTilesPerCarouselPage - 1,
                    x = Dn(),
                    T = x[0],
                    P = x[1],
                    _ = x[2],
                    i = (0, D.useState)(n.placeId),
                    C = i[0],
                    k = i[1];
                (0, D.useEffect)(function() {
                    s && !Number.isNaN(s) ? k(parseInt(s, 10)) : n.navigationUid && J(n.navigationUid).then(function(e) {
                        null != e && e.rootPlaceId && k(e.rootPlaceId)
                    }).catch(function() {})
                }, [s, n.navigationUid]);

                function N() {
                    return n.minimumAge && n.ageRecommendationDisplayName && d !== ge.EventTile ? O().createElement("div", {
                        className: "game-card-info",
                        "data-testid": "game-tile-hover-age-rating"
                    }, O().createElement("span", {
                        className: "info-label"
                    }, n.ageRecommendationDisplayName)) : null
                }
                var c = (0, D.useMemo)(function() {
                        return st(C, n.name, a(n, r))
                    }, [n, a, r, C]),
                    p = a(n, r),
                    L = (0, D.useMemo)(function() {
                        return Oe(o, n.universeId)
                    }, [o, n.universeId]),
                    R = (0, D.useMemo)(function() {
                        return function(e, t) {
                            if (!t) return [];
                            var n = new Map(e.map(function(e) {
                                return [e.id, e]
                            }));
                            return t.map(function(e) {
                                return n.get(e.userId)
                            }).filter(function(e) {
                                return void 0 !== e
                            })
                        }(o, n.friendVisits)
                    }, [o, n.friendVisits]),
                    A = On(n, v),
                    g = function() {
                        return (d !== ge.GridTile || u === be.Enabled) && ((d !== ge.EventTile || u === be.Enabled) && d !== ge.InterestTile)
                    },
                    b = (0, D.useMemo)(function() {
                        return null != A && A.title ? A.title : n.name
                    }, [n.name, null == A ? void 0 : A.title]),
                    e = d !== ge.InterestTile,
                    x = d !== ge.InterestTile,
                    i = (0, D.useCallback)(function() {
                        E && E()
                    }, [E]);
                return O().createElement("li", {
                    className: re()("list-item", "hover-game-tile", {
                        "grid-tile": d === ge.GridTile
                    }, {
                        "event-tile": d === ge.EventTile
                    }, {
                        "interest-tile": d === ge.InterestTile
                    }, {
                        "first-tile": w
                    }, {
                        "last-tile": I
                    }, {
                        "image-overlay": m === Ee.imageOverlay
                    }, {
                        "old-hover": m !== Ee.imageOverlay
                    }, {
                        focused: T
                    }),
                    "data-testid": "wide-game-tile",
                    onMouseOver: x ? P : void 0,
                    onMouseLeave: x ? _ : void 0,
                    onFocus: x ? P : void 0,
                    onBlur: x ? _ : void 0,
                    id: n.universeId.toString()
                }, n.universeId && O().createElement("div", {
                    className: "featured-game-container game-card-container",
                    ref: t
                }, O().createElement(jr, {
                    wrapperClassName: "game-card-link",
                    isTileClickEnabled: e,
                    isOnScreen: h,
                    linkUrl: c
                }, O().createElement("div", {
                    className: "featured-game-icon-container"
                }, O().createElement(Gr, {
                    gameData: n,
                    topicId: v,
                    wideTileType: d
                }), O().createElement(gr, {
                    gameLayoutData: A,
                    playerCountStyle: l,
                    playerCount: n.playerCount,
                    isFocused: T
                })), O().createElement("div", {
                    className: "info-container"
                }, O().createElement("div", {
                    className: "info-metadata-container"
                }, O().createElement("div", {
                    className: "game-card-name game-name-title",
                    "data-testid": "game-tile-game-title",
                    title: b
                }, b), O().createElement("div", {
                    className: "wide-game-tile-metadata"
                }, O().createElement("div", {
                    className: "base-metadata"
                }, function() {
                    var e = N();
                    if (T && m === Ee.imageOverlay && e) return e;
                    if (n.isShowSponsoredLabel || n.isSponsored && f) return O().createElement(kr, {
                        translate: S
                    });
                    e = jn(A);
                    return e ? O().createElement(xr, {
                        footerData: e
                    }) : 0 < (null == L ? void 0 : L.length) ? O().createElement(Lr, {
                        friendsData: L,
                        isOnline: !0
                    }) : 0 < (null == R ? void 0 : R.length) ? O().createElement(Lr, {
                        friendsData: R,
                        isOnline: !1
                    }) : n.friendVisitedString ? O().createElement(Tr, {
                        iconClassName: "icon-pastname",
                        text: n.friendVisitedString
                    }) : l === ye.Footer ? O().createElement(wr, {
                        totalUpVotes: n.totalUpVotes,
                        totalDownVotes: n.totalDownVotes,
                        playerCount: n.playerCount
                    }) : O().createElement(Ir, {
                        totalUpVotes: n.totalUpVotes,
                        totalDownVotes: n.totalDownVotes,
                        translate: S
                    })
                }()), O().createElement("div", {
                    className: "hover-metadata"
                }, N()))), T && m === Ee.imageOverlay && g() && O().createElement("div", {
                    "data-testid": "game-tile-hover-game-tile-contents",
                    className: "play-button-container"
                }, O().createElement(Br, {
                    universeId: n.universeId.toString(),
                    placeId: n.placeId.toString(),
                    playButtonEventProperties: p,
                    buttonClassName: "btn-growth-xs play-button",
                    purchaseIconClassName: "icon-robux-white",
                    clientReferralUrl: c,
                    shouldPurchaseNavigateToDetails: !0
                })))), T && m !== Ee.imageOverlay && g() && O().createElement("div", {
                    "data-testid": "game-tile-hover-game-tile-contents",
                    className: "game-card-contents"
                }, O().createElement(Br, {
                    universeId: n.universeId.toString(),
                    placeId: n.placeId.toString(),
                    playButtonEventProperties: p,
                    buttonClassName: "btn-growth-xs play-button",
                    purchaseIconClassName: "icon-robux-white",
                    clientReferralUrl: c,
                    shouldPurchaseNavigateToDetails: !0
                })), d === ge.InterestTile && O().createElement(M.Button, {
                    "data-testid": "tile-interest-button",
                    className: "tile-interest-button",
                    variant: M.Button.variants.primary,
                    size: M.Button.sizes.medium,
                    title: S(U.ActionInterestCatcherInterested),
                    onClick: i
                }, y ? O().createElement("span", {
                    className: "icon-heart-red"
                }) : O().createElement("span", {
                    className: "icon-heart"
                }), O().createElement("span", null, S(U.ActionInterestCatcherInterested)))))
            })).displayName = "WideGameTile";
            var Vr = ne,
                qr = function() {
                    return (qr = Object.assign || function(e) {
                        for (var t, n = 1, r = arguments.length; n < r; n++)
                            for (var a in t = arguments[n]) Object.prototype.hasOwnProperty.call(t, a) && (e[a] = t[a]);
                        return e
                    }).apply(this, arguments)
                },
                Wr = function(e, t) {
                    var n = {};
                    for (a in e) Object.prototype.hasOwnProperty.call(e, a) && t.indexOf(a) < 0 && (n[a] = e[a]);
                    if (null != e && "function" == typeof Object.getOwnPropertySymbols)
                        for (var r = 0, a = Object.getOwnPropertySymbols(e); r < a.length; r++) t.indexOf(a[r]) < 0 && Object.prototype.propertyIsEnumerable.call(e, a[r]) && (n[a[r]] = e[a[r]]);
                    return n
                };
            (ie = (0, D.forwardRef)(function(e, t) {
                var n = e.componentType,
                    r = Wr(e, ["componentType"]);
                switch (n) {
                    case ge.AppGameTileNoMetadata:
                        return O().createElement(Fr, qr({
                            ref: t,
                            shouldShowMetadata: !1
                        }, r));
                    case ge.GridTile:
                    case ge.EventTile:
                    case ge.InterestTile:
                        return O().createElement(Vr, qr({
                            ref: t,
                            wideTileType: n
                        }, r));
                    default:
                        return O().createElement(Fr, qr({
                            ref: t
                        }, r))
                }
            })).displayName = "GameTileTypeMap";
            var Hr = ie;

            function zr(n) {
                return ua(void 0, void 0, Promise, function() {
                    var t;
                    return sa(this, function(e) {
                        switch (e.label) {
                            case 0:
                                return t = da(n), [4, _.httpService.get({
                                    withCredentials: !0,
                                    url: t
                                })];
                            case 1:
                                return [2, e.sent().data]
                        }
                    })
                })
            }

            function $r(n, r) {
                return ua(void 0, void 0, Promise, function() {
                    var t;
                    return sa(this, function(e) {
                        switch (e.label) {
                            case 0:
                                return t = fa(n), [4, _.httpService.post({
                                    withCredentials: !0,
                                    url: t
                                }, {
                                    rsvpStatus: r
                                })];
                            case 1:
                                return [2, e.sent().data]
                        }
                    })
                })
            }

            function Jr(e, t, n) {
                return e(xa[t].translationKey, n) || xa[t].fallback
            }

            function Kr(e, t) {
                return e > Date.now() ? Ta : t < Date.now() ? _a : Pa
            }

            function Yr(e) {
                return (e ? new Date(e) : new Date(0)).getTime()
            }

            function Qr(t, e) {
                function n(e) {
                    return Number.parseFloat((t / e).toFixed(1)).toString()
                }
                return 1e9 <= t ? "" + n(1e9) + Jr(e, "billionShorthandIdentifier") : 1e6 <= t ? "" + n(1e6) + Jr(e, "millionShorthandIdentifier") : 1e3 <= t ? "" + n(1e3) + Jr(e, "thousandShorthandIdentifier") : t.toString()
            }

            function Zr() {
                return _.uuidService.generateRandomUuid()
            }

            function Xr(e, t, n, r, a, i, o) {
                if (!e) throw new Error("missing root placeId");
                La(e.toString(), e.toString(), "", void 0, ha({
                    eventName: "virtualEventJoinGame",
                    ctx: ga,
                    eventJoinSessionId: t,
                    universeId: r,
                    page: o,
                    attributionId: a
                }, i), {
                    eventId: n
                })
            }

            function ea(e) {
                var t = (new S.Intl).locale;
                return new Date(e).toLocaleString(t, {
                    weekday: "short",
                    month: "short",
                    day: "numeric",
                    hour: "numeric",
                    minute: "numeric"
                })
            }(Gi = (0, D.forwardRef)(function(e, t) {
                var n = e.gameData,
                    r = e.buildEventProperties,
                    a = e.translate,
                    i = e.friendData,
                    o = e.componentType,
                    l = e.playerCountStyle,
                    u = e.playButtonStyle,
                    s = e.navigationRootPlaceId,
                    c = e.isSponsoredFooterAllowed,
                    f = e.hoverStyle,
                    d = e.topicId,
                    m = e.isExpandHomeContentEnabled,
                    v = e.tileRef,
                    m = re()("game-carousel", {
                        "wide-game-tile-carousel": o === ge.GridTile || o === ge.EventTile
                    }, {
                        "expand-home-content": m
                    }, {
                        "expand-home-content-disabled": !m
                    });
                return O().createElement("div", {
                    "data-testid": "game-carousel",
                    ref: t,
                    className: m
                }, n.map(function(e, t) {
                    return O().createElement(Hr, {
                        componentType: o,
                        playerCountStyle: l,
                        playButtonStyle: u,
                        navigationRootPlaceId: s,
                        isSponsoredFooterAllowed: c,
                        hoverStyle: f,
                        topicId: d,
                        ref: v,
                        key: t,
                        id: t,
                        gameData: e,
                        translate: a,
                        buildEventProperties: r,
                        friendData: i
                    })
                }))
            })).displayName = "GameCarousel";
            var ta = Gi,
                n = {
                    common: [],
                    feature: "Feature.GameDetails"
                },
                na = function(t, e, n) {
                    var r = (0, D.useState)(new Set),
                        a = r[0],
                        i = r[1],
                        r = (0, D.useState)(new Set),
                        o = r[0],
                        l = r[1],
                        u = (0, D.useRef)(null),
                        s = (0, D.useRef)(n);
                    (0, D.useEffect)(function() {
                        s.current = n
                    }, [n]);
                    var c = (0, D.useCallback)(function() {
                            Je.splitArray(Array.from(o).filter(function(e) {
                                return !a.has(e)
                            }), m.maxTilesInGameImpressionsEvent).filter(function(e) {
                                return 0 < e.length
                            }).forEach(function(n) {
                                var e, t = s.current(n);
                                void 0 !== t && 0 < (null === (e = t.absPositions) || void 0 === e ? void 0 : e.length) && (t = pt.gameImpressions(t), k.eventStreamService.sendEvent.apply(k.eventStreamService, t), i(function(e) {
                                    var t = e;
                                    return n.forEach(function(e) {
                                        return t.add(e)
                                    }), t
                                }))
                            })
                        }, [a, o]),
                        r = In(function() {
                            return c()
                        }),
                        f = r[0],
                        d = r[1];
                    (0, D.useEffect)(function() {
                        var e, i = Array.from(null !== (e = null === (e = null == t ? void 0 : t.current) || void 0 === e ? void 0 : e.children) && void 0 !== e ? e : []);
                        return u.current = k.elementVisibilityService.observeChildrenVisibility({
                                elements: i,
                                threshold: m.gameImpressionsIntersectionThreshold
                            }, function(e, t) {
                                d();
                                var n, r, a = (n = t, r = [], e.forEach(function(t) {
                                    var e;
                                    null == t || !t.isIntersecting || 0 <= (e = i.findIndex(function(e) {
                                        return e === t.target
                                    })) && (r.push(e), n.unobserve(t.target))
                                }), r.sort(function(e, t) {
                                    return e - t
                                }));
                                l(function(e) {
                                    var t = e;
                                    return a.forEach(function(e) {
                                        return t.add(e)
                                    }), t
                                }), f()
                            }),
                            function() {
                                null != u && u.current && u.current()
                            }
                    }, [t, e, o, f, d])
                },
                ra = function() {
                    return (ra = Object.assign || function(e) {
                        for (var t, n = 1, r = arguments.length; n < r; n++)
                            for (var a in t = arguments[n]) Object.prototype.hasOwnProperty.call(t, a) && (e[a] = t[a]);
                        return e
                    }).apply(this, arguments)
                },
                aa = function(e, o, l, u) {
                    return new(l = l || Promise)(function(n, t) {
                        function r(e) {
                            try {
                                i(u.next(e))
                            } catch (e) {
                                t(e)
                            }
                        }

                        function a(e) {
                            try {
                                i(u.throw(e))
                            } catch (e) {
                                t(e)
                            }
                        }

                        function i(e) {
                            var t;
                            e.done ? n(e.value) : ((t = e.value) instanceof l ? t : new l(function(e) {
                                e(t)
                            })).then(r, a)
                        }
                        i((u = u.apply(e, o || [])).next())
                    })
                },
                ia = function(n, r) {
                    var a, i, o, l = {
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
                                if (a) throw new TypeError("Generator is already executing.");
                                for (; l;) try {
                                    if (a = 1, i && (o = 2 & t[0] ? i.return : t[0] ? i.throw || ((o = i.return) && o.call(i), 0) : i.next) && !(o = o.call(i, t[1])).done) return o;
                                    switch (i = 0, o && (t = [2 & t[0], o.value]), t[0]) {
                                        case 0:
                                        case 1:
                                            o = t;
                                            break;
                                        case 4:
                                            return l.label++, {
                                                value: t[1],
                                                done: !1
                                            };
                                        case 5:
                                            l.label++, i = t[1], t = [0];
                                            continue;
                                        case 7:
                                            t = l.ops.pop(), l.trys.pop();
                                            continue;
                                        default:
                                            if (!(o = 0 < (o = l.trys).length && o[o.length - 1]) && (6 === t[0] || 2 === t[0])) {
                                                l = 0;
                                                continue
                                            }
                                            if (3 === t[0] && (!o || t[1] > o[0] && t[1] < o[3])) {
                                                l.label = t[1];
                                                break
                                            }
                                            if (6 === t[0] && l.label < o[1]) {
                                                l.label = o[1], o = t;
                                                break
                                            }
                                            if (o && l.label < o[2]) {
                                                l.label = o[2], l.ops.push(t);
                                                break
                                            }
                                            o[2] && l.ops.pop(), l.trys.pop();
                                            continue
                                    }
                                    t = r.call(n, l)
                                } catch (e) {
                                    t = [6, e], i = 0
                                } finally {
                                    a = o = 0
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
                oa = (0, u.withTranslations)(function(e) {
                    var t = e.translate,
                        n = (0, D.useRef)(null),
                        r = (0, D.useRef)(null),
                        a = (0, D.useState)([]),
                        i = a[0],
                        o = a[1],
                        e = (De() || {}).universeId,
                        l = void 0 === e ? "" : e,
                        a = (0, D.useState)(!1),
                        e = a[0],
                        u = a[1],
                        a = (0, D.useCallback)(function(e) {
                            if (void 0 !== i) {
                                var t = e.filter(function(e) {
                                    return e < (null == i ? void 0 : i.length)
                                });
                                return ra(ra(((e = {})[at.RootPlaceIds] = t.map(function(e) {
                                    return i[e].placeId
                                }), e[at.UniverseIds] = t.map(function(e) {
                                    return i[e].universeId
                                }), e), Ue(i, t)), ((e = {})[at.AbsPositions] = t, e[at.SortPos] = 0, e[at.Page] = Qe.GameDetailPage, e))
                            }
                        }, [i]);
                    return na(n, i.length, a), (0, D.useEffect)(function() {
                        (function() {
                            return aa(this, void 0, void 0, function() {
                                var t;
                                return ia(this, function(e) {
                                    switch (e.label) {
                                        case 0:
                                            u(!0), e.label = 1;
                                        case 1:
                                            return e.trys.push([1, 3, , 4]), [4, K(l, d.maxTilesPerCarouselPage)];
                                        case 2:
                                            return t = e.sent().games, o(t), [3, 4];
                                        case 3:
                                            return t = e.sent(), console.error(t), [3, 4];
                                        case 4:
                                            return u(!1), [2]
                                    }
                                })
                            })
                        })().finally(function() {
                            return null
                        })
                    }, [l]), O().createElement(O().Fragment, null, e ? O().createElement(M.Loading, null) : null, 0 < i.length && O().createElement(O().Fragment, null, O().createElement("h2", null, t(p.HeadingRecommendedGames)), O().createElement(ta, {
                        ref: n,
                        tileRef: r,
                        gameData: i,
                        buildEventProperties: function(e, t) {
                            var n = {};
                            return n[at.PlaceId] = e.placeId, n[at.UniverseId] = e.universeId, n[at.IsAd] = e.isSponsored, n[at.NativeAdData] = e.nativeAdData, n[at.Position] = t, n[at.NumberOfLoadedTiles] = (i || []).length, n[at.Page] = Qe.GameDetailPage, n
                        },
                        translate: t
                    })))
                }, n),
                la = ts(5250),
                ua = function(e, o, l, u) {
                    return new(l = l || Promise)(function(n, t) {
                        function r(e) {
                            try {
                                i(u.next(e))
                            } catch (e) {
                                t(e)
                            }
                        }

                        function a(e) {
                            try {
                                i(u.throw(e))
                            } catch (e) {
                                t(e)
                            }
                        }

                        function i(e) {
                            var t;
                            e.done ? n(e.value) : ((t = e.value) instanceof l ? t : new l(function(e) {
                                e(t)
                            })).then(r, a)
                        }
                        i((u = u.apply(e, o || [])).next())
                    })
                },
                sa = function(n, r) {
                    var a, i, o, l = {
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
                                if (a) throw new TypeError("Generator is already executing.");
                                for (; l;) try {
                                    if (a = 1, i && (o = 2 & t[0] ? i.return : t[0] ? i.throw || ((o = i.return) && o.call(i), 0) : i.next) && !(o = o.call(i, t[1])).done) return o;
                                    switch (i = 0, o && (t = [2 & t[0], o.value]), t[0]) {
                                        case 0:
                                        case 1:
                                            o = t;
                                            break;
                                        case 4:
                                            return l.label++, {
                                                value: t[1],
                                                done: !1
                                            };
                                        case 5:
                                            l.label++, i = t[1], t = [0];
                                            continue;
                                        case 7:
                                            t = l.ops.pop(), l.trys.pop();
                                            continue;
                                        default:
                                            if (!(o = 0 < (o = l.trys).length && o[o.length - 1]) && (6 === t[0] || 2 === t[0])) {
                                                l = 0;
                                                continue
                                            }
                                            if (3 === t[0] && (!o || t[1] > o[0] && t[1] < o[3])) {
                                                l.label = t[1];
                                                break
                                            }
                                            if (6 === t[0] && l.label < o[1]) {
                                                l.label = o[1], o = t;
                                                break
                                            }
                                            if (o && l.label < o[2]) {
                                                l.label = o[2], l.ops.push(t);
                                                break
                                            }
                                            o[2] && l.ops.pop(), l.trys.pop();
                                            continue
                                    }
                                    t = r.call(n, l)
                                } catch (e) {
                                    t = [6, e], i = 0
                                } finally {
                                    a = o = 0
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
                ca = S.EnvironmentUrls.apiGatewayUrl || "https://apis.roblox.com",
                fa = (S.EnvironmentUrls.gamesApi, S.EnvironmentUrls.thumbnailsApi, function(e) {
                    return ca + "/virtual-events/v1/virtual-events/" + e + "/rsvps"
                }),
                da = function(e) {
                    return ca + "/virtual-events/v1/virtual-events/" + e + "/rsvps/counters"
                },
                ma = function(e) {
                    return ca + "/virtual-events/v1/universes/" + e + "/virtual-events?fromUtc=" + (new Date).toISOString()
                },
                va = "going",
                pa = "notGoing",
                ha = function() {
                    return (ha = Object.assign || function(e) {
                        for (var t, n = 1, r = arguments.length; n < r; n++)
                            for (var a in t = arguments[n]) Object.prototype.hasOwnProperty.call(t, a) && (e[a] = t[a]);
                        return e
                    }).apply(this, arguments)
                },
                ga = "virtualEvents",
                ya = "expDetailsPage",
                ba = "virtualEventJoined",
                Ea = "eventDetailsPageVisit",
                Sa = "virtualEventRSVP",
                wa = "virtualEventImpression",
                Ia = {
                    sendVirtualEventImpressionFromExperienceDetailsPageEvent: function(e, t) {
                        o().EventStream.SendEventWithTarget(wa, ga, {
                            virtualEventId: e,
                            universeId: t,
                            channel: ya
                        }, o().EventStream.TargetTypes.WWW)
                    },
                    sendVirtualEventJoinedFromExperienceDetailsPageEvent: function(e, t, n, r) {
                        o().EventStream.SendEventWithTarget(ba, ga, {
                            virtualEventId: e,
                            universeId: t,
                            "SD.gamePlayFromEventDetails.ID": n,
                            "SD.gamePlayFromEventDetails.CT": Date.now(),
                            channel: ya,
                            attendanceCount: r
                        }, o().EventStream.TargetTypes.WWW)
                    },
                    sendEventDetailsPageVisitFromExpDetailsEvent: function(e, t) {
                        o().EventStream.SendEventWithTarget(Ea, ga, {
                            virtualEventId: e,
                            universeId: t,
                            channel: ya
                        }, o().EventStream.TargetTypes.WWW)
                    },
                    sendVirtualEventRSVPFromExpDetailsEvent: function(e, t, n, r, a, i) {
                        o().EventStream.SendEventWithTarget(Sa, ga, ha({
                            virtualEventId: e,
                            universeId: t,
                            channel: ya,
                            status: a,
                            attendanceCount: i,
                            page: r
                        }, n), o().EventStream.TargetTypes.WWW)
                    }
                },
                xa = {
                    millionShorthandIdentifier: {
                        translationKey: "millionShorthandIdentifier",
                        fallback: "M"
                    },
                    billionShorthandIdentifier: {
                        translationKey: "billionShorthandIdentifier",
                        fallback: "B"
                    },
                    thousandShorthandIdentifier: {
                        translationKey: "thousandShorthandIdentifier",
                        fallback: "K"
                    },
                    eventsTitle: {
                        translationKey: "EventsListTitle",
                        fallback: "Events"
                    },
                    seeMore: {
                        translationKey: "SeeMore",
                        fallback: "See More"
                    },
                    joinEvent: {
                        translationKey: "JoinEvent",
                        fallback: "Join Event"
                    },
                    unfollowEvent: {
                        translationKey: "UnfollowEvent",
                        fallback: "Unfollow Event"
                    },
                    NotifyMe: {
                        translationKey: "NotifyMe",
                        fallback: "Notify Me"
                    },
                    networkError: {
                        translationKey: "NetworkError",
                        fallback: "Something went wrong. Please try again later"
                    },
                    happeningNow: {
                        translationKey: "Label.HappeningNow",
                        fallback: "Happening now"
                    },
                    reminderSetForEventTime: {
                        translationKey: "Label.ReminderSetForEventTime",
                        fallback: "Reminder for event is set."
                    }
                },
                Ta = "UPCOMING",
                Pa = "LIVE",
                _a = "PAST",
                Ca = {
                    newContent: "Label.NewContent",
                    itemDrop: "Label.ItemDrop",
                    newSeason: "Label.NewSeason",
                    newLocation: "Label.NewLocation",
                    newMap: "Label.NewMap",
                    moreLevels: "Label.MoreLevels",
                    newFeature: "Label.NewFeature",
                    earlyAccess: "Label.EarlyAccess",
                    expansion: "Label.Expansion",
                    challenge: "Label.Challenge",
                    quest: "Label.Quest",
                    festival: "Label.Festival"
                },
                ka = "ExperienceEventsWeb_",
                Na = "JoinFailed",
                La = S.PlayButton.launchGame,
                Ra = Bn = {
                    common: ["CommonUI.Features"],
                    feature: "Feature.VirtualEvents"
                },
                Aa = function(t, e, n) {
                    var r = (0, D.useRef)(null),
                        a = (0, D.useCallback)(function() {
                            Ia.sendVirtualEventImpressionFromExperienceDetailsPageEvent(e, n)
                        }, [e, n]);
                    (0, D.useEffect)(function() {
                        var e;
                        return null != t && t.current && (e = t.current, r.current = k.elementVisibilityService.observeVisibility({
                                element: e,
                                threshold: .5
                            }, function(e) {
                                e && (a(), r.current && r.current())
                            })),
                            function() {
                                null != r && r.current && r.current()
                            }
                    }, [a, t])
                },
                Da = function(e, o, l, u) {
                    return new(l = l || Promise)(function(n, t) {
                        function r(e) {
                            try {
                                i(u.next(e))
                            } catch (e) {
                                t(e)
                            }
                        }

                        function a(e) {
                            try {
                                i(u.throw(e))
                            } catch (e) {
                                t(e)
                            }
                        }

                        function i(e) {
                            var t;
                            e.done ? n(e.value) : ((t = e.value) instanceof l ? t : new l(function(e) {
                                e(t)
                            })).then(r, a)
                        }
                        i((u = u.apply(e, o || [])).next())
                    })
                },
                Oa = function(n, r) {
                    var a, i, o, l = {
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
                                if (a) throw new TypeError("Generator is already executing.");
                                for (; l;) try {
                                    if (a = 1, i && (o = 2 & t[0] ? i.return : t[0] ? i.throw || ((o = i.return) && o.call(i), 0) : i.next) && !(o = o.call(i, t[1])).done) return o;
                                    switch (i = 0, o && (t = [2 & t[0], o.value]), t[0]) {
                                        case 0:
                                        case 1:
                                            o = t;
                                            break;
                                        case 4:
                                            return l.label++, {
                                                value: t[1],
                                                done: !1
                                            };
                                        case 5:
                                            l.label++, i = t[1], t = [0];
                                            continue;
                                        case 7:
                                            t = l.ops.pop(), l.trys.pop();
                                            continue;
                                        default:
                                            if (!(o = 0 < (o = l.trys).length && o[o.length - 1]) && (6 === t[0] || 2 === t[0])) {
                                                l = 0;
                                                continue
                                            }
                                            if (3 === t[0] && (!o || t[1] > o[0] && t[1] < o[3])) {
                                                l.label = t[1];
                                                break
                                            }
                                            if (6 === t[0] && l.label < o[1]) {
                                                l.label = o[1], o = t;
                                                break
                                            }
                                            if (o && l.label < o[2]) {
                                                l.label = o[2], l.ops.push(t);
                                                break
                                            }
                                            o[2] && l.ops.pop(), l.trys.pop();
                                            continue
                                    }
                                    t = r.call(n, l)
                                } catch (e) {
                                    t = [6, e], i = 0
                                } finally {
                                    a = o = 0
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
                Fa = (ji = (0, M.createSystemFeedback)())[0],
                Ma = ji[1],
                Ua = (0, u.withTranslations)(function(e) {
                    var n = e.eventItem,
                        r = e.universeDetails,
                        t = e.playabilityStatus,
                        a = e.attributionId,
                        i = e.referralSessionInfo,
                        o = e.referralPage,
                        l = e.translate,
                        u = (0, D.useState)(!0),
                        s = u[0],
                        c = u[1],
                        f = (0, D.useState)(0),
                        d = f[0],
                        m = f[1],
                        v = (0, D.useState)(!1),
                        p = v[0],
                        h = v[1],
                        g = (0, D.useRef)(null),
                        y = Kr(Yr(n.eventTime.startUtc), Yr(n.eventTime.endUtc)) === Pa,
                        b = (0, D.useCallback)(function() {
                            return Jr(l, y ? "joinEvent" : p ? "unfollowEvent" : "NotifyMe")
                        }, [y, l, p]),
                        e = (0, D.useCallback)(function() {
                            return y ? "btn-growth-md" : p ? "btn-control-md" : "btn-primary-md"
                        }, [y, p]),
                        E = (0, D.useCallback)(function(e) {
                            e.preventDefault(), e.stopPropagation();
                            var t = Zr();
                            Ia.sendVirtualEventJoinedFromExperienceDetailsPageEvent(n.id, n.universeId, t, d);
                            try {
                                void 0 !== r.rootPlaceId && Xr(r.rootPlaceId, t, n.id, r.id, a, i, o)
                            } catch (e) {}
                        }, [n.id, n.universeId, r.id, r.rootPlaceId, d, a, i, o]),
                        S = (0, D.useCallback)(function(t) {
                            return Da(void 0, void 0, void 0, function() {
                                return Oa(this, function(e) {
                                    switch (e.label) {
                                        case 0:
                                            t.preventDefault(), t.stopPropagation(), Ia.sendVirtualEventRSVPFromExpDetailsEvent(n.id, n.universeId, i, o, va, d), e.label = 1;
                                        case 1:
                                            return e.trys.push([1, 3, , 4]), [4, $r(n.id, va)];
                                        case 2:
                                            return e.sent(), m(function(e) {
                                                return e + 1
                                            }), h(!0), [3, 4];
                                        case 3:
                                            return e.sent(), Ma.warning(Jr(l, "networkError")), [3, 4];
                                        case 4:
                                            return [2]
                                    }
                                })
                            })
                        }, [n.id, n.universeId, i, o, d, l]),
                        w = (0, D.useCallback)(function(t) {
                            return Da(void 0, void 0, void 0, function() {
                                return Oa(this, function(e) {
                                    switch (e.label) {
                                        case 0:
                                            t.preventDefault(), t.stopPropagation(), Ia.sendVirtualEventRSVPFromExpDetailsEvent(n.id, n.universeId, i, o, pa, d), e.label = 1;
                                        case 1:
                                            return e.trys.push([1, 3, , 4]), [4, $r(n.id, pa)];
                                        case 2:
                                            return e.sent(), m(function(e) {
                                                return Math.max(e - 1, 0)
                                            }), h(!1), [3, 4];
                                        case 3:
                                            return e.sent(), Ma.warning(Jr(l, "networkError")), [3, 4];
                                        case 4:
                                            return [2]
                                    }
                                })
                            })
                        }, [n.id, n.universeId, i, o, d, l]),
                        u = (0, D.useMemo)(function() {
                            return "Playable" === t
                        }, [t]),
                        f = (0, D.useCallback)(function() {
                            return y ? E : p ? w : S
                        }, [y, E, S, w, p]),
                        v = (0, D.useCallback)(function() {
                            Ia.sendEventDetailsPageVisitFromExpDetailsEvent(n.id, n.universeId)
                        }, [n.id, n.universeId]);
                    return Aa(g, n.id, n.universeId), (0, D.useEffect)(function() {
                        h(n.userRsvpStatus === va), Da(void 0, void 0, void 0, function() {
                            var t;
                            return Oa(this, function(e) {
                                switch (e.label) {
                                    case 0:
                                        return e.trys.push([0, 2, , 3]), [4, zr(n.id)];
                                    case 1:
                                        return t = e.sent(), m(t.counters.going), c(!1), [3, 3];
                                    case 2:
                                        return e.sent(), m(0), c(!1), [3, 3];
                                    case 3:
                                        return [2]
                                }
                            })
                        })
                    }, [n.id, n.universeId, n.userRsvpStatus, y]), O().createElement("li", {
                        className: "stack-row",
                        ref: g
                    }, O().createElement(M.Link, {
                        className: "clickable-event-list-item",
                        "aria-label": n.title,
                        onClick: v,
                        url: "https://" + window.location.hostname + "/events/" + n.id
                    }, O().createElement("div", {
                        className: "clickable-event-list-item-contents"
                    }, O().createElement("div", {
                        className: "event-title font-header-2"
                    }, n.title), O().createElement("div", {
                        className: "event-subtitle-container"
                    }, O().createElement("div", {
                        className: "event-subtitle-item small-oneline text"
                    }, ea(Yr(n.eventTime.startUtc)).toUpperCase()), !s && (0 < d || 0 < r.playing) && O().createElement("div", {
                        className: "event-subtitle-item small-oneline text"
                    }, "•"), 0 < d && O().createElement(O().Fragment, null, O().createElement("div", {
                        className: "icon-override favorited-icon"
                    }), O().createElement("div", {
                        className: "event-subtitle-item small-oneline text"
                    }, Qr(d, l))), y && 0 < r.playing && O().createElement(O().Fragment, null, O().createElement("div", {
                        className: "icon-override player-icon"
                    }), O().createElement("div", {
                        className: "event-subtitle-item small-oneline text"
                    }, Qr(r.playing, l)))), O().createElement("div", {
                        className: "event-description-container"
                    }, O().createElement("p", {
                        className: "event-description small text"
                    }, n.description)), O().createElement("button", {
                        type: "button",
                        disabled: !u && y,
                        "aria-label": !u && y ? t : b(),
                        onClick: f(),
                        className: "notify-button btn-full-width " + e()
                    }, b())), O().createElement(Fa, null)))
                }, Bn);
            (Bi = function(e) {
                var t = e.wrapperClassName,
                    n = e.isTileClickEnabled,
                    r = e.isOnScreen,
                    a = e.linkUrl,
                    i = e.onTileClick,
                    e = e.children;
                return n ? O().createElement(M.Link, {
                    url: a,
                    className: t,
                    tabIndex: r ? 0 : -1,
                    onClick: i
                }, e) : O().createElement("span", {
                    className: t
                }, e)
            }).defaultProps = {
                onTileClick: void 0
            };
            var Ga = Bi;

            function ja(e) {
                var t = e.isEventLive,
                    n = e.playabilityStatus,
                    r = e.userHasRsvpd,
                    a = e.onRsvpButtonClick,
                    i = e.onJoinEventBtnClicked,
                    e = e.translate;
                return t ? O().createElement("button", {
                    type: "button",
                    disabled: n !== S.PlayButton.PlayabilityStatuses.Playable,
                    onClick: i,
                    className: "btn-growth-xs play-button regular-play-button",
                    "aria-label": Jr(e, "joinEvent")
                }, O().createElement("span", {
                    className: "icon-common-play"
                })) : O().createElement("button", {
                    type: "button",
                    className: re()("btn-growth-xs", "play-button", "notification-button", {
                        "notification-on": r
                    }),
                    onClick: a,
                    "aria-label": Jr(e, r ? "unfollowEvent" : "NotifyMe")
                }, O().createElement("span", {
                    className: r ? "icon-selected-notification-bell-inverse" : "icon-common-notification-bell"
                }))
            }

            function Ba(e) {
                var t = e.isEventLive,
                    n = e.playabilityStatus,
                    r = e.userHasRsvpd,
                    a = e.onRsvpButtonClick,
                    i = e.onJoinEventBtnClicked,
                    o = e.translate,
                    e = (0, D.useMemo)(function() {
                        return Jr(o, t ? "joinEvent" : r ? "unfollowEvent" : "NotifyMe")
                    }, [t, o, r]);
                return O().createElement("button", {
                    type: "button",
                    disabled: t && n !== S.PlayButton.PlayabilityStatuses.Playable,
                    className: re()("btn-growth-xs", "play-button", "wide-event-play-button", {
                        "event-follow-button": !t && !r,
                        "event-unfollow-button": !t && r
                    }),
                    onClick: t ? i : a,
                    "aria-label": e
                }, O().createElement("span", null, e))
            }

            function Va(e) {
                var t = e.eventThumbnailId,
                    n = e.placeId,
                    r = e.altText,
                    e = (0, D.useMemo)(function() {
                        return void 0 !== t ? t : null != n ? n : 0
                    }, [t, n]);
                return O().createElement(ae.Thumbnail2d, {
                    type: ae.ThumbnailTypes.assetThumbnail,
                    size: ae.ThumbnailGameThumbnailSize.width384,
                    targetId: e,
                    containerClass: "brief-game-icon",
                    format: ae.ThumbnailFormat.jpeg,
                    altName: r
                })
            }

            function qa(e) {
                var t = e.footerText,
                    e = e.wideButton;
                return O().createElement("div", {
                    className: "wide-game-tile-metadata"
                }, O().createElement("div", {
                    className: "base-metadata"
                }, O().createElement(xr, {
                    footerData: {
                        type: Tn.TextLabel,
                        text: {
                            textLiteral: t
                        }
                    }
                }), e))
            }

            function Wa(e) {
                var t = e.isEventLive,
                    n = e.eventStartTimeUtc,
                    r = e.eventCategory,
                    a = e.translate,
                    e = (0, D.useMemo)(function() {
                        return t ? r && Ca[r] ? a(Ca[r]) : Jr(a, "happeningNow") : ea(Yr(n))
                    }, [t, r, n, a]);
                return O().createElement(vr, {
                    text: e
                })
            }(Vi = function(e) {
                var t = e.id,
                    n = e.title,
                    r = e.linkUrl,
                    a = e.tileRef,
                    i = e.hoverStyle,
                    o = e.wideTileType,
                    l = e.isHoverEnabled,
                    u = e.isOnScreen,
                    s = e.isContainedTile,
                    c = e.isTileClickEnabled,
                    f = e.onTileClick,
                    d = e.getShouldShowActionButton,
                    m = e.actionButton,
                    v = e.tileThumbnail,
                    p = e.thumbnailOverlayPill,
                    h = e.tileFooter,
                    g = e.interestButton,
                    y = e.systemFeedback,
                    b = (0, D.useState)(!1),
                    E = b[0],
                    S = b[1],
                    e = In(function() {
                        S(!0)
                    }, 100),
                    w = e[0],
                    I = e[1],
                    b = In(function() {
                        S(!1)
                    }, 100),
                    x = b[0],
                    T = b[1],
                    e = function() {
                        T(), w()
                    },
                    b = function() {
                        I(), x()
                    },
                    s = re()("list-item", "hover-game-tile", {
                        "grid-tile": o === ge.GridTile,
                        "event-tile": o === ge.EventTile,
                        "interest-tile": o === ge.InterestTile,
                        "experience-events-tile": o === ge.ExperienceEventsTile,
                        "image-overlay": i === Ee.imageOverlay,
                        "old-hover": i !== Ee.imageOverlay,
                        "contained-tile": s,
                        focused: E
                    });
                return O().createElement("li", {
                    className: s,
                    "data-testid": "wide-game-tile",
                    onMouseOver: l ? e : void 0,
                    onMouseLeave: l ? b : void 0,
                    onFocus: l ? e : void 0,
                    onBlur: l ? b : void 0,
                    id: t
                }, O().createElement("div", {
                    className: "featured-game-container game-card-container",
                    ref: a
                }, O().createElement(Ga, {
                    wrapperClassName: "game-card-link",
                    isTileClickEnabled: c,
                    isOnScreen: u,
                    linkUrl: r,
                    onTileClick: f
                }, O().createElement("div", {
                    className: "featured-game-icon-container"
                }, v, p), O().createElement("div", {
                    className: "info-container"
                }, O().createElement("div", {
                    className: "info-metadata-container"
                }, O().createElement("div", {
                    className: "game-card-name game-name-title",
                    "data-testid": "game-tile-game-title",
                    title: n
                }, n), h), i === Ee.imageOverlay && d(E) && O().createElement("div", {
                    "data-testid": "game-tile-hover-game-tile-contents",
                    className: "play-button-container"
                }, m))), i !== Ee.imageOverlay && d(E) && O().createElement("div", {
                    "data-testid": "game-tile-hover-game-tile-contents",
                    className: "game-card-contents"
                }, m), g, y))
            }).defaultProps = {
                hoverStyle: void 0,
                thumbnailOverlayPill: void 0,
                interestButton: void 0,
                systemFeedback: void 0,
                onTileClick: void 0
            };
            var Ha = Vi,
                za = function(e, o, l, u) {
                    return new(l = l || Promise)(function(n, t) {
                        function r(e) {
                            try {
                                i(u.next(e))
                            } catch (e) {
                                t(e)
                            }
                        }

                        function a(e) {
                            try {
                                i(u.throw(e))
                            } catch (e) {
                                t(e)
                            }
                        }

                        function i(e) {
                            var t;
                            e.done ? n(e.value) : ((t = e.value) instanceof l ? t : new l(function(e) {
                                e(t)
                            })).then(r, a)
                        }
                        i((u = u.apply(e, o || [])).next())
                    })
                },
                $a = function(n, r) {
                    var a, i, o, l = {
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
                                if (a) throw new TypeError("Generator is already executing.");
                                for (; l;) try {
                                    if (a = 1, i && (o = 2 & t[0] ? i.return : t[0] ? i.throw || ((o = i.return) && o.call(i), 0) : i.next) && !(o = o.call(i, t[1])).done) return o;
                                    switch (i = 0, o && (t = [2 & t[0], o.value]), t[0]) {
                                        case 0:
                                        case 1:
                                            o = t;
                                            break;
                                        case 4:
                                            return l.label++, {
                                                value: t[1],
                                                done: !1
                                            };
                                        case 5:
                                            l.label++, i = t[1], t = [0];
                                            continue;
                                        case 7:
                                            t = l.ops.pop(), l.trys.pop();
                                            continue;
                                        default:
                                            if (!(o = 0 < (o = l.trys).length && o[o.length - 1]) && (6 === t[0] || 2 === t[0])) {
                                                l = 0;
                                                continue
                                            }
                                            if (3 === t[0] && (!o || t[1] > o[0] && t[1] < o[3])) {
                                                l.label = t[1];
                                                break
                                            }
                                            if (6 === t[0] && l.label < o[1]) {
                                                l.label = o[1], o = t;
                                                break
                                            }
                                            if (o && l.label < o[2]) {
                                                l.label = o[2], l.ops.push(t);
                                                break
                                            }
                                            o[2] && l.ops.pop(), l.trys.pop();
                                            continue
                                    }
                                    t = r.call(n, l)
                                } catch (e) {
                                    t = [6, e], i = 0
                                } finally {
                                    a = o = 0
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
                Ja = function(r, a, i, o, l) {
                    var e = (0, D.useState)(r.userRsvpStatus === va),
                        u = e[0],
                        s = e[1],
                        e = (0, D.useState)(0),
                        c = e[0],
                        t = e[1];
                    (0, D.useEffect)(function() {
                        zr(r.id).then(function(e) {
                            t(e.counters.going)
                        }).catch(function() {})
                    }, [r.id]);
                    var f = (0, D.useMemo)(function() {
                            var e = ea(Yr(r.eventTime.startUtc));
                            return Jr(l, "reminderSetForEventTime", {
                                eventName: r.displayTitle || r.title,
                                eventTime: e
                            })
                        }, [r.eventTime.startUtc, r.displayTitle, r.title, l]),
                        e = (0, D.useCallback)(function(n) {
                            return za(void 0, void 0, void 0, function() {
                                var t;
                                return $a(this, function(e) {
                                    switch (e.label) {
                                        case 0:
                                            t = u ? pa : va, n.preventDefault(), n.stopPropagation(), Ia.sendVirtualEventRSVPFromExpDetailsEvent(r.id, r.universeId, a, i, t, c), e.label = 1;
                                        case 1:
                                            return e.trys.push([1, 3, , 4]), [4, $r(r.id, t)];
                                        case 2:
                                            return e.sent(), s(t === va), t === va && o.success(f), [3, 4];
                                        case 3:
                                            return e.sent(), o.warning(Jr(l, "networkError")), [3, 4];
                                        case 4:
                                            return [2]
                                    }
                                })
                            })
                        }, [r, f, o, a, i, l, u, c]);
                    return {
                        userHasRsvpd: u,
                        totalRsvps: c,
                        handleToggleRsvpClick: e
                    }
                },
                Ka = function(e, o, l, u) {
                    return new(l = l || Promise)(function(n, t) {
                        function r(e) {
                            try {
                                i(u.next(e))
                            } catch (e) {
                                t(e)
                            }
                        }

                        function a(e) {
                            try {
                                i(u.throw(e))
                            } catch (e) {
                                t(e)
                            }
                        }

                        function i(e) {
                            var t;
                            e.done ? n(e.value) : ((t = e.value) instanceof l ? t : new l(function(e) {
                                e(t)
                            })).then(r, a)
                        }
                        i((u = u.apply(e, o || [])).next())
                    })
                },
                Ya = function(n, r) {
                    var a, i, o, l = {
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
                                if (a) throw new TypeError("Generator is already executing.");
                                for (; l;) try {
                                    if (a = 1, i && (o = 2 & t[0] ? i.return : t[0] ? i.throw || ((o = i.return) && o.call(i), 0) : i.next) && !(o = o.call(i, t[1])).done) return o;
                                    switch (i = 0, o && (t = [2 & t[0], o.value]), t[0]) {
                                        case 0:
                                        case 1:
                                            o = t;
                                            break;
                                        case 4:
                                            return l.label++, {
                                                value: t[1],
                                                done: !1
                                            };
                                        case 5:
                                            l.label++, i = t[1], t = [0];
                                            continue;
                                        case 7:
                                            t = l.ops.pop(), l.trys.pop();
                                            continue;
                                        default:
                                            if (!(o = 0 < (o = l.trys).length && o[o.length - 1]) && (6 === t[0] || 2 === t[0])) {
                                                l = 0;
                                                continue
                                            }
                                            if (3 === t[0] && (!o || t[1] > o[0] && t[1] < o[3])) {
                                                l.label = t[1];
                                                break
                                            }
                                            if (6 === t[0] && l.label < o[1]) {
                                                l.label = o[1], o = t;
                                                break
                                            }
                                            if (o && l.label < o[2]) {
                                                l.label = o[2], l.ops.push(t);
                                                break
                                            }
                                            o[2] && l.ops.pop(), l.trys.pop();
                                            continue
                                    }
                                    t = r.call(n, l)
                                } catch (e) {
                                    t = [6, e], i = 0
                                } finally {
                                    a = o = 0
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
                Qa = function(e, t) {
                    void 0 === t && (t = !0);
                    var n = (0, D.useState)(!1),
                        r = n[0],
                        a = n[1],
                        n = (0, D.useState)(null),
                        i = n[0],
                        o = n[1];
                    return (0, D.useEffect)(function() {
                        var t;
                        a(!0), t = e, Ka(void 0, void 0, Promise, function() {
                            return Ya(this, function(e) {
                                switch (e.label) {
                                    case 0:
                                        return null !== S.ExperimentationService && void 0 !== S.ExperimentationService && S.ExperimentationService.getAllValuesForLayer ? [4, S.ExperimentationService.getAllValuesForLayer(t)] : [3, 2];
                                    case 1:
                                        return [2, e.sent()];
                                    case 2:
                                        return [2, {}]
                                }
                            })
                        }).then(function(e) {
                            o(e)
                        }).catch(function() {
                            o(null)
                        }).finally(function() {
                            a(!1)
                        })
                    }, [e]), (0, D.useEffect)(function() {
                        i && t && null !== S.ExperimentationService && void 0 !== S.ExperimentationService && S.ExperimentationService.logLayerExposure && S.ExperimentationService.logLayerExposure(e)
                    }, [t, i, e]), {
                        loading: r,
                        data: i
                    }
                },
                Za = (ln = (0, M.createSystemFeedback)())[0],
                Xa = ln[1],
                ei = (0, u.withTranslations)(function(e) {
                    var r = e.eventItem,
                        a = e.universeDetails,
                        t = e.playabilityStatus,
                        i = e.attributionId,
                        o = e.referralSessionInfo,
                        l = e.referralPage,
                        n = e.translate,
                        u = (0, D.useRef)(null),
                        s = Qa("CreatorSuccess.VirtualEvents").data,
                        c = (0, D.useMemo)(function() {
                            return Kr(Yr(r.eventTime.startUtc), Yr(r.eventTime.endUtc)) === Pa
                        }, [r.eventTime.startUtc, r.eventTime.endUtc]),
                        f = (0, D.useCallback)(function() {
                            Ia.sendEventDetailsPageVisitFromExpDetailsEvent(r.id, r.universeId)
                        }, [r.id, r.universeId]);
                    Aa(u, r.id, r.universeId);
                    var d = Ja(r, o, l, Xa, n),
                        m = d.userHasRsvpd,
                        v = d.totalRsvps,
                        p = d.handleToggleRsvpClick,
                        h = (0, D.useCallback)(function(t) {
                            t.preventDefault(), t.stopPropagation();
                            var e = Zr();
                            Ia.sendVirtualEventJoinedFromExperienceDetailsPageEvent(r.id, r.universeId, e, v);
                            var n = null != s && s.isJoinEventPlaceEnabled && r.placeId ? r.placeId : a.rootPlaceId;
                            try {
                                void 0 !== n && Xr(n, e, r.id, a.id, i, o, l)
                            } catch (e) {
                                (t = Na) && (0, C.fireEvent)(ka + t)
                            }
                        }, [r, v, s, a, i, o, l]),
                        g = O().createElement(Va, {
                            eventThumbnailId: null === (b = null === (y = r.thumbnails) || void 0 === y ? void 0 : y[0]) || void 0 === b ? void 0 : b.mediaId,
                            placeId: a.rootPlaceId,
                            altText: r.displayTitle || r.title
                        }),
                        y = O().createElement(Wa, {
                            isEventLive: c,
                            eventStartTimeUtc: r.eventTime.startUtc,
                            eventCategory: null === (d = null === (e = r.eventCategories) || void 0 === e ? void 0 : e[0]) || void 0 === d ? void 0 : d.category,
                            translate: n
                        }),
                        b = (0, D.useMemo)(function() {
                            return O().createElement(Ba, {
                                isEventLive: c,
                                playabilityStatus: t,
                                userHasRsvpd: m,
                                onRsvpButtonClick: p,
                                onJoinEventBtnClicked: h,
                                translate: n
                            })
                        }, [c, t, m, p, h, n]),
                        e = O().createElement(qa, {
                            footerText: r.displaySubtitle || r.subtitle || r.displayDescription || r.description,
                            wideButton: b
                        }),
                        d = O().createElement(ja, {
                            isEventLive: c,
                            playabilityStatus: t,
                            userHasRsvpd: m,
                            onRsvpButtonClick: p,
                            onJoinEventBtnClicked: h,
                            translate: n
                        }),
                        b = (0, D.useMemo)(function() {
                            return nt(r.id)
                        }, [r.id]);
                    return O().createElement(Ha, {
                        id: r.id,
                        title: r.displayTitle || r.title,
                        linkUrl: b,
                        tileRef: u,
                        hoverStyle: Ee.imageOverlay,
                        wideTileType: ge.ExperienceEventsTile,
                        isHoverEnabled: !0,
                        isContainedTile: !0,
                        isOnScreen: !0,
                        isTileClickEnabled: !0,
                        onTileClick: f,
                        getShouldShowActionButton: function() {
                            return !1
                        },
                        actionButton: d,
                        tileThumbnail: g,
                        thumbnailOverlayPill: y,
                        tileFooter: e,
                        systemFeedback: O().createElement(Za, null)
                    })
                }, Bn),
                ti = "undefined" != typeof Map ? Map : (Object.defineProperty(ri.prototype, "size", {
                    get: function() {
                        return this.__entries__.length
                    },
                    enumerable: !0,
                    configurable: !0
                }), ri.prototype.get = function(e) {
                    e = ni(this.__entries__, e), e = this.__entries__[e];
                    return e && e[1]
                }, ri.prototype.set = function(e, t) {
                    var n = ni(this.__entries__, e);
                    ~n ? this.__entries__[n][1] = t : this.__entries__.push([e, t])
                }, ri.prototype.delete = function(e) {
                    var t = this.__entries__,
                        e = ni(t, e);
                    ~e && t.splice(e, 1)
                }, ri.prototype.has = function(e) {
                    return !!~ni(this.__entries__, e)
                }, ri.prototype.clear = function() {
                    this.__entries__.splice(0)
                }, ri.prototype.forEach = function(e, t) {
                    void 0 === t && (t = null);
                    for (var n = 0, r = this.__entries__; n < r.length; n++) {
                        var a = r[n];
                        e.call(t, a[1], a[0])
                    }
                }, ri);

            function ni(e, n) {
                var r = -1;
                return e.some(function(e, t) {
                    return e[0] === n && (r = t, !0)
                }), r
            }

            function ri() {
                this.__entries__ = []
            }
            var ai = "undefined" != typeof window && "undefined" != typeof document && window.document === document,
                ii = void 0 !== ts.g && ts.g.Math === Math ? ts.g : "undefined" != typeof self && self.Math === Math ? self : "undefined" != typeof window && window.Math === Math ? window : Function("return this")(),
                oi = "function" == typeof requestAnimationFrame ? requestAnimationFrame.bind(ii) : function(e) {
                    return setTimeout(function() {
                        return e(Date.now())
                    }, 1e3 / 60)
                },
                li = 2,
                ui = ["top", "right", "bottom", "left", "width", "height", "size", "weight"],
                si = "undefined" != typeof MutationObserver,
                ci = (fi.prototype.addObserver = function(e) {
                    ~this.observers_.indexOf(e) || this.observers_.push(e), this.connected_ || this.connect_()
                }, fi.prototype.removeObserver = function(e) {
                    var t = this.observers_,
                        e = t.indexOf(e);
                    ~e && t.splice(e, 1), !t.length && this.connected_ && this.disconnect_()
                }, fi.prototype.refresh = function() {
                    this.updateObservers_() && this.refresh()
                }, fi.prototype.updateObservers_ = function() {
                    var e = this.observers_.filter(function(e) {
                        return e.gatherActive(), e.hasActive()
                    });
                    return e.forEach(function(e) {
                        return e.broadcastActive()
                    }), 0 < e.length
                }, fi.prototype.connect_ = function() {
                    ai && !this.connected_ && (document.addEventListener("transitionend", this.onTransitionEnd_), window.addEventListener("resize", this.refresh), si ? (this.mutationsObserver_ = new MutationObserver(this.refresh), this.mutationsObserver_.observe(document, {
                        attributes: !0,
                        childList: !0,
                        characterData: !0,
                        subtree: !0
                    })) : (document.addEventListener("DOMSubtreeModified", this.refresh), this.mutationEventsAdded_ = !0), this.connected_ = !0)
                }, fi.prototype.disconnect_ = function() {
                    ai && this.connected_ && (document.removeEventListener("transitionend", this.onTransitionEnd_), window.removeEventListener("resize", this.refresh), this.mutationsObserver_ && this.mutationsObserver_.disconnect(), this.mutationEventsAdded_ && document.removeEventListener("DOMSubtreeModified", this.refresh), this.mutationsObserver_ = null, this.mutationEventsAdded_ = !1, this.connected_ = !1)
                }, fi.prototype.onTransitionEnd_ = function(e) {
                    var e = e.propertyName,
                        t = void 0 === e ? "" : e;
                    ui.some(function(e) {
                        return !!~t.indexOf(e)
                    }) && this.refresh()
                }, fi.getInstance = function() {
                    return this.instance_ || (this.instance_ = new fi), this.instance_
                }, fi.instance_ = null, fi);

            function fi() {
                function e() {
                    i && (i = !1, r()), o && n()
                }

                function t() {
                    oi(e)
                }

                function n() {
                    var e = Date.now();
                    if (i) {
                        if (e - l < li) return;
                        o = !0
                    } else o = !(i = !0), setTimeout(t, a);
                    l = e
                }
                var r, a, i, o, l;
                this.connected_ = !1, this.mutationEventsAdded_ = !1, this.mutationsObserver_ = null, this.observers_ = [], this.onTransitionEnd_ = this.onTransitionEnd_.bind(this), this.refresh = (r = this.refresh.bind(this), o = i = !(a = 20), l = 0, n)
            }
            var di = function(e, t) {
                    for (var n = 0, r = Object.keys(t); n < r.length; n++) {
                        var a = r[n];
                        Object.defineProperty(e, a, {
                            value: t[a],
                            enumerable: !1,
                            writable: !1,
                            configurable: !0
                        })
                    }
                    return e
                },
                mi = function(e) {
                    return e && e.ownerDocument && e.ownerDocument.defaultView || ii
                },
                vi = Ei(0, 0, 0, 0);

            function pi(e) {
                return parseFloat(e) || 0
            }

            function hi(n) {
                for (var e = [], t = 1; t < arguments.length; t++) e[t - 1] = arguments[t];
                return e.reduce(function(e, t) {
                    return e + pi(n["border-" + t + "-width"])
                }, 0)
            }

            function gi(e) {
                var t = e.clientWidth,
                    n = e.clientHeight;
                if (!t && !n) return vi;
                var r = mi(e).getComputedStyle(e),
                    a = function(e) {
                        for (var t = {}, n = 0, r = ["top", "right", "bottom", "left"]; n < r.length; n++) {
                            var a = r[n],
                                i = e["padding-" + a];
                            t[a] = pi(i)
                        }
                        return t
                    }(r),
                    i = a.left + a.right,
                    o = a.top + a.bottom,
                    l = pi(r.width),
                    u = pi(r.height);
                return "border-box" === r.boxSizing && (Math.round(l + i) !== t && (l -= hi(r, "left", "right") + i), Math.round(u + o) !== n && (u -= hi(r, "top", "bottom") + o)), (e = e) !== mi(e).document.documentElement && (t = Math.round(l + i) - t, n = Math.round(u + o) - n, 1 !== Math.abs(t) && (l -= t), 1 !== Math.abs(n) && (u -= n)), Ei(a.left, a.top, l, u)
            }
            var yi = "undefined" != typeof SVGGraphicsElement ? function(e) {
                return e instanceof mi(e).SVGGraphicsElement
            } : function(e) {
                return e instanceof mi(e).SVGElement && "function" == typeof e.getBBox
            };

            function bi(e) {
                return ai ? yi(e) ? Ei(0, 0, (t = (t = e).getBBox()).width, t.height) : gi(e) : vi;
                var t
            }

            function Ei(e, t, n, r) {
                return {
                    x: e,
                    y: t,
                    width: n,
                    height: r
                }
            }
            var Si = (wi.prototype.isActive = function() {
                var e = bi(this.target);
                return (this.contentRect_ = e).width !== this.broadcastWidth || e.height !== this.broadcastHeight
            }, wi.prototype.broadcastRect = function() {
                var e = this.contentRect_;
                return this.broadcastWidth = e.width, this.broadcastHeight = e.height, e
            }, wi);

            function wi(e) {
                this.broadcastWidth = 0, this.broadcastHeight = 0, this.contentRect_ = Ei(0, 0, 0, 0), this.target = e
            }
            var Ii = function(e, t) {
                    var n, r, a, i = (n = (i = t).x, r = i.y, a = i.width, t = i.height, i = "undefined" != typeof DOMRectReadOnly ? DOMRectReadOnly : Object, i = Object.create(i.prototype), di(i, {
                        x: n,
                        y: r,
                        width: a,
                        height: t,
                        top: r,
                        right: n + a,
                        bottom: t + r,
                        left: n
                    }), i);
                    di(this, {
                        target: e,
                        contentRect: i
                    })
                },
                xi = (Ti.prototype.observe = function(e) {
                    if (!arguments.length) throw new TypeError("1 argument required, but only 0 present.");
                    if ("undefined" != typeof Element && Element instanceof Object) {
                        if (!(e instanceof mi(e).Element)) throw new TypeError('parameter 1 is not of type "Element".');
                        var t = this.observations_;
                        t.has(e) || (t.set(e, new Si(e)), this.controller_.addObserver(this), this.controller_.refresh())
                    }
                }, Ti.prototype.unobserve = function(e) {
                    if (!arguments.length) throw new TypeError("1 argument required, but only 0 present.");
                    if ("undefined" != typeof Element && Element instanceof Object) {
                        if (!(e instanceof mi(e).Element)) throw new TypeError('parameter 1 is not of type "Element".');
                        var t = this.observations_;
                        t.has(e) && (t.delete(e), t.size || this.controller_.removeObserver(this))
                    }
                }, Ti.prototype.disconnect = function() {
                    this.clearActive(), this.observations_.clear(), this.controller_.removeObserver(this)
                }, Ti.prototype.gatherActive = function() {
                    var t = this;
                    this.clearActive(), this.observations_.forEach(function(e) {
                        e.isActive() && t.activeObservations_.push(e)
                    })
                }, Ti.prototype.broadcastActive = function() {
                    var e, t;
                    this.hasActive() && (e = this.callbackCtx_, t = this.activeObservations_.map(function(e) {
                        return new Ii(e.target, e.broadcastRect())
                    }), this.callback_.call(e, t, e), this.clearActive())
                }, Ti.prototype.clearActive = function() {
                    this.activeObservations_.splice(0)
                }, Ti.prototype.hasActive = function() {
                    return 0 < this.activeObservations_.length
                }, Ti);

            function Ti(e, t, n) {
                if (this.activeObservations_ = [], this.observations_ = new ti, "function" != typeof e) throw new TypeError("The callback provided as parameter 1 is not a function.");
                this.callback_ = e, this.controller_ = t, this.callbackCtx_ = n
            }
            var Pi = new("undefined" != typeof WeakMap ? WeakMap : ti),
                _i = function e(t) {
                    if (!(this instanceof e)) throw new TypeError("Cannot call a class as a function.");
                    if (!arguments.length) throw new TypeError("1 argument required, but only 0 present.");
                    var n = ci.getInstance(),
                        n = new xi(t, n, this);
                    Pi.set(this, n)
                };
            ["observe", "unobserve", "disconnect"].forEach(function(t) {
                _i.prototype[t] = function() {
                    var e;
                    return (e = Pi.get(this))[t].apply(e, arguments)
                }
            });
            var rr = void 0 !== ii.ResizeObserver ? ii.ResizeObserver : _i,
                Ci = null !== (a = window.ResizeObserver) && void 0 !== a ? a : rr,
                ki = function() {
                    var e = (0, D.useState)(void 0),
                        t = e[0],
                        n = e[1],
                        r = (0, D.useCallback)(function(e) {
                            e = null === (e = null == e ? void 0 : e.getBoundingClientRect()) || void 0 === e ? void 0 : e.width;
                            void 0 !== e && n(e)
                        }, []),
                        e = (0, D.useCallback)(function(e) {
                            e && e[0] && e[0].target && r(e[0].target)
                        }, [r]),
                        a = (0, D.useRef)(new Ci(e)),
                        e = (0, D.useCallback)(function(e) {
                            e && null != a && a.current && (r(e), a.current.disconnect(), a.current.observe(e))
                        }, [r]);
                    return (0, D.useEffect)(function() {
                        return function() {
                            null != a && a.current && a.current.disconnect()
                        }
                    }, []), [e, t]
                },
                Ni = S.PlayButton.usePlayabilityStatus,
                Li = (0, u.withTranslations)(function(e) {
                    var t = e.eventList,
                        n = e.universeDetails,
                        r = e.isEventsSectionRedesignEnabled,
                        a = e.attributionId,
                        i = e.referralSessionInfo,
                        o = e.referralPage,
                        l = e.translate,
                        u = (0, D.useState)(0),
                        s = u[0],
                        c = u[1],
                        f = Ni(n.id.toString())[0];
                    (0, D.useEffect)(function() {
                        S.ExperimentationService.getAllValuesForLayer && S.ExperimentationService.logLayerExposure ? S.ExperimentationService.getAllValuesForLayer(Lt.gameDetailsExposure).then(function() {
                            S.ExperimentationService.logLayerExposure(Lt.gameDetailsExposure)
                        }).catch(function() {
                            (0, C.fireEvent)(w.eventsRedesignExposureLogError), k.eventStreamService.sendEvent({
                                name: "webExperienceDetailsError",
                                type: "webExperienceDetailsError",
                                context: k.eventStreamService.eventTypes.pageLoad
                            }, {
                                layerName: Lt.gameDetailsExposure,
                                isEventsSectionRedesignEnabled: r.toString(),
                                universeId: n.id,
                                referralPage: null != o ? o : ""
                            })
                        }) : (0, C.fireEvent)(w.eventsRedesignExposureLogServiceMissing)
                    }, []);
                    var d = (0, D.useCallback)(function() {
                            c(function(e) {
                                return e + 1
                            })
                        }, []),
                        m = (0, D.useMemo)(function() {
                            return t.filter(function(e) {
                                return Yr(e.eventTime.endUtc) > (new Date).getTime()
                            })
                        }, [t]),
                        v = (0, D.useState)(3),
                        p = v[0],
                        h = v[1],
                        g = r && p ? p : 2,
                        y = r && p ? p : 2,
                        e = (0, D.useMemo)(function() {
                            return m.length > g + y * s
                        }, [s, m, g, y]),
                        b = (0, D.useRef)(null),
                        u = ki(),
                        v = u[0],
                        E = u[1];
                    (0, D.useLayoutEffect)(function() {
                        var e = (0, la.throttle)(function(e) {
                            h(function(e, t, n, r, a, i) {
                                var o = n ? (r ? lr : or)[n] : ur;
                                if (!e) return o.minTilesPerRow;
                                var l = o.minTileWidth,
                                    u = o.columnGap,
                                    n = o.minTilesPerRow,
                                    o = o.maxTilesPerRow,
                                    u = Math.floor((e - t + u) / (l + u)),
                                    u = Math.min(o, Math.max(n, u));
                                return r && a === he.Carousel && void 0 !== i && u < i ? u + .3 : u
                            }(e, 0, ge.ExperienceEventsTile))
                        }, 100);
                        E && (document.documentElement.style.setProperty("--home-feed-width", E + "px"), e(E))
                    }, [E]), (0, D.useLayoutEffect)(function() {
                        p && null != b && b.current && b.current.style.setProperty("--items-per-row", p.toString())
                    }, [p]);
                    u = (0, D.useMemo)(function() {
                        return m.sort(function(e, t) {
                            return Yr(e.eventTime.startUtc) < Yr(t.eventTime.startUtc) ? -1 : 1
                        }).slice(0, g + y * s)
                    }, [g, s, m, y]);
                    return u.length <= 0 ? O().createElement("div", null) : O().createElement(O().Fragment, null, O().createElement("div", {
                        className: "container-header"
                    }, O().createElement("h2", null, Jr(l, "eventsTitle"))), O().createElement("div", {
                        className: "stack",
                        ref: v
                    }, r ? O().createElement("div", {
                        className: "game-grid wide-game-tile-game-grid game-details-page-events-grid",
                        ref: b
                    }, u.map(function(e) {
                        return O().createElement(ei, {
                            key: e.id,
                            eventItem: e,
                            universeDetails: n,
                            playabilityStatus: f,
                            attributionId: a,
                            referralSessionInfo: i,
                            referralPage: o
                        })
                    })) : O().createElement("ul", {
                        className: "stack-list"
                    }, u.map(function(e) {
                        return O().createElement(Ua, {
                            key: e.id,
                            eventItem: e,
                            universeDetails: n,
                            playabilityStatus: f,
                            attributionId: a,
                            referralSessionInfo: i,
                            referralPage: o
                        })
                    }))), e && O().createElement("button", {
                        type: "button",
                        "aria-label": Jr(l, "seeMore"),
                        onClick: d,
                        className: "notify-button btn-full-width btn-control-md"
                    }, Jr(l, "seeMore")))
                }, Bn),
                Ri = function(e) {
                    var t = (0, D.useState)(void 0),
                        n = t[0],
                        r = t[1],
                        a = (0, D.useState)(!1),
                        t = a[0],
                        i = a[1];
                    return (0, D.useEffect)(function() {
                        var n;
                        S.CurrentUser.isAuthenticated && (i(!1), n = e, ua(void 0, void 0, Promise, function() {
                            var t;
                            return sa(this, function(e) {
                                switch (e.label) {
                                    case 0:
                                        return t = ma(n), [4, _.httpService.get({
                                            url: t,
                                            withCredentials: !0
                                        })];
                                    case 1:
                                        return [2, e.sent().data.data]
                                }
                            })
                        }).then(function(e) {
                            r(e)
                        }).catch(function() {
                            i(!0)
                        }))
                    }, [e]), {
                        eventDetails: n,
                        hasError: t
                    }
                },
                Ai = (0, u.withTranslations)(function(e) {
                    var t = e.universeId,
                        n = e.gameDetails,
                        r = e.isEventsSectionRedesignEnabled,
                        a = e.attributionId,
                        i = e.referralSessionInfo,
                        o = e.referralPage,
                        e = Ri(t),
                        t = e.eventDetails;
                    return e.hasError || !S.CurrentUser.isAuthenticated ? O().createElement(O().Fragment, null) : void 0 === t || void 0 === n ? O().createElement(M.Loading, null) : 0 < (null == t ? void 0 : t.length) && void 0 !== n ? O().createElement("div", {
                        className: "virtual-event-game-details-container"
                    }, O().createElement(Li, {
                        eventList: t,
                        universeDetails: n,
                        isEventsSectionRedesignEnabled: r,
                        attributionId: a,
                        referralSessionInfo: i,
                        referralPage: o
                    })) : O().createElement(O().Fragment, null)
                }, Ra),
                Di = ReactDOMServer,
                Oi = RobloxItemPurchase,
                Fi = {
                    common: ["CommonUI.Controls"],
                    feature: "Feature.ServerList"
                },
                Mi = {
                    common: [],
                    feature: "Feature.PrivateServers"
                },
                Ui = {
                    common: [],
                    feature: "Purchasing.PurchaseDialog"
                },
                ne = {
                    common: [],
                    feature: "Feature.VIPServer"
                },
                ie = 5,
                Gi = 15,
                n = 50,
                ji = 4,
                Bi = {
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
                Vi = {
                    descending: "Desc",
                    ascending: "Asc"
                },
                qi = {
                    sortOrder: "Desc",
                    excludeFullGames: !1
                },
                ln = {
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
                Wi = S.EnvironmentUrls.gamesApi,
                Hi = S.EnvironmentUrls.apiGatewayUrl,
                zi = S.EnvironmentUrls.matchmakingApi,
                a = function(e) {
                    return _.urlService.getAbsoluteUrl("/users/".concat(e, "/profile"))
                },
                $i = function(e) {
                    return _.urlService.getUrlWithQueries("/private-server/configure", {
                        privateServerId: e
                    })
                },
                Ji = function(e) {
                    return _.urlService.getUrlWithLocale("/info/vip-server", e)
                },
                Ki = function() {
                    return _.urlService.getAbsoluteUrl("/my/account#!/privacy")
                };

            function Yi(t, e) {
                var n, r = Object.keys(t);
                return Object.getOwnPropertySymbols && (n = Object.getOwnPropertySymbols(t), e && (n = n.filter(function(e) {
                    return Object.getOwnPropertyDescriptor(t, e).enumerable
                })), r.push.apply(r, n)), r
            }

            function Qi(r) {
                for (var e = 1; e < arguments.length; e++) {
                    var a = null != arguments[e] ? arguments[e] : {};
                    e % 2 ? Yi(Object(a), !0).forEach(function(e) {
                        var t, n;
                        t = r, e = a[n = e], n in t ? Object.defineProperty(t, n, {
                            value: e,
                            enumerable: !0,
                            configurable: !0,
                            writable: !0
                        }) : t[n] = e
                    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(r, Object.getOwnPropertyDescriptors(a)) : Yi(Object(a)).forEach(function(e) {
                        Object.defineProperty(r, e, Object.getOwnPropertyDescriptor(a, e))
                    })
                }
                return r
            }
            var Zi = function(e) {
                    return _.urlService.getAbsoluteUrl("".concat(Wi, "/v1/games/").concat(e, "/private-servers"))
                },
                Xi = function() {
                    return _.urlService.getAbsoluteUrl("".concat(zi, "/v1/game-instances/shutdown"))
                },
                eo = function(e) {
                    return "".concat(Wi, "/v1/vip-servers/").concat(e)
                },
                to = function(e) {
                    return "".concat(Wi, "/v1/games/vip-servers/").concat(e)
                },
                no = function(e) {
                    return "".concat(Wi, "/v1/vip-servers/").concat(e, "/subscription")
                },
                ro = function() {
                    return "".concat(Hi, "/user-settings-api/v1/user-settings")
                },
                ao = function() {
                    return "".concat(Hi, "/universal-app-configuration/v1/behaviors/account-settings-ui/content")
                },
                io = function(e, t, n) {
                    n = 2 < arguments.length && void 0 !== n ? n : {}, e = {
                        url: Zi(e),
                        retryable: !1,
                        withCredentials: !0
                    }, n = Qi({
                        cursor: t
                    }, n);
                    return _.httpService.get(e, n)
                },
                oo = function(e, t, n) {
                    var r = null === (a = document.getElementsByName("__RequestVerificationToken")[0]) || void 0 === a ? void 0 : a.value,
                        a = {
                            url: Xi(),
                            retryable: !0,
                            withCredentials: !0
                        },
                        t = {
                            __RequestVerificationToken: r,
                            placeId: e,
                            gameId: t
                        };
                    return n && (t.privateServerId = n), _.httpService.post(a, t)
                },
                lo = function(e, t, n) {
                    e = {
                        url: to(e),
                        retryable: !0,
                        withCredentials: !0
                    }, n = {
                        name: t,
                        expectedPrice: n
                    };
                    return _.httpService.post(e, n)
                },
                uo = function(e) {
                    e = {
                        url: eo(e),
                        retryable: !0,
                        withCredentials: !0
                    };
                    return _.httpService.get(e)
                },
                so = function(e, t, n) {
                    e = {
                        url: no(e),
                        retryable: !0,
                        withCredentials: !0
                    };
                    return _.httpService.patch(e, {
                        active: t,
                        price: n
                    })
                },
                co = function() {
                    var e = {
                        retryable: !0,
                        withCredentials: !0,
                        url: ro()
                    };
                    return _.httpService.get(e).then(function(e) {
                        return e.data
                    }, function(e) {
                        return null
                    })
                },
                fo = function() {
                    var e = {
                        retryable: !0,
                        withCredentials: !0,
                        url: ao()
                    };
                    return _.httpService.get(e).then(function(e) {
                        return e.data
                    }, function(e) {
                        return null
                    })
                };

            function mo(e, t) {
                return function(e) {
                    if (Array.isArray(e)) return e
                }(e) || function(e, t) {
                    if ("undefined" == typeof Symbol || !(Symbol.iterator in Object(e))) return;
                    var n = [],
                        r = !0,
                        a = !1,
                        i = void 0;
                    try {
                        for (var o, l = e[Symbol.iterator](); !(r = (o = l.next()).done) && (n.push(o.value), !t || n.length !== t); r = !0);
                    } catch (e) {
                        a = !0, i = e
                    } finally {
                        try {
                            r || null == l.return || l.return()
                        } finally {
                            if (a) throw i
                        }
                    }
                    return n
                }(e, t) || function(e, t) {
                    if (!e) return;
                    if ("string" == typeof e) return vo(e, t);
                    var n = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === n && e.constructor && (n = e.constructor.name);
                    if ("Map" === n || "Set" === n) return Array.from(e);
                    if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return vo(e, t)
                }(e, t) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }

            function vo(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
                return r
            }

            function po(e) {
                void 0 === e && (e = {
                    baseUrl: ""
                }), this.configuration = e, this.baseUrl = this.configuration.baseUrl
            }
            var ho = (rr = mo((0, M.createModal)(), 2))[0],
                go = rr[1],
                yo = ln,
                bo = n,
                Bn = function() {
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
                Ra = (Eo.prototype.sendEvent = function(e) {
                    var t = e.localTime,
                        n = e.target,
                        r = e.eventType,
                        a = e.context,
                        i = e.additionalProperties,
                        o = e.currentUrl,
                        l = e.guestId,
                        e = e.sessionId,
                        t = t.toISOString(),
                        u = new URL("".concat(this.baseUrl, "/pe"));
                    return u.searchParams.append("t", n), u.searchParams.append("evt", r), u.searchParams.append("ctx", a), u.searchParams.append("lt", t), u.searchParams.append("url", o || window.location.href), void 0 !== l && u.searchParams.append("gid", l), void 0 !== e && u.searchParams.append("sid", e), void 0 !== i && Object.keys(i).forEach(function(e) {
                        u.searchParams.append(e, (null !== (e = i[e]) && void 0 !== e ? e : "").toString())
                    }), fetch(u.href, {
                        credentials: "same-origin"
                    })
                }, Eo.prototype.sendEventViaImg = function(e, t) {
                    var n = e.localTime,
                        r = e.target,
                        a = e.eventType,
                        i = e.context,
                        o = e.additionalProperties,
                        l = e.currentUrl,
                        u = e.guestId,
                        e = e.sessionId,
                        n = n.toISOString(),
                        s = new URL("".concat(this.baseUrl, "/e.png"));
                    s.searchParams.append("t", r), s.searchParams.append("evt", a), s.searchParams.append("ctx", i), s.searchParams.append("lt", n), s.searchParams.append("url", l || window.location.href), void 0 !== u && s.searchParams.append("gid", u), void 0 !== e && s.searchParams.append("sid", e), void 0 !== o && Object.keys(o).forEach(function(e) {
                        s.searchParams.append(e, (null !== (e = o[e]) && void 0 !== e ? e : "").toString())
                    });
                    e = new Image;
                    return e.src = s.href, e.onload = function() {
                        void 0 !== t && t(!0)
                    }, e.onerror = function(e) {
                        void 0 !== t && t(!1), console.error(e)
                    }, e
                }, Eo);

            function Eo(e) {
                void 0 === e && (e = new po), this.configuration = e, this.baseUrl = e.baseUrl
            }
            var So, wo, rr = S.EnvironmentUrls.domain;
            (n = So = So || {}).PRIVATE_SERVER_JOIN = "privateServerJoin", n.PRIVATE_SERVER_LOAD = "privateServerLoad", (wo = wo || {}).GAME_TAB = "gameTab";
            var Io = new Ra(new po({
                    baseUrl: "https://ecsv2." + rr + "/www"
                })),
                xo = {
                    sendEvent: function(e, t, n) {
                        n = {
                            target: "www",
                            localTime: new Date,
                            eventType: e,
                            context: t,
                            additionalProperties: {
                                latency: n
                            }
                        };
                        return Io.sendEventViaImg(n)
                    }
                };

            function To() {
                return (To = Object.assign || function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n, r = arguments[t];
                        for (n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n])
                    }
                    return e
                }).apply(this, arguments)
            }

            function Po(e, t) {
                return function(e) {
                    if (Array.isArray(e)) return e
                }(e) || function(e, t) {
                    if ("undefined" == typeof Symbol || !(Symbol.iterator in Object(e))) return;
                    var n = [],
                        r = !0,
                        a = !1,
                        i = void 0;
                    try {
                        for (var o, l = e[Symbol.iterator](); !(r = (o = l.next()).done) && (n.push(o.value), !t || n.length !== t); r = !0);
                    } catch (e) {
                        a = !0, i = e
                    } finally {
                        try {
                            r || null == l.return || l.return()
                        } finally {
                            if (a) throw i
                        }
                    }
                    return n
                }(e, t) || function(e, t) {
                    if (!e) return;
                    if ("string" == typeof e) return _o(e, t);
                    var n = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === n && e.constructor && (n = e.constructor.name);
                    if ("Map" === n || "Set" === n) return Array.from(e);
                    if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _o(e, t)
                }(e, t) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }

            function _o(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
                return r
            }
            var Co = ln,
                rr = (Ra = Po((ko.defaultProps = {
                    serverName: "",
                    createServerError: !1,
                    loading: !1
                }, ko.propTypes = {
                    translate: Vn().func.isRequired,
                    privateServerTranslate: Vn().func.isRequired,
                    thumbnail: Vn().node.isRequired,
                    assetName: Vn().string.isRequired,
                    expectedPrice: Vn().number.isRequired,
                    serverName: Vn().string,
                    onAction: Vn().func.isRequired,
                    onServerNameChange: Vn().func.isRequired,
                    createServerError: Vn().bool,
                    loading: Vn().bool,
                    clearForm: Vn().func.isRequired
                }, [(0, u.withTranslations)(ko, Ui), go]), 2))[0],
                Ra = Ra[1];

            function ko(e) {
                var t = e.translate,
                    n = e.privateServerTranslate,
                    r = e.assetName,
                    a = e.expectedPrice,
                    i = e.thumbnail,
                    o = e.serverName,
                    l = e.onAction,
                    u = e.onServerNameChange,
                    s = e.clearForm,
                    c = e.loading,
                    f = n(yo.perMonthText) || "/month",
                    d = (0, D.useMemo)(function() {
                        return 0 !== a ? t(yo.subscribeText) || "Subscribe" : t(yo.buyNowText)
                    }, [a, t]),
                    m = O().createElement("span", {
                        className: "purchase-private-server-modal-footer-text"
                    }, O().createElement(Oi.BalanceAfterSaleText, {
                        expectedPrice: a
                    }), " ", n(yo.createServerFooterDescription) || "This is a subscription-based feature. It will auto-renew once a month until you cancel the subscription."),
                    v = mo((0, D.useState)(!1), 2),
                    p = v[0],
                    h = v[1],
                    g = mo((0, D.useState)(!1), 2),
                    e = g[0],
                    y = g[1],
                    v = mo((0, D.useState)(!1), 2),
                    g = v[0],
                    b = v[1],
                    v = "<a id='redirect-link' href=".concat(Ki(), ">").concat(n(yo.privacySettingsText), "</a>");
                (0, D.useEffect)(function() {
                    S.CurrentUser.isUnder13 && co().then(function(e) {
                        e && y("NoOne" === (null == e ? void 0 : e.privateServerPrivacy))
                    }, function() {})
                }, []), (0, D.useEffect)(function() {
                    fo().then(function(e) {
                        e && b(null == e ? void 0 : e.isPrivateServerPrivacyV2Enabled)
                    }, function() {})
                }, []);
                v = O().createElement("div", {
                    className: "private-server-purchase"
                }, O().createElement("div", {
                    className: "modal-list-item private-server-main-text",
                    dangerouslySetInnerHTML: {
                        __html: n(yo.createPrivateServerPriceText, {
                            target: "".concat((0, Di.renderToString)(O().createElement(Oi.PriceLabel, {
                                price: a
                            }))).concat(0 !== a ? f : "")
                        })
                    }
                }), O().createElement("div", {
                    className: "modal-list-item"
                }, O().createElement("span", {
                    className: "text-label private-server-game-name"
                }, n(yo.gameNameText)), O().createElement("span", {
                    className: "game-name"
                }, r)), O().createElement("div", {
                    className: "modal-list-item private-server-name-input"
                }, O().createElement("span", {
                    className: "text-label"
                }, n(yo.serverNameText)), O().createElement("div", {
                    className: "form-group form-has-feedback"
                }, O().createElement("input", {
                    type: "text",
                    value: o,
                    onChange: u,
                    maxLength: bo,
                    className: "form-control input-field private-server-name",
                    id: "private-server-name-text-box"
                }), 0 < o.length && O().createElement("p", {
                    className: "form-control-label text-secondary"
                }, o.length, "/", bo))), O().createElement("div", {
                    className: "modal-image-container"
                }, i), 0 !== a && O().createElement("p", {
                    className: "rbx-private-server-renewal-disclosure"
                }, n(yo.renewsMonthlyText) || "Renews monthly. Cancel anytime."), g && e && O().createElement("div", null, O().createElement("br", null), O().createElement("div", {
                    className: "private-settings-disclaimer"
                }, O().createElement("span", {
                    className: "private-settings-disclaimer-checkbox"
                }, O().createElement("input", {
                    id: "privacy-settings-disclaimer-checkbox",
                    type: "checkbox",
                    checked: p,
                    onClick: function() {
                        return h(!p)
                    }
                })), O().createElement("b", null, O().createElement("span", {
                    className: "private-servers-disclaimer-text",
                    dangerouslySetInnerHTML: {
                        __html: n(yo.cantJoinPrivacySettingText, {
                            privacySettingsLink: v
                        })
                    }
                })))));
                return O().createElement(ho, {
                    id: "purchase-private-server-modal",
                    title: n(yo.createPrivateServerTitle),
                    body: v,
                    actionButtonText: d,
                    neutralButtonText: t(yo.cancelAction),
                    footerText: m,
                    onAction: l,
                    onNeutral: s,
                    loading: c,
                    actionButtonShow: !0,
                    disableActionButton: 0 === o.length || e && g && !p
                })
            }
            var No = (Ra = Po((0, Oi.createItemPurchase)({
                    customPurchaseVerificationModal: rr,
                    customPurchaseVerificationModalService: Ra
                }), 2))[0],
                Lo = Ra[1],
                Ro = Bn;

            function Ao(e) {
                var t = e.canCreatePrivateServer,
                    n = e.currency,
                    r = e.placeName,
                    i = e.price,
                    a = e.privateServerTranslate,
                    o = e.productId,
                    l = e.refreshServers,
                    u = e.sellerId,
                    s = e.sellerName,
                    c = e.translate,
                    f = e.universeId,
                    d = e.disabled,
                    e = Po((0, D.useState)(""), 2),
                    m = e[0],
                    v = e[1];
                Ro().gameDetailPreopenCreatePrivateServerModal && Lo.start();

                function p() {
                    return v(""), !0
                }
                e = O().createElement(ae.Thumbnail2d, {
                    containerClass: "modal-thumb",
                    format: ae.ThumbnailFormat.jpeg,
                    imgClassName: "original-image",
                    size: ae.DefaultThumbnailSize,
                    targetId: f,
                    type: ae.ThumbnailTypes.gameIcon
                });
                return O().createElement("span", {
                    className: "rbx-private-server-create"
                }, O().createElement(M.Button, {
                    className: "btn-more rbx-private-server-create-button",
                    isDisabled: d || !t,
                    onClick: Lo.start,
                    size: M.Button.sizes.medium,
                    variant: M.Button.variants.secondary
                }, a(Co.createPrivateServerTitle)), O().createElement(No, To({
                    assetName: r,
                    assetType: Oi.ASSET_TYPE_ENUM.PRIVATE_SERVER,
                    customProps: {
                        privateServerTranslate: a,
                        serverName: m,
                        onServerNameChange: function(e) {
                            e = e.target.value;
                            return v(e)
                        },
                        clearForm: p
                    },
                    expectedCurrency: n,
                    expectedPrice: i,
                    expectedSellerId: u,
                    handlePurchase: function(e) {
                        var t = e.handleError,
                            n = e.setLoading,
                            r = e.openConfirmation,
                            a = e.closeAll;
                        n(!0), lo(f, m, i).then(function(e) {
                            e = e.data;
                            n(!1), a();
                            var t = e.vipServerId;
                            r({
                                transactionVerb: Oi.TransactionVerb.Bought,
                                onAccept: function() {
                                    window.location.href = $i(t)
                                },
                                onDecline: function() {
                                    return (0, C.start)(So.PRIVATE_SERVER_LOAD), l({
                                        startTime: performance.now()
                                    }), p(), !0
                                }
                            })
                        }, function(e) {
                            var e = e.data;
                            n(!1), a();
                            e = null !== (e = null === (e = e.errors) || void 0 === e ? void 0 : e[0].userFacingMessage) && void 0 !== e ? e : c(Co.purchaseError);
                            t({
                                errorMsg: e,
                                onDecline: function() {
                                    return (0, C.start)(So.PRIVATE_SERVER_LOAD), l({
                                        startTime: performance.now()
                                    }), !0
                                },
                                showDivId: Oi.errorTypeIds.transactionFailure,
                                title: c(Co.transactionFailedHeading)
                            })
                        })
                    },
                    productId: o,
                    sellerName: s,
                    thumbnail: e
                }, {
                    isPrivateServer: !0
                })), !t && O().createElement("span", {
                    className: "text-footer rbx-private-server-create-disabled-text"
                }, c(Co.maxFreePrivateServersText)))
            }
            Ao.defaultProps = {
                canCreatePrivateServer: !0,
                currency: 1,
                disabled: !1
            }, Ao.propTypes = {
                canCreatePrivateServer: Vn().bool,
                currency: Vn().number,
                placeName: Vn().string.isRequired,
                price: Vn().number.isRequired,
                privateServerTranslate: Vn().func.isRequired,
                productId: Vn().number.isRequired,
                refreshServers: Vn().func.isRequired,
                sellerId: Vn().number.isRequired,
                sellerName: Vn().string.isRequired,
                translate: Vn().func.isRequired,
                universeId: Vn().number.isRequired,
                disabled: Vn().bool
            };
            var Do = (0, u.withTranslations)(Ao, ne);

            function Oo(t, e) {
                var n, r = Object.keys(t);
                return Object.getOwnPropertySymbols && (n = Object.getOwnPropertySymbols(t), e && (n = n.filter(function(e) {
                    return Object.getOwnPropertyDescriptor(t, e).enumerable
                })), r.push.apply(r, n)), r
            }

            function Fo(r) {
                for (var e = 1; e < arguments.length; e++) {
                    var a = null != arguments[e] ? arguments[e] : {};
                    e % 2 ? Oo(Object(a), !0).forEach(function(e) {
                        var t, n;
                        t = r, e = a[n = e], n in t ? Object.defineProperty(t, n, {
                            value: e,
                            enumerable: !0,
                            configurable: !0,
                            writable: !0
                        }) : t[n] = e
                    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(r, Object.getOwnPropertyDescriptors(a)) : Oo(Object(a)).forEach(function(e) {
                        Object.defineProperty(r, e, Object.getOwnPropertyDescriptor(a, e))
                    })
                }
                return r
            }

            function Mo() {
                var e = /\/games\/(\d+)\//g.exec(window.location.pathname);
                return e ? +e[1] : null
            }

            function Uo(e, t, n, r) {
                var a = t.instanceId,
                    i = t.accessCode,
                    o = performance.now();

                function l() {
                    S.EventStream.SendEventWithTarget("playGameClicked", s, Fo({
                        attributionId: Ze(it.GameDetailReferral)
                    }, c), S.EventStream.TargetTypes.WWW)
                }(0, C.start)(So.PRIVATE_SERVER_JOIN);
                var u = S.GameLauncher.isJoinAttemptIdEnabled() ? _.uuidService.generateRandomUuid() : void 0,
                    t = jo().gameDetailUniverseId,
                    s = "".concat(n, "ServerListJoin"),
                    c = {
                        universeId: t,
                        placeId: e,
                        pid: e,
                        joinAttemptId: u
                    };
                if ("computer" === Vo && !qo && !Ho || "tablet" === Vo && Go || qo) return function() {
                    return l(), S.EventStream.SendEventWithTarget("gamePlayIntent", s, Fo({
                        lType: "protocol",
                        refuid: null,
                        pg: "gameDetail"
                    }, c), S.EventStream.TargetTypes.WWW), n === Bo.friend.key ? (xo.sendEvent(So.PRIVATE_SERVER_JOIN, wo.GAME_TAB, performance.now() - o), (0, C.endSuccess)(So.PRIVATE_SERVER_JOIN), void S.GameLauncher.followPlayerIntoGame(r.filter(function(e) {
                        return null !== e.id && e.id !== j.authenticatedUser.id
                    })[0].id, u, s)) : i ? (xo.sendEvent(So.PRIVATE_SERVER_JOIN, wo.GAME_TAB, performance.now() - o), (0, C.endSuccess)(So.PRIVATE_SERVER_JOIN), void S.GameLauncher.joinPrivateGame(e, i, void 0, u, S.GameLauncher.isJoinAttemptIdEnabled() ? s : void 0)) : void(a && (xo.sendEvent(So.PRIVATE_SERVER_JOIN, wo.GAME_TAB, performance.now() - o), (0, C.endSuccess)(So.PRIVATE_SERVER_JOIN), S.GameLauncher.joinGameInstance(e, a, !1, !1, u, S.GameLauncher.isJoinAttemptIdEnabled() ? s : void 0)))
                };
                var f = "",
                    f = Wo ? _.urlService.getUrlWithQueries("/games/start", {
                        placeId: e
                    }) : "robloxmobile://placeID=".concat(e);
                return a && (f += "&gameInstanceId=".concat(a)), i && (f += "&accessCode=".concat(i)), S.GameLauncher.isJoinAttemptIdEnabled() && u && (f += "&joinAttemptId=".concat(u, "&joinAttemptOrigin=").concat(s)),
                    function() {
                        l(), window.location.href = f
                    }
            }
            var Go = j.jsClientDeviceIdentifier.isIE11,
                jo = Bn,
                Bo = Bi,
                Vo = (ne = (0, S.DeviceMeta)()).deviceType,
                qo = ne.isUWPApp,
                Wo = ne.isInApp,
                Ho = ne.isChromeOs;

            function zo(e, t) {
                return function(e) {
                    if (Array.isArray(e)) return e
                }(e) || function(e, t) {
                    if ("undefined" == typeof Symbol || !(Symbol.iterator in Object(e))) return;
                    var n = [],
                        r = !0,
                        a = !1,
                        i = void 0;
                    try {
                        for (var o, l = e[Symbol.iterator](); !(r = (o = l.next()).done) && (n.push(o.value), !t || n.length !== t); r = !0);
                    } catch (e) {
                        a = !0, i = e
                    } finally {
                        try {
                            r || null == l.return || l.return()
                        } finally {
                            if (a) throw i
                        }
                    }
                    return n
                }(e, t) || function(e, t) {
                    if (!e) return;
                    if ("string" == typeof e) return $o(e, t);
                    var n = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === n && e.constructor && (n = e.constructor.name);
                    if ("Map" === n || "Set" === n) return Array.from(e);
                    if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return $o(e, t)
                }(e, t) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }

            function $o(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
                return r
            }
            var Jo = ln;

            function Ko(e) {
                var t = e.translate,
                    n = e.showModal,
                    r = e.closeModal,
                    a = e.expirationDate,
                    i = e.cancelPrivateServer,
                    o = e.systemFeedbackService,
                    l = e.setSubscription,
                    u = zo((0, D.useState)(!1), 2),
                    e = u[0],
                    s = u[1],
                    u = O().createElement("p", null, t(Jo.cancelServerText, {
                        date: a
                    })),
                    a = (0, D.useCallback)(function() {
                        s(!0), i().then(function(e) {
                            e = e.data;
                            l(e), o.success(t(Jo.serverCancellationSuccess) || "Server renewal successfully canceled")
                        }).catch(function(e) {
                            var t = e.data;
                            0 < (null === (e = t.errors) || void 0 === e ? void 0 : e.length) && (e = t.errors[0], o.warning(null !== (t = e.userFacingMessage) && void 0 !== t ? t : e.message))
                        }).finally(function() {
                            s(!1), r(!0)
                        })
                    }, [i, r, l, o, t]);
                return O().createElement(M.SimpleModal, {
                    show: n,
                    title: t(Jo.cancelPrivateServerText),
                    body: u,
                    actionButtonText: t(Jo.confirmCancelText),
                    neutralButtonText: t(Jo.doNotCancelText),
                    onAction: a,
                    onClose: r,
                    onNeutral: r,
                    actionButtonShow: !0,
                    loading: e
                })
            }
            Ko.propTypes = {
                translate: Vn().func.isRequired,
                showModal: Vn().bool.isRequired,
                closeModal: Vn().func.isRequired,
                expirationDate: Vn().string.isRequired,
                cancelPrivateServer: Vn().func.isRequired,
                systemFeedbackService: Vn().shape({
                    success: Vn().func.isRequired,
                    warning: Vn().func.isRequired
                }).isRequired,
                setSubscription: Vn().func.isRequired
            };
            var Yo = (0, u.withTranslations)(Ko, Mi);

            function Qo(e, t) {
                return function(e) {
                    if (Array.isArray(e)) return e
                }(e) || function(e, t) {
                    if ("undefined" == typeof Symbol || !(Symbol.iterator in Object(e))) return;
                    var n = [],
                        r = !0,
                        a = !1,
                        i = void 0;
                    try {
                        for (var o, l = e[Symbol.iterator](); !(r = (o = l.next()).done) && (n.push(o.value), !t || n.length !== t); r = !0);
                    } catch (e) {
                        a = !0, i = e
                    } finally {
                        try {
                            r || null == l.return || l.return()
                        } finally {
                            if (a) throw i
                        }
                    }
                    return n
                }(e, t) || function(e, t) {
                    if (!e) return;
                    if ("string" == typeof e) return Zo(e, t);
                    var n = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === n && e.constructor && (n = e.constructor.name);
                    if ("Map" === n || "Set" === n) return Array.from(e);
                    if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return Zo(e, t)
                }(e, t) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }

            function Zo(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
                return r
            }
            var Xo = ln,
                el = $i;

            function tl(e) {
                var t = e.className,
                    n = e.translate,
                    r = e.gameId,
                    a = e.vipServerId,
                    i = e.isOwner,
                    o = e.canManagePlace,
                    l = e.shutdownServer,
                    u = e.subscription,
                    s = e.setSubscription,
                    c = e.isLoading,
                    f = e.systemFeedbackService,
                    d = Qo((0, D.useState)(!1), 2),
                    e = d[0],
                    m = d[1],
                    d = 0 < a,
                    i = d && i,
                    d = null !== r && (!d && o || i),
                    o = i && u.active;
                return i || d ? O().createElement("div", {
                    className: t
                }, O().createElement(M.Popover, {
                    id: "game-instance-dropdown-menu",
                    button: O().createElement(M.IconButton, {
                        iconName: "more",
                        size: M.IconButton.sizes.small,
                        isDisabled: c
                    }),
                    trigger: "click",
                    placement: "bottom"
                }, O().createElement("ul", {
                    className: "dropdown-menu",
                    role: "menu"
                }, i && O().createElement("li", null, O().createElement(M.Link, {
                    url: el(a),
                    className: "rbx-private-server-configure"
                }, n(Xo.configureServerText))), d && O().createElement("li", null, O().createElement("button", {
                    type: "button",
                    onClick: l,
                    className: "rbx-private-server-shutdown rbx-private-server-shutdown"
                }, n(Xo.shutdownServerText))), o && O().createElement("li", null, O().createElement(M.Button, {
                    className: "rbx-private-server-cancel",
                    onClick: function() {
                        return m(!0)
                    },
                    size: M.Button.sizes.default,
                    width: M.Button.widths.full,
                    variant: M.Button.variants.default,
                    isDisabled: c
                }, n(Xo.cancelText))))), o && O().createElement(Yo, {
                    translate: n,
                    showModal: e,
                    closeModal: function() {
                        return m(!1)
                    },
                    expirationDate: new Date(u.expirationDate).toLocaleString("default", {
                        month: "long",
                        day: "numeric",
                        year: "numeric"
                    }),
                    cancelPrivateServer: function() {
                        return so(a, !1, u.price)
                    },
                    systemFeedbackService: f,
                    setSubscription: s
                })) : O().createElement(D.Fragment, null)
            }
            tl.defaultProps = {
                className: "",
                gameId: null,
                vipServerId: 0,
                isOwner: !1,
                canManagePlace: !1,
                subscription: {}
            }, tl.propTypes = {
                className: Vn().string,
                translate: Vn().func.isRequired,
                gameId: Vn().string,
                vipServerId: Vn().number,
                isOwner: Vn().bool,
                canManagePlace: Vn().bool,
                shutdownServer: Vn().func.isRequired,
                subscription: Vn().shape({
                    active: Vn().bool,
                    expired: Vn().bool,
                    expirationDate: Vn().string,
                    price: Vn().number,
                    canRenew: Vn().bool,
                    hasInsufficientFunds: Vn().bool,
                    hasRecurringProfile: Vn().bool,
                    hasPriceChanged: Vn().bool
                }),
                setSubscription: Vn().func.isRequired,
                isLoading: Vn().bool.isRequired,
                systemFeedbackService: Vn().shape({
                    success: Vn().func.isRequired,
                    warning: Vn().func.isRequired
                }).isRequired
            };
            var nl = tl;

            function rl(e, t) {
                return function(e) {
                    if (Array.isArray(e)) return e
                }(e) || function(e, t) {
                    if ("undefined" == typeof Symbol || !(Symbol.iterator in Object(e))) return;
                    var n = [],
                        r = !0,
                        a = !1,
                        i = void 0;
                    try {
                        for (var o, l = e[Symbol.iterator](); !(r = (o = l.next()).done) && (n.push(o.value), !t || n.length !== t); r = !0);
                    } catch (e) {
                        a = !0, i = e
                    } finally {
                        try {
                            r || null == l.return || l.return()
                        } finally {
                            if (a) throw i
                        }
                    }
                    return n
                }(e, t) || function(e, t) {
                    if (!e) return;
                    if ("string" == typeof e) return al(e, t);
                    var n = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === n && e.constructor && (n = e.constructor.name);
                    if ("Map" === n || "Set" === n) return Array.from(e);
                    if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return al(e, t)
                }(e, t) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }

            function al(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
                return r
            }
            var il = ln;

            function ol(e) {
                var t = e.translate,
                    n = e.placeName,
                    r = e.creatorName,
                    a = e.price,
                    i = e.renewPrivateServer,
                    o = e.isLoading,
                    l = rl((0, D.useState)(!1), 2),
                    u = l[0],
                    s = l[1],
                    e = rl((0, D.useState)(!1), 2),
                    l = e[0],
                    c = e[1],
                    r = O().createElement(D.Fragment, null, O().createElement("p", {
                        className: "renew-server-modal-body-text"
                    }, t(il.confirmEnableFuturePaymentsText, {
                        placeName: n,
                        creatorName: r
                    })), O().createElement("p", {
                        className: "renew-server-modal-body-text",
                        dangerouslySetInnerHTML: {
                            __html: t(il.startRenewingPrivateServerPrice, {
                                price: (0, Di.renderToString)(O().createElement(Oi.PriceLabel, {
                                    price: a
                                }))
                            })
                        }
                    })),
                    f = (0, D.useCallback)(function() {
                        s(!1)
                    }, []),
                    a = (0, D.useCallback)(function() {
                        f(), c(!0), i().finally(function() {
                            c(!1)
                        })
                    }, [i]);
                return O().createElement(D.Fragment, null, O().createElement(M.Button, {
                    className: "rbx-private-server-renew",
                    onClick: function() {
                        return s(!0)
                    },
                    size: M.Button.sizes.extraSmall,
                    width: M.Button.widths.full,
                    variant: M.Button.variants.control,
                    isDisabled: o || l
                }, t(il.renewServerListText)), O().createElement(M.SimpleModal, {
                    show: u,
                    title: t(il.renewPrivateServerTitle),
                    body: r,
                    actionButtonText: t(il.renewServerListText),
                    neutralButtonText: t(il.cancelText),
                    onAction: a,
                    onClose: f,
                    onNeutral: f,
                    actionButtonShow: !0
                }))
            }
            ol.propTypes = {
                translate: Vn().func.isRequired,
                placeName: Vn().string.isRequired,
                creatorName: Vn().string.isRequired,
                price: Vn().number.isRequired,
                renewPrivateServer: Vn().func.isRequired,
                isLoading: Vn().bool.isRequired
            };
            var ll = (0, u.withTranslations)(ol, Mi),
                ul = Bn,
                sl = ln;

            function cl(e) {
                var n = e.translate,
                    t = e.privateServerId,
                    r = e.isPaymentCancelled,
                    a = e.isInsufficientFunds,
                    i = e.isServerInactive,
                    o = e.canRenew,
                    l = e.setSubscription,
                    u = e.isLoading,
                    s = e.systemFeedbackService,
                    c = ul(),
                    f = c.gameDetailPlaceName,
                    d = c.gameDetailPrivateServerPrice,
                    e = c.gameDetailSellerName,
                    c = (0, D.useCallback)(function() {
                        return new Promise(function(e) {
                            so(t, !0, d).then(function(e) {
                                e = e.data;
                                l(e), s.success(n(sl.renewSubscriptionSuccess) || "Successfully renewed private server")
                            }, function(e) {
                                var t = e.data;
                                0 < (null === (e = t.errors) || void 0 === e ? void 0 : e.length) ? (e = t.errors[0], s.warning(null !== (t = e.userFacingMessage) && void 0 !== t ? t : e.message)) : s.warning(n(sl.renewSubscriptionError) || "Unable to renew subscription.")
                            }).finally(function() {
                                e()
                            })
                        })
                    }, [t, d, l, n, s]);
                return O().createElement(D.Fragment, null, r && O().createElement("div", {
                    className: "rbx-private-server-subscription-alert text-alert"
                }, O().createElement("span", {
                    className: "rbx-private-server-subscription-alert-text"
                }, n(sl.renewalCanceledText) || "Renewal Canceled")), a && O().createElement("div", {
                    className: "rbx-private-server-insufficient-funds text-alert"
                }, O().createElement("span", {
                    className: "icon-remove"
                }), n(sl.insufficientFunds)), i && O().createElement("div", {
                    className: "rbx-private-server-inactive"
                }, O().createElement("span", {
                    className: "icon-turn-off"
                }), n(sl.inactiveServerText)), o && O().createElement(ll, {
                    placeName: f,
                    creatorName: e,
                    price: d,
                    renewPrivateServer: c,
                    isLoading: u
                }))
            }
            cl.propTypes = {
                translate: Vn().func.isRequired,
                privateServerId: Vn().number.isRequired,
                isPaymentCancelled: Vn().bool.isRequired,
                isInsufficientFunds: Vn().bool.isRequired,
                isServerInactive: Vn().bool.isRequired,
                canRenew: Vn().bool.isRequired,
                setSubscription: Vn().func.isRequired,
                isLoading: Vn().bool.isRequired,
                systemFeedbackService: Vn().shape({
                    success: Vn().func.isRequired,
                    warning: Vn().func.isRequired
                }).isRequired
            };
            var fl = (0, u.withTranslations)(cl, Fi),
                dl = RobloxBadges,
                ml = a;

            function vl(e) {
                var t = e.ownerUserId,
                    n = e.ownerName,
                    e = e.ownerHasVerifiedBadge;
                return O().createElement("div", {
                    className: "rbx-private-owner"
                }, O().createElement(M.Link, {
                    title: n,
                    url: ml(t),
                    className: "avatar avatar-card-fullbody owner-avatar"
                }, O().createElement(ae.Thumbnail2d, {
                    type: ae.ThumbnailTypes.avatarHeadshot,
                    size: ae.DefaultThumbnailSize,
                    targetId: t,
                    containerClass: "avatar-card-image"
                })), O().createElement(M.Link, {
                    url: ml(t),
                    className: "text-name text-overflow"
                }, O().createElement(dl.VerifiedBadgeStringContainer, {
                    size: dl.BadgeSizes.CAPTIONHEADER,
                    showVerifiedBadge: e,
                    text: n
                })))
            }
            vl.propTypes = {
                ownerUserId: Vn().number.isRequired,
                ownerName: Vn().string.isRequired,
                ownerHasVerifiedBadge: Vn().bool.isRequired
            };
            var pl = vl,
                hl = function() {
                    var e = (0, D.useState)(!1),
                        t = e[0],
                        n = e[1],
                        r = (0, D.useState)(!0),
                        e = r[0],
                        a = r[1];
                    return (0, D.useEffect)(function() {
                        Gt().then(function(e) {
                            n(!0 === e.renameFriendsToConnections)
                        }).catch(function() {
                            n(!1)
                        }).finally(function() {
                            a(!1)
                        })
                    }, []), {
                        renameFriendsToConnections: t,
                        isLoading: e
                    }
                },
                gl = a,
                yl = ln;

            function bl(e) {
                function r(e) {
                    return void 0 === e ? O().createElement(D.Fragment, null) : O().createElement(M.Link, {
                        href: gl(e.id),
                        className: "text-name"
                    }, e.displayName)
                }
                var a = e.translate,
                    t = e.players,
                    e = hl(),
                    i = e.renameFriendsToConnections,
                    o = e.isLoading,
                    l = (0, D.useMemo)(function() {
                        return t.filter(function(e) {
                            return null !== e.id && e.id !== j.authenticatedUser.id
                        })
                    }, [t]),
                    e = (0, D.useMemo)(function() {
                        if (0 === l.length || o) return "";
                        var e = (0, Di.renderToString)(r(l[0]));
                        if (1 === l.length) return a(i ? yl.connectionInServerLabel : yl.friendInServerLabel, {
                            friend: e
                        }) || "".concat(i ? "Connection" : "Friend", " in this server: ").concat(e);
                        var t = (0, Di.renderToString)(r(l[1]));
                        if (2 === l.length) return a(i ? yl.twoConnectionsInServerLabel : yl.twoFriendsInServerLabel, {
                            firstFriend: e,
                            secondFriend: t
                        }) || "".concat(i ? "Connections" : "Friends", " in this server: ").concat(e, " and ").concat(t);
                        var n = l.length - 2;
                        return i ? a(yl.manyConnectionsInServerLabel, {
                            firstFriend: e,
                            secondFriend: t,
                            numOtherFriends: n
                        }) : "".concat(i ? "Connections" : "Friends", " in this server: ").concat(e, ", ").concat(t, ", and ").concat(n, " ").concat(1 == n ? "other" : "others")
                    }, [l, o, i, a]);
                return 0 === l.length ? O().createElement(D.Fragment, null) : O().createElement("div", {
                    className: "text friends-in-server-label",
                    "aria-label": e.replace(/<[^>]*>/g, ""),
                    dangerouslySetInnerHTML: {
                        __html: e
                    }
                })
            }
            bl.propTypes = {
                translate: Vn().func.isRequired,
                players: Vn().arrayOf(Vn().any).isRequired
            };
            var El = bl,
                ne = {
                    disableJoinButtonForFullServers: !1
                },
                Sl = ne = (0, D.createContext)(ne);

            function wl(e, t) {
                return function(e) {
                    if (Array.isArray(e)) return e
                }(e) || function(e, t) {
                    if ("undefined" == typeof Symbol || !(Symbol.iterator in Object(e))) return;
                    var n = [],
                        r = !0,
                        a = !1,
                        i = void 0;
                    try {
                        for (var o, l = e[Symbol.iterator](); !(r = (o = l.next()).done) && (n.push(o.value), !t || n.length !== t); r = !0);
                    } catch (e) {
                        a = !0, i = e
                    } finally {
                        try {
                            r || null == l.return || l.return()
                        } finally {
                            if (a) throw i
                        }
                    }
                    return n
                }(e, t) || function(e, t) {
                    if (!e) return;
                    if ("string" == typeof e) return Il(e, t);
                    var n = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === n && e.constructor && (n = e.constructor.name);
                    if ("Map" === n || "Set" === n) return Array.from(e);
                    if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return Il(e, t)
                }(e, t) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }

            function Il(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
                return r
            }
            var xl = a,
                Tl = ln,
                Pl = ie,
                _l = Bi;

            function Cl(e) {
                var t = e.maxPlayerCount,
                    e = e.currentPlayerCount;
                if (!t) return O().createElement(D.Fragment, null);
                t = Math.round(e / t * 100);
                return O().createElement("div", {
                    className: "server-player-count-gauge border"
                }, O().createElement("div", {
                    className: "gauge-inner-bar border",
                    style: {
                        width: "".concat(t, "%")
                    }
                }))
            }

            function kl(e) {
                e = e.player;
                return O().createElement("span", {
                    key: e.playerToken,
                    className: "avatar avatar-headshot-md player-avatar"
                }, null == e.id ? O().createElement(ae.Thumbnail2d, {
                    type: ae.ThumbnailTypes.avatarHeadshot,
                    token: e.playerToken,
                    containerClass: "avatar-card-image"
                }) : O().createElement(M.Link, {
                    className: "avatar-card-link",
                    href: xl(e.id)
                }, O().createElement(ae.Thumbnail2d, {
                    type: ae.ThumbnailTypes.avatarHeadshot,
                    targetId: e.id,
                    containerClass: "avatar-card-image",
                    altName: e.displayName
                })))
            }

            function Nl(e) {
                var t = e.id,
                    n = e.translate,
                    r = e.cssKey,
                    a = e.serverListType,
                    i = e.placeId,
                    o = e.gameServerStatus,
                    l = e.canManagePlace,
                    u = e.name,
                    s = e.vipServerId,
                    c = e.vipServerSubscription,
                    f = e.accessCode,
                    d = e.showSlowGameMessage,
                    m = e.owner,
                    v = e.players,
                    p = e.onShutdownServerSuccess,
                    h = e.systemFeedbackService,
                    g = e.isLoading,
                    y = e.setIsLoading,
                    b = e.maxPlayers,
                    E = e.currentPlayersCount,
                    S = e.privateServerNewJoinsDisallowed,
                    w = wl((0, D.useState)(c), 2),
                    I = w[0],
                    x = w[1],
                    T = (null == m ? void 0 : m.id) === j.authenticatedUser.id,
                    P = !!s,
                    _ = P && !f,
                    C = (0, D.useContext)(Sl);
                (0, D.useEffect)(function() {
                    x(c)
                }, [c]);
                var k = Pl && 0 < Pl ? null == v ? void 0 : v.slice(0, Pl) : v,
                    N = 0 < s,
                    e = N && T,
                    w = null !== t,
                    N = e || w && (!N && l || e),
                    e = 0 < E - k.length && "+".concat(E - k.length),
                    w = w ? t.substring(9, 18) : "",
                    w = n(Tl.serverIdText, {
                        serverId: w
                    }) || "ID: ".concat(w);
                return O().createElement("li", {
                    className: "rbx-".concat(r, "game-server-item col-md-3 col-sm-4 col-xs-6")
                }, O().createElement("div", {
                    className: "card-item card-item-".concat(r, "server")
                }, O().createElement("div", {
                    className: "player-thumbnails-container"
                }, k.map(function(e) {
                    return O().createElement(kl, {
                        key: e.playerToken,
                        player: e
                    })
                }), !!e && O().createElement("span", {
                    className: "avatar avatar-headshot-md player-avatar hidden-players-placeholder"
                }, e)), O().createElement("div", {
                    className: re()("rbx-".concat(r, "game-server-details"), "game-server-details", {
                        "border-right": a === _l.Vip.key
                    })
                }, (!!u || !!N) && O().createElement("div", {
                    className: "section-header"
                }, u && O().createElement("span", {
                    className: "font-bold"
                }, u), O().createElement(nl, {
                    className: "link-menu rbx-".concat(r, "game-server-menu"),
                    translate: n,
                    placeId: i,
                    gameId: t,
                    vipServerId: s,
                    isOwner: T,
                    canManagePlace: l,
                    shutdownServer: function() {
                        g && h.warning(n(Tl.shutdownServerError)), y(!0), oo(i, t, s).then(function() {
                            h.success(n(Tl.shutdownServerSuccess)), p()
                        }, function() {
                            h.warning(n(Tl.shutdownServerError))
                        }).finally(function() {
                            y(!1)
                        })
                    },
                    subscription: I,
                    setSubscription: x,
                    isLoading: g,
                    systemFeedbackService: h
                })), P && O().createElement(pl, {
                    ownerUserId: m.id,
                    ownerName: m.displayName,
                    ownerHasVerifiedBadge: m.hasVerifiedBadge
                }), O().createElement("div", {
                    className: "text-info rbx-game-status rbx-".concat(r, "game-server-status text-overflow")
                }, o), O().createElement(Cl, {
                    maxPlayerCount: b,
                    currentPlayerCount: E
                }), a === _l.friend.key && O().createElement(El, {
                    translate: n,
                    players: v
                }), d && O().createElement("div", {
                    className: "rbx-".concat(r, "game-server-alert")
                }, O().createElement("span", {
                    className: "icon-remove"
                }), n(Tl.slowGameWarning)), P && O().createElement(fl, {
                    privateServerId: s,
                    isPaymentCancelled: !(null != I && I.active) && 0 < (null == I ? void 0 : I.price),
                    isInsufficientFunds: null == I ? void 0 : I.hasInsufficientFunds,
                    isServerInactive: _,
                    canRenew: (null == I ? void 0 : I.canRenew) && !(null != I && I.active),
                    setSubscription: x,
                    isLoading: g,
                    systemFeedbackService: h
                }), !_ && !(null != I && I.isExpired) && O().createElement("span", {
                    "data-placeid": i
                }, O().createElement(M.Button, {
                    className: "btn-full-width btn-control-xs rbx-".concat(r, "game-server-join game-server-join-btn"),
                    onClick: S && 0 === E ? function() {
                        h.warning(n(Tl.atCapacityError))
                    } : Uo(i, {
                        instanceId: t,
                        accessCode: f
                    }, a, v),
                    isDisabled: g || C.disableJoinButtonForFullServers && b <= E
                }, n(Tl.joinServerText))), a === _l.public.key && O().createElement("div", {
                    className: "server-id-text text-info xsmall"
                }, w))))
            }
            Nl.defaultProps = {
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
            }, Nl.propTypes = {
                id: Vn().string,
                translate: Vn().func.isRequired,
                cssKey: Vn().string,
                serverListType: Vn().string.isRequired,
                placeId: Vn().number.isRequired,
                name: Vn().string,
                vipServerId: Vn().number,
                maxPlayers: Vn().number,
                currentPlayersCount: Vn().number,
                vipServerSubscription: {
                    canRenew: Vn().bool.isRequired,
                    active: Vn().bool.isRequired,
                    hasInsufficientFunds: Vn().bool.isRequired,
                    price: Vn().number.isRequired,
                    expired: Vn().bool.isRequired
                },
                accessCode: Vn().string,
                gameServerStatus: Vn().string.isRequired,
                canManagePlace: Vn().bool,
                showSlowGameMessage: Vn().bool,
                owner: {
                    id: Vn().number.isRequired,
                    name: Vn().string.isRequired,
                    displayName: Vn().string.isRequired,
                    hasVerifiedBadge: Vn().bool.isRequired
                },
                players: Vn().arrayOf(Vn().any),
                onShutdownServerSuccess: Vn().func.isRequired,
                isLoading: Vn().bool.isRequired,
                setIsLoading: Vn().func.isRequired,
                systemFeedbackService: Vn().shape({
                    success: Vn().func.isRequired,
                    warning: Vn().func.isRequired
                }).isRequired,
                privateServerNewJoinsDisallowed: Vn().bool
            };
            var Ll = Nl,
                Rl = function() {
                    return (Rl = Object.assign || function(e) {
                        for (var t, n = 1, r = arguments.length; n < r; n++)
                            for (var a in t = arguments[n]) Object.prototype.hasOwnProperty.call(t, a) && (e[a] = t[a]);
                        return e
                    }).apply(this, arguments)
                },
                Al = ln,
                Dl = Vi,
                Ol = (0, u.withTranslations)(function(e) {
                    var t = e.translate,
                        n = e.options,
                        r = e.setOptions,
                        e = void 0 !== (e = e.isLoading) && e;
                    return O().createElement("div", {
                        className: "server-list-options"
                    }, O().createElement("div", {
                        className: "select-group"
                    }, O().createElement("label", {
                        className: "select-label text-label",
                        htmlFor: "sort-select"
                    }, t(Al.numberOfPlayers) || "Number of Players"), O().createElement("div", {
                        className: "rbx-select-group select-group"
                    }, O().createElement("select", {
                        onChange: function(t) {
                            S.EventStream.SendEventWithTarget("serverListOptionsInteraction", "sortSelect", {
                                pid: Mo(),
                                sort: t.currentTarget.value
                            }, S.EventStream.TargetTypes.WWW), r(function(e) {
                                return Rl(Rl({}, e), {
                                    sortOrder: t.currentTarget.value
                                })
                            })
                        },
                        onFocus: function() {
                            S.EventStream.SendEventWithTarget("serverListOptionsInteraction", "sortDropdown", {
                                pid: Mo()
                            }, S.EventStream.TargetTypes.WWW)
                        },
                        disabled: e,
                        value: n.sortOrder,
                        id: "sort-select",
                        "data-testid": "sort-select",
                        className: "input-field rbx-select select-option"
                    }, O().createElement("option", {
                        value: Dl.descending
                    }, t(Al.descending) || "Descending"), O().createElement("option", {
                        value: Dl.ascending
                    }, t(Al.ascending) || "Ascending")), O().createElement("span", {
                        className: "icon-arrow icon-down-16x16"
                    }))), O().createElement("div", {
                        className: "checkbox"
                    }, O().createElement("input", {
                        onChange: function(t) {
                            S.EventStream.SendEventWithTarget("serverListOptionsInteraction", "filterSelect", {
                                pid: Mo(),
                                checked: t.currentTarget.checked
                            }, S.EventStream.TargetTypes.WWW), r(function(e) {
                                return Rl(Rl({}, e), {
                                    excludeFullGames: t.currentTarget.checked
                                })
                            })
                        },
                        disabled: e,
                        type: "checkbox",
                        id: "filter-checkbox",
                        "data-testid": "filter-checkbox",
                        checked: n.excludeFullGames
                    }), O().createElement("label", {
                        className: "checkbox-label text-label",
                        htmlFor: "filter-checkbox"
                    }, t(Al.hideFullServers) || "Hide Full Servers")))
                }, Fi);

            function Fl() {
                return (Fl = Object.assign || function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n, r = arguments[t];
                        for (n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n])
                    }
                    return e
                }).apply(this, arguments)
            }

            function Ml(e, t) {
                return function(e) {
                    if (Array.isArray(e)) return e
                }(e) || function(e, t) {
                    if ("undefined" == typeof Symbol || !(Symbol.iterator in Object(e))) return;
                    var n = [],
                        r = !0,
                        a = !1,
                        i = void 0;
                    try {
                        for (var o, l = e[Symbol.iterator](); !(r = (o = l.next()).done) && (n.push(o.value), !t || n.length !== t); r = !0);
                    } catch (e) {
                        a = !0, i = e
                    } finally {
                        try {
                            r || null == l.return || l.return()
                        } finally {
                            if (a) throw i
                        }
                    }
                    return n
                }(e, t) || function(e, t) {
                    if (!e) return;
                    if ("string" == typeof e) return Ul(e, t);
                    var n = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === n && e.constructor && (n = e.constructor.name);
                    if ("Map" === n || "Set" === n) return Array.from(e);
                    if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return Ul(e, t)
                }(e, t) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }

            function Ul(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
                return r
            }
            var Gl = (Vi = Ml((0, M.createSystemFeedback)(), 2))[0],
                jl = Vi[1],
                Bl = Gi,
                Vl = ln,
                ql = ji,
                Wl = qi,
                Hl = Bi;

            function zl(e) {
                var t = e.gameInstances,
                    f = e.handleGameInstanceShutdownAtIndex,
                    n = e.headerTitle,
                    d = e.isLoading,
                    r = e.loadMoreGameInstances,
                    a = e.loadingError,
                    m = e.placeId,
                    i = e.refreshGameInstances,
                    v = e.setIsLoading,
                    o = e.showLoadMoreButton,
                    p = e.translate,
                    h = e.type,
                    g = e.userCanManagePlace,
                    y = e.privateServerNewJoinsDisallowed,
                    b = "".concat(h, "-"),
                    l = 0 === t.length,
                    u = "rbx-".concat(b, "running-games-footer"),
                    s = "rbx-".concat(b, "running-games"),
                    c = "card-list rbx-".concat(b, "game-server-item-container"),
                    E = "rbx-".concat(b, "game-server-item-container"),
                    S = (0, D.useMemo)(function() {
                        var e = t.length % ql;
                        return 0 < e && o ? t.slice(0, -1 * e) : t
                    }, [t, o]),
                    e = Ml((0, D.useState)(Wl), 2),
                    w = e[0],
                    e = e[1];
                return (0, D.useEffect)(function() {
                    null != i && i(w)
                }, [w]), O().createElement(D.Fragment, null, O().createElement(Gl, null), O().createElement("div", {
                    id: s,
                    className: "stack server-list-section",
                    "data-placeid": m,
                    "data-showshutdown": !0
                }, n && O().createElement("div", {
                    className: "container-header"
                }, O().createElement("div", {
                    className: "server-list-container-header"
                }, O().createElement("h2", {
                    className: "server-list-header"
                }, n), O().createElement(M.Button, {
                    className: "btn-more rbx-refresh refresh-link-icon",
                    isDisabled: d,
                    onClick: function() {
                        return i(w)
                    },
                    size: M.Button.sizes.extraSmall,
                    variant: M.Button.variants.control
                }, p(Vl.privateServerRefreshText) || "Refresh")), h === Hl.public.key && O().createElement(Ol, {
                    isLoading: d,
                    options: w,
                    setOptions: e,
                    translate: p
                })), l ? O().createElement("div", {
                    className: "section-content-off empty-game-instances-container"
                }, d ? O().createElement(M.Loading, null) : O().createElement("p", {
                    className: "no-servers-message"
                }, a ? p(Vl.loadServersError) || "Unable to load servers." : p(Vl.noServersFoundText))) : O().createElement(D.Fragment, null, O().createElement("ul", {
                    id: E,
                    className: c
                }, S.map(function(e, t) {
                    var n = e.accessCode,
                        r = e.id,
                        a = e.maxPlayers,
                        i = e.name,
                        o = e.owner,
                        l = e.pfs,
                        u = e.players,
                        s = e.playing,
                        c = e.vipServerId,
                        e = e.vipServerSubscription;
                    return O().createElement(Ll, Fl({
                        key: c
                    }, {
                        accessCode: n,
                        canManagePlace: g,
                        cssKey: b,
                        currentPlayersCount: s || u.length,
                        gameServerStatus: p(Vl.playerCountText, {
                            currentPlayers: s || u.length,
                            maximumAllowedPlayers: a
                        }),
                        id: r,
                        isLoading: d,
                        maxPlayers: a,
                        name: i,
                        onShutdownServerSuccess: function() {
                            f(t)
                        },
                        owner: o,
                        placeId: m,
                        players: u,
                        serverListType: h,
                        setIsLoading: v,
                        showSlowGameMessage: l < Bl,
                        systemFeedbackService: jl,
                        translate: p,
                        vipServerId: c,
                        vipServerSubscription: e,
                        privateServerNewJoinsDisallowed: y
                    }))
                })), O().createElement("div", {
                    className: u
                }, o && O().createElement(M.Button, {
                    className: "rbx-running-games-load-more",
                    isDisabled: d,
                    onClick: function() {
                        return r(w)
                    },
                    type: "button",
                    variant: M.Button.variants.control,
                    width: M.Button.widths.full
                }, p(Vl.loadMoreButtonText))))))
            }
            zl.defaultProps = {
                showLoadMoreButton: !1,
                loadMoreButtonText: "",
                headerTitle: "",
                gameInstances: [],
                privateServerNewJoinsDisallowed: !1
            }, zl.propTypes = {
                translate: Vn().func.isRequired,
                type: Vn().string.isRequired,
                placeId: Vn().number.isRequired,
                headerTitle: Vn().string,
                loadMoreGameInstances: Vn().func.isRequired,
                showLoadMoreButton: Vn().bool,
                loadMoreButtonText: Vn().string,
                gameInstances: Vn().arrayOf(Vn().any),
                refreshGameInstances: Vn().func.isRequired,
                handleGameInstanceShutdownAtIndex: Vn().func.isRequired,
                userCanManagePlace: Vn().bool.isRequired,
                isLoading: Vn().bool.isRequired,
                setIsLoading: Vn().func.isRequired,
                loadingError: Vn().bool.isRequired,
                privateServerNewJoinsDisallowed: Vn().bool
            };
            var $l = (0, u.withTranslations)(zl, Fi),
                Jl = (Fi = {
                    gameDetailTabs: Fi = {
                        about: "tab-about",
                        store: "tab-store",
                        servers: "tab-game-instances"
                    },
                    gameDetailHashesToTabs: {
                        "#!/about": Fi.about,
                        "#!/store": Fi.store,
                        "#!/game-instances": Fi.servers
                    }
                }).gameDetailTabs;

            function Kl(e, t) {
                return function(e) {
                    if (Array.isArray(e)) return e
                }(e) || function(e, t) {
                    if ("undefined" == typeof Symbol || !(Symbol.iterator in Object(e))) return;
                    var n = [],
                        r = !0,
                        a = !1,
                        i = void 0;
                    try {
                        for (var o, l = e[Symbol.iterator](); !(r = (o = l.next()).done) && (n.push(o.value), !t || n.length !== t); r = !0);
                    } catch (e) {
                        a = !0, i = e
                    } finally {
                        try {
                            r || null == l.return || l.return()
                        } finally {
                            if (a) throw i
                        }
                    }
                    return n
                }(e, t) || function(e, t) {
                    if (!e) return;
                    if ("string" == typeof e) return Yl(e, t);
                    var n = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === n && e.constructor && (n = e.constructor.name);
                    if ("Map" === n || "Set" === n) return Array.from(e);
                    if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return Yl(e, t)
                }(e, t) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }

            function Yl(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
                return r
            }

            function Ql() {
                if (!eu()) return null;
                var e = Xl[window.location.hash];
                return e || Zl.about
            }
            var Zl = Fi.gameDetailTabs,
                Xl = Fi.gameDetailHashesToTabs,
                eu = function() {
                    var t = document.getElementById("horizontal-tabs");
                    if (t) {
                        var e = Object.values(Jl);
                        try {
                            e.forEach(function(e) {
                                if (!t.querySelector("#".concat(e))) throw new Error("Unable to find horizontal tab with id ".concat(e))
                            })
                        } catch (e) {
                            return console.log(e.message), !1
                        }
                        return !0
                    }
                    return !1
                },
                tu = function() {
                    function e() {
                        r(Ql())
                    }
                    var t = Kl((0, D.useState)(Ql()), 2),
                        n = t[0],
                        r = t[1];
                    return (0, D.useEffect)(function() {
                        return window.addEventListener("hashchange", e),
                            function() {
                                window.removeEventListener("hashchange", e)
                            }
                    }, []), n
                };

            function nu(e, t, n, r, a, i, o) {
                try {
                    var l = e[i](o),
                        u = l.value
                } catch (e) {
                    return void n(e)
                }
                l.done ? t(u) : Promise.resolve(u).then(r, a)
            }

            function ru(l) {
                return function() {
                    var e = this,
                        o = arguments;
                    return new Promise(function(t, n) {
                        var r = l.apply(e, o);

                        function a(e) {
                            nu(r, t, n, a, i, "next", e)
                        }

                        function i(e) {
                            nu(r, t, n, a, i, "throw", e)
                        }
                        a(void 0)
                    })
                }
            }

            function au(e, t) {
                return function(e) {
                    if (Array.isArray(e)) return e
                }(e) || function(e, t) {
                    if ("undefined" == typeof Symbol || !(Symbol.iterator in Object(e))) return;
                    var n = [],
                        r = !0,
                        a = !1,
                        i = void 0;
                    try {
                        for (var o, l = e[Symbol.iterator](); !(r = (o = l.next()).done) && (n.push(o.value), !t || n.length !== t); r = !0);
                    } catch (e) {
                        a = !0, i = e
                    } finally {
                        try {
                            r || null == l.return || l.return()
                        } finally {
                            if (a) throw i
                        }
                    }
                    return n
                }(e, t) || function(e, t) {
                    if (!e) return;
                    if ("string" == typeof e) return iu(e, t);
                    var n = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === n && e.constructor && (n = e.constructor.name);
                    if ("Map" === n || "Set" === n) return Array.from(e);
                    if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return iu(e, t)
                }(e, t) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }

            function iu(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
                return r
            }

            function ou(e) {
                return JSON.parse(JSON.stringify(e))
            }
            var lu = Bn,
                uu = function(l) {
                    var u = 1 < arguments.length && void 0 !== arguments[1] && arguments[1],
                        e = (g = lu()).gameDetailCanCreateServer,
                        s = g.gameDetailPlaceId,
                        t = g.gameDetailPlaceName,
                        n = g.gameDetailPrivateServerPrice,
                        r = g.gameDetailPrivateServerProductId,
                        a = g.gameDetailSellerId,
                        i = g.gameDetailSellerName,
                        o = g.gameDetailUniverseId,
                        c = g.gameDetailUserCanManagePlace,
                        f = (T = au((0, D.useState)(!1), 2))[0],
                        d = T[1],
                        m = (P = au((0, D.useState)(!1), 2))[0],
                        v = P[1],
                        p = (S = au((0, D.useState)([]), 2))[0],
                        h = S[1],
                        g = (x = au((0, D.useState)(null), 2))[0],
                        y = x[1],
                        b = (T = au((0, D.useState)(""), 2))[0],
                        E = T[1],
                        S = (P = au((0, D.useState)(!1), 2))[0],
                        w = P[1],
                        I = (0, D.useCallback)(ru(regeneratorRuntime.mark(function e() {
                            var t, n, r, a, i, o = arguments;
                            return regeneratorRuntime.wrap(function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        if (t = 0 < o.length && void 0 !== o[0] ? o[0] : {}, n = 1 < o.length && void 0 !== o[1] && o[1], f) throw Error("Cannot load more servers while a request is in flight");
                                        e.next = 4;
                                        break;
                                    case 4:
                                        return d(!0), v(!1), e.prev = 6, e.next = 9, l(s, n ? "" : b, t);
                                    case 9:
                                        return a = e.sent, i = a.data, r = i.data, a = i.nextPageCursor, i = i.gameJoinRestricted, y(i), e.next = 17, Promise.all(r.map(function() {
                                            var t = ru(regeneratorRuntime.mark(function e(t) {
                                                var n, r, a, i;
                                                return regeneratorRuntime.wrap(function(e) {
                                                    for (;;) switch (e.prev = e.next) {
                                                        case 0:
                                                            if (void 0 === t.players && (t.players = []), n = t.players, r = t.playerTokens, a = {}, n.forEach(function(e) {
                                                                    a[e.playerToken] = e
                                                                }), r.forEach(function(e) {
                                                                    null == a[e] && n.push({
                                                                        id: null,
                                                                        name: null,
                                                                        playerToken: e,
                                                                        displayName: null
                                                                    })
                                                                }), u && t.vipServerId && (null === (r = t.owner) || void 0 === r ? void 0 : r.id) === j.authenticatedUser.id) return i = t.vipServerId, e.prev = 7, e.next = 10, uo(i);
                                                            e.next = 17;
                                                            break;
                                                        case 10:
                                                            i = e.sent, i = i.data, t.vipServerSubscription = i.subscription, e.next = 17;
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
                                                return t.apply(this, arguments)
                                            }
                                        }()));
                                    case 17:
                                        h(n ? r : function(e, t) {
                                            var n = ou(e),
                                                r = {};
                                            return n.forEach(function(e) {
                                                void 0 !== e.id && (r[e.id] = e)
                                            }), t.forEach(function(e) {
                                                var t = r[e.id];
                                                t ? Object.assign(t, e) : n.push(e)
                                            }), n
                                        }(p, r)), E(a), w(!0), e.next = 27;
                                        break;
                                    case 22:
                                        e.prev = 22, e.t0 = e.catch(6), h([]), E(""), v(!0);
                                    case 27:
                                        return e.prev = 27, t.startTime && (i = performance.now() - t.startTime, (0, C.endSuccess)(So.PRIVATE_SERVER_LOAD), xo.sendEvent(So.PRIVATE_SERVER_LOAD, wo.GAME_TAB, i)), d(!1), e.finish(27);
                                    case 31:
                                    case "end":
                                        return e.stop()
                                }
                            }, e, null, [
                                [6, 22, 27, 31]
                            ])
                        })), [f, s, b, p, l, u]),
                        x = (0, D.useCallback)(function(e) {
                            if (f) throw Error("Cannot remove server from list while a request is in flight");
                            var t = ou(p);
                            t.splice(e, 1), h(t)
                        }, [f, p]),
                        T = (0, D.useCallback)(function(e) {
                            if (f) throw Error("Cannot clear server while a request is in flight");
                            var t = ou(p),
                                e = t[e];
                            e.playerTokens = [], e.players = [], e.playing = 0, e.id = null, h(t)
                        }, [f, p]),
                        P = (0, D.useCallback)(function() {
                            var e = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : {};
                            if (f) throw Error("Cannot refresh server list while a request is in flight");
                            I(e, !0)
                        }, [f, I]);
                    return {
                        metaData: {
                            universeId: o,
                            placeId: s,
                            placeName: t,
                            canCreateServer: e,
                            price: n,
                            userCanManagePlace: c,
                            sellerId: a,
                            sellerName: i,
                            privateServerProductId: r
                        },
                        servers: p,
                        loadMoreServers: I,
                        removeServerAtIndex: x,
                        clearServerAtIndex: T,
                        refreshServers: P,
                        hasNext: !!b,
                        isBusy: f,
                        setIsBusy: d,
                        hasError: m,
                        isReady: S,
                        joinRestricted: g
                    }
                };

            function su() {
                return (su = Object.assign || function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n, r = arguments[t];
                        for (n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n])
                    }
                    return e
                }).apply(this, arguments)
            }

            function cu(e, t) {
                return function(e) {
                    if (Array.isArray(e)) return e
                }(e) || function(e, t) {
                    if ("undefined" == typeof Symbol || !(Symbol.iterator in Object(e))) return;
                    var n = [],
                        r = !0,
                        a = !1,
                        i = void 0;
                    try {
                        for (var o, l = e[Symbol.iterator](); !(r = (o = l.next()).done) && (n.push(o.value), !t || n.length !== t); r = !0);
                    } catch (e) {
                        a = !0, i = e
                    } finally {
                        try {
                            r || null == l.return || l.return()
                        } finally {
                            if (a) throw i
                        }
                    }
                    return n
                }(e, t) || function(e, t) {
                    if (!e) return;
                    if ("string" == typeof e) return fu(e, t);
                    var n = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === n && e.constructor && (n = e.constructor.name);
                    if ("Map" === n || "Set" === n) return Array.from(e);
                    if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return fu(e, t)
                }(e, t) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }

            function fu(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
                return r
            }
            var du = Fi.gameDetailTabs,
                mu = ln,
                vu = Bi;

            function pu(e) {
                var t = e.translate,
                    n = e.showServers,
                    r = e.intl,
                    a = uu(io, n, !1),
                    i = a.clearServerAtIndex,
                    o = a.hasError,
                    l = a.hasNext,
                    u = a.isBusy,
                    s = a.loadMoreServers,
                    c = a.metaData,
                    f = c.canCreateServer,
                    d = c.placeId,
                    m = c.placeName,
                    v = c.price,
                    p = c.privateServerProductId,
                    h = c.sellerId,
                    g = c.sellerName,
                    y = c.universeId,
                    b = c.userCanManagePlace,
                    E = a.refreshServers,
                    S = a.servers,
                    w = a.setIsBusy,
                    I = a.isReady,
                    x = a.joinRestricted,
                    T = hl(),
                    P = T.renameFriendsToConnections,
                    e = T.isLoading,
                    _ = null !== (c = tu()) && void 0 !== c ? c : du.servers,
                    a = cu((0, D.useState)(!0), 2),
                    C = a[0],
                    k = a[1];
                (0, D.useEffect)(function() {
                    _ !== du.servers ? k(!0) : k(!1)
                }, [_]), (0, D.useEffect)(function() {
                    _ === du.servers && n && C && E(qi)
                }, [_, C, n]);
                var N, c = (T = S, N = jo().gameDetailPrivateServerLimit, T.forEach(function(e) {
                        e.owner.id === j.authenticatedUser.id && --N
                    }), 0 < N),
                    a = 0 !== p,
                    T = '<a class="text-link" href="#!/game-instances">'.concat(t(mu.serversText), "</a>"),
                    r = '<a class="text-link" href="'.concat(Ji(r.getRobloxLocale()), '">').concat(t(mu.privateServerHeader), "</a>");
                return O().createElement("div", {
                    id: "rbx-private-servers",
                    className: "stack"
                }, O().createElement("div", {
                    className: "container-header"
                }, O().createElement("h2", null, t(mu.privateServerHeader)), n && a && O().createElement(M.Button, {
                    className: "btn-more rbx-refresh refresh-link-icon",
                    isDisabled: u,
                    onClick: function() {
                        return E()
                    },
                    size: M.Button.sizes.extraSmall,
                    variant: M.Button.variants.control
                }, t(mu.privateServerRefreshText)), O().createElement(M.Tooltip, {
                    content: e ? "" : t(P ? mu.privateServerTooltipConnections : mu.privateServerTooltip),
                    id: "private-server-tooltip",
                    placement: "bottom"
                }, O().createElement("span", {
                    className: "icon-moreinfo"
                }))), a ? O().createElement(D.Fragment, null, O().createElement("div", {
                    className: "create-server-banner section-content remove-panel"
                }, O().createElement("div", {
                    className: "create-server-banner-text text"
                }, f && O().createElement("span", {
                    className: "private-server-price",
                    dangerouslySetInnerHTML: {
                        __html: t(mu.privateServerPrice, {
                            price: (0, Di.renderToString)(O().createElement(Oi.PriceLabel, {
                                price: v
                            }))
                        })
                    }
                }), O().createElement("span", {
                    className: "play-with-others-text"
                }, e ? "" : t(P ? mu.privateServerPlayWithConnections : mu.privateServerPlayWithOthers), O().createElement("br", null), !n && O().createElement("span", {
                    dangerouslySetInnerHTML: {
                        __html: t(mu.seeAllPrivateServersText, {
                            serversLink: T
                        })
                    }
                }))), f && O().createElement(Do, su({
                    privateServerTranslate: t,
                    refreshServers: E,
                    disabled: !I
                }, {
                    placeName: m,
                    universeId: y,
                    price: v,
                    canCreatePrivateServer: c,
                    sellerId: h,
                    sellerName: g,
                    productId: p
                }))), O().createElement("div", {
                    className: "section tab-server-only"
                }, n && O().createElement($l, {
                    gameInstances: S,
                    handleGameInstanceShutdownAtIndex: i,
                    isLoading: u,
                    loadMoreGameInstances: s,
                    loadingError: o,
                    placeId: d,
                    setIsLoading: w,
                    showLoadMoreButton: l,
                    type: vu.Vip.key,
                    userCanManagePlace: b,
                    privateServerNewJoinsDisallowed: null != x && x
                }))) : O().createElement("div", {
                    className: "section-content-off",
                    dangerouslySetInnerHTML: {
                        __html: t(mu.privateServersNotSupported, {
                            vipServersLink: r
                        })
                    }
                }))
            }

            function hu(e) {
                e = pt.requestRefundClick({
                    placeId: e
                }), k.eventStreamService.sendEvent.apply(k.eventStreamService, e)
            }

            function gu(e) {
                var t = (i = e.policyData).policyText,
                    n = i.learnMoreBaseUrl,
                    r = i.locale,
                    a = i.articleId,
                    e = f.linkStartDelimiter,
                    i = f.linkEndDelimiter,
                    o = _.urlService.getHelpDeskUrl(r, a, n),
                    i = new RegExp(e + "|" + i),
                    i = t.split(i);
                return O().createElement("p", null, i.map(function(e, t) {
                    return 1 === t ? O().createElement(M.Link, {
                        cssClasses: "text-link",
                        url: o
                    }, e) : e
                }))
            }

            function yu(e) {
                var t = e.gameDetails,
                    n = e.translate,
                    r = t.refundLink,
                    e = t.refundPolicy,
                    a = t.rootPlaceId;
                return O().createElement("div", {
                    className: "experience-refund-container"
                }, O().createElement("div", {
                    className: "container-header"
                }, O().createElement("h2", null, n(p.HeadingRefund))), O().createElement("div", {
                    className: "experience-refund-content"
                }, !!e && O().createElement(gu, {
                    policyData: e
                }), r && O().createElement("div", {
                    className: "experience-refund-button"
                }, O().createElement(M.Link, {
                    url: r
                }, O().createElement(M.Button, {
                    variant: "secondary",
                    onClick: function() {
                        a ? hu(a) : (0, C.fireEvent)(w.requestRefundError)
                    }
                }, O().createElement("span", null, n(p.ActionRequestRefund)))))))
            }

            function bu(e) {
                var t = e.noticeType,
                    e = e.translate;
                return t === wt.InExperiencePurchase ? O().createElement("div", {
                    className: "experience-notice-container"
                }, O().createElement("div", {
                    className: "container-header"
                }, O().createElement("h2", null, e(p.HeadingNotice))), O().createElement("div", null, e(p.InExperiencePurchase))) : ((0, C.fireEvent)(Wt.UnknownNoticeType), O().createElement(O().Fragment, null))
            }

            function Eu(e) {
                return e = e.translate, O().createElement("div", {
                    className: "game-description-container"
                }, O().createElement("div", {
                    className: "container-header"
                }, O().createElement("h2", null, e(p.HeadingDescription))), O().createElement("div", {
                    className: "text game-description game-description-error"
                }, e(p.LabelContentFailedToLoad)))
            }
            pu.defaultProps = {
                showServers: !0
            }, pu.propTypes = {
                intl: Vn().shape({
                    getRobloxLocale: Vn().func.isRequired
                }).isRequired,
                showServers: Vn().bool,
                translate: Vn().func.isRequired
            };
            var Su, wu = (0, u.withTranslations)(pu, Mi),
                Iu = S.SocialLinksJumbotron.SocialLinkJumbotronType,
                xu = Lt,
                Tu = Nt,
                Pu = (0, u.withTranslations)(function(e) {
                    var t = e.attributionId,
                        n = e.referralSessionInfo,
                        r = e.referralPage,
                        a = e.translate,
                        i = De() || {},
                        o = i.universeId,
                        l = void 0 === o ? "" : o,
                        u = i.placeId,
                        s = void 0 === u ? "" : u,
                        c = X(l),
                        f = c.gameDetails,
                        d = c.hasError,
                        e = (0, D.useState)(!1),
                        o = e[0],
                        m = e[1],
                        i = (0, D.useState)(!1),
                        u = i[0],
                        v = i[1],
                        c = jt(),
                        e = c.experienceDetailsNoticeType,
                        i = c.shouldShowLikeFavoriteCounts,
                        c = c.isFetchingPolicy;
                    return (0, D.useEffect)(function() {
                        Mt(xu.gameDetailsExposure, Tu.gameDetailsExposure).then(function(e) {
                            m(!!e.IsEventsSectionUprankEnabled), v(!!e.IsEventsSectionRedesignEnabled)
                        }).catch(function() {
                            m(Tu.gameDetailsExposure.IsEventsSectionUprankEnabled), v(Tu.gameDetailsExposure.IsEventsSectionRedesignEnabled)
                        })
                    }, []), O().createElement("div", {
                        className: "game-about-tab-container"
                    }, !d && o && O().createElement(Ai, {
                        universeId: l,
                        gameDetails: f,
                        isEventsSectionRedesignEnabled: u,
                        attributionId: t,
                        referralSessionInfo: n,
                        referralPage: r
                    }), d ? O().createElement(Eu, {
                        translate: a
                    }) : O().createElement(wn, {
                        universeId: l,
                        placeId: s,
                        gameDetails: f,
                        shouldShowLikeFavoriteCounts: i,
                        isFetchingPolicy: c,
                        translate: a
                    }), void 0 !== e && "" !== e && O().createElement(bu, {
                        noticeType: e,
                        translate: a
                    }), O().createElement(S.SocialLinksJumbotron, {
                        type: Iu.Game,
                        targetId: l
                    }), O().createElement(wu, {
                        showServers: !1,
                        translate: void 0,
                        intl: void 0
                    }), O().createElement(S.GameBadgesList, {
                        universeId: l
                    }), !d && !o && O().createElement(Ai, {
                        universeId: l,
                        gameDetails: f,
                        isEventsSectionRedesignEnabled: u,
                        attributionId: t,
                        referralSessionInfo: n,
                        referralPage: r
                    }), O().createElement("div", {
                        className: "container-list games-detail"
                    }, O().createElement(oa, null)), (null == f ? void 0 : f.refundPolicy) && O().createElement(yu, {
                        gameDetails: f,
                        translate: a
                    }))
                }, e),
                _u = "game-details-play-button-container",
                Cu = function() {
                    return document.getElementById(_u)
                },
                ku = "game-details-about-tab-container",
                Nu = function() {
                    return document.getElementById(ku)
                },
                Nt = S.EnvironmentUrls.apiGatewayUrl;
            (e = Su = Su || {})[e.Undefined = 0] = "Undefined", e[e.Upvote = 1] = "Upvote", e[e.Downvote = 2] = "Downvote";
            var Lu, Ru, Au, Du, Ou, Fu, Mu, Uu, Gu, ju = Nt + "/player-generated-reviews-service/v1/channels/experience-discovery-page/assets";

            function Bu(e) {
                return (Bu = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                    return typeof e
                } : function(e) {
                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                })(e)
            }

            function Vu(e, t) {
                var n = $(e),
                    t = "/games/votingservice/" + t;
                if (0 === (null == n ? void 0 : n.length)) throw new Error("VotingPanelService.loadVotingService: Root node not found");
                $.ajax({
                    url: t,
                    success: function(e) {
                        n.replaceWith(e), $(function() {
                            var e, t, n;
                            0 !== (null == (n = $(".voting-panel")) ? void 0 : n.length) && ($(".users-vote .upvote").unbind().click(function() {
                                Au($(this), !0)
                            }), $(".users-vote .downvote").unbind().click(function() {
                                Au($(this), !1)
                            }), e = parseInt(n.data("total-up-votes")), t = parseInt(n.data("total-down-votes")), Lu || ((n = n).data("total-up-votes", ""), n.data("total-down-votes", "")), Mu(e, t))
                        })
                    }
                })
            }

            function qu(e) {
                switch (e) {
                    case Su.Upvote:
                        return "Upvote";
                    case Su.Downvote:
                        return "Downvote";
                    default:
                        return null
                }
            }

            function Wu(e, t, n) {
                n && qu(n) ? k.eventStreamService.sendEventWithTarget(e, "GamePlayerFeedback", {
                    placeId: t,
                    category_type: null !== (n = qu(n)) && void 0 !== n ? n : ""
                }) : k.eventStreamService.sendEventWithTarget(e, "GamePlayerFeedback", {
                    placeId: t
                })
            }

            function Hu(e) {
                var r = e.voteType,
                    a = e.hideModal,
                    i = e.hideBannerUntilReload,
                    o = e.showSuccessMessage,
                    t = e.channelInformation,
                    n = e.placeName,
                    l = e.placeId,
                    u = e.translate,
                    s = t.data.comment.maximum_length,
                    c = t.data.comment.minimum_length,
                    f = Ku.tosUrl,
                    d = (0, D.useState)(u(R, {
                        count: c
                    })),
                    m = d[0],
                    v = d[1],
                    p = (x = (0, D.useState)(""))[0],
                    h = x[1],
                    g = (T = (0, D.useState)(""))[0],
                    y = T[1],
                    b = (0, D.useMemo)(function() {
                        return t.data.categories.find(function(e) {
                            return e.type === qu(r)
                        })
                    }, [t, r]),
                    E = (0, D.useMemo)(function() {
                        var e = t.data.metadata.disclaimer_label;
                        return e = (e = e.replace("<u>", '<a target="_blank" href="' + f + '" class="text-link">')).replace("</u>", "</a>")
                    }, [t, f]),
                    S = (0, D.useMemo)(function() {
                        var e = {
                            id: l,
                            RedirectUrl: encodeURIComponent(k.entityUrl.game.getRelativePath(l) + "/" + _.seoName.formatSeoName(n))
                        };
                        return _.urlService.getUrlWithQueries("/abusereport/asset", e)
                    }, [l, n]),
                    w = (e = (0, D.useState)(S))[0],
                    I = e[1];
                (0, D.useEffect)(function() {
                    tt(l, n).then(function(e) {
                        I(e)
                    }).catch(function() {
                        I(S)
                    })
                }, [l, n]), d = (0, D.useMemo)(function() {
                    var e = u(A);
                    return e = (e = e.replace("<u>", '<a target="_blank" href="' + w + '" class="text-link">')).replace("</u>", "</a>")
                }, [u, w]), (0, D.useEffect)(function() {
                    Wu("playerFeedbackFormModalMounted", l, r)
                }, [l, r]);
                var x = (0, D.useCallback)(function() {
                        Wu("dismissPlayerFeedbackFormModal", l, r), a()
                    }, [a, l, r]),
                    T = (0, D.useCallback)(function(e) {
                        e.target.value.length > s ? v(u(L, {
                            count: s
                        })) : e.target.value.length < c ? v(u(R, {
                            count: c
                        })) : v(""), y(e.target.value)
                    }, [s, c, u]),
                    P = (0, D.useCallback)(function() {
                        return Yu(void 0, void 0, void 0, function() {
                            var t, n;
                            return Qu(this, function(e) {
                                switch (e.label) {
                                    case 0:
                                        Wu("clickPlayerFeedbackFormModalSubmit", l, r), e.label = 1;
                                    case 1:
                                        return e.trys.push([1, 3, , 4]), [4, function(e, t, n) {
                                            e = {
                                                withCredentials: !0,
                                                url: ju + "/" + e + "/reviews"
                                            }, t = {
                                                comment: n,
                                                category_type: t,
                                                category_option_ids: []
                                            };
                                            return _.httpService.post(e, t)
                                        }(l, r, g)];
                                    case 2:
                                        return e.sent(), h(""), a(), i(), o(u(G)), [3, 4];
                                    case 3:
                                        return t = e.sent(), (t = t) && null !== (n = t.data) && void 0 !== n && n.message ? h(t.data.message + ": " + t.data.detail) : h(u(N)), [3, 4];
                                    case 4:
                                        return [2]
                                }
                            })
                        })
                    }, [i, a, l, g, u, r, o]),
                    e = (0, D.useMemo)(function() {
                        return O().createElement("span", null, O().createElement("button", {
                            type: "button",
                            onClick: P,
                            disabled: "" !== m,
                            className: "btn-growth-md player-feedback-button-container"
                        }, t.data.metadata.submit_button_label))
                    }, [P, m, t.data.metadata.submit_button_label]);
                return O().createElement(M.Modal, {
                    show: !0,
                    size: "md",
                    backdrop: "static"
                }, O().createElement(M.Modal.Header, {
                    title: t.data.metadata.form_title_label,
                    onClose: x
                }), O().createElement("div", {
                    className: "player-feedback-modal-body"
                }, O().createElement("div", null, null == b ? void 0 : b.label), O().createElement("textarea", {
                    className: "player-feedback-text-box",
                    id: "playerFeedbackTextArea",
                    placeholder: t.data.comment.placeholder_text,
                    onChange: T,
                    onFocus: function() {
                        Wu("focusPlayerFeedbackFormModalComment", l, r)
                    }
                }), p && O().createElement("div", {
                    className: "text-error"
                }, p), m ? O().createElement(M.Tooltip, {
                    containerClassName: "player-feedback-button-container",
                    id: "playerFeedbackTooltip",
                    content: m,
                    placement: "bottom"
                }, e) : O().createElement(D.Fragment, null, e), O().createElement("div", {
                    className: "font-caption-body",
                    dangerouslySetInnerHTML: {
                        __html: E
                    }
                }), r === Su.Downvote && O().createElement("div", {
                    className: "font-caption-body",
                    dangerouslySetInnerHTML: {
                        __html: d
                    }
                })))
            }
            var zu = (Lu = !1, Ru = function() {}, Au = function(e, t) {
                    var n, r;
                    $(".voting-panel").data("user-authenticated") ? (n = "/voting/vote?assetId=" + $(".voting-panel").data("target-id") + "&vote=", (r = $(".voting-panel").data("vote-url")) && (n = r), e.hasClass("selected") || e.find("i").hasClass("selected") || e.find(".icon-like, .icon-dislike").hasClass("selected") ? (Du(n, null), Ru(!1)) : (Du(n, t), Ru(!0, t ? Su.Upvote : Su.Downvote))) : Gu("GuestUser")
                }, Du = function(e, t) {
                    $(".voting-panel .loading").show(), $.ajax({
                        type: "POST",
                        url: e + t,
                        success: Ou,
                        error: Fu
                    })
                }, Ou = function(e) {
                    var t, n, r, a = $(".icon-like").length;
                    $(".voting-panel .loading").hide(), (e = function e(t) {
                        var n, r, a, i = new Object;
                        for (n in t) t.hasOwnProperty(n) && (r = n.charAt(0).toLowerCase() + n.slice(1), null !== (a = t[n]) && "object" === Bu(a) && (a = e(a)), i[r] = a);
                        return i
                    }(e)).success ? (Uu(e.model.upVotes, e.model.downVotes), t = $(".voting-panel .upvote"), n = $(".voting-panel .downvote"), r = $(".users-vote"), a && (t = $(".voting-panel .upvote .icon-like"), n = $(".voting-panel .downvote .icon-dislike")), null !== e.model.userVote ? r.hasClass("has-voted") || r.addClass("has-voted") : r.removeClass("has-voted"), t.hasClass("selected") && t.removeClass("selected"), n.hasClass("selected") && n.removeClass("selected"), null !== e.model.userVote && (e.model.userVote ? t : n).addClass("selected"), Mu(e.model.upVotes, e.model.downVotes)) : Gu(e.modalType)
                }, Fu = function() {
                    $(".voting-panel .loading").hide()
                }, Mu = function(e, t, n) {
                    var r, n = n || $("#voting-section");
                    isNaN(e) || isNaN(t) || (100 < (r = 0 === e ? 0 : 0 === t ? 100 : Math.floor(e / (e + t) * 100)) && (r = 100), n = (e = n.find(".vote-container")).find(".vote-background"), e.find(".vote-percentage").css("width", r + "%"), 0 < t ? n.addClass("has-votes") : n.removeClass("has-votes")), Lu || (r = r, $(".voting-panel .total-upvotes-text").text(r + "%"), $(".voting-panel .total-downvotes-text").text(""), $(".voting-panel #vote-up-text").text(r + "%"), $(".voting-panel #vote-down-text").text(""))
                }, Uu = function(e, t) {
                    e = Roblox.NumberFormatting.abbreviatedFormat(e), t = Roblox.NumberFormatting.abbreviatedFormat(t), Lu && ($(".voting-panel .total-upvotes-text").text(e), $(".voting-panel .total-downvotes-text").text(t), $(".voting-panel #vote-up-text").text(e), $(".voting-panel #vote-down-text").text(t)), Mu(e, t)
                }, Gu = function(e) {
                    var t, n, r, a, i, o;
                    e && Roblox.Dialog.open((t = e, n = Roblox.Lang.VotingPanelResources, r = Roblox.Intl && n && new Roblox.Intl, a = $("#voting-section"), i = a.data("accountPageUrl"), o = a.data("registerUrl"), e = "<a href='" + i + "'>" + n["Label.AccountPageTitle"] + "</a>", a = "<a href='" + o + "'>" + n["Label.LoginOrRegisterPageTitle"] + "</a>", (n = {
                        EmailIsVerified: {
                            titleText: n["Label.EmailVerifiedTitle"],
                            bodyContent: r.f(n["Label.EmailVerifiedMessage"], {
                                accountPageLink: e
                            }),
                            onAccept: function() {
                                window.location.href = i
                            },
                            acceptColor: Roblox.Dialog.green,
                            acceptText: n["Label.Accept"],
                            declineText: n["Label.Decline"],
                            allowHtmlContentInBody: !0
                        },
                        PlayGame: {
                            titleText: n["Label.PlayGameTitle"],
                            bodyContent: n["Label.PlayGameMessage"],
                            showAccept: !1,
                            declineText: n["Label.Ok"]
                        },
                        UseModel: {
                            titleText: n["Label.UseModelTitle"],
                            bodyContent: n["Label.UseModelMessage"],
                            showAccept: !1,
                            declineText: n["Label.Ok"]
                        },
                        InstallPlugin: {
                            titleText: n["Label.InstallPluginTitle"],
                            bodyContent: n["Label.InstallPluginMessage"],
                            showAccept: !1,
                            declineText: n["Label.Ok"]
                        },
                        BuyGamePass: {
                            titleText: n["Label.BuyGamePassTitle"],
                            bodyContent: n["Label.BuyGamePassMessage"],
                            showAccept: !1,
                            declineText: n["Label.Ok"]
                        },
                        FloodCheckThresholdMet: {
                            titleText: n["Label.FloodCheckTitle"],
                            bodyContent: n["Label.FloodCheckMessage"],
                            showAccept: !1,
                            declineText: n["Label.Ok"]
                        },
                        GuestUser: {
                            titleText: n["Label.GuestUserTitle"],
                            bodyContent: "<div>" + n["Label.YouMustLoginToVote"] + "</div><div>" + r.f(n["Label.GuestUserMessage"], {
                                loginOrRegisterPageLink: a
                            }) + "</div>",
                            onAccept: function() {
                                window.location.href = o
                            },
                            acceptColor: Roblox.Dialog.green,
                            acceptText: n["Label.Login"],
                            declineText: n["Label.Decline"],
                            allowHtmlContentInBody: !0
                        },
                        Error: {
                            titleText: n["Label.UnknownProblemTitle"],
                            bodyContent: n["Label.UnknownProblemMessage"],
                            showAccept: !1,
                            declineText: n["Label.Ok"]
                        },
                        AssetNotVoteable: {
                            titleText: n["Label.AssetNotVoteableTitle"],
                            bodyContent: n["Label.AssetNotVoteableMessage"],
                            showAccept: !1,
                            declineText: n["Label.Ok"]
                        }
                    })[t] || n.Error))
                }, {
                    checkPolicyAndLoad: function(e, t, n) {
                        var r = 2 < arguments.length && void 0 !== n ? n : function(e) {};
                        S.Guac.callBehaviour("app-policy").then(function(e) {
                            Lu = null !== (e = null == e ? void 0 : e.EnableAggregateLikesFavoritesCount) && void 0 !== e && e
                        }).catch(function() {
                            (0, C.fireEvent)("VotingPanelPolicyLoadFailure"), Lu = !1
                        }).finally(function() {
                            Vu(e, t), Ru = r
                        })
                    }
                }),
                $u = function() {
                    var n = {};
                    Object.values(ot).forEach(function(e) {
                        var t = Be(e);
                        t && (n[e] = t)
                    });
                    var e, t = Be("page");
                    return t && (e = t, Object.values(Qe).includes(e)) ? {
                        referralSessionInfo: n,
                        referralPage: t
                    } : {
                        referralSessionInfo: n,
                        referralPage: void 0
                    }
                },
                Ju = "game-details-feedback-banner-container",
                Nt = S.EnvironmentUrls.websiteUrl + "/info/terms",
                Ku = {
                    gameDetailsPlayerFeedbackBannerContainerId: Ju,
                    gameDetailsPlayerFeedbackBannerContainer: function() {
                        return document.getElementById(Ju)
                    },
                    tosUrl: Nt
                },
                Yu = function(e, o, l, u) {
                    return new(l = l || Promise)(function(n, t) {
                        function r(e) {
                            try {
                                i(u.next(e))
                            } catch (e) {
                                t(e)
                            }
                        }

                        function a(e) {
                            try {
                                i(u.throw(e))
                            } catch (e) {
                                t(e)
                            }
                        }

                        function i(e) {
                            var t;
                            e.done ? n(e.value) : ((t = e.value) instanceof l ? t : new l(function(e) {
                                e(t)
                            })).then(r, a)
                        }
                        i((u = u.apply(e, o || [])).next())
                    })
                },
                Qu = function(n, r) {
                    var a, i, o, l = {
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
                                if (a) throw new TypeError("Generator is already executing.");
                                for (; l;) try {
                                    if (a = 1, i && (o = 2 & t[0] ? i.return : t[0] ? i.throw || ((o = i.return) && o.call(i), 0) : i.next) && !(o = o.call(i, t[1])).done) return o;
                                    switch (i = 0, o && (t = [2 & t[0], o.value]), t[0]) {
                                        case 0:
                                        case 1:
                                            o = t;
                                            break;
                                        case 4:
                                            return l.label++, {
                                                value: t[1],
                                                done: !1
                                            };
                                        case 5:
                                            l.label++, i = t[1], t = [0];
                                            continue;
                                        case 7:
                                            t = l.ops.pop(), l.trys.pop();
                                            continue;
                                        default:
                                            if (!(o = 0 < (o = l.trys).length && o[o.length - 1]) && (6 === t[0] || 2 === t[0])) {
                                                l = 0;
                                                continue
                                            }
                                            if (3 === t[0] && (!o || t[1] > o[0] && t[1] < o[3])) {
                                                l.label = t[1];
                                                break
                                            }
                                            if (6 === t[0] && l.label < o[1]) {
                                                l.label = o[1], o = t;
                                                break
                                            }
                                            if (o && l.label < o[2]) {
                                                l.label = o[2], l.ops.push(t);
                                                break
                                            }
                                            o[2] && l.ops.pop(), l.trys.pop();
                                            continue
                                    }
                                    t = r.call(n, l)
                                } catch (e) {
                                    t = [6, e], i = 0
                                } finally {
                                    a = o = 0
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
                Zu = (0, u.withTranslations)(function(e) {
                    var t = e.show,
                        n = e.voteType,
                        r = e.placeName,
                        a = e.placeId,
                        i = e.showSuccessMessage,
                        o = e.translate,
                        l = (0, D.useState)(!1),
                        u = l[0],
                        s = l[1],
                        c = (0, D.useState)(!1),
                        f = c[0],
                        d = c[1],
                        m = (0, D.useState)(null),
                        v = m[0],
                        p = m[1],
                        e = (0, D.useState)(!1),
                        l = e[0],
                        h = e[1],
                        c = (0, D.useState)(t),
                        m = c[0],
                        g = c[1];
                    (0, D.useEffect)(function() {
                        (function(e) {
                            e = {
                                withCredentials: !0,
                                url: ju + "/" + e
                            };
                            return _.httpService.get(e)
                        })(a).then(function(e) {
                            p(e), e.data.capabilities.can_submit_comment && s(!0)
                        }).catch()
                    }, [a]), (0, D.useEffect)(function() {
                        g(t)
                    }, [t, n]), (0, D.useEffect)(function() {
                        Wu("playerFeedbackPromptMounted", a)
                    }, [a]);
                    e = (0, D.useCallback)(function() {
                        h(!0), Wu("clickPlayerFeedbackPromptCta", a)
                    }, [a]), c = (0, D.useCallback)(function() {
                        g(!1), Wu("dismissPlayerFeedbackPrompt", a)
                    }, [a]);
                    return m && u && v && n && !f ? O().createElement("div", {
                        className: "message-banner player-feedback-banner"
                    }, O().createElement("div", {
                        className: "player-feedback-banner-title"
                    }, o(I)), O().createElement("button", {
                        type: "button",
                        className: "btn-secondary-md",
                        onClick: e
                    }, o(b)), O().createElement("button", {
                        type: "button",
                        className: "btn-generic-close-md close-button",
                        "aria-label": o(y),
                        onClick: c
                    }, O().createElement("span", {
                        className: "icon-close"
                    })), l && O().createElement(Hu, {
                        voteType: n,
                        hideModal: function() {
                            h(!1), g(!1)
                        },
                        hideBannerUntilReload: function() {
                            d(!0)
                        },
                        showSuccessMessage: i,
                        channelInformation: v,
                        placeName: r,
                        placeId: a,
                        translate: o
                    })) : null
                }, r),
                Xu = function() {
                    return (Xu = Object.assign || function(e) {
                        for (var t, n = 1, r = arguments.length; n < r; n++)
                            for (var a in t = arguments[n]) Object.prototype.hasOwnProperty.call(t, a) && (e[a] = t[a]);
                        return e
                    }).apply(this, arguments)
                },
                es = (0, u.withTranslations)(function(e) {
                    var t = Qa("ExperienceDetailsPage.PlayerFeedback").data,
                        n = (0, M.createSystemFeedback)(),
                        r = n[0],
                        a = n[1],
                        n = (0, D.useCallback)(function(e) {
                            return a.success(e)
                        }, [a]);
                    return null != t && t.EnablePlayerFeedbackWebMvp ? O().createElement(D.Fragment, null, O().createElement("div", {
                        className: "player-feedback-alert-container"
                    }, O().createElement(r, null)), O().createElement(Zu, Xu({}, e, {
                        showSuccessMessage: n
                    }))) : null
                }, r);
            (0, _.ready)(function() {
                var e = $u(),
                    t = e.referralSessionInfo,
                    n = e.referralPage,
                    e = Ye(qe.GameDetailReferral);
                if (se() && (i = void 0 === (i = (o = De()).universeId) ? "" : i, o = void 0 === (o = o.placeId) ? "" : o, (0, l.render)(O().createElement(Re, {
                        universeId: i,
                        placeId: o,
                        delay: fe.delay
                    }), se())), Cu() && (0, l.render)(O().createElement(c.QueryClientProvider, {
                        client: u.queryClient
                    }, O().createElement(Jt, {
                        attributionId: e
                    })), Cu()), Nu() && (0, l.render)(O().createElement(c.QueryClientProvider, {
                        client: u.queryClient
                    }, O().createElement(Pu, {
                        attributionId: e,
                        referralSessionInfo: t,
                        referralPage: n
                    })), Nu()), document.getElementById("voting-panel-container")) {
                    var r = De().rootPlaceId,
                        a = void 0 === r ? "" : r;
                    try {
                        zu.checkPolicyAndLoad("#voting-panel-container", a, function(e, t) {
                            ! function(e, t) {
                                if (Ku.gameDetailsPlayerFeedbackBannerContainer()) {
                                    var n = De(),
                                        r = n.placeName,
                                        a = void 0 === r ? "" : r,
                                        n = n.placeId,
                                        i = void 0 === n ? "" : n;
                                    try {
                                        (0, l.render)(O().createElement(es, {
                                            voteType: t,
                                            show: e,
                                            placeName: a,
                                            placeId: i
                                        }), Ku.gameDetailsPlayerFeedbackBannerContainer())
                                    } catch (e) {}
                                }
                            }(e, t)
                        })
                    } catch (e) {
                        (0, C.fireEvent)(w.votingPanelLoadFailure)
                    }
                }
                var i, o, e = De(),
                    t = e.experienceInviteLinkId,
                    n = void 0 === t ? "" : t,
                    r = e.experienceInviteStatus,
                    t = void 0 === r ? "" : r;
                n && (t === S.ShareLinks.ExperienceInviteStatus.INVITER_NOT_IN_EXPERIENCE || t === S.ShareLinks.ExperienceInviteStatus.EXPIRED) && P() && (i = void 0 === (r = (e = De()).universeId) ? "" : r, o = void 0 === (e = e.placeId) ? "" : e, (0, l.render)(O().createElement(c.QueryClientProvider, {
                    client: u.queryClient
                }, O().createElement(ee, {
                    linkId: n,
                    linkStatus: t,
                    placeId: o,
                    universeId: i
                })), P()))
            })
        }()
}();
//# sourceMappingURL=https://sourcemaps.rbxcdn.com/d14e06bf660acc043aaa3609538af75a-gameDetails.bundle.min.js.map

/* Bundle detector */
window.Roblox && window.Roblox.BundleDetector && window.Roblox.BundleDetector.bundleDetected("GameDetails");