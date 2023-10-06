window.digitalData = {
    application: {
        name: "Login Page",
        environment: "Live",
        version: "",
        is_spa: false
    },
    vendor: {
        adobe: {
            analytics: {
                pageName: analyticsPageName
            }
        }
    },
    page: {
        title: document.title,
        url: location.href,
        referrer: document.referrer,
        breadcrumb: ["Login", formTarget],
        language: "en-GB",
        timestamp: new Date(),
        category: {
            primaryCategory: "Customer",
            type: "Service",
            channel: "Consumer",
            area: "Login"
        },
        form: {
            type: "Login",
            target: formTarget,
        }
    }
};
window._exhaust_init_queue = window._exhaust_init_queue || [];
window.emitToExhaust = function(event_name, json_payload) {
    var args = arguments;
    if (typeof window._exhaust == "object") {
        window._exhaust.trigger.apply(window._exhaust, args);
        return true
    } else {
        window._exhaust_init_queue.push(args);
        return false
    }
};