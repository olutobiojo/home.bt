if (customView !== "btmail") {
    setUsernameFromCookie()
}
$(function() {
    if (!navigator.cookieEnabled) {
        reportErrors("cookies-disabled");
        displayerrors(1)
    }
    var smtryno = $.cookie("SMTRYNO"),
        target = $(".smtarget input").val(),
        smtarget = Encoder.getURLParameter("TARGET"),
        smAuthReason = Encoder.getURLParameter("SMAUTHREASON"),
        smusrmsg = $.cookie("SMUSRMSG");
    if (smusrmsg) {
        if ($.cookie("UserId")) {
            expireCookie("UserId")
        }
        var decodedHTMLStr = "";
        var j = "";
        try {
            var hexDecodedStr = "";
            for (var i = 0; i < smusrmsg.length; i += 2) {
                hexDecodedStr += "%" + smusrmsg.substr(i, 2)
            }
            decodedHTMLStr = decodeURIComponent(hexDecodedStr);
            j = eval("(" + decodedHTMLStr + ")")
        } catch (e) {
            j = ""
        }
        if (j !== "" && j.msg !== "") {
            switch (j.code) {
                case 706051101:
                    var ptrn = /Invalid credential./;
                    if (ptrn.test(j.msg)) {
                        if (smAuthReason && smAuthReason === "24") {
                            displayerrors(3);
                            reportErrors(j.code, j.msg)
                        } else {
                            displayerrors(2);
                            reportErrors(j.code, j.msg)
                        }
                    }
                    break;
                case 0:
                    displayerrors(2);
                    reportErrors(j.code, j.msg);
                    break;
                case 707063353:
                    displayerrors(4);
                    reportErrors(j.code, j.msg);
                    break;
                case 707061155:
                    displayerrors(4);
                    reportErrors(j.code, j.msg);
                    break;
                case 707063354:
                    displayerrors(3);
                    reportErrors(j.code, j.msg);
                    break;
                case 707039984:
                    displayerrors(4);
                    reportErrors(j.code, j.msg);
                    break;
                case 707063063:
                    displayerrors(4);
                    reportErrors(j.code, j.msg);
                    break;
                case 707073362:
                    displayerrors(5);
                    reportErrors(j.code, j.msg);
                    break;
                default:
                    displayerrors(6);
                    reportErrors(j.code, j.msg)
            }
        }
    } else {
        if (smtryno !== null && smtryno !== "" && smtarget !== null && smtarget !== "") {
            if (smAuthReason !== null && smAuthReason === "24") {
                $(".lock-error").css("display", "block");
                var domainName = ".bt.com";
                document.cookie = "UserId=;DOMAIN=" + domainName + ";path=/";
                $(".softloguname").text("");
                $(".loginbody").removeClass("softlogin");
                if (typeof emitToExhaust === "function") {
                    emitToExhaust("Error.occurred", {
                        error: {
                            type: "validation",
                            code: "Max invalid attempts",
                            name: "Account lock",
                            label: "You have had too many unsuccessful attempts to login. You have been temporarily locked out. Please try after 15 minutes.",
                            is_nce: true,
                            attributes: {}
                        }
                    })
                }
            } else {
                if (smAuthReason) {
                    $(".generic-error").css("display", "block");
                    var domainName = ".bt.com";
                    document.cookie = "UserId=;DOMAIN=" + domainName + ";path=/";
                    $(".softloguname").text("");
                    $(".loginbody").removeClass("softlogin");
                    if (loginpagetype === "ucl") {
                        if (s_cid) {
                            $(".ise-login-error").show();
                            if (s_cid === "S3SKYBB") {
                                $(".ise-login-error a").attr("href", "http://www.bt.com/renew-my-bb-contract?s_cid=" + full_s_cid)
                            } else {
                                if (s_cid === "S3TV") {
                                    $(".ise-login-error a").attr("href", "http://www.bt.com/renew-my-tv-contract?s_cid=" + full_s_cid)
                                } else {
                                    if (s_cid === "S3APPBB") {
                                        $(".ise-login-error h3").text("Looking for BT Sport Pack on BT TV?");
                                        $(".ise-login-error p").text("See our BT TV packages >");
                                        $(".ise-login-error a").attr("href", "http://www.productsandservices.bt.com/products/add-tv?s_cid=" + full_s_cid)
                                    }
                                }
                            }
                        }
                    }
                    if (typeof emitToExhaust === "function") {
                        emitToExhaust("Error.occurred", {
                            error: {
                                type: "validation",
                                code: "Invalid credential",
                                name: "Invalid-Username-Or-Password",
                                label: "Please check you entered your username and password correctly and try again",
                                is_nce: true,
                                attributes: {}
                            }
                        })
                    }
                }
            }
        }
    }
    if (Encoder.getURLParameter("TARGET")) {
        var redirectURL = "/";
        if (Encoder.getURLParameter("TARGET").indexOf("/secure/loginforward") !== -1 || Encoder.getURLParameter("TARGET").indexOf("/secure/interstitial") !== -1) {
            var tempredirectURL = Encoder.getURLParameter("TARGET").substr(4);
            if (tempredirectURL.indexOf("SAMLRequest") !== -1) {
                redirectURL = (RegExp("redirectURL=(.+)(&|$)").exec(tempredirectURL) || [, ""])[1].replace(/[$]/g, "")
            } else {
                redirectURL = decodeURIComponent((RegExp("redirectURL=(.+)(&|$)").exec(tempredirectURL) || [, ""])[1]).replace(/[$]/g, "")
            }
        } else {
            redirectURL = Encoder.getURLParameter("TARGET").substr(4) + location.hash
        }
        if (redirectURL.indexOf("/secure/watchtv") !== -1 || redirectURL.indexOf("/secure/settings") !== -1) {
            target = $("." + loginpagetype + "lb input[name='tveloginforward']").val() + "&redirectURL=" + Encoder.encodeUrl(redirectURL)
        } else {
            target = $("." + loginpagetype + "lb input[name='loginforward']").val() + "&redirectURL=" + Encoder.encodeUrl(redirectURL)
        }
        if (loginpagetype === "ucl") {
            if (Encoder.encodeUrl(redirectURL).indexOf("s_cid") > -1) {
                target = $("." + loginpagetype + "lb input[name='loginforward']").val() + "&redirectURL=" + Encoder.encodeUrl(redirectURL) + "&content=ise"
            } else {
                target = $("." + loginpagetype + "lb input[name='loginforward']").val() + "&redirectURL=" + Encoder.encodeUrl(redirectURL) + "%3Fs_cid=" + full_s_cid + "&content=ise"
            }
        }
        $(".smtarget input").val(target)
    }
});

function reportErrors(errorCode, errorMsg) {
    var settings = {
        url: "/config/logme?code=" + errorCode + "&msg=" + errorMsg,
        method: "GET",
        cache: false,
        error: function(e, t, n) {},
        success: function() {}
    };
    $.ajax(settings);
    if (typeof emitToExhaust === "function") {
        emitToExhaust("Error.occurred", {
            error: {
                type: "validation",
                code: errorCode,
                name: errorMsg,
                label: "Please check you entered your username and password correctly and try again",
                is_nce: true,
                attributes: {}
            }
        })
    }
}

function displayerrors(errorid) {
    $("#noscripterrorcontainer").removeClass("showslot");
    $("#noscripterrorcontainer").addClass("hideslot");
    $("#errorcontainer").removeClass("hideslot");
    $("#errorcontainer").addClass("showslot");
    $("#loginpageerror" + errorid).removeClass("hideslot");
    $("#loginpageerror" + errorid).addClass("showslot");
    expireCookie("SMUSRMSG")
}

function expireCookie(cookieName) {
    var cookieExist = $.cookie(cookieName);
    if (cookieExist) {
        $.cookie(cookieName, "", {
            domain: ".bt.com",
            path: "/",
            expires: -1
        })
    }
}

function setUsernameFromCookie() {
    var cUserName = $.cookie("UserId");
    if (cUserName) {
        $(".loginbody").addClass("softlogin");
        $(".softloguname").text(cUserName);
        $(".checkbox").prop("checked", true);
        $("input[name='USER']").attr("value", cUserName)
    }
}

function checkPwdEnc(pVal) {
    try {
        var pattern = /^{"Password":/;
        var result = pattern.test(pVal);
        if (result) {
            var jsonPwd = JSON.parse(pVal);
            if (jsonPwd.Password) {
                document.getElementById("nafmpwd").value = "";
                return false
            }
        }
    } catch (e) {}
    return true
}

function hexEncode(r) {
    var n = 8,
        o = 0;
    return function(r) {
        for (var n = o ? "0123456789ABCDEF" : "0123456789abcdef", t = "", e = 0; e < 4 * r.length; e++) {
            t += n.charAt(r[e >> 2] >> 8 * (3 - e % 4) + 4 & 15) + n.charAt(r[e >> 2] >> 8 * (3 - e % 4) & 15)
        }
        return t
    }(function(r) {
        for (var o = Array(), t = (1 << n) - 1, e = 0; e < r.length * n; e += n) {
            o[e >> 5] |= (r.charCodeAt(e / n) & t) << 24 - e % 32
        }
        return o
    }(r = function(r) {
        r = r.replace(/\r\n/g, "\n");
        for (var n = "", o = 0; o < r.length; o++) {
            var t = r.charCodeAt(o);
            t < 128 ? n += String.fromCharCode(t) : t > 127 && t < 2048 ? (n += String.fromCharCode(t >> 6 | 192), n += String.fromCharCode(63 & t | 128)) : (n += String.fromCharCode(t >> 12 | 224), n += String.fromCharCode(t >> 6 & 63 | 128), n += String.fromCharCode(63 & t | 128))
        }
        return n
    }(r)))
}
var submitcount = 0;
$("form").submit(function() {
    var $user = $(this).find("input[name='USER']"),
        $pwd = $(this).find("input[name='NAFMPASSWORD']"),
        $smpwd = $(this).find("input[name='PASSWORD']"),
        $reenteruser = $(this).find(".reenterusername"),
        $reenterpwd = $(this).find(".reenterusername.pass"),
        $softlogin = $(this).find(".softloguname"),
        deftext = $(this).find("input[name='USER']").attr("data-value");
    deftext = deftext.toLowerCase();
    $user.val($user.val().toLowerCase());
    var info = {};
    var strval = $pwd.val();
    var isShim = document.frm_login.action;
    if (strval && isShim.indexOf("shim.fcc") > 0) {
        if (typeof hexEncode === "function") {
            info.Password = hexEncode(strval)
        }
        $smpwd.val(JSON.stringify(info))
    } else {
        $smpwd.val(strval)
    }
    var username = $user.val(),
        password = $pwd.val();
    if ($softlogin.text() !== "" && $softlogin.text() !== "null") {
        $user.attr("value", $softlogin.text().toLowerCase());
        username = $user.val()
    }
    if (!(submitcount === 0)) {
        return false
    } else {
        if (((username === "") || (username === deftext)) && (password === "")) {
            $reenteruser.css("display", "block");
            $user.addClass("errorbox");
            $reenterpwd.css("display", "block");
            $pwd.addClass("errorbox");
            $("input[name='USER']").val("");
            $(".generic-error").css("display", "none");
            $(this).find(".username").css("display", "none");
            $(this).find(".pswd").css("display", "none");
            return false
        } else {
            if (((username === "") || (username === deftext) || (!validEmail(username))) && (password !== "")) {
                var enteredValue = $reenterpwd.val();
                $reenteruser.css("display", "block");
                $pwd.val(strval);
                $user.addClass("errorbox");
                $pwd.removeClass("errorbox");
                $reenterpwd.css("display", "none");
                $(".generic-error").css("display", "none");
                $(".email-domain-error").css("display", "block");
                $(this).find(".username").css("display", "none");
                $(this).find(".pswd").css("display", "inline");
                return false
            } else {
                if ((password === "") && (username !== "")) {
                    var enteredValue = $reenteruser.val();
                    $reenteruser.css("display", "none");
                    $reenterpwd.css("display", "block");
                    $pwd.addClass("errorbox");
                    $user.removeClass("errorbox");
                    $(".generic-error").css("display", "none");
                    $(this).find(".pswd").css("display", "none");
                    $(this).find(".username").css("display", "block");
                    return false
                } else {
                    if (/[<,>,',",/]+/.test(username) && /[<,>,',",/]+/.test(password)) {
                        HtmlEncode(username);
                        HtmlEncode(password);
                        $user.addClass("errorbox");
                        $pwd.addClass("errorbox");
                        return false
                    }
                    if (!checkPwdEnc($pwd.val())) {
                        return false
                    }
                    submitcount++
                }
            }
        }
    }
    setRememberMeCookiees($(this));
    return true
});

function validateEmailDomain() {
    var safb2c = $.cookie("SAFB2C");
    if (safb2c && "I4eL69ma" === safb2c) {
        var username = $("#inputIdEmail").val();
        var domainStart = username.indexOf("@");
        if (domainStart != -1) {
            var emaildomain = username.substring(username.indexOf("@"));
            if (emaildomain) {
                var domains = ["@btinternet.com", "@btopenworld.com", "@talk21.com"];
                for (var i = 0; i < domains.length; i++) {
                    if (domains[i].includes(emaildomain)) {
                        $(".email-domain-error").css("display", "none");
                        return true
                    }
                }
                $(".email-domain-error").css("display", "block");
                $(".generic-error").css("display", "none");
                $("#errorcontainer").removeClass("showslot");
                $("#errorcontainer").addClass("hideslot")
            }
        }
        return false
    } else {
        return true
    }
}

function validEmail(emailaddr) {
    var emailregex = "";
    var safb2c = $.cookie("SAFB2C");
    if (safb2c && "I4eL69ma" === safb2c) {
        emailregex = /^((([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+(\.([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+)*)|((\x22)((((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(([\x01-\x08\x0b\x0c\x0e-\x1f\x7f]|\x21|[\x23-\x5b]|[\x5d-\x7e]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(\\([\x01-\x09\x0b\x0c\x0d-\x7f]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))))*(((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(\x22)))+@(btinternet.com|btopenworld.com|talk21.com)$/
    } else {
        emailregex = /^((([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+(\.([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+)*)|((\x22)((((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(([\x01-\x08\x0b\x0c\x0e-\x1f\x7f]|\x21|[\x23-\x5b]|[\x5d-\x7e]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(\\([\x01-\x09\x0b\x0c\x0d-\x7f]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))))*(((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(\x22)))@((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?$/
    }
    if (customView === "btmail") {
        return emailregex.test(emailaddr)
    } else {
        return true
    }
}

function setRememberMeCookiees($form) {
    var userNameVal = $form.find("input[name='USER']").val();
    var cookieExpiry = $form.find("input[name='cookieExpp']").val();
    var $rememberMe = $form.find("input[name='rememberMe']");
    var domainName = ".bt.com";
    if (customView === "btmail") {
        userNameVal = CryptoJS.SHA256(userNameVal).toString();
        if ($rememberMe !== "undefined" && $rememberMe.prop("checked")) {
            $.cookie("UserId", userNameVal, {
                domain: domainName,
                path: "/"
            })
        }
    } else {
        if ($rememberMe !== "undefined" && $rememberMe.prop("checked")) {
            var expiryDateStr;
            expiryDate = new Date();
            expiryDate.toString().toLowerCase();
            msec = Date.parse(expiryDate);
            expiryDays = cookieExpiry;
            expiryDate.setTime(msec + expiryDays * 24 * 60 * 60 * 1000);
            expiryDateStr = expiryDate.toUTCString();
            document.cookie = "UserId=" + userNameVal + ";DOMAIN=" + domainName + ";EXPIRES=" + expiryDateStr + ";path=/"
        } else {
            $.cookie("UserId", "YES", {
                domain: domainName,
                path: "/",
                expires: -1
            })
        }
    }
    return true
}
$(document).ready(function() {
    if (navigator.userAgent.match(/iPad/i)) {
        $(".loginbody").addClass("ipadtabsafariht");
        $(".loginbody").removeClass("tabsafariht")
    }
    var safb2c = $.cookie("SAFB2C");
    if (safb2c && "I4eL69ma" === safb2c) {
        document.getElementById("usrnamelbl").innerHTML = "Email address";
        document.getElementById("loginpageerror2").innerHTML = "Please check you entered your email address and password correctly and try again. If you need help remembering your password you can use the links below.";
        document.getElementById("mybtlinkmsg").style.display = "block"
    }
    $(".notyoulog").click(function() {
        var domainName = ".bt.com";
        document.cookie = "UserId=;DOMAIN=" + domainName + ";path=/";
        $(".softloguname").text("");
        $(".loginbody").removeClass("softlogin");
        var deftext2 = $(this).parents("form").find("input[name='USER']").attr("data-value");
        $("input[name='USER']").attr("value", deftext2);
        $("input[name='PASSWORD']").attr("value", "")
    });
    $(".forgotPwd,.forgotUN").click(function() {
        var forgotPwdUrl = $(this).attr("href");
        forgotPwdUrl = forgotPwdUrl + "&redirectURL=" + Encoder.encodeUrl(Encoder.decodeUrl(Encoder.getURLParameter("TARGET").substr(4))) + "&backURL=" + Encoder.encodeUrl(Encoder.decodeUrl(Encoder.getURLParameter("TARGET").substr(4)));
        $(this).attr("href", forgotPwdUrl)
    });
    $(".loginbtn").click(function() {
        var signUpUrl = $(this).attr("href");
        signUpUrl = signUpUrl + "&redirectURL=" + Encoder.encodeUrl(Encoder.decodeUrl(Encoder.getURLParameter("TARGET").substr(4)));
        $(".loginbtn, .signuplink").attr("href", signUpUrl)
    });
    $(".tvelb .user, .tvelb .password").click(function() {
        $(this).addClass("onfield")
    });
    $("#emailkeepmeloggedin").click(function() {
        var email_sp = $.cookie("EMAIL_SP");
        if (email_sp && "NY" === email_sp) {
            var ischecked = $("input[id='emailkeepmeloggedin']").is(":checked");
            if (ischecked) {
                $(".error-messsage").css("display", "block")
            } else {
                $(".error-messsage").css("display", "none")
            }
        } else {
            $(".error-messsage").css("display", "none")
        }
    })
});