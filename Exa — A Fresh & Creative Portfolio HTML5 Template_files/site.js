function themeMouseMove() {
    screenHasMouse = !0
}

function themeTouchStart() {
    jQuery(window).off("mousemove"), screenHasMouse = !1, setTimeout(function() {
        jQuery(window).on("mousemove", themeMouseMove)
    }, 250)
}
jQuery("html").removeClass("no-js"), "ontouchstart" in window || navigator.maxTouchPoints > 0 || navigator.msMaxTouchPoints > 0 || jQuery("html").addClass("no-touch");
var screenHasMouse = !1;
/(iPad|iPhone|iPod)/g.test(navigator.userAgent) || (jQuery(window).on("touchstart", themeTouchStart).on("mousemove", themeMouseMove), window.navigator.msPointerEnabled && document.addEventListener("MSPointerDown", themeTouchStart, !1)), jQuery(document).ready(function() {
    "use strict";
    jQuery("#top .site-menu-toggle").on("click", function(a) {
        jQuery("#top").toggleClass("open-mobile-menu"), a.preventDefault()
    }), jQuery(document).on({
        mouseenter: function() {
            screenHasMouse && jQuery(this).addClass("hover")
        },
        mouseleave: function() {
            screenHasMouse && jQuery(this).removeClass("hover")
        }
    }, "#site-menu li:not(.menu-item-search)"), jQuery("html").hasClass("no-touch") || (jQuery("#site-menu li.menu-item-has-children > a").on("click", function(a) {
        if (!screenHasMouse && !window.navigator.msPointerEnabled && !jQuery("#top .site-menu-toggle").is(":visible")) {
            var b = jQuery(this).parent();
            b.parents(".hover").length || jQuery("#site-menu li.menu-item-has-children").not(b).removeClass("hover"), b.toggleClass("hover"), a.preventDefault()
        }
    }), jQuery(document).on("click", function(a) {
        jQuery(a.target).parents("#site-menu").length > 0 || jQuery("#site-menu li.menu-item-has-children, #site-menu li.menu-item-search").removeClass("hover")
    })), jQuery("#site-menu li.menu-item-search > a").on("click", function(a) {
        var b = jQuery(this).parent();
        b.parents(".hover").length || jQuery("#site-menu li.menu-item-has-children").not(b).removeClass("hover"), b.toggleClass("hover"), b.hasClass("hover") && window.setTimeout(function() {
            jQuery('#site-menu .searchform input[type="search"]').focus()
        }, 150), a.preventDefault()
    }), jQuery(".tabs a").on("click", function(a) {
        var b = jQuery(this).parent();
        if (a.preventDefault(), !b.hasClass("active")) {
            b.siblings("li").each(function() {
                jQuery(this).removeClass("active"), jQuery(jQuery(this).find("a").attr("href")).hide()
            }), b.addClass("active");
            var c = b.find("a").attr("href");
            jQuery(c).show()
        }
    })
}), ! function(a) {
    function b() {
        g.setAttribute("content", m), n = !0
    }

    function c() {
        g.setAttribute("content", l), n = !1
    }

    function d(d) {
        return a.orientation, 90 == Math.abs(a.orientation) ? void(n && b()) : (j = d.accelerationIncludingGravity, h = Math.abs(j.x), i = Math.abs(j.y), void(0 == i || h / i > 1.2 ? n && c() : n || b()))
    }
    var e = navigator.userAgent;
    if (/iPhone|iPad|iPod/.test(navigator.platform) && /OS [1-5]_[0-9_]* like Mac OS X/i.test(e) && e.indexOf("AppleWebKit") > -1 && -1 == e.indexOf("CriOS")) {
        var f = a.document;
        if (f.querySelector) {
            var g = f.querySelector("meta[name=viewport]");
            if (g) {
                var h, i, j, k = g && g.getAttribute("content"),
                    l = k + ",maximum-scale=1",
                    m = k + ",maximum-scale=10",
                    n = !0;
                a.addEventListener("orientationchange", b, !1), a.addEventListener("devicemotion", d, !1)
            }
        }
    }
}(this), window.Modernizr = function(a, b, c) {
    function d(a) {
        q.cssText = a
    }

    function f(a, b) {
        return typeof a === b
    }

    function g(a, b) {
        return !!~("" + a).indexOf(b)
    }

    function h(a, b) {
        for (var d in a) {
            var e = a[d];
            if (!g(e, "-") && q[e] !== c) return "pfx" == b ? e : !0
        }
        return !1
    }

    function i(a, b, d) {
        for (var e in a) {
            var g = b[a[e]];
            if (g !== c) return d === !1 ? a[e] : f(g, "function") ? g.bind(d || b) : g
        }
        return !1
    }

    function j(a, b, c) {
        var d = a.charAt(0).toUpperCase() + a.slice(1),
            e = (a + " " + v.join(d + " ") + d).split(" ");
        return f(b, "string") || f(b, "undefined") ? h(e, b) : (e = (a + " " + w.join(d + " ") + d).split(" "), i(e, b, c))
    }
    var r, C, F, k = "2.8.3",
        l = {},
        m = !0,
        n = b.documentElement,
        o = "modernizr",
        p = b.createElement(o),
        q = p.style,
        t = ({}.toString, " -webkit- -moz- -o- -ms- ".split(" ")),
        u = "Webkit Moz O ms",
        v = u.split(" "),
        w = u.toLowerCase().split(" "),
        x = {},
        A = [],
        B = A.slice,
        D = function(a, c, d, e) {
            var f, g, h, i, j = b.createElement("div"),
                k = b.body,
                l = k || b.createElement("body");
            if (parseInt(d, 10))
                for (; d--;) h = b.createElement("div"), h.id = e ? e[d] : o + (d + 1), j.appendChild(h);
            return f = ["&#173;", '<style id="s', o, '">', a, "</style>"].join(""), j.id = o, (k ? j : l).innerHTML += f, l.appendChild(j), k || (l.style.background = "", l.style.overflow = "hidden", i = n.style.overflow, n.style.overflow = "hidden", n.appendChild(l)), g = c(j, a), k ? j.parentNode.removeChild(j) : (l.parentNode.removeChild(l), n.style.overflow = i), !!g
        },
        E = {}.hasOwnProperty;
    F = f(E, "undefined") || f(E.call, "undefined") ? function(a, b) {
        return b in a && f(a.constructor.prototype[b], "undefined")
    } : function(a, b) {
        return E.call(a, b)
    }, Function.prototype.bind || (Function.prototype.bind = function(a) {
        var b = this;
        if ("function" != typeof b) throw new TypeError;
        var c = B.call(arguments, 1),
            d = function() {
                if (this instanceof d) {
                    var e = function() {};
                    e.prototype = b.prototype;
                    var f = new e,
                        g = b.apply(f, c.concat(B.call(arguments)));
                    return Object(g) === g ? g : f
                }
                return b.apply(a, c.concat(B.call(arguments)))
            };
        return d
    }), x.csstransforms3d = function() {
        var a = !!j("perspective");
        return a && "webkitPerspective" in n.style && D("@media (transform-3d),(-webkit-transform-3d){#modernizr{left:9px;position:absolute;height:3px;}}", function(b, c) {
            a = 9 === b.offsetLeft && 3 === b.offsetHeight
        }), a
    }, x.csstransitions = function() {
        return j("transition")
    };
    for (var G in x) F(x, G) && (C = G.toLowerCase(), l[C] = x[G](), A.push((l[C] ? "" : "no-") + C));
    return l.addTest = function(a, b) {
        if ("object" == typeof a)
            for (var d in a) F(a, d) && l.addTest(d, a[d]);
        else {
            if (a = a.toLowerCase(), l[a] !== c) return l;
            b = "function" == typeof b ? b() : b, "undefined" != typeof m && m && (n.className += " " + (b ? "" : "no-") + a), l[a] = b
        }
        return l
    }, d(""), p = r = null, l._version = k, l._prefixes = t, l._domPrefixes = w, l._cssomPrefixes = v, l.testProp = function(a) {
        return h([a])
    }, l.testAllProps = j, l.testStyles = D, n.className = n.className.replace(/(^|\s)no-js(\s|$)/, "$1$2") + (m ? " js " + A.join(" ") : ""), l
}(this, this.document);