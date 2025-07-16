"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
	["25292"], {
		517858: function(e, t, n) {
			n.d(t, {
				C3: () => o,
				GW: () => i
			});
			let r = (0, n(818083).B)({
				kind: "user",
				id: "2024-08_keyword_filter_upsells",
				label: "Language Filter Upsells",
				defaultConfig: {
					enabled: !1
				},
				treatments: [{
					id: 1,
					label: "Enable Upsell for Keyword Language Filters",
					config: {
						enabled: !0
					}
				}]
			});

			function i(e) {
				let {
					location: t
				} = e, {
					enabled: n
				} = r.getCurrentConfig({
					location: t
				}, {
					autoTrackExposure: !0
				});
				return n
			}

			function o(e) {
				let {
					location: t
				} = e, {
					enabled: n
				} = r.useExperiment({
					location: t
				}, {
					autoTrackExposure: !0
				});
				return n
			}
		},
		592204: function(e, t, n) {
			n.d(t, {
				Xo: () => c,
				pB: () => a
			});
			var r = n(818083),
				i = n(517858);
			let o = (0, r.B)({
				kind: "user",
				id: "2024-04_keyword_filter_experiment",
				label: "Replace registered keywords with asterisks",
				defaultConfig: {
					enabled: !1
				},
				treatments: [{
					id: 1,
					label: "Enable Keyword Filter",
					config: {
						enabled: !0
					}
				}]
			});

			function c(e) {
				let {
					location: t
				} = e, n = (0, i.C3)({
					location: t
				});
				return o.useExperiment({
					location: t
				}, {
					autoTrackExposure: !0
				}).enabled || n
			}

			function a(e) {
				let {
					location: t
				} = e, n = (0, i.GW)({
					location: t
				});
				return o.getCurrentConfig({
					location: t
				}).enabled || n
			}
		},
		131681: function(e, t, n) {
			n.d(t, {
				U: () => i
			});
			var r = n(695346);
			let i = () => {
				var e;
				let {
					profanity: t = !1,
					slurs: n = !1,
					sexualContent: i = !1
				} = r.gw.getSetting();
				return null != (e = t || n || i) && e
			}
		},
		803141: function(e, t, n) {
			n.d(t, {
				Z: () => b
			}), n(388685), n(539854);
			var r = n(750041),
				i = n(594174),
				o = n(131681),
				c = n(932941),
				a = n(363072),
				s = n(526761);

			function u(e, t, n) {
				return t in e ? Object.defineProperty(e, t, {
					value: n,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : e[t] = n, e
			}
			let l = null;

			function g() {
				let e = (0, o.U)() ? [...c.pF, ...c.wq, ...c.$u] : [],
					t = i.default.getCurrentUser();
				if (null == t ? void 0 : t.isStaff()) {
					let t = n(932941).Bk;
					e.push(...t)
				}(l = new a.B).addWords(e)
			}

			function k() {
				g()
			}

			function d() {
				g()
			}

			function f(e) {
				let {
					local: t,
					settings: n
				} = e;
				if (!t || n.type !== s.yP.PRELOADED_USER_SETTINGS) return !1;
				null != l && l.clear(), g()
			}
			class h extends r.Z {
				loadCache() {
					let e = this.readSnapshot(h.LATEST_SNAPSHOT_VERSION);
					null != e && (l = null != e.keywordTrie ? a.B.fromSnapshot(e.keywordTrie) : null)
				}
				takeSnapshot() {
					return {
						version: h.LATEST_SNAPSHOT_VERSION,
						data: {
							keywordTrie: l
						}
					}
				}
				getKeywordTrie() {
					return l
				}
				initializeForKeywordTests() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [];
					! function() {
						let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [];
						null == l && (l = new a.B), l.addWords(e)
					}(e)
				}
				constructor() {
					super({
						CONNECTION_OPEN: k,
						CONNECTION_OPEN_SUPPLEMENTAL: k,
						CACHE_LOADED: () => this.loadCache(),
						OVERLAY_INITIALIZE: d,
						USER_SETTINGS_PROTO_UPDATE: f
					})
				}
			}
			u(h, "displayName", "KeywordFilterStore"), u(h, "LATEST_SNAPSHOT_VERSION", 2);
			let b = new h
		},
		932941: function(e, t, n) {
			n.d(t, {
				$u: () => i,
				Bk: () => c,
				pF: () => r,
				wq: () => o
			});
			let r = ["asscock", "assfuck", "assfucker", "assnigger", "assrape", "b!tch", "b1tch", "batshit", "bitch", "bitchass", "bitchtits", "boyfucking", "boypussy", "bullshit", "buttfuck", "buttfucka", "buttfucker", "buttplay", "buttsex", "c|_|nt", "camel fucker", "camslut", "camwhore", "camwhores", "choad", "chode", "clitfuck", "clusterfuck", "cnut", "cockmongler", "cockmongruel", "cockmuncher", "cocknugget", "cocksucka", "cocksucker", "cocksuckers", "cocksuckin", "coon ass", "cousin-fucker", "cowfuck", "cucklord", "cuckold", "cuckshit", "cucktard", "cumslut", "cunt", "cuntrag", "dickface", "dickfucker", "dipshit", "dogfucking", "dumbfuck", "f4gg0t*", "f4ggot*", "facefuck", "facefucked", "faggot*", "faggotcock", "fagit", "fagtard", "fat bitch", "fcknig", "feggit", "feggot", "finger-fuck", "fingerfuck", "fistfuck", "fking", "fucc", "fuck", "f\xfack", "f\xfbck", "f\xfcck", "fuckable", "fuckass", "fuckbag", "fuckboy", "fuckbuddies", "fuckbuddy", "fucked", "fucker", "fuckery", "fuckface", "fuckhead", "fuckhole", "fucking", "fucknig", "fucknut", "fucknutt", "fuckoff", "fuckpigs", "fucktard", "fucktart", "fuckup", "fuckwad", "fuckwitt", "fuicking", "fuk", "gayfuck", "homodumbshit", "k|_|nt", "kyke", "manslut", "manwhore", "mongtard", "mothafucka", "mothafuckin", "motherfucker", "motherfucking", "n!bb3r*", "n!bber*", "n!gg3r*", "n!gger*", "n!kk3r*", "n!kker*", "n!qq3r*", "n!qqer*", "n|bb3r*", "n|bber*", "n|gg3r*", "n|gger*", "n|kk3r*", "n|kker*", "n|qq3r*", "n|qqer*", "n1bb3r*", "n1bber*", "n1gg", "n1gg3r*", "n1gger*", "n1igger*", "n1kk3r*", "n1kker*", "n1qq3r*", "n1qqer*", "nibb3r", "nibber", "niccer", "nick gur", "nigaboo", "nigg", "nigg3r", "niggar", "niggeer", "nigger*", "niggir", "niggor", "niggur", "niggurs", "nikk3r", "nikker", "niqq3r", "niqqer", "pu$$y", "pussy licking", "pussyjob", "pussylicking", "q|_|nt", "queerhole", "qunt", "r3t4rd", "r3tar", "retard", "rētard", "retarde", "retarded", "retardi", "retards", "retart", "retrad", "ritard", "ritarded", "rtard", "s-h-i-t", "s-hit", "scumfuck", "sh-it", "sheepfucker", "shit", "shitass", "shitbag", "shitbrains", "shitcunt", "shitdick", "shiteaters", "shitface", "shithead", "shithole", "shitshow", "shitskin", "shitspitter", "shitstain", "shitty", "shlt", "skullfuck", "slut", "slutwife", "spergtard", "spicshit", "spictard", "suck my dick", "throatfuck", "throatfucked", "throatfucking", "titfuck", "titfucking", "titfucks", "tittfuck", "tittyfuck", "tittyfucking", "tittyfucks", "to fuck", "uglyfuck", "whore"],
				i = ["69ing", "amateur porn", "anal sex", "analsex", "anilingus", "anillingus", "assbanger", "asscock", "assfuck", "assfucker", "asslicker", "asslicking", "assnigger", "assrape", "auto erotic", "autoerotic", "autofellatio", "ball sucking", "balls deep", "bangbros", "barely legal", "bdsm", "bean flicker", "beat my meat", "beaver lips", "beef curtain", "big black cock", "big black dick", "big breasted women", "big cock", "big dick", "big knockers", "big milkers", "big tits", "bislut", "black cock", "blacked raw", "blow job", "blowbang", "blowie", "blowj", "blowjob", "blowjobs", "blumpkin", "boipussy", "bondage", "boner", "boyfucking", "boypussy", "brazzers", "bukake", "bukakke", "bukkake", "bukkakese", "bunnygirl", "butt plug", "buttfuck", "buttfucka", "buttfucker", "buttplay", "buttsex", "c|_|nt", "c0ck", "camel fucker", "camel toe", "cameltoe", "camgirl", "camslut", "camwhore", "camwhores", "chaturbate", "chicks with dicks", "choad", "chode", "clitfuck", "clitless", "cnut", "cock", "cockface", "cockgobbler", "cockhead", "cockhole", "cockmeat", "cocksucka", "cocksucker", "cocksuckers", "cocksuckin", "coochie", "creampie", "creampied", "creampieing", "creampies", "cuckholding", "cuckholdry", "cucking", "cuckish", "cucklord", "cuckold", "cuckolding", "cuckolds", "cuckshed", "cucky", "cum", "cumed", "cumguzzler", "cumhole", "cuming", "cummed", "cummers", "cummies", "cumming", "cumshot", "cumshots", "cumskin", "cumslut", "cumsucking", "cumswallow", "cumtart", "cunnilingus", "cunnillingus", "cunt", "cuntrag", "deep throat", "deep throating", "deep-throat", "deep-throated", "deep-throating", "deepthroat", "deepthroated", "deepthroating", "deepthroats", "dick-sneeze", "dickcheese", "dickface", "dickfucker", "dickgirls", "dickhole", "dickjuice", "dicklicker", "dickmilk", "dickride", "dickriding", "dickslap", "dicksucker", "dildo", "dildoing", "dilfs", "dog style", "dogfucking", "doggie style", "doggiestyle", "doggy stile", "doggy style", "doggystyle", "donkey punch", "double dong", "double penetration", "eat you out", "eat your ass", "eating ass", "ecchi", "ejaculate", "ejaculating", "ero guro", "erotic asphyxiation", "extremetube", "facefuck", "facefucked", "felatio", "felch", "felching", "fellate", "fellatio", "feltch", "feltching", "female squirting", "femdom", "finger-bang", "finger-banging", "finger-fuck", "fingerbang", "fingerbanged", "fingerbanging", "fingerblast", "fingerblasting", "fingered", "fingerfuck", "fingering", "fistfuck", "fisting", "fking", "foot fetish", "foreskin", "fucc", "f\xfack", "f\xfbck", "f\xfcck", "fuck her", "fuck him", "fuckable", "fuckass", "fuckbag", "fuckbuddies", "fuckbuddy", "fuckface", "fuckhole", "fuckpigs", "fuk", "gang bang", "gang rape", "gangbang", "gangrape", "giant cock", "gloryhole", "golden shower", "goopchute", "goregasm", "group sex", "hand job", "handjob", "hardcore porn", "hentai", "Hi! I love sex", "homoerotic", "hornpub", "horny", "hot bi babe", "hotwife", "hubporn", "jack off", "jacking off", "jerk off instructions", "jerking off", "jerkoff", "jizz", "jizzle", "k|_|nt", "kinkiest", "kinkster", "kinky", "limpdick", "livesex", "lolicon", "mangina", "manslut", "manwhore", "masochism", "menage a trois", "micropenis", "milf", "milfs", "missionary position", "mommy milkers", "my dick", "My naked photos", "My sexy photos", "naughtyamerica", "nubiles", "nudes", "nuvid", "oralsex", "orgasm", "orgies", "orgy", "paypig", "piss play", "pissflaps", "pissing porn", "pompoir", "ponyplay", "poon", "poop chute", "poopchute", "pornhub", "pornmd", "porno", "pornography", "pornstar", "pornstars", "porntube", "pov porn", "precum", "precumming", "precums", "pregnancy fetish", "prone bone", "pu$$y", "pussy licking", "pussyjob", "pussylicking", "q|_|nt", "queef", "qunt", "rapeplay", "rawdog", "reality kings", "redtube", "reverse cowgirl", "rimjob", "rimjobworld", "rule 34", "scatplay", "sex toy", "sexbot", "sextape", "shaved beaver", "shaved pussy", "shemale", "shitcunt", "shitdick", "shotacon", "sit on my face", "skeet", "skullfuck", "slampig", "slut", "slutwife", "sodomise", "sodomite", "sodomize", "spankbang", "spankbank", "suck clit", "suck my clit", "suck my dick", "suck my pubes", "teamskeet", "tentacle porn", "throatfuck", "throatfucked", "throatfucking", "throatpie", "thumbzilla", "tiddays", "tiddayz", "tiddes", "tiddie", "tiddied", "tiddies", "tiddy", "tiddys", "titfuck", "titfucking", "titfucks", "tities", "titjob", "tits", "tittay", "titted", "tittes", "tittfuck", "titti", "tittie", "tittied", "titties", "tittiez", "tittle", "titts", "titty", "tittyfuck", "tittyfucking", "tittyfucks", "tittys", "tity", "tnaflix", "to fuck", "tribadism", "tribbing", "upskirt", "urethra play", "vibrator", "voyeurism", "vrporn", "wank", "wankjob", "whore", "xhamster", "xnxx", "xtube", "xvideos", "youporn"],
				o = ["africoon", "americoon", "arabshits", "assfucker", "asshat", "asshole", "assnigger", "assrape", "asswipe", "autist", "b!tch", "bamboo coon", "betacuck", "blmtard", "brown towel heads", "buttfucka", "buttfucker", "c|_|nt", "camslut", "camwhore", "camwhores", "china-man", "chinaman", "chinamen", "chinc", "chinese wetback", "chink", "cockknocker", "cockknoker", "cockmongler", "cockmongruel", "cockmuncher", "cocknocker", "cocknugget", "cocksucka", "cocksucker", "cocksuckers", "cocksuckin", "coon ass", "cotton picker", "cousin-fucker", "crab rangook", "crabrangook", "cuck", "cuckold", "cucktard", "cumslut", "cunt", "cuntrag", "dipshit", "dogfucking", "dot head", "dumbfuck", "dune coon", "dunecoon", "f4gg0t*", "f4ggot*", "f4gs", "fag", "fagbag", "fagg", "faggot*", "faggotcock", "fagit", "fags", "fagtard", "fat bitch", "feggit", "feggot", "femenazis", "feminazi", "femtards", "fuckboy", "fucker", "fuckface", "fuckhead", "fucknig", "fuckoff", "fuckpigs", "fucktard", "fucktart", "fuckwad", "fuckwitt", "gas the kikes", "gayfuck", "gaylord", "gaytard", "gaywad", "goatfucker", "gook", "gookanese", "hindoo", "homodumbshit", "jackass", "jappos", "japs", "jerkoff", "jewbag", "jewtard", "jigaboo", "jigarooni", "jiggabo", "jiggaboo", "jiggers", "jijjiboo", "joo shill", "k|_|nt", "kill yourself", "kneegrow", "kyke", "kys", "ladyboy", "librtard", "libtard", "libturd", "lolspergs", "manslut", "manwhore", "mentally retarded", "mongaloid", "monglet", "mongloid", "mongoloid", "mongreloids", "mongtard", "mothafucka", "mothafuckin", "motherfucker", "motherfucking", "musloid chimps", "musloids", "n i g g", "n!bb3r*", "n!bber*", "n!gg3r*", "n!gger*", "n!kk3r*", "n!kker*", "n!qq3r*", "n!qqer*", "n|bb3r*", "n|bber*", "n|gg3r*", "n|gger*", "n|kk3r*", "n|kker*", "n|qq3r*", "n|qqer*", "n1bb3r*", "n1bber*", "n1g", "n1gg", "n1gg3r*", "n1gger*", "n1igger*", "n1kk3r*", "n1kker*", "n1qq3r*", "n1qqer*", "negroid", "negros", "neomongloids", "nibb3r", "nibber", "niccer", "nick gur", "nig nog", "nigaboo", "nigar", "nigette", "nigg", "nigg", "nigg3r", "niggar", "nigge", "niggeer", "nigger*", "niggies", "niggin", "niggir", "nigglet", "nigglets", "niggor", "niggr", "niggress", "niggs", "niggur", "niggurs", "niglet", "nignog", "nigor", "nigr", "nigre", "nigress", "nigro", "nigs", "nikk3r", "nikker", "niponese", "niqq3r", "niqqer", "paki", "phag", "phaggot", "pickaninny", "pinkaloid", "poofter", "pooinloo", "poojeet", "porch monkey", "porch monkies", "pu$$y", "q|_|nt", "queerbag", "queerhole", "qunt", "r3t4rd", "r3tar", "rapefugee", "reatard", "reatarded", "retard", "rētard", "retardation", "retarde", "retarded", "retardi", "retards", "retart", "retrad", "ritard", "ritarded", "rotten joo", "rtard", "sand monkey", "sand nigger", "sandnegroes", "sandnigers", "sandniggs", "sandnogs", "schizoid", "scumfuck", "she-man", "sheepfucker", "shekelnose", "shemale", "shitbag", "shitbrains", "shitcunt", "shiteaters", "shitface", "shithead", "shitskin", "shitspitter", "shitstain", "skank", "skanky", "slampig", "slant eye", "slantey-eye'd", "slut", "slutwife", "socket face", "sperg", "sperglord", "spergouts", "spergs", "spergtard", "spic", "spick", "spickaboo", "spicks", "spicshit", "spictard", "spigger", "spik", "squinties", "suck my dick", "that ho over there", "that hoe over there", "the orientals", "towelhead", "towel head", "towel-head", "trannie", "tranny", "turkoids", "turkroach", "uglyfuck", "wanker", "wankjob", "wetback", "wetblack", "whigger", "whore", "wigger", "zipperhead"],
				c = ["hunter2", "frik"]
		},
		141106: function(e, t, n) {
			n.d(t, {
				BD: () => s,
				dQ: () => i,
				jO: () => u
			}), n(413496), n(433524), n(35282);
			var r, i = ((r = {})[r.ExactMatch = 0] = "ExactMatch", r[r.PrefixMatch = 1] = "PrefixMatch", r);
			let o = e => RegExp("\\p{P}", "gu").test(null != e ? e : "") || " " === e || "" === e,
				c = (e, t, n) => {
					if (n - t > e.length) return !1;
					let r = e.charAt(t - 1),
						i = e.charAt(n + 1);
					return o(r) && o(i)
				},
				a = (e, t) => o(e.charAt(t - 1)),
				s = (e, t, n, r) => 1 === r ? a(e, t) : c(e, t, n),
				u = (e, t, n, r) => {
					if (0 === r) return {
						start: t,
						end: n,
						keyword: e.substring(t, n + 1)
					};
					let i = n;
					for (; i < e.length - 1 && !o(e.charAt(i + 1));) i++;
					return {
						start: t,
						end: i,
						keyword: e.substring(t, i + 1)
					}
				}
		},
		603158: function(e, t, n) {
			n.d(t, {
				F: () => i
			}), n(413496), n(433524), n(35282);
			let r = function(e) {
				for (var t = 1; t < arguments.length; t++) {
					var n = null != arguments[t] ? arguments[t] : {},
						r = Object.keys(n);
					"function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
						return Object.getOwnPropertyDescriptor(n, e).enumerable
					}))), r.forEach(function(t) {
						var r;
						r = n[t], t in e ? Object.defineProperty(e, t, {
							value: r,
							enumerable: !0,
							configurable: !0,
							writable: !0
						}) : e[t] = r
					})
				}
				return e
			}({}, {
				"-": "-",
				" ": " "
			}, {
				"[": " ",
				"]": " ",
				"(": " ",
				")": " ",
				"|": " ",
				"~": " "
			}, {
				"​": "",
				"‌": "",
				"‍": "",
				"‎": "",
				"\uFEFF": ""
			}, {
				"|": " "
			});

			function i(e) {
				let t = "";
				for (let n = 0; n < e.length; n++) {
					let i = e[n];
					null != r[i] ? t += r[i] : RegExp("[\\p{Pd}\\p{Pc}\\p{Po}]", "gu").test(i) ? t += " " : t += i
				}
				return t.toLowerCase()
			}
		},
		363072: function(e, t, n) {
			n.d(t, {
				B: () => a
			});
			var r = n(141106);

			function i(e, t, n) {
				return t in e ? Object.defineProperty(e, t, {
					value: n,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : e[t] = n, e
			}
			let o = e => "*" === e.charAt(e.length - 1) ? r.dQ.PrefixMatch : r.dQ.ExactMatch;
			class c {
				_internalAdd(e, t, n) {
					let r = e.charAt(0),
						i = this.suffix[r];
					null == i && (i = new c, this.suffix[r] = i, null != n ? i.value = n.slice(0, n.length - e.length + 1) : i.value = r), e.length > 1 && "*" !== e.charAt(1) ? i._internalAdd(e.substring(1), t, null != n ? n : e) : (i.strategy = o(t), i.isWord = !0)
				}
				add(e) {
					this._internalAdd(e, e)
				}
				constructor() {
					i(this, "isWord", void 0), i(this, "value", void 0), i(this, "suffix", {}), i(this, "strategy", void 0), this.isWord = null, this.value = null, this.suffix = {}, this.strategy = r.dQ.ExactMatch
				}
			}
			class a {
				static fromSnapshot(e) {
					let t = new a;
					return t.trie = e.trie, t
				}
				search(e) {
					let t = this.trie,
						n = null,
						i = null,
						o = {};
					for (let s = 0; s <= e.length; s++)
						if (n = e.charAt(s), (t = null != (i = t.suffix[n]) ? i : null != this.trie.suffix[n] ? this.trie.suffix[n] : this.trie).isWord) {
							var c, a;
							let n = t.strategy,
								i = s + 1 - (null != (a = null == (c = t.value) ? void 0 : c.length) ? a : 0),
								u = s;
							if ((0, r.BD)(e, i, u, n)) {
								let t = (0, r.jO)(e, i, u, n);
								(null == o[t.start] || o[t.start].end < t.end) && (o[t.start] = t)
							}
						} return o
				}
				addWord(e) {
					null == this.trie && (this.trie = new c), this.trie.add(e)
				}
				addWords(e) {
					e.forEach(e => this.addWord(e))
				}
				clear() {
					this.trie = new c
				}
				constructor() {
					i(this, "trie", void 0), this.trie = new c
				}
			}
		},
		202131: function(e, t, n) {
			n.d(t, {
				N: () => u
			}), n(388685), n(35282), n(642613);
			var r = n(626135),
				i = n(960048),
				o = n(592204),
				c = n(803141),
				a = n(603158),
				s = n(981631);

			function u(e, t) {
				(0, o.pB)({
					location: "keyword_substituted_content"
				});
				try {
					let n = function(e) {
						var t;
						let n = c.Z.getKeywordTrie();
						if ("" === e) return [];
						let r = (0, a.F)(e).toLowerCase();
						return Object.values(null != (t = null == n ? void 0 : n.search(r)) ? t : {})
					}(e);
					if (0 === n.length) return e;
					return n.forEach(e => {
						r.default.track(s.rMx.KEYWORD_FILTER_MATCH, {
							message_id: null == t ? void 0 : t.messageId,
							channel_id: null == t ? void 0 : t.channelId,
							author_id: null == t ? void 0 : t.authorId,
							keyword: e.keyword
						})
					}), n.sort((e, t) => t.start - e.start).reduce((e, n) => (function(e, t, n) {
						let r = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
							i = Math.max(t, 0),
							o = Math.min(n, e.length - 1),
							c = r ? "\\*" : "*",
							a = [...e.substring(i, o + 1)].map(e => " " === e ? " " : c).join("");
						return "".concat(e.substring(0, i)).concat(a).concat(e.substring(o + 1))
					})(e, n.start, n.end, null == t ? void 0 : t.escapeReplacement), e)
				} catch (t) {
					return i.Z.captureException(t, {
						tags: {
							app_context: "keyword_filtering"
						}
					}), e
				}
			}
		},
		937889: function(e, t, n) {
			n.d(t, {
				ZP: () => d,
				k$: () => f,
				p6: () => k,
				rs: () => g
			}), n(388685), n(781311), n(704826), n(35282), n(865427);
			var r = n(830121),
				i = n(202131),
				o = n(454585),
				c = n(408433),
				a = n(960048),
				s = n(981631);
			let u = new Set([s.hBH.IMAGE, s.hBH.GIFV]),
				l = new Set(["strong", "em", "u", "text", "inlineCode", "s", "spoiler"]);

			function g(e, t) {
				var n, r, i;
				let o = k({
						channelId: e.channel_id,
						messageId: e.id,
						renderOptions: t
					}),
					c = null != e.webhookId;
				return r = function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = null != arguments[t] ? arguments[t] : {},
							r = Object.keys(n);
						"function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
							return Object.getOwnPropertyDescriptor(n, e).enumerable
						}))), r.forEach(function(t) {
							var r;
							r = n[t], t in e ? Object.defineProperty(e, t, {
								value: r,
								enumerable: !0,
								configurable: !0,
								writable: !0
							}) : e[t] = r
						})
					}
					return e
				}({}, o), i = i = {
					allowLinks: c || o.allowLinks,
					allowEmojiLinks: c,
					mentionChannels: e.mentionChannels,
					soundboardSounds: null != (n = e.soundboardSounds) ? n : []
				}, Object.getOwnPropertyDescriptors ? Object.defineProperties(r, Object.getOwnPropertyDescriptors(i)) : (function(e, t) {
					var n = Object.keys(e);
					if (Object.getOwnPropertySymbols) {
						var r = Object.getOwnPropertySymbols(e);
						n.push.apply(n, r)
					}
					return n
				})(Object(i)).forEach(function(e) {
					Object.defineProperty(r, e, Object.getOwnPropertyDescriptor(i, e))
				}), r
			}

			function k(e) {
				let {
					channelId: t,
					messageId: n,
					renderOptions: r
				} = e;
				return {
					channelId: t,
					messageId: n,
					allowLinks: !!r.allowLinks,
					allowDevLinks: !!r.allowDevLinks,
					allowGameMentions: !!r.allowGameMentions,
					formatInline: !!r.formatInline,
					noStyleAndInteraction: !!r.noStyleAndInteraction,
					allowHeading: !!r.allowHeading,
					allowList: !!r.allowList,
					previewLinkTarget: !!r.previewLinkTarget,
					disableAnimatedEmoji: !!r.disableAnimatedEmoji,
					isInteracting: !!r.isInteracting,
					allowEmojiLinks: !1,
					disableAutoBlockNewlines: !0,
					mentionChannels: [],
					soundboardSounds: [],
					muted: !1,
					unknownUserMentionPlaceholder: !0,
					viewingChannelId: r.viewingChannelId,
					forceWhite: !!r.forceWhite
				}
			}

			function d(e) {
				let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
				return function(e, t, n) {
					var o;
					let {
						toAST: s = !1,
						hideSimpleEmbedContent: k = !0,
						formatInline: d = !1,
						postProcessor: f,
						shouldFilterKeywords: b,
						contentMessage: m
					} = n, y = !1, w = (null != m ? m : t).content, j = e(b ? (0, i.N)(w, {
						escapeReplacement: !0,
						messageId: t.id,
						channelId: t.channel_id,
						authorId: null == (o = t.author) ? void 0 : o.id
					}) : w, !0, g(t, n), (e, n) => {
						var i, o;
						return Array.isArray(e) || (e = [e]), k && (e = function(e, t) {
							if (1 !== e.length || 1 !== t.length) return e;
							let n = e[0],
								r = t[0];
							return ("link" === n.type || "attachmentLink" === n.type) && u.has(r.type) && (0, c.dY)(r) ? [] : e
						}(e, (null != m ? m : t).embeds)), d || (i = e, e = n ? h(i) : ("paragraph" === i[0].type && i[0].content instanceof Array && (i[0].content = h(i[0].content)), i)), e = function(e) {
							let t = e.some(e => "link" !== e.type);
							return e.filter(e => {
								let n = "link" === e.type,
									i = null != e.target ? (0, r.el)(e.target) : null;
								return !(n && null != i && !t)
							})
						}(e), t.embeds.length > 0 && (o = e, y = n ? p(o) : "paragraph" === o[0].type && o[0].content instanceof Array && p(o[0].content)), d && (e = function e(t) {
							return t.forEach(t => {
								l.has(t.type) && null != t.content && (Array.isArray(t.content) ? e(t.content) : "string" == typeof t.content ? t.content = t.content.replace(/\n/g, " ") : a.Z.captureMessage("AST node type:".concat(t.type, " with content typeof ").concat(typeof t.content, ". Keys ").concat(Object.keys(t))))
							}), t
						}(e)), null != f && (e = f(e, n)), e
					});
					return {
						hasSpoilerEmbeds: y,
						content: j
					}
				}(t.formatInline ? o.Z.parseInlineReply : o.Z.parse, e, t)
			}

			function f(e, t, n) {
				return (0, o.Z.parseAutoModerationSystemMessage)(e, !0, {
					allowLinks: !1,
					allowDevLinks: !1,
					allowEmojiLinks: !1,
					mentionChannels: [],
					soundboardSounds: [],
					isInteracting: !1,
					formatInline: !1,
					noStyleAndInteraction: !1,
					allowHeading: !1,
					allowList: !1,
					allowGameMentions: !1,
					disableAutoBlockNewlines: !0,
					highlightWord: t,
					disableAnimatedEmoji: !1,
					channelId: n,
					muted: !1
				}, e => (Array.isArray(e) || (e = [e]), e))
			}

			function h(e) {
				if (e.some(e => "emoji" !== e.type && "customEmoji" !== e.type && "soundboard" !== e.type && ("string" != typeof e.content || "" !== e.content.trim()))) return e;
				let t = 0;
				return e.forEach(e => {
					if (("emoji" === e.type || "customEmoji" === e.type || "soundboard" === e.type) && (t += 1), t > 30) return !1
				}), t > 30 || e.forEach(e => {
					e.jumboable = !0
				}), e
			}

			function b(e, t) {
				if (e instanceof Array) return e.some(e => b(e, t));
				let n = t(e);
				return null != n ? n : e.content instanceof Array ? b(e.content, t) : e.items instanceof Array && e.items.some(e => b(e, t))
			}

			function p(e) {
				return b(e, e => "spoiler" === e.type ? b(e, e => "link" === e.type || "attachmentLink" === e.type || null) : null)
			}
		}
	}
]);
//# sourceMappingURL=cfb3fea66c123dc4.js.map