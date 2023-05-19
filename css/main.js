(this["webpackJsonpkaruta-website"] = this["webpackJsonpkaruta-website"] || []).push([
    [3], {
        20: function(e, n, t) {
            e.exports = t(36)
        },
        25: function(e, n, t) {},
        31: function(e, n, t) {},
        36: function(e, n, t) {
            "use strict";
            t.r(n);
            var a = t(0),
                l = t.n(a),
                r = t(14),
                c = t.n(r),
                o = t(11),
                i = t(13),
                u = t(12),
                m = t(18),
                s = t(5),
                h = (t(25), l.a.lazy((function() {
                    return t.e(14).then(t.bind(null, 105))
                }))),
                p = l.a.lazy((function() {
                    return t.e(13).then(t.bind(null, 106))
                })),
                d = l.a.lazy((function() {
                    return Promise.all([t.e(0), t.e(1), t.e(15)]).then(t.bind(null, 107))
                })),
                f = l.a.lazy((function() {
                    return Promise.all([t.e(0), t.e(1), t.e(11)]).then(t.bind(null, 108))
                })),
                b = l.a.lazy((function() {
                    return Promise.all([t.e(0), t.e(2), t.e(16), t.e(12)]).then(t.bind(null, 109))
                })),
                y = l.a.lazy((function() {
                    return Promise.all([t.e(0), t.e(2), t.e(8)]).then(t.bind(null, 112))
                })),
                E = l.a.lazy((function() {
                    return Promise.all([t.e(0), t.e(7), t.e(6)]).then(t.bind(null, 110))
                })),
                w = l.a.lazy((function() {
                    return Promise.all([t.e(0), t.e(9)]).then(t.bind(null, 111))
                })),
                x = l.a.lazy((function() {
                    return Promise.all([t.e(0), t.e(10)]).then(t.bind(null, 113))
                })),
                z = function(e) {
                    Object(i.a)(t, e);
                    var n = Object(u.a)(t);

                    function t() {
                        var e;
                        Object(o.a)(this, t);
                        for (var a = arguments.length, r = new Array(a), c = 0; c < a; c++) r[c] = arguments[c];
                        return (e = n.call.apply(n, [this].concat(r))).render = function() {
                            return l.a.createElement("div", {
                                className: "app"
                            }, l.a.createElement(l.a.Suspense, {
                                fallback: null
                            }, l.a.createElement(m.a, null, l.a.createElement(s.c, null, l.a.createElement(s.a, {
                                exact: !0,
                                path: "/terms",
                                component: h
                            }), l.a.createElement(s.a, {
                                exact: !0,
                                path: "/login",
                                component: w
                            }), l.a.createElement(s.a, {
                                exact: !0,
                                path: "/verify",
                                component: d
                            }), l.a.createElement(s.a, {
                                exact: !0,
                                path: "/appeal",
                                component: f
                            }), l.a.createElement(s.a, {
                                exact: !0,
                                path: "/backgrounds",
                                component: b
                            }), l.a.createElement(s.a, {
                                exact: !0,
                                path: "/studio/:hash",
                                component: E
                            }), l.a.createElement(s.a, {
                                exact: !0,
                                path: "/dyes/:uid",
                                component: y
                            }), l.a.createElement(s.a, {
                                exact: !0,
                                path: "/glossary/:system?/:category?/:term?",
                                component: x
                            }), l.a.createElement(s.a, {
                                component: p
                            })))))
                        }, e
                    }
                    return t
                }(l.a.Component);
            t(31), t(32), t(33), t(34), t(35);
            window.devicePixelRatio = 1;
            var g = function() {
                var e = document.body.getBoundingClientRect(),
                    n = e.width / e.height > .75 ? e.height / 40 : e.width / 30;
                document.documentElement.style.fontSize = "".concat(Math.min(16, n), "px")
            };
            window.addEventListener("resize", g), g(), c.a.render(l.a.createElement(l.a.StrictMode, null, l.a.createElement(z, null)), document.getElementById("root"))
        }
    },
    [
        [20, 4, 5]
    ]
]);