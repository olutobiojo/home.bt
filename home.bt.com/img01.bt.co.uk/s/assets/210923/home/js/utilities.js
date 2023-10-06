!(function(namespace) {
    window.namespace = window.namespace || {};
    var user = {
        getCookie: function(cookiename) {
            var cookiestring = "" + document.cookie;
            var index1 = cookiestring.indexOf(cookiename);
            if (index1 == -1 || cookiename == "")
                return "";
            var index2 = cookiestring.indexOf(';', index1);
            if (index2 == -1)
                index2 = cookiestring.length;
            return unescape(cookiestring.substring(index1 + cookiename.length + 1, index2));
        },
        getUserStatus: function() {
            var smsession = this.getCookie("SMSESSION"),
                spcookie = this.getCookie("sportproduct");
            var userStatus = {
                "isUserLogged": false,
                "subscriptionType": "NA"
            };
            if (smsession !== null && smsession !== "LOGGEDOFF" && smsession !== "") {
                userStatus.isUserLogged = true;
            }
            if (spcookie !== null && spcookie !== "") {
                if (spcookie === 'B') {
                    userStatus.subscriptionType = 'Basic';
                } else if (spcookie === 'P') {
                    userStatus.subscriptionType = 'Premium';
                } else {
                    userStatus.subscriptionType = spcookie;
                }
            }
            return userStatus;
        },
        getPermissionFor: function(rights) {
            var userStatus = this.getUserStatus();

            if (rights === 'Free') {
                return 'AUTHORISED';
            }

            if (!userStatus.isUserLogged) {
                return 'AUTHENTICATION_REQUIRED';
            }

            if (((rights === 'Premium') && (userStatus.subscriptionType !== 'Premium')) ||
                ((rights === 'Basic') && (userStatus.subscriptionType === 'NA'))) {
                return 'UPGRADE_REQUIRED';
            }

            return 'AUTHORISED';
        }
    };
    //window.namespace.utils.user = user;
    window.namespace.user = user;

}(window.namespace));

window.namespace.utils = window.namespace.utils || {};
window.namespace.utils.events = window.namespace.utils.events || {};
window.namespace.utils.events.onBreakPointReached = onBreakPointReached;

function onBreakPointReached(callback, opts) {
    if (!isSetup) {
        setup();
    }

    var opts = opts || {};

    emitter.on('change', function() {
        callback({
            device: currentViewPort,
            upperBreakPoint: viewPortDeviceSizeMapConst[currentViewPort.viewPort]
        });
    });

    if (opts.autorun) {
        $j(document).ready(function() {
            viewPortCheck();
        });
    }
}

var viewPortDeviceSizeMapSequence = [],
    viewPortDeviceSizeMapConst = {},
    viewPortDeviceSizeMapRange = [],
    isSetup = false,
    viewPortDeviceSizeMap = viewPortDeviceSizeMapConstants(),
    currentViewPort = viewPortDeviceSizeMap.VIEW_PORT_DEFAULT,
    oldViewPort,
    emitter = $({}),
    viewPortMapConfig = function(label, breakPoint, min, max) {

        /**
         * Create view port device range model
         */
        viewPortDeviceSizeMapRange.push({
            viewPort: label,
            minim: min,
            maxim: max
        });

        viewPortDeviceSizeMapSequence.push(label);

        viewPortDeviceSizeMapConst[label] = breakPoint;

    };

function setup() {
    $(window).on('resize', viewPortCheck);
}

viewPortMapConfig('VIEW_PORT_DEFAULT', 0, 0, 0);
viewPortMapConfig('VIEW_PORT_X_SMALL', 320, 1, 319);
viewPortMapConfig('VIEW_PORT_SMALL', 768, 320, 767);
viewPortMapConfig('VIEW_PORT_MEDIUM', 1024, 768, 1023);
viewPortMapConfig('VIEW_PORT_LARGE', 1200, 1024, Infinity);

function viewPortDeviceSizeMapConstants() {

    /**
     * Protected constants
     */
    return viewPortDeviceSizeMapConst;
}

function viewPortCheck() {
    var x = $(document).width();

    oldViewPort = currentViewPort;

    currentViewPort = viewPortDeviceSizeMapRange.filter(function(item) {
        return (x >= item.minim) && (x <= item.maxim);
    })[0];

    if (!oldViewPort || oldViewPort.viewPort !== currentViewPort.viewPort) {
        emitter.trigger('change');
    }
}