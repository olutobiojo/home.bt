/*!
 * Dante GH widget JS
 * 
 * @version 1.0
 * @author Venkata Narsaiah Bommanaboina
 * @require jquery 1.8+
 * @license GPL v3
 */
var DanteNewGH = DanteNewGH || {},
    HeaderEncoder = HeaderEncoder || {};
jqdngh = (typeof jqdngh != "undefined") ? jqdngh : $;
try {
    jqdngh.ajaxPrefilter("script", function(options) {
        options.async = true;
        options.cache = true
    })
} catch (e) {}
HeaderEncoder = function() {
    var url = {
        encode: function(string) {
            return string.replace(/./g, function(chr, index) {
                return chr.match(/[\w\d]/) ? chr : "%" + chr.charCodeAt(0).toString(16).toUpperCase()
            })
        },
        decode: function(string) {
            return string.replace(/%[0-9A-Fa-f]{2}/g, function(text, index) {
                return String.fromCharCode(parseInt(text.substring(1), 16))
            })
        }
    };
    var html = {
        encode: function(string) {
            return string.replace(/./g, function(chr, index) {
                return chr.match(/[\w\d]/) ? chr : "&#" + chr.charCodeAt(0) + ";"
            })
        },
        decode: function(string) {
            return string.replace(/&#[0-9]+;/g, function(text, index) {
                return String.fromCharCode(text.match(/[0-9]+/)[0])
            })
        }
    };
    return {
        encodeUrl: url.encode,
        decodeUrl: url.decode,
        encodeHtml: html.encode,
        decodeHtml: html.decode
    }
}();
var portaluser = {
    getCookie: function(cookiename) {
        var cookiestring = "" + document.cookie;
        var index1 = cookiestring.indexOf(cookiename);
        if (index1 == -1 || cookiename == "") {
            return ""
        }
        var index2 = cookiestring.indexOf(";", index1);
        if (index2 == -1) {
            index2 = cookiestring.length
        }
        return unescape(cookiestring.substring(index1 + cookiename.length + 1, index2))
    },
    getUserStatus: function() {
        var smSessionValue = portaluser.getCookie("SMSESSION");
        if (smSessionValue == null || smSessionValue == "" || smSessionValue == "LOGGEDOFF") {
            return "loggedout"
        } else {
            return "loggedin"
        }
    },
    getCookieStatus: function(c_name) {
        var flag = false;
        var i, x, ARRcookies = document.cookie.split(";");
        for (i = 0; i < ARRcookies.length; i++) {
            x = ARRcookies[i].substr(0, ARRcookies[i].indexOf("="));
            x = x.replace(/^\s+|\s+$/g, "");
            if (x == c_name) {
                flag = true;
                return flag
            }
        }
        return flag
    }
};
DanteNewGH = function() {
    var settings, defaults = {
        ghurl: "/ajaxapic?pn=btcom/nav/globalheader&site=btcom",
        searchPageURL: "//home.bt.com/ss/Satellite",
        siteArea: "",
        displayGlobalMenu: "Y",
        displayGlobalSearch: "Y",
        displayMobileSearch: "N",
        displayCountry: "Y",
        externalLogoutPageURL: "",
        loginPageURL: "https://home.bt.com/login/loginform",
        logoutPageURL: "https://signin1.bt.com/btapps/logout?external_target=",
        logoutAppURL: "https://auth.bt.com/apps/logout?redirectURI=",
        country: "UK",
        countryChangeURL: "http://www.globalservices.bt.com/LanguageUL.do?method=VIEW",
        saFlag: "N",
        btLogoHost: "https://www.bt.com/",
        btLogoSecureHost: "https://www.bt.com/",
        btHost: "http://home.bt.com",
        btSecureHost: "https://home.bt.com",
        btsportSecureHost: "https://www.bt.com/sport",
        btStaticAssetsHost: "//img01.bt.co.uk",
        static_resources_uri: "//img01.bt.co.uk/s/assets/210923",
        activePage: "",
        isPageResponsive: "",
        width: 1154,
        oldlogo: "/images/logo/BT_mark_4col_rev_80x46.png",
        newlogo: "/images/logo/logo-2018.svg",
        rebrandLogo: "N",
        callback: function(options) {}
    };
    var headerhostprefix = {
        getheaderhostprefix: function() {
            var host = ("https:" === document.location.protocol) ? settings.btSecureHost : settings.btHost;
            return host
        }
    };
    var methods = {
        addGlobalHeader: function(data) {
            var host = ("https:" === document.location.protocol) ? settings.btLogoSecureHost : settings.btLogoHost;
            searchhtml = "";
            var userStatus = portaluser.getUserStatus();
            jqdngh.each(data.globalsearch, function(key, val) {
                searchhtml = searchhtml + HeaderEncoder.decodeHtml(val.htmlSnippet)
            });
            rebrandLogo = settings.rebrandLogo;
            oldlogo = settings.oldlogo;
            newlogo = settings.newlogo;
            if (data.logo) {
                jqdngh.each(data.logo, function(key, val) {
                    rebrandLogo = val.rebrandlogo;
                    oldlogo = val.oldlogo;
                    newlogo = val.newlogo
                })
            }
            searchhtml = searchhtml + "";
            jqdngh("#bt-navbar").append('<div id="skip"><a href="#maincontent">Skip Navigation</a></div><div class="full-navbar"><div class="bt-navbar-universal-nav" role="navigation" aria-label="Global"></div><div class="bt-navbar-menu-container bt-navbar-global-nav" role="navigation" aria-label="Main Navigation"><div class="bt-navbar-inner-section"><div class="bt-navbar-menu bt-navbar-menu-main"></div></div></div></div><div id="maincontent"></div>');
            jqdngh("#bt-navbar>.full-navbar .bt-navbar-universal-nav").append('<div class="bt-navbar-inner-section"><ul class="bt-navbar-universal-nav-menu-items"></ul></div>');
            jqdngh("#bt-navbar>.full-navbar  .bt-navbar-global-nav .bt-navbar-inner-section").append('<!-- more menu items --> <div id="bt-navbar-global-nav-more" class="collapse bt-navabar-menu bt-navbar-menu-more"> <div class="bt-navbar-top-menu"> <ul></ul> </div> </div>');
            if (settings.displayCountry === "Y") {
                jqdngh("#bt-navbar>.full-navbar .bt-navbar-universal-nav .bt-navbar-inner-section").append('<span class="bt-navbar-universal-nav-separator">|</span> <span class="bt-navbar-universal-nav-region-selector"> <a href="' + settings.countryChangeURL + '" > ' + settings.country + ' </a> <i class="dante-icon-chevron-right" aria-hidden="true"></i> </span>')
            }
            if (portaluser.getCookieStatus("c_nrb") || rebrandLogo === "Y") {
                jqdngh("#bt-navbar>.full-navbar  .bt-navbar-global-nav .bt-navbar-inner-section .bt-navbar-menu-main").append('<div class="bt-navbar-top-menu bt-navbar-left-menu"><a href="' + host + '"><img class="bt-navbar-bt-logo" src="' + settings.static_resources_uri + newlogo + '" alt="BT logo"/></a><ul class="left-nav-ul"></ul></div><div class="bt-navbar-top-menu bt-navbar-right-menu"><ul class="right-nav-ul"></ul></div>')
            } else {
                jqdngh("#bt-navbar>.full-navbar  .bt-navbar-global-nav .bt-navbar-inner-section .bt-navbar-menu-main").append('<div class="bt-navbar-top-menu bt-navbar-left-menu"><a href="' + host + '"><img class="bt-navbar-bt-logo" src="' + settings.static_resources_uri + oldlogo + '" alt="BT logo"/></a><ul class="left-nav-ul"></ul></div><div class="bt-navbar-top-menu bt-navbar-right-menu"><ul class="right-nav-ul"></ul></div>')
            }
            if (settings.width > 994) {
                jqdngh("head").append("<style>@media only screen and (max-width: 1199px) {  #bt-navbar .bt-navbar-inner-section {    max-width: 994px;  }}</style>")
            }
            if (settings.width < 1154) {
                jqdngh("#bt-navbar .bt-navbar-inner-section").css("max-width", settings.width + "px")
            }
            jqdngh.each(data.universal, function(key, val) {
                if (val.url.match(/^\//)) {
                    if (val.url.match(/^\/\//)) {
                        var url = document.location.protocol + val.url
                    } else {
                        var url = headerhostprefix.getheaderhostprefix() + val.url
                    }
                } else {
                    var url = val.url
                }
                var decodedhtml = HeaderEncoder.decodeHtml(val.htmlSnippet);
                var snippetRegex1 = /(href)=\"(\/\/)/g;
                decodedhtml = decodedhtml.replace(snippetRegex1, '$1 = "' + document.location.protocol + "//");
                var snippetRegex = /(href)=\"(\/)/g;
                decodedhtml = decodedhtml.replace(snippetRegex, '$1 = "' + headerhostprefix.getheaderhostprefix() + "/");
                var menuitem = '<li><a href="' + url + '">' + val.title + "</a>" + decodedhtml + "</li>";
                jqdngh("#bt-navbar>.full-navbar  .bt-navbar-universal-nav .bt-navbar-inner-section ul.bt-navbar-universal-nav-menu-items").append(menuitem)
            });
            jqdngh.each(data.global.left, function(key, val) {
                if (val.url.match(/^\//)) {
                    if (val.url.match(/^\/\//)) {
                        var url = document.location.protocol + val.url
                    } else {
                        var url = headerhostprefix.getheaderhostprefix() + val.url
                    }
                } else {
                    var url = val.url
                }
                var decodedhtml = HeaderEncoder.decodeHtml(val.htmlSnippet);
                var snippetRegex1 = /(href)=\"(\/\/)/g;
                decodedhtml = decodedhtml.replace(snippetRegex1, '$1 = "' + document.location.protocol + "//");
                var snippetRegex = /(href)=\"(\/)/g;
                decodedhtml = decodedhtml.replace(snippetRegex, '$1 = "' + headerhostprefix.getheaderhostprefix() + "/");
                if (val.style === settings.activePage) {
                    var menuitem = '<li><a href="' + url + '" aria-haspopup="true" aria-expanded="false"><span class="bt-navbar-selected">' + val.title + "</span></a>" + decodedhtml + "</li>"
                } else {
                    var menuitem = '<li><a href="' + url + '" aria-haspopup="true" aria-expanded="false"><span>' + val.title + "</span></a>" + decodedhtml + "</li>"
                }
                if (val.style === "sport") {
                    var sporttitle = val.title + " ";
                    if (val.style === settings.activePage) {
                        var menuitem = '<li><a href="' + url + '" aria-haspopup="true" aria-expanded="false"><span class="bt-navbar-selected">' + sporttitle + "</span></a>" + decodedhtml + "</li>"
                    } else {
                        var menuitem = '<li><a href="' + url + '" aria-haspopup="true" aria-expanded="false"><span>' + sporttitle + "</span></a>" + decodedhtml + "</li>"
                    }
                    jqdngh("#bt-navbar>.full-navbar  .bt-navbar-global-nav .bt-navbar-inner-section .bt-navbar-menu-main .bt-navbar-left-menu ul.left-nav-ul").append(menuitem);
                    if (userStatus === "loggedin") {
                        if (settings.externalLogoutPageURL !== "") {
                            var logoutlink = settings.logoutPageURL + HeaderEncoder.encodeUrl(HeaderEncoder.decodeUrl(settings.externalLogoutPageURL))
                        } else {
                            var logoutlink = settings.logoutPageURL + HeaderEncoder.encodeUrl(HeaderEncoder.decodeUrl(location.href))
                        }
                        jqdngh("#bt-navbar>.full-navbar  .bt-navbar-global-nav .bt-navbar-inner-section .bt-navbar-menu-main .bt-navbar-left-menu ul.left-nav-ul .bt-navbar-bt-sport-menu").append('<li class="bt-navbar-menu-col-16-percent"> <div><a class="bt-navbar-chevron" href=' + logoutlink + ">Log out</a></div> </li>")
                    } else {
                        if (location.href.indexOf("sport") !== -1) {
                            var logintarget = "TARGET=$SM$" + HeaderEncoder.encodeUrl(HeaderEncoder.decodeUrl(location.href))
                        } else {
                            var logintarget = "TARGET=$SM$" + HeaderEncoder.encodeUrl(HeaderEncoder.decodeUrl(settings.btsportSecureHost))
                        }
                        var view = "view=btsport";
                        var loginlink = settings.loginPageURL + "?" + view + "&" + logintarget
                    }
                } else {
                    jqdngh("#bt-navbar>.full-navbar  .bt-navbar-global-nav .bt-navbar-inner-section .bt-navbar-menu-main .bt-navbar-left-menu ul.left-nav-ul").append(menuitem)
                }
            });
            jqdngh.each(data.global.right, function(key, val) {
                if (val.url.match(/^\//)) {
                    if (val.url.match(/^\/\//)) {
                        var url = document.location.protocol + val.url
                    } else {
                        var url = headerhostprefix.getheaderhostprefix() + val.url
                    }
                } else {
                    var url = val.url
                }
                var decodedhtml = HeaderEncoder.decodeHtml(val.htmlSnippet);
                var snippetRegex1 = /(href)=\"(\/\/)/g;
                decodedhtml = decodedhtml.replace(snippetRegex1, '$1 = "' + document.location.protocol + "//");
                var snippetRegex = /(href)=\"(\/)/g;
                decodedhtml = decodedhtml.replace(snippetRegex, '$1 = "' + headerhostprefix.getheaderhostprefix() + "/");
                var userStatus = portaluser.getUserStatus();
                if (val.style === "mybt") {
                    var mybttitle = val.title + " ";
                    if (val.style === settings.activePage) {
                        var menuitem = '<li><a href="' + url + '"><span class="bt-navbar-selected">' + mybttitle + "</span></a>" + decodedhtml + "</li>"
                    } else {
                        var menuitem = '<li><a href="' + url + '"><span>' + mybttitle + "</span></a>" + decodedhtml + "</li>"
                    }
                    jqdngh("#bt-navbar>.full-navbar  .bt-navbar-global-nav .bt-navbar-inner-section .bt-navbar-menu-main .bt-navbar-right-menu ul.right-nav-ul").append(menuitem);
                    if (userStatus === "loggedin") {
                        if (settings.externalLogoutPageURL !== "") {
                            var logoutlink = settings.logoutPageURL + HeaderEncoder.encodeUrl(HeaderEncoder.decodeUrl(settings.externalLogoutPageURL))
                        } else {
                            var logoutlink = settings.logoutPageURL + HeaderEncoder.encodeUrl(HeaderEncoder.decodeUrl(location.href))
                        }
                        jqdngh("#bt-navbar>.full-navbar .bt-navbar-global-nav .bt-navbar-inner-section .bt-navbar-menu-main .bt-navbar-right-menu ul.right-nav-ul .bt-navbar-my-bt-menu").append('<li class="bt-navbar-menu-col-15-percent"><div class="bt-navbar-login-logout"><a class="bt-navbar-chevron" href="' + logoutlink + '">Log out</a></div></li>')
                    }
                } else {
                    if (val.style === settings.activePage) {
                        var menuitem = '<li><a href="' + url + '" aria-haspopup="true" aria-expanded="false"><span class="bt-navbar-selected">' + val.title + "</span></a>" + decodedhtml + "</li>"
                    } else {
                        var menuitem = '<li><a href="' + url + '" aria-haspopup="true" aria-expanded="false"><span>' + val.title + "</span></a>" + decodedhtml + "</li>"
                    }
                    jqdngh("#bt-navbar>.full-navbar  .bt-navbar-global-nav .bt-navbar-inner-section .bt-navbar-menu-main .bt-navbar-right-menu ul.right-nav-ul").append(menuitem)
                }
            });
            if (settings.externalLogoutPageURL !== "") {
                var logoutlink = settings.logoutPageURL + HeaderEncoder.encodeUrl(HeaderEncoder.decodeUrl(settings.externalLogoutPageURL))
            } else {
                var logoutlink = settings.logoutPageURL + HeaderEncoder.encodeUrl(HeaderEncoder.decodeUrl(location.href))
            }
            jqdngh("#bt-navbar>.full-navbar  .bt-navbar-global-nav .bt-navbar-inner-section .bt-navbar-menu-main .bt-navbar-right-menu ul.right-nav-ul").append('<li class="bt-navbar-logout-mobile"> <a href="' + logoutlink + '">Log out</a> </li>');
            jqdngh("#bt-navbar>.full-navbar  .bt-navbar-global-nav .bt-navbar-inner-section .bt-navbar-menu-main .bt-navbar-right-menu ul.right-nav-ul").append('<li class="bt-navbar-button bt-navbar-more-item"> <a class="bt-navbar-more" href="#bt-navbar-global-nav-more" data-toggle="collapse" aria-expanded="false" aria-controls="bt-navbar-global-nav-more"> <span>More</span> <i class="dante-icon-chevron-down" aria-hidden="true"></i> </a> </li>');
            if (!jqdngh("script[src*='" + settings.static_resources_uri + "/js/responsive-menu.min.js']").length) {
                jqdngh("#bt-navbar").append('<script src="' + settings.static_resources_uri + '/js/responsive-menu.min.js"><\/script>')
            }
            if (!jqdngh("script[src*='" + settings.static_resources_uri + "/js/global-search.min.js']").length) {
                jqdngh("#bt-navbar").append('<script src="' + settings.static_resources_uri + '/js/global-search.min.js"><\/script>')
            }
            $("#bt-navbar .bt-navbar-universal-nav a").click(function() {
                $(":focus").blur();
                $("#bt-navbar").blur()
            });
            $("#bt-navbar .bt-navbar-global-nav .bt-navbar-top-menu a img.bt-navbar-bt-logo").click(function() {
                $(":focus").blur();
                $("#bt-navbar").blur()
            });
            $("#bt-navbar .bt-navbar-global-nav .bt-navbar-top-menu > ul > li > a").click(function() {
                $(":focus").blur();
                $("#bt-navbar").blur()
            });
            $("#bt-navbar .bt-navbar-global-nav .bt-navbar-dropdown > li a").click(function() {
                $(":focus").blur();
                $("#bt-navbar").blur()
            })
        }
    };
    return {
        init: function(options) {
            settings = jqdngh.extend(defaults, options);
            var host = ("https:" === document.location.protocol) ? settings.btSecureHost : settings.btSecureHost;
            settings.ghurl = host + settings.ghurl;
            jqdngh.ajax({
                url: settings.ghurl,
                type: "GET",
                cache: true,
                dataType: "jsonp",
                jsonp: "callback",
                jsonpCallback: "loadgh",
                error: function(xhr, status, error) {
                    console.log(status + "::" + error)
                },
                success: function(data) {
                    DanteNewGH.loadgh(data)
                }
            });
            if (!jqdngh("meta[name*='viewport']").length) {
                jqdngh("head").append('<meta name="viewport" content="width=device-width, initial-scale=1">')
            }
            if (!jqdngh("link[href*='" + settings.static_resources_uri + "/css/responsive-menu.css']").length) {
                jqdngh("head").append('<link rel="stylesheet" href="' + settings.static_resources_uri + '/css/responsive-menu.css" type="text/css" />')
            }
        },
        loadgh: function(data) {
            settings = jqdngh.extend(settings, data.config);
            DanteNewGH.settings = settings;
            try {
                var t0 = performance.now();
                var trustarc_enabled_adobe_launch_urls = "//assets.adobedtm.com/launch-ENfdadf1bb09d848de85923e05be32e7d1.min.js";
                var container_urls = trustarc_enabled_adobe_launch_urls.split(",");
                var container_is_on_page = container_urls.some(function(url) {
                    return document.querySelector("script[src*='" + url + "']")
                });
                var t1 = performance.now();
                console.log("TrustArc adobe urls condition check execution took " + (t1 - t0) + " milliseconds.");
                if (!container_is_on_page) {
                    console.log("Display Dante Cookie Toolbar");
                    if (data.navigation.globalcookiepopup) {
                        jqdngh.each(data.navigation.globalcookiepopup, function(key, val) {
                            newglobalcookiepopup = val.newglobalcookiepopup;
                            if (newglobalcookiepopup === "Y") {
                                if (!jqdngh("script[id*='cookie-toolbar']").length) {
                                    jqdngh("head").prepend('<script id="cookie-toolbar" data-script-type="stable" data-version-client="0.0.1" src="https://www.productsandservices.bt.com/consumer/cookie/loader.js"><\/script>')
                                }
                            }
                        })
                    }
                } else {
                    console.log("Display TrustArc Cookie Toolbar")
                }
            } catch (e) {
                console.error(e)
            }
            methods.addGlobalHeader(data.navigation);
            settings.callback(settings)
        },
        getOptions: function() {
            return settings ? settings : defaults
        }
    }
}();