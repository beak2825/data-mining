! function() {
    var e = {
            3404: function(e, r, t) {
                var n = {
                    "./groupCardComponent.js": 8171
                };

                function o(e) {
                    var r = i(e);
                    return t(r)
                }

                function i(e) {
                    if (!t.o(n, e)) {
                        var r = new Error("Cannot find module '" + e + "'");
                        throw r.code = "MODULE_NOT_FOUND", r
                    }
                    return n[e]
                }
                o.keys = function() {
                    return Object.keys(n)
                }, o.resolve = i, e.exports = o, o.id = 3404
            },
            6289: function(e, r, t) {
                var n = {
                    "./communityLinkConstants.js": 1961,
                    "./eventConstants.js": 1486,
                    "./groupResources.js": 7379,
                    "./groupsConstants.js": 2830,
                    "./verificationResources.js": 5371
                };

                function o(e) {
                    var r = i(e);
                    return t(r)
                }

                function i(e) {
                    if (!t.o(n, e)) {
                        var r = new Error("Cannot find module '" + e + "'");
                        throw r.code = "MODULE_NOT_FOUND", r
                    }
                    return n[e]
                }
                o.keys = function() {
                    return Object.keys(n)
                }, o.resolve = i, e.exports = o, o.id = 6289
            },
            2377: function(e, r, t) {
                var n = {
                    "./banUserController.js": 8585,
                    "./changeOwnerModalController.js": 5655,
                    "./changeOwnerUpsellController.js": 501,
                    "./exileUserController.js": 603,
                    "./groupCardController.js": 8524,
                    "./verificationInputModalController.js": 9341,
                    "./verificationRedirectModalController.js": 2075
                };

                function o(e) {
                    var r = i(e);
                    return t(r)
                }

                function i(e) {
                    if (!t.o(n, e)) {
                        var r = new Error("Cannot find module '" + e + "'");
                        throw r.code = "MODULE_NOT_FOUND", r
                    }
                    return n[e]
                }
                o.keys = function() {
                    return Object.keys(n)
                }, o.resolve = i, e.exports = o, o.id = 2377
            },
            5396: function(e, r, t) {
                var n = {
                    "./communityLinksService.js": 5615,
                    "./groupEventLoggingService.js": 5021,
                    "./groupExperimentsService.js": 7982,
                    "./groupGuacService.js": 3014,
                    "./groupMembershipService.js": 9434,
                    "./groupUtilityService.js": 9306,
                    "./groupsService.js": 9339,
                    "./verificationService.js": 6112
                };

                function o(e) {
                    var r = i(e);
                    return t(r)
                }

                function i(e) {
                    if (!t.o(n, e)) {
                        var r = new Error("Cannot find module '" + e + "'");
                        throw r.code = "MODULE_NOT_FOUND", r
                    }
                    return n[e]
                }
                o.keys = function() {
                    return Object.keys(n)
                }, o.resolve = i, e.exports = o, o.id = 5396
            },
            9749: function(e, r, t) {
                var n = {
                    "./components/templates/banUserModal.html": 9899,
                    "./components/templates/changeOwnerModal.html": 4292,
                    "./components/templates/changeOwnerUpsellModal.html": 5067,
                    "./components/templates/exileUserModal.html": 3841,
                    "./components/templates/groupCard.html": 3075,
                    "./components/templates/verificationInputModal.html": 9686,
                    "./components/templates/verificationRedirectModal.html": 1030
                };

                function o(e) {
                    var r = i(e);
                    return t(r)
                }

                function i(e) {
                    if (!t.o(n, e)) {
                        var r = new Error("Cannot find module '" + e + "'");
                        throw r.code = "MODULE_NOT_FOUND", r
                    }
                    return n[e]
                }
                o.keys = function() {
                    return Object.keys(n)
                }, o.resolve = i, e.exports = o, o.id = 9749
            },
            7525: function(e) {
                function r(e) {
                    return e.replace(/([a-z])([A-Z])/g, "$1-$2").toLowerCase()
                }

                function t(e) {
                    return e.split("/").pop().replace(".html", "")
                }
                var n = {
                    importFilesUnderPath: function(e) {
                        e.keys().forEach(e)
                    },
                    templateCacheGenerator: function(e, n, o, i) {
                        return e.module(n, []).run(["$templateCache", function(e) {
                            o && o.keys().forEach((function(n) {
                                var i = r(t(n));
                                e.put(i, o(n))
                            })), i && i.keys().forEach((function(n) {
                                var o = r(t(n));
                                e.put(o, i(n).replace(/<\/?script[^>]*>/gi, ""))
                            }))
                        }])
                    }
                };
                e.exports = n
            },
            8171: function(e, r, t) {
                "use strict";
                t.r(r);
                var n = {
                    templateUrl: "group-card",
                    bindings: {
                        group: "<",
                        handleClick: "<",
                        isV2: "<"
                    },
                    controller: "groupCardController"
                };
                t(8989).A.component("groupCard", n), r.default = n
            },
            1961: function(e, r, t) {
                "use strict";
                t.r(r);
                var n = t(7577),
                    o = t(8989),
                    i = "".concat(n.EnvironmentUrls.apiGatewayUrl, "/community-links/v1/groups"),
                    a = {
                        urls: {
                            getGroupCommunityInfoUrl: "".concat(i, "/{groupId}/community"),
                            getGroupAnnouncement: "".concat(i, "/{groupId}/shout")
                        }
                    };
                o.A.constant("communityLinkConstants", a), r.default = a
            },
            1486: function(e, r, t) {
                "use strict";
                t.r(r);
                t(8989).A.constant("eventConstants", {
                    EventType: {
                        CommunityDialogStateChanged: "communityDialogStateChanged",
                        GroupPageClickEvent: "groupPageClickEvent",
                        GroupPageExposureEvent: "groupPageExposureEvent"
                    },
                    EventContext: {
                        GroupHomepage: "groupHomepage",
                        GroupDiscovery: "groupDiscovery",
                        MyGroups: "myGroups",
                        ConfigureGroup: "configureGroup"
                    },
                    ExposureType: {
                        GroupHomepage: "groupHomepage",
                        MyGroups: "myGroups",
                        GroupDiscovery: "GroupDiscovery",
                        GroupDiscoveryV2: "GroupDiscoveryV2"
                    },
                    EventEntityType: {
                        Group: "group"
                    },
                    ConfigureSettingsClickTargetType: {
                        VerificationLevel: "configureSettings.verificationLevel",
                        ManualApproval: "configureSettings.manualApproval",
                        GroupFundsVisible: "configureSettings.groupFundsVisible",
                        GroupGamesVisible: "configureSettings.groupGamesVisible",
                        EnemiesAllowed: "configureSettings.enemiesAllowed"
                    }
                })
            },
            7379: function(e, r, t) {
                "use strict";
                t.r(r);
                var n = {
                    templates: {
                        groupsListBaseTemplate: "groups-list-base",
                        groupsListTemplate: "groups-list",
                        groupAboutTemplate: "group-about",
                        groupBaseTemplate: "group-base",
                        groupCommentsTemplate: "group-comments",
                        groupMembersListTemplate: "group-members-list",
                        groupGamesTemplate: "group-games",
                        GroupResultsBaseTemplate: "group-results-base",
                        groupTabTemplate: "group-tab"
                    },
                    modals: {
                        openedClass: "modal-open-noscroll",
                        exileUser: {
                            templateUrl: "exile-user-modal",
                            controller: "exileUserController"
                        },
                        banUser: {
                            templateUrl: "ban-user-modal",
                            controller: "banUserController"
                        },
                        leaveGroup: {
                            templateUrl: "leave-group-modal",
                            controller: "leaveGroupController"
                        },
                        changeOwner: {
                            templateUrl: "change-owner-modal",
                            controller: "changeOwnerModalController"
                        },
                        changeOwnerUpsell: {
                            templateUrl: "change-owner-upsell-modal",
                            controller: "changeOwnerUpsellModalController"
                        },
                        reportAbuse: {
                            templateUrl: "report-abuse-modal",
                            controller: "reportAbuseController"
                        }
                    }
                };
                t(8989).A.constant("groupResources", n), r.default = n
            },
            2830: function(e, r, t) {
                "use strict";
                t.r(r);
                var n = t(7577),
                    o = t(8989),
                    i = "communities",
                    a = {
                        urlBase: i,
                        bannerExpiryInMilliseconds: 5e3,
                        wallReloadDelay: 1e3,
                        thumbnailSizes: {
                            small: "150x150",
                            large: "420x420"
                        },
                        relationshipTypes: {
                            allies: "Allies",
                            enemies: "Enemies"
                        },
                        robuxIconHtml: '<span class="icon-robux-16x16"></span>',
                        groupIconFileTypes: [".jpg", ".png", ".jpeg"],
                        absoluteUrls: {
                            createGroup: n.Endpoints.getAbsoluteUrl("/".concat(i, "/create")),
                            moreGroups: n.Endpoints.getAbsoluteUrl("/search/".concat(i)),
                            myGroups: n.Endpoints.getAbsoluteUrl("/my/".concat(i)),
                            mySettings: n.Endpoints.getAbsoluteUrl("/my/account#!/security"),
                            forbidden: n.Endpoints.getAbsoluteUrl("/request-error?code=403")
                        },
                        urls: {
                            getGroup: "".concat(n.EnvironmentUrls.groupsApi, "/v1/groups/{id}"),
                            getGroupMetadata: "".concat(n.EnvironmentUrls.groupsApi, "/v1/groups/metadata"),
                            getGroupConfigurationMetadata: "".concat(n.EnvironmentUrls.groupsApi, "/v1/groups/configuration/metadata"),
                            updateGroupSettings: "".concat(n.EnvironmentUrls.groupsApi, "/v1/groups/{id}/settings"),
                            searchGroups: "".concat(n.EnvironmentUrls.groupsApi, "/v1/groups/search"),
                            deleteWallPostsByUser: "".concat(n.EnvironmentUrls.groupsApi, "/v1/groups/{groupId}/wall/users/{userId}/posts"),
                            deleteForumPostsByUser: "".concat(n.EnvironmentUrls.groupsApi, "/v1/groups/{groupId}/forums/{userId}/posts"),
                            getGroupRelationships: "".concat(n.EnvironmentUrls.groupsApi, "/v1/groups/{groupId}/relationships/{groupRelationshipType}"),
                            groupLookup: "".concat(n.EnvironmentUrls.groupsApi, "/v1/groups/search/lookup"),
                            getCurrency: "".concat(n.EnvironmentUrls.economyApi, "/v1/groups/{groupId}/currency"),
                            groupNameHistory: "".concat(n.EnvironmentUrls.groupsApi, "/v1/groups/{id}/name-history"),
                            getGroupForums: "".concat(n.EnvironmentUrls.groupsApi, "/v1/groups/{groupId}/forums"),
                            getGroupEvents: "".concat(n.EnvironmentUrls.apiGatewayUrl, "/virtual-events/v1/virtual-events/my-events?groupId={groupId}&filterBy=upcoming&fromUtc=").concat((new Date).toISOString(), "&sortBy=startUtc&sortOrder=desc"),
                            getGroupStoreItems: "".concat(n.EnvironmentUrls.catalogApi, "/v1/search/items?category=All&creatorTargetId={groupId}&creatorType=Group&cursor=&limit=50&sortOrder=Desc&sortType=Updated"),
                            getGroupAffiliates: "".concat(n.EnvironmentUrls.groupsApi, "/v1/groups/{groupId}/relationships/allies?maxRows=50&sortOrder=Asc&startRowIndex=0"),
                            getGroupMembership: "".concat(n.EnvironmentUrls.groupsApi, "/v1/groups/{id}/membership"),
                            updatePrimaryGroup: "".concat(n.EnvironmentUrls.groupsApi, "/v1/user/groups/primary"),
                            claimOwnership: "".concat(n.EnvironmentUrls.groupsApi, "/v1/groups/{groupId}/claim-ownership"),
                            deleteGroupJoinRequest: "".concat(n.EnvironmentUrls.groupsApi, "/v1/groups/{groupId}/join-requests/users/{userId}"),
                            joinGroup: "".concat(n.EnvironmentUrls.groupsApi, "/v1/groups/{id}/users"),
                            getGroupBans: "".concat(n.EnvironmentUrls.groupsApi, "/v1/groups/{groupId}/bans"),
                            userGroupBan: "".concat(n.EnvironmentUrls.groupsApi, "/v1/groups/{groupId}/bans/{userId}"),
                            changeOwner: "".concat(n.EnvironmentUrls.groupsApi, "/v1/groups/{groupId}/change-owner"),
                            updateUserRole: "".concat(n.EnvironmentUrls.groupsApi, "/v1/groups/{groupId}/users/{userId}"),
                            getGroupRoles: "".concat(n.EnvironmentUrls.groupsApi, "/v1/groups/{id}/roles"),
                            getGroupRolePermissions: "".concat(n.EnvironmentUrls.groupsApi, "/v1/groups/{groupId}/roles/{roleSetId}/permissions"),
                            getGroupRoleMembers: "".concat(n.EnvironmentUrls.groupsApi, "/v1/groups/{groupId}/roles/{roleId}/users"),
                            getGroupRolesForUser: "".concat(n.EnvironmentUrls.groupsApi, "/v2/users/{userId}/groups/roles"),
                            usernames: "".concat(n.EnvironmentUrls.usersApi, "/v1/usernames/users"),
                            usersSearch: "".concat(n.EnvironmentUrls.usersApi, "/v1/users/search"),
                            getGroupDetailsPolicy: "".concat(n.EnvironmentUrls.universalAppConfigurationApi, "/v1/behaviors/group-details-ui/content?u={userId}"),
                            getConfigureGroupPolicy: "".concat(n.EnvironmentUrls.universalAppConfigurationApi, "/v1/behaviors/configure-group-ui/content"),
                            getGroupPolicyInfo: "".concat(n.EnvironmentUrls.groupsApi, "/v1/groups/policies"),
                            getAddFundsAllowedUrl: "".concat(n.EnvironmentUrls.economyApi, "/v1/groups/{groupId}/addfunds/allowed"),
                            getUserCurrency: "".concat(n.EnvironmentUrls.economyApi, "/v1/users/{userId}/currency"),
                            generateChallenge: "".concat(n.EnvironmentUrls.economyApi, "/v2/spend-friction/two-step-verification/generate"),
                            redeemChallenge: "".concat(n.EnvironmentUrls.economyApi, "/v2/spend-friction/two-step-verification/redeem"),
                            get2SVConfiguration: "".concat(n.EnvironmentUrls.twoStepVerificationApi, "/v1/users/{userId}/configuration"),
                            verifyChallenge: "".concat(n.EnvironmentUrls.twoStepVerificationApi, "/v1/users/{userId}/challenges/email/verify"),
                            resendCode: "".concat(n.EnvironmentUrls.twoStepVerificationApi, "/v1/users/{userId}/challenges/email/send-code")
                        },
                        errorCodes: {
                            internal: {
                                unknown: 0,
                                captcha: 1,
                                invalidMembership: 10,
                                tooManyGroups: 11,
                                insufficientRobux: 12,
                                nameInvalid: 13,
                                nameModerated: 14,
                                groupIconInvalid: 15,
                                groupIconMissing: 16,
                                tooManyRequests: 17,
                                descriptionTooLong: 18,
                                nameTooLong: 19,
                                duplicateName: 20,
                                featureDisabled: 21,
                                groupIconTooLarge: 22,
                                twoStepVerificationRequired: 35,
                                verifiedEmailRequired: 38
                            },
                            groupErrors: {
                                invalidGroup: 1
                            },
                            sendGroupWallPost: {
                                7: 1
                            },
                            membership: {
                                captcha: 5,
                                operationUnavailable: 18,
                                twoStepVerificationRequired: 25,
                                proofOfWork: 28
                            },
                            getGroupMembership: {
                                3: 1
                            }
                        },
                        statusCodes: {
                            payloadTooLarge: 413,
                            operationUnavailable: 405
                        },
                        twoStepMediaType: {
                            email: "Email"
                        },
                        translations: {
                            buildGroupRolesListError: "Message.BuildGroupRolesListError",
                            loadGroupError: "Message.LoadGroupError",
                            loadGroupMetadataError: "Message.LoadGroupMetadataError",
                            loadGroupsListError: "Message.LoadGroupMembershipsError",
                            loadGroupConfigMetadataError: "Message.ConfigMetadataLoadFail",
                            loadGroupMembershipError: "Message.LoadUserGroupMembershipError",
                            defaultError: "Message.DefaultError",
                            deleteWallPostsByUserError: "Message.DeleteWallPostsByUserError",
                            groupMembershipsUnavailableError: "Message.GroupMembershipsUnavailableError",
                            banUserSuccess: "Message.BanUserSuccess",
                            banUserError: "Message.BanUserError",
                            kickUserError: "Message.KickUserError",
                            kickUserSuccess: "Message.KickUserSuccess"
                        },
                        ownerRoleRank: 255,
                        experimentLayer: "UserCommunities.Groups.Discovery",
                        socialCommunityExperimentLayer: "Social.CommunityPage"
                    };
                o.A.constant("groupsConstants", a), r.default = a
            },
            5371: function(e, r, t) {
                "use strict";
                t.r(r);
                var n = t(8989),
                    o = {
                        invalidCode: "invalidCode",
                        invalidChallenge: "invalidChallenge",
                        invalidConfiguration: "invalidConfiguration",
                        tooManyRequests: "tooManyRequests",
                        featureDisabled: "featureDisabled"
                    },
                    i = {
                        codeLength: 6,
                        actionTypes: {
                            robuxSpend: "RobuxSpend"
                        },
                        urls: {
                            support: "/info/account-safety"
                        },
                        errorCodes: {
                            internal: o,
                            api: {
                                1: o.invalidChallenge,
                                5: o.tooManyRequests,
                                7: o.featureDisabled,
                                9: o.invalidConfiguration,
                                10: o.invalidCode
                            }
                        },
                        events: {
                            frictionEventType: "buttonClick",
                            twoStepVerificationCtx: "2svRobuxSpend",
                            resendCodeBtn: "resendCode",
                            verifyCodeBtn: "verifyCode",
                            goToSecurityBtn: "goToSecurity",
                            cancelBtn: "closeSettingsRedirectModal",
                            settingsRedirectModalTriggered: "settingsRedirectModalTriggered",
                            codeInputModalTriggered: "codeInputModalTriggered",
                            successfulVerification: "successfulVerification",
                            invalidCodeInput: "invalidCodeInput"
                        }
                    };
                n.A.constant("verificationResources", i), r.default = i
            },
            8585: function(e, r, t) {
                "use strict";
                t.r(r);
                var n = t(8989);

                function o(e, r, t, n, o, i, a, s) {
                    e.params = n, e.banUser = function() {
                        e.layout.deleteWallPosts && t.deletePostsByUser(e.params.groupId, e.params.userId).then((function() {
                            setTimeout((function() {
                                n.refreshGroupWall()
                            }), i.wallReloadDelay)
                        }), (function(e) {
                            e.status !== i.statusCodes.operationUnavailable && (s.warning(a.get(i.translations.deleteWallPostsByUserError)), o.debug("--deleteWallPostsByUser-error---"))
                        })), t.banUser(e.params.groupId, e.params.userId).then((function(e) {
                            n.reloadCurrentPage(), s.success(a.get(i.translations.banUserSuccess))
                        })).catch((function(e) {
                            s.warning(a.get(i.translations.banUserError)), o.debug("--banUser-error---")
                        })), r.close()
                    }, e.close = function() {
                        r.dismiss()
                    }, e.init = function() {
                        e.layout = {
                            deleteWallPosts: !1
                        }
                    }, e.init()
                }
                o.$inject = ["$scope", "$uibModalInstance", "groupsService", "modalData", "$log", "groupsConstants", "languageResource", "systemFeedbackService"], n.A.controller("banUserController", o), r.default = o
            },
            5655: function(e, r, t) {
                "use strict";
                t.r(r);
                var n = t(7577),
                    o = t(8989);

                function i(e, r, t, o, i, a, s, u, c, l, p, d, g, f, m) {
                    r.params = s, r.showVerificationRedirectModal = function() {
                        f.sendFrictionEvent(m.events.settingsRedirectModalTriggered);
                        o.open({
                            animation: !1,
                            templateUrl: "verification-redirect-modal",
                            controller: "verificationRedirectModalController"
                        })
                    }, r.showVerificationInputModal = function(e) {
                        if (e) {
                            var r = n.AccountIntegrityChallengeService.TwoStepVerification;
                            f.popUpTwoStepVerificationChallenge(m.events.codeInputModalTriggered, r)
                        } else {
                            o.open({
                                animation: !1,
                                templateUrl: "verification-input-modal",
                                controller: "verificationInputModalController"
                            })
                        }
                    }, r.changeOwner = function() {
                        r.layout.errorMessage = void 0, r.layout.isLoading = !0, u.changeOwner(r.params.groupId, r.newOwner.id).then((function() {
                            var e = a.location.href,
                                n = c.groupDetailsPageUrl(r.params.groupId, r.params.groupName);
                            e == n ? (t.dismiss(), a.location.reload()) : a.location.href = n
                        }), (function(e) {
                            e.errors && e.errors.length > 0 ? e.errors[0].code === g.errorCodes.membership.twoStepVerificationRequired ? (t.dismiss(), f.getTwoStepVerificationConfiguration().then((function(e) {
                                e.twoStepEnabled ? r.showVerificationInputModal(e.usingTwoStepWebviewComponent) : r.showVerificationRedirectModal()
                            })).catch((function() {
                                r.showVerificationRedirectModal()
                            }))) : d.warning(e.errors[0].userFacingMessage) : d.warning(l.get(g.translations.defaultError)), i.debug("--changeOwner-error---"), r.layout.isLoading = !1, t.dismiss()
                        }))
                    }, r.selectUser = function(t) {
                        return e((function(e, n) {
                            r.newOwner = {}, r.layout.isLoadingUser = !0, u.getUserRoleInGroup(t.id, r.params.groupId).then((function(o) {
                                o ? o.rank === r.metadata.roleConfiguration.maxRank ? n(l.get("Message.UserIsOwner")) : (r.newOwner = {
                                    role: o.name,
                                    id: t.id,
                                    name: t.name,
                                    displayName: t.displayName,
                                    url: c.profilePageUrl(t.id)
                                }, e()) : n(l.get("Message.TargetUserNotInGroup"))
                            }), (function(e) {
                                n(e)
                            })).finally((function() {
                                r.layout.isLoadingUser = !1
                            }))
                        }))
                    }, r.close = function() {
                        t.dismiss()
                    }, r.init = function() {
                        r.thumbnailTypes = p.thumbnailTypes, r.newOwner = {}, r.layout = {
                            isDisplayNamesEnabled: n.DisplayNames.Enabled()
                        }, r.params.metadata ? r.metadata = r.params.metadata : u.getGroupConfigurationMetadata().then((function(e) {
                            r.metadata = e
                        }))
                    }, r.init()
                }
                i.$inject = ["$q", "$scope", "$uibModalInstance", "$uibModal", "$log", "$window", "modalData", "groupsService", "groupUtilityService", "languageResource", "thumbnailConstants", "systemFeedbackService", "groupsConstants", "verificationService", "verificationResources"], o.A.controller("changeOwnerModalController", i), r.default = i
            },
            501: function(e, r, t) {
                "use strict";
                t.r(r);
                var n = t(8989);

                function o(e, r, t) {
                    e.params = t, e.close = function() {
                        r.dismiss()
                    }, e.changeOwner = function() {
                        e.params.onChangeOwner(), r.dismiss()
                    }, e.leaveGroup = function() {
                        e.params.onLeaveGroup(), r.dismiss()
                    }, e.init = function() {}, e.init()
                }
                o.$inject = ["$scope", "$uibModalInstance", "modalData"], n.A.controller("changeOwnerUpsellModalController", o), r.default = o
            },
            603: function(e, r, t) {
                "use strict";
                t.r(r);
                var n = t(8989);

                function o(e, r, t, n, o, i, a, s) {
                    e.params = n, e.exileUser = function() {
                        e.layout.deleteWallPosts && t.deletePostsByUser(e.params.groupId, e.params.userId).then((function() {
                            setTimeout((function() {
                                n.refreshGroupWall()
                            }), i.wallReloadDelay)
                        }), (function(e) {
                            e.status !== i.statusCodes.operationUnavailable && (s.warning(a.get(i.translations.deleteWallPostsByUserError)), o.debug("--deleteWallPostsByUser-error---"))
                        })), t.exileUser(e.params.groupId, e.params.userId).then((function() {
                            n.reloadCurrentPage(), s.success(a.get(i.translations.kickUserSuccess))
                        }), (function(e) {
                            s.warning(a.get(i.translations.kickUserError))
                        })), r.close()
                    }, e.close = function() {
                        r.dismiss()
                    }, e.init = function() {
                        e.layout = {
                            deleteWallPosts: !1
                        }
                    }, e.init()
                }
                o.$inject = ["$scope", "$uibModalInstance", "groupsService", "modalData", "$log", "groupsConstants", "languageResource", "systemFeedbackService"], n.A.controller("exileUserController", o), r.default = o
            },
            8524: function(e, r, t) {
                "use strict";
                t.r(r), t.d(r, {
                    default: function() {
                        return a
                    }
                });
                var n = RobloxBadges,
                    o = t(8989);

                function i(e, r, t) {
                    var o = this;
                    o.$onInit = function() {
                        o.thumbnailTypes = r.thumbnailTypes, o.url = e("seoUrl")(t.urlBase, o.group.id, o.group.name);
                        try {
                            (0, n.initRobloxBadgesFrameworkAgnostic)({
                                overrideIconClass: "verified-badge-icon-group-discover"
                            })
                        } catch (e) {}
                    }
                }
                i.$inject = ["$filter", "thumbnailConstants", "groupsConstants"], o.A.controller("groupCardController", i);
                var a = i
            },
            9341: function(e, r, t) {
                "use strict";
                t.r(r);
                var n = t(798),
                    o = t(8989);

                function i(e, r, t, o, i, a, s) {
                    function u() {
                        e.close();
                        var r = t.get("Response.VerificationError");
                        a.warning(r, 100, 6e3)
                    }

                    function c(r) {
                        var n = t.get("Response.VerificationError");
                        r === i.errorCodes.internal.invalidCode && (n = t.get("Response.InvalidCodeTryAgain")), e.layout.invalidCodeError = !0, e.layout.invalidCodeErrorMessage = n, o.sendFrictionEvent(i.events.invalidCodeInput)
                    }
                    e.layout = {
                        codeSent: !1,
                        isPendingVerification: !1,
                        invalidCodeError: !1,
                        invalidCodeErrorMessage: "",
                        actionType: i.actionTypes.robuxSpend,
                        codeLength: i.codeLength,
                        codeInputPlaceholder: t.get("Label.CodeInputPlaceholderText", {
                            codeLength: i.codeLength
                        }),
                        supportPageUrl: s.getAbsoluteUrl(i.urls.support),
                        supportLinkPhrase: ""
                    }, e.properties = {
                        userId: null === n.authenticatedUser || void 0 === n.authenticatedUser ? void 0 : n.authenticatedUser.id,
                        challengeToken: "",
                        code: ""
                    }, e.generateCode = function() {
                        var r, n;
                        r = e.layout.supportPageUrl, n = "<a class='text-link text-name text-footer contact' href='".concat(r, "' target='_blank'>").concat(t.get("Label.RobloxSupport"), "</a>"), e.layout.supportLinkPhrase = t.get("Label.NeedHelpContactSupport", {
                            supportLink: n
                        }), o.generateChallengeCode().then((function(r) {
                            e.properties.challengeToken = r
                        })).catch((function() {
                            u()
                        }))
                    }, e.verifyCode = function() {
                        o.sendFrictionEvent(i.events.verifyCodeBtn), e.layout.isPendingVerification = !0, o.verifyChallengeCode(e.properties.userId, e.properties.challengeToken, e.properties.code).then((function(r) {
                            o.sendFrictionEvent(i.events.successfulVerification), o.redeemVerificationChallenge(e.properties.challengeToken, r).then((function(r) {
                                r ? function() {
                                    e.close();
                                    var r = t.get("Response.SuccessfulVerificationV2");
                                    a.success(r, 100, 6e3)
                                }() : u()
                            })).catch((function() {
                                u()
                            }))
                        })).catch((function(r) {
                            c(r.code), e.layout.isPendingVerification = !1
                        }))
                    }, e.resendCode = function() {
                        o.sendFrictionEvent(i.events.resendCodeBtn), o.resendCode(e.properties.userId, e.properties.challengeToken).then((function() {
                            e.layout.codeSent = !0
                        })).catch((function(e) {
                            c(e.code)
                        }))
                    }, e.close = function() {
                        r.dismiss()
                    }, e.generateCode()
                }
                i.$inject = ["$scope", "$uibModalInstance", "languageResource", "verificationService", "verificationResources", "systemFeedbackService", "urlService"], o.A.controller("verificationInputModalController", i), r.default = i
            },
            2075: function(e, r, t) {
                "use strict";
                t.r(r);
                var n = t(8989),
                    o = t(2830);

                function i(e, r, t, n) {
                    e.redirectToSettings = function() {
                        t.sendFrictionEvent(n.events.goToSecurityBtn), window.location.href = o.default.absoluteUrls.mySettings
                    }, e.close = function() {
                        t.sendFrictionEvent(n.events.cancelBtn), r.dismiss()
                    }
                }
                i.$inject = ["$scope", "$uibModalInstance", "verificationService", "verificationResources"], n.A.controller("verificationRedirectModalController", i), r.default = i
            },
            8989: function(e, r, t) {
                "use strict";
                var n = t(127),
                    o = t.n(n)().module("groups", ["robloxApp", "groupsTemplates"]);
                r.A = o
            },
            5615: function(e, r, t) {
                "use strict";
                t.r(r);
                var n = t(8989),
                    o = t(1961);

                function i(e, r, t, n) {
                    return {
                        getLinkedCommunity: function(e) {
                            var t = {
                                url: n("formatString")(o.default.urls.getGroupCommunityInfoUrl, {
                                    groupId: e
                                })
                            };
                            return r.httpGet(t, {}).then((function(e) {
                                return e
                            })).catch((function(e) {}))
                        },
                        getAnnouncement: function(e) {
                            var t = {
                                url: n("formatString")(o.default.urls.getGroupAnnouncement, {
                                    groupId: e
                                })
                            };
                            return r.httpGet(t, {}).then((function(e) {
                                return e
                            })).catch((function(e) {}))
                        }
                    }
                }
                i.$inject = ["$q", "httpService", "groupsConstants", "$filter"], n.A.factory("communityLinksService", i), r.default = i
            },
            5021: function(e, r, t) {
                "use strict";
                t.r(r), t.d(r, {
                    default: function() {
                        return c
                    }
                });
                var n = t(8989),
                    o = CoreRobloxUtilities;

                function i(e, r) {
                    var t = Object.keys(e);
                    if (Object.getOwnPropertySymbols) {
                        var n = Object.getOwnPropertySymbols(e);
                        r && (n = n.filter((function(r) {
                            return Object.getOwnPropertyDescriptor(e, r).enumerable
                        }))), t.push.apply(t, n)
                    }
                    return t
                }

                function a(e) {
                    for (var r = 1; r < arguments.length; r++) {
                        var t = null != arguments[r] ? arguments[r] : {};
                        r % 2 ? i(Object(t), !0).forEach((function(r) {
                            s(e, r, t[r])
                        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : i(Object(t)).forEach((function(r) {
                            Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r))
                        }))
                    }
                    return e
                }

                function s(e, r, t) {
                    return r in e ? Object.defineProperty(e, r, {
                        value: t,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0
                    }) : e[r] = t, e
                }

                function u(e) {
                    return {
                        logGroupPageExposureEvent: function(r) {
                            var t = r.context,
                                n = r.groupId,
                                i = r.exposureType,
                                s = r.exposureId;
                            o.eventStreamService.sendEventWithTarget(e.EventType.GroupPageExposureEvent, t, a({
                                groupId: n,
                                exposureType: i
                            }, s && {
                                exposureId: s
                            }))
                        },
                        logGroupPageClickEvent: function(r) {
                            var t = r.context,
                                n = r.groupId,
                                i = r.clickTargetType,
                                s = r.clickTargetId;
                            o.eventStreamService.sendEventWithTarget(e.EventType.GroupPageClickEvent, t, a({
                                groupId: n,
                                clickTargetType: i
                            }, s && {
                                clickTargetId: s
                            }))
                        }
                    }
                }
                u.$inject = ["eventConstants"], n.A.factory("groupEventLoggingService", u);
                var c = u
            },
            7982: function(e, r, t) {
                "use strict";
                t.r(r);
                var n = t(7577),
                    o = t(8989);

                function i(e, r, t, n, o, i, a) {
                    try {
                        var s = e[i](a),
                            u = s.value
                    } catch (e) {
                        return void t(e)
                    }
                    s.done ? r(u) : Promise.resolve(u).then(n, o)
                }

                function a(e) {
                    return function() {
                        var r = this,
                            t = arguments;
                        return new Promise((function(n, o) {
                            var a = e.apply(r, t);

                            function s(e) {
                                i(a, n, o, s, u, "next", e)
                            }

                            function u(e) {
                                i(a, n, o, s, u, "throw", e)
                            }
                            s(void 0)
                        }))
                    }
                }

                function s(e) {
                    var r, t, o, i, s, u = {},
                        c = function() {
                            var e = a(regeneratorRuntime.mark((function e(r) {
                                return regeneratorRuntime.wrap((function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            return u[r] || (u[r] = n.ExperimentationService.getAllValuesForLayer(r)), e.abrupt("return", u[r]);
                                        case 2:
                                        case "end":
                                            return e.stop()
                                    }
                                }), e)
                            })));
                            return function(r) {
                                return e.apply(this, arguments)
                            }
                        }();
                    return {
                        getLandingPageExperiment: (s = a(regeneratorRuntime.mark((function r() {
                            var t, o, i, a, s;
                            return regeneratorRuntime.wrap((function(r) {
                                for (;;) switch (r.prev = r.next) {
                                    case 0:
                                        if (t = {
                                                useSearchLanding: !1,
                                                isSearchV2: !1
                                            }, n.CurrentUser.isAuthenticated) {
                                            r.next = 3;
                                            break
                                        }
                                        return r.abrupt("return", t);
                                    case 3:
                                        return r.prev = 3, r.next = 6, c(e.experimentLayer);
                                    case 6:
                                        (o = r.sent).groupsLandingConfig && (i = o.groupsLandingConfig, a = i.isSearchV2, s = i.useSearchLanding, t.isSearchV2 = a, t.useSearchLanding = s), r.next = 12;
                                        break;
                                    case 10:
                                        r.prev = 10, r.t0 = r.catch(3);
                                    case 12:
                                        return r.abrupt("return", t);
                                    case 13:
                                    case "end":
                                        return r.stop()
                                }
                            }), r, null, [
                                [3, 10]
                            ])
                        }))), function() {
                            return s.apply(this, arguments)
                        }),
                        exposeLandingPageExperiment: function() {
                            n.CurrentUser.isAuthenticated && n.ExperimentationService.logLayerExposure(e.experimentLayer)
                        },
                        isHidingEmptyCommunityTabsExperimentEnabled: (i = a(regeneratorRuntime.mark((function r() {
                            var t, o;
                            return regeneratorRuntime.wrap((function(r) {
                                for (;;) switch (r.prev = r.next) {
                                    case 0:
                                        if (n.CurrentUser.isAuthenticated) {
                                            r.next = 2;
                                            break
                                        }
                                        return r.abrupt("return", !1);
                                    case 2:
                                        return r.prev = 2, r.next = 5, c(e.socialCommunityExperimentLayer);
                                    case 5:
                                        return o = r.sent, r.abrupt("return", null !== (t = o.hideEmptyCommunityTabs) && void 0 !== t && t);
                                    case 9:
                                        r.prev = 9, r.t0 = r.catch(2);
                                    case 11:
                                        return r.abrupt("return", !1);
                                    case 12:
                                    case "end":
                                        return r.stop()
                                }
                            }), r, null, [
                                [2, 9]
                            ])
                        }))), function() {
                            return i.apply(this, arguments)
                        }),
                        isGroupsListRedesignExperimentEnabled: (o = a(regeneratorRuntime.mark((function r() {
                            var t, o;
                            return regeneratorRuntime.wrap((function(r) {
                                for (;;) switch (r.prev = r.next) {
                                    case 0:
                                        if (n.CurrentUser.isAuthenticated) {
                                            r.next = 2;
                                            break
                                        }
                                        return r.abrupt("return", !1);
                                    case 2:
                                        return r.prev = 2, r.next = 5, c(e.socialCommunityExperimentLayer);
                                    case 5:
                                        return o = r.sent, r.abrupt("return", null !== (t = null == o ? void 0 : o.showGroupsListRedesign) && void 0 !== t && t);
                                    case 9:
                                        r.prev = 9, r.t0 = r.catch(2);
                                    case 11:
                                        return r.abrupt("return", !1);
                                    case 12:
                                    case "end":
                                        return r.stop()
                                }
                            }), r, null, [
                                [2, 9]
                            ])
                        }))), function() {
                            return o.apply(this, arguments)
                        }),
                        isGroupExperiencesRedesignExperimentEnabled: (t = a(regeneratorRuntime.mark((function r() {
                            var t, o;
                            return regeneratorRuntime.wrap((function(r) {
                                for (;;) switch (r.prev = r.next) {
                                    case 0:
                                        if (n.CurrentUser.isAuthenticated) {
                                            r.next = 2;
                                            break
                                        }
                                        return r.abrupt("return", !1);
                                    case 2:
                                        return r.prev = 2, r.next = 5, c(e.socialCommunityExperimentLayer);
                                    case 5:
                                        return o = r.sent, r.abrupt("return", null !== (t = null == o ? void 0 : o.showGroupExperiencesRedesign) && void 0 !== t && t);
                                    case 9:
                                        r.prev = 9, r.t0 = r.catch(2);
                                    case 11:
                                        return r.abrupt("return", !1);
                                    case 12:
                                    case "end":
                                        return r.stop()
                                }
                            }), r, null, [
                                [2, 9]
                            ])
                        }))), function() {
                            return t.apply(this, arguments)
                        }),
                        isMembersListModalRedesignExperimentEnabled: (r = a(regeneratorRuntime.mark((function r() {
                            var t, o;
                            return regeneratorRuntime.wrap((function(r) {
                                for (;;) switch (r.prev = r.next) {
                                    case 0:
                                        if (n.CurrentUser.isAuthenticated) {
                                            r.next = 2;
                                            break
                                        }
                                        return r.abrupt("return", !1);
                                    case 2:
                                        return r.prev = 2, r.next = 5, c(e.socialCommunityExperimentLayer);
                                    case 5:
                                        return o = r.sent, r.abrupt("return", null !== (t = null == o ? void 0 : o.showMembersListModalRedesign) && void 0 !== t && t);
                                    case 9:
                                        r.prev = 9, r.t0 = r.catch(2);
                                    case 11:
                                        return r.abrupt("return", !1);
                                    case 12:
                                    case "end":
                                        return r.stop()
                                }
                            }), r, null, [
                                [2, 9]
                            ])
                        }))), function() {
                            return r.apply(this, arguments)
                        })
                    }
                }
                s.$inject = ["groupsConstants"], o.A.factory("groupExperimentsService", s), r.default = s
            },
            3014: function(e, r, t) {
                "use strict";
                t.r(r);
                var n = t(7577),
                    o = t(8989);

                function i(e, r) {
                    return {
                        getWebFriendsRenamePolicies: function() {
                            return r.httpGet({
                                url: "".concat(n.EnvironmentUrls.apiGatewayUrl, "/universal-app-configuration/v1/behaviors/web-rename-friends/content"),
                                retryable: !0,
                                withCredentials: !0
                            })
                        }
                    }
                }
                i.$inject = ["$q", "httpService"], o.A.factory("groupGuacService", i), r.default = i
            },
            9434: function(e, r, t) {
                "use strict";
                t.r(r);
                var n = t(8989);

                function o(e, r) {
                    var t = Object.keys(e);
                    if (Object.getOwnPropertySymbols) {
                        var n = Object.getOwnPropertySymbols(e);
                        r && (n = n.filter((function(r) {
                            return Object.getOwnPropertyDescriptor(e, r).enumerable
                        }))), t.push.apply(t, n)
                    }
                    return t
                }

                function i(e) {
                    for (var r = 1; r < arguments.length; r++) {
                        var t = null != arguments[r] ? arguments[r] : {};
                        r % 2 ? o(Object(t), !0).forEach((function(r) {
                            a(e, r, t[r])
                        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : o(Object(t)).forEach((function(r) {
                            Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r))
                        }))
                    }
                    return e
                }

                function a(e, r, t) {
                    return r in e ? Object.defineProperty(e, r, {
                        value: t,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0
                    }) : e[r] = t, e
                }

                function s(e, r, t, n) {
                    var o = {};
                    return {
                        getGroupMembership: function(i) {
                            return e((function(e, a) {
                                if (!o[i]) {
                                    var s = {
                                        url: n("formatString")(t.urls.getGroupMembership, {
                                            id: i
                                        })
                                    };
                                    return r.httpGet(s).then((function(r) {
                                        o[i] = r, e(r)
                                    }), a)
                                }
                                e(o[i])
                            }))
                        },
                        joinGroup: function(a, s, u) {
                            return e((function(e, c) {
                                var l = {
                                        url: n("formatString")(t.urls.joinGroup, {
                                            id: a
                                        })
                                    },
                                    p = i(i({}, s), u);
                                return r.httpPost(l, p).then((function(r) {
                                    o = {}, e(r)
                                }), c)
                            }))
                        },
                        claimOwnership: function(i) {
                            return e((function(e, a) {
                                var s = {
                                    url: n("formatString")(t.urls.claimOwnership, {
                                        groupId: i
                                    })
                                };
                                return r.httpPost(s, {}).then((function(r) {
                                    o = {}, e(r)
                                }), a)
                            }))
                        },
                        makePrimaryGroup: function(n) {
                            return e((function(e, i) {
                                var a = {
                                        groupId: n
                                    },
                                    s = {
                                        url: t.urls.updatePrimaryGroup
                                    };
                                return r.httpPost(s, a).then((function(r) {
                                    o = {}, e(r)
                                }), i)
                            }))
                        },
                        removePrimaryGroup: function() {
                            return e((function(e, n) {
                                var i = {
                                    url: t.urls.updatePrimaryGroup
                                };
                                return r.httpDelete(i, {}).then((function(r) {
                                    o = {}, e(r)
                                }), n)
                            }))
                        },
                        leaveGroup: function(i, a) {
                            return e((function(e, s) {
                                var u = {
                                    url: n("formatString")(t.urls.updateUserRole, {
                                        groupId: i,
                                        userId: a
                                    })
                                };
                                return r.httpDelete(u, {}).then((function(r) {
                                    o = {}, e(r)
                                }), s)
                            }))
                        },
                        cancelGroupJoinRequest: function(i, a) {
                            return e((function(e, s) {
                                var u = {
                                    url: n("formatString")(t.urls.deleteGroupJoinRequest, {
                                        groupId: i,
                                        userId: a
                                    })
                                };
                                return r.httpDelete(u, {}).then((function(r) {
                                    o = {}, e(r)
                                }), s)
                            }))
                        }
                    }
                }
                s.$inject = ["$q", "httpService", "groupsConstants", "$filter"], n.A.factory("groupMembershipService", s), r.default = s
            },
            9306: function(e, r, t) {
                "use strict";
                t.r(r);
                var n = t(7577),
                    o = t(8989);
                s.$inject = ["$filter", "urlService", "$location", "groupsConstants"];
                var i = /\/groups/g,
                    a = /\/(?:groups|communities|profiles)\/(\d+)\//g;

                function s(e, r, t, o) {
                    return {
                        redirectToCommunitiesIfNecessary: function() {
                            var e = t.absUrl();
                            if (i.test(e)) {
                                var r = e.replace(i, "/communities");
                                window.history.replaceState(null, "", r)
                            }
                        },
                        redirectToPage: function(e) {
                            e && window.history.replaceState(null, "", e)
                        },
                        setPageTitle: function(e, r) {
                            var t = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
                            if (r) {
                                var n = r.querySelector("title");
                                n && (n.textContent = "".concat(e).concat(t ? " - Roblox" : ""))
                            }
                        },
                        parseGroupId: function(e) {
                            var r = a.exec(e);
                            return r && r.length > 1 ? Number(r[1]) : null
                        },
                        buildGameReferralUrl: function(t) {
                            var n = r.getGameDetailReferralUrls(),
                                o = e("formatString")(n.groupDetail, {
                                    placeId: t
                                });
                            return r.getAbsoluteUrl(o)
                        },
                        profilePageUrl: function(e) {
                            return n.Endpoints ? n.Endpoints.getAbsoluteUrl("/users/".concat(e, "/profile")) : "/users/".concat(e, "/profile")
                        },
                        groupDetailsPageUrl: function(r, t) {
                            return e("seoUrl")(o.urlBase, r, t)
                        }
                    }
                }
                o.A.factory("groupUtilityService", s), r.default = s
            },
            9339: function(e, r, t) {
                "use strict";
                t.r(r), t.d(r, {
                    default: function() {
                        return u
                    }
                });
                var n = t(7577),
                    o = jQuery,
                    i = t.n(o),
                    a = t(8989);

                function s(e, r, t, o) {
                    var a, s, u;
                    return {
                        getGroup: function(e) {
                            var i = {
                                url: o("formatString")(t.urls.getGroup, {
                                    id: e
                                })
                            };
                            return r.httpGet(i, {}).then((function(e) {
                                if (null != e && e.owner) {
                                    var r = e.owner,
                                        t = r.displayName,
                                        o = r.username;
                                    r.nameForDisplay = n.DisplayNames.Enabled() ? t : o
                                }
                                return e
                            }))
                        },
                        getGroupMetadata: function() {
                            var e = {
                                url: o("formatString")(t.urls.getGroupMetadata)
                            };
                            return r.httpGet(e)
                        },
                        getGroupConfigurationMetadata: function() {
                            return e((function(e, n) {
                                if (a) e(a);
                                else {
                                    var i = {
                                        url: o("formatString")(t.urls.getGroupConfigurationMetadata)
                                    };
                                    r.httpGet(i).then((function(r) {
                                        a = r, e(r)
                                    }), n)
                                }
                            }))
                        },
                        getGroupRoles: function(e) {
                            var n = {
                                url: o("formatString")(t.urls.getGroupRoles, {
                                    id: e
                                }),
                                retryable: !1
                            };
                            return r.httpGet(n)
                        },
                        getGroupRolePermissions: function(e, n) {
                            var i = {
                                url: o("formatString")(t.urls.getGroupRolePermissions, {
                                    groupId: e,
                                    roleSetId: n
                                })
                            };
                            return r.httpGet(i, {})
                        },
                        exileUser: function(e, n) {
                            var i = {
                                url: o("formatString")(t.urls.updateUserRole, {
                                    groupId: e,
                                    userId: n
                                })
                            };
                            return r.httpDelete(i)
                        },
                        banUser: function(e, n) {
                            var i = {
                                url: o("formatString")(t.urls.userGroupBan, {
                                    groupId: e,
                                    userId: n
                                })
                            };
                            return r.httpPost(i)
                        },
                        fetchUserGroupBan: function(e, n) {
                            var i = {
                                url: o("formatString")(t.urls.userGroupBan, {
                                    groupId: e,
                                    userId: n
                                })
                            };
                            return r.httpGet(i)
                        },
                        deletePostsByUser: function(e, r) {
                            var n = function(e) {
                                    return new Promise((function(r, t) {
                                        i().ajax({
                                            method: "DELETE",
                                            url: e,
                                            contentType: "application/json",
                                            timeout: 1e4,
                                            success: r,
                                            error: t,
                                            withCredentials: !0
                                        })
                                    }))
                                },
                                a = o("formatString")(t.urls.deleteWallPostsByUser, {
                                    groupId: e,
                                    userId: r
                                }),
                                s = o("formatString")(t.urls.deleteForumPostsByUser, {
                                    groupId: e,
                                    userId: r
                                });
                            return Promise.all([n(a), n(s)])
                        },
                        getGroupSettings: function(n) {
                            return e((function(e, i) {
                                if (s) e(s);
                                else {
                                    var a = {
                                        url: o("formatString")(t.urls.updateGroupSettings, {
                                            id: n
                                        })
                                    };
                                    r.httpGet(a, {}), r.httpGet(a).then((function(r) {
                                        e(s = r)
                                    }), i)
                                }
                            }))
                        },
                        updateGroupSettings: function(e, n) {
                            var i = {
                                url: o("formatString")(t.urls.updateGroupSettings, {
                                    id: e
                                })
                            };
                            return r.httpPatch(i, n)
                        },
                        getUserIdsFromUsernames: function(n) {
                            var i = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                            return e((function(e, a) {
                                var s = {
                                        url: o("formatString")(t.urls.usernames)
                                    },
                                    u = {
                                        usernames: n,
                                        excludeBannedUsers: i
                                    };
                                r.httpPost(s, u).then((function(r) {
                                    e(r.data)
                                }), (function(e) {
                                    a(e)
                                }))
                            }))
                        },
                        getUserRoleInGroup: function(n, i) {
                            return e((function(e, a) {
                                var s = {
                                    url: o("formatString")(t.urls.getGroupRolesForUser, {
                                        userId: n
                                    })
                                };
                                r.httpGet(s).then((function(r) {
                                    if (r.data) {
                                        var t = r.data.filter((function(e) {
                                            return e.group.id === i
                                        }));
                                        t && t.length > 0 ? e(t[0].role) : e(null)
                                    }
                                }), (function() {
                                    a("Could not fetch user groups. Please try again.")
                                }))
                            }))
                        },
                        getGroupDetailRules: function(e) {
                            var n = {
                                url: o("formatString")(t.urls.getGroupDetailsPolicy, {
                                    userId: e
                                })
                            };
                            return r.httpGet(n)
                        },
                        getConfigureGroupRules: function() {
                            return e((function(e, n) {
                                if (u) e(u);
                                else {
                                    var i = {
                                        url: o("formatString")(t.urls.getConfigureGroupPolicy)
                                    };
                                    r.httpGet(i).then((function(r) {
                                        u = r, e(r)
                                    }), n)
                                }
                            }))
                        },
                        getGroupPolicyInfo: function(e) {
                            var n = {
                                    url: o("formatString")(t.urls.getGroupPolicyInfo)
                                },
                                i = {
                                    groupIds: e
                                };
                            return r.httpPost(n, i)
                        },
                        getGroupCurrency: function(n) {
                            var i = {
                                url: o("formatString")(t.urls.getCurrency, {
                                    groupId: n
                                })
                            };
                            return e((function(e, t) {
                                return r.httpGet(i).then((function(r) {
                                    e(r.robux)
                                }), (function(e) {
                                    var n = r.getApiErrorCodes(e);
                                    t(n[0] || 0)
                                }))
                            }))
                        },
                        getUserCurrency: function(n) {
                            var i = {
                                url: o("formatString")(t.urls.getUserCurrency, {
                                    userId: n
                                })
                            };
                            return e((function(e, t) {
                                return r.httpGet(i).then((function(r) {
                                    e(r.robux)
                                }), (function(e) {
                                    var n = r.getApiErrorCodes(e);
                                    t(n[0] || 0)
                                }))
                            }))
                        },
                        getAddFundsAllowed: function(n) {
                            var i = {
                                url: o("formatString")(t.urls.getAddFundsAllowedUrl, {
                                    groupId: n
                                })
                            };
                            return e((function(e) {
                                return r.httpGet(i).then((function(r) {
                                    e(r)
                                }), (function() {
                                    e(!1)
                                }))
                            }))
                        },
                        getPreviousGroupNames: function(e) {
                            var n = {
                                url: o("formatString")(t.urls.groupNameHistory, {
                                    id: e
                                })
                            };
                            return r.httpGet(n, {})
                        },
                        getGroupForums: function(e) {
                            var n = {
                                url: o("formatString")(t.urls.getGroupForums, {
                                    groupId: e
                                })
                            };
                            return r.httpGet(n)
                        },
                        getGroupEvents: function(e) {
                            var n = {
                                url: o("formatString")(t.urls.getGroupEvents, {
                                    groupId: e
                                })
                            };
                            return r.httpGet(n)
                        },
                        getGroupStore: function(e) {
                            var n = {
                                url: o("formatString")(t.urls.getGroupStoreItems, {
                                    groupId: e
                                })
                            };
                            return r.httpGet(n)
                        },
                        getGroupAffiliates: function(e) {
                            var n = {
                                url: o("formatString")(t.urls.getGroupAffiliates, {
                                    groupId: e
                                })
                            };
                            return r.httpGet(n)
                        },
                        changeOwner: function(e, n) {
                            var i = {
                                    url: o("formatString")(t.urls.changeOwner, {
                                        groupId: e
                                    })
                                },
                                a = {
                                    userId: n
                                };
                            return r.httpPost(i, a)
                        }
                    }
                }
                s.$inject = ["$q", "httpService", "groupsConstants", "$filter"], a.A.factory("groupsService", s);
                var u = s
            },
            6112: function(e, r, t) {
                "use strict";
                t.r(r);
                var n = t(7577),
                    o = t(798),
                    i = t(8989);

                function a(e, r, t, i, s, u, c, l) {
                    var p, d = 0,
                        g = "",
                        f = function() {
                            d < 3 && v(), d += 1
                        },
                        m = function(r) {
                            var n, o;
                            (n = g, o = r.verificationToken, e((function(e, r) {
                                t.httpPost({
                                    url: s.urls.redeemChallenge
                                }, {
                                    challengeToken: n,
                                    verificationToken: o
                                }).then((function(r) {
                                    e(r)
                                })).catch((function(e) {
                                    var n = t.getPrimaryApiErrorCode(e, i.errorCodes.api);
                                    r({
                                        code: n,
                                        message: e.message
                                    })
                                }))
                            }))).then((function(e) {
                                if (e) {
                                    var r = c.get("Response.SuccessfulVerificationV2");
                                    l.success(r, 100, 6e3)
                                } else a.showErrorBanner()
                            })).catch((function() {
                                a.showErrorBanner()
                            }))
                        },
                        v = function() {
                            var r = this;
                            e((function(e, r) {
                                t.httpPost({
                                    url: s.urls.generateChallenge
                                }).then((function(r) {
                                    e(r)
                                })).catch((function(e) {
                                    var n = t.getPrimaryApiErrorCode(e, i.errorCodes.api);
                                    r({
                                        code: n,
                                        message: e.message
                                    })
                                }))
                            })).then((function(e) {
                                g = e, p.renderChallenge({
                                    containerId: "2sv-popup-container",
                                    userId: o.authenticatedUser.id,
                                    challengeId: e,
                                    actionType: p.ActionType.RobuxSpend,
                                    renderInline: !1,
                                    shouldShowRememberDeviceCheckbox: !1,
                                    onChallengeCompleted: m,
                                    onChallengeInvalidated: f,
                                    onModalChallengeAbandoned: function() {}
                                })
                            })).catch((function() {
                                r.verificationService.showErrorBanner()
                            }))
                        };
                    return {
                        getTwoStepVerificationConfiguration: function() {
                            return e((function(e, n) {
                                t.httpGet({
                                    url: r("formatString")(s.urls.get2SVConfiguration, {
                                        userId: null === o.authenticatedUser || void 0 === o.authenticatedUser ? void 0 : o.authenticatedUser.id
                                    })
                                }).then((function(r) {
                                    u.getGroupConfigurationMetadata().then((function(t) {
                                        var n, o = !1;
                                        o = (n = t.groupConfiguration.isUsingTwoStepWebviewComponent) ? r.methods.some((function(e) {
                                            return e.enabled
                                        })) : r.methods.some((function(e) {
                                            return e.mediaType === s.twoStepMediaType.email && e.enabled
                                        })), e({
                                            twoStepEnabled: o,
                                            usingTwoStepWebviewComponent: n
                                        })
                                    }))
                                })).catch((function() {
                                    n(!1)
                                }))
                            }))
                        },
                        generateChallengeCode: function() {
                            return e((function(e, r) {
                                t.httpPost({
                                    url: s.urls.generateChallenge
                                }).then((function(r) {
                                    e(r)
                                })).catch((function(e) {
                                    var n = t.getPrimaryApiErrorCode(e, i.errorCodes.api);
                                    r({
                                        code: n,
                                        message: e.message
                                    })
                                }))
                            }))
                        },
                        verifyChallengeCode: function(n, o, a) {
                            return e((function(e, u) {
                                t.httpPost({
                                    url: r("formatString")(s.urls.verifyChallenge, {
                                        userId: n
                                    })
                                }, {
                                    challengeId: o,
                                    actionType: i.actionTypes.robuxSpend,
                                    code: a
                                }).then((function(r) {
                                    e(r.verificationToken)
                                })).catch((function(e) {
                                    var r = t.getPrimaryApiErrorCode(e, i.errorCodes.api);
                                    u({
                                        code: r,
                                        message: e.message
                                    })
                                }))
                            }))
                        },
                        redeemVerificationChallenge: function(r, n) {
                            return e((function(e, o) {
                                t.httpPost({
                                    url: s.urls.redeemChallenge
                                }, {
                                    challengeToken: r,
                                    verificationToken: n
                                }).then((function(r) {
                                    e(r)
                                })).catch((function(e) {
                                    var r = t.getPrimaryApiErrorCode(e, i.errorCodes.api);
                                    o({
                                        code: r,
                                        message: e.message
                                    })
                                }))
                            }))
                        },
                        resendCode: function(n, o) {
                            return e((function(e, a) {
                                t.httpPost({
                                    url: r("formatString")(s.urls.resendCode, {
                                        userId: n
                                    })
                                }, {
                                    challengeId: o,
                                    actionType: i.actionTypes.robuxSpend
                                }).then((function() {
                                    e({})
                                })).catch((function(e) {
                                    var r = t.getPrimaryApiErrorCode(e, i.errorCodes.api);
                                    a({
                                        code: r,
                                        message: e.message
                                    })
                                }))
                            }))
                        },
                        sendFrictionEvent: function(e) {
                            n.EventStream && n.EventStream.SendEvent && n.EventStream.SendEvent(i.events.frictionEventType, i.events.twoStepVerificationCtx, {
                                btn: e
                            })
                        },
                        showErrorBanner: function() {
                            var e = c.get("Response.VerificationError");
                            l.warning(e, 100, 6e3)
                        },
                        popUpTwoStepVerificationChallenge: function(e, r) {
                            p = r, this.sendFrictionEvent(e), v()
                        }
                    }
                }
                a.$inject = ["$q", "$filter", "httpService", "verificationResources", "groupsConstants", "groupsService", "languageResource", "systemFeedbackService"], i.A.factory("verificationService", a), r.default = a
            },
            9899: function(e) {
                e.exports = '<div class="modal-header"> <button type="button" class="close" ng-click="close()"> <span aria-hidden="true"> <span class="icon-close"></span> </span> <span class="sr-only" ng-bind="\'Action.Close\'"></span> </button> <h4 ng-bind="\'Heading.BanUserWarning\' | translate"></h4> </div> <div class="modal-body"> <span class="text-description" ng-bind="\'Description.BanUserWarning\' | translate"></span> </div> <div class="modal-buttons"> <button class="modal-button btn-secondary-md" ng-click="banUser()" ng-bind="\'Action.Ban\' | translate"></button> <button class="modal-button btn-control-md" ng-click="close()" ng-bind="\'Action.Cancel\' | translate"></button> </div> <div class="modal-footer" ng-if="params.showDeletePostsCheckbox"> <div class="checkbox"> <input id="deleteWallPostsByUserCheckbox" type="checkbox" ng-model="layout.deleteWallPosts"> <label for="deleteWallPostsByUserCheckbox" ng-bind="\'Label.DeleteAllPostsByUser\' | translate"></label> </div> </div>'
            },
            4292: function(e) {
                e.exports = '<div id="change-owner"> <div class="modal-header"> <button type="button" class="close" ng-click="close()"> <span class="icon-close"></span> </button> <div class="modal-title"> <h4 ng-bind="\'Label.ChangeOwner\' | translate"></h4> </div> </div> <div class="modal-body"> <p class="body-text text-description" ng-bind="\'Label.SelectNewOwner\' | translate"></p> <search-dropdown target-type="User" select="selectUser"></search-dropdown> <div class="avatar-card"> <span class="spinner spinner-sm" ng-show="layout.isLoadingUser"></span> <div class="avatar-card-container" ng-if="newOwner.id" ng-hide="layout.isLoadingUser"> <div class="avatar avatar-headshot avatar-headshot-sm"> <a class="avatar-card-link" ng-href="{{ newOwner.url }}" target="_blank"> <thumbnail-2d class="avatar-card-image" thumbnail-type="thumbnailTypes.avatarHeadshot" thumbnail-target-id="newOwner.id"></thumbnail-2d> </a> </div> <div class="avatar-card-caption"> <div class="text-overflow avatar-name" ng-bind="layout.isDisplayNamesEnabled ? newOwner.displayName : newOwner.name"></div> <div class="avatar-card-label text-overflow" ng-bind="newOwner.role"></div> </div> </div> </div> <div class="border-warning group-modal-warning"> <span class="icon-warning-orange"></span> <span id="change-owner-warning" class="text-warning form-warning-text" ng-bind="\'Description.ChangeOwnerWarning\' | translate"></span> </div> </div> <div class="modal-buttons" toggle-loading="" is-inline="true" is-loading="layout.isLoading"> <button type="button" class="modal-button btn-primary-md" ng-disabled="layout.isLoadingUser || !newOwner.id" ng-click="changeOwner()" ng-bind="\'Action.OK\' | translate"></button> <button type="button" class="modal-button btn-secondary-md" ng-click="close()" ng-bind="\'Action.Cancel\' | translate"></button> </div> <span id="2sv-popup-container"></span> </div>'
            },
            5067: function(e) {
                e.exports = '<div class="modal-header"> <button type="button" class="close" ng-click="close()"> <span aria-hidden="true"> <span class="icon-close"></span> </span> <span class="sr-only" ng-bind="\'Action.Close\'"></span> </button> <h4 ng-bind="\'Label.ChangeOwnerQuestion\' | translate"></h4> </div> <div class="modal-body"> <div class="border-warning group-modal-warning"> <span class="icon-warning-orange"></span> <span id="change-owner-upsell-warning" class="text-warning form-warning-text" ng-bind="\'Description.LeaveGroupAsOwnerConfirm\' | translate"></span> </div> </div> <div class="modal-buttons"> <button class="modal-button btn-primary-md" ng-click="changeOwner()" ng-bind="\'Action.Yes\' | translate"></button> <button class="modal-button btn-secondary-md" ng-click="leaveGroup()" ng-bind="\'Action.No\' | translate"></button> </div>'
            },
            3841: function(e) {
                e.exports = '<div class="modal-header"> <button type="button" class="close" ng-click="close()"> <span aria-hidden="true"> <span class="icon-close"></span> </span> <span class="sr-only" ng-bind="\'Action.Close\' | translate"></span> </button> <h4 ng-bind="\'Heading.ExileUserWarning\' | translate"></h4> </div> <div class="modal-body"> <span class="text-description" ng-bind="\'Description.KickUserWarning\' | translate"></span> </div> <div class="modal-buttons"> <button class="modal-button btn-secondary-md" ng-click="exileUser()" ng-bind="\'Action.Kick\' | translate"></button> <button class="modal-button btn-control-md" ng-click="close()" ng-bind="\'Action.Cancel\' | translate"></button> </div> <div class="modal-footer" ng-if="params.showDeletePostsCheckbox"> <div class="checkbox"> <input id="deleteWallPostsByUserCheckbox" type="checkbox" ng-model="layout.deleteWallPosts"> <label for="deleteWallPostsByUserCheckbox" ng-bind="\'Label.DeleteAllPostsByUser\' | translate"></label> </div> </div>'
            },
            3075: function(e) {
                e.exports = '<a ng-href="{{ $ctrl.url }}" target="_self" ng-click="$ctrl.handleClick == null ? null : $ctrl.handleClick($ctrl.group)" class="card-item game-card-container"> <thumbnail-2d thumbnail-type="$ctrl.thumbnailTypes.groupIcon" thumbnail-target-id="$ctrl.group.id" class="game-card-thumb-container"></thumbnail-2d> <div class="game-card-container group-card-name-container"> <div class="game-card-name game-card-name-with-verified-badge text-overflow" title="{{ $ctrl.group.name }}" ng-bind="$ctrl.group.name"> </div> <span ng-if="$ctrl.group.hasVerifiedBadge" class="verified-badge-icon-group-discover" data-size="Title" data-overrideimgclass="verified-badge-icon-group-discover-rendered" data-disablemodal> </span> </div> <div class="text-overflow game-card-name-secondary" ng-bind="\'Label.Members\' | translate:{ memberCount: $ctrl.group.memberCount}" ng-if="!$ctrl.isV2"> </div> <div class="text-overflow game-card-name-secondary" ng-if="$ctrl.isV2"> <span class="icon-nav-group"></span> <span class="game-card-name-secondary-text" title="{{ $ctrl.group.memberCount }}" ng-bind="$ctrl.group.memberCount | abbreviate"></span> </div> </a> '
            },
            9686: function(e) {
                e.exports = '<div id="verification-input"> <div class="modal-header"> <div class="modal-title"> <h4 ng-bind="\'Label.TwoStepVerification\' | translate"></h4> </div> </div> <div class="modal-body"> <p class="body-text text-description" ng-bind="\'Label.EnterEmailCode\' | translate"></p> <div class="form-group" ng-class="{\'form-has-feedback form-has-error\': layout.invalidCodeError}"> <input class="input-field text-center" autocomplete="false" name="verification-code" placeholder="{{ layout.codeInputPlaceholder }}" maxlength="{{ layout.codeLength }}" numbers-only ng-trim="false" ng-model="properties.code"/> <p class="text-error" ng-show="layout.invalidCodeError" ng-bind="layout.invalidCodeErrorMessage"></p> </div> <div class="code-message-action text-center"> <div class="text-block" ng-if="layout.codeSent"> <span class="xsmall text-name" ng-bind="\'Response.CodeSent\' | translate"></span> </div> <br ng-if="layout.codeSent"/> <div class="text-block"> <a class="text-name small" ng-click="resendCode()" ng-bind="\'Action.Resend\' | translate"></a> </div> </div> <div class="modal-buttons" is-inline="true"> <button type="button" ng-show="!layout.isPendingVerification" ng-disabled="properties.code.length != layout.codeLength" class="btn-primary-md" ng-click="verifyCode()" ng-bind="\'Action.Verify\' | translate"> </button> <div class="spinner spinner-default" ng-show="layout.isPendingVerification"></div> </div> </div> <div class="modal-footer-note"> <span class="text-footer" ng-bind-html="layout.supportLinkPhrase"></span> </div> </div>'
            },
            1030: function(e) {
                e.exports = '<div id="verification-redirect"> <div class="modal-header"> <div class="modal-title"> <h4 ng-bind="\'Heading.TwoStepVerificationRequiredV3\' | translate"></h4> </div> </div> <div class="modal-body"> <p class="body-text text-description" ng-bind="\'Message.TwoStepVerificationRequiredV4\' | translate"></p> <div class="modal-warning-icon-image"></div> </div> <div class="modal-buttons" toggle-loading="" is-inline="true" is-loading="layout.isLoading"> <button type="button" class="modal-button btn-primary-md" ng-click="redirectToSettings()" ng-bind="\'Action.GoToSecurity\' | translate"> </button> <button type="button" class="modal-button btn-secondary-md" ng-click="close()" ng-bind="\'Action.Cancel\' | translate"> </button> </div> </div> '
            },
            798: function(e) {
                "use strict";
                e.exports = HeaderScripts
            },
            7577: function(e) {
                "use strict";
                e.exports = Roblox
            },
            127: function(e) {
                "use strict";
                e.exports = angular
            }
        },
        r = {};

    function t(n) {
        var o = r[n];
        if (void 0 !== o) return o.exports;
        var i = r[n] = {
            exports: {}
        };
        return e[n](i, i.exports, t), i.exports
    }
    t.n = function(e) {
            var r = e && e.__esModule ? function() {
                return e.default
            } : function() {
                return e
            };
            return t.d(r, {
                a: r
            }), r
        }, t.d = function(e, r) {
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
        },
        function() {
            "use strict";
            var e = t(127),
                r = t.n(e),
                n = t(7525);
            t(8989);
            (0, n.importFilesUnderPath)(t(3404)), (0, n.importFilesUnderPath)(t(6289)), (0, n.importFilesUnderPath)(t(2377)), (0, n.importFilesUnderPath)(t(5396));
            var o = t(9749);
            (0, n.templateCacheGenerator)(r(), "groupsTemplates", o)
        }()
}();
//# sourceMappingURL=https://sourcemaps.rbxcdn.com/775fdee2442af5340c0137840336189c-groups.bundle.min.js.map

! function() {
    var r = {
            4487: function(r, e, t) {
                var o = {
                    "./groupReactGroupsListComponent.js": 4228,
                    "./groupShowcaseGridComponent.js": 3888,
                    "./groupsListComponent.js": 3074,
                    "./groupsListItemComponent.js": 1627,
                    "./groupsShowcaseCardComponent.js": 4667,
                    "./mobileGroupsListComponent.js": 396,
                    "./mobileGroupsListItemComponent.js": 6053
                };

                function s(r) {
                    var e = n(r);
                    return t(e)
                }

                function n(r) {
                    if (!t.o(o, r)) {
                        var e = new Error("Cannot find module '" + r + "'");
                        throw e.code = "MODULE_NOT_FOUND", e
                    }
                    return o[r]
                }
                s.keys = function() {
                    return Object.keys(o)
                }, s.resolve = n, r.exports = s, s.id = 4487
            },
            9016: function(r, e, t) {
                var o = {
                    "./groupsListConstants.js": 1243
                };

                function s(r) {
                    var e = n(r);
                    return t(e)
                }

                function n(r) {
                    if (!t.o(o, r)) {
                        var e = new Error("Cannot find module '" + r + "'");
                        throw e.code = "MODULE_NOT_FOUND", e
                    }
                    return o[r]
                }
                s.keys = function() {
                    return Object.keys(o)
                }, s.resolve = n, r.exports = s, s.id = 9016
            },
            6268: function(r, e, t) {
                var o = {
                    "./groupsListBaseController.js": 4149,
                    "./groupsListController.js": 4520,
                    "./groupsListItemController.js": 6631,
                    "./groupsShowcaseGridController.js": 1601,
                    "./mobileGroupsListControler.js": 3922
                };

                function s(r) {
                    var e = n(r);
                    return t(e)
                }

                function n(r) {
                    if (!t.o(o, r)) {
                        var e = new Error("Cannot find module '" + r + "'");
                        throw e.code = "MODULE_NOT_FOUND", e
                    }
                    return o[r]
                }
                s.keys = function() {
                    return Object.keys(o)
                }, s.resolve = n, r.exports = s, s.id = 6268
            },
            3609: function(r, e, t) {
                var o = {
                    "./groupReactGroupsListDirective.js": 4156,
                    "./groupsListBaseDirective.js": 8525,
                    "./groupsShowcaseDirective.js": 6109,
                    "./groupsShowcaseSwitcherDirective.js": 1396
                };

                function s(r) {
                    var e = n(r);
                    return t(e)
                }

                function n(r) {
                    if (!t.o(o, r)) {
                        var e = new Error("Cannot find module '" + r + "'");
                        throw e.code = "MODULE_NOT_FOUND", e
                    }
                    return o[r]
                }
                s.keys = function() {
                    return Object.keys(o)
                }, s.resolve = n, r.exports = s, s.id = 3609
            },
            8675: function(r, e, t) {
                var o = {
                    "./groupsListService.js": 7712
                };

                function s(r) {
                    var e = n(r);
                    return t(e)
                }

                function n(r) {
                    if (!t.o(o, r)) {
                        var e = new Error("Cannot find module '" + r + "'");
                        throw e.code = "MODULE_NOT_FOUND", e
                    }
                    return o[r]
                }
                s.keys = function() {
                    return Object.keys(o)
                }, s.resolve = n, r.exports = s, s.id = 8675
            },
            780: function(r, e, t) {
                var o = {
                    "./components/templates/groupReactGroupsList.html": 6255,
                    "./components/templates/groupsList.html": 1185,
                    "./components/templates/groupsListItem.html": 7393,
                    "./components/templates/groupsShowcaseCard.html": 5686,
                    "./components/templates/groupsShowcaseGrid.html": 7868,
                    "./components/templates/mobileGroupsList.html": 5003,
                    "./components/templates/mobileGroupsListItem.html": 3176,
                    "./directives/templates/groupsListBase.html": 7522,
                    "./directives/templates/groupsShowcase.html": 5338,
                    "./directives/templates/groupsShowcaseSwitcher.html": 809
                };

                function s(r) {
                    var e = n(r);
                    return t(e)
                }

                function n(r) {
                    if (!t.o(o, r)) {
                        var e = new Error("Cannot find module '" + r + "'");
                        throw e.code = "MODULE_NOT_FOUND", e
                    }
                    return o[r]
                }
                s.keys = function() {
                    return Object.keys(o)
                }, s.resolve = n, r.exports = s, s.id = 780
            },
            7525: function(r) {
                function e(r) {
                    return r.replace(/([a-z])([A-Z])/g, "$1-$2").toLowerCase()
                }

                function t(r) {
                    return r.split("/").pop().replace(".html", "")
                }
                var o = {
                    importFilesUnderPath: function(r) {
                        r.keys().forEach(r)
                    },
                    templateCacheGenerator: function(r, o, s, n) {
                        return r.module(o, []).run(["$templateCache", function(r) {
                            s && s.keys().forEach((function(o) {
                                var n = e(t(o));
                                r.put(n, s(o))
                            })), n && n.keys().forEach((function(o) {
                                var s = e(t(o));
                                r.put(s, n(o).replace(/<\/?script[^>]*>/gi, ""))
                            }))
                        }])
                    }
                };
                r.exports = o
            },
            4228: function(r, e, t) {
                "use strict";
                t.r(e);
                var o = {
                    templateUrl: "group-react-groups-list",
                    bindings: {
                        currentGroup: "<",
                        groupsList: "<",
                        canCreateGroup: "<",
                        isSidebar: "<",
                        isLoadingGroups: "<",
                        loadFailure: "<",
                        showRanks: "<",
                        showMemberCounts: "<",
                        showButtonsOnTop: "<"
                    }
                };
                t(4711).A.component("groupReactGroupsList", o), e.default = o
            },
            3888: function(r, e, t) {
                "use strict";
                t.r(e);
                var o = {
                    templateUrl: "groups-showcase-grid",
                    bindings: {
                        groupsCache: "<"
                    },
                    controller: "groupsShowcaseGridController"
                };
                t(4711).A.component("groupsShowcaseGrid", o), e.default = o
            },
            3074: function(r, e, t) {
                "use strict";
                t.r(e);
                var o = {
                    templateUrl: "groups-list",
                    bindings: {
                        groupList: "<",
                        currentGroup: "<",
                        maxGroups: "<",
                        isLoadingGroups: "<",
                        loadFailure: "<"
                    },
                    controller: "groupsListController"
                };
                t(4711).A.component("groupsList", o), e.default = o
            },
            1627: function(r, e, t) {
                "use strict";
                t.r(e);
                var o = {
                    templateUrl: "groups-list-item",
                    bindings: {
                        group: "<"
                    },
                    controller: "groupsListItemController"
                };
                t(4711).A.component("groupsListItem", o), e.default = o
            },
            4667: function(r, e, t) {
                "use strict";
                t.r(e);
                var o = {
                    templateUrl: "groups-showcase-card",
                    bindings: {
                        group: "<"
                    },
                    controller: "groupsListItemController"
                };
                t(4711).A.component("groupsShowcaseCard", o), e.default = o
            },
            396: function(r, e, t) {
                "use strict";
                t.r(e);
                var o = {
                    templateUrl: "mobile-groups-list",
                    bindings: {
                        groups: "<",
                        loadFailure: "<"
                    },
                    controller: "mobileGroupsListController"
                };
                t(4711).A.component("mobileGroupsList", o), e.default = o
            },
            6053: function(r, e, t) {
                "use strict";
                t.r(e);
                var o = {
                    templateUrl: "mobile-groups-list-item",
                    bindings: {
                        group: "<"
                    },
                    controller: "groupsListItemController"
                };
                t(4711).A.component("mobileGroupsListItem", o), e.default = o
            },
            1243: function(r, e, t) {
                "use strict";
                t.r(e);
                var o = t(7577),
                    s = t(4711),
                    n = {
                        templates: {
                            groupsListBaseTemplate: "groups-list-base",
                            groupsShowcaseBaseTemplate: "groups-showcase",
                            groupsShowcaseCardTemplate: "groups-showcase-card",
                            groupsShowcaseSwitcherTemplate: "groups-showcase-switcher"
                        },
                        urls: {
                            groupsListUrl: "".concat(o.EnvironmentUrls.groupsApi, "/v1/users/{id}/groups/roles?includeLocked=true"),
                            primaryGroupUrl: "".concat(o.EnvironmentUrls.groupsApi, "/v1/users/{id}/groups/primary/role"),
                            getGroupPolicyInfo: "".concat(o.EnvironmentUrls.groupsApi, "/v1/groups/policies")
                        },
                        errorCodes: {
                            getGroups: {
                                3: 1
                            }
                        },
                        layout: {
                            isLoading: !1,
                            loadFailure: !1
                        },
                        showcaseLayout: {
                            startRow: 0,
                            maxRows: 12,
                            isLoading: !1,
                            loadFailure: !1
                        },
                        ownerRoleRank: 255,
                        groupsListSelector: "#groups-list"
                    };
                s.A.constant("groupsListConstants", n), e.default = n
            },
            4149: function(r, e, t) {
                "use strict";
                t.r(e);
                var o = t(7577),
                    s = t(4711);

                function n(r, e, t, o, s, n, i) {
                    try {
                        var a = r[n](i),
                            u = a.value
                    } catch (r) {
                        return void t(r)
                    }
                    a.done ? e(u) : Promise.resolve(u).then(o, s)
                }

                function i(r) {
                    return function() {
                        var e = this,
                            t = arguments;
                        return new Promise((function(o, s) {
                            var i = r.apply(e, t);

                            function a(r) {
                                n(i, o, s, a, u, "next", r)
                            }

                            function u(r) {
                                n(i, o, s, a, u, "throw", r)
                            }
                            a(void 0)
                        }))
                    }
                }

                function a(r, e, t, s, n, a, u, l, c, p) {
                    r.data = {
                        moreGroupsUrl: u.absoluteUrls.moreGroups
                    }, r.createGroupUrl = function() {
                        return u.absoluteUrls.createGroup
                    }, r.handleCreateGroupClick = function() {
                        c.logGroupPageClickEvent({
                            clickTargetType: "createGroup",
                            context: p.EventContext.MyGroups
                        }), window.location.href = r.createGroupUrl()
                    }, r.canCreateGroup = function() {
                        return !r.groups || r.metadata.currentGroupCount < r.metadata.groupLimit
                    }, r.loadGroups = function() {
                        return e((function(e, o) {
                            t.getGroups(r.userId).then((function(t) {
                                t && (r.groups = t), e(t)
                            }), (function(e) {
                                r.groups = [], r.layout.loadFailure = !0, n.debug("--loadGroups-error---"), o(e)
                            }))
                        }))
                    }, r.loadGroupMetadata = function() {
                        return e((function(e, t) {
                            s.getGroupMetadata().then((function(t) {
                                r.metadata = t, e(t)
                            }), (function(r) {
                                n.debug("--loadGroupMetadata-error---"), t(r)
                            }))
                        }))
                    }, r.updateDisplay = function(e) {
                        r.layout.isGridOn = e, t.lazyImageRefresh()
                    }, r.fetchAndExposeExperiment = i(regeneratorRuntime.mark((function e() {
                        var t;
                        return regeneratorRuntime.wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return e.next = 2, l.getLandingPageExperiment();
                                case 2:
                                    t = e.sent, r.isV2 = t.isSearchV2, l.exposeLandingPageExperiment();
                                case 5:
                                case "end":
                                    return e.stop()
                            }
                        }), e)
                    }))), r.logPageExposure = function() {
                        c.logGroupPageExposureEvent({
                            exposureType: p.ExposureType.MyGroups,
                            context: p.EventContext.MyGroups
                        })
                    }, r.loadGroupsListRedesignExperiment = i(regeneratorRuntime.mark((function e() {
                        var t;
                        return regeneratorRuntime.wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return e.next = 2, l.isGroupsListRedesignExperimentEnabled();
                                case 2:
                                    t = e.sent, r.isGroupsListRedesignEnabled = Boolean(t);
                                case 4:
                                case "end":
                                    return e.stop()
                            }
                        }), e)
                    }))), r.loadGroupsList = function() {
                        r.layout = a.layout, r.layout.isGridOn = !1, r.layout.areProfileGroupsHidden = !0, r.metadata = {}, r.userId = r.displayUserId || o.CurrentUser.userId, r.layout.isLoading = !0;
                        var t = r.loadGroupMetadata(),
                            s = r.loadGroups(),
                            i = r.fetchAndExposeExperiment(),
                            u = r.loadGroupsListRedesignExperiment();
                        e.all([t, s, i, u]).then((function() {
                            r.logPageExposure()
                        }), (function() {
                            n.debug("--error waiting for metadataPromise and groupsPromise---")
                        })).finally((function() {
                            r.layout.isLoading = !1
                        }))
                    }, r.loadGroupsList()
                }
                a.$inject = ["$scope", "$q", "groupsListService", "groupsService", "$log", "groupsListConstants", "groupsConstants", "groupExperimentsService", "groupEventLoggingService", "eventConstants"], s.A.controller("groupsListBaseController", a), e.default = a
            },
            4520: function(r, e, t) {
                "use strict";
                t.r(e);
                var o = t(6633),
                    s = t(4711);

                function n(r, e, t, s, n, i) {
                    var a = this;
                    a.createGroupUrl = function() {
                        return t.absoluteUrls.createGroup
                    }, a.handleCreateGroupClick = function() {
                        n.logGroupPageClickEvent({
                            clickTargetType: "createGroup",
                            context: i.EventContext.GroupHomepage
                        }), window.location.href = a.createGroupUrl()
                    }, a.canCreateGroup = function() {
                        return !a.groupList || a.groupList.length < a.maxGroups
                    }, a.filterKeyword = function() {
                        a.groups && a.keyword && a.keyword.length > 0 ? a.filteredGroups = a.groups.filter((function(r) {
                            var e = a.keyword.toLowerCase().trim();
                            return r.name.toLowerCase().includes(e)
                        })) : a.filteredGroups = a.groups, s.buildScrollbar(e.groupsListSelector)
                    };
                    var u = function() {
                        a.layout = e.layout, a.primaryGroup = null, a.keyword = "", a.groupList && (a.groupList.length > 0 && a.groupList[0].isPrimary ? (a.primaryGroup = a.groupList[0], a.groups = a.groupList.slice(1, a.groupList.length)) : a.groups = a.groupList, a.filteredGroups = a.groups, r((function() {
                            s.buildScrollbar(e.groupsListSelector)
                        })), (0, o.initRobloxBadgesFrameworkAgnostic)({
                            overrideIconClass: "verified-badge-icon-group-name-in-group-list"
                        }))
                    };
                    a.$onInit = u, a.$onChanges = u
                }
                n.$inject = ["$timeout", "groupsListConstants", "groupsConstants", "groupsListService", "groupEventLoggingService", "eventConstants"], s.A.controller("groupsListController", n), e.default = n
            },
            6631: function(r, e, t) {
                "use strict";
                t.r(e);
                var o = t(6633),
                    s = t(4711);

                function n(r) {
                    var e = this;
                    e.$onInit = function() {
                        e.thumbnailTypes = r.thumbnailTypes, e.thumbnailOptions = {
                            isLazyLoading: !0
                        };
                        try {
                            (0, o.initRobloxBadgesFrameworkAgnostic)({
                                overrideIconClass: "verified-badge-icon-group-showcase-grid"
                            })
                        } catch (r) {}
                    }
                }
                n.$inject = ["thumbnailConstants"], s.A.controller("groupsListItemController", n), e.default = n
            },
            1601: function(r, e, t) {
                "use strict";
                t.r(e);
                var o = t(4711),
                    s = t(6633);

                function n(r, e) {
                    var t = this;

                    function o() {
                        if (t.groupsCache) {
                            var r = t.layout.startRow + t.layout.maxRows,
                                e = t.groupsCache.slice(0, r);
                            t.layout.canLoadMore = e.length < t.groupsCache.length && e.length % t.layout.maxRows == 0, t.layout.startRow = r, t.groups = e
                        }
                    }
                    t.loadMoreGroups = function() {
                        t.layout.canLoadMore && (o(), e.lazyImageRefresh())
                    };
                    var n = function() {
                        t.layout = r.showcaseLayout, o(), e.lazyImageRefresh(), (0, s.initRobloxBadgesFrameworkAgnostic)({
                            overrideIconClass: "verified-badge-icon-group-carousel"
                        })
                    };
                    t.$onInit = n, t.$onChanges = n
                }
                n.$inject = ["groupsListConstants", "groupsListService"], o.A.controller("groupsShowcaseGridController", n), e.default = n
            },
            3922: function(r, e, t) {
                "use strict";

                function o() {
                    var r = this,
                        e = function() {
                            r.groups.length > 0 && r.groups[0].isPrimary && (r.primaryGroup = r.groups[0], r.groups = r.groups.slice(1, r.groups.length))
                        };
                    r.$onInit = e, r.$onChanges = e
                }
                t.r(e), t(4711).A.controller("mobileGroupsListController", o), e.default = o
            },
            4156: function(r, e, t) {
                "use strict";
                t.r(e);
                var o = t(7577);

                function s() {
                    return {
                        restrict: "A",
                        scope: {
                            currentGroup: "<",
                            groupsList: "<",
                            canCreateGroup: "<",
                            isSidebar: "<",
                            isLoadingGroups: "<",
                            loadFailure: "<",
                            showRanks: "<",
                            showMemberCounts: "<",
                            showButtonsOnTop: "<"
                        },
                        link: function(r, e) {
                            var t = function() {
                                null === o.GroupsListService || void 0 === o.GroupsListService || o.GroupsListService.renderGroupsList(e[0], {
                                    currentGroup: r.currentGroup,
                                    groupsList: r.groupsList,
                                    canCreateGroup: r.canCreateGroup,
                                    isSidebar: r.isSidebar,
                                    isLoadingGroups: r.isLoadingGroups,
                                    loadFailure: r.loadFailure,
                                    showRanks: r.showRanks,
                                    showMemberCounts: r.showMemberCounts,
                                    showButtonsOnTop: r.showButtonsOnTop
                                })
                            };
                            e.ready(t), ["currentGroup", "groupsList", "canCreateGroup", "isSidebar", "isLoadingGroups", "loadFailure", "showRanks", "showMemberCounts", "showButtonsOnTop"].forEach((function(e) {
                                r.$watch(e, (function(r, e) {
                                    JSON.stringify(r) !== JSON.stringify(e) && t()
                                }), !0)
                            }))
                        }
                    }
                }
                t(4711).A.directive("groupReactGroupsList", s), e.default = s
            },
            8525: function(r, e, t) {
                "use strict";
                t.r(e);
                var o = t(4711);

                function s(r) {
                    return {
                        restrict: "A",
                        scope: !0,
                        templateUrl: r.templates.groupsListBaseTemplate
                    }
                }
                s.$inject = ["groupsListConstants"], o.A.directive("groupsListBase", s), e.default = s
            },
            6109: function(r, e, t) {
                "use strict";
                t.r(e);
                var o = t(4711);

                function s(r) {
                    return {
                        restrict: "A",
                        controller: "groupsListBaseController",
                        scope: {
                            displayUserId: "="
                        },
                        templateUrl: r.templates.groupsShowcaseBaseTemplate
                    }
                }
                s.$inject = ["groupsListConstants"], o.A.directive("groupsShowcase", s), e.default = s
            },
            1396: function(r, e, t) {
                "use strict";
                t.r(e);
                var o = t(4711);

                function s(r, e, t) {
                    return {
                        restrict: "A",
                        scope: {
                            groups: "="
                        },
                        templateUrl: r.templates.groupsShowcaseSwitcherTemplate,
                        link: function(r, o, s) {
                            r.thumbnailTypes = t.thumbnailTypes, r.thumbnailOptions = {
                                isLazyLoading: !0
                            }, r.curIdx = 0, e.lazyImageRefresh(), r.slideNext = function() {
                                r.curIdx + 1 < r.groups.length ? r.curIdx++ : r.curIdx = 0, e.lazyImageRefresh()
                            }, r.slidePrev = function() {
                                r.curIdx > 0 ? r.curIdx-- : r.curIdx = r.groups.length - 1, e.lazyImageRefresh()
                            }, r.multipleItems = function() {
                                return !!r.groups && r.groups.length > 1
                            }, r.shouldPreLoad = function(e) {
                                if (r.groups) {
                                    var t = r.groups.length - 1;
                                    return r.curIdx === e || (r.curIdx - 1 >= 0 ? e === r.curIdx - 1 : e === t) || (r.curIdx + 1 <= t ? e === r.curIdx + 1 : 0 === e)
                                }
                                return !1
                            }, r.showVerifiedBadge = function(r) {
                                return r && r.groupHasVerifiedBadge
                            }
                        }
                    }
                }
                s.$inject = ["groupsListConstants", "groupsListService", "thumbnailConstants"], o.A.directive("groupsShowcaseSwitcher", s), e.default = s
            },
            4711: function(r, e, t) {
                "use strict";
                var o = t(7577),
                    s = t(127),
                    n = t.n(s)().module("groupList", ["robloxApp", "groups", "groupsListAppHtmlTemplateApp", "ui.router", "thumbnails"]).config(["languageResourceProvider", function(r) {
                        var e = (new o.TranslationResourceProvider).getTranslationResource("Feature.Groups");
                        r.setTranslationResources([e])
                    }]);
                e.A = n
            },
            7712: function(r, e, t) {
                "use strict";
                t.r(e), t.d(e, {
                    default: function() {
                        return n
                    }
                });
                PropTypes;
                var o = t(4711);

                function s(r, e, t, o, s, n, i) {
                    var a = function(r) {
                            if (r) return u(r).then((function(r) {
                                var e = n.ownerRoleRank,
                                    t = r.map(l);
                                return t.sort((function(r, t) {
                                    return t.role.rank === e && r.role.rank === e ? r.name.localeCompare(t.name, {
                                        sensitivity: "base"
                                    }) : r.role.rank == e ? -1 : t.role.rank === e ? 1 : r.name.localeCompare(t.name, {
                                        sensitivity: "base"
                                    })
                                })), t
                            }), (function() {
                                return []
                            }))
                        },
                        u = function(r) {
                            for (var e = [], t = {}, o = 0; o < r.length; o++) t[r[o].group.id] = r[o], e.push(r[o].group.id);
                            return p(e).then((function(r) {
                                var e = [];
                                if (null != r && r.groups)
                                    for (var o = r.groups, s = 0; s < o.length; s++) o[s].canViewGroup && t[o[s].groupId] && e.push(t[o[s].groupId]);
                                return e
                            }), (function() {
                                return $log.debug("--getGroupPolicies-error--"), []
                            }))
                        },
                        l = function(r) {
                            return {
                                id: r.group.id,
                                name: r.group.name,
                                description: r.group.description,
                                members: r.group.memberCount,
                                role: r.role,
                                isPrimary: !1,
                                isOwner: r.role.rank === n.ownerRoleRank,
                                groupUrl: e("seoUrl")(i.urlBase, r.group.id, r.group.name),
                                groupHasVerifiedBadge: r.group.hasVerifiedBadge,
                                ownerHasVerifiedBadge: r.group.owner && r.group.owner.hasVerifiedBadge
                            }
                        },
                        c = function(t) {
                            var o = {
                                url: e("formatString")(n.urls.primaryGroupUrl, {
                                    id: t
                                })
                            };
                            return r.httpGet(o)
                        },
                        p = function(t) {
                            var o = {
                                    url: e("formatString")(n.urls.getGroupPolicyInfo)
                                },
                                s = {
                                    groupIds: t
                                };
                            return r.httpPost(o, s)
                        };
                    return {
                        getGroups: function(o) {
                            return t((function(t, s) {
                                var i = {
                                    url: e("formatString")(n.urls.groupsListUrl, {
                                        id: o
                                    }),
                                    retryable: !1
                                };
                                r.httpGet(i, {}).then((function(r) {
                                    null != r && r.data && a(r.data).then((function(r) {
                                        c(o).then((function(e) {
                                            if (null != e && e.group)
                                                for (var o = 0; o < r.length; o++) {
                                                    var s = r[o];
                                                    if (s.id === e.group.id) {
                                                        s.isPrimary = !0, r.splice(o, 1), r.unshift(s);
                                                        break
                                                    }
                                                }
                                            t(r)
                                        }), (function() {
                                            t(r)
                                        }))
                                    }))
                                }), (function() {
                                    r.getApiErrorCodeHandler(s, n.errorCodes.getGroups)
                                }))
                            }))
                        },
                        getPrimaryGroup: c,
                        buildScrollbar: function(r) {
                            var e = angular.element(document.querySelector(r));
                            if (e && e.length > 0) {
                                var t = e[0].firstElementChild;
                                t && (t.style["max-height"] = "700px"), e.mCustomScrollbar({
                                    autoExpandScrollbar: !1,
                                    scrollInertia: 500,
                                    contentTouchScroll: 1,
                                    mouseWheel: {
                                        preventDefault: !0,
                                        scrollAmount: 208,
                                        deltaFactor: 208
                                    }
                                })
                            }
                        },
                        lazyImageRefresh: function() {
                            o((function() {
                                s.$emit("lazyImg:refresh")
                            }))
                        }
                    }
                }
                s.$inject = ["httpService", "$filter", "$q", "$timeout", "$rootScope", "groupsListConstants", "groupsConstants"], o.A.factory("groupsListService", s);
                var n = s
            },
            6255: function(r) {
                r.exports = '<div group-react-groups-list class="group-react-groups-list" current-group="$ctrl.currentGroup" groups-list="$ctrl.groupsList" can-create-group="$ctrl.canCreateGroup" is-sidebar="$ctrl.isSidebar" is-loading-groups="$ctrl.isLoadingGroups" load-failure="$ctrl.loadFailure" show-ranks="$ctrl.showRanks" show-member-counts="$ctrl.showMemberCounts" show-buttons-on-top="$ctrl.showButtonsOnTop"></div> '
            },
            1185: function(r) {
                r.exports = '<div class="menu-vertical-container"> <div class="menu-vertical loading" ng-show="$ctrl.isLoadingGroups"> <span class="spinner spinner-default" alt="Processing..."/> </div> <ul ng-if="$ctrl.loadFailure" class="group-cards menu-vertical"> <li class="list-item list-item-error text" ng-bind="\'Message.LoadGroupListError\' | translate"></li> </ul> <ul ng-if="!$ctrl.loadFailure && $ctrl.primaryGroup" class="group-cards menu-vertical" ng-cloak> <li class="menu-option list-item primary-group" ng-class="{\'active\': $ctrl.primaryGroup.id === $ctrl.currentGroup.id}"> <groups-list-item group="$ctrl.primaryGroup"></groups-list-item> </li> </ul> <div class="input-group group-search-input"> <input class="form-control input-field" ng-keyup="$ctrl.filterKeyword()" placeholder="{{ \'Label.SearchMyGroups\' | translate }}" ng-model="$ctrl.keyword"> <div class="input-group-btn"> <button class="input-addon-btn" type="submit"> <span class="icon-search"></span> </button> </div> </div> <ul ng-if="!$ctrl.loadFailure && $ctrl.filteredGroups" id="groups-list" class="group-cards menu-vertical rbx-scrollbar" ng-cloak data-toggle="scrollbar"> <li class="menu-option list-item" ng-repeat="group in $ctrl.filteredGroups | filter: { isOwner: true }" ng-class="{ \'active\': group.id === $ctrl.currentGroup.id}"> <groups-list-item group="group"></groups-list-item> </li> <div class="rbx-divider"></div> <li class="menu-option list-item" ng-repeat="group in $ctrl.filteredGroups | filter: { isOwner: false }" ng-class="{ \'active\': group.id === $ctrl.currentGroup.id}"> <groups-list-item group="group"></groups-list-item> </li> </ul> <button ng-hide="$ctrl.isLoadingGroups" ng-click="$ctrl.handleCreateGroupClick()" class="btn-secondary-md create-group-button" ng-disabled="!$ctrl.canCreateGroup()" ng-bind="\'Action.CreateGroup\' | translate"></button> <span ng-hide="$ctrl.isLoadingGroups" ng-if="!$ctrl.canCreateGroup()" class="small text create-group-text" ng-bind="\'Label.MaxGroupsTooltip\' | translate:{ \'maxGroups\': $ctrl.maxGroups }"></span> </div> <div class="menu-dropdown-container input-group-btn"> <div class="input-group-btn" uib-dropdown> <button type="button" uib-dropdown-toggle="" class="input-dropdown-btn group-cards" aria-haspopup="true" aria-expanded="false"> <span class="rbx-selection-label list-item"> <groups-list-item group="$ctrl.currentGroup.group"></groups-list-item> </span> <span class="icon-down-16x16"></span> </button> <ul class="dropdown-menu group-cards" role="menu" uib-dropdown-menu> <li ng-if="$ctrl.primaryGroup" class="list-item" ng-class="{\'active\': $ctrl.primaryGroup.id === $ctrl.currentGroup.id}"> <groups-list-item group="$ctrl.primaryGroup"></groups-list-item> </li> <li ng-repeat="group in $ctrl.groups" class="list-item" ng-class="{ \'active\': group.id === $ctrl.currentGroup.id }"> <groups-list-item group="group"></groups-list-item> </li> </ul> </div> <a ng-href="{{ $ctrl.createGroupUrl() }}" class="btn-secondary-md create-group-button" ng-disabled="!$ctrl.canCreateGroup()" ng-bind="\'Action.CreateGroup\' | translate"></a> <span ng-if="!$ctrl.canCreateGroup()" class="small text create-group-text" ng-bind="\'Label.MaxGroupsTooltip\' | translate:{ \'maxGroups\': $ctrl.maxGroups }"></span> </div>'
            },
            7393: function(r) {
                r.exports = '<a target="_self" class="group-name-link" ng-href="{{ $ctrl.group.groupUrl }}" title="{{ $ctrl.group.name }}"> <div class="menu-option-content group-card"> <thumbnail-2d class="group-card-thumbnail" thumbnail-type="$ctrl.thumbnailTypes.groupIcon" thumbnail-target-id="$ctrl.group.id"></thumbnail-2d> <span ng-class="{\'group-card-name-with-verified-badge\': $ctrl.group.groupHasVerifiedBadge}" class="font-caption-header group-card-name text-overflow" ng-bind="$ctrl.group.name"></span> <span ng-if="$ctrl.group.groupHasVerifiedBadge" class="verified-badge-icon-group-name-in-group-list" data-size="Footer" data-overrideimgclass="verified-badge-icon-group-name-in-group-list-rendered" data-additionalcontainerclass="verified-badge-icon-group-name-in-group-list-container-rendered"> </span> </div> </a> '
            },
            5686: function(r) {
                r.exports = '<div class="game-card"> <a ng-href="{{ $ctrl.group.groupUrl }}" class="card-item game-card-container"> <div class="game-card-thumb-container"> <thumbnail-2d class="slide-item-image" thumbnail-type="$ctrl.thumbnailTypes.groupIcon" thumbnail-target-id="$ctrl.group.id" thumbnail-options="$ctrl.thumbnailOptions"></thumbnail-2d> </div> <div class="game-card-name-container"> <div class="text-overflow game-card-name" title="{{$ctrl.group.name}}" ng-bind="$ctrl.group.name"></div> <span ng-if="$ctrl.group.groupHasVerifiedBadge" class="verified-badge-icon-group-showcase-grid" data-size="Title" data-overrideimgclass="verified-badge-icon-group-showcase-grid-rendered" data-disablemodal> </span> </div> <div ng-bind="\'Label.MembersCount\' | translate:{ memberCount: $ctrl.group.members }" class="text-overflow game-card-name-secondary"></div> <div class="text-overflow game-card-name-secondary" ng-bind="$ctrl.group.role.name"></div> </a> </div>'
            },
            7868: function(r) {
                r.exports = '<ul class="hlist game-cards group-list" horizontal-scroll-bar="$ctrl.loadMoreGroups()"> <li class="list-item group-container shown" ng-repeat="group in $ctrl.groups"> <groups-showcase-card group="group"></groups-showcase-card> </li> </ul> <a ng-cloak ng-click="$ctrl.loadMoreGroups()" id="groups-load-more" class="btn btn-control-xs load-more-button" ng-bind="\'Label.LoadMore\' | translate" ng-show="$ctrl.layout.canLoadMore"> </a> '
            },
            5003: function(r) {
                r.exports = '<div ng-if="$ctrl.loadFailure" class="section-content-off" ng-bind="\'Message.LoadGroupListError\' | translate"> </div> <ul ng-if="!$ctrl.loadFailure && $ctrl.primaryGroup" class="group-cards hlist" ng-cloak> <li class="list-item primary-group"> <mobile-groups-list-item group="$ctrl.primaryGroup"></mobile-groups-list-item> </li> <div class="rbx-divider"></div> </ul> <ul ng-if="!$ctrl.loadFailure" id="groups-list" class="group-cards hlist"> <li class="list-item owned-group" ng-repeat="group in $ctrl.groups | filter: { isOwner: true }"> <mobile-groups-list-item group="group"></mobile-groups-list-item> </li> <div class="rbx-divider"></div> <li class="list-item" ng-repeat="group in $ctrl.groups | filter: { isOwner: false }"> <mobile-groups-list-item group="group"></mobile-groups-list-item> </li> </ul>'
            },
            3176: function(r) {
                r.exports = '<a target="_self" class="group-name-link" ng-href="{{ $ctrl.group.groupUrl }}"> <div class="group-card"> <thumbnail-2d thumbnail-type="$ctrl.thumbnailTypes.groupIcon" thumbnail-target-id="$ctrl.group.id"></thumbnail-2d> <div class="group-card-container"> <div class="group-card-text"> <h5 class="group-card-name text-overflow" ng-bind="$ctrl.group.name"></h5> <span class="group-card-rank text-label text-overflow font-caption-body" ng-bind-template="{{ \'Heading.Rank\' | translate }}: {{ $ctrl.group.role.name }}"></span> </div> <div class="group-card-members"> <div class="members-icon"> <span class="icon-nav-group"></span> </div> <span class="members-count" ng-bind="$ctrl.group.members | abbreviate"></span> </div> </div> </div> </a> '
            },
            7522: function(r) {
                r.exports = '<div ng-controller="groupsListBaseController"> <div ng-if="!isGroupsListRedesignEnabled" ng-hide="layout.isLoading" class="container-header see-all-container-header"> <h1 ng-bind="\'Heading.MyGroups\' | translate"></h1> <a ng-href="{{ data.moreGroupsUrl }}" class="btn-secondary-xs btn-more see-all-link-icon" target="_self" ng-bind="\'Action.MoreGroups\' | translate"></a> </div> <div class="loading" ng-show="layout.isLoading"> <span class="spinner spinner-default"/> </div> <div ng-if="!isGroupsListRedesignEnabled" ng-hide="layout.isLoading" class="create-group-button-container"> <button class="btn-secondary-md create-group-button" ng-disabled="!canCreateGroup()" ng-click="handleCreateGroupClick()" ng-bind="\'Action.CreateGroup\' | translate"></button> <span class="small text create-group-text" ng-bind="\'Label.MaxGroupsTooltip\' | translate:{ \'maxGroups\': metadata.groupLimit }"></span> </div> <mobile-groups-list ng-if="groups && !isGroupsListRedesignEnabled" ng-hide="layout.isLoading" groups="groups" primary-group="primaryGroup" load-failure="layout.loadFailure"></mobile-groups-list> <group-react-groups-list ng-if="groups && isGroupsListRedesignEnabled" groups-list="groups" can-create-group="canCreateGroup()" is-loading-groups="layout.isLoading" load-failure="layout.loadFailure" show-ranks="true" show-member-counts="true" show-buttons-on-top="true"></group-react-groups-list> </div> '
            },
            5338: function(r) {
                r.exports = '<div ng-if="!metadata.areProfileGroupsHidden" ng-class="{\'section\': !layout.isGridOn, \'container-list\': layout.isGridOn}" ng-show="groups.length > 0"> <div class="container-header"> <h2 ng-bind="\'Heading.Groups\' | translate"></h2> <div ng-cloak class="container-buttons"> <button class="profile-view-selector" title="{{\'Action.SlideshowView\' | translate }}" type="button" ng-click="updateDisplay(false)" ng-class="{\'btn-secondary-xs btn-generic-slideshow-xs\': !layout.isGridOn, \'btn-control-xs btn-generic-slideshow-xs\': layout.isGridOn}"> <span class="icon-slideshow" ng-class="{\'selected\': !layout.isGridOn}"></span> </button> <button class="profile-view-selector" title="{{\'Action.GridView\' | translate }}" type="button" ng-click="updateDisplay(true)" ng-class="{\'btn-secondary-xs btn-generic-grid-xs\': layout.isGridOn, \'btn-control-xs btn-generic-grid-xs\': !layout.isGridOn}"> <span class="icon-grid" ng-class="{\'selected\': layout.isGridOn}"></span> </button> </div> </div> <div class="profile-slide-container section-content remove-panel"> <groups-showcase-grid groups-cache="groups" ng-show="layout.isGridOn"></groups-showcase-grid> <div id="groups-switcher" class="switcher slide-switcher groups" groups-showcase-switcher groups="groups" ng-hide="layout.isGridOn"> </div> </div> </div>'
            },
            809: function(r) {
                r.exports = '<ul class="slide-items-container switcher-items hlist"> <li class="switcher-item slide-item-container" ng-repeat="group in groups" ng-show="shouldPreLoad($index)" ng-class="{\'active\': curIdx === $index}"> <div class="col-sm-6 slide-item-container-left"> <div class="slide-item-emblem-container"> <a ng-href="{{ group.groupUrl }}"> <thumbnail-2d class="slide-item-image" thumbnail-type="thumbnailTypes.groupIcon" thumbnail-target-id="group.id" thumbnail-options="thumbnailOptions"></thumbnail-2d> </a> </div> </div> <div class="col-sm-6 text-overflow slide-item-container-right groups"> <div class="slide-item-info"> <a ng-class="showVerifiedBadge(group) ? \'group-title-with-badges\' : \'\'" ng-href="{{ group.groupUrl }}"> <div ng-class="showVerifiedBadge(group) ? \'truncate-with-verified-badge slide-item-name text-overflow groups font-title\' : \'slide-item-name text-overflow groups font-title\'" ng-bind="group.name"></div> <span ng-class="showVerifiedBadge(group) ? \'verified-badge-icon-group-carousel\' : \'hidden\'" data-size="Title" data-additionalimgclass="verified-badge-icon-group-carousel-rendered" data-disablemodal></span> </a> <p class="text-description slide-item-description groups" ng-bind="group.description"></p> </div> <div class="slide-item-stats"> <ul class="hlist"> <li class="list-item"> <div class="text-label slide-item-stat-title" ng-bind="\'Heading.Members\' | translate"></div> <div class="text-lead group-members-count" ng-bind="group.members | abbreviate"></div> </li> <li class="list-item"> <div class="text-label slide-item-stat-title" ng-bind="\'Heading.Rank\' | translate"></div> <div class="text-lead text-overflow group-rank groups" ng-bind="group.role.name"></div> </li> </ul> </div> </div> </li> </ul> <a class="carousel-control left" ng-if="multipleItems()" ng-click="slidePrev()"> <span class="icon-carousel-left"></span> </a> <a class="carousel-control right" ng-if="multipleItems()" ng-click="slideNext()"> <span class="icon-carousel-right"></span> </a> '
            },
            7577: function(r) {
                "use strict";
                r.exports = Roblox
            },
            6633: function(r) {
                "use strict";
                r.exports = RobloxBadges
            },
            127: function(r) {
                "use strict";
                r.exports = angular
            }
        },
        e = {};

    function t(o) {
        var s = e[o];
        if (void 0 !== s) return s.exports;
        var n = e[o] = {
            exports: {}
        };
        return r[o](n, n.exports, t), n.exports
    }
    t.n = function(r) {
            var e = r && r.__esModule ? function() {
                return r.default
            } : function() {
                return r
            };
            return t.d(e, {
                a: e
            }), e
        }, t.d = function(r, e) {
            for (var o in e) t.o(e, o) && !t.o(r, o) && Object.defineProperty(r, o, {
                enumerable: !0,
                get: e[o]
            })
        }, t.o = function(r, e) {
            return Object.prototype.hasOwnProperty.call(r, e)
        }, t.r = function(r) {
            "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(r, Symbol.toStringTag, {
                value: "Module"
            }), Object.defineProperty(r, "__esModule", {
                value: !0
            })
        },
        function() {
            "use strict";
            var r = t(127),
                e = t.n(r),
                o = t(7525),
                s = t(4711);
            (0, o.importFilesUnderPath)(t(6268)), (0, o.importFilesUnderPath)(t(8675)), (0, o.importFilesUnderPath)(t(4487)), (0, o.importFilesUnderPath)(t(3609)), (0, o.importFilesUnderPath)(t(9016));
            var n = t(780),
                i = (0, o.templateCacheGenerator)(e(), "groupsListAppHtmlTemplateApp", n);
            e().element((function() {
                e().bootstrap("#groups-list-container:not([ng-modules])", [s.A.name, i.name])
            }))
        }()
}();
//# sourceMappingURL=https://sourcemaps.rbxcdn.com/a753aa198162c5a51c32d84f434d2212-groupList.bundle.min.js.map

/*! For license information please see groupsList.bundle.min.js.LICENSE.txt */
! function() {
    var e = {
            4452: function(e, t) {
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
            var e = Roblox,
                t = n.n(e),
                r = React,
                a = n.n(r),
                o = ReactDOM,
                i = ReactUtilities,
                s = {
                    common: [],
                    feature: "Feature.Groups"
                },
                l = ReactStyleGuide,
                c = CoreUtilities,
                u = c.seoName.formatSeoName,
                m = e.EnvironmentUrls.groupsApi,
                d = "".concat(m, "/v1/groups"),
                p = {
                    urls: {
                        getGroupsListEndpoint: function(e) {
                            return "".concat(d, "/v1/users/").concat(e, "/groups/roles?includeLocked=true")
                        },
                        getPrimaryGroupEndpoint: function(e) {
                            return "".concat(d, "/v1/users/").concat(e, "/groups/primary/role")
                        },
                        groupPolicyInfoEndpoint: "".concat(d, "/v1/groups/policies"),
                        getSeoGroupUrl: function(t, n) {
                            return "".concat(e.EnvironmentUrls.websiteUrl, "/groups/").concat(t, "/").concat(u(n))
                        },
                        createGroupUrl: "".concat(e.EnvironmentUrls.websiteUrl, "/communities/create"),
                        groupSearchUrl: "".concat(e.EnvironmentUrls.websiteUrl, "/search/communities")
                    }
                },
                f = n(4452),
                g = n.n(f),
                v = RobloxBadges,
                b = RobloxThumbnails,
                h = function(e) {
                    var t = e.label,
                        n = e.flavor,
                        r = e.noTruncate;
                    return a().createElement("span", {
                        className: g()("groups-list-item-pill block radius-circle text-caption-medium padding-x-small padding-y-xxsmall", r ? "shrink-0" : "shrink-1", "flavor-".concat(n))
                    }, t)
                },
                E = function(e) {
                    var t = e.group,
                        n = e.isActive,
                        r = e.showRank,
                        o = e.showMemberCount,
                        s = (0, i.useTranslation)().translate,
                        l = t.name,
                        u = t.members,
                        m = t.role,
                        d = t.isOwner,
                        p = t.groupHasVerifiedBadge,
                        f = t.groupUrl,
                        E = d && !r,
                        y = o || E;
                    return a().createElement("a", {
                        href: f,
                        className: g()("groups-list-item", n && "active")
                    }, a().createElement("div", {
                        className: "groups-list-item-thumbnail"
                    }, a().createElement(b.Thumbnail2d, {
                        type: b.ThumbnailTypes.groupIcon,
                        targetId: t.id,
                        size: b.ThumbnailGameIconSize.size150,
                        containerClass: "size-full"
                    })), a().createElement("div", {
                        className: "group-list-item-info grow-1 min-width-0"
                    }, a().createElement("div", {
                        className: "flex items-baseline"
                    }, a().createElement("div", {
                        className: "text-no-wrap text-truncate-end"
                    }, a().createElement("span", {
                        className: "text-title-medium"
                    }, l)), p && a().createElement(v.VerifiedBadgeIconContainer, {
                        overrideContainerClass: "padding-left-small inline shrink-0",
                        size: v.BadgeSizes.SUBHEADER
                    })), y && a().createElement("div", {
                        className: "text-no-wrap text-body-medium text-truncate-end content-muted"
                    }, o && a().createElement("span", {
                        className: "text-body-medium"
                    }, s("Label.MembersCountAbbreviated", {
                        membersCount: u,
                        membersCountAbbreviated: c.abbreviateNumber.getAbbreviatedValue(u)
                    })), o && E && a().createElement(a().Fragment, null, " ", "•", " "), E && a().createElement("span", {
                        className: "text-body-medium"
                    }, s("Label.Owned")))), r && (d ? a().createElement(h, {
                        label: s("Label.Owned"),
                        flavor: "contrast",
                        noTruncate: !0
                    }) : a().createElement(h, {
                        label: m.name,
                        flavor: "neutral"
                    })))
                },
                y = function() {
                    return y = Object.assign || function(e) {
                        for (var t, n = 1, r = arguments.length; n < r; n++)
                            for (var a in t = arguments[n]) Object.prototype.hasOwnProperty.call(t, a) && (e[a] = t[a]);
                        return e
                    }, y.apply(this, arguments)
                },
                N = function(e) {
                    var t = e.className,
                        n = e.label,
                        r = e.variant,
                        o = void 0 === r ? l.Button.variants.primary : r,
                        i = e.size,
                        s = void 0 === i ? l.Button.sizes.medium : i,
                        c = e.href,
                        u = e.onClick,
                        m = e.disabled,
                        d = e.iconURL,
                        p = e.openInNewTab,
                        f = c ? "a" : "button",
                        v = c ? {
                            href: c,
                            target: p ? "_blank" : "_self",
                            rel: "noopener"
                        } : {};
                    return a().createElement(f, y({
                        className: g()(t, "btn-".concat(o, "-").concat(s)),
                        onClick: u,
                        disabled: m,
                        role: "button"
                    }, v), a().createElement("span", {
                        className: "linkable-button-content-container"
                    }, d && a().createElement("img", {
                        src: d,
                        alt: "",
                        className: "linkable-button-content-container-icon"
                    }), n))
                };
            N.defaultProps = {
                variant: l.Button.variants.primary,
                size: l.Button.sizes.medium,
                href: void 0,
                onClick: void 0,
                disabled: !1,
                iconURL: void 0,
                openInNewTab: !0
            };
            var w = N,
                x = function(e) {
                    var t = e.currentGroup,
                        n = e.groupsList,
                        o = void 0 === n ? [] : n,
                        s = e.canCreateGroup,
                        c = e.isSidebar,
                        u = e.isLoadingGroups,
                        m = e.loadFailure,
                        d = e.showRanks,
                        f = e.showMemberCounts,
                        g = e.showButtonsOnTop,
                        v = (0, i.useTranslation)().translate,
                        b = (0, r.useState)(""),
                        h = b[0],
                        y = b[1],
                        N = (0, r.useMemo)((function() {
                            return o.filter((function(e) {
                                return !h || e.name.toLowerCase().includes(h.toLowerCase())
                            }))
                        }), [o, h]),
                        x = (0, r.useMemo)((function() {
                            return N.find((function(e) {
                                return e.isPrimary
                            }))
                        }), [N]),
                        C = (0, r.useMemo)((function() {
                            return N.filter((function(e) {
                                return !e.isPrimary
                            }))
                        }), [N]),
                        G = (0, r.useMemo)((function() {
                            return u ? null : m ? v("Message.LoadGroupListError") : o.length ? h && !N.length ? v("Message.NoGroupsFound") : null : v("Message.NotInAnyGroups")
                        }), [o.length, N.length, u, m, h, v]);
                    (0, r.useEffect)((function() {
                        if (c) {
                            var e = document.getElementById("container-main");
                            if (e) {
                                var t = "has-groups-list-sidebar";
                                return e.classList.add(t),
                                    function() {
                                        e.classList.remove(t)
                                    }
                            }
                        }
                    }), [c]);
                    var k = a().createElement(w, {
                        className: "groups-list-create-button",
                        href: p.urls.createGroupUrl,
                        variant: l.Button.variants.control,
                        size: l.Button.sizes.medium,
                        disabled: !s,
                        openInNewTab: !1,
                        label: v("Action.CreateGroup")
                    });
                    return a().createElement("div", {
                        className: "groups-list-new"
                    }, a().createElement("div", {
                        className: "flex justify-between items-baseline"
                    }, a().createElement("h1", {
                        className: "groups-list-heading"
                    }, v("Heading.Groups")), a().createElement("a", {
                        className: "text-label-medium",
                        href: p.urls.groupSearchUrl
                    }, v("Action.SeeAll"))), a().createElement("div", {
                        className: "groups-list-search"
                    }, a().createElement("span", {
                        className: "icon-common-search-sm"
                    }), a().createElement("input", {
                        placeholder: v("Label.SearchMyGroups"),
                        className: "groups-list-search-input",
                        maxLength: 50,
                        value: h,
                        onChange: function(e) {
                            var t = e.target.value;
                            y(t)
                        },
                        autoComplete: "off",
                        autoCorrect: "off",
                        spellCheck: "false",
                        type: "text"
                    })), g && a().createElement("div", {
                        className: "groups-list-buttons-top"
                    }, k), !!G && a().createElement("div", {
                        className: "padding-y-medium"
                    }, G), u && a().createElement("div", {
                        className: "padding-y-medium"
                    }, a().createElement("div", {
                        className: "width-full height-1000 radius-medium bg-shift-100 shimmer"
                    })), a().createElement("div", {
                        className: "groups-list-items-container"
                    }, !!x && a().createElement("div", {
                        className: "padding-bottom-small"
                    }, a().createElement("span", {
                        className: "text-caption-large padding-top-small padding-bottom-small block"
                    }, v("Heading.Primary")), a().createElement("div", null, a().createElement(E, {
                        group: x,
                        isActive: (null == t ? void 0 : t.id) === x.id,
                        showRank: d,
                        showMemberCount: f
                    }))), !!C.length && a().createElement("div", {
                        className: "padding-bottom-small"
                    }, !!x && a().createElement("span", {
                        className: "text-caption-large padding-top-small padding-bottom-small block"
                    }, v("Heading.MyGroups")), a().createElement("div", null, C.map((function(e) {
                        return a().createElement(E, {
                            key: e.id,
                            group: e,
                            isActive: (null == t ? void 0 : t.id) === e.id,
                            showRank: d,
                            showMemberCount: f
                        })
                    }))))), !g && a().createElement("div", {
                        className: "groups-list-buttons-bottom"
                    }, k))
                },
                C = function() {
                    return C = Object.assign || function(e) {
                        for (var t, n = 1, r = arguments.length; n < r; n++)
                            for (var a in t = arguments[n]) Object.prototype.hasOwnProperty.call(t, a) && (e[a] = t[a]);
                        return e
                    }, C.apply(this, arguments)
                },
                G = {
                    renderGroupsList: function(e, t) {
                        (0, o.render)(a().createElement(i.TranslationProvider, {
                            config: s
                        }, a().createElement(x, C({}, t))), e)
                    }
                };
            Object.assign(t(), {
                GroupsListService: G
            })
        }()
}();
//# sourceMappingURL=https://sourcemaps.rbxcdn.com/23d0e6775e6d83d39c6da7c1f83743cf-groupsList.bundle.min.js.map

/* Bundle detector */
window.Roblox && window.Roblox.BundleDetector && window.Roblox.BundleDetector.bundleDetected("GroupsList");