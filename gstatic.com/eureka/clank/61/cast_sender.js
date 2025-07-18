(function() {
	'use strict';
	var e, aa = "function" == typeof Object.create ? Object.create : function(a) {
			var b = function() {};
			b.prototype = a;
			return new b
		},
		ba;
	if ("function" == typeof Object.setPrototypeOf) ba = Object.setPrototypeOf;
	else {
		var ca;
		a: {
			var da = {
					Db: !0
				},
				ea = {};
			try {
				ea.__proto__ = da;
				ca = ea.Db;
				break a
			} catch (a) {}
			ca = !1
		}
		ba = ca ? function(a, b) {
			a.__proto__ = b;
			if (a.__proto__ !== b) throw new TypeError(a + " is not extensible");
			return a
		} : null
	}
	var fa = ba,
		ha = "function" == typeof Object.defineProperties ? Object.defineProperty : function(a, b, c) {
			a != Array.prototype && a != Object.prototype && (a[b] = c.value)
		},
		h = "undefined" != typeof window && window === this ? this : "undefined" != typeof global && null != global ? global : this,
		ia = function() {
			ia = function() {};
			h.Symbol || (h.Symbol = ja)
		},
		ja = function() {
			var a = 0;
			return function(b) {
				return "jscomp_symbol_" + (b || "") + a++
			}
		}(),
		la = function() {
			ia();
			var a = h.Symbol.iterator;
			a || (a = h.Symbol.iterator = h.Symbol("iterator"));
			"function" != typeof Array.prototype[a] &&
				ha(Array.prototype, a, {
					configurable: !0,
					writable: !0,
					value: function() {
						return ka(this)
					}
				});
			la = function() {}
		},
		ka = function(a) {
			var b = 0;
			return ma(function() {
				return b < a.length ? {
					done: !1,
					value: a[b++]
				} : {
					done: !0
				}
			})
		},
		ma = function(a) {
			la();
			a = {
				next: a
			};
			a[h.Symbol.iterator] = function() {
				return this
			};
			return a
		},
		na = function(a) {
			la();
			var b = a[Symbol.iterator];
			return b ? b.call(a) : ka(a)
		},
		l = this,
		m = function(a) {
			return "string" == typeof a
		},
		oa = function() {},
		qa = function(a) {
			var b = typeof a;
			if ("object" == b)
				if (a) {
					if (a instanceof Array) return "array";
					if (a instanceof Object) return b;
					var c = Object.prototype.toString.call(a);
					if ("[object Window]" == c) return "object";
					if ("[object Array]" == c || "number" == typeof a.length && "undefined" != typeof a.splice && "undefined" != typeof a.propertyIsEnumerable && !a.propertyIsEnumerable("splice")) return "array";
					if ("[object Function]" == c || "undefined" != typeof a.call && "undefined" != typeof a.propertyIsEnumerable && !a.propertyIsEnumerable("call")) return "function"
				} else return "null";
			else if ("function" == b && "undefined" == typeof a.call) return "object";
			return b
		},
		ra = function(a) {
			var b = qa(a);
			return "array" == b || "object" == b && "number" == typeof a.length
		},
		sa = "closure_uid_" + (1E9 * Math.random() >>> 0),
		ta = 0,
		ua = function(a, b, c) {
			return a.call.apply(a.bind, arguments)
		},
		va = function(a, b, c) {
			if (!a) throw Error();
			if (2 < arguments.length) {
				var d = Array.prototype.slice.call(arguments, 2);
				return function() {
					var c = Array.prototype.slice.call(arguments);
					Array.prototype.unshift.apply(c, d);
					return a.apply(b, c)
				}
			}
			return function() {
				return a.apply(b, arguments)
			}
		},
		p = function(a, b, c) {
			Function.prototype.bind &&
				-1 != Function.prototype.bind.toString().indexOf("native code") ? p = ua : p = va;
			return p.apply(null, arguments)
		},
		q = function(a, b) {
			a = a.split(".");
			var c = l;
			a[0] in c || !c.execScript || c.execScript("var " + a[0]);
			for (var d; a.length && (d = a.shift());) a.length || void 0 === b ? c[d] && c[d] !== Object.prototype[d] ? c = c[d] : c = c[d] = {} : c[d] = b
		};
	var chrome = chrome || window.chrome || {};
	chrome.cast = chrome.cast || {};
	chrome.cast.media = chrome.cast.media || {};
	chrome.cast.VERSION = [1, 2];
	q("chrome.cast.VERSION", chrome.cast.VERSION);
	chrome.cast.nc = !0;
	q("chrome.cast.usingPresentationApi", chrome.cast.nc);
	chrome.cast.Error = function(a, b, c) {
		this.code = a;
		this.description = b || null;
		this.details = c || null
	};
	q("chrome.cast.Error", chrome.cast.Error);
	chrome.cast.pb = function(a) {
		this.platform = a;
		this.packageId = this.url = null
	};
	q("chrome.cast.SenderApplication", chrome.cast.pb);
	chrome.cast.Image = function(a) {
		this.url = a;
		this.width = this.height = null
	};
	q("chrome.cast.Image", chrome.cast.Image);
	chrome.cast.Volume = function(a, b) {
		this.level = void 0 !== a ? a : null;
		this.muted = void 0 !== b ? b : null
	};
	q("chrome.cast.Volume", chrome.cast.Volume);
	var wa = String.prototype.trim ? function(a) {
			return a.trim()
		} : function(a) {
			return a.replace(/^[\s\xa0]+|[\s\xa0]+$/g, "")
		},
		xa = /&/g,
		ya = /</g,
		za = />/g,
		Aa = /"/g,
		Ba = /'/g,
		Ca = /\x00/g,
		Da = /[\x00&<>"']/,
		Fa = function(a) {
			var b = {
				"&amp;": "&",
				"&lt;": "<",
				"&gt;": ">",
				"&quot;": '"'
			};
			var c = l.document.createElement("div");
			return a.replace(Ea, function(a, f) {
				var d = b[a];
				if (d) return d;
				"#" == f.charAt(0) && (f = Number("0" + f.substr(1)), isNaN(f) || (d = String.fromCharCode(f)));
				d || (c.innerHTML = a + " ", d = c.firstChild.nodeValue.slice(0, -1));
				return b[a] =
					d
			})
		},
		Ga = function(a) {
			return a.replace(/&([^;]+);/g, function(a, c) {
				switch (c) {
					case "amp":
						return "&";
					case "lt":
						return "<";
					case "gt":
						return ">";
					case "quot":
						return '"';
					default:
						return "#" != c.charAt(0) || (c = Number("0" + c.substr(1)), isNaN(c)) ? a : String.fromCharCode(c)
				}
			})
		},
		Ea = /&([^;\s<&]+);?/g,
		Ha = function(a, b) {
			return a < b ? -1 : a > b ? 1 : 0
		};
	chrome.cast.ha = {
		CUSTOM_CONTROLLER_SCOPED: "custom_controller_scoped",
		TAB_AND_ORIGIN_SCOPED: "tab_and_origin_scoped",
		ORIGIN_SCOPED: "origin_scoped",
		PAGE_SCOPED: "page_scoped"
	};
	q("chrome.cast.AutoJoinPolicy", chrome.cast.ha);
	chrome.cast.ja = {
		CREATE_SESSION: "create_session",
		CAST_THIS_TAB: "cast_this_tab"
	};
	q("chrome.cast.DefaultActionPolicy", chrome.cast.ja);
	chrome.cast.U = {
		VIDEO_OUT: "video_out",
		AUDIO_OUT: "audio_out",
		VIDEO_IN: "video_in",
		AUDIO_IN: "audio_in",
		MULTIZONE_GROUP: "multizone_group"
	};
	q("chrome.cast.Capability", chrome.cast.U);
	chrome.cast.v = {
		CANCEL: "cancel",
		TIMEOUT: "timeout",
		API_NOT_INITIALIZED: "api_not_initialized",
		INVALID_PARAMETER: "invalid_parameter",
		EXTENSION_NOT_COMPATIBLE: "extension_not_compatible",
		EXTENSION_MISSING: "extension_missing",
		RECEIVER_UNAVAILABLE: "receiver_unavailable",
		SESSION_ERROR: "session_error",
		CHANNEL_ERROR: "channel_error",
		LOAD_MEDIA_FAILED: "load_media_failed"
	};
	q("chrome.cast.ErrorCode", chrome.cast.v);
	chrome.cast.M = {
		AVAILABLE: "available",
		UNAVAILABLE: "unavailable"
	};
	q("chrome.cast.ReceiverAvailability", chrome.cast.M);
	chrome.cast.qb = {
		CHROME: "chrome",
		IOS: "ios",
		ANDROID: "android"
	};
	q("chrome.cast.SenderPlatform", chrome.cast.qb);
	chrome.cast.sa = {
		CAST: "cast",
		DIAL: "dial",
		HANGOUT: "hangout",
		CUSTOM: "custom"
	};
	q("chrome.cast.ReceiverType", chrome.cast.sa);
	chrome.cast.Ra = {
		RUNNING: "running",
		STOPPED: "stopped",
		ERROR: "error"
	};
	q("chrome.cast.DialAppState", chrome.cast.Ra);
	chrome.cast.lb = {
		CAST: "cast",
		STOP: "stop"
	};
	q("chrome.cast.ReceiverAction", chrome.cast.lb);
	chrome.cast.G = {
		CONNECTED: "connected",
		DISCONNECTED: "disconnected",
		STOPPED: "stopped"
	};
	q("chrome.cast.SessionStatus", chrome.cast.G);
	chrome.cast.Bb = {
		ATTENUATION: "attenuation",
		FIXED: "fixed",
		MASTER: "master"
	};
	q("chrome.cast.VolumeControlType", chrome.cast.Bb);
	chrome.cast.Na = function(a, b, c, d, f) {
		this.sessionRequest = a;
		this.sessionListener = b;
		this.receiverListener = c;
		this.autoJoinPolicy = d || chrome.cast.ha.TAB_AND_ORIGIN_SCOPED;
		this.defaultActionPolicy = f || chrome.cast.ja.CREATE_SESSION;
		this.customDialLaunchCallback = null;
		this.invisibleSender = !1;
		this.additionalSessionRequests = []
	};
	q("chrome.cast.ApiConfig", chrome.cast.Na);
	chrome.cast.Ua = function(a, b) {
		this.appName = a;
		this.launchParameter = b || null
	};
	q("chrome.cast.DialRequest", chrome.cast.Ua);
	chrome.cast.Sa = function(a, b, c) {
		this.receiver = a;
		this.appState = b;
		this.extraData = c || null
	};
	q("chrome.cast.DialLaunchData", chrome.cast.Sa);
	chrome.cast.Ta = function(a, b) {
		this.doLaunch = a;
		this.launchParameter = b || null
	};
	q("chrome.cast.DialLaunchResponse", chrome.cast.Ta);
	chrome.cast.rb = function(a, b, c) {
		this.appId = a;
		this.capabilities = "array" == qa(b) ? b : [chrome.cast.U.VIDEO_OUT, chrome.cast.U.AUDIO_OUT];
		this.requestSessionTimeout = c || chrome.cast.timeout.requestSession;
		this.dialRequest = this.language = null
	};
	q("chrome.cast.SessionRequest", chrome.cast.rb);
	chrome.cast.kb = function(a, b, c, d) {
		this.label = a;
		a = b;
		Da.test(a) && (-1 != a.indexOf("&") && (a = a.replace(xa, "&amp;")), -1 != a.indexOf("<") && (a = a.replace(ya, "&lt;")), -1 != a.indexOf(">") && (a = a.replace(za, "&gt;")), -1 != a.indexOf('"') && (a = a.replace(Aa, "&quot;")), -1 != a.indexOf("'") && (a = a.replace(Ba, "&#39;")), -1 != a.indexOf("\x00") && (a = a.replace(Ca, "&#0;")));
		this.friendlyName = a;
		this.capabilities = c || [];
		this.volume = d || null;
		this.receiverType = chrome.cast.sa.CAST;
		this.displayStatus = this.isActiveInput = null
	};
	q("chrome.cast.Receiver", chrome.cast.kb);
	chrome.cast.mb = function(a, b) {
		this.statusText = a;
		this.appImages = b;
		this.showStop = null
	};
	q("chrome.cast.ReceiverDisplayStatus", chrome.cast.mb);
	chrome.cast.va = function() {
		this.requestSession = 6E4;
		this.sendCustomMessage = this.setReceiverVolume = this.stopSession = this.leaveSession = 3E3
	};
	q("chrome.cast.Timeout", chrome.cast.va);
	chrome.cast.timeout = new chrome.cast.va;
	q("chrome.cast.timeout", chrome.cast.timeout);
	chrome.cast.Ma = "auto-join";
	chrome.cast.fb = "cast-session_";
	chrome.cast.media.ab = {
		PAUSE: "pause",
		SEEK: "seek",
		STREAM_VOLUME: "stream_volume",
		STREAM_MUTE: "stream_mute"
	};
	q("chrome.cast.media.MediaCommand", chrome.cast.media.ab);
	chrome.cast.media.s = {
		GENERIC: 0,
		MOVIE: 1,
		TV_SHOW: 2,
		MUSIC_TRACK: 3,
		PHOTO: 4
	};
	q("chrome.cast.media.MetadataType", chrome.cast.media.s);
	chrome.cast.media.F = {
		IDLE: "IDLE",
		PLAYING: "PLAYING",
		PAUSED: "PAUSED",
		BUFFERING: "BUFFERING"
	};
	q("chrome.cast.media.PlayerState", chrome.cast.media.F);
	chrome.cast.media.V = {
		OFF: "REPEAT_OFF",
		ALL: "REPEAT_ALL",
		SINGLE: "REPEAT_SINGLE",
		ALL_AND_SHUFFLE: "REPEAT_ALL_AND_SHUFFLE"
	};
	q("chrome.cast.media.RepeatMode", chrome.cast.media.V);
	chrome.cast.media.nb = {
		PLAYBACK_START: "PLAYBACK_START",
		PLAYBACK_PAUSE: "PLAYBACK_PAUSE"
	};
	q("chrome.cast.media.ResumeState", chrome.cast.media.nb);
	chrome.cast.media.ua = {
		BUFFERED: "BUFFERED",
		LIVE: "LIVE",
		OTHER: "OTHER"
	};
	q("chrome.cast.media.StreamType", chrome.cast.media.ua);
	chrome.cast.media.Ya = {
		CANCELLED: "CANCELLED",
		INTERRUPTED: "INTERRUPTED",
		FINISHED: "FINISHED",
		ERROR: "ERROR"
	};
	q("chrome.cast.media.IdleReason", chrome.cast.media.Ya);
	chrome.cast.media.zb = {
		TEXT: "TEXT",
		AUDIO: "AUDIO",
		VIDEO: "VIDEO"
	};
	q("chrome.cast.media.TrackType", chrome.cast.media.zb);
	chrome.cast.media.wb = {
		SUBTITLES: "SUBTITLES",
		CAPTIONS: "CAPTIONS",
		DESCRIPTIONS: "DESCRIPTIONS",
		CHAPTERS: "CHAPTERS",
		METADATA: "METADATA"
	};
	q("chrome.cast.media.TextTrackType", chrome.cast.media.wb);
	chrome.cast.media.sb = {
		NONE: "NONE",
		OUTLINE: "OUTLINE",
		DROP_SHADOW: "DROP_SHADOW",
		RAISED: "RAISED",
		DEPRESSED: "DEPRESSED"
	};
	q("chrome.cast.media.TextTrackEdgeType", chrome.cast.media.sb);
	chrome.cast.media.xb = {
		NONE: "NONE",
		NORMAL: "NORMAL",
		ROUNDED_CORNERS: "ROUNDED_CORNERS"
	};
	q("chrome.cast.media.TextTrackWindowType", chrome.cast.media.xb);
	chrome.cast.media.tb = {
		SANS_SERIF: "SANS_SERIF",
		MONOSPACED_SANS_SERIF: "MONOSPACED_SANS_SERIF",
		SERIF: "SERIF",
		MONOSPACED_SERIF: "MONOSPACED_SERIF",
		CASUAL: "CASUAL",
		CURSIVE: "CURSIVE",
		SMALL_CAPITALS: "SMALL_CAPITALS"
	};
	q("chrome.cast.media.TextTrackFontGenericFamily", chrome.cast.media.tb);
	chrome.cast.media.ub = {
		NORMAL: "NORMAL",
		BOLD: "BOLD",
		BOLD_ITALIC: "BOLD_ITALIC",
		ITALIC: "ITALIC"
	};
	q("chrome.cast.media.TextTrackFontStyle", chrome.cast.media.ub);
	chrome.cast.media.ka = function() {
		this.customData = null
	};
	q("chrome.cast.media.GetStatusRequest", chrome.cast.media.ka);
	chrome.cast.media.la = function() {
		this.customData = null
	};
	q("chrome.cast.media.PauseRequest", chrome.cast.media.la);
	chrome.cast.media.ma = function() {
		this.customData = null
	};
	q("chrome.cast.media.PlayRequest", chrome.cast.media.ma);
	chrome.cast.media.ob = function() {
		this.customData = this.resumeState = this.currentTime = null
	};
	q("chrome.cast.media.SeekRequest", chrome.cast.media.ob);
	chrome.cast.media.ta = function() {
		this.customData = null
	};
	q("chrome.cast.media.StopRequest", chrome.cast.media.ta);
	chrome.cast.media.Cb = function(a) {
		this.volume = a;
		this.customData = null
	};
	q("chrome.cast.media.VolumeRequest", chrome.cast.media.Cb);
	chrome.cast.media.Za = function(a) {
		this.type = "LOAD";
		this.requestId = 0;
		this.sessionId = null;
		this.media = a;
		this.activeTrackIds = null;
		this.autoplay = !0;
		this.customData = this.currentTime = null
	};
	q("chrome.cast.media.LoadRequest", chrome.cast.media.Za);
	chrome.cast.media.hb = function(a) {
		this.type = "PRECACHE";
		this.requestId = 0;
		this.data = a
	};
	chrome.cast.media.Va = function(a, b) {
		this.requestId = 0;
		this.activeTrackIds = a || null;
		this.textTrackStyle = b || null
	};
	q("chrome.cast.media.EditTracksInfoRequest", chrome.cast.media.Va);
	chrome.cast.media.Xa = function() {
		this.metadataType = this.type = chrome.cast.media.s.GENERIC;
		this.releaseDate = this.releaseYear = this.images = this.subtitle = this.title = null
	};
	q("chrome.cast.media.GenericMediaMetadata", chrome.cast.media.Xa);
	chrome.cast.media.cb = function() {
		this.metadataType = this.type = chrome.cast.media.s.MOVIE;
		this.releaseDate = this.releaseYear = this.images = this.subtitle = this.studio = this.title = null
	};
	q("chrome.cast.media.MovieMediaMetadata", chrome.cast.media.cb);
	chrome.cast.media.Ab = function() {
		this.metadataType = this.type = chrome.cast.media.s.TV_SHOW;
		this.originalAirdate = this.releaseYear = this.images = this.episode = this.episodeNumber = this.season = this.seasonNumber = this.episodeTitle = this.title = this.seriesTitle = null
	};
	q("chrome.cast.media.TvShowMediaMetadata", chrome.cast.media.Ab);
	chrome.cast.media.eb = function() {
		this.metadataType = this.type = chrome.cast.media.s.MUSIC_TRACK;
		this.releaseDate = this.releaseYear = this.images = this.discNumber = this.trackNumber = this.artistName = this.songName = this.composer = this.artist = this.albumArtist = this.title = this.albumName = null
	};
	q("chrome.cast.media.MusicTrackMediaMetadata", chrome.cast.media.eb);
	chrome.cast.media.gb = function() {
		this.metadataType = this.type = chrome.cast.media.s.PHOTO;
		this.creationDateTime = this.height = this.width = this.longitude = this.latitude = this.images = this.location = this.artist = this.title = null
	};
	q("chrome.cast.media.PhotoMediaMetadata", chrome.cast.media.gb);
	chrome.cast.media.bb = function(a, b) {
		this.contentId = a;
		this.streamType = chrome.cast.media.ua.BUFFERED;
		this.contentType = b;
		this.customData = this.textTrackStyle = this.tracks = this.duration = this.metadata = null
	};
	q("chrome.cast.media.MediaInfo", chrome.cast.media.bb);
	chrome.cast.media.oa = function(a) {
		this.itemId = null;
		this.media = a;
		this.autoplay = !0;
		this.startTime = 0;
		this.playbackDuration = null;
		this.preloadTime = 0;
		this.customData = this.activeTrackIds = null
	};
	q("chrome.cast.media.QueueItem", chrome.cast.media.oa);
	chrome.cast.media.Qa = "CC1AD845";
	q("chrome.cast.media.DEFAULT_MEDIA_RECEIVER_APP_ID", chrome.cast.media.Qa);
	chrome.cast.media.timeout = {};
	chrome.cast.media.timeout.load = 0;
	q("chrome.cast.media.timeout.load", chrome.cast.media.timeout.load);
	chrome.cast.media.timeout.O = 0;
	q("chrome.cast.media.timeout.getStatus", chrome.cast.media.timeout.O);
	chrome.cast.media.timeout.play = 0;
	q("chrome.cast.media.timeout.play", chrome.cast.media.timeout.play);
	chrome.cast.media.timeout.pause = 0;
	q("chrome.cast.media.timeout.pause", chrome.cast.media.timeout.pause);
	chrome.cast.media.timeout.seek = 0;
	q("chrome.cast.media.timeout.seek", chrome.cast.media.timeout.seek);
	chrome.cast.media.timeout.stop = 0;
	q("chrome.cast.media.timeout.stop", chrome.cast.media.timeout.stop);
	chrome.cast.media.timeout.S = 0;
	q("chrome.cast.media.timeout.setVolume", chrome.cast.media.timeout.S);
	chrome.cast.media.timeout.N = 0;
	q("chrome.cast.media.timeout.editTracksInfo", chrome.cast.media.timeout.N);
	chrome.cast.media.timeout.o = 0;
	q("chrome.cast.media.timeout.queue", chrome.cast.media.timeout.o);
	chrome.cast.media.yb = function(a, b) {
		this.trackId = a;
		this.trackContentType = this.trackContentId = null;
		this.type = b;
		this.customData = this.subtype = this.language = this.name = null
	};
	q("chrome.cast.media.Track", chrome.cast.media.yb);
	chrome.cast.media.vb = function() {
		this.customData = this.fontStyle = this.fontGenericFamily = this.fontFamily = this.fontScale = this.windowRoundedCornerRadius = this.windowColor = this.windowType = this.edgeColor = this.edgeType = this.backgroundColor = this.foregroundColor = null
	};
	q("chrome.cast.media.TextTrackStyle", chrome.cast.media.vb);
	chrome.cast.media.ib = function(a) {
		this.type = "QUEUE_LOAD";
		this.sessionId = this.requestId = null;
		this.items = a;
		this.startIndex = 0;
		this.repeatMode = chrome.cast.media.V.OFF;
		this.customData = null
	};
	q("chrome.cast.media.QueueLoadRequest", chrome.cast.media.ib);
	chrome.cast.media.na = function(a) {
		this.type = "QUEUE_INSERT";
		this.sessionId = this.requestId = null;
		this.items = a;
		this.customData = this.insertBefore = null
	};
	q("chrome.cast.media.QueueInsertItemsRequest", chrome.cast.media.na);
	chrome.cast.media.jb = function(a) {
		this.type = "QUEUE_UPDATE";
		this.sessionId = this.requestId = null;
		this.items = a;
		this.customData = null
	};
	q("chrome.cast.media.QueueUpdateItemsRequest", chrome.cast.media.jb);
	chrome.cast.media.L = function() {
		this.type = "QUEUE_UPDATE";
		this.customData = this.jump = this.currentItemId = this.sessionId = this.requestId = null
	};
	q("chrome.cast.media.QueueJumpRequest", chrome.cast.media.L);
	chrome.cast.media.ra = function() {
		this.type = "QUEUE_UPDATE";
		this.customData = this.repeatMode = this.sessionId = this.requestId = null
	};
	q("chrome.cast.media.QueueSetPropertiesRequest", chrome.cast.media.ra);
	chrome.cast.media.pa = function(a) {
		this.type = "QUEUE_REMOVE";
		this.sessionId = this.requestId = null;
		this.itemIds = a;
		this.customData = null
	};
	q("chrome.cast.media.QueueRemoveItemsRequest", chrome.cast.media.pa);
	chrome.cast.media.qa = function(a) {
		this.type = "QUEUE_REORDER";
		this.sessionId = this.requestId = null;
		this.itemIds = a;
		this.customData = this.insertBefore = null
	};
	q("chrome.cast.media.QueueReorderItemsRequest", chrome.cast.media.qa);
	var r = Array.prototype.forEach ? function(a, b, c) {
			Array.prototype.forEach.call(a, b, c)
		} : function(a, b, c) {
			for (var d = a.length, f = m(a) ? a.split("") : a, g = 0; g < d; g++) g in f && b.call(c, f[g], g, a)
		},
		Ia = function(a, b) {
			for (var c = a.length, d = m(a) ? a.split("") : a, f = 0; f < c; f++)
				if (f in d && b.call(void 0, d[f], f, a)) return f;
			return -1
		},
		Ja = function(a) {
			return Array.prototype.concat.apply([], arguments)
		},
		Ka = function(a) {
			var b = a.length;
			if (0 < b) {
				for (var c = Array(b), d = 0; d < b; d++) c[d] = a[d];
				return c
			}
			return []
		};
	chrome.cast.media.b = function(a, b) {
		this.sessionId = a;
		this.mediaSessionId = b;
		this.media = null;
		this.playbackRate = 1;
		this.playerState = chrome.cast.media.F.IDLE;
		this.currentTime = 0;
		this.g = -1;
		this.supportedMediaCommands = [];
		this.volume = new chrome.cast.Volume;
		this.items = this.preloadedItemId = this.loadingItemId = this.currentItemId = this.customData = this.activeTrackIds = this.idleReason = null;
		this.repeatMode = chrome.cast.media.V.OFF;
		this.c = !1;
		this.a = []
	};
	q("chrome.cast.media.Media", chrome.cast.media.b);
	chrome.cast.media.b.prototype.O = function(a, b, c) {
		a || (a = new chrome.cast.media.ka);
		t.a(this, "MEDIA_GET_STATUS", a, b, c, chrome.cast.media.timeout.O)
	};
	chrome.cast.media.b.prototype.getStatus = chrome.cast.media.b.prototype.O;
	chrome.cast.media.b.prototype.play = function(a, b, c) {
		this.Aa(t, a, b, c)
	};
	chrome.cast.media.b.prototype.play = chrome.cast.media.b.prototype.play;
	chrome.cast.media.b.prototype.Aa = function(a, b, c, d) {
		b || (b = new chrome.cast.media.ma);
		a.a(this, "PLAY", b, c, d, chrome.cast.media.timeout.play)
	};
	chrome.cast.media.b.prototype.playWithContext = chrome.cast.media.b.prototype.Aa;
	chrome.cast.media.b.prototype.pause = function(a, b, c) {
		this.za(t, a, b, c)
	};
	chrome.cast.media.b.prototype.pause = chrome.cast.media.b.prototype.pause;
	chrome.cast.media.b.prototype.za = function(a, b, c, d) {
		b || (b = new chrome.cast.media.la);
		a.a(this, "PAUSE", b, c, d, chrome.cast.media.timeout.pause)
	};
	chrome.cast.media.b.prototype.pauseWithContext = chrome.cast.media.b.prototype.za;
	chrome.cast.media.b.prototype.seek = function(a, b, c) {
		t.a(this, "SEEK", a, b, c, chrome.cast.media.timeout.seek)
	};
	chrome.cast.media.b.prototype.seek = chrome.cast.media.b.prototype.seek;
	chrome.cast.media.b.prototype.stop = function(a, b, c) {
		a || (a = new chrome.cast.media.ta);
		t.a(this, "STOP_MEDIA", a, b, c, chrome.cast.media.timeout.stop)
	};
	chrome.cast.media.b.prototype.stop = chrome.cast.media.b.prototype.stop;
	chrome.cast.media.b.prototype.S = function(a, b, c) {
		t.a(this, "MEDIA_SET_VOLUME", a, b, c, chrome.cast.media.timeout.S)
	};
	chrome.cast.media.b.prototype.setVolume = chrome.cast.media.b.prototype.S;
	chrome.cast.media.b.prototype.N = function(a, b, c) {
		t.a(this, "EDIT_TRACKS_INFO", a, b, c, chrome.cast.media.timeout.N)
	};
	chrome.cast.media.b.prototype.editTracksInfo = chrome.cast.media.b.prototype.N;
	chrome.cast.media.b.prototype.Sb = function(a, b, c) {
		t.a(this, "QUEUE_INSERT", a, b, c, chrome.cast.media.timeout.o)
	};
	chrome.cast.media.b.prototype.queueInsertItems = chrome.cast.media.b.prototype.Sb;
	chrome.cast.media.b.prototype.Rb = function(a, b, c) {
		t.a(this, "QUEUE_INSERT", new chrome.cast.media.na([a]), b, c, chrome.cast.media.timeout.o)
	};
	chrome.cast.media.b.prototype.queueAppendItem = chrome.cast.media.b.prototype.Rb;
	chrome.cast.media.b.prototype.cc = function(a, b, c) {
		t.a(this, "QUEUE_UPDATE", a, b, c, chrome.cast.media.timeout.o)
	};
	chrome.cast.media.b.prototype.queueUpdateItems = chrome.cast.media.b.prototype.cc;
	chrome.cast.media.b.prototype.Xb = function(a, b) {
		var c = new chrome.cast.media.L;
		c.jump = -1;
		t.a(this, "QUEUE_UPDATE", c, a, b, chrome.cast.media.timeout.o)
	};
	chrome.cast.media.b.prototype.queuePrev = chrome.cast.media.b.prototype.Xb;
	chrome.cast.media.b.prototype.Wb = function(a, b) {
		var c = new chrome.cast.media.L;
		c.jump = 1;
		t.a(this, "QUEUE_UPDATE", c, a, b, chrome.cast.media.timeout.o)
	};
	chrome.cast.media.b.prototype.queueNext = chrome.cast.media.b.prototype.Wb;
	chrome.cast.media.b.prototype.Tb = function(a, b, c) {
		if (!(0 > La(this, a))) {
			var d = new chrome.cast.media.L;
			d.currentItemId = a;
			t.a(this, "QUEUE_UPDATE", d, b, c, chrome.cast.media.timeout.o)
		}
	};
	chrome.cast.media.b.prototype.queueJumpToItem = chrome.cast.media.b.prototype.Tb;
	chrome.cast.media.b.prototype.bc = function(a, b, c) {
		var d = new chrome.cast.media.ra;
		d.repeatMode = a;
		t.a(this, "QUEUE_UPDATE", d, b, c, chrome.cast.media.timeout.o)
	};
	chrome.cast.media.b.prototype.queueSetRepeatMode = chrome.cast.media.b.prototype.bc;
	chrome.cast.media.b.prototype.Zb = function(a, b, c) {
		t.a(this, "QUEUE_REMOVE", a, b, c, chrome.cast.media.timeout.o)
	};
	chrome.cast.media.b.prototype.queueRemoveItems = chrome.cast.media.b.prototype.Zb;
	chrome.cast.media.b.prototype.Yb = function(a, b, c) {
		0 > La(this, a) || t.a(this, "QUEUE_REMOVE", new chrome.cast.media.pa([a]), b, c, chrome.cast.media.timeout.o)
	};
	chrome.cast.media.b.prototype.queueRemoveItem = chrome.cast.media.b.prototype.Yb;
	chrome.cast.media.b.prototype.ac = function(a, b, c) {
		t.a(this, "QUEUE_REORDER", a, b, c, chrome.cast.media.timeout.o)
	};
	chrome.cast.media.b.prototype.queueReorderItems = chrome.cast.media.b.prototype.ac;
	chrome.cast.media.b.prototype.Vb = function(a, b, c, d) {
		var f = La(this, a);
		if (!(0 > f))
			if (0 > b) d && d(new chrome.cast.Error(chrome.cast.v.INVALID_PARAMETER));
			else if (f == b) c && c();
		else {
			var g = null;
			b = b > f ? b + 1 : b;
			b < this.items.length && (g = this.items[b]);
			a = new chrome.cast.media.qa([a]);
			a.insertBefore = g ? g.itemId : null;
			t.a(this, "QUEUE_REORDER", a, c, d, chrome.cast.media.timeout.o)
		}
	};
	chrome.cast.media.b.prototype.queueMoveItemToNewIndex = chrome.cast.media.b.prototype.Vb;
	chrome.cast.media.b.prototype.mc = function(a) {
		return -1 < this.supportedMediaCommands.indexOf(a)
	};
	chrome.cast.media.b.prototype.supportsCommand = chrome.cast.media.b.prototype.mc;
	chrome.cast.media.b.prototype.Kb = function() {
		if (this.playerState == chrome.cast.media.F.PLAYING && 0 <= this.g) {
			var a = this.currentTime + (Date.now() - this.g) / 1E3 * this.playbackRate;
			this.media && null != this.media.duration && a > this.media.duration && (a = this.media.duration);
			0 > a && (a = 0);
			return a
		}
		return this.currentTime
	};
	chrome.cast.media.b.prototype.getEstimatedTime = chrome.cast.media.b.prototype.Kb;
	chrome.cast.media.b.prototype.Y = function(a) {
		this.H(t, a)
	};
	chrome.cast.media.b.prototype.addUpdateListener = chrome.cast.media.b.prototype.Y;
	chrome.cast.media.b.prototype.H = function(a, b) {
		a.Fb(this, b)
	};
	chrome.cast.media.b.prototype.addUpdateListenerWithContext = chrome.cast.media.b.prototype.H;
	chrome.cast.media.b.prototype.ba = function(a) {
		this.K(t, a)
	};
	chrome.cast.media.b.prototype.removeUpdateListener = chrome.cast.media.b.prototype.ba;
	chrome.cast.media.b.prototype.K = function(a, b) {
		t.ec(this, b)
	};
	chrome.cast.media.b.prototype.removeUpdateListenerWithContext = chrome.cast.media.b.prototype.K;
	var La = function(a, b) {
		return Ia(a.items, function(a) {
			return a.itemId == b
		})
	};
	var t = null;
	var Ma = function(a, b, c) {
		this.sessionId = a;
		this.namespaceName = b;
		this.message = c
	};
	var Na = function(a, b) {
		this.type = "SET_VOLUME";
		this.requestId = 0;
		this.volume = a;
		this.expectedVolume = b || null
	};
	var Oa = function(a) {
		this.type = "STOP";
		this.requestId = 0;
		this.sessionId = a || null
	};
	chrome.cast.f = function(a, b, c, d, f) {
		this.sessionId = a;
		this.appId = b;
		this.displayName = c;
		this.statusText = null;
		this.appImages = d;
		this.receiver = f;
		this.senderApps = [];
		this.namespaces = [];
		this.media = [];
		this.status = chrome.cast.G.CONNECTED;
		this.transportId = ""
	};
	q("chrome.cast.Session", chrome.cast.f);
	chrome.cast.f.prototype.lc = function(a, b, c) {
		this.Ha(t, a, b, c)
	};
	chrome.cast.f.prototype.setReceiverVolumeLevel = chrome.cast.f.prototype.lc;
	chrome.cast.f.prototype.Ha = function(a, b, c, d) {
		b = new Na(new chrome.cast.Volume(b, null), this.receiver.volume);
		a.setReceiverVolume(this.sessionId, b, c, d)
	};
	chrome.cast.f.prototype.setReceiverVolumeLevelWithContext = chrome.cast.f.prototype.Ha;
	chrome.cast.f.prototype.kc = function(a, b, c) {
		this.Ga(0, a, b, c)
	};
	chrome.cast.f.prototype.setReceiverMuted = chrome.cast.f.prototype.kc;
	chrome.cast.f.prototype.Ga = function(a, b, c, d) {
		a = new Na(new chrome.cast.Volume(null, b), this.receiver.volume);
		t.setReceiverVolume(this.sessionId, a, c, d)
	};
	chrome.cast.f.prototype.setReceiverMutedWithContext = chrome.cast.f.prototype.Ga;
	chrome.cast.f.prototype.Mb = function(a, b) {
		t.leaveSession(this.sessionId, a, b)
	};
	chrome.cast.f.prototype.leave = chrome.cast.f.prototype.Mb;
	chrome.cast.f.prototype.stop = function(a, b) {
		this.Ja(t, a, b)
	};
	chrome.cast.f.prototype.stop = chrome.cast.f.prototype.stop;
	chrome.cast.f.prototype.Ja = function(a, b, c) {
		a.Ea(new Oa(this.sessionId), b, c, chrome.cast.timeout.stopSession)
	};
	chrome.cast.f.prototype.stopWithContext = chrome.cast.f.prototype.Ja;
	chrome.cast.f.prototype.sendMessage = function(a, b, c, d) {
		this.Fa(t, a, b, c, d)
	};
	chrome.cast.f.prototype.sendMessage = chrome.cast.f.prototype.sendMessage;
	chrome.cast.f.prototype.Fa = function(a, b, c, d, f) {
		a.hc(new Ma(this.sessionId, b, c), d, f)
	};
	chrome.cast.f.prototype.sendMessageWithContext = chrome.cast.f.prototype.Fa;
	chrome.cast.f.prototype.Y = function(a) {
		this.H(t, a)
	};
	chrome.cast.f.prototype.addUpdateListener = chrome.cast.f.prototype.Y;
	chrome.cast.f.prototype.H = function(a, b) {
		a.Hb(this.sessionId, b)
	};
	chrome.cast.f.prototype.addUpdateListenerWithContext = chrome.cast.f.prototype.H;
	chrome.cast.f.prototype.ba = function(a) {
		this.K(t, a)
	};
	chrome.cast.f.prototype.removeUpdateListener = chrome.cast.f.prototype.ba;
	chrome.cast.f.prototype.K = function(a, b) {
		a.gc(this.sessionId, b)
	};
	chrome.cast.f.prototype.removeUpdateListenerWithContext = chrome.cast.f.prototype.K;
	chrome.cast.f.prototype.Gb = function(a, b) {
		this.xa(t, a, b)
	};
	chrome.cast.f.prototype.addMessageListener = chrome.cast.f.prototype.Gb;
	chrome.cast.f.prototype.xa = function(a, b, c) {
		a.Eb(this.sessionId, b, c)
	};
	chrome.cast.f.prototype.addMessageListenerWithContext = chrome.cast.f.prototype.xa;
	chrome.cast.f.prototype.W = function(a) {
		this.wa(t, a)
	};
	chrome.cast.f.prototype.addMediaListener = chrome.cast.f.prototype.W;
	chrome.cast.f.prototype.wa = function(a, b) {
		a.W(this.sessionId, b)
	};
	chrome.cast.f.prototype.addMediaListenerWithContext = chrome.cast.f.prototype.wa;
	chrome.cast.f.prototype.Z = function(a) {
		this.Ba(t, a)
	};
	chrome.cast.f.prototype.removeMediaListener = chrome.cast.f.prototype.Z;
	chrome.cast.f.prototype.Ba = function(a, b) {
		a.Z(this.sessionId, b)
	};
	chrome.cast.f.prototype.removeMediaListenerWithContext = chrome.cast.f.prototype.Ba;
	chrome.cast.f.prototype.fc = function(a, b) {
		this.Ca(t, a, b)
	};
	chrome.cast.f.prototype.removeMessageListener = chrome.cast.f.prototype.fc;
	chrome.cast.f.prototype.Ca = function(a, b, c) {
		a.dc(this.sessionId, b, c)
	};
	chrome.cast.f.prototype.removeMessageListenerWithContext = chrome.cast.f.prototype.Ca;
	chrome.cast.f.prototype.Nb = function(a, b, c) {
		a.sessionId = this.sessionId;
		t.ia(a, "LOAD", b, c)
	};
	chrome.cast.f.prototype.loadMedia = chrome.cast.f.prototype.Nb;
	chrome.cast.f.prototype.Ub = function(a, b, c) {
		a.sessionId = this.sessionId;
		t.ia(a, "QUEUE_LOAD", b, c)
	};
	chrome.cast.f.prototype.queueLoad = chrome.cast.f.prototype.Ub;
	var Pa = function(a) {
		var b = [],
			c = 0,
			d;
		for (d in a) b[c++] = a[d];
		return b
	};
	var v = "StopIteration" in l ? l.StopIteration : {
			message: "StopIteration",
			stack: ""
		},
		w = function() {};
	w.prototype.next = function() {
		throw v;
	};
	w.prototype.w = function() {
		return this
	};
	var Qa = function(a) {
			if (a instanceof w) return a;
			if ("function" == typeof a.w) return a.w(!1);
			if (ra(a)) {
				var b = 0,
					c = new w;
				c.next = function() {
					for (;;) {
						if (b >= a.length) throw v;
						if (b in a) return a[b++];
						b++
					}
				};
				return c
			}
			throw Error("Not implemented");
		},
		x = function(a, b) {
			if (ra(a)) try {
				r(a, b, void 0)
			} catch (c) {
				if (c !== v) throw c;
			} else {
				a = Qa(a);
				try {
					for (;;) b.call(void 0, a.next(), void 0, a)
				} catch (c) {
					if (c !== v) throw c;
				}
			}
		};
	var y = function(a, b) {
		this.c = {};
		this.a = [];
		this.h = this.g = 0;
		var c = arguments.length;
		if (1 < c) {
			if (c % 2) throw Error("Uneven number of arguments");
			for (var d = 0; d < c; d += 2) this.set(arguments[d], arguments[d + 1])
		} else if (a) {
			if (a instanceof y) d = a.I(), c = a.u();
			else {
				c = [];
				var f = 0;
				for (d in a) c[f++] = d;
				d = c;
				c = Pa(a)
			}
			for (f = 0; f < d.length; f++) this.set(d[f], c[f])
		}
	};
	y.prototype.u = function() {
		z(this);
		for (var a = [], b = 0; b < this.a.length; b++) a.push(this.c[this.a[b]]);
		return a
	};
	y.prototype.I = function() {
		z(this);
		return this.a.concat()
	};
	y.prototype.clear = function() {
		this.c = {};
		this.h = this.g = this.a.length = 0
	};
	y.prototype.remove = function(a) {
		return A(this.c, a) ? (delete this.c[a], this.g--, this.h++, this.a.length > 2 * this.g && z(this), !0) : !1
	};
	var z = function(a) {
		var b, c;
		if (a.g != a.a.length) {
			for (b = c = 0; c < a.a.length;) {
				var d = a.a[c];
				A(a.c, d) && (a.a[b++] = d);
				c++
			}
			a.a.length = b
		}
		if (a.g != a.a.length) {
			var f = {};
			for (b = c = 0; c < a.a.length;) d = a.a[c], A(f, d) || (a.a[b++] = d, f[d] = 1), c++;
			a.a.length = b
		}
	};
	y.prototype.get = function(a, b) {
		return A(this.c, a) ? this.c[a] : b
	};
	y.prototype.set = function(a, b) {
		A(this.c, a) || (this.g++, this.a.push(a), this.h++);
		this.c[a] = b
	};
	y.prototype.forEach = function(a, b) {
		for (var c = this.I(), d = 0; d < c.length; d++) {
			var f = c[d],
				g = this.get(f);
			a.call(b, g, f, this)
		}
	};
	y.prototype.w = function(a) {
		z(this);
		var b = 0,
			c = this.h,
			d = this,
			f = new w;
		f.next = function() {
			if (c != d.h) throw Error("The map has changed since the iterator was created");
			if (b >= d.a.length) throw v;
			var f = d.a[b++];
			return a ? f : d.c[f]
		};
		return f
	};
	var A = function(a, b) {
		return Object.prototype.hasOwnProperty.call(a, b)
	};
	var B = function(a, b) {
		this.requestId = a;
		this.h = b;
		this.Ka = null
	};
	B.prototype.c = function() {};
	var Ra = function() {
			this.a = new y
		},
		Sa = function(a, b) {
			a.a.set(b.requestId, b);
			b.Ka = setTimeout(function() {
				a.a.remove(b.requestId);
				b.c()
			}, b.h)
		},
		Ta = function(a, b) {
			var c = a.a.get(b);
			if (!c) return null;
			clearTimeout(c.Ka);
			a.a.remove(b);
			return c
		};
	var C;
	a: {
		var Ua = l.navigator;
		if (Ua) {
			var Va = Ua.userAgent;
			if (Va) {
				C = Va;
				break a
			}
		}
		C = ""
	}
	var D = function(a) {
		return -1 != C.indexOf(a)
	};
	var E = function() {
		this.c = this.c;
		this.j = this.j
	};
	E.prototype.c = !1;
	var Xa = function(a, b) {
		var c = Wa;
		return Object.prototype.hasOwnProperty.call(c, a) ? c[a] : c[a] = b(a)
	};
	var Ya = D("Opera"),
		F = D("Trident") || D("MSIE"),
		Za = D("Edge"),
		G = D("Gecko") && !(-1 != C.toLowerCase().indexOf("webkit") && !D("Edge")) && !(D("Trident") || D("MSIE")) && !D("Edge"),
		H = -1 != C.toLowerCase().indexOf("webkit") && !D("Edge"),
		$a;
	a: {
		var ab = "",
			bb = function() {
				var a = C;
				if (G) return /rv\:([^\);]+)(\)|;)/.exec(a);
				if (Za) return /Edge\/([\d\.]+)/.exec(a);
				if (F) return /\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(a);
				if (H) return /WebKit\/(\S+)/.exec(a);
				if (Ya) return /(?:Version)[ \/]?(\S+)/.exec(a)
			}();bb && (ab = bb ? bb[1] : "");
		if (F) {
			var I, cb = l.document;
			I = cb ? cb.documentMode : void 0;
			if (null != I && I > parseFloat(ab)) {
				$a = String(I);
				break a
			}
		}
		$a = ab
	}
	var db = $a,
		Wa = {},
		J = function(a) {
			return Xa(a, function() {
				for (var b = 0, c = wa(String(db)).split("."), d = wa(String(a)).split("."), f = Math.max(c.length, d.length), g = 0; 0 == b && g < f; g++) {
					var k = c[g] || "",
						n = d[g] || "";
					do {
						k = /(\d*)(\D*)(.*)/.exec(k) || ["", "", "", ""];
						n = /(\d*)(\D*)(.*)/.exec(n) || ["", "", "", ""];
						if (0 == k[0].length && 0 == n[0].length) break;
						b = Ha(0 == k[1].length ? 0 : parseInt(k[1], 10), 0 == n[1].length ? 0 : parseInt(n[1], 10)) || Ha(0 == k[2].length, 0 == n[2].length) || Ha(k[2], n[2]);
						k = k[3];
						n = n[3]
					} while (0 == b)
				}
				return 0 <= b
			})
		};
	F && J("9");
	!H || J("528");
	G && J("1.9b") || F && J("8") || Ya && J("9.5") || H && J("528");
	G && !J("8") || F && J("9");
	var K = function(a, b, c) {
		E.call(this);
		this.i = null != c ? p(a, c) : a;
		this.h = b;
		this.g = p(this.Pb, this);
		this.a = []
	};
	(function() {
		function a() {}
		a.prototype = E.prototype;
		K.a = E.prototype;
		K.prototype = new a;
		K.prototype.constructor = K;
		K.c = function(a, c, d) {
			for (var b = Array(arguments.length - 2), g = 2; g < arguments.length; g++) b[g - 2] = arguments[g];
			return E.prototype[c].apply(a, b)
		}
	})();
	e = K.prototype;
	e.D = !1;
	e.J = 0;
	e.A = null;
	e.Jb = function(a) {
		this.a = arguments;
		this.A || this.J ? this.D = !0 : eb(this)
	};
	e.stop = function() {
		this.A && (l.clearTimeout(this.A), this.A = null, this.D = !1, this.a = [])
	};
	e.pause = function() {
		this.J++
	};
	e.resume = function() {
		this.J--;
		this.J || !this.D || this.A || (this.D = !1, eb(this))
	};
	e.Pb = function() {
		this.A = null;
		this.D && !this.J && (this.D = !1, eb(this))
	};
	var eb = function(a) {
		var b = a.g;
		var c = a.h;
		if ("function" != qa(b))
			if (b && "function" == typeof b.handleEvent) b = p(b.handleEvent, b);
			else throw Error("Invalid listener argument");
		b = 2147483647 < Number(c) ? -1 : l.setTimeout(b, c || 0);
		a.A = b;
		a.i.apply(null, a.a)
	};
	var fb = D("Safari") && !((D("Chrome") || D("CriOS")) && !D("Edge") || D("Coast") || D("Opera") || D("Edge") || D("Silk") || D("Android")) && !(D("iPhone") && !D("iPod") && !D("iPad") || D("iPad") || D("iPod"));
	var L = null,
		gb = G || H && !fb || Ya || "function" == typeof l.btoa,
		hb = function(a) {
			if (gb) var b = l.btoa(a);
			else {
				b = [];
				for (var c = 0, d = 0; d < a.length; d++) {
					var f = a.charCodeAt(d);
					255 < f && (b[c++] = f & 255, f >>= 8);
					b[c++] = f
				}
				if (!L)
					for (L = {}, a = 0; 65 > a; a++) L[a] = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=".charAt(a);
				a = L;
				c = [];
				for (d = 0; d < b.length; d += 3) {
					var g = b[d],
						k = (f = d + 1 < b.length) ? b[d + 1] : 0,
						n = d + 2 < b.length,
						u = n ? b[d + 2] : 0,
						pa = g >> 2;
					g = (g & 3) << 4 | k >> 4;
					k = (k & 15) << 2 | u >> 6;
					u &= 63;
					n || (u = 64, f || (k = 64));
					c.push(a[pa], a[g], a[k], a[u])
				}
				b =
					c.join("")
			}
			return b
		};
	var ib = function(a) {
		if (a.u && "function" == typeof a.u) return a.u();
		if (m(a)) return a.split("");
		if (ra(a)) {
			for (var b = [], c = a.length, d = 0; d < c; d++) b.push(a[d]);
			return b
		}
		return Pa(a)
	};
	var jb = function(a) {
			this.a = new y;
			if (a) {
				a = ib(a);
				for (var b = a.length, c = 0; c < b; c++) this.add(a[c])
			}
		},
		kb = function(a) {
			var b = typeof a;
			return "object" == b && a || "function" == b ? "o" + (a[sa] || (a[sa] = ++ta)) : b.substr(0, 1) + a
		};
	e = jb.prototype;
	e.add = function(a) {
		this.a.set(kb(a), a)
	};
	e.removeAll = function(a) {
		a = ib(a);
		for (var b = a.length, c = 0; c < b; c++) this.remove(a[c])
	};
	e.remove = function(a) {
		return this.a.remove(kb(a))
	};
	e.clear = function() {
		this.a.clear()
	};
	e.contains = function(a) {
		a = kb(a);
		return A(this.a.c, a)
	};
	e.u = function() {
		return this.a.u()
	};
	e.w = function() {
		return this.a.w(!1)
	};
	var lb = function(a) {
			this.a = a
		},
		nb = function(a) {
			var b = mb.get(a);
			b || (b = new lb(a), mb.set(a, b));
			return b
		};
	lb.prototype.log = function(a, b, c) {
		if (!(1 > a)) {
			"function" == typeof b && (b = b());
			b = b.replace(ob, "[Redacted URL]");
			b = b.replace(pb, "[Redacted domain/email]");
			var d = {
				pc: this.a,
				level: a,
				time: Date.now(),
				message: b,
				oc: c
			};
			qb.forEach(function(a) {
				return a(d)
			})
		}
	};
	lb.prototype.error = function(a, b) {
		this.log(3, a, b)
	};
	var rb = function(a) {
			M.log(1, a, void 0)
		},
		qb = [],
		mb = new Map,
		pb = /(([\w.+-]+@)|((www|m|mail|ftp)[.]))[\w.-]+[.][\w-]{2,4}/gi,
		ob = /(data:|https?:\/\/)\S+/gi;
	var N = function(a, b, c, d) {
		B.call(this, a, d || 6E5);
		this.g = b;
		this.a = c
	};
	N.prototype = aa(B.prototype);
	N.prototype.constructor = N;
	if (fa) fa(N, B);
	else
		for (var O in B)
			if ("prototype" != O)
				if (Object.defineProperties) {
					var sb = Object.getOwnPropertyDescriptor(B, O);
					sb && Object.defineProperty(N, O, sb)
				} else N[O] = B[O];
	N.a = B.prototype;
	N.prototype.c = function() {
		this.a(new chrome.cast.Error(chrome.cast.v.TIMEOUT))
	};
	var P = function(a, b, c, d) {
		this.type = a;
		this.message = b;
		this.sequenceNumber = void 0 !== c ? c : -1;
		this.timeoutMillis = d || 0;
		this.clientId = ""
	};
	var Q = function(a, b) {
			this.g = a;
			this.c = b || String(Date.now()) + String(Math.floor(1E5 * Math.random()));
			this.a = null
		},
		tb = function(a, b) {
			if (!a.a) return R.error("No active session"), "No active session";
			b.clientId = a.c;
			b = JSON.stringify(b);
			if (32768 < b.length) return R.error("Message length over limit"), "Message length over limit";
			R.log(0, "Send " + b, void 0);
			a.a.send(b);
			return null
		};
	Q.prototype.connect = function(a) {
		this.a = a;
		this.a.onmessage = p(this.h, this);
		tb(this, new P("client_connect", this.c))
	};
	Q.prototype.disconnect = function() {
		this.a.close();
		this.a = null
	};
	Q.prototype.h = function(a) {
		R.log(0, "Receive " + a.data, void 0);
		a = JSON.parse(a.data);
		if (a.clientId == this.c) this.g.onMessage(a)
	};
	var R = nb("mr.cast.ExtensionMessenger");
	var ub = /^(?:([^:/?#.]+):)?(?:\/\/(?:([^/?#]*)@)?([^/#?]*?)(?::([0-9]+))?(?=[/#?]|$))?([^?#]+)?(?:\?([^#]*))?(?:#([\s\S]*))?$/,
		vb = function(a, b) {
			if (a) {
				a = a.split("&");
				for (var c = 0; c < a.length; c++) {
					var d = a[c].indexOf("="),
						f = null;
					if (0 <= d) {
						var g = a[c].substring(0, d);
						f = a[c].substring(d + 1)
					} else g = a[c];
					b(g, f ? decodeURIComponent(f.replace(/\+/g, " ")) : "")
				}
			}
		};
	var wb = function(a, b) {
		this.h = this.j = this.c = "";
		this.i = null;
		this.l = this.m = "";
		this.a = !1;
		if (a instanceof wb) {
			this.a = void 0 !== b ? b : a.a;
			xb(this, a.c);
			this.j = a.j;
			yb(this, a.h);
			zb(this, a.i);
			Ab(this, a.m);
			b = a.g;
			var c = new S;
			c.g = b.g;
			b.a && (c.a = new y(b.a), c.c = b.c);
			Bb(this, c);
			Cb(this, a.l)
		} else a && (c = String(a).match(ub)) ? (this.a = !!b, xb(this, c[1] || "", !0), this.j = T(c[2] || ""), yb(this, c[3] || "", !0), zb(this, c[4]), Ab(this, c[5] || "", !0), Bb(this, c[6] || "", !0), Cb(this, c[7] || "", !0)) : (this.a = !!b, this.g = new S(null, 0, this.a))
	};
	wb.prototype.toString = function() {
		var a = [],
			b = this.c;
		b && a.push(U(b, Db, !0), ":");
		var c = this.h;
		if (c || "file" == b) a.push("//"), (b = this.j) && a.push(U(b, Db, !0), "@"), a.push(encodeURIComponent(String(c)).replace(/%25([0-9a-fA-F]{2})/g, "%$1")), c = this.i, null != c && a.push(":", String(c));
		if (c = this.m) this.h && "/" != c.charAt(0) && a.push("/"), a.push(U(c, "/" == c.charAt(0) ? Eb : Fb, !0));
		(c = this.g.toString()) && a.push("?", c);
		(c = this.l) && a.push("#", U(c, Gb));
		return a.join("")
	};
	var xb = function(a, b, c) {
			a.c = c ? T(b, !0) : b;
			a.c && (a.c = a.c.replace(/:$/, ""))
		},
		yb = function(a, b, c) {
			a.h = c ? T(b, !0) : b
		},
		zb = function(a, b) {
			if (b) {
				b = Number(b);
				if (isNaN(b) || 0 > b) throw Error("Bad port number " + b);
				a.i = b
			} else a.i = null
		},
		Ab = function(a, b, c) {
			a.m = c ? T(b, !0) : b
		},
		Bb = function(a, b, c) {
			b instanceof S ? (a.g = b, Hb(a.g, a.a)) : (c || (b = U(b, Ib)), a.g = new S(b, 0, a.a))
		},
		Cb = function(a, b, c) {
			a.l = c ? T(b) : b
		},
		T = function(a, b) {
			return a ? b ? decodeURI(a.replace(/%25/g, "%2525")) : decodeURIComponent(a) : ""
		},
		U = function(a, b, c) {
			return m(a) ? (a = encodeURI(a).replace(b,
				Jb), c && (a = a.replace(/%25([0-9a-fA-F]{2})/g, "%$1")), a) : null
		},
		Jb = function(a) {
			a = a.charCodeAt(0);
			return "%" + (a >> 4 & 15).toString(16) + (a & 15).toString(16)
		},
		Db = /[#\/\?@]/g,
		Fb = /[\#\?:]/g,
		Eb = /[\#\?]/g,
		Ib = /[\#\?@]/g,
		Gb = /#/g,
		S = function(a, b, c) {
			this.c = this.a = null;
			this.g = a || null;
			this.h = !!c
		},
		V = function(a) {
			a.a || (a.a = new y, a.c = 0, a.g && vb(a.g, function(b, c) {
				a.add(decodeURIComponent(b.replace(/\+/g, " ")), c)
			}))
		};
	S.prototype.add = function(a, b) {
		V(this);
		this.g = null;
		a = W(this, a);
		var c = this.a.get(a);
		c || this.a.set(a, c = []);
		c.push(b);
		this.c += 1;
		return this
	};
	S.prototype.remove = function(a) {
		V(this);
		a = W(this, a);
		return A(this.a.c, a) ? (this.g = null, this.c -= this.a.get(a).length, this.a.remove(a)) : !1
	};
	S.prototype.clear = function() {
		this.a = this.g = null;
		this.c = 0
	};
	var Kb = function(a, b) {
		V(a);
		b = W(a, b);
		return A(a.a.c, b)
	};
	e = S.prototype;
	e.forEach = function(a, b) {
		V(this);
		this.a.forEach(function(c, d) {
			r(c, function(c) {
				a.call(b, c, d, this)
			}, this)
		}, this)
	};
	e.I = function() {
		V(this);
		for (var a = this.a.u(), b = this.a.I(), c = [], d = 0; d < b.length; d++)
			for (var f = a[d], g = 0; g < f.length; g++) c.push(b[d]);
		return c
	};
	e.u = function(a) {
		V(this);
		var b = [];
		if (m(a)) Kb(this, a) && (b = Ja(b, this.a.get(W(this, a))));
		else {
			a = this.a.u();
			for (var c = 0; c < a.length; c++) b = Ja(b, a[c])
		}
		return b
	};
	e.set = function(a, b) {
		V(this);
		this.g = null;
		a = W(this, a);
		Kb(this, a) && (this.c -= this.a.get(a).length);
		this.a.set(a, [b]);
		this.c += 1;
		return this
	};
	e.get = function(a, b) {
		a = a ? this.u(a) : [];
		return 0 < a.length ? String(a[0]) : b
	};
	e.toString = function() {
		if (this.g) return this.g;
		if (!this.a) return "";
		for (var a = [], b = this.a.I(), c = 0; c < b.length; c++) {
			var d = b[c],
				f = encodeURIComponent(String(d));
			d = this.u(d);
			for (var g = 0; g < d.length; g++) {
				var k = f;
				"" !== d[g] && (k += "=" + encodeURIComponent(String(d[g])));
				a.push(k)
			}
		}
		return this.g = a.join("&")
	};
	var W = function(a, b) {
			b = String(b);
			a.h && (b = b.toLowerCase());
			return b
		},
		Hb = function(a, b) {
			b && !a.h && (V(a), a.g = null, a.a.forEach(function(a, b) {
				var c = b.toLowerCase();
				b != c && (this.remove(b), this.remove(c), 0 < a.length && (this.g = null, this.a.set(W(this, c), Ka(a)), this.c += a.length))
			}, a));
			a.h = b
		};
	var Lb = function(a, b, c, d, f, g, k, n, u, pa) {
		this.B = a;
		this.m = b || null;
		this.c = c || null;
		this.i = d || null;
		this.l = void 0 !== f ? f : null;
		this.a = g || null;
		this.j = k || null;
		this.C = n || !1;
		this.h = u || null;
		this.g = pa || null
	};
	Lb.prototype.toString = function() {
		var a = new wb;
		xb(a, "https");
		yb(a, "google.com");
		Ab(a, "/cast");
		var b = [];
		r(this.B, function(a) {
			var c = "__castAppId__=" + a.appId;
			a.capabilities && 0 < a.capabilities.length && (c = c + "(" + a.capabilities.join(","), c += ")");
			b.push(c)
		});
		this.m && b.push("__castClientId__=" + this.m);
		this.c && b.push("__castAutoJoinPolicy__=" + this.c);
		this.i && b.push("__castDefaultActionPolicy__=" + this.i);
		null != this.l && b.push("__castLaunchTimeout__=" + this.l);
		this.a && b.push("__dialAppName__=" + this.a);
		this.j && b.push("__dialPostData__=" +
			this.j);
		this.C && b.push("__castInvisibleSender__=true");
		this.h && (b.push("__castBroadcastNamespace__=" + this.h), b.push("__castBroadcastId__=" + Math.random()));
		this.g && b.push("__castBroadcastMessage__=" + encodeURIComponent(JSON.stringify(this.g)));
		Cb(a, b.join("/"));
		return a.toString()
	};
	var Mb = function() {
			this.a = {};
			this.c = {}
		},
		Nb = function(a, b, c) {
			var d = a.a[b];
			return d ? (d.status = c, d.media.forEach(function(b) {
				delete a.c[b.sessionId + "#" + b.mediaSessionId]
			}), delete a.a[b], !0) : !1
		},
		Pb = function(a, b) {
			var c = a.a[b.sessionId];
			if (c) return c.statusText = b.statusText, c.namespaces = b.namespaces || [], c.receiver.volume = b.receiver.volume, c;
			c = new chrome.cast.f(b.sessionId, b.appId, b.displayName, b.appImages, b.receiver);
			for (var d in b) "media" == d ? c.media = b.media.map(function(b) {
					b = Ob(a, b);
					b.h = !1;
					b.c = !0;
					return b
				}) :
				b.hasOwnProperty(d) && (c[d] = b[d]);
			return a.a[b.sessionId] = c
		},
		Ob = function(a, b) {
			var c = b.sessionId + "#" + b.mediaSessionId,
				d = a.c[c];
			d || (d = new chrome.cast.media.b(b.sessionId, b.mediaSessionId), a.c[c] = d, (a = a.a[b.sessionId]) && a.media.push(d));
			a = d;
			a.currentItemId = null;
			a.loadingItemId = null;
			a.preloadedItemId = null;
			for (var f in b) "items" != f && b.hasOwnProperty(f) && ("volume" == f ? (a.volume.level = b.volume.level, a.volume.muted = b.volume.muted) : a[f] = b[f]);
			f = na(["idleReason", "extendedStatus"]);
			for (c = f.next(); !c.done; c = f.next()) c =
				c.value, b.hasOwnProperty(c) || (a[c] = null);
			"currentTime" in b && (a.g = Date.now());
			if (a.playerState == chrome.cast.media.F.IDLE && null == a.loadingItemId) a.currentItemId = null, a.loadingItemId = null, a.preloadedItemId = null, a.items = null;
			else if (b.hasOwnProperty("items") && b.items) {
				f = [];
				var g = a.items;
				c = {};
				if (g)
					for (var k = 0; k < g.length; k++) c[g[k].itemId] = k;
				b = na(b.items);
				for (g = b.next(); !g.done; g = b.next()) {
					g = g.value;
					if (!g.media) {
						k = g.itemId;
						var n = a.items ? a.items[c[k]] : null;
						n && n.media ? g.media = n.media : k == a.currentItemId &&
							a.media && (g.media = a.media)
					}
					f.push(Qb(g))
				}
				a.items = f
			}
			return d
		},
		Rb = function(a, b) {
			delete a.c[b.sessionId + "#" + b.mediaSessionId];
			if (a = a.a[b.sessionId]) b = a.media.indexOf(b), -1 != b && a.media.splice(b, 1)
		},
		Qb = function(a) {
			var b = new chrome.cast.media.oa(a.media),
				c;
			for (c in a) a.hasOwnProperty(c) && (b[c] = a[c]);
			return b
		};
	var X = function() {
			this.l = new Q(this);
			this.c = null;
			this.T = new Mb;
			this.h = 0;
			this.fa = new Ra;
			this.m = new y;
			this.ga = !1;
			this.j = new y;
			this.C = new y;
			this.R = [];
			this.Pa = this.Ib.bind(this);
			this.g = null;
			this.B = 0;
			this.i = null;
			this.Oa = new K(this.Wa, 200, this);
			this.La = null
		},
		Sb = function(a) {
			var b = new chrome.cast.Error(chrome.cast.v.INVALID_PARAMETER, "Already requesting session");
			a && a(b)
		},
		Y = function(a, b, c, d) {
			c && Sa(a.fa, c);
			void 0 !== d ? b.sequenceNumber = d : (b.sequenceNumber = a.h, a.h = (a.h + 1) % 9007199254740992);
			d = tb(a.l, b);
			c && d && (a =
				Ta(a.fa, b.sequenceNumber), b = new chrome.cast.Error(chrome.cast.v.INVALID_PARAMETER, d), (a = a.a) && a(b))
		};
	X.prototype.P = function(a, b) {
		var c = this;
		t = this;
		this.c || (this.c = a, a.invisibleSender || (a = new PresentationRequest(Tb(this)), a.getAvailability().then(function(a) {
			a.onchange = function() {
				c.ga = !!a.value;
				c.c.receiverListener(a.value ? chrome.cast.M.AVAILABLE : chrome.cast.M.UNAVAILABLE)
			};
			a.onchange()
		}, function() {
			c.c.receiverListener(chrome.cast.M.AVAILABLE)
		}), a.onconnectionavailable = function(a) {
			Ub(c, a.connection)
		}, this.La = (l.navigator || null).presentation.defaultRequest = a, a.reconnect(chrome.cast.Ma).then(function(a) {
			Ub(c,
				a)
		}, oa)));
		b && b(void 0)
	};
	X.prototype.da = function(a) {
		a.navigator.presentation.defaultRequest = this.La
	};
	var Ub = function(a, b, c) {
			c = void 0 === c ? null : c;
			b.onclose = function(b) {
				a.g = null;
				switch (b.reason) {
					case "closed":
						Vb(a, chrome.cast.G.DISCONNECTED);
						break;
					case "error":
						c && (b = new chrome.cast.Error(chrome.cast.v.SESSION_ERROR), c && c(b))
				}
			};
			b.onterminate = function() {
				Vb(a, chrome.cast.G.STOPPED)
			};
			"connected" == b.state ? a.l.connect(b) : b.onconnect = function() {
				a.l.connect(b)
			}
		},
		Yb = function(a) {
			var b = Z;
			Wb.has(a.type) ? b.ga && (b.i ? (a.sessionId = b.i, Xb(b, null, a.type, a, function() {
				rb("Send Broadcast directly succeeded")
			}, function(a) {
				M.error("Send Broadcast directly failed with code " +
					a.code)
			})) : b.Oa.Jb(Tb(b, void 0, "urn:x-cast:com.google.cast.media", a))) : M.error("Unsupported broadcast message type - " + a.type)
		};
	X.prototype.Wa = function(a) {
		rb("Broadcast request " + a);
		(a = (new PresentationRequest(a)).getAvailability()) ? a.then(function() {
			rb("Broadcast succeeded")
		}, function() {
			M.log(2, "Broadcast failed", void 0)
		}): M.error("presentationRequest.getAvailability return undefined")
	};
	X.prototype.requestSession = function(a, b, c) {
		var d = this;
		this.g ? Sb(b) : (c = Tb(this, c), this.g = a, (new PresentationRequest(c.toString())).start().then(function(a) {
			Ub(d, a, b)
		}).catch(function(a) {
			d.g = null;
			a = new chrome.cast.Error("AbortError" == a.name || "NotAllowedError" == a.name ? chrome.cast.v.CANCEL : chrome.cast.v.SESSION_ERROR);
			b && b(a)
		}))
	};
	var Tb = function(a, b, c, d) {
		var f = null,
			g = null,
			k = b || a.c.sessionRequest,
			n = k.dialRequest;
		n && (f = n.appName, (g = n.launchParameter) && !g.match(Zb) && (g = hb(g)));
		var u = [];
		u.push({
			appId: k.appId,
			capabilities: k.capabilities
		});
		b || r(a.c.additionalSessionRequests, function(a) {
			u.push({
				appId: a.appId,
				capabilities: a.capabilities
			})
		});
		return (new Lb(u, a.l.c, a.c.autoJoinPolicy, a.c.defaultActionPolicy, k.requestSessionTimeout, f, g, a.c.invisibleSender, c, d)).toString()
	};
	X.prototype.ia = function(a, b, c, d) {
		var f = this;
		this.B++;
		Xb(this, null, b, a, function(a) {
			f.B--;
			a.c = !0;
			c && c(a)
		}, function(a) {
			f.B--;
			d(a)
		}, chrome.cast.media.timeout.load)
	};
	X.prototype.a = function(a, b, c, d, f, g) {
		var k = this;
		Xb(this, a, b, c, function(a) {
			k.ya(a);
			d && d(void 0)
		}, f, g)
	};
	var Xb = function(a, b, c, d, f, g, k) {
		d.type = c;
		null != b && (d.mediaSessionId = b.mediaSessionId, d.sessionId = b.sessionId);
		a.Ea(d, function(a) {
			a.status && 1 == a.status.length ? f && f(a.status[0]) : (a = new chrome.cast.Error(chrome.cast.v.SESSION_ERROR), g && g(a))
		}, g, k)
	};
	e = X.prototype;
	e.setReceiverVolume = function(a, b, c, d) {
		b.sessionId = a;
		Y(this, new P("v2_message", b, void 0, chrome.cast.timeout.setReceiverVolume), new N(this.h, c, d, chrome.cast.timeout.sendCustomMessage))
	};
	e.ca = function(a) {
		var b = this;
		(new PresentationRequest(Tb(this))).reconnect(chrome.cast.fb + a).then(function(a) {
			Ub(b, a)
		}, oa)
	};
	e.leaveSession = function(a, b, c) {
		Y(this, new P("leave_session", a, void 0, chrome.cast.timeout.leaveSession), new N(this.h, b, c, chrome.cast.timeout.leaveSession))
	};
	e.hc = function(a, b, c) {
		Y(this, new P("app_message", a, void 0, chrome.cast.timeout.sendCustomMessage), new N(this.h, b, c, chrome.cast.timeout.sendCustomMessage))
	};
	e.Ea = function(a, b, c, d) {
		Y(this, new P("v2_message", a, void 0, d), new N(this.h, b, c, d))
	};
	var $b = function(a, b, c) {
		var d = a.get(b);
		d || (d = new jb, a.set(b, d));
		d.add(c)
	};
	e = X.prototype;
	e.Hb = function(a, b) {
		$b(this.m, a, b)
	};
	e.gc = function(a, b) {
		(a = this.m.get(a)) && a.remove(b)
	};
	e.X = function(a) {
		this.R.push(a)
	};
	e.aa = function(a) {
		a = this.R.indexOf(a);
		0 <= a && this.R.splice(a, 1)
	};
	e.Eb = function(a, b, c) {
		var d = this.j.get(a);
		d || (d = new y, this.j.set(a, d));
		a = d.get(b);
		a || (a = new jb, d.set(b, a));
		a.add(c)
	};
	e.dc = function(a, b, c) {
		(a = this.j.get(a)) && (b = a.get(b)) && b.remove(c)
	};
	e.W = function(a, b) {
		$b(this.C, a, b)
	};
	e.Z = function(a, b) {
		(a = this.C.get(a)) && a.remove(b)
	};
	e.Fb = function(a, b) {
		-1 == a.a.indexOf(b) && a.a.push(b)
	};
	e.ec = function(a, b) {
		b = a.a.indexOf(b); - 1 != b && a.a.splice(b, 1)
	};
	e.ya = function(a) {
		if (a.c) {
			var b = a.playerState != chrome.cast.media.F.IDLE || null != a.loadingItemId;
			a.a.forEach(function(a) {
				a(b)
			});
			b || Rb(this.T, a)
		} else if (!(0 < this.B)) {
			a.c = !0;
			var c = this.C.get(a.sessionId);
			c && x(c.w(), function(b) {
				b(a)
			})
		}
	};
	e.Ib = function(a) {
		return Ob(this.T, a)
	};
	var Vb = function(a, b) {
		if (a.i) {
			var c = a.i;
			a.i = null;
			a.l.disconnect();
			var d = b != chrome.cast.G.STOPPED;
			Nb(a.T, c, b) && (a.j.remove(c), a.C.remove(c), b = a.m.get(c)) && (a.m.remove(c), x(b.w(), function(a) {
				a(d)
			}))
		}
	};
	X.prototype.onMessage = function(a) {
		switch (a.type) {
			case "new_session":
			case "update_session":
				a.message = Pb(this.T, a.message);
				break;
			case "v2_message":
				var b = a.message;
				b && "MEDIA_STATUS" == b.type && b.status && (b.status = b.status.map(this.Pa))
		}
		if (b = Ta(this.fa, a.sequenceNumber)) "error" == a.type ? (b = b.a) && b(a.message) : (b = b.g) && b(a.message);
		if (b = a.message) switch (a.type) {
			case "receiver_action":
				ac(this, b);
				break;
			case "new_session":
				this.i = b.sessionId;
				this.g ? (this.g(b), this.g = null) : this.c && this.c.sessionListener(b);
				break;
			case "update_session":
				bc(this, b);
				break;
			case "app_message":
				cc(this, b);
				break;
			case "v2_message":
				"MEDIA_STATUS" == b.type && b.status.forEach(this.ya.bind(this));
				break;
			case "custom_dial_launch":
				dc(this, a.sequenceNumber, b)
		}
	};
	var bc = function(a, b) {
			(a = a.m.get(b.sessionId)) && x(a.w(), function(a) {
				a(!0)
			})
		},
		ac = function(a, b) {
			a.R.forEach(function(a) {
				a(b.receiver, b.action)
			})
		},
		cc = function(a, b) {
			(a = a.j.get(b.sessionId)) && (a = a.get(b.namespaceName)) && x(a.w(), function(a) {
				a(b.namespaceName, b.message)
			})
		},
		ec = function(a, b, c) {
			Y(a, new P("custom_dial_launch", c, void 0, chrome.cast.timeout.sendCustomMessage), null, b)
		},
		dc = function(a, b, c) {
			a.c.customDialLaunchCallback ? a.c.customDialLaunchCallback(c).then(function(c) {
					ec(a, b, c)
				}, function() {
					ec(a, b)
				}) :
				ec(a, b)
		},
		Zb = /^([0-9a-zA-Z+/]{4})*(([0-9a-zA-Z+/]{2}==)|([0-9a-zA-Z+/]{3}=))?$/,
		Wb = new Set(["PRECACHE"]),
		Z = new X,
		M = nb("mr.cast.Api");
	chrome.cast.P = function(a, b, c) {
		Z.P(a, b, c)
	};
	q("chrome.cast.initialize", chrome.cast.P);
	chrome.cast.Lb = function(a, b, c) {
		var d = new X;
		d.P(a, b, c);
		return d
	};
	q("chrome.cast.initializeWithContext", chrome.cast.Lb);
	chrome.cast.da = function(a) {
		Z.da(a)
	};
	q("chrome.cast.setPageContext", chrome.cast.da);
	chrome.cast.requestSession = function(a, b, c) {
		Z.requestSession(a, b, c)
	};
	q("chrome.cast.requestSession", chrome.cast.requestSession);
	chrome.cast.Qb = function(a) {
		Yb(new chrome.cast.media.hb(a))
	};
	q("chrome.cast.precache", chrome.cast.Qb);
	chrome.cast.ca = function(a) {
		chrome.cast.Da(Z, a)
	};
	q("chrome.cast.requestSessionById", chrome.cast.ca);
	chrome.cast.Da = function(a, b) {
		a.ca(b)
	};
	q("chrome.cast.requestSessionByIdWithContext", chrome.cast.Da);
	chrome.cast.X = function(a) {
		Z.X(a)
	};
	q("chrome.cast.addReceiverActionListener", chrome.cast.X);
	chrome.cast.aa = function(a) {
		Z.aa(a)
	};
	q("chrome.cast.removeReceiverActionListener", chrome.cast.aa);
	chrome.cast.Ob = function() {};
	q("chrome.cast.logMessage", chrome.cast.Ob);
	chrome.cast.ic = function(a, b) {
		b()
	};
	q("chrome.cast.setCustomReceivers", chrome.cast.ic);
	chrome.cast.jc = function(a, b) {
		b()
	};
	q("chrome.cast.setReceiverDisplayStatus", chrome.cast.jc);
	chrome.cast.unescape = function(a) {
		return -1 != a.indexOf("&") ? "document" in l ? Fa(a) : Ga(a) : a
	};
	q("chrome.cast.unescape", chrome.cast.unescape);
	chrome.cast.isAvailable = !1;
	q("chrome.cast.isAvailable", chrome.cast.isAvailable);
	chrome.cast.Ia = !1;
	chrome.cast.ea = function() {
		if (!chrome.cast.Ia) {
			chrome.cast.Ia = !0;
			chrome.cast.isAvailable = !0;
			var a = window.__onGCastApiAvailable;
			a && "function" == typeof a && a(!0)
		}
	};
	"complete" == document.readyState ? chrome.cast.ea() : (window.addEventListener("load", chrome.cast.ea, !1), window.addEventListener("DOMContentLoaded", chrome.cast.ea, !1));
}).call(this);