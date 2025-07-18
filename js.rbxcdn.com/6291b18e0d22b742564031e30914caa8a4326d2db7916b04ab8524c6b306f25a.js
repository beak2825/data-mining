! function() {
	var n = {
			1535: function(t, e, n) {
				var r = {
					"./aliasController.js": 6350
				};

				function o(t) {
					t = a(t);
					return n(t)
				}

				function a(t) {
					if (n.o(r, t)) return r[t];
					t = new Error("Cannot find module '" + t + "'");
					throw t.code = "MODULE_NOT_FOUND", t
				}
				o.keys = function() {
					return Object.keys(r)
				}, o.resolve = a, (t.exports = o).id = 1535
			},
			6342: function(t, e, n) {
				var r = {
					"./aliasDirective.js": 5471
				};

				function o(t) {
					t = a(t);
					return n(t)
				}

				function a(t) {
					if (n.o(r, t)) return r[t];
					t = new Error("Cannot find module '" + t + "'");
					throw t.code = "MODULE_NOT_FOUND", t
				}
				o.keys = function() {
					return Object.keys(r)
				}, o.resolve = a, (t.exports = o).id = 6342
			},
			2737: function(t, e, n) {
				var r = {
					"./contactsService.js": 8714
				};

				function o(t) {
					t = a(t);
					return n(t)
				}

				function a(t) {
					if (n.o(r, t)) return r[t];
					t = new Error("Cannot find module '" + t + "'");
					throw t.code = "MODULE_NOT_FOUND", t
				}
				o.keys = function() {
					return Object.keys(r)
				}, o.resolve = a, (t.exports = o).id = 2737
			},
			7982: function(t, e, n) {
				var r = {
					"./directives/templates/alias.html": 9933
				};

				function o(t) {
					t = a(t);
					return n(t)
				}

				function a(t) {
					if (n.o(r, t)) return r[t];
					t = new Error("Cannot find module '" + t + "'");
					throw t.code = "MODULE_NOT_FOUND", t
				}
				o.keys = function() {
					return Object.keys(r)
				}, o.resolve = a, (t.exports = o).id = 7982
			},
			726: function(t) {
				function a(t) {
					return t.replace(/([a-z])([A-Z])/g, "$1-$2").toLowerCase()
				}

				function i(t) {
					return t.split("/").pop().replace(".html", "")
				}
				var e = {
					importFilesUnderPath: function(t) {
						t.keys().forEach(t)
					},
					templateCacheGenerator: function(t, e, r, o) {
						return t.module(e, []).run(["$templateCache", function(n) {
							r && r.keys().forEach(function(t) {
								var e = a(i(t));
								n.put(e, r(t))
							}), o && o.keys().forEach(function(t) {
								var e = a(i(t));
								n.put(e, o(t).replace(/<\/?script[^>]*>/gi, ""))
							})
						}])
					}
				};
				t.exports = e
			},
			5345: function(t, e, n) {
				"use strict";
				var r = n(5734),
					r = n.n(r)().module("contacts", ["contactsAppTemplates"]);
				e.Z = r
			},
			6350: function(t, e, n) {
				"use strict";

				function r() {}
				n.r(e), n(5345).Z.controller("aliasController", r), e.default = r
			},
			5471: function(t, e, n) {
				"use strict";
				n.r(e);
				n = n(5345);

				function r(t) {
					return {
						restrict: "A",
						scope: {
							alias: "<"
						},
						templateUrl: t.templates.aliasTemplate
					}
				}
				r.$inject = ["resources"], n.Z.directive("alias", r), e.default = r
			},
			8714: function(t, e, n) {
				"use strict";
				n.r(e);
				n(5734);
				n = n(5345);

				function p(t) {
					return function(t) {
						if (Array.isArray(t)) return r(t)
					}(t) || function(t) {
						if ("undefined" != typeof Symbol && Symbol.iterator in Object(t)) return Array.from(t)
					}(t) || function(t, e) {
						if (!t) return;
						if ("string" == typeof t) return r(t, e);
						var n = Object.prototype.toString.call(t).slice(8, -1);
						"Object" === n && t.constructor && (n = t.constructor.name);
						if ("Map" === n || "Set" === n) return Array.from(t);
						if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return r(t, e)
					}(t) || function() {
						throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
					}()
				}

				function r(t, e) {
					(null == e || e > t.length) && (e = t.length);
					for (var n = 0, r = new Array(e); n < e; n++) r[n] = t[n];
					return r
				}

				function o(c, u, s) {
					var f = {
							default: "default",
							skipCache: "skipCache",
							noCache: "noCache"
						},
						l = {};
					return {
						getContactsMetaData: function() {
							return u.httpGet(c.apiSets.getContactsMetadata, {}).then(function(t) {
								return l = t
							})
						},
						getUserContacts: function(t, n, e) {
							var r, o, a, i;
							return r = t, o = 2 < arguments.length && void 0 !== e ? e : f.default, a = "aliases", i = l.multiGetContactsMaxSize, t = l.multiGetContactsCacheTTLinMS, e = c.apiSets.multiGetContacts, ((t = s.fetchNonExpiredCachedData(a, t)) && t.data && o === f.default ? Promise.resolve(t.data) : (i = u.buildBatchPromises(e, r, i, "targetUserIds", "POST"), o !== f.noCache && i.then(function(t) {
								t && 0 < t.length && s.saveDataByTimeStamp(a, t)
							}), i)).then(function(t) {
								t && 0 < t.length && [].concat(p([]), p(t[0])).forEach(function(t) {
									var e = t.targetUserId;
									n[e] || (n[e] = {}), n[e].contact = t.targetUserTag
								})
							})
						},
						options: f
					}
				}
				o.$inject = ["apiParamsInitialization", "httpService", "localStorageService"], n.Z.factory("contactsService", o), e.default = o
			},
			9933: function(t) {
				t.exports = "{{ alias ? '(' +  alias + ')' : '' }} "
			},
			5734: function(t) {
				"use strict";
				t.exports = angular
			}
		},
		r = {};

	function o(t) {
		if (r[t]) return r[t].exports;
		var e = r[t] = {
			exports: {}
		};
		return n[t](e, e.exports, o), e.exports
	}
	o.n = function(t) {
			var e = t && t.__esModule ? function() {
				return t.default
			} : function() {
				return t
			};
			return o.d(e, {
				a: e
			}), e
		}, o.d = function(t, e) {
			for (var n in e) o.o(e, n) && !o.o(t, n) && Object.defineProperty(t, n, {
				enumerable: !0,
				get: e[n]
			})
		}, o.o = function(t, e) {
			return Object.prototype.hasOwnProperty.call(t, e)
		}, o.r = function(t) {
			"undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, {
				value: "Module"
			}), Object.defineProperty(t, "__esModule", {
				value: !0
			})
		},
		function() {
			"use strict";
			var t = o(5734),
				e = o.n(t),
				n = o(726);
			o(5345), (0, n.importFilesUnderPath)(o(1535)), (0, n.importFilesUnderPath)(o(6342)), (0, n.importFilesUnderPath)(o(2737)), t = o(7982), (0, n.templateCacheGenerator)(e(), "contactsAppTemplates", t)
		}()
}();
//# sourceMappingURL=https://js.rbxcdn.com/0a2af2b02e1d27a956ef-contacts.js.map

/* Bundle detector */
window.Roblox && window.Roblox.BundleDetector && window.Roblox.BundleDetector.bundleDetected("Contacts");