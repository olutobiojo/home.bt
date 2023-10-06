/*!
 * Dante GF widget JS
 * 
 * @version 1.0
 * @author Venkata Narsaiah Bommanaboina
 * @require jquery 1.8+
 * @license GPL v3
 */
var DanteGF = DanteGF || {},
    FooterEncoder = FooterEncoder || {};
jqdgf = (typeof jqdgf != "undefined") ? jqdgf : $;
try {
    jqdgf.ajaxPrefilter("script", function(options) {
        options.async = true;
        options.cache = true
    })
} catch (e) {}
FooterEncoder = function() {
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
        encodeHtml: html.encode,
        decodeHtml: html.decode
    }
}();
var portalcookie = {
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
DanteGF = function() {
    var settings, defaults = {
        ghurl: "/ajaxapic?pn=btcom/nav/globalfooter&site=btcom",
        displayCountry: "Y",
        country: "UK",
        countryChangeURL: "http://www.globalservices.bt.com/LanguageUL.do?method=VIEW",
        btHost: "http://home.bt.com",
        btSecureHost: "https://home.bt.com",
        btStaticAssetsHost: "//img01.bt.co.uk",
        static_resources_uri: "//img01.bt.co.uk/s/assets/210923",
        activePage: "",
        isPageResponsive: "",
        width: 1154,
        oldlogo: "/images/logo/BT_mark_4col_rev_59x36.png",
        newlogo: "/images/logo/logo-footer2018.png",
        rebrandLogo: "N",
        callback: function(options) {}
    };
    var footerhostprefix = {
        getfooterhostprefix: function() {
            var host = ("https:" === document.location.protocol) ? settings.btSecureHost : settings.btHost;
            return host
        }
    };
    var methods = {
        addGlobalFooter: function(data) {
            var host = ("https:" === document.location.protocol) ? settings.btSecureHost : settings.btHost;
            jqdgf("#bt-footer").append('<div class="bt-footer-footer-top"></div><div class="bt-footer-footer-bottom"></div>');
            jqdgf("#bt-footer .bt-footer-footer-top").append('<div class="bt-footer-top-main"><div class="bt-footer-inner-section"><ul class="top-footer-ul"></ul></div></div>');
            jqdgf("#bt-footer .bt-footer-footer-top").append('<div id="bt-footer-footer-top-more" class="bt-footer-top-more"><div class="bt-footer-inner-section"></div></div>');
            jqdgf("#bt-footer .bt-footer-footer-bottom").append('<div class="bt-footer-inner-section"><ul class="bottom-footer-ul"></ul></div>');
            if (settings.width > 994) {
                jqdgf("head").append("<style>@media only screen and (max-width: 1199px) {  #bt-footer .bt-footer-inner-section {    max-width: 994px;  }}</style>")
            }
            if (settings.width < 1154) {
                jqdgf("#bt-footer .bt-footer-inner-section").css("max-width", settings.width + "px")
            }
            rebrandLogo = settings.rebrandLogo;
            oldlogo = settings.oldlogo;
            newlogo = settings.newlogo;
            if (data.logo) {
                jqdgf.each(data.logo, function(key, val) {
                    rebrandLogo = val.rebrandlogo;
                    oldlogo = val.oldlogo;
                    newlogo = val.newlogo
                })
            }
            jqdgf.each(data.level1, function(key, val) {
                if (val.url.match(/^\//)) {
                    if (val.url.match(/^\/\//)) {
                        var url = document.location.protocol + val.url
                    } else {
                        var url = footerhostprefix.getfooterhostprefix() + val.url
                    }
                } else {
                    var url = val.url
                }
                var decodedhtml = FooterEncoder.decodeHtml(val.htmlSnippet);
                var snippetRegex1 = /(href)=\"(\/\/)/g;
                decodedhtml = decodedhtml.replace(snippetRegex1, '$1 = "' + document.location.protocol + "//");
                var snippetRegex = /(href)=\"(\/)/g;
                decodedhtml = decodedhtml.replace(snippetRegex, '$1 = "' + footerhostprefix.getfooterhostprefix() + "/");
                if (val.style === "footer-more-sites") {
                    var footeritem = '<li> <a href="#bt-footer-footer-top-more" class="bt-footer-more-button" data-toggle="collapse" aria-expanded="false" aria-controls="more">' + val.title + '<i class="bt-footer-chevron dante-icon-chevron-down" aria-hidden="true"></i> </a> </li>';
                    jqdgf("#bt-footer>.bt-footer-footer-top .bt-footer-top-more .bt-footer-inner-section").append(decodedhtml)
                } else {
                    if (val.style === "footer-global-business") {
                        if (settings.displayCountry === "Y") {
                            var footeritem = '<li><a href="' + val.url + '">' + val.title + '</a><span class="bt-footer-region"> <span class="bt-footer-separator">|</span> <span class="bt-footer-region-selector"> <a href="' + settings.countryChangeURL + '"> ' + settings.country + ' </a> <i class="dante-icon-chevron-right" aria-hidden="true"></i> </span> </span></li>'
                        } else {
                            var footeritem = '<li><a href="' + val.url + '">' + val.title + "</a></li>"
                        }
                    } else {
                        var footeritem = '<li><a href="' + val.url + '">' + val.title + "</a></li>"
                    }
                }
                jqdgf("#bt-footer>.bt-footer-footer-top .bt-footer-top-main .bt-footer-inner-section ul.top-footer-ul").append(footeritem)
            });
            jqdgf.each(data.level2, function(key, val) {
                if (val.url.match(/^\//)) {
                    if (val.url.match(/^\/\//)) {
                        var url = document.location.protocol + val.url
                    } else {
                        var url = footerhostprefix.getfooterhostprefix() + val.url
                    }
                } else {
                    var url = val.url
                }
                var decodedhtml = FooterEncoder.decodeHtml(val.htmlSnippet);
                var snippetRegex1 = /(href)=\"(\/\/)/g;
                decodedhtml = decodedhtml.replace(snippetRegex1, '$1 = "' + document.location.protocol + "//");
                var snippetRegex = /(href)=\"(\/)/g;
                decodedhtml = decodedhtml.replace(snippetRegex, '$1 = "' + footerhostprefix.getfooterhostprefix() + "/");
                var footeritem = '<li><a href="' + val.url + '">' + val.title + "</a></li>";
                jqdgf("#bt-footer>.bt-footer-footer-bottom .bt-footer-inner-section ul.bottom-footer-ul").append(footeritem)
            });
            if (portalcookie.getCookieStatus("c_nrb") || rebrandLogo === "Y") {
                jqdgf("#bt-footer>.bt-footer-footer-bottom .bt-footer-inner-section ul.bottom-footer-ul").append('<li class="bt-footer-copyright"> <div class="bt-footer-float-left"> &copy; British Telecommunications plc <span class="bt-footer-copyright-year"></span> </div> <img class="bt-footer-bt-logo" src="' + settings.static_resources_uri + newlogo + '" alt="BT logo" /> </li>')
            } else {
                jqdgf("#bt-footer>.bt-footer-footer-bottom .bt-footer-inner-section ul.bottom-footer-ul").append('<li class="bt-footer-copyright"> <div class="bt-footer-float-left"> &copy; British Telecommunications plc <span class="bt-footer-copyright-year"></span> </div> <img class="bt-footer-bt-logo" src="' + settings.static_resources_uri + oldlogo + '" alt="BT logo" /> </li>')
            }
            if (!jqdgf("script[src*='" + settings.static_resources_uri + "/js/responsive-footer.min.js']").length) {
                jqdgf("#bt-footer").append('<script src="' + settings.static_resources_uri + '/js/responsive-footer.min.js"><\/script>')
            }
            $("#bt-footer .bt-footer-footer-top .bt-footer-top-main a").click(function() {
                $(":focus").blur();
                $("#bt-footer").blur()
            });
            $("#bt-footer .bt-footer-footer-bottom ul>li a").click(function() {
                $(":focus").blur();
                $("#bt-footer").blur()
            });
            $("#bt-footer .bt-footer-footer-top .bt-footer-top-more ul>li a").click(function() {
                $(":focus").blur();
                $("#bt-footer").blur()
            })
        }
    };
    return {
        init: function(options) {
            settings = jqdgf.extend(defaults, options);
            var host = ("https:" === document.location.protocol) ? settings.btSecureHost : settings.btHost;
            settings.ghurl = host + settings.ghurl;
            jqdgf.ajax({
                url: settings.ghurl,
                type: "GET",
                cache: true,
                dataType: "jsonp",
                jsonp: "callback",
                jsonpCallback: "loadgf",
                error: function(xhr, status, error) {
                    console.log(status + "::" + error)
                },
                success: function(data) {
                    DanteGF.loadgf(data)
                }
            });
            if (!jqdgf("meta[name*='viewport']").length) {
                jqdgf("head").append('<meta name="viewport" content="width=device-width, initial-scale=1">')
            }
            if (!jqdgf("link[href*='" + settings.static_resources_uri + "/css/responsive-footer.css']").length) {
                jqdgf("head").append('<link rel="stylesheet" href="' + settings.static_resources_uri + '/css/responsive-footer.css" type="text/css" />')
            }
        },
        loadgf: function(data) {
            settings = jqdgf.extend(settings, data.config);
            DanteGF.settings = settings;
            methods.addGlobalFooter(data.footer);
            settings.callback(settings)
        },
        getOptions: function() {
            return settings ? settings : defaults
        }
    }
}();