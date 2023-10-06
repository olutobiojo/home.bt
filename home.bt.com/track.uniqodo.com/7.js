! function() {
    if (!window.UNIQODO_I) {
        window.UNIQODO_I = !0, window.UNIQODO = void 0 !== window.UNIQODO ? window.UNIQODO : {}, UNIQODO.advertiserId = 7, UNIQODO.visitorKey = "_uqd_vk", UNIQODO.priv = "f6e39283b755387d3f873cd51e9c6f94df68ef29", UNIQODO.auid = "ed8f9b9bd1761fbaaa010ec2892d47a35d6c0dea3701274c4dde96cf45f8ad76", UNIQODO.liveMode = !0, UNIQODO.triggerCodeRedemption = !0, UNIQODO.enableRecognition = !1, UNIQODO.enableAutofill = !0, UNIQODO.validationErrorCallback = null, UNIQODO.validationSuccessCallback = null, UNIQODO.displaysTriggerCode = !0, UNIQODO.codeParam = "_uqd_c", UNIQODO.codeCookie = "_uqd_c", UNIQODO.validatedCodeCookie = "_uqd_v_v", UNIQODO.triggerCodeCookie = "_uqd_v_trg", UNIQODO.validationPN = "_uqd_v_pn", UNIQODO.gatedValidationPN = "pn", UNIQODO.gatedValidatedCodeCookie = "_uqd_v", UNIQODO.gatedTriggerCodeCookie = "_uqd_trg", UNIQODO.gatedValidationResponseCookie = "_uqd_enq_c", UNIQODO.userCookie = "_uqd_ue", UNIQODO.embeddableCookie = "_uqd_emb", UNIQODO.errorCode = "INVALIDCODE", UNIQODO.valueHideStyle = "color:#ffffff;", UNIQODO.validationSession = 10, UNIQODO.itemSeparator = ";", UNIQODO.valueSeparator = ",", UNIQODO.embeddable = {
                config: {
                    claimCredential: UNIQODO.auid,
                    cookiePrefix: "_uqd_emb_",
                    cookieDiscountPrefix: "_uqd_emb_dc_",
                    disableEmbed: !1,
                    repeatCode: null
                }
            }, UNIQODO.advertiserDomain = -1 !== window.location.hostname.indexOf("bt.com") ? ".bt.com" : "." + window.location.hostname, UNIQODO.selector = {
                input: function() {
                    return document.getElementById("coupon-text")
                },
                button: function() {
                    return document.querySelector("button#savecoupon")
                },
                triggerCodeDisplay: function() {
                    return document.querySelectorAll("#couponarea form label strong, .page-alert .falertboxcontent b")
                }
            }, UNIQODO.embeddableButtonsAllowedLocations = ["shop.bt.com/account", "my.bt.com/s/apps/appsmybt/", "my.bt.com/s/apps/appspackages/index.html", "consumer.bt.com/s/apps/appspackages/index.html", "consumer.ref1.bt.com/s/apps/appspackages/index.html", "mybt.digital-demo-test.btrcom.bt.com/s/apps/appsmybt/", "consumer.ref1.bt.com/s/apps/appsmybt/", "preshop.galahad-test.com/account", "preshop.galahad-test.com/myaccount/offers/", "sg7test.galahad-test.com/account", "store.ee.co.uk/account"], UNIQODO.embeddableButtons = [{
                uid: "b8c6d6af3cf0e7820ad8aadb6bdd1a2f",
                theme: "main",
                sKey: "_uqd_s_13767",
                startDate: new Date(2022, 4, 17),
                endDate: new Date(2030, 1, 1),
                copy: {
                    revealLabel: "Reveal your code",
                    defaultCode: "",
                    isRedeemed: "You have already redeemed your code."
                },
                applyBTNLink: "https://shop.bt.com/products/microsoft-xbox-series-x-console-rrt-00007-G5FT.html?ReferrerID=G600&utm_source=btcom&utm_medium=bt_marketing&utm_campaign=xbox_mybt_&utm_content=G600",
                applyCodeToLink: !0,
                codePerUser: !0,
                useQueue: !0,
                getUserIdentifier: function() {
                    return UNIQODO.getUserIdentifier()
                },
                isReady: function(e) {
                    if (this.getUserIdentifier()) return e();
                    UNIQODO.retry("uid-wait-cust-inf", e, this.getUserIdentifier, 500, 100, function() {
                        UNIQODO.report({
                            message: "User identifier not found within given time"
                        })
                    })
                }
            }, {
                uid: "0b14bff275933e9756371292650c6f29",
                theme: "main",
                sKey: "_uqd_s_8513",
                startDate: new Date(2021, 8, 30),
                endDate: new Date(2025, 1, 1),
                copy: {
                    revealLabel: "Reveal your code",
                    defaultCode: "",
                    isRedeemed: "You have already redeemed your code."
                },
                applyBTNLink: "https://shop.bt.com/products/sony-ps5-disc-console---god-of-war-ragnarok-9449591-H218.html?ReferrerID=G600&utm_source=btcom&utm_medium=bt_marketing&utm_campaign=ps5_mybt_&utm_content=G600",
                applyCodeToLink: !0,
                codePerUser: !0,
                useQueue: !0,
                getUserIdentifier: function() {
                    return UNIQODO.getUserIdentifier()
                },
                isReady: function(e) {
                    if (this.getUserIdentifier()) return e();
                    UNIQODO.retry("uid-wait-cust-inf", e, this.getUserIdentifier, 500, 100, function() {
                        UNIQODO.report({
                            message: "User identifier not found within given time"
                        })
                    })
                }
            }, {
                uid: "5e939ee83a681510bc086cb958f74b76",
                sKey: "_uqd_s_9670",
                startDate: new Date(2021, 7, 5, 4),
                endDate: new Date(2022, 10, 10, 8),
                theme: "main",
                copy: {
                    revealLabel: "Reveal your code",
                    defaultCode: "",
                    isRedeemed: "You have already redeemed your code."
                },
                applyBTNLink: "https://campaign.theathletic.com/btsport/?source=bt_mybtarea_tv",
                applyCodeToLink: !1,
                codePerUser: !0,
                useQueue: !0,
                applyURLFromResponse: function(e) {
                    var t = (e || {}).url || this.applyBTNLink,
                        o = UNIQODO.getUrlVars(t);
                    return delete o.uqd, o.unique_code = e.code, t.replace(/(\?[^#]+)/, UNIQODO.buildQueryString(o))
                },
                getUserIdentifier: function() {
                    return UNIQODO.getUserIdentifier()
                },
                isReady: function(e) {
                    if (this.getUserIdentifier()) return e();
                    UNIQODO.retry("uid-wait-cust-inf", e, this.getUserIdentifier, 500, 100, function() {
                        UNIQODO.report({
                            message: "User identifier not found within given time"
                        })
                    })
                }
            }, {
                uid: "b47255a25350c6a8b3ae9cdd8ea42ef0",
                sKey: "_uqd_s_9671",
                startDate: new Date(2021, 7, 5, 4),
                endDate: new Date(2022, 10, 10, 8),
                theme: "main",
                copy: {
                    revealLabel: "Reveal your code",
                    defaultCode: "",
                    isRedeemed: "You have already redeemed your code."
                },
                applyBTNLink: "https://campaign.theathletic.com/btsport/?source=bt_mybtarea_monthlypass",
                applyCodeToLink: !1,
                codePerUser: !0,
                useQueue: !0,
                applyURLFromResponse: function(e) {
                    var t = (e || {}).url || this.applyBTNLink,
                        o = UNIQODO.getUrlVars(t);
                    return delete o.uqd, o.unique_code = e.code, t.replace(/(\?[^#]+)/, UNIQODO.buildQueryString(o))
                },
                getUserIdentifier: function() {
                    return UNIQODO.getUserIdentifier()
                },
                isReady: function(e) {
                    if (this.getUserIdentifier()) return e();
                    UNIQODO.retry("uid-wait-cust-inf", e, this.getUserIdentifier, 500, 100, function() {
                        UNIQODO.report({
                            message: "User identifier not found within given time"
                        })
                    })
                }
            }], UNIQODO.copyToClipboard = {
                supportsNavigator: function() {
                    return void 0 !== window.navigator && navigator.clipboard && "function" == typeof navigator.clipboard.writeText
                },
                supportsCopyQueryCommand: function() {
                    return document.queryCommandSupported && document.queryCommandSupported("copy")
                },
                hasSupport: function() {
                    return this.supportsNavigator() || this.supportsCopyQueryCommand()
                },
                copyUsingNavigator: function(e, t) {
                    t = t || function() {}, navigator.clipboard.writeText(e).then(function() {
                        return t(void 0, !0)
                    }, t)
                },
                copyUsingCopyQuery: function(e, t) {
                    var o = document.createElement("textarea");
                    o.value = e, o.style.top = 0, o.style.left = 0, o.style.opacity = 0, o.style.position = "fixed", document.body.appendChild(o), o.focus(), o.select();
                    try {
                        var r = document.execCommand("copy");
                        t && t(void 0, r)
                    } catch (e) {
                        t && t(e)
                    }
                    document.body.removeChild(o)
                }
            }, UNIQODO.activateCopyToClipboard = function(e, t, o, r) {
                UNIQODO.copyToClipboard.hasSupport() ? ("function" != typeof r && (r = function() {}), UNIQODO.listener(e, "click", function(e) {
                    e.preventDefault();
                    var t = o();
                    if (t && t.trim()) return UNIQODO.copyToClipboard.supportsNavigator() ? (UNIQODO.copyToClipboard.copyUsingNavigator(t), r()) : UNIQODO.copyToClipboard.supportsCopyQueryCommand() ? (UNIQODO.copyToClipboard.copyUsingCopyQuery(t), r()) : void 0;
                    r(new Error("Empty text"))
                })) : t()
            }, UNIQODO.removeClassName = function(e, t) {
                e && (void 0 !== e.classList ? e.classList.remove(t) : e.setAttribute("class", (e.getAttribute("class") || "").replace(new RegExp(t, "g"), "")))
            },
            function(e, t, c) {
                e = e || "onDomReady", t = t || window;
                var r, o, n, i, a, s = [],
                    d = !1,
                    u = !1;

                function l() {
                    if (!d) {
                        d = !0;
                        for (var e = 0; e < s.length; e++) s[e].fn.call(window, s[e].ctx);
                        s = []
                    }
                }

                function p() {
                    "complete" === document.readyState && l()
                }

                function f(e, t) {
                    return t.length && e ? Array.isArray(e) ? function(e, t) {
                        for (var o = [], r = 0; r < e.length; r++) {
                            var n = f(e[r], t);
                            Array.isArray(n) ? o = o.concat(n) : n && o.push(n)
                        }
                        return o
                    }(e, t) : "object" == typeof e ? f(e[t[0]], t.slice(1)) : void 0 : e
                }

                function m(t) {
                    if (!n[t] && c.isArray(o[t]) && o[t].length) {
                        var e = o[t].splice(0, 1)[0];
                        "function" == typeof e && (n[t] = !0, e(function() {
                            var e;
                            n[e = t] = !1, m(e)
                        }))
                    }
                }

                function g(e) {
                    for (var t = 0; t < (a || []).length; t++) a[t](e)
                }
                t[e] = function(e, t) {
                    d ? setTimeout(function() {
                        e(t)
                    }, 1) : (s.push({
                        fn: e,
                        ctx: t
                    }), "complete" === document.readyState || !document.attachEvent && "interactive" === document.readyState ? setTimeout(l, 1) : u || (document.addEventListener ? (document.addEventListener("DOMContentLoaded", l, !1), window.addEventListener("load", l, !1)) : (document.attachEvent("onreadystatechange", p), window.attachEvent("onload", l)), u = !0))
                }, c.request = function(e, t) {
                    var o;

                    function r() {
                        4 === o.readyState && t(o), o.readyState < 4 || o.status
                    }
                    e = c.addRequestToken(e);
                    var n = window.navigator.appVersion.replace(/\s+/g, "");
                    if (window.XDomainRequest && (n.match("MSIE8.") || n.match("MSIE9.")))(o = new XDomainRequest).onload = function() {
                        t(o)
                    }, o.onprogress = function() {}, o.ontimeout = function() {};
                    else if ("undefined" != typeof XMLHttpRequest)(o = new XMLHttpRequest).onreadystatechange = r;
                    else {
                        for (var i = ["MSXML2.XmlHttp.5.0", "MSXML2.XmlHttp.4.0", "MSXML2.XmlHttp.3.0", "MSXML2.XmlHttp.2.0", "Microsoft.XmlHttp"], a = 0, s = i.length; a < s; a++) try {
                            o = new ActiveXObject(i[a]);
                            break
                        } catch (e) {}
                        o.onreadystatechange = r
                    }
                    o.open("GET", e, !0), o.send("")
                }, c.post = function(e, t, o) {
                    var r;

                    function n() {
                        4 === r.readyState && o(r), r.readyState < 4 || r.status
                    }
                    e = c.addRequestToken(e);
                    var i = window.navigator.appVersion.replace(/\s+/g, "");
                    if (window.XDomainRequest && (i.match("MSIE8.") || i.match("MSIE9.")))(r = new XDomainRequest).onload = function() {
                        o(r)
                    }, r.onprogress = function() {}, r.ontimeout = function() {};
                    else if ("undefined" != typeof XMLHttpRequest)(r = new XMLHttpRequest).onreadystatechange = n;
                    else {
                        for (var a = ["MSXML2.XmlHttp.5.0", "MSXML2.XmlHttp.4.0", "MSXML2.XmlHttp.3.0", "MSXML2.XmlHttp.2.0", "Microsoft.XmlHttp"], s = 0, d = a.length; s < d; s++) try {
                            r = new ActiveXObject(a[s]);
                            break
                        } catch (e) {}
                        r.onreadystatechange = n
                    }
                    r.open("POST", e, !0), r.send(t)
                }, c.vcotConversion = function(e, t, o) {
                    var r = {
                        redemptionKey: e,
                        awcb: t,
                        advertiserId: c.advertiserId
                    };
                    c.request("https://api.uniqodo.com/vcot/conversion" + c.buildQueryString(r), function(e) {
                        try {
                            var t = JSON.parse(e.responseText);
                            if (!t.data) return o(new Error("No data received from VCOT conversion"));
                            o(null, t.data)
                        } catch (e) {
                            o(e)
                        }
                    })
                }, c.cashbackQuery = function(e, t, o) {
                    var r = "https://engagement.uniqodo.com/cashback/query/" + c.priv + "/" + c.advertiserId,
                        n = {
                            offer: e,
                            data: t = t || []
                        };
                    c.post(r, JSON.stringify(n), function(e) {
                        if (200 !== e.status) return o(new Error("Cashback query returned incorrect status. " + JSON.stringify(n)));
                        var t;
                        try {
                            t = JSON.parse(e.responseText)
                        } catch (e) {
                            return o(e)
                        }
                        return t.errors && t.errors.length ? o(t.errors[0]) : o(void 0, t.data)
                    })
                }, c.addRequestToken = function(e) {
                    return c.getItem("_uqd_sctk") ? -1 !== e.indexOf("?") ? e + "&uqd-sctk=" + encodeURIComponent(c.getItem("_uqd_sctk")) : e + "?uqd-sctk=" + encodeURIComponent(c.getItem("_uqd_sctk")) : e
                }, c.userCodeEnquiry = function(e, t, i) {
                    var o = "https://api.uniqodo.com/user-code-enquiry/" + c.priv + "/" + e,
                        r = {};
                    if (!t) return i("Missing identifier for user code enquiry");
                    r.email = t, c.request(o + c.buildQueryString(r), function(e) {
                        var t = JSON.parse(e.responseText);
                        if ("success" !== t.result) return i("Error in code enquiry");
                        if (null === t.data) return i(void 0, {});
                        var o = t.data.code || null,
                            r = void 0 !== t.data.discount ? (t.data.discount || {}).discount_amount : null,
                            n = void 0 !== t.data.redemption_records && 0 < t.data.redemption_records.length;
                        i(void 0, {
                            code: o,
                            discount: r,
                            isRedeemed: n
                        })
                    })
                }, c.isCurrentURLPath = function(e, t) {
                    var o = window.location.pathname.replace(/^\/|\/$/g, "");
                    return e = e.replace(/^\/|\/$/g, ""), t || (o = o.replace(/\.[a-z]+$/i, "")), o == e
                }, c.isBTShop = function() {
                    return -1 !== ["shop.bt.com", "www.shop.bt.com", "store.ee.co.uk", "www.store.ee.co.uk", "sg7test.galahad-test.com"].indexOf(window.location.hostname)
                }, c.hideEl = function(e) {
                    e.setAttribute("style", "display:none; visibility: hidden;");
                    try {
                        e.style && (e.style.visibility = "hidden", e.style.display = "none")
                    } catch (e) {}
                }, c.showEl = function(e) {
                    e.setAttribute("style", "display:block; visibility: visible;");
                    try {
                        e.style && (e.style.display = "block", e.style.visibility = "visible")
                    } catch (e) {}
                }, c.inArray = function(e, t) {
                    for (var o = 0; o < t.length; o++)
                        if (t[o] == e) return !0;
                    return !1
                }, c.getQueryStringParameter = function(e) {
                    for (var t = document.location.search.substring(1).split("&"), o = 0; o < t.length; o++) {
                        var r = t[o].split("=");
                        if (e.toLowerCase() == r[0].toLowerCase()) return r[1]
                    }
                }, c.buildQueryString = function(e) {
                    var t = [];
                    for (var o in e) e.hasOwnProperty(o) && t.push(encodeURIComponent(o) + "=" + encodeURIComponent(e[o]));
                    return 0 < t.length ? "?" + t.join("&") : ""
                }, c.addClassName = function(e, t) {
                    e && (void 0 !== e.classList ? e.classList.add(t) : e.setAttribute("class", (e.getAttribute("class") || "") + " " + t))
                }, c.hasClassName = function(e, t) {
                    return !!e && (void 0 !== e.classList ? e.classList.contains(t) : (e.getAttribute("class") || "").match(t))
                }, c.objectAssign = function(e, t) {
                    if (!t) return e;
                    for (var o = Object.keys(t), r = 0; r < o.length; r++) e[o[r]] = t[o[r]];
                    return e
                }, c.copyToObject = function(e, t) {
                    for (var o = Object.keys(t || {}), r = 0; r < o.length; r++) e[o[r]] = t[o[r]];
                    return e
                }, c.getUrlVars = function(e) {
                    for (var t = {}, o = (e = e || window.location.search).replace(/#.*/, ""), r = o.slice(o.indexOf("?") + 1).split("&"), n = 0; n < r.length; n++) {
                        var i = r[n].split("=");
                        if (2 <= i.length) t[i.splice(0, 1)] = i.join("=");
                        else i[0] && (t[i[0]] = "")
                    }
                    return t
                }, c.getUE = function() {
                    if (c.getItem(c.userCookie)) return c.getItem(c.userCookie)
                }, c.getUserIdentifier = function() {
                    if (window.digitalData && digitalData.user && digitalData.user.alias_id && digitalData.account && digitalData.account.selected_key) return digitalData.account.selected_key.toString() + "-" + digitalData.user.alias_id.toString()
                }, c.setUE = function(e) {
                    c.setItem(c.userCookie, e, 864e5, !0)
                }, c.removeUE = function() {
                    c.removeItem(c.userCookie)
                }, c.storage = {
                    hasLocalStorage: function() {
                        return void 0 !== window.localStorage
                    },
                    hasBSupport: function() {
                        return window.atob && window.btoa
                    },
                    setItem: function(e, t, o, r) {
                        if (o = o || 36e5, r && this.hasBSupport() && (t = btoa(t)), this.hasLocalStorage()) {
                            var n = (new Date).getTime() + o + "|" + t;
                            return localStorage.setItem(e, n)
                        }
                        this.setCookie(e, t, o)
                    },
                    removeItem: function(e) {
                        if (this.hasLocalStorage()) return localStorage.removeItem(e);
                        this.removeCookie(e)
                    },
                    parseItem: function(e, t) {
                        if (e) {
                            var o = e.split("|");
                            if (!(o.length < 2)) {
                                var r = o.shift(1);
                                if (!((new Date).getTime() > parseInt(r))) return t && this.hasBSupport() ? this.parseBaseValue(o.join("|")) : o.join("|")
                            }
                        }
                    },
                    parseBaseValue: function(e) {
                        if (e) try {
                            if (this.hasBSupport()) return atob(e)
                        } catch (e) {}
                    },
                    getItem: function(e, t) {
                        return this.hasLocalStorage() ? this.parseItem(localStorage.getItem(e), t) : this.getCookie(e, t)
                    },
                    setCookie: function(e, t, o) {
                        try {
                            var r = o = o || 36e5,
                                n = e + "=" + t;
                            (o = new Date).setTime(o.getTime() + r), n += o = "; expires=" + o.toGMTString(), n += "; path=/;domain=." + window.location.hostname, document.cookie = n
                        } catch (e) {}
                    },
                    getCookie: function(e, t) {
                        for (var o = document.cookie.split(";"), r = 0; r < o.length; r++) {
                            var n = o[r].split("=");
                            if (e == (n.shift(1) || "").replace(/^\s+|\s+$/g, "")) return t && this.hasBSupport() ? this.parseBaseValue(n.join("=")) : n.join("=")
                        }
                        return null
                    },
                    removeCookie: function(e) {
                        document.cookie = e + "=;expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;domain=" + window.location.hostname
                    }
                }, c.setItem = function(e, t, o, r) {
                    o = o || 2592e6;
                    var n = e + "=" + t,
                        i = c.cookiePath ? c.cookiePath : "/";
                    if (1 !== o) {
                        var a = new Date;
                        a.setTime(a.getTime() + o), n += a = "; expires=" + a.toGMTString();
                        try {
                            c.cookiePath || r || "undefined" == typeof localStorage || null == localStorage || localStorage.setItem(e, t)
                        } catch (e) {}
                    }
                    n += "; path=" + i + ";domain=" + c.advertiserDomain, document.cookie = n
                }, c.getItem = function(e) {
                    for (var t = document.cookie.split(";"), o = 0; o < t.length; o++) {
                        var r = t[o].split("=");
                        if (e == r[0].replace(/^\s+|\s+$/g, "")) return r[1]
                    }
                    try {
                        if ("undefined" != typeof localStorage && localStorage.getItem(e)) return localStorage.getItem(e)
                    } catch (e) {}
                    return null
                }, c.removeItem = function(e) {
                    try {
                        localStorage && localStorage.removeItem(e)
                    } catch (e) {}
                    var t = c.cookiePath ? c.cookiePath : "/";
                    document.cookie = e + "=;expires=Thu, 01 Jan 1970 00:00:00 UTC; path=" + t + ";domain=" + c.advertiserDomain
                }, c.once = function(e) {
                    var t;
                    return function() {
                        return e && (t = e.apply(this, arguments), e = null), t
                    }
                }, c.modeCheck = function() {
                    "1" == c.getQueryStringParameter("uqdLiveMode") ? (c.setItem("uqdLiveMode", c.getQueryStringParameter("uqdLiveMode"), 1), c.liveMode = !0) : "0" == c.getQueryStringParameter("uqdLiveMode") ? (c.removeItem("uqdLiveMode"), c.liveMode = !1) : 1 == c.getItem("uqdLiveMode") && (c.liveMode = !0)
                }, c.pauseEvent = function(e) {
                    e.returnValue = !1, e.preventDefault && e.preventDefault(), e.cancelBubble = !0, e.stopPropagation && e.stopPropagation()
                }, c.installStyle = function(e) {
                    if (!document.body) return setTimeout(function() {
                        c.installStyle(e)
                    }, 50);
                    var t = document.createElement("style");
                    t.setAttribute("type", "text/css"), t.innerHTML = e, document.body.appendChild(t)
                }, c.fireEvent = function(e, t, o) {
                    var r;
                    if (document.createEvent) {
                        (n = document.createEvent("MouseEvents")).initEvent(t, !0, !0), r = !e.dispatchEvent(n)
                    } else {
                        var n = document.createEventObject();
                        r = e.fireEvent("on" + t, n)
                    }
                    return o && o(), r
                }, c.promoCodeEnterKeyPressHandler = function(e) {
                    (13 == (e = e || window.event).keyCode || e.key && "enter" == e.key.toLowerCase()) && (e.returnValue = !1, e.preventDefault && e.preventDefault(), c.fireEvent(window.uniqodoMatchedEls.button, "click"))
                }, c.report = function(e) {
                    if (!(++c.report.submissions > c.report.limit)) try {
                        var t = "https://api.uniqodo.com/reporting/" + c.advertiserId + "/log";
                        t += "?message=" + encodeURIComponent(e.message) + "&type=" + encodeURIComponent(e.name), c.request(t, function() {})
                    } catch (e) {}
                }, c.report.limit = 100, c.report.submissions = 0, c.repeat = function(e, t, o, r) {
                    c.taskRepeatInterval = c.taskRepeatInterval || {}, c.taskRepeatCounter = c.taskRepeatCounter || {}, c.taskRepeatCounter[e] = 0, r = r || 500, o = o || 30, c.taskRepeatInterval[e] && window.clearInterval(c.taskRepeatInterval[e]), c.taskRepeatInterval[e] = window.setInterval(function() {
                        t(), c.taskRepeatCounter[e] == o && (window.clearInterval(c.taskRepeatInterval[e]), c.taskRepeatCounter[e] = 0), c.taskRepeatCounter[e]++
                    }, r)
                }, c.retry = function(e, t, o, r, n, i) {
                    c.taskRetryTimer = c.taskRetryTimer || {}, c.taskRetryCounter = c.taskRetryCounter || {}, c.taskRetryCounter[e] = 0, r = r || 500, n = n || 30, c.taskRetryTimer[e] && window.clearInterval(c.taskRetryTimer[e]), c.taskRetryTimer[e] = window.setInterval(function() {
                        o() ? (t(), window.clearInterval(c.taskRetryTimer[e]), c.taskRetryCounter[e] = 0) : c.taskRetryCounter[e] == n && (window.clearInterval(c.taskRetryTimer[e]), c.taskRetryCounter[e] = 0, i && i()), c.taskRetryCounter[e]++
                    }, r)
                }, c.retry.INFINITE_UNTIL_SUCCESS = -1, c.promoCodeProfileMatched = function() {
                    return !1
                }, c.getPromoCodeElements = function() {
                    var e, t, o, r;
                    return !!((e = c.selector.input()) && (t = c.selector.button(), e && t)) && (o = t.onclick, r = e.getAttribute("style") ? e.getAttribute("style") : "", void 0 !== window.uniqodoMatchedEls && window.uniqodoMatchedEls && (void 0 !== window.uniqodoMatchedEls.inputStyle && (r = window.uniqodoMatchedEls.inputStyle), void 0 !== window.uniqodoMatchedEls.existingOnClick && (o = window.uniqodoMatchedEls.existingOnClick)), window.uniqodoMatchedEls = {
                        input: e,
                        button: t,
                        inputStyle: r,
                        existingOnClick: o
                    }, window.uniqodoMatchedEls)
                }, c.filter = function(e, t) {
                    for (var o = [], r = 0; r < e.length; r++) t(e[r], r) && o.push(e[r]);
                    return o
                }, c.getUserId = function() {
                    return null
                }, c.deepFind = function(e, t, o) {
                    var r = f(e, t.split("."));
                    return void 0 !== r && r && r.length || (r = o), r
                }, c.debounce = function(o, r) {
                    var n;
                    return r = r || 10,
                        function() {
                            var e = this,
                                t = arguments;
                            clearTimeout(n), n = setTimeout(function() {
                                n = null, o.apply(e, t)
                            }, r)
                        }
                }, c.useDebounce = (r = {}, function(e, t, o) {
                    return "function" != typeof r[e] && (r[e] = c.debounce(t, o)), r[e]
                }), c.parallel = function(r, e, o) {
                    var n = [],
                        i = 0,
                        t = [];
                    r = r || [];
                    var a = (e = e || {}).timeout ? setTimeout(function() {
                        d(new Error("timeout"), n)
                    }, e.timeout) : void 0;
                    if (!o) throw new Error("missing callback");
                    var s, d = (s = !1, function(e, t) {
                        s || (clearTimeout(a), s = !0, o(e, t))
                    });
                    if (!r.length) return d(void 0, []);

                    function c(e, o) {
                        var r;
                        e((r = !1, function(e, t) {
                            if (r) throw new Error("callback was already called");
                            r = !0, u(e, t, o)
                        }))
                    }
                    for (var u = function(e, t, o) {
                            if (e) return d(e);
                            n[o] = t, ++i >= r.length && d(void 0, n)
                        }, l = 0; l < r.length; l++) "function" == typeof r[l] ? -1 === t.indexOf(r[l]) && (t.push(r[l]), c(r[l], l)) : i++
                }, c.executeInSeries = (o = {}, n = {}, {
                    push: function(e, t) {
                        c.isArray(o[e]) || (o[e] = []), o[e].push(t), m(e)
                    }
                }), c.map = function(e, t) {
                    for (var o = [], r = 0; r < e.length; r++) o.push(t(e[r], r));
                    return o
                }, c.reduce = function(e, t, o) {
                    for (var r = 0; r < e.length; r++) o = t(o, e[r]);
                    return o
                }, c.mapObjectRecord = function(n, i, a) {
                    if (n) return c.reduce(Object.keys(i), function(e, t) {
                        var o = c.isArray(i[t]) ? i[t][0] : i[t],
                            r = c.isArray(i[t]) ? i[t][1] : a || null;
                        return e[t] = c.deepFind([n], o, [r])[0], e
                    }, {})
                }, c.standardizePhoneNumber = function(e) {
                    return !!e && (e = e.replace(/\s?\s+?/g, ""), !!/^(01[0-9]{8,9}|02[0-9]{9})$/g.test(e) && e)
                }, c.getRawDataLayer = function() {
                    if (window.monetateData && window.monetateData.addCartRows) {
                        var e = c.reduce(window.monetateData.addCartRows, function(e, t) {
                            var o = +t.unitPrice || 0,
                                r = +t.quantity || 0;
                            return e.productId.push(t.productId), e.quantity.push(r), e.unitPrice.push(o), e.productCurrency.push(t.currency), e.sku.push(t.sku), e.totalQty = e.totalQty + r, e.totalPrice = e.totalPrice + r * o, e
                        }, {
                            productId: [],
                            quantity: [],
                            unitPrice: [],
                            productCurrency: [],
                            sku: [],
                            totalQty: 0,
                            totalPrice: 0
                        });
                        return c.objectAssign(e, function() {
                            var e = {
                                accountId: "",
                                loggedIn: "",
                                line: "",
                                scheme: "",
                                referrerId: ""
                            };
                            if (void 0 !== window.btInternal && (window.btInternal.loginData, 1) && (window.btInternal.loginData[0], 1)) {
                                var t = btInternal.loginData[0];
                                e = {
                                    accountId: t.accountId || "",
                                    loggedIn: t.loggedIn || "",
                                    line: t.line || "",
                                    scheme: t.scheme || "",
                                    referrerId: t.referrerId || ""
                                }
                            }
                            return e
                        }()), e
                    }
                }, c.getDataLayer = function() {
                    var e = c.getRawDataLayer();
                    return e ? {
                        productId: e.productId.join(c.itemSeparator),
                        quantity: e.quantity.join(c.itemSeparator),
                        unitPrice: e.unitPrice.join(c.itemSeparator),
                        currency: e.productCurrency.join(c.itemSeparator),
                        sku: e.sku.join(c.itemSeparator),
                        totalQty: e.totalQty,
                        totalPrice: e.totalPrice,
                        accountId: e.accountId,
                        loggedIn: e.loggedIn,
                        line: e.line,
                        scheme: e.scheme,
                        referrerId: e.referrerId
                    } : {}
                }, c.monitor = function() {
                    c.promoCodeProfileMatched() && !c.getPromoCodeElements() && c.report({
                        name: "siteChangeDetection",
                        message: "Site changes affecting promo code widget detected!"
                    })
                }, c.isOrderConfirmationPage = function() {
                    return void 0 !== c.orderConfirmation && 1 == c.orderConfirmation
                }, c.redemptionCallback = function() {
                    c.getItem(c.validatedCodeCookie) != c.getItem(c.triggerCodeCookie) && c.removeItem(c.codeCookie), c.removeItem(c.triggerCodeCookie), c.removeItem(c.validationPN), c.removeItem(c.validatedCodeCookie), c.removeItem(c.gatedValidationPN), c.removeItem(c.gatedValidatedCodeCookie), c.removeItem(c.gatedTriggerCodeCookie), c.removeUE(), c.removeItem("_uqd_s_8297"), c.removeItem("_uqd_s_8281"), c.removeItem("_uqd_s_8748"), c.removeItem("_uqd_s_8746"), c.embeddableCookie && c.removeItem(c.embeddableCookie), c.storage.removeItem(c.gatedValidationResponseCookie)
                }, c.filterTriggerCode = function() {
                    void 0 !== c.triggerCode && (c.triggerCodeRedemption ? ("string" == typeof c.triggerCode && (c.triggerCode = c.triggerCode.replace(/\s+/g, "")), c.triggerCode = "" == c.triggerCode ? null : c.triggerCode) : c.triggerCode = "")
                }, c.getPointOfSale = function() {
                    if (c.isBTShop()) return "shop";
                    switch (window.location.hostname) {
                        case "www.bt.com":
                        case "bt.com":
                            return "web";
                        default:
                            return "unknown"
                    }
                }, c.validateCode = function(o, r, n, e) {
                    if (!o) return !1;
                    n = n || {}, o = o.replace(/\s+/g, ""), o = encodeURIComponent(o);
                    var t = "https://api.uniqodo.com/validate/" + c.priv + "/" + o + "/" + c.advertiserId,
                        i = c.getDataLayer();
                    if (c.getUE()) {
                        var a = c.getUE();
                        i.email = a, c.uid = a
                    }
                    if (void 0 !== c.email && 1 < c.email.length && (i.email = c.email, c.uid = c.email), i.email || (i.email = ""), c.getItem(n.pn || c.validationPN)) {
                        var s = c.getItem(n.pn || c.validationPN);
                        s && (i.pn = s)
                    }
                    c.objectAssign(i, e), i.isValidation || (i.isValidation = "true"), void 0 !== c.name && 1 < c.name.length && (i.name = c.name), void 0 !== c.postCode && 1 < c.postCode.length && (i.postCode = c.postCode), void 0 !== c.offerId && 0 < c.offerId && (i.offerId = c.offerId), i.pos = c.getPointOfSale(), c.request(t + c.buildQueryString(i), function(e) {
                        var t = JSON.parse(e.responseText);
                        c.setItem(n.codeCookie || c.codeCookie, o, 1), 0 == t.errors.length && (c.setItem(n.validatedCodeCookie || c.validatedCodeCookie, o), c.setItem(n.codeCookie || c.codeCookie, o, 1)), t.errors && 0 === t.errors.length && t && (t.data || {}).val_key && c.setItem(n.pn || c.validationPN, t.data.val_key, 3600), "function" == typeof r && r(t)
                    })
                }, c.addValidCode = function(e, t) {
                    var o, r = c.getItem(c.validatedCodeCookie);
                    if (!r || r && 0 == r.length) o = e + "," + t;
                    else {
                        var n = r.split("|");
                        if (o = e + "," + t, c.inArray(o, n)) return n;
                        n.push(o), o = n.join("|")
                    }
                    return c.setItem(c.validatedCodeCookie, o), o.split("|")
                }, c.listener = function(e, t, o, r) {
                    window.addEventListener ? e.addEventListener(t, o, r) : window.attachEvent && e.attachEvent("on" + t, o)
                }, c.listenForNavigation = (i = window.history, {
                    addEventListener: function(e) {
                        a || function() {
                            if (a = [], i) {
                                var t = i.pushState;
                                i.pushState = function(e) {
                                    return setTimeout(function() {
                                        g(e)
                                    }, 0), t.apply(i, arguments)
                                }
                            } else c.listener(window, "hashchange", g);
                            c.listener(window, "popstate", g)
                        }(), a.push(e)
                    },
                    removeListener: function(t) {
                        a = c.filter(a, function(e) {
                            return e !== t
                        })
                    }
                }), c.promoActive = function(e) {
                    var t = new Date;
                    return !(t < e.startDate || t > e.endDate)
                }, c.startSession = function(e) {
                    var t = e || "_uqd_skey";
                    c.setItem(t, "1", 60 * c.validationSession * 1e3, !0)
                }, c.isQuickLink = function(e) {
                    return !!e && new RegExp(e + ".html$", "i").test(location.pathname)
                }, c.isActiveUTC = function(e, t) {
                    if (void 0 === e.startDateUTC && void 0 === e.startDateUTC) return !0;
                    t = t || "sKey", (e.startDate || e.endDate) && c.report({
                        type: "SCHEDULE_WARNING",
                        message: "Conflicting timezones, detected UTC and non-UTC in same config!" + e[t]
                    });
                    var o = Date.now(),
                        r = e.startDateUTC,
                        n = e.endDateUTC,
                        i = c.getItem("_uqd_cvs");
                    return i && i === e[t] || i && 1 < i.split("--").length && -1 !== i.split("--").indexOf(e[t]) ? !(n < o) : !(o < r || n < o)
                }, c.isActive = function(e, t) {
                    if (void 0 !== e.startDateUTC) return c.isActiveUTC(e, t);
                    var o = new Date;
                    t = t || "sKey";
                    var r = c.getItem("_uqd_cvs");
                    return r && r === e[t] || r && 1 < r.split("--").length && -1 !== r.split("--").indexOf(e[t]) ? !(o > e.endDate) : !(o < e.startDate || o > e.endDate)
                }, c.isArray = function(e) {
                    return "[object Array]" === Object.prototype.toString.call(e)
                }, c.isObject = function(e) {
                    return "[object Object]" === Object.prototype.toString.call(e)
                }, c.forEach = function(e, t) {
                    if (c.isArray(e))
                        for (var o = 0; o < e.length; o++) t(e[o], o);
                    else if (c.isObject(e)) {
                        var r = Object.keys(e);
                        if (!r || !r.length) return;
                        for (o = 0; o < r.length; o++) t(e[r[o]], r[o], o)
                    }
                }, c.replaceInText = function(e, t) {
                    if (!t || !t.length) return e;
                    for (var o = 0; o < t.length; o++) e = e.replace(t[o].search instanceof RegExp ? t[o].search : new RegExp(t[o].search, "g"), t[o].replace);
                    return e
                }, c.flattenObject = function(e, t) {
                    var o = {};
                    t = t || "-";
                    for (var r = Object.keys(e), n = 0; n < r.length; n++)
                        if (e.hasOwnProperty(r[n])) {
                            var i = e[r[n]];
                            if ("object" == typeof i && null !== i)
                                for (var a = c.flattenObject(i, t), s = Object.keys(a), d = 0; d < s.length; d++) a.hasOwnProperty(s[d]) && (o[r[n] + t + s[d]] = a[s[d]]);
                            else o[r[n]] = i
                        }
                    return o
                }, c.isCurrentPathnameInList = function(e, t) {
                    if (!e) return !1;
                    var o = location.pathname;
                    t || (o = o.replace(/\/$/, "").toLowerCase());
                    for (var r = 0; r < e.length; r++) {
                        var n = e[r];
                        if (n instanceof RegExp) return n.test(o);
                        if (t || (n = n.toLowerCase()), n === o) return !0
                    }
                    return !1
                }, c.changePromoCode = function(e) {
                    if (e && e.value) {
                        var t = (e.value || "").toUpperCase(),
                            o = c.getItem(c.triggerCodeCookie) ? c.getItem(c.triggerCodeCookie).toUpperCase() : "",
                            r = c.errorCode.toUpperCase();
                        switch (t) {
                            case o:
                                e.value = c.getItem(c.validatedCodeCookie) || c.getItem(c.codeCookie);
                                break;
                            case r:
                                e.setAttribute("autocomplete", "off"), e.autocomplete = "off", e.value = c.getItem(c.codeCookie)
                        }
                    }
                }, c.iterateeChildNodes = function(e, t, o) {
                    if (e)
                        for (var r = e.childNodes, n = 0; n < r.length; n++)(!o || -1 !== o.indexOf(r[n].nodeType)) && t(r[n], n)
                }, c.removeTriggerCodePresence = function() {
                    var e = c.selector.triggerCodeDisplay();
                    if (c.displaysTriggerCode && e) {
                        var t = c.getItem(c.triggerCodeCookie),
                            o = new RegExp(t, "g");
                        if (t && c.getItem(c.validatedCodeCookie))
                            for (var r = 0; r < e.length; r++) e[r] && e[r].textContent.match(o) && (0 < e[r].innerHTML.length ? e[r].innerHTML = e[r].innerHTML.replace(o, c.getItem(c.validatedCodeCookie)) : e[r].textContent = e[r].textContent.replace(o, c.getItem(c.validatedCodeCookie)))
                    }
                }, c.isPromoCodeEventTarget = function(e) {
                    return window.uniqodoMatchedEls.button = c.selector.button(), e === window.uniqodoMatchedEls.button || e.parentNode === window.uniqodoMatchedEls.button || e.parentNode.parentNode === window.uniqodoMatchedEls.button
                }, c.clearErrorMessages = function() {
                    var e = document.getElementById("uqd-validation-error-messages");
                    return e && (e.innerHTML = ""), e
                }, c.setPromoCodeFieldValue = function(e) {
                    var t = c.selector.input();
                    t && (t.value = e || "")
                }, c.onValidationError = function(t, e) {
                    try {
                        204 == e.errors[0].code && 0 < e.errors[0].reference.length ? (t.input.value = e.errors[0].reference, c.setPromoCodeFieldValue(e.errors[0].reference)) : (0 < c.errorCode.length && c.hideFieldValue(t.input), t.input.value = c.errorCode, c.setPromoCodeFieldValue(c.errorCode))
                    } catch (e) {
                        t.input.setAttribute("style", t.inputStyle)
                    }
                }, c.onValidationSuccess = function(t, e) {
                    try {
                        c.hideFieldValue(t.input), t.input.value = e.data.code, c.setItem(c.triggerCodeCookie, e.data.code), c.setItem(c.validationPN, e.data.val_key)
                    } catch (e) {
                        t.input.setAttribute("style", t.inputStyle)
                    }
                }, c.hideFieldValue = function(e) {
                    e && (e.setAttribute("style", c.valueHideStyle), e.setAttribute("autocomplete", "off"), e.autocomplete = "off")
                }, c.showValidationErrors = function(e) {
                    c.displayErrors(c.map(e, function(e) {
                        return e.message || ""
                    }))
                }, c.displayErrors = function(e) {
                    if (e) {
                        var t = document.querySelector("#couponarea .field-error");
                        t && (t.textContent = "");
                        var o = c.clearErrorMessages();
                        if (!o) {
                            var r = document.querySelector("#couponarea form");
                            if (!r) return void c.report({
                                message: "Missing anchor for error messages"
                            });
                            (o = document.createElement("div")).setAttribute("id", "uqd-validation-error-messages"), o.setAttribute("class", "field-error color-red mb-2"), r.parentElement.insertBefore(o, r)
                        }
                        for (var n = 0; n < e.length; n++) {
                            var i = document.createElement("div");
                            i.setAttribute("class", ""), i.textContent = e[n] || "", o.appendChild(i)
                        }
                    }
                }, c.handlePromoCodeSubmission = function(e) {
                    var n = (e = e || window.event).target || e.srcElement,
                        i = window.uniqodoMatchedEls;
                    if (c.isAsyncPromoForm || (c.requesting = !1), !i.input.value || !c.isPromoCodeEventTarget(n) || n.uqdAllowProp && "1" == n.uqdAllowProp) return n.uqdAllowProp = "0", e;
                    c.pauseEvent(e), c.clearErrorMessages();
                    var a = i.input.value;
                    c.validateCode(i.input.value, function(e) {
                        if (n.uqdAllowProp = "1", void 0 !== window.uqdIns) try {
                            uqdIns.validateCode(i.input.value, e)
                        } catch (e) {
                            c.report(e)
                        }
                        if (0 < e.errors.length) {
                            var t = c.filter(e.errors, function(e) {
                                return 204 !== e.code
                            });
                            if (0 < t.length) return c.showValidationErrors(t), void(n.uqdAllowProp = "0");
                            if (204 === e.errors[0].code && !e.errors[0].reference) return c.showValidationErrors([{
                                message: "Code not recognised"
                            }]), void(n.uqdAllowProp = "0");
                            c.onValidationError(i, e)
                        } else {
                            if (c.interceptSuccesfullValidation)
                                for (var o = 0; o < c.interceptSuccesfullValidation.length; o++) {
                                    var r = c.interceptSuccesfullValidation[o](e, a, i);
                                    if (1 === r) break;
                                    if (-1 === r) return
                                }
                            c.validationSuccessCallback && "function" == typeof c.validationSuccessCallback ? c.validationSuccessCallback() : c.onValidationSuccess(i, e)
                        }
                        c.isAsyncPromoForm && c.retry("uqdInstallPromoListeners", c.installListeners, c.getPromoCodeElements);
                        try {
                            c.fireEvent(n, "click", function() {
                                c.changePromoCode(i.input), i.input.setAttribute("style", i.inputStyle), c.displaysTriggerCode && c.repeat("removeTriggerCodePresence", c.removeTriggerCodePresence, 500, 20)
                            })
                        } catch (e) {
                            i.input.setAttribute("style", i.inputStyle)
                        }
                    })
                }, c.installListeners = function() {
                    if (c.removeTriggerCodePresence(), !(window.uniqodoMatchedEls.input.uqdInstalled || c.installed && !c.isAsyncPromoForm)) return c.installed = !0, window.uniqodoMatchedEls.input.uqdInstalled = !0, c.changePromoCode(window.uniqodoMatchedEls.input), c.getItem(c.codeParam) && (window.uniqodoMatchedEls.input.value = c.getItem(c.codeParam), c.fireEvent(window.uniqodoMatchedEls.input, "click")), window.addEventListener("click", c.handlePromoCodeSubmission, !0), window.uniqodoMatchedEls.input.addEventListener("keydown", c.promoCodeEnterKeyPressHandler, !0), !1
                }, c.installEventHandlers = function() {
                    window.addEventListener && c.installListeners()
                }, c.initialize = function() {
                    c.getQueryStringParameter("uqd") && c.enableAutofill && c.setItem(c.codeCookie, c.getQueryStringParameter("uqd"), 60 * c.validationSession * 1e3), c.getQueryStringParameter("uqd-cvs") && c.setItem("_uqd_cvs", c.getQueryStringParameter("uqd-cvs"), 1), c.getQueryStringParameter("uqd-sctk") && c.setItem("_uqd_sctk", c.getQueryStringParameter("uqd-sctk"), 72e7), c.embeddableButton && c.embeddableButton.initialize && c.embeddableButton.initialize()
                }
            }("onDomReady", window, UNIQODO), onDomReady(function() {
                UNIQODO.bootstrap = function() {
                    if (UNIQODO.initialize(), UNIQODO.experience && UNIQODO.experience.install(), UNIQODO.isOrderConfirmationPage()) {
                        UNIQODO.awinRedemption.initialize(), JUSTO.transact(UNIQODO.orderId, UNIQODO.orderValue, UNIQODO.triggerCode, null, UNIQODO.getDataLayer());
                        var e = UNIQODO.getItem(UNIQODO.validatedCodeCookie),
                            t = UNIQODO.getItem(UNIQODO.validationPN),
                            o = UNIQODO.getItem(UNIQODO.gatedValidatedCodeCookie),
                            r = UNIQODO.getItem(UNIQODO.gatedValidationPN),
                            n = UNIQODO.triggerCode;
                        UNIQODO.awinRedemption.subscribe(UNIQODO.awinRedemption.EVENTS.redemptionDone, function(e) {
                            return UNIQODO.redemptionCallback(e)
                        }), UNIQODO.awinRedemption.startRedemption([{
                            uniqodoValidatedCode: e,
                            uniqodoValidationKey: t,
                            ignoreTriggerCode: !1,
                            clientSetTriggerCode: n,
                            redemptionType: "integration"
                        }, {
                            uniqodoValidatedCode: o,
                            uniqodoValidationKey: r,
                            ignoreTriggerCode: !0,
                            clientSetTriggerCode: n,
                            redemptionType: "gate"
                        }])
                    } else UNIQODO.getPromoCodeElements() ? UNIQODO.installEventHandlers() : UNIQODO.removeTriggerCodePresence()
                };
                try {
                    if (UNIQODO.modeCheck(), !UNIQODO.liveMode) return !1;
                    UNIQODO.bootstrap()
                } catch (e) {
                    UNIQODO.report(e)
                }
            }),
            function(c) {
                try {
                    if (!c || c.overlayInstalled) return;
                    c.overlayInstalled = !0;
                    var e = '<div id="uqdTopPanel"><div id="uqdGateTitle"></div><div id="uqdGateDesc">DESC</div></div><div id="uqdBottomPanel"><div id="uqdGateElements" class="uqd-second-screen"><div class="uqd-gate-code"></div><button id="uqdButton"></button></div></div><div id="uqdCodeError"></div>',
                        t = {
                            shop: [".uqd-bf-gate #uqdGate { max-width: 850px; border-radius: 5px;}", ".uqd-bf-gate #uqdGateHeader { padding: 0; width: 100%; }", ".uqd-bf-gate #uqdCloseBtn { padding: 1rem; background: #fff; border: none; margin: 1rem 1rem 0 0; }", ".uqd-bf-gate #uqdCloseBtnIcon { font-size: 44px; color: #5514b4 !important; }", ".uqd-bf-gate #uqdTopPanel { padding: 4rem 4rem 0 4rem; width: 85% }", ".uqd-bf-gate #uqdGate > div { background: rgba(0, 0, 0, 0) !important; }", ".uqd-bf-gate #uqdGate { text-align: left; font-family: bt_fontlight,Calibri,Arial,Helvetica,Sans-Serif;  }", ".uqd-bf-gate #uqdGate { background: #fff }", ".uqd-bf-gate #uqdGateTitle { color: #5514b4; font-size: 2.25rem; font-weight: normal; }", ".uqd-bf-gate #uqdGateDesc { color: #212529; font-size: 1.75rem; padding: 0; font-weight: normal; }", ".uqd-bf-gate #uqdBottomPanel #uqdInstructions { color: #000; }", ".uqd-bf-gate #uqdBottomPanel #uqdButton { font-size: 1rem; font-family: bt_fontregular; background: #5514b4; height: 40px; width: 15%; }", ".uqd-bf-gate #uqdBottomPanel #uqdButton:hover { background: #540e85; }", ".uqd-bf-gate #uqdBottomPanel #uqdCodeError { font-size: 1rem; font-family: bt_fontregular; color: #f80f50; }", ".uqd-bf-gate #uqdGateHeader { text-align: right; }", ".uqd-bf-gate #uqdBottomPanel #uqdCodeBox {width: 52%; margin-right: .5rem; text-align: center; height: 40px; box-sizing: border-box; font-size: 1rem; font-family: bt_fontregular; }", ".uqd-bf-gate #uqdBottomPanel { margin-left: 13%; box-sizing: border-box; width: 100%; padding: 2rem 4rem;  }", ".uqd-bf-gate #uqdInstructions { margin-bottom: .25rem; font-size: 1.125rem; font-weight: normal; }", "#uqdGate .uqd-price { margin-left: 20px; color: #000; vertical-align: top; line-height: 37px; font-size: 19px; font-family: bt_fontbold,Calibri,Arial,Helvetica,Sans-Serif !important; display: inline-block; }", "@media (max-width: 665px ) {", ".uqd-bf-gate #uqdBottomPanel #uqdButton { width: 100%; box-sizing: border-box; }", ".uqd-bf-gate #uqdBottomPanel #uqdCodeBox { width: 100%; margin-bottom: .4rem; }", ".uqd-bf-gate #uqdBottomPanel { margin-left: 0; padding: 2rem; }", ".uqd-bf-gate #uqdTopPanel { margin-left: 0; padding: 2rem 2rem 0 2rem; }", ".uqd-bf-gate #uqdGateTitle { font-size: 2rem;  }", ".uqd-bf-gate #uqdBottomPanel #uqdCodeError { display: unset; }", ".uqd-bf-gate #uqdBottomPanel #uqdMobileCodeError { display: none; }", "#uqdGate .uqd-price { font-size: 16px; line-height: 30px; }", "}", "@media (max-width: 475px ) {", ".uqd-bf-gate #uqdGateTitle { font-size: 1.8rem; line-height: 1.2; margin-bottom: .5rem; }", ".uqd-bf-gate #uqdGateDesc { font-size: 1.25rem; }", "}"].join(" "),
                            console: "#uqdGate .uqd-screen-two-wrapper {padding: 2rem;}#uqdGate .uqd-content-container {}#uqdGate .uqd-image-wrapper {display: inline-block; }#uqdGate .uqd-image-wrapper img {" + ["height: 350px ", "background: linear-gradient(321deg, rgba(241,241,241,1) 0%, rgba(206,208,208,1) 100%)"].join(";") + "}#uqdGate .uqd-form-wrapper {" + ["display: inline-block", "width: 50%", "color: #5514b4", "text-align: center", "float: right", "min-height: 350px", "position: relative"].join(";") + "}#uqdGate .uqd-form-heading { text-align: center; font-size: 40px; }#uqdGate .uqd-form-wrapper .uqd-select-form .uqd-option {" + ["width: 100%", "font-size: 25px", "cursor: pointer", "border: solid 1px", "padding: .5rem", "box-sizing: border-box", "transition: color .5s linear", "color: #000"].join(";") + "}#uqdGate .uqd-select-form { position: absolute; bottom: 0; right: 0; }#uqdGate input[type=radio]:checked + .uqd-option {" + ["color: #5514b4", "background: #eee"].join(";") + "}#uqdGate .uqd-form-wrapper .uqd-select-form input {display: none}#uqdGate .uqd-form-wrapper .uqd-button-container {text-align: right;}#uqdGate .uqd-form-wrapper .uqd-button-container .uqd-order-button { " + ["padding: .5rem 1.5rem;", "color: #fff", "box-sizing: border-box"].join(";") + "}@media only screen and (max-width: 724px) { " + ["#uqdGate .uqd-form-heading { text-align: center; font-size: 35px; }#uqdGate .uqd-form-wrapper .uqd-select-form .uqd-option { font-size: 20px;  }#uqdGate .uqd-image-wrapper { display: block; text-align: center; width: 100%; margin-bottom: 2rem; }", "#uqdGate .uqd-form-wrapper { width: 100%; float: unset; display: block; min-height: unset; }", "#uqdGate .uqd-form-wrapper .uqd-select-form {  position: unset; width: 100%;  }", "#uqdGate .uqd-order-button { width: 100%; }"].join(" ") + "}",
                            twoScreenGateWithCodeExtraStyles: ".uqd-gate-code {display: inline-block;color: #212529;font-size: 1.75rem;vertical-align: middle;font-weight: bold;} #uqdGateElements.uqd-second-screen {width: 80%;} .uqd-bf-gate #uqdBottomPanel .uqd-gate-code + #uqdButton {vertical-align: middle !important;margin-left: 30px;float: right;}  #uqdCodeError { max-width: 70%; }@media (max-width: 665px ) {.uqd-bf-gate #uqdBottomPanel .uqd-gate-code { margin-bottom: 20px; }}"
                        },
                        r = [8853, 8854];

                    function i(t, o, r, n) {
                        if (!t) return n("Missing code");
                        c.validateCode(t, function(e) {
                            return 0 === e.errors.length ? (c.overlay.startSession(o.sKey), e && (e.data || {}).val_key && c.setItem(c.validationPN, e.data.val_key, 3600), n(void 0, t)) : 209 === e.errors[0].code || o.allowAllErrorMessages ? n(e.errors[0].message) : void n(r)
                        }, {
                            pn: c.gatedValidationPN,
                            validatedCodeCookie: c.gatedValidatedCodeCookie,
                            codeCookie: c.gatedTriggerCodeCookie
                        }, {
                            isValidation: "false"
                        })
                    }

                    function a(e, t, i) {
                        var o = "https://api.uniqodo.com/embeddable/v2/" + c.embeddable.config.claimCredential + "/" + e;
                        c.request(o + c.buildQueryString(t || {}), function(e) {
                            var t = JSON.parse(e.responseText);
                            if (0 !== t.errors.length) return i(t.errors[0]);
                            var o = t.data.code,
                                r = t.data.discount ? t.data.discount.discount_amount : "",
                                n = t.data.url ? t.data.url : "";
                            i(void 0, {
                                code: o,
                                discount: r,
                                url: n
                            })
                        })
                    }
                    c.interceptSuccesfullValidation || (c.interceptSuccesfullValidation = []), c.beforeRedemptionCall || (c.beforeRedemptionCall = []), c.interceptSuccesfullValidation.push(function(e, t) {
                        var o = ((e || {}).data || {}).offer_id;
                        if (-1 !== r.indexOf(o)) return e.data.trigger_code = t, e.data.code = t, 1
                    }), c.beforeRedemptionCall.push(function(e, t) {
                        var o = (c.getItem(c.triggerCodeCookie) || "").toLowerCase();
                        return e = (e || "").toLowerCase(), t = (t || "").toLowerCase(), o === e && t === o ? {
                            ignoreTriggerCode: !0
                        } : {}
                    });
                    var o = [{
                        config: {
                            sKey: "_uqd_s_14000",
                            promotionUuid: "02b534402c8975d182bd93c3c6b88392",
                            startDate: new Date(2022, 5, 20, 9),
                            endDate: new Date(2022, 8, 30, 23, 59, 59),
                            errorMessage: "The code entered is not valid for this offer.",
                            enableEmail: !1,
                            displayScreenTwo: !0,
                            disableAutofill: !0,
                            title: "Claim your £30 Voucher",
                            description: "Enter your sales order number to see if you're eligible for a £30 voucher and get your voucher code.",
                            copy: {
                                successfullyFetchedCode: {
                                    title: "£30 Voucher Code",
                                    description: "Thank you. Here is your £30 voucher code",
                                    buttonText: "Next"
                                },
                                incorrectMobileOrderNumber: "The sales order number you have entered is not currently eligible for this promotion.",
                                error: "Sorry, something went wrong"
                            },
                            buttonText: "Check",
                            allowAllErrorMessages: !0,
                            finePrint: "",
                            emptyErrorMessage: "Please enter a valid order number",
                            placeholder: "",
                            instructions: "Order number:",
                            distributorImage: "",
                            pageUrl: "https://shop.bt.com/promotions/claim/xbox-june-2022/",
                            beforeInsert: function(e) {
                                e && e.setAttribute("class", (e.getAttribute("class") || "") + " uqd-bf-gate")
                            },
                            getStyles: function() {
                                return [t.shop, t.twoScreenGateWithCodeExtraStyles].join(" ")
                            },
                            validation: function(o, r) {
                                var n = this;
                                o = o.trim(), c.overlay.startSession(this.sKey), a(this.promotionUuid, {
                                    email: o
                                }, function(e, t) {
                                    return e ? (c.report(e), r(n.copy.incorrect, !1)) : t && t.errors && t.errors.length ? r(t.errors[0].message) : (c.setUE(o), void i(t.code, n, "Sorry, this code is not valid", r))
                                })
                            },
                            getSecondScreenMarkup: function() {
                                return e
                            },
                            showScreenTwo: function(e, t, o) {
                                setTimeout(function() {
                                    t.installScreenTwo(e, t, o)
                                }, 300)
                            },
                            installScreenTwo: function(t, e, o) {
                                var r = this.getSecondScreenMarkup(),
                                    n = document.getElementById("uqdGate");
                                if (!n) return c.report({
                                    message: "Missing UQD gate wrapper"
                                });
                                n.innerHTML = r;
                                var i = n.querySelector("#uqdGateTitle"),
                                    a = n.querySelector("#uqdGateDesc"),
                                    s = n.querySelector("#uqdButton"),
                                    d = n.querySelector(".uqd-gate-code");
                                i.innerText = this.copy.successfullyFetchedCode.title, a.innerHTML = this.copy.successfullyFetchedCode.description, d.innerText = o, s.innerText = this.copy.successfullyFetchedCode.buttonText, c.listener(s, "click", function(e) {
                                    e.preventDefault(), c.overlay.destroy(t.uqdPromoSection)
                                })
                            }
                        },
                        criteriaMet: function() {
                            return c.isBTShop() && c.isCurrentURLPath("/promotions/claim/xbox-june-2022/")
                        }
                    }, {
                        config: {
                            sKey: "_uqd_s_13370",
                            promotionUuid: "85bfccd5b7257dc48e36ede3a0f78493",
                            startDate: new Date(2022, 3, 19, 9),
                            endDate: new Date(2025, 2, 31),
                            errorMessage: "The code entered is not valid for this offer.",
                            enableEmail: !1,
                            displayScreenTwo: !0,
                            disableAutofill: !0,
                            title: "BT Mobile £50 Voucher Offer",
                            description: "Enter your BT Mobile order number to see if you’re eligible for a £50 discount, and to unlock your voucher code. Your order number will start with ‘VOL…’",
                            copy: {
                                successfullyFetchedCode: {
                                    title: "£50 Voucher Code",
                                    description: ["Looks like you're eligible to receive a £50 discount off selected phones from BT Shop. Happy days. Copy the voucher code below and enter it at checkout for your discount to be applied.", "£50 discount valid on any device on this page:"].join("<br />"),
                                    buttonText: "View Offers"
                                },
                                incorrectMobileOrderNumber: "Sorry, the order number you've provided is not correct",
                                error: "Sorry, something went wrong"
                            },
                            buttonText: "Check",
                            allowAllErrorMessages: !0,
                            finePrint: "",
                            emptyErrorMessage: "Please enter a valid order number",
                            placeholder: "",
                            instructions: "Order number:",
                            distributorImage: "",
                            pageUrl: "https://shop.bt.com/learnmore/telephony/bt-mobile/",
                            beforeInsert: function(e) {
                                e && e.setAttribute("class", (e.getAttribute("class") || "") + " uqd-bf-gate")
                            },
                            getStyles: function() {
                                return [t.shop, t.twoScreenGateWithCodeExtraStyles].join(" ")
                            },
                            validation: function(e, o) {
                                var r = this;
                                e = e.trim();
                                if (!/^VOL[0-9]+\-[0-9]{11}/i.test(e)) return o(this.copy.incorrectMobileOrderNumber);
                                c.overlay.startSession(this.sKey), a(this.promotionUuid, {
                                    email: e
                                }, function(e, t) {
                                    return e ? (c.report(e), o(r.copy.incorrect, !1)) : t && t.errors && t.errors.length ? o(t.errors[0].message) : void i(t.code, r, "Sorry, this code is not valid", o)
                                })
                            },
                            getSecondScreenMarkup: function() {
                                return e
                            },
                            showScreenTwo: function(e, t, o) {
                                setTimeout(function() {
                                    t.installScreenTwo(e, t, o)
                                }, 300)
                            },
                            installScreenTwo: function(t, e, o) {
                                var r = this.getSecondScreenMarkup(),
                                    n = document.getElementById("uqdGate");
                                if (!n) return c.report({
                                    message: "Missing UQD gate wrapper"
                                });
                                n.innerHTML = r;
                                var i = n.querySelector("#uqdGateTitle"),
                                    a = n.querySelector("#uqdGateDesc"),
                                    s = n.querySelector("#uqdButton"),
                                    d = n.querySelector(".uqd-gate-code");
                                i.innerText = this.copy.successfullyFetchedCode.title, a.innerHTML = this.copy.successfullyFetchedCode.description, d.innerText = o, s.innerText = this.copy.successfullyFetchedCode.buttonText, c.listener(s, "click", function(e) {
                                    e.preventDefault(), c.overlay.destroy(t.uqdPromoSection)
                                })
                            }
                        },
                        criteriaMet: function() {
                            return c.isBTShop() && c.isCurrentURLPath("/learnmore/telephony/bt-mobile")
                        }
                    }, {
                        config: {
                            sKey: "_uqd_s_9249",
                            promotionUuid: "2033dca6314569245026fdad0aca45bb",
                            startDate: new Date(2021, 4, 28),
                            endDate: new Date(2033, 2, 31, 23, 59, 59),
                            errorMessage: "The code entered is not valid for this offer.",
                            enableEmail: !1,
                            displayScreenTwo: !0,
                            disableAutofill: !0,
                            title: "Digital Voice Offer",
                            description: "Enter your landline number to see if you’re eligible for discounted Digital Voice equipment and to get your voucher code.",
                            copy: {
                                successfullyFetchedCode: {
                                    title: "Digital Voice Offer",
                                    description: "Thank you. Here is your voucher code, please click ‘Next’ to select your equipment.",
                                    buttonText: "Next"
                                },
                                redeemed: "This landline number has already been used with this offer. Please check you have entered your number correctly.",
                                incorrect: "The number entered is not eligible for this offer. Please check you have entered your number correctly.",
                                incorrectPhoneNumber: "Please enter a valid phone number without a country code e.g. 01XXXXXXXXX or 02XXXXXXXXX."
                            },
                            buttonText: "Check",
                            finePrint: "",
                            emptyErrorMessage: "Please enter your telephone number",
                            placeholder: "",
                            instructions: "Landline Number:",
                            distributorImage: "",
                            pageUrl: "https://shop.bt.com/other-pages/bt-customer-offers/bt-digital-voice-customer/",
                            beforeInsert: function(e) {
                                e && e.setAttribute("class", (e.getAttribute("class") || "") + " uqd-bf-gate")
                            },
                            getStyles: function() {
                                return [t.shop, t.twoScreenGateWithCodeExtraStyles].join(" ")
                            },
                            validation: function(e, o) {
                                var r = this,
                                    n = c.standardizePhoneNumber(e);
                                if (!n) return o(this.copy.incorrectPhoneNumber);
                                c.userCodeEnquiry(this.promotionUuid, n, function(e, t) {
                                    return e ? (c.report(e), o(r.copy.incorrect, !1)) : t.isRedeemed ? o(r.copy.redeemed) : t.code ? (c.setUE(n), void i(t.code, r, r.copy.incorrect, o)) : o(r.copy.incorrect)
                                })
                            },
                            getSecondScreenMarkup: function() {
                                return e
                            },
                            showScreenTwo: function(e, t, o) {
                                setTimeout(function() {
                                    t.installScreenTwo(e, t, o)
                                }, 300)
                            },
                            installScreenTwo: function(t, e, o) {
                                var r = this.getSecondScreenMarkup(),
                                    n = document.getElementById("uqdGate");
                                if (!n) return c.report({
                                    message: "Missing UQD gate wrapper"
                                });
                                n.innerHTML = r;
                                var i = n.querySelector("#uqdGateTitle"),
                                    a = n.querySelector("#uqdGateDesc"),
                                    s = n.querySelector("#uqdButton"),
                                    d = n.querySelector(".uqd-gate-code");
                                i.innerText = this.copy.successfullyFetchedCode.title, a.innerText = this.copy.successfullyFetchedCode.description, d.innerText = o, s.innerText = this.copy.successfullyFetchedCode.buttonText, c.listener(s, "click", function(e) {
                                    e.preventDefault(), c.overlay.destroy(t.uqdPromoSection)
                                })
                            }
                        },
                        criteriaMet: function() {
                            return c.isBTShop() && c.isCurrentURLPath("/other-pages/bt-customer-offers/bt-digital-voice-customer/")
                        }
                    }, {
                        config: {
                            sKey: "_uqd_s_9250",
                            promotionUuid: "ea8597e1517fca2d877e27f8fa74a952",
                            startDate: new Date(2033, 2, 31),
                            endDate: new Date(2022, 2, 31, 23, 59, 59),
                            errorMessage: "The code entered is not valid for this offer.",
                            enableEmail: !1,
                            displayScreenTwo: !0,
                            disableAutofill: !0,
                            title: "Digital Voice Offer",
                            description: "Enter your landline number to see if you’re eligible for a free device and to get your voucher code.",
                            copy: {
                                successfullyFetchedCode: {
                                    title: "Digital Voice Offer",
                                    description: "Thank you. Here is your voucher code, please click ‘Next’ to select your device.",
                                    buttonText: "Next"
                                },
                                redeemed: "This landline number has already been used with this offer. Please check you have entered your number correctly.",
                                incorrect: "The number entered is not eligible for this offer. Please check you have entered your number correctly.",
                                incorrectPhoneNumber: "Please enter a valid phone number without a country code e.g. 01XXXXXXXXX or 02XXXXXXXXX."
                            },
                            buttonText: "Check",
                            finePrint: "",
                            emptyErrorMessage: "Please enter your telephone number",
                            placeholder: "",
                            instructions: "Landline Number:",
                            distributorImage: "",
                            pageUrl: "https://shop.bt.com/other-pages/bt-customer-offers/bt-digital-voice-customers/",
                            beforeInsert: function(e) {
                                e && e.setAttribute("class", (e.getAttribute("class") || "") + " uqd-bf-gate")
                            },
                            getStyles: function() {
                                return [t.shop, t.twoScreenGateWithCodeExtraStyles].join(" ")
                            },
                            validation: function(e, o) {
                                var r = this,
                                    n = c.standardizePhoneNumber(e);
                                if (!n) return o(this.copy.incorrectPhoneNumber);
                                c.userCodeEnquiry(this.promotionUuid, n, function(e, t) {
                                    return e ? (c.report(e), o(r.copy.incorrect, !1)) : t.isRedeemed ? o(r.copy.redeemed) : t.code ? (c.setUE(n), void i(t.code, r, r.copy.incorrect, o)) : o(r.copy.incorrect)
                                })
                            },
                            getSecondScreenMarkup: function() {
                                return e
                            },
                            showScreenTwo: function(e, t, o) {
                                setTimeout(function() {
                                    t.installScreenTwo(e, t, o)
                                }, 300)
                            },
                            installScreenTwo: function(t, e, o) {
                                var r = this.getSecondScreenMarkup(),
                                    n = document.getElementById("uqdGate");
                                if (!n) return c.report({
                                    message: "Missing UQD gate wrapper"
                                });
                                n.innerHTML = r;
                                var i = n.querySelector("#uqdGateTitle"),
                                    a = n.querySelector("#uqdGateDesc"),
                                    s = n.querySelector("#uqdButton"),
                                    d = n.querySelector(".uqd-gate-code");
                                i.innerText = this.copy.successfullyFetchedCode.title, a.innerText = this.copy.successfullyFetchedCode.description, d.innerText = o, s.innerText = this.copy.successfullyFetchedCode.buttonText, c.listener(s, "click", function(e) {
                                    e.preventDefault(), c.overlay.destroy(t.uqdPromoSection)
                                })
                            }
                        },
                        criteriaMet: function() {
                            return c.isBTShop() && c.isCurrentURLPath("/other-pages/bt-customer-offers/bt-digital-voice-customers/")
                        }
                    }, {
                        config: {
                            sKey: "_uqd_s_8853",
                            promotionUuid: "9d7fd655bcd91da9307edbf84abbd9f0",
                            startDate: new Date(2021, 2, 31),
                            endDate: new Date(2024, 2, 31, 23, 59, 59),
                            errorMessage: "The code entered is not valid for this offer.",
                            enableEmail: !1,
                            displayScreenTwo: !0,
                            disableAutofill: !0,
                            title: "Digital Voice Offer",
                            description: "Enter your landline number to see if you’re eligible for a free device and to get your voucher code.",
                            copy: {
                                successfullyFetchedCode: {
                                    title: "Digital Voice Offer",
                                    description: "Thank you. Here is your voucher code, please click ‘Next’ to select your device.",
                                    buttonText: "Next"
                                },
                                redeemed: "This landline number has already been used with this offer. Please check you have entered your number correctly.",
                                incorrect: "The number entered is not eligible for this offer. Please check you have entered your number correctly.",
                                incorrectPhoneNumber: "Please enter a valid phone number without a country code e.g. 01XXXXXXXXX or 02XXXXXXXXX."
                            },
                            buttonText: "Check",
                            finePrint: "",
                            emptyErrorMessage: "Please enter your telephone number",
                            placeholder: "",
                            instructions: "Landline Number:",
                            distributorImage: "",
                            pageUrl: "https://shop.bt.com/other-pages/bt-customer-offers/bt-digital-voice-customer/",
                            beforeInsert: function(e) {
                                e && e.setAttribute("class", (e.getAttribute("class") || "") + " uqd-bf-gate")
                            },
                            getStyles: function() {
                                return [t.shop, t.twoScreenGateWithCodeExtraStyles].join(" ")
                            },
                            validation: function(e, o) {
                                var r = this,
                                    t = c.standardizePhoneNumber(e);
                                if (!t) return o(this.copy.incorrectPhoneNumber);
                                c.userCodeEnquiry(this.promotionUuid, t, function(e, t) {
                                    return e ? (c.report(e), o(r.copy.incorrect, !1)) : t.isRedeemed ? o(r.copy.redeemed) : t.code ? void i(t.code, r, r.copy.incorrect, o) : o(r.copy.incorrect)
                                })
                            },
                            getSecondScreenMarkup: function() {
                                return e
                            },
                            showScreenTwo: function(e, t, o) {
                                setTimeout(function() {
                                    t.installScreenTwo(e, t, o)
                                }, 300)
                            },
                            installScreenTwo: function(t, e, o) {
                                var r = this.getSecondScreenMarkup(),
                                    n = document.getElementById("uqdGate");
                                if (!n) return c.report({
                                    message: "Missing UQD gate wrapper"
                                });
                                n.innerHTML = r;
                                var i = n.querySelector("#uqdGateTitle"),
                                    a = n.querySelector("#uqdGateDesc"),
                                    s = n.querySelector("#uqdButton"),
                                    d = n.querySelector(".uqd-gate-code");
                                i.innerText = this.copy.successfullyFetchedCode.title, a.innerText = this.copy.successfullyFetchedCode.description, d.innerText = o, s.innerText = this.copy.successfullyFetchedCode.buttonText, c.listener(s, "click", function(e) {
                                    e.preventDefault(), c.overlay.destroy(t.uqdPromoSection)
                                })
                            }
                        },
                        criteriaMet: function() {
                            return c.isBTShop() && c.isCurrentURLPath("/other-pages/bt-customer-offers/bt-digital-voice-customer/")
                        }
                    }, {
                        config: {
                            sKey: "_uqd_s_8854",
                            promotionUuid: "cee062b8ed4722af516365d0a9e5657c",
                            startDate: new Date(2021, 2, 31),
                            endDate: new Date(2024, 2, 31, 23, 59, 59),
                            errorMessage: "The code entered is not valid for this offer.",
                            enableEmail: !1,
                            displayScreenTwo: !0,
                            disableAutofill: !0,
                            title: "Digital Voice Offer",
                            description: "Enter your landline number to see if you’re eligible for a free device and to get your voucher code.",
                            copy: {
                                successfullyFetchedCode: {
                                    title: "Digital Voice Offer",
                                    description: "Thank you. Here is your voucher code, please click ‘Next’ to select your device.",
                                    buttonText: "Next"
                                },
                                redeemed: "This landline number has already been used with this offer. Please check you have entered your number correctly.",
                                incorrect: "The number entered is not eligible for this offer. Please check you have entered your number correctly.",
                                incorrectPhoneNumber: "Please enter a valid phone number without a country code e.g. 01XXXXXXXXX or 02XXXXXXXXX."
                            },
                            buttonText: "Check",
                            finePrint: "",
                            emptyErrorMessage: "Please enter your telephone number",
                            placeholder: "",
                            instructions: "Landline Number:",
                            distributorImage: "",
                            pageUrl: "https://shop.bt.com/other-pages/bt-customer-offers/bt-digital-voice-customers/",
                            beforeInsert: function(e) {
                                e && e.setAttribute("class", (e.getAttribute("class") || "") + " uqd-bf-gate")
                            },
                            getStyles: function() {
                                return [t.shop, t.twoScreenGateWithCodeExtraStyles].join(" ")
                            },
                            validation: function(e, o) {
                                var r = this,
                                    t = c.standardizePhoneNumber(e);
                                if (!t) return o(this.copy.incorrectPhoneNumber);
                                c.userCodeEnquiry(this.promotionUuid, t, function(e, t) {
                                    return e ? (c.report(e), o(r.copy.incorrect, !1)) : t.isRedeemed ? o(r.copy.redeemed) : t.code ? void i(t.code, r, r.copy.incorrect, o) : o(r.copy.incorrect)
                                })
                            },
                            getSecondScreenMarkup: function() {
                                return e
                            },
                            showScreenTwo: function(e, t, o) {
                                setTimeout(function() {
                                    t.installScreenTwo(e, t, o)
                                }, 300)
                            },
                            installScreenTwo: function(t, e, o) {
                                var r = this.getSecondScreenMarkup(),
                                    n = document.getElementById("uqdGate");
                                if (!n) return c.report({
                                    message: "Missing UQD gate wrapper"
                                });
                                n.innerHTML = r;
                                var i = n.querySelector("#uqdGateTitle"),
                                    a = n.querySelector("#uqdGateDesc"),
                                    s = n.querySelector("#uqdButton"),
                                    d = n.querySelector(".uqd-gate-code");
                                i.innerText = this.copy.successfullyFetchedCode.title, a.innerText = this.copy.successfullyFetchedCode.description, d.innerText = o, s.innerText = this.copy.successfullyFetchedCode.buttonText, c.listener(s, "click", function(e) {
                                    e.preventDefault(), c.overlay.destroy(t.uqdPromoSection)
                                })
                            }
                        },
                        criteriaMet: function() {
                            return c.isBTShop() && c.isCurrentURLPath("/other-pages/bt-customer-offers/bt-digital-voice-customers/")
                        }
                    }, {
                        config: {
                            sKey: "_uqd_s_10946",
                            startDate: new Date(2022, 3, 25, 9),
                            endDate: new Date(2022, 4, 31, 23, 59, 59),
                            errorMessage: "The code entered is not valid for this offer.",
                            enableEmail: !1,
                            title: "Exclusive Google Nest Offers",
                            description: "For a limited-time only, enjoy an exclusive discount on featured offers from Google. To unlock your special pricing, just add your unique voucher code into the box below and click ‘Check code’.",
                            buttonText: "Check code",
                            finePrint: "",
                            emptyErrorMessage: "Please re-enter your unique code",
                            placeholder: "",
                            instructions: "Enter your unique voucher code below:",
                            distributorImage: "",
                            pageUrl: "https://shop.bt.com/products/google-nest-audio---chalk-ga01420-gb-G3PW.html",
                            beforeInsert: function(e) {
                                e && e.setAttribute("class", (e.getAttribute("class") || "") + " uqd-bf-gate")
                            },
                            getStyles: function() {
                                return t.shop
                            }
                        },
                        criteriaMet: function() {
                            return c.isBTShop() && (c.isQuickLink("G3PW") || c.isQuickLink("GC5C"))
                        }
                    }, {
                        config: {
                            sKey: "_uqd_s_8675",
                            startDate: new Date(2022, 2, 1, 9, 0),
                            endDate: new Date(2022, 3, 30, 23, 59, 59),
                            errorMessage: "The code entered is not valid for this offer.",
                            enableEmail: !1,
                            copy: {
                                G3PX: {
                                    title: "Exclusive Offer on Google Chromecast with Google TV",
                                    description: "Only BT customers can enjoy an exclusive discount on the latest Google Chromecast with Google TV! To unlock your special pricing, just add your unique voucher code into the box below and click ‘Check code’."
                                },
                                G3PW: {
                                    title: "Exclusive Offer on Google Nest Audio",
                                    description: "Only BT customers can enjoy an exclusive discount on the latest Google Nest Audio smart speaker! To unlock your special pricing, just add your unique voucher code into the box below and click ‘Check code’."
                                }
                            },
                            title: "Exclusive Offer on Google Chromecast with Google TV",
                            description: "Only BT customers can enjoy an exclusive discount on the latest Google Chromecast with Google TV! To unlock your special pricing, just add your unique voucher code into the box below and click ‘Check code’.",
                            buttonText: "Check code",
                            finePrint: "",
                            emptyErrorMessage: "Please re-enter your unique code",
                            placeholder: "",
                            instructions: "Enter your unique voucher code below:",
                            distributorImage: "",
                            pageUrl: "https://shop.bt.com/products/google-chromecast-with-google-tv-ga01919-gb-bt-G3PX.html",
                            beforeInsert: function(e) {
                                e && e.setAttribute("class", (e.getAttribute("class") || "") + " uqd-bf-gate")
                            },
                            initialize: function() {
                                var e;
                                if (c.isQuickLink("G3PX") ? e = "G3PX" : c.isQuickLink("G3PW") && (e = "G3PW"), !this.copy[e]) return c.report({
                                    message: "Missing translation for " + e
                                });
                                this.title = this.copy[e].title, this.description = this.copy[e].description
                            },
                            getStyles: function() {
                                return t.shop
                            }
                        },
                        criteriaMet: function(e) {
                            return c.isBTShop() && (c.isQuickLink("G3PX") || c.isQuickLink("G3PW"))
                        }
                    }, {
                        config: {
                            sKey: "_uqd_s_8416",
                            name: "BT Shop DM Surprise",
                            startDate: new Date(2020, 10, 27),
                            endDate: new Date(2023, 2, 31, 23, 59, 59),
                            errorMessage: "The code entered is not valid for this offer.",
                            enableEmail: !1,
                            title: "We've got something for you",
                            buttonText: "Check code",
                            description: "Thanks for coming back for your surprise offers. To unlock your special surprise, just add your unique voucher code from the mail you’ve received from us into the box below and click ‘Check code‘.",
                            finePrint: "",
                            emptyErrorMessage: "Please re-enter your unique code",
                            placeholder: "",
                            instructions: "Enter your unique voucher code below:",
                            distributorImage: "",
                            pageUrl: "https://shop.bt.com/promotions-and-press-releases/products/surprise-tech-offers/",
                            beforeInsert: function(e) {
                                e && e.setAttribute("class", (e.getAttribute("class") || "") + " uqd-bf-gate")
                            },
                            getStyles: function() {
                                return t.shop
                            }
                        },
                        criteriaMet: function(e) {
                            return c.isBTShop() && c.isCurrentURLPath("/promotions-and-press-releases/products/surprise-tech-offers/")
                        }
                    }, {
                        config: {
                            sKey: "_uqd_s_8262",
                            startDate: new Date(2020, 9, 12),
                            endDate: new Date(2020, 11, 30, 23, 59, 59),
                            errorMessage: "The code entered is not valid for this offer.",
                            enableEmail: !1,
                            title: "Exclusive Google Nest Hub Offer",
                            buttonText: "Check code",
                            description: "Only BT customers can enjoy an exclusive discount on the Google Nest Hub and Nest Hub Max! To unlock your special pricing, just add your unique voucher code into the box below and click ‘Check code’.",
                            finePrint: "",
                            emptyErrorMessage: "Please re-enter your unique code",
                            placeholder: "",
                            instructions: "Enter your unique voucher code below:",
                            distributorImage: "",
                            pageUrl: "https://shop.bt.com/products/google-nest-hub---charcoal-ga00515-gb-bt3-FP9T.html",
                            beforeInsert: function(e) {
                                e && e.setAttribute("class", (e.getAttribute("class") || "") + " uqd-bf-gate")
                            },
                            getStyles: function() {
                                return t.shop
                            }
                        },
                        criteriaMet: function(e) {
                            return c.isBTShop() && (c.isCurrentURLPath("/products/google-nest-hub---charcoal-ga00515-gb-bt3-FP9T") || c.isCurrentURLPath("products/google-nest-hub-max---chalk-ga00426-gb-bt-FZWH") || -1 !== window.location.pathname.indexOf("FZWH") || -1 !== window.location.pathname.indexOf("FPB2"))
                        }
                    }, {
                        config: {
                            sKey: "_uqd_s_7986",
                            startDate: new Date(2020, 7, 27),
                            endDate: new Date(2020, 8, 30, 23, 59, 59),
                            errorMessage: "The code entered is not valid for this offer.",
                            enableEmail: !1,
                            title: "Your exclusive tado&deg; heating offer" + (c.isCurrentURLPath("/other-pages/landing-pages/tado-heating-offers/") ? "s" : ""),
                            buttonText: "Check code",
                            description: function() {
                                var e = window.location.pathname;
                                switch (!0) {
                                    case -1 !== e.indexOf("FC2R"):
                                        return "Save £70 on the tado&deg; Starter Kit v3&#43;.";
                                    case -1 !== e.indexOf("FLQX"):
                                        return "Save £50 on the tado&deg; Smart Radiator Thermostat (Duo Pack).";
                                    case -1 !== e.indexOf("CWD6"):
                                        return "Save £25 on the tado&deg; Additional Smart Radiator Thermostat (Vertical).";
                                    default:
                                        return "Save up to £70 on tado&deg; smart heating."
                                }
                            }() + " To unlock your special pricing, just add your unique voucher code into the box below and click ‘Check code’.",
                            finePrint: "",
                            emptyErrorMessage: "Please re-enter your unique code",
                            placeholder: "",
                            instructions: "Enter your unique voucher code below:",
                            distributorImage: "",
                            pageUrl: "https://shop.bt.com/other-pages/landing-pages/tado-heating-offers/",
                            beforeInsert: function(e) {
                                e && e.setAttribute("class", (e.getAttribute("class") || "") + " uqd-bf-gate")
                            },
                            getStyles: function() {
                                return t.shop
                            }
                        },
                        criteriaMet: function(e) {
                            return c.isBTShop() && -1 !== ["M100", "PK00", "ACT1"].indexOf(c.getQueryStringParameter("ReferrerID")) && -1 !== ["/other-pages/landing-pages/tado-heating-offers", "/products/tado-smart-thermostat-starter-kit-v3--with-hot-water-control-v3p-sk-st01ek01ib01-tc-uk-FC2R.html", "/products/tado-smart-radiator-thermostat---duo-pack---vertical-mounting-v3p-2srt01v-tc-ml-FLQX.html", "/products/tado-additional-smart-radiator-thermostat---vertical-srt01v-tc-ml-03-CWD6.html"].indexOf(window.location.pathname)
                        }
                    }, {
                        config: {
                            sKey: "_uqd_s_8396",
                            name: "BT Shop Facebook Portal Gates",
                            startDate: new Date(2020, 10, 12),
                            endDate: new Date(2020, 10, 15, 23, 59, 59),
                            errorMessage: "The code entered is not valid for this offer.",
                            enableEmail: !1,
                            title: "Portal from Facebook - Exclusive Offer",
                            buttonText: "Check code",
                            description: "Only BT customers can enjoy an exclusive discount on Portal from Facebook. To unlock your special pricing, just add your unique voucher code into the box below and click ‘Check code’.",
                            finePrint: "",
                            emptyErrorMessage: "Please re-enter your unique code",
                            placeholder: "",
                            instructions: "Enter your unique voucher code below:",
                            distributorImage: "",
                            pageUrl: "https://shop.bt.com/products/portal-tv-from-facebook-899-00081-13-FWVL.html",
                            beforeInsert: function(e) {
                                e && e.setAttribute("class", (e.getAttribute("class") || "") + " uqd-bf-gate")
                            },
                            getStyles: function() {
                                return t.shop
                            }
                        },
                        criteriaMet: function(e) {
                            return c.isBTShop() && -1 !== ["ACT1", "M100", "NUR1", "LAP1", "LAP2", "GWP1", "XJ00"].indexOf(c.getQueryStringParameter("ReferrerID")) && -1 !== ["/products/portal-tv-from-facebook-899-00081-13-FWVL.html", "/products/portal-mini-from-facebook---black-899-00077-13-FWVH.html", "/products/portal-mini-from-facebook---white-899-00077-12-FWVG.html", "/products/portal-from-facebook---black-899-00080-13-FWVK.html", "/products/portal-from-facebook---white-899-00080-12-FWVJ.html", "/products/portal--from-facebook---black-899-00048-13-FWVN.html", "/products/portal--from-facebook---white-899-00048-12-FWVM.html", "/brands/portal-1741"].indexOf(window.location.pathname)
                        }
                    }, {
                        config: {
                            sKey: "_uqd_s_8281",
                            startDate: new Date(2020, 10, 13),
                            endDate: new Date(2025, 9, 30, 23, 59, 59),
                            errorMessage: "The code entered is not valid for this offer.",
                            enableEmail: !1,
                            title: "Exclusive PlayStation 5 Offer",
                            buttonText: "Check code",
                            description: c.isCurrentURLPath("products/sony-playstation-5-console-cfi-1015a-G0SJ") || c.isCurrentURLPath("products/sony-playstation-5-console-cfi-1015a-G0SG") || c.isCurrentURLPath("products/sony-playstation-5-console-cfi-1016a-G0SG") ? "To unlock access, just add your unique voucher code from your email into the box below and click ‘Check Code’." : "Only BT Broadband customers can enjoy early access to the new Next Gen Consoles from Sony PlayStation! To unlock access, just add your unique voucher code from your BT account area into the box below and click ‘Check Code’.",
                            finePrint: "",
                            emptyErrorMessage: "Please re-enter your unique code",
                            placeholder: "",
                            instructions: "Enter your unique voucher code below:",
                            distributorImage: "",
                            pageUrl: "https://shop.bt.com/products/sony-playstation-5-console-cfi-1015a-G02R.html",
                            beforeInsert: function(e) {
                                e && e.setAttribute("class", (e.getAttribute("class") || "") + " uqd-bf-gate")
                            },
                            getStyles: function() {
                                return t.shop + t.console
                            }
                        },
                        criteriaMet: function(e) {
                            return c.isBTShop() && (c.isCurrentURLPath("products/sony-playstation-5-digital-edition-console-cfi-1015b-G02S") || c.isCurrentURLPath("products/sony-playstation-5-console-cfi-1015a-G02R") || c.isCurrentURLPath("products/sony-playstation-5-console-cfi-1015a-G0SJ") || c.isCurrentURLPath("products/sony-playstation-5-console-cfi-1015a-G0SH") || c.isCurrentURLPath("products/sony-playstation-5-console-cfi-1015a-G0SG") || c.isCurrentURLPath("products/sony-playstation-5-console-cfi-1015a-G0SF") || c.isCurrentURLPath("products/sony-playstation-5-console-cfi-1015a-G0SD") || c.isCurrentURLPath("products/sony-playstation-5-console-cfi-1015a-G0SC") || c.isCurrentURLPath("products/sony-playstation-5-console-cfi-1015a-G0SB") || c.isCurrentURLPath("products/sony-playstation-5-console-cfi-1015a-G0S9") || c.isCurrentURLPath("products/sony-playstation-5-console-cfi-1015a-G0S8") || c.isCurrentURLPath("products/sony-playstation-5-console-cfi-1015a-G1W6") || c.isCurrentURLPath("products/sony-playstation-5-console-cfi-1015a-G1W7") || c.isCurrentURLPath("products/sony-playstation-5-console---exclusive-for-bt-employees-cfi-1015a-G0SG") || c.isCurrentURLPath("products/sony-playstation-5-console-cfi-1016a-G0SG"))
                        }
                    }, {
                        config: {
                            sKey: "_uqd_s_7773",
                            startDate: new Date(2020, 6, 17, 10),
                            endDate: new Date(2020, 8, 30, 23, 59, 59),
                            errorMessage: "The code entered is not valid for this offer.",
                            enableEmail: !1,
                            title: "Exclusive Google Nest Hub Offer",
                            buttonText: "Check code",
                            description: "Only BT customers can enjoy an exclusive discount on the Google Nest Hub! To unlock your special pricing, just add your unique voucher code into the box below and click ‘Check code’.",
                            finePrint: "",
                            emptyErrorMessage: "Please re-enter your unique code",
                            placeholder: "",
                            instructions: "Enter your unique voucher code below:",
                            distributorImage: "",
                            pageUrl: "https://shop.bt.com/products/google-nest-hub---charcoal-ga00515-gb-bt3-FP9T.html",
                            redirectFromPath: "/products/google-nest-hub---charcoal-ga00515-gb-bt2-FPB2",
                            redirectUrl: "https://shop.bt.com/products/google-nest-hub---charcoal-ga00515-gb-bt3-FP9T.html",
                            beforeInsert: function(e) {
                                e && e.setAttribute("class", (e.getAttribute("class") || "") + " uqd-bf-gate")
                            },
                            getStyles: function() {
                                return t.shop
                            }
                        },
                        criteriaMet: function(e) {
                            return !(!c.isBTShop() || !(c.isCurrentURLPath("/products/google-nest-hub---charcoal-ga00515-gb-bt2-FPB2") || c.isCurrentURLPath("/products/google-nest-hub---chalk-ga00516-gb-bt3-FPB4") || c.isCurrentURLPath("/products/google-nest-hub---charcoal-ga00515-gb-bt3-FP9T") || -1 !== window.location.pathname.indexOf("FPB4") || -1 !== window.location.pathname.indexOf("FPB2") || -1 !== window.location.pathname.indexOf("FP9T"))) && (!c.isActive(e) || !c.isCurrentURLPath(e.redirectFromPath) || (window.location.href = e.redirectUrl))
                        }
                    }, {
                        config: {
                            sKey: "_uqd_s_6957",
                            startDate: new Date(2020, 1, 19, 11, 15),
                            endDate: new Date(2027, 11, 31, 23, 59, 59),
                            errorMessage: "The code entered is not valid for this offer.",
                            enableEmail: !1,
                            title: "",
                            buttonText: "Check access code",
                            description: "Thank you ordering your TV from BT.Shop. <br />Sign up for BT broadband and get £100 cashback",
                            finePrint: "",
                            emptyErrorMessage: "Please re-enter your unique code",
                            placeholder: "",
                            instructions: "Enter your unique code below:",
                            distributorImage: "",
                            pageUrl: "bt.com/broadband/cashback",
                            logo: "https://track.uniqodo.com/assets/7/BT_Logo_White.png",
                            beforeInsert: function(e) {
                                e && e.setAttribute("class", (e.getAttribute("class") || "") + " uqd-bf-gate")
                            },
                            getStyles: function() {
                                return '.uqd-bf-gate #uqdGate > div { background: rgba(0, 0, 0, 0) !important; }.uqd-bf-gate #uqdGate { background: #000 url(http://track.uniqodo.com/assets/7/BT_Black_Friday.png); background-size: cover; }.uqd-bf-gate #uqdTopPanel * { color: #fff; }.uqd-bf-gate #uqdBottomPanel #uqdInstructions { color: #fff; }.uqd-bf-gate #uqdBottomPanel #uqdButton { background: #ff6fff; border-color: #ff6fff; }.uqd-bf-gate #uqdBottomPanel #uqdCodeBox { font-family: "bt_font_regular","Calibri","Arial",sans-serif; }.uqd-bf-gate #uqdBottomPanel #uqdCodeError { color: #fff; }.uqd-bf-gate #uqdGateHeader { text-align: right;  }'
                            }
                        },
                        criteriaMet: function(e) {
                            return !("www.bt.com" !== window.location.hostname || !c.isCurrentURLPath("broadband/cashback"))
                        }
                    }, {
                        config: {
                            sKey: "_uqd_s_6253",
                            startDate: new Date(2019, 10, 22),
                            endDate: new Date(2020, 2, 7, 23, 59, 59),
                            errorMessage: "The code entered is not valid for this offer.",
                            enableEmail: !1,
                            title: "",
                            buttonText: "Lock in now",
                            description: "Price Freeze<br/>Lock in our lowest ever fibre deal this Black Friday",
                            finePrint: "",
                            emptyErrorMessage: "Please re-enter your unique code",
                            placeholder: "",
                            instructions: "Enter your unique code below:",
                            distributorImage: "",
                            pageUrl: "bt.com/campaign/blackfridayfreeze",
                            logo: "https://track.uniqodo.com/assets/7/BT_Logo_White.png",
                            beforeInsert: function(e) {
                                e && e.setAttribute("class", (e.getAttribute("class") || "") + " uqd-bf-gate")
                            },
                            getStyles: function() {
                                return '.uqd-bf-gate #uqdGate > div { background: rgba(0, 0, 0, 0) !important; }.uqd-bf-gate #uqdGate { background: #000 url(http://track.uniqodo.com/assets/7/BT_Black_Friday.png); background-size: cover; }.uqd-bf-gate #uqdTopPanel * { color: #fff; }.uqd-bf-gate #uqdBottomPanel #uqdInstructions { color: #fff; }.uqd-bf-gate #uqdBottomPanel #uqdButton { background: #ff6fff; border-color: #ff6fff; }.uqd-bf-gate #uqdBottomPanel #uqdCodeBox { font-family: "bt_font_regular","Calibri","Arial",sans-serif; }.uqd-bf-gate #uqdBottomPanel #uqdCodeError { color: #fff; }.uqd-bf-gate #uqdGateHeader { text-align: right;  }'
                            }
                        },
                        criteriaMet: function(e) {
                            return !("www.bt.com" !== window.location.hostname || !c.isCurrentURLPath("campaign/blackfridayfreeze"))
                        }
                    }];
                    c.overlay = {
                        config: {
                            accessTimeout: 10,
                            logo: "http://track.uniqodo.com/assets/7/BT_Logo_Indigo_RGB.png",
                            screenTwoTitle: "Your access code is valid",
                            screenTwoMsg: "You will not need to enter your code again to complete your purchase.",
                            screenTwoTimerMsg: 'Your offers will appear in <span id="uqdTimerSeconds"></span> seconds.',
                            showOffersMsg: "Show offers now",
                            screenTwoTimeout: 10,
                            displayScreenTwo: !1
                        },
                        showError: function(e, t) {
                            e.uqdMobileCodeError.innerHTML = "", e.uqdCodeError.innerHTML = "", setTimeout(function() {
                                e.uqdMobileCodeError.innerHTML = t, e.uqdCodeError.innerHTML = t, e.uqdCodeBox.setAttribute("style", "border: 1px solid #f80f50;")
                            }, 50)
                        },
                        customErrorMessage: function(e) {
                            return 200 <= e.code && e.code <= 300 ? e.message : ""
                        },
                        an: function() {
                            var n;
                            n = [],
                                function e() {
                                    if (!document.body) return window.setTimeout(e, 15);
                                    var t = [];
                                    if (void 0 === c.validateCode.g)
                                        for (var o = 0; o < 1; o++) {
                                            var r = document.createElement("div");
                                            r.setAttribute("style", 'vertical-align:middle !important;position:fixed;top:0;left:0;right:0;bottom:0;background-color:transparent;z-index:2147483646;text-align:center;-ms-filter:"progid:DXImageTransform.Microsoft.Alpha(Opacity=0)";filter:alpha(opacity=0);-webkit-transition: background-color 1000ms linear;-ms-transition: background-color 1000ms linear;'), t.push(r), document.body.appendChild(r)
                                        }
                                    for (o = 0; o < (n || []).length; o++) n[o].parentNode && n[o].parentNode.removeChild(n[o]);
                                    n = t, window.setTimeout(e, 50)
                                }()
                        },
                        init: function(e) {
                            var t;
                            for (t = 0; t < e.length; t++) {
                                c.isOrderConfirmationPage() && (c.removeItem(e[t].config.sKey), c.storage.removeItem("_u_s"), c.advertiserId.__proto__.gt = "1");
                                var o = e[t].criteriaMet(e[t].config);
                                if (o && !this.isActive(e[t].config) && (c.storage.removeItem("_u_s"), c.advertiserId.__proto__.gt = "1"), o && this.isActive(e[t].config)) return void this.install(e[t].config)
                            }
                        },
                        style: function() {
                            var e = document.createElement("style");
                            e.setAttribute("type", "text/css"), e.innerHTML = ' #uqdGateOverlay {vertical-align: middle !important; position:fixed; top:0; left:0; right:0; bottom:0; background-color:rgba(0, 0, 0, 0.85); z-index:2147483647; text-align: center; -ms-filter:"progid:DXImageTransform.Microsoft.Alpha(Opacity=50)"; /* IE transparency */ filter:alpha(opacity=50); /* More IE transparency */ -webkit-transition: background-color 1000ms linear; -ms-transition: background-color 1000ms linear; transition: background-color 1000ms linear;} #uqdGateOverlay:before { content:""; height: 100%; vertical-align: middle; margin-right: -0.25em; } #uqdGateOverlay * {box-sizing: content-box;} #uqdGate {width:96%; max-width:575px; min-height:175px; color:#ffffff; margin-top: 12%; display: inline-block; position: relative; } #uqdGateHeader {background: #fff;width:96%; padding:2%; text-align:left; } #uqdMerchantLogo {width:69px; margin-left: 3px;} #uqdPrivacy {float:right;} #uqdTopPanel {float:left; width:90%; padding:5%; background:#5514B4; opacity:1; transition: opacity .25s ease-in-out; -moz-transition: opacity .25s ease-in-out; -webkit-transition: opacity .25s ease-in-out;} #uqdGateTitle, #uqdScreen2Title {font-size: 35px; width:100%; font-weight: bold; padding-bottom: 5px; color: #f80f50;} #uqdBottomPanel {background: #fff;float:left; width: 92%; padding:4%; text-align: left;line-height:normal; opacity:1; transition: opacity .25s ease-in-out; -moz-transition: opacity .25s ease-in-out; -webkit-transition: opacity .25s ease-in-out;}  #uqdGateDesc, #uqdScreen2Desc { font-size:26px; line-height: 1.3;padding: 1% 0 1% 0;} #uqdGateDesc {font-weight: bold;}#uqdGateDesc a {color: #f8104f; text-decoration: none; }#uqdGateDesc a:hover {color: #fff !important;} #uqdGateFinePrint {font-size: 15px;padding: 1% 0 1% 0;} #uqdGateElements {width: 100%;}  #uqdCodeContainer, #uqdButtonContainer {width: 49%} #uqdCodeContainer {float:left} #uqdButtonContainer, #uqdShowOffersBtn {float:right} #uqdInstructions {text-align: left; width: 100%; margin-bottom: 2%; color: #000000; font-size:23px; font-weight: bold;} #uqdCodeBox {height: 55px; padding: 0 3%; color:#000; width:55%; margin:0px 5% 0px 0px; box-shadow: none; border: solid 1px #cccccc;background:#fff; border-radius: 3px;} #uqdButton, #uqdShowOffersBtn {height: 55px; border-radius: 4px; box-shadow: none;margin-top: 0px; padding:0px; width:32%; border:none; background:#f80f50; color:#ffffff; cursor:pointer;} #uqdCodeError, #uqdMobileCodeError {margin-top:3%;color:#f80f50; float: left; width: 100%;} #uqdMobileCodeError {display: none;} #uqdScreen2 {width:90%; display:none; color:#ffffff; text-align: left; padding: 5%; background: #361e5e; float: left;} #uqdScreen2Desc {padding: 4% 0 4% 0;} #uqdTimerSeconds {color: #f80f50} #uqdTimer { margin-top: 5%;} #uqdShowOffersBtn {background:#f80f50;} #uqdScreen2Desc, #uqdTimer, #uqdShowOffersBtn, #uqdCodeBox, #uqdButton, #uqdCodeError {font-size:18px;} #uqdShowOffers {width: 100%; margin-top: 5%; padding-bottom: 5%; float: left;}@media only screen and (max-width: 475px) { #uqdGateOverlay {overflow: scroll}  #uqdTopPanel {padding: 2%; width:96%;} #uqdTimer {margin-bottom: 2%;} #uqdMobileCodeError {display: block; font-size: 16px; margin-bottom:3%;margin-top:0px;} #uqdCodeError {display: none;} #uqdGateDesc {font-size:22px; padding: 2%; font-weight:bold;} #uqdInstructions {font-size:18px;} #uqdShowOffersBtn {width:50%;} #uqdCodeBox, #uqdButton { width:95%;height:43px; padding:5px; margin:0px;}  #uqdScreen2Desc, #uqdTimer, #uqdShowOffersBtn, #uqdCodeBox, #uqdButton, #uqdCodeError {font-size:15px;} #uqdGateFinePrint {font-size: 13px;}}', document.getElementsByTagName("body")[0].appendChild(e)
                        },
                        elements: function(e) {
                            "function" == typeof e.initialize && e.initialize();
                            var t = document.createElement("div");
                            t.setAttribute("id", "uqdGateOverlay");
                            var o = e.screenTwoTitle ? e.screenTwoTitle : this.config.screenTwoTitle,
                                r = e.screenTwoMsg ? e.screenTwoMsg : this.config.screenTwoMsg,
                                n = e.screenTwoTimerMsg ? e.screenTwoTimerMsg : this.config.screenTwoTimerMsg,
                                i = e.showOffersMsg ? e.showOffersMsg : this.config.showOffersMsg;
                            return t.innerHTML = '<div id="uqdGate"><div id="uqdGateHeader">' + (e.logo ? '<img id="uqdMerchantLogo" width="28%" src="' + (e.logo || this.config.logo) + '" />' : "") + '</div><div id="uqdScreen2"><div id="uqdScreen2Title">' + o + '</div> <div id="uqdTimer">' + n + '</div><div id="uqdScreen2Desc">' + r + '</div><div id="uqdShowOffers"><button id="uqdShowOffersBtn">' + i + '</button></div></div> <div id="uqdTopPanel"><div id="uqdGateTitle"><span>' + e.title + '</span></div> <div id="uqdGateDesc"><span>' + e.description + '</span></div> <div id="uqdGateFinePrint"><span>' + e.finePrint + '</span></div> </div><div id="uqdBottomPanel"><div id="uqdInstructions">' + e.instructions + '</div><div id="uqdGateElements"><input type="text" id="uqdCodeBox" placeholder="' + e.placeholder + '"><div id="uqdMobileCodeError"></div><button id="uqdButton">' + e.buttonText + '</button></div><div id="uqdCodeError"></div></div></div>', "function" == typeof e.beforeInsert && e.beforeInsert(t, e), document.getElementsByTagName("body")[0].appendChild(t), "function" == typeof e.getStyles && c.installStyle(e.getStyles()), {
                                uqdPromoSection: t,
                                uqdEmailBox: document.getElementById("uqdEmailBox"),
                                uqdEmailError: document.getElementById("uqdEmailError"),
                                uqdCodeBox: document.getElementById("uqdCodeBox"),
                                uqdCodeError: document.getElementById("uqdCodeError"),
                                uqdMobileCodeError: document.getElementById("uqdMobileCodeError"),
                                uqdButton: document.getElementById("uqdButton"),
                                screenTwo: document.getElementById("uqdScreen2"),
                                topPanel: document.getElementById("uqdTopPanel"),
                                bottomPanel: document.getElementById("uqdBottomPanel"),
                                uqdShowOffersBtn: document.getElementById("uqdShowOffersBtn")
                            }
                        },
                        run: function(o) {
                            if (!document.body) {
                                var e = this;
                                return setTimeout(function() {
                                    e.run(o)
                                }, 40)
                            }
                            this.an(), this.installGateListeners(o), c.storage.setItem("_u_s", location.href, 216e5, !0), this.style();
                            var r = this.elements(o);
                            "function" == typeof o.postInstall && o.postInstall(o, r), o.disableAutofill || (c.getQueryStringParameter("uqd") ? r.uqdCodeBox.value = c.getQueryStringParameter("uqd") : r.uqdCodeBox.value = c.getItem(c.codeCookie) ? c.getItem(c.codeCookie) : ""), c.advertiserId.__proto__ && (c.advertiserId.__proto__.gt = "1"), r.uqdButton.onclick = function(e) {
                                if (c.requesting = !1, r.uqdCodeBox.value) {
                                    if (e.preventDefault(), "function" == typeof o.validation) return o.validation(r.uqdCodeBox.value, function(e, t) {
                                        if (e) return c.overlay.showError(r, e);
                                        c.overlay.config.displayScreenTwo || o.displayScreenTwo ? c.overlay.showScreenTwo(r, o, t) : r.uqdPromoSection.parentNode.removeChild(r.uqdPromoSection), c.overlay.startSession(o.sKey), c.setItem(c.codeCookie, t), c.storage.removeItem("_u_s")
                                    });
                                    c.validateCode(r.uqdCodeBox.value, function(e) {
                                        0 < e.errors.length ? c.overlay.showError(r, c.overlay.customErrorMessage(e.errors[0])) : void 0 !== e.data.code_url && e.data.code_url.match(o.pageUrl) ? (c.overlay.config.displayScreenTwo ? c.overlay.showScreenTwo(r) : o.displayScreenTwo ? c.overlay.showScreenTwo(r, o) : r.uqdPromoSection.parentNode.removeChild(r.uqdPromoSection), c.overlay.startSession(o.sKey), c.storage.removeItem("_u_s"), c.setItem(c.gatedValidatedCodeCookie, r.uqdCodeBox.value), c.setItem(c.gatedValidationPN, e.data.val_key)) : c.overlay.showError(r, o.errorMessage)
                                    }, {
                                        pn: c.gatedValidationPN,
                                        validatedCodeCookie: c.gatedValidatedCodeCookie,
                                        codeCookie: c.gatedTriggerCodeCookie
                                    })
                                } else c.overlay.showError(r, o.emptyErrorMessage || "Please enter your access code")
                            }, r.uqdShowOffersBtn.onclick = function(e) {
                                c.overlay.destroy(r.uqdPromoSection)
                            }, window.uniqodoMatchedEls = {
                                button: r.uqdButton,
                                input: r.uqdCodeBox
                            }, window.uniqodoMatchedEls.input.addEventListener("keyup", c.promoCodeEnterKeyPressHandler, !0)
                        },
                        installGateListeners: function(t) {
                            var e, o, r, n;
                            e = window, o = "click", r = function(e) {
                                if ("1" !== c.getItem(t.sKey)) return node = e.target, p = function e(t, o) {
                                    var r = t.parentElement;
                                    if (r) return o(r) ? r : e(r, o)
                                }(node, function(e) {
                                    return e && "uqdGateOverlay" === e.id
                                }), p ? void 0 : (e.returnValue = !1, e.preventDefault && e.preventDefault(), e.cancelBubble = !0, e.stopPropagation && e.stopPropagation(), !1)
                            }, n = !0, window.addEventListener ? e.addEventListener(o, r, n) : window.attachEvent && e.attachEvent("on" + o, r)
                        },
                        install: function(t) {
                            if ("1" === c.getItem(t.sKey) || c.widgetInstalled) {
                                var o = this,
                                    e = c.getItem(c.gatedValidatedCodeCookie);
                                return e ? c.validateCode(e, function(e) {
                                    0 !== e.errors.length && o.run(t)
                                }, {
                                    pn: c.gatedValidationPN,
                                    validatedCodeCookie: c.gatedValidatedCodeCookie,
                                    codeCookie: c.gatedTriggerCodeCookie
                                }, {
                                    isValidation: "false"
                                }) : o.run(t)
                            }
                            c.widgetInstalled = !0, this.run(t)
                        },
                        isExpired: function(e) {
                            return !(new Date < e.endDate)
                        },
                        isActive: function(e) {
                            return c.isActive(e)
                        },
                        startSession: function(e) {
                            var t = e || "_uqd_skey";
                            c.setItem(t, "1", 60 * this.config.accessTimeout * 1e3, !0), c.validateCode.g = 1
                        },
                        destroy: function(e) {
                            e.setAttribute("style", "background-color: transparent;"), c.validateCode.g = 1, setTimeout(function() {
                                e.parentNode.removeChild(e)
                            }, 350)
                        },
                        showScreenTwo: function(e, t, o) {
                            if (e.topPanel.setAttribute("style", "opacity:0.5"), e.bottomPanel.setAttribute("style", "opacity:0.5"), "function" == typeof t.showScreenTwo) return t.showScreenTwo(e, t, o);
                            setTimeout(function() {
                                e.screenTwo.setAttribute("style", "display:block;"), e.topPanel.setAttribute("style", "display:none !important;"), e.bottomPanel.setAttribute("style", "display:none !important;")
                            }, 300);
                            var r = document.getElementById("uqdTimerSeconds"),
                                n = c.overlay.config.screenTwoTimeout;
                            c.repeat("gateTimer", function() {
                                0 == (r.textContent = n) && c.overlay.destroy(e.uqdPromoSection), n--
                            }, c.overlay.config.screenTwoTimeout, 1e3)
                        }
                    }, c.overlay.init(o)
                } catch (e) {}
            }(window.UNIQODO);
        try {
            ! function(d) {
                if (d) {
                    var c = {},
                        t = !1,
                        a = {
                            main: {
                                installCSS: d.once(function() {
                                    d.installStyle('.uqd-reveal-wrapper.uqd-theme-main {vertical-align: middle;display: inline-block;width: 225px;line-height: 32px;text-align: center;max-width: 100%;}.uqd-reveal-wrapper.uqd-theme-main {-webkit-transition: all 300ms ease;-o-transition: all 300ms ease;transition: all 300ms ease;}.uqd-reveal-wrapper.uqd-theme-main .sticker {padding-right: 0;position: relative;width: 100%;}.uqd-reveal-wrapper.uqd-theme-main div.promo-code-reveal {line-height: 40px;padding-right: 0;position: relative;width: 100%;font-size: 16px;}.uqd-reveal-wrapper.uqd-theme-main .reveal-label {z-index: 4;position: absolute;width: 100%;top: 0;left: 0;white-space: nowrap;color: #fff;}.uqd-reveal-wrapper.uqd-theme-main .sticker-face {position: absolute;left: 0;top: 0;z-index: 3;width: calc(100% - 22px);background-color: #e60050;}.uqd-reveal-wrapper.uqd-theme-main .sticker-face:before {display: block;content: " ";width: 23px;height: 10px;background-color: #e60050;position: absolute;z-index: 3;right: -10px;bottom: 0;-webkit-transform: skew(12deg);-ms-transform: skew(12deg);transform: skew(12deg);}.uqd-reveal-wrapper.uqd-theme-main .sticker-face:after {content: " ";display: block;width: 49px;height: 100%;position: absolute;border-radius: 0 0 4px 4px;right: -25px;top: 9px;-ms-transform: rotate(20deg) translateY(-8px) scaleX(0.8);-webkit-transform: rotate(20deg) translateY(-8px) scaleX(0.8);transform: rotate(37deg) translateY(-13px) scaleX(0.8) scaleY(0.8);background: -o-linear-gradient(52deg, #ca849c, #ca849c 49%, hsla(80, 71%, 73%, 0) 50%, hsla(0, 0%, 100%, 0));background: linear-gradient(38deg, #ca849c, #ca849c 49%, hsla(80, 71%, 73%, 0) 50%, hsla(0, 0%, 100%, 0));background-position: 0 4px;background-repeat: no-repeat;z-index: 4;border-bottom: solid 1px #aaa;}.uqd-reveal-wrapper.uqd-theme-main .reveal-label:hover + .sticker-face {width: calc(100% - 32px);}.uqd-reveal-wrapper.uqd-theme-main .reveal-label:hover + .sticker-face:after {width: 53px;right: -32px;-ms-transform: rotate(30deg) translateY(-9px) scaleX(0.8) scaleY(0.8);-webkit-transform: rotate(30deg) translateY(-9px) scaleX(0.8) scaleY(0.8);transform: rotate(30deg) translateY(-9px) scaleX(0.8) scaleY(0.8);background: -o-linear-gradient(52deg, #ca849c, #ca849c 56%, hsla(80, 71%, 73%, 0) 50%, hsla(0, 0%, 100%, 0));background: linear-gradient(38deg, #ca849c, #ca849c 56%, hsla(80, 71%, 73%, 0) 50%, hsla(0, 0%, 100%, 0));background-position: 0 4px;background-repeat: no-repeat;border-bottom-width: 3px;}.uqd-reveal-wrapper.uqd-theme-main .promo-code {color: #40423f;margin: 0 0 1em;border-radius: 4px;background-color: #dcdcdc;padding: 8px;font-weight: 500;font-size: 18px;word-wrap: break-word;text-align: right;user-select: text;-ms-user-select: text;-moz-user-select: text;-webkit-user-select: text;cursor: default;}.uqd-reveal-wrapper.uqd-theme-main .promo-code-reveal .promo-code {margin: 0;top: 0;right: 0;bottom: 0;padding: 0 16px;position: absolute;width: 100%;}.uqd-reveal-wrapper.uqd-theme-main .btn {display: block;padding: 1px 24px;height: 40px;max-width: 100%;color: #fff;margin-bottom: 2px;border: 0;border-radius: 5px 0 0 5px;font-size: 16px;text-decoration: none;text-align: center;text-shadow: 0 -1px 0 rgba(0, 0, 0, .1);-webkit-touch-callout: none;-webkit-appearance: none;-webkit-user-select: none;-moz-user-select: none;-ms-user-select: none;user-select: none;cursor: pointer;}.uqd-reveal-wrapper.uqd-theme-main .apply-navigate {position: absolute;right: 10px;display: none;line-height: 38px;}.uqd-reveal-wrapper.uqd-theme-main.revealed .apply-navigate {display: block;}.uqd-reveal-wrapper.uqd-theme-main .reveal-label:hover + .sticker-face:after,.uqd-reveal-wrapper.uqd-theme-main .reveal-label:hover + .sticker-face,.uqd-reveal-wrapper.uqd-theme-main .sticker .sticker-face,.uqd-reveal-wrapper.uqd-theme-main .sticker .sticker-face:after,.uqd-reveal-wrapper.uqd-theme-main.revealed .reveal-label {-webkit-transition: all 300ms ease;-o-transition: all 300ms ease;transition: all 300ms ease;}.uqd-reveal-wrapper.uqd-theme-main.revealed .reveal-label {width: 0px;left: 25%;overflow: hidden;}.uqd-reveal-wrapper.uqd-theme-main.revealed .sticker-face, .uqd-reveal-wrapper.uqd-theme-main.revealed .reveal-label:hover + .sticker-face {width: 25px;padding: 0;}.uqd-reveal-wrapper.uqd-theme-main.revealed .promo-code {text-align: center;user-select: text;-ms-user-select: text;-moz-user-select: text;-webkit-user-select: text;cursor: text;padding: 0 43px;text-align: left;}.uqd-reveal-wrapper.uqd-theme-main.revealed {visibility: visible;}.uqd-reveal-wrapper.uqd-theme-main.revealed, .uqd-reveal-wrapper.uqd-theme-main .code-reveal-amt {user-select: none;-ms-user-select: none;-moz-user-select: none;-webkit-user-select: none;}.uqd-emb-button.redeemed {margin-top: 0;margin-left: 0;padding-left: 0;text-align: left;cursor: normal;color: #212529;}')
                                }),
                                getRevealButton: function() {
                                    return '<div class="sticker btn promo-code-reveal"><span class="reveal-label"></span><span class="btn sticker-face"></span><span class="promo-code"></span><a class="apply-navigate"></a></div>'
                                }
                            }
                        },
                        s = {},
                        u = {
                            shopAccountStrategy: function() {
                                return d.deepFind(window.btInternal, "loginData.accountId", [!1])
                            },
                            broadbandAccountStrategy: function() {
                                return d.getUserIdentifier()
                            }
                        };
                    s.getConfiguration = function(e) {
                        if (d.embeddableButtons)
                            for (var t = 0; t < d.embeddableButtons.length; t++)
                                if (d.embeddableButtons[t].uid === e) return d.embeddableButtons[t]
                    }, s.getButtons = function() {
                        var e = document.querySelectorAll(".uqd-emb-button");
                        if (e && e.length) return e
                    }, s.getMatchedItems = function(e) {
                        for (var t = [], o = document.cookie.split(";"), r = 0; r < o.length; r++) {
                            var n = o[r].split("=")[0].replace(/^\s+|\s+$/g, "");
                            n.match(e) && t.push(n)
                        }
                        return t
                    }, s.getPlaceholderAttrs = function(e) {
                        var t = {
                            revealCopy: e.getAttribute("data-uqd-reveal-copy") || "Reveal your code",
                            applyCTATitle: e.getAttribute("data-uqd-cta-title") || "Use Code",
                            applyCTA: e.getAttribute("data-uqd-cta") || "Use Code",
                            idResolver: e.getAttribute("data-uqd-id-resolver"),
                            destinationURL: e.getAttribute("data-uqd-destination"),
                            theme: e.getAttribute("data-uqd-theme") || "main"
                        };
                        return e.getAttribute("data-uid") && (t.uid = e.getAttribute("data-uid")), t
                    }, s.cleanUp = function() {
                        if (d.isOrderConfirmationPage())
                            for (var e = s.getMatchedItems(/^_uqd_emb/), t = 0; t < e.length; t++) d.removeItem(e[t])
                    }, s.install = function() {
                        var e = s.getButtons();
                        if (e) {
                            for (var t = 0; t < e.length; t++) o(e[t]);
                            return !0
                        }
                    }, s.listeningForInjections = !1, s.listenForInjections = function() {
                        if (!s.listeningForInjections && "function" == typeof window.MutationObserver) {
                            var e = document.body;
                            new MutationObserver(d.debounce(function(e, t) {
                                for (var o = 0; o < e.length; o++) {
                                    var r = e[o];
                                    "childList" === r.type && void 0 !== r.addedNodes && s.install()
                                }
                            }, 50)).observe(e, {
                                childList: !0,
                                subtree: !0
                            }), s.listeningForInjections = !0
                        }
                    }, s.initialize = function() {
                        if (s.cleanUp(), !t && (t = !0, !d.embeddableButtonsAllowedLocations || -1 !== d.embeddableButtonsAllowedLocations.indexOf((location.hostname + location.pathname).toLowerCase()))) {
                            ! function() {
                                var e = !1;
                                if (d.embeddableButtons) {
                                    for (var t = 0; t < d.embeddableButtons.length; t++)
                                        if (d.isActive(d.embeddableButtons)) {
                                            e = !0;
                                            break
                                        }
                                    if (!e) return;
                                    d.listenForNavigation.addEventListener(function() {
                                        d.retry("embeddable-button", s.install, s.getButtons, 300, 2e3)
                                    })
                                }
                            }(), s.install() || d.retry("embeddable-button", s.install, s.getButtons, 300, 2e3), s.listenForInjections();
                            var e = document.querySelector("#menu .account-holder");
                            e && d.listener(e, "click", function() {
                                setTimeout(function() {
                                    d.retry("embeddable-button", s.install, s.getButtons, 300, 2e3)
                                }, 500)
                            })
                        }
                    }, d.listener(window, "load", function() {
                        s.initialize()
                    }), d.embeddableButton = s
                }

                function o(e) {
                    var t = s.getPlaceholderAttrs(e);
                    if (!t || !t.uid) return d.report({
                        message: "Embeddable button - missing promo uuid"
                    });
                    if (!e.uqdButtonApplied) {
                        var o;
                        e.uqdButtonApplied = !0, d.hasClassName(e, "uqd-discover") && ("object" == typeof(o = t) && "string" == typeof o.uid && "string" == typeof o.revealCopy && "string" == typeof o.applyCTA && "string" == typeof o.applyCTATitle && "string" == typeof o.destinationURL && "string" == typeof o.idResolver && u[o.idResolver] ? d.embeddableButtons.push({
                            uid: o.uid,
                            theme: o.theme || "",
                            sKey: "_uqd_s_discovery",
                            copy: {
                                revealLabel: o.revealCopy,
                                defaultCode: "",
                                isRedeemed: "You have already redeemed your code.",
                                applyCTATitle: o.applyCTATitle,
                                applyCTA: o.applyCTA
                            },
                            applyBTNLink: o.destinationURL,
                            applyCodeToLink: !0,
                            codePerUser: !0,
                            useQueue: !0,
                            getUserIdentifier: function() {
                                return !!u[o.idResolver] && u[o.idResolver]()[0]
                            },
                            isReady: function(e) {
                                if (this.getUserIdentifier()) return e();
                                d.retry("uid-wait-cust-inf", e, this.getUserIdentifier, 500, 100, function() {
                                    d.report({
                                        message: "User identifier not found within given time"
                                    })
                                })
                            }
                        }) : d.report({
                            message: "Embeddable button - discover embeddable failed"
                        }));
                        var r = s.getConfiguration(t.uid);
                        if (!r) return d.report({
                            message: "Embeddable button - unknown embeddable button for promotion " + t.uid
                        });
                        if (d.isActive(r)) {
                            var n = a[r.theme || "main"];
                            n.installCSS();
                            var i = document.createElement("a");
                            if (i.setAttribute("class", "uqd-reveal-wrapper uqd-theme-" + (r.theme || "main")), i.innerHTML = n.getRevealButton(), d.listener(i, "click", function(e) {
                                    i.getAttribute("class").match("revealed") || (e.preventDefault(), d.addClassName(i, "revealed"))
                                }), function(e, t) {
                                    if (!e) return;
                                    var o = e.querySelector(".reveal-label");
                                    o && (o.innerHTML = t.copy.revealLabel);
                                    var r = e.querySelector(".apply-navigate");
                                    if (t.applyBTNLink && r) {
                                        var n = "function" == typeof t.applyBTNLink ? t.applyBTNLink() : t.applyBTNLink;
                                        r.setAttribute("href", n), r.setAttribute("title", t.copy.applyCTATitle || "Use Code"), r.innerText = t.copy.applyCTA || "Use Code"
                                    } else r && r.parentNode.removeChild(r)
                                }(i, r), e.appendChild(i), r.isReady) return r.isReady(function() {
                                l(i, r)
                            });
                            l(i, r)
                        }
                    }
                }

                function l(i, a) {
                    var e, t, s, o, r = p(a);
                    if (a.stopMessage) return function(e, t) {
                        if (!e) return;
                        if (!(e = e.parentNode).querySelector(".promo-code")) return;
                        d.addClassName(e, "redeemed"), e.innerHTML = t
                    }(i, a.stopMessage);
                    if (d.getItem(r)) return f(i, a, d.getItem(r));
                    if (a.useQueue) {
                        if (c[r]) return c[r].push(i);
                        c[r] = []
                    }
                    e = a.uid, t = {
                        email: a.getUserIdentifier()
                    }, s = function(e, t) {
                        if (e) return 206 === e.code ? function(e, t) {
                            if (!e) return;
                            if (!(e = e.parentNode).querySelector(".promo-code")) return;
                            d.addClassName(e, "redeemed"), e.innerHTML = t.copy.isSoldOut || "This offer has now sold out."
                        }(i, a) : d.report(e);
                        if (i && a.applyURLFromResponse) {
                            var o = a.applyURLFromResponse(t),
                                r = i.querySelector(".apply-navigate");
                            r && r.setAttribute("href", o)
                        }
                        var n = t.code;
                        f(i, a, n, t),
                            function(e, t, o, r) {
                                if (!e.useQueue) return;
                                var n = p(e);
                                if (void 0 !== c && c[n]) {
                                    for (var i = 0; i < c[n].length; i++) r(c[n][i], e, t, o);
                                    c[n] = void 0
                                }
                            }(a, n, t, f)
                    }, o = "https://api.uniqodo.com/embeddable/v2/" + d.embeddable.config.claimCredential + "/" + e, d.request(o + d.buildQueryString(t || {}), function(e) {
                        var t = JSON.parse(e.responseText);
                        if (0 !== t.errors.length) return s(t.errors[0]);
                        var o = t.data.code,
                            r = t.data.discount ? t.data.discount.discount_amount : "",
                            n = t.data.url ? t.data.url : "";
                        s(void 0, {
                            code: o,
                            discount: r,
                            url: n
                        })
                    })
                }

                function p(e) {
                    var t = e.uid.substring(0, 7),
                        o = d.embeddable.config.cookiePrefix + t;
                    return e.getUserIdentifier && (o += e.getUserIdentifier()), o
                }

                function f(e, t, o, r) {
                    if (e) {
                        var n = e.querySelector(".promo-code");
                        if (n) {
                            if (n.innerText = o, t.applyCodeToLink) {
                                var i = e.querySelector(".apply-navigate");
                                if (!i) return;
                                var a = "function" == typeof t.applyBTNLink ? t.applyBTNLink() : t.applyBTNLink,
                                    s = a + (-1 === a.indexOf("?") ? "?" : "&") + "uqd=" + encodeURIComponent(o);
                                i.setAttribute("href", s)
                            }
                            var d = e.querySelector(".apply-navigate");
                            r && d && "function" == typeof t.applyURLFromResponse && d.setAttribute("href", t.applyURLFromResponse(r))
                        }
                    }
                }
            }(window.UNIQODO)
        } catch (e) {
            UNIQODO.report(e)
        }
        var n, s;
        (n = UNIQODO).logImpression = function(e, t) {
            var o = "https://engagement.uniqodo.com/engagement/impression/" + e + "/" + UNIQODO.advertiserId,
                r = UNIQODO.getDataLayer();
            r.key = t, r.vkey = UNIQODO.getItem(n.visitorKey) || "", UNIQODO.request(o + n.buildQueryString(r), function(e) {
                var t = JSON.parse(e.responseText);
                t.errors && 0 == t.errors.length && UNIQODO.setItem(n.visitorKey, t.data.visitorId, 31536e7)
            })
        }, UNIQODO.experienceHelpers = {
            cashback: {
                _getAvailableOptionsFromDataSet: function(e, t) {
                    var o = UNIQODO.cashbackData.getActiveDataSetByConfigurationSKey(e.cashback.data.sKey);
                    o || e.element.parentElement && e.element.parentElement.removeChild(e.element);
                    var r = UNIQODO.map(t, function(e) {
                        return UNIQODO.cashbackData.getFromDataSet.byProductId(o, e.productId)
                    });
                    return UNIQODO.filter(r, function(e) {
                        return !!e
                    })
                },
                _processEventUsingDataSet: function(e, t, o) {
                    if (t && t.length) {
                        var r = UNIQODO.reduce(t, function(e, t) {
                            return e + t.rate
                        }, 0);
                        UNIQODO.experienceHelpers.cashback._applyCashbackData(e, r, o)
                    } else o.target.setAttribute("style", "display: none;")
                },
                _processEventUsingAPI: function(n, e, i) {
                    var a = i.targetWrapper,
                        t = i.target;
                    if (n.element && a && t) {
                        var o = UNIQODO.map(e, function(e) {
                            return {
                                productId: e.productId,
                                subtotal: 1
                            }
                        });
                        UNIQODO.executeInSeries.push(n.promotionUuid + "-cashback", function(r) {
                            UNIQODO.cashbackQuery(n.promotionUuid, o, function(e, t) {
                                if (e) return UNIQODO.report(e), a && a.parentNode.removeChild(a), r();
                                var o = parseInt(t.total);
                                UNIQODO.experienceHelpers.cashback._applyCashbackData(n, o, i), r()
                            })
                        })
                    }
                },
                _applyCashbackData: function(e, t, o) {
                    var r = o.targetWrapper,
                        n = o.target,
                        i = e.element;
                    if (i && r && n) {
                        if (isNaN(t) || 0 === t) return n.setAttribute("style", "display: none;");
                        n.style.display = "", r.setAttribute("style", "display: block;"), n.innerHTML = UNIQODO.replaceInText(e.posVariables.copy.calc, [{
                            search: "__cashback__",
                            replace: t.toString()
                        }]);
                        var a = i.querySelector(".uqd-second-line");
                        a && a.setAttribute("style", "display: none")
                    }
                },
                onBasketChanged: function(e, t) {
                    var o = UNIQODO.experienceHelpers.cashback;
                    if (!e.element) return UNIQODO.report({
                        message: "Cashback experience is missing wrapper element in " + e.sKey
                    });
                    var r = e.element.querySelector(".uqd-cashback-calc-wrapper");
                    if (r) {
                        var n = r.querySelector(".uqd-cashback-calc");
                        if (r) {
                            var i = {
                                target: n,
                                targetWrapper: r
                            };
                            if (e.cashback.useDataSet) {
                                var a = o._getAvailableOptionsFromDataSet(e, t.state);
                                o._processEventUsingDataSet(e, a, i)
                            } else if ("ready" !== t.event) {
                                var s = UNIQODO.useDebounce(e.promotionUuid, o._processEventUsingAPI.bind(o._processEventUsingAPI), 100),
                                    d = "function" == typeof e.cashback.modifyState ? e.cashback.modifyState(t.state) : t.state;
                                s(e, d, i)
                            }
                            "ready" === t.event && e.insertElement()
                        }
                    }
                }
            }
        }, UNIQODO.experience = {
            configurations: [{
                name: "BTBBConfirmationPageEERedirect202309",
                sKey: "c3208f84dad339b9e70c53a6b59c8c62",
                promoId: "c3208f84dad339b9e70c53a6b59c8c62",
                startDateUTC: Date.UTC(2050, 0, 1),
                endDateUTC: Date.UTC(2060, 0, 1),
                breakOnCriteriaPass: !0,
                element: null,
                allowedDomains: ["secureorder.bt.com"],
                initialize: function() {
                    var e = document.createElement("div");
                    e.setAttribute("id", this.generateId()), this.element = e
                },
                posVariables: {
                    namespace: "uqd-BTBBConfirmationPageEERedirect202309",
                    copy: {
                        title: "Save up to 30% as a BT customer on EE Plans",
                        description: "Experience the Power of EE and BT with best of both, giving you the most of what we offer. Join EE, UK’s most reliable mobile network* and offers 5G",
                        ctaText: "EE Deals Page",
                        ctaLink: "https://ee.co.uk/mobile/pay-monthly-phones-gallery/best-of-both?intcam=con_ee_demgen-mob-sim_web_bob-bt-fire"
                    }
                },
                generateId: function() {
                    return this.posVariables.namespace
                },
                insertElement: function() {
                    if (!document.getElementById(this.generateId())) {
                        var e = document.getElementById("sidebar"),
                            t = getComputedStyle(e);
                        if (t && "none" === t.getPropertyValue("display")) {
                            var o = document.getElementById("mainWrapper"),
                                r = document.querySelector("#mainWrapper > *:first-child");
                            o.insertBefore(this.element, r)
                        } else {
                            var n = document.querySelector("#sidebar > *:first-child");
                            e && n && e.insertBefore(this.element, n)
                        }
                    }
                },
                generateRawMarkup: function() {
                    return '<div class="uqd-wrapper">    <div class="uqd-title">        __copy-title__    </div>    <div class="uqd-description">        __copy-description__    </div>    <div class="uqd-cta-wrapper">        <a class="uqd-cta" href="__copy-ctaLink__">__copy-ctaText__</a>    </div></div>'
                },
                getStyles: function() {
                    var e = "#" + this.generateId();
                    return [e + " .uqd-wrapper { font-family: arial; background: #ffffff; border: 2px solid #007b85; border-radius: 7px; padding: 10px; margin-bottom: 15px; width: 350px; }", e + " .uqd-title { color: #007b85; font-weight: bold; font-size: 24px; }", e + " .uqd-description { color: #007b85; font-weight: bold; font-size: 18px; margin: 13px 0; }", e + " .uqd-cta-wrapper { margin: 20px 0 15px 0; text-align: center; }", e + " .uqd-cta-wrapper .uqd-cta { text-decoration:none; font-size: 16px; color: #ffffff; background: #007b85; padding: 10px 10px; border: 1px solid #007b85; border-radius: 22px; }"].join("")
                },
                finalMarkup: "",
                criteriaMetSync: function() {
                    return "secureorder.bt.com" === window.location.hostname && void 0 !== window.digitalData && void 0 !== window.digitalData.user && void 0 !== window.digitalData.user.flags && void 0 !== window.digitalData.user.flags.is && void 0 !== window.digitalData.user.flags.is.existing && !0 === window.digitalData.user.flags.is.existing && UNIQODO.isOrderConfirmationPage()
                },
                executeConfPage: function() {
                    this.element.innerHTML = this.finalMarkup, UNIQODO.installStyle(this.getStyles()), this.insertElement()
                },
                execute: function() {
                    this.executeConfPage()
                }
            }, {
                name: "BTBBConfirmationPageDiscount202304",
                sKey: "cf1a0302c938631311543aaadea9caaa",
                promoId: "cf1a0302c938631311543aaadea9caaa",
                startDateUTC: Date.UTC(2023, 4, 25, 8),
                endDateUTC: Date.UTC(2023, 11, 31, 23, 59, 59),
                element: null,
                allowedDomains: ["secureorder.bt.com", "shop.bt.com", "store.ee.co.uk", "sg7test.galahad-test.com"],
                initialize: function() {
                    var e = document.createElement("div");
                    e.setAttribute("id", this.generateId()), this.element = e
                },
                posVariables: {
                    namespace: "uqd-BTBBConfirmationPageDiscount202304",
                    copy: {
                        title: "10% off at EE Store",
                        description: "Discover the latest products from the biggest names in tech. Deals & offers on laptops, TVs, home phones, smart home and more.<br>Use the code below for 10% off your next purchase at EE Store, an exclusive gift from us to you. Terms apply.",
                        ctaText: "Copy code",
                        ctaLink: "https://store.ee.co.uk/other-pages/bt-customer-offers/btcom-customer-offer?ReferrerID=G600&utm_source=btcom&utm_medium=bt+marketing&utm_campaign=order_confirmation_apr23&utm_content=G600"
                    }
                },
                generateId: function() {
                    return this.posVariables.namespace
                },
                insertElement: function() {
                    if (!document.getElementById(this.generateId())) {
                        var e = document.getElementById("sidebar");
                        if ("none" === getComputedStyle(e).getPropertyValue("display")) {
                            var t = document.getElementById("mainWrapper"),
                                o = document.querySelector("#mainWrapper > *:first-child");
                            t.insertBefore(this.element, o)
                        } else {
                            var r = document.querySelector("#sidebar > *:first-child");
                            e && r && e.insertBefore(this.element, r)
                        }
                    }
                },
                generateRawMarkup: function() {
                    return '<div class="uqd-wrapper">    <div class="uqd-title">        __copy-title__    </div>    <div class="uqd-description">        __copy-description__    </div>    <div class="uqd-code-block">        <span data-promoId="' + this.promoId + '" class="uqd-emb-code" data-uid="' + this.getTransId() + '"></span>        <a class="uqd-code-link" href="__copy-ctaLink__">__copy-ctaText__</a>    </div></div>'
                },
                getStyles: function() {
                    var e = "#" + this.generateId();
                    return [e + " .uqd-wrapper { font-family: arial; background: #ffffff; border: 2px solid #057382; border-radius: 7px; padding: 10px; margin-bottom: 15px; width: 350px; }", e + " .uqd-title { color: #057382; font-weight: bold; font-size: 24px; }", e + " .uqd-description { color: #111111; font-weight: bold; font-size: 18px; margin: 13px 0; }", e + " .uqd-code-block { margin: 20px 0 15px 0;}", e + " .uqd-code-block .uqd-emb-code { color: #111111; font-weight: bold; font-size: 18px; }", e + " .uqd-code-block .uqd-code-link { text-decoration:none; font-size: 16px; margin-left: 7px; color: #111111; background: #ffffff; padding: 5px 10px; border: 1px solid #2b2b2b; border-radius: 7px; }", e + " .uqd-code-block .uqd-code-link:hover { color: #f3f3f3; background: #2b2b2b; border-color: #2b2b2b; }"].join("")
                },
                finalMarkup: "",
                criteriaMetSync: function() {
                    return "secureorder.bt.com" === window.location.hostname && UNIQODO.isOrderConfirmationPage() && "" !== this.getTransId() && "CON-DUAL-BB-ONLY" === UNIQODO.deepFind(window.digitalData, "basket.attributes.url.key", "") || UNIQODO.isBTShop() && "/other-pages/bt-customer-offers/btcom-customer-offer" === window.location.pathname && "string" == typeof UNIQODO.getQueryStringParameter("uqd")
                },
                getTransId: function() {
                    return UNIQODO.deepFind(window.digitalData, "transaction.transaction_id", "")
                },
                executeConfPage: function() {
                    this.element.innerHTML = this.finalMarkup, UNIQODO.installStyle(this.getStyles()), this.insertElement(), UNIQODO.installEmbeddableOnFly(document.querySelector("#" + this.posVariables.namespace + " .uqd-emb-code"), void 0, !0);
                    var e = document.querySelector("#" + this.posVariables.namespace + " .uqd-code-block a.uqd-code-link"),
                        t = document.querySelector("#" + this.posVariables.namespace + " .uqd-emb-code"),
                        o = 0;
                    UNIQODO.activateCopyToClipboard(e, function() {
                        e.innerHTML = "Use code"
                    }, function() {
                        return t ? (e.innerHTML = "Copied - Use my code", t.innerText) : ""
                    }, function() {
                        2 === ++o && window.setTimeout(function() {
                            window.location.href = e.getAttribute("href") + "&uqd=" + t.innerText + "&bt_campaign_voucher=" + t.innerText
                        }, 0)
                    })
                },
                executeLandPage: function() {
                    for (var e = document.querySelectorAll(".bt-campaign-autofill"), t = 0; t < e.length; t++) {
                        var o = e[t];
                        o.innerText = UNIQODO.getQueryStringParameter("uqd"), UNIQODO.removeClassName(o, "d-none")
                    }
                },
                execute: function() {
                    "secureorder.bt.com" === window.location.hostname && this.executeConfPage(), UNIQODO.isBTShop() && this.executeLandPage()
                }
            }, {
                name: "AB order summary",
                sKey: "780e3e92b829fd32d77851e55bf15c99",
                testId: 35,
                challengerId: 77,
                activeSplit: null,
                startDate: new Date(2021, 7, 4),
                endDate: new Date(2028, 8, 1),
                allowedDomains: ["secureorder.bt.com"],
                validJourneyKeys: ["CON-DUAL-BB-ONLY"],
                targetsForRemoval: [{
                    selector: "h4",
                    contains: "broadband with standard line rental"
                }, {
                    selector: "p.description",
                    contains: "pay your bill by monthly or quarterly direct debit"
                }],
                removeTargets: function() {
                    for (var e = 0; e < this.targetsForRemoval.length; e++)
                        for (var t = this.targetsForRemoval[e], o = document.querySelectorAll(t.selector), r = 0; r < o.length; r++) o[r] && o[r].innerText.trim().toLowerCase() === t.contains && o[r].parentNode.removeChild(o[r])
                },
                pages: ["/consumerorders/control/product", "/consumerorders/control/checkout"],
                getJourneyKeys: function() {
                    return UNIQODO.deepFind(window.digitalData, "basket.products.items.product_journey_key", [])
                },
                hasValidJourneyKey: function() {
                    for (var e = this.getJourneyKeys(), t = 0; t < e.length; t++)
                        if (-1 !== this.validJourneyKeys.indexOf(e[t])) return !0;
                    return !1
                },
                criteriaMetSync: function() {
                    return this.hasValidJourneyKey()
                },
                onSplit: function() {
                    -1 !== this.pages[location.pathname.toLowerCase()] && (UNIQODO.logImpression(this.sKey, "view-targeted-page"), this.activeSplit === this.challengerId && this.removeTargets())
                },
                execute: function() {
                    var t = this;
                    JUSTO.startTest(this.testId, function(e) {
                        t.activeSplit = +e, t.onSplit()
                    })
                }
            }, {
                name: "TopCashback",
                sKey: "Ep1KVp02ns6DPbGij1g227L8wvGHCIUDuqpmT0BGwlA",
                startDateUTC: Date.UTC(2022, 7, 22, 9, 0, 0),
                endDateUTC: Date.UTC(2029, 1, 1),
                promotionUuid: "4a7ee32e6d223a2a0f8e1b671023eab5",
                testId: 41,
                challengerId: 89,
                activeSplit: null,
                activationCookie: {
                    key: "_uqd_cashback",
                    expiry: 1,
                    value: "topcashback"
                },
                closeCookie: {
                    key: "_uqd_cashback_close",
                    expiry: 1,
                    value: "1"
                },
                element: null,
                cashback: {
                    onBasketChanged: UNIQODO.experienceHelpers.cashback.onBasketChanged,
                    groups: [{
                        parentGroupId: "TV_NEW",
                        childCodes: ["TV-ADD-ON-ENTERTAINMENT", "TV-ADD-ON-BIG-ENT", "TV-ADD-ON-VIP", "TV-ADD-ON-SPORT-MINI", "TV-ADD-ON-BIG-SPORT", "TV-ADD-ON-ASIAN-MIX", "TV-ADD-ON-AMAZON", "TV-ADD-ON-BTHD", "TV-ADD-ON-NETFLIX", "TV-ADD-ON-NOW-ENT", "TV-ADD-ON-BOXNATION", "TV-ADD-ON-ESSENTIAL-COPPER", "TV-ADD-ON-SPORT-MINI-COPPER"]
                    }],
                    getAllGroupIds: function() {
                        return UNIQODO.map(this.groups, function(e) {
                            return e.parentGroupId
                        })
                    },
                    swapItemIfInGroup: function(e, t) {
                        for (var o = 0; o < t.length; o++) {
                            var r = t[o]; - 1 !== r.childCodes.indexOf(e.productId) && (e.productId = r.parentGroupId)
                        }
                        return e
                    },
                    filterDuplicateGroups: function(e) {
                        var t = this.getAllGroupIds(),
                            o = [];
                        return UNIQODO.filter(e, function(e) {
                            return -1 === o.indexOf(e.productId) && (-1 !== t.indexOf(e.productId) && o.push(e.productId), !0)
                        })
                    },
                    modifyState: function(e) {
                        if (!e || !UNIQODO.isArray(e)) return [];
                        var t = this,
                            o = UNIQODO.map(e, function(e) {
                                return t.swapItemIfInGroup(e, t.groups)
                            });
                        return this.filterDuplicateGroups(o)
                    },
                    data: {}
                },
                allowedDomains: ["bt.com", "www.bt.com"],
                excludedPathnames: ["/broadband/deals/affiliate-offer", "/tv/packages/tv-affiliate-offer", "/broadband/deals/packages-a"],
                initialize: function() {
                    var e = document.createElement("div");
                    e.setAttribute("id", this.generateId()), this.element = e
                },
                posVariables: {
                    namespace: "uqd-topcashback",
                    fontFamily: '"BT Curve", "Century Gothic", Arial, sans-serif',
                    assets: {
                        logo: "https://www.uqd.io/assets/7/CORE-3769-UniqodoLogo-Desktop.png"
                    },
                    colors: {
                        mainBackgroundColor: "#fff",
                        fontColorOnBG: "#333",
                        closeButton: "#333"
                    },
                    sizes: {
                        closeButton: "18px",
                        wrapperPadding: "20px",
                        spacing: "20px",
                        calcMarginTop: "10px",
                        calc: "20px",
                        description: "20px"
                    },
                    copy: {
                        description: "Your TopCashback total will update as you add to your order.",
                        calc: "<b>Receive up to </b> £__cashback__ <b> in cashback,</b>",
                        secondLine: '<div class="uqd-copy-tcs"><a title="T&amp;C\'s" href="https://www.topcashback.co.uk/bt-total-broadband/">T&amp;C\'s</a> Apply</div>',
                        calcSuffix: '<div class="uqd-copy-tcs">&nbsp;<a title="T&amp;C\'s" href="https://www.topcashback.co.uk/bt-total-broadband/">T&amp;C\'s</a> Apply</div>'
                    }
                },
                generateId: function() {
                    return this.posVariables.namespace
                },
                insertElement: function() {
                    document.getElementById(this.generateId()) || (this.installClose(), document.body.insertBefore(this.element, document.body.firstChild))
                },
                markup: {
                    url: "https://www.uqd.io/assets/7/bt-cashback-canvas.html",
                    resolved: null
                },
                locationsCriteriaMet: function() {
                    return (UNIQODO.getQueryStringParameter("s_cid") || "").match("57697")
                },
                criteriaMetSync: function() {
                    return UNIQODO.getItem(this.activationCookie.key) === this.activationCookie.value && UNIQODO.getItem(this.closeCookie.key) !== this.closeCookie.value
                },
                installClose: function() {
                    var e = this.element,
                        t = this;
                    if (e) {
                        for (var o = e.querySelectorAll(".uqdCloseButton"), r = 0; r < o.length; r++) UNIQODO.listener(o[r], "click", function() {
                            e.parentElement.removeChild(e), UNIQODO.setItem(t.closeCookie.key, t.closeCookie.value, t.closeCookie.expiry, !0)
                        });
                        var n = e.querySelector(".uqd-wrapper");
                        n && n.setAttribute("style", "position: static")
                    }
                },
                onSplit: function() {
                    if (this.activeSplit === this.challengerId) {
                        if (!UNIQODO.basketObserver) return;
                        var t = this;
                        this.element.innerHTML = this.markup.resolved, /^\/options/.test(location.pathname) || this.insertElement(), UNIQODO.basketObserver.subscribe(function(e) {
                            t.cashback.onBasketChanged(t, e)
                        })
                    }
                },
                execute: function() {
                    var t = this;
                    JUSTO.startTest(this.testId, function(e) {
                        t.activeSplit = +e, t.onSplit()
                    })
                }
            }, {
                name: "SocialMediaCanvas13761",
                sKey: "3e82ddd8996a49f169e238759f4c5aef",
                startDateUTC: Date.UTC(2022, 5, 20, 8),
                endDateUTC: Date.UTC(2022, 9, 31, 23, 59, 59),
                activationCookie: {
                    key: "_uqd_emb_socialMediaCanvas13761",
                    expiry: 1,
                    value: "socialMediaCanvas13761"
                },
                closeCookie: {
                    key: "_uqd_socialMediaCanvas13761_close",
                    expiry: 1,
                    value: "socialMediaCanvas13761"
                },
                element: null,
                allowedDomains: ["shop.bt.com", "store.ee.co.uk", "sg7test.galahad-test.com"],
                excludedPathnames: ["checkout"],
                initialize: function() {
                    var e = document.createElement("div");
                    e.setAttribute("id", this.generateId()), this.element = e
                },
                posVariables: {
                    namespace: "uqd-socialMediaCanvas13761",
                    copy: {
                        part1: "Enjoy 20% off BT products!",
                        part2: "Use voucher code:",
                        TCsText: "T&amp;Cs apply &gt;",
                        TCsLink: "https://shop.bt.com/help/policies/20off-bt-products-social-may22/"
                    }
                },
                generateId: function() {
                    return this.posVariables.namespace
                },
                insertElement: function() {
                    if (!document.getElementById(this.generateId())) {
                        var e = document.querySelector("header");
                        e && e.appendChild(this.element)
                    }
                },
                generateRawMarkup: function() {
                    return '<div class="col-12 py-3 text-center btfont-regular" style="background-color: #28055B;">    <div id="track001_8677" class="color-white" href="#">        <span class="btfont-bold h4">__copy-part1__<span class="d-md-none">                <br>            </span> __copy-part2__        </span>        <a class="uqd-code-container ml-3 mr-3 pt-2 my-3 my-md-0 mb-0 color-black back-white btfont-bold h4 btn" style="border-style: dashed; text-transform: uppercase;" title="">            <span id="uqd-code" data-promoId="3e82ddd8996a49f169e238759f4c5aef"></span>            <img src="/Images/vendors/PROJECTS/BT-SHOP/voucherCodes/copy-symbol.png" class="pl-5 pb-1 float-right">        </a>        <span class="d-md-none">            <br>        </span> <a class="color-white" href="__copy-TCsLink__">__copy-TCsText__</a>    </div></div>'
                },
                finalMarkup: "",
                locationsCriteriaMet: function() {
                    var e = UNIQODO.getQueryStringParameter("referrerid") || "",
                        t = UNIQODO.getQueryStringParameter("utm_term") || "";
                    return e.match("FB02") && t.match("STA_BOP_SocialBTVoucherUpdatedLink_v1_EN")
                },
                criteriaMetSync: function() {
                    return UNIQODO.getItem(this.activationCookie.key) === this.activationCookie.value
                },
                installClose: function() {
                    var e = this.element,
                        t = this;
                    if (e) {
                        for (var o = e.querySelectorAll(".uqdCloseButton"), r = 0; r < o.length; r++) UNIQODO.listener(o[r], "click", function() {
                            e.parentElement.removeChild(e), UNIQODO.setItem(t.closeCookie.key, t.closeCookie.value, t.closeCookie.expiry, !0)
                        });
                        var n = e.querySelector(".uqd-wrapper");
                        n && n.setAttribute("style", "position: static")
                    }
                },
                execute: function() {
                    this.element.innerHTML = this.finalMarkup, this.insertElement();
                    var e = document.getElementById(this.posVariables.namespace);
                    if (e) {
                        var t = e.querySelector(".uqd-code-container");
                        t && UNIQODO.activateCopyToClipboard(t, function() {
                            t.querySelector("img").setAttribute("style", "display:none")
                        }, function() {
                            var e = t.querySelector("#uqd-code");
                            return e ? e.innerText : ""
                        })
                    }
                }
            }],
            prepareConfiguration: function(e) {
                return UNIQODO.map(e, function(t) {
                    return t.criteriaMetAsync ? function(e) {
                        t.criteriaMetAsync(dataLayer, t, e)
                    } : function(e) {
                        e(void 0, t)
                    }
                })
            },
            filterInvalidConfigurations: function(e) {
                return UNIQODO.filter(e, function(e) {
                    return UNIQODO.isActive(e) && (!e.allowedDomains || -1 !== e.allowedDomains.indexOf(location.hostname.toLowerCase())) && (!e.allowedPathnames || UNIQODO.isCurrentPathnameInList(e.allowedPathnames)) && (!e.excludedPathnames || !UNIQODO.isCurrentPathnameInList(e.excludedPathnames))
                })
            },
            initializeConfigurations: function(e) {
                if (e)
                    for (var t = 0; t < e.length; t++) void 0 !== e[t].cashback && void 0 !== UNIQODO.cashbackData && UNIQODO.cashbackData.addConfigurations([e[t].cashback.data]), "function" == typeof e[t].initialize && e[t].initialize(e[t])
            },
            filterSyncCriteriaMet: function(t, o) {
                return UNIQODO.filter(t, function(e) {
                    return !(!e || e.criteriaMetSync && !0 !== e.criteriaMetSync(t, o || {}))
                })
            },
            beforeExecute: function(t) {
                var o = this;
                if ("function" == typeof t.generateRawMarkup) {
                    var e = t.generateRawMarkup();
                    if (!e) return;
                    t.finalMarkup = o.applyPlaceholders(e, t.posVariables), t.execute()
                }
                if (t.markup && t.markup.url) return UNIQODO.request(t.markup.url, function(e) {
                    t.markup.resolved = o.applyPlaceholders(e.responseText, t.posVariables), t.execute()
                });
                t.execute()
            },
            applyPlaceholders: function(e, o) {
                if (!e || !o) return e;
                o = UNIQODO.flattenObject(o);
                return UNIQODO.replaceInText(e, UNIQODO.reduce(Object.keys(o), function(e, t) {
                    return e.push({
                        search: "__" + t + "__",
                        replace: o[t]
                    }), e
                }, []))
            },
            runLocationsCriteriaMet: function(e) {
                if (e)
                    for (var t = 0; t < e.length; t++) {
                        var o = e[t];
                        if (o.locationsCriteriaMet) {
                            if (!o.activationCookie) {
                                UNIQODO.report({
                                    message: "Missing activation configuration for locationsCriteriaMet in " + o.sKey
                                });
                                continue
                            }
                            o.locationsCriteriaMet(o) && UNIQODO.setItem(o.activationCookie.key, o.activationCookie.value, o.activationCookie.expiry, !0)
                        }
                    }
            },
            _install: function() {
                var e = this.filterInvalidConfigurations(this.configurations);
                this.runLocationsCriteriaMet(e), this.initializeConfigurations(e);
                var t = this.prepareConfiguration(e),
                    n = this;
                UNIQODO.parallel(t, {
                    timeout: 1e3
                }, function(e, t) {
                    if (!e || (UNIQODO.report(e), t.length))
                        for (var o = n.filterSyncCriteriaMet(t), r = 0; r < o.length; r++)
                            if (o[r] && (n.beforeExecute(o[r]), t[r].breakOnCriteriaPass)) return
                })
            },
            install: function() {
                UNIQODO.retry("experience-install-await", function() {
                    UNIQODO.experience._install()
                }, function() {
                    return !!document.body
                }, 100, 200, function() {
                    UNIQODO.report({
                        message: "Awaiting body failed from experience plugin"
                    })
                })
            }
        };
        try {
            window.JUSTO = void 0 !== window.JUSTO ? JUSTO : {}, (s = window.JUSTO || {}).config = {
                    endpoint: {
                        tx: "https://justo.uniqodo.com/tx",
                        aud: "https://justo.uniqodo.com/audience"
                    },
                    splitCookiePrefix: "_uqd_ab_",
                    visitorKey: UNIQODO.visitorKey,
                    tests: [{
                        testId: 35,
                        endDate: new Date(2029, 0, 1, 23, 59, 59),
                        pageCriteriaMet: function() {
                            return !0
                        }
                    }, {
                        testId: 41,
                        endDate: new Date(2029, 0, 1, 23, 59, 59),
                        pageCriteriaMet: function() {
                            return !0
                        }
                    }]
                }, s.isTestActive = function(e) {
                    return !(e < new Date)
                }, s.anyActiveTest = function() {
                    for (var e = 0; e < this.config.tests.length; e++) {
                        var t = this.config.tests[e];
                        if (t.endDate && this.isTestActive(t.endDate)) return !0
                    }
                    return !1
                }, s.getSplit = function(e) {
                    return UNIQODO.getItem(this.config.splitCookiePrefix + e)
                }, s.store = function(e, t) {
                    UNIQODO.setItem(this.config.splitCookiePrefix + e, t.split), UNIQODO.setItem(this.config.visitorKey, t.vk, 31536e7)
                }, s.audience = function(o, e, t, r) {
                    if (this.getSplit(o.testId)) void 0 !== r && r(this.getSplit(o.testId));
                    else {
                        var n = {
                                test: o.testId,
                                uid: e || "",
                                env: JSON.stringify(t)
                            },
                            i = UNIQODO.getItem(this.config.visitorKey);
                        i && (n.vk = i);
                        var a = UNIQODO.buildQueryString(n, "GET");
                        UNIQODO.request(this.config.endpoint.aud + a, function(e) {
                            var t = JSON.parse(e.responseText);
                            t.split && (s.store(o.testId, t), void 0 !== r && r(t.split))
                        })
                    }
                }, s.transact = function(e, t, o, r, n) {
                    var i = UNIQODO.getItem(this.config.visitorKey);
                    if (i && s.anyActiveTest()) {
                        var a = {
                            vk: i,
                            orderId: e,
                            orderValue: t,
                            triggerCode: o,
                            env: JSON.stringify(n)
                        };
                        r && (a.rid = r), UNIQODO.request(this.config.endpoint.tx + UNIQODO.buildQueryString(a, "GET"), function(e) {})
                    }
                }, s.startTest = function(e, t) {
                    for (var o = 0; o < this.config.tests.length; o++)
                        if (this.config.tests[o].testId === e) {
                            this.config.tests[o].pageCriteriaMet(this.config.tests[o], t) && this.isTestActive(this.config.tests[o].endDate) && this.audience(this.config.tests[o], UNIQODO.getUserId(), UNIQODO.getDataLayer() || {}, t);
                            break
                        }
                },
                function() {
                    if (UNIQODO.getQueryStringParameter("uqd-jt[tid]")) {
                        var e = UNIQODO.getQueryStringParameter("uqd-jt[tid]"),
                            t = UNIQODO.getQueryStringParameter("uqd-jt[sid]");
                        void 0 !== t && s.store(e, {
                            split: t,
                            vk: UNIQODO.getItem(s.config.visitorKey) || ""
                        })
                    }
                }()
        } catch (e) {}
    }
}(), UNIQODO.awinRedemption = function() {
    var r, m = {
            redemptionDone: "redemptionDone",
            conversionDone: "conversionDone"
        },
        n = "sread",
        i = "cks",
        g = "awcb",
        a = !1,
        h = {
            redemptionSend: !1
        },
        t = {
            redemptionResponseData: {},
            addRedemptionResponse: function(e, t) {
                e && t && (this.redemptionResponseData[e] = t)
            },
            getRedemptionResponseData: function(e) {
                return this.redemptionResponseData[e] || null
            }
        },
        s = {},
        d = {
            waitForPixelFrequency: 10,
            waitForPixelExponentialBackOff: 500
        };

    function b() {
        var e = d.getDataLayer ? d.getDataLayer() : {};
        return e.orderId = UNIQODO.orderId, e.orderValue = UNIQODO.orderValue, e.currency = UNIQODO.currency, void 0 !== UNIQODO.email && (e.email = UNIQODO.email), void 0 !== UNIQODO.discount && (e.discount = UNIQODO.discount), void 0 !== UNIQODO.delivery && (e.delivery = UNIQODO.delivery), void 0 !== UNIQODO.cg && (e.cg = UNIQODO.cg), UNIQODO.objectAssign(e, function() {
            var e, t = 1,
                o = {};
            for (; void 0 !== (e = UNIQODO["p" + t]) && (o["p" + t] = e, !(d.limitPValues && d.limitPValues < t));) t++;
            return o
        }()), e
    }

    function y(e, t) {
        if (s[e])
            for (var o = 0; o < s[e].length; o++) s[e][o](t)
    }

    function e(e, t) {
        s[e] || (s[e] = []), s[e].push(t)
    }

    function c() {
        if (r) return r;
        var e = document.querySelectorAll(['img[src*="awin1.com"]', 'script[src*="awin1.com"]', 'img[src*="zenaps.com"]', 'script[src*="zenaps.com"]'].join(","));
        if (e && e.length)
            for (var t = 0; t < e.length; t++) {
                var o = e[t].getAttribute("src");
                if (o.match(n)) return r = o
            }
    }

    function u(r) {
        if (!r.send) {
            r.send = !0;
            var e = b(),
                t = r.uniqodoValidatedCode,
                o = r.uniqodoValidationKey,
                n = r.ignoreTriggerCode,
                i = r.clientSetTriggerCode,
                a = r.redemptionType,
                s = r.awinPixel;
            if (UNIQODO.beforeRedemptionCall)
                for (var d = 0; d < UNIQODO.beforeRedemptionCall.length; d++) {
                    var c = UNIQODO.beforeRedemptionCall[d](t, i, o);
                    c && void 0 !== c.ignoreTriggerCode && (n = c.ignoreTriggerCode)
                }
            if (!n) try {
                UNIQODO.filterTriggerCode()
            } catch (e) {
                UNIQODO.report(e)
            }
            if (t || UNIQODO.triggerCodeRedemption) {
                e.code = t, e.redemptionType = a || "unknown", o && (e.valKey = o), s && (e[g] = s), n || (e.triggerCode = UNIQODO.triggerCode || "none"), h.redemptionSend = (new Date).getTime();
                var u, l, p, f = (u = t, l = e, p = "https://api.uniqodo.com/redeem/", (p += UNIQODO.priv + "/" + u + "/" + UNIQODO.advertiserId) + UNIQODO.buildQueryString(l));
                UNIQODO.request(f, function(e) {
                    try {
                        var t = JSON.parse(e.responseText),
                            o = t.data || {};
                        return y(m.redemptionDone, {
                            responseData: o,
                            responseErrros: t.errors,
                            redemptionData: r
                        })
                    } catch (e) {
                        UNIQODO.report(e)
                    }
                })
            }
        }
    }

    function o(e, t) {
        if (e && t) {
            var o = UNIQODO.getUrlVars(e);
            o[i] = t;
            var r = e.replace(/(\?[^#]+)/, UNIQODO.buildQueryString(o)),
                n = document.createElement("img");
            n.setAttribute("src", r), n.setAttribute("style", "max-width: 0px; max-height: 0px;"), document.body.appendChild(n)
        }
    }

    function l(e) {
        window.AWIN || (window.AWIN = {}), window.AWIN.Tracking || (window.AWIN.Tracking = {}), window.AWIN.Tracking.Influence || (window.AWIN.Tracking.Influence = {}), window.AWIN.Tracking.Influence.events || (window.AWIN.Tracking.Influence.events = []), window.AWIN.Tracking.Influence.events.push(e)
    }

    function p(o) {
        if (o) return t.getRedemptionResponseData(o) ? void UNIQODO.vcotConversion(o, c(), function(e, t) {
            if (e) return UNIQODO.report(e);
            y(m.conversionDone, {
                conversionResponseData: t,
                redemptionKey: o
            })
        }) : UNIQODO.report({
            message: "Missing redemption data record for " + o,
            name: "VCOT"
        })
    }

    function f(e) {
        if (!e.responseData) return UNIQODO.report({
            message: "Awin redeption is missing redemption data",
            type: "VCOT"
        });
        ! function(e) {
            if (t.addRedemptionResponse(e.redemption_key, e), c()) return p(e.redemption_key);
            UNIQODO.retry("wait-for-pixel", function() {
                UNIQODO.forEach(t.redemptionResponseData, function(e, t) {
                    p(t)
                })
            }, function() {
                return c()
            }, d.waitForPixelFrequency, UNIQODO.retry.INFINITE_UNTIL_SUCCESS)
        }(e.responseData), e.responseData.awc_token && l(e.responseData.awc_token), r && e.responseData.awc_token && o(r, e.responseData.awc_token)
    }

    function v(e) {
        var t = (e.conversionResponseData || {}).awc_token;
        t && (l(t), o(r, t))
    }
    return e(m.conversionDone, v), e(m.redemptionDone, f), {
        initialize: function(e) {
            UNIQODO.objectAssign(d, e)
        },
        startRedemption: function(e) {
            if (UNIQODO.isArray(e) || (e = [e]), !a) {
                a = !0;
                try {
                    var t = b();
                    UNIQODO.report({
                        message: "Redemption before wait RData: " + JSON.stringify(e) + " ODetails: " + JSON.stringify(t),
                        name: "redemption"
                    })
                } catch (e) {
                    UNIQODO.report(e)
                }
                for (var o = c(), r = 0; r < e.length; r++) e[r].awinPixel = o, u(e[r])
            }
        },
        subscribe: e,
        getOrderQueryObject: b,
        EVENTS: m
    }
}();
try {
    ! function(u) {
        if (u) {
            var l = {};
            u.setCookie = function(e, t, o) {
                o = o || 2592e6;
                var r = e + "=" + t,
                    n = UNIQODO.cookiePath ? UNIQODO.cookiePath : "/";
                if (1 !== o) {
                    var i = new Date;
                    i.setTime(i.getTime() + o), r += i = "; expires=" + i.toGMTString()
                }
                r += "; path=" + n + ";domain=" + UNIQODO.advertiserDomain, document.cookie = r
            }, u.getMatchedItems = function(e) {
                for (var t = [], o = document.cookie.split(";"), r = 0; r < o.length; r++) {
                    var n = o[r].split("=")[0].replace(/^\s+|\s+$/g, "");
                    n.match(e) && t.push(n)
                }
                return t
            }, u.embeddableEl = function() {
                return document.getElementById("uqd-code")
            }, u.embeddableDiscountEl = function() {
                return document.getElementById("uqd-discount-amt")
            }, u.getPlaceholderAttr = function(e) {
                var t = {};
                return e.getAttribute("data-uid") && (t.uid = e.getAttribute("data-uid")), e.getAttribute("data-idv") && (t.idv = e.getAttribute("data-idv")), e.getAttribute("data-nrc") && (t.nrc = e.getAttribute("data-nrc")), e.getAttribute("data-p1") && (t.p1 = e.getAttribute("data-p1")), t
            }, u.hasAutofill = function(e) {
                return !!e && e.hasAttribute("data-autofill")
            }, u.executeAutofill = function(e, t) {
                if (UNIQODO.autofill && e && t && u.hasAutofill(e)) {
                    var o = (e.getAttribute("data-autofill") || "").split(";");
                    UNIQODO.autofill.autofillCode(t, o, !0)
                }
            }, u.embedCode = function(i, a, s) {
                var e = i.getAttribute("data-promoId");
                if (e) {
                    var t = UNIQODO.orderId;
                    t && (t != UNIQODO.getItem("_uqd_o_id") ? (UNIQODO.setItem("_uqd_o_id", t), u.cleanUp()) : UNIQODO.getItem("_uqd_o_id") || UNIQODO.setItem("_uqd_o_id", t));
                    var d = e.substring(0, 7),
                        c = u.config.cookiePrefix + d,
                        o = u.config.repeatCode || UNIQODO.getItem(c);
                    if (!o && s) {
                        if (l[d]) return l[d].push([i, a]);
                        l[d] = []
                    }
                    if (o) return i.textContent = o, void u.executeAutofill(i, o);
                    var r = "https://api.uniqodo.com/embeddable/v2/" + u.config.claimCredential + "/" + e;
                    UNIQODO.request(r + UNIQODO.buildQueryString(u.getPlaceholderAttr(i)), function(e) {
                        var t = JSON.parse(e.responseText);
                        if (0 == t.errors.length) {
                            var o = t.data.code,
                                r = t.data.discount ? t.data.discount.discount_amount : "";
                            i.textContent = o, r && a && (a.textContent = r), u.setCookie(c, o), u.executeAutofill(i, o)
                        }
                        if (s && l && l[d]) {
                            for (var n = 0; n < l[d].length; n++) u.embedCode(l[d][n][0], l[d][n][1]);
                            l[d] = void 0
                        }
                    })
                }
            }, u.cleanUp = function() {
                if (UNIQODO.isOrderConfirmationPage())
                    for (var e = u.getMatchedItems(/^_uqd_emb/), t = 0; t < e.length; t++) UNIQODO.removeItem(e[t])
            }, UNIQODO.installEmbeddableOnFly = function(t, o, r, e) {
                if (t && (!t || "0" != t.getAttribute("data-st"))) {
                    if (e && e.autofillIntegrations && t.setAttribute("data-autofill", e.autofillIntegrations), e && e.waitForDOM && UNIQODO.waitForElementToBeInDOM) return UNIQODO.waitForElementToBeInDOM(t, e.waitForDOM, function(e) {
                        if (e) return UNIQODO.report({
                            message: e
                        });
                        u.embedCode(t, o, r)
                    });
                    u.embedCode(t, o, r)
                }
            }, u.install = function() {
                var e = u.embeddableEl();
                if (e && (!e || "0" != e.getAttribute("data-st"))) {
                    var t = u.embeddableDiscountEl() || null;
                    u.embedCode(e, t)
                }
            }, u.install(), UNIQODO.retry("embeddable", u.install, u.embeddableEl, 300, 2e3)
        }
    }(UNIQODO.embeddable)
} catch (e) {
    UNIQODO.report(e)
}
UNIQODO.cashbackData = {
        _configurations: [],
        addConfigurations: function(e) {
            var t = UNIQODO.filter(e || [], function(e) {
                return UNIQODO.isArray(e.data) && UNIQODO.isActive(e)
            });
            this._configurations = this._configurations.concat(t)
        },
        getConfiguration: function(e) {
            for (var t = 0; t < this._configurations.length; t++)
                if (this._configurations[t].sKey === e) return this._configurations[t]
        },
        getActiveDataSet: function(e) {
            if (e)
                for (var t = e.data, o = 0; o < t.length; o++)
                    if (UNIQODO.isActive(t[o])) return t[o]
        },
        getActiveDataSetByConfigurationSKey: function(e) {
            var t = this.getConfiguration(e);
            return this.getActiveDataSet(t)
        },
        getValue: function(e, t) {
            return this.getFromDataSet.byProductId(this.getActiveDataSetByConfigurationSKey(e), t)
        },
        getFromDataSet: {
            _find: function(e, t, o) {
                if (e && e.values)
                    for (var r = 0; r < e.values.length; r++) {
                        var n = e.values[r];
                        if (n[t] === o) return n
                    }
            },
            byProductId: function(e, t) {
                return this._find(e, "productId", t)
            },
            byProductCode: function(e, t) {
                return this._find(e, "code", t)
            }
        }
    }, UNIQODO.basketObserver = function() {
        var e, o = "ready",
            r = "update",
            n = {
                subscribers: [],
                subscribe: function(e) {
                    this.subscribers.push(e)
                },
                unsubscribe: function(e) {
                    var t = this.subscribers.indexOf(e); - 1 !== t && this.subscribers.splice(t, 1)
                },
                notify: function(e, t) {
                    for (var o = 0; o < this.subscribers.length; o++) this.notifyOne(e, t, this.subscribers[o])
                },
                notifyOne: function(e, t, o) {
                    o({
                        event: e,
                        state: t
                    })
                }
            },
            i = {
                _mapping: {
                    brand: "brand",
                    category: "category",
                    contractDuration: "contract.duration",
                    contractPeriodicity: "contract.periodicity",
                    priceUpfront: ["price.upfront", 0],
                    priceOngoing: ["price.ongoing", 0],
                    priceTotal: ["price.total_contract", 0],
                    productCode: "product_code",
                    productId: "product_id",
                    productName: "product_name",
                    quantity: "quantity",
                    type: "type"
                },
                _itemMustContain: ["productId"],
                _filterBasketItems: function(e) {
                    var r = this;
                    return UNIQODO.filter(e || [], function(e) {
                        if (!e) return !1;
                        for (var t = 0; t < r._itemMustContain.length; t++) {
                            var o = e[r._itemMustContain[t]];
                            if (null == o) return !1
                        }
                        return !0
                    })
                },
                _mapBasketItems: function(e) {
                    if (!e) return [];
                    var t = this;
                    return UNIQODO.map(e, function(e) {
                        return t.mapItem(e)
                    })
                },
                mapItem: function(e) {
                    return UNIQODO.mapObjectRecord(e, this._mapping, null)
                }
            },
            a = {
                _updatedEventName: "Basket.updated",
                _updateEvents: ["Basket.item.added"],
                isExhaustPresent: function() {
                    return void 0 !== window._exhaust
                },
                getBasketUpdatedEventHistory: function() {
                    var e = (((window._exhaust || {}).events || {})[this._updatedEventName] || {}).history || [];
                    return e[e.length - 1]
                },
                isReady: function() {
                    return this.isExhaustPresent() && this.getBasketUpdatedEventHistory()
                },
                getState: function(e) {
                    var t = e || this.getBasketUpdatedEventHistory();
                    if (!t) return !1;
                    var o = UNIQODO.deepFind(t, "basket.products.items", []);
                    return o = i._mapBasketItems(o), i._filterBasketItems(o)
                },
                initialize: (e = !1, function() {
                    e || (e = !0, a._triggerWaitForExhaust())
                }),
                _subscribeToExhaust: function() {
                    var t = this;
                    _exhaust.on("Basket.updated", UNIQODO.debounce(function(e) {
                        n.notify(r, t.getState(e))
                    }, 10), {
                        trigger_history: !1
                    })
                },
                _triggerWaitForExhaust: function() {
                    if (this.isExhaustPresent()) return this._subscribeToExhaust(), this._awaitExhaustUpdatedEventReadyState();
                    var e = this;
                    UNIQODO.retry("await-exhaust-present", function() {
                        e._subscribeToExhaust(), e._awaitExhaustUpdatedEventReadyState()
                    }, function() {
                        return e.isExhaustPresent()
                    }, 20, 1e3)
                },
                _awaitExhaustUpdatedEventReadyState: function() {
                    var e = this;
                    UNIQODO.retry("await-exhaust-ready", function() {
                        n.notify(o, e.getState())
                    }, function() {
                        return e.isReady()
                    }, 20, 1e3)
                }
            };
        return {
            isReady: a.isReady.bind(a),
            subscribe: function(e, t) {
                a.initialize(), n.subscribe(e), t && a.isReady() && n.notifyOne(o, a.getState(), e)
            },
            unsubscribe: n.unsubscribe.bind(n),
            getState: function() {
                if (a.isReady()) return a.getState()
            }
        }
    }(),
    function() {
        if (/(www\.)?bt\.com/.test(location.hostname) && "MDs3gkR31AjqmNzzEhYyXOeWGiLSWGPaGYxCaa3NQQc" === UNIQODO.getItem("_uqd_cvs")) {
            var o = document.createElement("div");
            o.style = "position: fixed; bottom: 0; width: 100%; background: black; text-align: center; color: #4AF626;", UNIQODO.basketObserver.subscribe(function(e) {
                o.innerHTML = "", UNIQODO.map(e.state, function(e) {
                    var t = document.createElement("div");
                    t.innerHTML = e.productId + " : " + e.productName, o.appendChild(t)
                }), "ready" === e.event && document.body.appendChild(o)
            })
        }
    }();