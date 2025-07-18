! function() {
	var t = {
			2966: function(e, r, t) {
				var n = {
					"./cursorPagiantionResource.js": 5614,
					"./cursorPaginationConstants.js": 3448
				};

				function o(e) {
					e = a(e);
					return t(e)
				}

				function a(e) {
					if (t.o(n, e)) return n[e];
					e = new Error("Cannot find module '" + e + "'");
					throw e.code = "MODULE_NOT_FOUND", e
				}
				o.keys = function() {
					return Object.keys(n)
				}, o.resolve = a, (e.exports = o).id = 2966
			},
			8105: function(e, r, t) {
				var n = {
					"./cursorPaginationDirective.js": 8290
				};

				function o(e) {
					e = a(e);
					return t(e)
				}

				function a(e) {
					if (t.o(n, e)) return n[e];
					e = new Error("Cannot find module '" + e + "'");
					throw e.code = "MODULE_NOT_FOUND", e
				}
				o.keys = function() {
					return Object.keys(n)
				}, o.resolve = a, (e.exports = o).id = 8105
			},
			8386: function(e, r, t) {
				var n = {
					"./cursorPaginationService.js": 5647,
					"./cursorPaginationServiceV2.js": 2504
				};

				function o(e) {
					e = a(e);
					return t(e)
				}

				function a(e) {
					if (t.o(n, e)) return n[e];
					e = new Error("Cannot find module '" + e + "'");
					throw e.code = "MODULE_NOT_FOUND", e
				}
				o.keys = function() {
					return Object.keys(n)
				}, o.resolve = a, (e.exports = o).id = 8386
			},
			3703: function(e, r, t) {
				var n = {
					"./directives/templates/cursorPagination.html": 3583
				};

				function o(e) {
					e = a(e);
					return t(e)
				}

				function a(e) {
					if (t.o(n, e)) return n[e];
					e = new Error("Cannot find module '" + e + "'");
					throw e.code = "MODULE_NOT_FOUND", e
				}
				o.keys = function() {
					return Object.keys(n)
				}, o.resolve = a, (e.exports = o).id = 3703
			},
			3544: function(e) {
				function a(e) {
					return e.replace(/([a-z])([A-Z])/g, "$1-$2").toLowerCase()
				}

				function s(e) {
					return e.split("/").pop().replace(".html", "")
				}
				var r = {
					importFilesUnderPath: function(e) {
						e.keys().forEach(e)
					},
					templateCacheGenerator: function(e, r, n, o) {
						return e.module(r, []).run(["$templateCache", function(t) {
							n && n.keys().forEach(function(e) {
								var r = a(s(e));
								t.put(r, n(e))
							}), o && o.keys().forEach(function(e) {
								var r = a(s(e));
								t.put(r, o(e).replace(/<\/?script[^>]*>/gi, ""))
							})
						}])
					}
				};
				e.exports = r
			},
			5614: function(e, r, t) {
				"use strict";
				t.r(r);
				var n = {
					templateUrls: {
						cursorPagination: "cursor-pagination"
					}
				};
				t(2459).Z.constant("cursorPaginationResource", n), r.default = n
			},
			3448: function(e, r, t) {
				"use strict";
				t.r(r);
				var n = t(2459),
					o = t(4720);
				n.Z.constant("cursorPaginationConstants", o.cursorPaginationConstants), r.default = o.cursorPaginationConstants
			},
			2459: function(e, r, t) {
				"use strict";
				t.d(r, {
					Z: function() {
						return a
					}
				});
				var r = t(5734),
					n = t.n(r),
					o = Roblox,
					a = n().module("cursorPagination", ["cursorPaginationHtmlTemplate"]).config(["$qProvider", "languageResourceProvider", function(e, r) {
						n().isFunction(e.errorOnUnhandledRejections) && e.errorOnUnhandledRejections(!1);
						e = (new o.TranslationResourceProvider).getTranslationResource("CommonUI.Controls");
						r.setTranslationResources([e])
					}])
			},
			8290: function(e, r, t) {
				"use strict";
				t.r(r);
				t = t(2459);

				function n(e) {
					return {
						restrict: "A",
						templateUrl: e.templateUrls.cursorPagination,
						link: function(e, r, t) {
							e.cursorPaging = e[t.cursorPagination]
						}
					}
				}
				n.$inject = ["cursorPaginationResource"], t.Z.directive("cursorPagination", n), r.default = n
			},
			5647: function(e, r, t) {
				"use strict";
				t.r(r);
				t = t(2459);

				function n(l, e, P, o) {
					var a = l.defer();
					return a.reject([{
						code: -1,
						message: "Busy"
					}]), {
						getDataListFromResponseMethods: {
							defaultV1: function(t) {
								return l(function(e, r) {
									e(t.data)
								})
							}
						},
						getNextPageCursorFromResponseMethods: {
							defaultV1: function(e) {
								return e.nextPageCursor
							}
						},
						getErrorsFromResponseMethods: {
							defaultV1: function(e) {
								return e.errors
							}
						},
						getQueryParametersMethods: {
							defaultV1: function(e) {
								return e
							}
						},
						sortOrder: {
							Asc: "Asc",
							Desc: "Desc"
						},
						createPager: function(s) {
							var i = 0,
								u = !1,
								c = {},
								g = {},
								f = o.createPaginationCache(s.pageSize),
								r = "string" == typeof s.firstPageCursor ? s.firstPageCursor : "";

							function d() {
								return o.buildKey(s.getCacheKeyParameters(c))
							}

							function t(r) {
								var t = d(),
									n = f.getPage(t, r),
									o = l.defer();
								if (o.promise.then(s.loadSuccess, s.loadError), n.length === s.pageSize || "string" != typeof g[t]) return i = r, o.resolve(n), o.promise;
								c[s.cursorName] = g[t], s.beforeLoad && s.beforeLoad(r, c), u = !0;
								var e = {
										url: s.getRequestUrl(c)
									},
									a = s.getQueryParameters(c);
								return P.httpGet(e, a).then(function(e) {
									i = r, g[t] = s.getNextPageCursorFromResponse(e), s.getDataListFromResponse(e).then(function(e) {
										Array.isArray(e) ? (f.append(t, e), n = f.getPage(t, r), u = !1, o.resolve(n)) : (u = !1, o.reject([{
											code: 0,
											message: "data pulled from response not array"
										}]))
									}, function() {
										u = !1, o.reject()
									})
								}, function(e) {
									u = !1, o.reject(s.getErrorsFromResponse(e || {}))
								}), o.promise
							}

							function n() {
								return e = d(), 1 === i || f.getLength(e) > (i - 1) * s.pageSize;
								var e
							}
							return s.limitName = s.limitName || "limit", s.cursorName = s.cursorName || "cursor", s.sortOrderName = s.sortOrderName || "sortOrder", s.sortOrder = s.sortOrder || this.sortOrder.Asc, c[s.cursorName] = r, c[s.sortOrderName] = s.sortOrder, c[s.limitName] = s.loadPageSize, s.getDataListFromResponse = s.getDataListFromResponse || this.getDataListFromResponseMethods.defaultV1, s.getNextPageCursorFromResponse = s.getNextPageCursorFromResponse || this.getNextPageCursorFromResponseMethods.defaultV1, s.getErrorsFromResponse = s.getErrorsFromResponse || this.getErrorsFromResponseMethods.defaultV1, s.getQueryParameters = s.getQueryParameters || this.getQueryParametersMethods.defaultV1, s.loadSuccess = s.loadSuccess || function() {}, s.loadError = s.loadError || function() {}, {
								isBusy: function() {
									return u
								},
								setPagingParameter: function(e, r) {
									null == r ? delete c[e] : c[e] = r
								},
								getPagingParameter: function(e) {
									return c[e]
								},
								getCurrentPageNumber: function() {
									return i
								},
								removeCurrentPage: function() {
									if (!this.canRemoveItem()) return a.promise;
									var e = d();
									return f.removePage(e, i), n() ? t(i) : t(i - 1)
								},
								removeItemAtIndex: function(e) {
									if (!this.canRemoveItem()) return a.promise;
									var r = d();
									return f.removeAtIndex(r, i, e), n() ? t(i) : t(i - 1)
								},
								loadNextPage: function() {
									return this.canLoadNextPage() ? t(i + 1) : a.promise
								},
								loadPreviousPage: function() {
									return this.canLoadPreviousPage() ? t(i - 1) : a.promise
								},
								loadFirstPage: function() {
									if (!this.canLoadFirstPage()) return a.promise;
									var e = d();
									return f.clear(e), g[e] = r, t(1)
								},
								canRemoveItem: function() {
									return !this.isBusy()
								},
								canLoadNextPage: function() {
									return !this.isBusy() && this.hasNextPage()
								},
								hasNextPage: function() {
									var e = d();
									return f.getLength(e) > i * s.pageSize || "string" == typeof g[e]
								},
								canLoadPreviousPage: function() {
									return !this.isBusy() && 1 < i
								},
								canLoadFirstPage: function() {
									return !this.isBusy()
								}
							}
						}
					}
				}
				n.$inject = ["$q", "$rootScope", "httpService", "cacheService"], t.Z.service("cursorPaginationService", n), r.default = n
			},
			2504: function(e, r, t) {
				"use strict";
				t.r(r);
				var n = t(4720),
					t = t(2459);

				function o(e) {
					function t(t) {
						return e(function(e, r) {
							t.then(e).catch(r)
						})
					}
					return {
						createPager: function(e) {
							var r = new n.CursorPager(e.pageSize, e.loadPageSize, e.getItems);
							return {
								getStatus: function() {
									return r.status
								},
								isBusy: function() {
									return r.isBusy
								},
								setPagingParametersAndLoadFirstPage: function(e) {
									return t(r.setPagingParametersAndLoadFirstPage(e))
								},
								getPagingParameters: function() {
									return r.pagingParameters
								},
								getCurrentPageNumber: function() {
									return r.currentPageNumber
								},
								reloadCurrentPage: function() {
									return t(r.reloadCurrentPage())
								},
								getCurrentPage: function() {
									return t(r.getCurrentPage())
								},
								loadNextPage: function() {
									return t(r.loadNextPage())
								},
								loadPreviousPage: function() {
									return t(r.loadPreviousPage())
								},
								loadFirstPage: function() {
									return t(r.loadFirstPage())
								},
								hasNextPage: function() {
									return r.hasNextPage
								},
								canLoadNextPage: function() {
									return r.canLoadNextPage
								},
								canLoadPreviousPage: function() {
									return r.canLoadPreviousPage
								},
								canLoadFirstPage: function() {
									return r.canLoadFirstPage
								},
								canReloadCurrentPage: function() {
									return r.canReloadCurrentPage
								}
							}
						}
					}
				}
				o.$inject = ["$q"], t.Z.service("cursorPaginationServiceV2", o), r.default = o
			},
			3583: function(e) {
				e.exports = '<ul class="pager"> <li class="pager-prev"> <button class="btn-generic-left-sm" ng-click="cursorPaging.loadPreviousPage()" ng-disabled="!cursorPaging.canLoadPreviousPage()"> <span class="icon-left"></span> </button> </li> <li> <span ng-bind="\'Label.CurrentPage\' | translate:{ currentPage: cursorPaging.getCurrentPageNumber() }"></span> </li> <li class="pager-next"> <button class="btn-generic-right-sm" ng-click="cursorPaging.loadNextPage()" ng-disabled="!cursorPaging.canLoadNextPage()"> <span class="icon-right"></span> </button> </li> </ul>'
			},
			4720: function(e) {
				"use strict";
				e.exports = CoreUtilities
			},
			5734: function(e) {
				"use strict";
				e.exports = angular
			}
		},
		n = {};

	function o(e) {
		if (n[e]) return n[e].exports;
		var r = n[e] = {
			exports: {}
		};
		return t[e](r, r.exports, o), r.exports
	}
	o.n = function(e) {
			var r = e && e.__esModule ? function() {
				return e.default
			} : function() {
				return e
			};
			return o.d(r, {
				a: r
			}), r
		}, o.d = function(e, r) {
			for (var t in r) o.o(r, t) && !o.o(e, t) && Object.defineProperty(e, t, {
				enumerable: !0,
				get: r[t]
			})
		}, o.o = function(e, r) {
			return Object.prototype.hasOwnProperty.call(e, r)
		}, o.r = function(e) {
			"undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
				value: "Module"
			}), Object.defineProperty(e, "__esModule", {
				value: !0
			})
		},
		function() {
			"use strict";
			var e = o(5734),
				r = o.n(e),
				t = o(3544),
				e = (o(2459), o(3703));
			(0, t.templateCacheGenerator)(r(), "cursorPaginationHtmlTemplate", e), (0, t.importFilesUnderPath)(o(2966)), (0, t.importFilesUnderPath)(o(8105)), (0, t.importFilesUnderPath)(o(8386))
		}()
}();
//# sourceMappingURL=https://js.rbxcdn.com/8b039294812e9cadd95ef0fb9c83b0fa-cursorPagination.bundle.min.js.map

/* Bundle detector */
window.Roblox && window.Roblox.BundleDetector && window.Roblox.BundleDetector.bundleDetected("CursorPagination");