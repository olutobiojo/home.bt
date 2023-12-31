$("body").addClass("hasJS");
var bt = bt || {};
bt.parseUri = function parseUri(str) {
    var key = ["source", "protocol", "authority", "userInfo", "user", "password", "host", "port", "relative", "path", "directory", "file", "query", "anchor"],
        parser = /^(?:([^:\/?#]+):)?(?:\/\/((?:(([^:@]*)(?::([^:@]*))?)?@)?([^:\/?#]*)(?::(\d*))?))?((((?:[^?#\/]*\/)*)([^?#]*))(?:\?([^#]*))?(?:#(.*))?)/,
        tempArray = parser.exec(str.replace(/^\s+/, "").replace(/\s+$/, "")),
        uri = {},
        i = key.length;
    while (i) {
        i -= 1;
        uri[key[i]] = tempArray[i] || ""
    }
    if (uri.anchor > "") {
        uri.noAnchor = str.replace("#" + uri.anchor, "")
    } else {
        uri.noAnchor = str.replace(/#$/, "")
    }
    return uri
};
bt.ajaxRequest = function ajaxRequest(settings, callback) {
    var responseObj = {
            errorCode: 0,
            responseFull: undefined,
            responseFragment: undefined,
            status: undefined,
            statusText: undefined
        },
        type = "GET";
    if (typeof settings.url === "string" && settings.url > "") {
        if (typeof settings.type === "string" && settings.type > "") {
            type = settings.type
        }
        $.ajax({
            url: settings.url,
            type: type,
            complete: function(response, status) {
                responseObj.status = response.status;
                responseObj.statusText = response.statusText;
                if (status === "success") {
                    responseObj.responseFull = $(response.responseText);
                    if (settings.anchor !== undefined && settings.anchor > "") {
                        responseObj.responseFragment = responseObj.responseFull.find("#" + settings.anchor).clone()
                    } else {
                        responseObj.responseFragment = responseObj.responseFull.clone()
                    }
                } else {
                    responseObj.errorCode = 1
                }
                if (typeof callback === "function") {
                    callback(responseObj)
                }
            }
        })
    } else {
        responseObj.errorCode = 2;
        if (typeof callback === "function") {
            callback(responseObj)
        }
    }
};
bt.colorboxDefaults = {
    width: 750
};
bt.cxtHelp = function cxtHelp(cxtHelpSelector, cxtHelpContentSelector) {
    $(cxtHelpContentSelector).attr("aria-hidden", "true");
    $(cxtHelpSelector).bind("mouseenter.cxtHelp focusin.cxtHelp mouseleave.cxtHelp focusout.cxtHelp click.cxtHelp", function(e) {
        var eventType = e.type,
            currentTrigger = $(this),
            url = bt.parseUri(currentTrigger.attr("href")),
            helpNode = $("#" + url.anchor),
            offset = currentTrigger.offset(),
            topPos = offset.top - helpNode.height() - 20,
            leftPos = offset.left - 25,
            availSpace = $("#Page").width() - (offset.left - 50),
            helpClass = "",
            elemWidth = currentTrigger.width(),
            adjPosX;
        if (eventType === "mouseenter" || eventType === "focusin") {
            if (availSpace <= helpNode.width()) {
                leftPos = (offset.left) - 291;
                helpClass = "rightAlign";
                adjPosX = 255
            } else {
                adjPosX = 30;
                if ($(helpNode).hasClass("rightAlign")) {
                    $(helpNode).removeClass("rightAlign")
                }
                leftPos = (offset.left);
                helpClass = "leftAlign"
            }
            if (currentTrigger.closest("table").hasClass("complexTable")) {
                leftPos = offset.left - 20
            }
            $(helpNode).addClass(helpClass).css({
                display: "block",
                left: leftPos + 30 + (elemWidth / 2),
                top: topPos
            }).attr("aria-hidden", "false");
            $(this).trigger("click");
            $(currentTrigger).bind("mousemove.updateCtxHelp", function(e) {
                $(helpNode).css({
                    left: e.pageX - adjPosX,
                    top: e.pageY - $(helpNode).outerHeight() - 5
                })
            })
        } else {
            if (eventType === "mouseleave" || eventType === "focusout") {
                helpNode.css({
                    display: "none"
                }).attr("aria-hidden", "true")
            } else {
                e.preventDefault()
            }
        }
    })
};
bt.confirmSubmit = function confirmSubmit(confirmationForm) {
    $(confirmationForm).bind("submit", function(e) {
        var currentSettings = $.extend({}, bt.colorboxDefaults);
        var the_form = $(e.currentTarget);
        var submit_event = e;
        e.preventDefault();
        e.stopPropagation();
        var content = "";
        if (the_form.hasClass("edit_home_away")) {
            content = $("<div id='lightbox_content'>	<h2>Are you sure you want to make these changes?</h2>	<p>We will need some time to process this order. This means you can’t order or change anything else for a while.</p>	<div class='buttons'>		<div class='button'><span class='secondaryButton'><input type='button' name='cancel' value='Continue editing'></span></div>		<div class='button'><span class='primaryButton'><input type='button' name='confirm' value='Confirm changes'></span></div>	</div></div>")
        } else {
            if (the_form.hasClass("cease_home_away")) {
                content = $("<div id='lightbox_content'>	<h2>Are you sure you want to stop using Home Away?</h2>	<p>You will no longer be able to use Home Away on your smartphone or access this page.</p>	<div class='buttons'>		<div class='button'><span class='secondaryButton'><input type='button' name='cancel' value='Continue using Home Away'></span></div>		<div class='button'><span class='primaryButton'><input type='button' name='confirm' value='Confirm'></span></div>	</div></div>")
            }
        }
        currentSettings.html = content;
        currentSettings.onComplete = function() {
            currentSettings.html.find("input[name=cancel]").get(0).focus()
        };
        $.colorbox(currentSettings);
        currentSettings.html.find("input[type=button]").bind("click", function(e) {
            $.colorbox.close();
            if (e.currentTarget.name == "confirm") {
                the_form.unbind("submit").submit()
            }
            if ($(this).attr("name") == "cancel") {
                $(submit_event.target).find('input[type="submit"], .stop_home_away a.arrow_link').get(0).focus()
            }
            return false
        })
    })
};
bt.accordian = function accordion() {
    var $accordion = $(".accordion"),
        $panels = $accordion.find("li"),
        $titles = $panels.find("h3"),
        $content = $panels.find(".accordionContent");
    $content.attr({
        "aria-hidden": "true"
    });
    $titles.bind("click", function(e) {
        var $this = $(this);
        e.preventDefault();
        if ($this.next().is(":hidden")) {
            $panels.removeClass("open").find("div.accordionContent").slideUp(300).attr({
                "aria-hidden": "true"
            });
            $this.next().slideDown().attr({
                "aria-hidden": "false"
            }).parent().addClass("open")
        } else {
            if ($this.next().is(":visible")) {
                $panels.removeClass("open");
                $this.next().slideUp(300).attr({
                    "aria-hidden": "true"
                })
            }
        }
    })
};
var lbi = lbi || {};
lbi.tabs = {
    initialiseTabs: function() {
        $(".tabbedContent").each(function() {
            $(this).attr({
                role: "tabpanel",
                "aria-labelledby": this.id + "_tab"
            })
        }).eq(0).attr("aria-hidden", false).end().not(":first").attr("aria-hidden", true);
        $(".tabs").attr("role", "tablist").delegate("a", "click", function() {
            var $link = $(this),
                href = $link.attr("href");
            $link.parent().addClass("active").siblings().removeClass("active");
            $(href.substr(href.indexOf("#"))).css("display", "block").attr("aria-hidden", false).siblings(".tabbedContent").hide().attr("aria-hidden", true);
            return false
        }).find("li").attr("role", "tab");
        var $active_tab = $(".tabs li.active");
        if ($active_tab.length === 0) {
            $active_tab = $(".tabs li:first-child")
        }
        $active_tab.find("a").click()
    }
};
lbi.checkbox = {
    initialiseCheckboxes: function() {
        $("input[type=checkbox]").bind("change", function(e) {
            $(this).toggleClass("on")
        })
    }
};
$(function() {
    bt.cxtHelp(".cxtHelpLink", ".cxtHelp");
    bt.confirmSubmit(".manage_users form");
    $(".manage_users_user_view .stop_home_away a.arrow_link").bind("click", function(e) {
        e.preventDefault();
        $(this).parents("form").submit()
    });
    bt.accordian();
    lbi.tabs.initialiseTabs();
    lbi.checkbox.initialiseCheckboxes()
});